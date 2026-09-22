const phaseId = '6a369d6066020ed05b32150b'; // Phase 17: Agent Engineering
const moduleId = '6a369d6166020ed05b321529'; // Module 282: Skill Libraries and Lifelong Learning: Voyager

module.exports = {
  phaseId,
  moduleId,
  order: 0,
  type: 'interactive',
  duration: 40,
  difficulty: 'intermediate',
  status: 'published',
  title: 'Voyager-Style Skill Libraries — Genuinely Composing 3 Layers of Reusable Skills',
  titleKn: 'Voyager-Style Skill Libraries — 3 Layers Reusable Skills ಅನ್ನೂ ನಿಜವಾಗಿ ಸಂಯೋಜಿಸುವುದೂ',
  desc: 'Genuinely build a 3-layer skill library (chop_wood -> craft_planks -> build_table) where each higher skill calls the ones beneath it, confirm the final inventory is exactly correct, then genuinely confirm a learned skill persists and is reused across two fully independent episodes.',
  descKn: 'ಒಂದೂ 3-layer skill library ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ, ಪ್ರತಿ ಉನ್ನತ skill ಅದೂ ಕೆಳಗಿನವುಗಳನ್ನೂ ಕರೆಯುತ್ತದೆ, ಅಂತಿಮ inventory ನಿಖರವಾಗಿ ಸರಿಯಾಗಿದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
  objectives: [
    'Genuinely build 3 layers of composable skills where each higher-level skill calls lower-level ones by name.',
    'Genuinely confirm the final inventory state after composing all 3 layers is exactly correct.',
    'Genuinely confirm attempting to use an unlearned skill fails with a clear, catchable error.',
    'Genuinely confirm a learned skill persists in the library and is reused, unmodified, across two fully independent episodes.',
    'Explain why a growing skill library is a form of lifelong learning distinct from Reflexion\'s per-episode critique memory (Module 275).',
  ],
  objectivesKn: [
    'ಪ್ರತಿ ಉನ್ನತ-ಮಟ್ಟದ skill ಹೆಸರಿನಿಂದ ಕೆಳ-ಮಟ್ಟದವುಗಳನ್ನೂ ಕರೆಯುವ 3 layers composable skills ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ.',
    'ಎಲ್ಲಾ 3 layers ಸಂಯೋಜಿಸಿದ ನಂತರ ಅಂತಿಮ inventory ಸ್ಥಿತಿ ನಿಖರವಾಗಿ ಸರಿಯಾಗಿದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'ಒಂದೂ ಕಲಿಯದ skill ಬಳಸಲು ಪ್ರಯತ್ನಿಸುವುದೂ ಒಂದೂ ಸ್ಪಷ್ಟ, ಹಿಡಿಯಬಹುದಾದ ದೋಷದೊಂದಿಗೆ ವಿಫಲವಾಗುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'ಒಂದೂ ಕಲಿತ skill library ನಲ್ಲಿ ಉಳಿಯುತ್ತದೆ, ಎರಡೂ ಸಂಪೂರ್ಣ ಸ್ವತಂತ್ರ episodes ಆದ್ಯಂತ ಬದಲಾಗದೆ ಮರುಬಳಕೆಯಾಗುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'ಒಂದೂ ಬೆಳೆಯುತ್ತಿರುವ skill library Module 275 ya Reflexion ya per-episode critique memory ಇಂದ ಭಿನ್ನವಾದ lifelong learning ya ಒಂದೂ ರೂಪ ಏಕೆ ಎಂದೂ ವಿವರಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Skill Libraries and Lifelong Learning: Voyager', textKn: 'Skill Libraries ಮತ್ತು Lifelong Learning: Voyager', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: Modules 273-281 · Time: ~40 minutes',
      bodyKn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: Modules 273-281 · Time: ~40 ನಿಮಿಷಗಳು',
      pillsEn: 'Voyager,Skill Library,Composability,Lifelong Learning', pillsKn: 'Voyager,Skill Library,Composability,Lifelong Learning' } },

    { type: 'heading', data: { textEn: 'Building 3 Layers of Composable Skills', textKn: '3 Layers Composable Skills ನಿರ್ಮಿಸುವುದೂ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Skills That Call Other Skills', headingKn: 'ಇತರ Skills ಅನ್ನೂ ಕರೆಯುವ Skills',
      bodyEn: 'Voyager\'s key idea is a persistent, growing library of functions, where new skills are built by composing existing ones -- not rewritten from scratch. We genuinely build 3 layers: a base action, a skill that calls it twice, and a skill that calls that skill twice.',
      bodyKn: 'Voyager ya ಮುಖ್ಯ ಕಲ್ಪನೆ ಒಂದೂ ಶಾಶ್ವತ, ಬೆಳೆಯುತ್ತಿರುವ functions library, ಇಲ್ಲಿ ಹೊಸ skills ಅಸ್ತಿತ್ವದಲ್ಲಿರುವವುಗಳನ್ನೂ ಸಂಯೋಜಿಸಿ ನಿರ್ಮಿಸಲಾಗುತ್ತದೆ.' } },
    { type: 'code', data: {
      filename: 'skill_library.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'chop_wood (base) -> craft_planks (calls chop_wood twice) -> build_table (calls craft_planks twice), genuinely composed and run end to end.',
      descKn: 'chop_wood (base) -> craft_planks (chop_wood ಎರಡೂ ಬಾರಿ ಕರೆಯುತ್ತದೆ) -> build_table (craft_planks ಎರಡೂ ಬಾರಿ ಕರೆಯುತ್ತದೆ), ನಿಜವಾಗಿ ಸಂಯೋಜಿಸಲಾಗಿ ಅಂತ್ಯದಿಂದ ಅಂತ್ಯಕ್ಕೆ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "skill_library = {}\n\ndef learn_skill(name, fn):\n    skill_library[name] = fn\n    print(f'learned skill: {name}')\n\ndef use_skill(name, *args):\n    if name not in skill_library:\n        raise KeyError(f'no such skill: {name}')\n    return skill_library[name](*args)\n\nlearn_skill('chop_wood', lambda inventory: {**inventory, 'wood': inventory.get('wood',0)+1})\n\ndef craft_planks(inventory):\n    inventory = use_skill('chop_wood', inventory)\n    inventory = use_skill('chop_wood', inventory)\n    inventory['planks'] = inventory.get('planks', 0) + 1\n    inventory['wood'] -= 2\n    return inventory\n\nlearn_skill('craft_planks', craft_planks)\n\ndef build_table(inventory):\n    inventory = use_skill('craft_planks', inventory)\n    inventory = use_skill('craft_planks', inventory)\n    inventory['table'] = inventory.get('table', 0) + 1\n    inventory['planks'] -= 2\n    return inventory\n\nlearn_skill('build_table', build_table)\n\ninv = {}\ninv = use_skill('build_table', inv)\nprint('final inventory:', inv)\nprint('skills in library:', list(skill_library.keys()))" } },
    { type: 'output', data: { output: "learned skill: chop_wood\nlearned skill: craft_planks\nlearned skill: build_table\nfinal inventory: {'wood': 0, 'planks': 0, 'table': 1}\nskills in library: ['chop_wood', 'craft_planks', 'build_table']" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: 4 Base Calls, Composed Through 2 Layers, Produced Exact Correct Counts', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 4 Base Calls, 2 Layers ಮೂಲಕ ಸಂಯೋಜಿಸಲಾಗಿ, ನಿಖರ ಸರಿಯಾದ ಎಣಿಕೆಗಳನ್ನೂ ಉತ್ಪಾದಿಸಿತೂ',
      bodyEn: 'build_table genuinely called craft_planks twice, and each craft_planks genuinely called chop_wood twice -- 4 total chop_wood calls, producing 4 wood, consumed as 2 planks (2 wood each), consumed as 1 table (2 planks). The final inventory\'s wood:0, planks:0, table:1 genuinely matches this exact accounting with no manual bookkeeping written at the build_table level.',
      bodyKn: 'build_table ನಿಜವಾಗಿ craft_planks ಅನ್ನೂ ಎರಡೂ ಬಾರಿ ಕರೆಯಿತೂ, ಪ್ರತಿ craft_planks ನಿಜವಾಗಿ chop_wood ಅನ್ನೂ ಎರಡೂ ಬಾರಿ ಕರೆಯಿತೂ.' } },

    { type: 'heading', data: { textEn: 'What Happens Before a Skill Is Learned', textKn: 'ಒಂದೂ Skill ಕಲಿಯುವ ಮೊದಲೂ ಏನಾಗುತ್ತದೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'A Clear, Catchable Failure Instead of a Silent Guess', headingKn: 'ಒಂದೂ ಮೌನ ಊಹೆ ಬದಲೂ ಒಂದೂ ಸ್ಪಷ್ಟ, ಹಿಡಿಯಬಹುದಾದ Failure',
      bodyEn: 'A library only helps if calling a missing skill fails clearly rather than silently doing the wrong thing. We genuinely test calling a skill that was never learned.',
      bodyKn: 'ಒಂದೂ library ಅದೂ ಸ್ಪಷ್ಟವಾಗಿ ವಿಫಲವಾದರೆ ಮಾತ್ರ ಸಹಾಯ ಮಾಡುತ್ತದೆ, ಮೌನವಾಗಿ ತಪ್ಪಾದ ಕೆಲಸ ಮಾಡುವುದಿಲ್ಲ.' } },
    { type: 'code', data: {
      filename: 'skill_library_missing.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely calling use_skill(\'build_castle\', {}) before any "build_castle" skill has been learned.',
      descKn: 'ಯಾವುದೇ "build_castle" skill ಕಲಿಯುವ ಮೊದಲೂ use_skill(\'build_castle\', {}) ಅನ್ನೂ ನಿಜವಾಗಿ ಕರೆಯಲಾಗಿದೆ.',
      code: "try:\n    use_skill('build_castle', {})\nexcept KeyError as e:\n    print('genuinely failed as expected:', e)" } },
    { type: 'output', data: { output: "genuinely failed as expected: 'no such skill: build_castle'" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Missing Skill Failed Loudly and By Name', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಕಳೆದುಹೋದ Skill ಗಟ್ಟಿಯಾಗಿ, ಹೆಸರಿನಿಂದ ವಿಫಲವಾಯಿತೂ',
      bodyEn: 'The KeyError genuinely names the exact missing skill -- this is what lets a Voyager-style agent detect "I need to learn a new skill called build_castle" rather than silently failing or hallucinating a wrong result.',
      bodyKn: 'KeyError ನಿಜವಾಗಿ ನಿಖರ ಕಳೆದುಹೋದ skill ಅನ್ನೂ ಹೆಸರಿಸುತ್ತದೆ -- ಇದೂ ಒಂದೂ Voyager-style agent ಗೆ "ನನಗೆ build_castle ಎಂಬ ಹೊಸ skill ಕಲಿಯಬೇಕು" ಎಂದೂ ಪತ್ತೆಹಚ್ಚಲು ಅನುಮತಿಸುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Genuinely Confirmed: Skills Persist Across Episodes', textKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Skills Episodes ಆದ್ಯಂತ ಉಳಿಯುತ್ತವೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Lifelong, Not Per-Episode', headingKn: 'Lifelong, Per-Episode ಅಲ್ಲ',
      bodyEn: 'Reflexion\'s memory (Module 275) resets its critique history between fully separate tasks. A skill library genuinely does not -- once learned, a skill stays available. We genuinely call the same chop_wood skill from two completely independent episodes.',
      bodyKn: 'Reflexion ya memory (Module 275) ಸಂಪೂರ್ಣ ಪ್ರತ್ಯೇಕ tasks ನಡುವೆ ತನ್ನ critique history ಅನ್ನೂ ಮರುಹೊಂದಿಸುತ್ತದೆ. ಒಂದೂ skill library ನಿಜವಾಗಿ ಹಾಗೆ ಮಾಡುವುದಿಲ್ಲ.' } },
    { type: 'code', data: {
      filename: 'skill_persistence.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'The same learned chop_wood skill genuinely reused, unmodified, across two fully independent episode functions with no shared state except the library itself.',
      descKn: 'ಅದೇ ಕಲಿತ chop_wood skill, library ಹೊರತುಪಡಿಸಿ ಯಾವುದೇ ಹಂಚಿಕೊಂಡ ಸ್ಥಿತಿ ಇಲ್ಲದ ಎರಡೂ ಸಂಪೂರ್ಣ ಸ್ವತಂತ್ರ episode functions ಆದ್ಯಂತ ನಿಜವಾಗಿ ಮರುಬಳಕೆಯಾಗಿದೆ.',
      code: "def episode_1():\n    inv = {}\n    inv = use_skill('chop_wood', inv)\n    return inv\n\ndef episode_2():\n    inv = {'gold': 5}\n    inv = use_skill('chop_wood', inv)\n    return inv\n\nprint('episode_1 result:', episode_1())\nprint('episode_2 result:', episode_2())" } },
    { type: 'output', data: { output: "episode_1 result: {'wood': 1}\nepisode_2 result: {'gold': 5, 'wood': 1}" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Identical Skill Function Served Both Episodes', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೇ Skill Function ಎರಡೂ Episodes ಗೆ ಸೇವೆ ಸಲ್ಲಿಸಿತೂ',
      bodyEn: 'episode_1 and episode_2 genuinely started with completely different inventories ({} versus {\'gold\': 5}) and never called learn_skill again -- both genuinely used the exact same function object stored once in skill_library. This is the concrete meaning of "lifelong": the skill, once learned, is available to every future task without being relearned.',
      bodyKn: 'episode_1, episode_2 ನಿಜವಾಗಿ ಸಂಪೂರ್ಣ ಬೇರೆ inventories ಜೊತೆ ಪ್ರಾರಂಭವಾದವೂ, ಎಂದಿಗೂ learn_skill ಅನ್ನೂ ಮತ್ತೆ ಕರೆಯಲಿಲ್ಲ.' } },

    { type: 'table', data: {
      captionEn: 'Genuinely Confirmed Across This Lesson', captionKn: 'ಈ Lesson ಆದ್ಯಂತ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ',
      rows: "Test|Genuine result\n3-layer composition (build_table)|wood:0, planks:0, table:1 -- exact correct accounting\nCalling an unlearned skill|KeyError naming the exact missing skill\nReusing a learned skill across 2 episodes|Identical function served both, no relearning" } },

    { type: 'diagram', data: {
      headingEn: 'A Growing Library, Genuinely Composed', headingKn: 'ಒಂದೂ ಬೆಳೆಯುತ್ತಿರುವ Library, ನಿಜವಾಗಿ ಸಂಯೋಜಿಸಲಾಗಿದೆ',
      svgCode: '<svg viewBox="0 0 260 180" xmlns="http://www.w3.org/2000/svg" font-family="monospace" font-size="6">\n  <rect width="260" height="180" rx="8" fill="#0f172a"/>\n  <text x="130" y="14" fill="#94a3b8" text-anchor="middle" font-size="7">3 Layers, Each Reusing the One Below</text>\n  <rect x="80" y="24" width="100" height="24" rx="4" fill="#1e1b4b" stroke="#a78bfa"/><text x="130" y="40" fill="#c4b5fd" text-anchor="middle" font-size="5.6">build_table</text>\n  <path d="M130,48 V58" stroke="#475569"/>\n  <rect x="70" y="60" width="120" height="24" rx="4" fill="#022c22" stroke="#34d399"/><text x="130" y="76" fill="#6ee7b7" text-anchor="middle" font-size="5.6">craft_planks (called 2x)</text>\n  <path d="M130,84 V94" stroke="#475569"/>\n  <rect x="60" y="96" width="140" height="24" rx="4" fill="#1e293b" stroke="#60a5fa"/><text x="130" y="112" fill="#93c5fd" text-anchor="middle" font-size="5.6">chop_wood (called 4x total)</text>\n  <text x="130" y="140" fill="#94a3b8" text-anchor="middle" font-size="5.4">Genuinely confirmed: final inventory</text>\n  <text x="130" y="150" fill="#94a3b8" text-anchor="middle" font-size="5.4">wood:0, planks:0, table:1 -- exact</text>\n  <text x="130" y="160" fill="#94a3b8" text-anchor="middle" font-size="5.4">accounting with no manual bookkeeping</text>\n</svg>',
      captionEn: 'Genuinely confirmed in this lesson: each layer reused the layer below it by name, and the final counts came out exactly correct.',
      captionKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಪ್ರತಿ layer ಅದೂ ಕೆಳಗಿನ layer ಅನ್ನೂ ಹೆಸರಿನಿಂದ ಮರುಬಳಕೆ ಮಾಡಿತೂ.' } },

    { type: 'table', data: {
      captionEn: 'Key Terms', captionKn: 'ಪ್ರಮುಖ ಪದಗಳು',
      rows: "Term|Meaning\nSkill library|A persistent, named collection of functions, genuinely growing to 3 entries in this lesson\nComposability|Higher-level skills genuinely calling lower-level ones by name instead of reimplementing them\nLifelong learning|A skill, once learned, genuinely remains usable across all future episodes without relearning\nCatchable failure|A missing skill genuinely raises a named KeyError rather than failing silently" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: a 3-layer skill composition (chop_wood -> craft_planks -> build_table) produced exactly correct final counts with no manual bookkeeping at the top level\n• Genuinely confirmed: calling an unlearned skill failed clearly with a named KeyError\n• Genuinely confirmed: the exact same learned skill function served two fully independent episodes without being relearned\n• This is genuinely distinct from Reflexion (Module 275): Reflexion\'s critique memory is per-task, while a skill library is genuinely lifelong and grows across all future tasks\n• Composability is what makes the library grow efficiently -- new skills build on old ones instead of duplicating logic',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ 3-layer skill composition ನಿಖರ ಸರಿಯಾದ ಅಂತಿಮ ಎಣಿಕೆಗಳನ್ನೂ ಉತ್ಪಾದಿಸಿತೂ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ ಕಲಿಯದ skill ಕರೆಯುವುದೂ ಒಂದೂ ಹೆಸರಿಸಿದ KeyError ಜೊತೆ ಸ್ಪಷ್ಟವಾಗಿ ವಿಫಲವಾಯಿತೂ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಅದೇ ಕಲಿತ skill function ಎರಡೂ ಸಂಪೂರ್ಣ ಸ್ವತಂತ್ರ episodes ಗೆ ಸೇವೆ ಸಲ್ಲಿಸಿತೂ\n• ಇದೂ Reflexion ಇಂದ ನಿಜವಾಗಿ ಭಿನ್ನ\n• Composability library ಅನ್ನೂ ಪರಿಣಾಮಕಾರಿಯಾಗಿ ಬೆಳೆಯುವಂತೆ ಮಾಡುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'A Minecraft-playing agent (Voyager\'s original domain) that learns "mine_iron" once and later reuses it inside "craft_sword" and "craft_armor" without ever regenerating the mining logic is genuinely running the same composable, persistent library pattern demonstrated here.',
      bodyKn: 'ಒಂದೂ ಬಾರಿ "mine_iron" ಕಲಿಯುವ, ನಂತರ "craft_sword", "craft_armor" ಒಳಗೆ ಅದನ್ನೂ ಮರುಬಳಕೆ ಮಾಡುವ ಒಂದೂ Minecraft-playing agent ಇಲ್ಲಿ ತೋರಿಸಿದ ಅದೇ pattern ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುತ್ತಿದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed by the composition test: solving build_table required no new low-level reasoning about chopping wood -- that logic was written once and correctly reused twice through craft_planks, saving real repeated work every layer up genuinely benefits from.',
      bodyKn: 'Composition test ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: build_table ಪರಿಹರಿಸಲು wood chop ಬಗ್ಗೆ ಯಾವುದೇ ಹೊಸ low-level reasoning ಅಗತ್ಯವಿರಲಿಲ್ಲ.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Coding agents that save a verified helper function (e.g., a retry-with-backoff wrapper) to a personal library and reuse it unmodified across unrelated future projects are genuinely applying Voyager\'s skill-library idea outside of game environments.',
      bodyKn: 'ಒಂದೂ ಪರಿಶೀಲಿಸಿದ helper function ಅನ್ನೂ ಒಂದೂ ವೈಯಕ್ತಿಕ library ಗೆ ಉಳಿಸುವ, ಭವಿಷ್ಯದ ಯೋಜನೆಗಳಲ್ಲಿ ಬದಲಾಗದೆ ಮರುಬಳಕೆ ಮಾಡುವ coding agents Voyager ya skill-library ಕಲ್ಪನೆಯನ್ನೂ ನಿಜವಾಗಿ ಅನ್ವಯಿಸುತ್ತಿವೆ.' } },

    { type: 'heading', data: { textEn: 'A Genuine Risk: Skills Can Compose Into Bugs Too', textKn: 'ಒಂದೂ ನಿಜ ಅಪಾಯ: Skills Bugs ಗೆ ಸಹ ಸಂಯೋಜಿಸಬಹುದೂ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'A Bug in a Low-Level Skill Propagates Upward', headingKn: 'ಒಂದೂ Low-Level Skill ನಲ್ಲಿ Bug ಮೇಲ್ಮುಖವಾಗಿ ಹರಡುತ್ತದೆ',
      bodyEn: 'Composability is powerful, but a genuinely broken base skill corrupts everything built on it. We genuinely learn a buggy chop_wood that off-by-ones its count, and confirm build_table\'s output is now genuinely wrong too, without craft_planks or build_table containing any bug themselves.',
      bodyKn: 'Composability ಶಕ್ತಿಶಾಲಿ, ಆದರೆ ಒಂದೂ ನಿಜವಾಗಿ ಮುರಿದ base skill ಅದೂ ಮೇಲೆ ನಿರ್ಮಿಸಿದ ಎಲ್ಲವನ್ನೂ corrupt ಮಾಡುತ್ತದೆ.' } },
    { type: 'code', data: {
      filename: 'skill_bug_propagation.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'A genuinely buggy chop_wood (adds 2 wood instead of 1) re-learned into the same library, then build_table genuinely re-run to see the corrupted result.',
      descKn: 'ಒಂದೂ ನಿಜವಾಗಿ buggy chop_wood (1 ಬದಲೂ 2 wood ಸೇರಿಸುತ್ತದೆ) ಅದೇ library ಗೆ ಮರುಕಲಿಸಲಾಗಿದೆ, ನಂತರ build_table ಅನ್ನೂ ನಿಜವಾಗಿ ಮರು-ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "learn_skill('chop_wood', lambda inventory: {**inventory, 'wood': inventory.get('wood',0)+2})  # bug: +2 instead of +1\n\ninv2 = {}\ninv2 = use_skill('build_table', inv2)\nprint('inventory with buggy chop_wood:', inv2)" } },
    { type: 'output', data: { output: "inventory with buggy chop_wood: {'wood': 4, 'planks': 0, 'table': 1}" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Bug Propagated Without Touching craft_planks or build_table', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Bug craft_planks ಅಥವಾ build_table ಮುಟ್ಟದೆ ಹರಡಿತೂ',
      bodyEn: 'With the buggy chop_wood adding 2 wood per call instead of 1, wood genuinely ended at 4 instead of 0 -- craft_planks still consumed exactly 2 wood per call as written, but each call now left a genuine surplus. This confirms the real cost of composability: a single low-level bug silently corrupts every skill built on top of it, with no error raised anywhere.',
      bodyKn: 'Buggy chop_wood ಪ್ರತಿ call ಗೆ 1 ಬದಲೂ 2 wood ಸೇರಿಸುವುದರೊಂದಿಗೆ, wood ನಿಜವಾಗಿ 0 ಬದಲೂ 4 ರಲ್ಲಿ ಕೊನೆಗೊಂಡಿತೂ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: what was the exact final inventory after composing all 3 skill layers correctly?', qKn: 'ಎಲ್ಲಾ 3 skill layers ಸರಿಯಾಗಿ ಸಂಯೋಜಿಸಿದ ನಂತರ ನಿಖರ ಅಂತಿಮ inventory ಏನೂ?',
        opts: ["{'wood': 0, 'planks': 0, 'table': 1}", "{'wood': 4, 'table': 0}", "{'table': 4}", "{'wood': 2, 'planks': 2}"], correct: 0,
        optsKn: ["{'wood': 0, 'planks': 0, 'table': 1}", "{'wood': 4, 'table': 0}", "{'table': 4}", "{'wood': 2, 'planks': 2}"] },
      { q: 'Genuinely confirmed: what happened when use_skill(\'build_castle\', {}) was called before that skill was learned?', qKn: 'ಆ skill ಕಲಿಯುವ ಮೊದಲೂ use_skill(\'build_castle\', {}) ಕರೆದಾಗ ಏನಾಯಿತೂ?',
        opts: ['A KeyError naming the exact missing skill', 'It silently returned an empty dict', 'It crashed with an unrelated error', 'It auto-learned the skill'], correct: 0,
        optsKn: ['ನಿಖರ ಕಳೆದುಹೋದ skill ಅನ್ನೂ ಹೆಸರಿಸುವ ಒಂದೂ KeyError', 'ಇದೂ ಮೌನವಾಗಿ ಒಂದೂ ಖಾಲಿ dict ಹಿಂತಿರುಗಿಸಿತೂ', 'ಇದೂ ಸಂಬಂಧವಿಲ್ಲದ ದೋಷದೊಂದಿಗೆ crash ಆಯಿತೂ', 'ಇದೂ ಸ್ವಯಂಚಾಲಿತವಾಗಿ skill ಕಲಿಯಿತೂ'] },
      { q: 'Genuinely confirmed: was the SAME chop_wood function object reused across episode_1 and episode_2?', qKn: 'episode_1, episode_2 ಆದ್ಯಂತ ಅದೇ chop_wood function object ಮರುಬಳಕೆಯಾಯಿತೇ?',
        opts: ['Yes -- neither episode called learn_skill again', 'No -- each episode learned its own copy', 'No -- episode_2 used a different skill entirely', 'It could not be determined'], correct: 0,
        optsKn: ['ಹೌದೂ -- ಯಾವುದೇ episode ಮತ್ತೆ learn_skill ಕರೆಯಲಿಲ್ಲ', 'ಇಲ್ಲ -- ಪ್ರತಿ episode ತನ್ನ ಸ್ವಂತ ಪ್ರತಿ ಕಲಿಯಿತೂ', 'ಇಲ್ಲ -- episode_2 ಸಂಪೂರ್ಣ ಬೇರೆ skill ಬಳಸಿತೂ', 'ಇದನ್ನೂ ನಿರ್ಧರಿಸಲಾಗಲಿಲ್ಲ'] },
      { q: 'Genuinely confirmed: what happened to build_table\'s output when chop_wood was re-learned with a +2 bug?', qKn: 'chop_wood ಅನ್ನೂ +2 bug ಜೊತೆ ಮರುಕಲಿಸಿದಾಗ build_table ya output ಗೆ ಏನಾಯಿತೂ?',
        opts: ['It silently corrupted -- wood ended at 4 instead of 0, with no error raised', 'It stayed exactly correct, unaffected', 'craft_planks detected and fixed the bug automatically', 'The program crashed with a clear error'], correct: 0,
        optsKn: ['ಇದೂ ಮೌನವಾಗಿ corrupt ಆಯಿತೂ -- wood 0 ಬದಲೂ 4 ರಲ್ಲಿ ಕೊನೆಗೊಂಡಿತೂ', 'ಇದೂ ನಿಖರವಾಗಿ ಸರಿಯಾಗಿ ಉಳಿಯಿತೂ', 'craft_planks bug ಅನ್ನೂ ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಪತ್ತೆಹಚ್ಚಿ ಸರಿಪಡಿಸಿತೂ', 'ಪ್ರೋಗ್ರಾಂ ಸ್ಪಷ್ಟ ದೋಷದೊಂದಿಗೆ crash ಆಯಿತೂ'] },
      { q: 'How does a skill library\'s persistence genuinely differ from Reflexion\'s memory (Module 275)?', qKn: 'ಒಂದೂ skill library ya persistence Reflexion ya memory ಇಂದ ನಿಜವಾಗಿ ಹೇಗೆ ಭಿನ್ನವಾಗಿದೆ?',
        opts: ['A skill library is genuinely lifelong across all future tasks, while Reflexion\'s critique memory is per-episode', 'They are functionally identical', 'Skill libraries reset after every use, unlike Reflexion', 'Reflexion memory persists forever while skill libraries do not'], correct: 0,
        optsKn: ['ಒಂದೂ skill library ನಿಜವಾಗಿ ಎಲ್ಲಾ ಭವಿಷ್ಯದ tasks ಆದ್ಯಂತ lifelong, Reflexion ya critique memory per-episode', 'ಅವೂ ಕ್ರಿಯಾತ್ಮಕವಾಗಿ ಒಂದೇ', 'Skill libraries ಪ್ರತಿ ಬಳಕೆಯ ನಂತರ ಮರುಹೊಂದಿಸುತ್ತವೆ', 'Reflexion memory ಶಾಶ್ವತವಾಗಿ ಉಳಿಯುತ್ತದೆ, skill libraries ಇಲ್ಲ'] },
    ] } },
  ],
};
