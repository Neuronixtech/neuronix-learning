module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6af75bb955828a2469a99e70",
 "order": 0,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Choose Prototype, Pilot, or Production Deliberately (Part 1 of 3) — Stage Selection",
 "titleKn": "ಮೂಲಮಾದರಿ, ಪೈಲಟ್ ಅಥವಾ ಉತ್ಪಾದನೆಯನ್ನು ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ಆರಿಸಿ (ಭಾಗ 1 / 3) — ಹಂತ ಆಯ್ಕೆ",
 "desc": "Choose prototype, pilot or production from the open question, the data, the consequence and ownership.",
 "descKn": "ತೆರೆದ ಪ್ರಶ್ನೆ, ದತ್ತಾಂಶ, ಪರಿಣಾಮ ಮತ್ತು ಮಾಲೀಕತ್ವದಿಂದ ಮೂಲಮಾದರಿ, ಪೈಲಟ್ ಅಥವಾ ಉತ್ಪಾದನೆ ಆರಿಸಿ.",
 "objectives": [
  "Name the question each stage answers.",
  "Model the five factors.",
  "Select the smallest sufficient stage.",
  "Fall back when requirements are missing.",
  "Block unsafe combinations."
 ],
 "objectivesKn": [
  "ಪ್ರತಿ ಹಂತ ಉತ್ತರಿಸುವ ಪ್ರಶ್ನೆ ಹೆಸರಿಸಿ.",
  "ಐದು ಅಂಶ ಮಾದರಿ ಮಾಡಿ.",
  "ಅತಿ ಚಿಕ್ಕ ಸಾಕಷ್ಟು ಹಂತ ಆರಿಸಿ.",
  "ಅಗತ್ಯಗಳು ಕಾಣೆಯಾದರೆ ಹಿಂದೆ ಸರಿಯಿರಿ.",
  "ಅಸುರಕ್ಷಿತ ಸಂಯೋಜನೆಗಳನ್ನು ತಡೆಯಿರಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Choose Prototype, Pilot, or Production Deliberately (Part 1 of 3)",
    "textKn": "ಮೂಲಮಾದರಿ, ಪೈಲಟ್ ಅಥವಾ ಉತ್ಪಾದನೆಯನ್ನು ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ಆರಿಸಿ (ಭಾಗ 1 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 1 of 3: a five-factor decision context, a stage-selection engine that picks the smallest sufficient stage, and the cases where a working system is not ready for the next stage. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind choosing prototype, pilot or production deliberately (stage selection, stage controls, drift, promotion evidence and rollback), not the real software, and the systems, evidence and deployments are made up by the lab and no language model is involved, so no real LLM behaviour is measured. The original code/main.py was not supplied, and the lesson text says its Python is a teaching reference implementation, so the labs are our own implementation of the behaviour described. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 1ನೆಯದು: ಐದು-ಅಂಶ ನಿರ್ಧಾರ ಸಂದರ್ಭ, ಅತಿ ಚಿಕ್ಕ ಸಾಕಷ್ಟು ಹಂತ ಆರಿಸುವ ಹಂತ-ಆಯ್ಕೆ ಎಂಜಿನ್, ಮತ್ತು ಕೆಲಸ ಮಾಡುವ ವ್ಯವಸ್ಥೆ ಮುಂದಿನ ಹಂತಕ್ಕೆ ಸಿದ್ಧವಲ್ಲದ ಸಂದರ್ಭಗಳು. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು ಮೂಲಮಾದರಿ, ಪೈಲಟ್ ಅಥವಾ ಉತ್ಪಾದನೆಯನ್ನು ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ಆರಿಸುವುದು (ಹಂತ ಆಯ್ಕೆ, ಹಂತ ನಿಯಂತ್ರಣಗಳು, ಡ್ರಿಫ್ಟ್, ಬಡ್ತಿ ಸಾಕ್ಷ್ಯ ಮತ್ತು rollback) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ವ್ಯವಸ್ಥೆಗಳು, ಸಾಕ್ಷ್ಯ ಮತ್ತು deployments ಅನ್ನು ಲ್ಯಾಬ್ ಕಲ್ಪಿಸಿದ್ದು ಮತ್ತು ಭಾಷಾ ಮಾದರಿ ಇಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ code/main.py ಒದಗಿಸಿರಲಿಲ್ಲ, ಮತ್ತು lesson ಪಠ್ಯ ತನ್ನ Python ಬೋಧನಾ ಉಲ್ಲೇಖ ಅನುಷ್ಠಾನ ಎಂದು ಹೇಳುತ್ತದೆ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ವಿವರಿಸಿದ ವರ್ತನೆಯ ನಮ್ಮದೇ ಅನುಷ್ಠಾನ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Working Software Is Not a Reason to Ship",
    "textKn": "ಕೆಲಸ ಮಾಡುವ ಸಾಫ್ಟ್‌ವೇರ್ ಬಿಡುಗಡೆಗೆ ಕಾರಣವಲ್ಲ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Pick the Smallest Stage That Can Answer the Question",
    "headingKn": "ಪ್ರಶ್ನೆಗೆ ಉತ್ತರಿಸಬಲ್ಲ ಅತಿ ಚಿಕ್ಕ ಹಂತ ಆರಿಸಿ",
    "bodyEn": "A prototype asks whether the mechanism can work, a pilot asks whether it works safely in real conditions and production asks whether it can be operated reliably over time. This part gives a stage-selection engine five inputs (the open unknown, whether real users are needed, the kind of data, the consequence and who owns it) and runs six invented contexts through it. It shows a pilot falling back to a prototype when an owner and a rollback are missing and a high-consequence production write being blocked.",
    "bodyKn": "ಮೂಲಮಾದರಿ ಕಾರ್ಯವಿಧಾನ ಕೆಲಸ ಮಾಡಬಹುದೇ ಎಂದು ಕೇಳುತ್ತದೆ, ಪೈಲಟ್ ಅದು ನಿಜ ಪರಿಸ್ಥಿತಿಯಲ್ಲಿ ಸುರಕ್ಷಿತವಾಗಿ ಕೆಲಸ ಮಾಡುತ್ತದೆಯೇ ಎಂದು ಕೇಳುತ್ತದೆ ಮತ್ತು ಉತ್ಪಾದನೆ ಕಾಲಕ್ರಮೇಣ ವಿಶ್ವಾಸಾರ್ಹವಾಗಿ ನಡೆಸಬಹುದೇ ಎಂದು ಕೇಳುತ್ತದೆ. ಈ ಭಾಗ ಹಂತ-ಆಯ್ಕೆ ಎಂಜಿನ್‌ಗೆ ಐದು ಒಳಹರಿವು (ತೆರೆದ ಅಜ್ಞಾತ, ನಿಜ ಬಳಕೆದಾರರು ಬೇಕೇ, ದತ್ತಾಂಶ ವಿಧ, ಪರಿಣಾಮ ಮತ್ತು ಮಾಲೀಕರು ಯಾರು) ನೀಡಿ ಆರು ಕಲ್ಪಿತ ಸಂದರ್ಭಗಳನ್ನು ಓಡಿಸುತ್ತದೆ. ಮಾಲೀಕ ಮತ್ತು rollback ಇಲ್ಲದಾಗ ಪೈಲಟ್ ಮೂಲಮಾದರಿಗೆ ಹಿಂದೆ ಸರಿಯುವುದನ್ನು ಮತ್ತು ಹೆಚ್ಚಿನ-ಪರಿಣಾಮದ production ಬರಹ ತಡೆಯಲ್ಪಡುವುದನ್ನು ತೋರಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Three Stages, Three Questions",
    "headingKn": "ಮೂರು ಹಂತಗಳು, ಮೂರು ಪ್ರಶ್ನೆಗಳು",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">a stage is a question, not a polish level</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">prototype</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">can it work?</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">pilot</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">safe in real use?</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">production</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">operate over time?</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">smallest stage</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">that answers it</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">a stage is a question, not a polish level</text></svg>",
    "captionEn": "Each stage answers a different question.",
    "captionKn": "ಪ್ರತಿ ಹಂತ ಬೇರೆ ಪ್ರಶ್ನೆಗೆ ಉತ್ತರಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Lab results for six invented contexts",
    "headingKn": "ಆರು ಕಲ್ಪಿತ ಸಂದರ್ಭಗಳ ಲ್ಯಾಬ್ ಫಲಿತಾಂಶ",
    "headers": [
     "Context",
     "Stage"
    ],
    "rows": [
     [
      "new algorithm on synthetic data",
      "prototype"
     ],
     [
      "real tickets, owner and rollback",
      "pilot"
     ],
     [
      "same without rollback",
      "prototype"
     ],
     [
      "works well, operations team ready",
      "production"
     ],
     [
      "works well, no operations team",
      "pilot"
     ],
     [
      "write access to the production database",
      "blocked"
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
    "filename": "ps_1.py",
    "headingEn": "Context and the selection engine",
    "headingKn": "ಸಂದರ್ಭ ಮತ್ತು ಆಯ್ಕೆ ಎಂಜಿನ್",
    "descEn": "Context is a frozen record of the five factors and select_stage returns a stage with its reasons: prototype for a feasibility question on synthetic data, pilot only with an owner and a rollback, production only when operations is ready, and blocked for real data with high consequence.",
    "descKn": "Context ಐದು ಅಂಶಗಳ ಹೆಪ್ಪುಗಟ್ಟಿದ ದಾಖಲೆ ಮತ್ತು select_stage ಕಾರಣಗಳೊಂದಿಗೆ ಹಂತ ಮರಳಿಸುತ್ತದೆ: ಸಂಶ್ಲೇಷಿತ ದತ್ತಾಂಶದ ಕಾರ್ಯಸಾಧ್ಯತೆ ಪ್ರಶ್ನೆಗೆ ಮೂಲಮಾದರಿ, ಮಾಲೀಕ ಮತ್ತು rollback ಇದ್ದರೆ ಮಾತ್ರ ಪೈಲಟ್, ಕಾರ್ಯಾಚರಣೆ ಸಿದ್ಧವಾದಾಗ ಮಾತ್ರ ಉತ್ಪಾದನೆ, ಮತ್ತು ಹೆಚ್ಚಿನ ಪರಿಣಾಮದ ನಿಜ ದತ್ತಾಂಶಕ್ಕೆ blocked.",
    "code": "@dataclass(frozen=True)\nclass Context:\n    unknown: str\n    needs_real_users: bool\n    data: str\n    consequence: str\n    operator_ready: bool\n    rollback: bool = False\n    owner: bool = False\n\n\ndef select_stage(c):\n    reasons = []\n    if c.unknown == \"mechanism\" and not c.needs_real_users and c.data == \"synthetic\":\n        return \"prototype\", [\"the open question is feasibility and needs neither real users nor real data\"]\n    if c.unknown in (\"mechanism\", \"real_effectiveness\"):\n        if c.data == \"production\" and c.consequence == \"high\":\n            return \"blocked\", [\"real data with high consequence is not allowed in a pilot without an approved design\"]\n        if not c.owner:\n            reasons.append(\"no named owner\")\n        if not c.rollback:\n            reasons.append(\"no rollback\")\n        if reasons:\n            return \"prototype\", [\"pilot requirements not met: \" + \", \".join(reasons)]\n        return \"pilot\", [\"real conditions are needed, consequence is bounded, owner and rollback exist\"]\n    if c.unknown == \"sustained_operation\":\n        if not (c.operator_ready and c.owner and c.rollback):\n            return \"pilot\", [\"operations are not ready to own it: stay in the pilot\"]\n        return \"production\", [\"the open question is sustained operation and an operations team owns it\"]\n    return \"blocked\", [\"unknown kind of unknown\"]"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "ps_1.py",
    "headingEn": "main(): five experiments",
    "headingKn": "main(): ಐದು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() runs six contexts, restates the question each stage answers, counts which stages were chosen, shows a pilot falling back and blocks a high-consequence write.",
    "descKn": "main() ಆರು ಸಂದರ್ಭ ಓಡಿಸಿ, ಪ್ರತಿ ಹಂತ ಉತ್ತರಿಸುವ ಪ್ರಶ್ನೆ ಮತ್ತೆ ಹೇಳಿ, ಯಾವ ಹಂತಗಳು ಆಯ್ಕೆಯಾದವು ಎಣಿಸಿ, ಹಿಂದೆ ಸರಿಯುವ ಪೈಲಟ್ ತೋರಿಸಿ ಮತ್ತು ಹೆಚ್ಚಿನ-ಪರಿಣಾಮದ ಬರಹ ತಡೆಯುತ್ತದೆ.",
    "code": "def main():\n    section(\"1. Genuinely running: five factors in, one stage out\")\n    for label, c in CASES:\n        stage, why = select_stage(c)\n        print(f\"{label:52} -> {stage:10} {why[0]}\")\n    print(\"the same engine returned a prototype, a pilot, a production decision and two stays or blocks depending on the unknown, the data, the consequence and who owns it; the contexts are invented\")\n\n    section(\"2. Genuinely running: a stage is a question, not a polish level\")\n    for stage, q in ((\"prototype\", \"can the mechanism work?\"), (\"pilot\", \"does it work safely in real conditions?\"), (\"production\", \"can we operate it reliably over time?\")):\n        print(f\"{stage:11} {q}\")\n    print(\"a prototype can have impressive code and still be disposable, and a production system can have a plain interface and still need strict ownership; the stage names the question being answered\")\n\n    section(\"3. Genuinely measuring: the smallest sufficient stage\")\n    rank = {s: i for i, s in enumerate(ORDER)}\n    wanted = [(l, select_stage(c)[0]) for l, c in CASES if select_stage(c)[0] in rank]\n    print(\"stages chosen:\", [(l[:24], s) for l, s in wanted])\n    print(\"a team eager to ship might call both 'works well' cases ready for production, and the engine chose production for only one of them; the lab returns the smallest stage that can answer the open question and does not promote on enthusiasm\")\n\n    section(\"4. Genuinely running: a pilot with a missing requirement falls back\")\n    c = Context(\"real_effectiveness\", True, \"real_sample\", \"medium\", False, False, False)\n    print(select_stage(c))\n    print(\"the engine named both missing requirements, an owner and a rollback, and returned prototype, because running it on real conditions without them would expose people to a failure nobody could undo\")\n\n    section(\"5. Genuinely running: a high-consequence production write is blocked\")\n    print(select_stage(CASES[5][1]))\n    print(\"real data with high consequence returned blocked in this lab instead of a stage, which forces a person to redesign the experiment as read-only or approve it explicitly; the rule is one the lab chose\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: five factors in, one stage out ---\nnew algorithm on synthetic data                      -> prototype  the open question is feasibility and needs neither real users nor real data\nsupport assistant, real tickets, owner and rollback  -> pilot      real conditions are needed, consequence is bounded, owner and rollback exist\nsame, but no rollback                                -> prototype  pilot requirements not met: no rollback\nworks well, operations team ready, owner and rollback -> production the open question is sustained operation and an operations team owns it\nworks well, no operations team                       -> pilot      operations are not ready to own it: stay in the pilot\nwrite access to the production database              -> blocked    real data with high consequence is not allowed in a pilot without an approved design\nthe same engine returned a prototype, a pilot, a production decision and two stays or blocks depending on the unknown, the data, the consequence and who owns it; the contexts are invented\n\n--- 2. Genuinely running: a stage is a question, not a polish level ---\nprototype   can the mechanism work?\npilot       does it work safely in real conditions?\nproduction  can we operate it reliably over time?\na prototype can have impressive code and still be disposable, and a production system can have a plain interface and still need strict ownership; the stage names the question being answered\n\n--- 3. Genuinely measuring: the smallest sufficient stage ---\nstages chosen: [('new algorithm on synthet', 'prototype'), ('support assistant, real ', 'pilot'), ('same, but no rollback', 'prototype'), ('works well, operations t', 'production'), ('works well, no operation', 'pilot')]\na team eager to ship might call both 'works well' cases ready for production, and the engine chose production for only one of them; the lab returns the smallest stage that can answer the open question and does not promote on enthusiasm\n\n--- 4. Genuinely running: a pilot with a missing requirement falls back ---\n('prototype', ['pilot requirements not met: no named owner, no rollback'])\nthe engine named both missing requirements, an owner and a rollback, and returned prototype, because running it on real conditions without them would expose people to a failure nobody could undo\n\n--- 5. Genuinely running: a high-consequence production write is blocked ---\n('blocked', ['real data with high consequence is not allowed in a pilot without an approved design'])\nreal data with high consequence returned blocked in this lab instead of a stage, which forces a person to redesign the experiment as read-only or approve it explicitly; the rule is one the lab chose"
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
    "headingEn": "Experiment 1: Five factors in, one stage out",
    "headingKn": "ಪ್ರಯೋಗ 1: Five factors in, one stage out",
    "bodyEn": "What it ran: Five factors in, one stage out. What the lab concluded: the same engine returned a prototype, a pilot, a production decision and two stays or blocks depending on the unknown, the data, the consequence and who owns it; the contexts are invented",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Five factors in, one stage out. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the same engine returned a prototype, a pilot, a production decision and two stays or blocks depending on the unknown, the data, the consequence and who owns it; the contexts are invented"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. Genuinely running: five factors in, one stage out ---\nnew algorithm on synthetic data                      -> prototype  the open question is feasibility and needs neither real users nor real data\nsupport assistant, real tickets, owner and rollback  -> pilot      real conditions are needed, consequence is bounded, owner and rollback exist\nsame, but no rollback                                -> prototype  pilot requirements not met: no rollback\nworks well, operations team ready, owner and rollback -> production the open question is sustained operation and an operations team owns it\nworks well, no operations team                       -> pilot      operations are not ready to own it: stay in the pilot\nwrite access to the production database              -> blocked    real data with high consequence is not allowed in a pilot without an approved design"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: A stage is a question, not a polish level",
    "headingKn": "ಪ್ರಯೋಗ 2: A stage is a question, not a polish level",
    "bodyEn": "What it ran: A stage is a question, not a polish level. What the lab concluded: a prototype can have impressive code and still be disposable, and a production system can have a plain interface and still need strict ownership; the stage names the question being answered",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A stage is a question, not a polish level. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a prototype can have impressive code and still be disposable, and a production system can have a plain interface and still need strict ownership; the stage names the question being answered"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely running: a stage is a question, not a polish level ---\nprototype   can the mechanism work?\npilot       does it work safely in real conditions?\nproduction  can we operate it reliably over time?"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: The smallest sufficient stage",
    "headingKn": "ಪ್ರಯೋಗ 3: The smallest sufficient stage",
    "bodyEn": "What it ran: The smallest sufficient stage. What the lab concluded: a team eager to ship might call both 'works well' cases ready for production, and the engine chose production for only one of them; the lab returns the smallest stage that can answer the open question and does not promote on enthusiasm",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: The smallest sufficient stage. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a team eager to ship might call both 'works well' cases ready for production, and the engine chose production for only one of them; the lab returns the smallest stage that can answer the open question and does not promote on enthusiasm"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely measuring: the smallest sufficient stage ---\nstages chosen: [('new algorithm on synthet', 'prototype'), ('support assistant, real ', 'pilot'), ('same, but no rollback', 'prototype'), ('works well, operations t', 'production'), ('works well, no operation', 'pilot')]"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 4: A pilot with a missing requirement falls back",
    "headingKn": "ಪ್ರಯೋಗ 4: A pilot with a missing requirement falls back",
    "bodyEn": "What it ran: A pilot with a missing requirement falls back. What the lab concluded: the engine named both missing requirements, an owner and a rollback, and returned prototype, because running it on real conditions without them would expose people to a failure nobody could undo",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A pilot with a missing requirement falls back. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the engine named both missing requirements, an owner and a rollback, and returned prototype, because running it on real conditions without them would expose people to a failure nobody could undo"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 4. Genuinely running: a pilot with a missing requirement falls back ---\n('prototype', ['pilot requirements not met: no named owner, no rollback'])"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 5: A high-consequence production write is blocked",
    "headingKn": "ಪ್ರಯೋಗ 5: A high-consequence production write is blocked",
    "bodyEn": "What it ran: A high-consequence production write is blocked. What the lab concluded: real data with high consequence returned blocked in this lab instead of a stage, which forces a person to redesign the experiment as read-only or approve it explicitly; the rule is one the lab chose",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A high-consequence production write is blocked. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): real data with high consequence returned blocked in this lab instead of a stage, which forces a person to redesign the experiment as read-only or approve it explicitly; the rule is one the lab chose"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 5. Genuinely running: a high-consequence production write is blocked ---\n('blocked', ['real data with high consequence is not allowed in a pilot without an approved design'])"
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
    "headingEn": "Genuinely Found: The Same Engine Gave Five Different Answers",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಅದೇ ಎಂಜಿನ್ ಐದು ಬೇರೆ ಉತ್ತರ ನೀಡಿತು",
    "bodyEn": "Section 1: the synthetic-data algorithm got prototype, the real-ticket assistant with an owner and rollback got pilot, the same without rollback fell to prototype, \"works well\" with a ready operations team got production, \"works well\" without one stayed pilot and the production-database write was blocked. Section 3: only one of the two \"works well\" contexts reached production.",
    "bodyKn": "ವಿಭಾಗ 1: ಸಂಶ್ಲೇಷಿತ-ದತ್ತಾಂಶ algorithm ಗೆ prototype, ಮಾಲೀಕ ಮತ್ತು rollback ಇರುವ ನಿಜ-ticket assistant ಗೆ pilot, rollback ಇಲ್ಲದ ಅದೇ prototype ಗೆ ಇಳಿಯಿತು, ಸಿದ್ಧ ಕಾರ್ಯಾಚರಣೆ ತಂಡದ \"works well\" ಗೆ production, ಅದಿಲ್ಲದ \"works well\" pilot ನಲ್ಲೇ ಉಳಿಯಿತು ಮತ್ತು production-database ಬರಹ ತಡೆಯಲ್ಪಟ್ಟಿತು. ವಿಭಾಗ 3: ಎರಡು \"works well\" ಸಂದರ್ಭಗಳಲ್ಲಿ ಒಂದು ಮಾತ್ರ production ತಲುಪಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Missing Requirements Fall Back and High Consequence Blocks",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಕಾಣೆಯಾದ ಅಗತ್ಯಗಳು ಹಿಂದೆ ಸರಿಯುತ್ತವೆ ಮತ್ತು ಹೆಚ್ಚಿನ ಪರಿಣಾಮ ತಡೆಯುತ್ತದೆ",
    "bodyEn": "Section 4: a pilot request with no named owner and no rollback returned prototype with both reasons listed. Section 5: real production data with high consequence returned blocked, which the lab uses to force a redesign or an explicit approval; that rule is the lab's own choice.",
    "bodyKn": "ವಿಭಾಗ 4: ಹೆಸರಿಸಿದ ಮಾಲೀಕ ಮತ್ತು rollback ಇಲ್ಲದ ಪೈಲಟ್ ವಿನಂತಿ ಎರಡೂ ಕಾರಣ ಪಟ್ಟಿ ಮಾಡಿ prototype ಮರಳಿಸಿತು. ವಿಭಾಗ 5: ಹೆಚ್ಚಿನ ಪರಿಣಾಮದ ನಿಜ production ದತ್ತಾಂಶ blocked ಮರಳಿಸಿತು, ಇದನ್ನು ಲ್ಯಾಬ್ ಮರುವಿನ್ಯಾಸ ಅಥವಾ ಸ್ಪಷ್ಟ ಅನುಮೋದನೆ ಬಲವಂತಪಡಿಸಲು ಬಳಸುತ್ತದೆ; ಆ ನಿಯಮ ಲ್ಯಾಬ್‌ನ ಸ್ವಂತ ಆಯ್ಕೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "Choosing production because the demo works exposes people to failures nobody owns, and choosing a prototype out of caution can never answer a question about real conditions.",
    "bodyKn": "ಡೆಮೊ ಕೆಲಸ ಮಾಡುತ್ತದೆ ಎಂದು ಉತ್ಪಾದನೆ ಆರಿಸಿದರೆ ಯಾರೂ ಹೊಣೆ ಹೊರದ ವೈಫಲ್ಯಗಳಿಗೆ ಜನರನ್ನು ಒಡ್ಡುತ್ತದೆ, ಮತ್ತು ಎಚ್ಚರದಿಂದ ಮೂಲಮಾದರಿ ಆರಿಸಿದರೆ ನಿಜ ಪರಿಸ್ಥಿತಿಗಳ ಪ್ರಶ್ನೆಗೆ ಎಂದೂ ಉತ್ತರಿಸಲಾಗದು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"if it works, it is production.\" The assistant that worked stayed a pilot when no operations team owned it.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಕೆಲಸ ಮಾಡಿದರೆ ಅದು production.\" ಕಾರ್ಯಾಚರಣೆ ತಂಡ ಹೊಣೆ ಹೊರದಿದ್ದಾಗ ಕೆಲಸ ಮಾಡಿದ assistant pilot ಆಗಿಯೇ ಉಳಿಯಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Prototype: tests whether a mechanism can work. Pilot: a bounded real-world trial. Production: operated over time with an owner. Blocked: not allowed without redesign or approval.",
    "bodyKn": "Prototype: ಕಾರ್ಯವಿಧಾನ ಕೆಲಸ ಮಾಡಬಹುದೇ ಎಂದು ಪರೀಕ್ಷಿಸುತ್ತದೆ. Pilot: ಮಿತಿಯುಳ್ಳ ನಿಜ-ಜಗತ್ತಿನ ಪ್ರಯೋಗ. Production: ಮಾಲೀಕರೊಂದಿಗೆ ಕಾಲಕ್ರಮೇಣ ನಡೆಸಲಾಗುತ್ತದೆ. Blocked: ಮರುವಿನ್ಯಾಸ ಅಥವಾ ಅನುಮೋದನೆ ಇಲ್ಲದೆ ಅನುಮತಿಸಲಾಗದು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) Five inputs picked a stage. 2) A stage is a question. 3) Only one of two working systems reached production. 4) A pilot fell back for lack of owner and rollback. 5) A high-consequence production write was blocked.",
    "bodyKn": "1) ಐದು ಒಳಹರಿವು ಹಂತ ಆರಿಸಿದವು. 2) ಹಂತ ಒಂದು ಪ್ರಶ್ನೆ. 3) ಕೆಲಸ ಮಾಡುವ ಎರಡು ವ್ಯವಸ್ಥೆಗಳಲ್ಲಿ ಒಂದು ಮಾತ್ರ production ತಲುಪಿತು. 4) ಮಾಲೀಕ ಮತ್ತು rollback ಇಲ್ಲದ ಕಾರಣ ಪೈಲಟ್ ಹಿಂದೆ ಸರಿಯಿತು. 5) ಹೆಚ್ಚಿನ-ಪರಿಣಾಮದ production ಬರಹ ತಡೆಯಲ್ಪಟ್ಟಿತು."
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
    "bodyEn": "1) Open a terminal in pneuronics-backend/lesson-defs/labs. 2) Run: python -B ps_1.py (in Git Bash on Windows: PYTHONIOENCODING=utf-8 python -B ps_1.py). 3) Compare each section with the walkthrough above. The -B flag stops Python from writing __pycache__ folders.",
    "bodyKn": "1) pneuronics-backend/lesson-defs/labs ನಲ್ಲಿ ಟರ್ಮಿನಲ್ ತೆರೆಯಿರಿ. 2) ಓಡಿಸಿ: python -B ps_1.py (Windows Git Bash ನಲ್ಲಿ: PYTHONIOENCODING=utf-8 python -B ps_1.py). 3) ಪ್ರತಿ ವಿಭಾಗವನ್ನು ಮೇಲಿನ ನಡೆದಾಟಕ್ಕೆ ಹೋಲಿಸಿ. -B ಧ್ವಜ Python __pycache__ ಫೋಲ್ಡರ್‌ಗಳನ್ನು ಬರೆಯುವುದನ್ನು ತಡೆಯುತ್ತದೆ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What stage did \"works well, no operations team\" get?",
      "qKn": "\"works well, no operations team\" ಗೆ ಯಾವ ಹಂತ ಸಿಕ್ಕಿತು?",
      "opts": [
       "pilot",
       "production",
       "prototype",
       "blocked"
      ],
      "optsKn": [
       "pilot",
       "production",
       "prototype",
       "blocked"
      ],
      "correct": 0
     },
     {
      "q": "Why did the pilot request without rollback return prototype?",
      "qKn": "rollback ಇಲ್ಲದ ಪೈಲಟ್ ವಿನಂತಿ ಏಕೆ prototype ಮರಳಿಸಿತು?",
      "opts": [
       "Pilot requirements were not met",
       "It was too fast",
       "It was signed",
       "It had no data"
      ],
      "optsKn": [
       "ಪೈಲಟ್ ಅಗತ್ಯಗಳು ಪೂರೈಸಲಿಲ್ಲ",
       "ಅದು ತುಂಬಾ ವೇಗ",
       "ಅದಕ್ಕೆ ಸಹಿ ಇತ್ತು",
       "ಅದಕ್ಕೆ ದತ್ತಾಂಶ ಇರಲಿಲ್ಲ"
      ],
      "correct": 0
     },
     {
      "q": "What did the high-consequence production write get?",
      "qKn": "ಹೆಚ್ಚಿನ-ಪರಿಣಾಮದ production ಬರಹಕ್ಕೆ ಏನು ಸಿಕ್ಕಿತು?",
      "opts": [
       "blocked",
       "pilot",
       "production",
       "prototype"
      ],
      "optsKn": [
       "blocked",
       "pilot",
       "production",
       "prototype"
      ],
      "correct": 0
     },
     {
      "q": "What question does a pilot answer?",
      "qKn": "ಪೈಲಟ್ ಯಾವ ಪ್ರಶ್ನೆಗೆ ಉತ್ತರಿಸುತ್ತದೆ?",
      "opts": [
       "Does it work safely in real conditions?",
       "Can the mechanism work?",
       "Is the interface pretty?",
       "Is it cheap?"
      ],
      "optsKn": [
       "ಇದು ನಿಜ ಪರಿಸ್ಥಿತಿಯಲ್ಲಿ ಸುರಕ್ಷಿತವಾಗಿ ಕೆಲಸ ಮಾಡುತ್ತದೆಯೇ?",
       "ಕಾರ್ಯವಿಧಾನ ಕೆಲಸ ಮಾಡಬಹುದೇ?",
       "ಇಂಟರ್ಫೇಸ್ ಸುಂದರವಾಗಿದೆಯೇ?",
       "ಇದು ಅಗ್ಗವೇ?"
      ],
      "correct": 0
     },
     {
      "q": "Whose choice is the blocked rule?",
      "qKn": "blocked ನಿಯಮ ಯಾರ ಆಯ್ಕೆ?",
      "opts": [
       "The lab's own",
       "A standard",
       "The law",
       "A vendor"
      ],
      "optsKn": [
       "ಲ್ಯಾಬ್‌ನ ಸ್ವಂತ",
       "ಒಂದು ಮಾನದಂಡ",
       "ಕಾನೂನು",
       "ಒಬ್ಬ ಮಾರಾಟಗಾರ"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
