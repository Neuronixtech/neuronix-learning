"""Teaching implementation (our own): Parallel / swarm / networked architectures, Part 1 - sequential, fixed assignment and a shared-queue swarm, measured with real threads and checked with a deterministic simulator.
The original code/main.py was not supplied and the lesson's task list was cut off in the paste, so the eight tasks and their durations are our own. Work is time.sleep, so threads overlap; this says nothing about CPU-bound Python or real LLM calls."""
import queue
import threading
import time
from dataclasses import dataclass

SCALE = 0.04


@dataclass(frozen=True)
class Task:
    task_id: str
    duration: float


TASKS = [Task("A", 1.0), Task("B", 3.0), Task("C", 1.0), Task("D", 1.0), Task("E", 2.0), Task("F", 3.0), Task("G", 1.0), Task("H", 2.0)]


def work(task):
    time.sleep(task.duration * SCALE)


def run_sequential(tasks):
    t0 = time.perf_counter()
    done = []
    for t in tasks:
        work(t)
        done.append((t.task_id, "main"))
    return time.perf_counter() - t0, done


def run_fixed(tasks, n):
    buckets = [[] for _ in range(n)]
    for i, t in enumerate(tasks):
        buckets[i % n].append(t)
    done, lock = [], threading.Lock()

    def worker(wid, mine):
        for t in mine:
            work(t)
            with lock:
                done.append((t.task_id, f"w{wid}"))
    t0 = time.perf_counter()
    ths = [threading.Thread(target=worker, args=(i, b)) for i, b in enumerate(buckets)]
    [t.start() for t in ths]
    [t.join() for t in ths]
    return time.perf_counter() - t0, done, buckets


def run_swarm(tasks, n):
    q = queue.Queue()
    for t in tasks:
        q.put(t)
    done, lock = [], threading.Lock()

    def worker(wid):
        while True:
            try:
                t = q.get_nowait()
            except queue.Empty:
                return
            work(t)
            with lock:
                done.append((t.task_id, f"w{wid}"))
    t0 = time.perf_counter()
    ths = [threading.Thread(target=worker, args=(i,)) for i in range(n)]
    [t.start() for t in ths]
    [t.join() for t in ths]
    return time.perf_counter() - t0, done


def simulate_fixed(durs, n):
    loads = [0.0] * n
    for i, d in enumerate(durs):
        loads[i % n] += d
    return max(loads)


def simulate_swarm(durs, n):
    free = [0.0] * n
    for d in durs:
        i = free.index(min(free))
        free[i] += d
    return max(free)


def section(t):
    print(f"\n--- {t} ---")


def main():
    durs = [t.duration for t in TASKS]
    section("1. Genuinely running: the three strategies on eight tasks")
    seq_t, seq_done = run_sequential(TASKS)
    fix_t, fix_done, buckets = run_fixed(TASKS, 4)
    swa_t, swa_done = run_swarm(TASKS, 4)
    print("every task finished once: sequential", sorted(x for x, _ in seq_done) == sorted(t.task_id for t in TASKS), "| fixed", sorted(x for x, _ in fix_done) == sorted(t.task_id for t in TASKS), "| swarm", sorted(x for x, _ in swa_done) == sorted(t.task_id for t in TASKS))
    print("fixed buckets:", [[t.task_id for t in b] for b in buckets])
    print("sequential slower than fixed:", seq_t > fix_t, "| fixed slower than swarm:", fix_t > swa_t, "| swarm faster than sequential:", swa_t < seq_t)
    print("simulated makespans (task units):", {"sequential": sum(durs), "fixed": simulate_fixed(durs, 4), "swarm": simulate_swarm(durs, 4)})
    print("with this task list the fixed assignment puts B and F, both of length 3, on the same worker so that worker finishes last at 6 units, while the swarm lets whoever is free take the next task and finishes in 4; the thread timings agree in order with the simulator, the exact seconds change from run to run, and the durations are our own choice.")

    section("2. Genuinely running: equal tasks give the swarm no advantage")
    eq = [Task(f"T{i}", 1.0) for i in range(20)]
    d_eq = [t.duration for t in eq]
    print("simulated fixed:", simulate_fixed(d_eq, 4), "| swarm:", simulate_swarm(d_eq, 4))
    print("twenty equal tasks on four workers take 5 units under both strategies, because a static split is already perfectly balanced; a shared queue pays off when durations differ and costs a little coordination when they do not.")

    section("3. Genuinely running: one long task sets the floor")
    long_tasks = [3.0] + [1.0] * 11
    for n in (1, 2, 4, 8, 16):
        print(f"workers={n:<2} swarm makespan={simulate_swarm(long_tasks, n):<5} lower bound={max(max(long_tasks), sum(long_tasks) / n):.2f}")
    print("the makespan falls to 3.0 at eight workers and stays there at sixteen, because one task of length 3 cannot be split, while at four workers the greedy queue gives 4.0 against a lower bound of 3.50 and at two workers 7.0 matches its bound; the bound is the larger of the longest task and total work divided by workers, and once the longest task dominates, more workers buy nothing.")

    section("4. Genuinely running: speedup against worker count")
    base = simulate_swarm(durs, 1)
    for n in (1, 2, 3, 4, 6, 8):
        m = simulate_swarm(durs, n)
        print(f"workers={n} makespan={m:<4} speedup={base / m:.2f} efficiency={base / m / n:.2f}")
    print("speedup climbs to 3.50 at four workers and 4.67 at six, then stays at 4.67 at eight because the longest task has length 3, and the efficiency, speedup per worker, drops to 0.58 at eight and is not even monotone (0.93 at three workers, 0.88 at two and four); extra workers cost money and stop buying time once the critical task is the limit, and greedy ordering makes the curve uneven.")

    section("5. Genuinely running: where tasks actually went in the swarm")
    per = {}
    for tid, w in swa_done:
        per.setdefault(w, []).append(tid)
    print("tasks per worker (counts only, assignment varies by run):", sorted(len(v) for v in per.values()), "| total:", sum(len(v) for v in per.values()))
    print("the tasks are shared among the four workers and the counts add up to eight, and which worker took which task is decided by timing so it can differ between runs; a queue that hands each task to one requester removes the need for a central assigner, and it does not make the order of results predictable.")

    section("6. Genuinely computing: what a central decision costs")
    dispatch = 0.002
    n_tasks = 10000
    print("dispatch time per task at 2 ms, 10000 tasks, serial supervisor:", n_tasks * dispatch, "s | with 100 workers and a 0.5 s task:", n_tasks * 0.5 / 100, "s of work")
    print("a supervisor that spends 2 ms deciding each of 10000 tasks needs 20 seconds just to decide, while 100 workers need 50 seconds to do half-second tasks, so the supervisor is not the limit here and would become it if each decision cost an LLM call of a second; these numbers are invented to show the arithmetic and are not a measurement.")


if __name__ == "__main__":
    main()
