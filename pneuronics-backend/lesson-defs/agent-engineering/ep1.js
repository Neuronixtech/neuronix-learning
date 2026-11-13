module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6af752671dabe46ef6f6e37d",
 "order": 0,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Build an Evidence-Backed Execution Plan (Part 1 of 3) — Work Items, Validation and Waves",
 "titleKn": "ಸಾಕ್ಷ್ಯ-ಆಧಾರಿತ ಕಾರ್ಯಗತ ಯೋಜನೆ ನಿರ್ಮಿಸಿ (ಭಾಗ 1 / 3) — ಕೆಲಸ ಘಟಕಗಳು, ಮಾನ್ಯೀಕರಣ ಮತ್ತು ಅಲೆಗಳು",
 "desc": "Validate a plan of work items with five commitments, schedule it into dependency waves and see what a cycle really means.",
 "descKn": "ಐದು ಬದ್ಧತೆಗಳ ಕೆಲಸ ಘಟಕಗಳ ಯೋಜನೆ ಮಾನ್ಯಗೊಳಿಸಿ, ಅವಲಂಬನೆ ಅಲೆಗಳಾಗಿ ವೇಳಾಪಟ್ಟಿ ಮಾಡಿ ಮತ್ತು ಚಕ್ರ ನಿಜವಾಗಿ ಏನು ಎಂದು ನೋಡಿ.",
 "objectives": [
  "Name the five commitments.",
  "Validate ids, dependencies and proof.",
  "Schedule items into waves.",
  "Read a cycle as a missing decision.",
  "Know what validation cannot check."
 ],
 "objectivesKn": [
  "ಐದು ಬದ್ಧತೆಗಳನ್ನು ಹೆಸರಿಸಿ.",
  "ids, ಅವಲಂಬನೆಗಳು ಮತ್ತು ಪುರಾವೆ ಮಾನ್ಯಗೊಳಿಸಿ.",
  "ಘಟಕಗಳನ್ನು ಅಲೆಗಳಾಗಿ ವೇಳಾಪಟ್ಟಿ ಮಾಡಿ.",
  "ಚಕ್ರವನ್ನು ಕಾಣೆಯಾದ ನಿರ್ಧಾರ ಎಂದು ಓದಿ.",
  "ಮಾನ್ಯೀಕರಣ ಏನು ಪರಿಶೀಲಿಸಲಾರದು ತಿಳಿಯಿರಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Build an Evidence-Backed Execution Plan (Part 1 of 3)",
    "textKn": "ಸಾಕ್ಷ್ಯ-ಆಧಾರಿತ ಕಾರ್ಯಗತ ಯೋಜನೆ ನಿರ್ಮಿಸಿ (ಭಾಗ 1 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 1 of 3: work items with five commitments, a plan validator, wave scheduling, cycle detection and the time waves can save under illustrative durations. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind an evidence-backed execution plan (work items, dependency waves, evidence receipts, proof runs and durable state), not the real software, and the repository, evidence and durations are made up by the lab and no language model is involved, so no real LLM behaviour is measured. In the pasted lesson several code listings were cut off partway and the original main.py was not supplied, so the labs are our own implementation of the behaviour the surrounding text describes. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 1ನೆಯದು: ಐದು ಬದ್ಧತೆಗಳ ಕೆಲಸ ಘಟಕಗಳು, ಯೋಜನೆ ಮಾನ್ಯಕಾರಕ, ಅಲೆ ವೇಳಾಪಟ್ಟಿ, ಚಕ್ರ ಪತ್ತೆ ಮತ್ತು ಕಾಲ್ಪನಿಕ ಅವಧಿಗಳಲ್ಲಿ ಅಲೆಗಳು ಉಳಿಸಬಹುದಾದ ಸಮಯ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು ಸಾಕ್ಷ್ಯ-ಆಧಾರಿತ ಕಾರ್ಯಗತ ಯೋಜನೆ (ಕೆಲಸ ಘಟಕಗಳು, ಅವಲಂಬನೆ ಅಲೆಗಳು, ಸಾಕ್ಷ್ಯ ರಸೀದಿಗಳು, ಪುರಾವೆ ಓಟಗಳು ಮತ್ತು ಬಾಳಿಕೆ ಬರುವ ಸ್ಥಿತಿ) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು repository, ಸಾಕ್ಷ್ಯ ಮತ್ತು ಅವಧಿಗಳನ್ನು ಲ್ಯಾಬ್ ಕಲ್ಪಿಸಿದ್ದು ಮತ್ತು ಭಾಷಾ ಮಾದರಿ ಇಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಅಂಟಿಸಿದ lesson ನಲ್ಲಿ ಹಲವು ಕೋಡ್ ಪಟ್ಟಿಗಳು ಅರ್ಧದಲ್ಲಿ ಕತ್ತರಿಸಲ್ಪಟ್ಟಿದ್ದವು ಮತ್ತು ಮೂಲ main.py ಒದಗಿಸಿರಲಿಲ್ಲ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ಸುತ್ತಲಿನ ಪಠ್ಯ ವಿವರಿಸುವ ವರ್ತನೆಯ ನಮ್ಮದೇ ಅನುಷ್ಠಾನ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "A To-Do List Is Not a Plan",
    "textKn": "ಮಾಡಬೇಕಾದ ಪಟ್ಟಿ ಯೋಜನೆಯಲ್ಲ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Five Commitments per Work Item",
    "headingKn": "ಪ್ರತಿ ಕೆಲಸ ಘಟಕಕ್ಕೆ ಐದು ಬದ್ಧತೆಗಳು",
    "bodyEn": "Update the API, add tests, update docs, verify: that list leaves open which endpoint, what already exists, what must finish first and which test proves it. An evidence-backed plan gives every work item an identifier, the smallest change, evidence, dependencies and an exact proof, and orders the items by what must actually come first. This part validates such a plan, schedules it into waves, shows what a cycle means and measures what waves can save under invented durations.",
    "bodyKn": "API ನವೀಕರಿಸಿ, ಪರೀಕ್ಷೆ ಸೇರಿಸಿ, docs ನವೀಕರಿಸಿ, ಪರಿಶೀಲಿಸಿ: ಆ ಪಟ್ಟಿ ಯಾವ endpoint, ಈಗಾಗಲೇ ಏನಿದೆ, ಮೊದಲು ಏನು ಮುಗಿಯಬೇಕು ಮತ್ತು ಯಾವ ಪರೀಕ್ಷೆ ಅದನ್ನು ಸಾಬೀತುಪಡಿಸುತ್ತದೆ ಎಂಬುದನ್ನು ತೆರೆದಿಡುತ್ತದೆ. ಸಾಕ್ಷ್ಯ-ಆಧಾರಿತ ಯೋಜನೆ ಪ್ರತಿ ಕೆಲಸ ಘಟಕಕ್ಕೆ ಗುರುತು, ಚಿಕ್ಕ ಬದಲಾವಣೆ, ಸಾಕ್ಷ್ಯ, ಅವಲಂಬನೆಗಳು ಮತ್ತು ನಿಖರ ಪುರಾವೆ ನೀಡಿ, ನಿಜವಾಗಿ ಮೊದಲು ಬರಬೇಕಾದುದರಂತೆ ಘಟಕಗಳನ್ನು ಕ್ರಮಗೊಳಿಸುತ್ತದೆ. ಈ ಭಾಗ ಅಂತಹ ಯೋಜನೆಯನ್ನು ಮಾನ್ಯಗೊಳಿಸಿ, ಅಲೆಗಳಾಗಿ ವೇಳಾಪಟ್ಟಿ ಮಾಡಿ, ಚಕ್ರ ಏನನ್ನು ಸೂಚಿಸುತ್ತದೆ ಎಂದು ತೋರಿಸಿ, ಕಾಲ್ಪನಿಕ ಅವಧಿಗಳಲ್ಲಿ ಅಲೆಗಳು ಏನು ಉಳಿಸಬಹುದು ಎಂದು ಅಳೆಯುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "A Plan Is a Dependency Graph",
    "headingKn": "ಯೋಜನೆ ಒಂದು ಅವಲಂಬನೆ ಗ್ರಾಫ್",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">Plan as a dependency graph</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">work items</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">five commitments</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">validate</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">ids, deps, proof</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">waves</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">topological sort</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">cycle = missing decision</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">extract a prerequisite</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">a plan is a graph, not a list</text></svg>",
    "captionEn": "Every change has a reason and every item has proof.",
    "captionKn": "ಪ್ರತಿ ಬದಲಾವಣೆಗೆ ಕಾರಣ ಮತ್ತು ಪ್ರತಿ ಘಟಕಕ್ಕೆ ಪುರಾವೆ ಇದೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "The five commitments",
    "headingKn": "ಐದು ಬದ್ಧತೆಗಳು",
    "headers": [
     "Commitment",
     "Question",
     "Checked for"
    ],
    "rows": [
     [
      "id",
      "how is it referenced",
      "unique and non-blank"
     ],
     [
      "change",
      "what changes",
      "non-blank"
     ],
     [
      "evidence",
      "why is it justified",
      "at least one non-blank entry"
     ],
     [
      "dependencies",
      "what finishes first",
      "known ids, no self, no duplicates"
     ],
     [
      "proof",
      "how completion is shown",
      "non-blank"
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
    "filename": "ep_1.py",
    "headingEn": "WorkItem, the validator and the wave scheduler",
    "headingKn": "WorkItem, ಮಾನ್ಯಕಾರಕ ಮತ್ತು ಅಲೆ ವೇಳಾಪಟ್ಟಿಕಾರ",
    "descEn": "validate_plan rejects an empty plan, duplicate ids, blank fields, a duplicate or self dependency and an unknown dependency. execution_waves repeatedly collects every item whose dependencies are all already scheduled and raises, naming the stuck items, when none is ready.",
    "descKn": "validate_plan ಖಾಲಿ ಯೋಜನೆ, ನಕಲು ids, ಖಾಲಿ ಕ್ಷೇತ್ರಗಳು, ನಕಲು ಅಥವಾ ಸ್ವಯಂ ಅವಲಂಬನೆ ಮತ್ತು ಅಜ್ಞಾತ ಅವಲಂಬನೆ ತಿರಸ್ಕರಿಸುತ್ತದೆ. execution_waves ಅವಲಂಬನೆಗಳೆಲ್ಲ ಈಗಾಗಲೇ ವೇಳಾಪಟ್ಟಿಯಾದ ಪ್ರತಿ ಘಟಕ ಪದೇ ಪದೇ ಸಂಗ್ರಹಿಸಿ, ಯಾವುದೂ ಸಿದ್ಧವಿಲ್ಲದಿದ್ದಾಗ ಅಂಟಿಕೊಂಡ ಘಟಕಗಳ ಹೆಸರಿನೊಂದಿಗೆ ಅಪವಾದ ಎತ್ತುತ್ತದೆ.",
    "code": "@dataclass\nclass WorkItem:\n    id: str\n    change: str\n    evidence: List[str]\n    dependencies: List[str]\n    proof: str\n\n\ndef validate_plan(items):\n    if not items:\n        raise ValueError(\"Plan cannot be empty\")\n    ids = [i.id for i in items]\n    if len(ids) != len(set(ids)):\n        raise ValueError(\"Duplicate work item identifier\")\n    known = set(ids)\n    for it in items:\n        if not it.id.strip():\n            raise ValueError(\"Work item has no identifier\")\n        if not it.change.strip():\n            raise ValueError(f\"{it.id}: missing change description\")\n        if not it.evidence or not all(e.strip() for e in it.evidence):\n            raise ValueError(f\"{it.id}: missing evidence\")\n        if not it.proof.strip():\n            raise ValueError(f\"{it.id}: missing proof\")\n        if len(it.dependencies) != len(set(it.dependencies)):\n            raise ValueError(f\"{it.id}: duplicate dependency\")\n        for d in it.dependencies:\n            if d == it.id:\n                raise ValueError(f\"{it.id}: depends on itself\")\n            if d not in known:\n                raise ValueError(f\"{it.id}: unknown dependency {d}\")\n\n\ndef execution_waves(items):\n    validate_plan(items)\n    remaining = {i.id: set(i.dependencies) for i in items}\n    done, waves = set(), []\n    while remaining:\n        ready = sorted(k for k, deps in remaining.items() if deps <= done)\n        if not ready:\n            raise ValueError(\"Dependency cycle detected among: \" + \", \".join(sorted(remaining)))\n        waves.append(ready)\n        for k in ready:\n            del remaining[k]\n        done.update(ready)\n    return waves"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "ep_1.py",
    "headingEn": "main(): six experiments",
    "headingKn": "main(): ಆರು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() schedules the lesson plan, tries eight defective plans, runs a cycle and its repair, computes a critical path from invented durations, passes a plan with vague evidence and writes the plan as JSON.",
    "descKn": "main() lesson ಯೋಜನೆ ವೇಳಾಪಟ್ಟಿ ಮಾಡಿ, ಎಂಟು ದೋಷಯುಕ್ತ ಯೋಜನೆ ಪ್ರಯತ್ನಿಸಿ, ಚಕ್ರ ಮತ್ತು ಅದರ ದುರಸ್ತಿ ಓಡಿಸಿ, ಕಾಲ್ಪನಿಕ ಅವಧಿಗಳಿಂದ critical path ಲೆಕ್ಕ ಹಾಕಿ, ಅಸ್ಪಷ್ಟ ಸಾಕ್ಷ್ಯ ಇರುವ ಯೋಜನೆ ಪಾಸ್ ಮಾಡಿ ಯೋಜನೆಯನ್ನು JSON ಆಗಿ ಬರೆಯುತ್ತದೆ.",
    "code": "def main():\n    section(\"1. Genuinely running: the lesson's four-item plan becomes three waves\")\n    plan = lesson_plan()\n    for n, w in enumerate(execution_waves(plan), 1):\n        print(f\"Wave {n}: {', '.join(w)}\")\n    print(\"the contract has no prerequisites, implementation and documentation both wait only for the contract, and integration waits for both; items in the same wave are logically ready together, which says nothing yet about whether they can safely run at the same time\")\n\n    section(\"2. Genuinely running: each structural defect is rejected with its own message\")\n    defects = {\"duplicate id\": [item(\"A\"), item(\"A\")], \"blank evidence entry\": [item(\"A\", evidence=(\"  \",))], \"no evidence\": [item(\"A\", evidence=())], \"no proof\": [item(\"A\", proof=\"  \")],\n               \"unknown dependency\": [item(\"A\", [\"W-999\"])], \"self dependency\": [item(\"A\", [\"A\"])], \"duplicate dependency\": [item(\"A\"), item(\"B\", [\"A\", \"A\"])], \"empty plan\": []}\n    for label, p in defects.items():\n        try:\n            validate_plan(p)\n            print(f\"{label:22} accepted\")\n        except ValueError as e:\n            print(f\"{label:22} rejected: {e}\")\n    print(\"each defect is caught before any edit, and the unknown dependency in particular would otherwise have made an executor wait for a prerequisite that can never finish\")\n\n    section(\"3. Genuinely running: a cycle is not an ordering problem, it is a missing decision\")\n    cyc = [item(\"A\", [\"C\"]), item(\"B\", [\"A\"]), item(\"C\", [\"B\"])]\n    try:\n        execution_waves(cyc)\n    except ValueError as e:\n        print(\"cycle plan:\", e)\n    fixed = [item(\"D\", change=\"Decide the shared contract\"), item(\"A\", [\"D\"]), item(\"B\", [\"D\", \"A\"]), item(\"C\", [\"D\", \"B\"])]\n    print(\"after extracting a shared decision D:\", execution_waves(fixed))\n    print(\"no item in the cycle could ever start, so the scheduler stopped and named the stuck items instead of choosing a starting point; the repair was a new prerequisite, not deleting an edge\")\n\n    section(\"4. Genuinely measuring: what waves save, under ILLUSTRATIVE durations\")\n    dur = {\"W-001\": 20, \"W-002\": 50, \"W-003\": 30, \"W-004\": 15}\n    print(\"sequential total:\", sum(dur.values()), \"minutes | critical path:\", critical_path(dur, plan), \"minutes | saving:\", sum(dur.values()) - critical_path(dur, plan), \"minutes\")\n    print(\"the durations are invented for this lab; the saving appears only if implementation and documentation really can run in parallel with enough workers and no shared-file conflicts, and the integration step is still bound by the slower of the two\")\n\n    section(\"5. Genuinely checking: structural validation does not check the evidence is true\")\n    weak = [item(\"W-001\", evidence=(\"tests exist\",), proof=\"echo done\")]\n    print(\"plan with vague evidence and an echo proof:\", \"accepted\" if validate_plan(weak) is None else \"rejected\", \"| waves:\", execution_waves(weak))\n    print(\"a nonempty string such as 'tests exist' and a proof of 'echo done' both pass the validator, because it checks presence and not truth; evidence has to be resolved against the repository and a proof only counts after it is executed\")\n\n    section(\"6. Genuinely running: the plan as a JSON artifact\")\n    doc = {\"work_items\": [asdict(i) for i in plan], \"execution_waves\": execution_waves(plan)}\n    back = json.loads(json.dumps(doc))\n    print(\"round trip equal:\", back == doc, \"| items:\", len(back[\"work_items\"]), \"| waves:\", back[\"execution_waves\"])\n    print(\"the artifact records the plan and the computed order, not that any item was done or any proof passed, so a resumed session still needs a separate execution state\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: the lesson's four-item plan becomes three waves ---\nWave 1: W-001\nWave 2: W-002, W-003\nWave 3: W-004\nthe contract has no prerequisites, implementation and documentation both wait only for the contract, and integration waits for both; items in the same wave are logically ready together, which says nothing yet about whether they can safely run at the same time\n\n--- 2. Genuinely running: each structural defect is rejected with its own message ---\nduplicate id           rejected: Duplicate work item identifier\nblank evidence entry   rejected: A: missing evidence\nno evidence            rejected: A: missing evidence\nno proof               rejected: A: missing proof\nunknown dependency     rejected: A: unknown dependency W-999\nself dependency        rejected: A: depends on itself\nduplicate dependency   rejected: B: duplicate dependency\nempty plan             rejected: Plan cannot be empty\neach defect is caught before any edit, and the unknown dependency in particular would otherwise have made an executor wait for a prerequisite that can never finish\n\n--- 3. Genuinely running: a cycle is not an ordering problem, it is a missing decision ---\ncycle plan: Dependency cycle detected among: A, B, C\nafter extracting a shared decision D: [['D'], ['A'], ['B'], ['C']]\nno item in the cycle could ever start, so the scheduler stopped and named the stuck items instead of choosing a starting point; the repair was a new prerequisite, not deleting an edge\n\n--- 4. Genuinely measuring: what waves save, under ILLUSTRATIVE durations ---\nsequential total: 115 minutes | critical path: 85 minutes | saving: 30 minutes\nthe durations are invented for this lab; the saving appears only if implementation and documentation really can run in parallel with enough workers and no shared-file conflicts, and the integration step is still bound by the slower of the two\n\n--- 5. Genuinely checking: structural validation does not check the evidence is true ---\nplan with vague evidence and an echo proof: accepted | waves: [['W-001']]\na nonempty string such as 'tests exist' and a proof of 'echo done' both pass the validator, because it checks presence and not truth; evidence has to be resolved against the repository and a proof only counts after it is executed\n\n--- 6. Genuinely running: the plan as a JSON artifact ---\nround trip equal: True | items: 4 | waves: [['W-001'], ['W-002', 'W-003'], ['W-004']]\nthe artifact records the plan and the computed order, not that any item was done or any proof passed, so a resumed session still needs a separate execution state"
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
    "headingEn": "Experiment 1: The lesson's four-item plan becomes three waves",
    "headingKn": "ಪ್ರಯೋಗ 1: The lesson's four-item plan becomes three waves",
    "bodyEn": "What it ran: The lesson's four-item plan becomes three waves. What the lab concluded: the contract has no prerequisites, implementation and documentation both wait only for the contract, and integration waits for both; items in the same wave are logically ready together, which says nothing yet about whether they can safely run at the same time",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: The lesson's four-item plan becomes three waves. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the contract has no prerequisites, implementation and documentation both wait only for the contract, and integration waits for both; items in the same wave are logically ready together, which says nothing yet about whether they can safely run at the same time"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. Genuinely running: the lesson's four-item plan becomes three waves ---\nWave 1: W-001\nWave 2: W-002, W-003\nWave 3: W-004"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: Each structural defect is rejected with its own message",
    "headingKn": "ಪ್ರಯೋಗ 2: Each structural defect is rejected with its own message",
    "bodyEn": "What it ran: Each structural defect is rejected with its own message. What the lab concluded: each defect is caught before any edit, and the unknown dependency in particular would otherwise have made an executor wait for a prerequisite that can never finish",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Each structural defect is rejected with its own message. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): each defect is caught before any edit, and the unknown dependency in particular would otherwise have made an executor wait for a prerequisite that can never finish"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely running: each structural defect is rejected with its own message ---\nduplicate id           rejected: Duplicate work item identifier\nblank evidence entry   rejected: A: missing evidence\nno evidence            rejected: A: missing evidence\nno proof               rejected: A: missing proof\nunknown dependency     rejected: A: unknown dependency W-999\nself dependency        rejected: A: depends on itself\nduplicate dependency   rejected: B: duplicate dependency\nempty plan             rejected: Plan cannot be empty"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: A cycle is not an ordering problem, it is a missing decision",
    "headingKn": "ಪ್ರಯೋಗ 3: A cycle is not an ordering problem, it is a missing decision",
    "bodyEn": "What it ran: A cycle is not an ordering problem, it is a missing decision. What the lab concluded: no item in the cycle could ever start, so the scheduler stopped and named the stuck items instead of choosing a starting point; the repair was a new prerequisite, not deleting an edge",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A cycle is not an ordering problem, it is a missing decision. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): no item in the cycle could ever start, so the scheduler stopped and named the stuck items instead of choosing a starting point; the repair was a new prerequisite, not deleting an edge"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely running: a cycle is not an ordering problem, it is a missing decision ---\ncycle plan: Dependency cycle detected among: A, B, C\nafter extracting a shared decision D: [['D'], ['A'], ['B'], ['C']]"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 4: What waves save, under ILLUSTRATIVE durations",
    "headingKn": "ಪ್ರಯೋಗ 4: What waves save, under ILLUSTRATIVE durations",
    "bodyEn": "What it ran: What waves save, under ILLUSTRATIVE durations. What the lab concluded: the durations are invented for this lab; the saving appears only if implementation and documentation really can run in parallel with enough workers and no shared-file conflicts, and the integration step is still bound by the slower of the two",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: What waves save, under ILLUSTRATIVE durations. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the durations are invented for this lab; the saving appears only if implementation and documentation really can run in parallel with enough workers and no shared-file conflicts, and the integration step is still bound by the slower of the two"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 4. Genuinely measuring: what waves save, under ILLUSTRATIVE durations ---\nsequential total: 115 minutes | critical path: 85 minutes | saving: 30 minutes"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 5: Structural validation does not check the evidence is true",
    "headingKn": "ಪ್ರಯೋಗ 5: Structural validation does not check the evidence is true",
    "bodyEn": "What it ran: Structural validation does not check the evidence is true. What the lab concluded: a nonempty string such as 'tests exist' and a proof of 'echo done' both pass the validator, because it checks presence and not truth; evidence has to be resolved against the repository and a proof only counts after it is executed",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Structural validation does not check the evidence is true. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a nonempty string such as 'tests exist' and a proof of 'echo done' both pass the validator, because it checks presence and not truth; evidence has to be resolved against the repository and a proof only counts after it is executed"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 5. Genuinely checking: structural validation does not check the evidence is true ---\nplan with vague evidence and an echo proof: accepted | waves: [['W-001']]"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 6: The plan as a JSON artifact",
    "headingKn": "ಪ್ರಯೋಗ 6: The plan as a JSON artifact",
    "bodyEn": "What it ran: The plan as a JSON artifact. What the lab concluded: the artifact records the plan and the computed order, not that any item was done or any proof passed, so a resumed session still needs a separate execution state",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: The plan as a JSON artifact. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the artifact records the plan and the computed order, not that any item was done or any proof passed, so a resumed session still needs a separate execution state"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 6. Genuinely running: the plan as a JSON artifact ---\nround trip equal: True | items: 4 | waves: [['W-001'], ['W-002', 'W-003'], ['W-004']]"
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
    "headingEn": "Genuinely Found: Three Waves, Eight Rejections and One Cycle",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಮೂರು ಅಲೆಗಳು, ಎಂಟು ತಿರಸ್ಕಾರಗಳು ಮತ್ತು ಒಂದು ಚಕ್ರ",
    "bodyEn": "Section 1: the four-item plan scheduled as W-001, then W-002 and W-003, then W-004. Section 2: all eight defective plans were rejected, each with its own message. Section 3: A depends on C, B on A and C on B raised \"Dependency cycle detected among: A, B, C\"; extracting a new decision D that all three depend on gave four waves D, A, B, C.",
    "bodyKn": "ವಿಭಾಗ 1: ನಾಲ್ಕು-ಘಟಕ ಯೋಜನೆ W-001, ನಂತರ W-002 ಮತ್ತು W-003, ನಂತರ W-004 ಎಂದು ವೇಳಾಪಟ್ಟಿಯಾಯಿತು. ವಿಭಾಗ 2: ಎಲ್ಲಾ ಎಂಟು ದೋಷಯುಕ್ತ ಯೋಜನೆಗಳು ತಮ್ಮದೇ ಸಂದೇಶದೊಂದಿಗೆ ತಿರಸ್ಕೃತವಾದವು. ವಿಭಾಗ 3: A ಯು C ಅನ್ನು, B ಯು A ಅನ್ನು ಮತ್ತು C ಯು B ಅನ್ನು ಅವಲಂಬಿಸಿದಾಗ \"Dependency cycle detected among: A, B, C\" ಎತ್ತಿತು; ಮೂರೂ ಅವಲಂಬಿಸುವ ಹೊಸ ನಿರ್ಧಾರ D ಹೊರತೆಗೆದದ್ದು ನಾಲ್ಕು ಅಲೆ D, A, B, C ನೀಡಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Waves Save Time Only Under Assumptions, and Valid Is Not True",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಅಲೆಗಳು ಊಹೆಗಳಲ್ಲಿ ಮಾತ್ರ ಸಮಯ ಉಳಿಸುತ್ತವೆ, ಮತ್ತು ಮಾನ್ಯ ಎಂದರೆ ಸತ್ಯ ಅಲ್ಲ",
    "bodyEn": "Section 4 (invented durations 20, 50, 30 and 15 minutes): the sequential total was 115 minutes and the critical path 85, a saving of 30. Section 5: a plan whose evidence was \"tests exist\" and whose proof was \"echo done\" passed validation. Section 6: the plan survived a JSON round trip with its four items and three waves.",
    "bodyKn": "ವಿಭಾಗ 4 (ಕಲ್ಪಿತ ಅವಧಿಗಳು 20, 50, 30 ಮತ್ತು 15 ನಿಮಿಷ): ಅನುಕ್ರಮ ಒಟ್ಟು 115 ನಿಮಿಷ ಮತ್ತು critical path 85, 30 ಉಳಿತಾಯ. ವಿಭಾಗ 5: ಸಾಕ್ಷ್ಯ \"tests exist\" ಮತ್ತು ಪುರಾವೆ \"echo done\" ಇದ್ದ ಯೋಜನೆ ಮಾನ್ಯೀಕರಣ ಪಾಸ್ ಮಾಡಿತು. ವಿಭಾಗ 6: ಯೋಜನೆ ತನ್ನ ನಾಲ್ಕು ಘಟಕ ಮತ್ತು ಮೂರು ಅಲೆಗಳೊಂದಿಗೆ JSON round trip ಉಳಿಯಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A graph with validated edges tells an executor what truly has to finish first, and exposes a cycle as a decision nobody has made yet.",
    "bodyKn": "ಮಾನ್ಯಗೊಂಡ ಅಂಚುಗಳ ಗ್ರಾಫ್ ನಿಜವಾಗಿ ಮೊದಲು ಏನು ಮುಗಿಯಬೇಕು ಎಂದು ಕಾರ್ಯಗತಕಾರಕನಿಗೆ ಹೇಳುತ್ತದೆ, ಮತ್ತು ಚಕ್ರವನ್ನು ಯಾರೂ ಇನ್ನೂ ಮಾಡದ ನಿರ್ಧಾರ ಎಂದು ತೋರಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"the plan validated, so its evidence is real.\" \"tests exist\" and \"echo done\" validated.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಯೋಜನೆ ಮಾನ್ಯವಾಯಿತು, ಆದ್ದರಿಂದ ಅದರ ಸಾಕ್ಷ್ಯ ನಿಜ.\" \"tests exist\" ಮತ್ತು \"echo done\" ಮಾನ್ಯವಾದವು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Work item: id, change, evidence, dependencies and proof. Wave: items whose dependencies are all scheduled. Cycle: items that each wait on another. Critical path: the longest chain of dependent durations. Planned proof: a proof named in the plan, not yet run.",
    "bodyKn": "Work item: id, ಬದಲಾವಣೆ, ಸಾಕ್ಷ್ಯ, ಅವಲಂಬನೆಗಳು ಮತ್ತು ಪುರಾವೆ. Wave: ಅವಲಂಬನೆಗಳೆಲ್ಲ ವೇಳಾಪಟ್ಟಿಯಾದ ಘಟಕಗಳು. Cycle: ಪ್ರತಿಯೊಂದೂ ಇನ್ನೊಂದಕ್ಕೆ ಕಾಯುವ ಘಟಕಗಳು. Critical path: ಅವಲಂಬಿತ ಅವಧಿಗಳ ಅತಿ ಉದ್ದದ ಸರಪಳಿ. Planned proof: ಯೋಜನೆಯಲ್ಲಿ ಹೆಸರಿಸಿದ, ಇನ್ನೂ ಓಡಿಸದ ಪುರಾವೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) The plan scheduled into three waves. 2) Eight defects each got their own rejection. 3) A cycle was repaired with a new shared decision. 4) Under invented durations waves saved 30 of 115 minutes. 5) Vague evidence and an echo proof still validated.",
    "bodyKn": "1) ಯೋಜನೆ ಮೂರು ಅಲೆಗಳಾಗಿ ವೇಳಾಪಟ್ಟಿಯಾಯಿತು. 2) ಎಂಟು ದೋಷಗಳಲ್ಲಿ ಪ್ರತಿಯೊಂದೂ ತನ್ನದೇ ತಿರಸ್ಕಾರ ಪಡೆಯಿತು. 3) ಚಕ್ರವನ್ನು ಹೊಸ ಹಂಚಿಕೆಯ ನಿರ್ಧಾರದಿಂದ ದುರಸ್ತಿ ಮಾಡಲಾಯಿತು. 4) ಕಲ್ಪಿತ ಅವಧಿಗಳಲ್ಲಿ ಅಲೆಗಳು 115 ರಲ್ಲಿ 30 ನಿಮಿಷ ಉಳಿಸಿದವು. 5) ಅಸ್ಪಷ್ಟ ಸಾಕ್ಷ್ಯ ಮತ್ತು echo ಪುರಾವೆ ಇನ್ನೂ ಮಾನ್ಯವಾದವು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "How many waves did the four-item lesson plan produce?",
      "qKn": "ನಾಲ್ಕು-ಘಟಕ lesson ಯೋಜನೆ ಎಷ್ಟು ಅಲೆ ಉತ್ಪಾದಿಸಿತು?",
      "opts": [
       "3",
       "2",
       "4",
       "1"
      ],
      "optsKn": [
       "3",
       "2",
       "4",
       "1"
      ],
      "correct": 0
     },
     {
      "q": "What did the scheduler report for the A, B, C cycle?",
      "qKn": "A, B, C ಚಕ್ರಕ್ಕೆ ವೇಳಾಪಟ್ಟಿಕಾರ ಏನು ವರದಿ ಮಾಡಿತು?",
      "opts": [
       "Dependency cycle detected among A, B, C",
       "Wave 1: A",
       "Unknown dependency",
       "Nothing"
      ],
      "optsKn": [
       "A, B, C ನಡುವೆ ಅವಲಂಬನೆ ಚಕ್ರ ಪತ್ತೆ",
       "ಅಲೆ 1: A",
       "ಅಜ್ಞಾತ ಅವಲಂಬನೆ",
       "ಏನೂ ಇಲ್ಲ"
      ],
      "correct": 0
     },
     {
      "q": "How many minutes did waves save under the invented durations?",
      "qKn": "ಕಲ್ಪಿತ ಅವಧಿಗಳಲ್ಲಿ ಅಲೆಗಳು ಎಷ್ಟು ನಿಮಿಷ ಉಳಿಸಿದವು?",
      "opts": [
       "30",
       "115",
       "85",
       "0"
      ],
      "optsKn": [
       "30",
       "115",
       "85",
       "0"
      ],
      "correct": 0
     },
     {
      "q": "Did a plan with evidence \"tests exist\" and proof \"echo done\" pass validation?",
      "qKn": "ಸಾಕ್ಷ್ಯ \"tests exist\" ಮತ್ತು ಪುರಾವೆ \"echo done\" ಇದ್ದ ಯೋಜನೆ ಮಾನ್ಯೀಕರಣ ಪಾಸ್ ಮಾಡಿತೇ?",
      "opts": [
       "Yes",
       "No",
       "Only with a cycle",
       "Only in waves"
      ],
      "optsKn": [
       "ಹೌದು",
       "ಇಲ್ಲ",
       "ಚಕ್ರ ಇದ್ದರೆ ಮಾತ್ರ",
       "ಅಲೆಗಳಲ್ಲಿ ಮಾತ್ರ"
      ],
      "correct": 0
     },
     {
      "q": "What repaired the cycle?",
      "qKn": "ಚಕ್ರವನ್ನು ಯಾವುದು ದುರಸ್ತಿ ಮಾಡಿತು?",
      "opts": [
       "A new shared prerequisite decision",
       "Deleting one edge",
       "Sorting the ids",
       "Ignoring A"
      ],
      "optsKn": [
       "ಹೊಸ ಹಂಚಿಕೆಯ ಪೂರ್ವಾಪೇಕ್ಷಿತ ನಿರ್ಧಾರ",
       "ಒಂದು ಅಂಚು ಅಳಿಸುವುದು",
       "ids ವಿಂಗಡಿಸುವುದು",
       "A ನಿರ್ಲಕ್ಷಿಸುವುದು"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
