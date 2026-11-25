module.exports = {
 "phaseId": "6a369d6466020ed05b3215d1",
 "moduleId": "6a369d6566020ed05b3215e6",
 "order": 0,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Hierarchical Architecture and Its Failure Mode (Part 1 of 3) — Three Levels and a Wrong Delegation",
 "titleKn": "ಶ್ರೇಣಿ ವಾಸ್ತುಶಿಲ್ಪ ಮತ್ತು ಅದರ ವೈಫಲ್ಯ ವಿಧಾನ (ಭಾಗ 1 / 3) — ಮೂರು ಹಂತಗಳು ಮತ್ತು ತಪ್ಪು ನಿಯೋಜನೆ",
 "desc": "Build a three-level hierarchy, run a correct and a wrong delegation and compare delivered work with the request.",
 "descKn": "ಮೂರು-ಹಂತದ ಶ್ರೇಣಿ ನಿರ್ಮಿಸಿ, ಸರಿಯಾದ ಮತ್ತು ತಪ್ಪು ನಿಯೋಜನೆ ಓಡಿಸಿ ಮತ್ತು ಒದಗಿಸಿದ ಕೆಲಸವನ್ನು ವಿನಂತಿಯೊಂದಿಗೆ ಹೋಲಿಸಿ.",
 "objectives": [
  "Build three levels.",
  "Delegate correctly.",
  "Spot a wrong delegation.",
  "Reject an empty department.",
  "Count the cost of layers."
 ],
 "objectivesKn": [
  "ಮೂರು ಹಂತಗಳನ್ನು ನಿರ್ಮಿಸಿ.",
  "ಸರಿಯಾಗಿ ನಿಯೋಜಿಸಿ.",
  "ತಪ್ಪು ನಿಯೋಜನೆ ಗುರುತಿಸಿ.",
  "ಖಾಲಿ ವಿಭಾಗ ತಿರಸ್ಕರಿಸಿ.",
  "ಪದರಗಳ ವೆಚ್ಚ ಎಣಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Hierarchical Architecture and Its Failure Mode (Part 1 of 3)",
    "textKn": "ಶ್ರೇಣಿ ವಾಸ್ತುಶಿಲ್ಪ ಮತ್ತು ಅದರ ವೈಫಲ್ಯ ವಿಧಾನ (ಭಾಗ 1 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 1 of 3: a top manager, two department managers and four workers, a correct delegation and one that swaps legal for finance, a mislabelled task, a department with no workers, and the compounding arithmetic of extra layers. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind a three-level hierarchy of agents and how it fails (a wrong delegation that every worker executes faithfully, narrowed requirements, unknown turned into certainty, reconciliation loops, provenance, a pattern chooser, a gate before delegation and a generated fitness document), not the real software, and managers and workers are scripted functions with canned findings, the scoring rules are our own heuristic, the evidence references are mock strings and no real engineering, legal or finance review happens, so no real LLM behaviour is measured. The original code/main.py was not supplied, so the labs are our own implementation. The CrewAI and LangGraph material in the lesson is conceptual and was not run, and the depth-2 remark is a design heuristic and not a proven threshold. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 1ನೆಯದು: ಒಬ್ಬ ಮೇಲ್ಮಟ್ಟದ ಮ್ಯಾನೇಜರ್, ಇಬ್ಬರು ವಿಭಾಗ ಮ್ಯಾನೇಜರ್‌ಗಳು ಮತ್ತು ನಾಲ್ವರು ಕೆಲಸಗಾರರು, ಸರಿಯಾದ ನಿಯೋಜನೆ ಮತ್ತು legal ಬದಲು finance ಹಾಕಿದ ನಿಯೋಜನೆ, ತಪ್ಪು ಲೇಬಲ್ ಕೆಲಸ, ಕೆಲಸಗಾರರಿಲ್ಲದ ವಿಭಾಗ ಮತ್ತು ಹೆಚ್ಚುವರಿ ಹಂತಗಳ ಸಂಯೋಜಿತ ಲೆಕ್ಕ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು ಏಜೆಂಟ್‌ಗಳ ಮೂರು-ಹಂತದ ಶ್ರೇಣಿ ಮತ್ತು ಅದು ಹೇಗೆ ವಿಫಲವಾಗುತ್ತದೆ (ಪ್ರತಿ ಕೆಲಸಗಾರ ನಿಷ್ಠೆಯಿಂದ ನಡೆಸುವ ತಪ್ಪು ನಿಯೋಜನೆ, ಕಿರಿದಾದ ಅವಶ್ಯಕತೆಗಳು, ನಿಶ್ಚಿತತೆಯಾಗಿ ಬದಲಾದ ಅಜ್ಞಾತ, ಸಮನ್ವಯ ಲೂಪ್‌ಗಳು, provenance, ಮಾದರಿ ಆಯ್ಕೆಕಾರ, ನಿಯೋಜನೆಯ ಮೊದಲಿನ ದ್ವಾರ ಮತ್ತು ರಚಿತ fitness ದಾಖಲೆ) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಮ್ಯಾನೇಜರ್‌ಗಳು ಮತ್ತು ಕೆಲಸಗಾರರು ಸಿದ್ಧ ಕಂಡುಹಿಡಿಕೆಗಳ ಸ್ಕ್ರಿಪ್ಟ್ ಕಾರ್ಯಗಳು, ಅಂಕ ನಿಯಮಗಳು ನಮ್ಮದೇ ಹ್ಯೂರಿಸ್ಟಿಕ್, ಸಾಕ್ಷಿ ಉಲ್ಲೇಖಗಳು ನಕಲಿ ಸ್ಟ್ರಿಂಗ್‌ಗಳು ಮತ್ತು ಯಾವುದೇ ನಿಜವಾದ engineering, legal ಅಥವಾ finance ವಿಮರ್ಶೆ ನಡೆಯುವುದಿಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ code/main.py ನೀಡಲಾಗಿಲ್ಲ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ನಮ್ಮದೇ ಅನುಷ್ಠಾನ. lesson ನ CrewAI ಮತ್ತು LangGraph ವಿಷಯ ಪರಿಕಲ್ಪನಾತ್ಮಕ ಮತ್ತು ಓಡಿಸಲಾಗಿಲ್ಲ, ಮತ್ತು depth-2 ಟಿಪ್ಪಣಿ ವಿನ್ಯಾಸ ಹ್ಯೂರಿಸ್ಟಿಕ್, ಸಾಬೀತಾದ ಮಿತಿಯಲ್ಲ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Success of Every Worker Is Not Success of the Task",
    "textKn": "ಪ್ರತಿ ಕೆಲಸಗಾರನ ಯಶಸ್ಸು ಕೆಲಸದ ಯಶಸ್ಸಲ್ಲ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "A Three-Level Hierarchy and a Wrong Delegation",
    "headingKn": "ಮೂರು-ಹಂತದ ಶ್ರೇಣಿ ಮತ್ತು ತಪ್ಪು ನಿಯೋಜನೆ",
    "bodyEn": "A hierarchical system lets a top manager hand departments to sub-managers who hand tasks to workers, and the results travel back up. That fits a problem with real departments. The danger is that every layer is a place where the meaning of the original request can change. This part builds a top manager, department managers and workers, runs a correct delegation, then runs the same hierarchy with finance in place of legal so that every worker succeeds and the request still fails. It also tests a mislabelled task, a department with no workers and the compounding arithmetic of extra layers.",
    "bodyKn": "ಶ್ರೇಣಿ ವ್ಯವಸ್ಥೆ ಮೇಲ್ಮಟ್ಟದ ಮ್ಯಾನೇಜರ್ ವಿಭಾಗಗಳನ್ನು ಉಪ-ಮ್ಯಾನೇಜರ್‌ಗಳಿಗೆ ನೀಡಲು, ಅವರು ಕೆಲಸಗಳನ್ನು ಕೆಲಸಗಾರರಿಗೆ ನೀಡಲು ಬಿಡುತ್ತದೆ, ಮತ್ತು ಫಲಿತಾಂಶಗಳು ಮೇಲೆ ಹಿಂದಿರುಗುತ್ತವೆ. ಅದು ನಿಜವಾದ ವಿಭಾಗಗಳಿರುವ ಸಮಸ್ಯೆಗೆ ಹೊಂದುತ್ತದೆ. ಅಪಾಯವೆಂದರೆ ಪ್ರತಿ ಪದರ ಮೂಲ ವಿನಂತಿಯ ಅರ್ಥ ಬದಲಾಗಬಹುದಾದ ಸ್ಥಳ. ಈ ಭಾಗವು ಮೇಲ್ಮಟ್ಟದ ಮ್ಯಾನೇಜರ್, ವಿಭಾಗ ಮ್ಯಾನೇಜರ್‌ಗಳು ಮತ್ತು ಕೆಲಸಗಾರರನ್ನು ನಿರ್ಮಿಸಿ, ಸರಿಯಾದ ನಿಯೋಜನೆ ಓಡಿಸಿ, ನಂತರ legal ಬದಲು finance ಇರುವ ಅದೇ ಶ್ರೇಣಿಯನ್ನು ಓಡಿಸುತ್ತದೆ, ಇದರಲ್ಲಿ ಪ್ರತಿ ಕೆಲಸಗಾರ ಯಶಸ್ವಿಯಾಗಿಯೂ ವಿನಂತಿ ವಿಫಲವಾಗುತ್ತದೆ. ಇದು ತಪ್ಪು ಲೇಬಲ್ ಕೆಲಸ, ಕೆಲಸಗಾರರಿಲ್ಲದ ವಿಭಾಗ ಮತ್ತು ಹೆಚ್ಚುವರಿ ಹಂತಗಳ ಸಂಯೋಜಿತ ಲೆಕ್ಕವನ್ನೂ ಪರೀಕ್ಷಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Three Levels",
    "headingKn": "ಮೂರು ಹಂತಗಳು",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">a hierarchy can complete everything and still miss the request</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">top manager</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">splits the goal</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">sub-managers</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">own a department</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">workers</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">do the work</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">gap</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">right work, wrong goal</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">a hierarchy can complete everything and still miss the request</text></svg>",
    "captionEn": "Requests go down, results come up, and a wrong split at the top survives the trip.",
    "captionKn": "ವಿನಂತಿಗಳು ಕೆಳಗೆ ಹೋಗುತ್ತವೆ, ಫಲಿತಾಂಶಗಳು ಮೇಲೆ ಬರುತ್ತವೆ, ಮತ್ತು ಮೇಲಿನ ತಪ್ಪು ವಿಭಜನೆ ಪ್ರಯಾಣದಲ್ಲಿ ಉಳಿಯುತ್ತದೆ."
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
      "correct delegation",
      "engineering and legal, three workers"
     ],
     [
      "wrong delegation",
      "finance in place of legal, all workers succeed"
     ],
     [
      "mislabelled task",
      "a legal task sent to the finance worker"
     ],
     [
      "empty department",
      "all() over no workers"
     ],
     [
      "compounding",
      "0.95 cubed and 0.9 cubed"
     ],
     [
      "summaries",
      "30000 tokens against 3000"
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
    "filename": "hi_1.py",
    "headingEn": "Tasks, workers and departments",
    "headingKn": "ಕೆಲಸಗಳು, ಕೆಲಸಗಾರರು ಮತ್ತು ವಿಭಾಗಗಳು",
    "descEn": "Task, WorkerResult and DepartmentReport carry the data, Worker refuses a task of another domain and DepartmentManager delegates to every worker and summarises with all().",
    "descKn": "Task, WorkerResult ಮತ್ತು DepartmentReport ಡೇಟಾ ಹೊತ್ತಿವೆ, Worker ಬೇರೆ ಡೊಮೇನ್‌ನ ಕೆಲಸ ನಿರಾಕರಿಸುತ್ತದೆ ಮತ್ತು DepartmentManager ಪ್ರತಿ ಕೆಲಸಗಾರನಿಗೆ ನಿಯೋಜಿಸಿ all() ನಿಂದ ಸಂಕ್ಷೇಪಿಸುತ್ತದೆ.",
    "code": "class Task:\n    task_id: str\n    domain: str\n    description: str\n\n\n@dataclass\nclass WorkerResult:\n    worker_name: str\n    domain: str\n    findings: List[str]\n    success: bool = True\n\n\n@dataclass\nclass DepartmentReport:\n    manager_name: str\n    domain: str\n    worker_results: List[WorkerResult]\n    summary: str\n\n\nclass Worker:\n    def __init__(self, name, domain, findings):\n        self.name, self.domain, self.findings = name, domain, findings\n\n    def execute(self, task):\n        if task.domain != self.domain:\n            return WorkerResult(self.name, self.domain, [f\"cannot handle domain {task.domain}\"], success=False)\n        return WorkerResult(self.name, self.domain, list(self.findings))"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "hi_1.py",
    "headingEn": "Top manager and coverage",
    "headingKn": "ಮೇಲ್ಮಟ್ಟದ ಮ್ಯಾನೇಜರ್ ಮತ್ತು ವ್ಯಾಪ್ತಿ",
    "descEn": "TopManager runs the delegated departments and compares the delivered domains with the required ones to give a verdict.",
    "descKn": "TopManager ನಿಯೋಜಿತ ವಿಭಾಗಗಳನ್ನು ಓಡಿಸಿ ತೀರ್ಪು ನೀಡಲು ಒದಗಿಸಿದ ಡೊಮೇನ್‌ಗಳನ್ನು ಅಗತ್ಯವಾದವುಗಳೊಂದಿಗೆ ಹೋಲಿಸುತ್ತದೆ.",
    "code": "class DepartmentManager:\n    def __init__(self, name, domain, workers):\n        self.name, self.domain, self.workers = name, domain, workers\n\n    def execute(self, task):\n        results = [w.execute(Task(task.task_id + \"/\" + w.name, self.domain, task.description)) for w in self.workers]\n        ok = all(r.success for r in results)\n        return DepartmentReport(self.name, self.domain, results, f\"{self.domain} assessment completed\" if ok else f\"{self.domain} assessment failed\")\n\n\nclass TopManager:\n    def __init__(self, managers):\n        self.managers = managers\n\n    def run(self, required_domains, delegated_domains):\n        reports = [self.managers[d].execute(Task(\"root-\" + d, d, \"Assess readiness\")) for d in delegated_domains]\n        delivered = [r.domain for r in reports]\n        missing = sorted(set(required_domains) - set(delivered))\n        verdict = \"COVERAGE SATISFIED\" if not missing else \"INCOMPLETE\"\n        return reports, delivered, missing, verdict\n\n\ndef build():\n    return TopManager({\n        \"engineering\": DepartmentManager(\"engineering_manager\", \"engineering\", [Worker(\"frontend_worker\", \"engineering\", [\"frontend checked\"]), Worker(\"backend_worker\", \"engineering\", [\"backend checked\"])]),\n        \"legal\": DepartmentManager(\"legal_manager\", \"legal\", [Worker(\"legal_worker\", \"legal\", [\"compliance checked\"])]),\n        \"finance\": DepartmentManager(\"finance_manager\", \"finance\", [Worker(\"finance_worker\", \"finance\", [\"costs estimated\"])]),\n    })"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "hi_1.py",
    "headingEn": "The experiments",
    "headingKn": "ಪ್ರಯೋಗಗಳು",
    "descEn": "main() runs the six experiments in order and prints the real result of each.",
    "descKn": "main() ಆರು ಪ್ರಯೋಗಗಳನ್ನು ಕ್ರಮವಾಗಿ ಓಡಿಸಿ ಪ್ರತಿಯೊಂದರ ನಿಜ ಫಲಿತಾಂಶ ಮುದ್ರಿಸುತ್ತದೆ.",
    "code": "def main():\n    required = [\"engineering\", \"legal\"]\n    top = build()\n\n    section(\"1. Genuinely running: the correct delegation\")\n    reports, delivered, missing, verdict = top.run(required, [\"engineering\", \"legal\"])\n    print(\"delivered:\", delivered, \"| missing:\", missing, \"| verdict:\", verdict, \"| workers run:\", sum(len(r.worker_results) for r in reports))\n    print(\"both required departments received work, the engineering manager used two workers and the legal manager one, and nothing required is missing; the verdict is called coverage satisfied and not success, because the findings are canned and no real review took place.\")\n\n    section(\"2. Genuinely running: the same hierarchy with finance in place of legal\")\n    reports2, delivered2, missing2, verdict2 = top.run(required, [\"engineering\", \"finance\"])\n    print(\"delivered:\", delivered2, \"| missing:\", missing2, \"| verdict:\", verdict2)\n    print(\"every report says completed:\", all(r.summary.endswith(\"completed\") for r in reports2), \"| every worker reported success:\", all(w.success for r in reports2 for w in r.worker_results))\n    print(\"each department and each worker finished correctly and the run still fails the original request, because legal was never delegated; local execution success cannot show a decomposition error, so the check has to compare what was delivered with what was asked.\")\n\n    section(\"3. Genuinely running: a mislabelled task against a worker\")\n    legal_worker = Worker(\"legal_worker\", \"legal\", [\"compliance checked\"])\n    finance_worker = Worker(\"finance_worker\", \"finance\", [\"costs estimated\"])\n    wrong = finance_worker.execute(Task(\"t\", \"legal\", \"Review privacy\"))\n    right = finance_worker.execute(Task(\"t\", \"finance\", \"Estimate costs\"))\n    print(\"legal task to the finance worker:\", wrong.success, wrong.findings, \"| finance task to the finance worker:\", right.success)\n    print(\"a task whose domain label does not match the worker is refused, which catches careless routing; the finance manager in experiment 2 received a correctly labelled finance task and had no way to know that the user wanted legal, so a local check cannot replace a check against the original request.\")\n\n    section(\"4. Genuinely running: a department with nobody in it\")\n    empty = DepartmentManager(\"legal_manager\", \"legal\", [])\n    report = empty.execute(Task(\"t\", \"legal\", \"Assess\"))\n    print(\"workers:\", len(report.worker_results), \"| summary:\", report.summary)\n    print(\"all() over an empty list is True, so a department with no workers reports its assessment as completed without any work having been done; a manager that must have workers has to reject an empty set explicitly.\")\n\n    section(\"5. Genuinely computing: why extra layers are not free\")\n    p = 0.95\n    print(f\"three transformations that each keep the requirements with probability {p}: {p ** 3:.4f}\")\n    r = 0.9\n    print(f\"three summaries that each keep 90% of a chosen measure of information: {r ** 3:.3f}\")\n    print(\"under these invented independent probabilities complete preservation drops to about 85.7% and retained information to 72.9% after three steps; the numbers are illustrations of compounding and not measurements, and real failures are correlated.\")\n\n    section(\"6. Genuinely computing: what a sub-manager summary saves and risks\")\n    worker_tokens, summary_tokens = 15 * 2000, 3 * 1000\n    print(f\"fifteen reports of 2000 tokens: {worker_tokens} | three summaries of 1000 tokens: {summary_tokens} | reduction: {100 * (1 - summary_tokens / worker_tokens):.0f}%\")\n    print(\"the top manager reads a tenth of the text it would otherwise read, at the price of the sub-managers own calls and of whatever detail the summaries drop; the token counts are example inputs from the lesson, so this shows the trade and does not measure any real saving.\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: the correct delegation ---\ndelivered: ['engineering', 'legal'] | missing: [] | verdict: COVERAGE SATISFIED | workers run: 3\nboth required departments received work, the engineering manager used two workers and the legal manager one, and nothing required is missing; the verdict is called coverage satisfied and not success, because the findings are canned and no real review took place.\n\n--- 2. Genuinely running: the same hierarchy with finance in place of legal ---\ndelivered: ['engineering', 'finance'] | missing: ['legal'] | verdict: INCOMPLETE\nevery report says completed: True | every worker reported success: True\neach department and each worker finished correctly and the run still fails the original request, because legal was never delegated; local execution success cannot show a decomposition error, so the check has to compare what was delivered with what was asked.\n\n--- 3. Genuinely running: a mislabelled task against a worker ---\nlegal task to the finance worker: False ['cannot handle domain legal'] | finance task to the finance worker: True\na task whose domain label does not match the worker is refused, which catches careless routing; the finance manager in experiment 2 received a correctly labelled finance task and had no way to know that the user wanted legal, so a local check cannot replace a check against the original request.\n\n--- 4. Genuinely running: a department with nobody in it ---\nworkers: 0 | summary: legal assessment completed\nall() over an empty list is True, so a department with no workers reports its assessment as completed without any work having been done; a manager that must have workers has to reject an empty set explicitly.\n\n--- 5. Genuinely computing: why extra layers are not free ---\nthree transformations that each keep the requirements with probability 0.95: 0.8574\nthree summaries that each keep 90% of a chosen measure of information: 0.729\nunder these invented independent probabilities complete preservation drops to about 85.7% and retained information to 72.9% after three steps; the numbers are illustrations of compounding and not measurements, and real failures are correlated.\n\n--- 6. Genuinely computing: what a sub-manager summary saves and risks ---\nfifteen reports of 2000 tokens: 30000 | three summaries of 1000 tokens: 3000 | reduction: 90%\nthe top manager reads a tenth of the text it would otherwise read, at the price of the sub-managers own calls and of whatever detail the summaries drop; the token counts are example inputs from the lesson, so this shows the trade and does not measure any real saving."
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
    "headingEn": "Experiment 1: The correct delegation",
    "headingKn": "ಪ್ರಯೋಗ 1: The correct delegation",
    "bodyEn": "What it ran: The correct delegation. What the lab concluded: both required departments received work, the engineering manager used two workers and the legal manager one, and nothing required is missing; the verdict is called coverage satisfied and not success, because the findings are canned and no real review took place.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: The correct delegation. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): both required departments received work, the engineering manager used two workers and the legal manager one, and nothing required is missing; the verdict is called coverage satisfied and not success, because the findings are canned and no real review took place."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. Genuinely running: the correct delegation ---\ndelivered: ['engineering', 'legal'] | missing: [] | verdict: COVERAGE SATISFIED | workers run: 3"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: The same hierarchy with finance in place of legal",
    "headingKn": "ಪ್ರಯೋಗ 2: The same hierarchy with finance in place of legal",
    "bodyEn": "What it ran: The same hierarchy with finance in place of legal. What the lab concluded: each department and each worker finished correctly and the run still fails the original request, because legal was never delegated; local execution success cannot show a decomposition error, so the check has to compare what was delivered with what was asked.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: The same hierarchy with finance in place of legal. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): each department and each worker finished correctly and the run still fails the original request, because legal was never delegated; local execution success cannot show a decomposition error, so the check has to compare what was delivered with what was asked."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely running: the same hierarchy with finance in place of legal ---\ndelivered: ['engineering', 'finance'] | missing: ['legal'] | verdict: INCOMPLETE\nevery report says completed: True | every worker reported success: True"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: A mislabelled task against a worker",
    "headingKn": "ಪ್ರಯೋಗ 3: A mislabelled task against a worker",
    "bodyEn": "What it ran: A mislabelled task against a worker. What the lab concluded: a task whose domain label does not match the worker is refused, which catches careless routing; the finance manager in experiment 2 received a correctly labelled finance task and had no way to know that the user wanted legal, so a local check cannot replace a check against the original request.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A mislabelled task against a worker. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a task whose domain label does not match the worker is refused, which catches careless routing; the finance manager in experiment 2 received a correctly labelled finance task and had no way to know that the user wanted legal, so a local check cannot replace a check against the original request."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely running: a mislabelled task against a worker ---\nlegal task to the finance worker: False ['cannot handle domain legal'] | finance task to the finance worker: True"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 4: A department with nobody in it",
    "headingKn": "ಪ್ರಯೋಗ 4: A department with nobody in it",
    "bodyEn": "What it ran: A department with nobody in it. What the lab concluded: all() over an empty list is True, so a department with no workers reports its assessment as completed without any work having been done; a manager that must have workers has to reject an empty set explicitly.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A department with nobody in it. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): all() over an empty list is True, so a department with no workers reports its assessment as completed without any work having been done; a manager that must have workers has to reject an empty set explicitly."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 4. Genuinely running: a department with nobody in it ---\nworkers: 0 | summary: legal assessment completed"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 5: Why extra layers are not free",
    "headingKn": "ಪ್ರಯೋಗ 5: Why extra layers are not free",
    "bodyEn": "What it ran: Why extra layers are not free. What the lab concluded: under these invented independent probabilities complete preservation drops to about 85.7% and retained information to 72.9% after three steps; the numbers are illustrations of compounding and not measurements, and real failures are correlated.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Why extra layers are not free. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): under these invented independent probabilities complete preservation drops to about 85.7% and retained information to 72.9% after three steps; the numbers are illustrations of compounding and not measurements, and real failures are correlated."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 5. Genuinely computing: why extra layers are not free ---\nthree transformations that each keep the requirements with probability 0.95: 0.8574\nthree summaries that each keep 90% of a chosen measure of information: 0.729"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 6: What a sub-manager summary saves and risks",
    "headingKn": "ಪ್ರಯೋಗ 6: What a sub-manager summary saves and risks",
    "bodyEn": "What it ran: What a sub-manager summary saves and risks. What the lab concluded: the top manager reads a tenth of the text it would otherwise read, at the price of the sub-managers own calls and of whatever detail the summaries drop; the token counts are example inputs from the lesson, so this shows the trade and does not measure any real saving.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: What a sub-manager summary saves and risks. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the top manager reads a tenth of the text it would otherwise read, at the price of the sub-managers own calls and of whatever detail the summaries drop; the token counts are example inputs from the lesson, so this shows the trade and does not measure any real saving."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 6. Genuinely computing: what a sub-manager summary saves and risks ---\nfifteen reports of 2000 tokens: 30000 | three summaries of 1000 tokens: 3000 | reduction: 90%"
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
    "headingEn": "Genuinely Found: Right Work, Wrong Goal",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಸರಿಯಾದ ಕೆಲಸ, ತಪ್ಪು ಗುರಿ",
    "bodyEn": "Section 1: the correct delegation delivered engineering and legal with nothing missing, the verdict COVERAGE SATISFIED and 3 workers run. Section 2: with finance in place of legal the delivered domains were engineering and finance, legal was missing and the verdict was INCOMPLETE while every report said completed and every worker reported success. Section 3: a legal task sent to the finance worker failed with cannot handle domain legal and a finance task passed.",
    "bodyKn": "ವಿಭಾಗ 1: ಸರಿಯಾದ ನಿಯೋಜನೆ ಏನೂ ಕಾಣೆಯಾಗದೆ engineering ಮತ್ತು legal ಒದಗಿಸಿತು, ತೀರ್ಪು COVERAGE SATISFIED ಮತ್ತು 3 ಕೆಲಸಗಾರರು ಓಡಿದರು. ವಿಭಾಗ 2: legal ಬದಲು finance ಇದ್ದಾಗ ಒದಗಿಸಿದ ಡೊಮೇನ್‌ಗಳು engineering ಮತ್ತು finance ಆಗಿದ್ದವು, legal ಕಾಣೆಯಾಗಿತ್ತು ಮತ್ತು ತೀರ್ಪು INCOMPLETE ಆಗಿತ್ತು, ಆದರೆ ಪ್ರತಿ ವರದಿ completed ಎಂದಿತು ಮತ್ತು ಪ್ರತಿ ಕೆಲಸಗಾರ ಯಶಸ್ಸು ವರದಿ ಮಾಡಿದನು. ವಿಭಾಗ 3: finance ಕೆಲಸಗಾರನಿಗೆ ಕಳುಹಿಸಿದ legal ಕೆಲಸ cannot handle domain legal ಯೊಂದಿಗೆ ವಿಫಲವಾಯಿತು ಮತ್ತು finance ಕೆಲಸ ಪಾಸಾಯಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Empty Departments and Compounding",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಖಾಲಿ ವಿಭಾಗಗಳು ಮತ್ತು ಸಂಯೋಜನೆ",
    "bodyEn": "Section 4: a department with 0 workers reported legal assessment completed. Section 5: 0.95 cubed was 0.8574 and 0.9 cubed was 0.729. Section 6: fifteen reports of 2000 tokens come to 30000, three summaries of 1000 tokens come to 3000, a reduction of 90%.",
    "bodyKn": "ವಿಭಾಗ 4: 0 ಕೆಲಸಗಾರರಿರುವ ವಿಭಾಗ legal assessment completed ಎಂದು ವರದಿ ಮಾಡಿತು. ವಿಭಾಗ 5: 0.95 ರ ಘನ 0.8574 ಮತ್ತು 0.9 ರ ಘನ 0.729 ಆಗಿತ್ತು. ವಿಭಾಗ 6: 2000 tokens ನ ಹದಿನೈದು ವರದಿಗಳು 30000, 1000 tokens ನ ಮೂರು ಸಾರಾಂಶಗಳು 3000 ಆಗುತ್ತವೆ, 90% ಇಳಿಕೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A hierarchy earns its cost when the problem has independent departments with their own coordination, and the cost shows up as places where the meaning of the request can drift, which is why the original request has to be checked at the end.",
    "bodyKn": "ಸ್ವತಂತ್ರ ವಿಭಾಗಗಳು ತಮ್ಮದೇ ಸಮನ್ವಯದೊಂದಿಗೆ ಇರುವ ಸಮಸ್ಯೆಗೆ ಶ್ರೇಣಿ ತನ್ನ ವೆಚ್ಚ ಸಾರ್ಥಕಗೊಳಿಸುತ್ತದೆ, ಮತ್ತು ವೆಚ್ಚ ವಿನಂತಿಯ ಅರ್ಥ ಬದಲಾಗಬಹುದಾದ ಸ್ಥಳಗಳಲ್ಲಿ ಕಾಣಿಸುತ್ತದೆ, ಆದ್ದರಿಂದ ಮೂಲ ವಿನಂತಿಯನ್ನು ಕೊನೆಯಲ್ಲಿ ಪರಿಶೀಲಿಸಬೇಕು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"if every department reports completed the task is done.\" In experiment 2 every report said completed and the legal requirement was never delegated.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಪ್ರತಿ ವಿಭಾಗ completed ಎಂದರೆ ಕೆಲಸ ಮುಗಿದಿದೆ.\" ಪ್ರಯೋಗ 2 ರಲ್ಲಿ ಪ್ರತಿ ವರದಿ completed ಎಂದಿತು ಮತ್ತು legal ಅವಶ್ಯಕತೆ ಎಂದೂ ನಿಯೋಜಿಸಲ್ಪಡಲಿಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Top manager: splits the goal. Sub-manager: owns a department. Worker: a leaf that executes. Decomposition: dividing a goal into parts. Coverage: the delivered work includes everything the request required.",
    "bodyKn": "ಮೇಲ್ಮಟ್ಟದ ಮ್ಯಾನೇಜರ್: ಗುರಿಯನ್ನು ವಿಭಜಿಸುತ್ತಾನೆ. ಉಪ-ಮ್ಯಾನೇಜರ್: ವಿಭಾಗವನ್ನು ಹೊಂದಿದ್ದಾನೆ. ಕೆಲಸಗಾರ: ನಡೆಸುವ ಎಲೆ. ವಿಭಜನೆ: ಗುರಿಯನ್ನು ಭಾಗಗಳಾಗಿ ಒಡೆಯುವುದು. ವ್ಯಾಪ್ತಿ: ಒದಗಿಸಿದ ಕೆಲಸ ವಿನಂತಿ ಬಯಸಿದ ಎಲ್ಲವನ್ನೂ ಒಳಗೊಂಡಿರುವುದು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) The wrong delegation had every worker succeed and still missed legal. 2) A mislabelled task was refused by the worker but a correctly labelled wrong task was not. 3) An empty department reported completed. 4) Three steps at 0.95 keep 85.7% under the invented assumptions. 5) Three summaries cut 30000 tokens to 3000 at the cost of detail.",
    "bodyKn": "1) ತಪ್ಪು ನಿಯೋಜನೆಯಲ್ಲಿ ಪ್ರತಿ ಕೆಲಸಗಾರ ಯಶಸ್ವಿಯಾದರೂ legal ತಪ್ಪಿತು. 2) ತಪ್ಪು ಲೇಬಲ್ ಕೆಲಸವನ್ನು ಕೆಲಸಗಾರ ನಿರಾಕರಿಸಿತು ಆದರೆ ಸರಿಯಾದ ಲೇಬಲ್‌ನ ತಪ್ಪು ಕೆಲಸವನ್ನು ಅಲ್ಲ. 3) ಖಾಲಿ ವಿಭಾಗ completed ಎಂದು ವರದಿ ಮಾಡಿತು. 4) 0.95 ರ ಮೂರು ಹಂತಗಳು ಕಲ್ಪಿತ ಊಹೆಗಳಲ್ಲಿ 85.7% ಉಳಿಸುತ್ತವೆ. 5) ಮೂರು ಸಾರಾಂಶಗಳು 30000 tokens ಅನ್ನು ವಿವರಗಳ ವೆಚ್ಚದಲ್ಲಿ 3000 ಕ್ಕೆ ಇಳಿಸುತ್ತವೆ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "Which domain was missing when finance replaced legal?",
      "qKn": "finance legal ಅನ್ನು ಬದಲಿಸಿದಾಗ ಯಾವ ಡೊಮೇನ್ ಕಾಣೆಯಾಗಿತ್ತು?",
      "opts": [
       "legal",
       "engineering",
       "finance",
       "none"
      ],
      "optsKn": [
       "legal",
       "engineering",
       "finance",
       "ಯಾವುದೂ ಇಲ್ಲ"
      ],
      "correct": 0
     },
     {
      "q": "What did a department with no workers report?",
      "qKn": "ಕೆಲಸಗಾರರಿಲ್ಲದ ವಿಭಾಗ ಏನು ವರದಿ ಮಾಡಿತು?",
      "opts": [
       "legal assessment completed",
       "legal assessment failed",
       "nothing",
       "an error"
      ],
      "optsKn": [
       "legal assessment completed",
       "legal assessment failed",
       "ಏನೂ ಇಲ್ಲ",
       "ದೋಷ"
      ],
      "correct": 0
     },
     {
      "q": "What is 0.95 cubed to four places?",
      "qKn": "0.95 ರ ಘನ ನಾಲ್ಕು ಸ್ಥಾನಗಳಿಗೆ ಎಷ್ಟು?",
      "opts": [
       "0.8574",
       "0.9500",
       "0.7290",
       "0.9025"
      ],
      "optsKn": [
       "0.8574",
       "0.9500",
       "0.7290",
       "0.9025"
      ],
      "correct": 0
     },
     {
      "q": "What verdict did the correct delegation get?",
      "qKn": "ಸರಿಯಾದ ನಿಯೋಜನೆಗೆ ಯಾವ ತೀರ್ಪು ಸಿಕ್ಕಿತು?",
      "opts": [
       "COVERAGE SATISFIED",
       "INCOMPLETE",
       "SUCCESS",
       "FAILED"
      ],
      "optsKn": [
       "COVERAGE SATISFIED",
       "INCOMPLETE",
       "SUCCESS",
       "FAILED"
      ],
      "correct": 0
     },
     {
      "q": "By what percentage did three summaries reduce fifteen 2000-token reports?",
      "qKn": "ಮೂರು ಸಾರಾಂಶಗಳು ಹದಿನೈದು 2000-token ವರದಿಗಳನ್ನು ಎಷ್ಟು ಶೇಕಡಾ ಕಡಿಮೆ ಮಾಡಿದವು?",
      "opts": [
       "90%",
       "50%",
       "10%",
       "75%"
      ],
      "optsKn": [
       "90%",
       "50%",
       "10%",
       "75%"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
