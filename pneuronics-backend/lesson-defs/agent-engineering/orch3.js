module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6266020ed05b32155f",
 "order": 2,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Orchestration Patterns: Supervisor, Swarm, Hierarchical (Part 3 of 3) — Hierarchical and Debate",
 "titleKn": "ಆರ್ಕೆಸ್ಟ್ರೇಶನ್ ಮಾದರಿಗಳು: Supervisor, Swarm, Hierarchical (ಭಾಗ 3 / 3) — Hierarchical ಮತ್ತು Debate",
 "desc": "Build hierarchical routing, expose a fake hierarchy, simulate debate under an assumed accuracy and count calls for all four orchestration patterns on the same tasks.",
 "descKn": "Hierarchical routing ನಿರ್ಮಿಸಿ, ನಕಲಿ hierarchy ಬಹಿರಂಗಪಡಿಸಿ, ಊಹಿಸಿದ ನಿಖರತೆಯಲ್ಲಿ debate ಅನುಕರಿಸಿ ಮತ್ತು ಅದೇ ಕಾರ್ಯಗಳ ಮೇಲೆ ನಾಲ್ಕೂ ಆರ್ಕೆಸ್ಟ್ರೇಶನ್ ಮಾದರಿಗಳ ಕರೆಗಳನ್ನು ಎಣಿಸಿ.",
 "objectives": [
  "Explain hierarchy as recursive supervision.",
  "Spot a fake hierarchy.",
  "Simulate debate with proposers and a judge.",
  "Count calls per pattern.",
  "Compose patterns by risk."
 ],
 "objectivesKn": [
  "Hierarchy ಅನ್ನು ಪುನರಾವರ್ತಿತ ಮೇಲ್ವಿಚಾರಣೆ ಎಂದು ವಿವರಿಸಿ.",
  "ನಕಲಿ hierarchy ಗುರುತಿಸಿ.",
  "Proposers ಮತ್ತು judge ಜೊತೆ debate ಅನುಕರಿಸಿ.",
  "ಪ್ರತಿ ಮಾದರಿಯ ಕರೆಗಳನ್ನು ಎಣಿಸಿ.",
  "ಅಪಾಯದ ಆಧಾರದ ಮೇಲೆ ಮಾದರಿಗಳನ್ನು ಸಂಯೋಜಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Orchestration Patterns: Supervisor, Swarm, Hierarchical (Part 3 of 3)",
    "textKn": "ಆರ್ಕೆಸ್ಟ್ರೇಶನ್ ಮಾದರಿಗಳು: Supervisor, Swarm, Hierarchical (ಭಾಗ 3 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 3 of 3: hierarchical routing, a fake hierarchy, debate with proposers and a judge, and a counted comparison of the four patterns. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind orchestration patterns (supervisor-worker, swarm, hierarchical and debate), not the real software, and every agent is a scripted keyword function or a seeded simulation with an assumed accuracy, so no language model and no real multi-agent system is measured, so no real LLM behaviour is measured. The pasted part was cut off by a size limit before it finished, so its later sections are rebuilt from its own outline and the neighbouring parts. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 3ನೆಯದು: hierarchical routing, ನಕಲಿ hierarchy, proposers ಮತ್ತು judge ಇರುವ debate, ಮತ್ತು ನಾಲ್ಕು ಮಾದರಿಗಳ ಎಣಿಸಿದ ಹೋಲಿಕೆ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು ಆರ್ಕೆಸ್ಟ್ರೇಶನ್ ಮಾದರಿಗಳು (supervisor-worker, swarm, hierarchical ಮತ್ತು debate) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಪ್ರತಿ agent ಸ್ಕ್ರಿಪ್ಟ್ ಕೀವರ್ಡ್ ಫಂಕ್ಷನ್ ಅಥವಾ ಊಹಿಸಿದ ನಿಖರತೆಯ seeded ಅನುಕರಣೆ, ಆದ್ದರಿಂದ ಯಾವುದೇ ಭಾಷಾ ಮಾದರಿ ಮತ್ತು ನಿಜ ಬಹು-agent ವ್ಯವಸ್ಥೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಅಂಟಿಸಿದ ಭಾಗ ಮುಗಿಯುವ ಮುನ್ನ ಗಾತ್ರ ಮಿತಿಯಿಂದ ಕತ್ತರಿಸಲ್ಪಟ್ಟಿತ್ತು, ಆದ್ದರಿಂದ ಅದರ ನಂತರದ ವಿಭಾಗಗಳು ಅದರ ಸ್ವಂತ ರೂಪರೇಖೆ ಮತ್ತು ನೆರೆಯ ಭಾಗಗಳಿಂದ ಮರುನಿರ್ಮಿಸಲಾಗಿದೆ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Scaling the Hub and Buying Verification",
    "textKn": "Hub ಅನ್ನು ವಿಸ್ತರಿಸುವುದು ಮತ್ತು ಪರಿಶೀಲನೆ ಖರೀದಿಸುವುದು",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Two More Shapes",
    "headingKn": "ಇನ್ನೂ ಎರಡು ಆಕಾರಗಳು",
    "bodyEn": "A hierarchy is supervisors managing supervisors: a root picks a department and a department supervisor picks the specialist, so no single prompt lists every specialist. Debate is a different idea: several proposers answer independently and a judge decides, which spends calls on checking instead of routing. This part builds both, shows a fake hierarchy whose middle layer decides nothing, simulates debate under an assumed accuracy, and counts calls for all four patterns on the same tasks.",
    "bodyKn": "Hierarchy ಎಂದರೆ supervisors ಅನ್ನು ನಿರ್ವಹಿಸುವ supervisors: root ವಿಭಾಗ ಆರಿಸುತ್ತದೆ ಮತ್ತು ವಿಭಾಗ supervisor ತಜ್ಞನನ್ನು ಆರಿಸುತ್ತದೆ, ಆದ್ದರಿಂದ ಯಾವ ಒಂದು prompt ಕೂಡ ಪ್ರತಿ ತಜ್ಞರನ್ನು ಪಟ್ಟಿ ಮಾಡುವುದಿಲ್ಲ. Debate ಬೇರೆ ಕಲ್ಪನೆ: ಹಲವು proposers ಸ್ವತಂತ್ರವಾಗಿ ಉತ್ತರಿಸಿ judge ನಿರ್ಧರಿಸುತ್ತದೆ, ಅದು routing ಬದಲು ಪರಿಶೀಲನೆಗೆ ಕರೆಗಳನ್ನು ಖರ್ಚು ಮಾಡುತ್ತದೆ. ಈ ಭಾಗ ಎರಡನ್ನೂ ನಿರ್ಮಿಸಿ, ಮಧ್ಯ ಪದರ ಏನನ್ನೂ ನಿರ್ಧರಿಸದ ನಕಲಿ hierarchy ತೋರಿಸಿ, ಊಹಿಸಿದ ನಿಖರತೆಯಲ್ಲಿ debate ಅನುಕರಿಸಿ, ಅದೇ ಕಾರ್ಯಗಳ ಮೇಲೆ ನಾಲ್ಕೂ ಮಾದರಿಗಳ ಕರೆಗಳನ್ನು ಎಣಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Layers and Checking",
    "headingKn": "ಪದರಗಳು ಮತ್ತು ಪರಿಶೀಲನೆ",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">Hierarchy and debate</text><rect x=\"100\" y=\"20\" width=\"100\" height=\"30\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"150\" y=\"35\" fill=\"#e2e8f0\" text-anchor=\"middle\">root</text><text x=\"150\" y=\"47\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">department</text><rect x=\"30\" y=\"80\" width=\"100\" height=\"30\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"80\" y=\"95\" fill=\"#e2e8f0\" text-anchor=\"middle\">billing lead</text><text x=\"80\" y=\"107\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">specialist</text><rect x=\"170\" y=\"80\" width=\"100\" height=\"30\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"220\" y=\"95\" fill=\"#e2e8f0\" text-anchor=\"middle\">tech lead</text><text x=\"220\" y=\"107\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">specialist</text><rect x=\"80\" y=\"135\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"150\" fill=\"#e2e8f0\" text-anchor=\"middle\">debate</text><text x=\"150\" y=\"162\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">proposers, critics, judge</text><path d=\"M150,50 L80,80 M150,50 L220,80\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">layers cut prompts, debate buys checking</text></svg>",
    "captionEn": "Layers shrink prompts; debate buys checking at a price.",
    "captionKn": "ಪದರಗಳು prompts ಕುಗ್ಗಿಸುತ್ತವೆ; debate ಬೆಲೆಗೆ ಪರಿಶೀಲನೆ ಖರೀದಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Hierarchy and debate",
    "headingKn": "Hierarchy ಮತ್ತು debate",
    "headers": [
     "Pattern",
     "What it solves",
     "What it costs"
    ],
    "rows": [
     [
      "Hierarchical",
      "one supervisor prompt too large",
      "an extra call per layer"
     ],
     [
      "Fake hierarchy",
      "nothing: a layer that decides nothing",
      "an extra call and misroutes"
     ],
     [
      "Debate",
      "a single answer may be wrong",
      "proposers, critiques and a judge"
     ],
     [
      "Composition",
      "cheap routing then targeted checking",
      "the sum of both"
     ]
    ]
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Building and Testing the Pattern",
    "textKn": "ಮಾದರಿ ನಿರ್ಮಿಸಿ ಪರೀಕ್ಷಿಸುವುದು",
    "level": "H2"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "orch_3.py",
    "headingEn": "Flat, hierarchical and fake-hierarchy routers, and debate",
    "headingKn": "Flat, hierarchical ಮತ್ತು ನಕಲಿ-hierarchy routers, ಮತ್ತು debate",
    "descEn": "flat_supervisor scans every specialist. hierarchical asks a root for a department and then a department supervisor for the specialist, counting one call per layer. fake_hierarchy always forwards to a department's first specialist. debate simulates independent proposers with an assumed accuracy, one critique call each and a judge that takes the plurality.",
    "descKn": "flat_supervisor ಪ್ರತಿ ತಜ್ಞನನ್ನು ಸ್ಕ್ಯಾನ್ ಮಾಡುತ್ತದೆ. hierarchical root ಅನ್ನು ವಿಭಾಗಕ್ಕೆ ಮತ್ತು ನಂತರ ವಿಭಾಗ supervisor ಅನ್ನು ತಜ್ಞನಿಗೆ ಕೇಳುತ್ತದೆ, ಪ್ರತಿ ಪದರಕ್ಕೆ ಒಂದು ಕರೆ ಎಣಿಸುತ್ತದೆ. fake_hierarchy ಯಾವಾಗಲೂ ವಿಭಾಗದ ಮೊದಲ ತಜ್ಞನಿಗೆ ಫಾರ್ವರ್ಡ್ ಮಾಡುತ್ತದೆ. debate ಊಹಿಸಿದ ನಿಖರತೆಯ ಸ್ವತಂತ್ರ proposers, ತಲಾ ಒಂದು critique ಕರೆ ಮತ್ತು plurality ತೆಗೆದುಕೊಳ್ಳುವ judge ಅನುಕರಿಸುತ್ತದೆ.",
    "code": "@dataclass\nclass Result:\n    specialist: str\n    model_calls: int\n    path: list\n\n\ndef flat_supervisor(text):\n    calls, t = 1, text.lower()\n    for dept, specs in DEPARTMENTS.items():\n        for spec, words in specs.items():\n            if any(w in t for w in words):\n                return Result(spec, calls, [\"supervisor\", spec])\n    return Result(\"escalate\", calls, [\"supervisor\", \"escalate\"])\n\n\ndef root_supervisor(text):\n    t = text.lower()\n    for dept, words in DEPT_WORDS.items():\n        if any(w in t for w in words):\n            return dept\n    return None\n\n\ndef dept_supervisor(dept, text):\n    t = text.lower()\n    for spec, words in DEPARTMENTS[dept].items():\n        if any(w in t for w in words):\n            return spec\n    return None\n\n\ndef hierarchical(text):\n    calls = 1\n    dept = root_supervisor(text)\n    if dept is None:\n        return Result(\"escalate\", calls, [\"root\", \"escalate\"])\n    calls += 1\n    spec = dept_supervisor(dept, text)\n    if spec is None:\n        return Result(\"escalate\", calls, [\"root\", dept + \"_lead\", \"escalate\"])\n    return Result(spec, calls, [\"root\", dept + \"_lead\", spec])\n\n\ndef fake_hierarchy(text):\n    \"\"\"A department layer that makes no local decision: it always forwards to the department's first specialist.\"\"\"\n    calls = 1\n    dept = root_supervisor(text)\n    if dept is None:\n        return Result(\"escalate\", calls, [\"root\", \"escalate\"])\n    calls += 1\n    spec = next(iter(DEPARTMENTS[dept]))\n    return Result(spec, calls, [\"root\", dept + \"_lead\", spec])\n\n\ndef debate(truth, rng, n_proposers=3, p_correct=0.7, early_exit=False, labels=(\"A\", \"B\", \"C\", \"D\")):\n    \"\"\"Proposers answer independently; a judge takes the plurality. p_correct is ASSUMED.\"\"\"\n    calls, votes = 0, []\n    wrong = [x for x in labels if x != truth]\n    for _ in range(n_proposers):\n        calls += 1\n        votes.append(truth if rng.random() < p_correct else rng.choice(wrong))\n        if early_exit and len(votes) >= 2 and len(set(votes)) == 1:\n            break\n    if not (early_exit and len(set(votes)) == 1 and len(votes) >= 2):\n        calls += n_proposers  # one critique call per proposer\n    calls += 1  # judge\n    top = max(set(votes), key=lambda v: (votes.count(v), v == truth))\n    return top, calls"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "orch_3.py",
    "headingEn": "main(): six experiments",
    "headingKn": "main(): ಆರು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() compares flat and hierarchical routing on sixteen tasks, estimates prompt size, exposes the fake hierarchy, simulates debate at 3 and 5 proposers with and without early exit, compares the four patterns and composes two of them.",
    "descKn": "main() ಹದಿನಾರು ಕಾರ್ಯಗಳ ಮೇಲೆ flat ಮತ್ತು hierarchical routing ಹೋಲಿಸಿ, prompt ಗಾತ್ರ ಅಂದಾಜಿಸಿ, ನಕಲಿ hierarchy ಬಹಿರಂಗಪಡಿಸಿ, 3 ಮತ್ತು 5 proposers ನಲ್ಲಿ early exit ಜೊತೆ ಮತ್ತು ಇಲ್ಲದೆ debate ಅನುಕರಿಸಿ, ನಾಲ್ಕು ಮಾದರಿಗಳನ್ನು ಹೋಲಿಸಿ ಎರಡನ್ನು ಸಂಯೋಜಿಸುತ್ತದೆ.",
    "code": "def section(t):\n    print(f\"\\n--- {t} ---\")\n\n\ndef main():\n    section(\"1. Genuinely checking: flat versus hierarchical routing on 16 hand-written tasks\")\n    flat_ok = hier_ok = 0\n    flat_calls = hier_calls = 0\n    for text, want in TASKS:\n        f, h = flat_supervisor(text), hierarchical(text)\n        flat_ok += f.specialist == want; hier_ok += h.specialist == want\n        flat_calls += f.model_calls; hier_calls += h.model_calls\n        mark = \"\" if f.specialist == h.specialist == want else \"   <-- differs or wrong\"\n        print(f\"{text[:34]:36} want={want:9} flat={f.specialist:9} hier={h.specialist:9} path={'>'.join(h.path)}{mark}\")\n    print(f\"flat correct {flat_ok}/16 with {flat_calls} routing calls; hierarchical correct {hier_ok}/16 with {hier_calls} routing calls\")\n    print(\"both designs routed all 16 as intended, including the four vague tasks, which escalated correctly because they were written to avoid the listed words; the hierarchy used 29 routing calls against 16 because it spends a second call whenever the root finds a department (12 clear tasks plus 'Billing is confusing'), which is the latency cost of a layer\")\n\n    section(\"2. Genuinely measuring: routing prompt size per supervisor (assumed 60 words per listed specialist or department)\")\n    print(f\"{'specialists':>12} {'flat prompt words':>18} {'root prompt words':>25} {'each department prompt words':>29}\")\n    for n in (6, 24, 100, 400):\n        depts = max(1, n // 25 if n >= 100 else 3)\n        print(f\"{n:>12} {40 + 60 * n:>18} {40 + 60 * depts:>25} {40 + 60 * (n // depts):>29}\")\n    print(\"splitting a large roster into departments keeps each supervisor's prompt smaller than one flat list, at the price of one more call per request; the word counts use an assumed 60 words per entry\")\n\n    section(\"3. Genuinely checking: a fake hierarchy\")\n    wrong = 0\n    for text, want in TASKS:\n        r = fake_hierarchy(text)\n        if want != \"escalate\" and r.specialist != want:\n            wrong += 1\n            print(f\"{text[:34]:36} want={want:9} fake hierarchy sent it to {r.specialist}\")\n    print(f\"the department layer made no local decision, spent an extra call on every routed task and misrouted {wrong} task(s) that the real department supervisor routes correctly\")\n\n    section(\"4. Genuinely measuring: debate accuracy and cost (assumed per-agent accuracy 0.70, 4 labels, seed 11, 20,000 questions)\")\n    rng = random.Random(11)\n    N = 20000\n    single = sum(rng.random() < 0.7 for _ in range(N)) / N\n    print(f\"single agent correct: {single:6.1%} with 1 call\")\n    for n in (3, 5):\n        for early in (False, True):\n            ok = tot = 0\n            for _ in range(N):\n                top, c = debate(\"A\", rng, n_proposers=n, early_exit=early)\n                ok += top == \"A\"; tot += c\n            print(f\"debate with {n} proposers, early exit {early!s:5}: correct {ok / N:6.1%}, mean calls {tot / N:5.2f}\")\n    print(\"with independent errors a vote beats one agent, and it costs several times the calls (proposers, one critique each, a judge); in this simulation the critique calls never change a vote, so all of the accuracy gain comes from voting and the critique only adds cost; early exit saved calls (4.96 against 7.00 at three proposers) but at five proposers it also lowered accuracy (93.3 against 95.2); the 0.70 accuracy is assumed and real agents' errors are often correlated, which is where the gain would shrink\")\n\n    section(\"5. Genuinely measuring: all four patterns on the same 12 clear tasks (calls counted, debate accuracy simulated)\")\n    clear = [t for t in TASKS if t[1] != \"escalate\"]\n    sup_calls = sum(flat_supervisor(t).model_calls for t, _ in clear)\n    hier_calls = sum(hierarchical(t).model_calls for t, _ in clear)\n    swarm_runs = len(clear)  # entry agent hands off at most once in this scripted setup\n    rng = random.Random(5)\n    deb = [debate(w, rng, labels=(\"refund\", \"invoice\", \"bug\", \"outage\", \"quote\", \"upgrade\")) for _, w in clear]\n    print(f\"{'pattern':16} {'calls or runs for 12 tasks':>28}\")\n    print(f\"{'supervisor':16} {sup_calls:>28}\")\n    print(f\"{'swarm':16} {'12 to 24 (assumed 1-2 per task)':>28}\")\n    print(f\"{'hierarchical':16} {hier_calls:>28}\")\n    print(f\"{'debate (3)':16} {sum(c for _, c in deb):>28}  (accuracy {sum(top == w for (top, _), (_, w) in zip(deb, clear))}/12 in this one seeded run)\")\n    print(\"the units differ (model calls versus agent runs), so this is a rough shape of cost and not a benchmark; debate costs the most, and its accuracy on 12 tasks is too small a sample to compare with the others\")\n\n    section(\"6. Genuinely checking: composing patterns\")\n    t = \"Refund me for last month\"\n    h = hierarchical(t)\n    top, c = debate(h.specialist, random.Random(2), n_proposers=3, labels=(\"refund\", \"invoice\", \"bug\", \"outage\", \"quote\", \"upgrade\"))\n    print(f\"hierarchy routes to {h.specialist} in {h.model_calls} calls; a debate then double-checks the high-stakes answer ({top}) in {c} calls: total {h.model_calls + c} calls\")\n    print(\"patterns can be nested: route cheaply first and spend the extra debate calls only where a wrong answer is expensive\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely checking: flat versus hierarchical routing on 16 hand-written tasks ---\nI was charged twice                  want=refund    flat=refund    hier=refund    path=root>billing_lead>refund\nPlease send my receipt               want=invoice   flat=invoice   hier=invoice   path=root>billing_lead>invoice\nThe app has an error on login        want=bug       flat=bug       hier=bug       path=root>tech_lead>bug\nThe service is down                  want=outage    flat=outage    hier=outage    path=root>tech_lead>outage\nI want a quote for 20 seats          want=quote     flat=quote     hier=quote     path=root>sales_lead>quote\nCan I upgrade my plan                want=upgrade   flat=upgrade   hier=upgrade   path=root>sales_lead>upgrade\nRefund me for last month             want=refund    flat=refund    hier=refund    path=root>billing_lead>refund\nInvoice 55 is wrong                  want=invoice   flat=invoice   hier=invoice   path=root>billing_lead>invoice\nCheckout crash on submit             want=bug       flat=bug       hier=bug       path=root>tech_lead>bug\nOutage in region two                 want=outage    flat=outage    hier=outage    path=root>tech_lead>outage\nWhat is the price                    want=quote     flat=quote     hier=quote     path=root>sales_lead>quote\nMore seats please                    want=upgrade   flat=upgrade   hier=upgrade   path=root>sales_lead>upgrade\nCancel everything                    want=escalate  flat=escalate  hier=escalate  path=root>escalate\nHello there                          want=escalate  flat=escalate  hier=escalate  path=root>escalate\nSomething odd happened               want=escalate  flat=escalate  hier=escalate  path=root>escalate\nBilling is confusing                 want=escalate  flat=escalate  hier=escalate  path=root>billing_lead>escalate\nflat correct 16/16 with 16 routing calls; hierarchical correct 16/16 with 29 routing calls\nboth designs routed all 16 as intended, including the four vague tasks, which escalated correctly because they were written to avoid the listed words; the hierarchy used 29 routing calls against 16 because it spends a second call whenever the root finds a department (12 clear tasks plus 'Billing is confusing'), which is the latency cost of a layer\n\n--- 2. Genuinely measuring: routing prompt size per supervisor (assumed 60 words per listed specialist or department) ---\n specialists  flat prompt words         root prompt words  each department prompt words\n           6                400                       220                           160\n          24               1480                       220                           520\n         100               6040                       280                          1540\n         400              24040                      1000                          1540\nsplitting a large roster into departments keeps each supervisor's prompt smaller than one flat list, at the price of one more call per request; the word counts use an assumed 60 words per entry\n\n--- 3. Genuinely checking: a fake hierarchy ---\nPlease send my receipt               want=invoice   fake hierarchy sent it to refund\nThe service is down                  want=outage    fake hierarchy sent it to bug\nCan I upgrade my plan                want=upgrade   fake hierarchy sent it to quote\nInvoice 55 is wrong                  want=invoice   fake hierarchy sent it to refund\nOutage in region two                 want=outage    fake hierarchy sent it to bug\nMore seats please                    want=upgrade   fake hierarchy sent it to quote\nthe department layer made no local decision, spent an extra call on every routed task and misrouted 6 task(s) that the real department supervisor routes correctly\n\n--- 4. Genuinely measuring: debate accuracy and cost (assumed per-agent accuracy 0.70, 4 labels, seed 11, 20,000 questions) ---\nsingle agent correct:  70.3% with 1 call\ndebate with 3 proposers, early exit False: correct  90.9%, mean calls  7.00\ndebate with 3 proposers, early exit True : correct  91.3%, mean calls  4.96\ndebate with 5 proposers, early exit False: correct  95.2%, mean calls 11.00\ndebate with 5 proposers, early exit True : correct  93.3%, mean calls  6.91\nwith independent errors a vote beats one agent, and it costs several times the calls (proposers, one critique each, a judge); in this simulation the critique calls never change a vote, so all of the accuracy gain comes from voting and the critique only adds cost; early exit saved calls (4.96 against 7.00 at three proposers) but at five proposers it also lowered accuracy (93.3 against 95.2); the 0.70 accuracy is assumed and real agents' errors are often correlated, which is where the gain would shrink\n\n--- 5. Genuinely measuring: all four patterns on the same 12 clear tasks (calls counted, debate accuracy simulated) ---\npattern            calls or runs for 12 tasks\nsupervisor                                 12\nswarm            12 to 24 (assumed 1-2 per task)\nhierarchical                               24\ndebate (3)                                 84  (accuracy 11/12 in this one seeded run)\nthe units differ (model calls versus agent runs), so this is a rough shape of cost and not a benchmark; debate costs the most, and its accuracy on 12 tasks is too small a sample to compare with the others\n\n--- 6. Genuinely checking: composing patterns ---\nhierarchy routes to refund in 2 calls; a debate then double-checks the high-stakes answer (refund) in 7 calls: total 9 calls\npatterns can be nested: route cheaply first and spend the extra debate calls only where a wrong answer is expensive"
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
    "headingEn": "Genuinely Found: A Hierarchy Costs a Call per Layer; a Fake One Costs the Call and Loses Accuracy",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Hierarchy ಪ್ರತಿ ಪದರಕ್ಕೆ ಒಂದು ಕರೆ ಖರ್ಚು ಮಾಡುತ್ತದೆ; ನಕಲಿ ಒಂದು ಕರೆ ಖರ್ಚು ಮಾಡಿ ನಿಖರತೆ ಕಳೆದುಕೊಳ್ಳುತ್ತದೆ",
    "bodyEn": "Section 1: on sixteen hand-written tasks both the flat supervisor and the hierarchy routed 16 of 16 as intended (the four vague tasks escalated correctly), but the hierarchy used 29 routing calls against 16, because it spends a second call whenever the root finds a department. Section 2 (assumed 60 words per entry): a flat prompt grows from 400 words at 6 specialists to 24,040 at 400, while the root and department prompts stay at 1,000 and 1,540 words at 400. Section 3: a department layer that always forwards to the first specialist misrouted 6 tasks that the real department supervisor routes correctly.",
    "bodyKn": "ವಿಭಾಗ 1: ಹದಿನಾರು ಕೈಬರಹ ಕಾರ್ಯಗಳ ಮೇಲೆ flat supervisor ಮತ್ತು hierarchy ಎರಡೂ 16 ರಲ್ಲಿ 16 ಉದ್ದೇಶಿತವಾಗಿ routed ಮಾಡಿದವು (ನಾಲ್ಕು ಅಸ್ಪಷ್ಟ ಕಾರ್ಯಗಳು ಸರಿಯಾಗಿ ಎಸ್ಕಲೇಟ್ ಆದವು), ಆದರೆ root ವಿಭಾಗ ಕಂಡುಕೊಂಡಾಗಲೆಲ್ಲ ಎರಡನೇ ಕರೆ ಖರ್ಚು ಮಾಡುವುದರಿಂದ hierarchy 16 ಬದಲು 29 routing ಕರೆಗಳನ್ನು ಬಳಸಿತು. ವಿಭಾಗ 2 (ಪ್ರತಿ ನಮೂದಿಗೆ 60 ಪದ ಊಹೆ): flat prompt 6 ತಜ್ಞರಿಗೆ 400 ಪದಗಳಿಂದ 400 ಕ್ಕೆ 24,040 ಕ್ಕೆ ಬೆಳೆಯುತ್ತದೆ, root ಮತ್ತು ವಿಭಾಗ prompts 400 ರಲ್ಲಿ 1,000 ಮತ್ತು 1,540 ಪದಗಳಲ್ಲಿ ಉಳಿಯುತ್ತವೆ. ವಿಭಾಗ 3: ಯಾವಾಗಲೂ ಮೊದಲ ತಜ್ಞನಿಗೆ ಫಾರ್ವರ್ಡ್ ಮಾಡುವ ವಿಭಾಗ ಪದರ, ನಿಜ ವಿಭಾಗ supervisor ಸರಿಯಾಗಿ routed ಮಾಡುವ 6 ಕಾರ್ಯಗಳನ್ನು ತಪ್ಪಾಗಿ routed ಮಾಡಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Debate Beats One Agent Under Independent Errors and Costs Several Times the Calls",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಸ್ವತಂತ್ರ ದೋಷಗಳಲ್ಲಿ Debate ಒಬ್ಬ agent ಅನ್ನು ಮೀರುತ್ತದೆ ಮತ್ತು ಹಲವು ಪಟ್ಟು ಕರೆಗಳು ಖರ್ಚಾಗುತ್ತವೆ",
    "bodyEn": "Section 4 (assumed per-agent accuracy 0.70, four labels, seed 11, 20,000 questions): a single agent was right 70.3 percent of the time with 1 call; debate with 3 proposers reached 90.9 percent with 7.00 calls, or 91.3 percent with 4.96 calls under early exit; with 5 proposers it reached 95.2 percent with 11.00 calls, or 93.3 percent with 6.91 calls under early exit. In this simulation the critique calls never change a vote, so all of the gain comes from voting. Section 5: on twelve clear tasks the call counts were supervisor 12, hierarchical 24 and debate 84, with swarm 12 to 24 as assumed from the previous part; the units differ, so this is a rough shape, not a benchmark. Section 6: a hierarchy plus a debate on one high-stakes task cost 2 + 7 = 9 calls.",
    "bodyKn": "ವಿಭಾಗ 4 (ಊಹಿಸಿದ ಪ್ರತಿ-agent ನಿಖರತೆ 0.70, ನಾಲ್ಕು ಲೇಬಲ್, seed 11, 20,000 ಪ್ರಶ್ನೆಗಳು): ಒಬ್ಬ agent 1 ಕರೆಯೊಂದಿಗೆ 70.3 ಶೇಕಡಾ ಸರಿ; 3 proposers ಜೊತೆ debate 7.00 ಕರೆಗಳೊಂದಿಗೆ 90.9 ಶೇಕಡಾ ತಲುಪಿತು, ಅಥವಾ early exit ನಲ್ಲಿ 4.96 ಕರೆಗಳೊಂದಿಗೆ 91.3; 5 proposers ಜೊತೆ 11.00 ಕರೆಗಳೊಂದಿಗೆ 95.2, ಅಥವಾ early exit ನಲ್ಲಿ 6.91 ಕರೆಗಳೊಂದಿಗೆ 93.3. ಈ ಅನುಕರಣೆಯಲ್ಲಿ critique ಕರೆಗಳು ಮತ ಬದಲಿಸುವುದಿಲ್ಲ, ಆದ್ದರಿಂದ ಎಲ್ಲಾ ಲಾಭ ಮತದಾನದಿಂದ. ವಿಭಾಗ 5: ಹನ್ನೆರಡು ಸ್ಪಷ್ಟ ಕಾರ್ಯಗಳಲ್ಲಿ ಕರೆ ಎಣಿಕೆ supervisor 12, hierarchical 24 ಮತ್ತು debate 84, swarm ಹಿಂದಿನ ಭಾಗದಿಂದ ಊಹಿಸಿದ 12 ರಿಂದ 24; ಘಟಕಗಳು ಬೇರೆ, ಆದ್ದರಿಂದ ಇದು ಒರಟು ಆಕಾರ, ಬೆಂಚ್‌ಮಾರ್ಕ್ ಅಲ್ಲ. ವಿಭಾಗ 6: ಒಂದು ಹೆಚ್ಚು-ಅಪಾಯದ ಕಾರ್ಯದಲ್ಲಿ hierarchy ಜೊತೆ debate 2 + 7 = 9 ಕರೆಗಳು ಖರ್ಚಾದವು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "Each pattern buys something and charges for it: hierarchy buys smaller prompts for an extra call, debate buys checking for several times the calls. Counting the calls on the same tasks makes the trade visible before you commit.",
    "bodyKn": "ಪ್ರತಿ ಮಾದರಿ ಏನನ್ನೋ ಖರೀದಿಸಿ ಅದಕ್ಕೆ ಶುಲ್ಕ ವಿಧಿಸುತ್ತದೆ: hierarchy ಹೆಚ್ಚುವರಿ ಕರೆಗೆ ಚಿಕ್ಕ prompts ಖರೀದಿಸುತ್ತದೆ, debate ಹಲವು ಪಟ್ಟು ಕರೆಗಳಿಗೆ ಪರಿಶೀಲನೆ ಖರೀದಿಸುತ್ತದೆ. ಅದೇ ಕಾರ್ಯಗಳ ಮೇಲೆ ಕರೆಗಳನ್ನು ಎಣಿಸುವುದು ಬದ್ಧರಾಗುವ ಮುನ್ನ ವಿನಿಮಯವನ್ನು ಗೋಚರಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"a deeper hierarchy is a smarter one.\" The fake hierarchy added a layer, spent a call on every routed task and misrouted 6 tasks.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಆಳವಾದ hierarchy ಚತುರವಾದದ್ದು.\" ನಕಲಿ hierarchy ಒಂದು ಪದರ ಸೇರಿಸಿ, ಪ್ರತಿ routed ಕಾರ್ಯಕ್ಕೆ ಒಂದು ಕರೆ ಖರ್ಚು ಮಾಡಿ 6 ಕಾರ್ಯಗಳನ್ನು ತಪ್ಪಾಗಿ routed ಮಾಡಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Hierarchical orchestration: supervisors managing supervisors. Department supervisor: routes inside one domain. Debate: independent proposals plus a judge. Early exit: stop when the first answers agree. Composition: nesting patterns, for example routing then checking.",
    "bodyKn": "Hierarchical orchestration: supervisors ಅನ್ನು ನಿರ್ವಹಿಸುವ supervisors. Department supervisor: ಒಂದು ಡೊಮೇನ್ ಒಳಗೆ routing ಮಾಡುತ್ತದೆ. Debate: ಸ್ವತಂತ್ರ ಪ್ರಸ್ತಾಪಗಳು ಮತ್ತು judge. Early exit: ಮೊದಲ ಉತ್ತರಗಳು ಒಪ್ಪಿದಾಗ ನಿಲ್ಲಿಸುವುದು. Composition: ಮಾದರಿಗಳನ್ನು ಗೂಡುಕಟ್ಟುವುದು, ಉದಾ. routing ನಂತರ ಪರಿಶೀಲನೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) Flat and hierarchical routing both got 16 of 16, the hierarchy with 29 calls against 16. 2) A flat prompt grew to 24,040 words at 400 specialists; hierarchy prompts stayed at 1,000 and 1,540 (assumed 60 words per entry). 3) A fake hierarchy misrouted 6 tasks. 4) Debate with 3 proposers reached 90.9 percent against 70.3 for one agent at 7 calls. 5) Early exit saved calls but lowered accuracy at 5 proposers (93.3 against 95.2). 6) Patterns compose: route, then check where stakes are high.",
    "bodyKn": "1) Flat ಮತ್ತು hierarchical routing ಎರಡೂ 16 ರಲ್ಲಿ 16, hierarchy 16 ವಿರುದ್ಧ 29 ಕರೆಗಳೊಂದಿಗೆ. 2) Flat prompt 400 ತಜ್ಞರಿಗೆ 24,040 ಪದಗಳಿಗೆ ಬೆಳೆಯಿತು; hierarchy prompts 1,000 ಮತ್ತು 1,540 ರಲ್ಲಿ ಉಳಿದವು (ಪ್ರತಿ ನಮೂದಿಗೆ 60 ಪದ ಊಹೆ). 3) ನಕಲಿ hierarchy 6 ಕಾರ್ಯಗಳನ್ನು ತಪ್ಪಾಗಿ routed ಮಾಡಿತು. 4) 3 proposers ಜೊತೆ debate 7 ಕರೆಗಳಲ್ಲಿ ಒಬ್ಬ agent ನ 70.3 ವಿರುದ್ಧ 90.9 ಶೇಕಡಾ ತಲುಪಿತು. 5) Early exit ಕರೆಗಳನ್ನು ಉಳಿಸಿತು ಆದರೆ 5 proposers ನಲ್ಲಿ ನಿಖರತೆ ಕಡಿಮೆ ಮಾಡಿತು (93.3 ವಿರುದ್ಧ 95.2). 6) ಮಾದರಿಗಳು ಸಂಯೋಜಿಸುತ್ತವೆ: routing ಮಾಡಿ, ಅಪಾಯ ಹೆಚ್ಚಿರುವಲ್ಲಿ ಪರಿಶೀಲಿಸಿ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "How many routing calls did the hierarchy use against the flat supervisor on sixteen tasks?",
      "qKn": "ಹದಿನಾರು ಕಾರ್ಯಗಳಲ್ಲಿ flat supervisor ವಿರುದ್ಧ hierarchy ಎಷ್ಟು routing ಕರೆಗಳನ್ನು ಬಳಸಿತು?",
      "opts": [
       "16 against 16",
       "29 against 16",
       "16 against 29",
       "8 against 16"
      ],
      "optsKn": [
       "16 ವಿರುದ್ಧ 16",
       "29 ವಿರುದ್ಧ 16",
       "16 ವಿರುದ್ಧ 29",
       "8 ವಿರುದ್ಧ 16"
      ],
      "correct": 1
     },
     {
      "q": "What did the fake hierarchy do?",
      "qKn": "ನಕಲಿ hierarchy ಏನು ಮಾಡಿತು?",
      "opts": [
       "Routed all tasks correctly",
       "Spent a call per task and misrouted 6 tasks",
       "Reduced calls",
       "Escalated everything"
      ],
      "optsKn": [
       "ಎಲ್ಲಾ ಕಾರ್ಯ ಸರಿಯಾಗಿ routed ಮಾಡಿತು",
       "ಪ್ರತಿ ಕಾರ್ಯಕ್ಕೆ ಒಂದು ಕರೆ ಖರ್ಚು ಮಾಡಿ 6 ತಪ್ಪಾಗಿ routed ಮಾಡಿತು",
       "ಕರೆ ಕಡಿಮೆ ಮಾಡಿತು",
       "ಎಲ್ಲವನ್ನೂ ಎಸ್ಕಲೇಟ್ ಮಾಡಿತು"
      ],
      "correct": 1
     },
     {
      "q": "Under the assumed 0.70 accuracy, how accurate was debate with 3 proposers and no early exit?",
      "qKn": "ಊಹಿಸಿದ 0.70 ನಿಖರತೆಯಲ್ಲಿ early exit ಇಲ್ಲದೆ 3 proposers ಜೊತೆ debate ಎಷ್ಟು ನಿಖರವಾಗಿತ್ತು?",
      "opts": [
       "70.3 percent",
       "90.9 percent",
       "95.2 percent",
       "50 percent"
      ],
      "optsKn": [
       "70.3 ಶೇಕಡಾ",
       "90.9 ಶೇಕಡಾ",
       "95.2 ಶೇಕಡಾ",
       "50 ಶೇಕಡಾ"
      ],
      "correct": 1
     },
     {
      "q": "Why does all the debate gain come from voting in this simulation?",
      "qKn": "ಈ ಅನುಕರಣೆಯಲ್ಲಿ debate ಲಾಭವೆಲ್ಲ ಮತದಾನದಿಂದ ಏಕೆ?",
      "opts": [
       "Critique calls never change a vote",
       "The judge is random",
       "Proposers are identical",
       "There is no judge"
      ],
      "optsKn": [
       "Critique ಕರೆಗಳು ಮತ ಬದಲಿಸುವುದಿಲ್ಲ",
       "Judge ಯಾದೃಚ್ಛಿಕ",
       "Proposers ಒಂದೇ",
       "Judge ಇಲ್ಲ"
      ],
      "correct": 0
     },
     {
      "q": "What did early exit do at 5 proposers?",
      "qKn": "5 proposers ನಲ್ಲಿ early exit ಏನು ಮಾಡಿತು?",
      "opts": [
       "Saved calls but lowered accuracy (93.3 against 95.2)",
       "Raised accuracy",
       "Changed nothing",
       "Doubled calls"
      ],
      "optsKn": [
       "ಕರೆ ಉಳಿಸಿ ನಿಖರತೆ ಕಡಿಮೆ ಮಾಡಿತು (93.3 ವಿರುದ್ಧ 95.2)",
       "ನಿಖರತೆ ಹೆಚ್ಚಿಸಿತು",
       "ಏನೂ ಬದಲಾಗಲಿಲ್ಲ",
       "ಕರೆ ದ್ವಿಗುಣಗೊಳಿಸಿತು"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
