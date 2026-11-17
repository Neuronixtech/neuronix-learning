module.exports = {
 "phaseId": "6a369d6366020ed05b32158c",
 "moduleId": "6a369d6366020ed05b3215a4",
 "order": 2,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Bounded Self-Improvement Designs (Part 3 of 3) — Combining the Primitives",
 "titleKn": "ಮಿತಿಯುಳ್ಳ Self-Improvement ವಿನ್ಯಾಸಗಳು (ಭಾಗ 3 / 3) — ಆದಿಮಗಳನ್ನು ಸೇರಿಸುವುದು",
 "desc": "Combine invariants, an anchor, a safety floor and regression tests in one class and test it.",
 "descKn": "invariants, anchor, safety ಮಿತಿ ಮತ್ತು regression ಪರೀಕ್ಷೆಗಳನ್ನು ಒಂದು ವರ್ಗದಲ್ಲಿ ಸೇರಿಸಿ ಪರೀಕ್ಷಿಸಿ.",
 "objectives": [
  "Combine four checks in one class.",
  "Write and run unit tests.",
  "Tally rejection reasons.",
  "Loosen checks one at a time.",
  "Block suite deletion."
 ],
 "objectivesKn": [
  "ನಾಲ್ಕು ಪರಿಶೀಲನೆಗಳನ್ನು ಒಂದು ವರ್ಗದಲ್ಲಿ ಸೇರಿಸಿ.",
  "unit ಪರೀಕ್ಷೆ ಬರೆದು ಓಡಿಸಿ.",
  "ತಿರಸ್ಕಾರ ಕಾರಣ ಎಣಿಸಿ.",
  "ಒಂದೊಂದೇ ಪರಿಶೀಲನೆ ಸಡಿಲಿಸಿ.",
  "ಸೂಟ್ ಅಳಿಸುವಿಕೆ ತಡೆಯಿರಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Bounded Self-Improvement Designs (Part 3 of 3)",
    "textKn": "ಮಿತಿಯುಳ್ಳ Self-Improvement ವಿನ್ಯಾಸಗಳು (ಭಾಗ 3 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 3 of 3: a BoundedImprover combining step limit, anchor, safety floor, capability gain and regression tests, eight unit tests that are run, rejection reasons, loosening one check at a time and a test-suite-shrinking attack. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind bounded self-improvement designs (invariants, anchors, multi-objective acceptance, regression suites, a combined BoundedImprover and eight unit tests), not the real software, and the policy is a short vector of numbers, the proposer is random, every limit is invented and no language model or real self-modification is involved, so no real LLM behaviour is measured. The original code/main.py was not supplied, so the labs are our own implementation. The source lesson expects eight unit tests to pass; the lab here defines its own eight tests for its own BoundedImprover class and runs them, which is not a run of the lesson original tests. Every limit, weight and proposal distribution is invented. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 3ನೆಯದು: ಹಂತ ಮಿತಿ, anchor, safety ಮಿತಿ, capability ಲಾಭ ಮತ್ತು regression ಪರೀಕ್ಷೆಗಳನ್ನು ಸೇರಿಸುವ BoundedImprover, ಓಡಿಸಿದ ಎಂಟು unit ಪರೀಕ್ಷೆಗಳು, ತಿರಸ್ಕಾರ ಕಾರಣಗಳು, ಒಂದೊಂದೇ ಪರಿಶೀಲನೆ ಸಡಿಲಿಸುವುದು ಮತ್ತು ಪರೀಕ್ಷಾ-ಸೂಟ್ ಕುಗ್ಗಿಸುವ ದಾಳಿ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು ಮಿತಿಯುಳ್ಳ self-improvement ವಿನ್ಯಾಸಗಳು (invariants, anchors, ಬಹು-ಉದ್ದೇಶ ಸ್ವೀಕಾರ, regression ಸೂಟ್‌ಗಳು, ಸಂಯೋಜಿತ BoundedImprover ಮತ್ತು ಎಂಟು unit ಪರೀಕ್ಷೆಗಳು) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ನೀತಿ ಸಂಖ್ಯೆಗಳ ಚಿಕ್ಕ ವೆಕ್ಟರ್, ಪ್ರಸ್ತಾಪಕ ಯಾದೃಚ್ಛಿಕ, ಪ್ರತಿ ಮಿತಿ ಕಲ್ಪಿತ ಮತ್ತು ಭಾಷಾ ಮಾದರಿ ಅಥವಾ ನಿಜ ಸ್ವಯಂ-ಮಾರ್ಪಾಡು ಇಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ code/main.py ಒದಗಿಸಿರಲಿಲ್ಲ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ನಮ್ಮದೇ ಅನುಷ್ಠಾನ. ಮೂಲ lesson ಎಂಟು unit ಪರೀಕ್ಷೆಗಳು ಪಾಸ್ ಆಗಬೇಕು ಎನ್ನುತ್ತದೆ; ಇಲ್ಲಿನ ಲ್ಯಾಬ್ ತನ್ನದೇ BoundedImprover ವರ್ಗಕ್ಕೆ ತನ್ನದೇ ಎಂಟು ಪರೀಕ್ಷೆಗಳನ್ನು ವ್ಯಾಖ್ಯಾನಿಸಿ ಓಡಿಸುತ್ತದೆ, ಅದು lesson ನ ಮೂಲ ಪರೀಕ್ಷೆಗಳ ಓಟ ಅಲ್ಲ. ಪ್ರತಿ ಮಿತಿ, ತೂಕ ಮತ್ತು ಪ್ರಸ್ತಾವನೆ ವಿತರಣೆ ಕಲ್ಪಿತ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Putting the Four Primitives Together",
    "textKn": "ನಾಲ್ಕು ಆದಿಮಗಳನ್ನು ಒಟ್ಟಿಗೆ ಇಡುವುದು",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "One Class, Eight Tests",
    "headingKn": "ಒಂದು ವರ್ಗ, ಎಂಟು ಪರೀಕ್ಷೆಗಳು",
    "bodyEn": "This part combines invariants, an anchor, a multi-objective rule and a regression suite in one BoundedImprover class, writes eight unit tests for it and actually runs them, then measures why random proposals get rejected, what changes when each check is loosened and whether deleting a test slips through. The first lab run exposed a mistake in one of my tests, a safety floor that the proposal still cleared, which I corrected in the test and not in the class.",
    "bodyKn": "ಈ ಭಾಗ invariants, anchor, ಬಹು-ಉದ್ದೇಶ ನಿಯಮ ಮತ್ತು regression ಸೂಟ್ ಅನ್ನು ಒಂದು BoundedImprover ವರ್ಗದಲ್ಲಿ ಸೇರಿಸುತ್ತದೆ, ಅದಕ್ಕೆ ಎಂಟು unit ಪರೀಕ್ಷೆ ಬರೆದು ನಿಜವಾಗಿ ಓಡಿಸುತ್ತದೆ, ನಂತರ ಯಾದೃಚ್ಛಿಕ ಪ್ರಸ್ತಾವನೆಗಳು ಏಕೆ ತಿರಸ್ಕರಿಸಲ್ಪಡುತ್ತವೆ, ಪ್ರತಿ ಪರಿಶೀಲನೆ ಸಡಿಲಿಸಿದಾಗ ಏನು ಬದಲಾಗುತ್ತದೆ ಮತ್ತು ಪರೀಕ್ಷೆ ಅಳಿಸುವುದು ಜಾರಿಕೊಳ್ಳುತ್ತದೆಯೇ ಅಳೆಯುತ್ತದೆ. ಮೊದಲ ಲ್ಯಾಬ್ ಓಟ ನನ್ನ ಪರೀಕ್ಷೆಗಳಲ್ಲಿ ಒಂದರ ತಪ್ಪನ್ನು ಬಯಲು ಮಾಡಿತು, ಪ್ರಸ್ತಾವನೆ ಇನ್ನೂ ದಾಟಿದ safety ಮಿತಿ, ಅದನ್ನು ನಾನು ವರ್ಗದಲ್ಲಿ ಅಲ್ಲ, ಪರೀಕ್ಷೆಯಲ್ಲಿ ಸರಿಪಡಿಸಿದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "A Bounded Improver With Overlapping Checks",
    "headingKn": "ಅತಿಕ್ರಮಿಸುವ ಪರಿಶೀಲನೆಗಳ ಮಿತಿಯುಳ್ಳ Improver",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">overlapping checks, each checked before a change is kept</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">step</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">size limit</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">anchor</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">radius</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">floor</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">safety</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">tests</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">regression</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">overlapping checks, each checked before a change is kept</text></svg>",
    "captionEn": "A modification must pass every check in order.",
    "captionKn": "ಮಾರ್ಪಾಡು ಪ್ರತಿ ಪರಿಶೀಲನೆಯನ್ನು ಕ್ರಮವಾಗಿ ಪಾಸ್ ಮಾಡಬೇಕು."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Checks in the improver, in order",
    "headingKn": "improver ನ ಪರಿಶೀಲನೆಗಳು, ಕ್ರಮದಲ್ಲಿ",
    "headers": [
     "Order",
     "Check"
    ],
    "rows": [
     [
      "1",
      "the test suite has not changed from its baseline"
     ],
     [
      "2",
      "no parameter moves more than max_step"
     ],
     [
      "3",
      "distance from the anchor is within the radius"
     ],
     [
      "4",
      "safety is at or above the floor"
     ],
     [
      "5",
      "capability rises, then every regression test passes"
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
    "filename": "bs_3.py",
    "headingEn": "BoundedImprover and its eight tests",
    "headingKn": "BoundedImprover ಮತ್ತು ಅದರ ಎಂಟು ಪರೀಕ್ಷೆಗಳು",
    "descEn": "BoundedImprover.evaluate applies the checks in order and returns a reason, try_step keeps a candidate only when every check passes, and BoundedTests holds eight unit tests.",
    "descKn": "BoundedImprover.evaluate ಪರಿಶೀಲನೆಗಳನ್ನು ಕ್ರಮವಾಗಿ ಅನ್ವಯಿಸಿ ಕಾರಣ ಹಿಂತಿರುಗಿಸುತ್ತದೆ, try_step ಪ್ರತಿ ಪರಿಶೀಲನೆ ಪಾಸ್ ಆದಾಗ ಮಾತ್ರ ಅಭ್ಯರ್ಥಿ ಇಡುತ್ತದೆ, ಮತ್ತು BoundedTests ಎಂಟು unit ಪರೀಕ್ಷೆಗಳನ್ನು ಹೊಂದಿದೆ.",
    "code": "ANCHOR = (0.0, 0.0, 0.0)\r\nTESTS = {\"t_small\": lambda p: abs(p[0]) <= 2.0, \"t_balance\": lambda p: abs(p[1] - p[2]) <= 3.0, \"t_sum\": lambda p: sum(p) <= 4.0}\r\n\r\n\r\ndef cap_score(p):\r\n    return p[0] + p[1] + p[2]\r\n\r\n\r\ndef safety_score(p):\r\n    return 10.0 - abs(p[0]) - abs(p[1] - p[2])\r\n\r\n\r\nclass BoundedImprover:\r\n    def __init__(self, tests=None, radius=4.0, max_step=1.0, safety_floor=5.0):\r\n        self.policy = ANCHOR\r\n        self.tests = dict(TESTS if tests is None else tests)\r\n        self.baseline_tests = frozenset(self.tests)\r\n        self.radius, self.max_step, self.safety_floor = radius, max_step, safety_floor\r\n        self.log = []\r\n\r\n    def _dist(self, p, q):\r\n        return sum((a - b) ** 2 for a, b in zip(p, q)) ** 0.5\r\n\r\n    def evaluate(self, cand):\r\n        \"\"\"Return (accepted, reason).\"\"\"\r\n        if frozenset(self.tests) != self.baseline_tests:\r\n            return False, \"test suite changed\"\r\n        if max(abs(a - b) for a, b in zip(cand, self.policy)) > self.max_step:\r\n            return False, \"step too large\"\r\n        if self._dist(cand, ANCHOR) > self.radius:\r\n            return False, \"outside anchor radius\"\r\n        if safety_score(cand) < self.safety_floor:\r\n            return False, \"safety floor\"\r\n        if cap_score(cand) <= cap_score(self.policy):\r\n            return False, \"no capability gain\"\r\n        for name, t in self.tests.items():\r\n            if not t(cand):\r\n                return False, f\"regression {name}\"\r\n        return True, \"ok\"\r\n\r\n    def try_step(self, cand):\r\n        ok, why = self.evaluate(cand)\r\n        self.log.append(why)\r\n        if ok:\r\n            self.policy = cand\r\n        return ok\r\n\r\n\r\nclass BoundedTests(unittest.TestCase):\r\n    def test_accepts_small_improvement(self):\r\n        self.assertTrue(BoundedImprover().try_step((0.5, 0.5, 0.0)))\r\n\r\n    def test_rejects_large_step(self):\r\n        self.assertFalse(BoundedImprover().try_step((1.5, 0.0, 0.0)))\r\n\r\n    def test_rejects_outside_anchor(self):\r\n        b = BoundedImprover(radius=0.5)\r\n        self.assertFalse(b.try_step((0.6, 0.0, 0.0)))\r\n\r\n    def test_rejects_low_safety(self):\r\n        b = BoundedImprover(safety_floor=9.5)\r\n        self.assertFalse(b.try_step((0.9, 0.0, 0.0)))\r\n\r\n    def test_rejects_no_gain(self):\r\n        b = BoundedImprover()\r\n        self.assertFalse(b.try_step((0.0, 0.0, 0.0)))\r\n\r\n    def test_rejects_regression(self):\r\n        b = BoundedImprover(radius=100.0, max_step=100.0, safety_floor=-100.0)\r\n        self.assertFalse(b.try_step((0.0, 5.0, 0.0)))\r\n        self.assertEqual(b.log[-1], \"regression t_balance\")\r\n\r\n    def test_rejects_changed_suite(self):\r\n        b = BoundedImprover()\r\n        b.tests.pop(\"t_sum\")\r\n        self.assertFalse(b.try_step((0.5, 0.5, 0.0)))\r\n        self.assertEqual(b.log[-1], \"test suite changed\")\r\n\r\n    def test_policy_unchanged_after_rejection(self):\r\n        b = BoundedImprover()\r\n        b.try_step((1.5, 0.0, 0.0))\r\n        self.assertEqual(b.policy, ANCHOR)"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "bs_3.py",
    "headingEn": "main(): experiments",
    "headingKn": "main(): ಪ್ರಯೋಗಗಳು",
    "descEn": "main() runs the unit tests, tallies rejection reasons over 30 seeds, loosens checks one at a time and tries a suite-shrinking proposal.",
    "descKn": "main() unit ಪರೀಕ್ಷೆಗಳನ್ನು ಓಡಿಸಿ, 30 seeds ಮೇಲೆ ತಿರಸ್ಕಾರ ಕಾರಣ ಎಣಿಸಿ, ಒಂದೊಂದೇ ಪರಿಶೀಲನೆ ಸಡಿಲಿಸಿ ಮತ್ತು ಸೂಟ್-ಕುಗ್ಗಿಸುವ ಪ್ರಸ್ತಾವನೆ ಪ್ರಯತ್ನಿಸುತ್ತದೆ.",
    "code": "def main():\r\n    section(\"1. Genuinely running: the eight unit tests\")\r\n    stream = io.StringIO()\r\n    result = unittest.TextTestRunner(stream=stream, verbosity=0).run(unittest.defaultTestLoader.loadTestsFromTestCase(BoundedTests))\r\n    print(f\"ran {result.testsRun} tests | failures {len(result.failures)} | errors {len(result.errors)} | passed {result.wasSuccessful()}\")\r\n    print(\"the tests cover acceptance of a small improvement, rejection for step size, anchor radius, safety floor, no capability gain, a regression and a changed suite, and that a rejection leaves the policy alone; they test this toy class and say nothing about a real system\")\r\n\r\n    section(\"2. Genuinely measuring: why each proposal was rejected (400 proposals, seeds 1 to 30)\")\r\n    counts = {}\r\n    final_caps, final_safe, final_dist = [], [], []\r\n    for seed in range(1, 31):\r\n        b = run_improver(seed)\r\n        for why in b.log:\r\n            counts[why] = counts.get(why, 0) + 1\r\n        final_caps.append(cap_score(b.policy))\r\n        final_safe.append(safety_score(b.policy))\r\n        final_dist.append(b._dist(b.policy, ANCHOR))\r\n    total = sum(counts.values())\r\n    for why, n in sorted(counts.items(), key=lambda kv: -kv[1]):\r\n        print(f\"{why:28} {n:6d}  ({n / total:.3f})\")\r\n    print(f\"final policies: mean capability {mean(final_caps):.2f} | min safety {min(final_safe):.2f} | max distance from anchor {max(final_dist):.2f}\")\r\n    print(\"most random proposals are refused for one reason or another, and every final policy sits inside the radius with safety above the floor, which follows from the checks and does not show the checks are the right ones; the order of the checks decides which reason is logged when several apply\")\r\n\r\n    section(\"3. Genuinely measuring: loosening one check at a time\")\r\n    for label, kw in ((\"default\", {}), (\"no anchor radius\", {\"radius\": 1e9}), (\"no safety floor\", {\"safety_floor\": -1e9}), (\"no regression tests\", {\"tests\": {}}), (\"no tests, no anchor\", {\"tests\": {}, \"radius\": 1e9}), (\"no tests, no floor\", {\"tests\": {}, \"safety_floor\": -1e9}), (\"no tests, anchor, floor\", {\"tests\": {}, \"radius\": 1e9, \"safety_floor\": -1e9})):\r\n        res = [run_improver(seed, **kw) for seed in range(1, 31)]\r\n        print(f\"{label:20}: mean capability {mean(cap_score(b.policy) for b in res):6.2f} | min safety {min(safety_score(b.policy) for b in res):6.2f} | policies failing a regression test {sum(1 for b in res if not all(t(b.policy) for t in TESTS.values()))}/30\")\r\n    print(\"removing the anchor radius or the safety floor alone changes nothing here, because the step limit and the regression tests already keep the policy inside both, while removing the regression tests raises mean capability from 3.99 to 6.88 and leaves every policy failing a rule; removing the tests and the anchor together gives 63.84, and removing all three gives 174.17 with a minimum safety of -66.66, so each layer only becomes visible once the layers above it are gone, which is the case for keeping several overlapping checks\")\r\n\r\n    section(\"4. Genuinely running: a modification that shrinks the test suite\")\r\n    b = BoundedImprover()\r\n    b.tests.pop(\"t_balance\")\r\n    print(\"proposal that deletes a failing test then improves capability:\", b.try_step((0.5, 0.5, 0.0)), \"| reason:\", b.log[-1])\r\n    print(\"because the improver compares the current test names with the baseline it started with, deleting a test is refused even when every remaining test passes; the baseline is stored in the same object, so a real system must keep it somewhere the agent cannot edit\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: the eight unit tests ---\nran 8 tests | failures 0 | errors 0 | passed True\nthe tests cover acceptance of a small improvement, rejection for step size, anchor radius, safety floor, no capability gain, a regression and a changed suite, and that a rejection leaves the policy alone; they test this toy class and say nothing about a real system\n\n--- 2. Genuinely measuring: why each proposal was rejected (400 proposals, seeds 1 to 30) ---\nregression t_sum               4799  (0.400)\nno capability gain             3236  (0.270)\nstep too large                 1887  (0.157)\nregression t_small             1323  (0.110)\nok                              284  (0.024)\noutside anchor radius           241  (0.020)\nsafety floor                    172  (0.014)\nregression t_balance             58  (0.005)\nfinal policies: mean capability 3.99 | min safety 5.52 | max distance from anchor 3.88\nmost random proposals are refused for one reason or another, and every final policy sits inside the radius with safety above the floor, which follows from the checks and does not show the checks are the right ones; the order of the checks decides which reason is logged when several apply\n\n--- 3. Genuinely measuring: loosening one check at a time ---\ndefault             : mean capability   3.99 | min safety   5.52 | policies failing a regression test 0/30\nno anchor radius    : mean capability   3.99 | min safety   5.52 | policies failing a regression test 0/30\nno safety floor     : mean capability   3.99 | min safety   5.52 | policies failing a regression test 0/30\nno regression tests : mean capability   6.88 | min safety   6.60 | policies failing a regression test 30/30\nno tests, no anchor : mean capability  63.84 | min safety   5.01 | policies failing a regression test 30/30\nno tests, no floor  : mean capability   6.88 | min safety   6.60 | policies failing a regression test 30/30\nno tests, anchor, floor: mean capability 174.17 | min safety -66.66 | policies failing a regression test 30/30\nremoving the anchor radius or the safety floor alone changes nothing here, because the step limit and the regression tests already keep the policy inside both, while removing the regression tests raises mean capability from 3.99 to 6.88 and leaves every policy failing a rule; removing the tests and the anchor together gives 63.84, and removing all three gives 174.17 with a minimum safety of -66.66, so each layer only becomes visible once the layers above it are gone, which is the case for keeping several overlapping checks\n\n--- 4. Genuinely running: a modification that shrinks the test suite ---\nproposal that deletes a failing test then improves capability: False | reason: test suite changed\nbecause the improver compares the current test names with the baseline it started with, deleting a test is refused even when every remaining test passes; the baseline is stored in the same object, so a real system must keep it somewhere the agent cannot edit"
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
    "headingEn": "Genuinely Found: Tests and Rejection Reasons",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಪರೀಕ್ಷೆಗಳು ಮತ್ತು ತಿರಸ್ಕಾರ ಕಾರಣಗಳು",
    "bodyEn": "Section 1: after correcting my test the run reported 8 tests, 0 failures, 0 errors and success True. Section 2 over 12000 proposals: regression t_sum 0.400, no capability gain 0.270, step too large 0.157, regression t_small 0.110, accepted 0.024, outside the anchor radius 0.020, safety floor 0.014 and regression t_balance 0.005, with final policies at mean capability 3.99, minimum safety 5.52 and maximum anchor distance 3.88.",
    "bodyKn": "ವಿಭಾಗ 1: ನನ್ನ ಪರೀಕ್ಷೆ ಸರಿಪಡಿಸಿದ ನಂತರ ಓಟ 8 ಪರೀಕ್ಷೆ, 0 ವೈಫಲ್ಯ, 0 ದೋಷ ಮತ್ತು success True ವರದಿ ಮಾಡಿತು. ವಿಭಾಗ 2, 12000 ಪ್ರಸ್ತಾವನೆಗಳಲ್ಲಿ: regression t_sum 0.400, capability ಲಾಭವಿಲ್ಲ 0.270, ಹಂತ ತುಂಬಾ ದೊಡ್ಡದು 0.157, regression t_small 0.110, ಸ್ವೀಕೃತ 0.024, anchor ತ್ರಿಜ್ಯ ಹೊರಗೆ 0.020, safety ಮಿತಿ 0.014 ಮತ್ತು regression t_balance 0.005, ಅಂತಿಮ ನೀತಿಗಳು ಸರಾಸರಿ capability 3.99, ಕನಿಷ್ಠ safety 5.52 ಮತ್ತು ಗರಿಷ್ಠ anchor ದೂರ 3.88."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Loosening Checks and the Suite Attack",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಪರಿಶೀಲನೆ ಸಡಿಲಿಸುವುದು ಮತ್ತು ಸೂಟ್ ದಾಳಿ",
    "bodyEn": "Section 3: removing the anchor radius or the safety floor alone left mean capability 3.99 and minimum safety 5.52 unchanged, removing the regression tests gave 6.88 and 6.60 with all 30 policies failing a rule, removing tests and anchor gave 63.84 and 5.01, removing tests and floor gave 6.88 and 6.60, and removing all three gave 174.17 and -66.66. Section 4: a proposal that deleted a test was refused with the reason test suite changed.",
    "bodyKn": "ವಿಭಾಗ 3: anchor ತ್ರಿಜ್ಯ ಅಥವಾ safety ಮಿತಿ ಮಾತ್ರ ತೆಗೆದರೆ ಸರಾಸರಿ capability 3.99 ಮತ್ತು ಕನಿಷ್ಠ safety 5.52 ಬದಲಾಗಲಿಲ್ಲ, regression ಪರೀಕ್ಷೆಗಳನ್ನು ತೆಗೆದರೆ 6.88 ಮತ್ತು 6.60 ಮತ್ತು ಎಲ್ಲಾ 30 ನೀತಿಗಳು ನಿಯಮ ವಿಫಲ, ಪರೀಕ್ಷೆ ಮತ್ತು anchor ತೆಗೆದರೆ 63.84 ಮತ್ತು 5.01, ಪರೀಕ್ಷೆ ಮತ್ತು ಮಿತಿ ತೆಗೆದರೆ 6.88 ಮತ್ತು 6.60, ಮತ್ತು ಮೂರೂ ತೆಗೆದರೆ 174.17 ಮತ್ತು -66.66. ವಿಭಾಗ 4: ಪರೀಕ್ಷೆ ಅಳಿಸಿದ ಪ್ರಸ್ತಾವನೆ ಕಾರಣ test suite changed ಜೊತೆ ನಿರಾಕರಿಸಲ್ಪಟ್ಟಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "Overlapping checks mean one weak or removed layer is covered by another, and a check against the suite itself stops the easiest way to pass tests, which is to delete them.",
    "bodyKn": "ಅತಿಕ್ರಮಿಸುವ ಪರಿಶೀಲನೆಗಳು ಒಂದು ದುರ್ಬಲ ಅಥವಾ ತೆಗೆದ ಪದರವನ್ನು ಇನ್ನೊಂದು ಮುಚ್ಚುತ್ತದೆ ಎಂದರ್ಥ, ಮತ್ತು ಸೂಟ್ ವಿರುದ್ಧದ ಪರಿಶೀಲನೆ ಪರೀಕ್ಷೆ ಪಾಸ್ ಮಾಡುವ ಸುಲಭ ಮಾರ್ಗ, ಅಂದರೆ ಅವನ್ನು ಅಳಿಸುವುದು, ತಡೆಯುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"if removing a check changes nothing, the check is useless.\" The anchor and floor only mattered once the regression tests were also gone.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಒಂದು ಪರಿಶೀಲನೆ ತೆಗೆದರೆ ಏನೂ ಬದಲಾಗದಿದ್ದರೆ ಆ ಪರಿಶೀಲನೆ ನಿರುಪಯುಕ್ತ.\" regression ಪರೀಕ್ಷೆಗಳೂ ಇಲ್ಲವಾದಾಗ ಮಾತ್ರ anchor ಮತ್ತು ಮಿತಿ ಮುಖ್ಯವಾದವು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Regression test: a check that earlier correct behavior still holds. Baseline suite: the original set of tests. Defense in depth: several overlapping checks. Rejection reason: why a proposal was refused.",
    "bodyKn": "Regression test: ಹಿಂದಿನ ಸರಿ ವರ್ತನೆ ಇನ್ನೂ ಉಳಿದಿದೆ ಎಂಬ ಪರಿಶೀಲನೆ. Baseline suite: ಮೂಲ ಪರೀಕ್ಷೆಗಳ ಸೆಟ್. Defense in depth: ಹಲವು ಅತಿಕ್ರಮಿಸುವ ಪರಿಶೀಲನೆಗಳು. Rejection reason: ಪ್ರಸ್ತಾವನೆ ಏಕೆ ನಿರಾಕರಿಸಲ್ಪಟ್ಟಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) All eight tests passed after one test was fixed. 2) Only 2.4 percent of proposals were accepted. 3) The anchor and floor never bound until the tests were removed. 4) Removing all three checks gave minimum safety -66.66. 5) Deleting a test was refused.",
    "bodyKn": "1) ಒಂದು ಪರೀಕ್ಷೆ ಸರಿಪಡಿಸಿದ ನಂತರ ಎಲ್ಲಾ ಎಂಟು ಪರೀಕ್ಷೆಗಳು ಪಾಸ್ ಆದವು. 2) ಪ್ರಸ್ತಾವನೆಗಳಲ್ಲಿ ಕೇವಲ 2.4 ಶೇಕಡಾ ಸ್ವೀಕರಿಸಲ್ಪಟ್ಟವು. 3) ಪರೀಕ್ಷೆಗಳನ್ನು ತೆಗೆಯುವವರೆಗೆ anchor ಮತ್ತು ಮಿತಿ ಬಾಧಿಸಲಿಲ್ಲ. 4) ಮೂರೂ ಪರಿಶೀಲನೆ ತೆಗೆದರೆ ಕನಿಷ್ಠ safety -66.66. 5) ಪರೀಕ್ಷೆ ಅಳಿಸುವುದು ನಿರಾಕರಿಸಲ್ಪಟ್ಟಿತು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What fraction of 12000 proposals were accepted?",
      "qKn": "12000 ಪ್ರಸ್ತಾವನೆಗಳಲ್ಲಿ ಎಷ್ಟು ಭಾಗ ಸ್ವೀಕರಿಸಲ್ಪಟ್ಟವು?",
      "opts": [
       "0.024",
       "0.400",
       "0.270",
       "0.157"
      ],
      "optsKn": [
       "0.024",
       "0.400",
       "0.270",
       "0.157"
      ],
      "correct": 0
     },
     {
      "q": "Which rejection reason was most common?",
      "qKn": "ಯಾವ ತಿರಸ್ಕಾರ ಕಾರಣ ಅತ್ಯಂತ ಸಾಮಾನ್ಯ?",
      "opts": [
       "regression t_sum",
       "safety floor",
       "outside anchor radius",
       "regression t_balance"
      ],
      "optsKn": [
       "regression t_sum",
       "safety floor",
       "outside anchor radius",
       "regression t_balance"
      ],
      "correct": 0
     },
     {
      "q": "What happened when only the anchor radius was removed?",
      "qKn": "anchor ತ್ರಿಜ್ಯ ಮಾತ್ರ ತೆಗೆದಾಗ ಏನಾಯಿತು?",
      "opts": [
       "Results were unchanged",
       "Capability doubled",
       "All policies failed",
       "Safety fell below 0"
      ],
      "optsKn": [
       "ಫಲಿತಾಂಶಗಳು ಬದಲಾಗಲಿಲ್ಲ",
       "capability ದ್ವಿಗುಣವಾಯಿತು",
       "ಎಲ್ಲಾ ನೀತಿಗಳು ವಿಫಲವಾದವು",
       "safety 0 ಕ್ಕಿಂತ ಕೆಳಗೆ ಬಿತ್ತು"
      ],
      "correct": 0
     },
     {
      "q": "What minimum safety resulted when tests, anchor and floor were all removed?",
      "qKn": "ಪರೀಕ್ಷೆ, anchor ಮತ್ತು ಮಿತಿ ಎಲ್ಲಾ ತೆಗೆದಾಗ ಯಾವ ಕನಿಷ್ಠ safety ಫಲಿತಾಂಶವಾಯಿತು?",
      "opts": [
       "-66.66",
       "5.52",
       "6.60",
       "5.01"
      ],
      "optsKn": [
       "-66.66",
       "5.52",
       "6.60",
       "5.01"
      ],
      "correct": 0
     },
     {
      "q": "Were these eight tests the lesson original tests?",
      "qKn": "ಈ ಎಂಟು ಪರೀಕ್ಷೆಗಳು lesson ನ ಮೂಲ ಪರೀಕ್ಷೆಗಳೇ?",
      "opts": [
       "No, they are the lab own tests for its own class",
       "Yes, identical",
       "Yes, from main.py",
       "They were not run"
      ],
      "optsKn": [
       "ಇಲ್ಲ, ಅವು ಲ್ಯಾಬ್‌ನ ಸ್ವಂತ ವರ್ಗಕ್ಕೆ ಅದರ ಸ್ವಂತ ಪರೀಕ್ಷೆಗಳು",
       "ಹೌದು, ಒಂದೇ",
       "ಹೌದು, main.py ಯಿಂದ",
       "ಅವನ್ನು ಓಡಿಸಲಿಲ್ಲ"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
