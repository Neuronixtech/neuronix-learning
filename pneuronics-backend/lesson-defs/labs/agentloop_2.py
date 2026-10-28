"""Teaching implementation (our own): ToyLLM + AgentLoop, Part 2 of the Agent Loop lesson.

Reuses the tools and registry from agentloop_1.py. The ToyLLM is a deterministic script, not a model.
"""
import agentloop_1 as env


def latest_tool_result(messages):
    for message in reversed(messages):
        if message["role"] == "tool":
            return message["content"]
    return None


class ToyLLM:
    """Scripted decision maker. Interface mirrors a real model: next(messages) -> decision dict."""

    def __init__(self, key="price"):
        self.step = 0
        self.key = key

    def next(self, messages):
        self.step += 1
        if self.step == 1:
            return {"thought": "I need the stored price.", "type": "tool",
                    "name": "kv_store.get", "arguments": {"key": self.key}}
        if self.step == 2:
            price = latest_tool_result(messages)
            return {"thought": f"The stored price is {price}; now I can calculate price * 1.18.",
                    "type": "tool", "name": "calculator",
                    "arguments": {"left": price, "op": "*", "right": 1.18}}
        result = latest_tool_result(messages)
        return {"thought": "I have enough evidence to answer.", "type": "finish",
                "answer": f"The final price is {result}."}


class AgentLoop:
    def __init__(self, llm, registry, max_turns=8, verbose=False):
        self.llm = llm
        self.registry = registry
        self.max_turns = max_turns
        self.verbose = verbose
        self.messages = []
        self.trace = []

    def run(self, goal):
        self.messages.append({"role": "user", "content": goal})
        for turn in range(1, self.max_turns + 1):
            decision = self.llm.next(self.messages)  # THINK
            print(f"Thought: {decision['thought']}")
            if decision["type"] == "finish":  # STOP
                self.trace.append({"turn": turn, "thought": decision["thought"],
                                   "action": "finish", "observation": decision["answer"]})
                return decision["answer"]
            tool_name = decision["name"]
            arguments = decision["arguments"]
            if self.verbose:
                print(f"Action: {tool_name}({arguments})")
            result = self.registry.call(tool_name, **arguments)  # ACT
            observation = str(result)  # OBSERVE
            if self.verbose:
                print(f"Observation: {observation}")
            self.messages.append({"role": "tool", "name": tool_name, "content": observation})  # CONTEXT
            self.trace.append({"turn": turn, "thought": decision["thought"], "action": tool_name,
                               "arguments": arguments, "observation": observation})
        return "STOPPED: maximum turn budget reached before the task finished."


GOAL = "Read the stored price and calculate price * 1.18."


def fresh_registry():
    env.STORE.clear()
    env.STORE.update({"city_count": "17", "project_status": "testing", "price": "125"})
    return env.build(env.HardenedRegistry)


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. The loop exactly as the lesson writes it (prints only the Thought)")
    agent = AgentLoop(ToyLLM(), fresh_registry(), max_turns=8)
    answer = agent.run(GOAL)
    print("Final:", answer)

    section("2. The same run with Action and Observation printed (verbose=True)")
    agent = AgentLoop(ToyLLM(), fresh_registry(), max_turns=8, verbose=True)
    answer = agent.run(GOAL)
    print("Final:", answer)

    section("3. The trace")
    for event in agent.trace:
        print(event)

    section("4. Causal proof: observation 1 is the left argument of action 2")
    t = agent.trace
    print("observation 1        :", repr(t[0]["observation"]))
    print("action 2 left arg    :", repr(t[1]["arguments"]["left"]))
    print("equal                :", t[0]["observation"] == t[1]["arguments"]["left"])
    print("observation 2 in final:", t[1]["observation"] in t[2]["observation"])

    section("5. The growing message buffer after the run")
    for i, m in enumerate(agent.messages, 1):
        print(f"{i}. {m['role']:<5} {m.get('name', '-'):<13} {m['content']}")

    section("6. Turn budget: max_turns=2 (needs 3)")
    short = AgentLoop(ToyLLM(), fresh_registry(), max_turns=2)
    print("Final:", short.run(GOAL))
    print("trace length:", len(short.trace))

    section("7. Turn budget: max_turns=3 (exactly enough)")
    ok = AgentLoop(ToyLLM(), fresh_registry(), max_turns=3)
    print("Final:", ok.run(GOAL))

    section("8. A missing key, with the lesson's ToyLLM (no error handling)")
    bad = AgentLoop(ToyLLM(key="missing_price"), fresh_registry(), max_turns=8, verbose=True)
    print("Final:", bad.run(GOAL))


if __name__ == "__main__":
    main()
