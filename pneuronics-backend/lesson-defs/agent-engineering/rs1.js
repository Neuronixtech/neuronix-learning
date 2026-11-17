module.exports = {
 "phaseId": "6a369d6366020ed05b32158c",
 "moduleId": "6a369d6366020ed05b3215a1",
 "order": 0,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Recursive Self-Improvement: Capability vs Alignment (Part 1 of 3) — The Arithmetic of the Gap",
 "titleKn": "Recursive Self-Improvement: Capability ವಿರುದ್ಧ Alignment (ಭಾಗ 1 / 3) — ಅಂತರದ ಅಂಕಗಣಿತ",
 "desc": "Compute how two exponentials with different rates drift apart and what it takes to hold them level.",
 "descKn": "ಬೇರೆ ದರಗಳ ಎರಡು ಘಾತೀಯಗಳು ಹೇಗೆ ದೂರವಾಗುತ್ತವೆ ಮತ್ತು ಅವುಗಳನ್ನು ಸಮನಾಗಿಡಲು ಏನು ಬೇಕು ಲೆಕ್ಕ ಹಾಕಿ.",
 "objectives": [
  "Tabulate a gap.",
  "Find threshold crossings.",
  "Use a closed form.",
  "Find the growth needed to keep pace.",
  "Add noise honestly."
 ],
 "objectivesKn": [
  "ಅಂತರ ಕೋಷ್ಟಕ ಮಾಡಿ.",
  "ಮಿತಿ ದಾಟುವಿಕೆ ಕಂಡುಹಿಡಿಯಿರಿ.",
  "ಮುಚ್ಚಿದ ರೂಪ ಬಳಸಿ.",
  "ಸಮನಾಗಿ ಉಳಿಯಲು ಬೇಕಾದ ಬೆಳವಣಿಗೆ ಕಂಡುಹಿಡಿಯಿರಿ.",
  "noise ಅನ್ನು ಪ್ರಾಮಾಣಿಕವಾಗಿ ಸೇರಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Recursive Self-Improvement: Capability vs Alignment (Part 1 of 3)",
    "textKn": "Recursive Self-Improvement: Capability ವಿರುದ್ಧ Alignment (ಭಾಗ 1 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 1 of 3: capability growing at 20 percent and alignment at 5 percent per generation, a tabulated gap, threshold crossing times with a closed form, the growth needed to keep pace and seeded noise in the growth rates. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind recursive self-improvement and the capability-versus-alignment gap (exponential growth arithmetic, release gates, effort allocation, evaluator noise, gaming and check intervals), not the real software, and capability and alignment are two numbers updated by invented growth rules and evaluator readings are random draws, so nothing measures a real system and no language model is involved, so no real LLM behaviour is measured. The original code/main.py was not supplied, so the labs are our own implementation. The 20 percent and 5 percent per-generation growth rates come from the lesson as illustrative numbers, not measurements; every other growth rule, threshold and noise level in the labs is invented, and the lab results show arithmetic and not the behavior of any real system. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 1ನೆಯದು: ಪ್ರತಿ ಜನರೇಶನ್‌ಗೆ 20 ಶೇಕಡಾ ಬೆಳೆಯುವ capability ಮತ್ತು 5 ಶೇಕಡಾ ಬೆಳೆಯುವ alignment, ಕೋಷ್ಟಕ ಮಾಡಿದ ಅಂತರ, ಮುಚ್ಚಿದ ರೂಪದೊಂದಿಗೆ ಮಿತಿ ದಾಟುವ ಸಮಯಗಳು, ಸಮನಾಗಿ ಉಳಿಯಲು ಬೇಕಾದ ಬೆಳವಣಿಗೆ ಮತ್ತು ಬೆಳವಣಿಗೆ ದರಗಳಲ್ಲಿ seeded noise. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು recursive self-improvement ಮತ್ತು capability-ವಿರುದ್ಧ-alignment ಅಂತರ (ಘಾತೀಯ ಬೆಳವಣಿಗೆ ಅಂಕಗಣಿತ, release gates, ಪ್ರಯತ್ನ ಹಂಚಿಕೆ, ಮೌಲ್ಯಮಾಪಕ noise, gaming ಮತ್ತು ಪರಿಶೀಲನೆ ಅಂತರಗಳು) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು capability ಮತ್ತು alignment ಕಲ್ಪಿತ ಬೆಳವಣಿಗೆ ನಿಯಮಗಳಿಂದ ನವೀಕರಿಸುವ ಎರಡು ಸಂಖ್ಯೆಗಳು ಮತ್ತು ಮೌಲ್ಯಮಾಪಕ ಓದುವಿಕೆಗಳು ಯಾದೃಚ್ಛಿಕ ಎಳೆತಗಳು, ಆದ್ದರಿಂದ ಯಾವುದೂ ನಿಜ ವ್ಯವಸ್ಥೆ ಅಳೆಯುವುದಿಲ್ಲ ಮತ್ತು ಭಾಷಾ ಮಾದರಿ ಇಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ code/main.py ಒದಗಿಸಿರಲಿಲ್ಲ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ನಮ್ಮದೇ ಅನುಷ್ಠಾನ. 20 ಶೇಕಡಾ ಮತ್ತು 5 ಶೇಕಡಾ ಪ್ರತಿ-ಜನರೇಶನ್ ಬೆಳವಣಿಗೆ ದರಗಳು lesson ನಿಂದ ವಿವರಣಾತ್ಮಕ ಸಂಖ್ಯೆಗಳಾಗಿ ಬಂದಿವೆ, ಅಳತೆಗಳಲ್ಲ; ಲ್ಯಾಬ್‌ಗಳ ಇತರ ಪ್ರತಿ ಬೆಳವಣಿಗೆ ನಿಯಮ, ಮಿತಿ ಮತ್ತು noise ಮಟ್ಟ ಕಲ್ಪಿತ, ಮತ್ತು ಲ್ಯಾಬ್ ಫಲಿತಾಂಶಗಳು ಅಂಕಗಣಿತ ತೋರಿಸುತ್ತವೆ, ಯಾವುದೇ ನಿಜ ವ್ಯವಸ್ಥೆಯ ವರ್ತನೆ ಅಲ್ಲ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Why a Small Rate Difference Becomes a Large Gap",
    "textKn": "ಸಣ್ಣ ದರ ವ್ಯತ್ಯಾಸ ದೊಡ್ಡ ಅಂತರ ಏಕೆ ಆಗುತ್ತದೆ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "The Arithmetic of Two Exponentials",
    "headingKn": "ಎರಡು ಘಾತೀಯಗಳ ಅಂಕಗಣಿತ",
    "bodyEn": "The core worry about recursive self-improvement is arithmetic. If a system improves its own capability faster than its alignment improves, the ratio between them keeps growing. This part uses the lesson illustrative numbers, capability C = 100 times 1.2^n and alignment A = 100 times 1.05^n, to tabulate the gap, find when the ratio crosses chosen thresholds, work out what alignment growth would hold the ratio steady and add seeded noise to the rates.",
    "bodyKn": "recursive self-improvement ಬಗ್ಗೆ ಮೂಲ ಚಿಂತೆ ಅಂಕಗಣಿತ. ವ್ಯವಸ್ಥೆ ತನ್ನ capability ಅನ್ನು alignment ಸುಧಾರಿಸುವುದಕ್ಕಿಂತ ವೇಗವಾಗಿ ಸುಧಾರಿಸಿದರೆ ಅವುಗಳ ನಡುವಿನ ಅನುಪಾತ ಬೆಳೆಯುತ್ತಲೇ ಇರುತ್ತದೆ. ಈ ಭಾಗ lesson ನ ವಿವರಣಾತ್ಮಕ ಸಂಖ್ಯೆಗಳು, capability C = 100 ಗುಣಿಸಿ 1.2^n ಮತ್ತು alignment A = 100 ಗುಣಿಸಿ 1.05^n, ಬಳಸಿ ಅಂತರ ಕೋಷ್ಟಕ ಮಾಡುತ್ತದೆ, ಅನುಪಾತ ಆರಿಸಿದ ಮಿತಿಗಳನ್ನು ಯಾವಾಗ ದಾಟುತ್ತದೆ ಕಂಡುಹಿಡಿಯುತ್ತದೆ, ಅನುಪಾತ ಸ್ಥಿರವಾಗಿಡಲು ಯಾವ alignment ಬೆಳವಣಿಗೆ ಬೇಕು ಲೆಕ್ಕ ಹಾಕುತ್ತದೆ ಮತ್ತು ದರಗಳಿಗೆ seeded noise ಸೇರಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "The Capability-Alignment Gap",
    "headingKn": "Capability-Alignment ಅಂತರ",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">two exponentials with different rates drift apart</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">capability</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">+20% per gen</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">alignment</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">+5% per gen</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">gap</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">widens</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">ratio</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">C/A rises</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">two exponentials with different rates drift apart</text></svg>",
    "captionEn": "Two quantities grow at different rates from the same start.",
    "captionKn": "ಅದೇ ಆರಂಭದಿಂದ ಎರಡು ಪ್ರಮಾಣಗಳು ಬೇರೆ ದರಗಳಲ್ಲಿ ಬೆಳೆಯುತ್ತವೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Quantities in the lab",
    "headingKn": "ಲ್ಯಾಬ್‌ನಲ್ಲಿನ ಪ್ರಮಾಣಗಳು",
    "headers": [
     "Quantity",
     "Value"
    ],
    "rows": [
     [
      "capability",
      "C = 100 x 1.2^n (lesson illustration)"
     ],
     [
      "alignment",
      "A = 100 x 1.05^n (lesson illustration)"
     ],
     [
      "thresholds",
      "ratio 2, 5, 10, 100 (chosen for illustration)"
     ],
     [
      "noise",
      "Gaussian, sd 0, 0.05, 0.10 on each growth rate"
     ],
     [
      "runs",
      "200 per noise level, seed 1"
     ]
    ]
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
    "filename": "rs_1.py",
    "headingEn": "Growth functions and noisy ratio",
    "headingKn": "ಬೆಳವಣಿಗೆ ಕಾರ್ಯಗಳು ಮತ್ತು noisy ಅನುಪಾತ",
    "descEn": "cap and align give the two levels at generation n, first_ratio_cross finds when the ratio reaches a threshold and noisy_ratio multiplies noisy growth factors for 20 generations.",
    "descKn": "cap ಮತ್ತು align ಜನರೇಶನ್ n ರಲ್ಲಿ ಎರಡು ಮಟ್ಟ ನೀಡುತ್ತವೆ, first_ratio_cross ಅನುಪಾತ ಮಿತಿ ತಲುಪುವುದನ್ನು ಕಂಡುಹಿಡಿಯುತ್ತದೆ ಮತ್ತು noisy_ratio 20 ಜನರೇಶನ್‌ಗಳಿಗೆ noisy ಬೆಳವಣಿಗೆ ಅಂಶಗಳನ್ನು ಗುಣಿಸುತ್ತದೆ.",
    "code": "def cap(n, g=0.20, c0=100.0):\n    return c0 * (1 + g) ** n\n\n\ndef align(n, g=0.05, a0=100.0):\n    return a0 * (1 + g) ** n\n\n\ndef first_ratio_cross(threshold, gc=0.20, ga=0.05):\n    n = 0\n    while cap(n, gc) / align(n, ga) < threshold:\n        n += 1\n    return n\n\n\ndef noisy_ratio(r, n, gc=0.20, ga=0.05, sd=0.05):\n    c = a = 100.0\n    for _ in range(n):\n        c *= 1 + gc + r.gauss(0, sd)\n        a *= 1 + ga + r.gauss(0, sd)\n    return c / a"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "rs_1.py",
    "headingEn": "main(): experiments",
    "headingKn": "main(): ಪ್ರಯೋಗಗಳು",
    "descEn": "main() prints the table, finds threshold crossings, varies the alignment rate and adds noise to the growth rates.",
    "descKn": "main() ಕೋಷ್ಟಕ ಮುದ್ರಿಸಿ, ಮಿತಿ ದಾಟುವಿಕೆ ಕಂಡುಹಿಡಿದು, alignment ದರ ಬದಲಿಸಿ ಮತ್ತು ಬೆಳವಣಿಗೆ ದರಗಳಿಗೆ noise ಸೇರಿಸುತ್ತದೆ.",
    "code": "def main():\n    section(\"1. Genuinely computing: capability C = 100 * 1.2^n and alignment A = 100 * 1.05^n\")\n    print(\"gen   capability  alignment   gap    ratio C/A\")\n    for n in (0, 5, 10, 15, 20, 30):\n        c, a = cap(n), align(n)\n        print(f\"{n:3d}  {c:10.1f}  {a:9.1f}  {c - a:8.1f}  {c / a:6.2f}\")\n    print(\"both start at 100, so the gap is zero at generation 0 and the ratio rises steadily because the capability rate is higher; at generation 20 capability is about 3834 and alignment about 265, a ratio near 14.5, and the rates are the lesson's illustrative numbers\")\n\n    section(\"2. Genuinely computing: generations until the ratio crosses a threshold\")\n    for th in (2, 5, 10, 100):\n        n = first_ratio_cross(th)\n        print(f\"ratio >= {th:3d} first at generation {n:2d} | closed form {ceil(log(th) / log(1.2 / 1.05)):2d}\")\n    print(\"the loop and the closed form n = ln(threshold) / ln(1.2 / 1.05) agree, and a ratio of 2 arrives within a handful of generations while a ratio of 100 takes a few dozen; ratio thresholds are chosen for illustration and no value is a known safe limit\")\n\n    section(\"3. Genuinely computing: how fast alignment must grow to keep a constant ratio\")\n    for gc in (0.05, 0.10, 0.20):\n        print(f\"capability growth {gc:.2f} per generation: alignment must grow at least {gc:.2f} per generation to hold the ratio at 1.0\")\n    for ga in (0.05, 0.10, 0.15, 0.20):\n        print(f\"alignment growth {ga:.2f}: ratio at generation 20 = {cap(20) / align(20, ga):.2f}\")\n    print(\"the ratio stays fixed only when the two growth rates are equal, and at any lower alignment rate the gap widens exponentially; matching the rate once is not enough, it has to be sustained every generation\")\n\n    section(\"4. Genuinely measuring: noisy growth rates (200 runs per row, seed 1, 20 generations)\")\n    r = random.Random(1)\n    for sd in (0.0, 0.05, 0.10):\n        ratios = [noisy_ratio(r, 20, sd=sd) for _ in range(200)]\n        under = sum(1 for x in ratios if x < 5)\n        print(f\"noise sd {sd:.2f}: mean ratio {mean(ratios):6.2f} | min {min(ratios):6.2f} | max {max(ratios):7.2f} | runs with ratio under 5: {under}\")\n    print(\"noise spreads the outcome widely but the 15 percentage point gap in mean growth dominates, so almost every run still ends far from parity; the noise model is Gaussian with an invented spread\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely computing: capability C = 100 * 1.2^n and alignment A = 100 * 1.05^n ---\ngen   capability  alignment   gap    ratio C/A\n  0       100.0      100.0       0.0    1.00\n  5       248.8      127.6     121.2    1.95\n 10       619.2      162.9     456.3    3.80\n 15      1540.7      207.9    1332.8    7.41\n 20      3833.8      265.3    3568.4   14.45\n 30     23737.6      432.2   23305.4   54.92\nboth start at 100, so the gap is zero at generation 0 and the ratio rises steadily because the capability rate is higher; at generation 20 capability is about 3834 and alignment about 265, a ratio near 14.5, and the rates are the lesson's illustrative numbers\n\n--- 2. Genuinely computing: generations until the ratio crosses a threshold ---\nratio >=   2 first at generation  6 | closed form  6\nratio >=   5 first at generation 13 | closed form 13\nratio >=  10 first at generation 18 | closed form 18\nratio >= 100 first at generation 35 | closed form 35\nthe loop and the closed form n = ln(threshold) / ln(1.2 / 1.05) agree, and a ratio of 2 arrives within a handful of generations while a ratio of 100 takes a few dozen; ratio thresholds are chosen for illustration and no value is a known safe limit\n\n--- 3. Genuinely computing: how fast alignment must grow to keep a constant ratio ---\ncapability growth 0.05 per generation: alignment must grow at least 0.05 per generation to hold the ratio at 1.0\ncapability growth 0.10 per generation: alignment must grow at least 0.10 per generation to hold the ratio at 1.0\ncapability growth 0.20 per generation: alignment must grow at least 0.20 per generation to hold the ratio at 1.0\nalignment growth 0.05: ratio at generation 20 = 14.45\nalignment growth 0.10: ratio at generation 20 = 5.70\nalignment growth 0.15: ratio at generation 20 = 2.34\nalignment growth 0.20: ratio at generation 20 = 1.00\nthe ratio stays fixed only when the two growth rates are equal, and at any lower alignment rate the gap widens exponentially; matching the rate once is not enough, it has to be sustained every generation\n\n--- 4. Genuinely measuring: noisy growth rates (200 runs per row, seed 1, 20 generations) ---\nnoise sd 0.00: mean ratio  14.45 | min  14.45 | max   14.45 | runs with ratio under 5: 0\nnoise sd 0.05: mean ratio  15.11 | min   6.67 | max   46.96 | runs with ratio under 5: 0\nnoise sd 0.10: mean ratio  16.77 | min   2.26 | max  146.89 | runs with ratio under 5: 5\nnoise spreads the outcome widely but the 15 percentage point gap in mean growth dominates, so almost every run still ends far from parity; the noise model is Gaussian with an invented spread"
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
    "headingEn": "Experiment 1: Capability C = 100 * 1.2^n and alignment A = 100 * 1.05^n",
    "headingKn": "ಪ್ರಯೋಗ 1: Capability C = 100 * 1.2^n and alignment A = 100 * 1.05^n",
    "bodyEn": "What it ran: Capability C = 100 * 1.2^n and alignment A = 100 * 1.05^n. What the lab concluded: both start at 100, so the gap is zero at generation 0 and the ratio rises steadily because the capability rate is higher; at generation 20 capability is about 3834 and alignment about 265, a ratio near 14.5, and the rates are the lesson's illustrative numbers",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Capability C = 100 * 1.2^n and alignment A = 100 * 1.05^n. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): both start at 100, so the gap is zero at generation 0 and the ratio rises steadily because the capability rate is higher; at generation 20 capability is about 3834 and alignment about 265, a ratio near 14.5, and the rates are the lesson's illustrative numbers"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. Genuinely computing: capability C = 100 * 1.2^n and alignment A = 100 * 1.05^n ---\ngen   capability  alignment   gap    ratio C/A\n  0       100.0      100.0       0.0    1.00\n  5       248.8      127.6     121.2    1.95\n 10       619.2      162.9     456.3    3.80\n 15      1540.7      207.9    1332.8    7.41\n 20      3833.8      265.3    3568.4   14.45\n 30     23737.6      432.2   23305.4   54.92"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: Generations until the ratio crosses a threshold",
    "headingKn": "ಪ್ರಯೋಗ 2: Generations until the ratio crosses a threshold",
    "bodyEn": "What it ran: Generations until the ratio crosses a threshold. What the lab concluded: the loop and the closed form n = ln(threshold) / ln(1.2 / 1.05) agree, and a ratio of 2 arrives within a handful of generations while a ratio of 100 takes a few dozen; ratio thresholds are chosen for illustration and no value is a known safe limit",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Generations until the ratio crosses a threshold. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the loop and the closed form n = ln(threshold) / ln(1.2 / 1.05) agree, and a ratio of 2 arrives within a handful of generations while a ratio of 100 takes a few dozen; ratio thresholds are chosen for illustration and no value is a known safe limit"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely computing: generations until the ratio crosses a threshold ---\nratio >=   2 first at generation  6 | closed form  6\nratio >=   5 first at generation 13 | closed form 13\nratio >=  10 first at generation 18 | closed form 18\nratio >= 100 first at generation 35 | closed form 35"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: How fast alignment must grow to keep a constant ratio",
    "headingKn": "ಪ್ರಯೋಗ 3: How fast alignment must grow to keep a constant ratio",
    "bodyEn": "What it ran: How fast alignment must grow to keep a constant ratio. What the lab concluded: the ratio stays fixed only when the two growth rates are equal, and at any lower alignment rate the gap widens exponentially; matching the rate once is not enough, it has to be sustained every generation",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: How fast alignment must grow to keep a constant ratio. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the ratio stays fixed only when the two growth rates are equal, and at any lower alignment rate the gap widens exponentially; matching the rate once is not enough, it has to be sustained every generation"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely computing: how fast alignment must grow to keep a constant ratio ---\ncapability growth 0.05 per generation: alignment must grow at least 0.05 per generation to hold the ratio at 1.0\ncapability growth 0.10 per generation: alignment must grow at least 0.10 per generation to hold the ratio at 1.0\ncapability growth 0.20 per generation: alignment must grow at least 0.20 per generation to hold the ratio at 1.0\nalignment growth 0.05: ratio at generation 20 = 14.45\nalignment growth 0.10: ratio at generation 20 = 5.70\nalignment growth 0.15: ratio at generation 20 = 2.34\nalignment growth 0.20: ratio at generation 20 = 1.00"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 4: Noisy growth rates (200 runs per row, seed 1, 20 generations)",
    "headingKn": "ಪ್ರಯೋಗ 4: Noisy growth rates (200 runs per row, seed 1, 20 generations)",
    "bodyEn": "What it ran: Noisy growth rates (200 runs per row, seed 1, 20 generations). What the lab concluded: noise spreads the outcome widely but the 15 percentage point gap in mean growth dominates, so almost every run still ends far from parity; the noise model is Gaussian with an invented spread",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Noisy growth rates (200 runs per row, seed 1, 20 generations). ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): noise spreads the outcome widely but the 15 percentage point gap in mean growth dominates, so almost every run still ends far from parity; the noise model is Gaussian with an invented spread"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 4. Genuinely measuring: noisy growth rates (200 runs per row, seed 1, 20 generations) ---\nnoise sd 0.00: mean ratio  14.45 | min  14.45 | max   14.45 | runs with ratio under 5: 0\nnoise sd 0.05: mean ratio  15.11 | min   6.67 | max   46.96 | runs with ratio under 5: 0\nnoise sd 0.10: mean ratio  16.77 | min   2.26 | max  146.89 | runs with ratio under 5: 5"
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
    "headingEn": "Genuinely Found: The Table and Threshold Crossings",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಕೋಷ್ಟಕ ಮತ್ತು ಮಿತಿ ದಾಟುವಿಕೆ",
    "bodyEn": "Section 1: at generations 5, 10, 15, 20 and 30 capability was 248.8, 619.2, 1540.7, 3833.8 and 23737.6, alignment 127.6, 162.9, 207.9, 265.3 and 432.2, and the ratio 1.95, 3.80, 7.41, 14.45 and 54.92. Section 2: the ratio first reached 2, 5, 10 and 100 at generations 6, 13, 18 and 35, matching the closed form each time.",
    "bodyKn": "ವಿಭಾಗ 1: ಜನರೇಶನ್ 5, 10, 15, 20 ಮತ್ತು 30 ರಲ್ಲಿ capability 248.8, 619.2, 1540.7, 3833.8 ಮತ್ತು 23737.6, alignment 127.6, 162.9, 207.9, 265.3 ಮತ್ತು 432.2, ಮತ್ತು ಅನುಪಾತ 1.95, 3.80, 7.41, 14.45 ಮತ್ತು 54.92. ವಿಭಾಗ 2: ಅನುಪಾತ 2, 5, 10 ಮತ್ತು 100 ಅನ್ನು ಜನರೇಶನ್ 6, 13, 18 ಮತ್ತು 35 ರಲ್ಲಿ ಮೊದಲು ತಲುಪಿತು, ಪ್ರತಿ ಬಾರಿ ಮುಚ್ಚಿದ ರೂಪಕ್ಕೆ ಹೊಂದಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Needed Growth and Noise",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಬೇಕಾದ ಬೆಳವಣಿಗೆ ಮತ್ತು Noise",
    "bodyEn": "Section 3: with alignment growth 0.05, 0.10, 0.15 and 0.20 the ratio at generation 20 was 14.45, 5.70, 2.34 and 1.00. Section 4 over 200 noisy runs: noise sd 0.00 gave a ratio of 14.45, sd 0.05 gave a mean of 15.11 (range 6.67 to 46.96, none under 5) and sd 0.10 gave a mean of 16.77 (range 2.26 to 146.89, five runs under 5).",
    "bodyKn": "ವಿಭಾಗ 3: alignment ಬೆಳವಣಿಗೆ 0.05, 0.10, 0.15 ಮತ್ತು 0.20 ರಲ್ಲಿ ಜನರೇಶನ್ 20 ರ ಅನುಪಾತ 14.45, 5.70, 2.34 ಮತ್ತು 1.00. ವಿಭಾಗ 4, 200 noisy ಓಟಗಳಲ್ಲಿ: noise sd 0.00 ಅನುಪಾತ 14.45 ನೀಡಿತು, sd 0.05 ಸರಾಸರಿ 15.11 (ವ್ಯಾಪ್ತಿ 6.67 ರಿಂದ 46.96, 5 ಕ್ಕಿಂತ ಕಡಿಮೆ ಯಾವುದೂ ಇಲ್ಲ) ಮತ್ತು sd 0.10 ಸರಾಸರಿ 16.77 (ವ್ಯಾಪ್ತಿ 2.26 ರಿಂದ 146.89, 5 ಕ್ಕಿಂತ ಕಡಿಮೆ ಐದು ಓಟಗಳು) ನೀಡಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "The ratio keeps growing for as long as capability outpaces alignment, so the question is not the size of the gap today but whether alignment growth matches capability growth every generation.",
    "bodyKn": "capability alignment ಅನ್ನು ಮೀರಿಸುವವರೆಗೆ ಅನುಪಾತ ಬೆಳೆಯುತ್ತಲೇ ಇರುತ್ತದೆ, ಆದ್ದರಿಂದ ಪ್ರಶ್ನೆ ಇಂದಿನ ಅಂತರದ ಗಾತ್ರ ಅಲ್ಲ, ಪ್ರತಿ ಜನರೇಶನ್ alignment ಬೆಳವಣಿಗೆ capability ಬೆಳವಣಿಗೆಗೆ ಹೊಂದುತ್ತದೆಯೇ ಎಂಬುದು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"noise could save us by pulling the ratio back.\" With sd 0.10 only 5 of 200 runs ended under a ratio of 5.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"noise ಅನುಪಾತವನ್ನು ಹಿಂದೆ ಎಳೆದು ನಮ್ಮನ್ನು ಉಳಿಸಬಹುದು.\" sd 0.10 ರಲ್ಲಿ 200 ರಲ್ಲಿ ಕೇವಲ 5 ಓಟಗಳು 5 ರ ಅನುಪಾತದ ಕೆಳಗೆ ಕೊನೆಗೊಂಡವು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Capability: what the system can do. Alignment: how well it does what is intended. Ratio: capability divided by alignment. Closed form: a formula that gives the answer without looping.",
    "bodyKn": "Capability: ವ್ಯವಸ್ಥೆ ಏನು ಮಾಡಬಲ್ಲದು. Alignment: ಉದ್ದೇಶಿಸಿದ್ದನ್ನು ಎಷ್ಟು ಚೆನ್ನಾಗಿ ಮಾಡುತ್ತದೆ. Ratio: capability ಭಾಗಿಸಿ alignment. Closed form: ಲೂಪ್ ಇಲ್ಲದೆ ಉತ್ತರ ನೀಡುವ ಸೂತ್ರ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) At generation 20 the ratio was 14.45. 2) A ratio of 2 arrived at generation 6 and 100 at generation 35. 3) Alignment growth of 0.20 was needed for ratio 1.00. 4) Noise did not rescue the ratio. 5) The rates are the lesson illustration, not measurements.",
    "bodyKn": "1) ಜನರೇಶನ್ 20 ರಲ್ಲಿ ಅನುಪಾತ 14.45. 2) ಅನುಪಾತ 2 ಜನರೇಶನ್ 6 ರಲ್ಲಿ ಮತ್ತು 100 ಜನರೇಶನ್ 35 ರಲ್ಲಿ ಬಂತು. 3) ಅನುಪಾತ 1.00 ಗೆ alignment ಬೆಳವಣಿಗೆ 0.20 ಬೇಕಾಯಿತು. 4) noise ಅನುಪಾತವನ್ನು ಉಳಿಸಲಿಲ್ಲ. 5) ದರಗಳು lesson ವಿವರಣೆ, ಅಳತೆಗಳಲ್ಲ."
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
    "bodyEn": "1) Open a terminal in pneuronics-backend/lesson-defs/labs. 2) Run: python -B rs_1.py (in Git Bash on Windows: PYTHONIOENCODING=utf-8 python -B rs_1.py). 3) Compare each section with the walkthrough above. The -B flag stops Python from writing __pycache__ folders.",
    "bodyKn": "1) pneuronics-backend/lesson-defs/labs ನಲ್ಲಿ ಟರ್ಮಿನಲ್ ತೆರೆಯಿರಿ. 2) ಓಡಿಸಿ: python -B rs_1.py (Windows Git Bash ನಲ್ಲಿ: PYTHONIOENCODING=utf-8 python -B rs_1.py). 3) ಪ್ರತಿ ವಿಭಾಗವನ್ನು ಮೇಲಿನ ನಡೆದಾಟಕ್ಕೆ ಹೋಲಿಸಿ. -B ಧ್ವಜ Python __pycache__ ಫೋಲ್ಡರ್‌ಗಳನ್ನು ಬರೆಯುವುದನ್ನು ತಡೆಯುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Predict before you run",
    "headingKn": "ಓಡಿಸುವ ಮುನ್ನ ಊಹಿಸಿ",
    "bodyEn": "Before rerunning, write down what you expect each experiment to print, then compare:\n1. Capability C = 100 * 1.2^n and alignment A = 100 * 1.05^n\n2. Generations until the ratio crosses a threshold\n3. How fast alignment must grow to keep a constant ratio\n4. Noisy growth rates (200 runs per row, seed 1, 20 generations)",
    "bodyKn": "ಮರುಓಡಿಸುವ ಮುನ್ನ ಪ್ರತಿ ಪ್ರಯೋಗ ಏನು ಮುದ್ರಿಸುತ್ತದೆ ಎಂದು ನಿರೀಕ್ಷಿಸುವುದನ್ನು ಬರೆಯಿರಿ, ನಂತರ ಹೋಲಿಸಿ:\n1. Capability C = 100 * 1.2^n and alignment A = 100 * 1.05^n\n2. Generations until the ratio crosses a threshold\n3. How fast alignment must grow to keep a constant ratio\n4. Noisy growth rates (200 runs per row, seed 1, 20 generations)"
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What was the capability to alignment ratio at generation 20?",
      "qKn": "ಜನರೇಶನ್ 20 ರಲ್ಲಿ capability ಮತ್ತು alignment ಅನುಪಾತ ಎಷ್ಟು?",
      "opts": [
       "14.45",
       "1.95",
       "54.92",
       "5.70"
      ],
      "optsKn": [
       "14.45",
       "1.95",
       "54.92",
       "5.70"
      ],
      "correct": 0
     },
     {
      "q": "At which generation did the ratio first reach 100?",
      "qKn": "ಅನುಪಾತ ಮೊದಲು 100 ತಲುಪಿದ ಜನರೇಶನ್ ಯಾವುದು?",
      "opts": [
       "35",
       "6",
       "13",
       "18"
      ],
      "optsKn": [
       "35",
       "6",
       "13",
       "18"
      ],
      "correct": 0
     },
     {
      "q": "What alignment growth rate gave a ratio of 1.00 at generation 20?",
      "qKn": "ಜನರೇಶನ್ 20 ರಲ್ಲಿ 1.00 ಅನುಪಾತ ನೀಡಿದ alignment ಬೆಳವಣಿಗೆ ದರ ಯಾವುದು?",
      "opts": [
       "0.20",
       "0.05",
       "0.10",
       "0.15"
      ],
      "optsKn": [
       "0.20",
       "0.05",
       "0.10",
       "0.15"
      ],
      "correct": 0
     },
     {
      "q": "How many of 200 runs at noise sd 0.10 ended with a ratio under 5?",
      "qKn": "noise sd 0.10 ರ 200 ಓಟಗಳಲ್ಲಿ ಎಷ್ಟು 5 ಕ್ಕಿಂತ ಕಡಿಮೆ ಅನುಪಾತದಲ್ಲಿ ಕೊನೆಗೊಂಡವು?",
      "opts": [
       "5",
       "0",
       "200",
       "100"
      ],
      "optsKn": [
       "5",
       "0",
       "200",
       "100"
      ],
      "correct": 0
     },
     {
      "q": "What is the status of the 20 percent and 5 percent rates?",
      "qKn": "20 ಶೇಕಡಾ ಮತ್ತು 5 ಶೇಕಡಾ ದರಗಳ ಸ್ಥಿತಿ ಏನು?",
      "opts": [
       "Illustrative numbers from the lesson, not measurements",
       "Measured on a real system",
       "Proven bounds",
       "Outputs of the Monte Carlo"
      ],
      "optsKn": [
       "lesson ನ ವಿವರಣಾತ್ಮಕ ಸಂಖ್ಯೆಗಳು, ಅಳತೆಗಳಲ್ಲ",
       "ನಿಜ ವ್ಯವಸ್ಥೆಯಲ್ಲಿ ಅಳೆದದ್ದು",
       "ಸಾಬೀತಾದ ಮಿತಿಗಳು",
       "Monte Carlo ಔಟ್‌ಪುಟ್‌ಗಳು"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
