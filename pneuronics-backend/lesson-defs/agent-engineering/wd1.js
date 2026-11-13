module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6af7575bba08392fb3c36f91",
 "order": 0,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Discover the Workflow People Actually Perform (Part 1 of 3) — Evidence-Backed Steps",
 "titleKn": "ಜನರು ನಿಜವಾಗಿ ನಿರ್ವಹಿಸುವ ಕಾರ್ಯಪ್ರವಾಹ ಕಂಡುಹಿಡಿಯಿರಿ (ಭಾಗ 1 / 3) — ಸಾಕ್ಷ್ಯ-ಆಧಾರಿತ ಹಂತಗಳು",
 "desc": "Model the observed workflow as steps with their own evidence, measure how much was directly seen and find hidden state.",
 "descKn": "ವೀಕ್ಷಿತ ಕಾರ್ಯಪ್ರವಾಹವನ್ನು ತಮ್ಮದೇ ಸಾಕ್ಷ್ಯ ಇರುವ ಹಂತಗಳಾಗಿ ಮಾದರಿ ಮಾಡಿ, ಎಷ್ಟು ನೇರವಾಗಿ ಕಂಡಿತು ಅಳೆದು ಗುಪ್ತ ಸ್ಥಿತಿ ಹುಡುಕಿ.",
 "objectives": [
  "Model steps with actors and handoffs.",
  "Attach evidence per step.",
  "Compute the direct ratio.",
  "Find hidden inputs.",
  "Reject steps without evidence."
 ],
 "objectivesKn": [
  "ನಟರು ಮತ್ತು ಹಸ್ತಾಂತರಗಳೊಂದಿಗೆ ಹಂತ ಮಾದರಿ ಮಾಡಿ.",
  "ಪ್ರತಿ ಹಂತಕ್ಕೆ ಸಾಕ್ಷ್ಯ ಜೋಡಿಸಿ.",
  "ನೇರ ಅನುಪಾತ ಲೆಕ್ಕ ಹಾಕಿ.",
  "ಗುಪ್ತ ಒಳಹರಿವು ಹುಡುಕಿ.",
  "ಸಾಕ್ಷ್ಯವಿಲ್ಲದ ಹಂತ ತಿರಸ್ಕರಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Discover the Workflow People Actually Perform (Part 1 of 3)",
    "textKn": "ಜನರು ನಿಜವಾಗಿ ನಿರ್ವಹಿಸುವ ಕಾರ್ಯಪ್ರವಾಹ ಕಂಡುಹಿಡಿಯಿರಿ (ಭಾಗ 1 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 1 of 3: a step model with per-step evidence, the documented versus observed workflow, the direct-evidence ratio, hidden inputs no step produces, handoffs and authority. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind discovering the workflow people actually perform (evidence-backed steps, hidden state, handoffs, exception branches and disagreement), not the real software, and the workflow, interviews and records are made up by the lab and no language model is involved, so no real LLM behaviour is measured. The original code/main.py was not supplied, and the lesson text says its Python examples are reference implementations, so the labs are our own implementation of the behaviour described. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 1ನೆಯದು: ಪ್ರತಿ ಹಂತಕ್ಕೆ ಸಾಕ್ಷ್ಯ ಇರುವ ಹಂತ ಮಾದರಿ, ದಾಖಲಿತ ಮತ್ತು ವೀಕ್ಷಿತ ಕಾರ್ಯಪ್ರವಾಹ, ನೇರ-ಸಾಕ್ಷ್ಯ ಅನುಪಾತ, ಯಾವ ಹಂತವೂ ಉತ್ಪಾದಿಸದ ಗುಪ್ತ ಒಳಹರಿವುಗಳು, ಹಸ್ತಾಂತರಗಳು ಮತ್ತು ಅಧಿಕಾರ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು ಜನರು ನಿಜವಾಗಿ ನಿರ್ವಹಿಸುವ ಕಾರ್ಯಪ್ರವಾಹ ಕಂಡುಹಿಡಿಯುವುದು (ಸಾಕ್ಷ್ಯ-ಆಧಾರಿತ ಹಂತಗಳು, ಗುಪ್ತ ಸ್ಥಿತಿ, ಹಸ್ತಾಂತರಗಳು, ವಿನಾಯಿತಿ ಶಾಖೆಗಳು ಮತ್ತು ಭಿನ್ನಾಭಿಪ್ರಾಯ) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಕಾರ್ಯಪ್ರವಾಹ, ಸಂದರ್ಶನಗಳು ಮತ್ತು ದಾಖಲೆಗಳನ್ನು ಲ್ಯಾಬ್ ಕಲ್ಪಿಸಿದ್ದು ಮತ್ತು ಭಾಷಾ ಮಾದರಿ ಇಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ code/main.py ಒದಗಿಸಿರಲಿಲ್ಲ, ಮತ್ತು lesson ಪಠ್ಯ ತನ್ನ Python ಉದಾಹರಣೆಗಳು ಉಲ್ಲೇಖ ಅನುಷ್ಠಾನಗಳು ಎಂದು ಹೇಳುತ್ತದೆ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ವಿವರಿಸಿದ ವರ್ತನೆಯ ನಮ್ಮದೇ ಅನುಷ್ಠಾನ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Requirements Live in Actions, Not in the Meeting",
    "textKn": "ಅಗತ್ಯಗಳು ಸಭೆಯಲ್ಲಿ ಅಲ್ಲ, ಕ್ರಿಯೆಗಳಲ್ಲಿ ಇರುತ್ತವೆ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Model the Steps and Say How You Know",
    "headingKn": "ಹಂತಗಳನ್ನು ಮಾದರಿ ಮಾಡಿ ಮತ್ತು ಹೇಗೆ ತಿಳಿದಿರಿ ಎಂದು ಹೇಳಿ",
    "bodyEn": "A stakeholder describes the idealised process, a runbook describes the documented one and the work people do is a third thing. This part models the observed workflow as steps that each carry an actor, inputs, outputs, friction, a handoff, an authority requirement and their own evidence from one of four categories: direct, document, reported or assumed. It then measures how much of the workflow was directly seen and looks for inputs that nothing in the workflow produces.",
    "bodyKn": "ಪಾಲುದಾರ ಆದರ್ಶ ಪ್ರಕ್ರಿಯೆ ವಿವರಿಸುತ್ತಾರೆ, runbook ದಾಖಲಿತವನ್ನು ವಿವರಿಸುತ್ತದೆ ಮತ್ತು ಜನರು ಮಾಡುವ ಕೆಲಸ ಮೂರನೆಯದು. ಈ ಭಾಗ ವೀಕ್ಷಿತ ಕಾರ್ಯಪ್ರವಾಹವನ್ನು ಪ್ರತಿ ಹಂತ ನಟ, ಒಳಹರಿವು, ಹೊರಹರಿವು, ಘರ್ಷಣೆ, ಹಸ್ತಾಂತರ, ಅಧಿಕಾರ ಅಗತ್ಯ ಮತ್ತು ನಾಲ್ಕು ವರ್ಗಗಳಲ್ಲಿ ಒಂದರ ತನ್ನದೇ ಸಾಕ್ಷ್ಯ (direct, document, reported ಅಥವಾ assumed) ಹೊತ್ತಿರುವ ಹಂತಗಳಾಗಿ ಮಾದರಿ ಮಾಡುತ್ತದೆ. ನಂತರ ಕಾರ್ಯಪ್ರವಾಹದ ಎಷ್ಟು ಭಾಗ ನೇರವಾಗಿ ಕಂಡಿತು ಎಂದು ಅಳೆದು, ಕಾರ್ಯಪ್ರವಾಹದಲ್ಲಿ ಯಾವುದೂ ಉತ್ಪಾದಿಸದ ಒಳಹರಿವುಗಳನ್ನು ಹುಡುಕುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Documented Versus Observed",
    "headingKn": "ದಾಖಲಿತ ವಿರುದ್ಧ ವೀಕ್ಷಿತ",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">what people do differs from what is written</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">documented</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">6 steps</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">observed</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">7 steps</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">evidence</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">per step</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">hidden state</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">no producer</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">what people do differs from what is written</text></svg>",
    "captionEn": "The observed workflow has steps the procedure never mentions.",
    "captionKn": "ವೀಕ್ಷಿತ ಕಾರ್ಯಪ್ರವಾಹದಲ್ಲಿ ಕಾರ್ಯವಿಧಾನ ಎಂದೂ ಉಲ್ಲೇಖಿಸದ ಹಂತಗಳಿವೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Evidence categories",
    "headingKn": "ಸಾಕ್ಷ್ಯ ವರ್ಗಗಳು",
    "headers": [
     "Category",
     "Meaning",
     "Lab example"
    ],
    "rows": [
     [
      "direct",
      "someone watched it happen",
      "screen recording"
     ],
     [
      "document",
      "a record exists",
      "deploy log export"
     ],
     [
      "reported",
      "someone said so",
      "interview with an engineer"
     ],
     [
      "assumed",
      "inferred",
      "copied from the official procedure"
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
    "filename": "wd_1.py",
    "headingEn": "Step, validation and hidden inputs",
    "headingKn": "ಹಂತ, ಮಾನ್ಯೀಕರಣ ಮತ್ತು ಗುಪ್ತ ಒಳಹರಿವುಗಳು",
    "descEn": "Evidence and Step are frozen dataclasses, validate_step requires a positive id, an actor, an action and evidence from a known category, and hidden_inputs walks the steps and reports any input no earlier step produced.",
    "descKn": "Evidence ಮತ್ತು Step ಹೆಪ್ಪುಗಟ್ಟಿದ dataclasses, validate_step ಧನಾತ್ಮಕ id, ನಟ, ಕ್ರಿಯೆ ಮತ್ತು ತಿಳಿದ ವರ್ಗದ ಸಾಕ್ಷ್ಯ ಬಯಸುತ್ತದೆ, ಮತ್ತು hidden_inputs ಹಂತಗಳ ಮೇಲೆ ನಡೆದು ಯಾವ ಹಿಂದಿನ ಹಂತವೂ ಉತ್ಪಾದಿಸದ ಒಳಹರಿವನ್ನು ವರದಿ ಮಾಡುತ್ತದೆ.",
    "code": "@dataclass(frozen=True)\nclass Evidence:\n    category: str\n    source: str\n\n\n@dataclass(frozen=True)\nclass Step:\n    step_id: int\n    actor: str\n    action: str\n    inputs: tuple = ()\n    outputs: tuple = ()\n    friction: str = \"\"\n    handoff_to: str = \"\"\n    needs_authority: str = \"\"\n    evidence: tuple = field(default_factory=tuple)\n\n\ndef validate_step(s):\n    if s.step_id < 1:\n        raise ValueError(\"Step ID must be positive\")\n    if not s.actor.strip() or not s.action.strip():\n        raise ValueError(\"Actor and action are required\")\n    if not s.evidence:\n        raise ValueError(f\"Step {s.step_id} has no evidence\")\n    for e in s.evidence:\n        if e.category not in CATEGORIES:\n            raise ValueError(f\"Step {s.step_id} has unknown evidence category: {e.category}\")\n    return s\n\n\ndef hidden_inputs(steps, available=()):\n    produced, hidden = set(available), []\n    for s in steps:\n        for i in s.inputs:\n            if i not in produced:\n                hidden.append((s.step_id, i))\n        produced.update(s.outputs)\n    return hidden"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "wd_1.py",
    "headingEn": "main(): five experiments",
    "headingKn": "main(): ಐದು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() prints documented against observed steps, computes the direct-evidence ratio, finds hidden inputs, lists handoffs and authority boundaries and rejects three bad steps.",
    "descKn": "main() ದಾಖಲಿತ ಮತ್ತು ವೀಕ್ಷಿತ ಹಂತಗಳನ್ನು ಮುದ್ರಿಸಿ, ನೇರ-ಸಾಕ್ಷ್ಯ ಅನುಪಾತ ಲೆಕ್ಕ ಹಾಕಿ, ಗುಪ್ತ ಒಳಹರಿವು ಹುಡುಕಿ, ಹಸ್ತಾಂತರ ಮತ್ತು ಅಧಿಕಾರ ಗಡಿ ಪಟ್ಟಿ ಮಾಡಿ ಮತ್ತು ಮೂರು ಕೆಟ್ಟ ಹಂತ ತಿರಸ್ಕರಿಸುತ್ತದೆ.",
    "code": "def main():\n    section(\"1. Genuinely running: the documented workflow versus the observed one\")\n    print(\"documented steps:\", len(DOCUMENTED), \"->\", DOCUMENTED)\n    print(\"observed steps  :\", len(OBSERVED))\n    for s in OBSERVED:\n        validate_step(s)\n        print(f\"  {s.step_id}. {s.action:55} evidence={[e.category for e in s.evidence]}\")\n    print(\"the official procedure has six lines and the observed workflow has seven recorded steps, among them a manual search, a question to a colleague, a copy into chat and a wait for authorization that the procedure never mentions; the lab's steps and sources are invented\")\n\n    section(\"2. Genuinely measuring: how much of the workflow is directly evidenced\")\n    counts = {c: sum(1 for s in OBSERVED for e in s.evidence if e.category == c) for c in CATEGORIES}\n    total = sum(counts.values())\n    print(\"evidence by category:\", counts)\n    print(f\"direct-evidence ratio: {counts['direct']}/{total} = {counts['direct'] / total:.2f}\")\n    print(\"steps resting only on reported or assumed evidence:\", [s.step_id for s in OBSERVED if all(e.category in ('reported', 'assumed') for e in s.evidence)])\n    print(\"three of seven pieces of evidence were direct observation, and steps 4, 6 and 7 rest only on what someone said or on inference; those are the steps to confirm before anything is built on them\")\n\n    section(\"3. Genuinely running: hidden state that no step produces\")\n    print(\"inputs with no producer:\", hidden_inputs(OBSERVED))\n    print(\"with approval token supplied by a person:\", hidden_inputs(OBSERVED, available=(\"approval token\",)))\n    print(\"the workflow consumes an approval token that none of the recorded steps creates, which is the shape of hidden state: somebody holds it outside the system, and an automation that starts from step 6 would have nothing to hand over\")\n\n    section(\"4. Genuinely running: handoffs and authority\")\n    print(\"handoffs:\", [(s.step_id, s.handoff_to) for s in OBSERVED if s.handoff_to])\n    print(\"authority boundaries:\", [(s.step_id, s.needs_authority) for s in OBSERVED if s.needs_authority])\n    print(\"friction notes:\", len([s for s in OBSERVED if s.friction]), \"of\", len(OBSERVED), \"steps\")\n    print(\"three handoffs and one authority boundary appear only in the observed list; a workflow summary that leaves them out will describe a process that can be automated end to end when it cannot\")\n\n    section(\"5. Genuinely running: a step without evidence is refused\")\n    for label, s in ((\"no evidence\", Step(8, \"engineer\", \"close the incident\")), (\"bad category\", Step(9, \"engineer\", \"x\", evidence=(Evidence(\"hunch\", \"me\"),))), (\"zero id\", Step(0, \"engineer\", \"x\", evidence=(Evidence(\"direct\", \"a\"),)))):\n        try:\n            validate_step(s)\n            print(f\"{label:14} accepted\")\n        except ValueError as e:\n            print(f\"{label:14} rejected: {e}\")\n    print(\"each step has to carry its own evidence from a known category, so an assumed step is visible as assumed instead of being mixed into a clean list\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: the documented workflow versus the observed one ---\ndocumented steps: 6 -> ['Receive the alert', 'Identify the affected service', 'Assign an engineer', 'Investigate the failure', 'Apply the correction', 'Close the incident']\nobserved steps  : 7\n  1. open the alert                                          evidence=['direct']\n  2. search the monitoring dashboard                         evidence=['direct']\n  3. check recent deployments                                evidence=['document']\n  4. ask a colleague which team owns the service             evidence=['reported']\n  5. paste the deployment id into the incident channel       evidence=['direct']\n  6. wait for authorization                                  evidence=['reported']\n  7. apply the correction                                    evidence=['assumed']\nthe official procedure has six lines and the observed workflow has seven recorded steps, among them a manual search, a question to a colleague, a copy into chat and a wait for authorization that the procedure never mentions; the lab's steps and sources are invented\n\n--- 2. Genuinely measuring: how much of the workflow is directly evidenced ---\nevidence by category: {'direct': 3, 'document': 1, 'reported': 2, 'assumed': 1}\ndirect-evidence ratio: 3/7 = 0.43\nsteps resting only on reported or assumed evidence: [4, 6, 7]\nthree of seven pieces of evidence were direct observation, and steps 4, 6 and 7 rest only on what someone said or on inference; those are the steps to confirm before anything is built on them\n\n--- 3. Genuinely running: hidden state that no step produces ---\ninputs with no producer: [(6, 'approval token')]\nwith approval token supplied by a person: []\nthe workflow consumes an approval token that none of the recorded steps creates, which is the shape of hidden state: somebody holds it outside the system, and an automation that starts from step 6 would have nothing to hand over\n\n--- 4. Genuinely running: handoffs and authority ---\nhandoffs: [(4, 'colleague'), (5, 'incident channel'), (6, 'incident commander')]\nauthority boundaries: [(6, 'incident commander')]\nfriction notes: 5 of 7 steps\nthree handoffs and one authority boundary appear only in the observed list; a workflow summary that leaves them out will describe a process that can be automated end to end when it cannot\n\n--- 5. Genuinely running: a step without evidence is refused ---\nno evidence    rejected: Step 8 has no evidence\nbad category   rejected: Step 9 has unknown evidence category: hunch\nzero id        rejected: Step ID must be positive\neach step has to carry its own evidence from a known category, so an assumed step is visible as assumed instead of being mixed into a clean list"
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
    "headingEn": "Genuinely Found: Six Documented Lines, Seven Observed Steps, Three Directly Seen",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಆರು ದಾಖಲಿತ ಸಾಲುಗಳು, ಏಳು ವೀಕ್ಷಿತ ಹಂತಗಳು, ಮೂರು ನೇರವಾಗಿ ಕಂಡವು",
    "bodyEn": "Section 1: the official procedure had 6 lines and the observed workflow 7 steps, including a dashboard search, asking a colleague, pasting a deployment id into chat and waiting for authorization. Section 2: the evidence counted 3 direct, 1 document, 2 reported and 1 assumed, a direct ratio of 3/7 = 0.43, and steps 4, 6 and 7 rested only on reported or assumed evidence.",
    "bodyKn": "ವಿಭಾಗ 1: ಅಧಿಕೃತ ಕಾರ್ಯವಿಧಾನದಲ್ಲಿ 6 ಸಾಲು ಮತ್ತು ವೀಕ್ಷಿತ ಕಾರ್ಯಪ್ರವಾಹದಲ್ಲಿ 7 ಹಂತ ಇದ್ದವು, dashboard ಹುಡುಕಾಟ, ಸಹೋದ್ಯೋಗಿಯನ್ನು ಕೇಳುವುದು, deployment id ಅನ್ನು chat ಗೆ ಅಂಟಿಸುವುದು ಮತ್ತು ಅಧಿಕಾರಕ್ಕಾಗಿ ಕಾಯುವುದು ಸೇರಿ. ವಿಭಾಗ 2: ಸಾಕ್ಷ್ಯ 3 direct, 1 document, 2 reported ಮತ್ತು 1 assumed ಎಂದು ಎಣಿಕೆಯಾಯಿತು, ನೇರ ಅನುಪಾತ 3/7 = 0.43, ಮತ್ತು ಹಂತ 4, 6 ಮತ್ತು 7 reported ಅಥವಾ assumed ಸಾಕ್ಷ್ಯದ ಮೇಲೆ ಮಾತ್ರ ನಿಂತಿದ್ದವು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Hidden State, Handoffs and Steps Without Evidence",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಗುಪ್ತ ಸ್ಥಿತಿ, ಹಸ್ತಾಂತರಗಳು ಮತ್ತು ಸಾಕ್ಷ್ಯವಿಲ್ಲದ ಹಂತಗಳು",
    "bodyEn": "Section 3: step 6 consumed an approval token that no step produced, and the list was empty once a person was assumed to supply it. Section 4: three handoffs (colleague, incident channel, incident commander), one authority boundary at step 6 and friction notes on 5 of 7 steps. Section 5: a step with no evidence, an unknown category \"hunch\" and a zero id were each rejected.",
    "bodyKn": "ವಿಭಾಗ 3: ಹಂತ 6 ಯಾವ ಹಂತವೂ ಉತ್ಪಾದಿಸದ approval token ಬಳಸಿತು, ಮತ್ತು ವ್ಯಕ್ತಿ ಅದನ್ನು ಒದಗಿಸುತ್ತಾರೆ ಎಂದು ಭಾವಿಸಿದಾಗ ಪಟ್ಟಿ ಖಾಲಿಯಾಯಿತು. ವಿಭಾಗ 4: ಮೂರು ಹಸ್ತಾಂತರ (ಸಹೋದ್ಯೋಗಿ, incident channel, incident commander), ಹಂತ 6 ರಲ್ಲಿ ಒಂದು ಅಧಿಕಾರ ಗಡಿ ಮತ್ತು 7 ರಲ್ಲಿ 5 ಹಂತಗಳಿಗೆ ಘರ್ಷಣೆ ಟಿಪ್ಪಣಿ. ವಿಭಾಗ 5: ಸಾಕ್ಷ್ಯವಿಲ್ಲದ ಹಂತ, ಅಜ್ಞಾತ ವರ್ಗ \"hunch\" ಮತ್ತು ಶೂನ್ಯ id ಪ್ರತಿಯೊಂದೂ ತಿರಸ್ಕೃತವಾದವು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A workflow built from the procedure instead of the observation leaves out the handoffs and approvals that make automation unsafe.",
    "bodyKn": "ಕಾರ್ಯವಿಧಾನದಿಂದ ಕಟ್ಟಿದ, ವೀಕ್ಷಣೆಯಿಂದ ಅಲ್ಲದ ಕಾರ್ಯಪ್ರವಾಹ ಸ್ವಯಂಚಾಲನೆ ಅಸುರಕ್ಷಿತಗೊಳಿಸುವ ಹಸ್ತಾಂತರ ಮತ್ತು ಅನುಮೋದನೆಗಳನ್ನು ಬಿಟ್ಟುಬಿಡುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"the runbook is the workflow.\" Seven observed steps were against six documented lines.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"runbook ಕಾರ್ಯಪ್ರವಾಹ.\" ಆರು ದಾಖಲಿತ ಸಾಲುಗಳ ವಿರುದ್ಧ ಏಳು ವೀಕ್ಷಿತ ಹಂತಗಳಿದ್ದವು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Direct evidence: observed or recorded behaviour. Reported: said by someone. Hidden state: an input no step produces. Handoff: work passes to another actor. Authority boundary: a step needing someone's permission.",
    "bodyKn": "Direct evidence: ವೀಕ್ಷಿಸಿದ ಅಥವಾ ದಾಖಲಿಸಿದ ವರ್ತನೆ. Reported: ಯಾರೋ ಹೇಳಿದ್ದು. Hidden state: ಯಾವ ಹಂತವೂ ಉತ್ಪಾದಿಸದ ಒಳಹರಿವು. Handoff: ಕೆಲಸ ಇನ್ನೊಬ್ಬ ನಟನಿಗೆ ಹೋಗುವುದು. Authority boundary: ಯಾರದೋ ಅನುಮತಿ ಬೇಕಾದ ಹಂತ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) Seven observed steps against six documented. 2) Direct ratio 3/7. 3) An approval token had no producer. 4) Three handoffs and one authority boundary. 5) Steps without evidence were rejected.",
    "bodyKn": "1) ಆರು ದಾಖಲಿತದ ವಿರುದ್ಧ ಏಳು ವೀಕ್ಷಿತ ಹಂತ. 2) ನೇರ ಅನುಪಾತ 3/7. 3) approval token ಗೆ ಉತ್ಪಾದಕ ಇರಲಿಲ್ಲ. 4) ಮೂರು ಹಸ್ತಾಂತರ ಮತ್ತು ಒಂದು ಅಧಿಕಾರ ಗಡಿ. 5) ಸಾಕ್ಷ್ಯವಿಲ್ಲದ ಹಂತಗಳು ತಿರಸ್ಕೃತವಾದವು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What was the direct-evidence ratio?",
      "qKn": "ನೇರ-ಸಾಕ್ಷ್ಯ ಅನುಪಾತ ಎಷ್ಟು?",
      "opts": [
       "3/7",
       "1/2",
       "7/7",
       "0"
      ],
      "optsKn": [
       "3/7",
       "1/2",
       "7/7",
       "0"
      ],
      "correct": 0
     },
     {
      "q": "Which input had no producer?",
      "qKn": "ಯಾವ ಒಳಹರಿವಿಗೆ ಉತ್ಪಾದಕ ಇರಲಿಲ್ಲ?",
      "opts": [
       "approval token",
       "alert",
       "deployment id",
       "owner"
      ],
      "optsKn": [
       "approval token",
       "alert",
       "deployment id",
       "owner"
      ],
      "correct": 0
     },
     {
      "q": "Which steps rested only on reported or assumed evidence?",
      "qKn": "ಯಾವ ಹಂತಗಳು reported ಅಥವಾ assumed ಸಾಕ್ಷ್ಯದ ಮೇಲೆ ಮಾತ್ರ ನಿಂತಿದ್ದವು?",
      "opts": [
       "4, 6 and 7",
       "1 and 2",
       "None",
       "All of them"
      ],
      "optsKn": [
       "4, 6 ಮತ್ತು 7",
       "1 ಮತ್ತು 2",
       "ಯಾವುದೂ ಇಲ್ಲ",
       "ಎಲ್ಲವೂ"
      ],
      "correct": 0
     },
     {
      "q": "How many handoffs were listed?",
      "qKn": "ಎಷ್ಟು ಹಸ್ತಾಂತರ ಪಟ್ಟಿಯಾದವು?",
      "opts": [
       "3",
       "1",
       "7",
       "0"
      ],
      "optsKn": [
       "3",
       "1",
       "7",
       "0"
      ],
      "correct": 0
     },
     {
      "q": "Why was step 8 with no evidence rejected?",
      "qKn": "ಸಾಕ್ಷ್ಯವಿಲ್ಲದ ಹಂತ 8 ಏಕೆ ತಿರಸ್ಕೃತವಾಯಿತು?",
      "opts": [
       "Each step must carry its own evidence",
       "It was too slow",
       "It had a handoff",
       "It was signed"
      ],
      "optsKn": [
       "ಪ್ರತಿ ಹಂತ ತನ್ನದೇ ಸಾಕ್ಷ್ಯ ಹೊರಬೇಕು",
       "ಅದು ತುಂಬಾ ನಿಧಾನ",
       "ಅದಕ್ಕೆ ಹಸ್ತಾಂತರ ಇತ್ತು",
       "ಅದಕ್ಕೆ ಸಹಿ ಇತ್ತು"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
