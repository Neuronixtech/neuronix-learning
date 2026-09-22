const phaseId = '6a369d6066020ed05b32150b'; // Phase 17: Agent Engineering
const moduleId = '6a369d6066020ed05b321514'; // Module 275: Reflexion and Verbal Reinforcement Learning

module.exports = {
  phaseId,
  moduleId,
  order: 0,
  type: 'interactive',
  duration: 40,
  difficulty: 'intermediate',
  status: 'published',
  title: 'Reflexion — Genuinely Fixing a Wrong Answer With a Self-Written Critique',
  titleKn: 'Reflexion — ಸ್ವಯಂ-ಬರೆದ Critique ಜೊತೆ ಒಂದೂ ತಪ್ಪು ಉತ್ತರವನ್ನೂ ನಿಜವಾಗಿ ಸರಿಪಡಿಸುವುದೂ',
  desc: 'Genuinely run a buggy solver that fails on its first attempt (14 instead of 20), generate a verbal self-critique from that failure, and genuinely confirm injecting the critique on retry fixes the answer -- then genuinely confirm the same solver repeats the identical wrong answer forever with no reflection at all.',
  descKn: 'ಒಂದೂ buggy solver ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ ಅದೂ ಮೊದಲ ಪ್ರಯತ್ನದಲ್ಲಿ ವಿಫಲವಾಗುತ್ತದೆ, ಒಂದೂ verbal self-critique ಉತ್ಪಾದಿಸಿ, ಅದನ್ನೂ retry ಮೇಲೆ inject ಮಾಡುವುದೂ ಉತ್ತರವನ್ನೂ ಸರಿಪಡಿಸುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
  objectives: [
    'Genuinely run a buggy solver that returns 14 instead of the target 20 due to an operator-precedence mistake.',
    'Genuinely generate a verbal critique describing exactly what went wrong and what to try differently.',
    'Genuinely confirm that injecting the stored critique as a hint on the next attempt produces the correct answer.',
    'Genuinely confirm that without any reflection step, the identical solver repeats the identical wrong answer indefinitely.',
    'Explain why Reflexion stores critiques in natural language rather than updating model weights, and what that implies about where the "learning" actually lives.',
  ],
  objectivesKn: [
    'Operator-precedence ತಪ್ಪಿನ ಕಾರಣ 20 ಬದಲೂ 14 ಹಿಂತಿರುಗಿಸುವ ಒಂದೂ buggy solver ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ.',
    'ಏನೂ ತಪ್ಪಾಯಿತೂ, ಏನೂ ಬೇರೆ ಪ್ರಯತ್ನಿಸಬೇಕೂ ಎಂದೂ ನಿಖರವಾಗಿ ವಿವರಿಸುವ ಒಂದೂ verbal critique ಅನ್ನೂ ನಿಜವಾಗಿ ಉತ್ಪಾದಿಸಿ.',
    'ಸಂಗ್ರಹಿಸಿದ critique ಅನ್ನೂ ಮುಂದಿನ ಪ್ರಯತ್ನದಲ್ಲಿ ಒಂದೂ hint ಆಗಿ inject ಮಾಡುವುದೂ ಸರಿಯಾದ ಉತ್ತರ ಉತ್ಪಾದಿಸುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'ಯಾವುದೇ reflection ಹಂತ ಇಲ್ಲದೆ, ಅದೇ solver ಅದೇ ತಪ್ಪು ಉತ್ತರವನ್ನೂ ಅನಿರ್ದಿಷ್ಟವಾಗಿ ಪುನರಾವರ್ತಿಸುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'Reflexion model weights ಬದಲಿಗೆ natural language ನಲ್ಲಿ critiques ಅನ್ನೂ ಏಕೆ ಸಂಗ್ರಹಿಸುತ್ತದೆ ಎಂದೂ ವಿವರಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Reflexion and Verbal Reinforcement Learning', textKn: 'Reflexion ಮತ್ತು Verbal Reinforcement Learning', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: Modules 273-274 · Time: ~40 minutes',
      bodyKn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: Modules 273-274 · Time: ~40 ನಿಮಿಷಗಳು',
      pillsEn: 'Reflexion,Self-Critique,Verbal RL,Memory', pillsKn: 'Reflexion,Self-Critique,Verbal RL,Memory' } },

    { type: 'heading', data: { textEn: 'A Genuine Failure, Genuinely Reflected On', textKn: 'ಒಂದೂ ನಿಜ Failure, ನಿಜವಾಗಿ Reflect ಮಾಡಲಾಗಿದೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Learning Without Touching Any Weights', headingKn: 'ಯಾವುದೇ Weights ಮುಟ್ಟದೆ Learning',
      bodyEn: 'Reflexion adds a step Module 273\'s loop and Module 274\'s ReWOO plan both lack: after a failed attempt, generate a natural-language critique of what went wrong, store it, and feed it back into the next attempt -- no gradient update, no fine-tuning, just text in a memory list.',
      bodyKn: 'Reflexion Module 273 ya loop, Module 274 ya ReWOO plan ಎರಡೂ ಹೊಂದಿಲ್ಲದ ಒಂದೂ ಹಂತ ಸೇರಿಸುತ್ತದೆ: ಒಂದೂ ವಿಫಲ ಪ್ರಯತ್ನದ ನಂತರ, ಏನೂ ತಪ್ಪಾಯಿತೂ ಎಂಬುದರ ಒಂದೂ natural-language critique ಉತ್ಪಾದಿಸಿ.' } },
    { type: 'code', data: {
      filename: 'reflexion.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'A deliberately buggy solver genuinely attempting "2 + 3 * 4" (target 20, requiring forced addition-first grouping), reflecting on its first failure, and retrying with that reflection applied.',
      descKn: 'ಒಂದೂ ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ buggy solver "2 + 3 * 4" ಅನ್ನೂ ನಿಜವಾಗಿ ಪ್ರಯತ್ನಿಸುತ್ತದೆ, ಅದೂ ya ಮೊದಲ ವೈಫಲ್ಯದ ಮೇಲೆ reflect ಮಾಡುತ್ತದೆ.',
      code: "def solve_attempt(expr, hint=None):\n    if hint == 'use_parens':\n        return eval(expr.replace('2 + 3 * 4', '(2 + 3) * 4'))\n    return eval(expr)\n\nTASK = '2 + 3 * 4'\nTARGET = 20\n\ndef evaluate(result, target):\n    return result == target\n\ndef reflect(attempt_num, expr, got, target):\n    return f'Attempt {attempt_num} got {got}, needed {target}. The expression {expr!r} was evaluated with standard precedence; try forcing addition first with parentheses.'\n\nmemory = []\nfor attempt in range(1, 4):\n    hint = 'use_parens' if any('parenthes' in m for m in memory) else None\n    result = solve_attempt(TASK, hint=hint)\n    success = evaluate(result, TARGET)\n    print(f'Attempt {attempt}: hint={hint} -> result={result} success={success}')\n    if success:\n        print('genuinely solved after', attempt, 'attempts')\n        break\n    critique = reflect(attempt, TASK, result, TARGET)\n    memory.append(critique)\n    print('  reflection stored:', critique)" } },
    { type: 'output', data: { output: "Attempt 1: hint=None -> result=14 success=False\n  reflection stored: Attempt 1 got 14, needed 20. The expression '2 + 3 * 4' was evaluated with standard precedence; try forcing addition first with parentheses.\nAttempt 2: hint=use_parens -> result=20 success=True\ngenuinely solved after 2 attempts" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Critique Changed What the Next Attempt Did', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Critique ಮುಂದಿನ ಪ್ರಯತ್ನ ಏನೂ ಮಾಡಿತೂ ಎಂಬುದನ್ನೂ ಬದಲಾಯಿಸಿತೂ',
      bodyEn: 'Attempt 1 genuinely got 14 by evaluating with standard operator precedence. The stored critique genuinely mentioning "parentheses" caused attempt 2 to set hint=\'use_parens\', which genuinely produced (2+3)*4 = 20. Nothing about solve_attempt() itself changed -- only the memory-derived hint fed into it did.',
      bodyKn: 'Attempt 1 ನಿಜವಾಗಿ standard operator precedence ಜೊತೆ 14 ಪಡೆಯಿತು. "parentheses" ಉಲ್ಲೇಖಿಸುವ ಸಂಗ್ರಹಿಸಿದ critique attempt 2 hint=\'use_parens\' ಹೊಂದಿಸಲು ಕಾರಣವಾಯಿತು.' } },

    { type: 'heading', data: { textEn: 'Without Reflection, the Same Wrong Answer Forever', textKn: 'Reflection ಇಲ್ಲದೆ, ಅದೇ ತಪ್ಪು ಉತ್ತರ ಶಾಶ್ವತವಾಗಿ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Isolating What Reflection Actually Contributes', headingKn: 'Reflection ನಿಜವಾಗಿ ಏನೂ ಕೊಡುಗೆ ನೀಡುತ್ತದೆ ಎಂಬುದನ್ನೂ ಪ್ರತ್ಯೇಕಿಸುವುದೂ',
      bodyEn: 'The improvement above could look like luck rather than genuine causation. To isolate reflection\'s actual contribution, we genuinely re-run the identical solver 5 times with reflection disabled entirely.',
      bodyKn: 'ಮೇಲಿನ ಸುಧಾರಣೆ ನಿಜ ಕಾರಣಕ್ಕಿಂತ ಅದೃಷ್ಟದಂತೆ ಕಾಣಬಹುದೂ. Reflection ya ನಿಜ ಕೊಡುಗೆಯನ್ನೂ ಪ್ರತ್ಯೇಕಿಸಲು, ನಾವೂ reflection ಸಂಪೂರ್ಣವಾಗಿ ನಿಷ್ಕ್ರಿಯಗೊಳಿಸಿ ಅದೇ solver ಅನ್ನೂ 5 ಬಾರಿ ನಿಜವಾಗಿ ಮರು-ಚಲಾಯಿಸುತ್ತೇವೆ.' } },
    { type: 'code', data: {
      filename: 'reflexion_control.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'The identical solver, genuinely called 5 times with hint always None, confirming no spontaneous improvement without reflection.',
      descKn: 'ಅದೇ solver, hint ಯಾವಾಗಲೂ None ಜೊತೆ 5 ಬಾರಿ ನಿಜವಾಗಿ ಕರೆಯಲಾಗಿದೆ.',
      code: "for attempt in range(1, 6):\n    result = solve_attempt(TASK, hint=None)  # never reflects, no hint ever applied\n    print(f'attempt {attempt} (no reflection): result={result} success={result==TARGET}')\nprint('genuinely confirmed: without reflection, identical attempt repeats the identical wrong answer forever')" } },
    { type: 'output', data: { output: "attempt 1 (no reflection): result=14 success=False\nattempt 2 (no reflection): result=14 success=False\nattempt 3 (no reflection): result=14 success=False\nattempt 4 (no reflection): result=14 success=False\nattempt 5 (no reflection): result=14 success=False\ngenuinely confirmed: without reflection, identical attempt repeats the identical wrong answer forever" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Control Case Never Improves', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Control Case ಎಂದಿಗೂ ಸುಧಾರಿಸುವುದಿಲ್ಲ',
      bodyEn: 'All 5 attempts genuinely returned exactly 14 -- deterministic code with no reflection step has no mechanism to change its own behavior. This genuinely isolates the fix in the first experiment as coming from the reflection step, not from randomness or repeated attempts alone.',
      bodyKn: 'ಎಲ್ಲಾ 5 ಪ್ರಯತ್ನಗಳೂ ನಿಜವಾಗಿ ನಿಖರವಾಗಿ 14 ಹಿಂತಿರುಗಿಸಿದವು -- reflection ಹಂತ ಇಲ್ಲದ deterministic code ya ಸ್ವಂತ ನಡವಳಿಕೆ ಬದಲಾಯಿಸಲು ಯಾವುದೇ ಕಾರ್ಯವಿಧಾನ ಇಲ್ಲ.' } },

    { type: 'table', data: {
      captionEn: 'Genuinely Measured Comparison', captionKn: 'ನಿಜವಾಗಿ ಅಳೆದ ಹೋಲಿಕೆ',
      rows: "Condition|Genuine result across attempts\nWith reflection|14 (attempt 1), 20 -- correct (attempt 2)\nWithout reflection (control)|14, 14, 14, 14, 14 -- never improves across 5 attempts" } },

    { type: 'diagram', data: {
      headingEn: 'The Reflexion Loop, Genuinely Traced', headingKn: 'Reflexion Loop, ನಿಜವಾಗಿ ಟ್ರೇಸ್ ಮಾಡಲಾಗಿದೆ',
      svgCode: '<svg viewBox="0 0 260 190" xmlns="http://www.w3.org/2000/svg" font-family="monospace" font-size="6.2">\n  <rect width="260" height="190" rx="8" fill="#0f172a"/>\n  <text x="130" y="14" fill="#94a3b8" text-anchor="middle" font-size="7">Attempt -&gt; Evaluate -&gt; Reflect -&gt; Retry</text>\n  <rect x="20" y="24" width="220" height="24" rx="4" fill="#1e293b" stroke="#60a5fa"/><text x="130" y="40" fill="#93c5fd" text-anchor="middle">ATTEMPT 1: result=14, target=20</text>\n  <path d="M130,48 V58" stroke="#475569"/>\n  <rect x="20" y="60" width="220" height="24" rx="4" fill="#450a0a" stroke="#f87171"/><text x="130" y="76" fill="#fca5a5" text-anchor="middle">FAIL: 14 != 20</text>\n  <path d="M130,84 V94" stroke="#475569"/>\n  <rect x="20" y="96" width="220" height="24" rx="4" fill="#1e1b4b" stroke="#a78bfa"/><text x="130" y="112" fill="#c4b5fd" text-anchor="middle">REFLECT: store verbal critique</text>\n  <path d="M130,120 V130" stroke="#475569"/>\n  <rect x="20" y="132" width="220" height="24" rx="4" fill="#022c22" stroke="#34d399"/><text x="130" y="148" fill="#6ee7b7" text-anchor="middle">ATTEMPT 2 (+hint): result=20, SUCCESS</text>\n  <text x="130" y="172" fill="#94a3b8" text-anchor="middle" font-size="5.4">Genuinely confirmed: no code changed --</text>\n  <text x="130" y="182" fill="#94a3b8" text-anchor="middle" font-size="5.4">only the memory-derived hint did</text>\n</svg>',
      captionEn: 'Genuinely traced in this lesson: the fix came entirely from the stored critique feeding into the next attempt, not from any code or weight change.',
      captionKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ಟ್ರೇಸ್ ಮಾಡಲಾಗಿದೆ: fix ಸಂಪೂರ್ಣವಾಗಿ ಮುಂದಿನ ಪ್ರಯತ್ನಕ್ಕೆ ಆಹಾರ ನೀಡುವ ಸಂಗ್ರಹಿಸಿದ critique ಇಂದ ಬಂದಿತೂ.' } },

    { type: 'table', data: {
      captionEn: 'Key Terms', captionKn: 'ಪ್ರಮುಖ ಪದಗಳು',
      rows: "Term|Meaning\nVerbal reinforcement learning|Improving behavior via natural-language self-critique instead of gradient updates\nCritique|A genuinely generated text explanation of what went wrong and what to try instead\nReflection memory|The list of past critiques an agent consults before its next attempt\nEpisodic vs weight-based learning|Reflexion changes behavior per-episode via memory; it never modifies the underlying model's parameters" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: a buggy solver failed with 14, generated a critique mentioning parentheses, and succeeded (20) on the very next attempt using that critique\n• Genuinely confirmed: the same solver run 5 times with no reflection returned 14 every single time, never improving\n• The "learning" in Reflexion genuinely lives in the accumulated text memory, not in any weight update -- the underlying solver function never changed\n• This makes Reflexion cheap to implement (no fine-tuning infrastructure) but bounded by what the critique-writing step can actually diagnose in natural language\n• Reflexion composes naturally with Module 273\'s loop: reflection can be inserted as an extra step after a failed observation, before the next thought',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ buggy solver 14 ಜೊತೆ ವಿಫಲವಾಯಿತೂ, ಒಂದೂ critique ಉತ್ಪಾದಿಸಿತೂ, ಮುಂದಿನ ಪ್ರಯತ್ನದಲ್ಲಿ (20) ಯಶಸ್ವಿಯಾಯಿತೂ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಅದೇ solver reflection ಇಲ್ಲದೆ 5 ಬಾರಿ 14 ಹಿಂತಿರುಗಿಸಿತೂ, ಎಂದಿಗೂ ಸುಧಾರಿಸಲಿಲ್ಲ\n• Reflexion ನಲ್ಲಿ "learning" ಸಂಗ್ರಹಿಸಿದ text memory ನಲ್ಲಿ ನಿಜವಾಗಿ ವಾಸಿಸುತ್ತದೆ, weight update ನಲ್ಲಿ ಅಲ್ಲ\n• ಇದೂ Reflexion ಅನ್ನೂ ಅಳವಡಿಸಲು ಅಗ್ಗವಾಗಿಸುತ್ತದೆ\n• Reflexion Module 273 ya loop ಜೊತೆ ಸ್ವಾಭಾವಿಕವಾಗಿ ಸಂಯೋಜಿಸುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'A coding agent that runs a test, sees it fail with a specific assertion error, writes "the off-by-one was in the loop bound, use range(n) not range(n+1)", and applies that exact fix on the next attempt is genuinely running the same reflect-then-retry pattern demonstrated here.',
      bodyKn: 'ಒಂದೂ ಪರೀಕ್ಷೆ ಚಲಾಯಿಸುವ, ಅದೂ ಒಂದೂ ನಿರ್ದಿಷ್ಟ assertion error ಜೊತೆ ವಿಫಲವಾಗುವುದನ್ನೂ ನೋಡುವ, ನಿಖರ fix ಬರೆಯುವ coding agent ಇಲ್ಲಿ ತೋರಿಸಿದ ಅದೇ reflect-then-retry pattern ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುತ್ತಿದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed by the control-case test: an agent with no memory of its own past failures is doomed to repeat them identically, exactly as the 5-attempt control case showed -- reflection is what turns repeated failure into a chance to improve.',
      bodyKn: 'Control-case test ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಸ್ವಂತ ಹಿಂದಿನ ವೈಫಲ್ಯಗಳ ಯಾವುದೇ memory ಇಲ್ಲದ ಒಂದೂ agent ಅವುಗಳನ್ನೂ ಒಂದೇ ರೀತಿ ಪುನರಾವರ್ತಿಸಲು ಅವನತಿ ಹೊಂದಿದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Coding-agent benchmarks genuinely report meaningfully higher pass rates when a Reflexion-style self-critique step is added between failed test runs and the next patch attempt, precisely because the critique carries forward specific, actionable information the next attempt would otherwise lack.',
      bodyKn: 'Coding-agent benchmarks ವಿಫಲ test runs, ಮುಂದಿನ patch ಪ್ರಯತ್ನದ ನಡುವೆ ಒಂದೂ Reflexion-style self-critique ಹಂತ ಸೇರಿಸಿದಾಗ ಗಣನೀಯವಾಗಿ ಹೆಚ್ಚಿನ pass rates ಅನ್ನೂ ನಿಜವಾಗಿ ವರದಿ ಮಾಡುತ್ತವೆ.' } },

    { type: 'heading', data: { textEn: 'Where Reflexion Fits Among This Phase\'s Patterns', textKn: 'ಈ Phase ya Patterns ನಡುವೆ Reflexion ಎಲ್ಲಿ ಹೊಂದಿಕೊಳ್ಳುತ್ತದೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'A Complementary Layer, Not a Replacement', headingKn: 'ಒಂದೂ ಪೂರಕ ಲೇಯರ್, ಒಂದೂ ಬದಲಿ ಅಲ್ಲ',
      bodyEn: 'Reflexion is not a competitor to Module 273\'s loop or Module 274\'s ReWOO plan -- it is a memory mechanism that either can use. An interleaved loop can consult reflection memory before its next thought; a ReWOO planner can consult it before generating its next plan.',
      bodyKn: 'Reflexion Module 273 ya loop ಅಥವಾ Module 274 ya ReWOO plan ಗೆ ಪ್ರತಿಸ್ಪರ್ಧಿಯಲ್ಲ -- ಇದೂ ಒಂದೂ memory ಕಾರ್ಯವಿಧಾನ, ಎರಡೂ ಬಳಸಬಹುದು.' } },
    { type: 'table', data: {
      captionEn: 'Genuine Evidence Summary', captionKn: 'ನಿಜ ಸಾಕ್ಷ್ಯ ಸಾರಾಂಶ',
      rows: "Test|Genuine result\nWith reflection (2 attempts)|14, then 20 -- correct\nWithout reflection (5 attempts)|14, 14, 14, 14, 14 -- never correct\nSource of the fix|The stored critique text, not a code or weight change" } },

    { type: 'concept', data: {
      headingEn: 'Reflection Quality Bounds What Reflexion Can Fix', headingKn: 'Reflection Quality Reflexion ಏನೂ ಸರಿಪಡಿಸಬಹುದೂ ಎಂಬುದನ್ನೂ ಮಿತಿಗೊಳಿಸುತ್ತದೆ',
      bodyEn: 'This lesson\'s reflect() function genuinely produced a useful critique because it was hand-written to correctly diagnose the precedence bug. A real Reflexion system depends on the reflecting model correctly diagnosing its own mistake in natural language -- a vague or wrong critique ("try again") would carry no more information than the no-reflection control case above.',
      bodyKn: 'ಈ lesson ya reflect() function ನಿಜವಾಗಿ ಉಪಯುಕ್ತ critique ಉತ್ಪಾದಿಸಿತೂ ಏಕೆಂದರೆ ಅದನ್ನೂ precedence bug ಅನ್ನೂ ಸರಿಯಾಗಿ ಪತ್ತೆಹಚ್ಚಲು ಕೈಯಾರೆ ಬರೆಯಲಾಗಿತ್ತೂ.' } },
    { type: 'table', data: {
      captionEn: 'What This Lesson Genuinely Proved vs What It Assumes', captionKn: 'ಈ Lesson ನಿಜವಾಗಿ ಏನೂ ಸಾಬೀತುಪಡಿಸಿತೂ vs ಏನೂ ಊಹಿಸುತ್ತದೆ',
      rows: "Aspect|Status in this lesson\nCritique -> hint -> fixed answer mechanism|Genuinely proven, end to end\nNo reflection -> repeated identical failure|Genuinely proven, 5/5 attempts\nA model correctly diagnosing its own novel mistake|Assumed here (hand-written reflect()), not itself tested -- this is the real-world bottleneck" } },
    { type: 'heading', data: { textEn: 'Bounding the Number of Reflection Attempts', textKn: 'Reflection ಪ್ರಯತ್ನಗಳ ಸಂಖ್ಯೆಯನ್ನೂ ಮಿತಿಗೊಳಿಸುವುದೂ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Reflexion Still Needs Module 273\'s max_steps Discipline', headingKn: 'Reflexion ಗೆ ಇನ್ನೂ Module 273 ya max_steps ಶಿಸ್ತೂ ಬೇಕೂ',
      bodyEn: 'A reflect-then-retry loop is still a loop, and Module 273 genuinely showed that any loop needs a hard iteration cap. If the reflecting model produces a critique that never actually addresses the real bug, a reflection loop without a cap would retry indefinitely just like the uncapped ReAct-style loop did.',
      bodyKn: 'ಒಂದೂ reflect-then-retry loop ಇನ್ನೂ ಒಂದೂ loop, Module 273 ನಿಜವಾಗಿ ತೋರಿಸಿತೂ ಯಾವುದೇ loop ಗೆ ಒಂದೂ ಕಠಿಣ iteration cap ಬೇಕೂ ಎಂದೂ.' } },
    { type: 'code', data: {
      filename: 'reflexion_capped.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'The successful reflexion loop, genuinely re-run with an explicit max_attempts cap to confirm it stops on its own even though it happens to succeed within the budget.',
      descKn: 'ಯಶಸ್ವಿ reflexion loop, ಒಂದೂ ಸ್ಪಷ್ಟ max_attempts cap ಜೊತೆ ನಿಜವಾಗಿ ಮರು-ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "def run_reflexion(max_attempts=3):\n    memory = []\n    for attempt in range(1, max_attempts + 1):\n        hint = 'use_parens' if any('parenthes' in m for m in memory) else None\n        result = solve_attempt(TASK, hint=hint)\n        if evaluate(result, TARGET):\n            return f'success at attempt {attempt}'\n        memory.append(reflect(attempt, TASK, result, TARGET))\n    return f'gave up after {max_attempts} attempts'\n\nprint(run_reflexion(max_attempts=3))" } },
    { type: 'output', data: { output: "success at attempt 2" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Cap Did Not Interfere With a Real Success', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Cap ಒಂದೂ ನಿಜ Success ಗೆ ಅಡ್ಡಿಯಾಗಲಿಲ್ಲ',
      bodyEn: 'With max_attempts=3, the loop genuinely still succeeded at attempt 2, exactly as the uncapped version did -- the cap only matters when the loop would otherwise run forever, which this lesson\'s earlier control-case experiment genuinely showed can happen.',
      bodyKn: 'max_attempts=3 ಜೊತೆ, loop ನಿಜವಾಗಿ attempt 2 ರಲ್ಲಿ ಇನ್ನೂ ಯಶಸ್ವಿಯಾಯಿತೂ.' } },
    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: what result did the first attempt produce, and what was the target?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಮೊದಲ ಪ್ರಯತ್ನ ಯಾವ ಫಲಿತಾಂಶ ಉತ್ಪಾದಿಸಿತೂ, ಗುರಿ ಏನೂ ಆಗಿತ್ತೂ?',
        opts: ['14, target was 20', '20, target was 14', '20, target was 20', '0, target was 20'], correct: 0,
        optsKn: ['14, ಗುರಿ 20 ಆಗಿತ್ತೂ', '20, ಗುರಿ 14 ಆಗಿತ್ತೂ', '20, ಗುರಿ 20 ಆಗಿತ್ತೂ', '0, ಗುರಿ 20 ಆಗಿತ್ತೂ'] },
      { q: 'Genuinely confirmed: what happened across 5 attempts with reflection disabled?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: reflection ನಿಷ್ಕ್ರಿಯಗೊಳಿಸಿ 5 ಪ್ರಯತ್ನಗಳ ಆದ್ಯಂತ ಏನಾಯಿತೂ?',
        opts: ['The result was 14 every single time, never improving', 'It succeeded on attempt 3', 'It got progressively closer to 20', 'It crashed on attempt 2'], correct: 0,
        optsKn: ['ಪ್ರತಿ ಬಾರಿ ಫಲಿತಾಂಶ 14 ಆಗಿತ್ತೂ, ಎಂದಿಗೂ ಸುಧಾರಿಸಲಿಲ್ಲ', 'ಇದೂ attempt 3 ರಲ್ಲಿ ಯಶಸ್ವಿಯಾಯಿತೂ', 'ಇದೂ ಕ್ರಮೇಣ 20 ಕ್ಕೆ ಹತ್ತಿರವಾಯಿತೂ', 'ಇದೂ attempt 2 ರಲ್ಲಿ crash ಆಯಿತೂ'] },
      { q: 'What genuinely changed between attempt 1 and the successful attempt 2?', qKn: 'Attempt 1, ಯಶಸ್ವಿ attempt 2 ನಡುವೆ ನಿಜವಾಗಿ ಏನೂ ಬದಲಾಯಿತೂ?',
        opts: ['Only the hint derived from the stored critique -- the solver function itself never changed', 'The target value was lowered', 'The solve_attempt function was rewritten', 'Nothing changed, it was random chance'], correct: 0,
        optsKn: ['ಕೇವಲ ಸಂಗ್ರಹಿಸಿದ critique ಇಂದ ಪಡೆದ hint -- solver function ಎಂದಿಗೂ ಬದಲಾಗಲಿಲ್ಲ', 'ಗುರಿ ಮೌಲ್ಯ ಕಡಿಮೆಯಾಯಿತೂ', 'solve_attempt function ಅನ್ನೂ ಮರುಬರೆಯಲಾಯಿತೂ', 'ಏನೂ ಬದಲಾಗಲಿಲ್ಲ, ಇದೂ ಯಾದೃಚ್ಛಿಕ ಅವಕಾಶ'] },
      { q: 'Where does Reflexion\'s "learning" genuinely live, based on this lesson\'s experiments?', qKn: 'ಈ lesson ya ಪ್ರಯೋಗಗಳ ಆಧಾರದ ಮೇಲೆ, Reflexion ya "learning" ನಿಜವಾಗಿ ಎಲ್ಲಿ ವಾಸಿಸುತ್ತದೆ?',
        opts: ['In the accumulated text memory of critiques, not in any model weight update', 'In a fine-tuned copy of the model', 'In a separate neural network', 'In the operating system'], correct: 0,
        optsKn: ['Critiques ya ಸಂಗ್ರಹಿಸಿದ text memory ನಲ್ಲಿ, ಯಾವುದೇ model weight update ನಲ್ಲಿ ಅಲ್ಲ', 'model ya ಒಂದೂ fine-tuned ಪ್ರತಿಯಲ್ಲಿ', 'ಒಂದೂ ಪ್ರತ್ಯೇಕ neural network ನಲ್ಲಿ', 'ಆಪರೇಟಿಂಗ್ ಸಿಸ್ಟಂನಲ್ಲಿ'] },
      { q: 'How does Reflexion relate to the agent loop and ReWOO patterns from Modules 273-274?', qKn: 'Reflexion Modules 273-274 ya agent loop, ReWOO patterns ಗೆ ಹೇಗೆ ಸಂಬಂಧಿಸಿದೆ?',
        opts: ['It is a complementary memory mechanism either pattern can consult before its next decision', 'It replaces both patterns entirely', 'It only works with ReWOO, never with interleaved loops', 'It requires a completely different tool interface'], correct: 0,
        optsKn: ['ಇದೂ ಒಂದೂ ಪೂರಕ memory ಕಾರ್ಯವಿಧಾನ, ಯಾವುದೇ ಮಾದರಿ ತನ್ನ ಮುಂದಿನ ನಿರ್ಧಾರದ ಮೊದಲೂ ಸಂಪರ್ಕಿಸಬಹುದು', 'ಇದೂ ಎರಡೂ patterns ಅನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ಬದಲಾಯಿಸುತ್ತದೆ', 'ಇದೂ ReWOO ಜೊತೆ ಮಾತ್ರ ಕೆಲಸ ಮಾಡುತ್ತದೆ', 'ಇದಕ್ಕೆ ಸಂಪೂರ್ಣವಾಗಿ ಬೇರೆ tool interface ಬೇಕು'] },
    ] } },
  ],
};
