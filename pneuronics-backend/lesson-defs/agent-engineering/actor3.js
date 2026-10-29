module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6166020ed05b321535",
 "order": 2,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "The Actor Model for Agents: Async Messages and Typed Runtimes (Part 3 of 3) — The Full System and Its Hidden Race",
 "titleKn": "Agents ಗಾಗಿ Actor ಮಾದರಿ: Async ಸಂದೇಶಗಳು ಮತ್ತು Typed Runtimes (ಭಾಗ 3 / 3) — ಸಂಪೂರ್ಣ ವ್ಯವಸ್ಥೆ ಮತ್ತು ಅಡಗಿದ Race",
 "desc": "Run a complete typed reviewer and checklist system through five proof cases, then put two reviews in flight and find a single-slot reviewer approving eval code, fixed by keying state with a correlation id.",
 "descKn": "ಸಂಪೂರ್ಣ typed reviewer ಮತ್ತು checklist ವ್ಯವಸ್ಥೆಯನ್ನು ಐದು ಪುರಾವೆ ಪ್ರಕರಣಗಳ ಮೂಲಕ ಚಲಾಯಿಸಿ, ನಂತರ ಎರಡು reviews ಅನ್ನು ಜಾರಿಯಲ್ಲಿಟ್ಟು ಏಕ-ಸ್ಲಾಟ್ reviewer eval ಕೋಡ್ ಅನುಮೋದಿಸುವುದನ್ನು ಕಂಡುಹಿಡಿಯಿರಿ, correlation id ಯಿಂದ state key ಮಾಡಿ ಸರಿಪಡಿಸಲಾಗಿದೆ.",
 "objectives": [
  "Define typed message payloads and validate them at the handler.",
  "Run a message-only collaboration to a consensus verdict.",
  "Prove fault isolation with a later successful request and a dead letter.",
  "Explain why actor state must replace the suspended call stack.",
  "Fix in-flight state collisions with correlation ids."
 ],
 "objectivesKn": [
  "Typed ಸಂದೇಶ payloads ವ್ಯಾಖ್ಯಾನಿಸಿ ಮತ್ತು handler ನಲ್ಲಿ ಮಾನ್ಯ ಮಾಡಿ.",
  "ಸಂದೇಶ-ಮಾತ್ರ ಸಹಕಾರವನ್ನು ಒಮ್ಮತ ತೀರ್ಪಿಗೆ ಚಲಾಯಿಸಿ.",
  "ನಂತರದ ಯಶಸ್ವಿ ವಿನಂತಿ ಮತ್ತು dead letter ಯಿಂದ ವೈಫಲ್ಯ ಪ್ರತ್ಯೇಕತೆ ಸಾಬೀತುಪಡಿಸಿ.",
  "Actor state ಸ್ಥಗಿತ ಕರೆ ಸ್ಟ್ಯಾಕ್ ಅನ್ನು ಬದಲಿಸಬೇಕು ಏಕೆ ಎಂದು ವಿವರಿಸಿ.",
  "Correlation ids ಯಿಂದ ಜಾರಿಯ-state ಘರ್ಷಣೆಗಳನ್ನು ಸರಿಪಡಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "The Actor Model for Agents: Async Messages and Typed Runtimes (Part 3 of 3)",
    "textKn": "Agents ಗಾಗಿ Actor ಮಾದರಿ: Async ಸಂದೇಶಗಳು ಮತ್ತು Typed Runtimes (ಭಾಗ 3 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 3 of 3: typed payloads, the complete reviewer and checklist system, five proof cases and the correlation-id problem. Every output below was genuinely produced by the lab file on Python 3.14.5. The pasted source was cut off in its final quiz and its exercise text, which are rebuilt. The reviewer is deliberately single-slot, as in the pasted design, so that the interleaving problem can be demonstrated and then fixed. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 3ನೆಯದು: typed payloads, ಸಂಪೂರ್ಣ reviewer ಮತ್ತು checklist ವ್ಯವಸ್ಥೆ, ಐದು ಪುರಾವೆ ಪ್ರಕರಣಗಳು ಮತ್ತು correlation-id ಸಮಸ್ಯೆ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಅಂಟಿಸಿದ ಮೂಲ ಅದರ ಅಂತಿಮ ರಸಪ್ರಶ್ನೆ ಮತ್ತು ಅಭ್ಯಾಸ ಪಠ್ಯದಲ್ಲಿ ಕತ್ತರಿಸಲ್ಪಟ್ಟಿತ್ತು, ಅವನ್ನು ಮರುನಿರ್ಮಿಸಲಾಗಿದೆ. ಅಂಟಿಸಿದ ವಿನ್ಯಾಸದಂತೆ reviewer ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ಏಕ-ಸ್ಲಾಟ್, ಆದ್ದರಿಂದ ಅಂತರ್‌ಮಿಶ್ರಣ ಸಮಸ್ಯೆ ತೋರಿಸಿ ನಂತರ ಸರಿಪಡಿಸಬಹುದು. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "The Complete System",
    "textKn": "ಸಂಪೂರ್ಣ ವ್ಯವಸ್ಥೆ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Typed Payloads and a Message Protocol",
    "headingKn": "Typed Payloads ಮತ್ತು ಸಂದೇಶ ಪ್ರೋಟೋಕಾಲ್",
    "bodyEn": "The message body is now one of four frozen dataclasses: ReviewRequest, ChecklistRequest, ChecklistResult and FinalVerdict, each with a tuple for findings. Handlers check isinstance before using a body. The topics review_request, checklist_request and checklist_result form the protocol between the two actors, an API made of data contracts instead of method signatures. The collaboration is a chain: main sends a ReviewRequest, the reviewer reviews and sends a ChecklistRequest, the checklist inspects and sends a ChecklistResult, and the reviewer combines both sets of findings into a verdict.",
    "bodyKn": "ಸಂದೇಶ body ಈಗ ನಾಲ್ಕು ಫ್ರೋಜನ್ dataclasses ಗಳಲ್ಲಿ ಒಂದು: ReviewRequest, ChecklistRequest, ChecklistResult ಮತ್ತು FinalVerdict, ಪ್ರತಿಯೊಂದರಲ್ಲೂ ಕಂಡುಹಿಡಿತಗಳಿಗೆ tuple. Handlers body ಬಳಸುವ ಮೊದಲು isinstance ಪರಿಶೀಲಿಸುತ್ತವೆ. review_request, checklist_request ಮತ್ತು checklist_result topics ಎರಡು actors ನಡುವಿನ ಪ್ರೋಟೋಕಾಲ್, ವಿಧಾನ ಸಹಿಗಳ ಬದಲು ದತ್ತಾಂಶ ಒಪ್ಪಂದಗಳಿಂದ ಮಾಡಿದ API. ಸಹಕಾರ ಒಂದು ಸರಪಳಿ: main ReviewRequest ಕಳುಹಿಸುತ್ತದೆ, reviewer ಪರಿಶೀಲಿಸಿ ChecklistRequest ಕಳುಹಿಸುತ್ತದೆ, checklist ಪರೀಕ್ಷಿಸಿ ChecklistResult ಕಳುಹಿಸುತ್ತದೆ, ಮತ್ತು reviewer ಎರಡೂ ಕಂಡುಹಿಡಿತಗಳನ್ನು ತೀರ್ಪಾಗಿ ಸಂಯೋಜಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Reviewer and Checklist",
    "headingKn": "Reviewer ಮತ್ತು Checklist",
    "svgCode": "<svg viewBox=\"0 0 300 205\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\">\n  <rect width=\"300\" height=\"205\" rx=\"8\" fill=\"#0f172a\"/>\n  <text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">Actors talk through the runtime, never directly</text>\n  <rect x=\"20\" y=\"26\" width=\"100\" height=\"44\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"70\" y=\"40\" fill=\"#6ee7b7\" text-anchor=\"middle\">ReviewerAgent</text><text x=\"70\" y=\"53\" fill=\"#6ee7b7\" text-anchor=\"middle\" font-size=\"6\">private state</text><text x=\"70\" y=\"62\" fill=\"#6ee7b7\" text-anchor=\"middle\" font-size=\"6\">handler: receive()</text>\n  <rect x=\"180\" y=\"26\" width=\"100\" height=\"44\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"230\" y=\"40\" fill=\"#c4b5fd\" text-anchor=\"middle\">ChecklistAgent</text><text x=\"230\" y=\"53\" fill=\"#c4b5fd\" text-anchor=\"middle\" font-size=\"6\">private state</text><text x=\"230\" y=\"62\" fill=\"#c4b5fd\" text-anchor=\"middle\" font-size=\"6\">handler: receive()</text>\n  <rect x=\"60\" y=\"100\" width=\"180\" height=\"46\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"114\" fill=\"#fde68a\" text-anchor=\"middle\">RUNTIME</text><text x=\"150\" y=\"127\" fill=\"#fde68a\" text-anchor=\"middle\" font-size=\"6\">registry, queue, routing</text><text x=\"150\" y=\"137\" fill=\"#fde68a\" text-anchor=\"middle\" font-size=\"6\">failure isolation, dead letters, trace</text>\n  <path d=\"M70,70 V100\" stroke=\"#475569\"/><text x=\"74\" y=\"88\" fill=\"#94a3b8\" font-size=\"6\">send</text>\n  <path d=\"M230,100 V70\" stroke=\"#475569\"/><text x=\"204\" y=\"88\" fill=\"#94a3b8\" font-size=\"6\">deliver</text>\n  <path d=\"M150,146 V162\" stroke=\"#475569\"/>\n  <text x=\"150\" y=\"176\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">send is not handle: the sender returns, the runtime delivers later</text>\n  <text x=\"150\" y=\"188\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">that gap is where isolation, concurrency and tracing live</text>\n</svg>",
    "captionEn": "The reviewer and checklist exchange only typed messages and keep separate private state.",
    "captionKn": "Reviewer ಮತ್ತು checklist ಕೇವಲ typed ಸಂದೇಶಗಳನ್ನು ವಿನಿಮಯ ಮಾಡಿ ಪ್ರತ್ಯೇಕ ಖಾಸಗಿ state ಇಡುತ್ತವೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "State Replaces the Suspended Stack",
    "headingKn": "State ಸ್ಥಗಿತ ಸ್ಟ್ಯಾಕ್ ಅನ್ನು ಬದಲಿಸುತ್ತದೆ",
    "bodyEn": "In synchronous code the reviewer's local variables stay alive while it waits for the checklist. In an actor system the handler returns, so whatever the reviewer will need later has to live in its own state: current_code, reviewer_findings, status. The reviewer is therefore an explicit state machine (IDLE, REVIEWING, WAITING_FOR_CHECKLIST, COMPLETE), and each incoming message is an event that moves it. That is also what creates the weakness examined below.",
    "bodyKn": "ಸಿಂಕ್ರೋನಸ್ ಕೋಡ್‌ನಲ್ಲಿ reviewer checklist ಗಾಗಿ ಕಾಯುವಾಗ ಅದರ ಸ್ಥಳೀಯ ಚರಗಳು ಜೀವಂತವಾಗಿರುತ್ತವೆ. Actor ವ್ಯವಸ್ಥೆಯಲ್ಲಿ handler ಹಿಂತಿರುಗುತ್ತದೆ, ಆದ್ದರಿಂದ reviewer ಗೆ ನಂತರ ಬೇಕಾದದ್ದೆಲ್ಲ ಅದರ ಸ್ವಂತ state ನಲ್ಲಿ ಇರಬೇಕು: current_code, reviewer_findings, status. ಆದ್ದರಿಂದ reviewer ಸ್ಪಷ್ಟ state machine (IDLE, REVIEWING, WAITING_FOR_CHECKLIST, COMPLETE), ಮತ್ತು ಪ್ರತಿ ಒಳಬರುವ ಸಂದೇಶ ಅದನ್ನು ಸರಿಸುವ ಘಟನೆ. ಕೆಳಗೆ ಪರೀಕ್ಷಿಸುವ ದೌರ್ಬಲ್ಯವನ್ನು ಅದೂ ಸೃಷ್ಟಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Building the Review System",
    "textKn": "Review ವ್ಯವಸ್ಥೆ ನಿರ್ಮಿಸುವುದು",
    "level": "H2"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "actor_3.py",
    "headingEn": "Payloads, Runtime, ReviewerAgent, ChecklistAgent and KeyedReviewer",
    "headingKn": "Payloads, Runtime, ReviewerAgent, ChecklistAgent ಮತ್ತು KeyedReviewer",
    "descEn": "The payload dataclasses carry a review_id. The Runtime logs sends and deliveries and isolates handler failures. ReviewerAgent keeps one current_code and one reviewer_findings slot. ChecklistAgent applies three deterministic rules and replies. KeyedReviewer is the fix: it stores pending findings per review_id so several reviews can be in flight.",
    "descKn": "Payload dataclasses review_id ಹೊತ್ತಿವೆ. Runtime ಕಳುಹಿಸುವಿಕೆ ಮತ್ತು ವಿತರಣೆ ದಾಖಲಿಸಿ handler ವೈಫಲ್ಯ ಪ್ರತ್ಯೇಕಿಸುತ್ತದೆ. ReviewerAgent ಒಂದು current_code ಮತ್ತು ಒಂದು reviewer_findings ಸ್ಲಾಟ್ ಇಡುತ್ತದೆ. ChecklistAgent ಮೂರು ನಿರ್ಧಾರಾತ್ಮಕ ನಿಯಮ ಅನ್ವಯಿಸಿ ಉತ್ತರಿಸುತ್ತದೆ. KeyedReviewer ಪರಿಹಾರ: ಅದು ಬಾಕಿ ಕಂಡುಹಿಡಿತಗಳನ್ನು review_id ಪ್ರಕಾರ ಸಂಗ್ರಹಿಸುತ್ತದೆ, ಹಾಗಾಗಿ ಹಲವು reviews ಒಂದೇ ಸಮಯದಲ್ಲಿ ನಡೆಯಬಹುದು.",
    "code": "@dataclass(frozen=True)\nclass ReviewRequest:\n    code: str\n    simulate_failure: bool = False\n    review_id: str = \"r-1\"\n\n\n@dataclass(frozen=True)\nclass ChecklistRequest:\n    code: str\n    reviewer_findings: tuple\n    simulate_failure: bool = False\n    review_id: str = \"r-1\"\n\n\n@dataclass(frozen=True)\nclass ChecklistResult:\n    findings: tuple\n    passed: bool\n    review_id: str = \"r-1\"\n\n\n@dataclass(frozen=True)\nclass FinalVerdict:\n    verdict: str\n    findings: tuple\n\n\nclass Runtime:\n    def __init__(self):\n        self.actors, self.queue = {}, Queue()\n        self.failures, self.dead_letters, self.trace = [], [], []\n\n    def log(self, text):\n        self.trace.append(text)\n        print(text)\n\n    def register(self, actor):\n        if actor.actor_id in self.actors:\n            raise ValueError(f\"actor already registered: {actor.actor_id}\")\n        self.actors[actor.actor_id] = actor\n\n    def send(self, message):\n        self.log(f\"[send] {message.sender} -> {message.recipient} topic={message.topic}\")\n        self.queue.put(message)\n\n    def deliver(self, message):\n        actor = self.actors.get(message.recipient)\n        if actor is None:\n            self.dead_letters.append(message)\n            self.log(f\"[dead-letter] recipient={message.recipient} topic={message.topic}\")\n            return\n        try:\n            actor.receive(message, self)\n        except Exception as exc:\n            self.failures.append({\"actor\": actor.actor_id, \"topic\": message.topic, \"error\": str(exc)})\n            self.log(f\"[failure] actor={actor.actor_id} topic={message.topic} error={exc}\")\n\n    def run(self):\n        while not self.queue.empty():\n            message = self.queue.get()\n            self.log(f\"[deliver] {message.recipient} <- {message.sender} topic={message.topic}\")\n            self.deliver(message)\n\n\nclass ReviewerAgent(Actor):\n    \"\"\"Deliberately single-slot: it remembers one review at a time (the weakness Part 3 exposes).\"\"\"\n\n    def __init__(self, actor_id):\n        super().__init__(actor_id)\n        self.review_count = 0\n        self.status = \"IDLE\"\n        self.current_code = \"\"\n        self.reviewer_findings = ()\n        self.final_verdict: Optional[FinalVerdict] = None\n\n    def receive(self, message, runtime):\n        if message.topic == \"review_request\":\n            self._on_review(message, runtime)\n        elif message.topic == \"checklist_result\":\n            self._on_result(message, runtime)\n\n    def _on_review(self, message, runtime):\n        body = message.body\n        if not isinstance(body, ReviewRequest):\n            raise TypeError(\"review_request requires ReviewRequest\")\n        self.review_count += 1\n        self.status = \"REVIEWING\"\n        self.current_code = body.code\n        findings = []\n        if \"eval(\" in body.code:\n            findings.append(\"avoid eval()\")\n        if \"except:\" in body.code:\n            findings.append(\"avoid bare except\")\n        self.reviewer_findings = tuple(findings)\n        runtime.log(f\"[reviewer] review={self.review_count} findings={list(self.reviewer_findings)}\")\n        self.status = \"WAITING_FOR_CHECKLIST\"\n        runtime.send(Message(self.actor_id, \"checklist\", \"checklist_request\",\n                             ChecklistRequest(body.code, self.reviewer_findings, body.simulate_failure, body.review_id)))\n\n    def _on_result(self, message, runtime):\n        body = message.body\n        if not isinstance(body, ChecklistResult):\n            raise TypeError(\"checklist_result requires ChecklistResult\")\n        all_findings = self.reviewer_findings + body.findings\n        verdict = \"APPROVED\" if (not all_findings and body.passed) else \"CHANGES_REQUESTED\"\n        self.final_verdict = FinalVerdict(verdict, all_findings)\n        self.status = \"COMPLETE\"\n        runtime.log(f\"[reviewer] consensus={verdict} review_id={body.review_id} combined_findings={list(all_findings)}\")\n\n\nclass ChecklistAgent(Actor):\n    def __init__(self, actor_id):\n        super().__init__(actor_id)\n        self.check_count = 0\n        self.status = \"IDLE\"\n        self.last_findings = ()\n\n    def receive(self, message, runtime):\n        if message.topic != \"checklist_request\":\n            return\n        body = message.body\n        if not isinstance(body, ChecklistRequest):\n            raise TypeError(\"checklist_request requires ChecklistRequest\")\n        self.check_count += 1\n        self.status = \"CHECKING\"\n        runtime.log(f\"[checklist] check={self.check_count}\")\n        if body.simulate_failure:\n            self.status = \"FAILED\"\n            raise RuntimeError(\"simulated checklist failure\")\n        findings = []\n        if \"def \" not in body.code:\n            findings.append(\"no function definition found\")\n        if \"return \" not in body.code:\n            findings.append(\"no explicit return found\")\n        if len(body.code.strip()) < 20:\n            findings.append(\"implementation is unusually short\")\n        self.last_findings = tuple(findings)\n        self.status = \"COMPLETE\"\n        runtime.send(Message(self.actor_id, \"reviewer\", \"checklist_result\",\n                             ChecklistResult(self.last_findings, not findings, body.review_id)))\n\n\nclass KeyedReviewer(ReviewerAgent):\n    \"\"\"Fix: per-review state keyed by review_id, so reviews can be in flight together.\"\"\"\n\n    def __init__(self, actor_id):\n        super().__init__(actor_id)\n        self.pending = {}\n        self.verdicts = {}\n\n    def _on_review(self, message, runtime):\n        body = message.body\n        findings = tuple(f for cond, f in ((\"eval(\" in body.code, \"avoid eval()\"), (\"except:\" in body.code, \"avoid bare except\")) if cond)\n        self.pending[body.review_id] = findings\n        runtime.send(Message(self.actor_id, \"checklist\", \"checklist_request\", ChecklistRequest(body.code, findings, body.simulate_failure, body.review_id)))\n\n    def _on_result(self, message, runtime):\n        body = message.body\n        all_findings = self.pending.pop(body.review_id) + body.findings\n        self.verdicts[body.review_id] = (\"APPROVED\" if (not all_findings and body.passed) else \"CHANGES_REQUESTED\", all_findings)"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "actor_3.py",
    "headingEn": "main(): the five cases and two checks",
    "headingKn": "main(): ಐದು ಪ್ರಕರಣಗಳು ಮತ್ತು ಎರಡು ಪರಿಶೀಲನೆಗಳು",
    "descEn": "main() runs healthy code, problematic code, a simulated failure, a request after the failure, and a dead letter; then sends a malformed body, and finally puts two reviews in flight against the single-slot reviewer and the keyed reviewer.",
    "descKn": "main() ಆರೋಗ್ಯಕರ ಕೋಡ್, ಸಮಸ್ಯಾತ್ಮಕ ಕೋಡ್, ಸಿಮ್ಯುಲೇಟೆಡ್ ವೈಫಲ್ಯ, ವೈಫಲ್ಯದ ನಂತರದ ವಿನಂತಿ ಮತ್ತು dead letter ಚಲಾಯಿಸುತ್ತದೆ; ನಂತರ ವಿರೂಪ body ಕಳುಹಿಸಿ, ಕೊನೆಗೆ ಏಕ-ಸ್ಲಾಟ್ reviewer ಮತ್ತು keyed reviewer ವಿರುದ್ಧ ಎರಡು reviews ಅನ್ನು ಏಕಕಾಲಕ್ಕೆ ನಡೆಸುತ್ತದೆ.",
    "code": "HEALTHY = \"def add(a, b):\\n    return a + b\"\nEVAL_ONLY = \"def f(x):\\n    return eval(x)\"\nPROBLEM = \"def run(user_input):\\n    try:\\n        eval(user_input)\\n    except:\\n        print('failed')\"\n\n\ndef submit(rt, code, **kw):\n    rt.send(Message(\"main\", \"reviewer\", \"review_request\", ReviewRequest(code, **kw)))\n    rt.run()\n\n\ndef section(t):\n    print(f\"\\n--- {t} ---\")\n\n\ndef main():\n    rt = Runtime()\n    reviewer, checklist = ReviewerAgent(\"reviewer\"), ChecklistAgent(\"checklist\")\n    rt.register(reviewer)\n    rt.register(checklist)\n\n    section(\"CASE 1: healthy code\")\n    submit(rt, HEALTHY)\n    section(\"CASE 2: problematic code\")\n    submit(rt, PROBLEM, review_id=\"r-2\")\n    section(\"CASE 3: simulated actor failure\")\n    submit(rt, HEALTHY, simulate_failure=True, review_id=\"r-3\")\n    section(\"CASE 4: runtime still alive\")\n    submit(rt, HEALTHY, review_id=\"r-4\")\n    section(\"CASE 5: dead letter\")\n    rt.send(Message(\"main\", \"missing-agent\", \"ping\", None))\n    rt.run()\n\n    section(\"Final state\")\n    print(f\"reviewer.review_count={reviewer.review_count} checklist.check_count={checklist.check_count}\")\n    print(f\"reviewer.status={reviewer.status} final_verdict={reviewer.final_verdict.verdict}\")\n    print(f\"runtime.failures={len(rt.failures)} runtime.dead_letters={len(rt.dead_letters)}\")\n\n    section(\"Genuinely checking: typed payloads reject a malformed message\")\n    rt_bad = Runtime()\n    rt_bad.register(ReviewerAgent(\"reviewer\"))\n    rt_bad.send(Message(\"main\", \"reviewer\", \"review_request\", {\"code\": \"x\"}))\n    rt_bad.run()\n    print(\"failure recorded:\", rt_bad.failures)\n\n    section(\"Genuinely checking: two reviews in flight share one state slot\")\n    rt_a = Runtime()\n    shared = ReviewerAgent(\"reviewer\")\n    rt_a.register(shared)\n    rt_a.register(ChecklistAgent(\"checklist\"))\n    rt_a.send(Message(\"main\", \"reviewer\", \"review_request\", ReviewRequest(EVAL_ONLY, review_id=\"A-eval-only\")))\n    rt_a.send(Message(\"main\", \"reviewer\", \"review_request\", ReviewRequest(HEALTHY, review_id=\"B-healthy\")))\n    rt_a.run()\n    print(\"A is code the reviewer alone can flag (eval with a return); its correct verdict is CHANGES_REQUESTED\")\n\n    section(\"The fix: state keyed by review_id\")\n    rt_b = Runtime()\n    keyed = KeyedReviewer(\"reviewer\")\n    rt_b.register(keyed)\n    rt_b.register(ChecklistAgent(\"checklist\"))\n    rt_b.send(Message(\"main\", \"reviewer\", \"review_request\", ReviewRequest(EVAL_ONLY, review_id=\"A-eval-only\")))\n    rt_b.send(Message(\"main\", \"reviewer\", \"review_request\", ReviewRequest(HEALTHY, review_id=\"B-healthy\")))\n    rt_b.run()\n    for rid, (verdict, findings) in sorted(keyed.verdicts.items()):\n        print(f\"{rid}: {verdict} {list(findings)}\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- CASE 1: healthy code ---\n[send] main -> reviewer topic=review_request\n[deliver] reviewer <- main topic=review_request\n[reviewer] review=1 findings=[]\n[send] reviewer -> checklist topic=checklist_request\n[deliver] checklist <- reviewer topic=checklist_request\n[checklist] check=1\n[send] checklist -> reviewer topic=checklist_result\n[deliver] reviewer <- checklist topic=checklist_result\n[reviewer] consensus=APPROVED review_id=r-1 combined_findings=[]\n\n--- CASE 2: problematic code ---\n[send] main -> reviewer topic=review_request\n[deliver] reviewer <- main topic=review_request\n[reviewer] review=2 findings=['avoid eval()', 'avoid bare except']\n[send] reviewer -> checklist topic=checklist_request\n[deliver] checklist <- reviewer topic=checklist_request\n[checklist] check=2\n[send] checklist -> reviewer topic=checklist_result\n[deliver] reviewer <- checklist topic=checklist_result\n[reviewer] consensus=CHANGES_REQUESTED review_id=r-2 combined_findings=['avoid eval()', 'avoid bare except', 'no explicit return found']\n\n--- CASE 3: simulated actor failure ---\n[send] main -> reviewer topic=review_request\n[deliver] reviewer <- main topic=review_request\n[reviewer] review=3 findings=[]\n[send] reviewer -> checklist topic=checklist_request\n[deliver] checklist <- reviewer topic=checklist_request\n[checklist] check=3\n[failure] actor=checklist topic=checklist_request error=simulated checklist failure\n\n--- CASE 4: runtime still alive ---\n[send] main -> reviewer topic=review_request\n[deliver] reviewer <- main topic=review_request\n[reviewer] review=4 findings=[]\n[send] reviewer -> checklist topic=checklist_request\n[deliver] checklist <- reviewer topic=checklist_request\n[checklist] check=4\n[send] checklist -> reviewer topic=checklist_result\n[deliver] reviewer <- checklist topic=checklist_result\n[reviewer] consensus=APPROVED review_id=r-4 combined_findings=[]\n\n--- CASE 5: dead letter ---\n[send] main -> missing-agent topic=ping\n[deliver] missing-agent <- main topic=ping\n[dead-letter] recipient=missing-agent topic=ping\n\n--- Final state ---\nreviewer.review_count=4 checklist.check_count=4\nreviewer.status=COMPLETE final_verdict=APPROVED\nruntime.failures=1 runtime.dead_letters=1\n\n--- Genuinely checking: typed payloads reject a malformed message ---\n[send] main -> reviewer topic=review_request\n[deliver] reviewer <- main topic=review_request\n[failure] actor=reviewer topic=review_request error=review_request requires ReviewRequest\nfailure recorded: [{'actor': 'reviewer', 'topic': 'review_request', 'error': 'review_request requires ReviewRequest'}]\n\n--- Genuinely checking: two reviews in flight share one state slot ---\n[send] main -> reviewer topic=review_request\n[send] main -> reviewer topic=review_request\n[deliver] reviewer <- main topic=review_request\n[reviewer] review=1 findings=['avoid eval()']\n[send] reviewer -> checklist topic=checklist_request\n[deliver] reviewer <- main topic=review_request\n[reviewer] review=2 findings=[]\n[send] reviewer -> checklist topic=checklist_request\n[deliver] checklist <- reviewer topic=checklist_request\n[checklist] check=1\n[send] checklist -> reviewer topic=checklist_result\n[deliver] checklist <- reviewer topic=checklist_request\n[checklist] check=2\n[send] checklist -> reviewer topic=checklist_result\n[deliver] reviewer <- checklist topic=checklist_result\n[reviewer] consensus=APPROVED review_id=A-eval-only combined_findings=[]\n[deliver] reviewer <- checklist topic=checklist_result\n[reviewer] consensus=APPROVED review_id=B-healthy combined_findings=[]\nA is code the reviewer alone can flag (eval with a return); its correct verdict is CHANGES_REQUESTED\n\n--- The fix: state keyed by review_id ---\n[send] main -> reviewer topic=review_request\n[send] main -> reviewer topic=review_request\n[deliver] reviewer <- main topic=review_request\n[send] reviewer -> checklist topic=checklist_request\n[deliver] reviewer <- main topic=review_request\n[send] reviewer -> checklist topic=checklist_request\n[deliver] checklist <- reviewer topic=checklist_request\n[checklist] check=1\n[send] checklist -> reviewer topic=checklist_result\n[deliver] checklist <- reviewer topic=checklist_request\n[checklist] check=2\n[send] checklist -> reviewer topic=checklist_result\n[deliver] reviewer <- checklist topic=checklist_result\n[deliver] reviewer <- checklist topic=checklist_result\nA-eval-only: CHANGES_REQUESTED ['avoid eval()']\nB-healthy: APPROVED []"
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
    "headingEn": "Five Cases as Evidence",
    "headingKn": "ಐದು ಪ್ರಕರಣಗಳು ಸಾಕ್ಷ್ಯವಾಗಿ",
    "bodyEn": "Case 1: healthy code gives APPROVED with no findings. Case 2: the reviewer finds eval and a bare except and the checklist finds no return, so the verdict is CHANGES_REQUESTED with three combined findings. Case 3: the checklist raises, the trace shows \"[failure] actor=checklist\", and no exception ends the program. Case 4: a fresh healthy request after the crash reaches APPROVED, the strongest evidence that the runtime survived. Case 5: a message to \"missing-agent\" becomes a stored dead letter. Final state: reviewer.review_count 4, checklist.check_count 4, one failure, one dead letter.",
    "bodyKn": "ಪ್ರಕರಣ 1: ಆರೋಗ್ಯಕರ ಕೋಡ್ ಕಂಡುಹಿಡಿತಗಳಿಲ್ಲದೆ APPROVED ನೀಡುತ್ತದೆ. ಪ್ರಕರಣ 2: reviewer eval ಮತ್ತು bare except ಕಂಡುಹಿಡಿಯುತ್ತದೆ, checklist return ಇಲ್ಲ ಎಂದು ಕಂಡುಹಿಡಿಯುತ್ತದೆ, ಆದ್ದರಿಂದ ತೀರ್ಪು ಮೂರು ಸಂಯೋಜಿತ ಕಂಡುಹಿಡಿತಗಳೊಂದಿಗೆ CHANGES_REQUESTED. ಪ್ರಕರಣ 3: checklist ದೋಷ ಎತ್ತುತ್ತದೆ, trace \"[failure] actor=checklist\" ತೋರಿಸುತ್ತದೆ, ಮತ್ತು ಯಾವುದೇ ವಿನಾಯಿತಿ ಪ್ರೋಗ್ರಾಂ ಕೊನೆಗೊಳಿಸುವುದಿಲ್ಲ. ಪ್ರಕರಣ 4: crash ನಂತರದ ಹೊಸ ಆರೋಗ್ಯಕರ ವಿನಂತಿ APPROVED ತಲುಪುತ್ತದೆ, runtime ಉಳಿಯಿತು ಎಂಬುದಕ್ಕೆ ಬಲಿಷ್ಠ ಸಾಕ್ಷ್ಯ. ಪ್ರಕರಣ 5: \"missing-agent\" ಗೆ ಸಂದೇಶ ಸಂಗ್ರಹಿತ dead letter ಆಗುತ್ತದೆ. ಅಂತಿಮ state: reviewer.review_count 4, checklist.check_count 4, ಒಂದು ವೈಫಲ್ಯ, ಒಂದು dead letter."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Interleaved Reviews Corrupt a Single-Slot Actor",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಅಂತರ್‌ಮಿಶ್ರ Reviews ಏಕ-ಸ್ಲಾಟ್ Actor ಅನ್ನು ಹಾಳುಮಾಡುತ್ತವೆ",
    "bodyEn": "The last check queues two reviews before running: review A is code only the reviewer can flag (a function that returns eval(x)), review B is healthy code. The queue order is request A, request B, checklist-for-A, checklist-for-B. The reviewer handles B's request before A's checklist result returns, overwriting its single reviewer_findings slot with B's empty tuple. Result: \"consensus=APPROVED review_id=A-eval-only combined_findings=[]\". The eval code was approved, because the result for A was combined with B's findings. With state keyed by review_id the same inputs give A-eval-only: CHANGES_REQUESTED [avoid eval()] and B-healthy: APPROVED. Every ChecklistResult must carry the id of the request it answers, and any actor that can have work in flight must index its state by that id.",
    "bodyKn": "ಕೊನೆಯ ಪರಿಶೀಲನೆ ಚಲಾಯಿಸುವ ಮೊದಲು ಎರಡು reviews ಅನ್ನು ಸರತಿ ಸೇರಿಸುತ್ತದೆ: review A reviewer ಮಾತ್ರ ಗುರುತಿಸಬಲ್ಲ ಕೋಡ್ (eval(x) ಹಿಂತಿರುಗಿಸುವ ಕಾರ್ಯ), review B ಆರೋಗ್ಯಕರ ಕೋಡ್. ಸರತಿ ಕ್ರಮ: ವಿನಂತಿ A, ವಿನಂತಿ B, A ಗೆ checklist, B ಗೆ checklist. A ಯ checklist ಫಲಿತಾಂಶ ಮರಳುವ ಮೊದಲು reviewer B ಯ ವಿನಂತಿ ನಿರ್ವಹಿಸಿ ತನ್ನ ಏಕ reviewer_findings ಸ್ಲಾಟ್ ಅನ್ನು B ಯ ಖಾಲಿ tuple ನಿಂದ ಬದಲಿಸುತ್ತದೆ. ಫಲಿತಾಂಶ: \"consensus=APPROVED review_id=A-eval-only combined_findings=[]\". A ಯ ಫಲಿತಾಂಶ B ಯ ಕಂಡುಹಿಡಿತಗಳೊಂದಿಗೆ ಸಂಯೋಜನೆಯಾದ್ದರಿಂದ eval ಕೋಡ್ ಅನುಮೋದನೆಗೊಂಡಿತು. State ಅನ್ನು review_id ಯಿಂದ key ಮಾಡಿದರೆ ಅದೇ ಇನ್‌ಪುಟ್‌ಗಳು A-eval-only: CHANGES_REQUESTED [avoid eval()] ಮತ್ತು B-healthy: APPROVED ನೀಡುತ್ತವೆ. ಪ್ರತಿ ChecklistResult ತಾನು ಉತ್ತರಿಸುವ ವಿನಂತಿಯ id ಹೊತ್ತಿರಬೇಕು, ಮತ್ತು ಕೆಲಸ ಜಾರಿಯಲ್ಲಿರಬಹುದಾದ ಯಾವುದೇ actor ತನ್ನ state ಅನ್ನು ಆ id ಯಿಂದ ಸೂಚಿಸಬೇಕು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Typed Payloads Turn Bad Input Into a Rejected Message",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Typed Payloads ಕೆಟ್ಟ ಇನ್‌ಪುಟ್ ಅನ್ನು ತಿರಸ್ಕೃತ ಸಂದೇಶವಾಗಿಸುತ್ತವೆ",
    "bodyEn": "Sending a review_request whose body is a plain dict instead of a ReviewRequest produces a recorded failure, \"review_request requires ReviewRequest\", rather than a KeyError deep inside the review logic. Validation at the handler edge is the cheap form of a typed runtime. A stronger runtime would hold a registry mapping each topic to its payload type and reject malformed messages before delivery, which also becomes the contract when messages cross a process boundary.",
    "bodyKn": "body ReviewRequest ಬದಲು ಸಾಮಾನ್ಯ dict ಆಗಿರುವ review_request ಕಳುಹಿಸುವುದು review ತರ್ಕದ ಆಳದಲ್ಲಿ KeyError ಬದಲು ದಾಖಲಿತ ವೈಫಲ್ಯ \"review_request requires ReviewRequest\" ಉತ್ಪಾದಿಸುತ್ತದೆ. Handler ಅಂಚಿನಲ್ಲಿನ ಮಾನ್ಯತೆ typed runtime ನ ಅಗ್ಗದ ರೂಪ. ಬಲಿಷ್ಠ runtime ಪ್ರತಿ topic ಅನ್ನು ಅದರ payload ಪ್ರಕಾರಕ್ಕೆ ನಕ್ಷೆ ಮಾಡುವ ನೋಂದಣಿ ಹೊಂದಿ ವಿರೂಪ ಸಂದೇಶಗಳನ್ನು ವಿತರಣೆಗೆ ಮೊದಲೇ ತಿರಸ್ಕರಿಸುತ್ತದೆ, ಸಂದೇಶಗಳು ಪ್ರಕ್ರಿಯೆ ಗಡಿ ದಾಟಿದಾಗ ಅದೂ ಒಪ್ಪಂದವಾಗುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "What This Demo Does and Does Not Prove",
    "headingKn": "ಈ ಪ್ರಾತ್ಯಕ್ಷಿಕೆ ಏನು ಸಾಬೀತುಪಡಿಸುತ್ತದೆ ಮತ್ತು ಏನು ಮಾಡುವುದಿಲ್ಲ",
    "bodyEn": "It proves that actors keep separate state, communicate only through messages, share a runtime that routes and isolates, can converge on a verdict by exchanging messages, and survive one actor's crash. It does not prove distribution, persistent mailboxes, exactly-once delivery, automatic restart, high throughput or security. Moving to async or to a broker changes the scheduler or the transport and leaves the protocol alone; durable actor state would connect this lesson to checkpoints and replay.",
    "bodyKn": "ಅದು actors ಪ್ರತ್ಯೇಕ state ಇಟ್ಟು, ಕೇವಲ ಸಂದೇಶಗಳ ಮೂಲಕ ಸಂವಹನ ಮಾಡಿ, ಮಾರ್ಗ ತೋರಿಸಿ ಪ್ರತ್ಯೇಕಿಸುವ runtime ಹಂಚಿಕೊಂಡು, ಸಂದೇಶ ವಿನಿಮಯದಿಂದ ತೀರ್ಪಿಗೆ ಒಮ್ಮತ ಪಡೆದು, ಒಬ್ಬ actor ನ crash ಅನ್ನು ಉಳಿಯಬಲ್ಲವು ಎಂದು ಸಾಬೀತುಪಡಿಸುತ್ತದೆ. ವಿತರಣೆ, ಸ್ಥಿರ mailboxes, ಸರಿಯಾಗಿ-ಒಮ್ಮೆ ವಿತರಣೆ, ಸ್ವಯಂ ಮರುಪ್ರಾರಂಭ, ಹೆಚ್ಚಿನ ಥ್ರೂಪುಟ್ ಅಥವಾ ಭದ್ರತೆಯನ್ನು ಅದು ಸಾಬೀತುಪಡಿಸುವುದಿಲ್ಲ. async ಅಥವಾ broker ಗೆ ಹೋಗುವುದು ವೇಳಾಪಟ್ಟಿ ಅಥವಾ ಸಾಗಣೆ ಬದಲಿಸುತ್ತದೆ ಮತ್ತು ಪ್ರೋಟೋಕಾಲ್ ಹಾಗೇ ಬಿಡುತ್ತದೆ; ಸ್ಥಿರ actor state ಈ ಪಾಠವನ್ನು checkpoints ಮತ್ತು replay ಗೆ ಸಂಪರ್ಕಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Actors Versus Graphs and Tools",
    "headingKn": "Actors ಮತ್ತು Graphs ಹಾಗೂ Tools",
    "bodyEn": "A stateful graph centralises workflow state and drives transitions; actors distribute private state and let messages drive behaviour. Tool calling gives an agent subordinate capabilities; an actor is an independent stateful participant, and an actor's handler may itself call tools. Use actors when components really are long-lived, independently failing entities; three deterministic steps need only functions.",
    "bodyKn": "Stateful graph workflow state ಅನ್ನು ಕೇಂದ್ರೀಕರಿಸಿ ಪರಿವರ್ತನೆಗಳನ್ನು ನಡೆಸುತ್ತದೆ; actors ಖಾಸಗಿ state ಹಂಚಿ ಸಂದೇಶಗಳು ವರ್ತನೆ ನಡೆಸಲು ಬಿಡುತ್ತವೆ. Tool calling agent ಗೆ ಅಧೀನ ಸಾಮರ್ಥ್ಯ ನೀಡುತ್ತದೆ; actor ಸ್ವತಂತ್ರ stateful ಭಾಗವಹಿಸುವವನು, ಮತ್ತು actor ನ handler ಸ್ವತಃ tools ಕರೆಯಬಹುದು. ಘಟಕಗಳು ನಿಜವಾಗಿ ದೀರ್ಘಕಾಲ ಬದುಕುವ, ಸ್ವತಂತ್ರವಾಗಿ ವಿಫಲವಾಗುವ ಘಟಕಗಳಾದಾಗ actors ಬಳಸಿ; ಮೂರು ನಿರ್ಧಾರಾತ್ಮಕ ಹೆಜ್ಜೆಗಳಿಗೆ ಕಾರ್ಯಗಳೇ ಸಾಕು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "It gives multi-agent systems explicit ownership, observable communication, a place to contain failures and a route to distribution, while keeping the agent logic (LLM or not) behind a small handler contract.",
    "bodyKn": "ಇದು ಬಹು-agent ವ್ಯವಸ್ಥೆಗಳಿಗೆ ಸ್ಪಷ್ಟ ಮಾಲೀಕತ್ವ, ಗಮನಿಸಬಹುದಾದ ಸಂವಹನ, ವೈಫಲ್ಯ ನಿಯಂತ್ರಿಸುವ ಸ್ಥಳ ಮತ್ತು ವಿತರಣೆಗೆ ದಾರಿ ನೀಡುತ್ತದೆ, agent ತರ್ಕವನ್ನು (LLM ಆಗಿರಲಿ ಇಲ್ಲದಿರಲಿ) ಚಿಕ್ಕ handler ಒಪ್ಪಂದದ ಹಿಂದೆ ಇಟ್ಟು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"actors remove concurrency bugs.\" One actor handling one message at a time removes races inside the actor, but state shared across in-flight conversations, as the single-slot reviewer showed, is still a bug you design out.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"actors concurrency ದೋಷಗಳನ್ನು ತೆಗೆಯುತ್ತವೆ.\" ಒಂದು ಸಮಯದಲ್ಲಿ ಒಂದು ಸಂದೇಶ ನಿರ್ವಹಿಸುವ actor actor ಒಳಗಿನ races ತೆಗೆಯುತ್ತದೆ, ಆದರೆ ಏಕ-ಸ್ಲಾಟ್ reviewer ತೋರಿಸಿದಂತೆ ಜಾರಿಯಲ್ಲಿರುವ ಸಂಭಾಷಣೆಗಳ ನಡುವೆ ಹಂಚಿದ state ಇನ್ನೂ ನೀವು ವಿನ್ಯಾಸದಿಂದ ತೆಗೆಯಬೇಕಾದ ದೋಷ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Typed payload: a frozen dataclass per message kind. Correlation id: links a response to its request. Dead letter: a stored undeliverable message. Consensus: independent results combined into one outcome. Transport: what carries messages. Trust boundary: where unvalidated input meets validation.",
    "bodyKn": "Typed payload: ಪ್ರತಿ ಸಂದೇಶ ಬಗೆಗೆ ಒಂದು ಫ್ರೋಜನ್ dataclass. Correlation id: ಪ್ರತಿಕ್ರಿಯೆಯನ್ನು ಅದರ ವಿನಂತಿಗೆ ಜೋಡಿಸುತ್ತದೆ. Dead letter: ಸಂಗ್ರಹಿಸಿದ ತಲುಪಿಸಲಾಗದ ಸಂದೇಶ. Consensus: ಸ್ವತಂತ್ರ ಫಲಿತಾಂಶಗಳು ಒಂದು ಫಲಿತಾಂಶವಾಗಿ ಸಂಯೋಜನೆ. Transport: ಸಂದೇಶಗಳನ್ನು ಒಯ್ಯುವುದು. Trust boundary: ಮಾನ್ಯ ಮಾಡದ ಇನ್‌ಪುಟ್ ಮಾನ್ಯತೆ ಭೇಟಿಯಾಗುವ ಸ್ಥಳ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) Typed payloads make the protocol explicit and malformed input a recorded failure. 2) Five cases showed consensus, a contained crash, a later success and a dead letter. 3) State replaces the suspended call stack. 4) With one state slot, two in-flight reviews made the reviewer approve eval code. 5) Keying state by review_id fixed it. 6) The demo does not prove distribution, persistence or exactly-once delivery. 7) Transport and scheduler can change while the actor protocol stays.",
    "bodyKn": "1) Typed payloads ಪ್ರೋಟೋಕಾಲ್ ಸ್ಪಷ್ಟಗೊಳಿಸಿ ವಿರೂಪ ಇನ್‌ಪುಟ್ ಅನ್ನು ದಾಖಲಿತ ವೈಫಲ್ಯವಾಗಿಸುತ್ತವೆ. 2) ಐದು ಪ್ರಕರಣಗಳು ಒಮ್ಮತ, ನಿಯಂತ್ರಿತ crash, ನಂತರದ ಯಶಸ್ಸು ಮತ್ತು dead letter ತೋರಿಸಿದವು. 3) State ಸ್ಥಗಿತ ಕರೆ ಸ್ಟ್ಯಾಕ್ ಅನ್ನು ಬದಲಿಸುತ್ತದೆ. 4) ಒಂದು state ಸ್ಲಾಟ್‌ನೊಂದಿಗೆ ಎರಡು ಜಾರಿಯ reviews reviewer ಅನ್ನು eval ಕೋಡ್ ಅನುಮೋದಿಸುವಂತೆ ಮಾಡಿದವು. 5) State ಅನ್ನು review_id ಯಿಂದ key ಮಾಡುವುದು ಸರಿಪಡಿಸಿತು. 6) ಪ್ರಾತ್ಯಕ್ಷಿಕೆ ವಿತರಣೆ, ಸ್ಥಿರತೆ ಅಥವಾ ಸರಿಯಾಗಿ-ಒಮ್ಮೆ ವಿತರಣೆ ಸಾಬೀತುಪಡಿಸುವುದಿಲ್ಲ. 7) actor ಪ್ರೋಟೋಕಾಲ್ ಉಳಿದು ಸಾಗಣೆ ಮತ್ತು ವೇಳಾಪಟ್ಟಿ ಬದಲಾಗಬಹುದು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What is the defining state-ownership rule of the actor model?",
      "qKn": "Actor ಮಾದರಿಯ ಮೂಲ state-ಮಾಲೀಕತ್ವ ನಿಯಮ ಏನು?",
      "opts": [
       "All actors share one global dictionary",
       "Actors own private state and communicate through messages",
       "Actors cannot hold state",
       "Only the runtime has variables"
      ],
      "optsKn": [
       "ಎಲ್ಲಾ actors ಒಂದು ಜಾಗತಿಕ ನಿಘಂಟು ಹಂಚಿಕೊಳ್ಳುತ್ತವೆ",
       "Actors ಖಾಸಗಿ state ಹೊಂದಿ ಸಂದೇಶಗಳ ಮೂಲಕ ಸಂವಹನ ಮಾಡುತ್ತವೆ",
       "Actors state ಹೊಂದಲಾರವು",
       "Runtime ಮಾತ್ರ ಚರಗಳನ್ನು ಹೊಂದಿದೆ"
      ],
      "correct": 1
     },
     {
      "q": "Which case gave the strongest evidence that the runtime survived the checklist crash?",
      "qKn": "Checklist crash ಅನ್ನು runtime ಉಳಿಯಿತು ಎಂಬುದಕ್ಕೆ ಯಾವ ಪ್ರಕರಣ ಬಲಿಷ್ಠ ಸಾಕ್ಷ್ಯ ನೀಡಿತು?",
      "opts": [
       "The failure being logged",
       "Case 4, a fresh healthy review reaching APPROVED after the crash",
       "The dead letter",
       "The final counters"
      ],
      "optsKn": [
       "ವೈಫಲ್ಯ ದಾಖಲಾಗಿದ್ದು",
       "ಪ್ರಕರಣ 4, crash ನಂತರ ಹೊಸ ಆರೋಗ್ಯಕರ review APPROVED ತಲುಪಿದ್ದು",
       "Dead letter",
       "ಅಂತಿಮ ಕೌಂಟರ್‌ಗಳು"
      ],
      "correct": 1
     },
     {
      "q": "In the interleaved run, why was the eval code approved?",
      "qKn": "ಅಂತರ್‌ಮಿಶ್ರ ಓಟದಲ್ಲಿ eval ಕೋಡ್ ಏಕೆ ಅನುಮೋದನೆಗೊಂಡಿತು?",
      "opts": [
       "The checklist approved it",
       "The reviewer's single findings slot was overwritten by the second review before the first result returned",
       "eval is safe",
       "The runtime reordered the result"
      ],
      "optsKn": [
       "Checklist ಅನುಮೋದಿಸಿತು",
       "ಮೊದಲ ಫಲಿತಾಂಶ ಮರಳುವ ಮೊದಲು ಎರಡನೇ review reviewer ನ ಏಕ ಕಂಡುಹಿಡಿತ ಸ್ಲಾಟ್ ಅನ್ನು ಬದಲಿಸಿತು",
       "eval ಸುರಕ್ಷಿತ",
       "Runtime ಫಲಿತಾಂಶ ಮರುಕ್ರಮಗೊಳಿಸಿತು"
      ],
      "correct": 1
     },
     {
      "q": "What fixed it?",
      "qKn": "ಇದನ್ನು ಯಾವುದು ಸರಿಪಡಿಸಿತು?",
      "opts": [
       "A bigger queue",
       "Carrying a review_id and keying the reviewer's pending state by it",
       "Removing the checklist",
       "More threads"
      ],
      "optsKn": [
       "ದೊಡ್ಡ ಸರತಿ",
       "review_id ಹೊತ್ತು reviewer ನ ಬಾಕಿ state ಅನ್ನು ಅದರಿಂದ key ಮಾಡುವುದು",
       "Checklist ತೆಗೆಯುವುದು",
       "ಹೆಚ್ಚು threads"
      ],
      "correct": 1
     },
     {
      "q": "Which statement is NOT proven by the demo?",
      "qKn": "ಯಾವ ಹೇಳಿಕೆಯನ್ನು ಪ್ರಾತ್ಯಕ್ಷಿಕೆ ಸಾಬೀತುಪಡಿಸುವುದಿಲ್ಲ?",
      "opts": [
       "Actors keep separate state",
       "A handler failure did not terminate the runtime",
       "Messages are delivered exactly once across machines",
       "Unknown recipients become dead letters"
      ],
      "optsKn": [
       "Actors ಪ್ರತ್ಯೇಕ state ಇಡುತ್ತವೆ",
       "Handler ವೈಫಲ್ಯ runtime ಕೊನೆಗೊಳಿಸಲಿಲ್ಲ",
       "ಸಂದೇಶಗಳು ಯಂತ್ರಗಳಾದ್ಯಂತ ಸರಿಯಾಗಿ ಒಮ್ಮೆ ವಿತರಿಸಲ್ಪಡುತ್ತವೆ",
       "ಅಜ್ಞಾತ ಸ್ವೀಕರಿಸುವವರು dead letters ಆಗುತ್ತಾರೆ"
      ],
      "correct": 2
     }
    ]
   }
  }
 ]
};
