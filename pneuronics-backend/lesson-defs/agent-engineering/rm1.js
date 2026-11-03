module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6266020ed05b321571",
 "order": 0,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Repo Memory and Durable State (Part 1 of 3) — Schemas and Validation",
 "titleKn": "Repo ಸ್ಮರಣೆ ಮತ್ತು ಬಾಳಿಕೆ ಬರುವ ಸ್ಥಿತಿ (ಭಾಗ 1 / 3) — Schemas ಮತ್ತು ಮಾನ್ಯತೆ",
 "desc": "Build a subset JSON Schema validator and use it on agent state and the task board, then list what a schema cannot check.",
 "descKn": "JSON Schema ಉಪವಿಭಾಗ validator ನಿರ್ಮಿಸಿ agent state ಮತ್ತು task board ಮೇಲೆ ಬಳಸಿ, schema ಪರಿಶೀಲಿಸಲಾಗದ್ದನ್ನು ಪಟ್ಟಿ ಮಾಡಿ.",
 "objectives": [
  "Define state with a schema.",
  "Validate type, enum, pattern, required and items.",
  "Anchor patterns.",
  "Report errors with paths.",
  "Know what a schema misses."
 ],
 "objectivesKn": [
  "Schema ಯಿಂದ ಸ್ಥಿತಿ ವ್ಯಾಖ್ಯಾನಿಸಿ.",
  "Type, enum, pattern, required ಮತ್ತು items ಮಾನ್ಯಗೊಳಿಸಿ.",
  "ಮಾದರಿಗಳನ್ನು anchor ಮಾಡಿ.",
  "Path ಜೊತೆ ದೋಷ ವರದಿ ಮಾಡಿ.",
  "Schema ಏನು ತಪ್ಪಿಸುತ್ತದೆ ತಿಳಿಯಿರಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Repo Memory and Durable State (Part 1 of 3)",
    "textKn": "Repo ಸ್ಮರಣೆ ಮತ್ತು ಬಾಳಿಕೆ ಬರುವ ಸ್ಥಿತಿ (ಭಾಗ 1 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 1 of 3: a subset JSON Schema validator, the agent_state and task_board schemas and a catalogue of invalid states. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind repo memory and durable state (schemas, a StateManager, atomic persistence and migrations), not the real software, and all state documents are hand-written and no language model is involved, so no real LLM behaviour is measured. The pasted lesson said its original main.py and schema files were not supplied, so the lab is our own implementation of the behaviour it describes. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 1ನೆಯದು: JSON Schema ಉಪವಿಭಾಗ validator, agent_state ಮತ್ತು task_board schemas ಮತ್ತು ಅಮಾನ್ಯ ಸ್ಥಿತಿಗಳ ಪಟ್ಟಿ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು repo ಸ್ಮರಣೆ ಮತ್ತು ಬಾಳಿಕೆ ಬರುವ ಸ್ಥಿತಿ (schemas, StateManager, atomic ಉಳಿಕೆ ಮತ್ತು migrations) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಎಲ್ಲಾ ಸ್ಥಿತಿ ದಾಖಲೆಗಳು ಕೈಬರಹ ಮತ್ತು ಯಾವುದೇ ಭಾಷಾ ಮಾದರಿ ಇಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಅಂಟಿಸಿದ lesson ತನ್ನ ಮೂಲ main.py ಮತ್ತು schema ಫೈಲ್‌ಗಳನ್ನು ಒದಗಿಸಿಲ್ಲ ಎಂದು ಹೇಳಿತ್ತು, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್ ಅದು ವಿವರಿಸುವ ವರ್ತನೆಯ ನಮ್ಮದೇ ಅನುಷ್ಠಾನ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Why State Lives in the Repository",
    "textKn": "ಸ್ಥಿತಿ repository ಯಲ್ಲಿ ಏಕೆ ಇರುತ್ತದೆ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Schema-First State",
    "headingKn": "Schema-ಮೊದಲ ಸ್ಥಿತಿ",
    "bodyEn": "A conversation can end, but the next session still needs to know the active task, the files touched, the assumptions, the blockers and the next action. Repo memory stores that as small structured files, and a schema defines what a valid file looks like before any code writes one. This part builds a standard-library validator for five JSON Schema keywords and uses it on the agent state and task board, then shows what a schema does and does not catch.",
    "bodyKn": "ಸಂಭಾಷಣೆ ಮುಗಿಯಬಹುದು, ಆದರೆ ಮುಂದಿನ ಸೆಷನ್‌ಗೆ ಇನ್ನೂ ಸಕ್ರಿಯ ಕಾರ್ಯ, ಮುಟ್ಟಿದ ಫೈಲ್‌ಗಳು, ಊಹೆಗಳು, ಅಡೆತಡೆಗಳು ಮತ್ತು ಮುಂದಿನ ಕ್ರಿಯೆ ತಿಳಿಯಬೇಕು. Repo ಸ್ಮರಣೆ ಅದನ್ನು ಚಿಕ್ಕ ರಚನಾತ್ಮಕ ಫೈಲ್‌ಗಳಾಗಿ ಸಂಗ್ರಹಿಸುತ್ತದೆ, ಮತ್ತು ಯಾವುದೇ ಕೋಡ್ ಒಂದನ್ನು ಬರೆಯುವ ಮುನ್ನ schema ಮಾನ್ಯ ಫೈಲ್ ಹೇಗಿರುತ್ತದೆ ಎಂದು ವ್ಯಾಖ್ಯಾನಿಸುತ್ತದೆ. ಈ ಭಾಗ ಐದು JSON Schema ಕೀವರ್ಡ್‌ಗಳಿಗೆ ಸ್ಟಾಂಡರ್ಡ್-ಲೈಬ್ರರಿ validator ನಿರ್ಮಿಸಿ agent state ಮತ್ತು task board ಮೇಲೆ ಬಳಸಿ, schema ಏನನ್ನು ಹಿಡಿಯುತ್ತದೆ ಮತ್ತು ಹಿಡಿಯುವುದಿಲ್ಲ ಎಂದು ತೋರಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Schema as Contract",
    "headingKn": "Schema ಒಪ್ಪಂದವಾಗಿ",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">Schema first</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">schema</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">the contract</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">validator</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">five keywords</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">state file</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">a document</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">not covered</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">ids, references</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">valid JSON is not valid state</text></svg>",
    "captionEn": "The schema defines valid; the validator enforces it.",
    "captionKn": "Schema ಮಾನ್ಯ ಎಂದರೇನು ಎಂದು ವ್ಯಾಖ್ಯಾನಿಸುತ್ತದೆ; validator ಜಾರಿಗೊಳಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Fields of the agent state",
    "headingKn": "agent state ನ ಕ್ಷೇತ್ರಗಳು",
    "headers": [
     "Field",
     "Type",
     "Why it exists"
    ],
    "rows": [
     [
      "schema_version",
      "integer",
      "which contract the file follows"
     ],
     [
      "active_task_id",
      "string matching ^T-\\d{3,}$",
      "the task to resume"
     ],
     [
      "touched_files",
      "array of strings",
      "where to look first"
     ],
     [
      "assumptions, blockers",
      "arrays of strings",
      "what is unverified or stopping work"
     ],
     [
      "next_action",
      "string",
      "the first step on resume"
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
    "filename": "rm_1.py",
    "headingEn": "Schemas and the recursive validator",
    "headingKn": "Schemas ಮತ್ತು ಪುನರಾವರ್ತಿತ validator",
    "descEn": "is_type excludes bool from integer because bool is a subclass of int in Python. validate checks type first, then enum, pattern, required keys and array items, and returns every error with a path such as $.tasks[1].status.",
    "descKn": "is_type ಇಂಟಿಜರ್‌ನಿಂದ bool ಹೊರಗಿಡುತ್ತದೆ ಏಕೆಂದರೆ Python ನಲ್ಲಿ bool int ನ ಉಪವರ್ಗ. validate ಮೊದಲು type, ನಂತರ enum, pattern, ಅಗತ್ಯ keys ಮತ್ತು array items ಪರಿಶೀಲಿಸಿ, $.tasks[1].status ನಂತಹ path ಜೊತೆ ಪ್ರತಿ ದೋಷ ಮರಳಿಸುತ್ತದೆ.",
    "code": "AGENT_STATE_SCHEMA = {\"type\": \"object\", \"required\": [\"schema_version\", \"active_task_id\", \"touched_files\", \"assumptions\", \"blockers\", \"next_action\"], \"properties\": {\n    \"schema_version\": {\"type\": \"integer\"}, \"active_task_id\": {\"type\": \"string\", \"pattern\": r\"^T-\\d{3,}$\"}, \"touched_files\": {\"type\": \"array\", \"items\": {\"type\": \"string\"}},\n    \"assumptions\": {\"type\": \"array\", \"items\": {\"type\": \"string\"}}, \"blockers\": {\"type\": \"array\", \"items\": {\"type\": \"string\"}}, \"next_action\": {\"type\": \"string\"}}}\nTASK_BOARD_SCHEMA = {\"type\": \"object\", \"required\": [\"schema_version\", \"tasks\"], \"properties\": {\"schema_version\": {\"type\": \"integer\"}, \"tasks\": {\"type\": \"array\", \"items\": {\n    \"type\": \"object\", \"required\": [\"id\", \"title\", \"status\"], \"properties\": {\"id\": {\"type\": \"string\", \"pattern\": r\"^T-\\d{3,}$\"}, \"title\": {\"type\": \"string\"},\n                                                                               \"status\": {\"type\": \"string\", \"enum\": [\"pending\", \"in_progress\", \"blocked\", \"completed\"]}}}}}}\n\n\ndef is_type(value, t):\n    if t == \"object\":\n        return isinstance(value, dict)\n    if t == \"array\":\n        return isinstance(value, list)\n    if t == \"string\":\n        return isinstance(value, str)\n    if t == \"integer\":\n        return isinstance(value, int) and not isinstance(value, bool)\n    if t == \"boolean\":\n        return isinstance(value, bool)\n    if t == \"null\":\n        return value is None\n    raise ValueError(f\"unsupported schema type {t}\")\n\n\ndef validate(value, schema, path=\"$\"):\n    errors = []\n    t = schema.get(\"type\")\n    if t and not is_type(value, t):\n        return [f\"{path}: expected {t}, got {type(value).__name__}\"]\n    if \"enum\" in schema and value not in schema[\"enum\"]:\n        errors.append(f\"{path}: {value!r} not in {schema['enum']}\")\n    if \"pattern\" in schema:\n        if not isinstance(value, str) or re.search(schema[\"pattern\"], value) is None:\n            errors.append(f\"{path}: {value!r} does not match {schema['pattern']}\")\n    if t == \"object\":\n        for k in schema.get(\"required\", []):\n            if k not in value:\n                errors.append(f\"{path}: missing {k}\")\n        for k, sub in schema.get(\"properties\", {}).items():\n            if k in value:\n                errors += validate(value[k], sub, f\"{path}.{k}\")\n    if t == \"array\" and \"items\" in schema:\n        for i, item in enumerate(value):\n            errors += validate(item, schema[\"items\"], f\"{path}[{i}]\")\n    return errors\n\n\nGOOD = {\"schema_version\": 1, \"active_task_id\": \"T-014\", \"touched_files\": [\"src/scheduler.py\"], \"assumptions\": [], \"blockers\": [], \"next_action\": \"Run the scheduler tests\"}"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "rm_1.py",
    "headingEn": "main(): five experiments",
    "headingKn": "main(): ಐದು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() validates one good state and nine invalid ones, compares an anchored and an unanchored pattern, validates a task board with nested errors and lists what the schema does not check.",
    "descKn": "main() ಒಂದು ಒಳ್ಳೆಯ ಮತ್ತು ಒಂಬತ್ತು ಅಮಾನ್ಯ ಸ್ಥಿತಿಗಳನ್ನು ಮಾನ್ಯಗೊಳಿಸಿ, anchored ಮತ್ತು unanchored ಮಾದರಿ ಹೋಲಿಸಿ, ನೆಸ್ಟೆಡ್ ದೋಷಗಳ task board ಮಾನ್ಯಗೊಳಿಸಿ ಮತ್ತು schema ಏನನ್ನು ಪರಿಶೀಲಿಸುವುದಿಲ್ಲ ಎಂದು ಪಟ್ಟಿ ಮಾಡುತ್ತದೆ.",
    "code": "def section(t):\n    print(f\"\\n--- {t} ---\")\n\n\ndef main():\n    section(\"1. Genuinely checking: one valid state and nine invalid ones\")\n    print(\"valid:\", validate(GOOD, AGENT_STATE_SCHEMA) or \"no errors\")\n    variants = {\"touched_files is null\": dict(GOOD, touched_files=None), \"touched_files missing\": {k: v for k, v in GOOD.items() if k != \"touched_files\"}, \"schema_version is a string\": dict(GOOD, schema_version=\"1\"),\n                \"schema_version is True\": dict(GOOD, schema_version=True), \"task id T-01\": dict(GOOD, active_task_id=\"T-01\"), \"task id TASK-125\": dict(GOOD, active_task_id=\"TASK-125\"),\n                \"task id with trailing text\": dict(GOOD, active_task_id=\"T-014 extra\"), \"array holds an integer\": dict(GOOD, touched_files=[\"a.py\", 42]), \"state is a list\": [GOOD]}\n    for name, doc in variants.items():\n        errs = validate(doc, AGENT_STATE_SCHEMA)\n        print(f\"{name:28} -> {errs}\")\n    print(\"every invalid document was refused with the field path of the problem; True was rejected as a schema_version because bool is a subclass of int in Python and the validator excludes it on purpose\")\n\n    section(\"2. Genuinely checking: the pattern anchors\")\n    for pat, label in ((r\"T-\\d{3,}\", \"unanchored (search)\"), (r\"^T-\\d{3,}$\", \"anchored\")):\n        results = {v: re.search(pat, v) is not None for v in (\"T-001\", \"T-1000\", \"T-01\", \"T-ABC\", \"TASK-125\", \"xT-001y\", \"T-014 extra\")}\n        print(f\"{label:22} {results}\")\n    print(\"without ^ and $ the pattern accepted 'xT-001y' and 'T-014 extra' because JSON Schema patterns are searches; the format check also says nothing about whether the task exists\")\n\n    section(\"3. Genuinely checking: the task board schema, including enums and nested paths\")\n    board = {\"schema_version\": 1, \"tasks\": [{\"id\": \"T-001\", \"title\": \"a\", \"status\": \"pending\"}, {\"id\": \"T-2\", \"title\": \"b\", \"status\": \"finished\"}, {\"id\": \"T-003\", \"status\": \"blocked\"}]}\n    for e in validate(board, TASK_BOARD_SCHEMA):\n        print(\" \", e)\n    print(\"three problems across two of the three tasks were each reported with their own path (tasks[1].id, tasks[1].status and the missing title in tasks[2]), and the valid first task produced no error; a controlled vocabulary of statuses turns 'finished' versus 'completed' into a refusal instead of a silent mismatch\")\n\n    section(\"4. Genuinely checking: what a schema does not check\")\n    dup = {\"schema_version\": 1, \"tasks\": [{\"id\": \"T-001\", \"title\": \"a\", \"status\": \"pending\"}, {\"id\": \"T-001\", \"title\": \"b\", \"status\": \"completed\"}]}\n    print(\"duplicate task ids:\", validate(dup, TASK_BOARD_SCHEMA) or \"no errors\")\n    ghost = dict(GOOD, active_task_id=\"T-999\")\n    print(\"active task id that is not on the board:\", validate(ghost, AGENT_STATE_SCHEMA) or \"no errors\")\n    extra = dict(GOOD, surprise_field=\"anything\")\n    print(\"unknown extra field:\", validate(extra, AGENT_STATE_SCHEMA) or \"no errors\")\n    print(\"all three passed the structural check: uniqueness, referential integrity and unknown fields need either more schema keywords (this validator implements five) or application checks; passing a schema is not the same as being a consistent state\")\n\n    section(\"5. Genuinely checking: valid JSON is not valid state\")\n    for text in ('{\"schema_version\": 1}', '[1, 2, 3]', '{\"schema_version\": 1, \"active_task_id\": \"T-014\", \"touched_files\": [], \"assumptions\": [], \"blockers\": [], \"next_action\": \"\"}'):\n        doc = json.loads(text)\n        print(f\"{text[:60]:62} parses=True schema errors={len(validate(doc, AGENT_STATE_SCHEMA))}\")\n    print(\"the last document satisfies the schema although next_action is empty; a type check cannot say that an empty string is a useless next action, which is a separate rule\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely checking: one valid state and nine invalid ones ---\nvalid: no errors\ntouched_files is null        -> ['$.touched_files: expected array, got NoneType']\ntouched_files missing        -> ['$: missing touched_files']\nschema_version is a string   -> ['$.schema_version: expected integer, got str']\nschema_version is True       -> ['$.schema_version: expected integer, got bool']\ntask id T-01                 -> [\"$.active_task_id: 'T-01' does not match ^T-\\\\d{3,}$\"]\ntask id TASK-125             -> [\"$.active_task_id: 'TASK-125' does not match ^T-\\\\d{3,}$\"]\ntask id with trailing text   -> [\"$.active_task_id: 'T-014 extra' does not match ^T-\\\\d{3,}$\"]\narray holds an integer       -> ['$.touched_files[1]: expected string, got int']\nstate is a list              -> ['$: expected object, got list']\nevery invalid document was refused with the field path of the problem; True was rejected as a schema_version because bool is a subclass of int in Python and the validator excludes it on purpose\n\n--- 2. Genuinely checking: the pattern anchors ---\nunanchored (search)    {'T-001': True, 'T-1000': True, 'T-01': False, 'T-ABC': False, 'TASK-125': False, 'xT-001y': True, 'T-014 extra': True}\nanchored               {'T-001': True, 'T-1000': True, 'T-01': False, 'T-ABC': False, 'TASK-125': False, 'xT-001y': False, 'T-014 extra': False}\nwithout ^ and $ the pattern accepted 'xT-001y' and 'T-014 extra' because JSON Schema patterns are searches; the format check also says nothing about whether the task exists\n\n--- 3. Genuinely checking: the task board schema, including enums and nested paths ---\n  $.tasks[1].id: 'T-2' does not match ^T-\\d{3,}$\n  $.tasks[1].status: 'finished' not in ['pending', 'in_progress', 'blocked', 'completed']\n  $.tasks[2]: missing title\nthree problems across two of the three tasks were each reported with their own path (tasks[1].id, tasks[1].status and the missing title in tasks[2]), and the valid first task produced no error; a controlled vocabulary of statuses turns 'finished' versus 'completed' into a refusal instead of a silent mismatch\n\n--- 4. Genuinely checking: what a schema does not check ---\nduplicate task ids: no errors\nactive task id that is not on the board: no errors\nunknown extra field: no errors\nall three passed the structural check: uniqueness, referential integrity and unknown fields need either more schema keywords (this validator implements five) or application checks; passing a schema is not the same as being a consistent state\n\n--- 5. Genuinely checking: valid JSON is not valid state ---\n{\"schema_version\": 1}                                          parses=True schema errors=5\n[1, 2, 3]                                                      parses=True schema errors=1\n{\"schema_version\": 1, \"active_task_id\": \"T-014\", \"touched_fi   parses=True schema errors=0\nthe last document satisfies the schema although next_action is empty; a type check cannot say that an empty string is a useless next action, which is a separate rule"
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
    "headingEn": "Genuinely Found: Nine Invalid States, Each Refused With a Path",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಒಂಬತ್ತು ಅಮಾನ್ಯ ಸ್ಥಿತಿಗಳು, ಪ್ರತಿಯೊಂದೂ Path ಜೊತೆ ತಿರಸ್ಕೃತ",
    "bodyEn": "Section 1: the valid state had no errors and all nine invalid ones were refused with the field path: a null touched_files, a missing field, a string and a True schema_version, the ids T-01 and TASK-125 and \"T-014 extra\", an integer inside an array of strings, and a list where an object belongs. Section 2: without ^ and $ the pattern accepted \"xT-001y\" and \"T-014 extra\", because patterns are searches, while the anchored pattern refused both.",
    "bodyKn": "ವಿಭಾಗ 1: ಮಾನ್ಯ ಸ್ಥಿತಿಗೆ ದೋಷ ಇರಲಿಲ್ಲ ಮತ್ತು ಒಂಬತ್ತೂ ಅಮಾನ್ಯವಾದವು ಕ್ಷೇತ್ರ path ಜೊತೆ ತಿರಸ್ಕರಿಸಲ್ಪಟ್ಟವು: null touched_files, ಕಾಣೆಯಾದ ಕ್ಷೇತ್ರ, ಸ್ಟ್ರಿಂಗ್ ಮತ್ತು True schema_version, ids T-01, TASK-125 ಮತ್ತು \"T-014 extra\", ಸ್ಟ್ರಿಂಗ್ ಅರೆಯ ಒಳಗೆ ಪೂರ್ಣಾಂಕ, ಮತ್ತು object ಬೇಕಾದಲ್ಲಿ ಪಟ್ಟಿ. ವಿಭಾಗ 2: ^ ಮತ್ತು $ ಇಲ್ಲದೆ ಮಾದರಿ \"xT-001y\" ಮತ್ತು \"T-014 extra\" ಸ್ವೀಕರಿಸಿತು, ಏಕೆಂದರೆ ಮಾದರಿಗಳು ಹುಡುಕಾಟಗಳು, anchored ಮಾದರಿ ಎರಡನ್ನೂ ತಿರಸ್ಕರಿಸಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: What the Schema Does Not Check",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Schema ಏನನ್ನು ಪರಿಶೀಲಿಸುವುದಿಲ್ಲ",
    "bodyEn": "Section 3: a task board with three tasks gave three errors across two of them (tasks[1].id, tasks[1].status \"finished\" not in the enum, and a missing title in tasks[2]) and none for the valid first task. Section 4: duplicate task ids, an active task id that is not on the board and an unknown extra field all passed the structural check. Section 5: a document with next_action set to an empty string satisfied the schema, so a type check cannot say an action is useless.",
    "bodyKn": "ವಿಭಾಗ 3: ಮೂರು ಕಾರ್ಯಗಳ task board ಅವುಗಳಲ್ಲಿ ಎರಡರಲ್ಲಿ ಮೂರು ದೋಷ ನೀಡಿತು (tasks[1].id, enum ನಲ್ಲಿಲ್ಲದ tasks[1].status \"finished\" ಮತ್ತು tasks[2] ನಲ್ಲಿ ಕಾಣೆಯಾದ title) ಮತ್ತು ಮಾನ್ಯ ಮೊದಲ ಕಾರ್ಯಕ್ಕೆ ಯಾವುದೂ ಇಲ್ಲ. ವಿಭಾಗ 4: ನಕಲು task ids, board ನಲ್ಲಿಲ್ಲದ ಸಕ್ರಿಯ task id ಮತ್ತು ಅಜ್ಞಾತ ಹೆಚ್ಚುವರಿ ಕ್ಷೇತ್ರ ಎಲ್ಲವೂ ರಚನಾತ್ಮಕ ಪರಿಶೀಲನೆ ಪಾಸ್ ಮಾಡಿದವು. ವಿಭಾಗ 5: next_action ಖಾಲಿ ಸ್ಟ್ರಿಂಗ್ ಇರುವ ದಾಖಲೆ schema ಅನ್ನು ಪೂರೈಸಿತು, ಆದ್ದರಿಂದ type ಪರಿಶೀಲನೆ ಕ್ರಿಯೆ ನಿಷ್ಪ್ರಯೋಜಕ ಎಂದು ಹೇಳಲಾರದು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A schema turns \"the file looks fine\" into a check every writer and reader shares, but only for the properties it states; the rest needs application rules.",
    "bodyKn": "Schema \"ಫೈಲ್ ಸರಿಯಾಗಿ ಕಾಣುತ್ತದೆ\" ಎಂಬುದನ್ನು ಪ್ರತಿ ಬರಹಗಾರ ಮತ್ತು ಓದುಗ ಹಂಚಿಕೊಳ್ಳುವ ಪರಿಶೀಲನೆಯಾಗಿ ಮಾರ್ಪಡಿಸುತ್ತದೆ, ಆದರೆ ಅದು ಹೇಳುವ ಗುಣಗಳಿಗೆ ಮಾತ್ರ; ಉಳಿದದ್ದಕ್ಕೆ ಅಪ್ಲಿಕೇಶನ್ ನಿಯಮಗಳು ಬೇಕು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"valid JSON is valid state.\" A document with an empty next_action and one with a ghost active task both passed.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಮಾನ್ಯ JSON ಮಾನ್ಯ ಸ್ಥಿತಿ.\" ಖಾಲಿ next_action ಇರುವ ದಾಖಲೆ ಮತ್ತು ಭೂತ ಸಕ್ರಿಯ ಕಾರ್ಯ ಇರುವ ದಾಖಲೆ ಎರಡೂ ಪಾಸ್ ಆದವು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Schema: the contract for a document. Enum: a closed set of allowed values. Pattern: a regular expression a string must match, as a search unless anchored. Referential integrity: ids that point at things that exist. System of record: the authoritative state.",
    "bodyKn": "Schema: ದಾಖಲೆಗೆ ಒಪ್ಪಂದ. Enum: ಅನುಮತಿಸಿದ ಮೌಲ್ಯಗಳ ಮುಚ್ಚಿದ ಸೆಟ್. Pattern: ಸ್ಟ್ರಿಂಗ್ ಹೊಂದಬೇಕಾದ regular expression, anchored ಇಲ್ಲದಿದ್ದರೆ ಹುಡುಕಾಟ. Referential integrity: ಅಸ್ತಿತ್ವದಲ್ಲಿರುವುದಕ್ಕೆ ತೋರಿಸುವ ids. System of record: ಅಧಿಕೃತ ಸ್ಥಿತಿ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) All 9 invalid states were refused with paths and True was refused as an integer. 2) An unanchored pattern accepted \"T-014 extra\". 3) A nested board error was located by path. 4) Duplicates, ghost references and unknown fields passed. 5) An empty next_action passed.",
    "bodyKn": "1) ಎಲ್ಲಾ 9 ಅಮಾನ್ಯ ಸ್ಥಿತಿಗಳು path ಜೊತೆ ತಿರಸ್ಕರಿಸಲ್ಪಟ್ಟವು ಮತ್ತು True ಅನ್ನು integer ಎಂದು ತಿರಸ್ಕರಿಸಲಾಯಿತು. 2) Unanchored ಮಾದರಿ \"T-014 extra\" ಸ್ವೀಕರಿಸಿತು. 3) ನೆಸ್ಟೆಡ್ board ದೋಷ path ಮೂಲಕ ಪತ್ತೆಯಾಯಿತು. 4) ನಕಲುಗಳು, ಭೂತ ಉಲ್ಲೇಖಗಳು ಮತ್ತು ಅಜ್ಞಾತ ಕ್ಷೇತ್ರಗಳು ಪಾಸ್ ಆದವು. 5) ಖಾಲಿ next_action ಪಾಸ್ ಆಯಿತು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "Why was True refused as a schema_version?",
      "qKn": "schema_version ಆಗಿ True ಏಕೆ ತಿರಸ್ಕರಿಸಲ್ಪಟ್ಟಿತು?",
      "opts": [
       "bool is a subclass of int and the validator excludes it",
       "True is negative",
       "It was missing",
       "It was too long"
      ],
      "optsKn": [
       "bool int ನ ಉಪವರ್ಗ ಮತ್ತು validator ಅದನ್ನು ಹೊರಗಿಡುತ್ತದೆ",
       "True ಋಣಾತ್ಮಕ",
       "ಅದು ಕಾಣೆಯಾಗಿತ್ತು",
       "ಅದು ತುಂಬಾ ಉದ್ದ"
      ],
      "correct": 0
     },
     {
      "q": "Which strings did the unanchored pattern wrongly accept?",
      "qKn": "Unanchored ಮಾದರಿ ಯಾವ ಸ್ಟ್ರಿಂಗ್‌ಗಳನ್ನು ತಪ್ಪಾಗಿ ಸ್ವೀಕರಿಸಿತು?",
      "opts": [
       "xT-001y and T-014 extra",
       "T-01 and T-ABC",
       "TASK-125 only",
       "None"
      ],
      "optsKn": [
       "xT-001y ಮತ್ತು T-014 extra",
       "T-01 ಮತ್ತು T-ABC",
       "TASK-125 ಮಾತ್ರ",
       "ಯಾವುದೂ ಇಲ್ಲ"
      ],
      "correct": 0
     },
     {
      "q": "Which problem did the structural check miss?",
      "qKn": "ರಚನಾತ್ಮಕ ಪರಿಶೀಲನೆ ಯಾವ ಸಮಸ್ಯೆ ತಪ್ಪಿಸಿತು?",
      "opts": [
       "A null array",
       "Duplicate task ids",
       "A wrong type",
       "A bad enum value"
      ],
      "optsKn": [
       "null ಅರೆ",
       "ನಕಲು task ids",
       "ತಪ್ಪು type",
       "ತಪ್ಪು enum ಮೌಲ್ಯ"
      ],
      "correct": 1
     },
     {
      "q": "How many errors did the three-task board produce?",
      "qKn": "ಮೂರು-ಕಾರ್ಯದ board ಎಷ್ಟು ದೋಷ ನೀಡಿತು?",
      "opts": [
       "0",
       "1",
       "3",
       "9"
      ],
      "optsKn": [
       "0",
       "1",
       "3",
       "9"
      ],
      "correct": 2
     },
     {
      "q": "Did a document with an empty next_action pass the schema?",
      "qKn": "ಖಾಲಿ next_action ಇರುವ ದಾಖಲೆ schema ಪಾಸ್ ಮಾಡಿತೇ?",
      "opts": [
       "Yes, so usefulness needs a separate rule",
       "No, it was refused",
       "It crashed",
       "It was ignored"
      ],
      "optsKn": [
       "ಹೌದು, ಆದ್ದರಿಂದ ಉಪಯುಕ್ತತೆಗೆ ಪ್ರತ್ಯೇಕ ನಿಯಮ ಬೇಕು",
       "ಇಲ್ಲ, ತಿರಸ್ಕರಿಸಲ್ಪಟ್ಟಿತು",
       "ಕ್ರ್ಯಾಶ್ ಆಯಿತು",
       "ನಿರ್ಲಕ್ಷಿಸಲ್ಪಟ್ಟಿತು"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
