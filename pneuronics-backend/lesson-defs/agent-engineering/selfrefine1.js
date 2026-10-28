module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6066020ed05b32151a",
 "order": 0,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Self-Refine and CRITIC: Iterative Output Improvement (Part 1 of 3) — Generate, Feedback, Refine and History",
 "titleKn": "Self-Refine ಮತ್ತು CRITIC: ಪುನರಾವರ್ತಿತ ಔಟ್‌ಪುಟ್ ಸುಧಾರಣೆ (ಭಾಗ 1 / 3) — Generate, Feedback, Refine ಮತ್ತು ಇತಿಹಾಸ",
 "desc": "Build the Self-Refine loop with history and an iteration budget, verify the 59/60-character boundary, find that a passing critique can hide mid-word truncation and that the loop returns no success flag, and see with a constructed pair what history prevents.",
 "descKn": "ಇತಿಹಾಸ ಮತ್ತು ಪುನರಾವರ್ತನೆ budget ಇರುವ Self-Refine loop ನಿರ್ಮಿಸಿ, 59/60-ಅಕ್ಷರ ಗಡಿ ಪರಿಶೀಲಿಸಿ, ಪಾಸ್ ಆದ critique ಪದ-ಮಧ್ಯದ ಕತ್ತರಿಸುವಿಕೆ ಮರೆಮಾಡಬಹುದು ಮತ್ತು loop success ಧ್ವಜ ಹಿಂತಿರುಗಿಸುವುದಿಲ್ಲ ಎಂದು ಕಂಡುಹಿಡಿಯಿರಿ, ಮತ್ತು ರಚಿಸಿದ ಜೋಡಿಯಿಂದ ಇತಿಹಾಸ ಏನು ತಡೆಯುತ್ತದೆ ಎಂದು ನೋಡಿ.",
 "objectives": [
  "Explain generate, feedback and refine and why they should be separate roles.",
  "Implement a refinement loop with history, a semantic stop and an iteration budget.",
  "Explain why feedback must be specific and actionable.",
  "Show that termination is not success and that a deterministic check proves only what it measures.",
  "Explain the cost of iteration and the limit of pure self-feedback."
 ],
 "objectivesKn": [
  "Generate, feedback ಮತ್ತು refine ವಿವರಿಸಿ ಹಾಗೂ ಅವು ಪ್ರತ್ಯೇಕ ಪಾತ್ರಗಳಾಗಿರಬೇಕು ಏಕೆ ಎಂದು ತಿಳಿಸಿ.",
  "ಇತಿಹಾಸ, ಅರ್ಥಗರ್ಭಿತ ನಿಲುಗಡೆ ಮತ್ತು ಪುನರಾವರ್ತನೆ budget ಇರುವ ಪರಿಷ್ಕರಣೆ loop ಅಳವಡಿಸಿ.",
  "Feedback ನಿರ್ದಿಷ್ಟ ಮತ್ತು ಕ್ರಿಯಾತ್ಮಕವಾಗಿರಬೇಕು ಏಕೆ ಎಂದು ವಿವರಿಸಿ.",
  "ಮುಕ್ತಾಯ ಯಶಸ್ಸಲ್ಲ ಮತ್ತು ನಿರ್ಧಾರಾತ್ಮಕ ಪರಿಶೀಲನೆ ಅಳೆಯುವುದನ್ನು ಮಾತ್ರ ಸಾಬೀತುಪಡಿಸುತ್ತದೆ ಎಂದು ತೋರಿಸಿ.",
  "ಪುನರಾವರ್ತನೆಯ ವೆಚ್ಚ ಮತ್ತು ಶುದ್ಧ ಸ್ವಯಂ-feedback ನ ಮಿತಿ ವಿವರಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Self-Refine and CRITIC: Iterative Output Improvement (Part 1 of 3)",
    "textKn": "Self-Refine ಮತ್ತು CRITIC: ಪುನರಾವರ್ತಿತ ಔಟ್‌ಪುಟ್ ಸುಧಾರಣೆ (ಭಾಗ 1 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 1 of 3: the Self-Refine loop of generate, feedback and refine, with history and a budget. Every output was genuinely produced by selfrefine_1.py on Python 3.14.5. The generator, critic and refiner are deterministic functions standing in for three prompts to a model, so nothing here measures a real LLM. The source text for this part was cut off before its end and before part of its code, so the code is rebuilt from the lesson's description and then run. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ ಮೊದಲನೆಯದು: generate, feedback ಮತ್ತು refine ನ Self-Refine loop, ಇತಿಹಾಸ ಮತ್ತು budget ಜೊತೆ. ಎಲ್ಲಾ output selfrefine_1.py ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. Generator, critic ಮತ್ತು refiner ಮಾದರಿಗೆ ಮೂರು prompts ಗೆ ಬದಲಿಯಾದ ನಿರ್ಧಾರಾತ್ಮಕ ಫಂಕ್ಷನ್‌ಗಳು, ಆದ್ದರಿಂದ ಇಲ್ಲಿ ಯಾವುದೂ ನಿಜವಾದ LLM ಅನ್ನು ಅಳೆಯುವುದಿಲ್ಲ. ಈ ಭಾಗದ ಮೂಲ ಪಠ್ಯ ಅಂತ್ಯಕ್ಕೆ ಮೊದಲು ಮತ್ತು ಕೋಡ್‌ನ ಒಂದು ಭಾಗದ ಮೊದಲೇ ಕತ್ತರಿಸಲ್ಪಟ್ಟಿತ್ತು, ಆದ್ದರಿಂದ ಕೋಡ್ ಅನ್ನು ಪಾಠದ ವಿವರಣೆಯಿಂದ ಮರುನಿರ್ಮಿಸಿ ಚಲಾಯಿಸಲಾಗಿದೆ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Generate, Feedback, Refine",
    "textKn": "Generate, Feedback, Refine",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why One Shot Is Not Enough",
    "headingKn": "ಒಂದೇ ಪ್ರಯತ್ನ ಏಕೆ ಸಾಕಾಗದು",
    "bodyEn": "Ask a model for exactly three short bullets and it may return four. A one-shot system returns that answer without ever asking whether the constraints were followed. Self-Refine adds a loop: generate an output, produce feedback on it, refine it using that feedback, evaluate again, and stop when no problems remain or the budget runs out. In symbols, O(0) = Generate(T), C(k) = Feedback(T, O(k)) and O(k+1) = Refine(T, O(k), C(k), H(k)), where H is the history of earlier attempts. It needs no fine-tuning: the improvement happens at inference time through context.",
    "bodyKn": "ಸರಿಯಾಗಿ ಮೂರು ಚಿಕ್ಕ bullets ಕೇಳಿದರೆ ಮಾದರಿ ನಾಲ್ಕು ಹಿಂತಿರುಗಿಸಬಹುದು. ಒಂದು-ಬಾರಿಯ ವ್ಯವಸ್ಥೆ ನಿರ್ಬಂಧಗಳನ್ನು ಅನುಸರಿಸಲಾಯಿತೇ ಎಂದು ಕೇಳದೆ ಆ ಉತ್ತರ ಹಿಂತಿರುಗಿಸುತ್ತದೆ. Self-Refine loop ಸೇರಿಸುತ್ತದೆ: ಔಟ್‌ಪುಟ್ ಉತ್ಪಾದಿಸಿ, ಅದರ ಮೇಲೆ feedback ತಯಾರಿಸಿ, ಆ feedback ಬಳಸಿ refine ಮಾಡಿ, ಮತ್ತೆ ಮೌಲ್ಯಮಾಪನ ಮಾಡಿ, ಸಮಸ್ಯೆಗಳು ಉಳಿಯದಿದ್ದಾಗ ಅಥವಾ budget ಮುಗಿದಾಗ ನಿಲ್ಲಿಸಿ. ಸಂಕೇತಗಳಲ್ಲಿ O(0) = Generate(T), C(k) = Feedback(T, O(k)) ಮತ್ತು O(k+1) = Refine(T, O(k), C(k), H(k)), ಇಲ್ಲಿ H ಹಿಂದಿನ ಪ್ರಯತ್ನಗಳ ಇತಿಹಾಸ. ಇದಕ್ಕೆ fine-tuning ಬೇಡ: ಸುಧಾರಣೆ ನಿರ್ಧಾರ ಸಮಯದಲ್ಲಿ context ಮೂಲಕ ನಡೆಯುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "The Self-Refine Loop",
    "headingKn": "Self-Refine Loop",
    "svgCode": "<svg viewBox=\"0 0 300 210\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\">\n  <rect width=\"300\" height=\"210\" rx=\"8\" fill=\"#0f172a\"/>\n  <text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">Self-Refine: generate, feedback, refine, repeat</text>\n  <rect x=\"60\" y=\"24\" width=\"180\" height=\"22\" rx=\"4\" fill=\"#1e293b\" stroke=\"#60a5fa\"/><text x=\"150\" y=\"39\" fill=\"#93c5fd\" text-anchor=\"middle\">GENERATE: output 0 from the task</text>\n  <path d=\"M150,46 V56\" stroke=\"#475569\"/>\n  <rect x=\"60\" y=\"58\" width=\"180\" height=\"22\" rx=\"4\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"150\" y=\"73\" fill=\"#6ee7b7\" text-anchor=\"middle\">FEEDBACK: list concrete defects</text>\n  <path d=\"M150,80 V90\" stroke=\"#475569\"/>\n  <rect x=\"20\" y=\"92\" width=\"110\" height=\"22\" rx=\"4\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"75\" y=\"107\" fill=\"#fde68a\" text-anchor=\"middle\">no issues: STOP</text>\n  <rect x=\"170\" y=\"92\" width=\"110\" height=\"22\" rx=\"4\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"225\" y=\"107\" fill=\"#c4b5fd\" text-anchor=\"middle\">issues: REFINE</text>\n  <path d=\"M225,114 V124\" stroke=\"#475569\"/>\n  <rect x=\"130\" y=\"126\" width=\"150\" height=\"22\" rx=\"4\" fill=\"#1e293b\" stroke=\"#fbbf24\"/><text x=\"205\" y=\"141\" fill=\"#fde68a\" text-anchor=\"middle\">output k+1 + history</text>\n  <path d=\"M130,137 C40,137 40,69 60,69\" stroke=\"#f87171\" fill=\"none\"/>\n  <text x=\"150\" y=\"172\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">history = every earlier (output, critique) pair</text>\n  <text x=\"150\" y=\"184\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">hard budget: max_iterations, so the loop always ends</text>\n</svg>",
    "captionEn": "Generate once, then loop on feedback and refine. The loop ends on a clean critique or on the iteration budget.",
    "captionKn": "ಒಮ್ಮೆ ಉತ್ಪಾದಿಸಿ, ನಂತರ feedback ಮತ್ತು refine ನಲ್ಲಿ loop ಮಾಡಿ. ಸ್ವಚ್ಛ critique ಅಥವಾ ಪುನರಾವರ್ತನೆ budget ನಲ್ಲಿ loop ಮುಗಿಯುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Three Roles: Create, Diagnose, Repair",
    "headingKn": "ಮೂರು ಪಾತ್ರಗಳು: ರಚಿಸು, ರೋಗನಿರ್ಣಯ, ದುರಸ್ತಿ",
    "bodyEn": "One model can play all three, but they are different jobs. The generator creates a candidate. The critic diagnoses it and should not rewrite. The refiner repairs it using the critique and should preserve what was already right. Role confusion is a real failure: a critic that starts rewriting, or a refiner that ignores the criteria, weakens the loop. Useful feedback is specific, localised, constraint-aware and actionable: \"found 4 bullets, expected 3\" instead of \"this could be better\".",
    "bodyKn": "ಒಂದು ಮಾದರಿ ಮೂರನ್ನೂ ನಿರ್ವಹಿಸಬಹುದು, ಆದರೆ ಅವು ಬೇರೆ ಬೇರೆ ಕೆಲಸಗಳು. Generator ಅಭ್ಯರ್ಥಿಯನ್ನು ರಚಿಸುತ್ತದೆ. Critic ರೋಗನಿರ್ಣಯ ಮಾಡುತ್ತದೆ ಮತ್ತು ಮರುಬರೆಯಬಾರದು. Refiner critique ಬಳಸಿ ದುರಸ್ತಿ ಮಾಡುತ್ತದೆ ಮತ್ತು ಈಗಾಗಲೇ ಸರಿಯಾಗಿದ್ದದ್ದನ್ನು ಉಳಿಸಬೇಕು. ಪಾತ್ರ ಗೊಂದಲ ನಿಜವಾದ ವೈಫಲ್ಯ: ಮರುಬರೆಯಲು ಆರಂಭಿಸುವ critic, ಅಥವಾ ಮಾನದಂಡ ಕಡೆಗಣಿಸುವ refiner, loop ಅನ್ನು ದುರ್ಬಲಗೊಳಿಸುತ್ತದೆ. ಉಪಯುಕ್ತ feedback ನಿರ್ದಿಷ್ಟ, ಸ್ಥಳೀಕೃತ, ನಿರ್ಬಂಧ-ಅರಿವಿನ ಮತ್ತು ಕ್ರಿಯಾತ್ಮಕ: \"ಇದು ಉತ್ತಮವಾಗಬಹುದು\" ಬದಲು \"4 bullets ಸಿಕ್ಕಿತು, 3 ನಿರೀಕ್ಷಿಸಲಾಗಿತ್ತು\"."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Building the Loop",
    "textKn": "Loop ನಿರ್ಮಿಸುವುದು",
    "level": "H2"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "selfrefine_1.py",
    "headingEn": "Attempt, generate, feedback, format_history and refine",
    "headingKn": "Attempt, generate, feedback, format_history ಮತ್ತು refine",
    "descEn": "Attempt stores one iteration: its output and its critique. The generator returns four bullets on purpose, so there is something to correct. feedback checks two deterministic constraints (exactly three bullets, each under 60 characters, so a 59-character line passes and a 60-character line fails). format_history turns attempts into text a prompt could include. refine removes extra bullets and shortens long ones.",
    "descKn": "Attempt ಒಂದು ಪುನರಾವರ್ತನೆ ಸಂಗ್ರಹಿಸುತ್ತದೆ: ಅದರ ಔಟ್‌ಪುಟ್ ಮತ್ತು critique. ತಿದ್ದಲು ಏನಾದರೂ ಇರಲಿ ಎಂದು generator ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ನಾಲ್ಕು bullets ಹಿಂತಿರುಗಿಸುತ್ತದೆ. feedback ಎರಡು ನಿರ್ಧಾರಾತ್ಮಕ ನಿರ್ಬಂಧ ಪರಿಶೀಲಿಸುತ್ತದೆ (ಸರಿಯಾಗಿ ಮೂರು bullets, ಪ್ರತಿಯೊಂದು 60 ಅಕ್ಷರಕ್ಕಿಂತ ಕಡಿಮೆ, ಹಾಗಾಗಿ 59-ಅಕ್ಷರ ಸಾಲು ಪಾಸ್, 60-ಅಕ್ಷರ ಸಾಲು ವಿಫಲ). format_history attempts ಅನ್ನು prompt ಒಳಗೊಳ್ಳಬಹುದಾದ ಪಠ್ಯವಾಗಿಸುತ್ತದೆ. refine ಹೆಚ್ಚುವರಿ bullets ತೆಗೆಯುತ್ತದೆ ಮತ್ತು ಉದ್ದದವನ್ನು ಚಿಕ್ಕದಾಗಿಸುತ್ತದೆ.",
    "code": "from dataclasses import dataclass\n\nTASK = \"Write exactly 3 short bullet points about Python. Each bullet must be under 60 characters.\"\n\n\n@dataclass\nclass Attempt:\n    iteration: int\n    output: str\n    critique: list[str]\n\n\ndef generate(task: str) -> str:\n    \"\"\"An intentionally imperfect first draft: four bullets where three were requested.\"\"\"\n    return \"\\n\".join([\n        \"- Python was created by Guido van Rossum.\",\n        \"- Python was first released in 1991.\",\n        \"- Python is widely used for automation.\",\n        \"- Python emphasizes readable code.\",\n    ])\n\n\ndef bullets_of(output: str) -> list[str]:\n    return [line.strip() for line in output.splitlines() if line.strip().startswith(\"- \")]\n\n\ndef feedback(task: str, output: str) -> list[str]:\n    issues: list[str] = []\n    bullets = bullets_of(output)\n    if len(bullets) != 3:\n        issues.append(f\"Expected exactly 3 bullets; found {len(bullets)}.\")\n    for number, bullet in enumerate(bullets, start=1):\n        if len(bullet) >= 60:\n            issues.append(f\"Bullet {number} must be under 60 characters.\")\n    return issues\n\n\ndef format_history(history: list[Attempt]) -> str:\n    if not history:\n        return \"No previous attempts.\"\n    sections = []\n    for attempt in history:\n        critique_text = \"\\n\".join(f\"- {i}\" for i in attempt.critique) if attempt.critique else \"- No issues.\"\n        sections.append(f\"Iteration {attempt.iteration}\\nOutput:\\n{attempt.output}\\nCritique:\\n{critique_text}\")\n    return \"\\n\\n\".join(sections)\n\n\ndef refine(task: str, output: str, critique: list[str], history: list[Attempt]) -> str:\n    bullets = bullets_of(output)\n    has_count_problem = any(\"exactly 3 bullets\" in issue for issue in critique)\n    if has_count_problem and len(bullets) > 3:\n        bullets = bullets[:3]\n    revised = []\n    for bullet in bullets:\n        if len(bullet) >= 60:\n            bullet = bullet[:56].rstrip() + \"...\"\n        revised.append(bullet)\n    return \"\\n\".join(revised)"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "selfrefine_1.py",
    "headingEn": "The controller, two history refiners and the experiments",
    "headingKn": "Controller, ಎರಡು ಇತಿಹಾಸ refiners ಮತ್ತು ಪ್ರಯೋಗಗಳು",
    "descEn": "self_refine is the controller: generate, then for each iteration get feedback, record the attempt, stop on an empty critique, else refine. The for-else branch runs only when the budget is exhausted without a break. forgetful_refiner and history_refiner are a constructed pair for section 8. main() runs eight experiments.",
    "descKn": "self_refine controller: generate, ನಂತರ ಪ್ರತಿ ಪುನರಾವರ್ತನೆಗೆ feedback ಪಡೆದು, attempt ದಾಖಲಿಸಿ, ಖಾಲಿ critique ನಲ್ಲಿ ನಿಲ್ಲಿಸಿ, ಇಲ್ಲದಿದ್ದರೆ refine. for-else ಶಾಖೆ break ಇಲ್ಲದೆ budget ಮುಗಿದಾಗ ಮಾತ್ರ ಚಲಿಸುತ್ತದೆ. forgetful_refiner ಮತ್ತು history_refiner ವಿಭಾಗ 8 ಕ್ಕೆ ರಚಿಸಿದ ಜೋಡಿ. main() ಎಂಟು ಪ್ರಯೋಗ ಚಲಾಯಿಸುತ್ತದೆ.",
    "code": "def self_refine(task: str, max_iterations: int = 4, refiner=refine, quiet=False, generator=generate):\n    history: list[Attempt] = []\n    output = generator(task)\n    for iteration in range(max_iterations):\n        critique = feedback(task, output)\n        history.append(Attempt(iteration, output, critique.copy()))\n        if not quiet:\n            print(f\"ITERATION {iteration}: bullets={len(bullets_of(output))} critique={critique or 'none'}\")\n        if not critique:\n            if not quiet:\n                print(\"STOP: the feedback stage found no remaining issues.\")\n            break\n        output = refiner(task, output, critique, history)\n    else:\n        if not quiet:\n            print(\"Maximum refinement iterations reached.\")\n    return output, history\n\n\ndef shorten(bullet: str) -> str:\n    return bullet if len(bullet) < 60 else bullet[:56].rstrip() + \"...\"\n\n\ndef forgetful_refiner(task, output, critique, history):\n    \"\"\"Constructed to forget: it reacts only to the first issue and rewrites from scratch on a length issue.\"\"\"\n    first = critique[0]\n    if \"exactly 3 bullets\" in first:\n        return \"\\n\".join(bullets_of(output)[:3])\n    fresh = [shorten(b) for b in bullets_of(output)] + [\"- Python has a large standard library.\"]\n    return \"\\n\".join(fresh)          # the rewrite quietly brings back a fourth bullet\n\n\ndef history_refiner(task, output, critique, history):\n    \"\"\"Same repair, but it carries forward every constraint that any earlier critique named.\"\"\"\n    bullets = [shorten(b) for b in bullets_of(output)]\n    earlier = [c for a in history for c in a.critique]\n    if any(\"exactly 3 bullets\" in c for c in earlier):\n        bullets = bullets[:3]\n    return \"\\n\".join(bullets)\n\n\ndef messy_generate(task):\n    return \"\\n\".join([\n        \"- Python was created by Guido van Rossum.\",\n        \"- Python is widely used in data science and machine learning.\",\n        \"- Python was first released in 1991.\",\n        \"- Python emphasizes readable code.\",\n    ])\n\n\ndef section(t):\n    print(f\"\\n--- {t} ---\")\n\n\ndef main():\n    section(\"1. The loop as the lesson builds it\")\n    print(\"TASK:\", TASK)\n    final, history = self_refine(TASK)\n    print(\"FINAL OUTPUT:\")\n    print(final)\n\n    section(\"2. History as context for the refiner\")\n    print(format_history(history))\n\n    section(\"3. The boundary: under 60 means 59 passes, 60 fails\")\n    for n in (58, 59, 60, 61):\n        line = \"- \" + \"x\" * (n - 2)\n        print(f\"bullet of {len(line)} characters -> {feedback(TASK, chr(10).join([line] * 3)) or 'accepted'}\")\n\n    section(\"4. What the toy refiner does to a long bullet\")\n    long_output = \"\\n\".join([\n        \"- Python was created by Guido van Rossum in the Netherlands.\",\n        \"- Python is widely used in data science and machine learning.\",\n        \"- Python emphasizes readable code.\",\n    ])\n    print(\"critique before:\", feedback(TASK, long_output))\n    fixed = refine(TASK, long_output, feedback(TASK, long_output), [])\n    print(fixed)\n    print(\"critique after :\", feedback(TASK, fixed) or \"none\")\n    print(\"lengths:\", [len(b) for b in bullets_of(fixed)], \"- the constraint is met, but the text is cut mid-sentence\")\n\n    section(\"5. A stubborn refiner: termination is not success\")\n    stubborn = lambda task, output, critique, history: output\n    final, history = self_refine(TASK, max_iterations=4, refiner=stubborn)\n    print(\"returned output still has\", len(bullets_of(final)), \"bullets\")\n    print(\"the loop returns (output, history) with no success flag; the last critique was:\", history[-1].critique)\n\n    section(\"6. Anti-pattern: regenerate instead of refine\")\n    for i in range(3):\n        print(f\"regenerate {i}: bullets={len(bullets_of(generate(TASK)))} (the critique was thrown away)\")\n\n    section(\"7. Cost model (arithmetic on stated assumptions, NOT a measurement)\")\n    cg, cf, cr = 1.0, 1.0, 1.0\n    print(\"assume generate = feedback = refine = 1 unit\")\n    for n in (0, 1, 2, 4):\n        print(f\"n={n} refinement rounds: cost ~ Cg + n*(Cf+Cr) = {cg + n * (cf + cr)} units (+ one feedback to confirm the last output)\")\n    per_iter = 800 + 200\n    print(\"history growth if each attempt is 800 tokens and each critique 200:\",\n          [per_iter * k for k in range(1, 5)], \"tokens after iterations 1..4\")\n\n    section(\"8. A constructed scenario: what history is for (4 bullets, one too long)\")\n    for name, refiner in ((\"forgetful refiner\", forgetful_refiner), (\"history-aware refiner\", history_refiner)):\n        print(name + \":\")\n        final, hist = self_refine(TASK, max_iterations=5, refiner=refiner, quiet=True, generator=messy_generate)\n        for a in hist:\n            print(f\"  iteration {a.iteration}: bullets={len(bullets_of(a.output))} critique={a.critique or 'none'}\")\n        print(\"  ended clean:\", not hist[-1].critique)\n    print(\"our regular refine() accepts history but never reads it, so only this constructed pair shows what history buys\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. The loop as the lesson builds it ---\nTASK: Write exactly 3 short bullet points about Python. Each bullet must be under 60 characters.\nITERATION 0: bullets=4 critique=['Expected exactly 3 bullets; found 4.']\nITERATION 1: bullets=3 critique=none\nSTOP: the feedback stage found no remaining issues.\nFINAL OUTPUT:\n- Python was created by Guido van Rossum.\n- Python was first released in 1991.\n- Python is widely used for automation.\n\n--- 2. History as context for the refiner ---\nIteration 0\nOutput:\n- Python was created by Guido van Rossum.\n- Python was first released in 1991.\n- Python is widely used for automation.\n- Python emphasizes readable code.\nCritique:\n- Expected exactly 3 bullets; found 4.\n\nIteration 1\nOutput:\n- Python was created by Guido van Rossum.\n- Python was first released in 1991.\n- Python is widely used for automation.\nCritique:\n- No issues.\n\n--- 3. The boundary: under 60 means 59 passes, 60 fails ---\nbullet of 58 characters -> accepted\nbullet of 59 characters -> accepted\nbullet of 60 characters -> ['Bullet 1 must be under 60 characters.', 'Bullet 2 must be under 60 characters.', 'Bullet 3 must be under 60 characters.']\nbullet of 61 characters -> ['Bullet 1 must be under 60 characters.', 'Bullet 2 must be under 60 characters.', 'Bullet 3 must be under 60 characters.']\n\n--- 4. What the toy refiner does to a long bullet ---\ncritique before: ['Bullet 1 must be under 60 characters.', 'Bullet 2 must be under 60 characters.']\n- Python was created by Guido van Rossum in the Netherla...\n- Python is widely used in data science and machine lear...\n- Python emphasizes readable code.\ncritique after : none\nlengths: [59, 59, 34] - the constraint is met, but the text is cut mid-sentence\n\n--- 5. A stubborn refiner: termination is not success ---\nITERATION 0: bullets=4 critique=['Expected exactly 3 bullets; found 4.']\nITERATION 1: bullets=4 critique=['Expected exactly 3 bullets; found 4.']\nITERATION 2: bullets=4 critique=['Expected exactly 3 bullets; found 4.']\nITERATION 3: bullets=4 critique=['Expected exactly 3 bullets; found 4.']\nMaximum refinement iterations reached.\nreturned output still has 4 bullets\nthe loop returns (output, history) with no success flag; the last critique was: ['Expected exactly 3 bullets; found 4.']\n\n--- 6. Anti-pattern: regenerate instead of refine ---\nregenerate 0: bullets=4 (the critique was thrown away)\nregenerate 1: bullets=4 (the critique was thrown away)\nregenerate 2: bullets=4 (the critique was thrown away)\n\n--- 7. Cost model (arithmetic on stated assumptions, NOT a measurement) ---\nassume generate = feedback = refine = 1 unit\nn=0 refinement rounds: cost ~ Cg + n*(Cf+Cr) = 1.0 units (+ one feedback to confirm the last output)\nn=1 refinement rounds: cost ~ Cg + n*(Cf+Cr) = 3.0 units (+ one feedback to confirm the last output)\nn=2 refinement rounds: cost ~ Cg + n*(Cf+Cr) = 5.0 units (+ one feedback to confirm the last output)\nn=4 refinement rounds: cost ~ Cg + n*(Cf+Cr) = 9.0 units (+ one feedback to confirm the last output)\nhistory growth if each attempt is 800 tokens and each critique 200: [1000, 2000, 3000, 4000] tokens after iterations 1..4\n\n--- 8. A constructed scenario: what history is for (4 bullets, one too long) ---\nforgetful refiner:\n  iteration 0: bullets=4 critique=['Expected exactly 3 bullets; found 4.', 'Bullet 2 must be under 60 characters.']\n  iteration 1: bullets=3 critique=['Bullet 2 must be under 60 characters.']\n  iteration 2: bullets=4 critique=['Expected exactly 3 bullets; found 4.']\n  iteration 3: bullets=3 critique=none\n  ended clean: True\nhistory-aware refiner:\n  iteration 0: bullets=4 critique=['Expected exactly 3 bullets; found 4.', 'Bullet 2 must be under 60 characters.']\n  iteration 1: bullets=3 critique=none\n  ended clean: True\nour regular refine() accepts history but never reads it, so only this constructed pair shows what history buys"
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
    "headingEn": "A Failed Draft Becomes a Clean One",
    "headingKn": "ವಿಫಲ ಕರಡು ಸ್ವಚ್ಛವಾಗುತ್ತದೆ",
    "bodyEn": "Section 1: iteration 0 has 4 bullets and the critique \"Expected exactly 3 bullets; found 4.\" The refiner drops the fourth, iteration 1 has 3 bullets and an empty critique, and the loop stops. Section 2 shows the history the refiner could receive: both outputs, each with its critique (\"No issues.\" for the second). Section 3 verifies the boundary: bullets of 58 and 59 characters pass, 60 and 61 fail, matching \"under 60\".",
    "bodyKn": "ವಿಭಾಗ 1: ಪುನರಾವರ್ತನೆ 0 ಗೆ 4 bullets ಮತ್ತು critique \"Expected exactly 3 bullets; found 4.\" ಇದೆ. Refiner ನಾಲ್ಕನೆಯದನ್ನು ಬಿಡುತ್ತದೆ, ಪುನರಾವರ್ತನೆ 1 ಗೆ 3 bullets ಮತ್ತು ಖಾಲಿ critique, ಮತ್ತು loop ನಿಲ್ಲುತ್ತದೆ. ವಿಭಾಗ 2 refiner ಪಡೆಯಬಹುದಾದ ಇತಿಹಾಸ ತೋರಿಸುತ್ತದೆ: ಎರಡೂ ಔಟ್‌ಪುಟ್‌ಗಳು, ಪ್ರತಿಯೊಂದರ critique ಜೊತೆ (ಎರಡನೆಯದಕ್ಕೆ \"No issues.\"). ವಿಭಾಗ 3 ಗಡಿ ಪರಿಶೀಲಿಸುತ್ತದೆ: 58 ಮತ್ತು 59 ಅಕ್ಷರದ bullets ಪಾಸ್, 60 ಮತ್ತು 61 ವಿಫಲ, \"60 ಕ್ಕಿಂತ ಕಡಿಮೆ\" ಗೆ ಹೊಂದುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: A Passing Critique Can Hide Damaged Text",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಪಾಸ್ ಆದ Critique ಹಾಳಾದ ಪಠ್ಯ ಮರೆಮಾಡಬಹುದು",
    "bodyEn": "Section 4 gives the refiner two bullets that are too long. It cuts each to 56 characters and appends \"...\", and the next critique is empty. The results read \"Python was created by Guido van Rossum in the Netherla...\" and \"Python is widely used in data science and machine lear...\": both are 59 characters, so the length constraint is satisfied, and both are cut in the middle of a word. The constraint was met and the quality got worse. A refiner should rewrite semantically, and a critic that only counts characters cannot notice the damage. Deterministic checks verify only what they measure.",
    "bodyKn": "ವಿಭಾಗ 4 refiner ಗೆ ತುಂಬಾ ಉದ್ದದ ಎರಡು bullets ನೀಡುತ್ತದೆ. ಅದು ಪ್ರತಿಯೊಂದನ್ನು 56 ಅಕ್ಷರಕ್ಕೆ ಕತ್ತರಿಸಿ \"...\" ಸೇರಿಸುತ್ತದೆ, ಮತ್ತು ಮುಂದಿನ critique ಖಾಲಿ. ಫಲಿತಾಂಶಗಳು \"Python was created by Guido van Rossum in the Netherla...\" ಮತ್ತು \"Python is widely used in data science and machine lear...\": ಎರಡೂ 59 ಅಕ್ಷರ, ಹಾಗಾಗಿ ಉದ್ದ ನಿರ್ಬಂಧ ಪೂರೈಕೆ, ಮತ್ತು ಎರಡೂ ಪದದ ಮಧ್ಯದಲ್ಲಿ ಕತ್ತರಿಸಲ್ಪಟ್ಟಿವೆ. ನಿರ್ಬಂಧ ಪೂರೈಸಿತು ಮತ್ತು ಗುಣಮಟ್ಟ ಕೆಟ್ಟಿತು. Refiner ಅರ್ಥಗರ್ಭಿತವಾಗಿ ಮರುಬರೆಯಬೇಕು, ಮತ್ತು ಅಕ್ಷರ ಮಾತ್ರ ಎಣಿಸುವ critic ಹಾನಿ ಗಮನಿಸಲಾರದು. ನಿರ್ಧಾರಾತ್ಮಕ ಪರಿಶೀಲನೆಗಳು ತಾವು ಅಳೆಯುವುದನ್ನು ಮಾತ್ರ ಪರಿಶೀಲಿಸುತ್ತವೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: The Loop Cannot Say Whether It Succeeded",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Loop ಯಶಸ್ವಿಯಾಯಿತೇ ಎಂದು ಹೇಳಲಾರದು",
    "bodyEn": "Section 5 uses a stubborn refiner that returns its input. After 4 iterations it prints \"Maximum refinement iterations reached.\" and returns the output with 4 bullets, and the last critique is still \"Expected exactly 3 bullets; found 4.\" The function returns (output, history) with no success flag, so a caller cannot tell this from a clean run without re-running the checks. Budget stopping and semantic stopping are different, and termination is not success. Section 6 shows the common wrong design: regenerating without using the critique gives 4 bullets every time, because nothing closed the feedback loop.",
    "bodyKn": "ವಿಭಾಗ 5 ತನ್ನ ಇನ್‌ಪುಟ್ ಹಿಂತಿರುಗಿಸುವ ಹಠಮಾರಿ refiner ಬಳಸುತ್ತದೆ. 4 ಪುನರಾವರ್ತನೆಗಳ ನಂತರ ಅದು \"Maximum refinement iterations reached.\" ಮುದ್ರಿಸಿ 4 bullets ಇರುವ ಔಟ್‌ಪುಟ್ ಹಿಂತಿರುಗಿಸುತ್ತದೆ, ಮತ್ತು ಕೊನೆಯ critique ಇನ್ನೂ \"Expected exactly 3 bullets; found 4.\" ಫಂಕ್ಷನ್ (output, history) ಹಿಂತಿರುಗಿಸುತ್ತದೆ, success ಧ್ವಜ ಇಲ್ಲ, ಆದ್ದರಿಂದ ಕರೆದಾರ ಪರಿಶೀಲನೆ ಮರುಚಲಾಯಿಸದೆ ಇದನ್ನು ಸ್ವಚ್ಛ ಓಟದಿಂದ ಬೇರ್ಪಡಿಸಲಾರ. Budget ನಿಲುಗಡೆ ಮತ್ತು ಅರ್ಥಗರ್ಭಿತ ನಿಲುಗಡೆ ಬೇರೆ, ಮತ್ತು ಮುಕ್ತಾಯ ಯಶಸ್ಸಲ್ಲ. ವಿಭಾಗ 6 ಸಾಮಾನ್ಯ ತಪ್ಪು ವಿನ್ಯಾಸ ತೋರಿಸುತ್ತದೆ: critique ಬಳಸದೆ ಮರುಉತ್ಪಾದನೆ ಪ್ರತಿ ಬಾರಿ 4 bullets ನೀಡುತ್ತದೆ, ಏಕೆಂದರೆ ಯಾವುದೂ feedback loop ಮುಚ್ಚಲಿಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "What History Is For",
    "headingKn": "ಇತಿಹಾಸ ಯಾವುದಕ್ಕಾಗಿ",
    "bodyEn": "Our regular refine() accepts history but never reads it, so only a constructed pair shows what history buys. Section 8 starts with 4 bullets, one too long. The forgetful refiner reacts to the first issue only, and when it later fixes the length it quietly brings back a fourth bullet, so the critiques go [count + length], [length], [count], clean: 4 iterations. The history-aware refiner carries forward every constraint any earlier critique named, and finishes in 2. Both end clean, so the cost of forgetting here is two extra rounds, not failure, and the pair is built to forget, so treat it as a mechanism demonstration and not a measurement of real models.",
    "bodyKn": "ನಮ್ಮ ಸಾಮಾನ್ಯ refine() history ಅನ್ನು ಸ್ವೀಕರಿಸುತ್ತದೆ ಆದರೆ ಎಂದೂ ಓದುವುದಿಲ್ಲ, ಆದ್ದರಿಂದ ರಚಿಸಿದ ಜೋಡಿ ಮಾತ್ರ ಇತಿಹಾಸ ಏನು ಖರೀದಿಸುತ್ತದೆ ಎಂದು ತೋರಿಸುತ್ತದೆ. ವಿಭಾಗ 8 ಒಂದು ತುಂಬಾ ಉದ್ದ ಇರುವ 4 bullets ನಿಂದ ಆರಂಭ. ಮರೆಯುವ refiner ಮೊದಲ ಸಮಸ್ಯೆಗೆ ಮಾತ್ರ ಪ್ರತಿಕ್ರಿಯಿಸುತ್ತದೆ, ಮತ್ತು ನಂತರ ಉದ್ದ ಸರಿಪಡಿಸುವಾಗ ಮೌನವಾಗಿ ನಾಲ್ಕನೇ bullet ಮರಳಿ ತರುತ್ತದೆ, ಆದ್ದರಿಂದ critiques [count + length], [length], [count], ಸ್ವಚ್ಛ: 4 ಪುನರಾವರ್ತನೆ. ಇತಿಹಾಸ-ಅರಿವಿನ refiner ಹಿಂದಿನ ಯಾವುದೇ critique ಹೆಸರಿಸಿದ ಪ್ರತಿ ನಿರ್ಬಂಧವನ್ನು ಮುಂದೆ ಒಯ್ದು 2 ರಲ್ಲಿ ಮುಗಿಸುತ್ತದೆ. ಎರಡೂ ಸ್ವಚ್ಛವಾಗಿ ಮುಗಿಯುತ್ತವೆ, ಆದ್ದರಿಂದ ಇಲ್ಲಿ ಮರೆಯುವ ವೆಚ್ಚ ಎರಡು ಹೆಚ್ಚುವರಿ ಸುತ್ತು, ವೈಫಲ್ಯವಲ್ಲ, ಮತ್ತು ಜೋಡಿ ಮರೆಯಲೆಂದೇ ನಿರ್ಮಿಸಲ್ಪಟ್ಟಿದೆ, ಆದ್ದರಿಂದ ಇದನ್ನು ಕಾರ್ಯವಿಧಾನದ ಪ್ರದರ್ಶನ ಎಂದು ಪರಿಗಣಿಸಿ, ನಿಜವಾದ ಮಾದರಿಗಳ ಅಳತೆಯಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Cost: Quality Has a Price",
    "headingKn": "ವೆಚ್ಚ: ಗುಣಮಟ್ಟಕ್ಕೆ ಬೆಲೆ ಇದೆ",
    "bodyEn": "A one-shot answer costs about Cg. A Self-Refine run with n refinement rounds costs about Cg + n(Cf + Cr), plus one more feedback call to confirm the last output. With every call costing 1 unit that is 1, 3, 5 and 9 units for n = 0, 1, 2 and 4. History grows too: if each attempt is 800 tokens and each critique 200, the history carried forward is 1,000, 2,000, 3,000 and 4,000 tokens after iterations 1 to 4. These figures are arithmetic under stated assumptions, not measurements. Early passes usually fix the largest defects and later ones give smaller gains, so the budget should be small and explicit.",
    "bodyKn": "ಒಂದು-ಬಾರಿಯ ಉತ್ತರಕ್ಕೆ ಸುಮಾರು Cg ವೆಚ್ಚ. n ಪರಿಷ್ಕರಣೆ ಸುತ್ತುಗಳ Self-Refine ಓಟಕ್ಕೆ ಸುಮಾರು Cg + n(Cf + Cr), ಜೊತೆಗೆ ಕೊನೆಯ ಔಟ್‌ಪುಟ್ ದೃಢೀಕರಿಸಲು ಇನ್ನೊಂದು feedback ಕರೆ. ಪ್ರತಿ ಕರೆ 1 ಘಟಕ ವೆಚ್ಚವಾದರೆ n = 0, 1, 2 ಮತ್ತು 4 ಗೆ 1, 3, 5 ಮತ್ತು 9 ಘಟಕಗಳು. ಇತಿಹಾಸವೂ ಬೆಳೆಯುತ್ತದೆ: ಪ್ರತಿ attempt 800 tokens ಮತ್ತು ಪ್ರತಿ critique 200 ಆದರೆ ಪುನರಾವರ್ತನೆ 1 ರಿಂದ 4 ರ ನಂತರ ಮುಂದೆ ಒಯ್ಯುವ ಇತಿಹಾಸ 1,000, 2,000, 3,000 ಮತ್ತು 4,000 tokens. ಈ ಸಂಖ್ಯೆಗಳು ಹೇಳಿದ ಊಹೆಗಳ ಅಡಿಯ ಅಂಕಗಣಿತ, ಅಳತೆಗಳಲ್ಲ. ಆರಂಭಿಕ ಸುತ್ತುಗಳು ಸಾಮಾನ್ಯವಾಗಿ ದೊಡ್ಡ ದೋಷಗಳನ್ನು ಸರಿಪಡಿಸುತ್ತವೆ ಮತ್ತು ನಂತರದವು ಚಿಕ್ಕ ಲಾಭ ನೀಡುತ್ತವೆ, ಆದ್ದರಿಂದ budget ಚಿಕ್ಕದಾಗಿ ಮತ್ತು ಸ್ಪಷ್ಟವಾಗಿರಬೇಕು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "The Limitation That Leads to CRITIC",
    "headingKn": "CRITIC ಗೆ ಕರೆದೊಯ್ಯುವ ಮಿತಿ",
    "bodyEn": "The critic here checks only what Python can count. It would approve \"Python was created in 1981\" because the format is fine. If a model critiques its own factual claim with the same knowledge it used to generate it, the evaluation can repeat the same mistake. Rubber-stamping, an evaluator approving a candidate without testing anything, is a related failure. When a property can be checked by a parser, a calculator, a test runner or a trusted source, use that instead of asking the model. That is the subject of Part 2.",
    "bodyKn": "ಇಲ್ಲಿನ critic Python ಎಣಿಸಬಲ್ಲದನ್ನು ಮಾತ್ರ ಪರಿಶೀಲಿಸುತ್ತದೆ. ರೂಪ ಸರಿಯಾಗಿರುವುದರಿಂದ ಅದು \"Python was created in 1981\" ಅನ್ನು ಅನುಮೋದಿಸುತ್ತದೆ. ಮಾದರಿ ತನ್ನ ವಾಸ್ತವ ಹೇಳಿಕೆಯನ್ನು ಉತ್ಪಾದಿಸಲು ಬಳಸಿದ ಅದೇ ಜ್ಞಾನದಿಂದ ವಿಮರ್ಶಿಸಿದರೆ ಮೌಲ್ಯಮಾಪನ ಅದೇ ತಪ್ಪನ್ನು ಪುನರಾವರ್ತಿಸಬಹುದು. Rubber-stamping, ಏನನ್ನೂ ಪರೀಕ್ಷಿಸದೆ evaluator ಅಭ್ಯರ್ಥಿಯನ್ನು ಅನುಮೋದಿಸುವುದು, ಸಂಬಂಧಿತ ವೈಫಲ್ಯ. ಒಂದು ಗುಣವನ್ನು parser, calculator, test runner ಅಥವಾ ನಂಬಲರ್ಹ ಮೂಲ ಪರಿಶೀಲಿಸಬಲ್ಲದಾದರೆ, ಮಾದರಿಯನ್ನು ಕೇಳುವ ಬದಲು ಅದನ್ನು ಬಳಸಿ. ಅದು ಭಾಗ 2 ರ ವಿಷಯ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "Generation and evaluation are different tasks: checking a defined constraint is narrower than satisfying all of them in one pass. Splitting them lets a model catch problems it would not avoid, and the improvement needs no training, only extra inference. It suits outputs where a first draft is often close but imperfect.",
    "bodyKn": "ಉತ್ಪಾದನೆ ಮತ್ತು ಮೌಲ್ಯಮಾಪನ ಬೇರೆ ಕಾರ್ಯಗಳು: ವ್ಯಾಖ್ಯಾನಿತ ನಿರ್ಬಂಧ ಪರಿಶೀಲಿಸುವುದು ಎಲ್ಲವನ್ನೂ ಒಂದೇ ಪ್ರಯತ್ನದಲ್ಲಿ ಪೂರೈಸುವುದಕ್ಕಿಂತ ಕಿರಿದು. ಅವನ್ನು ಬೇರ್ಪಡಿಸಿದರೆ ಮಾದರಿ ತಾನು ತಪ್ಪಿಸದ ಸಮಸ್ಯೆಗಳನ್ನು ಹಿಡಿಯಬಹುದು, ಮತ್ತು ಸುಧಾರಣೆಗೆ ತರಬೇತಿ ಬೇಡ, ಹೆಚ್ಚುವರಿ ನಿರ್ಧಾರ ಮಾತ್ರ. ಮೊದಲ ಕರಡು ಹೆಚ್ಚಾಗಿ ಹತ್ತಿರ ಆದರೆ ಅಪೂರ್ಣವಾಗಿರುವ ಔಟ್‌ಪುಟ್‌ಗಳಿಗೆ ಇದು ಹೊಂದುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Where This Appears in AI Systems",
    "headingKn": "AI ವ್ಯವಸ್ಥೆಗಳಲ್ಲಿ ಇದು ಎಲ್ಲಿ ಕಾಣುತ್ತದೆ",
    "bodyEn": "Summaries that must stay under a word limit, JSON that must contain required keys, code that must handle an edge case, reports that must include required headings, and plans that must satisfy constraints. In each, a defined check produces a concrete defect and the next draft is built on it.",
    "bodyKn": "ಪದ ಮಿತಿಯೊಳಗೆ ಇರಬೇಕಾದ ಸಾರಾಂಶಗಳು, ಅಗತ್ಯ ಕೀಗಳನ್ನು ಹೊಂದಿರಬೇಕಾದ JSON, ಅಂಚಿನ ಪ್ರಕರಣ ನಿರ್ವಹಿಸಬೇಕಾದ ಕೋಡ್, ಅಗತ್ಯ ಶೀರ್ಷಿಕೆಗಳನ್ನು ಒಳಗೊಳ್ಳಬೇಕಾದ ವರದಿಗಳು, ಮತ್ತು ನಿರ್ಬಂಧ ಪೂರೈಸಬೇಕಾದ ಯೋಜನೆಗಳು. ಪ್ರತಿಯೊಂದರಲ್ಲೂ ವ್ಯಾಖ್ಯಾನಿತ ಪರಿಶೀಲನೆ ನಿರ್ದಿಷ್ಟ ದೋಷ ನೀಡುತ್ತದೆ ಮತ್ತು ಮುಂದಿನ ಕರಡು ಅದರ ಮೇಲೆ ನಿರ್ಮಿತವಾಗುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"Self-Refine means asking the model the same question repeatedly.\" Section 6 is that and it learned nothing. The loop works only because feedback is closed back into refinement: a critique names a defect, the refiner uses it, and the new candidate is checked again.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"Self-Refine ಎಂದರೆ ಅದೇ ಪ್ರಶ್ನೆಯನ್ನು ಮಾದರಿಗೆ ಪದೇ ಪದೇ ಕೇಳುವುದು.\" ವಿಭಾಗ 6 ಅದೇ ಮತ್ತು ಅದು ಏನನ್ನೂ ಕಲಿಯಲಿಲ್ಲ. Feedback ಅನ್ನು refinement ಗೆ ಮುಚ್ಚಿದ್ದರಿಂದ ಮಾತ್ರ loop ಕೆಲಸ ಮಾಡುತ್ತದೆ: critique ದೋಷ ಹೆಸರಿಸುತ್ತದೆ, refiner ಅದನ್ನು ಬಳಸುತ್ತದೆ, ಮತ್ತು ಹೊಸ ಅಭ್ಯರ್ಥಿಯನ್ನು ಮತ್ತೆ ಪರಿಶೀಲಿಸಲಾಗುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Self-Refine: generate, critique, refine, repeat. Feedback: a concrete critique of the current output. History: earlier outputs and critiques. Iteration budget: the hard cap on rounds. Semantic stop: the critic finds nothing more. Rubber-stamp: approval without a real test. Closed loop: feedback that changes the next output.",
    "bodyKn": "Self-Refine: generate, critique, refine, ಪುನರಾವರ್ತನೆ. Feedback: ಪ್ರಸ್ತುತ ಔಟ್‌ಪುಟ್‌ನ ನಿರ್ದಿಷ್ಟ critique. History: ಹಿಂದಿನ ಔಟ್‌ಪುಟ್‌ಗಳು ಮತ್ತು critiques. Iteration budget: ಸುತ್ತುಗಳ ಕಠಿಣ ಮಿತಿ. Semantic stop: critic ಇನ್ನೇನೂ ಕಾಣುವುದಿಲ್ಲ. Rubber-stamp: ನಿಜವಾದ ಪರೀಕ್ಷೆ ಇಲ್ಲದ ಅನುಮೋದನೆ. Closed loop: ಮುಂದಿನ ಔಟ್‌ಪುಟ್ ಬದಲಿಸುವ feedback."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) Self-Refine is generate, feedback, refine, with history and a budget. 2) Create, diagnose and repair are separate jobs. 3) A deterministic check proves only what it measures: the length-fixed bullets were cut mid-word. 4) The loop here returns no success flag: termination is not success. 5) History prevents regressions, shown with a constructed pair (4 iterations against 2). 6) Pure self-feedback cannot see what it cannot count; Part 2 adds external verification.",
    "bodyKn": "1) Self-Refine ಎಂದರೆ generate, feedback, refine, ಇತಿಹಾಸ ಮತ್ತು budget ಜೊತೆ. 2) ರಚಿಸು, ರೋಗನಿರ್ಣಯ ಮತ್ತು ದುರಸ್ತಿ ಬೇರೆ ಕೆಲಸಗಳು. 3) ನಿರ್ಧಾರಾತ್ಮಕ ಪರಿಶೀಲನೆ ಅಳೆಯುವುದನ್ನು ಮಾತ್ರ ಸಾಬೀತುಪಡಿಸುತ್ತದೆ: ಉದ್ದ ಸರಿಪಡಿಸಿದ bullets ಪದದ ಮಧ್ಯದಲ್ಲಿ ಕತ್ತರಿಸಲ್ಪಟ್ಟವು. 4) ಇಲ್ಲಿನ loop success ಧ್ವಜ ಹಿಂತಿರುಗಿಸುವುದಿಲ್ಲ: ಮುಕ್ತಾಯ ಯಶಸ್ಸಲ್ಲ. 5) ಇತಿಹಾಸ regression ತಡೆಯುತ್ತದೆ, ರಚಿಸಿದ ಜೋಡಿಯಿಂದ ತೋರಿಸಲಾಗಿದೆ (4 ಪುನರಾವರ್ತನೆ ವಿರುದ್ಧ 2). 6) ಶುದ್ಧ ಸ್ವಯಂ-feedback ತಾನು ಎಣಿಸಲಾರದ್ದನ್ನು ಕಾಣಲಾರದು; ಭಾಗ 2 ಬಾಹ್ಯ ಪರಿಶೀಲನೆ ಸೇರಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What are the three fundamental Self-Refine operations?",
      "qKn": "ಮೂರು ಮೂಲಭೂತ Self-Refine ಕಾರ್ಯಾಚರಣೆಗಳು ಯಾವುವು?",
      "opts": [
       "Plan, Execute, Solve",
       "Generate, Feedback, Refine",
       "Search, Rank, Prune",
       "Train, Test, Deploy"
      ],
      "optsKn": [
       "Plan, Execute, Solve",
       "Generate, Feedback, Refine",
       "Search, Rank, Prune",
       "Train, Test, Deploy"
      ],
      "correct": 1
     },
     {
      "q": "In this lesson's section 4, what happened to the long bullets after refinement?",
      "qKn": "ಈ ಪಾಠದ ವಿಭಾಗ 4 ರಲ್ಲಿ ಪರಿಷ್ಕರಣೆಯ ನಂತರ ಉದ್ದದ bullets ಗೆ ಏನಾಯಿತು?",
      "opts": [
       "They were rewritten with the same meaning",
       "They met the length rule but were cut in the middle of a word",
       "They were deleted",
       "They stayed too long"
      ],
      "optsKn": [
       "ಅದೇ ಅರ್ಥದೊಂದಿಗೆ ಮರುಬರೆಯಲ್ಪಟ್ಟವು",
       "ಉದ್ದ ನಿಯಮ ಪೂರೈಸಿದವು ಆದರೆ ಪದದ ಮಧ್ಯದಲ್ಲಿ ಕತ್ತರಿಸಲ್ಪಟ್ಟವು",
       "ಅಳಿಸಲ್ಪಟ್ಟವು",
       "ತುಂಬಾ ಉದ್ದವಾಗಿಯೇ ಉಳಿದವು"
      ],
      "correct": 1
     },
     {
      "q": "A stubborn refiner returns its input for 4 iterations. What does self_refine return?",
      "qKn": "ಹಠಮಾರಿ refiner 4 ಪುನರಾವರ್ತನೆಗಳಿಗೆ ತನ್ನ ಇನ್‌ಪುಟ್ ಹಿಂತಿರುಗಿಸುತ್ತದೆ. self_refine ಏನು ಹಿಂತಿರುಗಿಸುತ್ತದೆ?",
      "opts": [
       "A failure exception",
       "The still-wrong output and the history, with no success flag",
       "None",
       "A repaired output"
      ],
      "optsKn": [
       "ವೈಫಲ್ಯ exception",
       "ಇನ್ನೂ ತಪ್ಪಾದ ಔಟ್‌ಪುಟ್ ಮತ್ತು ಇತಿಹಾಸ, success ಧ್ವಜ ಇಲ್ಲದೆ",
       "None",
       "ದುರಸ್ತಿ ಮಾಡಿದ ಔಟ್‌ಪುಟ್"
      ],
      "correct": 1
     },
     {
      "q": "Why does the history-aware refiner finish in fewer iterations in section 8?",
      "qKn": "ವಿಭಾಗ 8 ರಲ್ಲಿ ಇತಿಹಾಸ-ಅರಿವಿನ refiner ಕಡಿಮೆ ಪುನರಾವರ್ತನೆಯಲ್ಲಿ ಏಕೆ ಮುಗಿಸುತ್ತದೆ?",
      "opts": [
       "It is faster code",
       "It carries forward the 3-bullet constraint named in an earlier critique",
       "It skips feedback",
       "It uses a bigger model"
      ],
      "optsKn": [
       "ಅದು ವೇಗದ ಕೋಡ್",
       "ಹಿಂದಿನ critique ಹೆಸರಿಸಿದ 3-bullet ನಿರ್ಬಂಧವನ್ನು ಮುಂದೆ ಒಯ್ಯುತ್ತದೆ",
       "ಅದು feedback ಬಿಡುತ್ತದೆ",
       "ಅದು ದೊಡ್ಡ ಮಾದರಿ ಬಳಸುತ್ತದೆ"
      ],
      "correct": 1
     },
     {
      "q": "Why is pure self-feedback weak for factual claims?",
      "qKn": "ವಾಸ್ತವ ಹೇಳಿಕೆಗಳಿಗೆ ಶುದ್ಧ ಸ್ವಯಂ-feedback ಏಕೆ ದುರ್ಬಲ?",
      "opts": [
       "It cannot parse text",
       "The critic may share the generator's mistaken belief",
       "It always rejects claims",
       "It needs training"
      ],
      "optsKn": [
       "ಅದು ಪಠ್ಯ parse ಮಾಡಲಾರದು",
       "Critic generator ನ ತಪ್ಪು ನಂಬಿಕೆ ಹಂಚಿಕೊಳ್ಳಬಹುದು",
       "ಅದು ಯಾವಾಗಲೂ ಹೇಳಿಕೆಗಳನ್ನು ತಿರಸ್ಕರಿಸುತ್ತದೆ",
       "ಅದಕ್ಕೆ ತರಬೇತಿ ಬೇಕು"
      ],
      "correct": 1
     }
    ]
   }
  }
 ]
};
