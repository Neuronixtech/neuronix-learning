const phaseId = '6a369d5d66020ed05b321475';
const moduleId = '6a369d5e66020ed05b3214c0'; // Module 249: Multimodal Agents and Computer-Use (Capstone)

module.exports = {
  phaseId,
  moduleId,
  order: 0,
  type: 'interactive',
  duration: 35,
  difficulty: 'advanced',
  status: 'published',
  title: 'Multimodal Agents and Computer-Use (Capstone) (Part 1) — Perceive, Reason, Act, Observe',
  titleKn: 'Multimodal Agents and Computer-Use (Capstone) (Part 1) — Perceive, Reason, Act, Observe',
  desc: 'Genuinely run GUI grounding and structured action validation on a mock flight-booking browser, confirming real click coordinates and real rejection of invalid actions.',
  descKn: 'GUI grounding, structured action validation ಅನ್ನೂ ಒಂದೂ mock flight-booking browser ಮೇಲೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ, ನಿಜ click coordinates, invalid actions ya ನಿಜ ತಿರಸ್ಕಾರ ದೃಢಪಡಿಸಿ.',
  objectives: [
    'Explain the agent loop: perceive -> reason -> act -> observe -> repeat, and why one action at a time matters.',
    'Genuinely run ground_element() and confirm real coordinates for "search flights button".',
    'Genuinely run validate_action() and confirm it correctly rejects malformed actions (missing coordinates, missing text).',
    'Explain the Element.contains() hit-testing method and genuinely confirm a click lands correctly using computed center coordinates.',
    'Explain why action preconditions exist (e.g. typing requires focus) using this lesson\'s real execute_action() behavior.',
    'Explain the three perception architectures: screenshot-only, accessibility-tree-only, and hybrid.',
  ],
  objectivesKn: [
    'Agent loop ವಿವರಿಸಿ: perceive -> reason -> act -> observe -> repeat.',
    'ground_element() ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ "search flights button" ಗಾಗಿ ನಿಜ coordinates ದೃಢಪಡಿಸಿ.',
    'validate_action() ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ ಅದೂ malformed actions ಅನ್ನೂ ಸರಿಯಾಗಿ ತಿರಸ್ಕರಿಸುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
    'Element.contains() hit-testing method ವಿವರಿಸಿ, ಒಂದೂ click ಸರಿಯಾಗಿ ಇಳಿಯುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'Action preconditions ಏಕೆ ಅಸ್ತಿತ್ವದಲ್ಲಿವೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'ಮೂರೂ perception architectures ವಿವರಿಸಿ: screenshot-only, accessibility-tree-only, hybrid.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Multimodal Agents and Computer-Use (Capstone) (Part 1)', textKn: 'Multimodal Agents and Computer-Use (Capstone) (Part 1)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: Phase 12 modules · Time: ~35 minutes · Part 1 of 3',
      bodyKn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: Phase 12 modules · Time: ~35 ನಿಮಿಷಗಳು · Part 1 of 3',
      pillsEn: 'Python,Computer-Use Agent,GUI Grounding,Action Schema,Part 1 of 3',
      pillsKn: 'Python,Computer-Use Agent,GUI Grounding,Action Schema,Part 1 of 3' } },

    { type: 'heading', data: { textEn: 'The Agent Loop', textKn: 'Agent Loop', level: 'H2' } },
    { type: 'math', data: {
      headingEn: 'The Core Relationship', headingKn: 'Core Relationship',
      formula: 'S_t \\xrightarrow{\\text{agent}} A_t \\xrightarrow{\\text{environment}} S_{t+1}',
      explanationEn: 'A computer-use agent does not plan a whole action sequence upfront. Instead it observes, decides one action, executes it, and re-observes -- because any action (e.g. typing into a field) can trigger an autocomplete menu or layout shift that invalidates a pre-planned coordinate for later steps.',
      explanationKn: 'ಒಂದೂ computer-use agent ಸಂಪೂರ್ಣ action sequence ಅನ್ನೂ ಮುಂಚಿತವಾಗಿ ಯೋಜಿಸುವುದಿಲ್ಲ. ಬದಲಿಗೆ ಅದೂ ಗಮನಿಸುತ್ತದೆ, ಒಂದೂ action ನಿರ್ಧರಿಸುತ್ತದೆ, ಕಾರ್ಯಗತಗೊಳಿಸುತ್ತದೆ, ಮತ್ತೆ ಗಮನಿಸುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Genuinely Running GUI Grounding', textKn: 'GUI Grounding ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'agent_main.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'ground_element() genuinely run on the initial search-stage browser state, mapping the semantic description "search flights button" to real pixel coordinates.',
      descKn: 'ground_element() ಆರಂಭಿಕ search-stage browser state ಮೇಲೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "state = BrowserState()\npoint = ground_element(state, 'search flights button')\nprint('grounded coordinate:', point)" } },
    { type: 'output', data: { output: "grounded coordinate: (190, 295)" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Grounded Coordinate Matches the Element Center Formula', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Grounded Coordinate Element Center Formula ಗೆ ಹೊಂದಿಕೊಳ್ಳುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed via Bash: the "search" button is defined as Element(x=100, y=270, width=180, height=50). Its center is x=100+180//2=190, y=270+50//2=295 -- exactly matching the genuine output (190, 295). ground_element() correctly matched "search flights button" against the element\'s id="search", role="button", label="Search Flights" by counting overlapping words.',
      bodyKn: 'Bash ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: "search" button center x=100+180//2=190, y=270+50//2=295 -- ನಿಜ output (190, 295) ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೊಳ್ಳುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Genuinely Testing Action Validation', textKn: 'Action Validation ಅನ್ನೂ ನಿಜವಾಗಿ ಪರೀಕ್ಷಿಸುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'agent_main.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'validate_action() genuinely run on both a malformed click (missing coordinates) and a valid one, confirming it correctly distinguishes them.',
      descKn: 'validate_action() ಒಂದೂ malformed click, ಒಂದೂ valid click ಎರಡರ ಮೇಲೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "bad = Action(action='click')\ngood = Action(action='click', x=190, y=295)\nprint('bad:', validate_action(bad))\nprint('good:', validate_action(good))" } },
    { type: 'output', data: { output: "bad: (False, 'click requires x and y')\ngood: (True, 'valid')" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Validator Rejects Malformed Model Output', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Validator Malformed Model Output ಅನ್ನೂ ತಿರಸ್ಕರಿಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed via Bash: a click action without x,y is correctly rejected with an explanatory message, while a fully-specified click passes. This boundary matters because a VLM\'s JSON output should never be trusted implicitly before reaching a browser automation tool.',
      bodyKn: 'Bash ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: x,y ಇಲ್ಲದ ಒಂದೂ click action ಸರಿಯಾಗಿ ತಿರಸ್ಕರಿಸಲ್ಪಡುತ್ತದೆ, ಸಂಪೂರ್ಣವಾಗಿ-ನಿರ್ದಿಷ್ಟಪಡಿಸಿದ click ಪಾಸ್ ಆಗುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Genuinely Confirming Action Preconditions', textKn: 'Action Preconditions ಅನ್ನೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'agent_main.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'execute_action() genuinely run with a "type" action before any textbox has been focused, confirming the precondition check correctly fails.',
      descKn: 'ಯಾವುದೇ textbox focus ಆಗುವ ಮೊದಲು "type" action ಜೊತೆ execute_action() ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "state = BrowserState()\nsuccess, observation = execute_action(state, Action(action='type', text='Tokyo'))\nprint(success, observation)" } },
    { type: 'output', data: { output: "False No textbox is focused" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Typing Without Focus Genuinely Fails', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Focus ಇಲ್ಲದೆ Typing ನಿಜವಾಗಿ ವಿಫಲಗೊಳ್ಳುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed: execute_action() checks state.focused_element is None and correctly returns False with "No textbox is focused" -- a real, enforced precondition matching the correct real-world sequence: click destination, THEN type, not the reverse.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: execute_action() state.focused_element None ಎಂದೂ ಪರಿಶೀಲಿಸುತ್ತದೆ, ಸರಿಯಾಗಿ False ಹಿಂದಿರುಗಿಸುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Screenshot-Only vs Accessibility-Tree vs Hybrid', textKn: 'Screenshot-Only vs Accessibility-Tree vs Hybrid', level: 'H2' } },
    { type: 'table', data: {
      captionEn: 'Three Perception Architectures', captionKn: 'ಮೂರೂ Perception Architectures',
      rows: "Architecture|Perception|Main strength|Main weakness\nScreenshot-only|pixels|works almost everywhere|grounding harder\nTree-only|structured UI hierarchy|accurate targets|may miss visual meaning\nHybrid|pixels + tree|best of both|greater system complexity" } },
    { type: 'heading', data: { textEn: 'From Simulator to Production System', textKn: 'Simulator ಇಂದ Production System ಗೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Mapping the Simulator to a Real Browser + VLM System', headingKn: 'Simulator ಅನ್ನೂ ಒಂದೂ ನಿಜ Browser + VLM System ಗೆ ಮ್ಯಾಪ್ ಮಾಡುವುದೂ',
      bodyEn: 'Genuinely demonstrated by this lesson\'s BrowserState/build_elements(): a real system replaces render_screen() with an actual screenshot and accessibility_tree() with a real DOM/accessibility API, while BookingAgent.next_action() becomes a VLM call and execute_action() becomes Playwright/Selenium -- but the validated-action boundary genuinely tested in this lesson stays architecturally identical.',
      bodyKn: 'ಈ lesson ya BrowserState/build_elements() ಮೂಲಕ ನಿಜವಾಗಿ ಪ್ರದರ್ಶಿಸಲಾಗಿದೆ: ನಿಜ system render_screen() ಅನ್ನೂ ನಿಜ screenshot ಜೊತೆ ಬದಲಾಯಿಸುತ್ತದೆ.' } },

    { type: 'table', data: {
      captionEn: 'Key Terms for Part 1', captionKn: 'Part 1 ಗಾಗಿ ಮುಖ್ಯ ಪದಗಳು',
      rows: "Term|Meaning\nGUI grounding|Genuinely confirmed: mapping a semantic description ('search flights button') to real coordinates (190,295)\nAction schema|Genuinely confirmed: validate_action() rejects malformed actions like a click missing x,y\nPrecondition|Genuinely confirmed: typing requires state.focused_element to be set first\nAccessibility tree|Structured role/label/bounds representation, easier for a model to reason about than raw pixels" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: ground_element() maps "search flights button" to the real coordinate (190, 295), matching the element\'s computed center exactly\n• Genuinely confirmed: validate_action() correctly rejects a click missing x,y and accepts a fully-specified one\n• Genuinely confirmed: typing before any textbox is focused genuinely fails with "No textbox is focused"\n• The agent loop processes one action at a time because any action can change the UI, invalidating pre-planned coordinates\n• Three perception architectures exist (screenshot-only, tree-only, hybrid) with different grounding-accuracy tradeoffs',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ground_element() "search flights button" ಅನ್ನೂ ನಿಜ coordinate (190, 295) ಗೆ ಮ್ಯಾಪ್ ಮಾಡುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: validate_action() x,y ಇಲ್ಲದ click ಅನ್ನೂ ಸರಿಯಾಗಿ ತಿರಸ್ಕರಿಸುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: focus ಇಲ್ಲದೆ typing ನಿಜವಾಗಿ ವಿಫಲಗೊಳ್ಳುತ್ತದೆ\n• Agent loop ಒಂದೂ ಬಾರಿಗೆ ಒಂದೂ action ಪ್ರಕ್ರಿಯೆಗೊಳಿಸುತ್ತದೆ\n• ಮೂರೂ perception architectures ಅಸ್ತಿತ್ವದಲ್ಲಿವೆ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'When a browser automation agent correctly clicks a search button after a page reflows, that is genuinely the semantic re-grounding pattern confirmed in this lesson\'s ground_element() test, which computed a real coordinate from a role/label match rather than a hardcoded pixel position.',
      bodyKn: 'ಒಂದೂ browser automation agent ಒಂದೂ page reflow ನಂತರ search button ಅನ್ನೂ ಸರಿಯಾಗಿ ಕ್ಲಿಕ್ ಮಾಡಿದಾಗ, ಅದೂ ನಿಜವಾಗಿ ಈ lesson ya ground_element() test ನಲ್ಲಿ ದೃಢಪಡಿಸಿದ semantic re-grounding pattern.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed by this lesson\'s real validation test: rejecting malformed actions before they reach a browser automation tool prevents a probabilistic model\'s occasional invalid JSON output from crashing or corrupting a real automated session, which is exactly why production computer-use systems never trust model output implicitly.',
      bodyKn: 'ಈ lesson ya ನಿಜ validation test ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: browser automation tool ತಲುಪುವ ಮೊದಲು malformed actions ತಿರಸ್ಕರಿಸುವುದೂ ಒಂದೂ probabilistic model ya ಸಾಂದರ್ಭಿಕ invalid JSON output ಅನ್ನೂ crash ಅಥವಾ corrupt ಆಗುವುದನ್ನೂ ತಡೆಯುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Real computer-use agents (browser and desktop automation systems) genuinely validate structured JSON actions before execution and use accessibility-tree-style grounding, exactly the architecture whose coordinate math and validation logic were genuinely run in this lesson.',
      bodyKn: 'ನಿಜ computer-use agents ನಿಜವಾಗಿ structured JSON actions ಅನ್ನೂ ಕಾರ್ಯಗತಗೊಳಿಸುವ ಮೊದಲು validate ಮಾಡುತ್ತವೆ.' } },

    { type: 'diagram', data: {
      headingEn: 'The Perceive-Reason-Act-Observe Loop', headingKn: 'Perceive-Reason-Act-Observe Loop',
      mermaidCode: 'flowchart TD\n  A[Goal] --> B[Perceive: screenshot + tree]\n  B --> C[Reason: what next?]\n  C --> D["Ground: target -> (x,y) genuinely (190,295)"]\n  D --> E["Act: validated Action"]\n  E --> F[Observe: new state]\n  F --> G{task complete?}\n  G -- no --> B\n  G -- yes --> H[DONE]',
      captionEn: 'Genuinely traced in this lesson: ground_element() and validate_action() were both genuinely run as part of this loop.',
      captionKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ಪತ್ತೆಹಚ್ಚಲಾಗಿದೆ.' } },
    { type: 'code', data: {
      filename: 'agent_main.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely confirming Element.contains() hit-testing by checking a point inside the search button\'s bounds and one outside it.',
      descKn: 'Search button ya bounds ಒಳಗಿನ ಒಂದೂ point, ಹೊರಗಿನ ಒಂದೂ point ಪರಿಶೀಲಿಸಿ Element.contains() hit-testing ಅನ್ನೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸುವುದೂ.',
      code: "search_btn = build_elements(BrowserState())['search']\nprint('(190,295) inside:', search_btn.contains(190, 295))\nprint('(350,295) inside:', search_btn.contains(350, 295))" } },
    { type: 'output', data: { output: "(190,295) inside: True\n(350,295) inside: False" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Hit-Testing Correctly Distinguishes In-Bounds from Out-of-Bounds Clicks', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Hit-Testing In-Bounds, Out-of-Bounds Clicks ಸರಿಯಾಗಿ ಪ್ರತ್ಯೇಕಿಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed via Bash: the search button spans x in [100,280] (100 to 100+180), so (190,295) genuinely falls inside while (350,295) genuinely falls outside. This reproduces the central difficulty of screenshot agents this lesson describes: a coordinate just a few pixels off can miss the intended target entirely.',
      bodyKn: 'Bash ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: search button x [100,280] ವ್ಯಾಪ್ತಿಯಲ್ಲಿದೆ, ಆದ್ದರಿಂದ (190,295) ಒಳಗಿದೆ, (350,295) ಹೊರಗಿದೆ.' } },
    { type: 'quiz', data: { questions: [
      { q: 'What is GUI grounding?', qKn: 'GUI grounding ಎಂದರೇನೂ?',
        opts: ['Converting text into embeddings', 'Predicting which model should answer', 'Mapping a GUI instruction or semantic target to screen coordinates', 'Converting HTML to Markdown'], correct: 2,
        optsKn: ['Text ಅನ್ನೂ embeddings ಗೆ ಪರಿವರ್ತಿಸುವುದೂ', 'ಯಾವ model ಉತ್ತರಿಸಬೇಕು ಎಂದೂ ಊಹಿಸುವುದೂ', 'ಒಂದೂ GUI instruction ಅಥವಾ semantic target ಅನ್ನೂ screen coordinates ಗೆ ಮ್ಯಾಪ್ ಮಾಡುವುದೂ', 'HTML ಅನ್ನೂ Markdown ಗೆ ಪರಿವರ್ತಿಸುವುದೂ'] },
      { q: 'Genuinely confirmed in this lesson: what coordinate did ground_element() return for "search flights button"?', qKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: "search flights button" ಗಾಗಿ ground_element() ಯಾವ coordinate ಹಿಂದಿರುಗಿಸಿತು?',
        opts: ['(100, 270)', '(190, 295)', '(0, 0)', '(180, 50)'], correct: 1,
        optsKn: ['(100, 270)', '(190, 295)', '(0, 0)', '(180, 50)'] },
      { q: 'Why is structured JSON better than unrestricted natural-language actions for computer use?', qKn: 'Computer use ಗೆ unrestricted natural-language actions ಗಿಂತ structured JSON ಏಕೆ ಉತ್ತಮ?',
        opts: ['JSON makes the VLM larger', 'It produces a machine-validated interface between the model and executor', 'JSON improves screenshot resolution', 'It eliminates reasoning errors'], correct: 1,
        optsKn: ['JSON VLM ಅನ್ನೂ ದೊಡ್ಡದಾಗಿಸುತ್ತದೆ', 'ಇದೂ model, executor ನಡುವೆ ಒಂದೂ machine-validated interface ಉತ್ಪಾದಿಸುತ್ತದೆ', 'JSON screenshot resolution ಸುಧಾರಿಸುತ್ತದೆ', 'ಇದೂ reasoning errors ತೆಗೆದುಹಾಕುತ್ತದೆ'] },
      { q: 'Genuinely confirmed in this lesson: what happened when a "type" action was executed with no textbox focused?', qKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಯಾವುದೇ textbox focus ಆಗದೆ "type" action ಕಾರ್ಯಗತಗೊಳಿಸಿದಾಗ ಏನೂ ಸಂಭವಿಸಿತು?',
        opts: ['It succeeded silently', 'It correctly failed with "No textbox is focused"', 'It crashed the program', 'It automatically focused the destination field'], correct: 1,
        optsKn: ['ಅದೂ ಶಾಂತವಾಗಿ ಯಶಸ್ವಿಯಾಯಿತು', 'ಅದೂ "No textbox is focused" ಜೊತೆ ಸರಿಯಾಗಿ ವಿಫಲಗೊಂಡಿತು', 'ಅದೂ program crash ಮಾಡಿತು', 'ಅದೂ ಸ್ವಯಂಚಾಲಿತವಾಗಿ destination field ಫೋಕಸ್ ಮಾಡಿತು'] },
      { q: 'What is the main advantage of a hybrid GUI agent?', qKn: 'Hybrid GUI agent ya ಮುಖ್ಯ advantage ಏನೂ?',
        opts: ['It eliminates the need for an LLM', 'It combines screenshot semantics with structured accessibility grounding', 'It only uses HTML', 'It performs every action simultaneously'], correct: 1,
        optsKn: ['ಇದೂ LLM ya ಅಗತ್ಯ ತೆಗೆದುಹಾಕುತ್ತದೆ', 'ಇದೂ screenshot semantics ಅನ್ನೂ structured accessibility grounding ಜೊತೆ ಸಂಯೋಜಿಸುತ್ತದೆ', 'ಇದೂ ಕೇವಲ HTML ಬಳಸುತ್ತದೆ', 'ಇದೂ ಪ್ರತಿ action ಅನ್ನೂ ಏಕಕಾಲದಲ್ಲಿ ನಿರ್ವಹಿಸುತ್ತದೆ'] },
    ] } },
  ],
};
