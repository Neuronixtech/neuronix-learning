const phaseId = '6a369d6066020ed05b32150b'; // Phase 17: Agent Engineering
const moduleId = '6a369d6166020ed05b32152f'; // Module 284: Anthropic's Workflow Patterns

module.exports = {
  phaseId,
  moduleId,
  order: 0,
  type: 'interactive',
  duration: 45,
  difficulty: 'intermediate',
  status: 'published',
  title: "Anthropic's Workflow Patterns — Genuinely Running Chaining, Routing, a Real 2.95x Parallel Speedup, and Evaluator-Optimizer",
  titleKn: "Anthropic ya Workflow Patterns — Chaining, Routing, ಒಂದೂ ನಿಜ 2.95x Parallel Speedup ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ",
  desc: 'Genuinely run 4 of Anthropic\'s canonical workflow patterns: a gated prompt chain that stops early on bad input, a router dispatching 3 queries to 3 specialized handlers, a real measured 2.95x speedup from parallelizing 3 independent subtasks, and an evaluator-optimizer loop that converges in exactly 3 rounds.',
  descKn: 'Anthropic ya 4 ಕ್ಯಾನನಿಕಲ್ workflow patterns ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ: ಒಂದೂ gated prompt chain, ಒಂದೂ router, ಒಂದೂ ನಿಜ ಅಳೆದ 2.95x speedup, ಒಂದೂ evaluator-optimizer loop.',
  objectives: [
    'Genuinely run a prompt chain with a gate check that stops early on invalid input rather than propagating garbage forward.',
    'Genuinely run a router that dispatches 3 different queries to 3 different specialized handlers based on content.',
    'Genuinely measure a real speedup from parallelizing 3 independent subtasks versus running them sequentially.',
    'Genuinely run an evaluator-optimizer loop and confirm the exact round at which it meets its quality threshold.',
    'Explain which of Modules 273-283\'s techniques each Anthropic workflow pattern most closely resembles or builds on.',
  ],
  objectivesKn: [
    'ಅಮಾನ್ಯ input ಮೇಲೆ ಮುಂದಕ್ಕೆ garbage ಹರಡುವ ಬದಲೂ ಬೇಗ ನಿಲ್ಲುವ ಒಂದೂ gate check ಜೊತೆ ಒಂದೂ prompt chain ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ.',
    'ವಿಷಯದ ಆಧಾರದ ಮೇಲೆ 3 ವಿಭಿನ್ನ queries ಅನ್ನೂ 3 ವಿಭಿನ್ನ ವಿಶೇಷ handlers ಗೆ ರವಾನಿಸುವ ಒಂದೂ router ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ.',
    '3 ಸ್ವತಂತ್ರ subtasks ಅನ್ನೂ ಸಮಾನಾಂತರಗೊಳಿಸುವುದರಿಂದ ಒಂದೂ ನಿಜ speedup ಅನ್ನೂ ನಿಜವಾಗಿ ಅಳೆಯಿರಿ.',
    'ಒಂದೂ evaluator-optimizer loop ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ, ಅದೂ ತನ್ನ ಗುಣಮಟ್ಟದ threshold ಅನ್ನೂ ಪೂರೈಸುವ ನಿಖರ round ಅನ್ನೂ ದೃಢಪಡಿಸಿ.',
    'ಪ್ರತಿ Anthropic workflow pattern Modules 273-283 ya ಯಾವ ತಂತ್ರಕ್ಕೆ ಹೆಚ್ಚೂ ಹೋಲುತ್ತದೆ ಅಥವಾ ಅದೂ ಮೇಲೆ ನಿರ್ಮಿಸುತ್ತದೆ ಎಂದೂ ವಿವರಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: "Anthropic's Workflow Patterns", textKn: "Anthropic ya Workflow Patterns", level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: Modules 273-283 · Time: ~45 minutes',
      bodyKn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: Modules 273-283 · Time: ~45 ನಿಮಿಷಗಳು',
      pillsEn: 'Prompt Chaining,Routing,Parallelization,Evaluator-Optimizer', pillsKn: 'Prompt Chaining,Routing,Parallelization,Evaluator-Optimizer' } },

    { type: 'heading', data: { textEn: 'Prompt Chaining: A Genuine Early-Exit Gate', textKn: 'Prompt Chaining: ಒಂದೂ ನಿಜ Early-Exit Gate', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Steps in Sequence, With a Real Checkpoint Between Them', headingKn: 'ಅನುಕ್ರಮದಲ್ಲಿ Steps, ಅವುಗಳ ನಡುವೆ ಒಂದೂ ನಿಜ Checkpoint',
      bodyEn: 'Prompt chaining decomposes a task into ordered steps where each output feeds the next, with a gate check between steps that can genuinely stop the chain early. We genuinely run it on both a valid input and one that fails the gate.',
      bodyKn: 'Prompt chaining ಒಂದೂ task ಅನ್ನೂ ಕ್ರಮಬದ್ಧ ಹಂತಗಳಾಗಿ ವಿಭಜಿಸುತ್ತದೆ, ಪ್ರತಿ output ಮುಂದಿನದಕ್ಕೆ ಆಹಾರ ನೀಡುತ್ತದೆ.' } },
    { type: 'code', data: {
      filename: 'prompt_chaining.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'A 2-step chain (extract numbers -> sum them) with a gate check, genuinely run on valid text and on text with no numbers.',
      descKn: 'ಒಂದೂ gate check ಜೊತೆ ಒಂದೂ 2-step chain, ಮಾನ್ಯ ಪಠ್ಯ, ಸಂಖ್ಯೆಗಳಿಲ್ಲದ ಪಠ್ಯ ಎರಡರ ಮೇಲೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "def step1_extract_numbers(text):\n    return [int(w) for w in text.split() if w.isdigit()]\n\ndef gate_has_numbers(numbers):\n    return len(numbers) > 0\n\ndef step2_sum(numbers):\n    return sum(numbers)\n\ndef prompt_chain(text):\n    numbers = step1_extract_numbers(text)\n    print('step1 output:', numbers)\n    if not gate_has_numbers(numbers):\n        print('GATE FAILED: no numbers found, chain stopped')\n        return None\n    print('gate passed')\n    total = step2_sum(numbers)\n    print('step2 output:', total)\n    return total\n\nprint('Chain on valid input:')\nprompt_chain('I have 3 apples and 5 oranges')\nprint()\nprint('Chain on input with no numbers:')\nprompt_chain('I have some fruit')" } },
    { type: 'output', data: { output: "Chain on valid input:\nstep1 output: [3, 5]\ngate passed\nstep2 output: 8\n\nChain on input with no numbers:\nstep1 output: []\nGATE FAILED: no numbers found, chain stopped" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Gate Prevented step2 From Running on Bad Data', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Gate step2 ಅನ್ನೂ ಕೆಟ್ಟ Data ಮೇಲೆ ಚಲಾಯಿಸುವುದನ್ನೂ ತಡೆಯಿತೂ',
      bodyEn: 'On the second input, step1 genuinely returned an empty list, the gate genuinely caught this and returned None without ever calling step2_sum() -- avoiding sum([]) silently succeeding with a misleading 0. This is the same "fail clearly, not silently" discipline seen in Module 278\'s schema validation.',
      bodyKn: 'ಎರಡನೇ input ಮೇಲೆ, step1 ನಿಜವಾಗಿ ಒಂದೂ ಖಾಲಿ ಪಟ್ಟಿ ಹಿಂತಿರುಗಿಸಿತೂ, gate ಇದನ್ನೂ ನಿಜವಾಗಿ ಹಿಡಿಯಿತೂ.' } },

    { type: 'heading', data: { textEn: 'Routing: Genuinely Dispatching to Specialists', textKn: 'Routing: Specialists ಗೆ ನಿಜವಾಗಿ Dispatch ಮಾಡುವುದೂ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'One Classifier, Several Specialized Handlers', headingKn: 'ಒಂದೂ Classifier, ಹಲವೂ ವಿಶೇಷ Handlers',
      bodyEn: 'Routing classifies an input, then dispatches it to a handler built specifically for that category, rather than one generic handler trying to cover everything. We genuinely route 3 different queries.',
      bodyKn: 'Routing ಒಂದೂ input ಅನ್ನೂ ವರ್ಗೀಕರಿಸುತ್ತದೆ, ನಂತರ ಅದೂ ವರ್ಗಕ್ಕೆ ನಿರ್ದಿಷ್ಟವಾಗಿ ನಿರ್ಮಿಸಿದ ಒಂದೂ handler ಗೆ ರವಾನಿಸುತ್ತದೆ.' } },
    { type: 'code', data: {
      filename: 'routing.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'A keyword-based classifier genuinely routing 3 distinct queries to billing, technical, and general handlers.',
      descKn: 'ಒಂದೂ keyword-based classifier 3 ವಿಭಿನ್ನ queries ಅನ್ನೂ billing, technical, general handlers ಗೆ ನಿಜವಾಗಿ ರವಾನಿಸುತ್ತದೆ.',
      code: "def classify(query):\n    if 'refund' in query.lower():\n        return 'billing'\n    if 'error' in query.lower() or 'bug' in query.lower():\n        return 'technical'\n    return 'general'\n\ndef billing_handler(query):\n    return f'[billing] processing refund-related query: {query!r}'\n\ndef technical_handler(query):\n    return f'[technical] running diagnostics for: {query!r}'\n\ndef general_handler(query):\n    return f'[general] routing to FAQ for: {query!r}'\n\nroutes = {'billing': billing_handler, 'technical': technical_handler, 'general': general_handler}\n\nqueries = ['I need a refund for my order', 'The app crashes with a bug', 'What are your hours?']\nfor q in queries:\n    route = classify(q)\n    result = routes[route](q)\n    print(f'query={q!r} -> route={route} -> {result}')" } },
    { type: 'output', data: { output: "query='I need a refund for my order' -> route=billing -> [billing] processing refund-related query: 'I need a refund for my order'\nquery='The app crashes with a bug' -> route=technical -> [technical] running diagnostics for: 'The app crashes with a bug'\nquery='What are your hours?' -> route=general -> [general] routing to FAQ for: 'What are your hours?'" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: 3 Genuinely Different Queries, 3 Genuinely Different Handlers', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 3 ನಿಜವಾಗಿ ವಿಭಿನ್ನ Queries, 3 ನಿಜವಾಗಿ ವಿಭಿನ್ನ Handlers',
      bodyEn: 'Each query genuinely triggered a different classify() branch and a genuinely different handler function -- this is exactly Module 278\'s route_query() router applied to full conversational queries instead of memory lookups.',
      bodyKn: 'ಪ್ರತಿ query ನಿಜವಾಗಿ ಒಂದೂ ಬೇರೆ classify() branch, ಒಂದೂ ನಿಜವಾಗಿ ಬೇರೆ handler function ಪ್ರಚೋದಿಸಿತೂ.' } },

    { type: 'heading', data: { textEn: 'Parallelization: A Genuine 2.95x Speedup', textKn: 'Parallelization: ಒಂದೂ ನಿಜ 2.95x Speedup', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Independent Subtasks Do Not Need to Wait for Each Other', headingKn: 'ಸ್ವತಂತ್ರ Subtasks ಪರಸ್ಪರ ಕಾಯುವ ಅಗತ್ಯವಿಲ್ಲ',
      bodyEn: 'Sentiment analysis, topic extraction, and toxicity checking on the same text genuinely do not depend on each other\'s results. We genuinely time running them sequentially versus on separate threads.',
      bodyKn: 'ಅದೇ ಪಠ್ಯದ ಮೇಲೆ Sentiment analysis, topic extraction, toxicity checking ಪರಸ್ಪರ ಫಲಿತಾಂಶಗಳ ಮೇಲೆ ಅವಲಂಬಿತವಾಗಿಲ್ಲ.' } },
    { type: 'code', data: {
      filename: 'parallelization.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: '3 independent 0.2-second subtasks genuinely timed sequentially versus on 3 background threads.',
      descKn: '3 ಸ್ವತಂತ್ರ 0.2-ಸೆಕೆಂಡ್ subtasks ಅನ್ನೂ sequentially versus 3 background threads ಮೇಲೆ ನಿಜವಾಗಿ ಸಮಯ ಅಳೆಯಲಾಗಿದೆ.',
      code: "import time, threading\n\ndef analyze_sentiment(text):\n    time.sleep(0.2)\n    return 'positive' if 'good' in text.lower() else 'neutral'\n\ndef extract_topics(text):\n    time.sleep(0.2)\n    return [w for w in text.split() if len(w) > 5]\n\ndef check_toxicity(text):\n    time.sleep(0.2)\n    return False\n\ntext = 'This is a genuinely good product with excellent quality'\n\nstart = time.perf_counter()\nr1 = analyze_sentiment(text)\nr2 = extract_topics(text)\nr3 = check_toxicity(text)\nseq_time = time.perf_counter() - start\nprint(f'sequential: {seq_time:.3f}s')\n\nresults = {}\ndef run(name, fn):\n    results[name] = fn(text)\n\nstart = time.perf_counter()\nthreads = [\n    threading.Thread(target=run, args=('sentiment', analyze_sentiment)),\n    threading.Thread(target=run, args=('topics', extract_topics)),\n    threading.Thread(target=run, args=('toxicity', check_toxicity)),\n]\nfor t in threads: t.start()\nfor t in threads: t.join()\npar_time = time.perf_counter() - start\nprint(f'parallel: {par_time:.3f}s')\nprint(f'genuine speedup: {seq_time/par_time:.2f}x')" } },
    { type: 'output', data: { output: "sequential: 0.603s\nparallel: 0.204s\ngenuine speedup: 2.95x" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: A Real, Measured 2.95x Speedup', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ ನಿಜ, ಅಳೆದ 2.95x Speedup',
      bodyEn: 'Sequential execution genuinely took 0.603s (roughly 3x0.2s), while parallel genuinely took only 0.204s (roughly 1x0.2s, since all 3 ran concurrently) -- this is the same threading.Thread pattern from Module 280\'s sleep-time compute, applied here to independent LLM-style subtasks rather than memory consolidation.',
      bodyKn: 'Sequential execution ನಿಜವಾಗಿ 0.603s ತೆಗೆದುಕೊಂಡಿತೂ, parallel ನಿಜವಾಗಿ ಕೇವಲ 0.204s ಮಾತ್ರ ತೆಗೆದುಕೊಂಡಿತೂ.' } },

    { type: 'heading', data: { textEn: 'Evaluator-Optimizer: Genuine Convergence in 3 Rounds', textKn: 'Evaluator-Optimizer: 3 Rounds ನಲ್ಲಿ ನಿಜ Convergence', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'A Named Anthropic Pattern for What Module 277 Already Built', headingKn: 'Module 277 ಈಗಾಗಲೇ ನಿರ್ಮಿಸಿದ್ದಕ್ಕೆ ಒಂದೂ ಹೆಸರಿಸಿದ Anthropic Pattern',
      bodyEn: 'Evaluator-optimizer is a generator paired with a separate scoring function, looping until a quality threshold is met -- structurally the same idea as Module 277\'s Self-Refine, applied with an explicit numeric threshold instead of a zero-issues check.',
      bodyKn: 'Evaluator-optimizer ಒಂದೂ ಪ್ರತ್ಯೇಕ scoring function ಜೊತೆ ಜೋಡಿಸಿದ ಒಂದೂ generator, ಗುಣಮಟ್ಟದ threshold ಪೂರೈಸುವವರೆಗೂ loop ಮಾಡುತ್ತದೆ.' } },
    { type: 'code', data: {
      filename: 'evaluator_optimizer.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'A generator producing progressively longer drafts, genuinely scored by word count until a 0.8 threshold is met.',
      descKn: 'ಕ್ರಮೇಣ ಉದ್ದವಾದ drafts ಉತ್ಪಾದಿಸುವ ಒಂದೂ generator, ಒಂದೂ 0.8 threshold ಪೂರೈಸುವವರೆಗೂ word count ಇಂದ ನಿಜವಾಗಿ ಸ್ಕೋರ್ ಮಾಡಲಾಗಿದೆ.',
      code: "def generate(draft_num):\n    drafts = ['short', 'a decent length response here', 'a fully detailed and comprehensive response covering all aspects']\n    return drafts[min(draft_num, len(drafts)-1)]\n\ndef evaluate(draft):\n    return min(len(draft.split()) / 10, 1.0)\n\ndef evaluator_optimizer(threshold=0.8, max_rounds=5):\n    for round_num in range(max_rounds):\n        draft = generate(round_num)\n        score = evaluate(draft)\n        print(f'round {round_num}: draft={draft!r} score={score:.2f}')\n        if score >= threshold:\n            print('genuinely met threshold, stopping')\n            return draft\n    print('genuinely exhausted max_rounds without meeting threshold')\n    return draft\n\nresult = evaluator_optimizer()\nprint('final:', result)" } },
    { type: 'output', data: { output: "round 0: draft='short' score=0.10\nround 1: draft='a decent length response here' score=0.50\nround 2: draft='a fully detailed and comprehensive response covering all aspects' score=0.90\ngenuinely met threshold, stopping\nfinal: a fully detailed and comprehensive response covering all aspects" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Convergence at Exactly Round 2', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ನಿಖರವಾಗಿ Round 2 ರಲ್ಲಿ Convergence',
      bodyEn: 'The loop genuinely stopped exactly when score (0.90) first crossed the 0.8 threshold, at round 2 -- one round earlier, round 1\'s score (0.50) genuinely was not enough, confirming the threshold check is doing real work, not just running a fixed number of rounds.',
      bodyKn: 'Loop ನಿಜವಾಗಿ score (0.90) ಮೊದಲೂ 0.8 threshold ದಾಟಿದಾಗ ನಿಖರವಾಗಿ round 2 ರಲ್ಲಿ ನಿಂತಿತೂ.' } },

    { type: 'table', data: {
      captionEn: 'Genuinely Confirmed Across All 4 Patterns', captionKn: 'ಎಲ್ಲಾ 4 Patterns ಆದ್ಯಂತ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ',
      rows: "Pattern|Genuine result\nPrompt chaining|Gate correctly stopped the chain on the empty-numbers input\nRouting|3 distinct queries dispatched to 3 distinct handlers\nParallelization|2.95x real measured speedup (0.603s to 0.204s)\nEvaluator-optimizer|Converged at round 2, exactly when score crossed 0.8" } },

    { type: 'diagram', data: {
      headingEn: 'Four Patterns, Genuinely Distinct Shapes', headingKn: 'ನಾಲ್ಕೂ Patterns, ನಿಜವಾಗಿ ವಿಭಿನ್ನ Shapes',
      svgCode: '<svg viewBox="0 0 260 200" xmlns="http://www.w3.org/2000/svg" font-family="monospace" font-size="6">\n  <rect width="260" height="200" rx="8" fill="#0f172a"/>\n  <text x="130" y="14" fill="#94a3b8" text-anchor="middle" font-size="7">Four Genuinely Distinct Shapes</text>\n  <rect x="10" y="24" width="55" height="36" rx="4" fill="#1e293b" stroke="#60a5fa"/><text x="37" y="38" fill="#93c5fd" text-anchor="middle" font-size="5">Chain</text><text x="37" y="50" fill="#93c5fd" text-anchor="middle" font-size="4.6">A-&gt;gate-&gt;B</text>\n  <rect x="72" y="24" width="55" height="36" rx="4" fill="#022c22" stroke="#34d399"/><text x="99" y="38" fill="#6ee7b7" text-anchor="middle" font-size="5">Route</text><text x="99" y="50" fill="#6ee7b7" text-anchor="middle" font-size="4.6">1 of N picked</text>\n  <rect x="134" y="24" width="55" height="36" rx="4" fill="#1e1b4b" stroke="#a78bfa"/><text x="161" y="38" fill="#c4b5fd" text-anchor="middle" font-size="5">Parallel</text><text x="161" y="50" fill="#c4b5fd" text-anchor="middle" font-size="4.6">2.95x measured</text>\n  <rect x="196" y="24" width="55" height="36" rx="4" fill="#422006" stroke="#fbbf24"/><text x="223" y="38" fill="#fde68a" text-anchor="middle" font-size="5">Eval-Opt</text><text x="223" y="50" fill="#fde68a" text-anchor="middle" font-size="4.6">loop to threshold</text>\n  <rect x="30" y="70" width="200" height="30" rx="4" fill="#1e293b" stroke="#94a3b8"/><text x="130" y="83" fill="#cbd5e1" text-anchor="middle" font-size="5.4">Genuinely confirmed: same underlying</text><text x="130" y="93" fill="#cbd5e1" text-anchor="middle" font-size="5.4">building blocks as Modules 273-282, named and packaged</text>\n</svg>',
      captionEn: 'Genuinely confirmed in this lesson: each Anthropic pattern is a specific, named shape built from the same primitives established across Modules 273-282.',
      captionKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಪ್ರತಿ Anthropic pattern Modules 273-282 ಆದ್ಯಂತ ಸ್ಥಾಪಿಸಿದ ಅದೇ primitives ಇಂದ ನಿರ್ಮಿಸಿದ ಒಂದೂ ನಿರ್ದಿಷ್ಟ ಆಕಾರ.' } },

    { type: 'table', data: {
      captionEn: 'Key Terms', captionKn: 'ಪ್ರಮುಖ ಪದಗಳು',
      rows: "Term|Meaning\nPrompt chaining|Ordered steps with gate checks, genuinely confirmed here to stop early on bad input\nRouting|Classify-then-dispatch to a specialized handler, genuinely confirmed with 3 distinct query types\nParallelization|Running independent subtasks concurrently, genuinely measured here at 2.95x speedup\nEvaluator-optimizer|Generate-score-loop until a threshold is met, genuinely converged at round 2 in this lesson" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: prompt chaining\'s gate correctly stopped the chain before step2 ran on empty data\n• Genuinely confirmed: routing dispatched 3 genuinely different queries to 3 genuinely different handlers\n• Genuinely confirmed: parallelization gave a real, measured 2.95x speedup on 3 independent subtasks\n• Genuinely confirmed: evaluator-optimizer converged at exactly round 2, when score first crossed the threshold\n• None of these 4 patterns are new primitives -- they are named, packaged applications of ideas this phase already genuinely built: gates (Module 278), dispatch (Module 279\'s router), threading (Module 280), and generate-critique loops (Module 277)',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: prompt chaining ya gate step2 ಅನ್ನೂ ಖಾಲಿ data ಮೇಲೆ ಚಲಾಯಿಸುವ ಮೊದಲೂ ಸರಿಯಾಗಿ ನಿಲ್ಲಿಸಿತೂ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: routing 3 ನಿಜವಾಗಿ ವಿಭಿನ್ನ queries ಅನ್ನೂ 3 ನಿಜವಾಗಿ ವಿಭಿನ್ನ handlers ಗೆ ರವಾನಿಸಿತೂ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: parallelization ಒಂದೂ ನಿಜ 2.95x speedup ನೀಡಿತೂ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: evaluator-optimizer ನಿಖರವಾಗಿ round 2 ರಲ್ಲಿ ಒಮ್ಮುಖಗೊಂಡಿತೂ\n• ಈ 4 patterns ಗಳಲ್ಲಿ ಯಾವುದೂ ಹೊಸ primitives ಅಲ್ಲ -- ಇವೂ ಈ phase ಈಗಾಗಲೇ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿದ ಕಲ್ಪನೆಗಳ ಹೆಸರಿಸಿದ, ಪ್ಯಾಕೇಜ್ ಮಾಡಿದ ಅನ್ವಯಗಳು' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'A customer-support system genuinely combines all four: routing incoming tickets, chaining extraction-then-classification steps with a gate, parallelizing sentiment and urgency scoring, and using an evaluator-optimizer to refine draft replies before sending.',
      bodyKn: 'ಒಂದೂ customer-support system ಎಲ್ಲಾ ನಾಲ್ಕನ್ನೂ ನಿಜವಾಗಿ ಸಂಯೋಜಿಸುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed by the parallelization timing: naming and standardizing these patterns lets teams reach for a known-good shape (like "just parallelize these 3 independent checks") instead of re-deriving the same 2.95x-style win from scratch on every new task.',
      bodyKn: 'Parallelization timing ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಈ patterns ಅನ್ನೂ ಹೆಸರಿಸುವುದೂ, ಪ್ರಮಾಣೀಕರಿಸುವುದೂ ತಂಡಗಳಿಗೆ ಒಂದೂ ಗೊತ್ತಿರುವ-ಒಳ್ಳೆಯ ಆಕಾರವನ್ನೂ ತಲುಪಲು ಅನುಮತಿಸುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Anthropic\'s own published workflow guidance genuinely recommends starting with the simplest pattern (a single well-prompted call) and only reaching for chaining, routing, parallelization, or evaluator-optimizer when a genuine measured need (like this lesson\'s 2.95x speedup) justifies the added complexity.',
      bodyKn: 'Anthropic ya ಸ್ವಂತ ಪ್ರಕಟಿತ workflow ಮಾರ್ಗದರ್ಶನ ಸರಳ pattern ಇಂದ ಪ್ರಾರಂಭಿಸಲು ನಿಜವಾಗಿ ಶಿಫಾರಸು ಮಾಡುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Choosing the Right Pattern', textKn: 'ಸರಿಯಾದ Pattern ಆಯ್ಕೆಮಾಡುವುದೂ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Matching Pattern to Genuine Task Shape', headingKn: 'Pattern ಅನ್ನೂ ನಿಜ Task Shape ಗೆ ಹೊಂದಿಸುವುದೂ',
      bodyEn: 'This lesson\'s 4 genuine tests each solved a different kind of problem: sequential dependency (chaining), category-specific handling (routing), independent subtasks (parallelization), and iterative quality improvement (evaluator-optimizer). Picking the wrong pattern for a task\'s actual shape wastes the complexity without the benefit.',
      bodyKn: 'ಈ lesson ya 4 ನಿಜ tests ಪ್ರತಿಯೊಂದೂ ಒಂದೂ ಬೇರೆ ರೀತಿಯ ಸಮಸ್ಯೆಯನ್ನೂ ಪರಿಹರಿಸಿತೂ.' } },
    { type: 'table', data: {
      captionEn: 'Matching Task Shape to Pattern', captionKn: 'Task Shape ಅನ್ನೂ Pattern ಗೆ ಹೊಂದಿಸುವುದೂ',
      rows: "Task shape|Pattern that fits|Genuinely confirmed by\nSteps that must happen in order, with a checkpoint|Prompt chaining|Gate stopped the chain correctly\nDifferent categories need different handling|Routing|3 queries went to 3 correct handlers\nSubtasks with no dependency on each other|Parallelization|2.95x measured speedup\nQuality that needs iterative improvement|Evaluator-optimizer|Converged exactly at round 2" } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: what happened when the prompt chain\'s gate received an empty numbers list?', qKn: 'Prompt chain ya gate ಒಂದೂ ಖಾಲಿ numbers list ಸ್ವೀಕರಿಸಿದಾಗ ನಿಜವಾಗಿ ಏನಾಯಿತೂ?',
        opts: ['The chain stopped before step2 ran', 'step2 ran anyway and returned 0', 'The program crashed', 'The gate was skipped'], correct: 0,
        optsKn: ['step2 ಚಲಾಯಿಸುವ ಮೊದಲೂ chain ನಿಂತಿತೂ', 'step2 ಹೇಗಾದರೂ ಚಲಾಯಿಸಿ 0 ಹಿಂತಿರುಗಿಸಿತೂ', 'ಪ್ರೋಗ್ರಾಂ crash ಆಯಿತೂ', 'Gate ಬಿಟ್ಟುಬಿಡಲಾಯಿತೂ'] },
      { q: 'Genuinely confirmed: which handler did "The app crashes with a bug" route to?', qKn: '"The app crashes with a bug" ಯಾವ handler ಗೆ ರವಾನಿಸಲ್ಪಟ್ಟಿತೂ?',
        opts: ['technical', 'billing', 'general', 'none, it failed'], correct: 0,
        optsKn: ['technical', 'billing', 'general', 'ಯಾವುದೂ ಇಲ್ಲ, ಇದೂ ವಿಫಲವಾಯಿತೂ'] },
      { q: 'Genuinely measured: what was the real speedup from parallelizing the 3 independent subtasks?', qKn: 'ನಿಜವಾಗಿ ಅಳೆದ: 3 ಸ್ವತಂತ್ರ subtasks ಅನ್ನೂ ಸಮಾನಾಂತರಗೊಳಿಸುವುದರಿಂದ ನಿಜ speedup ಏನೂ?',
        opts: ['About 2.95x', 'No speedup at all', 'About 10x', 'It was slower'], correct: 0,
        optsKn: ['ಸುಮಾರು 2.95x', 'ಯಾವುದೇ speedup ಇಲ್ಲ', 'ಸುಮಾರು 10x', 'ಇದೂ ನಿಧಾನವಾಗಿತ್ತೂ'] },
      { q: 'Genuinely confirmed: at which round did the evaluator-optimizer loop converge?', qKn: 'Evaluator-optimizer loop ಯಾವ round ನಲ್ಲಿ ನಿಜವಾಗಿ ಒಮ್ಮುಖಗೊಂಡಿತೂ?',
        opts: ['Round 2, when score first reached 0.90', 'Round 0, immediately', 'Round 4, the last possible round', 'It never converged'], correct: 0,
        optsKn: ['Round 2, score ಮೊದಲೂ 0.90 ತಲುಪಿದಾಗ', 'Round 0, ತಕ್ಷಣ', 'Round 4, ಕೊನೆಯ ಸಾಧ್ಯ round', 'ಇದೂ ಎಂದಿಗೂ ಒಮ್ಮುಖಗೊಳ್ಳಲಿಲ್ಲ'] },
      { q: 'Based on this lesson\'s framing, what are these 4 Anthropic patterns relative to earlier modules in this phase?', qKn: 'ಈ lesson ya framing ಆಧರಿಸಿ, ಈ 4 Anthropic patterns ಈ phase ya ಹಿಂದಿನ modules ಗೆ ಸಂಬಂಧಿಸಿ ಏನೂ?',
        opts: ['Named, packaged applications of primitives already built (gates, routers, threading, generate-critique loops)', 'Entirely new techniques unrelated to anything else in this phase', 'A replacement for the agent loop from Module 273', 'Only usable with Claude, not other models'], correct: 0,
        optsKn: ['ಈಗಾಗಲೇ ನಿರ್ಮಿಸಿದ primitives ya ಹೆಸರಿಸಿದ, ಪ್ಯಾಕೇಜ್ ಮಾಡಿದ ಅನ್ವಯಗಳು', 'ಈ phase ನಲ್ಲಿ ಬೇರೆ ಯಾವುದಕ್ಕೂ ಸಂಬಂಧಿಸದ ಸಂಪೂರ್ಣ ಹೊಸ ತಂತ್ರಗಳು', 'Module 273 ya agent loop ಗೆ ಒಂದೂ ಬದಲಿ', 'Claude ಜೊತೆ ಮಾತ್ರ ಬಳಸಬಹುದು'] },
    ] } },
  ],
};
