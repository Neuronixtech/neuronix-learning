module.exports = {
 "phaseId": "6a369d6466020ed05b3215d1",
 "moduleId": "6a369d6466020ed05b3215d4",
 "order": 0,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Why Multi-Agent (Part 1 of 3) — The Single-Agent Ceiling",
 "titleKn": "Why Multi-Agent (ಭಾಗ 1 / 3) — ಒಂದು-ಏಜೆಂಟ್ ಮಿತಿ",
 "desc": "Measure the three limits of one agent, build specialists and test when splitting actually helps.",
 "descKn": "ಒಂದು ಏಜೆಂಟ್‌ನ ಮೂರು ಮಿತಿಗಳನ್ನು ಅಳೆಯಿರಿ, ವಿಶೇಷಜ್ಞರನ್ನು ನಿರ್ಮಿಸಿ ಮತ್ತು ಹಂಚುವುದು ನಿಜವಾಗಿ ಯಾವಾಗ ಸಹಾಯ ಮಾಡುತ್ತದೆ ಎಂದು ಪರೀಕ್ಷಿಸಿ.",
 "objectives": [
  "Measure context growth.",
  "Compare prompt and code.",
  "Build specialist agents.",
  "Time independent work.",
  "Apply the rule of thumb."
 ],
 "objectivesKn": [
  "context ಬೆಳವಣಿಗೆ ಅಳೆಯಿರಿ.",
  "prompt ಮತ್ತು ಕೋಡ್ ಹೋಲಿಸಿ.",
  "ವಿಶೇಷಜ್ಞ ಏಜೆಂಟ್ ನಿರ್ಮಿಸಿ.",
  "ಸ್ವತಂತ್ರ ಕೆಲಸಕ್ಕೆ ಸಮಯ ಅಳೆಯಿರಿ.",
  "ಅಂದಾಜು ನಿಯಮ ಅನ್ವಯಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Why Multi-Agent (Part 1 of 3)",
    "textKn": "Why Multi-Agent (ಭಾಗ 1 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: TypeScript (Node.js 24, no packages) · Time: ~60 minutes. Part 1 of 3: the single-agent ceiling measured on a stand-in, three specialists with separate prompts, a parallel timing test and the lesson rule of thumb for staying with one agent. Every output below was genuinely produced by the lab file on Node.js v24.19.0. The lesson original single_vs_multi.ts was not supplied and the lesson text uses fakeLLMCall without defining it, so the lab is our own implementation and fakeLLMCall is our own deterministic stand-in that calls no model, estimates tokens as characters divided by four and reports one call per invocation; no real LLM behaviour, cost or speed is measured. The lesson Step 1 and Step 2 code is followed closely, while the added counters and the timing test are ours. This lesson replaces the earlier placeholder at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: TypeScript (Node.js 24, ಯಾವುದೇ package ಇಲ್ಲ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 1ನೆಯದು: ಒಂದು-ಏಜೆಂಟ್ ಮಿತಿಯನ್ನು ಪರ್ಯಾಯದ ಮೇಲೆ ಅಳೆಯುವುದು, ಪ್ರತ್ಯೇಕ prompt ಗಳ ಮೂರು ವಿಶೇಷಜ್ಞರು, ಸಮಾನಾಂತರ ಸಮಯ ಪರೀಕ್ಷೆ ಮತ್ತು ಒಂದೇ ಏಜೆಂಟ್ ಉಳಿಸಿಕೊಳ್ಳುವ lesson ನ ಅಂದಾಜು ನಿಯಮ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Node.js v24.19.0 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. lesson ನ ಮೂಲ single_vs_multi.ts ನೀಡಲಾಗಿಲ್ಲ ಮತ್ತು lesson ಪಠ್ಯವು fakeLLMCall ಅನ್ನು ವ್ಯಾಖ್ಯಾನಿಸದೆ ಬಳಸುತ್ತದೆ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್ ನಮ್ಮದೇ ಅನುಷ್ಠಾನ ಮತ್ತು fakeLLMCall ಯಾವುದೇ ಮಾದರಿಯನ್ನು ಕರೆಯದ, ಅಕ್ಷರಗಳನ್ನು ನಾಲ್ಕರಿಂದ ಭಾಗಿಸಿ tokens ಅಂದಾಜಿಸುವ ಮತ್ತು ಪ್ರತಿ ಕರೆಗೆ ಒಂದು ಕರೆ ವರದಿ ಮಾಡುವ ನಮ್ಮದೇ ನಿರ್ಣಾಯಕ ಪರ್ಯಾಯ; ನಿಜವಾದ LLM ವರ್ತನೆ, ವೆಚ್ಚ ಅಥವಾ ವೇಗ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. lesson ನ Step 1 ಮತ್ತು Step 2 ಕೋಡ್ ಅನ್ನು ಹತ್ತಿರದಿಂದ ಅನುಸರಿಸಲಾಗಿದೆ, ಸೇರಿಸಿದ ಎಣಿಕೆಗಳು ಮತ್ತು ಸಮಯ ಪರೀಕ್ಷೆ ನಮ್ಮದು. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ placeholder ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "One Agent Hits a Wall",
    "textKn": "ಒಂದು ಏಜೆಂಟ್ ಗೋಡೆಗೆ ಬಡಿಯುತ್ತದೆ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Three Limits of a Single Agent",
    "headingKn": "ಒಂದು ಏಜೆಂಟ್‌ನ ಮೂರು ಮಿತಿಗಳು",
    "bodyEn": "A single agent that researches, codes and reviews in one conversation piles every result into one growing context, asks one prompt to serve several jobs, and runs independent work one piece after another. The lesson names these context saturation, mixed expertise and sequential bottlenecks. This part runs the lesson overloaded single agent next to three specialists on our stand-in, measures how the input grows, compares what the prompt asks for with what the code does, and times independent waits one after another against all at once. The lesson also warns that more agents are not always better, so the last experiment applies its rule of thumb of about twenty tool calls and one hundred thousand tokens.",
    "bodyKn": "ಒಂದೇ ಸಂಭಾಷಣೆಯಲ್ಲಿ ಸಂಶೋಧನೆ, ಕೋಡಿಂಗ್ ಮತ್ತು ವಿಮರ್ಶೆ ಮಾಡುವ ಒಂದು ಏಜೆಂಟ್ ಪ್ರತಿ ಫಲಿತಾಂಶವನ್ನು ಬೆಳೆಯುತ್ತಿರುವ ಒಂದು context ನಲ್ಲಿ ರಾಶಿ ಹಾಕುತ್ತದೆ, ಒಂದು prompt ಅನ್ನು ಹಲವು ಕೆಲಸಗಳಿಗೆ ಬಳಸುತ್ತದೆ ಮತ್ತು ಸ್ವತಂತ್ರ ಕೆಲಸವನ್ನು ಒಂದರ ನಂತರ ಒಂದರಂತೆ ಓಡಿಸುತ್ತದೆ. lesson ಇವುಗಳನ್ನು context ಸ್ಯಾಚುರೇಶನ್, ಮಿಶ್ರ ಪರಿಣತಿ ಮತ್ತು ಅನುಕ್ರಮ ಅಡಚಣೆಗಳೆಂದು ಹೆಸರಿಸುತ್ತದೆ. ಈ ಭಾಗವು lesson ನ ಅತಿಭಾರದ ಒಂದು ಏಜೆಂಟ್ ಅನ್ನು ಮೂರು ವಿಶೇಷಜ್ಞರ ಪಕ್ಕದಲ್ಲಿ ನಮ್ಮ ಪರ್ಯಾಯದ ಮೇಲೆ ಓಡಿಸುತ್ತದೆ, input ಹೇಗೆ ಬೆಳೆಯುತ್ತದೆ ಎಂದು ಅಳೆಯುತ್ತದೆ, prompt ಕೇಳುವುದನ್ನು ಕೋಡ್ ಮಾಡುವುದರೊಂದಿಗೆ ಹೋಲಿಸುತ್ತದೆ ಮತ್ತು ಸ್ವತಂತ್ರ ಕಾಯುವಿಕೆಗಳನ್ನು ಒಂದರ ನಂತರ ಒಂದು ಮತ್ತು ಎಲ್ಲವೂ ಒಮ್ಮೆಲೇ ಎಂದು ಸಮಯ ಅಳೆಯುತ್ತದೆ. ಹೆಚ್ಚು ಏಜೆಂಟ್‌ಗಳು ಯಾವಾಗಲೂ ಉತ್ತಮವಲ್ಲ ಎಂದೂ lesson ಎಚ್ಚರಿಸುತ್ತದೆ, ಆದ್ದರಿಂದ ಕೊನೆಯ ಪ್ರಯೋಗವು ಸುಮಾರು ಇಪ್ಪತ್ತು tool ಕರೆಗಳು ಮತ್ತು ಒಂದು ಲಕ್ಷ tokens ಎಂಬ ಅದರ ಅಂದಾಜು ನಿಯಮ ಅನ್ವಯಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "The Single-Agent Ceiling",
    "headingKn": "ಒಂದು-ಏಜೆಂಟ್ ಮಿತಿ",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">splitting helps when the work really splits</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">one agent</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">all roles, one prompt</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">specialists</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">one prompt per role</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">parallel</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">only if independent</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">ceiling</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">context, roles, waiting</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">splitting helps when the work really splits</text></svg>",
    "captionEn": "Context grows, roles blur and independent work waits in line.",
    "captionKn": "context ಬೆಳೆಯುತ್ತದೆ, ಪಾತ್ರಗಳು ಮಸುಕಾಗುತ್ತವೆ ಮತ್ತು ಸ್ವತಂತ್ರ ಕೆಲಸ ಸಾಲಿನಲ್ಲಿ ಕಾಯುತ್ತದೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "The three limits",
    "headingKn": "ಮೂರು ಮಿತಿಗಳು",
    "headers": [
     "Limit",
     "What it looks like in the lab"
    ],
    "rows": [
     [
      "context saturation",
      "input of 63, 222 and 267 characters for three calls that share one prompt"
     ],
     [
      "mixed expertise",
      "one prompt with four numbered duties for a function that makes three calls"
     ],
     [
      "sequential bottleneck",
      "three independent 60 ms waits, one after another against all together"
     ],
     [
      "when to stay single",
      "about 20 tool calls and 100000 tokens as the lesson rule of thumb"
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
    "filename": "wm_1.ts",
    "headingEn": "The stand-in model call",
    "headingKn": "ಪರ್ಯಾಯ ಮಾದರಿ ಕರೆ",
    "descEn": "fakeLLMCall picks a canned reply from the prompt and input, estimates tokens from characters and logs the size of each input, which is how the growth is measured.",
    "descKn": "fakeLLMCall prompt ಮತ್ತು input ನಿಂದ ಸಿದ್ಧ ಉತ್ತರ ಆರಿಸುತ್ತದೆ, ಅಕ್ಷರಗಳಿಂದ tokens ಅಂದಾಜಿಸುತ್ತದೆ ಮತ್ತು ಪ್ರತಿ input ನ ಗಾತ್ರ ದಾಖಲಿಸುತ್ತದೆ; ಇದರಿಂದಲೇ ಬೆಳವಣಿಗೆ ಅಳೆಯಲ್ಪಡುತ್ತದೆ.",
    "code": "async function fakeLLMCall(systemPrompt: string, input: string): Promise<FakeLLMResult> {\n  const p = systemPrompt.toLowerCase();\n  const i = input.toLowerCase();\n  let output: string;\n  if (p.includes(\"technical researcher\") || i.startsWith(\"research:\")) {\n    output = \"Research findings: use a configurable rate limit, return HTTP 429 when exceeded, and consider shared storage across instances.\";\n  } else if (p.includes(\"code reviewer\") || i.includes(\"review the code\")) {\n    output = \"Review findings: check trusted proxy configuration, concurrent requests, counter expiry and tests.\";\n  } else {\n    output = \"Implementation proposal: Express middleware with a configurable request limit and time window.\";\n  }\n  callLog.push({ prompt: systemPrompt.slice(0, 24), inputChars: input.length });\n  return { output, tokens: Math.ceil((systemPrompt.length + input.length + output.length) / 4), calls: 1 };\n}"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "wm_1.ts",
    "headingEn": "The overloaded single agent",
    "headingKn": "ಅತಿಭಾರದ ಒಂದು ಏಜೆಂಟ್",
    "descEn": "singleAgentApproach reuses one prompt for research, code and review and feeds each call everything produced so far, as in lesson Step 1.",
    "descKn": "singleAgentApproach ಸಂಶೋಧನೆ, ಕೋಡ್ ಮತ್ತು ವಿಮರ್ಶೆಗೆ ಒಂದೇ prompt ಮರುಬಳಸುತ್ತದೆ ಮತ್ತು ಇದುವರೆಗೆ ಉತ್ಪಾದಿಸಿದ ಎಲ್ಲವನ್ನೂ ಪ್ರತಿ ಕರೆಗೆ ನೀಡುತ್ತದೆ, lesson Step 1 ರಂತೆ.",
    "code": "async function singleAgentApproach(task: string): Promise<AgentResult> {\n  const contextWindow: string[] = [];\n  let totalTokens = 0;\n  let totalToolCalls = 0;\n  const research = await fakeLLMCall(SINGLE_PROMPT, `Research: ${task}`);\n  contextWindow.push(research.output);\n  totalTokens += research.tokens;\n  totalToolCalls += research.calls;\n  const code = await fakeLLMCall(SINGLE_PROMPT, `Given this research:\\n${contextWindow.join(\"\\n\")}\\n\\nNow write code for: ${task}`);\n  contextWindow.push(code.output);\n  totalTokens += code.tokens;\n  totalToolCalls += code.calls;\n  const review = await fakeLLMCall(SINGLE_PROMPT, `Given all previous context:\\n${contextWindow.join(\"\\n\")}\\n\\nReview the code.`);\n  contextWindow.push(review.output);\n  totalTokens += review.tokens;\n  totalToolCalls += review.calls;\n  return { content: contextWindow.join(\"\\n---\\n\"), tokensUsed: totalTokens, toolCalls: totalToolCalls };\n}"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "wm_1.ts",
    "headingEn": "Specialists and the rule of thumb",
    "headingKn": "ವಿಶೇಷಜ್ಞರು ಮತ್ತು ಅಂದಾಜು ನಿಯಮ",
    "descEn": "createSpecialist builds an agent with its own prompt and a common run() method, and useMultiAgent applies the lesson thresholds of 20 calls or 100000 tokens.",
    "descKn": "createSpecialist ತನ್ನದೇ prompt ಮತ್ತು ಸಾಮಾನ್ಯ run() ವಿಧಾನದ ಏಜೆಂಟ್ ನಿರ್ಮಿಸುತ್ತದೆ, ಮತ್ತು useMultiAgent lesson ನ 20 ಕರೆ ಅಥವಾ 100000 tokens ಮಿತಿ ಅನ್ವಯಿಸುತ್ತದೆ.",
    "code": "function createSpecialist(name: string, systemPrompt: string): SpecialistAgent {\n  return {\n    name,\n    systemPrompt,\n    run: async (input: string) => {\n      const result = await fakeLLMCall(systemPrompt, input);\n      return { content: result.output, tokensUsed: result.tokens, toolCalls: result.calls };\n    },\n  };\n}\n\nconst researcher = createSpecialist(\"researcher\", \"You are a technical researcher. Read documentation, find patterns, and summarize findings. Output only the facts needed for implementation.\");\nconst coder = createSpecialist(\"coder\", \"You are a senior TypeScript developer. Given requirements and research notes, write clean, tested code. Nothing else.\");\nconst reviewer = createSpecialist(\"reviewer\", \"You are a code reviewer. Find bugs, security issues, and logic errors. Be specific. Cite line numbers.\");\n\nfunction useMultiAgent(toolCalls: number, tokens: number): boolean {\n  return toolCalls >= 20 || tokens >= 100000;\n}"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: the overloaded single agent ---\ntokens: 349 | tool calls: 3\ninput characters per call: 63, 222, 267\nevery call used the same system prompt: true\neach call receives all earlier output, so the input grows from the first call to the third while the system prompt never changes; the numbers come from our stand-in, so they show the shape of the growth and not real model usage.\n\n--- 2. Genuinely running: three specialists with separate prompts ---\nresearcher: prompt 139 characters, tokens 80, calls 1\ncoder: prompt 117 characters, tokens 66, calls 1\nreviewer: prompt 102 characters, tokens 64, calls 1\ndistinct system prompts: 3\ncreateSpecialist gives each role its own prompt and a common run() interface, and all three run through the same stand-in call, so the only difference between the roles is the prompt text they carry.\n\n--- 3. Genuinely running: duties in the prompt against calls in the code ---\nnumbered duties in the single-agent prompt: 4\ncalls the single-agent function actually makes: 3\nthe prompt asks for four duties but the code path makes three calls and has no test stage, so the stated responsibilities and the executed ones differ; reading the prompt alone would overstate what the function does.\n\n--- 4. Genuinely running: sequential against parallel when work is independent ---\nthree independent 60 ms waits, sequential about 210 ms, parallel about 70 ms\nsequential at least 170 ms: true | parallel under 100 ms: true\ntimers are measured with performance.now() and rounded to ten milliseconds, so exact values change between runs; the finding is the shape, a sum for sequential waits against roughly the longest wait for independent ones, and it holds only because these three waits do not depend on each other.\n\n--- 5. Genuinely running: the lesson heuristic for when one agent is enough ---\nrename one function: 6 calls, 12000 tokens -> multi-agent worth considering: false\nresearch, code, review: 18 calls, 60000 tokens -> multi-agent worth considering: false\nmulti-service migration: 40 calls, 90000 tokens -> multi-agent worth considering: true\nhuge context: 12 calls, 150000 tokens -> multi-agent worth considering: true\nthe rule of thumb of about twenty tool calls and one hundred thousand tokens flags the last two cases, and it is a heuristic taken from the lesson and not a technical limit, so a small task with a real need for independent review can still justify specialists."
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
    "headingEn": "Experiment 1: The overloaded single agent",
    "headingKn": "ಪ್ರಯೋಗ 1: The overloaded single agent",
    "bodyEn": "What it ran: The overloaded single agent. What the lab concluded: each call receives all earlier output, so the input grows from the first call to the third while the system prompt never changes; the numbers come from our stand-in, so they show the shape of the growth and not real model usage.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: The overloaded single agent. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): each call receives all earlier output, so the input grows from the first call to the third while the system prompt never changes; the numbers come from our stand-in, so they show the shape of the growth and not real model usage."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. Genuinely running: the overloaded single agent ---\ntokens: 349 | tool calls: 3\ninput characters per call: 63, 222, 267\nevery call used the same system prompt: true"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: Three specialists with separate prompts",
    "headingKn": "ಪ್ರಯೋಗ 2: Three specialists with separate prompts",
    "bodyEn": "What it ran: Three specialists with separate prompts. What the lab concluded: createSpecialist gives each role its own prompt and a common run() interface, and all three run through the same stand-in call, so the only difference between the roles is the prompt text they carry.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Three specialists with separate prompts. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): createSpecialist gives each role its own prompt and a common run() interface, and all three run through the same stand-in call, so the only difference between the roles is the prompt text they carry."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely running: three specialists with separate prompts ---\nresearcher: prompt 139 characters, tokens 80, calls 1\ncoder: prompt 117 characters, tokens 66, calls 1\nreviewer: prompt 102 characters, tokens 64, calls 1\ndistinct system prompts: 3"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: Duties in the prompt against calls in the code",
    "headingKn": "ಪ್ರಯೋಗ 3: Duties in the prompt against calls in the code",
    "bodyEn": "What it ran: Duties in the prompt against calls in the code. What the lab concluded: the prompt asks for four duties but the code path makes three calls and has no test stage, so the stated responsibilities and the executed ones differ; reading the prompt alone would overstate what the function does.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Duties in the prompt against calls in the code. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the prompt asks for four duties but the code path makes three calls and has no test stage, so the stated responsibilities and the executed ones differ; reading the prompt alone would overstate what the function does."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely running: duties in the prompt against calls in the code ---\nnumbered duties in the single-agent prompt: 4\ncalls the single-agent function actually makes: 3"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 4: Sequential against parallel when work is independent",
    "headingKn": "ಪ್ರಯೋಗ 4: Sequential against parallel when work is independent",
    "bodyEn": "What it ran: Sequential against parallel when work is independent. What the lab concluded: timers are measured with performance.now() and rounded to ten milliseconds, so exact values change between runs; the finding is the shape, a sum for sequential waits against roughly the longest wait for independent ones, and it holds only because these three waits do not depend on each other.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Sequential against parallel when work is independent. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): timers are measured with performance.now() and rounded to ten milliseconds, so exact values change between runs; the finding is the shape, a sum for sequential waits against roughly the longest wait for independent ones, and it holds only because these three waits do not depend on each other."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 4. Genuinely running: sequential against parallel when work is independent ---\nthree independent 60 ms waits, sequential about 210 ms, parallel about 70 ms\nsequential at least 170 ms: true | parallel under 100 ms: true"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 5: The lesson heuristic for when one agent is enough",
    "headingKn": "ಪ್ರಯೋಗ 5: The lesson heuristic for when one agent is enough",
    "bodyEn": "What it ran: The lesson heuristic for when one agent is enough. What the lab concluded: the rule of thumb of about twenty tool calls and one hundred thousand tokens flags the last two cases, and it is a heuristic taken from the lesson and not a technical limit, so a small task with a real need for independent review can still justify specialists.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: The lesson heuristic for when one agent is enough. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the rule of thumb of about twenty tool calls and one hundred thousand tokens flags the last two cases, and it is a heuristic taken from the lesson and not a technical limit, so a small task with a real need for independent review can still justify specialists."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 5. Genuinely running: the lesson heuristic for when one agent is enough ---\nrename one function: 6 calls, 12000 tokens -> multi-agent worth considering: false\nresearch, code, review: 18 calls, 60000 tokens -> multi-agent worth considering: false\nmulti-service migration: 40 calls, 90000 tokens -> multi-agent worth considering: true\nhuge context: 12 calls, 150000 tokens -> multi-agent worth considering: true"
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
    "headingEn": "Genuinely Found: Growth and Mismatch",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಬೆಳವಣಿಗೆ ಮತ್ತು ಹೊಂದಾಣಿಕೆಯಿಲ್ಲದಿರುವಿಕೆ",
    "bodyEn": "Section 1: the single agent made 3 calls and reported 349 tokens, and the input sizes were 63, 222 and 267 characters, all under one shared system prompt. Section 2: three specialists used 3 distinct prompts of 139, 117 and 102 characters. Section 3: the prompt lists 4 numbered duties but the function makes 3 calls and has no test stage.",
    "bodyKn": "ವಿಭಾಗ 1: ಒಂದು ಏಜೆಂಟ್ 3 ಕರೆ ಮಾಡಿ 349 tokens ವರದಿ ಮಾಡಿತು, ಮತ್ತು input ಗಾತ್ರಗಳು 63, 222 ಮತ್ತು 267 ಅಕ್ಷರಗಳು, ಎಲ್ಲವೂ ಒಂದೇ ಹಂಚಿಕೆಯ system prompt ಅಡಿಯಲ್ಲಿ. ವಿಭಾಗ 2: ಮೂರು ವಿಶೇಷಜ್ಞರು 139, 117 ಮತ್ತು 102 ಅಕ್ಷರಗಳ 3 ಬೇರೆ prompt ಬಳಸಿದರು. ವಿಭಾಗ 3: prompt 4 ಸಂಖ್ಯೆಯ ಕೆಲಸಗಳನ್ನು ಪಟ್ಟಿ ಮಾಡುತ್ತದೆ ಆದರೆ ಕಾರ್ಯ 3 ಕರೆ ಮಾಡುತ್ತದೆ ಮತ್ತು ಪರೀಕ್ಷಾ ಹಂತ ಇಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Waiting and the Rule of Thumb",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಕಾಯುವಿಕೆ ಮತ್ತು ಅಂದಾಜು ನಿಯಮ",
    "bodyEn": "Section 4: three independent 60 ms waits took about 210 ms one after another and about 70 ms together in the cached run, and both checks were true; the figures are rounded and change between runs. Section 5: the rule flagged the 40-call and the 150000-token cases and did not flag the 6-call and 18-call cases.",
    "bodyKn": "ವಿಭಾಗ 4: ಮೂರು ಸ್ವತಂತ್ರ 60 ms ಕಾಯುವಿಕೆಗಳು ಸಂಗ್ರಹಿತ ಓಟದಲ್ಲಿ ಒಂದರ ನಂತರ ಒಂದು ಸುಮಾರು 210 ms ಮತ್ತು ಒಟ್ಟಿಗೆ ಸುಮಾರು 70 ms ತೆಗೆದುಕೊಂಡವು, ಮತ್ತು ಎರಡೂ ಪರಿಶೀಲನೆಗಳು true; ಅಂಕಿಗಳು ದುಂಡಾಗಿದ್ದು ಓಟಗಳ ನಡುವೆ ಬದಲಾಗುತ್ತವೆ. ವಿಭಾಗ 5: ನಿಯಮವು 40-ಕರೆ ಮತ್ತು 150000-token ಪ್ರಕರಣಗಳನ್ನು ಗುರುತಿಸಿತು ಮತ್ತು 6-ಕರೆ ಹಾಗೂ 18-ಕರೆ ಪ್ರಕರಣಗಳನ್ನು ಗುರುತಿಸಲಿಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "Whether to split a task is a design choice with a cost, and the three limits give concrete things to check: how much context a step really needs, whether a role needs its own instructions and whether pieces of work depend on each other.",
    "bodyKn": "ಕೆಲಸ ಹಂಚಬೇಕೇ ಎಂಬುದು ವೆಚ್ಚವಿರುವ ವಿನ್ಯಾಸ ಆಯ್ಕೆ, ಮತ್ತು ಮೂರು ಮಿತಿಗಳು ಪರಿಶೀಲಿಸಲು ಸ್ಪಷ್ಟ ಅಂಶಗಳನ್ನು ನೀಡುತ್ತವೆ: ಒಂದು ಹಂತಕ್ಕೆ ನಿಜವಾಗಿ ಎಷ್ಟು context ಬೇಕು, ಪಾತ್ರಕ್ಕೆ ತನ್ನದೇ ಸೂಚನೆ ಬೇಕೇ ಮತ್ತು ಕೆಲಸದ ಭಾಗಗಳು ಪರಸ್ಪರ ಅವಲಂಬಿತವೇ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"more agents always means a better result.\" The timing gain appeared only because the three waits did not depend on each other, and the rule of thumb flagged only the large cases.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಹೆಚ್ಚು ಏಜೆಂಟ್‌ಗಳೆಂದರೆ ಯಾವಾಗಲೂ ಉತ್ತಮ ಫಲಿತಾಂಶ.\" ಮೂರು ಕಾಯುವಿಕೆಗಳು ಪರಸ್ಪರ ಅವಲಂಬಿತವಲ್ಲದ ಕಾರಣ ಮಾತ್ರ ಸಮಯದ ಲಾಭ ಕಾಣಿಸಿತು, ಮತ್ತು ಅಂದಾಜು ನಿಯಮ ದೊಡ್ಡ ಪ್ರಕರಣಗಳನ್ನು ಮಾತ್ರ ಗುರುತಿಸಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Single-agent ceiling: the point where one agent struggles with context, roles or waiting. Context saturation: a context that has filled with mixed material. Specialist: an agent with a focused prompt. Critical path: the chain of dependent steps that sets the finishing time.",
    "bodyKn": "ಒಂದು-ಏಜೆಂಟ್ ಮಿತಿ: ಒಂದು ಏಜೆಂಟ್ context, ಪಾತ್ರ ಅಥವಾ ಕಾಯುವಿಕೆಯಲ್ಲಿ ಕಷ್ಟಪಡುವ ಬಿಂದು. Context ಸ್ಯಾಚುರೇಶನ್: ಮಿಶ್ರ ವಸ್ತುವಿನಿಂದ ತುಂಬಿದ context. ವಿಶೇಷಜ್ಞ: ಕೇಂದ್ರೀಕೃತ prompt ಇರುವ ಏಜೆಂಟ್. Critical path: ಮುಕ್ತಾಯದ ಸಮಯ ನಿರ್ಧರಿಸುವ ಅವಲಂಬಿತ ಹಂತಗಳ ಸರಪಳಿ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) The single agent input grew from 63 to 222 to 267 characters. 2) The prompt asked for four duties and the code made three calls. 3) Three specialists used three different prompts. 4) Independent waits took about 70 ms together against about 210 ms in sequence. 5) The rule flagged only the large cases.",
    "bodyKn": "1) ಒಂದು ಏಜೆಂಟ್‌ನ input 63 ರಿಂದ 222 ರಿಂದ 267 ಅಕ್ಷರಗಳಿಗೆ ಬೆಳೆಯಿತು. 2) prompt ನಾಲ್ಕು ಕೆಲಸ ಕೇಳಿತು ಮತ್ತು ಕೋಡ್ ಮೂರು ಕರೆ ಮಾಡಿತು. 3) ಮೂರು ವಿಶೇಷಜ್ಞರು ಮೂರು ಬೇರೆ prompt ಬಳಸಿದರು. 4) ಸ್ವತಂತ್ರ ಕಾಯುವಿಕೆಗಳು ಒಟ್ಟಿಗೆ ಸುಮಾರು 70 ms ತೆಗೆದುಕೊಂಡವು, ಅನುಕ್ರಮದಲ್ಲಿ ಸುಮಾರು 210 ms. 5) ನಿಯಮವು ದೊಡ್ಡ ಪ್ರಕರಣಗಳನ್ನು ಮಾತ್ರ ಗುರುತಿಸಿತು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "How many numbered duties did the single-agent prompt list?",
      "qKn": "ಒಂದು-ಏಜೆಂಟ್ prompt ಎಷ್ಟು ಸಂಖ್ಯೆಯ ಕೆಲಸಗಳನ್ನು ಪಟ್ಟಿ ಮಾಡಿತು?",
      "opts": [
       "4",
       "3",
       "6",
       "1"
      ],
      "optsKn": [
       "4",
       "3",
       "6",
       "1"
      ],
      "correct": 0
     },
     {
      "q": "How many calls did the single-agent function make?",
      "qKn": "ಒಂದು-ಏಜೆಂಟ್ ಕಾರ್ಯ ಎಷ್ಟು ಕರೆ ಮಾಡಿತು?",
      "opts": [
       "3",
       "4",
       "1",
       "6"
      ],
      "optsKn": [
       "3",
       "4",
       "1",
       "6"
      ],
      "correct": 0
     },
     {
      "q": "Why were the three waits faster together?",
      "qKn": "ಮೂರು ಕಾಯುವಿಕೆಗಳು ಒಟ್ಟಿಗೆ ಏಕೆ ವೇಗವಾದವು?",
      "opts": [
       "They did not depend on each other",
       "Promise.all makes any work faster",
       "The timer was disabled",
       "They were cached"
      ],
      "optsKn": [
       "ಅವು ಪರಸ್ಪರ ಅವಲಂಬಿತವಾಗಿರಲಿಲ್ಲ",
       "Promise.all ಯಾವುದೇ ಕೆಲಸವನ್ನು ವೇಗಗೊಳಿಸುತ್ತದೆ",
       "ಟೈಮರ್ ನಿಷ್ಕ್ರಿಯವಾಗಿತ್ತು",
       "ಅವು cache ಆಗಿದ್ದವು"
      ],
      "correct": 0
     },
     {
      "q": "Does the lesson rule of thumb of 20 calls and 100000 tokens act as a technical limit?",
      "qKn": "lesson ನ 20 ಕರೆ ಮತ್ತು 100000 tokens ಅಂದಾಜು ನಿಯಮ ತಾಂತ್ರಿಕ ಮಿತಿಯೇ?",
      "opts": [
       "No, it is a heuristic",
       "Yes, it is enforced",
       "Yes, by the runtime",
       "It was not used"
      ],
      "optsKn": [
       "ಇಲ್ಲ, ಅದು ಅಂದಾಜು ನಿಯಮ",
       "ಹೌದು, ಅದನ್ನು ಜಾರಿಗೊಳಿಸಲಾಗಿದೆ",
       "ಹೌದು, ರನ್‌ಟೈಮ್ ಮೂಲಕ",
       "ಅದನ್ನು ಬಳಸಿಲ್ಲ"
      ],
      "correct": 0
     },
     {
      "q": "What does the stand-in token count measure?",
      "qKn": "ಪರ್ಯಾಯದ token ಎಣಿಕೆ ಏನನ್ನು ಅಳೆಯುತ್ತದೆ?",
      "opts": [
       "Characters divided by four",
       "Real model usage",
       "Billing",
       "Latency"
      ],
      "optsKn": [
       "ಅಕ್ಷರಗಳನ್ನು ನಾಲ್ಕರಿಂದ ಭಾಗಿಸಿದ್ದು",
       "ನಿಜವಾದ ಮಾದರಿ ಬಳಕೆ",
       "ಬಿಲ್ಲಿಂಗ್",
       "ವಿಳಂಬ"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
