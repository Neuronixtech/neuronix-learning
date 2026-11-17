"""Teaching implementation (our own): agent permission modes, Part 3 - a hard policy that no mode can override and a trajectory monitor that flags a dangerous sequence even when every single action is allowed.
Trajectories are scripted lists of action names and random benign sessions; nothing is executed and no language model is involved."""
import random
from statistics import mean

HARD_DENY = {"disable_monitor", "write_policy_file", "send_secret_external"}
ALL_ACTIONS = ["read_file", "edit_file", "run_tests", "list_dir", "read_secret", "http_post", "disable_monitor", "write_policy_file", "send_secret_external"]
MODE_ALLOWS = {"bypass": set(ALL_ACTIONS), "auto": {"read_file", "edit_file", "run_tests", "list_dir", "read_secret", "http_post"}, "default": {"read_file", "list_dir"}}


def authorize(mode, action):
    if action in HARD_DENY:
        return False, "hard policy"
    if action in MODE_ALLOWS[mode]:
        return True, "mode allows"
    return False, "mode denies"


def monitor(traj, window=4):
    """Flag a secret read followed by an external send within `window` later actions."""
    for i, a in enumerate(traj):
        if a == "read_secret" and any(b == "http_post" for b in traj[i + 1:i + 1 + window]):
            return f"secret read at {i} then external post within {window} actions"
    return None


def benign_session(r, n=12):
    return [r.choice(["read_file", "edit_file", "run_tests", "list_dir", "http_post", "read_secret"]) for _ in range(n)]


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Genuinely running: a hard policy against three modes")
    for mode in MODE_ALLOWS:
        row = []
        for a in ("read_file", "http_post", "disable_monitor", "send_secret_external"):
            ok, why = authorize(mode, a)
            row.append(f"{a}={'allow' if ok else 'deny'}({why})")
        print(f"{mode:7}: " + " ".join(row))
    print("the three hard-denied actions are refused in every mode including bypass, because the hard policy is checked before the mode table; the action names and the policy set are invented for the lab")

    section("2. Genuinely running: every action allowed, one trajectory flagged")
    traj = ["list_dir", "read_file", "read_secret", "edit_file", "http_post", "run_tests"]
    print("each action allowed under auto:", all(authorize("auto", a)[0] for a in traj))
    print("monitor on the sequence:", monitor(traj))
    print("the same actions in a harmless order:", monitor(["list_dir", "http_post", "read_file", "edit_file", "read_secret", "run_tests"]))
    print("no single action here breaks a rule, and the monitor flags the pairing of a secret read with a later external post, while the same two actions far apart or in the other order pass; the monitor looks only at order and distance, not at what was read or sent")

    section("3. Genuinely measuring: false alarms on random benign sessions (2000 sessions of 12 actions)")
    r = random.Random(1)
    sessions = [benign_session(r) for _ in range(2000)]
    for window in (1, 2, 4, 8):
        rate = mean(monitor(s, window) is not None for s in sessions)
        print(f"window {window}: {rate:.3f} of random sessions flagged")
    print("a wider window flags more random sessions because a secret read and an unrelated post are more likely to fall inside it, so the window trades missed exfiltration against false alarms; the sessions are uniform random draws and real traffic is not uniform")

    section("4. Genuinely measuring: how much spacing hides the pattern")
    for gap in (0, 1, 3, 5, 8):
        s = ["read_secret"] + ["list_dir"] * gap + ["http_post"]
        print(f"{gap} filler actions between: flagged with window 4: {monitor(s, 4) is not None} | window 8: {monitor(s, 8) is not None}")
    print("padding the sequence with harmless actions pushes the post outside a fixed window, which is the weakness of any detector with a fixed look-back; a larger window helps and raises the false alarms measured in section 3")


if __name__ == "__main__":
    main()
