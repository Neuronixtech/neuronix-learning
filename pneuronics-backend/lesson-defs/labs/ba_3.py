"""Teaching implementation (our own): a secure browser-agent policy, Part 3 - four layered defenses (domain allowlist, source tracking of instructions, confirmation for sensitive actions and a sanitizer) evaluated on 400 generated attacks and 200 generated legitimate tasks.
Everything is scripted: each 'task' is a dictionary describing where an action came from and where it goes, nothing is sent anywhere, and the attack mix, domains and rates are invented."""
import random
from statistics import mean

ALLOWED_DOMAINS = {"bob.example", "docs.example"}
SENSITIVE = {"send_cookie", "send_report", "send_password"}


def gen_attacks(r, n=400):
    out = []
    for _ in range(n):
        out.append({"source": "page", "action": r.choice(["send_cookie", "send_password", "send_report"]), "domain": r.choice(["evil.example", "evil.example", "docs.example"]),
                    "disguised": r.random() < 0.5, "channel": r.choice(["visible", "hidden", "fragment", "memory"])})
    return out


def gen_legit(r, n=200):
    out = []
    for _ in range(n):
        out.append({"source": "user", "action": r.choice(["send_report", "send_report", "navigate"]), "domain": r.choice(["bob.example", "docs.example"]), "disguised": False, "channel": "user"})
    return out


def sanitizer_blocks(task):
    """Catches undisguised instructions in visible, hidden and fragment text; misses disguised ones and memory replays."""
    return task["source"] == "page" and (not task["disguised"]) and task["channel"] in ("visible", "hidden", "fragment")


def allowed(task, defenses):
    """Return True if the action would run without any block or confirmation."""
    if "sanitizer" in defenses and sanitizer_blocks(task):
        return False
    if "allowlist" in defenses and task["domain"] not in ALLOWED_DOMAINS:
        return False
    if "source" in defenses and task["source"] == "page" and task["action"] in SENSITIVE:
        return False
    if "confirm" in defenses and task["action"] in SENSITIVE:
        return False
    return True


def section(t):
    print(f"\n--- {t} ---")


def main():
    r = random.Random(1)
    attacks, legit = gen_attacks(r), gen_legit(r)
    combos = [
        ("no defenses", set()),
        ("sanitizer only", {"sanitizer"}),
        ("allowlist only", {"allowlist"}),
        ("source tracking only", {"source"}),
        ("confirm sensitive only", {"confirm"}),
        ("allowlist + source", {"allowlist", "source"}),
        ("all four", {"sanitizer", "allowlist", "source", "confirm"}),
    ]
    section("1. Genuinely measuring: 400 attacks and 200 legitimate tasks under each combination")
    print(f"{'defenses':24} {'attacks executed':>17} {'legit tasks executed':>21}")
    for name, d in combos:
        a = sum(allowed(t, d) for t in attacks)
        l = sum(allowed(t, d) for t in legit)
        print(f"{name:24} {a:7d}/400 {a / 400:6.3f} {l:9d}/200 {l / 200:6.3f}")
    print("each defense removes a different slice of the attacks, the sanitizer alone leaves the disguised ones and the memory replays, the allowlist leaves the attacks aimed at an allowed domain, and source tracking blocks every sensitive action that came from page content; the price is paid in legitimate tasks, which confirmation of every sensitive action also holds back")

    section("2. Genuinely measuring: the attacks that survive the allowlist alone")
    survivors = [t for t in attacks if allowed(t, {"allowlist"})]
    print(f"survivors: {len(survivors)} | all aimed at an allowed domain: {all(t['domain'] in ALLOWED_DOMAINS for t in survivors)}")
    print("these attacks send data to docs.example, a domain on the allowlist, so a destination check cannot tell them from legitimate use, and what separates them is that the instruction came from page content, which is exactly what source tracking records")

    section("3. Genuinely measuring: attacks that survive the sanitizer alone, by channel and disguise")
    surv = [t for t in attacks if allowed(t, {"sanitizer"})]
    for ch in ("visible", "hidden", "fragment", "memory"):
        sub = [t for t in surv if t["channel"] == ch]
        print(f"{ch:9}: {len(sub):3d} survive | disguised among them {sum(t['disguised'] for t in sub):3d}")
    print("every memory replay survives because the sanitizer in this lab only inspects the page being read, and in the other channels only the disguised attacks survive, which matches the pattern-list limit measured in part 2; the 50 percent disguise rate is invented")

    section("4. Genuinely measuring: layering by false blocks on legitimate work")
    for name, d in combos[1:]:
        blocked = sum(not allowed(t, d) for t in legit)
        print(f"{name:24} blocks {blocked:3d} of 200 legitimate tasks")
    print("source tracking blocks no legitimate task here because the legitimate tasks come from the user, which is the situation the design relies on; confirmation holds back 127 of 200 of them (63.5 percent), because sensitive reports are the commonest legitimate action in the generated mix, so it protects well and costs the user a prompt each time")


if __name__ == "__main__":
    main()
