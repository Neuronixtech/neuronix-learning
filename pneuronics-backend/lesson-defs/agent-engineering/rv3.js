module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6366020ed05b321580",
 "order": 2,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Reviewer Agent (Part 3 of 3) — Isolation, Versions and Traceability",
 "titleKn": "Reviewer Agent (ಭಾಗ 3 / 3) — ಪ್ರತ್ಯೇಕತೆ, ಆವೃತ್ತಿಗಳು ಮತ್ತು ಪತ್ತೆಹಚ್ಚುವಿಕೆ",
 "desc": "Test what a frozen dataclass protects, contain a nosy reviewer with a deep copy, detect changes by hash and version the rubric.",
 "descKn": "frozen dataclass ಏನು ರಕ್ಷಿಸುತ್ತದೆ ಎಂದು ಪರೀಕ್ಷಿಸಿ, ಕುತೂಹಲಿ reviewer ಅನ್ನು deep copy ಯಿಂದ ಒಳಗೊಳ್ಳಿ, hash ಮೂಲಕ ಬದಲಾವಣೆ ಪತ್ತೆಹಚ್ಚಿ ಮತ್ತು rubric ಗೆ ಆವೃತ್ತಿ ನೀಡಿ.",
 "objectives": [
  "Know the limits of frozen dataclasses.",
  "Give the reviewer a deep copy.",
  "Hash evidence at start and end.",
  "Version the rubric.",
  "Record an input hash."
 ],
 "objectivesKn": [
  "frozen dataclasses ಮಿತಿ ತಿಳಿಯಿರಿ.",
  "reviewer ಗೆ deep copy ನೀಡಿ.",
  "ಆರಂಭ ಮತ್ತು ಕೊನೆಯಲ್ಲಿ ಸಾಕ್ಷ್ಯ hash ಮಾಡಿ.",
  "rubric ಗೆ ಆವೃತ್ತಿ ನೀಡಿ.",
  "input hash ದಾಖಲಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Reviewer Agent (Part 3 of 3)",
    "textKn": "Reviewer Agent (ಭಾಗ 3 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 3 of 3: keeping the reviewer a consumer of evidence: frozen-dataclass limits, deep copies and hashes, rubric versioning and a traceable report. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind the reviewer agent (rubric, hard-fail rule, independent evidence and isolation), not the real software, and the reviewer is a deterministic stub reading structured evidence and no language model is involved, so no real LLM behaviour is measured. Only part of this module's source was supplied: Part 2 was pasted in full, while Parts 1 and 3 arrived only as small fragments (a progress checklist and closing summaries), and the original main.py was not provided. The lessons are built from Part 2 and those fragments, and the labs are our own implementation. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 3ನೆಯದು: reviewer ಅನ್ನು ಸಾಕ್ಷ್ಯದ ಗ್ರಾಹಕನಾಗಿ ಇಡುವುದು: frozen-dataclass ಮಿತಿಗಳು, deep copies ಮತ್ತು hashes, rubric ಆವೃತ್ತಿ ಮತ್ತು ಪತ್ತೆಹಚ್ಚಬಹುದಾದ ವರದಿ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು reviewer agent (rubric, hard-fail ನಿಯಮ, ಸ್ವತಂತ್ರ ಸಾಕ್ಷ್ಯ ಮತ್ತು ಪ್ರತ್ಯೇಕತೆ) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು reviewer ರಚನಾತ್ಮಕ ಸಾಕ್ಷ್ಯ ಓದುವ ನಿರ್ಣಾಯಕ ಬದಲಿ ಮತ್ತು ಯಾವುದೇ ಭಾಷಾ ಮಾದರಿ ಇಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಈ ಮಾಡ್ಯೂಲ್‌ನ ಮೂಲದ ಒಂದು ಭಾಗ ಮಾತ್ರ ಒದಗಿಸಲಾಗಿತ್ತು: ಭಾಗ 2 ಪೂರ್ಣವಾಗಿ ಅಂಟಿಸಲಾಗಿತ್ತು, ಭಾಗ 1 ಮತ್ತು 3 ಸಣ್ಣ ತುಣುಕುಗಳಾಗಿ ಮಾತ್ರ ಬಂದವು (ಪ್ರಗತಿ ಪರಿಶೀಲನಾ ಪಟ್ಟಿ ಮತ್ತು ಮುಕ್ತಾಯ ಸಾರಾಂಶಗಳು), ಮತ್ತು ಮೂಲ main.py ಒದಗಿಸಲಿಲ್ಲ. lessons ಭಾಗ 2 ಮತ್ತು ಆ ತುಣುಕುಗಳಿಂದ ನಿರ್ಮಿತ, ಮತ್ತು ಲ್ಯಾಬ್‌ಗಳು ನಮ್ಮದೇ ಅನುಷ್ಠಾನ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "The Reviewer Must Not Edit What It Reviews",
    "textKn": "Reviewer ತಾನು ಪರಿಶೀಲಿಸುವುದನ್ನು ಸಂಪಾದಿಸಬಾರದು",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Isolation, Hashes and Versions",
    "headingKn": "ಪ್ರತ್ಯೇಕತೆ, Hashes ಮತ್ತು ಆವೃತ್ತಿಗಳು",
    "bodyEn": "A reviewer is a consumer of builder artifacts, not an editor of builder code. This part tests how far a frozen dataclass really protects evidence, lets a nosy reviewer rewrite a flag and shows that a deep copy contains it, detects a file changing during a review by hashing, measures how the same scores change verdict under two rubric versions and writes a report with version and input-hash fields.",
    "bodyKn": "reviewer builder ಕಲಾಕೃತಿಗಳ ಗ್ರಾಹಕ, builder ಕೋಡ್‌ನ ಸಂಪಾದಕನಲ್ಲ. ಈ ಭಾಗ frozen dataclass ಸಾಕ್ಷ್ಯವನ್ನು ನಿಜವಾಗಿ ಎಷ್ಟು ರಕ್ಷಿಸುತ್ತದೆ ಎಂದು ಪರೀಕ್ಷಿಸಿ, ಕುತೂಹಲಿ reviewer flag ಪುನಃಬರೆಯಲು ಬಿಟ್ಟು deep copy ಅದನ್ನು ಒಳಗೊಳ್ಳುತ್ತದೆ ಎಂದು ತೋರಿಸಿ, review ಸಮಯದಲ್ಲಿ ಫೈಲ್ ಬದಲಾವಣೆಯನ್ನು hashing ಮೂಲಕ ಪತ್ತೆಹಚ್ಚಿ, ಅದೇ ಅಂಕಗಳು ಎರಡು rubric ಆವೃತ್ತಿಗಳಲ್ಲಿ ತೀರ್ಪು ಹೇಗೆ ಬದಲಿಸುತ್ತವೆ ಎಂದು ಅಳೆದು, ಆವೃತ್ತಿ ಮತ್ತು input-hash ಕ್ಷೇತ್ರಗಳಿರುವ ವರದಿ ಬರೆಯುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Isolated, Versioned, Traceable",
    "headingKn": "ಪ್ರತ್ಯೇಕ, ಆವೃತ್ತಿಯುಕ್ತ, ಪತ್ತೆಹಚ್ಚಬಹುದಾದ",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">Isolated, versioned, traceable</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">deep copy</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">reviewer edits stay local</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">hash</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">start vs end</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">rubric version</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">comparable reviews</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">report</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">input hash + versions</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">a prompt is not a boundary</text></svg>",
    "captionEn": "A prompt is not a boundary.",
    "captionKn": "Prompt ಗಡಿಯಲ್ಲ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Protections and their limits",
    "headingKn": "ರಕ್ಷಣೆಗಳು ಮತ್ತು ಅವುಗಳ ಮಿತಿಗಳು",
    "headers": [
     "Protection",
     "Stops",
     "Does not stop"
    ],
    "rows": [
     [
      "frozen dataclass",
      "attribute assignment",
      "changes inside a dict it holds"
     ],
     [
      "deep copy",
      "edits reaching the original",
      "a reviewer misreading the copy"
     ],
     [
      "hash at start and end",
      "unnoticed changes",
      "the change itself or who made it"
     ],
     [
      "rubric version field",
      "comparing unlike reviews",
      "a wrong rubric"
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
    "filename": "rv_3.py",
    "headingEn": "digest, snapshot and the versioned verdict",
    "headingKn": "digest, snapshot ಮತ್ತು ಆವೃತ್ತಿಯುಕ್ತ ತೀರ್ಪು",
    "descEn": "digest hashes evidence as sorted JSON. snapshot builds a frozen object around a deep copy. verdict takes the pass and soft thresholds from a rubric version, with the zero rule fixed.",
    "descKn": "digest ಸಾಕ್ಷ್ಯವನ್ನು ವಿಂಗಡಿಸಿದ JSON ಆಗಿ hash ಮಾಡುತ್ತದೆ. snapshot deep copy ಸುತ್ತ frozen ವಸ್ತು ನಿರ್ಮಿಸುತ್ತದೆ. verdict pass ಮತ್ತು soft ಮಿತಿಗಳನ್ನು rubric ಆವೃತ್ತಿಯಿಂದ ತೆಗೆದುಕೊಳ್ಳುತ್ತದೆ, ಸೊನ್ನೆ ನಿಯಮ ನಿಶ್ಚಿತ.",
    "code": "def digest(obj):\n    return hashlib.sha256(json.dumps(obj, sort_keys=True).encode(\"utf-8\")).hexdigest()[:12]\n\n\ndef snapshot(inp):\n    return Inputs(inp.task, copy.deepcopy(inp.state))\n\n\ndef nosy_reviewer(inp):\n    inp.state[\"solves_requested_problem\"] = True\n    return \"reviewed\"\n\n\ndef verdict(total, minimum, pass_at, soft_at):\n    if minimum == 0 or total < soft_at:\n        return \"hard_fail\"\n    return \"soft_fail\" if total < pass_at else \"pass\"\n\n\nRUBRIC = {\"1.0\": {\"pass_at\": 7, \"soft_at\": 5}, \"1.1\": {\"pass_at\": 8, \"soft_at\": 6}}"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "rv_3.py",
    "headingEn": "main(): five experiments",
    "headingKn": "main(): ಐದು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() tries assignment and dict mutation on a frozen object, runs a nosy reviewer on the original and on a copy, hashes a file at start and end of a review, applies two rubric versions to four score patterns and writes a report.",
    "descKn": "main() frozen ವಸ್ತುವಿನ ಮೇಲೆ ನಿಯೋಜನೆ ಮತ್ತು dict ಬದಲಾವಣೆ ಪ್ರಯತ್ನಿಸಿ, ಕುತೂಹಲಿ reviewer ಅನ್ನು ಮೂಲ ಮತ್ತು ನಕಲಿನ ಮೇಲೆ ಓಡಿಸಿ, review ಆರಂಭ ಮತ್ತು ಕೊನೆಯಲ್ಲಿ ಫೈಲ್ hash ಮಾಡಿ, ನಾಲ್ಕು ಅಂಕ ಮಾದರಿಗಳಿಗೆ ಎರಡು rubric ಆವೃತ್ತಿ ಅನ್ವಯಿಸಿ ವರದಿ ಬರೆಯುತ್ತದೆ.",
    "code": "def main():\n    section(\"1. Genuinely checking: what 'frozen' protects\")\n    inp = Inputs(\"task\", {\"solves_requested_problem\": False})\n    try:\n        inp.task = \"other\"\n        print(\"assigning a field: allowed\")\n    except FrozenInstanceError:\n        print(\"assigning a field: FrozenInstanceError\")\n    try:\n        inp.state = {}\n    except FrozenInstanceError:\n        print(\"replacing the state dict: FrozenInstanceError\")\n    inp.state[\"solves_requested_problem\"] = True\n    print(\"mutating the dict inside the frozen object: allowed, state is now\", inp.state)\n    print(\"a frozen dataclass stops attribute assignment and not changes to the dict it holds, so a reviewer given such an object can still rewrite the evidence it is judging\")\n\n    section(\"2. Genuinely running: a reviewer that edits what it reviews\")\n    original = Inputs(\"task\", {\"solves_requested_problem\": False})\n    before = digest(original.state)\n    nosy_reviewer(original)\n    print(\"evidence hash before:\", before, \"| after the review:\", digest(original.state), \"| changed:\", before != digest(original.state))\n    given = Inputs(\"task\", {\"solves_requested_problem\": False})\n    snap = snapshot(given)\n    nosy_reviewer(snap)\n    print(\"same reviewer on a deep copy: original hash unchanged:\", digest(given.state) == before)\n    print(\"the edit reached the builder's evidence when the reviewer was handed the original and stayed in the copy otherwise; a prompt telling the reviewer not to edit files is not a boundary, an isolated copy with a recorded hash is\")\n\n    section(\"3. Genuinely running: a file-based evidence bundle and a tamper check\")\n    with tempfile.TemporaryDirectory() as d:\n        ev = Path(d) / \"feedback.json\"\n        ev.write_text(json.dumps({\"tests_match_requirement\": False}), encoding=\"utf-8\")\n        h = hashlib.sha256(ev.read_bytes()).hexdigest()[:12]\n        print(\"hash recorded when the review starts:\", h)\n        ev.write_text(json.dumps({\"tests_match_requirement\": True}), encoding=\"utf-8\")\n        h2 = hashlib.sha256(ev.read_bytes()).hexdigest()[:12]\n        print(\"hash when the review ends:\", h2, \"| evidence changed during the review:\", h != h2)\n    print(\"recording the hash at the start and comparing at the end detects a change but cannot say who made it or prevent it; preventing it needs permissions the reviewer does not have, which a local script cannot supply\")\n\n    section(\"4. Genuinely measuring: the same scores under two rubric versions\")\n    cases = {\"7 with no zero\": (7, 1), \"6 with no zero\": (6, 1), \"5 with no zero\": (5, 1), \"9 with a zero\": (9, 0)}\n    for name, (total, mn) in cases.items():\n        print(f\"{name:16}\", {v: verdict(total, mn, **p) for v, p in RUBRIC.items()})\n    print(\"the same scores were pass under version 1.0 and soft_fail under 1.1 for a total of 7, and a total of 5 moved from soft_fail to hard_fail; a report without a rubric version cannot be compared with one from before the change, and the zero rule gave hard_fail in both\")\n\n    section(\"5. Genuinely running: a report with traceability fields\")\n    evidence = {\"task\": \"task\", \"state\": {\"solves_requested_problem\": False}}\n    report = {\"rubric_version\": \"1.1\", \"reviewer_version\": \"stub-1\", \"input_hash\": digest(evidence), \"total\": 7, \"verdict\": verdict(7, 1, **RUBRIC[\"1.1\"])}\n    text = json.dumps(report, indent=2, ensure_ascii=False)\n    print(text)\n    print(\"the same evidence hashes to the same value on every run:\", digest(evidence) == digest(copy.deepcopy(evidence)), \"| a changed field changes it:\", digest(dict(evidence, task=\"x\")) != digest(evidence))\n    print(\"the version fields and input hash let a later session tell whether two reviews used the same rubric and the same evidence; the reviewer version here is a label we made up\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely checking: what 'frozen' protects ---\nassigning a field: FrozenInstanceError\nreplacing the state dict: FrozenInstanceError\nmutating the dict inside the frozen object: allowed, state is now {'solves_requested_problem': True}\na frozen dataclass stops attribute assignment and not changes to the dict it holds, so a reviewer given such an object can still rewrite the evidence it is judging\n\n--- 2. Genuinely running: a reviewer that edits what it reviews ---\nevidence hash before: 852947b3d4c6 | after the review: 636a5b5c4882 | changed: True\nsame reviewer on a deep copy: original hash unchanged: True\nthe edit reached the builder's evidence when the reviewer was handed the original and stayed in the copy otherwise; a prompt telling the reviewer not to edit files is not a boundary, an isolated copy with a recorded hash is\n\n--- 3. Genuinely running: a file-based evidence bundle and a tamper check ---\nhash recorded when the review starts: cf8820747e97\nhash when the review ends: b1a38b8afe13 | evidence changed during the review: True\nrecording the hash at the start and comparing at the end detects a change but cannot say who made it or prevent it; preventing it needs permissions the reviewer does not have, which a local script cannot supply\n\n--- 4. Genuinely measuring: the same scores under two rubric versions ---\n7 with no zero   {'1.0': 'pass', '1.1': 'soft_fail'}\n6 with no zero   {'1.0': 'soft_fail', '1.1': 'soft_fail'}\n5 with no zero   {'1.0': 'soft_fail', '1.1': 'hard_fail'}\n9 with a zero    {'1.0': 'hard_fail', '1.1': 'hard_fail'}\nthe same scores were pass under version 1.0 and soft_fail under 1.1 for a total of 7, and a total of 5 moved from soft_fail to hard_fail; a report without a rubric version cannot be compared with one from before the change, and the zero rule gave hard_fail in both\n\n--- 5. Genuinely running: a report with traceability fields ---\n{\n  \"rubric_version\": \"1.1\",\n  \"reviewer_version\": \"stub-1\",\n  \"input_hash\": \"002fed74fed5\",\n  \"total\": 7,\n  \"verdict\": \"soft_fail\"\n}\nthe same evidence hashes to the same value on every run: True | a changed field changes it: True\nthe version fields and input hash let a later session tell whether two reviews used the same rubric and the same evidence; the reviewer version here is a label we made up"
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
    "headingEn": "Genuinely Found: Frozen Did Not Freeze the Evidence",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Frozen ಸಾಕ್ಷ್ಯವನ್ನು ಹೆಪ್ಪುಗಟ್ಟಿಸಲಿಲ್ಲ",
    "bodyEn": "Section 1 (Python 3.14): assigning a field and replacing the state dict both raised FrozenInstanceError, while changing a value inside the dict was allowed. Section 2: a nosy reviewer changed the evidence hash when given the original, and the original hash stayed the same when it was given a deep copy. Section 3: a hash taken at the start of a review differed from the one at the end after the file was rewritten.",
    "bodyKn": "ವಿಭಾಗ 1 (Python 3.14): ಕ್ಷೇತ್ರ ನಿಯೋಜಿಸುವುದು ಮತ್ತು state dict ಬದಲಿಸುವುದು ಎರಡೂ FrozenInstanceError ಎತ್ತಿದವು, ಆದರೆ dict ಒಳಗಿನ ಮೌಲ್ಯ ಬದಲಿಸುವುದು ಅನುಮತಿಸಲ್ಪಟ್ಟಿತು. ವಿಭಾಗ 2: ಕುತೂಹಲಿ reviewer ಮೂಲ ನೀಡಿದಾಗ ಸಾಕ್ಷ್ಯ hash ಬದಲಿಸಿತು, ಮತ್ತು deep copy ನೀಡಿದಾಗ ಮೂಲ hash ಒಂದೇ ಉಳಿಯಿತು. ವಿಭಾಗ 3: review ಆರಂಭದಲ್ಲಿ ತೆಗೆದ hash ಫೈಲ್ ಪುನಃಬರೆದ ನಂತರ ಕೊನೆಯ hash ಗಿಂತ ಭಿನ್ನವಾಗಿತ್ತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: The Same Scores, Two Verdicts",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಅದೇ ಅಂಕಗಳು, ಎರಡು ತೀರ್ಪುಗಳು",
    "bodyEn": "Section 4: a total of 7 with no zero was pass under rubric 1.0 and soft_fail under 1.1; a total of 5 moved from soft_fail to hard_fail; 6 stayed soft_fail; a total of 9 with a zero was hard_fail under both. Section 5: the report carried rubric_version 1.1, a stub reviewer label, a 12-character input hash and the verdict, and the same evidence always produced the same hash while a changed field changed it.",
    "bodyKn": "ವಿಭಾಗ 4: ಸೊನ್ನೆ ಇಲ್ಲದ ಒಟ್ಟು 7 rubric 1.0 ನಲ್ಲಿ pass ಮತ್ತು 1.1 ನಲ್ಲಿ soft_fail ಆಯಿತು; ಒಟ್ಟು 5 soft_fail ನಿಂದ hard_fail ಗೆ ಹೋಯಿತು; 6 soft_fail ಆಗಿಯೇ ಉಳಿಯಿತು; ಸೊನ್ನೆ ಇರುವ ಒಟ್ಟು 9 ಎರಡರಲ್ಲೂ hard_fail ಆಯಿತು. ವಿಭಾಗ 5: ವರದಿ rubric_version 1.1, stub reviewer ಲೇಬಲ್, 12-ಅಕ್ಷರ input hash ಮತ್ತು ತೀರ್ಪು ಹೊಂದಿತ್ತು, ಮತ್ತು ಅದೇ ಸಾಕ್ಷ್ಯ ಯಾವಾಗಲೂ ಅದೇ hash ನೀಡಿ ಬದಲಾದ ಕ್ಷೇತ್ರ ಅದನ್ನು ಬದಲಿಸಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "Isolation, change detection and version fields turn \"the reviewer was told not to edit\" into something a later session can check.",
    "bodyKn": "ಪ್ರತ್ಯೇಕತೆ, ಬದಲಾವಣೆ ಪತ್ತೆ ಮತ್ತು ಆವೃತ್ತಿ ಕ್ಷೇತ್ರಗಳು \"reviewer ಗೆ ಸಂಪಾದಿಸಬೇಡಿ ಎಂದು ಹೇಳಲಾಗಿತ್ತು\" ಅನ್ನು ನಂತರದ ಸೆಷನ್ ಪರಿಶೀಲಿಸಬಹುದಾದದ್ದಾಗಿ ಮಾರ್ಪಡಿಸುತ್ತವೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"a frozen dataclass makes the evidence immutable.\" The dict inside it changed.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"frozen dataclass ಸಾಕ್ಷ್ಯವನ್ನು ಬದಲಾಗದಂತೆ ಮಾಡುತ್ತದೆ.\" ಅದರೊಳಗಿನ dict ಬದಲಾಯಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Frozen dataclass: blocks attribute assignment only. Deep copy: an independent duplicate. Input hash: a digest of the evidence reviewed. Rubric version: the label of the scoring policy. Traceability: being able to tell what a verdict was based on.",
    "bodyKn": "Frozen dataclass: ಕ್ಷೇತ್ರ ನಿಯೋಜನೆ ಮಾತ್ರ ತಡೆಯುತ್ತದೆ. Deep copy: ಸ್ವತಂತ್ರ ನಕಲು. Input hash: ಪರಿಶೀಲಿಸಿದ ಸಾಕ್ಷ್ಯದ digest. Rubric version: ಅಂಕ ನೀತಿಯ ಲೇಬಲ್. Traceability: ತೀರ್ಪು ಯಾವುದರ ಮೇಲೆ ಆಧರಿಸಿತ್ತು ಎಂದು ಹೇಳಬಲ್ಲ ಸಾಮರ್ಥ್ಯ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) A frozen dataclass allowed a change inside its dict. 2) A nosy reviewer altered the original evidence and not a deep copy. 3) A hash comparison detected a file change during review. 4) A total of 7 passed under rubric 1.0 and soft-failed under 1.1. 5) The report carries versions and an input hash.",
    "bodyKn": "1) frozen dataclass ತನ್ನ dict ಒಳಗಿನ ಬದಲಾವಣೆ ಅನುಮತಿಸಿತು. 2) ಕುತೂಹಲಿ reviewer ಮೂಲ ಸಾಕ್ಷ್ಯ ಬದಲಿಸಿತು, deep copy ಅಲ್ಲ. 3) hash ಹೋಲಿಕೆ review ಸಮಯದ ಫೈಲ್ ಬದಲಾವಣೆ ಪತ್ತೆಹಚ್ಚಿತು. 4) ಒಟ್ಟು 7 rubric 1.0 ನಲ್ಲಿ ಪಾಸ್ ಆಗಿ 1.1 ನಲ್ಲಿ soft-fail ಆಯಿತು. 5) ವರದಿ ಆವೃತ್ತಿಗಳು ಮತ್ತು input hash ಹೊಂದಿದೆ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What did a frozen dataclass allow?",
      "qKn": "frozen dataclass ಏನನ್ನು ಅನುಮತಿಸಿತು?",
      "opts": [
       "Changing a value inside its dict",
       "Assigning a field",
       "Replacing the dict",
       "Nothing"
      ],
      "optsKn": [
       "ಅದರ dict ಒಳಗಿನ ಮೌಲ್ಯ ಬದಲಿಸುವುದು",
       "ಕ್ಷೇತ್ರ ನಿಯೋಜಿಸುವುದು",
       "dict ಬದಲಿಸುವುದು",
       "ಯಾವುದೂ ಇಲ್ಲ"
      ],
      "correct": 0
     },
     {
      "q": "What happened to the original evidence hash when the nosy reviewer got a deep copy?",
      "qKn": "ಕುತೂಹಲಿ reviewer ಗೆ deep copy ಸಿಕ್ಕಾಗ ಮೂಲ ಸಾಕ್ಷ್ಯ hash ಗೆ ಏನಾಯಿತು?",
      "opts": [
       "It stayed the same",
       "It changed",
       "It was deleted",
       "It was signed"
      ],
      "optsKn": [
       "ಒಂದೇ ಉಳಿಯಿತು",
       "ಬದಲಾಯಿತು",
       "ಅಳಿಸಲ್ಪಟ್ಟಿತು",
       "ಸಹಿ ಮಾಡಲಾಯಿತು"
      ],
      "correct": 0
     },
     {
      "q": "What verdict did a total of 7 with no zero get under rubric 1.1?",
      "qKn": "ಸೊನ್ನೆ ಇಲ್ಲದ ಒಟ್ಟು 7 ಕ್ಕೆ rubric 1.1 ನಲ್ಲಿ ಯಾವ ತೀರ್ಪು ಸಿಕ್ಕಿತು?",
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
      "q": "Can a start-and-end hash comparison say who changed the evidence?",
      "qKn": "ಆರಂಭ-ಮತ್ತು-ಕೊನೆ hash ಹೋಲಿಕೆ ಸಾಕ್ಷ್ಯ ಯಾರು ಬದಲಿಸಿದರು ಎಂದು ಹೇಳಬಲ್ಲದೇ?",
      "opts": [
       "No",
       "Yes",
       "Only for files",
       "Only for dicts"
      ],
      "optsKn": [
       "ಇಲ್ಲ",
       "ಹೌದು",
       "ಫೈಲ್‌ಗಳಿಗೆ ಮಾತ್ರ",
       "dicts ಗೆ ಮಾತ್ರ"
      ],
      "correct": 0
     },
     {
      "q": "Why record the rubric version in the report?",
      "qKn": "ವರದಿಯಲ್ಲಿ rubric ಆವೃತ್ತಿ ಏಕೆ ದಾಖಲಿಸಬೇಕು?",
      "opts": [
       "So reviews can be compared fairly",
       "To speed up scoring",
       "To hide scores",
       "To change thresholds"
      ],
      "optsKn": [
       "reviews ಅನ್ನು ನ್ಯಾಯವಾಗಿ ಹೋಲಿಸಲು",
       "ಅಂಕ ವೇಗಗೊಳಿಸಲು",
       "ಅಂಕ ಮರೆಮಾಡಲು",
       "ಮಿತಿ ಬದಲಿಸಲು"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
