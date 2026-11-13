module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6af7584e16045e49cbd95188",
 "order": 1,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Map Assumptions and Resolve the Riskiest One First (Part 2 of 3) — Decisive Experiments and Verdicts",
 "titleKn": "ಊಹೆಗಳನ್ನು ನಕ್ಷೆ ಮಾಡಿ ಮತ್ತು ಅತಿ ಅಪಾಯಕಾರಿಯನ್ನು ಮೊದಲು ಪರಿಹರಿಸಿ (ಭಾಗ 2 / 3) — ನಿರ್ಣಾಯಕ ಪ್ರಯೋಗಗಳು ಮತ್ತು ತೀರ್ಪುಗಳು",
 "desc": "Lock the threshold first, use a confidence interval to reach a verdict and keep evidence append-only.",
 "descKn": "ಮೊದಲು ಮಿತಿ ಲಾಕ್ ಮಾಡಿ, ತೀರ್ಪಿಗೆ ವಿಶ್ವಾಸ ಅಂತರ ಬಳಸಿ ಮತ್ತು ಸಾಕ್ಷ್ಯ ಸೇರ್ಪಡೆ-ಮಾತ್ರ ಇಡಿ.",
 "objectives": [
  "Fix the threshold before the data.",
  "Compute a Wilson interval.",
  "Separate supports, rejects, ambiguous.",
  "Detect a moved threshold.",
  "Keep evidence append-only."
 ],
 "objectivesKn": [
  "ದತ್ತಾಂಶಕ್ಕೆ ಮುನ್ನ ಮಿತಿ ನಿಗದಿಪಡಿಸಿ.",
  "Wilson ಅಂತರ ಲೆಕ್ಕ ಹಾಕಿ.",
  "supports, rejects, ambiguous ಬೇರ್ಪಡಿಸಿ.",
  "ಸರಿಸಿದ ಮಿತಿ ಪತ್ತೆ ಮಾಡಿ.",
  "ಸಾಕ್ಷ್ಯ ಸೇರ್ಪಡೆ-ಮಾತ್ರ ಇಡಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Map Assumptions and Resolve the Riskiest One First (Part 2 of 3)",
    "textKn": "ಊಹೆಗಳನ್ನು ನಕ್ಷೆ ಮಾಡಿ ಮತ್ತು ಅತಿ ಅಪಾಯಕಾರಿಯನ್ನು ಮೊದಲು ಪರಿಹರಿಸಿ (ಭಾಗ 2 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 2 of 3: an experiment fixed before the data, a Wilson interval to separate supports, rejects and ambiguous, a moved threshold, a biased sample and append-only evidence. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind mapping assumptions and resolving the riskiest one first (assumption records, risk scores, decisive experiments, verdicts and reprioritisation), not the real software, and the assumptions, ratings, alert counts and costs are made up by the lab and no language model is involved, so no real LLM behaviour is measured. The original main.py was not supplied, and the lesson text presents its Python as a teaching implementation, so the labs are our own implementation of the behaviour described. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 2ನೆಯದು: ದತ್ತಾಂಶಕ್ಕೆ ಮುನ್ನ ನಿಗದಿಯಾದ ಪ್ರಯೋಗ, supports, rejects ಮತ್ತು ambiguous ಬೇರ್ಪಡಿಸಲು Wilson ಅಂತರ, ಸರಿಸಿದ ಮಿತಿ, ಪಕ್ಷಪಾತ ಮಾದರಿ ಮತ್ತು ಸೇರ್ಪಡೆ-ಮಾತ್ರ ಸಾಕ್ಷ್ಯ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು ಊಹೆಗಳನ್ನು ನಕ್ಷೆ ಮಾಡಿ ಅತಿ ಅಪಾಯಕಾರಿಯನ್ನು ಮೊದಲು ಪರಿಹರಿಸುವುದು (ಊಹೆ ದಾಖಲೆಗಳು, ಅಪಾಯ ಅಂಕಗಳು, ನಿರ್ಣಾಯಕ ಪ್ರಯೋಗಗಳು, ತೀರ್ಪುಗಳು ಮತ್ತು ಮರುಆದ್ಯತೆ) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಊಹೆಗಳು, ರೇಟಿಂಗ್‌ಗಳು, alert ಎಣಿಕೆಗಳು ಮತ್ತು ವೆಚ್ಚಗಳನ್ನು ಲ್ಯಾಬ್ ಕಲ್ಪಿಸಿದ್ದು ಮತ್ತು ಭಾಷಾ ಮಾದರಿ ಇಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ main.py ಒದಗಿಸಿರಲಿಲ್ಲ, ಮತ್ತು lesson ಪಠ್ಯ ತನ್ನ Python ಅನ್ನು ಬೋಧನಾ ಅನುಷ್ಠಾನ ಎಂದು ಪ್ರಸ್ತುತಪಡಿಸುತ್ತದೆ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ವಿವರಿಸಿದ ವರ್ತನೆಯ ನಮ್ಮದೇ ಅನುಷ್ಠಾನ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "A Rate Alone Is Not a Verdict",
    "textKn": "ದರ ಮಾತ್ರ ತೀರ್ಪಲ್ಲ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Fix the Threshold, Then Look",
    "headingKn": "ಮೊದಲು ಮಿತಿ ನಿಗದಿಪಡಿಸಿ, ನಂತರ ನೋಡಿ",
    "bodyEn": "This part runs the arithmetic of an experiment on made-up alert counts. The claim and threshold are locked with a hash before the data, a real 95 percent Wilson interval separates supports, rejects and ambiguous, moving the threshold afterwards is detected, a sample drawn from one service misleads, and evidence is appended and never overwritten. The counts are invented; no real alerts were examined.",
    "bodyKn": "ಈ ಭಾಗ ಕಲ್ಪಿತ alert ಎಣಿಕೆಗಳ ಮೇಲೆ ಪ್ರಯೋಗದ ಅಂಕಗಣಿತ ಓಡಿಸುತ್ತದೆ. ಹೇಳಿಕೆ ಮತ್ತು ಮಿತಿ ದತ್ತಾಂಶಕ್ಕೆ ಮುನ್ನ hash ಮೂಲಕ ಲಾಕ್ ಆಗುತ್ತವೆ, ನಿಜ 95 ಶೇಕಡಾ Wilson ಅಂತರ supports, rejects ಮತ್ತು ambiguous ಬೇರ್ಪಡಿಸುತ್ತದೆ, ನಂತರ ಮಿತಿ ಸರಿಸುವುದು ಪತ್ತೆಯಾಗುತ್ತದೆ, ಒಂದು ಸೇವೆಯಿಂದ ತೆಗೆದ ಮಾದರಿ ದಾರಿ ತಪ್ಪಿಸುತ್ತದೆ ಮತ್ತು ಸಾಕ್ಷ್ಯ ಸೇರಿಸಲಾಗುತ್ತದೆ, ಎಂದೂ ಮೇಲ್ಬರೆಯಲಾಗುವುದಿಲ್ಲ. ಎಣಿಕೆಗಳು ಕಲ್ಪಿತ; ಯಾವುದೇ ನಿಜ alerts ಪರೀಕ್ಷಿಸಲಾಗಿಲ್ಲ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "A Decisive Experiment",
    "headingKn": "ನಿರ್ಣಾಯಕ ಪ್ರಯೋಗ",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">a verdict needs the interval, not just the rate</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">claim</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">threshold first</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">sample</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">representative</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">interval</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">Wilson 95%</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">verdict</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">supports / rejects / ambiguous</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">a verdict needs the interval, not just the rate</text></svg>",
    "captionEn": "The threshold is fixed first and the interval decides the verdict.",
    "captionKn": "ಮಿತಿ ಮೊದಲು ನಿಗದಿ ಮತ್ತು ಅಂತರ ತೀರ್ಪು ನಿರ್ಧರಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Verdict rule used in the lab",
    "headingKn": "ಲ್ಯಾಬ್‌ನಲ್ಲಿ ಬಳಸಿದ ತೀರ್ಪು ನಿಯಮ",
    "headers": [
     "Interval versus threshold 0.90",
     "Verdict"
    ],
    "rows": [
     [
      "lower end at or above 0.90",
      "supports"
     ],
     [
      "upper end below 0.90",
      "rejects"
     ],
     [
      "interval contains 0.90",
      "ambiguous"
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
    "filename": "am_2.py",
    "headingEn": "Wilson interval, verdict, lock and evidence log",
    "headingKn": "Wilson ಅಂತರ, ತೀರ್ಪು, lock ಮತ್ತು ಸಾಕ್ಷ್ಯ ದಾಖಲೆ",
    "descEn": "wilson computes the interval for successes out of n, verdict compares its ends with the threshold, lock hashes the experiment definition and EvidenceLog only appends entries and records supersessions.",
    "descKn": "wilson n ರಲ್ಲಿ ಯಶಸ್ಸುಗಳಿಗೆ ಅಂತರ ಲೆಕ್ಕ ಹಾಕುತ್ತದೆ, verdict ಅದರ ತುದಿಗಳನ್ನು ಮಿತಿಯೊಂದಿಗೆ ಹೋಲಿಸುತ್ತದೆ, lock ಪ್ರಯೋಗ ವ್ಯಾಖ್ಯೆಯನ್ನು hash ಮಾಡುತ್ತದೆ ಮತ್ತು EvidenceLog ನಮೂದುಗಳನ್ನು ಸೇರಿಸಿ ಮಾತ್ರ supersession ದಾಖಲಿಸುತ್ತದೆ.",
    "code": "def wilson(successes, n, z=1.96):\n    if n == 0:\n        return (0.0, 1.0)\n    p = successes / n\n    d = 1 + z * z / n\n    centre = (p + z * z / (2 * n)) / d\n    half = z * math.sqrt(p * (1 - p) / n + z * z / (4 * n * n)) / d\n    return (max(0.0, centre - half), min(1.0, centre + half))\n\n\ndef verdict(successes, n, threshold):\n    lo, hi = wilson(successes, n)\n    if lo >= threshold:\n        return \"supports\", (round(lo, 3), round(hi, 3))\n    if hi < threshold:\n        return \"rejects\", (round(lo, 3), round(hi, 3))\n    return \"ambiguous\", (round(lo, 3), round(hi, 3))\n\n\ndef lock(experiment):\n    return hashlib.sha256(json.dumps(experiment, sort_keys=True).encode()).hexdigest()[:10]\n\n\nclass EvidenceLog:\n    def __init__(self):\n        self.entries = []\n\n    def add(self, exp_hash, successes, n, note):\n        self.entries.append({\"exp\": exp_hash, \"successes\": successes, \"n\": n, \"note\": note})\n\n    def supersede(self, index, note):\n        self.entries.append({\"supersedes\": index, \"note\": note})"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "am_2.py",
    "headingEn": "main(): five experiments",
    "headingKn": "main(): ಐದು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() locks an experiment, computes six verdicts, moves a threshold, compares a biased and a mixed sample and appends evidence.",
    "descKn": "main() ಪ್ರಯೋಗ ಲಾಕ್ ಮಾಡಿ, ಆರು ತೀರ್ಪು ಲೆಕ್ಕ ಹಾಕಿ, ಮಿತಿ ಸರಿಸಿ, ಪಕ್ಷಪಾತ ಮತ್ತು ಮಿಶ್ರ ಮಾದರಿ ಹೋಲಿಸಿ ಮತ್ತು ಸಾಕ್ಷ್ಯ ಸೇರಿಸುತ್ತದೆ.",
    "code": "def main():\n    exp = {\"claim\": \"at least 90 percent of alerts identify the failing service\", \"threshold\": 0.90, \"population\": \"alerts from the last 30 days\", \"min_sample\": 50}\n    section(\"1. Genuinely running: the experiment is fixed before the data (made-up alert counts)\")\n    h = lock(exp)\n    print(\"experiment:\", exp, \"| lock:\", h)\n    print(\"the claim, the threshold, the population and the sample minimum were written down and hashed before any alert was looked at, so a changed threshold shows up as a different hash\")\n\n    section(\"2. Genuinely computing: the same observed rate gives different verdicts at different sample sizes\")\n    for ok, n in ((46, 50), (92, 100), (460, 500), (475, 500), (45, 50), (400, 500)):\n        v, ci = verdict(ok, n, exp[\"threshold\"])\n        print(f\"{ok:4}/{n:<4} rate={ok / n:.2f}  95% Wilson interval={ci}  verdict={v}\")\n    print(\"the same 92 percent was ambiguous at 50, 100 and even 500 alerts because the lower end of the interval stayed under 0.90 (0.893 at 500), and only 475/500 = 95 percent cleared the threshold; 400/500 = 80 percent was the one far enough below for the whole interval to sit under 0.90; a point estimate alone would have said supports for the first four rows\")\n\n    section(\"3. Genuinely running: moving the threshold after the data is detectable\")\n    after = dict(exp, threshold=0.80)\n    print(\"original lock:\", lock(exp), \"| lock after edit:\", lock(after), \"| same:\", lock(exp) == lock(after))\n    print(\"verdict at 0.90 for 46/50:\", verdict(46, 50, 0.90)[0], \"| at the edited 0.80:\", verdict(46, 50, 0.80)[0])\n    print(\"lowering the threshold from 0.90 to 0.80 turned the same 46 of 50 from ambiguous into supports, which is exactly the move the lock exposes; the lab compares hashes and a team would have to check them in review\")\n\n    section(\"4. Genuinely measuring: a sample that does not represent the population\")\n    population = [(\"payments\", 0.70)] * 40 + [(\"search\", 0.97)] * 60\n    overall = sum(p for _, p in population) / len(population)\n    biased = [p for s, p in population if s == \"search\"]\n    print(f\"rate over all alerts (service mix 40 payments, 60 search): {overall:.3f}\")\n    print(f\"rate over a sample drawn only from search: {sum(biased) / len(biased):.3f}\")\n    print(\"an experiment that only looked at the well-behaved service reported 0.97 while the mixed population was 0.862, so the population definition has to say which alerts count; the numbers are invented for the lab\")\n\n    section(\"5. Genuinely running: evidence is appended and never overwritten\")\n    log = EvidenceLog()\n    log.add(h, 46, 50, \"first pass\")\n    log.add(h, 460, 500, \"full 30 days\")\n    log.supersede(0, \"first pass used only the first week\")\n    for e in log.entries:\n        print(e)\n    print(\"the first result is still in the log with a note saying it was superseded, so a reader can see what was believed at each point; an update in place would have lost the earlier reading\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: the experiment is fixed before the data (made-up alert counts) ---\nexperiment: {'claim': 'at least 90 percent of alerts identify the failing service', 'threshold': 0.9, 'population': 'alerts from the last 30 days', 'min_sample': 50} | lock: cc567785d3\nthe claim, the threshold, the population and the sample minimum were written down and hashed before any alert was looked at, so a changed threshold shows up as a different hash\n\n--- 2. Genuinely computing: the same observed rate gives different verdicts at different sample sizes ---\n  46/50   rate=0.92  95% Wilson interval=(0.812, 0.968)  verdict=ambiguous\n  92/100  rate=0.92  95% Wilson interval=(0.85, 0.959)  verdict=ambiguous\n 460/500  rate=0.92  95% Wilson interval=(0.893, 0.941)  verdict=ambiguous\n 475/500  rate=0.95  95% Wilson interval=(0.927, 0.966)  verdict=supports\n  45/50   rate=0.90  95% Wilson interval=(0.786, 0.957)  verdict=ambiguous\n 400/500  rate=0.80  95% Wilson interval=(0.763, 0.833)  verdict=rejects\nthe same 92 percent was ambiguous at 50, 100 and even 500 alerts because the lower end of the interval stayed under 0.90 (0.893 at 500), and only 475/500 = 95 percent cleared the threshold; 400/500 = 80 percent was the one far enough below for the whole interval to sit under 0.90; a point estimate alone would have said supports for the first four rows\n\n--- 3. Genuinely running: moving the threshold after the data is detectable ---\noriginal lock: cc567785d3 | lock after edit: 9ad08a2eda | same: False\nverdict at 0.90 for 46/50: ambiguous | at the edited 0.80: supports\nlowering the threshold from 0.90 to 0.80 turned the same 46 of 50 from ambiguous into supports, which is exactly the move the lock exposes; the lab compares hashes and a team would have to check them in review\n\n--- 4. Genuinely measuring: a sample that does not represent the population ---\nrate over all alerts (service mix 40 payments, 60 search): 0.862\nrate over a sample drawn only from search: 0.970\nan experiment that only looked at the well-behaved service reported 0.97 while the mixed population was 0.862, so the population definition has to say which alerts count; the numbers are invented for the lab\n\n--- 5. Genuinely running: evidence is appended and never overwritten ---\n{'exp': 'cc567785d3', 'successes': 46, 'n': 50, 'note': 'first pass'}\n{'exp': 'cc567785d3', 'successes': 460, 'n': 500, 'note': 'full 30 days'}\n{'supersedes': 0, 'note': 'first pass used only the first week'}\nthe first result is still in the log with a note saying it was superseded, so a reader can see what was believed at each point; an update in place would have lost the earlier reading"
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
    "headingEn": "Experiment 1: The experiment is fixed before the data (made-up alert counts)",
    "headingKn": "ಪ್ರಯೋಗ 1: The experiment is fixed before the data (made-up alert counts)",
    "bodyEn": "What it ran: The experiment is fixed before the data (made-up alert counts). What the lab concluded: the claim, the threshold, the population and the sample minimum were written down and hashed before any alert was looked at, so a changed threshold shows up as a different hash",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: The experiment is fixed before the data (made-up alert counts). ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the claim, the threshold, the population and the sample minimum were written down and hashed before any alert was looked at, so a changed threshold shows up as a different hash"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. Genuinely running: the experiment is fixed before the data (made-up alert counts) ---\nexperiment: {'claim': 'at least 90 percent of alerts identify the failing service', 'threshold': 0.9, 'population': 'alerts from the last 30 days', 'min_sample': 50} | lock: cc567785d3"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: The same observed rate gives different verdicts at different sample sizes",
    "headingKn": "ಪ್ರಯೋಗ 2: The same observed rate gives different verdicts at different sample sizes",
    "bodyEn": "What it ran: The same observed rate gives different verdicts at different sample sizes. What the lab concluded: the same 92 percent was ambiguous at 50, 100 and even 500 alerts because the lower end of the interval stayed under 0.90 (0.893 at 500), and only 475/500 = 95 percent cleared the threshold; 400/500 = 80 percent was the one far enough below for the whole interval to sit under 0.90; a point estimate alone would have said supports for the first four rows",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: The same observed rate gives different verdicts at different sample sizes. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the same 92 percent was ambiguous at 50, 100 and even 500 alerts because the lower end of the interval stayed under 0.90 (0.893 at 500), and only 475/500 = 95 percent cleared the threshold; 400/500 = 80 percent was the one far enough below for the whole interval to sit under 0.90; a point estimate alone would have said supports for the first four rows"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely computing: the same observed rate gives different verdicts at different sample sizes ---\n  46/50   rate=0.92  95% Wilson interval=(0.812, 0.968)  verdict=ambiguous\n  92/100  rate=0.92  95% Wilson interval=(0.85, 0.959)  verdict=ambiguous\n 460/500  rate=0.92  95% Wilson interval=(0.893, 0.941)  verdict=ambiguous\n 475/500  rate=0.95  95% Wilson interval=(0.927, 0.966)  verdict=supports\n  45/50   rate=0.90  95% Wilson interval=(0.786, 0.957)  verdict=ambiguous\n 400/500  rate=0.80  95% Wilson interval=(0.763, 0.833)  verdict=rejects"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: Moving the threshold after the data is detectable",
    "headingKn": "ಪ್ರಯೋಗ 3: Moving the threshold after the data is detectable",
    "bodyEn": "What it ran: Moving the threshold after the data is detectable. What the lab concluded: lowering the threshold from 0.90 to 0.80 turned the same 46 of 50 from ambiguous into supports, which is exactly the move the lock exposes; the lab compares hashes and a team would have to check them in review",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Moving the threshold after the data is detectable. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): lowering the threshold from 0.90 to 0.80 turned the same 46 of 50 from ambiguous into supports, which is exactly the move the lock exposes; the lab compares hashes and a team would have to check them in review"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely running: moving the threshold after the data is detectable ---\noriginal lock: cc567785d3 | lock after edit: 9ad08a2eda | same: False\nverdict at 0.90 for 46/50: ambiguous | at the edited 0.80: supports"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 4: A sample that does not represent the population",
    "headingKn": "ಪ್ರಯೋಗ 4: A sample that does not represent the population",
    "bodyEn": "What it ran: A sample that does not represent the population. What the lab concluded: an experiment that only looked at the well-behaved service reported 0.97 while the mixed population was 0.862, so the population definition has to say which alerts count; the numbers are invented for the lab",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A sample that does not represent the population. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): an experiment that only looked at the well-behaved service reported 0.97 while the mixed population was 0.862, so the population definition has to say which alerts count; the numbers are invented for the lab"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 4. Genuinely measuring: a sample that does not represent the population ---\nrate over all alerts (service mix 40 payments, 60 search): 0.862\nrate over a sample drawn only from search: 0.970"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 5: Evidence is appended and never overwritten",
    "headingKn": "ಪ್ರಯೋಗ 5: Evidence is appended and never overwritten",
    "bodyEn": "What it ran: Evidence is appended and never overwritten. What the lab concluded: the first result is still in the log with a note saying it was superseded, so a reader can see what was believed at each point; an update in place would have lost the earlier reading",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Evidence is appended and never overwritten. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the first result is still in the log with a note saying it was superseded, so a reader can see what was believed at each point; an update in place would have lost the earlier reading"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 5. Genuinely running: evidence is appended and never overwritten ---\n{'exp': 'cc567785d3', 'successes': 46, 'n': 50, 'note': 'first pass'}\n{'exp': 'cc567785d3', 'successes': 460, 'n': 500, 'note': 'full 30 days'}\n{'supersedes': 0, 'note': 'first pass used only the first week'}"
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
    "headingEn": "Genuinely Found: The Same 92 Percent Was Ambiguous at Three Sample Sizes",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಅದೇ 92 ಶೇಕಡಾ ಮೂರು ಮಾದರಿ ಗಾತ್ರಗಳಲ್ಲಿ ಅಸ್ಪಷ್ಟವಾಗಿತ್ತು",
    "bodyEn": "Section 2: 46/50, 92/100 and 460/500 all had rate 0.92 and were ambiguous, with the lower end at 0.812, 0.85 and 0.893, all under 0.90. 475/500 (0.95, lower end 0.927) supported the claim, 45/50 (0.90) was ambiguous and 400/500 (0.80, upper end 0.833) rejected it. A point estimate alone would have said supports for the first four rows.",
    "bodyKn": "ವಿಭಾಗ 2: 46/50, 92/100 ಮತ್ತು 460/500 ಎಲ್ಲವೂ ದರ 0.92 ಹೊಂದಿ ambiguous ಆದವು, ಕೆಳ ತುದಿ 0.812, 0.85 ಮತ್ತು 0.893, ಎಲ್ಲವೂ 0.90 ಕ್ಕಿಂತ ಕಡಿಮೆ. 475/500 (0.95, ಕೆಳ ತುದಿ 0.927) ಹೇಳಿಕೆ ಬೆಂಬಲಿಸಿತು, 45/50 (0.90) ambiguous ಮತ್ತು 400/500 (0.80, ಮೇಲಿನ ತುದಿ 0.833) ತಿರಸ್ಕರಿಸಿತು. ಬಿಂದು ಅಂದಾಜು ಮಾತ್ರ ಮೊದಲ ನಾಲ್ಕು ಸಾಲುಗಳಿಗೆ supports ಎನ್ನುತ್ತಿತ್ತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: A Moved Threshold, a Biased Sample and an Append-Only Log",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಸರಿಸಿದ ಮಿತಿ, ಪಕ್ಷಪಾತ ಮಾದರಿ ಮತ್ತು ಸೇರ್ಪಡೆ-ಮಾತ್ರ ದಾಖಲೆ",
    "bodyEn": "Section 3: changing the threshold from 0.90 to 0.80 changed the lock from cc567785d3 to 9ad08a2eda and turned 46/50 from ambiguous to supports. Section 4: a sample from search alone gave 0.970 while the invented mix of 40 payments and 60 search alerts gave 0.862. Section 5: the first result stayed in the log with a later entry marking it superseded.",
    "bodyKn": "ವಿಭಾಗ 3: ಮಿತಿಯನ್ನು 0.90 ರಿಂದ 0.80 ಗೆ ಬದಲಿಸಿದ್ದು lock ಅನ್ನು cc567785d3 ಯಿಂದ 9ad08a2eda ಗೆ ಬದಲಿಸಿ 46/50 ಅನ್ನು ambiguous ಯಿಂದ supports ಮಾಡಿತು. ವಿಭಾಗ 4: search ಮಾತ್ರದ ಮಾದರಿ 0.970 ನೀಡಿತು, 40 payments ಮತ್ತು 60 search alerts ಕಲ್ಪಿತ ಮಿಶ್ರಣ 0.862 ನೀಡಿತು. ವಿಭಾಗ 5: ಮೊದಲ ಫಲಿತಾಂಶ ದಾಖಲೆಯಲ್ಲಿ ಉಳಿದು ನಂತರದ ನಮೂದು ಅದನ್ನು superseded ಎಂದು ಗುರುತಿಸಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "If the threshold can move after the data, any result can be made to support the claim, and a verdict from too few observations is not a verdict.",
    "bodyKn": "ದತ್ತಾಂಶದ ನಂತರ ಮಿತಿ ಚಲಿಸಬಹುದಾದರೆ ಯಾವುದೇ ಫಲಿತಾಂಶ ಹೇಳಿಕೆ ಬೆಂಬಲಿಸುವಂತೆ ಮಾಡಬಹುದು, ಮತ್ತು ತೀರಾ ಕಡಿಮೆ ವೀಕ್ಷಣೆಗಳ ತೀರ್ಪು ತೀರ್ಪಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"92 percent beats 90 percent.\" At 500 alerts the interval still reached below 0.90.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"92 ಶೇಕಡಾ 90 ಶೇಕಡಾವನ್ನು ಮೀರಿಸುತ್ತದೆ.\" 500 alerts ನಲ್ಲಿಯೂ ಅಂತರ 0.90 ಕ್ಕಿಂತ ಕೆಳಗೆ ತಲುಪಿತ್ತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Threshold: the value fixed before the data. Wilson interval: a confidence interval for a proportion. Ambiguous: the interval contains the threshold. Supersede: mark an entry replaced without deleting it.",
    "bodyKn": "Threshold: ದತ್ತಾಂಶಕ್ಕೆ ಮುನ್ನ ನಿಗದಿಯಾದ ಮೌಲ್ಯ. Wilson interval: ಅನುಪಾತಕ್ಕೆ ವಿಶ್ವಾಸ ಅಂತರ. Ambiguous: ಅಂತರ ಮಿತಿಯನ್ನು ಒಳಗೊಂಡಿದೆ. Supersede: ಅಳಿಸದೆ ನಮೂದು ಬದಲಾಯಿತು ಎಂದು ಗುರುತಿಸುವುದು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) The threshold was locked first. 2) 92 percent was ambiguous up to 500 alerts. 3) A moved threshold changed the lock. 4) A search-only sample misled. 5) Evidence was appended, not overwritten.",
    "bodyKn": "1) ಮಿತಿ ಮೊದಲು ಲಾಕ್ ಆಯಿತು. 2) 92 ಶೇಕಡಾ 500 alerts ವರೆಗೂ ambiguous. 3) ಸರಿಸಿದ ಮಿತಿ lock ಬದಲಿಸಿತು. 4) search-ಮಾತ್ರ ಮಾದರಿ ದಾರಿ ತಪ್ಪಿಸಿತು. 5) ಸಾಕ್ಷ್ಯ ಸೇರಿಸಲಾಯಿತು, ಮೇಲ್ಬರೆಯಲಿಲ್ಲ."
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
    "bodyEn": "1) Open a terminal in pneuronics-backend/lesson-defs/labs. 2) Run: python -B am_2.py (in Git Bash on Windows: PYTHONIOENCODING=utf-8 python -B am_2.py). 3) Compare each section with the walkthrough above. The -B flag stops Python from writing __pycache__ folders.",
    "bodyKn": "1) pneuronics-backend/lesson-defs/labs ನಲ್ಲಿ ಟರ್ಮಿನಲ್ ತೆರೆಯಿರಿ. 2) ಓಡಿಸಿ: python -B am_2.py (Windows Git Bash ನಲ್ಲಿ: PYTHONIOENCODING=utf-8 python -B am_2.py). 3) ಪ್ರತಿ ವಿಭಾಗವನ್ನು ಮೇಲಿನ ನಡೆದಾಟಕ್ಕೆ ಹೋಲಿಸಿ. -B ಧ್ವಜ Python __pycache__ ಫೋಲ್ಡರ್‌ಗಳನ್ನು ಬರೆಯುವುದನ್ನು ತಡೆಯುತ್ತದೆ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What was the verdict for 460/500?",
      "qKn": "460/500 ಗೆ ತೀರ್ಪು ಏನು?",
      "opts": [
       "ambiguous",
       "supports",
       "rejects",
       "none"
      ],
      "optsKn": [
       "ambiguous",
       "supports",
       "rejects",
       "ಯಾವುದೂ ಇಲ್ಲ"
      ],
      "correct": 0
     },
     {
      "q": "Which sample supported the 0.90 claim?",
      "qKn": "ಯಾವ ಮಾದರಿ 0.90 ಹೇಳಿಕೆ ಬೆಂಬಲಿಸಿತು?",
      "opts": [
       "475/500",
       "46/50",
       "92/100",
       "45/50"
      ],
      "optsKn": [
       "475/500",
       "46/50",
       "92/100",
       "45/50"
      ],
      "correct": 0
     },
     {
      "q": "What did lowering the threshold to 0.80 do to 46/50?",
      "qKn": "ಮಿತಿಯನ್ನು 0.80 ಗೆ ಇಳಿಸಿದ್ದು 46/50 ಗೆ ಏನು ಮಾಡಿತು?",
      "opts": [
       "ambiguous became supports",
       "supports became rejects",
       "Nothing",
       "It was deleted"
      ],
      "optsKn": [
       "ambiguous supports ಆಯಿತು",
       "supports rejects ಆಯಿತು",
       "ಏನೂ ಇಲ್ಲ",
       "ಅಳಿಸಲಾಯಿತು"
      ],
      "correct": 0
     },
     {
      "q": "What rate did the search-only sample show?",
      "qKn": "search-ಮಾತ್ರ ಮಾದರಿ ಯಾವ ದರ ತೋರಿಸಿತು?",
      "opts": [
       "0.970",
       "0.862",
       "0.700",
       "1.000"
      ],
      "optsKn": [
       "0.970",
       "0.862",
       "0.700",
       "1.000"
      ],
      "correct": 0
     },
     {
      "q": "Why append instead of overwrite evidence?",
      "qKn": "ಸಾಕ್ಷ್ಯವನ್ನು ಮೇಲ್ಬರೆಯುವ ಬದಲು ಏಕೆ ಸೇರಿಸಬೇಕು?",
      "opts": [
       "Readers can see what was believed at each point",
       "It is faster",
       "It saves disk",
       "It signs the data"
      ],
      "optsKn": [
       "ಪ್ರತಿ ಹಂತದಲ್ಲಿ ಏನು ನಂಬಲಾಗಿತ್ತು ಓದುಗರು ನೋಡಬಹುದು",
       "ಅದು ವೇಗ",
       "ಅದು ಡಿಸ್ಕ್ ಉಳಿಸುತ್ತದೆ",
       "ಅದು ದತ್ತಾಂಶಕ್ಕೆ ಸಹಿ ಮಾಡುತ್ತದೆ"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
