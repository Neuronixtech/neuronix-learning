module.exports = {
 "phaseId": "6a369d6366020ed05b32158c",
 "moduleId": "6a369d6366020ed05b3215a4",
 "order": 1,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Bounded Self-Improvement Designs (Part 2 of 3) — Multi-Objective Acceptance",
 "titleKn": "ಮಿತಿಯುಳ್ಳ Self-Improvement ವಿನ್ಯಾಸಗಳು (ಭಾಗ 2 / 3) — ಬಹು-ಉದ್ದೇಶ ಸ್ವೀಕಾರ",
 "desc": "Compare acceptance rules for modifications that trade capability against safety.",
 "descKn": "capability ಅನ್ನು safety ವಿರುದ್ಧ ವಿನಿಮಯ ಮಾಡುವ ಮಾರ್ಪಾಡುಗಳ ಸ್ವೀಕಾರ ನಿಯಮಗಳನ್ನು ಹೋಲಿಸಿ.",
 "objectives": [
  "Write three acceptance rules.",
  "Sweep a weight.",
  "See tolerances compound.",
  "Add an absolute floor.",
  "Say what a score cannot guarantee."
 ],
 "objectivesKn": [
  "ಮೂರು ಸ್ವೀಕಾರ ನಿಯಮ ಬರೆಯಿರಿ.",
  "ತೂಕ ಸ್ವೀಪ್ ಮಾಡಿ.",
  "ಸಹನೆಗಳು ಸಂಯೋಜಿತವಾಗುವುದನ್ನು ನೋಡಿ.",
  "ಸಂಪೂರ್ಣ ಮಿತಿ ಸೇರಿಸಿ.",
  "ಅಂಕ ಏನನ್ನು ಖಾತರಿಪಡಿಸಲಾರದು ಹೇಳಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Bounded Self-Improvement Designs (Part 2 of 3)",
    "textKn": "ಮಿತಿಯುಳ್ಳ Self-Improvement ವಿನ್ಯಾಸಗಳು (ಭಾಗ 2 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 2 of 3: three acceptance rules for modifications that change capability and safety together, the weight in a weighted sum, per-step safety drops that compound and an absolute safety floor. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind bounded self-improvement designs (invariants, anchors, multi-objective acceptance, regression suites, a combined BoundedImprover and eight unit tests), not the real software, and the policy is a short vector of numbers, the proposer is random, every limit is invented and no language model or real self-modification is involved, so no real LLM behaviour is measured. The original code/main.py was not supplied, so the labs are our own implementation. The source lesson expects eight unit tests to pass; the lab here defines its own eight tests for its own BoundedImprover class and runs them, which is not a run of the lesson original tests. Every limit, weight and proposal distribution is invented. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 2ನೆಯದು: capability ಮತ್ತು safety ಎರಡನ್ನೂ ಬದಲಿಸುವ ಮಾರ್ಪಾಡುಗಳಿಗೆ ಮೂರು ಸ್ವೀಕಾರ ನಿಯಮಗಳು, ತೂಕದ ಮೊತ್ತದ ತೂಕ, ಸಂಯೋಜಿತವಾಗುವ ಪ್ರತಿ-ಹಂತ safety ಇಳಿಕೆಗಳು ಮತ್ತು ಸಂಪೂರ್ಣ safety ಮಿತಿ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು ಮಿತಿಯುಳ್ಳ self-improvement ವಿನ್ಯಾಸಗಳು (invariants, anchors, ಬಹು-ಉದ್ದೇಶ ಸ್ವೀಕಾರ, regression ಸೂಟ್‌ಗಳು, ಸಂಯೋಜಿತ BoundedImprover ಮತ್ತು ಎಂಟು unit ಪರೀಕ್ಷೆಗಳು) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ನೀತಿ ಸಂಖ್ಯೆಗಳ ಚಿಕ್ಕ ವೆಕ್ಟರ್, ಪ್ರಸ್ತಾಪಕ ಯಾದೃಚ್ಛಿಕ, ಪ್ರತಿ ಮಿತಿ ಕಲ್ಪಿತ ಮತ್ತು ಭಾಷಾ ಮಾದರಿ ಅಥವಾ ನಿಜ ಸ್ವಯಂ-ಮಾರ್ಪಾಡು ಇಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ code/main.py ಒದಗಿಸಿರಲಿಲ್ಲ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ನಮ್ಮದೇ ಅನುಷ್ಠಾನ. ಮೂಲ lesson ಎಂಟು unit ಪರೀಕ್ಷೆಗಳು ಪಾಸ್ ಆಗಬೇಕು ಎನ್ನುತ್ತದೆ; ಇಲ್ಲಿನ ಲ್ಯಾಬ್ ತನ್ನದೇ BoundedImprover ವರ್ಗಕ್ಕೆ ತನ್ನದೇ ಎಂಟು ಪರೀಕ್ಷೆಗಳನ್ನು ವ್ಯಾಖ್ಯಾನಿಸಿ ಓಡಿಸುತ್ತದೆ, ಅದು lesson ನ ಮೂಲ ಪರೀಕ್ಷೆಗಳ ಓಟ ಅಲ್ಲ. ಪ್ರತಿ ಮಿತಿ, ತೂಕ ಮತ್ತು ಪ್ರಸ್ತಾವನೆ ವಿತರಣೆ ಕಲ್ಪಿತ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Which Objective Gets Protected?",
    "textKn": "ಯಾವ ಉದ್ದೇಶ ರಕ್ಷಿಸಲ್ಪಡುತ್ತದೆ?",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Capability Against Safety in One Rule",
    "headingKn": "ಒಂದು ನಿಯಮದಲ್ಲಿ Capability ವಿರುದ್ಧ Safety",
    "bodyEn": "A modification that raises capability often costs something elsewhere. This part uses a toy in which each modification changes a capability score and a safety score together, with gains in capability tending to cost safety. It compares accepting any capability gain, accepting a weighted sum, and accepting a capability gain only if safety does not fall, then tries per-step tolerances and an absolute floor. The proposal distribution and thresholds are invented.",
    "bodyKn": "capability ಹೆಚ್ಚಿಸುವ ಮಾರ್ಪಾಡು ಬೇರೆಡೆ ಏನನ್ನಾದರೂ ವೆಚ್ಚ ಮಾಡುತ್ತದೆ. ಈ ಭಾಗ ಪ್ರತಿ ಮಾರ್ಪಾಡು capability ಅಂಕ ಮತ್ತು safety ಅಂಕ ಎರಡನ್ನೂ ಒಟ್ಟಿಗೆ ಬದಲಿಸುವ ಆಟಿಕೆ ಬಳಸುತ್ತದೆ, capability ಲಾಭ safety ವೆಚ್ಚ ಮಾಡುವ ಪ್ರವೃತ್ತಿ ಇದೆ. ಯಾವುದೇ capability ಲಾಭ ಸ್ವೀಕರಿಸುವುದು, ತೂಕದ ಮೊತ್ತ ಸ್ವೀಕರಿಸುವುದು ಮತ್ತು safety ಇಳಿಯದಿದ್ದರೆ ಮಾತ್ರ capability ಲಾಭ ಸ್ವೀಕರಿಸುವುದನ್ನು ಹೋಲಿಸುತ್ತದೆ, ನಂತರ ಪ್ರತಿ-ಹಂತ ಸಹನೆ ಮತ್ತು ಸಂಪೂರ್ಣ ಮಿತಿ ಪ್ರಯತ್ನಿಸುತ್ತದೆ. ಪ್ರಸ್ತಾವನೆ ವಿತರಣೆ ಮತ್ತು ಮಿತಿಗಳು ಕಲ್ಪಿತ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Multi-Objective Acceptance",
    "headingKn": "ಬಹು-ಉದ್ದೇಶ ಸ್ವೀಕಾರ",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">the acceptance rule decides which objective is protected</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">proposal</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">dc and ds</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">rule</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">accept or not</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">capability</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">rises</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">safety</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">may fall</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">the acceptance rule decides which objective is protected</text></svg>",
    "captionEn": "The rule decides whether safety can be traded for capability.",
    "captionKn": "ನಿಯಮ safety ಅನ್ನು capability ಗಾಗಿ ವಿನಿಮಯ ಮಾಡಬಹುದೇ ಎಂದು ನಿರ್ಧರಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Acceptance rules compared",
    "headingKn": "ಸ್ವೀಕಾರ ನಿಯಮಗಳ ಹೋಲಿಕೆ",
    "headers": [
     "Rule",
     "Accepts a modification when"
    ],
    "rows": [
     [
      "capability only",
      "capability rises"
     ],
     [
      "weighted sum",
      "w x capability + (1 - w) x safety rises"
     ],
     [
      "safety floor",
      "capability rises and safety does not fall"
     ],
     [
      "floor with tolerance",
      "capability rises and safety drops by at most d"
     ],
     [
      "absolute floor",
      "as above and safety stays at or above 4.0"
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
    "filename": "bs_2.py",
    "headingEn": "Proposals and the acceptance rules",
    "headingKn": "ಪ್ರಸ್ತಾವನೆಗಳು ಮತ್ತು ಸ್ವೀಕಾರ ನಿಯಮಗಳು",
    "descEn": "propose draws a capability change and a safety change with a built-in tradeoff, the accept functions are the rules and run applies one rule for 300 proposals.",
    "descKn": "propose ಅಂತರ್ನಿರ್ಮಿತ ವಿನಿಮಯದೊಂದಿಗೆ capability ಬದಲಾವಣೆ ಮತ್ತು safety ಬದಲಾವಣೆ ಎಳೆಯುತ್ತದೆ, accept ಕಾರ್ಯಗಳು ನಿಯಮಗಳು ಮತ್ತು run 300 ಪ್ರಸ್ತಾವನೆಗಳಿಗೆ ಒಂದು ನಿಯಮ ಅನ್ವಯಿಸುತ್ತದೆ.",
    "code": "def propose(r, cap, safe):\n    \"\"\"A modification changes capability and safety with a built-in tradeoff: gains in capability tend to cost safety.\"\"\"\n    dc = r.gauss(0.5, 1.0)\n    ds = r.gauss(-0.4 * dc, 0.8)\n    return cap + dc, safe + ds\n\n\ndef accept_capability(cap, safe, ncap, nsafe):\n    return ncap > cap\n\n\ndef accept_weighted(cap, safe, ncap, nsafe, w=0.5):\n    return w * ncap + (1 - w) * nsafe > w * cap + (1 - w) * safe\n\n\ndef accept_floor(cap, safe, ncap, nsafe, floor_drop=0.0, abs_floor=0.0):\n    return ncap > cap and nsafe >= safe - floor_drop and nsafe >= abs_floor\n\n\ndef run(seed, rule, steps=300):\n    r = random.Random(seed)\n    cap, safe = 0.0, 5.0\n    taken = 0\n    for _ in range(steps):\n        nc, ns = propose(r, cap, safe)\n        if rule(cap, safe, nc, ns):\n            cap, safe = nc, ns\n            taken += 1\n    return cap, safe, taken"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "bs_2.py",
    "headingEn": "main(): experiments",
    "headingKn": "main(): ಪ್ರಯೋಗಗಳು",
    "descEn": "main() compares the three rules, sweeps the weight, sweeps per-step tolerances and adds an absolute floor.",
    "descKn": "main() ಮೂರು ನಿಯಮ ಹೋಲಿಸಿ, ತೂಕ ಸ್ವೀಪ್ ಮಾಡಿ, ಪ್ರತಿ-ಹಂತ ಸಹನೆ ಸ್ವೀಪ್ ಮಾಡಿ ಮತ್ತು ಸಂಪೂರ್ಣ ಮಿತಿ ಸೇರಿಸುತ್ತದೆ.",
    "code": "def main():\n    section(\"1. Genuinely measuring: three acceptance rules (300 proposals, seeds 1 to 30, start capability 0.0 and safety 5.0)\")\n    rules = {\"capability only\": accept_capability, \"weighted sum (0.5/0.5)\": accept_weighted, \"capability gain, safety may not drop\": accept_floor}\n    for name, rule in rules.items():\n        res = [run(s, rule) for s in range(1, 31)]\n        caps, safes, taken = [x[0] for x in res], [x[1] for x in res], [x[2] for x in res]\n        print(f\"{name:38}: mean capability {mean(caps):7.1f} | mean safety {mean(safes):7.1f} | worst safety {min(safes):7.1f} | mean modifications accepted {mean(taken):5.1f}\")\n    print(\"accepting any capability gain buys the most capability and lets safety fall furthest, the weighted sum is in between and can trade a large safety loss for a large capability gain, and requiring that safety never drops keeps safety at or above its start while accepting fewer modifications; the tradeoff built into the proposals is invented\")\n\n    section(\"2. Genuinely measuring: the weight in a weighted sum\")\n    for w in (0.2, 0.5, 0.8):\n        res = [run(s, lambda c, sf, nc, ns, w=w: accept_weighted(c, sf, nc, ns, w)) for s in range(1, 31)]\n        print(f\"weight on capability {w:.1f}: mean capability {mean(x[0] for x in res):7.1f} | mean safety {mean(x[1] for x in res):7.1f}\")\n    print(\"shifting the weight moves the outcome along the tradeoff, and a weighted sum has no point at which it refuses a modification outright, so any safety loss can be bought back with enough capability; the weights are not derived from anything\")\n\n    section(\"3. Genuinely measuring: a floor that allows small drops\")\n    for drop in (0.0, 0.2, 0.5, 1.0):\n        res = [run(s, lambda c, sf, nc, ns, d=drop: accept_floor(c, sf, nc, ns, floor_drop=d)) for s in range(1, 31)]\n        print(f\"largest allowed single-step safety drop {drop:.1f}: mean capability {mean(x[0] for x in res):7.1f} | mean final safety {mean(x[1] for x in res):7.1f}\")\n    print(\"letting each step lose a little safety compounds over many steps, so a per-step tolerance that looks small can add up to a large total loss; an absolute floor on the safety score is a different rule and is tried next\")\n\n    section(\"4. Genuinely measuring: an absolute safety floor of 4.0\")\n    res = [run(s, lambda c, sf, nc, ns: accept_floor(c, sf, nc, ns, floor_drop=1.0, abs_floor=4.0)) for s in range(1, 31)]\n    print(f\"per-step drop up to 1.0 but safety never below 4.0: mean capability {mean(x[0] for x in res):7.1f} | min final safety {min(x[1] for x in res):.2f} | mean accepted {mean(x[2] for x in res):.1f}\")\n    print(\"with an absolute floor the loop can still spend safety above the floor but cannot cross it, so final safety is bounded below by construction; the floor value is invented and picking it for a real system is a hard judgment\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely measuring: three acceptance rules (300 proposals, seeds 1 to 30, start capability 0.0 and safety 5.0) ---\ncapability only                       : mean capability   212.5 | mean safety   -76.4 | worst safety   -97.5 | mean modifications accepted 207.8\nweighted sum (0.5/0.5)                : mean capability   165.4 | mean safety    14.6 | worst safety    -3.8 | mean modifications accepted 187.9\ncapability gain, safety may not drop  : mean capability    52.2 | mean safety    41.6 | worst safety    31.0 | mean modifications accepted  67.7\naccepting any capability gain buys the most capability and lets safety fall furthest, the weighted sum is in between and can trade a large safety loss for a large capability gain, and requiring that safety never drops keeps safety at or above its start while accepting fewer modifications; the tradeoff built into the proposals is invented\n\n--- 2. Genuinely measuring: the weight in a weighted sum ---\nweight on capability 0.2: mean capability    49.6 | mean safety    80.1\nweight on capability 0.5: mean capability   165.4 | mean safety    14.6\nweight on capability 0.8: mean capability   209.9 | mean safety   -56.6\nshifting the weight moves the outcome along the tradeoff, and a weighted sum has no point at which it refuses a modification outright, so any safety loss can be bought back with enough capability; the weights are not derived from anything\n\n--- 3. Genuinely measuring: a floor that allows small drops ---\nlargest allowed single-step safety drop 0.0: mean capability    52.2 | mean final safety    41.6\nlargest allowed single-step safety drop 0.2: mean capability    68.1 | mean final safety    39.9\nlargest allowed single-step safety drop 0.5: mean capability    97.9 | mean final safety    29.1\nlargest allowed single-step safety drop 1.0: mean capability   134.2 | mean final safety     3.1\nletting each step lose a little safety compounds over many steps, so a per-step tolerance that looks small can add up to a large total loss; an absolute floor on the safety score is a different rule and is tried next\n\n--- 4. Genuinely measuring: an absolute safety floor of 4.0 ---\nper-step drop up to 1.0 but safety never below 4.0: mean capability   127.3 | min final safety 4.15 | mean accepted 142.4\nwith an absolute floor the loop can still spend safety above the floor but cannot cross it, so final safety is bounded below by construction; the floor value is invented and picking it for a real system is a hard judgment"
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
    "headingEn": "Genuinely Found: The Three Rules and the Weight",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಮೂರು ನಿಯಮಗಳು ಮತ್ತು ತೂಕ",
    "bodyEn": "Section 1: capability only gave mean capability 212.5 and mean safety -76.4 (worst -97.5) with 207.8 modifications accepted; the weighted sum gave 165.4 and 14.6 (worst -3.8) with 187.9 accepted; and requiring safety not to drop gave 52.2 and 41.6 (worst 31.0) with 67.7 accepted. Section 2: weights on capability of 0.2, 0.5 and 0.8 gave capability 49.6, 165.4 and 209.9 and safety 80.1, 14.6 and -56.6.",
    "bodyKn": "ವಿಭಾಗ 1: capability ಮಾತ್ರ ಸರಾಸರಿ capability 212.5 ಮತ್ತು ಸರಾಸರಿ safety -76.4 (ಕೆಟ್ಟದು -97.5) ಮತ್ತು 207.8 ಮಾರ್ಪಾಡು ಸ್ವೀಕಾರ ನೀಡಿತು; ತೂಕದ ಮೊತ್ತ 165.4 ಮತ್ತು 14.6 (ಕೆಟ್ಟದು -3.8) ಮತ್ತು 187.9 ಸ್ವೀಕಾರ; ಮತ್ತು safety ಇಳಿಯಬಾರದು ಎಂಬ ಬೇಡಿಕೆ 52.2 ಮತ್ತು 41.6 (ಕೆಟ್ಟದು 31.0) ಮತ್ತು 67.7 ಸ್ವೀಕಾರ ನೀಡಿತು. ವಿಭಾಗ 2: capability ಮೇಲಿನ ತೂಕ 0.2, 0.5 ಮತ್ತು 0.8 capability 49.6, 165.4 ಮತ್ತು 209.9 ಮತ್ತು safety 80.1, 14.6 ಮತ್ತು -56.6 ನೀಡಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Tolerances and an Absolute Floor",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಸಹನೆಗಳು ಮತ್ತು ಸಂಪೂರ್ಣ ಮಿತಿ",
    "bodyEn": "Section 3: allowing a single-step safety drop of 0.0, 0.2, 0.5 and 1.0 gave capability 52.2, 68.1, 97.9 and 134.2 and final safety 41.6, 39.9, 29.1 and 3.1. Section 4: a per-step drop of up to 1.0 with safety never below 4.0 gave capability 127.3, a minimum final safety of 4.15 and 142.4 modifications accepted.",
    "bodyKn": "ವಿಭಾಗ 3: ಒಂದು-ಹಂತ safety ಇಳಿಕೆ 0.0, 0.2, 0.5 ಮತ್ತು 1.0 ಅನುಮತಿಸಿದಾಗ capability 52.2, 68.1, 97.9 ಮತ್ತು 134.2 ಮತ್ತು ಅಂತಿಮ safety 41.6, 39.9, 29.1 ಮತ್ತು 3.1. ವಿಭಾಗ 4: 1.0 ವರೆಗೆ ಪ್ರತಿ-ಹಂತ ಇಳಿಕೆ ಮತ್ತು safety ಎಂದಿಗೂ 4.0 ಕ್ಕಿಂತ ಕೆಳಗಿಲ್ಲದಿದ್ದರೆ capability 127.3, ಕನಿಷ್ಠ ಅಂತಿಮ safety 4.15 ಮತ್ತು 142.4 ಮಾರ್ಪಾಡು ಸ್ವೀಕಾರ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A rule that only watches capability will happily spend safety, and a weighted sum can always be satisfied by trading enough of one for the other, so the guarantee comes from a floor, not from a score.",
    "bodyKn": "capability ಮಾತ್ರ ನೋಡುವ ನಿಯಮ safety ಅನ್ನು ಖುಷಿಯಿಂದ ಖರ್ಚು ಮಾಡುತ್ತದೆ, ಮತ್ತು ತೂಕದ ಮೊತ್ತವನ್ನು ಒಂದನ್ನು ಸಾಕಷ್ಟು ಇನ್ನೊಂದಕ್ಕೆ ವಿನಿಮಯ ಮಾಡಿ ಯಾವಾಗಲೂ ತೃಪ್ತಿಪಡಿಸಬಹುದು, ಆದ್ದರಿಂದ ಖಾತರಿ ಅಂಕದಿಂದ ಅಲ್ಲ, ಮಿತಿಯಿಂದ ಬರುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"a small per-step safety tolerance is harmless.\" Allowing a drop of 1.0 per step left a mean final safety of 3.1 against 41.6 with no drops.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಸಣ್ಣ ಪ್ರತಿ-ಹಂತ safety ಸಹನೆ ಹಾನಿರಹಿತ.\" ಪ್ರತಿ ಹಂತಕ್ಕೆ 1.0 ಇಳಿಕೆ ಅನುಮತಿಸಿದ್ದು ಇಳಿಕೆ ಇಲ್ಲದಾಗಿನ 41.6 ವಿರುದ್ಧ ಸರಾಸರಿ ಅಂತಿಮ safety 3.1 ಬಿಟ್ಟಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Weighted sum: one score mixing objectives. Safety floor: a level safety may not go below. Tolerance: how much a single step may lose. Pareto: no objective worse and one better.",
    "bodyKn": "Weighted sum: ಉದ್ದೇಶಗಳನ್ನು ಬೆರೆಸಿದ ಒಂದು ಅಂಕ. Safety floor: safety ಕೆಳಗೆ ಹೋಗಬಾರದ ಮಟ್ಟ. Tolerance: ಒಂದು ಹಂತ ಎಷ್ಟು ಕಳೆದುಕೊಳ್ಳಬಹುದು. Pareto: ಯಾವ ಉದ್ದೇಶವೂ ಕೆಟ್ಟದಾಗದೆ ಒಂದು ಉತ್ತಮ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) Capability-only acceptance ended with mean safety -76.4. 2) The weighted sum left a worst safety of -3.8. 3) The no-drop rule held worst safety at 31.0. 4) A drop of 1.0 per step compounded to mean safety 3.1. 5) An absolute floor held minimum safety at 4.15.",
    "bodyKn": "1) capability-ಮಾತ್ರ ಸ್ವೀಕಾರ ಸರಾಸರಿ safety -76.4 ನಲ್ಲಿ ಕೊನೆಗೊಂಡಿತು. 2) ತೂಕದ ಮೊತ್ತ ಕೆಟ್ಟ safety -3.8 ಬಿಟ್ಟಿತು. 3) ಇಳಿಕೆ-ಇಲ್ಲದ ನಿಯಮ ಕೆಟ್ಟ safety ಅನ್ನು 31.0 ರಲ್ಲಿ ಹಿಡಿಯಿತು. 4) ಪ್ರತಿ ಹಂತಕ್ಕೆ 1.0 ಇಳಿಕೆ ಸಂಯೋಜಿತವಾಗಿ ಸರಾಸರಿ safety 3.1 ಆಯಿತು. 5) ಸಂಪೂರ್ಣ ಮಿತಿ ಕನಿಷ್ಠ safety ಅನ್ನು 4.15 ರಲ್ಲಿ ಹಿಡಿಯಿತು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What mean safety did capability-only acceptance end with?",
      "qKn": "capability-ಮಾತ್ರ ಸ್ವೀಕಾರ ಯಾವ ಸರಾಸರಿ safety ನಲ್ಲಿ ಕೊನೆಗೊಂಡಿತು?",
      "opts": [
       "-76.4",
       "41.6",
       "14.6",
       "3.1"
      ],
      "optsKn": [
       "-76.4",
       "41.6",
       "14.6",
       "3.1"
      ],
      "correct": 0
     },
     {
      "q": "What worst-case safety did the no-drop rule hold?",
      "qKn": "ಇಳಿಕೆ-ಇಲ್ಲದ ನಿಯಮ ಯಾವ ಕೆಟ್ಟ-ಸಂದರ್ಭ safety ಹಿಡಿಯಿತು?",
      "opts": [
       "31.0",
       "-3.8",
       "-97.5",
       "4.15"
      ],
      "optsKn": [
       "31.0",
       "-3.8",
       "-97.5",
       "4.15"
      ],
      "correct": 0
     },
     {
      "q": "What mean final safety resulted from allowing a drop of 1.0 per step?",
      "qKn": "ಪ್ರತಿ ಹಂತಕ್ಕೆ 1.0 ಇಳಿಕೆ ಅನುಮತಿಸಿದಾಗ ಯಾವ ಸರಾಸರಿ ಅಂತಿಮ safety ಫಲಿತಾಂಶವಾಯಿತು?",
      "opts": [
       "3.1",
       "41.6",
       "29.1",
       "39.9"
      ],
      "optsKn": [
       "3.1",
       "41.6",
       "29.1",
       "39.9"
      ],
      "correct": 0
     },
     {
      "q": "What minimum final safety did the absolute floor of 4.0 give?",
      "qKn": "ಸಂಪೂರ್ಣ ಮಿತಿ 4.0 ಯಾವ ಕನಿಷ್ಠ ಅಂತಿಮ safety ನೀಡಿತು?",
      "opts": [
       "4.15",
       "3.1",
       "0.0",
       "31.0"
      ],
      "optsKn": [
       "4.15",
       "3.1",
       "0.0",
       "31.0"
      ],
      "correct": 0
     },
     {
      "q": "Why can a weighted sum not guarantee safety?",
      "qKn": "ತೂಕದ ಮೊತ್ತ safety ಅನ್ನು ಏಕೆ ಖಾತರಿಪಡಿಸಲಾರದು?",
      "opts": [
       "Enough capability gain can buy back any safety loss",
       "It rejects all changes",
       "It ignores capability",
       "It uses a floor"
      ],
      "optsKn": [
       "ಸಾಕಷ್ಟು capability ಲಾಭ ಯಾವುದೇ safety ನಷ್ಟವನ್ನು ಮರಳಿ ಖರೀದಿಸಬಹುದು",
       "ಅದು ಎಲ್ಲಾ ಬದಲಾವಣೆ ತಿರಸ್ಕರಿಸುತ್ತದೆ",
       "ಅದು capability ನಿರ್ಲಕ್ಷಿಸುತ್ತದೆ",
       "ಅದು ಮಿತಿ ಬಳಸುತ್ತದೆ"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
