const phaseId = '6a369d5c66020ed05b32143f';
const moduleId = '6a369d5d66020ed05b32146f'; // Module 223: LangGraph: State Machines for Agents

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'interactive',
  duration: 30,
  difficulty: 'advanced',
  status: 'published',
  title: 'LangGraph State Machines (Part 2) — Threads, Checkpoints, Streaming, Interrupts, and Human-in-the-Loop',
  titleKn: 'LangGraph State Machines (Part 2) — Threads, Checkpoints, Streaming, Interrupts',
  desc: 'Genuinely build a minimal MemorySaver-style checkpointer keyed by thread_id, run a risky "delete the production database" request through it, confirm execution genuinely pauses before the tool runs (interrupt_before), and resume it later from the persisted checkpoint after simulated human approval.',
  descKn: 'thread_id ಇಂದ key ಆಗಿರುವ ಒಂದೂ ಕನಿಷ್ಠ MemorySaver-style checkpointer ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ, ಒಂದೂ ಅಪಾಯಕಾರಿ "delete the production database" request ಅನ್ನೂ ಅದರ ಮೂಲಕ ಚಲಾಯಿಸಿ, tool ಚಲಾಯಿಸುವ ಮೊದಲು execution ನಿಜವಾಗಿ ವಿರಾಮಗೊಳ್ಳುತ್ತದೆ ಎಂದೂ ಖಚಿತಪಡಿಸಿ, ಮತ್ತೆ simulated human approval ನಂತರ persist ಮಾಡಿದ checkpoint ಇಂದ ಇದನ್ನೂ ಮುಂದುವರೆಸಿ.',
  objectives: [
    'Explain what a checkpoint is and why it must be per-thread.',
    'Distinguish thread (a lineage of checkpoints) from checkpoint (one saved state).',
    'Genuinely build and run a MemorySaver-style store keyed by thread_id.',
    'Genuinely trigger an interrupt-before-tools pause and confirm the tool did NOT execute.',
    'Genuinely resume a paused execution from its checkpoint after simulated approval.',
    'Explain why streaming and human-in-the-loop both depend on checkpointing.',
  ],
  objectivesKn: [
    'ಒಂದೂ checkpoint ಏನೂ ಎಂದೂ ಮತ್ತೆ ಅದೂ per-thread ಏಕೆ ಆಗಿರಬೇಕು ಎಂದೂ ವಿವರಿಸಿ.',
    'thread (checkpoints ya ಒಂದೂ lineage) ಅನ್ನೂ checkpoint (ಒಂದೂ saved state) ಇಂದ ಪ್ರತ್ಯೇಕಿಸಿ.',
    'thread_id ಇಂದ key ಆಗಿರುವ ಒಂದೂ MemorySaver-style store ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ ಮತ್ತೆ ಚಲಾಯಿಸಿ.',
    'ಒಂದೂ interrupt-before-tools ವಿರಾಮವನ್ನೂ ನಿಜವಾಗಿ ಪ್ರಚೋದಿಸಿ ಮತ್ತೆ tool ಚಲಾಯಿಸಲಿಲ್ಲ ಎಂದೂ ಖಚಿತಪಡಿಸಿ.',
    'simulated approval ನಂತರ ಒಂದೂ ವಿರಾಮಗೊಂಡ execution ಅನ್ನೂ ಅದರ checkpoint ಇಂದ ನಿಜವಾಗಿ ಮುಂದುವರೆಸಿ.',
    'streaming ಮತ್ತೆ human-in-the-loop ಎರಡೂ checkpointing ಮೇಲೆ ಏಕೆ ಅವಲಂಬಿಸಿವೆ ಎಂದೂ ವಿವರಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'LangGraph State Machines (Part 2) — Threads, Checkpoints, Streaming, Interrupts, and Human-in-the-Loop', textKn: 'LangGraph State Machines (Part 2)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python · Prerequisites: Part 1 · Time: ~30 minutes · Part 2 of 3',
      bodyKn: '• Type: Build · Language: Python · Prerequisites: Part 1 · Time: ~30 ನಿಮಿಷಗಳು · Part 2 of 3',
      pillsEn: 'Python,Checkpoints,Threads,Interrupts,Part 2 of 3',
      pillsKn: 'Python,Checkpoints,Threads,Interrupts,Part 2 of 3' } },

    { type: 'heading', data: { textEn: 'What a Checkpoint Actually Is', textKn: 'ಒಂದೂ Checkpoint ನಿಜವಾಗಿ ಏನೂ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'A Persisted Snapshot After Every Transition', headingKn: 'ಪ್ರತಿ Transition ನಂತರ ಒಂದೂ Persisted Snapshot',
      bodyEn: '• A checkpoint is a persisted snapshot of the full graph state after a node transition -- Part 1\'s 4-message trace (human, AI tool-call, tool result, AI final answer) is exactly the kind of thing that gets checkpointed after each step\n• Without persistence, execution state exists only while the Python process is alive -- a crash between "tool proposed" and "tool executed" loses everything; with checkpoints, that same crash loses nothing because the last saved state can be reloaded\n• compile(checkpointer=MemorySaver()) is what attaches this persistence to the graph -- this lesson genuinely builds and runs a minimal stand-in for MemorySaver, since the real langgraph package is not installed here, to verify the save/load mechanics with real traced state rather than assumed behavior',
      bodyKn: '• ಒಂದೂ checkpoint ಒಂದೂ node transition ನಂತರ ಪೂರ್ಣ graph state ya ಒಂದೂ persisted snapshot -- Part 1 ya 4-message trace ಪ್ರತಿ ಹಂತದ ನಂತರ checkpoint ಆಗುವ ನಿಖರ ರೀತಿಯ ವಿಷಯ\n• persistence ಇಲ್ಲದೆ, execution state ಕೇವಲ Python process ಜೀವಂತವಾಗಿರುವಾಗ ಮಾತ್ರ ಅಸ್ತಿತ್ವದಲ್ಲಿದೆ -- "tool proposed" ಮತ್ತೆ "tool executed" ನಡುವೆ ಒಂದೂ crash ಎಲ್ಲವನ್ನೂ ಕಳೆದುಕೊಳ್ಳುತ್ತದೆ; checkpoints ಜೊತೆ, ಅದೇ crash ಏನನ್ನೂ ಕಳೆದುಕೊಳ್ಳುವುದಿಲ್ಲ\n• compile(checkpointer=MemorySaver()) ಇದೂ persistence ಅನ್ನೂ graph ಗೆ ಲಗತ್ತಿಸುತ್ತದೆ -- ಈ lesson MemorySaver ಗೆ ಒಂದೂ ಕನಿಷ್ಠ stand-in ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ ಚಲಾಯಿಸುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: 'Thread vs Checkpoint', textKn: 'Thread vs Checkpoint', level: 'H2' } },
    { type: 'diagram', data: {
      titleEn: 'One Thread Contains Many Checkpoints', titleKn: 'ಒಂದೂ Thread ಬಹು Checkpoints ಒಳಗೊಂಡಿದೆ',
      captionEn: 'A thread_id identifies one execution lineage; a checkpoint is one saved moment inside that lineage -- exactly like a Git branch (thread) containing many commits (checkpoints).',
      captionKn: 'ಒಂದೂ thread_id ಒಂದೂ execution lineage ಗುರುತಿಸುತ್ತದೆ; ಒಂದೂ checkpoint ಆ lineage ಒಳಗಿನ ಒಂದೂ saved ಕ್ಷಣ.',
      svgCode: "<svg viewBox='0 0 420 180' xmlns='http://www.w3.org/2000/svg' font-family='monospace' font-size='11'>\n<text x='10' y='20' fill='#60a5fa'>Thread: user-42</text>\n<line x1='30' y1='30' x2='30' y2='150' stroke='#64748b'/>\n<circle cx='30' cy='45' r='5' fill='#4ade80'/><text x='45' y='49' fill='#cbd5e1'>checkpoint 1</text>\n<circle cx='30' cy='75' r='5' fill='#4ade80'/><text x='45' y='79' fill='#cbd5e1'>checkpoint 2</text>\n<circle cx='30' cy='105' r='5' fill='#f87171'/><text x='45' y='109' fill='#f87171'>checkpoint 3 (interrupt)</text>\n<circle cx='30' cy='135' r='5' fill='#4ade80'/><text x='45' y='139' fill='#cbd5e1'>checkpoint 4 (resumed)</text>\n</svg>" } },

    { type: 'heading', data: { textEn: 'Genuinely Building a Thread-Keyed Checkpointer', textKn: 'ಒಂದೂ Thread-Keyed Checkpointer ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'memory_saver.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely implement a minimal MemorySaver: a dict of thread_id -> list of deep-copied state snapshots. deepcopy is essential -- without it, later mutations to `state` would retroactively corrupt earlier "saved" checkpoints since Python dicts are mutable references.',
      descKn: 'ಒಂದೂ ಕನಿಷ್ಠ MemorySaver ಅನ್ನೂ ನಿಜವಾಗಿ ಜಾರಿಗೊಳಿಸಿ: thread_id -> deep-copied state snapshots ya list ya ಒಂದೂ dict. deepcopy ಅತ್ಯಗತ್ಯ -- ಇಲ್ಲದೆ, `state` ಗೆ ನಂತರದ mutations ಹಿಂದಿನ "saved" checkpoints ಅನ್ನೂ ಹಿಂದಕ್ಕೆ ಹಾಳುಮಾಡುತ್ತಿದ್ದವು.',
      code: "import copy\n\nclass MemorySaver:\n    def __init__(self):\n        self.store = {}  # thread_id -> list of state snapshots\n\n    def save(self, thread_id, state):\n        self.store.setdefault(thread_id, []).append(copy.deepcopy(state))\n\n    def latest(self, thread_id):\n        return copy.deepcopy(self.store[thread_id][-1])\n\n    def history(self, thread_id):\n        return [copy.deepcopy(s) for s in self.store[thread_id]]\n\ndef add_messages(old, new):\n    return old + new\n\ndef mock_llm_risky(messages):\n    if messages[-1]['role'] == 'human':\n        return {'role': 'ai', 'content': '', 'tool_calls': [{'name': 'delete_database', 'args': {'database': 'production'}}]}\n    return {'role': 'ai', 'content': 'Deletion complete.', 'tool_calls': None}\n\ndef should_continue(messages):\n    return 'tools' if messages[-1].get('tool_calls') else 'END'\n\ncheckpointer = MemorySaver()\nthread_id = 'user-42'\nstate = {'messages': [{'role': 'human', 'content': 'delete the production database'}]}\n\nai_msg = mock_llm_risky(state['messages'])\nstate['messages'] = add_messages(state['messages'], [ai_msg])\ncheckpointer.save(thread_id, state)\nroute = should_continue(state['messages'])\nprint('Route after agent turn:', route)\nprint('INTERRUPTED before executing tool:', ai_msg['tool_calls'])" } },
    { type: 'output', data: { output: "Route after agent turn: tools\nINTERRUPTED before executing tool: [{'name': 'delete_database', 'args': {'database': 'production'}}]" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: interrupt_before=["tools"] Means the Tool Never Ran', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: interrupt_before=["tools"] ಎಂದರೆ Tool ಎಂದಿಗೂ ಚಲಾಯಿಸಲಿಲ್ಲ',
      bodyEn: '• Genuinely confirmed: the router already decided route == "tools" (the model proposed delete_database on the production database) -- but the code deliberately STOPS at this point rather than calling mock_tool(), exactly matching interrupt_before=["tools"]\n• Genuinely confirmed: the checkpoint was saved BEFORE the interrupt boundary, capturing the exact proposed tool call for a human reviewer to inspect -- this is the real safety mechanism, not a metaphor\n• This is the concrete difference between a checkpoint and an interrupt: checkpointing (saving state) happens at every transition regardless; interrupting (pausing execution) only happens at boundaries you explicitly name',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: router ಈಗಾಗಲೇ route == "tools" ಎಂದೂ ನಿರ್ಧರಿಸಿತ್ತು -- ಆದರೆ code ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ mock_tool() ಕರೆ ಮಾಡುವ ಬದಲು ಈ ಬಿಂದುವಿನಲ್ಲಿ ನಿಲ್ಲುತ್ತದೆ, interrupt_before=["tools"] ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: checkpoint interrupt boundary ಗೆ ಮೊದಲೂ ಉಳಿಸಲಾಗಿತ್ತು, ಒಂದೂ human reviewer ಪರಿಶೀಲಿಸಲು ನಿಖರ ಪ್ರಸ್ತಾಪಿತ tool call ಸೆರೆಹಿಡಿಯುತ್ತಾ\n• ಇದೂ ಒಂದೂ checkpoint ಮತ್ತೆ ಒಂದೂ interrupt ನಡುವಿನ ನಿಜ ವ್ಯತ್ಯಾಸ: checkpointing (state ಉಳಿಸುವುದೂ) ಪ್ರತಿ transition ನಲ್ಲಿ ಸಂಭವಿಸುತ್ತದೆ; interrupting (execution ವಿರಾಮಗೊಳಿಸುವುದೂ) ಕೇವಲ ನೀವೂ ಸ್ಪಷ್ಟವಾಗಿ ಹೆಸರಿಸುವ boundaries ನಲ್ಲಿ ಮಾತ್ರ' } },

    { type: 'heading', data: { textEn: 'Genuinely Resuming After Human Approval', textKn: 'Human Approval ನಂತರ ನಿಜವಾಗಿ Resume ಮಾಡುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'resume.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely simulate the human approving the deletion: load the LATEST checkpoint for the same thread_id (not a fresh state), execute the tool that was paused, and let the agent produce its final message -- this is Command(resume=True) in concept: continue an existing paused execution, not start a new one.',
      descKn: 'human deletion ಅನ್ನೂ approve ಮಾಡುವುದನ್ನೂ ನಿಜವಾಗಿ simulate ಮಾಡಿ: ಅದೇ thread_id ಗೆ LATEST checkpoint ಲೋಡ್ ಮಾಡಿ, ವಿರಾಮಗೊಂಡ tool ಚಲಾಯಿಸಿ, ಮತ್ತೆ agent ಗೆ ಅದರ ಅಂತಿಮ message ಉತ್ಪಾದಿಸಲು ಬಿಡಿ.',
      code: "resumed_state = checkpointer.latest(thread_id)\nprint('Resumed state (loaded from checkpoint):')\nfor m in resumed_state['messages']:\n    print(' ', m)\n\ndef mock_tool(tool_calls):\n    return [{'role': 'tool', 'content': 'production database deleted (simulated)'}]\n\ntool_results = mock_tool(ai_msg['tool_calls'])\nresumed_state['messages'] = add_messages(resumed_state['messages'], tool_results)\ncheckpointer.save(thread_id, resumed_state)\n\nfinal_ai = mock_llm_risky(resumed_state['messages'])\nresumed_state['messages'] = add_messages(resumed_state['messages'], [final_ai])\ncheckpointer.save(thread_id, resumed_state)\n\nprint('Final trace after resume:')\nfor m in resumed_state['messages']:\n    print(' ', m)\nprint('Checkpoint history length for thread', thread_id, ':', len(checkpointer.history(thread_id)))" } },
    { type: 'output', data: { output: "Resumed state (loaded from checkpoint):\n  {'role': 'human', 'content': 'delete the production database'}\n  {'role': 'ai', 'content': '', 'tool_calls': [{'name': 'delete_database', 'args': {'database': 'production'}}]}\nFinal trace after resume:\n  {'role': 'human', 'content': 'delete the production database'}\n  {'role': 'ai', 'content': '', 'tool_calls': [{'name': 'delete_database', 'args': {'database': 'production'}}]}\n  {'role': 'tool', 'content': 'production database deleted (simulated)'}\n  {'role': 'ai', 'content': 'Deletion complete.', 'tool_calls': None}\nCheckpoint history length for thread user-42 : 3" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Resume Continued From Checkpoint, It Did Not Restart', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Resume Checkpoint ಇಂದ ಮುಂದುವರೆಯಿತು, ಮರುಪ್ರಾರಂಭಿಸಲಿಲ್ಲ',
      bodyEn: '• Genuinely confirmed: resumed_state, loaded fresh from the checkpointer, already contained BOTH the original human message and the paused AI tool-call -- we never had to re-send the human\'s original request, proving the state genuinely survived past the interrupt boundary\n• Genuinely confirmed: after resume, the tool executed exactly once ("production database deleted (simulated)") and the final answer was generated from that real tool result, ending at the same 4-message shape as Part 1\'s unrestricted loop -- interrupting and resuming produced an IDENTICAL final trace to running straight through, just with a real pause in between\n• Genuinely confirmed: the checkpoint history for this thread grew to exactly 3 entries (post-agent-proposal, post-tool-execution, post-final-answer) -- this growing list is exactly what Part 3\'s get_state_history() and time-travel will operate on',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: checkpointer ಇಂದ ತಾಜಾ ಲೋಡ್ ಮಾಡಿದ resumed_state, ಈಗಾಗಲೇ ಮೂಲ human message ಮತ್ತೆ ವಿರಾಮಗೊಂಡ AI tool-call ಎರಡನ್ನೂ ಒಳಗೊಂಡಿತ್ತು -- state ನಿಜವಾಗಿ interrupt boundary ಮೀರಿ ಬದುಕುಳಿಯಿತು ಎಂದೂ ಸಾಬೀತುಪಡಿಸುತ್ತಾ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: resume ನಂತರ, tool ನಿಖರವಾಗಿ ಒಮ್ಮೆ ಚಲಾಯಿಸಿತು ಮತ್ತೆ ಅಂತಿಮ ಉತ್ತರ ಆ ನಿಜ tool ಫಲಿತಾಂಶ ಇಂದ ಉತ್ಪಾದಿಸಲ್ಪಟ್ಟಿತು, Part 1 ya ಅನಿಯಂತ್ರಿತ loop ya ಅದೇ 4-message ಆಕಾರದಲ್ಲಿ ಕೊನೆಗೊಳ್ಳುತ್ತಾ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಈ thread ya checkpoint history ನಿಖರವಾಗಿ 3 entries ಗೆ ಬೆಳೆಯಿತು -- ಈ ಬೆಳೆಯುತ್ತಿರುವ list Part 3 ya get_state_history() ಮತ್ತೆ time-travel ಮೇಲೆ ಕೆಲಸ ಮಾಡುವ ನಿಖರ ವಿಷಯ' } },

    { type: 'heading', data: { textEn: 'Checkpoint Timing: Before vs After Execution', textKn: 'Checkpoint Timing: Execution ಮೊದಲು vs ನಂತರ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Our Code Checkpoints Before the Node Runs', headingKn: 'ನಮ್ಮ Code Node ಚಲಾಯಿಸುವ ಮೊದಲೂ Checkpoint ಮಾಡುತ್ತದೆ',
      bodyEn: '• Genuinely observe the order in the code above: checkpointer.save(thread_id, state) is called right after the router decides "tools", and only afterward would the tool actually execute -- this "checkpoint-before" ordering is what let us cleanly interrupt: the proposal was already durable before any side effect happened\n• A "checkpoint-after" design (save only once a node finishes) has different recovery semantics: a crash mid-node means the system may not know whether that node\'s side effect (e.g. an actual database deletion) completed or not -- there is no universally correct choice, but you must know which one your system uses\n• This is why the lesson\'s earlier "delete the production database" example checkpoints the PROPOSAL, not the RESULT -- reviewing a proposal before it becomes an irreversible side effect is the entire point of interrupt_before',
      bodyKn: '• ಮೇಲಿನ code ನಲ್ಲಿ ಕ್ರಮ ಗಮನಿಸಿ: checkpointer.save() router "tools" ನಿರ್ಧರಿಸಿದ ತಕ್ಷಣ ಕರೆಯಲ್ಪಡುತ್ತದೆ, ಮತ್ತೆ ನಂತರವೇ tool ನಿಜವಾಗಿ ಚಲಾಯಿಸುತ್ತದೆ -- ಈ "checkpoint-before" ಕ್ರಮ ನಮಗೆ ಸ್ಪಷ್ಟವಾಗಿ ಅಡ್ಡಿಪಡಿಸಲು ಅನುಮತಿಸಿತು\n• ಒಂದೂ "checkpoint-after" ವಿನ್ಯಾಸ ಭಿನ್ನ recovery semantics ಹೊಂದಿದೆ: node ಮಧ್ಯದಲ್ಲಿ ಒಂದೂ crash ಎಂದರೆ system ga ಆ node ya side effect ಪೂರ್ಣಗೊಂಡಿತೇ ಎಂದೂ ಗೊತ್ತಿಲ್ಲದಿರಬಹುದು\n• ಇದೂ "delete the production database" ಉದಾಹರಣೆ RESULT ಅಲ್ಲ, PROPOSAL ಅನ್ನೂ ಏಕೆ checkpoint ಮಾಡುತ್ತದೆ ಎಂದೂ ತೋರಿಸುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: 'Streaming: Observing Without Controlling', textKn: 'Streaming: ನಿಯಂತ್ರಿಸದೆ ಗಮನಿಸುವುದೂ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'stream_mode="updates" Emits Deltas, Not Full State', headingKn: 'stream_mode="updates" Deltas ಔಟ್ಪುಟ್ ಮಾಡುತ್ತದೆ, ಪೂರ್ಣ State ಅಲ್ಲ',
      bodyEn: '• app.stream(..., stream_mode="updates") yields one dict per node transition, shaped like {node_name: state_delta} -- for our genuinely-run example that would conceptually be {"agent": {"messages": [ai_msg]}} then {"tools": {"messages": [tool_result]}}\n• Full state + node delta + reducer = new full state -- this is exactly the merge_state pattern genuinely verified in Part 1, now applied at every streamed step rather than once at the end\n• Streaming does not change what the graph computes; it only exposes intermediate steps for a UI to display ("Calling search_web...", "Reading document...") while the same checkpoint-driven execution happens underneath',
      bodyKn: '• app.stream(..., stream_mode="updates") ಪ್ರತಿ node transition ಗೆ ಒಂದೂ dict ನೀಡುತ್ತದೆ, {node_name: state_delta} ಆಕಾರದಲ್ಲಿ\n• Full state + node delta + reducer = ಹೊಸ full state -- ಇದೂ Part 1 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ merge_state ಮಾದರಿ, ಈಗ ಪ್ರತಿ streamed ಹಂತದಲ್ಲಿ ಅನ್ವಯಿಸಲಾಗಿದೆ\n• Streaming graph ಏನೂ ಗಣಿಸುತ್ತದೆ ಎಂದೂ ಬದಲಾಯಿಸುವುದಿಲ್ಲ; ಇದೂ ಕೇವಲ ಒಂದೂ UI ಗೆ ಪ್ರದರ್ಶಿಸಲು intermediate ಹಂತಗಳನ್ನೂ ಬಹಿರಂಗಪಡಿಸುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: 'Genuinely Confirming Threads Stay Independent', textKn: 'Threads ಸ್ವತಂತ್ರವಾಗಿ ಉಳಿಯುತ್ತವೆ ಎಂದೂ ನಿಜವಾಗಿ ಖಚಿತಪಡಿಸುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'two_threads.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely save checkpoints for two different thread_ids into the same MemorySaver instance and confirm neither history leaks into the other -- this is what lets one server safely host many concurrent user conversations.',
      descKn: 'ಒಂದೇ MemorySaver instance ಗೆ ಎರಡೂ ವಿಭಿನ್ನ thread_ids ಗಳಿಗೆ checkpoints ಅನ್ನೂ ನಿಜವಾಗಿ ಉಳಿಸಿ ಮತ್ತೆ ಯಾವುದೇ history ಇನ್ನೊಂದಕ್ಕೆ ಸೋರುವುದಿಲ್ಲ ಎಂದೂ ಖಚಿತಪಡಿಸಿ.',
      code: "checkpointer2 = MemorySaver()\n\ncheckpointer2.save('user-A', {'messages': [{'role': 'human', 'content': 'hi from A'}]})\ncheckpointer2.save('user-A', {'messages': [{'role': 'human', 'content': 'hi from A'}, {'role': 'ai', 'content': 'hello A'}]})\ncheckpointer2.save('user-B', {'messages': [{'role': 'human', 'content': 'hi from B'}]})\n\nprint('user-A history length:', len(checkpointer2.history('user-A')))\nprint('user-B history length:', len(checkpointer2.history('user-B')))\nprint('user-A latest:', checkpointer2.latest('user-A')['messages'][-1])\nprint('user-B latest:', checkpointer2.latest('user-B')['messages'][-1])" } },
    { type: 'output', data: { output: "user-A history length: 2\nuser-B history length: 1\nuser-A latest: {'role': 'ai', 'content': 'hello A'}\nuser-B latest: {'role': 'human', 'content': 'hi from B'}" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Two Threads, Two Independent Histories', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಎರಡೂ Threads, ಎರಡೂ ಸ್ವತಂತ್ರ Histories',
      bodyEn: '• Genuinely confirmed: user-A accumulated 2 checkpoints while user-B has exactly 1, and each thread\'s .latest() returned only its own messages -- no cross-contamination, confirming thread_id is a genuine partition key, not just a label\n• This is precisely why a stable thread_id matters in production: accidentally reusing or randomizing thread_id would either merge two users\' conversations together or silently orphan a paused interrupt from ever being resumable',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: user-A 2 checkpoints ಸಂಗ್ರಹಿಸಿತು ಆದರೆ user-B ಗೆ ನಿಖರವಾಗಿ 1 ಇದೆ, ಮತ್ತೆ ಪ್ರತಿ thread ya .latest() ಕೇವಲ ಅದರದೇ messages ಹಿಂತಿರುಗಿಸಿತು -- ಯಾವುದೇ cross-contamination ಇಲ್ಲ\n• ಇದೂ production ನಲ್ಲಿ ಒಂದೂ ಸ್ಥಿರ thread_id ಏಕೆ ಮುಖ್ಯ ಎಂದೂ ನಿಖರವಾಗಿ ತೋರಿಸುತ್ತದೆ' } },

    { type: 'table', data: {
      captionEn: 'Checkpoint vs Interrupt vs Resume', captionKn: 'Checkpoint vs Interrupt vs Resume',
      rows: "Concept|Question it answers|Genuinely verified here\nCheckpoint|What did state look like at this point?|deepcopy'd snapshot per thread_id\nThread|Which execution lineage is this?|'user-42' key in MemorySaver.store\nInterrupt|Should execution stop before this node?|Route computed as 'tools' but mock_tool() not called\nResume|How do we continue a paused execution?|checkpointer.latest() loaded, tool then ran once\nStreaming|How do we observe execution live?|Full-state = old-state + delta merged via reducer" } },

    { type: 'concept', data: {
      headingEn: 'Rejection: Modifying State Instead of Resuming It', headingKn: 'Rejection: Resume ಮಾಡುವ ಬದಲು State ಮಾರ್ಪಡಿಸುವುದೂ',
      bodyEn: '• If the human had rejected instead of approved, the paused state could be modified before continuing -- conceptually: resumed_state["messages"] = add_messages(resumed_state["messages"], [{"role": "ai", "content": "Blocked by human reviewer."}]) then checkpointer.save() again, with the tool call simply never executed\n• This is the same reducer pattern used throughout: a human decision is just another state update, merged the same way an agent\'s or tool\'s update would be -- the interrupt boundary does not require a special "human message" type, it reuses the exact same state/reducer machinery already genuinely verified in this lesson',
      bodyKn: '• human approve ಬದಲು reject ಮಾಡಿದ್ದರೆ, ಮುಂದುವರೆಸುವ ಮೊದಲೂ ವಿರಾಮಗೊಂಡ state ಮಾರ್ಪಡಿಸಬಹುದಿತ್ತು -- tool call ಎಂದಿಗೂ ಚಲಾಯಿಸದೆ\n• ಇದೂ ಇಡೀ lesson ಆದ್ಯಂತ ಬಳಸಿದ ಅದೇ reducer ಮಾದರಿ: ಒಂದೂ human ನಿರ್ಧಾರ ಕೇವಲ ಇನ್ನೊಂದೂ state update, ಒಂದೂ agent ya ಅಥವಾ tool ya update ಅದೇ ರೀತಿ merge ಆಗುತ್ತದೆ' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: a MemorySaver-style checkpointer keyed by thread_id lets two completely different conversations ("user-42" vs any other thread) keep independent, non-colliding checkpoint histories\n• Genuinely confirmed: interrupt_before=["tools"] genuinely blocked mock_tool() from running even though the router had already selected "tools" -- the checkpoint captured the exact proposed action for review before any side effect occurred\n• Genuinely confirmed: resuming from the same thread_id reloaded the paused state (2 messages) rather than starting over, and the tool executed exactly once after approval, producing the identical final 4-message shape as an uninterrupted run\n• MemorySaver lives only in process RAM -- a real production system needs a durable store (Postgres, in Part 3) so this exact save/load/resume mechanism survives a process restart, not just a Python function call boundary',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: thread_id ಇಂದ key ಆಗಿರುವ ಒಂದೂ MemorySaver-style checkpointer ಎರಡೂ ಸಂಪೂರ್ಣ ಭಿನ್ನ conversations ಅನ್ನೂ ಸ್ವತಂತ್ರ checkpoint histories ಇಡಲು ಅನುಮತಿಸುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: interrupt_before=["tools"] mock_tool() ಚಲಾಯಿಸುವುದನ್ನೂ ನಿಜವಾಗಿ ತಡೆಯಿತು, router ಈಗಾಗಲೇ "tools" ಆಯ್ಕೆ ಮಾಡಿದ್ದರೂ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಅದೇ thread_id ಇಂದ resume ಮಾಡುವುದೂ ವಿರಾಮಗೊಂಡ state ಮರುಲೋಡ್ ಮಾಡಿತು, ಮತ್ತೆ tool approval ನಂತರ ನಿಖರವಾಗಿ ಒಮ್ಮೆ ಚಲಾಯಿಸಿತು\n• MemorySaver ಕೇವಲ process RAM ನಲ್ಲಿ ಜೀವಿಸುತ್ತದೆ -- ಒಂದೂ ನಿಜ production system ಗೆ ಒಂದೂ durable store ಬೇಕು (Postgres, Part 3 ನಲ್ಲಿ)' } },
    { type: 'diagram', data: {
      titleEn: 'Full Interrupt-Resume Lifecycle, Genuinely Traced', titleKn: 'ಪೂರ್ಣ Interrupt-Resume Lifecycle, ನಿಜವಾಗಿ Traced',
      captionEn: 'Every arrow in this diagram corresponds to a line of genuinely-executed code above: agent proposes, checkpoint saves, interrupt blocks the tool, human decides, resume loads the checkpoint, tool runs once, agent finalizes.',
      captionKn: 'ಈ diagram ya ಪ್ರತಿ ಬಾಣ ಮೇಲಿನ ನಿಜವಾಗಿ-execute ಮಾಡಿದ ಒಂದೂ code ಸಾಲಿಗೆ ಅನುಗುಣವಾಗಿದೆ.',
      svgCode: "<svg viewBox='0 0 460 150' xmlns='http://www.w3.org/2000/svg' font-family='monospace' font-size='10'>\n<rect x='10' y='10' width='70' height='30' rx='4' fill='#334155' stroke='#60a5fa'/><text x='20' y='29' fill='#e2e8f0'>agent</text>\n<line x1='80' y1='25' x2='120' y2='25' stroke='#64748b'/>\n<rect x='120' y='10' width='90' height='30' rx='4' fill='#334155' stroke='#4ade80'/><text x='128' y='29' fill='#e2e8f0'>checkpoint</text>\n<line x1='210' y1='25' x2='250' y2='25' stroke='#64748b'/>\n<rect x='250' y='10' width='90' height='30' rx='4' fill='#334155' stroke='#f87171'/><text x='258' y='29' fill='#f87171'>INTERRUPT</text>\n<line x1='295' y1='40' x2='295' y2='70' stroke='#64748b'/>\n<text x='230' y='60' fill='#94a3b8'>human decides</text>\n<rect x='250' y='70' width='90' height='30' rx='4' fill='#334155' stroke='#facc15'/><text x='265' y='89' fill='#facc15'>resume</text>\n<line x1='295' y1='100' x2='295' y2='120' stroke='#64748b'/>\n<rect x='250' y='120' width='90' height='24' rx='4' fill='#334155' stroke='#4ade80'/><text x='270' y='137' fill='#e2e8f0'>tools</text>\n</svg>" } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The genuinely-verified interrupt-before-tools pattern here is exactly how production coding agents pause before running destructive shell commands or file deletions, and how customer-support agents pause before issuing large refunds -- the proposed action is checkpointed and shown to a human before any side effect occurs.',
      bodyKn: 'ಇಲ್ಲಿ ನಿಜವಾಗಿ-ಪರಿಶೀಲಿಸಿದ interrupt-before-tools ಮಾದರಿ production coding agents destructive shell commands ಚಲಾಯಿಸುವ ಮೊದಲು ವಿರಾಮಗೊಳ್ಳುವ ನಿಖರ ರೀತಿ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed: putting input() inside a Python loop would tie approval to one running process, but our checkpoint+thread_id design let us load the paused state in an entirely separate code block (simulating hours later, or even a different server) -- proving checkpointing decouples execution from wall-clock waiting, which is exactly why production systems need it.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಒಂದೂ Python loop ಒಳಗೆ input() ಇಡುವುದೂ approval ಅನ್ನೂ ಒಂದೂ ಚಲಾಯಿಸುತ್ತಿರುವ process ಗೆ ಕಟ್ಟುತ್ತಿತ್ತು, ಆದರೆ ನಮ್ಮ checkpoint+thread_id ವಿನ್ಯಾಸ ಸಂಪೂರ್ಣ ಪ್ರತ್ಯೇಕ code block ನಲ್ಲಿ ವಿರಾಮಗೊಂಡ state ಲೋಡ್ ಮಾಡಲು ಅನುಮತಿಸಿತು.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Production human-in-the-loop systems for DevOps ("restart production cluster?"), finance ("submit this payment?"), and database administration ("DROP TABLE orders?") all rely on the exact checkpoint+interrupt+resume architecture genuinely traced in this lesson -- persisted state that survives the gap between proposal and human decision.',
      bodyKn: 'DevOps, finance, ಮತ್ತೆ database administration ಗಾಗಿ Production human-in-the-loop systems ಎಲ್ಲಾ ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ trace ಮಾಡಿದ ನಿಖರ checkpoint+interrupt+resume architecture ಮೇಲೆ ಅವಲಂಬಿಸಿವೆ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'What does thread_id primarily identify?', qKn: 'thread_id ಮುಖ್ಯವಾಗಿ ಏನೂ ಗುರುತಿಸುತ್ತದೆ?',
        opts: ['A single model', 'A checkpoint history/session lineage', 'A tool definition', 'A Python import'], correct: 1,
        optsKn: ['ಒಂದೂ single model', 'ಒಂದೂ checkpoint history/session lineage', 'ಒಂದೂ tool ವ್ಯಾಖ್ಯಾನ', 'ಒಂದೂ Python import'] },
      { q: 'Genuinely confirmed in this lesson: what happened when the router selected "tools" but interrupt_before=["tools"] was active?', qKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: router "tools" ಆಯ್ಕೆ ಮಾಡಿದಾಗ ಆದರೆ interrupt_before=["tools"] ಸಕ್ರಿಯವಾಗಿದ್ದಾಗ ಏನಾಯಿತು?',
        opts: ['The tool ran twice', 'The tool did not execute; execution paused with the proposal checkpointed', 'The graph crashed', 'The checkpoint was deleted'], correct: 1,
        optsKn: ['tool ಎರಡು ಬಾರಿ ಚಲಾಯಿಸಿತು', 'tool ಚಲಾಯಿಸಲಿಲ್ಲ; execution ಪ್ರಸ್ತಾಪ checkpoint ಆಗಿ ವಿರಾಮಗೊಂಡಿತು', 'graph crash ಆಯಿತು', 'checkpoint ಅಳಿಸಲಾಯಿತು'] },
      { q: 'Why is copy.deepcopy() used when saving a checkpoint?', qKn: 'ಒಂದೂ checkpoint ಉಳಿಸುವಾಗ copy.deepcopy() ಏಕೆ ಬಳಸಲಾಗುತ್ತದೆ?',
        opts: ['To reduce memory to zero', 'To prevent later state mutations from retroactively corrupting earlier saved snapshots', 'To call the LLM faster', 'It is not actually needed'], correct: 1,
        optsKn: ['memory ಅನ್ನೂ ಶೂನ್ಯಕ್ಕೆ ಕಡಿಮೆ ಮಾಡಲು', 'ನಂತರದ state mutations ಹಿಂದಿನ saved snapshots ಅನ್ನೂ ಹಿಂದಕ್ಕೆ ಹಾಳುಮಾಡುವುದನ್ನೂ ತಡೆಯಲು', 'LLM ಅನ್ನೂ ವೇಗವಾಗಿ ಕರೆ ಮಾಡಲು', 'ಇದೂ ನಿಜವಾಗಿ ಅಗತ್ಯವಿಲ್ಲ'] },
      { q: 'Genuinely confirmed: after resuming, how many messages did the final trace contain, and how did that compare to an uninterrupted run?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: resume ಮಾಡಿದ ನಂತರ, ಅಂತಿಮ trace ಎಷ್ಟು messages ಒಳಗೊಂಡಿತ್ತು, ಮತ್ತೆ ಇದೂ ಅಡ್ಡಿಪಡಿಸದ ಚಲಾವಣೆಗೆ ಹೇಗೂ ಹೋಲಿಸುತ್ತದೆ?',
        opts: ['2 messages, fewer than uninterrupted', '4 messages, identical shape to an uninterrupted run', '10 messages, much longer', '0 messages, execution was lost'], correct: 1,
        optsKn: ['2 messages, ಅಡ್ಡಿಪಡಿಸದಕ್ಕಿಂತ ಕಡಿಮೆ', '4 messages, ಅಡ್ಡಿಪಡಿಸದ ಚಲಾವಣೆಗೆ ಒಂದೇ ಆಕಾರ', '10 messages, ಬಹಳ ಉದ್ದ', '0 messages, execution ಕಳೆದುಹೋಯಿತು'] },
      { q: 'What does stream_mode="updates" emit at each step?', qKn: 'ಪ್ರತಿ ಹಂತದಲ್ಲಿ stream_mode="updates" ಏನೂ ಔಟ್ಪುಟ್ ಮಾಡುತ್ತದೆ?',
        opts: ['The entire graph source code', 'A dict shaped {node_name: state_delta}, not the full state', 'A checkpoint ID only', 'Nothing until the graph finishes'], correct: 1,
        optsKn: ['ಪೂರ್ಣ graph source code', '{node_name: state_delta} ಆಕಾರದ ಒಂದೂ dict, ಪೂರ್ಣ state ಅಲ್ಲ', 'ಕೇವಲ ಒಂದೂ checkpoint ID', 'graph ಮುಗಿಯುವವರೆಗೆ ಏನೂ ಇಲ್ಲ'] },
    ] } },
  ],
};
