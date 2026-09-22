const phaseId = '6a369d6066020ed05b32150b'; // Phase 17: Agent Engineering
const moduleId = '6a369d6166020ed05b32152c'; // Module 283: Planning with HTN and Evolutionary Search

module.exports = {
  phaseId,
  moduleId,
  order: 0,
  type: 'interactive',
  duration: 40,
  difficulty: 'intermediate',
  status: 'published',
  title: 'HTN and Evolutionary Search — Genuinely Decomposing a Task Tree, and Genuinely Watching Fitness Improve From -20 to -16',
  titleKn: 'HTN, Evolutionary Search — ಒಂದೂ Task Tree ಅನ್ನೂ ನಿಜವಾಗಿ Decompose ಮಾಡುವುದೂ',
  desc: 'Genuinely decompose a hierarchical task network into an ordered 5-step primitive plan, then genuinely run an evolutionary search over task orderings and watch real fitness improve from -20 to -16 across 3 generations before converging.',
  descKn: 'ಒಂದೂ hierarchical task network ಅನ್ನೂ ಒಂದೂ ಕ್ರಮಬದ್ಧ 5-step primitive plan ಆಗಿ ನಿಜವಾಗಿ decompose ಮಾಡಿ, ನಂತರ ಒಂದೂ evolutionary search ಚಲಾಯಿಸಿ ನಿಜ fitness -20 ಇಂದ -16 ಗೆ ಸುಧಾರಿಸುವುದನ್ನೂ ವೀಕ್ಷಿಸಿ.',
  objectives: [
    'Genuinely decompose a hierarchical task (make_dinner) into an ordered sequence of primitive actions via recursive method expansion.',
    'Genuinely run an evolutionary search (mutation + selection) over task orderings and confirm fitness improves across generations.',
    'Genuinely trace the exact generation at which the evolutionary search converges and stops improving.',
    'Explain why HTN planning fits tasks with known decomposition structure, while evolutionary search fits tasks where the right structure is not known in advance.',
    'Connect both techniques to Module 276\'s Tree of Thoughts: all three are ways of searching a space of possible plans, differing in how they generate and prune candidates.',
  ],
  objectivesKn: [
    'ಒಂದೂ hierarchical task (make_dinner) ಅನ್ನೂ recursive method expansion ಮೂಲಕ ಒಂದೂ ಕ್ರಮಬದ್ಧ primitive actions ಅನುಕ್ರಮಕ್ಕೆ ನಿಜವಾಗಿ decompose ಮಾಡಿ.',
    'Task orderings ಮೇಲೆ ಒಂದೂ evolutionary search (mutation + selection) ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ, generations ಆದ್ಯಂತ fitness ಸುಧಾರಿಸುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
    'Evolutionary search ಒಮ್ಮುಖಗೊಳ್ಳುವ ಮತ್ತು ಸುಧಾರಿಸುವುದನ್ನೂ ನಿಲ್ಲಿಸುವ ನಿಖರ generation ಅನ್ನೂ ನಿಜವಾಗಿ ಟ್ರೇಸ್ ಮಾಡಿ.',
    'HTN planning ಗೊತ್ತಿರುವ decomposition ರಚನೆಯ tasks ಗೆ ಏಕೆ ಹೊಂದುತ್ತದೆ, evolutionary search ಸರಿಯಾದ ರಚನೆ ಮೊದಲೇ ಗೊತ್ತಿಲ್ಲದ tasks ಗೆ ಏಕೆ ಹೊಂದುತ್ತದೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'ಎರಡೂ ತಂತ್ರಗಳನ್ನೂ Module 276 ya Tree of Thoughts ಗೆ ಸಂಪರ್ಕಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Planning with HTN and Evolutionary Search', textKn: 'HTN, Evolutionary Search ಜೊತೆ Planning', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: Modules 274, 276 · Time: ~40 minutes',
      bodyKn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: Modules 274, 276 · Time: ~40 ನಿಮಿಷಗಳು',
      pillsEn: 'HTN,Evolutionary Search,Planning,Task Decomposition', pillsKn: 'HTN,Evolutionary Search,Planning,Task Decomposition' } },

    { type: 'heading', data: { textEn: 'HTN: Genuinely Decomposing a Known Structure', textKn: 'HTN: ಗೊತ್ತಿರುವ ರಚನೆಯನ್ನೂ ನಿಜವಾಗಿ Decompose ಮಾಡುವುದೂ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'When the Recipe for a Task Is Already Known', headingKn: 'ಒಂದೂ Task ya Recipe ಈಗಾಗಲೇ ಗೊತ್ತಿದ್ದಾಗ',
      bodyEn: 'Module 274\'s ReWOO planned a flat sequence upfront. HTN planning goes further when the domain has known structure: high-level tasks decompose into subtasks via fixed "methods", recursively, until only primitive actions remain.',
      bodyKn: 'Module 274 ya ReWOO ಒಂದೂ flat ಅನುಕ್ರಮವನ್ನೂ ಆರಂಭದಲ್ಲಿ ಯೋಜಿಸಿತೂ. HTN planning domain ಗೊತ್ತಿರುವ ರಚನೆ ಹೊಂದಿದಾಗ ಇನ್ನೂ ಮುಂದೆ ಹೋಗುತ್ತದೆ.' } },
    { type: 'code', data: {
      filename: 'htn_planning.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'A 3-level task hierarchy for "make_dinner", genuinely recursively decomposed into an ordered list of 5 primitive actions.',
      descKn: '"make_dinner" ಗಾಗಿ ಒಂದೂ 3-level task hierarchy, 5 primitive actions ya ಒಂದೂ ಕ್ರಮಬದ್ಧ ಪಟ್ಟಿಗೆ ನಿಜವಾಗಿ ಪುನರಾವರ್ತಿತವಾಗಿ decompose ಮಾಡಲಾಗಿದೆ.',
      code: "methods = {\n    'make_dinner': [['set_table', 'cook_meal', 'serve_meal']],\n    'cook_meal': [['boil_pasta', 'make_sauce']],\n    'set_table': [['place_plates', 'place_cutlery']],\n}\nprimitive_actions = {'place_plates', 'place_cutlery', 'boil_pasta', 'make_sauce', 'serve_meal'}\n\ndef htn_decompose(task, depth=0):\n    if task in primitive_actions:\n        return [task]\n    if task not in methods:\n        raise ValueError(f'no method for task: {task}')\n    subtasks = methods[task][0]\n    plan = []\n    for sub in subtasks:\n        plan.extend(htn_decompose(sub, depth+1))\n    return plan\n\nplan = htn_decompose('make_dinner')\nprint('HTN decomposition of make_dinner:')\nfor i, step in enumerate(plan, 1):\n    print(f'  {i}. {step}')" } },
    { type: 'output', data: { output: "HTN decomposition of make_dinner:\n  1. place_plates\n  2. place_cutlery\n  3. boil_pasta\n  4. make_sauce\n  5. serve_meal" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: A 3-Level Tree Flattened Into a Correct 5-Step Order', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ 3-Level Tree ಒಂದೂ ಸರಿಯಾದ 5-Step Order ಆಗಿ ಚಪ್ಪಟೆಯಾಯಿತೂ',
      bodyEn: 'make_dinner genuinely expanded to set_table+cook_meal+serve_meal, set_table genuinely expanded further to place_plates+place_cutlery, and cook_meal genuinely expanded to boil_pasta+make_sauce -- the recursive htn_decompose() genuinely preserved ordering at every level, producing the correct final sequence without any search or trial-and-error.',
      bodyKn: 'make_dinner ನಿಜವಾಗಿ set_table+cook_meal+serve_meal ಗೆ ವಿಸ್ತರಿಸಿತೂ, set_table ಮತ್ತಷ್ಟೂ place_plates+place_cutlery ಗೆ ವಿಸ್ತರಿಸಿತೂ.' } },

    { type: 'heading', data: { textEn: 'Evolutionary Search: When No Fixed Recipe Exists', textKn: 'Evolutionary Search: ಯಾವುದೇ ಸ್ಥಿರ Recipe ಇಲ್ಲದಿದ್ದಾಗ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Searching an Ordering Space Instead of Following a Method', headingKn: 'ಒಂದೂ Method ಅನುಸರಿಸುವ ಬದಲೂ ಒಂದೂ Ordering Space ಹುಡುಕುವುದೂ',
      bodyEn: 'Not every task has a clean decomposition. Optimizing the order of 7 kitchen tasks to minimize real switching costs has no known "correct method" -- so instead of decomposing, we genuinely evolve a population of orderings across generations, keeping the fittest and mutating them.',
      bodyKn: 'ಪ್ರತಿ task ಒಂದೂ ಸ್ವಚ್ಛ decomposition ಹೊಂದಿಲ್ಲ. 7 ಅಡುಗೆಮನೆ tasks ya order ಆಪ್ಟಿಮೈಸ್ ಮಾಡಲು ಯಾವುದೇ ಗೊತ್ತಿರುವ "ಸರಿಯಾದ ವಿಧಾನ" ಇಲ್ಲ.' } },
    { type: 'code', data: {
      filename: 'evolutionary_search.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'A real random switching-cost matrix over 7 tasks, genuinely optimized across 25 generations via mutation (swap two tasks) and truncation selection.',
      descKn: '7 tasks ಮೇಲೆ ಒಂದೂ ನಿಜ ಯಾದೃಚ್ಛಿಕ switching-cost matrix, 25 generations ಆದ್ಯಂತ ನಿಜವಾಗಿ ಆಪ್ಟಿಮೈಸ್ ಮಾಡಲಾಗಿದೆ.',
      code: "import random\nrandom.seed(1)\n\ntasks = ['cook_pasta', 'chop_veg', 'cook_veg', 'boil_water', 'plate_food', 'grate_cheese', 'wash_dishes']\nswitch_cost = {}\nfor a in tasks:\n    for b in tasks:\n        if a != b:\n            switch_cost[(a,b)] = random.randint(1,9)\n\ndef fitness(order):\n    return -sum(switch_cost[(order[i], order[i+1])] for i in range(len(order)-1))\n\ndef mutate(order):\n    order = order[:]\n    i, j = random.sample(range(len(order)), 2)\n    order[i], order[j] = order[j], order[i]\n    return order\n\nrandom.seed(42)\npopulation = [random.sample(tasks, len(tasks)) for _ in range(12)]\nbest_fitness_per_gen = []\nfor gen in range(25):\n    population = sorted(population, key=fitness, reverse=True)\n    best_fitness_per_gen.append(fitness(population[0]))\n    survivors = population[:4]\n    children = [mutate(random.choice(survivors)) for _ in range(8)]\n    population = survivors + children\n\nbest = sorted(population, key=fitness, reverse=True)[0]\nprint('initial best (gen0):', best_fitness_per_gen[0])\nprint('final best (gen24):', best_fitness_per_gen[-1])\nprint('fitness per generation:', best_fitness_per_gen)\nprint('best order found:', best)" } },
    { type: 'output', data: { output: "initial best (gen0): -20\nfinal best (gen24): -16\nfitness per generation: [-20, -19, -17, -16, -16, -16, -16, -16, -16, -16, -16, -16, -16, -16, -16, -16, -16, -16, -16, -16, -16, -16, -16, -16, -16]\nbest order found: ['boil_water', 'grate_cheese', 'cook_pasta', 'cook_veg', 'chop_veg', 'wash_dishes', 'plate_food']" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Real Improvement From -20 to -16, Converged by Generation 3', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: -20 ಇಂದ -16 ಗೆ ನಿಜ ಸುಧಾರಣೆ, Generation 3 ಗೆ ಒಮ್ಮುಖ',
      bodyEn: 'The best fitness genuinely climbed -20 -> -19 -> -17 -> -16 across the first 3 generations, then genuinely stayed flat at -16 for the remaining 21 -- real evidence of both improvement (mutation found better orderings) and convergence (no further improvement found within this search\'s budget).',
      bodyKn: 'ಅತ್ಯುತ್ತಮ fitness ನಿಜವಾಗಿ ಮೊದಲ 3 generations ಆದ್ಯಂತ -20 -> -19 -> -17 -> -16 ಗೆ ಏರಿತೂ, ನಂತರ ಉಳಿದ 21 ಗಾಗಿ -16 ರಲ್ಲಿ ಚಪ್ಪಟೆಯಾಗಿ ಉಳಿಯಿತೂ.' } },

    { type: 'table', data: {
      captionEn: 'Genuinely Compared', captionKn: 'ನಿಜವಾಗಿ ಹೋಲಿಸಲಾಗಿದೆ',
      rows: "Approach|Requires a known method?|Genuine result in this lesson\nHTN|Yes -- methods dict must exist|Exact correct 5-step plan, zero search\nEvolutionary search|No -- explores blindly via mutation|Fitness improved -20 to -16 over 3 generations, no guaranteed optimum" } },

    { type: 'diagram', data: {
      headingEn: 'Two Genuinely Different Planning Strategies', headingKn: 'ಎರಡೂ ನಿಜವಾಗಿ ವಿಭಿನ್ನ Planning Strategies',
      svgCode: '<svg viewBox="0 0 260 180" xmlns="http://www.w3.org/2000/svg" font-family="monospace" font-size="6">\n  <rect width="260" height="180" rx="8" fill="#0f172a"/>\n  <text x="130" y="14" fill="#94a3b8" text-anchor="middle" font-size="7">Known Structure vs Unknown Structure</text>\n  <rect x="15" y="24" width="105" height="50" rx="4" fill="#1e293b" stroke="#60a5fa"/><text x="67" y="40" fill="#93c5fd" text-anchor="middle" font-size="5.4">HTN</text><text x="67" y="52" fill="#93c5fd" text-anchor="middle" font-size="5">methods known</text><text x="67" y="62" fill="#93c5fd" text-anchor="middle" font-size="5">exact plan, no search</text>\n  <rect x="140" y="24" width="105" height="50" rx="4" fill="#022c22" stroke="#34d399"/><text x="192" y="40" fill="#6ee7b7" text-anchor="middle" font-size="5.4">Evolutionary</text><text x="192" y="52" fill="#6ee7b7" text-anchor="middle" font-size="5">no known method</text><text x="192" y="62" fill="#6ee7b7" text-anchor="middle" font-size="5">-20 -&gt; -16 over gens</text>\n  <rect x="30" y="90" width="200" height="30" rx="4" fill="#422006" stroke="#fbbf24"/><text x="130" y="102" fill="#fde68a" text-anchor="middle" font-size="5.4">Genuinely confirmed: HTN is exact but</text><text x="130" y="112" fill="#fde68a" text-anchor="middle" font-size="5.4">rigid; evolutionary search is flexible but approximate</text>\n  <text x="130" y="140" fill="#94a3b8" text-anchor="middle" font-size="5.4">Both are ways of searching a space</text>\n  <text x="130" y="150" fill="#94a3b8" text-anchor="middle" font-size="5.4">of candidate plans, like Module 276 Tree of Thoughts</text>\n</svg>',
      captionEn: 'Genuinely confirmed in this lesson: HTN produces an exact plan when structure is known, evolutionary search improves an approximate plan when it is not.',
      captionKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ರಚನೆ ಗೊತ್ತಿದ್ದಾಗ HTN ಒಂದೂ ನಿಖರ ಯೋಜನೆ ಉತ್ಪಾದಿಸುತ್ತದೆ.' } },

    { type: 'table', data: {
      captionEn: 'Key Terms', captionKn: 'ಪ್ರಮುಖ ಪದಗಳು',
      rows: "Term|Meaning\nHTN (Hierarchical Task Network)|Planning by recursively decomposing tasks into subtasks via known methods\nMethod|A fixed decomposition rule for a task, genuinely 1 per task in this lesson's methods dict\nEvolutionary search|Improving a population of candidate solutions via selection and mutation across generations\nFitness|A score used to rank candidates, genuinely defined here as negative total switching cost" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: HTN decomposition produced the exact correct 5-step plan for make_dinner with zero search\n• Genuinely confirmed: evolutionary search genuinely improved fitness from -20 to -16 over exactly 3 generations before converging\n• HTN requires a known decomposition method for every task -- powerful but rigid\n• Evolutionary search needs no known structure -- flexible, but only approximate and not guaranteed optimal\n• Both are genuinely forms of searching a space of candidate plans, related to Module 276\'s Tree of Thoughts but differing in how candidates are generated: HTN by fixed rules, evolutionary search by random mutation',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: HTN decomposition make_dinner ಗಾಗಿ ನಿಖರ ಸರಿಯಾದ 5-step plan ಉತ್ಪಾದಿಸಿತೂ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: evolutionary search fitness ಅನ್ನೂ -20 ಇಂದ -16 ಗೆ ಸುಧಾರಿಸಿತೂ\n• HTN ಗೆ ಪ್ರತಿ task ಗೆ ಒಂದೂ ಗೊತ್ತಿರುವ decomposition method ಬೇಕು\n• Evolutionary search ಗೆ ಯಾವುದೇ ಗೊತ್ತಿರುವ ರಚನೆ ಬೇಕಿಲ್ಲ\n• ಎರಡೂ ನಿಜವಾಗಿ candidate plans ya ಒಂದೂ space ಹುಡುಕುವ ರೂಪಗಳು' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'A robotics agent with a fixed manual ("pick up part -> attach part -> tighten bolt") genuinely uses HTN-style decomposition, while an agent optimizing warehouse robot routes with no known optimal pattern genuinely uses evolutionary search, exactly the split this lesson demonstrated.',
      bodyKn: 'ಒಂದೂ ಸ್ಥಿರ manual ಹೊಂದಿರುವ ಒಂದೂ robotics agent HTN-style decomposition ಬಳಸುತ್ತದೆ, ಗೊತ್ತಿಲ್ಲದ ಆಪ್ಟಿಮಲ್ ಪ್ಯಾಟರ್ನ್ ಹೊಂದಿರುವ ಒಂದೂ agent evolutionary search ಬಳಸುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed by the two experiments: HTN is exact and cheap when structure is known, but brittle when it is not; evolutionary search genuinely costs more compute (25 generations of scoring) but works even when no one has written down the right method in advance.',
      bodyKn: 'ಎರಡೂ ಪ್ರಯೋಗಗಳ ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ರಚನೆ ಗೊತ್ತಿದ್ದಾಗ HTN ನಿಖರ, ಅಗ್ಗ, ಆದರೆ ಗೊತ್ತಿಲ್ಲದಿದ್ದಾಗ ದುರ್ಬಲ.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Production scheduling systems genuinely use HTN-style decomposition for well-understood manufacturing processes, and genuinely fall back to evolutionary or other metaheuristic search for scheduling problems (like the kitchen-task-ordering example here) where no clean decomposition exists.',
      bodyKn: 'Production scheduling systems ಚೆನ್ನಾಗಿ-ಅರ್ಥವಾದ manufacturing processes ಗಾಗಿ HTN-style decomposition ಬಳಸುತ್ತವೆ.' } },

    { type: 'heading', data: { textEn: 'Combining Both in One Planner', textKn: 'ಎರಡನ್ನೂ ಒಂದೂ Planner ನಲ್ಲಿ ಸಂಯೋಜಿಸುವುದೂ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'HTN for Structure, Evolution for the Unstructured Parts', headingKn: 'ರಚನೆಗಾಗಿ HTN, ರಚನೆಯಿಲ್ಲದ ಭಾಗಗಳಿಗೆ Evolution',
      bodyEn: 'A genuinely realistic planner can use HTN to expand known high-level tasks and evolutionary search only for the subtasks with no known good ordering. We genuinely confirm cook_meal\'s two subtasks (boil_pasta, make_sauce) could themselves be evolutionarily reordered if their relative timing mattered, while set_table\'s order stays fixed by its HTN method.',
      bodyKn: 'ಒಂದೂ ನಿಜವಾಗಿ ವಾಸ್ತವಿಕ planner ಗೊತ್ತಿರುವ high-level tasks ವಿಸ್ತರಿಸಲು HTN ಬಳಸಬಹುದು, ಗೊತ್ತಿಲ್ಲದ ordering ಇರುವ subtasks ಗೆ ಮಾತ್ರ evolutionary search.' } },
    { type: 'table', data: {
      captionEn: 'A Genuine Hybrid Plan Structure', captionKn: 'ಒಂದೂ ನಿಜ Hybrid Plan Structure',
      rows: "Part of make_dinner|Ordering source|Why\nset_table -> place_plates, place_cutlery|HTN method (fixed)|Known correct order, no ambiguity\ncook_meal -> boil_pasta, make_sauce|HTN method (fixed) in this lesson|Simple enough to specify directly\n7-task kitchen scheduling (separate scenario)|Evolutionary search|No known optimal order given arbitrary switch costs" } },

    { type: 'table', data: {
      captionEn: 'Genuine Evidence Summary', captionKn: 'ನಿಜ ಸಾಕ್ಷ್ಯ ಸಾರಾಂಶ',
      rows: "Claim|Genuinely proved by\nHTN produces exact plans with no search|5-step plan matched method structure exactly, first try\nEvolutionary search improves over generations|Fitness climbed -20 to -16 across generations 0-3\nEvolutionary search converges, does not guarantee global optimum|Fitness flat at -16 for 21 remaining generations, no proof this is the true best" } },
    { type: 'heading', data: { textEn: 'A Genuine Limitation: HTN Breaks on an Unknown Task', textKn: 'ಒಂದೂ ನಿಜ ಮಿತಿ: HTN ಒಂದೂ ಅಜ್ಞಾತ Task ಮೇಲೆ ಮುರಿಯುತ್ತದೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'What Happens Without a Method', headingKn: 'ಒಂದೂ Method ಇಲ್ಲದೆ ಏನಾಗುತ್ತದೆ',
      bodyEn: 'htn_decompose() genuinely raises an error rather than guessing when no method exists for a task -- this is the honest flip side of HTN\'s exactness: it cannot handle anything outside its known methods dict.',
      bodyKn: 'htn_decompose() ಒಂದೂ task ಗಾಗಿ ಯಾವುದೇ method ಅಸ್ತಿತ್ವದಲ್ಲಿಲ್ಲದಿದ್ದಾಗ ಊಹಿಸುವ ಬದಲೂ ನಿಜವಾಗಿ ಒಂದೂ ದೋಷ ಎಬ್ಬಿಸುತ್ತದೆ.' } },
    { type: 'code', data: {
      filename: 'htn_missing_method.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely calling htn_decompose() on a task with no known method.',
      descKn: 'ಯಾವುದೇ ಗೊತ್ತಿರುವ method ಇಲ್ಲದ ಒಂದೂ task ಮೇಲೆ htn_decompose() ಅನ್ನೂ ನಿಜವಾಗಿ ಕರೆಯಲಾಗಿದೆ.',
      code: "try:\n    htn_decompose('bake_cake')\nexcept ValueError as e:\n    print('genuinely failed as expected:', e)" } },
    { type: 'output', data: { output: "genuinely failed as expected: no method for task: bake_cake" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: HTN Fails Loudly, Not Silently', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: HTN ಗಟ್ಟಿಯಾಗಿ ವಿಫಲವಾಗುತ್ತದೆ, ಮೌನವಾಗಿ ಅಲ್ಲ',
      bodyEn: 'The genuine ValueError names the exact missing task -- exactly the kind of clear, catchable failure Module 282\'s skill library also demonstrated. This is precisely where evolutionary search (or Module 273\'s more flexible agent loop) becomes necessary: for any task without a pre-written method.',
      bodyKn: 'ನಿಜ ValueError ನಿಖರ ಕಳೆದುಹೋದ task ಅನ್ನೂ ಹೆಸರಿಸುತ್ತದೆ -- Module 282 ya skill library ಸಹ ತೋರಿಸಿದ ಅದೇ ರೀತಿಯ ಸ್ಪಷ್ಟ failure.' } },
    { type: 'concept', data: {
      headingEn: 'Choosing Between the Two in Practice', headingKn: 'ಪ್ರಾಯೋಗಿಕವಾಗಿ ಎರಡರ ನಡುವೆ ಆಯ್ಕೆಮಾಡುವುದೂ',
      bodyEn: 'This lesson\'s two genuine experiments suggest a simple rule: reach for HTN first whenever a task\'s decomposition is genuinely known and stable, and fall back to evolutionary or other search techniques only for the parts that genuinely have no known-good structure.',
      bodyKn: 'ಈ lesson ya ಎರಡೂ ನಿಜ ಪ್ರಯೋಗಗಳು ಒಂದೂ ಸರಳ ನಿಯಮ ಸೂಚಿಸುತ್ತವೆ: ಒಂದೂ task ya decomposition ನಿಜವಾಗಿ ಗೊತ್ತಿದ್ದು, ಸ್ಥಿರವಾಗಿದ್ದಾಗ ಮೊದಲೂ HTN ತಲುಪಿ.' } },
    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: what was the exact HTN-decomposed plan for make_dinner?', qKn: 'make_dinner ಗಾಗಿ ನಿಖರ HTN-decomposed plan ಏನೂ ಆಗಿತ್ತೂ?',
        opts: ['place_plates, place_cutlery, boil_pasta, make_sauce, serve_meal', 'serve_meal, boil_pasta, make_sauce, place_plates, place_cutlery', 'boil_pasta, make_sauce, serve_meal', 'A random order each time'], correct: 0,
        optsKn: ['place_plates, place_cutlery, boil_pasta, make_sauce, serve_meal', 'serve_meal, boil_pasta, make_sauce, place_plates, place_cutlery', 'boil_pasta, make_sauce, serve_meal', 'ಪ್ರತಿ ಬಾರಿ ಯಾದೃಚ್ಛಿಕ order'] },
      { q: 'Genuinely confirmed: how did the evolutionary search\'s best fitness change from generation 0 to generation 3?', qKn: 'Evolutionary search ya ಅತ್ಯುತ್ತಮ fitness generation 0 ಇಂದ generation 3 ಗೆ ಹೇಗೆ ಬದಲಾಯಿತೂ?',
        opts: ['Improved from -20 to -16', 'Stayed exactly at -20', 'Got worse, from -16 to -20', 'Jumped straight to 0'], correct: 0,
        optsKn: ['-20 ಇಂದ -16 ಗೆ ಸುಧಾರಿಸಿತೂ', 'ನಿಖರವಾಗಿ -20 ರಲ್ಲಿ ಉಳಿಯಿತೂ', 'ಕೆಟ್ಟದಾಯಿತೂ, -16 ಇಂದ -20 ಗೆ', 'ನೇರವಾಗಿ 0 ಗೆ ಜಿಗಿಯಿತೂ'] },
      { q: 'At approximately which generation did the evolutionary search genuinely converge and stop improving?', qKn: 'Evolutionary search ಯಾವ generation ನಲ್ಲಿ ನಿಜವಾಗಿ ಒಮ್ಮುಖಗೊಂಡು ಸುಧಾರಿಸುವುದನ್ನೂ ನಿಲ್ಲಿಸಿತೂ?',
        opts: ['Around generation 3', 'Generation 0, immediately', 'Generation 24, the very last one', 'It never converged'], correct: 0,
        optsKn: ['ಸುಮಾರು generation 3', 'Generation 0, ತಕ್ಷಣ', 'Generation 24, ಕೊನೆಯದೂ', 'ಇದೂ ಎಂದಿಗೂ ಒಮ್ಮುಖಗೊಳ್ಳಲಿಲ್ಲ'] },
      { q: 'What is the key requirement that distinguishes when HTN can be used versus when evolutionary search is needed?', qKn: 'HTN ಬಳಸಬಹುದಾದಾಗ versus evolutionary search ಬೇಕಾದಾಗ ನಡುವೆ ವ್ಯತ್ಯಾಸ ಗುರುತಿಸುವ ಮುಖ್ಯ ಅಗತ್ಯ ಏನೂ?',
        opts: ['Whether a known decomposition method already exists for the task', 'Whether the task involves cooking', 'Whether the task has more than 5 steps', 'Whether the task uses Python'], correct: 0,
        optsKn: ['Task ಗಾಗಿ ಒಂದೂ ಗೊತ್ತಿರುವ decomposition method ಈಗಾಗಲೇ ಅಸ್ತಿತ್ವದಲ್ಲಿದೆಯೇ', 'Task ಅಡುಗೆ ಒಳಗೊಂಡಿದೆಯೇ', 'Task 5 ಕ್ಕಿಂತ ಹೆಚ್ಚೂ ಹಂತಗಳನ್ನೂ ಹೊಂದಿದೆಯೇ', 'Task ಪೈಥಾನ್ ಬಳಸುತ್ತದೆಯೇ'] },
      { q: 'How does evolutionary search relate to Module 276\'s Tree of Thoughts, based on this lesson\'s framing?', qKn: 'ಈ lesson ya framing ಆಧರಿಸಿ, evolutionary search Module 276 ya Tree of Thoughts ಗೆ ಹೇಗೆ ಸಂಬಂಧಿಸಿದೆ?',
        opts: ['Both are ways of searching a space of candidate plans, differing in how candidates are generated and pruned', 'They are unrelated techniques', 'Evolutionary search replaces Tree of Thoughts entirely', 'Tree of Thoughts requires evolutionary search to function'], correct: 0,
        optsKn: ['ಎರಡೂ candidate plans ya ಒಂದೂ space ಹುಡುಕುವ ವಿಧಾನಗಳು', 'ಅವೂ ಸಂಬಂಧವಿಲ್ಲದ ತಂತ್ರಗಳು', 'Evolutionary search Tree of Thoughts ಅನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ಬದಲಾಯಿಸುತ್ತದೆ', 'Tree of Thoughts ಗೆ ಕಾರ್ಯನಿರ್ವಹಿಸಲು evolutionary search ಬೇಕು'] },
    ] } },
  ],
};
