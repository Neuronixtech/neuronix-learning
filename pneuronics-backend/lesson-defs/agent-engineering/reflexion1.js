module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6066020ed05b321514",
 "order": 0,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Reflexion: Verbal Reinforcement Learning (Part 1 of 3) — Actor, Evaluator and Why Retry Alone Learns Nothing",
 "titleKn": "Reflexion: ಮೌಖಿಕ ಬಲವರ್ಧನೆ ಕಲಿಕೆ (ಭಾಗ 1 / 3) — Actor, Evaluator ಮತ್ತು ಬರಿಯ Retry ಏಕೆ ಏನನ್ನೂ ಕಲಿಯುವುದಿಲ್ಲ",
 "desc": "Learn the Reflexion loop, build the Actor and a scalar Evaluator, compare scalar, heuristic and self-evaluators, separate operational from strategy failures, and measure what a bare retry and an unbounded memory actually do.",
 "descKn": "Reflexion loop ಕಲಿಯಿರಿ, Actor ಮತ್ತು scalar Evaluator ನಿರ್ಮಿಸಿ, scalar, heuristic ಮತ್ತು self-evaluators ಹೋಲಿಸಿ, ಕಾರ್ಯಾಚರಣೆಯ ಮತ್ತು ತಂತ್ರ ವೈಫಲ್ಯ ಬೇರ್ಪಡಿಸಿ, ಮತ್ತು ಬರಿಯ retry ಹಾಗೂ ಮಿತಿಯಿಲ್ಲದ memory ನಿಜವಾಗಿ ಏನು ಮಾಡುತ್ತವೆ ಎಂದು ಅಳೆಯಿರಿ.",
 "objectives": [
  "Explain Actor, Evaluator, Self-Reflector and episodic memory and the loop between them.",
  "Distinguish scalar, heuristic and self-evaluated feedback.",
  "Show with a run that a retry without carried information does not improve.",
  "Separate operational failures from strategy failures.",
  "Explain why unbounded reflection memory is a problem."
 ],
 "objectivesKn": [
  "Actor, Evaluator, Self-Reflector ಮತ್ತು episodic memory ಹಾಗೂ ಅವುಗಳ ನಡುವಿನ loop ವಿವರಿಸಿ.",
  "Scalar, heuristic ಮತ್ತು self-evaluated ಪ್ರತಿಕ್ರಿಯೆ ಬೇರ್ಪಡಿಸಿ.",
  "ವರ್ಗಾವಣೆಯಾಗದ ಮಾಹಿತಿಯ retry ಸುಧಾರಿಸುವುದಿಲ್ಲ ಎಂದು ಓಟದ ಮೂಲಕ ತೋರಿಸಿ.",
  "ಕಾರ್ಯಾಚರಣೆಯ ವೈಫಲ್ಯಗಳನ್ನು ತಂತ್ರ ವೈಫಲ್ಯಗಳಿಂದ ಬೇರ್ಪಡಿಸಿ.",
  "ಮಿತಿಯಿಲ್ಲದ reflection memory ಏಕೆ ಸಮಸ್ಯೆ ಎಂದು ವಿವರಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Reflexion: Verbal Reinforcement Learning (Part 1 of 3)",
    "textKn": "Reflexion: ಮೌಖಿಕ ಬಲವರ್ಧನೆ ಕಲಿಕೆ (ಭಾಗ 1 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 1 of 3: the Actor, the Evaluator, the three evaluator types, and why a bare retry learns nothing. Every output was genuinely produced by reflexion_1.py on Python 3.14.5. The Actor is scripted and the \"self-evaluator\" in section 3 is a stub that shares the generator's belief table to illustrate the structural problem; it is not an LLM and shows nothing about how real models evaluate. The Reflector and memory arrive in Part 2. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ ಮೊದಲನೆಯದು: Actor, Evaluator, ಮೂರು ವಿಧದ evaluators, ಮತ್ತು ಬರಿಯ retry ಏಕೆ ಏನನ್ನೂ ಕಲಿಯುವುದಿಲ್ಲ. ಎಲ್ಲಾ output reflexion_1.py ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. Actor ಸ್ಕ್ರಿಪ್ಟ್ ಮಾಡಿದ್ದು, ಮತ್ತು ವಿಭಾಗ 3 ರ \"self-evaluator\" ರಚನಾತ್ಮಕ ಸಮಸ್ಯೆ ವಿವರಿಸಲು generator ನ ನಂಬಿಕೆ ಕೋಷ್ಟಕವನ್ನೇ ಹಂಚಿಕೊಳ್ಳುವ ಬದಲಿ; ಅದು LLM ಅಲ್ಲ, ನಿಜವಾದ ಮಾದರಿಗಳು ಹೇಗೆ ಮೌಲ್ಯಮಾಪನ ಮಾಡುತ್ತವೆ ಎಂಬುದರ ಬಗ್ಗೆ ಏನನ್ನೂ ತೋರಿಸುವುದಿಲ್ಲ. Reflector ಮತ್ತು memory ಭಾಗ 2 ರಲ್ಲಿ ಬರುತ್ತವೆ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Learning Without Gradients",
    "textKn": "Gradients ಇಲ್ಲದ ಕಲಿಕೆ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "The Core Idea",
    "headingKn": "ಮುಖ್ಯ ಆಲೋಚನೆ",
    "bodyEn": "An agent tries a task and fails. Gradient-based training would eventually change the model's parameters. Reflexion asks something simpler: can the agent describe what went wrong and use that description in another attempt? The runtime loop is Act, Evaluate, Reflect, Remember, Retry. The Actor attempts the task. The Evaluator decides whether it worked. The Self-Reflector turns a failure into an actionable natural-language lesson. Episodic memory carries that lesson into a fresh attempt. The model weights stay fixed; what changes is the context the next trial sees.",
    "bodyKn": "Agent ಒಂದು ಕಾರ್ಯ ಪ್ರಯತ್ನಿಸಿ ವಿಫಲವಾಗುತ್ತದೆ. Gradient ಆಧಾರಿತ ತರಬೇತಿ ಕೊನೆಗೆ ಮಾದರಿಯ ಪ್ಯಾರಾಮೀಟರ್‌ಗಳನ್ನು ಬದಲಿಸುತ್ತದೆ. Reflexion ಸರಳವಾದದ್ದನ್ನು ಕೇಳುತ್ತದೆ: ಏನು ತಪ್ಪಾಯಿತು ಎಂದು agent ವಿವರಿಸಿ ಆ ವಿವರಣೆಯನ್ನು ಇನ್ನೊಂದು ಪ್ರಯತ್ನದಲ್ಲಿ ಬಳಸಬಹುದೇ? Runtime loop: Act, Evaluate, Reflect, Remember, Retry. Actor ಕಾರ್ಯ ಪ್ರಯತ್ನಿಸುತ್ತದೆ. Evaluator ಅದು ಕೆಲಸ ಮಾಡಿತೇ ಎಂದು ನಿರ್ಧರಿಸುತ್ತದೆ. Self-Reflector ವೈಫಲ್ಯವನ್ನು ಕ್ರಿಯಾತ್ಮಕ ಸ್ವಾಭಾವಿಕ ಭಾಷೆ ಪಾಠವಾಗಿ ಪರಿವರ್ತಿಸುತ್ತದೆ. Episodic memory ಆ ಪಾಠವನ್ನು ಹೊಸ ಪ್ರಯತ್ನಕ್ಕೆ ಒಯ್ಯುತ್ತದೆ. ಮಾದರಿಯ weights ಸ್ಥಿರ; ಬದಲಾಗುವುದು ಮುಂದಿನ ಸುತ್ತು ನೋಡುವ context."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "The Reflexion Loop",
    "headingKn": "Reflexion Loop",
    "svgCode": "<svg viewBox=\"0 0 300 215\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\">\n  <rect width=\"300\" height=\"215\" rx=\"8\" fill=\"#0f172a\"/>\n  <text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">Reflexion: Act, Evaluate, Reflect, Remember, Retry</text>\n  <rect x=\"60\" y=\"24\" width=\"180\" height=\"22\" rx=\"4\" fill=\"#1e293b\" stroke=\"#60a5fa\"/><text x=\"150\" y=\"39\" fill=\"#93c5fd\" text-anchor=\"middle\">ACTOR: fresh attempt (task + memory)</text>\n  <path d=\"M150,46 V56\" stroke=\"#475569\"/>\n  <rect x=\"60\" y=\"58\" width=\"180\" height=\"22\" rx=\"4\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"150\" y=\"73\" fill=\"#6ee7b7\" text-anchor=\"middle\">EVALUATOR: did it work?</text>\n  <path d=\"M150,80 V90\" stroke=\"#475569\"/>\n  <rect x=\"20\" y=\"92\" width=\"110\" height=\"22\" rx=\"4\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"75\" y=\"107\" fill=\"#fde68a\" text-anchor=\"middle\">PASS: return</text>\n  <rect x=\"170\" y=\"92\" width=\"110\" height=\"22\" rx=\"4\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"225\" y=\"107\" fill=\"#fecaca\" text-anchor=\"middle\">FAIL: reflect</text>\n  <path d=\"M225,114 V124\" stroke=\"#475569\"/>\n  <rect x=\"130\" y=\"126\" width=\"150\" height=\"22\" rx=\"4\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"205\" y=\"141\" fill=\"#c4b5fd\" text-anchor=\"middle\">SELF-REFLECTOR: why + what</text>\n  <path d=\"M205,148 V158\" stroke=\"#475569\"/>\n  <rect x=\"130\" y=\"160\" width=\"150\" height=\"22\" rx=\"4\" fill=\"#1e293b\" stroke=\"#fbbf24\"/><text x=\"205\" y=\"175\" fill=\"#fde68a\" text-anchor=\"middle\">EPISODIC MEMORY (bounded)</text>\n  <path d=\"M130,171 C40,171 40,35 60,35\" stroke=\"#f87171\" fill=\"none\"/>\n  <text x=\"150\" y=\"203\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">no weights change: the context of the next trial changes</text>\n</svg>",
    "captionEn": "Failure becomes a lesson, the lesson is remembered, and the next attempt starts fresh with that lesson in context.",
    "captionKn": "ವೈಫಲ್ಯ ಪಾಠವಾಗುತ್ತದೆ, ಪಾಠ ನೆನಪಿನಲ್ಲಿರುತ್ತದೆ, ಮತ್ತು ಮುಂದಿನ ಪ್ರಯತ್ನ ಆ ಪಾಠದೊಂದಿಗೆ context ನಲ್ಲಿ ಹೊಸದಾಗಿ ಆರಂಭವಾಗುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Fresh Retry, Not a Longer Bad Trajectory",
    "headingKn": "ಹೊಸ ಪ್ರಯತ್ನ, ಉದ್ದದ ಕೆಟ್ಟ trajectory ಅಲ್ಲ",
    "bodyEn": "The next trial starts a new trajectory and receives the lessons, rather than extending the failed one. A trajectory built on a wrong first assumption keeps inheriting that assumption; discarding the working state while keeping the lesson separates experience worth keeping from temporary reasoning worth dropping.",
    "bodyKn": "ಮುಂದಿನ ಸುತ್ತು ಹೊಸ trajectory ಆರಂಭಿಸಿ ಪಾಠಗಳನ್ನು ಪಡೆಯುತ್ತದೆ, ವಿಫಲವಾದದ್ದನ್ನು ವಿಸ್ತರಿಸುವುದಿಲ್ಲ. ತಪ್ಪು ಮೊದಲ ಊಹೆಯ ಮೇಲೆ ಕಟ್ಟಿದ trajectory ಆ ಊಹೆಯನ್ನು ಉತ್ತರಾಧಿಕಾರವಾಗಿ ಪಡೆಯುತ್ತಲೇ ಇರುತ್ತದೆ; ಪಾಠ ಉಳಿಸಿಕೊಂಡು ಕೆಲಸದ ಸ್ಥಿತಿ ಬಿಸಾಡುವುದು ಉಳಿಸಿಕೊಳ್ಳಬೇಕಾದ ಅನುಭವ ಮತ್ತು ಬಿಡಬೇಕಾದ ತಾತ್ಕಾಲಿಕ ತರ್ಕವನ್ನು ಬೇರ್ಪಡಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Building the First Half",
    "textKn": "ಮೊದಲ ಅರ್ಧ ನಿರ್ಮಿಸುವುದು",
    "level": "H2"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "reflexion_1.py",
    "headingEn": "Candidate, Actor and Evaluator",
    "headingKn": "Candidate, Actor ಮತ್ತು Evaluator",
    "descEn": "The task: produce exactly three integers that sum to 24. Candidate holds an attempt and its total. The Actor takes memory as an input but reads only the most recent reflection (Part 2 shows why that is not enough). The Evaluator is a scalar check against ground truth, kept separate from generation.",
    "descKn": "ಕಾರ್ಯ: ಮೊತ್ತ 24 ಆಗುವ ಸರಿಯಾಗಿ ಮೂರು ಪೂರ್ಣಾಂಕಗಳನ್ನು ರಚಿಸಿ. Candidate ಒಂದು ಪ್ರಯತ್ನ ಮತ್ತು ಅದರ ಮೊತ್ತ ಹೊಂದಿದೆ. Actor memory ಅನ್ನು ಇನ್‌ಪುಟ್ ಆಗಿ ತೆಗೆದುಕೊಳ್ಳುತ್ತದೆ ಆದರೆ ಇತ್ತೀಚಿನ reflection ಮಾತ್ರ ಓದುತ್ತದೆ (ಇದು ಏಕೆ ಸಾಕಾಗದು ಎಂದು ಭಾಗ 2 ತೋರಿಸುತ್ತದೆ). Evaluator ನೆಲದ ಸತ್ಯದ ವಿರುದ್ಧ scalar ಪರಿಶೀಲನೆ, ಉತ್ಪಾದನೆಯಿಂದ ಪ್ರತ್ಯೇಕವಾಗಿಡಲಾಗಿದೆ.",
    "code": "@dataclass\nclass Candidate:\n    values: list[int]\n\n    @property\n    def total(self) -> int:\n        return sum(self.values)\n\n\nclass Actor:\n    \"\"\"Part 1 Actor: reads only the most recent reflection. (Part 2 shows what is wrong with that.)\"\"\"\n\n    def act(self, target: int, reflections: list[str]) -> Candidate:\n        if not reflections:\n            return Candidate([4, 4, 4])\n        previous = reflections[-1]\n        if \"too low\" in previous:\n            return Candidate([target // 3 - 1, target // 3, target // 3])\n        if \"too high\" in previous:\n            return Candidate([target // 3, target // 3, target // 3])\n        return Candidate([4, 4, 4])\n\n\nclass Evaluator:\n    def binary(self, candidate: Candidate, target: int) -> bool:\n        return candidate.total == target"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "reflexion_1.py",
    "headingEn": "Evaluator types, failure classes and the experiments",
    "headingKn": "Evaluator ವಿಧಗಳು, ವೈಫಲ್ಯ ವರ್ಗಗಳು ಮತ್ತು ಪ್ರಯೋಗಗಳು",
    "descEn": "A scalar evaluator (a unit test), a heuristic evaluator (the same call repeated five times), and a self-evaluator stub that deliberately uses the same belief table as its generator. classify_failure separates operational failures, which need a retry policy, from strategy failures, which deserve a reflection. main() runs five experiments.",
    "descKn": "Scalar evaluator (unit test), heuristic evaluator (ಒಂದೇ ಕರೆ ಐದು ಬಾರಿ ಪುನರಾವರ್ತನೆ), ಮತ್ತು ತನ್ನ generator ನ ಅದೇ ನಂಬಿಕೆ ಕೋಷ್ಟಕ ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ಬಳಸುವ self-evaluator ಬದಲಿ. classify_failure ಕಾರ್ಯಾಚರಣೆಯ ವೈಫಲ್ಯಗಳನ್ನು, retry ನೀತಿ ಬೇಕಾದವು, ತಂತ್ರ ವೈಫಲ್ಯಗಳಿಂದ, reflection ಅರ್ಹವಾದವು, ಬೇರ್ಪಡಿಸುತ್ತದೆ. main() ಐದು ಪ್ರಯೋಗ ಚಲಾಯಿಸುತ್ತದೆ.",
    "code": "# --- three evaluator types -------------------------------------------------\n\ndef scalar_unit_test(add_fn):\n    \"\"\"Scalar evaluator: ground truth, like a unit test returning PASS or FAIL.\"\"\"\n    return \"PASS\" if add_fn(2, 3) == 5 else \"FAIL\"\n\n\ndef heuristic_stuck(actions, window=5):\n    \"\"\"Heuristic evaluator: not proof of failure, a failure signature (the same action repeated).\"\"\"\n    return len(actions) >= window and len(set(actions[-window:])) == 1\n\n\nKNOWN_BELIEF = {\"python creator\": \"Microsoft\"}  # a belief the generator and its self-critic both hold\n\n\ndef generator_claim(topic):\n    return f\"Python was created by {KNOWN_BELIEF[topic]}.\"\n\n\ndef self_evaluator(topic, claim):\n    \"\"\"Self-evaluator that consults the SAME belief as the generator: it cannot disagree with it.\"\"\"\n    return \"approved\" if KNOWN_BELIEF[topic] in claim else \"rejected\"\n\n\ndef classify_failure(error: str) -> str:\n    \"\"\"Operational failures need a retry policy; actionable strategy failures deserve a reflection.\"\"\"\n    operational = (\"503\", \"timeout\", \"rate limit\", \"connection\", \"unavailable\")\n    return \"operational retry (backoff)\" if any(w in error.lower() for w in operational) else \"reflect (strategy failure)\"\n\n\ndef words(items):\n    return sum(len(i.split()) for i in items)\n\n\ndef section(t):\n    print(f\"\\n--- {t} ---\")\n\n\ndef main():\n    target = 24\n    actor, evaluator = Actor(), Evaluator()\n\n    section(\"1. The Part 1 snapshot\")\n    c = actor.act(target, [])\n    print(\"Candidate:\", c.values)\n    print(\"Total:\", c.total)\n    print(\"Passed:\", evaluator.binary(c, target))\n\n    section(\"2. Blind retry: three attempts, no memory\")\n    for trial in range(1, 4):\n        c = actor.act(target, [])\n        print(f\"Trial {trial}: {c.values} total={c.total} passed={evaluator.binary(c, target)}\")\n\n    section(\"3. The three evaluator types\")\n    print(\"scalar     : add(a, b) = a - b     ->\", scalar_unit_test(lambda a, b: a - b))\n    print(\"scalar     : add(a, b) = a + b     ->\", scalar_unit_test(lambda a, b: a + b))\n    calls = [\"search('weather')\"] * 5\n    print(\"heuristic  : same call x5          ->\", \"STUCK\" if heuristic_stuck(calls) else \"ok\")\n    print(\"heuristic  : calls differ          ->\", \"STUCK\" if heuristic_stuck([\"a\", \"b\", \"a\", \"b\", \"a\"]) else \"ok\")\n    claim = generator_claim(\"python creator\")\n    print(\"generator  :\", claim)\n    print(\"self-eval  :\", self_evaluator(\"python creator\", claim), \"(it shares the generator's belief)\")\n\n    section(\"4. Operational failure versus strategy failure\")\n    for err in (\"HTTP 503 Service Unavailable\", \"connection timeout\", \"no such column: customer_name\", \"wrong total: 23 != 24\"):\n        print(f\"{err:<34} -> {classify_failure(err)}\")\n\n    section(\"5. What unbounded reflection memory costs (word counts, not tokens)\")\n    memory = []\n    for n in range(1, 201):\n        memory.append(f\"Previous total {n} was too low for target 24; increase the values.\")\n        if n in (1, 10, 50, 100, 200):\n            print(f\"after {n:>3} reflections the prompt carries {words(memory):>5} words of reflections\")\n    print(\"each trial adds the same ~12 words, so the prompt grows linearly and old lessons never expire\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. The Part 1 snapshot ---\nCandidate: [4, 4, 4]\nTotal: 12\nPassed: False\n\n--- 2. Blind retry: three attempts, no memory ---\nTrial 1: [4, 4, 4] total=12 passed=False\nTrial 2: [4, 4, 4] total=12 passed=False\nTrial 3: [4, 4, 4] total=12 passed=False\n\n--- 3. The three evaluator types ---\nscalar     : add(a, b) = a - b     -> FAIL\nscalar     : add(a, b) = a + b     -> PASS\nheuristic  : same call x5          -> STUCK\nheuristic  : calls differ          -> ok\ngenerator  : Python was created by Microsoft.\nself-eval  : approved (it shares the generator's belief)\n\n--- 4. Operational failure versus strategy failure ---\nHTTP 503 Service Unavailable       -> operational retry (backoff)\nconnection timeout                 -> operational retry (backoff)\nno such column: customer_name      -> reflect (strategy failure)\nwrong total: 23 != 24              -> reflect (strategy failure)\n\n--- 5. What unbounded reflection memory costs (word counts, not tokens) ---\nafter   1 reflections the prompt carries    12 words of reflections\nafter  10 reflections the prompt carries   120 words of reflections\nafter  50 reflections the prompt carries   600 words of reflections\nafter 100 reflections the prompt carries  1200 words of reflections\nafter 200 reflections the prompt carries  2400 words of reflections\neach trial adds the same ~12 words, so the prompt grows linearly and old lessons never expire"
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
    "headingEn": "A Failed First Attempt, and a Blind Retry That Cannot Improve",
    "headingKn": "ವಿಫಲ ಮೊದಲ ಪ್ರಯತ್ನ, ಮತ್ತು ಸುಧಾರಿಸಲಾರದ ಕುರುಡು Retry",
    "bodyEn": "Section 1 shows the first attempt: [4, 4, 4], total 12, passed False. The failure is deliberate; a first attempt that succeeded would leave nothing to demonstrate. Section 2 retries three times with an empty memory each time and gets [4, 4, 4] three times. The Actor is deterministic and sees nothing new, so retrying is not learning. This is the baseline that Part 2 compares against.",
    "bodyKn": "ವಿಭಾಗ 1 ಮೊದಲ ಪ್ರಯತ್ನ ತೋರಿಸುತ್ತದೆ: [4, 4, 4], ಮೊತ್ತ 12, passed False. ವೈಫಲ್ಯ ಉದ್ದೇಶಪೂರ್ವಕ; ಯಶಸ್ವಿಯಾದ ಮೊದಲ ಪ್ರಯತ್ನ ತೋರಿಸಲು ಏನನ್ನೂ ಉಳಿಸುತ್ತಿರಲಿಲ್ಲ. ವಿಭಾಗ 2 ಪ್ರತಿ ಬಾರಿ ಖಾಲಿ memory ಯೊಂದಿಗೆ ಮೂರು ಬಾರಿ ಮರುಪ್ರಯತ್ನಿಸಿ [4, 4, 4] ಮೂರು ಬಾರಿ ಪಡೆಯುತ್ತದೆ. Actor ನಿರ್ಧಾರಾತ್ಮಕ ಮತ್ತು ಹೊಸದೇನನ್ನೂ ನೋಡುವುದಿಲ್ಲ, ಆದ್ದರಿಂದ retry ಕಲಿಕೆ ಅಲ್ಲ. ಭಾಗ 2 ಹೋಲಿಸುವ baseline ಇದು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Three Evaluators and Their Different Strengths",
    "headingKn": "ಮೂರು Evaluators ಮತ್ತು ಅವುಗಳ ಬೇರೆ ಬೇರೆ ಶಕ್ತಿ",
    "bodyEn": "Section 3 runs them. The scalar test returns FAIL for a - b and PASS for a + b: ground truth, no judgment needed. The heuristic flags five identical calls as STUCK and does not flag a varied sequence; it recognises a failure signature, not proof the answer is wrong. The self-evaluator stub approved \"Python was created by Microsoft.\" because it consults the same belief as the generator. That is the structural weakness, a self-critic can inherit the generator's mistake, and it is why external verification beats self-judgment where it exists. Remember the stub illustrates the structure; it says nothing about any real model.",
    "bodyKn": "ವಿಭಾಗ 3 ಅವುಗಳನ್ನು ಚಲಾಯಿಸುತ್ತದೆ. Scalar test a - b ಗೆ FAIL ಮತ್ತು a + b ಗೆ PASS ನೀಡುತ್ತದೆ: ನೆಲದ ಸತ್ಯ, ವಿವೇಚನೆ ಬೇಡ. Heuristic ಐದು ಒಂದೇ ಕರೆಗಳನ್ನು STUCK ಎಂದು ಗುರುತಿಸುತ್ತದೆ ಮತ್ತು ವೈವಿಧ್ಯಮಯ ಅನುಕ್ರಮವನ್ನು ಗುರುತಿಸುವುದಿಲ್ಲ; ಅದು ವೈಫಲ್ಯ ಚಿಹ್ನೆ ಗುರುತಿಸುತ್ತದೆ, ಉತ್ತರ ತಪ್ಪು ಎಂಬ ಪುರಾವೆಯಲ್ಲ. Self-evaluator ಬದಲಿ \"Python was created by Microsoft.\" ಅನ್ನು ಅನುಮೋದಿಸಿತು, ಏಕೆಂದರೆ ಅದು generator ನ ಅದೇ ನಂಬಿಕೆಯನ್ನು ಸಂಪರ್ಕಿಸುತ್ತದೆ. ಅದೇ ರಚನಾತ್ಮಕ ದೌರ್ಬಲ್ಯ: self-critic generator ನ ತಪ್ಪನ್ನು ಉತ್ತರಾಧಿಕಾರವಾಗಿ ಪಡೆಯಬಹುದು, ಮತ್ತು ಅದಕ್ಕಾಗಿಯೇ ಲಭ್ಯವಿರುವಲ್ಲಿ ಬಾಹ್ಯ ಪರಿಶೀಲನೆ ಸ್ವಯಂ-ವಿವೇಚನೆಗಿಂತ ಉತ್ತಮ. ಬದಲಿ ರಚನೆಯನ್ನು ವಿವರಿಸುತ್ತದೆ ಎಂಬುದನ್ನು ನೆನಪಿಡಿ; ಯಾವುದೇ ನಿಜವಾದ ಮಾದರಿಯ ಬಗ್ಗೆ ಏನನ್ನೂ ಹೇಳುವುದಿಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Not Every Failure Deserves a Reflection",
    "headingKn": "ಪ್ರತಿ ವೈಫಲ್ಯಕ್ಕೂ Reflection ಅರ್ಹವಲ್ಲ",
    "bodyEn": "Section 4 classifies four errors. \"HTTP 503 Service Unavailable\" and \"connection timeout\" are operational: back off and retry, because the agent's reasoning was fine and a stored \"never use this API\" would be wrong. \"no such column: customer_name\" and \"wrong total: 23 != 24\" are strategy failures: a lesson can change what the next attempt does. The classifier is a keyword rule, so it is a sketch of the gate, not a production error taxonomy.",
    "bodyKn": "ವಿಭಾಗ 4 ನಾಲ್ಕು ದೋಷಗಳನ್ನು ವರ್ಗೀಕರಿಸುತ್ತದೆ. \"HTTP 503 Service Unavailable\" ಮತ್ತು \"connection timeout\" ಕಾರ್ಯಾಚರಣೆಯವು: ಹಿಂದೆ ಸರಿದು ಮರುಪ್ರಯತ್ನಿಸಿ, ಏಕೆಂದರೆ agent ನ ತರ್ಕ ಸರಿಯಿತ್ತು ಮತ್ತು ಸಂಗ್ರಹಿಸಿದ \"ಈ API ಎಂದೂ ಬಳಸಬೇಡ\" ತಪ್ಪಾಗುತ್ತಿತ್ತು. \"no such column: customer_name\" ಮತ್ತು \"wrong total: 23 != 24\" ತಂತ್ರ ವೈಫಲ್ಯಗಳು: ಪಾಠ ಮುಂದಿನ ಪ್ರಯತ್ನದ ಕ್ರಿಯೆಯನ್ನು ಬದಲಿಸಬಹುದು. ವರ್ಗೀಕರಣ ಕೀವರ್ಡ್ ನಿಯಮ, ಆದ್ದರಿಂದ ಅದು ದ್ವಾರದ ರೇಖಾಚಿತ್ರ, production ದೋಷ ವರ್ಗೀಕರಣವಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Computed: Unbounded Memory Grows Without Limit",
    "headingKn": "ನಿಜವಾಗಿ ಲೆಕ್ಕಿಸಿದ್ದು: ಮಿತಿಯಿಲ್ಲದ Memory ಮಿತಿಯಿಲ್ಲದೆ ಬೆಳೆಯುತ್ತದೆ",
    "bodyEn": "Section 5 appends the same 12-word reflection for each trial. After 1 reflection the prompt carries 12 words, after 10 it carries 120, after 100 it carries 1,200 and after 200 it carries 2,400. Growth is linear, nothing ever expires, and in a real run the reflections would also drift into duplicates, contradictions and stale advice. This is memory rot, and it is why Part 2 builds a bounded memory and Part 3 adds a time to live. Word counts here are a stand-in for tokens.",
    "bodyKn": "ವಿಭಾಗ 5 ಪ್ರತಿ ಸುತ್ತಿಗೆ ಅದೇ 12-ಪದಗಳ reflection ಸೇರಿಸುತ್ತದೆ. 1 reflection ನಂತರ prompt 12 ಪದ ಹೊತ್ತಿರುತ್ತದೆ, 10 ನಂತರ 120, 100 ನಂತರ 1,200 ಮತ್ತು 200 ನಂತರ 2,400. ಬೆಳವಣಿಗೆ ರೇಖೀಯ, ಯಾವುದೂ ಎಂದೂ ಮುಗಿಯುವುದಿಲ್ಲ, ಮತ್ತು ನಿಜವಾದ ಓಟದಲ್ಲಿ reflections ನಕಲುಗಳು, ವಿರೋಧಾಭಾಸಗಳು ಮತ್ತು ಹಳೆಯ ಸಲಹೆಗಳಾಗಿ ಜಾರುತ್ತವೆ. ಇದೇ memory rot, ಮತ್ತು ಅದಕ್ಕಾಗಿಯೇ ಭಾಗ 2 ಮಿತಿಯ memory ನಿರ್ಮಿಸುತ್ತದೆ ಮತ್ತು ಭಾಗ 3 time to live ಸೇರಿಸುತ್ತದೆ. ಇಲ್ಲಿನ ಪದ ಎಣಿಕೆ tokens ಗೆ ಬದಲಿ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "When Reflexion Fits",
    "textKn": "Reflexion ಯಾವಾಗ ಹೊಂದುತ್ತದೆ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Three Conditions",
    "headingKn": "ಮೂರು ಷರತ್ತುಗಳು",
    "bodyEn": "Reflexion fits when failure is detectable, failure teaches something actionable, and another attempt is possible. Code with tests, structured generation with a validator and database queries with an executor all qualify. It is weak when feedback does not exist, when the failure is external (a timeout is not fixed by remembering it), when a retry cannot change the outcome, or when stored reflections become stale. It also costs more: an Actor call plus an Evaluator, a Reflector and often another Actor call.",
    "bodyKn": "ವೈಫಲ್ಯ ಪತ್ತೆಹಚ್ಚಬಹುದಾದಾಗ, ವೈಫಲ್ಯ ಕ್ರಿಯಾತ್ಮಕವಾದದ್ದನ್ನು ಕಲಿಸಿದಾಗ ಮತ್ತು ಇನ್ನೊಂದು ಪ್ರಯತ್ನ ಸಾಧ್ಯವಾದಾಗ Reflexion ಹೊಂದುತ್ತದೆ. Tests ಇರುವ ಕೋಡ್, validator ಇರುವ ರಚನಾತ್ಮಕ ಉತ್ಪಾದನೆ ಮತ್ತು executor ಇರುವ ಡೇಟಾಬೇಸ್ queries ಎಲ್ಲವೂ ಅರ್ಹ. ಪ್ರತಿಕ್ರಿಯೆ ಇಲ್ಲದಿದ್ದಾಗ, ವೈಫಲ್ಯ ಬಾಹ್ಯವಾದಾಗ (timeout ನೆನಪಿಟ್ಟುಕೊಂಡು ಸರಿಪಡಿಸಲಾಗದು), retry ಫಲಿತಾಂಶ ಬದಲಿಸಲಾರದಾಗ, ಅಥವಾ ಸಂಗ್ರಹಿಸಿದ reflections ಹಳೆಯದಾದಾಗ ಅದು ದುರ್ಬಲ. ಅದು ಹೆಚ್ಚು ವೆಚ್ಚವೂ ಆಗುತ್ತದೆ: Actor ಕರೆ ಜೊತೆ Evaluator, Reflector ಮತ್ತು ಆಗಾಗ್ಗೆ ಇನ್ನೊಂದು Actor ಕರೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "Retraining a model after every failure is impractical, but adapting within a task is cheap. A readable lesson can be inspected, edited or deleted, which is not true of a weight update. Coding agents that read a failing test and avoid the same mistake on the next patch are the clearest example.",
    "bodyKn": "ಪ್ರತಿ ವೈಫಲ್ಯದ ನಂತರ ಮಾದರಿಯನ್ನು ಮರುತರಬೇತಿ ಮಾಡುವುದು ಅಪ್ರಾಯೋಗಿಕ, ಆದರೆ ಕಾರ್ಯದೊಳಗೆ ಹೊಂದಿಕೊಳ್ಳುವುದು ಅಗ್ಗ. ಓದಬಹುದಾದ ಪಾಠವನ್ನು ಪರಿಶೀಲಿಸಬಹುದು, ಸಂಪಾದಿಸಬಹುದು ಅಥವಾ ಅಳಿಸಬಹುದು; weight ನವೀಕರಣಕ್ಕೆ ಇದು ಸಾಧ್ಯವಿಲ್ಲ. ವಿಫಲ test ಓದಿ ಮುಂದಿನ patch ನಲ್ಲಿ ಅದೇ ತಪ್ಪು ತಪ್ಪಿಸುವ coding agents ಸ್ಪಷ್ಟ ಉದಾಹರಣೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Where This Appears in AI Systems",
    "headingKn": "AI ವ್ಯವಸ್ಥೆಗಳಲ್ಲಿ ಇದು ಎಲ್ಲಿ ಕಾಣುತ್ತದೆ",
    "bodyEn": "A coding agent keeps \"I assumed the denominator was never zero, handle b == 0 next time\" across patch attempts. A SQL agent keeps \"inspect the schema before joining\". A web agent keeps \"the cookie banner blocks the login button\". All are strategy lessons attached to a verifiable failure, passed into the next attempt's prompt.",
    "bodyKn": "Coding agent patch ಪ್ರಯತ್ನಗಳ ನಡುವೆ \"ಛೇದ ಎಂದೂ ಸೊನ್ನೆಯಲ್ಲ ಎಂದು ಊಹಿಸಿದೆ, ಮುಂದಿನ ಬಾರಿ b == 0 ನಿರ್ವಹಿಸು\" ಎಂಬುದನ್ನು ಉಳಿಸಿಕೊಳ್ಳುತ್ತದೆ. SQL agent \"join ಮಾಡುವ ಮೊದಲು schema ಪರಿಶೀಲಿಸು\" ಎಂಬುದನ್ನು ಉಳಿಸಿಕೊಳ್ಳುತ್ತದೆ. Web agent \"cookie banner ಲಾಗಿನ್ ಬಟನ್ ತಡೆಯುತ್ತದೆ\" ಎಂಬುದನ್ನು ಉಳಿಸಿಕೊಳ್ಳುತ್ತದೆ. ಎಲ್ಲವೂ ಪರಿಶೀಲಿಸಬಹುದಾದ ವೈಫಲ್ಯಕ್ಕೆ ಜೋಡಿಸಿದ ತಂತ್ರ ಪಾಠಗಳು, ಮುಂದಿನ ಪ್ರಯತ್ನದ prompt ಗೆ ನೀಡಲ್ಪಡುತ್ತವೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"Reflexion means asking the LLM twice.\" Section 2 is that: three attempts, zero information passed between them, three identical failures. The defining feature is the pipeline of failure evidence, an explicit reflection, persistent memory and a fresh attempt conditioned on it.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"Reflexion ಎಂದರೆ LLM ಅನ್ನು ಎರಡು ಬಾರಿ ಕೇಳುವುದು.\" ವಿಭಾಗ 2 ಅದೇ: ಮೂರು ಪ್ರಯತ್ನ, ಅವುಗಳ ನಡುವೆ ಶೂನ್ಯ ಮಾಹಿತಿ ವರ್ಗಾವಣೆ, ಮೂರು ಒಂದೇ ವೈಫಲ್ಯ. ನಿರ್ಣಾಯಕ ಲಕ್ಷಣ ವೈಫಲ್ಯ ಸಾಕ್ಷ್ಯ, ಸ್ಪಷ್ಟ reflection, ಶಾಶ್ವತ memory ಮತ್ತು ಅದಕ್ಕೆ ಅನುಗುಣವಾದ ಹೊಸ ಪ್ರಯತ್ನದ ಪೈಪ್‌ಲೈನ್."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Actor: performs the task. Evaluator: judges the trajectory. Self-Reflector: turns failure into a lesson. Episodic memory: lessons carried between trials. Verbal reinforcement: learning through language in context instead of gradients. Scalar evaluator: ground-truth signal. Heuristic evaluator: failure signature. Self-evaluator: the model judging its own output. Memory rot: stale, duplicated or contradictory memory.",
    "bodyKn": "Actor: ಕಾರ್ಯ ನಿರ್ವಹಿಸುತ್ತದೆ. Evaluator: trajectory ಮೌಲ್ಯಮಾಪನ ಮಾಡುತ್ತದೆ. Self-Reflector: ವೈಫಲ್ಯವನ್ನು ಪಾಠವಾಗಿಸುತ್ತದೆ. Episodic memory: ಸುತ್ತುಗಳ ನಡುವೆ ಒಯ್ಯುವ ಪಾಠಗಳು. Verbal reinforcement: gradients ಬದಲು context ನಲ್ಲಿ ಭಾಷೆಯ ಮೂಲಕ ಕಲಿಕೆ. Scalar evaluator: ನೆಲದ ಸತ್ಯ ಸಂಕೇತ. Heuristic evaluator: ವೈಫಲ್ಯ ಚಿಹ್ನೆ. Self-evaluator: ಮಾದರಿ ತನ್ನ ಔಟ್‌ಪುಟ್ ಅನ್ನೇ ಮೌಲ್ಯಮಾಪನ ಮಾಡುವುದು. Memory rot: ಹಳೆಯ, ನಕಲು ಅಥವಾ ವಿರೋಧಾಭಾಸದ memory."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) Reflexion changes context, not weights. 2) Retry without carried information is not learning: 12, 12, 12. 3) Use ground truth where it exists; a self-evaluator can inherit the generator's belief. 4) Separate operational failures (retry) from strategy failures (reflect). 5) Unbounded memory grows linearly and never expires. 6) It fits when failure is detectable, actionable and retryable. Part 2 adds the Self-Reflector, bounded memory and the complete loop.",
    "bodyKn": "1) Reflexion context ಬದಲಿಸುತ್ತದೆ, weights ಅಲ್ಲ. 2) ವರ್ಗಾವಣೆಯಾಗದ ಮಾಹಿತಿಯ retry ಕಲಿಕೆ ಅಲ್ಲ: 12, 12, 12. 3) ನೆಲದ ಸತ್ಯ ಇರುವಲ್ಲಿ ಬಳಸಿ; self-evaluator generator ನ ನಂಬಿಕೆ ಉತ್ತರಾಧಿಕಾರವಾಗಿ ಪಡೆಯಬಹುದು. 4) ಕಾರ್ಯಾಚರಣೆಯ ವೈಫಲ್ಯ (retry) ಮತ್ತು ತಂತ್ರ ವೈಫಲ್ಯ (reflect) ಬೇರ್ಪಡಿಸಿ. 5) ಮಿತಿಯಿಲ್ಲದ memory ರೇಖೀಯವಾಗಿ ಬೆಳೆದು ಎಂದೂ ಮುಗಿಯುವುದಿಲ್ಲ. 6) ವೈಫಲ್ಯ ಪತ್ತೆಹಚ್ಚಬಹುದಾದ, ಕ್ರಿಯಾತ್ಮಕ ಮತ್ತು ಮರುಪ್ರಯತ್ನಿಸಬಹುದಾದಾಗ ಅದು ಹೊಂದುತ್ತದೆ. ಭಾಗ 2 Self-Reflector, ಮಿತಿಯ memory ಮತ್ತು ಸಂಪೂರ್ಣ loop ಸೇರಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What does Reflexion use instead of gradient updates between trials?",
      "qKn": "Trials ನಡುವೆ gradient ನವೀಕರಣದ ಬದಲು Reflexion ಏನು ಬಳಸುತ್ತದೆ?",
      "opts": [
       "Random search",
       "Natural-language reflections in episodic memory",
       "Larger networks",
       "Reward normalization"
      ],
      "optsKn": [
       "ಯಾದೃಚ್ಛಿಕ ಹುಡುಕಾಟ",
       "Episodic memory ಯಲ್ಲಿರುವ ಸ್ವಾಭಾವಿಕ ಭಾಷೆ reflections",
       "ದೊಡ್ಡ ನೆಟ್‌ವರ್ಕ್‌ಗಳು",
       "Reward ಸಾಮಾನ್ಯೀಕರಣ"
      ],
      "correct": 1
     },
     {
      "q": "Which component decides whether the Actor's trajectory succeeded?",
      "qKn": "Actor ನ trajectory ಯಶಸ್ವಿಯಾಯಿತೇ ಎಂದು ಯಾವ ಘಟಕ ನಿರ್ಧರಿಸುತ್ತದೆ?",
      "opts": [
       "Self-Reflector",
       "Episodic Memory",
       "Evaluator",
       "Planner"
      ],
      "optsKn": [
       "Self-Reflector",
       "Episodic Memory",
       "Evaluator",
       "Planner"
      ],
      "correct": 2
     },
     {
      "q": "A unit test returning PASS or FAIL is closest to which evaluator?",
      "qKn": "PASS ಅಥವಾ FAIL ಹಿಂತಿರುಗಿಸುವ unit test ಯಾವ evaluator ಗೆ ಹತ್ತಿರ?",
      "opts": [
       "Scalar evaluator",
       "Self-evaluator",
       "Heuristic evaluator",
       "Memory evaluator"
      ],
      "optsKn": [
       "Scalar evaluator",
       "Self-evaluator",
       "Heuristic evaluator",
       "Memory evaluator"
      ],
      "correct": 0
     },
     {
      "q": "In this lesson's section 2, what did three blind retries produce?",
      "qKn": "ಈ ಪಾಠದ ವಿಭಾಗ 2 ರಲ್ಲಿ ಮೂರು ಕುರುಡು retries ಏನು ನೀಡಿದವು?",
      "opts": [
       "12, 23, 24",
       "The same [4, 4, 4] with total 12 three times",
       "A crash",
       "24 on the second try"
      ],
      "optsKn": [
       "12, 23, 24",
       "ಒಂದೇ [4, 4, 4], ಮೊತ್ತ 12, ಮೂರು ಬಾರಿ",
       "Crash",
       "ಎರಡನೇ ಪ್ರಯತ್ನದಲ್ಲಿ 24"
      ],
      "correct": 1
     },
     {
      "q": "Why can unlimited episodic memory be harmful?",
      "qKn": "ಮಿತಿಯಿಲ್ಲದ episodic memory ಏಕೆ ಹಾನಿಕರ?",
      "opts": [
       "Python cannot store strings",
       "Reflections become stale, duplicated, contradictory and consume context",
       "Reflexion needs exactly one reflection",
       "Evaluators stop working"
      ],
      "optsKn": [
       "Python ಸ್ಟ್ರಿಂಗ್ ಸಂಗ್ರಹಿಸಲಾರದು",
       "Reflections ಹಳೆಯದಾಗುತ್ತವೆ, ನಕಲಾಗುತ್ತವೆ, ವಿರೋಧಿಸುತ್ತವೆ ಮತ್ತು context ಬಳಸುತ್ತವೆ",
       "Reflexion ಗೆ ಸರಿಯಾಗಿ ಒಂದು reflection ಬೇಕು",
       "Evaluators ಕೆಲಸ ನಿಲ್ಲಿಸುತ್ತವೆ"
      ],
      "correct": 1
     }
    ]
   }
  }
 ]
};
