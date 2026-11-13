module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6366020ed05b321583",
 "order": 0,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Multi-Session Handoff (Part 1 of 3) — The Seven-Field Packet",
 "titleKn": "ಬಹು-ಸೆಷನ್ ಹಸ್ತಾಂತರ (ಭಾಗ 1 / 3) — ಏಳು-ಕ್ಷೇತ್ರ ಪ್ಯಾಕೆಟ್",
 "desc": "Generate a seven-field handoff, trim feedback without losing failures and refuse handoffs with no usable next action or with cleanup blockers.",
 "descKn": "ಏಳು-ಕ್ಷೇತ್ರ ಹಸ್ತಾಂತರ ರಚಿಸಿ, ವೈಫಲ್ಯ ಕಳೆದುಕೊಳ್ಳದೆ feedback ಕತ್ತರಿಸಿ ಮತ್ತು ಬಳಸಬಹುದಾದ next action ಇಲ್ಲದ ಅಥವಾ cleanup ತಡೆ ಇರುವ ಹಸ್ತಾಂತರ ನಿರಾಕರಿಸಿ.",
 "objectives": [
  "Name the seven fields.",
  "Guard the trim edge cases.",
  "Keep failing records.",
  "Refuse blank next actions.",
  "Generate both files from one source."
 ],
 "objectivesKn": [
  "ಏಳು ಕ್ಷೇತ್ರಗಳನ್ನು ಹೆಸರಿಸಿ.",
  "ಕತ್ತರಿಸುವಿಕೆ ಅಂಚಿನ ಪ್ರಕರಣ ಕಾಯಿರಿ.",
  "ವಿಫಲ ದಾಖಲೆಗಳನ್ನು ಉಳಿಸಿ.",
  "ಖಾಲಿ next actions ನಿರಾಕರಿಸಿ.",
  "ಎರಡೂ ಫೈಲ್‌ಗಳನ್ನು ಒಂದೇ ಮೂಲದಿಂದ ರಚಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Multi-Session Handoff (Part 1 of 3)",
    "textKn": "ಬಹು-ಸೆಷನ್ ಹಸ್ತಾಂತರ (ಭಾಗ 1 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 1 of 3: generating the seven-field handoff packet, trimming feedback, rejecting a missing next action or cleanup blockers and writing Markdown plus JSON. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind multi-session handoff (the seven-field packet, consumer validation, staleness and safe publication), not the real software, and the workbench artifacts are made up by the lab and no language model is involved, so no real LLM behaviour is measured. The pasted lesson said its original main.py was not supplied, so the lab is our own implementation of the behaviour it describes; results depend on the machine it ran on. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 1ನೆಯದು: ಏಳು-ಕ್ಷೇತ್ರ ಹಸ್ತಾಂತರ ಪ್ಯಾಕೆಟ್ ರಚಿಸುವುದು, feedback ಕತ್ತರಿಸುವುದು, ಕಾಣೆಯಾದ next action ಅಥವಾ cleanup ತಡೆಗಳನ್ನು ತಿರಸ್ಕರಿಸುವುದು ಮತ್ತು Markdown ಜೊತೆ JSON ಬರೆಯುವುದು. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು ಬಹು-ಸೆಷನ್ ಹಸ್ತಾಂತರ (ಏಳು-ಕ್ಷೇತ್ರ ಪ್ಯಾಕೆಟ್, ಗ್ರಾಹಕ ಮಾನ್ಯೀಕರಣ, ಹಳೆಯದಾಗುವಿಕೆ ಮತ್ತು ಸುರಕ್ಷಿತ ಪ್ರಕಟಣೆ) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು workbench ಕಲಾಕೃತಿಗಳನ್ನು ಲ್ಯಾಬ್ ಕಲ್ಪಿಸಿದ್ದು ಮತ್ತು ಯಾವುದೇ ಭಾಷಾ ಮಾದರಿ ಇಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಅಂಟಿಸಿದ lesson ತನ್ನ ಮೂಲ main.py ಒದಗಿಸಿಲ್ಲ ಎಂದು ಹೇಳಿತ್ತು, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್ ಅದು ವಿವರಿಸುವ ವರ್ತನೆಯ ನಮ್ಮದೇ ಅನುಷ್ಠಾನ; ಫಲಿತಾಂಶಗಳು ಅದು ಓಡಿದ ಯಂತ್ರವನ್ನು ಅವಲಂಬಿಸಿವೆ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "The Next Session Starts Cold",
    "textKn": "ಮುಂದಿನ ಸೆಷನ್ ಶೀತವಾಗಿ ಆರಂಭವಾಗುತ್ತದೆ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "A Handoff Is an Operational Artifact",
    "headingKn": "ಹಸ್ತಾಂತರ ಕಾರ್ಯಾಚರಣಾ ಕಲಾಕೃತಿ",
    "bodyEn": "When a session ends, the next one has no memory of why the payment retry test was failing or what was already tried. A handoff packet carries seven fields: summary, changed_files, commands_run, failed_attempts, open_risks, next_action and verdict_pointer. This part generates it from made-up workbench artifacts, tests the feedback trimmer, rejects a blank next action and cleanup blockers and writes handoff.json for the agent and handoff.md for a person.",
    "bodyKn": "ಸೆಷನ್ ಮುಗಿದಾಗ, ಮುಂದಿನದಕ್ಕೆ payment retry ಪರೀಕ್ಷೆ ಏಕೆ ವಿಫಲವಾಗುತ್ತಿತ್ತು ಅಥವಾ ಈಗಾಗಲೇ ಏನು ಪ್ರಯತ್ನಿಸಲಾಗಿತ್ತು ಎಂಬ ನೆನಪಿಲ್ಲ. ಹಸ್ತಾಂತರ ಪ್ಯಾಕೆಟ್ ಏಳು ಕ್ಷೇತ್ರಗಳನ್ನು ಹೊರುತ್ತದೆ: summary, changed_files, commands_run, failed_attempts, open_risks, next_action ಮತ್ತು verdict_pointer. ಈ ಭಾಗ ಕಲ್ಪಿತ workbench ಕಲಾಕೃತಿಗಳಿಂದ ಅದನ್ನು ರಚಿಸಿ, feedback ಕತ್ತರಿಸುವ ಕಾರ್ಯ ಪರೀಕ್ಷಿಸಿ, ಖಾಲಿ next action ಮತ್ತು cleanup ತಡೆಗಳನ್ನು ತಿರಸ್ಕರಿಸಿ, agent ಗೆ handoff.json ಮತ್ತು ವ್ಯಕ್ತಿಗೆ handoff.md ಬರೆಯುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Seven Fields, Two Files",
    "headingKn": "ಏಳು ಕ್ಷೇತ್ರಗಳು, ಎರಡು ಫೈಲ್‌ಗಳು",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">Seven fields, two files</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">snapshot</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">workbench artifacts</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">trim</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">keep failures</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">gate</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">next_action + cleanup</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">handoff.json + .md</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">one source</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">a handoff names the next action</text></svg>",
    "captionEn": "The session ends; the work does not.",
    "captionKn": "ಸೆಷನ್ ಮುಗಿಯುತ್ತದೆ; ಕೆಲಸ ಮುಗಿಯುವುದಿಲ್ಲ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "The seven fields",
    "headingKn": "ಏಳು ಕ್ಷೇತ್ರಗಳು",
    "headers": [
     "Field",
     "Holds",
     "Next session uses it to"
    ],
    "rows": [
     [
      "summary",
      "where things stand",
      "orient"
     ],
     [
      "changed_files",
      "files touched",
      "know what moved"
     ],
     [
      "commands_run",
      "recorded commands",
      "avoid repeating them"
     ],
     [
      "failed_attempts",
      "what did not work",
      "avoid dead ends"
     ],
     [
      "open_risks",
      "known unknowns",
      "plan checks"
     ],
     [
      "next_action",
      "first concrete step",
      "start work"
     ],
     [
      "verdict_pointer",
      "path to the verdict report",
      "find the evidence"
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
    "filename": "ms_1.py",
    "headingEn": "Trimming and generate_handoff",
    "headingKn": "ಕತ್ತರಿಸುವುದು ಮತ್ತು generate_handoff",
    "descEn": "trim_feedback guards a negative or zero keep_last; trim_keep_failures keeps every failing record plus the recent tail. generate_handoff refuses cleanup blockers and a blank or non-string next_action, then builds the payload and a Markdown rendering from it.",
    "descKn": "trim_feedback ಋಣಾತ್ಮಕ ಅಥವಾ ಶೂನ್ಯ keep_last ಅನ್ನು ಕಾಯುತ್ತದೆ; trim_keep_failures ಪ್ರತಿ ವಿಫಲ ದಾಖಲೆ ಮತ್ತು ಇತ್ತೀಚಿನ ಬಾಲವನ್ನು ಉಳಿಸುತ್ತದೆ. generate_handoff cleanup ತಡೆಗಳನ್ನು ಮತ್ತು ಖಾಲಿ ಅಥವಾ string ಅಲ್ಲದ next_action ಅನ್ನು ನಿರಾಕರಿಸಿ, ನಂತರ payload ಮತ್ತು ಅದರಿಂದ Markdown ರೂಪ ನಿರ್ಮಿಸುತ್ತದೆ.",
    "code": "def trim_naive(records, keep_last=3):\n    if keep_last < 0:\n        raise ValueError(\"keep_last must not be negative\")\n    return records[-keep_last:]\n\n\ndef trim_feedback(records, keep_last=3):\n    if keep_last < 0:\n        raise ValueError(\"keep_last must not be negative\")\n    return records[len(records) - keep_last:] if keep_last else []\n\n\ndef trim_keep_failures(records, keep_last=3):\n    tail = trim_feedback(records, keep_last)\n    failed = [r for r in records if r[\"exit_code\"] != 0 and r not in tail]\n    return failed + tail\n\n\ndef generate_handoff(snap):\n    if snap[\"cleanup\"][\"blocking_issues\"]:\n        raise ValueError(\"cleanup blockers: \" + \"; \".join(snap[\"cleanup\"][\"blocking_issues\"]))\n    na = snap[\"state\"].get(\"next_action\")\n    if not isinstance(na, str) or not na.strip():\n        raise ValueError(\"next_action is missing or blank\")\n    payload = {\n        \"summary\": snap[\"state\"][\"summary\"],\n        \"changed_files\": sorted(snap[\"changed_files\"]),\n        \"commands_run\": [r[\"command\"] for r in trim_keep_failures(snap[\"feedback\"])],\n        \"failed_attempts\": snap[\"state\"].get(\"failed_attempts\", []),\n        \"open_risks\": snap[\"state\"].get(\"open_risks\", []),\n        \"next_action\": na.strip(),\n        \"verdict_pointer\": snap[\"verdict_pointer\"],\n    }\n    md = [\"# Handoff\", \"\"] + [f\"## {k}{chr(10)}{payload[k] if isinstance(payload[k], str) else chr(10).join('- ' + str(x) for x in payload[k]) or '(none)'}{chr(10)}\" for k in FIELDS]\n    return chr(10).join(md), payload"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "ms_1.py",
    "headingEn": "main(): six experiments",
    "headingKn": "main(): ಆರು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() generates a handoff, compares a naive and a guarded trim for keep_last 3, 1 and 0, checks whether trimming drops the one failure, tries four bad snapshots, tests a vague next action and writes both files.",
    "descKn": "main() ಹಸ್ತಾಂತರ ರಚಿಸಿ, keep_last 3, 1 ಮತ್ತು 0 ಗೆ ಸರಳ ಮತ್ತು ಕಾಯ್ದ ಕತ್ತರಿಸುವಿಕೆ ಹೋಲಿಸಿ, ಕತ್ತರಿಸುವಿಕೆ ಏಕೈಕ ವೈಫಲ್ಯ ಬಿಡುತ್ತದೆಯೇ ಎಂದು ಪರಿಶೀಲಿಸಿ, ನಾಲ್ಕು ಕೆಟ್ಟ snapshots ಪ್ರಯತ್ನಿಸಿ, ಅಸ್ಪಷ್ಟ next action ಪರೀಕ್ಷಿಸಿ ಮತ್ತು ಎರಡೂ ಫೈಲ್ ಬರೆಯುತ್ತದೆ.",
    "code": "def main():\n    section(\"1. Genuinely running: generating the seven-field handoff\")\n    md, payload = generate_handoff(snapshot())\n    print(\"fields present:\", [k for k in FIELDS if k in payload], \"| all seven:\", all(k in payload for k in FIELDS))\n    print(\"next_action:\", payload[\"next_action\"])\n    print(\"commands_run kept:\", payload[\"commands_run\"])\n    print(\"every field of the packet came from the snapshot of artifacts, not from a conversation; the next session can read next_action first and start work\")\n\n    section(\"2. Genuinely checking: trimming the feedback list\")\n    recs = [{\"command\": f\"c{i}\", \"exit_code\": 0} for i in range(6)]\n    for k in (3, 1, 0):\n        print(f\"keep_last={k}: naive slice keeps {len(trim_naive(recs, k))} records | guarded version keeps {len(trim_feedback(recs, k))}\")\n    try:\n        trim_feedback(recs, -1)\n    except ValueError as e:\n        print(\"keep_last=-1:\", e)\n    print(\"records[-0:] is records[0:], so the naive slice with keep_last=0 kept all six records instead of none; the guarded version returns an empty list, which is why the zero case has to be tested and not assumed\")\n\n    section(\"3. Genuinely measuring: trimming can drop the failure the next session needs\")\n    s = snapshot()\n    kept = trim_feedback(s[\"feedback\"])\n    print(\"last three records only:\", [(r[\"command\"], r[\"exit_code\"]) for r in kept])\n    print(\"failure present in the trimmed list:\", any(r[\"exit_code\"] != 0 for r in kept))\n    kept2 = trim_keep_failures(s[\"feedback\"])\n    print(\"failures plus last three:\", [(r[\"command\"], r[\"exit_code\"]) for r in kept2])\n    print(\"the only failing command, cmd1, was older than the last three records and disappeared from a plain tail trim, so a handoff built that way would not mention it; keeping every failure plus the recent tail preserved it at the cost of a longer list\")\n\n    section(\"4. Genuinely running: rejected handoffs\")\n    cases = {\"blank next_action\": lambda x: x[\"state\"].update(next_action=\"   \"), \"missing next_action\": lambda x: x[\"state\"].pop(\"next_action\"), \"next_action is a list\": lambda x: x[\"state\"].update(next_action=[\"run tests\"]),\n             \"cleanup blocker\": lambda x: x[\"cleanup\"].update(blocking_issues=[\"tests directory left in a temp state\"])}\n    for label, mut in cases.items():\n        x = snapshot()\n        mut(x)\n        try:\n            generate_handoff(x)\n            print(f\"{label:22} accepted\")\n        except ValueError as e:\n            print(f\"{label:22} rejected: {e}\")\n    print(\"a handoff with no usable next action or with unresolved cleanup blockers is refused before any file is written, because a packet that cannot tell the next session what to do is worse than none\")\n\n    section(\"5. Genuinely measuring: a next_action can be non-empty and useless\")\n    for na in (\"Continue work.\", \"Run python -m unittest tests.test_payment_retry and inspect the timeout assertion.\"):\n        x = snapshot()\n        x[\"state\"][\"next_action\"] = na\n        _, p = generate_handoff(x)\n        concrete = any(tok in na for tok in (\"python\", \"tests/\", \"src/\", \".py\", \"unittest\"))\n        print(f\"{na[:48]:50} accepted, concrete by a simple keyword heuristic: {concrete}\")\n    print(\"both were accepted because the generator only checks that text exists; the keyword test here is a crude heuristic of our own that separates these two examples and would miss many cases, so specificity needs a reviewer or a stricter schema\")\n\n    section(\"6. Genuinely running: Markdown and JSON written side by side\")\n    with tempfile.TemporaryDirectory() as d:\n        (Path(d) / \"handoff.md\").write_text(md, encoding=\"utf-8\")\n        (Path(d) / \"handoff.json\").write_text(json.dumps(payload, indent=2), encoding=\"utf-8\")\n        back = json.loads((Path(d) / \"handoff.json\").read_text(encoding=\"utf-8\"))\n        print(\"json round trip equal:\", back == payload, \"| markdown headings:\", [l for l in (Path(d) / \"handoff.md\").read_text(encoding=\"utf-8\").splitlines() if l.startswith(\"## \")])\n    print(\"the JSON file is for the next agent and the Markdown for a human, both generated from the same dictionary so they cannot drift apart at creation time\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: generating the seven-field handoff ---\nfields present: ['summary', 'changed_files', 'commands_run', 'failed_attempts', 'open_risks', 'next_action', 'verdict_pointer'] | all seven: True\nnext_action: Run python -m unittest tests.test_payment_retry and inspect the timeout assertion.\ncommands_run kept: ['cmd1', 'cmd3', 'cmd4', 'cmd5']\nevery field of the packet came from the snapshot of artifacts, not from a conversation; the next session can read next_action first and start work\n\n--- 2. Genuinely checking: trimming the feedback list ---\nkeep_last=3: naive slice keeps 3 records | guarded version keeps 3\nkeep_last=1: naive slice keeps 1 records | guarded version keeps 1\nkeep_last=0: naive slice keeps 6 records | guarded version keeps 0\nkeep_last=-1: keep_last must not be negative\nrecords[-0:] is records[0:], so the naive slice with keep_last=0 kept all six records instead of none; the guarded version returns an empty list, which is why the zero case has to be tested and not assumed\n\n--- 3. Genuinely measuring: trimming can drop the failure the next session needs ---\nlast three records only: [('cmd3', 0), ('cmd4', 0), ('cmd5', 0)]\nfailure present in the trimmed list: False\nfailures plus last three: [('cmd1', 1), ('cmd3', 0), ('cmd4', 0), ('cmd5', 0)]\nthe only failing command, cmd1, was older than the last three records and disappeared from a plain tail trim, so a handoff built that way would not mention it; keeping every failure plus the recent tail preserved it at the cost of a longer list\n\n--- 4. Genuinely running: rejected handoffs ---\nblank next_action      rejected: next_action is missing or blank\nmissing next_action    rejected: next_action is missing or blank\nnext_action is a list  rejected: next_action is missing or blank\ncleanup blocker        rejected: cleanup blockers: tests directory left in a temp state\na handoff with no usable next action or with unresolved cleanup blockers is refused before any file is written, because a packet that cannot tell the next session what to do is worse than none\n\n--- 5. Genuinely measuring: a next_action can be non-empty and useless ---\nContinue work.                                     accepted, concrete by a simple keyword heuristic: False\nRun python -m unittest tests.test_payment_retry    accepted, concrete by a simple keyword heuristic: True\nboth were accepted because the generator only checks that text exists; the keyword test here is a crude heuristic of our own that separates these two examples and would miss many cases, so specificity needs a reviewer or a stricter schema\n\n--- 6. Genuinely running: Markdown and JSON written side by side ---\njson round trip equal: True | markdown headings: ['## summary', '## changed_files', '## commands_run', '## failed_attempts', '## open_risks', '## next_action', '## verdict_pointer']\nthe JSON file is for the next agent and the Markdown for a human, both generated from the same dictionary so they cannot drift apart at creation time"
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
    "headingEn": "Experiment 1: Generating the seven-field handoff",
    "headingKn": "ಪ್ರಯೋಗ 1: Generating the seven-field handoff",
    "bodyEn": "What it ran: Generating the seven-field handoff. What the lab concluded: every field of the packet came from the snapshot of artifacts, not from a conversation; the next session can read next_action first and start work",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Generating the seven-field handoff. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): every field of the packet came from the snapshot of artifacts, not from a conversation; the next session can read next_action first and start work"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. Genuinely running: generating the seven-field handoff ---\nfields present: ['summary', 'changed_files', 'commands_run', 'failed_attempts', 'open_risks', 'next_action', 'verdict_pointer'] | all seven: True\nnext_action: Run python -m unittest tests.test_payment_retry and inspect the timeout assertion.\ncommands_run kept: ['cmd1', 'cmd3', 'cmd4', 'cmd5']"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: Trimming the feedback list",
    "headingKn": "ಪ್ರಯೋಗ 2: Trimming the feedback list",
    "bodyEn": "What it ran: Trimming the feedback list. What the lab concluded: records[-0:] is records[0:], so the naive slice with keep_last=0 kept all six records instead of none; the guarded version returns an empty list, which is why the zero case has to be tested and not assumed",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Trimming the feedback list. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): records[-0:] is records[0:], so the naive slice with keep_last=0 kept all six records instead of none; the guarded version returns an empty list, which is why the zero case has to be tested and not assumed"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely checking: trimming the feedback list ---\nkeep_last=3: naive slice keeps 3 records | guarded version keeps 3\nkeep_last=1: naive slice keeps 1 records | guarded version keeps 1\nkeep_last=0: naive slice keeps 6 records | guarded version keeps 0\nkeep_last=-1: keep_last must not be negative"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: Trimming can drop the failure the next session needs",
    "headingKn": "ಪ್ರಯೋಗ 3: Trimming can drop the failure the next session needs",
    "bodyEn": "What it ran: Trimming can drop the failure the next session needs. What the lab concluded: the only failing command, cmd1, was older than the last three records and disappeared from a plain tail trim, so a handoff built that way would not mention it; keeping every failure plus the recent tail preserved it at the cost of a longer list",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Trimming can drop the failure the next session needs. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the only failing command, cmd1, was older than the last three records and disappeared from a plain tail trim, so a handoff built that way would not mention it; keeping every failure plus the recent tail preserved it at the cost of a longer list"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely measuring: trimming can drop the failure the next session needs ---\nlast three records only: [('cmd3', 0), ('cmd4', 0), ('cmd5', 0)]\nfailure present in the trimmed list: False\nfailures plus last three: [('cmd1', 1), ('cmd3', 0), ('cmd4', 0), ('cmd5', 0)]"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 4: Rejected handoffs",
    "headingKn": "ಪ್ರಯೋಗ 4: Rejected handoffs",
    "bodyEn": "What it ran: Rejected handoffs. What the lab concluded: a handoff with no usable next action or with unresolved cleanup blockers is refused before any file is written, because a packet that cannot tell the next session what to do is worse than none",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Rejected handoffs. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a handoff with no usable next action or with unresolved cleanup blockers is refused before any file is written, because a packet that cannot tell the next session what to do is worse than none"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 4. Genuinely running: rejected handoffs ---\nblank next_action      rejected: next_action is missing or blank\nmissing next_action    rejected: next_action is missing or blank\nnext_action is a list  rejected: next_action is missing or blank\ncleanup blocker        rejected: cleanup blockers: tests directory left in a temp state"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 5: A next_action can be non-empty and useless",
    "headingKn": "ಪ್ರಯೋಗ 5: A next_action can be non-empty and useless",
    "bodyEn": "What it ran: A next_action can be non-empty and useless. What the lab concluded: both were accepted because the generator only checks that text exists; the keyword test here is a crude heuristic of our own that separates these two examples and would miss many cases, so specificity needs a reviewer or a stricter schema",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A next_action can be non-empty and useless. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): both were accepted because the generator only checks that text exists; the keyword test here is a crude heuristic of our own that separates these two examples and would miss many cases, so specificity needs a reviewer or a stricter schema"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 5. Genuinely measuring: a next_action can be non-empty and useless ---\nContinue work.                                     accepted, concrete by a simple keyword heuristic: False\nRun python -m unittest tests.test_payment_retry    accepted, concrete by a simple keyword heuristic: True"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 6: Markdown and JSON written side by side",
    "headingKn": "ಪ್ರಯೋಗ 6: Markdown and JSON written side by side",
    "bodyEn": "What it ran: Markdown and JSON written side by side. What the lab concluded: the JSON file is for the next agent and the Markdown for a human, both generated from the same dictionary so they cannot drift apart at creation time",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Markdown and JSON written side by side. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the JSON file is for the next agent and the Markdown for a human, both generated from the same dictionary so they cannot drift apart at creation time"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 6. Genuinely running: Markdown and JSON written side by side ---\njson round trip equal: True | markdown headings: ['## summary', '## changed_files', '## commands_run', '## failed_attempts', '## open_risks', '## next_action', '## verdict_pointer']"
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
    "headingEn": "Genuinely Found: A Slice Bug and a Trim That Dropped the Failure",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಒಂದು Slice ದೋಷ ಮತ್ತು ವೈಫಲ್ಯ ಬಿಟ್ಟ ಕತ್ತರಿಸುವಿಕೆ",
    "bodyEn": "Section 1: the generated packet had all seven fields. Section 2: for six records, keep_last 3 and 1 kept 3 and 1 records, while records[-0:] with keep_last 0 kept all six; the guarded version kept 0 and -1 raised ValueError. Section 3: the only failing command, cmd1, was older than the last three records and a plain tail trim lost it; failures plus the tail kept it.",
    "bodyKn": "ವಿಭಾಗ 1: ರಚಿಸಿದ ಪ್ಯಾಕೆಟ್ ಎಲ್ಲಾ ಏಳು ಕ್ಷೇತ್ರ ಹೊಂದಿತ್ತು. ವಿಭಾಗ 2: ಆರು ದಾಖಲೆಗಳಿಗೆ keep_last 3 ಮತ್ತು 1 ಕ್ರಮವಾಗಿ 3 ಮತ್ತು 1 ದಾಖಲೆ ಉಳಿಸಿದವು, ಆದರೆ keep_last 0 ನೊಂದಿಗೆ records[-0:] ಎಲ್ಲಾ ಆರು ಉಳಿಸಿತು; ಕಾಯ್ದ ಆವೃತ್ತಿ 0 ಉಳಿಸಿತು ಮತ್ತು -1 ValueError ಎತ್ತಿತು. ವಿಭಾಗ 3: ಏಕೈಕ ವಿಫಲ ಆದೇಶ cmd1 ಕೊನೆಯ ಮೂರು ದಾಖಲೆಗಳಿಗಿಂತ ಹಳೆಯದಾಗಿತ್ತು ಮತ್ತು ಸರಳ ಬಾಲ ಕತ್ತರಿಸುವಿಕೆ ಅದನ್ನು ಕಳೆದುಕೊಂಡಿತು; ವೈಫಲ್ಯಗಳ ಜೊತೆ ಬಾಲ ಅದನ್ನು ಉಳಿಸಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Rejected Handoffs, and Non-Empty Is Not Useful",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ತಿರಸ್ಕೃತ ಹಸ್ತಾಂತರಗಳು, ಮತ್ತು ಖಾಲಿಯಲ್ಲದಿರುವುದು ಉಪಯುಕ್ತವಲ್ಲ",
    "bodyEn": "Section 4: a blank next_action, a missing one, a list instead of a string and a cleanup blocker were each rejected before any file was written. Section 5: \"Continue work.\" and a concrete command were both accepted, and a crude keyword heuristic of our own separated them. Section 6: handoff.json round-tripped equal and handoff.md had seven headings.",
    "bodyKn": "ವಿಭಾಗ 4: ಖಾಲಿ next_action, ಕಾಣೆಯಾದದ್ದು, string ಬದಲು ಪಟ್ಟಿ ಮತ್ತು cleanup ತಡೆ ಪ್ರತಿಯೊಂದೂ ಯಾವುದೇ ಫೈಲ್ ಬರೆಯುವ ಮುನ್ನ ತಿರಸ್ಕೃತವಾದವು. ವಿಭಾಗ 5: \"Continue work.\" ಮತ್ತು ಒಂದು ನಿರ್ದಿಷ್ಟ ಆದೇಶ ಎರಡೂ ಸ್ವೀಕೃತವಾದವು, ಮತ್ತು ನಮ್ಮದೇ ಕಚ್ಚಾ keyword heuristic ಅವನ್ನು ಬೇರ್ಪಡಿಸಿತು. ವಿಭಾಗ 6: handoff.json ಸಮನಾಗಿ round-trip ಆಯಿತು ಮತ್ತು handoff.md ಏಳು ಶೀರ್ಷಿಕೆ ಹೊಂದಿತ್ತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A handoff that names the next concrete step and keeps the failures lets a cold session start work in minutes instead of rediscovering the same dead ends.",
    "bodyKn": "ಮುಂದಿನ ನಿರ್ದಿಷ್ಟ ಹಂತ ಹೆಸರಿಸಿ ವೈಫಲ್ಯಗಳನ್ನು ಉಳಿಸುವ ಹಸ್ತಾಂತರ ಶೀತ ಸೆಷನ್ ಅನ್ನು ಅದೇ ಮುಚ್ಚಿದ ದಾರಿಗಳನ್ನು ಮರುಕಂಡುಹಿಡಿಯದೆ ನಿಮಿಷಗಳಲ್ಲಿ ಕೆಲಸ ಆರಂಭಿಸಲು ಬಿಡುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"keeping the last three records keeps what matters.\" The one failure was older than that.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಕೊನೆಯ ಮೂರು ದಾಖಲೆ ಇಟ್ಟರೆ ಮುಖ್ಯವಾದದ್ದು ಉಳಿಯುತ್ತದೆ.\" ಏಕೈಕ ವೈಫಲ್ಯ ಅದಕ್ಕಿಂತ ಹಳೆಯದಾಗಿತ್ತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Handoff packet: the structured state passed to the next session. next_action: the first concrete step. verdict_pointer: a path to the verification or review report. Feedback trimming: keeping a bounded set of command records. Blocking issue: a cleanup problem that stops publication.",
    "bodyKn": "Handoff packet: ಮುಂದಿನ ಸೆಷನ್‌ಗೆ ನೀಡುವ ರಚನಾತ್ಮಕ ಸ್ಥಿತಿ. next_action: ಮೊದಲ ನಿರ್ದಿಷ್ಟ ಹಂತ. verdict_pointer: ಪರಿಶೀಲನೆ ಅಥವಾ review ವರದಿಯ ಮಾರ್ಗ. Feedback trimming: ಮಿತಿಯ ಆದೇಶ ದಾಖಲೆಗಳ ಸೆಟ್ ಉಳಿಸುವುದು. Blocking issue: ಪ್ರಕಟಣೆ ನಿಲ್ಲಿಸುವ cleanup ಸಮಸ್ಯೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) The packet had seven fields from the artifacts. 2) records[-0:] kept everything for keep_last 0. 3) A plain tail trim dropped the only failure. 4) Four bad snapshots were refused. 5) A vague next action was accepted by the generator.",
    "bodyKn": "1) ಪ್ಯಾಕೆಟ್ ಕಲಾಕೃತಿಗಳಿಂದ ಏಳು ಕ್ಷೇತ್ರ ಹೊಂದಿತ್ತು. 2) keep_last 0 ಗೆ records[-0:] ಎಲ್ಲವನ್ನೂ ಉಳಿಸಿತು. 3) ಸರಳ ಬಾಲ ಕತ್ತರಿಸುವಿಕೆ ಏಕೈಕ ವೈಫಲ್ಯ ಬಿಟ್ಟಿತು. 4) ನಾಲ್ಕು ಕೆಟ್ಟ snapshots ನಿರಾಕರಿಸಲ್ಪಟ್ಟವು. 5) ಅಸ್ಪಷ್ಟ next action ಅನ್ನು generator ಸ್ವೀಕರಿಸಿತು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "How many records did records[-0:] keep for keep_last 0 out of six?",
      "qKn": "ಆರರಲ್ಲಿ keep_last 0 ಗೆ records[-0:] ಎಷ್ಟು ದಾಖಲೆ ಉಳಿಸಿತು?",
      "opts": [
       "6",
       "0",
       "1",
       "3"
      ],
      "optsKn": [
       "6",
       "0",
       "1",
       "3"
      ],
      "correct": 0
     },
     {
      "q": "Why did a plain last-three trim lose the failure?",
      "qKn": "ಸರಳ ಕೊನೆಯ-ಮೂರು ಕತ್ತರಿಸುವಿಕೆ ವೈಫಲ್ಯ ಏಕೆ ಕಳೆದುಕೊಂಡಿತು?",
      "opts": [
       "The failing command was older than the last three records",
       "It was deleted",
       "It was a string",
       "keep_last was negative"
      ],
      "optsKn": [
       "ವಿಫಲ ಆದೇಶ ಕೊನೆಯ ಮೂರು ದಾಖಲೆಗಿಂತ ಹಳೆಯದಾಗಿತ್ತು",
       "ಅದು ಅಳಿಸಲ್ಪಟ್ಟಿತು",
       "ಅದು string ಆಗಿತ್ತು",
       "keep_last ಋಣಾತ್ಮಕವಾಗಿತ್ತು"
      ],
      "correct": 0
     },
     {
      "q": "How many fields does the handoff packet have?",
      "qKn": "ಹಸ್ತಾಂತರ ಪ್ಯಾಕೆಟ್‌ಗೆ ಎಷ್ಟು ಕ್ಷೇತ್ರಗಳಿವೆ?",
      "opts": [
       "7",
       "3",
       "5",
       "10"
      ],
      "optsKn": [
       "7",
       "3",
       "5",
       "10"
      ],
      "correct": 0
     },
     {
      "q": "What happened to a cleanup blocker?",
      "qKn": "cleanup ತಡೆಗೆ ಏನಾಯಿತು?",
      "opts": [
       "Generation was refused",
       "It was ignored",
       "It was trimmed",
       "It was published"
      ],
      "optsKn": [
       "ರಚನೆ ನಿರಾಕರಿಸಲ್ಪಟ್ಟಿತು",
       "ನಿರ್ಲಕ್ಷಿಸಲ್ಪಟ್ಟಿತು",
       "ಕತ್ತರಿಸಲ್ಪಟ್ಟಿತು",
       "ಪ್ರಕಟಿಸಲ್ಪಟ್ಟಿತು"
      ],
      "correct": 0
     },
     {
      "q": "Why are Markdown and JSON generated from one dictionary?",
      "qKn": "Markdown ಮತ್ತು JSON ಅನ್ನು ಒಂದೇ dictionary ಯಿಂದ ಏಕೆ ರಚಿಸಲಾಗುತ್ತದೆ?",
      "opts": [
       "So they cannot drift apart at creation",
       "To make them shorter",
       "To encrypt them",
       "To run commands"
      ],
      "optsKn": [
       "ರಚನೆಯಲ್ಲಿ ಅವು ಬೇರೆಯಾಗದಿರಲು",
       "ಚಿಕ್ಕದಾಗಿಸಲು",
       "ಎನ್‌ಕ್ರಿಪ್ಟ್ ಮಾಡಲು",
       "ಆದೇಶ ಓಡಿಸಲು"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
