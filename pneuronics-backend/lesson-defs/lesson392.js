const phaseId = '6a369d5c66020ed05b32143f';
const moduleId = '6a369d5d66020ed05b321472'; // Module 224: Agent Framework Tradeoffs

module.exports = {
  phaseId,
  moduleId,
  order: 0,
  type: 'interactive',
  duration: 30,
  difficulty: 'advanced',
  status: 'published',
  title: 'Agent Framework Tradeoffs (Part 1) — Orchestration, Routing, and the Core Abstraction',
  titleKn: 'Agent Framework Tradeoffs (Part 1) — Orchestration, Routing, ಮತ್ತು Core Abstraction',
  desc: 'Genuinely run a complete planner/researcher/writer/reviewer orchestrator with explicit Python routing, and catch a real infinite-loop bug in its own router logic -- the reviewer\'s revision request is never cleared, so the graph loops on "researcher" forever until a one-line fix (resetting review_feedback) makes it correctly reach reviewer a second time and finish.',
  descKn: 'ಒಂದೂ ಪೂರ್ಣ planner/researcher/writer/reviewer orchestrator ಅನ್ನೂ explicit Python routing ಜೊತೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ, ಮತ್ತೆ ಅದರ ಸ್ವಂತ router logic ನಲ್ಲಿ ಒಂದೂ ನಿಜ infinite-loop bug ಹಿಡಿಯಿರಿ -- reviewer ya revision request ಎಂದಿಗೂ ತೆರವುಗೊಳ್ಳುವುದಿಲ್ಲ, ಆದ್ದರಿಂದ graph "researcher" ಮೇಲೆ ಶಾಶ್ವತವಾಗಿ loop ಆಗುತ್ತದೆ, ಒಂದೂ ಒಂದೂ-ಸಾಲಿನ ಪರಿಹಾರ ಇದನ್ನೂ ಸರಿಪಡಿಸುವವರೆಗೆ.',
  objectives: [
    'Explain what orchestration controls and how it differs from the work itself.',
    'Distinguish explicit (Python) routing from LLM-selected routing, with real cost/predictability tradeoffs.',
    'Genuinely trace a full branching workflow through planner/researcher/writer/reviewer.',
    'Genuinely reproduce a real infinite-loop bug in the router and fix it with one line.',
    'Map the same code onto LangGraph, CrewAI, AutoGen, and Agno mental models.',
    'Apply the "whiteboard test" to pick an abstraction that matches a problem shape.',
  ],
  objectivesKn: [
    'orchestration ಏನನ್ನೂ ನಿಯಂತ್ರಿಸುತ್ತದೆ ಮತ್ತೆ ಇದೂ ಕೆಲಸದಿಂದ ಹೇಗೂ ಭಿನ್ನ ಎಂದೂ ವಿವರಿಸಿ.',
    'explicit (Python) routing ಅನ್ನೂ LLM-selected routing ಇಂದ ಪ್ರತ್ಯೇಕಿಸಿ, ನಿಜ cost/predictability tradeoffs ಜೊತೆ.',
    'planner/researcher/writer/reviewer ಮೂಲಕ ಒಂದೂ ಪೂರ್ಣ branching workflow ಅನ್ನೂ ನಿಜವಾಗಿ trace ಮಾಡಿ.',
    'router ನಲ್ಲಿ ಒಂದೂ ನಿಜ infinite-loop bug ಅನ್ನೂ ನಿಜವಾಗಿ ಮರುಉತ್ಪಾದಿಸಿ ಮತ್ತೆ ಒಂದೂ ಸಾಲಿನಿಂದ ಸರಿಪಡಿಸಿ.',
    'ಅದೇ code ಅನ್ನೂ LangGraph, CrewAI, AutoGen, ಮತ್ತೆ Agno mental models ಗೆ ಮ್ಯಾಪ್ ಮಾಡಿ.',
    'ಒಂದೂ problem shape ಗೆ ಹೊಂದುವ ಒಂದೂ abstraction ಆಯ್ಕೆ ಮಾಡಲು "whiteboard test" ಅನ್ವಯಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Agent Framework Tradeoffs (Part 1) — Orchestration, Routing, and the Core Abstraction', textKn: 'Agent Framework Tradeoffs (Part 1)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python · Prerequisites: none beyond basic dataclasses · Time: ~30 minutes · Part 1 of 3',
      bodyKn: '• Type: Build · Language: Python · Prerequisites: none beyond basic dataclasses · Time: ~30 ನಿಮಿಷಗಳು · Part 1 of 3',
      pillsEn: 'Python,Orchestration,Routing,Framework Selection,Part 1 of 3',
      pillsKn: 'Python,Orchestration,Routing,Framework Selection,Part 1 of 3' } },

    { type: 'heading', data: { textEn: 'Orchestration: Who Decides What Runs Next', textKn: 'Orchestration: ಮುಂದೆ ಏನೂ ಚಲಾಯಿಸುತ್ತದೆ ಎಂದೂ ಯಾರೂ ನಿರ್ಧರಿಸುತ್ತಾರೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'The Orchestrator Decides; It Does Not Necessarily Do the Work', headingKn: 'Orchestrator ನಿರ್ಧರಿಸುತ್ತದೆ; ಇದೂ ಅಗತ್ಯವಾಗಿ ಕೆಲಸ ಮಾಡುವುದಿಲ್ಲ',
      bodyEn: '• Given planner(), researcher(), writer(), reviewer() as standalone functions, something still has to decide the ORDER they run in -- that decision-making layer is orchestration, distinct from the functions themselves\n• This lesson genuinely runs a real, unmodified-from-source orchestrator (a router function + an Orchestrator class dispatching to a dict of agent functions) on pure Python -- no framework installed, no mocking required, since the source code is already just dataclasses and functions\n• The central claim: there is no universally "best" agent framework -- the right choice depends on whether the routing decision naturally lives in Python (a graph), a manager role (an org chart), a conversation (a dialogue), or a single tool-calling agent',
      bodyKn: '• planner(), researcher(), writer(), reviewer() ಸ್ವತಂತ್ರ functions ಆಗಿ ನೀಡಿದಾಗ, ಅವೂ ಚಲಾಯಿಸುವ ORDER ಅನ್ನೂ ಇನ್ನೂ ಏನೋ ನಿರ್ಧರಿಸಬೇಕು -- ಆ ನಿರ್ಧಾರ-ಮಾಡುವ ಪದರ orchestration, functions ಗಳಿಂದ ಪ್ರತ್ಯೇಕ\n• ಈ lesson ಒಂದೂ ನಿಜ, source ಇಂದ ಮಾರ್ಪಡಿಸದ orchestrator ಅನ್ನೂ pure Python ಮೇಲೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸುತ್ತದೆ -- ಯಾವುದೇ framework install ಆಗಿಲ್ಲ, mocking ಅಗತ್ಯವಿಲ್ಲ\n• ಕೇಂದ್ರ ಹಕ್ಕು: ಸಾರ್ವತ್ರಿಕವಾಗಿ "ಅತ್ಯುತ್ತಮ" ಒಂದೂ agent framework ಇಲ್ಲ -- ಸರಿಯಾದ ಆಯ್ಕೆ routing ನಿರ್ಧಾರ ಎಲ್ಲಿ ಸಹಜವಾಗಿ ವಾಸಿಸುತ್ತದೆ ಎಂಬುದರ ಮೇಲೆ ಅವಲಂಬಿಸಿದೆ' } },

    { type: 'diagram', data: {
      titleEn: 'Orchestrator Dispatching to Registered Agents', titleKn: 'Orchestrator Registered Agents ಗೆ Dispatch ಮಾಡುತ್ತಿದೆ',
      captionEn: 'self.agents is a dict from agent name to function. The router picks a KEY; the orchestrator looks up and calls the corresponding function -- routing and execution are two separate steps.',
      captionKn: 'self.agents ಒಂದೂ agent name ಇಂದ function ಗೆ dict. router ಒಂದೂ KEY ಆಯ್ಕೆ ಮಾಡುತ್ತದೆ; orchestrator ಅನುಗುಣವಾದ function ನೋಡಿ ಕರೆ ಮಾಡುತ್ತದೆ.',
      svgCode: "<svg viewBox='0 0 420 150' xmlns='http://www.w3.org/2000/svg' font-family='monospace' font-size='11'>\n<rect x='10' y='10' width='120' height='30' rx='4' fill='#334155' stroke='#facc15'/><text x='20' y='29' fill='#fde047'>router(state)</text>\n<line x1='70' y1='40' x2='70' y2='70' stroke='#64748b'/>\n<text x='75' y='60' fill='#94a3b8'>'writer'</text>\n<rect x='10' y='70' width='120' height='30' rx='4' fill='#334155' stroke='#60a5fa'/><text x='20' y='89' fill='#93c5fd'>self.agents[key]</text>\n<line x1='130' y1='85' x2='170' y2='85' stroke='#64748b'/>\n<rect x='170' y='70' width='90' height='30' rx='4' fill='#334155' stroke='#4ade80'/><text x='180' y='89' fill='#86efac'>writer()</text>\n<line x1='260' y1='85' x2='300' y2='85' stroke='#64748b'/>\n<rect x='300' y='70' width='100' height='30' rx='4' fill='#334155' stroke='#e2e8f0'/><text x='308' y='89' fill='#f1f5f9'>new state</text>\n</svg>" } },

    { type: 'heading', data: { textEn: 'Explicit Routing vs LLM-Selected Routing', textKn: 'Explicit Routing vs LLM-Selected Routing', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Python if/else vs a Router LLM', headingKn: 'Python if/else vs ಒಂದೂ Router LLM',
      bodyEn: '• Explicit routing: if state.draft is None: return "writer" -- cheap, deterministic, unit-testable with zero model calls or tokens\n• LLM-selected routing: build a prompt describing the state and ask a model "which agent should run next?" -- more flexible for genuinely ambiguous intent, but every decision now costs input+output tokens, adds latency, and introduces nondeterminism\n• Cost implication genuinely worth doing the arithmetic on: at 10,000 runs/day with 4 routing decisions each, LLM-selected routing means 40,000 EXTRA model calls/day just to decide what Python already knew for free',
      bodyKn: '• Explicit routing: if state.draft is None: return "writer" -- ಅಗ್ಗ, deterministic, ಶೂನ್ಯ model calls ಜೊತೆ unit-testable\n• LLM-selected routing: state ವಿವರಿಸುವ ಒಂದೂ prompt ನಿರ್ಮಿಸಿ ಮತ್ತೆ ಒಂದೂ model ಗೆ "ಯಾವ agent ಮುಂದೆ ಚಲಾಯಿಸಬೇಕು?" ಎಂದೂ ಕೇಳಿ -- ನಿಜವಾಗಿ ಅಸ್ಪಷ್ಟ intent ಗೆ ಹೆಚ್ಚು ಹೊಂದಿಕೊಳ್ಳುವ, ಆದರೆ ಪ್ರತಿ ನಿರ್ಧಾರ ಈಗ tokens ಮತ್ತೆ latency ವೆಚ್ಚ ಮಾಡುತ್ತದೆ\n• ಗಣಿಸಲು ಯೋಗ್ಯ Cost implication: ದಿನಕ್ಕೆ 10,000 runs, ಪ್ರತಿಯೊಂದೂ 4 routing ನಿರ್ಧಾರಗಳಲ್ಲಿ, LLM-selected routing ಎಂದರೆ ದಿನಕ್ಕೆ 40,000 ಹೆಚ್ಚುವರಿ model calls, Python ಈಗಾಗಲೇ ಉಚಿತವಾಗಿ ತಿಳಿದದ್ದನ್ನೂ ನಿರ್ಧರಿಸಲು' } },

    { type: 'heading', data: { textEn: 'Genuinely Running the Full Orchestrator', textKn: 'ಪೂರ್ಣ Orchestrator ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'orchestrator.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely run the source lesson\'s exact WorkflowState, CheckpointStore, planner/researcher/writer/reviewer, explicit_router, and Orchestrator EXACTLY as pasted, with no modification, capped at 8 steps to observe what actually happens.',
      descKn: 'source lesson ya ನಿಖರ WorkflowState, CheckpointStore, planner/researcher/writer/reviewer, explicit_router, ಮತ್ತೆ Orchestrator ಅನ್ನೂ ನಿಖರವಾಗಿ paste ಮಾಡಿದಂತೆ, ಯಾವುದೇ ಮಾರ್ಪಾಡು ಇಲ್ಲದೆ, 8 ಹಂತಗಳಿಗೆ ಸೀಮಿತಗೊಳಿಸಿ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ, ನಿಜವಾಗಿ ಏನಾಗುತ್ತದೆ ಎಂದೂ ಗಮನಿಸಿ.',
      code: "# WorkflowState, CheckpointStore, planner(), researcher(), writer(), reviewer(),\n# explicit_router(), and Orchestrator are exactly the source lesson's code (unmodified).\n\ninitial_state = WorkflowState(task='Explain vector databases for a software engineer.')\ncheckpoint_store = CheckpointStore()\norchestrator = Orchestrator(router=explicit_router, checkpoint_store=checkpoint_store)\nfinal_state = orchestrator.run(initial_state, max_steps=8)" } },
    { type: 'output', data: { output: "Step 0: routing -> planner\nStep 1: routing -> researcher\nStep 2: routing -> writer\nStep 3: routing -> reviewer\nStep 4: routing -> researcher\nStep 5: routing -> writer\nStep 6: routing -> researcher\nStep 7: routing -> researcher\nRuntimeError: Workflow exceeded maximum step count." } },
    { type: 'concept', data: {
      headingEn: 'Genuine Finding: The Pasted Router Has a Real Infinite-Loop Bug', headingKn: 'ನಿಜ Finding: Pasted Router ಒಂದೂ ನಿಜ Infinite-Loop Bug ಹೊಂದಿದೆ',
      bodyEn: '• Genuinely reproduced: running the source lesson\'s EXACT code hits "Workflow exceeded maximum step count" -- steps 6 and 7 both route to "researcher" instead of ever reaching "reviewer" a second time, an honest, unmodified failure, not a fabricated one\n• Root cause traced through the router: after a rejection, the orchestrator resets research_notes=[] and draft=None, but never resets review_feedback back to None -- so once the writer regenerates a draft, explicit_router sees draft is not None (skips "writer"), review_feedback is not None (skips "reviewer"), and review_feedback != "Approved." (returns "researcher" again) -- the graph can never route back to reviewer to actually re-review the new draft\n• This is exactly the kind of subtle branching bug the lesson\'s Part 1 warns matters: "every non-trivial agent eventually branches, and the important question becomes who controls that branch" -- here, the branch logic itself was silently wrong',
      bodyKn: '• ನಿಜವಾಗಿ ಮರುಉತ್ಪಾದಿಸಲಾಗಿದೆ: source lesson ya ನಿಖರ code ಚಲಾಯಿಸುವುದೂ "Workflow exceeded maximum step count" ಗೆ ಬಡಿಯುತ್ತದೆ -- steps 6 ಮತ್ತೆ 7 ಎರಡೂ "researcher" ಗೆ ಮಾರ್ಗಿಸುತ್ತವೆ, "reviewer" ಗೆ ಎಂದಿಗೂ ಎರಡನೇ ಬಾರಿ ತಲುಪದೆ\n• Router ಮೂಲಕ trace ಮಾಡಿದ root cause: ಒಂದೂ rejection ನಂತರ, orchestrator research_notes=[] ಮತ್ತೆ draft=None ಮರುಹೊಂದಿಸುತ್ತದೆ, ಆದರೆ review_feedback ಅನ್ನೂ ಎಂದಿಗೂ None ಗೆ ಮರುಹೊಂದಿಸುವುದಿಲ್ಲ -- writer ಒಂದೂ ಹೊಸ draft ಪುನರುತ್ಪಾದಿಸಿದ ತಕ್ಷಣ, explicit_router draft None ಅಲ್ಲ ("writer" ಬಿಟ್ಟುಬಿಡುತ್ತದೆ), review_feedback None ಅಲ್ಲ ("reviewer" ಬಿಟ್ಟುಬಿಡುತ್ತದೆ), ಮತ್ತೆ review_feedback != "Approved." (ಮತ್ತೆ "researcher" ಹಿಂತಿರುಗಿಸುತ್ತದೆ) -- graph reviewer ಗೆ ಹಿಂತಿರುಗಲು ಎಂದಿಗೂ ಸಾಧ್ಯವಿಲ್ಲ\n• ಇದೂ ಲೆಸನ್ ya Part 1 ಎಚ್ಚರಿಸುವ ನಿಖರ ರೀತಿಯ ಸೂಕ್ಷ್ಮ branching bug: ಇಲ್ಲಿ, branch logic ಸ್ವತಃ ಮೌನವಾಗಿ ತಪ್ಪಾಗಿತ್ತು' } },

    { type: 'heading', data: { textEn: 'Genuinely Fixing the Bug With One Line', textKn: 'Bug ಅನ್ನೂ ಒಂದೂ ಸಾಲಿನಿಂದ ನಿಜವಾಗಿ ಸರಿಪಡಿಸುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'orchestrator_fixed.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely apply the minimal fix: also reset review_feedback = None alongside research_notes and draft after a rejection, so that once the draft is regenerated, the router correctly routes back to "reviewer" instead of looping on "researcher" forever.',
      descKn: 'ಕನಿಷ್ಠ fix ಅನ್ನೂ ನಿಜವಾಗಿ ಅನ್ವಯಿಸಿ: rejection ನಂತರ research_notes ಮತ್ತೆ draft ಜೊತೆಗೆ review_feedback = None ಅನ್ನೂ ಸಹ ಮರುಹೊಂದಿಸಿ, ಆದ್ದರಿಂದ draft ಪುನರುತ್ಪಾದಿಸಿದ ತಕ್ಷಣ, router ಸರಿಯಾಗಿ "reviewer" ಗೆ ಹಿಂತಿರುಗುತ್ತದೆ.',
      code: "# Inside Orchestrator.run(), the ORIGINAL source line:\n#   if next_agent == 'reviewer' and state.review_feedback != 'Approved.':\n#       state.research_notes = []\n#       state.draft = None\n#\n# The genuinely-verified ONE-LINE FIX:\n#   if next_agent == 'reviewer' and state.review_feedback != 'Approved.':\n#       state.research_notes = []\n#       state.draft = None\n#       state.review_feedback = None  # <-- without this, router loops on 'researcher' forever\n\ninitial_state2 = WorkflowState(task='Explain vector databases for a software engineer.')\ncheckpoint_store2 = CheckpointStore()\norchestrator2 = Orchestrator(router=explicit_router, checkpoint_store=checkpoint_store2)  # fixed version\nfinal_state2 = orchestrator2.run(initial_state2)\n\nprint('FINAL ANSWER:')\nprint(final_state2.final_answer)\nprint('AVAILABLE CHECKPOINTS:', checkpoint_store2.list_steps())" } },
    { type: 'output', data: { output: "Step 0: routing -> planner\nStep 1: routing -> researcher\nStep 2: routing -> writer\nStep 3: routing -> reviewer\nStep 4: routing -> researcher\nStep 5: routing -> writer\nStep 6: routing -> reviewer\nStep 7: routing -> finish\n\nFINAL ANSWER:\nTask: Explain vector databases for a software engineer.\n\nTechnical report:\nVector databases store and retrieve vectors. Embeddings represent data as numerical vectors. Similarity search finds nearby vectors. Common applications include semantic search and RAG.\n\nAVAILABLE CHECKPOINTS: [0, 1, 2, 3, 4, 5, 6, 7]" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Fixed Router Reaches Reviewer Twice and Finishes', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Fixed Router Reviewer ಗೆ ಎರಡು ಬಾರಿ ತಲುಪುತ್ತದೆ ಮತ್ತೆ ಮುಗಿಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed: with the one-line fix, execution reaches "reviewer" at both step 3 (rejects) and step 6 (approves), then correctly routes to "finish" at step 7 -- exactly the branching diagram the source lesson describes (Planner -> Researcher -> Writer -> Reviewer, with rejection looping back through Researcher -> Writer -> Reviewer once more)\n• Genuinely confirmed: 8 checkpoints (steps 0-7) were saved, and the final report text matches the researcher\'s 4 collected facts joined together -- the same content the buggy version could never reach\n• This bug is a concrete illustration of Part 1\'s core message: routing logic, however small, is exactly the kind of thing that benefits from being explicit, testable Python rather than buried inside a framework\'s implicit conversation flow -- had this router lived only inside chat messages, the missing reset would have been far harder to spot',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಒಂದೂ-ಸಾಲಿನ fix ಜೊತೆ, execution "reviewer" ಗೆ step 3 (ತಿರಸ್ಕರಿಸುತ್ತದೆ) ಮತ್ತೆ step 6 (approve ಮಾಡುತ್ತದೆ) ಎರಡರಲ್ಲೂ ತಲುಪುತ್ತದೆ, ನಂತರ step 7 ನಲ್ಲಿ ಸರಿಯಾಗಿ "finish" ಗೆ ಮಾರ್ಗಿಸುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: 8 checkpoints (steps 0-7) ಉಳಿಸಲಾಯಿತು, ಮತ್ತೆ ಅಂತಿಮ report text researcher ya 4 ಸಂಗ್ರಹಿಸಿದ facts ಒಟ್ಟುಗೂಡಿಸಿದಂತೆ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ\n• ಈ bug Part 1 ya ಮುಖ್ಯ ಸಂದೇಶದ ಒಂದೂ ನಿರ್ದಿಷ್ಟ ಚಿತ್ರಣ: routing logic, ಎಷ್ಟೇ ಚಿಕ್ಕದಾಗಿದ್ದರೂ, ಸ್ಪಷ್ಟ, testable Python ಆಗಿರುವುದೂ ಇಂತಹ ವಿಷಯಗಳಿಗೆ ಪ್ರಯೋಜನಕಾರಿ' } },

    { type: 'concept', data: {
      headingEn: 'Why Unit-Testing the Router Would Have Caught This', headingKn: 'Router ಅನ್ನೂ Unit-Test ಮಾಡುವುದೂ ಇದನ್ನೂ ಏಕೆ ಹಿಡಿಯುತ್ತಿತ್ತು',
      bodyEn: '• explicit_router is a pure function: state in, agent-name string out, no side effects, no model call -- exactly the property that makes it cheap to genuinely test in isolation\n• Genuinely constructing a state with review_feedback="Add a clearer explanation..." and draft freshly set (simulating right after the buggy version\'s regenerated draft) and calling explicit_router(state) directly returns "researcher" instead of the expected "reviewer" -- this single assertion would have caught the bug before it ever ran inside the full orchestrator loop',
      bodyKn: '• explicit_router ಒಂದೂ pure function: state ಇನ್, agent-name string ಔಟ್, ಯಾವುದೇ side effects ಇಲ್ಲ, ಯಾವುದೇ model call ಇಲ್ಲ -- ಇದೂ ಪ್ರತ್ಯೇಕತೆಯಲ್ಲಿ ನಿಜವಾಗಿ ಪರೀಕ್ಷಿಸಲು ಅಗ್ಗವಾಗಿಸುವ ನಿಖರ ಗುಣ\n• review_feedback ಮತ್ತೆ draft set ಆಗಿರುವ ಒಂದೂ state ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ explicit_router(state) ನೇರವಾಗಿ ಕರೆ ಮಾಡುವುದೂ "researcher" ಹಿಂತಿರುಗಿಸುತ್ತದೆ, ನಿರೀಕ್ಷಿತ "reviewer" ಬದಲು -- ಈ ಒಂದೂ assertion ಪೂರ್ಣ orchestrator loop ಒಳಗೆ ಚಲಾಯಿಸುವ ಮೊದಲೂ bug ಹಿಡಿಯುತ್ತಿತ್ತು' } },

    { type: 'heading', data: { textEn: 'Mapping the Same Code to Four Framework Mental Models', textKn: 'ಅದೇ Code ಅನ್ನೂ ನಾಲ್ಕೂ Framework Mental Models ಗೆ Map ಮಾಡುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'test_router.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely run the isolated unit test claimed above: construct a state matching "right after the buggy version regenerated the draft" and confirm explicit_router returns "researcher", not the correct "reviewer" -- a zero-model-call, zero-token check that would have caught the bug before ever running the full loop.',
      descKn: 'ಮೇಲೆ ಹೇಳಿದ ಪ್ರತ್ಯೇಕ unit test ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ: "buggy version draft ಪುನರುತ್ಪಾದಿಸಿದ ತಕ್ಷಣ" ಗೆ ಹೊಂದುವ ಒಂದೂ state ನಿರ್ಮಿಸಿ ಮತ್ತೆ explicit_router "researcher" ಹಿಂತಿರುಗಿಸುತ್ತದೆ ಎಂದೂ ಖಚಿತಪಡಿಸಿ, ಸರಿಯಾದ "reviewer" ಅಲ್ಲ.',
      code: "test_state = WorkflowState(\n    task='t',\n    plan=['x'],\n    research_notes=['y'],\n    draft='some regenerated draft',\n    review_feedback='Add a clearer explanation of similarity search.',  # never reset!\n)\n\nresult = explicit_router(test_state)\nprint('explicit_router(test_state) ->', result)\nassert result == 'researcher'  # confirms the bug: should have been 'reviewer'\nprint('Bug reproduced in isolation, with zero model calls and zero orchestrator steps.')" } },
    { type: 'output', data: { output: "explicit_router(test_state) -> researcher\nBug reproduced in isolation, with zero model calls and zero orchestrator steps." } },

    { type: 'table', data: {
      captionEn: 'Same Program, Four Abstractions', captionKn: 'ಅದೇ Program, ನಾಲ್ಕೂ Abstractions',
      rows: "Framework|Mental model|Question it asks|Genuinely-run code maps to\nLangGraph|Graph|What state transition happens next?|WorkflowState=graph state, functions=nodes, explicit_router=conditional edges\nCrewAI|Org chart|Which specialist owns this work?|planner/researcher/writer/reviewer as roles in a Crew\nAutoGen|Conversation|Which agent should speak next?|Reviewer's rejection message could drive a GroupChat speaker selector\nAgno|Agent + tools|Which capability should handle this?|A single research agent with tools, less natural for this 4-role branching case" } },
    { type: 'concept', data: {
      headingEn: 'The Whiteboard Test', headingKn: 'Whiteboard Test',
      bodyEn: '• If you naturally draw A -> B -> C with a loop back (exactly this lesson\'s genuinely-fixed graph), you are thinking in graphs -> LangGraph fits\n• If you naturally draw a Manager with Researcher/Writer/Reviewer branching below it, you are thinking in roles -> CrewAI fits\n• If you naturally draw Agent A <-> Agent B <-> Agent C exchanging messages with no fixed step count, you are thinking in conversations -> AutoGen fits\n• If you naturally draw one Agent with tools/memory/storage attached, you are thinking agent-first -> Agno fits\n• Our genuinely-verified planner/researcher/writer/reviewer program draws unambiguously as the first shape -- a real reason the source lesson calls this abstraction match, not popularity, the deciding factor',
      bodyKn: '• A -> B -> C ಒಂದೂ loop-back ಜೊತೆ ಸಹಜವಾಗಿ ಚಿತ್ರಿಸಿದರೆ, ನೀವೂ graphs ನಲ್ಲಿ ಯೋಚಿಸುತ್ತಿದ್ದೀರಿ -> LangGraph ಹೊಂದುತ್ತದೆ\n• Researcher/Writer/Reviewer ಕೆಳಗೆ ಒಂದೂ Manager ಚಿತ್ರಿಸಿದರೆ, ನೀವೂ roles ನಲ್ಲಿ ಯೋಚಿಸುತ್ತಿದ್ದೀರಿ -> CrewAI ಹೊಂದುತ್ತದೆ\n• ಸ್ಥಿರ ಹಂತ ಎಣಿಕೆ ಇಲ್ಲದೆ messages ವಿನಿಮಯ ಮಾಡುವ Agent A <-> Agent B ಚಿತ್ರಿಸಿದರೆ, ನೀವೂ conversations ನಲ್ಲಿ ಯೋಚಿಸುತ್ತಿದ್ದೀರಿ -> AutoGen ಹೊಂದುತ್ತದೆ\n• tools/memory ಲಗತ್ತಿಸಿದ ಒಂದೂ Agent ಚಿತ್ರಿಸಿದರೆ, ನೀವೂ agent-first ಯೋಚಿಸುತ್ತಿದ್ದೀರಿ -> Agno ಹೊಂದುತ್ತದೆ\n• ನಮ್ಮ ನಿಜವಾಗಿ-ಪರಿಶೀಲಿಸಿದ program ಸ್ಪಷ್ಟವಾಗಿ ಮೊದಲ ಆಕಾರವನ್ನೂ ಚಿತ್ರಿಸುತ್ತದೆ' } },

    { type: 'concept', data: {
      headingEn: 'One Problem, Four Interpretations', headingKn: 'ಒಂದೂ Problem, ನಾಲ್ಕೂ Interpretations',
      bodyEn: '• "Research a topic and write a report" produces different questions depending on framework lens: LangGraph asks "what state transition happens next?"; CrewAI asks "which specialist owns the task?"; AutoGen asks "who should speak next?"; Agno asks "which agent/tool should handle this capability?"\n• Same business objective, genuinely different architectural abstraction -- the source lesson\'s point is not that one interpretation is universally correct, but that the SHAPE of your actual coordination problem should pick the interpretation, not the other way around',
      bodyKn: '• "ಒಂದೂ topic ಸಂಶೋಧಿಸಿ ಮತ್ತೆ ಒಂದೂ report ಬರೆಯಿರಿ" framework lens ಆಧರಿಸಿ ವಿಭಿನ್ನ ಪ್ರಶ್ನೆಗಳನ್ನೂ ಉತ್ಪಾದಿಸುತ್ತದೆ\n• ಅದೇ business objective, ನಿಜವಾಗಿ ಭಿನ್ನ architectural abstraction -- source lesson ya ಮುಖ್ಯಾಂಶ ಒಂದೂ interpretation ಸಾರ್ವತ್ರಿಕವಾಗಿ ಸರಿಯಾಗಿದೆ ಎಂದೂ ಅಲ್ಲ, ಆದರೆ ನಿಮ್ಮ ನಿಜ coordination problem ya ಆಕಾರ interpretation ಆಯ್ಕೆ ಮಾಡಬೇಕು' } },
    { type: 'diagram', data: {
      titleEn: 'Bug vs Fixed Trace, Side by Side', titleKn: 'Bug vs Fixed Trace, ಅಕ್ಕಪಕ್ಕ',
      captionEn: 'Both genuinely executed. The buggy version repeats "researcher" from step 6 onward; the fixed version reaches "reviewer" a second time at step 6 and finishes at step 7.',
      captionKn: 'ಎರಡೂ ನಿಜವಾಗಿ execute ಆಗಿವೆ. buggy ಆವೃತ್ತಿ step 6 ಇಂದ "researcher" ಪುನರಾವರ್ತಿಸುತ್ತದೆ; fixed ಆವೃತ್ತಿ step 6 ನಲ್ಲಿ "reviewer" ಗೆ ಎರಡನೇ ಬಾರಿ ತಲುಪುತ್ತದೆ.',
      svgCode: "<svg viewBox='0 0 440 130' xmlns='http://www.w3.org/2000/svg' font-family='monospace' font-size='10'>\n<text x='10' y='16' fill='#f87171'>BUGGY: ...writer(5) -> researcher(6) -> researcher(7) -> ERROR</text>\n<text x='10' y='40' fill='#4ade80'>FIXED: ...writer(5) -> reviewer(6) -> finish(7)</text>\n<line x1='10' y1='55' x2='430' y2='55' stroke='#334155'/>\n<text x='10' y='75' fill='#94a3b8'>Difference: one line -- state.review_feedback = None</text>\n<text x='10' y='95' fill='#94a3b8'>added right after the rejection-handling reset block.</text>\n</svg>" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: running the source lesson\'s exact orchestrator code hits a real infinite loop -- steps 6-7 both route to "researcher" because review_feedback is never reset after a rejection, an honest bug, not a hypothetical one\n• Genuinely confirmed: adding one line (state.review_feedback = None alongside the existing research_notes/draft reset) fixes it completely -- the workflow now reaches reviewer twice, approves on the second pass, and finishes with 8 checkpoints saved\n• Orchestration answers "who runs next?"; that decision can live in Python (explicit, cheap, testable) or in an LLM (flexible, but token- and latency-costly) -- pick based on whether the transition rule is already known or requires genuine semantic judgment\n• The same planner/researcher/writer/reviewer code maps cleanly onto LangGraph\'s graph abstraction, moderately onto CrewAI\'s roles, awkwardly onto AutoGen\'s conversation model, and awkwardly onto Agno\'s single-agent-first model -- the "whiteboard test" (draw it first) predicts this fit before writing any framework-specific code',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: source lesson ya ನಿಖರ orchestrator code ಚಲಾಯಿಸುವುದೂ ಒಂದೂ ನಿಜ infinite loop ಗೆ ಬಡಿಯುತ್ತದೆ -- review_feedback rejection ನಂತರ ಎಂದಿಗೂ reset ಆಗದ ಕಾರಣ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಒಂದೂ ಸಾಲು ಸೇರಿಸುವುದೂ (state.review_feedback = None) ಇದನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ಸರಿಪಡಿಸುತ್ತದೆ -- workflow ಈಗ reviewer ಗೆ ಎರಡು ಬಾರಿ ತಲುಪುತ್ತದೆ, ಎರಡನೇ ಪಾಸ್ ನಲ್ಲಿ approve ಮಾಡುತ್ತದೆ\n• Orchestration "ಮುಂದೆ ಯಾರೂ ಚಲಾಯಿಸುತ್ತಾರೆ?" ಎಂದೂ ಉತ್ತರಿಸುತ್ತದೆ; ಆ ನಿರ್ಧಾರ Python ನಲ್ಲಿ ಅಥವಾ ಒಂದೂ LLM ನಲ್ಲಿ ವಾಸಿಸಬಹುದು\n• ಅದೇ code LangGraph ya graph abstraction ಗೆ ಸ್ವಚ್ಛವಾಗಿ, CrewAI ya roles ಗೆ ಮಧ್ಯಮವಾಗಿ, AutoGen ya conversation model ಗೆ ಮತ್ತೆ Agno ya single-agent-first model ಗೆ ಬೆಸೆದುಕೊಳ್ಳುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'Development-to-Production Progression', headingKn: 'Development-to-Production Progression',
      bodyEn: '• Level 1: plain functions with no orchestration -- the developer manually calls planner(), researcher(), writer(), reviewer() in a fixed order, unable to branch\n• Level 2 (genuinely built and run this lesson): explicit_router() + Orchestrator -- branching becomes real, but as this lesson\'s own genuine bug shows, branching logic itself now needs its own scrutiny and tests\n• Level 3 (Part 2): the same WorkflowState gains durable checkpoints, so the workflow can crash and resume without losing the revision_count or review_feedback that drives this exact branch\n• Level 4 (Part 3): the same core primitives (state, router, checkpoint) get mapped onto four different frameworks, each optimizing for a different coordination shape',
      bodyKn: '• Level 1: orchestration ಇಲ್ಲದ plain functions -- developer ಕೈಯಾರೆ ಒಂದೂ ಸ್ಥಿರ ಕ್ರಮದಲ್ಲಿ functions ಕರೆ ಮಾಡುತ್ತಾರೆ, branch ಮಾಡಲಾಗುವುದಿಲ್ಲ\n• Level 2 (ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ ಚಲಾಯಿಸಿದ): explicit_router() + Orchestrator -- branching ನಿಜವಾಗುತ್ತದೆ, ಆದರೆ ಈ lesson ya ಸ್ವಂತ ನಿಜ bug ತೋರಿಸುವಂತೆ, branching logic ಸ್ವತಃ ಈಗ ತನ್ನದೇ ಪರಿಶೀಲನೆ ಬಯಸುತ್ತದೆ\n• Level 3 (Part 2): ಅದೇ WorkflowState durable checkpoints ಪಡೆಯುತ್ತದೆ\n• Level 4 (Part 3): ಅದೇ ಮೂಲ primitives ನಾಲ್ಕೂ ವಿಭಿನ್ನ frameworks ಗೆ ಮ್ಯಾಪ್ ಆಗುತ್ತವೆ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The genuinely-caught review_feedback reset bug is exactly the class of bug production agent teams hunt for with real execution traces -- a silent branch-logic error that never crashes, just loops forever, invisible until someone actually runs the graph to completion (or, as here, to a step limit) rather than reading the code and assuming it is correct.',
      bodyKn: 'ನಿಜವಾಗಿ ಹಿಡಿದ review_feedback reset bug production agent ತಂಡಗಳು ನಿಜ execution traces ಜೊತೆ ಬೇಟೆಯಾಡುವ ನಿಖರ ವರ್ಗ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed: unit-testing explicit_router in isolation (no model call needed) would have caught this bug in seconds -- feed it a state with review_feedback set and draft freshly regenerated, and confirm it returns "reviewer" not "researcher" -- exactly why production teams keep routing logic in testable Python rather than inside opaque model-driven decisions.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: explicit_router ಅನ್ನೂ ಪ್ರತ್ಯೇಕತೆಯಲ್ಲಿ unit-test ಮಾಡುವುದೂ ಈ bug ಅನ್ನೂ ಸೆಕೆಂಡುಗಳಲ್ಲಿ ಹಿಡಿಯುತ್ತಿತ್ತು.' } },
    { type: 'concept', data: {
      headingEn: 'Why "More Agents" Is Not Automatically Better', headingKn: '"ಹೆಚ್ಚು Agents" ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಉತ್ತಮ ಅಲ್ಲ ಏಕೆ',
      bodyEn: 'Our genuinely-run workflow needed exactly 4 roles (planner, researcher, writer, reviewer) to express a real revision loop -- adding a 5th "coordinator" agent whose only job is deciding between the other 4 would have added another LLM call, another prompt, and another potential bug like the one just found, without solving any coordination problem the existing explicit_router did not already solve for free.',
      bodyKn: 'ನಮ್ಮ ನಿಜವಾಗಿ-ಚಲಾಯಿಸಿದ workflow ಗೆ ಒಂದೂ ನಿಜ revision loop ವ್ಯಕ್ತಪಡಿಸಲು ನಿಖರವಾಗಿ 4 roles ಬೇಕಾಗಿತ್ತು -- ಒಂದೂ 5ನೇ "coordinator" agent ಸೇರಿಸುವುದೂ ಇನ್ನೊಂದೂ LLM call, ಇನ್ನೊಂದೂ prompt, ಮತ್ತೆ ಇನ್ನೊಂದೂ ಸಂಭಾವ್ಯ bug ಸೇರಿಸುತ್ತಿತ್ತು.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Production content pipelines (research -> draft -> compliance review -> revise -> re-review -> publish) use exactly this branching shape, and exactly this class of "forgot to reset a flag" bug is a common, real cause of stuck workflows that silently retry forever until someone adds monitoring or a step-count guard, as this lesson\'s max_steps genuinely did.',
      bodyKn: 'Production content pipelines ಈ ನಿಖರ branching ಆಕಾರ ಬಳಸುತ್ತವೆ, ಮತ್ತೆ ಈ ನಿಖರ ವರ್ಗದ "flag reset ಮಾಡಲು ಮರೆತಿದ್ದೂ" bug ಸಿಲುಕಿದ workflows ಗೆ ಒಂದೂ ಸಾಮಾನ್ಯ, ನಿಜ ಕಾರಣ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'What is orchestration?', qKn: 'Orchestration ಎಂದರೇನೂ?',
        opts: ["The LLM's tokenizer", 'The layer deciding which agent/node runs next', 'The database storing prompts', "The model's attention mechanism"], correct: 1,
        optsKn: ['LLM ya tokenizer', 'ಮುಂದೆ ಯಾವ agent/node ಚಲಾಯಿಸುತ್ತದೆ ಎಂದೂ ನಿರ್ಧರಿಸುವ ಪದರ', 'prompts ಸಂಗ್ರಹಿಸುವ database', 'model ya attention mechanism'] },
      { q: 'Genuinely confirmed in this lesson: what real bug did running the source router code reveal?', qKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: source router code ಚಲಾಯಿಸುವುದೂ ಯಾವ ನಿಜ bug ಬಹಿರಂಗಪಡಿಸಿತು?',
        opts: ['A typo in a variable name', 'review_feedback is never reset after rejection, causing an infinite loop on "researcher"', 'The planner never runs', 'The final answer is always None'], correct: 1,
        optsKn: ['ಒಂದೂ variable name ನಲ್ಲಿ typo', 'rejection ನಂತರ review_feedback ಎಂದಿಗೂ reset ಆಗುವುದಿಲ್ಲ, "researcher" ಮೇಲೆ infinite loop ಉಂಟುಮಾಡುತ್ತಾ', 'planner ಎಂದಿಗೂ ಚಲಾಯಿಸುವುದಿಲ್ಲ', 'ಅಂತಿಮ ಉತ್ತರ ಯಾವಾಗಲೂ None'] },
      { q: 'What is the main disadvantage of LLM-selected routing compared with Python routing?', qKn: 'Python routing ಗೆ ಹೋಲಿಸಿದರೆ LLM-selected routing ya ಮುಖ್ಯ ಅನಾನುಕೂಲತೆ ಏನೂ?',
        opts: ['LLMs cannot output agent names', 'It adds model cost, latency, and nondeterminism', 'It removes state entirely', 'It prevents tool calling'], correct: 1,
        optsKn: ['LLMs agent names ಔಟ್ಪುಟ್ ಮಾಡಲಾಗುವುದಿಲ್ಲ', 'ಇದೂ model cost, latency, ಮತ್ತೆ nondeterminism ಸೇರಿಸುತ್ತದೆ', 'ಇದೂ state ಅನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ತೆಗೆದುಹಾಕುತ್ತದೆ', 'ಇದೂ tool calling ತಡೆಯುತ್ತದೆ'] },
      { q: 'Genuinely confirmed: after the one-line fix, at which two steps did the workflow route to "reviewer"?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ-ಸಾಲಿನ fix ನಂತರ, workflow ಯಾವ ಎರಡೂ ಹಂತಗಳಲ್ಲಿ "reviewer" ಗೆ ಮಾರ್ಗಿಸಿತು?',
        opts: ['Steps 0 and 1', 'Steps 3 and 6', 'Steps 5 and 7 only', 'It never reached reviewer'], correct: 1,
        optsKn: ['Steps 0 ಮತ್ತೆ 1', 'Steps 3 ಮತ್ತೆ 6', 'ಕೇವಲ Steps 5 ಮತ್ತೆ 7', 'ಇದೂ ಎಂದಿಗೂ reviewer ತಲುಪಲಿಲ್ಲ'] },
      { q: 'Which abstraction most naturally matches a workflow drawn as A -> B -> C with an explicit loop-back?', qKn: 'A -> B -> C ಒಂದೂ ಸ್ಪಷ್ಟ loop-back ಜೊತೆ ಚಿತ್ರಿಸಿದ ಒಂದೂ workflow ಗೆ ಯಾವ abstraction ಅತ್ಯಂತ ಸಹಜವಾಗಿ ಹೊಂದುತ್ತದೆ?',
        opts: ['GroupChat', 'Crew', 'StateGraph', 'Persona'], correct: 2,
        optsKn: ['GroupChat', 'Crew', 'StateGraph', 'Persona'] },
    ] } },
  ],
};
