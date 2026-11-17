"""Teaching implementation (our own): agent permission modes, Part 1 - six modes as a table that maps action categories to allow, ask or deny, a scripted forty-action session replayed under every mode, and the way a deny rule overrides a permissive mode.
The modes are modelled on the general idea of coding-agent permission modes, but the table, the session and the categories are invented for the lab and are not the settings of any product."""
from collections import Counter

ACTIONS = ["read", "edit", "safe_cmd", "risky_cmd", "network", "delete"]
MODES = {
    "ask_always": {"read": "ask", "edit": "ask", "safe_cmd": "ask", "risky_cmd": "ask", "network": "ask", "delete": "ask"},
    "default": {"read": "allow", "edit": "ask", "safe_cmd": "ask", "risky_cmd": "ask", "network": "ask", "delete": "ask"},
    "accept_edits": {"read": "allow", "edit": "allow", "safe_cmd": "ask", "risky_cmd": "ask", "network": "ask", "delete": "ask"},
    "plan": {"read": "allow", "edit": "deny", "safe_cmd": "deny", "risky_cmd": "deny", "network": "deny", "delete": "deny"},
    "auto": {"read": "allow", "edit": "allow", "safe_cmd": "allow", "risky_cmd": "ask", "network": "ask", "delete": "ask"},
    "bypass": {"read": "allow", "edit": "allow", "safe_cmd": "allow", "risky_cmd": "allow", "network": "allow", "delete": "allow"},
}

SESSION = (["read"] * 14 + ["edit"] * 10 + ["safe_cmd"] * 8 + ["risky_cmd"] * 3 + ["network"] * 3 + ["delete"] * 2)


def decide(mode, action, deny_rules=()):
    if action in deny_rules:
        return "deny"
    return MODES[mode][action]


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Genuinely running: the mode table")
    print(f"{'mode':12}" + "".join(f"{a:>10}" for a in ACTIONS))
    for m, row in MODES.items():
        print(f"{m:12}" + "".join(f"{row[a]:>10}" for a in ACTIONS))
    print("each mode answers the same six questions differently, from asking about everything to allowing everything, and plan mode allows reads and denies the rest; the table is a simplified model with invented cells")

    section("2. Genuinely measuring: the same forty-action session under each mode")
    print(f"session: {dict(Counter(SESSION))}")
    for m in MODES:
        c = Counter(decide(m, a) for a in SESSION)
        print(f"{m:12} allow {c['allow']:2d} | ask {c['ask']:2d} | deny {c['deny']:2d}")
    print("the number of human prompts falls from 40 to 0 as the mode gets more permissive, but the actions allowed without asking grow in step, so every prompt saved is a decision moved from a person to a rule; plan mode produces no prompts only because it denies nearly everything")

    section("3. Genuinely measuring: which risky actions run without a human decision")
    for m in MODES:
        unattended = sum(1 for a in SESSION if a in ("risky_cmd", "network", "delete") and decide(m, a) == "allow")
        asked = sum(1 for a in SESSION if a in ("risky_cmd", "network", "delete") and decide(m, a) == "ask")
        print(f"{m:12}: of 8 risky actions, run with no human decision {unattended} | put to a human {asked}")
    print("only the bypass mode runs all eight risky actions unattended, and the auto mode keeps all eight in front of a human; the lab counts actions by category and does not judge whether a given command is actually risky")

    section("4. Genuinely running: a deny rule overrides the mode")
    for m in ("auto", "bypass"):
        rows = [f"{a}={decide(m, a, deny_rules=('delete', 'network'))}" for a in ACTIONS]
        print(f"{m:7} with deny rules for delete and network: {' '.join(rows)}")
    print("a deny rule is checked before the mode, so even bypass cannot delete or use the network once those are denied, which is why hard rules sit outside the mode setting; the rule list here is a tuple in the same program and a real system keeps it where the agent cannot edit it")


if __name__ == "__main__":
    main()
