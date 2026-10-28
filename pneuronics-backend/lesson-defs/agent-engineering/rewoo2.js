module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6066020ed05b321511",
 "order": 1,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "ReWOO and Plan-and-Execute (Part 2 of 3) — Workers, #E References and the DAG Executor",
 "titleKn": "ReWOO ಮತ್ತು Plan-and-Execute (ಭಾಗ 2 / 3) — Workers, #E ಉಲ್ಲೇಖಗಳು ಮತ್ತು DAG Executor",
 "desc": "Build the Worker, the #E reference resolver and a dependency-ordered DAG executor; see failures stay local, a literal \"#hashtag\" collide with the reference syntax, completion order differ from plan order, and parallel levels halve the measured wall time.",
 "descKn": "Worker, #E ಉಲ್ಲೇಖ ಪರಿಹಾರಕ ಮತ್ತು ಅವಲಂಬನೆ-ಕ್ರಮದ DAG executor ನಿರ್ಮಿಸಿ; ವೈಫಲ್ಯ ಸ್ಥಳೀಯವಾಗಿ ಉಳಿಯುವುದು, ಅಕ್ಷರಶಃ \"#hashtag\" ಉಲ್ಲೇಖ ಸಿಂಟ್ಯಾಕ್ಸ್‌ನೊಂದಿಗೆ ಘರ್ಷಿಸುವುದು, ಪೂರ್ಣಗೊಳ್ಳುವ ಕ್ರಮ ಯೋಜನೆ ಕ್ರಮಕ್ಕಿಂತ ಬೇರೆಯಾಗುವುದು ಮತ್ತು ಸಮಾನಾಂತರ ಮಟ್ಟಗಳು ಅಳೆದ ಗೋಡೆ ಸಮಯವನ್ನು ಅರ್ಧಗೊಳಿಸುವುದನ್ನು ನೋಡಿ.",
 "objectives": [
  "Implement a Worker and tool registry that turn exceptions into failed results.",
  "Resolve #E references against an evidence store and decide node readiness.",
  "Execute a DAG level by level with parallel ready nodes.",
  "Localize failures to one branch and detect plans that cannot progress.",
  "Explain why completion order must not be trusted and how correlation by id fixes it."
 ],
 "objectivesKn": [
  "ಅಪವಾದಗಳನ್ನು ವಿಫಲ ಫಲಿತಾಂಶಗಳಾಗಿ ಪರಿವರ್ತಿಸುವ Worker ಮತ್ತು tool registry ಅಳವಡಿಸಿ.",
  "ಸಾಕ್ಷ್ಯ ಸಂಗ್ರಹದ ವಿರುದ್ಧ #E ಉಲ್ಲೇಖ ಪರಿಹರಿಸಿ ನೋಡ್ ಸಿದ್ಧತೆ ನಿರ್ಧರಿಸಿ.",
  "ಸಿದ್ಧ ನೋಡ್‌ಗಳನ್ನು ಸಮಾನಾಂತರವಾಗಿ ಚಲಾಯಿಸುತ್ತಾ DAG ಅನ್ನು ಮಟ್ಟ ಮಟ್ಟವಾಗಿ ಚಲಾಯಿಸಿ.",
  "ವೈಫಲ್ಯಗಳನ್ನು ಒಂದು ಶಾಖೆಗೆ ಸ್ಥಳೀಕರಿಸಿ ಮತ್ತು ಮುಂದುವರಿಯಲಾರದ ಯೋಜನೆಗಳನ್ನು ಪತ್ತೆಹಚ್ಚಿ.",
  "ಪೂರ್ಣಗೊಳ್ಳುವ ಕ್ರಮವನ್ನು ಏಕೆ ನಂಬಬಾರದು ಮತ್ತು id ಮೂಲಕ ಜೋಡಣೆ ಅದನ್ನು ಹೇಗೆ ಸರಿಪಡಿಸುತ್ತದೆ ಎಂದು ವಿವರಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "ReWOO and Plan-and-Execute (Part 2 of 3)",
    "textKn": "ReWOO ಮತ್ತು Plan-and-Execute (ಭಾಗ 2 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 2 of 3: Workers, #E reference resolution, the DAG executor, parallel levels and failure localization. Every output was genuinely produced by rewoo_2.py on Python 3.14.5. The lesson text for this part was cut off before its code; the Worker, resolver and executor here are our implementation of its description, including the per-node error handling. Timings in section 8 are real but vary by machine.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ ಎರಡನೆಯದು: Workers, #E ಉಲ್ಲೇಖ ಪರಿಹಾರ, DAG executor, ಸಮಾನಾಂತರ ಮಟ್ಟಗಳು ಮತ್ತು ವೈಫಲ್ಯ ಸ್ಥಳೀಕರಣ. ಎಲ್ಲಾ output rewoo_2.py ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಈ ಭಾಗದ ಪಾಠ ಪಠ್ಯ ಕೋಡ್‌ಗೆ ಮೊದಲೇ ಕತ್ತರಿಸಲ್ಪಟ್ಟಿತ್ತು; ಇಲ್ಲಿನ Worker, resolver ಮತ್ತು executor ಅದರ ವಿವರಣೆಯ ನಮ್ಮ ಅಳವಡಿಕೆ, ಪ್ರತಿ-ನೋಡ್ ದೋಷ ನಿರ್ವಹಣೆ ಸೇರಿ. ವಿಭಾಗ 8 ರ ಸಮಯಗಳು ನಿಜ ಆದರೆ ಯಂತ್ರದಿಂದ ಯಂತ್ರಕ್ಕೆ ಬದಲಾಗುತ್ತವೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "From Symbolic Plan to Runtime Values",
    "textKn": "ಸಂಕೇತ ಯೋಜನೆಯಿಂದ Runtime ಮೌಲ್ಯಗಳಿಗೆ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Planner Describes, Worker Performs",
    "headingKn": "Planner ವಿವರಿಸುತ್ತದೆ, Worker ನಿರ್ವಹಿಸುತ್ತದೆ",
    "bodyEn": "The Planner manipulates symbols (E1, #E1) and the Worker produces values (Paris, 2148000). A tool registry maps the planner's symbolic tool name to a Python callable, so a generic Worker can run any registered tool without an if-chain. Every result is wrapped in a WorkerResult(ok, value, error): failure is data attached to one node, not an exception that ends the run.",
    "bodyKn": "Planner ಚಿಹ್ನೆಗಳನ್ನು (E1, #E1) ನಿರ್ವಹಿಸುತ್ತದೆ ಮತ್ತು Worker ಮೌಲ್ಯಗಳನ್ನು (Paris, 2148000) ಉತ್ಪಾದಿಸುತ್ತದೆ. Tool registry planner ನ ಸಂಕೇತ tool ಹೆಸರನ್ನು Python callable ಗೆ ನಕ್ಷೆ ಮಾಡುತ್ತದೆ, ಹಾಗಾಗಿ ಸಾಮಾನ್ಯ Worker ಯಾವುದೇ ನೋಂದಾಯಿತ tool ಅನ್ನು if-ಸರಪಳಿ ಇಲ್ಲದೆ ಚಲಾಯಿಸಬಹುದು. ಪ್ರತಿ ಫಲಿತಾಂಶ WorkerResult(ok, value, error) ನಲ್ಲಿ ಸುತ್ತಲ್ಪಡುತ್ತದೆ: ವೈಫಲ್ಯ ಒಂದು ನೋಡ್‌ಗೆ ಜೋಡಿಸಿದ ಡೇಟಾ, ಓಟವನ್ನು ಕೊನೆಗೊಳಿಸುವ exception ಅಲ್ಲ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Two Dependency Levels",
    "headingKn": "ಎರಡು ಅವಲಂಬನೆ ಮಟ್ಟಗಳು",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\">\n  <rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/>\n  <text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">The France+Germany plan: 2 levels, not 4 steps</text>\n  <rect x=\"30\" y=\"30\" width=\"100\" height=\"28\" rx=\"4\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"80\" y=\"42\" fill=\"#6ee7b7\" text-anchor=\"middle\">E1 capital_of</text><text x=\"80\" y=\"52\" fill=\"#6ee7b7\" text-anchor=\"middle\" font-size=\"6\">France</text>\n  <rect x=\"170\" y=\"30\" width=\"100\" height=\"28\" rx=\"4\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"220\" y=\"42\" fill=\"#6ee7b7\" text-anchor=\"middle\">E2 capital_of</text><text x=\"220\" y=\"52\" fill=\"#6ee7b7\" text-anchor=\"middle\" font-size=\"6\">Germany</text>\n  <text x=\"150\" y=\"46\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">level 0</text>\n  <path d=\"M80,58 V88\" stroke=\"#475569\"/><path d=\"M220,58 V88\" stroke=\"#475569\"/>\n  <rect x=\"30\" y=\"90\" width=\"100\" height=\"28\" rx=\"4\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"80\" y=\"102\" fill=\"#c4b5fd\" text-anchor=\"middle\">E3 population_of</text><text x=\"80\" y=\"112\" fill=\"#c4b5fd\" text-anchor=\"middle\" font-size=\"6\">#E1</text>\n  <rect x=\"170\" y=\"90\" width=\"100\" height=\"28\" rx=\"4\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"220\" y=\"102\" fill=\"#c4b5fd\" text-anchor=\"middle\">E4 population_of</text><text x=\"220\" y=\"112\" fill=\"#c4b5fd\" text-anchor=\"middle\" font-size=\"6\">#E2</text>\n  <text x=\"150\" y=\"106\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">level 1</text>\n  <text x=\"150\" y=\"150\" fill=\"#fde68a\" text-anchor=\"middle\">E1 and E2 are independent: run together</text>\n  <text x=\"150\" y=\"164\" fill=\"#fde68a\" text-anchor=\"middle\">E3 and E4 wait only for their own parent</text>\n  <text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">the DAG is also the schedule</text>\n</svg>",
    "captionEn": "The executor finds ready nodes, runs the ready set together, stores evidence, and repeats.",
    "captionKn": "Executor ಸಿದ್ಧ ನೋಡ್‌ಗಳನ್ನು ಹುಡುಕುತ್ತದೆ, ಸಿದ್ಧ ಗುಂಪನ್ನು ಒಟ್ಟಿಗೆ ಚಲಾಯಿಸುತ್ತದೆ, ಸಾಕ್ಷ್ಯ ಸಂಗ್ರಹಿಸುತ್ತದೆ, ಮತ್ತು ಪುನರಾವರ್ತಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "E1 Is a Slot, #E1 Dereferences It",
    "headingKn": "E1 ಒಂದು ಸ್ಲಾಟ್, #E1 ಅದನ್ನು ಓದುತ್ತದೆ",
    "bodyEn": "E1 is the identifier of an evidence slot. #E1 inside another node's arguments means \"read the value stored in that slot before running\". resolve_value strips the \"#\", looks the id up in the evidence store, raises if it is missing or if that node failed, and otherwise returns the value. Literal values pass through unchanged. A node is ready when every id in its dependencies already has an entry in the store.",
    "bodyKn": "E1 ಸಾಕ್ಷ್ಯ ಸ್ಲಾಟ್‌ನ ಗುರುತು. ಇನ್ನೊಂದು ನೋಡ್‌ನ arguments ಒಳಗಿನ #E1 ಎಂದರೆ \"ಚಲಾಯಿಸುವ ಮೊದಲು ಆ ಸ್ಲಾಟ್‌ನಲ್ಲಿರುವ ಮೌಲ್ಯ ಓದಿ\". resolve_value \"#\" ತೆಗೆದು, id ಅನ್ನು ಸಾಕ್ಷ್ಯ ಸಂಗ್ರಹದಲ್ಲಿ ಹುಡುಕುತ್ತದೆ, ಅದು ಕಾಣೆಯಾಗಿದ್ದರೆ ಅಥವಾ ಆ ನೋಡ್ ವಿಫಲವಾಗಿದ್ದರೆ raise ಮಾಡುತ್ತದೆ, ಇಲ್ಲದಿದ್ದರೆ ಮೌಲ್ಯ ಹಿಂತಿರುಗಿಸುತ್ತದೆ. ಅಕ್ಷರಶಃ ಮೌಲ್ಯಗಳು ಬದಲಾಗದೆ ಹಾದುಹೋಗುತ್ತವೆ. ಅದರ ಅವಲಂಬನೆಗಳ ಪ್ರತಿ id ಸಂಗ್ರಹದಲ್ಲಿ ಈಗಾಗಲೇ ನಮೂದು ಹೊಂದಿದ್ದರೆ ನೋಡ್ ಸಿದ್ಧ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Building the Runtime",
    "textKn": "Runtime ನಿರ್ಮಿಸುವುದು",
    "level": "H2"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "rewoo_2.py",
    "headingEn": "Tools, registry, WorkerResult and Worker",
    "headingKn": "Tools, registry, WorkerResult ಮತ್ತು Worker",
    "descEn": "Two deterministic tools stand in for real APIs. DELAY lets the timing experiments make them slow. The Worker looks the tool up in the registry and converts any exception into a failed WorkerResult.",
    "descKn": "ಎರಡು ನಿರ್ಧಾರಾತ್ಮಕ tools ನಿಜವಾದ APIs ಗಳಿಗೆ ಬದಲಿ. DELAY ಸಮಯ ಪ್ರಯೋಗಗಳು ಅವುಗಳನ್ನು ನಿಧಾನಗೊಳಿಸಲು ಅನುವು ಮಾಡುತ್ತದೆ. Worker tool ಅನ್ನು registry ಯಲ್ಲಿ ಹುಡುಕಿ ಯಾವುದೇ exception ಅನ್ನು ವಿಫಲ WorkerResult ಆಗಿ ಪರಿವರ್ತಿಸುತ್ತದೆ.",
    "code": "CAPITALS = {\"France\": \"Paris\", \"Germany\": \"Berlin\", \"Italy\": \"Rome\"}\nPOPULATIONS = {\"Paris\": 2_148_000, \"Berlin\": 3_755_000, \"Rome\": 2_760_000}\nDELAY = 0.0  # seconds each tool sleeps, set by the timing experiments\n\n\ndef capital_of(country: str) -> str:\n    time.sleep(DELAY)\n    if country not in CAPITALS:\n        raise ValueError(f\"No capital data for {country}\")\n    return CAPITALS[country]\n\n\ndef population_of(city: str) -> int:\n    time.sleep(DELAY)\n    if city not in POPULATIONS:\n        raise ValueError(f\"No population data for {city}\")\n    return POPULATIONS[city]\n\n\nTOOL_REGISTRY: dict[str, Callable[..., Any]] = {\"capital_of\": capital_of, \"population_of\": population_of}\n\n\n@dataclass\nclass WorkerResult:\n    ok: bool\n    value: Any = None\n    error: str | None = None\n\n\nclass Worker:\n    def __init__(self, registry):\n        self.registry = registry\n\n    def execute(self, node: PlanNode, arguments: dict[str, Any]) -> WorkerResult:\n        try:\n            if node.tool not in self.registry:\n                raise ValueError(f\"Unknown tool: {node.tool}\")\n            return WorkerResult(ok=True, value=self.registry[node.tool](**arguments))\n        except Exception as exc:\n            return WorkerResult(ok=False, error=str(exc))"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "rewoo_2.py",
    "headingEn": "Reference resolution and the DAG executor",
    "headingKn": "ಉಲ್ಲೇಖ ಪರಿಹಾರ ಮತ್ತು DAG executor",
    "descEn": "Each round the executor collects the ready nodes, submits them to a thread pool together, and stores results as they complete. _run_node converts a resolution failure (missing evidence or a failed dependency) into a failed result for that node, so a failure stays local. If no node is ready while work remains, the plan cannot progress and the executor raises.",
    "descKn": "ಪ್ರತಿ ಸುತ್ತಿನಲ್ಲಿ executor ಸಿದ್ಧ ನೋಡ್‌ಗಳನ್ನು ಸಂಗ್ರಹಿಸಿ ಅವುಗಳನ್ನು ಒಟ್ಟಿಗೆ thread pool ಗೆ ಸಲ್ಲಿಸಿ, ಪೂರ್ಣಗೊಂಡಂತೆ ಫಲಿತಾಂಶ ಸಂಗ್ರಹಿಸುತ್ತದೆ. _run_node ಪರಿಹಾರ ವೈಫಲ್ಯವನ್ನು (ಕಾಣೆಯಾದ ಸಾಕ್ಷ್ಯ ಅಥವಾ ವಿಫಲ ಅವಲಂಬನೆ) ಆ ನೋಡ್‌ನ ವಿಫಲ ಫಲಿತಾಂಶವಾಗಿ ಪರಿವರ್ತಿಸುತ್ತದೆ, ಹಾಗಾಗಿ ವೈಫಲ್ಯ ಸ್ಥಳೀಯವಾಗಿ ಉಳಿಯುತ್ತದೆ. ಕೆಲಸ ಉಳಿದಿರುವಾಗ ಯಾವುದೇ ನೋಡ್ ಸಿದ್ಧವಿಲ್ಲದಿದ್ದರೆ ಯೋಜನೆ ಮುಂದುವರಿಯಲಾರದು ಮತ್ತು executor raise ಮಾಡುತ್ತದೆ.",
    "code": "def resolve_value(value: Any, evidence: dict[str, WorkerResult]) -> Any:\n    if isinstance(value, str) and value.startswith(\"#\"):\n        evidence_id = value[1:]\n        if evidence_id not in evidence:\n            raise KeyError(f\"Missing evidence: {evidence_id}\")\n        result = evidence[evidence_id]\n        if not result.ok:\n            raise RuntimeError(f\"Dependency {evidence_id} failed: {result.error}\")\n        return result.value\n    return value\n\n\ndef resolve_arguments(arguments, evidence):\n    return {k: resolve_value(v, evidence) for k, v in arguments.items()}\n\n\ndef is_ready(node: PlanNode, evidence) -> bool:\n    return all(d in evidence for d in node.dependencies)\n\n\nclass DAGExecutor:\n    def __init__(self, worker: Worker, max_workers: int = 4):\n        self.worker = worker\n        self.max_workers = max_workers\n        self.rounds: list[list[str]] = []\n        self.completed_order: list[str] = []\n\n    def _run_node(self, node, evidence):\n        try:\n            arguments = resolve_arguments(node.arguments, evidence)\n        except (KeyError, RuntimeError) as exc:\n            return node.evidence_id, WorkerResult(ok=False, error=str(exc))\n        return node.evidence_id, self.worker.execute(node, arguments)\n\n    def execute(self, plan: list[PlanNode]) -> dict[str, WorkerResult]:\n        evidence: dict[str, WorkerResult] = {}\n        pending = {n.evidence_id: n for n in plan}\n        self.rounds, self.completed_order = [], []\n        with ThreadPoolExecutor(max_workers=self.max_workers) as pool:\n            while pending:\n                ready = [n for n in pending.values() if is_ready(n, evidence)]\n                if not ready:\n                    raise RuntimeError(\"Plan cannot make progress. Possible cycle or missing dependency.\")\n                self.rounds.append([n.evidence_id for n in ready])\n                futures = [pool.submit(self._run_node, n, evidence) for n in ready]\n                # collect in completion order to expose it, then store by id\n                for fut in as_completed(futures):\n                    eid, res = fut.result()\n                    evidence[eid] = res\n                    self.completed_order.append(eid)\n                    del pending[eid]\n        return evidence"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "rewoo_2.py",
    "headingEn": "main(): eight experiments",
    "headingKn": "main(): ಎಂಟು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() executes the France plan, shows reference resolution, hits the \"#hashtag\" corner case, propagates a failure, localizes a failure in a diamond plan, runs a cycle and a missing dependency, compares completion order with plan order, and times sequential against parallel execution.",
    "descKn": "main() France ಯೋಜನೆ ಚಲಾಯಿಸುತ್ತದೆ, ಉಲ್ಲೇಖ ಪರಿಹಾರ ತೋರಿಸುತ್ತದೆ, \"#hashtag\" ಮೂಲೆ ಪ್ರಕರಣ ತಲುಪುತ್ತದೆ, ವೈಫಲ್ಯ ಹರಡುತ್ತದೆ, diamond ಯೋಜನೆಯಲ್ಲಿ ವೈಫಲ್ಯ ಸ್ಥಳೀಕರಿಸುತ್ತದೆ, ಚಕ್ರ ಮತ್ತು ಕಾಣೆಯಾದ ಅವಲಂಬನೆ ಚಲಾಯಿಸುತ್ತದೆ, ಪೂರ್ಣಗೊಳ್ಳುವ ಕ್ರಮವನ್ನು ಯೋಜನೆ ಕ್ರಮದೊಂದಿಗೆ ಹೋಲಿಸುತ್ತದೆ, ಮತ್ತು ಅನುಕ್ರಮ ಮತ್ತು ಸಮಾನಾಂತರ ಕಾರ್ಯಗತಗೊಳಿಸುವಿಕೆಗೆ ಸಮಯ ಅಳೆಯುತ್ತದೆ.",
    "code": "def main():\n    global DELAY\n    planner = Planner()\n    ex = DAGExecutor(Worker(TOOL_REGISTRY))\n\n    section(\"1. Executing the France plan\")\n    plan = planner.plan(\"What is the population of the capital of France, rounded to millions?\")\n    evidence = ex.execute(plan)\n    print(\"rounds:\", ex.rounds)\n    show_evidence(evidence)\n\n    section(\"2. E1 versus #E1\")\n    print(\"evidence['E1'] is a WorkerResult:\", evidence[\"E1\"])\n    print(\"resolve_value('#E1')        ->\", repr(resolve_value(\"#E1\", evidence)))\n    print(\"resolve_value('USD')        ->\", repr(resolve_value(\"USD\", evidence)))\n    print(\"resolve_value(42)           ->\", repr(resolve_value(42, evidence)))\n    print(\"resolve_arguments           ->\", resolve_arguments({\"city\": \"#E1\", \"unit\": \"millions\"}, evidence))\n\n    section(\"3. A literal string that starts with '#'\")\n    try:\n        print(resolve_value(\"#hashtag\", evidence))\n    except KeyError as exc:\n        print(\"KeyError:\", exc)\n    print(\"a literal '#hashtag' is indistinguishable from a reference, so the reference syntax must be reserved\")\n\n    section(\"4. Failure propagation: capital_of('Atlantis')\")\n    bad_plan = [PlanNode(\"E1\", \"capital_of\", {\"country\": \"Atlantis\"}),\n                PlanNode(\"E2\", \"population_of\", {\"city\": \"#E1\"}, [\"E1\"])]\n    show_evidence(ex.execute(bad_plan))\n\n    section(\"5. Failure localization in a diamond-shaped plan\")\n    diamond = [\n        PlanNode(\"E1\", \"capital_of\", {\"country\": \"France\"}),\n        PlanNode(\"E2\", \"population_of\", {\"city\": \"#E1\"}, [\"E1\"]),\n        PlanNode(\"E3\", \"capital_of\", {\"country\": \"Atlantis\"}, [\"E1\"]),\n        PlanNode(\"E4\", \"population_of\", {\"city\": \"#E3\"}, [\"E3\"]),\n        PlanNode(\"E5\", \"capital_of\", {\"country\": \"Italy\"}),\n    ]\n    print(\"levels:\", levels(diamond))\n    show_evidence(ex.execute(diamond))\n\n    section(\"6. Plans that cannot make progress\")\n    cyc = [PlanNode(\"E1\", \"capital_of\", {\"country\": \"#E2\"}, [\"E2\"]), PlanNode(\"E2\", \"capital_of\", {\"country\": \"#E1\"}, [\"E1\"])]\n    miss = [PlanNode(\"E1\", \"population_of\", {\"city\": \"#E99\"}, [\"E99\"])]\n    for name, p in ((\"cycle\", cyc), (\"missing dependency\", miss)):\n        try:\n            ex.execute(p)\n        except RuntimeError as exc:\n            print(f\"{name:<19} -> RuntimeError: {exc}\")\n\n    section(\"7. Completion order is not plan order\")\n    ordered = [PlanNode(\"E1\", \"capital_of\", {\"country\": \"France\"}),\n               PlanNode(\"E2\", \"capital_of\", {\"country\": \"Germany\"}),\n               PlanNode(\"E3\", \"capital_of\", {\"country\": \"Italy\"})]\n    delays = {\"France\": 0.30, \"Germany\": 0.05, \"Italy\": 0.15}\n\n    def delayed(country):\n        time.sleep(delays[country])\n        return CAPITALS[country]\n\n    reg = {\"capital_of\": delayed, \"population_of\": population_of}\n    ex2 = DAGExecutor(Worker(reg))\n    ev = ex2.execute(ordered)\n    print(\"plan order      :\", [n.evidence_id for n in ordered])\n    print(\"completion order:\", ex2.completed_order)\n    print(\"evidence by id  :\", {k: ev[k].value for k in sorted(ev)})\n\n    section(\"8. Timing: the France+Germany plan, 0.2 s per tool call (varies by machine)\")\n    DELAY = 0.2\n    two = planner.plan(\"Compare the populations of the capitals of France and Germany.\")\n    for label, workers in ((\"max_workers=1 (sequential)\", 1), (\"max_workers=4 (parallel) \", 4)):\n        e = DAGExecutor(Worker(TOOL_REGISTRY), max_workers=workers)\n        t0 = time.perf_counter()\n        e.execute(two)\n        print(f\"{label}: {time.perf_counter() - t0:.2f} s, rounds {e.rounds}\")\n    DELAY = 0.0\n    print(\"4 calls x 0.2 s = 0.8 s sequential; 2 dependency levels x 0.2 s = 0.4 s when each level runs in parallel\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Executing the France plan ---\nrounds: [['E1'], ['E2']]\nE1: Paris\nE2: 2148000\n\n--- 2. E1 versus #E1 ---\nevidence['E1'] is a WorkerResult: WorkerResult(ok=True, value='Paris', error=None)\nresolve_value('#E1')        -> 'Paris'\nresolve_value('USD')        -> 'USD'\nresolve_value(42)           -> 42\nresolve_arguments           -> {'city': 'Paris', 'unit': 'millions'}\n\n--- 3. A literal string that starts with '#' ---\nKeyError: 'Missing evidence: hashtag'\na literal '#hashtag' is indistinguishable from a reference, so the reference syntax must be reserved\n\n--- 4. Failure propagation: capital_of('Atlantis') ---\nE1: ERROR: No capital data for Atlantis\nE2: ERROR: Dependency E1 failed: No capital data for Atlantis\n\n--- 5. Failure localization in a diamond-shaped plan ---\nlevels: [['E1', 'E5'], ['E2', 'E3'], ['E4']]\nE1: Paris\nE2: 2148000\nE3: ERROR: No capital data for Atlantis\nE4: ERROR: Dependency E3 failed: No capital data for Atlantis\nE5: Rome\n\n--- 6. Plans that cannot make progress ---\ncycle               -> RuntimeError: Plan cannot make progress. Possible cycle or missing dependency.\nmissing dependency  -> RuntimeError: Plan cannot make progress. Possible cycle or missing dependency.\n\n--- 7. Completion order is not plan order ---\nplan order      : ['E1', 'E2', 'E3']\ncompletion order: ['E2', 'E3', 'E1']\nevidence by id  : {'E1': 'Paris', 'E2': 'Berlin', 'E3': 'Rome'}\n\n--- 8. Timing: the France+Germany plan, 0.2 s per tool call (varies by machine) ---\nmax_workers=1 (sequential): 0.80 s, rounds [['E1', 'E2'], ['E3', 'E4']]\nmax_workers=4 (parallel) : 0.40 s, rounds [['E1', 'E2'], ['E3', 'E4']]\n4 calls x 0.2 s = 0.8 s sequential; 2 dependency levels x 0.2 s = 0.4 s when each level runs in parallel"
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
    "headingEn": "The Runtime Does What the Plan Says",
    "headingKn": "Runtime ಯೋಜನೆ ಹೇಳಿದಂತೆ ಮಾಡುತ್ತದೆ",
    "bodyEn": "Section 1 runs two rounds, [E1] then [E2], and ends with E1 = Paris and E2 = 2148000. Section 2 shows the difference between a slot and a reference: evidence[\"E1\"] is a WorkerResult, while resolve_value(\"#E1\") returns the string Paris, \"USD\" and 42 pass through, and resolve_arguments substitutes only the reference. Sections 4 and 5 show failure staying local: in the diamond plan E3 fails (Atlantis), E4 is blocked with \"Dependency E3 failed\", while E1, E2 and E5 still succeed.",
    "bodyKn": "ವಿಭಾಗ 1 ಎರಡು ಸುತ್ತು, [E1] ನಂತರ [E2], ಚಲಾಯಿಸಿ E1 = Paris ಮತ್ತು E2 = 2148000 ಜೊತೆ ಮುಗಿಯುತ್ತದೆ. ವಿಭಾಗ 2 ಸ್ಲಾಟ್ ಮತ್ತು ಉಲ್ಲೇಖದ ವ್ಯತ್ಯಾಸ ತೋರಿಸುತ್ತದೆ: evidence[\"E1\"] WorkerResult, resolve_value(\"#E1\") Paris ಸ್ಟ್ರಿಂಗ್ ಹಿಂತಿರುಗಿಸುತ್ತದೆ, \"USD\" ಮತ್ತು 42 ಹಾದುಹೋಗುತ್ತವೆ, ಮತ್ತು resolve_arguments ಉಲ್ಲೇಖವನ್ನು ಮಾತ್ರ ಬದಲಿಸುತ್ತದೆ. ವಿಭಾಗ 4 ಮತ್ತು 5 ವೈಫಲ್ಯ ಸ್ಥಳೀಯವಾಗಿ ಉಳಿಯುವುದನ್ನು ತೋರಿಸುತ್ತವೆ: diamond ಯೋಜನೆಯಲ್ಲಿ E3 ವಿಫಲ (Atlantis), E4 \"Dependency E3 failed\" ಜೊತೆ ತಡೆಹಿಡಿಯಲ್ಪಟ್ಟಿದೆ, ಆದರೆ E1, E2 ಮತ್ತು E5 ಇನ್ನೂ ಯಶಸ್ವಿ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: A Literal \"#hashtag\" Is Taken for a Reference",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಅಕ್ಷರಶಃ \"#hashtag\" ಉಲ್ಲೇಖ ಎಂದು ತಪ್ಪಾಗಿ ಭಾವಿಸಲಾಗುತ್ತದೆ",
    "bodyEn": "Section 3 passes the literal string \"#hashtag\" as an argument. Because every string starting with \"#\" is treated as a reference, resolution looks for evidence \"hashtag\" and fails with KeyError: Missing evidence: hashtag. The reference syntax is in-band, so legitimate data that happens to start with \"#\" collides with it. Reserve the syntax with a stricter pattern (for example #E followed by digits), or escape literals, and validate that plan arguments cannot smuggle in a reference.",
    "bodyKn": "ವಿಭಾಗ 3 ಅಕ್ಷರಶಃ ಸ್ಟ್ರಿಂಗ್ \"#hashtag\" ಅನ್ನು argument ಆಗಿ ನೀಡುತ್ತದೆ. \"#\" ನಿಂದ ಆರಂಭವಾಗುವ ಪ್ರತಿ ಸ್ಟ್ರಿಂಗ್ ಉಲ್ಲೇಖ ಎಂದು ಪರಿಗಣಿಸುವುದರಿಂದ, ಪರಿಹಾರ ಸಾಕ್ಷ್ಯ \"hashtag\" ಹುಡುಕಿ KeyError: Missing evidence: hashtag ಜೊತೆ ವಿಫಲವಾಗುತ್ತದೆ. ಉಲ್ಲೇಖ ಸಿಂಟ್ಯಾಕ್ಸ್ ಒಳ-ಪಟ್ಟಿಯಲ್ಲಿದೆ, ಆದ್ದರಿಂದ \"#\" ನಿಂದ ಆರಂಭವಾಗುವ ಮಾನ್ಯ ಡೇಟಾ ಅದರೊಂದಿಗೆ ಘರ್ಷಿಸುತ್ತದೆ. ಹೆಚ್ಚು ಕಟ್ಟುನಿಟ್ಟಾದ ಮಾದರಿಯಿಂದ (ಉದಾ. #E ನಂತರ ಅಂಕೆಗಳು) ಸಿಂಟ್ಯಾಕ್ಸ್ ಕಾಯ್ದಿರಿಸಿ, ಅಥವಾ literals ಅನ್ನು escape ಮಾಡಿ, ಮತ್ತು plan arguments ಉಲ್ಲೇಖ ನುಸುಳಿಸಲಾರವು ಎಂದು ಪರಿಶೀಲಿಸಿ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: A Cycle and a Missing Dependency Look the Same at Runtime",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಚಕ್ರ ಮತ್ತು ಕಾಣೆಯಾದ ಅವಲಂಬನೆ Runtime ನಲ್ಲಿ ಒಂದೇ ರೀತಿ ಕಾಣುತ್ತವೆ",
    "bodyEn": "Section 6 runs a two-node cycle and a node depending on E99. Both end with the identical RuntimeError: Plan cannot make progress. Possible cycle or missing dependency. The runtime guard prevents an infinite loop, but it cannot say which defect it saw. The plan validator from Part 1 can, which is the reason to validate before executing and keep the runtime check only as a backstop.",
    "bodyKn": "ವಿಭಾಗ 6 ಎರಡು-ನೋಡ್ ಚಕ್ರ ಮತ್ತು E99 ಅವಲಂಬಿತ ನೋಡ್ ಚಲಾಯಿಸುತ್ತದೆ. ಎರಡೂ ಒಂದೇ RuntimeError ಜೊತೆ ಮುಗಿಯುತ್ತವೆ: Plan cannot make progress. Possible cycle or missing dependency. Runtime ರಕ್ಷಣೆ ಅನಂತ ಲೂಪ್ ತಡೆಯುತ್ತದೆ, ಆದರೆ ಯಾವ ದೋಷ ಕಂಡಿತು ಎಂದು ಹೇಳಲಾರದು. ಭಾಗ 1 ರ plan validator ಹೇಳಬಲ್ಲದು; ಅದಕ್ಕಾಗಿಯೇ ಚಲಾಯಿಸುವ ಮೊದಲು ಪರಿಶೀಲಿಸಿ, runtime ಪರಿಶೀಲನೆಯನ್ನು ಹಿಂದಿನ ರಕ್ಷಣೆಯಾಗಿ ಮಾತ್ರ ಇಡಬೇಕು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Completion Order Is Not Plan Order",
    "headingKn": "ಪೂರ್ಣಗೊಳ್ಳುವ ಕ್ರಮ ಯೋಜನೆ ಕ್ರಮವಲ್ಲ",
    "bodyEn": "Section 7 gives France, Germany and Italy delays of 0.30, 0.05 and 0.15 seconds. The plan order is E1, E2, E3 but the completion order is E2, E3, E1. The evidence store is keyed by id, so each result still lands in its own slot and the final mapping is correct. Relying on list position instead of ids would pair every result with the wrong request.",
    "bodyKn": "ವಿಭಾಗ 7 France, Germany ಮತ್ತು Italy ಗೆ 0.30, 0.05 ಮತ್ತು 0.15 ಸೆಕೆಂಡ್ ವಿಳಂಬ ನೀಡುತ್ತದೆ. ಯೋಜನೆ ಕ್ರಮ E1, E2, E3 ಆದರೆ ಪೂರ್ಣಗೊಳ್ಳುವ ಕ್ರಮ E2, E3, E1. ಸಾಕ್ಷ್ಯ ಸಂಗ್ರಹ id ಯಿಂದ ಕೀ ಮಾಡಲ್ಪಟ್ಟಿದೆ, ಹಾಗಾಗಿ ಪ್ರತಿ ಫಲಿತಾಂಶ ತನ್ನದೇ ಸ್ಲಾಟ್‌ಗೆ ಬೀಳುತ್ತದೆ ಮತ್ತು ಅಂತಿಮ ನಕ್ಷೆ ಸರಿ. ids ಬದಲು ಪಟ್ಟಿ ಸ್ಥಾನ ಅವಲಂಬಿಸಿದರೆ ಪ್ರತಿ ಫಲಿತಾಂಶ ತಪ್ಪು ವಿನಂತಿಗೆ ಜೋಡಿಯಾಗುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Measured: Parallel Levels Halve the Wall Time",
    "headingKn": "ನಿಜವಾಗಿ ಅಳೆದದ್ದು: ಸಮಾನಾಂತರ ಮಟ್ಟಗಳು ಗೋಡೆ ಸಮಯವನ್ನು ಅರ್ಧಗೊಳಿಸುತ್ತವೆ",
    "bodyEn": "Section 8 times the France+Germany plan with every tool sleeping 0.2 seconds. With max_workers=1 it took about 0.8 seconds, which is four calls in a row. With max_workers=4 it took about 0.4 seconds, which is two dependency levels with two calls each in parallel. The speedup comes from the DAG exposing independence, not from faster tools. Exact numbers vary by machine, but the structure (4 x 0.2 against 2 x 0.2) does not.",
    "bodyKn": "ವಿಭಾಗ 8 ಪ್ರತಿ tool 0.2 ಸೆಕೆಂಡ್ ನಿದ್ರಿಸುವಾಗ France+Germany ಯೋಜನೆಗೆ ಸಮಯ ಅಳೆಯುತ್ತದೆ. max_workers=1 ರಲ್ಲಿ ಸುಮಾರು 0.8 ಸೆಕೆಂಡ್ ಆಯಿತು, ಅಂದರೆ ಸತತ ನಾಲ್ಕು ಕರೆಗಳು. max_workers=4 ರಲ್ಲಿ ಸುಮಾರು 0.4 ಸೆಕೆಂಡ್ ಆಯಿತು, ಅಂದರೆ ಎರಡು ಅವಲಂಬನೆ ಮಟ್ಟಗಳು, ಪ್ರತಿಯೊಂದರಲ್ಲಿ ಎರಡು ಕರೆಗಳು ಸಮಾನಾಂತರವಾಗಿ. ವೇಗಹೆಚ್ಚಳ DAG ಸ್ವಾತಂತ್ರ್ಯ ತೋರಿಸುವುದರಿಂದ ಬರುತ್ತದೆ, ವೇಗವಾದ tools ನಿಂದ ಅಲ್ಲ. ನಿಖರ ಸಂಖ್ಯೆಗಳು ಯಂತ್ರದಿಂದ ಯಂತ್ರಕ್ಕೆ ಬದಲಾಗುತ್ತವೆ, ಆದರೆ ರಚನೆ (4 x 0.2 ವಿರುದ್ಧ 2 x 0.2) ಬದಲಾಗುವುದಿಲ್ಲ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Design Notes",
    "textKn": "ವಿನ್ಯಾಸ ಟಿಪ್ಪಣಿಗಳು",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Parallelism Needs Independence and No Conflicting Writes",
    "headingKn": "ಸಮಾನಾಂತರತೆಗೆ ಸ್ವಾತಂತ್ರ್ಯ ಮತ್ತು ಸಂಘರ್ಷಿಸದ ಬರವಣಿಗೆ ಬೇಕು",
    "bodyEn": "The executor parallelises by dependency, never by list position. That is safe for read-only lookups. Two nodes that both write the same record are independent in the graph but race in reality, so side-effecting tools need ordering, idempotency keys or locks. Thread pools help I/O-bound tools; CPU-bound work needs processes. And a thread timeout stops waiting, it does not kill the work, so hard isolation needs a process or container.",
    "bodyKn": "Executor ಸಮಾನಾಂತರತೆಯನ್ನು ಅವಲಂಬನೆಯ ಪ್ರಕಾರ ಮಾಡುತ್ತದೆ, ಪಟ್ಟಿ ಸ್ಥಾನದ ಪ್ರಕಾರ ಎಂದೂ ಅಲ್ಲ. ಓದು-ಮಾತ್ರ ಹುಡುಕಾಟಗಳಿಗೆ ಇದು ಸುರಕ್ಷಿತ. ಒಂದೇ ದಾಖಲೆಗೆ ಬರೆಯುವ ಎರಡು ನೋಡ್‌ಗಳು ಗ್ರಾಫ್‌ನಲ್ಲಿ ಸ್ವತಂತ್ರ ಆದರೆ ವಾಸ್ತವದಲ್ಲಿ ಓಟ ನಡೆಸುತ್ತವೆ, ಆದ್ದರಿಂದ side effect ಇರುವ tools ಗೆ ಕ್ರಮ, idempotency ಕೀಗಳು ಅಥವಾ ಲಾಕ್‌ಗಳು ಬೇಕು. Thread pools I/O-ಬೌಂಡ್ tools ಗೆ ಸಹಾಯ ಮಾಡುತ್ತವೆ; CPU-ಬೌಂಡ್ ಕೆಲಸಕ್ಕೆ ಪ್ರಕ್ರಿಯೆಗಳು ಬೇಕು. ಮತ್ತು thread timeout ಕಾಯುವುದನ್ನು ನಿಲ್ಲಿಸುತ್ತದೆ, ಕೆಲಸ ಕೊಲ್ಲುವುದಿಲ್ಲ; ಕಠಿಣ ಪ್ರತ್ಯೇಕತೆಗೆ ಪ್ರಕ್ರಿಯೆ ಅಥವಾ container ಬೇಕು."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Node states in a production executor",
    "headingKn": "Production executor ನಲ್ಲಿ ನೋಡ್ ಸ್ಥಿತಿಗಳು",
    "headers": [
     "State",
     "Meaning"
    ],
    "rows": [
     [
      "PENDING",
      "Waiting for dependencies"
     ],
     [
      "READY",
      "All dependencies have evidence"
     ],
     [
      "RUNNING",
      "Dispatched to a worker"
     ],
     [
      "SUCCEEDED",
      "Evidence stored with ok=True"
     ],
     [
      "FAILED",
      "Evidence stored with ok=False"
     ],
     [
      "BLOCKED / SKIPPED",
      "A dependency failed, so this node did not run (our run shows it as a failed result)"
     ]
    ]
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "Debugging gets boundaries. A wrong answer can come from the plan (wrong tool), the evidence (a worker or tool returned bad data) or the Solver (good evidence, bad composition), and each is inspectable on its own. Failures are localized per node and the evidence store is durable intermediate state that can be checkpointed.",
    "bodyKn": "Debugging ಗೆ ಗಡಿಗಳು ಸಿಗುತ್ತವೆ. ತಪ್ಪು ಉತ್ತರ ಯೋಜನೆಯಿಂದ (ತಪ್ಪು tool), ಸಾಕ್ಷ್ಯದಿಂದ (worker ಅಥವಾ tool ಕೆಟ್ಟ ಡೇಟಾ ಹಿಂತಿರುಗಿಸಿತು) ಅಥವಾ Solver ನಿಂದ (ಒಳ್ಳೆಯ ಸಾಕ್ಷ್ಯ, ಕೆಟ್ಟ ಸಂಯೋಜನೆ) ಬರಬಹುದು, ಮತ್ತು ಪ್ರತಿಯೊಂದನ್ನೂ ಪ್ರತ್ಯೇಕವಾಗಿ ಪರಿಶೀಲಿಸಬಹುದು. ವೈಫಲ್ಯಗಳು ಪ್ರತಿ ನೋಡ್‌ಗೆ ಸ್ಥಳೀಕರಿಸಲ್ಪಡುತ್ತವೆ ಮತ್ತು ಸಾಕ್ಷ್ಯ ಸಂಗ್ರಹ checkpoint ಮಾಡಬಹುದಾದ ಬಾಳಿಕೆ ಬರುವ ಮಧ್ಯಂತರ ಸ್ಥಿತಿ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Where This Appears in AI Systems",
    "headingKn": "AI ವ್ಯವಸ್ಥೆಗಳಲ್ಲಿ ಇದು ಎಲ್ಲಿ ಕಾಣುತ್ತದೆ",
    "bodyEn": "Multi-source research runs one lookup per source in parallel and joins them. Data enrichment pipelines resolve an entity, then fan out to several APIs. Agent frameworks with graph runtimes (nodes, edges, state) are this executor with persistence, retries and tracing added. Our reference syntax is the same idea as the output-binding mechanisms in those graphs.",
    "bodyKn": "ಬಹು-ಮೂಲ ಸಂಶೋಧನೆ ಪ್ರತಿ ಮೂಲಕ್ಕೆ ಒಂದು ಹುಡುಕಾಟ ಸಮಾನಾಂತರವಾಗಿ ಚಲಾಯಿಸಿ ಜೋಡಿಸುತ್ತದೆ. ಡೇಟಾ ಸಮೃದ್ಧೀಕರಣ ಪೈಪ್‌ಲೈನ್‌ಗಳು ಒಂದು entity ಪರಿಹರಿಸಿ ನಂತರ ಹಲವು APIs ಗೆ ಹರಡುತ್ತವೆ. Graph runtimes (ನೋಡ್‌ಗಳು, edges, ಸ್ಥಿತಿ) ಇರುವ agent frameworks ಈ executor ಗೆ persistence, retries ಮತ್ತು tracing ಸೇರಿಸಿದ್ದು. ನಮ್ಮ ಉಲ್ಲೇಖ ಸಿಂಟ್ಯಾಕ್ಸ್ ಆ graphs ನ output-binding ವ್ಯವಸ್ಥೆಗಳ ಅದೇ ಆಲೋಚನೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"more threads is always faster\". Our run shows the speedup is bounded by the dependency structure: with four workers the plan still needed two levels. Adding workers beyond the widest level changes nothing, and a plan that is a pure chain gains nothing from any amount of parallelism.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಹೆಚ್ಚು threads ಯಾವಾಗಲೂ ವೇಗ\". ನಮ್ಮ ಓಟ ವೇಗಹೆಚ್ಚಳ ಅವಲಂಬನೆ ರಚನೆಯಿಂದ ಮಿತಿಗೊಂಡಿದೆ ಎಂದು ತೋರಿಸುತ್ತದೆ: ನಾಲ್ಕು workers ಇದ್ದರೂ ಯೋಜನೆಗೆ ಎರಡು ಮಟ್ಟಗಳು ಬೇಕಾದವು. ಅತಿ ಅಗಲದ ಮಟ್ಟಕ್ಕಿಂತ ಹೆಚ್ಚು workers ಸೇರಿಸಿದರೆ ಏನೂ ಬದಲಾಗುವುದಿಲ್ಲ, ಮತ್ತು ಶುದ್ಧ ಸರಪಳಿಯಾದ ಯೋಜನೆ ಎಷ್ಟೇ ಸಮಾನಾಂತರತೆಯಿಂದ ಏನೂ ಪಡೆಯುವುದಿಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) Wrap results in WorkerResult so failure is data on one node. 2) E1 is a slot and #E1 reads it; keep the syntax strict because \"#hashtag\" collided. 3) Readiness is \"every dependency has evidence\". 4) A stuck plan raises at runtime, but validate beforehand to learn which defect it was. 5) Key evidence by id: completion order differed from plan order. 6) Parallel speedup follows the DAG: about 0.8 s became about 0.4 s. Part 3 adds the Solver, replanning and the complete pipeline.",
    "bodyKn": "1) ಫಲಿತಾಂಶಗಳನ್ನು WorkerResult ನಲ್ಲಿ ಸುತ್ತಿ, ಆಗ ವೈಫಲ್ಯ ಒಂದು ನೋಡ್‌ನ ಡೇಟಾ. 2) E1 ಸ್ಲಾಟ್, #E1 ಅದನ್ನು ಓದುತ್ತದೆ; \"#hashtag\" ಘರ್ಷಿಸಿದ್ದರಿಂದ ಸಿಂಟ್ಯಾಕ್ಸ್ ಕಟ್ಟುನಿಟ್ಟಾಗಿರಲಿ. 3) ಸಿದ್ಧತೆ ಎಂದರೆ \"ಪ್ರತಿ ಅವಲಂಬನೆಗೂ ಸಾಕ್ಷ್ಯ ಇದೆ\". 4) ಸಿಲುಕಿದ ಯೋಜನೆ runtime ನಲ್ಲಿ raise ಮಾಡುತ್ತದೆ, ಆದರೆ ಯಾವ ದೋಷ ಎಂದು ತಿಳಿಯಲು ಮೊದಲೇ ಪರಿಶೀಲಿಸಿ. 5) ಸಾಕ್ಷ್ಯವನ್ನು id ಯಿಂದ ಕೀ ಮಾಡಿ: ಪೂರ್ಣಗೊಳ್ಳುವ ಕ್ರಮ ಯೋಜನೆ ಕ್ರಮಕ್ಕಿಂತ ಬೇರೆ ಇತ್ತು. 6) ಸಮಾನಾಂತರ ವೇಗಹೆಚ್ಚಳ DAG ಅನ್ನು ಅನುಸರಿಸುತ್ತದೆ: ಸುಮಾರು 0.8 ಸೆ ಸುಮಾರು 0.4 ಸೆ ಆಯಿತು. ಭಾಗ 3 Solver, replanning ಮತ್ತು ಸಂಪೂರ್ಣ ಪೈಪ್‌ಲೈನ್ ಸೇರಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What is the purpose of the tool registry in the Worker?",
      "qKn": "Worker ನಲ್ಲಿ tool registry ಯ ಉದ್ದೇಶ ಏನು?",
      "opts": [
       "Store evidence",
       "Map symbolic tool names from the planner to executable functions",
       "Store the plan",
       "Generate the final answer"
      ],
      "optsKn": [
       "ಸಾಕ್ಷ್ಯ ಸಂಗ್ರಹಿಸುವುದು",
       "Planner ನ ಸಂಕೇತ tool ಹೆಸರುಗಳನ್ನು ಚಲಾಯಿಸಬಹುದಾದ ಫಂಕ್ಷನ್‌ಗಳಿಗೆ ನಕ್ಷೆ ಮಾಡುವುದು",
       "ಯೋಜನೆ ಸಂಗ್ರಹಿಸುವುದು",
       "ಅಂತಿಮ ಉತ್ತರ ಉತ್ಪಾದಿಸುವುದು"
      ],
      "correct": 1
     },
     {
      "q": "If evidence[\"E1\"] is WorkerResult(ok=True, value=\"Paris\"), what does \"#E1\" resolve to?",
      "qKn": "evidence[\"E1\"] WorkerResult(ok=True, value=\"Paris\") ಆದರೆ \"#E1\" ಯಾವುದಕ್ಕೆ ಪರಿಹಾರವಾಗುತ್ತದೆ?",
      "opts": [
       "\"E1\"",
       "\"#E1\"",
       "\"Paris\"",
       "the Worker"
      ],
      "optsKn": [
       "\"E1\"",
       "\"#E1\"",
       "\"Paris\"",
       "Worker"
      ],
      "correct": 2
     },
     {
      "q": "Why can E2 (depends on E1) not run before E1?",
      "qKn": "E2 (E1 ಅವಲಂಬಿತ) E1 ಮೊದಲು ಏಕೆ ಚಲಿಸಲಾರದು?",
      "opts": [
       "Python needs alphabetical order",
       "E2 needs evidence that E1 produces",
       "Workers run only once",
       "The Solver needs E1 first"
      ],
      "optsKn": [
       "Python ಗೆ ವರ್ಣಮಾಲಾ ಕ್ರಮ ಬೇಕು",
       "E2 ಗೆ E1 ಉತ್ಪಾದಿಸುವ ಸಾಕ್ಷ್ಯ ಬೇಕು",
       "Workers ಒಮ್ಮೆ ಮಾತ್ರ ಚಲಿಸುತ್ತವೆ",
       "Solver ಗೆ ಮೊದಲು E1 ಬೇಕು"
      ],
      "correct": 1
     },
     {
      "q": "In this lesson's run, what happened to the literal argument \"#hashtag\"?",
      "qKn": "ಈ ಪಾಠದ ಓಟದಲ್ಲಿ ಅಕ್ಷರಶಃ argument \"#hashtag\" ಗೆ ಏನಾಯಿತು?",
      "opts": [
       "It passed through unchanged",
       "It was treated as a reference and raised KeyError: Missing evidence: hashtag",
       "It was converted to a number",
       "It was ignored silently"
      ],
      "optsKn": [
       "ಬದಲಾಗದೆ ಹಾದುಹೋಯಿತು",
       "ಉಲ್ಲೇಖ ಎಂದು ಪರಿಗಣಿಸಲ್ಪಟ್ಟು KeyError: Missing evidence: hashtag raise ಮಾಡಿತು",
       "ಸಂಖ್ಯೆಗೆ ಪರಿವರ್ತಿಸಲ್ಪಟ್ಟಿತು",
       "ಮೌನವಾಗಿ ಕಡೆಗಣಿಸಲ್ಪಟ್ಟಿತು"
      ],
      "correct": 1
     },
     {
      "q": "The France+Germany plan took about 0.8 s with max_workers=1 and about 0.4 s with max_workers=4. Why?",
      "qKn": "France+Germany ಯೋಜನೆ max_workers=1 ರಲ್ಲಿ ಸುಮಾರು 0.8 ಸೆ ಮತ್ತು max_workers=4 ರಲ್ಲಿ ಸುಮಾರು 0.4 ಸೆ ತೆಗೆದುಕೊಂಡಿತು. ಏಕೆ?",
      "opts": [
       "The tools became faster",
       "Each of the two dependency levels ran its two independent calls together",
       "The plan was shorter",
       "Caching removed two calls"
      ],
      "optsKn": [
       "Tools ವೇಗವಾದವು",
       "ಎರಡು ಅವಲಂಬನೆ ಮಟ್ಟಗಳ ಪ್ರತಿಯೊಂದೂ ತನ್ನ ಎರಡು ಸ್ವತಂತ್ರ ಕರೆಗಳನ್ನು ಒಟ್ಟಿಗೆ ಚಲಾಯಿಸಿತು",
       "ಯೋಜನೆ ಚಿಕ್ಕದಾಗಿತ್ತು",
       "Caching ಎರಡು ಕರೆಗಳನ್ನು ತೆಗೆದಿತು"
      ],
      "correct": 1
     }
    ]
   }
  }
 ]
};
