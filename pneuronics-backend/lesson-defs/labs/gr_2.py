"""Teaching implementation (our own): Group chat and speaker selection, Part 2 - a state-driven chat engine, termination against completion, selector validation, a sycophancy cascade and unittest-style checks.
The original code/main.py was not supplied. Every agent and selector is a scripted function; the state flags are set by the agents themselves, so 'completed' here means the scripted flags agree and not that real code was written."""
import unittest
from dataclasses import dataclass, field


@dataclass(frozen=True)
class Message:
    speaker: str
    content: str
    kind: str = "message"


@dataclass
class TaskState:
    version: int = 0
    handles_zero: bool = False
    review_passed: bool = False
    approved: bool = False
    evidence: list = field(default_factory=list)


def coder(pool, st):
    st.version += 1
    st.handles_zero = st.version >= 2
    st.review_passed = False
    return f"Implemented division, version {st.version}."


def reviewer(pool, st):
    if st.handles_zero:
        st.review_passed = True
        return "APPROVED: zero divisor is handled."
    return "CHANGES_REQUESTED: division by zero is not handled."


def manager_honest(pool, st):
    if st.review_passed:
        st.approved = True
        return "TERMINATE"
    return "Not done yet."


def manager_eager(pool, st):
    st.approved = True
    return "TERMINATE"


def completed(st):
    return st.version > 0 and st.handles_zero and st.review_passed and st.approved


def run(selector, agents, max_rounds=10, require_valid=True):
    pool, st, trace = [Message("user", "Implement safe division.")], TaskState(), []
    for t in range(max_rounds):
        who = selector(pool, st)
        if require_valid and who not in agents:
            return {"stop": f"invalid speaker {who!r}", "pool": pool, "state": st, "trace": trace}
        text = agents[who](pool, st)
        pool.append(Message(who, text))
        trace.append(who)
        if "TERMINATE" in text:
            return {"stop": "terminated", "pool": pool, "state": st, "trace": trace}
    return {"stop": "max rounds", "pool": pool, "state": st, "trace": trace}


def state_selector(pool, st):
    if st.version == 0:
        return "coder"
    if not st.review_passed:
        return "reviewer" if pool[-1].speaker == "coder" else "coder"
    return "manager"


def eager_selector(pool, st):
    return "manager"


def yes_agents():
    def a(pool, st):
        return "I agree with the previous speaker, the answer is 150."

    def b(pool, st):
        return "Agent A sounds certain, I agree, 150."
    return {"a": a, "b": b}


def section(t):
    print(f"\n--- {t} ---")


class ChatTests(unittest.TestCase):
    AG = {"coder": coder, "reviewer": reviewer, "manager": manager_honest}

    def test_state_selector_completes(self):
        r = run(state_selector, self.AG)
        self.assertTrue(completed(r["state"]))

    def test_invalid_speaker(self):
        r = run(lambda p, s: "ghost", self.AG)
        self.assertIn("invalid speaker", r["stop"])

    def test_eager_manager_not_completed(self):
        r = run(eager_selector, {"manager": manager_eager})
        self.assertEqual(r["stop"], "terminated")
        self.assertFalse(completed(r["state"]))


def main():
    AG = {"coder": coder, "reviewer": reviewer, "manager": manager_honest}
    section("1. Genuinely running: a state-driven chat finishes the task")
    r = run(state_selector, AG)
    print("turns:", r["trace"], "| stop:", r["stop"], "| completed:", completed(r["state"]))
    for i, m in enumerate(r["pool"], 1):
        print(f"{i:02d} [{m.speaker}] {m.content}")
    print("the selector chooses by state, so the coder writes, the reviewer asks for the zero check, the coder fixes it, the reviewer approves and the manager closes, ending in 5 agent turns with every flag set; the flags are set by the scripted agents themselves, so completed means they agree and does not mean any code was run.")

    section("2. Genuinely running: termination is not completion")
    bad = run(eager_selector, {"manager": manager_eager})
    print("stop:", bad["stop"], "| turns:", bad["trace"], "| completed:", completed(bad["state"]), "| version:", bad["state"].version, "| approved flag:", bad["state"].approved)
    print("a manager that says TERMINATE on its first turn stops the chat cleanly and also marks the task approved, while no code exists and no review happened, so the chat ended and the task is not complete; the token tells you the conversation stopped, and only a separate check of the evidence tells you the work was done.")

    section("3. Genuinely running: the cap is also not completion")
    capped = run(lambda p, s: "coder", AG, max_rounds=4)
    print("stop:", capped["stop"], "| turns:", capped["trace"], "| completed:", completed(capped["state"]), "| version:", capped["state"].version)
    print("a selector that keeps choosing the coder never reaches review, the chat ends on its round cap after 4 coder turns at version 4, and nothing was approved; a hot speaker can use up the whole budget, so the cap protects cost and the completion check protects meaning.")

    section("4. Genuinely running: validating the selector's answer")
    for who in ("coder", "architect", "", None):
        r = run(lambda p, s, w=who: w, AG, max_rounds=1)
        print(repr(who), "->", r["stop"])
    try:
        run(lambda p, s: "architect", AG, require_valid=False, max_rounds=1)
    except KeyError as e:
        print("without validation the engine fails with KeyError", e)
    print("with validation the real speaker runs and the three bad answers stop the chat with a reason, while without validation the unknown name surfaces as a KeyError in the middle of a turn; the validation here is membership in the agent dictionary and does not judge whether the chosen speaker was a sensible one.")

    section("5. Genuinely running: a sycophancy cascade")
    r = run(lambda p, s: "a" if len(p) % 2 else "b", yes_agents(), max_rounds=4)
    for m in r["pool"][1:]:
        print(f"[{m.speaker}] {m.content}")
    print("distinct numbers stated:", sorted({w.strip(" .,") for m in r["pool"][1:] for w in m.content.split() if w.strip(" .,").isdigit()}), "| any evidence cited:", any("because" in m.content or "test" in m.content for m in r["pool"][1:]))
    print("two scripted agents repeat the same number and each cites the other as the reason, so the chat shows unanimous agreement with no evidence at all; nothing in the pool tells the selector or the manager that the agreement is empty, which is why a completion check must look for evidence and not for agreement.")

    section("6. Genuinely running: automated checks on the engine")
    suite = unittest.TestLoader().loadTestsFromTestCase(ChatTests)

    import io
    result = unittest.TextTestRunner(stream=io.StringIO()).run(suite)
    print("tests run:", result.testsRun, "| failures:", len(result.failures), "| errors:", len(result.errors))
    print("three unit tests pass: the state selector completes, an invalid speaker is reported and an eager manager ends the chat without completing the task; these tests check the engine's behaviour on scripted agents and say nothing about how a real model would pick speakers.")


if __name__ == "__main__":
    main()
