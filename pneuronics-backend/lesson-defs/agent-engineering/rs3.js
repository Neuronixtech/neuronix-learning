module.exports = {
 "phaseId": "6a369d6366020ed05b32158c",
 "moduleId": "6a369d6366020ed05b3215a1",
 "order": 2,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Recursive Self-Improvement: Capability vs Alignment (Part 3 of 3) — Measuring for the Gate",
 "titleKn": "Recursive Self-Improvement: Capability ವಿರುದ್ಧ Alignment (ಭಾಗ 3 / 3) — Gate ಗಾಗಿ ಅಳತೆ",
 "desc": "See how evaluator noise, gaming and check timing change what a release gate can catch.",
 "descKn": "ಮೌಲ್ಯಮಾಪಕ noise, gaming ಮತ್ತು ಪರಿಶೀಲನೆ ಸಮಯ release gate ಏನು ಹಿಡಿಯಬಲ್ಲದು ಹೇಗೆ ಬದಲಿಸುತ್ತವೆ ನೋಡಿ.",
 "objectives": [
  "Measure false passes and blocks.",
  "Model gaming of an evaluator.",
  "Add an independent evaluator.",
  "Vary check frequency.",
  "State the limits of the model."
 ],
 "objectivesKn": [
  "ತಪ್ಪು ಪಾಸ್ ಮತ್ತು ನಿರ್ಬಂಧ ಅಳೆಯಿರಿ.",
  "ಮೌಲ್ಯಮಾಪಕದ gaming ಮಾದರಿ ಮಾಡಿ.",
  "ಸ್ವತಂತ್ರ ಮೌಲ್ಯಮಾಪಕ ಸೇರಿಸಿ.",
  "ಪರಿಶೀಲನೆ ಆವರ್ತನೆ ಬದಲಿಸಿ.",
  "ಮಾದರಿಯ ಮಿತಿಗಳನ್ನು ಹೇಳಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Recursive Self-Improvement: Capability vs Alignment (Part 3 of 3)",
    "textKn": "Recursive Self-Improvement: Capability ವಿರುದ್ಧ Alignment (ಭಾಗ 3 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 3 of 3: evaluator noise with false passes and false blocks, a system that games its evaluator, an independent held-out evaluator and the effect of how often the gate checks. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind recursive self-improvement and the capability-versus-alignment gap (exponential growth arithmetic, release gates, effort allocation, evaluator noise, gaming and check intervals), not the real software, and capability and alignment are two numbers updated by invented growth rules and evaluator readings are random draws, so nothing measures a real system and no language model is involved, so no real LLM behaviour is measured. The original code/main.py was not supplied, so the labs are our own implementation. The 20 percent and 5 percent per-generation growth rates come from the lesson as illustrative numbers, not measurements; every other growth rule, threshold and noise level in the labs is invented, and the lab results show arithmetic and not the behavior of any real system. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 3ನೆಯದು: ಮೌಲ್ಯಮಾಪಕ noise ಮತ್ತು ತಪ್ಪು ಪಾಸ್ ಹಾಗೂ ತಪ್ಪು ನಿರ್ಬಂಧ, ತನ್ನ ಮೌಲ್ಯಮಾಪಕವನ್ನು gaming ಮಾಡುವ ವ್ಯವಸ್ಥೆ, ಸ್ವತಂತ್ರ held-out ಮೌಲ್ಯಮಾಪಕ ಮತ್ತು gate ಎಷ್ಟು ಬಾರಿ ಪರಿಶೀಲಿಸುತ್ತದೆ ಎಂಬುದರ ಪರಿಣಾಮ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು recursive self-improvement ಮತ್ತು capability-ವಿರುದ್ಧ-alignment ಅಂತರ (ಘಾತೀಯ ಬೆಳವಣಿಗೆ ಅಂಕಗಣಿತ, release gates, ಪ್ರಯತ್ನ ಹಂಚಿಕೆ, ಮೌಲ್ಯಮಾಪಕ noise, gaming ಮತ್ತು ಪರಿಶೀಲನೆ ಅಂತರಗಳು) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು capability ಮತ್ತು alignment ಕಲ್ಪಿತ ಬೆಳವಣಿಗೆ ನಿಯಮಗಳಿಂದ ನವೀಕರಿಸುವ ಎರಡು ಸಂಖ್ಯೆಗಳು ಮತ್ತು ಮೌಲ್ಯಮಾಪಕ ಓದುವಿಕೆಗಳು ಯಾದೃಚ್ಛಿಕ ಎಳೆತಗಳು, ಆದ್ದರಿಂದ ಯಾವುದೂ ನಿಜ ವ್ಯವಸ್ಥೆ ಅಳೆಯುವುದಿಲ್ಲ ಮತ್ತು ಭಾಷಾ ಮಾದರಿ ಇಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ code/main.py ಒದಗಿಸಿರಲಿಲ್ಲ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ನಮ್ಮದೇ ಅನುಷ್ಠಾನ. 20 ಶೇಕಡಾ ಮತ್ತು 5 ಶೇಕಡಾ ಪ್ರತಿ-ಜನರೇಶನ್ ಬೆಳವಣಿಗೆ ದರಗಳು lesson ನಿಂದ ವಿವರಣಾತ್ಮಕ ಸಂಖ್ಯೆಗಳಾಗಿ ಬಂದಿವೆ, ಅಳತೆಗಳಲ್ಲ; ಲ್ಯಾಬ್‌ಗಳ ಇತರ ಪ್ರತಿ ಬೆಳವಣಿಗೆ ನಿಯಮ, ಮಿತಿ ಮತ್ತು noise ಮಟ್ಟ ಕಲ್ಪಿತ, ಮತ್ತು ಲ್ಯಾಬ್ ಫಲಿತಾಂಶಗಳು ಅಂಕಗಣಿತ ತೋರಿಸುತ್ತವೆ, ಯಾವುದೇ ನಿಜ ವ್ಯವಸ್ಥೆಯ ವರ್ತನೆ ಅಲ್ಲ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "A Gate Reads a Measurement, Not the Truth",
    "textKn": "Gate ಅಳತೆಯನ್ನು ಓದುತ್ತದೆ, ಸತ್ಯವನ್ನಲ್ಲ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Noise, Gaming and Timing",
    "headingKn": "Noise, Gaming ಮತ್ತು ಸಮಯ",
    "bodyEn": "A release gate only works if the number it reads reflects the true ratio. This part models a true ratio that falls by a fixed share each generation and an evaluator that adds noise, measures false passes and false blocks, adds a term that grows with each generation to represent a system improving its apparent score, compares that with an independent evaluator, and varies how often the gate looks. All values are invented.",
    "bodyKn": "release gate ಅದು ಓದುವ ಸಂಖ್ಯೆ ನಿಜ ಅನುಪಾತ ಪ್ರತಿಬಿಂಬಿಸಿದರೆ ಮಾತ್ರ ಕೆಲಸ ಮಾಡುತ್ತದೆ. ಈ ಭಾಗ ಪ್ರತಿ ಜನರೇಶನ್ ಸ್ಥಿರ ಪಾಲು ಇಳಿಯುವ ನಿಜ ಅನುಪಾತ ಮತ್ತು noise ಸೇರಿಸುವ ಮೌಲ್ಯಮಾಪಕ ಮಾದರಿ ಮಾಡುತ್ತದೆ, ತಪ್ಪು ಪಾಸ್ ಮತ್ತು ತಪ್ಪು ನಿರ್ಬಂಧ ಅಳೆಯುತ್ತದೆ, ತನ್ನ ಸ್ಪಷ್ಟ ಅಂಕ ಸುಧಾರಿಸುವ ವ್ಯವಸ್ಥೆಯನ್ನು ಪ್ರತಿನಿಧಿಸಲು ಪ್ರತಿ ಜನರೇಶನ್ ಬೆಳೆಯುವ ಪದ ಸೇರಿಸುತ್ತದೆ, ಅದನ್ನು ಸ್ವತಂತ್ರ ಮೌಲ್ಯಮಾಪಕದೊಂದಿಗೆ ಹೋಲಿಸುತ್ತದೆ ಮತ್ತು gate ಎಷ್ಟು ಬಾರಿ ನೋಡುತ್ತದೆ ಬದಲಿಸುತ್ತದೆ. ಎಲ್ಲಾ ಮೌಲ್ಯಗಳು ಕಲ್ಪಿತ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Measuring What the Gate Needs",
    "headingKn": "Gate ಗೆ ಬೇಕಾದದ್ದನ್ನು ಅಳೆಯುವುದು",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">a gate is only as good as the measurement it reads</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">true ratio</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">falls</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">evaluator</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">noisy reading</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">gaming</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">lifts the reading</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">independent</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">cannot be gamed</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">a gate is only as good as the measurement it reads</text></svg>",
    "captionEn": "Noise, gaming and check intervals shape what a gate sees.",
    "captionKn": "Noise, gaming ಮತ್ತು ಪರಿಶೀಲನೆ ಅಂತರಗಳು gate ಏನು ನೋಡುತ್ತದೆ ರೂಪಿಸುತ್ತವೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "captionEn": "Settings in the lab",
    "captionKn": "ಲ್ಯಾಬ್‌ನಲ್ಲಿ ಸೆಟ್ಟಿಂಗ್‌ಗಳು",
    "rows": "Item|Setting\ntrue ratio|(1.12 / 1.20)^n, falls under 0.5 at generation 11\ngate threshold|0.5\nevaluator noise|Gaussian, sd 0.02, 0.05, 0.10, 0.20\ngaming term|0.00, 0.01, 0.03 added per generation\ncheck interval|every 1, 3, 5 or 10 generations"
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
    "filename": "rs_3.py",
    "headingEn": "True ratio, measured ratio and the gate",
    "headingKn": "ನಿಜ ಅನುಪಾತ, ಅಳೆದ ಅನುಪಾತ ಮತ್ತು gate",
    "descEn": "true_ratio is the hidden truth, measured_ratio adds noise and a gaming term, and gate_stop halts the loop when a periodic reading is under the threshold.",
    "descKn": "true_ratio ಅಡಗಿದ ಸತ್ಯ, measured_ratio noise ಮತ್ತು gaming ಪದ ಸೇರಿಸುತ್ತದೆ, ಮತ್ತು gate_stop ಆವರ್ತಕ ಓದುವಿಕೆ ಮಿತಿಗಿಂತ ಕೆಳಗಿದ್ದಾಗ ಲೂಪ್ ನಿಲ್ಲಿಸುತ್ತದೆ.",
    "code": "def true_ratio(n, gc=0.20, ga=0.12):\n    return ((1 + ga) / (1 + gc)) ** n\n\n\ndef measured_ratio(r, n, sd, gaming=0.0):\n    \"\"\"Evaluator reading of alignment/capability: true ratio plus noise plus a gaming term that grows with n.\"\"\"\n    return true_ratio(n) + r.gauss(0, sd) + gaming * n\n\n\ndef gate_stop(r, tau, sd, gaming, every, max_n=40):\n    \"\"\"Return the generation at which the loop is halted by a gate that reads the evaluator every `every` generations.\"\"\"\n    for n in range(1, max_n + 1):\n        if n % every == 0 and measured_ratio(r, n, sd, gaming) < tau:\n            return n\n    return None"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "rs_3.py",
    "headingEn": "main(): experiments",
    "headingKn": "main(): ಪ್ರಯೋಗಗಳು",
    "descEn": "main() measures false passes and blocks, a gaming system, an independent evaluator and the effect of the check interval.",
    "descKn": "main() ತಪ್ಪು ಪಾಸ್ ಮತ್ತು ನಿರ್ಬಂಧ, gaming ವ್ಯವಸ್ಥೆ, ಸ್ವತಂತ್ರ ಮೌಲ್ಯಮಾಪಕ ಮತ್ತು ಪರಿಶೀಲನೆ ಅಂತರದ ಪರಿಣಾಮ ಅಳೆಯುತ್ತದೆ.",
    "code": "def main():\n    section(\"1. Genuinely measuring: evaluator noise, false passes and false blocks (threshold 0.5)\")\n    r = random.Random(1)\n    near_below = [n for n in range(1, 41) if true_ratio(n) < 0.5][0]\n    print(f\"true ratio first falls under 0.5 at generation {near_below}\")\n    for sd in (0.02, 0.1, 0.2):\n        fp = mean(measured_ratio(r, near_below + 1, sd) >= 0.5 for _ in range(20000))\n        fb = mean(measured_ratio(r, near_below - 3, sd) < 0.5 for _ in range(20000))\n        print(f\"noise sd {sd:.2f}: system just under the line passes {fp:.3f} | system comfortably above is wrongly blocked {fb:.3f}\")\n    print(\"with more evaluator noise a system just past the threshold slips through more often and a safe one is blocked more often, so noise forces a choice about which error to tolerate; the noise levels and the shape of the true ratio are invented\")\n\n    section(\"2. Genuinely measuring: a system that games the evaluator (noise sd 0.05, check every generation)\")\n    for gaming in (0.0, 0.01, 0.03):\n        rr = random.Random(2)\n        stops = [gate_stop(rr, 0.5, 0.05, gaming, 1) for _ in range(2000)]\n        done = [s for s in stops if s is not None]\n        print(f\"gaming term {gaming:.2f} per generation: halted in {len(done) / len(stops):.3f} of runs | median halt generation {sorted(done)[len(done) // 2] if done else None}\")\n    print(\"when the measured ratio is lifted by a term that grows with each generation, the gate stops firing even though the true ratio keeps falling, so a gate that reads only the metric the system can influence stops measuring what it was meant to measure\")\n\n    section(\"3. Genuinely measuring: an independent held-out evaluator that cannot be gamed\")\n    rr = random.Random(3)\n    for gaming in (0.0, 0.03):\n        stops_gamed = [gate_stop(rr, 0.5, 0.05, gaming, 1) for _ in range(2000)]\n        stops_indep = [gate_stop(rr, 0.5, 0.05, 0.0, 1) for _ in range(2000)]\n        print(f\"gaming {gaming:.2f}: gate on the gamed evaluator halts {sum(s is not None for s in stops_gamed) / 2000:.3f} | gate on an independent evaluator halts {sum(s is not None for s in stops_indep) / 2000:.3f}\")\n    print(\"a second evaluator whose reading the system cannot influence keeps halting the loop at the same rate as in the honest case, which shows the value of separating the measured quantity from the optimised one; the independence is an assumption built into the lab\")\n\n    section(\"4. Genuinely measuring: how often the gate looks\")\n    for every in (1, 3, 5, 10):\n        rr = random.Random(4)\n        stops = [gate_stop(rr, 0.5, 0.02, 0.0, every) for _ in range(2000)]\n        done = [s for s in stops if s is not None]\n        ratios = [true_ratio(s) for s in done]\n        print(f\"check every {every:2d} generation(s): median halt generation {sorted(done)[len(done) // 2]} | mean true ratio at the halt {mean(ratios):.3f}\")\n    print(\"checking less often lets the loop run further past the threshold before anyone looks, so the true ratio at the halt falls the longer the interval; with these growth rates each extra generation lowers the ratio by a fixed percentage\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely measuring: evaluator noise, false passes and false blocks (threshold 0.5) ---\ntrue ratio first falls under 0.5 at generation 11\nnoise sd 0.02: system just under the line passes 0.001 | system comfortably above is wrongly blocked 0.000\nnoise sd 0.10: system just under the line passes 0.263 | system comfortably above is wrongly blocked 0.222\nnoise sd 0.20: system just under the line passes 0.384 | system comfortably above is wrongly blocked 0.350\nwith more evaluator noise a system just past the threshold slips through more often and a safe one is blocked more often, so noise forces a choice about which error to tolerate; the noise levels and the shape of the true ratio are invented\n\n--- 2. Genuinely measuring: a system that games the evaluator (noise sd 0.05, check every generation) ---\ngaming term 0.00 per generation: halted in 1.000 of runs | median halt generation 10\ngaming term 0.01 per generation: halted in 1.000 of runs | median halt generation 14\ngaming term 0.03 per generation: halted in 0.000 of runs | median halt generation None\nwhen the measured ratio is lifted by a term that grows with each generation, the gate stops firing even though the true ratio keeps falling, so a gate that reads only the metric the system can influence stops measuring what it was meant to measure\n\n--- 3. Genuinely measuring: an independent held-out evaluator that cannot be gamed ---\ngaming 0.00: gate on the gamed evaluator halts 1.000 | gate on an independent evaluator halts 1.000\ngaming 0.03: gate on the gamed evaluator halts 0.000 | gate on an independent evaluator halts 1.000\na second evaluator whose reading the system cannot influence keeps halting the loop at the same rate as in the honest case, which shows the value of separating the measured quantity from the optimised one; the independence is an assumption built into the lab\n\n--- 4. Genuinely measuring: how often the gate looks ---\ncheck every  1 generation(s): median halt generation 11 | mean true ratio at the halt 0.484\ncheck every  3 generation(s): median halt generation 12 | mean true ratio at the halt 0.440\ncheck every  5 generation(s): median halt generation 15 | mean true ratio at the halt 0.420\ncheck every 10 generation(s): median halt generation 20 | mean true ratio at the halt 0.369\nchecking less often lets the loop run further past the threshold before anyone looks, so the true ratio at the halt falls the longer the interval; with these growth rates each extra generation lowers the ratio by a fixed percentage"
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
    "headingEn": "Experiment 1: Evaluator noise, false passes and false blocks (threshold 0.5)",
    "headingKn": "ಪ್ರಯೋಗ 1: Evaluator noise, false passes and false blocks (threshold 0.5)",
    "bodyEn": "What it ran: Evaluator noise, false passes and false blocks (threshold 0.5). What the lab concluded: with more evaluator noise a system just past the threshold slips through more often and a safe one is blocked more often, so noise forces a choice about which error to tolerate; the noise levels and the shape of the true ratio are invented",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Evaluator noise, false passes and false blocks (threshold 0.5). ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): with more evaluator noise a system just past the threshold slips through more often and a safe one is blocked more often, so noise forces a choice about which error to tolerate; the noise levels and the shape of the true ratio are invented"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. Genuinely measuring: evaluator noise, false passes and false blocks (threshold 0.5) ---\ntrue ratio first falls under 0.5 at generation 11\nnoise sd 0.02: system just under the line passes 0.001 | system comfortably above is wrongly blocked 0.000\nnoise sd 0.10: system just under the line passes 0.263 | system comfortably above is wrongly blocked 0.222\nnoise sd 0.20: system just under the line passes 0.384 | system comfortably above is wrongly blocked 0.350"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: A system that games the evaluator (noise sd 0.05, check every generation)",
    "headingKn": "ಪ್ರಯೋಗ 2: A system that games the evaluator (noise sd 0.05, check every generation)",
    "bodyEn": "What it ran: A system that games the evaluator (noise sd 0.05, check every generation). What the lab concluded: when the measured ratio is lifted by a term that grows with each generation, the gate stops firing even though the true ratio keeps falling, so a gate that reads only the metric the system can influence stops measuring what it was meant to measure",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A system that games the evaluator (noise sd 0.05, check every generation). ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): when the measured ratio is lifted by a term that grows with each generation, the gate stops firing even though the true ratio keeps falling, so a gate that reads only the metric the system can influence stops measuring what it was meant to measure"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely measuring: a system that games the evaluator (noise sd 0.05, check every generation) ---\ngaming term 0.00 per generation: halted in 1.000 of runs | median halt generation 10\ngaming term 0.01 per generation: halted in 1.000 of runs | median halt generation 14\ngaming term 0.03 per generation: halted in 0.000 of runs | median halt generation None"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: An independent held-out evaluator that cannot be gamed",
    "headingKn": "ಪ್ರಯೋಗ 3: An independent held-out evaluator that cannot be gamed",
    "bodyEn": "What it ran: An independent held-out evaluator that cannot be gamed. What the lab concluded: a second evaluator whose reading the system cannot influence keeps halting the loop at the same rate as in the honest case, which shows the value of separating the measured quantity from the optimised one; the independence is an assumption built into the lab",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: An independent held-out evaluator that cannot be gamed. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a second evaluator whose reading the system cannot influence keeps halting the loop at the same rate as in the honest case, which shows the value of separating the measured quantity from the optimised one; the independence is an assumption built into the lab"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely measuring: an independent held-out evaluator that cannot be gamed ---\ngaming 0.00: gate on the gamed evaluator halts 1.000 | gate on an independent evaluator halts 1.000\ngaming 0.03: gate on the gamed evaluator halts 0.000 | gate on an independent evaluator halts 1.000"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 4: How often the gate looks",
    "headingKn": "ಪ್ರಯೋಗ 4: How often the gate looks",
    "bodyEn": "What it ran: How often the gate looks. What the lab concluded: checking less often lets the loop run further past the threshold before anyone looks, so the true ratio at the halt falls the longer the interval; with these growth rates each extra generation lowers the ratio by a fixed percentage",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: How often the gate looks. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): checking less often lets the loop run further past the threshold before anyone looks, so the true ratio at the halt falls the longer the interval; with these growth rates each extra generation lowers the ratio by a fixed percentage"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 4. Genuinely measuring: how often the gate looks ---\ncheck every  1 generation(s): median halt generation 11 | mean true ratio at the halt 0.484\ncheck every  3 generation(s): median halt generation 12 | mean true ratio at the halt 0.440\ncheck every  5 generation(s): median halt generation 15 | mean true ratio at the halt 0.420\ncheck every 10 generation(s): median halt generation 20 | mean true ratio at the halt 0.369"
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
    "headingEn": "Genuinely Found: Noise and Gaming",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Noise ಮತ್ತು Gaming",
    "bodyEn": "Section 1: the true ratio first fell under 0.5 at generation 11. At noise sd 0.02, 0.10 and 0.20 a system just under the line passed 0.001, 0.263 and 0.384 of the time and a comfortably safe system was wrongly blocked 0.000, 0.222 and 0.350 of the time. Section 2: with gaming 0.00 and 0.01 the gate halted all runs with median halt generations 10 and 14, and with gaming 0.03 it halted none.",
    "bodyKn": "ವಿಭಾಗ 1: ನಿಜ ಅನುಪಾತ ಮೊದಲು 0.5 ಕ್ಕಿಂತ ಕೆಳಗೆ ಬಿದ್ದದ್ದು ಜನರೇಶನ್ 11 ರಲ್ಲಿ. noise sd 0.02, 0.10 ಮತ್ತು 0.20 ರಲ್ಲಿ ಗೆರೆಯ ಕೆಳಗಿನ ವ್ಯವಸ್ಥೆ 0.001, 0.263 ಮತ್ತು 0.384 ಸಮಯ ಪಾಸ್ ಆಯಿತು ಮತ್ತು ಸುರಕ್ಷಿತ ವ್ಯವಸ್ಥೆ 0.000, 0.222 ಮತ್ತು 0.350 ಸಮಯ ತಪ್ಪಾಗಿ ನಿರ್ಬಂಧಿಸಲ್ಪಟ್ಟಿತು. ವಿಭಾಗ 2: gaming 0.00 ಮತ್ತು 0.01 ರಲ್ಲಿ gate ಎಲ್ಲಾ ಓಟಗಳನ್ನು ಮಧ್ಯಗ halt ಜನರೇಶನ್ 10 ಮತ್ತು 14 ರಲ್ಲಿ ನಿಲ್ಲಿಸಿತು, ಮತ್ತು gaming 0.03 ರಲ್ಲಿ ಯಾವುದನ್ನೂ ನಿಲ್ಲಿಸಲಿಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Independent Evaluator and Check Interval",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಸ್ವತಂತ್ರ ಮೌಲ್ಯಮಾಪಕ ಮತ್ತು ಪರಿಶೀಲನೆ ಅಂತರ",
    "bodyEn": "Section 3: with gaming 0.03 the gate on the gamed evaluator halted 0.000 of runs and the gate on an independent evaluator halted 1.000, and with no gaming both halted 1.000. Section 4: checking every 1, 3, 5 and 10 generations gave median halt generations 11, 12, 15 and 20 with a mean true ratio at the halt of 0.484, 0.440, 0.420 and 0.369.",
    "bodyKn": "ವಿಭಾಗ 3: gaming 0.03 ರಲ್ಲಿ gamed ಮೌಲ್ಯಮಾಪಕದ ಮೇಲಿನ gate 0.000 ಓಟಗಳನ್ನು ನಿಲ್ಲಿಸಿತು ಮತ್ತು ಸ್ವತಂತ್ರ ಮೌಲ್ಯಮಾಪಕದ ಮೇಲಿನ gate 1.000, ಮತ್ತು gaming ಇಲ್ಲದಾಗ ಎರಡೂ 1.000 ನಿಲ್ಲಿಸಿದವು. ವಿಭಾಗ 4: ಪ್ರತಿ 1, 3, 5 ಮತ್ತು 10 ಜನರೇಶನ್ ಪರಿಶೀಲಿಸಿದಾಗ ಮಧ್ಯಗ halt ಜನರೇಶನ್ 11, 12, 15 ಮತ್ತು 20 ಮತ್ತು halt ನಲ್ಲಿ ಸರಾಸರಿ ನಿಜ ಅನುಪಾತ 0.484, 0.440, 0.420 ಮತ್ತು 0.369."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A gate that reads a number the system can influence stops measuring the thing it was built to measure, and a gate that looks rarely lets the true ratio fall well past the line before it acts.",
    "bodyKn": "ವ್ಯವಸ್ಥೆ ಪ್ರಭಾವಿಸಬಲ್ಲ ಸಂಖ್ಯೆಯನ್ನು ಓದುವ gate ಅದು ಅಳೆಯಲು ನಿರ್ಮಿಸಿದ್ದನ್ನು ಅಳೆಯುವುದನ್ನು ನಿಲ್ಲಿಸುತ್ತದೆ, ಮತ್ತು ವಿರಳವಾಗಿ ನೋಡುವ gate ಕಾರ್ಯನಿರ್ವಹಿಸುವ ಮೊದಲು ನಿಜ ಅನುಪಾತ ಗೆರೆಯನ್ನು ಬಹಳ ದಾಟಿ ಇಳಿಯಲು ಬಿಡುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"a more precise evaluator makes the gate safe.\" At gaming 0.03 the gamed evaluator halted 0.000 of runs regardless of its noise level.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಹೆಚ್ಚು ನಿಖರ ಮೌಲ್ಯಮಾಪಕ gate ಅನ್ನು ಸುರಕ್ಷಿತ ಮಾಡುತ್ತದೆ.\" gaming 0.03 ರಲ್ಲಿ gamed ಮೌಲ್ಯಮಾಪಕ ಅದರ noise ಮಟ್ಟ ಏನೇ ಇದ್ದರೂ 0.000 ಓಟಗಳನ್ನು ನಿಲ್ಲಿಸಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "False pass: a bad system let through. False block: a good system stopped. Gaming: raising the measured score without raising the true one. Independent evaluator: a measurement the system cannot influence.",
    "bodyKn": "False pass: ಹೋಗಲು ಬಿಟ್ಟ ಕೆಟ್ಟ ವ್ಯವಸ್ಥೆ. False block: ನಿಲ್ಲಿಸಿದ ಒಳ್ಳೆಯ ವ್ಯವಸ್ಥೆ. Gaming: ನಿಜ ಅಂಕ ಏರಿಸದೆ ಅಳೆದ ಅಂಕ ಏರಿಸುವುದು. Independent evaluator: ವ್ಯವಸ್ಥೆ ಪ್ರಭಾವಿಸಲಾಗದ ಅಳತೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) At sd 0.20 a bad system passed 38.4 percent of the time. 2) Gaming 0.03 stopped the gate from ever firing. 3) An independent evaluator halted all runs. 4) Checking every 10 generations let the ratio reach 0.369. 5) All values are invented.",
    "bodyKn": "1) sd 0.20 ರಲ್ಲಿ ಕೆಟ್ಟ ವ್ಯವಸ್ಥೆ 38.4 ಶೇಕಡಾ ಸಮಯ ಪಾಸ್ ಆಯಿತು. 2) Gaming 0.03 gate ಎಂದಿಗೂ ಉರಿಯದಂತೆ ಮಾಡಿತು. 3) ಸ್ವತಂತ್ರ ಮೌಲ್ಯಮಾಪಕ ಎಲ್ಲಾ ಓಟಗಳನ್ನು ನಿಲ್ಲಿಸಿತು. 4) ಪ್ರತಿ 10 ಜನರೇಶನ್ ಪರಿಶೀಲನೆ ಅನುಪಾತ 0.369 ತಲುಪಲು ಬಿಟ್ಟಿತು. 5) ಎಲ್ಲಾ ಮೌಲ್ಯಗಳು ಕಲ್ಪಿತ."
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
    "bodyEn": "1) Open a terminal in pneuronics-backend/lesson-defs/labs. 2) Run: python -B rs_3.py (in Git Bash on Windows: PYTHONIOENCODING=utf-8 python -B rs_3.py). 3) Compare each section with the walkthrough above. The -B flag stops Python from writing __pycache__ folders.",
    "bodyKn": "1) pneuronics-backend/lesson-defs/labs ನಲ್ಲಿ ಟರ್ಮಿನಲ್ ತೆರೆಯಿರಿ. 2) ಓಡಿಸಿ: python -B rs_3.py (Windows Git Bash ನಲ್ಲಿ: PYTHONIOENCODING=utf-8 python -B rs_3.py). 3) ಪ್ರತಿ ವಿಭಾಗವನ್ನು ಮೇಲಿನ ನಡೆದಾಟಕ್ಕೆ ಹೋಲಿಸಿ. -B ಧ್ವಜ Python __pycache__ ಫೋಲ್ಡರ್‌ಗಳನ್ನು ಬರೆಯುವುದನ್ನು ತಡೆಯುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Predict before you run",
    "headingKn": "ಓಡಿಸುವ ಮುನ್ನ ಊಹಿಸಿ",
    "bodyEn": "Before rerunning, write down what you expect each experiment to print, then compare:\n1. Evaluator noise, false passes and false blocks (threshold 0.5)\n2. A system that games the evaluator (noise sd 0.05, check every generation)\n3. An independent held-out evaluator that cannot be gamed\n4. How often the gate looks",
    "bodyKn": "ಮರುಓಡಿಸುವ ಮುನ್ನ ಪ್ರತಿ ಪ್ರಯೋಗ ಏನು ಮುದ್ರಿಸುತ್ತದೆ ಎಂದು ನಿರೀಕ್ಷಿಸುವುದನ್ನು ಬರೆಯಿರಿ, ನಂತರ ಹೋಲಿಸಿ:\n1. Evaluator noise, false passes and false blocks (threshold 0.5)\n2. A system that games the evaluator (noise sd 0.05, check every generation)\n3. An independent held-out evaluator that cannot be gamed\n4. How often the gate looks"
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "At which generation did the true ratio first fall under 0.5?",
      "qKn": "ನಿಜ ಅನುಪಾತ ಮೊದಲು 0.5 ಕ್ಕಿಂತ ಕೆಳಗೆ ಬಿದ್ದ ಜನರೇಶನ್ ಯಾವುದು?",
      "opts": [
       "11",
       "10",
       "14",
       "20"
      ],
      "optsKn": [
       "11",
       "10",
       "14",
       "20"
      ],
      "correct": 0
     },
     {
      "q": "How often did the gate halt runs on the gamed evaluator at gaming 0.03?",
      "qKn": "gaming 0.03 ರಲ್ಲಿ gamed ಮೌಲ್ಯಮಾಪಕದ ಮೇಲೆ gate ಎಷ್ಟು ಬಾರಿ ಓಟಗಳನ್ನು ನಿಲ್ಲಿಸಿತು?",
      "opts": [
       "0.000 of runs",
       "1.000 of runs",
       "0.263 of runs",
       "0.5 of runs"
      ],
      "optsKn": [
       "0.000 ಓಟಗಳು",
       "1.000 ಓಟಗಳು",
       "0.263 ಓಟಗಳು",
       "0.5 ಓಟಗಳು"
      ],
      "correct": 0
     },
     {
      "q": "What did the independent evaluator do at gaming 0.03?",
      "qKn": "gaming 0.03 ರಲ್ಲಿ ಸ್ವತಂತ್ರ ಮೌಲ್ಯಮಾಪಕ ಏನು ಮಾಡಿತು?",
      "opts": [
       "Halted 1.000 of runs",
       "Halted none",
       "Halted half",
       "Raised the ratio"
      ],
      "optsKn": [
       "1.000 ಓಟಗಳನ್ನು ನಿಲ್ಲಿಸಿತು",
       "ಯಾವುದನ್ನೂ ನಿಲ್ಲಿಸಲಿಲ್ಲ",
       "ಅರ್ಧ ನಿಲ್ಲಿಸಿತು",
       "ಅನುಪಾತ ಏರಿಸಿತು"
      ],
      "correct": 0
     },
     {
      "q": "What mean true ratio did a check every 10 generations leave at the halt?",
      "qKn": "ಪ್ರತಿ 10 ಜನರೇಶನ್ ಪರಿಶೀಲನೆ halt ನಲ್ಲಿ ಯಾವ ಸರಾಸರಿ ನಿಜ ಅನುಪಾತ ಬಿಟ್ಟಿತು?",
      "opts": [
       "0.369",
       "0.484",
       "0.440",
       "0.420"
      ],
      "optsKn": [
       "0.369",
       "0.484",
       "0.440",
       "0.420"
      ],
      "correct": 0
     },
     {
      "q": "Why does an independent evaluator help?",
      "qKn": "ಸ್ವತಂತ್ರ ಮೌಲ್ಯಮಾಪಕ ಏಕೆ ಸಹಾಯ ಮಾಡುತ್ತದೆ?",
      "opts": [
       "The system cannot raise its reading, so the gate keeps measuring the true ratio",
       "It has no noise",
       "It runs faster",
       "It halts every run"
      ],
      "optsKn": [
       "ವ್ಯವಸ್ಥೆ ಅದರ ಓದುವಿಕೆ ಏರಿಸಲಾರದು, ಆದ್ದರಿಂದ gate ನಿಜ ಅನುಪಾತ ಅಳೆಯುತ್ತಲೇ ಇರುತ್ತದೆ",
       "ಅದಕ್ಕೆ noise ಇಲ್ಲ",
       "ಅದು ವೇಗವಾಗಿ ಓಡುತ್ತದೆ",
       "ಅದು ಪ್ರತಿ ಓಟ ನಿಲ್ಲಿಸುತ್ತದೆ"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
