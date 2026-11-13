module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6266020ed05b321577",
 "order": 0,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Scope Contracts and Task Boundaries (Part 1 of 3) — The Contract and Path Classification",
 "titleKn": "ವ್ಯಾಪ್ತಿ ಒಪ್ಪಂದಗಳು ಮತ್ತು ಕಾರ್ಯ ಗಡಿಗಳು (ಭಾಗ 1 / 3) — ಒಪ್ಪಂದ ಮತ್ತು Path ವರ್ಗೀಕರಣ",
 "desc": "Validate a JSON scope contract, classify changed paths with forbidden patterns first and measure what fnmatch globs and traversal paths really do.",
 "descKn": "JSON ವ್ಯಾಪ್ತಿ ಒಪ್ಪಂದ ಮಾನ್ಯಗೊಳಿಸಿ, ಬದಲಾದ paths ಅನ್ನು ನಿಷೇಧಿತ ಮಾದರಿಗಳನ್ನು ಮೊದಲು ಪರಿಶೀಲಿಸಿ ವರ್ಗೀಕರಿಸಿ ಮತ್ತು fnmatch globs ಹಾಗೂ traversal paths ನಿಜವಾಗಿ ಏನು ಮಾಡುತ್ತವೆ ಎಂದು ಅಳೆಯಿರಿ.",
 "objectives": [
  "List the fields of a scope contract.",
  "Reject a broken contract before checking paths.",
  "Check forbidden before allowed.",
  "State the glob dialect and test it.",
  "Normalise paths and reject traversal."
 ],
 "objectivesKn": [
  "ವ್ಯಾಪ್ತಿ ಒಪ್ಪಂದದ ಕ್ಷೇತ್ರಗಳನ್ನು ಪಟ್ಟಿ ಮಾಡಿ.",
  "paths ಪರಿಶೀಲಿಸುವ ಮುನ್ನ ಮುರಿದ ಒಪ್ಪಂದ ತಿರಸ್ಕರಿಸಿ.",
  "allowed ಗಿಂತ ಮೊದಲು forbidden ಪರಿಶೀಲಿಸಿ.",
  "glob ಉಪಭಾಷೆ ಹೇಳಿ ಮತ್ತು ಪರೀಕ್ಷಿಸಿ.",
  "paths ಸಾಮಾನ್ಯೀಕರಿಸಿ ಮತ್ತು traversal ತಿರಸ್ಕರಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Scope Contracts and Task Boundaries (Part 1 of 3)",
    "textKn": "ವ್ಯಾಪ್ತಿ ಒಪ್ಪಂದಗಳು ಮತ್ತು ಕಾರ್ಯ ಗಡಿಗಳು (ಭಾಗ 1 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 1 of 3: loading and validating a JSON scope contract and classifying paths against globs, with fnmatch behaviour measured on this Python. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind scope contracts and task boundaries (contract, path classification, verification gate and rollback), not the real software, and the checks run on a temporary project and git repository on this machine and no language model is involved, so no real LLM behaviour is measured. The pasted lesson said its original main.py was not supplied, so the lab is our own implementation of the behaviour it describes; results depend on the machine it ran on. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 1ನೆಯದು: JSON ವ್ಯಾಪ್ತಿ ಒಪ್ಪಂದ ಲೋಡ್ ಮತ್ತು ಮಾನ್ಯೀಕರಣ ಹಾಗೂ globs ವಿರುದ್ಧ paths ವರ್ಗೀಕರಣ, ಈ Python ನಲ್ಲಿ fnmatch ವರ್ತನೆ ಅಳೆದು. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು ವ್ಯಾಪ್ತಿ ಒಪ್ಪಂದಗಳು ಮತ್ತು ಕಾರ್ಯ ಗಡಿಗಳು (ಒಪ್ಪಂದ, path ವರ್ಗೀಕರಣ, ಪರಿಶೀಲನಾ gate ಮತ್ತು rollback) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಪರಿಶೀಲನೆಗಳು ಈ ಯಂತ್ರದ ತಾತ್ಕಾಲಿಕ ಪ್ರಾಜೆಕ್ಟ್ ಮತ್ತು git repository ಮೇಲೆ ಓಡುತ್ತವೆ ಮತ್ತು ಯಾವುದೇ ಭಾಷಾ ಮಾದರಿ ಇಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಅಂಟಿಸಿದ lesson ತನ್ನ ಮೂಲ main.py ಒದಗಿಸಿಲ್ಲ ಎಂದು ಹೇಳಿತ್ತು, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್ ಅದು ವಿವರಿಸುವ ವರ್ತನೆಯ ನಮ್ಮದೇ ಅನುಷ್ಠಾನ; ಫಲಿತಾಂಶಗಳು ಅದು ಓಡಿದ ಯಂತ್ರವನ್ನು ಅವಲಂಬಿಸಿವೆ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "An Instruction Is Not a Boundary",
    "textKn": "ಸೂಚನೆ ಗಡಿಯಲ್ಲ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Make the Boundary Executable",
    "headingKn": "ಗಡಿಯನ್ನು ಕಾರ್ಯಗತಗೊಳಿಸಬಹುದಾದಂತೆ ಮಾಡಿ",
    "bodyEn": "\"Fix the login bug without changing unrelated parts\" leaves open which files, which tests and who decides. A scope contract is a JSON file with a task id, goal, allowed and forbidden path globs, acceptance criteria, a rollback plan and required approvals. This part loads and validates contracts, classifies paths with forbidden patterns winning, and measures what Python fnmatch globs really match, because a boundary written in a glob dialect nobody tested is a guess.",
    "bodyKn": "\"ಸಂಬಂಧವಿಲ್ಲದ ಭಾಗಗಳನ್ನು ಬದಲಿಸದೆ login ದೋಷ ಸರಿಪಡಿಸಿ\" ಯಾವ ಫೈಲ್‌ಗಳು, ಯಾವ ಪರೀಕ್ಷೆಗಳು ಮತ್ತು ಯಾರು ನಿರ್ಧರಿಸುತ್ತಾರೆ ಎಂಬುದನ್ನು ತೆರೆದಿಡುತ್ತದೆ. ವ್ಯಾಪ್ತಿ ಒಪ್ಪಂದ ಎಂದರೆ task id, ಗುರಿ, ಅನುಮತಿಸಿದ ಮತ್ತು ನಿಷೇಧಿತ path globs, ಸ್ವೀಕಾರ ಮಾನದಂಡಗಳು, rollback ಯೋಜನೆ ಮತ್ತು ಅಗತ್ಯ ಅನುಮೋದನೆಗಳು ಇರುವ JSON ಫೈಲ್. ಈ ಭಾಗ ಒಪ್ಪಂದಗಳನ್ನು ಲೋಡ್ ಮಾಡಿ ಮಾನ್ಯಗೊಳಿಸಿ, ನಿಷೇಧಿತ ಮಾದರಿಗಳು ಗೆಲ್ಲುವಂತೆ paths ವರ್ಗೀಕರಿಸಿ, Python fnmatch globs ನಿಜವಾಗಿ ಏನನ್ನು ಹೊಂದಿಸುತ್ತವೆ ಎಂದು ಅಳೆಯುತ್ತದೆ, ಏಕೆಂದರೆ ಯಾರೂ ಪರೀಕ್ಷಿಸದ glob ಉಪಭಾಷೆಯಲ್ಲಿ ಬರೆದ ಗಡಿ ಒಂದು ಊಹೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Validate, Normalise, Classify",
    "headingKn": "ಮಾನ್ಯಗೊಳಿಸಿ, ಸಾಮಾನ್ಯೀಕರಿಸಿ, ವರ್ಗೀಕರಿಸಿ",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">Contract, then classify</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">contract</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">JSON, validated</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">paths</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">normalised</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">globs</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">forbidden first</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">class</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">allowed / forbidden / off</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">a contract is checked before any path is</text></svg>",
    "captionEn": "Forbidden is checked before allowed.",
    "captionKn": "Forbidden ಅನ್ನು allowed ಗಿಂತ ಮೊದಲು ಪರಿಶೀಲಿಸಲಾಗುತ್ತದೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Contract fields",
    "headingKn": "ಒಪ್ಪಂದ ಕ್ಷೇತ್ರಗಳು",
    "headers": [
     "Field",
     "Answers",
     "If missing"
    ],
    "rows": [
     [
      "allowed_files",
      "what may change",
      "nothing could be in scope, so the loader rejects it"
     ],
     [
      "forbidden_files",
      "what must never change",
      "only the allowlist protects you"
     ],
     [
      "acceptance_criteria",
      "how done is shown",
      "files changed is mistaken for done"
     ],
     [
      "rollback_plan",
      "how to undo",
      "recovery is improvised"
     ],
     [
      "approvals_required",
      "what needs a human",
      "the agent decides alone"
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
    "filename": "sc_1.py",
    "headingEn": "Loading, normalising and classifying",
    "headingKn": "ಲೋಡ್, ಸಾಮಾನ್ಯೀಕರಣ ಮತ್ತು ವರ್ಗೀಕರಣ",
    "descEn": "load_contract rejects missing fields, wrong types and an empty allowlist before any path is looked at. safe_path drops ./ and doubled slashes and returns None for any .. segment. classify checks forbidden patterns first, then allowed, and everything else is off_scope.",
    "descKn": "load_contract ಯಾವುದೇ path ನೋಡುವ ಮುನ್ನ ಕಾಣೆಯಾದ ಕ್ಷೇತ್ರಗಳು, ತಪ್ಪು ಪ್ರಕಾರಗಳು ಮತ್ತು ಖಾಲಿ allowlist ತಿರಸ್ಕರಿಸುತ್ತದೆ. safe_path ./ ಮತ್ತು ದ್ವಿಗುಣ ಸ್ಲ್ಯಾಶ್‌ಗಳನ್ನು ತೆಗೆದು ಯಾವುದೇ .. ಭಾಗಕ್ಕೆ None ಮರಳಿಸುತ್ತದೆ. classify ಮೊದಲು ನಿಷೇಧಿತ ಮಾದರಿಗಳನ್ನು, ನಂತರ ಅನುಮತಿಸಿದವನ್ನು ಪರಿಶೀಲಿಸುತ್ತದೆ, ಉಳಿದೆಲ್ಲವೂ off_scope.",
    "code": "def load_contract(path):\n    try:\n        c = json.loads(Path(path).read_text(encoding=\"utf-8\"))\n    except (OSError, json.JSONDecodeError) as e:\n        raise ValueError(f\"cannot read contract: {type(e).__name__}\")\n    if not isinstance(c, dict):\n        raise ValueError(\"contract must be an object\")\n    missing = [k for k in REQUIRED if k not in c]\n    if missing:\n        raise ValueError(\"missing fields: \" + \", \".join(missing))\n    for k in (\"task_id\", \"goal\", \"rollback_plan\"):\n        if not isinstance(c[k], str) or not c[k].strip():\n            raise ValueError(f\"{k} must be a non-empty string\")\n    for k in LISTS:\n        if not isinstance(c[k], list) or not all(isinstance(x, str) for x in c[k]):\n            raise ValueError(f\"{k} must be a list of strings\")\n    if not c[\"allowed_files\"]:\n        raise ValueError(\"allowed_files is empty: nothing could ever be in scope\")\n    return c\n\n\ndef norm(p):\n    return p.replace(\"\\\\\", \"/\")\n\n\ndef matches(path, pattern):\n    path, pattern = norm(path), norm(pattern)\n    if pattern.endswith(\"/**\"):\n        return path.startswith(pattern[:-3] + \"/\")\n    return fnmatchcase(path, pattern)\n\n\ndef safe_path(p):\n    parts = [x for x in norm(p).split(\"/\") if x not in (\"\", \".\")]\n    if \"..\" in parts:\n        return None\n    return \"/\".join(parts)\n\n\ndef classify(path, contract):\n    if any(matches(path, p) for p in contract[\"forbidden_files\"]):\n        return \"forbidden\"\n    if any(matches(path, p) for p in contract[\"allowed_files\"]):\n        return \"allowed\"\n    return \"off_scope\""
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "sc_1.py",
    "headingEn": "main(): five experiments",
    "headingKn": "main(): ಐದು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() writes seven contracts to disk and loads each, classifies five paths against a contract whose allowlist overlaps its forbidden list, measures eight fnmatch cases, compares the recursive helper with plain fnmatch and sends four tricky paths through both the text match and safe_path.",
    "descKn": "main() ಏಳು ಒಪ್ಪಂದಗಳನ್ನು ಡಿಸ್ಕ್‌ಗೆ ಬರೆದು ಪ್ರತಿಯೊಂದನ್ನು ಲೋಡ್ ಮಾಡಿ, ಅನುಮತಿ ಪಟ್ಟಿ ನಿಷೇಧ ಪಟ್ಟಿಯೊಂದಿಗೆ ಅತಿಕ್ರಮಿಸುವ ಒಪ್ಪಂದದ ವಿರುದ್ಧ ಐದು paths ವರ್ಗೀಕರಿಸಿ, ಎಂಟು fnmatch ಪ್ರಕರಣ ಅಳೆದು, ಪುನರಾವರ್ತಕ helper ಅನ್ನು ಸಾದಾ fnmatch ಗೆ ಹೋಲಿಸಿ, ನಾಲ್ಕು ಕಷ್ಟದ paths ಅನ್ನು ಪಠ್ಯ ಹೊಂದಾಣಿಕೆ ಮತ್ತು safe_path ಎರಡರ ಮೂಲಕ ಕಳುಹಿಸುತ್ತದೆ.",
    "code": "def main():\n    with tempfile.TemporaryDirectory() as d:\n        section(\"1. Genuinely running: loading and validating contracts, including broken ones\")\n        cases = {\"valid\": GOOD}\n        cases[\"missing rollback_plan\"] = {k: v for k, v in GOOD.items() if k != \"rollback_plan\"}\n        cases[\"allowed_files not a list\"] = dict(GOOD, allowed_files=\"src/**\")\n        cases[\"empty allowed_files\"] = dict(GOOD, allowed_files=[])\n        cases[\"blank goal\"] = dict(GOOD, goal=\"   \")\n        cases[\"number inside a list\"] = dict(GOOD, forbidden_files=[\"release/**\", 7])\n        for label, c in cases.items():\n            f = Path(d) / \"c.json\"\n            f.write_text(json.dumps(c), encoding=\"utf-8\")\n            try:\n                load_contract(f)\n                print(f\"{label:26} accepted\")\n            except ValueError as e:\n                print(f\"{label:26} rejected: {e}\")\n        (Path(d) / \"c.json\").write_text(\"{not json\", encoding=\"utf-8\")\n        try:\n            load_contract(Path(d) / \"c.json\")\n        except ValueError as e:\n            print(f\"{'malformed JSON':26} rejected: {e}\")\n        print(\"every broken contract was rejected before any path was checked, with a message naming the field; a checker that loads a bad contract and carries on is checking against a contract nobody wrote\")\n\n        section(\"2. Genuinely running: classifying paths, forbidden wins over allowed\")\n        broad = dict(GOOD, allowed_files=[\"src/**\"], forbidden_files=[\"src/database/**\"])\n        for p in (\"src/auth/login.py\", \"src/database/driver.py\", \"tests/test_login.py\", \"docs/guide.md\", \"release/deploy.sh\"):\n            print(f\"{p:26} -> {classify(p, broad)}\")\n        print(\"src/database/driver.py matches both the allowed src/** and the forbidden src/database/**, and was classified forbidden because forbidden patterns are checked first; the opposite order would have let the broad allowance override the prohibition\")\n\n        section(\"3. Genuinely measuring: what fnmatch globs actually match on this Python\")\n        tests = [(\"src/auth/login.py\", \"src/*.py\"), (\"src/auth/login.py\", \"src/auth/*.py\"), (\"src/auth/deep/x.py\", \"src/auth/*.py\"), (\"tests/test_login.py\", \"tests/test_login*.py\"),\n                 (\"tests/test_login_extra.py\", \"tests/test_login*.py\"), (\"SRC/auth/login.py\", \"src/auth/*.py\"), (\".env\", \"*\"), (\"a/b/.env\", \"a/*\")]\n        for path, pat in tests:\n            print(f\"fnmatchcase({path!r:28}, {pat!r:24}) = {fnmatchcase(path, pat)}\")\n        print(\"in fnmatch a single * also crosses slashes, so src/*.py matched src/auth/login.py, a file in a subdirectory, and src/auth/*.py matched src/auth/deep/x.py, which is not what the same patterns mean in a shell; it is case-sensitive under fnmatchcase and it matches dotfiles; a contract has to state which glob dialect it uses and the checker has to be tested against it\")\n\n        section(\"4. Genuinely running: the recursive-pattern helper versus plain fnmatch\")\n        for path, pat in ((\"src/auth/login.py\", \"src/auth/**\"), (\"src/auth/deep/x.py\", \"src/auth/**\"), (\"src/author.py\", \"src/auth/**\"), (\"src/auth\", \"src/auth/**\"), (\"src/auth/login.py\", \"src/**/login.py\")):\n            print(f\"matches({path!r:22}, {pat!r:18}) = {matches(path, pat)} | plain fnmatch = {fnmatchcase(path, pat)}\")\n        print(\"the /** helper matches the directory prefix and does not match the lookalike src/author.py, but src/**/login.py went to plain fnmatch and also matched, so each pattern shape has its own behaviour and each needs its own test\")\n\n        section(\"5. Genuinely running: path tricks the glob alone does not stop\")\n        c = dict(GOOD, allowed_files=[\"src/auth/**\"], forbidden_files=[\"release/**\"])\n        bs = chr(92)\n        for p in (\"src/auth/../../release/deploy.sh\", \"src\" + bs + \"auth\" + bs + \"login.py\", \"./src/auth/login.py\", \"src//auth/login.py\"):\n            print(f\"{p!r:40} text match -> {classify(p, c):9} | safe_path -> {safe_path(p)!r}\")\n        print(\"a traversal path starting with an allowed prefix was classified allowed by the text match although it resolves into release/; safe_path rejects any .. segment and cleans ./ and doubled slashes before matching, but symlinks have to be resolved against the real filesystem, which a text comparison cannot do\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: loading and validating contracts, including broken ones ---\nvalid                      accepted\nmissing rollback_plan      rejected: missing fields: rollback_plan\nallowed_files not a list   rejected: allowed_files must be a list of strings\nempty allowed_files        rejected: allowed_files is empty: nothing could ever be in scope\nblank goal                 rejected: goal must be a non-empty string\nnumber inside a list       rejected: forbidden_files must be a list of strings\nmalformed JSON             rejected: cannot read contract: JSONDecodeError\nevery broken contract was rejected before any path was checked, with a message naming the field; a checker that loads a bad contract and carries on is checking against a contract nobody wrote\n\n--- 2. Genuinely running: classifying paths, forbidden wins over allowed ---\nsrc/auth/login.py          -> allowed\nsrc/database/driver.py     -> forbidden\ntests/test_login.py        -> off_scope\ndocs/guide.md              -> off_scope\nrelease/deploy.sh          -> off_scope\nsrc/database/driver.py matches both the allowed src/** and the forbidden src/database/**, and was classified forbidden because forbidden patterns are checked first; the opposite order would have let the broad allowance override the prohibition\n\n--- 3. Genuinely measuring: what fnmatch globs actually match on this Python ---\nfnmatchcase('src/auth/login.py'         , 'src/*.py'              ) = True\nfnmatchcase('src/auth/login.py'         , 'src/auth/*.py'         ) = True\nfnmatchcase('src/auth/deep/x.py'        , 'src/auth/*.py'         ) = True\nfnmatchcase('tests/test_login.py'       , 'tests/test_login*.py'  ) = True\nfnmatchcase('tests/test_login_extra.py' , 'tests/test_login*.py'  ) = True\nfnmatchcase('SRC/auth/login.py'         , 'src/auth/*.py'         ) = False\nfnmatchcase('.env'                      , '*'                     ) = True\nfnmatchcase('a/b/.env'                  , 'a/*'                   ) = True\nin fnmatch a single * also crosses slashes, so src/*.py matched src/auth/login.py, a file in a subdirectory, and src/auth/*.py matched src/auth/deep/x.py, which is not what the same patterns mean in a shell; it is case-sensitive under fnmatchcase and it matches dotfiles; a contract has to state which glob dialect it uses and the checker has to be tested against it\n\n--- 4. Genuinely running: the recursive-pattern helper versus plain fnmatch ---\nmatches('src/auth/login.py'   , 'src/auth/**'     ) = True | plain fnmatch = True\nmatches('src/auth/deep/x.py'  , 'src/auth/**'     ) = True | plain fnmatch = True\nmatches('src/author.py'       , 'src/auth/**'     ) = False | plain fnmatch = False\nmatches('src/auth'            , 'src/auth/**'     ) = False | plain fnmatch = False\nmatches('src/auth/login.py'   , 'src/**/login.py' ) = True | plain fnmatch = True\nthe /** helper matches the directory prefix and does not match the lookalike src/author.py, but src/**/login.py went to plain fnmatch and also matched, so each pattern shape has its own behaviour and each needs its own test\n\n--- 5. Genuinely running: path tricks the glob alone does not stop ---\n'src/auth/../../release/deploy.sh'       text match -> allowed   | safe_path -> None\n'src\\\\auth\\\\login.py'                    text match -> allowed   | safe_path -> 'src/auth/login.py'\n'./src/auth/login.py'                    text match -> off_scope | safe_path -> 'src/auth/login.py'\n'src//auth/login.py'                     text match -> off_scope | safe_path -> 'src/auth/login.py'\na traversal path starting with an allowed prefix was classified allowed by the text match although it resolves into release/; safe_path rejects any .. segment and cleans ./ and doubled slashes before matching, but symlinks have to be resolved against the real filesystem, which a text comparison cannot do"
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
    "headingEn": "Experiment 1: Loading and validating contracts, including broken ones",
    "headingKn": "ಪ್ರಯೋಗ 1: Loading and validating contracts, including broken ones",
    "bodyEn": "What it ran: Loading and validating contracts, including broken ones. What the lab concluded: every broken contract was rejected before any path was checked, with a message naming the field; a checker that loads a bad contract and carries on is checking against a contract nobody wrote",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Loading and validating contracts, including broken ones. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): every broken contract was rejected before any path was checked, with a message naming the field; a checker that loads a bad contract and carries on is checking against a contract nobody wrote"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. Genuinely running: loading and validating contracts, including broken ones ---\nvalid                      accepted\nmissing rollback_plan      rejected: missing fields: rollback_plan\nallowed_files not a list   rejected: allowed_files must be a list of strings\nempty allowed_files        rejected: allowed_files is empty: nothing could ever be in scope\nblank goal                 rejected: goal must be a non-empty string\nnumber inside a list       rejected: forbidden_files must be a list of strings\nmalformed JSON             rejected: cannot read contract: JSONDecodeError"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: Classifying paths, forbidden wins over allowed",
    "headingKn": "ಪ್ರಯೋಗ 2: Classifying paths, forbidden wins over allowed",
    "bodyEn": "What it ran: Classifying paths, forbidden wins over allowed. What the lab concluded: src/database/driver.py matches both the allowed src/** and the forbidden src/database/**, and was classified forbidden because forbidden patterns are checked first; the opposite order would have let the broad allowance override the prohibition",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Classifying paths, forbidden wins over allowed. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): src/database/driver.py matches both the allowed src/** and the forbidden src/database/**, and was classified forbidden because forbidden patterns are checked first; the opposite order would have let the broad allowance override the prohibition"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely running: classifying paths, forbidden wins over allowed ---\nsrc/auth/login.py          -> allowed\nsrc/database/driver.py     -> forbidden\ntests/test_login.py        -> off_scope\ndocs/guide.md              -> off_scope\nrelease/deploy.sh          -> off_scope"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: What fnmatch globs actually match on this Python",
    "headingKn": "ಪ್ರಯೋಗ 3: What fnmatch globs actually match on this Python",
    "bodyEn": "What it ran: What fnmatch globs actually match on this Python. What the lab concluded: in fnmatch a single * also crosses slashes, so src/*.py matched src/auth/login.py, a file in a subdirectory, and src/auth/*.py matched src/auth/deep/x.py, which is not what the same patterns mean in a shell; it is case-sensitive under fnmatchcase and it matches dotfiles; a contract has to state which glob dialect it uses and the checker has to be tested against it",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: What fnmatch globs actually match on this Python. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): in fnmatch a single * also crosses slashes, so src/*.py matched src/auth/login.py, a file in a subdirectory, and src/auth/*.py matched src/auth/deep/x.py, which is not what the same patterns mean in a shell; it is case-sensitive under fnmatchcase and it matches dotfiles; a contract has to state which glob dialect it uses and the checker has to be tested against it"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely measuring: what fnmatch globs actually match on this Python ---\nfnmatchcase('src/auth/login.py'         , 'src/*.py'              ) = True\nfnmatchcase('src/auth/login.py'         , 'src/auth/*.py'         ) = True\nfnmatchcase('src/auth/deep/x.py'        , 'src/auth/*.py'         ) = True\nfnmatchcase('tests/test_login.py'       , 'tests/test_login*.py'  ) = True\nfnmatchcase('tests/test_login_extra.py' , 'tests/test_login*.py'  ) = True\nfnmatchcase('SRC/auth/login.py'         , 'src/auth/*.py'         ) = False\nfnmatchcase('.env'                      , '*'                     ) = True\nfnmatchcase('a/b/.env'                  , 'a/*'                   ) = True"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 4: The recursive-pattern helper versus plain fnmatch",
    "headingKn": "ಪ್ರಯೋಗ 4: The recursive-pattern helper versus plain fnmatch",
    "bodyEn": "What it ran: The recursive-pattern helper versus plain fnmatch. What the lab concluded: the /** helper matches the directory prefix and does not match the lookalike src/author.py, but src/**/login.py went to plain fnmatch and also matched, so each pattern shape has its own behaviour and each needs its own test",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: The recursive-pattern helper versus plain fnmatch. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the /** helper matches the directory prefix and does not match the lookalike src/author.py, but src/**/login.py went to plain fnmatch and also matched, so each pattern shape has its own behaviour and each needs its own test"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 4. Genuinely running: the recursive-pattern helper versus plain fnmatch ---\nmatches('src/auth/login.py'   , 'src/auth/**'     ) = True | plain fnmatch = True\nmatches('src/auth/deep/x.py'  , 'src/auth/**'     ) = True | plain fnmatch = True\nmatches('src/author.py'       , 'src/auth/**'     ) = False | plain fnmatch = False\nmatches('src/auth'            , 'src/auth/**'     ) = False | plain fnmatch = False\nmatches('src/auth/login.py'   , 'src/**/login.py' ) = True | plain fnmatch = True"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 5: Path tricks the glob alone does not stop",
    "headingKn": "ಪ್ರಯೋಗ 5: Path tricks the glob alone does not stop",
    "bodyEn": "What it ran: Path tricks the glob alone does not stop. What the lab concluded: a traversal path starting with an allowed prefix was classified allowed by the text match although it resolves into release/; safe_path rejects any .. segment and cleans ./ and doubled slashes before matching, but symlinks have to be resolved against the real filesystem, which a text comparison cannot do",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Path tricks the glob alone does not stop. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a traversal path starting with an allowed prefix was classified allowed by the text match although it resolves into release/; safe_path rejects any .. segment and cleans ./ and doubled slashes before matching, but symlinks have to be resolved against the real filesystem, which a text comparison cannot do"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 5. Genuinely running: path tricks the glob alone does not stop ---\n'src/auth/../../release/deploy.sh'       text match -> allowed   | safe_path -> None\n'src\\\\auth\\\\login.py'                    text match -> allowed   | safe_path -> 'src/auth/login.py'\n'./src/auth/login.py'                    text match -> off_scope | safe_path -> 'src/auth/login.py'\n'src//auth/login.py'                     text match -> off_scope | safe_path -> 'src/auth/login.py'"
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
    "headingEn": "Genuinely Found: Broken Contracts Are Rejected and Forbidden Wins",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಮುರಿದ ಒಪ್ಪಂದಗಳು ತಿರಸ್ಕೃತ ಮತ್ತು Forbidden ಗೆಲ್ಲುತ್ತದೆ",
    "bodyEn": "Section 1: of seven contracts only the valid one was accepted; a missing rollback_plan, a string where a list belongs, an empty allowlist, a blank goal, a number inside a list and malformed JSON were each rejected with a message naming the problem. Section 2: src/database/driver.py matched both allowed src/** and forbidden src/database/** and was classified forbidden because forbidden is checked first.",
    "bodyKn": "ವಿಭಾಗ 1: ಏಳು ಒಪ್ಪಂದಗಳಲ್ಲಿ ಮಾನ್ಯವಾದದ್ದು ಮಾತ್ರ ಸ್ವೀಕೃತವಾಯಿತು; ಕಾಣೆಯಾದ rollback_plan, ಪಟ್ಟಿ ಇರಬೇಕಾದಲ್ಲಿ ಸ್ಟ್ರಿಂಗ್, ಖಾಲಿ allowlist, ಖಾಲಿ ಗುರಿ, ಪಟ್ಟಿಯೊಳಗೆ ಸಂಖ್ಯೆ ಮತ್ತು ದೋಷಪೂರ್ಣ JSON ಪ್ರತಿಯೊಂದೂ ಸಮಸ್ಯೆ ಹೆಸರಿಸುವ ಸಂದೇಶದೊಂದಿಗೆ ತಿರಸ್ಕೃತವಾದವು. ವಿಭಾಗ 2: src/database/driver.py ಅನುಮತಿಸಿದ src/** ಮತ್ತು ನಿಷೇಧಿತ src/database/** ಎರಡನ್ನೂ ಹೊಂದಿ ನಿಷೇಧಿತ ಎಂದು ವರ್ಗೀಕರಿಸಲ್ಪಟ್ಟಿತು ಏಕೆಂದರೆ forbidden ಮೊದಲು ಪರಿಶೀಲಿಸಲ್ಪಡುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: fnmatch Is Not Your Shell and Text Is Not a Path",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: fnmatch ನಿಮ್ಮ shell ಅಲ್ಲ ಮತ್ತು ಪಠ್ಯ path ಅಲ್ಲ",
    "bodyEn": "Section 3 (Python 3.14): a single * crossed slashes, so src/*.py matched src/auth/login.py and src/auth/*.py matched src/auth/deep/x.py; matching was case-sensitive and * matched .env. Section 4: the /** helper matched src/auth/login.py and not the lookalike src/author.py, and src/**/login.py fell through to plain fnmatch. Section 5: src/auth/../../release/deploy.sh was classified allowed by the text match and safe_path returned None for it; a backslash path was allowed once normalised.",
    "bodyKn": "ವಿಭಾಗ 3 (Python 3.14): ಒಂದು * ಸ್ಲ್ಯಾಶ್‌ಗಳನ್ನು ದಾಟಿತು, ಆದ್ದರಿಂದ src/*.py src/auth/login.py ಅನ್ನು ಮತ್ತು src/auth/*.py src/auth/deep/x.py ಅನ್ನು ಹೊಂದಿಸಿತು; ಹೊಂದಾಣಿಕೆ ದೊಡ್ಡಕ್ಷರ-ಸೂಕ್ಷ್ಮ ಮತ್ತು * .env ಅನ್ನು ಹೊಂದಿಸಿತು. ವಿಭಾಗ 4: /** helper src/auth/login.py ಹೊಂದಿಸಿ ಹೋಲುವ src/author.py ಅಲ್ಲ, ಮತ್ತು src/**/login.py ಸಾದಾ fnmatch ಗೆ ಹೋಯಿತು. ವಿಭಾಗ 5: src/auth/../../release/deploy.sh ಪಠ್ಯ ಹೊಂದಾಣಿಕೆಯಿಂದ allowed ಎಂದು ವರ್ಗೀಕರಿಸಲ್ಪಟ್ಟಿತು ಮತ್ತು safe_path ಅದಕ್ಕೆ None ಮರಳಿಸಿತು; ಬ್ಯಾಕ್‌ಸ್ಲ್ಯಾಶ್ path ಸಾಮಾನ್ಯೀಕರಣದ ನಂತರ allowed ಆಯಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A boundary that cannot be loaded, tested and explained is a sentence in a prompt; validating the contract and pinning the glob dialect turns it into a check.",
    "bodyKn": "ಲೋಡ್, ಪರೀಕ್ಷೆ ಮತ್ತು ವಿವರಣೆ ಸಾಧ್ಯವಿಲ್ಲದ ಗಡಿ prompt ನ ಒಂದು ವಾಕ್ಯ; ಒಪ್ಪಂದ ಮಾನ್ಯಗೊಳಿಸಿ glob ಉಪಭಾಷೆ ಸ್ಥಿರಗೊಳಿಸಿದರೆ ಅದು ಪರಿಶೀಲನೆಯಾಗುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"src/*.py only matches files directly in src.\" In fnmatch it matched a file in a subdirectory.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"src/*.py src ನಲ್ಲೇ ನೇರವಾಗಿರುವ ಫೈಲ್‌ಗಳನ್ನು ಮಾತ್ರ ಹೊಂದಿಸುತ್ತದೆ.\" fnmatch ನಲ್ಲಿ ಅದು ಉಪಡೈರೆಕ್ಟರಿಯ ಫೈಲ್ ಹೊಂದಿಸಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Scope contract: a machine-readable boundary for one task. Allowlist: paths that may change. Forbidden list: paths that must not, checked first. Glob: a path pattern. Traversal: a .. segment that escapes a prefix.",
    "bodyKn": "Scope contract: ಒಂದು ಕಾರ್ಯದ ಯಂತ್ರ-ಓದಬಹುದಾದ ಗಡಿ. Allowlist: ಬದಲಾಗಬಹುದಾದ paths. Forbidden list: ಬದಲಾಗಬಾರದ paths, ಮೊದಲು ಪರಿಶೀಲಿಸಲ್ಪಡುತ್ತದೆ. Glob: path ಮಾದರಿ. Traversal: ಪೂರ್ವಪದ ತಪ್ಪಿಸುವ .. ಭಾಗ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) Six broken contracts were rejected and one valid contract accepted. 2) Forbidden won over allowed for src/database/driver.py. 3) fnmatch * crossed slashes and was case-sensitive. 4) The /** helper rejected src/author.py. 5) A traversal path passed the text match and was rejected by safe_path.",
    "bodyKn": "1) ಆರು ಮುರಿದ ಒಪ್ಪಂದಗಳು ತಿರಸ್ಕೃತ, ಒಂದು ಮಾನ್ಯ ಸ್ವೀಕೃತ. 2) src/database/driver.py ಗೆ forbidden allowed ಅನ್ನು ಮೀರಿಸಿತು. 3) fnmatch * ಸ್ಲ್ಯಾಶ್ ದಾಟಿ ದೊಡ್ಡಕ್ಷರ-ಸೂಕ್ಷ್ಮವಾಗಿತ್ತು. 4) /** helper src/author.py ತಿರಸ್ಕರಿಸಿತು. 5) traversal path ಪಠ್ಯ ಹೊಂದಾಣಿಕೆ ಪಾಸ್ ಮಾಡಿ safe_path ನಿಂದ ತಿರಸ್ಕೃತವಾಯಿತು."
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
    "bodyEn": "1) Open a terminal in pneuronics-backend/lesson-defs/labs. 2) Run: python -B sc_1.py (in Git Bash on Windows: PYTHONIOENCODING=utf-8 python -B sc_1.py). 3) Compare each section with the walkthrough above. The -B flag stops Python from writing __pycache__ folders.",
    "bodyKn": "1) pneuronics-backend/lesson-defs/labs ನಲ್ಲಿ ಟರ್ಮಿನಲ್ ತೆರೆಯಿರಿ. 2) ಓಡಿಸಿ: python -B sc_1.py (Windows Git Bash ನಲ್ಲಿ: PYTHONIOENCODING=utf-8 python -B sc_1.py). 3) ಪ್ರತಿ ವಿಭಾಗವನ್ನು ಮೇಲಿನ ನಡೆದಾಟಕ್ಕೆ ಹೋಲಿಸಿ. -B ಧ್ವಜ Python __pycache__ ಫೋಲ್ಡರ್‌ಗಳನ್ನು ಬರೆಯುವುದನ್ನು ತಡೆಯುತ್ತದೆ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "How many of the seven contracts were accepted?",
      "qKn": "ಏಳು ಒಪ್ಪಂದಗಳಲ್ಲಿ ಎಷ್ಟು ಸ್ವೀಕೃತವಾದವು?",
      "opts": [
       "1",
       "3",
       "6",
       "7"
      ],
      "optsKn": [
       "1",
       "3",
       "6",
       "7"
      ],
      "correct": 0
     },
     {
      "q": "How was src/database/driver.py classified when src/** was allowed and src/database/** forbidden?",
      "qKn": "src/** ಅನುಮತಿಸಿ src/database/** ನಿಷೇಧಿಸಿದಾಗ src/database/driver.py ಹೇಗೆ ವರ್ಗೀಕರಿಸಲ್ಪಟ್ಟಿತು?",
      "opts": [
       "allowed",
       "forbidden",
       "off_scope",
       "ignored"
      ],
      "optsKn": [
       "allowed",
       "forbidden",
       "off_scope",
       "ನಿರ್ಲಕ್ಷಿಸಲ್ಪಟ್ಟಿತು"
      ],
      "correct": 1
     },
     {
      "q": "Did fnmatch src/auth/*.py match src/auth/deep/x.py on this Python?",
      "qKn": "ಈ Python ನಲ್ಲಿ fnmatch src/auth/*.py src/auth/deep/x.py ಅನ್ನು ಹೊಂದಿಸಿತೇ?",
      "opts": [
       "Yes, * crosses slashes",
       "No",
       "It raised an error",
       "Only on Windows"
      ],
      "optsKn": [
       "ಹೌದು, * ಸ್ಲ್ಯಾಶ್ ದಾಟುತ್ತದೆ",
       "ಇಲ್ಲ",
       "ದೋಷ ಎತ್ತಿತು",
       "Windows ನಲ್ಲಿ ಮಾತ್ರ"
      ],
      "correct": 0
     },
     {
      "q": "What did safe_path return for src/auth/../../release/deploy.sh?",
      "qKn": "src/auth/../../release/deploy.sh ಗೆ safe_path ಏನು ಮರಳಿಸಿತು?",
      "opts": [
       "None",
       "src/auth",
       "release/deploy.sh",
       "an exception"
      ],
      "optsKn": [
       "None",
       "src/auth",
       "release/deploy.sh",
       "ಅಪವಾದ"
      ],
      "correct": 0
     },
     {
      "q": "Why is an empty allowed_files list rejected?",
      "qKn": "ಖಾಲಿ allowed_files ಪಟ್ಟಿ ಏಕೆ ತಿರಸ್ಕೃತವಾಗುತ್ತದೆ?",
      "opts": [
       "Nothing could ever be in scope",
       "JSON forbids it",
       "It is too slow",
       "It hides secrets"
      ],
      "optsKn": [
       "ಯಾವುದೂ ಎಂದಿಗೂ ವ್ಯಾಪ್ತಿಯಲ್ಲಿರಲಾರದು",
       "JSON ನಿಷೇಧಿಸುತ್ತದೆ",
       "ಅದು ತುಂಬಾ ನಿಧಾನ",
       "ಅದು ರಹಸ್ಯ ಮರೆಮಾಡುತ್ತದೆ"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
