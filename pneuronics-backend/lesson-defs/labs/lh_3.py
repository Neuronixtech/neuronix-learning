"""Teaching implementation (our own): long-horizon agents, Part 3 - a bounded scripted agent loop with a trajectory log, JSON checkpoints and crash recovery, memory compaction, and a trajectory monitor.
The agent is a scripted stand-in (no language model); tasks, tools and the crash are invented for the lab."""
import json
import tempfile
from pathlib import Path


class ScriptedAgent:
    """Stand-in agent: works through a fixed list of steps; the 'tool' just appends to a result list."""

    def __init__(self, steps):
        self.steps = steps

    def act(self, i):
        return {"tool": "work", "arg": self.steps[i]}


def run(steps, ckpt_path, crash_at=None, max_steps=100, start_fresh=False):
    ckpt = Path(ckpt_path)
    state = {"next": 0, "done": []}
    if ckpt.exists() and not start_fresh:
        state = json.loads(ckpt.read_text(encoding="utf-8"))
    agent = ScriptedAgent(steps)
    executed = []
    taken = 0
    while state["next"] < len(steps):
        if taken >= max_steps:
            return state, executed, "step budget"
        i = state["next"]
        if crash_at is not None and i == crash_at:
            return state, executed, "crashed"
        action = agent.act(i)
        executed.append(i)
        state["done"].append(action["arg"])
        state["next"] = i + 1
        ckpt.write_text(json.dumps(state), encoding="utf-8")
        taken += 1
    return state, executed, "finished"


def compact(history, keep_recent):
    if len(history) <= keep_recent:
        return history, 0
    old, recent = history[:-keep_recent], history[-keep_recent:]
    summary = {"summary_of": len(old), "first": old[0], "last": old[-1]}
    return [summary] + recent, len(old)


def monitor(trajectory, repeat_limit=3, step_limit=12):
    """Return the first problem found in a list of (tool, arg) pairs, or None."""
    run_len = 1
    for i in range(1, len(trajectory)):
        run_len = run_len + 1 if trajectory[i] == trajectory[i - 1] else 1
        if run_len >= repeat_limit:
            return f"repeat of {trajectory[i]} {run_len} times at step {i + 1}"
    if len(trajectory) > step_limit:
        return f"step count {len(trajectory)} exceeds limit {step_limit}"
    return None


def section(t):
    print(f"\n--- {t} ---")


def main():
    steps = [f"step{i}" for i in range(8)]
    with tempfile.TemporaryDirectory() as d:
        ckpt = Path(d) / "ckpt.json"

        section("1. Genuinely running: a crash at step 5 and recovery from a checkpoint")
        s1, ex1, why1 = run(steps, ckpt, crash_at=5)
        print("first run:", why1, "| steps executed:", ex1, "| checkpoint next:", s1["next"])
        s2, ex2, why2 = run(steps, ckpt)
        print("second run:", why2, "| steps executed:", ex2, "| done:", len(s2["done"]))
        print("steps executed across both runs:", ex1 + ex2, "| any step run twice:", len(set(ex1 + ex2)) != len(ex1 + ex2))
        print("the second run resumed at step 5 instead of step 0, so no step ran twice; this works here because every step is a pure append, and a step with an outside effect would also need an idempotency key")

        section("2. Genuinely running: the same crash without a checkpoint")
        ckpt2 = Path(d) / "none.json"
        a1, e1, _ = run(steps, ckpt2, crash_at=5)
        ckpt2.unlink(missing_ok=True)
        a2, e2, _ = run(steps, ckpt2, start_fresh=True)
        print("steps executed across both runs:", e1 + e2, "| total:", len(e1 + e2))
        print("without a saved position the second run began at step 0, so five steps ran twice and the total was 13 instead of 8")

        section("3. Genuinely running: a step budget stops a loop")
        ckpt3 = Path(d) / "budget.json"
        s3, e3, why3 = run([f"s{i}" for i in range(50)], ckpt3, max_steps=10)
        print("stopped because of:", why3, "| steps taken:", len(e3), "| next:", s3["next"])
        print("a hard cap on steps ends the run even though the task is not finished, and the checkpoint records how far it got so a human can decide whether to continue")

    section("4. Genuinely computing: memory compaction")
    history = [{"step": i, "note": f"observation {i}"} for i in range(30)]
    new, folded = compact(history, 8)
    print("before:", len(history), "entries | after:", len(new), "entries | folded:", folded)
    print("first entry after compaction:", new[0])
    print("the 22 old entries became one summary record and the 8 recent ones stayed in full; the summary keeps only the count and the first and last entry, so detail in the middle is gone, and anything recovery needs must live in an exact log instead")

    section("5. Genuinely running: a trajectory monitor")
    good = [("read", "a"), ("edit", "a"), ("test", "a"), ("edit", "b")]
    loop = [("read", "a"), ("edit", "a"), ("edit", "a"), ("edit", "a"), ("test", "a")]
    long = [("read", str(i)) for i in range(15)]
    for name, tr in (("normal", good), ("repeat loop", loop), ("too long", long)):
        print(f"{name:12} -> {monitor(tr)}")
    print("the monitor flags three identical steps in a row and any run longer than twelve steps and says nothing about a trajectory that is wrong but varied, so it is a cheap tripwire and not a correctness check")


if __name__ == "__main__":
    main()
