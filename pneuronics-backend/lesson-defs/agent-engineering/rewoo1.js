module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6066020ed05b321511",
 "order": 0,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "ReWOO and Plan-and-Execute (Part 1 of 3) — Decoupled Planning, the Planner and the Plan DAG",
 "titleKn": "ReWOO ಮತ್ತು Plan-and-Execute (ಭಾಗ 1 / 3) — ಬೇರ್ಪಡಿಸಿದ ಯೋಜನೆ, Planner ಮತ್ತು Plan DAG",
 "desc": "Separate deciding from doing: build a PlanNode, a deterministic Planner, dependency levels and a plan contract that catches duplicates, unknown tools, missing and self dependencies and cycles, and see what the quadratic-cost argument does and does not show.",
 "descKn": "ನಿರ್ಧರಿಸುವುದನ್ನು ಮಾಡುವುದರಿಂದ ಬೇರ್ಪಡಿಸಿ: PlanNode, ನಿರ್ಧಾರಾತ್ಮಕ Planner, ಅವಲಂಬನೆ ಮಟ್ಟಗಳು ಮತ್ತು ನಕಲಿ, ತಿಳಿಯದ tools, ಕಾಣೆಯಾದ ಮತ್ತು ಸ್ವಯಂ ಅವಲಂಬನೆ ಹಾಗೂ ಚಕ್ರಗಳನ್ನು ಹಿಡಿಯುವ ಯೋಜನೆ ಒಪ್ಪಂದ ನಿರ್ಮಿಸಿ, ಮತ್ತು ವರ್ಗ-ವೆಚ್ಚದ ವಾದ ಏನನ್ನು ತೋರಿಸುತ್ತದೆ ಮತ್ತು ತೋರಿಸುವುದಿಲ್ಲ ಎಂದು ನೋಡಿ.",
 "objectives": [
  "Explain the roles of Planner, Worker and Solver and what each can see.",
  "Represent a plan as a DAG of PlanNodes with evidence references.",
  "Compute dependency levels and spot independent nodes.",
  "Validate a plan before execution, including cycles.",
  "Explain when planning first helps and when it does not."
 ],
 "objectivesKn": [
  "Planner, Worker ಮತ್ತು Solver ಪಾತ್ರಗಳು ಮತ್ತು ಪ್ರತಿಯೊಂದಕ್ಕೆ ಏನು ಕಾಣುತ್ತದೆ ಎಂದು ವಿವರಿಸಿ.",
  "ಯೋಜನೆಯನ್ನು ಸಾಕ್ಷ್ಯ ಉಲ್ಲೇಖಗಳಿರುವ PlanNodes ಗಳ DAG ಆಗಿ ನಿರೂಪಿಸಿ.",
  "ಅವಲಂಬನೆ ಮಟ್ಟಗಳನ್ನು ಲೆಕ್ಕಿಸಿ ಸ್ವತಂತ್ರ ನೋಡ್‌ಗಳನ್ನು ಗುರುತಿಸಿ.",
  "ಕಾರ್ಯಗತಗೊಳಿಸುವ ಮೊದಲು ಯೋಜನೆಯನ್ನು, ಚಕ್ರಗಳೂ ಸೇರಿ, ಪರಿಶೀಲಿಸಿ.",
  "ಮೊದಲು ಯೋಜಿಸುವುದು ಯಾವಾಗ ಸಹಾಯ ಮಾಡುತ್ತದೆ ಮತ್ತು ಯಾವಾಗ ಅಲ್ಲ ಎಂದು ವಿವರಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "ReWOO and Plan-and-Execute (Part 1 of 3)",
    "textKn": "ReWOO ಮತ್ತು Plan-and-Execute (ಭಾಗ 1 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 1 of 3: why decouple planning, the Planner, and the plan DAG. Every output was genuinely produced on Python 3.14.5 by rewoo_1.py. The planner is a deterministic stand-in for an LLM, and the cost table is arithmetic on stated assumptions, not a measurement of any real system. Workers, execution and the Solver are Parts 2 and 3. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ ಮೊದಲನೆಯದು: ಯೋಜನೆಯನ್ನು ಏಕೆ ಪ್ರತ್ಯೇಕಿಸಬೇಕು, Planner ಮತ್ತು plan DAG. ಎಲ್ಲಾ output rewoo_1.py ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. Planner LLM ಗೆ ನಿರ್ಧಾರಾತ್ಮಕ ಬದಲಿ, ಮತ್ತು ವೆಚ್ಚ ಕೋಷ್ಟಕ ಹೇಳಿದ ಊಹೆಗಳ ಮೇಲಿನ ಅಂಕಗಣಿತ, ಯಾವುದೇ ನಿಜವಾದ ವ್ಯವಸ್ಥೆಯ ಅಳತೆಯಲ್ಲ. Workers, ಕಾರ್ಯಗತಗೊಳಿಸುವಿಕೆ ಮತ್ತು Solver ಭಾಗ 2 ಮತ್ತು 3. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Separate Deciding From Doing",
    "textKn": "ನಿರ್ಧರಿಸುವುದನ್ನು ಮಾಡುವುದರಿಂದ ಬೇರ್ಪಡಿಸಿ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "From Interleaved to Decoupled",
    "headingKn": "ಹೆಣೆದದ್ದರಿಂದ ಬೇರ್ಪಡಿಸಿದ್ದಕ್ಕೆ",
    "bodyEn": "In a ReAct loop the model alternates think, act, observe, think, act, observe. ReWOO (Reasoning Without Observation) changes the architecture: a Planner reads the question and produces the whole plan first, Workers execute the plan and produce evidence, and a Solver reads question, plan and evidence and writes the answer. The roles see different information: the Planner sees only the question, a Worker sees one node, the Solver sees everything. The price is that a plan made before any observation cannot react to a surprise; that is why Plan-and-Execute adds replanning.",
    "bodyKn": "ReAct loop ನಲ್ಲಿ ಮಾದರಿ think, act, observe, think, act, observe ಎಂದು ಬದಲಾಗುತ್ತದೆ. ReWOO (Reasoning Without Observation) ವಿನ್ಯಾಸ ಬದಲಿಸುತ್ತದೆ: Planner ಪ್ರಶ್ನೆ ಓದಿ ಮೊದಲು ಸಂಪೂರ್ಣ ಯೋಜನೆ ರಚಿಸುತ್ತದೆ, Workers ಯೋಜನೆ ಚಲಾಯಿಸಿ ಸಾಕ್ಷ್ಯ ಉತ್ಪಾದಿಸುತ್ತವೆ, ಮತ್ತು Solver ಪ್ರಶ್ನೆ, ಯೋಜನೆ ಮತ್ತು ಸಾಕ್ಷ್ಯ ಓದಿ ಉತ್ತರ ಬರೆಯುತ್ತದೆ. ಪಾತ್ರಗಳಿಗೆ ಬೇರೆ ಬೇರೆ ಮಾಹಿತಿ ಕಾಣುತ್ತದೆ: Planner ಗೆ ಪ್ರಶ್ನೆ ಮಾತ್ರ, Worker ಗೆ ಒಂದು ನೋಡ್, Solver ಗೆ ಎಲ್ಲವೂ. ಬೆಲೆ: ಯಾವುದೇ observation ಮೊದಲು ರಚಿಸಿದ ಯೋಜನೆ ಆಶ್ಚರ್ಯಕ್ಕೆ ಪ್ರತಿಕ್ರಿಯಿಸಲಾರದು; ಅದಕ್ಕಾಗಿಯೇ Plan-and-Execute replanning ಸೇರಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Plan, Execute, Solve",
    "headingKn": "Plan, Execute, Solve",
    "svgCode": "<svg viewBox=\"0 0 300 210\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\">\n  <rect width=\"300\" height=\"210\" rx=\"8\" fill=\"#0f172a\"/>\n  <text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">ReWOO: plan once, execute, then solve</text>\n  <rect x=\"30\" y=\"24\" width=\"240\" height=\"22\" rx=\"4\" fill=\"#1e293b\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"39\" fill=\"#fde68a\" text-anchor=\"middle\">QUESTION</text>\n  <path d=\"M150,46 V56\" stroke=\"#475569\"/>\n  <rect x=\"30\" y=\"58\" width=\"240\" height=\"26\" rx=\"4\" fill=\"#1e293b\" stroke=\"#60a5fa\"/><text x=\"150\" y=\"69\" fill=\"#93c5fd\" text-anchor=\"middle\">PLANNER (no tool results yet)</text><text x=\"150\" y=\"79\" fill=\"#93c5fd\" text-anchor=\"middle\" font-size=\"6\">E1=capital_of(France)  E2=population_of(#E1)</text>\n  <path d=\"M150,84 V94\" stroke=\"#475569\"/>\n  <rect x=\"30\" y=\"96\" width=\"240\" height=\"26\" rx=\"4\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"150\" y=\"107\" fill=\"#6ee7b7\" text-anchor=\"middle\">EXECUTOR + WORKERS</text><text x=\"150\" y=\"117\" fill=\"#6ee7b7\" text-anchor=\"middle\" font-size=\"6\">ready nodes, resolve #E, run tools (parallel per level)</text>\n  <path d=\"M150,122 V132\" stroke=\"#475569\"/>\n  <rect x=\"30\" y=\"134\" width=\"240\" height=\"22\" rx=\"4\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"150\" y=\"149\" fill=\"#c4b5fd\" text-anchor=\"middle\">EVIDENCE STORE: E1=Paris  E2=2148000</text>\n  <path d=\"M150,156 V166\" stroke=\"#475569\"/>\n  <rect x=\"30\" y=\"168\" width=\"240\" height=\"22\" rx=\"4\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"183\" fill=\"#fde68a\" text-anchor=\"middle\">SOLVER: question + plan + evidence -> answer</text>\n  <text x=\"150\" y=\"203\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">a Replanner may sit around the executor for Plan-and-Execute</text>\n</svg>",
    "captionEn": "The Planner emits a plan with #E references, the executor and workers turn it into evidence, and the Solver composes the answer.",
    "captionKn": "Planner #E ಉಲ್ಲೇಖಗಳಿರುವ ಯೋಜನೆ ನೀಡುತ್ತದೆ, executor ಮತ್ತು workers ಅದನ್ನು ಸಾಕ್ಷ್ಯವಾಗಿಸುತ್ತವೆ, ಮತ್ತು Solver ಉತ್ತರ ರಚಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "ReAct versus ReWOO",
    "headingKn": "ReAct ಮತ್ತು ReWOO",
    "headers": [
     "Property",
     "ReAct",
     "ReWOO"
    ],
    "rows": [
     [
      "Control flow",
      "Reason, act, observe, repeat",
      "Plan, execute, solve"
     ],
     [
      "Model calls",
      "Between actions",
      "Planner before workers, Solver after"
     ],
     [
      "Observations affect",
      "The next reasoning step",
      "Only the Solver (and a Replanner if present)"
     ],
     [
      "Parallelism",
      "Harder",
      "Natural from the DAG"
     ],
     [
      "Best for",
      "Dynamic, unknown environments",
      "Predictable tool workflows"
     ]
    ]
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why Interleaved Loops Re-Read Their History",
    "headingKn": "ಹೆಣೆದ Loops ತಮ್ಮ ಇತಿಹಾಸವನ್ನು ಏಕೆ ಮತ್ತೆ ಓದುತ್ತವೆ",
    "bodyEn": "If each ReAct step adds about k tokens and each model call re-reads all earlier steps, call 1 reads k, call 2 reads 2k, call n reads nk. The total is k(1 + 2 + ... + n) = k n(n+1)/2, which grows as n squared. Caching and runtime optimisations change what is billed, so treat this as a model of the architecture, not a price list. Section 5 of the run computes it, and it also shows something the slogan hides: at 3 steps the two columns are equal, so planning first pays off as workflows get longer, not at every size.",
    "bodyKn": "ಪ್ರತಿ ReAct ಹಂತ ಸುಮಾರು k tokens ಸೇರಿಸಿ ಪ್ರತಿ ಮಾದರಿ ಕರೆ ಹಿಂದಿನ ಎಲ್ಲಾ ಹಂತಗಳನ್ನು ಮತ್ತೆ ಓದಿದರೆ, ಕರೆ 1 k ಓದುತ್ತದೆ, ಕರೆ 2 2k, ಕರೆ n nk. ಒಟ್ಟು k(1 + 2 + ... + n) = k n(n+1)/2, ಇದು n ವರ್ಗವಾಗಿ ಬೆಳೆಯುತ್ತದೆ. Caching ಮತ್ತು runtime ಆಪ್ಟಿಮೈಸೇಶನ್ ಬಿಲ್ ಆಗುವುದನ್ನು ಬದಲಿಸುತ್ತವೆ, ಆದ್ದರಿಂದ ಇದನ್ನು ವಿನ್ಯಾಸದ ಮಾದರಿ ಎಂದು ಪರಿಗಣಿಸಿ, ಬೆಲೆ ಪಟ್ಟಿಯಲ್ಲ. ಓಟದ ವಿಭಾಗ 5 ಇದನ್ನು ಲೆಕ್ಕಿಸುತ್ತದೆ, ಮತ್ತು ಘೋಷಣೆ ಮರೆಮಾಡುವ ಸಂಗತಿಯನ್ನೂ ತೋರಿಸುತ್ತದೆ: 3 ಹಂತಗಳಲ್ಲಿ ಎರಡೂ ಕಾಲಂಗಳು ಸಮ; ಹಾಗಾಗಿ ಕೆಲಸದ ಹರಿವು ಉದ್ದವಾದಂತೆ ಮೊದಲು ಯೋಜಿಸುವುದು ಲಾಭ ನೀಡುತ್ತದೆ, ಪ್ರತಿ ಗಾತ್ರದಲ್ಲಿ ಅಲ್ಲ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "The Plan DAG",
    "textKn": "Plan DAG",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Nodes, Dependencies and #E References",
    "headingKn": "ನೋಡ್‌ಗಳು, ಅವಲಂಬನೆಗಳು ಮತ್ತು #E ಉಲ್ಲೇಖಗಳು",
    "bodyEn": "A plan is a directed acyclic graph. Each PlanNode has an evidence_id (E1, E2), a tool, arguments and a list of dependencies. Directed means E1 -> E2 says E2 needs E1; acyclic means there are no loops, because a node in a cycle can never start. The argument \"#E1\" is an evidence reference: it means \"substitute whatever E1 produces\". That lets the Planner express \"population of the capital\" without knowing the capital. It writes the structure, the Worker discovers the value.",
    "bodyKn": "ಯೋಜನೆ ಒಂದು ದಿಕ್ಕಿರುವ ಚಕ್ರರಹಿತ ಗ್ರಾಫ್. ಪ್ರತಿ PlanNode ಗೆ evidence_id (E1, E2), tool, arguments ಮತ್ತು ಅವಲಂಬನೆಗಳ ಪಟ್ಟಿ ಇದೆ. ದಿಕ್ಕಿರುವ ಎಂದರೆ E1 -> E2 E2 ಗೆ E1 ಬೇಕು ಎನ್ನುತ್ತದೆ; ಚಕ್ರರಹಿತ ಎಂದರೆ ಲೂಪ್‌ಗಳಿಲ್ಲ, ಏಕೆಂದರೆ ಚಕ್ರದಲ್ಲಿನ ನೋಡ್ ಎಂದೂ ಆರಂಭಿಸಲಾರದು. Argument \"#E1\" ಒಂದು ಸಾಕ್ಷ್ಯ ಉಲ್ಲೇಖ: \"E1 ಉತ್ಪಾದಿಸುವುದನ್ನು ಬದಲಿಸಿ\" ಎಂದರ್ಥ. ಇದರಿಂದ Planner ರಾಜಧಾನಿ ತಿಳಿಯದೆ \"ರಾಜಧಾನಿಯ ಜನಸಂಖ್ಯೆ\" ವ್ಯಕ್ತಪಡಿಸಬಹುದು. ಅದು ರಚನೆ ಬರೆಯುತ್ತದೆ, Worker ಮೌಲ್ಯ ಕಂಡುಹಿಡಿಯುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "A DAG Is Also a Schedule",
    "headingKn": "DAG ಒಂದು ವೇಳಾಪಟ್ಟಿಯೂ ಹೌದು",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\">\n  <rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/>\n  <text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">The France+Germany plan: 2 levels, not 4 steps</text>\n  <rect x=\"30\" y=\"30\" width=\"100\" height=\"28\" rx=\"4\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"80\" y=\"42\" fill=\"#6ee7b7\" text-anchor=\"middle\">E1 capital_of</text><text x=\"80\" y=\"52\" fill=\"#6ee7b7\" text-anchor=\"middle\" font-size=\"6\">France</text>\n  <rect x=\"170\" y=\"30\" width=\"100\" height=\"28\" rx=\"4\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"220\" y=\"42\" fill=\"#6ee7b7\" text-anchor=\"middle\">E2 capital_of</text><text x=\"220\" y=\"52\" fill=\"#6ee7b7\" text-anchor=\"middle\" font-size=\"6\">Germany</text>\n  <text x=\"150\" y=\"46\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">level 0</text>\n  <path d=\"M80,58 V88\" stroke=\"#475569\"/><path d=\"M220,58 V88\" stroke=\"#475569\"/>\n  <rect x=\"30\" y=\"90\" width=\"100\" height=\"28\" rx=\"4\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"80\" y=\"102\" fill=\"#c4b5fd\" text-anchor=\"middle\">E3 population_of</text><text x=\"80\" y=\"112\" fill=\"#c4b5fd\" text-anchor=\"middle\" font-size=\"6\">#E1</text>\n  <rect x=\"170\" y=\"90\" width=\"100\" height=\"28\" rx=\"4\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"220\" y=\"102\" fill=\"#c4b5fd\" text-anchor=\"middle\">E4 population_of</text><text x=\"220\" y=\"112\" fill=\"#c4b5fd\" text-anchor=\"middle\" font-size=\"6\">#E2</text>\n  <text x=\"150\" y=\"106\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">level 1</text>\n  <text x=\"150\" y=\"150\" fill=\"#fde68a\" text-anchor=\"middle\">E1 and E2 are independent: run together</text>\n  <text x=\"150\" y=\"164\" fill=\"#fde68a\" text-anchor=\"middle\">E3 and E4 wait only for their own parent</text>\n  <text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">the DAG is also the schedule</text>\n</svg>",
    "captionEn": "Four nodes but only two dependency levels. Independent nodes in the same level can run together.",
    "captionKn": "ನಾಲ್ಕು ನೋಡ್‌ಗಳು ಆದರೆ ಎರಡು ಅವಲಂಬನೆ ಮಟ್ಟಗಳು ಮಾತ್ರ. ಒಂದೇ ಮಟ್ಟದ ಸ್ವತಂತ್ರ ನೋಡ್‌ಗಳು ಒಟ್ಟಿಗೆ ಚಲಿಸಬಹುದು."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Building the Planner",
    "textKn": "Planner ನಿರ್ಮಿಸುವುದು",
    "level": "H2"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "rewoo_1.py",
    "headingEn": "PlanNode and a deterministic Planner",
    "headingKn": "PlanNode ಮತ್ತು ನಿರ್ಧಾರಾತ್ಮಕ Planner",
    "descEn": "PlanNode is the DAG node. The Planner returns a list of them and never calls a tool or mentions a result. A production planner would be an LLM emitting the same structure as JSON, so the contract here (question in, validated plan out) is what matters.",
    "descKn": "PlanNode DAG ನೋಡ್. Planner ಅವುಗಳ ಪಟ್ಟಿ ಹಿಂತಿರುಗಿಸುತ್ತದೆ ಮತ್ತು ಎಂದೂ tool ಕರೆಯುವುದಿಲ್ಲ ಅಥವಾ ಫಲಿತಾಂಶ ಉಲ್ಲೇಖಿಸುವುದಿಲ್ಲ. Production planner ಅದೇ ರಚನೆಯನ್ನು JSON ಆಗಿ ನೀಡುವ LLM ಆಗಿರುತ್ತದೆ; ಆದ್ದರಿಂದ ಇಲ್ಲಿನ ಒಪ್ಪಂದ (ಪ್ರಶ್ನೆ ಒಳಗೆ, ಪರಿಶೀಲಿತ ಯೋಜನೆ ಹೊರಗೆ) ಮುಖ್ಯ.",
    "code": "KNOWN_TOOLS = {\"capital_of\", \"population_of\", \"verify_capital\", \"slow_lookup\"}\n\n\n@dataclass\nclass PlanNode:\n    evidence_id: str\n    tool: str\n    arguments: dict[str, Any]\n    dependencies: list[str] = field(default_factory=list)\n\n\nclass Planner:\n    \"\"\"A deterministic stand-in for an LLM planner. The contract is the same: question -> plan.\"\"\"\n\n    def plan(self, question: str) -> list[PlanNode]:\n        q = question.lower()\n        if \"compare\" in q and \"france\" in q and \"germany\" in q:\n            return [\n                PlanNode(\"E1\", \"capital_of\", {\"country\": \"France\"}),\n                PlanNode(\"E2\", \"capital_of\", {\"country\": \"Germany\"}),\n                PlanNode(\"E3\", \"population_of\", {\"city\": \"#E1\"}, [\"E1\"]),\n                PlanNode(\"E4\", \"population_of\", {\"city\": \"#E2\"}, [\"E2\"]),\n            ]\n        if \"capital\" in q and \"france\" in q:\n            return [\n                PlanNode(\"E1\", \"capital_of\", {\"country\": \"France\"}),\n                PlanNode(\"E2\", \"population_of\", {\"city\": \"#E1\"}, [\"E1\"]),\n            ]\n        return []"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "rewoo_1.py",
    "headingEn": "Levels and the plan contract",
    "headingKn": "ಮಟ್ಟಗಳು ಮತ್ತು ಯೋಜನೆಯ ಒಪ್ಪಂದ",
    "descEn": "levels() groups nodes by dependency depth using Kahn's algorithm and raises if no node can start, which is exactly a cycle or a missing dependency. validate() is our contract check: unique ids, known tools, no self or missing dependencies, no cycles. Checking before execution means nothing runs for an impossible plan.",
    "descKn": "levels() Kahn ಅಲ್ಗಾರಿದಮ್ ಬಳಸಿ ನೋಡ್‌ಗಳನ್ನು ಅವಲಂಬನೆ ಆಳದ ಪ್ರಕಾರ ಗುಂಪು ಮಾಡುತ್ತದೆ, ಮತ್ತು ಯಾವುದೇ ನೋಡ್ ಆರಂಭಿಸಲಾಗದಿದ್ದರೆ, ಅಂದರೆ ಚಕ್ರ ಅಥವಾ ಕಾಣೆಯಾದ ಅವಲಂಬನೆ, raise ಮಾಡುತ್ತದೆ. validate() ನಮ್ಮ ಒಪ್ಪಂದ ಪರಿಶೀಲನೆ: ವಿಶಿಷ್ಟ ids, ತಿಳಿದ tools, ಸ್ವಯಂ ಅಥವಾ ಕಾಣೆಯಾದ ಅವಲಂಬನೆ ಇಲ್ಲ, ಚಕ್ರಗಳಿಲ್ಲ. ಕಾರ್ಯಗತಗೊಳಿಸುವ ಮೊದಲು ಪರಿಶೀಲಿಸಿದರೆ ಅಸಾಧ್ಯ ಯೋಜನೆಗೆ ಏನೂ ಚಲಿಸುವುದಿಲ್ಲ.",
    "code": "def show(plan):\n    for n in plan:\n        print(f\"{n.evidence_id}: {n.tool}({n.arguments}) depends_on={n.dependencies}\")\n\n\ndef levels(plan):\n    \"\"\"Group nodes into dependency levels (Kahn's algorithm). Raises on a cycle or missing dependency.\"\"\"\n    remaining = {n.evidence_id: n for n in plan}\n    done: set[str] = set()\n    out = []\n    while remaining:\n        ready = [i for i, n in remaining.items() if all(d in done for d in n.dependencies)]\n        if not ready:\n            raise ValueError(\"no progress possible: cycle or missing dependency among \" + \", \".join(sorted(remaining)))\n        out.append(sorted(ready))\n        done.update(ready)\n        for i in ready:\n            del remaining[i]\n    return out\n\n\ndef validate(plan):\n    \"\"\"Our contract checks. Returns a list of problems (empty = valid).\"\"\"\n    problems = []\n    ids = [n.evidence_id for n in plan]\n    if len(set(ids)) != len(ids):\n        problems.append(\"duplicate evidence ids\")\n    for n in plan:\n        if n.tool not in KNOWN_TOOLS:\n            problems.append(f\"{n.evidence_id}: unknown tool {n.tool}\")\n        for d in n.dependencies:\n            if d == n.evidence_id:\n                problems.append(f\"{n.evidence_id}: depends on itself\")\n            elif d not in ids:\n                problems.append(f\"{n.evidence_id}: missing dependency {d}\")\n    if not problems:\n        try:\n            levels(plan)\n        except ValueError as exc:\n            problems.append(str(exc))\n    return problems"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "rewoo_1.py",
    "headingEn": "main(): five experiments",
    "headingKn": "main(): ಐದು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() prints the France plan, checks that the plan mentions no runtime value, builds the France+Germany plan and its levels, runs six plan-contract cases, and prints the cost model.",
    "descKn": "main() France ಯೋಜನೆ ಮುದ್ರಿಸುತ್ತದೆ, ಯೋಜನೆ ಯಾವುದೇ runtime ಮೌಲ್ಯ ಉಲ್ಲೇಖಿಸುವುದಿಲ್ಲ ಎಂದು ಪರಿಶೀಲಿಸುತ್ತದೆ, France+Germany ಯೋಜನೆ ಮತ್ತು ಅದರ ಮಟ್ಟಗಳನ್ನು ನಿರ್ಮಿಸುತ್ತದೆ, ಆರು ಯೋಜನೆ-ಒಪ್ಪಂದ ಪ್ರಕರಣಗಳನ್ನು ಚಲಾಯಿಸುತ್ತದೆ, ಮತ್ತು ವೆಚ್ಚ ಮಾದರಿ ಮುದ್ರಿಸುತ್ತದೆ.",
    "code": "def main():\n    planner = Planner()\n\n    section(\"1. The plan for the France question\")\n    question = \"What is the population of the capital of France, rounded to millions?\"\n    print(\"QUESTION:\", question)\n    plan = planner.plan(question)\n    show(plan)\n\n    section(\"2. The planner knows structure, not values\")\n    text = \" \".join(f\"{n.arguments}\" for n in plan)\n    print(\"mentions Paris:\", \"Paris\" in text, \"| mentions 2148000:\", \"2148000\" in text)\n    print(\"E2 argument is a reference:\", plan[1].arguments[\"city\"], \"| depends on:\", plan[1].dependencies)\n\n    section(\"3. A parallel plan: dependency levels\")\n    plan2 = planner.plan(\"Compare the populations of the capitals of France and Germany.\")\n    show(plan2)\n    print(\"levels:\", levels(plan2))\n    print(\"sequential steps:\", len(plan2), \"| dependency levels:\", len(levels(plan2)))\n\n    section(\"4. The plan contract\")\n    def n(i, tool=\"capital_of\", deps=None, args=None):\n        return PlanNode(i, tool, args or {}, deps or [])\n\n    cases = {\n        \"valid France plan\": plan,\n        \"duplicate ids\": [n(\"E1\"), n(\"E1\")],\n        \"unknown tool\": [n(\"E1\", \"delete_database\")],\n        \"missing dependency\": [n(\"E1\", deps=[\"E99\"])],\n        \"self dependency\": [n(\"E1\", deps=[\"E1\"])],\n        \"two-node cycle\": [n(\"E1\", deps=[\"E2\"]), n(\"E2\", deps=[\"E1\"])],\n    }\n    for name, p in cases.items():\n        probs = validate(p)\n        print(f\"{name:<20} -> {'OK' if not probs else probs}\")\n\n    section(\"5. Cost model (arithmetic on stated assumptions, NOT a measurement)\")\n    k = 300  # assumed tokens added per ReAct step\n    print(\"assume each ReAct step adds k = 300 tokens and the next call re-reads all earlier steps\")\n    print(f\"{'steps n':>8} {'ReAct re-read tokens k*n(n+1)/2':>34} {'plan-first: plan + solve (2 calls of ~n*k)':>46}\")\n    for steps in (3, 10, 20, 40):\n        react = k * steps * (steps + 1) // 2\n        plan_first = 2 * steps * k\n        print(f\"{steps:>8} {react:>34} {plan_first:>46}\")\n    print(\"ReAct grows as n^2, the plan-first figure grows as n. Caching, tool-result size and replanning change real numbers.\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. The plan for the France question ---\nQUESTION: What is the population of the capital of France, rounded to millions?\nE1: capital_of({'country': 'France'}) depends_on=[]\nE2: population_of({'city': '#E1'}) depends_on=['E1']\n\n--- 2. The planner knows structure, not values ---\nmentions Paris: False | mentions 2148000: False\nE2 argument is a reference: #E1 | depends on: ['E1']\n\n--- 3. A parallel plan: dependency levels ---\nE1: capital_of({'country': 'France'}) depends_on=[]\nE2: capital_of({'country': 'Germany'}) depends_on=[]\nE3: population_of({'city': '#E1'}) depends_on=['E1']\nE4: population_of({'city': '#E2'}) depends_on=['E2']\nlevels: [['E1', 'E2'], ['E3', 'E4']]\nsequential steps: 4 | dependency levels: 2\n\n--- 4. The plan contract ---\nvalid France plan    -> OK\nduplicate ids        -> ['duplicate evidence ids']\nunknown tool         -> ['E1: unknown tool delete_database']\nmissing dependency   -> ['E1: missing dependency E99']\nself dependency      -> ['E1: depends on itself']\ntwo-node cycle       -> ['no progress possible: cycle or missing dependency among E1, E2']\n\n--- 5. Cost model (arithmetic on stated assumptions, NOT a measurement) ---\nassume each ReAct step adds k = 300 tokens and the next call re-reads all earlier steps\n steps n    ReAct re-read tokens k*n(n+1)/2     plan-first: plan + solve (2 calls of ~n*k)\n       3                               1800                                           1800\n      10                              16500                                           6000\n      20                              63000                                          12000\n      40                             246000                                          24000\nReAct grows as n^2, the plan-first figure grows as n. Caching, tool-result size and replanning change real numbers."
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
    "headingEn": "The Plan Has Structure and No Values",
    "headingKn": "ಯೋಜನೆಗೆ ರಚನೆ ಇದೆ, ಮೌಲ್ಯಗಳಿಲ್ಲ",
    "bodyEn": "Section 1 prints exactly two nodes: E1 = capital_of(France) with no dependencies and E2 = population_of(#E1) depending on E1. Section 2 checks the claim directly: the plan text contains neither \"Paris\" nor \"2148000\", and E2's argument is the reference \"#E1\". Nothing has run yet. Section 3 shows the France+Germany plan has four nodes but only two levels: [E1, E2] then [E3, E4]. A flat list of four steps hides that E1 and E2 are independent.",
    "bodyKn": "ವಿಭಾಗ 1 ಸರಿಯಾಗಿ ಎರಡು ನೋಡ್‌ಗಳನ್ನು ಮುದ್ರಿಸುತ್ತದೆ: ಅವಲಂಬನೆ ಇಲ್ಲದ E1 = capital_of(France) ಮತ್ತು E1 ಅವಲಂಬಿತ E2 = population_of(#E1). ವಿಭಾಗ 2 ಹೇಳಿಕೆಯನ್ನು ನೇರವಾಗಿ ಪರಿಶೀಲಿಸುತ್ತದೆ: ಯೋಜನೆ ಪಠ್ಯದಲ್ಲಿ \"Paris\" ಅಥವಾ \"2148000\" ಇಲ್ಲ, ಮತ್ತು E2 ರ argument ಉಲ್ಲೇಖ \"#E1\". ಇನ್ನೂ ಏನೂ ಚಲಿಸಿಲ್ಲ. ವಿಭಾಗ 3 France+Germany ಯೋಜನೆಗೆ ನಾಲ್ಕು ನೋಡ್‌ಗಳು ಆದರೆ ಎರಡೇ ಮಟ್ಟಗಳಿವೆ ಎಂದು ತೋರಿಸುತ್ತದೆ: [E1, E2] ನಂತರ [E3, E4]. ನಾಲ್ಕು ಹಂತಗಳ ಸಮತಟ್ಟಾದ ಪಟ್ಟಿ E1 ಮತ್ತು E2 ಸ್ವತಂತ್ರ ಎಂಬುದನ್ನು ಮರೆಮಾಡುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "The Contract Catches Five Different Defects",
    "headingKn": "ಒಪ್ಪಂದ ಐದು ಬೇರೆ ದೋಷಗಳನ್ನು ಹಿಡಿಯುತ್ತದೆ",
    "bodyEn": "Section 4 runs six plans. The valid France plan returns OK. A duplicate id, an unknown tool (delete_database), a missing dependency (E99), a self-dependency and a two-node cycle are each rejected with a specific message. The cycle is only found because levels() cannot start any node. A validator that checks ids, tools and dependency names alone would accept that cycle, which Part 3 demonstrates with the lesson's own validator.",
    "bodyKn": "ವಿಭಾಗ 4 ಆರು ಯೋಜನೆಗಳನ್ನು ಚಲಾಯಿಸುತ್ತದೆ. ಮಾನ್ಯ France ಯೋಜನೆ OK ಹಿಂತಿರುಗಿಸುತ್ತದೆ. ನಕಲಿ id, ತಿಳಿಯದ tool (delete_database), ಕಾಣೆಯಾದ ಅವಲಂಬನೆ (E99), ಸ್ವಯಂ-ಅವಲಂಬನೆ ಮತ್ತು ಎರಡು-ನೋಡ್ ಚಕ್ರ ಪ್ರತಿಯೊಂದೂ ನಿರ್ದಿಷ್ಟ ಸಂದೇಶದೊಂದಿಗೆ ತಿರಸ್ಕೃತ. ಚಕ್ರ ಸಿಗುವುದು levels() ಯಾವ ನೋಡ್ ಅನ್ನೂ ಆರಂಭಿಸಲಾಗದ ಕಾರಣ ಮಾತ್ರ. ids, tools ಮತ್ತು ಅವಲಂಬನೆ ಹೆಸರುಗಳನ್ನು ಮಾತ್ರ ಪರಿಶೀಲಿಸುವ validator ಆ ಚಕ್ರವನ್ನು ಒಪ್ಪುತ್ತದೆ; ಇದನ್ನು ಭಾಗ 3 ಪಾಠದ ಸ್ವಂತ validator ಜೊತೆ ತೋರಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Computed: At Three Steps There Is No Saving",
    "headingKn": "ನಿಜವಾಗಿ ಲೆಕ್ಕಿಸಿದ್ದು: ಮೂರು ಹಂತಗಳಲ್ಲಿ ಉಳಿತಾಯವಿಲ್ಲ",
    "bodyEn": "Section 5 uses k = 300 tokens per step. At n = 3 the ReAct re-read total is 1,800 and the plan-first figure is also 1,800. At n = 10 it is 16,500 against 6,000, at n = 20 it is 63,000 against 12,000, and at n = 40 it is 246,000 against 24,000. These are outputs of a two-line formula under our assumptions, not measurements. The honest reading is that the quadratic term only dominates for longer chains, which matches the lesson's advice to use the simplest architecture that works.",
    "bodyKn": "ವಿಭಾಗ 5 ಪ್ರತಿ ಹಂತಕ್ಕೆ k = 300 tokens ಬಳಸುತ್ತದೆ. n = 3 ರಲ್ಲಿ ReAct ಮರು-ಓದು ಒಟ್ಟು 1,800 ಮತ್ತು plan-first ಸಂಖ್ಯೆಯೂ 1,800. n = 10 ರಲ್ಲಿ 16,500 ವಿರುದ್ಧ 6,000, n = 20 ರಲ್ಲಿ 63,000 ವಿರುದ್ಧ 12,000, ಮತ್ತು n = 40 ರಲ್ಲಿ 246,000 ವಿರುದ್ಧ 24,000. ಇವು ನಮ್ಮ ಊಹೆಗಳ ಅಡಿಯಲ್ಲಿ ಎರಡು-ಸಾಲಿನ ಸೂತ್ರದ ಔಟ್‌ಪುಟ್, ಅಳತೆಗಳಲ್ಲ. ಪ್ರಾಮಾಣಿಕ ಓದು: ವರ್ಗ ಪದ ಉದ್ದದ ಸರಪಳಿಗಳಲ್ಲಿ ಮಾತ್ರ ಪ್ರಬಲ; ಇದು ಕೆಲಸ ಮಾಡುವ ಸರಳ ವಿನ್ಯಾಸ ಬಳಸಿ ಎಂಬ ಪಾಠದ ಸಲಹೆಗೆ ಹೊಂದುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "When Planning First Works",
    "textKn": "ಮೊದಲು ಯೋಜಿಸುವುದು ಯಾವಾಗ ಕೆಲಸ ಮಾಡುತ್ತದೆ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Predictable Workflows Versus Dynamic Environments",
    "headingKn": "ಊಹಿಸಬಹುದಾದ ಕೆಲಸದ ಹರಿವು ಮತ್ತು ಕ್ರಿಯಾತ್ಮಕ ಪರಿಸರ",
    "bodyEn": "Planning first fits research lookups, database enrichment, multi-source retrieval and comparison tasks, where the structure is known before any tool runs. It is weak in a browser or desktop: a cookie banner, a failed login or an unexpected modal cannot be planned for in advance, so the next action depends on the latest observation and ReAct, or Plan-and-Execute with frequent replanning, fits better. Use the simplest pattern that reliably works: a one-tool question needs no DAG at all.",
    "bodyKn": "ಸಂಶೋಧನಾ ಹುಡುಕಾಟ, ಡೇಟಾಬೇಸ್ ಸಮೃದ್ಧೀಕರಣ, ಬಹು-ಮೂಲ ಪಡೆಯುವಿಕೆ ಮತ್ತು ಹೋಲಿಕೆ ಕಾರ್ಯಗಳಿಗೆ ಮೊದಲು ಯೋಜಿಸುವುದು ಹೊಂದುತ್ತದೆ; ಯಾವುದೇ tool ಚಲಿಸುವ ಮೊದಲೇ ರಚನೆ ತಿಳಿದಿರುತ್ತದೆ. ಬ್ರೌಸರ್ ಅಥವಾ ಡೆಸ್ಕ್‌ಟಾಪ್‌ನಲ್ಲಿ ಇದು ದುರ್ಬಲ: cookie banner, ವಿಫಲ ಲಾಗಿನ್ ಅಥವಾ ಅನಿರೀಕ್ಷಿತ modal ಅನ್ನು ಮುಂಚಿತವಾಗಿ ಯೋಜಿಸಲಾಗದು, ಹಾಗಾಗಿ ಮುಂದಿನ action ಇತ್ತೀಚಿನ observation ಮೇಲೆ ಅವಲಂಬಿತ; ReAct ಅಥವಾ ಆಗಾಗ್ಗೆ replanning ಇರುವ Plan-and-Execute ಹೆಚ್ಚು ಹೊಂದುತ್ತದೆ. ವಿಶ್ವಾಸಾರ್ಹವಾಗಿ ಕೆಲಸ ಮಾಡುವ ಸರಳ ಮಾದರಿ ಬಳಸಿ: ಒಂದು-tool ಪ್ರಶ್ನೆಗೆ DAG ಬೇಕೇ ಇಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A plan is both reasoning and a scheduling structure. Because the plan is explicit data, a runtime can validate it, run independent nodes together, retry or replace one node, and checkpoint the evidence. Because planning does not depend on tool results, the planner can even be a smaller model trained on plans from a larger one (planner distillation), while a stronger model handles the final solve.",
    "bodyKn": "ಯೋಜನೆ ತರ್ಕವೂ ಹೌದು, ವೇಳಾಪಟ್ಟಿ ರಚನೆಯೂ ಹೌದು. ಯೋಜನೆ ಸ್ಪಷ್ಟ ಡೇಟಾ ಆಗಿರುವುದರಿಂದ runtime ಅದನ್ನು ಪರಿಶೀಲಿಸಬಹುದು, ಸ್ವತಂತ್ರ ನೋಡ್‌ಗಳನ್ನು ಒಟ್ಟಿಗೆ ಚಲಾಯಿಸಬಹುದು, ಒಂದು ನೋಡ್ ಅನ್ನು ಮರುಪ್ರಯತ್ನಿಸಬಹುದು ಅಥವಾ ಬದಲಿಸಬಹುದು, ಮತ್ತು ಸಾಕ್ಷ್ಯವನ್ನು checkpoint ಮಾಡಬಹುದು. ಯೋಜನೆ tool ಫಲಿತಾಂಶಗಳನ್ನು ಅವಲಂಬಿಸದ ಕಾರಣ, planner ದೊಡ್ಡ ಮಾದರಿಯ ಯೋಜನೆಗಳ ಮೇಲೆ ತರಬೇತಿ ಪಡೆದ ಚಿಕ್ಕ ಮಾದರಿ (planner distillation) ಆಗಿರಬಹುದು, ಅಂತಿಮ solve ಅನ್ನು ಬಲಿಷ್ಠ ಮಾದರಿ ನಿರ್ವಹಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Where This Appears in AI Systems",
    "headingKn": "AI ವ್ಯವಸ್ಥೆಗಳಲ್ಲಿ ಇದು ಎಲ್ಲಿ ಕಾಣುತ್ತದೆ",
    "bodyEn": "A research agent plans one search per company, runs them in parallel, then writes a comparison. A data agent plans lookups across several APIs and joins them at the end. A report generator plans sections, fetches the evidence for each, then drafts. Workflow engines already look like this (tasks, dependencies, retries, checkpoints); the model adds planning and solving around a mostly deterministic core.",
    "bodyKn": "Research agent ಪ್ರತಿ ಕಂಪನಿಗೆ ಒಂದು ಹುಡುಕಾಟ ಯೋಜಿಸಿ, ಸಮಾನಾಂತರವಾಗಿ ಚಲಾಯಿಸಿ, ಹೋಲಿಕೆ ಬರೆಯುತ್ತದೆ. Data agent ಹಲವು APIs ಗಳಲ್ಲಿ ಹುಡುಕಾಟ ಯೋಜಿಸಿ ಕೊನೆಯಲ್ಲಿ ಜೋಡಿಸುತ್ತದೆ. ವರದಿ ಜನರೇಟರ್ ವಿಭಾಗಗಳನ್ನು ಯೋಜಿಸಿ, ಪ್ರತಿಯೊಂದರ ಸಾಕ್ಷ್ಯ ತಂದು, ನಂತರ ಕರಡು ಬರೆಯುತ್ತದೆ. ಕೆಲಸದ ಹರಿವು ಯಂತ್ರಗಳು ಈಗಾಗಲೇ ಹೀಗೆ ಕಾಣುತ್ತವೆ (ಕಾರ್ಯಗಳು, ಅವಲಂಬನೆಗಳು, retries, checkpoints); ಹೆಚ್ಚಾಗಿ ನಿರ್ಧಾರಾತ್ಮಕ ಕೇಂದ್ರದ ಸುತ್ತ ಮಾದರಿ ಯೋಜನೆ ಮತ್ತು solve ಸೇರಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconceptions: \"a plan is a list\" (the DAG also says which steps are independent) and \"ReWOO is always cheaper\" (the model above shows no saving at three steps, and a static plan can go stale). A plan is a dependency graph, and whether decoupling pays off depends on workflow length and how predictable the environment is.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆಗಳು: \"ಯೋಜನೆ ಒಂದು ಪಟ್ಟಿ\" (DAG ಯಾವ ಹಂತಗಳು ಸ್ವತಂತ್ರ ಎಂದೂ ಹೇಳುತ್ತದೆ) ಮತ್ತು \"ReWOO ಯಾವಾಗಲೂ ಅಗ್ಗ\" (ಮೇಲಿನ ಮಾದರಿ ಮೂರು ಹಂತಗಳಲ್ಲಿ ಉಳಿತಾಯ ತೋರಿಸುವುದಿಲ್ಲ, ಮತ್ತು ಸ್ಥಿರ ಯೋಜನೆ ಹಳೆಯದಾಗಬಹುದು). ಯೋಜನೆ ಒಂದು ಅವಲಂಬನೆ ಗ್ರಾಫ್, ಮತ್ತು ಬೇರ್ಪಡಿಸುವುದು ಲಾಭ ನೀಡುತ್ತದೆಯೇ ಎಂಬುದು ಕೆಲಸದ ಹರಿವಿನ ಉದ್ದ ಮತ್ತು ಪರಿಸರ ಎಷ್ಟು ಊಹಿಸಬಹುದಾದದ್ದು ಎಂಬುದರ ಮೇಲೆ ಅವಲಂಬಿತ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "ReWOO: plan first, execute, then solve. Planner: question to plan. Worker: executes one node. Solver: evidence to answer. Plan DAG: directed acyclic dependency graph. Evidence ID: name such as E1 for a node's output. Evidence reference: placeholder such as #E1. Dependency level: nodes that can start together. Planner distillation: training a small planner from a large one's plans. Plan-and-Execute: plan-first with optional replanning.",
    "bodyKn": "ReWOO: ಮೊದಲು ಯೋಜಿಸಿ, ಚಲಾಯಿಸಿ, ನಂತರ solve. Planner: ಪ್ರಶ್ನೆಯಿಂದ ಯೋಜನೆ. Worker: ಒಂದು ನೋಡ್ ಚಲಾಯಿಸುತ್ತದೆ. Solver: ಸಾಕ್ಷ್ಯದಿಂದ ಉತ್ತರ. Plan DAG: ದಿಕ್ಕಿರುವ ಚಕ್ರರಹಿತ ಅವಲಂಬನೆ ಗ್ರಾಫ್. Evidence ID: ನೋಡ್‌ನ ಔಟ್‌ಪುಟ್‌ಗೆ E1 ನಂತಹ ಹೆಸರು. Evidence reference: #E1 ನಂತಹ ಸ್ಥಾನಧಾರಕ. Dependency level: ಒಟ್ಟಿಗೆ ಆರಂಭಿಸಬಹುದಾದ ನೋಡ್‌ಗಳು. Planner distillation: ದೊಡ್ಡದರ ಯೋಜನೆಗಳಿಂದ ಚಿಕ್ಕ planner ತರಬೇತಿ. Plan-and-Execute: ಐಚ್ಛಿಕ replanning ಇರುವ plan-first."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) Planner, Worker and Solver see different information. 2) #E1 lets a plan describe structure without knowing values. 3) A DAG is also the schedule: four steps can be two levels. 4) Validate the plan before running anything, including cycles. 5) The quadratic saving needs long chains; at three steps there was none. 6) Static plans go stale, which is the job of replanning in Part 3. Part 2 builds the Workers and the DAG executor.",
    "bodyKn": "1) Planner, Worker ಮತ್ತು Solver ಗೆ ಬೇರೆ ಬೇರೆ ಮಾಹಿತಿ ಕಾಣುತ್ತದೆ. 2) #E1 ಮೌಲ್ಯ ತಿಳಿಯದೆ ಯೋಜನೆ ರಚನೆ ವಿವರಿಸಲು ಅವಕಾಶ ನೀಡುತ್ತದೆ. 3) DAG ವೇಳಾಪಟ್ಟಿಯೂ ಹೌದು: ನಾಲ್ಕು ಹಂತಗಳು ಎರಡು ಮಟ್ಟಗಳಾಗಬಹುದು. 4) ಏನನ್ನೂ ಚಲಾಯಿಸುವ ಮೊದಲು ಯೋಜನೆಯನ್ನು ಪರಿಶೀಲಿಸಿ, ಚಕ್ರಗಳೂ ಸೇರಿ. 5) ವರ್ಗ ಉಳಿತಾಯಕ್ಕೆ ಉದ್ದದ ಸರಪಳಿಗಳು ಬೇಕು; ಮೂರು ಹಂತಗಳಲ್ಲಿ ಇರಲಿಲ್ಲ. 6) ಸ್ಥಿರ ಯೋಜನೆ ಹಳೆಯದಾಗುತ್ತದೆ; ಅದು ಭಾಗ 3 ರ replanning ನ ಕೆಲಸ. ಭಾಗ 2 Workers ಮತ್ತು DAG executor ನಿರ್ಮಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "Why can a deeply interleaved ReAct trajectory re-read ever more context?",
      "qKn": "ಆಳವಾಗಿ ಹೆಣೆದ ReAct trajectory ಹೆಚ್ಚು ಹೆಚ್ಚು context ಅನ್ನು ಏಕೆ ಮತ್ತೆ ಓದುತ್ತದೆ?",
      "opts": [
       "Tools duplicate their schemas",
       "Each call can include all earlier thoughts, actions and observations",
       "Python duplicates every prompt",
       "ReAct runs every tool twice"
      ],
      "optsKn": [
       "Tools ತಮ್ಮ schemas ನಕಲಿಸುತ್ತವೆ",
       "ಪ್ರತಿ ಕರೆ ಹಿಂದಿನ ಎಲ್ಲಾ thoughts, actions ಮತ್ತು observations ಒಳಗೊಳ್ಳಬಹುದು",
       "Python ಪ್ರತಿ prompt ನಕಲಿಸುತ್ತದೆ",
       "ReAct ಪ್ರತಿ tool ಎರಡು ಬಾರಿ ಚಲಾಯಿಸುತ್ತದೆ"
      ],
      "correct": 1
     },
     {
      "q": "What are the three roles in ReWOO?",
      "qKn": "ReWOO ದ ಮೂರು ಪಾತ್ರಗಳು ಯಾವುವು?",
      "opts": [
       "Generator, Critic, Optimizer",
       "Actor, Evaluator, Reflector",
       "Planner, Workers, Solver",
       "Router, Cache, Database"
      ],
      "optsKn": [
       "Generator, Critic, Optimizer",
       "Actor, Evaluator, Reflector",
       "Planner, Workers, Solver",
       "Router, Cache, Database"
      ],
      "correct": 2
     },
     {
      "q": "What does the argument {\"city\": \"#E1\"} mean?",
      "qKn": "Argument {\"city\": \"#E1\"} ಅರ್ಥವೇನು?",
      "opts": [
       "Use worker number one",
       "Retry once",
       "Substitute the runtime output of evidence E1",
       "Execute E1 as Python code"
      ],
      "optsKn": [
       "Worker ಸಂಖ್ಯೆ ಒಂದನ್ನು ಬಳಸಿ",
       "ಒಮ್ಮೆ ಮರುಪ್ರಯತ್ನಿಸಿ",
       "ಸಾಕ್ಷ್ಯ E1 ರ runtime ಔಟ್‌ಪುಟ್ ಬದಲಿಸಿ",
       "E1 ಅನ್ನು Python ಕೋಡ್ ಆಗಿ ಚಲಾಯಿಸಿ"
      ],
      "correct": 2
     },
     {
      "q": "With E1 and E2 having no dependencies and E3 depending on both, which can start first?",
      "qKn": "E1 ಮತ್ತು E2 ಗೆ ಅವಲಂಬನೆ ಇಲ್ಲ ಮತ್ತು E3 ಎರಡರ ಮೇಲೂ ಅವಲಂಬಿತವಾದರೆ, ಮೊದಲು ಯಾವುದು ಆರಂಭಿಸಬಹುದು?",
      "opts": [
       "E1 and E2",
       "E2 and E3",
       "E1 and E3",
       "All three"
      ],
      "optsKn": [
       "E1 ಮತ್ತು E2",
       "E2 ಮತ್ತು E3",
       "E1 ಮತ್ತು E3",
       "ಮೂರೂ"
      ],
      "correct": 0
     },
     {
      "q": "In this lesson's cost model with k = 300, how do the two columns compare at n = 3?",
      "qKn": "ಈ ಪಾಠದ k = 300 ವೆಚ್ಚ ಮಾದರಿಯಲ್ಲಿ n = 3 ರಲ್ಲಿ ಎರಡು ಕಾಲಂಗಳ ಹೋಲಿಕೆ ಹೇಗೆ?",
      "opts": [
       "ReAct is 10 times larger",
       "Plan-first is 10 times larger",
       "They are equal at 1,800",
       "Both are zero"
      ],
      "optsKn": [
       "ReAct 10 ಪಟ್ಟು ದೊಡ್ಡದು",
       "Plan-first 10 ಪಟ್ಟು ದೊಡ್ಡದು",
       "1,800 ರಲ್ಲಿ ಸಮ",
       "ಎರಡೂ ಸೊನ್ನೆ"
      ],
      "correct": 2
     }
    ]
   }
  }
 ]
};
