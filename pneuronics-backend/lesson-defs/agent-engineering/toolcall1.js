module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6066020ed05b32151d",
 "order": 0,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Tool Use and Function Calling (Part 1 of 3) — Toolformer, BFCL, Tool Schemas and the Registry",
 "titleKn": "Tool Use ಮತ್ತು Function Calling (ಭಾಗ 1 / 3) — Toolformer, BFCL, Tool Schemas ಮತ್ತು Registry",
 "desc": "Learn function calling as model-proposes, runtime-executes, build a Tool, ToolCall and ToolRegistry, see what happens when raw model arguments reach an executor, measure how descriptions affect routing, and read the compounding-reliability arithmetic.",
 "descKn": "Function calling ಅನ್ನು ಮಾದರಿ-ಪ್ರಸ್ತಾಪಿಸುತ್ತದೆ, runtime-ಚಲಾಯಿಸುತ್ತದೆ ಎಂದು ಕಲಿಯಿರಿ, Tool, ToolCall ಮತ್ತು ToolRegistry ನಿರ್ಮಿಸಿ, ಕಚ್ಚಾ ಮಾದರಿ arguments executor ತಲುಪಿದಾಗ ಏನಾಗುತ್ತದೆ ಎಂದು ನೋಡಿ, ವಿವರಣೆಗಳು routing ಮೇಲೆ ಹೇಗೆ ಪರಿಣಾಮ ಬೀರುತ್ತವೆ ಎಂದು ಅಳೆಯಿರಿ, ಮತ್ತು ಸಂಯೋಜಿತ ವಿಶ್ವಾಸಾರ್ಹತೆಯ ಅಂಕಗಣಿತ ಓದಿ.",
 "objectives": [
  "Explain the difference between text generation and function calling and who executes what.",
  "Describe Toolformer's loss-based filtering and the five BFCL V4 categories.",
  "Build a registry that separates the model-facing schema from the executor.",
  "Show why model-generated arguments must never reach an executor unvalidated.",
  "Explain how description quality affects routing and how step reliability compounds."
 ],
 "objectivesKn": [
  "ಪಠ್ಯ ಉತ್ಪಾದನೆ ಮತ್ತು function calling ನಡುವಿನ ವ್ಯತ್ಯಾಸ ಮತ್ತು ಯಾರು ಏನು ಚಲಾಯಿಸುತ್ತಾರೆ ಎಂದು ವಿವರಿಸಿ.",
  "Toolformer ನ loss-ಆಧಾರಿತ ಫಿಲ್ಟರಿಂಗ್ ಮತ್ತು ಐದು BFCL V4 ವರ್ಗಗಳನ್ನು ವಿವರಿಸಿ.",
  "ಮಾದರಿ-ಮುಖದ schema ಅನ್ನು executor ನಿಂದ ಬೇರ್ಪಡಿಸುವ registry ನಿರ್ಮಿಸಿ.",
  "ಮಾದರಿ ಉತ್ಪಾದಿಸಿದ arguments ಮಾನ್ಯಗೊಳಿಸದೆ executor ತಲುಪಬಾರದು ಏಕೆ ಎಂದು ತೋರಿಸಿ.",
  "ವಿವರಣೆ ಗುಣಮಟ್ಟ routing ಮೇಲೆ ಹೇಗೆ ಪರಿಣಾಮ ಬೀರುತ್ತದೆ ಮತ್ತು ಹಂತ ವಿಶ್ವಾಸಾರ್ಹತೆ ಹೇಗೆ ಸಂಯೋಜಿತವಾಗುತ್ತದೆ ಎಂದು ವಿವರಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Tool Use and Function Calling (Part 1 of 3)",
    "textKn": "Tool Use ಮತ್ತು Function Calling (ಭಾಗ 1 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 1 of 3: what function calling is, Toolformer, the BFCL categories, tool schemas and the registry. Every output was genuinely produced by toolcall_1.py on Python 3.14.5. The tools are local, deterministic stand-ins, and the benchmark figures (BFCL weights, reliability products) are quoted or computed arithmetic, not measurements of any model. The source text for this part was cut off before its final quiz question. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ ಮೊದಲನೆಯದು: function calling ಎಂದರೇನು, Toolformer, BFCL ವರ್ಗಗಳು, tool schemas ಮತ್ತು registry. ಎಲ್ಲಾ output toolcall_1.py ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. Tools ಸ್ಥಳೀಯ, ನಿರ್ಧಾರಾತ್ಮಕ ಬದಲಿಗಳು, ಮತ್ತು benchmark ಅಂಕಿಅಂಶಗಳು (BFCL ತೂಕ, ವಿಶ್ವಾಸಾರ್ಹತೆ ಗುಣಲಬ್ಧ) ಉಲ್ಲೇಖಿತ ಅಥವಾ ಲೆಕ್ಕಿಸಿದ ಅಂಕಗಣಿತ, ಯಾವುದೇ ಮಾದರಿಯ ಅಳತೆಗಳಲ್ಲ. ಈ ಭಾಗದ ಮೂಲ ಪಠ್ಯ ಅದರ ಕೊನೆಯ quiz ಪ್ರಶ್ನೆಗೆ ಮೊದಲೇ ಕತ್ತರಿಸಲ್ಪಟ್ಟಿತ್ತು. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "From Text to Tool Calls",
    "textKn": "ಪಠ್ಯದಿಂದ Tool ಕರೆಗಳಿಗೆ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "The Model Requests, the Runtime Executes",
    "headingKn": "ಮಾದರಿ ಕೇಳುತ್ತದೆ, Runtime ಚಲಾಯಿಸುತ್ತದೆ",
    "bodyEn": "A plain model maps text to text. If asked to send an email, writing \"Email sent successfully.\" does not send anything. In function calling the model produces a structured request, for example a name and arguments, and an application executes it. The phrase \"function calling\" is slightly misleading, because the model does not run the function: it proposes an action, and the runtime decides whether and how it happens. That separation is the security model. Tool orchestration goes further: search the weather, convert the temperature, then email it, with each step depending on the last.",
    "bodyKn": "ಸಾಮಾನ್ಯ ಮಾದರಿ ಪಠ್ಯವನ್ನು ಪಠ್ಯಕ್ಕೆ ನಕ್ಷೆ ಮಾಡುತ್ತದೆ. ಇಮೇಲ್ ಕಳುಹಿಸಲು ಕೇಳಿದರೆ \"Email sent successfully.\" ಎಂದು ಬರೆದರೆ ಏನೂ ಕಳುಹಿಸಲ್ಪಡುವುದಿಲ್ಲ. Function calling ನಲ್ಲಿ ಮಾದರಿ ರಚನಾತ್ಮಕ ವಿನಂತಿ, ಉದಾ. ಹೆಸರು ಮತ್ತು arguments, ಉತ್ಪಾದಿಸುತ್ತದೆ ಮತ್ತು ಅಪ್ಲಿಕೇಶನ್ ಅದನ್ನು ಚಲಾಯಿಸುತ್ತದೆ. \"Function calling\" ಎಂಬ ಪದಗುಚ್ಛ ಸ್ವಲ್ಪ ದಾರಿತಪ್ಪಿಸುತ್ತದೆ, ಏಕೆಂದರೆ ಮಾದರಿ ಫಂಕ್ಷನ್ ಚಲಾಯಿಸುವುದಿಲ್ಲ: ಅದು ಕ್ರಿಯೆ ಪ್ರಸ್ತಾಪಿಸುತ್ತದೆ, ಮತ್ತು ಅದು ನಡೆಯುತ್ತದೆಯೇ ಹಾಗೂ ಹೇಗೆ ಎಂದು runtime ನಿರ್ಧರಿಸುತ್ತದೆ. ಆ ಪ್ರತ್ಯೇಕತೆಯೇ ಭದ್ರತಾ ಮಾದರಿ. Tool orchestration ಮುಂದೆ ಹೋಗುತ್ತದೆ: ಹವಾಮಾನ ಹುಡುಕಿ, ತಾಪಮಾನ ಪರಿವರ್ತಿಸಿ, ನಂತರ ಇಮೇಲ್ ಮಾಡಿ, ಪ್ರತಿ ಹಂತ ಹಿಂದಿನದರ ಮೇಲೆ ಅವಲಂಬಿತ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "The Trust Boundary",
    "headingKn": "Trust Boundary",
    "svgCode": "<svg viewBox=\"0 0 300 210\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\">\n  <rect width=\"300\" height=\"210\" rx=\"8\" fill=\"#0f172a\"/>\n  <text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">The model proposes, the runtime decides</text>\n  <rect x=\"40\" y=\"22\" width=\"220\" height=\"22\" rx=\"4\" fill=\"#1e293b\" stroke=\"#60a5fa\"/><text x=\"150\" y=\"37\" fill=\"#93c5fd\" text-anchor=\"middle\">MODEL: probabilistic, untrusted ToolCall</text>\n  <path d=\"M150,44 V54\" stroke=\"#475569\"/>\n  <rect x=\"20\" y=\"56\" width=\"260\" height=\"14\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"66\" fill=\"#fecaca\" text-anchor=\"middle\" font-size=\"6\">TRUST BOUNDARY</text>\n  <path d=\"M150,70 V80\" stroke=\"#475569\"/>\n  <rect x=\"40\" y=\"82\" width=\"220\" height=\"22\" rx=\"4\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"150\" y=\"97\" fill=\"#6ee7b7\" text-anchor=\"middle\">registry lookup: is the tool exposed?</text>\n  <path d=\"M150,104 V112\" stroke=\"#475569\"/>\n  <rect x=\"40\" y=\"114\" width=\"220\" height=\"22\" rx=\"4\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"150\" y=\"129\" fill=\"#6ee7b7\" text-anchor=\"middle\">validate, coerce narrowly (Part 2)</text>\n  <path d=\"M150,136 V144\" stroke=\"#475569\"/>\n  <rect x=\"40\" y=\"146\" width=\"220\" height=\"22\" rx=\"4\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"150\" y=\"161\" fill=\"#c4b5fd\" text-anchor=\"middle\">authorize, sandbox, timeout, execute</text>\n  <path d=\"M150,168 V178\" stroke=\"#475569\"/>\n  <rect x=\"40\" y=\"180\" width=\"220\" height=\"22\" rx=\"4\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"195\" fill=\"#fde68a\" text-anchor=\"middle\">structured observation back to the model</text>\n</svg>",
    "captionEn": "Model output is untrusted data. The runtime checks the registry, validates, authorizes and executes, then returns a structured observation.",
    "captionKn": "ಮಾದರಿ ಔಟ್‌ಪುಟ್ ನಂಬಲಾಗದ ಡೇಟಾ. Runtime registry ಪರಿಶೀಲಿಸಿ, ಮಾನ್ಯಗೊಳಿಸಿ, ಅಧಿಕೃತಗೊಳಿಸಿ, ಚಲಾಯಿಸಿ, ನಂತರ ರಚನಾತ್ಮಕ observation ಹಿಂತಿರುಗಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Toolformer: A Self-Supervised Filter",
    "headingKn": "Toolformer: ಸ್ವಯಂ-ಮೇಲ್ವಿಚಾರಿತ ಫಿಲ್ಟರ್",
    "bodyEn": "Toolformer lets the model propose candidate tool calls inside ordinary text, executes them, inserts the results, and keeps a call only if its result reduces next-token loss. With L(without) the loss without the result and L(with) the loss with it, the call is kept when the difference L(without) - L(with) is positive. No human labels each call; the language-modelling objective is the signal. Section 1 of the run applies the filter to the lesson's two examples: a sqrt(144) call that drops the loss from 3.2 to 0.4 (a gain of +2.80, kept) and an unneeded calculator call that moves it from 0.15 to 0.16 (-0.01, discarded).",
    "bodyKn": "Toolformer ಮಾದರಿ ಸಾಮಾನ್ಯ ಪಠ್ಯದೊಳಗೆ ಅಭ್ಯರ್ಥಿ tool ಕರೆಗಳನ್ನು ಪ್ರಸ್ತಾಪಿಸಲು ಬಿಡುತ್ತದೆ, ಅವನ್ನು ಚಲಾಯಿಸಿ, ಫಲಿತಾಂಶ ಸೇರಿಸಿ, ಫಲಿತಾಂಶ ಮುಂದಿನ-token loss ಕಡಿಮೆ ಮಾಡಿದರೆ ಮಾತ್ರ ಕರೆ ಉಳಿಸುತ್ತದೆ. L(without) ಫಲಿತಾಂಶವಿಲ್ಲದ loss ಮತ್ತು L(with) ಫಲಿತಾಂಶ ಸಹಿತ loss ಆದರೆ, ವ್ಯತ್ಯಾಸ L(without) - L(with) ಧನಾತ್ಮಕವಾದಾಗ ಕರೆ ಉಳಿಯುತ್ತದೆ. ಯಾವ ಮನುಷ್ಯನೂ ಪ್ರತಿ ಕರೆಗೆ ಲೇಬಲ್ ಹಾಕುವುದಿಲ್ಲ; ಭಾಷಾ-ಮಾದರಿ ಉದ್ದೇಶವೇ ಸಂಕೇತ. ಓಟದ ವಿಭಾಗ 1 ಫಿಲ್ಟರ್ ಅನ್ನು ಪಾಠದ ಎರಡು ಉದಾಹರಣೆಗಳಿಗೆ ಅನ್ವಯಿಸುತ್ತದೆ: loss ಅನ್ನು 3.2 ರಿಂದ 0.4 ಕ್ಕೆ ಇಳಿಸುವ sqrt(144) ಕರೆ (+2.80 ಲಾಭ, ಉಳಿಯಿತು) ಮತ್ತು 0.15 ರಿಂದ 0.16 ಕ್ಕೆ ಬದಲಿಸುವ ಅನಗತ್ಯ calculator ಕರೆ (-0.01, ಬಿಸಾಡಲಾಯಿತು)."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Beyond One Correct Call: BFCL V4",
    "headingKn": "ಒಂದು ಸರಿಯಾದ ಕರೆಯನ್ನು ಮೀರಿ: BFCL V4",
    "bodyEn": "The Berkeley Function Calling Leaderboard weights five categories: Agentic 40 percent, Multi-Turn 30, Live 10, Non-Live 10 and Hallucination 10 (section 8 checks they sum to 100). Agentic tests whole trajectories against an environment. Multi-turn tests carrying constraints such as \"same area\" across turns. Live uses messy real requests, and non-live uses controlled static cases for regression. Hallucination tests knowing when not to call: inventing a write_poem tool, or calling search for a request that needs none, is a failure. State-based evaluation asks what is true in the environment afterwards, not whether the generated call matches an expected string.",
    "bodyKn": "Berkeley Function Calling Leaderboard ಐದು ವರ್ಗಗಳಿಗೆ ತೂಕ ನೀಡುತ್ತದೆ: Agentic 40 ಶೇಕಡಾ, Multi-Turn 30, Live 10, Non-Live 10 ಮತ್ತು Hallucination 10 (ವಿಭಾಗ 8 ಅವು 100 ಕ್ಕೆ ಕೂಡುತ್ತವೆ ಎಂದು ಪರಿಶೀಲಿಸುತ್ತದೆ). Agentic ಪರಿಸರದ ವಿರುದ್ಧ ಸಂಪೂರ್ಣ trajectories ಪರೀಕ್ಷಿಸುತ್ತದೆ. Multi-turn \"ಅದೇ ಪ್ರದೇಶ\" ನಂತಹ ನಿರ್ಬಂಧಗಳನ್ನು ಸುತ್ತುಗಳ ನಡುವೆ ಒಯ್ಯುವುದನ್ನು ಪರೀಕ್ಷಿಸುತ್ತದೆ. Live ಗದ್ದಲದ ನಿಜವಾದ ವಿನಂತಿಗಳನ್ನು ಬಳಸುತ್ತದೆ, ಮತ್ತು non-live regression ಗಾಗಿ ನಿಯಂತ್ರಿತ ಸ್ಥಿರ ಪ್ರಕರಣಗಳನ್ನು. Hallucination ಯಾವಾಗ ಕರೆಯಬಾರದು ಎಂದು ತಿಳಿಯುವುದನ್ನು ಪರೀಕ್ಷಿಸುತ್ತದೆ: write_poem tool ಸೃಷ್ಟಿಸುವುದು, ಅಥವಾ ಯಾವುದೂ ಬೇಡದ ವಿನಂತಿಗೆ search ಕರೆಯುವುದು ವೈಫಲ್ಯ. State-based ಮೌಲ್ಯಮಾಪನ ನಂತರ ಪರಿಸರದಲ್ಲಿ ಏನು ನಿಜ ಎಂದು ಕೇಳುತ್ತದೆ, ಉತ್ಪಾದಿಸಿದ ಕರೆ ನಿರೀಕ್ಷಿತ ಸ್ಟ್ರಿಂಗ್‌ಗೆ ಹೊಂದುತ್ತದೆಯೇ ಎಂದಲ್ಲ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Tool Schemas and the Registry",
    "textKn": "Tool Schemas ಮತ್ತು Registry",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Name, Description and Schema",
    "headingKn": "ಹೆಸರು, ವಿವರಣೆ ಮತ್ತು Schema",
    "bodyEn": "A tool has a model-facing contract (name, description, input schema) and a runtime side (executor, timeout). Names carry routing information: search_web is better than tool_a. Descriptions say what a tool does and when to use it, and they work best with negative boundaries. The input schema is a JSON-Schema-style contract: required fields, types, enums. Keep schema and executor separate: the Python signature cannot say when to use a function or what it must not do. Section 3 prints schemas() and confirms the executor never reaches the model-facing view.",
    "bodyKn": "Tool ಗೆ ಮಾದರಿ-ಮುಖದ ಒಪ್ಪಂದ (ಹೆಸರು, ವಿವರಣೆ, input schema) ಮತ್ತು runtime ಬದಿ (executor, timeout) ಇದೆ. ಹೆಸರುಗಳು routing ಮಾಹಿತಿ ಒಯ್ಯುತ್ತವೆ: search_web tool_a ಗಿಂತ ಉತ್ತಮ. ವಿವರಣೆಗಳು tool ಏನು ಮಾಡುತ್ತದೆ ಮತ್ತು ಯಾವಾಗ ಬಳಸಬೇಕು ಎಂದು ಹೇಳುತ್ತವೆ, ಮತ್ತು ಋಣಾತ್ಮಕ ಗಡಿಗಳೊಂದಿಗೆ ಉತ್ತಮ ಕೆಲಸ ಮಾಡುತ್ತವೆ. Input schema JSON-Schema-ಶೈಲಿಯ ಒಪ್ಪಂದ: ಅಗತ್ಯ ಕ್ಷೇತ್ರಗಳು, ವಿಧಗಳು, enums. Schema ಮತ್ತು executor ಅನ್ನು ಪ್ರತ್ಯೇಕವಾಗಿಡಿ: Python signature ಫಂಕ್ಷನ್ ಯಾವಾಗ ಬಳಸಬೇಕು ಅಥವಾ ಏನು ಮಾಡಬಾರದು ಎಂದು ಹೇಳಲಾರದು. ವಿಭಾಗ 3 schemas() ಮುದ್ರಿಸಿ executor ಎಂದೂ ಮಾದರಿ-ಮುಖದ ನೋಟ ತಲುಪುವುದಿಲ್ಲ ಎಂದು ದೃಢೀಕರಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "toolcall_1.py",
    "headingEn": "Tool, ToolCall, ToolRegistry and a first tool",
    "headingKn": "Tool, ToolCall, ToolRegistry ಮತ್ತು ಮೊದಲ tool",
    "descEn": "Tool and ToolCall are frozen dataclasses. register() rejects duplicate names so a configuration error fails at start-up. get() returns None for an unknown name, because a hallucinated tool is ordinary untrusted input and not an exception. schemas() omits the executor and the timeout. search_web is a local fact index standing in for a real API.",
    "descKn": "Tool ಮತ್ತು ToolCall frozen dataclasses. register() ನಕಲು ಹೆಸರುಗಳನ್ನು ತಿರಸ್ಕರಿಸುತ್ತದೆ, ಹಾಗಾಗಿ ಸಂರಚನಾ ದೋಷ ಆರಂಭದಲ್ಲೇ ವಿಫಲವಾಗುತ್ತದೆ. get() ತಿಳಿಯದ ಹೆಸರಿಗೆ None ಹಿಂತಿರುಗಿಸುತ್ತದೆ, ಏಕೆಂದರೆ hallucinated tool ಸಾಮಾನ್ಯ ನಂಬಲಾಗದ ಇನ್‌ಪುಟ್, exception ಅಲ್ಲ. schemas() executor ಮತ್ತು timeout ಬಿಡುತ್ತದೆ. search_web ನಿಜವಾದ API ಗೆ ಬದಲಿಯಾದ ಸ್ಥಳೀಯ ಸಂಗತಿ ಸೂಚಿ.",
    "code": "@dataclass(frozen=True)\nclass Tool:\n    name: str\n    description: str\n    input_schema: dict[str, Any]\n    timeout_seconds: float\n    executor: Callable[..., Any]\n\n\n@dataclass(frozen=True)\nclass ToolCall:\n    tool_use_id: str\n    name: str\n    arguments: dict[str, Any]\n\n\nclass ToolRegistry:\n    def __init__(self) -> None:\n        self._tools: dict[str, Tool] = {}\n\n    def register(self, tool: Tool) -> None:\n        if tool.name in self._tools:\n            raise ValueError(f\"tool already registered: {tool.name}\")\n        self._tools[tool.name] = tool\n\n    def get(self, name: str) -> Tool | None:\n        return self._tools.get(name)\n\n    def all_tools(self) -> list[Tool]:\n        return list(self._tools.values())\n\n    def schemas(self) -> list[dict[str, Any]]:\n        return [{\"name\": t.name, \"description\": t.description, \"input_schema\": t.input_schema} for t in self._tools.values()]\n\n\nFACTS = {\n    \"gdp of france\": \"France has one of Europe's largest national economies.\",\n    \"capital of france\": \"Paris is the capital of France.\",\n    \"capital of india\": \"New Delhi is the capital of India.\",\n    \"python creator\": \"Python was created by Guido van Rossum.\",\n}\n\n\ndef search_web(query: str) -> dict[str, Any]:\n    normalized = query.strip().lower()\n    for key, value in FACTS.items():\n        if key in normalized:\n            return {\"found\": True, \"query\": query, \"answer\": value}\n    return {\"found\": False, \"query\": query, \"answer\": None}"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "toolcall_1.py",
    "headingEn": "A lexical router stand-in and eight experiments",
    "headingKn": "Lexical router ಬದಲಿ ಮತ್ತು ಎಂಟು ಪ್ರಯೋಗಗಳು",
    "descEn": "tokenize and lexical_similarity score a query against a description by word overlap. This is not how a production router works (it would use a model or embeddings), but it makes the effect of descriptions visible. main() runs the experiments below.",
    "descKn": "tokenize ಮತ್ತು lexical_similarity ಪದ ಅತಿಕ್ರಮಣದಿಂದ query ಗೆ ವಿವರಣೆ ವಿರುದ್ಧ ಅಂಕ ನೀಡುತ್ತವೆ. Production router ಹೀಗೆ ಕೆಲಸ ಮಾಡುವುದಿಲ್ಲ (ಅದು ಮಾದರಿ ಅಥವಾ embeddings ಬಳಸುತ್ತದೆ), ಆದರೆ ಇದು ವಿವರಣೆಗಳ ಪರಿಣಾಮ ಕಾಣುವಂತೆ ಮಾಡುತ್ತದೆ. main() ಕೆಳಗಿನ ಪ್ರಯೋಗಗಳನ್ನು ಚಲಾಯಿಸುತ್ತದೆ.",
    "code": "def tokenize(text: str) -> set[str]:\n    return set(re.findall(r\"[a-z0-9_]+\", text.lower()))\n\n\ndef lexical_similarity(query: str, description: str) -> float:\n    q, d = tokenize(query), tokenize(description)\n    return len(q & d) / len(q) if q else 0.0\n\n\ndef build_search_tool() -> Tool:\n    return Tool(\n        name=\"search_web\",\n        description=(\"Search a local factual index for public factual information. Use this when the request asks \"\n                     \"for facts rather than arithmetic or internal records.\"),\n        input_schema={\"type\": \"object\", \"properties\": {\"query\": {\"type\": \"string\"}}, \"required\": [\"query\"]},\n        timeout_seconds=2.0,\n        executor=search_web,\n    )\n\n\ndef section(t):\n    print(f\"\\n--- {t} ---\")\n\n\ndef main():\n    section(\"1. Toolformer's filter: keep a call only if its result lowers the loss\")\n    for label, without, with_ in ((\"sqrt(144) example\", 3.2, 0.4), (\"unneeded calculator call\", 0.15, 0.16)):\n        delta = without - with_\n        print(f\"{label:<26} L_without={without} L_with={with_} delta={delta:+.2f} -> {'KEEP' if delta > 0 else 'DISCARD'}\")\n\n    section(\"2. Registry behaviour\")\n    reg = ToolRegistry()\n    reg.register(build_search_tool())\n    print(\"get('search_web') ->\", type(reg.get(\"search_web\")).__name__)\n    print(\"get('does_not_exist') ->\", reg.get(\"does_not_exist\"))\n    try:\n        reg.register(build_search_tool())\n    except ValueError as exc:\n        print(\"duplicate registration -> ValueError:\", exc)\n\n    section(\"3. What the model sees (schemas()) and what it must not\")\n    print(json.dumps(reg.schemas(), indent=1))\n    print(\"executor present in the model-facing view:\", \"executor\" in json.dumps(reg.schemas()))\n    t = reg.get(\"search_web\")\n    try:\n        t.name = \"evil_tool\"\n    except Exception as exc:\n        print(\"frozen dataclass blocks mutation ->\", type(exc).__name__)\n\n    section(\"4. Executing model output directly: the failure Part 2 prevents\")\n    for args in ({\"query\": \"capital of France\"}, {\"query\": 12345}, {}):\n        try:\n            print(f\"{args!s:<28} -> {t.executor(**args)}\")\n        except Exception as exc:\n            print(f\"{args!s:<28} -> {type(exc).__name__}: {exc}\")\n\n    section(\"5. Python type hints are not enforced at call time\")\n    def query_db(customer_id: int, status: str = \"open\"):\n        return {\"customer_id\": customer_id, \"status\": status}\n    print(\"query_db(customer_id='banana', status=99) ->\", query_db(customer_id=\"banana\", status=99))\n\n    section(\"6. Description quality drives lexical routing\")\n    vague = {\"tool_a\": \"does stuff\", \"tool_b\": \"does things\", \"helper\": \"helper\"}\n    good = {\"search_web\": \"search public internet sources for current external facts\",\n            \"run_python\": \"restricted arithmetic calculation of numeric results\",\n            \"query_db\": \"read internal customer records such as orders and balances\"}\n    for q in (\"search public facts about France\", \"calculate a numeric result\", \"read internal customer records\"):\n        sv = {k: round(lexical_similarity(q, v), 2) for k, v in vague.items()}\n        sg = {k: round(lexical_similarity(q, v), 2) for k, v in good.items()}\n        print(f\"query: {q}\")\n        print(\"   vague descriptions:\", sv)\n        print(\"   good descriptions :\", sg)\n\n    section(\"7. Reliability arithmetic (independence assumed: NOT a benchmark)\")\n    print(\"route x arguments x execution x interpretation = 0.98 x 0.96 x 0.99 x 0.97 =\", round(0.98 * 0.96 * 0.99 * 0.97, 3))\n    for p, n in ((0.98, 10), (0.98, 20), (0.98, 30), (0.98, 40), (0.99, 40)):\n        print(f\"per-step {p} over {n:>2} steps -> {p ** n:.3f}\")\n\n    section(\"8. BFCL V4 weights quoted in the lesson\")\n    weights = {\"Agentic\": 40, \"Multi-Turn\": 30, \"Live\": 10, \"Non-Live\": 10, \"Hallucination\": 10}\n    for k, v in weights.items():\n        print(f\"{k:<14}{v:>3}%  {'#' * (v // 2)}\")\n    print(\"sum:\", sum(weights.values()))"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Toolformer's filter: keep a call only if its result lowers the loss ---\nsqrt(144) example          L_without=3.2 L_with=0.4 delta=+2.80 -> KEEP\nunneeded calculator call   L_without=0.15 L_with=0.16 delta=-0.01 -> DISCARD\n\n--- 2. Registry behaviour ---\nget('search_web') -> Tool\nget('does_not_exist') -> None\nduplicate registration -> ValueError: tool already registered: search_web\n\n--- 3. What the model sees (schemas()) and what it must not ---\n[\n {\n  \"name\": \"search_web\",\n  \"description\": \"Search a local factual index for public factual information. Use this when the request asks for facts rather than arithmetic or internal records.\",\n  \"input_schema\": {\n   \"type\": \"object\",\n   \"properties\": {\n    \"query\": {\n     \"type\": \"string\"\n    }\n   },\n   \"required\": [\n    \"query\"\n   ]\n  }\n }\n]\nexecutor present in the model-facing view: False\nfrozen dataclass blocks mutation -> FrozenInstanceError\n\n--- 4. Executing model output directly: the failure Part 2 prevents ---\n{'query': 'capital of France'} -> {'found': True, 'query': 'capital of France', 'answer': 'Paris is the capital of France.'}\n{'query': 12345}             -> AttributeError: 'int' object has no attribute 'strip'\n{}                           -> TypeError: search_web() missing 1 required positional argument: 'query'\n\n--- 5. Python type hints are not enforced at call time ---\nquery_db(customer_id='banana', status=99) -> {'customer_id': 'banana', 'status': 99}\n\n--- 6. Description quality drives lexical routing ---\nquery: search public facts about France\n   vague descriptions: {'tool_a': 0.0, 'tool_b': 0.0, 'helper': 0.0}\n   good descriptions : {'search_web': 0.6, 'run_python': 0.0, 'query_db': 0.0}\nquery: calculate a numeric result\n   vague descriptions: {'tool_a': 0.0, 'tool_b': 0.0, 'helper': 0.0}\n   good descriptions : {'search_web': 0.0, 'run_python': 0.25, 'query_db': 0.0}\nquery: read internal customer records\n   vague descriptions: {'tool_a': 0.0, 'tool_b': 0.0, 'helper': 0.0}\n   good descriptions : {'search_web': 0.0, 'run_python': 0.0, 'query_db': 1.0}\n\n--- 7. Reliability arithmetic (independence assumed: NOT a benchmark) ---\nroute x arguments x execution x interpretation = 0.98 x 0.96 x 0.99 x 0.97 = 0.903\nper-step 0.98 over 10 steps -> 0.817\nper-step 0.98 over 20 steps -> 0.668\nper-step 0.98 over 30 steps -> 0.545\nper-step 0.98 over 40 steps -> 0.446\nper-step 0.99 over 40 steps -> 0.669\n\n--- 8. BFCL V4 weights quoted in the lesson ---\nAgentic        40%  ####################\nMulti-Turn     30%  ###############\nLive           10%  #####\nNon-Live       10%  #####\nHallucination  10%  #####\nsum: 100"
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
    "headingEn": "The Registry Behaves as Designed",
    "headingKn": "Registry ವಿನ್ಯಾಸದಂತೆ ವರ್ತಿಸುತ್ತದೆ",
    "bodyEn": "Section 2: get(\"search_web\") returns a Tool, get(\"does_not_exist\") returns None, and registering the same name twice raises ValueError. Section 3: the schema the model sees contains the name, description and input_schema and no executor, and the frozen dataclass refuses mutation with FrozenInstanceError. Immutability is not a complete security mechanism, but it stops accidental changes to a registered tool.",
    "bodyKn": "ವಿಭಾಗ 2: get(\"search_web\") Tool ಹಿಂತಿರುಗಿಸುತ್ತದೆ, get(\"does_not_exist\") None ಹಿಂತಿರುಗಿಸುತ್ತದೆ, ಮತ್ತು ಅದೇ ಹೆಸರನ್ನು ಎರಡು ಬಾರಿ ನೋಂದಾಯಿಸಿದರೆ ValueError. ವಿಭಾಗ 3: ಮಾದರಿ ನೋಡುವ schema ಹೆಸರು, ವಿವರಣೆ ಮತ್ತು input_schema ಹೊಂದಿದೆ, executor ಇಲ್ಲ, ಮತ್ತು frozen dataclass ಬದಲಾವಣೆಯನ್ನು FrozenInstanceError ಜೊತೆ ನಿರಾಕರಿಸುತ್ತದೆ. ಬದಲಾಗದಿರುವಿಕೆ ಸಂಪೂರ್ಣ ಭದ್ರತಾ ವ್ಯವಸ್ಥೆಯಲ್ಲ, ಆದರೆ ನೋಂದಾಯಿತ tool ಗೆ ಆಕಸ್ಮಿಕ ಬದಲಾವಣೆ ತಡೆಯುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why You Must Not Call the Executor With Raw Arguments",
    "headingKn": "ಕಚ್ಚಾ Arguments ಜೊತೆ Executor ಏಕೆ ಕರೆಯಬಾರದು",
    "bodyEn": "Section 4 calls search_web directly with three argument sets. The valid one works. {\"query\": 12345} raises AttributeError: 'int' object has no attribute 'strip', and {} raises TypeError: search_web() missing 1 required positional argument. Section 5 shows Python type hints do not help: query_db(customer_id=\"banana\", status=99) runs and returns the nonsense it was given. The Python signature is not a runtime contract, so a validation boundary has to stand between model output and the executor. That is Part 2.",
    "bodyKn": "ವಿಭಾಗ 4 search_web ಅನ್ನು ಮೂರು argument ಗಣಗಳೊಂದಿಗೆ ನೇರವಾಗಿ ಕರೆಯುತ್ತದೆ. ಮಾನ್ಯವಾದದ್ದು ಕೆಲಸ ಮಾಡುತ್ತದೆ. {\"query\": 12345} AttributeError: 'int' object has no attribute 'strip' ಎತ್ತುತ್ತದೆ, ಮತ್ತು {} TypeError: search_web() missing 1 required positional argument ಎತ್ತುತ್ತದೆ. ವಿಭಾಗ 5 Python type hints ಸಹಾಯ ಮಾಡುವುದಿಲ್ಲ ಎಂದು ತೋರಿಸುತ್ತದೆ: query_db(customer_id=\"banana\", status=99) ಚಲಿಸಿ ತನಗೆ ನೀಡಿದ ಅರ್ಥಹೀನವನ್ನೇ ಹಿಂತಿರುಗಿಸುತ್ತದೆ. Python signature runtime ಒಪ್ಪಂದವಲ್ಲ, ಆದ್ದರಿಂದ ಮಾದರಿ ಔಟ್‌ಪುಟ್ ಮತ್ತು executor ನಡುವೆ ಮಾನ್ಯತಾ ಗಡಿ ನಿಲ್ಲಬೇಕು. ಅದು ಭಾಗ 2."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Descriptions Move Routing, and Word Overlap Is Fragile",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ವಿವರಣೆಗಳು Routing ಸರಿಸುತ್ತವೆ, ಪದ ಅತಿಕ್ರಮಣ ದುರ್ಬಲ",
    "bodyEn": "Section 6 scores three queries against vague descriptions (\"does stuff\", \"does things\", \"helper\") and against good ones. Every vague description scores 0.0 for every query: there is no routing signal at all. With good descriptions \"read internal customer records\" scores 1.0 for query_db and 0.0 elsewhere, and \"search public facts about France\" scores 0.6 for search_web. But \"calculate a numeric result\" scores only 0.25 for run_python, because the description says \"calculation\", which shares no token with \"calculate\". A word-overlap router cannot see a word stem, which is exactly what a semantic model does better. Part 3 shows this weakness causing wrong routes.",
    "bodyKn": "ವಿಭಾಗ 6 ಮೂರು queries ಗೆ ಅಸ್ಪಷ್ಟ ವಿವರಣೆಗಳ (\"does stuff\", \"does things\", \"helper\") ಮತ್ತು ಉತ್ತಮ ವಿವರಣೆಗಳ ವಿರುದ್ಧ ಅಂಕ ನೀಡುತ್ತದೆ. ಪ್ರತಿ ಅಸ್ಪಷ್ಟ ವಿವರಣೆ ಪ್ರತಿ query ಗೆ 0.0 ಪಡೆಯುತ್ತದೆ: routing ಸಂಕೇತವೇ ಇಲ್ಲ. ಉತ್ತಮ ವಿವರಣೆಗಳೊಂದಿಗೆ \"read internal customer records\" query_db ಗೆ 1.0 ಮತ್ತು ಬೇರೆಡೆ 0.0 ಪಡೆಯುತ್ತದೆ, ಮತ್ತು \"search public facts about France\" search_web ಗೆ 0.6. ಆದರೆ \"calculate a numeric result\" run_python ಗೆ ಕೇವಲ 0.25 ಪಡೆಯುತ್ತದೆ, ಏಕೆಂದರೆ ವಿವರಣೆ \"calculation\" ಎನ್ನುತ್ತದೆ, ಅದು \"calculate\" ನೊಂದಿಗೆ ಯಾವುದೇ token ಹಂಚಿಕೊಳ್ಳುವುದಿಲ್ಲ. ಪದ-ಅತಿಕ್ರಮಣ router ಪದದ ಮೂಲ ರೂಪ ಕಾಣಲಾರದು, ಮತ್ತು semantic ಮಾದರಿ ಅದನ್ನು ಉತ್ತಮವಾಗಿ ಮಾಡುತ್ತದೆ. ಭಾಗ 3 ಈ ದೌರ್ಬಲ್ಯ ತಪ್ಪು routes ಗೆ ಕಾರಣವಾಗುವುದನ್ನು ತೋರಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Reliability Compounds",
    "headingKn": "ವಿಶ್ವಾಸಾರ್ಹತೆ ಸಂಯೋಜಿತವಾಗುತ್ತದೆ",
    "bodyEn": "Section 7 shows why strong single calls do not make strong agents. Routing 0.98, arguments 0.96, execution 0.99 and interpretation 0.97 multiply to 0.903 (the lesson says about 0.904; the exact product is 0.9034). A step that succeeds 98 percent of the time succeeds on all of 10, 20, 30 and 40 steps with probability 0.817, 0.668, 0.545 and 0.446, and at 99 percent over 40 steps it is 0.669. These assume independent failures, which real agents do not have, so they illustrate compounding and are not a prediction for any benchmark.",
    "bodyKn": "ವಿಭಾಗ 7 ಬಲವಾದ ಒಂದೇ ಕರೆಗಳು ಬಲವಾದ agents ಆಗಿಸುವುದಿಲ್ಲ ಏಕೆ ಎಂದು ತೋರಿಸುತ್ತದೆ. Routing 0.98, arguments 0.96, ಕಾರ್ಯಗತ 0.99 ಮತ್ತು ವ್ಯಾಖ್ಯಾನ 0.97 ಗುಣಿಸಿ 0.903 (ಪಾಠ ಸುಮಾರು 0.904 ಎನ್ನುತ್ತದೆ; ನಿಖರ ಗುಣಲಬ್ಧ 0.9034). 98 ಶೇಕಡಾ ಯಶಸ್ವಿಯಾಗುವ ಹಂತ 10, 20, 30 ಮತ್ತು 40 ಹಂತಗಳೆಲ್ಲದರಲ್ಲಿ ಯಶಸ್ವಿಯಾಗುವ ಸಂಭವನೀಯತೆ 0.817, 0.668, 0.545 ಮತ್ತು 0.446, ಮತ್ತು 40 ಹಂತಗಳಲ್ಲಿ 99 ಶೇಕಡಾಕ್ಕೆ 0.669. ಇವು ಸ್ವತಂತ್ರ ವೈಫಲ್ಯ ಊಹಿಸುತ್ತವೆ, ನಿಜವಾದ agents ಗೆ ಅದು ಇಲ್ಲ, ಆದ್ದರಿಂದ ಅವು ಸಂಯೋಜನೆಯನ್ನು ವಿವರಿಸುತ್ತವೆ, ಯಾವುದೇ benchmark ಗೆ ಭವಿಷ್ಯವಾಣಿ ಅಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Three Hard Problems",
    "headingKn": "ಮೂರು ಕಠಿಣ ಸಮಸ್ಯೆಗಳು",
    "bodyEn": "Memory: carrying \"my project is Apollo\" many turns later. Dynamic decision-making: the next action depends on the last observation, a_(t+1) = f(g, s_t, o_t), so a failed lookup should change the plan. Long-horizon chains: over 40 steps an agent can drift away from the original constraint (use only 2026 sales) while every individual call is valid. These are the difficulties Part 3 exercises.",
    "bodyKn": "Memory: ಹಲವು ಸುತ್ತುಗಳ ನಂತರ \"ನನ್ನ ಪ್ರಾಜೆಕ್ಟ್ Apollo\" ಒಯ್ಯುವುದು. ಕ್ರಿಯಾತ್ಮಕ ನಿರ್ಧಾರ: ಮುಂದಿನ action ಕೊನೆಯ observation ಮೇಲೆ ಅವಲಂಬಿತ, a_(t+1) = f(g, s_t, o_t), ಹಾಗಾಗಿ ವಿಫಲ ಹುಡುಕಾಟ ಯೋಜನೆ ಬದಲಿಸಬೇಕು. ದೀರ್ಘ-ಆಕಾಶ ಸರಪಳಿಗಳು: 40 ಹಂತಗಳಲ್ಲಿ ಪ್ರತಿ ಕರೆ ಮಾನ್ಯವಾಗಿದ್ದರೂ agent ಮೂಲ ನಿರ್ಬಂಧದಿಂದ (2026 ಮಾರಾಟ ಮಾತ್ರ ಬಳಸಿ) ದೂರ ಸರಿಯಬಹುದು. ಭಾಗ 3 ಈ ಕಷ್ಟಗಳನ್ನು ಅಭ್ಯಾಸ ಮಾಡುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A model cannot read live data, query your database or change state by writing text. Tool calls are how it borrows those abilities while the runtime keeps authority: it exposes a narrow, named capability set, validates every request and returns structured observations. Narrow tools (git_status, read_report) express fewer dangerous actions than a generic run_shell.",
    "bodyKn": "ಮಾದರಿ ಪಠ್ಯ ಬರೆದು ನೇರ ಡೇಟಾ ಓದಲಾರದು, ನಿಮ್ಮ ಡೇಟಾಬೇಸ್ query ಮಾಡಲಾರದು ಅಥವಾ ಸ್ಥಿತಿ ಬದಲಿಸಲಾರದು. Tool ಕರೆಗಳು ಆ ಸಾಮರ್ಥ್ಯಗಳನ್ನು ಎರವಲು ಪಡೆಯುವ ಮಾರ್ಗ, ಮತ್ತು runtime ಅಧಿಕಾರ ಉಳಿಸಿಕೊಳ್ಳುತ್ತದೆ: ಅದು ಕಿರಿದಾದ, ಹೆಸರಿಸಿದ ಸಾಮರ್ಥ್ಯ ಗಣ ಬಹಿರಂಗಪಡಿಸುತ್ತದೆ, ಪ್ರತಿ ವಿನಂತಿ ಮಾನ್ಯಗೊಳಿಸುತ್ತದೆ ಮತ್ತು ರಚನಾತ್ಮಕ observations ಹಿಂತಿರುಗಿಸುತ್ತದೆ. ಕಿರಿದಾದ tools (git_status, read_report) ಸಾಮಾನ್ಯ run_shell ಗಿಂತ ಕಡಿಮೆ ಅಪಾಯಕಾರಿ ಕ್ರಿಯೆಗಳನ್ನು ವ್ಯಕ್ತಪಡಿಸುತ್ತವೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Where This Appears in AI Systems",
    "headingKn": "AI ವ್ಯವಸ್ಥೆಗಳಲ್ಲಿ ಇದು ಎಲ್ಲಿ ಕಾಣುತ್ತದೆ",
    "bodyEn": "Assistants that search, calculate and query internal systems, coding agents that read files and run tests, support bots that look up orders, and workflow agents that create tickets all expose a registry of named tools with schemas. Provider SDKs differ in wire format, so a normalising adapter maps provider-specific calls into one internal ToolCall and the rest of the runtime stays provider-independent.",
    "bodyKn": "ಹುಡುಕುವ, ಲೆಕ್ಕಿಸುವ ಮತ್ತು ಆಂತರಿಕ ವ್ಯವಸ್ಥೆಗಳನ್ನು query ಮಾಡುವ ಸಹಾಯಕರು, ಫೈಲ್ ಓದಿ tests ಚಲಾಯಿಸುವ coding agents, ಆರ್ಡರ್ ಹುಡುಕುವ ಬೆಂಬಲ ಬಾಟ್‌ಗಳು ಮತ್ತು tickets ರಚಿಸುವ ಕೆಲಸದ ಹರಿವು agents ಎಲ್ಲವೂ schemas ಇರುವ ಹೆಸರಿಸಿದ tools ನ registry ಬಹಿರಂಗಪಡಿಸುತ್ತವೆ. Provider SDK ಗಳ wire ರೂಪ ಬೇರೆ, ಆದ್ದರಿಂದ ಸಾಮಾನ್ಯೀಕರಿಸುವ adapter provider-ನಿರ್ದಿಷ್ಟ ಕರೆಗಳನ್ನು ಒಂದು ಆಂತರಿಕ ToolCall ಗೆ ನಕ್ಷೆ ಮಾಡುತ್ತದೆ ಮತ್ತು ಉಳಿದ runtime provider-ಸ್ವತಂತ್ರವಾಗಿರುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"function calling is the model outputting JSON.\" JSON is only the serialisation. The real system is selection, arguments, validation, authorization, execution, observation, state update and the next decision. Sections 4 and 5 show how little a well-formed JSON object guarantees about what will actually happen.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"function calling ಎಂದರೆ ಮಾದರಿ JSON ಔಟ್‌ಪುಟ್ ಮಾಡುವುದು.\" JSON ಕೇವಲ ಧಾರಾವಾಹಿಕರಣ. ನಿಜವಾದ ವ್ಯವಸ್ಥೆ ಆಯ್ಕೆ, arguments, ಮಾನ್ಯತೆ, ಅಧಿಕಾರ, ಕಾರ್ಯಗತ, observation, ಸ್ಥಿತಿ ನವೀಕರಣ ಮತ್ತು ಮುಂದಿನ ನಿರ್ಧಾರ. ಸರಿಯಾಗಿ ರೂಪಿಸಿದ JSON ವಸ್ತು ನಿಜವಾಗಿ ಏನಾಗುತ್ತದೆ ಎಂಬುದರ ಬಗ್ಗೆ ಎಷ್ಟು ಕಡಿಮೆ ಖಾತರಿ ನೀಡುತ್ತದೆ ಎಂದು ವಿಭಾಗ 4 ಮತ್ತು 5 ತೋರಿಸುತ್ತವೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Tool schema: the model-facing contract (name, description, input schema). Registry: the catalogue of exposed tools. Executor: the Python function that does the work. Toolformer: self-supervised tool learning that keeps calls which reduce loss. BFCL: the Berkeley Function Calling Leaderboard. Abstention: correctly choosing no tool. State-based evaluation: checking the environment after execution. Capability exposure: deliberately choosing what the model may request.",
    "bodyKn": "Tool schema: ಮಾದರಿ-ಮುಖದ ಒಪ್ಪಂದ (ಹೆಸರು, ವಿವರಣೆ, input schema). Registry: ಬಹಿರಂಗಪಡಿಸಿದ tools ಪಟ್ಟಿ. Executor: ಕೆಲಸ ಮಾಡುವ Python ಫಂಕ್ಷನ್. Toolformer: loss ಕಡಿಮೆ ಮಾಡುವ ಕರೆಗಳನ್ನು ಉಳಿಸುವ ಸ್ವಯಂ-ಮೇಲ್ವಿಚಾರಿತ tool ಕಲಿಕೆ. BFCL: Berkeley Function Calling Leaderboard. Abstention: ಯಾವುದೇ tool ಆರಿಸದಿರುವುದು ಸರಿಯಾಗಿ ಆರಿಸುವುದು. State-based ಮೌಲ್ಯಮಾಪನ: ಕಾರ್ಯಗತದ ನಂತರ ಪರಿಸರ ಪರಿಶೀಲಿಸುವುದು. Capability exposure: ಮಾದರಿ ಏನು ಕೇಳಬಹುದು ಎಂದು ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ಆರಿಸುವುದು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) The model proposes, the runtime validates and executes. 2) Toolformer keeps a call only when its result lowers loss. 3) BFCL weights agentic and multi-turn behaviour most, and checks abstention. 4) A tool is a model-facing contract plus a runtime executor, kept apart. 5) Python type hints are not enforced: a direct call with bad arguments crashed or ran on nonsense. 6) Descriptions are routing signals, and word overlap misses stems. 7) Reliability compounds across steps. Part 2 builds the validation boundary.",
    "bodyKn": "1) ಮಾದರಿ ಪ್ರಸ್ತಾಪಿಸುತ್ತದೆ, runtime ಮಾನ್ಯಗೊಳಿಸಿ ಚಲಾಯಿಸುತ್ತದೆ. 2) Toolformer ಫಲಿತಾಂಶ loss ಕಡಿಮೆ ಮಾಡಿದಾಗ ಮಾತ್ರ ಕರೆ ಉಳಿಸುತ್ತದೆ. 3) BFCL agentic ಮತ್ತು multi-turn ವರ್ತನೆಗೆ ಹೆಚ್ಚು ತೂಕ ನೀಡುತ್ತದೆ ಮತ್ತು abstention ಪರಿಶೀಲಿಸುತ್ತದೆ. 4) Tool ಮಾದರಿ-ಮುಖದ ಒಪ್ಪಂದ ಜೊತೆಗೆ runtime executor, ಬೇರೆಯಾಗಿಟ್ಟು. 5) Python type hints ಜಾರಿಯಾಗುವುದಿಲ್ಲ: ಕೆಟ್ಟ arguments ಜೊತೆ ನೇರ ಕರೆ crash ಆಯಿತು ಅಥವಾ ಅರ್ಥಹೀನದ ಮೇಲೆ ಚಲಿಸಿತು. 6) ವಿವರಣೆಗಳು routing ಸಂಕೇತಗಳು, ಮತ್ತು ಪದ ಅತಿಕ್ರಮಣ ಮೂಲ ರೂಪ ತಪ್ಪಿಸುತ್ತದೆ. 7) ವಿಶ್ವಾಸಾರ್ಹತೆ ಹಂತಗಳಲ್ಲಿ ಸಂಯೋಜಿತವಾಗುತ್ತದೆ. ಭಾಗ 2 ಮಾನ್ಯತಾ ಗಡಿ ನಿರ್ಮಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What is Toolformer's core self-supervision signal?",
      "qKn": "Toolformer ನ ಮುಖ್ಯ ಸ್ವಯಂ-ಮೇಲ್ವಿಚಾರಣೆ ಸಂಕೇತ ಯಾವುದು?",
      "opts": [
       "Human preference ratings",
       "Tool execution speed",
       "Whether the tool result reduces next-token prediction loss",
       "Whether the tool returns JSON"
      ],
      "optsKn": [
       "ಮಾನವ ಆದ್ಯತೆ ರೇಟಿಂಗ್‌ಗಳು",
       "Tool ಕಾರ್ಯಗತ ವೇಗ",
       "Tool ಫಲಿತಾಂಶ ಮುಂದಿನ-token ಮುನ್ಸೂಚನೆ loss ಕಡಿಮೆ ಮಾಡುತ್ತದೆಯೇ",
       "Tool JSON ಹಿಂತಿರುಗಿಸುತ್ತದೆಯೇ"
      ],
      "correct": 2
     },
     {
      "q": "Why are tool descriptions load-bearing?",
      "qKn": "Tool ವಿವರಣೆಗಳು ಅನಿವಾರ್ಯ ಏಕೆ?",
      "opts": [
       "They set Python memory",
       "The model uses their semantics to decide which tool fits",
       "They replace authorization",
       "They set the timeout"
      ],
      "optsKn": [
       "ಅವು Python ಮೆಮೊರಿ ನಿಗದಿಪಡಿಸುತ್ತವೆ",
       "ಯಾವ tool ಹೊಂದುತ್ತದೆ ಎಂದು ನಿರ್ಧರಿಸಲು ಮಾದರಿ ಅವುಗಳ ಅರ್ಥ ಬಳಸುತ್ತದೆ",
       "ಅವು ಅಧಿಕಾರ ಪರಿಶೀಲನೆ ಬದಲಿಸುತ್ತವೆ",
       "ಅವು timeout ನಿಗದಿಪಡಿಸುತ್ತವೆ"
      ],
      "correct": 1
     },
     {
      "q": "A perfectly formed create_file() call is made, but nothing is created. Under state-based evaluation, did the task succeed?",
      "qKn": "ಪರಿಪೂರ್ಣವಾಗಿ ರೂಪಿಸಿದ create_file() ಕರೆ ಮಾಡಲಾಗಿದೆ, ಆದರೆ ಏನೂ ರಚನೆಯಾಗಿಲ್ಲ. State-based ಮೌಲ್ಯಮಾಪನದಲ್ಲಿ ಕಾರ್ಯ ಯಶಸ್ವಿಯಾಯಿತೇ?",
      "opts": [
       "Yes, the syntax was right",
       "Yes, the tool name was right",
       "No, the required environment state was not achieved",
       "Only if the JSON was valid"
      ],
      "optsKn": [
       "ಹೌದು, ಸಿಂಟ್ಯಾಕ್ಸ್ ಸರಿ",
       "ಹೌದು, tool ಹೆಸರು ಸರಿ",
       "ಇಲ್ಲ, ಅಗತ್ಯ ಪರಿಸರ ಸ್ಥಿತಿ ಸಾಧಿಸಲಿಲ್ಲ",
       "JSON ಮಾನ್ಯವಾಗಿದ್ದರೆ ಮಾತ್ರ"
      ],
      "correct": 2
     },
     {
      "q": "In this lesson's section 4, what happened when search_web was called directly with {\"query\": 12345}?",
      "qKn": "ಈ ಪಾಠದ ವಿಭಾಗ 4 ರಲ್ಲಿ search_web ಅನ್ನು {\"query\": 12345} ಜೊತೆ ನೇರವಾಗಿ ಕರೆದಾಗ ಏನಾಯಿತು?",
      "opts": [
       "It returned found=False",
       "It raised AttributeError because an int has no strip()",
       "It coerced 12345 to a string",
       "It ignored the argument"
      ],
      "optsKn": [
       "found=False ಹಿಂತಿರುಗಿಸಿತು",
       "int ಗೆ strip() ಇಲ್ಲದ ಕಾರಣ AttributeError ಎತ್ತಿತು",
       "12345 ಅನ್ನು ಸ್ಟ್ರಿಂಗ್‌ಗೆ ಪರಿವರ್ತಿಸಿತು",
       "Argument ಕಡೆಗಣಿಸಿತು"
      ],
      "correct": 1
     },
     {
      "q": "Which design is safest?",
      "qKn": "ಯಾವ ವಿನ್ಯಾಸ ಅತ್ಯಂತ ಸುರಕ್ಷಿತ?",
      "opts": [
       "model, arbitrary executor",
       "model, validation, policy, constrained executor",
       "model, shell",
       "model, eval()"
      ],
      "optsKn": [
       "ಮಾದರಿ, ಅನಿಯಂತ್ರಿತ executor",
       "ಮಾದರಿ, ಮಾನ್ಯತೆ, ನೀತಿ, ನಿರ್ಬಂಧಿತ executor",
       "ಮಾದರಿ, shell",
       "ಮಾದರಿ, eval()"
      ],
      "correct": 1
     }
    ]
   }
  }
 ]
};
