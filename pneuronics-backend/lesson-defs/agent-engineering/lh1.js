module.exports = {
 "phaseId": "6a369d6366020ed05b32158c",
 "moduleId": "6a369d6366020ed05b32158f",
 "order": 0,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "From Chatbots to Long-Horizon Agents (Part 1 of 3) — Horizons and Compounding Reliability",
 "titleKn": "Chatbots ನಿಂದ ದೀರ್ಘ-ಅವಧಿ Agents ಗೆ (ಭಾಗ 1 / 3) — Horizon ಮತ್ತು ಸಂಯೋಜಿತ ವಿಶ್ವಾಸಾರ್ಹತೆ",
 "desc": "Compute a task-length horizon, see per-step reliability compound and check the formula against a simulation.",
 "descKn": "ಕಾರ್ಯ-ಉದ್ದದ horizon ಲೆಕ್ಕ ಹಾಕಿ, ಹಂತ-ಹಂತದ ವಿಶ್ವಾಸಾರ್ಹತೆ ಸಂಯೋಜಿತವಾಗುವುದನ್ನು ನೋಡಿ ಮತ್ತು ಸೂತ್ರವನ್ನು ಸಿಮ್ಯುಲೇಶನ್ ವಿರುದ್ಧ ಪರಿಶೀಲಿಸಿ.",
 "objectives": [
  "Compute success against task length.",
  "Explain the horizon.",
  "Compound per-step reliability.",
  "Check a formula by simulation.",
  "Label an assumed projection."
 ],
 "objectivesKn": [
  "ಕಾರ್ಯದ ಉದ್ದದ ವಿರುದ್ಧ ಯಶಸ್ಸು ಲೆಕ್ಕ ಹಾಕಿ.",
  "Horizon ವಿವರಿಸಿ.",
  "ಹಂತ-ಹಂತದ ವಿಶ್ವಾಸಾರ್ಹತೆ ಸಂಯೋಜಿಸಿ.",
  "ಸಿಮ್ಯುಲೇಶನ್‌ನಿಂದ ಸೂತ್ರ ಪರಿಶೀಲಿಸಿ.",
  "ಊಹಿತ ಪ್ರಕ್ಷೇಪಣೆಗೆ ಲೇಬಲ್ ಹಾಕಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "From Chatbots to Long-Horizon Agents (Part 1 of 3)",
    "textKn": "Chatbots ನಿಂದ ದೀರ್ಘ-ಅವಧಿ Agents ಗೆ (ಭಾಗ 1 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 1 of 3: a logistic time-horizon model, how success falls with task length, compounding per-step reliability checked against a seeded Monte Carlo, steps-to-failure counts and a doubling-time projection. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind long-horizon agents (METR-style time horizons, compounding per-step reliability, checkpoints, retries, memory compaction and trajectory monitors), not the real software, and the success probabilities, step counts and the scripted agent are made up by the lab and no language model is involved, so no real LLM behaviour is measured. The original code/main.py was not supplied, so the labs are our own implementation. METR time-horizon figures and the lesson doubling-time examples (14 hours to 28 to 56) are cited from the lesson and were not measured here; the 4 hour horizon, the 7 month doubling time and every probability in the labs are invented for illustration. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 1ನೆಯದು: logistic time-horizon ಮಾದರಿ, ಕಾರ್ಯದ ಉದ್ದದೊಂದಿಗೆ ಯಶಸ್ಸು ಇಳಿಯುವ ರೀತಿ, seeded Monte Carlo ವಿರುದ್ಧ ಪರಿಶೀಲಿಸಿದ ಹಂತ-ಹಂತದ ವಿಶ್ವಾಸಾರ್ಹತೆಯ ಸಂಯೋಜನೆ, ವೈಫಲ್ಯದವರೆಗಿನ ಹಂತ ಎಣಿಕೆ ಮತ್ತು doubling-time ಪ್ರಕ್ಷೇಪಣೆ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು ದೀರ್ಘ-ಅವಧಿ agents (METR ಶೈಲಿಯ ಸಮಯ ಹಾರಿಜಾನ್, ಹಂತ-ಹಂತದ ವಿಶ್ವಾಸಾರ್ಹತೆಯ ಸಂಯೋಜನೆ, checkpoints, ಮರುಪ್ರಯತ್ನ, ಮೆಮೊರಿ ಸಂಕ್ಷೇಪಣ ಮತ್ತು trajectory ಮಾನಿಟರ್‌ಗಳು) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಯಶಸ್ಸಿನ ಸಂಭವನೀಯತೆಗಳು, ಹಂತ ಸಂಖ್ಯೆಗಳು ಮತ್ತು scripted agent ಅನ್ನು ಲ್ಯಾಬ್ ಕಲ್ಪಿಸಿದ್ದು ಮತ್ತು ಭಾಷಾ ಮಾದರಿ ಇಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ code/main.py ಒದಗಿಸಿರಲಿಲ್ಲ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ನಮ್ಮದೇ ಅನುಷ್ಠಾನ. METR time-horizon ಅಂಕಿಗಳು ಮತ್ತು lesson ನ doubling-time ಉದಾಹರಣೆಗಳು (14 ಗಂಟೆ, 28, 56) lesson ನಿಂದ ಉಲ್ಲೇಖಿತ ಮತ್ತು ಇಲ್ಲಿ ಅಳೆಯಲಾಗಿಲ್ಲ; 4 ಗಂಟೆ horizon, 7 ತಿಂಗಳ doubling time ಮತ್ತು ಲ್ಯಾಬ್‌ಗಳ ಪ್ರತಿ ಸಂಭವನೀಯತೆ ವಿವರಣೆಗಾಗಿ ಕಲ್ಪಿತ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "A Horizon Is a Length, Not a Grade",
    "textKn": "Horizon ಒಂದು ಉದ್ದ, ಶ್ರೇಣಿ ಅಲ್ಲ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Two Ways Length Hurts",
    "headingKn": "ಉದ್ದ ಹಾನಿ ಮಾಡುವ ಎರಡು ವಿಧಾನಗಳು",
    "bodyEn": "A chatbot answers one message, but a long-horizon agent takes many steps, so its success depends on how long the task is. This part builds the arithmetic: a logistic model in which success is 50 percent at the horizon, the effect of steepness, the way per-step reliability compounds over many steps, a seeded Monte Carlo that checks the compounding formula, and a doubling-time projection. Every number is computed by the lab from invented inputs.",
    "bodyKn": "Chatbot ಒಂದು ಸಂದೇಶಕ್ಕೆ ಉತ್ತರಿಸುತ್ತದೆ, ಆದರೆ ದೀರ್ಘ-ಅವಧಿ agent ಹಲವು ಹಂತ ತೆಗೆದುಕೊಳ್ಳುತ್ತದೆ, ಆದ್ದರಿಂದ ಅದರ ಯಶಸ್ಸು ಕಾರ್ಯ ಎಷ್ಟು ಉದ್ದ ಎಂಬುದರ ಮೇಲೆ ಅವಲಂಬಿತ. ಈ ಭಾಗ ಲೆಕ್ಕಾಚಾರ ನಿರ್ಮಿಸುತ್ತದೆ: horizon ನಲ್ಲಿ ಯಶಸ್ಸು 50 ಶೇಕಡಾ ಇರುವ logistic ಮಾದರಿ, ಏರಿಕೆಯ ಪರಿಣಾಮ, ಹಲವು ಹಂತಗಳಲ್ಲಿ ಹಂತ-ಹಂತದ ವಿಶ್ವಾಸಾರ್ಹತೆ ಸಂಯೋಜಿತವಾಗುವ ರೀತಿ, ಸಂಯೋಜನೆಯ ಸೂತ್ರ ಪರಿಶೀಲಿಸುವ seeded Monte Carlo ಮತ್ತು doubling-time ಪ್ರಕ್ಷೇಪಣೆ. ಪ್ರತಿ ಸಂಖ್ಯೆಯನ್ನು ಲ್ಯಾಬ್ ಕಲ್ಪಿತ ಒಳಹರಿವುಗಳಿಂದ ಲೆಕ್ಕ ಹಾಕುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Success Falls as Tasks Get Longer",
    "headingKn": "ಕಾರ್ಯ ಉದ್ದವಾದಂತೆ ಯಶಸ್ಸು ಇಳಿಯುತ್ತದೆ",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">success depends on task length, not only on the model</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">task</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">length t</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">horizon</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">H at 50%</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">P(success)</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">1/(1+(t/H)^k)</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">long task</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">success falls</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">success depends on task length, not only on the model</text></svg>",
    "captionEn": "The horizon is the task length where success is 50 percent.",
    "captionKn": "Horizon ಎಂದರೆ ಯಶಸ್ಸು 50 ಶೇಕಡಾ ಇರುವ ಕಾರ್ಯದ ಉದ್ದ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Quantities in the lab",
    "headingKn": "ಲ್ಯಾಬ್‌ನಲ್ಲಿನ ಪ್ರಮಾಣಗಳು",
    "headers": [
     "Quantity",
     "Lab value"
    ],
    "rows": [
     [
      "horizon H",
      "4 hours (invented)"
     ],
     [
      "success model",
      "P = 1 / (1 + (t/H)^k)"
     ],
     [
      "per-step success",
      "0.99 and 0.95 (invented)"
     ],
     [
      "Monte Carlo",
      "20000 trials, seed 7"
     ],
     [
      "assumed doubling time",
      "7 months (invented)"
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
    "filename": "lh_1.py",
    "headingEn": "Horizon model and compounding",
    "headingKn": "Horizon ಮಾದರಿ ಮತ್ತು ಸಂಯೋಜನೆ",
    "descEn": "p_success gives the chance of finishing a task of a given length, monte_carlo_chain simulates a chain of independent steps and steps_for_target counts how many steps it takes for chain success to fall to a target.",
    "descKn": "p_success ನೀಡಿದ ಉದ್ದದ ಕಾರ್ಯ ಮುಗಿಸುವ ಸಾಧ್ಯತೆ ನೀಡುತ್ತದೆ, monte_carlo_chain ಸ್ವತಂತ್ರ ಹಂತಗಳ ಸರಪಳಿಯನ್ನು ಅನುಕರಿಸುತ್ತದೆ ಮತ್ತು steps_for_target ಸರಪಳಿ ಯಶಸ್ಸು ಗುರಿಗೆ ಇಳಿಯಲು ಎಷ್ಟು ಹಂತ ಬೇಕು ಎಣಿಸುತ್ತದೆ.",
    "code": "def p_success(t_hours, horizon_hours, k=1.0):\n    \"\"\"Logistic-in-log-time success model: P = 1 / (1 + (t / H)^k). H is the task length where P = 0.5.\"\"\"\n    return 1.0 / (1.0 + (t_hours / horizon_hours) ** k)\n\n\ndef monte_carlo_chain(p_step, n_steps, trials, seed):\n    r = random.Random(seed)\n    ok = 0\n    for _ in range(trials):\n        if all(r.random() < p_step for _ in range(n_steps)):\n            ok += 1\n    return ok / trials\n\n\ndef steps_for_target(p_step, target):\n    n = 0\n    p = 1.0\n    while p > target:\n        p *= p_step\n        n += 1\n    return n"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "lh_1.py",
    "headingEn": "main(): experiments",
    "headingKn": "main(): ಪ್ರಯೋಗಗಳು",
    "descEn": "main() prints success against task length, varies steepness, compares the compounding formula with a simulation, counts steps to 50 percent and projects a doubling horizon.",
    "descKn": "main() ಕಾರ್ಯದ ಉದ್ದದ ವಿರುದ್ಧ ಯಶಸ್ಸು ಮುದ್ರಿಸಿ, ಏರಿಕೆ ಬದಲಿಸಿ, ಸಂಯೋಜನೆ ಸೂತ್ರವನ್ನು ಸಿಮ್ಯುಲೇಶನ್‌ನೊಂದಿಗೆ ಹೋಲಿಸಿ, 50 ಶೇಕಡಾಗೆ ಹಂತ ಎಣಿಸಿ ಮತ್ತು ದ್ವಿಗುಣ horizon ಪ್ರಕ್ಷೇಪಿಸುತ್ತದೆ.",
    "code": "def main():\n    section(\"1. Genuinely computing: success probability against task length for a 4-hour horizon\")\n    H = 4.0\n    for t in (0.25, 1, 2, 4, 8, 16, 32):\n        print(f\"task length {t:6.2f} h  P(success) = {p_success(t, H):.3f}\")\n    print(\"with a horizon of 4 hours the model gives 0.5 at exactly 4 hours by construction, 0.941 at 15 minutes and 0.111 at 32 hours; the horizon is the length where success is 50 percent, and says nothing about 99 percent reliability, and the horizon value here is invented\")\n\n    section(\"2. Genuinely computing: steepness k changes how fast reliability falls\")\n    for k in (0.5, 1.0, 2.0):\n        row = [f\"{p_success(t, H, k):.3f}\" for t in (1, 4, 16)]\n        print(f\"k = {k}: P at 1 h, 4 h, 16 h = {row}\")\n    print(\"a larger k makes the drop around the horizon sharper, so two agents with the same 50 percent horizon can differ a lot at one quarter or four times that length, and k was chosen by hand for this lab\")\n\n    section(\"3. Genuinely computing and simulating: compounding per-step reliability\")\n    for p in (0.99, 0.95):\n        for n in (10, 50, 100):\n            print(f\"per-step success {p}, {n:3d} steps: formula {p ** n:.4f}\")\n    print(\"a step that works 99 percent of the time gives only 36.6 percent over 100 steps, and 95 percent per step gives 0.6 percent over 100 steps, so long tasks need very high per-step reliability or a way to recover from a failed step\")\n    mc = monte_carlo_chain(0.99, 100, 20000, 7)\n    print(f\"seeded Monte Carlo, 20000 trials, p=0.99, 100 steps: {mc:.4f} against formula {0.99 ** 100:.4f}\")\n    print(\"the simulated rate lands within sampling noise of the formula, which checks that the independence assumption in the formula matches what the simulation does; real steps are not independent and this proves nothing about a real agent\")\n\n    section(\"4. Genuinely computing: how many steps before success drops under 50 percent\")\n    for p in (0.999, 0.99, 0.95):\n        print(f\"per-step {p}: first step count with chain success <= 0.5 is {steps_for_target(p, 0.5)}\")\n    print(\"at 99.9 percent per step the chain falls under 50 percent at 693 steps, at 99 percent at 69 and at 95 percent at 14, which is the same idea as a horizon expressed in steps instead of hours\")\n\n    section(\"5. Genuinely computing: a doubling-time projection of the horizon\")\n    horizon = 4.0\n    print(\"assumed doubling every 7 months, starting from a 4 hour horizon (an assumption, not a forecast):\")\n    for months in (0, 7, 14, 21, 28):\n        print(f\"  month {months:2d}: horizon {horizon * 2 ** (months / 7):6.1f} h\")\n    print(\"the projection is just exponential growth applied to an assumed starting value and doubling time; the lesson's own 14 to 28 to 56 hour example is treated as cited arithmetic and the doubling time here is invented\")\n    print(\"months needed to go from 4 h to 160 h at one doubling per 7 months:\", round(7 * log2(160 / 4), 1))\n    print(\"that figure follows from log2(40) times 7 and shows how sensitive a forecast is to the assumed doubling time, since a different assumed doubling time gives a very different answer\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely computing: success probability against task length for a 4-hour horizon ---\ntask length   0.25 h  P(success) = 0.941\ntask length   1.00 h  P(success) = 0.800\ntask length   2.00 h  P(success) = 0.667\ntask length   4.00 h  P(success) = 0.500\ntask length   8.00 h  P(success) = 0.333\ntask length  16.00 h  P(success) = 0.200\ntask length  32.00 h  P(success) = 0.111\nwith a horizon of 4 hours the model gives 0.5 at exactly 4 hours by construction, 0.941 at 15 minutes and 0.111 at 32 hours; the horizon is the length where success is 50 percent, and says nothing about 99 percent reliability, and the horizon value here is invented\n\n--- 2. Genuinely computing: steepness k changes how fast reliability falls ---\nk = 0.5: P at 1 h, 4 h, 16 h = ['0.667', '0.500', '0.333']\nk = 1.0: P at 1 h, 4 h, 16 h = ['0.800', '0.500', '0.200']\nk = 2.0: P at 1 h, 4 h, 16 h = ['0.941', '0.500', '0.059']\na larger k makes the drop around the horizon sharper, so two agents with the same 50 percent horizon can differ a lot at one quarter or four times that length, and k was chosen by hand for this lab\n\n--- 3. Genuinely computing and simulating: compounding per-step reliability ---\nper-step success 0.99,  10 steps: formula 0.9044\nper-step success 0.99,  50 steps: formula 0.6050\nper-step success 0.99, 100 steps: formula 0.3660\nper-step success 0.95,  10 steps: formula 0.5987\nper-step success 0.95,  50 steps: formula 0.0769\nper-step success 0.95, 100 steps: formula 0.0059\na step that works 99 percent of the time gives only 36.6 percent over 100 steps, and 95 percent per step gives 0.6 percent over 100 steps, so long tasks need very high per-step reliability or a way to recover from a failed step\nseeded Monte Carlo, 20000 trials, p=0.99, 100 steps: 0.3624 against formula 0.3660\nthe simulated rate lands within sampling noise of the formula, which checks that the independence assumption in the formula matches what the simulation does; real steps are not independent and this proves nothing about a real agent\n\n--- 4. Genuinely computing: how many steps before success drops under 50 percent ---\nper-step 0.999: first step count with chain success <= 0.5 is 693\nper-step 0.99: first step count with chain success <= 0.5 is 69\nper-step 0.95: first step count with chain success <= 0.5 is 14\nat 99.9 percent per step the chain falls under 50 percent at 693 steps, at 99 percent at 69 and at 95 percent at 14, which is the same idea as a horizon expressed in steps instead of hours\n\n--- 5. Genuinely computing: a doubling-time projection of the horizon ---\nassumed doubling every 7 months, starting from a 4 hour horizon (an assumption, not a forecast):\n  month  0: horizon    4.0 h\n  month  7: horizon    8.0 h\n  month 14: horizon   16.0 h\n  month 21: horizon   32.0 h\n  month 28: horizon   64.0 h\nthe projection is just exponential growth applied to an assumed starting value and doubling time; the lesson's own 14 to 28 to 56 hour example is treated as cited arithmetic and the doubling time here is invented\nmonths needed to go from 4 h to 160 h at one doubling per 7 months: 37.3\nthat figure follows from log2(40) times 7 and shows how sensitive a forecast is to the assumed doubling time, since a different assumed doubling time gives a very different answer"
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
    "headingEn": "Experiment 1: Success probability against task length for a 4-hour horizon",
    "headingKn": "ಪ್ರಯೋಗ 1: Success probability against task length for a 4-hour horizon",
    "bodyEn": "What it ran: Success probability against task length for a 4-hour horizon. What the lab concluded: with a horizon of 4 hours the model gives 0.5 at exactly 4 hours by construction, 0.941 at 15 minutes and 0.111 at 32 hours; the horizon is the length where success is 50 percent, and says nothing about 99 percent reliability, and the horizon value here is invented",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Success probability against task length for a 4-hour horizon. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): with a horizon of 4 hours the model gives 0.5 at exactly 4 hours by construction, 0.941 at 15 minutes and 0.111 at 32 hours; the horizon is the length where success is 50 percent, and says nothing about 99 percent reliability, and the horizon value here is invented"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. Genuinely computing: success probability against task length for a 4-hour horizon ---\ntask length   0.25 h  P(success) = 0.941\ntask length   1.00 h  P(success) = 0.800\ntask length   2.00 h  P(success) = 0.667\ntask length   4.00 h  P(success) = 0.500\ntask length   8.00 h  P(success) = 0.333\ntask length  16.00 h  P(success) = 0.200\ntask length  32.00 h  P(success) = 0.111"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: Steepness k changes how fast reliability falls",
    "headingKn": "ಪ್ರಯೋಗ 2: Steepness k changes how fast reliability falls",
    "bodyEn": "What it ran: Steepness k changes how fast reliability falls. What the lab concluded: a larger k makes the drop around the horizon sharper, so two agents with the same 50 percent horizon can differ a lot at one quarter or four times that length, and k was chosen by hand for this lab",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Steepness k changes how fast reliability falls. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a larger k makes the drop around the horizon sharper, so two agents with the same 50 percent horizon can differ a lot at one quarter or four times that length, and k was chosen by hand for this lab"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely computing: steepness k changes how fast reliability falls ---\nk = 0.5: P at 1 h, 4 h, 16 h = ['0.667', '0.500', '0.333']\nk = 1.0: P at 1 h, 4 h, 16 h = ['0.800', '0.500', '0.200']\nk = 2.0: P at 1 h, 4 h, 16 h = ['0.941', '0.500', '0.059']"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: Compounding per-step reliability",
    "headingKn": "ಪ್ರಯೋಗ 3: Compounding per-step reliability",
    "bodyEn": "What it ran: Compounding per-step reliability. What the lab concluded: the simulated rate lands within sampling noise of the formula, which checks that the independence assumption in the formula matches what the simulation does; real steps are not independent and this proves nothing about a real agent",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Compounding per-step reliability. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the simulated rate lands within sampling noise of the formula, which checks that the independence assumption in the formula matches what the simulation does; real steps are not independent and this proves nothing about a real agent"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely computing and simulating: compounding per-step reliability ---\nper-step success 0.99,  10 steps: formula 0.9044\nper-step success 0.99,  50 steps: formula 0.6050\nper-step success 0.99, 100 steps: formula 0.3660\nper-step success 0.95,  10 steps: formula 0.5987\nper-step success 0.95,  50 steps: formula 0.0769\nper-step success 0.95, 100 steps: formula 0.0059\na step that works 99 percent of the time gives only 36.6 percent over 100 steps, and 95 percent per step gives 0.6 percent over 100 steps, so long tasks need very high per-step reliability or a way to recover from a fai…\nseeded Monte Carlo, 20000 trials, p=0.99, 100 steps: 0.3624 against formula 0.3660"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 4: How many steps before success drops under 50 percent",
    "headingKn": "ಪ್ರಯೋಗ 4: How many steps before success drops under 50 percent",
    "bodyEn": "What it ran: How many steps before success drops under 50 percent. What the lab concluded: at 99.9 percent per step the chain falls under 50 percent at 693 steps, at 99 percent at 69 and at 95 percent at 14, which is the same idea as a horizon expressed in steps instead of hours",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: How many steps before success drops under 50 percent. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): at 99.9 percent per step the chain falls under 50 percent at 693 steps, at 99 percent at 69 and at 95 percent at 14, which is the same idea as a horizon expressed in steps instead of hours"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 4. Genuinely computing: how many steps before success drops under 50 percent ---\nper-step 0.999: first step count with chain success <= 0.5 is 693\nper-step 0.99: first step count with chain success <= 0.5 is 69\nper-step 0.95: first step count with chain success <= 0.5 is 14"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 5: A doubling-time projection of the horizon",
    "headingKn": "ಪ್ರಯೋಗ 5: A doubling-time projection of the horizon",
    "bodyEn": "What it ran: A doubling-time projection of the horizon. What the lab concluded: that figure follows from log2(40) times 7 and shows how sensitive a forecast is to the assumed doubling time, since a different assumed doubling time gives a very different answer",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A doubling-time projection of the horizon. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): that figure follows from log2(40) times 7 and shows how sensitive a forecast is to the assumed doubling time, since a different assumed doubling time gives a very different answer"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 5. Genuinely computing: a doubling-time projection of the horizon ---\nassumed doubling every 7 months, starting from a 4 hour horizon (an assumption, not a forecast):\n  month  0: horizon    4.0 h\n  month  7: horizon    8.0 h\n  month 14: horizon   16.0 h\n  month 21: horizon   32.0 h\n  month 28: horizon   64.0 h\nthe projection is just exponential growth applied to an assumed starting value and doubling time; the lesson's own 14 to 28 to 56 hour example is treated as cited arithmetic and the doubling time here is invented\nmonths needed to go from 4 h to 160 h at one doubling per 7 months: 37.3"
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
    "headingEn": "Genuinely Found: Success Against Length",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಉದ್ದದ ವಿರುದ್ಧ ಯಶಸ್ಸು",
    "bodyEn": "Section 1: with a 4 hour horizon the model gave 0.941 at 15 minutes, 0.800 at 1 hour, 0.667 at 2 hours, 0.500 at 4 hours, 0.333 at 8, 0.200 at 16 and 0.111 at 32 hours. Section 2: at 1, 4 and 16 hours steepness 0.5 gave 0.667, 0.500, 0.333, steepness 1.0 gave 0.800, 0.500, 0.200 and steepness 2.0 gave 0.941, 0.500, 0.059.",
    "bodyKn": "ವಿಭಾಗ 1: 4 ಗಂಟೆ horizon ನೊಂದಿಗೆ ಮಾದರಿ 15 ನಿಮಿಷಕ್ಕೆ 0.941, 1 ಗಂಟೆಗೆ 0.800, 2 ಗಂಟೆಗೆ 0.667, 4 ಗಂಟೆಗೆ 0.500, 8 ಕ್ಕೆ 0.333, 16 ಕ್ಕೆ 0.200 ಮತ್ತು 32 ಗಂಟೆಗೆ 0.111 ನೀಡಿತು. ವಿಭಾಗ 2: 1, 4 ಮತ್ತು 16 ಗಂಟೆಗೆ ಏರಿಕೆ 0.5 ರಿಂದ 0.667, 0.500, 0.333, ಏರಿಕೆ 1.0 ರಿಂದ 0.800, 0.500, 0.200 ಮತ್ತು ಏರಿಕೆ 2.0 ರಿಂದ 0.941, 0.500, 0.059."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Compounding and Steps to Failure",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಸಂಯೋಜನೆ ಮತ್ತು ವೈಫಲ್ಯದವರೆಗಿನ ಹಂತಗಳು",
    "bodyEn": "Section 3: at 0.99 per step the chain success was 0.9044 over 10 steps, 0.6050 over 50 and 0.3660 over 100; at 0.95 it was 0.5987, 0.0769 and 0.0059. The seeded Monte Carlo gave 0.3624 against the formula 0.3660. Section 4: the chain first fell to 0.5 or below at 693 steps for 0.999, 69 for 0.99 and 14 for 0.95. Section 5: with an assumed 7 month doubling the horizon went 4, 8, 16, 32 and 64 hours, and reaching 160 hours took 37.3 months.",
    "bodyKn": "ವಿಭಾಗ 3: ಪ್ರತಿ ಹಂತಕ್ಕೆ 0.99 ರಲ್ಲಿ ಸರಪಳಿ ಯಶಸ್ಸು 10 ಹಂತಗಳಲ್ಲಿ 0.9044, 50 ರಲ್ಲಿ 0.6050 ಮತ್ತು 100 ರಲ್ಲಿ 0.3660; 0.95 ರಲ್ಲಿ ಅದು 0.5987, 0.0769 ಮತ್ತು 0.0059. seeded Monte Carlo ಸೂತ್ರ 0.3660 ವಿರುದ್ಧ 0.3624 ನೀಡಿತು. ವಿಭಾಗ 4: ಸರಪಳಿ 0.5 ಅಥವಾ ಕಡಿಮೆಗೆ ಮೊದಲು ಇಳಿದದ್ದು 0.999 ಕ್ಕೆ 693 ಹಂತಗಳಲ್ಲಿ, 0.99 ಕ್ಕೆ 69 ಮತ್ತು 0.95 ಕ್ಕೆ 14. ವಿಭಾಗ 5: ಕಲ್ಪಿತ 7 ತಿಂಗಳ doubling ನೊಂದಿಗೆ horizon 4, 8, 16, 32 ಮತ್ತು 64 ಗಂಟೆ ಆಯಿತು, ಮತ್ತು 160 ಗಂಟೆ ತಲುಪಲು 37.3 ತಿಂಗಳು ಬೇಕಾಯಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A model that is excellent at short tasks can still fail most long ones, and a single headline score hides that, so you need to know both the horizon and how steeply success falls.",
    "bodyKn": "ಸಣ್ಣ ಕಾರ್ಯಗಳಲ್ಲಿ ಅತ್ಯುತ್ತಮ ಮಾದರಿ ಹೆಚ್ಚಿನ ದೀರ್ಘ ಕಾರ್ಯಗಳಲ್ಲಿ ವಿಫಲವಾಗಬಹುದು, ಮತ್ತು ಒಂದೇ ಪ್ರಮುಖ ಅಂಕ ಅದನ್ನು ಮರೆಮಾಡುತ್ತದೆ, ಆದ್ದರಿಂದ horizon ಮತ್ತು ಯಶಸ್ಸು ಎಷ್ಟು ಕಡಿದಾಗಿ ಇಳಿಯುತ್ತದೆ ಎರಡೂ ತಿಳಿಯಬೇಕು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"a 99 percent reliable step is reliable enough.\" Over 100 steps it finished only 36.6 percent of the time in the formula.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"99 ಶೇಕಡಾ ವಿಶ್ವಾಸಾರ್ಹ ಹಂತ ಸಾಕಷ್ಟು ವಿಶ್ವಾಸಾರ್ಹ.\" 100 ಹಂತಗಳಲ್ಲಿ ಸೂತ್ರದಲ್ಲಿ ಅದು 36.6 ಶೇಕಡಾ ಸಮಯ ಮಾತ್ರ ಮುಗಿಯಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Horizon: the task length where success is 50 percent. Compounding: per-step success multiplied over steps. Monte Carlo: repeated random trials. Doubling time: how long a quantity takes to double.",
    "bodyKn": "Horizon: ಯಶಸ್ಸು 50 ಶೇಕಡಾ ಇರುವ ಕಾರ್ಯದ ಉದ್ದ. Compounding: ಹಂತಗಳ ಮೇಲೆ ಗುಣಿಸಿದ ಹಂತ-ಹಂತದ ಯಶಸ್ಸು. Monte Carlo: ಪುನರಾವರ್ತಿತ ಯಾದೃಚ್ಛಿಕ ಪ್ರಯೋಗಗಳು. Doubling time: ಒಂದು ಪ್ರಮಾಣ ದ್ವಿಗುಣವಾಗಲು ಬೇಕಾದ ಸಮಯ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) The horizon gave 0.5 at its own length by construction. 2) Steepness changed the drop at 4 times the horizon. 3) 0.99 per step gave 0.366 over 100 steps. 4) The simulation matched the formula. 5) The projection depends on an assumed doubling time.",
    "bodyKn": "1) Horizon ತನ್ನ ಉದ್ದದಲ್ಲಿ ರಚನೆಯಿಂದಲೇ 0.5 ನೀಡಿತು. 2) ಏರಿಕೆ horizon ನ 4 ಪಟ್ಟಿನಲ್ಲಿ ಇಳಿಕೆ ಬದಲಿಸಿತು. 3) ಪ್ರತಿ ಹಂತಕ್ಕೆ 0.99 100 ಹಂತಗಳಲ್ಲಿ 0.366 ನೀಡಿತು. 4) ಸಿಮ್ಯುಲೇಶನ್ ಸೂತ್ರಕ್ಕೆ ಹೊಂದಿತು. 5) ಪ್ರಕ್ಷೇಪಣೆ ಕಲ್ಪಿತ doubling time ಮೇಲೆ ಅವಲಂಬಿತ."
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
    "bodyEn": "1) Open a terminal in pneuronics-backend/lesson-defs/labs. 2) Run: python -B lh_1.py (in Git Bash on Windows: PYTHONIOENCODING=utf-8 python -B lh_1.py). 3) Compare each section with the walkthrough above. The -B flag stops Python from writing __pycache__ folders.",
    "bodyKn": "1) pneuronics-backend/lesson-defs/labs ನಲ್ಲಿ ಟರ್ಮಿನಲ್ ತೆರೆಯಿರಿ. 2) ಓಡಿಸಿ: python -B lh_1.py (Windows Git Bash ನಲ್ಲಿ: PYTHONIOENCODING=utf-8 python -B lh_1.py). 3) ಪ್ರತಿ ವಿಭಾಗವನ್ನು ಮೇಲಿನ ನಡೆದಾಟಕ್ಕೆ ಹೋಲಿಸಿ. -B ಧ್ವಜ Python __pycache__ ಫೋಲ್ಡರ್‌ಗಳನ್ನು ಬರೆಯುವುದನ್ನು ತಡೆಯುತ್ತದೆ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What does the horizon H mean in the lab model?",
      "qKn": "ಲ್ಯಾಬ್ ಮಾದರಿಯಲ್ಲಿ horizon H ಎಂದರೇನು?",
      "opts": [
       "The task length where success is 50 percent",
       "The longest task ever solved",
       "The 99 percent length",
       "The model size"
      ],
      "optsKn": [
       "ಯಶಸ್ಸು 50 ಶೇಕಡಾ ಇರುವ ಕಾರ್ಯದ ಉದ್ದ",
       "ಇದುವರೆಗೆ ಪರಿಹರಿಸಿದ ಅತಿ ಉದ್ದದ ಕಾರ್ಯ",
       "99 ಶೇಕಡಾ ಉದ್ದ",
       "ಮಾದರಿ ಗಾತ್ರ"
      ],
      "correct": 0
     },
     {
      "q": "What was the chain success at 0.99 per step over 100 steps?",
      "qKn": "ಪ್ರತಿ ಹಂತಕ್ಕೆ 0.99 ರಲ್ಲಿ 100 ಹಂತಗಳಲ್ಲಿ ಸರಪಳಿ ಯಶಸ್ಸು ಎಷ್ಟು?",
      "opts": [
       "0.3660",
       "0.9044",
       "0.5987",
       "0.0059"
      ],
      "optsKn": [
       "0.3660",
       "0.9044",
       "0.5987",
       "0.0059"
      ],
      "correct": 0
     },
     {
      "q": "At 0.99 per step, after how many steps did chain success first reach 0.5 or below?",
      "qKn": "ಪ್ರತಿ ಹಂತಕ್ಕೆ 0.99 ರಲ್ಲಿ ಎಷ್ಟು ಹಂತಗಳ ನಂತರ ಸರಪಳಿ ಯಶಸ್ಸು ಮೊದಲು 0.5 ಅಥವಾ ಕಡಿಮೆ ತಲುಪಿತು?",
      "opts": [
       "69",
       "14",
       "693",
       "100"
      ],
      "optsKn": [
       "69",
       "14",
       "693",
       "100"
      ],
      "correct": 0
     },
     {
      "q": "What did the Monte Carlo check show?",
      "qKn": "Monte Carlo ಪರಿಶೀಲನೆ ಏನು ತೋರಿಸಿತು?",
      "opts": [
       "0.3624 simulated against 0.3660 from the formula",
       "The formula was badly wrong",
       "The simulation always gives 1.0",
       "The agent is reliable"
      ],
      "optsKn": [
       "ಸಿಮ್ಯುಲೇಶನ್ 0.3624 ಮತ್ತು ಸೂತ್ರ 0.3660",
       "ಸೂತ್ರ ತುಂಬಾ ತಪ್ಪಾಗಿತ್ತು",
       "ಸಿಮ್ಯುಲೇಶನ್ ಯಾವಾಗಲೂ 1.0 ನೀಡುತ್ತದೆ",
       "agent ವಿಶ್ವಾಸಾರ್ಹ"
      ],
      "correct": 0
     },
     {
      "q": "Why is the 160 hour projection weak evidence?",
      "qKn": "160 ಗಂಟೆ ಪ್ರಕ್ಷೇಪಣೆ ದುರ್ಬಲ ಸಾಕ್ಷ್ಯ ಏಕೆ?",
      "opts": [
       "The doubling time was an assumption",
       "The lab measured a real model",
       "Logarithms are unreliable",
       "It used too many seeds"
      ],
      "optsKn": [
       "doubling time ಒಂದು ಊಹೆ",
       "ಲ್ಯಾಬ್ ನಿಜ ಮಾದರಿ ಅಳೆಯಿತು",
       "ಲಾಗರಿದಮ್ ವಿಶ್ವಾಸಾರ್ಹವಲ್ಲ",
       "ಅದು ತುಂಬಾ seeds ಬಳಸಿತು"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
