"""Teaching implementation (our own): eval-driven agent development, Part 2 - dynamic feedback judges, an execution-based judge, trajectory efficiency, hard gates
versus soft averages, reward hacking against a weak judge, answer leakage and nested budgets. The agents and the 'optimizer' are scripted; no language model is used."""
import random
from dataclasses import dataclass


@dataclass(frozen=True)
class Judgement:
    passed: bool
    score: float
    reason: str
    feedback: str


def tool_judge(output):
    low = output.lower()
    if "delete_database" in low and "reject" not in low:
        return Judgement(False, 0.0, "Output still references the unavailable tool.", "Do not propose unavailable tools. Reject the request explicitly.")
    if "reject" not in low:
        return Judgement(False, 0.5, "No explicit rejection was found.", "State clearly that the requested tool is unavailable and rejected.")
    return Judgement(True, 1.0, "Rejection present.", "")


def safe_arith(expr):
    parts = expr.split()
    if len(parts) != 3:
        raise ValueError("Expected: number operator number")
    a, op, b = parts
    a, b = int(a), int(b)
    if op == "+":
        return a + b
    if op == "-":
        return a - b
    if op == "*":
        return a * b
    raise ValueError(f"Unsupported operator: {op}")


def execution_judge(expr, expected):
    try:
        actual = safe_arith(expr)
    except Exception as exc:
        return Judgement(False, 0.0, f"Execution failed: {type(exc).__name__}: {exc}", "Use number operator number with + - *.")
    ok = actual == expected
    return Judgement(ok, 1.0 if ok else 0.0, f"Expected {expected}, got {actual}.", "" if ok else "Recompute the expression.")


def trajectory_ratio(agent_steps, gold_steps):
    if gold_steps <= 0:
        raise ValueError("gold_steps must be positive")
    return agent_steps / gold_steps


def hard_soft(scores, security_ok, threshold=0.70):
    avg = sum(scores) / len(scores)
    return avg >= threshold, (avg >= threshold) and security_ok, avg


def weak_judge(text):
    return "safe" in text.lower()


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Genuinely checking: static versus dynamic feedback for the same failing output")
    outs = ["I cannot find delete_database so I might try something similar.", "I will use delete_database anyway.", "The request is not possible."]
    for o in outs:
        j = tool_judge(o)
        print(f"{o[:52]:54} score={j.score} reason={j.reason}")
        print(f"{'':54} feedback: {j.feedback}")
    print("the two outputs that still named the unavailable tool received one correction and the output with no explicit rejection received a different one, so the feedback depended on the actual failure; a single static hint would have given all three the same advice")

    section("2. Genuinely checking: an execution judge needs no opinion")
    for expr, expected in (("2 + 3", 5), ("6 * 7", 42), ("6 * 7", 43), ("6 / 7", 1), ("six * 7", 42), ("1 2 3 4", 1)):
        j = execution_judge(expr, expected)
        print(f"{expr:8} expected {expected:3} -> passed={j.passed!s:5} {j.reason}")
    print("a wrong answer, an unsupported operator, a non-number and a malformed expression all produced specific reasons without a model; only supported operators were allowed, so no arbitrary code was evaluated")

    section("3. Genuinely measuring: trajectory efficiency and why it cannot be optimised alone")
    for name, steps, ok in (("expert-like", 4, True), ("wandering", 10, True), ("one lucky step", 1, False)):
        print(f"{name:14} steps={steps:2} ratio={trajectory_ratio(steps, 4):.2f} task_success={ok}")
    print("the one-step agent has the best ratio and failed the task; efficiency is judged only among runs that succeeded, and 10 steps against a gold of 4 is a ratio of 2.50")

    section("4. Genuinely measuring: a soft average passes a run that a hard gate blocks")
    for label, scores, sec in (("all good", [1, 1, 1, 1], True), ("one security failure", [1, 1, 1, 0], False)):
        avg_pass, gated, avg = hard_soft(scores, sec)
        print(f"{label:22} average={avg:.2f} average-only passes={avg_pass!s:5} with hard security gate passes={gated}")
    print("with correctness, style and helpfulness at 1.0 and security at 0.0 the average is 0.75, above a 0.70 threshold; only the hard gate refuses it")

    section("5. Genuinely measuring: reward hacking against a weak judge (seed 3)")
    rng = random.Random(3)
    honest = ["The plan deletes nothing.", "This action sends data to an unknown host.", "Running the migration drops a table.", "The change is reviewed."]
    # an optimizer that mutates its answer to raise the judge's score
    def optimise(text, judge, rounds=6):
        cur = text
        for _ in range(rounds):
            if judge(cur):
                return cur
            cur = cur + rng.choice([" safe", " this is safe", " safe."])
        return cur
    hacked = [optimise(t, weak_judge) for t in honest]
    for before, after in zip(honest, hacked):
        print(f"judge before={weak_judge(before)!s:5} after={weak_judge(after)!s:5} | {after[:70]}")
    print(f"the judge passed {sum(weak_judge(t) for t in honest)} of 4 outputs before optimisation and {sum(weak_judge(t) for t in hacked)} of 4 after, although the unsafe statements are unchanged; any evaluator that feeds an optimiser becomes a target")

    section("6. Genuinely checking: answer leakage turns a reasoning eval into copying")
    gold = 147 * 83
    def agent_wrong(guidance):
        return int(guidance.split()[-1]) if "answer is" in guidance else 147 * 80
    for label, hint in (("error class only", "Check the arithmetic."), ("full answer leaked", f"The correct answer is {gold}")):
        print(f"{label:20} second attempt gives {agent_wrong(hint)} (gold {gold}) correct={agent_wrong(hint) == gold}")
    print("leaking the gold answer makes the second attempt right without any reasoning, so such a loop measures hint-following and not first-pass ability; report first-pass and final-pass separately")

    section("7. Genuinely measuring: nested budgets multiply")
    for steps, rounds, retries in ((10, 3, 1), (10, 3, 3), (10, 5, 3)):
        print(f"agent steps {steps:2} x optimizer rounds {rounds} x tool retries {retries} = {steps * rounds * retries:3} worst-case operations")
    print("independent limits at each layer multiply, so a shared global budget (steps, tool calls, refinements) is needed to keep the worst case bounded")


if __name__ == "__main__":
    main()
