"""Teaching implementation (our own): production runtime shapes, Part 1 - one reusable agent loop inside three shells: request-response, streaming and durable
execution with checkpoints. Steps are scripted functions with small sleeps; files are real; no language model is involved."""
import json
import os
import tempfile
import time
from pathlib import Path

STEPS = ["understand task", "gather context", "analyze evidence", "compose answer", "validate answer"]


def agent_step(name, delay=0.02):
    time.sleep(delay)
    return f"done: {name}"


def agent_loop(task, steps=STEPS, on_step=None, delay=0.02):
    out = []
    for i, s in enumerate(steps):
        out.append(agent_step(s, delay))
        if on_step:
            on_step(i, out[-1])
    return out


def request_response(task):
    t0 = time.perf_counter()
    result = agent_loop(task)
    return result, time.perf_counter() - t0


def streaming(task, delay=0.02):
    t0 = time.perf_counter()
    for i, s in enumerate(STEPS):
        yield i, agent_step(s, delay), time.perf_counter() - t0


def write_plain(path, data):
    Path(path).write_text(json.dumps(data), encoding="utf-8")


def write_atomic(path, data):
    tmp = Path(str(path) + ".tmp")
    with open(tmp, "w", encoding="utf-8") as f:
        json.dump(data, f)
        f.flush()
        os.fsync(f.fileno())
    os.replace(tmp, path)


def durable_run(path, crash_after=None, writer=write_atomic, steps=STEPS):
    """Load the checkpoint, execute remaining steps, save after each one. Returns the steps executed in this process."""
    done = []
    state = {"next": 0}
    if Path(path).exists():
        state = json.loads(Path(path).read_text(encoding="utf-8"))
    for i in range(state["next"], len(steps)):
        if crash_after is not None and i == crash_after:
            raise RuntimeError(f"worker crashed at step {i}")
        agent_step(steps[i], 0.0)
        done.append(steps[i])
        writer(path, {"next": i + 1})
    return done


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Genuinely measuring: request-response blocks for the whole run")
    result, took = request_response("analyse")
    print(f"steps={len(result)} total latency={took * 1000:.0f} ms (5 steps of about 20 ms); the caller saw nothing until all five finished")

    section("2. Genuinely measuring: streaming shows progress, and first-chunk latency differs from total latency")
    first = None
    for i, msg, t in streaming("analyse"):
        first = first or t
        print(f"  chunk {i} at {t * 1000:5.0f} ms: {msg}")
    print(f"first chunk after {first * 1000:.0f} ms, last chunk after {t * 1000:.0f} ms: the user waits for a fifth of the time before seeing anything, but the total work is unchanged")
    consumed = 0
    for i, msg, t in streaming("analyse"):
        consumed += 1
        if i == 1:
            break
    print(f"a client that disconnected after chunk 1 stopped the generator at {consumed} chunks; nothing was saved, so the work done so far is lost unless the loop also checkpoints")

    section("3. Genuinely checking: durable execution resumes at the failed step")
    with tempfile.TemporaryDirectory() as d:
        cp = Path(d) / "run.json"
        try:
            durable_run(cp, crash_after=2)
        except RuntimeError as e:
            print("first worker:", e, "| checkpoint on disk:", cp.read_text())
        resumed = durable_run(cp)
        print("replacement worker executed:", resumed)
        print("steps repeated by the replacement worker:", [s for s in resumed if s in STEPS[:2]])
    with tempfile.TemporaryDirectory() as d:
        cp = Path(d) / "run.json"
        try:
            durable_run(cp, crash_after=2, steps=STEPS)
        except RuntimeError:
            pass
        cp.unlink()
        fresh = durable_run(cp)
        print(f"with no checkpoint the replacement worker re-ran {len(fresh)} steps instead of {len(resumed)}")

    section("4. Genuinely checking: a torn checkpoint write, plain versus atomic")
    with tempfile.TemporaryDirectory() as d:
        cp = Path(d) / "run.json"
        write_plain(cp, {"next": 2})
        cp.write_text('{"next": ', encoding="utf-8")  # simulate a crash halfway through an in-place overwrite
        try:
            json.loads(cp.read_text())
            plain = "readable"
        except json.JSONDecodeError:
            plain = "CORRUPT"
        write_atomic(cp, {"next": 2})
        tmp = Path(str(cp) + ".tmp")
        tmp.write_text('{"next": ', encoding="utf-8")  # a crash while writing the temp file leaves the real file untouched
        try:
            json.loads(cp.read_text())
            atomic = "readable"
        except json.JSONDecodeError:
            atomic = "CORRUPT"
        print(f"crash during an in-place overwrite -> checkpoint {plain}; crash while writing the temp file of an atomic write -> checkpoint {atomic} ({cp.read_text()})")
    print("writing to a temp file and replacing it keeps the last good checkpoint readable; this protects one file, and it does not make the checkpoint and any external side effect atomic together")

    section("5. Genuinely checking: a retried step that already had a side effect")
    effects = []

    def send_step(name):
        effects.append(name)

    with tempfile.TemporaryDirectory() as d:
        cp = Path(d) / "run.json"
        steps = ["draft", "send email", "record"]
        try:
            i0 = 0
            for i, s in enumerate(steps):
                if s == "send email":
                    send_step(s)
                    raise RuntimeError("crash after the email was sent but before the checkpoint")
                write_atomic(cp, {"next": i + 1})
        except RuntimeError:
            pass
        st = json.loads(cp.read_text())
        for i in range(st["next"], len(steps)):
            if steps[i] == "send email":
                send_step(steps[i])
            write_atomic(cp, {"next": i + 1})
    print(f"emails actually sent: {effects.count('send email')}")
    print("the checkpoint recorded 'draft' only, so the resume repeated the send; durable execution makes steps resumable, not exactly-once, so side-effecting steps need an idempotency key")


if __name__ == "__main__":
    main()
