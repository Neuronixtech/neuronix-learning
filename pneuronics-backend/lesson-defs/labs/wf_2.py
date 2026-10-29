"""Teaching implementation (our own): Workflow Patterns Part 2 - parallelization and orchestrator-workers."""
import time
from collections import Counter
from concurrent.futures import ThreadPoolExecutor

from wf_1 import ScriptedLLM


def parallel_vote(llm, prompt, n=3):
    def run_once(_):
        return llm.generate(f"Vote on this:\n{prompt}")
    with ThreadPoolExecutor(max_workers=n) as pool:
        votes = list(pool.map(run_once, range(n)))
    counts = Counter(votes)
    winner = counts.most_common(1)[0][0]
    return votes, winner


def parallel_sections(task, workers, strict=True):
    def run_worker(item):
        name, worker = item
        try:
            return name, worker(task)
        except Exception as exc:
            if strict:
                raise
            return name, f"FAILED: {type(exc).__name__}: {exc}"
    with ThreadPoolExecutor(max_workers=len(workers)) as pool:
        return dict(pool.map(run_worker, workers.items()))


def orchestrator_workers(llm, task, workers):
    selected, lowered = [], task.lower()
    if "research" in lowered:
        selected.append("researcher")
    if "code" in lowered:
        selected.append("coder")
    if not selected:
        selected.append("generalist")
    results = {}
    for worker_name in selected:
        results[worker_name] = workers[worker_name](task)
    synthesis = llm.generate(f"Synthesize worker results for task: {task}\nRESULTS:\n{results}")
    return selected, results, synthesis


WORKERS = {
    "researcher": lambda task: f"Research findings for {task}",
    "coder": lambda task: f"Code implementation for {task}",
    "generalist": lambda task: f"General solution for {task}",
}


def slow(seconds, label):
    def worker(task):
        time.sleep(seconds)
        return f"{label} done"
    return worker


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Voting: independent runs, then aggregation")
    votes, winner = parallel_vote(ScriptedLLM(), "Should this deployment proceed?", n=3)
    print("votes :", votes)
    print("winner:", winner, "| counts:", dict(Counter(votes)))

    section("2. Genuinely checking: the scripted vote and threads")
    orders, winners, call_counts = Counter(), Counter(), Counter()
    for _ in range(2000):
        llm = ScriptedLLM()
        v, w = parallel_vote(llm, "Should this deployment proceed?", n=3)
        orders[tuple(v)] += 1
        winners[w] += 1
        call_counts[llm.calls] += 1
    print("distinct vote orderings over 2000 runs:", dict(orders))
    print("winners:", dict(winners), "| model calls per run:", dict(call_counts))
    print("pool.map returns results in submission order, but WHICH thread got which scripted answer depends on scheduling")

    section("3. Genuinely checking: ties need a policy")
    for votes in (["YES", "YES", "NO"], ["YES", "NO", "YES", "NO"], ["NO", "YES", "NO", "YES"]):
        print(f"{votes} -> most_common winner: {Counter(votes).most_common(1)[0][0]}")
    print("with a tie the winner is whichever answer appeared first, an accident of ordering, not a decision")

    section("4. Sectioning and measured latency")
    workers = {"security": slow(0.3, "security"), "performance": slow(0.3, "performance"), "style": slow(0.3, "style")}
    t0 = time.perf_counter()
    for name, w in workers.items():
        w("code")
    sequential = time.perf_counter() - t0
    t0 = time.perf_counter()
    out = parallel_sections("code", workers)
    parallel = time.perf_counter() - t0
    print("results:", out)
    print(f"sequential: {sequential:.2f}s | parallel: {parallel:.2f}s | speed-up x{sequential / parallel:.1f} (3 workers, 0.3 s each)")
    print("wall-clock fell towards the slowest worker; total work, and total model cost, did not fall")

    section("5. Genuinely checking: one failing worker")
    def broken(task):
        raise RuntimeError("performance analyzer timed out")
    mixed = {"security": slow(0.05, "security"), "performance": broken, "style": slow(0.05, "style")}
    try:
        parallel_sections("code", mixed, strict=True)
    except RuntimeError as e:
        print("strict policy: whole fan-out failed ->", e, "(the two good results were discarded)")
    print("best-effort policy:", parallel_sections("code", mixed, strict=False))

    section("6. Orchestrator-workers: the task picks the workers")
    llm = ScriptedLLM()
    for task in ("Research workflow patterns and write code", "Write code for a calculator", "Research electric vehicle batteries", "Explain this concept"):
        selected, results, synthesis = orchestrator_workers(llm, task, WORKERS)
        print(f"{task!r:<46} -> {selected}")
    selected, results, synthesis = orchestrator_workers(ScriptedLLM(), "Research workflow patterns and write code", WORKERS)
    print("results:", results)
    print("synthesis:", synthesis)

    section("7. Genuinely checking: keyword worker selection")
    for task in ("Explain unicode normalization", "Describe the barcode format", "Summarise the researcher's biography"):
        print(f"{task!r:<44} -> {orchestrator_workers(ScriptedLLM(), task, WORKERS)[0]}")
    print("substring matching sent unrelated tasks to the coder and researcher; an allowlist of structured model output is safer")
    allowed = set(WORKERS)
    for proposal in (["researcher", "coder"], ["researcher", "delete_production_database"]):
        ok = all(p in allowed for p in proposal)
        print(f"model proposed {proposal} -> {'accepted' if ok else 'rejected: not in the worker registry'}")

    section("8. Orchestrated workers can themselves run in parallel")
    selected = ["researcher", "coder"]
    ws = {"researcher": slow(0.3, "researcher"), "coder": slow(0.3, "coder")}
    t0 = time.perf_counter()
    r = parallel_sections("task", ws)
    print(f"{selected} in parallel: {time.perf_counter() - t0:.2f}s (independent) -- but a coder that needs the researcher's output must stay sequential")


if __name__ == "__main__":
    main()
