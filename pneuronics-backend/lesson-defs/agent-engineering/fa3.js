module.exports = {
 "phaseId": "6a369d6466020ed05b3215d1",
 "moduleId": "6a369d6566020ed05b3215da",
 "order": 2,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "FIPA-ACL Heritage and Speech Acts (Part 3 of 3) — Protocol State, Meaning and Deadlines",
 "titleKn": "FIPA-ACL ಪರಂಪರೆ ಮತ್ತು Speech Acts (ಭಾಗ 3 / 3) — ಪ್ರೋಟೋಕಾಲ್ ಸ್ಥಿತಿ, ಅರ್ಥ ಮತ್ತು ಗಡುವುಗಳು",
 "desc": "Test state machines, meaning checks, duplicate delivery, constrained selection and an enforced deadline.",
 "descKn": "ಸ್ಥಿತಿ ಯಂತ್ರ, ಅರ್ಥ ಪರಿಶೀಲನೆ, ಪುನರಾವರ್ತಿತ ವಿತರಣೆ, ನಿರ್ಬಂಧಿತ ಆಯ್ಕೆ ಮತ್ತು ಜಾರಿಗೊಂಡ ಗಡುವು ಪರೀಕ್ಷಿಸಿ.",
 "objectives": [
  "Enforce a state machine.",
  "Check structure then meaning.",
  "Make delivery idempotent.",
  "Filter before choosing.",
  "Enforce a deadline."
 ],
 "objectivesKn": [
  "ಸ್ಥಿತಿ ಯಂತ್ರ ಜಾರಿಗೊಳಿಸಿ.",
  "ರಚನೆ ನಂತರ ಅರ್ಥ ಪರಿಶೀಲಿಸಿ.",
  "ವಿತರಣೆಯನ್ನು idempotent ಮಾಡಿ.",
  "ಆರಿಸುವ ಮೊದಲು ಫಿಲ್ಟರ್ ಮಾಡಿ.",
  "ಗಡುವು ಜಾರಿಗೊಳಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "FIPA-ACL Heritage and Speech Acts (Part 3 of 3)",
    "textKn": "FIPA-ACL ಪರಂಪರೆ ಮತ್ತು Speech Acts (ಭಾಗ 3 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 3 of 3: a contract state machine, a valid message in the wrong state, structure against semantics against a versioned meaning, idempotency, a constrained selection and a deadline that is only a field against one that is enforced. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind FIPA-ACL communication (performatives, the message envelope, ontologies, a translator for simplified MCP and A2A shapes, Contract Net, protocol state machines and an audit log), not the real software, and messages are plain objects inside one process, nothing is sent over a network, the modern message shapes are simplified inventions and no SL0 grammar is parsed, so no real LLM behaviour is measured. The original code/main.py was not supplied, so the labs are our own implementation. JADE, JACK and BDI material in the lesson is conceptual and was not run. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 3ನೆಯದು: ಒಪ್ಪಂದ ಸ್ಥಿತಿ ಯಂತ್ರ, ತಪ್ಪು ಸ್ಥಿತಿಯಲ್ಲಿ ಮಾನ್ಯ ಸಂದೇಶ, ರಚನೆ ವಿರುದ್ಧ ಅರ್ಥ ವಿರುದ್ಧ ಆವೃತ್ತಿ ಹೊಂದಿದ ಅರ್ಥ, idempotency, ನಿರ್ಬಂಧಿತ ಆಯ್ಕೆ ಮತ್ತು ಕೇವಲ ಕ್ಷೇತ್ರವಾದ ಗಡುವು ವಿರುದ್ಧ ಜಾರಿಗೊಳಿಸಿದ ಗಡುವು. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು FIPA-ACL ಸಂವಹನ (performative ಗಳು, ಸಂದೇಶ ಲಕೋಟೆ, ontology ಗಳು, ಸರಳೀಕೃತ MCP ಮತ್ತು A2A ರೂಪಗಳ ಅನುವಾದಕ, Contract Net, ಪ್ರೋಟೋಕಾಲ್ ಸ್ಥಿತಿ ಯಂತ್ರಗಳು ಮತ್ತು audit ದಾಖಲೆ) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಸಂದೇಶಗಳು ಒಂದೇ ಪ್ರಕ್ರಿಯೆಯೊಳಗಿನ ಸಾದಾ ವಸ್ತುಗಳು, ಜಾಲದ ಮೂಲಕ ಏನೂ ಕಳುಹಿಸಲ್ಪಡುವುದಿಲ್ಲ, ಆಧುನಿಕ ಸಂದೇಶ ರೂಪಗಳು ಸರಳೀಕೃತ ಕಲ್ಪನೆಗಳು ಮತ್ತು ಯಾವುದೇ SL0 ವ್ಯಾಕರಣ ಪಾರ್ಸ್ ಆಗುವುದಿಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ code/main.py ನೀಡಲಾಗಿಲ್ಲ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ನಮ್ಮದೇ ಅನುಷ್ಠಾನ. lesson ನಲ್ಲಿನ JADE, JACK ಮತ್ತು BDI ವಿಷಯ ಪರಿಕಲ್ಪನಾತ್ಮಕ ಮತ್ತು ಓಡಿಸಲಾಗಿಲ್ಲ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Correct Messages Can Still Be Wrong",
    "textKn": "ಸರಿಯಾದ ಸಂದೇಶಗಳೂ ತಪ್ಪಾಗಿರಬಹುದು",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Protocol State, Meaning, Retries and Deadlines",
    "headingKn": "ಪ್ರೋಟೋಕಾಲ್ ಸ್ಥಿತಿ, ಅರ್ಥ, ಮರುಪ್ರಯತ್ನ ಮತ್ತು ಗಡುವುಗಳು",
    "bodyEn": "A real agent system has to survive messages that are well formed and still wrong: a completion report for a task nobody awarded, a number whose meaning differs between teams, the same request delivered twice, or a bid that arrives after the call has closed. This part runs the state machine of a Contract Net, a sender rule that depends on the state, a stock message checked for structure and then for meaning, a revenue message that must name an exact metric and use Decimal, a duplicate delivery, a selection that has to respect a time requirement, and a Contract Net whose deadline is first only a field and then enforced, with an audit log of each run.",
    "bodyKn": "ನಿಜವಾದ ಏಜೆಂಟ್ ವ್ಯವಸ್ಥೆ ಸರಿಯಾಗಿ ರೂಪಿತವಾಗಿದ್ದರೂ ತಪ್ಪಾದ ಸಂದೇಶಗಳನ್ನು ತಡೆದುಕೊಳ್ಳಬೇಕು: ಯಾರಿಗೂ ನೀಡದ ಕೆಲಸದ ಪೂರ್ಣಗೊಳಿಸುವಿಕೆ ವರದಿ, ತಂಡಗಳ ನಡುವೆ ಅರ್ಥ ಬದಲಾಗುವ ಸಂಖ್ಯೆ, ಎರಡು ಬಾರಿ ತಲುಪಿದ ಅದೇ ವಿನಂತಿ, ಅಥವಾ ಕರೆ ಮುಚ್ಚಿದ ನಂತರ ಬರುವ ಬಿಡ್. ಈ ಭಾಗವು Contract Net ನ ಸ್ಥಿತಿ ಯಂತ್ರ, ಸ್ಥಿತಿಯನ್ನು ಅವಲಂಬಿಸಿದ ಕಳುಹಿಸುವವರ ನಿಯಮ, ರಚನೆಗೆ ಮತ್ತು ನಂತರ ಅರ್ಥಕ್ಕೆ ಪರಿಶೀಲಿಸಿದ ಸ್ಟಾಕ್ ಸಂದೇಶ, ನಿಖರ metric ಹೆಸರಿಸಿ Decimal ಬಳಸಬೇಕಾದ ಆದಾಯ ಸಂದೇಶ, ಪುನರಾವರ್ತಿತ ವಿತರಣೆ, ಸಮಯ ಅವಶ್ಯಕತೆ ಗೌರವಿಸಬೇಕಾದ ಆಯ್ಕೆ, ಮತ್ತು ಗಡುವು ಮೊದಲು ಕೇವಲ ಕ್ಷೇತ್ರ ನಂತರ ಜಾರಿಗೊಂಡ Contract Net ಅನ್ನು ಪ್ರತಿ ಓಟದ audit ದಾಖಲೆಯೊಂದಿಗೆ ಓಡಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Three Checks and a Trail",
    "headingKn": "ಮೂರು ಪರಿಶೀಲನೆಗಳು ಮತ್ತು ಜಾಡು",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">a message has to pass three different checks</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">structure</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">right fields and types</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">meaning</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">right values and units</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">protocol</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">right message, right time</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">audit</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">who did what, when</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">a message has to pass three different checks</text></svg>",
    "captionEn": "Structure, meaning and protocol are separate checks, and an audit log records the outcome.",
    "captionKn": "ರಚನೆ, ಅರ್ಥ ಮತ್ತು ಪ್ರೋಟೋಕಾಲ್ ಪ್ರತ್ಯೇಕ ಪರಿಶೀಲನೆಗಳು, ಮತ್ತು audit ದಾಖಲೆ ಫಲಿತಾಂಶ ದಾಖಲಿಸುತ್ತದೆ."
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
      "state machine",
      "the legal six-step path and an illegal jump"
     ],
     [
      "protocol state",
      "inform before and after the award"
     ],
     [
      "structure and meaning",
      "a negative quantity, a string quantity, an exact revenue metric"
     ],
     [
      "idempotency",
      "one execution for one key delivered twice"
     ],
     [
      "selection",
      "cheapest overall against cheapest that meets 60 minutes"
     ],
     [
      "deadline",
      "late bid wins when not enforced, refused when enforced"
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
    "filename": "fa_3.py",
    "headingEn": "State machine and sender rules",
    "headingKn": "ಸ್ಥಿತಿ ಯಂತ್ರ ಮತ್ತು ಕಳುಹಿಸುವವರ ನಿಯಮಗಳು",
    "descEn": "ALLOWED lists the legal transitions, transition refuses any other, and SENDER_RULES says which performative a role may send in which state.",
    "descKn": "ALLOWED ಕಾನೂನುಬದ್ಧ ಪರಿವರ್ತನೆಗಳನ್ನು ಪಟ್ಟಿ ಮಾಡುತ್ತದೆ, transition ಇತರವನ್ನು ನಿರಾಕರಿಸುತ್ತದೆ, ಮತ್ತು SENDER_RULES ಯಾವ ಪಾತ್ರ ಯಾವ ಸ್ಥಿತಿಯಲ್ಲಿ ಯಾವ performative ಕಳುಹಿಸಬಹುದು ಎಂದು ಹೇಳುತ್ತದೆ.",
    "code": "class State(Enum):\r\n    CREATED = \"created\"\r\n    CFP_SENT = \"cfp_sent\"\r\n    COLLECTING = \"collecting\"\r\n    AWARDED = \"awarded\"\r\n    COMPLETED = \"completed\"\r\n    FAILED = \"failed\"\r\n    CLOSED = \"closed\"\r\n\r\n\r\nALLOWED = {State.CREATED: {State.CFP_SENT}, State.CFP_SENT: {State.COLLECTING}, State.COLLECTING: {State.AWARDED, State.CLOSED},\r\n           State.AWARDED: {State.COMPLETED, State.FAILED}, State.COMPLETED: {State.CLOSED}, State.FAILED: {State.CLOSED}, State.CLOSED: set()}\r\n\r\n\r\ndef transition(current, target):\r\n    if target not in ALLOWED[current]:\r\n        raise ValueError(f\"Illegal transition {current.value} -> {target.value}\")\r\n    return target\r\n\r\n\r\n# Which performative a sender may use in each state of the contract.\r\nSENDER_RULES = {(\"worker\", \"propose\"): {State.COLLECTING}, (\"worker\", \"inform\"): {State.AWARDED}, (\"manager\", \"accept-proposal\"): {State.COLLECTING}}\r\n\r\n\r\ndef protocol_ok(role, performative, state):\r\n    return state in SENDER_RULES.get((role, performative), set())"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "fa_3.py",
    "headingEn": "Meaning and duplicates",
    "headingKn": "ಅರ್ಥ ಮತ್ತು ಪುನರಾವರ್ತನೆಗಳು",
    "descEn": "validate_stock_semantics adds value checks to the structural check, validate_revenue demands an exact metric and returns a Decimal, and Idempotent.process runs an operation once per key.",
    "descKn": "validate_stock_semantics ರಚನಾತ್ಮಕ ಪರಿಶೀಲನೆಗೆ ಮೌಲ್ಯ ಪರಿಶೀಲನೆ ಸೇರಿಸುತ್ತದೆ, validate_revenue ನಿಖರ metric ಬೇಡುತ್ತದೆ ಮತ್ತು Decimal ನೀಡುತ್ತದೆ, ಮತ್ತು Idempotent.process ಪ್ರತಿ key ಗೆ ಒಮ್ಮೆ ಕಾರ್ಯ ಓಡಿಸುತ್ತದೆ.",
    "code": "def validate_stock_structure(d):\r\n    return isinstance(d, dict) and isinstance(d.get(\"sku\"), str) and isinstance(d.get(\"quantity\"), int)\r\n\r\n\r\ndef validate_stock_semantics(d):\r\n    return validate_stock_structure(d) and d[\"quantity\"] >= 0 and bool(d[\"sku\"].strip())\r\n\r\n\r\nSUPPORTED = {\"gross_sales\", \"net_recognized_revenue\"}\r\n\r\n\r\ndef validate_revenue(d):\r\n    required = {\"metric\", \"amount\", \"currency\", \"accounting_period\", \"definition_version\"}\r\n    missing = required - set(d)\r\n    if missing:\r\n        raise ValueError(f\"Missing fields: {sorted(missing)}\")\r\n    if d[\"metric\"] not in SUPPORTED:\r\n        raise ValueError(\"Unknown metric\")\r\n    try:\r\n        return Decimal(d[\"amount\"])\r\n    except InvalidOperation:\r\n        raise ValueError(\"Amount is not a decimal string\")\r\n\r\n\r\nclass Idempotent:\r\n    def __init__(self):\r\n        self.done, self.executions = {}, 0\r\n\r\n    def process(self, key, op):\r\n        if key in self.done:\r\n            return self.done[key]\r\n        self.executions += 1\r\n        self.done[key] = op()\r\n        return self.done[key]"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "fa_3.py",
    "headingEn": "Audit and deadline",
    "headingKn": "Audit ಮತ್ತು ಗಡುವು",
    "descEn": "audit_contract collects proposals, optionally refuses late ones, logs each event and selects the winner.",
    "descKn": "audit_contract ಪ್ರಸ್ತಾವನೆಗಳನ್ನು ಸಂಗ್ರಹಿಸಿ, ಬೇಕಾದರೆ ತಡವಾದವನ್ನು ನಿರಾಕರಿಸಿ, ಪ್ರತಿ ಘಟನೆ ದಾಖಲಿಸಿ ವಿಜೇತನನ್ನು ಆರಿಸುತ್ತದೆ.",
    "code": "def audit_contract(proposals, deadline, now, enforce):\r\n    \"\"\"Collect proposals; with enforce=True a proposal that arrives after the deadline is refused and logged.\"\"\"\r\n    log, accepted = [], []\r\n    for name, cost, duration, arrived in proposals:\r\n        late = arrived > deadline\r\n        if late and enforce:\r\n            log.append((\"late_proposal_rejected\", name))\r\n            continue\r\n        accepted.append((name, cost, duration))\r\n        log.append((\"proposal_received\", name + (\"(late)\" if late else \"\")))\r\n    winner = min(accepted, key=lambda p: (p[1], p[2], p[0])) if accepted else None\r\n    if winner:\r\n        log.append((\"winner_selected\", winner[0]))\r\n    return winner, log"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: the contract state machine ---\nlegal path: created -> cfp_sent -> collecting -> awarded -> completed -> closed\nillegal jump: Illegal transition created -> completed\nthe machine accepts the six-step path and refuses a jump from created to completed, so a premature completion claim is a protocol violation even when its content is well formed; this is an in-memory machine, so it does not survive a restart or a concurrent update.\n\n--- 2. Genuinely running: a valid message in the wrong state ---\nworker inform while collecting: False\nworker inform after the award: True\nmanager accept-proposal while collecting: True | after completion: False\nthe same inform message is refused before the award and allowed after it, so protocol validation is a third check that sits beside structure and meaning; a worker that reports completion for a task it was never given is caught by the state and not by the content.\n\n--- 3. Genuinely running: structure, semantics and a versioned meaning ---\nstructure: True True False\nsemantics: True False False\nrevenue amount: 125000.00 | float sum 0.1+0.2: 0.30000000000000004 | Decimal sum: 0.3\nbare metric name: Unknown metric\na negative quantity passes the structural check and fails the semantic one, and a string quantity fails both; the revenue message is accepted only when it names an exact metric, a period and a definition version, and Decimal prints an exact 0.3 where the float prints 0.30000000000000004; the check still cannot prove that 125000.00 is the true figure.\n\n--- 4. Genuinely running: idempotency in one process ---\n{'status': 'completed', 'execution': 1} {'status': 'completed', 'execution': 1} | executions: 1\nthe second delivery of the same key returns the stored result and the operation runs once; the memory dictionary is lost on restart and the check and the effect are separate steps, so a real payment needs a durable atomic record or a provider that enforces the key.\n\n--- 5. Genuinely running: selection with a constraint ---\ncheapest overall: South Dispatch | meets 60 minutes: False\ncheapest eligible: Central Dispatch at 10\nchoosing on cost alone picks South Dispatch at 8, which takes 75 minutes and breaks the 60-minute requirement, while filtering first and then taking the cheapest gives Central Dispatch at 10; the protocol only carries the proposals, so the eligibility rule has to be written by the application.\n\n--- 6. Genuinely running: a deadline that is only a label against one that is enforced ---\ndeadline not enforced: winner agent-c | log: [('proposal_received', 'agent-a'), ('proposal_received', 'agent-b'), ('proposal_received', 'agent-c(late)'), ('winner_selected', 'agent-c')]\ndeadline enforced: winner agent-b | log: [('proposal_received', 'agent-a'), ('proposal_received', 'agent-b'), ('late_proposal_rejected', 'agent-c'), ('winner_selected', 'agent-b')]\neach run selected exactly one winner, but the late bid of agent-c at 2.5 seconds wins when the deadline is only a field and is refused and logged when it is enforced; the audit log is a Python list, so it is not durable or tamper-resistant."
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
    "headingEn": "Experiment 1: The contract state machine",
    "headingKn": "ಪ್ರಯೋಗ 1: The contract state machine",
    "bodyEn": "What it ran: The contract state machine. What the lab concluded: the machine accepts the six-step path and refuses a jump from created to completed, so a premature completion claim is a protocol violation even when its content is well formed; this is an in-memory machine, so it does not survive a restart or a concurrent update.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: The contract state machine. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the machine accepts the six-step path and refuses a jump from created to completed, so a premature completion claim is a protocol violation even when its content is well formed; this is an in-memory machine, so it does not survive a restart or a concurrent update."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. Genuinely running: the contract state machine ---\nlegal path: created -> cfp_sent -> collecting -> awarded -> completed -> closed\nillegal jump: Illegal transition created -> completed"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: A valid message in the wrong state",
    "headingKn": "ಪ್ರಯೋಗ 2: A valid message in the wrong state",
    "bodyEn": "What it ran: A valid message in the wrong state. What the lab concluded: the same inform message is refused before the award and allowed after it, so protocol validation is a third check that sits beside structure and meaning; a worker that reports completion for a task it was never given is caught by the state and not by the content.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A valid message in the wrong state. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the same inform message is refused before the award and allowed after it, so protocol validation is a third check that sits beside structure and meaning; a worker that reports completion for a task it was never given is caught by the state and not by the content."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely running: a valid message in the wrong state ---\nworker inform while collecting: False\nworker inform after the award: True\nmanager accept-proposal while collecting: True | after completion: False"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: Structure, semantics and a versioned meaning",
    "headingKn": "ಪ್ರಯೋಗ 3: Structure, semantics and a versioned meaning",
    "bodyEn": "What it ran: Structure, semantics and a versioned meaning. What the lab concluded: a negative quantity passes the structural check and fails the semantic one, and a string quantity fails both; the revenue message is accepted only when it names an exact metric, a period and a definition version, and Decimal prints an exact 0.3 where the float prints 0.30000000000000004; the check still cannot prove that 125000.00 is the true figure.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Structure, semantics and a versioned meaning. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a negative quantity passes the structural check and fails the semantic one, and a string quantity fails both; the revenue message is accepted only when it names an exact metric, a period and a definition version, and Decimal prints an exact 0.3 where the float prints 0.30000000000000004; the check still cannot prove that 125000.00 is the true figure."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely running: structure, semantics and a versioned meaning ---\nstructure: True True False\nsemantics: True False False\nrevenue amount: 125000.00 | float sum 0.1+0.2: 0.30000000000000004 | Decimal sum: 0.3\nbare metric name: Unknown metric"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 4: Idempotency in one process",
    "headingKn": "ಪ್ರಯೋಗ 4: Idempotency in one process",
    "bodyEn": "What it ran: Idempotency in one process. What the lab concluded: the second delivery of the same key returns the stored result and the operation runs once; the memory dictionary is lost on restart and the check and the effect are separate steps, so a real payment needs a durable atomic record or a provider that enforces the key.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Idempotency in one process. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the second delivery of the same key returns the stored result and the operation runs once; the memory dictionary is lost on restart and the check and the effect are separate steps, so a real payment needs a durable atomic record or a provider that enforces the key."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 4. Genuinely running: idempotency in one process ---\n{'status': 'completed', 'execution': 1} {'status': 'completed', 'execution': 1} | executions: 1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 5: Selection with a constraint",
    "headingKn": "ಪ್ರಯೋಗ 5: Selection with a constraint",
    "bodyEn": "What it ran: Selection with a constraint. What the lab concluded: choosing on cost alone picks South Dispatch at 8, which takes 75 minutes and breaks the 60-minute requirement, while filtering first and then taking the cheapest gives Central Dispatch at 10; the protocol only carries the proposals, so the eligibility rule has to be written by the application.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Selection with a constraint. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): choosing on cost alone picks South Dispatch at 8, which takes 75 minutes and breaks the 60-minute requirement, while filtering first and then taking the cheapest gives Central Dispatch at 10; the protocol only carries the proposals, so the eligibility rule has to be written by the application."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 5. Genuinely running: selection with a constraint ---\ncheapest overall: South Dispatch | meets 60 minutes: False\ncheapest eligible: Central Dispatch at 10"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 6: A deadline that is only a label against one that is enforced",
    "headingKn": "ಪ್ರಯೋಗ 6: A deadline that is only a label against one that is enforced",
    "bodyEn": "What it ran: A deadline that is only a label against one that is enforced. What the lab concluded: each run selected exactly one winner, but the late bid of agent-c at 2.5 seconds wins when the deadline is only a field and is refused and logged when it is enforced; the audit log is a Python list, so it is not durable or tamper-resistant.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A deadline that is only a label against one that is enforced. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): each run selected exactly one winner, but the late bid of agent-c at 2.5 seconds wins when the deadline is only a field and is refused and logged when it is enforced; the audit log is a Python list, so it is not durable or tamper-resistant."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 6. Genuinely running: a deadline that is only a label against one that is enforced ---\ndeadline not enforced: winner agent-c | log: [('proposal_received', 'agent-a'), ('proposal_received', 'agent-b'), ('proposal_received', 'agent-c(late)'), ('winner_selected', 'agent-c')]\ndeadline enforced: winner agent-b | log: [('proposal_received', 'agent-a'), ('proposal_received', 'agent-b'), ('late_proposal_rejected', 'agent-c'), ('winner_selected', 'agent-b')]"
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
    "headingEn": "Genuinely Found: State and Sequence",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಸ್ಥಿತಿ ಮತ್ತು ಅನುಕ್ರಮ",
    "bodyEn": "Section 1: the legal path was created, cfp_sent, collecting, awarded, completed, closed, and the jump from created to completed raised Illegal transition. Section 2: a worker inform was refused while collecting and allowed after the award, and a manager accept-proposal was allowed while collecting and refused after completion.",
    "bodyKn": "ವಿಭಾಗ 1: ಕಾನೂನುಬದ್ಧ ಮಾರ್ಗ created, cfp_sent, collecting, awarded, completed, closed, ಮತ್ತು created ನಿಂದ completed ಗೆ ಜಿಗಿತ Illegal transition ಎತ್ತಿತು. ವಿಭಾಗ 2: ಕೆಲಸಗಾರನ inform collecting ವೇಳೆ ತಿರಸ್ಕರಿಸಲ್ಪಟ್ಟು ಪ್ರದಾನದ ನಂತರ ಅನುಮತಿಸಲ್ಪಟ್ಟಿತು, ಮತ್ತು ಮ್ಯಾನೇಜರ್ accept-proposal collecting ವೇಳೆ ಅನುಮತಿಸಲ್ಪಟ್ಟು ಪೂರ್ಣಗೊಂಡ ನಂತರ ತಿರಸ್ಕರಿಸಲ್ಪಟ್ಟಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Meaning and Retries",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಅರ್ಥ ಮತ್ತು ಮರುಪ್ರಯತ್ನ",
    "bodyEn": "Section 3: structure gave True, True, False and semantics True, False, False for a good, a negative and a string quantity, the revenue amount was 125000.00, the float sum printed 0.30000000000000004 against an exact 0.3 for Decimal, and a bare metric name raised Unknown metric. Section 4: the second delivery returned the stored result and executions stayed at 1.",
    "bodyKn": "ವಿಭಾಗ 3: ಒಳ್ಳೆಯ, ಋಣಾತ್ಮಕ ಮತ್ತು ಸ್ಟ್ರಿಂಗ್ ಪ್ರಮಾಣಕ್ಕೆ ರಚನೆ True, True, False ಮತ್ತು ಅರ್ಥ True, False, False ನೀಡಿತು, ಆದಾಯ ಮೊತ್ತ 125000.00, float ಮೊತ್ತ 0.30000000000000004 ಮುದ್ರಿಸಿತು ಆದರೆ Decimal ನಿಖರ 0.3, ಮತ್ತು ಬರೀ metric ಹೆಸರು Unknown metric ಎತ್ತಿತು. ವಿಭಾಗ 4: ಎರಡನೇ ವಿತರಣೆ ಸಂಗ್ರಹಿತ ಫಲಿತಾಂಶ ನೀಡಿತು ಮತ್ತು executions 1 ರಲ್ಲೇ ಉಳಿಯಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Selection and Deadline",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಆಯ್ಕೆ ಮತ್ತು ಗಡುವು",
    "bodyEn": "Section 5: cheapest overall was South Dispatch at 8 but it takes 75 minutes, and the cheapest that meets 60 minutes was Central Dispatch at 10. Section 6: with the deadline only a field agent-c won with a late bid, and with it enforced the log showed late_proposal_rejected for agent-c and agent-b won.",
    "bodyKn": "ವಿಭಾಗ 5: ಒಟ್ಟಾರೆ ಅಗ್ಗವಾದದ್ದು 8 ರ South Dispatch ಆದರೆ ಅದಕ್ಕೆ 75 ನಿಮಿಷ ಬೇಕು, ಮತ್ತು 60 ನಿಮಿಷ ಪೂರೈಸುವ ಅಗ್ಗವಾದದ್ದು 10 ರ Central Dispatch. ವಿಭಾಗ 6: ಗಡುವು ಕೇವಲ ಕ್ಷೇತ್ರವಾಗಿದ್ದಾಗ agent-c ತಡವಾದ ಬಿಡ್‌ನಿಂದ ಗೆದ್ದಿತು, ಮತ್ತು ಜಾರಿಗೊಳಿಸಿದಾಗ ದಾಖಲೆ agent-c ಗೆ late_proposal_rejected ತೋರಿಸಿ agent-b ಗೆದ್ದಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A message can pass the structure check, the meaning check and still arrive at the wrong moment, so a reliable agent system checks all three and records what it decided in a log that someone can read afterwards.",
    "bodyKn": "ಸಂದೇಶವು ರಚನೆ ಪರಿಶೀಲನೆ ಮತ್ತು ಅರ್ಥ ಪರಿಶೀಲನೆ ದಾಟಿಯೂ ತಪ್ಪು ಕ್ಷಣದಲ್ಲಿ ಬರಬಹುದು, ಆದ್ದರಿಂದ ನಂಬಲರ್ಹ ಏಜೆಂಟ್ ವ್ಯವಸ್ಥೆ ಮೂರನ್ನೂ ಪರಿಶೀಲಿಸಿ ತಾನು ನಿರ್ಧರಿಸಿದ್ದನ್ನು ನಂತರ ಯಾರಾದರೂ ಓದಬಹುದಾದ ದಾಖಲೆಯಲ್ಲಿ ದಾಖಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"a deadline field enforces itself.\" The late bid of agent-c won until the code actually compared its arrival time with the deadline.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಗಡುವು ಕ್ಷೇತ್ರ ತನ್ನನ್ನು ತಾನೇ ಜಾರಿಗೊಳಿಸುತ್ತದೆ.\" ಕೋಡ್ ಬಂದ ಸಮಯವನ್ನು ಗಡುವಿಗೆ ಹೋಲಿಸುವವರೆಗೆ agent-c ಯ ತಡವಾದ ಬಿಡ್ ಗೆದ್ದಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "State machine: the legal states and moves of a conversation. Semantic validation: checking values and units. Idempotency: the same key gives the same effect once. Audit log: an ordered record of decisions. Eligibility filter: remove what breaks a constraint before choosing.",
    "bodyKn": "ಸ್ಥಿತಿ ಯಂತ್ರ: ಸಂಭಾಷಣೆಯ ಕಾನೂನುಬದ್ಧ ಸ್ಥಿತಿಗಳು ಮತ್ತು ನಡೆಗಳು. ಅರ್ಥ validation: ಮೌಲ್ಯ ಮತ್ತು ಘಟಕ ಪರಿಶೀಲಿಸುವುದು. Idempotency: ಅದೇ key ಒಮ್ಮೆ ಮಾತ್ರ ಪರಿಣಾಮ ನೀಡುವುದು. Audit ದಾಖಲೆ: ನಿರ್ಧಾರಗಳ ಕ್ರಮಬದ್ಧ ದಾಖಲೆ. ಅರ್ಹತೆ ಫಿಲ್ಟರ್: ಆರಿಸುವ ಮೊದಲು ನಿರ್ಬಂಧ ಮುರಿಯುವುದನ್ನು ತೆಗೆಯುವುದು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) The state machine refused a jump from created to completed. 2) The same inform was refused before the award and allowed after it. 3) A negative quantity passed structure and failed meaning. 4) A duplicate delivery ran the operation once. 5) An unenforced deadline let the late bid win.",
    "bodyKn": "1) ಸ್ಥಿತಿ ಯಂತ್ರ created ನಿಂದ completed ಗೆ ಜಿಗಿತವನ್ನು ನಿರಾಕರಿಸಿತು. 2) ಅದೇ inform ಪ್ರದಾನಕ್ಕೆ ಮೊದಲು ನಿರಾಕರಿಸಲ್ಪಟ್ಟು ನಂತರ ಅನುಮತಿಸಲ್ಪಟ್ಟಿತು. 3) ಋಣಾತ್ಮಕ ಪ್ರಮಾಣ ರಚನೆ ದಾಟಿ ಅರ್ಥದಲ್ಲಿ ವಿಫಲವಾಯಿತು. 4) ಪುನರಾವರ್ತಿತ ವಿತರಣೆ ಕಾರ್ಯವನ್ನು ಒಮ್ಮೆ ಓಡಿಸಿತು. 5) ಜಾರಿಗೊಳಿಸದ ಗಡುವು ತಡವಾದ ಬಿಡ್ ಗೆಲ್ಲಲು ಬಿಟ್ಟಿತು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "Was a worker inform accepted while the contract was still collecting?",
      "qKn": "ಒಪ್ಪಂದ ಇನ್ನೂ collecting ನಲ್ಲಿದ್ದಾಗ ಕೆಲಸಗಾರನ inform ಒಪ್ಪಲ್ಪಟ್ಟಿತೇ?",
      "opts": [
       "No, it was refused until the award",
       "Yes, always",
       "Only for agent-c",
       "It was never tested"
      ],
      "optsKn": [
       "ಇಲ್ಲ, ಪ್ರದಾನದವರೆಗೆ ತಿರಸ್ಕರಿಸಲ್ಪಟ್ಟಿತು",
       "ಹೌದು, ಯಾವಾಗಲೂ",
       "agent-c ಗೆ ಮಾತ್ರ",
       "ಅದನ್ನು ಎಂದೂ ಪರೀಕ್ಷಿಸಲಿಲ್ಲ"
      ],
      "correct": 0
     },
     {
      "q": "What did the string quantity \"5\" give for structure and for semantics?",
      "qKn": "ಸ್ಟ್ರಿಂಗ್ ಪ್ರಮಾಣ \"5\" ರಚನೆ ಮತ್ತು ಅರ್ಥಕ್ಕೆ ಏನು ನೀಡಿತು?",
      "opts": [
       "False for both",
       "True for both",
       "True then False",
       "False then True"
      ],
      "optsKn": [
       "ಎರಡಕ್ಕೂ False",
       "ಎರಡಕ್ಕೂ True",
       "True ನಂತರ False",
       "False ನಂತರ True"
      ],
      "correct": 0
     },
     {
      "q": "How many times did the operation execute for the key delivered twice?",
      "qKn": "ಎರಡು ಬಾರಿ ತಲುಪಿದ key ಗೆ ಕಾರ್ಯ ಎಷ್ಟು ಬಾರಿ ಕಾರ್ಯಗತವಾಯಿತು?",
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
      "q": "Which dispatcher was cheapest while meeting the 60-minute requirement?",
      "qKn": "60-ನಿಮಿಷ ಅವಶ್ಯಕತೆ ಪೂರೈಸುವಾಗ ಯಾವ dispatcher ಅಗ್ಗವಾಗಿತ್ತು?",
      "opts": [
       "Central Dispatch at 10",
       "South Dispatch at 8",
       "North Dispatch at 12",
       "None"
      ],
      "optsKn": [
       "10 ರ Central Dispatch",
       "8 ರ South Dispatch",
       "12 ರ North Dispatch",
       "ಯಾವುದೂ ಇಲ್ಲ"
      ],
      "correct": 0
     },
     {
      "q": "Who won when the deadline was enforced?",
      "qKn": "ಗಡುವು ಜಾರಿಗೊಂಡಾಗ ಯಾರು ಗೆದ್ದರು?",
      "opts": [
       "agent-b",
       "agent-c",
       "agent-a",
       "nobody"
      ],
      "optsKn": [
       "agent-b",
       "agent-c",
       "agent-a",
       "ಯಾರೂ ಇಲ್ಲ"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
