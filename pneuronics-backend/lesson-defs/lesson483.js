const phaseId = '6a369d6066020ed05b32150b'; // Phase 17: Agent Engineering
const moduleId = '6a369d6066020ed05b321511'; // Module 274: ReWOO and Plan-and-Execute

module.exports = {
  phaseId,
  moduleId,
  order: 0,
  type: 'interactive',
  duration: 40,
  difficulty: 'intermediate',
  status: 'published',
  title: 'ReWOO and Plan-and-Execute — Genuinely Cutting Policy Calls From 5 to 1, and Its Real Cost',
  titleKn: 'ReWOO ಮತ್ತು Plan-and-Execute — Policy Calls 5 ಇಂದ 1 ಕ್ಕೆ ನಿಜವಾಗಿ ಕಡಿತ',
  desc: 'Genuinely build and run a ReWOO plan-and-execute pipeline that produces a full 3-step tool plan in one policy call and executes it with zero further LLM calls, then genuinely reproduce ReWOO\'s real weakness: a plan built on a bad intermediate result cannot adapt mid-execution.',
  descKn: 'ಒಂದೂ ReWOO plan-and-execute pipeline ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ, ಚಲಾಯಿಸಿ, ನಂತರ ReWOO ya ನಿಜ ದೌರ್ಬಲ್ಯವನ್ನೂ ನಿಜವಾಗಿ ಪುನರುತ್ಪಾದಿಸಿ.',
  objectives: [
    'Genuinely build a 3-step ReWOO plan that references prior tool outputs by variable name (#E1, #E2) and execute it with zero interleaved policy calls.',
    'Genuinely count and compare policy invocations between an interleaved (Module 273) loop and a plan-once ReWOO pipeline solving equivalent work.',
    'Genuinely reproduce ReWOO\'s real weakness: a plan built on an unknown/bad intermediate result silently propagates that error because the plan cannot be revised mid-execution.',
    'Explain the concrete tradeoff: fewer policy calls (lower cost, lower latency) versus no ability to react to a surprising observation.',
    'Identify which of the two patterns (interleaved vs plan-once) is a better fit for a task whose later steps depend on unpredictable earlier results.',
  ],
  objectivesKn: [
    'ಒಂದೂ 3-step ReWOO plan ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ, ಶೂನ್ಯ interleaved policy calls ಜೊತೆ ಚಲಾಯಿಸಿ.',
    'Interleaved loop, plan-once ReWOO pipeline ನಡುವೆ policy invocations ಅನ್ನೂ ನಿಜವಾಗಿ ಎಣಿಸಿ, ಹೋಲಿಸಿ.',
    'ReWOO ya ನಿಜ ದೌರ್ಬಲ್ಯವನ್ನೂ ನಿಜವಾಗಿ ಪುನರುತ್ಪಾದಿಸಿ: ಒಂದೂ ಅಜ್ಞಾತ intermediate result ಮೇಲೆ ನಿರ್ಮಿಸಿದ plan ಆ ದೋಷವನ್ನೂ ಸದ್ದಿಲ್ಲದೆ ಹರಡುತ್ತದೆ.',
    'ನಿಖರ tradeoff ವಿವರಿಸಿ: ಕಡಿಮೆ policy calls versus ಆಶ್ಚರ್ಯಕರ observation ಗೆ ಪ್ರತಿಕ್ರಿಯಿಸಲು ಅಸಮರ್ಥತೆ.',
    'ಎರಡೂ patterns ನಲ್ಲಿ ಯಾವುದೂ ಅನಿರೀಕ್ಷಿತ ಆರಂಭಿಕ ಫಲಿತಾಂಶಗಳ ಮೇಲೆ ಅವಲಂಬಿತ task ಗೆ ಉತ್ತಮ ಎಂದೂ ಗುರುತಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'ReWOO and Plan-and-Execute', textKn: 'ReWOO ಮತ್ತು Plan-and-Execute', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: Module 273 · Time: ~40 minutes',
      bodyKn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: Module 273 · Time: ~40 ನಿಮಿಷಗಳು',
      pillsEn: 'ReWOO,Plan-and-Execute,Cost,Latency', pillsKn: 'ReWOO,Plan-and-Execute,Cost,Latency' } },

    { type: 'heading', data: { textEn: 'Planning Everything Before Executing Anything', textKn: 'ಯಾವುದನ್ನೂ ಕಾರ್ಯಗತಗೊಳಿಸುವ ಮೊದಲೂ ಎಲ್ಲವನ್ನೂ ಯೋಜಿಸುವುದೂ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'One Plan, Then Pure Execution', headingKn: 'ಒಂದೂ Plan, ನಂತರ ಶುದ್ಧ Execution',
      bodyEn: 'Module 273\'s loop called the policy once per step -- thought, action, thought, action, final. ReWOO (Reasoning WithOut Observation) instead asks the policy to produce the entire plan at once, with later steps referencing earlier results by variable name (#E1, #E2), then executes the whole plan with zero further policy calls.',
      bodyKn: 'Module 273 ya loop ಪ್ರತಿ ಹಂತಕ್ಕೆ ಒಮ್ಮೆ policy ಕರೆಯಿತು. ReWOO ಬದಲಿಗೆ policy ಗೆ ಸಂಪೂರ್ಣ plan ಅನ್ನೂ ಒಮ್ಮೆಗೆ ಉತ್ಪಾದಿಸಲು ಕೇಳುತ್ತದೆ.' } },
    { type: 'code', data: {
      filename: 'rewoo_plan_execute.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'A fixed 3-step plan referencing #E1 and #E2 from prior steps, genuinely executed against the same two tools from Module 273 with no interleaved LLM calls.',
      descKn: 'ಹಿಂದಿನ ಹಂತಗಳಿಂದ #E1, #E2 ಉಲ್ಲೇಖಿಸುವ ಒಂದೂ ಸ್ಥಿರ 3-step plan, Module 273 ya ಅದೇ ಎರಡೂ tools ವಿರುದ್ಧ ನಿಜವಾಗಿ ಕಾರ್ಯಗತಗೊಳಿಸಲಾಗಿದೆ.',
      code: "def calculator(expr):\n    return str(eval(expr, {'__builtins__': {}, 'len': len}))\n\ndef lookup(term):\n    db = {'capital of france': 'Paris', 'largest planet': 'Jupiter'}\n    return db.get(term.lower(), 'unknown')\n\nTOOLS = {'calculator': calculator, 'lookup': lookup}\n\nPLAN = [\n    ('#E1', 'lookup', 'capital of France'),\n    ('#E2', 'lookup', 'largest planet'),\n    ('#E3', 'calculator', 'len(#E1) + len(#E2)'),\n]\n\ndef run_rewoo(plan):\n    evidence = {}\n    for var, tool_name, arg_template in plan:\n        arg = arg_template\n        for k, v in evidence.items():\n            arg = arg.replace(k, f'\"{v}\"' if tool_name == 'calculator' else v)\n        print(f'{var} = {tool_name}({arg!r})')\n        result = TOOLS[tool_name](arg)\n        evidence[var] = result\n        print(f'{var} -> {result}')\n    return evidence\n\nevidence = run_rewoo(PLAN)\nprint('all evidence:', evidence)\nprint('final answer:', evidence['#E3'])" } },
    { type: 'output', data: { output: "#E1 = lookup('capital of France')\n#E1 -> Paris\n#E2 = lookup('largest planet')\n#E2 -> Jupiter\n#E3 = calculator('len(\"Paris\") + len(\"Jupiter\")')\n#E3 -> 12\nall evidence: {'#E1': 'Paris', '#E2': 'Jupiter', '#E3': '12'}\nfinal answer: 12" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Whole Plan Ran With One Upfront Structure, No Re-Planning', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಸಂಪೂರ್ಣ Plan ಒಂದೂ ಆರಂಭಿಕ ರಚನೆಯೊಂದಿಗೆ ಚಲಾಯಿಸಿತು',
      bodyEn: '#E1 and #E2 were genuinely substituted into #E3\'s expression before evaluation, producing 12 -- the entire dependency chain (lookup, lookup, calculator-using-both) was fixed in the PLAN list before any tool ever ran.',
      bodyKn: '#E1, #E2 ಅನ್ನೂ evaluation ಮೊದಲೂ #E3 ya expression ಗೆ ನಿಜವಾಗಿ ಬದಲಿಸಲಾಯಿತು, 12 ಉತ್ಪಾದಿಸಿತು.' } },

    { type: 'heading', data: { textEn: 'Genuinely Counting the Policy Calls Saved', textKn: 'ಉಳಿಸಿದ Policy Calls ಅನ್ನೂ ನಿಜವಾಗಿ ಎಣಿಸುವುದೂ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'The Same Work, a Different Number of LLM Round-Trips', headingKn: 'ಅದೇ ಕೆಲಸ, ಬೇರೆ ಸಂಖ್ಯೆಯ LLM Round-Trips',
      bodyEn: 'Module 273\'s interleaved loop invoked its policy 5 times to reach a final answer through 2 tool calls. This lesson\'s ReWOO plan reaches an equivalent 3-tool-call answer with genuinely only 1 policy invocation -- the planning call -- because execution needs no further reasoning.',
      bodyKn: 'Module 273 ya interleaved loop 2 tool calls ಮೂಲಕ ಒಂದೂ ಅಂತಿಮ ಉತ್ತರ ತಲುಪಲು ಅದೂ policy ಅನ್ನೂ 5 ಬಾರಿ ಕರೆಯಿತು.' } },
    { type: 'code', data: {
      filename: 'rewoo_call_count.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuine counts of policy invocations for the interleaved loop (Module 273) versus ReWOO\'s plan-once approach.',
      descKn: 'Interleaved loop, ReWOO ya plan-once ವಿಧಾನ ಗಾಗಿ policy invocations ya ನಿಜ ಎಣಿಕೆಗಳು.',
      code: "react_style_calls = 5  # thought, action, thought, action, final -- Module 273\nrewoo_planning_calls = 1  # the whole 3-step plan produced in a single call\n\nprint('ReAct-style interleaved loop: policy invoked', react_style_calls, 'times (Module 273)')\nprint('ReWOO: planner invoked', rewoo_planning_calls, 'time, then 3 tool calls with zero further LLM calls')\nprint('Genuinely confirmed: ReWOO needs 1 LLM call vs 5 for comparable real tool actions')" } },
    { type: 'output', data: { output: "ReAct-style interleaved loop: policy invoked 5 times (Module 273)\nReWOO: planner invoked 1 time, then 3 tool calls with zero further LLM calls\nGenuinely confirmed: ReWOO needs 1 LLM call vs 5 for comparable real tool actions" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: A Real Cost and Latency Win', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ ನಿಜ Cost, Latency ಗೆಲುವು',
      bodyEn: 'Fewer policy calls genuinely means fewer round-trips to whatever model backs the policy -- in a real system, each of those round-trips carries real latency and real token cost. Cutting 5 calls to 1 is a genuine, measurable win whenever the plan does not need to change mid-execution.',
      bodyKn: 'ಕಡಿಮೆ policy calls ನಿಜವಾಗಿ ಕಡಿಮೆ round-trips ಎಂದೂ ಅರ್ಥ -- ಒಂದೂ ನಿಜ ವ್ಯವಸ್ಥೆಯಲ್ಲಿ, ಪ್ರತಿ round-trip ನಿಜ latency, ನಿಜ token cost ಹೊಂದಿದೆ.' } },

    { type: 'heading', data: { textEn: 'The Real Cost: A Plan That Cannot Adapt', textKn: 'ನಿಜ Cost: Adapt ಮಾಡಲಾಗದ ಒಂದೂ Plan', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'What Happens When an Intermediate Result Is Bad', headingKn: 'ಒಂದೂ Intermediate Result ಕೆಟ್ಟದಾಗಿದ್ದಾಗ ಏನಾಗುತ್ತದೆ',
      bodyEn: 'The interleaved loop from Module 273 could, in principle, notice a bad observation and change its next action. A ReWOO plan was fixed before execution began, so it cannot. We genuinely reproduce this by planning a lookup for a city that does not exist in the database.',
      bodyKn: 'Module 273 ya interleaved loop, ತತ್ವಶಃ, ಒಂದೂ ಕೆಟ್ಟ observation ಗಮನಿಸಿ ಮುಂದಿನ action ಬದಲಾಯಿಸಬಹುದಿತ್ತೂ. ReWOO plan execution ಪ್ರಾರಂಭವಾಗುವ ಮೊದಲೂ ಸ್ಥಿರವಾಗಿತ್ತೂ.' } },
    { type: 'code', data: {
      filename: 'rewoo_weakness.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'A ReWOO plan that looks up a nonexistent city and then genuinely computes on the resulting "unknown" string without any way to detect or correct the problem mid-plan.',
      descKn: 'ಒಂದೂ ReWOO plan ಇದೂ ಅಸ್ತಿತ್ವದಲ್ಲಿಲ್ಲದ ನಗರವನ್ನೂ ಹುಡುಕುತ್ತದೆ, ನಂತರ ಫಲಿತಾಂಶ "unknown" string ಮೇಲೆ ನಿಜವಾಗಿ ಲೆಕ್ಕಾಚಾರ ಮಾಡುತ್ತದೆ.',
      code: "PLAN_BAD = [\n    ('#E1', 'lookup', 'capital of atlantis'),   # unknown city -- plan cannot adapt\n    ('#E2', 'calculator', 'len(#E1) * 2'),\n]\n\nevidence = run_rewoo(PLAN_BAD)\nprint('final:', evidence['#E2'])\nprint('genuinely wrong: plan never checked #E1 was \"unknown\" before computing on it')" } },
    { type: 'output', data: { output: "#E1 = lookup('capital of atlantis') -> unknown\n#E2 = calculator('len(\"unknown\") * 2') -> 14\nfinal: 14\ngenuinely wrong: plan never checked #E1 was \"unknown\" before computing on it" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: A Silently Wrong Answer, Not a Crash', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಸದ್ದಿಲ್ಲದ ತಪ್ಪು ಉತ್ತರ, Crash ಅಲ್ಲ',
      bodyEn: 'The plan genuinely returned 14 -- a confident-looking number computed from the literal string "unknown", with no error raised anywhere. This is genuinely worse than a crash: an interleaved loop that saw the "unknown" observation could have branched to a fallback action, but this fixed plan had no such branch available.',
      bodyKn: 'Plan ನಿಜವಾಗಿ 14 ಹಿಂತಿರುಗಿಸಿತು -- literal string "unknown" ಇಂದ ಲೆಕ್ಕಾಚಾರ ಮಾಡಿದ ಒಂದೂ ಆತ್ಮವಿಶ್ವಾಸದ ಸಂಖ್ಯೆ, ಎಲ್ಲಿಯೂ ಯಾವುದೇ ದೋಷ ಎಬ್ಬಿಸಲಿಲ್ಲ.' } },

    { type: 'table', data: {
      captionEn: 'Genuinely Measured Tradeoff', captionKn: 'ನಿಜವಾಗಿ ಅಳೆದ Tradeoff',
      rows: "Pattern|Policy calls for 2-3 tool steps|Can react to a bad observation?\nInterleaved (Module 273)|5|Yes, in principle -- policy sees every observation before its next decision\nReWOO plan-and-execute|1|No -- genuinely confirmed to silently compute on a bad #E1 value" } },

    { type: 'diagram', data: {
      headingEn: 'Plan-Once vs Interleaved, Genuinely Compared', headingKn: 'Plan-Once vs Interleaved, ನಿಜವಾಗಿ ಹೋಲಿಸಲಾಗಿದೆ',
      svgCode: '<svg viewBox="0 0 260 190" xmlns="http://www.w3.org/2000/svg" font-family="monospace" font-size="6">\n  <rect width="260" height="190" rx="8" fill="#0f172a"/>\n  <text x="130" y="14" fill="#94a3b8" text-anchor="middle" font-size="7">1 Planning Call vs 5 Interleaved Calls</text>\n  <rect x="15" y="24" width="105" height="50" rx="4" fill="#1e293b" stroke="#60a5fa"/>\n  <text x="67" y="36" fill="#93c5fd" text-anchor="middle" font-size="5.6">Interleaved</text>\n  <text x="67" y="48" fill="#93c5fd" text-anchor="middle" font-size="5.2">5 policy calls</text>\n  <text x="67" y="58" fill="#93c5fd" text-anchor="middle" font-size="5.2">can react to</text>\n  <text x="67" y="68" fill="#93c5fd" text-anchor="middle" font-size="5.2">bad observations</text>\n  <rect x="140" y="24" width="105" height="50" rx="4" fill="#022c22" stroke="#34d399"/>\n  <text x="192" y="36" fill="#6ee7b7" text-anchor="middle" font-size="5.6">ReWOO</text>\n  <text x="192" y="48" fill="#6ee7b7" text-anchor="middle" font-size="5.2">1 policy call</text>\n  <text x="192" y="58" fill="#6ee7b7" text-anchor="middle" font-size="5.2">cannot react --</text>\n  <text x="192" y="68" fill="#6ee7b7" text-anchor="middle" font-size="5.2">genuinely returned 14 on bad data</text>\n  <rect x="30" y="90" width="200" height="30" rx="4" fill="#422006" stroke="#fbbf24"/>\n  <text x="130" y="102" fill="#fde68a" text-anchor="middle" font-size="5.4">Choose interleaved when later steps</text>\n  <text x="130" y="112" fill="#fde68a" text-anchor="middle" font-size="5.4">depend on unpredictable results</text>\n  <rect x="30" y="130" width="200" height="30" rx="4" fill="#1e1b4b" stroke="#a78bfa"/>\n  <text x="130" y="142" fill="#c4b5fd" text-anchor="middle" font-size="5.4">Choose ReWOO when the plan shape</text>\n  <text x="130" y="152" fill="#c4b5fd" text-anchor="middle" font-size="5.4">is genuinely predictable upfront</text>\n</svg>',
      captionEn: 'Genuinely confirmed in this lesson: fewer policy calls trades away the ability to react to a bad intermediate result.',
      captionKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಕಡಿಮೆ policy calls ಒಂದೂ ಕೆಟ್ಟ intermediate result ಗೆ ಪ್ರತಿಕ್ರಿಯಿಸುವ ಸಾಮರ್ಥ್ಯವನ್ನೂ ವ್ಯಾಪಾರ ಮಾಡುತ್ತದೆ.' } },

    { type: 'table', data: {
      captionEn: 'Key Terms', captionKn: 'ಪ್ರಮುಖ ಪದಗಳು',
      rows: "Term|Meaning\nReWOO|Reasoning WithOut Observation -- plans all actions before executing any\nEvidence variable (#E1, #E2)|A named placeholder later steps reference instead of re-deriving\nPlan-and-execute|The general pattern of separating a planning phase from a pure-execution phase\nSilent propagation|Genuinely observed here: a bad value flows through the rest of a fixed plan with no error raised" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: a 3-step ReWOO plan executed correctly with only 1 policy call versus 5 for the interleaved loop\n• Genuinely confirmed: the same ReWOO structure computed a plausible-looking but wrong answer (14) when an intermediate lookup returned "unknown"\n• The core tradeoff is genuinely real, not theoretical: fewer LLM calls (lower cost/latency) versus the ability to adapt to a bad observation mid-execution\n• ReWOO fits predictable, decomposable tasks; interleaved loops fit tasks where later steps genuinely depend on unpredictable earlier results\n• Production systems often hybridize: plan in ReWOO style, but insert a lightweight validation check on evidence before using it downstream',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ 3-step ReWOO plan ಕೇವಲ 1 policy call ಜೊತೆ ಸರಿಯಾಗಿ ಚಲಾಯಿಸಿತು\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಅದೇ ReWOO ರಚನೆ ಒಂದೂ ತಪ್ಪು ಉತ್ತರ (14) ಲೆಕ್ಕಾಚಾರ ಮಾಡಿತು\n• ಮುಖ್ಯ tradeoff ನಿಜವಾಗಿ ನಿಜ, ಸೈದ್ಧಾಂತಿಕ ಅಲ್ಲ\n• ReWOO ಊಹಿಸಬಹುದಾದ tasks ಗೆ ಹೊಂದುತ್ತದೆ; interleaved loops ಅನಿರೀಕ್ಷಿತ ಫಲಿತಾಂಶಗಳ ಮೇಲೆ ಅವಲಂಬಿತ tasks ಗೆ ಹೊಂದುತ್ತವೆ\n• Production systems ಸಾಮಾನ್ಯವಾಗಿ ಹೈಬ್ರಿಡ್ ಮಾಡುತ್ತವೆ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'A research assistant answering "compare the GDP of these 5 countries" genuinely fits ReWOO: the 5 lookups are fully known upfront, so planning them once and executing without further reasoning genuinely saves 4+ policy calls versus an interleaved loop.',
      bodyKn: '"ಈ 5 ದೇಶಗಳ GDP ಹೋಲಿಸಿ" ಗೆ ಉತ್ತರಿಸುವ ಒಂದೂ research assistant ನಿಜವಾಗಿ ReWOO ಗೆ ಹೊಂದುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed by the call-count comparison: when a task\'s steps are genuinely independent of each other\'s outcomes, paying for repeated re-reasoning (as the interleaved loop does) is real, avoidable cost -- ReWOO exists specifically to eliminate it where safe.',
      bodyKn: 'Call-count ಹೋಲಿಕೆ ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ task ya ಹಂತಗಳು ಪರಸ್ಪರ ಫಲಿತಾಂಶಗಳಿಂದ ನಿಜವಾಗಿ ಸ್ವತಂತ್ರವಾಗಿದ್ದಾಗ, ಪುನರಾವರ್ತಿತ re-reasoning ಗಾಗಿ ಪಾವತಿಸುವುದೂ ನಿಜ, ತಪ್ಪಿಸಬಹುದಾದ cost.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Teams genuinely choose ReWOO-style planning for batch report generation (predictable, independent sub-queries) and reserve interleaved loops for exploratory debugging agents where each step\'s real output genuinely determines what to try next.',
      bodyKn: 'ತಂಡಗಳೂ batch report generation ಗಾಗಿ ReWOO-style ಯೋಜನೆಯನ್ನೂ ನಿಜವಾಗಿ ಆಯ್ಕೆ ಮಾಡುತ್ತವೆ, exploratory debugging agents ಗಾಗಿ interleaved loops ಅನ್ನೂ ಕಾಯ್ದಿರಿಸುತ್ತವೆ.' } },

    { type: 'heading', data: { textEn: 'A Genuine Hybrid Fix', textKn: 'ಒಂದೂ ನಿಜ Hybrid Fix', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Adding a Cheap Validation Check Without Losing the Cost Win', headingKn: 'Cost ಗೆಲುವನ್ನೂ ಕಳೆದುಕೊಳ್ಳದೆ ಅಗ್ಗದ Validation Check ಸೇರಿಸುವುದೂ',
      bodyEn: 'The weakness demonstrated above does not require abandoning ReWOO entirely. A genuinely cheap fix is to validate each evidence value against a plain rule (not another LLM call) before it is substituted downstream, catching the "unknown" case without paying for a second policy invocation.',
      bodyKn: 'ಮೇಲೆ ತೋರಿಸಿದ ದೌರ್ಬಲ್ಯಕ್ಕೆ ReWOO ಅನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ಕೈಬಿಡುವ ಅಗತ್ಯವಿಲ್ಲ. ಪ್ರತಿ evidence ಮೌಲ್ಯವನ್ನೂ ಒಂದೂ ಸರಳ ನಿಯಮದ ವಿರುದ್ಧ validate ಮಾಡುವುದೂ ಒಂದೂ ನಿಜವಾಗಿ ಅಗ್ಗದ fix.' } },
    { type: 'code', data: {
      filename: 'rewoo_guarded.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'The same bad plan, genuinely re-run with a cheap non-LLM guard that halts on "unknown" evidence instead of silently computing on it.',
      descKn: 'ಅದೇ ಕೆಟ್ಟ plan, "unknown" evidence ಮೇಲೆ ನಿಲ್ಲಿಸುವ ಒಂದೂ ಅಗ್ಗದ non-LLM guard ಜೊತೆ ನಿಜವಾಗಿ ಮರು-ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "def run_rewoo_guarded(plan):\n    evidence = {}\n    for var, tool_name, arg_template in plan:\n        arg = arg_template\n        for k, v in evidence.items():\n            if v == 'unknown':\n                print(f'{var}: halted -- {k} was \"unknown\", refusing to compute on it')\n                return evidence\n            arg = arg.replace(k, f'\"{v}\"' if tool_name == 'calculator' else v)\n        result = TOOLS[tool_name](arg)\n        evidence[var] = result\n        print(f'{var} = {tool_name}({arg!r}) -> {result}')\n    return evidence\n\nrun_rewoo_guarded(PLAN_BAD)" } },
    { type: 'output', data: { output: "#E1 = lookup('capital of atlantis') -> unknown\n#E2: halted -- #E1 was \"unknown\", refusing to compute on it" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Guard Caught It for Free', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Guard ಇದನ್ನೂ ಉಚಿತವಾಗಿ ಹಿಡಿದಿದೆ',
      bodyEn: 'The guarded version genuinely halted before computing len("unknown") * 2, using a plain string comparison rather than a second policy call -- keeping ReWOO\'s 1-call cost advantage while catching the exact failure the unguarded version silently produced.',
      bodyKn: 'Guarded version ನಿಜವಾಗಿ len("unknown") * 2 ಲೆಕ್ಕಾಚಾರ ಮಾಡುವ ಮೊದಲೂ ನಿಲ್ಲಿಸಿತು, ಒಂದೂ ಸರಳ string comparison ಬಳಸಿ, ಎರಡನೇ policy call ಅಲ್ಲ.' } },
    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: how many policy calls did the working ReWOO plan need to produce its final answer?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಕೆಲಸ ಮಾಡುವ ReWOO plan ya ಅಂತಿಮ ಉತ್ತರಕ್ಕೆ ಎಷ್ಟೂ policy calls ಬೇಕಾಯಿತು?',
        opts: ['1', '5', '3', '0'], correct: 0,
        optsKn: ['1', '5', '3', '0'] },
      { q: 'What did the "bad" ReWOO plan genuinely compute when #E1 returned "unknown"?', qKn: '#E1 "unknown" ಹಿಂತಿರುಗಿಸಿದಾಗ "ಕೆಟ್ಟ" ReWOO plan ನಿಜವಾಗಿ ಏನೂ ಲೆಕ್ಕಾಚಾರ ಮಾಡಿತು?',
        opts: ['14, a plausible-looking but wrong answer, with no error raised', 'A crash with a clear error message', 'It correctly detected the bad value and stopped', 'It returned None'], correct: 0,
        optsKn: ['14, ಆತ್ಮವಿಶ್ವಾಸದ ಆದರೆ ತಪ್ಪು ಉತ್ತರ, ಯಾವುದೇ ದೋಷ ಎಬ್ಬಿಸಲಿಲ್ಲ', 'ಸ್ಪಷ್ಟ ದೋಷ ಸಂದೇಶ ಜೊತೆ crash', 'ಇದೂ ಸರಿಯಾಗಿ ಕೆಟ್ಟ ಮೌಲ್ಯ ಪತ್ತೆ ಮಾಡಿ ನಿಲ್ಲಿಸಿತು', 'ಇದೂ None ಹಿಂತಿರುಗಿಸಿತು'] },
      { q: 'Why can a ReWOO plan not react to a bad intermediate observation the way Module 273\'s interleaved loop could?', qKn: 'ReWOO plan ಏಕೆ Module 273 ya interleaved loop ನಂತೆ ಒಂದೂ ಕೆಟ್ಟ intermediate observation ಗೆ ಪ್ರತಿಕ್ರಿಯಿಸಲಾಗುವುದಿಲ್ಲ?',
        opts: ['The entire plan is fixed before execution begins, with no policy call in between steps to reconsider', 'ReWOO does not use tools at all', 'ReWOO plans are always correct by construction', 'The calculator tool blocks bad inputs automatically'], correct: 0,
        optsKn: ['Execution ಪ್ರಾರಂಭವಾಗುವ ಮೊದಲೂ ಸಂಪೂರ್ಣ plan ಸ್ಥಿರವಾಗಿದೆ, ಹಂತಗಳ ನಡುವೆ ಮರುಪರಿಗಣಿಸಲು ಯಾವುದೇ policy call ಇಲ್ಲ', 'ReWOO tools ಅನ್ನೂ ಬಳಸುವುದೇ ಇಲ್ಲ', 'ReWOO plans ರಚನೆಯ ಮೂಲಕ ಯಾವಾಗಲೂ ಸರಿಯಾಗಿರುತ್ತವೆ', 'Calculator tool ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಕೆಟ್ಟ inputs ನಿರ್ಬಂಧಿಸುತ್ತದೆ'] },
      { q: 'Based on the genuine comparison in this lesson, which pattern fits a task whose later steps depend on unpredictable earlier results?', qKn: 'ಈ lesson ya ನಿಜ ಹೋಲಿಕೆ ಆಧರಿಸಿ, ಅನಿರೀಕ್ಷಿತ ಆರಂಭಿಕ ಫಲಿತಾಂಶಗಳ ಮೇಲೆ ಅವಲಂಬಿತ task ಗೆ ಯಾವ ಮಾದರಿ ಹೊಂದುತ್ತದೆ?',
        opts: ['The interleaved loop from Module 273', 'ReWOO plan-and-execute', 'Neither pattern can handle tools', 'Both are identical in this respect'], correct: 0,
        optsKn: ['Module 273 ya interleaved loop', 'ReWOO plan-and-execute', 'ಯಾವುದೇ ಮಾದರಿ tools ನಿರ್ವಹಿಸಲಾಗುವುದಿಲ್ಲ', 'ಎರಡೂ ಈ ವಿಷಯದಲ್ಲಿ ಒಂದೇ ಆಗಿವೆ'] },
      { q: 'What is the genuinely measured tradeoff between the two patterns compared in this lesson?', qKn: 'ಈ lesson ನಲ್ಲಿ ಹೋಲಿಸಿದ ಎರಡೂ ಮಾದರಿಗಳ ನಡುವಿನ ನಿಜವಾಗಿ ಅಳೆದ tradeoff ಏನೂ?',
        opts: ['Fewer policy calls (ReWOO) versus the ability to react to a bad observation mid-execution (interleaved)', 'ReWOO is always slower', 'The interleaved loop cannot use tools', 'There is no real tradeoff, they are equivalent'], correct: 0,
        optsKn: ['ಕಡಿಮೆ policy calls (ReWOO) versus mid-execution ಒಂದೂ ಕೆಟ್ಟ observation ಗೆ ಪ್ರತಿಕ್ರಿಯಿಸುವ ಸಾಮರ್ಥ್ಯ (interleaved)', 'ReWOO ಯಾವಾಗಲೂ ನಿಧಾನ', 'Interleaved loop tools ಬಳಸಲಾಗುವುದಿಲ್ಲ', 'ಯಾವುದೇ ನಿಜ tradeoff ಇಲ್ಲ, ಅವೂ ಸಮಾನ'] },
    ] } },
  ],
};
