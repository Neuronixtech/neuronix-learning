"""Teaching implementation (our own): AgentBench-style interactive environment, trajectory metrics, contamination and a combined report."""
import random
import statistics
from dataclasses import dataclass, field

from bench_1 import TASK, STRONG_P2P, BenchmarkTask, buggy_add, evaluate, hardcoded


class ShellEnv:
    """Tiny OS-style environment: the task is to leave 'report.txt' containing the word 'done'."""

    def __init__(self):
        self.files, self.steps = {"notes.txt": "todo"}, 0

    def act(self, cmd):
        self.steps += 1
        parts = cmd.split(" ", 2)
        if parts[0] == "ls":
            return " ".join(sorted(self.files))
        if parts[0] == "cat" and len(parts) > 1:
            return self.files.get(parts[1], f"cat: {parts[1]}: No such file")
        if parts[0] == "write" and len(parts) > 2:
            self.files[parts[1]] = parts[2]
            return "ok"
        if parts[0] == "rm" and len(parts) > 1:
            return "ok" if self.files.pop(parts[1], None) is not None else f"rm: {parts[1]}: No such file"
        return f"{parts[0]}: command not found"

    def success(self):
        return self.files.get("report.txt") == "done"


def run_script(cmds):
    env, obs = ShellEnv(), []
    for c in cmds:
        obs.append((c, env.act(c)))
    return env, obs


@dataclass
class Episode:
    steps: int
    step_ok: int
    success: bool
    cost: float
    latency: float


def simulate(step_acc, horizon, n, seed, recover=0.0):
    """Each step is correct with probability step_acc; a wrong step ruins the episode unless `recover` rescues it."""
    rng = random.Random(seed)
    eps = []
    for _ in range(n):
        ok_steps, alive = 0, True
        for _ in range(horizon):
            good = rng.random() < step_acc
            if not good and rng.random() < recover:
                good = True
            ok_steps += good
            alive = alive and good
        eps.append(Episode(horizon, ok_steps, alive, horizon * 0.002, horizon * 1.3))
    return eps


def contamination_score(contaminated_fraction, n_tasks, seed):
    """A 'model' answers memorised tasks correctly and the rest at an ASSUMED 40 percent skill."""
    rng = random.Random(seed)
    seen = set(rng.sample(range(n_tasks), int(n_tasks * contaminated_fraction)))
    score = lambda ids: sum((i in seen) or rng.random() < 0.40 for i in ids) / len(ids)
    return score(range(n_tasks)), score([i for i in range(n_tasks) if i not in seen]) if len(seen) < n_tasks else float("nan")


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. An interactive environment: errors become observations")
    env, obs = run_script(["ls", "cat report.txt", "write report.txt done", "cat report.txt", "rm missing.txt", "grep done notes.txt"])
    for c, o in obs:
        print(f"$ {c:26} -> {o}")
    print("task success:", env.success(), "| steps used:", env.steps)
    print("shell errors came back as text the agent can read; two of six steps were errors and the task still succeeded")

    section("2. Genuinely checking: step success versus task success")
    good, _ = run_script(["write report.txt done"])
    detour, _ = run_script(["ls", "cat notes.txt", "cat report.txt", "write report.txt done"])
    spoiled, _ = run_script(["write report.txt done", "rm report.txt", "ls"])
    for name, e in (("direct", good), ("detour", detour), ("deleted its own result", spoiled)):
        print(f"{name:24} steps={e.steps} success={e.success()}")
    print("the last run wrote the right file and then deleted it: the final state fails the terminal check even though the first step was correct; terminal success reads only the end state, and step counts say nothing about it")

    section("3. Genuinely measuring: step accuracy compounds (per-step accuracy ASSUMED, seed 1, 20000 episodes)")
    print(f"{'horizon':>8} {'step acc':>9} {'step success':>13} {'task success':>13} {'p^n':>7}")
    for horizon in (3, 10, 30):
        for acc in (0.99, 0.95, 0.90):
            eps = simulate(acc, horizon, 20000, 1)
            print(f"{horizon:>8} {acc:>9.0%} {statistics.mean(e.step_ok / e.steps for e in eps):>13.1%} {statistics.mean(e.success for e in eps):>13.1%} {acc ** horizon:>7.1%}")
    print("95 percent step accuracy gives about 60 percent success at 10 steps and about 21 percent at 30; the agent looked 95 percent reliable and failed most long tasks")
    eps = simulate(0.95, 30, 20000, 1, recover=0.5)
    print(f"if half of the wrong steps could be noticed and recovered (assumed), 30-step success rises to {statistics.mean(e.success for e in eps):.1%}")

    section("4. Genuinely measuring: a benchmark score under contamination (assumed 40 percent real skill, 500 tasks)")
    print(f"{'memorised':>10} {'reported score':>15} {'score on unseen tasks':>22}")
    for frac in (0.0, 0.1, 0.3, 0.6):
        full, unseen = contamination_score(frac, 500, 2)
        print(f"{frac:>10.0%} {full:>15.1%} {unseen:>22.1%}")
    print("with 60 percent memorised the reported score rose from 39.4 to 73.8 percent while the unseen-task column stayed between 36 and 43 percent (sampling noise at 500 tasks); the gap between the columns is how contamination shows up, and it needs a held-out set")

    section("5. Genuinely checking: weak tests inflate a coding score")
    cands = {"correct": lambda a, b: a + b, "hard-coded": hardcoded, "int-only": lambda a, b: int(a) + int(b), "no-op": buggy_add}
    weak = TASK
    strong = BenchmarkTask("t+", TASK.title, buggy_add, TASK.fail_to_pass, STRONG_P2P)
    for label, task in (("weak (3 tests)", weak), ("strong (8 tests)", strong)):
        res = {n: evaluate(task, fn)["resolved"] for n, fn in cands.items()}
        print(f"{label:17} resolved: {sum(res.values())}/4 -> {[n for n, v in res.items() if v]}")
    print("two of the three accepted patches under the weak suite were wrong; the stronger suite accepted only the correct one")

    section("6. A combined report: success alone is not enough")
    rows = [("agent A", simulate(0.97, 10, 5000, 7)), ("agent B", simulate(0.97, 10, 5000, 8, recover=0.5)), ("agent C (cheap)", simulate(0.90, 10, 5000, 9))]
    costs = {"agent A": 1.0, "agent B": 2.4, "agent C (cheap)": 0.25}
    print(f"{'agent':16} {'success':>8} {'cost/task':>10} {'cost per success':>17} ")
    for name, eps in rows:
        s = statistics.mean(e.success for e in eps)
        c = costs[name]
        print(f"{name:16} {s:>8.1%} {c:>10.2f} {c / s:>17.2f}")
    print("costs are invented relative units; the ranking by success and the ranking by cost per success differ, so a leaderboard column hides the choice")


if __name__ == "__main__":
    main()
