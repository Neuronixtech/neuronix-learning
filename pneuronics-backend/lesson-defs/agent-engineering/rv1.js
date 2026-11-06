module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6366020ed05b321580",
 "order": 0,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Reviewer Agent (Part 1 of 3) — The Rubric and Verdict",
 "titleKn": "Reviewer Agent (ಭಾಗ 1 / 3) — Rubric ಮತ್ತು ತೀರ್ಪು",
 "desc": "Build five rubric scorers and a verdict engine with a hard-fail rule, and see a passing gate still fail review.",
 "descKn": "ಐದು rubric scorers ಮತ್ತು hard-fail ನಿಯಮ ಇರುವ ತೀರ್ಪು ಎಂಜಿನ್ ನಿರ್ಮಿಸಿ, ಪಾಸ್ ಆದ gate ಕೂಡ review ನಲ್ಲಿ ವಿಫಲವಾಗುವುದನ್ನು ನೋಡಿ.",
 "objectives": [
  "Score five dimensions with findings.",
  "Apply the hard-fail rule.",
  "Reject non-integer scores.",
  "Separate gate from reviewer.",
  "Write the report as evidence."
 ],
 "objectivesKn": [
  "ಐದು ಆಯಾಮಗಳಿಗೆ findings ಜೊತೆ ಅಂಕ ನೀಡಿ.",
  "hard-fail ನಿಯಮ ಅನ್ವಯಿಸಿ.",
  "ಪೂರ್ಣಾಂಕವಲ್ಲದ ಅಂಕ ತಿರಸ್ಕರಿಸಿ.",
  "gate ಮತ್ತು reviewer ಬೇರ್ಪಡಿಸಿ.",
  "ವರದಿಯನ್ನು ಸಾಕ್ಷ್ಯವಾಗಿ ಬರೆಯಿರಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Reviewer Agent (Part 1 of 3)",
    "textKn": "Reviewer Agent (ಭಾಗ 1 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 1 of 3: a five-dimension rubric with one scorer per dimension, a verdict engine with a hard-fail rule and two demonstration cases. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind the reviewer agent (rubric, hard-fail rule, independent evidence and isolation), not the real software, and the reviewer is a deterministic stub reading structured evidence and no language model is involved, so no real LLM behaviour is measured. Only part of this module's source was supplied: Part 2 was pasted in full, while Parts 1 and 3 arrived only as small fragments (a progress checklist and closing summaries), and the original main.py was not provided. The lessons are built from Part 2 and those fragments, and the labs are our own implementation. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 1ನೆಯದು: ಪ್ರತಿ ಆಯಾಮಕ್ಕೆ ಒಂದು scorer ಇರುವ ಐದು-ಆಯಾಮದ rubric, hard-fail ನಿಯಮ ಇರುವ ತೀರ್ಪು ಎಂಜಿನ್ ಮತ್ತು ಎರಡು ಪ್ರದರ್ಶನ ಪ್ರಕರಣಗಳು. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು reviewer agent (rubric, hard-fail ನಿಯಮ, ಸ್ವತಂತ್ರ ಸಾಕ್ಷ್ಯ ಮತ್ತು ಪ್ರತ್ಯೇಕತೆ) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು reviewer ರಚನಾತ್ಮಕ ಸಾಕ್ಷ್ಯ ಓದುವ ನಿರ್ಣಾಯಕ ಬದಲಿ ಮತ್ತು ಯಾವುದೇ ಭಾಷಾ ಮಾದರಿ ಇಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಈ ಮಾಡ್ಯೂಲ್‌ನ ಮೂಲದ ಒಂದು ಭಾಗ ಮಾತ್ರ ಒದಗಿಸಲಾಗಿತ್ತು: ಭಾಗ 2 ಪೂರ್ಣವಾಗಿ ಅಂಟಿಸಲಾಗಿತ್ತು, ಭಾಗ 1 ಮತ್ತು 3 ಸಣ್ಣ ತುಣುಕುಗಳಾಗಿ ಮಾತ್ರ ಬಂದವು (ಪ್ರಗತಿ ಪರಿಶೀಲನಾ ಪಟ್ಟಿ ಮತ್ತು ಮುಕ್ತಾಯ ಸಾರಾಂಶಗಳು), ಮತ್ತು ಮೂಲ main.py ಒದಗಿಸಲಿಲ್ಲ. lessons ಭಾಗ 2 ಮತ್ತು ಆ ತುಣುಕುಗಳಿಂದ ನಿರ್ಮಿತ, ಮತ್ತು ಲ್ಯಾಬ್‌ಗಳು ನಮ್ಮದೇ ಅನುಷ್ಠಾನ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "The Builder Should Not Mark Its Own Work",
    "textKn": "Builder ತನ್ನ ಕೆಲಸಕ್ಕೆ ತಾನೇ ಅಂಕ ನೀಡಬಾರದು",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "A Rubric With a Hard-Fail Rule",
    "headingKn": "Hard-Fail ನಿಯಮ ಇರುವ Rubric",
    "bodyEn": "The system that builds a change should not be the only judge of it. The verification gate checks deterministic evidence; a reviewer judges problem fit, scope discipline, assumptions, verification quality and handoff readiness, each scored 0, 1 or 2 with a finding. This part builds the five scorers and the verdict engine, runs a clean change and a change that passes its tests while solving the wrong problem, and counts all 243 possible score combinations.",
    "bodyKn": "ಬದಲಾವಣೆ ನಿರ್ಮಿಸುವ ವ್ಯವಸ್ಥೆ ಅದರ ಏಕೈಕ ನ್ಯಾಯಾಧೀಶ ಆಗಬಾರದು. ಪರಿಶೀಲನಾ gate ನಿರ್ಣಾಯಕ ಸಾಕ್ಷ್ಯ ಪರಿಶೀಲಿಸುತ್ತದೆ; reviewer ಸಮಸ್ಯೆ ಹೊಂದಾಣಿಕೆ, ವ್ಯಾಪ್ತಿ ಶಿಸ್ತು, ಊಹೆಗಳು, ಪರಿಶೀಲನೆ ಗುಣಮಟ್ಟ ಮತ್ತು ಹಸ್ತಾಂತರ ಸಿದ್ಧತೆ ನಿರ್ಣಯಿಸುತ್ತದೆ, ಪ್ರತಿಯೊಂದಕ್ಕೂ finding ಜೊತೆ 0, 1 ಅಥವಾ 2. ಈ ಭಾಗ ಐದು scorers ಮತ್ತು ತೀರ್ಪು ಎಂಜಿನ್ ನಿರ್ಮಿಸಿ, ಸ್ವಚ್ಛ ಬದಲಾವಣೆ ಮತ್ತು ಪರೀಕ್ಷೆ ಪಾಸ್ ಆಗಿ ತಪ್ಪು ಸಮಸ್ಯೆ ಬಗೆಹರಿಸುವ ಬದಲಾವಣೆ ಓಡಿಸಿ, ಎಲ್ಲಾ 243 ಸಾಧ್ಯ ಅಂಕ ಸಂಯೋಜನೆಗಳನ್ನು ಎಣಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Five Scorers, One Verdict",
    "headingKn": "ಐದು Scorers, ಒಂದು ತೀರ್ಪು",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">Five scorers, one verdict</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">five scorers</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">0, 1 or 2 each</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">total /10</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">sum of scores</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">any zero</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">hard fail</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">pass / soft / hard</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">verdict</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">a zero outvotes the total</text></svg>",
    "captionEn": "A zero in any dimension is a hard fail.",
    "captionKn": "ಯಾವುದೇ ಆಯಾಮದಲ್ಲಿ ಸೊನ್ನೆ hard fail."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "The rubric",
    "headingKn": "Rubric",
    "headers": [
     "Dimension",
     "0",
     "2"
    ],
    "rows": [
     [
      "problem_fit",
      "problem unsolved",
      "requirement addressed"
     ],
     [
      "scope_discipline",
      "unauthorised changes",
      "within scope"
     ],
     [
      "assumptions",
      "none recorded",
      "recorded"
     ],
     [
      "verification_quality",
      "gate did not pass",
      "tests match the requirement"
     ],
     [
      "handoff_readiness",
      "no next action",
      "next action and evidence"
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
    "filename": "rv_1.py",
    "headingEn": "Scorers and the verdict engine",
    "headingKn": "Scorers ಮತ್ತು ತೀರ್ಪು ಎಂಜಿನ್",
    "descEn": "Each scorer returns a score and a finding from structured evidence, defaulting to the unsuccessful reading when a key is missing. verdict checks every score is exactly an int from 0 to 2, then returns hard_fail for any zero or a total below 5, soft_fail for 5 or 6, and pass otherwise.",
    "descKn": "ಪ್ರತಿ scorer ರಚನಾತ್ಮಕ ಸಾಕ್ಷ್ಯದಿಂದ ಅಂಕ ಮತ್ತು finding ಮರಳಿಸುತ್ತದೆ, ಕೀಲಿ ಕಾಣೆಯಾದಾಗ ವಿಫಲ ಓದುವಿಕೆ ಡೀಫಾಲ್ಟ್. verdict ಪ್ರತಿ ಅಂಕ ನಿಖರವಾಗಿ 0 ರಿಂದ 2 ರ int ಎಂದು ಪರಿಶೀಲಿಸಿ, ಯಾವುದೇ ಸೊನ್ನೆ ಅಥವಾ 5 ಕ್ಕಿಂತ ಕಡಿಮೆ ಒಟ್ಟಿಗೆ hard_fail, 5 ಅಥವಾ 6 ಕ್ಕೆ soft_fail ಮತ್ತು ಉಳಿದದ್ದಕ್ಕೆ pass ಮರಳಿಸುತ್ತದೆ.",
    "code": "def problem_fit(d):\n    if not d.state.get(\"solves_requested_problem\", False):\n        return 0, \"The original problem remains unsolved.\"\n    if not d.state.get(\"covers_all_requirements\", False):\n        return 1, \"The task is only partially satisfied.\"\n    return 2, \"The implementation addresses the stated task.\"\n\n\ndef scope_discipline(d):\n    if d.state.get(\"unauthorized_changes\"):\n        return 0, \"Unauthorised files were changed.\"\n    if d.state.get(\"scope_expansion_pending\"):\n        return 1, \"A scope expansion awaits approval.\"\n    return 2, \"Changes stay within scope.\"\n\n\ndef assumptions(d):\n    return (2, \"Assumptions are listed.\") if d.assumptions else (0, \"No assumptions are recorded.\")\n\n\ndef verification_quality(d):\n    if not d.verification.get(\"passed\", False):\n        return 0, \"The verification gate did not pass.\"\n    if not d.feedback.get(\"tests_match_requirement\", False):\n        return 1, \"The gate passed but the tests do not match the requirement.\"\n    return 2, \"Passing tests cover the requirement.\"\n\n\ndef handoff_readiness(d):\n    if not d.handoff.get(\"next_action\"):\n        return 0, \"No next action.\"\n    if not d.handoff.get(\"evidence_paths\"):\n        return 1, \"Next action without evidence references.\"\n    return 2, \"Next action and evidence are present.\"\n\n\nSCORERS = {\"problem_fit\": problem_fit, \"scope_discipline\": scope_discipline, \"assumptions\": assumptions, \"verification_quality\": verification_quality, \"handoff_readiness\": handoff_readiness}\n\n\ndef verdict(scores):\n    for k in DIMENSIONS:\n        if k not in scores:\n            raise ValueError(f\"missing dimension {k}\")\n        v = scores[k]\n        if type(v) is not int or not 0 <= v <= 2:\n            raise ValueError(f\"{k} must be an int from 0 to 2\")\n    total = sum(scores[k] for k in DIMENSIONS)\n    if any(scores[k] == 0 for k in DIMENSIONS) or total < 5:\n        return total, \"hard_fail\"\n    return total, \"soft_fail\" if total <= 6 else \"pass\"\n\n\ndef review(d):\n    dims = {k: dict(zip((\"score\", \"finding\"), SCORERS[k](d))) for k in DIMENSIONS}\n    total, v = verdict({k: dims[k][\"score\"] for k in DIMENSIONS})\n    return {\"total\": total, \"verdict\": v, \"dimensions\": dims}"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "rv_1.py",
    "headingEn": "main(): five experiments",
    "headingKn": "main(): ಐದು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() reviews two cases, probes the hard-fail rule, enumerates all 243 combinations, feeds the verdict engine four bad scores and round-trips a report through JSON.",
    "descKn": "main() ಎರಡು ಪ್ರಕರಣ ಪರಿಶೀಲಿಸಿ, hard-fail ನಿಯಮ ಪರೀಕ್ಷಿಸಿ, ಎಲ್ಲಾ 243 ಸಂಯೋಜನೆ ಎಣಿಸಿ, ತೀರ್ಪು ಎಂಜಿನ್‌ಗೆ ನಾಲ್ಕು ತಪ್ಪು ಅಂಕ ನೀಡಿ, ವರದಿಯನ್ನು JSON ಮೂಲಕ round-trip ಮಾಡುತ್ತದೆ.",
    "code": "def main():\n    section(\"1. Genuinely running: a clean change and a wrong-problem change\")\n    for name, d in ((\"clean\", clean()), (\"wrong problem\", wrong_problem())):\n        r = review(d)\n        print(f\"{name:14} gate passed={d.verification['passed']!s:5} total={r['total']}/10 verdict={r['verdict']}\")\n        print(\"   \", {k: v[\"score\"] for k, v in r[\"dimensions\"].items()})\n    print(\"the wrong-problem change had a passing verification gate and still failed review: its total was 7 of 10, but a zero in problem fit forces hard_fail, so the high total could not outvote the one dimension that matters most\")\n\n    section(\"2. Genuinely checking: the hard-fail rule against the total\")\n    s = {k: 2 for k in DIMENSIONS}\n    print(\"all twos                         :\", verdict(s))\n    print(\"problem_fit zero, others two     :\", verdict(dict(s, problem_fit=0)))\n    print(\"everything one (total 5)         :\", verdict({k: 1 for k in DIMENSIONS}))\n    print(\"two dimensions zero, others one  :\", verdict(dict({k: 1 for k in DIMENSIONS}, problem_fit=0, assumptions=0)))\n    print(\"a single zero gave hard_fail with a total of 8, and a total of 5 with no zeros was a soft_fail, so the verdict depends on both the sum and the minimum\")\n\n    section(\"3. Genuinely measuring: all 243 possible score combinations\")\n    c = Counter(verdict(dict(zip(DIMENSIONS, combo)))[1] for combo in itertools.product((0, 1, 2), repeat=5))\n    print(dict(c), \"| total combinations:\", sum(c.values()))\n    print(\"pass needs every dimension at 1 or 2 and a total of at least 7; only\", c[\"pass\"], \"of 243 combinations pass, and\", c[\"hard_fail\"], \"are hard fails, so most of the score space is a rejection\")\n\n    section(\"4. Genuinely checking: bad scores are rejected, booleans included\")\n    for label, sc in ((\"True instead of 1\", dict(s, problem_fit=True)), (\"score 3\", dict(s, problem_fit=3)), (\"score 1.0\", dict(s, problem_fit=1.0)), (\"missing dimension\", {k: 2 for k in DIMENSIONS[:-1]})):\n        try:\n            verdict(sc)\n            print(f\"{label:20} accepted\")\n        except ValueError as e:\n            print(f\"{label:20} rejected: {e}\")\n    print(\"True is an int in Python and would have counted as 1, so the type is checked exactly; a verdict engine that accepted it could turn a boolean flag into a rubric score by accident\")\n\n    section(\"5. Genuinely checking: the report is serialisable evidence\")\n    out = json.dumps(review(wrong_problem()), indent=2)\n    back = json.loads(out)\n    print(\"round trip equal:\", back == review(wrong_problem()), \"| keys:\", sorted(back), \"| problem_fit:\", back[\"dimensions\"][\"problem_fit\"])\n    print(\"the report keeps the score and the finding side by side, so a builder can act on 'The original problem remains unsolved.' and a later session can see why the change was rejected; these findings are fixed strings chosen by the stub, not an analysis of any code\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: a clean change and a wrong-problem change ---\nclean          gate passed=True  total=10/10 verdict=pass\n    {'problem_fit': 2, 'scope_discipline': 2, 'assumptions': 2, 'verification_quality': 2, 'handoff_readiness': 2}\nwrong problem  gate passed=True  total=7/10 verdict=hard_fail\n    {'problem_fit': 0, 'scope_discipline': 2, 'assumptions': 2, 'verification_quality': 1, 'handoff_readiness': 2}\nthe wrong-problem change had a passing verification gate and still failed review: its total was 7 of 10, but a zero in problem fit forces hard_fail, so the high total could not outvote the one dimension that matters most\n\n--- 2. Genuinely checking: the hard-fail rule against the total ---\nall twos                         : (10, 'pass')\nproblem_fit zero, others two     : (8, 'hard_fail')\neverything one (total 5)         : (5, 'soft_fail')\ntwo dimensions zero, others one  : (3, 'hard_fail')\na single zero gave hard_fail with a total of 8, and a total of 5 with no zeros was a soft_fail, so the verdict depends on both the sum and the minimum\n\n--- 3. Genuinely measuring: all 243 possible score combinations ---\n{'hard_fail': 211, 'soft_fail': 6, 'pass': 26} | total combinations: 243\npass needs every dimension at 1 or 2 and a total of at least 7; only 26 of 243 combinations pass, and 211 are hard fails, so most of the score space is a rejection\n\n--- 4. Genuinely checking: bad scores are rejected, booleans included ---\nTrue instead of 1    rejected: problem_fit must be an int from 0 to 2\nscore 3              rejected: problem_fit must be an int from 0 to 2\nscore 1.0            rejected: problem_fit must be an int from 0 to 2\nmissing dimension    rejected: missing dimension handoff_readiness\nTrue is an int in Python and would have counted as 1, so the type is checked exactly; a verdict engine that accepted it could turn a boolean flag into a rubric score by accident\n\n--- 5. Genuinely checking: the report is serialisable evidence ---\nround trip equal: True | keys: ['dimensions', 'total', 'verdict'] | problem_fit: {'score': 0, 'finding': 'The original problem remains unsolved.'}\nthe report keeps the score and the finding side by side, so a builder can act on 'The original problem remains unsolved.' and a later session can see why the change was rejected; these findings are fixed strings chosen by the stub, not an analysis of any code"
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
    "headingEn": "Genuinely Found: A Passing Gate Did Not Save the Wrong-Problem Change",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಪಾಸ್ ಆದ Gate ತಪ್ಪು-ಸಮಸ್ಯೆ ಬದಲಾವಣೆಯನ್ನು ಉಳಿಸಲಿಲ್ಲ",
    "bodyEn": "Section 1: the clean change scored 10 of 10 and passed. The wrong-problem change had a passing gate, scored 7 of 10 and was hard_fail because problem_fit was 0 (verification_quality was 1). Section 2: all twos passed with 10; a single zero with the rest at two gave hard_fail at 8; all ones (total 5) gave soft_fail; two zeros gave hard_fail at 3.",
    "bodyKn": "ವಿಭಾಗ 1: ಸ್ವಚ್ಛ ಬದಲಾವಣೆ 10 ರಲ್ಲಿ 10 ಪಡೆದು ಪಾಸ್ ಆಯಿತು. ತಪ್ಪು-ಸಮಸ್ಯೆ ಬದಲಾವಣೆಗೆ gate ಪಾಸ್ ಆಗಿತ್ತು, 10 ರಲ್ಲಿ 7 ಪಡೆದು problem_fit 0 ಇದ್ದುದರಿಂದ hard_fail ಆಯಿತು (verification_quality 1 ಆಗಿತ್ತು). ವಿಭಾಗ 2: ಎಲ್ಲಾ ಎರಡು 10 ನೊಂದಿಗೆ ಪಾಸ್ ಆದವು; ಉಳಿದವು ಎರಡಿರುವಾಗ ಒಂದು ಸೊನ್ನೆ 8 ರಲ್ಲಿ hard_fail ನೀಡಿತು; ಎಲ್ಲಾ ಒಂದು (ಒಟ್ಟು 5) soft_fail ನೀಡಿತು; ಎರಡು ಸೊನ್ನೆ 3 ರಲ್ಲಿ hard_fail ನೀಡಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Most of the Score Space Rejects, and Booleans Are Not Scores",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಅಂಕ ಸ್ಥಳದ ಹೆಚ್ಚಿನ ಭಾಗ ತಿರಸ್ಕರಿಸುತ್ತದೆ, ಮತ್ತು Booleans ಅಂಕಗಳಲ್ಲ",
    "bodyEn": "Section 3: of 243 combinations, 26 were pass, 6 soft_fail and 211 hard_fail. Section 4: True instead of 1, a score of 3, a score of 1.0 and a missing dimension were each rejected. Section 5: the report survived a JSON round trip with its scores and findings; the findings are fixed strings chosen by the stub and are not an analysis of code.",
    "bodyKn": "ವಿಭಾಗ 3: 243 ಸಂಯೋಜನೆಗಳಲ್ಲಿ 26 pass, 6 soft_fail ಮತ್ತು 211 hard_fail ಆದವು. ವಿಭಾಗ 4: 1 ಬದಲು True, 3 ಅಂಕ, 1.0 ಅಂಕ ಮತ್ತು ಕಾಣೆಯಾದ ಆಯಾಮ ಪ್ರತಿಯೊಂದೂ ತಿರಸ್ಕೃತವಾದವು. ವಿಭಾಗ 5: ವರದಿ ತನ್ನ ಅಂಕಗಳು ಮತ್ತು findings ಜೊತೆ JSON round trip ಉಳಿಯಿತು; findings stub ಆಯ್ದ ನಿಶ್ಚಿತ ಸ್ಟ್ರಿಂಗ್‌ಗಳು, ಕೋಡ್‌ನ ವಿಶ್ಲೇಷಣೆಯಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A reviewer that judges fit, scope and verification quality catches the change that passes every configured check and still does not do the job.",
    "bodyKn": "ಸಮಸ್ಯೆ ಹೊಂದಾಣಿಕೆ, ವ್ಯಾಪ್ತಿ ಮತ್ತು ಪರಿಶೀಲನೆ ಗುಣಮಟ್ಟ ನಿರ್ಣಯಿಸುವ reviewer ಎಲ್ಲಾ ಸಂರಚಿತ ಪರಿಶೀಲನೆಗಳನ್ನು ಪಾಸ್ ಮಾಡಿಯೂ ಕೆಲಸ ಮಾಡದ ಬದಲಾವಣೆ ಹಿಡಿಯುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"a high total means a good change.\" A total of 8 was a hard fail because one dimension was 0.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಹೆಚ್ಚಿನ ಒಟ್ಟು ಎಂದರೆ ಒಳ್ಳೆಯ ಬದಲಾವಣೆ.\" ಒಂದು ಆಯಾಮ 0 ಆಗಿದ್ದುದರಿಂದ 8 ಒಟ್ಟು hard fail ಆಯಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Rubric: scored dimensions with a policy. Hard fail: a verdict forced by any zero or a low total. Soft fail: a total of 5 or 6 with no zero. Finding: the reason attached to a score. Builder and marker: separate roles.",
    "bodyKn": "Rubric: ನೀತಿ ಇರುವ ಅಂಕ ಆಯಾಮಗಳು. Hard fail: ಯಾವುದೇ ಸೊನ್ನೆ ಅಥವಾ ಕಡಿಮೆ ಒಟ್ಟಿನಿಂದ ಬಲವಂತ ತೀರ್ಪು. Soft fail: ಸೊನ್ನೆ ಇಲ್ಲದ 5 ಅಥವಾ 6 ಒಟ್ಟು. Finding: ಅಂಕಕ್ಕೆ ಜೋಡಿಸಿದ ಕಾರಣ. Builder ಮತ್ತು marker: ಪ್ರತ್ಯೇಕ ಪಾತ್ರಗಳು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) The wrong-problem change had a passing gate and still hard-failed. 2) One zero forced hard_fail at a total of 8. 3) 26 of 243 combinations pass. 4) A boolean is rejected as a score. 5) The report keeps scores and findings together.",
    "bodyKn": "1) ತಪ್ಪು-ಸಮಸ್ಯೆ ಬದಲಾವಣೆಗೆ gate ಪಾಸ್ ಆಗಿದ್ದರೂ hard-fail ಆಯಿತು. 2) ಒಂದು ಸೊನ್ನೆ 8 ಒಟ್ಟಿನಲ್ಲಿ hard_fail ಬಲವಂತಗೊಳಿಸಿತು. 3) 243 ರಲ್ಲಿ 26 ಸಂಯೋಜನೆ ಪಾಸ್. 4) boolean ಅಂಕವಾಗಿ ತಿರಸ್ಕೃತ. 5) ವರದಿ ಅಂಕ ಮತ್ತು findings ಒಟ್ಟಿಗೆ ಇಡುತ್ತದೆ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What was the total score of the wrong-problem change?",
      "qKn": "ತಪ್ಪು-ಸಮಸ್ಯೆ ಬದಲಾವಣೆಯ ಒಟ್ಟು ಅಂಕ ಎಷ್ಟು?",
      "opts": [
       "7",
       "10",
       "3",
       "0"
      ],
      "optsKn": [
       "7",
       "10",
       "3",
       "0"
      ],
      "correct": 0
     },
     {
      "q": "How many of the 243 combinations were pass?",
      "qKn": "243 ಸಂಯೋಜನೆಗಳಲ್ಲಿ ಎಷ್ಟು pass?",
      "opts": [
       "26",
       "211",
       "6",
       "243"
      ],
      "optsKn": [
       "26",
       "211",
       "6",
       "243"
      ],
      "correct": 0
     },
     {
      "q": "What verdict did all ones (total 5) give?",
      "qKn": "ಎಲ್ಲಾ ಒಂದು (ಒಟ್ಟು 5) ಯಾವ ತೀರ್ಪು ನೀಡಿತು?",
      "opts": [
       "soft_fail",
       "pass",
       "hard_fail",
       "error"
      ],
      "optsKn": [
       "soft_fail",
       "pass",
       "hard_fail",
       "ದೋಷ"
      ],
      "correct": 0
     },
     {
      "q": "Why is True rejected as a rubric score?",
      "qKn": "True ಅನ್ನು rubric ಅಂಕವಾಗಿ ಏಕೆ ತಿರಸ್ಕರಿಸಲಾಗುತ್ತದೆ?",
      "opts": [
       "It is a bool, which Python would treat as 1",
       "It is too large",
       "JSON forbids it",
       "It is negative"
      ],
      "optsKn": [
       "ಅದು bool, Python 1 ಎಂದು ಪರಿಗಣಿಸುತ್ತದೆ",
       "ಅದು ತುಂಬಾ ದೊಡ್ಡದು",
       "JSON ನಿಷೇಧಿಸುತ್ತದೆ",
       "ಅದು ಋಣಾತ್ಮಕ"
      ],
      "correct": 0
     },
     {
      "q": "Did the passing verification gate prevent the hard fail?",
      "qKn": "ಪಾಸ್ ಆದ ಪರಿಶೀಲನಾ gate hard fail ತಡೆಯಿತೇ?",
      "opts": [
       "No",
       "Yes",
       "Only for soft fails",
       "Only in strict mode"
      ],
      "optsKn": [
       "ಇಲ್ಲ",
       "ಹೌದು",
       "soft fail ಗೆ ಮಾತ್ರ",
       "strict ಕ್ರಮದಲ್ಲಿ ಮಾತ್ರ"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
