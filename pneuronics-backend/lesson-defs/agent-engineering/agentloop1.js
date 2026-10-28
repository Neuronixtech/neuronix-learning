module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6066020ed05b32150e",
 "order": 0,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "The Agent Loop: Observe, Think, Act (Part 1 of 3) — Mental Model, ReAct and the Five Ingredients",
 "titleKn": "Agent Loop: ಗಮನಿಸಿ, ಯೋಚಿಸಿ, ಕ್ರಿಯೆ (ಭಾಗ 1 / 3) — ಮಾನಸಿಕ ಮಾದರಿ, ReAct ಮತ್ತು ಐದು ಅಂಶಗಳು",
 "desc": "Learn the agent as a model in a controlled loop, the Thought-Action-Observation chain, and the five ingredients, then build and genuinely run the tool side: a registry, three tools, error-as-observation, and a hardened registry that fixes a real gap.",
 "descKn": "Agent ಅನ್ನು ನಿಯಂತ್ರಿತ loop ನಲ್ಲಿರುವ ಮಾದರಿಯಾಗಿ, Thought-Action-Observation ಸರಪಳಿ ಮತ್ತು ಐದು ಅಂಶಗಳನ್ನು ಕಲಿಯಿರಿ; ನಂತರ tool ಬದಿಯನ್ನು ನಿರ್ಮಿಸಿ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ: registry, ಮೂರು tools, ದೋಷವೇ observation, ಮತ್ತು ನಿಜವಾದ ಕೊರತೆಯನ್ನು ಸರಿಪಡಿಸುವ ಬಲಪಡಿಸಿದ registry.",
 "objectives": [
  "Explain Thought, Action and Observation and why observations make an agent different from a one-shot call.",
  "Name the five ingredients of an agent loop and map each to code.",
  "Build a tool registry without a framework and register a read tool, a write tool and a calculator.",
  "Turn tool failures, unknown tools and bad arguments into observations instead of crashes.",
  "Explain why termination is not success."
 ],
 "objectivesKn": [
  "Thought, Action ಮತ್ತು Observation ವಿವರಿಸಿ, ಹಾಗೂ observations agent ಅನ್ನು ಒಂದು-ಬಾರಿಯ ಕರೆಗಿಂತ ಹೇಗೆ ಬೇರೆಯಾಗಿಸುತ್ತವೆ ಎಂದು ತಿಳಿಸಿ.",
  "Agent loop ನ ಐದು ಅಂಶಗಳನ್ನು ಹೆಸರಿಸಿ ಮತ್ತು ಪ್ರತಿಯೊಂದನ್ನು ಕೋಡ್‌ಗೆ ಜೋಡಿಸಿ.",
  "Framework ಇಲ್ಲದೆ tool registry ನಿರ್ಮಿಸಿ; ಓದುವ tool, ಬರೆಯುವ tool ಮತ್ತು calculator ನೋಂದಾಯಿಸಿ.",
  "Tool ವೈಫಲ್ಯ, ತಿಳಿಯದ tools ಮತ್ತು ತಪ್ಪು arguments ಅನ್ನು crash ಬದಲು observations ಆಗಿ ಪರಿವರ್ತಿಸಿ.",
  "ಮುಕ್ತಾಯ ಯಶಸ್ಸಲ್ಲ ಎಂದು ವಿವರಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "The Agent Loop: Observe, Think, Act (Part 1 of 3)",
    "textKn": "Agent Loop: ಗಮನಿಸಿ, ಯೋಚಿಸಿ, ಕ್ರಿಯೆ (ಭಾಗ 1 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 1 of 3: the mental model, ReAct, the five ingredients, and the tool side of the code. Every output shown was genuinely produced by running the program on Python 3.14.5. The ToyLLM and AgentLoop are built in Part 2; stop conditions and the turn budget are only described here, not yet run. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ ಮೊದಲನೆಯದು: ಮಾನಸಿಕ ಮಾದರಿ, ReAct, ಐದು ಅಂಶಗಳು ಮತ್ತು ಕೋಡ್‌ನ tool ಬದಿ. ತೋರಿಸಿದ ಎಲ್ಲಾ output Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ ಪಡೆದದ್ದು. ToyLLM ಮತ್ತು AgentLoop ಭಾಗ 2 ರಲ್ಲಿ ನಿರ್ಮಿಸಲಾಗುತ್ತವೆ; stop condition ಮತ್ತು turn budget ಇಲ್ಲಿ ವಿವರಿಸಲಾಗಿದೆ ಮಾತ್ರ, ಇನ್ನೂ ಚಲಾಯಿಸಿಲ್ಲ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "What an Agent Is",
    "textKn": "Agent ಎಂದರೇನು",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "An LLM Inside a Controlled Loop",
    "headingKn": "ನಿಯಂತ್ರಿತ loop ಒಳಗಿನ LLM",
    "bodyEn": "An agent is an LLM inside a controlled loop that can take actions, observe their results, and use those results to decide what to do next. A plain call is User -> LLM -> Answer. An agent call is Goal -> Think -> Act -> Tool -> Observe -> update context -> Think again -> ... -> Stop. The loop is causal: an observation from step 1 is evidence for the reasoning at step 2. In symbols, the context grows as C(t+1) = C(t) + A(t) + O(t), where A is the chosen action and O is the resulting observation, and the next thought is Thought(t+1) = LLM(C(t+1)). Every iteration changes the information available to the next one, so the agent is not repeating the same cycle.",
    "bodyKn": "Agent ಎಂದರೆ ನಿಯಂತ್ರಿತ loop ಒಳಗಿರುವ LLM; ಅದು actions ತೆಗೆದುಕೊಳ್ಳಬಹುದು, ಅವುಗಳ ಫಲಿತಾಂಶ ಗಮನಿಸಬಹುದು ಮತ್ತು ಆ ಫಲಿತಾಂಶಗಳಿಂದ ಮುಂದೇನು ಮಾಡಬೇಕೆಂದು ನಿರ್ಧರಿಸಬಹುದು. ಸಾಮಾನ್ಯ ಕರೆ: ಬಳಕೆದಾರ -> LLM -> ಉತ್ತರ. Agent ಕರೆ: ಗುರಿ -> Think -> Act -> Tool -> Observe -> context ನವೀಕರಣ -> ಮತ್ತೆ Think -> ... -> Stop. ಈ loop ಕಾರಣಾತ್ಮಕ: ಹಂತ 1 ರ observation ಹಂತ 2 ರ ಚಿಂತನೆಗೆ ಸಾಕ್ಷ್ಯ. ಸಂಕೇತ ರೂಪದಲ್ಲಿ context C(t+1) = C(t) + A(t) + O(t) ಎಂದು ಬೆಳೆಯುತ್ತದೆ; ಇಲ್ಲಿ A ಆಯ್ಕೆಮಾಡಿದ action, O ಅದರ observation, ಮತ್ತು ಮುಂದಿನ ಚಿಂತನೆ Thought(t+1) = LLM(C(t+1)). ಪ್ರತಿ ಪುನರಾವರ್ತನೆ ಮುಂದಿನದಕ್ಕೆ ಲಭ್ಯವಿರುವ ಮಾಹಿತಿಯನ್ನು ಬದಲಿಸುತ್ತದೆ, ಆದ್ದರಿಂದ agent ಒಂದೇ ಚಕ್ರವನ್ನು ಪುನರಾವರ್ತಿಸುತ್ತಿಲ್ಲ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "The Agent Loop",
    "headingKn": "Agent Loop",
    "svgCode": "<svg viewBox=\"0 0 300 210\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\">\n  <rect width=\"300\" height=\"210\" rx=\"8\" fill=\"#0f172a\"/>\n  <text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">Goal -> Context -> Think -> Act -> Tool -> Observe</text>\n  <rect x=\"20\" y=\"24\" width=\"260\" height=\"22\" rx=\"4\" fill=\"#1e293b\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"39\" fill=\"#fde68a\" text-anchor=\"middle\">CONTEXT: goal + history (messages)</text>\n  <path d=\"M150,46 V56\" stroke=\"#475569\"/>\n  <rect x=\"20\" y=\"58\" width=\"260\" height=\"22\" rx=\"4\" fill=\"#1e293b\" stroke=\"#60a5fa\"/><text x=\"150\" y=\"73\" fill=\"#93c5fd\" text-anchor=\"middle\">THINK: model proposes next step</text>\n  <path d=\"M150,80 V90\" stroke=\"#475569\"/>\n  <rect x=\"20\" y=\"92\" width=\"260\" height=\"22\" rx=\"4\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"150\" y=\"107\" fill=\"#6ee7b7\" text-anchor=\"middle\">ACT: runtime checks registry, calls tool</text>\n  <path d=\"M150,114 V124\" stroke=\"#475569\"/>\n  <rect x=\"20\" y=\"126\" width=\"260\" height=\"22\" rx=\"4\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"150\" y=\"141\" fill=\"#c4b5fd\" text-anchor=\"middle\">OBSERVE: real result or error string</text>\n  <path d=\"M150,148 V158\" stroke=\"#475569\"/>\n  <rect x=\"20\" y=\"160\" width=\"125\" height=\"22\" rx=\"4\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"82\" y=\"175\" fill=\"#fde68a\" text-anchor=\"middle\">finish? STOP</text>\n  <rect x=\"155\" y=\"160\" width=\"125\" height=\"22\" rx=\"4\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"217\" y=\"175\" fill=\"#fecaca\" text-anchor=\"middle\">budget gone? STOP</text>\n  <text x=\"150\" y=\"198\" fill=\"#94a3b8\" text-anchor=\"middle\">otherwise append observation to context and repeat</text>\n</svg>",
    "captionEn": "Context feeds Think, Think proposes an action, the runtime executes it, the real result is observed and appended to the context, and the loop repeats until a finish action or the turn budget stops it.",
    "captionKn": "Context Think ಗೆ ಮಾಹಿತಿ ನೀಡುತ್ತದೆ, Think action ಪ್ರಸ್ತಾಪಿಸುತ್ತದೆ, runtime ಅದನ್ನು ಚಲಾಯಿಸುತ್ತದೆ, ನಿಜವಾದ ಫಲಿತಾಂಶ ಗಮನಿಸಿ context ಗೆ ಸೇರಿಸಲಾಗುತ್ತದೆ, ಮತ್ತು finish action ಅಥವಾ turn budget ನಿಲ್ಲಿಸುವವರೆಗೆ loop ಪುನರಾವರ್ತಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "The Problem: Text Is Not Execution",
    "textKn": "ಸಮಸ್ಯೆ: ಪಠ್ಯ ಎಂದರೆ ಕಾರ್ಯಗತಗೊಳಿಸುವಿಕೆ ಅಲ್ಲ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "A Plausible Answer Is Not Evidence",
    "headingKn": "ನಂಬಲರ್ಹ ಉತ್ತರ ಸಾಕ್ಷ್ಯವಲ್ಲ",
    "bodyEn": "Ask a plain model what is stored under the key project_status. It has no access to your key-value store, so it may answer \"completed\": a plausible continuation with no source. It also cannot read /logs/server.log, cannot know customer 9284's balance, and cannot change your system by writing the sentence \"mode has been set to production\". That sentence is text, not execution. What the task needs is evidence: the model recognises it needs external data, requests kv_store.get(\"project_status\"), the runtime executes real Python, the observation \"testing\" comes back, and only then does the model answer \"The project status is testing.\"",
    "bodyKn": "project_status ಕೀ ಅಡಿಯಲ್ಲಿ ಏನಿದೆ ಎಂದು ಸಾಮಾನ್ಯ ಮಾದರಿಯನ್ನು ಕೇಳಿ. ಅದಕ್ಕೆ ನಿಮ್ಮ key-value store ಗೆ ಪ್ರವೇಶವಿಲ್ಲ, ಹಾಗಾಗಿ ಮೂಲವಿಲ್ಲದ ನಂಬಲರ್ಹ ಮುಂದುವರಿಕೆಯಾಗಿ \"completed\" ಎಂದು ಉತ್ತರಿಸಬಹುದು. ಅದು /logs/server.log ಓದಲಾರದು, ಗ್ರಾಹಕ 9284 ರ ಬಾಕಿ ತಿಳಿಯಲಾರದು, ಮತ್ತು \"mode has been set to production\" ಎಂದು ಬರೆದ ಮಾತ್ರಕ್ಕೆ ನಿಮ್ಮ ವ್ಯವಸ್ಥೆಯನ್ನು ಬದಲಿಸಲಾರದು. ಆ ವಾಕ್ಯ ಕೇವಲ ಪಠ್ಯ, ಕಾರ್ಯಗತಗೊಳಿಸುವಿಕೆ ಅಲ್ಲ. ಕಾರ್ಯಕ್ಕೆ ಬೇಕಾದದ್ದು ಸಾಕ್ಷ್ಯ: ಮಾದರಿ ಹೊರಗಿನ ಡೇಟಾ ಬೇಕೆಂದು ಗುರುತಿಸಿ kv_store.get(\"project_status\") ಕೇಳುತ್ತದೆ, runtime ನಿಜವಾದ Python ಚಲಾಯಿಸುತ್ತದೆ, observation \"testing\" ಹಿಂತಿರುಗುತ್ತದೆ, ಆಮೇಲೆ ಮಾತ್ರ ಮಾದರಿ \"ಪ್ರಾಜೆಕ್ಟ್ ಸ್ಥಿತಿ testing\" ಎಂದು ಉತ್ತರಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Thought, Action, Observation",
    "textKn": "Thought, Action, Observation",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "ReAct: Reason and Act",
    "headingKn": "ReAct: ತರ್ಕಿಸಿ ಮತ್ತು ಕ್ರಿಯೆ",
    "bodyEn": "ReAct interleaves three things. A Thought reasons about the current state and links the goal to the next step. An Action is the operation the model requests, such as kv_store.get(\"price\"). An Observation is the real result that comes back, such as \"125\". The trace reads Thought, Action, Observation, Thought, Action, Observation, then a finish action. From inside the running loop the same cycle is Observe, Think, Act, Observe, with the user's request as the first observation, so the two descriptions are one loop. A thought alone does nothing to the outside world: the model decides what should happen, and the runtime decides whether and how it actually happens.",
    "bodyKn": "ReAct ಮೂರು ವಿಷಯಗಳನ್ನು ಹೆಣೆಯುತ್ತದೆ. Thought ಈಗಿನ ಸ್ಥಿತಿಯ ಬಗ್ಗೆ ತರ್ಕಿಸಿ ಗುರಿಯನ್ನು ಮುಂದಿನ ಹಂತಕ್ಕೆ ಜೋಡಿಸುತ್ತದೆ. Action ಮಾದರಿ ಕೇಳುವ ಕಾರ್ಯ, ಉದಾ. kv_store.get(\"price\"). Observation ಹಿಂತಿರುಗುವ ನಿಜವಾದ ಫಲಿತಾಂಶ, ಉದಾ. \"125\". Trace: Thought, Action, Observation, Thought, Action, Observation, ನಂತರ finish action. ಚಲಿಸುತ್ತಿರುವ loop ಒಳಗಿನಿಂದ ನೋಡಿದರೆ ಅದೇ ಚಕ್ರ Observe, Think, Act, Observe; ಬಳಕೆದಾರರ ವಿನಂತಿಯೇ ಮೊದಲ observation. ಹಾಗಾಗಿ ಎರಡೂ ವಿವರಣೆ ಒಂದೇ loop. ಚಿಂತನೆ ಮಾತ್ರ ಹೊರಗಿನ ಜಗತ್ತಿಗೆ ಏನನ್ನೂ ಮಾಡುವುದಿಲ್ಲ: ಏನಾಗಬೇಕೆಂದು ಮಾದರಿ ನಿರ್ಧರಿಸುತ್ತದೆ; ಅದು ನಿಜವಾಗಿ ಆಗುತ್ತದೆಯೇ ಮತ್ತು ಹೇಗೆ ಎಂದು runtime ನಿರ್ಧರಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why Observation Is Load-Bearing",
    "headingKn": "Observation ಏಕೆ ಅನಿವಾರ್ಯ",
    "bodyEn": "Remove the observations and the loop becomes Think, Act, Think, Act. The model asks for search(\"population of Bengaluru\") or calculator(348 * 29) but never receives the result, so its next decision cannot use it and the tools are pointless. The causal chain is Thought(1) -> Action(1) -> Observation(1) -> Thought(2). The stored price \"125\" becomes the evidence for \"multiply by 1.18\", and the calculator's 147.5 becomes the final answer. Thought 2 depends on Observation 1, which is why an agent run is a trajectory and not three independent boxes.",
    "bodyKn": "Observations ತೆಗೆದರೆ loop Think, Act, Think, Act ಆಗುತ್ತದೆ. ಮಾದರಿ search(\"population of Bengaluru\") ಅಥವಾ calculator(348 * 29) ಕೇಳುತ್ತದೆ ಆದರೆ ಫಲಿತಾಂಶ ಎಂದೂ ಸಿಗುವುದಿಲ್ಲ; ಹಾಗಾಗಿ ಮುಂದಿನ ನಿರ್ಧಾರ ಅದನ್ನು ಬಳಸಲಾರದು, tools ಅರ್ಥಹೀನ. ಕಾರಣ ಸರಪಳಿ: Thought(1) -> Action(1) -> Observation(1) -> Thought(2). ಸಂಗ್ರಹಿಸಿದ ಬೆಲೆ \"125\" \"1.18 ರಿಂದ ಗುಣಿಸಿ\" ಎಂಬುದಕ್ಕೆ ಸಾಕ್ಷ್ಯವಾಗುತ್ತದೆ, ಮತ್ತು calculator ನ 147.5 ಅಂತಿಮ ಉತ್ತರವಾಗುತ್ತದೆ. Thought 2 Observation 1 ರ ಮೇಲೆ ಅವಲಂಬಿತ; ಅದಕ್ಕಾಗಿಯೇ agent ಓಟ ಮೂರು ಸ್ವತಂತ್ರ ಪೆಟ್ಟಿಗೆಗಳಲ್ಲ, ಒಂದು trajectory."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "The Five Ingredients",
    "textKn": "ಐದು ಅಂಶಗಳು",
    "level": "H2"
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Five things every agent loop needs",
    "headingKn": "ಪ್ರತಿ agent loop ಗೆ ಬೇಕಾದ ಐದು ಅಂಶಗಳು",
    "headers": [
     "Ingredient",
     "Job",
     "In our code"
    ],
    "rows": [
     [
      "Message buffer",
      "Remembers the run so far; each model call sees the growing history",
      "messages list (section 8 of the run)"
     ],
     [
      "Tool registry",
      "Maps exposed names to Python callables; only registered capabilities can run",
      "ToolRegistry"
     ],
     [
      "Stop condition",
      "Explicit rule that ends the loop: finish action, no tool call, budget, guardrail",
      "finish action (built in Part 2)"
     ],
     [
      "Turn budget",
      "Hard ceiling on iterations; an operational and safety control",
      "max_turns (built in Part 2)"
     ],
     [
      "Observation formatter",
      "Turns any Python result or error into a consistent string for the model",
      "format_observation, str(result)"
     ]
    ]
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Termination Is Not Success",
    "headingKn": "ಮುಕ್ತಾಯ ಎಂದರೆ ಯಶಸ್ಸಲ್ಲ",
    "bodyEn": "A turn budget guarantees the loop ends; it does not guarantee the task was solved. Reaching max_turns is a different state from a finish action. Without a budget, a loop that keeps calling search burns tokens, API calls, money and latency and may repeat side effects, which is why the budget belongs to the runtime and not to the model's good intentions. The same applies to the other stop conditions: they say when execution ends, never whether the goal was met.",
    "bodyKn": "Turn budget loop ಮುಗಿಯುವುದನ್ನು ಖಾತರಿಪಡಿಸುತ್ತದೆ; ಕಾರ್ಯ ಪರಿಹಾರವಾಯಿತು ಎಂದು ಖಾತರಿಪಡಿಸುವುದಿಲ್ಲ. max_turns ತಲುಪುವುದು finish action ಗಿಂತ ಬೇರೆ ಸ್ಥಿತಿ. Budget ಇಲ್ಲದಿದ್ದರೆ search ಕರೆಯುತ್ತಲೇ ಇರುವ loop tokens, API ಕರೆಗಳು, ಹಣ ಮತ್ತು ಸಮಯ ವ್ಯಯಿಸುತ್ತದೆ ಹಾಗೂ side effects ಪುನರಾವರ್ತಿಸಬಹುದು; ಆದ್ದರಿಂದ budget ಮಾದರಿಯ ಒಳ್ಳೆಯ ಉದ್ದೇಶಕ್ಕಲ್ಲ, runtime ಗೆ ಸೇರಿದೆ. ಉಳಿದ stop conditions ಗೂ ಇದೇ ಅನ್ವಯ: ಅವು ಕಾರ್ಯಗತಗೊಳಿಸುವಿಕೆ ಯಾವಾಗ ಮುಗಿಯುತ್ತದೆ ಎಂದು ಹೇಳುತ್ತವೆ, ಗುರಿ ಸಾಧಿಸಲಾಯಿತೇ ಎಂದಲ್ಲ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Building the Tool Side",
    "textKn": "Tool ಬದಿಯನ್ನು ನಿರ್ಮಿಸುವುದು",
    "level": "H2"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "agentloop_1.py",
    "headingEn": "The environment and three tools",
    "headingKn": "ಪರಿಸರ ಮತ್ತು ಮೂರು tools",
    "descEn": "STORE is the environment the agent can inspect and change. calculator is deliberately limited to four operators instead of eval(), so the capability surface is exactly what the lesson needs. kv_get reads state; kv_set changes it. Failures are returned as ERROR strings rather than raised, so they can become observations.",
    "descKn": "STORE agent ಪರಿಶೀಲಿಸಬಹುದಾದ ಮತ್ತು ಬದಲಿಸಬಹುದಾದ ಪರಿಸರ. calculator eval() ಬದಲು ನಾಲ್ಕು operators ಗೆ ಮಾತ್ರ ಸೀಮಿತ, ಹಾಗಾಗಿ capability ವ್ಯಾಪ್ತಿ ಬೇಕಾದಷ್ಟೇ. kv_get ಸ್ಥಿತಿ ಓದುತ್ತದೆ; kv_set ಬದಲಿಸುತ್ತದೆ. ವೈಫಲ್ಯಗಳನ್ನು raise ಮಾಡದೆ ERROR ಸ್ಟ್ರಿಂಗ್ ಆಗಿ ಹಿಂತಿರುಗಿಸಲಾಗುತ್ತದೆ, ಹಾಗಾಗಿ ಅವು observations ಆಗಬಹುದು.",
    "code": "import operator\n\nSTORE = {\"city_count\": \"17\", \"project_status\": \"testing\", \"price\": \"125\"}\n\nOPERATORS = {\"+\": operator.add, \"-\": operator.sub, \"*\": operator.mul, \"/\": operator.truediv}\n\n\ndef calculator(left, op, right):\n    if op not in OPERATORS:\n        return f\"ERROR: unsupported operator: {op}\"\n    try:\n        return OPERATORS[op](float(left), float(right))\n    except Exception as exc:\n        return f\"ERROR: {exc}\"\n\n\ndef kv_get(key):\n    if key not in STORE:\n        return f\"ERROR: key '{key}' not found\"\n    return STORE[key]\n\n\ndef kv_set(key, value):\n    STORE[key] = value\n    return f\"stored {key}={value}\""
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "agentloop_1.py",
    "headingEn": "ToolRegistry as written, and a hardened version",
    "headingKn": "ಬರೆದಂತೆ ToolRegistry, ಮತ್ತು ಬಲಪಡಿಸಿದ ಆವೃತ್ತಿ",
    "descEn": "The registry is the trust boundary: the model names a tool and the runtime checks that name against what is registered. ToolRegistry is exactly as the lesson writes it. HardenedRegistry is our addition: it turns every failure, including wrong argument names, into an observation string. format_observation wraps a result so the model gets a consistent shape.",
    "descKn": "Registry trust boundary: ಮಾದರಿ tool ಹೆಸರು ಹೇಳುತ್ತದೆ, runtime ಆ ಹೆಸರನ್ನು ನೋಂದಾಯಿತವಾದವುಗಳೊಂದಿಗೆ ಪರಿಶೀಲಿಸುತ್ತದೆ. ToolRegistry ಪಾಠ ಬರೆದಂತೆಯೇ ಇದೆ. HardenedRegistry ನಮ್ಮ ಸೇರ್ಪಡೆ: ತಪ್ಪು argument ಹೆಸರುಗಳೂ ಸೇರಿ ಪ್ರತಿ ವೈಫಲ್ಯವನ್ನೂ observation ಸ್ಟ್ರಿಂಗ್ ಆಗಿ ಪರಿವರ್ತಿಸುತ್ತದೆ. format_observation ಫಲಿತಾಂಶವನ್ನು ಸುತ್ತುತ್ತದೆ, ಹಾಗಾಗಿ ಮಾದರಿಗೆ ಸ್ಥಿರ ರೂಪ ಸಿಗುತ್ತದೆ.",
    "code": "class ToolRegistry:\n    \"\"\"As written in the lesson: unknown names are handled, other failures are NOT.\"\"\"\n\n    def __init__(self):\n        self.tools = {}\n\n    def register(self, name, func):\n        self.tools[name] = func\n\n    def call(self, name, **kwargs):\n        if name not in self.tools:\n            return f\"ERROR: unknown tool: {name}\"\n        return self.tools[name](**kwargs)\n\n\nclass HardenedRegistry(ToolRegistry):\n    \"\"\"Our addition: every failure becomes an observation string.\"\"\"\n\n    def call(self, name, **kwargs):\n        if name not in self.tools:\n            return f\"ERROR: unknown tool: {name}\"\n        try:\n            return self.tools[name](**kwargs)\n        except TypeError as exc:\n            return f\"ERROR: invalid arguments for {name}: {exc}\"\n        except Exception as exc:\n            return f\"ERROR: {exc}\"\n\n\ndef format_observation(tool_name, result):\n    return f\"{tool_name} returned: {result}\"\n\n\ndef build(registry_cls):\n    r = registry_cls()\n    r.register(\"calculator\", calculator)\n    r.register(\"kv_store.get\", kv_get)\n    r.register(\"kv_store.set\", kv_set)\n    return r"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "agentloop_1.py",
    "headingEn": "main(): exercising every path",
    "headingKn": "main(): ಪ್ರತಿ ಮಾರ್ಗವನ್ನು ಪರೀಕ್ಷಿಸುವುದು",
    "descEn": "main() calls each tool through the registry, then hits the failure paths on purpose: division by zero, an unsupported operator, a missing key, an unknown tool, and a call with wrong argument names against both the lesson's registry and the hardened one.",
    "descKn": "main() ಪ್ರತಿ tool ಅನ್ನು registry ಮೂಲಕ ಕರೆಯುತ್ತದೆ, ನಂತರ ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ವೈಫಲ್ಯ ಮಾರ್ಗಗಳನ್ನು ತಲುಪುತ್ತದೆ: ಸೊನ್ನೆಯಿಂದ ಭಾಗ, ಬೆಂಬಲವಿಲ್ಲದ operator, ಇಲ್ಲದ ಕೀ, ತಿಳಿಯದ tool, ಮತ್ತು ಪಾಠದ registry ಹಾಗೂ ಬಲಪಡಿಸಿದ registry ಎರಡರ ವಿರುದ್ಧ ತಪ್ಪು argument ಹೆಸರುಗಳ ಕರೆ.",
    "code": "def main():\n    registry = build(ToolRegistry)\n\n    section(\"1. Registered capabilities\")\n    for name in registry.tools:\n        print(\" \", name)\n\n    section(\"2. The three tools, called through the registry\")\n    price = registry.call(\"kv_store.get\", key=\"price\")\n    print(\"kv_store.get(price)        ->\", repr(price))\n    total = registry.call(\"calculator\", left=price, op=\"*\", right=1.18)\n    print(\"calculator(125 * 1.18)     ->\", repr(total))\n    print(\"calculator(10 / 0)         ->\", repr(registry.call(\"calculator\", left=10, op=\"/\", right=0)))\n    print(\"calculator(2 ^ 3)          ->\", repr(registry.call(\"calculator\", left=2, op=\"^\", right=3)))\n    print(\"kv_store.get(missing)      ->\", repr(registry.call(\"kv_store.get\", key=\"missing\")))\n\n    section(\"3. A state-changing tool\")\n    print(\"before:\", registry.call(\"kv_store.get\", key=\"project_status\"))\n    print(registry.call(\"kv_store.set\", key=\"project_status\", value=\"complete\"))\n    print(\"after :\", registry.call(\"kv_store.get\", key=\"project_status\"))\n\n    section(\"4. Unknown tool becomes an observation, not a crash\")\n    print(registry.call(\"database.destroy_everything\"))\n\n    section(\"5. The lesson's ToolRegistry.call() with wrong argument names\")\n    try:\n        registry.call(\"kv_store.get\", wrong_argument=\"price\")\n        print(\"no exception\")\n    except Exception as exc:\n        print(f\"UNCAUGHT {type(exc).__name__}: {exc}\")\n\n    section(\"6. Hardened registry: the same bad call\")\n    hardened = build(HardenedRegistry)\n    print(hardened.call(\"kv_store.get\", wrong_argument=\"price\"))\n    print(hardened.call(\"calculator\", left=\"abc\", op=\"+\", right=1))\n\n    section(\"7. Observation formatter\")\n    print(format_observation(\"calculator\", total))\n    print(format_observation(\"kv_store.get\", price))\n\n    section(\"8. A growing message buffer\")\n    messages = []\n    messages.append({\"role\": \"user\", \"content\": \"Read the stored price and calculate price * 1.18.\"})\n    messages.append({\"role\": \"tool\", \"name\": \"kv_store.get\", \"content\": str(price)})\n    messages.append({\"role\": \"tool\", \"name\": \"calculator\", \"content\": str(total)})\n    for i, m in enumerate(messages, 1):\n        print(f\"{i}. {m['role']:<5} {m.get('name', '-'):<13} {m['content']}\")\n    print(\"length:\", len(messages))"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Registered capabilities ---\n  calculator\n  kv_store.get\n  kv_store.set\n\n--- 2. The three tools, called through the registry ---\nkv_store.get(price)        -> '125'\ncalculator(125 * 1.18)     -> 147.5\ncalculator(10 / 0)         -> 'ERROR: division by zero'\ncalculator(2 ^ 3)          -> 'ERROR: unsupported operator: ^'\nkv_store.get(missing)      -> \"ERROR: key 'missing' not found\"\n\n--- 3. A state-changing tool ---\nbefore: testing\nstored project_status=complete\nafter : complete\n\n--- 4. Unknown tool becomes an observation, not a crash ---\nERROR: unknown tool: database.destroy_everything\n\n--- 5. The lesson's ToolRegistry.call() with wrong argument names ---\nUNCAUGHT TypeError: kv_get() got an unexpected keyword argument 'wrong_argument'\n\n--- 6. Hardened registry: the same bad call ---\nERROR: invalid arguments for kv_store.get: kv_get() got an unexpected keyword argument 'wrong_argument'\nERROR: could not convert string to float: 'abc'\n\n--- 7. Observation formatter ---\ncalculator returned: 147.5\nkv_store.get returned: 125\n\n--- 8. A growing message buffer ---\n1. user  -             Read the stored price and calculate price * 1.18.\n2. tool  kv_store.get  125\n3. tool  calculator    147.5\nlength: 3"
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
    "headingEn": "The Happy Path and the State Change",
    "headingKn": "ಸರಿಯಾದ ಮಾರ್ಗ ಮತ್ತು ಸ್ಥಿತಿ ಬದಲಾವಣೆ",
    "bodyEn": "Section 2 shows the core chain: kv_store.get returns the string \"125\", and calculator turns it into 147.5 because it applies float() to both operands. Section 3 shows kv_store.set changing project_status from testing to complete, and a later read sees the new value. That is a side effect: tools change the environment, and later observations reflect it. Section 8 shows the message buffer reaching length 3 after one goal and two tool results.",
    "bodyKn": "ವಿಭಾಗ 2 ಮುಖ್ಯ ಸರಪಳಿ ತೋರಿಸುತ್ತದೆ: kv_store.get \"125\" ಸ್ಟ್ರಿಂಗ್ ಹಿಂತಿರುಗಿಸುತ್ತದೆ, ಮತ್ತು calculator ಎರಡೂ operands ಗೆ float() ಅನ್ವಯಿಸುವುದರಿಂದ ಅದನ್ನು 147.5 ಆಗಿ ಪರಿವರ್ತಿಸುತ್ತದೆ. ವಿಭಾಗ 3 kv_store.set project_status ಅನ್ನು testing ನಿಂದ complete ಗೆ ಬದಲಿಸುವುದನ್ನು ತೋರಿಸುತ್ತದೆ, ಮತ್ತು ನಂತರದ ಓದು ಹೊಸ ಮೌಲ್ಯ ಕಾಣುತ್ತದೆ. ಇದು side effect: tools ಪರಿಸರವನ್ನು ಬದಲಿಸುತ್ತವೆ, ನಂತರದ observations ಅದನ್ನು ಪ್ರತಿಬಿಂಬಿಸುತ್ತವೆ. ವಿಭಾಗ 8 ಒಂದು ಗುರಿ ಮತ್ತು ಎರಡು tool ಫಲಿತಾಂಶಗಳ ನಂತರ message buffer ಉದ್ದ 3 ತಲುಪುವುದನ್ನು ತೋರಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: The Division Error Text Differs From the Lesson",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಭಾಗಾಕಾರ ದೋಷ ಪಠ್ಯ ಪಾಠಕ್ಕಿಂತ ಬೇರೆ",
    "bodyEn": "The source lesson says calculator(10, \"/\", 0) returns \"ERROR: float division by zero\". On this machine (Python 3.14.5) the observation is \"ERROR: division by zero\". The exception message text is not stable across Python versions, so the lesson's wording is version-dependent. The engineering lesson is that an agent or a test must never match on an error string; match on the ERROR prefix or, better, on a structured error code.",
    "bodyKn": "ಮೂಲ ಪಾಠ calculator(10, \"/\", 0) \"ERROR: float division by zero\" ಹಿಂತಿರುಗಿಸುತ್ತದೆ ಎನ್ನುತ್ತದೆ. ಈ ಯಂತ್ರದಲ್ಲಿ (Python 3.14.5) observation \"ERROR: division by zero\". Exception ಸಂದೇಶ ಪಠ್ಯ Python ಆವೃತ್ತಿಗಳ ನಡುವೆ ಸ್ಥಿರವಲ್ಲ, ಆದ್ದರಿಂದ ಪಾಠದ ಪದಗಳು ಆವೃತ್ತಿ-ಅವಲಂಬಿತ. ಎಂಜಿನಿಯರಿಂಗ್ ಪಾಠ: agent ಅಥವಾ test ಎಂದೂ ದೋಷ ಸ್ಟ್ರಿಂಗ್ ಹೊಂದಿಸಬಾರದು; ERROR ಪೂರ್ವಪ್ರತ್ಯಯ ಅಥವಾ ಇನ್ನೂ ಉತ್ತಮವಾಗಿ ರಚನಾತ್ಮಕ ದೋಷ ಕೋಡ್ ಹೊಂದಿಸಿ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: The Lesson's Registry Does Not Catch Bad Arguments",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಪಾಠದ Registry ತಪ್ಪು arguments ಹಿಡಿಯುವುದಿಲ್ಲ",
    "bodyEn": "Section 4 shows the unknown-tool case working: \"ERROR: unknown tool: database.destroy_everything\", an observation and not a crash. Section 5 is the surprise. With the ToolRegistry.call() exactly as Part 1 writes it, a call with a wrong argument name raises an uncaught TypeError (kv_get() got an unexpected keyword argument). Part 3 of the source says the registry returns \"ERROR: invalid arguments\", but that needs the try/except we added in HardenedRegistry. Section 6 shows the hardened version turning the same bad call, and a non-numeric operand, into observations. Handling unknown names is not enough; every failure path needs catching.",
    "bodyKn": "ವಿಭಾಗ 4 ತಿಳಿಯದ-tool ಪ್ರಕರಣ ಕೆಲಸ ಮಾಡುವುದನ್ನು ತೋರಿಸುತ್ತದೆ: \"ERROR: unknown tool: database.destroy_everything\", crash ಅಲ್ಲ, observation. ವಿಭಾಗ 5 ಆಶ್ಚರ್ಯ. ToolRegistry.call() ಭಾಗ 1 ಬರೆದಂತೆಯೇ ಇರುವಾಗ, ತಪ್ಪು argument ಹೆಸರಿನ ಕರೆ ಹಿಡಿಯದ TypeError raise ಮಾಡುತ್ತದೆ (kv_get() got an unexpected keyword argument). ಮೂಲದ ಭಾಗ 3 registry \"ERROR: invalid arguments\" ಹಿಂತಿರುಗಿಸುತ್ತದೆ ಎನ್ನುತ್ತದೆ, ಆದರೆ ಅದಕ್ಕೆ HardenedRegistry ಯಲ್ಲಿ ನಾವು ಸೇರಿಸಿದ try/except ಬೇಕು. ವಿಭಾಗ 6 ಬಲಪಡಿಸಿದ ಆವೃತ್ತಿ ಅದೇ ತಪ್ಪು ಕರೆಯನ್ನು ಮತ್ತು ಸಂಖ್ಯೆಯಲ್ಲದ operand ಅನ್ನು observations ಆಗಿ ಪರಿವರ್ತಿಸುವುದನ್ನು ತೋರಿಸುತ್ತದೆ. ತಿಳಿಯದ ಹೆಸರುಗಳನ್ನು ನಿರ್ವಹಿಸುವುದು ಸಾಕಾಗದು; ಪ್ರತಿ ವೈಫಲ್ಯ ಮಾರ್ಗವನ್ನೂ ಹಿಡಿಯಬೇಕು."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Why Agents Work This Way",
    "textKn": "Agents ಹೀಗೆ ಏಕೆ ಕೆಲಸ ಮಾಡುತ್ತವೆ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A model's weights are a frozen snapshot: no live data, no private data, no ability to change anything. The loop is how a model borrows those abilities safely. The model supplies judgment about what to do next; the runtime supplies real capabilities and decides what is allowed; the observations carry ground truth back in. Keeping those three apart is what makes behaviour inspectable, testable and bounded.",
    "bodyKn": "ಮಾದರಿಯ weights ಹೆಪ್ಪುಗಟ್ಟಿದ ಸ್ನ್ಯಾಪ್‌ಶಾಟ್: ನೇರ ಡೇಟಾ ಇಲ್ಲ, ಖಾಸಗಿ ಡೇಟಾ ಇಲ್ಲ, ಏನನ್ನೂ ಬದಲಿಸುವ ಸಾಮರ್ಥ್ಯವಿಲ್ಲ. ಮಾದರಿ ಆ ಸಾಮರ್ಥ್ಯಗಳನ್ನು ಸುರಕ್ಷಿತವಾಗಿ ಎರವಲು ಪಡೆಯುವ ಮಾರ್ಗವೇ ಈ loop. ಮುಂದೇನು ಮಾಡಬೇಕೆಂಬ ವಿವೇಚನೆಯನ್ನು ಮಾದರಿ ನೀಡುತ್ತದೆ; ನಿಜವಾದ ಸಾಮರ್ಥ್ಯಗಳನ್ನು ಮತ್ತು ಯಾವುದು ಅನುಮತಿಸಲಾಗಿದೆ ಎಂಬ ನಿರ್ಧಾರವನ್ನು runtime ನೀಡುತ್ತದೆ; observations ನೆಲದ ಸತ್ಯವನ್ನು ಒಳಗೆ ತರುತ್ತವೆ. ಈ ಮೂರನ್ನು ಪ್ರತ್ಯೇಕವಾಗಿಡುವುದೇ ವರ್ತನೆಯನ್ನು ಪರಿಶೀಲಿಸಬಲ್ಲ, ಪರೀಕ್ಷಿಸಬಲ್ಲ ಮತ್ತು ಮಿತಿಯಲ್ಲಿಡುವಂತೆ ಮಾಡುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Where This Appears in AI Systems",
    "headingKn": "AI ವ್ಯವಸ್ಥೆಗಳಲ್ಲಿ ಇದು ಎಲ್ಲಿ ಕಾಣುತ್ತದೆ",
    "bodyEn": "A coding agent edits a file, runs the tests, reads the failure and edits again: edit and test run are tools, the failure text is the observation. A support agent looks up an order before replying. A research agent searches, reads, and decides whether it needs another query. Frameworks add checkpoints, tracing, handoffs and approvals, but underneath each one you can find the same loop: context, model, action, runtime, observation, context.",
    "bodyKn": "Coding agent ಒಂದು ಫೈಲ್ ಸಂಪಾದಿಸಿ, tests ಚಲಾಯಿಸಿ, ವೈಫಲ್ಯ ಓದಿ, ಮತ್ತೆ ಸಂಪಾದಿಸುತ್ತದೆ: ಸಂಪಾದನೆ ಮತ್ತು test ಚಾಲನೆ tools, ವೈಫಲ್ಯ ಪಠ್ಯ observation. Support agent ಉತ್ತರಿಸುವ ಮೊದಲು ಆರ್ಡರ್ ಹುಡುಕುತ್ತದೆ. Research agent ಹುಡುಕಿ, ಓದಿ, ಇನ್ನೊಂದು query ಬೇಕೇ ಎಂದು ನಿರ್ಧರಿಸುತ್ತದೆ. Frameworks checkpoints, tracing, handoffs ಮತ್ತು approvals ಸೇರಿಸುತ್ತವೆ, ಆದರೆ ಪ್ರತಿಯೊಂದರ ಕೆಳಗೂ ಅದೇ loop ಕಾಣಬಹುದು: context, ಮಾದರಿ, action, runtime, observation, context."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"the LLM used the tool.\" More precisely the model generated a structured request, the orchestrator validated it, the runtime executed a Python function, the tool returned a value, the orchestrator formatted an observation, and the model reasoned over the result. A model request is not proof of execution, and a model's claim of success is not evidence: if a tool returned an error, the error is the evidence, whatever the model then says.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"LLM tool ಬಳಸಿತು.\" ಹೆಚ್ಚು ನಿಖರವಾಗಿ: ಮಾದರಿ ರಚನಾತ್ಮಕ ವಿನಂತಿ ರಚಿಸಿತು, orchestrator ಅದನ್ನು ಪರಿಶೀಲಿಸಿತು, runtime Python ಫಂಕ್ಷನ್ ಚಲಾಯಿಸಿತು, tool ಮೌಲ್ಯ ಹಿಂತಿರುಗಿಸಿತು, orchestrator observation ರೂಪಿಸಿತು, ಮತ್ತು ಮಾದರಿ ಫಲಿತಾಂಶದ ಮೇಲೆ ತರ್ಕಿಸಿತು. ಮಾದರಿಯ ವಿನಂತಿ ಕಾರ್ಯಗತವಾದುದಕ್ಕೆ ಪುರಾವೆಯಲ್ಲ, ಮತ್ತು ಮಾದರಿಯ ಯಶಸ್ಸಿನ ಹೇಳಿಕೆ ಸಾಕ್ಷ್ಯವಲ್ಲ: tool ದೋಷ ಹಿಂತಿರುಗಿಸಿದ್ದರೆ ಮಾದರಿ ಏನೇ ಹೇಳಿದರೂ ಆ ದೋಷವೇ ಸಾಕ್ಷ್ಯ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Agent: a model in a loop that can interact with an environment. ReAct: interleaving reasoning and actions. Thought: reasoning that picks the next step. Action: an operation the model requests. Tool call: a structured request to invoke a capability. Observation: real evidence returned to the agent. Context: what the next model decision can see. Tool registry: the mapping from exposed names to callables. Stop condition: a rule that ends the loop. Turn budget: the maximum number of iterations. Trace: the recorded trajectory.",
    "bodyKn": "Agent: ಪರಿಸರದೊಂದಿಗೆ ಸಂವಹಿಸಬಲ್ಲ loop ನಲ್ಲಿರುವ ಮಾದರಿ. ReAct: ತರ್ಕ ಮತ್ತು ಕ್ರಿಯೆಗಳನ್ನು ಹೆಣೆಯುವುದು. Thought: ಮುಂದಿನ ಹಂತ ಆರಿಸುವ ತರ್ಕ. Action: ಮಾದರಿ ಕೇಳುವ ಕಾರ್ಯ. Tool call: capability ಕರೆಯಲು ರಚನಾತ್ಮಕ ವಿನಂತಿ. Observation: agent ಗೆ ಹಿಂತಿರುಗುವ ನಿಜವಾದ ಸಾಕ್ಷ್ಯ. Context: ಮುಂದಿನ ಮಾದರಿ ನಿರ್ಧಾರಕ್ಕೆ ಕಾಣುವುದು. Tool registry: ಬಹಿರಂಗಪಡಿಸಿದ ಹೆಸರುಗಳಿಂದ callables ಗೆ ನಕ್ಷೆ. Stop condition: loop ಮುಗಿಸುವ ನಿಯಮ. Turn budget: ಗರಿಷ್ಠ ಪುನರಾವರ್ತನೆ ಸಂಖ್ಯೆ. Trace: ದಾಖಲಿಸಿದ trajectory."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) Agent = model + environment + controller. 2) The loop is causal: each observation changes the next decision. 3) The model proposes; the runtime validates, executes and reports. 4) Every failure should become an observation, which means every failure path must be caught: our run showed the lesson's own registry missing one. 5) Never match on exception text; it changed between Python versions. 6) A budget guarantees termination, not success. Part 2 builds the ToyLLM and the AgentLoop that turn these tools into a running agent.",
    "bodyKn": "1) Agent = ಮಾದರಿ + ಪರಿಸರ + controller. 2) Loop ಕಾರಣಾತ್ಮಕ: ಪ್ರತಿ observation ಮುಂದಿನ ನಿರ್ಧಾರ ಬದಲಿಸುತ್ತದೆ. 3) ಮಾದರಿ ಪ್ರಸ್ತಾಪಿಸುತ್ತದೆ; runtime ಪರಿಶೀಲಿಸಿ, ಚಲಾಯಿಸಿ, ವರದಿ ಮಾಡುತ್ತದೆ. 4) ಪ್ರತಿ ವೈಫಲ್ಯವೂ observation ಆಗಬೇಕು, ಅಂದರೆ ಪ್ರತಿ ವೈಫಲ್ಯ ಮಾರ್ಗವನ್ನೂ ಹಿಡಿಯಬೇಕು: ನಮ್ಮ ಓಟ ಪಾಠದ registry ಒಂದನ್ನು ತಪ್ಪಿಸಿಕೊಂಡಿದ್ದನ್ನು ತೋರಿಸಿತು. 5) Exception ಪಠ್ಯ ಎಂದೂ ಹೊಂದಿಸಬೇಡಿ; ಅದು Python ಆವೃತ್ತಿಗಳ ನಡುವೆ ಬದಲಾಯಿತು. 6) Budget ಮುಕ್ತಾಯ ಖಾತರಿಪಡಿಸುತ್ತದೆ, ಯಶಸ್ಸಲ್ಲ. ಭಾಗ 2 ಈ tools ಅನ್ನು ಚಲಿಸುವ agent ಆಗಿ ಮಾಡುವ ToyLLM ಮತ್ತು AgentLoop ನಿರ್ಮಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "Why is an LLM not automatically an agent?",
      "qKn": "LLM ತಾನಾಗಿಯೇ agent ಏಕೆ ಅಲ್ಲ?",
      "opts": [
       "It generates only one token",
       "It cannot inherently interact with an external environment and verify results",
       "Its context window is always too small",
       "Agents do not use language models"
      ],
      "optsKn": [
       "ಅದು ಒಂದೇ token ಉತ್ಪಾದಿಸುತ್ತದೆ",
       "ಅದು ಹೊರಗಿನ ಪರಿಸರದೊಂದಿಗೆ ಸ್ವಾಭಾವಿಕವಾಗಿ ಸಂವಹಿಸಿ ಫಲಿತಾಂಶ ಪರಿಶೀಲಿಸಲಾರದು",
       "ಅದರ context window ಯಾವಾಗಲೂ ಬಹಳ ಚಿಕ್ಕದು",
       "Agents ಭಾಷಾ ಮಾದರಿ ಬಳಸುವುದಿಲ್ಲ"
      ],
      "correct": 1
     },
     {
      "q": "What is the canonical ReAct sequence?",
      "qKn": "ಪ್ರಮಾಣಿತ ReAct ಅನುಕ್ರಮ ಯಾವುದು?",
      "opts": [
       "Plan, Train, Reward",
       "Prompt, Response, Score",
       "Thought, Action, Observation",
       "Input, Embedding, Output"
      ],
      "optsKn": [
       "Plan, Train, Reward",
       "Prompt, Response, Score",
       "Thought, Action, Observation",
       "Input, Embedding, Output"
      ],
      "correct": 2
     },
     {
      "q": "What is the main purpose of an observation?",
      "qKn": "Observation ನ ಮುಖ್ಯ ಉದ್ದೇಶ ಏನು?",
      "opts": [
       "Raise the model temperature",
       "Feed evidence from an action back into later reasoning",
       "Register another tool",
       "Stop the Python interpreter"
      ],
      "optsKn": [
       "ಮಾದರಿ temperature ಹೆಚ್ಚಿಸುವುದು",
       "Action ನ ಸಾಕ್ಷ್ಯವನ್ನು ನಂತರದ ತರ್ಕಕ್ಕೆ ಹಿಂತಿರುಗಿಸುವುದು",
       "ಇನ್ನೊಂದು tool ನೋಂದಾಯಿಸುವುದು",
       "Python interpreter ನಿಲ್ಲಿಸುವುದು"
      ],
      "correct": 1
     },
     {
      "q": "In this lesson's run, what happened when ToolRegistry.call() was given a wrong argument name?",
      "qKn": "ಈ ಪಾಠದ ಓಟದಲ್ಲಿ, ToolRegistry.call() ಗೆ ತಪ್ಪು argument ಹೆಸರು ನೀಡಿದಾಗ ಏನಾಯಿತು?",
      "opts": [
       "It returned an ERROR observation",
       "It raised an uncaught TypeError",
       "It silently ignored the argument",
       "It registered a new tool"
      ],
      "optsKn": [
       "ERROR observation ಹಿಂತಿರುಗಿಸಿತು",
       "ಹಿಡಿಯದ TypeError raise ಮಾಡಿತು",
       "Argument ಅನ್ನು ಮೌನವಾಗಿ ಕಡೆಗಣಿಸಿತು",
       "ಹೊಸ tool ನೋಂದಾಯಿಸಿತು"
      ],
      "correct": 1
     },
     {
      "q": "What does a turn budget guarantee?",
      "qKn": "Turn budget ಯಾವುದನ್ನು ಖಾತರಿಪಡಿಸುತ್ತದೆ?",
      "opts": [
       "The agent solves the problem",
       "Every tool succeeds",
       "Execution cannot continue indefinitely",
       "The model will not hallucinate"
      ],
      "optsKn": [
       "Agent ಸಮಸ್ಯೆ ಪರಿಹರಿಸುತ್ತದೆ",
       "ಪ್ರತಿ tool ಯಶಸ್ವಿಯಾಗುತ್ತದೆ",
       "ಕಾರ್ಯಗತಗೊಳಿಸುವಿಕೆ ಅನಿರ್ದಿಷ್ಟವಾಗಿ ಮುಂದುವರಿಯಲಾರದು",
       "ಮಾದರಿ hallucinate ಮಾಡುವುದಿಲ್ಲ"
      ],
      "correct": 2
     }
    ]
   }
  }
 ]
};
