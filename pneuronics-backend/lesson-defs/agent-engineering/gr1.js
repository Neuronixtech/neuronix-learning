module.exports = {
 "phaseId": "6a369d6466020ed05b3215d1",
 "moduleId": "6a369d6566020ed05b3215f2",
 "order": 0,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Group Chat and Speaker Selection (Part 1 of 3) — A Shared Pool and Speaker Selectors",
 "titleKn": "ಗ್ರೂಪ್ ಚಾಟ್ ಮತ್ತು ಮಾತನಾಡುವವರ ಆಯ್ಕೆ (ಭಾಗ 1 / 3) — ಹಂಚಿಕೆಯ ಪೂಲ್ ಮತ್ತು ಮಾತನಾಡುವವರ ಆಯ್ಕೆಕಾರರು",
 "desc": "Build a group-chat engine and compare round-robin, context-aware and state-rule speaker selection.",
 "descKn": "ಗ್ರೂಪ್-ಚಾಟ್ ಎಂಜಿನ್ ನಿರ್ಮಿಸಿ ಮತ್ತು round-robin, ಸಂದರ್ಭ-ಅರಿವಿನ ಹಾಗೂ ಸ್ಥಿತಿ-ನಿಯಮ ಆಯ್ಕೆ ಹೋಲಿಸಿ.",
 "objectives": [
  "Build a shared pool.",
  "Compare selectors.",
  "Stop three ways.",
  "Reject invalid speakers.",
  "Measure hot speakers."
 ],
 "objectivesKn": [
  "ಹಂಚಿಕೆಯ ಪೂಲ್ ನಿರ್ಮಿಸಿ.",
  "ಆಯ್ಕೆಕಾರರನ್ನು ಹೋಲಿಸಿ.",
  "ಮೂರು ರೀತಿ ನಿಲ್ಲಿಸಿ.",
  "ಅಮಾನ್ಯ ಮಾತನಾಡುವವರನ್ನು ತಿರಸ್ಕರಿಸಿ.",
  "hot speakers ಅಳೆಯಿರಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Group Chat and Speaker Selection (Part 1 of 3)",
    "textKn": "ಗ್ರೂಪ್ ಚಾಟ್ ಮತ್ತು ಮಾತನಾಡುವವರ ಆಯ್ಕೆ (ಭಾಗ 1 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 1 of 3: three speaker selectors on one task, the transcript and decision trace, the effect of agent order, three stop conditions, an invalid speaker, hot speakers and context growth. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind a shared message pool with round-robin, context-aware and state-rule speaker selectors, termination against completion, selector validation, a sycophancy cascade, a hybrid selector, fairness, role projections, loop detection, a verification gate with real test execution and untrusted-message handling, not the real software, and agents and selectors are scripted functions, the LLM recommendation is a literal string, the state flags are set by the scripted agents themselves, the only real execution is a unittest subprocess on a tiny temporary module, and no AutoGen or real model is used, so no real LLM behaviour is measured. The original code/main.py was not supplied, so the labs are our own implementation. AutoGen, AG2 and Microsoft Agent Framework are described in the lesson and were not run, and the lesson Part 3 paste ends at its section 28. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 1ನೆಯದು: ಒಂದು ಕೆಲಸದ ಮೇಲೆ ಮೂರು ಮಾತನಾಡುವವರ ಆಯ್ಕೆಕಾರರು, ಟ್ರಾನ್ಸ್‌ಕ್ರಿಪ್ಟ್ ಮತ್ತು ನಿರ್ಧಾರ ಜಾಡು, ಏಜೆಂಟ್ ಕ್ರಮದ ಪರಿಣಾಮ, ಮೂರು ನಿಲ್ಲಿಸುವ ಷರತ್ತುಗಳು, ಅಮಾನ್ಯ ಮಾತನಾಡುವವ, hot speakers ಮತ್ತು ಸಂದರ್ಭ ಬೆಳವಣಿಗೆ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು round-robin, ಸಂದರ್ಭ-ಅರಿವಿನ ಮತ್ತು ಸ್ಥಿತಿ-ನಿಯಮ ಮಾತನಾಡುವವರ ಆಯ್ಕೆಕಾರರಿರುವ ಹಂಚಿಕೆಯ ಸಂದೇಶ ಪೂಲ್, ಪೂರ್ಣಗೊಳಿಕೆಗೆ ವಿರುದ್ಧ ಮುಕ್ತಾಯ, ಆಯ್ಕೆಕಾರ ಮಾನ್ಯತೆ, sycophancy ಕ್ಯಾಸ್ಕೇಡ್, ಹೈಬ್ರಿಡ್ ಆಯ್ಕೆಕಾರ, ನ್ಯಾಯಸಮ್ಮತತೆ, ಪಾತ್ರ ಪ್ರೊಜೆಕ್ಷನ್‌ಗಳು, ಲೂಪ್ ಪತ್ತೆ, ನಿಜ ಪರೀಕ್ಷೆ ಓಡಿಸುವ ಪರಿಶೀಲನೆ ದ್ವಾರ ಮತ್ತು ನಂಬಲರ್ಹವಲ್ಲದ ಸಂದೇಶ ನಿರ್ವಹಣೆ ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಏಜೆಂಟ್‌ಗಳು ಮತ್ತು ಆಯ್ಕೆಕಾರರು ಸ್ಕ್ರಿಪ್ಟ್ ಕಾರ್ಯಗಳು, LLM ಶಿಫಾರಸು ಅಕ್ಷರಶಃ ಸ್ಟ್ರಿಂಗ್, ಸ್ಥಿತಿ ಧ್ವಜಗಳನ್ನು ಸ್ಕ್ರಿಪ್ಟ್ ಏಜೆಂಟ್‌ಗಳೇ ಹೊಂದಿಸುತ್ತವೆ, ಏಕೈಕ ನಿಜ ಕಾರ್ಯಗತಗೊಳಿಕೆ ಚಿಕ್ಕ ತಾತ್ಕಾಲಿಕ module ಮೇಲಿನ unittest subprocess, ಮತ್ತು AutoGen ಅಥವಾ ನಿಜ ಮಾದರಿ ಬಳಸಲಾಗಿಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ code/main.py ನೀಡಲಾಗಿಲ್ಲ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ನಮ್ಮದೇ ಅನುಷ್ಠಾನ. AutoGen, AG2 ಮತ್ತು Microsoft Agent Framework lesson ನಲ್ಲಿ ವಿವರಿಸಲ್ಪಟ್ಟಿವೆ ಮತ್ತು ಓಡಿಸಲಾಗಿಲ್ಲ, ಮತ್ತು lesson ನ ಭಾಗ 3 paste ಅದರ ವಿಭಾಗ 28 ರಲ್ಲಿ ಮುಗಿಯುತ್ತದೆ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Who Speaks Next Is a Control Decision",
    "textKn": "ಮುಂದೆ ಯಾರು ಮಾತನಾಡುತ್ತಾರೆ ಎಂಬುದು ನಿಯಂತ್ರಣ ನಿರ್ಧಾರ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "A Shared Pool and Three Speaker Selectors",
    "headingKn": "ಹಂಚಿಕೆಯ ಪೂಲ್ ಮತ್ತು ಮೂರು ಆಯ್ಕೆಕಾರರು",
    "bodyEn": "In a group chat several agents read one shared message pool and something has to choose who speaks next. This part builds that engine with a manager, a coder and a reviewer, and runs the same task under a fixed round-robin order, a context-aware selector and a rule set driven by the task state. It then changes the agent order, tries three ways to stop, feeds the engine a speaker that does not exist, and computes the hot-speaker share and the growth of repeated history.",
    "bodyKn": "ಗ್ರೂಪ್ ಚಾಟ್‌ನಲ್ಲಿ ಹಲವು ಏಜೆಂಟ್‌ಗಳು ಒಂದು ಹಂಚಿಕೆಯ ಸಂದೇಶ ಪೂಲ್ ಓದುತ್ತವೆ ಮತ್ತು ಮುಂದೆ ಯಾರು ಮಾತನಾಡುತ್ತಾರೆ ಎಂದು ಏನಾದರೂ ಆರಿಸಬೇಕು. ಈ ಭಾಗ manager, coder ಮತ್ತು reviewer ಇರುವ ಆ ಎಂಜಿನ್ ಅನ್ನು ನಿರ್ಮಿಸಿ, ಅದೇ ಕೆಲಸವನ್ನು ನಿಗದಿತ round-robin ಕ್ರಮ, ಸಂದರ್ಭ-ಅರಿವಿನ ಆಯ್ಕೆಕಾರ ಮತ್ತು ಕೆಲಸದ ಸ್ಥಿತಿಯಿಂದ ನಡೆಯುವ ನಿಯಮಗಳ ಅಡಿಯಲ್ಲಿ ಓಡಿಸುತ್ತದೆ. ನಂತರ ಏಜೆಂಟ್ ಕ್ರಮ ಬದಲಿಸುತ್ತದೆ, ನಿಲ್ಲಿಸಲು ಮೂರು ದಾರಿ ಪ್ರಯತ್ನಿಸುತ್ತದೆ, ಇಲ್ಲದ ಮಾತನಾಡುವವನನ್ನು ಎಂಜಿನ್‌ಗೆ ನೀಡುತ್ತದೆ, ಮತ್ತು hot-speaker ಪಾಲು ಹಾಗೂ ಪುನರಾವರ್ತಿತ ಇತಿಹಾಸದ ಬೆಳವಣಿಗೆ ಲೆಕ್ಕ ಹಾಕುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "A Shared Conversation",
    "headingKn": "ಹಂಚಿಕೆಯ ಸಂಭಾಷಣೆ",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">the selector is the control plane of a group chat</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">pool</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">shared messages</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">selector</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">picks the speaker</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">manager</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">loop + stop rules</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">trace</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">why each turn</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">the selector is the control plane of a group chat</text></svg>",
    "captionEn": "Every agent reads one pool and a selector decides who speaks next.",
    "captionKn": "ಪ್ರತಿ ಏಜೆಂಟ್ ಒಂದು ಪೂಲ್ ಓದುತ್ತದೆ ಮತ್ತು ಮುಂದೆ ಯಾರು ಮಾತನಾಡುತ್ತಾರೆ ಎಂದು ಆಯ್ಕೆಕಾರ ನಿರ್ಧರಿಸುತ್ತದೆ."
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
      "three selectors",
      "7, 6 and 5 turns"
     ],
     [
      "transcript and trace",
      "the pool and a reason per choice"
     ],
     [
      "agent order",
      "round-robin with three orders"
     ],
     [
      "stopping",
      "token, cap and a silent manager"
     ],
     [
      "invalid speaker",
      "an unknown name from the selector"
     ],
     [
      "hot speaker and cost",
      "70% share and 2525000 tokens"
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
    "filename": "gr_1.py",
    "headingEn": "Messages, state and agents",
    "headingKn": "ಸಂದೇಶಗಳು, ಸ್ಥಿತಿ ಮತ್ತು ಏಜೆಂಟ್‌ಗಳು",
    "descEn": "Message and State hold the pool and the task flags, and the manager, coder and reviewer functions change that state.",
    "descKn": "Message ಮತ್ತು State ಪೂಲ್ ಮತ್ತು ಕೆಲಸದ ಧ್ವಜಗಳನ್ನು ಹಿಡಿದಿವೆ, ಮತ್ತು manager, coder ಹಾಗೂ reviewer ಕಾರ್ಯಗಳು ಆ ಸ್ಥಿತಿ ಬದಲಿಸುತ್ತವೆ.",
    "code": "class Message:\n    speaker: str\n    content: str\n\n\n@dataclass\nclass State:\n    version: int = 0\n    reviewed: bool = False\n    approved: bool = False\n\n\ndef manager(pool, st, turn_index):\n    if st.approved:\n        return \"TERMINATE\"\n    if st.version == 0 and turn_index == 0:\n        return \"Coder should begin implementation.\"\n    return \"Implementation requires review.\"\n\n\ndef coder(pool, st, turn_index):\n    st.version += 1\n    st.reviewed = False\n    return f\"Implemented division function, version {st.version}.\" + (\" Added zero-divisor validation.\" if st.version >= 2 else \"\")\n\n\ndef reviewer(pool, st, turn_index):\n    st.reviewed = True\n    if st.version >= 2:\n        st.approved = True\n        return \"APPROVED: required validation checks are satisfied in this simulation.\"\n    return \"CHANGES_REQUESTED: division by zero is not handled.\"\n\n\nAGENTS = {\"manager\": manager, \"coder\": coder, \"reviewer\": reviewer}"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "gr_1.py",
    "headingEn": "Selectors and the chat loop",
    "headingKn": "ಆಯ್ಕೆಕಾರರು ಮತ್ತು ಚಾಟ್ ಲೂಪ್",
    "descEn": "RoundRobin, ContextAware and StateRules choose speakers, and run_chat validates the choice, appends the message and stops on a token or the round cap.",
    "descKn": "RoundRobin, ContextAware ಮತ್ತು StateRules ಮಾತನಾಡುವವರನ್ನು ಆರಿಸುತ್ತವೆ, ಮತ್ತು run_chat ಆಯ್ಕೆ ಮಾನ್ಯಗೊಳಿಸಿ ಸಂದೇಶ ಸೇರಿಸಿ token ಅಥವಾ ಸುತ್ತು ಮಿತಿಯಲ್ಲಿ ನಿಲ್ಲುತ್ತದೆ.",
    "code": "class RoundRobin:\n    name = \"round_robin\"\n\n    def __init__(self, order):\n        self.order, self.i = order, 0\n\n    def select(self, pool, st):\n        s = self.order[self.i % len(self.order)]\n        self.i += 1\n        return s, \"next in fixed order\"\n\n\nclass ContextAware:\n    name = \"context_aware\"\n\n    def select(self, pool, st):\n        last = pool[-1].speaker\n        if last == \"user\":\n            return \"manager\", \"start with the manager\"\n        if last == \"manager\":\n            return \"coder\", \"manager asked for implementation\"\n        if last == \"coder\":\n            return \"reviewer\", \"new code needs review\"\n        if last == \"reviewer\":\n            return (\"manager\", \"approved, let the manager close\") if st.approved else (\"coder\", \"changes requested\")\n        return \"manager\", \"default\"\n\n\nclass StateRules:\n    name = \"state_rules\"\n\n    def select(self, pool, st):\n        if st.version == 0:\n            return \"coder\", \"implementation missing\"\n        if not st.reviewed:\n            return \"reviewer\", \"review incomplete\"\n        if not st.approved:\n            return \"coder\", \"changes requested\"\n        return \"manager\", \"review passed\"\n\n\ndef run_chat(selector, max_rounds=12, token=\"TERMINATE\", agents=AGENTS):\n    pool = [Message(\"user\", \"Implement safe division with zero-divisor validation.\")]\n    st, trace = State(), []\n    for turn in range(max_rounds):\n        who, why = selector.select(pool, st)\n        if who not in agents:\n            trace.append((turn, who, \"INVALID\"))\n            return {\"pool\": pool, \"trace\": trace, \"stop\": f\"invalid speaker {who!r}\", \"state\": st}\n        text = agents[who](pool, st, turn)\n        pool.append(Message(who, text))\n        trace.append((turn, who, why))\n        if token in text:\n            return {\"pool\": pool, \"trace\": trace, \"stop\": \"termination token\", \"state\": st}\n    return {\"pool\": pool, \"trace\": trace, \"stop\": \"max rounds reached\", \"state\": st}"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "gr_1.py",
    "headingEn": "The experiments",
    "headingKn": "ಪ್ರಯೋಗಗಳು",
    "descEn": "main() runs the six experiments in order and prints the real result of each.",
    "descKn": "main() ಆರು ಪ್ರಯೋಗಗಳನ್ನು ಕ್ರಮವಾಗಿ ಓಡಿಸಿ ಪ್ರತಿಯೊಂದರ ನಿಜ ಫಲಿತಾಂಶ ಮುದ್ರಿಸುತ್ತದೆ.",
    "code": "def main():\n    section(\"1. Genuinely running: three selectors on the same task\")\n    results = {}\n    for sel in (RoundRobin([\"manager\", \"coder\", \"reviewer\"]), ContextAware(), StateRules()):\n        r = run_chat(sel)\n        results[sel.name] = r\n        seq = [t[1] for t in r[\"trace\"]]\n        print(f\"{sel.name:<14} turns={len(seq)} approved={r['state'].approved} stop={r['stop']}\")\n        print(\"   \", \" > \".join(seq))\n    print(\"the same three scripted agents finish in 7 turns under round-robin, 6 under the context-aware selector and 5 under the state rules, and in all three the reviewer approves version 2; round-robin spends a turn on a manager remark that changes nothing, and these counts belong to this toy task and its scripted agents, so they are not a benchmark of real selectors.\")\n\n    section(\"2. Genuinely running: the transcript and the decision trace\")\n    r = results[\"context_aware\"]\n    for i, m in enumerate(r[\"pool\"], 1):\n        print(f\"{i:02d} [{m.speaker}] {m.content}\")\n    print([(t[1], t[2]) for t in r[\"trace\"]][:3])\n    print(\"the pool is an ordered list that every agent can read, the user message sits first, and the trace stores a reason next to every choice so a surprising speaker can be explained afterwards; the reasons here are written by the selector's own rules, which a real model-based selector would have to supply and could get wrong.\")\n\n    section(\"3. Genuinely running: the same selector with a different agent order\")\n    for order in ([\"manager\", \"coder\", \"reviewer\"], [\"reviewer\", \"coder\", \"manager\"], [\"coder\", \"reviewer\", \"manager\"]):\n        r = run_chat(RoundRobin(order), max_rounds=12)\n        print(order, \"-> turns\", len(r[\"trace\"]), \"| approved:\", r[\"state\"].approved, \"| stop:\", r[\"stop\"])\n    print(\"round-robin reaches approval in every order here but takes 7, 9 and 6 turns for the three orders, and starting with the reviewer costs the most because its first review has no code to look at and the reviewer's CHANGES_REQUESTED answer is produced anyway; a fixed order encodes an assumption about how the task flows, and when the flow changes the order does not adapt.\")\n\n    section(\"4. Genuinely running: three ways to stop\")\n    r_token = run_chat(StateRules())\n    r_cap = run_chat(StateRules(), max_rounds=3)\n    silent = {\"manager\": lambda p, s, t: \"Implementation requires review.\", \"coder\": AGENTS[\"coder\"], \"reviewer\": AGENTS[\"reviewer\"]}\n    r_loop = run_chat(RoundRobin([\"manager\"]), max_rounds=5, agents=silent)\n    print(\"with the termination token:\", r_token[\"stop\"], len(r_token[\"trace\"]), \"turns | cap of 3 rounds:\", r_cap[\"stop\"], \"approved:\", r_cap[\"state\"].approved, \"| a manager that never terminates:\", r_loop[\"stop\"], len(r_loop[\"trace\"]), \"turns\")\n    print(\"the token ends the chat after the manager says TERMINATE, the cap of 3 rounds stops it before the reviewer ever approves, and a manager that never says the token runs until the cap; stopping and succeeding are different events, so a chat that ended on max rounds must not be reported as a finished task.\")\n\n    section(\"5. Genuinely running: a selector that names a speaker who does not exist\")\n\n    class Bad:\n        name = \"bad\"\n\n        def select(self, pool, st):\n            return \"architect\", \"the model hallucinated a role\"\n    r = run_chat(Bad())\n    print(\"stop:\", r[\"stop\"], \"| turns taken:\", len(r[\"trace\"]), \"| messages in pool:\", len(r[\"pool\"]))\n    print(\"the chat stops on the first turn with an explicit invalid-speaker reason and adds no message to the pool, instead of crashing or silently picking someone; a selector's answer is untrusted output and has to be checked against the list of real agents before it is used.\")\n\n    section(\"6. Genuinely computing: hot speakers and context growth\")\n    speakers = [\"coder\", \"coder\", \"coder\", \"reviewer\", \"coder\", \"coder\", \"manager\", \"coder\", \"reviewer\", \"coder\"]\n    c = Counter(speakers)\n    for k, v in c.most_common():\n        print(f\"{k}: {v} turns, {100 * v / len(speakers):.1f}%\")\n    T, L = 100, 500\n    print(\"history after 100 turns of 500 tokens:\", T * L, \"| tokens processed if the full history is re-sent every turn:\", L * T * (T + 1) // 2)\n    print(\"the coder holds 70% of the ten turns, which is a reason to look at the selector and not by itself an error, and a hundred turns of 500 tokens build a 50000-token history whose repeated full re-sending adds up to 2525000 tokens; the second figure is a simple model of re-sending everything and real systems that truncate or summarise would cost less.\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: three selectors on the same task ---\nround_robin    turns=7 approved=True stop=termination token\n    manager > coder > reviewer > manager > coder > reviewer > manager\ncontext_aware  turns=6 approved=True stop=termination token\n    manager > coder > reviewer > coder > reviewer > manager\nstate_rules    turns=5 approved=True stop=termination token\n    coder > reviewer > coder > reviewer > manager\nthe same three scripted agents finish in 7 turns under round-robin, 6 under the context-aware selector and 5 under the state rules, and in all three the reviewer approves version 2; round-robin spends a turn on a manager remark that changes nothing, and these counts belong to this toy task and its scripted agents, so they are not a benchmark of real selectors.\n\n--- 2. Genuinely running: the transcript and the decision trace ---\n01 [user] Implement safe division with zero-divisor validation.\n02 [manager] Coder should begin implementation.\n03 [coder] Implemented division function, version 1.\n04 [reviewer] CHANGES_REQUESTED: division by zero is not handled.\n05 [coder] Implemented division function, version 2. Added zero-divisor validation.\n06 [reviewer] APPROVED: required validation checks are satisfied in this simulation.\n07 [manager] TERMINATE\n[('manager', 'start with the manager'), ('coder', 'manager asked for implementation'), ('reviewer', 'new code needs review')]\nthe pool is an ordered list that every agent can read, the user message sits first, and the trace stores a reason next to every choice so a surprising speaker can be explained afterwards; the reasons here are written by the selector's own rules, which a real model-based selector would have to supply and could get wrong.\n\n--- 3. Genuinely running: the same selector with a different agent order ---\n['manager', 'coder', 'reviewer'] -> turns 7 | approved: True | stop: termination token\n['reviewer', 'coder', 'manager'] -> turns 9 | approved: True | stop: termination token\n['coder', 'reviewer', 'manager'] -> turns 6 | approved: True | stop: termination token\nround-robin reaches approval in every order here but takes 7, 9 and 6 turns for the three orders, and starting with the reviewer costs the most because its first review has no code to look at and the reviewer's CHANGES_REQUESTED answer is produced anyway; a fixed order encodes an assumption about how the task flows, and when the flow changes the order does not adapt.\n\n--- 4. Genuinely running: three ways to stop ---\nwith the termination token: termination token 5 turns | cap of 3 rounds: max rounds reached approved: False | a manager that never terminates: max rounds reached 5 turns\nthe token ends the chat after the manager says TERMINATE, the cap of 3 rounds stops it before the reviewer ever approves, and a manager that never says the token runs until the cap; stopping and succeeding are different events, so a chat that ended on max rounds must not be reported as a finished task.\n\n--- 5. Genuinely running: a selector that names a speaker who does not exist ---\nstop: invalid speaker 'architect' | turns taken: 1 | messages in pool: 1\nthe chat stops on the first turn with an explicit invalid-speaker reason and adds no message to the pool, instead of crashing or silently picking someone; a selector's answer is untrusted output and has to be checked against the list of real agents before it is used.\n\n--- 6. Genuinely computing: hot speakers and context growth ---\ncoder: 7 turns, 70.0%\nreviewer: 2 turns, 20.0%\nmanager: 1 turns, 10.0%\nhistory after 100 turns of 500 tokens: 50000 | tokens processed if the full history is re-sent every turn: 2525000\nthe coder holds 70% of the ten turns, which is a reason to look at the selector and not by itself an error, and a hundred turns of 500 tokens build a 50000-token history whose repeated full re-sending adds up to 2525000 tokens; the second figure is a simple model of re-sending everything and real systems that truncate or summarise would cost less."
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
    "headingEn": "Experiment 1: Three selectors on the same task",
    "headingKn": "ಪ್ರಯೋಗ 1: Three selectors on the same task",
    "bodyEn": "What it ran: Three selectors on the same task. What the lab concluded: the same three scripted agents finish in 7 turns under round-robin, 6 under the context-aware selector and 5 under the state rules, and in all three the reviewer approves version 2; round-robin spends a turn on a manager remark that changes nothing, and these counts belong to this toy task and its scripted agents, so they are not a benchmark of real selectors.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Three selectors on the same task. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the same three scripted agents finish in 7 turns under round-robin, 6 under the context-aware selector and 5 under the state rules, and in all three the reviewer approves version 2; round-robin spends a turn on a manager remark that changes nothing, and these counts belong to this toy task and its scripted agents, so they are not a benchmark of real selectors."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. Genuinely running: three selectors on the same task ---\nround_robin    turns=7 approved=True stop=termination token\n    manager > coder > reviewer > manager > coder > reviewer > manager\ncontext_aware  turns=6 approved=True stop=termination token\n    manager > coder > reviewer > coder > reviewer > manager\nstate_rules    turns=5 approved=True stop=termination token\n    coder > reviewer > coder > reviewer > manager"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: The transcript and the decision trace",
    "headingKn": "ಪ್ರಯೋಗ 2: The transcript and the decision trace",
    "bodyEn": "What it ran: The transcript and the decision trace. What the lab concluded: the pool is an ordered list that every agent can read, the user message sits first, and the trace stores a reason next to every choice so a surprising speaker can be explained afterwards; the reasons here are written by the selector's own rules, which a real model-based selector would have to supply and could get wrong.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: The transcript and the decision trace. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the pool is an ordered list that every agent can read, the user message sits first, and the trace stores a reason next to every choice so a surprising speaker can be explained afterwards; the reasons here are written by the selector's own rules, which a real model-based selector would have to supply and could get wrong."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely running: the transcript and the decision trace ---\n01 [user] Implement safe division with zero-divisor validation.\n02 [manager] Coder should begin implementation.\n03 [coder] Implemented division function, version 1.\n04 [reviewer] CHANGES_REQUESTED: division by zero is not handled.\n05 [coder] Implemented division function, version 2. Added zero-divisor validation.\n06 [reviewer] APPROVED: required validation checks are satisfied in this simulation.\n07 [manager] TERMINATE\n[('manager', 'start with the manager'), ('coder', 'manager asked for implementation'), ('reviewer', 'new code needs review')]"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: The same selector with a different agent order",
    "headingKn": "ಪ್ರಯೋಗ 3: The same selector with a different agent order",
    "bodyEn": "What it ran: The same selector with a different agent order. What the lab concluded: round-robin reaches approval in every order here but takes 7, 9 and 6 turns for the three orders, and starting with the reviewer costs the most because its first review has no code to look at and the reviewer's CHANGES_REQUESTED answer is produced anyway; a fixed order encodes an assumption about how the task flows, and when the flow changes the order does not adapt.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: The same selector with a different agent order. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): round-robin reaches approval in every order here but takes 7, 9 and 6 turns for the three orders, and starting with the reviewer costs the most because its first review has no code to look at and the reviewer's CHANGES_REQUESTED answer is produced anyway; a fixed order encodes an assumption about how the task flows, and when the flow changes the order does not adapt."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely running: the same selector with a different agent order ---\n['manager', 'coder', 'reviewer'] -> turns 7 | approved: True | stop: termination token\n['reviewer', 'coder', 'manager'] -> turns 9 | approved: True | stop: termination token\n['coder', 'reviewer', 'manager'] -> turns 6 | approved: True | stop: termination token"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 4: Three ways to stop",
    "headingKn": "ಪ್ರಯೋಗ 4: Three ways to stop",
    "bodyEn": "What it ran: Three ways to stop. What the lab concluded: the token ends the chat after the manager says TERMINATE, the cap of 3 rounds stops it before the reviewer ever approves, and a manager that never says the token runs until the cap; stopping and succeeding are different events, so a chat that ended on max rounds must not be reported as a finished task.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Three ways to stop. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the token ends the chat after the manager says TERMINATE, the cap of 3 rounds stops it before the reviewer ever approves, and a manager that never says the token runs until the cap; stopping and succeeding are different events, so a chat that ended on max rounds must not be reported as a finished task."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 4. Genuinely running: three ways to stop ---\nwith the termination token: termination token 5 turns | cap of 3 rounds: max rounds reached approved: False | a manager that never terminates: max rounds reached 5 turns"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 5: A selector that names a speaker who does not exist",
    "headingKn": "ಪ್ರಯೋಗ 5: A selector that names a speaker who does not exist",
    "bodyEn": "What it ran: A selector that names a speaker who does not exist. What the lab concluded: the chat stops on the first turn with an explicit invalid-speaker reason and adds no message to the pool, instead of crashing or silently picking someone; a selector's answer is untrusted output and has to be checked against the list of real agents before it is used.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A selector that names a speaker who does not exist. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the chat stops on the first turn with an explicit invalid-speaker reason and adds no message to the pool, instead of crashing or silently picking someone; a selector's answer is untrusted output and has to be checked against the list of real agents before it is used."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 5. Genuinely running: a selector that names a speaker who does not exist ---\nstop: invalid speaker 'architect' | turns taken: 1 | messages in pool: 1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 6: Hot speakers and context growth",
    "headingKn": "ಪ್ರಯೋಗ 6: Hot speakers and context growth",
    "bodyEn": "What it ran: Hot speakers and context growth. What the lab concluded: the coder holds 70% of the ten turns, which is a reason to look at the selector and not by itself an error, and a hundred turns of 500 tokens build a 50000-token history whose repeated full re-sending adds up to 2525000 tokens; the second figure is a simple model of re-sending everything and real systems that truncate or summarise would cost less.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Hot speakers and context growth. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the coder holds 70% of the ten turns, which is a reason to look at the selector and not by itself an error, and a hundred turns of 500 tokens build a 50000-token history whose repeated full re-sending adds up to 2525000 tokens; the second figure is a simple model of re-sending everything and real systems that truncate or summarise would cost less."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 6. Genuinely computing: hot speakers and context growth ---\ncoder: 7 turns, 70.0%\nreviewer: 2 turns, 20.0%\nmanager: 1 turns, 10.0%\nhistory after 100 turns of 500 tokens: 50000 | tokens processed if the full history is re-sent every turn: 2525000"
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
    "headingEn": "Genuinely Found: Same Task, Three Turn Counts",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಅದೇ ಕೆಲಸ, ಮೂರು ಸುತ್ತು ಎಣಿಕೆಗಳು",
    "bodyEn": "Section 1: round-robin took 7 turns, the context-aware selector 6 and the state rules 5, and all three ended with the reviewer approving version 2. Section 3: round-robin took 7, 9 and 6 turns for the three agent orders.",
    "bodyKn": "ವಿಭಾಗ 1: round-robin 7 ಸುತ್ತು, ಸಂದರ್ಭ-ಅರಿವಿನ ಆಯ್ಕೆಕಾರ 6 ಮತ್ತು ಸ್ಥಿತಿ ನಿಯಮಗಳು 5 ತೆಗೆದುಕೊಂಡವು, ಮತ್ತು ಮೂರೂ reviewer ಆವೃತ್ತಿ 2 ಒಪ್ಪುವುದರೊಂದಿಗೆ ಮುಗಿದವು. ವಿಭಾಗ 3: ಮೂರು ಏಜೆಂಟ್ ಕ್ರಮಗಳಿಗೆ round-robin 7, 9 ಮತ್ತು 6 ಸುತ್ತು ತೆಗೆದುಕೊಂಡಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Stopping Is Not Finishing",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ನಿಲ್ಲುವುದು ಮುಗಿಸುವುದಲ್ಲ",
    "bodyEn": "Section 4: the token ended the chat in 5 turns, a cap of 3 rounds ended it with approved False, and a manager that never terminated ran 5 turns to the cap. Section 5: a selector that named architect stopped the chat with \"invalid speaker architect\" after 1 turn and 1 message in the pool.",
    "bodyKn": "ವಿಭಾಗ 4: token ಚಾಟ್ ಅನ್ನು 5 ಸುತ್ತುಗಳಲ್ಲಿ ಮುಗಿಸಿತು, 3 ಸುತ್ತು ಮಿತಿ approved False ನೊಂದಿಗೆ ಮುಗಿಸಿತು, ಮತ್ತು ಎಂದೂ ಮುಕ್ತಾಯಗೊಳಿಸದ manager ಮಿತಿಯವರೆಗೆ 5 ಸುತ್ತು ಓಡಿತು. ವಿಭಾಗ 5: architect ಎಂದು ಹೆಸರಿಸಿದ ಆಯ್ಕೆಕಾರ 1 ಸುತ್ತಿನ ನಂತರ \"invalid speaker architect\" ನೊಂದಿಗೆ ಚಾಟ್ ನಿಲ್ಲಿಸಿತು ಮತ್ತು ಪೂಲ್‌ನಲ್ಲಿ 1 ಸಂದೇಶ ಇತ್ತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Hot Speakers and History Cost",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Hot speakers ಮತ್ತು ಇತಿಹಾಸ ವೆಚ್ಚ",
    "bodyEn": "Section 6: coder 7 turns 70.0%, reviewer 2 turns 20.0% and manager 1 turn 10.0%. A history of 100 turns of 500 tokens is 50000 tokens, and re-sending the full history every turn adds up to 2525000 tokens.",
    "bodyKn": "ವಿಭಾಗ 6: coder 7 ಸುತ್ತು 70.0%, reviewer 2 ಸುತ್ತು 20.0% ಮತ್ತು manager 1 ಸುತ್ತು 10.0%. 500 tokens ನ 100 ಸುತ್ತುಗಳ ಇತಿಹಾಸ 50000 tokens, ಮತ್ತು ಪ್ರತಿ ಸುತ್ತು ಪೂರ್ಣ ಇತಿಹಾಸ ಮರುಕಳುಹಿಸಿದರೆ ಒಟ್ಟು 2525000 tokens."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "The speaker selector decides what the group sees, who checks whom and when the chat ends, so it is a control component that needs a reason for every choice, a check on its answer and a stop rule that is separate from success.",
    "bodyKn": "ಮಾತನಾಡುವವರ ಆಯ್ಕೆಕಾರ ಗುಂಪು ಏನು ನೋಡುತ್ತದೆ, ಯಾರು ಯಾರನ್ನು ಪರಿಶೀಲಿಸುತ್ತಾರೆ ಮತ್ತು ಚಾಟ್ ಯಾವಾಗ ಮುಗಿಯುತ್ತದೆ ಎಂದು ನಿರ್ಧರಿಸುತ್ತದೆ, ಆದ್ದರಿಂದ ಅದು ಪ್ರತಿ ಆಯ್ಕೆಗೆ ಕಾರಣ, ಅದರ ಉತ್ತರದ ಮೇಲೆ ಪರಿಶೀಲನೆ ಮತ್ತು ಯಶಸ್ಸಿನಿಂದ ಬೇರೆಯಾದ ನಿಲ್ಲಿಸುವ ನಿಯಮ ಬೇಕಾದ ನಿಯಂತ್ರಣ ಘಟಕ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"a chat that ended is a task that finished.\" The cap of 3 rounds ended the chat with approved False.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಮುಗಿದ ಚಾಟ್ ಎಂದರೆ ಮುಗಿದ ಕೆಲಸ.\" 3 ಸುತ್ತು ಮಿತಿ ಚಾಟ್ ಅನ್ನು approved False ನೊಂದಿಗೆ ಮುಗಿಸಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Message pool: the shared ordered conversation. Speaker selector: the rule or model that picks the next speaker. Termination token: a word that ends the chat. Hot speaker: an agent that gets most of the turns. Decision trace: the recorded reason for each selection.",
    "bodyKn": "ಸಂದೇಶ ಪೂಲ್: ಹಂಚಿಕೆಯ ಕ್ರಮಬದ್ಧ ಸಂಭಾಷಣೆ. ಮಾತನಾಡುವವರ ಆಯ್ಕೆಕಾರ: ಮುಂದಿನ ಮಾತನಾಡುವವನನ್ನು ಆರಿಸುವ ನಿಯಮ ಅಥವಾ ಮಾದರಿ. ಮುಕ್ತಾಯ token: ಚಾಟ್ ಮುಗಿಸುವ ಪದ. Hot speaker: ಹೆಚ್ಚಿನ ಸುತ್ತುಗಳನ್ನು ಪಡೆಯುವ ಏಜೆಂಟ್. ನಿರ್ಧಾರ ಜಾಡು: ಪ್ರತಿ ಆಯ್ಕೆಯ ದಾಖಲಿತ ಕಾರಣ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) The same task took 7, 6 and 5 turns under three selectors. 2) Round-robin order changed the count to 7, 9 and 6. 3) A cap of 3 rounds stopped the chat before approval. 4) An invalid speaker stopped the chat with a reason. 5) The coder held 70% of the turns.",
    "bodyKn": "1) ಅದೇ ಕೆಲಸ ಮೂರು ಆಯ್ಕೆಕಾರರ ಅಡಿಯಲ್ಲಿ 7, 6 ಮತ್ತು 5 ಸುತ್ತು ತೆಗೆದುಕೊಂಡಿತು. 2) round-robin ಕ್ರಮ ಎಣಿಕೆಯನ್ನು 7, 9 ಮತ್ತು 6 ಕ್ಕೆ ಬದಲಿಸಿತು. 3) 3 ಸುತ್ತು ಮಿತಿ ಅನುಮೋದನೆಗೆ ಮೊದಲು ಚಾಟ್ ನಿಲ್ಲಿಸಿತು. 4) ಅಮಾನ್ಯ ಮಾತನಾಡುವವ ಕಾರಣದೊಂದಿಗೆ ಚಾಟ್ ನಿಲ್ಲಿಸಿದ. 5) coder 70% ಸುತ್ತುಗಳನ್ನು ಹೊಂದಿತ್ತು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "How many turns did the state rules need?",
      "qKn": "ಸ್ಥಿತಿ ನಿಯಮಗಳಿಗೆ ಎಷ್ಟು ಸುತ್ತು ಬೇಕಾಯಿತು?",
      "opts": [
       "5",
       "6",
       "7",
       "9"
      ],
      "optsKn": [
       "5",
       "6",
       "7",
       "9"
      ],
      "correct": 0
     },
     {
      "q": "How many turns did round-robin take when the reviewer was listed first?",
      "qKn": "reviewer ಮೊದಲು ಪಟ್ಟಿಯಾದಾಗ round-robin ಎಷ್ಟು ಸುತ್ತು ತೆಗೆದುಕೊಂಡಿತು?",
      "opts": [
       "9",
       "7",
       "6",
       "5"
      ],
      "optsKn": [
       "9",
       "7",
       "6",
       "5"
      ],
      "correct": 0
     },
     {
      "q": "Was the task approved when the cap was 3 rounds?",
      "qKn": "ಮಿತಿ 3 ಸುತ್ತು ಇದ್ದಾಗ ಕೆಲಸ ಅನುಮೋದನೆಯಾಯಿತೇ?",
      "opts": [
       "no, approved was False",
       "yes",
       "only the code",
       "it was not recorded"
      ],
      "optsKn": [
       "ಇಲ್ಲ, approved False ಆಗಿತ್ತು",
       "ಹೌದು",
       "ಕೋಡ್ ಮಾತ್ರ",
       "ದಾಖಲಾಗಲಿಲ್ಲ"
      ],
      "correct": 0
     },
     {
      "q": "What share of the ten turns did the coder hold?",
      "qKn": "ಹತ್ತು ಸುತ್ತುಗಳಲ್ಲಿ coder ಎಷ್ಟು ಪಾಲು ಹೊಂದಿತ್ತು?",
      "opts": [
       "70%",
       "50%",
       "20%",
       "10%"
      ],
      "optsKn": [
       "70%",
       "50%",
       "20%",
       "10%"
      ],
      "correct": 0
     },
     {
      "q": "How many tokens does re-sending the full history for 100 turns of 500 add up to?",
      "qKn": "500 ರ 100 ಸುತ್ತುಗಳಿಗೆ ಪೂರ್ಣ ಇತಿಹಾಸ ಮರುಕಳುಹಿಸಿದರೆ ಒಟ್ಟು ಎಷ್ಟು tokens?",
      "opts": [
       "2525000",
       "50000",
       "500000",
       "250000"
      ],
      "optsKn": [
       "2525000",
       "50000",
       "500000",
       "250000"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
