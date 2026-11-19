module.exports = {
 "phaseId": "6a369d6366020ed05b32158c",
 "moduleId": "6a369d6366020ed05b32159b",
 "order": 1,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "AI Scientist v2: Workshop-Level Research (Part 2 of 3) — Novelty, Retries and Polish",
 "titleKn": "AI Scientist v2: Workshop-ಮಟ್ಟದ ಸಂಶೋಧನೆ (ಭಾಗ 2 / 3) — ನವೀನತೆ, ಮರುಪ್ರಯತ್ನ ಮತ್ತು Polish",
 "desc": "Measure the novelty threshold, retry budgets and polish masking of an automated research pipeline.",
 "descKn": "ಸ್ವಯಂಚಾಲಿತ ಸಂಶೋಧನಾ ಪೈಪ್‌ಲೈನ್‌ನ ನವೀನತೆ ಮಿತಿ, ಮರುಪ್ರಯತ್ನ ಬಜೆಟ್ ಮತ್ತು polish ಮರೆಮಾಚುವಿಕೆ ಅಳೆಯಿರಿ.",
 "objectives": [
  "Sweep a novelty threshold.",
  "Check a retry formula.",
  "Measure an exhausted budget.",
  "Show polish masking.",
  "State the limits of a keyword check."
 ],
 "objectivesKn": [
  "ನವೀನತೆ ಮಿತಿ ಸ್ವೀಪ್ ಮಾಡಿ.",
  "ಮರುಪ್ರಯತ್ನ ಸೂತ್ರ ಪರಿಶೀಲಿಸಿ.",
  "ಖಾಲಿಯಾದ ಬಜೆಟ್ ಅಳೆಯಿರಿ.",
  "polish ಮರೆಮಾಚುವಿಕೆ ತೋರಿಸಿ.",
  "ಕೀವರ್ಡ್ ಪರಿಶೀಲನೆಯ ಮಿತಿ ಹೇಳಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "AI Scientist v2: Workshop-Level Research (Part 2 of 3)",
    "textKn": "AI Scientist v2: Workshop-ಮಟ್ಟದ ಸಂಶೋಧನೆ (ಭಾಗ 2 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 2 of 3: a keyword novelty check and its threshold trade-off, retry budgets for coding against 1-0.42^b, the cost of an exhausted budget and a reviewer that weighs polish. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind automated research agents in the style of AI Scientist v2 (stage state machines, tree search over experiments, novelty checks, retry budgets, polish masking, number-against-log gates and reviewer ensembles), not the real software, and every stage is a scripted coin flip, ideas are random keyword sets, papers and reviewers are invented, and no experiment runs and no language model is used, so no real LLM behaviour is measured. The original code/main.py was not supplied, so the labs are our own implementation. The lesson cites a 42 percent coding-failure rate for the published system; that figure is cited, not measured here, and the labs merely use 0.58 as an assumed coding success rate. Every other probability, threshold and score in the labs is invented. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 2ನೆಯದು: ಕೀವರ್ಡ್ ನವೀನತೆ ಪರಿಶೀಲನೆ ಮತ್ತು ಅದರ ಮಿತಿ ವಿನಿಮಯ, 1-0.42^b ವಿರುದ್ಧ ಕೋಡಿಂಗ್‌ಗೆ ಮರುಪ್ರಯತ್ನ ಬಜೆಟ್, ಖಾಲಿಯಾದ ಬಜೆಟ್‌ನ ವೆಚ್ಚ ಮತ್ತು polish ಗೆ ತೂಕ ನೀಡುವ ವಿಮರ್ಶಕ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು AI Scientist v2 ಶೈಲಿಯ ಸ್ವಯಂಚಾಲಿತ ಸಂಶೋಧನಾ agents (ಹಂತ ಸ್ಥಿತಿ ಯಂತ್ರಗಳು, ಪ್ರಯೋಗಗಳ ಮೇಲೆ ಮರ ಹುಡುಕಾಟ, ನವೀನತೆ ಪರಿಶೀಲನೆ, ಮರುಪ್ರಯತ್ನ ಬಜೆಟ್, polish ಮರೆಮಾಚುವಿಕೆ, ಸಂಖ್ಯೆ-ಲಾಗ್ gates ಮತ್ತು ವಿಮರ್ಶಕ ಸಮೂಹಗಳು) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಪ್ರತಿ ಹಂತ scripted ನಾಣ್ಯ ಚಿಮ್ಮುವಿಕೆ, ಕಲ್ಪನೆಗಳು ಯಾದೃಚ್ಛಿಕ ಕೀವರ್ಡ್ ಸೆಟ್‌ಗಳು, ಪೇಪರ್‌ಗಳು ಮತ್ತು ವಿಮರ್ಶಕರು ಕಲ್ಪಿತ, ಯಾವ ಪ್ರಯೋಗವೂ ಓಡುವುದಿಲ್ಲ ಮತ್ತು ಭಾಷಾ ಮಾದರಿ ಬಳಸಿಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ code/main.py ಒದಗಿಸಿರಲಿಲ್ಲ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ನಮ್ಮದೇ ಅನುಷ್ಠಾನ. ಪ್ರಕಟಿತ ವ್ಯವಸ್ಥೆಗೆ lesson 42 ಶೇಕಡಾ ಕೋಡಿಂಗ್-ವೈಫಲ್ಯ ದರ ಉಲ್ಲೇಖಿಸುತ್ತದೆ; ಆ ಅಂಕಿ ಉಲ್ಲೇಖಿತ, ಇಲ್ಲಿ ಅಳೆಯಲಾಗಿಲ್ಲ, ಮತ್ತು ಲ್ಯಾಬ್‌ಗಳು ಕೇವಲ 0.58 ಅನ್ನು ಊಹಿತ ಕೋಡಿಂಗ್ ಯಶಸ್ಸು ದರವಾಗಿ ಬಳಸುತ್ತವೆ. ಲ್ಯಾಬ್‌ಗಳ ಇತರ ಪ್ರತಿ ಸಂಭವನೀಯತೆ, ಮಿತಿ ಮತ್ತು ಅಂಕ ಕಲ್ಪಿತ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Three Ways the Pipeline Goes Wrong Quietly",
    "textKn": "ಪೈಪ್‌ಲೈನ್ ಮೌನವಾಗಿ ತಪ್ಪುವ ಮೂರು ವಿಧಾನಗಳು",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Thresholds, Budgets and Presentation",
    "headingKn": "ಮಿತಿಗಳು, ಬಜೆಟ್‌ಗಳು ಮತ್ತು ಪ್ರಸ್ತುತಿ",
    "bodyEn": "This part measures three weak points. A keyword-overlap novelty check has a threshold that trades false duplicates against missed near-copies, a retry budget bounds how many times a failing coding step is tried, and a reviewer that rewards polish can accept weak papers with good presentation. Ideas are random keyword sets and all scores are invented.",
    "bodyKn": "ಈ ಭಾಗ ಮೂರು ದುರ್ಬಲ ಬಿಂದುಗಳನ್ನು ಅಳೆಯುತ್ತದೆ. ಕೀವರ್ಡ್-ಅತಿಕ್ರಮಣ ನವೀನತೆ ಪರಿಶೀಲನೆಗೆ ತಪ್ಪು ನಕಲುಗಳನ್ನು ತಪ್ಪಿದ ಹತ್ತಿರದ-ನಕಲುಗಳ ವಿರುದ್ಧ ವಿನಿಮಯ ಮಾಡುವ ಮಿತಿ ಇದೆ, ಮರುಪ್ರಯತ್ನ ಬಜೆಟ್ ವಿಫಲ ಕೋಡಿಂಗ್ ಹಂತ ಎಷ್ಟು ಬಾರಿ ಪ್ರಯತ್ನಿಸಲ್ಪಡುತ್ತದೆ ಎಂದು ಮಿತಿಗೊಳಿಸುತ್ತದೆ, ಮತ್ತು polish ಗೆ ಬಹುಮಾನ ನೀಡುವ ವಿಮರ್ಶಕ ಉತ್ತಮ ಪ್ರಸ್ತುತಿಯ ದುರ್ಬಲ ಪೇಪರ್‌ಗಳನ್ನು ಸ್ವೀಕರಿಸಬಹುದು. ಕಲ್ಪನೆಗಳು ಯಾದೃಚ್ಛಿಕ ಕೀವರ್ಡ್ ಸೆಟ್‌ಗಳು ಮತ್ತು ಎಲ್ಲಾ ಅಂಕಗಳು ಕಲ್ಪಿತ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Failure Modes of an Automated Scientist",
    "headingKn": "ಸ್ವಯಂಚಾಲಿತ ವಿಜ್ಞಾನಿಯ ವೈಫಲ್ಯ ವಿಧಾನಗಳು",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">each failure mode has a knob and a cost</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">novelty</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">threshold</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">retry</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">budget b</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">polish</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">masks content</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">review</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">weights</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">each failure mode has a knob and a cost</text></svg>",
    "captionEn": "Novelty errors, retry limits and polish masking.",
    "captionKn": "ನವೀನತೆ ದೋಷಗಳು, ಮರುಪ್ರಯತ್ನ ಮಿತಿಗಳು ಮತ್ತು polish ಮರೆಮಾಚುವಿಕೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "captionEn": "Settings in the lab",
    "captionKn": "ಲ್ಯಾಬ್‌ನಲ್ಲಿ ಸೆಟ್ಟಿಂಗ್‌ಗಳು",
    "rows": "Item|Setting\ncorpus|60 keyword sets of 6 words from a 40-word vocabulary\nideas|400, half near-copies, half fresh\ncoding success|0.58 per try (assumed)\npolish weights|0.0, 0.3, 0.6\nacceptance cutoff|0.5 (invented)"
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
    "filename": "as_2.py",
    "headingEn": "Novelty, retries and review score",
    "headingKn": "ನವೀನತೆ, ಮರುಪ್ರಯತ್ನ ಮತ್ತು ವಿಮರ್ಶೆ ಅಂಕ",
    "descEn": "jaccard measures keyword overlap, judged_novel applies the threshold, retries_until_success enforces a budget and review_score mixes content with polish.",
    "descKn": "jaccard ಕೀವರ್ಡ್ ಅತಿಕ್ರಮಣ ಅಳೆಯುತ್ತದೆ, judged_novel ಮಿತಿ ಅನ್ವಯಿಸುತ್ತದೆ, retries_until_success ಬಜೆಟ್ ಜಾರಿಗೊಳಿಸುತ್ತದೆ ಮತ್ತು review_score ವಿಷಯವನ್ನು polish ನೊಂದಿಗೆ ಬೆರೆಸುತ್ತದೆ.",
    "code": "VOCAB = [f\"w{i}\" for i in range(40)]\r\n\r\n\r\ndef jaccard(a, b):\r\n    return len(a & b) / len(a | b)\r\n\r\n\r\ndef make_corpus(r, n=60):\r\n    return [frozenset(r.sample(VOCAB, 6)) for _ in range(n)]\r\n\r\n\r\ndef make_ideas(r, corpus, n=400):\r\n    \"\"\"Half are near-copies of a corpus entry (not novel, 1 or 2 words swapped), half are fresh random sets.\"\"\"\r\n    ideas = []\r\n    for _ in range(n):\r\n        if r.random() < 0.5:\r\n            base = set(r.choice(corpus))\r\n            for _ in range(r.choice([1, 2])):\r\n                base.discard(r.choice(sorted(base)))\r\n                base.add(r.choice(VOCAB))\r\n            ideas.append((frozenset(base), False))\r\n        else:\r\n            ideas.append((frozenset(r.sample(VOCAB, 6)), True))\r\n    return ideas\r\n\r\n\r\ndef judged_novel(idea, corpus, threshold):\r\n    return max(jaccard(idea, c) for c in corpus) < threshold\r\n\r\n\r\ndef retries_until_success(r, p, budget):\r\n    for k in range(1, budget + 1):\r\n        if r.random() < p:\r\n            return k\r\n    return None\r\n\r\n\r\ndef review_score(content, polish, w_polish):\r\n    return (1 - w_polish) * content + w_polish * polish"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "as_2.py",
    "headingEn": "main(): experiments",
    "headingKn": "main(): ಪ್ರಯೋಗಗಳು",
    "descEn": "main() sweeps the novelty threshold, sweeps retry budgets, measures an exhausted budget and sweeps the reviewer polish weight.",
    "descKn": "main() ನವೀನತೆ ಮಿತಿ ಸ್ವೀಪ್ ಮಾಡಿ, ಮರುಪ್ರಯತ್ನ ಬಜೆಟ್ ಸ್ವೀಪ್ ಮಾಡಿ, ಖಾಲಿಯಾದ ಬಜೆಟ್ ಅಳೆದು ಮತ್ತು ವಿಮರ್ಶಕ polish ತೂಕ ಸ್ವೀಪ್ ಮಾಡುತ್ತದೆ.",
    "code": "def main():\r\n    section(\"1. Genuinely measuring: novelty threshold against errors (400 ideas, 60 corpus entries, seed 1)\")\r\n    r = random.Random(1)\r\n    corpus = make_corpus(r)\r\n    ideas = make_ideas(r, corpus)\r\n    for t in (0.2, 0.3, 0.4, 0.5, 0.7):\r\n        false_novel = sum(1 for i, nov in ideas if (not nov) and judged_novel(i, corpus, t))\r\n        false_dup = sum(1 for i, nov in ideas if nov and not judged_novel(i, corpus, t))\r\n        print(f\"similarity threshold {t:.1f}: near-copies called novel {false_novel:3d} | fresh ideas called duplicates {false_dup:3d}\")\r\n    print(\"a low threshold of 0.2 labels 201 fresh ideas as duplicates (essentially all of them) while a high threshold of 0.7 lets 80 near-copies through, and in this run only 0.4 and 0.5 missed no near-copies at the price of 26 false duplicates; a keyword overlap check also cannot see a reworded copy, and these ideas are random word sets\")\r\n\r\n    section(\"2. Genuinely measuring: retry budgets for a coding step (success 0.58 per try, 20000 trials)\")\r\n    r = random.Random(2)\r\n    for budget in (1, 2, 3, 5, 8):\r\n        out = [retries_until_success(r, 0.58, budget) for _ in range(20000)]\r\n        done = [x for x in out if x is not None]\r\n        print(f\"budget {budget}: success {len(done) / len(out):.4f} | formula {1 - 0.42 ** budget:.4f} | mean tries used {mean(x if x is not None else budget for x in out):.2f}\")\r\n    print(\"each extra try adds less than the one before, and the mean tries used stays close to 1.7 even for a large budget because most runs succeed early; the budget mainly bounds the worst case, and 0.58 is an assumed rate\")\r\n\r\n    section(\"3. Genuinely running: when retries hit the cap, where does the cost go?\")\r\n    r = random.Random(3)\r\n    cap = 3\r\n    out = [retries_until_success(r, 0.3, cap) for _ in range(20000)]\r\n    failed = sum(1 for x in out if x is None)\r\n    print(f\"success rate 0.30, budget {cap}: {failed / len(out):.3f} of runs exhausted the budget and spent {cap} tries each; {mean(x if x is not None else cap for x in out):.2f} tries on average\")\r\n    print(\"with a weak step about a third of runs exhaust the budget and the cost is spent for no result, so a retry budget needs a rule for what happens next, such as stopping the run and recording why\")\r\n\r\n    section(\"4. Genuinely measuring: a reviewer that weighs polish\")\r\n    r = random.Random(4)\r\n    papers = [(r.random(), r.random()) for _ in range(20000)]\r\n    solid_but_plain = [(c, p) for c, p in papers if c > 0.7 and p < 0.3]\r\n    weak_but_polished = [(c, p) for c, p in papers if c < 0.3 and p > 0.7]\r\n    for w in (0.0, 0.3, 0.6):\r\n        acc_weak = mean(review_score(c, p, w) > 0.5 for c, p in weak_but_polished)\r\n        acc_solid = mean(review_score(c, p, w) > 0.5 for c, p in solid_but_plain)\r\n        print(f\"polish weight {w:.1f}: weak-but-polished accepted {acc_weak:.3f} | solid-but-plain accepted {acc_solid:.3f}\")\r\n    print(\"as the reviewer weighs polish more, weak papers with good presentation get accepted and solid plain ones get rejected, which is the masking effect the lesson warns about; the content and polish scores are independent uniform numbers and the 0.5 acceptance cutoff is invented\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely measuring: novelty threshold against errors (400 ideas, 60 corpus entries, seed 1) ---\nsimilarity threshold 0.2: near-copies called novel   0 | fresh ideas called duplicates 201\nsimilarity threshold 0.3: near-copies called novel   0 | fresh ideas called duplicates 176\nsimilarity threshold 0.4: near-copies called novel   0 | fresh ideas called duplicates  26\nsimilarity threshold 0.5: near-copies called novel   0 | fresh ideas called duplicates  26\nsimilarity threshold 0.7: near-copies called novel  80 | fresh ideas called duplicates   2\na low threshold of 0.2 labels 201 fresh ideas as duplicates (essentially all of them) while a high threshold of 0.7 lets 80 near-copies through, and in this run only 0.4 and 0.5 missed no near-copies at the price of 26 false duplicates; a keyword overlap check also cannot see a reworded copy, and these ideas are random word sets\n\n--- 2. Genuinely measuring: retry budgets for a coding step (success 0.58 per try, 20000 trials) ---\nbudget 1: success 0.5806 | formula 0.5800 | mean tries used 1.00\nbudget 2: success 0.8220 | formula 0.8236 | mean tries used 1.42\nbudget 3: success 0.9254 | formula 0.9259 | mean tries used 1.61\nbudget 5: success 0.9866 | formula 0.9869 | mean tries used 1.71\nbudget 8: success 0.9992 | formula 0.9990 | mean tries used 1.71\neach extra try adds less than the one before, and the mean tries used stays close to 1.7 even for a large budget because most runs succeed early; the budget mainly bounds the worst case, and 0.58 is an assumed rate\n\n--- 3. Genuinely running: when retries hit the cap, where does the cost go? ---\nsuccess rate 0.30, budget 3: 0.345 of runs exhausted the budget and spent 3 tries each; 2.19 tries on average\nwith a weak step about a third of runs exhaust the budget and the cost is spent for no result, so a retry budget needs a rule for what happens next, such as stopping the run and recording why\n\n--- 4. Genuinely measuring: a reviewer that weighs polish ---\npolish weight 0.0: weak-but-polished accepted 0.000 | solid-but-plain accepted 1.000\npolish weight 0.3: weak-but-polished accepted 0.002 | solid-but-plain accepted 0.997\npolish weight 0.6: weak-but-polished accepted 0.864 | solid-but-plain accepted 0.157\nas the reviewer weighs polish more, weak papers with good presentation get accepted and solid plain ones get rejected, which is the masking effect the lesson warns about; the content and polish scores are independent uniform numbers and the 0.5 acceptance cutoff is invented"
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
    "headingEn": "Experiment 1: Novelty threshold against errors (400 ideas, 60 corpus entries, seed 1)",
    "headingKn": "ಪ್ರಯೋಗ 1: Novelty threshold against errors (400 ideas, 60 corpus entries, seed 1)",
    "bodyEn": "What it ran: Novelty threshold against errors (400 ideas, 60 corpus entries, seed 1). What the lab concluded: a low threshold of 0.2 labels 201 fresh ideas as duplicates (essentially all of them) while a high threshold of 0.7 lets 80 near-copies through, and in this run only 0.4 and 0.5 missed no near-copies at the price of 26 false duplicates; a keyword overlap check also cannot see a reworded copy, and these ideas are random word sets",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Novelty threshold against errors (400 ideas, 60 corpus entries, seed 1). ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a low threshold of 0.2 labels 201 fresh ideas as duplicates (essentially all of them) while a high threshold of 0.7 lets 80 near-copies through, and in this run only 0.4 and 0.5 missed no near-copies at the price of 26 false duplicates; a keyword overlap check also cannot see a reworded copy, and these ideas are random word sets"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. Genuinely measuring: novelty threshold against errors (400 ideas, 60 corpus entries, seed 1) ---\nsimilarity threshold 0.2: near-copies called novel   0 | fresh ideas called duplicates 201\nsimilarity threshold 0.3: near-copies called novel   0 | fresh ideas called duplicates 176\nsimilarity threshold 0.4: near-copies called novel   0 | fresh ideas called duplicates  26\nsimilarity threshold 0.5: near-copies called novel   0 | fresh ideas called duplicates  26\nsimilarity threshold 0.7: near-copies called novel  80 | fresh ideas called duplicates   2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: Retry budgets for a coding step (success 0.58 per try, 20000 trials)",
    "headingKn": "ಪ್ರಯೋಗ 2: Retry budgets for a coding step (success 0.58 per try, 20000 trials)",
    "bodyEn": "What it ran: Retry budgets for a coding step (success 0.58 per try, 20000 trials). What the lab concluded: each extra try adds less than the one before, and the mean tries used stays close to 1.7 even for a large budget because most runs succeed early; the budget mainly bounds the worst case, and 0.58 is an assumed rate",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Retry budgets for a coding step (success 0.58 per try, 20000 trials). ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): each extra try adds less than the one before, and the mean tries used stays close to 1.7 even for a large budget because most runs succeed early; the budget mainly bounds the worst case, and 0.58 is an assumed rate"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely measuring: retry budgets for a coding step (success 0.58 per try, 20000 trials) ---\nbudget 1: success 0.5806 | formula 0.5800 | mean tries used 1.00\nbudget 2: success 0.8220 | formula 0.8236 | mean tries used 1.42\nbudget 3: success 0.9254 | formula 0.9259 | mean tries used 1.61\nbudget 5: success 0.9866 | formula 0.9869 | mean tries used 1.71\nbudget 8: success 0.9992 | formula 0.9990 | mean tries used 1.71"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: When retries hit the cap, where does the cost go?",
    "headingKn": "ಪ್ರಯೋಗ 3: When retries hit the cap, where does the cost go?",
    "bodyEn": "What it ran: When retries hit the cap, where does the cost go?. What the lab concluded: with a weak step about a third of runs exhaust the budget and the cost is spent for no result, so a retry budget needs a rule for what happens next, such as stopping the run and recording why",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: When retries hit the cap, where does the cost go?. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): with a weak step about a third of runs exhaust the budget and the cost is spent for no result, so a retry budget needs a rule for what happens next, such as stopping the run and recording why"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely running: when retries hit the cap, where does the cost go? ---\nsuccess rate 0.30, budget 3: 0.345 of runs exhausted the budget and spent 3 tries each; 2.19 tries on average"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 4: A reviewer that weighs polish",
    "headingKn": "ಪ್ರಯೋಗ 4: A reviewer that weighs polish",
    "bodyEn": "What it ran: A reviewer that weighs polish. What the lab concluded: as the reviewer weighs polish more, weak papers with good presentation get accepted and solid plain ones get rejected, which is the masking effect the lesson warns about; the content and polish scores are independent uniform numbers and the 0.5 acceptance cutoff is invented",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A reviewer that weighs polish. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): as the reviewer weighs polish more, weak papers with good presentation get accepted and solid plain ones get rejected, which is the masking effect the lesson warns about; the content and polish scores are independent uniform numbers and the 0.5 acceptance cutoff is invented"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 4. Genuinely measuring: a reviewer that weighs polish ---\npolish weight 0.0: weak-but-polished accepted 0.000 | solid-but-plain accepted 1.000\npolish weight 0.3: weak-but-polished accepted 0.002 | solid-but-plain accepted 0.997\npolish weight 0.6: weak-but-polished accepted 0.864 | solid-but-plain accepted 0.157"
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
    "headingEn": "Genuinely Found: Novelty Threshold and Retry Budgets",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ನವೀನತೆ ಮಿತಿ ಮತ್ತು ಮರುಪ್ರಯತ್ನ ಬಜೆಟ್‌ಗಳು",
    "bodyEn": "Section 1: near-copies called novel and fresh ideas called duplicates were 0 and 201 at threshold 0.2, 0 and 176 at 0.3, 0 and 26 at 0.4, 0 and 26 at 0.5, and 80 and 2 at 0.7. Section 2: budgets 1, 2, 3, 5 and 8 gave success 0.5806, 0.8220, 0.9254, 0.9866 and 0.9992 against formula values 0.5800, 0.8236, 0.9259, 0.9869 and 0.9990, with mean tries used 1.00, 1.42, 1.61, 1.71 and 1.71.",
    "bodyKn": "ವಿಭಾಗ 1: ಮಿತಿ 0.2 ರಲ್ಲಿ ನವೀನ ಎಂದು ಕರೆದ ಹತ್ತಿರದ-ನಕಲುಗಳು ಮತ್ತು ನಕಲು ಎಂದು ಕರೆದ ಹೊಸ ಕಲ್ಪನೆಗಳು 0 ಮತ್ತು 201, 0.3 ರಲ್ಲಿ 0 ಮತ್ತು 176, 0.4 ರಲ್ಲಿ 0 ಮತ್ತು 26, 0.5 ರಲ್ಲಿ 0 ಮತ್ತು 26, ಮತ್ತು 0.7 ರಲ್ಲಿ 80 ಮತ್ತು 2. ವಿಭಾಗ 2: ಬಜೆಟ್ 1, 2, 3, 5 ಮತ್ತು 8 ಯಶಸ್ಸು ಸೂತ್ರ ಮೌಲ್ಯಗಳು 0.5800, 0.8236, 0.9259, 0.9869 ಮತ್ತು 0.9990 ವಿರುದ್ಧ 0.5806, 0.8220, 0.9254, 0.9866 ಮತ್ತು 0.9992 ನೀಡಿತು, ಬಳಸಿದ ಸರಾಸರಿ ಪ್ರಯತ್ನ 1.00, 1.42, 1.61, 1.71 ಮತ್ತು 1.71."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Exhausted Budgets and Polish",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಖಾಲಿಯಾದ ಬಜೆಟ್‌ಗಳು ಮತ್ತು Polish",
    "bodyEn": "Section 3: at success 0.30 with a budget of 3, 0.345 of runs exhausted the budget and the average was 2.19 tries. Section 4: at polish weight 0.0, 0.3 and 0.6 weak-but-polished papers were accepted 0.000, 0.002 and 0.864 of the time and solid-but-plain papers 1.000, 0.997 and 0.157.",
    "bodyKn": "ವಿಭಾಗ 3: ಯಶಸ್ಸು 0.30 ಮತ್ತು ಬಜೆಟ್ 3 ರಲ್ಲಿ, ಓಟಗಳಲ್ಲಿ 0.345 ಬಜೆಟ್ ಖಾಲಿ ಮಾಡಿದವು ಮತ್ತು ಸರಾಸರಿ 2.19 ಪ್ರಯತ್ನ. ವಿಭಾಗ 4: polish ತೂಕ 0.0, 0.3 ಮತ್ತು 0.6 ರಲ್ಲಿ ದುರ್ಬಲ-ಆದರೆ-ಹೊಳಪಿನ ಪೇಪರ್‌ಗಳು 0.000, 0.002 ಮತ್ತು 0.864 ಸಮಯ ಮತ್ತು ದೃಢ-ಆದರೆ-ಸಾದಾ ಪೇಪರ್‌ಗಳು 1.000, 0.997 ಮತ್ತು 0.157 ಸ್ವೀಕರಿಸಲ್ಪಟ್ಟವು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "Each safeguard has a setting, and the setting decides which error you get, so it has to be chosen and measured rather than left at a default.",
    "bodyKn": "ಪ್ರತಿ ರಕ್ಷಣೆಗೆ ಒಂದು ಸೆಟ್ಟಿಂಗ್ ಇದೆ, ಮತ್ತು ಸೆಟ್ಟಿಂಗ್ ನೀವು ಯಾವ ದೋಷ ಪಡೆಯುತ್ತೀರಿ ಎಂದು ನಿರ್ಧರಿಸುತ್ತದೆ, ಆದ್ದರಿಂದ ಅದನ್ನು ಡೀಫಾಲ್ಟ್‌ನಲ್ಲಿ ಬಿಡದೆ ಆರಿಸಿ ಅಳೆಯಬೇಕು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"a low novelty threshold lets copies through.\" At 0.2 no near-copy was called novel, but 201 fresh ideas were called duplicates.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಕಡಿಮೆ ನವೀನತೆ ಮಿತಿ ನಕಲುಗಳನ್ನು ಹಾದುಹೋಗಲು ಬಿಡುತ್ತದೆ.\" 0.2 ರಲ್ಲಿ ಯಾವ ಹತ್ತಿರದ-ನಕಲೂ ನವೀನ ಎಂದು ಕರೆಯಲ್ಪಡಲಿಲ್ಲ, ಆದರೆ 201 ಹೊಸ ಕಲ್ಪನೆಗಳು ನಕಲು ಎಂದು ಕರೆಯಲ್ಪಟ್ಟವು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Jaccard: overlap divided by union. Retry budget: a cap on tries. Polish: presentation quality. Masking: presentation hiding weak content.",
    "bodyKn": "Jaccard: ಅತಿಕ್ರಮಣ ಭಾಗಿಸಿದ ಸಂಯೋಗ. Retry budget: ಪ್ರಯತ್ನಗಳ ಮಿತಿ. Polish: ಪ್ರಸ್ತುತಿ ಗುಣಮಟ್ಟ. Masking: ಪ್ರಸ್ತುತಿ ದುರ್ಬಲ ವಿಷಯ ಮರೆಮಾಡುವುದು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) Threshold 0.2 flagged 201 fresh ideas as duplicates. 2) Threshold 0.7 let 80 near-copies through. 3) Budgets matched 1-0.42^b. 4) A weak step exhausted the budget in 34.5 percent of runs. 5) Polish weight 0.6 accepted 86.4 percent of weak polished papers.",
    "bodyKn": "1) ಮಿತಿ 0.2 201 ಹೊಸ ಕಲ್ಪನೆಗಳನ್ನು ನಕಲು ಎಂದು ಗುರುತಿಸಿತು. 2) ಮಿತಿ 0.7 80 ಹತ್ತಿರದ-ನಕಲುಗಳನ್ನು ಹಾದುಹೋಗಲು ಬಿಟ್ಟಿತು. 3) ಬಜೆಟ್‌ಗಳು 1-0.42^b ಗೆ ಹೊಂದಿದವು. 4) ದುರ್ಬಲ ಹಂತ 34.5 ಶೇಕಡಾ ಓಟಗಳಲ್ಲಿ ಬಜೆಟ್ ಖಾಲಿ ಮಾಡಿತು. 5) polish ತೂಕ 0.6 ದುರ್ಬಲ ಹೊಳಪಿನ ಪೇಪರ್‌ಗಳಲ್ಲಿ 86.4 ಶೇಕಡಾ ಸ್ವೀಕರಿಸಿತು."
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
    "bodyEn": "1) Open a terminal in pneuronics-backend/lesson-defs/labs. 2) Run: python -B as_2.py (in Git Bash on Windows: PYTHONIOENCODING=utf-8 python -B as_2.py). 3) Compare each section with the walkthrough above. The -B flag stops Python from writing __pycache__ folders.",
    "bodyKn": "1) pneuronics-backend/lesson-defs/labs ನಲ್ಲಿ ಟರ್ಮಿನಲ್ ತೆರೆಯಿರಿ. 2) ಓಡಿಸಿ: python -B as_2.py (Windows Git Bash ನಲ್ಲಿ: PYTHONIOENCODING=utf-8 python -B as_2.py). 3) ಪ್ರತಿ ವಿಭಾಗವನ್ನು ಮೇಲಿನ ನಡೆದಾಟಕ್ಕೆ ಹೋಲಿಸಿ. -B ಧ್ವಜ Python __pycache__ ಫೋಲ್ಡರ್‌ಗಳನ್ನು ಬರೆಯುವುದನ್ನು ತಡೆಯುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Predict before you run",
    "headingKn": "ಓಡಿಸುವ ಮುನ್ನ ಊಹಿಸಿ",
    "bodyEn": "Before rerunning, write down what you expect each experiment to print, then compare:\n1. Novelty threshold against errors (400 ideas, 60 corpus entries, seed 1)\n2. Retry budgets for a coding step (success 0.58 per try, 20000 trials)\n3. When retries hit the cap, where does the cost go?\n4. A reviewer that weighs polish",
    "bodyKn": "ಮರುಓಡಿಸುವ ಮುನ್ನ ಪ್ರತಿ ಪ್ರಯೋಗ ಏನು ಮುದ್ರಿಸುತ್ತದೆ ಎಂದು ನಿರೀಕ್ಷಿಸುವುದನ್ನು ಬರೆಯಿರಿ, ನಂತರ ಹೋಲಿಸಿ:\n1. Novelty threshold against errors (400 ideas, 60 corpus entries, seed 1)\n2. Retry budgets for a coding step (success 0.58 per try, 20000 trials)\n3. When retries hit the cap, where does the cost go?\n4. A reviewer that weighs polish"
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "How many fresh ideas were called duplicates at threshold 0.2?",
      "qKn": "ಮಿತಿ 0.2 ರಲ್ಲಿ ಎಷ್ಟು ಹೊಸ ಕಲ್ಪನೆಗಳು ನಕಲು ಎಂದು ಕರೆಯಲ್ಪಟ್ಟವು?",
      "opts": [
       "201",
       "0",
       "26",
       "80"
      ],
      "optsKn": [
       "201",
       "0",
       "26",
       "80"
      ],
      "correct": 0
     },
     {
      "q": "How many near-copies were called novel at threshold 0.7?",
      "qKn": "ಮಿತಿ 0.7 ರಲ್ಲಿ ಎಷ್ಟು ಹತ್ತಿರದ-ನಕಲುಗಳು ನವೀನ ಎಂದು ಕರೆಯಲ್ಪಟ್ಟವು?",
      "opts": [
       "80",
       "0",
       "2",
       "201"
      ],
      "optsKn": [
       "80",
       "0",
       "2",
       "201"
      ],
      "correct": 0
     },
     {
      "q": "What fraction of runs exhausted a budget of 3 at success 0.30?",
      "qKn": "ಯಶಸ್ಸು 0.30 ರಲ್ಲಿ ಬಜೆಟ್ 3 ಅನ್ನು ಎಷ್ಟು ಭಾಗ ಓಟಗಳು ಖಾಲಿ ಮಾಡಿದವು?",
      "opts": [
       "0.345",
       "0.58",
       "0.9254",
       "0.042"
      ],
      "optsKn": [
       "0.345",
       "0.58",
       "0.9254",
       "0.042"
      ],
      "correct": 0
     },
     {
      "q": "How often were weak-but-polished papers accepted at polish weight 0.6?",
      "qKn": "polish ತೂಕ 0.6 ರಲ್ಲಿ ದುರ್ಬಲ-ಆದರೆ-ಹೊಳಪಿನ ಪೇಪರ್‌ಗಳು ಎಷ್ಟು ಬಾರಿ ಸ್ವೀಕರಿಸಲ್ಪಟ್ಟವು?",
      "opts": [
       "0.864",
       "0.002",
       "0.157",
       "0.000"
      ],
      "optsKn": [
       "0.864",
       "0.002",
       "0.157",
       "0.000"
      ],
      "correct": 0
     },
     {
      "q": "Why can a keyword overlap check not be trusted on its own?",
      "qKn": "ಕೀವರ್ಡ್ ಅತಿಕ್ರಮಣ ಪರಿಶೀಲನೆಯನ್ನು ಏಕಾಂಗಿಯಾಗಿ ಏಕೆ ನಂಬಲಾಗದು?",
      "opts": [
       "It cannot see a reworded copy and its threshold trades two errors",
       "It always gives the right answer",
       "It is a language model",
       "It ignores keywords"
      ],
      "optsKn": [
       "ಅದು ಪದ ಬದಲಿಸಿದ ನಕಲನ್ನು ನೋಡಲಾರದು ಮತ್ತು ಅದರ ಮಿತಿ ಎರಡು ದೋಷಗಳನ್ನು ವಿನಿಮಯ ಮಾಡುತ್ತದೆ",
       "ಅದು ಯಾವಾಗಲೂ ಸರಿ ಉತ್ತರ ನೀಡುತ್ತದೆ",
       "ಅದು ಭಾಷಾ ಮಾದರಿ",
       "ಅದು ಕೀವರ್ಡ್‌ಗಳನ್ನು ನಿರ್ಲಕ್ಷಿಸುತ್ತದೆ"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
