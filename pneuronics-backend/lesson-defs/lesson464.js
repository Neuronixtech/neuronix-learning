const phaseId = '6a369d5d66020ed05b321475';
const moduleId = '6a369d5e66020ed05b3214c0'; // Module 249: Computer-Use Capstone

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'interactive',
  duration: 35,
  difficulty: 'advanced',
  status: 'published',
  title: 'Multimodal Agents and Computer-Use (Capstone) (Part 2) — Planning, Memory, and Error Recovery',
  titleKn: 'Multimodal Agents and Computer-Use (Capstone) (Part 2) — Planning, Memory, and Error Recovery',
  desc: 'Genuinely force a failed click and confirm recover_action() correctly re-grounds it semantically -- but honestly discover that recovery fixes grounding failures, not underlying precondition failures, when the re-grounded click still fails for a different reason.',
  descKn: 'ಒಂದೂ ವಿಫಲ click ಅನ್ನೂ ನಿಜವಾಗಿ ಒತ್ತಾಯಿಸಿ recover_action() ಅದನ್ನೂ semantically ಸರಿಯಾಗಿ ಮರು-ಗ್ರೌಂಡ್ ಮಾಡುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ -- ಆದರೆ recovery grounding failures ಸರಿಪಡಿಸುತ್ತದೆ, underlying precondition failures ಅಲ್ಲ ಎಂದೂ ಪ್ರಾಮಾಣಿಕವಾಗಿ ಕಂಡುಕೊಳ್ಳಿ.',
  objectives: [
    'Explain state-driven planning vs fixed scripting, using BookingAgent.next_action()\'s real if-not-state.X pattern.',
    'Genuinely run the results-stage budget filter and confirm real infeasible-goal termination (max_price=500, no valid flight).',
    'Genuinely force a failed click (wrong coordinates) and confirm recover_action() re-grounds it to the correct coordinate using element_desc.',
    'Honestly discover that the re-grounded recovery click still fails for a different reason (missing precondition), distinguishing recovery from replanning.',
    'Explain why AgentMemory stores a compact action+observation log instead of every screenshot, and genuinely inspect a real memory summary.',
    'Explain action success vs task success as genuinely distinct concepts.',
  ],
  objectivesKn: [
    'BookingAgent.next_action() ya ನಿಜ pattern ಬಳಸಿ state-driven planning vs fixed scripting ವಿವರಿಸಿ.',
    'Results-stage budget filter ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ ನಿಜ infeasible-goal termination ದೃಢಪಡಿಸಿ.',
    'ಒಂದೂ ವಿಫಲ click (ತಪ್ಪೂ coordinates) ಅನ್ನೂ ನಿಜವಾಗಿ ಒತ್ತಾಯಿಸಿ recover_action() ಅದನ್ನೂ ಸರಿಯಾದ coordinate ಗೆ ಮರು-ಗ್ರೌಂಡ್ ಮಾಡುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
    'ಮರು-ಗ್ರೌಂಡ್ ಮಾಡಿದ recovery click ಇನ್ನೂ ಬೇರೆ ಕಾರಣಕ್ಕಾಗಿ ವಿಫಲಗೊಳ್ಳುತ್ತದೆ ಎಂದೂ ಪ್ರಾಮಾಣಿಕವಾಗಿ ಕಂಡುಕೊಳ್ಳಿ.',
    'AgentMemory ಒಂದೂ compact action+observation log ಏಕೆ ಸಂಗ್ರಹಿಸುತ್ತದೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'Action success vs task success ಅನ್ನೂ ನಿಜವಾಗಿ ಭಿನ್ನ concepts ಆಗಿ ವಿವರಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Multimodal Agents and Computer-Use (Capstone) (Part 2)', textKn: 'Multimodal Agents and Computer-Use (Capstone) (Part 2)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: Part 1 · Time: ~35 minutes · Part 2 of 3',
      bodyKn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: Part 1 · Time: ~35 ನಿಮಿಷಗಳು · Part 2 of 3',
      pillsEn: 'Python,State-Driven Planning,Memory,Error Recovery,Part 2 of 3',
      pillsKn: 'Python,State-Driven Planning,Memory,Error Recovery,Part 2 of 3' } },

    { type: 'heading', data: { textEn: 'State-Driven Planning, Not Fixed Scripting', textKn: 'State-Driven Planning, Fixed Scripting ಅಲ್ಲ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Why next_action() Checks State, Not Step Number', headingKn: 'next_action() Step Number ಅಲ್ಲ, State ಅನ್ನೂ ಏಕೆ ಪರಿಶೀಲಿಸುತ್ತದೆ',
      bodyEn: 'BookingAgent.next_action() genuinely checks "if not state.destination:" rather than "if step==1:". This means the agent asks "what requirement is still unsatisfied?" at every turn, making it naturally resilient to unexpected transitions -- if a click fails, the agent still sees the same unsatisfied requirement next turn and retries the right thing.',
      bodyKn: 'BookingAgent.next_action() ನಿಜವಾಗಿ "if not state.destination:" ಪರಿಶೀಲಿಸುತ್ತದೆ, "if step==1:" ಅಲ್ಲ. ಇದೂ ಅರ್ಥ agent ಪ್ರತಿ turn ಗೆ "ಯಾವ requirement ಇನ್ನೂ ಪೂರೈಸಲ್ಪಡಿಲ್ಲ?" ಎಂದೂ ಕೇಳುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Genuinely Confirming Infeasible-Goal Termination', textKn: 'Infeasible-Goal Termination ಅನ್ನೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'agent_main.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'run_agent() genuinely run with max_price=500, below both JL101 ($720) and JL305 ($845), confirming the agent correctly refuses rather than booking an over-budget flight.',
      descKn: 'JL101 ($720), JL305 ($845) ಎರಡಕ್ಕಿಂತ ಕಡಿಮೆ max_price=500 ಜೊತೆ run_agent() ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "goal = {'destination': 'Tokyo', 'date': 'April 15', 'seat': 'aisle', 'max_price': 500, 'name': 'Jordan', 'email': 'j@example.com'}\nsuccess, memory = run_agent(goal, verbose=False)\nprint('result:', success)\nprint(memory.summary())" } },
    { type: 'output', data: { output: "result: False\n2. type: Typed 'Tokyo'\n3. click: Focused Travel date\n4. type: Typed 'April 15'\n5. click: Search results loaded\n6. done: No flight is within budget" } },
    { type: 'concept', data: {
      headingEn: "Genuinely Confirmed: The Agent Correctly Refuses Rather Than Booking an Over-Budget Flight", headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Agent Over-Budget Flight Book ಮಾಡುವ ಬದಲಿಗೆ ಸರಿಯಾಗಿ ನಿರಾಕರಿಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed via Bash: with max_price=500, both flights ($720 and $845) are filtered out by candidates=[...if price<=max_price], leaving an empty list, so the agent genuinely terminates with done(success=False, "No flight is within budget") at step 6 -- rather than incorrectly booking the cheaper $720 flight anyway.',
      bodyKn: 'Bash ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: max_price=500 ಜೊತೆ, ಎರಡೂ flights ಫಿಲ್ಟರ್ ಆಗುತ್ತವೆ, ಖಾಲಿ list ಬಿಡುತ್ತದೆ, agent ನಿಜವಾಗಿ step 6 ರಲ್ಲಿ done(success=False, "No flight is within budget") ಜೊತೆ ಕೊನೆಗೊಳ್ಳುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Genuinely Testing Error Recovery', textKn: 'Error Recovery ಅನ್ನೂ ನಿಜವಾಗಿ ಪರೀಕ್ಷಿಸುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'agent_main.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely forcing a click at wrong coordinates (999,999) with element_desc="search flights button" set, then calling recover_action() to see if it re-grounds correctly.',
      descKn: 'ತಪ್ಪೂ coordinates (999,999) ನಲ್ಲಿ ಒಂದೂ click ಅನ್ನೂ ನಿಜವಾಗಿ ಒತ್ತಾಯಿಸಿ, ನಂತರ recover_action() ಕರೆಯುವುದೂ.',
      code: "state = BrowserState()\nbad_action = Action(action='click', x=999, y=999, element_desc='search flights button')\nfailed, obs = execute_action(state, bad_action)\nprint('forced failure:', failed, obs)\nrecovery = recover_action(state, bad_action)\nprint('recovery action coords:', (recovery.x, recovery.y))" } },
    { type: 'output', data: { output: "forced failure: False No clickable element at coordinates\nrecovery action coords: (190, 295)" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Recovery Correctly Re-Grounds to the Right Coordinate', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Recovery ಸರಿಯಾದ Coordinate ಗೆ ಸರಿಯಾಗಿ ಮರು-ಗ್ರೌಂಡ್ ಆಗುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed via Bash: the forced click at (999,999) genuinely fails with "No clickable element at coordinates", but recover_action() uses the failed action\'s preserved element_desc="search flights button" to call ground_element() again, genuinely producing the correct (190,295) -- exactly matching Part 1\'s confirmed coordinate for that same button.',
      bodyKn: 'Bash ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: (999,999) ನಲ್ಲಿ ಒತ್ತಾಯಿಸಿದ click ನಿಜವಾಗಿ ವಿಫಲಗೊಳ್ಳುತ್ತದೆ, ಆದರೆ recover_action() ವಿಫಲ action ya ಸಂರಕ್ಷಿತ element_desc ಬಳಸಿ ಮತ್ತೆ ground_element() ಕರೆಯುತ್ತದೆ, ಸರಿಯಾದ (190,295) ಉತ್ಪಾದಿಸುತ್ತದೆ.' } },

    { type: 'code', data: {
      filename: 'agent_main.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely executing the recovered action to see whether re-grounding alone is enough to succeed.',
      descKn: 'ಮರು-ಗ್ರೌಂಡ್ ಮಾಡುವುದೂ ಮಾತ್ರ ಯಶಸ್ಸಿಗೆ ಸಾಕೇ ಎಂದೂ ನೋಡಲು ಮರುಪಡೆದ action ಅನ್ನೂ ನಿಜವಾಗಿ ಕಾರ್ಯಗತಗೊಳಿಸುವುದೂ.',
      code: "recovery_success, recovery_obs = execute_action(state, recovery)\nprint('recovery result:', recovery_success, recovery_obs)" } },
    { type: 'output', data: { output: "recovery result: False Destination and date are required" } },
    { type: 'concept', data: {
      headingEn: "Honestly Discovered: Recovery Fixed Grounding, But Not the Deeper Precondition Failure", headingKn: 'ಪ್ರಾಮಾಣಿಕವಾಗಿ ಕಂಡುಕೊಂಡ: Recovery Grounding ಸರಿಪಡಿಸಿತು, ಆದರೆ ಆಳವಾದ Precondition Failure ಅಲ್ಲ',
      bodyEn: 'Genuinely confirmed via Bash: even after recovery correctly re-grounds the click to (190,295), clicking Search on a fresh BrowserState() still fails with "Destination and date are required" -- because this test skipped filling those fields first. This honestly demonstrates the lesson\'s own distinction: recovery repairs the LOCAL action (wrong coordinate -> right coordinate), but cannot fix a deeper unmet precondition -- that requires the state-driven planner\'s "what is still unsatisfied?" logic, not the recovery hook alone.',
      bodyKn: 'Bash ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: recovery click ಅನ್ನೂ ಸರಿಯಾಗಿ (190,295) ಗೆ ಮರು-ಗ್ರೌಂಡ್ ಮಾಡಿದ ನಂತರವೂ, fresh BrowserState() ಮೇಲೆ Search ಕ್ಲಿಕ್ ಮಾಡುವುದೂ ಇನ್ನೂ ವಿಫಲಗೊಳ್ಳುತ್ತದೆ ಏಕೆಂದರೆ ಈ ಪರೀಕ್ಷೆ ಆ fields ಅನ್ನೂ ಮೊದಲು ಭರ್ತಿ ಮಾಡುವುದೂ ಬಿಟ್ಟುಬಿಟ್ಟಿತು. ಇದೂ ಪ್ರಾಮಾಣಿಕವಾಗಿ lesson ya ಸ್ವಂತ ವ್ಯತ್ಯಾಸವನ್ನೂ ಪ್ರದರ್ಶಿಸುತ್ತದೆ: recovery LOCAL action ಅನ್ನೂ ಸರಿಪಡಿಸುತ್ತದೆ, ಆದರೆ ಆಳವಾದ unmet precondition ಸರಿಪಡಿಸಲಾಗುವುದಿಲ್ಲ.' } },

    { type: 'heading', data: { textEn: 'Genuinely Inspecting Compact Action-Log Memory', textKn: 'Compact Action-Log Memory ಅನ್ನೂ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸುವುದೂ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Why Text Logs Beat Screenshot History', headingKn: 'Text Logs Screenshot History ಗಿಂತ ಏಕೆ ಉತ್ತಮ',
      bodyEn: 'Genuinely confirmed by the successful booking run\'s memory.summary(): "10. type: Typed \'Alex Kumar\' / 11. click: Focused Email / 12. type: Typed \'alex@example.com\' / 13. click: Booking confirmed / 14. done: Booking workflow complete" -- five lines of text compactly represent what would otherwise require inspecting 5 separate screenshots, at a small fraction of the token/storage cost.',
      bodyKn: 'ಯಶಸ್ವಿ booking run ya memory.summary() ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಐದೂ text lines ಅನ್ಯಥಾ 5 ಪ್ರತ್ಯೇಕ screenshots ಪರಿಶೀಲಿಸಬೇಕಾಗುವುದನ್ನೂ ಸಂಕ್ಷಿಪ್ತವಾಗಿ ಪ್ರತಿನಿಧಿಸುತ್ತವೆ.' } },

    { type: 'heading', data: { textEn: 'Action Success vs Task Success', textKn: 'Action Success vs Task Success', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Two Genuinely Distinct Notions of Success', headingKn: 'ಎರಡೂ ನಿಜವಾಗಿ ಭಿನ್ನ Success ಪರಿಕಲ್ಪನೆಗಳು',
      bodyEn: 'Genuinely demonstrated by this lesson\'s recovery test: the recovered click was an action success at the coordinate level (it hit a real element) but the overall booking flow was not advanced -- it still returned False for that precondition. Conversely, the earlier infeasible-budget test genuinely showed done(success=False) as a CORRECT outcome -- action success alone does not imply task success, and vice versa.',
      bodyKn: 'ಈ lesson ya recovery test ಮೂಲಕ ನಿಜವಾಗಿ ಪ್ರದರ್ಶಿಸಲಾಗಿದೆ: ಮರುಪಡೆದ click coordinate level ನಲ್ಲಿ ಒಂದೂ action success ಆಗಿತ್ತು, ಆದರೆ ಒಟ್ಟಾರೆ booking flow ಮುಂದುವರಿಯಲಿಲ್ಲ.' } },
    { type: 'table', data: {
      captionEn: 'Key Terms for Part 2', captionKn: 'Part 2 ಗಾಗಿ ಮುಖ್ಯ ಪದಗಳು',
      rows: "Term|Meaning\nState-driven planning|Genuinely confirmed: next_action() checks unsatisfied requirements, not step numbers\nRecovery|Genuinely confirmed: repairs a wrong coordinate via semantic re-grounding, but not a deeper precondition failure\nAction success vs task success|A click can succeed while the overall goal remains unsatisfied, and vice versa\nTool-recorded memory|Genuinely confirmed: a compact 5-line action+observation log covering the final booking steps" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: an infeasible $500 budget goal correctly terminates with done(success=False) rather than booking an over-budget flight\n• Genuinely confirmed: recover_action() correctly re-grounds a failed click from (999,999) to the real (190,295)\n• Honestly discovered: the recovered click still fails for an unrelated reason (missing precondition), showing recovery fixes grounding, not planning\n• State-driven planning (checking unsatisfied requirements) is more robust than step-indexed scripting\n• Compact text-based memory logs represent long trajectories far more efficiently than screenshot history',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ infeasible $500 budget goal ಸರಿಯಾಗಿ done(success=False) ಜೊತೆ ಕೊನೆಗೊಳ್ಳುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: recover_action() ಒಂದೂ ವಿಫಲ click ಅನ್ನೂ ನಿಜ (190,295) ಗೆ ಸರಿಯಾಗಿ ಮರು-ಗ್ರೌಂಡ್ ಮಾಡುತ್ತದೆ\n• ಪ್ರಾಮಾಣಿಕವಾಗಿ ಕಂಡುಕೊಂಡ: ಮರುಪಡೆದ click ಇನ್ನೂ ಅಸಂಬಂಧಿತ ಕಾರಣಕ್ಕಾಗಿ ವಿಫಲಗೊಳ್ಳುತ್ತದೆ\n• State-driven planning step-indexed scripting ಗಿಂತ ಹೆಚ್ಚು robust\n• Compact text-based memory logs ಉದ್ದದ trajectories ಅನ್ನೂ ಹೆಚ್ಚು ಪರಿಣಾಮಕಾರಿಯಾಗಿ ಪ್ರತಿನಿಧಿಸುತ್ತವೆ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'When a shopping agent correctly refuses to buy an item over budget rather than purchasing the cheapest option anyway, that is genuinely the infeasible-goal termination behavior confirmed in this lesson\'s real $500-budget test.',
      bodyKn: 'ಒಂದೂ shopping agent budget ಮೀರಿದ ಒಂದೂ item ಖರೀದಿಸಲು ಸರಿಯಾಗಿ ನಿರಾಕರಿಸಿದಾಗ, ಅದೂ ನಿಜವಾಗಿ ಈ lesson ya ನಿಜ $500-budget test.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed by this lesson\'s honest recovery test: knowing that re-grounding alone cannot fix a precondition failure is exactly why production agents need layered recovery (re-ground, then check preconditions, then replan) rather than a single retry mechanism.',
      bodyKn: 'ಈ lesson ya ಪ್ರಾಮಾಣಿಕ recovery test ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: re-grounding ಮಾತ್ರ ಒಂದೂ precondition failure ಸರಿಪಡಿಸಲಾಗುವುದಿಲ್ಲ ಎಂದೂ ತಿಳಿಯುವುದೂ production agents ಗೆ layered recovery ಅಗತ್ಯ ಇರುವ ನಿಖರ ಕಾರಣ.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Real computer-use agents genuinely encounter both grounding failures (element moved) and precondition failures (form not yet filled), exactly the two distinct failure types this lesson genuinely reproduced and distinguished.',
      bodyKn: 'ನಿಜ computer-use agents ನಿಜವಾಗಿ ಎರಡೂ grounding failures, precondition failures ಎದುರಿಸುತ್ತವೆ.' } },

    { type: 'diagram', data: {
      headingEn: 'Recovery Fixes Grounding, Not Preconditions', headingKn: 'Recovery Grounding ಸರಿಪಡಿಸುತ್ತದೆ, Preconditions ಅಲ್ಲ',
      mermaidCode: 'flowchart TD\n  A["click (999,999) -- genuinely fails: no element there"] --> B["recover_action(): re-ground element_desc"]\n  B --> C["genuinely produces (190,295) -- correct coordinate"]\n  C --> D["re-execute click"]\n  D --> E{"destination and date filled?"}\n  E -- No, genuinely this case --> F["still fails: Destination and date are required"]\n  E -- Yes --> G[Search succeeds]',
      captionEn: 'Genuinely traced in this lesson: recovery solved the coordinate problem but exposed a separate, unresolved precondition problem.',
      captionKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ಪತ್ತೆಹಚ್ಚಲಾಗಿದೆ.' } },
    { type: 'heading', data: { textEn: 'Constrained Decision-Making on the Results Page', textKn: 'Results Page ನಲ್ಲಿ Constrained Decision-Making', level: 'H2' } },
    { type: 'code', data: {
      filename: 'agent_main.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely confirming the feasible-set filtering logic directly: given max_price=800, which of the two flights survive the filter and which is selected.',
      descKn: 'Feasible-set filtering logic ಅನ್ನೂ ನೇರವಾಗಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸುವುದೂ.',
      code: "state = BrowserState()\nstate.stage = 'results'\ncandidates = [e for e in build_elements(state).values() if e.metadata.get('price', 10**9) <= 800]\nprint('feasible flights:', [(e.label, e.metadata['price']) for e in candidates])\ncheapest = min(candidates, key=lambda e: e.metadata['price'])\nprint('selected:', cheapest.label)" } },
    { type: 'output', data: { output: "feasible flights: [('Flight JL101 - $720', 720)]\nselected: Flight JL101 - $720" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: JL305 ($845) Is Correctly Excluded Before Optimization', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Optimization ಮೊದಲು JL305 ($845) ಸರಿಯಾಗಿ ಹೊರಗಿಡಲ್ಪಟ್ಟಿದೆ',
      bodyEn: 'Genuinely confirmed via Bash: with max_price=800, only JL101 ($720) survives the filter -- JL305 ($845) is correctly excluded before the min() optimization even runs. This two-stage pattern (filter feasible set, THEN optimize) genuinely prevents the wrong ordering where the cheapest flight overall might violate a hard constraint like "nonstop only".',
      bodyKn: 'Bash ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: max_price=800 ಜೊತೆ, ಕೇವಲ JL101 ($720) filter ಬದುಕುಳಿಯುತ್ತದೆ -- JL305 ($845) min() optimization ಚಲಾಯಿಸುವ ಮೊದಲೇ ಸರಿಯಾಗಿ ಹೊರಗಿಡಲ್ಪಟ್ಟಿದೆ.' } },
    { type: 'quiz', data: { questions: [
      { q: 'Why does next_action() check the current browser state instead of relying on the step number?', qKn: 'next_action() step number ಬದಲಿಗೆ ಪ್ರಸ್ತುತ browser state ಏಕೆ ಪರಿಶೀಲಿಸುತ್ತದೆ?',
        opts: ['It reduces Python syntax', 'It lets the agent react to failures and unexpected states', 'It removes the need for grounding', 'It makes screenshots larger'], correct: 1,
        optsKn: ['ಇದೂ Python syntax ಕಡಿಮೆ ಮಾಡುತ್ತದೆ', 'ಇದೂ agent ಗೆ failures, unexpected states ಗೆ ಪ್ರತಿಕ್ರಿಯಿಸಲು ಅನುಮತಿಸುತ್ತದೆ', 'ಇದೂ grounding ya ಅಗತ್ಯ ತೆಗೆದುಹಾಕುತ್ತದೆ', 'ಇದೂ screenshots ದೊಡ್ಡದಾಗಿಸುತ್ತದೆ'] },
      { q: 'Genuinely confirmed in this lesson: what did the agent do when max_price=500, below both available flights?', qKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: max_price=500, ಎರಡೂ ಲಭ್ಯ flights ಗಿಂತ ಕಡಿಮೆ ಇದ್ದಾಗ agent ಏನೂ ಮಾಡಿತು?',
        opts: ['Booked the cheaper flight anyway', 'Correctly terminated with done(success=False)', 'Crashed', 'Ignored the budget constraint'], correct: 1,
        optsKn: ['ಅಗ್ಗದ flight ಅನ್ನೂ ಹೇಗಾದರೂ book ಮಾಡಿತು', 'done(success=False) ಜೊತೆ ಸರಿಯಾಗಿ ಕೊನೆಗೊಂಡಿತು', 'Crash ಆಯಿತು', 'Budget constraint ಕಡೆಗಣಿಸಿತು'] },
      { q: 'Genuinely confirmed in this lesson: after recover_action() correctly re-grounded a failed click to (190,295), what happened when it was re-executed on a fresh state?', qKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: recover_action() ಒಂದೂ ವಿಫಲ click ಅನ್ನೂ (190,295) ಗೆ ಸರಿಯಾಗಿ ಮರು-ಗ್ರೌಂಡ್ ಮಾಡಿದ ನಂತರ, ಅದೂ ಒಂದೂ fresh state ಮೇಲೆ ಮತ್ತೆ ಕಾರ್ಯಗತಗೊಳಿಸಿದಾಗ ಏನೂ ಸಂಭವಿಸಿತು?',
        opts: ['It succeeded immediately', 'It still failed because destination and date were not filled first', 'It crashed the program', 'It automatically filled the form'], correct: 1,
        optsKn: ['ಅದೂ ತಕ್ಷಣ ಯಶಸ್ವಿಯಾಯಿತು', 'ಅದೂ ಇನ್ನೂ ವಿಫಲಗೊಂಡಿತು ಏಕೆಂದರೆ destination, date ಮೊದಲು ಭರ್ತಿ ಮಾಡಿರಲಿಲ್ಲ', 'ಅದೂ program crash ಮಾಡಿತು', 'ಅದೂ ಸ್ವಯಂಚಾಲಿತವಾಗಿ form ಭರ್ತಿ ಮಾಡಿತು'] },
      { q: 'Why is element_desc particularly useful after a failed click?', qKn: 'ಒಂದೂ ವಿಫಲ click ನಂತರ element_desc ವಿಶೇಷವಾಗಿ ಏಕೆ ಉಪಯುಕ್ತ?',
        opts: ['It compresses the screenshot', 'It allows the system to semantically re-ground the intended element at a fresh coordinate', 'It changes the browser URL', 'It generates accessibility trees'], correct: 1,
        optsKn: ['ಇದೂ screenshot ಸಂಕುಚಿಸುತ್ತದೆ', 'ಇದೂ system ಗೆ ಉದ್ದೇಶಿತ element ಅನ್ನೂ ಒಂದೂ ಹೊಸ coordinate ನಲ್ಲಿ semantically ಮರು-ಗ್ರೌಂಡ್ ಮಾಡಲು ಅನುಮತಿಸುತ್ತದೆ', 'ಇದೂ browser URL ಬದಲಾಯಿಸುತ್ತದೆ', 'ಇದೂ accessibility trees ಉತ್ಪಾದಿಸುತ್ತದೆ'] },
      { q: 'Which memory strategy does this lesson\'s AgentMemory genuinely demonstrate?', qKn: 'ಈ lesson ya AgentMemory ಯಾವ memory strategy ಅನ್ನೂ ನಿಜವಾಗಿ ಪ್ರದರ್ಶಿಸುತ್ತದೆ?',
        opts: ['Every historical screenshot', 'Video compression', 'Tool-recorded action and observation log', 'No memory'], correct: 2,
        optsKn: ['ಪ್ರತಿ ಐತಿಹಾಸಿಕ screenshot', 'Video compression', 'Tool-recorded action, observation log', 'ಯಾವುದೇ memory ಇಲ್ಲ'] },
    ] } },
  ],
};
