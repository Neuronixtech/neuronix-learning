module.exports = {
 "phaseId": "6a369d6366020ed05b32158c",
 "moduleId": "6a369d6366020ed05b3215a4",
 "order": 0,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Bounded Self-Improvement Designs (Part 1 of 3) — Invariants and Anchors",
 "titleKn": "ಮಿತಿಯುಳ್ಳ Self-Improvement ವಿನ್ಯಾಸಗಳು (ಭಾಗ 1 / 3) — Invariants ಮತ್ತು Anchors",
 "desc": "Bound a toy self-modifying policy with fixed invariants and a frozen anchor and measure the drift.",
 "descKn": "ಆಟಿಕೆ ಸ್ವಯಂ-ಮಾರ್ಪಡಿಸುವ ನೀತಿಯನ್ನು ನಿಗದಿತ invariants ಮತ್ತು ಹೆಪ್ಪುಗಟ್ಟಿದ anchor ನಿಂದ ಮಿತಿಗೊಳಿಸಿ drift ಅಳೆಯಿರಿ.",
 "objectives": [
  "Write invariants.",
  "Reject rule-breaking modifications.",
  "Measure drift.",
  "Add an anchor radius.",
  "Notice redundant checks."
 ],
 "objectivesKn": [
  "invariants ಬರೆಯಿರಿ.",
  "ನಿಯಮ ಮುರಿಯುವ ಮಾರ್ಪಾಡು ತಿರಸ್ಕರಿಸಿ.",
  "drift ಅಳೆಯಿರಿ.",
  "anchor ತ್ರಿಜ್ಯ ಸೇರಿಸಿ.",
  "ಅನಗತ್ಯ ಪರಿಶೀಲನೆ ಗಮನಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Bounded Self-Improvement Designs (Part 1 of 3)",
    "textKn": "ಮಿತಿಯುಳ್ಳ Self-Improvement ವಿನ್ಯಾಸಗಳು (ಭಾಗ 1 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 1 of 3: a policy vector modified by a scripted proposer, invariants that reject rule-breaking modifications, drift from the starting policy and an anchor radius that bounds it. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind bounded self-improvement designs (invariants, anchors, multi-objective acceptance, regression suites, a combined BoundedImprover and eight unit tests), not the real software, and the policy is a short vector of numbers, the proposer is random, every limit is invented and no language model or real self-modification is involved, so no real LLM behaviour is measured. The original code/main.py was not supplied, so the labs are our own implementation. The source lesson expects eight unit tests to pass; the lab here defines its own eight tests for its own BoundedImprover class and runs them, which is not a run of the lesson original tests. Every limit, weight and proposal distribution is invented. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 1ನೆಯದು: ಸ್ಕ್ರಿಪ್ಟ್ ಮಾಡಿದ ಪ್ರಸ್ತಾಪಕ ಮಾರ್ಪಡಿಸುವ ನೀತಿ ವೆಕ್ಟರ್, ನಿಯಮ ಮುರಿಯುವ ಮಾರ್ಪಾಡುಗಳನ್ನು ತಿರಸ್ಕರಿಸುವ invariants, ಆರಂಭಿಕ ನೀತಿಯಿಂದ drift ಮತ್ತು ಅದನ್ನು ಮಿತಿಗೊಳಿಸುವ anchor ತ್ರಿಜ್ಯ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು ಮಿತಿಯುಳ್ಳ self-improvement ವಿನ್ಯಾಸಗಳು (invariants, anchors, ಬಹು-ಉದ್ದೇಶ ಸ್ವೀಕಾರ, regression ಸೂಟ್‌ಗಳು, ಸಂಯೋಜಿತ BoundedImprover ಮತ್ತು ಎಂಟು unit ಪರೀಕ್ಷೆಗಳು) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ನೀತಿ ಸಂಖ್ಯೆಗಳ ಚಿಕ್ಕ ವೆಕ್ಟರ್, ಪ್ರಸ್ತಾಪಕ ಯಾದೃಚ್ಛಿಕ, ಪ್ರತಿ ಮಿತಿ ಕಲ್ಪಿತ ಮತ್ತು ಭಾಷಾ ಮಾದರಿ ಅಥವಾ ನಿಜ ಸ್ವಯಂ-ಮಾರ್ಪಾಡು ಇಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ code/main.py ಒದಗಿಸಿರಲಿಲ್ಲ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ನಮ್ಮದೇ ಅನುಷ್ಠಾನ. ಮೂಲ lesson ಎಂಟು unit ಪರೀಕ್ಷೆಗಳು ಪಾಸ್ ಆಗಬೇಕು ಎನ್ನುತ್ತದೆ; ಇಲ್ಲಿನ ಲ್ಯಾಬ್ ತನ್ನದೇ BoundedImprover ವರ್ಗಕ್ಕೆ ತನ್ನದೇ ಎಂಟು ಪರೀಕ್ಷೆಗಳನ್ನು ವ್ಯಾಖ್ಯಾನಿಸಿ ಓಡಿಸುತ್ತದೆ, ಅದು lesson ನ ಮೂಲ ಪರೀಕ್ಷೆಗಳ ಓಟ ಅಲ್ಲ. ಪ್ರತಿ ಮಿತಿ, ತೂಕ ಮತ್ತು ಪ್ರಸ್ತಾವನೆ ವಿತರಣೆ ಕಲ್ಪಿತ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Rules That Cannot Be Edited Away",
    "textKn": "ತಿದ್ದಿ ತೆಗೆಯಲಾಗದ ನಿಯಮಗಳು",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Two Primitives for Bounding Change",
    "headingKn": "ಬದಲಾವಣೆ ಮಿತಿಗೊಳಿಸುವ ಎರಡು ಆದಿಮಗಳು",
    "bodyEn": "A bounded self-improvement design lets a system change itself only inside limits it cannot move. This part builds the first two primitives on a toy: a four-number policy that a scripted proposer keeps nudging upward, invariants that refuse any modification breaking fixed rules, and an anchor, a frozen reference policy that bounds how far the policy may drift. The lab compares runs with and without each and measures drift over time.",
    "bodyKn": "ಮಿತಿಯುಳ್ಳ self-improvement ವಿನ್ಯಾಸ ವ್ಯವಸ್ಥೆ ತಾನು ಸರಿಸಲಾಗದ ಮಿತಿಗಳೊಳಗೆ ಮಾತ್ರ ತನ್ನನ್ನು ಬದಲಿಸಿಕೊಳ್ಳಲು ಬಿಡುತ್ತದೆ. ಈ ಭಾಗ ಮೊದಲ ಎರಡು ಆದಿಮಗಳನ್ನು ಆಟಿಕೆಯ ಮೇಲೆ ನಿರ್ಮಿಸುತ್ತದೆ: ಸ್ಕ್ರಿಪ್ಟ್ ಮಾಡಿದ ಪ್ರಸ್ತಾಪಕ ಮೇಲ್ಮುಖವಾಗಿ ತಳ್ಳುತ್ತಲೇ ಇರುವ ನಾಲ್ಕು-ಸಂಖ್ಯೆ ನೀತಿ, ನಿಗದಿತ ನಿಯಮ ಮುರಿಯುವ ಯಾವುದೇ ಮಾರ್ಪಾಡು ನಿರಾಕರಿಸುವ invariants, ಮತ್ತು ನೀತಿ ಎಷ್ಟು ದೂರ drift ಆಗಬಹುದು ಎಂದು ಮಿತಿಗೊಳಿಸುವ ಹೆಪ್ಪುಗಟ್ಟಿದ ಉಲ್ಲೇಖ ನೀತಿ ಆದ anchor. ಲ್ಯಾಬ್ ಪ್ರತಿಯೊಂದರೊಂದಿಗೆ ಮತ್ತು ಇಲ್ಲದೆ ಓಟಗಳನ್ನು ಹೋಲಿಸಿ ಕಾಲಕ್ರಮೇಣ drift ಅಳೆಯುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Invariants and an Anchor",
    "headingKn": "Invariants ಮತ್ತು Anchor",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">every modification must pass fixed rules and stay near the anchor</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">proposal</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">modify policy</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">invariants</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">fixed rules</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">anchor</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">frozen reference</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">accept</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">only if inside</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">every modification must pass fixed rules and stay near the anchor</text></svg>",
    "captionEn": "A modification is accepted only if it keeps the rules and stays near the reference.",
    "captionKn": "ಮಾರ್ಪಾಡು ನಿಯಮ ಉಳಿಸಿ ಉಲ್ಲೇಖದ ಹತ್ತಿರ ಇದ್ದರೆ ಮಾತ್ರ ಸ್ವೀಕರಿಸಲ್ಪಡುತ್ತದೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "captionEn": "Rules in the lab",
    "captionKn": "ಲ್ಯಾಬ್‌ನಲ್ಲಿ ನಿಯಮಗಳು",
    "rows": "Rule|Setting\npolicy|4 numbers, start at 0\nproposal|noise with a push of +0.02 per parameter\ninvariants|max at most 1.0, sum at most 2.5, step at most 0.3\nanchor|the all-zero starting policy, radius 3.0, 1.5 or 0.5\nruns|seeds 1 to 30"
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
    "filename": "bs_1.py",
    "headingEn": "Proposer, invariants, distance and run loop",
    "headingKn": "ಪ್ರಸ್ತಾಪಕ, invariants, ದೂರ ಮತ್ತು ಓಟ ಲೂಪ್",
    "descEn": "propose nudges the policy, invariants_ok applies the fixed rules, dist measures distance from the anchor and run applies the checks to each proposal.",
    "descKn": "propose ನೀತಿಯನ್ನು ತಳ್ಳುತ್ತದೆ, invariants_ok ನಿಗದಿತ ನಿಯಮ ಅನ್ವಯಿಸುತ್ತದೆ, dist anchor ನಿಂದ ದೂರ ಅಳೆಯುತ್ತದೆ ಮತ್ತು run ಪ್ರತಿ ಪ್ರಸ್ತಾವನೆಗೆ ಪರಿಶೀಲನೆ ಅನ್ವಯಿಸುತ್ತದೆ.",
    "code": "DIM = 4\r\nANCHOR = [0.0] * DIM\r\n\r\n\r\ndef propose(r, policy, bias=0.02):\r\n    \"\"\"A modification: nudge every parameter by noise with a small systematic push upward.\"\"\"\r\n    return [p + r.gauss(bias, 0.1) for p in policy]\r\n\r\n\r\ndef invariants_ok(policy, prev):\r\n    \"\"\"Fixed rules: no parameter above 1.0, the sum stays at most 2.5, no single step larger than 0.3 in any parameter.\"\"\"\r\n    return (max(policy) <= 1.0 and sum(policy) <= 2.5 and max(abs(a - b) for a, b in zip(policy, prev)) <= 0.3)\r\n\r\n\r\ndef dist(a, b):\r\n    return sum((x - y) ** 2 for x, y in zip(a, b)) ** 0.5\r\n\r\n\r\ndef run(seed, steps, use_invariants, anchor_radius=None):\r\n    r = random.Random(seed)\r\n    policy = list(ANCHOR)\r\n    accepted = rejected_inv = rejected_anchor = 0\r\n    violated = 0\r\n    for _ in range(steps):\r\n        cand = propose(r, policy)\r\n        if use_invariants and not invariants_ok(cand, policy):\r\n            rejected_inv += 1\r\n            continue\r\n        if anchor_radius is not None and dist(cand, ANCHOR) > anchor_radius:\r\n            rejected_anchor += 1\r\n            continue\r\n        policy = cand\r\n        accepted += 1\r\n        if not invariants_ok(policy, policy) or max(policy) > 1.0 or sum(policy) > 2.5:\r\n            violated += 1\r\n    return policy, accepted, rejected_inv, rejected_anchor, violated"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "bs_1.py",
    "headingEn": "main(): experiments",
    "headingKn": "main(): ಪ್ರಯೋಗಗಳು",
    "descEn": "main() compares unchecked and checked runs, measures drift, sweeps the anchor radius and prints rejected candidates.",
    "descKn": "main() ಪರಿಶೀಲಿಸದ ಮತ್ತು ಪರಿಶೀಲಿಸಿದ ಓಟ ಹೋಲಿಸಿ, drift ಅಳೆದು, anchor ತ್ರಿಜ್ಯ ಸ್ವೀಪ್ ಮಾಡಿ ಮತ್ತು ತಿರಸ್ಕೃತ ಅಭ್ಯರ್ಥಿಗಳನ್ನು ಮುದ್ರಿಸುತ್ತದೆ.",
    "code": "def main():\r\n    section(\"1. Genuinely measuring: an unchecked policy against one with invariants (200 steps, seeds 1 to 30)\")\r\n    for name, flag in ((\"no invariants\", False), (\"with invariants\", True)):\r\n        viol_runs = 0\r\n        accepts, rej = [], []\r\n        final_max = []\r\n        for seed in range(1, 31):\r\n            policy, acc, ri, ra, viol = run(seed, 200, flag)\r\n            viol_runs += (max(policy) > 1.0 or sum(policy) > 2.5)\r\n            accepts.append(acc)\r\n            rej.append(ri)\r\n            final_max.append(max(policy))\r\n        print(f\"{name:16}: final policy broke a rule in {viol_runs}/30 runs | mean accepted {mean(accepts):.0f} | mean rejected by invariants {mean(rej):.0f} | mean largest parameter {mean(final_max):.2f}\")\r\n    print(\"with the rules checked before each modification is accepted the final policy stays inside them in every run, and without them the steady upward push carries most runs past the limits; the proposer, the push and the limits are invented\")\r\n\r\n    section(\"2. Genuinely measuring: distance from the anchor over time (no anchor, seeds 1 to 30)\")\r\n    for steps in (20, 100, 400):\r\n        d = [dist(run(seed, steps, False)[0], ANCHOR) for seed in range(1, 31)]\r\n        print(f\"after {steps:3d} steps: mean distance from the starting policy {mean(d):.2f} | max {max(d):.2f}\")\r\n    print(\"without an anchor the distance from the starting policy grows with the number of modifications, because the push accumulates and the noise random-walks; a policy that has changed a little each time can end up far from where it began\")\r\n\r\n    section(\"3. Genuinely measuring: an anchor radius (400 steps, invariants on, seeds 1 to 30)\")\r\n    for radius in (None, 3.0, 1.5, 0.5):\r\n        res = [run(seed, 400, True, radius) for seed in range(1, 31)]\r\n        d = mean(dist(p, ANCHOR) for p, *_ in res)\r\n        print(f\"radius {str(radius):4}: mean final distance {d:.2f} | mean modifications accepted {mean(x[1] for x in res):6.1f} | rejected by the anchor {mean(x[3] for x in res):6.1f}\")\r\n    print(\"radii of 3.0 and above change nothing because the invariants already keep the policy within about 1.3 of the start, while a radius of 0.5 holds the final distance to 0.43 and rejects 176.4 modifications per run, yet the policy still accepts 217.9 modifications because it can move back and forth inside the radius; the choice of radius trades safety against room to improve\")\r\n\r\n    section(\"4. Genuinely running: what the invariants reject, one example\")\r\n    r = random.Random(7)\r\n    policy = [0.9, 0.9, 0.5, 0.1]\r\n    for _ in range(4):\r\n        cand = propose(r, policy, bias=0.15)\r\n        print(f\"candidate {[round(x, 2) for x in cand]} | max {max(cand):.2f} | sum {sum(cand):.2f} | accepted: {invariants_ok(cand, policy)}\")\r\n    print(\"candidates that push any parameter over 1.0, the sum over 2.5 or a single step over 0.3 are refused outright and the policy stays where it was; the rules are examples and say nothing about which rules a real system needs\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely measuring: an unchecked policy against one with invariants (200 steps, seeds 1 to 30) ---\nno invariants   : final policy broke a rule in 30/30 runs | mean accepted 200 | mean rejected by invariants 0 | mean largest parameter 5.83\nwith invariants : final policy broke a rule in 0/30 runs | mean accepted 129 | mean rejected by invariants 71 | mean largest parameter 0.88\nwith the rules checked before each modification is accepted the final policy stays inside them in every run, and without them the steady upward push carries most runs past the limits; the proposer, the push and the limits are invented\n\n--- 2. Genuinely measuring: distance from the anchor over time (no anchor, seeds 1 to 30) ---\nafter  20 steps: mean distance from the starting policy 1.25 | max 2.09\nafter 100 steps: mean distance from the starting policy 4.71 | max 6.30\nafter 400 steps: mean distance from the starting policy 16.69 | max 19.81\nwithout an anchor the distance from the starting policy grows with the number of modifications, because the push accumulates and the noise random-walks; a policy that has changed a little each time can end up far from where it began\n\n--- 3. Genuinely measuring: an anchor radius (400 steps, invariants on, seeds 1 to 30) ---\nradius None: mean final distance 1.32 | mean modifications accepted  248.8 | rejected by the anchor    0.0\nradius 3.0 : mean final distance 1.32 | mean modifications accepted  248.8 | rejected by the anchor    0.0\nradius 1.5 : mean final distance 1.26 | mean modifications accepted  250.6 | rejected by the anchor    4.7\nradius 0.5 : mean final distance 0.43 | mean modifications accepted  217.9 | rejected by the anchor  176.4\nradii of 3.0 and above change nothing because the invariants already keep the policy within about 1.3 of the start, while a radius of 0.5 holds the final distance to 0.43 and rejects 176.4 modifications per run, yet the policy still accepts 217.9 modifications because it can move back and forth inside the radius; the choice of radius trades safety against room to improve\n\n--- 4. Genuinely running: what the invariants reject, one example ---\ncandidate [1.02, 1.1, 0.63, 0.22] | max 1.10 | sum 2.97 | accepted: False\ncandidate [0.96, 1.03, 0.76, 0.29] | max 1.03 | sum 3.04 | accepted: False\ncandidate [1.15, 1.07, 0.69, 0.27] | max 1.15 | sum 3.19 | accepted: False\ncandidate [0.88, 1.14, 0.7, 0.3] | max 1.14 | sum 3.02 | accepted: False\ncandidates that push any parameter over 1.0, the sum over 2.5 or a single step over 0.3 are refused outright and the policy stays where it was; the rules are examples and say nothing about which rules a real system needs"
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
    "headingEn": "Experiment 1: An unchecked policy against one with invariants (200 steps, seeds 1 to 30)",
    "headingKn": "ಪ್ರಯೋಗ 1: An unchecked policy against one with invariants (200 steps, seeds 1 to 30)",
    "bodyEn": "What it ran: An unchecked policy against one with invariants (200 steps, seeds 1 to 30). What the lab concluded: with the rules checked before each modification is accepted the final policy stays inside them in every run, and without them the steady upward push carries most runs past the limits; the proposer, the push and the limits are invented",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: An unchecked policy against one with invariants (200 steps, seeds 1 to 30). ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): with the rules checked before each modification is accepted the final policy stays inside them in every run, and without them the steady upward push carries most runs past the limits; the proposer, the push and the limits are invented"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. Genuinely measuring: an unchecked policy against one with invariants (200 steps, seeds 1 to 30) ---\nno invariants   : final policy broke a rule in 30/30 runs | mean accepted 200 | mean rejected by invariants 0 | mean largest parameter 5.83\nwith invariants : final policy broke a rule in 0/30 runs | mean accepted 129 | mean rejected by invariants 71 | mean largest parameter 0.88"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: Distance from the anchor over time (no anchor, seeds 1 to 30)",
    "headingKn": "ಪ್ರಯೋಗ 2: Distance from the anchor over time (no anchor, seeds 1 to 30)",
    "bodyEn": "What it ran: Distance from the anchor over time (no anchor, seeds 1 to 30). What the lab concluded: without an anchor the distance from the starting policy grows with the number of modifications, because the push accumulates and the noise random-walks; a policy that has changed a little each time can end up far from where it began",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Distance from the anchor over time (no anchor, seeds 1 to 30). ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): without an anchor the distance from the starting policy grows with the number of modifications, because the push accumulates and the noise random-walks; a policy that has changed a little each time can end up far from where it began"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely measuring: distance from the anchor over time (no anchor, seeds 1 to 30) ---\nafter  20 steps: mean distance from the starting policy 1.25 | max 2.09\nafter 100 steps: mean distance from the starting policy 4.71 | max 6.30\nafter 400 steps: mean distance from the starting policy 16.69 | max 19.81"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: An anchor radius (400 steps, invariants on, seeds 1 to 30)",
    "headingKn": "ಪ್ರಯೋಗ 3: An anchor radius (400 steps, invariants on, seeds 1 to 30)",
    "bodyEn": "What it ran: An anchor radius (400 steps, invariants on, seeds 1 to 30). What the lab concluded: radii of 3.0 and above change nothing because the invariants already keep the policy within about 1.3 of the start, while a radius of 0.5 holds the final distance to 0.43 and rejects 176.4 modifications per run, yet the policy still accepts 217.9 modifications because it can move back and forth inside the radius; the choice of radius trades safety against room to improve",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: An anchor radius (400 steps, invariants on, seeds 1 to 30). ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): radii of 3.0 and above change nothing because the invariants already keep the policy within about 1.3 of the start, while a radius of 0.5 holds the final distance to 0.43 and rejects 176.4 modifications per run, yet the policy still accepts 217.9 modifications because it can move back and forth inside the radius; the choice of radius trades safety against room to improve"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely measuring: an anchor radius (400 steps, invariants on, seeds 1 to 30) ---\nradius None: mean final distance 1.32 | mean modifications accepted  248.8 | rejected by the anchor    0.0\nradius 3.0 : mean final distance 1.32 | mean modifications accepted  248.8 | rejected by the anchor    0.0\nradius 1.5 : mean final distance 1.26 | mean modifications accepted  250.6 | rejected by the anchor    4.7\nradius 0.5 : mean final distance 0.43 | mean modifications accepted  217.9 | rejected by the anchor  176.4"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 4: What the invariants reject, one example",
    "headingKn": "ಪ್ರಯೋಗ 4: What the invariants reject, one example",
    "bodyEn": "What it ran: What the invariants reject, one example. What the lab concluded: candidates that push any parameter over 1.0, the sum over 2.5 or a single step over 0.3 are refused outright and the policy stays where it was; the rules are examples and say nothing about which rules a real system needs",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: What the invariants reject, one example. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): candidates that push any parameter over 1.0, the sum over 2.5 or a single step over 0.3 are refused outright and the policy stays where it was; the rules are examples and say nothing about which rules a real system needs"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 4. Genuinely running: what the invariants reject, one example ---\ncandidate [1.02, 1.1, 0.63, 0.22] | max 1.10 | sum 2.97 | accepted: False\ncandidate [0.96, 1.03, 0.76, 0.29] | max 1.03 | sum 3.04 | accepted: False\ncandidate [1.15, 1.07, 0.69, 0.27] | max 1.15 | sum 3.19 | accepted: False\ncandidate [0.88, 1.14, 0.7, 0.3] | max 1.14 | sum 3.02 | accepted: False"
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
    "headingEn": "Genuinely Found: Invariants and Drift",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Invariants ಮತ್ತು Drift",
    "bodyEn": "Section 1 over 200 steps and 30 seeds: with no invariants the final policy broke a rule in 30 of 30 runs, accepted all 200 modifications and had a mean largest parameter of 5.83; with invariants it broke a rule in 0 of 30 runs, accepted 129 on average, rejected 71 and had a mean largest parameter of 0.88. Section 2: the mean distance from the start was 1.25 after 20 steps, 4.71 after 100 and 16.69 after 400.",
    "bodyKn": "ವಿಭಾಗ 1, 200 ಹಂತ ಮತ್ತು 30 seeds ಮೇಲೆ: invariants ಇಲ್ಲದೆ ಅಂತಿಮ ನೀತಿ 30 ರಲ್ಲಿ 30 ಓಟಗಳಲ್ಲಿ ನಿಯಮ ಮುರಿಯಿತು, ಎಲ್ಲಾ 200 ಮಾರ್ಪಾಡು ಸ್ವೀಕರಿಸಿತು ಮತ್ತು ಸರಾಸರಿ ದೊಡ್ಡ ನಿಯತಾಂಕ 5.83; invariants ಜೊತೆ 30 ರಲ್ಲಿ 0 ಓಟಗಳಲ್ಲಿ ಮುರಿಯಿತು, ಸರಾಸರಿ 129 ಸ್ವೀಕರಿಸಿತು, 71 ತಿರಸ್ಕರಿಸಿತು ಮತ್ತು ಸರಾಸರಿ ದೊಡ್ಡ ನಿಯತಾಂಕ 0.88. ವಿಭಾಗ 2: ಆರಂಭದಿಂದ ಸರಾಸರಿ ದೂರ 20 ಹಂತ ನಂತರ 1.25, 100 ನಂತರ 4.71 ಮತ್ತು 400 ನಂತರ 16.69."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: The Anchor Radius",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Anchor ತ್ರಿಜ್ಯ",
    "bodyEn": "Section 3 over 400 steps with invariants on: no radius and radius 3.0 gave a mean final distance of 1.32 with 248.8 modifications accepted, radius 1.5 gave 1.26 with 250.6 accepted and 4.7 rejected by the anchor, and radius 0.5 gave 0.43 with 217.9 accepted and 176.4 rejected by the anchor. Section 4: all four example candidates were refused because a parameter exceeded 1.0 or the sum exceeded 2.5.",
    "bodyKn": "ವಿಭಾಗ 3, invariants ಇರುವ 400 ಹಂತಗಳಲ್ಲಿ: ತ್ರಿಜ್ಯ ಇಲ್ಲದೆ ಮತ್ತು ತ್ರಿಜ್ಯ 3.0 ಸರಾಸರಿ ಅಂತಿಮ ದೂರ 1.32 ಮತ್ತು 248.8 ಮಾರ್ಪಾಡು ಸ್ವೀಕರಿಸಿತು, ತ್ರಿಜ್ಯ 1.5 1.26 ಮತ್ತು 250.6 ಸ್ವೀಕರಿಸಿ anchor ನಿಂದ 4.7 ತಿರಸ್ಕರಿಸಲ್ಪಟ್ಟಿತು, ಮತ್ತು ತ್ರಿಜ್ಯ 0.5 0.43 ಮತ್ತು 217.9 ಸ್ವೀಕರಿಸಿ anchor ನಿಂದ 176.4 ತಿರಸ್ಕರಿಸಲ್ಪಟ್ಟಿತು. ವಿಭಾಗ 4: ನಿಯತಾಂಕ 1.0 ಮೀರಿದ್ದರಿಂದ ಅಥವಾ ಮೊತ್ತ 2.5 ಮೀರಿದ್ದರಿಂದ ನಾಲ್ಕೂ ಉದಾಹರಣೆ ಅಭ್ಯರ್ಥಿಗಳು ನಿರಾಕರಿಸಲ್ಪಟ್ಟವು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "Small changes that each look harmless add up, so limits have to be checked on the result of every modification and measured against something that never moves.",
    "bodyKn": "ಪ್ರತಿಯೊಂದೂ ಹಾನಿರಹಿತ ಎಂದು ಕಾಣುವ ಸಣ್ಣ ಬದಲಾವಣೆಗಳು ಸೇರಿ ಬೆಳೆಯುತ್ತವೆ, ಆದ್ದರಿಂದ ಮಿತಿಗಳನ್ನು ಪ್ರತಿ ಮಾರ್ಪಾಡಿನ ಫಲಿತಾಂಶದ ಮೇಲೆ ಮತ್ತು ಎಂದಿಗೂ ಸರಿಯದ ಯಾವುದರ ವಿರುದ್ಧ ಪರಿಶೀಲಿಸಬೇಕು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"an anchor radius always adds protection.\" Radii of 3.0 and above changed nothing because the invariants already kept the policy within about 1.3 of the start.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"anchor ತ್ರಿಜ್ಯ ಯಾವಾಗಲೂ ರಕ್ಷಣೆ ಸೇರಿಸುತ್ತದೆ.\" 3.0 ಮತ್ತು ಮೇಲಿನ ತ್ರಿಜ್ಯಗಳು ಏನನ್ನೂ ಬದಲಿಸಲಿಲ್ಲ ಏಕೆಂದರೆ invariants ಈಗಾಗಲೇ ನೀತಿಯನ್ನು ಆರಂಭದಿಂದ ಸುಮಾರು 1.3 ಒಳಗೆ ಇಟ್ಟಿದ್ದವು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Invariant: a rule that must hold after every change. Anchor: a frozen reference to measure drift against. Drift: accumulated change from the anchor. Proposer: the part that suggests modifications.",
    "bodyKn": "Invariant: ಪ್ರತಿ ಬದಲಾವಣೆಯ ನಂತರ ಉಳಿಯಬೇಕಾದ ನಿಯಮ. Anchor: drift ಅಳೆಯಲು ಹೆಪ್ಪುಗಟ್ಟಿದ ಉಲ್ಲೇಖ. Drift: anchor ನಿಂದ ಸಂಚಿತ ಬದಲಾವಣೆ. Proposer: ಮಾರ್ಪಾಡುಗಳನ್ನು ಸೂಚಿಸುವ ಭಾಗ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) Without invariants 30 of 30 runs broke a rule. 2) With them 0 did. 3) Unchecked drift reached 16.69 after 400 steps. 4) Radius 0.5 held the distance to 0.43. 5) Radius 3.0 added nothing here.",
    "bodyKn": "1) invariants ಇಲ್ಲದೆ 30 ರಲ್ಲಿ 30 ಓಟಗಳು ನಿಯಮ ಮುರಿದವು. 2) ಅವುಗಳೊಂದಿಗೆ 0. 3) ಪರಿಶೀಲಿಸದ drift 400 ಹಂತ ನಂತರ 16.69 ತಲುಪಿತು. 4) ತ್ರಿಜ್ಯ 0.5 ದೂರವನ್ನು 0.43 ಕ್ಕೆ ಹಿಡಿಯಿತು. 5) ತ್ರಿಜ್ಯ 3.0 ಇಲ್ಲಿ ಏನೂ ಸೇರಿಸಲಿಲ್ಲ."
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
    "bodyEn": "1) Open a terminal in pneuronics-backend/lesson-defs/labs. 2) Run: python -B bs_1.py (in Git Bash on Windows: PYTHONIOENCODING=utf-8 python -B bs_1.py). 3) Compare each section with the walkthrough above. The -B flag stops Python from writing __pycache__ folders.",
    "bodyKn": "1) pneuronics-backend/lesson-defs/labs ನಲ್ಲಿ ಟರ್ಮಿನಲ್ ತೆರೆಯಿರಿ. 2) ಓಡಿಸಿ: python -B bs_1.py (Windows Git Bash ನಲ್ಲಿ: PYTHONIOENCODING=utf-8 python -B bs_1.py). 3) ಪ್ರತಿ ವಿಭಾಗವನ್ನು ಮೇಲಿನ ನಡೆದಾಟಕ್ಕೆ ಹೋಲಿಸಿ. -B ಧ್ವಜ Python __pycache__ ಫೋಲ್ಡರ್‌ಗಳನ್ನು ಬರೆಯುವುದನ್ನು ತಡೆಯುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Predict before you run",
    "headingKn": "ಓಡಿಸುವ ಮುನ್ನ ಊಹಿಸಿ",
    "bodyEn": "Before rerunning, write down what you expect each experiment to print, then compare:\n1. An unchecked policy against one with invariants (200 steps, seeds 1 to 30)\n2. Distance from the anchor over time (no anchor, seeds 1 to 30)\n3. An anchor radius (400 steps, invariants on, seeds 1 to 30)\n4. What the invariants reject, one example",
    "bodyKn": "ಮರುಓಡಿಸುವ ಮುನ್ನ ಪ್ರತಿ ಪ್ರಯೋಗ ಏನು ಮುದ್ರಿಸುತ್ತದೆ ಎಂದು ನಿರೀಕ್ಷಿಸುವುದನ್ನು ಬರೆಯಿರಿ, ನಂತರ ಹೋಲಿಸಿ:\n1. An unchecked policy against one with invariants (200 steps, seeds 1 to 30)\n2. Distance from the anchor over time (no anchor, seeds 1 to 30)\n3. An anchor radius (400 steps, invariants on, seeds 1 to 30)\n4. What the invariants reject, one example"
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "In how many of 30 runs did the unchecked policy break a rule?",
      "qKn": "ಪರಿಶೀಲಿಸದ ನೀತಿ 30 ರಲ್ಲಿ ಎಷ್ಟು ಓಟಗಳಲ್ಲಿ ನಿಯಮ ಮುರಿಯಿತು?",
      "opts": [
       "30",
       "0",
       "15",
       "71"
      ],
      "optsKn": [
       "30",
       "0",
       "15",
       "71"
      ],
      "correct": 0
     },
     {
      "q": "What was the mean distance from the start after 400 unchecked steps?",
      "qKn": "400 ಪರಿಶೀಲಿಸದ ಹಂತಗಳ ನಂತರ ಆರಂಭದಿಂದ ಸರಾಸರಿ ದೂರ ಎಷ್ಟು?",
      "opts": [
       "16.69",
       "1.25",
       "4.71",
       "0.43"
      ],
      "optsKn": [
       "16.69",
       "1.25",
       "4.71",
       "0.43"
      ],
      "correct": 0
     },
     {
      "q": "What final distance did an anchor radius of 0.5 give?",
      "qKn": "anchor ತ್ರಿಜ್ಯ 0.5 ಯಾವ ಅಂತಿಮ ದೂರ ನೀಡಿತು?",
      "opts": [
       "0.43",
       "1.32",
       "1.26",
       "3.0"
      ],
      "optsKn": [
       "0.43",
       "1.32",
       "1.26",
       "3.0"
      ],
      "correct": 0
     },
     {
      "q": "Why did radius 3.0 change nothing?",
      "qKn": "ತ್ರಿಜ್ಯ 3.0 ಏನನ್ನೂ ಏಕೆ ಬದಲಿಸಲಿಲ್ಲ?",
      "opts": [
       "The invariants already kept the policy within about 1.3 of the start",
       "The anchor was disabled",
       "The radius was negative",
       "No proposals were made"
      ],
      "optsKn": [
       "invariants ಈಗಾಗಲೇ ನೀತಿಯನ್ನು ಆರಂಭದಿಂದ ಸುಮಾರು 1.3 ಒಳಗೆ ಇಟ್ಟಿದ್ದವು",
       "anchor ನಿಷ್ಕ್ರಿಯವಾಗಿತ್ತು",
       "ತ್ರಿಜ್ಯ ಋಣಾತ್ಮಕವಾಗಿತ್ತು",
       "ಯಾವ ಪ್ರಸ್ತಾವನೆಯೂ ಇರಲಿಲ್ಲ"
      ],
      "correct": 0
     },
     {
      "q": "Do these invariants say which rules a real system needs?",
      "qKn": "ಈ invariants ನಿಜ ವ್ಯವಸ್ಥೆಗೆ ಯಾವ ನಿಯಮಗಳು ಬೇಕು ಎಂದು ಹೇಳುತ್ತವೆಯೇ?",
      "opts": [
       "No, they are invented examples",
       "Yes, they are standard",
       "Yes, they are proven sufficient",
       "Only the sum rule"
      ],
      "optsKn": [
       "ಇಲ್ಲ, ಅವು ಕಲ್ಪಿತ ಉದಾಹರಣೆಗಳು",
       "ಹೌದು, ಅವು ಪ್ರಮಾಣಿತ",
       "ಹೌದು, ಅವು ಸಾಕು ಎಂದು ಸಾಬೀತಾಗಿದೆ",
       "ಮೊತ್ತ ನಿಯಮ ಮಾತ್ರ"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
