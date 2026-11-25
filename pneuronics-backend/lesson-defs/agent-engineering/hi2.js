module.exports = {
 "phaseId": "6a369d6466020ed05b3215d1",
 "moduleId": "6a369d6566020ed05b3215e6",
 "order": 1,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Hierarchical Architecture and Its Failure Mode (Part 2 of 3) — Safeguards Against Drift",
 "titleKn": "ಶ್ರೇಣಿ ವಾಸ್ತುಶಿಲ್ಪ ಮತ್ತು ಅದರ ವೈಫಲ್ಯ ವಿಧಾನ (ಭಾಗ 2 / 3) — ಜಾರುವಿಕೆ ವಿರುದ್ಧ ಸುರಕ್ಷತೆಗಳು",
 "desc": "Build plan checks, requirement contracts, claim status, bounded reconciliation, a canary and provenance.",
 "descKn": "ಯೋಜನೆ ಪರಿಶೀಲನೆ, ಅವಶ್ಯಕತೆ ಒಪ್ಪಂದ, ಹೇಳಿಕೆ ಸ್ಥಿತಿ, ಮಿತಿಯ ಸಮನ್ವಯ, canary ಮತ್ತು provenance ನಿರ್ಮಿಸಿ.",
 "objectives": [
  "Check a plan first.",
  "Keep requirements.",
  "Preserve unknown.",
  "Bound reconciliation.",
  "Trace evidence."
 ],
 "objectivesKn": [
  "ಮೊದಲು ಯೋಜನೆ ಪರಿಶೀಲಿಸಿ.",
  "ಅವಶ್ಯಕತೆಗಳನ್ನು ಉಳಿಸಿ.",
  "unknown ಉಳಿಸಿ.",
  "ಸಮನ್ವಯಕ್ಕೆ ಮಿತಿ ಇಡಿ.",
  "ಸಾಕ್ಷಿ ಜಾಡು ಹಿಡಿಯಿರಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Hierarchical Architecture and Its Failure Mode (Part 2 of 3)",
    "textKn": "ಶ್ರೇಣಿ ವಾಸ್ತುಶಿಲ್ಪ ಮತ್ತು ಅದರ ವೈಫಲ್ಯ ವಿಧಾನ (ಭಾಗ 2 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 2 of 3: a plan checked before it runs, a narrowed requirement, three-valued claims, bounded reconciliation with no-progress detection, an immutable canary and a provenance chain. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind a three-level hierarchy of agents and how it fails (a wrong delegation that every worker executes faithfully, narrowed requirements, unknown turned into certainty, reconciliation loops, provenance, a pattern chooser, a gate before delegation and a generated fitness document), not the real software, and managers and workers are scripted functions with canned findings, the scoring rules are our own heuristic, the evidence references are mock strings and no real engineering, legal or finance review happens, so no real LLM behaviour is measured. The original code/main.py was not supplied, so the labs are our own implementation. The CrewAI and LangGraph material in the lesson is conceptual and was not run, and the depth-2 remark is a design heuristic and not a proven threshold. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 2ನೆಯದು: ಓಡುವ ಮೊದಲು ಪರಿಶೀಲಿಸಿದ ಯೋಜನೆ, ಕಿರಿದಾದ ಅವಶ್ಯಕತೆ, ಮೂರು-ಮೌಲ್ಯದ ಹೇಳಿಕೆಗಳು, no-progress ಪತ್ತೆಯೊಂದಿಗೆ ಮಿತಿಯ ಸಮನ್ವಯ, ಬದಲಾಗದ canary ಮತ್ತು provenance ಸರಪಳಿ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು ಏಜೆಂಟ್‌ಗಳ ಮೂರು-ಹಂತದ ಶ್ರೇಣಿ ಮತ್ತು ಅದು ಹೇಗೆ ವಿಫಲವಾಗುತ್ತದೆ (ಪ್ರತಿ ಕೆಲಸಗಾರ ನಿಷ್ಠೆಯಿಂದ ನಡೆಸುವ ತಪ್ಪು ನಿಯೋಜನೆ, ಕಿರಿದಾದ ಅವಶ್ಯಕತೆಗಳು, ನಿಶ್ಚಿತತೆಯಾಗಿ ಬದಲಾದ ಅಜ್ಞಾತ, ಸಮನ್ವಯ ಲೂಪ್‌ಗಳು, provenance, ಮಾದರಿ ಆಯ್ಕೆಕಾರ, ನಿಯೋಜನೆಯ ಮೊದಲಿನ ದ್ವಾರ ಮತ್ತು ರಚಿತ fitness ದಾಖಲೆ) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಮ್ಯಾನೇಜರ್‌ಗಳು ಮತ್ತು ಕೆಲಸಗಾರರು ಸಿದ್ಧ ಕಂಡುಹಿಡಿಕೆಗಳ ಸ್ಕ್ರಿಪ್ಟ್ ಕಾರ್ಯಗಳು, ಅಂಕ ನಿಯಮಗಳು ನಮ್ಮದೇ ಹ್ಯೂರಿಸ್ಟಿಕ್, ಸಾಕ್ಷಿ ಉಲ್ಲೇಖಗಳು ನಕಲಿ ಸ್ಟ್ರಿಂಗ್‌ಗಳು ಮತ್ತು ಯಾವುದೇ ನಿಜವಾದ engineering, legal ಅಥವಾ finance ವಿಮರ್ಶೆ ನಡೆಯುವುದಿಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ code/main.py ನೀಡಲಾಗಿಲ್ಲ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ನಮ್ಮದೇ ಅನುಷ್ಠಾನ. lesson ನ CrewAI ಮತ್ತು LangGraph ವಿಷಯ ಪರಿಕಲ್ಪನಾತ್ಮಕ ಮತ್ತು ಓಡಿಸಲಾಗಿಲ್ಲ, ಮತ್ತು depth-2 ಟಿಪ್ಪಣಿ ವಿನ್ಯಾಸ ಹ್ಯೂರಿಸ್ಟಿಕ್, ಸಾಬೀತಾದ ಮಿತಿಯಲ್ಲ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Catching Drift Before It Spreads",
    "textKn": "ಜಾರುವಿಕೆ ಹರಡುವ ಮೊದಲು ಹಿಡಿಯುವುದು",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Decomposition, Claim Status, Reconciliation and Provenance",
    "headingKn": "ವಿಭಜನೆ, ಹೇಳಿಕೆ ಸ್ಥಿತಿ, ಸಮನ್ವಯ ಮತ್ತು Provenance",
    "bodyEn": "Part 1 showed a hierarchy that finished everything and missed the request. This part builds the safeguards the lesson proposes for the four failure modes. A plan is checked against the original request before anything runs. A narrowed requirement is found by keeping the original set beside the assigned one. A claim carries supported, refuted or unknown, and a careless summary shows how unknown turns into certainty. Reconciliation has an attempt limit and stops early when the same evidence comes round again. A canary compares the plan with an immutable copy of the request, and a provenance chain ties a final claim back to a finding and an evidence record.",
    "bodyKn": "Part 1 ಎಲ್ಲವನ್ನೂ ಮುಗಿಸಿಯೂ ವಿನಂತಿಯನ್ನು ತಪ್ಪಿಸಿದ ಶ್ರೇಣಿಯನ್ನು ತೋರಿಸಿತು. ಈ ಭಾಗವು ನಾಲ್ಕು ವೈಫಲ್ಯ ವಿಧಾನಗಳಿಗೆ lesson ಪ್ರಸ್ತಾಪಿಸುವ ಸುರಕ್ಷತೆಗಳನ್ನು ನಿರ್ಮಿಸುತ್ತದೆ. ಏನೂ ಓಡುವ ಮೊದಲು ಯೋಜನೆಯನ್ನು ಮೂಲ ವಿನಂತಿಯ ವಿರುದ್ಧ ಪರಿಶೀಲಿಸಲಾಗುತ್ತದೆ. ಮೂಲ ಸೆಟ್ ಅನ್ನು ನಿಯೋಜಿತ ಸೆಟ್‌ನ ಪಕ್ಕದಲ್ಲಿ ಇಟ್ಟು ಕಿರಿದಾದ ಅವಶ್ಯಕತೆ ಕಂಡುಹಿಡಿಯಲಾಗುತ್ತದೆ. ಹೇಳಿಕೆ supported, refuted ಅಥವಾ unknown ಹೊತ್ತಿರುತ್ತದೆ, ಮತ್ತು ಅಜಾಗರೂಕ ಸಾರಾಂಶ unknown ಹೇಗೆ ನಿಶ್ಚಿತತೆಯಾಗುತ್ತದೆ ಎಂದು ತೋರಿಸುತ್ತದೆ. ಸಮನ್ವಯಕ್ಕೆ ಪ್ರಯತ್ನ ಮಿತಿ ಇದೆ ಮತ್ತು ಅದೇ ಸಾಕ್ಷಿ ಮತ್ತೆ ಬಂದಾಗ ಬೇಗ ನಿಲ್ಲುತ್ತದೆ. canary ಯೋಜನೆಯನ್ನು ವಿನಂತಿಯ ಬದಲಾಗದ ಪ್ರತಿಯೊಂದಿಗೆ ಹೋಲಿಸುತ್ತದೆ, ಮತ್ತು provenance ಸರಪಳಿ ಅಂತಿಮ ಹೇಳಿಕೆಯನ್ನು ಕಂಡುಹಿಡಿಕೆ ಮತ್ತು ಸಾಕ್ಷಿ ದಾಖಲೆಗೆ ಕಟ್ಟುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Safeguards Between the Layers",
    "headingKn": "ಪದರಗಳ ನಡುವೆ ಸುರಕ್ಷತೆಗಳು",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">safeguards against drift sit between the layers</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">plan check</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">before delegation</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">claim status</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">unknown stays unknown</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">reconcile</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">bounded, stops on no progress</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">provenance</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">claim back to evidence</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">safeguards against drift sit between the layers</text></svg>",
    "captionEn": "Check the plan, keep the status, bound the retries and trace the evidence.",
    "captionKn": "ಯೋಜನೆ ಪರಿಶೀಲಿಸಿ, ಸ್ಥಿತಿ ಉಳಿಸಿ, ಮರುಪ್ರಯತ್ನಗಳಿಗೆ ಮಿತಿ ಇಡಿ ಮತ್ತು ಸಾಕ್ಷಿ ಜಾಡು ಹಿಡಿಯಿರಿ."
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
      "plan check",
      "correct, swapped and extra-branch plans"
     ],
     [
      "narrowed requirement",
      "three requirements, one delegated"
     ],
     [
      "claim status",
      "supported, refuted, unknown and a lossy summary"
     ],
     [
      "reconciliation",
      "three attempts, same-evidence stop, early agreement"
     ],
     [
      "canary",
      "a manager rewrite against the original"
     ],
     [
      "provenance",
      "good chain and two broken chains"
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
    "filename": "hi_2.py",
    "headingEn": "Plan and requirement checks",
    "headingKn": "ಯೋಜನೆ ಮತ್ತು ಅವಶ್ಯಕತೆ ಪರಿಶೀಲನೆ",
    "descEn": "verify_decomposition reports missing and extra domains and RequirementContract lists the requirements the assigned task dropped.",
    "descKn": "verify_decomposition ಕಾಣೆಯಾದ ಮತ್ತು ಹೆಚ್ಚುವರಿ ಡೊಮೇನ್‌ಗಳನ್ನು ವರದಿ ಮಾಡುತ್ತದೆ ಮತ್ತು RequirementContract ನಿಯೋಜಿತ ಕೆಲಸ ಬಿಟ್ಟ ಅವಶ್ಯಕತೆಗಳನ್ನು ಪಟ್ಟಿ ಮಾಡುತ್ತದೆ.",
    "code": "class UserRequest:\n    description: str\n    required_domains: frozenset\n\n\ndef verify_decomposition(request, assigned_domains):\n    required, assigned = set(request.required_domains), set(assigned_domains)\n    return {\"valid\": not (required - assigned), \"missing\": sorted(required - assigned), \"extra\": sorted(assigned - required)}\n\n\n@dataclass(frozen=True)\nclass RequirementContract:\n    task_id: str\n    original_requirements: frozenset\n    assigned_requirements: frozenset\n\n    def missing(self):\n        return sorted(self.original_requirements - self.assigned_requirements)"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "hi_2.py",
    "headingEn": "Claims, reconciliation, canary and provenance",
    "headingKn": "ಹೇಳಿಕೆಗಳು, ಸಮನ್ವಯ, canary ಮತ್ತು provenance",
    "descEn": "ClaimStatus keeps three values, reconcile bounds attempts and stops when a fingerprint repeats, CanaryContract holds the original, and validate_provenance names a missing finding or evidence record.",
    "descKn": "ClaimStatus ಮೂರು ಮೌಲ್ಯಗಳನ್ನು ಉಳಿಸುತ್ತದೆ, reconcile ಪ್ರಯತ್ನಗಳಿಗೆ ಮಿತಿ ಇಟ್ಟು fingerprint ಪುನರಾವರ್ತಿತವಾದಾಗ ನಿಲ್ಲುತ್ತದೆ, CanaryContract ಮೂಲವನ್ನು ಹಿಡಿದಿದೆ, ಮತ್ತು validate_provenance ಕಾಣೆಯಾದ ಕಂಡುಹಿಡಿಕೆ ಅಥವಾ ಸಾಕ್ಷಿ ದಾಖಲೆ ಹೆಸರಿಸುತ್ತದೆ.",
    "code": "class ClaimStatus(str, Enum):\n    SUPPORTED = \"supported\"\n    REFUTED = \"refuted\"\n    UNKNOWN = \"unknown\"\n\n\ndef preserving_summary(statement, status):\n    return {ClaimStatus.SUPPORTED: f\"{statement}: supported by available evidence.\", ClaimStatus.REFUTED: f\"{statement}: contradicted by available evidence.\", ClaimStatus.UNKNOWN: f\"{statement}: unable to determine from available evidence.\"}[status]\n\n\ndef lossy_summary(statement, status):\n    return f\"{statement}: confirmed.\" if status != ClaimStatus.REFUTED else f\"{statement}: false.\"\n\n\ndef task_fingerprint(task_name, inputs):\n    payload = json.dumps({\"task_name\": task_name, \"inputs\": inputs}, sort_keys=True, separators=(\",\", \":\")).encode(\"utf-8\")\n    return hashlib.sha256(payload).hexdigest()\n\n\ndef reconcile(check_agreement, evidence_for, max_attempts):\n    seen, attempts = [], 0\n    for attempt in range(1, max_attempts + 1):\n        attempts = attempt\n        if check_agreement(attempt):\n            return {\"resolved\": True, \"attempts\": attempts, \"status\": \"RESOLVED\"}\n        fp = task_fingerprint(\"rerun\", evidence_for(attempt))\n        if fp in seen:\n            return {\"resolved\": False, \"attempts\": attempts, \"status\": \"ESCALATE_NO_PROGRESS\"}\n        seen.append(fp)\n    return {\"resolved\": False, \"attempts\": attempts, \"status\": \"ESCALATE\"}\n\n\n@dataclass(frozen=True)\nclass CanaryContract:\n    original_question: str\n    required_domains: frozenset\n\n\ndef canary_check(contract, delegated_domains):\n    missing = sorted(contract.required_domains - set(delegated_domains))\n    return {\"passed\": not missing, \"missing\": missing}\n\n\ndef validate_provenance(summary, findings, evidence):\n    errors = []\n    for fid in summary[\"finding_ids\"]:\n        f = findings.get(fid)\n        if f is None:\n            errors.append(f\"summary cites unknown finding {fid}\")\n            continue\n        for eid in f[\"evidence_ids\"]:\n            if eid not in evidence:\n                errors.append(f\"finding {fid} cites unknown evidence {eid}\")\n    return errors"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "hi_2.py",
    "headingEn": "The experiments",
    "headingKn": "ಪ್ರಯೋಗಗಳು",
    "descEn": "main() runs the six experiments in order and prints the real result of each.",
    "descKn": "main() ಆರು ಪ್ರಯೋಗಗಳನ್ನು ಕ್ರಮವಾಗಿ ಓಡಿಸಿ ಪ್ರತಿಯೊಂದರ ನಿಜ ಫಲಿತಾಂಶ ಮುದ್ರಿಸುತ್ತದೆ.",
    "code": "def main():\n    section(\"1. Genuinely running: checking a plan before anything runs\")\n    req = UserRequest(\"Assess engineering and legal readiness\", frozenset({\"engineering\", \"legal\"}))\n    print(\"correct plan:\", verify_decomposition(req, [\"engineering\", \"legal\"]))\n    print(\"finance for legal:\", verify_decomposition(req, [\"engineering\", \"finance\"]))\n    print(\"extra security work:\", verify_decomposition(req, [\"engineering\", \"legal\", \"security\"]))\n    print(\"the plan that swaps legal for finance is rejected with legal named as missing and finance as extra, and an additional security branch is valid because nothing required is missing; extra work is reported and not blocked, so a separate rule has to decide whether extra work is allowed.\")\n\n    section(\"2. Genuinely running: a narrowed requirement\")\n    contract = RequirementContract(\"security-review\", frozenset({\"authentication\", \"authorization\", \"data_protection\"}), frozenset({\"authentication\"}))\n    print(\"missing requirements:\", contract.missing())\n    print(\"the original asked for application security in three parts and the delegated task kept one, so authorization and data_protection are lost between the request and the worker; keeping the original set beside the assigned one is what makes the loss visible.\")\n\n    section(\"3. Genuinely running: unknown must stay unknown\")\n    for st in ClaimStatus:\n        print(f\"{st.value}: preserving -> {preserving_summary('The system satisfies privacy requirements', st)}\")\n    print(\"lossy for unknown ->\", lossy_summary(\"The system satisfies privacy requirements\", ClaimStatus.UNKNOWN))\n    print(\"the preserving summary says unable to determine for an unknown claim, while the lossy one turns the same unknown into confirmed, so a summary step can create certainty that no worker had; a separate execution status and claim status stops that at the data level.\")\n\n    section(\"4. Genuinely running: bounded reconciliation and no-progress detection\")\n    print(\"never agrees, evidence changes each time:\", reconcile(lambda a: False, lambda a: {\"round\": a}, 3))\n    print(\"never agrees, same evidence every time:\", reconcile(lambda a: False, lambda a: {\"round\": \"same\"}, 5))\n    print(\"agrees on attempt 2:\", reconcile(lambda a: a == 2, lambda a: {\"round\": a}, 3))\n    same = task_fingerprint(\"verify_authentication\", {\"application_version\": \"1.2\", \"configuration_revision\": 8}) == task_fingerprint(\"verify_authentication\", {\"configuration_revision\": 8, \"application_version\": \"1.2\"})\n    print(\"fingerprint ignores key order:\", same)\n    print(\"with changing evidence the loop used its three attempts and escalated, with identical evidence it escalated on the second attempt without waiting for the fifth, and a real agreement ended it at once; an equal fingerprint says the inputs repeated and does not prove that the result would repeat.\")\n\n    section(\"5. Genuinely running: an immutable copy of the original request\")\n    canary = CanaryContract(\"Assess engineering and legal readiness\", frozenset({\"engineering\", \"legal\"}))\n    manager_rewrite = \"Assess technical and financial readiness\"\n    print(\"manager rewrote the task as:\", manager_rewrite)\n    print(\"canary against the delegated domains:\", canary_check(canary, [\"engineering\", \"finance\"]), \"| against a correct plan:\", canary_check(canary, [\"engineering\", \"legal\"]))\n    print(\"the manager rewrite of the task text does not change what the canary compares against, so the missing legal work is still found; a canary built from the same biased reading as the manager would miss it, which is why it only detects drift and does not prove correctness.\")\n\n    section(\"6. Genuinely running: tracing a claim back to evidence\")\n    evidence = {\"E-001\": {\"source\": \"api-test-results.json\"}}\n    findings = {\"F-001\": {\"worker\": \"backend_worker\", \"statement\": \"API tests passed\", \"evidence_ids\": [\"E-001\"]}}\n    good = {\"summary_id\": \"S-1\", \"finding_ids\": [\"F-001\"]}\n    broken = {\"summary_id\": \"S-2\", \"finding_ids\": [\"F-999\"]}\n    dangling = {\"F-002\": {\"worker\": \"ui_worker\", \"statement\": \"UI checked\", \"evidence_ids\": [\"E-404\"]}}\n    print(\"good chain:\", validate_provenance(good, findings, evidence))\n    print(\"summary citing a missing finding:\", validate_provenance(broken, findings, evidence))\n    print(\"finding citing missing evidence:\", validate_provenance({\"summary_id\": \"S-3\", \"finding_ids\": [\"F-002\"]}, dangling, evidence))\n    print(\"a complete chain gives no errors and both broken chains are named, which makes a final claim checkable back to a worker finding and an evidence record; the record E-001 here is a dictionary entry, so nothing proves that the file exists or says what the finding claims.\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: checking a plan before anything runs ---\ncorrect plan: {'valid': True, 'missing': [], 'extra': []}\nfinance for legal: {'valid': False, 'missing': ['legal'], 'extra': ['finance']}\nextra security work: {'valid': True, 'missing': [], 'extra': ['security']}\nthe plan that swaps legal for finance is rejected with legal named as missing and finance as extra, and an additional security branch is valid because nothing required is missing; extra work is reported and not blocked, so a separate rule has to decide whether extra work is allowed.\n\n--- 2. Genuinely running: a narrowed requirement ---\nmissing requirements: ['authorization', 'data_protection']\nthe original asked for application security in three parts and the delegated task kept one, so authorization and data_protection are lost between the request and the worker; keeping the original set beside the assigned one is what makes the loss visible.\n\n--- 3. Genuinely running: unknown must stay unknown ---\nsupported: preserving -> The system satisfies privacy requirements: supported by available evidence.\nrefuted: preserving -> The system satisfies privacy requirements: contradicted by available evidence.\nunknown: preserving -> The system satisfies privacy requirements: unable to determine from available evidence.\nlossy for unknown -> The system satisfies privacy requirements: confirmed.\nthe preserving summary says unable to determine for an unknown claim, while the lossy one turns the same unknown into confirmed, so a summary step can create certainty that no worker had; a separate execution status and claim status stops that at the data level.\n\n--- 4. Genuinely running: bounded reconciliation and no-progress detection ---\nnever agrees, evidence changes each time: {'resolved': False, 'attempts': 3, 'status': 'ESCALATE'}\nnever agrees, same evidence every time: {'resolved': False, 'attempts': 2, 'status': 'ESCALATE_NO_PROGRESS'}\nagrees on attempt 2: {'resolved': True, 'attempts': 2, 'status': 'RESOLVED'}\nfingerprint ignores key order: True\nwith changing evidence the loop used its three attempts and escalated, with identical evidence it escalated on the second attempt without waiting for the fifth, and a real agreement ended it at once; an equal fingerprint says the inputs repeated and does not prove that the result would repeat.\n\n--- 5. Genuinely running: an immutable copy of the original request ---\nmanager rewrote the task as: Assess technical and financial readiness\ncanary against the delegated domains: {'passed': False, 'missing': ['legal']} | against a correct plan: {'passed': True, 'missing': []}\nthe manager rewrite of the task text does not change what the canary compares against, so the missing legal work is still found; a canary built from the same biased reading as the manager would miss it, which is why it only detects drift and does not prove correctness.\n\n--- 6. Genuinely running: tracing a claim back to evidence ---\ngood chain: []\nsummary citing a missing finding: ['summary cites unknown finding F-999']\nfinding citing missing evidence: ['finding F-002 cites unknown evidence E-404']\na complete chain gives no errors and both broken chains are named, which makes a final claim checkable back to a worker finding and an evidence record; the record E-001 here is a dictionary entry, so nothing proves that the file exists or says what the finding claims."
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
    "headingEn": "Experiment 1: Checking a plan before anything runs",
    "headingKn": "ಪ್ರಯೋಗ 1: Checking a plan before anything runs",
    "bodyEn": "What it ran: Checking a plan before anything runs. What the lab concluded: the plan that swaps legal for finance is rejected with legal named as missing and finance as extra, and an additional security branch is valid because nothing required is missing; extra work is reported and not blocked, so a separate rule has to decide whether extra work is allowed.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Checking a plan before anything runs. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the plan that swaps legal for finance is rejected with legal named as missing and finance as extra, and an additional security branch is valid because nothing required is missing; extra work is reported and not blocked, so a separate rule has to decide whether extra work is allowed."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. Genuinely running: checking a plan before anything runs ---\ncorrect plan: {'valid': True, 'missing': [], 'extra': []}\nfinance for legal: {'valid': False, 'missing': ['legal'], 'extra': ['finance']}\nextra security work: {'valid': True, 'missing': [], 'extra': ['security']}"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: A narrowed requirement",
    "headingKn": "ಪ್ರಯೋಗ 2: A narrowed requirement",
    "bodyEn": "What it ran: A narrowed requirement. What the lab concluded: the original asked for application security in three parts and the delegated task kept one, so authorization and data_protection are lost between the request and the worker; keeping the original set beside the assigned one is what makes the loss visible.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A narrowed requirement. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the original asked for application security in three parts and the delegated task kept one, so authorization and data_protection are lost between the request and the worker; keeping the original set beside the assigned one is what makes the loss visible."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely running: a narrowed requirement ---\nmissing requirements: ['authorization', 'data_protection']"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: Unknown must stay unknown",
    "headingKn": "ಪ್ರಯೋಗ 3: Unknown must stay unknown",
    "bodyEn": "What it ran: Unknown must stay unknown. What the lab concluded: the preserving summary says unable to determine for an unknown claim, while the lossy one turns the same unknown into confirmed, so a summary step can create certainty that no worker had; a separate execution status and claim status stops that at the data level.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Unknown must stay unknown. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the preserving summary says unable to determine for an unknown claim, while the lossy one turns the same unknown into confirmed, so a summary step can create certainty that no worker had; a separate execution status and claim status stops that at the data level."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely running: unknown must stay unknown ---\nsupported: preserving -> The system satisfies privacy requirements: supported by available evidence.\nrefuted: preserving -> The system satisfies privacy requirements: contradicted by available evidence.\nunknown: preserving -> The system satisfies privacy requirements: unable to determine from available evidence.\nlossy for unknown -> The system satisfies privacy requirements: confirmed."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 4: Bounded reconciliation and no-progress detection",
    "headingKn": "ಪ್ರಯೋಗ 4: Bounded reconciliation and no-progress detection",
    "bodyEn": "What it ran: Bounded reconciliation and no-progress detection. What the lab concluded: with changing evidence the loop used its three attempts and escalated, with identical evidence it escalated on the second attempt without waiting for the fifth, and a real agreement ended it at once; an equal fingerprint says the inputs repeated and does not prove that the result would repeat.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Bounded reconciliation and no-progress detection. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): with changing evidence the loop used its three attempts and escalated, with identical evidence it escalated on the second attempt without waiting for the fifth, and a real agreement ended it at once; an equal fingerprint says the inputs repeated and does not prove that the result would repeat."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 4. Genuinely running: bounded reconciliation and no-progress detection ---\nnever agrees, evidence changes each time: {'resolved': False, 'attempts': 3, 'status': 'ESCALATE'}\nnever agrees, same evidence every time: {'resolved': False, 'attempts': 2, 'status': 'ESCALATE_NO_PROGRESS'}\nagrees on attempt 2: {'resolved': True, 'attempts': 2, 'status': 'RESOLVED'}\nfingerprint ignores key order: True"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 5: An immutable copy of the original request",
    "headingKn": "ಪ್ರಯೋಗ 5: An immutable copy of the original request",
    "bodyEn": "What it ran: An immutable copy of the original request. What the lab concluded: the manager rewrite of the task text does not change what the canary compares against, so the missing legal work is still found; a canary built from the same biased reading as the manager would miss it, which is why it only detects drift and does not prove correctness.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: An immutable copy of the original request. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the manager rewrite of the task text does not change what the canary compares against, so the missing legal work is still found; a canary built from the same biased reading as the manager would miss it, which is why it only detects drift and does not prove correctness."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 5. Genuinely running: an immutable copy of the original request ---\nmanager rewrote the task as: Assess technical and financial readiness\ncanary against the delegated domains: {'passed': False, 'missing': ['legal']} | against a correct plan: {'passed': True, 'missing': []}"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 6: Tracing a claim back to evidence",
    "headingKn": "ಪ್ರಯೋಗ 6: Tracing a claim back to evidence",
    "bodyEn": "What it ran: Tracing a claim back to evidence. What the lab concluded: a complete chain gives no errors and both broken chains are named, which makes a final claim checkable back to a worker finding and an evidence record; the record E-001 here is a dictionary entry, so nothing proves that the file exists or says what the finding claims.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Tracing a claim back to evidence. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a complete chain gives no errors and both broken chains are named, which makes a final claim checkable back to a worker finding and an evidence record; the record E-001 here is a dictionary entry, so nothing proves that the file exists or says what the finding claims."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 6. Genuinely running: tracing a claim back to evidence ---\ngood chain: []\nsummary citing a missing finding: ['summary cites unknown finding F-999']\nfinding citing missing evidence: ['finding F-002 cites unknown evidence E-404']"
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
    "headingEn": "Genuinely Found: Plan, Requirement and Claim",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಯೋಜನೆ, ಅವಶ್ಯಕತೆ ಮತ್ತು ಹೇಳಿಕೆ",
    "bodyEn": "Section 1: the correct plan was valid, the finance-for-legal plan was invalid with legal missing and finance extra, and an extra security branch was valid with security extra. Section 2: the narrowed contract lost authorization and data_protection. Section 3: the preserving summary said unable to determine for unknown while the lossy summary turned the same unknown into confirmed.",
    "bodyKn": "ವಿಭಾಗ 1: ಸರಿಯಾದ ಯೋಜನೆ ಮಾನ್ಯ, legal ಬದಲು finance ಯೋಜನೆ legal ಕಾಣೆ ಮತ್ತು finance ಹೆಚ್ಚುವರಿ ಯೊಂದಿಗೆ ಅಮಾನ್ಯ, ಮತ್ತು ಹೆಚ್ಚುವರಿ security ಶಾಖೆ security ಹೆಚ್ಚುವರಿಯೊಂದಿಗೆ ಮಾನ್ಯ. ವಿಭಾಗ 2: ಕಿರಿದಾದ ಒಪ್ಪಂದ authorization ಮತ್ತು data_protection ಕಳೆದುಕೊಂಡಿತು. ವಿಭಾಗ 3: ಸಂರಕ್ಷಿಸುವ ಸಾರಾಂಶ unknown ಗೆ unable to determine ಎಂದಿತು, ಆದರೆ ನಷ್ಟವುಳ್ಳ ಸಾರಾಂಶ ಅದೇ unknown ಅನ್ನು confirmed ಆಗಿ ಬದಲಿಸಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Reconciliation, Canary and Provenance",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಸಮನ್ವಯ, Canary ಮತ್ತು Provenance",
    "bodyEn": "Section 4: changing evidence escalated after 3 attempts, identical evidence escalated with ESCALATE_NO_PROGRESS after 2, agreement on attempt 2 resolved, and the fingerprint ignored key order. Section 5: the canary reported legal missing from the finance plan and passed the correct plan. Section 6: the good chain gave no errors and two broken chains were named, F-999 unknown and E-404 unknown.",
    "bodyKn": "ವಿಭಾಗ 4: ಬದಲಾಗುವ ಸಾಕ್ಷಿ 3 ಪ್ರಯತ್ನಗಳ ನಂತರ ಎಸ್ಕಲೇಟ್ ಆಯಿತು, ಅದೇ ಸಾಕ್ಷಿ 2 ರ ನಂತರ ESCALATE_NO_PROGRESS ಯೊಂದಿಗೆ ಎಸ್ಕಲೇಟ್ ಆಯಿತು, ಪ್ರಯತ್ನ 2 ರಲ್ಲಿ ಒಪ್ಪಿಗೆ ಪರಿಹರಿಸಿತು, ಮತ್ತು fingerprint key ಕ್ರಮ ನಿರ್ಲಕ್ಷಿಸಿತು. ವಿಭಾಗ 5: canary finance ಯೋಜನೆಯಲ್ಲಿ legal ಕಾಣೆ ಎಂದು ವರದಿ ಮಾಡಿ ಸರಿಯಾದ ಯೋಜನೆ ಪಾಸು ಮಾಡಿತು. ವಿಭಾಗ 6: ಒಳ್ಳೆಯ ಸರಪಳಿ ದೋಷ ನೀಡಲಿಲ್ಲ ಮತ್ತು ಎರಡು ಮುರಿದ ಸರಪಳಿಗಳು ಹೆಸರಿಸಲ್ಪಟ್ಟವು, F-999 ಅಜ್ಞಾತ ಮತ್ತು E-404 ಅಜ್ಞಾತ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "Each safeguard compares something against the original request or the original evidence instead of trusting the next layer, which is the only way to find an error that every layer repeated faithfully.",
    "bodyKn": "ಪ್ರತಿ ಸುರಕ್ಷತೆ ಮುಂದಿನ ಪದರವನ್ನು ನಂಬುವ ಬದಲು ಏನನ್ನಾದರೂ ಮೂಲ ವಿನಂತಿ ಅಥವಾ ಮೂಲ ಸಾಕ್ಷಿಯ ವಿರುದ್ಧ ಹೋಲಿಸುತ್ತದೆ, ಪ್ರತಿ ಪದರ ನಿಷ್ಠೆಯಿಂದ ಪುನರಾವರ್ತಿಸಿದ ದೋಷ ಕಂಡುಹಿಡಿಯಲು ಅದೊಂದೇ ದಾರಿ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"a canary proves the plan is right.\" It only found that legal was missing from a plan, and a canary built on the same wrong reading as the manager would pass it.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"canary ಯೋಜನೆ ಸರಿ ಎಂದು ಸಾಬೀತುಪಡಿಸುತ್ತದೆ.\" ಅದು ಯೋಜನೆಯಲ್ಲಿ legal ಕಾಣೆಯಾಗಿದೆ ಎಂದು ಮಾತ್ರ ಕಂಡುಹಿಡಿಯಿತು, ಮತ್ತು ಮ್ಯಾನೇಜರ್‌ನಂತೆಯೇ ತಪ್ಪು ಓದಿನ ಮೇಲೆ ನಿರ್ಮಿಸಿದ canary ಅದನ್ನು ಪಾಸು ಮಾಡುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Decomposition drift: the delegated tasks no longer match the request. Claim status: supported, refuted or unknown. Reconciliation: resolving a disagreement between results. Canary: an immutable copy of the request used for comparison. Provenance: the chain from a claim to its evidence.",
    "bodyKn": "ವಿಭಜನೆ ಜಾರುವಿಕೆ: ನಿಯೋಜಿತ ಕೆಲಸಗಳು ಇನ್ನು ವಿನಂತಿಗೆ ಹೊಂದುವುದಿಲ್ಲ. ಹೇಳಿಕೆ ಸ್ಥಿತಿ: supported, refuted ಅಥವಾ unknown. ಸಮನ್ವಯ: ಫಲಿತಾಂಶಗಳ ನಡುವಿನ ಭಿನ್ನಾಭಿಪ್ರಾಯ ಪರಿಹರಿಸುವುದು. Canary: ಹೋಲಿಕೆಗೆ ಬಳಸುವ ವಿನಂತಿಯ ಬದಲಾಗದ ಪ್ರತಿ. Provenance: ಹೇಳಿಕೆಯಿಂದ ಅದರ ಸಾಕ್ಷಿಗೆ ಸರಪಳಿ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) A plan swapping legal for finance was rejected before it ran. 2) A narrowed task lost two of three requirements. 3) A lossy summary turned unknown into confirmed. 4) Identical evidence stopped reconciliation after 2 attempts. 5) A summary citing F-999 was named as unsupported.",
    "bodyKn": "1) legal ಬದಲು finance ಹಾಕಿದ ಯೋಜನೆ ಓಡುವ ಮೊದಲೇ ತಿರಸ್ಕರಿಸಲ್ಪಟ್ಟಿತು. 2) ಕಿರಿದಾದ ಕೆಲಸ ಮೂರರಲ್ಲಿ ಎರಡು ಅವಶ್ಯಕತೆ ಕಳೆದುಕೊಂಡಿತು. 3) ನಷ್ಟವುಳ್ಳ ಸಾರಾಂಶ unknown ಅನ್ನು confirmed ಆಗಿ ಬದಲಿಸಿತು. 4) ಅದೇ ಸಾಕ್ಷಿ ಸಮನ್ವಯವನ್ನು 2 ಪ್ರಯತ್ನಗಳ ನಂತರ ನಿಲ್ಲಿಸಿತು. 5) F-999 ಉಲ್ಲೇಖಿಸಿದ ಸಾರಾಂಶ ಬೆಂಬಲರಹಿತ ಎಂದು ಹೆಸರಿಸಲ್ಪಟ್ಟಿತು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "Which requirements did the narrowed contract lose?",
      "qKn": "ಕಿರಿದಾದ ಒಪ್ಪಂದ ಯಾವ ಅವಶ್ಯಕತೆಗಳನ್ನು ಕಳೆದುಕೊಂಡಿತು?",
      "opts": [
       "authorization and data_protection",
       "authentication only",
       "all three",
       "none"
      ],
      "optsKn": [
       "authorization ಮತ್ತು data_protection",
       "authentication ಮಾತ್ರ",
       "ಮೂರೂ",
       "ಯಾವುದೂ ಇಲ್ಲ"
      ],
      "correct": 0
     },
     {
      "q": "What did the lossy summary say for an unknown claim?",
      "qKn": "ಅಜ್ಞಾತ ಹೇಳಿಕೆಗೆ ನಷ್ಟವುಳ್ಳ ಸಾರಾಂಶ ಏನು ಹೇಳಿತು?",
      "opts": [
       "confirmed",
       "unable to determine",
       "false",
       "refuted"
      ],
      "optsKn": [
       "confirmed",
       "unable to determine",
       "false",
       "refuted"
      ],
      "correct": 0
     },
     {
      "q": "After how many attempts did identical evidence stop the reconciliation?",
      "qKn": "ಅದೇ ಸಾಕ್ಷಿ ಸಮನ್ವಯವನ್ನು ಎಷ್ಟು ಪ್ರಯತ್ನಗಳ ನಂತರ ನಿಲ್ಲಿಸಿತು?",
      "opts": [
       "2",
       "5",
       "3",
       "1"
      ],
      "optsKn": [
       "2",
       "5",
       "3",
       "1"
      ],
      "correct": 0
     },
     {
      "q": "What did the canary report for the finance plan?",
      "qKn": "finance ಯೋಜನೆಗೆ canary ಏನು ವರದಿ ಮಾಡಿತು?",
      "opts": [
       "legal missing",
       "finance missing",
       "passed",
       "engineering missing"
      ],
      "optsKn": [
       "legal ಕಾಣೆ",
       "finance ಕಾಣೆ",
       "ಪಾಸಾಯಿತು",
       "engineering ಕಾಣೆ"
      ],
      "correct": 0
     },
     {
      "q": "What error did a summary citing F-999 produce?",
      "qKn": "F-999 ಉಲ್ಲೇಖಿಸಿದ ಸಾರಾಂಶ ಯಾವ ದೋಷ ನೀಡಿತು?",
      "opts": [
       "summary cites unknown finding F-999",
       "finding cites unknown evidence",
       "no error",
       "unknown role"
      ],
      "optsKn": [
       "ಸಾರಾಂಶ ಅಜ್ಞಾತ ಕಂಡುಹಿಡಿಕೆ F-999 ಉಲ್ಲೇಖಿಸುತ್ತದೆ",
       "ಕಂಡುಹಿಡಿಕೆ ಅಜ್ಞಾತ ಸಾಕ್ಷಿ ಉಲ್ಲೇಖಿಸುತ್ತದೆ",
       "ದೋಷ ಇಲ್ಲ",
       "ಅಜ್ಞಾತ ಪಾತ್ರ"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
