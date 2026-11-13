module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6af75a0777fff3943254255c",
 "order": 0,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Write Specifications That Preserve Judgment (Part 1 of 3) — Surfaces, Lint and Decision Modes",
 "titleKn": "ವಿವೇಚನೆ ಉಳಿಸುವ ವಿಶೇಷಣಗಳನ್ನು ಬರೆಯಿರಿ (ಭಾಗ 1 / 3) — ಮೇಲ್ಮೈಗಳು, Lint ಮತ್ತು ನಿರ್ಧಾರ ವಿಧಾನಗಳು",
 "desc": "Model a specification as six surfaces, lint it for both failure modes and assign decisions a locked, bounded or delegated mode.",
 "descKn": "ವಿಶೇಷಣವನ್ನು ಆರು ಮೇಲ್ಮೈಗಳಾಗಿ ಮಾದರಿ ಮಾಡಿ, ಎರಡೂ ವೈಫಲ್ಯ ರೂಪಗಳಿಗೆ lint ಮಾಡಿ ಮತ್ತು ನಿರ್ಧಾರಗಳಿಗೆ ಲಾಕ್, ಬೌಂಡೆಡ್ ಅಥವಾ ಡೆಲಿಗೇಟೆಡ್ ವಿಧಾನ ನೀಡಿ.",
 "objectives": [
  "Name the six surfaces.",
  "Lint for under- and over-specification.",
  "Pick a decision mode.",
  "Validate the decision table.",
  "Catch a risky delegation."
 ],
 "objectivesKn": [
  "ಆರು ಮೇಲ್ಮೈಗಳನ್ನು ಹೆಸರಿಸಿ.",
  "ಕಡಿಮೆ ಮತ್ತು ಹೆಚ್ಚು ವಿಶೇಷಣಕ್ಕೆ lint ಮಾಡಿ.",
  "ನಿರ್ಧಾರ ವಿಧಾನ ಆರಿಸಿ.",
  "ನಿರ್ಧಾರ ಕೋಷ್ಟಕ ಮಾನ್ಯಗೊಳಿಸಿ.",
  "ಅಪಾಯಕಾರಿ ಡೆಲಿಗೇಶನ್ ಹಿಡಿಯಿರಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Write Specifications That Preserve Judgment (Part 1 of 3)",
    "textKn": "ವಿವೇಚನೆ ಉಳಿಸುವ ವಿಶೇಷಣಗಳನ್ನು ಬರೆಯಿರಿ (ಭಾಗ 1 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 1 of 3: the six specification surfaces, a lint for under- and over-specification, locked, bounded and delegated decision modes and a schema-valid decision that is still unacceptable. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind writing specifications that preserve judgment (six surfaces, decision modes, executable examples, proof matching and approval boundaries), not the real software, and the specifications, support articles and implementations are made up by the lab and no language model is involved, so no real LLM behaviour is measured. The original code/main.py was not supplied, and the lesson text only names its output artifact, so the labs are our own implementation of the behaviour described. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 1ನೆಯದು: ಆರು ವಿಶೇಷಣ ಮೇಲ್ಮೈಗಳು, ಕಡಿಮೆ ಮತ್ತು ಹೆಚ್ಚು ವಿಶೇಷಣಕ್ಕೆ lint, ಲಾಕ್, ಬೌಂಡೆಡ್ ಮತ್ತು ಡೆಲಿಗೇಟೆಡ್ ನಿರ್ಧಾರ ವಿಧಾನಗಳು ಮತ್ತು ಸ್ಕೀಮಾ-ಮಾನ್ಯ ಆದರೂ ಸ್ವೀಕಾರಾರ್ಹವಲ್ಲದ ನಿರ್ಧಾರ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು ವಿವೇಚನೆ ಉಳಿಸುವ ವಿಶೇಷಣಗಳನ್ನು ಬರೆಯುವುದು (ಆರು ಮೇಲ್ಮೈಗಳು, ನಿರ್ಧಾರ ವಿಧಾನಗಳು, ಕಾರ್ಯಗತ ಉದಾಹರಣೆಗಳು, ಪುರಾವೆ ಹೊಂದಾಣಿಕೆ ಮತ್ತು ಅನುಮೋದನೆ ಗಡಿಗಳು) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ವಿಶೇಷಣಗಳು, ಬೆಂಬಲ ಲೇಖನಗಳು ಮತ್ತು ಅನುಷ್ಠಾನಗಳನ್ನು ಲ್ಯಾಬ್ ಕಲ್ಪಿಸಿದ್ದು ಮತ್ತು ಭಾಷಾ ಮಾದರಿ ಇಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ code/main.py ಒದಗಿಸಿರಲಿಲ್ಲ, ಮತ್ತು lesson ಪಠ್ಯ ಅದರ ಔಟ್‌ಪುಟ್ ಕಲಾಕೃತಿಯನ್ನು ಮಾತ್ರ ಹೆಸರಿಸುತ್ತದೆ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ವಿವರಿಸಿದ ವರ್ತನೆಯ ನಮ್ಮದೇ ಅನುಷ್ಠಾನ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Too Little and Too Much Both Fail",
    "textKn": "ತುಂಬಾ ಕಡಿಮೆ ಮತ್ತು ತುಂಬಾ ಹೆಚ್ಚು ಎರಡೂ ವಿಫಲ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Say What Must Hold and Leave the Rest",
    "headingKn": "ಏನು ಉಳಿಯಬೇಕು ಹೇಳಿ, ಉಳಿದದ್ದನ್ನು ಬಿಡಿ",
    "bodyEn": "\"Make the search system better\" leaves the agent to invent every requirement, and \"create exactly four functions with these names\" leaves it no room to choose a simpler design. This part models a specification as six surfaces, lints wording for both failures, assigns each decision a locked, bounded or delegated mode from its reversibility and consequence, and shows a decision table that passes structural validation while handing a production write to the agent.",
    "bodyKn": "\"Make the search system better\" ಪ್ರತಿ ಅಗತ್ಯವನ್ನೂ agent ಗೆ ಕಲ್ಪಿಸಲು ಬಿಡುತ್ತದೆ, ಮತ್ತು \"create exactly four functions with these names\" ಸರಳ ವಿನ್ಯಾಸ ಆರಿಸಲು ಅವಕಾಶ ನೀಡುವುದಿಲ್ಲ. ಈ ಭಾಗ ವಿಶೇಷಣವನ್ನು ಆರು ಮೇಲ್ಮೈಗಳಾಗಿ ಮಾದರಿ ಮಾಡಿ, ಎರಡೂ ವೈಫಲ್ಯಗಳಿಗೆ ಪದಗಳನ್ನು lint ಮಾಡಿ, ಪ್ರತಿ ನಿರ್ಧಾರಕ್ಕೆ ಅದರ ಹಿಂತಿರುಗಿಸುವಿಕೆ ಮತ್ತು ಪರಿಣಾಮದಿಂದ ಲಾಕ್, ಬೌಂಡೆಡ್ ಅಥವಾ ಡೆಲಿಗೇಟೆಡ್ ವಿಧಾನ ನೀಡಿ, ಮತ್ತು ರಚನಾತ್ಮಕ ಮಾನ್ಯೀಕರಣ ಪಾಸ್ ಆಗಿ production ಬರಹವನ್ನು agent ಗೆ ಹಸ್ತಾಂತರಿಸುವ ನಿರ್ಧಾರ ಕೋಷ್ಟಕ ತೋರಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Six Specification Surfaces",
    "headingKn": "ಆರು ವಿಶೇಷಣ ಮೇಲ್ಮೈಗಳು",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">control outcomes and limits, not every step</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">outcome</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">observable</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">invariants</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">never broken</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">decisions</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">locked/bounded/delegated</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">evidence</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">proves the claim</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">control outcomes and limits, not every step</text></svg>",
    "captionEn": "A specification controls outcomes, limits and evidence, not every step.",
    "captionKn": "ವಿಶೇಷಣ ಫಲಿತಾಂಶ, ಮಿತಿ ಮತ್ತು ಸಾಕ್ಷ್ಯ ನಿಯಂತ್ರಿಸುತ್ತದೆ, ಪ್ರತಿ ಹಂತವನ್ನಲ್ಲ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Decision modes in the lab",
    "headingKn": "ಲ್ಯಾಬ್‌ನಲ್ಲಿ ನಿರ್ಧಾರ ವಿಧಾನಗಳು",
    "headers": [
     "Case",
     "Mode"
    ],
    "rows": [
     [
      "reversible, low consequence",
      "delegated"
     ],
     [
      "reversible, medium consequence",
      "bounded"
     ],
     [
      "high consequence or irreversible",
      "locked"
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
    "filename": "sp_1.py",
    "headingEn": "Spec, lint, modes and decision validation",
    "headingKn": "ವಿಶೇಷಣ, lint, ವಿಧಾನಗಳು ಮತ್ತು ನಿರ್ಧಾರ ಮಾನ್ಯೀಕರಣ",
    "descEn": "Spec holds the six surfaces, missing_surfaces lists empty ones, lint_text matches under- and over-specified wording, suggest_mode maps reversibility and consequence to a mode and validate_decisions refuses unknown modes and bounded decisions without bounds.",
    "descKn": "Spec ಆರು ಮೇಲ್ಮೈ ಹೊಂದಿದೆ, missing_surfaces ಖಾಲಿಯಾದವನ್ನು ಪಟ್ಟಿ ಮಾಡುತ್ತದೆ, lint_text ಕಡಿಮೆ ಮತ್ತು ಹೆಚ್ಚು ವಿಶೇಷಣ ಪದಗಳನ್ನು ಹೊಂದಿಸುತ್ತದೆ, suggest_mode ಹಿಂತಿರುಗಿಸುವಿಕೆ ಮತ್ತು ಪರಿಣಾಮವನ್ನು ವಿಧಾನಕ್ಕೆ ಮ್ಯಾಪ್ ಮಾಡುತ್ತದೆ ಮತ್ತು validate_decisions ಅಜ್ಞಾತ ವಿಧಾನ ಮತ್ತು ಮಿತಿ ಇಲ್ಲದ bounded ನಿರ್ಧಾರ ನಿರಾಕರಿಸುತ್ತದೆ.",
    "code": "@dataclass\nclass Spec:\n    outcome: str = \"\"\n    invariants: list = field(default_factory=list)\n    examples: list = field(default_factory=list)\n    non_goals: list = field(default_factory=list)\n    decisions: dict = field(default_factory=dict)\n    evidence: list = field(default_factory=list)\n\n\ndef missing_surfaces(s):\n    return [k for k in SURFACES if not getattr(s, k)]\n\n\ndef lint_text(text):\n    t = text.lower()\n    findings = []\n    if not re.search(r\"\\d|within|at most|at least|never|without\", t):\n        findings.append(\"no measurable bound or constraint\")\n    if re.search(r\"\\bbetter\\b|\\bimprove\\b|\\bnicer\\b\", t):\n        findings.append(\"aspirational word\")\n    for pat, name in ((r\"\\bexactly (\\w+ )?(functions?|classes|files|lines)\\b\", \"fixed code structure\"), (r\"\\bvariable names?\\b\", \"names prescribed\"), (r\"\\bin this order\\b\", \"step order prescribed\"), (r\"\\bnever deviate\\b\", \"no room for judgment\")):\n        if re.search(pat, t):\n            findings.append(name)\n    return findings\n\n\ndef suggest_mode(reversible, consequence):\n    if consequence == \"high\" or not reversible:\n        return \"locked\"\n    if consequence == \"medium\":\n        return \"bounded\"\n    return \"delegated\"\n\n\ndef validate_decisions(decisions):\n    errors = []\n    for name, d in decisions.items():\n        if d.get(\"mode\") not in MODES:\n            errors.append(f\"{name}: unknown mode\")\n        if d.get(\"mode\") == \"bounded\" and not d.get(\"bounds\"):\n            errors.append(f\"{name}: bounded decision needs bounds\")\n    return errors"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "sp_1.py",
    "headingEn": "main(): five experiments",
    "headingKn": "main(): ಐದು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() lints three requests, lists missing surfaces for a full and a thin spec, assigns modes to five decisions, validates a decision table and flags a delegated production write.",
    "descKn": "main() ಮೂರು ವಿನಂತಿಗಳನ್ನು lint ಮಾಡಿ, ಪೂರ್ಣ ಮತ್ತು ತೆಳು ವಿಶೇಷಣದ ಕಾಣೆಯಾದ ಮೇಲ್ಮೈ ಪಟ್ಟಿ ಮಾಡಿ, ಐದು ನಿರ್ಧಾರಗಳಿಗೆ ವಿಧಾನ ನೀಡಿ, ನಿರ್ಧಾರ ಕೋಷ್ಟಕ ಮಾನ್ಯಗೊಳಿಸಿ ಮತ್ತು ಡೆಲಿಗೇಟ್ ಮಾಡಿದ production ಬರಹ ಗುರುತಿಸುತ್ತದೆ.",
    "code": "def main():\n    section(\"1. Genuinely measuring: underspecified, overspecified and balanced wording\")\n    texts = [\"Make the search system better\", \"Create exactly four functions, use these variable names, write the algorithm in this order and never deviate\",\n             \"Return relevant articles within two seconds, never expose private customer data, keep the response format. The agent chooses the algorithm but cannot write to production\"]\n    for t in texts:\n        print(f\"{t[:62]:64} -> {lint_text(t)}\")\n    print(\"the first has no bound and an aspirational word, the second prescribes structure, names and order and leaves no room, and the third states outcomes, limits and what the agent may choose; the lint is a pattern match on wording and the patterns are the lab's own\")\n\n    section(\"2. Genuinely running: the six surfaces and what is missing\")\n    full = Spec(\"return relevant articles within two seconds\", [\"no private data in responses\"], [{\"kind\": \"normal\", \"in\": \"refund policy\", \"out\": \"article\"}], [\"no ranking model changes\"],\n                {\"index_choice\": {\"mode\": \"delegated\"}, \"response_format\": {\"mode\": \"locked\"}}, [\"tests pass\", \"latency under two seconds on the sample\"])\n    thin = Spec(outcome=\"make search better\")\n    print(\"full spec missing:\", missing_surfaces(full))\n    print(\"thin spec missing:\", missing_surfaces(thin))\n    print(\"a specification with only an outcome leaves five surfaces for the agent to invent, which is the underspecified failure in structured form\")\n\n    section(\"3. Genuinely running: choosing a decision mode from reversibility and consequence\")\n    for name, rev, cons in ((\"internal data structure\", True, \"low\"), (\"cache size\", True, \"medium\"), (\"response schema\", True, \"high\"), (\"delete old records\", False, \"low\"), (\"write to production\", False, \"high\")):\n        print(f\"{name:26} reversible={rev!s:5} consequence={cons:6} -> {suggest_mode(rev, cons)}\")\n    print(\"only cheap, reversible, low-consequence choices were delegated; an irreversible choice became locked even at low consequence; the mapping is a conservative rule in this lab and a team would set its own\")\n\n    section(\"4. Genuinely running: validating the decision table\")\n    print(\"valid:\", validate_decisions(full.decisions))\n    print(\"bad :\", validate_decisions({\"cache\": {\"mode\": \"bounded\"}, \"index\": {\"mode\": \"free\"}}))\n    print(\"a bounded decision with no bounds and an unknown mode were both rejected, since a bound that is not written down cannot be checked\")\n\n    section(\"5. Genuinely running: schema-valid and still unacceptable\")\n    risky = {\"production_write\": {\"mode\": \"delegated\"}}\n    print(\"schema errors:\", validate_decisions(risky))\n    high_risk = {\"production_write\", \"delete_data\", \"change_permissions\"}\n    print(\"semantic findings:\", [k for k, v in risky.items() if k in high_risk and v[\"mode\"] == \"delegated\"])\n    print(\"the decision table passed structural validation and still delegated a production write to the agent, which only a risk check against a list of high-risk decisions catches; that list is the lab's own and incomplete by nature\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely measuring: underspecified, overspecified and balanced wording ---\nMake the search system better                                    -> ['no measurable bound or constraint', 'aspirational word']\nCreate exactly four functions, use these variable names, write   -> ['fixed code structure', 'names prescribed', 'step order prescribed', 'no room for judgment']\nReturn relevant articles within two seconds, never expose priv   -> []\nthe first has no bound and an aspirational word, the second prescribes structure, names and order and leaves no room, and the third states outcomes, limits and what the agent may choose; the lint is a pattern match on wording and the patterns are the lab's own\n\n--- 2. Genuinely running: the six surfaces and what is missing ---\nfull spec missing: []\nthin spec missing: ['invariants', 'examples', 'non_goals', 'decisions', 'evidence']\na specification with only an outcome leaves five surfaces for the agent to invent, which is the underspecified failure in structured form\n\n--- 3. Genuinely running: choosing a decision mode from reversibility and consequence ---\ninternal data structure    reversible=True  consequence=low    -> delegated\ncache size                 reversible=True  consequence=medium -> bounded\nresponse schema            reversible=True  consequence=high   -> locked\ndelete old records         reversible=False consequence=low    -> locked\nwrite to production        reversible=False consequence=high   -> locked\nonly cheap, reversible, low-consequence choices were delegated; an irreversible choice became locked even at low consequence; the mapping is a conservative rule in this lab and a team would set its own\n\n--- 4. Genuinely running: validating the decision table ---\nvalid: []\nbad : ['cache: bounded decision needs bounds', 'index: unknown mode']\na bounded decision with no bounds and an unknown mode were both rejected, since a bound that is not written down cannot be checked\n\n--- 5. Genuinely running: schema-valid and still unacceptable ---\nschema errors: []\nsemantic findings: ['production_write']\nthe decision table passed structural validation and still delegated a production write to the agent, which only a risk check against a list of high-risk decisions catches; that list is the lab's own and incomplete by nature"
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
    "headingEn": "Genuinely Found: The Lint Caught Both Extremes",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Lint ಎರಡೂ ಅತಿರೇಕಗಳನ್ನು ಹಿಡಿಯಿತು",
    "bodyEn": "Section 1: \"Make the search system better\" got no measurable bound and an aspirational word, the exact-four-functions request got fixed code structure, names prescribed, step order prescribed and no room for judgment, and the balanced request got no findings. Section 2: the full spec was missing nothing and the thin spec was missing invariants, examples, non-goals, decisions and evidence.",
    "bodyKn": "ವಿಭಾಗ 1: \"Make the search system better\" ಗೆ ಅಳೆಯಬಹುದಾದ ಮಿತಿ ಇಲ್ಲ ಮತ್ತು ಆಕಾಂಕ್ಷೆಯ ಪದ ಸಿಕ್ಕಿತು, ನಿಖರ-ನಾಲ್ಕು-ಕಾರ್ಯಗಳ ವಿನಂತಿಗೆ ನಿಗದಿತ ಕೋಡ್ ರಚನೆ, ಹೆಸರುಗಳ ನಿರ್ದೇಶನ, ಹಂತ ಕ್ರಮ ನಿರ್ದೇಶನ ಮತ್ತು ವಿವೇಚನೆಗೆ ಅವಕಾಶವಿಲ್ಲ ಸಿಕ್ಕಿತು, ಮತ್ತು ಸಮತೋಲಿತ ವಿನಂತಿಗೆ ಯಾವುದೇ ಶೋಧನೆ ಸಿಗಲಿಲ್ಲ. ವಿಭಾಗ 2: ಪೂರ್ಣ ವಿಶೇಷಣದಲ್ಲಿ ಏನೂ ಕಾಣೆಯಾಗಿರಲಿಲ್ಲ ಮತ್ತು ತೆಳು ವಿಶೇಷಣದಲ್ಲಿ invariants, examples, non-goals, decisions ಮತ್ತು evidence ಕಾಣೆಯಾಗಿದ್ದವು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Modes Followed Reversibility and a Schema-Valid Table Still Delegated a Production Write",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ವಿಧಾನಗಳು ಹಿಂತಿರುಗಿಸುವಿಕೆ ಅನುಸರಿಸಿದವು ಮತ್ತು ಸ್ಕೀಮಾ-ಮಾನ್ಯ ಕೋಷ್ಟಕ ಇನ್ನೂ production ಬರಹ ಡೆಲಿಗೇಟ್ ಮಾಡಿತು",
    "bodyEn": "Section 3: the internal data structure was delegated, cache size bounded, response schema locked, deleting old records locked because it is irreversible, and the production write locked. Section 4: a bounded decision without bounds and an unknown mode \"free\" were rejected. Section 5: a table that delegated production_write had no schema errors, and the risk check flagged it.",
    "bodyKn": "ವಿಭಾಗ 3: ಆಂತರಿಕ ಡೇಟಾ ರಚನೆ ಡೆಲಿಗೇಟ್, cache ಗಾತ್ರ bounded, response schema ಲಾಕ್, ಹಳೆಯ ದಾಖಲೆ ಅಳಿಸುವುದು ಹಿಂತಿರುಗಿಸಲಾಗದ ಕಾರಣ ಲಾಕ್, ಮತ್ತು production ಬರಹ ಲಾಕ್ ಆದವು. ವಿಭಾಗ 4: ಮಿತಿ ಇಲ್ಲದ bounded ನಿರ್ಧಾರ ಮತ್ತು ಅಜ್ಞಾತ ವಿಧಾನ \"free\" ತಿರಸ್ಕೃತವಾದವು. ವಿಭಾಗ 5: production_write ಡೆಲಿಗೇಟ್ ಮಾಡಿದ ಕೋಷ್ಟಕಕ್ಕೆ ಸ್ಕೀಮಾ ದೋಷ ಇರಲಿಲ್ಲ, ಮತ್ತು ಅಪಾಯ ಪರಿಶೀಲನೆ ಅದನ್ನು ಗುರುತಿಸಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "Agents need freedom where mistakes are cheap and limits where they are not, and a specification is the place where that line is drawn.",
    "bodyKn": "ತಪ್ಪುಗಳು ಅಗ್ಗವಾದಲ್ಲಿ agents ಗೆ ಸ್ವಾತಂತ್ರ್ಯ ಮತ್ತು ಅಲ್ಲದಲ್ಲಿ ಮಿತಿ ಬೇಕು, ಮತ್ತು ಆ ರೇಖೆಯನ್ನು ಎಳೆಯುವ ಸ್ಥಳ ವಿಶೇಷಣ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"a valid specification is a safe specification.\" The valid table delegated a production write.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಮಾನ್ಯ ವಿಶೇಷಣ ಸುರಕ್ಷಿತ ವಿಶೇಷಣ.\" ಮಾನ್ಯ ಕೋಷ್ಟಕ production ಬರಹ ಡೆಲಿಗೇಟ್ ಮಾಡಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Surface: one part of a specification. Locked: the agent may not change it. Bounded: the agent may choose within limits. Delegated: the agent decides. Invariant: a condition that must always hold.",
    "bodyKn": "Surface: ವಿಶೇಷಣದ ಒಂದು ಭಾಗ. Locked: agent ಬದಲಿಸಬಾರದು. Bounded: agent ಮಿತಿಯೊಳಗೆ ಆರಿಸಬಹುದು. Delegated: agent ನಿರ್ಧರಿಸುತ್ತದೆ. Invariant: ಯಾವಾಗಲೂ ಉಳಿಯಬೇಕಾದ ಷರತ್ತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) The lint flagged both under- and over-specification. 2) A thin spec missed five surfaces. 3) Irreversible choices were locked. 4) Bounded needs bounds. 5) A valid table delegated a production write.",
    "bodyKn": "1) lint ಕಡಿಮೆ ಮತ್ತು ಹೆಚ್ಚು ವಿಶೇಷಣ ಎರಡನ್ನೂ ಗುರುತಿಸಿತು. 2) ತೆಳು ವಿಶೇಷಣ ಐದು ಮೇಲ್ಮೈ ತಪ್ಪಿಸಿತು. 3) ಹಿಂತಿರುಗಿಸಲಾಗದ ಆಯ್ಕೆಗಳು ಲಾಕ್ ಆದವು. 4) Bounded ಗೆ ಮಿತಿ ಬೇಕು. 5) ಮಾನ್ಯ ಕೋಷ್ಟಕ production ಬರಹ ಡೆಲಿಗೇಟ್ ಮಾಡಿತು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What did \"Make the search system better\" get from the lint?",
      "qKn": "\"Make the search system better\" ಗೆ lint ಏನು ನೀಡಿತು?",
      "opts": [
       "No measurable bound and an aspirational word",
       "Fixed code structure",
       "No findings",
       "A locked mode"
      ],
      "optsKn": [
       "ಅಳೆಯಬಹುದಾದ ಮಿತಿ ಇಲ್ಲ ಮತ್ತು ಆಕಾಂಕ್ಷೆಯ ಪದ",
       "ನಿಗದಿತ ಕೋಡ್ ರಚನೆ",
       "ಯಾವುದೇ ಶೋಧನೆ ಇಲ್ಲ",
       "ಲಾಕ್ ವಿಧಾನ"
      ],
      "correct": 0
     },
     {
      "q": "Which mode did \"delete old records\" get?",
      "qKn": "\"delete old records\" ಗೆ ಯಾವ ವಿಧಾನ ಸಿಕ್ಕಿತು?",
      "opts": [
       "locked",
       "delegated",
       "bounded",
       "free"
      ],
      "optsKn": [
       "locked",
       "delegated",
       "bounded",
       "free"
      ],
      "correct": 0
     },
     {
      "q": "How many surfaces did the thin spec miss?",
      "qKn": "ತೆಳು ವಿಶೇಷಣ ಎಷ್ಟು ಮೇಲ್ಮೈ ತಪ್ಪಿಸಿತು?",
      "opts": [
       "5",
       "1",
       "6",
       "0"
      ],
      "optsKn": [
       "5",
       "1",
       "6",
       "0"
      ],
      "correct": 0
     },
     {
      "q": "Why did the delegated production_write get through schema validation?",
      "qKn": "ಡೆಲಿಗೇಟ್ ಮಾಡಿದ production_write ಸ್ಕೀಮಾ ಮಾನ್ಯೀಕರಣ ಹೇಗೆ ದಾಟಿತು?",
      "opts": [
       "It is a known mode with no bounds needed",
       "It was signed",
       "It was locked",
       "It was approved"
      ],
      "optsKn": [
       "ಅದು ಮಿತಿ ಬೇಕಿಲ್ಲದ ತಿಳಿದ ವಿಧಾನ",
       "ಅದಕ್ಕೆ ಸಹಿ ಇತ್ತು",
       "ಅದು ಲಾಕ್ ಆಗಿತ್ತು",
       "ಅದು ಅನುಮೋದಿತ"
      ],
      "correct": 0
     },
     {
      "q": "What is the limit of the lint?",
      "qKn": "lint ನ ಮಿತಿ ಏನು?",
      "opts": [
       "It is a pattern match on wording",
       "It uses a model",
       "It signs specs",
       "It runs the code"
      ],
      "optsKn": [
       "ಅದು ಪದಗಳ ಮೇಲಿನ ಮಾದರಿ ಹೊಂದಾಣಿಕೆ",
       "ಅದು ಮಾದರಿ ಬಳಸುತ್ತದೆ",
       "ಅದು ವಿಶೇಷಣಗಳಿಗೆ ಸಹಿ ಮಾಡುತ್ತದೆ",
       "ಅದು ಕೋಡ್ ಓಡಿಸುತ್ತದೆ"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
