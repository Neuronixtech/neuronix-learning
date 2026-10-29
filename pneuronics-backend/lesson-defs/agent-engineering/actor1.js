module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6166020ed05b321535",
 "order": 0,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "The Actor Model for Agents: Async Messages and Typed Runtimes (Part 1 of 3) — Actors, Messages and the Runtime",
 "titleKn": "Agents ಗಾಗಿ Actor ಮಾದರಿ: Async ಸಂದೇಶಗಳು ಮತ್ತು Typed Runtimes (ಭಾಗ 1 / 3) — Actors, ಸಂದೇಶಗಳು ಮತ್ತು Runtime",
 "desc": "Replace agent-to-agent calls with messages, build Message, Actor and a queue-based Runtime, and find that frozen does not freeze a mutable body and that actor loops need a budget.",
 "descKn": "Agent-ನಿಂದ-agent ಕರೆಗಳನ್ನು ಸಂದೇಶಗಳಿಂದ ಬದಲಿಸಿ, Message, Actor ಮತ್ತು queue-ಆಧಾರಿತ Runtime ನಿರ್ಮಿಸಿ, ಮತ್ತು frozen ಬದಲಾಯಿಸಬಹುದಾದ body ಫ್ರೀಜ್ ಮಾಡುವುದಿಲ್ಲ ಹಾಗೂ actor ಚಕ್ರಗಳಿಗೆ budget ಬೇಕು ಎಂದು ಕಂಡುಹಿಡಿಯಿರಿ.",
 "objectives": [
  "Explain why messages beat direct agent calls.",
  "Define an actor as private state, mailbox and handler.",
  "Build a runtime that registers, queues and delivers.",
  "Explain that send is not handle.",
  "Identify mutable-body and runaway-loop hazards."
 ],
 "objectivesKn": [
  "ನೇರ agent ಕರೆಗಳಿಗಿಂತ ಸಂದೇಶಗಳು ಉತ್ತಮ ಏಕೆ ಎಂದು ವಿವರಿಸಿ.",
  "Actor ಅನ್ನು ಖಾಸಗಿ state, mailbox ಮತ್ತು handler ಎಂದು ವ್ಯಾಖ್ಯಾನಿಸಿ.",
  "ನೋಂದಾಯಿಸಿ, ಸರತಿ ಸೇರಿಸಿ, ವಿತರಿಸುವ runtime ನಿರ್ಮಿಸಿ.",
  "send ಎಂದರೆ handle ಅಲ್ಲ ಎಂದು ವಿವರಿಸಿ.",
  "ಬದಲಾಯಿಸಬಹುದಾದ-body ಮತ್ತು ಓಡಿಹೋಗುವ-ಚಕ್ರ ಅಪಾಯಗಳನ್ನು ಗುರುತಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "The Actor Model for Agents: Async Messages and Typed Runtimes (Part 1 of 3)",
    "textKn": "Agents ಗಾಗಿ Actor ಮಾದರಿ: Async ಸಂದೇಶಗಳು ಮತ್ತು Typed Runtimes (ಭಾಗ 1 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 1 of 3: actors, messages and a minimal queue-based runtime. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the idea behind AutoGen's Core layer, not the AutoGen library. The first runtime is deliberately minimal; it adds a message budget and the experiments below expose what it still lacks. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 1ನೆಯದು: actors, ಸಂದೇಶಗಳು ಮತ್ತು ಕನಿಷ್ಠ queue-ಆಧಾರಿತ runtime. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು AutoGen ನ Core ಪದರದ ಹಿಂದಿನ ಕಲ್ಪನೆಯ ನಮ್ಮದೇ stdlib ಮಾದರಿ, AutoGen ಲೈಬ್ರರಿ ಅಲ್ಲ. ಮೊದಲ runtime ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ಕನಿಷ್ಠ; ಅದು ಸಂದೇಶ budget ಸೇರಿಸುತ್ತದೆ ಮತ್ತು ಕೆಳಗಿನ ಪ್ರಯೋಗಗಳು ಅದಕ್ಕೆ ಇನ್ನೂ ಏನು ಕೊರತೆ ಎಂದು ತೋರಿಸುತ್ತವೆ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "From Calls to Messages",
    "textKn": "ಕರೆಗಳಿಂದ ಸಂದೇಶಗಳಿಗೆ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "The Problem With Synchronous Agent Calls",
    "headingKn": "ಸಿಂಕ್ರೋನಸ್ Agent ಕರೆಗಳ ಸಮಸ್ಯೆ",
    "bodyEn": "If a coder calls reviewer.review(code), the two agents share one call stack: the coder waits for the reviewer, the reviewer's exception travels up into the coder, and adding ten reviewers means wrapping concurrency around that structure. A method call also cannot cross a machine boundary. The actor model changes the interaction: the coder sends a message and continues, and a runtime decides when and how the reviewer receives it.",
    "bodyKn": "Coder reviewer.review(code) ಕರೆದರೆ ಎರಡು agents ಒಂದೇ ಕರೆ ಸ್ಟ್ಯಾಕ್ ಹಂಚಿಕೊಳ್ಳುತ್ತವೆ: coder reviewer ಗಾಗಿ ಕಾಯುತ್ತದೆ, reviewer ನ ವಿನಾಯಿತಿ coder ಗೆ ಮೇಲೇರುತ್ತದೆ, ಮತ್ತು ಹತ್ತು reviewers ಸೇರಿಸುವುದು ಆ ರಚನೆಯ ಸುತ್ತ concurrency ಸುತ್ತುವುದು. ವಿಧಾನ ಕರೆ ಯಂತ್ರ ಗಡಿಯನ್ನೂ ದಾಟಲಾರದು. Actor ಮಾದರಿ ಸಂವಹನ ಬದಲಿಸುತ್ತದೆ: coder ಸಂದೇಶ ಕಳುಹಿಸಿ ಮುಂದುವರಿಯುತ್ತದೆ, ಮತ್ತು runtime reviewer ಯಾವಾಗ ಮತ್ತು ಹೇಗೆ ಪಡೆಯುತ್ತದೆ ಎಂದು ನಿರ್ಧರಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Three Rules",
    "headingKn": "ಮೂರು ನಿಯಮಗಳು",
    "bodyEn": "An actor is private state, an inbox and a message handler. Rule one: state is private, only the owner mutates it. Rule two: actors communicate through messages, which are explicit data, never by reaching into each other. Rule three: the runtime owns delivery. An actor can be an LLM agent, a deterministic validator, a database adapter or a human-approval gateway; the abstraction does not require an LLM. Equation to remember: send is not handle.",
    "bodyKn": "Actor ಎಂದರೆ ಖಾಸಗಿ state, inbox ಮತ್ತು ಸಂದೇಶ handler. ನಿಯಮ ಒಂದು: state ಖಾಸಗಿ, ಮಾಲೀಕ ಮಾತ್ರ ಬದಲಿಸುತ್ತಾರೆ. ನಿಯಮ ಎರಡು: actors ಸಂದೇಶಗಳ ಮೂಲಕ ಸಂವಹನ ಮಾಡುತ್ತವೆ, ಅವು ಸ್ಪಷ್ಟ ದತ್ತಾಂಶ, ಒಂದರೊಳಗೆ ಇನ್ನೊಂದು ಕೈ ಹಾಕುವುದರಿಂದ ಎಂದೂ ಅಲ್ಲ. ನಿಯಮ ಮೂರು: ವಿತರಣೆ runtime ಗೆ ಸೇರಿದ್ದು. Actor LLM agent, ನಿರ್ಧಾರಾತ್ಮಕ validator, ಡೇಟಾಬೇಸ್ ಅಡಾಪ್ಟರ್ ಅಥವಾ ಮಾನವ-ಅನುಮೋದನೆ ಗೇಟ್‌ವೇ ಆಗಬಹುದು; ಅಮೂರ್ತತೆಗೆ LLM ಬೇಕಿಲ್ಲ. ನೆನಪಿಡಬೇಕಾದ ಸಮೀಕರಣ: send ಎಂದರೆ handle ಅಲ್ಲ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Actors and the Runtime",
    "headingKn": "Actors ಮತ್ತು Runtime",
    "svgCode": "<svg viewBox=\"0 0 300 205\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\">\n  <rect width=\"300\" height=\"205\" rx=\"8\" fill=\"#0f172a\"/>\n  <text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">Actors talk through the runtime, never directly</text>\n  <rect x=\"20\" y=\"26\" width=\"100\" height=\"44\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"70\" y=\"40\" fill=\"#6ee7b7\" text-anchor=\"middle\">ReviewerAgent</text><text x=\"70\" y=\"53\" fill=\"#6ee7b7\" text-anchor=\"middle\" font-size=\"6\">private state</text><text x=\"70\" y=\"62\" fill=\"#6ee7b7\" text-anchor=\"middle\" font-size=\"6\">handler: receive()</text>\n  <rect x=\"180\" y=\"26\" width=\"100\" height=\"44\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"230\" y=\"40\" fill=\"#c4b5fd\" text-anchor=\"middle\">ChecklistAgent</text><text x=\"230\" y=\"53\" fill=\"#c4b5fd\" text-anchor=\"middle\" font-size=\"6\">private state</text><text x=\"230\" y=\"62\" fill=\"#c4b5fd\" text-anchor=\"middle\" font-size=\"6\">handler: receive()</text>\n  <rect x=\"60\" y=\"100\" width=\"180\" height=\"46\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"114\" fill=\"#fde68a\" text-anchor=\"middle\">RUNTIME</text><text x=\"150\" y=\"127\" fill=\"#fde68a\" text-anchor=\"middle\" font-size=\"6\">registry, queue, routing</text><text x=\"150\" y=\"137\" fill=\"#fde68a\" text-anchor=\"middle\" font-size=\"6\">failure isolation, dead letters, trace</text>\n  <path d=\"M70,70 V100\" stroke=\"#475569\"/><text x=\"74\" y=\"88\" fill=\"#94a3b8\" font-size=\"6\">send</text>\n  <path d=\"M230,100 V70\" stroke=\"#475569\"/><text x=\"204\" y=\"88\" fill=\"#94a3b8\" font-size=\"6\">deliver</text>\n  <path d=\"M150,146 V162\" stroke=\"#475569\"/>\n  <text x=\"150\" y=\"176\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">send is not handle: the sender returns, the runtime delivers later</text>\n  <text x=\"150\" y=\"188\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">that gap is where isolation, concurrency and tracing live</text>\n</svg>",
    "captionEn": "Two actors with private state never call each other. The runtime registers, routes and isolates.",
    "captionKn": "ಖಾಸಗಿ state ಇರುವ ಎರಡು actors ಎಂದೂ ಒಂದನ್ನೊಂದು ಕರೆಯುವುದಿಲ್ಲ. Runtime ನೋಂದಾಯಿಸುತ್ತದೆ, ಮಾರ್ಗ ತೋರಿಸುತ್ತದೆ ಮತ್ತು ಪ್ರತ್ಯೇಕಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "The AutoGen layers, as a mental map",
    "headingKn": "AutoGen ಪದರಗಳು, ಮಾನಸಿಕ ನಕ್ಷೆಯಾಗಿ",
    "headers": [
     "Layer",
     "Concern",
     "This lab"
    ],
    "rows": [
     [
      "Core",
      "Runtime, messages, actors, topics, routing",
      "Message, Actor, Runtime"
     ],
     [
      "AgentChat",
      "Higher-level teams and conversation patterns",
      "not built here"
     ],
     [
      "Extensions",
      "Models, tools, memory, external services",
      "not built here"
     ]
    ]
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Building the Core",
    "textKn": "Core ನಿರ್ಮಿಸುವುದು",
    "level": "H2"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "actor_1.py",
    "headingEn": "Message, Actor, Runtime and three small actors",
    "headingKn": "Message, Actor, Runtime ಮತ್ತು ಮೂರು ಚಿಕ್ಕ actors",
    "descEn": "Message is a frozen dataclass of sender, recipient, topic and body. Actor is an abstract class whose only contract is receive(message, runtime). Runtime keeps a registry and a FIFO queue: send() only enqueues, and run() dequeues, resolves the recipient and calls its handler. A message budget guards the loop. CounterActor owns a private count that only its own handler changes.",
    "descKn": "Message sender, recipient, topic ಮತ್ತು body ಇರುವ ಫ್ರೋಜನ್ dataclass. Actor ಅಮೂರ್ತ ವರ್ಗ, ಅದರ ಏಕೈಕ ಒಪ್ಪಂದ receive(message, runtime). Runtime ನೋಂದಣಿ ಮತ್ತು FIFO queue ಇಡುತ್ತದೆ: send() ಕೇವಲ ಸರತಿ ಸೇರಿಸುತ್ತದೆ, ಮತ್ತು run() ಹೊರತೆಗೆದು, ಸ್ವೀಕರಿಸುವವರನ್ನು ಪರಿಹರಿಸಿ, ಅದರ handler ಕರೆಯುತ್ತದೆ. ಸಂದೇಶ budget ಚಕ್ರ ಕಾಯುತ್ತದೆ. CounterActor ತನ್ನ handler ಮಾತ್ರ ಬದಲಿಸುವ ಖಾಸಗಿ count ಹೊಂದಿದೆ.",
    "code": "@dataclass(frozen=True)\nclass Message:\n    sender: str\n    recipient: str\n    topic: str\n    body: Any\n\n\nclass Actor(ABC):\n    def __init__(self, actor_id: str):\n        self.actor_id = actor_id\n\n    @abstractmethod\n    def receive(self, message: Message, runtime: \"Runtime\") -> None:\n        raise NotImplementedError\n\n\nclass Runtime:\n    def __init__(self, max_messages=1000):\n        self.actors: dict = {}\n        self.queue: Queue = Queue()\n        self.max_messages = max_messages\n        self.delivered = 0\n\n    def register(self, actor: Actor) -> None:\n        if actor.actor_id in self.actors:\n            raise ValueError(f\"actor already registered: {actor.actor_id}\")\n        self.actors[actor.actor_id] = actor\n\n    def send(self, message: Message) -> None:\n        self.queue.put(message)\n\n    def run(self) -> None:\n        while not self.queue.empty():\n            if self.delivered >= self.max_messages:\n                raise RuntimeError(f\"message budget of {self.max_messages} exhausted, {self.queue.qsize()} still queued\")\n            message = self.queue.get()\n            self.delivered += 1\n            actor = self.actors.get(message.recipient)\n            if actor is None:\n                continue\n            actor.receive(message, self)\n\n\nclass EchoActor(Actor):\n    def receive(self, message, runtime):\n        print(f\"{self.actor_id} received: {message.body}\")\n\n\nclass CounterActor(Actor):\n    def __init__(self, actor_id):\n        super().__init__(actor_id)\n        self.count = 0\n\n    def receive(self, message, runtime):\n        if message.topic == \"increment\":\n            self.count += 1\n            print(f\"{self.actor_id}: {self.count}\")\n\n\nclass PingPong(Actor):\n    def receive(self, message, runtime):\n        other = \"pong\" if self.actor_id == \"ping\" else \"ping\"\n        runtime.send(Message(self.actor_id, other, \"ball\", message.body))"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "actor_1.py",
    "headingEn": "main(): six experiments",
    "headingKn": "main(): ಆರು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() shows that send does not handle, runs the envelope, tests registry rules, probes what frozen really protects, runs a ping-pong loop against the message budget, and checks queue ordering.",
    "descKn": "main() send ಎಂದರೆ handle ಅಲ್ಲ ಎಂದು ತೋರಿಸುತ್ತದೆ, envelope ಚಲಾಯಿಸುತ್ತದೆ, ನೋಂದಣಿ ನಿಯಮಗಳನ್ನು ಪರೀಕ್ಷಿಸುತ್ತದೆ, frozen ನಿಜವಾಗಿ ಏನು ರಕ್ಷಿಸುತ್ತದೆ ಎಂದು ಪರೀಕ್ಷಿಸುತ್ತದೆ, ಸಂದೇಶ budget ವಿರುದ್ಧ ping-pong ಚಕ್ರ ಚಲಾಯಿಸುತ್ತದೆ, ಮತ್ತು ಸರತಿ ಕ್ರಮ ಪರಿಶೀಲಿಸುತ್ತದೆ.",
    "code": "def section(t):\n    print(f\"\\n--- {t} ---\")\n\n\ndef main():\n    section(\"1. Sending is not handling\")\n    rt = Runtime()\n    counter = CounterActor(\"counter\")\n    rt.register(counter)\n    for _ in range(3):\n        rt.send(Message(\"main\", \"counter\", \"increment\", None))\n    print(\"after three sends, before run(): count =\", counter.count, \"| queued:\", rt.queue.qsize())\n    rt.run()\n    print(\"after run(): count =\", counter.count)\n\n    section(\"2. The message envelope: routing metadata plus a body\")\n    rt2 = Runtime()\n    rt2.register(EchoActor(\"echo\"))\n    rt2.send(Message(\"main\", \"echo\", \"say\", \"Hello actor!\"))\n    rt2.run()\n\n    section(\"3. Registry rules\")\n    try:\n        rt2.register(EchoActor(\"echo\"))\n    except ValueError as e:\n        print(\"duplicate id ->\", e)\n    rt2.send(Message(\"main\", \"nobody\", \"say\", \"anyone there?\"))\n    rt2.run()\n    print(\"a message to an unknown recipient was silently dropped by this first runtime; Part 2 fixes that\")\n\n    section(\"4. Genuinely checking: frozen protects the fields, not what they point to\")\n    m = Message(\"main\", \"echo\", \"say\", {\"items\": [\"a\"]})\n    try:\n        m.topic = \"other\"\n    except FrozenInstanceError as e:\n        print(\"assigning m.topic ->\", type(e).__name__)\n    seen = []\n    class Recorder(Actor):\n        def receive(self, message, runtime):\n            seen.append(list(message.body[\"items\"]))\n    rt3 = Runtime()\n    rt3.register(Recorder(\"rec\"))\n    shared = {\"items\": [\"a\"]}\n    rt3.send(Message(\"main\", \"rec\", \"t\", shared))\n    shared[\"items\"].append(\"INJECTED AFTER SEND\")\n    rt3.run()\n    print(\"recipient saw:\", seen[0], \"| the sender changed the body after sending\")\n    print(\"use tuples or copy.deepcopy(body) when sending, or immutable payload dataclasses\")\n\n    section(\"5. Genuinely checking: two actors can keep a run alive forever\")\n    rt4 = Runtime(max_messages=50)\n    rt4.register(PingPong(\"ping\"))\n    rt4.register(PingPong(\"pong\"))\n    rt4.send(Message(\"main\", \"ping\", \"ball\", 0))\n    try:\n        rt4.run()\n    except RuntimeError as e:\n        print(\"RuntimeError:\", e)\n    print(\"an event loop needs a message budget or a termination rule, like any agent loop\")\n\n    section(\"6. Ordering: one FIFO queue\")\n    rt5 = Runtime()\n    log = []\n    class Logger(Actor):\n        def receive(self, message, runtime):\n            log.append(message.body)\n    rt5.register(Logger(\"log\"))\n    for i in range(5):\n        rt5.send(Message(\"main\", \"log\", \"t\", i))\n    rt5.run()\n    print(\"delivery order:\", log)\n    print(\"a real distributed transport weakens this: retries, partitions and parallel workers all reorder\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Sending is not handling ---\nafter three sends, before run(): count = 0 | queued: 3\ncounter: 1\ncounter: 2\ncounter: 3\nafter run(): count = 3\n\n--- 2. The message envelope: routing metadata plus a body ---\necho received: Hello actor!\n\n--- 3. Registry rules ---\nduplicate id -> actor already registered: echo\na message to an unknown recipient was silently dropped by this first runtime; Part 2 fixes that\n\n--- 4. Genuinely checking: frozen protects the fields, not what they point to ---\nassigning m.topic -> FrozenInstanceError\nrecipient saw: ['a', 'INJECTED AFTER SEND'] | the sender changed the body after sending\nuse tuples or copy.deepcopy(body) when sending, or immutable payload dataclasses\n\n--- 5. Genuinely checking: two actors can keep a run alive forever ---\nRuntimeError: message budget of 50 exhausted, 1 still queued\nan event loop needs a message budget or a termination rule, like any agent loop\n\n--- 6. Ordering: one FIFO queue ---\ndelivery order: [0, 1, 2, 3, 4]\na real distributed transport weakens this: retries, partitions and parallel workers all reorder"
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
    "headingEn": "Send Is Not Handle",
    "headingKn": "Send ಎಂದರೆ Handle ಅಲ್ಲ",
    "bodyEn": "Section 1 sends three increment messages to a counter. Before run(), count is 0 and three messages are queued. After run(), the counter prints 1, 2, 3 and count is 3. The sender never touched count; the actor changed its own state when its handler ran. This separation of delivery from handling is the foundation of everything in Part 2.",
    "bodyKn": "ವಿಭಾಗ 1 counter ಗೆ ಮೂರು increment ಸಂದೇಶಗಳನ್ನು ಕಳುಹಿಸುತ್ತದೆ. run() ಮೊದಲು count 0 ಮತ್ತು ಮೂರು ಸಂದೇಶ ಸರತಿಯಲ್ಲಿವೆ. run() ನಂತರ counter 1, 2, 3 ಮುದ್ರಿಸುತ್ತದೆ ಮತ್ತು count 3. ಕಳುಹಿಸುವವರು count ಮುಟ್ಟಲಿಲ್ಲ; handler ಚಲಿಸಿದಾಗ actor ತನ್ನದೇ state ಬದಲಿಸಿತು. ವಿತರಣೆ ಮತ್ತು handling ನ ಈ ಪ್ರತ್ಯೇಕತೆ ಭಾಗ 2 ರ ಎಲ್ಲದರ ಅಡಿಪಾಯ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Frozen Does Not Freeze the Body",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Frozen ದೇಹವನ್ನು ಫ್ರೀಜ್ ಮಾಡುವುದಿಲ್ಲ",
    "bodyEn": "Section 4 shows that assigning message.topic raises FrozenInstanceError, so the envelope fields are protected. But the body is a dict that the sender still holds. The sender appends \"INJECTED AFTER SEND\" after calling send(), and the recipient, who receives the message later, sees the changed list. frozen=True stops reassignment; it does not make a mutable object immutable, and a queued message is shared state until it is delivered. Send tuples, deep-copy the body, or use frozen payload dataclasses, which is what Part 3 does.",
    "bodyKn": "ವಿಭಾಗ 4 message.topic ಗೆ ನಿಯೋಜಿಸುವುದು FrozenInstanceError ಎತ್ತುತ್ತದೆ ಎಂದು ತೋರಿಸುತ್ತದೆ, ಆದ್ದರಿಂದ envelope ಕ್ಷೇತ್ರಗಳು ರಕ್ಷಿತ. ಆದರೆ body ಕಳುಹಿಸುವವರು ಇನ್ನೂ ಹಿಡಿದಿರುವ ನಿಘಂಟು. ಕಳುಹಿಸುವವರು send() ಕರೆದ ನಂತರ \"INJECTED AFTER SEND\" ಸೇರಿಸುತ್ತಾರೆ, ಮತ್ತು ನಂತರ ಸಂದೇಶ ಪಡೆಯುವ ಸ್ವೀಕರಿಸುವವರು ಬದಲಾದ ಪಟ್ಟಿ ನೋಡುತ್ತಾರೆ. frozen=True ಮರುನಿಯೋಜನೆ ತಡೆಯುತ್ತದೆ; ಬದಲಾಯಿಸಬಹುದಾದ ವಸ್ತುವನ್ನು ಬದಲಾಗದಂತೆ ಮಾಡುವುದಿಲ್ಲ, ಮತ್ತು ಸರತಿಯಲ್ಲಿನ ಸಂದೇಶ ವಿತರಣೆಯಾಗುವವರೆಗೆ ಹಂಚಿಕೆಯ state. Tuples ಕಳುಹಿಸಿ, body deep-copy ಮಾಡಿ, ಅಥವಾ ಫ್ರೋಜನ್ payload dataclasses ಬಳಸಿ, ಭಾಗ 3 ಮಾಡುವುದು ಅದನ್ನೇ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Event Loops Need Termination",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Event Loops ಗೆ ಮುಕ್ತಾಯ ಬೇಕು",
    "bodyEn": "Section 5 registers two actors that each reply to the other. The run never ends on its own; the message budget stops it with \"message budget of 50 exhausted, 1 still queued\". This is the same lesson as an agent loop: anything that can keep producing work needs an explicit stopping rule. Section 3 also shows a limit of this first runtime, a message to an unknown recipient simply vanishes. Section 6 shows FIFO order, which is an in-process property; a distributed transport reorders under retries and partitions.",
    "bodyKn": "ವಿಭಾಗ 5 ಒಂದಕ್ಕೊಂದು ಉತ್ತರಿಸುವ ಎರಡು actors ನೋಂದಾಯಿಸುತ್ತದೆ. ಓಟ ತಾನಾಗಿ ಕೊನೆಗೊಳ್ಳುವುದಿಲ್ಲ; ಸಂದೇಶ budget ಅದನ್ನು \"message budget of 50 exhausted, 1 still queued\" ನೊಂದಿಗೆ ನಿಲ್ಲಿಸುತ್ತದೆ. ಇದು agent ಚಕ್ರದ ಅದೇ ಪಾಠ: ಕೆಲಸ ಉತ್ಪಾದಿಸುತ್ತಲೇ ಇರಬಲ್ಲ ಯಾವುದೇ ವಸ್ತುವಿಗೆ ಸ್ಪಷ್ಟ ನಿಲುಗಡೆ ನಿಯಮ ಬೇಕು. ವಿಭಾಗ 3 ಈ ಮೊದಲ runtime ನ ಮಿತಿಯನ್ನೂ ತೋರಿಸುತ್ತದೆ, ಅಜ್ಞಾತ ಸ್ವೀಕರಿಸುವವರಿಗೆ ಸಂದೇಶ ಸುಮ್ಮನೆ ಮಾಯವಾಗುತ್ತದೆ. ವಿಭಾಗ 6 FIFO ಕ್ರಮ ತೋರಿಸುತ್ತದೆ, ಅದು ಪ್ರಕ್ರಿಯೆ-ಒಳಗಿನ ಗುಣ; ವಿತರಿತ ಸಾಗಣೆ ಮರುಪ್ರಯತ್ನ ಮತ್ತು ವಿಭಜನೆಗಳಲ್ಲಿ ಕ್ರಮ ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why the Runtime Matters",
    "headingKn": "Runtime ಏಕೆ ಮುಖ್ಯ",
    "bodyEn": "The runtime is an interception point. Because every message passes through it, the same send() can later gain retries, dead letters, tracing, authorization, serialisation and a network transport without changing how actors are written. The runtime owns how execution happens; the actor owns what a message means. Keep infrastructure out of actors and domain logic out of the runtime.",
    "bodyKn": "Runtime ಒಂದು ಮಧ್ಯಪ್ರವೇಶ ಬಿಂದು. ಪ್ರತಿ ಸಂದೇಶ ಅದರ ಮೂಲಕ ಹಾದುಹೋಗುವುದರಿಂದ, ಅದೇ send() ಗೆ actors ಬರೆಯುವ ರೀತಿ ಬದಲಿಸದೆ ನಂತರ ಮರುಪ್ರಯತ್ನ, dead letters, ಟ್ರೇಸಿಂಗ್, ಅಧಿಕಾರ, ಧಾರಾವಾಹಿ ಮತ್ತು ನೆಟ್‌ವರ್ಕ್ ಸಾಗಣೆ ಸೇರಬಹುದು. Runtime ಚಲಾವಣೆ ಹೇಗೆ ನಡೆಯುತ್ತದೆ ಎಂಬುದನ್ನು ಹೊಂದಿದೆ; actor ಸಂದೇಶದ ಅರ್ಥ ಹೊಂದಿದೆ. ಮೂಲಸೌಕರ್ಯವನ್ನು actors ಹೊರಗೆ ಮತ್ತು ಕ್ಷೇತ್ರ ತರ್ಕವನ್ನು runtime ಹೊರಗೆ ಇಡಿ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "Agents hold independent state, wait on slow tools and humans, and fail independently. Modelling them as actors with explicit messages gives clear ownership, a natural place to observe and isolate failures, and a path from one process to many machines.",
    "bodyKn": "Agents ಸ್ವತಂತ್ರ state ಹೊಂದಿವೆ, ನಿಧಾನ tools ಮತ್ತು ಮಾನವರಿಗಾಗಿ ಕಾಯುತ್ತವೆ, ಮತ್ತು ಸ್ವತಂತ್ರವಾಗಿ ವಿಫಲವಾಗುತ್ತವೆ. ಅವನ್ನು ಸ್ಪಷ್ಟ ಸಂದೇಶಗಳಿರುವ actors ಆಗಿ ಮಾದರಿ ಮಾಡುವುದು ಸ್ಪಷ್ಟ ಮಾಲೀಕತ್ವ, ವೈಫಲ್ಯ ಗಮನಿಸಿ ಪ್ರತ್ಯೇಕಿಸಲು ಸಹಜ ಸ್ಥಳ, ಮತ್ತು ಒಂದು ಪ್ರಕ್ರಿಯೆಯಿಂದ ಹಲವು ಯಂತ್ರಗಳಿಗೆ ದಾರಿ ನೀಡುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"an actor system just runs agents asynchronously.\" The deeper idea is ownership, isolation and messages, with the runtime owning delivery. Do not use actors for three deterministic function calls.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"actor ವ್ಯವಸ್ಥೆ ಕೇವಲ agents ಅನ್ನು async ಆಗಿ ಚಲಾಯಿಸುತ್ತದೆ.\" ಆಳವಾದ ಕಲ್ಪನೆ ಮಾಲೀಕತ್ವ, ಪ್ರತ್ಯೇಕತೆ ಮತ್ತು ಸಂದೇಶಗಳು, ವಿತರಣೆ runtime ಗೆ ಸೇರಿ. ಮೂರು ನಿರ್ಧಾರಾತ್ಮಕ ಕಾರ್ಯ ಕರೆಗಳಿಗೆ actors ಬಳಸಬೇಡಿ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Actor: private state plus mailbox plus handler. Message: structured communication between actors. Runtime: registry, routing, scheduling and failure handling. Topic: the message category. Private state: owned and changed by one actor. Message budget: a cap that stops runaway loops.",
    "bodyKn": "Actor: ಖಾಸಗಿ state ಜೊತೆ mailbox ಜೊತೆ handler. ಸಂದೇಶ: actors ನಡುವಿನ ರಚನಾತ್ಮಕ ಸಂವಹನ. Runtime: ನೋಂದಣಿ, ಮಾರ್ಗನಿರ್ದೇಶನ, ವೇಳಾಪಟ್ಟಿ ಮತ್ತು ವೈಫಲ್ಯ ನಿರ್ವಹಣೆ. Topic: ಸಂದೇಶ ವರ್ಗ. ಖಾಸಗಿ state: ಒಬ್ಬ actor ಹೊಂದಿ ಬದಲಿಸುವುದು. ಸಂದೇಶ budget: ಓಡಿಹೋಗುವ ಚಕ್ರ ನಿಲ್ಲಿಸುವ ಮಿತಿ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) An actor owns private state and reacts to messages. 2) send() enqueues and run() delivers, so send is not handle. 3) The sender never touches the receiver's state. 4) frozen=True protects fields, not a mutable body. 5) Two actors replying to each other loop forever without a budget. 6) FIFO order is a local guarantee. 7) The runtime is where retries, tracing and distribution will attach.",
    "bodyKn": "1) Actor ಖಾಸಗಿ state ಹೊಂದಿ ಸಂದೇಶಗಳಿಗೆ ಪ್ರತಿಕ್ರಿಯಿಸುತ್ತದೆ. 2) send() ಸರತಿ ಸೇರಿಸುತ್ತದೆ ಮತ್ತು run() ವಿತರಿಸುತ್ತದೆ, ಆದ್ದರಿಂದ send ಎಂದರೆ handle ಅಲ್ಲ. 3) ಕಳುಹಿಸುವವರು ಸ್ವೀಕರಿಸುವವರ state ಎಂದೂ ಮುಟ್ಟುವುದಿಲ್ಲ. 4) frozen=True ಕ್ಷೇತ್ರಗಳನ್ನು ರಕ್ಷಿಸುತ್ತದೆ, ಬದಲಾಯಿಸಬಹುದಾದ body ಅಲ್ಲ. 5) ಒಂದಕ್ಕೊಂದು ಉತ್ತರಿಸುವ ಎರಡು actors budget ಇಲ್ಲದೆ ಶಾಶ್ವತವಾಗಿ ಚಕ್ರ ನಡೆಸುತ್ತವೆ. 6) FIFO ಕ್ರಮ ಸ್ಥಳೀಯ ಖಾತರಿ. 7) ಮರುಪ್ರಯತ್ನ, ಟ್ರೇಸಿಂಗ್ ಮತ್ತು ವಿತರಣೆ ಜೋಡಣೆಯಾಗುವುದು runtime ನಲ್ಲಿ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What are the three fundamental pieces of an actor?",
      "qKn": "Actor ನ ಮೂರು ಮೂಲಭೂತ ಭಾಗಗಳು ಯಾವುವು?",
      "opts": [
       "Prompt, model, tool",
       "Private state, inbox, handler",
       "Database, API, cache",
       "Planner, executor, critic"
      ],
      "optsKn": [
       "Prompt, ಮಾದರಿ, tool",
       "ಖಾಸಗಿ state, inbox, handler",
       "ಡೇಟಾಬೇಸ್, API, cache",
       "Planner, executor, critic"
      ],
      "correct": 1
     },
     {
      "q": "Before run(), three messages were sent to the counter. What was count?",
      "qKn": "run() ಮೊದಲು counter ಗೆ ಮೂರು ಸಂದೇಶ ಕಳುಹಿಸಲಾಯಿತು. count ಎಷ್ಟಿತ್ತು?",
      "opts": [
       "3",
       "0, because send only enqueues and the handler had not run",
       "1",
       "It was undefined"
      ],
      "optsKn": [
       "3",
       "0, ಏಕೆಂದರೆ send ಕೇವಲ ಸರತಿ ಸೇರಿಸುತ್ತದೆ ಮತ್ತು handler ಚಲಿಸಿರಲಿಲ್ಲ",
       "1",
       "ಅದು ವ್ಯಾಖ್ಯಾನಿಸಲ್ಪಟ್ಟಿರಲಿಲ್ಲ"
      ],
      "correct": 1
     },
     {
      "q": "The sender appended to the body dict after send(). What did the recipient see?",
      "qKn": "send() ನಂತರ ಕಳುಹಿಸುವವರು body ನಿಘಂಟಿಗೆ ಸೇರಿಸಿದರು. ಸ್ವೀಕರಿಸುವವರು ಏನು ನೋಡಿದರು?",
      "opts": [
       "The original list only",
       "The modified list, because frozen does not make the body immutable",
       "An error",
       "An empty list"
      ],
      "optsKn": [
       "ಮೂಲ ಪಟ್ಟಿ ಮಾತ್ರ",
       "ಬದಲಾದ ಪಟ್ಟಿ, ಏಕೆಂದರೆ frozen body ಯನ್ನು ಬದಲಾಗದಂತೆ ಮಾಡುವುದಿಲ್ಲ",
       "ಒಂದು ದೋಷ",
       "ಖಾಲಿ ಪಟ್ಟಿ"
      ],
      "correct": 1
     },
     {
      "q": "What stopped the ping-pong actors?",
      "qKn": "ping-pong actors ಅನ್ನು ಯಾವುದು ನಿಲ್ಲಿಸಿತು?",
      "opts": [
       "They finished naturally",
       "The runtime's message budget",
       "Python garbage collection",
       "The queue emptied"
      ],
      "optsKn": [
       "ಅವು ಸಹಜವಾಗಿ ಮುಗಿದವು",
       "Runtime ನ ಸಂದೇಶ budget",
       "Python garbage collection",
       "ಸರತಿ ಖಾಲಿಯಾಯಿತು"
      ],
      "correct": 1
     },
     {
      "q": "Why does send() enqueue instead of calling the recipient directly?",
      "qKn": "send() ಸ್ವೀಕರಿಸುವವರನ್ನು ನೇರವಾಗಿ ಕರೆಯುವ ಬದಲು ಸರತಿ ಏಕೆ ಸೇರಿಸುತ್ತದೆ?",
      "opts": [
       "To save syntax",
       "To separate delivery from handling, which creates a place for isolation, scheduling and tracing",
       "Queues call LLMs",
       "Actors cannot run functions"
      ],
      "optsKn": [
       "ಸಿಂಟ್ಯಾಕ್ಸ್ ಉಳಿಸಲು",
       "ವಿತರಣೆ ಮತ್ತು handling ಬೇರ್ಪಡಿಸಲು, ಇದು ಪ್ರತ್ಯೇಕತೆ, ವೇಳಾಪಟ್ಟಿ ಮತ್ತು ಟ್ರೇಸಿಂಗ್‌ಗೆ ಸ್ಥಳ ಸೃಷ್ಟಿಸುತ್ತದೆ",
       "ಸರತಿಗಳು LLM ಕರೆಯುತ್ತವೆ",
       "Actors ಕಾರ್ಯ ಚಲಾಯಿಸಲಾರವು"
      ],
      "correct": 1
     }
    ]
   }
  }
 ]
};
