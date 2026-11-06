module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6366020ed05b321580",
 "order": 1,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Reviewer Agent (Part 2 of 3) — Independent Evidence and Rubric Policy",
 "titleKn": "Reviewer Agent (ಭಾಗ 2 / 3) — ಸ್ವತಂತ್ರ ಸಾಕ್ಷ್ಯ ಮತ್ತು Rubric ನೀತಿ",
 "desc": "Compare a flag-reading reviewer with one that runs its own concurrent probe on a real race, and test a rubric policy that punishes a correct simple task.",
 "descKn": "flag-ಓದುವ reviewer ಅನ್ನು ನಿಜ race ಮೇಲೆ ತನ್ನದೇ ಏಕಕಾಲಿಕ probe ಓಡಿಸುವ reviewer ಗೆ ಹೋಲಿಸಿ, ಮತ್ತು ಸರಿಯಾದ ಸರಳ ಕಾರ್ಯವನ್ನು ಶಿಕ್ಷಿಸುವ rubric ನೀತಿ ಪರೀಕ್ಷಿಸಿ.",
 "objectives": [
  "Explain why builder flags are not evidence.",
  "Run an independent probe.",
  "Know what a probe cannot prove.",
  "Check whether a task has material assumptions.",
  "Keep the human approval step."
 ],
 "objectivesKn": [
  "builder flags ಸಾಕ್ಷ್ಯವಲ್ಲ ಏಕೆ ಎಂದು ವಿವರಿಸಿ.",
  "ಸ್ವತಂತ್ರ probe ಓಡಿಸಿ.",
  "probe ಏನು ಸಾಬೀತುಪಡಿಸಲಾರದು ತಿಳಿಯಿರಿ.",
  "ಕಾರ್ಯಕ್ಕೆ ಮಹತ್ವದ ಊಹೆಗಳಿವೆಯೇ ಪರಿಶೀಲಿಸಿ.",
  "ಮಾನವ ಅನುಮೋದನೆ ಹಂತ ಇಟ್ಟುಕೊಳ್ಳಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Reviewer Agent (Part 2 of 3)",
    "textKn": "Reviewer Agent (ಭಾಗ 2 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 2 of 3: why a reviewer must not trust the builder's flags: a real check-then-act race, a sequential test that passes, a concurrent probe and a rubric policy weakness. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind the reviewer agent (rubric, hard-fail rule, independent evidence and isolation), not the real software, and the reviewer is a deterministic stub reading structured evidence and no language model is involved, so no real LLM behaviour is measured. Only part of this module's source was supplied: Part 2 was pasted in full, while Parts 1 and 3 arrived only as small fragments (a progress checklist and closing summaries), and the original main.py was not provided. The lessons are built from Part 2 and those fragments, and the labs are our own implementation. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 2ನೆಯದು: reviewer builder ಯ flags ಅನ್ನು ಏಕೆ ನಂಬಬಾರದು: ನಿಜ check-then-act race, ಪಾಸ್ ಆಗುವ ಅನುಕ್ರಮ ಪರೀಕ್ಷೆ, ಏಕಕಾಲಿಕ probe ಮತ್ತು rubric ನೀತಿ ದೌರ್ಬಲ್ಯ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು reviewer agent (rubric, hard-fail ನಿಯಮ, ಸ್ವತಂತ್ರ ಸಾಕ್ಷ್ಯ ಮತ್ತು ಪ್ರತ್ಯೇಕತೆ) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು reviewer ರಚನಾತ್ಮಕ ಸಾಕ್ಷ್ಯ ಓದುವ ನಿರ್ಣಾಯಕ ಬದಲಿ ಮತ್ತು ಯಾವುದೇ ಭಾಷಾ ಮಾದರಿ ಇಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಈ ಮಾಡ್ಯೂಲ್‌ನ ಮೂಲದ ಒಂದು ಭಾಗ ಮಾತ್ರ ಒದಗಿಸಲಾಗಿತ್ತು: ಭಾಗ 2 ಪೂರ್ಣವಾಗಿ ಅಂಟಿಸಲಾಗಿತ್ತು, ಭಾಗ 1 ಮತ್ತು 3 ಸಣ್ಣ ತುಣುಕುಗಳಾಗಿ ಮಾತ್ರ ಬಂದವು (ಪ್ರಗತಿ ಪರಿಶೀಲನಾ ಪಟ್ಟಿ ಮತ್ತು ಮುಕ್ತಾಯ ಸಾರಾಂಶಗಳು), ಮತ್ತು ಮೂಲ main.py ಒದಗಿಸಲಿಲ್ಲ. lessons ಭಾಗ 2 ಮತ್ತು ಆ ತುಣುಕುಗಳಿಂದ ನಿರ್ಮಿತ, ಮತ್ತು ಲ್ಯಾಬ್‌ಗಳು ನಮ್ಮದೇ ಅನುಷ್ಠಾನ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "A Reviewer That Reads Flags Is Not Independent",
    "textKn": "Flags ಓದುವ Reviewer ಸ್ವತಂತ್ರನಲ್ಲ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Run Your Own Probe",
    "headingKn": "ನಿಮ್ಮದೇ Probe ಓಡಿಸಿ",
    "bodyEn": "The stub scorers read booleans such as solves_requested_problem, which the builder wrote. This part builds a payment function with a real check-then-act race, shows that the builder's sequential test passes for both the unsafe and the locked version, then compares a flag-reading reviewer with one that runs its own concurrent probe. It ends with a rubric policy that hard-fails a correct simple change.",
    "bodyKn": "stub scorers builder ಬರೆದ solves_requested_problem ನಂತಹ booleans ಓದುತ್ತವೆ. ಈ ಭಾಗ ನಿಜ check-then-act race ಇರುವ payment ಫಂಕ್ಷನ್ ನಿರ್ಮಿಸಿ, builder ನ ಅನುಕ್ರಮ ಪರೀಕ್ಷೆ ಅಸುರಕ್ಷಿತ ಮತ್ತು lock ಇರುವ ಎರಡೂ ಆವೃತ್ತಿಗಳಿಗೆ ಪಾಸ್ ಆಗುತ್ತದೆ ಎಂದು ತೋರಿಸಿ, ನಂತರ flags ಓದುವ reviewer ಅನ್ನು ತನ್ನದೇ ಏಕಕಾಲಿಕ probe ಓಡಿಸುವ reviewer ಗೆ ಹೋಲಿಸುತ್ತದೆ. ಇದು ಸರಿಯಾದ ಸರಳ ಬದಲಾವಣೆಯನ್ನು hard-fail ಮಾಡುವ rubric ನೀತಿಯೊಂದಿಗೆ ಕೊನೆಗೊಳ್ಳುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Independent Evidence",
    "headingKn": "ಸ್ವತಂತ್ರ ಸಾಕ್ಷ್ಯ",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">Independent evidence</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">builder flags</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">claims</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">reviewer probe</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">runs its own check</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">tests match?</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">requirement</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">score</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">from evidence, not flags</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">passing tests can answer the wrong question</text></svg>",
    "captionEn": "Passing tests can answer the wrong question.",
    "captionKn": "ಪಾಸ್ ಆಗುವ ಪರೀಕ್ಷೆಗಳು ತಪ್ಪು ಪ್ರಶ್ನೆಗೆ ಉತ್ತರಿಸಬಹುದು."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Reviewer evidence sources",
    "headingKn": "Reviewer ಸಾಕ್ಷ್ಯ ಮೂಲಗಳು",
    "headers": [
     "Source",
     "Who produced it",
     "Independent?"
    ],
    "rows": [
     [
      "solves_requested_problem flag",
      "the builder",
      "no"
     ],
     [
      "builder's own tests",
      "the builder",
      "no, they may ask the wrong question"
     ],
     [
      "a probe the reviewer runs",
      "the reviewer",
      "yes"
     ],
     [
      "the original task text",
      "the requester",
      "yes"
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
    "filename": "rv_2.py",
    "headingEn": "The payment function, probes and the two reviewers",
    "headingKn": "Payment ಫಂಕ್ಷನ್, probes ಮತ್ತು ಎರಡು reviewers",
    "descEn": "Payments checks a key and then inserts it with a delay between the two steps, which a lock closes. sequential_test calls pay twice. concurrent_probe starts several threads on one key. One reviewer reads the builder flag; the other scores from the probe.",
    "descKn": "Payments ಕೀಲಿ ಪರಿಶೀಲಿಸಿ ಎರಡು ಹಂತಗಳ ನಡುವೆ ವಿಳಂಬದೊಂದಿಗೆ ಸೇರಿಸುತ್ತದೆ, lock ಅದನ್ನು ಮುಚ್ಚುತ್ತದೆ. sequential_test pay ಅನ್ನು ಎರಡು ಬಾರಿ ಕರೆಯುತ್ತದೆ. concurrent_probe ಒಂದೇ ಕೀಲಿಗೆ ಹಲವು threads ಆರಂಭಿಸುತ್ತದೆ. ಒಂದು reviewer builder flag ಓದುತ್ತದೆ; ಇನ್ನೊಂದು probe ಯಿಂದ ಅಂಕ ನೀಡುತ್ತದೆ.",
    "code": "class Payments:\n    def __init__(self, safe=False):\n        self.charges = []\n        self.seen = set()\n        self.lock = threading.Lock() if safe else None\n\n    def _charge(self, key):\n        if key not in self.seen:\n            time.sleep(0.05)\n            self.seen.add(key)\n            self.charges.append(key)\n\n    def pay(self, key):\n        if self.lock:\n            with self.lock:\n                self._charge(key)\n        else:\n            self._charge(key)\n\n\ndef sequential_test(cls):\n    p = cls()\n    p.pay(\"k1\"); p.pay(\"k1\")\n    return len(p.charges) == 1\n\n\ndef concurrent_probe(cls, workers=4):\n    p = cls()\n    ts = [threading.Thread(target=p.pay, args=(\"k1\",)) for _ in range(workers)]\n    for t in ts:\n        t.start()\n    for t in ts:\n        t.join()\n    return len(p.charges)\n\n\nclass Safe(Payments):\n    def __init__(self):\n        super().__init__(safe=True)\n\n\ndef problem_fit_from_flags(state):\n    return 2 if state.get(\"solves_requested_problem\") else 0\n\n\ndef problem_fit_from_probe(cls):\n    return 2 if concurrent_probe(cls) == 1 else 0\n\n\ndef assumptions_score(assumptions, material):\n    return 0 if not assumptions else 2\n\n\ndef assumptions_score_fixed(assumptions, material):\n    if not material:\n        return 2\n    return 2 if assumptions else 0"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "rv_2.py",
    "headingEn": "main(): five experiments",
    "headingKn": "main(): ಐದು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() runs the sequential test on both versions, probes both with four threads, compares the two reviewers, repeats the two-thread probe five times and tests two assumption policies.",
    "descKn": "main() ಎರಡೂ ಆವೃತ್ತಿಗಳ ಮೇಲೆ ಅನುಕ್ರಮ ಪರೀಕ್ಷೆ ಓಡಿಸಿ, ನಾಲ್ಕು threads ನೊಂದಿಗೆ ಎರಡನ್ನೂ probe ಮಾಡಿ, ಎರಡು reviewers ಹೋಲಿಸಿ, ಎರಡು-thread probe ಐದು ಬಾರಿ ಪುನರಾವರ್ತಿಸಿ ಮತ್ತು ಎರಡು ಊಹೆ ನೀತಿಗಳನ್ನು ಪರೀಕ್ಷಿಸುತ್ತದೆ.",
    "code": "def main():\n    section(\"1. Genuinely running: the sequential test passes and hides the defect\")\n    print(\"sequential test, unsafe implementation:\", sequential_test(Payments))\n    print(\"sequential test, locked implementation:\", sequential_test(Safe))\n    print(\"both versions pass the only test the builder wrote, so a verification gate that ran it would report success for the unsafe one; the test never asked the question the task was about\")\n\n    section(\"2. Genuinely running: a concurrent probe on the same two implementations\")\n    for name, cls in ((\"unsafe\", Payments), (\"locked\", Safe)):\n        print(f\"{name:7} charges created by 4 simultaneous requests with one key: {concurrent_probe(cls)}\")\n    print(\"the unsafe version charged the same key several times because the check and the insert are separate steps with a delay between them (the delay was added to force the overlap, so the number of duplicates is an artefact of the lab), and the locked version charged once\")\n\n    section(\"3. Genuinely comparing: a reviewer that reads flags versus one that runs the probe\")\n    builder_state = {\"solves_requested_problem\": True}\n    print(\"builder reports it solved the problem; the unsafe code was submitted\")\n    print(\"flag-reading reviewer problem_fit    :\", problem_fit_from_flags(builder_state))\n    print(\"probe-running reviewer problem_fit   :\", problem_fit_from_probe(Payments))\n    print(\"probe-running reviewer on locked code:\", problem_fit_from_probe(Safe))\n    print(\"the flag-reading reviewer gave full marks because it read the builder's own claim, which is the failure the separation of builder and marker is meant to prevent; the reviewer that ran an independent probe scored the same code 0, and a reviewer is only independent if its evidence is\")\n\n    section(\"4. Genuinely measuring: the probe is a sample, not a proof\")\n    counts = [concurrent_probe(Payments, workers=2) for _ in range(5)]\n    print(\"duplicates seen over 5 runs with 2 workers on the unsafe code:\", counts)\n    print(\"with the delay forced into the code, every run exposed the race; this lab did not measure a race without the forced delay, but a probe can only show that an overlap happened in the runs tried, so a failing probe demonstrates a defect and a passing probe does not demonstrate its absence, which is one reason the human approval step remains\")\n\n    section(\"5. Genuinely checking: a rubric policy that punishes a correct simple task\")\n    print(\"simple task, no material assumptions, none listed -> lesson policy:\", assumptions_score((), material=False), \"| refined policy:\", assumptions_score_fixed((), material=False))\n    print(\"payment task with a material assumption, none listed -> lesson policy:\", assumptions_score((), material=True), \"| refined policy:\", assumptions_score_fixed((), material=True))\n    print(\"the simple rule 'empty assumptions scores 0' hard-fails a correct one-line change because a zero forces hard_fail; asking whether the task has material assumptions first avoids that, and still scores a payment task with unstated assumptions 0\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: the sequential test passes and hides the defect ---\nsequential test, unsafe implementation: True\nsequential test, locked implementation: True\nboth versions pass the only test the builder wrote, so a verification gate that ran it would report success for the unsafe one; the test never asked the question the task was about\n\n--- 2. Genuinely running: a concurrent probe on the same two implementations ---\nunsafe  charges created by 4 simultaneous requests with one key: 4\nlocked  charges created by 4 simultaneous requests with one key: 1\nthe unsafe version charged the same key several times because the check and the insert are separate steps with a delay between them (the delay was added to force the overlap, so the number of duplicates is an artefact of the lab), and the locked version charged once\n\n--- 3. Genuinely comparing: a reviewer that reads flags versus one that runs the probe ---\nbuilder reports it solved the problem; the unsafe code was submitted\nflag-reading reviewer problem_fit    : 2\nprobe-running reviewer problem_fit   : 0\nprobe-running reviewer on locked code: 2\nthe flag-reading reviewer gave full marks because it read the builder's own claim, which is the failure the separation of builder and marker is meant to prevent; the reviewer that ran an independent probe scored the same code 0, and a reviewer is only independent if its evidence is\n\n--- 4. Genuinely measuring: the probe is a sample, not a proof ---\nduplicates seen over 5 runs with 2 workers on the unsafe code: [2, 2, 2, 2, 2]\nwith the delay forced into the code, every run exposed the race; this lab did not measure a race without the forced delay, but a probe can only show that an overlap happened in the runs tried, so a failing probe demonstrates a defect and a passing probe does not demonstrate its absence, which is one reason the human approval step remains\n\n--- 5. Genuinely checking: a rubric policy that punishes a correct simple task ---\nsimple task, no material assumptions, none listed -> lesson policy: 0 | refined policy: 2\npayment task with a material assumption, none listed -> lesson policy: 0 | refined policy: 0\nthe simple rule 'empty assumptions scores 0' hard-fails a correct one-line change because a zero forces hard_fail; asking whether the task has material assumptions first avoids that, and still scores a payment task with unstated assumptions 0"
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
    "headingEn": "Genuinely Found: The Test Passed and the Race Was Real",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಪರೀಕ್ಷೆ ಪಾಸ್ ಆಯಿತು ಮತ್ತು race ನಿಜ",
    "bodyEn": "Section 1: the sequential test passed for both the unsafe and the locked version. Section 2: four simultaneous requests with one key created 4 charges in the unsafe version and 1 in the locked one; the delay inside the check-then-act code was added to force the overlap, so the count is a lab artefact. Section 4: with two workers the unsafe version produced 2 charges in each of five runs.",
    "bodyKn": "ವಿಭಾಗ 1: ಅನುಕ್ರಮ ಪರೀಕ್ಷೆ ಅಸುರಕ್ಷಿತ ಮತ್ತು lock ಇರುವ ಎರಡೂ ಆವೃತ್ತಿಗಳಿಗೆ ಪಾಸ್ ಆಯಿತು. ವಿಭಾಗ 2: ಒಂದೇ ಕೀಲಿಯ ನಾಲ್ಕು ಏಕಕಾಲಿಕ ವಿನಂತಿಗಳು ಅಸುರಕ್ಷಿತ ಆವೃತ್ತಿಯಲ್ಲಿ 4 ಶುಲ್ಕ ಮತ್ತು lock ಇರುವುದರಲ್ಲಿ 1 ಸೃಷ್ಟಿಸಿದವು; check-then-act ಕೋಡ್‌ನ ಒಳಗಿನ ವಿಳಂಬ ಅತಿಕ್ರಮಣ ಬಲವಂತಗೊಳಿಸಲು ಸೇರಿಸಿದ್ದು, ಆದ್ದರಿಂದ ಎಣಿಕೆ ಲ್ಯಾಬ್‌ನ ಕೃತಕ ಫಲಿತಾಂಶ. ವಿಭಾಗ 4: ಎರಡು workers ನೊಂದಿಗೆ ಅಸುರಕ್ಷಿತ ಆವೃತ್ತಿ ಐದು ಓಟಗಳ ಪ್ರತಿಯೊಂದರಲ್ಲಿ 2 ಶುಲ್ಕ ಸೃಷ್ಟಿಸಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: A Flag-Reading Reviewer Gave Full Marks",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Flag-ಓದುವ Reviewer ಪೂರ್ಣ ಅಂಕ ನೀಡಿತು",
    "bodyEn": "Section 3: the builder reported it solved the problem for the unsafe code; the flag-reading reviewer gave problem_fit 2, the probe-running reviewer gave 0 on the unsafe code and 2 on the locked code. Section 5: the lesson policy \"empty assumptions scores 0\" gave 0 to a simple task with no material assumptions, where a refined policy gave 2, and both gave 0 to a payment task with an unstated material assumption.",
    "bodyKn": "ವಿಭಾಗ 3: builder ಅಸುರಕ್ಷಿತ ಕೋಡ್‌ಗೆ ಸಮಸ್ಯೆ ಬಗೆಹರಿಸಿದೆ ಎಂದು ವರದಿ ಮಾಡಿತು; flag-ಓದುವ reviewer problem_fit 2 ನೀಡಿತು, probe-ಓಡಿಸುವ reviewer ಅಸುರಕ್ಷಿತ ಕೋಡ್‌ಗೆ 0 ಮತ್ತು lock ಇರುವ ಕೋಡ್‌ಗೆ 2 ನೀಡಿತು. ವಿಭಾಗ 5: lesson ನೀತಿ \"ಖಾಲಿ ಊಹೆಗಳಿಗೆ 0\" ಮಹತ್ವದ ಊಹೆ ಇಲ್ಲದ ಸರಳ ಕಾರ್ಯಕ್ಕೆ 0 ನೀಡಿತು, ಸುಧಾರಿತ ನೀತಿ 2 ನೀಡಿತು, ಮತ್ತು ಹೇಳದ ಮಹತ್ವದ ಊಹೆ ಇರುವ payment ಕಾರ್ಯಕ್ಕೆ ಎರಡೂ 0 ನೀಡಿದವು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A reviewer is independent only if its evidence is: flags and tests written by the builder can all agree while the task is unsolved.",
    "bodyKn": "reviewer ಅದರ ಸಾಕ್ಷ್ಯ ಸ್ವತಂತ್ರವಾಗಿದ್ದರೆ ಮಾತ್ರ ಸ್ವತಂತ್ರ: builder ಬರೆದ flags ಮತ್ತು ಪರೀಕ್ಷೆಗಳು ಕಾರ್ಯ ಬಗೆಹರಿಯದಿದ್ದರೂ ಎಲ್ಲವೂ ಒಪ್ಪಬಹುದು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"the tests passed, so the requirement is covered.\" The only test never exercised concurrency.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಪರೀಕ್ಷೆಗಳು ಪಾಸ್ ಆದವು, ಆದ್ದರಿಂದ ಅವಶ್ಯಕತೆ ಒಳಗೊಂಡಿದೆ.\" ಏಕೈಕ ಪರೀಕ್ಷೆ ಏಕಕಾಲಿಕತೆಯನ್ನು ಎಂದೂ ಪರೀಕ್ಷಿಸಲಿಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Check-then-act: testing a condition and acting on it in separate steps. Probe: a check the reviewer runs itself. Independent evidence: evidence the builder did not produce. Material assumption: one the task depends on. Artefact: a result caused by the lab setup.",
    "bodyKn": "Check-then-act: ಷರತ್ತು ಪರೀಕ್ಷಿಸಿ ಬೇರೆ ಹಂತಗಳಲ್ಲಿ ಕ್ರಿಯೆ ಮಾಡುವುದು. Probe: reviewer ಸ್ವತಃ ಓಡಿಸುವ ಪರಿಶೀಲನೆ. Independent evidence: builder ಉತ್ಪಾದಿಸದ ಸಾಕ್ಷ್ಯ. Material assumption: ಕಾರ್ಯ ಅವಲಂಬಿಸಿರುವ ಊಹೆ. Artefact: ಲ್ಯಾಬ್ ಸಿದ್ಧತೆಯಿಂದ ಉಂಟಾದ ಫಲಿತಾಂಶ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) A sequential test passed for racy and locked code alike. 2) Four threads created 4 charges in the unsafe version. 3) The flag reviewer scored 2 and the probe reviewer 0. 4) The probe showed 2 charges in all five runs with two workers. 5) The empty-assumptions policy hard-failed a simple task.",
    "bodyKn": "1) ಅನುಕ್ರಮ ಪರೀಕ್ಷೆ racy ಮತ್ತು lock ಇರುವ ಕೋಡ್‌ಗೆ ಸಮಾನವಾಗಿ ಪಾಸ್ ಆಯಿತು. 2) ನಾಲ್ಕು threads ಅಸುರಕ್ಷಿತ ಆವೃತ್ತಿಯಲ್ಲಿ 4 ಶುಲ್ಕ ಸೃಷ್ಟಿಸಿದವು. 3) flag reviewer 2 ಮತ್ತು probe reviewer 0 ನೀಡಿದವು. 4) ಎರಡು workers ನೊಂದಿಗೆ ಎಲ್ಲಾ ಐದು ಓಟಗಳಲ್ಲಿ probe 2 ಶುಲ್ಕ ತೋರಿಸಿತು. 5) ಖಾಲಿ-ಊಹೆ ನೀತಿ ಸರಳ ಕಾರ್ಯವನ್ನು hard-fail ಮಾಡಿತು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "How many charges did four simultaneous requests create in the unsafe version?",
      "qKn": "ಅಸುರಕ್ಷಿತ ಆವೃತ್ತಿಯಲ್ಲಿ ನಾಲ್ಕು ಏಕಕಾಲಿಕ ವಿನಂತಿಗಳು ಎಷ್ಟು ಶುಲ್ಕ ಸೃಷ್ಟಿಸಿದವು?",
      "opts": [
       "4",
       "1",
       "2",
       "0"
      ],
      "optsKn": [
       "4",
       "1",
       "2",
       "0"
      ],
      "correct": 0
     },
     {
      "q": "What problem_fit did the flag-reading reviewer give the unsafe code?",
      "qKn": "flag-ಓದುವ reviewer ಅಸುರಕ್ಷಿತ ಕೋಡ್‌ಗೆ ಯಾವ problem_fit ನೀಡಿತು?",
      "opts": [
       "2",
       "0",
       "1",
       "none"
      ],
      "optsKn": [
       "2",
       "0",
       "1",
       "ಯಾವುದೂ ಇಲ್ಲ"
      ],
      "correct": 0
     },
     {
      "q": "Why was the number of duplicate charges a lab artefact?",
      "qKn": "ನಕಲು ಶುಲ್ಕಗಳ ಸಂಖ್ಯೆ ಲ್ಯಾಬ್‌ನ ಕೃತಕ ಫಲಿತಾಂಶ ಏಕೆ?",
      "opts": [
       "A delay was added to force the overlap",
       "Python limits threads",
       "The test was random",
       "The lock failed"
      ],
      "optsKn": [
       "ಅತಿಕ್ರಮಣ ಬಲವಂತಗೊಳಿಸಲು ವಿಳಂಬ ಸೇರಿಸಲಾಗಿತ್ತು",
       "Python threads ಮಿತಿಗೊಳಿಸುತ್ತದೆ",
       "ಪರೀಕ್ಷೆ ಯಾದೃಚ್ಛಿಕ",
       "lock ವಿಫಲವಾಯಿತು"
      ],
      "correct": 0
     },
     {
      "q": "What did the lesson policy score a simple task with no assumptions?",
      "qKn": "ಊಹೆಗಳಿಲ್ಲದ ಸರಳ ಕಾರ್ಯಕ್ಕೆ lesson ನೀತಿ ಯಾವ ಅಂಕ ನೀಡಿತು?",
      "opts": [
       "0",
       "2",
       "1",
       "10"
      ],
      "optsKn": [
       "0",
       "2",
       "1",
       "10"
      ],
      "correct": 0
     },
     {
      "q": "Does a passing probe prove the absence of a race?",
      "qKn": "ಪಾಸ್ ಆದ probe race ಇಲ್ಲದಿರುವುದನ್ನು ಸಾಬೀತುಪಡಿಸುತ್ತದೆಯೇ?",
      "opts": [
       "No, it only covers the runs tried",
       "Yes",
       "Only with four threads",
       "Only in strict mode"
      ],
      "optsKn": [
       "ಇಲ್ಲ, ಪ್ರಯತ್ನಿಸಿದ ಓಟಗಳನ್ನು ಮಾತ್ರ ಒಳಗೊಳ್ಳುತ್ತದೆ",
       "ಹೌದು",
       "ನಾಲ್ಕು threads ನೊಂದಿಗೆ ಮಾತ್ರ",
       "strict ಕ್ರಮದಲ್ಲಿ ಮಾತ್ರ"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
