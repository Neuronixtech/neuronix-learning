"""Teaching implementation (our own): tests, proof and failure paths for the Agent Loop, Part 3.

Builds on agentloop_1.py (tools, registries) and agentloop_2.py (ToyLLM, AgentLoop).
"""
import time
from dataclasses import dataclass
from typing import Any, Optional

import agentloop_1 as env
from agentloop_2 import ToyLLM, AgentLoop, fresh_registry, GOAL, latest_tool_result


class GuardedToyLLM(ToyLLM):
    """Our fix for the Part 2 failure: if the lookup returned an ERROR, finish honestly."""

    def next(self, messages):
        if self.step == 1:
            price = latest_tool_result(messages)
            if price is not None and price.startswith("ERROR:"):
                self.step += 1
                return {"thought": "The price lookup failed, so I should not invent a price.",
                        "type": "finish",
                        "answer": f"Unable to calculate the final price because lookup failed: {price}"}
        return super().next(messages)


@dataclass
class AgentResult:
    status: str  # finished | budget_exhausted | time_exhausted
    answer: Optional[str]
    turns: int


class StatusAgentLoop(AgentLoop):
    """Same loop, but returns a status as data and enforces a wall-clock budget."""

    def __init__(self, *a, max_seconds=None, **k):
        super().__init__(*a, **k)
        self.max_seconds = max_seconds

    def run_status(self, goal):
        start = time.monotonic()
        self.messages.append({"role": "user", "content": goal})
        for turn in range(1, self.max_turns + 1):
            if self.max_seconds is not None and time.monotonic() - start > self.max_seconds:
                return AgentResult("time_exhausted", None, turn - 1)
            decision = self.llm.next(self.messages)
            if decision["type"] == "finish":
                self.trace.append({"turn": turn, "action": "finish", "observation": decision["answer"]})
                return AgentResult("finished", decision["answer"], turn)
            result = self.registry.call(decision["name"], **decision["arguments"])
            self.messages.append({"role": "tool", "name": decision["name"], "content": str(result)})
            self.trace.append({"turn": turn, "action": decision["name"], "observation": str(result)})
        return AgentResult("budget_exhausted", None, self.max_turns)


class StubbornLLM:
    """Always asks for the same failing lookup, never says finish."""

    def next(self, messages):
        return {"thought": "Try again.", "type": "tool", "name": "kv_store.get", "arguments": {"key": "nope"}}


class UnknownToolLLM:
    def __init__(self):
        self.step = 0

    def next(self, messages):
        self.step += 1
        if self.step == 1:
            return {"thought": "I will ask the weather tool.", "type": "tool",
                    "name": "weather.lookup", "arguments": {"city": "Bengaluru"}}
        return {"thought": "That tool is not available.", "type": "finish",
                "answer": "I cannot do that: " + latest_tool_result(messages)}


def run_proof(agent):
    trace = agent.trace
    assert len(trace) == 3
    assert trace[0]["action"] == "kv_store.get"
    assert trace[0]["observation"] == "125"
    assert trace[1]["action"] == "calculator"
    assert trace[1]["arguments"]["left"] == trace[0]["observation"]
    assert trace[1]["observation"] == "147.5"
    assert trace[2]["action"] == "finish"
    print("PROOF PASSED: observations causally influenced later actions.")


def section(t):
    print(f"\n--- {t} ---")


def main():
    reg = fresh_registry()
    hard = reg

    section("1. The seven tests from the lesson (hardened registry)")
    checks = []

    def check(name, cond):
        checks.append(cond)
        print(f"{'PASS' if cond else 'FAIL'}  {name}")

    check("1 successful retrieval", hard.call("kv_store.get", key="price") == "125")
    check("2 missing key is an ERROR observation", hard.call("kv_store.get", key="does_not_exist").startswith("ERROR:"))
    check("3 calculator", hard.call("calculator", left=125, op="*", right=1.18) == 147.5)
    check("4 unknown tool", hard.call("does.not.exist").startswith("ERROR: unknown tool"))
    check("5 invalid arguments", hard.call("kv_store.get", wrong_argument="price").startswith("ERROR: invalid arguments"))
    short = AgentLoop(ToyLLM(), fresh_registry(), max_turns=1)
    print("     (test 6 run:)", end=" ")
    check("6 budget exhaustion", short.run(GOAL).startswith("STOPPED"))
    hard.call("kv_store.set", key="project_status", value="complete")
    check("7 state mutation", hard.call("kv_store.get", key="project_status") == "complete")
    print("passed:", sum(checks), "of", len(checks))

    section("2. Test 5 against the lesson's own ToolRegistry")
    plain = env.build(env.ToolRegistry)
    try:
        r = plain.call("kv_store.get", wrong_argument="price")
        print("returned:", r)
    except TypeError as exc:
        print("test 5 FAILS with an uncaught TypeError:", exc)

    section("3. run_proof on the successful run")
    agent = AgentLoop(ToyLLM(), fresh_registry(), max_turns=8)
    print("Final:", agent.run(GOAL))
    run_proof(agent)

    section("4. Error path with the guarded decision maker")
    g = AgentLoop(GuardedToyLLM(key="missing_price"), fresh_registry(), max_turns=8, verbose=True)
    print("Final:", g.run(GOAL))

    section("5. A model asks for a tool that does not exist")
    u = AgentLoop(UnknownToolLLM(), fresh_registry(), max_turns=8, verbose=True)
    print("Final:", u.run(GOAL))

    section("6. A runaway loop is cut off by the turn budget")
    s = StatusAgentLoop(StubbornLLM(), fresh_registry(), max_turns=8)
    res = s.run_status(GOAL)
    print(res)
    print("tool calls made:", len(s.trace))

    section("7. Status as data: finished vs budget_exhausted")
    ok = StatusAgentLoop(ToyLLM(), fresh_registry(), max_turns=8).run_status(GOAL)
    cut = StatusAgentLoop(ToyLLM(), fresh_registry(), max_turns=2).run_status(GOAL)
    print("ok :", ok)
    print("cut:", cut)
    print("same type:", type(ok) is type(cut), "| distinguishable without string matching:", ok.status != cut.status)

    section("8. Wall-clock budget")
    slow_reg = fresh_registry()
    slow_reg.register("slow.tool", lambda: time.sleep(0.05) or "done")

    class SlowLLM:
        def next(self, messages):
            return {"thought": "call the slow tool", "type": "tool", "name": "slow.tool", "arguments": {}}

    t = StatusAgentLoop(SlowLLM(), slow_reg, max_turns=50, max_seconds=0.12)
    r = t.run_status(GOAL)
    print(r)
    print("turns completed before the time budget fired:", len(t.trace), "(max_turns was 50)")

    section("9. Part 2's lesson claim, re-checked")
    bad = AgentLoop(ToyLLM(key="missing_price"), fresh_registry(), max_turns=8)
    print("unguarded Final:", bad.run(GOAL))


if __name__ == "__main__":
    main()
