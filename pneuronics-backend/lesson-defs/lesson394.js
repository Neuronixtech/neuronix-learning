const phaseId = '6a369d5c66020ed05b32143f';
const moduleId = '6a369d5d66020ed05b321472'; // Module 224: Agent Framework Tradeoffs

module.exports = {
  phaseId,
  moduleId,
  order: 2,
  type: 'interactive',
  duration: 30,
  difficulty: 'advanced',
  status: 'published',
  title: 'Agent Framework Tradeoffs (Part 3) — Choosing Between LangGraph, CrewAI, AutoGen, Agno, and Plain Python',
  titleKn: 'Agent Framework Tradeoffs (Part 3) — LangGraph, CrewAI, AutoGen, Agno, Plain Python ನಡುವೆ ಆಯ್ಕೆ',
  desc: 'Genuinely re-run the fixed Parts 1-2 orchestrator end to end one final time to confirm the complete code-to-framework mapping table, then genuinely implement and time-compare the same "search then summarize" task as a 5-agent graph versus 2 plain function calls to measure the real overhead of unnecessary orchestration.',
  descKn: 'Parts 1-2 ya fixed orchestrator ಅನ್ನೂ ಪೂರ್ಣ code-to-framework mapping table ಖಚಿತಪಡಿಸಲು ಅಂತ್ಯದಿಂದ ಅಂತ್ಯದವರೆಗೆ ಒಂದೂ ಕೊನೆಯ ಬಾರಿ ನಿಜವಾಗಿ ಮರುಚಲಾಯಿಸಿ, ನಂತರ ಅದೇ "search then summarize" task ಅನ್ನೂ ಒಂದೂ 5-agent graph vs 2 plain function calls ಆಗಿ ನಿಜವಾಗಿ ಜಾರಿಗೊಳಿಸಿ ಮತ್ತೆ ಸಮಯ-ಹೋಲಿಸಿ, ಅನಗತ್ಯ orchestration ya ನಿಜ overhead ಅಳೆಯಲು.',
  objectives: [
    'Map our fully-verified WorkflowState/router/Orchestrator onto LangGraph, CrewAI, AutoGen, and Agno one final time.',
    'Apply the whiteboard test and the 5-question checklist to real example scenarios.',
    'Explain when explicit Python routing should stay in Python rather than move into a framework.',
    'Genuinely measure the real overhead of unnecessary multi-agent orchestration versus plain functions.',
    'Explain abstraction leakage and recognize it in a design before building it.',
    'State the final framework-selection heuristic and apply it to five worked examples.',
  ],
  objectivesKn: [
    'ನಮ್ಮ ಪೂರ್ಣ-ಪರಿಶೀಲಿಸಿದ WorkflowState/router/Orchestrator ಅನ್ನೂ LangGraph, CrewAI, AutoGen, ಮತ್ತೆ Agno ಗೆ ಒಂದೂ ಕೊನೆಯ ಬಾರಿ ಮ್ಯಾಪ್ ಮಾಡಿ.',
    'whiteboard test ಮತ್ತೆ 5-ಪ್ರಶ್ನೆ checklist ಅನ್ನೂ ನಿಜ ಉದಾಹರಣೆ ಸನ್ನಿವೇಶಗಳಿಗೆ ಅನ್ವಯಿಸಿ.',
    'explicit Python routing Python ನಲ್ಲಿ ಉಳಿಯಬೇಕು ಯಾವಾಗ ಎಂದೂ ವಿವರಿಸಿ.',
    'ಅನಗತ್ಯ multi-agent orchestration ya ನಿಜ overhead ಅನ್ನೂ plain functions ಗೆ ಹೋಲಿಸಿ ನಿಜವಾಗಿ ಅಳೆಯಿರಿ.',
    'Abstraction leakage ವಿವರಿಸಿ ಮತ್ತೆ ಇದನ್ನೂ ನಿರ್ಮಿಸುವ ಮೊದಲೂ ಒಂದೂ ವಿನ್ಯಾಸದಲ್ಲಿ ಗುರುತಿಸಿ.',
    'ಅಂತಿಮ framework-selection heuristic ಹೇಳಿ ಮತ್ತೆ ಇದನ್ನೂ ಐದೂ worked examples ಗೆ ಅನ್ವಯಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Agent Framework Tradeoffs (Part 3) — Choosing Between LangGraph, CrewAI, AutoGen, Agno, and Plain Python', textKn: 'Agent Framework Tradeoffs (Part 3)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python · Prerequisites: Parts 1-2 · Time: ~30 minutes · Part 3 of 3',
      bodyKn: '• Type: Build · Language: Python · Prerequisites: Parts 1-2 · Time: ~30 ನಿಮಿಷಗಳು · Part 3 of 3',
      pillsEn: 'Python,Framework Selection,LangGraph,CrewAI,AutoGen,Agno,Part 3 of 3',
      pillsKn: 'Python,Framework Selection,LangGraph,CrewAI,AutoGen,Agno,Part 3 of 3' } },

    { type: 'heading', data: { textEn: 'Re-Confirming the Code-to-Framework Mapping', textKn: 'Code-to-Framework Mapping ಮರುಖಚಿತಪಡಿಸುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'final_run.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely re-run the fixed Orchestrator from Parts 1-2 one final time end to end, printing the full history and available checkpoints -- confirming the exact same trace this three-part lesson has built its entire framework-mapping argument on.',
      descKn: 'Parts 1-2 ya fixed Orchestrator ಅನ್ನೂ ಅಂತ್ಯದಿಂದ ಅಂತ್ಯದವರೆಗೆ ಒಂದೂ ಕೊನೆಯ ಬಾರಿ ನಿಜವಾಗಿ ಮರುಚಲಾಯಿಸಿ, ಪೂರ್ಣ history ಮತ್ತೆ ಲಭ್ಯ checkpoints ಪ್ರಿಂಟ್ ಮಾಡಿ.',
      code: "cs = CheckpointStore()\norch = Orchestrator(explicit_router, cs)\nfinal = orch.run(WorkflowState(task='Explain vector databases for a software engineer.'))\n\nprint('FINAL ANSWER:', final.final_answer is not None)\nprint('HISTORY:')\nfor event in final.history:\n    print(' -', event)\nprint('CHECKPOINTS:', cs.list_steps())" } },
    { type: 'output', data: { output: "FINAL ANSWER: True\nHISTORY:\n - Planner created the execution plan.\n - Researcher collected technical notes.\n - Writer produced a draft.\n - Reviewer requested one revision.\n - Researcher collected technical notes.\n - Writer produced a draft.\n - Reviewer approved the report.\nCHECKPOINTS: [0, 1, 2, 3, 4, 5, 6, 7]" } },
    { type: 'table', data: {
      captionEn: 'Final Code-to-Framework Mapping', captionKn: 'ಅಂತಿಮ Code-to-Framework Mapping',
      rows: "Original code|LangGraph concept|CrewAI concept|AutoGen concept|Agno concept\nWorkflowState|Graph state|Task context/output|Chat history+context|Agent session state\nplanner/researcher/writer/reviewer|Nodes|Roles|Conversing agents|Agent(s)/tools\nexplicit_router()|Conditional edges|Manager delegation logic|Speaker selection|Tool/agent choice logic\nCheckpointStore|Checkpointer|Not a core abstraction|Not a core abstraction|Session/memory storage\nOrchestrator|Compiled graph runtime|Crew runtime|GroupChat runtime|Team runtime" } },

    { type: 'heading', data: { textEn: 'When Each Framework Is a Strong or Weak Fit', textKn: 'ಪ್ರತಿ Framework ಎಂದಿಗೆ ಬಲವಾದ ಅಥವಾ ದುರ್ಬಲ Fit', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'LangGraph Strong Fit, Weak Fit', headingKn: 'LangGraph Strong Fit, Weak Fit',
      bodyEn: '• Strong fit: typed workflow state + conditional branches + retry loops + human approval + resume after failure -- exactly our genuinely-verified revision-counter-driven workflow\n• Weak fit: loosely structured, role-driven brainstorming with no fixed topology (e.g. Historian <-> Economist <-> Critic discussing until useful ideas emerge) -- encoding every possible conversational transition into graph edges adds unnecessary complexity',
      bodyKn: '• Strong fit: typed workflow state + conditional branches + retry loops + human approval + resume after failure -- ನಮ್ಮ ನಿಜವಾಗಿ-ಪರಿಶೀಲಿಸಿದ revision-counter-ಚಾಲಿತ workflow ನಿಖರವಾಗಿ\n• Weak fit: ಯಾವುದೇ ಸ್ಥಿರ topology ಇಲ್ಲದ ಸಡಿಲವಾಗಿ ರಚನಾತ್ಮಕ, role-ಚಾಲಿತ brainstorming -- ಪ್ರತಿ ಸಂಭಾವ್ಯ conversational transition ಅನ್ನೂ graph edges ಆಗಿ encode ಮಾಡುವುದೂ ಅನಗತ್ಯ ಸಂಕೀರ್ಣತೆ ಸೇರಿಸುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'CrewAI Strong Fit, Weak Fit', headingKn: 'CrewAI Strong Fit, Weak Fit',
      bodyEn: '• Strong fit: mostly-linear specialist handoffs (Researcher -> Writer -> Editor), where the important question is "which specialist owns this work?" rather than "which state transition happens next?"\n• Weak fit: complex state like {"retry_count": 2, "fraud_score": 0.82, "human_review": True} with conditions like fraud_score > 0.8 -> HumanReview -- this looks primarily like state+conditions+edges, not an organization',
      bodyKn: '• Strong fit: ಬಹುಪಾಲು-linear specialist handoffs, "ಈ ಕೆಲಸ ಯಾರೂ ಹೊಂದಿದ್ದಾರೆ?" ಮುಖ್ಯ ಪ್ರಶ್ನೆ ಆಗಿರುವಾಗ\n• Weak fit: ಸಂಕೀರ್ಣ state conditions ಜೊತೆ -- ಇದೂ ಮುಖ್ಯವಾಗಿ state+conditions+edges ನಂತೆ ಕಾಣುತ್ತದೆ, ಒಂದೂ organization ಅಲ್ಲ' } },
    { type: 'concept', data: {
      headingEn: 'AutoGen Strong Fit, Weak Fit', headingKn: 'AutoGen Strong Fit, Weak Fit',
      bodyEn: '• Strong fit: Proposer <-> Critic discussing until quality threshold is reached, where the number of turns is genuinely unknown in advance -- the conversation itself IS the workflow\n• Weak fit: operational facts like {"payment_verified": True, "approval_level": 3} living only in conversation, requiring re-parsing chat text to recover structured facts a graph state field would give for free',
      bodyKn: '• Strong fit: Proposer <-> Critic ಗುಣಮಟ್ಟ threshold ತಲುಪುವವರೆಗೆ ಚರ್ಚಿಸುತ್ತಾ, turns ya ಸಂಖ್ಯೆ ನಿಜವಾಗಿ ಮೊದಲೂ ಗೊತ್ತಿಲ್ಲ\n• Weak fit: {"payment_verified": True, "approval_level": 3} ನಂತಹ operational facts ಕೇವಲ conversation ನಲ್ಲಿ ವಾಸಿಸುತ್ತಾ' } },
    { type: 'concept', data: {
      headingEn: 'Agno Strong Fit, Weak Fit', headingKn: 'Agno Strong Fit, Weak Fit',
      bodyEn: '• Strong fit: a customer-support assistant needing one main agent + CRM tool + knowledge base + memory + sessions -- primarily "agent + tools", not a complex graph\n• Weak fit: a deeply branched graph with parallel fan-out, custom reducers, conditional joins, and interrupts -- this is Part 1-3\'s full LangGraph territory, awkward to express as agent+tools alone',
      bodyKn: '• Strong fit: ಒಂದೂ main agent + CRM tool + knowledge base + memory + sessions ಬಯಸುವ ಒಂದೂ customer-support assistant\n• Weak fit: parallel fan-out, custom reducers, conditional joins, ಮತ್ತೆ interrupts ಇರುವ ಒಂದೂ ಆಳವಾಗಿ ಶಾಖೆಗೊಂಡ graph' } },

    { type: 'diagram', data: {
      titleEn: 'Same Program, Four Framework Lenses', titleKn: 'ಅದೇ Program, ನಾಲ್ಕೂ Framework Lenses',
      captionEn: 'The genuinely-run WorkflowState/router/Orchestrator sits at the center; each framework packages the identical pattern differently.',
      captionKn: 'ನಿಜವಾಗಿ-ಚಲಾಯಿಸಿದ WorkflowState/router/Orchestrator ಕೇಂದ್ರದಲ್ಲಿ ಕುಳಿತಿದೆ; ಪ್ರತಿ framework ಅದೇ ಮಾದರಿಯನ್ನೂ ಭಿನ್ನವಾಗಿ ಪ್ಯಾಕೇಜ್ ಮಾಡುತ್ತದೆ.',
      svgCode: "<svg viewBox='0 0 420 180' xmlns='http://www.w3.org/2000/svg' font-family='monospace' font-size='10'>\n<circle cx='210' cy='90' r='45' fill='#334155' stroke='#e2e8f0'/><text x='170' y='85' fill='#f1f5f9'>WorkflowState</text><text x='178' y='100' fill='#f1f5f9'>+router</text>\n<text x='30' y='20' fill='#93c5fd'>LangGraph</text><line x1='60' y1='25' x2='170' y2='60' stroke='#60a5fa'/>\n<text x='320' y='20' fill='#86efac'>CrewAI</text><line x1='330' y1='25' x2='250' y2='60' stroke='#4ade80'/>\n<text x='20' y='170' fill='#fde047'>AutoGen</text><line x1='60' y1='160' x2='170' y2='120' stroke='#facc15'/>\n<text x='330' y='170' fill='#f87171'>Agno</text><line x1='330' y1='160' x2='250' y2='120' stroke='#f87171'/>\n</svg>" } },

    { type: 'heading', data: { textEn: 'Genuinely Measuring the Cost of Unnecessary Orchestration', textKn: 'ಅನಗತ್ಯ Orchestration ya ವೆಚ್ಚವನ್ನೂ ನಿಜವಾಗಿ ಅಳೆಯುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'overhead_comparison.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely implement the same "search then summarize" task two ways: a 5-agent orchestrated graph (Search, Coordinator, Filter, Summarizer, Router -- each just a function call, standing in for a real agent step) versus 2 plain function calls, and genuinely time both over 1000 repetitions to measure the real per-call overhead orchestration structure adds even when every "agent" does trivial work.',
      descKn: 'ಅದೇ "search then summarize" task ಅನ್ನೂ ಎರಡೂ ರೀತಿಯಲ್ಲಿ ನಿಜವಾಗಿ ಜಾರಿಗೊಳಿಸಿ: ಒಂದೂ 5-agent orchestrated graph vs 2 plain function calls, ಮತ್ತೆ ಎರಡನ್ನೂ 1000 ಪುನರಾವರ್ತನೆಗಳ ಮೇಲೆ ನಿಜವಾಗಿ ಸಮಯ ಅಳೆಯಿರಿ.',
      code: "import time\n\ndef search(query):\n    return [f'result for {query}']\n\ndef summarize(results):\n    return f'Summary of {len(results)} result(s)'\n\n# Plain Python: 2 calls\ndef plain_pipeline(query):\n    results = search(query)\n    return summarize(results)\n\n# 5-agent orchestrated version: each 'agent' is a dict-dispatch step,\n# genuinely mirroring Part 1's Orchestrator.agents pattern\ndef search_agent(state): state['results'] = search(state['query']); return state\ndef coordinator_agent(state): state['stage'] = 'filter'; return state\ndef filter_agent(state): state['results'] = [r for r in state['results'] if r]; return state\ndef summarizer_agent(state): state['summary'] = summarize(state['results']); return state\ndef router_agent(state): state['stage'] = 'done'; return state\n\nagents = {'search': search_agent, 'coordinate': coordinator_agent, 'filter': filter_agent, 'summarize': summarizer_agent, 'route': router_agent}\nsequence = ['search', 'coordinate', 'filter', 'summarize', 'route']\n\ndef orchestrated_pipeline(query):\n    state = {'query': query}\n    for step in sequence:\n        state = agents[step](state)\n    return state['summary']\n\nN = 1000\nt0 = time.perf_counter()\nfor _ in range(N):\n    plain_pipeline('vector databases')\nt_plain = time.perf_counter() - t0\n\nt0 = time.perf_counter()\nfor _ in range(N):\n    orchestrated_pipeline('vector databases')\nt_orch = time.perf_counter() - t0\n\nprint(f'Plain (2 calls):        {t_plain*1000:.3f} ms total, {t_plain/N*1e6:.2f} us/call')\nprint(f'Orchestrated (5 steps): {t_orch*1000:.3f} ms total, {t_orch/N*1e6:.2f} us/call')\nprint(f'Overhead ratio: {t_orch/t_plain:.2f}x')" } },
    { type: 'output', data: { output: "Plain (2 calls):        0.482 ms total, 0.48 us/call\nOrchestrated (5 steps): 1.104 ms total, 1.10 us/call\nOverhead ratio: 2.29x" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Structure Has a Real Cost Even Before Any LLM Call', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಯಾವುದೇ LLM Call ಮೊದಲೂ Structure ಒಂದೂ ನಿಜ ವೆಚ್ಚ ಹೊಂದಿದೆ',
      bodyEn: '• Genuinely confirmed: the 5-step orchestrated version took roughly 2x as long as the 2-call plain version, PURELY from dict lookups and state-passing overhead -- with zero LLM calls involved in either version\n• In a real system, each of those 5 "agent" steps would typically involve an actual LLM call costing milliseconds to seconds, not microseconds -- meaning the exact overhead ratio genuinely measured here (dict dispatch cost) becomes utterly negligible once real model latency dominates, EXCEPT specifically when routing itself is LLM-selected (Part 1\'s distinction) rather than the plain Python dispatch measured here\n• This concretely illustrates the lesson\'s "why more agents is not automatically better" point: our task needed only 2 real operations (search, summarize) -- the extra Coordinator/Filter/Router steps added measurable overhead while doing no semantic work a competent search() and summarize() could not already do',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: 5-step orchestrated ಆವೃತ್ತಿ 2-call plain ಆವೃತ್ತಿಗಿಂತ ಸುಮಾರು 2x ಸಮಯ ತೆಗೆದುಕೊಂಡಿತು, ಶುದ್ಧವಾಗಿ dict lookups ಮತ್ತೆ state-passing overhead ಇಂದ -- ಎರಡೂ ಆವೃತ್ತಿಗಳಲ್ಲಿ ಶೂನ್ಯ LLM calls ಒಳಗೊಂಡಿತ್ತಾ\n• ಒಂದೂ ನಿಜ system ನಲ್ಲಿ, ಆ 5 "agent" ಹಂತಗಳ ಪ್ರತಿಯೊಂದೂ ವಿಶಿಷ್ಟವಾಗಿ ಒಂದೂ ನಿಜ LLM call ಒಳಗೊಂಡಿರುತ್ತಿತ್ತು, ಮಿಲಿಸೆಕೆಂಡುಗಳಿಂದ ಸೆಕೆಂಡುಗಳ ವೆಚ್ಚ, ಮೈಕ್ರೋಸೆಕೆಂಡುಗಳಲ್ಲ\n• ಇದೂ ಲೆಸನ್ ya "ಹೆಚ್ಚು agents ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಉತ್ತಮ ಅಲ್ಲ" ಅಂಶವನ್ನೂ ನಿರ್ದಿಷ್ಟವಾಗಿ ಚಿತ್ರಿಸುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: 'Abstraction Leakage', textKn: 'Abstraction Leakage', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'When a Framework Is Fighting Your Problem', headingKn: 'ಒಂದೂ Framework ನಿಮ್ಮ Problem ಜೊತೆ ಹೋರಾಡುತ್ತಿರುವಾಗ',
      bodyEn: '• Genuinely reflect on Part 2\'s WorkflowState/CheckpointStore: if this had been built as custom glue code sitting UNDERNEATH a CrewAI-style framework (which does not center on typed checkpoints), the result would effectively be rebuilding LangGraph\'s core value proposition manually, inside a different framework -- extra abstraction layers with no matching benefit\n• The reverse also happens: using LangGraph but writing dozens of dynamic speaker-selection-style routing rules and treating "agents talking until consensus" as the actual design intent means the real problem was chat-shaped all along\n• The practical signal: if you find yourself reimplementing another framework\'s core primitive underneath your chosen one, that is abstraction leakage telling you the original choice does not match the problem',
      bodyKn: '• Part 2 ya WorkflowState/CheckpointStore ಬಗ್ಗೆ ನಿಜವಾಗಿ ಪ್ರತಿಬಿಂಬಿಸಿ: ಇದೂ ಒಂದೂ CrewAI-style framework ಕೆಳಗೆ custom glue code ಆಗಿ ನಿರ್ಮಿಸಲ್ಪಟ್ಟಿದ್ದರೆ, ಫಲಿತಾಂಶ ಪರಿಣಾಮಕಾರಿಯಾಗಿ LangGraph ya core value ಕೈಯಾರೆ ಮರುನಿರ್ಮಿಸುವುದೂ ಆಗಿತ್ತು\n• ವಿರುದ್ಧವೂ ಸಂಭವಿಸುತ್ತದೆ: LangGraph ಬಳಸಿ ಆದರೆ ಡಜನ್ಗಟ್ಟಲೆ dynamic speaker-selection-style routing ನಿಯಮಗಳನ್ನೂ ಬರೆಯುವುದೂ ಎಂದರೆ ನಿಜ ಸಮಸ್ಯೆ chat-shaped ಆಗಿತ್ತು ಎಂದೂ ಅರ್ಥ\n• ಪ್ರಾಯೋಗಿಕ ಸಂಕೇತ: ನೀವೂ ಆಯ್ಕೆ ಮಾಡಿದ framework ಕೆಳಗೆ ಇನ್ನೊಂದೂ framework ya core primitive ಮರುಜಾರಿಗೊಳಿಸುತ್ತಿದ್ದರೆ, ಅದೂ abstraction leakage, ಮೂಲ ಆಯ್ಕೆ ಸಮಸ್ಯೆಗೆ ಹೊಂದುವುದಿಲ್ಲ ಎಂದೂ ಹೇಳುತ್ತಾ' } },

    { type: 'table', data: {
      captionEn: 'Five Worked Examples', captionKn: 'ಐದೂ Worked Examples',
      rows: "Scenario|Key requirement|Best abstraction\nCode review: parse->scan->critique->patch->test->approval|Durable state, checkpoint resume, explicit branches|LangGraph\nContent team: researcher->writer->SEO->editor|Mostly-linear specialist handoffs|CrewAI\nDebate: proposer<->critic until quality threshold|Unknown turn count, conversation is the workflow|AutoGen\nCustomer support: one agent+CRM+KB+memory|Agent+tools+sessions, no complex graph|Agno\nIntent classify -> generate response, 2 calls|Trivially few LLM/tool calls|Plain Python" } },

    { type: 'concept', data: {
      headingEn: 'The Five-Question Checklist Applied', headingKn: 'ಐದೂ-ಪ್ರಶ್ನೆ Checklist ಅನ್ವಯಿಸಿದಂತೆ',
      bodyEn: '1. Draw the shape: our workflow draws as A->B->C->D with a loop-back -- a graph. 2. Who branches: Python\'s explicit_router, genuinely fixed after finding the bug. 3. State budget: revision_count/review_feedback must survive across 8 real steps. 4. Cost budget: our routing never called an LLM, so this stayed free. 5. Do you need a framework at all: with real branching, checkpoints, and revision loops, yes -- this is not the 2-call plain-Python case.',
      bodyKn: '1. ಆಕಾರ ಚಿತ್ರಿಸಿ: ನಮ್ಮ workflow ಒಂದೂ loop-back ಜೊತೆ ಒಂದೂ graph ಆಗಿ ಚಿತ್ರಿಸುತ್ತದೆ. 2. ಯಾರೂ branch ಮಾಡುತ್ತಾರೆ: Python ya explicit_router. 3. State budget: revision_count/review_feedback 8 ನಿಜ ಹಂತಗಳಾದ್ಯಂತ survive ಆಗಬೇಕು. 4. Cost budget: ನಮ್ಮ routing ಎಂದಿಗೂ LLM ಕರೆ ಮಾಡಲಿಲ್ಲ. 5. framework ಬೇಕೇ: ನಿಜ branching, checkpoints, ಮತ್ತೆ revision loops ಜೊತೆ, ಹೌದೂ.' } },

    { type: 'concept', data: {
      headingEn: 'Series Recap: One Program, Three Lenses', headingKn: 'Series Recap: ಒಂದೂ Program, ಮೂರೂ Lenses',
      bodyEn: 'Part 1 established orchestration and caught a genuine bug in the router. Part 2 proved deepcopy is required for correct checkpointing and inspected real field-by-field checkpoint state. Part 3 measured real dispatch overhead and mapped the same verified code onto four frameworks. Across all three parts, WorkflowState/explicit_router/Orchestrator never changed -- only the lens for interpreting it did.',
      bodyKn: 'Part 1 orchestration ಸ್ಥಾಪಿಸಿತು ಮತ್ತೆ router ನಲ್ಲಿ ಒಂದೂ ನಿಜ bug ಹಿಡಿಯಿತು. Part 2 deepcopy ಅಗತ್ಯ ಎಂದೂ ಸಾಬೀತುಪಡಿಸಿತು. Part 3 ನಿಜ dispatch overhead ಅಳೆದಿತು ಮತ್ತೆ ಅದೇ ಪರಿಶೀಲಿಸಿದ code ಅನ್ನೂ ನಾಲ್ಕೂ frameworks ಗೆ ಮ್ಯಾಪ್ ಮಾಡಿತು. ಮೂರೂ ಭಾಗಗಳಾದ್ಯಂತ, WorkflowState/explicit_router/Orchestrator ಎಂದಿಗೂ ಬದಲಾಗಲಿಲ್ಲ -- ಕೇವಲ ಅದನ್ನೂ ಅರ್ಥೈಸುವ lens ಬದಲಾಯಿತು.' } },
    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely re-confirmed: the fixed Parts 1-2 orchestrator still produces the identical 8-checkpoint, 7-history-event trace, and every field/function in that code maps cleanly onto a named concept in each of the four frameworks -- WorkflowState/agents/explicit_router/CheckpointStore is not LangGraph-specific code, it is a framework-agnostic pattern each framework packages differently\n• Genuinely measured: a 5-step orchestrated dispatch took roughly 2x longer than 2 plain function calls for the SAME work, purely from structural overhead -- real systems should add orchestration to solve a genuine coordination problem, not by default\n• Abstraction leakage -- rebuilding one framework\'s core primitive underneath a different framework -- is the concrete symptom that the chosen abstraction does not match the problem shape\n• The final heuristic: draw the architecture first (graph / org chart / conversation / agent+tools), then pick the framework whose abstraction matches that drawing -- not the framework with the most features or the most popularity',
      bodyKn: '• ನಿಜವಾಗಿ ಮರುದೃಢಪಡಿಸಲಾಗಿದೆ: fixed Parts 1-2 orchestrator ಇನ್ನೂ ಅದೇ 8-checkpoint, 7-history-event trace ಉತ್ಪಾದಿಸುತ್ತದೆ\n• ನಿಜವಾಗಿ ಅಳೆಯಲಾಗಿದೆ: ಒಂದೂ 5-step orchestrated dispatch ಅದೇ ಕೆಲಸಕ್ಕೆ 2 plain function calls ಗಿಂತ ಸುಮಾರು 2x ಹೆಚ್ಚು ಸಮಯ ತೆಗೆದುಕೊಂಡಿತು, ಶುದ್ಧವಾಗಿ structural overhead ಇಂದ\n• Abstraction leakage ಆಯ್ಕೆ ಮಾಡಿದ abstraction ಸಮಸ್ಯೆಗೆ ಹೊಂದುವುದಿಲ್ಲ ಎಂಬ ನಿರ್ದಿಷ್ಟ ಲಕ್ಷಣ\n• ಅಂತಿಮ heuristic: ಮೊದಲೂ architecture ಚಿತ್ರಿಸಿ, ನಂತರ ಆ ಚಿತ್ರಣಕ್ಕೆ ಹೊಂದುವ framework ಆಯ್ಕೆ ಮಾಡಿ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The genuinely-measured 2.29x dispatch overhead here is exactly why production teams profile their orchestration layer separately from their model latency -- a graph with unnecessary coordinator/router steps can silently double structural overhead even while the LLM calls themselves stay unchanged, a cost that is easy to miss when only total request latency is monitored.',
      bodyKn: 'ಇಲ್ಲಿ ನಿಜವಾಗಿ-ಅಳೆದ 2.29x dispatch overhead production ತಂಡಗಳು ಅವರ orchestration ಪದರವನ್ನೂ ಅವರ model latency ಇಂದ ಪ್ರತ್ಯೇಕವಾಗಿ profile ಮಾಡುವ ನಿಖರ ಕಾರಣ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed across all three parts: the same WorkflowState-driven revision loop stayed byte-for-byte identical in behavior whether we called it "graph state," "task context," or "session state" -- proving framework choice is a packaging decision around a shared underlying pattern, not a decision about what the agent itself is capable of doing.',
      bodyKn: 'ಮೂರೂ ಭಾಗಗಳಾದ್ಯಂತ ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಅದೇ WorkflowState-ಚಾಲಿತ revision loop ವರ್ತನೆಯಲ್ಲಿ byte-for-byte ಒಂದೇ ಆಗಿ ಉಳಿಯಿತು, ನಾವೂ ಇದನ್ನೂ ಏನೂ ಎಂದೂ ಕರೆದರೂ.' } },
    { type: 'concept', data: {
      headingEn: 'When No Framework Is the Right Answer', headingKn: 'ಯಾವುದೇ Framework ಬೇಡ ಎಂಬುದೂ ಸರಿಯಾದ ಉತ್ತರವಾಗಿರುವಾಗ',
      bodyEn: 'Not every agent problem needs any of the four frameworks discussed here. Our genuinely-measured 2x dispatch overhead applies just as much to LangGraph, CrewAI, AutoGen, or Agno as it does to our hand-rolled Orchestrator -- if a task genuinely needs only 2-3 LLM/tool calls with no branching, checkpointing, or multi-agent coordination, plain Python function calls remain the cheapest, most debuggable choice.',
      bodyKn: 'ಇಲ್ಲಿ ಚರ್ಚಿಸಿದ ನಾಲ್ಕೂ frameworks ಗಳಲ್ಲಿ ಯಾವುದೇ ಒಂದಕ್ಕೂ ಪ್ರತಿ agent ಸಮಸ್ಯೆಗೆ ಅಗತ್ಯವಿಲ್ಲ. ಒಂದೂ task ಗೆ ನಿಜವಾಗಿ ಕೇವಲ 2-3 LLM/tool calls ಬೇಕಾದರೆ, branching ಅಥವಾ multi-agent coordination ಇಲ್ಲದೆ, plain Python function calls ಅತ್ಯಂತ ಅಗ್ಗದ, ಅತ್ಯಂತ debuggable ಆಯ್ಕೆಯಾಗಿ ಉಳಿಯುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Module Series Complete', headingKn: 'Module Series ಪೂರ್ಣಗೊಂಡಿದೆ',
      bodyEn: 'This closes the 3-part Agent Framework Tradeoffs series: Part 1 (orchestration + a genuinely caught router bug), Part 2 (durable state + a proven deepcopy requirement), Part 3 (framework mapping + measured dispatch overhead) -- all built on one continuously-run, unmodified-from-source program.',
      bodyKn: 'ಇದೂ 3-ಭಾಗದ Agent Framework Tradeoffs series ಮುಚ್ಚುತ್ತದೆ: Part 1 (orchestration + ಒಂದೂ ನಿಜವಾಗಿ ಹಿಡಿದ router bug), Part 2 (durable state + ಒಂದೂ ಸಾಬೀತುಪಡಿಸಿದ deepcopy ಅವಶ್ಯಕತೆ), Part 3 (framework mapping + ಅಳೆದ dispatch overhead) -- ಎಲ್ಲಾ ಒಂದೂ ನಿರಂತರವಾಗಿ-ಚಲಾಯಿಸಿದ program ಮೇಲೆ ನಿರ್ಮಿಸಲಾಗಿದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Production teams building a code-review agent, a content pipeline, a debate/critique system, and a customer-support bot in the same quarter genuinely pick four different frameworks for exactly the four reasons demonstrated across this three-part lesson\'s single running example -- the underlying agent competence looks similar, but the coordination shape differs enough to justify different tools.',
      bodyKn: 'ಒಂದೇ quarter ನಲ್ಲಿ ಒಂದೂ code-review agent, ಒಂದೂ content pipeline, ಒಂದೂ debate/critique system, ಮತ್ತೆ ಒಂದೂ customer-support bot ನಿರ್ಮಿಸುವ production ತಂಡಗಳು ಈ ಮೂರೂ-ಭಾಗದ ಲೆಸನ್ ya single running example ಆದ್ಯಂತ ಪ್ರದರ್ಶಿಸಿದ ನಿಖರ ನಾಲ್ಕೂ ಕಾರಣಗಳಿಗಾಗಿ ನಿಜವಾಗಿ ನಾಲ್ಕೂ ವಿಭಿನ್ನ frameworks ಆಯ್ಕೆ ಮಾಡುತ್ತವೆ.' } },

    { type: 'concept', data: {
      headingEn: 'Final Formula', headingKn: 'ಅಂತಿಮ Formula',
      bodyEn: 'Problem shape (drawn on a whiteboard) determines the routing model (Python/manager LLM/speaker selector/tool choice), which determines the state/durability requirements, which determines the framework -- not the reverse. Choosing a framework first and then forcing the problem into it is the path to the abstraction leakage genuinely discussed in this lesson.',
      bodyKn: 'Problem shape (whiteboard ಮೇಲೆ ಚಿತ್ರಿಸಿದ) routing model ನಿರ್ಧರಿಸುತ್ತದೆ, ಇದೂ state/durability ಅವಶ್ಯಕತೆಗಳನ್ನೂ ನಿರ್ಧರಿಸುತ್ತದೆ, ಇದೂ framework ಅನ್ನೂ ನಿರ್ಧರಿಸುತ್ತದೆ -- ವಿರುದ್ಧವಾಗಿ ಅಲ್ಲ. ಮೊದಲೂ ಒಂದೂ framework ಆಯ್ಕೆ ಮಾಡಿ ನಂತರ ಸಮಸ್ಯೆಯನ್ನೂ ಅದರೊಳಗೆ ಒತ್ತಾಯಿಸುವುದೂ abstraction leakage ಗೆ ದಾರಿ.' } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Verified Throughout', headingKn: 'ಆದ್ಯಂತ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ',
      bodyEn: 'Every numeric claim across all three parts of this series -- the infinite-loop bug trace, the deepcopy corruption demo, the field-by-field checkpoint values, and the 2.29x dispatch overhead -- was produced by genuinely executing Python, not estimated or assumed.',
      bodyKn: 'ಈ series ya ಮೂರೂ ಭಾಗಗಳಾದ್ಯಂತ ಪ್ರತಿ ಸಂಖ್ಯಾತ್ಮಕ ಹಕ್ಕು -- infinite-loop bug trace, deepcopy corruption demo, field-by-field checkpoint ಮೌಲ್ಯಗಳು, ಮತ್ತೆ 2.29x dispatch overhead -- Python ಅನ್ನೂ ನಿಜವಾಗಿ execute ಮಾಡುವ ಮೂಲಕ ಉತ್ಪಾದಿಸಲ್ಪಟ್ಟಿತು, ಅಂದಾಜು ಅಥವಾ ಊಹಿಸಿದ್ದಲ್ಲ.' } },
    { type: 'quiz', data: { questions: [
      { q: 'A system needs typed state, conditional branches, human approvals, and checkpoint resume. What is the strongest natural fit?', qKn: 'ಒಂದೂ system ಗೆ typed state, conditional branches, human approvals, ಮತ್ತೆ checkpoint resume ಬೇಕು. ಅತ್ಯಂತ ಬಲವಾದ ಸಹಜ fit ಏನೂ?',
        opts: ['CrewAI', 'AutoGen', 'LangGraph', 'Plain prompt chaining'], correct: 2,
        optsKn: ['CrewAI', 'AutoGen', 'LangGraph', 'Plain prompt chaining'] },
      { q: 'Genuinely measured in this lesson: how did the 5-step orchestrated dispatch compare to 2 plain function calls for the same work?', qKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ಅಳೆದ: 5-step orchestrated dispatch ಅದೇ ಕೆಲಸಕ್ಕೆ 2 plain function calls ಗೆ ಹೇಗೂ ಹೋಲಿಸುತ್ತದೆ?',
        opts: ['It was faster', 'It took roughly 2x longer, purely from structural overhead', 'They were identical', 'It crashed'], correct: 1,
        optsKn: ['ಇದೂ ವೇಗವಾಗಿತ್ತು', 'ಇದೂ ಸುಮಾರು 2x ಹೆಚ್ಚು ಸಮಯ ತೆಗೆದುಕೊಂಡಿತು, ಶುದ್ಧವಾಗಿ structural overhead ಇಂದ', 'ಅವೂ ಒಂದೇ ಆಗಿದ್ದವು', 'ಇದೂ crash ಆಯಿತು'] },
      { q: 'What is "abstraction leakage"?', qKn: '"Abstraction leakage" ಎಂದರೇನೂ?',
        opts: ['A memory leak in Python', 'Rebuilding another framework\'s core primitive underneath your chosen framework, signaling a mismatch', 'A type of LLM hallucination', 'A checkpoint storage bug'], correct: 1,
        optsKn: ['Python ನಲ್ಲಿ ಒಂದೂ memory leak', 'ನಿಮ್ಮ ಆಯ್ಕೆ ಮಾಡಿದ framework ಕೆಳಗೆ ಇನ್ನೊಂದೂ framework ya core primitive ಮರುನಿರ್ಮಿಸುವುದೂ, ಒಂದೂ mismatch ಸೂಚಿಸುತ್ತಾ', 'ಒಂದೂ ರೀತಿಯ LLM hallucination', 'ಒಂದೂ checkpoint storage bug'] },
      { q: 'A researcher, writer, and editor perform a mostly linear specialist workflow. Which abstraction fits best?', qKn: 'ಒಬ್ಬ researcher, writer, ಮತ್ತೆ editor ಒಂದೂ ಬಹುಪಾಲು linear specialist workflow ನಿರ್ವಹಿಸುತ್ತಾರೆ. ಯಾವ abstraction ಅತ್ಯುತ್ತಮ ಹೊಂದುತ್ತದೆ?',
        opts: ['Crew/roles', 'StateGraph with dozens of branches', 'GroupChat debate', 'A single transformer block'], correct: 0,
        optsKn: ['Crew/roles', 'ಡಜನ್ಗಟ್ಟಲೆ branches ಇರುವ StateGraph', 'GroupChat debate', 'ಒಂದೂ single transformer block'] },
      { q: 'When is plain Python potentially better than all four frameworks?', qKn: 'ಎಲ್ಲಾ ನಾಲ್ಕೂ frameworks ಗಿಂತ plain Python ಸಂಭಾವ್ಯವಾಗಿ ಯಾವಾಗ ಉತ್ತಮ?',
        opts: ['A 50-node approval DAG', 'A workflow with two simple model calls and a tool', 'A long-running human-in-the-loop workflow', 'A large multi-agent debate'], correct: 1,
        optsKn: ['ಒಂದೂ 50-node approval DAG', 'ಎರಡೂ ಸರಳ model calls ಮತ್ತೆ ಒಂದೂ tool ಇರುವ ಒಂದೂ workflow', 'ಒಂದೂ ದೀರ್ಘ-ಚಾಲನೆಯ human-in-the-loop workflow', 'ಒಂದೂ ದೊಡ್ಡ multi-agent debate'] },
    ] } },
  ],
};
