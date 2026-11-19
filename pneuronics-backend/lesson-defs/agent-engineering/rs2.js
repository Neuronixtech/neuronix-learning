module.exports = {
 "phaseId": "6a369d6366020ed05b32158c",
 "moduleId": "6a369d6366020ed05b3215a1",
 "order": 1,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Recursive Self-Improvement: Capability vs Alignment (Part 2 of 3) — Release Gates and Effort Splits",
 "titleKn": "Recursive Self-Improvement: Capability ವಿರುದ್ಧ Alignment (ಭಾಗ 2 / 3) — Release Gates ಮತ್ತು ಪ್ರಯತ್ನ ವಿಭಜನೆ",
 "desc": "Run a toy self-improvement loop with an effort split and a release gate and price the alignment tax.",
 "descKn": "ಪ್ರಯತ್ನ ವಿಭಜನೆ ಮತ್ತು release gate ಇರುವ ಆಟಿಕೆ self-improvement ಲೂಪ್ ಓಡಿಸಿ ಮತ್ತು alignment tax ಬೆಲೆ ಕಟ್ಟಿ.",
 "objectives": [
  "Split effort between two goals.",
  "Add a release gate.",
  "Price the capability cost.",
  "Search for the needed split.",
  "Say what a gate cannot do."
 ],
 "objectivesKn": [
  "ಎರಡು ಗುರಿಗಳ ನಡುವೆ ಪ್ರಯತ್ನ ವಿಭಜಿಸಿ.",
  "release gate ಸೇರಿಸಿ.",
  "capability ವೆಚ್ಚ ಬೆಲೆ ಕಟ್ಟಿ.",
  "ಬೇಕಾದ ವಿಭಜನೆ ಹುಡುಕಿ.",
  "gate ಏನು ಮಾಡಲಾರದು ಹೇಳಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Recursive Self-Improvement: Capability vs Alignment (Part 2 of 3)",
    "textKn": "Recursive Self-Improvement: Capability ವಿರುದ್ಧ Alignment (ಭಾಗ 2 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 2 of 3: effort splits between capability and alignment, a release gate on the alignment-to-capability ratio, the capability cost of holding the ratio and the split needed when alignment research is harder. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind recursive self-improvement and the capability-versus-alignment gap (exponential growth arithmetic, release gates, effort allocation, evaluator noise, gaming and check intervals), not the real software, and capability and alignment are two numbers updated by invented growth rules and evaluator readings are random draws, so nothing measures a real system and no language model is involved, so no real LLM behaviour is measured. The original code/main.py was not supplied, so the labs are our own implementation. The 20 percent and 5 percent per-generation growth rates come from the lesson as illustrative numbers, not measurements; every other growth rule, threshold and noise level in the labs is invented, and the lab results show arithmetic and not the behavior of any real system. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 2ನೆಯದು: capability ಮತ್ತು alignment ನಡುವೆ ಪ್ರಯತ್ನ ವಿಭಜನೆ, alignment-ಯಿಂದ-capability ಅನುಪಾತದ ಮೇಲೆ release gate, ಅನುಪಾತ ಹಿಡಿಯುವ capability ವೆಚ್ಚ ಮತ್ತು alignment ಸಂಶೋಧನೆ ಕಠಿಣವಾದಾಗ ಬೇಕಾದ ವಿಭಜನೆ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು recursive self-improvement ಮತ್ತು capability-ವಿರುದ್ಧ-alignment ಅಂತರ (ಘಾತೀಯ ಬೆಳವಣಿಗೆ ಅಂಕಗಣಿತ, release gates, ಪ್ರಯತ್ನ ಹಂಚಿಕೆ, ಮೌಲ್ಯಮಾಪಕ noise, gaming ಮತ್ತು ಪರಿಶೀಲನೆ ಅಂತರಗಳು) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು capability ಮತ್ತು alignment ಕಲ್ಪಿತ ಬೆಳವಣಿಗೆ ನಿಯಮಗಳಿಂದ ನವೀಕರಿಸುವ ಎರಡು ಸಂಖ್ಯೆಗಳು ಮತ್ತು ಮೌಲ್ಯಮಾಪಕ ಓದುವಿಕೆಗಳು ಯಾದೃಚ್ಛಿಕ ಎಳೆತಗಳು, ಆದ್ದರಿಂದ ಯಾವುದೂ ನಿಜ ವ್ಯವಸ್ಥೆ ಅಳೆಯುವುದಿಲ್ಲ ಮತ್ತು ಭಾಷಾ ಮಾದರಿ ಇಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ code/main.py ಒದಗಿಸಿರಲಿಲ್ಲ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ನಮ್ಮದೇ ಅನುಷ್ಠಾನ. 20 ಶೇಕಡಾ ಮತ್ತು 5 ಶೇಕಡಾ ಪ್ರತಿ-ಜನರೇಶನ್ ಬೆಳವಣಿಗೆ ದರಗಳು lesson ನಿಂದ ವಿವರಣಾತ್ಮಕ ಸಂಖ್ಯೆಗಳಾಗಿ ಬಂದಿವೆ, ಅಳತೆಗಳಲ್ಲ; ಲ್ಯಾಬ್‌ಗಳ ಇತರ ಪ್ರತಿ ಬೆಳವಣಿಗೆ ನಿಯಮ, ಮಿತಿ ಮತ್ತು noise ಮಟ್ಟ ಕಲ್ಪಿತ, ಮತ್ತು ಲ್ಯಾಬ್ ಫಲಿತಾಂಶಗಳು ಅಂಕಗಣಿತ ತೋರಿಸುತ್ತವೆ, ಯಾವುದೇ ನಿಜ ವ್ಯವಸ್ಥೆಯ ವರ್ತನೆ ಅಲ್ಲ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "A Gate Stops the Loop, the Split Fixes the Ratio",
    "textKn": "Gate ಲೂಪ್ ನಿಲ್ಲಿಸುತ್ತದೆ, ವಿಭಜನೆ ಅನುಪಾತ ಸರಿಪಡಿಸುತ್ತದೆ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Two Levers in a Toy Loop",
    "headingKn": "ಆಟಿಕೆ ಲೂಪ್‌ನಲ್ಲಿ ಎರಡು ಲಿವರ್‌ಗಳು",
    "bodyEn": "Part 1 showed the gap. This part adds two levers. A fraction f of each generation effort goes to alignment and the rest to capability, and a release gate halts the loop when the alignment-to-capability ratio falls below a threshold. The lab runs several splits without and with the gate, measures what holding the ratio costs in capability and searches for the split that avoids a halt when alignment research gives less growth per unit of effort. The growth rules are invented.",
    "bodyKn": "ಭಾಗ 1 ಅಂತರ ತೋರಿಸಿತು. ಈ ಭಾಗ ಎರಡು ಲಿವರ್ ಸೇರಿಸುತ್ತದೆ. ಪ್ರತಿ ಜನರೇಶನ್ ಪ್ರಯತ್ನದ ಭಾಗ f alignment ಗೆ ಮತ್ತು ಉಳಿದದ್ದು capability ಗೆ ಹೋಗುತ್ತದೆ, ಮತ್ತು alignment-ಯಿಂದ-capability ಅನುಪಾತ ಮಿತಿಗಿಂತ ಕೆಳಗೆ ಬಿದ್ದಾಗ release gate ಲೂಪ್ ನಿಲ್ಲಿಸುತ್ತದೆ. ಲ್ಯಾಬ್ gate ಇಲ್ಲದೆ ಮತ್ತು ಇರುವಂತೆ ಹಲವು ವಿಭಜನೆ ಓಡಿಸುತ್ತದೆ, ಅನುಪಾತ ಹಿಡಿಯುವುದು capability ನಲ್ಲಿ ಎಷ್ಟು ವೆಚ್ಚ ಅಳೆಯುತ್ತದೆ ಮತ್ತು alignment ಸಂಶೋಧನೆ ಪ್ರತಿ ಪ್ರಯತ್ನ ಘಟಕಕ್ಕೆ ಕಡಿಮೆ ಬೆಳವಣಿಗೆ ನೀಡಿದಾಗ halt ತಪ್ಪಿಸುವ ವಿಭಜನೆ ಹುಡುಕುತ್ತದೆ. ಬೆಳವಣಿಗೆ ನಿಯಮಗಳು ಕಲ್ಪಿತ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Release Gate and Effort Split",
    "headingKn": "Release Gate ಮತ್ತು ಪ್ರಯತ್ನ ವಿಭಜನೆ",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">a gate stops the loop and the split sets whether it runs</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">effort</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">split f</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">loop</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">each generation</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">gate</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">ratio >= tau</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">halt</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">if below</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">a gate stops the loop and the split sets whether it runs</text></svg>",
    "captionEn": "A fraction f of effort goes to alignment and a gate halts a falling ratio.",
    "captionKn": "ಪ್ರಯತ್ನದ ಭಾಗ f alignment ಗೆ ಹೋಗುತ್ತದೆ ಮತ್ತು gate ಇಳಿಯುವ ಅನುಪಾತ ನಿಲ್ಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "captionEn": "Rules of the toy loop",
    "captionKn": "ಆಟಿಕೆ ಲೂಪ್‌ನ ನಿಯಮಗಳು",
    "rows": "Rule|Value\ncapability update|C x (1 + 0.20 x (1 - f))\nalignment update|A x (1 + ga x f), ga 0.20, 0.10 or 0.05\ngate|halt when A / C falls under 0.5\nstart|both at 100\nsplits tried|f from 0.00 to 1.00 in steps of 0.05"
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Building and Testing the Ideas",
    "textKn": "ಕಲ್ಪನೆಗಳನ್ನು ನಿರ್ಮಿಸಿ ಪರೀಕ್ಷಿಸುವುದು",
    "level": "H2"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "rs_2.py",
    "headingEn": "One generation and the gated loop",
    "headingKn": "ಒಂದು ಜನರೇಶನ್ ಮತ್ತು gated ಲೂಪ್",
    "descEn": "step applies one generation with effort split f and run_loop repeats it and halts when the ratio falls under the gate threshold tau.",
    "descKn": "step ಪ್ರಯತ್ನ ವಿಭಜನೆ f ನೊಂದಿಗೆ ಒಂದು ಜನರೇಶನ್ ಅನ್ವಯಿಸುತ್ತದೆ ಮತ್ತು run_loop ಅದನ್ನು ಪುನರಾವರ್ತಿಸಿ ಅನುಪಾತ gate ಮಿತಿ tau ಗಿಂತ ಕೆಳಗೆ ಬಿದ್ದಾಗ ನಿಲ್ಲುತ್ತದೆ.",
    "code": "def step(c, a, f, gc=0.20, ga=0.20):\r\n    \"\"\"One generation: effort fraction f goes to alignment, the rest to capability. The growth available is gc for capability and ga for alignment.\"\"\"\r\n    return c * (1 + gc * (1 - f)), a * (1 + ga * f)\r\n\r\n\r\ndef run_loop(f, gens, tau=None, gc=0.20, ga=0.20):\r\n    c = a = 100.0\r\n    for n in range(1, gens + 1):\r\n        c, a = step(c, a, f, gc, ga)\r\n        if tau is not None and a / c < tau:\r\n            return n, c, a, \"halted\"\r\n    return gens, c, a, \"ran all generations\""
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "rs_2.py",
    "headingEn": "main(): experiments",
    "headingKn": "main(): ಪ್ರಯೋಗಗಳು",
    "descEn": "main() runs splits without a gate, with a gate, prices the capability cost and searches for the needed split.",
    "descKn": "main() gate ಇಲ್ಲದೆ, gate ಜೊತೆ ವಿಭಜನೆ ಓಡಿಸಿ, capability ವೆಚ್ಚ ಬೆಲೆ ಕಟ್ಟಿ ಮತ್ತು ಬೇಕಾದ ವಿಭಜನೆ ಹುಡುಕುತ್ತದೆ.",
    "code": "def main():\r\n    section(\"1. Genuinely running: no gate, different effort splits (20 generations)\")\r\n    for f in (0.0, 0.25, 0.5, 0.75):\r\n        n, c, a, why = run_loop(f, 20)\r\n        print(f\"alignment share f={f:.2f}: capability {c:8.1f} | alignment {a:8.1f} | alignment/capability {a / c:5.2f}\")\r\n    print(\"with all effort on capability alignment never moves, and the ratio falls only as fast as capability rises; with half the effort each, both grow the same amount per generation from the same start, so the ratio stays at 1.00; the growth formula is a modelling choice\")\r\n\r\n    section(\"2. Genuinely running: a gate with threshold 0.5 on alignment/capability\")\r\n    for f in (0.0, 0.25, 0.4, 0.5):\r\n        n, c, a, why = run_loop(f, 40, tau=0.5)\r\n        print(f\"f={f:.2f}: {why} after {n:2d} generations | capability {c:8.1f} | alignment/capability {a / c:5.2f}\")\r\n    print(\"a loop that puts nothing into alignment is halted after a few generations, a loop with a small share is halted later and a loop that keeps the ratio from falling below the threshold runs to the limit; the gate stops the loop but does not by itself repair the ratio\")\r\n\r\n    section(\"3. Genuinely computing: the cost in capability of keeping the ratio at 1\")\r\n    for f in (0.0, 0.25, 0.5):\r\n        _, c, a, _ = run_loop(f, 20)\r\n        print(f\"f={f:.2f}: capability after 20 generations {c:8.1f} ({c / run_loop(0.0, 20)[1]:.3f} of the all-capability run)\")\r\n    print(\"moving effort to alignment slows capability growth, which is the price of holding the ratio, and with these rules half the effort cuts final capability to 17.5 percent of the all-capability run and a quarter of the effort to 42.7 percent; a real tradeoff would not be this clean\")\r\n\r\n    section(\"4. Genuinely measuring: how a slower alignment rate changes the needed split (threshold 0.5, 40 generations)\")\r\n    for ga in (0.20, 0.10, 0.05):\r\n        ok = None\r\n        for f100 in range(0, 101, 5):\r\n            f = f100 / 100\r\n            n, c, a, why = run_loop(f, 40, tau=0.5, ga=ga)\r\n            if why == \"ran all generations\":\r\n                ok = f\r\n                break\r\n        print(f\"alignment growth available {ga:.2f}: smallest tried f that avoids the halt {ok}\")\r\n    print(\"when alignment research is harder, meaning it gives less growth per unit of effort, the loop needs a larger share of effort on alignment or it halts, and the slowest rate needed 0.75 of the effort against 0.5 for the fastest; the grid has steps of 0.05 and the growth rules are invented\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: no gate, different effort splits (20 generations) ---\nalignment share f=0.00: capability   3833.8 | alignment    100.0 | alignment/capability  0.03\nalignment share f=0.25: capability   1636.7 | alignment    265.3 | alignment/capability  0.16\nalignment share f=0.50: capability    672.7 | alignment    672.7 | alignment/capability  1.00\nalignment share f=0.75: capability    265.3 | alignment   1636.7 | alignment/capability  6.17\nwith all effort on capability alignment never moves, and the ratio falls only as fast as capability rises; with half the effort each, both grow the same amount per generation from the same start, so the ratio stays at 1.00; the growth formula is a modelling choice\n\n--- 2. Genuinely running: a gate with threshold 0.5 on alignment/capability ---\nf=0.00: halted after  4 generations | capability    207.4 | alignment/capability  0.48\nf=0.25: halted after  8 generations | capability    305.9 | alignment/capability  0.48\nf=0.40: halted after 20 generations | capability    964.6 | alignment/capability  0.48\nf=0.50: ran all generations after 40 generations | capability   4525.9 | alignment/capability  1.00\na loop that puts nothing into alignment is halted after a few generations, a loop with a small share is halted later and a loop that keeps the ratio from falling below the threshold runs to the limit; the gate stops the loop but does not by itself repair the ratio\n\n--- 3. Genuinely computing: the cost in capability of keeping the ratio at 1 ---\nf=0.00: capability after 20 generations   3833.8 (1.000 of the all-capability run)\nf=0.25: capability after 20 generations   1636.7 (0.427 of the all-capability run)\nf=0.50: capability after 20 generations    672.7 (0.175 of the all-capability run)\nmoving effort to alignment slows capability growth, which is the price of holding the ratio, and with these rules half the effort cuts final capability to 17.5 percent of the all-capability run and a quarter of the effort to 42.7 percent; a real tradeoff would not be this clean\n\n--- 4. Genuinely measuring: how a slower alignment rate changes the needed split (threshold 0.5, 40 generations) ---\nalignment growth available 0.20: smallest tried f that avoids the halt 0.5\nalignment growth available 0.10: smallest tried f that avoids the halt 0.65\nalignment growth available 0.05: smallest tried f that avoids the halt 0.75\nwhen alignment research is harder, meaning it gives less growth per unit of effort, the loop needs a larger share of effort on alignment or it halts, and the slowest rate needed 0.75 of the effort against 0.5 for the fastest; the grid has steps of 0.05 and the growth rules are invented"
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Experiment Walkthrough",
    "textKn": "Experiment ನಡೆದಾಟ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 1: No gate, different effort splits (20 generations)",
    "headingKn": "ಪ್ರಯೋಗ 1: No gate, different effort splits (20 generations)",
    "bodyEn": "What it ran: No gate, different effort splits (20 generations). What the lab concluded: with all effort on capability alignment never moves, and the ratio falls only as fast as capability rises; with half the effort each, both grow the same amount per generation from the same start, so the ratio stays at 1.00; the growth formula is a modelling choice",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: No gate, different effort splits (20 generations). ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): with all effort on capability alignment never moves, and the ratio falls only as fast as capability rises; with half the effort each, both grow the same amount per generation from the same start, so the ratio stays at 1.00; the growth formula is a modelling choice"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. Genuinely running: no gate, different effort splits (20 generations) ---\nalignment share f=0.00: capability   3833.8 | alignment    100.0 | alignment/capability  0.03\nalignment share f=0.25: capability   1636.7 | alignment    265.3 | alignment/capability  0.16\nalignment share f=0.50: capability    672.7 | alignment    672.7 | alignment/capability  1.00\nalignment share f=0.75: capability    265.3 | alignment   1636.7 | alignment/capability  6.17"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: A gate with threshold 0.5 on alignment/capability",
    "headingKn": "ಪ್ರಯೋಗ 2: A gate with threshold 0.5 on alignment/capability",
    "bodyEn": "What it ran: A gate with threshold 0.5 on alignment/capability. What the lab concluded: a loop that puts nothing into alignment is halted after a few generations, a loop with a small share is halted later and a loop that keeps the ratio from falling below the threshold runs to the limit; the gate stops the loop but does not by itself repair the ratio",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A gate with threshold 0.5 on alignment/capability. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a loop that puts nothing into alignment is halted after a few generations, a loop with a small share is halted later and a loop that keeps the ratio from falling below the threshold runs to the limit; the gate stops the loop but does not by itself repair the ratio"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely running: a gate with threshold 0.5 on alignment/capability ---\nf=0.00: halted after  4 generations | capability    207.4 | alignment/capability  0.48\nf=0.25: halted after  8 generations | capability    305.9 | alignment/capability  0.48\nf=0.40: halted after 20 generations | capability    964.6 | alignment/capability  0.48\nf=0.50: ran all generations after 40 generations | capability   4525.9 | alignment/capability  1.00"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: The cost in capability of keeping the ratio at 1",
    "headingKn": "ಪ್ರಯೋಗ 3: The cost in capability of keeping the ratio at 1",
    "bodyEn": "What it ran: The cost in capability of keeping the ratio at 1. What the lab concluded: moving effort to alignment slows capability growth, which is the price of holding the ratio, and with these rules half the effort cuts final capability to 17.5 percent of the all-capability run and a quarter of the effort to 42.7 percent; a real tradeoff would not be this clean",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: The cost in capability of keeping the ratio at 1. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): moving effort to alignment slows capability growth, which is the price of holding the ratio, and with these rules half the effort cuts final capability to 17.5 percent of the all-capability run and a quarter of the effort to 42.7 percent; a real tradeoff would not be this clean"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely computing: the cost in capability of keeping the ratio at 1 ---\nf=0.00: capability after 20 generations   3833.8 (1.000 of the all-capability run)\nf=0.25: capability after 20 generations   1636.7 (0.427 of the all-capability run)\nf=0.50: capability after 20 generations    672.7 (0.175 of the all-capability run)"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 4: How a slower alignment rate changes the needed split (threshold 0.5, 40 generations)",
    "headingKn": "ಪ್ರಯೋಗ 4: How a slower alignment rate changes the needed split (threshold 0.5, 40 generations)",
    "bodyEn": "What it ran: How a slower alignment rate changes the needed split (threshold 0.5, 40 generations). What the lab concluded: when alignment research is harder, meaning it gives less growth per unit of effort, the loop needs a larger share of effort on alignment or it halts, and the slowest rate needed 0.75 of the effort against 0.5 for the fastest; the grid has steps of 0.05 and the growth rules are invented",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: How a slower alignment rate changes the needed split (threshold 0.5, 40 generations). ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): when alignment research is harder, meaning it gives less growth per unit of effort, the loop needs a larger share of effort on alignment or it halts, and the slowest rate needed 0.75 of the effort against 0.5 for the fastest; the grid has steps of 0.05 and the growth rules are invented"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 4. Genuinely measuring: how a slower alignment rate changes the needed split (threshold 0.5, 40 generations) ---\nalignment growth available 0.20: smallest tried f that avoids the halt 0.5\nalignment growth available 0.10: smallest tried f that avoids the halt 0.65\nalignment growth available 0.05: smallest tried f that avoids the halt 0.75"
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
    "headingEn": "Genuinely Found: Splits and the Gate",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ವಿಭಜನೆಗಳು ಮತ್ತು Gate",
    "bodyEn": "Section 1 with no gate over 20 generations: f 0.00, 0.25, 0.50 and 0.75 gave capability 3833.8, 1636.7, 672.7 and 265.3, alignment 100.0, 265.3, 672.7 and 1636.7, and ratios 0.03, 0.16, 1.00 and 6.17. Section 2 with a gate at 0.5: f 0.00 halted after 4 generations, 0.25 after 8, 0.40 after 20 and 0.50 ran all 40.",
    "bodyKn": "ವಿಭಾಗ 1 gate ಇಲ್ಲದೆ 20 ಜನರೇಶನ್: f 0.00, 0.25, 0.50 ಮತ್ತು 0.75 capability 3833.8, 1636.7, 672.7 ಮತ್ತು 265.3, alignment 100.0, 265.3, 672.7 ಮತ್ತು 1636.7, ಮತ್ತು ಅನುಪಾತ 0.03, 0.16, 1.00 ಮತ್ತು 6.17 ನೀಡಿತು. ವಿಭಾಗ 2 0.5 gate ನೊಂದಿಗೆ: f 0.00 4 ಜನರೇಶನ್ ನಂತರ, 0.25 8 ನಂತರ, 0.40 20 ನಂತರ halt ಆಯಿತು ಮತ್ತು 0.50 ಎಲ್ಲಾ 40 ಓಡಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Cost and Needed Split",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ವೆಚ್ಚ ಮತ್ತು ಬೇಕಾದ ವಿಭಜನೆ",
    "bodyEn": "Section 3: capability after 20 generations was 3833.8 at f 0.00 (1.000 of the all-capability run), 1636.7 at 0.25 (0.427) and 672.7 at 0.50 (0.175). Section 4: when alignment growth available was 0.20, 0.10 and 0.05 the smallest tried split that avoided a halt was 0.5, 0.65 and 0.75.",
    "bodyKn": "ವಿಭಾಗ 3: 20 ಜನರೇಶನ್ ನಂತರ capability f 0.00 ರಲ್ಲಿ 3833.8 (ಎಲ್ಲಾ-capability ಓಟದ 1.000), 0.25 ರಲ್ಲಿ 1636.7 (0.427) ಮತ್ತು 0.50 ರಲ್ಲಿ 672.7 (0.175). ವಿಭಾಗ 4: ಲಭ್ಯ alignment ಬೆಳವಣಿಗೆ 0.20, 0.10 ಮತ್ತು 0.05 ಆಗಿದ್ದಾಗ halt ತಪ್ಪಿಸಿದ ಚಿಕ್ಕ ಪ್ರಯತ್ನಿಸಿದ ವಿಭಜನೆ 0.5, 0.65 ಮತ್ತು 0.75."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A gate can stop a loop whose ratio is falling, but only a sustained share of effort on alignment keeps the ratio from falling in the first place, and that share has a price.",
    "bodyKn": "ಅನುಪಾತ ಇಳಿಯುತ್ತಿರುವ ಲೂಪ್ ಅನ್ನು gate ನಿಲ್ಲಿಸಬಲ್ಲದು, ಆದರೆ alignment ಮೇಲೆ ನಿರಂತರ ಪ್ರಯತ್ನದ ಪಾಲು ಮಾತ್ರ ಅನುಪಾತ ಮೊದಲಿಗೇ ಇಳಿಯದಂತೆ ತಡೆಯುತ್ತದೆ, ಮತ್ತು ಆ ಪಾಲಿಗೆ ಬೆಲೆ ಇದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"a gate keeps the system aligned.\" With f 0.00 it only halted the loop after 4 generations with the ratio at 0.48.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"gate ವ್ಯವಸ್ಥೆಯನ್ನು aligned ಆಗಿಡುತ್ತದೆ.\" f 0.00 ನಲ್ಲಿ ಅದು ಅನುಪಾತ 0.48 ಇರುವಾಗ 4 ಜನರೇಶನ್ ನಂತರ ಲೂಪ್ ಅನ್ನು ಮಾತ್ರ ನಿಲ್ಲಿಸಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Release gate: a check that halts or allows continuation. Effort split f: share of effort on alignment. Halt: stop the loop. Alignment tax: capability given up to hold the ratio.",
    "bodyKn": "Release gate: ಮುಂದುವರಿಕೆ ನಿಲ್ಲಿಸುವ ಅಥವಾ ಅನುಮತಿಸುವ ಪರಿಶೀಲನೆ. Effort split f: alignment ಮೇಲಿನ ಪ್ರಯತ್ನದ ಪಾಲು. Halt: ಲೂಪ್ ನಿಲ್ಲಿಸಿ. Alignment tax: ಅನುಪಾತ ಹಿಡಿಯಲು ಬಿಟ್ಟುಕೊಟ್ಟ capability."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) f 0.50 held the ratio at 1.00. 2) A gate halted f 0.00 after 4 generations. 3) Half the effort left 17.5 percent of the capability. 4) Harder alignment research needed a split of 0.75. 5) The growth rules are invented.",
    "bodyKn": "1) f 0.50 ಅನುಪಾತವನ್ನು 1.00 ರಲ್ಲಿ ಹಿಡಿಯಿತು. 2) gate f 0.00 ಅನ್ನು 4 ಜನರೇಶನ್ ನಂತರ ನಿಲ್ಲಿಸಿತು. 3) ಅರ್ಧ ಪ್ರಯತ್ನ 17.5 ಶೇಕಡಾ capability ಬಿಟ್ಟಿತು. 4) ಕಠಿಣ alignment ಸಂಶೋಧನೆಗೆ 0.75 ವಿಭಜನೆ ಬೇಕಾಯಿತು. 5) ಬೆಳವಣಿಗೆ ನಿಯಮಗಳು ಕಲ್ಪಿತ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Try It Yourself",
    "textKn": "ನೀವೇ ಪ್ರಯತ್ನಿಸಿ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Run the lab",
    "headingKn": "ಲ್ಯಾಬ್ ಓಡಿಸಿ",
    "bodyEn": "1) Open a terminal in pneuronics-backend/lesson-defs/labs. 2) Run: python -B rs_2.py (in Git Bash on Windows: PYTHONIOENCODING=utf-8 python -B rs_2.py). 3) Compare each section with the walkthrough above. The -B flag stops Python from writing __pycache__ folders.",
    "bodyKn": "1) pneuronics-backend/lesson-defs/labs ನಲ್ಲಿ ಟರ್ಮಿನಲ್ ತೆರೆಯಿರಿ. 2) ಓಡಿಸಿ: python -B rs_2.py (Windows Git Bash ನಲ್ಲಿ: PYTHONIOENCODING=utf-8 python -B rs_2.py). 3) ಪ್ರತಿ ವಿಭಾಗವನ್ನು ಮೇಲಿನ ನಡೆದಾಟಕ್ಕೆ ಹೋಲಿಸಿ. -B ಧ್ವಜ Python __pycache__ ಫೋಲ್ಡರ್‌ಗಳನ್ನು ಬರೆಯುವುದನ್ನು ತಡೆಯುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Predict before you run",
    "headingKn": "ಓಡಿಸುವ ಮುನ್ನ ಊಹಿಸಿ",
    "bodyEn": "Before rerunning, write down what you expect each experiment to print, then compare:\n1. No gate, different effort splits (20 generations)\n2. A gate with threshold 0.5 on alignment/capability\n3. The cost in capability of keeping the ratio at 1\n4. How a slower alignment rate changes the needed split (threshold 0.5, 40 generations)",
    "bodyKn": "ಮರುಓಡಿಸುವ ಮುನ್ನ ಪ್ರತಿ ಪ್ರಯೋಗ ಏನು ಮುದ್ರಿಸುತ್ತದೆ ಎಂದು ನಿರೀಕ್ಷಿಸುವುದನ್ನು ಬರೆಯಿರಿ, ನಂತರ ಹೋಲಿಸಿ:\n1. No gate, different effort splits (20 generations)\n2. A gate with threshold 0.5 on alignment/capability\n3. The cost in capability of keeping the ratio at 1\n4. How a slower alignment rate changes the needed split (threshold 0.5, 40 generations)"
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "After how many generations did the gate halt a loop with f 0.00?",
      "qKn": "f 0.00 ಇರುವ ಲೂಪ್ ಅನ್ನು gate ಎಷ್ಟು ಜನರೇಶನ್ ನಂತರ ನಿಲ್ಲಿಸಿತು?",
      "opts": [
       "4",
       "8",
       "20",
       "40"
      ],
      "optsKn": [
       "4",
       "8",
       "20",
       "40"
      ],
      "correct": 0
     },
     {
      "q": "What ratio did f 0.50 hold?",
      "qKn": "f 0.50 ಯಾವ ಅನುಪಾತ ಹಿಡಿಯಿತು?",
      "opts": [
       "1.00",
       "0.16",
       "6.17",
       "0.03"
      ],
      "optsKn": [
       "1.00",
       "0.16",
       "6.17",
       "0.03"
      ],
      "correct": 0
     },
     {
      "q": "What fraction of the all-capability run did f 0.50 reach?",
      "qKn": "f 0.50 ಎಲ್ಲಾ-capability ಓಟದ ಎಷ್ಟು ಭಾಗ ತಲುಪಿತು?",
      "opts": [
       "0.175",
       "0.427",
       "1.000",
       "0.03"
      ],
      "optsKn": [
       "0.175",
       "0.427",
       "1.000",
       "0.03"
      ],
      "correct": 0
     },
     {
      "q": "What split avoided a halt when alignment growth available was 0.05?",
      "qKn": "ಲಭ್ಯ alignment ಬೆಳವಣಿಗೆ 0.05 ಆಗಿದ್ದಾಗ ಯಾವ ವಿಭಜನೆ halt ತಪ್ಪಿಸಿತು?",
      "opts": [
       "0.75",
       "0.5",
       "0.65",
       "0.25"
      ],
      "optsKn": [
       "0.75",
       "0.5",
       "0.65",
       "0.25"
      ],
      "correct": 0
     },
     {
      "q": "Does a gate by itself repair a falling ratio?",
      "qKn": "gate ತಾನಾಗಿ ಇಳಿಯುವ ಅನುಪಾತ ಸರಿಪಡಿಸುತ್ತದೆಯೇ?",
      "opts": [
       "No, it only halts the loop",
       "Yes, always",
       "Only at f 0.00",
       "Only with noise"
      ],
      "optsKn": [
       "ಇಲ್ಲ, ಅದು ಲೂಪ್ ಅನ್ನು ಮಾತ್ರ ನಿಲ್ಲಿಸುತ್ತದೆ",
       "ಹೌದು, ಯಾವಾಗಲೂ",
       "f 0.00 ರಲ್ಲಿ ಮಾತ್ರ",
       "noise ಜೊತೆ ಮಾತ್ರ"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
