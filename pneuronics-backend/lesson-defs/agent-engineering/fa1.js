module.exports = {
 "phaseId": "6a369d6466020ed05b3215d1",
 "moduleId": "6a369d6566020ed05b3215da",
 "order": 0,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "FIPA-ACL Heritage and Speech Acts (Part 1 of 3) — Speech Acts and the Envelope",
 "titleKn": "FIPA-ACL ಪರಂಪರೆ ಮತ್ತು Speech Acts (ಭಾಗ 1 / 3) — Speech Acts ಮತ್ತು ಲಕೋಟೆ",
 "desc": "Build an ACL-inspired message and test how intent, envelope and meaning behave.",
 "descKn": "ACL-ಪ್ರೇರಿತ ಸಂದೇಶ ನಿರ್ಮಿಸಿ ಮತ್ತು ಉದ್ದೇಶ, ಲಕೋಟೆ ಹಾಗೂ ಅರ್ಥ ಹೇಗೆ ವರ್ತಿಸುತ್ತವೆ ಎಂದು ಪರೀಕ್ಷಿಸಿ.",
 "objectives": [
  "Separate intent from content.",
  "Read the performative first.",
  "Check a catalogue.",
  "See why a sender proves nothing.",
  "Run a first Contract Net."
 ],
 "objectivesKn": [
  "ಉದ್ದೇಶವನ್ನು ವಿಷಯದಿಂದ ಬೇರ್ಪಡಿಸಿ.",
  "ಮೊದಲು performative ಓದಿ.",
  "ಪಟ್ಟಿ ಪರಿಶೀಲಿಸಿ.",
  "ಕಳುಹಿಸುವವ ಏಕೆ ಏನನ್ನೂ ಸಾಬೀತುಪಡಿಸುವುದಿಲ್ಲ ನೋಡಿ.",
  "ಮೊದಲ Contract Net ಓಡಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "FIPA-ACL Heritage and Speech Acts (Part 1 of 3)",
    "textKn": "FIPA-ACL ಪರಂಪರೆ ಮತ್ತು Speech Acts (ಭಾಗ 1 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 1 of 3: an ACL-inspired message, the same content under query-if and request, the performative catalogue against the Part 1 validator, a forged sender, a first Contract Net and one word under three ontologies. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind FIPA-ACL communication (performatives, the message envelope, ontologies, a translator for simplified MCP and A2A shapes, Contract Net, protocol state machines and an audit log), not the real software, and messages are plain objects inside one process, nothing is sent over a network, the modern message shapes are simplified inventions and no SL0 grammar is parsed, so no real LLM behaviour is measured. The original code/main.py was not supplied, so the labs are our own implementation. JADE, JACK and BDI material in the lesson is conceptual and was not run. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 1ನೆಯದು: ACL-ಪ್ರೇರಿತ ಸಂದೇಶ, query-if ಮತ್ತು request ಅಡಿಯಲ್ಲಿ ಒಂದೇ ವಿಷಯ, Part 1 validator ಗೆ ವಿರುದ್ಧ performative ಪಟ್ಟಿ, ನಕಲಿ ಕಳುಹಿಸುವವ, ಮೊದಲ Contract Net ಮತ್ತು ಮೂರು ontology ಗಳಲ್ಲಿ ಒಂದೇ ಪದ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು FIPA-ACL ಸಂವಹನ (performative ಗಳು, ಸಂದೇಶ ಲಕೋಟೆ, ontology ಗಳು, ಸರಳೀಕೃತ MCP ಮತ್ತು A2A ರೂಪಗಳ ಅನುವಾದಕ, Contract Net, ಪ್ರೋಟೋಕಾಲ್ ಸ್ಥಿತಿ ಯಂತ್ರಗಳು ಮತ್ತು audit ದಾಖಲೆ) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಸಂದೇಶಗಳು ಒಂದೇ ಪ್ರಕ್ರಿಯೆಯೊಳಗಿನ ಸಾದಾ ವಸ್ತುಗಳು, ಜಾಲದ ಮೂಲಕ ಏನೂ ಕಳುಹಿಸಲ್ಪಡುವುದಿಲ್ಲ, ಆಧುನಿಕ ಸಂದೇಶ ರೂಪಗಳು ಸರಳೀಕೃತ ಕಲ್ಪನೆಗಳು ಮತ್ತು ಯಾವುದೇ SL0 ವ್ಯಾಕರಣ ಪಾರ್ಸ್ ಆಗುವುದಿಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ code/main.py ನೀಡಲಾಗಿಲ್ಲ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ನಮ್ಮದೇ ಅನುಷ್ಠಾನ. lesson ನಲ್ಲಿನ JADE, JACK ಮತ್ತು BDI ವಿಷಯ ಪರಿಕಲ್ಪನಾತ್ಮಕ ಮತ್ತು ಓಡಿಸಲಾಗಿಲ್ಲ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Communication Is More Than Text",
    "textKn": "ಸಂವಹನ ಎಂದರೆ ಕೇವಲ ಪಠ್ಯವಲ್ಲ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Speech Acts, Performatives and a First Contract Net",
    "headingKn": "Speech Acts, Performative ಗಳು ಮತ್ತು ಮೊದಲ Contract Net",
    "bodyEn": "Speech-act theory says that a sentence can do something, such as ask, promise or request, and FIPA-ACL turned that idea into a message with a named intention, called a performative, kept apart from its content. This part runs a small ACL-inspired message object, shows that the same content means different things under query-if and request, checks the lesson list of performatives against the shorter set its own example validator used, shows that a sender field proves nothing about identity, runs a first call for proposals with three bids, and counts customers under three different definitions to show why a shared vocabulary matters.",
    "bodyKn": "Speech-act ಸಿದ್ಧಾಂತವು ಒಂದು ವಾಕ್ಯ ಏನನ್ನಾದರೂ ಮಾಡಬಲ್ಲದು, ಉದಾಹರಣೆಗೆ ಕೇಳುವುದು, ಭರವಸೆ ನೀಡುವುದು ಅಥವಾ ವಿನಂತಿಸುವುದು ಎನ್ನುತ್ತದೆ, ಮತ್ತು FIPA-ACL ಆ ಕಲ್ಪನೆಯನ್ನು ವಿಷಯದಿಂದ ಬೇರ್ಪಟ್ಟ, performative ಎಂದು ಕರೆಯಲ್ಪಡುವ ಹೆಸರಿಸಿದ ಉದ್ದೇಶವಿರುವ ಸಂದೇಶವಾಗಿ ಪರಿವರ್ತಿಸಿತು. ಈ ಭಾಗವು ಚಿಕ್ಕ ACL-ಪ್ರೇರಿತ ಸಂದೇಶ ವಸ್ತು ಓಡಿಸುತ್ತದೆ, ಒಂದೇ ವಿಷಯ query-if ಮತ್ತು request ಅಡಿಯಲ್ಲಿ ಬೇರೆ ಅರ್ಥ ಹೊಂದಿದೆ ಎಂದು ತೋರಿಸುತ್ತದೆ, lesson ನ performative ಪಟ್ಟಿಯನ್ನು ಅದರ ಸ್ವಂತ ಉದಾಹರಣೆ validator ಬಳಸಿದ ಚಿಕ್ಕ ಸೆಟ್‌ಗೆ ಹೋಲಿಸುತ್ತದೆ, ಕಳುಹಿಸುವವರ ಕ್ಷೇತ್ರ ಗುರುತಿನ ಬಗ್ಗೆ ಏನನ್ನೂ ಸಾಬೀತುಪಡಿಸುವುದಿಲ್ಲ ಎಂದು ತೋರಿಸುತ್ತದೆ, ಮೂರು ಬಿಡ್‌ಗಳ ಮೊದಲ ಪ್ರಸ್ತಾವನೆ ಕರೆ ಓಡಿಸುತ್ತದೆ ಮತ್ತು ಹಂಚಿಕೆಯ ಶಬ್ದಕೋಶ ಏಕೆ ಮುಖ್ಯ ಎಂದು ತೋರಿಸಲು ಮೂರು ಬೇರೆ ವ್ಯಾಖ್ಯಾನಗಳ ಅಡಿಯಲ್ಲಿ ಗ್ರಾಹಕರನ್ನು ಎಣಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Intent, Envelope, Content",
    "headingKn": "ಉದ್ದೇಶ, ಲಕೋಟೆ, ವಿಷಯ",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">intent, envelope and content are three separate layers</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">performative</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">what kind of act</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">envelope</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">who, where, which chat</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">content</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">the subject matter</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">meaning</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">needs a shared ontology</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">intent, envelope and content are three separate layers</text></svg>",
    "captionEn": "A message says what kind of act it is, who is talking and about what.",
    "captionKn": "ಸಂದೇಶವು ಅದು ಯಾವ ರೀತಿಯ ಕ್ರಿಯೆ, ಯಾರು ಮಾತನಾಡುತ್ತಿದ್ದಾರೆ ಮತ್ತು ಯಾವುದರ ಬಗ್ಗೆ ಎಂದು ಹೇಳುತ್ತದೆ."
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
      "message",
      "nine fields and a JSON round trip"
     ],
     [
      "query-if and request",
      "identical content, different effect on a booking store"
     ],
     [
      "catalogue",
      "22 names in the lesson list against 16 in the validator"
     ],
     [
      "sender",
      "a forged supervisor message that passes validation"
     ],
     [
      "Contract Net",
      "cost rule against speed rule on three bids"
     ],
     [
      "ontology",
      "three customer counts from four records"
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
    "filename": "fa_1.py",
    "headingEn": "Catalogue and message",
    "headingKn": "ಪಟ್ಟಿ ಮತ್ತು ಸಂದೇಶ",
    "descEn": "FIPA_CATALOGUE lists the 22 names, PART1_VALIDATOR_SET is the smaller set the example used, and ACLMessage keeps intent, parties, content and correlation fields apart.",
    "descKn": "FIPA_CATALOGUE 22 ಹೆಸರುಗಳನ್ನು ಪಟ್ಟಿ ಮಾಡುತ್ತದೆ, PART1_VALIDATOR_SET ಉದಾಹರಣೆ ಬಳಸಿದ ಚಿಕ್ಕ ಸೆಟ್, ಮತ್ತು ACLMessage ಉದ್ದೇಶ, ಪಕ್ಷಗಳು, ವಿಷಯ ಮತ್ತು ಸಂಬಂಧ ಕ್ಷೇತ್ರಗಳನ್ನು ಬೇರೆಯಾಗಿ ಇಡುತ್ತದೆ.",
    "code": "FIPA_CATALOGUE = [\"accept-proposal\", \"agree\", \"cancel\", \"cfp\", \"confirm\", \"disconfirm\", \"failure\", \"inform\", \"inform-if\", \"inform-ref\",\n                  \"not-understood\", \"propagate\", \"propose\", \"proxy\", \"query-if\", \"query-ref\", \"refuse\", \"reject-proposal\", \"request\",\n                  \"request-when\", \"request-whenever\", \"subscribe\"]\n# The shorter set that the Part 1 validation example actually used.\nPART1_VALIDATOR_SET = {\"inform\", \"request\", \"query-if\", \"query-ref\", \"propose\", \"accept-proposal\", \"reject-proposal\", \"agree\", \"refuse\",\n                       \"confirm\", \"disconfirm\", \"not-understood\", \"cfp\", \"subscribe\", \"cancel\", \"failure\"}\n\n\n@dataclass\nclass ACLMessage:\n    performative: str\n    sender: str\n    receiver: str\n    content: str\n    language: str = \"SL0\"\n    ontology: str = \"general\"\n    protocol: str = \"fipa-request\"\n    conversation_id: str = \"\"\n    reply_with: str = \"\"\n\n\ndef validate(m):\n    if m.performative not in PART1_VALIDATOR_SET:\n        raise ValueError(\"Unsupported performative\")\n    return True"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "fa_1.py",
    "headingEn": "A store that reads the performative",
    "headingKn": "performative ಓದುವ ಸಂಗ್ರಹ",
    "descEn": "Schedule.handle answers a query-if without changing anything and books a slot only for a request.",
    "descKn": "Schedule.handle query-if ಗೆ ಏನನ್ನೂ ಬದಲಿಸದೆ ಉತ್ತರಿಸುತ್ತದೆ ಮತ್ತು request ಗೆ ಮಾತ್ರ ಸ್ಲಾಟ್ ಬುಕ್ ಮಾಡುತ್ತದೆ.",
    "code": "class Schedule:\n    \"\"\"Holds the one fact a query must not change: the booked slots.\"\"\"\n    def __init__(self):\n        self.booked = set()\n\n    def handle(self, m):\n        if m.performative == \"query-if\":\n            return \"inform\", (\"available\" if m.content not in self.booked else \"not available\")\n        if m.performative == \"request\":\n            self.booked.add(m.content)\n            return \"agree\", \"booked \" + m.content\n        return \"not-understood\", m.performative"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "fa_1.py",
    "headingEn": "The experiments",
    "headingKn": "ಪ್ರಯೋಗಗಳು",
    "descEn": "main() runs the six experiments in order and prints the real result of each.",
    "descKn": "main() ಆರು ಪ್ರಯೋಗಗಳನ್ನು ಕ್ರಮವಾಗಿ ಓಡಿಸಿ ಪ್ರತಿಯೊಂದರ ನಿಜ ಫಲಿತಾಂಶ ಮುದ್ರಿಸುತ್ತದೆ.",
    "code": "def main():\n    section(\"1. Genuinely running: an ACL-inspired message as JSON\")\n    m = ACLMessage(\"request\", \"manager-agent\", \"worker-agent\", \"generate-report\", ontology=\"reporting\", conversation_id=\"conv-101\", reply_with=\"msg-001\")\n    text = json.dumps(asdict(m), sort_keys=True)\n    back = ACLMessage(**json.loads(text))\n    print(\"fields:\", len(asdict(m)), \"| round trip equal:\", back == m)\n    print(\"the message keeps intent, parties, content and the two correlation fields as separate fields and survives a JSON round trip; the declared language SL0 is only a label here, because the plain string generate-report was never checked against any SL0 grammar.\")\n\n    section(\"2. Genuinely running: the same content under different performatives\")\n    s = Schedule()\n    q = ACLMessage(\"query-if\", \"appointment-agent\", \"schedule-agent\", \"doctor-17 monday\")\n    r = ACLMessage(\"request\", \"appointment-agent\", \"schedule-agent\", \"doctor-17 monday\")\n    print(\"query-if ->\", s.handle(q), \"| booked after query:\", sorted(s.booked))\n    print(\"request ->\", s.handle(r), \"| booked after request:\", sorted(s.booked))\n    print(\"query-if after booking ->\", s.handle(q))\n    print(\"identical content changed nothing under query-if and created a booking under request, so the receiver has to read the performative together with the content; the agree reply promises the action and the slot is only recorded as booked in this toy store, which is not proof of a real booking.\")\n\n    section(\"3. Genuinely checking: the catalogue against the Part 1 validator\")\n    missing = [p for p in FIPA_CATALOGUE if p not in PART1_VALIDATOR_SET]\n    print(\"catalogue size:\", len(FIPA_CATALOGUE), \"| validator set size:\", len(PART1_VALIDATOR_SET))\n    print(\"missing from the validator:\", missing)\n    try:\n        validate(ACLMessage(\"inform-if\", \"a\", \"b\", \"x\"))\n        verdict = \"accepted\"\n    except ValueError as e:\n        verdict = \"rejected: \" + str(e)\n    print(\"inform-if through the Part 1 validator:\", verdict)\n    print(\"the lesson text speaks of twenty performatives while its own list has 22 names, and the simplified validator accepts only 16, so it rejects six real performatives; a strict implementation has to use the full official catalogue.\")\n\n    section(\"4. Genuinely running: a sender field is a claim and not an identity\")\n    forged = ACLMessage(\"request\", \"supervisor-agent\", \"worker-agent\", \"generate-report\", conversation_id=\"x\")\n    print(\"structurally valid:\", validate(forged), \"| claimed sender:\", forged.sender)\n    print(\"nothing in the message proves that the sender is the supervisor, since the field is plain text that any process can write, so structural validation says nothing about authentication or authorisation, which need a trusted transport and a permission check.\")\n\n    section(\"5. Genuinely running: a first Contract Net\")\n    proposals = [(\"agent-a\", 9.0, 8), (\"agent-b\", 7.0, 6), (\"agent-c\", 4.0, 12)]\n    by_cost = min(proposals, key=lambda p: p[1])\n    by_time = min(proposals, key=lambda p: p[2])\n    print(\"lowest cost:\", by_cost[0], \"| shortest duration:\", by_time[0])\n    decisions = {n: (\"accept-proposal\" if n == by_cost[0] else \"reject-proposal\") for n, _, _ in proposals}\n    print(\"decisions:\", decisions)\n    print(\"the same three proposals give agent-c under a cost rule and agent-b under a speed rule, so the protocol only fixes the cfp, propose, accept and reject steps while the selection policy belongs to the application; an award is not a completed task.\")\n\n    section(\"6. Genuinely running: the same word under three ontologies\")\n    users = [{\"id\": 1, \"registered\": True, \"purchases\": 2, \"billable\": True}, {\"id\": 2, \"registered\": True, \"purchases\": 0, \"billable\": False},\n             {\"id\": 3, \"registered\": True, \"purchases\": 1, \"billable\": False}, {\"id\": 4, \"registered\": False, \"purchases\": 1, \"billable\": True}]\n    counts = {\"sales (any purchase)\": sum(u[\"purchases\"] > 0 for u in users), \"marketing (registered)\": sum(u[\"registered\"] for u in users),\n              \"finance (billable)\": sum(u[\"billable\"] for u in users)}\n    print(\"customer counts:\", counts)\n    print(\"the same four records give 3, 3 and 2 customers depending on whose definition is used, and the first two agree only by coincidence, so a schema that says customer_count is an integer cannot settle what the number means; that is the problem a shared ontology or a versioned semantic contract has to solve.\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: an ACL-inspired message as JSON ---\nfields: 9 | round trip equal: True\nthe message keeps intent, parties, content and the two correlation fields as separate fields and survives a JSON round trip; the declared language SL0 is only a label here, because the plain string generate-report was never checked against any SL0 grammar.\n\n--- 2. Genuinely running: the same content under different performatives ---\nquery-if -> ('inform', 'available') | booked after query: []\nrequest -> ('agree', 'booked doctor-17 monday') | booked after request: ['doctor-17 monday']\nquery-if after booking -> ('inform', 'not available')\nidentical content changed nothing under query-if and created a booking under request, so the receiver has to read the performative together with the content; the agree reply promises the action and the slot is only recorded as booked in this toy store, which is not proof of a real booking.\n\n--- 3. Genuinely checking: the catalogue against the Part 1 validator ---\ncatalogue size: 22 | validator set size: 16\nmissing from the validator: ['inform-if', 'inform-ref', 'propagate', 'proxy', 'request-when', 'request-whenever']\ninform-if through the Part 1 validator: rejected: Unsupported performative\nthe lesson text speaks of twenty performatives while its own list has 22 names, and the simplified validator accepts only 16, so it rejects six real performatives; a strict implementation has to use the full official catalogue.\n\n--- 4. Genuinely running: a sender field is a claim and not an identity ---\nstructurally valid: True | claimed sender: supervisor-agent\nnothing in the message proves that the sender is the supervisor, since the field is plain text that any process can write, so structural validation says nothing about authentication or authorisation, which need a trusted transport and a permission check.\n\n--- 5. Genuinely running: a first Contract Net ---\nlowest cost: agent-c | shortest duration: agent-b\ndecisions: {'agent-a': 'reject-proposal', 'agent-b': 'reject-proposal', 'agent-c': 'accept-proposal'}\nthe same three proposals give agent-c under a cost rule and agent-b under a speed rule, so the protocol only fixes the cfp, propose, accept and reject steps while the selection policy belongs to the application; an award is not a completed task.\n\n--- 6. Genuinely running: the same word under three ontologies ---\ncustomer counts: {'sales (any purchase)': 3, 'marketing (registered)': 3, 'finance (billable)': 2}\nthe same four records give 3, 3 and 2 customers depending on whose definition is used, and the first two agree only by coincidence, so a schema that says customer_count is an integer cannot settle what the number means; that is the problem a shared ontology or a versioned semantic contract has to solve."
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
    "headingEn": "Experiment 1: An ACL-inspired message as JSON",
    "headingKn": "ಪ್ರಯೋಗ 1: An ACL-inspired message as JSON",
    "bodyEn": "What it ran: An ACL-inspired message as JSON. What the lab concluded: the message keeps intent, parties, content and the two correlation fields as separate fields and survives a JSON round trip; the declared language SL0 is only a label here, because the plain string generate-report was never checked against any SL0 grammar.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: An ACL-inspired message as JSON. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the message keeps intent, parties, content and the two correlation fields as separate fields and survives a JSON round trip; the declared language SL0 is only a label here, because the plain string generate-report was never checked against any SL0 grammar."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. Genuinely running: an ACL-inspired message as JSON ---\nfields: 9 | round trip equal: True"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: The same content under different performatives",
    "headingKn": "ಪ್ರಯೋಗ 2: The same content under different performatives",
    "bodyEn": "What it ran: The same content under different performatives. What the lab concluded: identical content changed nothing under query-if and created a booking under request, so the receiver has to read the performative together with the content; the agree reply promises the action and the slot is only recorded as booked in this toy store, which is not proof of a real booking.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: The same content under different performatives. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): identical content changed nothing under query-if and created a booking under request, so the receiver has to read the performative together with the content; the agree reply promises the action and the slot is only recorded as booked in this toy store, which is not proof of a real booking."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely running: the same content under different performatives ---\nquery-if -> ('inform', 'available') | booked after query: []\nrequest -> ('agree', 'booked doctor-17 monday') | booked after request: ['doctor-17 monday']\nquery-if after booking -> ('inform', 'not available')"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: The catalogue against the Part 1 validator",
    "headingKn": "ಪ್ರಯೋಗ 3: The catalogue against the Part 1 validator",
    "bodyEn": "What it ran: The catalogue against the Part 1 validator. What the lab concluded: the lesson text speaks of twenty performatives while its own list has 22 names, and the simplified validator accepts only 16, so it rejects six real performatives; a strict implementation has to use the full official catalogue.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: The catalogue against the Part 1 validator. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the lesson text speaks of twenty performatives while its own list has 22 names, and the simplified validator accepts only 16, so it rejects six real performatives; a strict implementation has to use the full official catalogue."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely checking: the catalogue against the Part 1 validator ---\ncatalogue size: 22 | validator set size: 16\nmissing from the validator: ['inform-if', 'inform-ref', 'propagate', 'proxy', 'request-when', 'request-whenever']\ninform-if through the Part 1 validator: rejected: Unsupported performative"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 4: A sender field is a claim and not an identity",
    "headingKn": "ಪ್ರಯೋಗ 4: A sender field is a claim and not an identity",
    "bodyEn": "What it ran: A sender field is a claim and not an identity. What the lab concluded: nothing in the message proves that the sender is the supervisor, since the field is plain text that any process can write, so structural validation says nothing about authentication or authorisation, which need a trusted transport and a permission check.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A sender field is a claim and not an identity. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): nothing in the message proves that the sender is the supervisor, since the field is plain text that any process can write, so structural validation says nothing about authentication or authorisation, which need a trusted transport and a permission check."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 4. Genuinely running: a sender field is a claim and not an identity ---\nstructurally valid: True | claimed sender: supervisor-agent"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 5: A first Contract Net",
    "headingKn": "ಪ್ರಯೋಗ 5: A first Contract Net",
    "bodyEn": "What it ran: A first Contract Net. What the lab concluded: the same three proposals give agent-c under a cost rule and agent-b under a speed rule, so the protocol only fixes the cfp, propose, accept and reject steps while the selection policy belongs to the application; an award is not a completed task.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A first Contract Net. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the same three proposals give agent-c under a cost rule and agent-b under a speed rule, so the protocol only fixes the cfp, propose, accept and reject steps while the selection policy belongs to the application; an award is not a completed task."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 5. Genuinely running: a first Contract Net ---\nlowest cost: agent-c | shortest duration: agent-b\ndecisions: {'agent-a': 'reject-proposal', 'agent-b': 'reject-proposal', 'agent-c': 'accept-proposal'}"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 6: The same word under three ontologies",
    "headingKn": "ಪ್ರಯೋಗ 6: The same word under three ontologies",
    "bodyEn": "What it ran: The same word under three ontologies. What the lab concluded: the same four records give 3, 3 and 2 customers depending on whose definition is used, and the first two agree only by coincidence, so a schema that says customer_count is an integer cannot settle what the number means; that is the problem a shared ontology or a versioned semantic contract has to solve.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: The same word under three ontologies. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the same four records give 3, 3 and 2 customers depending on whose definition is used, and the first two agree only by coincidence, so a schema that says customer_count is an integer cannot settle what the number means; that is the problem a shared ontology or a versioned semantic contract has to solve."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 6. Genuinely running: the same word under three ontologies ---\ncustomer counts: {'sales (any purchase)': 3, 'marketing (registered)': 3, 'finance (billable)': 2}"
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
    "headingEn": "Genuinely Found: Same Content, Different Acts",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಒಂದೇ ವಿಷಯ, ಬೇರೆ ಕ್ರಿಯೆಗಳು",
    "bodyEn": "Section 1: the message had 9 fields and equalled itself after a JSON round trip. Section 2: query-if returned inform available and left the booked list empty, request returned agree and booked doctor-17 monday, and a second query-if then returned not available.",
    "bodyKn": "ವಿಭಾಗ 1: ಸಂದೇಶ 9 ಕ್ಷೇತ್ರಗಳನ್ನು ಹೊಂದಿತ್ತು ಮತ್ತು JSON ಸುತ್ತಿನ ನಂತರ ತನ್ನೊಂದಿಗೆ ಸಮನಾಯಿತು. ವಿಭಾಗ 2: query-if inform available ನೀಡಿ ಬುಕ್ ಪಟ್ಟಿ ಖಾಲಿ ಬಿಟ್ಟಿತು, request agree ನೀಡಿ doctor-17 monday ಬುಕ್ ಮಾಡಿತು, ಮತ್ತು ಎರಡನೇ query-if ನಂತರ not available ನೀಡಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Catalogue, Identity and Meaning",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಪಟ್ಟಿ, ಗುರುತು ಮತ್ತು ಅರ್ಥ",
    "bodyEn": "Section 3: the catalogue has 22 names and the validator set 16, the six missing are inform-if, inform-ref, propagate, proxy, request-when and request-whenever, and inform-if was rejected. Section 4: a forged supervisor request was structurally valid. Section 5: lowest cost chose agent-c and shortest duration chose agent-b. Section 6: the customer counts were 3, 3 and 2.",
    "bodyKn": "ವಿಭಾಗ 3: ಪಟ್ಟಿಯಲ್ಲಿ 22 ಹೆಸರುಗಳಿವೆ ಮತ್ತು validator ಸೆಟ್‌ನಲ್ಲಿ 16, ಕಾಣೆಯಾದ ಆರು inform-if, inform-ref, propagate, proxy, request-when ಮತ್ತು request-whenever, ಮತ್ತು inform-if ತಿರಸ್ಕರಿಸಲ್ಪಟ್ಟಿತು. ವಿಭಾಗ 4: ನಕಲಿ supervisor request ರಚನಾತ್ಮಕವಾಗಿ ಮಾನ್ಯವಾಗಿತ್ತು. ವಿಭಾಗ 5: ಕಡಿಮೆ ವೆಚ್ಚ agent-c ಆರಿಸಿತು ಮತ್ತು ಕಡಿಮೆ ಅವಧಿ agent-b ಆರಿಸಿತು. ವಿಭಾಗ 6: ಗ್ರಾಹಕರ ಎಣಿಕೆಗಳು 3, 3 ಮತ್ತು 2."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "Agents that are built separately need to know what kind of message they received before they act on it, and the performative, the envelope and a shared vocabulary are the three things that make a message more than text.",
    "bodyKn": "ಪ್ರತ್ಯೇಕವಾಗಿ ನಿರ್ಮಿಸಿದ ಏಜೆಂಟ್‌ಗಳು ಕ್ರಿಯೆ ಕೈಗೊಳ್ಳುವ ಮೊದಲು ತಮಗೆ ಯಾವ ರೀತಿಯ ಸಂದೇಶ ಬಂದಿತೆಂದು ತಿಳಿಯಬೇಕು, ಮತ್ತು performative, ಲಕೋಟೆ ಹಾಗೂ ಹಂಚಿಕೆಯ ಶಬ್ದಕೋಶ ಸಂದೇಶವನ್ನು ಪಠ್ಯಕ್ಕಿಂತ ಹೆಚ್ಚಾಗಿಸುವ ಮೂರು ಅಂಶಗಳು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"a valid message is a trustworthy message.\" The forged supervisor request was valid, and the validator also rejected six real performatives.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಮಾನ್ಯ ಸಂದೇಶ ಎಂದರೆ ನಂಬಲರ್ಹ ಸಂದೇಶ.\" ನಕಲಿ supervisor request ಮಾನ್ಯವಾಗಿತ್ತು, ಮತ್ತು validator ಆರು ನಿಜ performative ಗಳನ್ನೂ ತಿರಸ್ಕರಿಸಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Speech act: an utterance that does something. Performative: the named intention of a message. Envelope: the fields around the content. Ontology: a shared definition of terms. Contract Net: a call for proposals followed by an award.",
    "bodyKn": "Speech act: ಏನನ್ನಾದರೂ ಮಾಡುವ ಹೇಳಿಕೆ. Performative: ಸಂದೇಶದ ಹೆಸರಿಸಿದ ಉದ್ದೇಶ. ಲಕೋಟೆ: ವಿಷಯದ ಸುತ್ತಲಿನ ಕ್ಷೇತ್ರಗಳು. Ontology: ಪದಗಳ ಹಂಚಿಕೆಯ ವ್ಯಾಖ್ಯಾನ. Contract Net: ಪ್ರಸ್ತಾವನೆ ಕರೆ ಮತ್ತು ನಂತರ ಪ್ರದಾನ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) The same content did nothing under query-if and booked a slot under request. 2) The lesson list has 22 performatives and its validator 16. 3) A forged sender passed validation. 4) The same three bids give two different winners under two rules. 5) One word gave 3, 3 and 2 customers.",
    "bodyKn": "1) ಒಂದೇ ವಿಷಯ query-if ಅಡಿಯಲ್ಲಿ ಏನೂ ಮಾಡಲಿಲ್ಲ ಮತ್ತು request ಅಡಿಯಲ್ಲಿ ಸ್ಲಾಟ್ ಬುಕ್ ಮಾಡಿತು. 2) lesson ಪಟ್ಟಿಯಲ್ಲಿ 22 performative ಗಳಿವೆ ಮತ್ತು ಅದರ validator ನಲ್ಲಿ 16. 3) ನಕಲಿ ಕಳುಹಿಸುವವ validation ದಾಟಿದ. 4) ಒಂದೇ ಮೂರು ಬಿಡ್‌ಗಳು ಎರಡು ನಿಯಮಗಳಲ್ಲಿ ಎರಡು ಬೇರೆ ವಿಜೇತರನ್ನು ನೀಡುತ್ತವೆ. 5) ಒಂದು ಪದ 3, 3 ಮತ್ತು 2 ಗ್ರಾಹಕರನ್ನು ನೀಡಿತು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "How many names does the lesson performative list contain?",
      "qKn": "lesson ನ performative ಪಟ್ಟಿಯಲ್ಲಿ ಎಷ್ಟು ಹೆಸರುಗಳಿವೆ?",
      "opts": [
       "22",
       "16",
       "20",
       "5"
      ],
      "optsKn": [
       "22",
       "16",
       "20",
       "5"
      ],
      "correct": 0
     },
     {
      "q": "What did query-if do to the booked slots?",
      "qKn": "query-if ಬುಕ್ ಮಾಡಿದ ಸ್ಲಾಟ್‌ಗಳಿಗೆ ಏನು ಮಾಡಿತು?",
      "opts": [
       "Nothing, the list stayed empty",
       "It booked the slot",
       "It deleted the slot",
       "It refused"
      ],
      "optsKn": [
       "ಏನೂ ಇಲ್ಲ, ಪಟ್ಟಿ ಖಾಲಿಯಾಗಿಯೇ ಉಳಿಯಿತು",
       "ಸ್ಲಾಟ್ ಬುಕ್ ಮಾಡಿತು",
       "ಸ್ಲಾಟ್ ಅಳಿಸಿತು",
       "ನಿರಾಕರಿಸಿತು"
      ],
      "correct": 0
     },
     {
      "q": "Which agent won under the shortest-duration rule?",
      "qKn": "ಕಡಿಮೆ-ಅವಧಿ ನಿಯಮದಲ್ಲಿ ಯಾವ ಏಜೆಂಟ್ ಗೆದ್ದಿತು?",
      "opts": [
       "agent-b",
       "agent-a",
       "agent-c",
       "none"
      ],
      "optsKn": [
       "agent-b",
       "agent-a",
       "agent-c",
       "ಯಾರೂ ಇಲ್ಲ"
      ],
      "correct": 0
     },
     {
      "q": "Why did the forged supervisor request pass validation?",
      "qKn": "ನಕಲಿ supervisor request validation ಏಕೆ ದಾಟಿತು?",
      "opts": [
       "The check is structural and the sender is plain text",
       "The validator verified the signature",
       "The sender was authorised",
       "It was never validated"
      ],
      "optsKn": [
       "ಪರಿಶೀಲನೆ ರಚನಾತ್ಮಕ ಮತ್ತು ಕಳುಹಿಸುವವ ಸಾದಾ ಪಠ್ಯ",
       "validator ಸಹಿ ಪರಿಶೀಲಿಸಿತು",
       "ಕಳುಹಿಸುವವನಿಗೆ ಅಧಿಕಾರವಿತ್ತು",
       "ಅದನ್ನು ಎಂದೂ validate ಮಾಡಲಿಲ್ಲ"
      ],
      "correct": 0
     },
     {
      "q": "What were the three customer counts?",
      "qKn": "ಮೂರು ಗ್ರಾಹಕ ಎಣಿಕೆಗಳು ಯಾವುವು?",
      "opts": [
       "3, 3 and 2",
       "4, 4 and 4",
       "1, 2 and 3",
       "2, 2 and 2"
      ],
      "optsKn": [
       "3, 3 ಮತ್ತು 2",
       "4, 4 ಮತ್ತು 4",
       "1, 2 ಮತ್ತು 3",
       "2, 2 ಮತ್ತು 2"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
