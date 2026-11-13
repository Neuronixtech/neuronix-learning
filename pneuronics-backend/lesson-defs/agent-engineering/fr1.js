module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6af7559b6a464b572e275684",
 "order": 0,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Turn Every Agent Correction into a System Improvement (Part 1 of 3) — Records, Causes and Fingerprints",
 "titleKn": "ಪ್ರತಿ Agent ತಿದ್ದುಪಡಿಯನ್ನು ವ್ಯವಸ್ಥೆ ಸುಧಾರಣೆಯಾಗಿ ಪರಿವರ್ತಿಸಿ (ಭಾಗ 1 / 3) — ದಾಖಲೆಗಳು, ಕಾರಣಗಳು ಮತ್ತು Fingerprints",
 "desc": "Turn a chat correction into a classified record with a stable fingerprint and see where wording-based matching fails.",
 "descKn": "chat ತಿದ್ದುಪಡಿಯನ್ನು ಸ್ಥಿರ fingerprint ಇರುವ ವರ್ಗೀಕೃತ ದಾಖಲೆಯಾಗಿ ಪರಿವರ್ತಿಸಿ ಮತ್ತು ಪದ-ಆಧಾರಿತ ಹೊಂದಾಣಿಕೆ ಎಲ್ಲಿ ವಿಫಲವಾಗುತ್ತದೆ ನೋಡಿ.",
 "objectives": [
  "Write a correction record.",
  "Separate symptom from cause.",
  "Pick the earliest layer.",
  "Build a stable fingerprint.",
  "Count recurrence safely."
 ],
 "objectivesKn": [
  "ತಿದ್ದುಪಡಿ ದಾಖಲೆ ಬರೆಯಿರಿ.",
  "ಲಕ್ಷಣ ಮತ್ತು ಕಾರಣ ಬೇರ್ಪಡಿಸಿ.",
  "ಆರಂಭಿಕ ಪದರ ಆರಿಸಿ.",
  "ಸ್ಥಿರ fingerprint ನಿರ್ಮಿಸಿ.",
  "ಪುನರಾವರ್ತನೆ ಸುರಕ್ಷಿತವಾಗಿ ಎಣಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Turn Every Agent Correction into a System Improvement (Part 1 of 3)",
    "textKn": "ಪ್ರತಿ Agent ತಿದ್ದುಪಡಿಯನ್ನು ವ್ಯವಸ್ಥೆ ಸುಧಾರಣೆಯಾಗಿ ಪರಿವರ್ತಿಸಿ (ಭಾಗ 1 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 1 of 3: structured correction records, symptom versus cause, the earliest effective control layer, normalising wording to a canonical cause and stable fingerprints that merge equal failures without merging different ones. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind turning agent corrections into durable system improvements (correction records, root causes, fingerprints, verified controls and the control lifecycle), not the real software, and the corrections, events and repositories are made up by the lab and no language model is involved, so no real LLM behaviour is measured. The original main.py was not supplied, and the lesson text states that its Python examples are reference implementations, so the labs are our own implementation of the behaviour described. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 1ನೆಯದು: ರಚನಾತ್ಮಕ ತಿದ್ದುಪಡಿ ದಾಖಲೆಗಳು, ಲಕ್ಷಣ ಮತ್ತು ಕಾರಣ, ಆರಂಭಿಕ ಪರಿಣಾಮಕಾರಿ ನಿಯಂತ್ರಣ ಪದರ, ಪದಗಳನ್ನು ಅಂಗೀಕೃತ ಕಾರಣಕ್ಕೆ ಸಾಮಾನ್ಯೀಕರಿಸುವುದು ಮತ್ತು ಸಮಾನ ವೈಫಲ್ಯಗಳನ್ನು ವಿಲೀನಿಸಿ ವಿಭಿನ್ನವನ್ನು ವಿಲೀನಿಸದ ಸ್ಥಿರ fingerprints. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು agent ತಿದ್ದುಪಡಿಗಳನ್ನು ಬಾಳಿಕೆ ಬರುವ ವ್ಯವಸ್ಥೆ ಸುಧಾರಣೆಗಳಾಗಿ ಪರಿವರ್ತಿಸುವುದು (ತಿದ್ದುಪಡಿ ದಾಖಲೆಗಳು, ಮೂಲ ಕಾರಣಗಳು, fingerprints, ಪರಿಶೀಲಿತ ನಿಯಂತ್ರಣಗಳು ಮತ್ತು ನಿಯಂತ್ರಣ ಜೀವನಚಕ್ರ) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ತಿದ್ದುಪಡಿಗಳು, events ಮತ್ತು repositories ಅನ್ನು ಲ್ಯಾಬ್ ಕಲ್ಪಿಸಿದ್ದು ಮತ್ತು ಭಾಷಾ ಮಾದರಿ ಇಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ main.py ಒದಗಿಸಿರಲಿಲ್ಲ, ಮತ್ತು lesson ಪಠ್ಯ ತನ್ನ Python ಉದಾಹರಣೆಗಳು ಉಲ್ಲೇಖ ಅನುಷ್ಠಾನಗಳು ಎಂದು ಹೇಳುತ್ತದೆ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ವಿವರಿಸಿದ ವರ್ತನೆಯ ನಮ್ಮದೇ ಅನುಷ್ಠಾನ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "A Correction in Chat Fixes One Run",
    "textKn": "chat ನಲ್ಲಿನ ತಿದ್ದುಪಡಿ ಒಂದು ಓಟವನ್ನು ಸರಿಪಡಿಸುತ್ತದೆ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "The Feedback Ratchet Starts With a Record",
    "headingKn": "Feedback ratchet ದಾಖಲೆಯಿಂದ ಆರಂಭವಾಗುತ್ತದೆ",
    "bodyEn": "When someone tells an agent not to edit README.md, that fixes one execution; the next session never saw the message. The feedback ratchet turns the correction into something that outlives the chat: a record of what happened, the cause, the earliest layer that can prevent it and a fingerprint that recognises the same failure again. This part builds that front half and also shows where it fails: a phrase table that misses a wording, and fingerprints that must merge equal failures without merging different ones.",
    "bodyKn": "ಯಾರಾದರೂ agent ಗೆ README.md ಸಂಪಾದಿಸಬೇಡಿ ಎಂದು ಹೇಳಿದರೆ ಅದು ಒಂದು ಕಾರ್ಯಗತಿಯನ್ನು ಸರಿಪಡಿಸುತ್ತದೆ; ಮುಂದಿನ ಸೆಷನ್ ಆ ಸಂದೇಶವನ್ನು ನೋಡಿರಲಿಲ್ಲ. Feedback ratchet ತಿದ್ದುಪಡಿಯನ್ನು chat ಗಿಂತ ಹೆಚ್ಚು ಕಾಲ ಉಳಿಯುವ ವಸ್ತುವಾಗಿ ಪರಿವರ್ತಿಸುತ್ತದೆ: ಏನಾಯಿತು ಎಂಬ ದಾಖಲೆ, ಕಾರಣ, ತಡೆಯಬಲ್ಲ ಆರಂಭಿಕ ಪದರ ಮತ್ತು ಅದೇ ವೈಫಲ್ಯವನ್ನು ಮತ್ತೆ ಗುರುತಿಸುವ fingerprint. ಈ ಭಾಗ ಆ ಮುಂಭಾಗವನ್ನು ನಿರ್ಮಿಸಿ ಅದು ಎಲ್ಲಿ ವಿಫಲವಾಗುತ್ತದೆ ಎಂದೂ ತೋರಿಸುತ್ತದೆ: ಒಂದು ಪದಪ್ರಯೋಗ ತಪ್ಪಿಸುವ ಪದಗುಚ್ಛ ಕೋಷ್ಟಕ, ಮತ್ತು ಸಮಾನ ವೈಫಲ್ಯಗಳನ್ನು ವಿಲೀನಿಸಿ ವಿಭಿನ್ನವನ್ನು ವಿಲೀನಿಸದ fingerprints."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "From Correction to Control Layer",
    "headingKn": "ತಿದ್ದುಪಡಿಯಿಂದ ನಿಯಂತ್ರಣ ಪದರಕ್ಕೆ",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">Correction to cause to layer</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">correction</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">chat message</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">cause</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">canonical id</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">layer</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">earliest control</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">fingerprint</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">cause + target</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">a correction becomes a record before it becomes a control</text></svg>",
    "captionEn": "A chat message becomes a record with a cause and a layer.",
    "captionKn": "chat ಸಂದೇಶ ಕಾರಣ ಮತ್ತು ಪದರದೊಂದಿಗೆ ದಾಖಲೆಯಾಗುತ್ತದೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Control layers",
    "headingKn": "ನಿಯಂತ್ರಣ ಪದರಗಳು",
    "headers": [
     "Cause",
     "Layer",
     "Example control"
    ],
    "rows": [
     [
      "off_scope_edit",
      "scope_policy",
      "allowed paths"
     ],
     [
      "missing_field",
      "type_or_schema",
      "response validator"
     ],
     [
      "wrong_result",
      "test",
      "regression test"
     ],
     [
      "wrong_command",
      "automation",
      "one scripted command"
     ],
     [
      "policy_disagreement",
      "human_decision",
      "decision record"
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
    "filename": "fr_1.py",
    "headingEn": "Records, causes and fingerprints",
    "headingKn": "ದಾಖಲೆಗಳು, ಕಾರಣಗಳು ಮತ್ತು fingerprints",
    "descEn": "normalize_text lowercases and collapses whitespace, resolve_cause looks up a phrase table and returns a cause and layer, validate refuses empty fields, and fingerprint hashes the cause and the cleaned target only.",
    "descKn": "normalize_text ಸಣ್ಣಕ್ಷರ ಮಾಡಿ ಖಾಲಿ ಜಾಗ ಸಂಕುಚಿತಗೊಳಿಸುತ್ತದೆ, resolve_cause ಪದಗುಚ್ಛ ಕೋಷ್ಟಕ ಹುಡುಕಿ ಕಾರಣ ಮತ್ತು ಪದರ ಮರಳಿಸುತ್ತದೆ, validate ಖಾಲಿ ಕ್ಷೇತ್ರಗಳನ್ನು ನಿರಾಕರಿಸುತ್ತದೆ, ಮತ್ತು fingerprint ಕಾರಣ ಮತ್ತು ಶುದ್ಧ target ಅನ್ನು ಮಾತ್ರ hash ಮಾಡುತ್ತದೆ.",
    "code": "def normalize_text(text):\n    return \" \".join(str(text).lower().replace(\"’\", \"'\").split()).strip(\" .!\")\n\n\ndef resolve_cause(message):\n    m = normalize_text(message)\n    for cause, (layer, phrases) in CAUSES.items():\n        if any(p in m for p in phrases):\n            return cause, layer\n    return \"unclassified\", \"human_decision\"\n\n\ndef validate(c):\n    for name in (\"event_id\", \"message\", \"symptom\", \"target\"):\n        if not isinstance(getattr(c, name), str) or not getattr(c, name).strip():\n            raise ValueError(f\"Expected a non-empty {name}\")\n    return c\n\n\ndef classify(c):\n    validate(c)\n    c.cause, c.layer = resolve_cause(c.message)\n    return c\n\n\ndef fingerprint(cause, target, include_time=None):\n    payload = {\"cause\": cause, \"target\": target.replace(chr(92), \"/\").strip(\"/\")}\n    if include_time is not None:\n        payload[\"time\"] = include_time\n    return hashlib.sha256(json.dumps(payload, sort_keys=True).encode()).hexdigest()[:12]\n\n\ndef naive_fingerprint(message):\n    return hashlib.sha256(message.encode()).hexdigest()[:12]"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "fr_1.py",
    "headingEn": "main(): five experiments",
    "headingKn": "main(): ಐದು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() resolves one correction, tries six wordings, compares what goes into a fingerprint, counts recurrences with and without the target and rejects three malformed records.",
    "descKn": "main() ಒಂದು ತಿದ್ದುಪಡಿ ಪರಿಹರಿಸಿ, ಆರು ಪದಪ್ರಯೋಗಗಳನ್ನು ಪ್ರಯತ್ನಿಸಿ, fingerprint ನಲ್ಲಿ ಏನು ಹೋಗುತ್ತದೆ ಹೋಲಿಸಿ, target ಸಹಿತ ಮತ್ತು ರಹಿತ ಪುನರಾವರ್ತನೆ ಎಣಿಸಿ ಮತ್ತು ಮೂರು ದೋಷಪೂರ್ಣ ದಾಖಲೆಗಳನ್ನು ತಿರಸ್ಕರಿಸುತ್ತದೆ.",
    "code": "def main():\n    section(\"1. Genuinely running: a symptom is not a cause\")\n    c = classify(Correction(\"e1\", \"Do not edit README.md. Only change files related to registration validation.\", \"agent edited README.md\", \"README.md\"))\n    print(\"symptom:\", c.symptom, \"| resolved cause:\", c.cause, \"| earliest layer:\", c.layer)\n    print(\"the correction says what to avoid in one conversation; the cause names the missing control (an executable scope), and the layer says where prevention belongs\")\n\n    section(\"2. Genuinely measuring: differently worded corrections reach the same cause\")\n    msgs = [(\"Do not modify README.md.\", \"README.md\"), (\"Please do NOT edit   README.md!\", \"README.md\"), (\"Don’t touch README.md\", \"README.md\"),\n            (\"The response is missing a required field: user_id\", \"api/response.py\"), (\"The result is wrong; the total is off by one\", \"app/totals.py\"), (\"Which behaviour do we want for expired carts?\", \"app/cart.py\")]\n    for i, (m, t) in enumerate(msgs):\n        k = classify(Correction(f\"m{i}\", m, \"s\", t))\n        print(f\"{m!r:62} -> {k.cause:20} {k.layer:16} {fingerprint(k.cause, k.target)}\")\n    print(\"the first two wordings matched a phrase and shared a fingerprint, while the third (\\\"Don't touch\\\") matched no phrase and fell to unclassified; a phrase table is only as good as its phrases, and unclassified items go to a human instead of being guessed\")\n\n    section(\"3. Genuinely measuring: what goes into a fingerprint\")\n    a = fingerprint(\"off_scope_edit\", \"README.md\")\n    print(\"same cause and target, different message text :\", a == fingerprint(\"off_scope_edit\", \"README.md\"))\n    print(\"backslash path and leading slash               :\", a == fingerprint(\"off_scope_edit\", chr(92) + \"README.md\"))\n    print(\"different target (LICENSE)                     :\", a == fingerprint(\"off_scope_edit\", \"LICENSE\"))\n    print(\"different cause on the same target             :\", a == fingerprint(\"missing_field\", \"README.md\"))\n    print(\"timestamp included (two runs a second apart)   :\", fingerprint(\"off_scope_edit\", \"README.md\", \"10:00:01\") == fingerprint(\"off_scope_edit\", \"README.md\", \"10:00:02\"))\n    print(\"hash of the raw message for two wordings       :\", naive_fingerprint(\"Do not modify README.md.\") == naive_fingerprint(\"Please do NOT edit README.md!\"))\n    print(\"the fingerprint covers the cause and the target only; adding a timestamp or hashing the raw wording made equal failures look different, and dropping the target would have merged README.md with LICENSE\")\n\n    section(\"4. Genuinely running: recurrence counting with and without false merges\")\n    log = [(\"README.md\", \"Do not edit README.md\"), (\"README.md\", \"Do not modify README.md\"), (\"LICENSE\", \"Do not edit LICENSE\"), (\"api/response.py\", \"The response is missing a required field\"), (\"README.md\", \"Do not change files outside the task\")]\n    counts, ids = {}, {}\n    for i, (t, m) in enumerate(log):\n        k = classify(Correction(f\"r{i}\", m, \"s\", t))\n        fp = fingerprint(k.cause, k.target)\n        counts[fp] = counts.get(fp, 0) + 1\n        ids[fp] = (k.cause, k.target)\n    for fp, n in sorted(counts.items(), key=lambda x: -x[1]):\n        print(f\"{fp} {ids[fp][0]:16} {ids[fp][1]:16} recurrence={n}\")\n    cause_only = {}\n    for t, m in log:\n        k = classify(Correction(\"x\", m, \"s\", t))\n        cause_only[k.cause] = cause_only.get(k.cause, 0) + 1\n    print(\"if the target is ignored, off_scope_edit would count\", cause_only.get(\"off_scope_edit\"), \"events as one problem\")\n    print(\"with the target in the fingerprint README.md has 3 recurrences and LICENSE has 1, so a control is justified for README.md and LICENSE is not lumped in; a recurrence count only means something if equal causes are merged and unequal ones are not\")\n\n    section(\"5. Genuinely running: malformed corrections are rejected before they become records\")\n    for label, kw in ((\"empty message\", dict(message=\"  \")), (\"missing target\", dict(target=\"\")), (\"non-string symptom\", dict(symptom=None))):\n        base = dict(event_id=\"b1\", message=\"Do not edit README.md\", symptom=\"s\", target=\"README.md\")\n        base.update(kw)\n        try:\n            classify(Correction(**base))\n            print(f\"{label:20} accepted\")\n        except ValueError as e:\n            print(f\"{label:20} rejected: {e}\")\n    print(\"a record without a message or a target cannot be fingerprinted, so the ingest step refuses it instead of storing something that will never match\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: a symptom is not a cause ---\nsymptom: agent edited README.md | resolved cause: off_scope_edit | earliest layer: scope_policy\nthe correction says what to avoid in one conversation; the cause names the missing control (an executable scope), and the layer says where prevention belongs\n\n--- 2. Genuinely measuring: differently worded corrections reach the same cause ---\n'Do not modify README.md.'                                     -> off_scope_edit       scope_policy     1ad37322ca49\n'Please do NOT edit   README.md!'                              -> off_scope_edit       scope_policy     1ad37322ca49\n'Don’t touch README.md'                                        -> unclassified         human_decision   fceca978f99d\n'The response is missing a required field: user_id'            -> missing_field        type_or_schema   22b74b1d9e49\n'The result is wrong; the total is off by one'                 -> wrong_result         test             e7df0560d2ea\n'Which behaviour do we want for expired carts?'                -> policy_disagreement  human_decision   f9ef6062ca55\nthe first two wordings matched a phrase and shared a fingerprint, while the third (\"Don't touch\") matched no phrase and fell to unclassified; a phrase table is only as good as its phrases, and unclassified items go to a human instead of being guessed\n\n--- 3. Genuinely measuring: what goes into a fingerprint ---\nsame cause and target, different message text : True\nbackslash path and leading slash               : True\ndifferent target (LICENSE)                     : False\ndifferent cause on the same target             : False\ntimestamp included (two runs a second apart)   : False\nhash of the raw message for two wordings       : False\nthe fingerprint covers the cause and the target only; adding a timestamp or hashing the raw wording made equal failures look different, and dropping the target would have merged README.md with LICENSE\n\n--- 4. Genuinely running: recurrence counting with and without false merges ---\n1ad37322ca49 off_scope_edit   README.md        recurrence=3\n8a36c5a0ab27 off_scope_edit   LICENSE          recurrence=1\n22b74b1d9e49 missing_field    api/response.py  recurrence=1\nif the target is ignored, off_scope_edit would count 4 events as one problem\nwith the target in the fingerprint README.md has 3 recurrences and LICENSE has 1, so a control is justified for README.md and LICENSE is not lumped in; a recurrence count only means something if equal causes are merged and unequal ones are not\n\n--- 5. Genuinely running: malformed corrections are rejected before they become records ---\nempty message        rejected: Expected a non-empty message\nmissing target       rejected: Expected a non-empty target\nnon-string symptom   rejected: Expected a non-empty symptom\na record without a message or a target cannot be fingerprinted, so the ingest step refuses it instead of storing something that will never match"
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
    "headingEn": "Experiment 1: A symptom is not a cause",
    "headingKn": "ಪ್ರಯೋಗ 1: A symptom is not a cause",
    "bodyEn": "What it ran: A symptom is not a cause. What the lab concluded: the correction says what to avoid in one conversation; the cause names the missing control (an executable scope), and the layer says where prevention belongs",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A symptom is not a cause. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the correction says what to avoid in one conversation; the cause names the missing control (an executable scope), and the layer says where prevention belongs"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. Genuinely running: a symptom is not a cause ---\nsymptom: agent edited README.md | resolved cause: off_scope_edit | earliest layer: scope_policy"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: Differently worded corrections reach the same cause",
    "headingKn": "ಪ್ರಯೋಗ 2: Differently worded corrections reach the same cause",
    "bodyEn": "What it ran: Differently worded corrections reach the same cause. What the lab concluded: the first two wordings matched a phrase and shared a fingerprint, while the third (\"Don't touch\") matched no phrase and fell to unclassified; a phrase table is only as good as its phrases, and unclassified items go to a human instead of being guessed",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Differently worded corrections reach the same cause. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the first two wordings matched a phrase and shared a fingerprint, while the third (\"Don't touch\") matched no phrase and fell to unclassified; a phrase table is only as good as its phrases, and unclassified items go to a human instead of being guessed"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely measuring: differently worded corrections reach the same cause ---\n'Do not modify README.md.'                                     -> off_scope_edit       scope_policy     1ad37322ca49\n'Please do NOT edit   README.md!'                              -> off_scope_edit       scope_policy     1ad37322ca49\n'Don’t touch README.md'                                        -> unclassified         human_decision   fceca978f99d\n'The response is missing a required field: user_id'            -> missing_field        type_or_schema   22b74b1d9e49\n'The result is wrong; the total is off by one'                 -> wrong_result         test             e7df0560d2ea\n'Which behaviour do we want for expired carts?'                -> policy_disagreement  human_decision   f9ef6062ca55"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: What goes into a fingerprint",
    "headingKn": "ಪ್ರಯೋಗ 3: What goes into a fingerprint",
    "bodyEn": "What it ran: What goes into a fingerprint. What the lab concluded: the fingerprint covers the cause and the target only; adding a timestamp or hashing the raw wording made equal failures look different, and dropping the target would have merged README.md with LICENSE",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: What goes into a fingerprint. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the fingerprint covers the cause and the target only; adding a timestamp or hashing the raw wording made equal failures look different, and dropping the target would have merged README.md with LICENSE"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely measuring: what goes into a fingerprint ---\nsame cause and target, different message text : True\nbackslash path and leading slash               : True\ndifferent target (LICENSE)                     : False\ndifferent cause on the same target             : False\ntimestamp included (two runs a second apart)   : False\nhash of the raw message for two wordings       : False"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 4: Recurrence counting with and without false merges",
    "headingKn": "ಪ್ರಯೋಗ 4: Recurrence counting with and without false merges",
    "bodyEn": "What it ran: Recurrence counting with and without false merges. What the lab concluded: with the target in the fingerprint README.md has 3 recurrences and LICENSE has 1, so a control is justified for README.md and LICENSE is not lumped in; a recurrence count only means something if equal causes are merged and unequal ones are not",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Recurrence counting with and without false merges. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): with the target in the fingerprint README.md has 3 recurrences and LICENSE has 1, so a control is justified for README.md and LICENSE is not lumped in; a recurrence count only means something if equal causes are merged and unequal ones are not"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 4. Genuinely running: recurrence counting with and without false merges ---\n1ad37322ca49 off_scope_edit   README.md        recurrence=3\n8a36c5a0ab27 off_scope_edit   LICENSE          recurrence=1\n22b74b1d9e49 missing_field    api/response.py  recurrence=1\nif the target is ignored, off_scope_edit would count 4 events as one problem"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 5: Malformed corrections are rejected before they become records",
    "headingKn": "ಪ್ರಯೋಗ 5: Malformed corrections are rejected before they become records",
    "bodyEn": "What it ran: Malformed corrections are rejected before they become records. What the lab concluded: a record without a message or a target cannot be fingerprinted, so the ingest step refuses it instead of storing something that will never match",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Malformed corrections are rejected before they become records. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a record without a message or a target cannot be fingerprinted, so the ingest step refuses it instead of storing something that will never match"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 5. Genuinely running: malformed corrections are rejected before they become records ---\nempty message        rejected: Expected a non-empty message\nmissing target       rejected: Expected a non-empty target\nnon-string symptom   rejected: Expected a non-empty symptom"
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
    "headingEn": "Genuinely Found: Two Wordings Matched and \"Don't touch\" Did Not",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಎರಡು ಪದಪ್ರಯೋಗ ಹೊಂದಿದವು, \"Don't touch\" ಹೊಂದಲಿಲ್ಲ",
    "bodyEn": "Section 1: the README correction resolved to off_scope_edit with the scope_policy layer. Section 2: \"Do not modify README.md.\" and \"Please do NOT edit   README.md!\" shared fingerprint 1ad37322ca49, while \"Don't touch README.md\" matched no phrase, became unclassified and went to human_decision. The phrase table is only as good as its phrases and an unmatched wording is sent to a person instead of being guessed.",
    "bodyKn": "ವಿಭಾಗ 1: README ತಿದ್ದುಪಡಿ scope_policy ಪದರದೊಂದಿಗೆ off_scope_edit ಗೆ ಪರಿಹಾರವಾಯಿತು. ವಿಭಾಗ 2: \"Do not modify README.md.\" ಮತ್ತು \"Please do NOT edit   README.md!\" fingerprint 1ad37322ca49 ಹಂಚಿಕೊಂಡವು, \"Don't touch README.md\" ಯಾವುದೇ ಪದಗುಚ್ಛಕ್ಕೆ ಹೊಂದದೆ unclassified ಆಗಿ human_decision ಗೆ ಹೋಯಿತು. ಪದಗುಚ್ಛ ಕೋಷ್ಟಕ ಅದರ ಪದಗುಚ್ಛಗಳಷ್ಟೇ ಉತ್ತಮ, ಮತ್ತು ಹೊಂದದ ಪದಪ್ರಯೋಗ ಊಹಿಸದೆ ವ್ಯಕ್ತಿಗೆ ಕಳುಹಿಸಲ್ಪಡುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: What a Fingerprint Must and Must Not Contain",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Fingerprint ನಲ್ಲಿ ಏನಿರಬೇಕು ಮತ್ತು ಏನಿರಬಾರದು",
    "bodyEn": "Section 3: the same cause and target gave equal fingerprints regardless of message text or a backslash or leading slash; a different target, a different cause, a timestamp or hashing the raw wording each made equal failures look different. Section 4: README.md had 3 recurrences and LICENSE 1, while ignoring the target would have counted 4 off_scope_edit events as one problem. Section 5: an empty message, an empty target and a None symptom were each rejected.",
    "bodyKn": "ವಿಭಾಗ 3: ಅದೇ ಕಾರಣ ಮತ್ತು target ಸಂದೇಶ ಪಠ್ಯ ಅಥವಾ ಬ್ಯಾಕ್‌ಸ್ಲ್ಯಾಶ್ ಅಥವಾ ಮೊದಲ ಸ್ಲ್ಯಾಶ್ ಏನೇ ಇರಲಿ ಸಮಾನ fingerprints ನೀಡಿತು; ಬೇರೆ target, ಬೇರೆ ಕಾರಣ, timestamp ಅಥವಾ ಕಚ್ಚಾ ಪದಪ್ರಯೋಗದ hash ಪ್ರತಿಯೊಂದೂ ಸಮಾನ ವೈಫಲ್ಯಗಳನ್ನು ಬೇರೆಯಂತೆ ತೋರಿಸಿತು. ವಿಭಾಗ 4: README.md ಗೆ 3 ಪುನರಾವರ್ತನೆ ಮತ್ತು LICENSE ಗೆ 1 ಇತ್ತು, target ನಿರ್ಲಕ್ಷಿಸಿದ್ದರೆ 4 off_scope_edit events ಒಂದೇ ಸಮಸ್ಯೆ ಎಂದು ಎಣಿಕೆಯಾಗುತ್ತಿತ್ತು. ವಿಭಾಗ 5: ಖಾಲಿ ಸಂದೇಶ, ಖಾಲಿ target ಮತ್ತು None symptom ಪ್ರತಿಯೊಂದೂ ತಿರಸ್ಕೃತವಾದವು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A recurrence count decides when a control is worth building, and it is only meaningful when equal failures are merged and unequal ones are not.",
    "bodyKn": "ನಿಯಂತ್ರಣ ನಿರ್ಮಿಸಲು ಯೋಗ್ಯವಾದಾಗ ಪುನರಾವರ್ತನೆ ಎಣಿಕೆ ನಿರ್ಧರಿಸುತ್ತದೆ, ಮತ್ತು ಸಮಾನ ವೈಫಲ್ಯಗಳು ವಿಲೀನವಾಗಿ ಅಸಮಾನ ಆಗದಿದ್ದರೆ ಮಾತ್ರ ಅದಕ್ಕೆ ಅರ್ಥ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"hash the message and you have a fingerprint.\" Two wordings of one failure hashed differently.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಸಂದೇಶವನ್ನು hash ಮಾಡಿದರೆ fingerprint ಸಿಗುತ್ತದೆ.\" ಒಂದೇ ವೈಫಲ್ಯದ ಎರಡು ಪದಪ್ರಯೋಗ ಬೇರೆ hash ನೀಡಿದವು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Correction: information that behaviour missed the requirement. Root cause: the missing control behind a symptom. Layer: where prevention belongs. Fingerprint: a stable id from cause and target. Recurrence: the count of events sharing a fingerprint.",
    "bodyKn": "Correction: ವರ್ತನೆ ಅಗತ್ಯ ತಪ್ಪಿಸಿದ ಮಾಹಿತಿ. Root cause: ಲಕ್ಷಣದ ಹಿಂದಿನ ಕಾಣೆಯಾದ ನಿಯಂತ್ರಣ. Layer: ತಡೆ ಇರಬೇಕಾದ ಸ್ಥಳ. Fingerprint: ಕಾರಣ ಮತ್ತು target ನಿಂದ ಸ್ಥಿರ id. Recurrence: ಒಂದೇ fingerprint ಹಂಚಿಕೊಳ್ಳುವ events ಎಣಿಕೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) The README correction resolved to a scope cause and layer. 2) One wording went unclassified. 3) Timestamps and raw wording broke fingerprints. 4) README.md recurred 3 times and LICENSE once. 5) Malformed records were rejected.",
    "bodyKn": "1) README ತಿದ್ದುಪಡಿ ವ್ಯಾಪ್ತಿ ಕಾರಣ ಮತ್ತು ಪದರಕ್ಕೆ ಪರಿಹಾರವಾಯಿತು. 2) ಒಂದು ಪದಪ್ರಯೋಗ unclassified ಆಯಿತು. 3) Timestamps ಮತ್ತು ಕಚ್ಚಾ ಪದಪ್ರಯೋಗ fingerprints ಮುರಿದವು. 4) README.md 3 ಬಾರಿ ಮತ್ತು LICENSE ಒಮ್ಮೆ ಪುನರಾವರ್ತನೆಯಾದವು. 5) ದೋಷಪೂರ್ಣ ದಾಖಲೆಗಳು ತಿರಸ್ಕೃತವಾದವು."
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
    "bodyEn": "1) Open a terminal in pneuronics-backend/lesson-defs/labs. 2) Run: python -B fr_1.py (in Git Bash on Windows: PYTHONIOENCODING=utf-8 python -B fr_1.py). 3) Compare each section with the walkthrough above. The -B flag stops Python from writing __pycache__ folders.",
    "bodyKn": "1) pneuronics-backend/lesson-defs/labs ನಲ್ಲಿ ಟರ್ಮಿನಲ್ ತೆರೆಯಿರಿ. 2) ಓಡಿಸಿ: python -B fr_1.py (Windows Git Bash ನಲ್ಲಿ: PYTHONIOENCODING=utf-8 python -B fr_1.py). 3) ಪ್ರತಿ ವಿಭಾಗವನ್ನು ಮೇಲಿನ ನಡೆದಾಟಕ್ಕೆ ಹೋಲಿಸಿ. -B ಧ್ವಜ Python __pycache__ ಫೋಲ್ಡರ್‌ಗಳನ್ನು ಬರೆಯುವುದನ್ನು ತಡೆಯುತ್ತದೆ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "Which cause did \"Don't touch README.md\" get in the lab?",
      "qKn": "ಲ್ಯಾಬ್‌ನಲ್ಲಿ \"Don't touch README.md\" ಗೆ ಯಾವ ಕಾರಣ ಸಿಕ್ಕಿತು?",
      "opts": [
       "unclassified",
       "off_scope_edit",
       "missing_field",
       "wrong_result"
      ],
      "optsKn": [
       "unclassified",
       "off_scope_edit",
       "missing_field",
       "wrong_result"
      ],
      "correct": 0
     },
     {
      "q": "What is in the fingerprint?",
      "qKn": "Fingerprint ನಲ್ಲಿ ಏನಿದೆ?",
      "opts": [
       "Cause and target",
       "The raw message",
       "A timestamp",
       "The agent name"
      ],
      "optsKn": [
       "ಕಾರಣ ಮತ್ತು target",
       "ಕಚ್ಚಾ ಸಂದೇಶ",
       "timestamp",
       "agent ಹೆಸರು"
      ],
      "correct": 0
     },
     {
      "q": "How many recurrences did README.md have?",
      "qKn": "README.md ಗೆ ಎಷ್ಟು ಪುನರಾವರ್ತನೆ ಇತ್ತು?",
      "opts": [
       "3",
       "1",
       "4",
       "0"
      ],
      "optsKn": [
       "3",
       "1",
       "4",
       "0"
      ],
      "correct": 0
     },
     {
      "q": "What would ignoring the target have done?",
      "qKn": "target ನಿರ್ಲಕ್ಷಿಸಿದ್ದರೆ ಏನಾಗುತ್ತಿತ್ತು?",
      "opts": [
       "Counted 4 off_scope_edit events as one problem",
       "Nothing",
       "Rejected all events",
       "Signed the events"
      ],
      "optsKn": [
       "4 off_scope_edit events ಒಂದೇ ಸಮಸ್ಯೆ ಎಂದು ಎಣಿಸುತ್ತಿತ್ತು",
       "ಏನೂ ಇಲ್ಲ",
       "ಎಲ್ಲಾ events ತಿರಸ್ಕರಿಸುತ್ತಿತ್ತು",
       "events ಗೆ ಸಹಿ ಮಾಡುತ್ತಿತ್ತು"
      ],
      "correct": 0
     },
     {
      "q": "Where do unmatched wordings go?",
      "qKn": "ಹೊಂದದ ಪದಪ್ರಯೋಗಗಳು ಎಲ್ಲಿಗೆ ಹೋಗುತ್ತವೆ?",
      "opts": [
       "To a human decision",
       "To a guessed cause",
       "To retirement",
       "Deleted"
      ],
      "optsKn": [
       "ಮಾನವ ನಿರ್ಧಾರಕ್ಕೆ",
       "ಊಹಿಸಿದ ಕಾರಣಕ್ಕೆ",
       "ನಿವೃತ್ತಿಗೆ",
       "ಅಳಿಸಲಾಗುತ್ತದೆ"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
