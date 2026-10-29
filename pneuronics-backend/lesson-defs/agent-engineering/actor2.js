module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6166020ed05b321535",
 "order": 1,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "The Actor Model for Agents: Async Messages and Typed Runtimes (Part 2 of 3) — Fault Isolation and Concurrency",
 "titleKn": "Agents ಗಾಗಿ Actor ಮಾದರಿ: Async ಸಂದೇಶಗಳು ಮತ್ತು Typed Runtimes (ಭಾಗ 2 / 3) — ವೈಫಲ್ಯ ಪ್ರತ್ಯೇಕತೆ ಮತ್ತು Concurrency",
 "desc": "Add a delivery boundary that isolates handler failures and stores dead letters, then find that isolation is not recovery, retries duplicate work, SystemExit escapes, and independent actors overlap in measured time.",
 "descKn": "Handler ವೈಫಲ್ಯಗಳನ್ನು ಪ್ರತ್ಯೇಕಿಸಿ dead letters ಸಂಗ್ರಹಿಸುವ ವಿತರಣಾ ಗಡಿ ಸೇರಿಸಿ, ಮತ್ತು ಪ್ರತ್ಯೇಕತೆ ಚೇತರಿಕೆ ಅಲ್ಲ, ಮರುಪ್ರಯತ್ನ ಕೆಲಸ ನಕಲು ಮಾಡುತ್ತದೆ, SystemExit ತಪ್ಪಿಸಿಕೊಳ್ಳುತ್ತದೆ, ಮತ್ತು ಸ್ವತಂತ್ರ actors ಅಳೆದ ಸಮಯದಲ್ಲಿ ಅತಿಕ್ರಮಿಸುತ್ತವೆ ಎಂದು ಕಂಡುಹಿಡಿಯಿರಿ.",
 "objectives": [
  "Isolate handler failures at the runtime delivery boundary.",
  "Store undeliverable messages as dead letters.",
  "Explain why isolation is not recovery and add a failure notification.",
  "Make handlers idempotent against duplicate delivery.",
  "Measure per-actor concurrency."
 ],
 "objectivesKn": [
  "Runtime ವಿತರಣಾ ಗಡಿಯಲ್ಲಿ handler ವೈಫಲ್ಯಗಳನ್ನು ಪ್ರತ್ಯೇಕಿಸಿ.",
  "ತಲುಪಿಸಲಾಗದ ಸಂದೇಶಗಳನ್ನು dead letters ಆಗಿ ಸಂಗ್ರಹಿಸಿ.",
  "ಪ್ರತ್ಯೇಕತೆ ಚೇತರಿಕೆ ಅಲ್ಲ ಏಕೆ ಎಂದು ವಿವರಿಸಿ ಮತ್ತು ವೈಫಲ್ಯ ಸೂಚನೆ ಸೇರಿಸಿ.",
  "ನಕಲು ವಿತರಣೆ ವಿರುದ್ಧ handlers ಅನ್ನು idempotent ಮಾಡಿ.",
  "ಪ್ರತಿ-actor concurrency ಅಳೆಯಿರಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "The Actor Model for Agents: Async Messages and Typed Runtimes (Part 2 of 3)",
    "textKn": "Agents ಗಾಗಿ Actor ಮಾದರಿ: Async ಸಂದೇಶಗಳು ಮತ್ತು Typed Runtimes (ಭಾಗ 2 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 2 of 3: fault isolation, dead letters, retries, failure notification and per-actor concurrency. Every output below was genuinely produced by the lab file on Python 3.14.5. The pasted source was cut off in its architecture summary, which is rebuilt. Timings are real measurements on this machine and will differ slightly on yours. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 2ನೆಯದು: ವೈಫಲ್ಯ ಪ್ರತ್ಯೇಕತೆ, dead letters, ಮರುಪ್ರಯತ್ನ, ವೈಫಲ್ಯ ಸೂಚನೆ ಮತ್ತು ಪ್ರತಿ-actor concurrency. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಅಂಟಿಸಿದ ಮೂಲ ಅದರ ವಿನ್ಯಾಸ ಸಾರಾಂಶದಲ್ಲಿ ಕತ್ತರಿಸಲ್ಪಟ್ಟಿತ್ತು, ಅದನ್ನು ಮರುನಿರ್ಮಿಸಲಾಗಿದೆ. ಸಮಯಗಳು ಈ ಯಂತ್ರದ ನಿಜವಾದ ಅಳತೆಗಳು ಮತ್ತು ನಿಮ್ಮದರಲ್ಲಿ ಸ್ವಲ್ಪ ಬೇರೆ ಇರುತ್ತವೆ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Isolation and Concurrency",
    "textKn": "ಪ್ರತ್ಯೇಕತೆ ಮತ್ತು Concurrency",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "The Failure Boundary",
    "headingKn": "ವೈಫಲ್ಯ ಗಡಿ",
    "bodyEn": "With a synchronous call, the callee's exception rides up the same stack into the caller. With messaging, the sender's send() has already returned when the receiver runs, so the receiver's handler executes under the runtime's delivery method. Wrapping actor.receive in try/except there makes a crashed actor a recorded failure: the event loop continues, unrelated actors keep working, and the failure becomes data (actor, topic, error) that policy can act on. An unknown recipient becomes a dead letter that is stored and not silently dropped.",
    "bodyKn": "ಸಿಂಕ್ರೋನಸ್ ಕರೆಯಲ್ಲಿ callee ನ ವಿನಾಯಿತಿ ಅದೇ ಸ್ಟ್ಯಾಕ್ ಮೂಲಕ caller ಗೆ ಏರುತ್ತದೆ. ಸಂದೇಶ ವಿನಿಮಯದಲ್ಲಿ ಸ್ವೀಕರಿಸುವವರು ಚಲಿಸುವಾಗ ಕಳುಹಿಸುವವರ send() ಈಗಾಗಲೇ ಹಿಂತಿರುಗಿದೆ, ಆದ್ದರಿಂದ ಸ್ವೀಕರಿಸುವವರ handler runtime ನ ವಿತರಣಾ ವಿಧಾನದ ಅಡಿಯಲ್ಲಿ ಚಲಿಸುತ್ತದೆ. ಅಲ್ಲಿ actor.receive ಅನ್ನು try/except ನಲ್ಲಿ ಸುತ್ತುವುದು crash ಆದ actor ಅನ್ನು ದಾಖಲಿತ ವೈಫಲ್ಯವಾಗಿಸುತ್ತದೆ: event loop ಮುಂದುವರಿಯುತ್ತದೆ, ಸಂಬಂಧವಿಲ್ಲದ actors ಕೆಲಸ ಮಾಡುತ್ತಲೇ ಇರುತ್ತವೆ, ಮತ್ತು ವೈಫಲ್ಯ ನೀತಿ ಕ್ರಮ ಕೈಗೊಳ್ಳಬಹುದಾದ ದತ್ತಾಂಶ (actor, topic, error) ಆಗುತ್ತದೆ. ಅಜ್ಞಾತ ಸ್ವೀಕರಿಸುವವರು ಮೌನವಾಗಿ ಬಿಡದೆ ಸಂಗ್ರಹಿಸುವ dead letter ಆಗುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Where Isolation Lives",
    "headingKn": "ಪ್ರತ್ಯೇಕತೆ ಎಲ್ಲಿದೆ",
    "svgCode": "<svg viewBox=\"0 0 300 205\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\">\n  <rect width=\"300\" height=\"205\" rx=\"8\" fill=\"#0f172a\"/>\n  <text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">Actors talk through the runtime, never directly</text>\n  <rect x=\"20\" y=\"26\" width=\"100\" height=\"44\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"70\" y=\"40\" fill=\"#6ee7b7\" text-anchor=\"middle\">ReviewerAgent</text><text x=\"70\" y=\"53\" fill=\"#6ee7b7\" text-anchor=\"middle\" font-size=\"6\">private state</text><text x=\"70\" y=\"62\" fill=\"#6ee7b7\" text-anchor=\"middle\" font-size=\"6\">handler: receive()</text>\n  <rect x=\"180\" y=\"26\" width=\"100\" height=\"44\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"230\" y=\"40\" fill=\"#c4b5fd\" text-anchor=\"middle\">ChecklistAgent</text><text x=\"230\" y=\"53\" fill=\"#c4b5fd\" text-anchor=\"middle\" font-size=\"6\">private state</text><text x=\"230\" y=\"62\" fill=\"#c4b5fd\" text-anchor=\"middle\" font-size=\"6\">handler: receive()</text>\n  <rect x=\"60\" y=\"100\" width=\"180\" height=\"46\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"114\" fill=\"#fde68a\" text-anchor=\"middle\">RUNTIME</text><text x=\"150\" y=\"127\" fill=\"#fde68a\" text-anchor=\"middle\" font-size=\"6\">registry, queue, routing</text><text x=\"150\" y=\"137\" fill=\"#fde68a\" text-anchor=\"middle\" font-size=\"6\">failure isolation, dead letters, trace</text>\n  <path d=\"M70,70 V100\" stroke=\"#475569\"/><text x=\"74\" y=\"88\" fill=\"#94a3b8\" font-size=\"6\">send</text>\n  <path d=\"M230,100 V70\" stroke=\"#475569\"/><text x=\"204\" y=\"88\" fill=\"#94a3b8\" font-size=\"6\">deliver</text>\n  <path d=\"M150,146 V162\" stroke=\"#475569\"/>\n  <text x=\"150\" y=\"176\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">send is not handle: the sender returns, the runtime delivers later</text>\n  <text x=\"150\" y=\"188\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">that gap is where isolation, concurrency and tracing live</text>\n</svg>",
    "captionEn": "The try/except sits in the runtime's delivery step, between the queue and the handler.",
    "captionKn": "try/except runtime ನ ವಿತರಣಾ ಹಂತದಲ್ಲಿ, ಸರತಿ ಮತ್ತು handler ನಡುವೆ ಇದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Concurrency Comes From Separate Mailboxes",
    "headingKn": "ಪ್ರತ್ಯೇಕ Mailboxes ನಿಂದ Concurrency ಬರುತ್ತದೆ",
    "bodyEn": "Because actors own separate state, different actors can safely make progress at the same time, while each actor still handles its own messages one at a time. That guarantee removes most locking inside actor logic. Concurrency means tasks overlap in time; parallelism means they run simultaneously on different cores. For I/O-bound work like model and tool calls, overlapping is what matters.",
    "bodyKn": "Actors ಪ್ರತ್ಯೇಕ state ಹೊಂದಿರುವುದರಿಂದ ಬೇರೆ ಬೇರೆ actors ಒಂದೇ ಸಮಯದಲ್ಲಿ ಸುರಕ್ಷಿತವಾಗಿ ಪ್ರಗತಿ ಸಾಧಿಸಬಲ್ಲವು, ಪ್ರತಿ actor ಇನ್ನೂ ತನ್ನ ಸಂದೇಶಗಳನ್ನು ಒಂದೊಂದಾಗಿ ನಿರ್ವಹಿಸುತ್ತದೆ. ಆ ಖಾತರಿ actor ತರ್ಕದೊಳಗಿನ ಹೆಚ್ಚಿನ locking ತೆಗೆಯುತ್ತದೆ. Concurrency ಎಂದರೆ ಕಾರ್ಯಗಳು ಸಮಯದಲ್ಲಿ ಅತಿಕ್ರಮಿಸುವುದು; parallelism ಎಂದರೆ ಬೇರೆ cores ಮೇಲೆ ಏಕಕಾಲಕ್ಕೆ ಚಲಿಸುವುದು. ಮಾದರಿ ಮತ್ತು tool ಕರೆಗಳಂತಹ I/O-ಬದ್ಧ ಕೆಲಸಕ್ಕೆ ಅತಿಕ್ರಮಿಸುವುದೇ ಮುಖ್ಯ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Building the Isolating Runtime",
    "textKn": "ಪ್ರತ್ಯೇಕಿಸುವ Runtime ನಿರ್ಮಿಸುವುದು",
    "level": "H2"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "actor_2.py",
    "headingEn": "Runtime with isolation, retries and notification, and the test actors",
    "headingKn": "ಪ್ರತ್ಯೇಕತೆ, ಮರುಪ್ರಯತ್ನ ಮತ್ತು ಸೂಚನೆ ಇರುವ Runtime, ಮತ್ತು ಪರೀಕ್ಷಾ actors",
    "descEn": "deliver() resolves the recipient, stores a dead letter if it is missing, and otherwise calls receive inside try/except, recording a failure. Optional policies: retry up to max_attempts, or send the original sender an actor_failed message. Reviewer and Checklist are the two collaborating actors; Sleeper simulates slow I/O.",
    "descKn": "deliver() ಸ್ವೀಕರಿಸುವವರನ್ನು ಪರಿಹರಿಸಿ, ಇಲ್ಲದಿದ್ದರೆ dead letter ಸಂಗ್ರಹಿಸಿ, ಇಲ್ಲದಿದ್ದರೆ receive ಅನ್ನು try/except ಒಳಗೆ ಕರೆದು ವೈಫಲ್ಯ ದಾಖಲಿಸುತ್ತದೆ. ಐಚ್ಛಿಕ ನೀತಿಗಳು: max_attempts ವರೆಗೆ ಮರುಪ್ರಯತ್ನ, ಅಥವಾ ಮೂಲ ಕಳುಹಿಸುವವರಿಗೆ actor_failed ಸಂದೇಶ ಕಳುಹಿಸುವುದು. Reviewer ಮತ್ತು Checklist ಸಹಕರಿಸುವ ಎರಡು actors; Sleeper ನಿಧಾನ I/O ಅನುಕರಿಸುತ್ತದೆ.",
    "code": "class Runtime:\n    def __init__(self, notify_sender=False, max_attempts=1, max_messages=1000):\n        self.actors, self.queue = {}, Queue()\n        self.failures, self.dead_letters, self.trace = [], [], []\n        self.notify_sender, self.max_attempts, self.max_messages = notify_sender, max_attempts, max_messages\n        self.attempts = {}\n        self.delivered = 0\n\n    def log(self, text):\n        self.trace.append(text)\n        print(text)\n\n    def register(self, actor):\n        if actor.actor_id in self.actors:\n            raise ValueError(f\"actor already registered: {actor.actor_id}\")\n        self.actors[actor.actor_id] = actor\n\n    def send(self, message):\n        self.log(f\"[send] {message.sender} -> {message.recipient} topic={message.topic}\")\n        self.queue.put(message)\n\n    def deliver(self, message):\n        actor = self.actors.get(message.recipient)\n        if actor is None:\n            self.dead_letters.append(message)\n            self.log(f\"[dead-letter] recipient={message.recipient} topic={message.topic}\")\n            return\n        try:\n            actor.receive(message, self)\n        except Exception as exc:\n            self.failures.append({\"actor\": actor.actor_id, \"topic\": message.topic, \"error\": str(exc)})\n            self.log(f\"[failure] actor={actor.actor_id} topic={message.topic} error={exc}\")\n            key = id(message)\n            self.attempts[key] = self.attempts.get(key, 0) + 1\n            if self.attempts[key] < self.max_attempts:\n                self.log(f\"[retry] attempt {self.attempts[key] + 1} of {self.max_attempts}\")\n                self.queue.put(message)\n            elif self.notify_sender and message.sender in self.actors:\n                self.queue.put(Message(\"runtime\", message.sender, \"actor_failed\", {\"actor\": actor.actor_id, \"topic\": message.topic, \"error\": str(exc)}))\n\n    def run(self):\n        while not self.queue.empty():\n            self.delivered += 1\n            if self.delivered > self.max_messages:\n                raise RuntimeError(\"message budget exhausted\")\n            message = self.queue.get()\n            self.log(f\"[deliver] {message.recipient} <- {message.sender} topic={message.topic}\")\n            self.deliver(message)\n\n\nclass Echo(Actor):\n    def receive(self, message, runtime):\n        print(f\"{self.actor_id} received: {message.body}\")\n\n\nclass Broken(Actor):\n    def receive(self, message, runtime):\n        raise RuntimeError(\"simulated actor crash\")\n\n\nclass Reviewer(Actor):\n    def __init__(self, actor_id):\n        super().__init__(actor_id)\n        self.status = \"IDLE\"\n        self.verdict = None\n\n    def receive(self, message, runtime):\n        if message.topic == \"review_request\":\n            self.status = \"WAITING_FOR_CHECKLIST\"\n            runtime.send(Message(self.actor_id, \"checklist\", \"checklist_request\", message.body))\n        elif message.topic == \"checklist_result\":\n            self.status = \"COMPLETE\"\n            self.verdict = \"APPROVED\"\n        elif message.topic == \"actor_failed\":\n            self.status = \"FAILED\"\n            self.verdict = f\"UNKNOWN ({message.body['actor']} failed)\"\n\n\nclass Checklist(Actor):\n    def __init__(self, actor_id):\n        super().__init__(actor_id)\n        self.check_count = 0\n\n    def receive(self, message, runtime):\n        self.check_count += 1\n        if message.body.get(\"simulate_failure\"):\n            raise RuntimeError(\"simulated checklist failure\")\n        runtime.send(Message(self.actor_id, \"reviewer\", \"checklist_result\", {\"findings\": []}))\n\n\nclass Sleeper(Actor):\n    def __init__(self, actor_id, seconds):\n        super().__init__(actor_id)\n        self.seconds, self.handled = seconds, []\n\n    def receive(self, message, runtime):\n        time.sleep(self.seconds)\n        self.handled.append(message.body)"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "actor_2.py",
    "headingEn": "main(): seven experiments",
    "headingKn": "main(): ಏಳು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() isolates a crash, stores a dead letter, shows a stuck workflow, adds a failure notification, tests retries and duplicate delivery, raises SystemExit inside a handler, and times one thread against one thread per mailbox.",
    "descKn": "main() crash ಪ್ರತ್ಯೇಕಿಸುತ್ತದೆ, dead letter ಸಂಗ್ರಹಿಸುತ್ತದೆ, ಸಿಲುಕಿದ workflow ತೋರಿಸುತ್ತದೆ, ವೈಫಲ್ಯ ಸೂಚನೆ ಸೇರಿಸುತ್ತದೆ, ಮರುಪ್ರಯತ್ನ ಮತ್ತು ನಕಲು ವಿತರಣೆ ಪರೀಕ್ಷಿಸುತ್ತದೆ, handler ಒಳಗೆ SystemExit ಎತ್ತುತ್ತದೆ, ಮತ್ತು ಒಂದು thread ಅನ್ನು ಪ್ರತಿ mailbox ಗೆ ಒಂದು thread ವಿರುದ್ಧ ಸಮಯ ಅಳೆಯುತ್ತದೆ.",
    "code": "def section(t):\n    print(f\"\\n--- {t} ---\")\n\n\ndef main():\n    section(\"1. A crashing actor does not stop the runtime\")\n    rt = Runtime()\n    rt.register(Broken(\"broken\"))\n    rt.register(Echo(\"echo\"))\n    rt.send(Message(\"main\", \"broken\", \"test\", None))\n    rt.send(Message(\"main\", \"echo\", \"say\", \"Still alive!\"))\n    rt.run()\n    print(\"failures:\", rt.failures)\n\n    section(\"2. Dead letters are kept, not lost\")\n    rt2 = Runtime()\n    rt2.send(Message(\"main\", \"missing-agent\", \"ping\", None))\n    rt2.run()\n    print(\"dead letters stored:\", len(rt2.dead_letters))\n\n    section(\"3. Genuinely checking: isolation is not recovery\")\n    rt3 = Runtime()\n    reviewer, checklist = Reviewer(\"reviewer\"), Checklist(\"checklist\")\n    rt3.register(reviewer)\n    rt3.register(checklist)\n    rt3.send(Message(\"main\", \"reviewer\", \"review_request\", {\"simulate_failure\": True}))\n    rt3.run()\n    print(\"reviewer.status after the checklist crashed:\", reviewer.status, \"| verdict:\", reviewer.verdict)\n    print(\"the runtime survived, and the workflow is stuck waiting for a result that will never arrive\")\n\n    section(\"4. A failure notification lets the sender react\")\n    rt4 = Runtime(notify_sender=True)\n    reviewer4, checklist4 = Reviewer(\"reviewer\"), Checklist(\"checklist\")\n    rt4.register(reviewer4)\n    rt4.register(checklist4)\n    rt4.send(Message(\"main\", \"reviewer\", \"review_request\", {\"simulate_failure\": True}))\n    rt4.run()\n    print(\"reviewer.status:\", reviewer4.status, \"| verdict:\", reviewer4.verdict)\n\n    section(\"5. Genuinely checking: retries and duplicate processing\")\n    rt5 = Runtime(max_attempts=3)\n    flaky_calls = []\n    class Flaky(Actor):\n        def receive(self, message, runtime):\n            flaky_calls.append(1)\n            if len(flaky_calls) < 3:\n                raise RuntimeError(\"transient\")\n            print(\"flaky succeeded on call\", len(flaky_calls))\n    rt5.register(Flaky(\"flaky\"))\n    rt5.send(Message(\"main\", \"flaky\", \"t\", None))\n    rt5.run()\n    class Charger(Actor):\n        def __init__(self, actor_id, idempotent):\n            super().__init__(actor_id)\n            self.charges, self.seen, self.idempotent = 0, set(), idempotent\n        def receive(self, message, runtime):\n            if self.idempotent and message.body[\"id\"] in self.seen:\n                return\n            self.seen.add(message.body[\"id\"])\n            self.charges += 1\n    for idem in (False, True):\n        rt6 = Runtime()\n        ch = Charger(\"charge\", idem)\n        rt6.register(ch)\n        dup = Message(\"main\", \"charge\", \"charge\", {\"id\": \"op-1\"})\n        rt6.queue.put(dup)\n        rt6.queue.put(dup)\n        rt6.run()\n        print(f\"same message delivered twice, idempotent={idem}: charges applied = {ch.charges}\")\n\n    section(\"6. Genuinely checking: what 'except Exception' does not catch\")\n    rt7 = Runtime()\n    class Quitter(Actor):\n        def receive(self, message, runtime):\n            raise SystemExit(\"actor called exit\")\n    rt7.register(Quitter(\"q\"))\n    rt7.register(Echo(\"echo\"))\n    rt7.send(Message(\"main\", \"q\", \"t\", None))\n    rt7.send(Message(\"main\", \"echo\", \"say\", \"never printed\"))\n    try:\n        rt7.run()\n    except SystemExit as e:\n        print(\"SystemExit escaped the runtime:\", e, \"| messages still queued:\", rt7.queue.qsize())\n\n    section(\"7. Genuinely measuring: independent actors overlap, one actor serialises\")\n    a, b = Sleeper(\"a\", 0.2), Sleeper(\"b\", 0.2)\n    t0 = time.perf_counter()\n    for actor in (a, b):\n        for i in range(3):\n            actor.receive(Message(\"main\", actor.actor_id, \"t\", i), None)\n    sequential = time.perf_counter() - t0\n    a, b = Sleeper(\"a\", 0.2), Sleeper(\"b\", 0.2)\n    def mailbox_loop(actor, box):\n        while True:\n            m = box.get()\n            if m is None:\n                return\n            actor.receive(m, None)\n    boxes = {\"a\": Queue(), \"b\": Queue()}\n    threads = [threading.Thread(target=mailbox_loop, args=(actor, boxes[actor.actor_id])) for actor in (a, b)]\n    t0 = time.perf_counter()\n    for t in threads:\n        t.start()\n    for actor in (a, b):\n        for i in range(3):\n            boxes[actor.actor_id].put(Message(\"main\", actor.actor_id, \"t\", i))\n        boxes[actor.actor_id].put(None)\n    for t in threads:\n        t.join()\n    concurrent = time.perf_counter() - t0\n    print(f\"6 handler calls of 0.2 s: one thread {sequential:.2f}s | one thread per actor mailbox {concurrent:.2f}s\")\n    print(\"each actor still handled its own messages in order:\", a.handled, b.handled)"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. A crashing actor does not stop the runtime ---\n[send] main -> broken topic=test\n[send] main -> echo topic=say\n[deliver] broken <- main topic=test\n[failure] actor=broken topic=test error=simulated actor crash\n[deliver] echo <- main topic=say\necho received: Still alive!\nfailures: [{'actor': 'broken', 'topic': 'test', 'error': 'simulated actor crash'}]\n\n--- 2. Dead letters are kept, not lost ---\n[send] main -> missing-agent topic=ping\n[deliver] missing-agent <- main topic=ping\n[dead-letter] recipient=missing-agent topic=ping\ndead letters stored: 1\n\n--- 3. Genuinely checking: isolation is not recovery ---\n[send] main -> reviewer topic=review_request\n[deliver] reviewer <- main topic=review_request\n[send] reviewer -> checklist topic=checklist_request\n[deliver] checklist <- reviewer topic=checklist_request\n[failure] actor=checklist topic=checklist_request error=simulated checklist failure\nreviewer.status after the checklist crashed: WAITING_FOR_CHECKLIST | verdict: None\nthe runtime survived, and the workflow is stuck waiting for a result that will never arrive\n\n--- 4. A failure notification lets the sender react ---\n[send] main -> reviewer topic=review_request\n[deliver] reviewer <- main topic=review_request\n[send] reviewer -> checklist topic=checklist_request\n[deliver] checklist <- reviewer topic=checklist_request\n[failure] actor=checklist topic=checklist_request error=simulated checklist failure\n[deliver] reviewer <- runtime topic=actor_failed\nreviewer.status: FAILED | verdict: UNKNOWN (checklist failed)\n\n--- 5. Genuinely checking: retries and duplicate processing ---\n[send] main -> flaky topic=t\n[deliver] flaky <- main topic=t\n[failure] actor=flaky topic=t error=transient\n[retry] attempt 2 of 3\n[deliver] flaky <- main topic=t\n[failure] actor=flaky topic=t error=transient\n[retry] attempt 3 of 3\n[deliver] flaky <- main topic=t\nflaky succeeded on call 3\n[deliver] charge <- main topic=charge\n[deliver] charge <- main topic=charge\nsame message delivered twice, idempotent=False: charges applied = 2\n[deliver] charge <- main topic=charge\n[deliver] charge <- main topic=charge\nsame message delivered twice, idempotent=True: charges applied = 1\n\n--- 6. Genuinely checking: what 'except Exception' does not catch ---\n[send] main -> q topic=t\n[send] main -> echo topic=say\n[deliver] q <- main topic=t\nSystemExit escaped the runtime: actor called exit | messages still queued: 1\n\n--- 7. Genuinely measuring: independent actors overlap, one actor serialises ---\n6 handler calls of 0.2 s: one thread 1.21s | one thread per actor mailbox 0.60s\neach actor still handled its own messages in order: [0, 1, 2] [0, 1, 2]"
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
    "headingEn": "Crashed, Recorded, Continued",
    "headingKn": "Crash ಆಯಿತು, ದಾಖಲಾಯಿತು, ಮುಂದುವರಿಯಿತು",
    "bodyEn": "Section 1 sends one message to a broken actor and one to an echo actor. The trace shows \"[failure] actor=broken topic=test error=simulated actor crash\" and then the echo actor still prints \"Still alive!\". The failure list holds the structured record. Section 2: a message to \"missing-agent\" becomes \"[dead-letter]\" and is stored. The sender's call completed long before either problem occurred, which is why the runtime, not the sender, can own the boundary.",
    "bodyKn": "ವಿಭಾಗ 1 ಮುರಿದ actor ಗೆ ಒಂದು ಮತ್ತು echo actor ಗೆ ಒಂದು ಸಂದೇಶ ಕಳುಹಿಸುತ್ತದೆ. Trace \"[failure] actor=broken topic=test error=simulated actor crash\" ತೋರಿಸುತ್ತದೆ ಮತ್ತು ನಂತರ echo actor ಇನ್ನೂ \"Still alive!\" ಮುದ್ರಿಸುತ್ತದೆ. ವೈಫಲ್ಯ ಪಟ್ಟಿ ರಚನಾತ್ಮಕ ದಾಖಲೆ ಹೊಂದಿದೆ. ವಿಭಾಗ 2: \"missing-agent\" ಗೆ ಸಂದೇಶ \"[dead-letter]\" ಆಗಿ ಸಂಗ್ರಹವಾಗುತ್ತದೆ. ಕಳುಹಿಸುವವರ ಕರೆ ಎರಡೂ ಸಮಸ್ಯೆ ಸಂಭವಿಸುವ ಬಹಳ ಮೊದಲೇ ಮುಗಿದಿತ್ತು, ಅದಕ್ಕಾಗಿ ಕಳುಹಿಸುವವರಲ್ಲ, runtime ಗಡಿ ಹೊಂದಬಹುದು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Isolation Is Not Recovery",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಪ್ರತ್ಯೇಕತೆ ಚೇತರಿಕೆ ಅಲ್ಲ",
    "bodyEn": "Section 3: the checklist crashes, the runtime survives, and the reviewer's status stays WAITING_FOR_CHECKLIST with no verdict, because the result it waits for will never arrive. Fault isolation stopped a cascade but nothing finished the workflow. Section 4 adds a policy: the runtime sends the reviewer an actor_failed message, and the reviewer moves to FAILED with verdict \"UNKNOWN (checklist failed)\". Timeouts, retries, fallbacks and escalation are the recovery policies; the boundary only makes them possible.",
    "bodyKn": "ವಿಭಾಗ 3: checklist crash ಆಗುತ್ತದೆ, runtime ಉಳಿಯುತ್ತದೆ, ಮತ್ತು reviewer ನ ಸ್ಥಿತಿ ತೀರ್ಪಿಲ್ಲದೆ WAITING_FOR_CHECKLIST ಆಗಿ ಉಳಿಯುತ್ತದೆ, ಏಕೆಂದರೆ ಅದು ಕಾಯುವ ಫಲಿತಾಂಶ ಎಂದೂ ಬರುವುದಿಲ್ಲ. ವೈಫಲ್ಯ ಪ್ರತ್ಯೇಕತೆ ಸರಣಿ ತಡೆಯಿತು ಆದರೆ workflow ಅನ್ನು ಯಾರೂ ಮುಗಿಸಲಿಲ್ಲ. ವಿಭಾಗ 4 ನೀತಿ ಸೇರಿಸುತ್ತದೆ: runtime reviewer ಗೆ actor_failed ಸಂದೇಶ ಕಳುಹಿಸುತ್ತದೆ, ಮತ್ತು reviewer \"UNKNOWN (checklist failed)\" ತೀರ್ಪಿನೊಂದಿಗೆ FAILED ಗೆ ಹೋಗುತ್ತದೆ. Timeouts, ಮರುಪ್ರಯತ್ನ, fallbacks ಮತ್ತು ಮೇಲ್ಮಟ್ಟಕ್ಕೆ ಒಯ್ಯುವಿಕೆ ಚೇತರಿಕೆ ನೀತಿಗಳು; ಗಡಿ ಅವನ್ನು ಸಾಧ್ಯವಾಗಿಸುತ್ತದೆ ಮಾತ್ರ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Retries Duplicate, and SystemExit Escapes",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಮರುಪ್ರಯತ್ನ ನಕಲು ಮಾಡುತ್ತದೆ, ಮತ್ತು SystemExit ತಪ್ಪಿಸಿಕೊಳ್ಳುತ್ತದೆ",
    "bodyEn": "Section 5: a flaky actor that fails twice succeeds on its third call with retries enabled. The same message delivered twice to a charging actor applies two charges unless the handler remembers processed ids, in which case it applies one. At-least-once delivery therefore needs idempotent handlers. Section 6: an actor that raises SystemExit is not caught by \"except Exception\", so the exception escapes run() and one message stays queued. BaseException subclasses such as SystemExit and KeyboardInterrupt are outside that boundary, which is sometimes wanted and sometimes a hole.",
    "bodyKn": "ವಿಭಾಗ 5: ಎರಡು ಬಾರಿ ವಿಫಲವಾಗುವ flaky actor ಮರುಪ್ರಯತ್ನ ಸಕ್ರಿಯವಾದಾಗ ಮೂರನೇ ಕರೆಯಲ್ಲಿ ಯಶಸ್ವಿ. ಚಾರ್ಜ್ ಮಾಡುವ actor ಗೆ ಎರಡು ಬಾರಿ ವಿತರಿಸಿದ ಅದೇ ಸಂದೇಶ handler ಸಂಸ್ಕರಿಸಿದ ids ನೆನಪಿಡದಿದ್ದರೆ ಎರಡು ಚಾರ್ಜ್ ಅನ್ವಯಿಸುತ್ತದೆ, ನೆನಪಿಟ್ಟರೆ ಒಂದು. ಆದ್ದರಿಂದ ಕನಿಷ್ಠ-ಒಮ್ಮೆ ವಿತರಣೆಗೆ idempotent handlers ಬೇಕು. ವಿಭಾಗ 6: SystemExit ಎತ್ತುವ actor \"except Exception\" ನಿಂದ ಹಿಡಿಯಲ್ಪಡುವುದಿಲ್ಲ, ಆದ್ದರಿಂದ ವಿನಾಯಿತಿ run() ನಿಂದ ತಪ್ಪಿಸಿಕೊಂಡು ಒಂದು ಸಂದೇಶ ಸರತಿಯಲ್ಲಿ ಉಳಿಯುತ್ತದೆ. SystemExit ಮತ್ತು KeyboardInterrupt ನಂತಹ BaseException ಉಪವರ್ಗಗಳು ಆ ಗಡಿಯ ಹೊರಗಿವೆ, ಕೆಲವೊಮ್ಮೆ ಅದು ಬೇಕಾದದ್ದು, ಕೆಲವೊಮ್ಮೆ ರಂಧ್ರ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Measured: Overlap Across Actors",
    "headingKn": "ನಿಜವಾಗಿ ಅಳೆದದ್ದು: Actors ಅಡ್ಡಲಾಗಿ ಅತಿಕ್ರಮಣ",
    "bodyEn": "Section 7 gives two actors three messages each, with a 0.2 second handler. One thread handles all six calls in about 1.2 seconds. One thread per actor mailbox takes about 0.6 seconds, because the two actors overlap while each still handles its own messages in order: [0, 1, 2] for both. The speed-up comes from independent actors overlapping, not from one actor handling two messages at once.",
    "bodyKn": "ವಿಭಾಗ 7 ಎರಡು actors ಗೆ ತಲಾ ಮೂರು ಸಂದೇಶ, 0.2 ಸೆಕೆಂಡ್ handler ನೀಡುತ್ತದೆ. ಒಂದು thread ಎಲ್ಲಾ ಆರು ಕರೆಗಳನ್ನು ಸುಮಾರು 1.2 ಸೆಕೆಂಡ್‌ನಲ್ಲಿ ನಿರ್ವಹಿಸುತ್ತದೆ. ಪ್ರತಿ actor mailbox ಗೆ ಒಂದು thread ಸುಮಾರು 0.6 ಸೆಕೆಂಡ್ ತೆಗೆದುಕೊಳ್ಳುತ್ತದೆ, ಏಕೆಂದರೆ ಎರಡು actors ಅತಿಕ್ರಮಿಸುತ್ತವೆ ಮತ್ತು ಪ್ರತಿಯೊಂದೂ ತನ್ನ ಸಂದೇಶಗಳನ್ನು ಕ್ರಮವಾಗಿ ನಿರ್ವಹಿಸುತ್ತದೆ: ಎರಡಕ್ಕೂ [0, 1, 2]. ವೇಗ ಹೆಚ್ಚಳ ಸ್ವತಂತ್ರ actors ಅತಿಕ್ರಮಿಸುವುದರಿಂದ ಬರುತ್ತದೆ, ಒಬ್ಬ actor ಎರಡು ಸಂದೇಶಗಳನ್ನು ಏಕಕಾಲಕ್ಕೆ ನಿರ್ವಹಿಸುವುದರಿಂದಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Topologies, Briefly",
    "headingKn": "Topologies, ಸಂಕ್ಷಿಪ್ತವಾಗಿ",
    "bodyEn": "Direct messaging names a recipient; topics let several actors subscribe to an event such as code.updated. A round-robin group chat rotates participants in a fixed order, which is predictable and cheap. A selector chooses the next participant from context, which is flexible and costs a decision each turn. If the order is known, a fixed rotation or a plain workflow is enough. Magentic-One is a reference team architecture (orchestrator plus web, code and file capabilities), not a message format.",
    "bodyKn": "ನೇರ ಸಂದೇಶ ಸ್ವೀಕರಿಸುವವರನ್ನು ಹೆಸರಿಸುತ್ತದೆ; topics ಹಲವು actors ಗೆ code.updated ನಂತಹ ಘಟನೆಗೆ ಚಂದಾದಾರರಾಗಲು ಬಿಡುತ್ತವೆ. Round-robin ಗುಂಪು ಚಾಟ್ ಭಾಗವಹಿಸುವವರನ್ನು ನಿಗದಿತ ಕ್ರಮದಲ್ಲಿ ತಿರುಗಿಸುತ್ತದೆ, ಅದು ಊಹಿಸಬಹುದಾದ ಮತ್ತು ಅಗ್ಗ. Selector ಸಂದರ್ಭದಿಂದ ಮುಂದಿನ ಭಾಗವಹಿಸುವವರನ್ನು ಆರಿಸುತ್ತದೆ, ಅದು ಹೊಂದಿಕೊಳ್ಳುವ ಮತ್ತು ಪ್ರತಿ ಸುತ್ತಿಗೆ ಒಂದು ನಿರ್ಧಾರ ವೆಚ್ಚ. ಕ್ರಮ ತಿಳಿದಿದ್ದರೆ ನಿಗದಿತ ತಿರುಗುವಿಕೆ ಅಥವಾ ಸಾಮಾನ್ಯ workflow ಸಾಕು. Magentic-One ಒಂದು ಉಲ್ಲೇಖ ತಂಡ ವಿನ್ಯಾಸ (orchestrator ಜೊತೆ web, code ಮತ್ತು file ಸಾಮರ್ಥ್ಯಗಳು), ಸಂದೇಶ ರೂಪವಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "Agent calls are slow and fail often. Putting a runtime between sender and receiver gives containment, observability, retry policy and concurrency in one place instead of in every agent.",
    "bodyKn": "Agent ಕರೆಗಳು ನಿಧಾನ ಮತ್ತು ಆಗಾಗ ವಿಫಲವಾಗುತ್ತವೆ. ಕಳುಹಿಸುವವರು ಮತ್ತು ಸ್ವೀಕರಿಸುವವರ ನಡುವೆ runtime ಇಡುವುದು ಪ್ರತಿ agent ನಲ್ಲಿ ಅಲ್ಲ, ಒಂದೇ ಸ್ಥಳದಲ್ಲಿ ನಿಯಂತ್ರಣ, ವೀಕ್ಷಣೆ, ಮರುಪ್ರಯತ್ನ ನೀತಿ ಮತ್ತು concurrency ನೀಡುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"fault isolation means the workflow succeeds.\" It means the failure is contained. Finishing the work needs a recovery policy.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ವೈಫಲ್ಯ ಪ್ರತ್ಯೇಕತೆ ಎಂದರೆ workflow ಯಶಸ್ವಿ.\" ಅದರರ್ಥ ವೈಫಲ್ಯ ನಿಯಂತ್ರಿತ. ಕೆಲಸ ಮುಗಿಸಲು ಚೇತರಿಕೆ ನೀತಿ ಬೇಕು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Fault isolation: one actor failing does not take down the runtime. Dead letter: an undeliverable message that is stored. Supervision: runtime policy for failed actors. At-least-once delivery: possible duplicates after retries. Idempotent handler: duplicates cause no extra effect. Mailbox: pending messages for one actor.",
    "bodyKn": "ವೈಫಲ್ಯ ಪ್ರತ್ಯೇಕತೆ: ಒಬ್ಬ actor ವಿಫಲವಾದರೆ runtime ಬೀಳುವುದಿಲ್ಲ. Dead letter: ಸಂಗ್ರಹಿಸಿದ ತಲುಪಿಸಲಾಗದ ಸಂದೇಶ. Supervision: ವಿಫಲ actors ಗೆ runtime ನೀತಿ. ಕನಿಷ್ಠ-ಒಮ್ಮೆ ವಿತರಣೆ: ಮರುಪ್ರಯತ್ನದ ನಂತರ ನಕಲು ಸಾಧ್ಯ. Idempotent handler: ನಕಲುಗಳು ಹೆಚ್ಚುವರಿ ಪರಿಣಾಮ ಉಂಟುಮಾಡುವುದಿಲ್ಲ. Mailbox: ಒಬ್ಬ actor ಗೆ ಬಾಕಿ ಸಂದೇಶಗಳು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) try/except in delivery turns a crash into a recorded failure. 2) Unknown recipients become stored dead letters. 3) The reviewer stayed WAITING_FOR_CHECKLIST: isolation is not recovery. 4) A failure notification let the reviewer reach FAILED. 5) Retries duplicate work unless handlers are idempotent. 6) except Exception does not catch SystemExit. 7) One thread per mailbox halved the time for two independent actors.",
    "bodyKn": "1) ವಿತರಣೆಯಲ್ಲಿನ try/except crash ಅನ್ನು ದಾಖಲಿತ ವೈಫಲ್ಯವಾಗಿಸುತ್ತದೆ. 2) ಅಜ್ಞಾತ ಸ್ವೀಕರಿಸುವವರು ಸಂಗ್ರಹಿತ dead letters ಆಗುತ್ತಾರೆ. 3) Reviewer WAITING_FOR_CHECKLIST ನಲ್ಲಿ ಉಳಿಯಿತು: ಪ್ರತ್ಯೇಕತೆ ಚೇತರಿಕೆ ಅಲ್ಲ. 4) ವೈಫಲ್ಯ ಸೂಚನೆ reviewer ಅನ್ನು FAILED ತಲುಪಿಸಿತು. 5) Handlers idempotent ಅಲ್ಲದಿದ್ದರೆ ಮರುಪ್ರಯತ್ನ ಕೆಲಸ ನಕಲು ಮಾಡುತ್ತದೆ. 6) except Exception SystemExit ಹಿಡಿಯುವುದಿಲ್ಲ. 7) ಪ್ರತಿ mailbox ಗೆ ಒಂದು thread ಎರಡು ಸ್ವತಂತ್ರ actors ಗೆ ಸಮಯ ಅರ್ಧಗೊಳಿಸಿತು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "Why can the runtime catch a checklist failure without crashing the reviewer?",
      "qKn": "Reviewer ಕ್ರ್ಯಾಶ್ ಆಗದೆ checklist ವೈಫಲ್ಯವನ್ನು runtime ಹೇಗೆ ಹಿಡಿಯಬಲ್ಲದು?",
      "opts": [
       "Checklist never fails",
       "The reviewer's send had already returned; the checklist handler runs later under the runtime's own try/except",
       "Exceptions are ignored",
       "They run on different machines"
      ],
      "optsKn": [
       "Checklist ಎಂದೂ ವಿಫಲವಾಗುವುದಿಲ್ಲ",
       "Reviewer ನ send ಈಗಾಗಲೇ ಹಿಂತಿರುಗಿತ್ತು; checklist handler ನಂತರ runtime ನ ಸ್ವಂತ try/except ಅಡಿ ಚಲಿಸುತ್ತದೆ",
       "ವಿನಾಯಿತಿಗಳನ್ನು ನಿರ್ಲಕ್ಷಿಸಲಾಗುತ್ತದೆ",
       "ಅವು ಬೇರೆ ಯಂತ್ರಗಳಲ್ಲಿ ಚಲಿಸುತ್ತವೆ"
      ],
      "correct": 1
     },
     {
      "q": "After the checklist crashed, what was the reviewer's status in the lab?",
      "qKn": "Checklist crash ಆದ ನಂತರ ಲ್ಯಾಬ್‌ನಲ್ಲಿ reviewer ನ ಸ್ಥಿತಿ ಏನಿತ್ತು?",
      "opts": [
       "COMPLETE",
       "WAITING_FOR_CHECKLIST, with no verdict",
       "APPROVED",
       "It was deleted"
      ],
      "optsKn": [
       "COMPLETE",
       "WAITING_FOR_CHECKLIST, ತೀರ್ಪಿಲ್ಲದೆ",
       "APPROVED",
       "ಅದನ್ನು ಅಳಿಸಲಾಯಿತು"
      ],
      "correct": 1
     },
     {
      "q": "The same charge message was delivered twice. What prevented a double charge?",
      "qKn": "ಅದೇ ಚಾರ್ಜ್ ಸಂದೇಶ ಎರಡು ಬಾರಿ ವಿತರಿಸಲಾಯಿತು. ಎರಡು ಬಾರಿ ಚಾರ್ಜ್ ಆಗುವುದನ್ನು ಯಾವುದು ತಡೆಯಿತು?",
      "opts": [
       "The queue deduplicated it",
       "An idempotent handler that remembered processed message ids",
       "Python locks",
       "Nothing prevented it in either case"
      ],
      "optsKn": [
       "ಸರತಿ ನಕಲು ತೆಗೆಯಿತು",
       "ಸಂಸ್ಕರಿಸಿದ ಸಂದೇಶ ids ನೆನಪಿಟ್ಟ idempotent handler",
       "Python locks",
       "ಎರಡೂ ಸಂದರ್ಭಗಳಲ್ಲಿ ಏನೂ ತಡೆಯಲಿಲ್ಲ"
      ],
      "correct": 1
     },
     {
      "q": "Why did SystemExit escape the runtime?",
      "qKn": "SystemExit runtime ನಿಂದ ಏಕೆ ತಪ್ಪಿಸಿಕೊಂಡಿತು?",
      "opts": [
       "SystemExit is a normal Exception",
       "It derives from BaseException, which \"except Exception\" does not catch",
       "The queue was empty",
       "The actor was unregistered"
      ],
      "optsKn": [
       "SystemExit ಸಾಮಾನ್ಯ Exception",
       "ಅದು BaseException ನಿಂದ ಬಂದದ್ದು, \"except Exception\" ಅದನ್ನು ಹಿಡಿಯುವುದಿಲ್ಲ",
       "ಸರತಿ ಖಾಲಿಯಾಗಿತ್ತು",
       "Actor ನೋಂದಾಯಿಸಿರಲಿಲ್ಲ"
      ],
      "correct": 1
     },
     {
      "q": "Where did the roughly halved time for six 0.2 s handler calls come from?",
      "qKn": "ಆರು 0.2 s handler ಕರೆಗಳ ಸುಮಾರು ಅರ್ಧ ಸಮಯ ಎಲ್ಲಿಂದ ಬಂತು?",
      "opts": [
       "One actor handled two messages at once",
       "Two independent actors overlapped while each handled its own messages in order",
       "Python sped up",
       "Handlers were skipped"
      ],
      "optsKn": [
       "ಒಬ್ಬ actor ಎರಡು ಸಂದೇಶಗಳನ್ನು ಏಕಕಾಲಕ್ಕೆ ನಿರ್ವಹಿಸಿದರು",
       "ಎರಡು ಸ್ವತಂತ್ರ actors ಅತಿಕ್ರಮಿಸಿದವು ಮತ್ತು ಪ್ರತಿಯೊಂದೂ ತನ್ನ ಸಂದೇಶಗಳನ್ನು ಕ್ರಮವಾಗಿ ನಿರ್ವಹಿಸಿತು",
       "Python ವೇಗವಾಯಿತು",
       "Handlers ಬಿಡಲಾಯಿತು"
      ],
      "correct": 1
     }
    ]
   }
  }
 ]
};
