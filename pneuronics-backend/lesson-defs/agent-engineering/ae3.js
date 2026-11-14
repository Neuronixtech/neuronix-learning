module.exports = {
 "phaseId": "6a369d6366020ed05b32158c",
 "moduleId": "6a369d6366020ed05b321595",
 "order": 2,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "AlphaEvolve — Evolutionary Coding Agents (Part 3 of 3) — Provenance, Budgets and Deployment",
 "titleKn": "AlphaEvolve — ವಿಕಾಸಾತ್ಮಕ ಕೋಡಿಂಗ್ Agents (ಭಾಗ 3 / 3) — ಮೂಲ ದಾಖಲೆ, ಬಜೆಟ್ ಮತ್ತು Deployment",
 "desc": "Add provenance, budgets, isolation limits and a deployment gate around an evolutionary search.",
 "descKn": "ವಿಕಾಸಾತ್ಮಕ ಹುಡುಕಾಟದ ಸುತ್ತ ಮೂಲ ದಾಖಲೆ, ಬಜೆಟ್, ಪ್ರತ್ಯೇಕತೆ ಮಿತಿ ಮತ್ತು deployment gate ಸೇರಿಸಿ.",
 "objectives": [
  "Store candidates with lineage.",
  "Separate evaluator statuses.",
  "Budget a search.",
  "Know what a subprocess does not isolate.",
  "Gate deployment on approval."
 ],
 "objectivesKn": [
  "ವಂಶಾವಳಿಯೊಂದಿಗೆ ಅಭ್ಯರ್ಥಿಗಳನ್ನು ಸಂಗ್ರಹಿಸಿ.",
  "ಮೌಲ್ಯಮಾಪಕ ಸ್ಥಿತಿಗಳನ್ನು ಬೇರ್ಪಡಿಸಿ.",
  "ಹುಡುಕಾಟಕ್ಕೆ ಬಜೆಟ್ ಹಾಕಿ.",
  "subprocess ಏನನ್ನು ಪ್ರತ್ಯೇಕಿಸುವುದಿಲ್ಲ ತಿಳಿಯಿರಿ.",
  "ಅನುಮೋದನೆಯ ಮೇಲೆ deployment gate ಮಾಡಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "AlphaEvolve — Evolutionary Coding Agents (Part 3 of 3)",
    "textKn": "AlphaEvolve — ವಿಕಾಸಾತ್ಮಕ ಕೋಡಿಂಗ್ Agents (ಭಾಗ 3 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 3 of 3: a SQLite program database with lineage, a staged evaluator, a search budget with stagnation stopping, parallel versus sequential evaluation, a child process that is not a sandbox and a deployment gate. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind AlphaEvolve-style evolutionary coding (seed programs, mutation, MAP-Elites archives, islands, held-out evaluation, program databases and deployment gates), not the real software, and the target function, polynomial programs and settings are made up by the lab and no language model is involved, so no real LLM behaviour is measured. The original code/main.py was not supplied, and the lesson says its Python is educational reference code, so the labs are our own implementation. The results quoted in the lesson (48 scalar multiplications, about 0.7 percent of Borg compute, a 32.5 percent FlashAttention speedup) are cited from the lesson and were not measured here. Part 2 of the lesson printed a held-out MSE of 6240.0 for its overfitting example and Part 3 corrected it to 21600.0, which the lab reproduces. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 3ನೆಯದು: ವಂಶಾವಳಿ ಇರುವ SQLite ಪ್ರೋಗ್ರಾಂ ಡೇಟಾಬೇಸ್, ಹಂತಹಂತದ ಮೌಲ್ಯಮಾಪಕ, stagnation ನಿಲುಗಡೆ ಇರುವ ಹುಡುಕಾಟ ಬಜೆಟ್, ಸಮಾನಾಂತರ ವಿರುದ್ಧ ಅನುಕ್ರಮ ಮೌಲ್ಯಮಾಪನ, sandbox ಅಲ್ಲದ child process ಮತ್ತು deployment gate. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು AlphaEvolve ಶೈಲಿಯ ವಿಕಾಸಾತ್ಮಕ ಕೋಡಿಂಗ್ (seed ಪ್ರೋಗ್ರಾಂಗಳು, ಮ್ಯುಟೇಶನ್, MAP-Elites ಆರ್ಕೈವ್‌ಗಳು, islands, held-out ಮೌಲ್ಯಮಾಪನ, ಪ್ರೋಗ್ರಾಂ ಡೇಟಾಬೇಸ್‌ಗಳು ಮತ್ತು deployment gates) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಗುರಿ ಕಾರ್ಯ, ಬಹುಪದ ಪ್ರೋಗ್ರಾಂಗಳು ಮತ್ತು ಸೆಟ್ಟಿಂಗ್‌ಗಳನ್ನು ಲ್ಯಾಬ್ ಕಲ್ಪಿಸಿದ್ದು ಮತ್ತು ಭಾಷಾ ಮಾದರಿ ಇಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ code/main.py ಒದಗಿಸಿರಲಿಲ್ಲ, ಮತ್ತು lesson ತನ್ನ Python ಶೈಕ್ಷಣಿಕ ಉಲ್ಲೇಖ ಕೋಡ್ ಎಂದು ಹೇಳುತ್ತದೆ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ನಮ್ಮದೇ ಅನುಷ್ಠಾನ. lesson ನಲ್ಲಿ ಉಲ್ಲೇಖಿಸಿದ ಫಲಿತಾಂಶಗಳು (48 ಸ್ಕೇಲಾರ್ ಗುಣಾಕಾರ, Borg compute ನ ಸುಮಾರು 0.7 ಶೇಕಡಾ, 32.5 ಶೇಕಡಾ FlashAttention ವೇಗ) lesson ನಿಂದ ಉಲ್ಲೇಖಿತ ಮತ್ತು ಇಲ್ಲಿ ಅಳೆಯಲಾಗಿಲ್ಲ. lesson ನ ಭಾಗ 2 ತನ್ನ overfitting ಉದಾಹರಣೆಗೆ held-out MSE 6240.0 ಮುದ್ರಿಸಿತು ಮತ್ತು ಭಾಗ 3 ಅದನ್ನು 21600.0 ಗೆ ಸರಿಪಡಿಸಿತು, ಲ್ಯಾಬ್ ಅದನ್ನು ಪುನರುತ್ಪಾದಿಸುತ್ತದೆ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "A Winning Program Is Not Yet a Deployed One",
    "textKn": "ಗೆದ್ದ ಪ್ರೋಗ್ರಾಂ ಇನ್ನೂ deploy ಆದದ್ದಲ್ಲ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "The Engineering Around the Search",
    "headingKn": "ಹುಡುಕಾಟದ ಸುತ್ತಲಿನ ಎಂಜಿನಿಯರಿಂಗ್",
    "bodyEn": "This part builds the pieces a real system needs around the loop. A SQLite database stores every candidate with a content hash, a parent and a generation, a staged evaluator separates invalid, incorrect and passing, a budget controller stops on evaluations or stagnation, parallel evaluation is timed against sequential, and a child process shows that isolated mode and a timeout are not a sandbox. It ends with a deployment gate that blocks a perfect candidate for want of human approval.",
    "bodyKn": "ಈ ಭಾಗ ಲೂಪ್ ಸುತ್ತ ನಿಜ ವ್ಯವಸ್ಥೆಗೆ ಬೇಕಾದ ತುಣುಕುಗಳನ್ನು ನಿರ್ಮಿಸುತ್ತದೆ. SQLite ಡೇಟಾಬೇಸ್ ಪ್ರತಿ ಅಭ್ಯರ್ಥಿಯನ್ನು ವಿಷಯ hash, ಪೋಷಕ ಮತ್ತು ಜನರೇಶನ್‌ನೊಂದಿಗೆ ಸಂಗ್ರಹಿಸುತ್ತದೆ, ಹಂತಹಂತದ ಮೌಲ್ಯಮಾಪಕ ಅಮಾನ್ಯ, ತಪ್ಪು ಮತ್ತು ಪಾಸ್ ಬೇರ್ಪಡಿಸುತ್ತದೆ, ಬಜೆಟ್ ನಿಯಂತ್ರಕ ಮೌಲ್ಯಮಾಪನ ಅಥವಾ stagnation ಮೇಲೆ ನಿಲ್ಲಿಸುತ್ತದೆ, ಸಮಾನಾಂತರ ಮೌಲ್ಯಮಾಪನ ಅನುಕ್ರಮದ ವಿರುದ್ಧ ಸಮಯ ಅಳೆಯಲಾಗುತ್ತದೆ, ಮತ್ತು child process isolated ಮೋಡ್ ಹಾಗೂ timeout sandbox ಅಲ್ಲ ಎಂದು ತೋರಿಸುತ್ತದೆ. ಮಾನವ ಅನುಮೋದನೆ ಇಲ್ಲದ ಕಾರಣ ಪರಿಪೂರ್ಣ ಅಭ್ಯರ್ಥಿಯನ್ನು ತಡೆಯುವ deployment gate ನೊಂದಿಗೆ ಮುಗಿಯುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "From Search Result to Deployment",
    "headingKn": "ಹುಡುಕಾಟ ಫಲಿತಾಂಶದಿಂದ Deployment ವರೆಗೆ",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">a good score is not a deployment decision</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">database</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">lineage + hashes</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">budget</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">stop rules</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">isolation</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">outside Python</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">gate</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">human approval</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">a good score is not a deployment decision</text></svg>",
    "captionEn": "Provenance, budgets, isolation and approval sit around the search.",
    "captionKn": "ಮೂಲ ದಾಖಲೆ, ಬಜೆಟ್, ಪ್ರತ್ಯೇಕತೆ ಮತ್ತು ಅನುಮೋದನೆ ಹುಡುಕಾಟದ ಸುತ್ತ ಇರುತ್ತವೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Evaluator statuses",
    "headingKn": "ಮೌಲ್ಯಮಾಪಕ ಸ್ಥಿತಿಗಳು",
    "headers": [
     "Status",
     "Meaning in the lab"
    ],
    "rows": [
     [
      "INVALID",
      "a coefficient is outside the allowed range"
     ],
     [
      "INCORRECT",
      "valid but MSE above 0"
     ],
     [
      "PASS",
      "MSE exactly 0"
     ]
    ]
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Building and Testing the Ideas",
    "textKn": "ಕಲ್ಪನೆಗಳನ್ನು ನಿರ್ಮಿಸಿ ಪರೀಕ್ಷಿಸುವುದು",
    "level": "H2"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "ae_3.py",
    "headingEn": "Database, staged evaluator and the budgeted run",
    "headingKn": "ಡೇಟಾಬೇಸ್, ಹಂತಹಂತದ ಮೌಲ್ಯಮಾಪಕ ಮತ್ತು ಬಜೆಟ್ ಓಟ",
    "descEn": "ProgramDB stores candidates in SQLite with a content-hash id and walks the lineage, staged returns INVALID, INCORRECT or PASS, and pool_eval is the unit of work sent to worker processes.",
    "descKn": "ProgramDB ಅಭ್ಯರ್ಥಿಗಳನ್ನು SQLite ನಲ್ಲಿ ವಿಷಯ-hash id ಜೊತೆ ಸಂಗ್ರಹಿಸಿ ವಂಶಾವಳಿ ನಡೆಯುತ್ತದೆ, staged INVALID, INCORRECT ಅಥವಾ PASS ಮರಳಿಸುತ್ತದೆ, ಮತ್ತು pool_eval worker ಪ್ರಕ್ರಿಯೆಗಳಿಗೆ ಕಳುಹಿಸುವ ಕೆಲಸದ ಘಟಕ.",
    "code": "def pool_eval(p):\r\n    return p, mse(p)\r\n\r\n\r\ndef sha(text):\r\n    return hashlib.sha256(text.encode()).hexdigest()[:12]\r\n\r\n\r\nclass ProgramDB:\r\n    def __init__(self):\r\n        self.db = sqlite3.connect(\":memory:\")\r\n        self.db.execute(\"CREATE TABLE c (id TEXT PRIMARY KEY, parent TEXT, gen INTEGER, src TEXT, status TEXT, score REAL, evaluator TEXT)\")\r\n\r\n    def add(self, p, parent, gen, status, score, evaluator=\"v1\"):\r\n        cid = sha(p.source())\r\n        try:\r\n            self.db.execute(\"INSERT INTO c VALUES (?,?,?,?,?,?,?)\", (cid, parent, gen, p.source(), status, score, evaluator))\r\n            return cid, True\r\n        except sqlite3.IntegrityError:\r\n            return cid, False\r\n\r\n    def lineage(self, cid):\r\n        out = []\r\n        while cid:\r\n            row = self.db.execute(\"SELECT id, parent, gen, src, score FROM c WHERE id=?\", (cid,)).fetchone()\r\n            out.append(row)\r\n            cid = row[1]\r\n        return out[::-1]\r\n\r\n\r\ndef staged(p):\r\n    if not all(isinstance(v, int) and not isinstance(v, bool) and abs(v) <= 100 for v in (p.a, p.b, p.c)):\r\n        return \"INVALID\", None\r\n    e = mse(p)\r\n    return (\"PASS\", e) if e == 0 else (\"INCORRECT\", e)"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "ae_3.py",
    "headingEn": "main(): experiments",
    "headingKn": "main(): ಪ್ರಯೋಗಗಳು",
    "descEn": "main() fills a database and prints a lineage, runs the staged evaluator, tallies stop reasons over 20 seeds, times parallel against sequential evaluation, runs a child process that reads a file, and applies a deployment gate.",
    "descKn": "main() ಡೇಟಾಬೇಸ್ ತುಂಬಿ ವಂಶಾವಳಿ ಮುದ್ರಿಸಿ, ಹಂತಹಂತದ ಮೌಲ್ಯಮಾಪಕ ಓಡಿಸಿ, 20 seeds ಮೇಲೆ ನಿಲುಗಡೆ ಕಾರಣ ಎಣಿಸಿ, ಸಮಾನಾಂತರ ಮತ್ತು ಅನುಕ್ರಮ ಮೌಲ್ಯಮಾಪನ ಸಮಯ ಅಳೆದು, ಫೈಲ್ ಓದುವ child process ಓಡಿಸಿ ಮತ್ತು deployment gate ಅನ್ವಯಿಸುತ್ತದೆ.",
    "code": "def main():\r\n    section(\"1. Genuinely running: a SQLite program database with lineage and duplicate detection\")\r\n    db = ProgramDB()\r\n    rng = random.Random(5)\r\n    cur, cid = Program(0, 1, 0), None\r\n    cid, _ = db.add(cur, None, 0, \"evaluated\", mse(cur))\r\n    dup = 0\r\n    for g in range(1, 60):\r\n        v = [cur.a, cur.b, cur.c]\r\n        v[rng.randrange(3)] += rng.choice([-2, -1, 1, 2])\r\n        child = Program(*v)\r\n        s = mse(child)\r\n        new_id, fresh = db.add(child, cid, g, \"evaluated\", s)\r\n        dup += 0 if fresh else 1\r\n        if s < mse(cur):\r\n            cur, cid = child, new_id\r\n    print(\"rows:\", db.db.execute(\"SELECT COUNT(*) FROM c\").fetchone()[0], \"| duplicates refused:\", dup, \"| best:\", cur.source(), \"| MSE:\", mse(cur))\r\n    for row in db.lineage(cid):\r\n        print(\"  lineage\", row[2], row[3], \"score\", row[4])\r\n    print(\"every stored program has a content-hash id, a parent and a generation, and the same source text was refused the second time it appeared; the lineage is the chain of parents that led to the current best\")\r\n\r\n    section(\"2. Genuinely running: a staged evaluator separates invalid, incorrect and passing\")\r\n    for p in (Program(1000, 1, 0), Program(0, 1, 0), Program(1, 3, 2)):\r\n        print(f\"{p.source():28} -> {staged(p)}\")\r\n    print(\"a candidate outside the allowed coefficient range never reaches scoring, a wrong one gets its error and the exact one passes; keeping the stages apart tells you why a candidate was rejected\")\r\n\r\n    section(\"3. Genuinely running: a search budget with stagnation stopping\")\r\n    def run(seed, max_evals, stag):\r\n        r = random.Random(seed)\r\n        best, bs, last, n = Program(0, 1, 0), mse(Program(0, 1, 0)), 0, 0\r\n        while n < max_evals:\r\n            v = [best.a, best.b, best.c]\r\n            v[r.randrange(3)] += r.choice([-1, 1])\r\n            c = Program(*v)\r\n            n += 1\r\n            s = mse(c)\r\n            if s < bs:\r\n                best, bs, last = c, s, n\r\n            if bs == 0:\r\n                return n, \"target reached\", bs\r\n            if n - last >= stag:\r\n                return n, \"stagnation\", bs\r\n        return n, \"evaluation budget\", bs\r\n    tally = {}\r\n    for seed in range(1, 21):\r\n        n, why, bs = run(seed, 300, 6)\r\n        tally[why] = tally.get(why, 0) + 1\r\n        if seed <= 4:\r\n            print(f\"seed {seed}: stopped after {n:3} evaluations because of {why!r}, best MSE {bs}\")\r\n    print(\"over 20 seeds with a stagnation window of 6:\", tally)\r\n    n2 = {}\r\n    for seed in range(1, 21):\r\n        n, why, bs = run(seed, 300, 40)\r\n        n2[why] = n2.get(why, 0) + 1\r\n    print(\"over the same 20 seeds with a window of 40:\", n2)\r\n    print(\"the counts above are how often each stop reason occurred; a short stagnation window ended runs before the target was found, and a longer one let more of them finish, so the window is a choice with a cost, and the seeds and limits are invented\")\r\n\r\n    section(\"4. Genuinely measuring: parallel versus sequential evaluation of tiny jobs\")\r\n    progs = [Program(rng.randint(-5, 5), rng.randint(-5, 5), rng.randint(-5, 5)) for _ in range(400)]\r\n    t0 = time.perf_counter()\r\n    seq = [pool_eval(p) for p in progs]\r\n    t_seq = time.perf_counter() - t0\r\n    t0 = time.perf_counter()\r\n    with ProcessPoolExecutor(max_workers=4) as ex:\r\n        par = list(ex.map(pool_eval, progs))\r\n    t_par = time.perf_counter() - t0\r\n    print(\"same results from both:\", [round(e, 6) for _, e in seq] == [round(e, 6) for _, e in par], \"| parallel slower than sequential on this machine:\", t_par > t_seq)\r\n    print(\"each evaluation is a few microseconds of arithmetic, so starting processes and sending objects between them costs more than the work; parallelism pays when each evaluation takes long enough to dwarf that overhead, and the timings are single runs that were not repeated\")\r\n\r\n    section(\"5. Genuinely running: a child process is not a sandbox\")\r\n    with tempfile.TemporaryDirectory() as d:\r\n        secret = Path(d) / \"made_up_secret.txt\"\r\n        secret.write_text(\"made-up-secret-value\", encoding=\"utf-8\")\r\n        script = Path(d) / \"candidate.py\"\r\n        script.write_text(f\"print(open(r'{secret}').read())\", encoding=\"utf-8\")\r\n        out = subprocess.run([sys.executable, \"-I\", str(script)], capture_output=True, text=True, timeout=5)\r\n        print(\"child with -I and a timeout read the file it was never given:\", out.stdout.strip())\r\n        loop = Path(d) / \"loop.py\"\r\n        loop.write_text(\"while True: pass\", encoding=\"utf-8\")\r\n        try:\r\n            subprocess.run([sys.executable, str(loop)], timeout=1)\r\n            print(\"loop finished\")\r\n        except subprocess.TimeoutExpired:\r\n            print(\"an infinite loop was stopped by the timeout after 1 second\")\r\n    print(\"isolated mode and a timeout stop a runaway loop and do nothing about file access, because the child runs with the same operating-system permissions as its parent; real isolation has to be enforced outside Python with a container or a virtual machine, and this lab only shows the gap\")\r\n\r\n    section(\"6. Genuinely running: a deployment gate and an evidence report\")\r\n    def gate(ev):\r\n        failed = [k for k, v in ev.items() if not v]\r\n        return {\"approved\": not failed, \"failed_checks\": failed}\r\n    ev = dict(correctness=True, security=True, performance=True, independent_review=True, human_approval=False, rollback_ready=True)\r\n    print(gate(ev))\r\n    report = {\"candidate\": sha(cur.source()), \"training_mse\": mse(cur), \"held_out_mse\": mse(cur, [-30, -20, 20, 40]), \"gate\": gate(ev)}\r\n    print(json.dumps(report, sort_keys=True))\r\n    print(\"a candidate with a perfect score was still not approved because a human approval was missing, and in this lab approval is a boolean field, which a real system must replace with an authenticated decision the candidate cannot set; the report is printed and not written to a file\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: a SQLite program database with lineage and duplicate detection ---\nrows: 22 | duplicates refused: 38 | best: 1*x*x + 3*x + 2 | MSE: 0.0\n  lineage 0 0*x*x + 1*x + 0 score 2710.0\n  lineage 1 0*x*x + 1*x + 1 score 2633.6666666666665\n  lineage 2 0*x*x + 1*x + 2 score 2559.3333333333335\n  lineage 7 0*x*x + 3*x + 2 score 2412.6666666666665\n  lineage 24 1*x*x + 3*x + 2 score 0.0\nevery stored program has a content-hash id, a parent and a generation, and the same source text was refused the second time it appeared; the lineage is the chain of parents that led to the current best\n\n--- 2. Genuinely running: a staged evaluator separates invalid, incorrect and passing ---\n1000*x*x + 1*x + 0           -> ('INVALID', None)\n0*x*x + 1*x + 0              -> ('INCORRECT', 2710.0)\n1*x*x + 3*x + 2              -> ('PASS', 0.0)\na candidate outside the allowed coefficient range never reaches scoring, a wrong one gets its error and the exact one passes; keeping the stages apart tells you why a candidate was rejected\n\n--- 3. Genuinely running: a search budget with stagnation stopping ---\nseed 1: stopped after  15 evaluations because of 'stagnation', best MSE 2487.0\nseed 2: stopped after  12 evaluations because of 'target reached', best MSE 0.0\nseed 3: stopped after  11 evaluations because of 'target reached', best MSE 0.0\nseed 4: stopped after  14 evaluations because of 'stagnation', best MSE 146.66666666666666\nover 20 seeds with a stagnation window of 6: {'stagnation': 8, 'target reached': 12}\nover the same 20 seeds with a window of 40: {'target reached': 20}\nthe counts above are how often each stop reason occurred; a short stagnation window ended runs before the target was found, and a longer one let more of them finish, so the window is a choice with a cost, and the seeds and limits are invented\n\n--- 4. Genuinely measuring: parallel versus sequential evaluation of tiny jobs ---\nsame results from both: True | parallel slower than sequential on this machine: True\neach evaluation is a few microseconds of arithmetic, so starting processes and sending objects between them costs more than the work; parallelism pays when each evaluation takes long enough to dwarf that overhead, and the timings are single runs that were not repeated\n\n--- 5. Genuinely running: a child process is not a sandbox ---\nchild with -I and a timeout read the file it was never given: made-up-secret-value\nan infinite loop was stopped by the timeout after 1 second\nisolated mode and a timeout stop a runaway loop and do nothing about file access, because the child runs with the same operating-system permissions as its parent; real isolation has to be enforced outside Python with a container or a virtual machine, and this lab only shows the gap\n\n--- 6. Genuinely running: a deployment gate and an evidence report ---\n{'approved': False, 'failed_checks': ['human_approval']}\n{\"candidate\": \"78068e56b7b6\", \"gate\": {\"approved\": false, \"failed_checks\": [\"human_approval\"]}, \"held_out_mse\": 0.0, \"training_mse\": 0.0}\na candidate with a perfect score was still not approved because a human approval was missing, and in this lab approval is a boolean field, which a real system must replace with an authenticated decision the candidate cannot set; the report is printed and not written to a file"
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Reading the Verified Output",
    "textKn": "ಪರಿಶೀಲಿತ Output ಓದುವುದು",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: A Lineage, Three Statuses and Two Stop Rules",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ವಂಶಾವಳಿ, ಮೂರು ಸ್ಥಿತಿಗಳು ಮತ್ತು ಎರಡು ನಿಲುಗಡೆ ನಿಯಮಗಳು",
    "bodyEn": "Section 1: after 59 mutations the database held 22 rows and refused 38 duplicates, and the lineage of the best program ran through generations 0, 1, 2, 7 and 24. Section 2: the out-of-range program was INVALID, the seed was INCORRECT at 2710.0 and the exact program was PASS. Section 3: with a stagnation window of 6, 8 of 20 seeds stopped on stagnation and 12 reached the target; with a window of 40 all 20 reached it.",
    "bodyKn": "ವಿಭಾಗ 1: 59 ಮ್ಯುಟೇಶನ್ ನಂತರ ಡೇಟಾಬೇಸ್ 22 ಸಾಲು ಹೊಂದಿ 38 ನಕಲು ನಿರಾಕರಿಸಿತು, ಮತ್ತು ಅತ್ಯುತ್ತಮ ಪ್ರೋಗ್ರಾಂನ ವಂಶಾವಳಿ ಜನರೇಶನ್ 0, 1, 2, 7 ಮತ್ತು 24 ಮೂಲಕ ಸಾಗಿತು. ವಿಭಾಗ 2: ವ್ಯಾಪ್ತಿ ಹೊರಗಿನ ಪ್ರೋಗ್ರಾಂ INVALID, seed 2710.0 ನಲ್ಲಿ INCORRECT ಮತ್ತು ನಿಖರ ಪ್ರೋಗ್ರಾಂ PASS. ವಿಭಾಗ 3: stagnation ಕಿಟಕಿ 6 ರೊಂದಿಗೆ 20 seeds ರಲ್ಲಿ 8 stagnation ಮೇಲೆ ನಿಂತವು ಮತ್ತು 12 ಗುರಿ ತಲುಪಿದವು; ಕಿಟಕಿ 40 ರೊಂದಿಗೆ ಎಲ್ಲಾ 20 ತಲುಪಿದವು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Parallel Overhead, a Child That Is Not Sandboxed and an Unapproved Winner",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಸಮಾನಾಂತರ ಹೆಚ್ಚುವರಿ ಸಮಯ, Sandbox ಅಲ್ಲದ Child ಮತ್ತು ಅನುಮೋದಿಸದ ವಿಜೇತ",
    "bodyEn": "Section 4: four worker processes returned the same scores as sequential evaluation but were slower on 400 tiny evaluations in this single timing. Section 5: a child started with -I and a 5-second timeout read a made-up secret file it was never given, while an infinite loop was stopped after 1 second. Section 6: a candidate with training and held-out MSE 0.0 was not approved because the human_approval check failed.",
    "bodyKn": "ವಿಭಾಗ 4: ನಾಲ್ಕು worker ಪ್ರಕ್ರಿಯೆಗಳು ಅನುಕ್ರಮ ಮೌಲ್ಯಮಾಪನದಂತೆಯೇ ಅಂಕ ಮರಳಿಸಿದವು ಆದರೆ ಈ ಒಂದು ಸಮಯ ಅಳತೆಯಲ್ಲಿ 400 ಸಣ್ಣ ಮೌಲ್ಯಮಾಪನಗಳಲ್ಲಿ ನಿಧಾನವಾಗಿದ್ದವು. ವಿಭಾಗ 5: -I ಮತ್ತು 5-ಸೆಕೆಂಡ್ timeout ಜೊತೆ ಆರಂಭಿಸಿದ child ತನಗೆ ಎಂದೂ ನೀಡದ ಕಲ್ಪಿತ ರಹಸ್ಯ ಫೈಲ್ ಓದಿತು, ಅನಂತ ಲೂಪ್ 1 ಸೆಕೆಂಡ್ ನಂತರ ನಿಲ್ಲಿಸಲ್ಪಟ್ಟಿತು. ವಿಭಾಗ 6: training ಮತ್ತು held-out MSE 0.0 ಇರುವ ಅಭ್ಯರ್ಥಿ human_approval ಪರಿಶೀಲನೆ ವಿಫಲವಾದ ಕಾರಣ ಅನುಮೋದನೆ ಪಡೆಯಲಿಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A search result needs provenance to be trusted, isolation that is enforced outside the code, and a decision that is not the candidate's own.",
    "bodyKn": "ಹುಡುಕಾಟ ಫಲಿತಾಂಶ ನಂಬಲು ಮೂಲ ದಾಖಲೆ, ಕೋಡ್ ಹೊರಗೆ ಜಾರಿಗೊಳಿಸಿದ ಪ್ರತ್ಯೇಕತೆ ಮತ್ತು ಅಭ್ಯರ್ಥಿಯದೇ ಅಲ್ಲದ ನಿರ್ಧಾರ ಬೇಕು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"running candidates in a subprocess with a timeout makes them safe.\" The child read a file it was never given.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"timeout ಇರುವ subprocess ನಲ್ಲಿ ಅಭ್ಯರ್ಥಿಗಳನ್ನು ಓಡಿಸುವುದು ಅವನ್ನು ಸುರಕ್ಷಿತಗೊಳಿಸುತ್ತದೆ.\" child ಎಂದೂ ನೀಡದ ಫೈಲ್ ಓದಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Provenance: where a candidate came from. Stagnation: no improvement for a set number of evaluations. Sandbox: isolation enforced outside the program. Deployment gate: all required checks, including approval.",
    "bodyKn": "Provenance: ಅಭ್ಯರ್ಥಿ ಎಲ್ಲಿಂದ ಬಂತು. Stagnation: ನಿಗದಿತ ಮೌಲ್ಯಮಾಪನಗಳ ಸಂಖ್ಯೆ ಸುಧಾರಣೆ ಇಲ್ಲ. Sandbox: ಪ್ರೋಗ್ರಾಂ ಹೊರಗೆ ಜಾರಿಗೊಳಿಸಿದ ಪ್ರತ್ಯೇಕತೆ. Deployment gate: ಅನುಮೋದನೆ ಸೇರಿ ಎಲ್ಲಾ ಅಗತ್ಯ ಪರಿಶೀಲನೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) Every candidate has a hash, a parent and a generation. 2) Statuses say why a candidate failed. 3) A stagnation window ended 8 of 20 runs early. 4) Tiny jobs were slower in parallel. 5) A perfect candidate was still blocked without approval.",
    "bodyKn": "1) ಪ್ರತಿ ಅಭ್ಯರ್ಥಿಗೆ hash, ಪೋಷಕ ಮತ್ತು ಜನರೇಶನ್ ಇದೆ. 2) ಸ್ಥಿತಿಗಳು ಅಭ್ಯರ್ಥಿ ಏಕೆ ವಿಫಲವಾಯಿತು ಹೇಳುತ್ತವೆ. 3) stagnation ಕಿಟಕಿ 20 ರಲ್ಲಿ 8 ಓಟಗಳನ್ನು ಬೇಗ ಮುಗಿಸಿತು. 4) ಸಣ್ಣ ಕೆಲಸಗಳು ಸಮಾನಾಂತರದಲ್ಲಿ ನಿಧಾನ. 5) ಪರಿಪೂರ್ಣ ಅಭ್ಯರ್ಥಿಯನ್ನೂ ಅನುಮೋದನೆ ಇಲ್ಲದೆ ತಡೆಯಲಾಯಿತು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "How many of 20 seeds stopped on stagnation with a window of 6?",
      "qKn": "ಕಿಟಕಿ 6 ರೊಂದಿಗೆ 20 seeds ರಲ್ಲಿ ಎಷ್ಟು stagnation ಮೇಲೆ ನಿಂತವು?",
      "opts": [
       "8",
       "12",
       "0",
       "20"
      ],
      "optsKn": [
       "8",
       "12",
       "0",
       "20"
      ],
      "correct": 0
     },
     {
      "q": "What did the child process with -I and a timeout do?",
      "qKn": "-I ಮತ್ತು timeout ಇರುವ child process ಏನು ಮಾಡಿತು?",
      "opts": [
       "Read a file it was never given",
       "Was blocked from all files",
       "Crashed",
       "Signed the file"
      ],
      "optsKn": [
       "ತನಗೆ ನೀಡದ ಫೈಲ್ ಓದಿತು",
       "ಎಲ್ಲಾ ಫೈಲ್‌ಗಳಿಂದ ತಡೆಯಲ್ಪಟ್ಟಿತು",
       "ಕ್ರ್ಯಾಶ್ ಆಯಿತು",
       "ಫೈಲ್‌ಗೆ ಸಹಿ ಮಾಡಿತು"
      ],
      "correct": 0
     },
     {
      "q": "Why was the perfect candidate not approved?",
      "qKn": "ಪರಿಪೂರ್ಣ ಅಭ್ಯರ್ಥಿ ಏಕೆ ಅನುಮೋದನೆ ಪಡೆಯಲಿಲ್ಲ?",
      "opts": [
       "human_approval was missing",
       "Its MSE was high",
       "It was invalid",
       "It was a duplicate"
      ],
      "optsKn": [
       "human_approval ಕಾಣೆಯಾಗಿತ್ತು",
       "ಅದರ MSE ಹೆಚ್ಚು",
       "ಅದು ಅಮಾನ್ಯ",
       "ಅದು ನಕಲು"
      ],
      "correct": 0
     },
     {
      "q": "Why were four worker processes slower on 400 tiny evaluations?",
      "qKn": "400 ಸಣ್ಣ ಮೌಲ್ಯಮಾಪನಗಳಲ್ಲಿ ನಾಲ್ಕು worker ಪ್ರಕ್ರಿಯೆಗಳು ಏಕೆ ನಿಧಾನವಾದವು?",
      "opts": [
       "Process startup and transfer cost more than the work",
       "The results were wrong",
       "The database was locked",
       "The gate blocked them"
      ],
      "optsKn": [
       "ಪ್ರಕ್ರಿಯೆ ಆರಂಭ ಮತ್ತು ವರ್ಗಾವಣೆ ಕೆಲಸಕ್ಕಿಂತ ಹೆಚ್ಚು ವೆಚ್ಚ",
       "ಫಲಿತಾಂಶಗಳು ತಪ್ಪಾಗಿದ್ದವು",
       "ಡೇಟಾಬೇಸ್ ಲಾಕ್ ಆಗಿತ್ತು",
       "gate ಅವನ್ನು ತಡೆಯಿತು"
      ],
      "correct": 0
     },
     {
      "q": "How many rows did the database hold after 59 mutations?",
      "qKn": "59 ಮ್ಯುಟೇಶನ್ ನಂತರ ಡೇಟಾಬೇಸ್‌ನಲ್ಲಿ ಎಷ್ಟು ಸಾಲು ಇದ್ದವು?",
      "opts": [
       "22",
       "59",
       "38",
       "5"
      ],
      "optsKn": [
       "22",
       "59",
       "38",
       "5"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
