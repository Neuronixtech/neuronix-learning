"""Teaching implementation (our own): Workflow Patterns Part 1 - ScriptedLLM, prompt chaining, routing."""


class ScriptedLLM:
    """A deterministic stand-in for a model, so control flow can be studied without an API."""

    def __init__(self):
        self.calls = 0

    def generate(self, prompt):
        self.calls += 1
        text = prompt.lower()
        if "classify" in text:
            if "refund" in text or "charged" in text:
                return "billing"
            if "crash" in text or "error" in text:
                return "technical"
            return "general"
        if "vote" in text:
            options = ["YES", "YES", "NO"]
            return options[(self.calls - 1) % len(options)]
        if "evaluate" in text:
            if "evidence" in text:
                return "PASS"
            return "FAIL: add evidence"
        if "improve" in text:
            return "Improved answer with evidence"
        if "outline" in text:
            return "1. Definition 2. Example 3. Conclusion"
        if "draft" in text:
            return "Draft built from the outline."
        return f"Response to: {prompt[:40]}"


def prompt_chain(llm, user_input, steps):
    value = user_input
    for step in steps:
        prompt = f"{step}\nINPUT:\n{value}"
        value = llm.generate(prompt)
    return value


def route(llm, user_input, handlers):
    classification = llm.generate(f"Classify this request:\n{user_input}").strip().lower()
    handler = handlers.get(classification, handlers["general"])
    return classification, handler(user_input)


HANDLERS = {
    "billing": lambda text: f"Billing specialist handles: {text}",
    "technical": lambda text: f"Technical specialist handles: {text}",
    "general": lambda text: f"General support handles: {text}",
}


def section(t):
    print(f"\n--- {t} ---")


def main():
    llm = ScriptedLLM()

    section("1. Prompt chaining: output N becomes input N+1")
    steps = ["Create an outline.", "Draft the explanation.", "Improve the explanation."]
    value = "Explain workflow architecture"
    print("input     :", value)
    for step in steps:
        value = llm.generate(f"{step}\nINPUT:\n{value}")
        print(f"{step:<26}->", value)
    print("model calls:", llm.calls, "(fixed by the code: one per step)")

    section("2. A gate between steps is plain code, not a second model")
    def gated(llm, text):
        outline = llm.generate(f"Create an outline:\n{text}")
        if len(outline) < 10:
            raise ValueError("Outline too short")
        if not outline.startswith("1."):
            raise ValueError("Outline must start with a numbered item")
        return llm.generate(f"Write a draft from this outline:\n{outline}")
    print(gated(ScriptedLLM(), "Explain routing"))
    class Terse(ScriptedLLM):
        def generate(self, prompt):
            return "ok"
    try:
        gated(Terse(), "Explain routing")
    except ValueError as e:
        print("gate stopped the chain:", e)

    section("3. Routing: the model picks a branch, Python owns the branches")
    for text in ("I was charged twice and need a refund.", "The application crashes on startup.", "Do you offer enterprise pricing?"):
        category, result = route(ScriptedLLM(), text, HANDLERS)
        print(f"{category:<10} -> {result}")

    section("4. Genuinely checking: model output is untrusted input to the router")
    class Chatty(ScriptedLLM):
        def __init__(self, answer):
            super().__init__()
            self.answer = answer
        def generate(self, prompt):
            self.calls += 1
            return self.answer
    for answer in ("billing", "Billing.", "billing\n", "payments", "BILLING"):
        category, result = route(Chatty(answer), "I was charged twice", HANDLERS)
        print(f"model said {answer!r:<12} -> handler used: {result.split(' ')[0]}")
    allowed = set(HANDLERS)
    def safe_route(llm, text):
        raw = llm.generate(f"Classify this request:\n{text}").strip().lower().strip(".!")
        return raw if raw in allowed else "general"
    print("with strip and an allowlist, 'Billing.' ->", safe_route(Chatty("Billing."), "x"), "| 'payments' ->", safe_route(Chatty("payments"), "x"))

    section("5. Genuinely checking: keyword stand-ins can be hijacked by their own input")
    for text in ("Please classify my feelings, I am charged up about the launch", "How do I evaluate a vote count?"):
        l = ScriptedLLM()
        print(f"{text!r:<62} -> {l.generate(text)!r}")
    print("the scripted model reacts to words in the prompt, so scripted traces prove control flow, not language understanding")

    section("6. Workflow versus agent: who owns the graph")
    for name, owner in (("prompt_chain", "engineer: fixed list of steps"), ("route", "engineer: fixed dictionary of branches, model picks one key"),
                        ("agent loop", "model: chooses the next action after every observation")):
        print(f"{name:<14} {owner}")
    print("tool use alone does not make a system an agent: search -> LLM is still a fixed sequence")


if __name__ == "__main__":
    main()
