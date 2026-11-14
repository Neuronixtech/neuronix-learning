"""Teaching implementation (our own): long-horizon agents, Part 2 - branching trees of attempts, checkpoints versus restarting from scratch, and best-of-N retries, each compared against a seeded simulation.
All probabilities are invented for the lab; no language model is used and nothing here measures a real agent."""
import random
from statistics import mean


def tree_counts(branching, depth):
    nodes = sum(branching ** d for d in range(depth + 1))
    leaves = branching ** depth
    return nodes, leaves


def run_with_restart(r, p_step, n_steps, max_attempts):
    """A failure anywhere sends the whole task back to step 0. Returns (success, steps_executed)."""
    executed = 0
    for _ in range(max_attempts):
        done = True
        for _s in range(n_steps):
            executed += 1
            if r.random() >= p_step:
                done = False
                break
        if done:
            return True, executed
    return False, executed


def run_with_checkpoints(r, p_step, n_steps, checkpoint_every, max_retries_per_segment):
    """A failure only rewinds to the last checkpoint. Returns (success, steps_executed)."""
    executed = 0
    pos = 0
    while pos < n_steps:
        seg_end = min(pos + checkpoint_every, n_steps)
        for _ in range(max_retries_per_segment):
            ok = True
            for _s in range(pos, seg_end):
                executed += 1
                if r.random() >= p_step:
                    ok = False
                    break
            if ok:
                break
        else:
            return False, executed
        pos = seg_end
    return True, executed


def best_of_n(r, p, n):
    return any(r.random() < p for _ in range(n))


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Genuinely computing: size of a branching tree of attempts")
    for b, d in ((2, 2), (3, 2), (3, 3), (5, 4)):
        nodes, leaves = tree_counts(b, d)
        print(f"branching {b}, depth {d}: {nodes} nodes in total, {leaves} leaves")
    print("branching 3 at depth 2 gives 13 nodes and 9 leaves, matching the hand count, and the totals grow fast enough that exploring every branch is its own cost problem")

    section("2. Genuinely measuring: restart from scratch against checkpoints, 60 steps at 97 percent per step")
    p, n = 0.97, 60
    rr = random.Random(11)
    a = [run_with_restart(rr, p, n, 5) for _ in range(4000)]
    rr = random.Random(11)
    b = [run_with_checkpoints(rr, p, n, 10, 5) for _ in range(4000)]
    print(f"restart (5 attempts):          success {mean(x[0] for x in a):.3f} | mean steps executed {mean(x[1] for x in a):.1f}")
    print(f"checkpoint every 10 (5 retries each): success {mean(x[0] for x in b):.3f} | mean steps executed {mean(x[1] for x in b):.1f}")
    print("with the same per-step reliability, checkpoints finished far more tasks and spent fewer executed steps in total, because a failure only repeats at most ten steps; the probabilities are invented and the two runs share a seed but not a random stream, so treat the gap as indicative")

    section("3. Genuinely measuring: checkpoint spacing")
    for every in (2, 5, 10, 20, 60):
        rr = random.Random(21)
        res = [run_with_checkpoints(rr, p, n, every, 5) for _ in range(3000)]
        print(f"checkpoint every {every:2d} steps: success {mean(x[0] for x in res):.3f} | mean steps executed {mean(x[1] for x in res):.1f}")
    print("very sparse checkpoints behave like restarting, and very dense ones save more work but, in a real system, each checkpoint costs time and storage that this lab does not charge for")

    section("4. Genuinely computing and simulating: best-of-N retries")
    rr = random.Random(5)
    for pp in (0.3, 0.6):
        for k in (1, 3, 5):
            sim = mean(best_of_n(rr, pp, k) for _ in range(20000))
            print(f"single-try success {pp}, {k} tries: formula {1 - (1 - pp) ** k:.3f} | simulated {sim:.3f}")
    print("trying several times helps a lot when the tries are independent and a checker can tell which one worked; if the checker is wrong or the failures are correlated, the formula overstates the benefit")

    section("5. Genuinely running: correlated failures break the independence assumption")
    rr = random.Random(9)
    trials = 20000
    hit_independent = mean(best_of_n(rr, 0.5, 4) for _ in range(trials))
    hits = 0
    for _ in range(trials):
        task_is_hard = rr.random() < 0.5
        p_local = 0.05 if task_is_hard else 0.95
        hits += best_of_n(rr, p_local, 4)
    print(f"independent tries at 0.5 each, 4 tries: {hit_independent:.3f}")
    print(f"same average (0.5) but half the tasks are hard (5 percent) and half easy (95 percent), 4 tries: {hits / trials:.3f}")
    print("both setups average 50 percent per try, yet four tries succeed far less often when the failures are concentrated on the hard tasks, so retries cannot rescue tasks the agent systematically cannot do; the 5 and 95 percent split is invented")


if __name__ == "__main__":
    main()
