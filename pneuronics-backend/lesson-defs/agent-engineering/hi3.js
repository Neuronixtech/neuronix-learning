module.exports = {
 "phaseId": "6a369d6466020ed05b3215d1",
 "moduleId": "6a369d6566020ed05b3215e6",
 "order": 2,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Hierarchical Architecture and Its Failure Mode (Part 3 of 3) — Choosing and Gating a Hierarchy",
 "titleKn": "ಶ್ರೇಣಿ ವಾಸ್ತುಶಿಲ್ಪ ಮತ್ತು ಅದರ ವೈಫಲ್ಯ ವಿಧಾನ (ಭಾಗ 3 / 3) — ಶ್ರೇಣಿ ಆರಿಸುವುದು ಮತ್ತು ದ್ವಾರ ಇಡುವುದು",
 "desc": "Choose a pattern from the structure of a task and run a hierarchy behind capability, plan and evidence gates.",
 "descKn": "ಕೆಲಸದ ರಚನೆಯಿಂದ ಮಾದರಿ ಆರಿಸಿ ಮತ್ತು ಸಾಮರ್ಥ್ಯ, ಯೋಜನೆ ಹಾಗೂ ಸಾಕ್ಷಿ ದ್ವಾರಗಳ ಹಿಂದೆ ಶ್ರೇಣಿ ಓಡಿಸಿ.",
 "objectives": [
  "Choose a pattern.",
  "Check capabilities.",
  "Gate before delegating.",
  "Require evidence.",
  "Escalate on no progress."
 ],
 "objectivesKn": [
  "ಮಾದರಿ ಆರಿಸಿ.",
  "ಸಾಮರ್ಥ್ಯ ಪರಿಶೀಲಿಸಿ.",
  "ನಿಯೋಜನೆಗೆ ಮೊದಲು ದ್ವಾರ ಇಡಿ.",
  "ಸಾಕ್ಷಿ ಬೇಡಿ.",
  "ಪ್ರಗತಿ ಇಲ್ಲದಾಗ ಎಸ್ಕಲೇಟ್ ಮಾಡಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Hierarchical Architecture and Its Failure Mode (Part 3 of 3)",
    "textKn": "ಶ್ರೇಣಿ ವಾಸ್ತುಶಿಲ್ಪ ಮತ್ತು ಅದರ ವೈಫಲ್ಯ ವಿಧಾನ (ಭಾಗ 3 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 3 of 3: choosing sequential, flat or hierarchical from the structure of a task, capability checks, a gate before delegation with three scenarios, an evidence-reference gate, a reconciliation policy and a generated fitness document. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind a three-level hierarchy of agents and how it fails (a wrong delegation that every worker executes faithfully, narrowed requirements, unknown turned into certainty, reconciliation loops, provenance, a pattern chooser, a gate before delegation and a generated fitness document), not the real software, and managers and workers are scripted functions with canned findings, the scoring rules are our own heuristic, the evidence references are mock strings and no real engineering, legal or finance review happens, so no real LLM behaviour is measured. The original code/main.py was not supplied, so the labs are our own implementation. The CrewAI and LangGraph material in the lesson is conceptual and was not run, and the depth-2 remark is a design heuristic and not a proven threshold. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 3ನೆಯದು: ಕೆಲಸದ ರಚನೆಯಿಂದ sequential, flat ಅಥವಾ hierarchical ಆರಿಸುವುದು, ಸಾಮರ್ಥ್ಯ ಪರಿಶೀಲನೆ, ಮೂರು ಸನ್ನಿವೇಶಗಳೊಂದಿಗೆ ನಿಯೋಜನೆಯ ಮೊದಲಿನ ದ್ವಾರ, ಸಾಕ್ಷಿ-ಉಲ್ಲೇಖ ದ್ವಾರ, ಸಮನ್ವಯ ನೀತಿ ಮತ್ತು ರಚಿತ fitness ದಾಖಲೆ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು ಏಜೆಂಟ್‌ಗಳ ಮೂರು-ಹಂತದ ಶ್ರೇಣಿ ಮತ್ತು ಅದು ಹೇಗೆ ವಿಫಲವಾಗುತ್ತದೆ (ಪ್ರತಿ ಕೆಲಸಗಾರ ನಿಷ್ಠೆಯಿಂದ ನಡೆಸುವ ತಪ್ಪು ನಿಯೋಜನೆ, ಕಿರಿದಾದ ಅವಶ್ಯಕತೆಗಳು, ನಿಶ್ಚಿತತೆಯಾಗಿ ಬದಲಾದ ಅಜ್ಞಾತ, ಸಮನ್ವಯ ಲೂಪ್‌ಗಳು, provenance, ಮಾದರಿ ಆಯ್ಕೆಕಾರ, ನಿಯೋಜನೆಯ ಮೊದಲಿನ ದ್ವಾರ ಮತ್ತು ರಚಿತ fitness ದಾಖಲೆ) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಮ್ಯಾನೇಜರ್‌ಗಳು ಮತ್ತು ಕೆಲಸಗಾರರು ಸಿದ್ಧ ಕಂಡುಹಿಡಿಕೆಗಳ ಸ್ಕ್ರಿಪ್ಟ್ ಕಾರ್ಯಗಳು, ಅಂಕ ನಿಯಮಗಳು ನಮ್ಮದೇ ಹ್ಯೂರಿಸ್ಟಿಕ್, ಸಾಕ್ಷಿ ಉಲ್ಲೇಖಗಳು ನಕಲಿ ಸ್ಟ್ರಿಂಗ್‌ಗಳು ಮತ್ತು ಯಾವುದೇ ನಿಜವಾದ engineering, legal ಅಥವಾ finance ವಿಮರ್ಶೆ ನಡೆಯುವುದಿಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ code/main.py ನೀಡಲಾಗಿಲ್ಲ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ನಮ್ಮದೇ ಅನುಷ್ಠಾನ. lesson ನ CrewAI ಮತ್ತು LangGraph ವಿಷಯ ಪರಿಕಲ್ಪನಾತ್ಮಕ ಮತ್ತು ಓಡಿಸಲಾಗಿಲ್ಲ, ಮತ್ತು depth-2 ಟಿಪ್ಪಣಿ ವಿನ್ಯಾಸ ಹ್ಯೂರಿಸ್ಟಿಕ್, ಸಾಬೀತಾದ ಮಿತಿಯಲ್ಲ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Use a Hierarchy Only When the Problem Has One",
    "textKn": "ಸಮಸ್ಯೆಗೆ ಇದ್ದರೆ ಮಾತ್ರ ಶ್ರೇಣಿ ಬಳಸಿ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Choosing a Pattern and Running It Safely",
    "headingKn": "ಮಾದರಿ ಆರಿಸುವುದು ಮತ್ತು ಸುರಕ್ಷಿತವಾಗಿ ಓಡಿಸುವುದು",
    "bodyEn": "The last question of the lesson is whether a task needs a hierarchy at all. This part writes a transparent chooser that looks at dependencies, independent branches, sub-teams, reconciliation budget and tracing, and runs it on four tasks. It then runs the hierarchy with the gates in place: a capability check, a plan check before any department runs, an evidence-reference rule, a reconciliation policy that classifies a disagreement and escalates when it must, a count of the calls such a hierarchy makes, and a generated skeleton of the fitness document the lesson asks for.",
    "bodyKn": "lesson ನ ಕೊನೆಯ ಪ್ರಶ್ನೆ ಕೆಲಸಕ್ಕೆ ಶ್ರೇಣಿ ಬೇಕೇ ಎಂಬುದು. ಈ ಭಾಗವು ಅವಲಂಬನೆಗಳು, ಸ್ವತಂತ್ರ ಶಾಖೆಗಳು, ಉಪ-ತಂಡಗಳು, ಸಮನ್ವಯ ಬಜೆಟ್ ಮತ್ತು ಟ್ರೇಸಿಂಗ್ ನೋಡುವ ಪಾರದರ್ಶಕ ಆಯ್ಕೆಕಾರನನ್ನು ಬರೆದು ನಾಲ್ಕು ಕೆಲಸಗಳ ಮೇಲೆ ಓಡಿಸುತ್ತದೆ. ನಂತರ ದ್ವಾರಗಳೊಂದಿಗೆ ಶ್ರೇಣಿ ಓಡಿಸುತ್ತದೆ: ಸಾಮರ್ಥ್ಯ ಪರಿಶೀಲನೆ, ಯಾವುದೇ ವಿಭಾಗ ಓಡುವ ಮೊದಲು ಯೋಜನೆ ಪರಿಶೀಲನೆ, ಸಾಕ್ಷಿ-ಉಲ್ಲೇಖ ನಿಯಮ, ಭಿನ್ನಾಭಿಪ್ರಾಯ ವರ್ಗೀಕರಿಸಿ ಅಗತ್ಯವಿದ್ದಾಗ ಎಸ್ಕಲೇಟ್ ಮಾಡುವ ಸಮನ್ವಯ ನೀತಿ, ಅಂತಹ ಶ್ರೇಣಿ ಮಾಡುವ ಕರೆಗಳ ಎಣಿಕೆ, ಮತ್ತು lesson ಕೇಳುವ fitness ದಾಖಲೆಯ ರಚಿತ ಅಸ್ಥಿಪಂಜರ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Pattern Fitness",
    "headingKn": "ಮಾದರಿ ಹೊಂದಾಣಿಕೆ",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">pick the simplest pattern that keeps the original request safe</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">choose</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">by dependencies</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">gate</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">before any worker runs</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">evidence</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">cited or not accepted</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">escalate</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">when no progress</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">pick the simplest pattern that keeps the original request safe</text></svg>",
    "captionEn": "Choose by dependency and sub-team structure, then add the gates.",
    "captionKn": "ಅವಲಂಬನೆ ಮತ್ತು ಉಪ-ತಂಡ ರಚನೆಯಿಂದ ಆರಿಸಿ, ನಂತರ ದ್ವಾರಗಳನ್ನು ಸೇರಿಸಿ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "The six experiments",
    "headingKn": "ಆರು ಪ್ರಯೋಗಗಳು",
    "headers": [
     "Experiment",
     "What it checks"
    ],
    "rows": [
     [
      "pattern choice",
      "four tasks mapped to sequential, flat or hierarchical"
     ],
     [
      "capabilities",
      "who may be assigned which domain"
     ],
     [
      "scenarios",
      "accepted, rejected before running, needs review"
     ],
     [
      "evidence gate",
      "a report that cites nothing"
     ],
     [
      "reconciliation",
      "budget and no-progress escalation"
     ],
     [
      "cost and document",
      "12 calls, 28000 tokens and a generated skeleton"
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
    "filename": "hi_3.py",
    "headingEn": "The chooser",
    "headingKn": "ಆಯ್ಕೆಕಾರ",
    "descEn": "TaskProfile describes dependency strength, branches, sub-teams, budget and tracing, and recommend_pattern maps it to a pattern with a reason.",
    "descKn": "TaskProfile ಅವಲಂಬನೆ ಬಲ, ಶಾಖೆಗಳು, ಉಪ-ತಂಡಗಳು, ಬಜೆಟ್ ಮತ್ತು ಟ್ರೇಸಿಂಗ್ ವಿವರಿಸುತ್ತದೆ, ಮತ್ತು recommend_pattern ಅದನ್ನು ಕಾರಣದೊಂದಿಗೆ ಮಾದರಿಗೆ ಮ್ಯಾಪ್ ಮಾಡುತ್ತದೆ.",
    "code": "class Pattern(str, Enum):\r\n    SEQUENTIAL = \"sequential\"\r\n    FLAT = \"flat_supervisor\"\r\n    HIERARCHICAL = \"hierarchical\"\r\n\r\n\r\n@dataclass(frozen=True)\r\nclass TaskProfile:\r\n    description: str\r\n    independent_branches: int\r\n    branches_with_subteams: int\r\n    dependency_strength: int\r\n    reconciliation_budget: int\r\n    observability_ready: bool\r\n\r\n\r\ndef recommend_pattern(t):\r\n    if t.independent_branches < 1:\r\n        raise ValueError(\"At least one branch is required\")\r\n    if t.dependency_strength >= 3 or t.independent_branches == 1:\r\n        return Pattern.SEQUENTIAL, \"strong dependencies or one branch\"\r\n    if t.branches_with_subteams >= 2 and t.reconciliation_budget >= 1 and t.observability_ready:\r\n        return Pattern.HIERARCHICAL, \"independent branches with sub-teams and the controls to manage them\"\r\n    return Pattern.FLAT, \"independent work without enough sub-team structure or controls\""
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "hi_3.py",
    "headingEn": "Gates and policy",
    "headingKn": "ದ್ವಾರಗಳು ಮತ್ತು ನೀತಿ",
    "descEn": "validate_plan checks coverage and capability before delegation, run_workflow accepts only supported findings with evidence references, and reconcile_policy escalates on an exhausted budget or no new evidence.",
    "descKn": "validate_plan ನಿಯೋಜನೆಗೆ ಮೊದಲು ವ್ಯಾಪ್ತಿ ಮತ್ತು ಸಾಮರ್ಥ್ಯ ಪರಿಶೀಲಿಸುತ್ತದೆ, run_workflow ಸಾಕ್ಷಿ ಉಲ್ಲೇಖಗಳಿರುವ supported ಕಂಡುಹಿಡಿಕೆಗಳನ್ನು ಮಾತ್ರ ಒಪ್ಪುತ್ತದೆ, ಮತ್ತು reconcile_policy ಬಜೆಟ್ ಮುಗಿದಾಗ ಅಥವಾ ಹೊಸ ಸಾಕ್ಷಿ ಇಲ್ಲದಾಗ ಎಸ್ಕಲೇಟ್ ಮಾಡುತ್ತದೆ.",
    "code": "CAPABILITIES = {\"engineering_manager\": {\"engineering\"}, \"legal_manager\": {\"legal\"}, \"finance_manager\": {\"finance\"}}\r\nMANAGER_OF = {\"engineering\": \"engineering_manager\", \"legal\": \"legal_manager\", \"finance\": \"finance_manager\"}\r\n\r\n\r\ndef validate_assignment(manager, domain):\r\n    return domain in CAPABILITIES.get(manager, set())\r\n\r\n\r\ndef validate_plan(required, plan):\r\n    errors = []\r\n    missing = sorted(set(required) - set(plan))\r\n    if missing:\r\n        errors.append(f\"Missing required domains: {missing}\")\r\n    for d in plan:\r\n        if not validate_assignment(MANAGER_OF.get(d, \"\"), d):\r\n            errors.append(f\"No capable manager for {d}\")\r\n    return errors\r\n\r\n\r\ndef run_workflow(required, plan, legal_status=\"supported\", drop_refs=None):\r\n    errors = validate_plan(required, plan)\r\n    if errors:\r\n        return {\"status\": \"rejected\", \"errors\": errors, \"reports\": 0}\r\n    findings = {\"engineering\": (\"success\", \"supported\"), \"legal\": (\"success\", legal_status), \"finance\": (\"success\", \"supported\")}\r\n    reports = [{\"domain\": d, \"execution\": findings[d][0], \"evidence\": findings[d][1], \"refs\": [f\"mock://{d}\"] if findings[d][1] != \"unknown\" else []} for d in plan]\r\n    for r in reports:\r\n        if r[\"domain\"] == drop_refs:\r\n            r[\"refs\"] = []\r\n    unresolved = [r[\"domain\"] for r in reports if r[\"evidence\"] == \"unknown\"]\r\n    if unresolved:\r\n        return {\"status\": \"needs_review\", \"errors\": [f\"Unresolved requirement: {d}\" for d in unresolved], \"reports\": len(reports)}\r\n    uncited = [r[\"domain\"] for r in reports if not r[\"refs\"]]\r\n    if uncited:\r\n        return {\"status\": \"needs_review\", \"errors\": [f\"Missing evidence references: {d}\" for d in uncited], \"reports\": len(reports)}\r\n    return {\"status\": \"accepted\", \"errors\": [], \"reports\": len(reports)}\r\n\r\n\r\ndef classify(kind):\r\n    return {\"factual\": \"targeted evidence request\", \"scope\": \"clarify the task contract\", \"policy\": \"apply the explicit decision policy\", \"uncertainty\": \"compare the evidence\"}[kind]\r\n\r\n\r\ndef reconcile_policy(attempts_used, budget, new_evidence):\r\n    if new_evidence:\r\n        return \"continue\" if attempts_used < budget else \"escalate_budget_exhausted\"\r\n    return \"escalate_no_progress\""
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "hi_3.py",
    "headingEn": "The experiments",
    "headingKn": "ಪ್ರಯೋಗಗಳು",
    "descEn": "main() runs the six experiments in order and prints the real result of each.",
    "descKn": "main() ಆರು ಪ್ರಯೋಗಗಳನ್ನು ಕ್ರಮವಾಗಿ ಓಡಿಸಿ ಪ್ರತಿಯೊಂದರ ನಿಜ ಫಲಿತಾಂಶ ಮುದ್ರಿಸುತ್ತದೆ.",
    "code": "def main():\r\n    section(\"1. Genuinely running: picking a pattern from the structure of the task\")\r\n    tasks = [TaskProfile(\"research, draft, edit\", 1, 0, 4, 1, True), TaskProfile(\"three independent reviews\", 3, 0, 0, 1, True),\r\n             TaskProfile(\"enterprise launch readiness\", 4, 4, 1, 2, True), TaskProfile(\"enterprise launch, no tracing\", 4, 4, 1, 2, False)]\r\n    for t in tasks:\r\n        p, why = recommend_pattern(t)\r\n        print(f\"{t.description}: {p.value} ({why})\")\r\n    print(\"a chain of dependent steps gets a sequential pipeline, three independent reviews get a flat supervisor, and four departments with sub-teams get a hierarchy only when tracing is ready, otherwise the same task falls back to a flat supervisor; the rules and thresholds are our own heuristic and have not been calibrated on real outcomes.\")\r\n\r\n    section(\"2. Genuinely running: capability checks\")\r\n    print(\"legal_manager for legal:\", validate_assignment(\"legal_manager\", \"legal\"), \"| finance_manager for legal:\", validate_assignment(\"finance_manager\", \"legal\"), \"| unknown manager:\", validate_assignment(\"ghost\", \"legal\"))\r\n    print(\"a legal task is accepted for the legal manager and refused for the finance manager, and an unregistered manager has no capabilities; a capability match checks who may do a job and not whether the plan covers the request, so both checks are needed.\")\r\n\r\n    section(\"3. Genuinely running: three scenarios with a gate before delegation\")\r\n    required = [\"engineering\", \"legal\"]\r\n    for label, plan, legal in ((\"happy path\", [\"engineering\", \"legal\"], \"supported\"), (\"legal swapped for finance\", [\"engineering\", \"finance\"], \"supported\"), (\"unknown legal evidence\", [\"engineering\", \"legal\"], \"unknown\")):\r\n        print(f\"{label}: {run_workflow(required, plan, legal)}\")\r\n    print(\"the correct plan is accepted with two reports, the swapped plan is rejected before any department runs and so has zero reports, and the plan with unknown legal evidence runs both departments and ends as needs_review instead of being accepted; accepted here means the scripted structural rules held and not that a product is ready.\")\r\n\r\n    section(\"4. Genuinely running: a finding that cites nothing\")\r\n    print(\"with references:\", run_workflow(required, [\"engineering\", \"legal\"]))\r\n    print(\"engineering cites nothing:\", run_workflow(required, [\"engineering\", \"legal\"], drop_refs=\"engineering\"))\r\n    print(\"the same plan and the same supported findings are accepted when every report cites a reference and end as needs_review when the engineering report cites none, naming the department; the references in this lab are mock strings, so the gate checks that something is cited and cannot check that the cited thing exists or supports the claim.\")\r\n\r\n    section(\"5. Genuinely running: what kind of disagreement it is, and when to stop\")\r\n    for kind in (\"factual\", \"scope\", \"policy\", \"uncertainty\"):\r\n        print(f\"{kind}: {classify(kind)}\")\r\n    print(\"attempt 1 of 2 with new evidence:\", reconcile_policy(1, 2, True), \"| attempt 2 of 2 with new evidence:\", reconcile_policy(2, 2, True), \"| attempt 1 with no new evidence:\", reconcile_policy(1, 2, False))\r\n    print(\"each kind of disagreement gets its own response, and the policy escalates when the budget is used up or when an attempt brings no new evidence, instead of asking the departments to agree again; engineering saying deployable and legal saying not approved can both be true, so the final report keeps both statements.\")\r\n\r\n    section(\"6. Genuinely computing: management calls, tokens and a generated fitness document\")\r\n    calls = 2 + 2 * 3 + 4\r\n    tokens = 8 * 2000 + 4 * 3000\r\n    print(\"calls for a top manager of 2, two sub-managers of 3 each and four workers of 1:\", calls, \"| tokens at 8 manager calls of 2000 and 4 worker calls of 3000:\", tokens)\r\n    required_sections = [\"Purpose\", \"Task description\", \"Organizational structure\", \"Architecture alternatives\", \"Fitness assessment\", \"Recommendation\", \"Required safeguards\", \"Failure modes\", \"Acceptance criteria\", \"Verification plan\", \"Final decision\"]\r\n    text = \"# Hierarchy Fitness Evaluation\\n\\n\" + \"\\n\\n\".join(f\"## {s}\\n\\nTo be completed for this task.\" for s in required_sections)\r\n    path = os.path.join(tempfile.mkdtemp(), \"skill-hierarchy-fitness.md\")\r\n    with open(path, \"w\", encoding=\"utf-8\") as f:\r\n        f.write(text)\r\n    written = open(path, encoding=\"utf-8\").read()\r\n    print(\"sections written:\", written.count(\"\\n## \"), \"| all required headings present:\", all(f\"## {s}\" in written for s in required_sections))\r\n    print(\"twelve model calls and 28000 tokens are what the example numbers add up to for this shape of hierarchy, and a generated skeleton with eleven headings is not an evaluation until someone fills it in; the file is written to a temporary folder and the call and token figures are example inputs and not measurements.\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: picking a pattern from the structure of the task ---\nresearch, draft, edit: sequential (strong dependencies or one branch)\nthree independent reviews: flat_supervisor (independent work without enough sub-team structure or controls)\nenterprise launch readiness: hierarchical (independent branches with sub-teams and the controls to manage them)\nenterprise launch, no tracing: flat_supervisor (independent work without enough sub-team structure or controls)\na chain of dependent steps gets a sequential pipeline, three independent reviews get a flat supervisor, and four departments with sub-teams get a hierarchy only when tracing is ready, otherwise the same task falls back to a flat supervisor; the rules and thresholds are our own heuristic and have not been calibrated on real outcomes.\n\n--- 2. Genuinely running: capability checks ---\nlegal_manager for legal: True | finance_manager for legal: False | unknown manager: False\na legal task is accepted for the legal manager and refused for the finance manager, and an unregistered manager has no capabilities; a capability match checks who may do a job and not whether the plan covers the request, so both checks are needed.\n\n--- 3. Genuinely running: three scenarios with a gate before delegation ---\nhappy path: {'status': 'accepted', 'errors': [], 'reports': 2}\nlegal swapped for finance: {'status': 'rejected', 'errors': [\"Missing required domains: ['legal']\"], 'reports': 0}\nunknown legal evidence: {'status': 'needs_review', 'errors': ['Unresolved requirement: legal'], 'reports': 2}\nthe correct plan is accepted with two reports, the swapped plan is rejected before any department runs and so has zero reports, and the plan with unknown legal evidence runs both departments and ends as needs_review instead of being accepted; accepted here means the scripted structural rules held and not that a product is ready.\n\n--- 4. Genuinely running: a finding that cites nothing ---\nwith references: {'status': 'accepted', 'errors': [], 'reports': 2}\nengineering cites nothing: {'status': 'needs_review', 'errors': ['Missing evidence references: engineering'], 'reports': 2}\nthe same plan and the same supported findings are accepted when every report cites a reference and end as needs_review when the engineering report cites none, naming the department; the references in this lab are mock strings, so the gate checks that something is cited and cannot check that the cited thing exists or supports the claim.\n\n--- 5. Genuinely running: what kind of disagreement it is, and when to stop ---\nfactual: targeted evidence request\nscope: clarify the task contract\npolicy: apply the explicit decision policy\nuncertainty: compare the evidence\nattempt 1 of 2 with new evidence: continue | attempt 2 of 2 with new evidence: escalate_budget_exhausted | attempt 1 with no new evidence: escalate_no_progress\neach kind of disagreement gets its own response, and the policy escalates when the budget is used up or when an attempt brings no new evidence, instead of asking the departments to agree again; engineering saying deployable and legal saying not approved can both be true, so the final report keeps both statements.\n\n--- 6. Genuinely computing: management calls, tokens and a generated fitness document ---\ncalls for a top manager of 2, two sub-managers of 3 each and four workers of 1: 12 | tokens at 8 manager calls of 2000 and 4 worker calls of 3000: 28000\nsections written: 11 | all required headings present: True\ntwelve model calls and 28000 tokens are what the example numbers add up to for this shape of hierarchy, and a generated skeleton with eleven headings is not an evaluation until someone fills it in; the file is written to a temporary folder and the call and token figures are example inputs and not measurements."
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
    "headingEn": "Experiment 1: Picking a pattern from the structure of the task",
    "headingKn": "ಪ್ರಯೋಗ 1: Picking a pattern from the structure of the task",
    "bodyEn": "What it ran: Picking a pattern from the structure of the task. What the lab concluded: a chain of dependent steps gets a sequential pipeline, three independent reviews get a flat supervisor, and four departments with sub-teams get a hierarchy only when tracing is ready, otherwise the same task falls back to a flat supervisor; the rules and thresholds are our own heuristic and have not been calibrated on real outcomes.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Picking a pattern from the structure of the task. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a chain of dependent steps gets a sequential pipeline, three independent reviews get a flat supervisor, and four departments with sub-teams get a hierarchy only when tracing is ready, otherwise the same task falls back to a flat supervisor; the rules and thresholds are our own heuristic and have not been calibrated on real outcomes."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. Genuinely running: picking a pattern from the structure of the task ---\nresearch, draft, edit: sequential (strong dependencies or one branch)\nthree independent reviews: flat_supervisor (independent work without enough sub-team structure or controls)\nenterprise launch readiness: hierarchical (independent branches with sub-teams and the controls to manage them)\nenterprise launch, no tracing: flat_supervisor (independent work without enough sub-team structure or controls)"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: Capability checks",
    "headingKn": "ಪ್ರಯೋಗ 2: Capability checks",
    "bodyEn": "What it ran: Capability checks. What the lab concluded: a legal task is accepted for the legal manager and refused for the finance manager, and an unregistered manager has no capabilities; a capability match checks who may do a job and not whether the plan covers the request, so both checks are needed.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Capability checks. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a legal task is accepted for the legal manager and refused for the finance manager, and an unregistered manager has no capabilities; a capability match checks who may do a job and not whether the plan covers the request, so both checks are needed."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely running: capability checks ---\nlegal_manager for legal: True | finance_manager for legal: False | unknown manager: False"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: Three scenarios with a gate before delegation",
    "headingKn": "ಪ್ರಯೋಗ 3: Three scenarios with a gate before delegation",
    "bodyEn": "What it ran: Three scenarios with a gate before delegation. What the lab concluded: the correct plan is accepted with two reports, the swapped plan is rejected before any department runs and so has zero reports, and the plan with unknown legal evidence runs both departments and ends as needs_review instead of being accepted; accepted here means the scripted structural rules held and not that a product is ready.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Three scenarios with a gate before delegation. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the correct plan is accepted with two reports, the swapped plan is rejected before any department runs and so has zero reports, and the plan with unknown legal evidence runs both departments and ends as needs_review instead of being accepted; accepted here means the scripted structural rules held and not that a product is ready."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely running: three scenarios with a gate before delegation ---\nhappy path: {'status': 'accepted', 'errors': [], 'reports': 2}\nlegal swapped for finance: {'status': 'rejected', 'errors': [\"Missing required domains: ['legal']\"], 'reports': 0}\nunknown legal evidence: {'status': 'needs_review', 'errors': ['Unresolved requirement: legal'], 'reports': 2}"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 4: A finding that cites nothing",
    "headingKn": "ಪ್ರಯೋಗ 4: A finding that cites nothing",
    "bodyEn": "What it ran: A finding that cites nothing. What the lab concluded: the same plan and the same supported findings are accepted when every report cites a reference and end as needs_review when the engineering report cites none, naming the department; the references in this lab are mock strings, so the gate checks that something is cited and cannot check that the cited thing exists or supports the claim.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A finding that cites nothing. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the same plan and the same supported findings are accepted when every report cites a reference and end as needs_review when the engineering report cites none, naming the department; the references in this lab are mock strings, so the gate checks that something is cited and cannot check that the cited thing exists or supports the claim."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 4. Genuinely running: a finding that cites nothing ---\nwith references: {'status': 'accepted', 'errors': [], 'reports': 2}\nengineering cites nothing: {'status': 'needs_review', 'errors': ['Missing evidence references: engineering'], 'reports': 2}"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 5: What kind of disagreement it is, and when to stop",
    "headingKn": "ಪ್ರಯೋಗ 5: What kind of disagreement it is, and when to stop",
    "bodyEn": "What it ran: What kind of disagreement it is, and when to stop. What the lab concluded: each kind of disagreement gets its own response, and the policy escalates when the budget is used up or when an attempt brings no new evidence, instead of asking the departments to agree again; engineering saying deployable and legal saying not approved can both be true, so the final report keeps both statements.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: What kind of disagreement it is, and when to stop. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): each kind of disagreement gets its own response, and the policy escalates when the budget is used up or when an attempt brings no new evidence, instead of asking the departments to agree again; engineering saying deployable and legal saying not approved can both be true, so the final report keeps both statements."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 5. Genuinely running: what kind of disagreement it is, and when to stop ---\nfactual: targeted evidence request\nscope: clarify the task contract\npolicy: apply the explicit decision policy\nuncertainty: compare the evidence\nattempt 1 of 2 with new evidence: continue | attempt 2 of 2 with new evidence: escalate_budget_exhausted | attempt 1 with no new evidence: escalate_no_progress"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 6: Management calls, tokens and a generated fitness document",
    "headingKn": "ಪ್ರಯೋಗ 6: Management calls, tokens and a generated fitness document",
    "bodyEn": "What it ran: Management calls, tokens and a generated fitness document. What the lab concluded: twelve model calls and 28000 tokens are what the example numbers add up to for this shape of hierarchy, and a generated skeleton with eleven headings is not an evaluation until someone fills it in; the file is written to a temporary folder and the call and token figures are example inputs and not measurements.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Management calls, tokens and a generated fitness document. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): twelve model calls and 28000 tokens are what the example numbers add up to for this shape of hierarchy, and a generated skeleton with eleven headings is not an evaluation until someone fills it in; the file is written to a temporary folder and the call and token figures are example inputs and not measurements."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 6. Genuinely computing: management calls, tokens and a generated fitness document ---\ncalls for a top manager of 2, two sub-managers of 3 each and four workers of 1: 12 | tokens at 8 manager calls of 2000 and 4 worker calls of 3000: 28000\nsections written: 11 | all required headings present: True"
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
    "headingEn": "Genuinely Found: Choosing and Gating",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಆರಿಸುವುದು ಮತ್ತು ದ್ವಾರ",
    "bodyEn": "Section 1: research, draft, edit gave sequential, three independent reviews gave flat_supervisor, enterprise launch readiness gave hierarchical and the same launch without tracing fell back to flat_supervisor. Section 2: legal_manager for legal was True, finance_manager for legal False and an unknown manager False. Section 3: the happy path was accepted with 2 reports, the swapped plan was rejected with 0 reports and the unknown legal evidence ended needs_review with 2 reports.",
    "bodyKn": "ವಿಭಾಗ 1: research, draft, edit sequential ನೀಡಿತು, ಮೂರು ಸ್ವತಂತ್ರ ವಿಮರ್ಶೆಗಳು flat_supervisor ನೀಡಿದವು, enterprise launch readiness hierarchical ನೀಡಿತು ಮತ್ತು ಟ್ರೇಸಿಂಗ್ ಇಲ್ಲದ ಅದೇ launch flat_supervisor ಗೆ ಹಿಂದಿರುಗಿತು. ವಿಭಾಗ 2: legal ಗೆ legal_manager True, legal ಗೆ finance_manager False ಮತ್ತು ಅಜ್ಞಾತ ಮ್ಯಾನೇಜರ್ False. ವಿಭಾಗ 3: ಸುಖ ಮಾರ್ಗ 2 ವರದಿಗಳೊಂದಿಗೆ ಒಪ್ಪಲ್ಪಟ್ಟಿತು, ಬದಲಾದ ಯೋಜನೆ 0 ವರದಿಗಳೊಂದಿಗೆ ತಿರಸ್ಕರಿಸಲ್ಪಟ್ಟಿತು ಮತ್ತು ಅಜ್ಞಾತ legal ಸಾಕ್ಷಿ 2 ವರದಿಗಳೊಂದಿಗೆ needs_review ಎಂದು ಮುಗಿಯಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Evidence, Reconciliation and Cost",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಸಾಕ್ಷಿ, ಸಮನ್ವಯ ಮತ್ತು ವೆಚ್ಚ",
    "bodyEn": "Section 4: the plan with references was accepted and the one where engineering cited nothing ended needs_review with Missing evidence references: engineering. Section 5: the policy gave continue, escalate_budget_exhausted and escalate_no_progress for the three cases. Section 6: the hierarchy made 12 calls and 28000 tokens, and the generated document had 11 sections with all required headings.",
    "bodyKn": "ವಿಭಾಗ 4: ಉಲ್ಲೇಖಗಳಿರುವ ಯೋಜನೆ ಒಪ್ಪಲ್ಪಟ್ಟಿತು ಮತ್ತು engineering ಏನನ್ನೂ ಉಲ್ಲೇಖಿಸದ ಯೋಜನೆ Missing evidence references: engineering ಯೊಂದಿಗೆ needs_review ಆಯಿತು. ವಿಭಾಗ 5: ನೀತಿ ಮೂರು ಪ್ರಕರಣಗಳಿಗೆ continue, escalate_budget_exhausted ಮತ್ತು escalate_no_progress ನೀಡಿತು. ವಿಭಾಗ 6: ಶ್ರೇಣಿ 12 ಕರೆಗಳು ಮತ್ತು 28000 tokens ಮಾಡಿತು, ಮತ್ತು ರಚಿತ ದಾಖಲೆ ಅಗತ್ಯ ಎಲ್ಲಾ ಶೀರ್ಷಿಕೆಗಳೊಂದಿಗೆ 11 ವಿಭಾಗಗಳನ್ನು ಹೊಂದಿತ್ತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A hierarchy costs more calls, more summaries and more places for meaning to drift, so the first decision is whether the problem has independent sub-teams, and the second is whether you can afford the gates that make a hierarchy safe.",
    "bodyKn": "ಶ್ರೇಣಿಗೆ ಹೆಚ್ಚು ಕರೆಗಳು, ಹೆಚ್ಚು ಸಾರಾಂಶಗಳು ಮತ್ತು ಅರ್ಥ ಜಾರಲು ಹೆಚ್ಚು ಸ್ಥಳಗಳು ಬೇಕು, ಆದ್ದರಿಂದ ಮೊದಲ ನಿರ್ಧಾರ ಸಮಸ್ಯೆಗೆ ಸ್ವತಂತ್ರ ಉಪ-ತಂಡಗಳಿವೆಯೇ ಎಂಬುದು, ಮತ್ತು ಎರಡನೆಯದು ಶ್ರೇಣಿಯನ್ನು ಸುರಕ್ಷಿತ ಮಾಡುವ ದ್ವಾರಗಳನ್ನು ನೀವು ಭರಿಸಬಹುದೇ ಎಂಬುದು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"a bigger task needs a bigger hierarchy.\" The same enterprise launch fell back to a flat supervisor when tracing was not ready.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ದೊಡ್ಡ ಕೆಲಸಕ್ಕೆ ದೊಡ್ಡ ಶ್ರೇಣಿ ಬೇಕು.\" ಟ್ರೇಸಿಂಗ್ ಸಿದ್ಧವಿಲ್ಲದಿದ್ದಾಗ ಅದೇ enterprise launch flat supervisor ಗೆ ಹಿಂದಿರುಗಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Pattern fitness: how well a structure suits the task. Gate: a check that must pass before the next step. Needs review: a finished run that cannot be trusted yet. Escalation: handing a problem to a human or a stronger process. Fitness document: a written record of why a pattern was chosen.",
    "bodyKn": "ಮಾದರಿ ಹೊಂದಾಣಿಕೆ: ರಚನೆ ಕೆಲಸಕ್ಕೆ ಎಷ್ಟು ಹೊಂದುತ್ತದೆ. ದ್ವಾರ: ಮುಂದಿನ ಹಂತದ ಮೊದಲು ಪಾಸಾಗಬೇಕಾದ ಪರಿಶೀಲನೆ. Needs review: ಮುಗಿದರೂ ಇನ್ನೂ ನಂಬಲಾಗದ ಓಟ. ಎಸ್ಕಲೇಷನ್: ಸಮಸ್ಯೆಯನ್ನು ಮಾನವ ಅಥವಾ ಬಲವಾದ ಪ್ರಕ್ರಿಯೆಗೆ ನೀಡುವುದು. Fitness ದಾಖಲೆ: ಮಾದರಿ ಏಕೆ ಆರಿಸಲಾಯಿತು ಎಂಬುದರ ಲಿಖಿತ ದಾಖಲೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) Four tasks mapped to three patterns by dependency and sub-team structure. 2) A plan swapping legal for finance was rejected with 0 reports. 3) A report that cited nothing sent the run to needs_review. 4) The policy escalated on an exhausted budget and on no new evidence. 5) The example hierarchy made 12 calls and 28000 tokens.",
    "bodyKn": "1) ನಾಲ್ಕು ಕೆಲಸಗಳು ಅವಲಂಬನೆ ಮತ್ತು ಉಪ-ತಂಡ ರಚನೆಯಿಂದ ಮೂರು ಮಾದರಿಗಳಿಗೆ ಮ್ಯಾಪ್ ಆದವು. 2) legal ಬದಲು finance ಹಾಕಿದ ಯೋಜನೆ 0 ವರದಿಗಳೊಂದಿಗೆ ತಿರಸ್ಕರಿಸಲ್ಪಟ್ಟಿತು. 3) ಏನನ್ನೂ ಉಲ್ಲೇಖಿಸದ ವರದಿ ಓಟವನ್ನು needs_review ಗೆ ಕಳುಹಿಸಿತು. 4) ನೀತಿ ಮುಗಿದ ಬಜೆಟ್ ಮತ್ತು ಹೊಸ ಸಾಕ್ಷಿ ಇಲ್ಲದಾಗ ಎಸ್ಕಲೇಟ್ ಮಾಡಿತು. 5) ಉದಾಹರಣೆ ಶ್ರೇಣಿ 12 ಕರೆಗಳು ಮತ್ತು 28000 tokens ಮಾಡಿತು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "Which pattern did the enterprise launch get when tracing was not ready?",
      "qKn": "ಟ್ರೇಸಿಂಗ್ ಸಿದ್ಧವಿಲ್ಲದಾಗ enterprise launch ಗೆ ಯಾವ ಮಾದರಿ ಸಿಕ್ಕಿತು?",
      "opts": [
       "flat_supervisor",
       "hierarchical",
       "sequential",
       "none"
      ],
      "optsKn": [
       "flat_supervisor",
       "hierarchical",
       "sequential",
       "ಯಾವುದೂ ಇಲ್ಲ"
      ],
      "correct": 0
     },
     {
      "q": "How many reports did the plan that swapped legal for finance produce?",
      "qKn": "legal ಬದಲು finance ಹಾಕಿದ ಯೋಜನೆ ಎಷ್ಟು ವರದಿಗಳನ್ನು ನೀಡಿತು?",
      "opts": [
       "0",
       "2",
       "1",
       "3"
      ],
      "optsKn": [
       "0",
       "2",
       "1",
       "3"
      ],
      "correct": 0
     },
     {
      "q": "What status did the run get when engineering cited no evidence?",
      "qKn": "engineering ಸಾಕ್ಷಿ ಉಲ್ಲೇಖಿಸದಾಗ ಓಟಕ್ಕೆ ಯಾವ ಸ್ಥಿತಿ ಸಿಕ್ಕಿತು?",
      "opts": [
       "needs_review",
       "accepted",
       "rejected",
       "failed"
      ],
      "optsKn": [
       "needs_review",
       "accepted",
       "rejected",
       "failed"
      ],
      "correct": 0
     },
     {
      "q": "What did the policy return at attempt 2 of 2 with new evidence?",
      "qKn": "ಹೊಸ ಸಾಕ್ಷಿಯೊಂದಿಗೆ 2 ರಲ್ಲಿ ಪ್ರಯತ್ನ 2 ರಲ್ಲಿ ನೀತಿ ಏನು ನೀಡಿತು?",
      "opts": [
       "escalate_budget_exhausted",
       "continue",
       "escalate_no_progress",
       "resolved"
      ],
      "optsKn": [
       "escalate_budget_exhausted",
       "continue",
       "escalate_no_progress",
       "resolved"
      ],
      "correct": 0
     },
     {
      "q": "How many calls did the example hierarchy make?",
      "qKn": "ಉದಾಹರಣೆ ಶ್ರೇಣಿ ಎಷ್ಟು ಕರೆಗಳನ್ನು ಮಾಡಿತು?",
      "opts": [
       "12",
       "8",
       "6",
       "4"
      ],
      "optsKn": [
       "12",
       "8",
       "6",
       "4"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
