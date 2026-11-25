"""Teaching implementation (our own): Group chat and speaker selection, Part 1 - a shared message pool, three speaker selectors, termination rules, hot speakers, context growth and a guard on the selector's answer.
The original code/main.py was not supplied. Agents and the 'LLM-style' selector are deterministic scripts, so no model chooses anything and the turn counts below describe this toy task, not real group chats or AutoGen."""
from collections import Counter
from dataclasses import dataclass, field


@dataclass(frozen=True)
class Message:
    speaker: str
    content: str


@dataclass
class State:
    version: int = 0
    reviewed: bool = False
    approved: bool = False


def manager(pool, st, turn_index):
    if st.approved:
        return "TERMINATE"
    if st.version == 0 and turn_index == 0:
        return "Coder should begin implementation."
    return "Implementation requires review."


def coder(pool, st, turn_index):
    st.version += 1
    st.reviewed = False
    return f"Implemented division function, version {st.version}." + (" Added zero-divisor validation." if st.version >= 2 else "")


def reviewer(pool, st, turn_index):
    st.reviewed = True
    if st.version >= 2:
        st.approved = True
        return "APPROVED: required validation checks are satisfied in this simulation."
    return "CHANGES_REQUESTED: division by zero is not handled."


AGENTS = {"manager": manager, "coder": coder, "reviewer": reviewer}


class RoundRobin:
    name = "round_robin"

    def __init__(self, order):
        self.order, self.i = order, 0

    def select(self, pool, st):
        s = self.order[self.i % len(self.order)]
        self.i += 1
        return s, "next in fixed order"


class ContextAware:
    name = "context_aware"

    def select(self, pool, st):
        last = pool[-1].speaker
        if last == "user":
            return "manager", "start with the manager"
        if last == "manager":
            return "coder", "manager asked for implementation"
        if last == "coder":
            return "reviewer", "new code needs review"
        if last == "reviewer":
            return ("manager", "approved, let the manager close") if st.approved else ("coder", "changes requested")
        return "manager", "default"


class StateRules:
    name = "state_rules"

    def select(self, pool, st):
        if st.version == 0:
            return "coder", "implementation missing"
        if not st.reviewed:
            return "reviewer", "review incomplete"
        if not st.approved:
            return "coder", "changes requested"
        return "manager", "review passed"


def run_chat(selector, max_rounds=12, token="TERMINATE", agents=AGENTS):
    pool = [Message("user", "Implement safe division with zero-divisor validation.")]
    st, trace = State(), []
    for turn in range(max_rounds):
        who, why = selector.select(pool, st)
        if who not in agents:
            trace.append((turn, who, "INVALID"))
            return {"pool": pool, "trace": trace, "stop": f"invalid speaker {who!r}", "state": st}
        text = agents[who](pool, st, turn)
        pool.append(Message(who, text))
        trace.append((turn, who, why))
        if token in text:
            return {"pool": pool, "trace": trace, "stop": "termination token", "state": st}
    return {"pool": pool, "trace": trace, "stop": "max rounds reached", "state": st}


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Genuinely running: three selectors on the same task")
    results = {}
    for sel in (RoundRobin(["manager", "coder", "reviewer"]), ContextAware(), StateRules()):
        r = run_chat(sel)
        results[sel.name] = r
        seq = [t[1] for t in r["trace"]]
        print(f"{sel.name:<14} turns={len(seq)} approved={r['state'].approved} stop={r['stop']}")
        print("   ", " > ".join(seq))
    print("the same three scripted agents finish in 7 turns under round-robin, 6 under the context-aware selector and 5 under the state rules, and in all three the reviewer approves version 2; round-robin spends a turn on a manager remark that changes nothing, and these counts belong to this toy task and its scripted agents, so they are not a benchmark of real selectors.")

    section("2. Genuinely running: the transcript and the decision trace")
    r = results["context_aware"]
    for i, m in enumerate(r["pool"], 1):
        print(f"{i:02d} [{m.speaker}] {m.content}")
    print([(t[1], t[2]) for t in r["trace"]][:3])
    print("the pool is an ordered list that every agent can read, the user message sits first, and the trace stores a reason next to every choice so a surprising speaker can be explained afterwards; the reasons here are written by the selector's own rules, which a real model-based selector would have to supply and could get wrong.")

    section("3. Genuinely running: the same selector with a different agent order")
    for order in (["manager", "coder", "reviewer"], ["reviewer", "coder", "manager"], ["coder", "reviewer", "manager"]):
        r = run_chat(RoundRobin(order), max_rounds=12)
        print(order, "-> turns", len(r["trace"]), "| approved:", r["state"].approved, "| stop:", r["stop"])
    print("round-robin reaches approval in every order here but takes 7, 9 and 6 turns for the three orders, and starting with the reviewer costs the most because its first review has no code to look at and the reviewer's CHANGES_REQUESTED answer is produced anyway; a fixed order encodes an assumption about how the task flows, and when the flow changes the order does not adapt.")

    section("4. Genuinely running: three ways to stop")
    r_token = run_chat(StateRules())
    r_cap = run_chat(StateRules(), max_rounds=3)
    silent = {"manager": lambda p, s, t: "Implementation requires review.", "coder": AGENTS["coder"], "reviewer": AGENTS["reviewer"]}
    r_loop = run_chat(RoundRobin(["manager"]), max_rounds=5, agents=silent)
    print("with the termination token:", r_token["stop"], len(r_token["trace"]), "turns | cap of 3 rounds:", r_cap["stop"], "approved:", r_cap["state"].approved, "| a manager that never terminates:", r_loop["stop"], len(r_loop["trace"]), "turns")
    print("the token ends the chat after the manager says TERMINATE, the cap of 3 rounds stops it before the reviewer ever approves, and a manager that never says the token runs until the cap; stopping and succeeding are different events, so a chat that ended on max rounds must not be reported as a finished task.")

    section("5. Genuinely running: a selector that names a speaker who does not exist")

    class Bad:
        name = "bad"

        def select(self, pool, st):
            return "architect", "the model hallucinated a role"
    r = run_chat(Bad())
    print("stop:", r["stop"], "| turns taken:", len(r["trace"]), "| messages in pool:", len(r["pool"]))
    print("the chat stops on the first turn with an explicit invalid-speaker reason and adds no message to the pool, instead of crashing or silently picking someone; a selector's answer is untrusted output and has to be checked against the list of real agents before it is used.")

    section("6. Genuinely computing: hot speakers and context growth")
    speakers = ["coder", "coder", "coder", "reviewer", "coder", "coder", "manager", "coder", "reviewer", "coder"]
    c = Counter(speakers)
    for k, v in c.most_common():
        print(f"{k}: {v} turns, {100 * v / len(speakers):.1f}%")
    T, L = 100, 500
    print("history after 100 turns of 500 tokens:", T * L, "| tokens processed if the full history is re-sent every turn:", L * T * (T + 1) // 2)
    print("the coder holds 70% of the ten turns, which is a reason to look at the selector and not by itself an error, and a hundred turns of 500 tokens build a 50000-token history whose repeated full re-sending adds up to 2525000 tokens; the second figure is a simple model of re-sending everything and real systems that truncate or summarise would cost less.")


if __name__ == "__main__":
    main()
