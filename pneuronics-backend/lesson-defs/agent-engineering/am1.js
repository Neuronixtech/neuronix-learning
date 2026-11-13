module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6af7584e16045e49cbd95188",
 "order": 0,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Map Assumptions and Resolve the Riskiest One First (Part 1 of 3) — Assumption Records and Risk Scores",
 "titleKn": "ಊಹೆಗಳನ್ನು ನಕ್ಷೆ ಮಾಡಿ ಮತ್ತು ಅತಿ ಅಪಾಯಕಾರಿಯನ್ನು ಮೊದಲು ಪರಿಹರಿಸಿ (ಭಾಗ 1 / 3) — ಊಹೆ ದಾಖಲೆಗಳು ಮತ್ತು ಅಪಾಯ ಅಂಕಗಳು",
 "desc": "Turn hidden beliefs into rated, falsifiable records, rank them under a stated rule and see how rules disagree.",
 "descKn": "ಗುಪ್ತ ನಂಬಿಕೆಗಳನ್ನು ರೇಟ್ ಮಾಡಿದ, ಸುಳ್ಳೆಂದು ಸಾಬೀತುಪಡಿಸಬಹುದಾದ ದಾಖಲೆಗಳಾಗಿ ಪರಿವರ್ತಿಸಿ, ಹೇಳಿದ ನಿಯಮದಲ್ಲಿ ಶ್ರೇಣೀಕರಿಸಿ ಮತ್ತು ನಿಯಮಗಳು ಹೇಗೆ ಒಪ್ಪುವುದಿಲ್ಲ ನೋಡಿ.",
 "objectives": [
  "Write assumptions as records.",
  "Rate impact, uncertainty and irreversibility.",
  "Rank under a stated rule.",
  "Break ties explicitly.",
  "Check claims are falsifiable."
 ],
 "objectivesKn": [
  "ಊಹೆಗಳನ್ನು ದಾಖಲೆಗಳಾಗಿ ಬರೆಯಿರಿ.",
  "ಪ್ರಭಾವ, ಅನಿಶ್ಚಿತತೆ ಮತ್ತು ಹಿಂತಿರುಗಿಸಲಾಗದಿರುವಿಕೆ ರೇಟ್ ಮಾಡಿ.",
  "ಹೇಳಿದ ನಿಯಮದಲ್ಲಿ ಶ್ರೇಣೀಕರಿಸಿ.",
  "tie ಗಳನ್ನು ಸ್ಪಷ್ಟವಾಗಿ ಮುರಿಯಿರಿ.",
  "ಹೇಳಿಕೆಗಳು ಸುಳ್ಳೆಂದು ಸಾಬೀತುಪಡಿಸಬಹುದಾದವು ಎಂದು ಪರಿಶೀಲಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Map Assumptions and Resolve the Riskiest One First (Part 1 of 3)",
    "textKn": "ಊಹೆಗಳನ್ನು ನಕ್ಷೆ ಮಾಡಿ ಮತ್ತು ಅತಿ ಅಪಾಯಕಾರಿಯನ್ನು ಮೊದಲು ಪರಿಹರಿಸಿ (ಭಾಗ 1 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 1 of 3: assumption records, falsifiable claims, a risk score from impact, uncertainty and irreversibility, two ranking rules that disagree and tie-breaking. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind mapping assumptions and resolving the riskiest one first (assumption records, risk scores, decisive experiments, verdicts and reprioritisation), not the real software, and the assumptions, ratings, alert counts and costs are made up by the lab and no language model is involved, so no real LLM behaviour is measured. The original main.py was not supplied, and the lesson text presents its Python as a teaching implementation, so the labs are our own implementation of the behaviour described. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 1ನೆಯದು: ಊಹೆ ದಾಖಲೆಗಳು, ಸುಳ್ಳು ಎಂದು ಸಾಬೀತುಪಡಿಸಬಹುದಾದ ಹೇಳಿಕೆಗಳು, ಪ್ರಭಾವ, ಅನಿಶ್ಚಿತತೆ ಮತ್ತು ಹಿಂತಿರುಗಿಸಲಾಗದಿರುವಿಕೆಯಿಂದ ಅಪಾಯ ಅಂಕ, ಒಪ್ಪದ ಎರಡು ಶ್ರೇಣಿ ನಿಯಮಗಳು ಮತ್ತು tie-break. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು ಊಹೆಗಳನ್ನು ನಕ್ಷೆ ಮಾಡಿ ಅತಿ ಅಪಾಯಕಾರಿಯನ್ನು ಮೊದಲು ಪರಿಹರಿಸುವುದು (ಊಹೆ ದಾಖಲೆಗಳು, ಅಪಾಯ ಅಂಕಗಳು, ನಿರ್ಣಾಯಕ ಪ್ರಯೋಗಗಳು, ತೀರ್ಪುಗಳು ಮತ್ತು ಮರುಆದ್ಯತೆ) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಊಹೆಗಳು, ರೇಟಿಂಗ್‌ಗಳು, alert ಎಣಿಕೆಗಳು ಮತ್ತು ವೆಚ್ಚಗಳನ್ನು ಲ್ಯಾಬ್ ಕಲ್ಪಿಸಿದ್ದು ಮತ್ತು ಭಾಷಾ ಮಾದರಿ ಇಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ main.py ಒದಗಿಸಿರಲಿಲ್ಲ, ಮತ್ತು lesson ಪಠ್ಯ ತನ್ನ Python ಅನ್ನು ಬೋಧನಾ ಅನುಷ್ಠಾನ ಎಂದು ಪ್ರಸ್ತುತಪಡಿಸುತ್ತದೆ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ವಿವರಿಸಿದ ವರ್ತನೆಯ ನಮ್ಮದೇ ಅನುಷ್ಠಾನ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "A Roadmap Hides Its Assumptions",
    "textKn": "ರೋಡ್‌ಮ್ಯಾಪ್ ತನ್ನ ಊಹೆಗಳನ್ನು ಮರೆಮಾಡುತ್ತದೆ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "From Belief to Ranked Claim",
    "headingKn": "ನಂಬಿಕೆಯಿಂದ ಶ್ರೇಣೀಕೃತ ಹೇಳಿಕೆಗೆ",
    "bodyEn": "A plan to build an incident assistant quietly assumes that alerts identify the service, that engineers will act on advice and that the tool can run without write access. This part turns those beliefs into records with impact, uncertainty and irreversibility ratings, ranks them under two different rules, shows how a tie is broken and checks whether each claim could be shown wrong. All ratings are the lab's own invented judgements.",
    "bodyKn": "incident assistant ನಿರ್ಮಿಸುವ ಯೋಜನೆ alerts ಸೇವೆ ಗುರುತಿಸುತ್ತವೆ, ಎಂಜಿನಿಯರ್‌ಗಳು ಸಲಹೆಯ ಮೇಲೆ ಕ್ರಿಯೆ ಮಾಡುತ್ತಾರೆ ಮತ್ತು ಉಪಕರಣ write access ಇಲ್ಲದೆ ಓಡಬಲ್ಲದು ಎಂದು ಮೌನವಾಗಿ ಊಹಿಸುತ್ತದೆ. ಈ ಭಾಗ ಆ ನಂಬಿಕೆಗಳನ್ನು ಪ್ರಭಾವ, ಅನಿಶ್ಚಿತತೆ ಮತ್ತು ಹಿಂತಿರುಗಿಸಲಾಗದಿರುವಿಕೆ ರೇಟಿಂಗ್ ಇರುವ ದಾಖಲೆಗಳಾಗಿ ಪರಿವರ್ತಿಸಿ, ಎರಡು ಬೇರೆ ನಿಯಮಗಳಲ್ಲಿ ಶ್ರೇಣೀಕರಿಸಿ, tie ಹೇಗೆ ಮುರಿಯುತ್ತದೆ ತೋರಿಸಿ ಮತ್ತು ಪ್ರತಿ ಹೇಳಿಕೆ ತಪ್ಪು ಎಂದು ತೋರಿಸಬಹುದೇ ಪರಿಶೀಲಿಸುತ್ತದೆ. ಎಲ್ಲಾ ರೇಟಿಂಗ್‌ಗಳು ಲ್ಯಾಬ್‌ನ ಕಲ್ಪಿತ ತೀರ್ಮಾನಗಳು."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Assumption Map",
    "headingKn": "ಊಹೆ ನಕ್ಷೆ",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">hidden beliefs become ranked, testable claims</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">assumption</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">explicit claim</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">ratings</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">impact x unc x irrev</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">rank</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">stated rule</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">test first</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">the riskiest</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">hidden beliefs become ranked, testable claims</text></svg>",
    "captionEn": "Hidden beliefs become records with ratings and a ranking.",
    "captionKn": "ಗುಪ್ತ ನಂಬಿಕೆಗಳು ರೇಟಿಂಗ್ ಮತ್ತು ಶ್ರೇಣಿಯೊಂದಿಗೆ ದಾಖಲೆಗಳಾಗುತ್ತವೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Lab assumption map (ratings invented)",
    "headingKn": "ಲ್ಯಾಬ್ ಊಹೆ ನಕ್ಷೆ (ರೇಟಿಂಗ್ ಕಲ್ಪಿತ)",
    "headers": [
     "Id",
     "Impact, uncertainty, irreversibility",
     "Product"
    ],
    "rows": [
     [
      "A1",
      "5, 4, 3",
      "60"
     ],
     [
      "A3",
      "5, 2, 5",
      "50"
     ],
     [
      "A4",
      "5, 5, 2",
      "50"
     ],
     [
      "A2",
      "4, 4, 2",
      "32"
     ],
     [
      "A5",
      "2, 2, 1",
      "4"
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
    "filename": "am_1.py",
    "headingEn": "Records, scores, ranking and the falsifiability check",
    "headingKn": "ದಾಖಲೆಗಳು, ಅಂಕಗಳು, ಶ್ರೇಣಿ ಮತ್ತು ಸುಳ್ಳೆಂದು ಸಾಬೀತು ಪರಿಶೀಲನೆ",
    "descEn": "Assumption is a frozen record, validate demands integer ratings from 1 to 5 and refuses bools, score_product multiplies and score_sum adds, rank sorts open items with a tie-break on irreversibility and then id, and falsifiable looks for a threshold or condition and for vague words.",
    "descKn": "Assumption ಹೆಪ್ಪುಗಟ್ಟಿದ ದಾಖಲೆ, validate 1 ರಿಂದ 5 ರ ಪೂರ್ಣಾಂಕ ರೇಟಿಂಗ್ ಬಯಸಿ bool ನಿರಾಕರಿಸುತ್ತದೆ, score_product ಗುಣಿಸುತ್ತದೆ ಮತ್ತು score_sum ಕೂಡಿಸುತ್ತದೆ, rank ತೆರೆದ ಐಟಂಗಳನ್ನು irreversibility ಮತ್ತು ನಂತರ id ಮೇಲೆ tie-break ನೊಂದಿಗೆ ವಿಂಗಡಿಸುತ್ತದೆ, ಮತ್ತು falsifiable ಮಿತಿ ಅಥವಾ ಷರತ್ತು ಮತ್ತು ಅಸ್ಪಷ್ಟ ಪದಗಳನ್ನು ಹುಡುಕುತ್ತದೆ.",
    "code": "@dataclass(frozen=True)\nclass Assumption:\n    aid: str\n    claim: str\n    impact: int\n    uncertainty: int\n    irreversibility: int\n    status: str = \"open\"\n\n\ndef validate(a):\n    for n in (\"impact\", \"uncertainty\", \"irreversibility\"):\n        v = getattr(a, n)\n        if not isinstance(v, int) or isinstance(v, bool) or not 1 <= v <= 5:\n            raise ValueError(f\"{a.aid}: {n} must be an integer from 1 to 5\")\n    if not a.claim.strip():\n        raise ValueError(f\"{a.aid}: claim is required\")\n    return a\n\n\ndef falsifiable(claim):\n    c = claim.lower()\n    has_number = bool(re.search(r\"\\d\", c)) or any(w in c for w in (\"at least\", \"at most\", \"fewer\", \"more than\", \"without\"))\n    vague = [w for w in (\"good\", \"useful\", \"intelligent\", \"easy\", \"trust\") if re.search(r\"\\b\" + w + r\"\\b\", c)]\n    return {\"has_threshold_or_condition\": has_number, \"vague_words\": vague}\n\n\ndef score_product(a):\n    return a.impact * a.uncertainty * a.irreversibility\n\n\ndef score_sum(a):\n    return a.impact + a.uncertainty + a.irreversibility\n\n\ndef rank(items, key):\n    return [a.aid for a in sorted((x for x in items if x.status == \"open\"), key=lambda a: (-key(a), -a.irreversibility, a.aid))]"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "am_1.py",
    "headingEn": "main(): five experiments",
    "headingKn": "main(): ಐದು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() scores five assumptions, ranks them two ways, breaks a three-way tie, checks four claims for falsifiability and rejects five bad records.",
    "descKn": "main() ಐದು ಊಹೆಗಳಿಗೆ ಅಂಕ ನೀಡಿ, ಎರಡು ರೀತಿ ಶ್ರೇಣೀಕರಿಸಿ, ಮೂರು-ಮಾರ್ಗ tie ಮುರಿದು, ನಾಲ್ಕು ಹೇಳಿಕೆಗಳನ್ನು ಪರಿಶೀಲಿಸಿ ಮತ್ತು ಐದು ಕೆಟ್ಟ ದಾಖಲೆ ತಿರಸ್ಕರಿಸುತ್ತದೆ.",
    "code": "def main():\n    section(\"1. Genuinely running: the assumption map and its scores (ratings are invented)\")\n    for a in MAP:\n        validate(a)\n        print(f\"{a.aid} impact={a.impact} uncertainty={a.uncertainty} irreversibility={a.irreversibility} product={score_product(a):3} sum={score_sum(a):2}  {a.claim[:60]}\")\n    print(\"each hidden belief became a record with three ratings, and the ratings are the team's own judgement on a 1 to 5 scale, not measurements\")\n\n    section(\"2. Genuinely running: ranking by product and by sum\")\n    print(\"by product:\", rank(MAP, score_product))\n    print(\"by sum    :\", rank(MAP, score_sum))\n    print(\"the rules disagree about the top item: the product put A1 first with 60 against 50 for A3 and A4, while the sum scored A1, A3 and A4 all at 12 and the tie-break on irreversibility put A3 first; A2 and A5 kept their places in both\")\n    print(\"the rule is a choice the team makes and should state, since the same ratings ranked differently; the lab uses the product so that one low rating pulls a risk down\")\n\n    section(\"3. Genuinely running: ties are broken by irreversibility\")\n    tie = [Assumption(\"T1\", \"Claim one at least 3\", 4, 3, 2), Assumption(\"T2\", \"Claim two at least 3\", 3, 4, 2), Assumption(\"T3\", \"Claim three at least 3\", 2, 3, 4)]\n    print(\"products:\", {a.aid: score_product(a) for a in tie})\n    print(\"ranked:\", rank(tie, score_product))\n    print(\"three assumptions scored 24 each and the order came from the tie-break, which puts the least reversible one first and then falls back to the id; without a stated tie-break the order would depend on how the list was written\")\n\n    section(\"4. Genuinely measuring: is the claim falsifiable\")\n    for c in (\"The assistant is intelligent and useful\", \"At least 90 percent of alerts name the failing service\", \"Engineers trust the tool\", \"The tool runs without write permission to production\"):\n        print(f\"{c[:56]:58} {falsifiable(c)}\")\n    print(\"a claim with a threshold or a condition can be shown wrong by an observation, and one made of words like intelligent and trust cannot; the check is a keyword heuristic, so a claim like 'works well enough' would also slip through without being flagged\")\n\n    section(\"5. Genuinely running: invalid ratings are rejected\")\n    for label, kw in ((\"rating 0\", dict(impact=0)), (\"rating 6\", dict(uncertainty=6)), (\"float rating\", dict(irreversibility=2.5)), (\"bool rating\", dict(impact=True)), (\"blank claim\", dict(claim=\" \"))):\n        base = dict(aid=\"X\", claim=\"c\", impact=3, uncertainty=3, irreversibility=3)\n        base.update(kw)\n        try:\n            validate(Assumption(**base))\n            print(f\"{label:14} accepted\")\n        except ValueError as e:\n            print(f\"{label:14} rejected: {e}\")\n    print(\"ratings must be whole numbers from 1 to 5, and a bool was refused explicitly because True would otherwise pass as 1\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: the assumption map and its scores (ratings are invented) ---\nA1 impact=5 uncertainty=4 irreversibility=3 product= 60 sum=12  At least 90 percent of alerts contain enough fields to ident\nA2 impact=4 uncertainty=4 irreversibility=2 product= 32 sum=10  Engineers will trust and act on the recommendations\nA3 impact=5 uncertainty=2 irreversibility=5 product= 50 sum=12  The assistant can run without write permission to production\nA4 impact=5 uncertainty=5 irreversibility=2 product= 50 sum=12  Recommendations cut triage time to under two minutes\nA5 impact=2 uncertainty=2 irreversibility=1 product=  4 sum= 5  The dashboard framework supports the needed charts\neach hidden belief became a record with three ratings, and the ratings are the team's own judgement on a 1 to 5 scale, not measurements\n\n--- 2. Genuinely running: ranking by product and by sum ---\nby product: ['A1', 'A3', 'A4', 'A2', 'A5']\nby sum    : ['A3', 'A1', 'A4', 'A2', 'A5']\nthe rules disagree about the top item: the product put A1 first with 60 against 50 for A3 and A4, while the sum scored A1, A3 and A4 all at 12 and the tie-break on irreversibility put A3 first; A2 and A5 kept their places in both\nthe rule is a choice the team makes and should state, since the same ratings ranked differently; the lab uses the product so that one low rating pulls a risk down\n\n--- 3. Genuinely running: ties are broken by irreversibility ---\nproducts: {'T1': 24, 'T2': 24, 'T3': 24}\nranked: ['T3', 'T1', 'T2']\nthree assumptions scored 24 each and the order came from the tie-break, which puts the least reversible one first and then falls back to the id; without a stated tie-break the order would depend on how the list was written\n\n--- 4. Genuinely measuring: is the claim falsifiable ---\nThe assistant is intelligent and useful                    {'has_threshold_or_condition': False, 'vague_words': ['useful', 'intelligent']}\nAt least 90 percent of alerts name the failing service     {'has_threshold_or_condition': True, 'vague_words': []}\nEngineers trust the tool                                   {'has_threshold_or_condition': False, 'vague_words': ['trust']}\nThe tool runs without write permission to production       {'has_threshold_or_condition': True, 'vague_words': []}\na claim with a threshold or a condition can be shown wrong by an observation, and one made of words like intelligent and trust cannot; the check is a keyword heuristic, so a claim like 'works well enough' would also slip through without being flagged\n\n--- 5. Genuinely running: invalid ratings are rejected ---\nrating 0       rejected: X: impact must be an integer from 1 to 5\nrating 6       rejected: X: uncertainty must be an integer from 1 to 5\nfloat rating   rejected: X: irreversibility must be an integer from 1 to 5\nbool rating    rejected: X: impact must be an integer from 1 to 5\nblank claim    rejected: X: claim is required\nratings must be whole numbers from 1 to 5, and a bool was refused explicitly because True would otherwise pass as 1"
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
    "headingEn": "Genuinely Found: Product and Sum Disagreed About the Top Item",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Product ಮತ್ತು Sum ಮೇಲ್ಭಾಗದ ಐಟಂ ಬಗ್ಗೆ ಒಪ್ಪಲಿಲ್ಲ",
    "bodyEn": "Section 1: the products were A1 60, A3 50, A4 50, A2 32 and A5 4. Section 2: ranking by product gave A1, A3, A4, A2, A5 and by sum gave A3, A1, A4, A2, A5, because the sum scored A1, A3 and A4 all at 12 and the irreversibility tie-break put A3 first. Section 3: three assumptions scoring 24 each were ordered T3, T1, T2 by irreversibility and then id.",
    "bodyKn": "ವಿಭಾಗ 1: products A1 60, A3 50, A4 50, A2 32 ಮತ್ತು A5 4. ವಿಭಾಗ 2: product ಮೂಲಕ ಶ್ರೇಣಿ A1, A3, A4, A2, A5 ಮತ್ತು sum ಮೂಲಕ A3, A1, A4, A2, A5 ನೀಡಿತು, ಏಕೆಂದರೆ sum A1, A3 ಮತ್ತು A4 ಎಲ್ಲವನ್ನೂ 12 ಕ್ಕೆ ಅಂಕ ನೀಡಿ irreversibility tie-break A3 ಅನ್ನು ಮೊದಲಿಟ್ಟಿತು. ವಿಭಾಗ 3: ತಲಾ 24 ಅಂಕದ ಮೂರು ಊಹೆಗಳು irreversibility ಮತ್ತು ನಂತರ id ಮೂಲಕ T3, T1, T2 ಕ್ರಮದಲ್ಲಿ ಬಂದವು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Falsifiable Wording and Rating Validation",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಸುಳ್ಳೆಂದು ಸಾಬೀತುಪಡಿಸಬಹುದಾದ ಪದಗಳು ಮತ್ತು ರೇಟಿಂಗ್ ಮಾನ್ಯೀಕರಣ",
    "bodyEn": "Section 4: \"intelligent and useful\" and \"Engineers trust the tool\" had no threshold or condition and carried vague words, while \"At least 90 percent...\" and \"runs without write permission...\" did have one. Section 5: ratings of 0, 6, 2.5 and True and a blank claim were each rejected, and the lab refuses a bool explicitly because True would otherwise pass as 1.",
    "bodyKn": "ವಿಭಾಗ 4: \"intelligent and useful\" ಮತ್ತು \"Engineers trust the tool\" ಗೆ ಮಿತಿ ಅಥವಾ ಷರತ್ತು ಇರಲಿಲ್ಲ ಮತ್ತು ಅಸ್ಪಷ್ಟ ಪದಗಳಿದ್ದವು, \"At least 90 percent...\" ಮತ್ತು \"runs without write permission...\" ಗೆ ಇತ್ತು. ವಿಭಾಗ 5: 0, 6, 2.5 ಮತ್ತು True ರೇಟಿಂಗ್ ಹಾಗೂ ಖಾಲಿ ಹೇಳಿಕೆ ಪ್ರತಿಯೊಂದೂ ತಿರಸ್ಕೃತವಾದವು, ಮತ್ತು ಲ್ಯಾಬ್ bool ಅನ್ನು ಸ್ಪಷ್ಟವಾಗಿ ನಿರಾಕರಿಸುತ್ತದೆ ಏಕೆಂದರೆ True ಇಲ್ಲದಿದ್ದರೆ 1 ಆಗಿ ಪಾಸ್ ಆಗುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "The order in which assumptions are tested decides how much is built on something that later turns out false, so the ranking rule must be written down.",
    "bodyKn": "ಊಹೆಗಳನ್ನು ಪರೀಕ್ಷಿಸುವ ಕ್ರಮ ನಂತರ ಸುಳ್ಳೆಂದು ತಿಳಿಯುವ ವಿಷಯದ ಮೇಲೆ ಎಷ್ಟು ನಿರ್ಮಿಸಲಾಗುತ್ತದೆ ಎಂದು ನಿರ್ಧರಿಸುತ್ತದೆ, ಆದ್ದರಿಂದ ಶ್ರೇಣಿ ನಿಯಮ ಬರೆದಿಡಬೇಕು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"the scores are measurements.\" They are judgements, and two rules ranked the same ratings differently.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಅಂಕಗಳು ಅಳತೆಗಳು.\" ಅವು ತೀರ್ಮಾನಗಳು, ಮತ್ತು ಎರಡು ನಿಯಮಗಳು ಅದೇ ರೇಟಿಂಗ್‌ಗಳನ್ನು ಬೇರೆ ಶ್ರೇಣೀಕರಿಸಿದವು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Assumption: a belief the plan depends on. Falsifiable: an observation could show it wrong. Irreversibility: how hard it is to undo being wrong. Tie-break: the rule that orders equal scores.",
    "bodyKn": "Assumption: ಯೋಜನೆ ಅವಲಂಬಿಸಿರುವ ನಂಬಿಕೆ. Falsifiable: ಒಂದು ವೀಕ್ಷಣೆ ಅದು ತಪ್ಪು ಎಂದು ತೋರಿಸಬಹುದು. Irreversibility: ತಪ್ಪಾಗಿರುವುದನ್ನು ರದ್ದುಗೊಳಿಸುವುದು ಎಷ್ಟು ಕಠಿಣ. Tie-break: ಸಮಾನ ಅಂಕಗಳನ್ನು ಕ್ರಮಗೊಳಿಸುವ ನಿಯಮ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) Beliefs became records with three ratings. 2) Product and sum disagreed on the top item. 3) Ties were broken by irreversibility. 4) Vague claims were flagged. 5) Bad ratings were rejected.",
    "bodyKn": "1) ನಂಬಿಕೆಗಳು ಮೂರು ರೇಟಿಂಗ್ ಇರುವ ದಾಖಲೆಗಳಾದವು. 2) Product ಮತ್ತು sum ಮೇಲ್ಭಾಗದ ಐಟಂ ಬಗ್ಗೆ ಒಪ್ಪಲಿಲ್ಲ. 3) tie ಗಳನ್ನು irreversibility ಮೂಲಕ ಮುರಿಯಲಾಯಿತು. 4) ಅಸ್ಪಷ್ಟ ಹೇಳಿಕೆಗಳು ಗುರುತಾದವು. 5) ಕೆಟ್ಟ ರೇಟಿಂಗ್‌ಗಳು ತಿರಸ್ಕೃತವಾದವು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "Which assumption ranked first by product?",
      "qKn": "product ಮೂಲಕ ಯಾವ ಊಹೆ ಮೊದಲು ಬಂತು?",
      "opts": [
       "A1",
       "A3",
       "A4",
       "A2"
      ],
      "optsKn": [
       "A1",
       "A3",
       "A4",
       "A2"
      ],
      "correct": 0
     },
     {
      "q": "Which ranked first by sum?",
      "qKn": "sum ಮೂಲಕ ಯಾವುದು ಮೊದಲು ಬಂತು?",
      "opts": [
       "A3",
       "A1",
       "A4",
       "A5"
      ],
      "optsKn": [
       "A3",
       "A1",
       "A4",
       "A5"
      ],
      "correct": 0
     },
     {
      "q": "What decided the order of the three tied assumptions?",
      "qKn": "tie ಆದ ಮೂರು ಊಹೆಗಳ ಕ್ರಮ ಏನು ನಿರ್ಧರಿಸಿತು?",
      "opts": [
       "Irreversibility, then id",
       "List order",
       "Random choice",
       "Impact only"
      ],
      "optsKn": [
       "Irreversibility, ನಂತರ id",
       "ಪಟ್ಟಿ ಕ್ರಮ",
       "ಯಾದೃಚ್ಛಿಕ ಆಯ್ಕೆ",
       "ಪ್ರಭಾವ ಮಾತ್ರ"
      ],
      "correct": 0
     },
     {
      "q": "Why was True refused as a rating?",
      "qKn": "True ಅನ್ನು ರೇಟಿಂಗ್ ಆಗಿ ಏಕೆ ನಿರಾಕರಿಸಲಾಯಿತು?",
      "opts": [
       "It would pass as the integer 1",
       "It is too large",
       "It is negative",
       "It is a string"
      ],
      "optsKn": [
       "ಅದು ಪೂರ್ಣಾಂಕ 1 ಆಗಿ ಪಾಸ್ ಆಗುತ್ತದೆ",
       "ಅದು ತುಂಬಾ ದೊಡ್ಡದು",
       "ಅದು ಋಣಾತ್ಮಕ",
       "ಅದು ಸ್ಟ್ರಿಂಗ್"
      ],
      "correct": 0
     },
     {
      "q": "Are the 1 to 5 ratings measurements?",
      "qKn": "1 ರಿಂದ 5 ರೇಟಿಂಗ್‌ಗಳು ಅಳತೆಗಳೇ?",
      "opts": [
       "No, they are the team's judgement",
       "Yes",
       "Only impact",
       "Only on Windows"
      ],
      "optsKn": [
       "ಇಲ್ಲ, ಅವು ತಂಡದ ತೀರ್ಮಾನ",
       "ಹೌದು",
       "ಪ್ರಭಾವ ಮಾತ್ರ",
       "Windows ನಲ್ಲಿ ಮಾತ್ರ"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
