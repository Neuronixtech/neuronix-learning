"""Teaching implementation (our own): Workflow Patterns Part 3 - evaluator-optimizer, all five patterns, the decision tree."""
from wf_1 import HANDLERS, ScriptedLLM, prompt_chain, route
from wf_2 import WORKERS, orchestrator_workers, parallel_vote


def evaluator_optimizer(llm, task, proposer, evaluator, max_iter=3):
    candidate = proposer(task)
    for iteration in range(1, max_iter + 1):
        verdict = evaluator(task, candidate)
        print(f"[iteration {iteration}] candidate={candidate!r} verdict={verdict!r}")
        if verdict == "PASS":
            return candidate
        candidate = llm.generate(f"Improve this answer using feedback '{verdict}':\n{candidate}")
    return candidate


def make_pair(llm):
    def proposer(task):
        return f"Initial answer for {task}"
    def evaluator(task, candidate):
        return llm.generate(f"Evaluate this candidate for task '{task}':\n{candidate}")
    return proposer, evaluator


def decide(*, one_call_ok, needs_tools, steps_known, categories, independent, subtasks_vary, quality_loop, next_depends_on_observations):
    if one_call_ok:
        return "direct call"
    path = ["augmented LLM"] if needs_tools else []
    if steps_known:
        if categories:
            return "routing"
        if independent:
            return "parallelization"
        if quality_loop:
            return "evaluator-optimizer"
        return "prompt chaining"
    if subtasks_vary and not next_depends_on_observations:
        return "orchestrator-workers"
    if next_depends_on_observations:
        return "agent"
    return " + ".join(path) or "prompt chaining"


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Evaluator-optimizer: FAIL changes the next candidate")
    llm = ScriptedLLM()
    proposer, evaluator = make_pair(llm)
    final = evaluator_optimizer(llm, "Explain why workflows are useful", proposer, evaluator)
    print("final:", final, "| model calls:", llm.calls)

    section("2. Genuinely checking: the budget ran out, what comes back?")
    class AlwaysFail(ScriptedLLM):
        def generate(self, prompt):
            self.calls += 1
            return "FAIL: still missing something" if "evaluate" in prompt.lower() else "A revised answer"
    l2 = AlwaysFail()
    p2, e2 = make_pair(l2)
    out = evaluator_optimizer(l2, "Explain routing", p2, e2, max_iter=2)
    print("returned:", repr(out), "| the caller gets a string and no signal that every evaluation failed")

    section("3. Genuinely checking: the returned candidate was never evaluated")
    l3 = AlwaysFail()
    p3, e3 = make_pair(l3)
    out = evaluator_optimizer(l3, "Explain routing", p3, e3, max_iter=1)
    print("max_iter=1, evaluations printed above: 1; returned:", repr(out))
    print("the loop evaluates, fails, improves, and exits: the improved text is returned unchecked")

    section("4. Genuinely checking: the evaluator can read the answer from the task")
    l4 = ScriptedLLM()
    p4, e4 = make_pair(l4)
    out = evaluator_optimizer(l4, "Explain why workflows need evidence", p4, e4)
    print("a bad first answer passed on iteration 1 because the TASK contains the word 'evidence'")

    section("5. Genuinely checking: exact-string verdicts are fragile")
    class Polite(ScriptedLLM):
        def generate(self, prompt):
            self.calls += 1
            if "evaluate" in prompt.lower():
                return "PASS."
            return "Improved answer with evidence"
    l5 = Polite()
    p5, e5 = make_pair(l5)
    evaluator_optimizer(l5, "Explain routing", p5, e5, max_iter=3)
    print("the model said PASS. with a full stop, so equality never matched and all 3 iterations ran, 6 model calls")
    def structured_verdict(text):
        cleaned = text.strip().upper().rstrip(".!")
        return {"passed": cleaned.startswith("PASS"), "feedback": text if not cleaned.startswith("PASS") else ""}
    for raw in ("PASS", "PASS.", "pass - all criteria satisfied", "FAIL: add evidence"):
        print(f"  {raw!r:<34} -> {structured_verdict(raw)}")

    section("6. All five patterns, with measured model calls")
    totals = {}
    l = ScriptedLLM()
    chained = prompt_chain(l, "Explain workflow architecture", ["Create an outline.", "Draft the explanation.", "Improve the explanation."])
    totals["prompt chaining"] = l.calls
    l = ScriptedLLM()
    category, routed = route(l, "I was charged twice and need a refund.", HANDLERS)
    totals["routing"] = l.calls
    l = ScriptedLLM()
    votes, winner = parallel_vote(l, "Should this deployment proceed?", n=3)
    totals["parallel voting (3)"] = l.calls
    l = ScriptedLLM()
    selected, results, synthesis = orchestrator_workers(l, "Research workflow patterns and write code", WORKERS)
    totals["orchestrator-workers"] = l.calls
    import contextlib, io
    l = ScriptedLLM()
    pr, ev = make_pair(l)
    with contextlib.redirect_stdout(io.StringIO()):
        evaluator_optimizer(l, "Explain why workflows are useful", pr, ev)
    totals["evaluator-optimizer"] = l.calls
    print("chain result    :", chained)
    print("route           :", category, "->", routed)
    print("vote            :", sorted(votes), "->", winner)
    print("orchestrator    :", selected)
    for k, v in totals.items():
        print(f"{k:<24} model calls: {v}")
    print("a single direct call costs 1; every pattern adds calls in exchange for structure")

    section("7. The decision tree as code")
    cases = {
        "summarise one paragraph": dict(one_call_ok=True),
        "translate, proofread, format": dict(steps_known=True),
        "billing, technical or sales request": dict(steps_known=True, categories=True),
        "security + performance + style review": dict(steps_known=True, independent=True),
        "company research, specialists vary": dict(subtasks_vary=True),
        "write until the rubric passes": dict(steps_known=True, quality_loop=True),
        "investigate a production incident": dict(next_depends_on_observations=True),
    }
    base = dict(one_call_ok=False, needs_tools=False, steps_known=False, categories=False, independent=False, subtasks_vary=False, quality_loop=False, next_depends_on_observations=False)
    for name, flags in cases.items():
        print(f"{name:<40} -> {decide(**{**base, **flags})}")
    print("validate an email field? plain code, no model at all")


if __name__ == "__main__":
    main()
