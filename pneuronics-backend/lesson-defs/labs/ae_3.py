"""Teaching implementation (our own): AlphaEvolve-style evolutionary coding, Part 3 - a real SQLite program database with lineage, a staged evaluator, a search budget with stagnation stopping, parallel evaluation compared
with sequential, a child process that is NOT a sandbox (it reads a made-up secret file), and a deployment gate. Programs are polynomial coefficients; no generated source code is run except two fixed demo scripts. No language model is used."""
import hashlib
import json
import random
import sqlite3
import subprocess
import sys
import tempfile
import time
from concurrent.futures import ProcessPoolExecutor
from dataclasses import dataclass
from pathlib import Path


@dataclass(frozen=True)
class Program:
    a: int
    b: int
    c: int

    def predict(self, x):
        return self.a * x * x + self.b * x + self.c

    def source(self):
        return f"{self.a}*x*x + {self.b}*x + {self.c}"


def target(x):
    return x * x + 3 * x + 2


def mse(p, pts=range(-10, 11)):
    pts = list(pts)
    return sum((p.predict(x) - target(x)) ** 2 for x in pts) / len(pts)


def pool_eval(p):
    return p, mse(p)


def sha(text):
    return hashlib.sha256(text.encode()).hexdigest()[:12]


class ProgramDB:
    def __init__(self):
        self.db = sqlite3.connect(":memory:")
        self.db.execute("CREATE TABLE c (id TEXT PRIMARY KEY, parent TEXT, gen INTEGER, src TEXT, status TEXT, score REAL, evaluator TEXT)")

    def add(self, p, parent, gen, status, score, evaluator="v1"):
        cid = sha(p.source())
        try:
            self.db.execute("INSERT INTO c VALUES (?,?,?,?,?,?,?)", (cid, parent, gen, p.source(), status, score, evaluator))
            return cid, True
        except sqlite3.IntegrityError:
            return cid, False

    def lineage(self, cid):
        out = []
        while cid:
            row = self.db.execute("SELECT id, parent, gen, src, score FROM c WHERE id=?", (cid,)).fetchone()
            out.append(row)
            cid = row[1]
        return out[::-1]


def staged(p):
    if not all(isinstance(v, int) and not isinstance(v, bool) and abs(v) <= 100 for v in (p.a, p.b, p.c)):
        return "INVALID", None
    e = mse(p)
    return ("PASS", e) if e == 0 else ("INCORRECT", e)


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Genuinely running: a SQLite program database with lineage and duplicate detection")
    db = ProgramDB()
    rng = random.Random(5)
    cur, cid = Program(0, 1, 0), None
    cid, _ = db.add(cur, None, 0, "evaluated", mse(cur))
    dup = 0
    for g in range(1, 60):
        v = [cur.a, cur.b, cur.c]
        v[rng.randrange(3)] += rng.choice([-2, -1, 1, 2])
        child = Program(*v)
        s = mse(child)
        new_id, fresh = db.add(child, cid, g, "evaluated", s)
        dup += 0 if fresh else 1
        if s < mse(cur):
            cur, cid = child, new_id
    print("rows:", db.db.execute("SELECT COUNT(*) FROM c").fetchone()[0], "| duplicates refused:", dup, "| best:", cur.source(), "| MSE:", mse(cur))
    for row in db.lineage(cid):
        print("  lineage", row[2], row[3], "score", row[4])
    print("every stored program has a content-hash id, a parent and a generation, and the same source text was refused the second time it appeared; the lineage is the chain of parents that led to the current best")

    section("2. Genuinely running: a staged evaluator separates invalid, incorrect and passing")
    for p in (Program(1000, 1, 0), Program(0, 1, 0), Program(1, 3, 2)):
        print(f"{p.source():28} -> {staged(p)}")
    print("a candidate outside the allowed coefficient range never reaches scoring, a wrong one gets its error and the exact one passes; keeping the stages apart tells you why a candidate was rejected")

    section("3. Genuinely running: a search budget with stagnation stopping")
    def run(seed, max_evals, stag):
        r = random.Random(seed)
        best, bs, last, n = Program(0, 1, 0), mse(Program(0, 1, 0)), 0, 0
        while n < max_evals:
            v = [best.a, best.b, best.c]
            v[r.randrange(3)] += r.choice([-1, 1])
            c = Program(*v)
            n += 1
            s = mse(c)
            if s < bs:
                best, bs, last = c, s, n
            if bs == 0:
                return n, "target reached", bs
            if n - last >= stag:
                return n, "stagnation", bs
        return n, "evaluation budget", bs
    tally = {}
    for seed in range(1, 21):
        n, why, bs = run(seed, 300, 6)
        tally[why] = tally.get(why, 0) + 1
        if seed <= 4:
            print(f"seed {seed}: stopped after {n:3} evaluations because of {why!r}, best MSE {bs}")
    print("over 20 seeds with a stagnation window of 6:", tally)
    n2 = {}
    for seed in range(1, 21):
        n, why, bs = run(seed, 300, 40)
        n2[why] = n2.get(why, 0) + 1
    print("over the same 20 seeds with a window of 40:", n2)
    print("the counts above are how often each stop reason occurred; a short stagnation window ended runs before the target was found, and a longer one let more of them finish, so the window is a choice with a cost, and the seeds and limits are invented")

    section("4. Genuinely measuring: parallel versus sequential evaluation of tiny jobs")
    progs = [Program(rng.randint(-5, 5), rng.randint(-5, 5), rng.randint(-5, 5)) for _ in range(400)]
    t0 = time.perf_counter()
    seq = [pool_eval(p) for p in progs]
    t_seq = time.perf_counter() - t0
    t0 = time.perf_counter()
    with ProcessPoolExecutor(max_workers=4) as ex:
        par = list(ex.map(pool_eval, progs))
    t_par = time.perf_counter() - t0
    print("same results from both:", [round(e, 6) for _, e in seq] == [round(e, 6) for _, e in par], "| parallel slower than sequential on this machine:", t_par > t_seq)
    print("each evaluation is a few microseconds of arithmetic, so starting processes and sending objects between them costs more than the work; parallelism pays when each evaluation takes long enough to dwarf that overhead, and the timings are single runs that were not repeated")

    section("5. Genuinely running: a child process is not a sandbox")
    with tempfile.TemporaryDirectory() as d:
        secret = Path(d) / "made_up_secret.txt"
        secret.write_text("made-up-secret-value", encoding="utf-8")
        script = Path(d) / "candidate.py"
        script.write_text(f"print(open(r'{secret}').read())", encoding="utf-8")
        out = subprocess.run([sys.executable, "-I", str(script)], capture_output=True, text=True, timeout=5)
        print("child with -I and a timeout read the file it was never given:", out.stdout.strip())
        loop = Path(d) / "loop.py"
        loop.write_text("while True: pass", encoding="utf-8")
        try:
            subprocess.run([sys.executable, str(loop)], timeout=1)
            print("loop finished")
        except subprocess.TimeoutExpired:
            print("an infinite loop was stopped by the timeout after 1 second")
    print("isolated mode and a timeout stop a runaway loop and do nothing about file access, because the child runs with the same operating-system permissions as its parent; real isolation has to be enforced outside Python with a container or a virtual machine, and this lab only shows the gap")

    section("6. Genuinely running: a deployment gate and an evidence report")
    def gate(ev):
        failed = [k for k, v in ev.items() if not v]
        return {"approved": not failed, "failed_checks": failed}
    ev = dict(correctness=True, security=True, performance=True, independent_review=True, human_approval=False, rollback_ready=True)
    print(gate(ev))
    report = {"candidate": sha(cur.source()), "training_mse": mse(cur), "held_out_mse": mse(cur, [-30, -20, 20, 40]), "gate": gate(ev)}
    print(json.dumps(report, sort_keys=True))
    print("a candidate with a perfect score was still not approved because a human approval was missing, and in this lab approval is a boolean field, which a real system must replace with an authenticated decision the candidate cannot set; the report is printed and not written to a file")


if __name__ == "__main__":
    main()
