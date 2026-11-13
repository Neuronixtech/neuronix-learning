module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6af753d133fd11f6fa965dff",
 "order": 0,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Delegate Agent Work with Isolation and Merge Contracts (Part 1 of 3) — Contracts, Ownership and Waves",
 "titleKn": "Isolation ಮತ್ತು Merge ಒಪ್ಪಂದಗಳೊಂದಿಗೆ Agent ಕೆಲಸ ಹಂಚಿಕೆ (ಭಾಗ 1 / 3) — ಒಪ್ಪಂದಗಳು, ಮಾಲೀಕತ್ವ ಮತ್ತು ಅಲೆಗಳು",
 "desc": "Validate six-field work-unit contracts, reject overlapping ownership by path components and see when parallel delegation loses.",
 "descKn": "ಆರು-ಕ್ಷೇತ್ರ ಕೆಲಸ-ಘಟಕ ಒಪ್ಪಂದಗಳನ್ನು ಮಾನ್ಯಗೊಳಿಸಿ, path ಘಟಕಗಳ ಮೂಲಕ ಅತಿಕ್ರಮಿಸುವ ಮಾಲೀಕತ್ವ ತಿರಸ್ಕರಿಸಿ ಮತ್ತು ಸಮಾನಾಂತರ ಹಂಚಿಕೆ ಯಾವಾಗ ಸೋಲುತ್ತದೆ ನೋಡಿ.",
 "objectives": [
  "Write a six-field work unit.",
  "Reject overlapping ownership.",
  "Compare path components.",
  "Validate dependencies and waves.",
  "Weigh coordination against speed."
 ],
 "objectivesKn": [
  "ಆರು-ಕ್ಷೇತ್ರ ಕೆಲಸ ಘಟಕ ಬರೆಯಿರಿ.",
  "ಅತಿಕ್ರಮಿಸುವ ಮಾಲೀಕತ್ವ ತಿರಸ್ಕರಿಸಿ.",
  "path ಘಟಕಗಳನ್ನು ಹೋಲಿಸಿ.",
  "ಅವಲಂಬನೆ ಮತ್ತು ಅಲೆಗಳನ್ನು ಮಾನ್ಯಗೊಳಿಸಿ.",
  "ವೇಗದ ವಿರುದ್ಧ ಸಮನ್ವಯ ತೂಗಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Delegate Agent Work with Isolation and Merge Contracts (Part 1 of 3)",
    "textKn": "Isolation ಮತ್ತು Merge ಒಪ್ಪಂದಗಳೊಂದಿಗೆ Agent ಕೆಲಸ ಹಂಚಿಕೆ (ಭಾಗ 1 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 1 of 3: six-field work-unit contracts, exclusive ownership by path components, dependency validation, waves and why parallel delegation is not automatically faster. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind delegating agent work with isolation and merge contracts (work units, ownership, worktrees, merging and approvals), not the real software, and the repository, branches and workers are made up by the lab and no language model is involved, so no real LLM behaviour is measured. The original main.py was not supplied, so the labs are our own implementation of the behaviour the lesson describes; the lesson text is complete for all three parts. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 1ನೆಯದು: ಆರು-ಕ್ಷೇತ್ರ ಕೆಲಸ-ಘಟಕ ಒಪ್ಪಂದಗಳು, path ಘಟಕಗಳ ಮೂಲಕ ವಿಶಿಷ್ಟ ಮಾಲೀಕತ್ವ, ಅವಲಂಬನೆ ಮಾನ್ಯೀಕರಣ, ಅಲೆಗಳು ಮತ್ತು ಸಮಾನಾಂತರ ಹಂಚಿಕೆ ಸ್ವಯಂಚಾಲಿತವಾಗಿ ವೇಗವಲ್ಲ ಏಕೆ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು isolation ಮತ್ತು merge ಒಪ್ಪಂದಗಳೊಂದಿಗೆ agent ಕೆಲಸ ಹಂಚಿಕೆ (ಕೆಲಸ ಘಟಕಗಳು, ಮಾಲೀಕತ್ವ, worktrees, ವಿಲೀನ ಮತ್ತು ಅನುಮೋದನೆಗಳು) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು repository, branches ಮತ್ತು workers ಅನ್ನು ಲ್ಯಾಬ್ ಕಲ್ಪಿಸಿದ್ದು ಮತ್ತು ಭಾಷಾ ಮಾದರಿ ಇಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ main.py ಒದಗಿಸಿರಲಿಲ್ಲ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು lesson ವಿವರಿಸುವ ವರ್ತನೆಯ ನಮ್ಮದೇ ಅನುಷ್ಠಾನ; ಮೂರೂ ಭಾಗಗಳ lesson ಪಠ್ಯ ಸಂಪೂರ್ಣವಾಗಿತ್ತು. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "More Agents Is Not More Speed",
    "textKn": "ಹೆಚ್ಚು agents ಎಂದರೆ ಹೆಚ್ಚು ವೇಗ ಅಲ್ಲ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "A Work Unit Is a Contract",
    "headingKn": "ಕೆಲಸ ಘಟಕ ಒಂದು ಒಪ್ಪಂದ",
    "bodyEn": "Two agents editing the same file, deciding the same interface or writing the same results file can erase the time that parallel work saved. A work unit therefore carries a goal, an owner, exclusively owned write paths, dependencies, proof and a handoff. This part builds the planner that checks those contracts: ownership by path components, the lesson's app/ conflict, dependency validation, waves and a small model of when delegation loses to doing the work serially.",
    "bodyKn": "ಇಬ್ಬರು agents ಒಂದೇ ಫೈಲ್ ಸಂಪಾದಿಸುವುದು, ಒಂದೇ interface ನಿರ್ಧರಿಸುವುದು ಅಥವಾ ಒಂದೇ ಫಲಿತಾಂಶ ಫೈಲ್ ಬರೆಯುವುದು ಸಮಾನಾಂತರ ಕೆಲಸ ಉಳಿಸಿದ ಸಮಯ ಅಳಿಸಬಹುದು. ಆದ್ದರಿಂದ ಕೆಲಸ ಘಟಕ ಗುರಿ, ಮಾಲೀಕ, ವಿಶಿಷ್ಟವಾಗಿ ಮಾಲೀಕತ್ವದ ಬರಹ paths, ಅವಲಂಬನೆಗಳು, ಪುರಾವೆ ಮತ್ತು ಹಸ್ತಾಂತರ ಹೊರುತ್ತದೆ. ಈ ಭಾಗ ಆ ಒಪ್ಪಂದಗಳನ್ನು ಪರಿಶೀಲಿಸುವ planner ನಿರ್ಮಿಸುತ್ತದೆ: path ಘಟಕಗಳ ಮೂಲಕ ಮಾಲೀಕತ್ವ, lesson ನ app/ ಸಂಘರ್ಷ, ಅವಲಂಬನೆ ಮಾನ್ಯೀಕರಣ, ಅಲೆಗಳು ಮತ್ತು ಹಂಚಿಕೆ ಯಾವಾಗ ಅನುಕ್ರಮ ಕೆಲಸಕ್ಕೆ ಸೋಲುತ್ತದೆ ಎಂಬ ಸಣ್ಣ ಮಾದರಿ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Contract, Ownership, Waves",
    "headingKn": "ಒಪ್ಪಂದ, ಮಾಲೀಕತ್ವ, ಅಲೆಗಳು",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">Contract, ownership, waves</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">work unit</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">six fields</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">ownership</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">by components</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">waves</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">dependency order</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">plan refused</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">app/ vs app/accounts.py</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">check the contract before workers start</text></svg>",
    "captionEn": "Check the contract before any worker starts.",
    "captionKn": "ಯಾವುದೇ worker ಆರಂಭಿಸುವ ಮುನ್ನ ಒಪ್ಪಂದ ಪರಿಶೀಲಿಸಿ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "The six fields of a work unit",
    "headingKn": "ಕೆಲಸ ಘಟಕದ ಆರು ಕ್ಷೇತ್ರಗಳು",
    "headers": [
     "Field",
     "Purpose",
     "Checked by the planner"
    ],
    "rows": [
     [
      "goal",
      "observable outcome",
      "present"
     ],
     [
      "owner",
      "accountable worker",
      "present"
     ],
     [
      "paths",
      "exclusive write ownership",
      "no overlap by components"
     ],
     [
      "dependencies",
      "predecessors",
      "known, not self, no cycle"
     ],
     [
      "proof",
      "required evidence",
      "present"
     ],
     [
      "handoff",
      "integration information",
      "present"
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
    "filename": "dg_1.py",
    "headingEn": "Ownership, dependencies and waves",
    "headingKn": "ಮಾಲೀಕತ್ವ, ಅವಲಂಬನೆಗಳು ಮತ್ತು ಅಲೆಗಳು",
    "descEn": "normalize_path rejects empty, absolute, drive-letter, traversal and root paths and cleans dot segments and backslashes. paths_overlap compares path components. validate_ownership checks every pair of units, validate_dependencies checks ids and references, compute_waves schedules and names the units blocked by a cycle.",
    "descKn": "normalize_path ಖಾಲಿ, ನಿರಪೇಕ್ಷ, drive-letter, traversal ಮತ್ತು ಮೂಲ paths ತಿರಸ್ಕರಿಸಿ ಚುಕ್ಕೆ ಭಾಗಗಳು ಮತ್ತು ಬ್ಯಾಕ್‌ಸ್ಲ್ಯಾಶ್‌ಗಳನ್ನು ಶುದ್ಧೀಕರಿಸುತ್ತದೆ. paths_overlap path ಘಟಕಗಳನ್ನು ಹೋಲಿಸುತ್ತದೆ. validate_ownership ಪ್ರತಿ ಘಟಕ ಜೋಡಿ ಪರಿಶೀಲಿಸುತ್ತದೆ, validate_dependencies ids ಮತ್ತು ಉಲ್ಲೇಖಗಳನ್ನು ಪರಿಶೀಲಿಸುತ್ತದೆ, compute_waves ವೇಳಾಪಟ್ಟಿ ಮಾಡಿ ಚಕ್ರದಿಂದ ತಡೆಯಲ್ಪಟ್ಟ ಘಟಕಗಳನ್ನು ಹೆಸರಿಸುತ್ತದೆ.",
    "code": "def normalize_path(path):\n    if not isinstance(path, str) or not path.strip():\n        raise ValueError(\"Expected a non-empty path\")\n    raw = path.replace(chr(92), \"/\")\n    if raw.startswith(\"/\") or (len(raw) > 1 and raw[1] == \":\"):\n        raise ValueError(\"Expected a relative path\")\n    if \"..\" in raw.split(\"/\"):\n        raise ValueError(\"Parent traversal is not allowed\")\n    parts = tuple(p for p in PurePosixPath(raw).parts if p != \".\")\n    if not parts:\n        raise ValueError(\"Repository root ownership is not allowed\")\n    return parts\n\n\ndef paths_overlap(a, b):\n    x, y = normalize_path(a), normalize_path(b)\n    n = min(len(x), len(y))\n    return x[:n] == y[:n]\n\n\ndef unit(uid, paths, deps=()):\n    return WorkUnit(uid, f\"Complete {uid}\", f\"{uid}-agent\", tuple(paths), tuple(deps), (\"Required proof\",), (\"Changed files and risks\",))\n\n\ndef validate_ownership(units):\n    for i, a in enumerate(units):\n        for b in units[i + 1:]:\n            for pa in a.paths:\n                for pb in b.paths:\n                    if paths_overlap(pa, pb):\n                        raise ValueError(f\"Overlapping ownership: {a.unit_id}:{pa} and {b.unit_id}:{pb}\")\n\n\ndef validate_dependencies(units):\n    ids = [u.unit_id for u in units]\n    if len(ids) != len(set(ids)):\n        raise ValueError(\"Duplicate work-unit IDs\")\n    for u in units:\n        for d in u.dependencies:\n            if d == u.unit_id:\n                raise ValueError(f\"{u.unit_id} depends on itself\")\n            if d not in ids:\n                raise ValueError(f\"{u.unit_id} has unknown dependency: {d}\")\n\n\ndef compute_waves(units):\n    validate_dependencies(units)\n    pending = {u.unit_id: set(u.dependencies) for u in units}\n    done, waves = set(), []\n    while pending:\n        ready = sorted(k for k, d in pending.items() if d <= done)\n        if not ready:\n            raise ValueError(\"No executable units remain; dependency graph is blocked by: \" + \", \".join(sorted(pending)))\n        waves.append(ready)\n        for k in ready:\n            del pending[k]\n        done.update(ready)\n    return waves\n\n\ndef build_plan(units):\n    validate_dependencies(units)\n    validate_ownership(units)\n    return {\"units\": [u.unit_id for u in units], \"execution_waves\": compute_waves(units), \"status\": \"planned\"}"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "dg_1.py",
    "headingEn": "main(): five experiments",
    "headingKn": "main(): ಐದು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() plans four units and then makes docs own app/, compares component and text-prefix matching, tries seven unsafe paths, tries four dependency defects and computes three illustrative serial-versus-parallel totals.",
    "descKn": "main() ನಾಲ್ಕು ಘಟಕಗಳನ್ನು ಯೋಜಿಸಿ ನಂತರ docs ಗೆ app/ ಮಾಲೀಕತ್ವ ನೀಡಿ, ಘಟಕ ಮತ್ತು ಪಠ್ಯ-ಪೂರ್ವಪದ ಹೊಂದಾಣಿಕೆ ಹೋಲಿಸಿ, ಏಳು ಅಸುರಕ್ಷಿತ paths ಪ್ರಯತ್ನಿಸಿ, ನಾಲ್ಕು ಅವಲಂಬನೆ ದೋಷ ಪ್ರಯತ್ನಿಸಿ ಮತ್ತು ಮೂರು ಕಾಲ್ಪನಿಕ ಅನುಕ್ರಮ-ವಿರುದ್ಧ-ಸಮಾನಾಂತರ ಒಟ್ಟು ಲೆಕ್ಕ ಹಾಕುತ್ತದೆ.",
    "code": "def main():\n    section(\"1. Genuinely running: a valid plan and the lesson's app/ ownership experiment\")\n    api, docs = unit(\"api\", [\"app/accounts.py\"]), unit(\"docs\", [\"docs/accounts.md\"])\n    review, integ = unit(\"review\", [\"reviews/accounts.json\"], [\"api\"]), unit(\"integration\", [\"outputs/integration.json\"], [\"api\", \"docs\", \"review\"])\n    print(\"plan:\", build_plan([api, docs, review, integ]))\n    bad_docs = unit(\"docs\", [\"app/\"])\n    try:\n        build_plan([api, bad_docs, review, integ])\n    except ValueError as e:\n        print(\"docs owns app/:\", e)\n    print(\"owning the directory app/ also covers app/accounts.py, so the plan was refused before any worker started; the contract is checked as a plan, which is the only moment it is cheap to fix\")\n\n    section(\"2. Genuinely measuring: component matching versus a text prefix\")\n    for a, b in ((\"app/\", \"app/accounts.py\"), (\"app\", \"application/x.py\"), (\"app/\", \"application/x.py\"), (\"app/api.py\", \"app/models.py\"), (\"App/accounts.py\", \"app/\")):\n        print(f\"{a:18} vs {b:18} component overlap={paths_overlap(a, b)!s:5} naive startswith={b.startswith(a)}\")\n    print(\"the owner written as app without a trailing slash made the text prefix claim application/x.py as inside it (second row), while the component comparison did not and gave the same answer for app and app/; the last row shows case: this comparison is case-sensitive, so App/accounts.py and app/ do not overlap here even though they would be the same folder on a case-insensitive filesystem\")\n\n    section(\"3. Genuinely running: unsafe paths are rejected before they can own anything\")\n    for p in (\"../secrets.txt\", \"/etc/passwd\", \"C:\\\\Windows\\\\x\", \"\", \".\", \"app\\\\accounts.py\", \"./app/./accounts.py\"):\n        try:\n            print(f\"{p!r:24} -> {normalize_path(p)}\")\n        except ValueError as e:\n            print(f\"{p!r:24} rejected: {e}\")\n    print(\"traversal, absolute, drive-letter, empty and root paths were refused while backslashes and dot segments were cleaned; this is lexical only, and symlinks and the real filesystem are not consulted\")\n\n    section(\"4. Genuinely running: dependency defects and a blocked graph\")\n    for label, us in ((\"unknown dependency\", [unit(\"a\", [\"a/\"], [\"zzz\"])]), (\"self dependency\", [unit(\"a\", [\"a/\"], [\"a\"])]), (\"duplicate ids\", [unit(\"a\", [\"a/\"]), unit(\"a\", [\"b/\"])]),\n                      (\"cycle\", [unit(\"a\", [\"a/\"], [\"b\"]), unit(\"b\", [\"b/\"], [\"a\"])])):\n        try:\n            compute_waves(us)\n            print(f\"{label:20} accepted\")\n        except ValueError as e:\n            print(f\"{label:20} rejected: {e}\")\n    print(\"ownership and dependencies are separate checks: two units can own different files and still be unable to run, and the cycle was reported with the names of the units that blocked it\")\n\n    section(\"5. Genuinely computing: when parallel delegation is slower (ILLUSTRATIVE numbers)\")\n    serial = 12\n    for label, crit, coord, integ_t, rework in ((\"tidy split\", 4, 1, 2, 0), (\"some conflicts\", 4, 1, 2, 3), (\"heavy conflicts\", 4, 2, 3, 6)):\n        total = crit + coord + integ_t + rework\n        print(f\"{label:16} critical {crit}h + coordination {coord}h + integration {integ_t}h + rework {rework}h = {total}h vs serial {serial}h -> {'faster' if total < serial else 'slower'}\")\n    print(\"the hours are invented to show the shape of the argument: the critical path sets the floor, and once coordination, integration and rework are added the parallel plan can lose to the serial one; the lab measured nothing about real agents\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: a valid plan and the lesson's app/ ownership experiment ---\nplan: {'units': ['api', 'docs', 'review', 'integration'], 'execution_waves': [['api', 'docs'], ['review'], ['integration']], 'status': 'planned'}\ndocs owns app/: Overlapping ownership: api:app/accounts.py and docs:app/\nowning the directory app/ also covers app/accounts.py, so the plan was refused before any worker started; the contract is checked as a plan, which is the only moment it is cheap to fix\n\n--- 2. Genuinely measuring: component matching versus a text prefix ---\napp/               vs app/accounts.py    component overlap=True  naive startswith=True\napp                vs application/x.py   component overlap=False naive startswith=True\napp/               vs application/x.py   component overlap=False naive startswith=False\napp/api.py         vs app/models.py      component overlap=False naive startswith=False\nApp/accounts.py    vs app/               component overlap=False naive startswith=False\nthe owner written as app without a trailing slash made the text prefix claim application/x.py as inside it (second row), while the component comparison did not and gave the same answer for app and app/; the last row shows case: this comparison is case-sensitive, so App/accounts.py and app/ do not overlap here even though they would be the same folder on a case-insensitive filesystem\n\n--- 3. Genuinely running: unsafe paths are rejected before they can own anything ---\n'../secrets.txt'         rejected: Parent traversal is not allowed\n'/etc/passwd'            rejected: Expected a relative path\n'C:\\\\Windows\\\\x'         rejected: Expected a relative path\n''                       rejected: Expected a non-empty path\n'.'                      rejected: Repository root ownership is not allowed\n'app\\\\accounts.py'       -> ('app', 'accounts.py')\n'./app/./accounts.py'    -> ('app', 'accounts.py')\ntraversal, absolute, drive-letter, empty and root paths were refused while backslashes and dot segments were cleaned; this is lexical only, and symlinks and the real filesystem are not consulted\n\n--- 4. Genuinely running: dependency defects and a blocked graph ---\nunknown dependency   rejected: a has unknown dependency: zzz\nself dependency      rejected: a depends on itself\nduplicate ids        rejected: Duplicate work-unit IDs\ncycle                rejected: No executable units remain; dependency graph is blocked by: a, b\nownership and dependencies are separate checks: two units can own different files and still be unable to run, and the cycle was reported with the names of the units that blocked it\n\n--- 5. Genuinely computing: when parallel delegation is slower (ILLUSTRATIVE numbers) ---\ntidy split       critical 4h + coordination 1h + integration 2h + rework 0h = 7h vs serial 12h -> faster\nsome conflicts   critical 4h + coordination 1h + integration 2h + rework 3h = 10h vs serial 12h -> faster\nheavy conflicts  critical 4h + coordination 2h + integration 3h + rework 6h = 15h vs serial 12h -> slower\nthe hours are invented to show the shape of the argument: the critical path sets the floor, and once coordination, integration and rework are added the parallel plan can lose to the serial one; the lab measured nothing about real agents"
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
    "headingEn": "Genuinely Found: The app/ Plan Was Refused Before Anyone Started",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: app/ ಯೋಜನೆ ಯಾರೂ ಆರಂಭಿಸುವ ಮುನ್ನ ತಿರಸ್ಕೃತವಾಯಿತು",
    "bodyEn": "Section 1: the four-unit plan scheduled as [api, docs], [review], [integration]; making docs own app/ raised \"Overlapping ownership: api:app/accounts.py and docs:app/\". Section 2: with the owner written as app (no trailing slash), a text prefix claimed application/x.py as inside it and the component comparison did not. Section 3: ../secrets.txt, /etc/passwd, a drive-letter path, an empty string and \".\" were rejected, while backslashes and dot segments were cleaned.",
    "bodyKn": "ವಿಭಾಗ 1: ನಾಲ್ಕು-ಘಟಕ ಯೋಜನೆ [api, docs], [review], [integration] ಆಗಿ ವೇಳಾಪಟ್ಟಿಯಾಯಿತು; docs ಗೆ app/ ಮಾಲೀಕತ್ವ ನೀಡಿದಾಗ \"Overlapping ownership: api:app/accounts.py and docs:app/\" ಎತ್ತಿತು. ವಿಭಾಗ 2: ಮಾಲೀಕನನ್ನು app (ಕೊನೆಯ ಸ್ಲ್ಯಾಶ್ ಇಲ್ಲದೆ) ಎಂದು ಬರೆದಾಗ, ಪಠ್ಯ ಪೂರ್ವಪದ application/x.py ಅನ್ನು ಒಳಗಿನದು ಎಂದಿತು ಮತ್ತು ಘಟಕ ಹೋಲಿಕೆ ಹಾಗೆ ಹೇಳಲಿಲ್ಲ. ವಿಭಾಗ 3: ../secrets.txt, /etc/passwd, drive-letter path, ಖಾಲಿ ಸ್ಟ್ರಿಂಗ್ ಮತ್ತು \".\" ತಿರಸ್ಕೃತವಾದವು, ಬ್ಯಾಕ್‌ಸ್ಲ್ಯಾಶ್‌ಗಳು ಮತ್ತು ಚುಕ್ಕೆ ಭಾಗಗಳು ಶುದ್ಧೀಕರಿಸಲ್ಪಟ್ಟವು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Case, Cycles and the Arithmetic of Delegation",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಕೇಸ್, ಚಕ್ರಗಳು ಮತ್ತು ಹಂಚಿಕೆಯ ಅಂಕಗಣಿತ",
    "bodyEn": "Section 2 (last row): App/accounts.py and app/ did not overlap because the comparison is case-sensitive. Section 4: an unknown dependency, a self dependency, duplicate ids and a cycle were each rejected, the cycle naming a and b. Section 5 (invented hours against 12 serial): 4+1+2+0 = 7 was faster, 4+1+2+3 = 10 was faster and 4+2+3+6 = 15 was slower.",
    "bodyKn": "ವಿಭಾಗ 2 (ಕೊನೆಯ ಸಾಲು): ಹೋಲಿಕೆ ಕೇಸ್-ಸೂಕ್ಷ್ಮವಾಗಿರುವುದರಿಂದ App/accounts.py ಮತ್ತು app/ ಅತಿಕ್ರಮಿಸಲಿಲ್ಲ. ವಿಭಾಗ 4: ಅಜ್ಞಾತ ಅವಲಂಬನೆ, ಸ್ವಯಂ ಅವಲಂಬನೆ, ನಕಲು ids ಮತ್ತು ಚಕ್ರ ಪ್ರತಿಯೊಂದೂ ತಿರಸ್ಕೃತವಾದವು, ಚಕ್ರ a ಮತ್ತು b ಹೆಸರಿಸಿತು. ವಿಭಾಗ 5 (12 ಅನುಕ್ರಮಕ್ಕೆ ಕಲ್ಪಿತ ಗಂಟೆಗಳು): 4+1+2+0 = 7 ವೇಗವಾಗಿತ್ತು, 4+1+2+3 = 10 ವೇಗವಾಗಿತ್ತು ಮತ್ತು 4+2+3+6 = 15 ನಿಧಾನವಾಗಿತ್ತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A contract that is checked as a plan costs a rejected plan; the same overlap discovered at merge time costs conflicting work from several agents.",
    "bodyKn": "ಯೋಜನೆಯಾಗಿ ಪರಿಶೀಲಿಸುವ ಒಪ್ಪಂದಕ್ಕೆ ತಿರಸ್ಕೃತ ಯೋಜನೆಯ ವೆಚ್ಚ; ವಿಲೀನದ ಸಮಯದಲ್ಲಿ ಕಂಡುಬರುವ ಅದೇ ಅತಿಕ್ರಮಣಕ್ಕೆ ಹಲವು agents ರ ಸಂಘರ್ಷದ ಕೆಲಸದ ವೆಚ್ಚ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"three agents means a third of the time.\" With invented overhead the parallel plan took 15 hours against 12.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಮೂರು agents ಎಂದರೆ ಮೂರನೇ ಒಂದು ಸಮಯ.\" ಕಲ್ಪಿತ ಹೆಚ್ಚುವರಿ ಸಮಯದೊಂದಿಗೆ ಸಮಾನಾಂತರ ಯೋಜನೆ 12 ಕ್ಕೆ ಬದಲು 15 ಗಂಟೆ ತೆಗೆದುಕೊಂಡಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Work unit: goal, owner, paths, dependencies, proof, handoff. Exclusive ownership: no two units own overlapping paths. Component match: comparing path parts, not text. Wave: units ready together. Critical path: the longest dependent chain.",
    "bodyKn": "Work unit: ಗುರಿ, ಮಾಲೀಕ, paths, ಅವಲಂಬನೆಗಳು, ಪುರಾವೆ, ಹಸ್ತಾಂತರ. Exclusive ownership: ಯಾವುದೇ ಎರಡು ಘಟಕ ಅತಿಕ್ರಮಿಸುವ paths ಹೊಂದಿಲ್ಲ. Component match: ಪಠ್ಯವಲ್ಲ, path ಭಾಗ ಹೋಲಿಕೆ. Wave: ಒಟ್ಟಿಗೆ ಸಿದ್ಧವಿರುವ ಘಟಕಗಳು. Critical path: ಅತಿ ಉದ್ದದ ಅವಲಂಬಿತ ಸರಪಳಿ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) Docs owning app/ conflicted with api owning app/accounts.py and the plan was refused. 2) A text prefix confused app with application. 3) Unsafe paths were rejected. 4) Four dependency defects were caught. 5) Invented overhead made parallel 15 hours against 12 serial.",
    "bodyKn": "1) docs ಗೆ app/ ಮಾಲೀಕತ್ವ api ಯ app/accounts.py ಜೊತೆ ಸಂಘರ್ಷಿಸಿ ಯೋಜನೆ ತಿರಸ್ಕೃತವಾಯಿತು. 2) ಪಠ್ಯ ಪೂರ್ವಪದ app ಅನ್ನು application ಜೊತೆ ಗೊಂದಲಗೊಳಿಸಿತು. 3) ಅಸುರಕ್ಷಿತ paths ತಿರಸ್ಕೃತವಾದವು. 4) ನಾಲ್ಕು ಅವಲಂಬನೆ ದೋಷ ಹಿಡಿಯಲ್ಪಟ್ಟವು. 5) ಕಲ್ಪಿತ ಹೆಚ್ಚುವರಿ ಸಮಯ ಸಮಾನಾಂತರವನ್ನು 12 ಅನುಕ್ರಮಕ್ಕೆ ವಿರುದ್ಧ 15 ಗಂಟೆ ಮಾಡಿತು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What error did docs owning app/ produce?",
      "qKn": "docs ಗೆ app/ ಮಾಲೀಕತ್ವ ಯಾವ ದೋಷ ಉತ್ಪಾದಿಸಿತು?",
      "opts": [
       "Overlapping ownership with api:app/accounts.py",
       "Unknown dependency",
       "A cycle",
       "No error"
      ],
      "optsKn": [
       "api:app/accounts.py ಜೊತೆ ಅತಿಕ್ರಮಿಸುವ ಮಾಲೀಕತ್ವ",
       "ಅಜ್ಞಾತ ಅವಲಂಬನೆ",
       "ಚಕ್ರ",
       "ದೋಷ ಇಲ್ಲ"
      ],
      "correct": 0
     },
     {
      "q": "Which comparison wrongly claimed application/x.py inside app?",
      "qKn": "ಯಾವ ಹೋಲಿಕೆ application/x.py ಅನ್ನು app ಒಳಗಿದೆ ಎಂದು ತಪ್ಪಾಗಿ ಹೇಳಿತು?",
      "opts": [
       "The text startswith",
       "The component comparison",
       "Both",
       "Neither"
      ],
      "optsKn": [
       "ಪಠ್ಯ startswith",
       "ಘಟಕ ಹೋಲಿಕೆ",
       "ಎರಡೂ",
       "ಯಾವುದೂ ಇಲ್ಲ"
      ],
      "correct": 0
     },
     {
      "q": "How many hours did the heavy-conflict parallel plan take in the invented model?",
      "qKn": "ಕಲ್ಪಿತ ಮಾದರಿಯಲ್ಲಿ ಭಾರೀ-ಸಂಘರ್ಷ ಸಮಾನಾಂತರ ಯೋಜನೆ ಎಷ್ಟು ಗಂಟೆ ತೆಗೆದುಕೊಂಡಿತು?",
      "opts": [
       "15",
       "7",
       "10",
       "12"
      ],
      "optsKn": [
       "15",
       "7",
       "10",
       "12"
      ],
      "correct": 0
     },
     {
      "q": "Did App/accounts.py overlap app/ in this lab?",
      "qKn": "ಈ ಲ್ಯಾಬ್‌ನಲ್ಲಿ App/accounts.py app/ ಅನ್ನು ಅತಿಕ್ರಮಿಸಿತೇ?",
      "opts": [
       "No, the comparison is case-sensitive",
       "Yes",
       "It raised",
       "Only on Windows"
      ],
      "optsKn": [
       "ಇಲ್ಲ, ಹೋಲಿಕೆ ಕೇಸ್-ಸೂಕ್ಷ್ಮ",
       "ಹೌದು",
       "ಅಪವಾದ ಎತ್ತಿತು",
       "Windows ನಲ್ಲಿ ಮಾತ್ರ"
      ],
      "correct": 0
     },
     {
      "q": "What did the cycle error name?",
      "qKn": "ಚಕ್ರ ದೋಷ ಏನನ್ನು ಹೆಸರಿಸಿತು?",
      "opts": [
       "The blocked units a and b",
       "Nothing",
       "The owner",
       "The path"
      ],
      "optsKn": [
       "ತಡೆಯಲ್ಪಟ್ಟ ಘಟಕಗಳು a ಮತ್ತು b",
       "ಏನೂ ಇಲ್ಲ",
       "ಮಾಲೀಕ",
       "path"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
