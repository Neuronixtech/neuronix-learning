module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6066020ed05b321514",
 "order": 1,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Reflexion: Verbal Reinforcement Learning (Part 2 of 3) — Self-Reflector, Episodic Memory and the Complete Loop",
 "titleKn": "Reflexion: ಮೌಖಿಕ ಬಲವರ್ಧನೆ ಕಲಿಕೆ (ಭಾಗ 2 / 3) — Self-Reflector, Episodic Memory ಮತ್ತು ಸಂಪೂರ್ಣ Loop",
 "desc": "Build the Self-Reflector, bounded episodic memory and the complete Reflexion loop, compare it with a no-reflection baseline, and find that stored reflections are useless if the Actor ignores history and that memory capacity can decide whether the agent ever succeeds.",
 "descKn": "Self-Reflector, ಮಿತಿಯ episodic memory ಮತ್ತು ಸಂಪೂರ್ಣ Reflexion loop ನಿರ್ಮಿಸಿ, reflection ಇಲ್ಲದ baseline ಜೊತೆ ಹೋಲಿಸಿ, ಮತ್ತು Actor ಇತಿಹಾಸ ಕಡೆಗಣಿಸಿದರೆ ಸಂಗ್ರಹಿತ reflections ನಿರುಪಯುಕ್ತ ಹಾಗೂ memory capacity agent ಎಂದಾದರೂ ಯಶಸ್ವಿಯಾಗುತ್ತದೆಯೇ ಎಂಬುದನ್ನು ನಿರ್ಧರಿಸಬಹುದು ಎಂದು ಕಂಡುಹಿಡಿಯಿರಿ.",
 "objectives": [
  "Implement a Self-Reflector that turns a scalar failure into a directional lesson.",
  "Implement a bounded episodic memory that returns copies.",
  "Connect Actor, Evaluator, Reflector and memory into a loop with fresh retries.",
  "Run a controlled comparison against a no-reflection baseline.",
  "Explain why stored reflections need an Actor that uses them and how capacity interacts with policy."
 ],
 "objectivesKn": [
  "ಸ್ಕೇಲರ್ ವೈಫಲ್ಯವನ್ನು ದಿಕ್ಕಿನ ಪಾಠವಾಗಿ ಪರಿವರ್ತಿಸುವ Self-Reflector ಅಳವಡಿಸಿ.",
  "ಪ್ರತಿಗಳನ್ನು ಹಿಂತಿರುಗಿಸುವ ಮಿತಿಯ episodic memory ಅಳವಡಿಸಿ.",
  "Actor, Evaluator, Reflector ಮತ್ತು memory ಅನ್ನು ಹೊಸ retries ಇರುವ loop ಆಗಿ ಜೋಡಿಸಿ.",
  "Reflection ಇಲ್ಲದ baseline ವಿರುದ್ಧ ನಿಯಂತ್ರಿತ ಹೋಲಿಕೆ ಚಲಾಯಿಸಿ.",
  "ಸಂಗ್ರಹಿತ reflections ಬಳಸುವ Actor ಏಕೆ ಬೇಕು ಮತ್ತು capacity ನೀತಿಯೊಂದಿಗೆ ಹೇಗೆ ಪರಸ್ಪರ ಕ್ರಿಯೆ ಮಾಡುತ್ತದೆ ಎಂದು ವಿವರಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Reflexion: Verbal Reinforcement Learning (Part 2 of 3)",
    "textKn": "Reflexion: ಮೌಖಿಕ ಬಲವರ್ಧನೆ ಕಲಿಕೆ (ಭಾಗ 2 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 2 of 3: the Self-Reflector, bounded episodic memory, a history-aware Actor and the complete loop, with a no-reflection baseline. Every output was genuinely produced by reflexion_2.py on Python 3.14.5, building on reflexion_1.py. The Actor is a script that reads the reflection text, a stand-in for an LLM that would read the same text in its prompt. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ ಎರಡನೆಯದು: Self-Reflector, ಮಿತಿಯ episodic memory, ಇತಿಹಾಸ-ಅರಿವಿನ Actor ಮತ್ತು ಸಂಪೂರ್ಣ loop, reflection ಇಲ್ಲದ baseline ಜೊತೆ. ಎಲ್ಲಾ output reflexion_2.py ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು, reflexion_1.py ಮೇಲೆ ನಿರ್ಮಿತ. Actor reflection ಪಠ್ಯ ಓದುವ ಸ್ಕ್ರಿಪ್ಟ್, ಅದೇ ಪಠ್ಯವನ್ನು ತನ್ನ prompt ನಲ್ಲಿ ಓದುವ LLM ಗೆ ಬದಲಿ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "From Failure to a Lesson",
    "textKn": "ವೈಫಲ್ಯದಿಂದ ಪಾಠಕ್ಕೆ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Evaluator Versus Self-Reflector",
    "headingKn": "Evaluator ಮತ್ತು Self-Reflector",
    "bodyEn": "The Evaluator answers \"did it work?\" and returns False. That is not enough for the Actor to improve. The Self-Reflector answers \"what should change?\": it computes difference = target - total, and a positive value becomes \"too low, increase the values\", a negative one \"too high, decrease the values\". A scalar becomes a direction. For richer failures the same step can carry what happened, why, and what to change, such as a missing-user case returning 500 instead of 404.",
    "bodyKn": "Evaluator \"ಕೆಲಸ ಮಾಡಿತೇ?\" ಎಂಬುದಕ್ಕೆ ಉತ್ತರಿಸಿ False ಹಿಂತಿರುಗಿಸುತ್ತದೆ. Actor ಸುಧಾರಿಸಲು ಅದು ಸಾಕಾಗದು. Self-Reflector \"ಏನು ಬದಲಾಗಬೇಕು?\" ಎಂಬುದಕ್ಕೆ ಉತ್ತರಿಸುತ್ತದೆ: ಅದು difference = target - total ಲೆಕ್ಕಿಸುತ್ತದೆ, ಧನಾತ್ಮಕ ಮೌಲ್ಯ \"too low, increase the values\" ಆಗುತ್ತದೆ, ಋಣಾತ್ಮಕ \"too high, decrease the values\". Scalar ಒಂದು ದಿಕ್ಕಾಗುತ್ತದೆ. ಶ್ರೀಮಂತ ವೈಫಲ್ಯಗಳಿಗೆ ಅದೇ ಹಂತ ಏನಾಯಿತು, ಏಕೆ, ಮತ್ತು ಏನು ಬದಲಾಗಬೇಕು ಎಂಬುದನ್ನು ಒಯ್ಯಬಹುದು, ಉದಾ. ಕಾಣೆಯಾದ ಬಳಕೆದಾರ ಪ್ರಕರಣ 404 ಬದಲು 500 ಹಿಂತಿರುಗಿಸುವುದು."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "The Complete Loop",
    "headingKn": "ಸಂಪೂರ್ಣ Loop",
    "svgCode": "<svg viewBox=\"0 0 300 215\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\">\n  <rect width=\"300\" height=\"215\" rx=\"8\" fill=\"#0f172a\"/>\n  <text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">Reflexion: Act, Evaluate, Reflect, Remember, Retry</text>\n  <rect x=\"60\" y=\"24\" width=\"180\" height=\"22\" rx=\"4\" fill=\"#1e293b\" stroke=\"#60a5fa\"/><text x=\"150\" y=\"39\" fill=\"#93c5fd\" text-anchor=\"middle\">ACTOR: fresh attempt (task + memory)</text>\n  <path d=\"M150,46 V56\" stroke=\"#475569\"/>\n  <rect x=\"60\" y=\"58\" width=\"180\" height=\"22\" rx=\"4\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"150\" y=\"73\" fill=\"#6ee7b7\" text-anchor=\"middle\">EVALUATOR: did it work?</text>\n  <path d=\"M150,80 V90\" stroke=\"#475569\"/>\n  <rect x=\"20\" y=\"92\" width=\"110\" height=\"22\" rx=\"4\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"75\" y=\"107\" fill=\"#fde68a\" text-anchor=\"middle\">PASS: return</text>\n  <rect x=\"170\" y=\"92\" width=\"110\" height=\"22\" rx=\"4\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"225\" y=\"107\" fill=\"#fecaca\" text-anchor=\"middle\">FAIL: reflect</text>\n  <path d=\"M225,114 V124\" stroke=\"#475569\"/>\n  <rect x=\"130\" y=\"126\" width=\"150\" height=\"22\" rx=\"4\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"205\" y=\"141\" fill=\"#c4b5fd\" text-anchor=\"middle\">SELF-REFLECTOR: why + what</text>\n  <path d=\"M205,148 V158\" stroke=\"#475569\"/>\n  <rect x=\"130\" y=\"160\" width=\"150\" height=\"22\" rx=\"4\" fill=\"#1e293b\" stroke=\"#fbbf24\"/><text x=\"205\" y=\"175\" fill=\"#fde68a\" text-anchor=\"middle\">EPISODIC MEMORY (bounded)</text>\n  <path d=\"M130,171 C40,171 40,35 60,35\" stroke=\"#f87171\" fill=\"none\"/>\n  <text x=\"150\" y=\"203\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">no weights change: the context of the next trial changes</text>\n</svg>",
    "captionEn": "Recall memory, act, evaluate, and on failure reflect and remember before the next fresh trial.",
    "captionKn": "Memory ನೆನಪಿಸಿ, ಕ್ರಿಯೆ, ಮೌಲ್ಯಮಾಪನ, ಮತ್ತು ವೈಫಲ್ಯದಲ್ಲಿ ಮುಂದಿನ ಹೊಸ ಸುತ್ತಿನ ಮೊದಲು reflect ಮತ್ತು remember."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Bounded Memory and Why recall() Returns a Copy",
    "headingKn": "ಮಿತಿಯ Memory ಮತ್ತು recall() ಪ್ರತಿ ಏಕೆ ಹಿಂತಿರುಗಿಸುತ್ತದೆ",
    "bodyEn": "EpisodicMemory keeps at most capacity reflections and evicts the oldest when a new one arrives, which is the simplest defence against memory rot. recall() returns list(self._items), a copy, so a caller that clears its list cannot erase the real buffer. Capacity is a design decision with consequences, which this lesson's run will show.",
    "bodyKn": "EpisodicMemory ಗರಿಷ್ಠ capacity reflections ಇಟ್ಟುಕೊಂಡು ಹೊಸದು ಬಂದಾಗ ಹಳೆಯದನ್ನು ತೆಗೆಯುತ್ತದೆ; memory rot ವಿರುದ್ಧ ಇದು ಅತಿ ಸರಳ ರಕ್ಷಣೆ. recall() list(self._items) ಅಂದರೆ ಪ್ರತಿ ಹಿಂತಿರುಗಿಸುತ್ತದೆ, ಆದ್ದರಿಂದ ತನ್ನ ಪಟ್ಟಿ ಖಾಲಿ ಮಾಡುವ ಕರೆದಾರ ನಿಜವಾದ buffer ಅಳಿಸಲಾರ. Capacity ಪರಿಣಾಮಗಳಿರುವ ವಿನ್ಯಾಸ ನಿರ್ಧಾರ, ಮತ್ತು ಈ ಪಾಠದ ಓಟ ಅದನ್ನು ತೋರಿಸುತ್ತದೆ."
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
    "filename": "reflexion_2.py",
    "headingEn": "SelfReflector, EpisodicMemory and the history-aware Actor",
    "headingKn": "SelfReflector, EpisodicMemory ಮತ್ತು ಇತಿಹಾಸ-ಅರಿವಿನ Actor",
    "descEn": "The Actor now counts how many stored reflections say \"too low\". The first low reflection triggers a modest correction ([7, 8, 8]); a second triggers the stronger one ([8, 8, 8], with any remainder added to the first value). History changes behaviour, which is the whole point.",
    "descKn": "Actor ಈಗ ಎಷ್ಟು ಸಂಗ್ರಹಿತ reflections \"too low\" ಎನ್ನುತ್ತವೆ ಎಂದು ಎಣಿಸುತ್ತದೆ. ಮೊದಲ low reflection ಮಧ್ಯಮ ತಿದ್ದುಪಡಿ ([7, 8, 8]) ಪ್ರಚೋದಿಸುತ್ತದೆ; ಎರಡನೆಯದು ಬಲವಾದದ್ದು ([8, 8, 8], ಉಳಿಕೆಯನ್ನು ಮೊದಲ ಮೌಲ್ಯಕ್ಕೆ ಸೇರಿಸಿ). ಇತಿಹಾಸ ವರ್ತನೆ ಬದಲಿಸುತ್ತದೆ, ಅದೇ ಮುಖ್ಯ ಅಂಶ.",
    "code": "class SelfReflector:\n    def reflect(self, candidate: Candidate, target: int) -> str:\n        difference = target - candidate.total\n        if difference > 0:\n            return f\"Previous total {candidate.total} was too low for target {target}; increase the values.\"\n        if difference < 0:\n            return f\"Previous total {candidate.total} was too high for target {target}; decrease the values.\"\n        return \"The candidate already satisfies the target.\"\n\n\nclass EpisodicMemory:\n    def __init__(self, capacity: int = 3):\n        self.capacity = capacity\n        self._items: list[str] = []\n\n    def add(self, reflection: str) -> None:\n        self._items.append(reflection)\n        if len(self._items) > self.capacity:\n            self._items.pop(0)\n\n    def recall(self) -> list[str]:\n        return list(self._items)\n\n\nclass Actor:\n    \"\"\"Part 2 Actor: uses the whole reflection history, so a repeated 'too low' escalates the correction.\"\"\"\n\n    def act(self, target: int, reflections: list[str]) -> Candidate:\n        if not reflections:\n            return Candidate([4, 4, 4])\n        latest = reflections[-1]\n        low_count = sum(\"too low\" in r for r in reflections)\n        base, remainder = target // 3, target % 3\n        if \"too low\" in latest:\n            if low_count == 1:\n                return Candidate([base - 1, base, base])\n            values = [base, base, base]\n            values[0] += remainder\n            return Candidate(values)\n        if \"too high\" in latest:\n            values = [base, base, base]\n            values[-1] += remainder\n            return Candidate(values)\n        return Candidate([4, 4, 4])"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "reflexion_2.py",
    "headingEn": "ReflexionAgent, BaselineAgent and the experiments",
    "headingKn": "ReflexionAgent, BaselineAgent ಮತ್ತು ಪ್ರಯೋಗಗಳು",
    "descEn": "solve() is the loop: recall, act on a fresh attempt, evaluate, then reflect and remember. The baseline uses the same Actor, Evaluator and trial budget but passes reflections=[] every time, so memory is the only difference. main() runs seven experiments.",
    "descKn": "solve() loop: recall, ಹೊಸ ಪ್ರಯತ್ನದ ಮೇಲೆ act, evaluate, ನಂತರ reflect ಮತ್ತು remember. Baseline ಅದೇ Actor, Evaluator ಮತ್ತು ಸುತ್ತಿನ budget ಬಳಸುತ್ತದೆ ಆದರೆ ಪ್ರತಿ ಬಾರಿ reflections=[] ನೀಡುತ್ತದೆ, ಹಾಗಾಗಿ memory ಮಾತ್ರ ವ್ಯತ್ಯಾಸ. main() ಏಳು ಪ್ರಯೋಗ ಚಲಾಯಿಸುತ್ತದೆ.",
    "code": "class ReflexionAgent:\n    def __init__(self, actor, evaluator: Evaluator, reflector: SelfReflector, memory: EpisodicMemory):\n        self.actor, self.evaluator, self.reflector, self.memory = actor, evaluator, reflector, memory\n        self.history: list[dict] = []\n\n    def solve(self, target: int, max_trials: int = 3, verbose: bool = False) -> Optional[Candidate]:\n        for trial in range(1, max_trials + 1):\n            reflections = self.memory.recall()                               # RECALL\n            candidate = self.actor.act(target=target, reflections=reflections)   # ACT (fresh attempt)\n            passed = self.evaluator.binary(candidate=candidate, target=target)   # EVALUATE\n            self.history.append({\"trial\": trial, \"memory\": len(reflections), \"values\": candidate.values,\n                                 \"total\": candidate.total, \"passed\": passed})\n            if verbose:\n                print(f\"Trial {trial}: memory={len(reflections)} candidate={candidate.values} total={candidate.total} passed={passed}\")\n            if passed:\n                return candidate\n            reflection = self.reflector.reflect(candidate=candidate, target=target)  # REFLECT\n            self.memory.add(reflection)                                      # REMEMBER\n        return None\n\n\nclass BaselineAgent:\n    \"\"\"Same Actor, Evaluator and budget. The only difference: nothing is carried between trials.\"\"\"\n\n    def __init__(self, actor, evaluator):\n        self.actor, self.evaluator = actor, evaluator\n        self.history = []\n\n    def solve(self, target, max_trials=3, verbose=False):\n        for trial in range(1, max_trials + 1):\n            candidate = self.actor.act(target=target, reflections=[])\n            passed = self.evaluator.binary(candidate, target)\n            self.history.append({\"trial\": trial, \"total\": candidate.total, \"passed\": passed})\n            if verbose:\n                print(f\"Trial {trial}: candidate={candidate.values} total={candidate.total} passed={passed}\")\n            if passed:\n                return candidate\n        return None\n\n\ndef section(t):\n    print(f\"\\n--- {t} ---\")\n\n\ndef run(actor, target=24, trials=3, capacity=3, verbose=False):\n    agent = ReflexionAgent(actor, Evaluator(), SelfReflector(), EpisodicMemory(capacity))\n    result = agent.solve(target, trials, verbose)\n    return agent, result\n\n\ndef main():\n    section(\"1. The Self-Reflector turns a failure into a direction\")\n    r = SelfReflector()\n    for total in (12, 23, 30, 24):\n        print(f\"total {total:>2} vs target 24 -> {r.reflect(Candidate([total]), 24)}\")\n\n    section(\"2. Reflexion with the history-aware Actor\")\n    agent, result = run(Actor(), verbose=True)\n    print(\"solved:\", result.values if result else None)\n    print(\"memory at the end:\")\n    for m in agent.memory.recall():\n        print(\"  -\", m)\n\n    section(\"3. The no-reflection baseline: same Actor, same Evaluator, same 3 trials\")\n    base = BaselineAgent(Actor(), Evaluator())\n    result = base.solve(24, 3, verbose=True)\n    print(\"solved:\", result.values if result else None)\n\n    section(\"4. Comparison\")\n    print(f\"{'trial':<6}{'Reflexion total':<18}{'Baseline total'}\")\n    ref_agent, _ = run(Actor())\n    for a, b in zip(ref_agent.history, base.history):\n        print(f\"{a['trial']:<6}{str(a['total']) + (' PASS' if a['passed'] else ' FAIL'):<18}{b['total']} {'PASS' if b['passed'] else 'FAIL'}\")\n\n    section(\"5. Part 1's Actor inside the same loop (reads only the latest reflection), 6 trials\")\n    agent, result = run(Part1Actor(), trials=6, verbose=True)\n    print(\"solved:\", result.values if result else None)\n\n    section(\"6. Memory capacity changes behaviour (history-aware Actor, 6 trials)\")\n    for cap in (1, 2, 3):\n        agent, result = run(Actor(), trials=6, capacity=cap)\n        totals = [h[\"total\"] for h in agent.history]\n        print(f\"capacity={cap}: totals {totals} -> {'solved at trial ' + str(len(totals)) if result else 'NOT solved'}\")\n\n    section(\"7. recall() returns a copy\")\n    mem = EpisodicMemory()\n    mem.add(\"a lesson\")\n    got = mem.recall()\n    got.clear()\n    print(\"caller cleared its copy; memory still holds:\", mem.recall())"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. The Self-Reflector turns a failure into a direction ---\ntotal 12 vs target 24 -> Previous total 12 was too low for target 24; increase the values.\ntotal 23 vs target 24 -> Previous total 23 was too low for target 24; increase the values.\ntotal 30 vs target 24 -> Previous total 30 was too high for target 24; decrease the values.\ntotal 24 vs target 24 -> The candidate already satisfies the target.\n\n--- 2. Reflexion with the history-aware Actor ---\nTrial 1: memory=0 candidate=[4, 4, 4] total=12 passed=False\nTrial 2: memory=1 candidate=[7, 8, 8] total=23 passed=False\nTrial 3: memory=2 candidate=[8, 8, 8] total=24 passed=True\nsolved: [8, 8, 8]\nmemory at the end:\n  - Previous total 12 was too low for target 24; increase the values.\n  - Previous total 23 was too low for target 24; increase the values.\n\n--- 3. The no-reflection baseline: same Actor, same Evaluator, same 3 trials ---\nTrial 1: candidate=[4, 4, 4] total=12 passed=False\nTrial 2: candidate=[4, 4, 4] total=12 passed=False\nTrial 3: candidate=[4, 4, 4] total=12 passed=False\nsolved: None\n\n--- 4. Comparison ---\ntrial Reflexion total   Baseline total\n1     12 FAIL           12 FAIL\n2     23 FAIL           12 FAIL\n3     24 PASS           12 FAIL\n\n--- 5. Part 1's Actor inside the same loop (reads only the latest reflection), 6 trials ---\nTrial 1: memory=0 candidate=[4, 4, 4] total=12 passed=False\nTrial 2: memory=1 candidate=[7, 8, 8] total=23 passed=False\nTrial 3: memory=2 candidate=[7, 8, 8] total=23 passed=False\nTrial 4: memory=3 candidate=[7, 8, 8] total=23 passed=False\nTrial 5: memory=3 candidate=[7, 8, 8] total=23 passed=False\nTrial 6: memory=3 candidate=[7, 8, 8] total=23 passed=False\nsolved: None\n\n--- 6. Memory capacity changes behaviour (history-aware Actor, 6 trials) ---\ncapacity=1: totals [12, 23, 23, 23, 23, 23] -> NOT solved\ncapacity=2: totals [12, 23, 24] -> solved at trial 3\ncapacity=3: totals [12, 23, 24] -> solved at trial 3\n\n--- 7. recall() returns a copy ---\ncaller cleared its copy; memory still holds: ['a lesson']"
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
    "headingEn": "Reflexion Reaches the Target, the Baseline Does Not",
    "headingKn": "Reflexion ಗುರಿ ತಲುಪುತ್ತದೆ, Baseline ತಲುಪುವುದಿಲ್ಲ",
    "bodyEn": "Sections 2 to 4 are the controlled comparison. Reflexion produces totals 12, 23, 24 and passes on trial 3, with the memory growing from 0 to 2 reflections between trials. The baseline, with the same Actor, Evaluator and three trials, produces 12, 12, 12. The only difference is that failure information persisted. The claim this supports is narrow: an Actor that can interpret stored failure text changes its behaviour without any weight update. It does not show that Reflexion improves every agent.",
    "bodyKn": "ವಿಭಾಗ 2 ರಿಂದ 4 ನಿಯಂತ್ರಿತ ಹೋಲಿಕೆ. Reflexion ಮೊತ್ತ 12, 23, 24 ಉತ್ಪಾದಿಸಿ ಸುತ್ತು 3 ರಲ್ಲಿ ಪಾಸ್ ಆಗುತ್ತದೆ, ಸುತ್ತುಗಳ ನಡುವೆ memory 0 ರಿಂದ 2 reflections ಗೆ ಬೆಳೆಯುತ್ತದೆ. ಅದೇ Actor, Evaluator ಮತ್ತು ಮೂರು ಸುತ್ತಿನ baseline 12, 12, 12 ಉತ್ಪಾದಿಸುತ್ತದೆ. ವ್ಯತ್ಯಾಸ ವೈಫಲ್ಯ ಮಾಹಿತಿ ಉಳಿಯಿತು ಎಂಬುದು ಮಾತ್ರ. ಇದು ಬೆಂಬಲಿಸುವ ಹೇಳಿಕೆ ಸಂಕುಚಿತ: ಸಂಗ್ರಹಿತ ವೈಫಲ್ಯ ಪಠ್ಯ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಬಲ್ಲ Actor weight ನವೀಕರಣ ಇಲ್ಲದೆ ತನ್ನ ವರ್ತನೆ ಬದಲಿಸುತ್ತದೆ. ಪ್ರತಿ agent ಅನ್ನು Reflexion ಸುಧಾರಿಸುತ್ತದೆ ಎಂದು ಇದು ತೋರಿಸುವುದಿಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: A Reflection Is Useless If the Actor Ignores History",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Actor ಇತಿಹಾಸ ಕಡೆಗಣಿಸಿದರೆ Reflection ನಿರುಪಯುಕ್ತ",
    "bodyEn": "Section 5 puts Part 1's Actor, which reads only the latest reflection, into the same loop for six trials. It goes 12, 23, 23, 23, 23, 23, never solved. Memory holds reflections the whole time, but each one says \"too low\" and the Actor answers each one with the same correction. Reflections were generated, stored and retrieved, and behaviour still did not change beyond the first step. Storing a lesson is not the same as using it, and the fix is an Actor that conditions on the whole history.",
    "bodyKn": "ವಿಭಾಗ 5 ಭಾಗ 1 ರ Actor, ಅದು ಇತ್ತೀಚಿನ reflection ಮಾತ್ರ ಓದುತ್ತದೆ, ಅನ್ನು ಅದೇ loop ನಲ್ಲಿ ಆರು ಸುತ್ತಿಗೆ ಇಡುತ್ತದೆ. ಅದು 12, 23, 23, 23, 23, 23 ಹೋಗುತ್ತದೆ, ಎಂದೂ ಪರಿಹರಿಸುವುದಿಲ್ಲ. Memory ಇಡೀ ಸಮಯ reflections ಹೊಂದಿದೆ, ಆದರೆ ಪ್ರತಿಯೊಂದೂ \"too low\" ಎನ್ನುತ್ತದೆ ಮತ್ತು Actor ಪ್ರತಿಯೊಂದಕ್ಕೂ ಅದೇ ತಿದ್ದುಪಡಿಯಿಂದ ಉತ್ತರಿಸುತ್ತದೆ. Reflections ಉತ್ಪಾದನೆ, ಸಂಗ್ರಹ ಮತ್ತು ಪಡೆಯುವಿಕೆ ನಡೆದರೂ ವರ್ತನೆ ಮೊದಲ ಹಂತದ ನಂತರ ಬದಲಾಗಲಿಲ್ಲ. ಪಾಠ ಸಂಗ್ರಹಿಸುವುದು ಅದನ್ನು ಬಳಸುವುದಕ್ಕೆ ಸಮವಲ್ಲ; ಪರಿಹಾರ ಇಡೀ ಇತಿಹಾಸದ ಮೇಲೆ ಆಧರಿಸುವ Actor."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Memory Capacity Changes Whether the Agent Succeeds",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Memory Capacity Agent ಯಶಸ್ವಿಯಾಗುವುದನ್ನು ಬದಲಿಸುತ್ತದೆ",
    "bodyEn": "Section 6 runs the history-aware Actor with capacity 1, 2 and 3 for up to six trials. With capacity 1 the totals are 12, 23, 23, 23, 23, 23 and it is never solved; with capacity 2 and 3 it solves on trial 3. The Actor escalates only when it can see two \"too low\" reflections, and capacity 1 can never hold two. The memory bound that protects against rot also limits how much history the policy can use, so capacity has to be chosen together with the Actor's logic, not as an independent tuning knob.",
    "bodyKn": "ವಿಭಾಗ 6 ಇತಿಹಾಸ-ಅರಿವಿನ Actor ಅನ್ನು capacity 1, 2 ಮತ್ತು 3 ಜೊತೆ ಆರು ಸುತ್ತಿನವರೆಗೆ ಚಲಾಯಿಸುತ್ತದೆ. Capacity 1 ರಲ್ಲಿ ಮೊತ್ತಗಳು 12, 23, 23, 23, 23, 23 ಮತ್ತು ಎಂದೂ ಪರಿಹಾರವಾಗುವುದಿಲ್ಲ; capacity 2 ಮತ್ತು 3 ರಲ್ಲಿ ಸುತ್ತು 3 ರಲ್ಲಿ ಪರಿಹಾರ. Actor ಎರಡು \"too low\" reflections ಕಂಡಾಗ ಮಾತ್ರ ತೀವ್ರಗೊಳ್ಳುತ್ತದೆ, ಮತ್ತು capacity 1 ಎರಡನ್ನು ಎಂದೂ ಹಿಡಿದಿಡಲಾರದು. Rot ವಿರುದ್ಧ ರಕ್ಷಿಸುವ memory ಮಿತಿ ನೀತಿ ಬಳಸಬಹುದಾದ ಇತಿಹಾಸವನ್ನೂ ಮಿತಿಗೊಳಿಸುತ್ತದೆ; ಆದ್ದರಿಂದ capacity ಅನ್ನು Actor ನ ತರ್ಕದೊಂದಿಗೆ ಆರಿಸಬೇಕು, ಸ್ವತಂತ್ರ ಟ್ಯೂನಿಂಗ್ ಗುಂಡಿಯಾಗಿ ಅಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "The Reflector Output and the Copy Guarantee",
    "headingKn": "Reflector Output ಮತ್ತು ಪ್ರತಿ ಖಾತರಿ",
    "bodyEn": "Section 1 shows the Reflector for four totals: 12 and 23 give \"too low\", 30 gives \"too high\", and 24 gives \"already satisfies\". Notice that 12 and 23 differ by 11 but produce nearly the same sentence, because the text carries only a direction. Part 3 adds the magnitude. Section 7 confirms recall() hands back a copy: the caller cleared its list and the memory still held \"a lesson\".",
    "bodyKn": "ವಿಭಾಗ 1 ನಾಲ್ಕು ಮೊತ್ತಗಳಿಗೆ Reflector ತೋರಿಸುತ್ತದೆ: 12 ಮತ್ತು 23 \"too low\", 30 \"too high\", ಮತ್ತು 24 \"already satisfies\". 12 ಮತ್ತು 23 ರ ವ್ಯತ್ಯಾಸ 11 ಆದರೂ ಬಹುತೇಕ ಒಂದೇ ವಾಕ್ಯ ಬರುತ್ತದೆ ಎಂಬುದನ್ನು ಗಮನಿಸಿ, ಏಕೆಂದರೆ ಪಠ್ಯ ದಿಕ್ಕು ಮಾತ್ರ ಒಯ್ಯುತ್ತದೆ. ಭಾಗ 3 ಪ್ರಮಾಣ ಸೇರಿಸುತ್ತದೆ. ವಿಭಾಗ 7 recall() ಪ್ರತಿ ಹಿಂತಿರುಗಿಸುತ್ತದೆ ಎಂದು ದೃಢೀಕರಿಸುತ್ತದೆ: ಕರೆದಾರ ತನ್ನ ಪಟ್ಟಿ ಖಾಲಿ ಮಾಡಿತು ಮತ್ತು memory ಇನ್ನೂ \"a lesson\" ಹೊಂದಿತ್ತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "A Real Reflection Has Three Parts",
    "headingKn": "ನಿಜವಾದ Reflection ಗೆ ಮೂರು ಭಾಗಗಳು",
    "bodyEn": "Useful reflections say what happened, why it failed, and what should change next time, with the evidence. \"I failed, do better\" has no information. \"The test expected 404 but got 500 because the missing-record case was unhandled; handle it before reading the result\" does. Scope matters as well: a lesson learned for one repository should not become a global rule.",
    "bodyKn": "ಉಪಯುಕ್ತ reflections ಏನಾಯಿತು, ಏಕೆ ವಿಫಲವಾಯಿತು ಮತ್ತು ಮುಂದಿನ ಬಾರಿ ಏನು ಬದಲಾಗಬೇಕು ಎಂದು ಸಾಕ್ಷ್ಯದೊಂದಿಗೆ ಹೇಳುತ್ತವೆ. \"ನಾನು ವಿಫಲನಾದೆ, ಚೆನ್ನಾಗಿ ಮಾಡು\" ಗೆ ಮಾಹಿತಿ ಇಲ್ಲ. \"Test 404 ನಿರೀಕ್ಷಿಸಿತು ಆದರೆ 500 ಸಿಕ್ಕಿತು, ಏಕೆಂದರೆ ಕಾಣೆಯಾದ ದಾಖಲೆ ಪ್ರಕರಣ ನಿರ್ವಹಿಸಿರಲಿಲ್ಲ; ಫಲಿತಾಂಶ ಓದುವ ಮೊದಲು ಅದನ್ನು ನಿರ್ವಹಿಸು\" ಮಾಹಿತಿ ಹೊಂದಿದೆ. ವ್ಯಾಪ್ತಿಯೂ ಮುಖ್ಯ: ಒಂದು ರೆಪೊಸಿಟರಿಗೆ ಕಲಿತ ಪಾಠ ಜಾಗತಿಕ ನಿಯಮವಾಗಬಾರದು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "Language is a high-bandwidth feedback channel. A scalar reward of 0 says \"bad\"; a reflection can say where, why and what to try. Because it lives in context, it takes effect on the very next attempt, with no training batch, optimizer or redeploy.",
    "bodyKn": "ಭಾಷೆ ಹೆಚ್ಚಿನ ಬ್ಯಾಂಡ್‌ವಿಡ್ತ್ ಪ್ರತಿಕ್ರಿಯೆ ಮಾರ್ಗ. Scalar reward 0 \"ಕೆಟ್ಟದು\" ಎನ್ನುತ್ತದೆ; reflection ಎಲ್ಲಿ, ಏಕೆ ಮತ್ತು ಏನು ಪ್ರಯತ್ನಿಸಬೇಕು ಎಂದು ಹೇಳಬಲ್ಲದು. ಅದು context ನಲ್ಲಿರುವುದರಿಂದ ಮುಂದಿನ ಪ್ರಯತ್ನದಲ್ಲೇ ಪರಿಣಾಮ ಬೀರುತ್ತದೆ, ತರಬೇತಿ batch, optimizer ಅಥವಾ ಮರುನಿಯೋಜನೆ ಇಲ್ಲದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Where This Appears in AI Systems",
    "headingKn": "AI ವ್ಯವಸ್ಥೆಗಳಲ್ಲಿ ಇದು ಎಲ್ಲಿ ಕಾಣುತ್ತದೆ",
    "bodyEn": "A test-driven coding agent turns each failing assertion into a note that heads the next prompt. A document agent stores \"the client wants metric units\" after one rejected draft. In both, a bounded buffer and a rule for what deserves a note keep the prompt small.",
    "bodyKn": "Test-ಚಾಲಿತ coding agent ಪ್ರತಿ ವಿಫಲ assertion ಅನ್ನು ಮುಂದಿನ prompt ನ ಆರಂಭದ ಟಿಪ್ಪಣಿಯಾಗಿಸುತ್ತದೆ. Document agent ಒಂದು ತಿರಸ್ಕೃತ ಕರಡಿನ ನಂತರ \"ಗ್ರಾಹಕ ಮೆಟ್ರಿಕ್ ಘಟಕ ಬಯಸುತ್ತಾರೆ\" ಎಂಬುದನ್ನು ಸಂಗ್ರಹಿಸುತ್ತದೆ. ಎರಡರಲ್ಲೂ ಮಿತಿಯ buffer ಮತ್ತು ಯಾವುದಕ್ಕೆ ಟಿಪ್ಪಣಿ ಅರ್ಹ ಎಂಬ ನಿಯಮ prompt ಅನ್ನು ಚಿಕ್ಕದಾಗಿಡುತ್ತವೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"if reflections are stored, the agent has learned.\" Section 5 stores reflections for six trials and never improves past 23. Learning requires evaluation, a useful reflection, persistence, retrieval and an Actor that changes its behaviour because of it. Any one missing link breaks the loop.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"Reflections ಸಂಗ್ರಹಿಸಿದ್ದರೆ agent ಕಲಿತಿದೆ.\" ವಿಭಾಗ 5 ಆರು ಸುತ್ತಿಗೆ reflections ಸಂಗ್ರಹಿಸುತ್ತದೆ ಮತ್ತು 23 ಕ್ಕಿಂತ ಮುಂದೆ ಎಂದೂ ಸುಧಾರಿಸುವುದಿಲ್ಲ. ಕಲಿಕೆಗೆ ಮೌಲ್ಯಮಾಪನ, ಉಪಯುಕ್ತ reflection, ನಿರಂತರತೆ, ಪಡೆಯುವಿಕೆ ಮತ್ತು ಅದರ ಕಾರಣ ತನ್ನ ವರ್ತನೆ ಬದಲಿಸುವ Actor ಬೇಕು. ಯಾವುದೇ ಒಂದು ಕೊಂಡಿ ಕಾಣೆಯಾದರೆ loop ಮುರಿಯುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) The Evaluator says whether; the Self-Reflector says what to change. 2) Bounded memory fights rot but also limits usable history. 3) A fresh attempt receives memory; it does not continue the failed one. 4) Reflexion produced 12, 23, 24 against the baseline's 12, 12, 12. 5) Reflections stored but ignored change nothing: 23 six times. 6) Capacity 1 never solved; capacity 2 did. Part 3 runs the experiment at scale, breaks the evaluator and adds expiry.",
    "bodyKn": "1) Evaluator ಆಯಿತೇ ಎಂದು ಹೇಳುತ್ತದೆ; Self-Reflector ಏನು ಬದಲಾಗಬೇಕು ಎಂದು ಹೇಳುತ್ತದೆ. 2) ಮಿತಿಯ memory rot ವಿರುದ್ಧ ಹೋರಾಡುತ್ತದೆ ಆದರೆ ಬಳಸಬಹುದಾದ ಇತಿಹಾಸವನ್ನೂ ಮಿತಿಗೊಳಿಸುತ್ತದೆ. 3) ಹೊಸ ಪ್ರಯತ್ನ memory ಪಡೆಯುತ್ತದೆ; ವಿಫಲವಾದದ್ದನ್ನು ಮುಂದುವರಿಸುವುದಿಲ್ಲ. 4) Reflexion 12, 23, 24 ನೀಡಿತು, baseline 12, 12, 12. 5) ಸಂಗ್ರಹಿಸಿ ಕಡೆಗಣಿಸಿದ reflections ಏನನ್ನೂ ಬದಲಿಸುವುದಿಲ್ಲ: 23 ಆರು ಬಾರಿ. 6) Capacity 1 ಎಂದೂ ಪರಿಹರಿಸಲಿಲ್ಲ; capacity 2 ಪರಿಹರಿಸಿತು. ಭಾಗ 3 ಪ್ರಯೋಗವನ್ನು ದೊಡ್ಡ ಪ್ರಮಾಣದಲ್ಲಿ ಚಲಾಯಿಸುತ್ತದೆ, evaluator ಮುರಿಯುತ್ತದೆ ಮತ್ತು ಮುಕ್ತಾಯ ಸೇರಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What separates an Evaluator from a Self-Reflector?",
      "qKn": "Evaluator ಮತ್ತು Self-Reflector ಅನ್ನು ಯಾವುದು ಬೇರ್ಪಡಿಸುತ್ತದೆ?",
      "opts": [
       "The Evaluator trains weights",
       "The Evaluator judges performance; the Self-Reflector turns failure into an actionable lesson",
       "They are the same",
       "The Self-Reflector executes tools"
      ],
      "optsKn": [
       "Evaluator weights ತರಬೇತಿ ಮಾಡುತ್ತದೆ",
       "Evaluator ಕಾರ್ಯಕ್ಷಮತೆ ಮೌಲ್ಯಮಾಪನ ಮಾಡುತ್ತದೆ; Self-Reflector ವೈಫಲ್ಯವನ್ನು ಕ್ರಿಯಾತ್ಮಕ ಪಾಠವಾಗಿಸುತ್ತದೆ",
       "ಅವು ಒಂದೇ",
       "Self-Reflector tools ಚಲಾಯಿಸುತ್ತದೆ"
      ],
      "correct": 1
     },
     {
      "q": "Why does each new trial receive episodic memory?",
      "qKn": "ಪ್ರತಿ ಹೊಸ ಸುತ್ತು episodic memory ಏಕೆ ಪಡೆಯುತ್ತದೆ?",
      "opts": [
       "To enlarge the network",
       "To give the fresh attempt information learned from earlier failures",
       "To replace the Evaluator",
       "To stop the Actor"
      ],
      "optsKn": [
       "ನೆಟ್‌ವರ್ಕ್ ದೊಡ್ಡದಾಗಿಸಲು",
       "ಹಿಂದಿನ ವೈಫಲ್ಯಗಳಿಂದ ಕಲಿತ ಮಾಹಿತಿಯನ್ನು ಹೊಸ ಪ್ರಯತ್ನಕ್ಕೆ ನೀಡಲು",
       "Evaluator ಬದಲಿಸಲು",
       "Actor ನಿಲ್ಲಿಸಲು"
      ],
      "correct": 1
     },
     {
      "q": "In this lesson's section 6, what happened at memory capacity 1?",
      "qKn": "ಈ ಪಾಠದ ವಿಭಾಗ 6 ರಲ್ಲಿ memory capacity 1 ರಲ್ಲಿ ಏನಾಯಿತು?",
      "opts": [
       "It solved on trial 2",
       "The totals stayed at 23 and it never solved",
       "It crashed",
       "It solved on trial 3"
      ],
      "optsKn": [
       "ಸುತ್ತು 2 ರಲ್ಲಿ ಪರಿಹರಿಸಿತು",
       "ಮೊತ್ತ 23 ರಲ್ಲೇ ಉಳಿಯಿತು ಮತ್ತು ಎಂದೂ ಪರಿಹರಿಸಲಿಲ್ಲ",
       "Crash ಆಯಿತು",
       "ಸುತ್ತು 3 ರಲ್ಲಿ ಪರಿಹರಿಸಿತು"
      ],
      "correct": 1
     },
     {
      "q": "Reflections are stored but the agent repeats the same failed output. The likely problem?",
      "qKn": "Reflections ಸಂಗ್ರಹವಾಗುತ್ತವೆ ಆದರೆ agent ಅದೇ ವಿಫಲ ಔಟ್‌ಪುಟ್ ಪುನರಾವರ್ತಿಸುತ್ತದೆ. ಸಂಭವನೀಯ ಸಮಸ್ಯೆ?",
      "opts": [
       "Reflexion needs a GPU",
       "The Actor does not turn reflections into changed behaviour",
       "The evaluator is too accurate",
       "Memory must hold 100 items"
      ],
      "optsKn": [
       "Reflexion ಗೆ GPU ಬೇಕು",
       "Actor reflections ಅನ್ನು ಬದಲಾದ ವರ್ತನೆಯಾಗಿ ಪರಿವರ್ತಿಸುವುದಿಲ್ಲ",
       "Evaluator ಬಹಳ ನಿಖರ",
       "Memory 100 ಅಂಶ ಹೊಂದಿರಬೇಕು"
      ],
      "correct": 1
     },
     {
      "q": "Which sequence describes Reflexion?",
      "qKn": "ಯಾವ ಅನುಕ್ರಮ Reflexion ಅನ್ನು ವಿವರಿಸುತ್ತದೆ?",
      "opts": [
       "Act, gradient, retrain, deploy",
       "Reflect, delete the model, retrain",
       "Act, evaluate, reflect, remember, fresh retry",
       "Plan, retry randomly, ignore failures"
      ],
      "optsKn": [
       "Act, gradient, ಮರುತರಬೇತಿ, deploy",
       "Reflect, ಮಾದರಿ ಅಳಿಸಿ, ಮರುತರಬೇತಿ",
       "Act, evaluate, reflect, remember, ಹೊಸ retry",
       "Plan, ಯಾದೃಚ್ಛಿಕ retry, ವೈಫಲ್ಯ ಕಡೆಗಣನೆ"
      ],
      "correct": 2
     }
    ]
   }
  }
 ]
};
