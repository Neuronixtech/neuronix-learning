module.exports = {
 "phaseId": "6a369d6466020ed05b3215d1",
 "moduleId": "6a369d6566020ed05b3215ef",
 "order": 2,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Parallel, Swarm and Networked Architectures (Part 3 of 3) — Event Bus, Routing and Delivery",
 "titleKn": "ಸಮಾಂತರ, ಸ್ವಾರ್ಮ್ ಮತ್ತು ನೆಟ್‌ವರ್ಕ್ ವಾಸ್ತುಶಿಲ್ಪಗಳು (ಭಾಗ 3 / 3) — ಈವೆಂಟ್ ಬಸ್, ರೂಟಿಂಗ್ ಮತ್ತು ವಿತರಣೆ",
 "desc": "Build an in-process event bus with routing, ids, redelivery, dead letters and validation.",
 "descKn": "ರೂಟಿಂಗ್, ids, ಮರುವಿತರಣೆ, ಡೆಡ್ ಲೆಟರ್ ಮತ್ತು ಮಾನ್ಯತೆಯೊಂದಿಗೆ ಪ್ರಕ್ರಿಯೆಯೊಳಗಿನ ಈವೆಂಟ್ ಬಸ್ ನಿರ್ಮಿಸಿ.",
 "objectives": [
  "Route by content.",
  "Trace with ids.",
  "Make dedupe atomic.",
  "Park poison messages.",
  "Validate messages."
 ],
 "objectivesKn": [
  "ವಿಷಯದಿಂದ ರೂಟ್ ಮಾಡಿ.",
  "ids ನಿಂದ ಜಾಡು ಹಿಡಿಯಿರಿ.",
  "dedupe ಪರಮಾಣುವಾಗಿಸಿ.",
  "poison ಸಂದೇಶಗಳನ್ನು ಪಕ್ಕಕ್ಕಿಡಿ.",
  "ಸಂದೇಶಗಳನ್ನು ಮಾನ್ಯಗೊಳಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Parallel, Swarm and Networked Architectures (Part 3 of 3)",
    "textKn": "ಸಮಾಂತರ, ಸ್ವಾರ್ಮ್ ಮತ್ತು ನೆಟ್‌ವರ್ಕ್ ವಾಸ್ತುಶಿಲ್ಪಗಳು (ಭಾಗ 3 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 3 of 3: an in-process event bus with content-based routing, a message-driven pipeline, correlation and causation ids, delivery with and without dedupe, a dead-letter queue and message validation. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind sequential, fixed and shared-queue execution, continuous workers with sentinels, back-pressure, retries, backoff, idempotency, starvation, a retry deadlock, an in-process event bus with routing, correlation ids, delivery guarantees, dead letters and message validation, not the real software, and work is time.sleep or scripted, queues and the bus are in one process, the task list is our own because the lesson paste was cut off, thread timings vary from run to run and nothing survives a crash, so no real LLM behaviour is measured. The original code/main.py was not supplied and the lesson task list was cut off in the paste, so the labs are our own implementation. Matrix, NATS, Kafka and SQS are described in the lesson and were not run, and thread timings vary between runs. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 3ನೆಯದು: ವಿಷಯ-ಆಧಾರಿತ ರೂಟಿಂಗ್ ಇರುವ ಪ್ರಕ್ರಿಯೆಯೊಳಗಿನ ಈವೆಂಟ್ ಬಸ್, ಸಂದೇಶ-ಚಾಲಿತ ಪೈಪ್‌ಲೈನ್, correlation ಮತ್ತು causation ids, dedupe ಇಲ್ಲದ ಮತ್ತು ಇರುವ ವಿತರಣೆ, ಡೆಡ್-ಲೆಟರ್ ಸರದಿ ಮತ್ತು ಸಂದೇಶ ಮಾನ್ಯತೆ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು ಅನುಕ್ರಮ, ನಿಗದಿತ ಮತ್ತು ಹಂಚಿಕೆಯ-ಸರದಿ ಕಾರ್ಯಗತಗೊಳಿಕೆ, sentinel ಗಳೊಂದಿಗೆ ನಿರಂತರ ಕೆಲಸಗಾರರು, back-pressure, ಮರುಪ್ರಯತ್ನ, backoff, idempotency, ಹಸಿವು, ಮರುಪ್ರಯತ್ನ ಡೆಡ್‌ಲಾಕ್, ರೂಟಿಂಗ್ ಇರುವ ಪ್ರಕ್ರಿಯೆಯೊಳಗಿನ ಈವೆಂಟ್ ಬಸ್, correlation ids, ವಿತರಣೆ ಖಾತರಿಗಳು, ಡೆಡ್ ಲೆಟರ್‌ಗಳು ಮತ್ತು ಸಂದೇಶ ಮಾನ್ಯತೆ ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಕೆಲಸ time.sleep ಅಥವಾ ಸ್ಕ್ರಿಪ್ಟ್, ಸರದಿಗಳು ಮತ್ತು ಬಸ್ ಒಂದೇ ಪ್ರಕ್ರಿಯೆಯಲ್ಲಿವೆ, lesson paste ಕತ್ತರಿಸಲ್ಪಟ್ಟಿದ್ದರಿಂದ ಕೆಲಸದ ಪಟ್ಟಿ ನಮ್ಮದೇ, thread ಸಮಯಗಳು ಓಟದಿಂದ ಓಟಕ್ಕೆ ಬದಲಾಗುತ್ತವೆ ಮತ್ತು ಕ್ರ್ಯಾಶ್ ಆದಾಗ ಏನೂ ಉಳಿಯುವುದಿಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ code/main.py ನೀಡಲಾಗಿಲ್ಲ ಮತ್ತು lesson ಕೆಲಸದ ಪಟ್ಟಿ paste ನಲ್ಲಿ ಕತ್ತರಿಸಲ್ಪಟ್ಟಿತ್ತು, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ನಮ್ಮದೇ ಅನುಷ್ಠಾನ. Matrix, NATS, Kafka ಮತ್ತು SQS lesson ನಲ್ಲಿ ವಿವರಿಸಲ್ಪಟ್ಟಿವೆ ಮತ್ತು ಓಡಿಸಲಾಗಿಲ್ಲ, ಮತ್ತು thread ಸಮಯಗಳು ಓಟಗಳ ನಡುವೆ ಬದಲಾಗುತ್ತವೆ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Coordination Through Messages",
    "textKn": "ಸಂದೇಶಗಳ ಮೂಲಕ ಸಮನ್ವಯ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "An Event Bus Without a Supervisor",
    "headingKn": "supervisor ಇಲ್ಲದ ಈವೆಂಟ್ ಬಸ್",
    "bodyEn": "The last step moves from a shared queue to topics. A bus carries messages with a topic, a payload, a correlation id and a causation id, a router picks the topic from the message content, and a document passes through extract, validate and store with no component deciding the order. The lab then tests what happens with at-least-once delivery, how a dedupe record must be written, what a dead-letter queue holds, and how a message is validated before it is trusted.",
    "bodyKn": "ಕೊನೆಯ ಹಂತ ಹಂಚಿಕೆಯ ಸರದಿಯಿಂದ ವಿಷಯಗಳಿಗೆ ಚಲಿಸುತ್ತದೆ. ಬಸ್ topic, payload, correlation id ಮತ್ತು causation id ಇರುವ ಸಂದೇಶಗಳನ್ನು ಹೊರುತ್ತದೆ, router ಸಂದೇಶದ ವಿಷಯದಿಂದ topic ಆರಿಸುತ್ತದೆ, ಮತ್ತು ದಾಖಲೆ ಕ್ರಮ ನಿರ್ಧರಿಸುವ ಯಾವ ಘಟಕವೂ ಇಲ್ಲದೆ extract, validate ಮತ್ತು store ಮೂಲಕ ಹಾದುಹೋಗುತ್ತದೆ. ಲ್ಯಾಬ್ ನಂತರ at-least-once ವಿತರಣೆಯಲ್ಲಿ ಏನಾಗುತ್ತದೆ, dedupe ದಾಖಲೆಯನ್ನು ಹೇಗೆ ಬರೆಯಬೇಕು, ಡೆಡ್-ಲೆಟರ್ ಸರದಿ ಏನು ಹಿಡಿಯುತ್ತದೆ, ಮತ್ತು ನಂಬುವ ಮೊದಲು ಸಂದೇಶವನ್ನು ಹೇಗೆ ಮಾನ್ಯಗೊಳಿಸಲಾಗುತ್ತದೆ ಎಂದು ಪರೀಕ್ಷಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Networked Messages",
    "headingKn": "ಜಾಲದ ಸಂದೇಶಗಳು",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">no supervisor means no one notices a silent topic</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">bus</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">topics</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">router</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">by content</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">ids</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">correlation + cause</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">dead letter</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">poison parked</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">no supervisor means no one notices a silent topic</text></svg>",
    "captionEn": "Topics, routing, ids and delivery rules instead of a supervisor.",
    "captionKn": "supervisor ಬದಲು ವಿಷಯಗಳು, ರೂಟಿಂಗ್, ids ಮತ್ತು ವಿತರಣೆ ನಿಯಮಗಳು."
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
      "routing",
      "invoice, contract, large and unknown"
     ],
     [
      "pipeline",
      "two documents stored, one left unread"
     ],
     [
      "identifiers",
      "the chain m1, m4, m6, m7"
     ],
     [
      "redelivery",
      "no dedupe, dedupe after, dedupe with the effect"
     ],
     [
      "dead letters",
      "three deliveries then parked"
     ],
     [
      "validation",
      "three reasons for a bad message"
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
    "filename": "pw_3.py",
    "headingEn": "Messages, bus and router",
    "headingKn": "ಸಂದೇಶಗಳು, ಬಸ್ ಮತ್ತು router",
    "descEn": "Msg carries topic, payload and ids, Bus keeps one queue per topic and a log, and route picks a topic from the content.",
    "descKn": "Msg topic, payload ಮತ್ತು ids ಹೊತ್ತಿದೆ, Bus ಪ್ರತಿ topic ಗೆ ಒಂದು ಸರದಿ ಮತ್ತು ಲಾಗ್ ಇಡುತ್ತದೆ, ಮತ್ತು route ವಿಷಯದಿಂದ topic ಆರಿಸುತ್ತದೆ.",
    "code": "class Msg:\n    topic: str\n    payload: dict\n    correlation_id: str\n    causation_id: str = \"\"\n    msg_id: str = field(default_factory=lambda: f\"m{next(_ids)}\")\n    deliveries: int = 0\n\n\nclass Bus:\n    def __init__(self):\n        self.queues = defaultdict(deque)\n        self.log = []\n        self.dead = []\n\n    def publish(self, m):\n        self.queues[m.topic].append(m)\n        self.log.append((m.msg_id, m.topic, m.correlation_id, m.causation_id))\n\n    def take(self, topic):\n        if self.queues[topic]:\n            m = self.queues[topic].popleft()\n            m.deliveries += 1\n            return m\n        return None\n\n\ndef route(payload):\n    t = payload.get(\"type\", \"\")\n    if t == \"invoice\":\n        return \"documents.invoice\"\n    if t == \"contract\":\n        return \"documents.contract\"\n    if payload.get(\"size\", 0) > 1000:\n        return \"documents.large\"\n    return \"documents.unknown\""
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "pw_3.py",
    "headingEn": "Pipeline, delivery and validation",
    "headingKn": "ಪೈಪ್‌ಲೈನ್, ವಿತರಣೆ ಮತ್ತು ಮಾನ್ಯತೆ",
    "descEn": "run_pipeline chains handlers by topic, consume_at_least_once redelivers and parks poison messages, and validate checks the shape and an allow-list.",
    "descKn": "run_pipeline handlers ಅನ್ನು topic ಪ್ರಕಾರ ಸರಪಳಿ ಮಾಡುತ್ತದೆ, consume_at_least_once ಮರುವಿತರಿಸಿ poison ಸಂದೇಶಗಳನ್ನು ಪಕ್ಕಕ್ಕಿಡುತ್ತದೆ, ಮತ್ತು validate ಆಕಾರ ಮತ್ತು ಅನುಮತಿ-ಪಟ್ಟಿ ಪರಿಶೀಲಿಸುತ್ತದೆ.",
    "code": "def run_pipeline(bus, docs):\n    handlers = {\n        \"documents.invoice\": lambda m: (\"extract.done\", {\"fields\": [\"total\", \"date\"], \"doc\": m.payload[\"doc\"]}),\n        \"documents.contract\": lambda m: (\"extract.done\", {\"fields\": [\"parties\"], \"doc\": m.payload[\"doc\"]}),\n        \"extract.done\": lambda m: (\"validate.done\", {\"ok\": bool(m.payload[\"fields\"]), \"doc\": m.payload[\"doc\"]}),\n        \"validate.done\": lambda m: (\"store.done\", {\"stored\": m.payload[\"doc\"]}),\n    }\n    for i, d in enumerate(docs):\n        bus.publish(Msg(route(d), d, f\"corr-{i}\"))\n    progress = True\n    while progress:\n        progress = False\n        for topic, h in handlers.items():\n            m = bus.take(topic)\n            if m:\n                progress = True\n                nt, pl = h(m)\n                bus.publish(Msg(nt, pl, m.correlation_id, m.msg_id))\n    return {t: len(q) for t, q in bus.queues.items() if q}\n\n\ndef chain(bus, corr):\n    return [(mid, topic) for mid, topic, c, _ in bus.log if c == corr]\n\n\ndef consume_at_least_once(bus, topic, handler, max_deliveries=3, mode=\"none\"):\n    seen, effects = set(), []\n    while True:\n        m = bus.take(topic)\n        if m is None:\n            return effects, seen\n        if mode != \"none\" and m.msg_id in seen:\n            continue\n        try:\n            if mode == \"with_effect\":\n                seen.add(m.msg_id)\n            handler(m, effects)\n            if mode == \"after\":\n                seen.add(m.msg_id)\n        except RuntimeError:\n            if m.deliveries >= max_deliveries:\n                bus.dead.append(m)\n            else:\n                bus.queues[topic].append(m)\n\n\ndef validate(m, allowed_topics):\n    errors = []\n    for k in (\"topic\", \"payload\", \"correlation_id\"):\n        if not getattr(m, k):\n            errors.append(f\"missing {k}\")\n    if m.topic not in allowed_topics:\n        errors.append(f\"topic {m.topic} not permitted\")\n    return errors"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "pw_3.py",
    "headingEn": "The experiments",
    "headingKn": "ಪ್ರಯೋಗಗಳು",
    "descEn": "main() runs the six experiments in order and prints the real result of each.",
    "descKn": "main() ಆರು ಪ್ರಯೋಗಗಳನ್ನು ಕ್ರಮವಾಗಿ ಓಡಿಸಿ ಪ್ರತಿಯೊಂದರ ನಿಜ ಫಲಿತಾಂಶ ಮುದ್ರಿಸುತ್ತದೆ.",
    "code": "def main():\n    section(\"1. Genuinely running: content-based routing\")\n    for d in ({\"type\": \"invoice\", \"doc\": \"d1\"}, {\"type\": \"contract\", \"doc\": \"d2\"}, {\"doc\": \"d3\", \"size\": 5000}, {\"doc\": \"d4\"}):\n        print(d, \"->\", route(d))\n    print(\"the router sends each message to a topic chosen from its content and sends anything it does not recognise to documents.unknown instead of dropping it; a rule that matches on a type field is only as good as the sender's honesty, so unexpected content needs a destination you actually watch.\")\n\n    section(\"2. Genuinely running: a message-driven pipeline with no supervisor\")\n    bus = Bus()\n    left = run_pipeline(bus, [{\"type\": \"invoice\", \"doc\": \"d1\"}, {\"type\": \"contract\", \"doc\": \"d2\"}, {\"doc\": \"d3\", \"size\": 5000}])\n    print(\"stored:\", [m.payload[\"stored\"] for m in bus.queues[\"store.done\"]], \"| messages left on unprocessed topics:\", left)\n    print(\"the invoice and the contract each pass through extract, validate and store through topics alone, with no component that decides the order, while the large untyped document sits unread on documents.large because nothing subscribes to it and the two store.done messages are the finished results; decentralised flow makes a missing subscriber silent, so a queue depth alarm is the only thing that reveals it.\")\n\n    section(\"3. Genuinely running: correlation and causation identifiers\")\n    for mid, topic in chain(bus, \"corr-0\"):\n        print(mid, topic)\n    causes = [(mid, c) for mid, _, corr, c in bus.log if corr == \"corr-0\"]\n    print(\"causation links (message <- caused by):\", causes)\n    print(\"all four messages of the first document share the correlation id corr-0 and each points at the message that caused it, so the full path of one document can be rebuilt from the log; the ids are assigned by the code in the lab and a real system must make sure that every hop copies them forward.\")\n\n    section(\"4. Genuinely running: at-least-once delivery without and with idempotency\")\n    flaky = {\"n\": 0}\n\n    def handler(m, effects):\n        effects.append(f\"charged {m.payload['order']}\")\n        flaky[\"n\"] += 1\n        if flaky[\"n\"] == 1:\n            raise RuntimeError(\"crashed after the side effect\")\n    for mode in (\"none\", \"after\", \"with_effect\"):\n        b = Bus(); flaky[\"n\"] = 0\n        b.publish(Msg(\"pay\", {\"order\": \"o1\"}, \"c1\"))\n        eff, seen = consume_at_least_once(b, \"pay\", handler, mode=mode)\n        print(f\"dedupe recorded {mode:<11}: effects={eff}\")\n    print(\"a worker that charges and crashes before acknowledging gets the same message again, so with no dedupe the effect is applied twice, and recording the id only after the handler succeeds still applies it twice because the crash happens before that line, while recording the id together with the effect applies it once; recording it before the effect could instead lose the effect if the crash came earlier, which is why a real system stores the key and the effect in one atomic step.\")\n\n    section(\"5. Genuinely running: a dead-letter queue\")\n    b = Bus()\n    b.publish(Msg(\"pay\", {\"order\": \"poison\"}, \"c9\"))\n\n    def always_fail(m, effects):\n        raise RuntimeError(\"cannot process\")\n    consume_at_least_once(b, \"pay\", always_fail, max_deliveries=3)\n    print(\"dead letters:\", [(m.msg_id, m.deliveries) for m in b.dead], \"| pay queue length:\", len(b.queues[\"pay\"]))\n    print(\"a message that fails on every delivery is moved aside after three deliveries instead of being redelivered forever, and the pay queue ends empty; a dead-letter queue stores the failure for a person or a repair job to look at and needs an alert, otherwise it is a quiet place to lose work.\")\n\n    section(\"6. Genuinely running: validating messages before trusting them\")\n    allowed = {\"documents.invoice\", \"documents.contract\"}\n    good = Msg(\"documents.invoice\", {\"doc\": \"d1\"}, \"c1\")\n    bad = Msg(\"admin.shutdown\", {}, \"\")\n    print(\"good:\", validate(good, allowed))\n    print(\"bad :\", validate(bad, allowed))\n    print(\"a message missing its payload and correlation id and addressed to a topic that is not on the allow-list is rejected with all three reasons, while the well-formed one passes; this checks shape and a topic list only, and says nothing about whether the sender is who it claims to be, which needs authentication outside this lab.\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: content-based routing ---\n{'type': 'invoice', 'doc': 'd1'} -> documents.invoice\n{'type': 'contract', 'doc': 'd2'} -> documents.contract\n{'doc': 'd3', 'size': 5000} -> documents.large\n{'doc': 'd4'} -> documents.unknown\nthe router sends each message to a topic chosen from its content and sends anything it does not recognise to documents.unknown instead of dropping it; a rule that matches on a type field is only as good as the sender's honesty, so unexpected content needs a destination you actually watch.\n\n--- 2. Genuinely running: a message-driven pipeline with no supervisor ---\nstored: ['d1', 'd2'] | messages left on unprocessed topics: {'documents.large': 1, 'store.done': 2}\nthe invoice and the contract each pass through extract, validate and store through topics alone, with no component that decides the order, while the large untyped document sits unread on documents.large because nothing subscribes to it and the two store.done messages are the finished results; decentralised flow makes a missing subscriber silent, so a queue depth alarm is the only thing that reveals it.\n\n--- 3. Genuinely running: correlation and causation identifiers ---\nm1 documents.invoice\nm4 extract.done\nm6 validate.done\nm7 store.done\ncausation links (message <- caused by): [('m1', ''), ('m4', 'm1'), ('m6', 'm4'), ('m7', 'm6')]\nall four messages of the first document share the correlation id corr-0 and each points at the message that caused it, so the full path of one document can be rebuilt from the log; the ids are assigned by the code in the lab and a real system must make sure that every hop copies them forward.\n\n--- 4. Genuinely running: at-least-once delivery without and with idempotency ---\ndedupe recorded none       : effects=['charged o1', 'charged o1']\ndedupe recorded after      : effects=['charged o1', 'charged o1']\ndedupe recorded with_effect: effects=['charged o1']\na worker that charges and crashes before acknowledging gets the same message again, so with no dedupe the effect is applied twice, and recording the id only after the handler succeeds still applies it twice because the crash happens before that line, while recording the id together with the effect applies it once; recording it before the effect could instead lose the effect if the crash came earlier, which is why a real system stores the key and the effect in one atomic step.\n\n--- 5. Genuinely running: a dead-letter queue ---\ndead letters: [('m13', 3)] | pay queue length: 0\na message that fails on every delivery is moved aside after three deliveries instead of being redelivered forever, and the pay queue ends empty; a dead-letter queue stores the failure for a person or a repair job to look at and needs an alert, otherwise it is a quiet place to lose work.\n\n--- 6. Genuinely running: validating messages before trusting them ---\ngood: []\nbad : ['missing payload', 'missing correlation_id', 'topic admin.shutdown not permitted']\na message missing its payload and correlation id and addressed to a topic that is not on the allow-list is rejected with all three reasons, while the well-formed one passes; this checks shape and a topic list only, and says nothing about whether the sender is who it claims to be, which needs authentication outside this lab."
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
    "headingEn": "Experiment 1: Content-based routing",
    "headingKn": "ಪ್ರಯೋಗ 1: Content-based routing",
    "bodyEn": "What it ran: Content-based routing. What the lab concluded: the router sends each message to a topic chosen from its content and sends anything it does not recognise to documents.unknown instead of dropping it; a rule that matches on a type field is only as good as the sender's honesty, so unexpected content needs a destination you actually watch.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Content-based routing. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the router sends each message to a topic chosen from its content and sends anything it does not recognise to documents.unknown instead of dropping it; a rule that matches on a type field is only as good as the sender's honesty, so unexpected content needs a destination you actually watch."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. Genuinely running: content-based routing ---\n{'type': 'invoice', 'doc': 'd1'} -> documents.invoice\n{'type': 'contract', 'doc': 'd2'} -> documents.contract\n{'doc': 'd3', 'size': 5000} -> documents.large\n{'doc': 'd4'} -> documents.unknown"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: A message-driven pipeline with no supervisor",
    "headingKn": "ಪ್ರಯೋಗ 2: A message-driven pipeline with no supervisor",
    "bodyEn": "What it ran: A message-driven pipeline with no supervisor. What the lab concluded: the invoice and the contract each pass through extract, validate and store through topics alone, with no component that decides the order, while the large untyped document sits unread on documents.large because nothing subscribes to it and the two store.done messages are the finished results; decentralised flow makes a missing subscriber silent, so a queue depth alarm is the only thing that reveals it.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A message-driven pipeline with no supervisor. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the invoice and the contract each pass through extract, validate and store through topics alone, with no component that decides the order, while the large untyped document sits unread on documents.large because nothing subscribes to it and the two store.done messages are the finished results; decentralised flow makes a missing subscriber silent, so a queue depth alarm is the only thing that reveals it."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely running: a message-driven pipeline with no supervisor ---\nstored: ['d1', 'd2'] | messages left on unprocessed topics: {'documents.large': 1, 'store.done': 2}"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: Correlation and causation identifiers",
    "headingKn": "ಪ್ರಯೋಗ 3: Correlation and causation identifiers",
    "bodyEn": "What it ran: Correlation and causation identifiers. What the lab concluded: all four messages of the first document share the correlation id corr-0 and each points at the message that caused it, so the full path of one document can be rebuilt from the log; the ids are assigned by the code in the lab and a real system must make sure that every hop copies them forward.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Correlation and causation identifiers. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): all four messages of the first document share the correlation id corr-0 and each points at the message that caused it, so the full path of one document can be rebuilt from the log; the ids are assigned by the code in the lab and a real system must make sure that every hop copies them forward."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely running: correlation and causation identifiers ---\nm1 documents.invoice\nm4 extract.done\nm6 validate.done\nm7 store.done\ncausation links (message <- caused by): [('m1', ''), ('m4', 'm1'), ('m6', 'm4'), ('m7', 'm6')]"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 4: At-least-once delivery without and with idempotency",
    "headingKn": "ಪ್ರಯೋಗ 4: At-least-once delivery without and with idempotency",
    "bodyEn": "What it ran: At-least-once delivery without and with idempotency. What the lab concluded: a worker that charges and crashes before acknowledging gets the same message again, so with no dedupe the effect is applied twice, and recording the id only after the handler succeeds still applies it twice because the crash happens before that line, while recording the id together with the effect applies it once; recording it before the effect could instead lose the effect if the crash came earlier, which is why a real system stores the key and the effect in one atomic step.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: At-least-once delivery without and with idempotency. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a worker that charges and crashes before acknowledging gets the same message again, so with no dedupe the effect is applied twice, and recording the id only after the handler succeeds still applies it twice because the crash happens before that line, while recording the id together with the effect applies it once; recording it before the effect could instead lose the effect if the crash came earlier, which is why a real system stores the key and the effect in one atomic step."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 4. Genuinely running: at-least-once delivery without and with idempotency ---\ndedupe recorded none       : effects=['charged o1', 'charged o1']\ndedupe recorded after      : effects=['charged o1', 'charged o1']\ndedupe recorded with_effect: effects=['charged o1']"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 5: A dead-letter queue",
    "headingKn": "ಪ್ರಯೋಗ 5: A dead-letter queue",
    "bodyEn": "What it ran: A dead-letter queue. What the lab concluded: a message that fails on every delivery is moved aside after three deliveries instead of being redelivered forever, and the pay queue ends empty; a dead-letter queue stores the failure for a person or a repair job to look at and needs an alert, otherwise it is a quiet place to lose work.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A dead-letter queue. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a message that fails on every delivery is moved aside after three deliveries instead of being redelivered forever, and the pay queue ends empty; a dead-letter queue stores the failure for a person or a repair job to look at and needs an alert, otherwise it is a quiet place to lose work."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 5. Genuinely running: a dead-letter queue ---\ndead letters: [('m13', 3)] | pay queue length: 0"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 6: Validating messages before trusting them",
    "headingKn": "ಪ್ರಯೋಗ 6: Validating messages before trusting them",
    "bodyEn": "What it ran: Validating messages before trusting them. What the lab concluded: a message missing its payload and correlation id and addressed to a topic that is not on the allow-list is rejected with all three reasons, while the well-formed one passes; this checks shape and a topic list only, and says nothing about whether the sender is who it claims to be, which needs authentication outside this lab.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Validating messages before trusting them. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a message missing its payload and correlation id and addressed to a topic that is not on the allow-list is rejected with all three reasons, while the well-formed one passes; this checks shape and a topic list only, and says nothing about whether the sender is who it claims to be, which needs authentication outside this lab."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 6. Genuinely running: validating messages before trusting them ---\ngood: []\nbad : ['missing payload', 'missing correlation_id', 'topic admin.shutdown not permitted']"
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
    "headingEn": "Genuinely Found: A Silent Topic",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಮೌನ topic",
    "bodyEn": "Section 2: documents d1 and d2 were stored through extract, validate and store, while the large untyped document stayed on documents.large with 1 message because nothing subscribes to it. Section 3: the chain for corr-0 was m1, m4, m6, m7 with causation m1 to none, m4 to m1, m6 to m4 and m7 to m6.",
    "bodyKn": "ವಿಭಾಗ 2: ದಾಖಲೆಗಳು d1 ಮತ್ತು d2 extract, validate ಮತ್ತು store ಮೂಲಕ ಸಂಗ್ರಹಿಸಲ್ಪಟ್ಟವು, ದೊಡ್ಡ ಟೈಪ್ ಇಲ್ಲದ ದಾಖಲೆ documents.large ನಲ್ಲಿ 1 ಸಂದೇಶದೊಂದಿಗೆ ಉಳಿಯಿತು ಏಕೆಂದರೆ ಅದಕ್ಕೆ ಯಾರೂ ಚಂದಾದಾರರಲ್ಲ. ವಿಭಾಗ 3: corr-0 ಸರಪಳಿ m1, m4, m6, m7 ಆಗಿತ್ತು, causation m1 ಗೆ ಯಾವುದೂ ಇಲ್ಲ, m4 ಗೆ m1, m6 ಗೆ m4 ಮತ್ತು m7 ಗೆ m6."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: The Dedupe Record Must Be Atomic",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Dedupe ದಾಖಲೆ ಪರಮಾಣುವಾಗಿರಬೇಕು",
    "bodyEn": "Section 4: after a crash that came after the effect, no dedupe gave two effects, dedupe recorded after the handler also gave two, and dedupe recorded with the effect gave one.",
    "bodyKn": "ವಿಭಾಗ 4: ಪರಿಣಾಮದ ನಂತರ ಬಂದ ಕ್ರ್ಯಾಶ್ ನಂತರ dedupe ಇಲ್ಲದೆ ಎರಡು ಪರಿಣಾಮಗಳು, handler ನಂತರ ದಾಖಲಿಸಿದ dedupe ಸಹ ಎರಡು, ಮತ್ತು ಪರಿಣಾಮದೊಂದಿಗೆ ದಾಖಲಿಸಿದ dedupe ಒಂದು ನೀಡಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Poison and Bad Shapes",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Poison ಮತ್ತು ಕೆಟ್ಟ ಆಕಾರಗಳು",
    "bodyEn": "Section 5: a message that failed every time was parked after 3 deliveries and the pay queue ended at length 0. Section 6: the bad message produced missing payload, missing correlation_id and topic admin.shutdown not permitted, and the good one produced no errors.",
    "bodyKn": "ವಿಭಾಗ 5: ಪ್ರತಿ ಬಾರಿ ವಿಫಲವಾದ ಸಂದೇಶ 3 ವಿತರಣೆಗಳ ನಂತರ ಪಕ್ಕಕ್ಕಿಡಲ್ಪಟ್ಟು pay ಸರದಿ ಉದ್ದ 0 ರಲ್ಲಿ ಮುಗಿಯಿತು. ವಿಭಾಗ 6: ಕೆಟ್ಟ ಸಂದೇಶ missing payload, missing correlation_id ಮತ್ತು topic admin.shutdown not permitted ನೀಡಿತು, ಮತ್ತು ಒಳ್ಳೆಯದು ದೋಷ ನೀಡಲಿಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A message bus removes the supervisor and with it the one place that notices a stuck or silent path, so identifiers, queue depth alerts, dead letters and atomic dedupe have to carry the supervision.",
    "bodyKn": "ಸಂದೇಶ ಬಸ್ supervisor ಅನ್ನು ತೆಗೆದುಹಾಕುತ್ತದೆ ಮತ್ತು ಅದರೊಂದಿಗೆ ಸಿಲುಕಿದ ಅಥವಾ ಮೌನ ಮಾರ್ಗವನ್ನು ಗಮನಿಸುವ ಒಂದೇ ಸ್ಥಳವನ್ನೂ, ಆದ್ದರಿಂದ ಗುರುತುಗಳು, ಸರದಿ ಆಳ ಎಚ್ಚರಿಕೆಗಳು, ಡೆಡ್ ಲೆಟರ್‌ಗಳು ಮತ್ತು ಪರಮಾಣು dedupe ಮೇಲ್ವಿಚಾರಣೆ ಹೊರಬೇಕು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"recording the message id after success makes a consumer idempotent.\" The crash came before that line and the effect still ran twice.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಯಶಸ್ಸಿನ ನಂತರ ಸಂದೇಶ id ದಾಖಲಿಸಿದರೆ ಗ್ರಾಹಕ idempotent.\" ಕ್ರ್ಯಾಶ್ ಆ ಸಾಲಿಗೆ ಮೊದಲು ಬಂದು ಪರಿಣಾಮ ಇನ್ನೂ ಎರಡು ಬಾರಿ ನಡೆಯಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Topic: a named channel on the bus. Correlation id: shared by all messages of one job. Causation id: the message that caused this one. At-least-once: a message may be delivered more than once. Dead-letter queue: where messages that keep failing are parked.",
    "bodyKn": "Topic: ಬಸ್‌ನ ಹೆಸರಿನ ಚಾನೆಲ್. Correlation id: ಒಂದು ಕೆಲಸದ ಎಲ್ಲಾ ಸಂದೇಶಗಳು ಹಂಚಿಕೊಳ್ಳುವುದು. Causation id: ಇದನ್ನು ಉಂಟುಮಾಡಿದ ಸಂದೇಶ. At-least-once: ಸಂದೇಶ ಒಂದಕ್ಕಿಂತ ಹೆಚ್ಚು ಬಾರಿ ವಿತರಿಸಲ್ಪಡಬಹುದು. ಡೆಡ್-ಲೆಟರ್ ಸರದಿ: ವಿಫಲವಾಗುತ್ತಲೇ ಇರುವ ಸಂದೇಶಗಳನ್ನು ಪಕ್ಕಕ್ಕಿಡುವ ಸ್ಥಳ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) A document with no subscriber sat unread. 2) The ids rebuilt the path m1, m4, m6, m7. 3) Dedupe after the handler still gave two effects. 4) A failing message was parked after 3 deliveries. 5) A bad message produced three validation errors.",
    "bodyKn": "1) ಚಂದಾದಾರರಿಲ್ಲದ ದಾಖಲೆ ಓದಲ್ಪಡದೆ ಕುಳಿತಿತು. 2) ids ಮಾರ್ಗ m1, m4, m6, m7 ಮರುನಿರ್ಮಿಸಿದವು. 3) handler ನಂತರದ dedupe ಇನ್ನೂ ಎರಡು ಪರಿಣಾಮ ನೀಡಿತು. 4) ವಿಫಲ ಸಂದೇಶ 3 ವಿತರಣೆಗಳ ನಂತರ ಪಕ್ಕಕ್ಕಿಡಲ್ಪಟ್ಟಿತು. 5) ಕೆಟ್ಟ ಸಂದೇಶ ಮೂರು ಮಾನ್ಯತೆ ದೋಷ ನೀಡಿತು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "Which topic held the unread large document?",
      "qKn": "ಓದದ ದೊಡ್ಡ ದಾಖಲೆಯನ್ನು ಯಾವ topic ಹೊಂದಿತ್ತು?",
      "opts": [
       "documents.large",
       "documents.unknown",
       "store.done",
       "pay"
      ],
      "optsKn": [
       "documents.large",
       "documents.unknown",
       "store.done",
       "pay"
      ],
      "correct": 0
     },
     {
      "q": "How many effects did dedupe recorded with the effect give?",
      "qKn": "ಪರಿಣಾಮದೊಂದಿಗೆ ದಾಖಲಿಸಿದ dedupe ಎಷ್ಟು ಪರಿಣಾಮ ನೀಡಿತು?",
      "opts": [
       "1",
       "2",
       "0",
       "3"
      ],
      "optsKn": [
       "1",
       "2",
       "0",
       "3"
      ],
      "correct": 0
     },
     {
      "q": "After how many deliveries was the failing message parked?",
      "qKn": "ವಿಫಲ ಸಂದೇಶ ಎಷ್ಟು ವಿತರಣೆಗಳ ನಂತರ ಪಕ್ಕಕ್ಕಿಡಲ್ಪಟ್ಟಿತು?",
      "opts": [
       "3",
       "1",
       "5",
       "2"
      ],
      "optsKn": [
       "3",
       "1",
       "5",
       "2"
      ],
      "correct": 0
     },
     {
      "q": "Which message caused m6 in the chain?",
      "qKn": "ಸರಪಳಿಯಲ್ಲಿ m6 ಅನ್ನು ಯಾವ ಸಂದೇಶ ಉಂಟುಮಾಡಿತು?",
      "opts": [
       "m4",
       "m1",
       "m7",
       "none"
      ],
      "optsKn": [
       "m4",
       "m1",
       "m7",
       "ಯಾವುದೂ ಇಲ್ಲ"
      ],
      "correct": 0
     },
     {
      "q": "How many errors did the bad message produce?",
      "qKn": "ಕೆಟ್ಟ ಸಂದೇಶ ಎಷ್ಟು ದೋಷಗಳನ್ನು ನೀಡಿತು?",
      "opts": [
       "3",
       "1",
       "0",
       "2"
      ],
      "optsKn": [
       "3",
       "1",
       "0",
       "2"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
