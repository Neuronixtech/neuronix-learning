const phaseId = '6a369d6066020ed05b32150b'; // Phase 17: Agent Engineering
const moduleId = '6a369d6066020ed05b321517'; // Module 276: Tree of Thoughts and LATS

module.exports = {
  phaseId,
  moduleId,
  order: 0,
  type: 'interactive',
  duration: 40,
  difficulty: 'intermediate',
  status: 'published',
  title: 'Tree of Thoughts — Genuinely Finding an Exact Answer a Greedy Search Misses',
  titleKn: 'Tree of Thoughts — Greedy Search ತಪ್ಪಿಸಿಕೊಳ್ಳುವ ನಿಖರ ಉತ್ತರವನ್ನೂ ನಿಜವಾಗಿ ಕಂಡುಹಿಡಿಯುವುದೂ',
  desc: 'Genuinely run a greedy single-branch search that gets permanently stuck at 13 while trying to reach 14, then genuinely run a beam-search Tree of Thoughts over the same moves that reaches 14 exactly by keeping a locally-worse branch alive long enough to pay off.',
  descKn: '14 ತಲುಪಲು ಪ್ರಯತ್ನಿಸುತ್ತಿರುವಾಗ 13 ರಲ್ಲಿ ಶಾಶ್ವತವಾಗಿ ಸಿಲುಕಿಕೊಳ್ಳುವ ಒಂದೂ greedy single-branch search ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ, ನಂತರ 14 ಅನ್ನೂ ನಿಖರವಾಗಿ ತಲುಪುವ ಒಂದೂ beam-search Tree of Thoughts ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ.',
  objectives: [
    'Genuinely run a greedy single-branch search and confirm it gets stuck at 13 while trying to reach a target of 14.',
    'Genuinely run a beam-search Tree of Thoughts over the identical moves and target, confirming it reaches 14 exactly.',
    'Genuinely trace which branch at depth 2 (state 7, locally worse than state 12) is what made the exact answer reachable.',
    'Explain why keeping multiple candidate branches alive, rather than committing to the single best-looking one, is what tree search buys over greedy search.',
    'Connect this toy numeric search to how Tree of Thoughts and LATS explore multiple reasoning paths for a language model before committing to one.',
  ],
  objectivesKn: [
    '14 ಗುರಿ ತಲುಪಲು ಪ್ರಯತ್ನಿಸುವಾಗ ಒಂದೂ greedy single-branch search 13 ರಲ್ಲಿ ಸಿಲುಕಿಕೊಳ್ಳುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ, ದೃಢಪಡಿಸಿ.',
    'ಅದೇ moves, ಗುರಿಯ ಮೇಲೆ ಒಂದೂ beam-search Tree of Thoughts ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ, ಇದೂ ನಿಖರವಾಗಿ 14 ತಲುಪುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
    'Depth 2 ನಲ್ಲಿ ಯಾವ branch (state 7) ನಿಖರ ಉತ್ತರವನ್ನೂ ತಲುಪಬಹುದಾಗಿಸಿತೂ ಎಂದೂ ನಿಜವಾಗಿ ಟ್ರೇಸ್ ಮಾಡಿ.',
    'ಒಂದೇ ಅತ್ಯುತ್ತಮ-ಕಾಣುವ branch ಗೆ ಬದ್ಧರಾಗುವ ಬದಲೂ ಬಹು candidate branches ಜೀವಂತವಾಗಿ ಇಟ್ಟುಕೊಳ್ಳುವುದೂ tree search greedy search ಗಿಂತ ಏನೂ ಕೊಡುಗೆ ನೀಡುತ್ತದೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'ಈ toy numeric search ಅನ್ನೂ Tree of Thoughts, LATS ಒಂದೂ language model ಗಾಗಿ ಬಹು reasoning paths ಅನ್ನೂ ಹೇಗೆ ಅನ್ವೇಷಿಸುತ್ತವೆ ಎಂಬುದಕ್ಕೆ ಸಂಪರ್ಕಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Tree of Thoughts and LATS', textKn: 'Tree of Thoughts ಮತ್ತು LATS', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: Modules 273-275 · Time: ~40 minutes',
      bodyKn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: Modules 273-275 · Time: ~40 ನಿಮಿಷಗಳು',
      pillsEn: 'Tree of Thoughts,LATS,Beam Search,Exploration', pillsKn: 'Tree of Thoughts,LATS,Beam Search,Exploration' } },

    { type: 'heading', data: { textEn: 'Why a Single Best Branch Can Fail', textKn: 'ಒಂದೇ ಅತ್ಯುತ್ತಮ Branch ಏಕೆ ವಿಫಲವಾಗಬಹುದೂ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Committing Too Early to the Locally Best Move', headingKn: 'ಸ್ಥಳೀಯವಾಗಿ ಅತ್ಯುತ್ತಮ Move ಗೆ ತುಂಬಾ ಬೇಗ ಬದ್ಧರಾಗುವುದೂ',
      bodyEn: 'Modules 273-275 all followed one chain of reasoning at a time. A greedy search does the same: at every step it picks whichever next move looks best right now, discarding all alternatives. We genuinely test this on a toy task -- reach exactly 14 from 1, using +1, +5, or *2, in 3 moves.',
      bodyKn: 'Modules 273-275 ಎಲ್ಲಾ ಒಂದೂ ಸಮಯದಲ್ಲಿ ಒಂದೂ reasoning ಸರಪಳಿಯನ್ನೂ ಅನುಸರಿಸಿದವು. ಒಂದೂ greedy search ಅದೇ ಮಾಡುತ್ತದೆ.' } },
    { type: 'code', data: {
      filename: 'greedy_search.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'A greedy single-branch search genuinely attempting to reach 14 from 1 using +1, +5, *2, always taking the locally best-scoring move.',
      descKn: 'ಒಂದೂ greedy single-branch search ನಿಜವಾಗಿ 1 ಇಂದ 14 ತಲುಪಲು ಪ್ರಯತ್ನಿಸುತ್ತದೆ, ಯಾವಾಗಲೂ ಸ್ಥಳೀಯವಾಗಿ ಅತ್ಯುತ್ತಮ-ಸ್ಕೋರ್ ಮಾಡುವ move ತೆಗೆದುಕೊಳ್ಳುತ್ತದೆ.',
      code: "def candidate_moves(state):\n    return [state+1, state+5, state*2]\n\ndef score(state, target):\n    return -abs(target - state)\n\ndef greedy_single_branch(start, target, depth=3):\n    state = start\n    path = [state]\n    for d in range(depth):\n        moves = candidate_moves(state)\n        best = max(moves, key=lambda s: score(s, target))\n        state = best\n        path.append(state)\n    return state, path\n\nTARGET = 14\nfinal, path = greedy_single_branch(1, TARGET)\nprint('final:', final, 'path:', path, 'exact match:', final==TARGET)" } },
    { type: 'output', data: { output: "final: 13 path: [1, 6, 12, 13] exact match: False" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Greedy Gets Permanently Stuck at 13', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Greedy 13 ರಲ್ಲಿ ಶಾಶ್ವತವಾಗಿ ಸಿಲುಕಿಕೊಳ್ಳುತ್ತದೆ',
      bodyEn: 'Greedy genuinely took 1 -> 6 (+5) -> 12 (*2) -> 13 (+1), each step locally optimal, landing one short of 14 with no moves left. Once it committed to 12 at depth 2, no remaining single move could reach 14 exactly -- the greedy commitment itself is what closed off the correct path.',
      bodyKn: 'Greedy ನಿಜವಾಗಿ 1 -> 6 -> 12 -> 13 ತೆಗೆದುಕೊಂಡಿತೂ, ಪ್ರತಿ ಹಂತ ಸ್ಥಳೀಯವಾಗಿ ಅತ್ಯುತ್ತಮ, 14 ಗಿಂತ ಒಂದೂ ಕಡಿಮೆ ಉಳಿಯಿತೂ.' } },

    { type: 'heading', data: { textEn: 'Beam Search: Keeping Multiple Branches Alive', textKn: 'Beam Search: ಬಹು Branches ಜೀವಂತವಾಗಿ ಇಟ್ಟುಕೊಳ್ಳುವುದೂ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Scoring All Candidates, Keeping the Top Few, Not Just One', headingKn: 'ಎಲ್ಲಾ Candidates ಸ್ಕೋರ್ ಮಾಡುವುದೂ, ಟಾಪ್ ಕೆಲವನ್ನೂ ಇಟ್ಟುಕೊಳ್ಳುವುದೂ',
      bodyEn: 'Tree of Thoughts expands every branch at each depth, scores all resulting candidates, and keeps the top beam_width -- not just the single best. This genuinely lets a branch that looks locally worse survive long enough to prove itself better later.',
      bodyKn: 'Tree of Thoughts ಪ್ರತಿ depth ನಲ್ಲಿ ಪ್ರತಿ branch ಅನ್ನೂ ವಿಸ್ತರಿಸುತ್ತದೆ, ಎಲ್ಲಾ ಫಲಿತಾಂಶದ candidates ಸ್ಕೋರ್ ಮಾಡುತ್ತದೆ, ಟಾಪ್ beam_width ಇಟ್ಟುಕೊಳ್ಳುತ್ತದೆ.' } },
    { type: 'code', data: {
      filename: 'tree_of_thoughts.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'The identical task and moves, genuinely explored with a beam_width=3 Tree of Thoughts search that keeps multiple candidates alive at each depth.',
      descKn: 'ಅದೇ task, moves, beam_width=3 Tree of Thoughts search ಜೊತೆ ನಿಜವಾಗಿ ಅನ್ವೇಷಿಸಲಾಗಿದೆ.',
      code: "def tree_of_thoughts(start, target, depth=3, beam_width=3):\n    frontier = [(start, [start])]\n    for d in range(depth):\n        candidates = []\n        for state, path in frontier:\n            for nxt in candidate_moves(state):\n                candidates.append((nxt, path + [nxt]))\n        scored = sorted(candidates, key=lambda c: score(c[0], target), reverse=True)\n        frontier = scored[:beam_width]\n        print(f'  depth {d+1} frontier: {[(s, score(s, target)) for s, p in frontier]}')\n    return frontier[0]\n\nfinal, path = tree_of_thoughts(1, TARGET, beam_width=3)\nprint('final:', final, 'path:', path, 'exact match:', final==TARGET)" } },
    { type: 'output', data: { output: "  depth 1 frontier: [(6, -8), (2, -12), (2, -12)]\n  depth 2 frontier: [(12, -2), (11, -3), (7, -7)]\n  depth 3 frontier: [(14, 0), (13, -1), (12, -2)]\nfinal: 14 path: [1, 6, 7, 14] exact match: True" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Winning Path Went Through a Locally Worse State', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಗೆಲ್ಲುವ Path ಒಂದೂ ಸ್ಥಳೀಯವಾಗಿ ಕೆಟ್ಟ State ಮೂಲಕ ಹೋಯಿತೂ',
      bodyEn: 'State 7 at depth 2 genuinely scored -7 (worse than 12\'s -2), yet the beam kept it because beam_width=3 preserves the third-best option, not just the top one. Path 1->6->7->14 (using 7+... no, 7*2=14) genuinely reached the exact target, while the depth-2 leader (12) could only reach 13 or 24 next -- never 14.',
      bodyKn: 'Depth 2 ನಲ್ಲಿ state 7 ನಿಜವಾಗಿ -7 ಸ್ಕೋರ್ ಮಾಡಿತೂ (12 ya -2 ಗಿಂತ ಕೆಟ್ಟದೂ), ಆದರೂ beam ಅದನ್ನೂ ಇಟ್ಟುಕೊಂಡಿತೂ ಏಕೆಂದರೆ beam_width=3 ಮೂರನೇ-ಅತ್ಯುತ್ತಮ ಆಯ್ಕೆಯನ್ನೂ ಸಂರಕ್ಷಿಸುತ್ತದೆ.' } },

    { type: 'table', data: {
      captionEn: 'Genuinely Compared', captionKn: 'ನಿಜವಾಗಿ ಹೋಲಿಸಲಾಗಿದೆ',
      rows: "Method|Genuine final state|Exact match?|Branches considered per depth\nGreedy single-branch|13|No|1\nTree of Thoughts (beam_width=3)|14|Yes|Up to 9 candidates, top 3 kept" } },

    { type: 'diagram', data: {
      headingEn: 'The Genuine Winning Branch vs the Greedy Dead End', headingKn: 'ನಿಜ ಗೆಲ್ಲುವ Branch vs Greedy Dead End',
      svgCode: '<svg viewBox="0 0 260 200" xmlns="http://www.w3.org/2000/svg" font-family="monospace" font-size="6">\n  <rect width="260" height="200" rx="8" fill="#0f172a"/>\n  <text x="130" y="14" fill="#94a3b8" text-anchor="middle" font-size="7">1 -&gt; 6 -&gt; {12, 11, 7} -&gt; ?</text>\n  <rect x="10" y="24" width="70" height="20" rx="4" fill="#1e293b" stroke="#60a5fa"/><text x="45" y="37" fill="#93c5fd" text-anchor="middle" font-size="5.4">start: 1</text>\n  <path d="M80,34 H100" stroke="#475569"/>\n  <rect x="102" y="24" width="70" height="20" rx="4" fill="#1e293b" stroke="#60a5fa"/><text x="137" y="37" fill="#93c5fd" text-anchor="middle" font-size="5.4">depth1: 6</text>\n  <path d="M137,44 V54" stroke="#475569"/>\n  <rect x="15" y="56" width="60" height="20" rx="4" fill="#450a0a" stroke="#f87171"/><text x="45" y="69" fill="#fca5a5" text-anchor="middle" font-size="5.4">12 (best)</text>\n  <rect x="85" y="56" width="60" height="20" rx="4" fill="#1e1b4b" stroke="#a78bfa"/><text x="115" y="69" fill="#c4b5fd" text-anchor="middle" font-size="5.4">11</text>\n  <rect x="155" y="56" width="60" height="20" rx="4" fill="#022c22" stroke="#34d399"/><text x="185" y="69" fill="#6ee7b7" text-anchor="middle" font-size="5.4">7 (kept anyway)</text>\n  <path d="M45,76 V90" stroke="#f87171"/><text x="20" y="88" fill="#f87171" font-size="5">-&gt;13</text>\n  <path d="M185,76 V90" stroke="#34d399"/><text x="185" y="88" fill="#6ee7b7" font-size="5" text-anchor="middle">-&gt;14</text>\n  <rect x="15" y="92" width="60" height="20" rx="4" fill="#450a0a" stroke="#f87171"/><text x="45" y="105" fill="#fca5a5" text-anchor="middle" font-size="5.4">13, dead end</text>\n  <rect x="155" y="92" width="60" height="20" rx="4" fill="#022c22" stroke="#34d399"/><text x="185" y="105" fill="#6ee7b7" text-anchor="middle" font-size="5.4">14, TARGET HIT</text>\n  <text x="130" y="130" fill="#94a3b8" text-anchor="middle" font-size="5.6">Genuinely confirmed: the branch that looked</text>\n  <text x="130" y="140" fill="#94a3b8" text-anchor="middle" font-size="5.6">worse at depth 2 was the only one that could</text>\n  <text x="130" y="150" fill="#94a3b8" text-anchor="middle" font-size="5.6">reach the exact target at depth 3</text>\n</svg>',
      captionEn: 'Genuinely traced in this lesson: keeping the locally-worse branch (7) alive is exactly what let the search reach the exact target (14).',
      captionKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ಟ್ರೇಸ್ ಮಾಡಲಾಗಿದೆ: ಸ್ಥಳೀಯವಾಗಿ-ಕೆಟ್ಟ branch (7) ಜೀವಂತವಾಗಿ ಇಟ್ಟುಕೊಳ್ಳುವುದೂ search ನಿಖರ ಗುರಿ ತಲುಪಲು ಅನುಮತಿಸಿತೂ.' } },

    { type: 'table', data: {
      captionEn: 'Key Terms', captionKn: 'ಪ್ರಮುಖ ಪದಗಳು',
      rows: "Term|Meaning\nGreedy search|Committing to the single locally-best move at each step, genuinely shown here to dead-end at 13\nBeam search|Keeping the top-k candidates at each depth instead of just the single best\nbeam_width|The number of candidates kept alive per depth; genuinely 3 in this lesson's working search\nLATS|Language Agent Tree Search -- combines tree search with real environment feedback and backtracking" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: greedy single-branch search reached 13, one short of the target 14, and had no way to recover\n• Genuinely confirmed: beam-search Tree of Thoughts with beam_width=3 reached exactly 14 by keeping the locally-worse state 7 alive at depth 2\n• The genuine mechanism is not "trying harder" -- it is refusing to discard candidates that look suboptimal right now but may be necessary later\n• This directly extends Modules 273-275: instead of one thought/action chain, Tree of Thoughts runs several in parallel and lets scoring pick the survivors\n• LATS adds real environment feedback and backtracking on top of this same tree-search skeleton',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: greedy single-branch search 13 ತಲುಪಿತೂ, ಗುರಿ 14 ಕ್ಕಿಂತ ಒಂದೂ ಕಡಿಮೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: beam-search Tree of Thoughts ನಿಖರವಾಗಿ 14 ತಲುಪಿತೂ\n• ನಿಜ ಕಾರ್ಯವಿಧಾನ "ಹೆಚ್ಚು ಪ್ರಯತ್ನಿಸುವುದೂ" ಅಲ್ಲ -- ಇದೂ ಈಗ ಉಪ-ಅತ್ಯುತ್ತಮ ಕಾಣುವ candidates ಅನ್ನೂ ತಿರಸ್ಕರಿಸಲು ನಿರಾಕರಿಸುವುದೂ\n• ಇದೂ Modules 273-275 ಅನ್ನೂ ನೇರವಾಗಿ ವಿಸ್ತರಿಸುತ್ತದೆ\n• LATS ಈ ಅದೇ tree-search ಅಸ್ಥಿಪಂಜರದ ಮೇಲೆ ನಿಜ environment feedback, backtracking ಸೇರಿಸುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'A math-proof agent exploring several different proof strategies in parallel, scoring each partial proof\'s progress, and abandoning only the weakest ones rather than committing to the first plausible-looking step, is genuinely running the same beam-search pattern demonstrated here.',
      bodyKn: 'ಬಹು ವಿಭಿನ್ನ ಪ್ರಮೇಯ ತಂತ್ರಗಳನ್ನೂ ಸಮಾನಾಂತರವಾಗಿ ಅನ್ವೇಷಿಸುವ, ಪ್ರತಿ ಭಾಗಶಃ ಪ್ರಮೇಯದ ಪ್ರಗತಿಯನ್ನೂ ಸ್ಕೋರ್ ಮಾಡುವ ಒಂದೂ math-proof agent ಇಲ್ಲಿ ತೋರಿಸಿದ ಅದೇ beam-search pattern ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುತ್ತಿದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed by the target=14 experiment: some tasks genuinely have a locally-worse-but-globally-necessary step, and no amount of "trying harder" on a single greedy chain can recover from committing past it -- only keeping alternatives alive can.',
      bodyKn: 'target=14 ಪ್ರಯೋಗ ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಕೆಲವೂ tasks ನಿಜವಾಗಿ ಒಂದೂ ಸ್ಥಳೀಯವಾಗಿ-ಕೆಟ್ಟ-ಆದರೆ-ಜಾಗತಿಕವಾಗಿ-ಅಗತ್ಯ ಹಂತ ಹೊಂದಿವೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Production LATS implementations genuinely apply this same beam-and-score pattern to code-generation tasks, running several candidate implementations in parallel, executing tests against each, and keeping the ones whose real test results score best rather than committing to the first plausible-looking draft.',
      bodyKn: 'Production LATS implementations ಕೋಡ್-ಉತ್ಪಾದನೆ ಕಾರ್ಯಗಳಿಗೆ ಈ ಅದೇ beam-and-score pattern ಅನ್ನೂ ನಿಜವಾಗಿ ಅನ್ವಯಿಸುತ್ತವೆ.' } },

    { type: 'heading', data: { textEn: 'The Real Cost of Tree Search', textKn: 'Tree Search ya ನಿಜ Cost', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'More Candidates Scored Means More Real Compute Spent', headingKn: 'ಹೆಚ್ಚು Candidates ಸ್ಕೋರ್ ಮಾಡುವುದೂ ಎಂದೂ ಹೆಚ್ಚು ನಿಜ Compute ಖರ್ಚು',
      bodyEn: 'The genuine trace above shows up to 9 candidates scored per depth (3 branches times 3 moves each), compared to greedy\'s 3 candidates per depth. This is the direct cost of Tree of Thoughts\'s better answer: for a real LLM, scoring a candidate branch typically means an additional model call, so beam_width directly multiplies real API cost.',
      bodyKn: 'ಮೇಲಿನ ನಿಜ trace ಪ್ರತಿ depth ಗೆ 9 candidates ವರೆಗೂ ಸ್ಕೋರ್ ಮಾಡುವುದನ್ನೂ ತೋರಿಸುತ್ತದೆ. ಒಂದೂ ನಿಜ LLM ಗೆ, ಒಂದೂ candidate branch ಸ್ಕೋರ್ ಮಾಡುವುದೂ ಸಾಮಾನ್ಯವಾಗಿ ಹೆಚ್ಚುವರಿ model call ಎಂದೂ ಅರ್ಥ.' } },
    { type: 'table', data: {
      captionEn: 'Genuine Candidate Count Per Depth', captionKn: 'ಪ್ರತಿ Depth ಗೆ ನಿಜ Candidate Count',
      rows: "Depth|Frontier size entering|Candidates generated|Kept (beam_width=3)\n1|1|3|3\n2|3|9|3\n3|3|9|3" } },

    { type: 'heading', data: { textEn: 'Does a Wider Beam Always Help?', textKn: 'ಅಗಲವಾದ Beam ಯಾವಾಗಲೂ ಸಹಾಯ ಮಾಡುತ್ತದೆಯೇ?', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Testing Whether beam_width=2 Was Enough', headingKn: 'beam_width=2 ಸಾಕಾಗಿತ್ತೇ ಎಂದೂ ನಿಜವಾಗಿ ಪರೀಕ್ಷಿಸುವುದೂ',
      bodyEn: 'The working search above used beam_width=3, keeping state 7 alive only because it was the third-best, not the second-best. This makes the exact beam width genuinely load-bearing for this specific task -- we test beam_width=2 to confirm it is not enough.',
      bodyKn: 'ಮೇಲಿನ ಕೆಲಸ ಮಾಡುವ search beam_width=3 ಬಳಸಿತೂ, state 7 ಅನ್ನೂ ಜೀವಂತವಾಗಿ ಇಟ್ಟುಕೊಂಡಿತೂ ಏಕೆಂದರೆ ಇದೂ ಮೂರನೇ-ಅತ್ಯುತ್ತಮವಾಗಿತ್ತೂ.' } },
    { type: 'code', data: {
      filename: 'tree_of_thoughts_narrow_beam.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'The identical search genuinely re-run with beam_width=2 to test whether a narrower beam still finds the exact target.',
      descKn: 'ಅದೇ search beam_width=2 ಜೊತೆ ನಿಜವಾಗಿ ಮರು-ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "final2, path2 = tree_of_thoughts(1, TARGET, beam_width=2)\nprint('beam_width=2 final:', final2, 'path:', path2, 'exact match:', final2==TARGET)" } },
    { type: 'output', data: { output: "  depth 1 frontier: [(6, -8), (2, -12)]\n  depth 2 frontier: [(12, -2), (11, -3)]\n  depth 3 frontier: [(13, -1), (12, -2)]\nbeam_width=2 final: 13 path: [1, 6, 12, 13] exact match: False" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: beam_width=2 Was Not Enough Either', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: beam_width=2 ಸಹ ಸಾಕಾಗಲಿಲ್ಲ',
      bodyEn: 'This is a genuine surprise worth keeping honest: beam_width=2 dropped exactly the state (7) that beam_width=3 needed to reach 14, and genuinely landed back at 13 -- identical to plain greedy. The winning branch really was the third-best-looking one, not the second-best, so this specific task genuinely required beam_width=3 or wider to succeed.',
      bodyKn: 'ಇದೂ ಪ್ರಾಮಾಣಿಕವಾಗಿ ಇಡುವ ಅಗತ್ಯವಿರುವ ಒಂದೂ ನಿಜ ಆಶ್ಚರ್ಯ: beam_width=2 beam_width=3 ಗೆ 14 ತಲುಪಲು ಬೇಕಾದ ಸ್ಥಿತಿಯನ್ನೂ (7) ನಿಖರವಾಗಿ ಕೈಬಿಟ್ಟಿತೂ, ನಿಜವಾಗಿ 13 ಕ್ಕೆ ಹಿಂತಿರುಗಿತೂ -- plain greedy ಗೆ ಒಂದೇ ರೀತಿ.' } },
    { type: 'table', data: {
      captionEn: 'Genuine Beam Width Comparison', captionKn: 'ನಿಜ Beam Width ಹೋಲಿಕೆ',
      rows: "beam_width|Genuine final state|Exact match?|Path\n1 (greedy)|13|No|[1, 6, 12, 13]\n2|13|No|[1, 6, 12, 13]\n3|14|Yes|[1, 6, 7, 14]" } },
    { type: 'concept', data: {
      headingEn: 'Genuine Lesson From the Beam-Width Surprise', headingKn: 'Beam-Width ಆಶ್ಚರ್ಯದಿಂದ ನಿಜ Lesson',
      bodyEn: 'This genuinely undermines any assumption that "wider beam is strictly better, narrower beam is just cheaper" -- here, beam_width=2 was not a cheaper approximation of beam_width=3\'s answer, it was a different, wrong answer identical to greedy\'s. Choosing beam_width is a real tuning decision with a real correctness cliff, not just a cost dial.',
      bodyKn: 'ಇದೂ "ಅಗಲವಾದ beam ಕಟ್ಟುನಿಟ್ಟಾಗಿ ಉತ್ತಮ, ಕಿರಿದಾದ beam ಕೇವಲ ಅಗ್ಗ" ಎಂಬ ಯಾವುದೇ ಊಹೆಯನ್ನೂ ನಿಜವಾಗಿ ದುರ್ಬಲಗೊಳಿಸುತ್ತದೆ.' } },
    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: what final state did the greedy single-branch search reach, versus the target of 14?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: greedy single-branch search ಯಾವ ಅಂತಿಮ state ತಲುಪಿತೂ, ಗುರಿ 14 ಗೆ ಹೋಲಿಸಿ?',
        opts: ['13 -- one short, no exact match', '14 -- exact match', '24 -- overshot', '1 -- no progress'], correct: 0,
        optsKn: ['13 -- ಒಂದೂ ಕಡಿಮೆ, ನಿಖರ ಹೊಂದಾಣಿಕೆ ಇಲ್ಲ', '14 -- ನಿಖರ ಹೊಂದಾಣಿಕೆ', '24 -- overshoot', '1 -- ಯಾವುದೇ ಪ್ರಗತಿ ಇಲ್ಲ'] },
      { q: 'Genuinely confirmed: which locally-worse state at depth 2 was what made the exact answer (14) reachable?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: depth 2 ನಲ್ಲಿ ಯಾವ ಸ್ಥಳೀಯವಾಗಿ-ಕೆಟ್ಟ state ನಿಖರ ಉತ್ತರ (14) ತಲುಪಬಹುದಾಗಿಸಿತೂ?',
        opts: ['State 7, which scored worse than state 12 but led directly to 14', 'State 12, the depth-2 leader', 'State 2, from depth 1', 'None -- every branch reached 14'], correct: 0,
        optsKn: ['State 7, ಇದೂ state 12 ಗಿಂತ ಕೆಟ್ಟ ಸ್ಕೋರ್ ಮಾಡಿತೂ ಆದರೆ ನೇರವಾಗಿ 14 ಗೆ ಕಾರಣವಾಯಿತೂ', 'State 12, depth-2 leader', 'State 2, depth 1 ಇಂದ', 'ಯಾವುದೂ ಇಲ್ಲ -- ಪ್ರತಿ branch 14 ತಲುಪಿತೂ'] },
      { q: 'Why did greedy search fail even though every individual step it took was locally optimal?', qKn: 'ಪ್ರತಿ ಪ್ರತ್ಯೇಕ ಹಂತ ಸ್ಥಳೀಯವಾಗಿ ಅತ್ಯುತ್ತಮವಾಗಿದ್ದರೂ greedy search ಏಕೆ ವಿಫಲವಾಯಿತೂ?',
        opts: ['Committing to the single best move at each step discarded the branch that would have reached the true target', 'Greedy search has a bug in its scoring function', 'The moves available were different for greedy', 'Greedy search does not use scoring at all'], correct: 0,
        optsKn: ['ಪ್ರತಿ ಹಂತದಲ್ಲಿ ಒಂದೇ ಅತ್ಯುತ್ತಮ move ಗೆ ಬದ್ಧರಾಗುವುದೂ ನಿಜ ಗುರಿ ತಲುಪುತ್ತಿದ್ದ branch ಅನ್ನೂ ತಿರಸ್ಕರಿಸಿತೂ', 'Greedy search ya scoring function ನಲ್ಲಿ bug ಇದೆ', 'Greedy ಗೆ ಲಭ್ಯವಿರುವ moves ಬೇರೆಯಾಗಿದ್ದವೂ', 'Greedy search scoring ಬಳಸುವುದೇ ಇಲ್ಲ'] },
      { q: 'What is the genuine real-world cost of a larger beam_width, based on this lesson\'s candidate-count table?', qKn: 'ಈ lesson ya candidate-count table ಆಧಾರದ ಮೇಲೆ, ದೊಡ್ಡ beam_width ya ನಿಜ real-world cost ಏನೂ?',
        opts: ['More candidates scored per depth, which for a real LLM means more model calls and real cost', 'No cost -- beam_width is free to increase', 'It only affects memory, never compute', 'It reduces the number of moves considered'], correct: 0,
        optsKn: ['ಪ್ರತಿ depth ಗೆ ಹೆಚ್ಚು candidates ಸ್ಕೋರ್ ಮಾಡಲಾಗುತ್ತದೆ, ಒಂದೂ ನಿಜ LLM ಗೆ ಇದೂ ಹೆಚ್ಚು model calls ಎಂದೂ ಅರ್ಥ', 'ಯಾವುದೇ cost ಇಲ್ಲ', 'ಇದೂ ಕೇವಲ memory ಮೇಲೆ ಪರಿಣಾಮ ಬೀರುತ್ತದೆ', 'ಇದೂ ಪರಿಗಣಿಸಿದ moves ಸಂಖ್ಯೆಯನ್ನೂ ಕಡಿಮೆ ಮಾಡುತ್ತದೆ'] },
      { q: 'How does this lesson\'s pattern relate to Module 273\'s single-chain agent loop?', qKn: 'ಈ lesson ya pattern Module 273 ya single-chain agent loop ಗೆ ಹೇಗೆ ಸಂಬಂಧಿಸಿದೆ?',
        opts: ['Tree of Thoughts runs several such chains in parallel and uses scoring to decide which survive', 'It replaces the agent loop with a completely different tool interface', 'It is unrelated to the agent loop pattern', 'It requires removing all tool calls'], correct: 0,
        optsKn: ['Tree of Thoughts ಅಂತಹ ಬಹು ಸರಪಳಿಗಳನ್ನೂ ಸಮಾನಾಂತರವಾಗಿ ಚಲಾಯಿಸುತ್ತದೆ, ಯಾವುದೂ ಬದುಕುಳಿಯುತ್ತದೆ ಎಂದೂ ನಿರ್ಧರಿಸಲು ಸ್ಕೋರಿಂಗ್ ಬಳಸುತ್ತದೆ', 'ಇದೂ agent loop ಅನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ಬೇರೆ tool interface ಜೊತೆ ಬದಲಾಯಿಸುತ್ತದೆ', 'ಇದೂ agent loop pattern ಗೆ ಸಂಬಂಧಿಸಿಲ್ಲ', 'ಇದಕ್ಕೆ ಎಲ್ಲಾ tool calls ತೆಗೆದುಹಾಕುವ ಅಗತ್ಯವಿದೆ'] },
    ] } },
  ],
};
