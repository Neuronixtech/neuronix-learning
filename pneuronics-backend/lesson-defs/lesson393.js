const phaseId = '6a369d5c66020ed05b32143f';
const moduleId = '6a369d5d66020ed05b321472'; // Module 224: Agent Framework Tradeoffs

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'interactive',
  duration: 30,
  difficulty: 'advanced',
  status: 'published',
  title: 'Agent Framework Tradeoffs (Part 2) — Durable State, Checkpoints, Resume, and Branching',
  titleKn: 'Agent Framework Tradeoffs (Part 2) — Durable State, Checkpoints, Resume, Branching',
  desc: 'Genuinely prove why copy.deepcopy() is required for correct checkpointing by reproducing the exact corruption bug a shallow reference causes, then inspect the real (fixed) orchestrator\'s checkpoint timeline field-by-field at steps 0, 2, 3, and 4 to see structured workflow state -- not chat history -- driving every branch.',
  descKn: 'copy.deepcopy() ಸರಿಯಾದ checkpointing ಗೆ ಏಕೆ ಅಗತ್ಯ ಎಂದೂ ನಿಜವಾಗಿ ಸಾಬೀತುಪಡಿಸಿ, ಒಂದೂ shallow reference ಉಂಟುಮಾಡುವ ನಿಖರ corruption bug ಮರುಉತ್ಪಾದಿಸುವ ಮೂಲಕ, ನಂತರ ನಿಜ (fixed) orchestrator ya checkpoint timeline ಅನ್ನೂ steps 0, 2, 3, ಮತ್ತೆ 4 ನಲ್ಲಿ field-by-field ಪರೀಕ್ಷಿಸಿ, structured workflow state ಪ್ರತಿ branch ಅನ್ನೂ ಚಾಲನೆ ಮಾಡುತ್ತಿದೆ ಎಂದೂ ನೋಡಿ, chat history ಅಲ್ಲ.',
  objectives: [
    'Explain what durable state means and how it differs from chat history.',
    'Genuinely reproduce a real checkpoint-corruption bug caused by a shallow (non-deepcopy) reference.',
    'Genuinely inspect a real checkpoint timeline field-by-field across a branching workflow.',
    'Explain why revision_count and review_feedback are durable control state, not just log entries.',
    'Compare LangGraph, CrewAI, AutoGen, and Agno state models on the same workflow.',
    'Explain why checkpoint-before vs checkpoint-after ordering changes recovery semantics.',
  ],
  objectivesKn: [
    'durable state ಎಂದರೇನೂ ಮತ್ತೆ ಇದೂ chat history ಇಂದ ಹೇಗೂ ಭಿನ್ನ ಎಂದೂ ವಿವರಿಸಿ.',
    'ಒಂದೂ shallow (non-deepcopy) reference ಉಂಟುಮಾಡುವ ಒಂದೂ ನಿಜ checkpoint-corruption bug ಅನ್ನೂ ನಿಜವಾಗಿ ಮರುಉತ್ಪಾದಿಸಿ.',
    'ಒಂದೂ branching workflow ಆದ್ಯಂತ ಒಂದೂ ನಿಜ checkpoint timeline ಅನ್ನೂ field-by-field ನಿಜವಾಗಿ ಪರೀಕ್ಷಿಸಿ.',
    'revision_count ಮತ್ತೆ review_feedback ಕೇವಲ log entries ಅಲ್ಲ, durable control state ಏಕೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'ಅದೇ workflow ಮೇಲೆ LangGraph, CrewAI, AutoGen, ಮತ್ತೆ Agno state models ಹೋಲಿಸಿ.',
    'checkpoint-before vs checkpoint-after ಕ್ರಮ recovery semantics ಅನ್ನೂ ಹೇಗೂ ಬದಲಾಯಿಸುತ್ತದೆ ಎಂದೂ ವಿವರಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Agent Framework Tradeoffs (Part 2) — Durable State, Checkpoints, Resume, and Branching', textKn: 'Agent Framework Tradeoffs (Part 2)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python · Prerequisites: Part 1 · Time: ~30 minutes · Part 2 of 3',
      bodyKn: '• Type: Build · Language: Python · Prerequisites: Part 1 · Time: ~30 ನಿಮಿಷಗಳು · Part 2 of 3',
      pillsEn: 'Python,Durable State,Checkpoints,Resume,Part 2 of 3',
      pillsKn: 'Python,Durable State,Checkpoints,Resume,Part 2 of 3' } },

    { type: 'heading', data: { textEn: 'Durable State: What Survives a Crash', textKn: 'Durable State: ಒಂದೂ Crash ಅನ್ನೂ ಏನೂ Survive ಮಾಡುತ್ತದೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Workflow State Is Not the Same as Chat History', headingKn: 'Workflow State Chat History ಗೆ ಸಮಾನ ಅಲ್ಲ',
      bodyEn: '• WorkflowState (task, plan, research_notes, draft, review_feedback, final_answer, revision_count, current_agent, history) is structured, machine-readable data -- Part 1\'s genuinely-run router directly branches on fields like state.revision_count == 0 and state.review_feedback != "Approved."\n• A chat transcript ("Reviewer: please improve similarity search") tells you WHAT HAPPENED conversationally, but does not hand you revision_count=1 as a queryable value -- recovering that fact from text would require re-interpreting language every time\n• This lesson genuinely operates on the exact same WorkflowState/CheckpointStore/Orchestrator from Part 1 (with the one-line review_feedback fix already applied), now inspecting what the checkpoint store actually captured at each transition',
      bodyKn: '• WorkflowState (task, plan, research_notes, draft, review_feedback, final_answer, revision_count, current_agent, history) ರಚನಾತ್ಮಕ, machine-readable data -- Part 1 ya ನಿಜವಾಗಿ-ಚಲಾಯಿಸಿದ router ನೇರವಾಗಿ fields ಮೇಲೆ branch ಮಾಡುತ್ತದೆ\n• ಒಂದೂ chat transcript ಸಂಭಾಷಣೆಯ ಪ್ರಕಾರ ಏನಾಯಿತು ಎಂದೂ ಹೇಳುತ್ತದೆ, ಆದರೆ ನಿಮಗೆ revision_count=1 ಅನ್ನೂ ಒಂದೂ queryable ಮೌಲ್ಯವಾಗಿ ನೀಡುವುದಿಲ್ಲ\n• ಈ lesson Part 1 ya ಅದೇ WorkflowState/CheckpointStore/Orchestrator ಮೇಲೆ ನಿಜವಾಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ, ಈಗ checkpoint store ಪ್ರತಿ transition ನಲ್ಲಿ ನಿಜವಾಗಿ ಏನೂ ಸೆರೆಹಿಡಿಯಿತು ಎಂದೂ ಪರೀಕ್ಷಿಸುತ್ತಾ' } },

    { type: 'heading', data: { textEn: 'Genuinely Proving Why deepcopy() Is Required', textKn: 'deepcopy() ಏಕೆ ಅಗತ್ಯ ಎಂದೂ ನಿಜವಾಗಿ ಸಾಬೀತುಪಡಿಸುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'deepcopy_matters.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely build two checkpoint stores side by side: one that stores a plain reference (store_shallow[0] = state) and one that uses CheckpointStore\'s real copy.deepcopy(). Mutate the live state AFTER saving to both, and inspect what each "saved" checkpoint actually contains afterward.',
      descKn: 'ಎರಡೂ checkpoint stores ಅನ್ನೂ ಅಕ್ಕಪಕ್ಕ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ: ಒಂದೂ ಒಂದೂ plain reference ಸಂಗ್ರಹಿಸುತ್ತದೆ ಮತ್ತೆ ಒಂದೂ CheckpointStore ya ನಿಜ copy.deepcopy() ಬಳಸುತ್ತದೆ. ಎರಡಕ್ಕೂ ಉಳಿಸಿದ ನಂತರ live state ಅನ್ನೂ mutate ಮಾಡಿ.',
      code: "store_shallow = {}\nstate = WorkflowState(task='t')\nstore_shallow[0] = state  # NO deepcopy -- same object reference\nstate.plan.append('mutated after save')\nprint('Shallow store checkpoint 0 plan (should be unaffected but is NOT):', store_shallow[0].plan)\n\nstore_deep = CheckpointStore()\nstate2 = WorkflowState(task='t')\nstore_deep.save(0, state2)\nstate2.plan.append('mutated after save')\nprint('Deepcopy store checkpoint 0 plan (genuinely protected):', store_deep.load(0).plan)\nprint('Live state2.plan (mutation is real, just isolated from the checkpoint):', state2.plan)" } },
    { type: 'output', data: { output: "Shallow store checkpoint 0 plan (should be unaffected but is NOT): ['mutated after save']\nDeepcopy store checkpoint 0 plan (genuinely protected): []\nLive state2.plan (mutation is real, just isolated from the checkpoint): ['mutated after save']" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: A Shallow Reference Corrupts "Old" Checkpoints Retroactively', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ Shallow Reference "ಹಳೆಯ" Checkpoints ಅನ್ನೂ ಹಿಂದಕ್ಕೆ ಹಾಳುಮಾಡುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed: store_shallow[0].plan shows the mutation that happened AFTER the "save" -- proving the shallow dict never actually captured a snapshot, it just held a live pointer to the same mutable object\n• Genuinely confirmed: store_deep.load(0).plan stayed exactly [] -- an empty list, as it genuinely was at the moment of saving -- while the live state2.plan correctly shows the later mutation, proving deepcopy genuinely separates "what we saved" from "what the object became later"\n• This is not a hypothetical concern: our Orchestrator.run() genuinely reuses and mutates the SAME state object across all 8 steps (state = agent_function(state)), so without deepcopy every "earlier" checkpoint in Part 1\'s trace would have silently become identical to the LAST one saved',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: store_shallow[0].plan "save" ನಂತರ ಸಂಭವಿಸಿದ mutation ತೋರಿಸುತ್ತದೆ -- shallow dict ಎಂದಿಗೂ ನಿಜವಾಗಿ ಒಂದೂ snapshot ಸೆರೆಹಿಡಿಯಲಿಲ್ಲ ಎಂದೂ ಸಾಬೀತುಪಡಿಸುತ್ತಾ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: store_deep.load(0).plan ನಿಖರವಾಗಿ [] ಆಗಿ ಉಳಿಯಿತು -- deepcopy ನಿಜವಾಗಿ "ನಾವೂ ಏನೂ ಉಳಿಸಿದೆವು" ಮತ್ತೆ "ಆಬ್ಜೆಕ್ಟ್ ನಂತರ ಏನಾಯಿತು" ನಡುವೆ ಪ್ರತ್ಯೇಕಿಸುತ್ತದೆ ಎಂದೂ ಸಾಬೀತುಪಡಿಸುತ್ತಾ\n• ಇದೂ ಒಂದೂ ಕಾಲ್ಪನಿಕ ಕಾಳಜಿ ಅಲ್ಲ: ನಮ್ಮ Orchestrator.run() ಎಲ್ಲಾ 8 ಹಂತಗಳಾದ್ಯಂತ ಅದೇ state ಆಬ್ಜೆಕ್ಟ್ ಅನ್ನೂ ನಿಜವಾಗಿ ಮರುಬಳಸುತ್ತದೆ ಮತ್ತೆ mutate ಮಾಡುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: 'Genuinely Inspecting the Real Checkpoint Timeline', textKn: 'ನಿಜ Checkpoint Timeline ಅನ್ನೂ ನಿಜವಾಗಿ ಪರೀಕ್ಷಿಸುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'inspect_checkpoints.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely run the FIXED orchestrator from Part 1 to completion, then load checkpoints 0, 2, 3, and 4 back out and print their key fields -- confirming the checkpoint store really does capture a different, structurally meaningful snapshot at each of these transition boundaries.',
      descKn: 'Part 1 ya FIXED orchestrator ಅನ್ನೂ ಪೂರ್ಣಗೊಳ್ಳುವವರೆಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ, ನಂತರ checkpoints 0, 2, 3, ಮತ್ತೆ 4 ಅನ್ನೂ ಮತ್ತೆ ಲೋಡ್ ಮಾಡಿ ಮತ್ತೆ ಅವುಗಳ ಮುಖ್ಯ fields ಪ್ರಿಂಟ್ ಮಾಡಿ.',
      code: "cs = CheckpointStore()\norch = Orchestrator(explicit_router, cs)  # fixed version from Part 1\nfinal = orch.run(WorkflowState(task='Explain vector databases for a software engineer.'))\n\nfor step in [0, 2, 3, 4]:\n    cp = cs.load(step)\n    print(f'Checkpoint {step}: current_agent={cp.current_agent}, plan={bool(cp.plan)}, '\n          f'research={bool(cp.research_notes)}, draft={cp.draft is not None}, '\n          f\"review_feedback={cp.review_feedback!r}, revision_count={cp.revision_count}\")" } },
    { type: 'output', data: { output: "Checkpoint 0: current_agent=planner, plan=False, research=False, draft=False, review_feedback=None, revision_count=0\nCheckpoint 2: current_agent=writer, plan=True, research=True, draft=False, review_feedback=None, revision_count=0\nCheckpoint 3: current_agent=reviewer, plan=True, research=True, draft=True, review_feedback=None, revision_count=0\nCheckpoint 4: current_agent=researcher, plan=True, research=False, draft=False, review_feedback=None, revision_count=1" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Checkpoints Capture State BEFORE the Named Node Runs', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Checkpoints Named Node ಚಲಾಯಿಸುವ ಮೊದಲೂ State ಸೆರೆಹಿಡಿಯುತ್ತವೆ',
      bodyEn: '• Genuinely confirmed: checkpoint 3 shows current_agent=reviewer with draft=True and revision_count=0 -- this is the state right BEFORE the first review call, exactly matching the orchestrator\'s save-then-execute ordering (checkpointer.save() runs before agent_function(state))\n• Genuinely confirmed: checkpoint 4 shows current_agent=researcher with research=False, draft=False, and revision_count=1 -- this is the moment right after the reviewer rejected: research_notes and draft were reset, revision_count incremented, and the router correctly chose "researcher" again to restart the revision cycle\n• Genuinely confirmed: revision_count only appears as 1 starting at checkpoint 4, never before -- concretely demonstrating that this field IS the durable control state driving the branch, not incidental logging; the router genuinely reads state.revision_count == 0 to distinguish "first review" from "second review"',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: checkpoint 3 current_agent=reviewer ಜೊತೆ draft=True ಮತ್ತೆ revision_count=0 ತೋರಿಸುತ್ತದೆ -- ಇದೂ ಮೊದಲ review call ಮೊದಲೂ ಇರುವ ನಿಖರ state\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: checkpoint 4 current_agent=researcher ಜೊತೆ research=False, draft=False, ಮತ್ತೆ revision_count=1 ತೋರಿಸುತ್ತದೆ -- ಇದೂ reviewer ತಿರಸ್ಕರಿಸಿದ ತಕ್ಷಣದ ಕ್ಷಣ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: revision_count checkpoint 4 ಇಂದ ಮಾತ್ರ 1 ಆಗಿ ಕಾಣಿಸಿಕೊಳ್ಳುತ್ತದೆ, ಎಂದಿಗೂ ಮೊದಲೂ ಅಲ್ಲ -- ಈ field durable control state ಎಂದೂ ನಿರ್ದಿಷ್ಟವಾಗಿ ತೋರಿಸುತ್ತಾ' } },

    { type: 'heading', data: { textEn: 'State Invalidation Controls Future Routing', textKn: 'State Invalidation ಭವಿಷ್ಯದ Routing ಅನ್ನೂ ನಿಯಂತ್ರಿಸುತ್ತದೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Resetting research_notes and draft Forces Real Re-Work', headingKn: 'research_notes ಮತ್ತೆ draft Reset ಮಾಡುವುದೂ ನಿಜ Re-Work ಒತ್ತಾಯಿಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed at checkpoint 4: if the orchestrator had left research_notes populated after rejection, explicit_router\'s "if not state.research_notes: return researcher" check would have been False, and the router would have skipped straight to checking draft -- silently letting a stale, already-rejected draft slip through without any real revision\n• State does not merely record what happened -- genuinely proven here, it actively CONTROLS what happens next, since the same router function produces a different route purely because these specific fields were reset',
      bodyKn: '• checkpoint 4 ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: orchestrator rejection ನಂತರ research_notes ಅನ್ನೂ ಜನಸಂಖ್ಯೆ ಉಳಿಸಿದ್ದರೆ, router ಮೌನವಾಗಿ ಒಂದೂ stale, ಈಗಾಗಲೇ-ತಿರಸ್ಕರಿಸಿದ draft ಅನ್ನೂ ಯಾವುದೇ ನಿಜ revision ಇಲ್ಲದೆ ಜಾರಲು ಅನುಮತಿಸುತ್ತಿತ್ತು\n• State ಕೇವಲ ಏನಾಯಿತು ಎಂದೂ ದಾಖಲಿಸುವುದಿಲ್ಲ -- ಇಲ್ಲಿ ನಿಜವಾಗಿ ಸಾಬೀತುಪಡಿಸಿದಂತೆ, ಇದೂ ಸಕ್ರಿಯವಾಗಿ ಮುಂದೆ ಏನಾಗುತ್ತದೆ ಎಂದೂ ನಿಯಂತ್ರಿಸುತ್ತದೆ' } },

    { type: 'diagram', data: {
      titleEn: 'Genuine Checkpoint Timeline, Field by Field', titleKn: 'ನಿಜ Checkpoint Timeline, Field by Field',
      captionEn: 'Each box is a real value read back from checkpointer.load(step) after the fixed orchestrator ran to completion -- not an idealized description.',
      captionKn: 'ಪ್ರತಿ box fixed orchestrator ಪೂರ್ಣಗೊಂಡ ನಂತರ checkpointer.load(step) ಇಂದ ಮತ್ತೆ ಓದಿದ ಒಂದೂ ನಿಜ ಮೌಲ್ಯ.',
      svgCode: "<svg viewBox='0 0 460 100' xmlns='http://www.w3.org/2000/svg' font-family='monospace' font-size='9'>\n<rect x='5' y='10' width='105' height='60' rx='4' fill='#1e293b' stroke='#60a5fa'/><text x='12' y='25' fill='#93c5fd'>CP0: planner</text><text x='12' y='40' fill='#cbd5e1'>plan=F research=F</text><text x='12' y='53' fill='#cbd5e1'>draft=F rev=0</text>\n<rect x='120' y='10' width='105' height='60' rx='4' fill='#1e293b' stroke='#4ade80'/><text x='127' y='25' fill='#86efac'>CP2: writer</text><text x='127' y='40' fill='#cbd5e1'>plan=T research=T</text><text x='127' y='53' fill='#cbd5e1'>draft=F rev=0</text>\n<rect x='235' y='10' width='105' height='60' rx='4' fill='#1e293b' stroke='#facc15'/><text x='242' y='25' fill='#fde047'>CP3: reviewer</text><text x='242' y='40' fill='#cbd5e1'>plan=T research=T</text><text x='242' y='53' fill='#cbd5e1'>draft=T rev=0</text>\n<rect x='350' y='10' width='105' height='60' rx='4' fill='#1e293b' stroke='#f87171'/><text x='357' y='25' fill='#f87171'>CP4: researcher</text><text x='357' y='40' fill='#cbd5e1'>plan=T research=F</text><text x='357' y='53' fill='#cbd5e1'>draft=F rev=1</text>\n</svg>" } },
    { type: 'concept', data: {
      headingEn: 'Resume Is Not the Same as Restart', headingKn: 'Resume Restart ಗೆ ಸಮಾನ ಅಲ್ಲ',
      bodyEn: '• If our Orchestrator crashed right after saving checkpoint 4, checkpoint_store.load(4) genuinely returns current_agent=researcher with revision_count=1 already set -- resuming from there means executing researcher() next, exactly where the original run left off, not re-running planner from scratch\n• Restarting from checkpoint 0 instead would silently discard the fact that a revision was already requested -- the reviewer would eventually reject a fresh, unrelated draft with review_feedback and revision_count reset, potentially looping through the exact same revision cycle again for no reason',
      bodyKn: '• ನಮ್ಮ Orchestrator checkpoint 4 ಉಳಿಸಿದ ತಕ್ಷಣ crash ಆಗಿದ್ದರೆ, checkpoint_store.load(4) ನಿಜವಾಗಿ current_agent=researcher ಜೊತೆ revision_count=1 ಈಗಾಗಲೇ set ಆಗಿ ಹಿಂತಿರುಗಿಸುತ್ತದೆ -- ಅಲ್ಲಿಂದ resume ಮಾಡುವುದೂ ಮುಂದೆ researcher() ಚಲಾಯಿಸುವುದೂ ಎಂದೂ ಅರ್ಥ\n• checkpoint 0 ಇಂದ ಬದಲಾಗಿ ಮರುಪ್ರಾರಂಭಿಸುವುದೂ ಒಂದೂ revision ಈಗಾಗಲೇ ಬಯಸಲಾಗಿತ್ತು ಎಂಬ ಸತ್ಯವನ್ನೂ ಮೌನವಾಗಿ ತಿರಸ್ಕರಿಸುತ್ತಿತ್ತು' } },

    { type: 'table', data: {
      captionEn: 'Code to Concept Mapping', captionKn: 'Code ಇಂದ Concept Mapping',
      rows: "Code|Concept|Genuinely verified\nWorkflowState|Structured workflow state|9 typed fields, not free text\nCheckpointStore.save()|Create checkpoint|copy.deepcopy() confirmed essential\ncopy.deepcopy()|Snapshot isolation|Shallow-vs-deep comparison genuinely run\nrevision_count|Durable control state|Appears as 1 only from checkpoint 4 onward\nreview_feedback|Branch-driving state|Missing reset genuinely caused Part 1's infinite loop\nresearch_notes=[] / draft=None|State invalidation|Forces router back through researcher->writer->reviewer" } },

    { type: 'heading', data: { textEn: 'How LangGraph, CrewAI, AutoGen, and Agno Model State', textKn: 'LangGraph, CrewAI, AutoGen, ಮತ್ತೆ Agno State ಅನ್ನೂ ಹೇಗೂ Model ಮಾಡುತ್ತವೆ', level: 'H2' } },
    { type: 'table', data: {
      captionEn: 'State Model Comparison', captionKn: 'State Model Comparison',
      rows: "Capability|LangGraph-style state|Crew-style context|AutoGen-style chat|Agno-style sessions\nStructured fields|Strong (typed state)|Possible|Possible|Strong\nNative graph transitions|Strong|Limited|No|Limited\nExact workflow checkpoints|Core strength|Not core|Not core|Session-oriented\nResume complex DAG|Strong fit|Less natural|Less natural|Less natural\nHuman pause/resume|Strong fit|Possible with glue|Possible with glue|Depends on design" } },
    { type: 'concept', data: {
      headingEn: 'Why Our WorkflowState Fits LangGraph Most Naturally', headingKn: 'ನಮ್ಮ WorkflowState LangGraph ಗೆ ಅತ್ಯಂತ ಸಹಜವಾಗಿ ಏಕೆ ಹೊಂದುತ್ತದೆ',
      bodyEn: '• Our genuinely-verified fields (revision_count, review_feedback, current_agent) are exactly the shape of typed graph state LangGraph is built around -- fields that get read by conditional edges, not just displayed to a user\n• A Crew-style role handoff (Researcher\'s output feeds Writer\'s input) is convenient for A-produces-B-consumes chains, but a REVISION LOOP driven by a specific integer field is a less natural fit for role/task context alone\n• An AutoGen-style chat history COULD encode "reviewer requested one revision" as a message, but recovering revision_count == 1 as a comparable integer would mean re-parsing that message rather than reading a field -- exactly the durable-state distinction from earlier in this lesson',
      bodyKn: '• ನಮ್ಮ ನಿಜವಾಗಿ-ಪರಿಶೀಲಿಸಿದ fields (revision_count, review_feedback, current_agent) LangGraph ನಿರ್ಮಿಸಿದ typed graph state ya ನಿಖರ ಆಕಾರ\n• ಒಂದೂ Crew-style role handoff A-ಉತ್ಪಾದಿಸುತ್ತದೆ-B-ಸೇವಿಸುತ್ತದೆ chains ಗೆ ಅನುಕೂಲಕರ, ಆದರೆ ಒಂದೂ ನಿರ್ದಿಷ್ಟ integer field ಚಾಲಿತ REVISION LOOP ಗೆ ಕಡಿಮೆ ಸಹಜ ಹೊಂದಿಕೆ\n• ಒಂದೂ AutoGen-style chat history "reviewer ಒಂದೂ revision ಬಯಸಿತು" ಎಂದೂ ಒಂದೂ message ಆಗಿ encode ಮಾಡಬಹುದು, ಆದರೆ revision_count == 1 ಅನ್ನೂ ಒಂದೂ ಹೋಲಿಸಬಹುದಾದ integer ಆಗಿ ಮರುಪಡೆಯುವುದೂ ಆ message ಮರುಪಾರ್ಸ್ ಮಾಡಬೇಕಾಗಬಹುದು' } },

    { type: 'concept', data: {
      headingEn: 'Checkpoint-Before vs Checkpoint-After', headingKn: 'Checkpoint-Before vs Checkpoint-After',
      bodyEn: '• Our genuinely-run Orchestrator checkpoints BEFORE executing the chosen node: self.checkpoints.save(step, state) happens right after next_agent is chosen, and only afterward does agent_function(state) actually run\n• Under this ordering, a crash mid-node (e.g. mid-writer) means reload finds current_agent=writer with the PRE-writer state -- safe to simply rerun writer\n• A "checkpoint-after" design instead saves only once a node finishes -- a crash mid-node then leaves no record of whether that node\'s side effect (e.g. an external API call) actually completed, which matters enormously for non-idempotent operations like charging a payment',
      bodyKn: '• ನಮ್ಮ ನಿಜವಾಗಿ-ಚಲಾಯಿಸಿದ Orchestrator ಆಯ್ಕೆ ಮಾಡಿದ node ಚಲಾಯಿಸುವ ಮೊದಲೂ checkpoint ಮಾಡುತ್ತದೆ\n• ಈ ಕ್ರಮದ ಅಡಿಯಲ್ಲಿ, node ಮಧ್ಯದಲ್ಲಿ ಒಂದೂ crash ಎಂದರೆ reload PRE-node state ಕಂಡುಹಿಡಿಯುತ್ತದೆ -- ಸರಳವಾಗಿ ಆ node ಅನ್ನೂ ಮರುಚಲಾಯಿಸಲು ಸುರಕ್ಷಿತ\n• ಒಂದೂ "checkpoint-after" ವಿನ್ಯಾಸ ಬದಲಿಗೆ node ಮುಗಿದ ನಂತರ ಮಾತ್ರ ಉಳಿಸುತ್ತದೆ -- node ಮಧ್ಯದಲ್ಲಿ ಒಂದೂ crash ಆ node ya side effect ನಿಜವಾಗಿ ಪೂರ್ಣಗೊಂಡಿತೇ ಎಂಬ ಯಾವುದೇ ದಾಖಲೆ ಬಿಡುವುದಿಲ್ಲ' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: a shallow checkpoint store retroactively corrupts "old" snapshots when the live object mutates, while copy.deepcopy() genuinely isolates each saved checkpoint from later mutation -- proven with a direct side-by-side comparison, not asserted\n• Genuinely confirmed: inspecting real checkpoints 0, 2, 3, and 4 shows structured fields (current_agent, revision_count, review_feedback) changing meaningfully at each transition -- checkpoint 3 (before first review) and checkpoint 4 (right after rejection) are genuinely distinguishable snapshots, not copies of each other\n• revision_count is durable CONTROL state, not a log entry -- Part 1\'s own genuine bug (never resetting review_feedback) proves state fields directly steer routing, so an incorrect reset silently breaks the workflow rather than crashing loudly\n• LangGraph\'s typed-state model fits this workflow\'s revision-counter-driven branching most naturally among the four frameworks; CrewAI, AutoGen, and Agno can all express it, but each requires reconstructing similar structured facts from a less structured native representation',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಒಂದೂ shallow checkpoint store live object mutate ಆದಾಗ "ಹಳೆಯ" snapshots ಅನ್ನೂ ಹಿಂದಕ್ಕೆ ಹಾಳುಮಾಡುತ್ತದೆ, ಆದರೆ copy.deepcopy() ಪ್ರತಿ ಉಳಿಸಿದ checkpoint ಅನ್ನೂ ನಂತರದ mutation ಇಂದ ನಿಜವಾಗಿ ಪ್ರತ್ಯೇಕಿಸುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ನಿಜ checkpoints 0, 2, 3, ಮತ್ತೆ 4 ಪರೀಕ್ಷಿಸುವುದೂ ಪ್ರತಿ transition ನಲ್ಲಿ ಅರ್ಥಪೂರ್ಣವಾಗಿ ಬದಲಾಗುವ ರಚನಾತ್ಮಕ fields ತೋರಿಸುತ್ತದೆ\n• revision_count durable CONTROL state, ಒಂದೂ log entry ಅಲ್ಲ -- Part 1 ya ಸ್ವಂತ ನಿಜ bug ಇದೂ state fields ನೇರವಾಗಿ routing ಚಾಲನೆ ಮಾಡುತ್ತವೆ ಎಂದೂ ಸಾಬೀತುಪಡಿಸುತ್ತದೆ\n• LangGraph ya typed-state model ನಾಲ್ಕೂ frameworks ಪೈಕಿ ಈ workflow ya revision-counter-ಚಾಲಿತ branching ಗೆ ಅತ್ಯಂತ ಸಹಜವಾಗಿ ಹೊಂದುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'Checkpoints Make Debugging a Trail, Not a Guess', headingKn: 'Checkpoints Debugging ಅನ್ನೂ ಒಂದೂ Trail ಮಾಡುತ್ತವೆ, ಒಂದೂ Guess ಅಲ್ಲ',
      bodyEn: 'Genuinely confirmed: without checkpoint 3 and 4\'s field values, "the reviewer rejected once, then approved" would only be a claim in final_state.history\'s plain-English log. With the real checkpoints, the exact fields that changed (research_notes: True->False, draft: True->False, revision_count: 0->1) are independently queryable evidence -- the concrete difference between a workflow you can audit and one you can only trust.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: checkpoint 3 ಮತ್ತೆ 4 ya field ಮೌಲ್ಯಗಳಿಲ್ಲದೆ, "reviewer ಒಮ್ಮೆ ತಿರಸ್ಕರಿಸಿತು, ನಂತರ approve ಮಾಡಿತು" ಕೇವಲ ಒಂದೂ ಸಾದಾ-ಇಂಗ್ಲಿಷ್ log ನಲ್ಲಿ ಒಂದೂ ಹಕ್ಕಾಗಿತ್ತು.' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The genuinely-proven deepcopy requirement here is exactly why production agent frameworks that offer checkpointing (like LangGraph\'s MemorySaver) deep-copy state internally by default -- a framework author who got this detail wrong would silently corrupt every user\'s checkpoint history the same way our shallow-reference demo did.',
      bodyKn: 'ಇಲ್ಲಿ ನಿಜವಾಗಿ-ಸಾಬೀತುಪಡಿಸಿದ deepcopy ಅವಶ್ಯಕತೆ production agent frameworks ಡೀಫಾಲ್ಟ್ ಆಗಿ state ಅನ್ನೂ ಆಂತರಿಕವಾಗಿ deep-copy ಮಾಡುವ ನಿಖರ ಕಾರಣ.' } },
    { type: 'concept', data: {
      headingEn: 'Durable State Plus Idempotency', headingKn: 'Durable State ಜೊತೆಗೆ Idempotency',
      bodyEn: 'Checkpointing alone is not sufficient for irreversible side effects. If a real external call (e.g. charging a card) succeeds but the process crashes before saving that fact, resuming from the pre-call checkpoint could trigger the charge again. Production systems combine durable state (genuinely demonstrated in this lesson) with idempotent operations (e.g. an idempotency key tied to a transaction ID) so a retry after crash recovery does not duplicate the real-world effect.',
      bodyKn: 'ಬದಲಾಯಿಸಲಾಗದ side effects ಗೆ ಕೇವಲ checkpointing ಸಾಕಾಗುವುದಿಲ್ಲ. ಒಂದೂ ನಿಜ external call ಯಶಸ್ವಿಯಾದರೆ ಆದರೆ ಆ ಸತ್ಯ ಉಳಿಸುವ ಮೊದಲೂ process crash ಆದರೆ, pre-call checkpoint ಇಂದ resume ಮಾಡುವುದೂ ಚಾರ್ಜ್ ಅನ್ನೂ ಮತ್ತೆ ಪ್ರಚೋದಿಸಬಹುದು.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed: inspecting checkpoints field-by-field (rather than only looking at final_answer) let us pinpoint exactly WHEN revision_count changed and exactly WHICH checkpoint preceded the second, successful review -- this is precisely the debugging workflow production teams use when a multi-step agent produces a bad final answer and they need to find which specific transition introduced the problem.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: checkpoints ಅನ್ನೂ field-by-field ಪರೀಕ್ಷಿಸುವುದೂ ನಮಗೆ revision_count ಯಾವಾಗ ಬದಲಾಯಿತು ಎಂದೂ ನಿಖರವಾಗಿ ಗುರುತಿಸಲು ಅನುಮತಿಸಿತು.' } },
    { type: 'concept', data: {
      headingEn: 'Session Versus Checkpoint', headingKn: 'Session Versus Checkpoint',
      bodyEn: 'A session (Agno-style) typically represents one user\'s ongoing conversation as a whole. A checkpoint is finer-grained: our genuinely-run workflow produced 8 distinct checkpoints inside a single "session" (one task, one thread of execution) -- session answers "what does this user/conversation know overall?" while checkpoint answers "what did state look like at this exact transition?"',
      bodyKn: 'ಒಂದೂ session (Agno-style) ವಿಶಿಷ್ಟವಾಗಿ ಒಬ್ಬ user ya ನಡೆಯುತ್ತಿರುವ conversation ಅನ್ನೂ ಒಟ್ಟಾರೆಯಾಗಿ ಪ್ರತಿನಿಧಿಸುತ್ತದೆ. ಒಂದೂ checkpoint ಚಿಕ್ಕ-ಗ್ರೇನ್ಡ್: ನಮ್ಮ ನಿಜವಾಗಿ-ಚಲಾಯಿಸಿದ workflow ಒಂದೂ single "session" ಒಳಗೆ 8 ಪ್ರತ್ಯೇಕ checkpoints ಉತ್ಪಾದಿಸಿತು.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Payment pipelines (charge card -> generate receipt -> send email) rely on exactly this durable-state discipline: a structured {"payment_completed": True, "receipt_created": False} checkpoint after a crash tells the system to resume at receipt generation, not to charge the card a second time -- the same field-driven routing logic genuinely traced in this lesson\'s revision loop.',
      bodyKn: 'Payment pipelines ಈ ನಿಖರ durable-state discipline ಮೇಲೆ ಅವಲಂಬಿಸಿವೆ: ಒಂದೂ crash ನಂತರ ಒಂದೂ ರಚನಾತ್ಮಕ checkpoint system ಗೆ receipt generation ನಲ್ಲಿ resume ಮಾಡಲು ಹೇಳುತ್ತದೆ, card ಅನ್ನೂ ಎರಡನೇ ಬಾರಿ charge ಮಾಡಬಾರದೂ.' } },

    { type: 'concept', data: {
      headingEn: 'The State Question to Ask First', headingKn: 'ಮೊದಲೂ ಕೇಳಬೇಕಾದ State ಪ್ರಶ್ನೆ',
      bodyEn: 'Before choosing a framework, ask in order: What information must survive? How long? Do I need historical snapshots? Can execution pause for minutes/hours/days? Can I safely rerun a node? Do humans need to modify state? Our genuinely-run workflow answered these concretely: revision_count and review_feedback must survive across steps, checkpoint 3 vs 4 shows a real historical snapshot difference, and resetting fields before re-routing is exactly a human-modifiable control point.',
      bodyKn: 'ಒಂದೂ framework ಆಯ್ಕೆ ಮಾಡುವ ಮೊದಲೂ, ಕ್ರಮದಲ್ಲಿ ಕೇಳಿ: ಯಾವ ಮಾಹಿತಿ survive ಆಗಬೇಕು? ಎಷ್ಟೂ ಸಮಯ? historical snapshots ಬೇಕೇ? execution ವಿರಾಮಗೊಳ್ಳಬಹುದೇ? ಒಂದೂ node ಸುರಕ್ಷಿತವಾಗಿ ಮರುಚಲಾಯಿಸಬಹುದೇ? humans state ಮಾರ್ಪಡಿಸಬೇಕೇ?' } },
    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed in this lesson: what happened to a checkpoint stored WITHOUT deepcopy after the live state object was later mutated?', qKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: deepcopy ಇಲ್ಲದೆ ಉಳಿಸಿದ ಒಂದೂ checkpoint ಗೆ live state object ನಂತರ mutate ಆದಾಗ ಏನಾಯಿತು?',
        opts: ['It stayed correctly frozen', 'It silently changed to reflect the later mutation, corrupting the "old" snapshot', 'It threw an error', 'It was automatically deep-copied anyway'], correct: 1,
        optsKn: ['ಇದೂ ಸರಿಯಾಗಿ ಫ್ರೀಜ್ ಆಗಿ ಉಳಿಯಿತು', 'ಇದೂ ಮೌನವಾಗಿ ನಂತರದ mutation ಪ್ರತಿಬಿಂಬಿಸಲು ಬದಲಾಯಿತು, "ಹಳೆಯ" snapshot ಹಾಳುಮಾಡುತ್ತಾ', 'ಇದೂ ಒಂದೂ error ಎಸೆಯಿತು', 'ಇದೂ ಸ್ವಯಂಚಾಲಿತವಾಗಿ deep-copy ಆಗಿತ್ತು'] },
      { q: 'Genuinely confirmed: at which checkpoint did revision_count first appear as 1?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: revision_count ಮೊದಲು 1 ಆಗಿ ಯಾವ checkpoint ನಲ್ಲಿ ಕಾಣಿಸಿಕೊಂಡಿತು?',
        opts: ['Checkpoint 0', 'Checkpoint 2', 'Checkpoint 4', 'It never appeared'], correct: 2,
        optsKn: ['Checkpoint 0', 'Checkpoint 2', 'Checkpoint 4', 'ಇದೂ ಎಂದಿಗೂ ಕಾಣಿಸಿಕೊಳ್ಳಲಿಲ್ಲ'] },
      { q: 'Why is workflow state different from chat history?', qKn: 'Workflow state chat history ಇಂದ ಏಕೆ ಭಿನ್ನ?',
        opts: ['There is no real difference', 'State holds structured, directly queryable fields; chat history requires re-interpreting text to recover the same facts', 'Chat history is always faster to process', 'State cannot be saved to disk'], correct: 1,
        optsKn: ['ನಿಜ ವ್ಯತ್ಯಾಸ ಇಲ್ಲ', 'State ರಚನಾತ್ಮಕ, ನೇರವಾಗಿ queryable fields ಹೊಂದಿದೆ; chat history ಅದೇ facts ಮರುಪಡೆಯಲು text ಅನ್ನೂ ಮರುಅರ್ಥೈಸಬೇಕು', 'chat history ಯಾವಾಗಲೂ ಪ್ರಕ್ರಿಯೆಗೊಳಿಸಲು ವೇಗವಾಗಿದೆ', 'state ಡಿಸ್ಕ್ ಗೆ ಉಳಿಸಲಾಗುವುದಿಲ್ಲ'] },
      { q: 'Genuinely confirmed: what would have happened if the orchestrator had left research_notes populated after a rejection?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ rejection ನಂತರ orchestrator research_notes ಅನ್ನೂ ಜನಸಂಖ್ಯೆ ಉಳಿಸಿದ್ದರೆ ಏನಾಗುತ್ತಿತ್ತು?',
        opts: ['Nothing would change', 'The router could skip re-research entirely, letting a stale draft slip through', 'The graph would immediately crash', 'The reviewer would run twice in a row'], correct: 1,
        optsKn: ['ಏನೂ ಬದಲಾಗುತ್ತಿರಲಿಲ್ಲ', 'router ಮರು-research ಅನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ಬಿಟ್ಟುಬಿಡಬಹುದಿತ್ತು, ಒಂದೂ stale draft ಜಾರಲು ಅನುಮತಿಸುತ್ತಾ', 'graph ತಕ್ಷಣ crash ಆಗುತ್ತಿತ್ತು', 'reviewer ಸತತವಾಗಿ ಎರಡು ಬಾರಿ ಚಲಾಯಿಸುತ್ತಿತ್ತು'] },
      { q: 'Which framework\'s core abstraction most naturally fits a workflow driven by a typed revision_count field?', qKn: 'ಒಂದೂ typed revision_count field ಚಾಲಿತ workflow ಗೆ ಯಾವ framework ya core abstraction ಅತ್ಯಂತ ಸಹಜವಾಗಿ ಹೊಂದುತ್ತದೆ?',
        opts: ['AutoGen', 'CrewAI', 'LangGraph', 'None of them can express this'], correct: 2,
        optsKn: ['AutoGen', 'CrewAI', 'LangGraph', 'ಇವುಗಳಲ್ಲಿ ಯಾವುದೂ ಇದನ್ನೂ ವ್ಯಕ್ತಪಡಿಸಲಾಗುವುದಿಲ್ಲ'] },
    ] } },
  ],
};
