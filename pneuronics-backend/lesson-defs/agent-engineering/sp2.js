module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6af75a0777fff3943254255c",
 "order": 1,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Write Specifications That Preserve Judgment (Part 2 of 3) — Executable Examples and Proof",
 "titleKn": "ವಿವೇಚನೆ ಉಳಿಸುವ ವಿಶೇಷಣಗಳನ್ನು ಬರೆಯಿರಿ (ಭಾಗ 2 / 3) — ಕಾರ್ಯಗತ ಉದಾಹರಣೆಗಳು ಮತ್ತು ಪುರಾವೆ",
 "desc": "Turn specification examples into runnable checks, see how implementations break them and match evidence to claims.",
 "descKn": "ವಿಶೇಷಣ ಉದಾಹರಣೆಗಳನ್ನು ಓಡಿಸಬಹುದಾದ ಪರಿಶೀಲನೆಗಳಾಗಿ ಪರಿವರ್ತಿಸಿ, ಅನುಷ್ಠಾನಗಳು ಅವನ್ನು ಹೇಗೆ ಮುರಿಯುತ್ತವೆ ನೋಡಿ ಮತ್ತು ಸಾಕ್ಷ್ಯವನ್ನು ಹೇಳಿಕೆಗಳಿಗೆ ಹೊಂದಿಸಿ.",
 "objectives": [
  "Write normal, edge, failure and forbidden examples.",
  "Run them against implementations.",
  "Separate spec validity from code correctness.",
  "Match evidence to claims.",
  "Emit an executable artifact."
 ],
 "objectivesKn": [
  "normal, edge, failure ಮತ್ತು forbidden ಉದಾಹರಣೆ ಬರೆಯಿರಿ.",
  "ಅನುಷ್ಠಾನಗಳ ವಿರುದ್ಧ ಓಡಿಸಿ.",
  "ವಿಶೇಷಣ ಮಾನ್ಯತೆ ಮತ್ತು ಕೋಡ್ ಸರಿಯಾದತನ ಬೇರ್ಪಡಿಸಿ.",
  "ಸಾಕ್ಷ್ಯವನ್ನು ಹೇಳಿಕೆಗಳಿಗೆ ಹೊಂದಿಸಿ.",
  "ಕಾರ್ಯಗತ ಕಲಾಕೃತಿ ಹೊರಡಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Write Specifications That Preserve Judgment (Part 2 of 3)",
    "textKn": "ವಿವೇಚನೆ ಉಳಿಸುವ ವಿಶೇಷಣಗಳನ್ನು ಬರೆಯಿರಿ (ಭಾಗ 2 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 2 of 3: examples turned into runnable checks, three implementations run against them, a spec valid while the code is not, evidence matched to claims and an executable artifact. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind writing specifications that preserve judgment (six surfaces, decision modes, executable examples, proof matching and approval boundaries), not the real software, and the specifications, support articles and implementations are made up by the lab and no language model is involved, so no real LLM behaviour is measured. The original code/main.py was not supplied, and the lesson text only names its output artifact, so the labs are our own implementation of the behaviour described. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 2ನೆಯದು: ಓಡಿಸಬಹುದಾದ ಪರಿಶೀಲನೆಗಳಾಗಿ ಪರಿವರ್ತಿತ ಉದಾಹರಣೆಗಳು, ಅವುಗಳ ವಿರುದ್ಧ ಓಡಿಸಿದ ಮೂರು ಅನುಷ್ಠಾನಗಳು, ಕೋಡ್ ಅಲ್ಲದಿದ್ದರೂ ಮಾನ್ಯ ವಿಶೇಷಣ, ಹೇಳಿಕೆಗಳಿಗೆ ಹೊಂದಿಸಿದ ಸಾಕ್ಷ್ಯ ಮತ್ತು ಕಾರ್ಯಗತ ಕಲಾಕೃತಿ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು ವಿವೇಚನೆ ಉಳಿಸುವ ವಿಶೇಷಣಗಳನ್ನು ಬರೆಯುವುದು (ಆರು ಮೇಲ್ಮೈಗಳು, ನಿರ್ಧಾರ ವಿಧಾನಗಳು, ಕಾರ್ಯಗತ ಉದಾಹರಣೆಗಳು, ಪುರಾವೆ ಹೊಂದಾಣಿಕೆ ಮತ್ತು ಅನುಮೋದನೆ ಗಡಿಗಳು) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ವಿಶೇಷಣಗಳು, ಬೆಂಬಲ ಲೇಖನಗಳು ಮತ್ತು ಅನುಷ್ಠಾನಗಳನ್ನು ಲ್ಯಾಬ್ ಕಲ್ಪಿಸಿದ್ದು ಮತ್ತು ಭಾಷಾ ಮಾದರಿ ಇಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ code/main.py ಒದಗಿಸಿರಲಿಲ್ಲ, ಮತ್ತು lesson ಪಠ್ಯ ಅದರ ಔಟ್‌ಪುಟ್ ಕಲಾಕೃತಿಯನ್ನು ಮಾತ್ರ ಹೆಸರಿಸುತ್ತದೆ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ವಿವರಿಸಿದ ವರ್ತನೆಯ ನಮ್ಮದೇ ಅನುಷ್ಠಾನ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "A Valid Spec Is Not a Verified Implementation",
    "textKn": "ಮಾನ್ಯ ವಿಶೇಷಣ ಪರಿಶೀಲಿತ ಅನುಷ್ಠಾನ ಅಲ್ಲ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Examples as the Bridge",
    "headingKn": "ಸೇತುವೆಯಾಗಿ ಉದಾಹರಣೆಗಳು",
    "bodyEn": "This part runs a made-up support-article search three ways against the same examples: normal, edge, failure, forbidden and format. A version that leaks an email address finds the right articles and fails only the forbidden example, a version that returns bare titles fails five of seven, and a proof table shows which kind of evidence can support which claim.",
    "bodyKn": "ಈ ಭಾಗ ಕಲ್ಪಿತ ಬೆಂಬಲ-ಲೇಖನ ಹುಡುಕಾಟವನ್ನು ಅದೇ ಉದಾಹರಣೆಗಳ ವಿರುದ್ಧ ಮೂರು ರೀತಿ ಓಡಿಸುತ್ತದೆ: normal, edge, failure, forbidden ಮತ್ತು format. ಇಮೇಲ್ ವಿಳಾಸ ಸೋರಿಸುವ ಆವೃತ್ತಿ ಸರಿಯಾದ ಲೇಖನ ಕಂಡು forbidden ಉದಾಹರಣೆ ಮಾತ್ರ ವಿಫಲವಾಗುತ್ತದೆ, ಬರೇ ಶೀರ್ಷಿಕೆಗಳನ್ನು ಮರಳಿಸುವ ಆವೃತ್ತಿ ಏಳರಲ್ಲಿ ಐದು ವಿಫಲವಾಗುತ್ತದೆ, ಮತ್ತು ಪುರಾವೆ ಕೋಷ್ಟಕ ಯಾವ ರೀತಿಯ ಸಾಕ್ಷ್ಯ ಯಾವ ಹೇಳಿಕೆ ಬೆಂಬಲಿಸಬಹುದು ತೋರಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Executable Examples",
    "headingKn": "ಕಾರ್ಯಗತ ಉದಾಹರಣೆಗಳು",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">examples bridge the spec and the code</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">examples</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">normal/edge/failure</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">forbidden</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">must not happen</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">implementations</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">run all three</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">proof matrix</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">claim to evidence</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">examples bridge the spec and the code</text></svg>",
    "captionEn": "Examples run against the code and each claim names its evidence.",
    "captionKn": "ಉದಾಹರಣೆಗಳು ಕೋಡ್ ವಿರುದ್ಧ ಓಡುತ್ತವೆ ಮತ್ತು ಪ್ರತಿ ಹೇಳಿಕೆ ತನ್ನ ಸಾಕ್ಷ್ಯ ಹೆಸರಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Claim to evidence (lab table)",
    "headingKn": "ಹೇಳಿಕೆಯಿಂದ ಸಾಕ್ಷ್ಯಕ್ಕೆ (ಲ್ಯಾಬ್ ಕೋಷ್ಟಕ)",
    "headers": [
     "Claim",
     "Evidence it needs"
    ],
    "rows": [
     [
      "relevant results",
      "example tests"
     ],
     [
      "no private data",
      "forbidden example"
     ],
     [
      "response format kept",
      "contract test"
     ],
     [
      "within two seconds",
      "latency measurement"
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
    "filename": "sp_2.py",
    "headingEn": "Implementations, examples and the proof table",
    "headingKn": "ಅನುಷ್ಠಾನಗಳು, ಉದಾಹರಣೆಗಳು ಮತ್ತು ಪುರಾವೆ ಕೋಷ್ಟಕ",
    "descEn": "search_good redacts addresses and rejects blank queries, search_leaky does not redact, search_wrong_shape returns titles only, EXAMPLES pairs a kind with a query and a check, run_examples runs every example plus the blank-query failure case and evidence_matches compares a claim with its required evidence.",
    "descKn": "search_good ವಿಳಾಸ redact ಮಾಡಿ ಖಾಲಿ queries ತಿರಸ್ಕರಿಸುತ್ತದೆ, search_leaky redact ಮಾಡುವುದಿಲ್ಲ, search_wrong_shape ಶೀರ್ಷಿಕೆ ಮಾತ್ರ ಮರಳಿಸುತ್ತದೆ, EXAMPLES ಒಂದು ವಿಧವನ್ನು query ಮತ್ತು ಪರಿಶೀಲನೆಯೊಂದಿಗೆ ಜೋಡಿಸುತ್ತದೆ, run_examples ಪ್ರತಿ ಉದಾಹರಣೆ ಜೊತೆಗೆ ಖಾಲಿ-query ವೈಫಲ್ಯ ಸಂದರ್ಭ ಓಡಿಸುತ್ತದೆ ಮತ್ತು evidence_matches ಹೇಳಿಕೆಯನ್ನು ಅದರ ಅಗತ್ಯ ಸಾಕ್ಷ್ಯದೊಂದಿಗೆ ಹೋಲಿಸುತ್ತದೆ.",
    "code": "def redact(text):\n    out = []\n    for w in text.split():\n        out.append(\"[redacted]\" if \"@\" in w else w)\n    return \" \".join(out)\n\n\ndef search_good(q):\n    q = q.lower().strip()\n    if not q:\n        raise ValueError(\"Query must not be empty\")\n    return [{\"id\": i, \"title\": t, \"body\": redact(b)} for i, (t, b) in ARTICLES.items() if q in t.lower() or q in b.lower()]\n\n\ndef search_leaky(q):\n    q = q.lower().strip()\n    if not q:\n        raise ValueError(\"Query must not be empty\")\n    return [{\"id\": i, \"title\": t, \"body\": b} for i, (t, b) in ARTICLES.items() if q in t.lower() or q in b.lower()]\n\n\ndef search_wrong_shape(q):\n    return [t for t, _ in ARTICLES.values() if q.lower() in t.lower()]\n\n\nEXAMPLES = [\n    (\"normal\", \"refund\", lambda r: [x[\"id\"] for x in r] == [1]),\n    (\"normal\", \"ship\", lambda r: [x[\"id\"] for x in r] == [2]),\n    (\"edge\", \"REFUND  \", lambda r: [x[\"id\"] for x in r] == [1]),\n    (\"edge\", \"zzz\", lambda r: r == []),\n    (\"forbidden\", \"refund\", lambda r: all(\"@\" not in x[\"body\"] for x in r)),\n    (\"format\", \"password\", lambda r: all(set(x) == {\"id\", \"title\", \"body\"} for x in r)),\n]\n\n\ndef run_examples(fn):\n    res = []\n    for kind, q, check in EXAMPLES:\n        try:\n            ok = bool(check(fn(q)))\n        except Exception:\n            ok = False\n        res.append((kind, q, ok))\n    try:\n        fn(\"\")\n        res.append((\"failure\", \"<empty>\", False))\n    except ValueError:\n        res.append((\"failure\", \"<empty>\", True))\n    return res\n\n\nPROOF = {\"relevant results\": \"example tests\", \"no private data\": \"forbidden example\", \"response format kept\": \"contract test\", \"within two seconds\": \"latency measurement\"}\n\n\ndef evidence_matches(claim, evidence):\n    return PROOF.get(claim) == evidence"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "sp_2.py",
    "headingEn": "main(): five experiments",
    "headingKn": "main(): ಐದು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() runs three implementations against the examples, shows a valid spec with a leaky implementation, matches evidence to claims, runs edge queries and builds an artifact in memory.",
    "descKn": "main() ಮೂರು ಅನುಷ್ಠಾನಗಳನ್ನು ಉದಾಹರಣೆಗಳ ವಿರುದ್ಧ ಓಡಿಸಿ, ಸೋರಿಕೆ ಅನುಷ್ಠಾನದೊಂದಿಗೆ ಮಾನ್ಯ ವಿಶೇಷಣ ತೋರಿಸಿ, ಸಾಕ್ಷ್ಯವನ್ನು ಹೇಳಿಕೆಗಳಿಗೆ ಹೊಂದಿಸಿ, edge queries ಓಡಿಸಿ ಮತ್ತು ಮೆಮೊರಿಯಲ್ಲಿ ಕಲಾಕೃತಿ ನಿರ್ಮಿಸುತ್ತದೆ.",
    "code": "def main():\n    section(\"1. Genuinely running: the same examples against three implementations\")\n    for name, fn in ((\"good\", search_good), (\"leaky\", search_leaky), (\"wrong shape\", search_wrong_shape)):\n        res = run_examples(fn)\n        print(f\"{name:12} passed {sum(1 for r in res if r[2])}/{len(res)}  failed: {[(k, q) for k, q, ok in res if not ok]}\")\n    print(\"the good version passed every example, the leaky version failed only the forbidden one, and the wrong-shape version, which returns bare titles instead of records, failed five of seven including the normal queries because the checks read the id field and passed only the two that expect no results or a format over no rows; the forbidden example is what catches a version that finds the right articles and exposes an address\")\n\n    section(\"2. Genuinely running: a spec can be valid while the implementation breaks it\")\n    spec_ok = {\"outcome\": \"relevant articles\", \"invariants\": [\"no private data\"], \"examples\": len(EXAMPLES) + 1}\n    print(\"spec fields present:\", sorted(spec_ok), \"| leaky implementation forbidden example passes:\", [ok for k, q, ok in run_examples(search_leaky) if k == \"forbidden\"])\n    print(\"the specification was complete and consistent and the implementation still violated its invariant, so validating the spec says nothing about the code, and the examples are the bridge between the two\")\n\n    section(\"3. Genuinely running: evidence has to match the claim\")\n    cases = [(\"no private data\", \"forbidden example\"), (\"no private data\", \"latency measurement\"), (\"within two seconds\", \"example tests\"), (\"response format kept\", \"contract test\")]\n    for claim, ev in cases:\n        print(f\"{claim:22} backed by {ev:20} -> {'matches' if evidence_matches(claim, ev) else 'does not match (needs ' + PROOF[claim] + ')'}\")\n    print(\"a latency measurement cannot support a privacy claim and passing example tests cannot support a speed claim, so each claim names the kind of evidence it needs; the mapping is a small table of the lab's own\")\n\n    section(\"4. Genuinely running: an edge case that a happy path would miss\")\n    print(\"query with uppercase and spaces:\", [x[\"id\"] for x in search_good(\"  REFUND \")])\n    print(\"query with no match:\", search_good(\"zzz\"))\n    try:\n        search_good(\"   \")\n    except ValueError as e:\n        print(\"blank query:\", e)\n    print(\"the three edge cases each have an expected outcome in the examples, and a version that only handled the normal queries would have failed them\")\n\n    section(\"5. Genuinely running: the executable specification artifact\")\n    results = run_examples(search_good)\n    art = {\"examples\": [{\"kind\": k, \"query\": q, \"passed\": ok} for k, q, ok in results], \"proof\": PROOF}\n    text = json.dumps(art, sort_keys=True)\n    print(\"examples recorded:\", len(art[\"examples\"]), \"| all passed:\", all(e[\"passed\"] for e in art[\"examples\"]), \"| bytes:\", len(text))\n    print(\"the artifact holds the examples with their results and the claim-to-evidence table so a reviewer can see what was checked; it is built in memory and the lab does not write outputs/executable-specification.json\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: the same examples against three implementations ---\ngood         passed 7/7  failed: []\nleaky        passed 6/7  failed: [('forbidden', 'refund')]\nwrong shape  passed 2/7  failed: [('normal', 'refund'), ('normal', 'ship'), ('edge', 'REFUND  '), ('forbidden', 'refund'), ('failure', '<empty>')]\nthe good version passed every example, the leaky version failed only the forbidden one, and the wrong-shape version, which returns bare titles instead of records, failed five of seven including the normal queries because the checks read the id field and passed only the two that expect no results or a format over no rows; the forbidden example is what catches a version that finds the right articles and exposes an address\n\n--- 2. Genuinely running: a spec can be valid while the implementation breaks it ---\nspec fields present: ['examples', 'invariants', 'outcome'] | leaky implementation forbidden example passes: [False]\nthe specification was complete and consistent and the implementation still violated its invariant, so validating the spec says nothing about the code, and the examples are the bridge between the two\n\n--- 3. Genuinely running: evidence has to match the claim ---\nno private data        backed by forbidden example    -> matches\nno private data        backed by latency measurement  -> does not match (needs forbidden example)\nwithin two seconds     backed by example tests        -> does not match (needs latency measurement)\nresponse format kept   backed by contract test        -> matches\na latency measurement cannot support a privacy claim and passing example tests cannot support a speed claim, so each claim names the kind of evidence it needs; the mapping is a small table of the lab's own\n\n--- 4. Genuinely running: an edge case that a happy path would miss ---\nquery with uppercase and spaces: [1]\nquery with no match: []\nblank query: Query must not be empty\nthe three edge cases each have an expected outcome in the examples, and a version that only handled the normal queries would have failed them\n\n--- 5. Genuinely running: the executable specification artifact ---\nexamples recorded: 7 | all passed: True | bytes: 573\nthe artifact holds the examples with their results and the claim-to-evidence table so a reviewer can see what was checked; it is built in memory and the lab does not write outputs/executable-specification.json"
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Experiment Walkthrough",
    "textKn": "Experiment ನಡೆದಾಟ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 1: The same examples against three implementations",
    "headingKn": "ಪ್ರಯೋಗ 1: The same examples against three implementations",
    "bodyEn": "What it ran: The same examples against three implementations. What the lab concluded: the good version passed every example, the leaky version failed only the forbidden one, and the wrong-shape version, which returns bare titles instead of records, failed five of seven including the normal queries because the checks read the id field and passed only the two that expect no results or a format over no rows; the forbidden example is what catches a version that finds the right articles and exposes an address",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: The same examples against three implementations. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the good version passed every example, the leaky version failed only the forbidden one, and the wrong-shape version, which returns bare titles instead of records, failed five of seven including the normal queries because the checks read the id field and passed only the two that expect no results or a format over no rows; the forbidden example is what catches a version that finds the right articles and exposes an address"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. Genuinely running: the same examples against three implementations ---\ngood         passed 7/7  failed: []\nleaky        passed 6/7  failed: [('forbidden', 'refund')]\nwrong shape  passed 2/7  failed: [('normal', 'refund'), ('normal', 'ship'), ('edge', 'REFUND  '), ('forbidden', 'refund'), ('failure', '<empty>')]"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: A spec can be valid while the implementation breaks it",
    "headingKn": "ಪ್ರಯೋಗ 2: A spec can be valid while the implementation breaks it",
    "bodyEn": "What it ran: A spec can be valid while the implementation breaks it. What the lab concluded: the specification was complete and consistent and the implementation still violated its invariant, so validating the spec says nothing about the code, and the examples are the bridge between the two",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A spec can be valid while the implementation breaks it. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the specification was complete and consistent and the implementation still violated its invariant, so validating the spec says nothing about the code, and the examples are the bridge between the two"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely running: a spec can be valid while the implementation breaks it ---\nspec fields present: ['examples', 'invariants', 'outcome'] | leaky implementation forbidden example passes: [False]"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: Evidence has to match the claim",
    "headingKn": "ಪ್ರಯೋಗ 3: Evidence has to match the claim",
    "bodyEn": "What it ran: Evidence has to match the claim. What the lab concluded: a latency measurement cannot support a privacy claim and passing example tests cannot support a speed claim, so each claim names the kind of evidence it needs; the mapping is a small table of the lab's own",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Evidence has to match the claim. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a latency measurement cannot support a privacy claim and passing example tests cannot support a speed claim, so each claim names the kind of evidence it needs; the mapping is a small table of the lab's own"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely running: evidence has to match the claim ---\nno private data        backed by forbidden example    -> matches\nno private data        backed by latency measurement  -> does not match (needs forbidden example)\nwithin two seconds     backed by example tests        -> does not match (needs latency measurement)\nresponse format kept   backed by contract test        -> matches"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 4: An edge case that a happy path would miss",
    "headingKn": "ಪ್ರಯೋಗ 4: An edge case that a happy path would miss",
    "bodyEn": "What it ran: An edge case that a happy path would miss. What the lab concluded: the three edge cases each have an expected outcome in the examples, and a version that only handled the normal queries would have failed them",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: An edge case that a happy path would miss. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the three edge cases each have an expected outcome in the examples, and a version that only handled the normal queries would have failed them"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 4. Genuinely running: an edge case that a happy path would miss ---\nquery with uppercase and spaces: [1]\nquery with no match: []\nblank query: Query must not be empty"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 5: The executable specification artifact",
    "headingKn": "ಪ್ರಯೋಗ 5: The executable specification artifact",
    "bodyEn": "What it ran: The executable specification artifact. What the lab concluded: the artifact holds the examples with their results and the claim-to-evidence table so a reviewer can see what was checked; it is built in memory and the lab does not write outputs/executable-specification.json",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: The executable specification artifact. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the artifact holds the examples with their results and the claim-to-evidence table so a reviewer can see what was checked; it is built in memory and the lab does not write outputs/executable-specification.json"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 5. Genuinely running: the executable specification artifact ---\nexamples recorded: 7 | all passed: True | bytes: 573"
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
    "headingEn": "Genuinely Found: Seven Examples, Three Implementations",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಏಳು ಉದಾಹರಣೆಗಳು, ಮೂರು ಅನುಷ್ಠಾನಗಳು",
    "bodyEn": "Section 1: the good version passed 7/7, the leaky version passed 6/7 and failed only the forbidden example for \"refund\", and the wrong-shape version passed 2/7, failing the normal, edge, forbidden and blank-query examples. Section 2: a complete specification was held while the leaky implementation failed its forbidden example.",
    "bodyKn": "ವಿಭಾಗ 1: ಒಳ್ಳೆಯ ಆವೃತ್ತಿ 7/7 ಪಾಸ್ ಆಯಿತು, ಸೋರಿಕೆ ಆವೃತ್ತಿ 6/7 ಪಾಸ್ ಆಗಿ \"refund\" ಗೆ forbidden ಉದಾಹರಣೆ ಮಾತ್ರ ವಿಫಲವಾಯಿತು, ಮತ್ತು ತಪ್ಪು-ಆಕಾರ ಆವೃತ್ತಿ 2/7 ಪಾಸ್ ಆಗಿ normal, edge, forbidden ಮತ್ತು ಖಾಲಿ-query ಉದಾಹರಣೆಗಳು ವಿಫಲವಾದವು. ವಿಭಾಗ 2: ಸಂಪೂರ್ಣ ವಿಶೇಷಣ ಇದ್ದರೂ ಸೋರಿಕೆ ಅನುಷ್ಠಾನ ತನ್ನ forbidden ಉದಾಹರಣೆಯಲ್ಲಿ ವಿಫಲವಾಯಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Evidence Must Match the Claim",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಸಾಕ್ಷ್ಯ ಹೇಳಿಕೆಗೆ ಹೊಂದಬೇಕು",
    "bodyEn": "Section 3: a forbidden example supported \"no private data\" and a contract test supported \"response format kept\", while a latency measurement did not support the privacy claim and example tests did not support the two-seconds claim. Section 4: \" REFUND \" matched article 1, \"zzz\" matched nothing and a blank query raised \"Query must not be empty\". Section 5: the artifact recorded 7 examples, all passing for the good version, in 573 bytes, built in memory.",
    "bodyKn": "ವಿಭಾಗ 3: forbidden ಉದಾಹರಣೆ \"no private data\" ಬೆಂಬಲಿಸಿತು ಮತ್ತು contract test \"response format kept\" ಬೆಂಬಲಿಸಿತು, ಆದರೆ latency ಅಳತೆ ಗೌಪ್ಯತೆ ಹೇಳಿಕೆ ಬೆಂಬಲಿಸಲಿಲ್ಲ ಮತ್ತು example tests ಎರಡು-ಸೆಕೆಂಡ್ ಹೇಳಿಕೆ ಬೆಂಬಲಿಸಲಿಲ್ಲ. ವಿಭಾಗ 4: \" REFUND \" ಲೇಖನ 1 ಗೆ ಹೊಂದಿತು, \"zzz\" ಯಾವುದಕ್ಕೂ ಹೊಂದಲಿಲ್ಲ ಮತ್ತು ಖಾಲಿ query \"Query must not be empty\" ಎತ್ತಿತು. ವಿಭಾಗ 5: ಕಲಾಕೃತಿ ಒಳ್ಳೆಯ ಆವೃತ್ತಿಗೆ ಎಲ್ಲವೂ ಪಾಸ್ ಆದ 7 ಉದಾಹರಣೆಗಳನ್ನು 573 ಬೈಟ್‌ಗಳಲ್ಲಿ ಮೆಮೊರಿಯಲ್ಲಿ ನಿರ್ಮಿಸಿ ದಾಖಲಿಸಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A specification only protects anything if examples and evidence tie it to running code, and a forbidden example is what catches a correct-looking leak.",
    "bodyKn": "ಉದಾಹರಣೆಗಳು ಮತ್ತು ಸಾಕ್ಷ್ಯ ಅದನ್ನು ಓಡುವ ಕೋಡ್‌ಗೆ ಜೋಡಿಸಿದರೆ ಮಾತ್ರ ವಿಶೇಷಣ ಏನನ್ನಾದರೂ ರಕ್ಷಿಸುತ್ತದೆ, ಮತ್ತು forbidden ಉದಾಹರಣೆ ಸರಿಯಂತೆ ಕಾಣುವ ಸೋರಿಕೆ ಹಿಡಿಯುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"if the spec is complete, the code follows it.\" The leaky version broke its invariant under a complete spec.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ವಿಶೇಷಣ ಸಂಪೂರ್ಣವಾದರೆ ಕೋಡ್ ಅದನ್ನು ಅನುಸರಿಸುತ್ತದೆ.\" ಸೋರಿಕೆ ಆವೃತ್ತಿ ಸಂಪೂರ್ಣ ವಿಶೇಷಣದಲ್ಲೂ ತನ್ನ invariant ಮುರಿಯಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Forbidden example: an input where something must not happen. Edge example: an unusual but valid input. Contract test: checks the shape of a response. Proof matrix: the table from claims to evidence.",
    "bodyKn": "Forbidden example: ಏನೋ ಆಗಬಾರದ ಒಳಹರಿವು. Edge example: ಅಸಾಮಾನ್ಯ ಆದರೆ ಮಾನ್ಯ ಒಳಹರಿವು. Contract test: response ಆಕಾರ ಪರಿಶೀಲಿಸುತ್ತದೆ. Proof matrix: ಹೇಳಿಕೆಗಳಿಂದ ಸಾಕ್ಷ್ಯಕ್ಕೆ ಕೋಷ್ಟಕ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) The good version passed 7/7. 2) The leaky one failed only the forbidden example. 3) A latency number cannot back a privacy claim. 4) Edge cases had expected outcomes. 5) The artifact held examples and the proof table.",
    "bodyKn": "1) ಒಳ್ಳೆಯ ಆವೃತ್ತಿ 7/7 ಪಾಸ್ ಆಯಿತು. 2) ಸೋರಿಕೆ ಆವೃತ್ತಿ forbidden ಉದಾಹರಣೆ ಮಾತ್ರ ವಿಫಲವಾಯಿತು. 3) latency ಸಂಖ್ಯೆ ಗೌಪ್ಯತೆ ಹೇಳಿಕೆ ಬೆಂಬಲಿಸಲಾಗದು. 4) Edge ಸಂದರ್ಭಗಳಿಗೆ ನಿರೀಕ್ಷಿತ ಫಲಿತಾಂಶ ಇತ್ತು. 5) ಕಲಾಕೃತಿ ಉದಾಹರಣೆಗಳು ಮತ್ತು ಪುರಾವೆ ಕೋಷ್ಟಕ ಹೊಂದಿತ್ತು."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Try It Yourself",
    "textKn": "ನೀವೇ ಪ್ರಯತ್ನಿಸಿ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Run the lab",
    "headingKn": "ಲ್ಯಾಬ್ ಓಡಿಸಿ",
    "bodyEn": "1) Open a terminal in pneuronics-backend/lesson-defs/labs. 2) Run: python -B sp_2.py (in Git Bash on Windows: PYTHONIOENCODING=utf-8 python -B sp_2.py). 3) Compare each section with the walkthrough above. The -B flag stops Python from writing __pycache__ folders.",
    "bodyKn": "1) pneuronics-backend/lesson-defs/labs ನಲ್ಲಿ ಟರ್ಮಿನಲ್ ತೆರೆಯಿರಿ. 2) ಓಡಿಸಿ: python -B sp_2.py (Windows Git Bash ನಲ್ಲಿ: PYTHONIOENCODING=utf-8 python -B sp_2.py). 3) ಪ್ರತಿ ವಿಭಾಗವನ್ನು ಮೇಲಿನ ನಡೆದಾಟಕ್ಕೆ ಹೋಲಿಸಿ. -B ಧ್ವಜ Python __pycache__ ಫೋಲ್ಡರ್‌ಗಳನ್ನು ಬರೆಯುವುದನ್ನು ತಡೆಯುತ್ತದೆ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "Which example did the leaky version fail?",
      "qKn": "ಸೋರಿಕೆ ಆವೃತ್ತಿ ಯಾವ ಉದಾಹರಣೆ ವಿಫಲವಾಯಿತು?",
      "opts": [
       "The forbidden example",
       "The normal example",
       "The edge example",
       "All of them"
      ],
      "optsKn": [
       "forbidden ಉದಾಹರಣೆ",
       "normal ಉದಾಹರಣೆ",
       "edge ಉದಾಹರಣೆ",
       "ಎಲ್ಲವೂ"
      ],
      "correct": 0
     },
     {
      "q": "How many examples did the wrong-shape version pass?",
      "qKn": "ತಪ್ಪು-ಆಕಾರ ಆವೃತ್ತಿ ಎಷ್ಟು ಉದಾಹರಣೆ ಪಾಸ್ ಮಾಡಿತು?",
      "opts": [
       "2 of 7",
       "7 of 7",
       "6 of 7",
       "0 of 7"
      ],
      "optsKn": [
       "7 ರಲ್ಲಿ 2",
       "7 ರಲ್ಲಿ 7",
       "7 ರಲ್ಲಿ 6",
       "7 ರಲ್ಲಿ 0"
      ],
      "correct": 0
     },
     {
      "q": "Which evidence supports \"no private data\"?",
      "qKn": "\"no private data\" ಯನ್ನು ಯಾವ ಸಾಕ್ಷ್ಯ ಬೆಂಬಲಿಸುತ್ತದೆ?",
      "opts": [
       "A forbidden example",
       "A latency measurement",
       "A contract test",
       "Example tests only"
      ],
      "optsKn": [
       "forbidden ಉದಾಹರಣೆ",
       "latency ಅಳತೆ",
       "contract test",
       "example tests ಮಾತ್ರ"
      ],
      "correct": 0
     },
     {
      "q": "What did a blank query do in the good version?",
      "qKn": "ಒಳ್ಳೆಯ ಆವೃತ್ತಿಯಲ್ಲಿ ಖಾಲಿ query ಏನು ಮಾಡಿತು?",
      "opts": [
       "Raised \"Query must not be empty\"",
       "Returned every article",
       "Returned nothing silently",
       "Crashed"
      ],
      "optsKn": [
       "\"Query must not be empty\" ಎತ್ತಿತು",
       "ಪ್ರತಿ ಲೇಖನ ಮರಳಿಸಿತು",
       "ಮೌನವಾಗಿ ಏನೂ ಮರಳಿಸಲಿಲ್ಲ",
       "ಕ್ರ್ಯಾಶ್ ಆಯಿತು"
      ],
      "correct": 0
     },
     {
      "q": "Was outputs/executable-specification.json written?",
      "qKn": "outputs/executable-specification.json ಬರೆಯಲಾಯಿತೇ?",
      "opts": [
       "No, it stayed in memory",
       "Yes",
       "Only on failure",
       "Only signed"
      ],
      "optsKn": [
       "ಇಲ್ಲ, ಮೆಮೊರಿಯಲ್ಲಿ ಉಳಿಯಿತು",
       "ಹೌದು",
       "ವೈಫಲ್ಯದಲ್ಲಿ ಮಾತ್ರ",
       "ಸಹಿ ಮಾಡಿದ್ದು ಮಾತ್ರ"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
