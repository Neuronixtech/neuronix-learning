"""Teaching implementation (our own): Role specialization (planner, executor, critic, verifier), Part 1 - four roles, a shallow critic that accepts wrong code, tests that catch it, and a missing-information request.
The original code/main.py was not supplied. Every role is a deterministic function with scripted behaviour; no model is used. exec() runs fixed trusted demo code only and is not a sandbox."""
from dataclasses import dataclass
from typing import List, Tuple


@dataclass
class Plan:
    function_name: str
    parameter_name: str
    requirement: str
    test_cases: List[Tuple[int, int]]


@dataclass
class Review:
    accepted: bool
    reasons: List[str]


@dataclass
class Verification:
    passed: bool
    evidence: List[str]


def planner(name="double", op="*", k=2):
    return Plan(name, "number", f"Return {k} times the input integer", [(2, 2 * k), (5, 5 * k), (0, 0), (-3, -3 * k)])


def executor(plan, correct=True, op="*", k=2):
    sign = op if correct else "+"
    return f"def {plan.function_name}({plan.parameter_name}):\n    return {plan.parameter_name} {sign} {k}\n"


def shallow_critic(plan, code):
    sig = f"def {plan.function_name}({plan.parameter_name}):"
    reasons = []
    if sig not in code:
        reasons.append("signature missing")
    if "return" not in code:
        reasons.append("no return statement")
    return Review(not reasons, reasons or ["Basic structural review passed."])


def verifier(plan, code):
    ns = {}
    exec(code, ns)
    fn = ns[plan.function_name]
    ev, ok = [], True
    for x, want in plan.test_cases:
        got = fn(x)
        good = got == want
        ok &= good
        ev.append(f"{'PASS' if good else 'FAIL'}: input={x}, expected={want}, actual={got}")
    return Verification(ok, ev)


def orchestrate(plan, code):
    r, v = shallow_critic(plan, code), verifier(plan, code)
    return r, v, r.accepted and v.passed


def check_shipping_plan(plan):
    need = ["rate_per_kg", "minimum_charge", "free_shipping_threshold"]
    missing = [f for f in need if f not in plan]
    return {"requester": "Executor", "recipient": "Planner", "question": "Please specify: " + ", ".join(missing)} if missing else None


def section(t):
    print(f"\n--- {t} ---")


def main():
    plan = planner()
    section("1. Genuinely running: a correct executor through all four roles")
    code = executor(plan, True)
    r, v, final = orchestrate(plan, code)
    print("critic accepted:", r.accepted, "|", r.reasons[0], "| verifier passed:", v.passed, "| final accepted:", final)
    for e in v.evidence:
        print(e)
    print("the correct code is accepted by both checks and the four test cases all pass; the final decision needs the critic and the verifier together, so neither role can approve alone, and the plan, code, review and evidence are separate artifacts that can be inspected one by one.")

    section("2. Genuinely running: wrong code that a shallow critic accepts")
    bad = executor(plan, False)
    r, v, final = orchestrate(plan, bad)
    print("critic accepted:", r.accepted, "| verifier passed:", v.passed, "| final accepted:", final)
    for e in v.evidence:
        print(e)
    print("number + 2 equals number * 2 only for the input 2, so the critic that checks only the signature and the word return accepts it, while the verifier fails three of four cases and the final decision is rejected; this shows that these tests catch this one defect and does not show that tests catch every defect.")

    section("3. Genuinely running: how weak evidence hides the bug")
    weak = Plan("double", "number", "x", [(2, 4)])
    print("one test case [(2, 4)] on the wrong code:", verifier(weak, bad).passed, "| four cases:", verifier(plan, bad).passed)
    comment_only = "def double(number):\n    # return number * 2\n    pass\n"
    print("critic on code with return only inside a comment:", shallow_critic(plan, comment_only).accepted)
    print("a single passing input is weak evidence because the wrong formula agrees at 2, and the string check for the word return is satisfied by a comment on a function that returns nothing; the critic here is deliberately shallow, and a stronger critic still would not replace behavioural tests.")

    section("4. Genuinely running: the exercise with triple")
    p3 = planner("triple", "*", 3)
    r3, v3, f3 = orchestrate(p3, executor(p3, True, "*", 3))
    rb, vb, fb = orchestrate(p3, executor(p3, False, "*", 3))
    print("correct:", f3, "| wrong (+3):", fb, "| failing inputs for +3:", [e.split(",")[0].split("=")[1] for e in vb.evidence if e.startswith("FAIL")])
    print("the same four roles handle triple without change, and the lesson exercise asks you to predict the failures of number + 3: it fails all four inputs, because 2 + 3 is 5 and not 6, so the trick that hid the defect for double at input 2 does not work for triple; whether a wrong formula slips past a one-case test depends on the formula and on the inputs chosen.")

    section("5. Genuinely running: three identical coders share one blind spot")
    impls = [lambda n: sum(n) / len(n), lambda v: sum(v) / len(v), lambda i: sum(i) / len(i)]
    results = []
    for f in impls:
        try:
            f([])
            results.append("ok")
        except ZeroDivisionError:
            results.append("ZeroDivisionError")
    print("average([]) on three coders:", results)

    def average(n):
        if not n:
            raise ValueError("Cannot average an empty list")
        return sum(n) / len(n)
    try:
        average([])
    except ValueError as e:
        print("specified version:", type(e).__name__, "-", e)
    print("all three similar implementations fail the empty list in the same way, so voting among them would only agree on the mistake, while a version written to a requirement that names the empty list handles it (hand-written here, not generated); more agents with the same instructions share errors, and a different role with an explicit requirement does not.")

    section("6. Genuinely running: asking instead of inventing")
    print("plan with only a name:", check_shipping_plan({"function_name": "shipping_cost"}))
    print("complete plan:", check_shipping_plan({"function_name": "s", "rate_per_kg": 10, "minimum_charge": 5, "free_shipping_threshold": 100}))
    print("the executor reports exactly which fields are missing and returns nothing when the plan is complete, so it cannot invent a rate of 10 per unit; the check only compares field names, so it cannot tell whether a supplied value such as a rate is sensible.")


if __name__ == "__main__":
    main()
