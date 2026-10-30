module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6166020ed05b321547",
 "order": 2,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Web and Desktop Agent Benchmarks: WebArena and OSWorld (Part 3 of 3) — Gold Trajectories and Efficiency",
 "titleKn": "Web ಮತ್ತು Desktop Agent Benchmarks: WebArena ಮತ್ತು OSWorld (ಭಾಗ 3 / 3) — Gold Trajectories ಮತ್ತು ದಕ್ಷತೆ",
 "desc": "Compare agents by success and by trajectory ratio against a gold path, then test where the ratio misleads: the choice of gold path, early quitting, step budgets and different causes of extra steps.",
 "descKn": "Agents ಅನ್ನು ಯಶಸ್ಸು ಮತ್ತು gold ಮಾರ್ಗದ ವಿರುದ್ಧ trajectory ratio ಮೂಲಕ ಹೋಲಿಸಿ, ನಂತರ ratio ಎಲ್ಲಿ ದಾರಿತಪ್ಪಿಸುತ್ತದೆ ಎಂದು ಪರೀಕ್ಷಿಸಿ: gold ಮಾರ್ಗದ ಆಯ್ಕೆ, ಬೇಗ ಬಿಡುವುದು, ಹಂತ ಮಿತಿಗಳು ಮತ್ತು ಹೆಚ್ಚುವರಿ ಹಂತಗಳ ಬೇರೆ ಕಾರಣಗಳು.",
 "objectives": [
  "Define a gold trajectory and a trajectory ratio.",
  "Show how the gold path changes the ratio.",
  "Explain why quitting early flatters the ratio.",
  "Relate step budgets to click noise.",
  "Report success and efficiency together."
 ],
 "objectivesKn": [
  "Gold trajectory ಮತ್ತು trajectory ratio ವ್ಯಾಖ್ಯಾನಿಸಿ.",
  "Gold ಮಾರ್ಗ ratio ಅನ್ನು ಹೇಗೆ ಬದಲಿಸುತ್ತದೆ ಎಂದು ತೋರಿಸಿ.",
  "ಬೇಗ ಬಿಡುವುದು ratio ಅನ್ನು ಏಕೆ ಹೊಗಳುತ್ತದೆ ಎಂದು ವಿವರಿಸಿ.",
  "ಹಂತ ಮಿತಿಗಳನ್ನು ಕ್ಲಿಕ್ ಶಬ್ದಕ್ಕೆ ಜೋಡಿಸಿ.",
  "ಯಶಸ್ಸು ಮತ್ತು ದಕ್ಷತೆಯನ್ನು ಒಟ್ಟಿಗೆ ವರದಿ ಮಾಡಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Web and Desktop Agent Benchmarks: WebArena and OSWorld (Part 3 of 3)",
    "textKn": "Web ಮತ್ತು Desktop Agent Benchmarks: WebArena ಮತ್ತು OSWorld (ಭಾಗ 3 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 3 of 3: trajectory efficiency, gold paths and a combined report. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind WebArena, OSWorld and OSWorld-Human, not the real software, and the agents are scripted or noise-driven stand-ins, so no real LLM behaviour is measured. The pasted Part 3 describes OSWorld-Human-style gold trajectories; this lab applies the idea to the Part 2 mock desktop. The four agent profiles use assumed behaviour and click noise, not measured agents, and no published OSWorld or OSWorld-Human number is used. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 3ನೆಯದು: trajectory ದಕ್ಷತೆ, gold ಮಾರ್ಗಗಳು ಮತ್ತು ಸಂಯೋಜಿತ ವರದಿ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು WebArena, OSWorld ಮತ್ತು OSWorld-Human ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು agents ಸ್ಕ್ರಿಪ್ಟ್ ಅಥವಾ ಶಬ್ದ-ಚಾಲಿತ ಬದಲಿಗಳು, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಅಂಟಿಸಿದ ಭಾಗ 3 OSWorld-Human-ಶೈಲಿಯ gold trajectories ವಿವರಿಸುತ್ತದೆ; ಈ ಲ್ಯಾಬ್ ಆ ಕಲ್ಪನೆಯನ್ನು ಭಾಗ 2 ರ ಮಾದರಿ desktop ಗೆ ಅನ್ವಯಿಸುತ್ತದೆ. ನಾಲ್ಕು agent ಪ್ರೊಫೈಲ್‌ಗಳು ಊಹಿಸಿದ ವರ್ತನೆ ಮತ್ತು ಕ್ಲಿಕ್ ಶಬ್ದ ಬಳಸುತ್ತವೆ, ಅಳೆದ agents ಅಲ್ಲ, ಮತ್ತು ಯಾವುದೇ ಪ್ರಕಟಿತ OSWorld ಅಥವಾ OSWorld-Human ಸಂಖ್ಯೆ ಬಳಸಿಲ್ಲ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Success Is Necessary but Not Sufficient",
    "textKn": "ಯಶಸ್ಸು ಅಗತ್ಯ ಆದರೆ ಸಾಕಾಗುವುದಿಲ್ಲ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Steps Against a Gold Trajectory",
    "headingKn": "Gold trajectory ವಿರುದ್ಧ ಹಂತಗಳು",
    "bodyEn": "Two agents can both set dark mode, one in 2 clicks and one in 5. A gold trajectory is a reference path, and the trajectory ratio is the agent's steps divided by the gold steps. Together with success rate it shows how much extra work an agent does. This lab tests where that ratio misleads: the choice of gold path, early quitting, step budgets and the causes of extra steps.",
    "bodyKn": "ಇಬ್ಬರು agents ಇಬ್ಬರೂ dark mode ಹೊಂದಿಸಬಹುದು, ಒಬ್ಬರು 2 ಕ್ಲಿಕ್‌ನಲ್ಲಿ ಮತ್ತು ಒಬ್ಬರು 5 ರಲ್ಲಿ. Gold trajectory ಉಲ್ಲೇಖ ಮಾರ್ಗ, ಮತ್ತು trajectory ratio ಎಂದರೆ agent ನ ಹಂತಗಳನ್ನು gold ಹಂತಗಳಿಂದ ಭಾಗಿಸಿದ್ದು. ಯಶಸ್ಸಿನ ದರದೊಂದಿಗೆ ಅದು agent ಎಷ್ಟು ಹೆಚ್ಚುವರಿ ಕೆಲಸ ಮಾಡುತ್ತದೆ ಎಂದು ತೋರಿಸುತ್ತದೆ. ಆ ratio ಎಲ್ಲಿ ದಾರಿತಪ್ಪಿಸುತ್ತದೆ ಎಂದು ಈ ಲ್ಯಾಬ್ ಪರೀಕ್ಷಿಸುತ್ತದೆ: gold ಮಾರ್ಗದ ಆಯ್ಕೆ, ಬೇಗ ಬಿಡುವುದು, ಹಂತ ಮಿತಿಗಳು ಮತ್ತು ಹೆಚ್ಚುವರಿ ಹಂತಗಳ ಕಾರಣಗಳು."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Success, Steps, Gold Path, Ratio",
    "headingKn": "ಯಶಸ್ಸು, ಹಂತಗಳು, Gold ಮಾರ್ಗ, Ratio",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">Success, steps and a gold trajectory</text><rect x=\"10\" y=\"40\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"55\" fill=\"#e2e8f0\" text-anchor=\"middle\">success</text><text x=\"50\" y=\"67\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">did it work</text><rect x=\"110\" y=\"40\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"55\" fill=\"#e2e8f0\" text-anchor=\"middle\">steps</text><text x=\"150\" y=\"67\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">how many</text><rect x=\"210\" y=\"40\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"55\" fill=\"#e2e8f0\" text-anchor=\"middle\">gold path</text><text x=\"250\" y=\"67\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">the reference</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">ratio</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">steps / gold steps</text><path d=\"M150,74 V110 M250,74 L190,110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">the ratio depends on which gold path is chosen</text></svg>",
    "captionEn": "Efficiency is reported next to success, never instead of it.",
    "captionKn": "ದಕ್ಷತೆಯನ್ನು ಯಶಸ್ಸಿನ ಪಕ್ಕ ವರದಿ ಮಾಡಲಾಗುತ್ತದೆ, ಅದರ ಬದಲಿಗೆ ಅಲ್ಲ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Four profiles in the lab",
    "headingKn": "ಲ್ಯಾಬ್‌ನ ನಾಲ್ಕು ಪ್ರೊಫೈಲ್‌ಗಳು",
    "headers": [
     "Profile",
     "Behaviour (assumed)",
     "Expected cost"
    ],
    "rows": [
     [
      "expert",
      "follows the 2-click path",
      "none"
     ],
     [
      "detour",
      "follows a 5-click path",
      "extra steps, always succeeds"
     ],
     [
      "grounding-weak",
      "noisy clicks, repeats misses",
      "extra steps and some failures"
     ],
     [
      "knowledge-weak",
      "takes a wrong branch half the time",
      "extra steps, recovers"
     ]
    ]
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Building the Efficiency Harness",
    "textKn": "ದಕ್ಷತೆ harness ನಿರ್ಮಿಸುವುದು",
    "level": "H2"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "web_3.py",
    "headingEn": "run_clicks, trajectory_ratio and profile_run",
    "headingKn": "run_clicks, trajectory_ratio ಮತ್ತು profile_run",
    "descEn": "run_clicks executes a plan on the Part 2 desktop, optionally with Gaussian click noise, repeating a step until its element is hit or the budget ends; a click that lands on a different element changes the screen and ends the plan. trajectory_ratio divides steps by gold steps. profile_run produces (success, steps) for each assumed profile.",
    "descKn": "run_clicks ಭಾಗ 2 desktop ಮೇಲೆ ಯೋಜನೆ ಕಾರ್ಯಗತಗೊಳಿಸುತ್ತದೆ, ಐಚ್ಛಿಕವಾಗಿ Gaussian ಕ್ಲಿಕ್ ಶಬ್ದದೊಂದಿಗೆ, ಅಂಶ ತಾಗುವವರೆಗೆ ಅಥವಾ ಮಿತಿ ಮುಗಿಯುವವರೆಗೆ ಹಂತ ಪುನರಾವರ್ತಿಸುತ್ತದೆ; ಬೇರೆ ಅಂಶಕ್ಕೆ ತಾಗುವ ಕ್ಲಿಕ್ ಪರದೆ ಬದಲಿಸಿ ಯೋಜನೆ ಮುಗಿಸುತ್ತದೆ. trajectory_ratio ಹಂತಗಳನ್ನು gold ಹಂತಗಳಿಂದ ಭಾಗಿಸುತ್ತದೆ. profile_run ಪ್ರತಿ ಊಹಿಸಿದ ಪ್ರೊಫೈಲ್‌ಗೆ (ಯಶಸ್ಸು, ಹಂತಗಳು) ನೀಡುತ್ತದೆ.",
    "code": "GOLD_A = [(\"settings\", \"Appearance\"), (\"appearance\", \"Dark\")]\nGOLD_B = [(\"settings\", \"Notifications\"), (\"notifications\", \"Back\"), (\"settings\", \"Appearance\"), (\"appearance\", \"Light\"), (\"appearance\", \"Dark\")]\n\n\ndef run_clicks(plan, noise=0.0, rng=None, max_steps=12):\n    \"\"\"plan: list of (screen_expected, element). Re-plans from the real screen; a noisy click can miss and the step is repeated.\"\"\"\n    env = DesktopEnvironment()\n    steps, queue = 0, list(plan)\n    while queue and steps < max_steps:\n        screen, name = queue[0]\n        if env.screen != screen:\n            break\n        x, y = center_of(screen, name)\n        if noise and rng:\n            x, y = round(rng.gauss(x, noise)), round(rng.gauss(y, noise))\n        before = env.screen, env.theme\n        env.click(ClickAction(x, y))\n        steps += 1\n        hit = env.log[-1][3]\n        if hit == name:\n            queue.pop(0)\n    return env, steps\n\n\ndef trajectory_ratio(steps, gold_steps):\n    return steps / gold_steps\n\n\ndef profile_run(profile, rng):\n    \"\"\"Returns (success, steps). Probabilities are ASSUMED per profile.\"\"\"\n    if profile == \"expert\":\n        env, steps = run_clicks(GOLD_A)\n    elif profile == \"detour\":\n        env, steps = run_clicks(GOLD_B)\n    elif profile == \"grounding-weak\":\n        env, steps = run_clicks(GOLD_A, noise=14, rng=rng)\n    elif profile == \"knowledge-weak\":\n        wrong = rng.random() < 0.5\n        env, steps = run_clicks(([(\"settings\", \"Notifications\"), (\"notifications\", \"Back\")] if wrong else []) + GOLD_A)\n    else:\n        raise ValueError(profile)\n    return env.dark_mode(), steps"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "web_3.py",
    "headingEn": "main(): seven experiments",
    "headingKn": "main(): ಏಳು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() compares a direct and a detour trajectory, swaps the gold path, scores an early quitter, runs 2,000 runs per profile, varies the step budget against click noise, prints one noisy trajectory by click and ends with a combined table.",
    "descKn": "main() ನೇರ ಮತ್ತು ಬಳಸುದಾರಿ trajectory ಹೋಲಿಸುತ್ತದೆ, gold ಮಾರ್ಗ ಬದಲಿಸುತ್ತದೆ, ಬೇಗ ಬಿಡುವವನಿಗೆ ಅಂಕ ನೀಡುತ್ತದೆ, ಪ್ರತಿ ಪ್ರೊಫೈಲ್‌ಗೆ 2,000 ಓಟ ಚಲಾಯಿಸುತ್ತದೆ, ಕ್ಲಿಕ್ ಶಬ್ದದ ವಿರುದ್ಧ ಹಂತ ಮಿತಿ ಬದಲಿಸುತ್ತದೆ, ಒಂದು ಗದ್ದಲದ trajectory ಕ್ಲಿಕ್ ಪ್ರಕಾರ ಮುದ್ರಿಸುತ್ತದೆ, ಮತ್ತು ಸಂಯೋಜಿತ ಕೋಷ್ಟಕದೊಂದಿಗೆ ಮುಗಿಯುತ್ತದೆ.",
    "code": "def section(t):\n    print(f\"\\n--- {t} ---\")\n\n\ndef main():\n    section(\"1. Success is not the whole story: two correct trajectories\")\n    for name, gold in ((\"direct\", GOLD_A), (\"detour\", GOLD_B)):\n        env, steps = run_clicks(gold)\n        print(f\"{name:7} success={env.dark_mode()} steps={steps}\")\n    print(\"both reach dark mode; the second takes 5 steps for a 2-step job (ratio 2.5)\")\n\n    section(\"2. Genuinely checking: the ratio depends on which gold path is chosen\")\n    for label, gold_steps in ((\"gold = 2-click path\", 2), (\"gold = 5-click path\", 5)):\n        print(f\"{label}: expert ratio {trajectory_ratio(2, gold_steps):.2f}, detour ratio {trajectory_ratio(5, gold_steps):.2f}\")\n    print(\"if a benchmark picks a long reference path, a wasteful agent can score a ratio of 1.0; the gold trajectory is part of the metric\")\n\n    section(\"3. Genuinely checking: the ratio on failed runs\")\n    env, steps = run_clicks([(\"settings\", \"Appearance\")])\n    print(\"agent stops after one step without setting dark mode: success\", env.dark_mode(), \"| ratio\", trajectory_ratio(steps, 2), \"(looks efficient: 0.50)\")\n    print(\"an agent that quits early has the best-looking ratio, so efficiency is only reported on successful runs, and success rate must sit beside it\")\n\n    section(\"4. Genuinely measuring: four profiles (assumed behaviour, seed 12, 2000 runs each)\")\n    rng = random.Random(12)\n    print(f\"{'profile':16} {'success':>8} {'mean steps (successes)':>24} {'mean ratio vs gold=2':>22}\")\n    summary = {}\n    for profile in (\"expert\", \"detour\", \"grounding-weak\", \"knowledge-weak\"):\n        res = [profile_run(profile, rng) for _ in range(2000)]\n        ok = [s for good, s in res if good]\n        summary[profile] = (len(ok) / len(res), statistics.mean(ok) if ok else float(\"nan\"))\n        print(f\"{profile:16} {len(ok) / len(res):>8.1%} {summary[profile][1]:>24.2f} {summary[profile][1] / 2:>22.2f}\")\n    print(\"grounding-weak lost about 2 percent of runs and used 2.31 steps when it succeeded; knowledge-weak lost none but used 2.98 on average because half its runs took a 2-step detour; the two inefficiencies have different causes and different costs\")\n\n    section(\"5. Genuinely measuring: step budget versus success for a click-noisy agent\")\n    print(f\"{'noise sigma':>12} \" + \"\".join(f\"{'budget=' + str(b):>11}\" for b in (2, 3, 4, 6, 12)))\n    for sigma in (6, 14, 25):\n        rng = random.Random(21)\n        row = \"\"\n        for budget in (2, 3, 4, 6, 12):\n            ok = 0\n            for _ in range(3000):\n                env, _ = run_clicks(GOLD_A, noise=sigma, rng=rng, max_steps=budget)\n                ok += env.dark_mode()\n            row += f\"{ok / 3000:>11.1%}\"\n        print(f\"{sigma:>12} {row}\")\n    print(\"a tight budget turns click noise into failure; a loose budget turns it into extra steps. Success stops at 97.8 to 98.1 percent (sigma 14) and 83.4 percent (sigma 25) even with 12 steps, because a noisy click can land on a different element and navigate away, which this scripted agent never recovers from; the small dip from 98.1 to 97.8 is sampling noise, each cell used its own random stream\")\n\n    section(\"6. Genuinely checking: wasted steps by cause for one noisy trajectory\")\n    rng = random.Random(5)\n    env, steps = run_clicks(GOLD_A, noise=25, rng=rng)\n    for screen, x, y, hit in env.log:\n        print(f\"screen={screen:10} click=({x:>4},{y:>4}) -> {hit}\")\n    useful = sum(1 for _, _, _, h in env.log if h in (\"Appearance\", \"Dark\"))\n    print(f\"{steps} steps, {useful} useful, {steps - useful} spent on misses; success {env.dark_mode()}\")\n\n    section(\"7. Combined report\")\n    print(f\"{'profile':16} {'success':>8} {'mean steps (successes)':>24}\")\n    for profile, (succ, mean_steps) in summary.items():\n        print(f\"{profile:16} {succ:>8.1%} {mean_steps:>24.2f}\")\n    print(\"a report with only the success column would rank 'detour' with 'expert'; adding steps separates them\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Success is not the whole story: two correct trajectories ---\ndirect  success=True steps=2\ndetour  success=True steps=5\nboth reach dark mode; the second takes 5 steps for a 2-step job (ratio 2.5)\n\n--- 2. Genuinely checking: the ratio depends on which gold path is chosen ---\ngold = 2-click path: expert ratio 1.00, detour ratio 2.50\ngold = 5-click path: expert ratio 0.40, detour ratio 1.00\nif a benchmark picks a long reference path, a wasteful agent can score a ratio of 1.0; the gold trajectory is part of the metric\n\n--- 3. Genuinely checking: the ratio on failed runs ---\nagent stops after one step without setting dark mode: success False | ratio 0.5 (looks efficient: 0.50)\nan agent that quits early has the best-looking ratio, so efficiency is only reported on successful runs, and success rate must sit beside it\n\n--- 4. Genuinely measuring: four profiles (assumed behaviour, seed 12, 2000 runs each) ---\nprofile           success   mean steps (successes)   mean ratio vs gold=2\nexpert             100.0%                     2.00                   1.00\ndetour             100.0%                     5.00                   2.50\ngrounding-weak      97.9%                     2.31                   1.16\nknowledge-weak     100.0%                     2.98                   1.49\ngrounding-weak lost about 2 percent of runs and used 2.31 steps when it succeeded; knowledge-weak lost none but used 2.98 on average because half its runs took a 2-step detour; the two inefficiencies have different causes and different costs\n\n--- 5. Genuinely measuring: step budget versus success for a click-noisy agent ---\n noise sigma    budget=2   budget=3   budget=4   budget=6  budget=12\n           6       99.9%     100.0%     100.0%     100.0%     100.0%\n          14       73.8%      92.7%      96.5%      98.1%      97.8%\n          25       34.9%      58.2%      70.6%      80.8%      83.4%\na tight budget turns click noise into failure; a loose budget turns it into extra steps. Success stops at 97.8 to 98.1 percent (sigma 14) and 83.4 percent (sigma 25) even with 12 steps, because a noisy click can land on a different element and navigate away, which this scripted agent never recovers from; the small dip from 98.1 to 97.8 is sampling noise, each cell used its own random stream\n\n--- 6. Genuinely checking: wasted steps by cause for one noisy trajectory ---\nscreen=settings   click=(  71,  31) -> None\nscreen=settings   click=( 117,   3) -> None\nscreen=settings   click=(  96,   4) -> None\nscreen=settings   click=( 128,  65) -> Appearance\nscreen=appearance click=( 294,  97) -> Dark\n5 steps, 2 useful, 3 spent on misses; success True\n\n--- 7. Combined report ---\nprofile           success   mean steps (successes)\nexpert             100.0%                     2.00\ndetour             100.0%                     5.00\ngrounding-weak      97.9%                     2.31\nknowledge-weak     100.0%                     2.98\na report with only the success column would rank 'detour' with 'expert'; adding steps separates them"
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
    "headingEn": "Genuinely Found: The Ratio Depends on the Gold Path and Rewards Quitting",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Ratio gold ಮಾರ್ಗದ ಮೇಲೆ ಅವಲಂಬಿತ ಮತ್ತು ಬಿಟ್ಟುಬಿಡುವುದಕ್ಕೆ ಬಹುಮಾನ ನೀಡುತ್ತದೆ",
    "bodyEn": "Section 2: against the 2-click gold path the expert scored a ratio of 1.00 and the 5-click detour 2.50; against the 5-click path the expert scored 0.40 and the detour 1.00, so a wasteful agent can look perfect if the reference path is long. Section 3: an agent that stopped after one click without setting dark mode had a ratio of 0.50, the best-looking value, so efficiency has to be reported only for successful runs and beside the success rate.",
    "bodyKn": "ವಿಭಾಗ 2: 2-ಕ್ಲಿಕ್ gold ಮಾರ್ಗದ ವಿರುದ್ಧ expert 1.00 ಮತ್ತು 5-ಕ್ಲಿಕ್ ಬಳಸುದಾರಿ 2.50 ratio ಪಡೆದರು; 5-ಕ್ಲಿಕ್ ಮಾರ್ಗದ ವಿರುದ್ಧ expert 0.40 ಮತ್ತು ಬಳಸುದಾರಿ 1.00 ಪಡೆದರು, ಆದ್ದರಿಂದ ಉಲ್ಲೇಖ ಮಾರ್ಗ ಉದ್ದವಿದ್ದರೆ ವ್ಯರ್ಥ agent ಪರಿಪೂರ್ಣವಾಗಿ ಕಾಣಬಹುದು. ವಿಭಾಗ 3: dark mode ಹೊಂದಿಸದೆ ಒಂದು ಕ್ಲಿಕ್ ನಂತರ ನಿಂತ agent ಗೆ 0.50 ratio ಇತ್ತು, ಅತ್ಯುತ್ತಮ ಕಾಣುವ ಮೌಲ್ಯ, ಆದ್ದರಿಂದ ದಕ್ಷತೆಯನ್ನು ಯಶಸ್ವಿ ಓಟಗಳಿಗೆ ಮಾತ್ರ ಮತ್ತು ಯಶಸ್ಸಿನ ದರದ ಪಕ್ಕ ವರದಿ ಮಾಡಬೇಕು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Different Weaknesses Cost Different Things",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಬೇರೆ ಬೇರೆ ದೌರ್ಬಲ್ಯಗಳು ಬೇರೆ ಬೇರೆ ವೆಚ್ಚ ಮಾಡುತ್ತವೆ",
    "bodyEn": "Section 4 (assumed behaviour, seed 12, 2,000 runs each): expert 100.0 percent at 2.00 steps; detour 100.0 percent at 5.00; grounding-weak 97.9 percent at 2.31 steps; knowledge-weak 100.0 percent at 2.98 steps. The first lost about 2 percent of runs, the second lost none but half its runs took a 2-step detour, so the two weaknesses show up differently. Section 5: with click noise sigma 25 the success rate was 34.9, 58.2, 70.6, 80.8 and 83.4 percent at budgets 2, 3, 4, 6 and 12. Success stops near 83 percent even with a large budget, because a noisy click can land on another element and navigate away, which this scripted agent never recovers from. At sigma 14, the dip from 98.1 to 97.8 between budgets 6 and 12 is sampling noise. Section 6: one noisy run spent 3 of its 5 clicks on misses.",
    "bodyKn": "ವಿಭಾಗ 4 (ಊಹಿಸಿದ ವರ್ತನೆ, seed 12, ತಲಾ 2,000 ಓಟಗಳು): expert 100.0 ಶೇಕಡಾ 2.00 ಹಂತಗಳಲ್ಲಿ; ಬಳಸುದಾರಿ 100.0 ಶೇಕಡಾ 5.00 ರಲ್ಲಿ; grounding-weak 97.9 ಶೇಕಡಾ 2.31 ಹಂತಗಳಲ್ಲಿ; knowledge-weak 100.0 ಶೇಕಡಾ 2.98 ಹಂತಗಳಲ್ಲಿ. ಮೊದಲನೆಯದು ಸುಮಾರು 2 ಶೇಕಡಾ ಓಟ ಕಳೆದುಕೊಂಡಿತು, ಎರಡನೆಯದು ಯಾವುದನ್ನೂ ಕಳೆದುಕೊಳ್ಳಲಿಲ್ಲ ಆದರೆ ಅದರ ಅರ್ಧ ಓಟಗಳು 2-ಹಂತ ಬಳಸುದಾರಿ ತೆಗೆದುಕೊಂಡವು, ಆದ್ದರಿಂದ ಎರಡು ದೌರ್ಬಲ್ಯಗಳು ಬೇರೆ ರೀತಿ ಕಾಣುತ್ತವೆ. ವಿಭಾಗ 5: ಕ್ಲಿಕ್ ಶಬ್ದ sigma 25 ಜೊತೆ ಮಿತಿ 2, 3, 4, 6 ಮತ್ತು 12 ರಲ್ಲಿ ಯಶಸ್ಸಿನ ದರ 34.9, 58.2, 70.6, 80.8 ಮತ್ತು 83.4 ಶೇಕಡಾ. ದೊಡ್ಡ ಮಿತಿಯಲ್ಲೂ ಯಶಸ್ಸು ಸುಮಾರು 83 ಶೇಕಡಾದಲ್ಲಿ ನಿಲ್ಲುತ್ತದೆ, ಏಕೆಂದರೆ ಗದ್ದಲದ ಕ್ಲಿಕ್ ಬೇರೆ ಅಂಶಕ್ಕೆ ತಾಗಿ ಸಂಚರಿಸಿ ಹೊರಹೋಗಬಹುದು, ಈ ಸ್ಕ್ರಿಪ್ಟ್ agent ಎಂದೂ ಚೇತರಿಸುವುದಿಲ್ಲ. sigma 14 ನಲ್ಲಿ ಮಿತಿ 6 ಮತ್ತು 12 ನಡುವೆ 98.1 ರಿಂದ 97.8 ಇಳಿತ ಮಾದರಿ ಶಬ್ದ. ವಿಭಾಗ 6: ಒಂದು ಗದ್ದಲದ ಓಟ ತನ್ನ 5 ಕ್ಲಿಕ್‌ಗಳಲ್ಲಿ 3 ಅನ್ನು ತಪ್ಪುಗಳಿಗೆ ಖರ್ಚು ಮಾಡಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A web or desktop agent that always succeeds but takes five times the steps is slower, costlier and riskier, and the cause of extra steps points to different fixes. Efficiency metrics make that visible, as long as the reference path and the success rate are reported with them.",
    "bodyKn": "ಯಾವಾಗಲೂ ಯಶಸ್ವಿಯಾಗುವ ಆದರೆ ಐದು ಪಟ್ಟು ಹಂತ ತೆಗೆದುಕೊಳ್ಳುವ ವೆಬ್ ಅಥವಾ desktop agent ನಿಧಾನ, ದುಬಾರಿ ಮತ್ತು ಹೆಚ್ಚು ಅಪಾಯಕಾರಿ, ಮತ್ತು ಹೆಚ್ಚುವರಿ ಹಂತಗಳ ಕಾರಣ ಬೇರೆ ಬೇರೆ ಪರಿಹಾರಗಳತ್ತ ಬೊಟ್ಟು ಮಾಡುತ್ತದೆ. ಉಲ್ಲೇಖ ಮಾರ್ಗ ಮತ್ತು ಯಶಸ್ಸಿನ ದರ ಅವುಗಳೊಂದಿಗೆ ವರದಿಯಾದರೆ ದಕ್ಷತೆ ಮಾಪನಗಳು ಅದನ್ನು ಗೋಚರಿಸುತ್ತವೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"a lower trajectory ratio is always better.\" An agent that quit after one click scored 0.50, and a wasteful agent scored 1.00 against a long reference path.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಕಡಿಮೆ trajectory ratio ಯಾವಾಗಲೂ ಉತ್ತಮ.\" ಒಂದು ಕ್ಲಿಕ್ ನಂತರ ಬಿಟ್ಟ agent 0.50 ಪಡೆಯಿತು, ಮತ್ತು ವ್ಯರ್ಥ agent ಉದ್ದ ಉಲ್ಲೇಖ ಮಾರ್ಗದ ವಿರುದ್ಧ 1.00 ಪಡೆಯಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Gold trajectory: a reference path for a task. Trajectory ratio: agent steps divided by gold steps. Step budget: the maximum steps allowed. Wasted step: a step that did not advance the plan. Profile: an assumed agent behaviour used to exercise the metric.",
    "bodyKn": "Gold trajectory: ಕಾರ್ಯಕ್ಕೆ ಉಲ್ಲೇಖ ಮಾರ್ಗ. Trajectory ratio: agent ಹಂತಗಳನ್ನು gold ಹಂತಗಳಿಂದ ಭಾಗಿಸಿದ್ದು. Step budget: ಅನುಮತಿಸಿದ ಗರಿಷ್ಠ ಹಂತಗಳು. Wasted step: ಯೋಜನೆ ಮುನ್ನಡೆಸದ ಹಂತ. Profile: ಮಾಪನ ಪರೀಕ್ಷಿಸಲು ಬಳಸಿದ ಊಹಿಸಿದ agent ವರ್ತನೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) Both a 2-click and a 5-click path set dark mode. 2) The ratio changed from 2.50 to 1.00 depending on the gold path. 3) An early quitter scored 0.50. 4) Grounding-weak and knowledge-weak profiles lost different things (about 2 percent of runs versus extra steps). 5) At sigma 25 success plateaued near 83 percent whatever the budget. 6) Success and steps must be reported together.",
    "bodyKn": "1) 2-ಕ್ಲಿಕ್ ಮತ್ತು 5-ಕ್ಲಿಕ್ ಮಾರ್ಗ ಎರಡೂ dark mode ಹೊಂದಿಸಿದವು. 2) Gold ಮಾರ್ಗದ ಮೇಲೆ ಅವಲಂಬಿಸಿ ratio 2.50 ರಿಂದ 1.00 ಗೆ ಬದಲಾಯಿತು. 3) ಬೇಗ ಬಿಟ್ಟವನಿಗೆ 0.50. 4) Grounding-weak ಮತ್ತು knowledge-weak ಪ್ರೊಫೈಲ್‌ಗಳು ಬೇರೆ ಬೇರೆ ಕಳೆದುಕೊಂಡವು (ಸುಮಾರು 2 ಶೇಕಡಾ ಓಟ ಮತ್ತು ಹೆಚ್ಚುವರಿ ಹಂತಗಳು). 5) sigma 25 ನಲ್ಲಿ ಮಿತಿ ಏನೇ ಇದ್ದರೂ ಯಶಸ್ಸು ಸುಮಾರು 83 ಶೇಕಡಾದಲ್ಲಿ ನಿಂತಿತು. 6) ಯಶಸ್ಸು ಮತ್ತು ಹಂತಗಳನ್ನು ಒಟ್ಟಿಗೆ ವರದಿ ಮಾಡಬೇಕು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "How did the detour agent's ratio change when the gold path changed from 2 clicks to 5?",
      "qKn": "Gold ಮಾರ್ಗ 2 ಕ್ಲಿಕ್‌ನಿಂದ 5 ಕ್ಕೆ ಬದಲಾದಾಗ ಬಳಸುದಾರಿ agent ನ ratio ಹೇಗೆ ಬದಲಾಯಿತು?",
      "opts": [
       "2.50 to 1.00",
       "1.00 to 2.50",
       "It stayed 2.50",
       "0.50 to 2.50"
      ],
      "optsKn": [
       "2.50 ರಿಂದ 1.00",
       "1.00 ರಿಂದ 2.50",
       "2.50 ಆಗಿಯೇ ಉಳಿಯಿತು",
       "0.50 ರಿಂದ 2.50"
      ],
      "correct": 0
     },
     {
      "q": "Why did the early quitter get the best ratio?",
      "qKn": "ಬೇಗ ಬಿಟ್ಟವನಿಗೆ ಅತ್ಯುತ್ತಮ ratio ಏಕೆ ಸಿಕ್ಕಿತು?",
      "opts": [
       "It was efficient",
       "It used one step against two gold steps while failing the task",
       "It solved the task",
       "The gold path was wrong"
      ],
      "optsKn": [
       "ಅದು ದಕ್ಷವಾಗಿತ್ತು",
       "ಕಾರ್ಯ ವಿಫಲಗೊಳಿಸುತ್ತಾ ಎರಡು gold ಹಂತಗಳ ವಿರುದ್ಧ ಒಂದು ಹಂತ ಬಳಸಿತು",
       "ಅದು ಕಾರ್ಯ ಪರಿಹರಿಸಿತು",
       "Gold ಮಾರ್ಗ ತಪ್ಪಾಗಿತ್ತು"
      ],
      "correct": 1
     },
     {
      "q": "Why did success stop near 83 percent at sigma 25 even with 12 steps?",
      "qKn": "12 ಹಂತಗಳಿದ್ದರೂ sigma 25 ನಲ್ಲಿ ಯಶಸ್ಸು ಸುಮಾರು 83 ಶೇಕಡಾದಲ್ಲಿ ಏಕೆ ನಿಂತಿತು?",
      "opts": [
       "The budget was too small",
       "A noisy click could land on another element and navigate away, and the scripted agent never recovers",
       "The gold path was wrong",
       "Dark mode was disabled"
      ],
      "optsKn": [
       "ಮಿತಿ ತುಂಬಾ ಚಿಕ್ಕದಾಗಿತ್ತು",
       "ಗದ್ದಲದ ಕ್ಲಿಕ್ ಬೇರೆ ಅಂಶಕ್ಕೆ ತಾಗಿ ಸಂಚರಿಸಿ ಹೊರಹೋಗಬಹುದು, ಸ್ಕ್ರಿಪ್ಟ್ agent ಎಂದೂ ಚೇತರಿಸುವುದಿಲ್ಲ",
       "Gold ಮಾರ್ಗ ತಪ್ಪಾಗಿತ್ತು",
       "Dark mode ನಿಷ್ಕ್ರಿಯವಾಗಿತ್ತು"
      ],
      "correct": 1
     },
     {
      "q": "What status do the four profiles have?",
      "qKn": "ನಾಲ್ಕು ಪ್ರೊಫೈಲ್‌ಗಳ ಸ್ಥಿತಿ ಏನು?",
      "opts": [
       "Measured agents",
       "Assumed behaviours used to exercise the metric",
       "OSWorld-Human results",
       "Real users"
      ],
      "optsKn": [
       "ಅಳೆದ agents",
       "ಮಾಪನ ಪರೀಕ್ಷಿಸಲು ಬಳಸಿದ ಊಹಿಸಿದ ವರ್ತನೆಗಳು",
       "OSWorld-Human ಫಲಿತಾಂಶಗಳು",
       "ನಿಜ ಬಳಕೆದಾರರು"
      ],
      "correct": 1
     },
     {
      "q": "Why report steps and success together?",
      "qKn": "ಹಂತಗಳು ಮತ್ತು ಯಶಸ್ಸನ್ನು ಒಟ್ಟಿಗೆ ಏಕೆ ವರದಿ ಮಾಡಬೇಕು?",
      "opts": [
       "Success alone ranks detour with expert, and steps alone reward quitting",
       "It is a formatting rule",
       "To hide failures",
       "Steps are optional"
      ],
      "optsKn": [
       "ಯಶಸ್ಸು ಮಾತ್ರ ಬಳಸುದಾರಿಯನ್ನು expert ಜೊತೆ ಶ್ರೇಣೀಕರಿಸುತ್ತದೆ, ಹಂತಗಳು ಮಾತ್ರ ಬಿಡುವುದಕ್ಕೆ ಬಹುಮಾನ ನೀಡುತ್ತವೆ",
       "ಅದು ಸ್ವರೂಪ ನಿಯಮ",
       "ವೈಫಲ್ಯ ಮರೆಮಾಡಲು",
       "ಹಂತಗಳು ಐಚ್ಛಿಕ"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
