module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6af74d1962582a270995fb8c",
 "order": 0,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Frame the Task Before the Agent Writes Code (Part 1 of 3) — The Task Frame and Its Validator",
 "titleKn": "Agent ಕೋಡ್ ಬರೆಯುವ ಮುನ್ನ ಕಾರ್ಯ ರೂಪಿಸಿ (ಭಾಗ 1 / 3) — ಕಾರ್ಯ Frame ಮತ್ತು ಅದರ ಮಾನ್ಯಕಾರಕ",
 "desc": "Build a six-field task frame validator that collects every error, compares paths by directory and passes weak frames only where it should.",
 "descKn": "ಪ್ರತಿ ದೋಷ ಸಂಗ್ರಹಿಸುವ, paths ಅನ್ನು ಡೈರೆಕ್ಟರಿಯಿಂದ ಹೋಲಿಸುವ ಆರು-ಕ್ಷೇತ್ರ ಕಾರ್ಯ frame ಮಾನ್ಯಕಾರಕ ನಿರ್ಮಿಸಿ.",
 "objectives": [
  "Name the six fields.",
  "Collect all errors in one run.",
  "Compare paths by directory.",
  "Reject traversal and absolute paths.",
  "Know what a validator cannot judge."
 ],
 "objectivesKn": [
  "ಆರು ಕ್ಷೇತ್ರಗಳನ್ನು ಹೆಸರಿಸಿ.",
  "ಒಂದೇ ಓಟದಲ್ಲಿ ಎಲ್ಲಾ ದೋಷ ಸಂಗ್ರಹಿಸಿ.",
  "paths ಅನ್ನು ಡೈರೆಕ್ಟರಿಯಿಂದ ಹೋಲಿಸಿ.",
  "traversal ಮತ್ತು ನಿರಪೇಕ್ಷ paths ತಿರಸ್ಕರಿಸಿ.",
  "ಮಾನ್ಯಕಾರಕ ಏನು ನಿರ್ಣಯಿಸಲಾರದು ತಿಳಿಯಿರಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Frame the Task Before the Agent Writes Code (Part 1 of 3)",
    "textKn": "Agent ಕೋಡ್ ಬರೆಯುವ ಮುನ್ನ ಕಾರ್ಯ ರೂಪಿಸಿ (ಭಾಗ 1 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 1 of 3: a TaskFrame with six fields, a validator that collects every error, lexical path normalisation and the four required breakages. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind framing a task before an agent writes code (goal, evidence receipts, scope, acceptance evidence and unknowns), not the real software, and the repository, facts and paths are made up by the lab and no language model is involved, so no real LLM behaviour is measured. The pasted lesson said its original main.py was not supplied, so the labs are our own implementation of the behaviour it describes; results depend on the machine they ran on. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 1ನೆಯದು: ಆರು ಕ್ಷೇತ್ರಗಳ TaskFrame, ಪ್ರತಿ ದೋಷ ಸಂಗ್ರಹಿಸುವ ಮಾನ್ಯಕಾರಕ, ಪದ-ಆಧಾರಿತ path ಸಾಮಾನ್ಯೀಕರಣ ಮತ್ತು ನಾಲ್ಕು ಅಗತ್ಯ ಮುರಿತಗಳು. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು agent ಕೋಡ್ ಬರೆಯುವ ಮುನ್ನ ಕಾರ್ಯ ರೂಪಿಸುವುದು (ಗುರಿ, ಸಾಕ್ಷ್ಯ ರಸೀದಿಗಳು, ವ್ಯಾಪ್ತಿ, ಸ್ವೀಕಾರ ಸಾಕ್ಷ್ಯ ಮತ್ತು ಅಜ್ಞಾತಗಳು) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು repository, ಸತ್ಯಗಳು ಮತ್ತು paths ಲ್ಯಾಬ್ ಕಲ್ಪಿಸಿದ್ದು ಮತ್ತು ಭಾಷಾ ಮಾದರಿ ಇಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಅಂಟಿಸಿದ lesson ತನ್ನ ಮೂಲ main.py ಒದಗಿಸಿಲ್ಲ ಎಂದು ಹೇಳಿತ್ತು, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ಅದು ವಿವರಿಸುವ ವರ್ತನೆಯ ನಮ್ಮದೇ ಅನುಷ್ಠಾನ; ಫಲಿತಾಂಶಗಳು ಅವು ಓಡಿದ ಯಂತ್ರವನ್ನು ಅವಲಂಬಿಸಿವೆ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Generating Code Is Not Knowing the Requirement",
    "textKn": "ಕೋಡ್ ರಚಿಸುವುದು ಅವಶ್ಯಕತೆ ತಿಳಿಯುವುದಲ್ಲ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "A Frame the Agent Must Satisfy First",
    "headingKn": "Agent ಮೊದಲು ಪೂರೈಸಬೇಕಾದ Frame",
    "bodyEn": "An agent can add duplicate-email protection that is well written and fully tested and still be wrong: the wrong status code, the wrong comparison rule, an edit to a forbidden directory. A task frame records the goal, repository facts with evidence receipts, allowed and forbidden paths, acceptance commands and unknowns before any edit. This part builds a validator for it, collects all errors in one run, compares paths by directory and not by text prefix, and breaks the frame four ways.",
    "bodyKn": "agent ಚೆನ್ನಾಗಿ ಬರೆದ ಮತ್ತು ಸಂಪೂರ್ಣ ಪರೀಕ್ಷಿಸಿದ ನಕಲು-email ರಕ್ಷಣೆ ಸೇರಿಸಿಯೂ ತಪ್ಪಾಗಿರಬಹುದು: ತಪ್ಪು status code, ತಪ್ಪು ಹೋಲಿಕೆ ನಿಯಮ, ನಿಷೇಧಿತ ಡೈರೆಕ್ಟರಿಯ ಸಂಪಾದನೆ. ಕಾರ್ಯ frame ಯಾವುದೇ ಸಂಪಾದನೆಗೆ ಮುನ್ನ ಗುರಿ, ಸಾಕ್ಷ್ಯ ರಸೀದಿ ಇರುವ repository ಸತ್ಯಗಳು, ಅನುಮತಿಸಿದ ಮತ್ತು ನಿಷೇಧಿತ paths, ಸ್ವೀಕಾರ ಆದೇಶಗಳು ಮತ್ತು ಅಜ್ಞಾತಗಳನ್ನು ದಾಖಲಿಸುತ್ತದೆ. ಈ ಭಾಗ ಅದಕ್ಕೆ ಮಾನ್ಯಕಾರಕ ನಿರ್ಮಿಸಿ, ಒಂದೇ ಓಟದಲ್ಲಿ ಎಲ್ಲಾ ದೋಷ ಸಂಗ್ರಹಿಸಿ, paths ಅನ್ನು ಪಠ್ಯ ಪೂರ್ವಪದದಿಂದಲ್ಲ ಡೈರೆಕ್ಟರಿಯಿಂದ ಹೋಲಿಸಿ, frame ಅನ್ನು ನಾಲ್ಕು ರೀತಿ ಮುರಿಯುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Six Fields, One Frame",
    "headingKn": "ಆರು ಕ್ಷೇತ್ರಗಳು, ಒಂದು Frame",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">Six fields, one frame</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">goal + facts</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">behaviour, receipts</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">scope</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">allowed / forbidden</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">proof + unknowns</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">commands, questions</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">validator</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">collects every error</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">a frame is checked before code is written</text></svg>",
    "captionEn": "Define the behaviour, the evidence, the scope and the proof first.",
    "captionKn": "ಮೊದಲು ವರ್ತನೆ, ಸಾಕ್ಷ್ಯ, ವ್ಯಾಪ್ತಿ ಮತ್ತು ಪುರಾವೆ ವ್ಯಾಖ್ಯಾನಿಸಿ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "The six fields",
    "headingKn": "ಆರು ಕ್ಷೇತ್ರಗಳು",
    "headers": [
     "Field",
     "Answers",
     "Checked for"
    ],
    "rows": [
     [
      "goal",
      "what behaviour changes",
      "non-empty"
     ],
     [
      "repository_facts",
      "what is verified",
      "claim and evidence receipt"
     ],
     [
      "allowed_paths",
      "where work may land",
      "at least one, normalised"
     ],
     [
      "forbidden_paths",
      "what stays untouched",
      "no overlap with allowed"
     ],
     [
      "acceptance_commands",
      "how success is shown",
      "at least one non-blank"
     ],
     [
      "unknowns",
      "what is unresolved",
      "question, category, action"
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
    "filename": "tf_1.py",
    "headingEn": "The data model and the validator",
    "headingKn": "ಡೇಟಾ ಮಾದರಿ ಮತ್ತು ಮಾನ್ಯಕಾರಕ",
    "descEn": "normalize_path turns a path into one form and rejects absolute and .. paths. path_covers compares whole directory components. validate_task_frame appends an error for each problem instead of stopping, and checks overlap in both directions.",
    "descKn": "normalize_path path ಅನ್ನು ಒಂದೇ ರೂಪಕ್ಕೆ ತಂದು ನಿರಪೇಕ್ಷ ಮತ್ತು .. paths ತಿರಸ್ಕರಿಸುತ್ತದೆ. path_covers ಪೂರ್ಣ ಡೈರೆಕ್ಟರಿ ಘಟಕಗಳನ್ನು ಹೋಲಿಸುತ್ತದೆ. validate_task_frame ನಿಲ್ಲಿಸುವ ಬದಲು ಪ್ರತಿ ಸಮಸ್ಯೆಗೆ ದೋಷ ಸೇರಿಸುತ್ತದೆ ಮತ್ತು ಅತಿಕ್ರಮಣವನ್ನು ಎರಡೂ ದಿಕ್ಕಿನಲ್ಲಿ ಪರಿಶೀಲಿಸುತ್ತದೆ.",
    "code": "def is_nonempty(value):\n    return isinstance(value, str) and bool(value.strip())\n\n\ndef normalize_path(value):\n    raw = value.strip().replace(chr(92), \"/\")\n    path = PurePosixPath(raw)\n    if path.is_absolute():\n        raise ValueError(\"absolute paths are not allowed\")\n    parts = []\n    for part in path.parts:\n        if part in (\"\", \".\"):\n            continue\n        if part == \"..\":\n            raise ValueError(\"parent traversal is not allowed\")\n        parts.append(part)\n    return \"/\".join(parts)\n\n\ndef path_covers(parent, child):\n    return child == parent or child.startswith(parent + \"/\")\n\n\ndef validate_task_frame(frame):\n    errors = []\n    if not is_nonempty(frame.goal):\n        errors.append(\"Goal is required.\")\n    for i, fact in enumerate(frame.repository_facts, start=1):\n        if not is_nonempty(fact.claim):\n            errors.append(f\"Repository fact {i} has no claim.\")\n        if not is_nonempty(fact.evidence):\n            errors.append(f\"Repository fact {i} has no evidence receipt.\")\n    if not frame.allowed_paths:\n        errors.append(\"At least one allowed path is required.\")\n    allowed, forbidden = [], []\n    for label, raw_list, out in ((\"allowed\", frame.allowed_paths, allowed), (\"forbidden\", frame.forbidden_paths, forbidden)):\n        for raw in raw_list:\n            try:\n                n = normalize_path(raw)\n                if not n:\n                    errors.append(f\"A {label} path cannot be empty.\")\n                else:\n                    out.append(n)\n            except ValueError as exc:\n                errors.append(f\"Invalid {label} path {raw!r}: {exc}.\")\n    for a in allowed:\n        for f in forbidden:\n            if path_covers(a, f) or path_covers(f, a):\n                errors.append(f\"Allowed and forbidden paths overlap: {a!r} vs {f!r}.\")\n    if not [c for c in frame.acceptance_commands if is_nonempty(c)]:\n        errors.append(\"At least one acceptance command is required.\")\n    for i, u in enumerate(frame.unknowns, start=1):\n        if not is_nonempty(u.question):\n            errors.append(f\"Unknown {i} has no question.\")\n        if u.category not in VALID_CATEGORIES:\n            errors.append(f\"Unknown {i} has invalid category {u.category!r}.\")\n        if not is_nonempty(u.action):\n            errors.append(f\"Unknown {i} has no planned action.\")\n    return errors"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "tf_1.py",
    "headingEn": "main(): five experiments",
    "headingKn": "main(): ಐದು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() runs the four required breakages, collects errors from a multiply-broken frame, compares directory-aware coverage with a naive prefix test, normalises nine paths and shows three weak frames that still pass.",
    "descKn": "main() ನಾಲ್ಕು ಅಗತ್ಯ ಮುರಿತಗಳನ್ನು ಓಡಿಸಿ, ಬಹು-ಮುರಿದ frame ನಿಂದ ದೋಷ ಸಂಗ್ರಹಿಸಿ, ಡೈರೆಕ್ಟರಿ-ಅರಿವಿನ ವ್ಯಾಪ್ತಿಯನ್ನು ಸರಳ ಪೂರ್ವಪದ ಪರೀಕ್ಷೆಗೆ ಹೋಲಿಸಿ, ಒಂಬತ್ತು paths ಸಾಮಾನ್ಯೀಕರಿಸಿ ಮತ್ತು ಇನ್ನೂ ಪಾಸ್ ಆಗುವ ಮೂರು ದುರ್ಬಲ frames ತೋರಿಸುತ್ತದೆ.",
    "code": "def main():\n    section(\"1. Genuinely running: the example frame and the four required breakages\")\n    base = example_task_frame()\n    print(\"valid frame errors:\", validate_task_frame(base))\n    cases = []\n    f = copy.deepcopy(base); f.goal = \"\"; cases.append((\"remove the goal\", f))\n    f = copy.deepcopy(base); f.repository_facts[0].evidence = \"\"; cases.append((\"remove a fact receipt\", f))\n    f = copy.deepcopy(base); f.allowed_paths = [\"src/accounts/\"]; f.forbidden_paths = [\"src/accounts/service.py\"]; cases.append((\"overlap the paths\", f))\n    f = copy.deepcopy(base); f.acceptance_commands = []; cases.append((\"remove acceptance command\", f))\n    for label, fr in cases:\n        print(f\"{label:26} -> {validate_task_frame(fr)}\")\n    print(\"each breakage produced its own specific message and nothing else, so the four failures are distinguishable and a generic 'invalid task' is never needed\")\n\n    section(\"2. Genuinely running: errors are collected, not stopped at the first\")\n    f = copy.deepcopy(base); f.goal = \"   \"; f.acceptance_commands = [\"\"]; f.allowed_paths = []\n    errs = validate_task_frame(f)\n    print(len(errs), \"errors in one run:\", errs)\n    print(\"a whitespace-only goal, a blank command and a missing allowed path were all reported together, which lets the author fix several problems in one pass; the tests should assert the specific message rather than the whole list for this reason\")\n\n    section(\"3. Genuinely measuring: directory-aware coverage versus a naive prefix test\")\n    for parent, child in ((\"src/accounts\", \"src/accounts/service.py\"), (\"src/accounts\", \"src/accounts_old/service.py\"), (\"src/accounts\", \"src/accounts\"), (\"src/accounts/service.py\", \"src/accounts\")):\n        print(f\"{parent:26} covers {child:30} directory-aware={path_covers(parent, child)!s:5} naive startswith={child.startswith(parent)}\")\n    print(\"the naive startswith test said src/accounts covers src/accounts_old, which is a different directory, while the directory-aware test did not; and the last row is False in this direction, which is why the validator checks coverage both ways\")\n\n    section(\"4. Genuinely running: lexical path normalisation\")\n    for p in (\"src/accounts/\", \"src/./accounts\", \"src\\\\accounts\", \"  src/accounts  \", \"/etc/config\", \"../secrets\", \"src/../secrets\", \"\", \".\"):\n        try:\n            print(f\"{p!r:22} -> {normalize_path(p)!r}\")\n        except ValueError as e:\n            print(f\"{p!r:22} rejected: {e}\")\n    print(\"trailing slashes, dot segments, backslashes and padding all collapsed to one form, and absolute or parent-traversal paths were rejected; an empty string and a single dot normalised to an empty path, which the validator reports separately; this is lexical only and says nothing about symlinks or the real filesystem\")\n\n    section(\"5. Genuinely measuring: what the nonempty checks do not catch\")\n    f = copy.deepcopy(base); f.acceptance_commands = [\"\", \"echo all tests passed\"]\n    print(\"acceptance commands ['', 'echo all tests passed']:\", validate_task_frame(f))\n    f = copy.deepcopy(base); f.goal = \"Improve everything\"\n    print(\"goal 'Improve everything':\", validate_task_frame(f))\n    f = copy.deepcopy(base); f.repository_facts[0].evidence = \"somewhere in the tests\"\n    print(\"evidence 'somewhere in the tests':\", validate_task_frame(f))\n    print(\"all three passed: a blank entry beside one real command is tolerated, an echo is accepted as an acceptance command, a vague goal is accepted and an evidence receipt with no file or line is accepted; the validator checks that things exist, and judging whether they are good still needs review\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: the example frame and the four required breakages ---\nvalid frame errors: []\nremove the goal            -> ['Goal is required.']\nremove a fact receipt      -> ['Repository fact 1 has no evidence receipt.']\noverlap the paths          -> [\"Allowed and forbidden paths overlap: 'src/accounts' vs 'src/accounts/service.py'.\"]\nremove acceptance command  -> ['At least one acceptance command is required.']\neach breakage produced its own specific message and nothing else, so the four failures are distinguishable and a generic 'invalid task' is never needed\n\n--- 2. Genuinely running: errors are collected, not stopped at the first ---\n3 errors in one run: ['Goal is required.', 'At least one allowed path is required.', 'At least one acceptance command is required.']\na whitespace-only goal, a blank command and a missing allowed path were all reported together, which lets the author fix several problems in one pass; the tests should assert the specific message rather than the whole list for this reason\n\n--- 3. Genuinely measuring: directory-aware coverage versus a naive prefix test ---\nsrc/accounts               covers src/accounts/service.py        directory-aware=True  naive startswith=True\nsrc/accounts               covers src/accounts_old/service.py    directory-aware=False naive startswith=True\nsrc/accounts               covers src/accounts                   directory-aware=True  naive startswith=True\nsrc/accounts/service.py    covers src/accounts                   directory-aware=False naive startswith=False\nthe naive startswith test said src/accounts covers src/accounts_old, which is a different directory, while the directory-aware test did not; and the last row is False in this direction, which is why the validator checks coverage both ways\n\n--- 4. Genuinely running: lexical path normalisation ---\n'src/accounts/'        -> 'src/accounts'\n'src/./accounts'       -> 'src/accounts'\n'src\\\\accounts'        -> 'src/accounts'\n'  src/accounts  '     -> 'src/accounts'\n'/etc/config'          rejected: absolute paths are not allowed\n'../secrets'           rejected: parent traversal is not allowed\n'src/../secrets'       rejected: parent traversal is not allowed\n''                     -> ''\n'.'                    -> ''\ntrailing slashes, dot segments, backslashes and padding all collapsed to one form, and absolute or parent-traversal paths were rejected; an empty string and a single dot normalised to an empty path, which the validator reports separately; this is lexical only and says nothing about symlinks or the real filesystem\n\n--- 5. Genuinely measuring: what the nonempty checks do not catch ---\nacceptance commands ['', 'echo all tests passed']: []\ngoal 'Improve everything': []\nevidence 'somewhere in the tests': []\nall three passed: a blank entry beside one real command is tolerated, an echo is accepted as an acceptance command, a vague goal is accepted and an evidence receipt with no file or line is accepted; the validator checks that things exist, and judging whether they are good still needs review"
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
    "headingEn": "Genuinely Found: Four Breakages, Four Distinct Messages",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ನಾಲ್ಕು ಮುರಿತಗಳು, ನಾಲ್ಕು ಬೇರೆ ಸಂದೇಶಗಳು",
    "bodyEn": "Section 1: the valid frame had no errors; removing the goal gave \"Goal is required.\", removing a receipt gave \"Repository fact 1 has no evidence receipt.\", allowing src/accounts/ while forbidding src/accounts/service.py gave an overlap message, and removing the acceptance command gave \"At least one acceptance command is required.\" Section 2: one frame with a whitespace goal, a blank command and no allowed path gave three errors in a single run.",
    "bodyKn": "ವಿಭಾಗ 1: ಮಾನ್ಯ frame ಗೆ ದೋಷ ಇರಲಿಲ್ಲ; ಗುರಿ ತೆಗೆದರೆ \"Goal is required.\", ರಸೀದಿ ತೆಗೆದರೆ \"Repository fact 1 has no evidence receipt.\", src/accounts/ ಅನುಮತಿಸಿ src/accounts/service.py ನಿಷೇಧಿಸಿದರೆ ಅತಿಕ್ರಮಣ ಸಂದೇಶ, ಮತ್ತು ಸ್ವೀಕಾರ ಆದೇಶ ತೆಗೆದರೆ \"At least one acceptance command is required.\" ಬಂದವು. ವಿಭಾಗ 2: ಖಾಲಿ-ಸ್ಥಳ ಗುರಿ, ಖಾಲಿ ಆದೇಶ ಮತ್ತು ಅನುಮತಿಸಿದ path ಇಲ್ಲದ ಒಂದು frame ಒಂದೇ ಓಟದಲ್ಲಿ ಮೂರು ದೋಷ ನೀಡಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Prefix Tests Lie and Nonempty Is Not Good",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಪೂರ್ವಪದ ಪರೀಕ್ಷೆಗಳು ಸುಳ್ಳು ಹೇಳುತ್ತವೆ ಮತ್ತು ಖಾಲಿಯಲ್ಲದಿರುವುದು ಒಳ್ಳೆಯದಲ್ಲ",
    "bodyEn": "Section 3: a naive startswith said src/accounts covers src/accounts_old/service.py, and the directory-aware test did not. Section 4: slashes, dot segments, backslashes and padding collapsed to one form, while /etc/config, ../secrets and src/../secrets were rejected. Section 5: acceptance commands [\"\", \"echo all tests passed\"], the goal \"Improve everything\" and the evidence \"somewhere in the tests\" all passed validation.",
    "bodyKn": "ವಿಭಾಗ 3: ಸರಳ startswith src/accounts src/accounts_old/service.py ಅನ್ನು ಒಳಗೊಳ್ಳುತ್ತದೆ ಎಂದಿತು, ಡೈರೆಕ್ಟರಿ-ಅರಿವಿನ ಪರೀಕ್ಷೆ ಹಾಗೆ ಹೇಳಲಿಲ್ಲ. ವಿಭಾಗ 4: ಸ್ಲ್ಯಾಶ್‌ಗಳು, ಚುಕ್ಕೆ ಭಾಗಗಳು, ಬ್ಯಾಕ್‌ಸ್ಲ್ಯಾಶ್‌ಗಳು ಮತ್ತು ಖಾಲಿಸ್ಥಳ ಒಂದೇ ರೂಪಕ್ಕೆ ಕುಸಿದವು, /etc/config, ../secrets ಮತ್ತು src/../secrets ತಿರಸ್ಕೃತವಾದವು. ವಿಭಾಗ 5: ಸ್ವೀಕಾರ ಆದೇಶಗಳು [\"\", \"echo all tests passed\"], ಗುರಿ \"Improve everything\" ಮತ್ತು ಸಾಕ್ಷ್ಯ \"somewhere in the tests\" ಎಲ್ಲವೂ ಮಾನ್ಯೀಕರಣ ಪಾಸ್ ಮಾಡಿದವು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A validated frame turns \"what the agent should do\" into something a script can check before any file is edited, and its limits tell reviewers what they still have to read.",
    "bodyKn": "ಮಾನ್ಯಗೊಂಡ frame \"agent ಏನು ಮಾಡಬೇಕು\" ಅನ್ನು ಯಾವುದೇ ಫೈಲ್ ಸಂಪಾದಿಸುವ ಮುನ್ನ ಸ್ಕ್ರಿಪ್ಟ್ ಪರಿಶೀಲಿಸಬಹುದಾದದ್ದಾಗಿ ಮಾರ್ಪಡಿಸುತ್ತದೆ, ಮತ್ತು ಅದರ ಮಿತಿಗಳು ಪರಿಶೀಲಕರು ಇನ್ನೂ ಏನು ಓದಬೇಕು ಎಂದು ಹೇಳುತ್ತವೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"the frame validated, so it is good.\" An echo command, a vague goal and a receipt with no file all validated.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"frame ಮಾನ್ಯವಾಯಿತು, ಆದ್ದರಿಂದ ಅದು ಒಳ್ಳೆಯದು.\" echo ಆದೇಶ, ಅಸ್ಪಷ್ಟ ಗುರಿ ಮತ್ತು ಫೈಲ್ ಇಲ್ಲದ ರಸೀದಿ ಎಲ್ಲವೂ ಮಾನ್ಯವಾದವು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Task frame: the goal, facts, scope, proof and unknowns for one task. Evidence receipt: a file and line a reviewer can check. Negative space: forbidden paths. Overlap: allowed and forbidden paths that cover each other. Lexical check: comparing text, not the filesystem.",
    "bodyKn": "Task frame: ಒಂದು ಕಾರ್ಯದ ಗುರಿ, ಸತ್ಯಗಳು, ವ್ಯಾಪ್ತಿ, ಪುರಾವೆ ಮತ್ತು ಅಜ್ಞಾತಗಳು. Evidence receipt: ಪರಿಶೀಲಕ ಪರೀಕ್ಷಿಸಬಹುದಾದ ಫೈಲ್ ಮತ್ತು ಸಾಲು. Negative space: ನಿಷೇಧಿತ paths. Overlap: ಪರಸ್ಪರ ಒಳಗೊಳ್ಳುವ ಅನುಮತಿಸಿದ ಮತ್ತು ನಿಷೇಧಿತ paths. Lexical check: ಪಠ್ಯ ಹೋಲಿಕೆ, ಫೈಲ್ ವ್ಯವಸ್ಥೆಯಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) Each of four breakages gave its own message. 2) Errors were collected in one run. 3) A naive prefix test confused src/accounts_old with src/accounts. 4) Paths normalised and traversal was rejected. 5) Weak goals, echo commands and vague receipts still passed.",
    "bodyKn": "1) ನಾಲ್ಕು ಮುರಿತಗಳಲ್ಲಿ ಪ್ರತಿಯೊಂದೂ ತನ್ನದೇ ಸಂದೇಶ ನೀಡಿತು. 2) ದೋಷಗಳು ಒಂದೇ ಓಟದಲ್ಲಿ ಸಂಗ್ರಹವಾದವು. 3) ಸರಳ ಪೂರ್ವಪದ ಪರೀಕ್ಷೆ src/accounts_old ಅನ್ನು src/accounts ಜೊತೆ ಗೊಂದಲಗೊಳಿಸಿತು. 4) paths ಸಾಮಾನ್ಯೀಕರಣಗೊಂಡು traversal ತಿರಸ್ಕೃತವಾಯಿತು. 5) ದುರ್ಬಲ ಗುರಿಗಳು, echo ಆದೇಶಗಳು ಮತ್ತು ಅಸ್ಪಷ್ಟ ರಸೀದಿಗಳು ಇನ್ನೂ ಪಾಸ್ ಆದವು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "How many errors did the frame with a whitespace goal, a blank command and no allowed path produce?",
      "qKn": "ಖಾಲಿ-ಸ್ಥಳ ಗುರಿ, ಖಾಲಿ ಆದೇಶ ಮತ್ತು ಅನುಮತಿಸಿದ path ಇಲ್ಲದ frame ಎಷ್ಟು ದೋಷ ನೀಡಿತು?",
      "opts": [
       "3",
       "1",
       "2",
       "0"
      ],
      "optsKn": [
       "3",
       "1",
       "2",
       "0"
      ],
      "correct": 0
     },
     {
      "q": "Did a naive startswith say src/accounts covers src/accounts_old/service.py?",
      "qKn": "ಸರಳ startswith src/accounts src/accounts_old/service.py ಅನ್ನು ಒಳಗೊಳ್ಳುತ್ತದೆ ಎಂದು ಹೇಳಿತೇ?",
      "opts": [
       "Yes",
       "No",
       "It raised",
       "Only on Windows"
      ],
      "optsKn": [
       "ಹೌದು",
       "ಇಲ್ಲ",
       "ಅಪವಾದ ಎತ್ತಿತು",
       "Windows ನಲ್ಲಿ ಮಾತ್ರ"
      ],
      "correct": 0
     },
     {
      "q": "What happened to the path ../secrets?",
      "qKn": "../secrets path ಗೆ ಏನಾಯಿತು?",
      "opts": [
       "Rejected for parent traversal",
       "Accepted",
       "Normalised to secrets",
       "Ignored"
      ],
      "optsKn": [
       "parent traversal ಗಾಗಿ ತಿರಸ್ಕೃತ",
       "ಸ್ವೀಕೃತ",
       "secrets ಗೆ ಸಾಮಾನ್ಯೀಕರಣ",
       "ನಿರ್ಲಕ್ಷಿಸಲಾಯಿತು"
      ],
      "correct": 0
     },
     {
      "q": "Did the goal \"Improve everything\" pass validation?",
      "qKn": "ಗುರಿ \"Improve everything\" ಮಾನ್ಯೀಕರಣ ಪಾಸ್ ಮಾಡಿತೇ?",
      "opts": [
       "Yes",
       "No",
       "Only with a receipt",
       "Only in strict mode"
      ],
      "optsKn": [
       "ಹೌದು",
       "ಇಲ್ಲ",
       "ರಸೀದಿ ಇದ್ದರೆ ಮಾತ್ರ",
       "strict ಕ್ರಮದಲ್ಲಿ ಮಾತ್ರ"
      ],
      "correct": 0
     },
     {
      "q": "Why check overlap in both directions?",
      "qKn": "ಅತಿಕ್ರಮಣವನ್ನು ಎರಡೂ ದಿಕ್ಕಿನಲ್ಲಿ ಏಕೆ ಪರಿಶೀಲಿಸಬೇಕು?",
      "opts": [
       "An allowed file can sit inside a forbidden directory and the reverse",
       "To go faster",
       "To sort the paths",
       "It is required by JSON"
      ],
      "optsKn": [
       "ಅನುಮತಿಸಿದ ಫೈಲ್ ನಿಷೇಧಿತ ಡೈರೆಕ್ಟರಿಯೊಳಗೆ ಇರಬಹುದು ಮತ್ತು ವಿರುದ್ಧವೂ",
       "ವೇಗವಾಗಿ ಹೋಗಲು",
       "paths ವಿಂಗಡಿಸಲು",
       "JSON ಅಗತ್ಯಪಡಿಸುತ್ತದೆ"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
