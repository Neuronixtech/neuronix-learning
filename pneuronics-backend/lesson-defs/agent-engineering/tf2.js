module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6af74d1962582a270995fb8c",
 "order": 1,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Frame the Task Before the Agent Writes Code (Part 2 of 3) — Validating, Rendering and Auditing",
 "titleKn": "Agent ಕೋಡ್ ಬರೆಯುವ ಮುನ್ನ ಕಾರ್ಯ ರೂಪಿಸಿ (ಭಾಗ 2 / 3) — ಮಾನ್ಯೀಕರಣ, ರೂಪಿಸುವುದು ಮತ್ತು ಲೆಕ್ಕಪರಿಶೋಧನೆ",
 "desc": "Validate before writing, check exit codes through a real subprocess, audit the rendered artifact and sanitise text that could change its structure.",
 "descKn": "ಬರೆಯುವ ಮುನ್ನ ಮಾನ್ಯಗೊಳಿಸಿ, ನಿಜ subprocess ಮೂಲಕ exit codes ಪರಿಶೀಲಿಸಿ, ರೂಪಿಸಿದ artifact ಲೆಕ್ಕಪರಿಶೋಧಿಸಿ ಮತ್ತು ರಚನೆ ಬದಲಿಸಬಹುದಾದ ಪಠ್ಯ ಶುದ್ಧೀಕರಿಸಿ.",
 "objectives": [
  "Validate before writing.",
  "Use exit codes.",
  "Audit the generated file.",
  "Sanitise user text.",
  "Do not mistake shape for truth."
 ],
 "objectivesKn": [
  "ಬರೆಯುವ ಮುನ್ನ ಮಾನ್ಯಗೊಳಿಸಿ.",
  "exit codes ಬಳಸಿ.",
  "ರಚಿಸಿದ ಫೈಲ್ ಲೆಕ್ಕಪರಿಶೋಧಿಸಿ.",
  "ಬಳಕೆದಾರ ಪಠ್ಯ ಶುದ್ಧೀಕರಿಸಿ.",
  "ಆಕಾರವನ್ನು ಸತ್ಯ ಎಂದು ತಪ್ಪಾಗಿ ಭಾವಿಸಬೇಡಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Frame the Task Before the Agent Writes Code (Part 2 of 3)",
    "textKn": "Agent ಕೋಡ್ ಬರೆಯುವ ಮುನ್ನ ಕಾರ್ಯ ರೂಪಿಸಿ (ಭಾಗ 2 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 2 of 3: rendering a validated frame to Markdown, validating before writing, exit codes through a real subprocess, an artifact audit and a Markdown injection problem. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind framing a task before an agent writes code (goal, evidence receipts, scope, acceptance evidence and unknowns), not the real software, and the repository, facts and paths are made up by the lab and no language model is involved, so no real LLM behaviour is measured. In the pasted Part 2, the code listings for main(), render_task_frame() and the test file were cut off partway, so the lab is our own full implementation of the behaviour the surrounding text describes. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 2ನೆಯದು: ಮಾನ್ಯಗೊಂಡ frame ಅನ್ನು Markdown ಗೆ ರೂಪಿಸುವುದು, ಬರೆಯುವ ಮುನ್ನ ಮಾನ್ಯೀಕರಣ, ನಿಜ subprocess ಮೂಲಕ exit codes, artifact ಲೆಕ್ಕಪರಿಶೋಧನೆ ಮತ್ತು Markdown ಒಳನುಗ್ಗುವಿಕೆ ಸಮಸ್ಯೆ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು agent ಕೋಡ್ ಬರೆಯುವ ಮುನ್ನ ಕಾರ್ಯ ರೂಪಿಸುವುದು (ಗುರಿ, ಸಾಕ್ಷ್ಯ ರಸೀದಿಗಳು, ವ್ಯಾಪ್ತಿ, ಸ್ವೀಕಾರ ಸಾಕ್ಷ್ಯ ಮತ್ತು ಅಜ್ಞಾತಗಳು) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು repository, ಸತ್ಯಗಳು ಮತ್ತು paths ಲ್ಯಾಬ್ ಕಲ್ಪಿಸಿದ್ದು ಮತ್ತು ಭಾಷಾ ಮಾದರಿ ಇಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಅಂಟಿಸಿದ ಭಾಗ 2 ರಲ್ಲಿ main(), render_task_frame() ಮತ್ತು ಪರೀಕ್ಷಾ ಫೈಲ್‌ನ ಕೋಡ್ ಪಟ್ಟಿಗಳು ಅರ್ಧದಲ್ಲಿ ಕತ್ತರಿಸಲ್ಪಟ್ಟಿದ್ದವು, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್ ಸುತ್ತಲಿನ ಪಠ್ಯ ವಿವರಿಸುವ ವರ್ತನೆಯ ನಮ್ಮದೇ ಸಂಪೂರ್ಣ ಅನುಷ್ಠಾನ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "An Artifact Is Code Too",
    "textKn": "Artifact ಕೂಡ ಕೋಡ್",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Validation Before the File Exists",
    "headingKn": "ಫೈಲ್ ಇರುವ ಮುನ್ನ ಮಾನ್ಯೀಕರಣ",
    "bodyEn": "The frame becomes outputs/task-frame.md only if validation passes. This part renders a frame, runs a small program as a real subprocess to see exit codes and whether the file is written, audits the generated Markdown for its six sections, and finds that a goal containing a newline and \"## Allowed Paths\" can add a second, made-up Allowed Paths section.",
    "bodyKn": "frame ಮಾನ್ಯೀಕರಣ ಪಾಸ್ ಆದರೆ ಮಾತ್ರ outputs/task-frame.md ಆಗುತ್ತದೆ. ಈ ಭಾಗ frame ಅನ್ನು ರೂಪಿಸಿ, exit codes ಮತ್ತು ಫೈಲ್ ಬರೆಯಲ್ಪಡುತ್ತದೆಯೇ ಎಂದು ನೋಡಲು ಸಣ್ಣ ಪ್ರೋಗ್ರಾಂ ಅನ್ನು ನಿಜ subprocess ಆಗಿ ಓಡಿಸಿ, ರಚಿಸಿದ Markdown ಅನ್ನು ಅದರ ಆರು ವಿಭಾಗಗಳಿಗಾಗಿ ಲೆಕ್ಕಪರಿಶೋಧಿಸಿ, ಹೊಸ ಸಾಲು ಮತ್ತು \"## Allowed Paths\" ಇರುವ ಗುರಿ ಎರಡನೇ, ಕಲ್ಪಿತ Allowed Paths ವಿಭಾಗ ಸೇರಿಸಬಹುದು ಎಂದು ಕಂಡುಕೊಳ್ಳುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Validate, Then Render",
    "headingKn": "ಮಾನ್ಯಗೊಳಿಸಿ, ನಂತರ ರೂಪಿಸಿ",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">Validate, then render</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">validate</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">exit 1 on error</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">render</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">six headings</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">audit</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">check the file</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">sanitise text</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">no injected headings</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">a valid frame can still render wrongly</text></svg>",
    "captionEn": "A valid frame can still render wrongly.",
    "captionKn": "ಮಾನ್ಯ frame ಇನ್ನೂ ತಪ್ಪಾಗಿ ರೂಪಗೊಳ್ಳಬಹುದು."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "What each step guarantees",
    "headingKn": "ಪ್ರತಿ ಹಂತ ಏನು ಖಾತ್ರಿ ನೀಡುತ್ತದೆ",
    "headers": [
     "Step",
     "Guarantees",
     "Does not guarantee"
    ],
    "rows": [
     [
      "validate",
      "required fields exist",
      "the content is good"
     ],
     [
      "render",
      "a Markdown file is produced",
      "the six sections are intact"
     ],
     [
      "audit the file",
      "the six headings are present",
      "the receipts are true"
     ],
     [
      "exit code 0",
      "structure passed and file written",
      "the plan is right"
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
    "filename": "tf_2.py",
    "headingEn": "render, headings, sanitise and the subprocess program",
    "headingKn": "render, headings, sanitise ಮತ್ತು subprocess ಪ್ರೋಗ್ರಾಂ",
    "descEn": "render builds the six sections from a frame. headings lists the second-level headings of the output for the audit. sanitise collapses whitespace and removes #. PROGRAM is a small script that validates first, returns 1 with no file on error and writes the artifact otherwise.",
    "descKn": "render frame ನಿಂದ ಆರು ವಿಭಾಗ ನಿರ್ಮಿಸುತ್ತದೆ. headings ಲೆಕ್ಕಪರಿಶೋಧನೆಗಾಗಿ ಔಟ್‌ಪುಟ್‌ನ ಎರಡನೇ-ಮಟ್ಟದ ಶೀರ್ಷಿಕೆಗಳನ್ನು ಪಟ್ಟಿ ಮಾಡುತ್ತದೆ. sanitise ಖಾಲಿಸ್ಥಳ ಕುಸಿದು # ತೆಗೆಯುತ್ತದೆ. PROGRAM ಮೊದಲು ಮಾನ್ಯೀಕರಿಸಿ, ದೋಷದಲ್ಲಿ ಫೈಲ್ ಇಲ್ಲದೆ 1 ಮರಳಿಸಿ, ಇಲ್ಲದಿದ್ದರೆ artifact ಬರೆಯುವ ಸಣ್ಣ ಸ್ಕ್ರಿಪ್ಟ್.",
    "code": "def render(frame):\n    lines = [\"# Task Frame\", \"\", \"## Goal\", \"\", frame[\"goal\"].strip(), \"\", \"## Acceptance Commands\", \"\"]\n    lines += [\"- `\" + c + \"`\" for c in frame[\"acceptance_commands\"]]\n    return \"\\n\".join(lines) + \"\\n\"\n\ndef main(out_dir, goal, commands):\n    frame = {\"goal\": goal, \"acceptance_commands\": commands}\n    errors = validate(frame)\n    if errors:\n        print(\"Task frame rejected:\")\n        for e in errors:\n            print(\"- \" + e)\n        return 1\n    out = Path(out_dir) / \"outputs\" / \"task-frame.md\"\n    out.parent.mkdir(parents=True, exist_ok=True)\n    out.write_text(render(frame), encoding=\"utf-8\")\n    print(\"Task frame validated.\")\n    return 0\n\nif __name__ == \"__main__\":\n    cmds = [c for c in sys.argv[3:]]\n    sys.exit(main(sys.argv[1], sys.argv[2], cmds))\n'''\n\n\ndef render(goal, facts, allowed, forbidden, commands, unknowns):\n    lines = [\"# Task Frame\", \"\", \"## Goal\", \"\", goal.strip(), \"\", \"## Repository Facts\", \"\"]\n    lines += [f\"- **Claim:** {c}\" + chr(10) + f\"  - **Evidence:** `{e}`\" for c, e in facts] or [\"- No repository facts recorded.\"]\n    lines += [\"\", \"## Allowed Paths\", \"\"] + [f\"- {p}\" for p in allowed]\n    lines += [\"\", \"## Forbidden Paths\", \"\"] + [f\"- {p}\" for p in forbidden]\n    lines += [\"\", \"## Acceptance Commands\", \"\"] + [f\"- `{c}`\" for c in commands]\n    lines += [\"\", \"## Unknowns\", \"\"] + [f\"- {cat}: {q}\" for q, cat in unknowns]\n    return chr(10).join(lines) + chr(10)\n\n\ndef headings(md):\n    return [ln for ln in md.splitlines() if ln.startswith(\"## \")]\n\n\ndef sanitise(text):\n    return \" \".join(text.split()).replace(\"#\", \"\")"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "tf_2.py",
    "headingEn": "main(): five experiments",
    "headingKn": "main(): ಐದು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() renders and audits a frame, runs the program three times in a temporary directory, injects headings through the goal, renames a heading and tests four receipt strings against a shape check.",
    "descKn": "main() frame ರೂಪಿಸಿ ಲೆಕ್ಕಪರಿಶೋಧಿಸಿ, ತಾತ್ಕಾಲಿಕ ಡೈರೆಕ್ಟರಿಯಲ್ಲಿ ಪ್ರೋಗ್ರಾಂ ಮೂರು ಬಾರಿ ಓಡಿಸಿ, ಗುರಿಯ ಮೂಲಕ ಶೀರ್ಷಿಕೆಗಳನ್ನು ತೂರಿಸಿ, ಶೀರ್ಷಿಕೆ ಮರುಹೆಸರಿಸಿ ಮತ್ತು ನಾಲ್ಕು ರಸೀದಿ ಸ್ಟ್ರಿಂಗ್‌ಗಳನ್ನು ಆಕಾರ ಪರಿಶೀಲನೆಗೆ ಪರೀಕ್ಷಿಸುತ್ತದೆ.",
    "code": "def main(out_dir, goal, commands):\n    frame = {\"goal\": goal, \"acceptance_commands\": commands}\n    errors = validate(frame)\n    if errors:\n        print(\"Task frame rejected:\")\n        for e in errors:\n            print(\"- \" + e)\n        return 1\n    out = Path(out_dir) / \"outputs\" / \"task-frame.md\"\n    out.parent.mkdir(parents=True, exist_ok=True)\n    out.write_text(render(frame), encoding=\"utf-8\")\n    print(\"Task frame validated.\")\n    return 0"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: the rendered artifact and an audit of its sections ---\n# Task Frame\n\n## Goal\n\nReject duplicate registration.\n\n## Repository Facts\n\n- **Claim:** The duplicate test expects HTTP 409.\n  - **Evidence:** `tests/test_accounts.py:44`\n\n## Allowed Paths\n\n- src/accounts\n\n## Forbidden Paths\n\n- migrations\n\n## Acceptance Commands\n\n- `python3 -m unittest tests.test_accounts -v`\n\n## Unknowns\n\n- discoverable: Does storage prevent concurrent duplicates?\n\nheadings found: ['## Goal', '## Repository Facts', '## Allowed Paths', '## Forbidden Paths', '## Acceptance Commands', '## Unknowns']\nall six sections present, in order: True\na renderer can drop a section even when the data validated, so the audit checks the Markdown and not only the frame\n\n--- 2. Genuinely running: validate before write, through a real subprocess ---\ninvalid goal: exit 1 | printed ['Task frame rejected:', '- Goal is required.'] | artifact exists: False\nvalid frame  : exit 0 | printed Task frame validated. | artifact exists: True\nno command   : exit 1 | printed ['Task frame rejected:', '- At least one acceptance command is required.']\nthe rejected frame exited 1 and wrote no file, the accepted one exited 0 and wrote the artifact; the exit code lets automation stop on a bad frame, and it says only that the structure passed\n\n--- 3. Genuinely finding: user text can add headings to the artifact ---\nheadings with an injected goal: ['## Goal', '## Allowed Paths', '## Repository Facts', '## Allowed Paths', '## Forbidden Paths', '## Acceptance Commands', '## Unknowns']\nAllowed Paths headings: 2 | the real allowed path list is still: ['src/accounts']\nheadings after collapsing whitespace and removing #: ['## Goal', '## Repository Facts', '## Allowed Paths', '## Forbidden Paths', '## Acceptance Commands', '## Unknowns']\na goal containing a newline and '## Allowed Paths' produced a second Allowed Paths heading with a made-up entry, which a reader or a later agent could take for the real boundary; collapsing the goal to one line and dropping # kept the six headings, at the cost of altering the author's text\n\n--- 4. Genuinely running: a missing section is visible to the audit ---\nheadings after a careless rename: ['## Goal', '## Repository Facts', '## Allowed Paths', '## Forbidden', '## Acceptance Commands', '## Unknowns']\naudit passes: False\na rename in the renderer changed the artifact without any data error, and only a check of the generated file noticed\n\n--- 5. Genuinely measuring: the receipt is only text ---\ntests/test_accounts.py:44      has the file:line shape: True\ntests/test_accounts.py:99999   has the file:line shape: True\nno/such/file.py:1              has the file:line shape: True\nsomewhere                      has the file:line shape: False\nthree of four receipts have the right shape and only the last is rejected by shape, though two of the three point at lines or files that do not exist in this lab; a shape check cannot tell a real receipt from a made-up one, which needs the repository to be read"
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
    "headingEn": "Genuinely Found: Rejected Frames Write Nothing",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ತಿರಸ್ಕೃತ Frames ಏನನ್ನೂ ಬರೆಯುವುದಿಲ್ಲ",
    "bodyEn": "Section 1: the rendered artifact had the six headings in order. Section 2: through a real subprocess a whitespace goal exited 1 and wrote no file, a valid frame exited 0 and wrote it, and a frame with no command exited 1. Section 4: renaming \"Forbidden Paths\" to \"Forbidden\" in the renderer made the audit fail without any data error.",
    "bodyKn": "ವಿಭಾಗ 1: ರೂಪಿಸಿದ artifact ಆರು ಶೀರ್ಷಿಕೆಗಳನ್ನು ಕ್ರಮದಲ್ಲಿ ಹೊಂದಿತ್ತು. ವಿಭಾಗ 2: ನಿಜ subprocess ಮೂಲಕ ಖಾಲಿ-ಸ್ಥಳ ಗುರಿ 1 ನೊಂದಿಗೆ ನಿರ್ಗಮಿಸಿ ಫೈಲ್ ಬರೆಯಲಿಲ್ಲ, ಮಾನ್ಯ frame 0 ನೊಂದಿಗೆ ನಿರ್ಗಮಿಸಿ ಬರೆಯಿತು, ಮತ್ತು ಆದೇಶ ಇಲ್ಲದ frame 1 ನೊಂದಿಗೆ ನಿರ್ಗಮಿಸಿತು. ವಿಭಾಗ 4: renderer ನಲ್ಲಿ \"Forbidden Paths\" ಅನ್ನು \"Forbidden\" ಎಂದು ಮರುಹೆಸರಿಸಿದ್ದು ಯಾವುದೇ ಡೇಟಾ ದೋಷವಿಲ್ಲದೆ ಲೆಕ್ಕಪರಿಶೋಧನೆ ವಿಫಲಗೊಳಿಸಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: A Goal Can Add Headings, and a Receipt Can Be Invented",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಗುರಿ ಶೀರ್ಷಿಕೆಗಳನ್ನು ಸೇರಿಸಬಹುದು, ಮತ್ತು ರಸೀದಿ ಕಲ್ಪಿಸಬಹುದು",
    "bodyEn": "Section 3: a goal containing a newline and \"## Allowed Paths\" produced two Allowed Paths headings, while the real list was still [\"src/accounts\"]; collapsing whitespace and removing # restored six headings. Section 5: tests/test_accounts.py:44, tests/test_accounts.py:99999 and no/such/file.py:1 all passed a file:line shape check and only \"somewhere\" failed, though two of the three point at nothing in the lab.",
    "bodyKn": "ವಿಭಾಗ 3: ಹೊಸ ಸಾಲು ಮತ್ತು \"## Allowed Paths\" ಇರುವ ಗುರಿ ಎರಡು Allowed Paths ಶೀರ್ಷಿಕೆ ಉತ್ಪಾದಿಸಿತು, ನಿಜ ಪಟ್ಟಿ ಇನ್ನೂ [\"src/accounts\"] ಆಗಿತ್ತು; ಖಾಲಿಸ್ಥಳ ಕುಸಿದು # ತೆಗೆದದ್ದು ಆರು ಶೀರ್ಷಿಕೆ ಮರುಸ್ಥಾಪಿಸಿತು. ವಿಭಾಗ 5: tests/test_accounts.py:44, tests/test_accounts.py:99999 ಮತ್ತು no/such/file.py:1 ಎಲ್ಲವೂ file:line ಆಕಾರ ಪರಿಶೀಲನೆ ಪಾಸ್ ಮಾಡಿದವು ಮತ್ತು \"somewhere\" ಮಾತ್ರ ವಿಫಲವಾಯಿತು, ಮೂರರಲ್ಲಿ ಎರಡು ಲ್ಯಾಬ್‌ನಲ್ಲಿ ಯಾವುದರತ್ತಲೂ ತೋರಿಸುವುದಿಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "Anything built from user text can be corrupted by that text, and anything that passes a shape check can still be false, so artifacts need their own audit and receipts need to be read.",
    "bodyKn": "ಬಳಕೆದಾರ ಪಠ್ಯದಿಂದ ನಿರ್ಮಿಸಿದ ಯಾವುದನ್ನೂ ಆ ಪಠ್ಯ ಹಾಳುಮಾಡಬಹುದು, ಮತ್ತು ಆಕಾರ ಪರಿಶೀಲನೆ ಪಾಸ್ ಮಾಡುವ ಯಾವುದೂ ಇನ್ನೂ ಸುಳ್ಳಾಗಿರಬಹುದು, ಆದ್ದರಿಂದ artifacts ಗೆ ತಮ್ಮದೇ ಲೆಕ್ಕಪರಿಶೋಧನೆ ಬೇಕು ಮತ್ತು ರಸೀದಿಗಳನ್ನು ಓದಬೇಕು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"a receipt with a file and a line number is verified.\" Two of three well-shaped receipts pointed at nothing.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಫೈಲ್ ಮತ್ತು ಸಾಲು ಸಂಖ್ಯೆ ಇರುವ ರಸೀದಿ ಪರಿಶೀಲಿತ.\" ಉತ್ತಮ ಆಕಾರದ ಮೂರು ರಸೀದಿಗಳಲ್ಲಿ ಎರಡು ಯಾವುದರತ್ತಲೂ ತೋರಲಿಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Fail before write: reject a frame before any artifact exists. Exit code: the number automation acts on. Artifact audit: checking the generated file. Markdown injection: user text that changes document structure. Shape check: checking the form of a value, not its truth.",
    "bodyKn": "Fail before write: ಯಾವುದೇ artifact ಇರುವ ಮುನ್ನ frame ತಿರಸ್ಕರಿಸಿ. Exit code: ಸ್ವಯಂಚಾಲನೆ ಕ್ರಿಯೆ ಕೈಗೊಳ್ಳುವ ಸಂಖ್ಯೆ. Artifact audit: ರಚಿಸಿದ ಫೈಲ್ ಪರಿಶೀಲನೆ. Markdown injection: ದಸ್ತಾವೇಜು ರಚನೆ ಬದಲಿಸುವ ಬಳಕೆದಾರ ಪಠ್ಯ. Shape check: ಮೌಲ್ಯದ ರೂಪ ಪರಿಶೀಲನೆ, ಸತ್ಯವಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) The rendered file had six headings in order. 2) A rejected frame exited 1 and wrote no file. 3) A multi-line goal added a second Allowed Paths heading. 4) A renamed heading was caught only by auditing the file. 5) Three of four receipts passed a shape check and two were not real.",
    "bodyKn": "1) ರೂಪಿಸಿದ ಫೈಲ್ ಕ್ರಮದಲ್ಲಿ ಆರು ಶೀರ್ಷಿಕೆ ಹೊಂದಿತ್ತು. 2) ತಿರಸ್ಕೃತ frame 1 ನೊಂದಿಗೆ ನಿರ್ಗಮಿಸಿ ಫೈಲ್ ಬರೆಯಲಿಲ್ಲ. 3) ಬಹು-ಸಾಲು ಗುರಿ ಎರಡನೇ Allowed Paths ಶೀರ್ಷಿಕೆ ಸೇರಿಸಿತು. 4) ಮರುಹೆಸರಿಸಿದ ಶೀರ್ಷಿಕೆ ಫೈಲ್ ಲೆಕ್ಕಪರಿಶೋಧನೆಯಿಂದ ಮಾತ್ರ ಹಿಡಿಯಲ್ಪಟ್ಟಿತು. 5) ನಾಲ್ಕು ರಸೀದಿಗಳಲ್ಲಿ ಮೂರು ಆಕಾರ ಪರಿಶೀಲನೆ ಪಾಸ್ ಮಾಡಿದವು ಮತ್ತು ಎರಡು ನಿಜವಾಗಿರಲಿಲ್ಲ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What did the subprocess exit code and file look like for a whitespace goal?",
      "qKn": "ಖಾಲಿ-ಸ್ಥಳ ಗುರಿಗೆ subprocess exit code ಮತ್ತು ಫೈಲ್ ಹೇಗಿತ್ತು?",
      "opts": [
       "Exit 1 and no file",
       "Exit 0 and a file",
       "Exit 0 and no file",
       "Exit 1 and a file"
      ],
      "optsKn": [
       "Exit 1 ಮತ್ತು ಫೈಲ್ ಇಲ್ಲ",
       "Exit 0 ಮತ್ತು ಫೈಲ್",
       "Exit 0 ಮತ್ತು ಫೈಲ್ ಇಲ್ಲ",
       "Exit 1 ಮತ್ತು ಫೈಲ್"
      ],
      "correct": 0
     },
     {
      "q": "How many Allowed Paths headings did the injected goal produce?",
      "qKn": "ತೂರಿಸಿದ ಗುರಿ ಎಷ್ಟು Allowed Paths ಶೀರ್ಷಿಕೆ ಉತ್ಪಾದಿಸಿತು?",
      "opts": [
       "2",
       "1",
       "0",
       "3"
      ],
      "optsKn": [
       "2",
       "1",
       "0",
       "3"
      ],
      "correct": 0
     },
     {
      "q": "What caught the careless heading rename?",
      "qKn": "ಅಸಡ್ಡೆಯ ಶೀರ್ಷಿಕೆ ಮರುಹೆಸರನ್ನು ಯಾವುದು ಹಿಡಿಯಿತು?",
      "opts": [
       "Auditing the generated file",
       "The data validator",
       "The exit code",
       "The normaliser"
      ],
      "optsKn": [
       "ರಚಿಸಿದ ಫೈಲ್‌ನ ಲೆಕ್ಕಪರಿಶೋಧನೆ",
       "ಡೇಟಾ ಮಾನ್ಯಕಾರಕ",
       "exit code",
       "ಸಾಮಾನ್ಯೀಕಾರಕ"
      ],
      "correct": 0
     },
     {
      "q": "How many of the four receipt strings passed the file:line shape check?",
      "qKn": "ನಾಲ್ಕು ರಸೀದಿ ಸ್ಟ್ರಿಂಗ್‌ಗಳಲ್ಲಿ ಎಷ್ಟು file:line ಆಕಾರ ಪರಿಶೀಲನೆ ಪಾಸ್ ಮಾಡಿದವು?",
      "opts": [
       "3",
       "4",
       "1",
       "0"
      ],
      "optsKn": [
       "3",
       "4",
       "1",
       "0"
      ],
      "correct": 0
     },
     {
      "q": "Why were parts of the pasted Part 2 not reproduced?",
      "qKn": "ಅಂಟಿಸಿದ ಭಾಗ 2 ರ ಕೆಲವು ಭಾಗಗಳನ್ನು ಏಕೆ ಪುನರುತ್ಪಾದಿಸಲಿಲ್ಲ?",
      "opts": [
       "Its code listings were cut off",
       "They were secret",
       "They were wrong",
       "They were duplicated"
      ],
      "optsKn": [
       "ಅದರ ಕೋಡ್ ಪಟ್ಟಿಗಳು ಕತ್ತರಿಸಲ್ಪಟ್ಟಿದ್ದವು",
       "ಅವು ರಹಸ್ಯವಾಗಿದ್ದವು",
       "ಅವು ತಪ್ಪಾಗಿದ್ದವು",
       "ಅವು ನಕಲಾಗಿದ್ದವು"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
