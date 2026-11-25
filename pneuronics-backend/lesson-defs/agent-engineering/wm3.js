module.exports = {
 "phaseId": "6a369d6466020ed05b3215d1",
 "moduleId": "6a369d6466020ed05b3215d4",
 "order": 2,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Why Multi-Agent (Part 3 of 3) — Comparing and Hardening",
 "titleKn": "Why Multi-Agent (ಭಾಗ 3 / 3) — ಹೋಲಿಕೆ ಮತ್ತು ಬಲಪಡಿಸುವಿಕೆ",
 "desc": "Run the single against multi comparison, then test handoffs, retries, timeouts, a gate and cost.",
 "descKn": "ಏಕ ಮತ್ತು ಬಹು ಹೋಲಿಕೆ ಓಡಿಸಿ, ನಂತರ ಹಸ್ತಾಂತರ, ಮರುಪ್ರಯತ್ನ, timeout, ದ್ವಾರ ಮತ್ತು ವೆಚ್ಚ ಪರೀಕ್ಷಿಸಿ.",
 "objectives": [
  "Run the comparison.",
  "Keep constraints in a handoff.",
  "Bound retries.",
  "Understand a timeout.",
  "Build a verification gate."
 ],
 "objectivesKn": [
  "ಹೋಲಿಕೆ ಓಡಿಸಿ.",
  "ಹಸ್ತಾಂತರದಲ್ಲಿ ನಿರ್ಬಂಧ ಉಳಿಸಿ.",
  "ಮರುಪ್ರಯತ್ನಕ್ಕೆ ಮಿತಿ ಇಡಿ.",
  "timeout ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.",
  "ಪರಿಶೀಲನಾ ದ್ವಾರ ನಿರ್ಮಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Why Multi-Agent (Part 3 of 3)",
    "textKn": "Why Multi-Agent (ಭಾಗ 3 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: TypeScript (Node.js 24, no packages) · Time: ~60 minutes. Part 3 of 3: the lesson compare() on the stand-in, the information a lossy handoff drops, bounded retries, a timeout that does not cancel, a verification gate and the cost model. Every output below was genuinely produced by the lab file on Node.js v24.19.0. The lesson original single_vs_multi.ts was not supplied and the lesson text uses fakeLLMCall without defining it, so the lab is our own implementation and fakeLLMCall is our own deterministic stand-in that calls no model, estimates tokens as characters divided by four and reports one call per invocation; no real LLM behaviour, cost or speed is measured. The lesson Step 4 compare() is run on the stand-in, and the later sections are the production extensions the lesson describes. This lesson replaces the earlier placeholder at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: TypeScript (Node.js 24, ಯಾವುದೇ package ಇಲ್ಲ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 3ನೆಯದು: stand-in ಮೇಲೆ lesson ನ compare(), ನಷ್ಟವುಳ್ಳ ಹಸ್ತಾಂತರ ಬಿಡುವ ಮಾಹಿತಿ, ಮಿತಿಯುಳ್ಳ ಮರುಪ್ರಯತ್ನಗಳು, ರದ್ದುಗೊಳಿಸದ timeout, ಪರಿಶೀಲನಾ ದ್ವಾರ ಮತ್ತು ವೆಚ್ಚ ಮಾದರಿ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Node.js v24.19.0 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. lesson ನ ಮೂಲ single_vs_multi.ts ನೀಡಲಾಗಿಲ್ಲ ಮತ್ತು lesson ಪಠ್ಯವು fakeLLMCall ಅನ್ನು ವ್ಯಾಖ್ಯಾನಿಸದೆ ಬಳಸುತ್ತದೆ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್ ನಮ್ಮದೇ ಅನುಷ್ಠಾನ ಮತ್ತು fakeLLMCall ಯಾವುದೇ ಮಾದರಿಯನ್ನು ಕರೆಯದ, ಅಕ್ಷರಗಳನ್ನು ನಾಲ್ಕರಿಂದ ಭಾಗಿಸಿ tokens ಅಂದಾಜಿಸುವ ಮತ್ತು ಪ್ರತಿ ಕರೆಗೆ ಒಂದು ಕರೆ ವರದಿ ಮಾಡುವ ನಮ್ಮದೇ ನಿರ್ಣಾಯಕ ಪರ್ಯಾಯ; ನಿಜವಾದ LLM ವರ್ತನೆ, ವೆಚ್ಚ ಅಥವಾ ವೇಗ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. lesson Step 4 compare() ಅನ್ನು stand-in ಮೇಲೆ ಓಡಿಸಲಾಗಿದೆ, ಮತ್ತು ನಂತರದ ವಿಭಾಗಗಳು lesson ವಿವರಿಸುವ ಉತ್ಪಾದನಾ ವಿಸ್ತರಣೆಗಳು. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ placeholder ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Counting Is Not Judging",
    "textKn": "ಎಣಿಕೆ ಎಂದರೆ ತೀರ್ಪಲ್ಲ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Comparison, Handoffs and the Controls Around Them",
    "headingKn": "ಹೋಲಿಕೆ, ಹಸ್ತಾಂತರಗಳು ಮತ್ತು ಅವುಗಳ ಸುತ್ತಲಿನ ನಿಯಂತ್ರಣಗಳು",
    "bodyEn": "The lesson ends with a compare() function that prints tokens and tool calls for the single agent and the multi-agent versions. This part runs it on our stand-in and shows what the numbers do and do not tell you. It then tests the production concerns the lesson lists: a one-line handoff against a structured one, a retry helper with a fixed limit, a timeout wrapper that only raises an abort signal, a verification gate that decides when work is complete, and the arithmetic of the lesson cost example. The lesson is clear that multi-agent design is justified by measured benefit, so each experiment is also a reminder of what still has to be measured.",
    "bodyKn": "lesson ಏಕ ಏಜೆಂಟ್ ಮತ್ತು ಬಹು-ಏಜೆಂಟ್ ಆವೃತ್ತಿಗಳಿಗೆ tokens ಮತ್ತು tool ಕರೆಗಳನ್ನು ಮುದ್ರಿಸುವ compare() ಕಾರ್ಯದೊಂದಿಗೆ ಮುಗಿಯುತ್ತದೆ. ಈ ಭಾಗ ಅದನ್ನು ನಮ್ಮ stand-in ಮೇಲೆ ಓಡಿಸಿ ಸಂಖ್ಯೆಗಳು ಏನು ಹೇಳುತ್ತವೆ ಮತ್ತು ಏನು ಹೇಳುವುದಿಲ್ಲ ಎಂದು ತೋರಿಸುತ್ತದೆ. ನಂತರ lesson ಪಟ್ಟಿ ಮಾಡುವ ಉತ್ಪಾದನಾ ಕಾಳಜಿಗಳನ್ನು ಪರೀಕ್ಷಿಸುತ್ತದೆ: ಒಂದು-ಸಾಲಿನ ಹಸ್ತಾಂತರ ಮತ್ತು ರಚನಾತ್ಮಕ ಹಸ್ತಾಂತರ, ನಿಗದಿತ ಮಿತಿಯ ಮರುಪ್ರಯತ್ನ ಸಹಾಯಕ, ಕೇವಲ abort ಸಂಕೇತ ಎತ್ತುವ timeout ಹೊದಿಕೆ, ಕೆಲಸ ಯಾವಾಗ ಪೂರ್ಣ ಎಂದು ನಿರ್ಧರಿಸುವ ಪರಿಶೀಲನಾ ದ್ವಾರ, ಮತ್ತು lesson ನ ವೆಚ್ಚ ಉದಾಹರಣೆಯ ಲೆಕ್ಕ. ಬಹು-ಏಜೆಂಟ್ ವಿನ್ಯಾಸ ಅಳೆದ ಲಾಭದಿಂದ ಸಮರ್ಥನೀಯ ಎಂದು lesson ಸ್ಪಷ್ಟಪಡಿಸುತ್ತದೆ, ಆದ್ದರಿಂದ ಪ್ರತಿ ಪ್ರಯೋಗವು ಇನ್ನೂ ಏನು ಅಳೆಯಬೇಕು ಎಂಬ ನೆನಪೂ ಹೌದು."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "From Demo to System",
    "headingKn": "ಡೆಮೊದಿಂದ ವ್ಯವಸ್ಥೆಗೆ",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">counts are not quality, and replies are not completion</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">compare</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">tokens and calls</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">handoff</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">keep the constraints</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">timeout</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">needs cooperation</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">gate</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">evidence before done</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">counts are not quality, and replies are not completion</text></svg>",
    "captionEn": "A comparison needs quality evidence, and a real system adds retries, deadlines and a gate.",
    "captionKn": "ಹೋಲಿಕೆಗೆ ಗುಣಮಟ್ಟದ ಸಾಕ್ಷಿ ಬೇಕು, ಮತ್ತು ನಿಜವಾದ ವ್ಯವಸ್ಥೆ ಮರುಪ್ರಯತ್ನ, ಗಡುವು ಮತ್ತು ದ್ವಾರ ಸೇರಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "The six experiments",
    "headingKn": "ಆರು ಪ್ರಯೋಗಗಳು",
    "headers": [
     "Experiment",
     "What it checks"
    ],
    "rows": [
     [
      "compare",
      "tokens, calls and duration of single against multi on the stand-in"
     ],
     [
      "handoff",
      "whether a forwarded-header constraint survives a one-line summary"
     ],
     [
      "retry",
      "success on the third attempt, failure at two, and a zero-attempt guard"
     ],
     [
      "timeout",
      "an operation that watches the abort signal against one that ignores it"
     ],
     [
      "gate",
      "five combinations of build, tests, scope, findings and approval"
     ],
     [
      "cost",
      "10000 tasks at 0.08 and 0.13 dollars per task"
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
    "filename": "wm_3.ts",
    "headingEn": "Timing and the structured handoff",
    "headingKn": "ಸಮಯ ಮತ್ತು ರಚನಾತ್ಮಕ ಹಸ್ತಾಂತರ",
    "descEn": "measureDuration wraps any async operation with performance.now(), and ResearchHandoff keeps requirements, constraints, evidence and open questions as separate fields.",
    "descKn": "measureDuration ಯಾವುದೇ async ಕಾರ್ಯವನ್ನು performance.now() ನಿಂದ ಸುತ್ತುತ್ತದೆ, ಮತ್ತು ResearchHandoff ಅವಶ್ಯಕತೆಗಳು, ನಿರ್ಬಂಧಗಳು, ಸಾಕ್ಷಿ ಮತ್ತು ತೆರೆದ ಪ್ರಶ್ನೆಗಳನ್ನು ಬೇರೆ ಕ್ಷೇತ್ರಗಳಾಗಿ ಇಡುತ್ತದೆ.",
    "code": "async function measureDuration<T>(operation: () => Promise<T>): Promise<{ result: T; durationMs: number }> {\n  const start = performance.now();\n  const result = await operation();\n  return { result, durationMs: performance.now() - start };\n}\n\ntype ResearchHandoff = { taskId: string; requirements: string[]; constraints: string[]; evidence: string[]; openQuestions: string[] };"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "wm_3.ts",
    "headingEn": "Retry and timeout",
    "headingKn": "ಮರುಪ್ರಯತ್ನ ಮತ್ತು timeout",
    "descEn": "retryOperation stops at its attempt limit and rethrows the last error, and runWithTimeout raises an abort signal after the deadline but cannot stop work that ignores it.",
    "descKn": "retryOperation ತನ್ನ ಪ್ರಯತ್ನ ಮಿತಿಯಲ್ಲಿ ನಿಲ್ಲುತ್ತದೆ ಮತ್ತು ಕೊನೆಯ ದೋಷ ಮರುಎಸೆಯುತ್ತದೆ, ಮತ್ತು runWithTimeout ಗಡುವಿನ ನಂತರ abort ಸಂಕೇತ ಎತ್ತುತ್ತದೆ ಆದರೆ ಅದನ್ನು ನಿರ್ಲಕ್ಷಿಸುವ ಕೆಲಸ ನಿಲ್ಲಿಸಲಾಗದು.",
    "code": "async function retryOperation<T>(operation: () => Promise<T>, maxAttempts: number): Promise<T> {\n  if (!Number.isInteger(maxAttempts) || maxAttempts < 1) throw new Error(\"maxAttempts must be positive\");\n  let lastError: unknown;\n  for (let attempt = 1; attempt <= maxAttempts; attempt++) {\n    try { return await operation(); } catch (error) { lastError = error; }\n  }\n  throw lastError;\n}\n\nasync function runWithTimeout<T>(operation: (signal: AbortSignal) => Promise<T>, timeoutMs: number): Promise<T> {\n  const controller = new AbortController();\n  const timer = setTimeout(() => controller.abort(), timeoutMs);\n  try { return await operation(controller.signal); } finally { clearTimeout(timer); }\n}"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "wm_3.ts",
    "headingEn": "The verification gate",
    "headingKn": "ಪರಿಶೀಲನಾ ದ್ವಾರ",
    "descEn": "isComplete returns true only when build, tests and scope pass, no critical finding is open and any required human approval is given.",
    "descKn": "isComplete build, tests ಮತ್ತು scope ಪಾಸಾದಾಗ, ಯಾವುದೇ ಗಂಭೀರ ಕಂಡುಹಿಡಿಕೆ ತೆರೆದಿಲ್ಲದಾಗ ಮತ್ತು ಅಗತ್ಯ ಮಾನವ ಅನುಮೋದನೆ ನೀಡಿದಾಗ ಮಾತ್ರ true ನೀಡುತ್ತದೆ.",
    "code": "type VerificationResult = { buildPassed: boolean; testsPassed: boolean; scopePassed: boolean; criticalFindings: number; humanApprovalRequired: boolean; humanApproved: boolean };\nfunction isComplete(r: VerificationResult): boolean {\n  if (!r.buildPassed) return false;\n  if (!r.testsPassed) return false;\n  if (!r.scopePassed) return false;\n  if (r.criticalFindings > 0) return false;\n  if (r.humanApprovalRequired && !r.humanApproved) return false;\n  return true;\n}"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: the lesson compare() on the stand-in ---\nsingle agent: tokens 286, tool calls 3\nmulti-agent: tokens 163, tool calls 3\nmulti-agent reports fewer tokens than single: true | equal calls: true\nboth durations are under 50 ms: true\nthe stand-in gives each specialist a short prompt and a short input, so the multi-agent total comes out lower here and both report three calls; this reflects how the stand-in counts characters, and a real comparison would need real model usage, repeated trials and a quality check, because tokens and calls say nothing about correctness.\n\n--- 2. Genuinely running: what a lossy handoff drops ---\nlossy summary mentions the forwarded-header constraint: false\nstructured handoff mentions it: true | open questions kept: 1\na one-line summary silently drops the security constraint and the open question while the structured handoff keeps both, so specialists keep clean contexts only when the handoff carries constraints, evidence and unresolved questions, and even a structured handoff still needs checking against its sources.\n\n--- 3. Genuinely running: bounded retries ---\nretry with 3 attempts: completed after 3 attempts\nretry with 2 attempts ends with: temporary timeout after 2 attempts\nzero attempts is rejected with: maxAttempts must be positive\nthe helper stops at the stated limit and rethrows the last error, so a flaky call can succeed on the third attempt but not on the second; it retries every error alike, with no backoff and no idempotency, which would be unsafe for a payment or a deployment.\n\n--- 4. Genuinely running: a timeout that does not cancel ---\noperation that watches the signal was stopped: yes\noperation that ignores the signal: still pending at 10 ms and then finished anyway: true\nthe wrapper only raises the abort signal after the deadline, so an operation that listens to it can stop, while one that ignores it keeps running to the end and the caller still waits; a timeout needs cooperation from the work it guards, which is why cancellation has to be designed in.\n\n--- 5. Genuinely running: a verification gate ---\nall checks pass: complete = true\ntests fail: complete = false\none critical finding: complete = false\napproval required, not given: complete = false\napproval required and given: complete = true\nthe gate says complete only for the first and last case, so all specialists having replied is not enough; it trusts the facts it is given, and nothing here proves that the tests really ran or that a person really approved, which the surrounding system must establish.\n\n--- 6. Genuinely computing: the cost model ---\nsingle 800 dollars, multi 1300 dollars, difference 500 dollars for 10000 tasks\nthe per-task prices of 0.08 and 0.13 dollars are illustrative inputs from the lesson, so the 500 dollar gap is arithmetic on assumptions and not a measurement; whether it is worth paying depends on whether independent review prevents defects that cost more than that."
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
    "headingEn": "Experiment 1: The lesson compare() on the stand-in",
    "headingKn": "ಪ್ರಯೋಗ 1: The lesson compare() on the stand-in",
    "bodyEn": "What it ran: The lesson compare() on the stand-in. What the lab concluded: the stand-in gives each specialist a short prompt and a short input, so the multi-agent total comes out lower here and both report three calls; this reflects how the stand-in counts characters, and a real comparison would need real model usage, repeated trials and a quality check, because tokens and calls say nothing about correctness.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: The lesson compare() on the stand-in. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the stand-in gives each specialist a short prompt and a short input, so the multi-agent total comes out lower here and both report three calls; this reflects how the stand-in counts characters, and a real comparison would need real model usage, repeated trials and a quality check, because tokens and calls say nothing about correctness."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. Genuinely running: the lesson compare() on the stand-in ---\nsingle agent: tokens 286, tool calls 3\nmulti-agent: tokens 163, tool calls 3\nmulti-agent reports fewer tokens than single: true | equal calls: true\nboth durations are under 50 ms: true"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: What a lossy handoff drops",
    "headingKn": "ಪ್ರಯೋಗ 2: What a lossy handoff drops",
    "bodyEn": "What it ran: What a lossy handoff drops. What the lab concluded: a one-line summary silently drops the security constraint and the open question while the structured handoff keeps both, so specialists keep clean contexts only when the handoff carries constraints, evidence and unresolved questions, and even a structured handoff still needs checking against its sources.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: What a lossy handoff drops. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a one-line summary silently drops the security constraint and the open question while the structured handoff keeps both, so specialists keep clean contexts only when the handoff carries constraints, evidence and unresolved questions, and even a structured handoff still needs checking against its sources."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely running: what a lossy handoff drops ---\nlossy summary mentions the forwarded-header constraint: false\nstructured handoff mentions it: true | open questions kept: 1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: Bounded retries",
    "headingKn": "ಪ್ರಯೋಗ 3: Bounded retries",
    "bodyEn": "What it ran: Bounded retries. What the lab concluded: the helper stops at the stated limit and rethrows the last error, so a flaky call can succeed on the third attempt but not on the second; it retries every error alike, with no backoff and no idempotency, which would be unsafe for a payment or a deployment.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Bounded retries. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the helper stops at the stated limit and rethrows the last error, so a flaky call can succeed on the third attempt but not on the second; it retries every error alike, with no backoff and no idempotency, which would be unsafe for a payment or a deployment."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely running: bounded retries ---\nretry with 3 attempts: completed after 3 attempts\nretry with 2 attempts ends with: temporary timeout after 2 attempts\nzero attempts is rejected with: maxAttempts must be positive"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 4: A timeout that does not cancel",
    "headingKn": "ಪ್ರಯೋಗ 4: A timeout that does not cancel",
    "bodyEn": "What it ran: A timeout that does not cancel. What the lab concluded: the wrapper only raises the abort signal after the deadline, so an operation that listens to it can stop, while one that ignores it keeps running to the end and the caller still waits; a timeout needs cooperation from the work it guards, which is why cancellation has to be designed in.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A timeout that does not cancel. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the wrapper only raises the abort signal after the deadline, so an operation that listens to it can stop, while one that ignores it keeps running to the end and the caller still waits; a timeout needs cooperation from the work it guards, which is why cancellation has to be designed in."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 4. Genuinely running: a timeout that does not cancel ---\noperation that watches the signal was stopped: yes\noperation that ignores the signal: still pending at 10 ms and then finished anyway: true"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 5: A verification gate",
    "headingKn": "ಪ್ರಯೋಗ 5: A verification gate",
    "bodyEn": "What it ran: A verification gate. What the lab concluded: the gate says complete only for the first and last case, so all specialists having replied is not enough; it trusts the facts it is given, and nothing here proves that the tests really ran or that a person really approved, which the surrounding system must establish.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A verification gate. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the gate says complete only for the first and last case, so all specialists having replied is not enough; it trusts the facts it is given, and nothing here proves that the tests really ran or that a person really approved, which the surrounding system must establish."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 5. Genuinely running: a verification gate ---\nall checks pass: complete = true\ntests fail: complete = false\none critical finding: complete = false\napproval required, not given: complete = false\napproval required and given: complete = true"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 6: The cost model",
    "headingKn": "ಪ್ರಯೋಗ 6: The cost model",
    "bodyEn": "What it ran: The cost model. What the lab concluded: the per-task prices of 0.08 and 0.13 dollars are illustrative inputs from the lesson, so the 500 dollar gap is arithmetic on assumptions and not a measurement; whether it is worth paying depends on whether independent review prevents defects that cost more than that.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: The cost model. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the per-task prices of 0.08 and 0.13 dollars are illustrative inputs from the lesson, so the 500 dollar gap is arithmetic on assumptions and not a measurement; whether it is worth paying depends on whether independent review prevents defects that cost more than that."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 6. Genuinely computing: the cost model ---\nsingle 800 dollars, multi 1300 dollars, difference 500 dollars for 10000 tasks"
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
    "headingEn": "Genuinely Found: The Comparison and the Handoff",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಹೋಲಿಕೆ ಮತ್ತು ಹಸ್ತಾಂತರ",
    "bodyEn": "Section 1: the single agent reported 286 tokens and 3 calls and the multi-agent version 163 tokens and 3 calls, so the multi-agent total was lower on the stand-in while the calls were equal, and both ran in under 50 ms. Section 2: the one-line summary did not mention the forwarded-header constraint, the structured handoff did, and it kept 1 open question.",
    "bodyKn": "ವಿಭಾಗ 1: ಏಕ ಏಜೆಂಟ್ 286 tokens ಮತ್ತು 3 ಕರೆ ವರದಿ ಮಾಡಿತು ಮತ್ತು ಬಹು-ಏಜೆಂಟ್ ಆವೃತ್ತಿ 163 tokens ಮತ್ತು 3 ಕರೆ, ಆದ್ದರಿಂದ stand-in ಮೇಲೆ ಬಹು-ಏಜೆಂಟ್ ಒಟ್ಟು ಕಡಿಮೆಯಿತ್ತು ಮತ್ತು ಕರೆಗಳು ಸಮಾನ, ಹಾಗೂ ಎರಡೂ 50 ms ಒಳಗೆ ಓಡಿದವು. ವಿಭಾಗ 2: ಒಂದು-ಸಾಲಿನ ಸಾರಾಂಶ forwarded-header ನಿರ್ಬಂಧ ಉಲ್ಲೇಖಿಸಲಿಲ್ಲ, ರಚನಾತ್ಮಕ ಹಸ್ತಾಂತರ ಉಲ್ಲೇಖಿಸಿತು, ಮತ್ತು 1 ತೆರೆದ ಪ್ರಶ್ನೆ ಉಳಿಸಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Retries and a Timeout That Does Not Cancel",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಮರುಪ್ರಯತ್ನಗಳು ಮತ್ತು ರದ್ದುಗೊಳಿಸದ Timeout",
    "bodyEn": "Section 3: with 3 attempts the flaky call completed after 3 attempts, with 2 attempts it ended with temporary timeout after 2, and zero attempts was rejected. Section 4: the operation that watched the signal was stopped, while the one that ignored it was still pending at 10 ms and finished anyway.",
    "bodyKn": "ವಿಭಾಗ 3: 3 ಪ್ರಯತ್ನಗಳೊಂದಿಗೆ ಅಸ್ಥಿರ ಕರೆ 3 ಪ್ರಯತ್ನಗಳ ನಂತರ ಪೂರ್ಣಗೊಂಡಿತು, 2 ಪ್ರಯತ್ನಗಳೊಂದಿಗೆ 2 ರ ನಂತರ temporary timeout ನೊಂದಿಗೆ ಮುಗಿಯಿತು, ಮತ್ತು ಸೊನ್ನೆ ಪ್ರಯತ್ನ ತಿರಸ್ಕರಿಸಲ್ಪಟ್ಟಿತು. ವಿಭಾಗ 4: ಸಂಕೇತ ಗಮನಿಸಿದ ಕಾರ್ಯ ನಿಲ್ಲಿಸಲ್ಪಟ್ಟಿತು, ಆದರೆ ಅದನ್ನು ನಿರ್ಲಕ್ಷಿಸಿದ ಕಾರ್ಯ 10 ms ನಲ್ಲಿ ಇನ್ನೂ ಬಾಕಿಯಿತ್ತು ಮತ್ತು ಹೇಗಾದರೂ ಮುಗಿಯಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: The Gate and the Cost",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ದ್ವಾರ ಮತ್ತು ವೆಚ್ಚ",
    "bodyEn": "Section 5: the gate returned true, false, false, false, true for all checks passing, failed tests, a critical finding, approval missing and approval given. Section 6: 10000 tasks at 0.08 dollars cost 800 dollars and at 0.13 dollars cost 1300 dollars, a difference of 500 dollars.",
    "bodyKn": "ವಿಭಾಗ 5: ಎಲ್ಲಾ ಪರಿಶೀಲನೆ ಪಾಸು, ಪರೀಕ್ಷೆ ವಿಫಲ, ಗಂಭೀರ ಕಂಡುಹಿಡಿಕೆ, ಅನುಮೋದನೆ ಕೊರತೆ ಮತ್ತು ಅನುಮೋದನೆ ನೀಡಿದ ಪ್ರಕರಣಗಳಿಗೆ ದ್ವಾರ true, false, false, false, true ನೀಡಿತು. ವಿಭಾಗ 6: 0.08 ಡಾಲರ್‌ನಲ್ಲಿ 10000 ಕೆಲಸಗಳಿಗೆ 800 ಡಾಲರ್ ಮತ್ತು 0.13 ಡಾಲರ್‌ನಲ್ಲಿ 1300 ಡಾಲರ್, ವ್ಯತ್ಯಾಸ 500 ಡಾಲರ್."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A multi-agent system is worth its extra cost only if it improves an outcome that is measured, so the useful habits are comparing on quality as well as tokens, keeping constraints in handoffs, bounding retries and deadlines, and refusing to call work complete without evidence.",
    "bodyKn": "ಬಹು-ಏಜೆಂಟ್ ವ್ಯವಸ್ಥೆ ತನ್ನ ಹೆಚ್ಚುವರಿ ವೆಚ್ಚಕ್ಕೆ ಯೋಗ್ಯವಾಗುವುದು ಅಳೆದ ಫಲಿತಾಂಶ ಸುಧಾರಿಸಿದರೆ ಮಾತ್ರ, ಆದ್ದರಿಂದ ಉಪಯುಕ್ತ ಅಭ್ಯಾಸಗಳು tokens ಜೊತೆಗೆ ಗುಣಮಟ್ಟದ ಮೇಲೂ ಹೋಲಿಸುವುದು, ಹಸ್ತಾಂತರಗಳಲ್ಲಿ ನಿರ್ಬಂಧ ಉಳಿಸುವುದು, ಮರುಪ್ರಯತ್ನ ಮತ್ತು ಗಡುವುಗಳಿಗೆ ಮಿತಿ ಇಡುವುದು ಮತ್ತು ಸಾಕ್ಷಿಯಿಲ್ಲದೆ ಕೆಲಸ ಪೂರ್ಣವೆಂದು ಕರೆಯದಿರುವುದು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"fewer tokens means the multi-agent version is better.\" The lower total here comes from how the stand-in counts short prompts and inputs, and says nothing about correctness, speed or real cost.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಕಡಿಮೆ tokens ಎಂದರೆ ಬಹು-ಏಜೆಂಟ್ ಆವೃತ್ತಿ ಉತ್ತಮ.\" ಇಲ್ಲಿನ ಕಡಿಮೆ ಒಟ್ಟು stand-in ಚಿಕ್ಕ prompt ಮತ್ತು input ಎಣಿಸುವ ರೀತಿಯಿಂದ ಬಂದದ್ದು, ಮತ್ತು ಸರಿಯಾಗಿರುವುದು, ವೇಗ ಅಥವಾ ನಿಜವಾದ ವೆಚ್ಚದ ಬಗ್ಗೆ ಏನೂ ಹೇಳುವುದಿಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Handoff: the information one agent passes to the next. Idempotency: repeating an operation gives the same effect as doing it once. AbortSignal: a request to stop that the work must choose to honour. Verification gate: a check on evidence before work counts as done.",
    "bodyKn": "ಹಸ್ತಾಂತರ: ಒಂದು ಏಜೆಂಟ್ ಮುಂದಿನದಕ್ಕೆ ನೀಡುವ ಮಾಹಿತಿ. Idempotency: ಕಾರ್ಯ ಪುನರಾವರ್ತಿಸಿದರೂ ಒಮ್ಮೆ ಮಾಡಿದಂತೆಯೇ ಪರಿಣಾಮ. AbortSignal: ಕೆಲಸ ಗೌರವಿಸಲು ಆಯ್ಕೆ ಮಾಡಬೇಕಾದ ನಿಲ್ಲಿಸುವ ವಿನಂತಿ. ಪರಿಶೀಲನಾ ದ್ವಾರ: ಕೆಲಸ ಮುಗಿದಂತೆ ಎಣಿಸುವ ಮೊದಲು ಸಾಕ್ಷಿಯ ಪರಿಶೀಲನೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) The stand-in reported 163 tokens for multi against 286 for single, with equal calls, and that is not quality. 2) A one-line handoff dropped the security constraint. 3) Retries stopped at their limit. 4) A timeout stopped only work that watched the signal. 5) The gate refused four of five cases.",
    "bodyKn": "1) stand-in multi ಗೆ 163 tokens ಮತ್ತು single ಗೆ 286 ವರದಿ ಮಾಡಿತು, ಕರೆಗಳು ಸಮಾನ, ಮತ್ತು ಅದು ಗುಣಮಟ್ಟವಲ್ಲ. 2) ಒಂದು-ಸಾಲಿನ ಹಸ್ತಾಂತರ ಭದ್ರತಾ ನಿರ್ಬಂಧ ಬಿಟ್ಟಿತು. 3) ಮರುಪ್ರಯತ್ನಗಳು ತಮ್ಮ ಮಿತಿಯಲ್ಲಿ ನಿಂತವು. 4) timeout ಸಂಕೇತ ಗಮನಿಸಿದ ಕೆಲಸವನ್ನು ಮಾತ್ರ ನಿಲ್ಲಿಸಿತು. 5) ದ್ವಾರ ಐದರಲ್ಲಿ ನಾಲ್ಕು ಪ್ರಕರಣಗಳನ್ನು ನಿರಾಕರಿಸಿತು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What did the stand-in report for the single agent and for multi-agent tokens?",
      "qKn": "stand-in ಏಕ ಏಜೆಂಟ್ ಮತ್ತು ಬಹು-ಏಜೆಂಟ್ ಗೆ tokens ಎಷ್ಟು ವರದಿ ಮಾಡಿತು?",
      "opts": [
       "286 and 163",
       "163 and 286",
       "349 and 181",
       "800 and 1300"
      ],
      "optsKn": [
       "286 ಮತ್ತು 163",
       "163 ಮತ್ತು 286",
       "349 ಮತ್ತು 181",
       "800 ಮತ್ತು 1300"
      ],
      "correct": 0
     },
     {
      "q": "After how many attempts did the flaky call succeed with a limit of 3?",
      "qKn": "ಮಿತಿ 3 ಇದ್ದಾಗ ಅಸ್ಥಿರ ಕರೆ ಎಷ್ಟು ಪ್ರಯತ್ನಗಳ ನಂತರ ಯಶಸ್ವಿಯಾಯಿತು?",
      "opts": [
       "3",
       "2",
       "1",
       "4"
      ],
      "optsKn": [
       "3",
       "2",
       "1",
       "4"
      ],
      "correct": 0
     },
     {
      "q": "What happened to the operation that ignored the abort signal?",
      "qKn": "abort ಸಂಕೇತ ನಿರ್ಲಕ್ಷಿಸಿದ ಕಾರ್ಯಕ್ಕೆ ಏನಾಯಿತು?",
      "opts": [
       "It kept running and finished",
       "It was stopped at once",
       "It threw immediately",
       "It was retried"
      ],
      "optsKn": [
       "ಅದು ಚಾಲನೆಯಲ್ಲಿದ್ದು ಮುಗಿಯಿತು",
       "ತಕ್ಷಣ ನಿಲ್ಲಿಸಲಾಯಿತು",
       "ತಕ್ಷಣ throw ಮಾಡಿತು",
       "ಮರುಪ್ರಯತ್ನಿಸಲಾಯಿತು"
      ],
      "correct": 0
     },
     {
      "q": "For how many of the five gate cases did isComplete return true?",
      "qKn": "ಐದು ದ್ವಾರ ಪ್ರಕರಣಗಳಲ್ಲಿ ಎಷ್ಟಕ್ಕೆ isComplete true ನೀಡಿತು?",
      "opts": [
       "2",
       "1",
       "3",
       "5"
      ],
      "optsKn": [
       "2",
       "1",
       "3",
       "5"
      ],
      "correct": 0
     },
     {
      "q": "Is the 500 dollar cost difference a measurement?",
      "qKn": "500 ಡಾಲರ್ ವೆಚ್ಚ ವ್ಯತ್ಯಾಸ ಅಳತೆಯೇ?",
      "opts": [
       "No, it is arithmetic on assumed prices",
       "Yes, from a real bill",
       "Yes, from the stand-in",
       "It was never computed"
      ],
      "optsKn": [
       "ಇಲ್ಲ, ಅದು ಊಹಿಸಿದ ಬೆಲೆಗಳ ಮೇಲಿನ ಲೆಕ್ಕ",
       "ಹೌದು, ನಿಜವಾದ ಬಿಲ್‌ನಿಂದ",
       "ಹೌದು, stand-in ನಿಂದ",
       "ಅದನ್ನು ಎಂದೂ ಲೆಕ್ಕಿಸಲಿಲ್ಲ"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
