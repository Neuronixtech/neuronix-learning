"""Teaching implementation (our own): Supervisor / Orchestrator-Worker pattern, Part 1 - a lead that plans, three threaded workers and a synthesis.
The original code/main.py was not supplied. Workers sleep to stand in for slow work and return canned summaries: no model, no network and no real research happens."""
import threading
import time


class Worker:
    def __init__(self, worker_id, delay=0.1, fail=False):
        self.worker_id, self.delay, self.fail = worker_id, delay, fail

    def run(self, sub_question):
        time.sleep(self.delay)
        if self.fail:
            raise RuntimeError(f"worker {self.worker_id} could not reach its source")
        return f"[worker {self.worker_id}] summary of: {sub_question}"


class Lead:
    def __init__(self, delays=(0.1, 0.1, 0.1), failing=()):
        self.workers = [Worker(i + 1, d, fail=(i + 1) in failing) for i, d in enumerate(delays)]
        self.finish_order = []

    def plan(self, query):
        return [f"What is the historical background of: {query}?", f"What are the technical developments in: {query}?", f"What are the practical implications of: {query}?"]

    def run(self, query):
        questions = self.plan(query)
        results = [None] * len(questions)
        errors = []
        lock = threading.Lock()

        def execute(index, worker, question):
            try:
                summary = worker.run(question)
                with lock:
                    results[index] = summary
                    self.finish_order.append(index)
            except Exception as exc:
                with lock:
                    errors.append((index, str(exc)))

        threads = [threading.Thread(target=execute, args=(i, w, q)) for i, (w, q) in enumerate(zip(self.workers, questions))]
        for t in threads:
            t.start()
        for t in threads:
            t.join()
        if errors:
            raise RuntimeError(f"Worker failures: {errors}")
        return self.synthesize(query, results)

    def synthesize(self, query, results):
        return "\n".join(f"{i + 1}. {r}" for i, r in enumerate(results))


def count_agents(branching_factor, depth):
    if branching_factor < 1:
        raise ValueError("Branching factor must be positive")
    if depth < 0:
        raise ValueError("Depth cannot be negative")
    return sum(branching_factor ** level for level in range(depth + 1))


def section(title):
    print(f"\n--- {title} ---")


def main():
    section("1. Genuinely running: plan, three threads and a synthesis")
    lead = Lead()
    t0 = time.perf_counter()
    answer = lead.run("multi-agent systems")
    parallel = time.perf_counter() - t0
    t1 = time.perf_counter()
    for w, q in zip(lead.workers, lead.plan("multi-agent systems")):
        w.run(q)
    sequential = time.perf_counter() - t1
    print("synthesis lines:", len(answer.splitlines()), "| first:", answer.splitlines()[0][:48])
    print(f"three 0.1 s workers: parallel about {round(parallel, 1)} s, one after another about {round(sequential, 1)} s | parallel under 0.2 s: {parallel < 0.2} | sequential at least 0.29 s: {sequential >= 0.29}")
    print("the three workers overlapped, so the worker stage took about as long as the slowest one and not the sum, which is the whole point of the pattern when the work is independent and waits for something outside Python; the figures are rounded timings and change between runs, and sleep stands in for real work.")

    section("2. Genuinely running: results stay in plan order when workers finish out of order")
    lead2 = Lead(delays=(0.3, 0.1, 0.2))
    answer2 = lead2.run("topic")
    print("completion order of the workers:", [i + 1 for i in lead2.finish_order])
    print("order of the lines in the synthesis:", [int(line.split("worker ")[1][0]) for line in answer2.splitlines()])
    print("worker 2 finished first and worker 1 last, yet the synthesis still lists them as 1, 2, 3, because each result is written into the slot of its question and not appended when it arrives; appending in completion order would have made the report order change from run to run.")

    section("3. Genuinely running: join order does not serialise the workers")
    lead3 = Lead(delays=(0.3, 0.1, 0.1))
    t = time.perf_counter()
    lead3.run("topic")
    total = time.perf_counter() - t
    print(f"slowest worker 0.3 s, the other two 0.1 s: total about {round(total, 1)} s | under 0.5 s (the sum would be 0.5): {total < 0.5}")
    print("the supervisor joins worker 1 first but all three had already been started, so waiting on the slow one cost nothing extra for the others; joining is about when the caller continues and not about when each worker runs.")

    section("4. Genuinely running: one failing worker is reported, not hidden")
    try:
        Lead(failing={2}).run("topic")
    except RuntimeError as e:
        print("raised:", e)
    lead4 = Lead(failing={2})
    try:
        lead4.run("topic")
    except RuntimeError:
        pass
    print("the other two workers still finished:", sorted(i + 1 for i in lead4.finish_order))
    print("the supervisor waited for every thread and then refused to build a synthesis from a failed run, naming the worker that failed, while the two good results existed and were discarded; this fail after join policy is simple, and partial results with a flag are a different choice that Part 2 tests.")

    section("5. Genuinely computing: how many agents a hierarchy needs")
    rows = [(2, 2), (3, 2), (4, 2), (3, 3), (4, 3)]
    print(", ".join(f"b={b} d={d}: {count_agents(b, d)}" for b, d in rows))
    try:
        count_agents(0, 2)
    except ValueError as e:
        print("invalid branching factor:", e)
    print("a full tree with three children per supervisor and depth two has 13 agents, one root, three supervisors and nine workers, and depth three already has 40, so depth and branching grow the agent count quickly; the table assumes every internal node spawns the full number of children.")

    section("6. Genuinely computing: the ideal speedup of the worker stage")
    ideal = 0.9 / 0.3
    measured = 0.9 / 0.35
    print(f"ideal 0.9 s over 0.3 s: {ideal:.2f}x | with a 0.35 s measured parallel stage: {measured:.2f}x")
    print("the ideal gain of three for three equal independent workers drops to about 2.57 when the parallel stage takes 0.35 s, and planning, synthesis and thread start-up are not in either number; the 0.35 s is an example input from the lesson and not a measurement made here.")


if __name__ == "__main__":
    main()
