module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6366020ed05b321583",
 "order": 1,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Multi-Session Handoff (Part 2 of 3) — Validating a Handoff Before Resuming",
 "titleKn": "ಬಹು-ಸೆಷನ್ ಹಸ್ತಾಂತರ (ಭಾಗ 2 / 3) — ಪುನರಾರಂಭಿಸುವ ಮುನ್ನ ಹಸ್ತಾಂತರ ಮಾನ್ಯಗೊಳಿಸುವುದು",
 "desc": "Validate a loaded handoff for parse errors, wrong types, dangling pointers, Markdown drift and a summary that contradicts its evidence.",
 "descKn": "ಲೋಡ್ ಮಾಡಿದ ಹಸ್ತಾಂತರವನ್ನು parse ದೋಷ, ತಪ್ಪು ಪ್ರಕಾರ, ನೇತಾಡುವ ಸೂಚಕ, Markdown ಚಲನೆ ಮತ್ತು ಸಾಕ್ಷ್ಯಕ್ಕೆ ವಿರೋಧವಾದ summary ಗಾಗಿ ಮಾನ್ಯಗೊಳಿಸಿ.",
 "objectives": [
  "Parse and type-check a handoff.",
  "Verify pointers exist.",
  "Detect Markdown drift.",
  "Prefer evidence over summary.",
  "Refuse unusable packets."
 ],
 "objectivesKn": [
  "ಹಸ್ತಾಂತರ parse ಮತ್ತು ಪ್ರಕಾರ-ಪರಿಶೀಲಿಸಿ.",
  "ಸೂಚಕಗಳು ಇವೆಯೇ ಪರಿಶೀಲಿಸಿ.",
  "Markdown ಚಲನೆ ಪತ್ತೆಹಚ್ಚಿ.",
  "summary ಗಿಂತ ಸಾಕ್ಷ್ಯಕ್ಕೆ ಆದ್ಯತೆ ನೀಡಿ.",
  "ಬಳಸಲಾಗದ ಪ್ಯಾಕೆಟ್‌ಗಳನ್ನು ನಿರಾಕರಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Multi-Session Handoff (Part 2 of 3)",
    "textKn": "ಬಹು-ಸೆಷನ್ ಹಸ್ತಾಂತರ (ಭಾಗ 2 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 2 of 3: the consumer side: validating a loaded handoff for parse errors, missing or mistyped fields, dangling pointers, Markdown drift and summary-versus-evidence contradictions. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind multi-session handoff (the seven-field packet, consumer validation, staleness and safe publication), not the real software, and the workbench artifacts are made up by the lab and no language model is involved, so no real LLM behaviour is measured. The pasted lesson said its original main.py was not supplied, so the lab is our own implementation of the behaviour it describes; results depend on the machine it ran on. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 2ನೆಯದು: ಗ್ರಾಹಕ ಬದಿ: ಲೋಡ್ ಮಾಡಿದ ಹಸ್ತಾಂತರವನ್ನು parse ದೋಷ, ಕಾಣೆಯಾದ ಅಥವಾ ತಪ್ಪು ಪ್ರಕಾರದ ಕ್ಷೇತ್ರ, ನೇತಾಡುವ ಸೂಚಕ, Markdown ಚಲನೆ ಮತ್ತು summary-ವಿರುದ್ಧ-ಸಾಕ್ಷ್ಯ ವಿರೋಧಾಭಾಸಗಳಿಗಾಗಿ ಮಾನ್ಯಗೊಳಿಸುವುದು. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು ಬಹು-ಸೆಷನ್ ಹಸ್ತಾಂತರ (ಏಳು-ಕ್ಷೇತ್ರ ಪ್ಯಾಕೆಟ್, ಗ್ರಾಹಕ ಮಾನ್ಯೀಕರಣ, ಹಳೆಯದಾಗುವಿಕೆ ಮತ್ತು ಸುರಕ್ಷಿತ ಪ್ರಕಟಣೆ) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು workbench ಕಲಾಕೃತಿಗಳನ್ನು ಲ್ಯಾಬ್ ಕಲ್ಪಿಸಿದ್ದು ಮತ್ತು ಯಾವುದೇ ಭಾಷಾ ಮಾದರಿ ಇಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಅಂಟಿಸಿದ lesson ತನ್ನ ಮೂಲ main.py ಒದಗಿಸಿಲ್ಲ ಎಂದು ಹೇಳಿತ್ತು, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್ ಅದು ವಿವರಿಸುವ ವರ್ತನೆಯ ನಮ್ಮದೇ ಅನುಷ್ಠಾನ; ಫಲಿತಾಂಶಗಳು ಅದು ಓಡಿದ ಯಂತ್ರವನ್ನು ಅವಲಂಬಿಸಿವೆ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Producers Make Mistakes and Files Age",
    "textKn": "ಉತ್ಪಾದಕರು ತಪ್ಪು ಮಾಡುತ್ತಾರೆ ಮತ್ತು ಫೈಲ್‌ಗಳು ಹಳೆಯದಾಗುತ್ತವೆ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Validate Before You Resume",
    "headingKn": "ಪುನರಾರಂಭಿಸುವ ಮುನ್ನ ಮಾನ್ಯಗೊಳಿಸಿ",
    "bodyEn": "A packet that was valid when written may be damaged, hand-edited or pointing at deleted files by the time a fresh session reads it. This part loads handoffs from a temporary project and tests what the resuming session should check: that the JSON parses, that each field has the right type, that the report and changed files still exist, that the Markdown still matches the JSON and that the summary agrees with the evidence it points to.",
    "bodyKn": "ಬರೆದಾಗ ಮಾನ್ಯವಾಗಿದ್ದ ಪ್ಯಾಕೆಟ್ ಹೊಸ ಸೆಷನ್ ಓದುವ ವೇಳೆಗೆ ಹಾಳಾಗಿರಬಹುದು, ಕೈಯಿಂದ ಸಂಪಾದಿಸಲ್ಪಟ್ಟಿರಬಹುದು ಅಥವಾ ಅಳಿಸಿದ ಫೈಲ್‌ಗಳತ್ತ ತೋರಿಸುತ್ತಿರಬಹುದು. ಈ ಭಾಗ ತಾತ್ಕಾಲಿಕ ಪ್ರಾಜೆಕ್ಟ್‌ನಿಂದ ಹಸ್ತಾಂತರಗಳನ್ನು ಲೋಡ್ ಮಾಡಿ ಪುನರಾರಂಭಿಸುವ ಸೆಷನ್ ಏನು ಪರಿಶೀಲಿಸಬೇಕು ಎಂದು ಪರೀಕ್ಷಿಸುತ್ತದೆ: JSON parse ಆಗುತ್ತದೆಯೇ, ಪ್ರತಿ ಕ್ಷೇತ್ರ ಸರಿಯಾದ ಪ್ರಕಾರ ಹೊಂದಿದೆಯೇ, ವರದಿ ಮತ್ತು ಬದಲಾದ ಫೈಲ್‌ಗಳು ಇನ್ನೂ ಇವೆಯೇ, Markdown ಇನ್ನೂ JSON ಗೆ ಹೊಂದುತ್ತದೆಯೇ ಮತ್ತು summary ಅದು ತೋರಿಸುವ ಸಾಕ್ಷ್ಯದೊಂದಿಗೆ ಒಪ್ಪುತ್ತದೆಯೇ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "The Consumer Validates Too",
    "headingKn": "ಗ್ರಾಹಕನೂ ಮಾನ್ಯಗೊಳಿಸುತ್ತಾನೆ",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">The consumer validates too</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">parse</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">JSON</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">types</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">list is not str</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">pointers</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">files exist</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">evidence</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">outranks the summary</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">valid JSON is not a usable handoff</text></svg>",
    "captionEn": "Valid JSON is not a usable handoff.",
    "captionKn": "ಮಾನ್ಯ JSON ಬಳಸಬಹುದಾದ ಹಸ್ತಾಂತರವಲ್ಲ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "What the consumer checks",
    "headingKn": "ಗ್ರಾಹಕ ಏನು ಪರಿಶೀಲಿಸುತ್ತಾನೆ",
    "headers": [
     "Check",
     "Catches",
     "Example in the lab"
    ],
    "rows": [
     [
      "parse",
      "truncated or wrong-shaped files",
      "JSONDecodeError, a list at the top"
     ],
     [
      "field types",
      "a string where a list belongs",
      "commands_run as a string"
     ],
     [
      "pointers",
      "deleted reports or files",
      "gone/verdict.json"
     ],
     [
      "regeneration",
      "hand-edited Markdown",
      "next_action changed"
     ],
     [
      "verdict file",
      "summary contradicting evidence",
      "passed is false"
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
    "filename": "ms_2.py",
    "headingEn": "load, check_pointers and render_md",
    "headingKn": "load, check_pointers ಮತ್ತು render_md",
    "descEn": "load parses the file and checks every field with an exact type test, returning the packet and a list of errors. check_pointers verifies that the verdict pointer and each changed file exist. render_md rebuilds the Markdown from the JSON for comparison.",
    "descKn": "load ಫೈಲ್ parse ಮಾಡಿ ಪ್ರತಿ ಕ್ಷೇತ್ರವನ್ನು ನಿಖರ ಪ್ರಕಾರ ಪರೀಕ್ಷೆಯಿಂದ ಪರಿಶೀಲಿಸಿ ಪ್ಯಾಕೆಟ್ ಮತ್ತು ದೋಷಗಳ ಪಟ್ಟಿ ಮರಳಿಸುತ್ತದೆ. check_pointers verdict ಸೂಚಕ ಮತ್ತು ಪ್ರತಿ ಬದಲಾದ ಫೈಲ್ ಇದೆಯೇ ಎಂದು ಪರಿಶೀಲಿಸುತ್ತದೆ. render_md ಹೋಲಿಕೆಗಾಗಿ JSON ನಿಂದ Markdown ಮರುನಿರ್ಮಿಸುತ್ತದೆ.",
    "code": "def load(path):\n    try:\n        data = json.loads(Path(path).read_text(encoding=\"utf-8\"))\n    except (OSError, json.JSONDecodeError) as e:\n        return None, [f\"cannot read handoff: {type(e).__name__}\"]\n    if not isinstance(data, dict):\n        return None, [\"handoff is not an object\"]\n    errs = []\n    for k, t in FIELDS.items():\n        if k not in data:\n            errs.append(f\"missing {k}\")\n        elif type(data[k]) is not t:\n            errs.append(f\"{k} should be {t.__name__}, got {type(data[k]).__name__}\")\n    if not errs and not data[\"next_action\"].strip():\n        errs.append(\"next_action is blank\")\n    return data, errs\n\n\ndef check_pointers(data, root):\n    errs = []\n    if not (root / data[\"verdict_pointer\"]).is_file():\n        errs.append(f\"verdict_pointer target is missing: {data['verdict_pointer']}\")\n    for f in data[\"changed_files\"]:\n        if not (root / f).is_file():\n            errs.append(f\"changed file not found: {f}\")\n    return errs\n\n\ndef render_md(d):\n    return chr(10).join(f\"{k}: {d[k]}\" for k in FIELDS)"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "ms_2.py",
    "headingEn": "main(): five experiments",
    "headingKn": "main(): ಐದು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() loads a valid and two unreadable files, four bad packets, a packet with dangling pointers, a Markdown rendering compared after an edit and a summary against its verdict file.",
    "descKn": "main() ಒಂದು ಮಾನ್ಯ ಮತ್ತು ಎರಡು ಓದಲಾಗದ ಫೈಲ್, ನಾಲ್ಕು ಕೆಟ್ಟ ಪ್ಯಾಕೆಟ್, ನೇತಾಡುವ ಸೂಚಕಗಳ ಪ್ಯಾಕೆಟ್, ಸಂಪಾದನೆ ನಂತರ ಹೋಲಿಸಿದ Markdown ರೂಪ ಮತ್ತು summary ಅನ್ನು ಅದರ verdict ಫೈಲ್ ವಿರುದ್ಧ ಲೋಡ್ ಮಾಡುತ್ತದೆ.",
    "code": "def main():\n    with tempfile.TemporaryDirectory() as d:\n        root = Path(d)\n        (root / \"src\").mkdir()\n        (root / \"src/a.py\").write_text(\"x\", encoding=\"utf-8\")\n        (root / \"verdict.json\").write_text(\"{}\", encoding=\"utf-8\")\n        h = root / \"handoff.json\"\n\n        section(\"1. Genuinely running: the resuming session validates what it loads\")\n        h.write_text(json.dumps(good()), encoding=\"utf-8\")\n        data, errs = load(h)\n        print(\"valid handoff: errors\", errs, \"| pointer errors\", check_pointers(data, root))\n        h.write_text(\"{truncated\", encoding=\"utf-8\")\n        print(\"malformed JSON:\", load(h)[1])\n        h.write_text(json.dumps([1, 2]), encoding=\"utf-8\")\n        print(\"wrong top-level shape:\", load(h)[1])\n        print(\"the consumer refuses a file it cannot parse and says why, instead of starting work from a half-read packet\")\n\n        section(\"2. Genuinely running: missing and mistyped fields\")\n        for label, mut in ((\"missing open_risks\", lambda g: g.pop(\"open_risks\")), (\"commands_run is a string\", lambda g: g.update(commands_run=\"python -m unittest\")),\n                           (\"next_action is blank\", lambda g: g.update(next_action=\" \")), (\"next_action is None\", lambda g: g.update(next_action=None))):\n            g = good()\n            mut(g)\n            h.write_text(json.dumps(g), encoding=\"utf-8\")\n            print(f\"{label:26}\", load(h)[1])\n        print(\"list('python -m unittest') in Python splits the string into characters:\", len(list(\"python -m unittest\")), \"items; a consumer that iterated a string commands_run would have replayed each letter as a command, which is why the type is checked and not just the presence\")\n\n        section(\"3. Genuinely running: pointers that no longer resolve\")\n        g = good()\n        g[\"verdict_pointer\"] = \"gone/verdict.json\"\n        g[\"changed_files\"] = [\"src/a.py\", \"src/deleted.py\"]\n        h.write_text(json.dumps(g), encoding=\"utf-8\")\n        data, errs = load(h)\n        print(\"schema errors:\", errs)\n        for e in check_pointers(data, root):\n            print(\"pointer error:\", e)\n        print(\"the packet was valid JSON with every field and still pointed at a report and a file that were not there, so schema validity is not the same as the handoff being usable; the resuming session has to check that its evidence exists\")\n\n        section(\"4. Genuinely measuring: Markdown that drifts from the JSON\")\n        g = good()\n        h.write_text(json.dumps(g), encoding=\"utf-8\")\n        md = render_md(g)\n        edited = md.replace(\"Run python -m unittest.\", \"Deploy to production.\")\n        print(\"regenerated Markdown equals the shipped Markdown:\", render_md(load(h)[0]) == md)\n        print(\"after the Markdown next_action is edited (simulated by a string replacement):\", render_md(load(h)[0]) == edited)\n        print(\"next_action in the JSON still says:\", load(h)[0][\"next_action\"])\n        print(\"a hand-edited Markdown file and the JSON now disagree and nothing in the pipeline noticed until the comparison was run; the JSON is the source the agent reads, so the Markdown should be regenerated and never edited, and a check that regenerates and compares finds drift\")\n\n        section(\"5. Genuinely checking: a resuming session never trusts the summary alone\")\n        g = good()\n        g[\"summary\"] = \"All tests pass and the task is complete.\"\n        g[\"verdict_pointer\"] = \"verdict.json\"\n        (root / \"verdict.json\").write_text(json.dumps({\"approved\": False, \"passed\": False}), encoding=\"utf-8\")\n        h.write_text(json.dumps(g), encoding=\"utf-8\")\n        data, errs = load(h)\n        verdict = json.loads((root / data[\"verdict_pointer\"]).read_text(encoding=\"utf-8\"))\n        print(\"summary says:\", data[\"summary\"])\n        print(\"verdict file says:\", verdict)\n        print(\"summary claims completion:\", \"complete\" in data[\"summary\"], \"| verdict agrees:\", verdict[\"passed\"])\n        print(\"the summary and the report it points to contradicted each other, and only reading the pointer revealed that; the packet is a pointer to evidence and the evidence outranks the prose\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: the resuming session validates what it loads ---\nvalid handoff: errors [] | pointer errors []\nmalformed JSON: ['cannot read handoff: JSONDecodeError']\nwrong top-level shape: ['handoff is not an object']\nthe consumer refuses a file it cannot parse and says why, instead of starting work from a half-read packet\n\n--- 2. Genuinely running: missing and mistyped fields ---\nmissing open_risks         ['missing open_risks']\ncommands_run is a string   ['commands_run should be list, got str']\nnext_action is blank       ['next_action is blank']\nnext_action is None        ['next_action should be str, got NoneType']\nlist('python -m unittest') in Python splits the string into characters: 18 items; a consumer that iterated a string commands_run would have replayed each letter as a command, which is why the type is checked and not just the presence\n\n--- 3. Genuinely running: pointers that no longer resolve ---\nschema errors: []\npointer error: verdict_pointer target is missing: gone/verdict.json\npointer error: changed file not found: src/deleted.py\nthe packet was valid JSON with every field and still pointed at a report and a file that were not there, so schema validity is not the same as the handoff being usable; the resuming session has to check that its evidence exists\n\n--- 4. Genuinely measuring: Markdown that drifts from the JSON ---\nregenerated Markdown equals the shipped Markdown: True\nafter the Markdown next_action is edited (simulated by a string replacement): False\nnext_action in the JSON still says: Run python -m unittest.\na hand-edited Markdown file and the JSON now disagree and nothing in the pipeline noticed until the comparison was run; the JSON is the source the agent reads, so the Markdown should be regenerated and never edited, and a check that regenerates and compares finds drift\n\n--- 5. Genuinely checking: a resuming session never trusts the summary alone ---\nsummary says: All tests pass and the task is complete.\nverdict file says: {'approved': False, 'passed': False}\nsummary claims completion: True | verdict agrees: False\nthe summary and the report it points to contradicted each other, and only reading the pointer revealed that; the packet is a pointer to evidence and the evidence outranks the prose"
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
    "headingEn": "Experiment 1: The resuming session validates what it loads",
    "headingKn": "ಪ್ರಯೋಗ 1: The resuming session validates what it loads",
    "bodyEn": "What it ran: The resuming session validates what it loads. What the lab concluded: the consumer refuses a file it cannot parse and says why, instead of starting work from a half-read packet",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: The resuming session validates what it loads. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the consumer refuses a file it cannot parse and says why, instead of starting work from a half-read packet"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. Genuinely running: the resuming session validates what it loads ---\nvalid handoff: errors [] | pointer errors []\nmalformed JSON: ['cannot read handoff: JSONDecodeError']\nwrong top-level shape: ['handoff is not an object']"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: Missing and mistyped fields",
    "headingKn": "ಪ್ರಯೋಗ 2: Missing and mistyped fields",
    "bodyEn": "What it ran: Missing and mistyped fields. What the lab concluded: list('python -m unittest') in Python splits the string into characters: 18 items; a consumer that iterated a string commands_run would have replayed each letter as a command, which is why the type is checked and not just the presence",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Missing and mistyped fields. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): list('python -m unittest') in Python splits the string into characters: 18 items; a consumer that iterated a string commands_run would have replayed each letter as a command, which is why the type is checked and not just the presence"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely running: missing and mistyped fields ---\nmissing open_risks         ['missing open_risks']\ncommands_run is a string   ['commands_run should be list, got str']\nnext_action is blank       ['next_action is blank']\nnext_action is None        ['next_action should be str, got NoneType']"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: Pointers that no longer resolve",
    "headingKn": "ಪ್ರಯೋಗ 3: Pointers that no longer resolve",
    "bodyEn": "What it ran: Pointers that no longer resolve. What the lab concluded: the packet was valid JSON with every field and still pointed at a report and a file that were not there, so schema validity is not the same as the handoff being usable; the resuming session has to check that its evidence exists",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Pointers that no longer resolve. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the packet was valid JSON with every field and still pointed at a report and a file that were not there, so schema validity is not the same as the handoff being usable; the resuming session has to check that its evidence exists"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely running: pointers that no longer resolve ---\nschema errors: []\npointer error: verdict_pointer target is missing: gone/verdict.json\npointer error: changed file not found: src/deleted.py"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 4: Markdown that drifts from the JSON",
    "headingKn": "ಪ್ರಯೋಗ 4: Markdown that drifts from the JSON",
    "bodyEn": "What it ran: Markdown that drifts from the JSON. What the lab concluded: a hand-edited Markdown file and the JSON now disagree and nothing in the pipeline noticed until the comparison was run; the JSON is the source the agent reads, so the Markdown should be regenerated and never edited, and a check that regenerates and compares finds drift",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Markdown that drifts from the JSON. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a hand-edited Markdown file and the JSON now disagree and nothing in the pipeline noticed until the comparison was run; the JSON is the source the agent reads, so the Markdown should be regenerated and never edited, and a check that regenerates and compares finds drift"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 4. Genuinely measuring: Markdown that drifts from the JSON ---\nregenerated Markdown equals the shipped Markdown: True\nafter the Markdown next_action is edited (simulated by a string replacement): False\nnext_action in the JSON still says: Run python -m unittest."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 5: A resuming session never trusts the summary alone",
    "headingKn": "ಪ್ರಯೋಗ 5: A resuming session never trusts the summary alone",
    "bodyEn": "What it ran: A resuming session never trusts the summary alone. What the lab concluded: the summary and the report it points to contradicted each other, and only reading the pointer revealed that; the packet is a pointer to evidence and the evidence outranks the prose",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A resuming session never trusts the summary alone. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the summary and the report it points to contradicted each other, and only reading the pointer revealed that; the packet is a pointer to evidence and the evidence outranks the prose"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 5. Genuinely checking: a resuming session never trusts the summary alone ---\nsummary says: All tests pass and the task is complete.\nverdict file says: {'approved': False, 'passed': False}\nsummary claims completion: True | verdict agrees: False"
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
    "headingEn": "Genuinely Found: Malformed and Mistyped Packets Are Refused",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ದೋಷಪೂರ್ಣ ಮತ್ತು ತಪ್ಪು ಪ್ರಕಾರದ ಪ್ಯಾಕೆಟ್‌ಗಳು ನಿರಾಕರಿಸಲ್ಪಡುತ್ತವೆ",
    "bodyEn": "Section 1: the valid packet gave no errors; truncated JSON gave JSONDecodeError and a JSON list at the top level gave \"not an object\". Section 2: a missing open_risks, commands_run as a string, a blank next_action and next_action None were each reported; list(\"python -m unittest\") would give 18 one-character items.",
    "bodyKn": "ವಿಭಾಗ 1: ಮಾನ್ಯ ಪ್ಯಾಕೆಟ್ ದೋಷ ನೀಡಲಿಲ್ಲ; ಮೊಟಕುಗೊಂಡ JSON JSONDecodeError ನೀಡಿತು ಮತ್ತು ಮೇಲ್ಮಟ್ಟದಲ್ಲಿ JSON ಪಟ್ಟಿ \"not an object\" ನೀಡಿತು. ವಿಭಾಗ 2: ಕಾಣೆಯಾದ open_risks, string ಆದ commands_run, ಖಾಲಿ next_action ಮತ್ತು next_action None ಪ್ರತಿಯೊಂದೂ ವರದಿಯಾದವು; list(\"python -m unittest\") 18 ಒಂದು-ಅಕ್ಷರ ಅಂಶಗಳನ್ನು ನೀಡುತ್ತಿತ್ತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Valid JSON, Dangling Pointers, Drift and a Contradicting Summary",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಮಾನ್ಯ JSON, ನೇತಾಡುವ ಸೂಚಕಗಳು, ಚಲನೆ ಮತ್ತು ವಿರೋಧಿ Summary",
    "bodyEn": "Section 3: a packet with no schema errors pointed at gone/verdict.json and src/deleted.py, neither of which existed. Section 4 (the edit simulated by a string replacement): the regenerated Markdown matched the shipped one, but after the Markdown next_action was edited it no longer matched while the JSON still said \"Run python -m unittest.\". Section 5: a summary saying \"All tests pass and the task is complete.\" pointed at a verdict file with passed false.",
    "bodyKn": "ವಿಭಾಗ 3: ಸ್ಕೀಮಾ ದೋಷವಿಲ್ಲದ ಪ್ಯಾಕೆಟ್ gone/verdict.json ಮತ್ತು src/deleted.py ತೋರಿಸಿತು, ಎರಡೂ ಇರಲಿಲ್ಲ. ವಿಭಾಗ 4 (ಸಂಪಾದನೆ ಸ್ಟ್ರಿಂಗ್ ಬದಲಿಯಿಂದ ಅನುಕರಿಸಲಾಗಿದೆ): ಮರುರಚಿಸಿದ Markdown ಕಳುಹಿಸಿದದ್ದಕ್ಕೆ ಹೊಂದಿತು, ಆದರೆ Markdown next_action ಸಂಪಾದಿಸಿದ ನಂತರ ಅದು ಹೊಂದಲಿಲ್ಲ, JSON ಇನ್ನೂ \"Run python -m unittest.\" ಎಂದಿತ್ತು. ವಿಭಾಗ 5: \"All tests pass and the task is complete.\" ಎನ್ನುವ summary passed false ಇರುವ verdict ಫೈಲ್ ತೋರಿಸಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A handoff is only as good as the checks the reader runs on it, because the file may be damaged, edited, stale or optimistic.",
    "bodyKn": "ಹಸ್ತಾಂತರ ಓದುಗ ಅದರ ಮೇಲೆ ನಡೆಸುವ ಪರಿಶೀಲನೆಗಳಷ್ಟೇ ಒಳ್ಳೆಯದು, ಏಕೆಂದರೆ ಫೈಲ್ ಹಾಳಾಗಿರಬಹುದು, ಸಂಪಾದಿತವಾಗಿರಬಹುದು, ಹಳೆಯದಾಗಿರಬಹುದು ಅಥವಾ ಆಶಾವಾದಿಯಾಗಿರಬಹುದು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"if the JSON validates, I can resume.\" It validated while pointing at files that were gone.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"JSON ಮಾನ್ಯವಾದರೆ ನಾನು ಪುನರಾರಂಭಿಸಬಹುದು.\" ಅದು ಇಲ್ಲದ ಫೈಲ್‌ಗಳನ್ನು ತೋರಿಸುತ್ತಿದ್ದರೂ ಮಾನ್ಯವಾಯಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Consumer validation: checks the reading session runs. Dangling pointer: a path to something that no longer exists. Drift: two representations disagreeing. Regeneration check: rebuild and compare. Evidence outranks prose: the report beats the summary.",
    "bodyKn": "Consumer validation: ಓದುವ ಸೆಷನ್ ನಡೆಸುವ ಪರಿಶೀಲನೆಗಳು. Dangling pointer: ಇನ್ನಿಲ್ಲದ ವಸ್ತುವಿನ ಮಾರ್ಗ. Drift: ಎರಡು ರೂಪಗಳು ಒಪ್ಪದಿರುವುದು. Regeneration check: ಮರುನಿರ್ಮಿಸಿ ಹೋಲಿಸಿ. Evidence outranks prose: ವರದಿ summary ಯನ್ನು ಮೀರಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) Truncated and wrong-shaped files were refused. 2) A string commands_run was caught by a type check. 3) A schema-valid packet had two dangling pointers. 4) An edited Markdown no longer matched the JSON. 5) A summary claiming completion contradicted its verdict file.",
    "bodyKn": "1) ಮೊಟಕುಗೊಂಡ ಮತ್ತು ತಪ್ಪು ಆಕಾರದ ಫೈಲ್‌ಗಳು ನಿರಾಕರಿಸಲ್ಪಟ್ಟವು. 2) string commands_run ಅನ್ನು ಪ್ರಕಾರ ಪರೀಕ್ಷೆ ಹಿಡಿಯಿತು. 3) ಸ್ಕೀಮಾ-ಮಾನ್ಯ ಪ್ಯಾಕೆಟ್ ಎರಡು ನೇತಾಡುವ ಸೂಚಕ ಹೊಂದಿತ್ತು. 4) ಸಂಪಾದಿಸಿದ Markdown ಇನ್ನು JSON ಗೆ ಹೊಂದಲಿಲ್ಲ. 5) ಪೂರ್ಣತೆ ಹೇಳುವ summary ತನ್ನ verdict ಫೈಲ್‌ಗೆ ವಿರೋಧವಾಗಿತ್ತು."
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
    "bodyEn": "1) Open a terminal in pneuronics-backend/lesson-defs/labs. 2) Run: python -B ms_2.py (in Git Bash on Windows: PYTHONIOENCODING=utf-8 python -B ms_2.py). 3) Compare each section with the walkthrough above. The -B flag stops Python from writing __pycache__ folders.",
    "bodyKn": "1) pneuronics-backend/lesson-defs/labs ನಲ್ಲಿ ಟರ್ಮಿನಲ್ ತೆರೆಯಿರಿ. 2) ಓಡಿಸಿ: python -B ms_2.py (Windows Git Bash ನಲ್ಲಿ: PYTHONIOENCODING=utf-8 python -B ms_2.py). 3) ಪ್ರತಿ ವಿಭಾಗವನ್ನು ಮೇಲಿನ ನಡೆದಾಟಕ್ಕೆ ಹೋಲಿಸಿ. -B ಧ್ವಜ Python __pycache__ ಫೋಲ್ಡರ್‌ಗಳನ್ನು ಬರೆಯುವುದನ್ನು ತಡೆಯುತ್ತದೆ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "How many one-character items would list(\"python -m unittest\") produce?",
      "qKn": "list(\"python -m unittest\") ಎಷ್ಟು ಒಂದು-ಅಕ್ಷರ ಅಂಶಗಳನ್ನು ನೀಡುತ್ತದೆ?",
      "opts": [
       "18",
       "3",
       "1",
       "0"
      ],
      "optsKn": [
       "18",
       "3",
       "1",
       "0"
      ],
      "correct": 0
     },
     {
      "q": "What did a schema-valid packet still get wrong in Section 3?",
      "qKn": "ವಿಭಾಗ 3 ರಲ್ಲಿ ಸ್ಕೀಮಾ-ಮಾನ್ಯ ಪ್ಯಾಕೆಟ್ ಇನ್ನೂ ಏನು ತಪ್ಪಾಗಿತ್ತು?",
      "opts": [
       "Its pointers targeted missing files",
       "Its JSON was truncated",
       "It had no fields",
       "It was empty"
      ],
      "optsKn": [
       "ಅದರ ಸೂಚಕಗಳು ಕಾಣೆಯಾದ ಫೈಲ್‌ಗಳನ್ನು ಗುರಿಯಾಗಿಸಿದ್ದವು",
       "ಅದರ JSON ಮೊಟಕುಗೊಂಡಿತ್ತು",
       "ಅದಕ್ಕೆ ಕ್ಷೇತ್ರಗಳಿರಲಿಲ್ಲ",
       "ಅದು ಖಾಲಿ"
      ],
      "correct": 0
     },
     {
      "q": "What does a regeneration check do?",
      "qKn": "regeneration check ಏನು ಮಾಡುತ್ತದೆ?",
      "opts": [
       "Rebuilds the Markdown from JSON and compares",
       "Deletes the Markdown",
       "Edits the JSON",
       "Signs the file"
      ],
      "optsKn": [
       "JSON ನಿಂದ Markdown ಮರುನಿರ್ಮಿಸಿ ಹೋಲಿಸುತ್ತದೆ",
       "Markdown ಅಳಿಸುತ್ತದೆ",
       "JSON ಸಂಪಾದಿಸುತ್ತದೆ",
       "ಫೈಲ್‌ಗೆ ಸಹಿ ಮಾಡುತ್ತದೆ"
      ],
      "correct": 0
     },
     {
      "q": "Which wins when the summary says complete but the verdict file says passed false?",
      "qKn": "summary ಪೂರ್ಣ ಎಂದು ಹೇಳಿ verdict ಫೈಲ್ passed false ಎಂದಾಗ ಯಾವುದು ಗೆಲ್ಲುತ್ತದೆ?",
      "opts": [
       "The verdict file",
       "The summary",
       "Neither",
       "The Markdown"
      ],
      "optsKn": [
       "verdict ಫೈಲ್",
       "summary",
       "ಯಾವುದೂ ಇಲ್ಲ",
       "Markdown"
      ],
      "correct": 0
     },
     {
      "q": "Was the Markdown edit in Section 4 a real human edit?",
      "qKn": "ವಿಭಾಗ 4 ರ Markdown ಸಂಪಾದನೆ ನಿಜ ಮಾನವ ಸಂಪಾದನೆಯೇ?",
      "opts": [
       "No, it was simulated by a string replacement",
       "Yes",
       "It was automatic",
       "It was signed"
      ],
      "optsKn": [
       "ಇಲ್ಲ, ಸ್ಟ್ರಿಂಗ್ ಬದಲಿಯಿಂದ ಅನುಕರಿಸಲಾಗಿತ್ತು",
       "ಹೌದು",
       "ಸ್ವಯಂಚಾಲಿತ",
       "ಸಹಿ ಮಾಡಲಾಗಿತ್ತು"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
