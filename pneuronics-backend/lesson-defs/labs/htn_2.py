"""Teaching implementation (our own): HTN Part 2 - recursive planner, backtracking and a ChatHTN-style LLM fallback."""
from htn_1 import INITIAL, METHODS, OPERATORS, Method, Operator

TASK_ARITY = {"pickup_package": 1, "load_package": 1, "drive_to_customer": 1, "handover_package": 1,
              "deliver_package": 1, "prepare_package": 1, "transport_package": 1}


class ScriptedLLMFallback:
    def __init__(self, quiet=False):
        self.calls = 0
        self.quiet = quiet

    def propose(self, state, task):
        self.calls += 1
        if not self.quiet:
            print(f"\n[LLM fallback call #{self.calls}] task={task}")
            for fact in sorted(state):
                print("   -", fact)
        name, *args = task
        if name == "transport_package":
            p = args[0]
            return [[("teleport_package", p)], [("handover_package", p)], [("drive_to_customer", p)]]
        return []


class HTNPlanner:
    def __init__(self, operators, methods, fallback=None, max_depth=25, verbose=True):
        self.operators, self.methods, self.fallback = operators, methods, fallback
        self.max_depth, self.verbose = max_depth, verbose
        self.nodes = 0

    def _trace(self, depth, message):
        if self.verbose:
            print("  " * depth + message)

    def _known_task(self, task):
        if not task:
            return False
        name = task[0]
        if name not in self.operators and name not in self.methods:
            return False
        expected = TASK_ARITY.get(name)
        return expected is not None and len(task) - 1 == expected

    def _validate_decomposition(self, subtasks):
        return bool(subtasks) and all(self._known_task(t) for t in subtasks)

    def plan(self, initial_state, goal):
        self.nodes = 0
        return self._plan_tasks(set(initial_state), [goal], [], 0)

    def _plan_tasks(self, state, tasks, plan, depth):
        self.nodes += 1
        if depth > self.max_depth:
            self._trace(depth, "DEPTH LIMIT reached")
            return None
        if not tasks:
            return state, plan
        current, remaining = tasks[0], tasks[1:]
        name = current[0]
        if name in self.operators:
            op = self.operators[name]
            self._trace(depth, f"PRIMITIVE {current}")
            if not op.applicable(state, current):
                self._trace(depth, "  -> preconditions failed")
                return None
            nxt = op.execute(state, current)
            self._trace(depth, "  -> executed")
            return self._plan_tasks(nxt, remaining, plan + [current], depth)
        self._trace(depth, f"COMPOUND {current}")
        for method in self.methods.get(name, []):
            if not method.applicable(state, current):
                continue
            subtasks = method.decompose(state, current)
            self._trace(depth, f"TRY METHOD {method.name} -> {subtasks}")
            result = self._plan_tasks(set(state), subtasks + remaining, list(plan), depth + 1)
            if result is not None:
                return result
        if self.fallback is not None:
            self._trace(depth, f"LLM FALLBACK for {current}")
            for candidate in self.fallback.propose(state, current):
                self._trace(depth, f"CANDIDATE {candidate}")
                if not self._validate_decomposition(candidate):
                    self._trace(depth, "  -> rejected: unknown task or wrong arity")
                    continue
                result = self._plan_tasks(set(state), candidate + remaining, list(plan), depth + 1)
                if result is not None:
                    self._trace(depth, "  -> accepted by the symbolic planner")
                    return result
                self._trace(depth, "  -> failed symbolic validation")
        return None


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Without a fallback the planner fails at the gap")
    p0 = HTNPlanner(OPERATORS, METHODS, fallback=None)
    print("result:", p0.plan(INITIAL, ("deliver_package", "P1")))

    section("2. The ChatHTN-style hybrid: candidates are validated symbolically")
    fb = ScriptedLLMFallback()
    planner = HTNPlanner(OPERATORS, METHODS, fallback=fb)
    result = planner.plan(INITIAL, ("deliver_package", "P1"))
    final_state, plan = result
    print("\nFINAL PRIMITIVE PLAN")
    for i, t in enumerate(plan, 1):
        print(f"{i}. {t}")
    print("FINAL STATE:", sorted(final_state))
    print("LLM calls:", fb.calls, "| search nodes visited:", planner.nodes)

    section("3. The plan contains no LLM step")
    print("operators used:", sorted({t[0] for t in plan}), "| all in OPERATORS:", all(t[0] in OPERATORS for t in plan))

    section("4. Genuinely checking: arity validation matters")
    class Naive(HTNPlanner):
        def _known_task(self, task):
            return bool(task) and (task[0] in self.operators or task[0] in self.methods)
    class BadArity(ScriptedLLMFallback):
        def propose(self, state, task):
            return [[("drive_to_customer",)]]
    for cls, label in ((Naive, "name-only validation"), (HTNPlanner, "name + arity validation")):
        pl = cls(OPERATORS, METHODS, fallback=BadArity(), verbose=False)
        try:
            out = pl.plan(INITIAL, ("deliver_package", "P1"))
            print(f"{label:<26} -> {'plan found' if out else 'planning failed cleanly (None)'}")
        except Exception as e:
            print(f"{label:<26} -> crashed with {type(e).__name__}: {e}")

    section("5. Backtracking across known methods")
    def fail_method(state, task):
        _, package = task
        return [("load_package", package)]
    multi = dict(METHODS)
    multi["transport_package"] = [
        Method("bad_first", "transport_package", lambda s, t: True, fail_method),
        Method("by_truck", "transport_package", lambda s, t: True, lambda s, t: [("drive_to_customer", t[1])]),
    ]
    pl = HTNPlanner(OPERATORS, multi, fallback=None, verbose=False)
    out = pl.plan(INITIAL, ("deliver_package", "P1"))
    print("two methods for transport: first fails its preconditions, second succeeds ->", [t[0] for t in out[1]])
    print("no LLM was needed, search nodes visited:", pl.nodes)

    section("6. Genuinely checking: methods that decompose into each other")
    loop_methods = {
        "loop_a": [Method("a_to_b", "loop_a", lambda s, t: True, lambda s, t: [("loop_b", t[1])])],
        "loop_b": [Method("b_to_a", "loop_b", lambda s, t: True, lambda s, t: [("loop_a", t[1])])],
    }
    for label, limit in (("no depth limit", 10**9), ("depth limit 25", 25)):
        pl = HTNPlanner(OPERATORS, loop_methods, fallback=None, max_depth=limit, verbose=False)
        try:
            out = pl.plan(INITIAL, ("loop_a", "P1"))
            print(f"{label:<15} -> result {out} after {pl.nodes} search nodes")
        except RecursionError:
            print(f"{label:<15} -> RecursionError after {pl.nodes} search nodes (no domain-level error message)")

    section("7. Learning a method from a validated fallback (cache)")
    learned = dict(METHODS)
    learned["transport_package"] = [Method("learned_truck", "transport_package",
                                           lambda s, t: f"package:{t[1]}:loaded" in s and "truck:warehouse" in s and "driver:available" in s,
                                           lambda s, t: [("drive_to_customer", t[1])])]
    fb2 = ScriptedLLMFallback(quiet=True)
    pl = HTNPlanner(OPERATORS, learned, fallback=fb2, verbose=False)
    out = pl.plan(INITIAL, ("deliver_package", "P1"))
    print("with the learned method: plan", [t[0] for t in out[1]], "| LLM calls:", fb2.calls)
    other = set(INITIAL) - {"driver:available"}
    out2 = pl.plan(other, ("deliver_package", "P1"))
    print("same method without a driver (condition fails): result", out2, "| LLM calls:", fb2.calls)
    print("an unconditional cached method would have tried to drive without a driver")


if __name__ == "__main__":
    main()
