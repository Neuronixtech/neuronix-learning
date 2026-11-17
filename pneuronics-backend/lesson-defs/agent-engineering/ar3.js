module.exports = {
 "phaseId": "6a369d6366020ed05b32158c",
 "moduleId": "6a369d6366020ed05b32159e",
 "order": 2,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Automated Alignment Research (Part 3 of 3) — Contamination and Blind Spots",
 "titleKn": "ಸ್ವಯಂಚಾಲಿತ Alignment ಸಂಶೋಧನೆ (ಭಾಗ 3 / 3) — ಕಲುಷಿತ ಮತ್ತು Blind Spots",
 "desc": "Measure how errors spread through dependent research and what re-checks and reviewer panels can and cannot catch.",
 "descKn": "ಅವಲಂಬಿತ ಸಂಶೋಧನೆಯಲ್ಲಿ ದೋಷಗಳು ಹೇಗೆ ಹರಡುತ್ತವೆ ಮತ್ತು ಮರು-ಪರಿಶೀಲನೆ ಹಾಗೂ ವಿಮರ್ಶಕ ಪ್ಯಾನೆಲ್‌ಗಳು ಏನನ್ನು ಹಿಡಿಯಬಲ್ಲವು ಮತ್ತು ಹಿಡಿಯಲಾರವು ಅಳೆಯಿರಿ.",
 "objectives": [
  "Propagate taint through a graph.",
  "Compare early and late errors.",
  "Add independent re-checks.",
  "Model a shared blind spot.",
  "Report invented parameters honestly."
 ],
 "objectivesKn": [
  "ಗ್ರಾಫ್ ಮೂಲಕ ಕಲುಷಿತ ಹರಡಿಸಿ.",
  "ಆರಂಭಿಕ ಮತ್ತು ತಡವಾದ ದೋಷ ಹೋಲಿಸಿ.",
  "ಸ್ವತಂತ್ರ ಮರು-ಪರಿಶೀಲನೆ ಸೇರಿಸಿ.",
  "ಹಂಚಿದ blind spot ಮಾದರಿ ಮಾಡಿ.",
  "ಕಲ್ಪಿತ ನಿಯತಾಂಕಗಳನ್ನು ಪ್ರಾಮಾಣಿಕವಾಗಿ ವರದಿ ಮಾಡಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Automated Alignment Research (Part 3 of 3)",
    "textKn": "ಸ್ವಯಂಚಾಲಿತ Alignment ಸಂಶೋಧನೆ (ಭಾಗ 3 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 3 of 3: dependency contamination in a random research graph, the effect of where a bad finding sits, independent re-checks before building on a finding and reviewer panels with a shared blind spot. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind automated alignment research (weak-to-strong supervision, hash-chained research journals, role-based authorization, provenance checks, dependency contamination and reviewer blind spots), not the real software, and the student is a threshold fitted on random numbers, the agents are scripted functions, the journal and policy live in memory and the research graphs are random, and no language model is involved, so no real LLM behaviour is measured. The original code/main.py was not supplied, so the labs are our own implementation. Results the lesson quotes about published automated alignment research are cited, not reproduced; the toy student, the journal, the policy dictionary and every error rate in the labs are invented to show the mechanics. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 3ನೆಯದು: ಯಾದೃಚ್ಛಿಕ ಸಂಶೋಧನಾ ಗ್ರಾಫ್‌ನಲ್ಲಿ ಅವಲಂಬನೆ ಕಲುಷಿತ, ಕೆಟ್ಟ ಸಂಶೋಧನೆ ಎಲ್ಲಿದೆ ಎಂಬುದರ ಪರಿಣಾಮ, ಸಂಶೋಧನೆಯ ಮೇಲೆ ನಿರ್ಮಿಸುವ ಮೊದಲು ಸ್ವತಂತ್ರ ಮರು-ಪರಿಶೀಲನೆ ಮತ್ತು ಹಂಚಿದ blind spot ಇರುವ ವಿಮರ್ಶಕ ಪ್ಯಾನೆಲ್‌ಗಳು. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು ಸ್ವಯಂಚಾಲಿತ alignment ಸಂಶೋಧನೆ (weak-to-strong ಮೇಲ್ವಿಚಾರಣೆ, ಹ್ಯಾಶ್-ಸರಪಳಿ ಸಂಶೋಧನಾ ಜರ್ನಲ್‌ಗಳು, ಪಾತ್ರ-ಆಧಾರಿತ ಅಧಿಕಾರ, provenance ಪರಿಶೀಲನೆ, ಅವಲಂಬನೆ ಕಲುಷಿತ ಮತ್ತು ವಿಮರ್ಶಕ blind spots) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ವಿದ್ಯಾರ್ಥಿ ಯಾದೃಚ್ಛಿಕ ಸಂಖ್ಯೆಗಳ ಮೇಲೆ ಹೊಂದಿಸಿದ ಮಿತಿ, agents scripted ಕಾರ್ಯಗಳು, ಜರ್ನಲ್ ಮತ್ತು ನೀತಿ ಮೆಮೊರಿಯಲ್ಲಿವೆ ಮತ್ತು ಸಂಶೋಧನಾ ಗ್ರಾಫ್‌ಗಳು ಯಾದೃಚ್ಛಿಕ, ಮತ್ತು ಭಾಷಾ ಮಾದರಿ ಇಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ code/main.py ಒದಗಿಸಿರಲಿಲ್ಲ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ನಮ್ಮದೇ ಅನುಷ್ಠಾನ. ಪ್ರಕಟಿತ ಸ್ವಯಂಚಾಲಿತ alignment ಸಂಶೋಧನೆಯ ಬಗ್ಗೆ lesson ಉಲ್ಲೇಖಿಸುವ ಫಲಿತಾಂಶಗಳು ಉಲ್ಲೇಖಿತ, ಪುನರುತ್ಪಾದಿಸಲಾಗಿಲ್ಲ; ಆಟಿಕೆ ವಿದ್ಯಾರ್ಥಿ, ಜರ್ನಲ್, ನೀತಿ ನಿಘಂಟು ಮತ್ತು ಲ್ಯಾಬ್‌ಗಳ ಪ್ರತಿ ದೋಷ ದರ ಯಂತ್ರಶಾಸ್ತ್ರ ತೋರಿಸಲು ಕಲ್ಪಿತ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "One Mistake, Many Descendants",
    "textKn": "ಒಂದು ತಪ್ಪು, ಹಲವು ವಂಶಸ್ಥರು",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "How Far Errors Travel",
    "headingKn": "ತಪ್ಪುಗಳು ಎಷ್ಟು ದೂರ ಪ್ರಯಾಣಿಸುತ್ತವೆ",
    "bodyEn": "Automated researchers build on each other work, so an early mistake can spread. This part generates random graphs of 200 findings in which each finding depends on up to three earlier ones, seeds a few bad roots, propagates the taint, adds independent re-checks that remove a bad finding before others build on it, and measures reviewer panels in which every reviewer misses the same share of errors. The graphs and rates are invented.",
    "bodyKn": "ಸ್ವಯಂಚಾಲಿತ ಸಂಶೋಧಕರು ಪರಸ್ಪರರ ಕೆಲಸದ ಮೇಲೆ ನಿರ್ಮಿಸುತ್ತಾರೆ, ಆದ್ದರಿಂದ ಆರಂಭಿಕ ತಪ್ಪು ಹರಡಬಹುದು. ಈ ಭಾಗ ಪ್ರತಿ ಸಂಶೋಧನೆ ಮೂರು ಹಿಂದಿನವುಗಳ ಮೇಲೆ ಅವಲಂಬಿತವಾದ 200 ಸಂಶೋಧನೆಗಳ ಯಾದೃಚ್ಛಿಕ ಗ್ರಾಫ್‌ಗಳನ್ನು ರಚಿಸುತ್ತದೆ, ಕೆಲವು ಕೆಟ್ಟ ಬೇರುಗಳನ್ನು ಬಿತ್ತುತ್ತದೆ, ಕಲುಷಿತ ಹರಡಿಸುತ್ತದೆ, ಇತರರು ನಿರ್ಮಿಸುವ ಮೊದಲು ಕೆಟ್ಟ ಸಂಶೋಧನೆಯನ್ನು ತೆಗೆಯುವ ಸ್ವತಂತ್ರ ಮರು-ಪರಿಶೀಲನೆ ಸೇರಿಸುತ್ತದೆ ಮತ್ತು ಪ್ರತಿ ವಿಮರ್ಶಕ ಒಂದೇ ಪಾಲು ದೋಷಗಳನ್ನು ತಪ್ಪಿಸುವ ವಿಮರ್ಶಕ ಪ್ಯಾನೆಲ್‌ಗಳನ್ನು ಅಳೆಯುತ್ತದೆ. ಗ್ರಾಫ್‌ಗಳು ಮತ್ತು ದರಗಳು ಕಲ್ಪಿತ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Contamination in a Research Graph",
    "headingKn": "ಸಂಶೋಧನಾ ಗ್ರಾಫ್‌ನಲ್ಲಿ ಕಲುಷಿತ",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">errors spread down the dependency graph</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">bad finding</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">early root</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">builds on it</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">children</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">re-check</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">catches some</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">blind spot</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">shared by all</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">errors spread down the dependency graph</text></svg>",
    "captionEn": "One bad finding taints everything built on it.",
    "captionKn": "ಒಂದು ಕೆಟ್ಟ ಸಂಶೋಧನೆ ಅದರ ಮೇಲೆ ನಿರ್ಮಿಸಿದ ಎಲ್ಲವನ್ನೂ ಕಲುಷಿತಗೊಳಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Setup of the experiments",
    "headingKn": "ಪ್ರಯೋಗಗಳ ಸೆಟಪ್",
    "headers": [
     "Item",
     "Lab setting"
    ],
    "rows": [
     [
      "graph",
      "200 findings, 1 to 3 earlier parents each, 40 seeds"
     ],
     [
      "bad roots",
      "1, 3 or 5 among the first 20"
     ],
     [
      "re-check catch probability",
      "0.0, 0.3, 0.6, 0.9"
     ],
     [
      "reviewer catch rate",
      "0.7 each"
     ],
     [
      "shared blind spot",
      "0.0 or 0.2"
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
    "filename": "ar_3.py",
    "headingEn": "Graph, taint propagation, checks and panels",
    "headingKn": "ಗ್ರಾಫ್, ಕಲುಷಿತ ಪ್ರಸರಣ, ಪರಿಶೀಲನೆಗಳು ಮತ್ತು ಪ್ಯಾನೆಲ್‌ಗಳು",
    "descEn": "make_graph builds the dependency graph, tainted_set propagates bad roots, tainted_with_checks removes caught findings and reviewer_majority models a panel with a shared blind spot.",
    "descKn": "make_graph ಅವಲಂಬನೆ ಗ್ರಾಫ್ ನಿರ್ಮಿಸುತ್ತದೆ, tainted_set ಕೆಟ್ಟ ಬೇರುಗಳನ್ನು ಹರಡಿಸುತ್ತದೆ, tainted_with_checks ಹಿಡಿದ ಸಂಶೋಧನೆಗಳನ್ನು ತೆಗೆಯುತ್ತದೆ ಮತ್ತು reviewer_majority ಹಂಚಿದ blind spot ಇರುವ ಪ್ಯಾನೆಲ್ ಮಾದರಿ ಮಾಡುತ್ತದೆ.",
    "code": "def make_graph(r, n, max_parents=3):\n    \"\"\"Finding i depends on up to max_parents earlier findings (finding 0 has none).\"\"\"\n    return {i: sorted(r.sample(range(i), min(i, r.randint(1, max_parents)))) if i else [] for i in range(n)}\n\n\ndef tainted_set(graph, bad_roots):\n    tainted = set(bad_roots)\n    for i in range(len(graph)):\n        if i not in tainted and any(p in tainted for p in graph[i]):\n            tainted.add(i)\n    return tainted\n\n\ndef tainted_with_checks(r, graph, bad_roots, catch):\n    \"\"\"Each tainted finding is independently re-checked with probability catch; a caught one is removed before anything builds on it.\"\"\"\n    tainted, removed = set(), set()\n    for i in range(len(graph)):\n        bad = i in bad_roots or any(p in tainted for p in graph[i])\n        if bad:\n            if r.random() < catch:\n                removed.add(i)\n            else:\n                tainted.add(i)\n    return tainted, removed\n\n\ndef reviewer_majority(r, truth_bad, n_reviewers, p_catch, shared_blind):\n    \"\"\"A bad finding is caught by a reviewer with probability p_catch, unless it falls in a shared blind spot (probability shared_blind) that every reviewer misses.\"\"\"\n    if not truth_bad:\n        return False\n    if r.random() < shared_blind:\n        return False\n    votes = sum(r.random() < p_catch for _ in range(n_reviewers))\n    return votes > n_reviewers / 2"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "ar_3.py",
    "headingEn": "main(): experiments",
    "headingKn": "main(): ಪ್ರಯೋಗಗಳು",
    "descEn": "main() measures contamination by number and position of bad roots, adds re-checks and sweeps reviewer panels with a blind spot.",
    "descKn": "main() ಕೆಟ್ಟ ಬೇರುಗಳ ಸಂಖ್ಯೆ ಮತ್ತು ಸ್ಥಾನದಿಂದ ಕಲುಷಿತ ಅಳೆದು, ಮರು-ಪರಿಶೀಲನೆ ಸೇರಿಸಿ ಮತ್ತು blind spot ಇರುವ ವಿಮರ್ಶಕ ಪ್ಯಾನೆಲ್ ಸ್ವೀಪ್ ಮಾಡುತ್ತದೆ.",
    "code": "def main():\n    section(\"1. Genuinely measuring: how far bad roots spread (200 findings, up to 3 parents, 40 graphs)\")\n    for n_bad in (1, 3, 5):\n        shares = []\n        for seed in range(1, 41):\n            r = random.Random(seed)\n            g = make_graph(r, 200)\n            bad = r.sample(range(0, 20), n_bad)\n            shares.append(len(tainted_set(g, bad)) / 200)\n        print(f\"{n_bad} bad finding(s) among the first 20: mean share of all 200 findings contaminated {mean(shares):.3f} | worst graph {max(shares):.3f}\")\n    print(\"a handful of bad early findings contaminates a large share of everything built later, because each new finding depends on several earlier ones and one tainted parent is enough; the random graph is an invented stand-in for a research literature\")\n\n    section(\"2. Genuinely measuring: where the bad finding sits matters (1 bad root, 40 graphs)\")\n    for lo, hi, name in ((0, 10, \"very early\"), (90, 100, \"middle\"), (180, 190, \"late\")):\n        shares = []\n        for seed in range(1, 41):\n            r = random.Random(seed)\n            g = make_graph(r, 200)\n            shares.append(len(tainted_set(g, [r.randrange(lo, hi)])) / 200)\n        print(f\"{name:10} (index {lo}-{hi}): mean contaminated share {mean(shares):.3f}\")\n    print(\"an early error has more later findings that can depend on it, which is why verifying foundations is worth more than verifying the latest result; with only one bad root the numbers are averages over forty random graphs\")\n\n    section(\"3. Genuinely measuring: independent re-checks before building on a finding (3 bad roots, 40 graphs)\")\n    for catch in (0.0, 0.3, 0.6, 0.9):\n        shares, rem = [], []\n        for seed in range(1, 41):\n            r = random.Random(seed)\n            g = make_graph(r, 200)\n            bad = r.sample(range(0, 20), 3)\n            t, removed = tainted_with_checks(r, g, bad, catch)\n            shares.append(len(t) / 200)\n            rem.append(len(removed))\n        print(f\"catch probability {catch:.1f}: contaminated share {mean(shares):.3f} | findings removed {mean(rem):.1f}\")\n    print(\"an independent check that catches a bad finding before others build on it cuts contamination sharply, and removing a bad finding also removes the work that would have rested on it; the catch probability is an invented number and assumes the re-check is independent of the original mistake\")\n\n    section(\"4. Genuinely measuring: reviewer panels with a shared blind spot (20000 bad findings)\")\n    r = random.Random(7)\n    for n_rev, blind in ((1, 0.0), (5, 0.0), (5, 0.2), (15, 0.2)):\n        caught = mean(reviewer_majority(r, True, n_rev, 0.7, blind) for _ in range(20000))\n        print(f\"{n_rev:2d} reviewer(s), shared blind spot {blind:.1f}: bad findings caught {caught:.3f}\")\n    print(\"adding reviewers raises the catch rate toward the ceiling set by the shared blind spot and no further, because errors that every reviewer shares cannot be voted away; the blind-spot share and per-reviewer catch rate are invented\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely measuring: how far bad roots spread (200 findings, up to 3 parents, 40 graphs) ---\n1 bad finding(s) among the first 20: mean share of all 200 findings contaminated 0.568 | worst graph 1.000\n3 bad finding(s) among the first 20: mean share of all 200 findings contaminated 0.823 | worst graph 1.000\n5 bad finding(s) among the first 20: mean share of all 200 findings contaminated 0.942 | worst graph 1.000\na handful of bad early findings contaminates a large share of everything built later, because each new finding depends on several earlier ones and one tainted parent is enough; the random graph is an invented stand-in for a research literature\n\n--- 2. Genuinely measuring: where the bad finding sits matters (1 bad root, 40 graphs) ---\nvery early (index 0-10): mean contaminated share 0.774\nmiddle     (index 90-100): mean contaminated share 0.025\nlate       (index 180-190): mean contaminated share 0.006\nan early error has more later findings that can depend on it, which is why verifying foundations is worth more than verifying the latest result; with only one bad root the numbers are averages over forty random graphs\n\n--- 3. Genuinely measuring: independent re-checks before building on a finding (3 bad roots, 40 graphs) ---\ncatch probability 0.0: contaminated share 0.823 | findings removed 0.0\ncatch probability 0.3: contaminated share 0.323 | findings removed 28.7\ncatch probability 0.6: contaminated share 0.057 | findings removed 17.9\ncatch probability 0.9: contaminated share 0.002 | findings removed 4.1\nan independent check that catches a bad finding before others build on it cuts contamination sharply, and removing a bad finding also removes the work that would have rested on it; the catch probability is an invented number and assumes the re-check is independent of the original mistake\n\n--- 4. Genuinely measuring: reviewer panels with a shared blind spot (20000 bad findings) ---\n 1 reviewer(s), shared blind spot 0.0: bad findings caught 0.702\n 5 reviewer(s), shared blind spot 0.0: bad findings caught 0.836\n 5 reviewer(s), shared blind spot 0.2: bad findings caught 0.664\n15 reviewer(s), shared blind spot 0.2: bad findings caught 0.766\nadding reviewers raises the catch rate toward the ceiling set by the shared blind spot and no further, because errors that every reviewer shares cannot be voted away; the blind-spot share and per-reviewer catch rate are invented"
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
    "headingEn": "Experiment 1: How far bad roots spread (200 findings, up to 3 parents, 40 graphs)",
    "headingKn": "ಪ್ರಯೋಗ 1: How far bad roots spread (200 findings, up to 3 parents, 40 graphs)",
    "bodyEn": "What it ran: How far bad roots spread (200 findings, up to 3 parents, 40 graphs). What the lab concluded: a handful of bad early findings contaminates a large share of everything built later, because each new finding depends on several earlier ones and one tainted parent is enough; the random graph is an invented stand-in for a research literature",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: How far bad roots spread (200 findings, up to 3 parents, 40 graphs). ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a handful of bad early findings contaminates a large share of everything built later, because each new finding depends on several earlier ones and one tainted parent is enough; the random graph is an invented stand-in for a research literature"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. Genuinely measuring: how far bad roots spread (200 findings, up to 3 parents, 40 graphs) ---\n1 bad finding(s) among the first 20: mean share of all 200 findings contaminated 0.568 | worst graph 1.000\n3 bad finding(s) among the first 20: mean share of all 200 findings contaminated 0.823 | worst graph 1.000\n5 bad finding(s) among the first 20: mean share of all 200 findings contaminated 0.942 | worst graph 1.000"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: Where the bad finding sits matters (1 bad root, 40 graphs)",
    "headingKn": "ಪ್ರಯೋಗ 2: Where the bad finding sits matters (1 bad root, 40 graphs)",
    "bodyEn": "What it ran: Where the bad finding sits matters (1 bad root, 40 graphs). What the lab concluded: an early error has more later findings that can depend on it, which is why verifying foundations is worth more than verifying the latest result; with only one bad root the numbers are averages over forty random graphs",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Where the bad finding sits matters (1 bad root, 40 graphs). ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): an early error has more later findings that can depend on it, which is why verifying foundations is worth more than verifying the latest result; with only one bad root the numbers are averages over forty random graphs"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely measuring: where the bad finding sits matters (1 bad root, 40 graphs) ---\nvery early (index 0-10): mean contaminated share 0.774\nmiddle     (index 90-100): mean contaminated share 0.025\nlate       (index 180-190): mean contaminated share 0.006"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: Independent re-checks before building on a finding (3 bad roots, 40 graphs)",
    "headingKn": "ಪ್ರಯೋಗ 3: Independent re-checks before building on a finding (3 bad roots, 40 graphs)",
    "bodyEn": "What it ran: Independent re-checks before building on a finding (3 bad roots, 40 graphs). What the lab concluded: an independent check that catches a bad finding before others build on it cuts contamination sharply, and removing a bad finding also removes the work that would have rested on it; the catch probability is an invented number and assumes the re-check is independent of the original mistake",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Independent re-checks before building on a finding (3 bad roots, 40 graphs). ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): an independent check that catches a bad finding before others build on it cuts contamination sharply, and removing a bad finding also removes the work that would have rested on it; the catch probability is an invented number and assumes the re-check is independent of the original mistake"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely measuring: independent re-checks before building on a finding (3 bad roots, 40 graphs) ---\ncatch probability 0.0: contaminated share 0.823 | findings removed 0.0\ncatch probability 0.3: contaminated share 0.323 | findings removed 28.7\ncatch probability 0.6: contaminated share 0.057 | findings removed 17.9\ncatch probability 0.9: contaminated share 0.002 | findings removed 4.1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 4: Reviewer panels with a shared blind spot (20000 bad findings)",
    "headingKn": "ಪ್ರಯೋಗ 4: Reviewer panels with a shared blind spot (20000 bad findings)",
    "bodyEn": "What it ran: Reviewer panels with a shared blind spot (20000 bad findings). What the lab concluded: adding reviewers raises the catch rate toward the ceiling set by the shared blind spot and no further, because errors that every reviewer shares cannot be voted away; the blind-spot share and per-reviewer catch rate are invented",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Reviewer panels with a shared blind spot (20000 bad findings). ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): adding reviewers raises the catch rate toward the ceiling set by the shared blind spot and no further, because errors that every reviewer shares cannot be voted away; the blind-spot share and per-reviewer catch rate are invented"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 4. Genuinely measuring: reviewer panels with a shared blind spot (20000 bad findings) ---\n 1 reviewer(s), shared blind spot 0.0: bad findings caught 0.702\n 5 reviewer(s), shared blind spot 0.0: bad findings caught 0.836\n 5 reviewer(s), shared blind spot 0.2: bad findings caught 0.664\n15 reviewer(s), shared blind spot 0.2: bad findings caught 0.766"
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
    "headingEn": "Genuinely Found: Spread and Position",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಹರಡುವಿಕೆ ಮತ್ತು ಸ್ಥಾನ",
    "bodyEn": "Section 1: with 1, 3 and 5 bad roots among the first 20 findings the mean contaminated share of all 200 was 0.568, 0.823 and 0.942, with a worst graph of 1.000 each time. Section 2 with one bad root: an index of 0 to 10 gave a mean share of 0.774, 90 to 100 gave 0.025 and 180 to 190 gave 0.006.",
    "bodyKn": "ವಿಭಾಗ 1: ಮೊದಲ 20 ಸಂಶೋಧನೆಗಳಲ್ಲಿ 1, 3 ಮತ್ತು 5 ಕೆಟ್ಟ ಬೇರುಗಳೊಂದಿಗೆ ಎಲ್ಲಾ 200 ರ ಸರಾಸರಿ ಕಲುಷಿತ ಪಾಲು 0.568, 0.823 ಮತ್ತು 0.942, ಪ್ರತಿ ಬಾರಿ ಕೆಟ್ಟ ಗ್ರಾಫ್ 1.000. ವಿಭಾಗ 2 ಒಂದು ಕೆಟ್ಟ ಬೇರಿನೊಂದಿಗೆ: ಸೂಚ್ಯಂಕ 0 ರಿಂದ 10 ಸರಾಸರಿ ಪಾಲು 0.774, 90 ರಿಂದ 100 0.025 ಮತ್ತು 180 ರಿಂದ 190 0.006 ನೀಡಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Re-checks and Blind Spots",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಮರು-ಪರಿಶೀಲನೆ ಮತ್ತು Blind Spots",
    "bodyEn": "Section 3 with 3 bad roots: catch probabilities 0.0, 0.3, 0.6 and 0.9 gave contaminated shares 0.823, 0.323, 0.057 and 0.002 with 0.0, 28.7, 17.9 and 4.1 findings removed. Section 4: one reviewer caught 0.702 of bad findings, five caught 0.836, five with a shared blind spot of 0.2 caught 0.664 and fifteen with that blind spot caught 0.766.",
    "bodyKn": "ವಿಭಾಗ 3 3 ಕೆಟ್ಟ ಬೇರುಗಳೊಂದಿಗೆ: ಹಿಡಿಯುವ ಸಾಧ್ಯತೆ 0.0, 0.3, 0.6 ಮತ್ತು 0.9 ಕಲುಷಿತ ಪಾಲು 0.823, 0.323, 0.057 ಮತ್ತು 0.002 ನೀಡಿತು, 0.0, 28.7, 17.9 ಮತ್ತು 4.1 ಸಂಶೋಧನೆಗಳು ತೆಗೆಯಲ್ಪಟ್ಟವು. ವಿಭಾಗ 4: ಒಬ್ಬ ವಿಮರ್ಶಕ ಕೆಟ್ಟ ಸಂಶೋಧನೆಗಳಲ್ಲಿ 0.702, ಐವರು 0.836, 0.2 ಹಂಚಿದ blind spot ಇರುವ ಐವರು 0.664 ಮತ್ತು ಆ blind spot ಇರುವ ಹದಿನೈದು 0.766 ಹಿಡಿದರು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "In a field where results build on results, the cheapest place to catch an error is early and before anything depends on it, and a panel of reviewers cannot catch what all of them are blind to.",
    "bodyKn": "ಫಲಿತಾಂಶಗಳು ಫಲಿತಾಂಶಗಳ ಮೇಲೆ ನಿರ್ಮಿಸುವ ಕ್ಷೇತ್ರದಲ್ಲಿ, ದೋಷ ಹಿಡಿಯಲು ಅಗ್ಗದ ಸ್ಥಳ ಆರಂಭದಲ್ಲಿ ಮತ್ತು ಯಾವುದೂ ಅದರ ಮೇಲೆ ಅವಲಂಬಿತವಾಗುವ ಮೊದಲು, ಮತ್ತು ವಿಮರ್ಶಕರ ಪ್ಯಾನೆಲ್ ಅವರೆಲ್ಲರಿಗೂ ಕುರುಡಾದದ್ದನ್ನು ಹಿಡಿಯಲಾರದು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"a late bad finding is as dangerous as an early one.\" A bad root at index 180 to 190 contaminated 0.6 percent of findings and one at 0 to 10 contaminated 77.4 percent.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ತಡವಾದ ಕೆಟ್ಟ ಸಂಶೋಧನೆ ಆರಂಭಿಕದಷ್ಟೇ ಅಪಾಯಕಾರಿ.\" ಸೂಚ್ಯಂಕ 180 ರಿಂದ 190 ರ ಕೆಟ್ಟ ಬೇರು 0.6 ಶೇಕಡಾ ಸಂಶೋಧನೆಗಳನ್ನು ಮತ್ತು 0 ರಿಂದ 10 ರದು 77.4 ಶೇಕಡಾ ಕಲುಷಿತಗೊಳಿಸಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Contamination: findings that depend on a bad one. Taint: the property of resting on a bad finding. Blind spot: an error type every reviewer misses. Re-check: an independent second look.",
    "bodyKn": "Contamination: ಕೆಟ್ಟದರ ಮೇಲೆ ಅವಲಂಬಿತ ಸಂಶೋಧನೆಗಳು. Taint: ಕೆಟ್ಟ ಸಂಶೋಧನೆಯ ಮೇಲೆ ನಿಂತಿರುವ ಗುಣ. Blind spot: ಪ್ರತಿ ವಿಮರ್ಶಕ ತಪ್ಪಿಸುವ ದೋಷ ಪ್ರಕಾರ. Re-check: ಸ್ವತಂತ್ರ ಎರಡನೇ ನೋಟ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) One bad root contaminated a mean 0.568 of findings. 2) An early root mattered far more than a late one. 3) A 0.9 catch rate cut contamination to 0.002. 4) A shared blind spot capped the panel. 5) The graph and rates are invented.",
    "bodyKn": "1) ಒಂದು ಕೆಟ್ಟ ಬೇರು ಸರಾಸರಿ 0.568 ಸಂಶೋಧನೆಗಳನ್ನು ಕಲುಷಿತಗೊಳಿಸಿತು. 2) ಆರಂಭಿಕ ಬೇರು ತಡವಾದದ್ದಕ್ಕಿಂತ ಬಹಳ ಮುಖ್ಯ. 3) 0.9 ಹಿಡಿಯುವ ದರ ಕಲುಷಿತವನ್ನು 0.002 ಗೆ ಇಳಿಸಿತು. 4) ಹಂಚಿದ blind spot ಪ್ಯಾನೆಲ್ ಅನ್ನು ಮಿತಿಗೊಳಿಸಿತು. 5) ಗ್ರಾಫ್ ಮತ್ತು ದರಗಳು ಕಲ್ಪಿತ."
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
    "bodyEn": "1) Open a terminal in pneuronics-backend/lesson-defs/labs. 2) Run: python -B ar_3.py (in Git Bash on Windows: PYTHONIOENCODING=utf-8 python -B ar_3.py). 3) Compare each section with the walkthrough above. The -B flag stops Python from writing __pycache__ folders.",
    "bodyKn": "1) pneuronics-backend/lesson-defs/labs ನಲ್ಲಿ ಟರ್ಮಿನಲ್ ತೆರೆಯಿರಿ. 2) ಓಡಿಸಿ: python -B ar_3.py (Windows Git Bash ನಲ್ಲಿ: PYTHONIOENCODING=utf-8 python -B ar_3.py). 3) ಪ್ರತಿ ವಿಭಾಗವನ್ನು ಮೇಲಿನ ನಡೆದಾಟಕ್ಕೆ ಹೋಲಿಸಿ. -B ಧ್ವಜ Python __pycache__ ಫೋಲ್ಡರ್‌ಗಳನ್ನು ಬರೆಯುವುದನ್ನು ತಡೆಯುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Predict before you run",
    "headingKn": "ಓಡಿಸುವ ಮುನ್ನ ಊಹಿಸಿ",
    "bodyEn": "Before rerunning, write down what you expect each experiment to print, then compare:\n1. How far bad roots spread (200 findings, up to 3 parents, 40 graphs)\n2. Where the bad finding sits matters (1 bad root, 40 graphs)\n3. Independent re-checks before building on a finding (3 bad roots, 40 graphs)\n4. Reviewer panels with a shared blind spot (20000 bad findings)",
    "bodyKn": "ಮರುಓಡಿಸುವ ಮುನ್ನ ಪ್ರತಿ ಪ್ರಯೋಗ ಏನು ಮುದ್ರಿಸುತ್ತದೆ ಎಂದು ನಿರೀಕ್ಷಿಸುವುದನ್ನು ಬರೆಯಿರಿ, ನಂತರ ಹೋಲಿಸಿ:\n1. How far bad roots spread (200 findings, up to 3 parents, 40 graphs)\n2. Where the bad finding sits matters (1 bad root, 40 graphs)\n3. Independent re-checks before building on a finding (3 bad roots, 40 graphs)\n4. Reviewer panels with a shared blind spot (20000 bad findings)"
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What mean share of findings did one bad root among the first 20 contaminate?",
      "qKn": "ಮೊದಲ 20 ರಲ್ಲಿ ಒಂದು ಕೆಟ್ಟ ಬೇರು ಸರಾಸರಿ ಎಷ್ಟು ಪಾಲು ಸಂಶೋಧನೆಗಳನ್ನು ಕಲುಷಿತಗೊಳಿಸಿತು?",
      "opts": [
       "0.568",
       "0.025",
       "0.942",
       "0.006"
      ],
      "optsKn": [
       "0.568",
       "0.025",
       "0.942",
       "0.006"
      ],
      "correct": 0
     },
     {
      "q": "What did a bad root at index 180 to 190 contaminate on average?",
      "qKn": "ಸೂಚ್ಯಂಕ 180 ರಿಂದ 190 ರ ಕೆಟ್ಟ ಬೇರು ಸರಾಸರಿ ಎಷ್ಟು ಕಲುಷಿತಗೊಳಿಸಿತು?",
      "opts": [
       "0.006",
       "0.774",
       "0.025",
       "0.568"
      ],
      "optsKn": [
       "0.006",
       "0.774",
       "0.025",
       "0.568"
      ],
      "correct": 0
     },
     {
      "q": "What contaminated share resulted from a re-check catch probability of 0.9?",
      "qKn": "ಮರು-ಪರಿಶೀಲನೆ ಹಿಡಿಯುವ ಸಾಧ್ಯತೆ 0.9 ಯಾವ ಕಲುಷಿತ ಪಾಲು ನೀಡಿತು?",
      "opts": [
       "0.002",
       "0.323",
       "0.057",
       "0.823"
      ],
      "optsKn": [
       "0.002",
       "0.323",
       "0.057",
       "0.823"
      ],
      "correct": 0
     },
     {
      "q": "How many bad findings did five reviewers with a 0.2 shared blind spot catch?",
      "qKn": "0.2 ಹಂಚಿದ blind spot ಇರುವ ಐವರು ವಿಮರ್ಶಕರು ಎಷ್ಟು ಕೆಟ್ಟ ಸಂಶೋಧನೆ ಹಿಡಿದರು?",
      "opts": [
       "0.664",
       "0.836",
       "0.702",
       "0.766"
      ],
      "optsKn": [
       "0.664",
       "0.836",
       "0.702",
       "0.766"
      ],
      "correct": 0
     },
     {
      "q": "Why can more reviewers not remove a shared blind spot?",
      "qKn": "ಹೆಚ್ಚು ವಿಮರ್ಶಕರು ಹಂಚಿದ blind spot ಅನ್ನು ಏಕೆ ತೆಗೆಯಲಾರರು?",
      "opts": [
       "They all miss the same errors, so voting cannot recover them",
       "Reviewers refuse to vote",
       "The graph is too small",
       "Re-checks are disabled"
      ],
      "optsKn": [
       "ಅವರೆಲ್ಲರೂ ಒಂದೇ ದೋಷಗಳನ್ನು ತಪ್ಪಿಸುತ್ತಾರೆ, ಆದ್ದರಿಂದ ಮತದಾನ ಅವುಗಳನ್ನು ಮರಳಿ ಪಡೆಯಲಾರದು",
       "ವಿಮರ್ಶಕರು ಮತ ನೀಡಲು ನಿರಾಕರಿಸುತ್ತಾರೆ",
       "ಗ್ರಾಫ್ ತುಂಬಾ ಚಿಕ್ಕದು",
       "ಮರು-ಪರಿಶೀಲನೆ ನಿಷ್ಕ್ರಿಯ"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
