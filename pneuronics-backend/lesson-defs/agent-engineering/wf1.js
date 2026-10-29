module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6166020ed05b32152f",
 "order": 0,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Anthropic's Workflow Patterns: Simple Over Complex (Part 1 of 3) — Workflow Versus Agent, Chaining and Routing",
 "titleKn": "Anthropic ನ Workflow Patterns: ಸರಳ ಸಂಕೀರ್ಣಕ್ಕಿಂತ ಮೇಲು (ಭಾಗ 1 / 3) — Workflow ಮತ್ತು Agent, Chaining ಮತ್ತು Routing",
 "desc": "Learn who owns the execution graph in a workflow versus an agent, build prompt chaining with a code gate and routing with a handler registry, and find that untidy model output misroutes and keyword stand-ins prove flow only.",
 "descKn": "Workflow ಮತ್ತು agent ನಲ್ಲಿ ಚಲಾವಣೆ graph ಯಾರದು ಎಂದು ಕಲಿಯಿರಿ, ಕೋಡ್ gate ಇರುವ prompt chaining ಮತ್ತು handler ನೋಂದಣಿ ಇರುವ routing ನಿರ್ಮಿಸಿ, ಮತ್ತು ಅಸ್ತವ್ಯಸ್ತ ಮಾದರಿ ಔಟ್‌ಪುಟ್ ತಪ್ಪು-ಮಾರ್ಗ ಮಾಡುತ್ತದೆ ಹಾಗೂ ಕೀವರ್ಡ್ ಬದಲಿ ಹರಿವು ಮಾತ್ರ ಸಾಬೀತುಪಡಿಸುತ್ತದೆ ಎಂದು ಕಂಡುಹಿಡಿಯಿರಿ.",
 "objectives": [
  "Distinguish a workflow from an agent by who owns the graph.",
  "Explain the augmented LLM and why tools do not imply agency.",
  "Implement prompt chaining with a programmatic gate.",
  "Implement routing with an allowlist and a fallback.",
  "Treat model output as untrusted input at every boundary."
 ],
 "objectivesKn": [
  "Graph ಯಾರದು ಎಂಬುದರ ಮೂಲಕ workflow ಮತ್ತು agent ಬೇರ್ಪಡಿಸಿ.",
  "ವರ್ಧಿತ LLM ಮತ್ತು tools ಏಜೆನ್ಸಿ ಸೂಚಿಸುವುದಿಲ್ಲ ಏಕೆ ಎಂದು ವಿವರಿಸಿ.",
  "ಪ್ರೋಗ್ರಾಮ್ಯಾಟಿಕ್ gate ಇರುವ prompt chaining ಅಳವಡಿಸಿ.",
  "ಅನುಮತಿ ಪಟ್ಟಿ ಮತ್ತು fallback ಇರುವ routing ಅಳವಡಿಸಿ.",
  "ಪ್ರತಿ ಗಡಿಯಲ್ಲಿ ಮಾದರಿ ಔಟ್‌ಪುಟ್ ಅನ್ನು ನಂಬಲಾಗದ ಇನ್‌ಪುಟ್ ಎಂದು ಪರಿಗಣಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Anthropic's Workflow Patterns: Simple Over Complex (Part 1 of 3)",
    "textKn": "Anthropic ನ Workflow Patterns: ಸರಳ ಸಂಕೀರ್ಣಕ್ಕಿಂತ ಮೇಲು (ಭಾಗ 1 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 1 of 3: workflow versus agent, the augmented LLM, prompt chaining and routing. Every output below was genuinely produced by the lab file on Python 3.14.5. The pasted source gave ScriptedLLM only in part; its remaining branches are written to match the described behaviour. The model is a deterministic stand-in so that control flow, not language, is what you study. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 1ನೆಯದು: workflow ಮತ್ತು agent, ವರ್ಧಿತ LLM, prompt chaining ಮತ್ತು routing. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಅಂಟಿಸಿದ ಮೂಲ ScriptedLLM ಅನ್ನು ಭಾಗಶಃ ನೀಡಿತ್ತು; ಉಳಿದ ಶಾಖೆಗಳನ್ನು ವಿವರಿಸಿದ ವರ್ತನೆಗೆ ಹೊಂದುವಂತೆ ಬರೆಯಲಾಗಿದೆ. ಮಾದರಿ ನಿರ್ಧಾರಾತ್ಮಕ ಬದಲಿ, ಆದ್ದರಿಂದ ನೀವು ಭಾಷೆಯಲ್ಲ, ನಿಯಂತ್ರಣ ಹರಿವು ಅಧ್ಯಯನ ಮಾಡುತ್ತೀರಿ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Start Simple",
    "textKn": "ಸರಳವಾಗಿ ಆರಂಭಿಸಿ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Workflow Versus Agent",
    "headingKn": "Workflow ಮತ್ತು Agent",
    "bodyEn": "A workflow is LLMs and tools arranged through code paths the engineer wrote. An agent lets the model decide the next action from what it observes. The fastest test is who owns the execution graph: the engineer for a workflow, the model for an agent. Workflows give predictable cost and latency, an auditable path and easy debugging, and they suit tasks whose steps are known beforehand, such as a legally defined insurance claim process. Agents earn their cost when the next step depends on what the last step discovered, such as investigating a slow production service.",
    "bodyKn": "Workflow ಎಂದರೆ ಇಂಜಿನಿಯರ್ ಬರೆದ ಕೋಡ್ ದಾರಿಗಳ ಮೂಲಕ ಜೋಡಿಸಿದ LLM ಗಳು ಮತ್ತು tools. Agent ಮಾದರಿಗೆ ತಾನು ಗಮನಿಸಿದ್ದರಿಂದ ಮುಂದಿನ ಕ್ರಿಯೆ ನಿರ್ಧರಿಸಲು ಬಿಡುತ್ತದೆ. ವೇಗದ ಪರೀಕ್ಷೆ: ಚಲಾವಣೆ graph ಯಾರದು, workflow ಗೆ ಇಂಜಿನಿಯರ್, agent ಗೆ ಮಾದರಿ. Workflows ಊಹಿಸಬಹುದಾದ ವೆಚ್ಚ ಮತ್ತು ವಿಳಂಬ, ಲೆಕ್ಕಪರಿಶೋಧಿಸಬಹುದಾದ ದಾರಿ ಮತ್ತು ಸುಲಭ ಡೀಬಗ್ ನೀಡುತ್ತವೆ, ಮತ್ತು ಹೆಜ್ಜೆಗಳು ಮೊದಲೇ ತಿಳಿದ ಕಾರ್ಯಗಳಿಗೆ ಹೊಂದುತ್ತವೆ, ಉದಾಹರಣೆಗೆ ಕಾನೂನಾತ್ಮಕವಾಗಿ ವ್ಯಾಖ್ಯಾನಿಸಿದ ವಿಮಾ ಕ್ಲೈಮ್ ಪ್ರಕ್ರಿಯೆ. ಕೊನೆಯ ಹೆಜ್ಜೆ ಕಂಡುಹಿಡಿದದ್ದರ ಮೇಲೆ ಮುಂದಿನ ಹೆಜ್ಜೆ ಅವಲಂಬಿತವಾದಾಗ agents ತಮ್ಮ ವೆಚ್ಚ ಸಮರ್ಥಿಸುತ್ತವೆ, ಉದಾಹರಣೆಗೆ ನಿಧಾನ production ಸೇವೆಯ ತನಿಖೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "The Augmented LLM",
    "headingKn": "ವರ್ಧಿತ LLM",
    "bodyEn": "An augmented LLM is a model plus search, tools and memory. Those capabilities do not make a system an agent. If your code always runs search, then the model, the graph is still the engineer's fixed sequence. Tool use is about what the model can reach; agency is about who decides the order.",
    "bodyKn": "ವರ್ಧಿತ LLM ಎಂದರೆ ಮಾದರಿ ಜೊತೆ search, tools ಮತ್ತು ಮೆಮೊರಿ. ಆ ಸಾಮರ್ಥ್ಯಗಳು ವ್ಯವಸ್ಥೆಯನ್ನು agent ಮಾಡುವುದಿಲ್ಲ. ನಿಮ್ಮ ಕೋಡ್ ಯಾವಾಗಲೂ search ನಂತರ ಮಾದರಿ ಚಲಾಯಿಸಿದರೆ graph ಇನ್ನೂ ಇಂಜಿನಿಯರ್‌ನ ನಿಗದಿತ ಅನುಕ್ರಮ. Tool ಬಳಕೆ ಮಾದರಿ ಏನು ತಲುಪಬಲ್ಲದು ಎಂಬುದರ ಬಗ್ಗೆ; ಏಜೆನ್ಸಿ ಕ್ರಮ ಯಾರು ನಿರ್ಧರಿಸುತ್ತಾರೆ ಎಂಬುದರ ಬಗ್ಗೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Control Versus Autonomy",
    "headingKn": "ನಿಯಂತ್ರಣ ಮತ್ತು ಸ್ವಾಯತ್ತತೆ",
    "svgCode": "<svg viewBox=\"0 0 300 215\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\">\n  <rect width=\"300\" height=\"215\" rx=\"8\" fill=\"#0f172a\"/>\n  <text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">Five workflow patterns as control-flow shapes</text>\n  <rect x=\"10\" y=\"24\" width=\"86\" height=\"40\" rx=\"4\" fill=\"#1e293b\" stroke=\"#60a5fa\"/><text x=\"53\" y=\"38\" fill=\"#93c5fd\" text-anchor=\"middle\">1 CHAIN</text><text x=\"53\" y=\"52\" fill=\"#93c5fd\" text-anchor=\"middle\" font-size=\"6\">A then B then C</text>\n  <rect x=\"107\" y=\"24\" width=\"86\" height=\"40\" rx=\"4\" fill=\"#1e293b\" stroke=\"#34d399\"/><text x=\"150\" y=\"38\" fill=\"#6ee7b7\" text-anchor=\"middle\">2 ROUTE</text><text x=\"150\" y=\"52\" fill=\"#6ee7b7\" text-anchor=\"middle\" font-size=\"6\">pick one branch</text>\n  <rect x=\"204\" y=\"24\" width=\"86\" height=\"40\" rx=\"4\" fill=\"#1e293b\" stroke=\"#fbbf24\"/><text x=\"247\" y=\"38\" fill=\"#fde68a\" text-anchor=\"middle\">3 PARALLEL</text><text x=\"247\" y=\"52\" fill=\"#fde68a\" text-anchor=\"middle\" font-size=\"6\">fan out, fan in</text>\n  <rect x=\"58\" y=\"74\" width=\"86\" height=\"40\" rx=\"4\" fill=\"#1e293b\" stroke=\"#a78bfa\"/><text x=\"101\" y=\"88\" fill=\"#c4b5fd\" text-anchor=\"middle\">4 ORCHESTRATE</text><text x=\"101\" y=\"102\" fill=\"#c4b5fd\" text-anchor=\"middle\" font-size=\"6\">task picks workers</text>\n  <rect x=\"156\" y=\"74\" width=\"86\" height=\"40\" rx=\"4\" fill=\"#1e293b\" stroke=\"#f87171\"/><text x=\"199\" y=\"88\" fill=\"#fecaca\" text-anchor=\"middle\">5 EVALUATE</text><text x=\"199\" y=\"102\" fill=\"#fecaca\" text-anchor=\"middle\" font-size=\"6\">bounded feedback loop</text>\n  <path d=\"M20,136 H280\" stroke=\"#475569\"/>\n  <text x=\"20\" y=\"150\" fill=\"#94a3b8\" font-size=\"6\">MORE CONTROL (engineer owns the graph)</text>\n  <text x=\"280\" y=\"150\" fill=\"#94a3b8\" font-size=\"6\" text-anchor=\"end\">MORE AUTONOMY (model owns it)</text>\n  <text x=\"20\" y=\"168\" fill=\"#cbd5e1\" font-size=\"6\">direct call - augmented LLM - the five patterns - agent loop</text>\n  <text x=\"150\" y=\"190\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">start at the left; move right only when a measured failure demands it</text>\n  <text x=\"150\" y=\"203\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">and if plain code can decide, use plain code</text>\n</svg>",
    "captionEn": "The five patterns sit between a single call and a full agent loop. Move right only when a measured failure demands it.",
    "captionKn": "ಐದು ಮಾದರಿಗಳು ಒಂದು ಕರೆ ಮತ್ತು ಪೂರ್ಣ agent ಚಕ್ರದ ನಡುವೆ ಇವೆ. ಅಳೆದ ವೈಫಲ್ಯ ಬೇಡಿದಾಗ ಮಾತ್ರ ಬಲಕ್ಕೆ ಸರಿಯಿರಿ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Five patterns, five questions",
    "headingKn": "ಐದು ಮಾದರಿಗಳು, ಐದು ಪ್ರಶ್ನೆಗಳು",
    "headers": [
     "Pattern",
     "Question it answers",
     "Shape"
    ],
    "rows": [
     [
      "Prompt chaining",
      "What fixed step comes next?",
      "Sequence"
     ],
     [
      "Routing",
      "Which predefined path applies?",
      "Branch"
     ],
     [
      "Parallelization",
      "What independent work can run together?",
      "Fan-out, fan-in"
     ],
     [
      "Orchestrator-workers",
      "Which workers does this task need?",
      "Dynamic decomposition"
     ],
     [
      "Evaluator-optimizer",
      "Is the output good enough yet?",
      "Bounded feedback loop"
     ]
    ]
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Chaining and Routing in Code",
    "textKn": "Chaining ಮತ್ತು Routing ಕೋಡ್‌ನಲ್ಲಿ",
    "level": "H2"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "wf_1.py",
    "headingEn": "ScriptedLLM, prompt_chain and route",
    "headingKn": "ScriptedLLM, prompt_chain ಮತ್ತು route",
    "descEn": "ScriptedLLM counts its calls and answers by keyword, so runs are repeatable. prompt_chain feeds each output into the next prompt. route asks the model for a category, lower-cases it and looks it up in a dictionary of handlers, falling back to the general handler. Python controls the sequence and the branches; the model fills the content.",
    "descKn": "ScriptedLLM ತನ್ನ ಕರೆಗಳನ್ನು ಎಣಿಸಿ ಕೀವರ್ಡ್‌ನಿಂದ ಉತ್ತರಿಸುತ್ತದೆ, ಆದ್ದರಿಂದ ಓಟಗಳು ಪುನರಾವರ್ತಿಸಬಹುದು. prompt_chain ಪ್ರತಿ ಔಟ್‌ಪುಟ್ ಅನ್ನು ಮುಂದಿನ prompt ಗೆ ನೀಡುತ್ತದೆ. route ಮಾದರಿಯಿಂದ ವರ್ಗ ಕೇಳಿ, ಸಣ್ಣ ಅಕ್ಷರ ಮಾಡಿ, handlers ನಿಘಂಟಿನಲ್ಲಿ ಹುಡುಕಿ, general handler ಗೆ ಹಿಂತಿರುಗುತ್ತದೆ. Python ಅನುಕ್ರಮ ಮತ್ತು ಶಾಖೆಗಳನ್ನು ನಿಯಂತ್ರಿಸುತ್ತದೆ; ಮಾದರಿ ವಿಷಯ ತುಂಬುತ್ತದೆ.",
    "code": "class ScriptedLLM:\n    \"\"\"A deterministic stand-in for a model, so control flow can be studied without an API.\"\"\"\n\n    def __init__(self):\n        self.calls = 0\n\n    def generate(self, prompt):\n        self.calls += 1\n        text = prompt.lower()\n        if \"classify\" in text:\n            if \"refund\" in text or \"charged\" in text:\n                return \"billing\"\n            if \"crash\" in text or \"error\" in text:\n                return \"technical\"\n            return \"general\"\n        if \"vote\" in text:\n            options = [\"YES\", \"YES\", \"NO\"]\n            return options[(self.calls - 1) % len(options)]\n        if \"evaluate\" in text:\n            if \"evidence\" in text:\n                return \"PASS\"\n            return \"FAIL: add evidence\"\n        if \"improve\" in text:\n            return \"Improved answer with evidence\"\n        if \"outline\" in text:\n            return \"1. Definition 2. Example 3. Conclusion\"\n        if \"draft\" in text:\n            return \"Draft built from the outline.\"\n        return f\"Response to: {prompt[:40]}\"\n\n\ndef prompt_chain(llm, user_input, steps):\n    value = user_input\n    for step in steps:\n        prompt = f\"{step}\\nINPUT:\\n{value}\"\n        value = llm.generate(prompt)\n    return value\n\n\ndef route(llm, user_input, handlers):\n    classification = llm.generate(f\"Classify this request:\\n{user_input}\").strip().lower()\n    handler = handlers.get(classification, handlers[\"general\"])\n    return classification, handler(user_input)\n\n\nHANDLERS = {\n    \"billing\": lambda text: f\"Billing specialist handles: {text}\",\n    \"technical\": lambda text: f\"Technical specialist handles: {text}\",\n    \"general\": lambda text: f\"General support handles: {text}\",\n}"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "wf_1.py",
    "headingEn": "main(): six experiments",
    "headingKn": "main(): ಆರು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() runs a three-step chain, adds a code gate, routes three requests, feeds the router untidy model answers, shows the scripted model reacting to words in its prompt, and contrasts who owns the graph.",
    "descKn": "main() ಮೂರು-ಹೆಜ್ಜೆ chain ಚಲಾಯಿಸುತ್ತದೆ, ಕೋಡ್ gate ಸೇರಿಸುತ್ತದೆ, ಮೂರು ವಿನಂತಿಗಳನ್ನು route ಮಾಡುತ್ತದೆ, router ಗೆ ಅಸ್ತವ್ಯಸ್ತ ಮಾದರಿ ಉತ್ತರಗಳನ್ನು ನೀಡುತ್ತದೆ, ಸ್ಕ್ರಿಪ್ಟ್ ಮಾದರಿ prompt ನ ಪದಗಳಿಗೆ ಪ್ರತಿಕ್ರಿಯಿಸುವುದನ್ನು ತೋರಿಸುತ್ತದೆ, ಮತ್ತು graph ಯಾರದು ಎಂದು ಹೋಲಿಸುತ್ತದೆ.",
    "code": "def section(t):\n    print(f\"\\n--- {t} ---\")\n\n\ndef main():\n    llm = ScriptedLLM()\n\n    section(\"1. Prompt chaining: output N becomes input N+1\")\n    steps = [\"Create an outline.\", \"Draft the explanation.\", \"Improve the explanation.\"]\n    value = \"Explain workflow architecture\"\n    print(\"input     :\", value)\n    for step in steps:\n        value = llm.generate(f\"{step}\\nINPUT:\\n{value}\")\n        print(f\"{step:<26}->\", value)\n    print(\"model calls:\", llm.calls, \"(fixed by the code: one per step)\")\n\n    section(\"2. A gate between steps is plain code, not a second model\")\n    def gated(llm, text):\n        outline = llm.generate(f\"Create an outline:\\n{text}\")\n        if len(outline) < 10:\n            raise ValueError(\"Outline too short\")\n        if not outline.startswith(\"1.\"):\n            raise ValueError(\"Outline must start with a numbered item\")\n        return llm.generate(f\"Write a draft from this outline:\\n{outline}\")\n    print(gated(ScriptedLLM(), \"Explain routing\"))\n    class Terse(ScriptedLLM):\n        def generate(self, prompt):\n            return \"ok\"\n    try:\n        gated(Terse(), \"Explain routing\")\n    except ValueError as e:\n        print(\"gate stopped the chain:\", e)\n\n    section(\"3. Routing: the model picks a branch, Python owns the branches\")\n    for text in (\"I was charged twice and need a refund.\", \"The application crashes on startup.\", \"Do you offer enterprise pricing?\"):\n        category, result = route(ScriptedLLM(), text, HANDLERS)\n        print(f\"{category:<10} -> {result}\")\n\n    section(\"4. Genuinely checking: model output is untrusted input to the router\")\n    class Chatty(ScriptedLLM):\n        def __init__(self, answer):\n            super().__init__()\n            self.answer = answer\n        def generate(self, prompt):\n            self.calls += 1\n            return self.answer\n    for answer in (\"billing\", \"Billing.\", \"billing\\n\", \"payments\", \"BILLING\"):\n        category, result = route(Chatty(answer), \"I was charged twice\", HANDLERS)\n        print(f\"model said {answer!r:<12} -> handler used: {result.split(' ')[0]}\")\n    allowed = set(HANDLERS)\n    def safe_route(llm, text):\n        raw = llm.generate(f\"Classify this request:\\n{text}\").strip().lower().strip(\".!\")\n        return raw if raw in allowed else \"general\"\n    print(\"with strip and an allowlist, 'Billing.' ->\", safe_route(Chatty(\"Billing.\"), \"x\"), \"| 'payments' ->\", safe_route(Chatty(\"payments\"), \"x\"))\n\n    section(\"5. Genuinely checking: keyword stand-ins can be hijacked by their own input\")\n    for text in (\"Please classify my feelings, I am charged up about the launch\", \"How do I evaluate a vote count?\"):\n        l = ScriptedLLM()\n        print(f\"{text!r:<62} -> {l.generate(text)!r}\")\n    print(\"the scripted model reacts to words in the prompt, so scripted traces prove control flow, not language understanding\")\n\n    section(\"6. Workflow versus agent: who owns the graph\")\n    for name, owner in ((\"prompt_chain\", \"engineer: fixed list of steps\"), (\"route\", \"engineer: fixed dictionary of branches, model picks one key\"),\n                        (\"agent loop\", \"model: chooses the next action after every observation\")):\n        print(f\"{name:<14} {owner}\")\n    print(\"tool use alone does not make a system an agent: search -> LLM is still a fixed sequence\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Prompt chaining: output N becomes input N+1 ---\ninput     : Explain workflow architecture\nCreate an outline.        -> 1. Definition 2. Example 3. Conclusion\nDraft the explanation.    -> Draft built from the outline.\nImprove the explanation.  -> Improved answer with evidence\nmodel calls: 3 (fixed by the code: one per step)\n\n--- 2. A gate between steps is plain code, not a second model ---\n1. Definition 2. Example 3. Conclusion\ngate stopped the chain: Outline too short\n\n--- 3. Routing: the model picks a branch, Python owns the branches ---\nbilling    -> Billing specialist handles: I was charged twice and need a refund.\ntechnical  -> Technical specialist handles: The application crashes on startup.\ngeneral    -> General support handles: Do you offer enterprise pricing?\n\n--- 4. Genuinely checking: model output is untrusted input to the router ---\nmodel said 'billing'    -> handler used: Billing\nmodel said 'Billing.'   -> handler used: General\nmodel said 'billing\\n'  -> handler used: Billing\nmodel said 'payments'   -> handler used: General\nmodel said 'BILLING'    -> handler used: Billing\nwith strip and an allowlist, 'Billing.' -> billing | 'payments' -> general\n\n--- 5. Genuinely checking: keyword stand-ins can be hijacked by their own input ---\n'Please classify my feelings, I am charged up about the launch' -> 'billing'\n'How do I evaluate a vote count?'                              -> 'YES'\nthe scripted model reacts to words in the prompt, so scripted traces prove control flow, not language understanding\n\n--- 6. Workflow versus agent: who owns the graph ---\nprompt_chain   engineer: fixed list of steps\nroute          engineer: fixed dictionary of branches, model picks one key\nagent loop     model: chooses the next action after every observation\ntool use alone does not make a system an agent: search -> LLM is still a fixed sequence"
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
    "headingEn": "Chains, Gates and Branches",
    "headingKn": "Chains, Gates ಮತ್ತು ಶಾಖೆಗಳು",
    "bodyEn": "Section 1: the topic goes through outline, draft and improve, each output becoming the next input, in exactly three model calls decided by the code. Section 2: a gate between steps is ordinary Python. A terse outline stops the chain with \"Outline too short\" without spending a second model call to judge it. Section 3: billing, technical and general requests reach their own handlers. Prefer a code check whenever code can enforce the rule exactly, such as valid JSON or a required field, and keep model judgment for semantic questions.",
    "bodyKn": "ವಿಭಾಗ 1: ವಿಷಯ outline, draft ಮತ್ತು improve ಮೂಲಕ ಹೋಗುತ್ತದೆ, ಪ್ರತಿ ಔಟ್‌ಪುಟ್ ಮುಂದಿನ ಇನ್‌ಪುಟ್ ಆಗುತ್ತದೆ, ಕೋಡ್ ನಿರ್ಧರಿಸಿದ ಸರಿಯಾಗಿ ಮೂರು ಮಾದರಿ ಕರೆಗಳಲ್ಲಿ. ವಿಭಾಗ 2: ಹೆಜ್ಜೆಗಳ ನಡುವಿನ gate ಸಾಮಾನ್ಯ Python. ಚಿಕ್ಕ outline \"Outline too short\" ಎಂದು chain ನಿಲ್ಲಿಸುತ್ತದೆ, ಅದನ್ನು ನಿರ್ಣಯಿಸಲು ಎರಡನೇ ಮಾದರಿ ಕರೆ ಖರ್ಚು ಮಾಡದೆ. ವಿಭಾಗ 3: billing, technical ಮತ್ತು general ವಿನಂತಿಗಳು ತಮ್ಮ handlers ತಲುಪುತ್ತವೆ. ಮಾನ್ಯ JSON ಅಥವಾ ಅಗತ್ಯ ಕ್ಷೇತ್ರದಂತೆ ಕೋಡ್ ನಿಯಮವನ್ನು ನಿಖರವಾಗಿ ಜಾರಿಗೊಳಿಸಬಲ್ಲಾಗೆಲ್ಲ ಕೋಡ್ ಪರಿಶೀಲನೆಗೆ ಆದ್ಯತೆ ನೀಡಿ, ಮಾದರಿ ನಿರ್ಣಯವನ್ನು ಅರ್ಥಾತ್ಮಕ ಪ್ರಶ್ನೆಗಳಿಗೆ ಇಡಿ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: The Router Trusted Model Output",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Router ಮಾದರಿ ಔಟ್‌ಪುಟ್ ನಂಬಿತು",
    "bodyEn": "Section 4 gives the router five versions of the same answer. \"billing\", \"billing\" with a newline and \"BILLING\" reach the billing handler. \"Billing.\" with a full stop and \"payments\" both fall to the general handler, so a perfectly good classification was lost to punctuation. The dictionary fallback prevents a KeyError, but a wrong fallback is a silent misroute. Treat model output as untrusted input: strip it, allow only known categories, and ideally force a structured-output enum. The routing pattern is unchanged; only the boundary is hardened.",
    "bodyKn": "ವಿಭಾಗ 4 router ಗೆ ಒಂದೇ ಉತ್ತರದ ಐದು ಆವೃತ್ತಿಗಳನ್ನು ನೀಡುತ್ತದೆ. \"billing\", newline ಇರುವ \"billing\" ಮತ್ತು \"BILLING\" billing handler ತಲುಪುತ್ತವೆ. ಪೂರ್ಣವಿರಾಮ ಇರುವ \"Billing.\" ಮತ್ತು \"payments\" ಎರಡೂ general handler ಗೆ ಬೀಳುತ್ತವೆ, ಹಾಗಾಗಿ ಪರಿಪೂರ್ಣ ವರ್ಗೀಕರಣ ವಿರಾಮಚಿಹ್ನೆಯಿಂದ ಕಳೆದುಹೋಯಿತು. ನಿಘಂಟು fallback KeyError ತಡೆಯುತ್ತದೆ, ಆದರೆ ತಪ್ಪು fallback ಮೌನ ತಪ್ಪು-ಮಾರ್ಗ. ಮಾದರಿ ಔಟ್‌ಪುಟ್ ಅನ್ನು ನಂಬಲಾಗದ ಇನ್‌ಪುಟ್ ಎಂದು ಪರಿಗಣಿಸಿ: ಅದನ್ನು strip ಮಾಡಿ, ತಿಳಿದ ವರ್ಗಗಳನ್ನು ಮಾತ್ರ ಅನುಮತಿಸಿ, ಮತ್ತು ಆದರ್ಶವಾಗಿ ರಚನಾತ್ಮಕ-ಔಟ್‌ಪುಟ್ enum ಒತ್ತಾಯಿಸಿ. Routing ಮಾದರಿ ಬದಲಾಗಿಲ್ಲ; ಗಡಿ ಮಾತ್ರ ಬಲಪಡಿಸಲಾಗಿದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: A Keyword Model Proves Flow, Not Understanding",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಕೀವರ್ಡ್ ಮಾದರಿ ಹರಿವು ಸಾಬೀತುಪಡಿಸುತ್ತದೆ, ತಿಳುವಳಿಕೆಯನ್ನಲ್ಲ",
    "bodyEn": "Section 5 shows the scripted model reacting to words rather than meaning: \"Please classify my feelings, I am charged up about the launch\" is classified as billing because it contains \"classify\" and \"charged\", and \"How do I evaluate a vote count?\" returns YES because the word \"vote\" matches first. This is acceptable for a demonstration of control flow, and it is also the reason not to read these traces as evidence that a real model would classify well. Measure routing accuracy on real labelled examples before trusting a router.",
    "bodyKn": "ವಿಭಾಗ 5 ಸ್ಕ್ರಿಪ್ಟ್ ಮಾದರಿ ಅರ್ಥಕ್ಕಲ್ಲ, ಪದಗಳಿಗೆ ಪ್ರತಿಕ್ರಿಯಿಸುವುದನ್ನು ತೋರಿಸುತ್ತದೆ: \"Please classify my feelings, I am charged up about the launch\" \"classify\" ಮತ್ತು \"charged\" ಹೊಂದಿರುವುದರಿಂದ billing ಎಂದು ವರ್ಗೀಕರಿಸಲ್ಪಡುತ್ತದೆ, ಮತ್ತು \"How do I evaluate a vote count?\" \"vote\" ಪದ ಮೊದಲು ಹೊಂದುವುದರಿಂದ YES ಹಿಂತಿರುಗಿಸುತ್ತದೆ. ನಿಯಂತ್ರಣ ಹರಿವಿನ ಪ್ರಾತ್ಯಕ್ಷಿಕೆಗೆ ಇದು ಸ್ವೀಕಾರಾರ್ಹ, ಮತ್ತು ನಿಜವಾದ ಮಾದರಿ ಚೆನ್ನಾಗಿ ವರ್ಗೀಕರಿಸುತ್ತದೆ ಎಂಬುದಕ್ಕೆ ಈ traces ಸಾಕ್ಷ್ಯ ಎಂದು ಓದದಿರಲು ಕಾರಣವೂ ಹೌದು. Router ನಂಬುವ ಮೊದಲು ನಿಜವಾದ ಲೇಬಲ್ ಮಾಡಿದ ಉದಾಹರಣೆಗಳ ಮೇಲೆ routing ನಿಖರತೆ ಅಳೆಯಿರಿ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "Every added component adds latency, cost and a new failure to debug. Starting at the simplest level that works, and adding structure only for an observed failure, keeps systems predictable. Plain Python already provides sequence, branches, loops and threads, so these patterns need no framework.",
    "bodyKn": "ಪ್ರತಿ ಸೇರಿಸಿದ ಘಟಕ ವಿಳಂಬ, ವೆಚ್ಚ ಮತ್ತು ಡೀಬಗ್ ಮಾಡಬೇಕಾದ ಹೊಸ ವೈಫಲ್ಯ ಸೇರಿಸುತ್ತದೆ. ಕೆಲಸ ಮಾಡುವ ಸರಳ ಮಟ್ಟದಲ್ಲಿ ಆರಂಭಿಸಿ, ಗಮನಿಸಿದ ವೈಫಲ್ಯಕ್ಕೆ ಮಾತ್ರ ರಚನೆ ಸೇರಿಸುವುದು ವ್ಯವಸ್ಥೆಗಳನ್ನು ಊಹಿಸಬಹುದಾಗಿಡುತ್ತದೆ. ಸಾಮಾನ್ಯ Python ಈಗಾಗಲೇ ಅನುಕ್ರಮ, ಶಾಖೆಗಳು, loops ಮತ್ತು threads ನೀಡುತ್ತದೆ, ಆದ್ದರಿಂದ ಈ ಮಾದರಿಗಳಿಗೆ framework ಬೇಡ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"a system that uses tools is an agent.\" If your code decides when each tool runs, it is a workflow with tools.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"tools ಬಳಸುವ ವ್ಯವಸ್ಥೆ agent.\" ಪ್ರತಿ tool ಯಾವಾಗ ಚಲಿಸಬೇಕು ಎಂದು ನಿಮ್ಮ ಕೋಡ್ ನಿರ್ಧರಿಸಿದರೆ ಅದು tools ಇರುವ workflow."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Workflow: engineer-owned control path. Agent: model-chosen actions. Augmented LLM: model plus search, tools, memory. Prompt chaining: output N is input N+1. Routing: classify, then dispatch to a predefined branch. Gate: a programmatic check between stages.",
    "bodyKn": "Workflow: ಇಂಜಿನಿಯರ್ ಒಡೆತನದ ನಿಯಂತ್ರಣ ದಾರಿ. Agent: ಮಾದರಿ ಆರಿಸಿದ ಕ್ರಿಯೆಗಳು. ವರ್ಧಿತ LLM: ಮಾದರಿ ಜೊತೆ search, tools, ಮೆಮೊರಿ. Prompt chaining: ಔಟ್‌ಪುಟ್ N, ಇನ್‌ಪುಟ್ N+1. Routing: ವರ್ಗೀಕರಿಸಿ ನಂತರ ಪೂರ್ವನಿರ್ಧಾರಿತ ಶಾಖೆಗೆ ಕಳುಹಿಸುವುದು. Gate: ಹಂತಗಳ ನಡುವಿನ ಪ್ರೋಗ್ರಾಮ್ಯಾಟಿಕ್ ಪರಿಶೀಲನೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) Ask who owns the execution graph. 2) Tools and memory do not make an agent. 3) A chain is a fixed sequence, a gate is code. 4) Routing lets the model pick a key while Python owns the branches. 5) Model output is untrusted: \"Billing.\" was misrouted. 6) A keyword stand-in proves flow, not understanding. 7) Start with a direct call.",
    "bodyKn": "1) ಚಲಾವಣೆ graph ಯಾರದು ಎಂದು ಕೇಳಿ. 2) Tools ಮತ್ತು ಮೆಮೊರಿ agent ಮಾಡುವುದಿಲ್ಲ. 3) Chain ನಿಗದಿತ ಅನುಕ್ರಮ, gate ಕೋಡ್. 4) Routing ಮಾದರಿಗೆ key ಆರಿಸಲು ಬಿಡುತ್ತದೆ, ಶಾಖೆಗಳು Python ಗೆ. 5) ಮಾದರಿ ಔಟ್‌ಪುಟ್ ನಂಬಲಾಗದ್ದು: \"Billing.\" ತಪ್ಪು-ಮಾರ್ಗವಾಯಿತು. 6) ಕೀವರ್ಡ್ ಬದಲಿ ಹರಿವು ಸಾಬೀತುಪಡಿಸುತ್ತದೆ, ತಿಳುವಳಿಕೆಯನ್ನಲ್ಲ. 7) ನೇರ ಕರೆಯಿಂದ ಆರಂಭಿಸಿ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What is the fundamental difference between a workflow and an agent?",
      "qKn": "Workflow ಮತ್ತು agent ನಡುವಿನ ಮೂಲಭೂತ ವ್ಯತ್ಯಾಸ ಏನು?",
      "opts": [
       "Workflows use APIs",
       "Workflows are engineer-owned predefined graphs; agents dynamically determine their path",
       "Workflows cannot use tools",
       "Agents cannot use memory"
      ],
      "optsKn": [
       "Workflows APIs ಬಳಸುತ್ತವೆ",
       "Workflows ಇಂಜಿನಿಯರ್ ಒಡೆತನದ ಪೂರ್ವನಿರ್ಧಾರಿತ graphs; agents ತಮ್ಮ ದಾರಿ ಡೈನಾಮಿಕ್ ಆಗಿ ನಿರ್ಧರಿಸುತ್ತವೆ",
       "Workflows tools ಬಳಸಲಾರವು",
       "Agents ಮೆಮೊರಿ ಬಳಸಲಾರವು"
      ],
      "correct": 1
     },
     {
      "q": "Which three capabilities make up an augmented LLM?",
      "qKn": "ವರ್ಧಿತ LLM ಯಾವ ಮೂರು ಸಾಮರ್ಥ್ಯಗಳಿಂದ ಆಗಿದೆ?",
      "opts": [
       "Planning, reflection, fine-tuning",
       "Vector DB, graph DB, SQL",
       "Search, tools, memory",
       "Training, inference, evaluation"
      ],
      "optsKn": [
       "ಯೋಜನೆ, ಪ್ರತಿಬಿಂಬ, fine-tuning",
       "Vector DB, graph DB, SQL",
       "Search, tools, ಮೆಮೊರಿ",
       "ತರಬೇತಿ, inference, ಮೌಲ್ಯಮಾಪನ"
      ],
      "correct": 2
     },
     {
      "q": "The model answered \"Billing.\" and the router sent it to the general handler. What does this show?",
      "qKn": "ಮಾದರಿ \"Billing.\" ಎಂದು ಉತ್ತರಿಸಿತು ಮತ್ತು router ಅದನ್ನು general handler ಗೆ ಕಳುಹಿಸಿತು. ಇದು ಏನು ತೋರಿಸುತ್ತದೆ?",
      "opts": [
       "The handler was missing",
       "Model output must be normalised and validated before it is used as a key",
       "Routing is unreliable",
       "Billing is not a category"
      ],
      "optsKn": [
       "Handler ಕಾಣೆಯಾಗಿತ್ತು",
       "ಮಾದರಿ ಔಟ್‌ಪುಟ್ ಅನ್ನು key ಆಗಿ ಬಳಸುವ ಮೊದಲು ಸಾಮಾನ್ಯೀಕರಿಸಿ ಮಾನ್ಯ ಮಾಡಬೇಕು",
       "Routing ವಿಶ್ವಾಸಾರ್ಹವಲ್ಲ",
       "Billing ವರ್ಗವಲ್ಲ"
      ],
      "correct": 1
     },
     {
      "q": "Why does tool use alone not make a system an agent?",
      "qKn": "Tool ಬಳಕೆ ಮಾತ್ರ ವ್ಯವಸ್ಥೆಯನ್ನು agent ಏಕೆ ಮಾಡುವುದಿಲ್ಲ?",
      "opts": [
       "Agents cannot use tools",
       "The engineer can still predefine when and how tools run, so the graph stays engineer-owned",
       "Tools only work in workflows",
       "Tools do not produce observations"
      ],
      "optsKn": [
       "Agents tools ಬಳಸಲಾರವು",
       "Tools ಯಾವಾಗ ಮತ್ತು ಹೇಗೆ ಚಲಿಸಬೇಕು ಎಂದು ಇಂಜಿನಿಯರ್ ಇನ್ನೂ ಪೂರ್ವನಿರ್ಧರಿಸಬಹುದು, ಆದ್ದರಿಂದ graph ಇಂಜಿನಿಯರ್ ಒಡೆತನದಲ್ಲೇ ಉಳಿಯುತ್ತದೆ",
       "Tools workflows ನಲ್ಲಿ ಮಾತ್ರ ಕೆಲಸ ಮಾಡುತ್ತವೆ",
       "Tools observations ಉತ್ಪಾದಿಸುವುದಿಲ್ಲ"
      ],
      "correct": 1
     },
     {
      "q": "When should a check be ordinary code instead of a second model call?",
      "qKn": "ಯಾವಾಗ ಪರಿಶೀಲನೆ ಎರಡನೇ ಮಾದರಿ ಕರೆಯ ಬದಲು ಸಾಮಾನ್ಯ ಕೋಡ್ ಆಗಿರಬೇಕು?",
      "opts": [
       "Never",
       "When code can enforce the rule exactly, such as valid JSON or a required field",
       "Only for long outputs",
       "Only in agents"
      ],
      "optsKn": [
       "ಎಂದೂ ಇಲ್ಲ",
       "ಮಾನ್ಯ JSON ಅಥವಾ ಅಗತ್ಯ ಕ್ಷೇತ್ರದಂತೆ ಕೋಡ್ ನಿಯಮ ನಿಖರವಾಗಿ ಜಾರಿಗೊಳಿಸಬಲ್ಲಾಗ",
       "ಉದ್ದದ ಔಟ್‌ಪುಟ್‌ಗಳಿಗೆ ಮಾತ್ರ",
       "Agents ನಲ್ಲಿ ಮಾತ್ರ"
      ],
      "correct": 1
     }
    ]
   }
  }
 ]
};
