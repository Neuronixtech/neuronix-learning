module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6066020ed05b321514",
 "order": 2,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Reflexion: Verbal Reinforcement Learning (Part 3 of 3) — Run, Prove, Break It and Production Patterns",
 "titleKn": "Reflexion: ಮೌಖಿಕ ಬಲವರ್ಧನೆ ಕಲಿಕೆ (ಭಾಗ 3 / 3) — ಚಲಾಯಿಸಿ, ಸಾಬೀತುಪಡಿಸಿ, ಮುರಿಯಿರಿ ಮತ್ತು Production ಮಾದರಿಗಳು",
 "desc": "Run the controlled Reflexion experiment, test other targets, sweep targets 3 to 60 and read what a perfect score does and does not mean, break the loop with a wrong evaluator, add memory expiry and a richer evaluation, and map failure modes and production patterns.",
 "descKn": "ನಿಯಂತ್ರಿತ Reflexion ಪ್ರಯೋಗ ಚಲಾಯಿಸಿ, ಇತರ ಗುರಿಗಳನ್ನು ಪರೀಕ್ಷಿಸಿ, 3 ರಿಂದ 60 ರ ಗುರಿಗಳ sweep ಮಾಡಿ ಪರಿಪೂರ್ಣ ಅಂಕ ಏನು ಅರ್ಥೈಸುತ್ತದೆ ಮತ್ತು ಅರ್ಥೈಸುವುದಿಲ್ಲ ಎಂದು ಓದಿ, ತಪ್ಪು evaluator ನಿಂದ loop ಮುರಿಯಿರಿ, memory ಮುಕ್ತಾಯ ಮತ್ತು ಶ್ರೀಮಂತ evaluation ಸೇರಿಸಿ, ಮತ್ತು ವೈಫಲ್ಯ ವಿಧಗಳು ಹಾಗೂ production ಮಾದರಿಗಳನ್ನು ನಕ್ಷೆ ಮಾಡಿ.",
 "objectives": [
  "Prove a Reflexion claim with a controlled no-reflection baseline.",
  "Test generalisation and explain what a perfect sweep does and does not show.",
  "Show how a systematically wrong evaluator corrupts the loop.",
  "Add time-to-live expiry and a richer evaluation to the memory loop.",
  "Map the failure modes of a Reflexion system and where each shows up."
 ],
 "objectivesKn": [
  "ನಿಯಂತ್ರಿತ reflection-ಇಲ್ಲದ baseline ನಿಂದ Reflexion ಹೇಳಿಕೆ ಸಾಬೀತುಪಡಿಸಿ.",
  "ಸಾಮಾನ್ಯೀಕರಣ ಪರೀಕ್ಷಿಸಿ ಮತ್ತು ಪರಿಪೂರ್ಣ sweep ಏನು ತೋರಿಸುತ್ತದೆ ಮತ್ತು ತೋರಿಸುವುದಿಲ್ಲ ಎಂದು ವಿವರಿಸಿ.",
  "ವ್ಯವಸ್ಥಿತವಾಗಿ ತಪ್ಪಾದ evaluator loop ಅನ್ನು ಹೇಗೆ ಹಾಳುಮಾಡುತ್ತದೆ ಎಂದು ತೋರಿಸಿ.",
  "Memory loop ಗೆ time-to-live ಮುಕ್ತಾಯ ಮತ್ತು ಶ್ರೀಮಂತ evaluation ಸೇರಿಸಿ.",
  "Reflexion ವ್ಯವಸ್ಥೆಯ ವೈಫಲ್ಯ ವಿಧಗಳು ಮತ್ತು ಪ್ರತಿಯೊಂದು ಎಲ್ಲಿ ಕಾಣುತ್ತದೆ ಎಂದು ನಕ್ಷೆ ಮಾಡಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Reflexion: Verbal Reinforcement Learning (Part 3 of 3)",
    "textKn": "Reflexion: ಮೌಖಿಕ ಬಲವರ್ಧನೆ ಕಲಿಕೆ (ಭಾಗ 3 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 3 of 3: the controlled experiment at scale, generalisation to other targets, a systematically wrong evaluator, memory expiry and a richer evaluation object, then production patterns. Every output was genuinely produced by reflexion_3.py on Python 3.14.5. The Actor is a script and its logic encodes the arithmetic, which matters for how to read the generalisation sweep. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ ಮೂರನೆಯದು: ದೊಡ್ಡ ಪ್ರಮಾಣದ ನಿಯಂತ್ರಿತ ಪ್ರಯೋಗ, ಇತರ ಗುರಿಗಳಿಗೆ ಸಾಮಾನ್ಯೀಕರಣ, ವ್ಯವಸ್ಥಿತವಾಗಿ ತಪ್ಪಾದ evaluator, memory ಮುಕ್ತಾಯ ಮತ್ತು ಶ್ರೀಮಂತ evaluation ವಸ್ತು, ನಂತರ production ಮಾದರಿಗಳು. ಎಲ್ಲಾ output reflexion_3.py ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. Actor ಸ್ಕ್ರಿಪ್ಟ್ ಮತ್ತು ಅದರ ತರ್ಕ ಅಂಕಗಣಿತವನ್ನೇ ಎನ್‌ಕೋಡ್ ಮಾಡುತ್ತದೆ, ಇದು ಸಾಮಾನ್ಯೀಕರಣ sweep ಓದುವ ವಿಧಾನಕ್ಕೆ ಮುಖ್ಯ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Run, Prove, Compare",
    "textKn": "ಚಲಾಯಿಸಿ, ಸಾಬೀತುಪಡಿಸಿ, ಹೋಲಿಸಿ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "What Counts as Proof",
    "headingKn": "ಯಾವುದು ಪುರಾವೆ",
    "bodyEn": "The evidence for verbal reinforcement is a controlled difference: same Actor, same Evaluator, same trial budget, and the only change is whether failure information is carried forward. Reflexion gives 12, 23, 24; the baseline gives 12, 12, 12. Then you try to break it: a different target, a wrong evaluator, expiring memory. A claim that survives only the case it was designed for is a demo, not evidence.",
    "bodyKn": "ಮೌಖಿಕ ಬಲವರ್ಧನೆಯ ಪುರಾವೆ ನಿಯಂತ್ರಿತ ವ್ಯತ್ಯಾಸ: ಅದೇ Actor, ಅದೇ Evaluator, ಅದೇ ಸುತ್ತಿನ budget, ಮತ್ತು ವೈಫಲ್ಯ ಮಾಹಿತಿ ಮುಂದೆ ಒಯ್ಯಲಾಗುತ್ತದೆಯೇ ಎಂಬುದೊಂದೇ ಬದಲಾವಣೆ. Reflexion 12, 23, 24 ನೀಡುತ್ತದೆ; baseline 12, 12, 12. ನಂತರ ಅದನ್ನು ಮುರಿಯಲು ಪ್ರಯತ್ನಿಸಿ: ಬೇರೆ ಗುರಿ, ತಪ್ಪು evaluator, ಮುಕ್ತಾಯವಾಗುವ memory. ತಾನು ವಿನ್ಯಾಸಗೊಂಡ ಪ್ರಕರಣದಲ್ಲಿ ಮಾತ್ರ ಉಳಿಯುವ ಹೇಳಿಕೆ ಡೆಮೊ, ಪುರಾವೆಯಲ್ಲ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Reflexion Loop With Failure Gating",
    "headingKn": "Failure Gating ಇರುವ Reflexion Loop",
    "svgCode": "<svg viewBox=\"0 0 300 215\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\">\n  <rect width=\"300\" height=\"215\" rx=\"8\" fill=\"#0f172a\"/>\n  <text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">Reflexion: Act, Evaluate, Reflect, Remember, Retry</text>\n  <rect x=\"60\" y=\"24\" width=\"180\" height=\"22\" rx=\"4\" fill=\"#1e293b\" stroke=\"#60a5fa\"/><text x=\"150\" y=\"39\" fill=\"#93c5fd\" text-anchor=\"middle\">ACTOR: fresh attempt (task + memory)</text>\n  <path d=\"M150,46 V56\" stroke=\"#475569\"/>\n  <rect x=\"60\" y=\"58\" width=\"180\" height=\"22\" rx=\"4\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"150\" y=\"73\" fill=\"#6ee7b7\" text-anchor=\"middle\">EVALUATOR: did it work?</text>\n  <path d=\"M150,80 V90\" stroke=\"#475569\"/>\n  <rect x=\"20\" y=\"92\" width=\"110\" height=\"22\" rx=\"4\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"75\" y=\"107\" fill=\"#fde68a\" text-anchor=\"middle\">PASS: return</text>\n  <rect x=\"170\" y=\"92\" width=\"110\" height=\"22\" rx=\"4\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"225\" y=\"107\" fill=\"#fecaca\" text-anchor=\"middle\">FAIL: reflect</text>\n  <path d=\"M225,114 V124\" stroke=\"#475569\"/>\n  <rect x=\"130\" y=\"126\" width=\"150\" height=\"22\" rx=\"4\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"205\" y=\"141\" fill=\"#c4b5fd\" text-anchor=\"middle\">SELF-REFLECTOR: why + what</text>\n  <path d=\"M205,148 V158\" stroke=\"#475569\"/>\n  <rect x=\"130\" y=\"160\" width=\"150\" height=\"22\" rx=\"4\" fill=\"#1e293b\" stroke=\"#fbbf24\"/><text x=\"205\" y=\"175\" fill=\"#fde68a\" text-anchor=\"middle\">EPISODIC MEMORY (bounded)</text>\n  <path d=\"M130,171 C40,171 40,35 60,35\" stroke=\"#f87171\" fill=\"none\"/>\n  <text x=\"150\" y=\"203\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">no weights change: the context of the next trial changes</text>\n</svg>",
    "captionEn": "Operational failures take a retry-with-backoff path; strategy failures take the reflection path shown here.",
    "captionKn": "ಕಾರ್ಯಾಚರಣೆಯ ವೈಫಲ್ಯಗಳು backoff ಜೊತೆ retry ಮಾರ್ಗ ಹಿಡಿಯುತ್ತವೆ; ತಂತ್ರ ವೈಫಲ್ಯಗಳು ಇಲ್ಲಿ ತೋರಿಸಿದ reflection ಮಾರ್ಗ ಹಿಡಿಯುತ್ತವೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "The Experiments",
    "textKn": "ಪ್ರಯೋಗಗಳು",
    "level": "H2"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "reflexion_3.py",
    "headingEn": "Experiment helpers: a wrong evaluator, TTL memory and a rich evaluation",
    "headingKn": "ಪ್ರಯೋಗ ಸಹಾಯಕಗಳು: ತಪ್ಪು evaluator, TTL memory ಮತ್ತು ಶ್ರೀಮಂತ evaluation",
    "descEn": "OffByOneEvaluator accepts total == target + 1 and rejects the true answer. TimedMemory adds a time to live on top of the capacity bound, with an injected clock so the demo is deterministic. Evaluation and RichReflector carry a score and the size of the error, so the lesson can say \"too low by 1\" and not only \"too low\".",
    "descKn": "OffByOneEvaluator total == target + 1 ಅನ್ನು ಒಪ್ಪಿ ನಿಜವಾದ ಉತ್ತರವನ್ನು ತಿರಸ್ಕರಿಸುತ್ತದೆ. TimedMemory capacity ಮಿತಿಯ ಮೇಲೆ time to live ಸೇರಿಸುತ್ತದೆ, injected ಗಡಿಯಾರದಿಂದ ಡೆಮೊ ನಿರ್ಧಾರಾತ್ಮಕ. Evaluation ಮತ್ತು RichReflector score ಮತ್ತು ದೋಷದ ಗಾತ್ರ ಒಯ್ಯುತ್ತವೆ, ಹಾಗಾಗಿ ಪಾಠ \"too low\" ಮಾತ್ರವಲ್ಲ \"too low by 1\" ಎನ್ನಬಹುದು.",
    "code": "def solved(agent_cls_args, target, trials):\n    agent = ReflexionAgent(*agent_cls_args)\n    return agent.solve(target, trials) is not None, agent\n\n\nclass OffByOneEvaluator(Evaluator):\n    \"\"\"A systematically wrong ground truth: it accepts target+1 and rejects the true answer.\"\"\"\n\n    def binary(self, candidate, target):\n        return candidate.total == target + 1\n\n\nclass TimedMemory:\n    \"\"\"Capacity AND time-to-live. The clock is injected so the demo is deterministic.\"\"\"\n\n    def __init__(self, capacity=3, ttl=100, clock=lambda: 0):\n        self.capacity, self.ttl, self.clock = capacity, ttl, clock\n        self._items: list[tuple[str, float]] = []\n\n    def add(self, text):\n        self._items.append((text, self.clock()))\n        self._items = self._items[-self.capacity:]\n\n    def recall(self):\n        now = self.clock()\n        return [t for t, born in self._items if now - born <= self.ttl]\n\n\n@dataclass\nclass Evaluation:\n    passed: bool\n    score: float\n    error: int\n\n\nclass RichEvaluator:\n    def evaluate(self, candidate, target):\n        error = target - candidate.total\n        return Evaluation(error == 0, round(1 - abs(error) / target, 3), error)\n\n\nclass RichReflector:\n    def reflect(self, ev: Evaluation, total: int, target: int) -> str:\n        if ev.passed:\n            return \"The candidate already satisfies the target.\"\n        direction = \"low\" if ev.error > 0 else \"high\"\n        return f\"Total {total} was too {direction} by {abs(ev.error)} (score {ev.score}); change the values by about that much.\""
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "reflexion_3.py",
    "headingEn": "main(): seven experiments",
    "headingKn": "main(): ಏಳು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() repeats the controlled comparison, tests targets 25 and 26, sweeps every target from 3 to 60, traces target 10, runs the wrong evaluator, demonstrates expiry, and prints the rich evaluation.",
    "descKn": "main() ನಿಯಂತ್ರಿತ ಹೋಲಿಕೆ ಪುನರಾವರ್ತಿಸುತ್ತದೆ, ಗುರಿ 25 ಮತ್ತು 26 ಪರೀಕ್ಷಿಸುತ್ತದೆ, 3 ರಿಂದ 60 ರ ಪ್ರತಿ ಗುರಿ sweep ಮಾಡುತ್ತದೆ, ಗುರಿ 10 ಅನ್ನು trace ಮಾಡುತ್ತದೆ, ತಪ್ಪು evaluator ಚಲಾಯಿಸುತ್ತದೆ, ಮುಕ್ತಾಯ ತೋರಿಸುತ್ತದೆ, ಮತ್ತು ಶ್ರೀಮಂತ evaluation ಮುದ್ರಿಸುತ್ತದೆ.",
    "code": "def main():\n    section(\"1. The complete experiment at target 24\")\n    ok, agent = solved(mk(), 24, 3)\n    base = BaselineAgent(Actor(), Evaluator())\n    base.solve(24, 3)\n    print(\"Reflexion:\", [h[\"total\"] for h in agent.history], \"->\", \"PASS\" if ok else \"FAIL\")\n    print(\"Baseline :\", [h[\"total\"] for h in base.history], \"->\", \"FAIL\")\n\n    section(\"2. Does the learned correction generalise? targets 25 and 26\")\n    for t in (25, 26):\n        ok, agent = solved(mk(), t, 3)\n        print(f\"target {t}: totals {[h['total'] for h in agent.history]} values {agent.history[-1]['values']} -> {'PASS' if ok else 'FAIL'}\")\n\n    section(\"3. Sweep: every target from 3 to 60\")\n    for trials in (3, 5):\n        wins = [t for t in range(3, 61) if solved(mk(), t, trials)[0]]\n        lost = [t for t in range(3, 61) if t not in wins]\n        print(f\"max_trials={trials}: solved {len(wins)} of 58; unsolved targets: {lost}\")\n\n    section(\"4. Targets below 12 start on the 'too high' branch: target 10\")\n    ok, agent = solved(mk(), 10, 6)\n    for h in agent.history:\n        print(f\"trial {h['trial']}: values={h['values']} total={h['total']} passed={h['passed']}\")\n    print(\"solved:\", ok)\n\n    section(\"5. A systematically wrong evaluator (accepts target+1)\")\n    agent = ReflexionAgent(*mk(ev=OffByOneEvaluator()))\n    result = agent.solve(24, 6)\n    for h in agent.history:\n        print(f\"trial {h['trial']}: values={h['values']} total={h['total']} evaluator says passed={h['passed']}\")\n    print(\"agent returned:\", result.values if result else None)\n    hit = [h[\"trial\"] for h in agent.history if h[\"total\"] == 24]\n    print(\"trials where the candidate really summed to 24:\", hit, \"- every one was rejected\")\n    print(\"memory:\", agent.memory.recall())\n\n    section(\"6. TTL memory: lessons expire\")\n    now = [0]\n    tm = TimedMemory(capacity=3, ttl=100, clock=lambda: now[0])\n    tm.add(\"lesson A (t=0)\")\n    now[0] = 50\n    tm.add(\"lesson B (t=50)\")\n    for t in (60, 120, 200):\n        now[0] = t\n        print(f\"t={t:>3}: recall -> {tm.recall()}\")\n\n    section(\"7. A richer evaluation object\")\n    ev, rf = RichEvaluator(), RichReflector()\n    for total in (12, 23, 24, 30):\n        e = ev.evaluate(Candidate([total]), 24)\n        print(f\"total {total:>2}: {e}\")\n        print(\"          \", rf.reflect(e, total, 24))"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. The complete experiment at target 24 ---\nReflexion: [12, 23, 24] -> PASS\nBaseline : [12, 12, 12] -> FAIL\n\n--- 2. Does the learned correction generalise? targets 25 and 26 ---\ntarget 25: totals [12, 23, 25] values [9, 8, 8] -> PASS\ntarget 26: totals [12, 23, 26] values [10, 8, 8] -> PASS\n\n--- 3. Sweep: every target from 3 to 60 ---\nmax_trials=3: solved 58 of 58; unsolved targets: []\nmax_trials=5: solved 58 of 58; unsolved targets: []\n\n--- 4. Targets below 12 start on the 'too high' branch: target 10 ---\ntrial 1: values=[4, 4, 4] total=12 passed=False\ntrial 2: values=[3, 3, 4] total=10 passed=True\nsolved: True\n\n--- 5. A systematically wrong evaluator (accepts target+1) ---\ntrial 1: values=[4, 4, 4] total=12 evaluator says passed=False\ntrial 2: values=[7, 8, 8] total=23 evaluator says passed=False\ntrial 3: values=[8, 8, 8] total=24 evaluator says passed=False\ntrial 4: values=[4, 4, 4] total=12 evaluator says passed=False\ntrial 5: values=[8, 8, 8] total=24 evaluator says passed=False\ntrial 6: values=[4, 4, 4] total=12 evaluator says passed=False\nagent returned: None\ntrials where the candidate really summed to 24: [3, 5] - every one was rejected\nmemory: ['Previous total 12 was too low for target 24; increase the values.', 'The candidate already satisfies the target.', 'Previous total 12 was too low for target 24; increase the values.']\n\n--- 6. TTL memory: lessons expire ---\nt= 60: recall -> ['lesson A (t=0)', 'lesson B (t=50)']\nt=120: recall -> ['lesson B (t=50)']\nt=200: recall -> []\n\n--- 7. A richer evaluation object ---\ntotal 12: Evaluation(passed=False, score=0.5, error=12)\n           Total 12 was too low by 12 (score 0.5); change the values by about that much.\ntotal 23: Evaluation(passed=False, score=0.958, error=1)\n           Total 23 was too low by 1 (score 0.958); change the values by about that much.\ntotal 24: Evaluation(passed=True, score=1.0, error=0)\n           The candidate already satisfies the target.\ntotal 30: Evaluation(passed=False, score=0.75, error=-6)\n           Total 30 was too high by 6 (score 0.75); change the values by about that much."
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
    "headingEn": "The Comparison and Generalisation",
    "headingKn": "ಹೋಲಿಕೆ ಮತ್ತು ಸಾಮಾನ್ಯೀಕರಣ",
    "bodyEn": "Section 1 repeats the result: Reflexion 12, 23, 24 passes, the baseline 12, 12, 12 fails. Section 2 changes the target. At 25 the totals are 12, 23, 25 with values [9, 8, 8]; at 26 they are 12, 23, 26 with [10, 8, 8]. The remainder from target % 3 lands in the first value exactly as the exercise predicted, so the learned correction is not hard-wired to 24.",
    "bodyKn": "ವಿಭಾಗ 1 ಫಲಿತಾಂಶ ಪುನರಾವರ್ತಿಸುತ್ತದೆ: Reflexion 12, 23, 24 ಪಾಸ್, baseline 12, 12, 12 ವಿಫಲ. ವಿಭಾಗ 2 ಗುರಿ ಬದಲಿಸುತ್ತದೆ. 25 ರಲ್ಲಿ ಮೊತ್ತಗಳು 12, 23, 25, ಮೌಲ್ಯಗಳು [9, 8, 8]; 26 ರಲ್ಲಿ 12, 23, 26, [10, 8, 8]. target % 3 ರ ಉಳಿಕೆ ವ್ಯಾಯಾಮ ಊಹಿಸಿದಂತೆಯೇ ಮೊದಲ ಮೌಲ್ಯಕ್ಕೆ ಬೀಳುತ್ತದೆ, ಆದ್ದರಿಂದ ಕಲಿತ ತಿದ್ದುಪಡಿ 24 ಕ್ಕೆ ಗಟ್ಟಿಯಾಗಿ ಜೋಡಿಸಿಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: A Perfect Sweep Says the Actor Encodes the Arithmetic",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಪರಿಪೂರ್ಣ Sweep Actor ಅಂಕಗಣಿತವನ್ನೇ ಎನ್‌ಕೋಡ್ ಮಾಡುತ್ತದೆ ಎನ್ನುತ್ತದೆ",
    "bodyEn": "Section 3 tries every target from 3 to 60. With a budget of 3 trials it solves 58 of 58, and with 5 trials also 58 of 58, with no unsolved targets. Before reading that as \"Reflexion generalises\", notice why: the scripted Actor computes target // 3 plus the remainder, which is the closed-form answer. A perfect score shows that the toy is solvable by that formula once the Actor knows whether to go up or down, not that verbal learning is robust. Section 4 shows the other branch: targets below 12 start \"too high\", and target 10 is solved at trial 2 with [3, 3, 4]. The honest conclusion is narrow: the mechanism works as wired, and a real LLM Actor would have to infer the same adjustment from the sentence.",
    "bodyKn": "ವಿಭಾಗ 3 3 ರಿಂದ 60 ರ ಪ್ರತಿ ಗುರಿ ಪ್ರಯತ್ನಿಸುತ್ತದೆ. 3 ಸುತ್ತಿನ budget ಜೊತೆ 58 ರಲ್ಲಿ 58 ಪರಿಹರಿಸುತ್ತದೆ, 5 ಸುತ್ತಿನಲ್ಲೂ 58 ರಲ್ಲಿ 58, ಪರಿಹರಿಸದ ಗುರಿ ಇಲ್ಲ. ಅದನ್ನು \"Reflexion ಸಾಮಾನ್ಯೀಕರಿಸುತ್ತದೆ\" ಎಂದು ಓದುವ ಮೊದಲು ಏಕೆ ಎಂಬುದನ್ನು ಗಮನಿಸಿ: ಸ್ಕ್ರಿಪ್ಟ್ Actor target // 3 ಜೊತೆ ಉಳಿಕೆ ಲೆಕ್ಕಿಸುತ್ತದೆ, ಅದು ಮುಚ್ಚಿದ-ರೂಪದ ಉತ್ತರ. ಪರಿಪೂರ್ಣ ಅಂಕ ತೋರಿಸುವುದು: Actor ಮೇಲೆ ಹೋಗಬೇಕೇ ಕೆಳಗೆ ಹೋಗಬೇಕೇ ಎಂದು ತಿಳಿದ ಮೇಲೆ toy ಆ ಸೂತ್ರದಿಂದ ಪರಿಹರಿಸಬಹುದು ಎಂದು; ಮೌಖಿಕ ಕಲಿಕೆ ದೃಢ ಎಂದಲ್ಲ. ವಿಭಾಗ 4 ಇನ್ನೊಂದು ಶಾಖೆ ತೋರಿಸುತ್ತದೆ: 12 ಕ್ಕಿಂತ ಕಡಿಮೆ ಗುರಿಗಳು \"too high\" ನಿಂದ ಆರಂಭ, ಮತ್ತು ಗುರಿ 10 ಸುತ್ತು 2 ರಲ್ಲಿ [3, 3, 4] ನೊಂದಿಗೆ ಪರಿಹಾರ. ಪ್ರಾಮಾಣಿಕ ತೀರ್ಮಾನ ಸಂಕುಚಿತ: ಕಾರ್ಯವಿಧಾನ ಜೋಡಿಸಿದಂತೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ, ಮತ್ತು ನಿಜವಾದ LLM Actor ಅದೇ ಹೊಂದಾಣಿಕೆಯನ್ನು ವಾಕ್ಯದಿಂದ ಊಹಿಸಬೇಕಾಗುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: A Wrong Evaluator Corrupts Every Reflection",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ತಪ್ಪು Evaluator ಪ್ರತಿ Reflection ಅನ್ನು ಹಾಳುಮಾಡುತ್ತದೆ",
    "bodyEn": "Section 5 swaps in an evaluator that accepts target + 1 and rejects the true answer. The agent reaches [8, 8, 8], a real total of 24, on trials 3 and 5 and the evaluator rejects both. The reflector, computing against the real target, writes \"The candidate already satisfies the target\", which contradicts the evaluator, and the Actor has no rule for that sentence so it falls back to [4, 4, 4]. Six trials end in None, the memory holds a mix of contradictory lessons, and the agent oscillates between the right answer and the worst one. Reflexion cannot compensate for a systematically wrong signal: the loop optimises whatever the evaluator says.",
    "bodyKn": "ವಿಭಾಗ 5 target + 1 ಅನ್ನು ಒಪ್ಪಿ ನಿಜವಾದ ಉತ್ತರವನ್ನು ತಿರಸ್ಕರಿಸುವ evaluator ಹಾಕುತ್ತದೆ. Agent ಸುತ್ತು 3 ಮತ್ತು 5 ರಲ್ಲಿ [8, 8, 8], ನಿಜವಾದ ಮೊತ್ತ 24, ತಲುಪುತ್ತದೆ ಮತ್ತು evaluator ಎರಡನ್ನೂ ತಿರಸ್ಕರಿಸುತ್ತದೆ. ನಿಜವಾದ ಗುರಿಯ ವಿರುದ್ಧ ಲೆಕ್ಕಿಸುವ reflector \"The candidate already satisfies the target\" ಎಂದು ಬರೆಯುತ್ತದೆ, ಇದು evaluator ಗೆ ವಿರುದ್ಧ, ಮತ್ತು ಆ ವಾಕ್ಯಕ್ಕೆ Actor ಗೆ ನಿಯಮವಿಲ್ಲದ ಕಾರಣ ಅದು [4, 4, 4] ಗೆ ಹಿಂದೆ ಸರಿಯುತ್ತದೆ. ಆರು ಸುತ್ತು None ನಲ್ಲಿ ಮುಗಿಯುತ್ತವೆ, memory ವಿರೋಧಿ ಪಾಠಗಳ ಮಿಶ್ರಣ ಹೊಂದಿದೆ, ಮತ್ತು agent ಸರಿಯಾದ ಉತ್ತರ ಮತ್ತು ಅತ್ಯಂತ ಕೆಟ್ಟ ಉತ್ತರದ ನಡುವೆ ಓಲಾಡುತ್ತದೆ. ವ್ಯವಸ್ಥಿತವಾಗಿ ತಪ್ಪಾದ ಸಂಕೇತವನ್ನು Reflexion ಸರಿದೂಗಿಸಲಾರದು: evaluator ಹೇಳಿದ್ದನ್ನೇ loop ಆಪ್ಟಿಮೈಸ್ ಮಾಡುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Expiry and Richer Feedback",
    "headingKn": "ಮುಕ್ತಾಯ ಮತ್ತು ಶ್ರೀಮಂತ ಪ್ರತಿಕ್ರಿಯೆ",
    "bodyEn": "Section 6 uses a TTL of 100 with a fake clock. At t=60 both lessons are recalled, at t=120 only the one written at t=50 survives, and at t=200 none do. Memory should not live forever, because facts change. Section 7 gives the evaluator a score and an error size: total 23 scores 0.958 with error 1, total 12 scores 0.5 with error 12, and total 30 reports \"too high by 6\". The reflection now says how far off the attempt was, which is the first step towards the evidence-rich reflections of real systems.",
    "bodyKn": "ವಿಭಾಗ 6 ನಕಲಿ ಗಡಿಯಾರದೊಂದಿಗೆ 100 TTL ಬಳಸುತ್ತದೆ. t=60 ರಲ್ಲಿ ಎರಡೂ ಪಾಠಗಳು ನೆನಪಾಗುತ್ತವೆ, t=120 ರಲ್ಲಿ t=50 ರಲ್ಲಿ ಬರೆದದ್ದು ಮಾತ್ರ ಉಳಿಯುತ್ತದೆ, ಮತ್ತು t=200 ರಲ್ಲಿ ಯಾವುದೂ ಇಲ್ಲ. Memory ಎಂದೆಂದಿಗೂ ಉಳಿಯಬಾರದು, ಏಕೆಂದರೆ ಸಂಗತಿಗಳು ಬದಲಾಗುತ್ತವೆ. ವಿಭಾಗ 7 evaluator ಗೆ score ಮತ್ತು ದೋಷ ಗಾತ್ರ ನೀಡುತ್ತದೆ: ಮೊತ್ತ 23 ದೋಷ 1 ಜೊತೆ 0.958 ಅಂಕ, ಮೊತ್ತ 12 ದೋಷ 12 ಜೊತೆ 0.5 ಅಂಕ, ಮತ್ತು ಮೊತ್ತ 30 \"too high by 6\" ವರದಿ ಮಾಡುತ್ತದೆ. Reflection ಈಗ ಪ್ರಯತ್ನ ಎಷ್ಟು ದೂರ ಇತ್ತು ಎಂದು ಹೇಳುತ್ತದೆ, ಇದು ನಿಜವಾದ ವ್ಯವಸ್ಥೆಗಳ ಸಾಕ್ಷ್ಯ-ಸಮೃದ್ಧ reflections ಕಡೆಗಿನ ಮೊದಲ ಹೆಜ್ಜೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Production Patterns",
    "textKn": "Production ಮಾದರಿಗಳು",
    "level": "H2"
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Failure modes of a Reflexion system",
    "headingKn": "Reflexion ವ್ಯವಸ್ಥೆಯ ವೈಫಲ್ಯ ವಿಧಗಳು",
    "headers": [
     "Failure mode",
     "What it looks like",
     "Seen in this module"
    ],
    "rows": [
     [
      "Bad evaluator",
      "A correct trajectory is rejected, or a wrong one approved",
      "Part 3 section 5: true answer rejected twice"
     ],
     [
      "Vague reflection",
      "\"Try harder\": no failure, evidence or action",
      "Part 2: direction only, no magnitude"
     ],
     [
      "Actor ignores memory",
      "Reflections stored, behaviour unchanged",
      "Part 2 section 5: 23 six times"
     ],
     [
      "Capacity too small for the policy",
      "The history the Actor needs is evicted",
      "Part 2 section 6: capacity 1 never solves"
     ],
     [
      "External failure",
      "A timeout is \"learned\" as a rule",
      "Part 1 section 4: retry, do not reflect"
     ],
     [
      "Memory rot",
      "Stale, duplicate or contradictory lessons",
      "Part 1 section 5; Part 3 section 6 expiry"
     ]
    ]
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Reflection Quality and Scope",
    "headingKn": "Reflection ಗುಣಮಟ್ಟ ಮತ್ತು ವ್ಯಾಪ್ತಿ",
    "bodyEn": "Before storing a reflection ask whether it is specific, supported by evidence, actionable, scoped and likely to stay valid. A good record carries metadata: task type, evidence, confidence, creation time and expiry. \"Never call this API on Tuesday\" from one random failure is superstition; \"this repository's PostgreSQL is mapped to port 5433\" is a scoped fact that becomes harmful if stored as \"PostgreSQL always uses 5433\". Retrieval matters as much as storage: ten well-chosen lessons beat ten thousand unfiltered ones.",
    "bodyKn": "Reflection ಸಂಗ್ರಹಿಸುವ ಮೊದಲು ಅದು ನಿರ್ದಿಷ್ಟವೇ, ಸಾಕ್ಷ್ಯ ಬೆಂಬಲಿತವೇ, ಕ್ರಿಯಾತ್ಮಕವೇ, ವ್ಯಾಪ್ತಿ ಇರುವುದೇ ಮತ್ತು ಮಾನ್ಯವಾಗಿ ಉಳಿಯುವುದೇ ಎಂದು ಕೇಳಿ. ಉತ್ತಮ ದಾಖಲೆ ಮೆಟಾಡೇಟಾ ಒಯ್ಯುತ್ತದೆ: ಕಾರ್ಯ ಪ್ರಕಾರ, ಸಾಕ್ಷ್ಯ, ವಿಶ್ವಾಸ, ರಚನಾ ಸಮಯ ಮತ್ತು ಮುಕ್ತಾಯ. ಒಂದು ಯಾದೃಚ್ಛಿಕ ವೈಫಲ್ಯದಿಂದ \"ಮಂಗಳವಾರ ಈ API ಕರೆಯಬೇಡ\" ಮೂಢನಂಬಿಕೆ; \"ಈ ರೆಪೊಸಿಟರಿಯ PostgreSQL ಪೋರ್ಟ್ 5433 ಗೆ ಮ್ಯಾಪ್ ಆಗಿದೆ\" ವ್ಯಾಪ್ತಿ ಇರುವ ಸಂಗತಿ, ಅದನ್ನು \"PostgreSQL ಯಾವಾಗಲೂ 5433 ಬಳಸುತ್ತದೆ\" ಎಂದು ಸಂಗ್ರಹಿಸಿದರೆ ಹಾನಿಕರ. ಪಡೆಯುವಿಕೆ ಸಂಗ್ರಹದಷ್ಟೇ ಮುಖ್ಯ: ಚೆನ್ನಾಗಿ ಆರಿಸಿದ ಹತ್ತು ಪಾಠಗಳು ಫಿಲ್ಟರ್ ಮಾಡದ ಹತ್ತು ಸಾವಿರಕ್ಕಿಂತ ಉತ್ತಮ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Reflexion in the agent patterns",
    "headingKn": "Agent ಮಾದರಿಗಳಲ್ಲಿ Reflexion",
    "headers": [
     "Pattern",
     "What it adapts",
     "Relation"
    ],
    "rows": [
     [
      "ReAct",
      "Actions inside one run",
      "Reflexion adds learning between runs; the Actor can itself be a ReAct agent"
     ],
     [
      "ReWOO / Plan-and-Execute",
      "The plan",
      "A failed run can feed a lesson to the next plan"
     ],
     [
      "Self-Refine",
      "The current output",
      "Reflexion keeps a persistent lesson across fresh attempts"
     ],
     [
      "Gradient training",
      "Model weights",
      "Reflexion changes context, readable and deletable"
     ]
    ]
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "It adapts agents at inference time without a training pipeline, and the lessons are human-readable, so engineers can debug the decision chain trajectory, evaluation, reflection, storage, retrieval, behaviour change. That chain turns a vague \"the agent keeps failing\" into a specific broken link.",
    "bodyKn": "ಇದು ತರಬೇತಿ ಪೈಪ್‌ಲೈನ್ ಇಲ್ಲದೆ ನಿರ್ಧಾರ ಸಮಯದಲ್ಲಿ agents ಅನ್ನು ಹೊಂದಿಸುತ್ತದೆ, ಮತ್ತು ಪಾಠಗಳು ಮನುಷ್ಯರಿಗೆ ಓದಬಹುದಾದವು, ಆದ್ದರಿಂದ ಎಂಜಿನಿಯರ್‌ಗಳು trajectory, ಮೌಲ್ಯಮಾಪನ, reflection, ಸಂಗ್ರಹ, ಪಡೆಯುವಿಕೆ, ವರ್ತನೆ ಬದಲಾವಣೆ ಎಂಬ ನಿರ್ಧಾರ ಸರಪಳಿಯನ್ನು debug ಮಾಡಬಹುದು. ಆ ಸರಪಳಿ ಅಸ್ಪಷ್ಟ \"agent ವಿಫಲವಾಗುತ್ತಲೇ ಇದೆ\" ಅನ್ನು ನಿರ್ದಿಷ್ಟ ಮುರಿದ ಕೊಂಡಿಯಾಗಿ ಪರಿವರ್ತಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Where This Appears in AI Systems",
    "headingKn": "AI ವ್ಯವಸ್ಥೆಗಳಲ್ಲಿ ಇದು ಎಲ್ಲಿ ಕಾಣುತ್ತದೆ",
    "bodyEn": "Coding agents, SQL agents, tool-use agents and game-playing agents with a success signal use verbal memory between attempts. Sleep-time memory management, which compacts and updates lessons in the background instead of while the user waits, is the next step for long-running systems.",
    "bodyKn": "Coding agents, SQL agents, tool-use agents ಮತ್ತು ಯಶಸ್ಸಿನ ಸಂಕೇತ ಇರುವ ಆಟ-ಆಡುವ agents ಪ್ರಯತ್ನಗಳ ನಡುವೆ ಮೌಖಿಕ memory ಬಳಸುತ್ತವೆ. ಬಳಕೆದಾರ ಕಾಯುತ್ತಿರುವಾಗ ಅಲ್ಲ, ಹಿನ್ನೆಲೆಯಲ್ಲಿ ಪಾಠಗಳನ್ನು ಕುಗ್ಗಿಸಿ ನವೀಕರಿಸುವ sleep-time memory ನಿರ್ವಹಣೆ ದೀರ್ಘಕಾಲ ಚಲಿಸುವ ವ್ಯವಸ್ಥೆಗಳ ಮುಂದಿನ ಹೆಜ್ಜೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"a 58-out-of-58 sweep proves Reflexion generalises.\" It proves the scripted Actor was wired correctly for this arithmetic. The wrong-evaluator run proves the reverse risk: the same machinery fails completely when its signal is wrong.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"58 ರಲ್ಲಿ 58 sweep Reflexion ಸಾಮಾನ್ಯೀಕರಿಸುತ್ತದೆ ಎಂದು ಸಾಬೀತುಪಡಿಸುತ್ತದೆ.\" ಸ್ಕ್ರಿಪ್ಟ್ Actor ಈ ಅಂಕಗಣಿತಕ್ಕೆ ಸರಿಯಾಗಿ ಜೋಡಿಸಲ್ಪಟ್ಟಿತ್ತು ಎಂದು ಮಾತ್ರ ಅದು ಸಾಬೀತುಪಡಿಸುತ್ತದೆ. ತಪ್ಪು-evaluator ಓಟ ವಿರುದ್ಧ ಅಪಾಯ ಸಾಬೀತುಪಡಿಸುತ್ತದೆ: ಸಂಕೇತ ತಪ್ಪಾದಾಗ ಅದೇ ಯಂತ್ರ ಸಂಪೂರ್ಣ ವಿಫಲವಾಗುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) Prove the mechanism with a controlled baseline, then try to break it. 2) A 58 of 58 sweep reflects the toy's closed form, not robust learning. 3) A wrong evaluator is not rescued by reflection: the true answer was rejected twice. 4) Give memory an expiry as well as a capacity. 5) Make reflections carry magnitude, evidence and scope. 6) Debug the chain: trajectory, evaluation, reflection, storage, retrieval, behaviour change.",
    "bodyKn": "1) ನಿಯಂತ್ರಿತ baseline ನಿಂದ ಕಾರ್ಯವಿಧಾನ ಸಾಬೀತುಪಡಿಸಿ, ನಂತರ ಮುರಿಯಲು ಪ್ರಯತ್ನಿಸಿ. 2) 58 ರಲ್ಲಿ 58 sweep toy ನ ಮುಚ್ಚಿದ ರೂಪ ಪ್ರತಿಬಿಂಬಿಸುತ್ತದೆ, ದೃಢ ಕಲಿಕೆಯನ್ನಲ್ಲ. 3) ತಪ್ಪು evaluator ಅನ್ನು reflection ರಕ್ಷಿಸುವುದಿಲ್ಲ: ನಿಜವಾದ ಉತ್ತರ ಎರಡು ಬಾರಿ ತಿರಸ್ಕೃತ. 4) Memory ಗೆ capacity ಜೊತೆಗೆ ಮುಕ್ತಾಯವನ್ನೂ ನೀಡಿ. 5) Reflections ಪ್ರಮಾಣ, ಸಾಕ್ಷ್ಯ ಮತ್ತು ವ್ಯಾಪ್ತಿ ಒಯ್ಯುವಂತೆ ಮಾಡಿ. 6) ಸರಪಳಿ debug ಮಾಡಿ: trajectory, ಮೌಲ್ಯಮಾಪನ, reflection, ಸಂಗ್ರಹ, ಪಡೆಯುವಿಕೆ, ವರ್ತನೆ ಬದಲಾವಣೆ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What are the three functional components of Reflexion?",
      "qKn": "Reflexion ನ ಮೂರು ಕ್ರಿಯಾತ್ಮಕ ಘಟಕಗಳು ಯಾವುವು?",
      "opts": [
       "Planner, Executor, Router",
       "Actor, Evaluator, Self-Reflector",
       "Generator, Optimizer, Critic",
       "Actor, Gradient Engine, Reward Model"
      ],
      "optsKn": [
       "Planner, Executor, Router",
       "Actor, Evaluator, Self-Reflector",
       "Generator, Optimizer, Critic",
       "Actor, Gradient Engine, Reward Model"
      ],
      "correct": 1
     },
     {
      "q": "What is the role of episodic memory?",
      "qKn": "Episodic memory ಯ ಪಾತ್ರ ಏನು?",
      "opts": [
       "Update network weights",
       "Store prior reflections so future trials can use them",
       "Replace the Actor",
       "Calculate gradients"
      ],
      "optsKn": [
       "ನೆಟ್‌ವರ್ಕ್ weights ನವೀಕರಿಸುವುದು",
       "ಭವಿಷ್ಯದ ಸುತ್ತುಗಳು ಬಳಸಲು ಹಿಂದಿನ reflections ಸಂಗ್ರಹಿಸುವುದು",
       "Actor ಬದಲಿಸುವುದು",
       "Gradients ಲೆಕ್ಕಿಸುವುದು"
      ],
      "correct": 1
     },
     {
      "q": "In this lesson's section 5, what did the evaluator do with the real total of 24?",
      "qKn": "ಈ ಪಾಠದ ವಿಭಾಗ 5 ರಲ್ಲಿ evaluator ನಿಜವಾದ ಮೊತ್ತ 24 ರೊಂದಿಗೆ ಏನು ಮಾಡಿತು?",
      "opts": [
       "Accepted it",
       "Rejected it every time it appeared",
       "Skipped it",
       "Crashed"
      ],
      "optsKn": [
       "ಒಪ್ಪಿತು",
       "ಅದು ಕಾಣಿಸಿಕೊಂಡಾಗಲೆಲ್ಲಾ ತಿರಸ್ಕರಿಸಿತು",
       "ಬಿಟ್ಟುಬಿಟ್ಟಿತು",
       "Crash ಆಯಿತು"
      ],
      "correct": 1
     },
     {
      "q": "Why does the 58 of 58 sweep not prove that verbal learning is robust?",
      "qKn": "58 ರಲ್ಲಿ 58 sweep ಮೌಖಿಕ ಕಲಿಕೆ ದೃಢ ಎಂದು ಏಕೆ ಸಾಬೀತುಪಡಿಸುವುದಿಲ್ಲ?",
      "opts": [
       "Python rounds results",
       "The scripted Actor encodes target // 3 plus the remainder, the closed-form answer",
       "The baseline also solved everything",
       "The memory was unbounded"
      ],
      "optsKn": [
       "Python ಫಲಿತಾಂಶ ಸುತ್ತುತ್ತದೆ",
       "ಸ್ಕ್ರಿಪ್ಟ್ Actor target // 3 ಜೊತೆ ಉಳಿಕೆ, ಮುಚ್ಚಿದ-ರೂಪದ ಉತ್ತರ, ಎನ್‌ಕೋಡ್ ಮಾಡುತ್ತದೆ",
       "Baseline ಕೂಡ ಎಲ್ಲವನ್ನೂ ಪರಿಹರಿಸಿತು",
       "Memory ಮಿತಿಯಿಲ್ಲದ್ದಾಗಿತ್ತು"
      ],
      "correct": 1
     },
     {
      "q": "Why give memory a time to live as well as a capacity?",
      "qKn": "Memory ಗೆ capacity ಜೊತೆಗೆ time to live ಏಕೆ ನೀಡಬೇಕು?",
      "opts": [
       "Python lists expire",
       "Facts change, so old lessons should stop being retrieved",
       "Reflexion needs one entry",
       "Evaluators need it"
      ],
      "optsKn": [
       "Python ಪಟ್ಟಿಗಳು ಮುಕ್ತಾಯವಾಗುತ್ತವೆ",
       "ಸಂಗತಿಗಳು ಬದಲಾಗುತ್ತವೆ, ಹಾಗಾಗಿ ಹಳೆಯ ಪಾಠಗಳನ್ನು ಪಡೆಯುವುದು ನಿಲ್ಲಬೇಕು",
       "Reflexion ಗೆ ಒಂದು ನಮೂದು ಬೇಕು",
       "Evaluators ಗೆ ಬೇಕು"
      ],
      "correct": 1
     }
    ]
   }
  }
 ]
};
