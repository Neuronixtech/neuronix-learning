module.exports = {
 "phaseId": "6a369d6466020ed05b3215d1",
 "moduleId": "6a369d6466020ed05b3215d4",
 "order": 1,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Why Multi-Agent (Part 2 of 3) — Messages, Pipelines and Swarms",
 "titleKn": "Why Multi-Agent (ಭಾಗ 2 / 3) — ಸಂದೇಶಗಳು, Pipeline ಮತ್ತು Swarm",
 "desc": "Pass messages between specialists and run pipeline, fan-out, voting and swarm patterns with their failure cases.",
 "descKn": "ವಿಶೇಷಜ್ಞರ ನಡುವೆ ಸಂದೇಶ ಕಳುಹಿಸಿ ಮತ್ತು pipeline, fan-out, ಮತದಾನ ಹಾಗೂ swarm ಮಾದರಿಗಳನ್ನು ಅವುಗಳ ವೈಫಲ್ಯ ಪ್ರಕರಣಗಳೊಂದಿಗೆ ಓಡಿಸಿ.",
 "objectives": [
  "Filter messages by recipient.",
  "Compare Promise.all and allSettled.",
  "Apply a risk-aware vote.",
  "Count messages with a hub.",
  "Run a shared-queue swarm."
 ],
 "objectivesKn": [
  "ಸ್ವೀಕರಿಸುವವರ ಪ್ರಕಾರ ಸಂದೇಶ ಫಿಲ್ಟರ್ ಮಾಡಿ.",
  "Promise.all ಮತ್ತು allSettled ಹೋಲಿಸಿ.",
  "ಅಪಾಯ-ಅರಿವಿನ ಮತ ಅನ್ವಯಿಸಿ.",
  "hub ನೊಂದಿಗೆ ಸಂದೇಶ ಎಣಿಸಿ.",
  "ಹಂಚಿಕೆಯ ಸಾಲಿನ swarm ಓಡಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Why Multi-Agent (Part 2 of 3)",
    "textKn": "Why Multi-Agent (ಭಾಗ 2 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: TypeScript (Node.js 24, no packages) · Time: ~60 minutes. Part 2 of 3: the message-passing pipeline of lesson Step 3, recipient filtering, a deterministic coordinator, fan-out and fan-in with partial failure, voting policies, message counts for a hub and a peer swarm queue. Every output below was genuinely produced by the lab file on Node.js v24.19.0. The lesson original single_vs_multi.ts was not supplied and the lesson text uses fakeLLMCall without defining it, so the lab is our own implementation and fakeLLMCall is our own deterministic stand-in that calls no model, estimates tokens as characters divided by four and reports one call per invocation; no real LLM behaviour, cost or speed is measured. Only multiAgentApproach is the lesson code; the fan-out, voting and swarm sections are the lesson illustrations, run here for real. This lesson replaces the earlier placeholder at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: TypeScript (Node.js 24, ಯಾವುದೇ package ಇಲ್ಲ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 2ನೆಯದು: lesson Step 3 ರ ಸಂದೇಶ-ವರ್ಗಾವಣೆ pipeline, ಸ್ವೀಕರಿಸುವವರ ಫಿಲ್ಟರಿಂಗ್, ನಿರ್ಣಾಯಕ coordinator, ಭಾಗಶಃ ವೈಫಲ್ಯದೊಂದಿಗೆ fan-out ಮತ್ತು fan-in, ಮತದಾನ ನೀತಿಗಳು, hub ಗೆ ಸಂದೇಶ ಎಣಿಕೆ ಮತ್ತು peer swarm ಸಾಲು. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Node.js v24.19.0 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. lesson ನ ಮೂಲ single_vs_multi.ts ನೀಡಲಾಗಿಲ್ಲ ಮತ್ತು lesson ಪಠ್ಯವು fakeLLMCall ಅನ್ನು ವ್ಯಾಖ್ಯಾನಿಸದೆ ಬಳಸುತ್ತದೆ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್ ನಮ್ಮದೇ ಅನುಷ್ಠಾನ ಮತ್ತು fakeLLMCall ಯಾವುದೇ ಮಾದರಿಯನ್ನು ಕರೆಯದ, ಅಕ್ಷರಗಳನ್ನು ನಾಲ್ಕರಿಂದ ಭಾಗಿಸಿ tokens ಅಂದಾಜಿಸುವ ಮತ್ತು ಪ್ರತಿ ಕರೆಗೆ ಒಂದು ಕರೆ ವರದಿ ಮಾಡುವ ನಮ್ಮದೇ ನಿರ್ಣಾಯಕ ಪರ್ಯಾಯ; ನಿಜವಾದ LLM ವರ್ತನೆ, ವೆಚ್ಚ ಅಥವಾ ವೇಗ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. multiAgentApproach ಮಾತ್ರ lesson ಕೋಡ್; fan-out, ಮತದಾನ ಮತ್ತು swarm ವಿಭಾಗಗಳು lesson ನ ಉದಾಹರಣೆಗಳು, ಇಲ್ಲಿ ನಿಜವಾಗಿ ಓಡಿಸಲಾಗಿದೆ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ placeholder ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Specialists Need a Way to Talk",
    "textKn": "ವಿಶೇಷಜ್ಞರಿಗೆ ಮಾತನಾಡುವ ದಾರಿ ಬೇಕು",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Messages, Pipelines, Fan-Out and Swarms",
    "headingKn": "ಸಂದೇಶಗಳು, Pipeline, Fan-Out ಮತ್ತು Swarm",
    "bodyEn": "Once work is split, specialists must hand results to each other without sharing a whole conversation. The lesson uses a small message type with sender, recipient, content and time, and a pipeline that filters messages by recipient before each stage. This part runs that pipeline, shows that recipient filtering is routing and not security, and then runs the other patterns the lesson describes: a rule-based coordinator, parallel reviews with Promise.all and Promise.allSettled, a majority vote against a risk-aware release rule, the growth of message counts with and without a hub, and a swarm of three workers on one shared queue with a cap on handoffs.",
    "bodyKn": "ಕೆಲಸ ಹಂಚಿದ ನಂತರ ವಿಶೇಷಜ್ಞರು ಇಡೀ ಸಂಭಾಷಣೆ ಹಂಚಿಕೊಳ್ಳದೆ ಪರಸ್ಪರ ಫಲಿತಾಂಶ ನೀಡಬೇಕು. lesson ಕಳುಹಿಸುವವರು, ಸ್ವೀಕರಿಸುವವರು, ವಿಷಯ ಮತ್ತು ಸಮಯವಿರುವ ಚಿಕ್ಕ ಸಂದೇಶ ಪ್ರಕಾರ ಮತ್ತು ಪ್ರತಿ ಹಂತದ ಮೊದಲು ಸ್ವೀಕರಿಸುವವರ ಪ್ರಕಾರ ಸಂದೇಶಗಳನ್ನು ಫಿಲ್ಟರ್ ಮಾಡುವ pipeline ಬಳಸುತ್ತದೆ. ಈ ಭಾಗವು ಆ pipeline ಓಡಿಸುತ್ತದೆ, ಸ್ವೀಕರಿಸುವವರ ಫಿಲ್ಟರಿಂಗ್ ರೂಟಿಂಗ್ ಹೊರತು ಭದ್ರತೆಯಲ್ಲ ಎಂದು ತೋರಿಸುತ್ತದೆ, ನಂತರ lesson ವಿವರಿಸುವ ಇತರ ಮಾದರಿಗಳನ್ನು ಓಡಿಸುತ್ತದೆ: ನಿಯಮ-ಆಧಾರಿತ coordinator, Promise.all ಮತ್ತು Promise.allSettled ನೊಂದಿಗೆ ಸಮಾನಾಂತರ ವಿಮರ್ಶೆಗಳು, ಬಹುಮತ ಮತ ಮತ್ತು ಅಪಾಯ-ಅರಿವಿನ ಬಿಡುಗಡೆ ನಿಯಮ, hub ಇದ್ದಾಗ ಮತ್ತು ಇಲ್ಲದಾಗ ಸಂದೇಶ ಎಣಿಕೆಯ ಬೆಳವಣಿಗೆ, ಮತ್ತು ಒಂದೇ ಹಂಚಿಕೆಯ ಸಾಲಿನ ಮೇಲೆ ಮೂರು ಕೆಲಸಗಾರರ swarm ಹಾಗೂ handoff ಮಿತಿ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Coordination Patterns",
    "headingKn": "ಸಮನ್ವಯ ಮಾದರಿಗಳು",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">the pattern follows the dependencies of the work</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">messages</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">from, to, content</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">pipeline</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">one stage after another</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">fan-out</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">parallel then merge</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">swarm</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">peers share a queue</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">the pattern follows the dependencies of the work</text></svg>",
    "captionEn": "Messages carry results between specialists, and the pattern depends on what depends on what.",
    "captionKn": "ಸಂದೇಶಗಳು ವಿಶೇಷಜ್ಞರ ನಡುವೆ ಫಲಿತಾಂಶ ಸಾಗಿಸುತ್ತವೆ, ಮತ್ತು ಮಾದರಿ ಯಾವುದು ಯಾವುದರ ಮೇಲೆ ಅವಲಂಬಿತ ಎಂಬುದನ್ನು ಅವಲಂಬಿಸಿದೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "The patterns",
    "headingKn": "ಮಾದರಿಗಳು",
    "headers": [
     "Pattern",
     "What the lab ran"
    ],
    "rows": [
     [
      "pipeline",
      "researcher to coder to reviewer, each receiving only messages addressed to it"
     ],
     [
      "coordinator",
      "a fixed next-agent rule with no model call"
     ],
     [
      "fan-out and fan-in",
      "three reviews with Promise.all and with Promise.allSettled"
     ],
     [
      "consensus",
      "a majority vote and a rule that refuses on a critical issue"
     ],
     [
      "swarm",
      "three workers claiming four tasks from one queue"
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
    "filename": "wm_2.ts",
    "headingEn": "The message pipeline",
    "headingKn": "ಸಂದೇಶ pipeline",
    "descEn": "multiAgentApproach follows lesson Step 3: each specialist input is built by filtering the messages addressed to it, and the last message goes to a recipient named orchestrator.",
    "descKn": "multiAgentApproach lesson Step 3 ಅನುಸರಿಸುತ್ತದೆ: ಪ್ರತಿ ವಿಶೇಷಜ್ಞನ input ಅವನಿಗೆ ಉದ್ದೇಶಿಸಿದ ಸಂದೇಶಗಳನ್ನು ಫಿಲ್ಟರ್ ಮಾಡಿ ರಚಿಸಲಾಗುತ್ತದೆ, ಮತ್ತು ಕೊನೆಯ ಸಂದೇಶ orchestrator ಎಂಬ ಸ್ವೀಕರಿಸುವವರಿಗೆ ಹೋಗುತ್ತದೆ.",
    "code": "async function multiAgentApproach(task: string): Promise<{ result: AgentResult; messages: AgentMessage[] }> {\n  const messages: AgentMessage[] = [];\n  let totalTokens = 0;\n  let totalToolCalls = 0;\n  const researchResult = await researcher.run(task);\n  messages.push({ from: \"researcher\", to: \"coder\", content: researchResult.content, timestamp: Date.now() });\n  totalTokens += researchResult.tokensUsed; totalToolCalls += researchResult.toolCalls;\n  const coderInput = messages.filter((m) => m.to === \"coder\").map((m) => `[From ${m.from}]: ${m.content}`).join(\"\\n\");\n  const codeResult = await coder.run(coderInput);\n  messages.push({ from: \"coder\", to: \"reviewer\", content: codeResult.content, timestamp: Date.now() });\n  totalTokens += codeResult.tokensUsed; totalToolCalls += codeResult.toolCalls;\n  const reviewerInput = messages.filter((m) => m.to === \"reviewer\").map((m) => `[From ${m.from}]: ${m.content}`).join(\"\\n\");\n  const reviewResult = await reviewer.run(reviewerInput);\n  messages.push({ from: \"reviewer\", to: \"orchestrator\", content: reviewResult.content, timestamp: Date.now() });\n  totalTokens += reviewResult.tokensUsed; totalToolCalls += reviewResult.toolCalls;\n  return { result: { content: messages.map((m) => `[${m.from} -> ${m.to}]: ${m.content}`).join(\"\\n\\n\"), tokensUsed: totalTokens, toolCalls: totalToolCalls }, messages };\n}"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "wm_2.ts",
    "headingEn": "Coordinator, reviews and the fan-in",
    "headingKn": "Coordinator, ವಿಮರ್ಶೆಗಳು ಮತ್ತು fan-in",
    "descEn": "nextAgent is a fixed routing rule, and review is a parallel worker that can be made to fail so Promise.all and allSettled can be compared.",
    "descKn": "nextAgent ನಿಶ್ಚಿತ ರೂಟಿಂಗ್ ನಿಯಮ, ಮತ್ತು review ವಿಫಲವಾಗುವಂತೆ ಮಾಡಬಹುದಾದ ಸಮಾನಾಂತರ ಕೆಲಸಗಾರ, ಇದರಿಂದ Promise.all ಮತ್ತು allSettled ಹೋಲಿಸಬಹುದು.",
    "code": "type AgentRole = \"researcher\" | \"coder\" | \"reviewer\";\nfunction nextAgent(current: AgentRole): AgentRole | null {\n  if (current === \"researcher\") return \"coder\";\n  if (current === \"coder\") return \"reviewer\";\n  return null;\n}\n\ntype Finding = { source: string; severity: \"low\" | \"medium\" | \"high\"; description: string };\nlet started = 0;\nasync function review(source: string, severity: Finding[\"severity\"], fail = false): Promise<Finding[]> {\n  started++;\n  await new Promise<void>((r) => setTimeout(r, 5));\n  if (fail) throw new Error(`${source} reviewer unavailable`);\n  return [{ source, severity, description: `${source} finding` }];\n}"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "wm_2.ts",
    "headingEn": "Voting, swarm and handoff cap",
    "headingKn": "ಮತದಾನ, swarm ಮತ್ತು handoff ಮಿತಿ",
    "descEn": "majorityApproved counts approvals, canRelease also refuses on any critical issue, and canDelegate stops a task that has been handed on too many times.",
    "descKn": "majorityApproved ಅನುಮೋದನೆಗಳನ್ನು ಎಣಿಸುತ್ತದೆ, canRelease ಯಾವುದೇ ಗಂಭೀರ ಸಮಸ್ಯೆಯಿದ್ದರೂ ನಿರಾಕರಿಸುತ್ತದೆ, ಮತ್ತು canDelegate ಹಲವು ಬಾರಿ ಹಸ್ತಾಂತರಿಸಿದ ಕೆಲಸವನ್ನು ನಿಲ್ಲಿಸುತ್ತದೆ.",
    "code": "type ReviewVote = { reviewer: string; approved: boolean };\nfunction majorityApproved(votes: ReviewVote[]): boolean {\n  if (votes.length === 0) return false;\n  return votes.filter((v) => v.approved).length > votes.length / 2;\n}\ntype ReviewDecision = { reviewer: string; approved: boolean; criticalIssue: boolean };\nfunction canRelease(reviews: ReviewDecision[]): boolean {\n  if (reviews.length === 0) return false;\n  if (reviews.some((r) => r.criticalIssue)) return false;\n  return reviews.every((r) => r.approved);\n}\n\ntype SwarmTask = { id: number; description: string };\ntype RoutedTask = { id: string; handoffs: number; maxHandoffs: number };\nconst canDelegate = (t: RoutedTask) => t.handoffs < t.maxHandoffs;"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: the message pipeline ---\nresearcher -> coder: 88 characters\ncoder -> reviewer: 70 characters\nreviewer -> orchestrator: 58 characters\ntokens: 181 | tool calls: 3\ncoder input starts with: \"[From researcher]: Res\"\nreviewer input contains the research text: false\nthe three stages run one after another and each specialist receives only the messages addressed to it, so the reviewer never sees the research text; the last message goes to a recipient called orchestrator that is only a string here, and nothing applies the review or loops back to the coder.\n\n--- 2. Genuinely running: recipient filtering is routing and not access control ---\nmessages for coder: 1 | messages for reviewer: 1\ncode holding the whole array can still read every message: Use Redis. / Two tests failed.\nfilter selects what is passed on, which keeps prompts small, but any code that holds the array can read all of it, so the filter is not a security boundary and real isolation needs separate stores and permissions.\n\n--- 3. Genuinely running: a deterministic coordinator ---\nresearcher -> coder | coder -> reviewer | reviewer -> null\na coordinator applies a fixed routing rule with no model call, so its behaviour is predictable, while an orchestrator that reasons about the next step would add model calls and the freedom to change the order.\n\n--- 4. Genuinely running: fan-out and fan-in ---\nfindings after flat(): security:high, performance:medium, contract:low\nallSettled statuses: rejected, fulfilled, fulfilled\nPromise.all rejected with: security reviewer unavailable | reviews started: 3\nPromise.all rejects as soon as one worker fails and does not cancel the others, which had already started, while allSettled keeps the two good results next to the failure; a failed security review should still block a release even when the other two succeed.\n\n--- 5. Genuinely running: voting policies ---\nmajority approves A,B,C = true,false,true: true\ncanRelease with every vote approved but one critical issue: false\ncanRelease with no reviews: false | majority with no votes: false\na majority rule approves a change that one reviewer rejected, while the risk-aware rule refuses it because of the critical issue, and both refuse an empty set of reviews; consensus here is only a decision rule and proves nothing about whether the finding is true.\n\n--- 6. Genuinely computing: messages with and without a hub ---\n3 agents: all-to-all 6, hub 6\n6 agents: all-to-all 30, hub 12\n10 agents: all-to-all 90, hub 20\n20 agents: all-to-all 380, hub 40\n50 agents: all-to-all 2450, hub 100\nall-to-all directed messages grow as N times N minus one while a hub needs two connections per agent, so at fifty agents the counts are 2450 against 100; these are topology counts under stated assumptions and not measured traffic, and the hub trades fewer links for a possible bottleneck.\n\n--- 7. Genuinely running: a peer swarm and a handoff cap ---\nclaims: A:1 B:2 C:3 A:4\nevery task claimed exactly once: true\ncanDelegate at 2 of 3 handoffs: true | at 3 of 3: false\nqueue.shift() claims a task before the worker first awaits, so no task is claimed twice inside this one single-threaded process; that is a property of this setting only, and separate processes need atomic claims and leases, while the handoff cap stops a delegation loop but does not detect a cycle."
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
    "headingEn": "Experiment 1: The message pipeline",
    "headingKn": "ಪ್ರಯೋಗ 1: The message pipeline",
    "bodyEn": "What it ran: The message pipeline. What the lab concluded: the three stages run one after another and each specialist receives only the messages addressed to it, so the reviewer never sees the research text; the last message goes to a recipient called orchestrator that is only a string here, and nothing applies the review or loops back to the coder.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: The message pipeline. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the three stages run one after another and each specialist receives only the messages addressed to it, so the reviewer never sees the research text; the last message goes to a recipient called orchestrator that is only a string here, and nothing applies the review or loops back to the coder."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. Genuinely running: the message pipeline ---\nresearcher -> coder: 88 characters\ncoder -> reviewer: 70 characters\nreviewer -> orchestrator: 58 characters\ntokens: 181 | tool calls: 3\ncoder input starts with: \"[From researcher]: Res\"\nreviewer input contains the research text: false"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: Recipient filtering is routing and not access control",
    "headingKn": "ಪ್ರಯೋಗ 2: Recipient filtering is routing and not access control",
    "bodyEn": "What it ran: Recipient filtering is routing and not access control. What the lab concluded: filter selects what is passed on, which keeps prompts small, but any code that holds the array can read all of it, so the filter is not a security boundary and real isolation needs separate stores and permissions.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Recipient filtering is routing and not access control. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): filter selects what is passed on, which keeps prompts small, but any code that holds the array can read all of it, so the filter is not a security boundary and real isolation needs separate stores and permissions."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely running: recipient filtering is routing and not access control ---\nmessages for coder: 1 | messages for reviewer: 1\ncode holding the whole array can still read every message: Use Redis. / Two tests failed."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: A deterministic coordinator",
    "headingKn": "ಪ್ರಯೋಗ 3: A deterministic coordinator",
    "bodyEn": "What it ran: A deterministic coordinator. What the lab concluded: a coordinator applies a fixed routing rule with no model call, so its behaviour is predictable, while an orchestrator that reasons about the next step would add model calls and the freedom to change the order.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A deterministic coordinator. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a coordinator applies a fixed routing rule with no model call, so its behaviour is predictable, while an orchestrator that reasons about the next step would add model calls and the freedom to change the order."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely running: a deterministic coordinator ---\nresearcher -> coder | coder -> reviewer | reviewer -> null"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 4: Fan-out and fan-in",
    "headingKn": "ಪ್ರಯೋಗ 4: Fan-out and fan-in",
    "bodyEn": "What it ran: Fan-out and fan-in. What the lab concluded: Promise.all rejects as soon as one worker fails and does not cancel the others, which had already started, while allSettled keeps the two good results next to the failure; a failed security review should still block a release even when the other two succeed.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Fan-out and fan-in. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): Promise.all rejects as soon as one worker fails and does not cancel the others, which had already started, while allSettled keeps the two good results next to the failure; a failed security review should still block a release even when the other two succeed."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 4. Genuinely running: fan-out and fan-in ---\nfindings after flat(): security:high, performance:medium, contract:low\nallSettled statuses: rejected, fulfilled, fulfilled\nPromise.all rejected with: security reviewer unavailable | reviews started: 3"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 5: Voting policies",
    "headingKn": "ಪ್ರಯೋಗ 5: Voting policies",
    "bodyEn": "What it ran: Voting policies. What the lab concluded: a majority rule approves a change that one reviewer rejected, while the risk-aware rule refuses it because of the critical issue, and both refuse an empty set of reviews; consensus here is only a decision rule and proves nothing about whether the finding is true.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Voting policies. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a majority rule approves a change that one reviewer rejected, while the risk-aware rule refuses it because of the critical issue, and both refuse an empty set of reviews; consensus here is only a decision rule and proves nothing about whether the finding is true."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 5. Genuinely running: voting policies ---\nmajority approves A,B,C = true,false,true: true\ncanRelease with every vote approved but one critical issue: false\ncanRelease with no reviews: false | majority with no votes: false"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 6: Messages with and without a hub",
    "headingKn": "ಪ್ರಯೋಗ 6: Messages with and without a hub",
    "bodyEn": "What it ran: Messages with and without a hub. What the lab concluded: all-to-all directed messages grow as N times N minus one while a hub needs two connections per agent, so at fifty agents the counts are 2450 against 100; these are topology counts under stated assumptions and not measured traffic, and the hub trades fewer links for a possible bottleneck.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Messages with and without a hub. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): all-to-all directed messages grow as N times N minus one while a hub needs two connections per agent, so at fifty agents the counts are 2450 against 100; these are topology counts under stated assumptions and not measured traffic, and the hub trades fewer links for a possible bottleneck."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 6. Genuinely computing: messages with and without a hub ---\n3 agents: all-to-all 6, hub 6\n6 agents: all-to-all 30, hub 12\n10 agents: all-to-all 90, hub 20\n20 agents: all-to-all 380, hub 40\n50 agents: all-to-all 2450, hub 100"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 7: A peer swarm and a handoff cap",
    "headingKn": "ಪ್ರಯೋಗ 7: A peer swarm and a handoff cap",
    "bodyEn": "What it ran: A peer swarm and a handoff cap. What the lab concluded: queue.shift() claims a task before the worker first awaits, so no task is claimed twice inside this one single-threaded process; that is a property of this setting only, and separate processes need atomic claims and leases, while the handoff cap stops a delegation loop but does not detect a cycle.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A peer swarm and a handoff cap. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): queue.shift() claims a task before the worker first awaits, so no task is claimed twice inside this one single-threaded process; that is a property of this setting only, and separate processes need atomic claims and leases, while the handoff cap stops a delegation loop but does not detect a cycle."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 7. Genuinely running: a peer swarm and a handoff cap ---\nclaims: A:1 B:2 C:3 A:4\nevery task claimed exactly once: true\ncanDelegate at 2 of 3 handoffs: true | at 3 of 3: false"
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
    "headingEn": "Genuinely Found: Pipeline and Filtering",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Pipeline ಮತ್ತು ಫಿಲ್ಟರಿಂಗ್",
    "bodyEn": "Section 1: the three messages had 88, 70 and 58 characters, the run reported 181 tokens and 3 calls, the coder input began with [From researcher], and the reviewer input did not contain the research text. Section 2: filtering gave one message each for coder and reviewer, yet code holding the array could still read both.",
    "bodyKn": "ವಿಭಾಗ 1: ಮೂರು ಸಂದೇಶಗಳು 88, 70 ಮತ್ತು 58 ಅಕ್ಷರಗಳಿದ್ದವು, ಓಟ 181 tokens ಮತ್ತು 3 ಕರೆ ವರದಿ ಮಾಡಿತು, coder input [From researcher] ನಿಂದ ಆರಂಭವಾಯಿತು, ಮತ್ತು reviewer input ಸಂಶೋಧನಾ ಪಠ್ಯ ಹೊಂದಿರಲಿಲ್ಲ. ವಿಭಾಗ 2: ಫಿಲ್ಟರಿಂಗ್ coder ಮತ್ತು reviewer ಇಬ್ಬರಿಗೂ ತಲಾ ಒಂದು ಸಂದೇಶ ನೀಡಿತು, ಆದರೂ ಅರೇ ಹೊಂದಿರುವ ಕೋಡ್ ಎರಡನ್ನೂ ಓದಬಹುದಿತ್ತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Parallel Failure and Voting",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಸಮಾನಾಂತರ ವೈಫಲ್ಯ ಮತ್ತು ಮತದಾನ",
    "bodyEn": "Section 4: allSettled returned rejected, fulfilled, fulfilled, while Promise.all rejected with security reviewer unavailable after all 3 reviews had started. Section 5: the majority rule approved votes of true, false, true, canRelease refused when one review had a critical issue, and both refused an empty set.",
    "bodyKn": "ವಿಭಾಗ 4: allSettled rejected, fulfilled, fulfilled ನೀಡಿತು, ಆದರೆ ಎಲ್ಲಾ 3 ವಿಮರ್ಶೆಗಳು ಆರಂಭವಾದ ನಂತರ Promise.all security reviewer unavailable ನೊಂದಿಗೆ ತಿರಸ್ಕರಿಸಿತು. ವಿಭಾಗ 5: ಬಹುಮತ ನಿಯಮ true, false, true ಮತಗಳನ್ನು ಅನುಮೋದಿಸಿತು, ಒಂದು ವಿಮರ್ಶೆಯಲ್ಲಿ ಗಂಭೀರ ಸಮಸ್ಯೆ ಇದ್ದಾಗ canRelease ನಿರಾಕರಿಸಿತು, ಮತ್ತು ಎರಡೂ ಖಾಲಿ ಸೆಟ್ ಅನ್ನು ನಿರಾಕರಿಸಿದವು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Counts, Swarm and Cap",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಎಣಿಕೆ, Swarm ಮತ್ತು ಮಿತಿ",
    "bodyEn": "Section 6: at 50 agents all-to-all needs 2450 directed messages and a hub 100, and at 6 agents 30 against 12. Section 7: three workers claimed tasks 1 to 4 as A:1 B:2 C:3 A:4 with each claimed once, and canDelegate was true at 2 of 3 handoffs and false at 3 of 3.",
    "bodyKn": "ವಿಭಾಗ 6: 50 ಏಜೆಂಟ್‌ಗಳಲ್ಲಿ all-to-all ಗೆ 2450 ನಿರ್ದೇಶಿತ ಸಂದೇಶಗಳು ಮತ್ತು hub ಗೆ 100 ಬೇಕು, ಮತ್ತು 6 ಏಜೆಂಟ್‌ಗಳಲ್ಲಿ 30 ವಿರುದ್ಧ 12. ವಿಭಾಗ 7: ಮೂರು ಕೆಲಸಗಾರರು ಕೆಲಸ 1 ರಿಂದ 4 ಅನ್ನು A:1 B:2 C:3 A:4 ಎಂದು ಪಡೆದರು, ಪ್ರತಿಯೊಂದೂ ಒಮ್ಮೆ, ಮತ್ತು canDelegate 3 ರಲ್ಲಿ 2 handoff ನಲ್ಲಿ true ಮತ್ತು 3 ರಲ್ಲಿ 3 ರಲ್ಲಿ false."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "The pattern that fits depends on what depends on what: a pipeline for dependent stages, fan-out for independent ones and a shared queue for many similar tasks, and each one brings its own failure cases that have to be handled.",
    "bodyKn": "ಯಾವ ಮಾದರಿ ಹೊಂದುತ್ತದೆ ಎಂಬುದು ಯಾವುದು ಯಾವುದರ ಮೇಲೆ ಅವಲಂಬಿತ ಎಂಬುದನ್ನು ಅವಲಂಬಿಸಿದೆ: ಅವಲಂಬಿತ ಹಂತಗಳಿಗೆ pipeline, ಸ್ವತಂತ್ರ ಹಂತಗಳಿಗೆ fan-out ಮತ್ತು ಹಲವು ಸಮಾನ ಕೆಲಸಗಳಿಗೆ ಹಂಚಿಕೆಯ ಸಾಲು, ಮತ್ತು ಪ್ರತಿಯೊಂದೂ ನಿಭಾಯಿಸಬೇಕಾದ ತನ್ನದೇ ವೈಫಲ್ಯ ಪ್ರಕರಣಗಳನ್ನು ತರುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"the reviewer message to the orchestrator closes the loop.\" Nothing in the pipeline reads the review or sends work back to the coder, so a review message is not proof that the review passed.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"orchestrator ಗೆ reviewer ಸಂದೇಶ ಲೂಪ್ ಮುಚ್ಚುತ್ತದೆ.\" pipeline ನಲ್ಲಿ ಯಾವುದೂ ವಿಮರ್ಶೆ ಓದುವುದಿಲ್ಲ ಅಥವಾ ಕೆಲಸವನ್ನು coder ಗೆ ವಾಪಸ್ ಕಳುಹಿಸುವುದಿಲ್ಲ, ಆದ್ದರಿಂದ ವಿಮರ್ಶೆ ಸಂದೇಶ ವಿಮರ್ಶೆ ಪಾಸಾಯಿತು ಎಂಬುದಕ್ಕೆ ಸಾಕ್ಷಿಯಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Message passing: sending explicit messages between agents. Coordinator: a fixed routing rule. Fan-out and fan-in: split work, then merge results. Consensus: a defined rule for agreement. Swarm: peers that take work from shared state.",
    "bodyKn": "ಸಂದೇಶ ವರ್ಗಾವಣೆ: ಏಜೆಂಟ್‌ಗಳ ನಡುವೆ ಸ್ಪಷ್ಟ ಸಂದೇಶ ಕಳುಹಿಸುವುದು. Coordinator: ನಿಶ್ಚಿತ ರೂಟಿಂಗ್ ನಿಯಮ. Fan-out ಮತ್ತು fan-in: ಕೆಲಸ ಹಂಚಿ ನಂತರ ಫಲಿತಾಂಶ ವಿಲೀನ. ಒಮ್ಮತ: ಒಪ್ಪಿಗೆಗೆ ವ್ಯಾಖ್ಯಾನಿತ ನಿಯಮ. Swarm: ಹಂಚಿಕೆಯ ಸ್ಥಿತಿಯಿಂದ ಕೆಲಸ ತೆಗೆದುಕೊಳ್ಳುವ ಸಮಾನರು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) The reviewer never saw the research text. 2) Filtering is routing, not security. 3) Promise.all rejected while allSettled kept the good results. 4) A critical issue overrode a majority. 5) Fifty agents need 2450 messages all-to-all against 100 with a hub.",
    "bodyKn": "1) reviewer ಸಂಶೋಧನಾ ಪಠ್ಯ ಎಂದೂ ನೋಡಲಿಲ್ಲ. 2) ಫಿಲ್ಟರಿಂಗ್ ರೂಟಿಂಗ್, ಭದ್ರತೆಯಲ್ಲ. 3) Promise.all ತಿರಸ್ಕರಿಸಿತು ಆದರೆ allSettled ಒಳ್ಳೆಯ ಫಲಿತಾಂಶ ಉಳಿಸಿತು. 4) ಗಂಭೀರ ಸಮಸ್ಯೆ ಬಹುಮತವನ್ನು ಮೀರಿತು. 5) ಐವತ್ತು ಏಜೆಂಟ್‌ಗಳಿಗೆ all-to-all ನಲ್ಲಿ 2450 ಸಂದೇಶ, hub ನೊಂದಿಗೆ 100."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "Did the reviewer input contain the research text?",
      "qKn": "reviewer input ಸಂಶೋಧನಾ ಪಠ್ಯ ಹೊಂದಿತ್ತೇ?",
      "opts": [
       "No",
       "Yes",
       "Only the first line",
       "It was not run"
      ],
      "optsKn": [
       "ಇಲ್ಲ",
       "ಹೌದು",
       "ಮೊದಲ ಸಾಲು ಮಾತ್ರ",
       "ಓಡಿಸಲಾಗಿಲ್ಲ"
      ],
      "correct": 0
     },
     {
      "q": "What did Promise.all do when one of three reviews failed?",
      "qKn": "ಮೂರು ವಿಮರ್ಶೆಗಳಲ್ಲಿ ಒಂದು ವಿಫಲವಾದಾಗ Promise.all ಏನು ಮಾಡಿತು?",
      "opts": [
       "Rejected, although all three had started",
       "Returned all findings",
       "Cancelled the other two before they started",
       "Retried the failed one"
      ],
      "optsKn": [
       "ಮೂರೂ ಆರಂಭವಾಗಿದ್ದರೂ ತಿರಸ್ಕರಿಸಿತು",
       "ಎಲ್ಲಾ ಕಂಡುಹಿಡಿಕೆ ನೀಡಿತು",
       "ಇತರ ಎರಡನ್ನು ಆರಂಭಕ್ಕೆ ಮೊದಲೇ ರದ್ದುಗೊಳಿಸಿತು",
       "ವಿಫಲವಾದದ್ದನ್ನು ಮರುಪ್ರಯತ್ನಿಸಿತು"
      ],
      "correct": 0
     },
     {
      "q": "How many directed messages does all-to-all need for 50 agents?",
      "qKn": "50 ಏಜೆಂಟ್‌ಗಳಿಗೆ all-to-all ಗೆ ಎಷ್ಟು ನಿರ್ದೇಶಿತ ಸಂದೇಶಗಳು ಬೇಕು?",
      "opts": [
       "2450",
       "100",
       "50",
       "1225"
      ],
      "optsKn": [
       "2450",
       "100",
       "50",
       "1225"
      ],
      "correct": 0
     },
     {
      "q": "What did canRelease return when every vote approved but one review had a critical issue?",
      "qKn": "ಎಲ್ಲಾ ಮತಗಳು ಅನುಮೋದಿಸಿದರೂ ಒಂದು ವಿಮರ್ಶೆಯಲ್ಲಿ ಗಂಭೀರ ಸಮಸ್ಯೆ ಇದ್ದಾಗ canRelease ಏನು ನೀಡಿತು?",
      "opts": [
       "false",
       "true",
       "undefined",
       "It threw"
      ],
      "optsKn": [
       "false",
       "true",
       "undefined",
       "ಅದು throw ಮಾಡಿತು"
      ],
      "correct": 0
     },
     {
      "q": "Why was no task claimed twice in the swarm test?",
      "qKn": "swarm ಪರೀಕ್ಷೆಯಲ್ಲಿ ಯಾವ ಕೆಲಸವೂ ಎರಡು ಬಾರಿ ಏಕೆ ಪಡೆಯಲ್ಪಡಲಿಲ್ಲ?",
      "opts": [
       "queue.shift() claims before the first await in one process",
       "The workers were distributed",
       "A lock was used",
       "Tasks were unique by luck"
      ],
      "optsKn": [
       "queue.shift() ಒಂದು ಪ್ರಕ್ರಿಯೆಯಲ್ಲಿ ಮೊದಲ await ಗೆ ಮೊದಲು ಪಡೆಯುತ್ತದೆ",
       "ಕೆಲಸಗಾರರು ವಿತರಿತವಾಗಿದ್ದರು",
       "ಲಾಕ್ ಬಳಸಲಾಯಿತು",
       "ಕೆಲಸಗಳು ಅದೃಷ್ಟದಿಂದ ಅನನ್ಯವಾಗಿದ್ದವು"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
