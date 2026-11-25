module.exports = {
 "phaseId": "6a369d6466020ed05b3215d1",
 "moduleId": "6a369d6566020ed05b3215da",
 "order": 1,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "FIPA-ACL Heritage and Speech Acts (Part 2 of 3) — Translator and Contract Net",
 "titleKn": "FIPA-ACL ಪರಂಪರೆ ಮತ್ತು Speech Acts (ಭಾಗ 2 / 3) — ಅನುವಾದಕ ಮತ್ತು Contract Net",
 "desc": "Translate five simplified shapes to ACL and back, and run a Contract Net with refusals and failures.",
 "descKn": "ಐದು ಸರಳೀಕೃತ ರೂಪಗಳನ್ನು ACL ಗೆ ಮತ್ತು ಹಿಂದಕ್ಕೆ ಅನುವಾದಿಸಿ, ಮತ್ತು ನಿರಾಕರಣೆ ಹಾಗೂ ವೈಫಲ್ಯಗಳ Contract Net ಓಡಿಸಿ.",
 "objectives": [
  "Map shapes to performatives.",
  "Keep the original kind.",
  "Test a round trip.",
  "Spot a lossy mapping.",
  "Handle refuse and failure."
 ],
 "objectivesKn": [
  "ರೂಪಗಳನ್ನು performative ಗೆ ಮ್ಯಾಪ್ ಮಾಡಿ.",
  "ಮೂಲ ಪ್ರಕಾರ ಉಳಿಸಿ.",
  "ಸುತ್ತು ಪರೀಕ್ಷಿಸಿ.",
  "ನಷ್ಟವುಳ್ಳ ಮ್ಯಾಪಿಂಗ್ ಗುರುತಿಸಿ.",
  "refuse ಮತ್ತು failure ನಿಭಾಯಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "FIPA-ACL Heritage and Speech Acts (Part 2 of 3)",
    "textKn": "FIPA-ACL ಪರಂಪರೆ ಮತ್ತು Speech Acts (ಭಾಗ 2 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 2 of 3: a translator between five simplified MCP-style and A2A-style messages and ACL, round trips, a translation that drops fields, validation failures and a Contract Net with a refusal, a failure and no bidders. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind FIPA-ACL communication (performatives, the message envelope, ontologies, a translator for simplified MCP and A2A shapes, Contract Net, protocol state machines and an audit log), not the real software, and messages are plain objects inside one process, nothing is sent over a network, the modern message shapes are simplified inventions and no SL0 grammar is parsed, so no real LLM behaviour is measured. The original code/main.py was not supplied, so the labs are our own implementation. JADE, JACK and BDI material in the lesson is conceptual and was not run. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 2ನೆಯದು: ಐದು ಸರಳೀಕೃತ MCP-ಶೈಲಿ ಮತ್ತು A2A-ಶೈಲಿ ಸಂದೇಶಗಳು ಮತ್ತು ACL ನಡುವಿನ ಅನುವಾದಕ, ಸುತ್ತುಗಳು, ಕ್ಷೇತ್ರ ಕಳೆದುಕೊಳ್ಳುವ ಅನುವಾದ, validation ವೈಫಲ್ಯಗಳು ಮತ್ತು ನಿರಾಕರಣೆ, ವೈಫಲ್ಯ ಹಾಗೂ ಬಿಡ್‌ದಾರರಿಲ್ಲದ Contract Net. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು FIPA-ACL ಸಂವಹನ (performative ಗಳು, ಸಂದೇಶ ಲಕೋಟೆ, ontology ಗಳು, ಸರಳೀಕೃತ MCP ಮತ್ತು A2A ರೂಪಗಳ ಅನುವಾದಕ, Contract Net, ಪ್ರೋಟೋಕಾಲ್ ಸ್ಥಿತಿ ಯಂತ್ರಗಳು ಮತ್ತು audit ದಾಖಲೆ) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಸಂದೇಶಗಳು ಒಂದೇ ಪ್ರಕ್ರಿಯೆಯೊಳಗಿನ ಸಾದಾ ವಸ್ತುಗಳು, ಜಾಲದ ಮೂಲಕ ಏನೂ ಕಳುಹಿಸಲ್ಪಡುವುದಿಲ್ಲ, ಆಧುನಿಕ ಸಂದೇಶ ರೂಪಗಳು ಸರಳೀಕೃತ ಕಲ್ಪನೆಗಳು ಮತ್ತು ಯಾವುದೇ SL0 ವ್ಯಾಕರಣ ಪಾರ್ಸ್ ಆಗುವುದಿಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ code/main.py ನೀಡಲಾಗಿಲ್ಲ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ನಮ್ಮದೇ ಅನುಷ್ಠಾನ. lesson ನಲ್ಲಿನ JADE, JACK ಮತ್ತು BDI ವಿಷಯ ಪರಿಕಲ್ಪನಾತ್ಮಕ ಮತ್ತು ಓಡಿಸಲಾಗಿಲ್ಲ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "A Mapping Is Not an Equivalence",
    "textKn": "ಮ್ಯಾಪಿಂಗ್ ಸಮಾನತೆಯಲ್ಲ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Translator, Round Trips and Contract Net",
    "headingKn": "ಅನುವಾದಕ, ಸುತ್ತುಗಳು ಮತ್ತು Contract Net",
    "bodyEn": "A modern tool call, resource read or task update has a clear purpose, and it can be written as an ACL message with a performative. This part builds that translator for five simplified shapes of our own, which are not the real MCP or A2A formats, encodes each as JSON, decodes it and checks that it comes back equal. It then shows what a careless translation throws away, and runs the Contract Net from Part 1 properly: one call for proposals, four answers including a refusal, a winner chosen by cost and then duration, award messages, a completion and a failure report, and the case where nobody bids.",
    "bodyKn": "ಆಧುನಿಕ tool ಕರೆ, resource ಓದು ಅಥವಾ ಕಾರ್ಯ ನವೀಕರಣಕ್ಕೆ ಸ್ಪಷ್ಟ ಉದ್ದೇಶವಿದೆ, ಮತ್ತು ಅದನ್ನು performative ಇರುವ ACL ಸಂದೇಶವಾಗಿ ಬರೆಯಬಹುದು. ಈ ಭಾಗವು ನಮ್ಮದೇ ಐದು ಸರಳೀಕೃತ ರೂಪಗಳಿಗೆ ಆ ಅನುವಾದಕ ನಿರ್ಮಿಸುತ್ತದೆ, ಅವು ನಿಜವಾದ MCP ಅಥವಾ A2A ಸ್ವರೂಪಗಳಲ್ಲ, ಪ್ರತಿಯೊಂದನ್ನು JSON ಆಗಿ ಎನ್‌ಕೋಡ್ ಮಾಡಿ, ಡಿಕೋಡ್ ಮಾಡಿ ಸಮನಾಗಿ ಹಿಂದಿರುಗುತ್ತದೆಯೇ ಎಂದು ಪರಿಶೀಲಿಸುತ್ತದೆ. ನಂತರ ಅಜಾಗರೂಕ ಅನುವಾದ ಏನನ್ನು ಬಿಸಾಡುತ್ತದೆ ಎಂದು ತೋರಿಸುತ್ತದೆ ಮತ್ತು Part 1 ರ Contract Net ಅನ್ನು ಸರಿಯಾಗಿ ಓಡಿಸುತ್ತದೆ: ಒಂದು ಪ್ರಸ್ತಾವನೆ ಕರೆ, ನಿರಾಕರಣೆ ಸೇರಿದಂತೆ ನಾಲ್ಕು ಉತ್ತರಗಳು, ವೆಚ್ಚ ಮತ್ತು ನಂತರ ಅವಧಿಯಿಂದ ಆರಿಸಿದ ವಿಜೇತ, ಪ್ರದಾನ ಸಂದೇಶಗಳು, ಪೂರ್ಣಗೊಳಿಸುವಿಕೆ ಮತ್ತು ವೈಫಲ್ಯ ವರದಿ, ಹಾಗೂ ಯಾರೂ ಬಿಡ್ ಮಾಡದ ಪ್ರಕರಣ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Translating Between Shapes",
    "headingKn": "ರೂಪಗಳ ನಡುವೆ ಅನುವಾದ",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">a mapping is only as good as what it preserves</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">modern shape</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">tool call, task update</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">ACL message</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">performative + metadata</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">round trip</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">back to the same shape</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">lost fields</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">a lossy mapping fails</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">a mapping is only as good as what it preserves</text></svg>",
    "captionEn": "Map to a performative, keep the original kind and compare after the way back.",
    "captionKn": "performative ಗೆ ಮ್ಯಾಪ್ ಮಾಡಿ, ಮೂಲ ಪ್ರಕಾರ ಉಳಿಸಿ ಮತ್ತು ಹಿಂದಿರುಗಿದ ನಂತರ ಹೋಲಿಸಿ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "The mappings",
    "headingKn": "ಮ್ಯಾಪಿಂಗ್‌ಗಳು",
    "headers": [
     "Simplified shape",
     "ACL performative"
    ],
    "rows": [
     [
      "tool call",
      "request"
     ],
     [
      "resource read",
      "query-ref"
     ],
     [
      "task submit",
      "request"
     ],
     [
      "task update",
      "inform"
     ],
     [
      "task cancel",
      "cancel"
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
    "filename": "fa_2.py",
    "headingEn": "The message and the validator",
    "headingKn": "ಸಂದೇಶ ಮತ್ತು validator",
    "descEn": "ACL carries the performative, parties, content, correlation fields and a metadata dictionary, and validate rejects an unknown performative or a missing party.",
    "descKn": "ACL performative, ಪಕ್ಷಗಳು, ವಿಷಯ, ಸಂಬಂಧ ಕ್ಷೇತ್ರಗಳು ಮತ್ತು metadata ನಿಘಂಟು ಹೊತ್ತಿದೆ, ಮತ್ತು validate ಅಜ್ಞಾತ performative ಅಥವಾ ಕಾಣೆಯಾದ ಪಕ್ಷವನ್ನು ತಿರಸ್ಕರಿಸುತ್ತದೆ.",
    "code": "class ACL:\n    performative: str\n    sender: str\n    receiver: str\n    content: Any\n    conversation_id: str = \"\"\n    reply_with: str = \"\"\n    in_reply_to: str = \"\"\n    protocol: str = \"demo\"\n    metadata: dict = field(default_factory=dict)\n\n\ndef validate(m):\n    if m.performative not in PERFORMATIVES:\n        raise ValueError(\"Unsupported performative: \" + m.performative)\n    if not m.sender or not m.receiver:\n        raise ValueError(\"Missing sender or receiver\")\n    return True\n\n\ndef encode(m):\n    validate(m)\n    return json.dumps(asdict(m), sort_keys=True)\n\n\ndef decode(text):\n    m = ACL(**json.loads(text))\n    validate(m)\n    return m"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "fa_2.py",
    "headingEn": "The two-way mapping",
    "headingKn": "ದ್ವಿಮುಖ ಮ್ಯಾಪಿಂಗ್",
    "descEn": "modern_to_acl stores the original kind in the metadata and acl_to_modern uses it to rebuild the message.",
    "descKn": "modern_to_acl ಮೂಲ ಪ್ರಕಾರವನ್ನು metadata ದಲ್ಲಿ ಸಂಗ್ರಹಿಸುತ್ತದೆ ಮತ್ತು acl_to_modern ಅದನ್ನು ಬಳಸಿ ಸಂದೇಶ ಮರುನಿರ್ಮಿಸುತ್ತದೆ.",
    "code": "KIND_TO_PERF = {\"mcp-tools-call\": \"request\", \"mcp-resources-read\": \"query-ref\", \"a2a-task-submit\": \"request\", \"a2a-task-update\": \"inform\", \"a2a-task-cancel\": \"cancel\"}\n\n\ndef modern_to_acl(msg):\n    return ACL(KIND_TO_PERF[msg[\"kind\"]], msg[\"sender\"], msg[\"receiver\"], msg[\"payload\"], conversation_id=\"conv-\" + msg[\"id\"], reply_with=msg[\"id\"], metadata={\"original_kind\": msg[\"kind\"]})\n\n\ndef acl_to_modern(m):\n    return {\"kind\": m.metadata[\"original_kind\"], \"id\": m.reply_with, \"sender\": m.sender, \"receiver\": m.receiver, \"payload\": m.content}"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "fa_2.py",
    "headingEn": "Bidding and award",
    "headingKn": "ಬಿಡ್ ಮತ್ತು ಪ್ರದಾನ",
    "descEn": "evaluate_cfp answers propose or refuse and echoes the call in in_reply_to, choose picks by cost then duration and refuses an empty set, and execute_award reports inform or failure.",
    "descKn": "evaluate_cfp propose ಅಥವಾ refuse ನೀಡಿ ಕರೆಯನ್ನು in_reply_to ನಲ್ಲಿ ಪ್ರತಿಧ್ವನಿಸುತ್ತದೆ, choose ವೆಚ್ಚ ನಂತರ ಅವಧಿಯಿಂದ ಆರಿಸಿ ಖಾಲಿ ಸೆಟ್ ತಿರಸ್ಕರಿಸುತ್ತದೆ, ಮತ್ತು execute_award inform ಅಥವಾ failure ವರದಿ ಮಾಡುತ್ತದೆ.",
    "code": "def evaluate_cfp(worker, cfp):\n    if not worker.available:\n        return ACL(\"refuse\", worker.name, cfp.sender, {\"reason\": \"unavailable\"}, cfp.conversation_id, in_reply_to=cfp.reply_with)\n    return ACL(\"propose\", worker.name, cfp.sender, {\"cost\": worker.cost, \"duration\": worker.duration}, cfp.conversation_id, in_reply_to=cfp.reply_with)\n\n\ndef choose(proposals):\n    valid = [p for p in proposals if p.performative == \"propose\"]\n    if not valid:\n        raise ValueError(\"No valid proposals\")\n    return min(valid, key=lambda p: (p.content[\"cost\"], p.content[\"duration\"], p.sender))\n\n\ndef execute_award(accept, succeed=True):\n    kind = \"inform\" if succeed else \"failure\"\n    return ACL(kind, accept.receiver, accept.sender, {\"status\": \"completed\" if succeed else \"error\"}, accept.conversation_id, in_reply_to=accept.reply_with)"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: five round trips ---\nmcp-tools-call -> request -> round trip PASS\nmcp-resources-read -> query-ref -> round trip PASS\na2a-task-submit -> request -> round trip PASS\na2a-task-update -> inform -> round trip PASS\na2a-task-cancel -> cancel -> round trip PASS\neach of the five simplified messages maps to a performative, goes through JSON and comes back equal, but only because the original kind is kept in the metadata; three kinds map to request or inform, so without that field the reverse step could not tell them apart.\n\n--- 2. Genuinely running: a translation that drops fields ---\nnaive content: (task-working task-101)\nfields recoverable from naive: []\nfields recoverable from structured: ['artifacts', 'context_id', 'metadata', 'state', 'task_id']\nthe one-line translation keeps only the task id and loses the context id, the artifacts and the priority, while carrying the whole object inside the content keeps all five fields; keeping the data still does not keep the rules that govern the task states.\n\n--- 3. Genuinely running: validation failures ---\nunknown performative -> ValueError: Unsupported performative: execute-everything\nmissing sender -> ValueError: Missing sender or receiver\nboth malformed messages are refused before encoding, which is structural validation only; a valid request such as delete-production-data would still pass these checks, so authorisation and business rules need their own layer.\n\n--- 4. Genuinely running: Contract Net with three bidders and one refusal ---\nreplies: [('agent-a', 'propose'), ('agent-b', 'propose'), ('agent-c', 'propose'), ('agent-d', 'refuse')]\nwinner: agent-c | in_reply_to of every reply is cfp-1: True\ndecisions: {'agent-a': 'reject-proposal', 'agent-b': 'reject-proposal', 'agent-c': 'accept-proposal'}\nthe unavailable worker answers refuse and cannot win even with the lowest cost of 3, agent-c wins with cost 4, the other two proposers are rejected, and every reply carries in_reply_to cfp-1 so the manager can match answers to the call; refuse is a valid protocol outcome and not an error.\n\n--- 5. Genuinely running: award, completion, failure and no bidders ---\nsuccessful execution: inform {'status': 'completed'} | failed execution: failure {'status': 'error'}\nno proposals: No valid proposals\naccepting a proposal says nothing about whether the work succeeds, so the executor reports inform or failure as a separate message; with no valid proposal the manager must say so and not invent a winner, and the inform here is simulated and proves no real analysis happened."
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
    "headingEn": "Experiment 1: Five round trips",
    "headingKn": "ಪ್ರಯೋಗ 1: Five round trips",
    "bodyEn": "What it ran: Five round trips. What the lab concluded: each of the five simplified messages maps to a performative, goes through JSON and comes back equal, but only because the original kind is kept in the metadata; three kinds map to request or inform, so without that field the reverse step could not tell them apart.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Five round trips. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): each of the five simplified messages maps to a performative, goes through JSON and comes back equal, but only because the original kind is kept in the metadata; three kinds map to request or inform, so without that field the reverse step could not tell them apart."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. Genuinely running: five round trips ---\nmcp-tools-call -> request -> round trip PASS\nmcp-resources-read -> query-ref -> round trip PASS\na2a-task-submit -> request -> round trip PASS\na2a-task-update -> inform -> round trip PASS\na2a-task-cancel -> cancel -> round trip PASS"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: A translation that drops fields",
    "headingKn": "ಪ್ರಯೋಗ 2: A translation that drops fields",
    "bodyEn": "What it ran: A translation that drops fields. What the lab concluded: the one-line translation keeps only the task id and loses the context id, the artifacts and the priority, while carrying the whole object inside the content keeps all five fields; keeping the data still does not keep the rules that govern the task states.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A translation that drops fields. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the one-line translation keeps only the task id and loses the context id, the artifacts and the priority, while carrying the whole object inside the content keeps all five fields; keeping the data still does not keep the rules that govern the task states."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely running: a translation that drops fields ---\nnaive content: (task-working task-101)\nfields recoverable from naive: []\nfields recoverable from structured: ['artifacts', 'context_id', 'metadata', 'state', 'task_id']"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: Validation failures",
    "headingKn": "ಪ್ರಯೋಗ 3: Validation failures",
    "bodyEn": "What it ran: Validation failures. What the lab concluded: both malformed messages are refused before encoding, which is structural validation only; a valid request such as delete-production-data would still pass these checks, so authorisation and business rules need their own layer.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Validation failures. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): both malformed messages are refused before encoding, which is structural validation only; a valid request such as delete-production-data would still pass these checks, so authorisation and business rules need their own layer."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely running: validation failures ---\nunknown performative -> ValueError: Unsupported performative: execute-everything\nmissing sender -> ValueError: Missing sender or receiver"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 4: Contract Net with three bidders and one refusal",
    "headingKn": "ಪ್ರಯೋಗ 4: Contract Net with three bidders and one refusal",
    "bodyEn": "What it ran: Contract Net with three bidders and one refusal. What the lab concluded: the unavailable worker answers refuse and cannot win even with the lowest cost of 3, agent-c wins with cost 4, the other two proposers are rejected, and every reply carries in_reply_to cfp-1 so the manager can match answers to the call; refuse is a valid protocol outcome and not an error.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Contract Net with three bidders and one refusal. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the unavailable worker answers refuse and cannot win even with the lowest cost of 3, agent-c wins with cost 4, the other two proposers are rejected, and every reply carries in_reply_to cfp-1 so the manager can match answers to the call; refuse is a valid protocol outcome and not an error."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 4. Genuinely running: Contract Net with three bidders and one refusal ---\nreplies: [('agent-a', 'propose'), ('agent-b', 'propose'), ('agent-c', 'propose'), ('agent-d', 'refuse')]\nwinner: agent-c | in_reply_to of every reply is cfp-1: True\ndecisions: {'agent-a': 'reject-proposal', 'agent-b': 'reject-proposal', 'agent-c': 'accept-proposal'}"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 5: Award, completion, failure and no bidders",
    "headingKn": "ಪ್ರಯೋಗ 5: Award, completion, failure and no bidders",
    "bodyEn": "What it ran: Award, completion, failure and no bidders. What the lab concluded: accepting a proposal says nothing about whether the work succeeds, so the executor reports inform or failure as a separate message; with no valid proposal the manager must say so and not invent a winner, and the inform here is simulated and proves no real analysis happened.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Award, completion, failure and no bidders. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): accepting a proposal says nothing about whether the work succeeds, so the executor reports inform or failure as a separate message; with no valid proposal the manager must say so and not invent a winner, and the inform here is simulated and proves no real analysis happened."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 5. Genuinely running: award, completion, failure and no bidders ---\nsuccessful execution: inform {'status': 'completed'} | failed execution: failure {'status': 'error'}\nno proposals: No valid proposals"
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
    "headingEn": "Genuinely Found: Round Trips and Lost Fields",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಸುತ್ತುಗಳು ಮತ್ತು ಕಳೆದ ಕ್ಷೇತ್ರಗಳು",
    "bodyEn": "Section 1: all five shapes printed PASS after the round trip. Section 2: the one-line translation recovered none of the five field names, while carrying the whole object recovered artifacts, context_id, metadata, state and task_id.",
    "bodyKn": "ವಿಭಾಗ 1: ಎಲ್ಲಾ ಐದು ರೂಪಗಳು ಸುತ್ತಿನ ನಂತರ PASS ಮುದ್ರಿಸಿದವು. ವಿಭಾಗ 2: ಒಂದು-ಸಾಲಿನ ಅನುವಾದ ಐದು ಕ್ಷೇತ್ರ ಹೆಸರುಗಳಲ್ಲಿ ಯಾವುದನ್ನೂ ಮರುಪಡೆಯಲಿಲ್ಲ, ಆದರೆ ಇಡೀ ವಸ್ತು ಹೊತ್ತೊಯ್ದರೆ artifacts, context_id, metadata, state ಮತ್ತು task_id ಮರುಪಡೆಯಲ್ಪಟ್ಟವು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Contract Net in Full",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಪೂರ್ಣ Contract Net",
    "bodyEn": "Section 3: an unknown performative and a missing sender were both refused with ValueError. Section 4: the replies were three propose and one refuse, agent-c won, every reply carried in_reply_to cfp-1 and the decisions were two reject-proposal and one accept-proposal. Section 5: execution gave inform completed, a failed run gave failure error, and an empty set gave No valid proposals.",
    "bodyKn": "ವಿಭಾಗ 3: ಅಜ್ಞಾತ performative ಮತ್ತು ಕಾಣೆಯಾದ ಕಳುಹಿಸುವವ ಎರಡೂ ValueError ನೊಂದಿಗೆ ತಿರಸ್ಕರಿಸಲ್ಪಟ್ಟವು. ವಿಭಾಗ 4: ಉತ್ತರಗಳು ಮೂರು propose ಮತ್ತು ಒಂದು refuse, agent-c ಗೆದ್ದಿತು, ಪ್ರತಿ ಉತ್ತರ in_reply_to cfp-1 ಹೊತ್ತಿತ್ತು ಮತ್ತು ನಿರ್ಧಾರಗಳು ಎರಡು reject-proposal ಮತ್ತು ಒಂದು accept-proposal. ವಿಭಾಗ 5: ಕಾರ್ಯಗತಗೊಳಿಸುವಿಕೆ inform completed ನೀಡಿತು, ವಿಫಲ ಓಟ failure error ನೀಡಿತು, ಮತ್ತು ಖಾಲಿ ಸೆಟ್ No valid proposals ನೀಡಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "When two protocols are mapped onto each other the useful question is what the mapping keeps, and a round trip that compares the result is the quickest honest check of that.",
    "bodyKn": "ಎರಡು ಪ್ರೋಟೋಕಾಲ್‌ಗಳನ್ನು ಪರಸ್ಪರ ಮ್ಯಾಪ್ ಮಾಡಿದಾಗ ಮ್ಯಾಪಿಂಗ್ ಏನನ್ನು ಉಳಿಸುತ್ತದೆ ಎಂಬುದೇ ಉಪಯುಕ್ತ ಪ್ರಶ್ನೆ, ಮತ್ತು ಫಲಿತಾಂಶ ಹೋಲಿಸುವ ಸುತ್ತು ಅದರ ವೇಗದ ಪ್ರಾಮಾಣಿಕ ಪರೀಕ್ಷೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"if a round trip passes, nothing was lost.\" It passed only because the original kind rode along in the metadata, and the rules of a task lifecycle were never part of the message.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಸುತ್ತು ಪಾಸಾದರೆ ಏನೂ ಕಳೆದಿಲ್ಲ.\" ಮೂಲ ಪ್ರಕಾರ metadata ದಲ್ಲಿ ಜೊತೆಯಾಗಿ ಹೋದ ಕಾರಣವೇ ಅದು ಪಾಸಾಯಿತು, ಮತ್ತು ಕಾರ್ಯ ಜೀವನಚಕ್ರದ ನಿಯಮಗಳು ಸಂದೇಶದ ಭಾಗವೇ ಆಗಿರಲಿಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Round trip: encode then decode and compare. Lossy mapping: one that drops information. refuse: a worker declines a request. in_reply_to: the field that ties an answer to a message. Award: the manager accepts one proposal.",
    "bodyKn": "ಸುತ್ತು: ಎನ್‌ಕೋಡ್ ನಂತರ ಡಿಕೋಡ್ ಮಾಡಿ ಹೋಲಿಸುವುದು. ನಷ್ಟವುಳ್ಳ ಮ್ಯಾಪಿಂಗ್: ಮಾಹಿತಿ ಬಿಡುವಂಥದ್ದು. refuse: ಕೆಲಸಗಾರ ವಿನಂತಿಯನ್ನು ನಿರಾಕರಿಸುವುದು. in_reply_to: ಉತ್ತರವನ್ನು ಸಂದೇಶಕ್ಕೆ ಕಟ್ಟುವ ಕ್ಷೇತ್ರ. ಪ್ರದಾನ: ಮ್ಯಾನೇಜರ್ ಒಂದು ಪ್ರಸ್ತಾವನೆ ಒಪ್ಪುವುದು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) Five shapes survived a round trip. 2) A one-line translation lost all five field names. 3) The refusing worker could not win. 4) Every reply tied back to cfp-1. 5) Execution reported inform or failure separately from the award.",
    "bodyKn": "1) ಐದು ರೂಪಗಳು ಸುತ್ತು ಉಳಿದವು. 2) ಒಂದು-ಸಾಲಿನ ಅನುವಾದ ಎಲ್ಲಾ ಐದು ಕ್ಷೇತ್ರ ಹೆಸರುಗಳನ್ನು ಕಳೆದುಕೊಂಡಿತು. 3) ನಿರಾಕರಿಸಿದ ಕೆಲಸಗಾರ ಗೆಲ್ಲಲಾಗಲಿಲ್ಲ. 4) ಪ್ರತಿ ಉತ್ತರ cfp-1 ಗೆ ಕಟ್ಟಲ್ಪಟ್ಟಿತು. 5) ಕಾರ್ಯಗತಗೊಳಿಸುವಿಕೆ ಪ್ರದಾನದಿಂದ ಪ್ರತ್ಯೇಕವಾಗಿ inform ಅಥವಾ failure ವರದಿ ಮಾಡಿತು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "How many of the five simplified shapes passed the round trip?",
      "qKn": "ಐದು ಸರಳೀಕೃತ ರೂಪಗಳಲ್ಲಿ ಎಷ್ಟು ಸುತ್ತು ಪಾಸಾದವು?",
      "opts": [
       "5",
       "3",
       "4",
       "0"
      ],
      "optsKn": [
       "5",
       "3",
       "4",
       "0"
      ],
      "correct": 0
     },
     {
      "q": "Which performative did the a2a-task-cancel shape map to?",
      "qKn": "a2a-task-cancel ರೂಪ ಯಾವ performative ಗೆ ಮ್ಯಾಪ್ ಆಯಿತು?",
      "opts": [
       "cancel",
       "request",
       "inform",
       "refuse"
      ],
      "optsKn": [
       "cancel",
       "request",
       "inform",
       "refuse"
      ],
      "correct": 0
     },
     {
      "q": "Why could the worker with cost 3 not win?",
      "qKn": "ವೆಚ್ಚ 3 ಇರುವ ಕೆಲಸಗಾರ ಏಕೆ ಗೆಲ್ಲಲಿಲ್ಲ?",
      "opts": [
       "It answered refuse because it was unavailable",
       "Its cost was too low",
       "It arrived late",
       "It was rejected by agent-c"
      ],
      "optsKn": [
       "ಅದು ಲಭ್ಯವಿರಲಿಲ್ಲ ಆದ್ದರಿಂದ refuse ಉತ್ತರಿಸಿತು",
       "ಅದರ ವೆಚ್ಚ ತುಂಬಾ ಕಡಿಮೆಯಿತ್ತು",
       "ಅದು ತಡವಾಗಿ ಬಂದಿತು",
       "ಅದನ್ನು agent-c ತಿರಸ್ಕರಿಸಿತು"
      ],
      "correct": 0
     },
     {
      "q": "What does an accepted proposal tell you about the result of the work?",
      "qKn": "ಒಪ್ಪಿದ ಪ್ರಸ್ತಾವನೆ ಕೆಲಸದ ಫಲಿತಾಂಶದ ಬಗ್ಗೆ ಏನು ಹೇಳುತ್ತದೆ?",
      "opts": [
       "Nothing, a separate inform or failure reports it",
       "That it succeeded",
       "That it failed",
       "That it was verified"
      ],
      "optsKn": [
       "ಏನೂ ಇಲ್ಲ, ಪ್ರತ್ಯೇಕ inform ಅಥವಾ failure ಅದನ್ನು ವರದಿ ಮಾಡುತ್ತದೆ",
       "ಅದು ಯಶಸ್ವಿಯಾಯಿತು",
       "ಅದು ವಿಫಲವಾಯಿತು",
       "ಅದು ಪರಿಶೀಲಿಸಲ್ಪಟ್ಟಿತು"
      ],
      "correct": 0
     },
     {
      "q": "What error did an empty set of proposals produce?",
      "qKn": "ಖಾಲಿ ಪ್ರಸ್ತಾವನೆ ಸೆಟ್ ಯಾವ ದೋಷ ನೀಡಿತು?",
      "opts": [
       "No valid proposals",
       "Unsupported performative",
       "Missing sender",
       "Illegal transition"
      ],
      "optsKn": [
       "No valid proposals",
       "Unsupported performative",
       "Missing sender",
       "Illegal transition"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
