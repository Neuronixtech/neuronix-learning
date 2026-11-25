module.exports = {
 "phaseId": "6a369d6466020ed05b3215d1",
 "moduleId": "6a369d6566020ed05b3215f2",
 "order": 1,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Group Chat and Speaker Selection (Part 2 of 3) — Terminated Is Not Completed",
 "titleKn": "ಗ್ರೂಪ್ ಚಾಟ್ ಮತ್ತು ಮಾತನಾಡುವವರ ಆಯ್ಕೆ (ಭಾಗ 2 / 3) — ಮುಕ್ತಾಯ ಎಂದರೆ ಪೂರ್ಣಗೊಳಿಕೆಯಲ್ಲ",
 "desc": "Break a group-chat engine on purpose and separate termination from completion with task state and tests.",
 "descKn": "ಗ್ರೂಪ್-ಚಾಟ್ ಎಂಜಿನ್ ಅನ್ನು ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ಮುರಿದು ಕೆಲಸದ ಸ್ಥಿತಿ ಮತ್ತು ಪರೀಕ್ಷೆಗಳಿಂದ ಮುಕ್ತಾಯ ಮತ್ತು ಪೂರ್ಣಗೊಳಿಕೆ ಬೇರ್ಪಡಿಸಿ.",
 "objectives": [
  "Track task state.",
  "Separate stop from done.",
  "Validate selections.",
  "Spot empty agreement.",
  "Test the engine."
 ],
 "objectivesKn": [
  "ಕೆಲಸದ ಸ್ಥಿತಿ ಗಮನಿಸಿ.",
  "ನಿಲ್ಲುವುದು ಮತ್ತು ಮುಗಿಯುವುದು ಬೇರ್ಪಡಿಸಿ.",
  "ಆಯ್ಕೆಗಳನ್ನು ಮಾನ್ಯಗೊಳಿಸಿ.",
  "ಖಾಲಿ ಒಪ್ಪಿಗೆ ಗುರುತಿಸಿ.",
  "ಎಂಜಿನ್ ಪರೀಕ್ಷಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Group Chat and Speaker Selection (Part 2 of 3)",
    "textKn": "ಗ್ರೂಪ್ ಚಾಟ್ ಮತ್ತು ಮಾತನಾಡುವವರ ಆಯ್ಕೆ (ಭಾಗ 2 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 2 of 3: a state-driven chat engine, termination against completion, a round cap, selector validation, a sycophancy cascade and unit tests of the engine. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind a shared message pool with round-robin, context-aware and state-rule speaker selectors, termination against completion, selector validation, a sycophancy cascade, a hybrid selector, fairness, role projections, loop detection, a verification gate with real test execution and untrusted-message handling, not the real software, and agents and selectors are scripted functions, the LLM recommendation is a literal string, the state flags are set by the scripted agents themselves, the only real execution is a unittest subprocess on a tiny temporary module, and no AutoGen or real model is used, so no real LLM behaviour is measured. The original code/main.py was not supplied, so the labs are our own implementation. AutoGen, AG2 and Microsoft Agent Framework are described in the lesson and were not run, and the lesson Part 3 paste ends at its section 28. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 2ನೆಯದು: ಸ್ಥಿತಿ-ಚಾಲಿತ ಚಾಟ್ ಎಂಜಿನ್, ಪೂರ್ಣಗೊಳಿಕೆಗೆ ವಿರುದ್ಧ ಮುಕ್ತಾಯ, ಸುತ್ತು ಮಿತಿ, ಆಯ್ಕೆಕಾರ ಮಾನ್ಯತೆ, sycophancy ಕ್ಯಾಸ್ಕೇಡ್ ಮತ್ತು ಎಂಜಿನ್‌ನ ಯೂನಿಟ್ ಪರೀಕ್ಷೆಗಳು. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು round-robin, ಸಂದರ್ಭ-ಅರಿವಿನ ಮತ್ತು ಸ್ಥಿತಿ-ನಿಯಮ ಮಾತನಾಡುವವರ ಆಯ್ಕೆಕಾರರಿರುವ ಹಂಚಿಕೆಯ ಸಂದೇಶ ಪೂಲ್, ಪೂರ್ಣಗೊಳಿಕೆಗೆ ವಿರುದ್ಧ ಮುಕ್ತಾಯ, ಆಯ್ಕೆಕಾರ ಮಾನ್ಯತೆ, sycophancy ಕ್ಯಾಸ್ಕೇಡ್, ಹೈಬ್ರಿಡ್ ಆಯ್ಕೆಕಾರ, ನ್ಯಾಯಸಮ್ಮತತೆ, ಪಾತ್ರ ಪ್ರೊಜೆಕ್ಷನ್‌ಗಳು, ಲೂಪ್ ಪತ್ತೆ, ನಿಜ ಪರೀಕ್ಷೆ ಓಡಿಸುವ ಪರಿಶೀಲನೆ ದ್ವಾರ ಮತ್ತು ನಂಬಲರ್ಹವಲ್ಲದ ಸಂದೇಶ ನಿರ್ವಹಣೆ ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಏಜೆಂಟ್‌ಗಳು ಮತ್ತು ಆಯ್ಕೆಕಾರರು ಸ್ಕ್ರಿಪ್ಟ್ ಕಾರ್ಯಗಳು, LLM ಶಿಫಾರಸು ಅಕ್ಷರಶಃ ಸ್ಟ್ರಿಂಗ್, ಸ್ಥಿತಿ ಧ್ವಜಗಳನ್ನು ಸ್ಕ್ರಿಪ್ಟ್ ಏಜೆಂಟ್‌ಗಳೇ ಹೊಂದಿಸುತ್ತವೆ, ಏಕೈಕ ನಿಜ ಕಾರ್ಯಗತಗೊಳಿಕೆ ಚಿಕ್ಕ ತಾತ್ಕಾಲಿಕ module ಮೇಲಿನ unittest subprocess, ಮತ್ತು AutoGen ಅಥವಾ ನಿಜ ಮಾದರಿ ಬಳಸಲಾಗಿಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ code/main.py ನೀಡಲಾಗಿಲ್ಲ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ನಮ್ಮದೇ ಅನುಷ್ಠಾನ. AutoGen, AG2 ಮತ್ತು Microsoft Agent Framework lesson ನಲ್ಲಿ ವಿವರಿಸಲ್ಪಟ್ಟಿವೆ ಮತ್ತು ಓಡಿಸಲಾಗಿಲ್ಲ, ಮತ್ತು lesson ನ ಭಾಗ 3 paste ಅದರ ವಿಭಾಗ 28 ರಲ್ಲಿ ಮುಗಿಯುತ್ತದೆ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "A Chat Can End Without the Work Being Done",
    "textKn": "ಕೆಲಸ ಮುಗಿಯದೆಯೇ ಚಾಟ್ ಮುಗಿಯಬಹುದು",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "A State-Driven Engine and Its Failure Cases",
    "headingKn": "ಸ್ಥಿತಿ-ಚಾಲಿತ ಎಂಜಿನ್ ಮತ್ತು ಅದರ ವೈಫಲ್ಯ ಪ್ರಕರಣಗಳು",
    "bodyEn": "This part gives the engine a task state with flags for the version, the zero-divisor handling, the review and the approval, and a selector that routes by that state. It then breaks the engine on purpose: a manager that says TERMINATE too early, a selector that never leaves the coder, a speaker name that does not exist, and two agents that agree with each other without evidence. It ends with unit tests of the engine itself.",
    "bodyKn": "ಈ ಭಾಗ ಎಂಜಿನ್‌ಗೆ ಆವೃತ್ತಿ, zero-divisor ನಿರ್ವಹಣೆ, ವಿಮರ್ಶೆ ಮತ್ತು ಅನುಮೋದನೆಗೆ ಧ್ವಜಗಳಿರುವ ಕೆಲಸದ ಸ್ಥಿತಿ ಮತ್ತು ಆ ಸ್ಥಿತಿಯಿಂದ ಮಾರ್ಗ ನಿರ್ದೇಶಿಸುವ ಆಯ್ಕೆಕಾರ ನೀಡುತ್ತದೆ. ನಂತರ ಎಂಜಿನ್ ಅನ್ನು ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ಮುರಿಯುತ್ತದೆ: ತುಂಬಾ ಬೇಗ TERMINATE ಹೇಳುವ manager, coder ಬಿಟ್ಟು ಹೊರಡದ ಆಯ್ಕೆಕಾರ, ಇಲ್ಲದ ಮಾತನಾಡುವವನ ಹೆಸರು, ಮತ್ತು ಸಾಕ್ಷಿಯಿಲ್ಲದೆ ಪರಸ್ಪರ ಒಪ್ಪುವ ಎರಡು ಏಜೆಂಟ್‌ಗಳು. ಕೊನೆಯಲ್ಲಿ ಎಂಜಿನ್‌ನ ಯೂನಿಟ್ ಪರೀಕ್ಷೆಗಳು."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Terminated Versus Completed",
    "headingKn": "ಮುಕ್ತಾಯ ಮತ್ತು ಪೂರ್ಣಗೊಳಿಕೆ",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">ending the chat and finishing the task are two checks</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">state</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">flags set by agents</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">select</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">by state</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">terminate</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">is not complete</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">evidence</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">agreement is not</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">ending the chat and finishing the task are two checks</text></svg>",
    "captionEn": "The token stops the chat; a separate check decides whether the task is done.",
    "captionKn": "token ಚಾಟ್ ನಿಲ್ಲಿಸುತ್ತದೆ; ಕೆಲಸ ಮುಗಿದಿದೆಯೇ ಎಂದು ಪ್ರತ್ಯೇಕ ಪರಿಶೀಲನೆ ನಿರ್ಧರಿಸುತ್ತದೆ."
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
      "state-driven chat",
      "finishes in 5 agent turns"
     ],
     [
      "early terminate",
      "stopped, not complete"
     ],
     [
      "coder-only selector",
      "cap reached at version 4"
     ],
     [
      "invalid speaker",
      "refused with a reason"
     ],
     [
      "sycophancy",
      "agreement with no evidence"
     ],
     [
      "unit tests",
      "3 tests, 0 failures"
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
    "filename": "gr_2.py",
    "headingEn": "State and agents",
    "headingKn": "ಸ್ಥಿತಿ ಮತ್ತು ಏಜೆಂಟ್‌ಗಳು",
    "descEn": "TaskState holds the flags, the coder, reviewer and two managers change them, and completed requires all of the flags together.",
    "descKn": "TaskState ಧ್ವಜಗಳನ್ನು ಹಿಡಿದಿದೆ, coder, reviewer ಮತ್ತು ಎರಡು manager ಗಳು ಅವನ್ನು ಬದಲಿಸುತ್ತವೆ, ಮತ್ತು completed ಎಲ್ಲಾ ಧ್ವಜಗಳು ಒಟ್ಟಿಗೆ ಬೇಕು.",
    "code": "class TaskState:\n    version: int = 0\n    handles_zero: bool = False\n    review_passed: bool = False\n    approved: bool = False\n    evidence: list = field(default_factory=list)\n\n\ndef coder(pool, st):\n    st.version += 1\n    st.handles_zero = st.version >= 2\n    st.review_passed = False\n    return f\"Implemented division, version {st.version}.\"\n\n\ndef reviewer(pool, st):\n    if st.handles_zero:\n        st.review_passed = True\n        return \"APPROVED: zero divisor is handled.\"\n    return \"CHANGES_REQUESTED: division by zero is not handled.\"\n\n\ndef manager_honest(pool, st):\n    if st.review_passed:\n        st.approved = True\n        return \"TERMINATE\"\n    return \"Not done yet.\"\n\n\ndef manager_eager(pool, st):\n    st.approved = True\n    return \"TERMINATE\"\n\n\ndef completed(st):\n    return st.version > 0 and st.handles_zero and st.review_passed and st.approved"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "gr_2.py",
    "headingEn": "The engine",
    "headingKn": "ಎಂಜಿನ್",
    "descEn": "run validates the selected speaker, appends the message and stops on the token or the cap, and state_selector routes by the task flags.",
    "descKn": "run ಆಯ್ಕೆಯಾದ ಮಾತನಾಡುವವನನ್ನು ಮಾನ್ಯಗೊಳಿಸಿ ಸಂದೇಶ ಸೇರಿಸಿ token ಅಥವಾ ಮಿತಿಯಲ್ಲಿ ನಿಲ್ಲುತ್ತದೆ, ಮತ್ತು state_selector ಕೆಲಸದ ಧ್ವಜಗಳಿಂದ ಮಾರ್ಗ ನಿರ್ದೇಶಿಸುತ್ತದೆ.",
    "code": "def run(selector, agents, max_rounds=10, require_valid=True):\n    pool, st, trace = [Message(\"user\", \"Implement safe division.\")], TaskState(), []\n    for t in range(max_rounds):\n        who = selector(pool, st)\n        if require_valid and who not in agents:\n            return {\"stop\": f\"invalid speaker {who!r}\", \"pool\": pool, \"state\": st, \"trace\": trace}\n        text = agents[who](pool, st)\n        pool.append(Message(who, text))\n        trace.append(who)\n        if \"TERMINATE\" in text:\n            return {\"stop\": \"terminated\", \"pool\": pool, \"state\": st, \"trace\": trace}\n    return {\"stop\": \"max rounds\", \"pool\": pool, \"state\": st, \"trace\": trace}\n\n\ndef state_selector(pool, st):\n    if st.version == 0:\n        return \"coder\"\n    if not st.review_passed:\n        return \"reviewer\" if pool[-1].speaker == \"coder\" else \"coder\"\n    return \"manager\"\n\n\ndef eager_selector(pool, st):\n    return \"manager\"\n\n\ndef yes_agents():\n    def a(pool, st):\n        return \"I agree with the previous speaker, the answer is 150.\"\n\n    def b(pool, st):\n        return \"Agent A sounds certain, I agree, 150.\"\n    return {\"a\": a, \"b\": b}"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "gr_2.py",
    "headingEn": "The experiments",
    "headingKn": "ಪ್ರಯೋಗಗಳು",
    "descEn": "main() runs the six experiments in order and prints the real result of each.",
    "descKn": "main() ಆರು ಪ್ರಯೋಗಗಳನ್ನು ಕ್ರಮವಾಗಿ ಓಡಿಸಿ ಪ್ರತಿಯೊಂದರ ನಿಜ ಫಲಿತಾಂಶ ಮುದ್ರಿಸುತ್ತದೆ.",
    "code": "def main():\n    AG = {\"coder\": coder, \"reviewer\": reviewer, \"manager\": manager_honest}\n    section(\"1. Genuinely running: a state-driven chat finishes the task\")\n    r = run(state_selector, AG)\n    print(\"turns:\", r[\"trace\"], \"| stop:\", r[\"stop\"], \"| completed:\", completed(r[\"state\"]))\n    for i, m in enumerate(r[\"pool\"], 1):\n        print(f\"{i:02d} [{m.speaker}] {m.content}\")\n    print(\"the selector chooses by state, so the coder writes, the reviewer asks for the zero check, the coder fixes it, the reviewer approves and the manager closes, ending in 5 agent turns with every flag set; the flags are set by the scripted agents themselves, so completed means they agree and does not mean any code was run.\")\n\n    section(\"2. Genuinely running: termination is not completion\")\n    bad = run(eager_selector, {\"manager\": manager_eager})\n    print(\"stop:\", bad[\"stop\"], \"| turns:\", bad[\"trace\"], \"| completed:\", completed(bad[\"state\"]), \"| version:\", bad[\"state\"].version, \"| approved flag:\", bad[\"state\"].approved)\n    print(\"a manager that says TERMINATE on its first turn stops the chat cleanly and also marks the task approved, while no code exists and no review happened, so the chat ended and the task is not complete; the token tells you the conversation stopped, and only a separate check of the evidence tells you the work was done.\")\n\n    section(\"3. Genuinely running: the cap is also not completion\")\n    capped = run(lambda p, s: \"coder\", AG, max_rounds=4)\n    print(\"stop:\", capped[\"stop\"], \"| turns:\", capped[\"trace\"], \"| completed:\", completed(capped[\"state\"]), \"| version:\", capped[\"state\"].version)\n    print(\"a selector that keeps choosing the coder never reaches review, the chat ends on its round cap after 4 coder turns at version 4, and nothing was approved; a hot speaker can use up the whole budget, so the cap protects cost and the completion check protects meaning.\")\n\n    section(\"4. Genuinely running: validating the selector's answer\")\n    for who in (\"coder\", \"architect\", \"\", None):\n        r = run(lambda p, s, w=who: w, AG, max_rounds=1)\n        print(repr(who), \"->\", r[\"stop\"])\n    try:\n        run(lambda p, s: \"architect\", AG, require_valid=False, max_rounds=1)\n    except KeyError as e:\n        print(\"without validation the engine fails with KeyError\", e)\n    print(\"with validation the real speaker runs and the three bad answers stop the chat with a reason, while without validation the unknown name surfaces as a KeyError in the middle of a turn; the validation here is membership in the agent dictionary and does not judge whether the chosen speaker was a sensible one.\")\n\n    section(\"5. Genuinely running: a sycophancy cascade\")\n    r = run(lambda p, s: \"a\" if len(p) % 2 else \"b\", yes_agents(), max_rounds=4)\n    for m in r[\"pool\"][1:]:\n        print(f\"[{m.speaker}] {m.content}\")\n    print(\"distinct numbers stated:\", sorted({w.strip(\" .,\") for m in r[\"pool\"][1:] for w in m.content.split() if w.strip(\" .,\").isdigit()}), \"| any evidence cited:\", any(\"because\" in m.content or \"test\" in m.content for m in r[\"pool\"][1:]))\n    print(\"two scripted agents repeat the same number and each cites the other as the reason, so the chat shows unanimous agreement with no evidence at all; nothing in the pool tells the selector or the manager that the agreement is empty, which is why a completion check must look for evidence and not for agreement.\")\n\n    section(\"6. Genuinely running: automated checks on the engine\")\n    suite = unittest.TestLoader().loadTestsFromTestCase(ChatTests)\n\n    import io\n    result = unittest.TextTestRunner(stream=io.StringIO()).run(suite)\n    print(\"tests run:\", result.testsRun, \"| failures:\", len(result.failures), \"| errors:\", len(result.errors))\n    print(\"three unit tests pass: the state selector completes, an invalid speaker is reported and an eager manager ends the chat without completing the task; these tests check the engine's behaviour on scripted agents and say nothing about how a real model would pick speakers.\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: a state-driven chat finishes the task ---\nturns: ['coder', 'reviewer', 'coder', 'reviewer', 'manager'] | stop: terminated | completed: True\n01 [user] Implement safe division.\n02 [coder] Implemented division, version 1.\n03 [reviewer] CHANGES_REQUESTED: division by zero is not handled.\n04 [coder] Implemented division, version 2.\n05 [reviewer] APPROVED: zero divisor is handled.\n06 [manager] TERMINATE\nthe selector chooses by state, so the coder writes, the reviewer asks for the zero check, the coder fixes it, the reviewer approves and the manager closes, ending in 5 agent turns with every flag set; the flags are set by the scripted agents themselves, so completed means they agree and does not mean any code was run.\n\n--- 2. Genuinely running: termination is not completion ---\nstop: terminated | turns: ['manager'] | completed: False | version: 0 | approved flag: True\na manager that says TERMINATE on its first turn stops the chat cleanly and also marks the task approved, while no code exists and no review happened, so the chat ended and the task is not complete; the token tells you the conversation stopped, and only a separate check of the evidence tells you the work was done.\n\n--- 3. Genuinely running: the cap is also not completion ---\nstop: max rounds | turns: ['coder', 'coder', 'coder', 'coder'] | completed: False | version: 4\na selector that keeps choosing the coder never reaches review, the chat ends on its round cap after 4 coder turns at version 4, and nothing was approved; a hot speaker can use up the whole budget, so the cap protects cost and the completion check protects meaning.\n\n--- 4. Genuinely running: validating the selector's answer ---\n'coder' -> max rounds\n'architect' -> invalid speaker 'architect'\n'' -> invalid speaker ''\nNone -> invalid speaker None\nwithout validation the engine fails with KeyError 'architect'\nwith validation the real speaker runs and the three bad answers stop the chat with a reason, while without validation the unknown name surfaces as a KeyError in the middle of a turn; the validation here is membership in the agent dictionary and does not judge whether the chosen speaker was a sensible one.\n\n--- 5. Genuinely running: a sycophancy cascade ---\n[a] I agree with the previous speaker, the answer is 150.\n[b] Agent A sounds certain, I agree, 150.\n[a] I agree with the previous speaker, the answer is 150.\n[b] Agent A sounds certain, I agree, 150.\ndistinct numbers stated: ['150'] | any evidence cited: False\ntwo scripted agents repeat the same number and each cites the other as the reason, so the chat shows unanimous agreement with no evidence at all; nothing in the pool tells the selector or the manager that the agreement is empty, which is why a completion check must look for evidence and not for agreement.\n\n--- 6. Genuinely running: automated checks on the engine ---\ntests run: 3 | failures: 0 | errors: 0\nthree unit tests pass: the state selector completes, an invalid speaker is reported and an eager manager ends the chat without completing the task; these tests check the engine's behaviour on scripted agents and say nothing about how a real model would pick speakers."
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
    "headingEn": "Experiment 1: A state-driven chat finishes the task",
    "headingKn": "ಪ್ರಯೋಗ 1: A state-driven chat finishes the task",
    "bodyEn": "What it ran: A state-driven chat finishes the task. What the lab concluded: the selector chooses by state, so the coder writes, the reviewer asks for the zero check, the coder fixes it, the reviewer approves and the manager closes, ending in 5 agent turns with every flag set; the flags are set by the scripted agents themselves, so completed means they agree and does not mean any code was run.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A state-driven chat finishes the task. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the selector chooses by state, so the coder writes, the reviewer asks for the zero check, the coder fixes it, the reviewer approves and the manager closes, ending in 5 agent turns with every flag set; the flags are set by the scripted agents themselves, so completed means they agree and does not mean any code was run."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. Genuinely running: a state-driven chat finishes the task ---\nturns: ['coder', 'reviewer', 'coder', 'reviewer', 'manager'] | stop: terminated | completed: True\n01 [user] Implement safe division.\n02 [coder] Implemented division, version 1.\n03 [reviewer] CHANGES_REQUESTED: division by zero is not handled.\n04 [coder] Implemented division, version 2.\n05 [reviewer] APPROVED: zero divisor is handled.\n06 [manager] TERMINATE"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: Termination is not completion",
    "headingKn": "ಪ್ರಯೋಗ 2: Termination is not completion",
    "bodyEn": "What it ran: Termination is not completion. What the lab concluded: a manager that says TERMINATE on its first turn stops the chat cleanly and also marks the task approved, while no code exists and no review happened, so the chat ended and the task is not complete; the token tells you the conversation stopped, and only a separate check of the evidence tells you the work was done.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Termination is not completion. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a manager that says TERMINATE on its first turn stops the chat cleanly and also marks the task approved, while no code exists and no review happened, so the chat ended and the task is not complete; the token tells you the conversation stopped, and only a separate check of the evidence tells you the work was done."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely running: termination is not completion ---\nstop: terminated | turns: ['manager'] | completed: False | version: 0 | approved flag: True"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: The cap is also not completion",
    "headingKn": "ಪ್ರಯೋಗ 3: The cap is also not completion",
    "bodyEn": "What it ran: The cap is also not completion. What the lab concluded: a selector that keeps choosing the coder never reaches review, the chat ends on its round cap after 4 coder turns at version 4, and nothing was approved; a hot speaker can use up the whole budget, so the cap protects cost and the completion check protects meaning.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: The cap is also not completion. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a selector that keeps choosing the coder never reaches review, the chat ends on its round cap after 4 coder turns at version 4, and nothing was approved; a hot speaker can use up the whole budget, so the cap protects cost and the completion check protects meaning."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely running: the cap is also not completion ---\nstop: max rounds | turns: ['coder', 'coder', 'coder', 'coder'] | completed: False | version: 4"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 4: Validating the selector's answer",
    "headingKn": "ಪ್ರಯೋಗ 4: Validating the selector's answer",
    "bodyEn": "What it ran: Validating the selector's answer. What the lab concluded: with validation the real speaker runs and the three bad answers stop the chat with a reason, while without validation the unknown name surfaces as a KeyError in the middle of a turn; the validation here is membership in the agent dictionary and does not judge whether the chosen speaker was a sensible one.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Validating the selector's answer. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): with validation the real speaker runs and the three bad answers stop the chat with a reason, while without validation the unknown name surfaces as a KeyError in the middle of a turn; the validation here is membership in the agent dictionary and does not judge whether the chosen speaker was a sensible one."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 4. Genuinely running: validating the selector's answer ---\n'coder' -> max rounds\n'architect' -> invalid speaker 'architect'\n'' -> invalid speaker ''\nNone -> invalid speaker None\nwithout validation the engine fails with KeyError 'architect'"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 5: A sycophancy cascade",
    "headingKn": "ಪ್ರಯೋಗ 5: A sycophancy cascade",
    "bodyEn": "What it ran: A sycophancy cascade. What the lab concluded: two scripted agents repeat the same number and each cites the other as the reason, so the chat shows unanimous agreement with no evidence at all; nothing in the pool tells the selector or the manager that the agreement is empty, which is why a completion check must look for evidence and not for agreement.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A sycophancy cascade. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): two scripted agents repeat the same number and each cites the other as the reason, so the chat shows unanimous agreement with no evidence at all; nothing in the pool tells the selector or the manager that the agreement is empty, which is why a completion check must look for evidence and not for agreement."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 5. Genuinely running: a sycophancy cascade ---\n[a] I agree with the previous speaker, the answer is 150.\n[b] Agent A sounds certain, I agree, 150.\n[a] I agree with the previous speaker, the answer is 150.\n[b] Agent A sounds certain, I agree, 150.\ndistinct numbers stated: ['150'] | any evidence cited: False"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 6: Automated checks on the engine",
    "headingKn": "ಪ್ರಯೋಗ 6: Automated checks on the engine",
    "bodyEn": "What it ran: Automated checks on the engine. What the lab concluded: three unit tests pass: the state selector completes, an invalid speaker is reported and an eager manager ends the chat without completing the task; these tests check the engine's behaviour on scripted agents and say nothing about how a real model would pick speakers.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Automated checks on the engine. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): three unit tests pass: the state selector completes, an invalid speaker is reported and an eager manager ends the chat without completing the task; these tests check the engine's behaviour on scripted agents and say nothing about how a real model would pick speakers."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 6. Genuinely running: automated checks on the engine ---\ntests run: 3 | failures: 0 | errors: 0"
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
    "headingEn": "Genuinely Found: The Token Ended It, the Work Did Not",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: token ಮುಗಿಸಿತು, ಕೆಲಸ ಮುಗಿಯಲಿಲ್ಲ",
    "bodyEn": "Section 2: a manager that said TERMINATE first stopped the chat in 1 turn with version 0, the approved flag True and completed False. Section 3: a selector that always chose the coder ran 4 coder turns to the cap and reached version 4 with nothing approved. Section 1 finished in 5 agent turns with every flag set.",
    "bodyKn": "ವಿಭಾಗ 2: ಮೊದಲು TERMINATE ಹೇಳಿದ manager ಆವೃತ್ತಿ 0, approved ಧ್ವಜ True ಮತ್ತು completed False ನೊಂದಿಗೆ 1 ಸುತ್ತಿನಲ್ಲಿ ಚಾಟ್ ನಿಲ್ಲಿಸಿತು. ವಿಭಾಗ 3: ಯಾವಾಗಲೂ coder ಆರಿಸುವ ಆಯ್ಕೆಕಾರ 4 coder ಸುತ್ತುಗಳನ್ನು ಮಿತಿಯವರೆಗೆ ಓಡಿಸಿ ಯಾವುದೂ ಅನುಮೋದನೆಯಾಗದೆ ಆವೃತ್ತಿ 4 ತಲುಪಿತು. ವಿಭಾಗ 1 ಎಲ್ಲಾ ಧ್ವಜಗಳೊಂದಿಗೆ 5 ಏಜೆಂಟ್ ಸುತ್ತುಗಳಲ್ಲಿ ಮುಗಿಯಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Bad Names and Empty Agreement",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಕೆಟ್ಟ ಹೆಸರುಗಳು ಮತ್ತು ಖಾಲಿ ಒಪ್ಪಿಗೆ",
    "bodyEn": "Section 4: architect, an empty string and None each stopped the chat with an invalid-speaker reason, and without validation architect raised a KeyError. Section 5: two scripted agents stated only the number 150 in four turns and cited no evidence.",
    "bodyKn": "ವಿಭಾಗ 4: architect, ಖಾಲಿ ಸ್ಟ್ರಿಂಗ್ ಮತ್ತು None ಪ್ರತಿಯೊಂದೂ ಅಮಾನ್ಯ-ಮಾತನಾಡುವವ ಕಾರಣದೊಂದಿಗೆ ಚಾಟ್ ನಿಲ್ಲಿಸಿದವು, ಮತ್ತು ಮಾನ್ಯತೆ ಇಲ್ಲದೆ architect KeyError ಎತ್ತಿತು. ವಿಭಾಗ 5: ಎರಡು ಸ್ಕ್ರಿಪ್ಟ್ ಏಜೆಂಟ್‌ಗಳು ನಾಲ್ಕು ಸುತ್ತುಗಳಲ್ಲಿ 150 ಸಂಖ್ಯೆಯನ್ನು ಮಾತ್ರ ಹೇಳಿ ಯಾವ ಸಾಕ್ಷಿಯನ್ನೂ ಉಲ್ಲೇಖಿಸಲಿಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: The Engine Has Tests",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಎಂಜಿನ್‌ಗೆ ಪರೀಕ್ಷೆಗಳಿವೆ",
    "bodyEn": "Section 6: three unit tests ran with 0 failures and 0 errors, covering completion by the state selector, an invalid speaker and an eager manager that ends without completing the task.",
    "bodyKn": "ವಿಭಾಗ 6: ಮೂರು ಯೂನಿಟ್ ಪರೀಕ್ಷೆಗಳು 0 ವೈಫಲ್ಯ ಮತ್ತು 0 ದೋಷಗಳೊಂದಿಗೆ ಓಡಿದವು, ಸ್ಥಿತಿ ಆಯ್ಕೆಕಾರದ ಪೂರ್ಣಗೊಳಿಕೆ, ಅಮಾನ್ಯ ಮಾತನಾಡುವವ ಮತ್ತು ಕೆಲಸ ಪೂರ್ಣಗೊಳಿಸದೆ ಮುಗಿಸುವ ಆತುರದ manager ಅನ್ನು ಒಳಗೊಂಡಂತೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A conversation can stop for reasons that have nothing to do with the work, a token, a cap or a unanimous agreement, so completion has to be a separate decision made from evidence and state.",
    "bodyKn": "ಸಂಭಾಷಣೆ ಕೆಲಸಕ್ಕೆ ಸಂಬಂಧಿಸದ ಕಾರಣಗಳಿಗೆ ನಿಲ್ಲಬಹುದು, token, ಮಿತಿ ಅಥವಾ ಏಕಮತ ಒಪ್ಪಿಗೆ, ಆದ್ದರಿಂದ ಪೂರ್ಣಗೊಳಿಕೆ ಸಾಕ್ಷಿ ಮತ್ತು ಸ್ಥಿತಿಯಿಂದ ಮಾಡಿದ ಪ್ರತ್ಯೇಕ ನಿರ್ಧಾರವಾಗಿರಬೇಕು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"unanimous agreement means the answer is right.\" Two agents agreed on 150 without citing anything.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಏಕಮತ ಒಪ್ಪಿಗೆ ಎಂದರೆ ಉತ್ತರ ಸರಿ.\" ಎರಡು ಏಜೆಂಟ್‌ಗಳು ಏನನ್ನೂ ಉಲ್ಲೇಖಿಸದೆ 150 ಕ್ಕೆ ಒಪ್ಪಿದವು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Task state: flags that record real progress. Termination: the chat stops. Completion: the evidence says the task is done. Validation: checking the selector answer against real agents. Sycophancy cascade: agents agree because another agent sounds sure.",
    "bodyKn": "ಕೆಲಸದ ಸ್ಥಿತಿ: ನಿಜ ಪ್ರಗತಿ ದಾಖಲಿಸುವ ಧ್ವಜಗಳು. ಮುಕ್ತಾಯ: ಚಾಟ್ ನಿಲ್ಲುತ್ತದೆ. ಪೂರ್ಣಗೊಳಿಕೆ: ಕೆಲಸ ಮುಗಿದಿದೆ ಎಂದು ಸಾಕ್ಷಿ ಹೇಳುತ್ತದೆ. ಮಾನ್ಯತೆ: ಆಯ್ಕೆಕಾರ ಉತ್ತರವನ್ನು ನಿಜ ಏಜೆಂಟ್‌ಗಳ ವಿರುದ್ಧ ಪರಿಶೀಲಿಸುವುದು. Sycophancy ಕ್ಯಾಸ್ಕೇಡ್: ಇನ್ನೊಬ್ಬ ಏಜೆಂಟ್ ಖಚಿತವಾಗಿ ಕೇಳಿಸುವ ಕಾರಣ ಏಜೆಂಟ್‌ಗಳು ಒಪ್ಪುತ್ತವೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) The state-driven chat completed in 5 agent turns. 2) An early TERMINATE stopped the chat with completed False. 3) A coder-only selector hit the cap at version 4. 4) Invalid speakers stopped the chat with a reason. 5) Three engine tests passed.",
    "bodyKn": "1) ಸ್ಥಿತಿ-ಚಾಲಿತ ಚಾಟ್ 5 ಏಜೆಂಟ್ ಸುತ್ತುಗಳಲ್ಲಿ ಪೂರ್ಣಗೊಂಡಿತು. 2) ಬೇಗನೆ TERMINATE ಚಾಟ್ ಅನ್ನು completed False ನೊಂದಿಗೆ ನಿಲ್ಲಿಸಿತು. 3) coder-ಮಾತ್ರ ಆಯ್ಕೆಕಾರ ಆವೃತ್ತಿ 4 ರಲ್ಲಿ ಮಿತಿ ತಲುಪಿತು. 4) ಅಮಾನ್ಯ ಮಾತನಾಡುವವರು ಕಾರಣದೊಂದಿಗೆ ಚಾಟ್ ನಿಲ್ಲಿಸಿದರು. 5) ಮೂರು ಎಂಜಿನ್ ಪರೀಕ್ಷೆಗಳು ಪಾಸಾದವು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What was completed after the eager manager said TERMINATE first?",
      "qKn": "ಆತುರದ manager ಮೊದಲು TERMINATE ಹೇಳಿದ ನಂತರ completed ಏನಾಗಿತ್ತು?",
      "opts": [
       "False",
       "True",
       "None",
       "it was not computed"
      ],
      "optsKn": [
       "False",
       "True",
       "None",
       "ಲೆಕ್ಕ ಹಾಕಲಿಲ್ಲ"
      ],
      "correct": 0
     },
     {
      "q": "Which version did the coder-only selector reach in 4 turns?",
      "qKn": "4 ಸುತ್ತುಗಳಲ್ಲಿ coder-ಮಾತ್ರ ಆಯ್ಕೆಕಾರ ಯಾವ ಆವೃತ್ತಿ ತಲುಪಿತು?",
      "opts": [
       "4",
       "1",
       "2",
       "0"
      ],
      "optsKn": [
       "4",
       "1",
       "2",
       "0"
      ],
      "correct": 0
     },
     {
      "q": "What happened without validation when the selector said architect?",
      "qKn": "ಆಯ್ಕೆಕಾರ architect ಎಂದಾಗ ಮಾನ್ಯತೆ ಇಲ್ಲದೆ ಏನಾಯಿತು?",
      "opts": [
       "a KeyError",
       "the chat stopped cleanly",
       "the coder spoke",
       "nothing"
      ],
      "optsKn": [
       "KeyError",
       "ಚಾಟ್ ಸ್ವಚ್ಛವಾಗಿ ನಿಂತಿತು",
       "coder ಮಾತನಾಡಿತು",
       "ಏನೂ ಇಲ್ಲ"
      ],
      "correct": 0
     },
     {
      "q": "How many agent turns did the state-driven chat take?",
      "qKn": "ಸ್ಥಿತಿ-ಚಾಲಿತ ಚಾಟ್ ಎಷ್ಟು ಏಜೆಂಟ್ ಸುತ್ತು ತೆಗೆದುಕೊಂಡಿತು?",
      "opts": [
       "5",
       "6",
       "7",
       "4"
      ],
      "optsKn": [
       "5",
       "6",
       "7",
       "4"
      ],
      "correct": 0
     },
     {
      "q": "How many unit tests ran with no failures?",
      "qKn": "ಎಷ್ಟು ಯೂನಿಟ್ ಪರೀಕ್ಷೆಗಳು ವೈಫಲ್ಯವಿಲ್ಲದೆ ಓಡಿದವು?",
      "opts": [
       "3",
       "1",
       "5",
       "0"
      ],
      "optsKn": [
       "3",
       "1",
       "5",
       "0"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
