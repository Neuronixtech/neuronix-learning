"""Teaching implementation (our own): Agent Memory Part 1 - the MainContext ("RAM") of virtual context."""
import re
from dataclasses import dataclass, field
from typing import Dict, List


def tokenize(text: str) -> List[str]:
    return re.findall(r"[a-z0-9]+", text.lower())


def estimate_tokens(text: str) -> int:
    words = tokenize(text)
    return max(1, int(len(words) * 1.3))


@dataclass
class MainContext:
    max_tokens: int = 120
    core: Dict[str, str] = field(default_factory=dict)
    messages: List[Dict[str, str]] = field(default_factory=list)
    evicted: List[Dict[str, str]] = field(default_factory=list)   # kept only so the lesson can inspect what was lost

    def core_text(self) -> str:
        return "\n".join(f"[CORE:{section}] {text}" for section, text in self.core.items())

    def messages_text(self) -> str:
        return "\n".join(f"{m['role'].upper()}: {m['content']}" for m in self.messages)

    def render(self) -> str:
        parts = []
        core, msgs = self.core_text(), self.messages_text()
        if core:
            parts.append(core)
        if msgs:
            parts.append(msgs)
        return "\n\n".join(parts)

    def token_count(self) -> int:
        return estimate_tokens(self.render())

    def add_message(self, role: str, content: str) -> None:
        self.messages.append({"role": role, "content": content})
        self.compact()

    def compact(self) -> None:
        while self.token_count() > self.max_tokens and len(self.messages) > 1:
            removed = self.messages.pop(0)
            self.evicted.append(removed)
            print("[COMPACT]", "evicted", removed["role"], "message:", removed["content"][:60])


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. The tokenizer and the estimate")
    for text in ("Alice owns the evaluation pipeline.", "Hello", "", "The deadline is October 20."):
        print(f"{text!r:<42} tokens(words)={tokenize(text)} estimate={estimate_tokens(text)}")

    section("2. Why a bigger window only postpones overflow (arithmetic)")
    used, limit = 1200 * 14, 32768
    print(f"1200 tokens/turn x 14 turns = {used:,} tokens = {used / limit:.0%} of a {limit:,}-token budget")
    for turns in (14, 27, 28, 100):
        print(f"{turns:>4} turns -> {1200 * turns:>8,} tokens; over budget: {1200 * turns > limit}")

    section("3. Rendering: structured memory becomes prompt text")
    main_ctx = MainContext(max_tokens=200)
    main_ctx.core["project"] = "The active project is Orion."
    main_ctx.core["preferences"] = "The user prefers concise technical explanations."
    main_ctx.add_message("user", "What are we building?")
    print(main_ctx.render())
    print("approximate tokens:", main_ctx.token_count())

    section("4. Compaction under a tiny budget (max_tokens=50)")
    m = MainContext(max_tokens=50)
    m.core["project"] = "The active project is Orion."
    for role, text in (("user", "We need to prepare the prototype."),
                       ("assistant", "I will help organize the prototype work."),
                       ("user", "First we need traction testing."),
                       ("assistant", "Traction testing is now the active task."),
                       ("user", "Alice owns the evaluation pipeline.")):
        m.add_message(role, text)
        print(f"   after add: tokens={m.token_count()} messages={len(m.messages)}")
    print("\nrendered context now:")
    print(m.render())
    print("core survived:", "[CORE:project]" in m.render())

    section("5. Eviction is not forgetting only if something archived it")
    lost = [e["content"] for e in m.evicted]
    print("evicted from the working context:", lost)
    print("is that exact message still in main.messages?", any(x["content"] == "We need to prepare the prototype." for x in m.messages))
    print("nothing else stored it, so it is gone")

    section("6. Edge case: pinned core memory larger than the budget")
    big = MainContext(max_tokens=20)
    big.core["rules"] = " ".join(["Never modify the production database."] * 6)
    big.add_message("user", "hello there")
    big.add_message("user", "second message")
    print("core tokens:", estimate_tokens(big.core_text()), "| budget:", big.max_tokens, "| total now:", big.token_count())
    print("messages left:", len(big.messages), "(compaction stops at one message, still over budget)")

    section("7. Genuinely checking the estimator on Kannada text")
    en = "Alice owns the evaluation pipeline."
    kn = "ಆಲಿಸ್ ಮೌಲ್ಯಮಾಪನ ಪೈಪ್‌ಲೈನ್ ಅನ್ನು ಹೊಂದಿದ್ದಾರೆ ಮತ್ತು ಅದರ ವಿಳಂಬವನ್ನು ನಿರ್ವಹಿಸುತ್ತಾರೆ."
    print("English :", estimate_tokens(en), "tokens", tokenize(en))
    print("Kannada :", estimate_tokens(kn), "token ", tokenize(kn))
    import contextlib, io

    def first_eviction(text, budget=100):
        ctx = MainContext(max_tokens=budget)
        with contextlib.redirect_stdout(io.StringIO()):
            for n in range(1, 400):
                ctx.add_message("user", text)
                if ctx.evicted:
                    return n, ctx.token_count()
        return None, ctx.token_count()

    for label, text in (("English", en), ("Kannada", kn), ("empty text", "")):
        n, tok = first_eviction(text)
        print(f"{label:<10} first eviction after {n} messages (budget 100)")
    print("the Kannada run behaves exactly like empty messages: only the 'USER' label is counted, so the message content is invisible to the budget")

if __name__ == "__main__":
    main()
