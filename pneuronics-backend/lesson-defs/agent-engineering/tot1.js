module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6066020ed05b321517",
 "order": 0,
 "type": "interactive",
 "duration": 70,
 "difficulty": "advanced",
 "status": "published",
 "title": "Tree of Thoughts and LATS: Deliberate Search (Part 1 of 3) — Reasoning as Search, Beam Pruning and the Evaluator",
 "titleKn": "Tree of Thoughts ಮತ್ತು LATS: ಉದ್ದೇಶಪೂರ್ವಕ ಹುಡುಕಾಟ (ಭಾಗ 1 / 3) — ಹುಡುಕಾಟವಾಗಿ ತರ್ಕ, Beam ಕತ್ತರಿಸುವಿಕೆ ಮತ್ತು Evaluator",
 "desc": "Treat reasoning as search: build Thought nodes, a value function and a beam search, reproduce the lesson's 15-thought trace, then measure beam widths 1 to 27, a 30-start sweep, a start where greedy loses the winner, and a bad evaluator that defeats every width.",
 "descKn": "ತರ್ಕವನ್ನು ಹುಡುಕಾಟವಾಗಿ ಪರಿಗಣಿಸಿ: Thought ನೋಡ್‌ಗಳು, value function ಮತ್ತು beam search ನಿರ್ಮಿಸಿ, ಪಾಠದ 15-thought trace ಮರುಸೃಷ್ಟಿಸಿ, ನಂತರ beam ಅಗಲ 1 ರಿಂದ 27, 30-ಆರಂಭಗಳ sweep, greedy ವಿಜೇತನನ್ನು ಕಳೆದುಕೊಳ್ಳುವ ಆರಂಭ, ಮತ್ತು ಪ್ರತಿ ಅಗಲವನ್ನು ಸೋಲಿಸುವ ಕೆಟ್ಟ evaluator ಅಳೆಯಿರಿ.",
 "objectives": [
  "Explain why a single reasoning chain cannot backtrack and how search fixes that.",
  "Define node, edge, value, breadth, depth and beam width.",
  "Implement beam search over thoughts with a value function.",
  "Measure how beam width trades cost against success and where it plateaus.",
  "Show that search quality is bounded by evaluator quality."
 ],
 "objectivesKn": [
  "ಒಂದೇ ತರ್ಕ ಸರಪಳಿ ಏಕೆ ಹಿಂದೆ ಸರಿಯಲಾರದು ಮತ್ತು ಹುಡುಕಾಟ ಅದನ್ನು ಹೇಗೆ ಸರಿಪಡಿಸುತ್ತದೆ ಎಂದು ವಿವರಿಸಿ.",
  "Node, edge, value, breadth, depth ಮತ್ತು beam width ವ್ಯಾಖ್ಯಾನಿಸಿ.",
  "Value function ಜೊತೆ thoughts ಮೇಲೆ beam search ಅಳವಡಿಸಿ.",
  "Beam ಅಗಲ ವೆಚ್ಚ ಮತ್ತು ಯಶಸ್ಸನ್ನು ಹೇಗೆ ವಿನಿಮಯಿಸುತ್ತದೆ ಮತ್ತು ಎಲ್ಲಿ ಸಮತಟ್ಟಾಗುತ್ತದೆ ಎಂದು ಅಳೆಯಿರಿ.",
  "ಹುಡುಕಾಟ ಗುಣಮಟ್ಟ evaluator ಗುಣಮಟ್ಟದಿಂದ ಮಿತಿಗೊಂಡಿದೆ ಎಂದು ತೋರಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Tree of Thoughts and LATS: Deliberate Search (Part 1 of 3)",
    "textKn": "Tree of Thoughts ಮತ್ತು LATS: ಉದ್ದೇಶಪೂರ್ವಕ ಹುಡುಕಾಟ (ಭಾಗ 1 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~75 minutes. Part 1 of 3: why a single reasoning chain can fail, reasoning as search, and Tree of Thoughts with beam pruning. Every output was genuinely produced by tot_1.py on Python 3.14.5. The thought generator and evaluator are deterministic arithmetic stand-ins for an LLM. The source text for this part was cut off partway through, and the remaining material is reconstructed from the lesson's own description and then checked by running it. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~75 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ ಮೊದಲನೆಯದು: ಒಂದೇ ತರ್ಕ ಸರಪಳಿ ಏಕೆ ವಿಫಲವಾಗಬಹುದು, ಹುಡುಕಾಟವಾಗಿ ತರ್ಕ, ಮತ್ತು beam ಕತ್ತರಿಸುವಿಕೆ ಇರುವ Tree of Thoughts. ಎಲ್ಲಾ output tot_1.py ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. Thought generator ಮತ್ತು evaluator LLM ಗೆ ನಿರ್ಧಾರಾತ್ಮಕ ಅಂಕಗಣಿತ ಬದಲಿಗಳು. ಈ ಭಾಗದ ಮೂಲ ಪಠ್ಯ ಮಧ್ಯದಲ್ಲೇ ಕತ್ತರಿಸಲ್ಪಟ್ಟಿತ್ತು, ಮತ್ತು ಉಳಿದ ವಿಷಯವನ್ನು ಪಾಠದ ಸ್ವಂತ ವಿವರಣೆಯಿಂದ ಪುನರ್ರಚಿಸಿ ಚಲಾಯಿಸಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Reasoning as Search",
    "textKn": "ಹುಡುಕಾಟವಾಗಿ ತರ್ಕ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why One Chain Can Fail",
    "headingKn": "ಒಂದು ಸರಪಳಿ ಏಕೆ ವಿಫಲವಾಗಬಹುದು",
    "bodyEn": "A linear reasoning chain s0 -> s1 -> s2 -> s3 commits to one continuation at each step. If s1 is a bad state, s2 and s3 are conditioned on it: each step may look reasonable given the one before, and the whole trajectory is still wrong. The architecture, not only the model, forces an early commitment and gives no way back to s0 to try another s1. Tree of Thoughts treats reasoning as search over a state space: generate several candidate thoughts, evaluate them, spend effort on the promising ones, and keep alternatives alive so the search can recover.",
    "bodyKn": "ರೇಖೀಯ ತರ್ಕ ಸರಪಳಿ s0 -> s1 -> s2 -> s3 ಪ್ರತಿ ಹಂತದಲ್ಲಿ ಒಂದು ಮುಂದುವರಿಕೆಗೆ ಬದ್ಧವಾಗುತ್ತದೆ. s1 ಕೆಟ್ಟ ಸ್ಥಿತಿಯಾದರೆ s2 ಮತ್ತು s3 ಅದರ ಮೇಲೆ ಅವಲಂಬಿತ: ಪ್ರತಿ ಹಂತ ಹಿಂದಿನದನ್ನು ನೋಡಿದರೆ ಸಮಂಜಸವಾಗಿ ಕಾಣಬಹುದು, ಮತ್ತು ಇಡೀ trajectory ಇನ್ನೂ ತಪ್ಪು. ಬರಿಯ ಮಾದರಿಯಲ್ಲ, ವಿನ್ಯಾಸವೇ ಆರಂಭಿಕ ಬದ್ಧತೆಯನ್ನು ಒತ್ತಾಯಿಸುತ್ತದೆ ಮತ್ತು ಬೇರೆ s1 ಪ್ರಯತ್ನಿಸಲು s0 ಗೆ ಹಿಂತಿರುಗುವ ದಾರಿ ನೀಡುವುದಿಲ್ಲ. Tree of Thoughts ತರ್ಕವನ್ನು ಸ್ಥಿತಿ ಸ್ಥಳದ ಮೇಲಿನ ಹುಡುಕಾಟವಾಗಿ ಪರಿಗಣಿಸುತ್ತದೆ: ಹಲವು ಅಭ್ಯರ್ಥಿ thoughts ಉತ್ಪಾದಿಸಿ, ಮೌಲ್ಯಮಾಪನ ಮಾಡಿ, ಭರವಸೆಯವುಗಳ ಮೇಲೆ ಪ್ರಯತ್ನ ವ್ಯಯಿಸಿ, ಪರ್ಯಾಯಗಳನ್ನು ಜೀವಂತವಾಗಿಡಿ, ಹಾಗಾಗಿ ಹುಡುಕಾಟ ಚೇತರಿಸಿಕೊಳ್ಳಬಹುದು."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "A Real Beam Search Trace",
    "headingKn": "ನಿಜವಾದ Beam Search Trace",
    "svgCode": "<svg viewBox=\"0 0 300 210\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\">\n  <rect width=\"300\" height=\"210\" rx=\"8\" fill=\"#0f172a\"/>\n  <text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">Beam search over thoughts (breadth 3, beam 2)</text>\n  <rect x=\"125\" y=\"22\" width=\"50\" height=\"20\" rx=\"4\" fill=\"#1e293b\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"35\" fill=\"#fde68a\" text-anchor=\"middle\">5</text>\n  <path d=\"M140,42 L60,66 M150,42 V66 M160,42 L240,66\" stroke=\"#475569\"/>\n  <rect x=\"30\" y=\"66\" width=\"60\" height=\"22\" rx=\"4\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"60\" y=\"80\" fill=\"#6ee7b7\" text-anchor=\"middle\">9  .062</text>\n  <rect x=\"120\" y=\"66\" width=\"60\" height=\"22\" rx=\"4\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"150\" y=\"80\" fill=\"#6ee7b7\" text-anchor=\"middle\">10 .067</text>\n  <rect x=\"210\" y=\"66\" width=\"60\" height=\"22\" rx=\"4\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"240\" y=\"80\" fill=\"#fecaca\" text-anchor=\"middle\">4  .048 X</text>\n  <path d=\"M60,88 L40,112 M60,88 L80,112 M150,88 L130,112 M150,88 L170,112\" stroke=\"#475569\"/>\n  <rect x=\"15\" y=\"112\" width=\"50\" height=\"20\" rx=\"4\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"40\" y=\"125\" fill=\"#fecaca\" text-anchor=\"middle\">13 X</text>\n  <rect x=\"70\" y=\"112\" width=\"50\" height=\"20\" rx=\"4\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"95\" y=\"125\" fill=\"#6ee7b7\" text-anchor=\"middle\">18 .14</text>\n  <rect x=\"125\" y=\"112\" width=\"50\" height=\"20\" rx=\"4\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#fecaca\" text-anchor=\"middle\">14 X</text>\n  <rect x=\"180\" y=\"112\" width=\"50\" height=\"20\" rx=\"4\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"205\" y=\"125\" fill=\"#6ee7b7\" text-anchor=\"middle\">20 .20</text>\n  <path d=\"M205,132 V152\" stroke=\"#475569\"/>\n  <rect x=\"150\" y=\"152\" width=\"110\" height=\"22\" rx=\"4\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"205\" y=\"166\" fill=\"#fde68a\" text-anchor=\"middle\">24  1.000 GOAL</text>\n  <text x=\"150\" y=\"196\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">green kept, red pruned (X), 15 thoughts generated</text>\n</svg>",
    "captionEn": "From start 5: three children, keep the best two, expand them, keep the best two again, and reach 24 at depth 3. Green nodes are kept and red ones are pruned.",
    "captionKn": "ಆರಂಭ 5 ರಿಂದ: ಮೂರು ಮಕ್ಕಳು, ಅತ್ಯುತ್ತಮ ಎರಡನ್ನು ಉಳಿಸಿ, ಅವನ್ನು ವಿಸ್ತರಿಸಿ, ಮತ್ತೆ ಅತ್ಯುತ್ತಮ ಎರಡನ್ನು ಉಳಿಸಿ, ಆಳ 3 ರಲ್ಲಿ 24 ತಲುಪುತ್ತದೆ. ಹಸಿರು ನೋಡ್‌ಗಳು ಉಳಿದವು, ಕೆಂಪು ಕತ್ತರಿಸಲ್ಪಟ್ಟವು."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "The vocabulary of search",
    "headingKn": "ಹುಡುಕಾಟದ ಶಬ್ದಕೋಶ",
    "headers": [
     "Term",
     "Meaning",
     "In our code"
    ],
    "rows": [
     [
      "Node",
      "A thought: a partial reasoning state",
      "Thought(expression, value, score, depth)"
     ],
     [
      "Edge",
      "An expansion: an action that produces a child",
      "expand(): +4, *2, -1"
     ],
     [
      "Value",
      "An estimate of how promising a state is",
      "evaluate(): 1 / (1 + distance to 24)"
     ],
     [
      "Breadth",
      "Children generated per node (K)",
      "BREADTH = 3"
     ],
     [
      "Depth",
      "Steps from the root",
      "MAX_DEPTH = 4"
     ],
     [
      "Beam width",
      "How many nodes survive each level",
      "BEAM_WIDTH = 2"
     ]
    ]
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why Search Explodes and How a Beam Controls It",
    "headingKn": "ಹುಡುಕಾಟ ಏಕೆ ಸ್ಫೋಟಿಸುತ್ತದೆ ಮತ್ತು Beam ಹೇಗೆ ನಿಯಂತ್ರಿಸುತ್ತದೆ",
    "bodyEn": "With breadth K and depth D an unpruned tree has K^D leaves and 1 + K + ... + K^D nodes. For K = 3 that is 27 leaves and 40 nodes at depth 3, 59,049 leaves at depth 10, and with K = 5 and depth 10 it is 9,765,625 leaves. Beam search keeps only the best B nodes per level, so each later level expands at most B x K children. Pruning saves compute but risks discarding the branch that contains the solution, which is the trade-off the run below measures.",
    "bodyKn": "Breadth K ಮತ್ತು ಆಳ D ಜೊತೆ ಕತ್ತರಿಸದ ಮರಕ್ಕೆ K^D ಎಲೆಗಳು ಮತ್ತು 1 + K + ... + K^D ನೋಡ್‌ಗಳಿವೆ. K = 3 ಗೆ ಆಳ 3 ರಲ್ಲಿ 27 ಎಲೆಗಳು ಮತ್ತು 40 ನೋಡ್‌ಗಳು, ಆಳ 10 ರಲ್ಲಿ 59,049 ಎಲೆಗಳು, ಮತ್ತು K = 5, ಆಳ 10 ರಲ್ಲಿ 9,765,625 ಎಲೆಗಳು. Beam search ಪ್ರತಿ ಮಟ್ಟಕ್ಕೆ ಅತ್ಯುತ್ತಮ B ನೋಡ್‌ಗಳನ್ನು ಮಾತ್ರ ಉಳಿಸುತ್ತದೆ, ಹಾಗಾಗಿ ಪ್ರತಿ ನಂತರದ ಮಟ್ಟ ಗರಿಷ್ಠ B x K ಮಕ್ಕಳನ್ನು ವಿಸ್ತರಿಸುತ್ತದೆ. ಕತ್ತರಿಸುವಿಕೆ ಲೆಕ್ಕಾಚಾರ ಉಳಿಸುತ್ತದೆ ಆದರೆ ಪರಿಹಾರ ಇರುವ ಶಾಖೆಯನ್ನು ಬಿಸಾಡುವ ಅಪಾಯ ತರುತ್ತದೆ; ಕೆಳಗಿನ ಓಟ ಅಳೆಯುವ ವಿನಿಮಯ ಇದು."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Building Tree of Thoughts",
    "textKn": "Tree of Thoughts ನಿರ್ಮಿಸುವುದು",
    "level": "H2"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "tot_1.py",
    "headingEn": "Thought, the value function, expansion and beam search",
    "headingKn": "Thought, value function, ವಿಸ್ತರಣೆ ಮತ್ತು beam search",
    "descEn": "The root is 5 and the target is 24. expand() is our stand-in for an LLM policy proposing three next thoughts, and evaluate() is the value function. tot_search generates children for every frontier node, scores and ranks them, keeps the top beam_width, checks the goal and repeats. explored counts every generated thought.",
    "descKn": "ಮೂಲ 5 ಮತ್ತು ಗುರಿ 24. expand() ಮೂರು ಮುಂದಿನ thoughts ಪ್ರಸ್ತಾಪಿಸುವ LLM policy ಗೆ ನಮ್ಮ ಬದಲಿ, ಮತ್ತು evaluate() value function. tot_search ಪ್ರತಿ frontier ನೋಡ್‌ಗೆ ಮಕ್ಕಳನ್ನು ಉತ್ಪಾದಿಸಿ, ಅಂಕ ನೀಡಿ ಶ್ರೇಣೀಕರಿಸಿ, ಅಗ್ರ beam_width ಉಳಿಸಿ, ಗುರಿ ಪರಿಶೀಲಿಸಿ ಪುನರಾವರ್ತಿಸುತ್ತದೆ. explored ಉತ್ಪಾದಿಸಿದ ಪ್ರತಿ thought ಅನ್ನು ಎಣಿಸುತ್ತದೆ.",
    "code": "TARGET = 24\nBREADTH = 3\nBEAM_WIDTH = 2\nMAX_DEPTH = 4\n\n\n@dataclass\nclass Thought:\n    expression: str\n    value: int\n    score: float = 0.0\n    depth: int = 0\n\n\ndef evaluate(node: Thought, target: int = TARGET) -> float:\n    \"\"\"Value function: 1 / (1 + distance to target).\"\"\"\n    return 1 / (1 + abs(target - node.value))\n\n\ndef expand(node: Thought) -> list[Thought]:\n    d = node.depth + 1\n    return [\n        Thought(f\"({node.expression} + 4)\", node.value + 4, depth=d),\n        Thought(f\"({node.expression} * 2)\", node.value * 2, depth=d),\n        Thought(f\"({node.expression} - 1)\", node.value - 1, depth=d),\n    ]\n\n\ndef fmt(n: Thought) -> str:\n    return f\"{n.expression} => {n.value} [score={n.score:.3f}]\"\n\n\ndef tot_search(start=5, beam_width=BEAM_WIDTH, max_depth=MAX_DEPTH, scorer=evaluate, verbose=False):\n    root = Thought(str(start), start, depth=0)\n    root.score = scorer(root)\n    frontier = [root]\n    explored = 0\n    for depth in range(1, max_depth + 1):\n        if verbose:\n            print(f\"\\n=== DEPTH {depth} ===\")\n        candidates = []\n        for parent in frontier:\n            if verbose:\n                print(f\"\\nExpanding parent: {fmt(parent)}\")\n            for child in expand(parent):\n                child.score = scorer(child)\n                explored += 1\n                candidates.append(child)\n                if verbose:\n                    print(f\"  candidate: {fmt(child)}\")\n        candidates.sort(key=lambda n: n.score, reverse=True)\n        if verbose:\n            print(\"\\nRanked candidates:\")\n            for i, n in enumerate(candidates, 1):\n                print(f\"  {i}. {fmt(n)}\")\n        keep, pruned = candidates[:beam_width], candidates[beam_width:]\n        if verbose:\n            print(\"\\nBeam keeps:\")\n            for n in keep:\n                print(\"  \" + fmt(n))\n            print(\"\\nPruned:\")\n            for n in pruned:\n                print(\"  \" + fmt(n))\n        for n in keep:\n            if n.value == TARGET:\n                return n, explored\n        frontier = keep\n    return None, explored"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "tot_1.py",
    "headingEn": "main(): five experiments",
    "headingKn": "main(): ಐದು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() prints the full trace, compares beam widths 1, 2, 3, 9 and 27, sweeps every start value from 1 to 30, swaps in a bad evaluator, and then looks for a start where the beam throws away the winner.",
    "descKn": "main() ಸಂಪೂರ್ಣ trace ಮುದ್ರಿಸುತ್ತದೆ, beam ಅಗಲ 1, 2, 3, 9 ಮತ್ತು 27 ಹೋಲಿಸುತ್ತದೆ, 1 ರಿಂದ 30 ರ ಪ್ರತಿ ಆರಂಭ ಮೌಲ್ಯವನ್ನು sweep ಮಾಡುತ್ತದೆ, ಕೆಟ್ಟ evaluator ಹಾಕುತ್ತದೆ, ಮತ್ತು beam ವಿಜೇತನನ್ನು ಬಿಸಾಡುವ ಆರಂಭವನ್ನು ಹುಡುಕುತ್ತದೆ.",
    "code": "def main():\n    section(\"1. The lesson's trace (breadth 3, beam 2, start 5, target 24)\")\n    node, explored = tot_search(verbose=True)\n    print(\"\\nGOAL FOUND\" if node else \"\\nNO GOAL\")\n    print(\"Thoughts explored:\", explored)\n    print(\"Expression:\", node.expression, \"| value:\", node.value, f\"| score: {node.score:.3f} | depth: {node.depth}\")\n\n    section(\"2. Beam width: 1 (greedy), 2, 3 and unpruned\")\n    print(f\"{'beam':>6} {'found':>6} {'explored':>9}  expression\")\n    for w in (1, 2, 3, 9, 27):\n        n, ex = tot_search(beam_width=w)\n        print(f\"{w:>6} {str(n is not None):>6} {ex:>9}  {n.expression if n else '-'}\")\n    print(\"full tree through depth 3 would generate 3 + 9 + 27 =\", 3 + 9 + 27, \"thoughts\")\n\n    section(\"3. Sweep: every start value 1..30, depth 4\")\n    print(f\"{'beam':>6} {'solved':>7} {'avg explored':>13}\")\n    for w in (1, 2, 3, 5):\n        solved, total_ex = 0, 0\n        for s in range(1, 31):\n            n, ex = tot_search(start=s, beam_width=w)\n            solved += n is not None\n            total_ex += ex\n        print(f\"{w:>6} {solved:>4}/30 {total_ex / 30:>13.1f}\")\n\n    section(\"4. A bad evaluator: score = value / 100 (prefers bigger numbers)\")\n    bad = lambda n: n.value / 100\n    for w in (1, 2, 3):\n        n, ex = tot_search(beam_width=w, scorer=bad)\n        print(f\"beam {w}: found={n is not None} explored={ex} expression={n.expression if n else '-'}\")\n    good_n, _ = tot_search()\n    print(\"with the distance evaluator, beam 2 finds:\", good_n.expression)\n\n    section(\"5. Where the beam throws away the winner\")\n    # start 3 -> shortest path is 3*2=6, 6*2=12, 12*2=24 (depth 3)\n    for w in (1, 2):\n        n, ex = tot_search(start=3, beam_width=w)\n        print(f\"start 3, beam {w}: found={n is not None} explored={ex} expression={n.expression if n else '-'}\")\n    print(\"scores of the depth-1 children of 3 (value -> score):\")\n    for c in expand(Thought(\"3\", 3)):\n        c.score = evaluate(c)\n        print(f\"  {c.expression} => {c.value}  score={c.score:.4f}\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. The lesson's trace (breadth 3, beam 2, start 5, target 24) ---\n\n=== DEPTH 1 ===\n\nExpanding parent: 5 => 5 [score=0.050]\n  candidate: (5 + 4) => 9 [score=0.062]\n  candidate: (5 * 2) => 10 [score=0.067]\n  candidate: (5 - 1) => 4 [score=0.048]\n\nRanked candidates:\n  1. (5 * 2) => 10 [score=0.067]\n  2. (5 + 4) => 9 [score=0.062]\n  3. (5 - 1) => 4 [score=0.048]\n\nBeam keeps:\n  (5 * 2) => 10 [score=0.067]\n  (5 + 4) => 9 [score=0.062]\n\nPruned:\n  (5 - 1) => 4 [score=0.048]\n\n=== DEPTH 2 ===\n\nExpanding parent: (5 * 2) => 10 [score=0.067]\n  candidate: ((5 * 2) + 4) => 14 [score=0.091]\n  candidate: ((5 * 2) * 2) => 20 [score=0.200]\n  candidate: ((5 * 2) - 1) => 9 [score=0.062]\n\nExpanding parent: (5 + 4) => 9 [score=0.062]\n  candidate: ((5 + 4) + 4) => 13 [score=0.083]\n  candidate: ((5 + 4) * 2) => 18 [score=0.143]\n  candidate: ((5 + 4) - 1) => 8 [score=0.059]\n\nRanked candidates:\n  1. ((5 * 2) * 2) => 20 [score=0.200]\n  2. ((5 + 4) * 2) => 18 [score=0.143]\n  3. ((5 * 2) + 4) => 14 [score=0.091]\n  4. ((5 + 4) + 4) => 13 [score=0.083]\n  5. ((5 * 2) - 1) => 9 [score=0.062]\n  6. ((5 + 4) - 1) => 8 [score=0.059]\n\nBeam keeps:\n  ((5 * 2) * 2) => 20 [score=0.200]\n  ((5 + 4) * 2) => 18 [score=0.143]\n\nPruned:\n  ((5 * 2) + 4) => 14 [score=0.091]\n  ((5 + 4) + 4) => 13 [score=0.083]\n  ((5 * 2) - 1) => 9 [score=0.062]\n  ((5 + 4) - 1) => 8 [score=0.059]\n\n=== DEPTH 3 ===\n\nExpanding parent: ((5 * 2) * 2) => 20 [score=0.200]\n  candidate: (((5 * 2) * 2) + 4) => 24 [score=1.000]\n  candidate: (((5 * 2) * 2) * 2) => 40 [score=0.059]\n  candidate: (((5 * 2) * 2) - 1) => 19 [score=0.167]\n\nExpanding parent: ((5 + 4) * 2) => 18 [score=0.143]\n  candidate: (((5 + 4) * 2) + 4) => 22 [score=0.333]\n  candidate: (((5 + 4) * 2) * 2) => 36 [score=0.077]\n  candidate: (((5 + 4) * 2) - 1) => 17 [score=0.125]\n\nRanked candidates:\n  1. (((5 * 2) * 2) + 4) => 24 [score=1.000]\n  2. (((5 + 4) * 2) + 4) => 22 [score=0.333]\n  3. (((5 * 2) * 2) - 1) => 19 [score=0.167]\n  4. (((5 + 4) * 2) - 1) => 17 [score=0.125]\n  5. (((5 + 4) * 2) * 2) => 36 [score=0.077]\n  6. (((5 * 2) * 2) * 2) => 40 [score=0.059]\n\nBeam keeps:\n  (((5 * 2) * 2) + 4) => 24 [score=1.000]\n  (((5 + 4) * 2) + 4) => 22 [score=0.333]\n\nPruned:\n  (((5 * 2) * 2) - 1) => 19 [score=0.167]\n  (((5 + 4) * 2) - 1) => 17 [score=0.125]\n  (((5 + 4) * 2) * 2) => 36 [score=0.077]\n  (((5 * 2) * 2) * 2) => 40 [score=0.059]\n\nGOAL FOUND\nThoughts explored: 15\nExpression: (((5 * 2) * 2) + 4) | value: 24 | score: 1.000 | depth: 3\n\n--- 2. Beam width: 1 (greedy), 2, 3 and unpruned ---\n  beam  found  explored  expression\n     1   True         9  (((5 * 2) * 2) + 4)\n     2   True        15  (((5 * 2) * 2) + 4)\n     3   True        21  (((5 * 2) * 2) + 4)\n     9   True        39  (((5 * 2) * 2) + 4)\n    27   True        39  (((5 * 2) * 2) + 4)\nfull tree through depth 3 would generate 3 + 9 + 27 = 39 thoughts\n\n--- 3. Sweep: every start value 1..30, depth 4 ---\n  beam  solved  avg explored\n     1   21/30           9.4\n     2   23/30          15.4\n     3   24/30          20.7\n     5   24/30          27.1\n\n--- 4. A bad evaluator: score = value / 100 (prefers bigger numbers) ---\nbeam 1: found=False explored=12 expression=-\nbeam 2: found=False explored=21 expression=-\nbeam 3: found=False explored=30 expression=-\nwith the distance evaluator, beam 2 finds: (((5 * 2) * 2) + 4)\n\n--- 5. Where the beam throws away the winner ---\nstart 3, beam 1: found=False explored=12 expression=-\nstart 3, beam 2: found=True explored=15 expression=(((3 * 2) * 2) * 2)\nscores of the depth-1 children of 3 (value -> score):\n  (3 + 4) => 7  score=0.0556\n  (3 * 2) => 6  score=0.0526\n  (3 - 1) => 2  score=0.0435"
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Reading the Verified Output",
    "textKn": "ಪರಿಶೀಲಿತ Output ಓದುವುದು",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "The Lesson's Trace Reproduces Exactly",
    "headingKn": "ಪಾಠದ Trace ನಿಖರವಾಗಿ ಮರುಸೃಷ್ಟಿಯಾಗುತ್ತದೆ",
    "bodyEn": "Section 1 prints the search: depth 1 keeps 10 and 9 and prunes 4; depth 2 keeps 20 and 18 and prunes four others; depth 3 expands 20 into 24, 40 and 19, finds 24 with score 1.000, and stops. It generated 15 thoughts (3 + 6 + 6) and the winning expression is (((5 * 2) * 2) + 4), which is 20 + 4 = 24. An unpruned search would generate 39 thoughts through depth 3, so the beam avoided about 60 percent of that work here.",
    "bodyKn": "ವಿಭಾಗ 1 ಹುಡುಕಾಟ ಮುದ್ರಿಸುತ್ತದೆ: ಆಳ 1 10 ಮತ್ತು 9 ಉಳಿಸಿ 4 ಕತ್ತರಿಸುತ್ತದೆ; ಆಳ 2 20 ಮತ್ತು 18 ಉಳಿಸಿ ಇನ್ನೂ ನಾಲ್ಕು ಕತ್ತರಿಸುತ್ತದೆ; ಆಳ 3 20 ಅನ್ನು 24, 40 ಮತ್ತು 19 ಆಗಿ ವಿಸ್ತರಿಸಿ, 24 ಅನ್ನು ಅಂಕ 1.000 ಜೊತೆ ಕಂಡು ನಿಲ್ಲುತ್ತದೆ. ಅದು 15 thoughts (3 + 6 + 6) ಉತ್ಪಾದಿಸಿತು ಮತ್ತು ಗೆದ್ದ ಅಭಿವ್ಯಕ್ತಿ (((5 * 2) * 2) + 4), ಅಂದರೆ 20 + 4 = 24. ಕತ್ತರಿಸದ ಹುಡುಕಾಟ ಆಳ 3 ರವರೆಗೆ 39 thoughts ಉತ್ಪಾದಿಸುತ್ತಿತ್ತು, ಹಾಗಾಗಿ ಇಲ್ಲಿ beam ಸುಮಾರು 60 ಶೇಕಡಾ ಕೆಲಸ ತಪ್ಪಿಸಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: On This Instance Greedy Search Was Enough",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಈ ಪ್ರಕರಣದಲ್ಲಿ Greedy ಹುಡುಕಾಟ ಸಾಕಾಗಿತ್ತು",
    "bodyEn": "Section 2 varies the beam width on the same problem. Beam 1 (pure greedy) finds the same expression after generating only 9 thoughts, beam 2 needs 15, beam 3 needs 21, and a beam of 9 or 27 is the full 39. The distance-to-target evaluator is unusually informative here, so the extra breadth buys nothing on this one start value. That is a warning about drawing conclusions from a single example: breadth only pays when the locally best branch can be a dead end.",
    "bodyKn": "ವಿಭಾಗ 2 ಅದೇ ಸಮಸ್ಯೆಯಲ್ಲಿ beam ಅಗಲ ಬದಲಿಸುತ್ತದೆ. Beam 1 (ಶುದ್ಧ greedy) ಕೇವಲ 9 thoughts ಉತ್ಪಾದಿಸಿ ಅದೇ ಅಭಿವ್ಯಕ್ತಿ ಕಂಡುಹಿಡಿಯುತ್ತದೆ, beam 2 ಗೆ 15, beam 3 ಗೆ 21, ಮತ್ತು beam 9 ಅಥವಾ 27 ಪೂರ್ಣ 39. ಗುರಿಗೆ-ದೂರ evaluator ಇಲ್ಲಿ ಅಸಾಧಾರಣವಾಗಿ ಮಾಹಿತಿಪೂರ್ಣ, ಆದ್ದರಿಂದ ಹೆಚ್ಚುವರಿ ಅಗಲ ಈ ಒಂದು ಆರಂಭ ಮೌಲ್ಯದಲ್ಲಿ ಏನನ್ನೂ ಖರೀದಿಸುವುದಿಲ್ಲ. ಒಂದೇ ಉದಾಹರಣೆಯಿಂದ ತೀರ್ಮಾನ ಎಳೆಯುವುದರ ವಿರುದ್ಧ ಇದು ಎಚ್ಚರಿಕೆ: ಸ್ಥಳೀಯವಾಗಿ ಅತ್ಯುತ್ತಮ ಶಾಖೆ ಸತ್ತ ಅಂತ್ಯವಾಗಬಹುದಾದಾಗ ಮಾತ್ರ ಅಗಲ ಲಾಭ ನೀಡುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Measured: Breadth Helps, Then Plateaus",
    "headingKn": "ನಿಜವಾಗಿ ಅಳೆದದ್ದು: ಅಗಲ ಸಹಾಯ ಮಾಡುತ್ತದೆ, ನಂತರ ಸಮತಟ್ಟಾಗುತ್ತದೆ",
    "bodyEn": "Section 3 tries every start value from 1 to 30 with depth 4. Beam 1 solves 21 of 30 at an average of 9.4 thoughts, beam 2 solves 23 at 15.4, beam 3 solves 24 at 20.7, and beam 5 also solves 24 at 27.1. Widening the beam rescues some starts and then stops helping: six starts are unsolved at every width, so for them the limit is the depth budget and the operator set, not the pruning. Cost keeps rising while the solved count does not.",
    "bodyKn": "ವಿಭಾಗ 3 ಆಳ 4 ರೊಂದಿಗೆ 1 ರಿಂದ 30 ರ ಪ್ರತಿ ಆರಂಭ ಮೌಲ್ಯ ಪ್ರಯತ್ನಿಸುತ್ತದೆ. Beam 1 ಸರಾಸರಿ 9.4 thoughts ನಲ್ಲಿ 30 ರಲ್ಲಿ 21 ಪರಿಹರಿಸುತ್ತದೆ, beam 2 15.4 ರಲ್ಲಿ 23, beam 3 20.7 ರಲ್ಲಿ 24, ಮತ್ತು beam 5 27.1 ರಲ್ಲಿ ಸಹ 24. Beam ಅಗಲಿಸುವುದು ಕೆಲವು ಆರಂಭಗಳನ್ನು ರಕ್ಷಿಸಿ ನಂತರ ಸಹಾಯ ನಿಲ್ಲಿಸುತ್ತದೆ: ಆರು ಆರಂಭಗಳು ಪ್ರತಿ ಅಗಲದಲ್ಲೂ ಪರಿಹರಿಸಲ್ಪಡುವುದಿಲ್ಲ, ಆದ್ದರಿಂದ ಅವಕ್ಕೆ ಮಿತಿ ಕತ್ತರಿಸುವಿಕೆ ಅಲ್ಲ, ಆಳ budget ಮತ್ತು operator ಗಣ. ಪರಿಹರಿಸಿದ ಸಂಖ್ಯೆ ಏರದಿದ್ದರೂ ವೆಚ್ಚ ಏರುತ್ತಲೇ ಇರುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Beam Search Can Throw Away the Winner",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Beam Search ವಿಜೇತನನ್ನು ಬಿಸಾಡಬಹುದು",
    "bodyEn": "Section 5 uses start 3. The depth-1 children score 7 at 0.0556, 6 at 0.0526 and 2 at 0.0435. The path that works goes through 6 (3 * 2 = 6, then 12, then 24). Beam 1 keeps only 7, never recovers, and fails after 12 thoughts, while beam 2 keeps 6 as well and finds (((3 * 2) * 2) * 2). The value function ranked the winning branch second, and a beam of one cannot afford to be wrong about the ranking. Breadth buys insurance against an imperfect evaluator.",
    "bodyKn": "ವಿಭಾಗ 5 ಆರಂಭ 3 ಬಳಸುತ್ತದೆ. ಆಳ-1 ಮಕ್ಕಳ ಅಂಕ 7 ಗೆ 0.0556, 6 ಗೆ 0.0526 ಮತ್ತು 2 ಗೆ 0.0435. ಕೆಲಸ ಮಾಡುವ ಮಾರ್ಗ 6 ರ ಮೂಲಕ ಹೋಗುತ್ತದೆ (3 * 2 = 6, ನಂತರ 12, ನಂತರ 24). Beam 1 7 ಅನ್ನು ಮಾತ್ರ ಉಳಿಸಿ, ಎಂದೂ ಚೇತರಿಸಿಕೊಳ್ಳದೆ 12 thoughts ನಂತರ ವಿಫಲವಾಗುತ್ತದೆ, ಆದರೆ beam 2 6 ಅನ್ನೂ ಉಳಿಸಿ (((3 * 2) * 2) * 2) ಕಂಡುಹಿಡಿಯುತ್ತದೆ. Value function ಗೆಲ್ಲುವ ಶಾಖೆಯನ್ನು ಎರಡನೇ ಸ್ಥಾನದಲ್ಲಿ ಇಟ್ಟಿತು, ಮತ್ತು ಒಂದರ beam ಶ್ರೇಣೀಕರಣದಲ್ಲಿ ತಪ್ಪಾಗಲು ಶಕ್ತವಲ್ಲ. ಅಪೂರ್ಣ evaluator ವಿರುದ್ಧ ಅಗಲ ವಿಮೆ ಖರೀದಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: A Bad Evaluator Defeats Search at Every Width",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಕೆಟ್ಟ Evaluator ಪ್ರತಿ ಅಗಲದಲ್ಲೂ ಹುಡುಕಾಟವನ್ನು ಸೋಲಿಸುತ್ತದೆ",
    "bodyEn": "Section 4 scores a state as value / 100, which prefers bigger numbers and does not know the target. With beams of 1, 2 and 3 the search finds nothing, generating 12, 21 and 30 thoughts, while the distance evaluator finds the answer with beam 2. The generator was identical in every run. More search with a misaligned value function is more optimisation of the wrong objective, so search quality is bounded by evaluator quality.",
    "bodyKn": "ವಿಭಾಗ 4 ಸ್ಥಿತಿಗೆ value / 100 ಅಂಕ ನೀಡುತ್ತದೆ; ಇದು ದೊಡ್ಡ ಸಂಖ್ಯೆಗಳನ್ನು ಇಷ್ಟಪಡುತ್ತದೆ ಮತ್ತು ಗುರಿ ತಿಳಿದಿಲ್ಲ. Beam 1, 2 ಮತ್ತು 3 ರೊಂದಿಗೆ ಹುಡುಕಾಟ ಏನನ್ನೂ ಕಂಡುಹಿಡಿಯುವುದಿಲ್ಲ, 12, 21 ಮತ್ತು 30 thoughts ಉತ್ಪಾದಿಸುತ್ತದೆ, ಆದರೆ ದೂರ evaluator beam 2 ರಲ್ಲಿ ಉತ್ತರ ಕಂಡುಹಿಡಿಯುತ್ತದೆ. ಪ್ರತಿ ಓಟದಲ್ಲೂ generator ಒಂದೇ. ತಪ್ಪಾಗಿ ಹೊಂದಿಸಿದ value function ಜೊತೆ ಹೆಚ್ಚು ಹುಡುಕಾಟ ತಪ್ಪು ಉದ್ದೇಶದ ಹೆಚ್ಚು ಆಪ್ಟಿಮೈಸೇಶನ್, ಆದ್ದರಿಂದ ಹುಡುಕಾಟ ಗುಣಮಟ್ಟ evaluator ಗುಣಮಟ್ಟದಿಂದ ಮಿತಿಗೊಂಡಿದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "When to Search",
    "textKn": "ಯಾವಾಗ ಹುಡುಕಬೇಕು",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Generate Versus Evaluate",
    "headingKn": "ಉತ್ಪಾದಿಸುವುದು ಮತ್ತು ಮೌಲ್ಯಮಾಪನ",
    "bodyEn": "Generating candidates and judging them are different jobs. In an LLM implementation the model proposes K thoughts and then scores them, either as a number, as a likely/impossible label, or by voting across several evaluations, which costs more calls. Search is only as good as that judgment. Where an exact check exists (the value equals 24, the tests pass), use it instead of asking a model whether a state looks promising.",
    "bodyKn": "ಅಭ್ಯರ್ಥಿಗಳನ್ನು ಉತ್ಪಾದಿಸುವುದು ಮತ್ತು ಅವನ್ನು ನಿರ್ಣಯಿಸುವುದು ಬೇರೆ ಕೆಲಸಗಳು. LLM ಅಳವಡಿಕೆಯಲ್ಲಿ ಮಾದರಿ K thoughts ಪ್ರಸ್ತಾಪಿಸಿ ನಂತರ ಅವಕ್ಕೆ ಅಂಕ ನೀಡುತ್ತದೆ: ಸಂಖ್ಯೆಯಾಗಿ, likely/impossible ಲೇಬಲ್ ಆಗಿ, ಅಥವಾ ಹಲವು ಮೌಲ್ಯಮಾಪನಗಳಲ್ಲಿ ಮತದಾನ ಮೂಲಕ, ಇದು ಹೆಚ್ಚು ಕರೆಗಳ ವೆಚ್ಚ. ಹುಡುಕಾಟ ಆ ನಿರ್ಣಯದಷ್ಟೇ ಉತ್ತಮ. ನಿಖರ ಪರಿಶೀಲನೆ ಇರುವಲ್ಲಿ (ಮೌಲ್ಯ 24 ಕ್ಕೆ ಸಮ, tests ಪಾಸ್) ಸ್ಥಿತಿ ಭರವಸೆಯದೇ ಎಂದು ಮಾದರಿಯನ್ನು ಕೇಳುವ ಬದಲು ಅದನ್ನು ಬಳಸಿ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "It converts extra inference compute into reliability on problems where a single trajectory often fails and candidates can be checked: puzzles with dead ends, code with tests, constraint planning. The structure also gives backtracking and an explicit record of what was tried.",
    "bodyKn": "ಒಂದೇ trajectory ಆಗಾಗ್ಗೆ ವಿಫಲವಾಗುವ ಮತ್ತು ಅಭ್ಯರ್ಥಿಗಳನ್ನು ಪರಿಶೀಲಿಸಬಹುದಾದ ಸಮಸ್ಯೆಗಳಲ್ಲಿ ಹೆಚ್ಚುವರಿ ನಿರ್ಧಾರ-ಸಮಯದ ಲೆಕ್ಕಾಚಾರವನ್ನು ವಿಶ್ವಾಸಾರ್ಹತೆಯಾಗಿ ಪರಿವರ್ತಿಸುತ್ತದೆ: ಸತ್ತ ಅಂತ್ಯಗಳಿರುವ ಒಗಟುಗಳು, tests ಇರುವ ಕೋಡ್, ನಿರ್ಬಂಧ ಯೋಜನೆ. ರಚನೆ ಹಿಂದೆ ಸರಿಯುವಿಕೆ ಮತ್ತು ಏನು ಪ್ರಯತ್ನಿಸಲಾಯಿತು ಎಂಬುದರ ಸ್ಪಷ್ಟ ದಾಖಲೆಯನ್ನೂ ನೀಡುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Where This Appears in AI Systems",
    "headingKn": "AI ವ್ಯವಸ್ಥೆಗಳಲ್ಲಿ ಇದು ಎಲ್ಲಿ ಕಾಣುತ್ತದೆ",
    "bodyEn": "Game of 24 style puzzles, creative writing with a plan to compare, crosswords, and multi-step maths use deliberate search. Coding agents that try several patches and let the tests score them use the same shape. A single factual question or a one-tool lookup does not need it.",
    "bodyKn": "Game of 24 ಶೈಲಿಯ ಒಗಟುಗಳು, ಹೋಲಿಸಲು ಯೋಜನೆ ಇರುವ ಸೃಜನಾತ್ಮಕ ಬರವಣಿಗೆ, ಪದಬಂಧ ಮತ್ತು ಬಹು-ಹಂತದ ಗಣಿತ ಉದ್ದೇಶಪೂರ್ವಕ ಹುಡುಕಾಟ ಬಳಸುತ್ತವೆ. ಹಲವು patches ಪ್ರಯತ್ನಿಸಿ tests ಅಂಕ ನೀಡಲು ಬಿಡುವ coding agents ಅದೇ ರೂಪ ಬಳಸುತ್ತವೆ. ಒಂದು ವಾಸ್ತವ ಪ್ರಶ್ನೆ ಅಥವಾ ಒಂದು-tool ಹುಡುಕಾಟಕ್ಕೆ ಅದು ಬೇಡ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"trees are better than chains.\" Section 2 shows a greedy chain solving the example with 9 thoughts against 15, and section 3 shows six starts that no beam width solves. Search helps when a local choice can be wrong and the evaluator can tell good states from bad ones, and not otherwise.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಮರಗಳು ಸರಪಳಿಗಳಿಗಿಂತ ಉತ್ತಮ.\" ವಿಭಾಗ 2 greedy ಸರಪಳಿ 15 ಕ್ಕೆ ಬದಲಾಗಿ 9 thoughts ನಲ್ಲಿ ಉದಾಹರಣೆ ಪರಿಹರಿಸುವುದನ್ನು, ಮತ್ತು ವಿಭಾಗ 3 ಯಾವ beam ಅಗಲವೂ ಪರಿಹರಿಸದ ಆರು ಆರಂಭಗಳನ್ನು ತೋರಿಸುತ್ತದೆ. ಸ್ಥಳೀಯ ಆಯ್ಕೆ ತಪ್ಪಾಗಬಹುದಾದಾಗ ಮತ್ತು evaluator ಒಳ್ಳೆಯ ಸ್ಥಿತಿಗಳನ್ನು ಕೆಟ್ಟವುಗಳಿಂದ ಬೇರ್ಪಡಿಸಬಲ್ಲಾಗ ಮಾತ್ರ ಹುಡುಕಾಟ ಸಹಾಯ ಮಾಡುತ್ತದೆ, ಇಲ್ಲದಿದ್ದರೆ ಅಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Tree of Thoughts: reasoning as search over alternative thoughts. Thought: a coherent intermediate state. Expansion: generating candidate continuations. Value function: an estimate of how promising a state is. Breadth, depth and beam width: the compute knobs. Pruning: discarding low-ranked candidates. Frontier: nodes currently eligible for expansion. Goal test: the check that ends the search.",
    "bodyKn": "Tree of Thoughts: ಪರ್ಯಾಯ thoughts ಮೇಲಿನ ಹುಡುಕಾಟವಾಗಿ ತರ್ಕ. Thought: ಸುಸಂಗತ ಮಧ್ಯಂತರ ಸ್ಥಿತಿ. Expansion: ಅಭ್ಯರ್ಥಿ ಮುಂದುವರಿಕೆಗಳ ಉತ್ಪಾದನೆ. Value function: ಸ್ಥಿತಿ ಎಷ್ಟು ಭರವಸೆಯದು ಎಂಬ ಅಂದಾಜು. Breadth, depth ಮತ್ತು beam width: ಲೆಕ್ಕಾಚಾರ ಗುಂಡಿಗಳು. Pruning: ಕಡಿಮೆ ಶ್ರೇಣಿಯ ಅಭ್ಯರ್ಥಿಗಳನ್ನು ಬಿಸಾಡುವುದು. Frontier: ಸದ್ಯ ವಿಸ್ತರಣೆಗೆ ಅರ್ಹವಾದ ನೋಡ್‌ಗಳು. Goal test: ಹುಡುಕಾಟ ಮುಗಿಸುವ ಪರಿಶೀಲನೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) A single chain cannot backtrack; search keeps alternatives alive. 2) Unpruned cost is K^D, and a beam keeps it tractable. 3) A beam of one threw away the winner at start 3. 4) Breadth helped (21, 23, 24 of 30) then plateaued. 5) A misaligned evaluator defeated every beam width. 6) Search is only worth its cost where local choices can be wrong. Part 2 replaces the beam with Monte Carlo Tree Search (LATS).",
    "bodyKn": "1) ಒಂದು ಸರಪಳಿ ಹಿಂದೆ ಸರಿಯಲಾರದು; ಹುಡುಕಾಟ ಪರ್ಯಾಯಗಳನ್ನು ಜೀವಂತವಾಗಿಡುತ್ತದೆ. 2) ಕತ್ತರಿಸದ ವೆಚ್ಚ K^D, ಮತ್ತು beam ಅದನ್ನು ನಿಭಾಯಿಸುವಂತೆ ಮಾಡುತ್ತದೆ. 3) ಆರಂಭ 3 ರಲ್ಲಿ ಒಂದರ beam ವಿಜೇತನನ್ನು ಬಿಸಾಡಿತು. 4) ಅಗಲ ಸಹಾಯ ಮಾಡಿತು (30 ರಲ್ಲಿ 21, 23, 24) ನಂತರ ಸಮತಟ್ಟಾಯಿತು. 5) ತಪ್ಪಾಗಿ ಹೊಂದಿಸಿದ evaluator ಪ್ರತಿ beam ಅಗಲವನ್ನು ಸೋಲಿಸಿತು. 6) ಸ್ಥಳೀಯ ಆಯ್ಕೆಗಳು ತಪ್ಪಾಗಬಹುದಾದಲ್ಲಿ ಮಾತ್ರ ಹುಡುಕಾಟ ತನ್ನ ವೆಚ್ಚಕ್ಕೆ ಯೋಗ್ಯ. ಭಾಗ 2 beam ಅನ್ನು Monte Carlo Tree Search (LATS) ನಿಂದ ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "Why can a deeply interleaved single reasoning chain fail when an early step is wrong?",
      "qKn": "ಆರಂಭಿಕ ಹಂತ ತಪ್ಪಾದಾಗ ಒಂದೇ ತರ್ಕ ಸರಪಳಿ ಏಕೆ ವಿಫಲವಾಗಬಹುದು?",
      "opts": [
       "Python cannot recurse",
       "It cannot naturally explore and backtrack among alternatives",
       "LLMs cannot generate several outputs",
       "MCTS needs gradient descent"
      ],
      "optsKn": [
       "Python recurse ಮಾಡಲಾರದು",
       "ಅದು ಪರ್ಯಾಯಗಳನ್ನು ಸ್ವಾಭಾವಿಕವಾಗಿ ಅನ್ವೇಷಿಸಿ ಹಿಂದೆ ಸರಿಯಲಾರದು",
       "LLM ಗಳು ಹಲವು ಔಟ್‌ಪುಟ್ ಉತ್ಪಾದಿಸಲಾರವು",
       "MCTS ಗೆ gradient descent ಬೇಕು"
      ],
      "correct": 1
     },
     {
      "q": "With breadth 3 and depth 3, how many leaves does an unpruned tree have?",
      "qKn": "Breadth 3 ಮತ್ತು ಆಳ 3 ರೊಂದಿಗೆ ಕತ್ತರಿಸದ ಮರಕ್ಕೆ ಎಷ್ಟು ಎಲೆಗಳಿವೆ?",
      "opts": [
       "9",
       "39",
       "27",
       "81"
      ],
      "optsKn": [
       "9",
       "39",
       "27",
       "81"
      ],
      "correct": 2
     },
     {
      "q": "In this lesson's run from start 3, what did beam width 1 do?",
      "qKn": "ಈ ಪಾಠದ ಆರಂಭ 3 ರ ಓಟದಲ್ಲಿ beam ಅಗಲ 1 ಏನು ಮಾಡಿತು?",
      "opts": [
       "Found 24 after 15 thoughts",
       "Failed after discarding the branch through 6",
       "Crashed",
       "Found 24 after 9 thoughts"
      ],
      "optsKn": [
       "15 thoughts ನಂತರ 24 ಕಂಡುಹಿಡಿಯಿತು",
       "6 ರ ಮೂಲಕದ ಶಾಖೆ ಬಿಸಾಡಿ ವಿಫಲವಾಯಿತು",
       "Crash ಆಯಿತು",
       "9 thoughts ನಂತರ 24 ಕಂಡುಹಿಡಿಯಿತು"
      ],
      "correct": 1
     },
     {
      "q": "What happened when the evaluator scored states as value / 100?",
      "qKn": "Evaluator ಸ್ಥಿತಿಗಳಿಗೆ value / 100 ಅಂಕ ನೀಡಿದಾಗ ಏನಾಯಿತು?",
      "opts": [
       "Beam 2 still found 24",
       "No beam width found 24",
       "Only beam 3 found 24",
       "The search ran faster"
      ],
      "optsKn": [
       "Beam 2 ಇನ್ನೂ 24 ಕಂಡುಹಿಡಿಯಿತು",
       "ಯಾವ beam ಅಗಲವೂ 24 ಕಂಡುಹಿಡಿಯಲಿಲ್ಲ",
       "beam 3 ಮಾತ್ರ 24 ಕಂಡುಹಿಡಿಯಿತು",
       "ಹುಡುಕಾಟ ವೇಗವಾಗಿ ಓಡಿತು"
      ],
      "correct": 1
     },
     {
      "q": "When is deliberate search most attractive?",
      "qKn": "ಉದ್ದೇಶಪೂರ್ವಕ ಹುಡುಕಾಟ ಯಾವಾಗ ಅತ್ಯಂತ ಆಕರ್ಷಕ?",
      "opts": [
       "For every simple factual question",
       "When local choices can be wrong and candidates can be evaluated reliably",
       "Only when there is no evaluator",
       "Only during training"
      ],
      "optsKn": [
       "ಪ್ರತಿ ಸರಳ ವಾಸ್ತವ ಪ್ರಶ್ನೆಗೆ",
       "ಸ್ಥಳೀಯ ಆಯ್ಕೆಗಳು ತಪ್ಪಾಗಬಹುದಾದಾಗ ಮತ್ತು ಅಭ್ಯರ್ಥಿಗಳನ್ನು ವಿಶ್ವಾಸಾರ್ಹವಾಗಿ ಮೌಲ್ಯಮಾಪನ ಮಾಡಬಹುದಾದಾಗ",
       "evaluator ಇಲ್ಲದಿದ್ದಾಗ ಮಾತ್ರ",
       "ತರಬೇತಿ ಸಮಯದಲ್ಲಿ ಮಾತ್ರ"
      ],
      "correct": 1
     }
    ]
   }
  }
 ]
};
