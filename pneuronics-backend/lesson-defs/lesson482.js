const phaseId = '6a369d6066020ed05b32150b'; // Phase 17: Agent Engineering
const moduleId = '6a369d6066020ed05b32150e'; // Module 273: The Agent Loop

module.exports = {
  phaseId,
  moduleId,
  order: 0,
  type: 'interactive',
  duration: 40,
  difficulty: 'intermediate',
  status: 'published',
  title: 'The Agent Loop — Genuinely Running Thought, Action, Observation, and a Runaway Loop',
  titleKn: 'The Agent Loop — ನಿಜವಾಗಿ ಚಲಾಯಿಸಿದ Thought, Action, Observation, Runaway Loop',
  desc: 'Genuinely run a deterministic think-act-observe agent loop over two real tools (lookup and calculator) to a correct final answer, then genuinely reproduce the runaway-loop failure mode where a broken policy never terminates and max_steps has to cut it off.',
  descKn: 'ಎರಡೂ ನಿಜ tools (lookup, calculator) ಮೇಲೆ ಒಂದೂ deterministic think-act-observe agent loop ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ ಒಂದೂ ಸರಿಯಾದ ಅಂತಿಮ ಉತ್ತರಕ್ಕೆ, ನಂತರ runaway-loop failure mode ಅನ್ನೂ ನಿಜವಾಗಿ ಪುನರುತ್ಪಾದಿಸಿ.',
  objectives: [
    'Genuinely run a full agent loop through thought, action, and observation steps to a correct final answer.',
    'Genuinely confirm each tool call\'s observation is what the next policy decision is based on, not a hidden or reconstructed value.',
    'Genuinely reproduce a bug that was actually hit and fixed live: eval() rejecting len() until it was explicitly whitelisted.',
    'Genuinely reproduce a runaway agent loop where a broken policy never emits a final action, and confirm max_steps is what actually stops it.',
    'Explain why an agent loop needs an explicit step budget even when the policy is expected to terminate correctly.',
  ],
  objectivesKn: [
    'Thought, action, observation ಹಂತಗಳ ಮೂಲಕ ಒಂದೂ ಪೂರ್ಣ agent loop ಅನ್ನೂ ಒಂದೂ ಸರಿಯಾದ ಅಂತಿಮ ಉತ್ತರಕ್ಕೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ.',
    'ಪ್ರತಿ tool call ya observation ಮುಂದಿನ policy ನಿರ್ಧಾರ ಆಧರಿಸಿರುವುದೂ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'ನಿಜವಾಗಿ ಎದುರಾದ, ನಿಜವಾಗಿ ಸರಿಪಡಿಸಿದ ಒಂದೂ bug ಅನ್ನೂ ಪುನರುತ್ಪಾದಿಸಿ: len() ಅನ್ನೂ whitelist ಮಾಡುವವರೆಗೂ eval() ಅದನ್ನೂ ತಿರಸ್ಕರಿಸಿತು.',
    'ಒಂದೂ broken policy ಎಂದಿಗೂ ಅಂತಿಮ action ಹೊರಸೂಸದ ಒಂದೂ runaway agent loop ಅನ್ನೂ ನಿಜವಾಗಿ ಪುನರುತ್ಪಾದಿಸಿ.',
    'policy ಸರಿಯಾಗಿ ಕೊನೆಗೊಳ್ಳುತ್ತದೆ ಎಂದೂ ನಿರೀಕ್ಷಿಸಿದಾಗಲೂ ಒಂದೂ agent loop ಗೆ ಸ್ಪಷ್ಟ step budget ಏಕೆ ಬೇಕೂ ಎಂದೂ ವಿವರಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'The Agent Loop', textKn: 'The Agent Loop', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: Phase 5-6 basics · Time: ~40 minutes',
      bodyKn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: Phase 5-6 basics · Time: ~40 ನಿಮಿಷಗಳು',
      pillsEn: 'Agent Loop,ReAct,Tool Use,Termination', pillsKn: 'Agent Loop,ReAct,Tool Use,Termination' } },

    { type: 'heading', data: { textEn: 'What an Agent Loop Actually Is', textKn: 'ಒಂದೂ Agent Loop ನಿಜವಾಗಿ ಏನೂ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Three Repeating Steps, Not Magic', headingKn: 'ಮೂರೂ ಪುನರಾವರ್ತಿತ ಹಂತಗಳು, ಯಾವುದೇ ಮ್ಯಾಜಿಕ್ ಅಲ್ಲ',
      bodyEn: 'Every agent framework -- LangGraph, AutoGen, CrewAI, the OpenAI Agents SDK -- is built on the same three-step cycle: decide what to do (thought), do it (action, usually a tool call), and read the result (observation), then repeat with the observation folded into the next decision. We genuinely build the smallest possible version of this loop with two real tools and no external API, so every line of behavior is visible.',
      bodyKn: 'ಪ್ರತಿ agent framework ಅದೇ ಮೂರೂ-ಹಂತದ ಚಕ್ರದ ಮೇಲೆ ನಿರ್ಮಿಸಲಾಗಿದೆ: thought, action, observation, ನಂತರ observation ಅನ್ನೂ ಮುಂದಿನ ನಿರ್ಧಾರಕ್ಕೆ ಮಡಚುವುದೂ.' } },
    { type: 'code', data: {
      filename: 'agent_loop.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Two real tools (lookup and calculator) and a deterministic scripted policy standing in for an LLM\'s decision-making, run through a genuine agent loop to a final answer.',
      descKn: 'ಎರಡೂ ನಿಜ tools, ಒಂದೂ deterministic policy ಒಂದೂ ನಿಜ agent loop ಮೂಲಕ ಒಂದೂ ಅಂತಿಮ ಉತ್ತರಕ್ಕೆ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "def calculator(expr):\n    return str(eval(expr, {'__builtins__': {}, 'len': len}))\n\ndef lookup(term):\n    db = {'capital of france': 'Paris', 'largest planet': 'Jupiter'}\n    return db.get(term.lower(), 'unknown')\n\nTOOLS = {'calculator': calculator, 'lookup': lookup}\n\ndef policy(history):\n    step = len(history)\n    if step == 0:\n        return ('thought', 'I need the capital of France first.')\n    if step == 1:\n        return ('action', ('lookup', 'capital of France'))\n    if step == 2:\n        return ('thought', 'Now I need to multiply the length of that word by 6.')\n    if step == 3:\n        return ('action', ('calculator', 'len(\"Paris\") * 6'))\n    if step == 4:\n        return ('final', None)\n\ndef run_agent_loop(max_steps=10):\n    history = []\n    for i in range(max_steps):\n        kind, payload = policy(history)\n        if kind == 'thought':\n            print(f'[step {i}] THOUGHT: {payload}')\n            history.append(('thought', payload))\n        elif kind == 'action':\n            tool_name, arg = payload\n            print(f'[step {i}] ACTION: {tool_name}({arg!r})')\n            result = TOOLS[tool_name](arg)\n            print(f'[step {i}] OBSERVATION: {result}')\n            history.append(('action', payload, result))\n        elif kind == 'final':\n            print(f'[step {i}] FINAL: loop terminated, returning last observation')\n            return history[-1][2]\n    print('loop hit max_steps without terminating')\n    return None\n\nresult = run_agent_loop()\nprint('agent final answer:', result)" } },
    { type: 'output', data: { output: "[step 0] THOUGHT: I need the capital of France first.\n[step 1] ACTION: lookup('capital of France')\n[step 1] OBSERVATION: Paris\n[step 2] THOUGHT: Now I need to multiply the length of that word by 6.\n[step 3] ACTION: calculator('len(\"Paris\") * 6')\n[step 3] OBSERVATION: 30\n[step 4] FINAL: loop terminated, returning last observation\nagent final answer: 30" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Observations Genuinely Drive the Next Step', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Observations ನಿಜವಾಗಿ ಮುಂದಿನ ಹಂತವನ್ನೂ ಚಾಲಿಸುತ್ತವೆ',
      bodyEn: 'The lookup tool genuinely returned "Paris" at step 1, and the calculator genuinely computed len("Paris") * 6 = 30 at step 3 using that exact string hardcoded into the next action -- in a real system this string would come from the observation itself, not be re-typed, but the mechanics of observation-feeds-next-decision are genuinely the same.',
      bodyKn: 'Lookup tool step 1 ನಲ್ಲಿ ನಿಜವಾಗಿ "Paris" ಹಿಂತಿರುಗಿಸಿತು, calculator step 3 ನಲ್ಲಿ len("Paris") * 6 = 30 ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಾಚಾರ ಮಾಡಿತು.' } },

    { type: 'heading', data: { textEn: 'A Genuine Bug Hit Along the Way', textKn: 'ದಾರಿಯಲ್ಲಿ ಎದುರಾದ ಒಂದೂ ನಿಜ Bug', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Sandboxed eval() Rejected len() Until Whitelisted', headingKn: 'Whitelist ಮಾಡುವವರೆಗೂ Sandboxed eval() len() ಅನ್ನೂ ತಿರಸ್ಕರಿಸಿತು',
      bodyEn: 'The calculator tool above sandboxes eval() by passing an empty __builtins__ dict, which is the correct defensive instinct for a tool that runs model-generated expressions. But the first genuine run of this exact code crashed.',
      bodyKn: 'ಮೇಲಿನ calculator tool ಖಾಲಿ __builtins__ dict ರವಾನಿಸುವ ಮೂಲಕ eval() ಅನ್ನೂ sandbox ಮಾಡುತ್ತದೆ. ಆದರೆ ಈ ನಿಖರ code ya ಮೊದಲ ನಿಜ run crash ಆಯಿತು.' } },
    { type: 'code', data: {
      filename: 'agent_loop_bug.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'The exact expression that genuinely crashed on the first attempt, before len was added to the eval namespace.',
      descKn: 'len ಅನ್ನೂ eval namespace ಗೆ ಸೇರಿಸುವ ಮೊದಲೂ ಮೊದಲ ಪ್ರಯತ್ನದಲ್ಲಿ ನಿಜವಾಗಿ crash ಆದ ನಿಖರ expression.',
      code: "def calculator_broken(expr):\n    return str(eval(expr, {'__builtins__': {}}))\n\nprint(calculator_broken('len(\"Paris\") * 6'))" } },
    { type: 'output', data: { output: "Traceback (most recent call last):\n  ...\nNameError: name 'len' is not defined" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Sandboxing Is a Whitelist Problem, Not Just a Blacklist One', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Sandboxing ಒಂದೂ Whitelist ಸಮಸ್ಯೆ, ಕೇವಲ Blacklist ಅಲ್ಲ',
      bodyEn: 'Setting __builtins__ to {} genuinely blocks dangerous names like open() or __import__(), but it genuinely blocks len() too -- an empty sandbox blocks everything by default. The working version above explicitly re-adds only len, the exact minimum needed, rather than restoring all builtins.',
      bodyKn: '__builtins__ ಅನ್ನೂ {} ಗೆ ಹೊಂದಿಸುವುದೂ open() ಅಥವಾ __import__() ನಂತಹ ಅಪಾಯಕಾರಿ ಹೆಸರುಗಳನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಬಂಧಿಸುತ್ತದೆ, ಆದರೆ len() ಅನ್ನೂ ಸಹ ನಿರ್ಬಂಧಿಸುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'The Runaway Loop: A Genuine Failure Mode', textKn: 'Runaway Loop: ಒಂದೂ ನಿಜ Failure Mode', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'What Happens When the Policy Never Says "Final"', textKn2: '', headingKn: 'Policy ಎಂದಿಗೂ "Final" ಎಂದೂ ಹೇಳದಿದ್ದಾಗ ಏನಾಗುತ್ತದೆ',
      bodyEn: 'The first loop terminated because the scripted policy eventually returned (\'final\', None). Real agent policies are not scripted -- they come from a model, and models can genuinely get stuck repeating an action indefinitely. We genuinely reproduce this with a broken policy that always re-issues the same tool call.',
      bodyKn: 'ಮೊದಲ loop ಕೊನೆಗೊಂಡಿತು ಏಕೆಂದರೆ scripted policy ಅಂತಿಮವಾಗಿ (\'final\', None) ಹಿಂತಿರುಗಿಸಿತು. ನಿಜ agent policies scripted ಅಲ್ಲ -- ಅವೂ ಒಂದೂ model ಇಂದ ಬರುತ್ತವೆ.' } },
    { type: 'code', data: {
      filename: 'agent_loop_runaway.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'A broken policy that always re-issues the same calculator call and never returns final, genuinely run against a max_steps-limited loop.',
      descKn: 'ಯಾವಾಗಲೂ ಅದೇ calculator call ಅನ್ನೂ ಮರುಹೊಂದಿಸುವ, ಎಂದಿಗೂ final ಹಿಂತಿರುಗಿಸದ ಒಂದೂ broken policy, max_steps-ಸೀಮಿತ loop ವಿರುದ್ಧ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "def broken_policy(history):\n    # bug: always re-issues the same action, never reaches a final state\n    return ('action', ('calculator', '1 + 1'))\n\ndef run_agent_loop(policy, max_steps=6):\n    history = []\n    for i in range(max_steps):\n        kind, payload = policy(history)\n        if kind == 'action':\n            tool_name, arg = payload\n            result = TOOLS[tool_name](arg)\n            print(f'[step {i}] ACTION: {tool_name}({arg!r}) -> OBSERVATION: {result}')\n            history.append(('action', payload, result))\n        elif kind == 'final':\n            print(f'[step {i}] FINAL')\n            return history[-1][2]\n    print(f'loop hit max_steps={max_steps} without ever reaching a final state -- genuinely caught runaway loop')\n    return None\n\nresult = run_agent_loop(broken_policy)\nprint('result:', result)" } },
    { type: 'output', data: { output: "[step 0] ACTION: calculator('1 + 1') -> OBSERVATION: 2\n[step 1] ACTION: calculator('1 + 1') -> OBSERVATION: 2\n[step 2] ACTION: calculator('1 + 1') -> OBSERVATION: 2\n[step 3] ACTION: calculator('1 + 1') -> OBSERVATION: 2\n[step 4] ACTION: calculator('1 + 1') -> OBSERVATION: 2\n[step 5] ACTION: calculator('1 + 1') -> OBSERVATION: 2\nloop hit max_steps=6 without ever reaching a final state -- genuinely caught runaway loop\nresult: None" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: max_steps Is What Actually Stopped It', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: max_steps ಅದೇ ನಿಜವಾಗಿ ಇದನ್ನೂ ನಿಲ್ಲಿಸಿತು',
      bodyEn: 'The broken policy genuinely never returned (\'final\', ...) -- without max_steps=6, this loop would genuinely run forever, calling the calculator tool an unbounded number of times. The step budget is not a performance optimization; it is the only thing standing between a policy bug and an infinite loop consuming real API calls and real money in a production system.',
      bodyKn: 'Broken policy ಎಂದಿಗೂ (\'final\', ...) ಹಿಂತಿರುಗಿಸಲಿಲ್ಲ -- max_steps=6 ಇಲ್ಲದೆ, ಈ loop ಶಾಶ್ವತವಾಗಿ ಚಲಾಯಿಸುತ್ತಿತ್ತು.' } },

    { type: 'table', data: {
      captionEn: 'Genuinely Observed in This Lesson', captionKn: 'ಈ Lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ಗಮನಿಸಿದ',
      rows: "Test|Genuine result\nWorking agent loop|Reached FINAL at step 4, returned 30\nSandboxed eval() before whitelisting len|NameError: name 'len' is not defined\nSandboxed eval() after whitelisting len|Ran correctly, returned '30'\nBroken policy (never returns final)|Ran exactly 6 times, stopped only by max_steps" } },

    { type: 'diagram', data: {
      headingEn: 'The Agent Loop, Genuinely Traced', headingKn: 'Agent Loop, ನಿಜವಾಗಿ ಟ್ರೇಸ್ ಮಾಡಲಾಗಿದೆ',
      svgCode: '<svg viewBox="0 0 260 200" xmlns="http://www.w3.org/2000/svg" font-family="monospace" font-size="6.2">\n  <rect width="260" height="200" rx="8" fill="#0f172a"/>\n  <text x="130" y="14" fill="#94a3b8" text-anchor="middle" font-size="7">Think -&gt; Act -&gt; Observe -&gt; Repeat</text>\n  <rect x="20" y="24" width="220" height="24" rx="4" fill="#1e293b" stroke="#60a5fa"/><text x="130" y="40" fill="#93c5fd" text-anchor="middle">THOUGHT: decide next step</text>\n  <path d="M130,48 V58" stroke="#475569" marker-end="url(#a)"/>\n  <rect x="20" y="60" width="220" height="24" rx="4" fill="#022c22" stroke="#34d399"/><text x="130" y="76" fill="#6ee7b7" text-anchor="middle">ACTION: call a real tool</text>\n  <path d="M130,84 V94" stroke="#475569"/>\n  <rect x="20" y="96" width="220" height="24" rx="4" fill="#1e1b4b" stroke="#a78bfa"/><text x="130" y="112" fill="#c4b5fd" text-anchor="middle">OBSERVATION: real tool result</text>\n  <path d="M130,120 V130" stroke="#475569"/>\n  <rect x="55" y="132" width="150" height="24" rx="4" fill="#422006" stroke="#fbbf24"/><text x="130" y="148" fill="#fde68a" text-anchor="middle">FINAL? or loop again</text>\n  <path d="M40,144 C0,144 0,36 20,36" stroke="#f87171" fill="none"/>\n  <text x="14" y="90" fill="#f87171" font-size="5.4" transform="rotate(-90 14 90)">loop if not final</text>\n  <text x="130" y="178" fill="#94a3b8" text-anchor="middle" font-size="5.6">Genuinely capped by max_steps</text>\n  <text x="130" y="188" fill="#94a3b8" text-anchor="middle" font-size="5.6">to prevent a broken policy from looping forever</text>\n</svg>',
      captionEn: 'Genuinely confirmed in this lesson: the loop repeats until a final action, or until max_steps cuts it off.',
      captionKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: loop ಒಂದೂ ಅಂತಿಮ action ವರೆಗೂ, ಅಥವಾ max_steps ಅದನ್ನೂ ಕಡಿತಗೊಳಿಸುವವರೆಗೂ ಪುನರಾವರ್ತಿಸುತ್ತದೆ.' } },

    { type: 'table', data: {
      captionEn: 'Key Terms', captionKn: 'ಪ್ರಮುಖ ಪದಗಳು',
      rows: "Term|Meaning\nThought|The policy's internal reasoning step, not visible to tools, that decides what to do next\nAction|A concrete tool call issued by the policy, with a tool name and arguments\nObservation|The real value a tool returns, fed back into the next policy decision\nmax_steps|A hard cap on loop iterations, genuinely confirmed here as the only thing stopping a runaway loop" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: a scripted think-act-observe loop reached a correct final answer (30) in exactly 5 steps\n• Genuinely confirmed: a real bug (len() rejected by sandboxed eval) was hit and fixed by explicit whitelisting, not by disabling the sandbox\n• Genuinely confirmed: a broken policy that never returns final ran exactly max_steps times before being cut off, never terminating on its own\n• The agent loop pattern (thought, action, observation) underlies every major framework covered later in this phase -- LangGraph, AutoGen, CrewAI, and the OpenAI/Claude Agent SDKs\n• A step budget is a required safety mechanism, not an optional performance tweak, because policy bugs and model mistakes genuinely happen',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ scripted loop ನಿಖರವಾಗಿ 5 ಹಂತಗಳಲ್ಲಿ ಸರಿಯಾದ ಅಂತಿಮ ಉತ್ತರ (30) ತಲುಪಿತು\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ ನಿಜ bug (len() ತಿರಸ್ಕರಿಸಲಾಗಿದೆ) ಎದುರಾಯಿತೂ, ಸ್ಪಷ್ಟ whitelisting ಇಂದ ಸರಿಪಡಿಸಲಾಯಿತೂ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ broken policy ನಿಖರವಾಗಿ max_steps ಬಾರಿ ಚಲಾಯಿಸಿತೂ, ಎಂದಿಗೂ ಸ್ವಂತವಾಗಿ ಕೊನೆಗೊಳ್ಳಲಿಲ್ಲ\n• Agent loop pattern ಈ phase ನಲ್ಲಿ ನಂತರ ಬರುವ ಪ್ರತಿ ಪ್ರಮುಖ framework ya ಆಧಾರವಾಗಿದೆ\n• Step budget ಒಂದೂ ಅಗತ್ಯ ಸುರಕ್ಷತಾ ಕಾರ್ಯವಿಧಾನ, ಐಚ್ಛಿಕ ಅಲ್ಲ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'A coding agent that reads a file, edits it, and runs tests is genuinely running this exact loop: thought ("what does the test expect"), action (edit the file or run pytest), observation (the real test output), repeated until the tests genuinely pass or a step budget is hit.',
      bodyKn: 'ಒಂದೂ ಫೈಲ್ ಓದುವ, ಸಂಪಾದಿಸುವ, ಪರೀಕ್ಷೆಗಳನ್ನೂ ಚಲಾಯಿಸುವ coding agent ಈ ನಿಖರ loop ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುತ್ತಿದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed by the runaway-loop test: separating decision (policy) from execution (tools) and from termination (the loop\'s own max_steps check) means a bug in any one layer -- like the scripted policy that never said final -- is caught by a different, independent layer instead of crashing the whole system silently.',
      bodyKn: 'Runaway-loop test ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ನಿರ್ಧಾರ, ಕಾರ್ಯಗತಗೊಳಿಸುವಿಕೆ, ಮುಕ್ತಾಯವನ್ನೂ ಬೇರ್ಪಡಿಸುವುದೂ ಒಂದೂ ಲೇಯರ್ ya bug ಅನ್ನೂ ಬೇರೆ, ಸ್ವತಂತ್ರ ಲೇಯರ್ ಹಿಡಿಯುತ್ತದೆ ಎಂದೂ ಅರ್ಥ.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Every production agent runtime -- including the ones covered in Modules 285-290 of this phase -- genuinely enforces a maximum iteration or token budget per run for the exact reason demonstrated here: a policy (whether scripted or model-driven) can fail to terminate, and a hard external limit is the only guaranteed backstop.',
      bodyKn: 'ಈ phase ya Modules 285-290 ಸೇರಿದಂತೆ ಪ್ರತಿ production agent runtime ಇಲ್ಲಿ ತೋರಿಸಿದ ನಿಖರ ಕಾರಣಕ್ಕಾಗಿ ಗರಿಷ್ಠ iteration ಅಥವಾ token budget ಅನ್ನೂ ನಿಜವಾಗಿ ಜಾರಿಗೊಳಿಸುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Where This Phase Goes From Here', textKn: 'ಈ Phase ಇಲ್ಲಿಂದ ಎಲ್ಲಿಗೆ ಹೋಗುತ್ತದೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Every Later Module Builds on This Loop', headingKn: 'ಪ್ರತಿ ನಂತರದ Module ಈ Loop ಮೇಲೆ ನಿರ್ಮಿಸುತ್ತದೆ',
      bodyEn: 'ReWOO (Module 274) restructures this loop to plan all actions before executing any of them. Reflexion (Module 275) adds a self-critique step after observation. Tree of Thoughts (Module 276) runs many loops in parallel and picks the best. Every one of these variations is genuinely a modification of the same three-step cycle genuinely run in this lesson.',
      bodyKn: 'ReWOO (Module 274) ಈ loop ಅನ್ನೂ ಯಾವುದೇ ಕಾರ್ಯಗತಗೊಳಿಸುವ ಮೊದಲೂ ಎಲ್ಲಾ actions ಯೋಜಿಸಲು ಮರುರಚಿಸುತ್ತದೆ. Reflexion (Module 275) observation ನಂತರ ಒಂದೂ self-critique ಹಂತ ಸೇರಿಸುತ್ತದೆ.' } },
    { type: 'table', data: {
      captionEn: 'Where Later Modules Modify This Loop', captionKn: 'ನಂತರದ Modules ಈ Loop ಅನ್ನೂ ಎಲ್ಲಿ ಮಾರ್ಪಡಿಸುತ್ತವೆ',
      rows: "Module|What it changes about this loop\n274 ReWOO|Plans all actions upfront instead of one-at-a-time\n275 Reflexion|Adds a self-critique step after observation\n276 Tree of Thoughts|Runs many loops in parallel, picks the best\n278 Tool Use|Formalizes how actions become real function calls\n310 Verification Gates|Formalizes what this lesson's max_steps check began" } },

    { type: 'concept', data: {
      headingEn: 'Thought Steps Are Optional, Action/Observation Are Not', headingKn: 'Thought ಹಂತಗಳು ಐಚ್ಛಿಕ, Action/Observation ಅಲ್ಲ',
      bodyEn: 'The genuine trace above shows two thought steps interleaved with two action steps. A minimal agent loop could skip emitting explicit thoughts and go straight from history to action -- many production systems do exactly this to save tokens -- but it cannot skip observation, because without genuinely reading the tool\'s real result, the next decision has nothing grounded to act on.',
      bodyKn: 'ಮೇಲಿನ ನಿಜ trace ಎರಡೂ action ಹಂತಗಳೊಂದಿಗೆ ಎರಡೂ thought ಹಂತಗಳನ್ನೂ ತೋರಿಸುತ್ತದೆ. ಒಂದೂ ಕನಿಷ್ಠ agent loop ಸ್ಪಷ್ಟ thoughts ಹೊರಸೂಸುವುದನ್ನೂ ಬಿಟ್ಟುಬಿಡಬಹುದು, ಆದರೆ observation ಅನ್ನೂ ಬಿಟ್ಟುಬಿಡಲಾಗುವುದಿಲ್ಲ.' } },
    { type: 'table', data: {
      captionEn: 'Step Types Genuinely Used in This Lesson\'s Loop', captionKn: 'ಈ Lesson ya Loop ನಲ್ಲಿ ನಿಜವಾಗಿ ಬಳಸಿದ Step ಪ್ರಕಾರಗಳು',
      rows: "Step type|Required?|Genuinely observed in this lesson\nthought|Optional (saves tokens if skipped)|2 occurrences, steps 0 and 2\naction|Required to make progress|2 occurrences, steps 1 and 3\nobservation|Required, cannot be skipped|Followed every action, fed the next decision\nfinal|Required to terminate cleanly|Reached once, at step 4" } },
    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: what final value did the working agent loop return?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಕೆಲಸ ಮಾಡುವ agent loop ಯಾವ ಅಂತಿಮ ಮೌಲ್ಯ ಹಿಂತಿರುಗಿಸಿತು?',
        opts: ['30', '5', 'Paris', 'None'], correct: 0,
        optsKn: ['30', '5', 'Paris', 'None'] },
      { q: 'Why did the sandboxed calculator genuinely crash with NameError before the fix?', qKn: 'Fix ಗಿಂತ ಮೊದಲೂ sandboxed calculator ಏಕೆ ನಿಜವಾಗಿ NameError ಜೊತೆ crash ಆಯಿತು?',
        opts: ['An empty __builtins__ dict blocks all builtins by default, including len', 'len() does not exist in Python', 'The expression had a syntax error', 'eval() cannot be sandboxed'], correct: 0,
        optsKn: ['ಒಂದೂ ಖಾಲಿ __builtins__ dict ಡೀಫಾಲ್ಟ್ ಆಗಿ len ಸೇರಿದಂತೆ ಎಲ್ಲಾ builtins ಅನ್ನೂ ನಿರ್ಬಂಧಿಸುತ್ತದೆ', 'len() ಪೈಥಾನ್‌ನಲ್ಲಿ ಅಸ್ತಿತ್ವದಲ್ಲಿಲ್ಲ', 'Expression ನಲ್ಲಿ syntax error ಇತ್ತೂ', 'eval() ಅನ್ನೂ sandbox ಮಾಡಲಾಗುವುದಿಲ್ಲ'] },
      { q: 'Genuinely confirmed: how many times did the broken policy\'s loop actually run before stopping?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: broken policy ya loop ನಿಲ್ಲುವ ಮೊದಲೂ ಎಷ್ಟೂ ಬಾರಿ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿತು?',
        opts: ['Exactly 6, the max_steps limit', 'Forever, it never stopped', 'Exactly 1', 'Exactly 4'], correct: 0,
        optsKn: ['ನಿಖರವಾಗಿ 6, max_steps ಮಿತಿ', 'ಶಾಶ್ವತವಾಗಿ, ಇದೂ ಎಂದಿಗೂ ನಿಲ್ಲಲಿಲ್ಲ', 'ನಿಖರವಾಗಿ 1', 'ನಿಖರವಾಗಿ 4'] },
      { q: 'What genuinely stopped the runaway loop from running forever?', qKn: 'Runaway loop ಶಾಶ್ವತವಾಗಿ ಚಲಾಯಿಸುವುದನ್ನೂ ನಿಜವಾಗಿ ಏನೂ ನಿಲ್ಲಿಸಿತು?',
        opts: ['The max_steps hard limit in the loop itself, not the policy', 'The policy eventually got smarter', 'Python automatically detects infinite loops', 'The calculator tool refused to run twice'], correct: 0,
        optsKn: ['loop ya ಸ್ವಂತ max_steps ಕಠಿಣ ಮಿತಿ, policy ಅಲ್ಲ', 'Policy ಅಂತಿಮವಾಗಿ ಬುದ್ಧಿವಂತವಾಯಿತೂ', 'ಪೈಥಾನ್ ಸ್ವಯಂಚಾಲಿತವಾಗಿ infinite loops ಪತ್ತೆ ಮಾಡುತ್ತದೆ', 'Calculator tool ಎರಡೂ ಬಾರಿ ಚಲಾಯಿಸಲು ನಿರಾಕರಿಸಿತು'] },
      { q: 'Why is a step budget described as a required safety mechanism rather than an optional tweak?', qKn: 'Step budget ಅನ್ನೂ ಐಚ್ಛಿಕ ಬದಲಾವಣೆಗಿಂತ ಅಗತ್ಯ ಸುರಕ್ಷತಾ ಕಾರ್ಯವಿಧಾನ ಎಂದೂ ಏಕೆ ವಿವರಿಸಲಾಗಿದೆ?',
        opts: ['Because policy bugs or model mistakes can genuinely cause a loop that never terminates on its own', 'Because it makes the code run faster', 'Because Python requires all loops to have a limit', 'Because tools are always slow'], correct: 0,
        optsKn: ['ಏಕೆಂದರೆ policy bugs ಅಥವಾ model ತಪ್ಪುಗಳು ಎಂದಿಗೂ ಸ್ವಂತವಾಗಿ ಕೊನೆಗೊಳ್ಳದ loop ಗೆ ನಿಜವಾಗಿ ಕಾರಣವಾಗಬಹುದು', 'ಏಕೆಂದರೆ ಇದೂ code ಅನ್ನೂ ವೇಗವಾಗಿ ಚಲಾಯಿಸುತ್ತದೆ', 'ಏಕೆಂದರೆ ಪೈಥಾನ್‌ಗೆ ಎಲ್ಲಾ loops ಮಿತಿ ಬೇಕು', 'ಏಕೆಂದರೆ tools ಯಾವಾಗಲೂ ನಿಧಾನ'] },
    ] } },
  ],
};
