module.exports = {
 "phaseId": "6a369d6466020ed05b3215d1",
 "moduleId": "6a369d6566020ed05b3215dd",
 "order": 0,
 "type": "interactive",
 "duration": 120,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Communication Protocols (Part 1 of 3) — Messages, Cards and Task States",
 "titleKn": "ಸಂವಹನ ಪ್ರೋಟೋಕಾಲ್‌ಗಳು (ಭಾಗ 1 / 3) — ಸಂದೇಶಗಳು, Card ಗಳು ಮತ್ತು ಕಾರ್ಯ ಸ್ಥಿತಿಗಳು",
 "desc": "Build messages, a card registry and a task lifecycle, and test what discovery does and does not prove.",
 "descKn": "ಸಂದೇಶಗಳು, card registry ಮತ್ತು ಕಾರ್ಯ ಜೀವನಚಕ್ರ ನಿರ್ಮಿಸಿ, ಮತ್ತು ಅನ್ವೇಷಣೆ ಏನನ್ನು ಸಾಬೀತುಪಡಿಸುತ್ತದೆ ಮತ್ತು ಏನನ್ನು ಅಲ್ಲ ಎಂದು ಪರೀಕ್ಷಿಸಿ.",
 "objectives": [
  "Build a message model.",
  "Validate one shape per part.",
  "Discover agents by skill.",
  "Track task states.",
  "See what a card cannot prove."
 ],
 "objectivesKn": [
  "ಸಂದೇಶ ಮಾದರಿ ನಿರ್ಮಿಸಿ.",
  "ಪ್ರತಿ ಭಾಗಕ್ಕೆ ಒಂದು ರೂಪ ಪರಿಶೀಲಿಸಿ.",
  "skill ಮೂಲಕ ಏಜೆಂಟ್‌ಗಳನ್ನು ಅನ್ವೇಷಿಸಿ.",
  "ಕಾರ್ಯ ಸ್ಥಿತಿಗಳನ್ನು ಅನುಸರಿಸಿ.",
  "card ಏನನ್ನು ಸಾಬೀತುಪಡಿಸಲಾರದು ನೋಡಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Communication Protocols (Part 1 of 3)",
    "textKn": "ಸಂವಹನ ಪ್ರೋಟೋಕಾಲ್‌ಗಳು (ಭಾಗ 1 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: TypeScript (Node.js 24, no packages; Node prints a harmless module-type warning on stderr because the lab uses import) · Time: ~120 minutes. Part 1 of 3: message types and identifiers, the one-shape rule for parts, discovery by skill tag and input mode, a task lifecycle with terminal states and an advertised card with no handler behind it. Every output below was genuinely produced by the lab file on Node.js v24.19.0. The lesson original main.ts was not supplied, so the labs are our own implementation, and the MCP, A2A, ACP and ANP material is modelled in one process with no real server, no network, no HPKE encryption and no live search. The message types, createMessage and AgentRegistry follow the lesson text, and TaskManager is our own model because its code was not in the pasted text. This lesson replaces the earlier placeholder at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: TypeScript (Node.js 24, ಯಾವುದೇ package ಇಲ್ಲ; ಲ್ಯಾಬ್ import ಬಳಸುವುದರಿಂದ Node stderr ನಲ್ಲಿ ಹಾನಿರಹಿತ module-type ಎಚ್ಚರಿಕೆ ಮುದ್ರಿಸುತ್ತದೆ) · ಸಮಯ: ~120 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 1ನೆಯದು: ಸಂದೇಶ ಪ್ರಕಾರಗಳು ಮತ್ತು ಗುರುತುಗಳು, ಭಾಗಗಳಿಗೆ ಒಂದೇ-ರೂಪ ನಿಯಮ, skill tag ಮತ್ತು ಇನ್‌ಪುಟ್ ಮೋಡ್ ಮೂಲಕ ಅನ್ವೇಷಣೆ, ಅಂತಿಮ ಸ್ಥಿತಿಗಳಿರುವ ಕಾರ್ಯ ಜೀವನಚಕ್ರ ಮತ್ತು ಹಿಂದೆ handler ಇಲ್ಲದ ಜಾಹೀರಾತಾದ card. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Node.js v24.19.0 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. lesson ನ ಮೂಲ main.ts ನೀಡಲಾಗಿಲ್ಲ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ನಮ್ಮದೇ ಅನುಷ್ಠಾನ, ಮತ್ತು MCP, A2A, ACP ಹಾಗೂ ANP ವಿಷಯವನ್ನು ಒಂದೇ ಪ್ರಕ್ರಿಯೆಯಲ್ಲಿ ಮಾದರಿ ಮಾಡಲಾಗಿದೆ, ನಿಜವಾದ ಸರ್ವರ್, ಜಾಲ, HPKE ಎನ್‌ಕ್ರಿಪ್ಷನ್ ಅಥವಾ ನೇರ ಹುಡುಕಾಟ ಇಲ್ಲ. ಸಂದೇಶ ಪ್ರಕಾರಗಳು, createMessage ಮತ್ತು AgentRegistry lesson ಪಠ್ಯವನ್ನು ಅನುಸರಿಸುತ್ತವೆ, ಮತ್ತು TaskManager ನ ಕೋಡ್ ಅಂಟಿಸಿದ ಪಠ್ಯದಲ್ಲಿ ಇಲ್ಲದ ಕಾರಣ ಅದು ನಮ್ಮದೇ ಮಾದರಿ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ placeholder ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Agents Need Contracts, Not Just Strings",
    "textKn": "ಏಜೆಂಟ್‌ಗಳಿಗೆ ಒಪ್ಪಂದ ಬೇಕು, ಕೇವಲ ಸ್ಟ್ರಿಂಗ್ ಅಲ್ಲ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Messages, Agent Cards and Task States",
    "headingKn": "ಸಂದೇಶಗಳು, Agent Card ಗಳು ಮತ್ತು ಕಾರ್ಯ ಸ್ಥಿತಿಗಳು",
    "bodyEn": "Passing plain strings between agents leaves open which agent can do a job, what a message contains, what state a long job is in and who sent a request. The lesson answers with four protocol families: MCP for tools, A2A for agent discovery and delegation, ACP for audited runs and ANP for verified identity. This part builds the common message model, a registry of Agent Cards that supports discovery by skill tag and by input mode, and a small task manager that follows a job through its states and refuses events after it has ended, and it ends by showing that a card can advertise an endpoint that nothing implements.",
    "bodyKn": "ಏಜೆಂಟ್‌ಗಳ ನಡುವೆ ಸಾದಾ ಸ್ಟ್ರಿಂಗ್ ಕಳುಹಿಸಿದರೆ ಯಾವ ಏಜೆಂಟ್ ಕೆಲಸ ಮಾಡಬಲ್ಲದು, ಸಂದೇಶ ಏನನ್ನು ಒಳಗೊಂಡಿದೆ, ದೀರ್ಘ ಕೆಲಸ ಯಾವ ಸ್ಥಿತಿಯಲ್ಲಿದೆ ಮತ್ತು ವಿನಂತಿಯನ್ನು ಯಾರು ಕಳುಹಿಸಿದರು ಎಂಬುದು ಬಾಕಿ ಉಳಿಯುತ್ತದೆ. lesson ನಾಲ್ಕು ಪ್ರೋಟೋಕಾಲ್ ಕುಟುಂಬಗಳಿಂದ ಉತ್ತರಿಸುತ್ತದೆ: tools ಗೆ MCP, ಏಜೆಂಟ್ ಅನ್ವೇಷಣೆ ಮತ್ತು ನಿಯೋಜನೆಗೆ A2A, ಲೆಕ್ಕಪರಿಶೋಧಿತ ಓಟಗಳಿಗೆ ACP ಮತ್ತು ಪರಿಶೀಲಿತ ಗುರುತಿಗೆ ANP. ಈ ಭಾಗವು ಸಾಮಾನ್ಯ ಸಂದೇಶ ಮಾದರಿ, skill tag ಹಾಗೂ ಇನ್‌ಪುಟ್ ಮೋಡ್ ಮೂಲಕ ಅನ್ವೇಷಣೆ ಬೆಂಬಲಿಸುವ Agent Card ಗಳ registry ಮತ್ತು ಕೆಲಸವನ್ನು ಅದರ ಸ್ಥಿತಿಗಳ ಮೂಲಕ ಅನುಸರಿಸಿ ಮುಗಿದ ನಂತರದ ಘಟನೆಗಳನ್ನು ನಿರಾಕರಿಸುವ ಚಿಕ್ಕ task manager ಅನ್ನು ನಿರ್ಮಿಸುತ್ತದೆ, ಮತ್ತು card ಏನೂ ಅನುಷ್ಠಾನಗೊಳಿಸದ endpoint ಅನ್ನು ಜಾಹೀರಾತು ಮಾಡಬಹುದು ಎಂದು ತೋರಿಸಿ ಮುಗಿಯುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Four Protocols, Four Questions",
    "headingKn": "ನಾಲ್ಕು ಪ್ರೋಟೋಕಾಲ್, ನಾಲ್ಕು ಪ್ರಶ್ನೆಗಳು",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">four protocols answer four different questions</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">MCP</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">agent to tool</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">A2A</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">agent to agent</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">ACP</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">audited runs</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">ANP</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">verified identity</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">four protocols answer four different questions</text></svg>",
    "captionEn": "Tools, agents, audited runs and identity are separate concerns.",
    "captionKn": "Tools, ಏಜೆಂಟ್‌ಗಳು, ಲೆಕ್ಕಪರಿಶೋಧಿತ ಓಟಗಳು ಮತ್ತು ಗುರುತು ಪ್ರತ್ಯೇಕ ವಿಷಯಗಳು."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "The five experiments",
    "headingKn": "ಐದು ಪ್ರಯೋಗಗಳು",
    "headers": [
     "Experiment",
     "What it checks"
    ],
    "rows": [
     [
      "messages",
      "unique ids and a reply that points at its request"
     ],
     [
      "parts",
      "one shape per part, and a part that mixes two"
     ],
     [
      "discovery",
      "tag research, tag coding, json and text input modes"
     ],
     [
      "task states",
      "completed task refusing a late artifact and a late update"
     ],
     [
      "advertised card",
      "a card with an endpoint and no handler"
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
    "filename": "cp_1.ts",
    "headingEn": "Messages and cards",
    "headingKn": "ಸಂದೇಶಗಳು ಮತ್ತು card ಗಳು",
    "descEn": "AgentMessage, createMessage and textMessage build messages with a UUID and an optional replyTo, and AgentCard describes an agent skills, interfaces and input and output modes.",
    "descKn": "AgentMessage, createMessage ಮತ್ತು textMessage UUID ಮತ್ತು ಐಚ್ಛಿಕ replyTo ಇರುವ ಸಂದೇಶಗಳನ್ನು ನಿರ್ಮಿಸುತ್ತವೆ, ಮತ್ತು AgentCard ಏಜೆಂಟ್‌ನ skills, interfaces ಹಾಗೂ ಇನ್‌ಪುಟ್ ಮತ್ತು ಔಟ್‌ಪುಟ್ ಮೋಡ್‌ಗಳನ್ನು ವಿವರಿಸುತ್ತದೆ.",
    "code": "function createMessage(role: MessageRole, parts: MessagePart[], replyTo?: string): AgentMessage {\r\n  return { id: crypto.randomUUID(), role, parts, replyTo, timestamp: Date.now() };\r\n}\r\nfunction textMessage(role: MessageRole, text: string): AgentMessage {\r\n  return createMessage(role, [{ text }]);\r\n}\r\n\r\ntype Skill = { id: string; name: string; description: string; tags: string[]; inputModes: string[]; outputModes: string[] };\r\ntype AgentInterface = { url: string; protocolBinding: string; protocolVersion: string };\r\ntype AgentCard = {\r\n  name: string; description: string; version: string; supportedInterfaces: AgentInterface[];\r\n  capabilities: { streaming: boolean; pushNotifications: boolean }; defaultInputModes: string[]; defaultOutputModes: string[]; skills: Skill[];\r\n};"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "cp_1.ts",
    "headingEn": "Registry and task manager",
    "headingKn": "Registry ಮತ್ತು task manager",
    "descEn": "AgentRegistry discovers cards by skill tag or input mode, and TaskManager moves a task through its states and ignores events once a terminal state is reached.",
    "descKn": "AgentRegistry skill tag ಅಥವಾ ಇನ್‌ಪುಟ್ ಮೋಡ್ ಮೂಲಕ card ಗಳನ್ನು ಅನ್ವೇಷಿಸುತ್ತದೆ, ಮತ್ತು TaskManager ಕೆಲಸವನ್ನು ಅದರ ಸ್ಥಿತಿಗಳ ಮೂಲಕ ಚಲಿಸಿ ಅಂತಿಮ ಸ್ಥಿತಿ ತಲುಪಿದ ನಂತರ ಘಟನೆಗಳನ್ನು ಕಡೆಗಣಿಸುತ್ತದೆ.",
    "code": "class AgentRegistry {\r\n  private cards: Map<string, AgentCard> = new Map();\r\n  register(card: AgentCard) { this.cards.set(card.name, card); }\r\n  discoverBySkillTag(tag: string): AgentCard[] {\r\n    return [...this.cards.values()].filter((card) => card.skills.some((skill) => skill.tags.includes(tag)));\r\n  }\r\n  discoverByInputMode(mimeType: string): AgentCard[] {\r\n    return [...this.cards.values()].filter((card) => card.defaultInputModes.includes(mimeType) || card.skills.some((skill) => skill.inputModes.includes(mimeType)));\r\n  }\r\n  resolve(name: string): AgentCard | undefined { return this.cards.get(name); }\r\n  listAll(): AgentCard[] { return [...this.cards.values()]; }\r\n}\r\n\r\ntype TaskState = \"TASK_STATE_SUBMITTED\" | \"TASK_STATE_WORKING\" | \"TASK_STATE_COMPLETED\" | \"TASK_STATE_FAILED\";\r\ntype Task = { id: string; state: TaskState; artifacts: { id: string; name: string }[] };\r\ntype TaskEvent = { status?: TaskState; artifact?: { id: string; name: string } };\r\nconst TERMINAL: TaskState[] = [\"TASK_STATE_COMPLETED\", \"TASK_STATE_FAILED\"];\r\n\r\nclass TaskManager {\r\n  tasks: Map<string, Task> = new Map();\r\n  handlers: Map<string, (task: Task, message: AgentMessage) => AsyncGenerator<TaskEvent>> = new Map();\r\n  ignored = 0;\r\n  registerHandler(agent: string, handler: (task: Task, message: AgentMessage) => AsyncGenerator<TaskEvent>) { this.handlers.set(agent, handler); }\r\n  async sendMessage(agent: string, message: AgentMessage): Promise<Task> {\r\n    const task: Task = { id: crypto.randomUUID(), state: \"TASK_STATE_SUBMITTED\", artifacts: [] };\r\n    this.tasks.set(task.id, task);\r\n    const handler = this.handlers.get(agent);\r\n    if (!handler) { task.state = \"TASK_STATE_FAILED\"; return task; }\r\n    for await (const event of handler(task, message)) {\r\n      if (TERMINAL.includes(task.state)) { this.ignored++; continue; }\r\n      if (event.status) task.state = event.status;\r\n      if (event.artifact) task.artifacts.push(event.artifact);\r\n    }\r\n    return task;\r\n  }\r\n}"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "cp_1.ts",
    "headingEn": "The experiments",
    "headingKn": "ಪ್ರಯೋಗಗಳು",
    "descEn": "main() runs the five experiments and prints the real result of each.",
    "descKn": "main() ಐದು ಪ್ರಯೋಗಗಳನ್ನು ಓಡಿಸಿ ಪ್ರತಿಯೊಂದರ ನಿಜ ಫಲಿತಾಂಶ ಮುದ್ರಿಸುತ್ತದೆ.",
    "code": "async function main() {\r\n  section(\"1. Genuinely running: messages and their identifiers\");\r\n  const first = textMessage(\"ROLE_USER\", \"Research React 19\");\r\n  const reply = createMessage(\"ROLE_AGENT\", [{ text: \"Done\" }], first.id);\r\n  const second = textMessage(\"ROLE_USER\", \"Research React 19\");\r\n  console.log(\"same text, different ids:\", first.id !== second.id, \"| reply points to the request:\", reply.replyTo === first.id, \"| id length:\", first.id.length);\r\n  console.log(\"two messages with identical text get different UUIDs and a reply carries the id of the message it answers, which lets a client match answers to requests; an id identifies a message and says nothing about who sent it.\");\r\n\r\n  section(\"2. Genuinely running: a part must have exactly one shape\");\r\n  const parts: object[] = [{ text: \"hello\" }, { data: { a: 1 }, mediaType: \"application/json\" }, { url: \"https://example.com/r.pdf\", filename: \"r.pdf\", mediaType: \"application/pdf\" }, { text: \"x\", url: \"https://example.com/r.pdf\", filename: \"r.pdf\", mediaType: \"application/pdf\" }];\r\n  console.log(\"single-shape check:\", parts.map((p) => isSinglePart(p)).join(\", \"));\r\n  console.log(\"the three single-shape parts pass and an object that mixes a text field with a file reference fails the exact-one-shape check even though each of its fields is valid on its own, so a runtime validator is needed to enforce one shape per part; a url part is only a reference and nothing was downloaded.\");\r\n\r\n  section(\"3. Genuinely running: discovery by skill tag and by input mode\");\r\n  const registry = new AgentRegistry();\r\n  registry.register(researcherCard);\r\n  registry.register(coderCard);\r\n  console.log(\"tag research:\", registry.discoverBySkillTag(\"research\").map((c) => c.name));\r\n  console.log(\"tag coding:\", registry.discoverBySkillTag(\"coding\").map((c) => c.name));\r\n  console.log(\"input application/json:\", registry.discoverByInputMode(\"application/json\").map((c) => c.name), \"| text/plain:\", registry.discoverByInputMode(\"text/plain\").map((c) => c.name));\r\n  console.log(\"unknown name resolves to:\", registry.resolve(\"planner\"), \"| all cards:\", registry.listAll().length);\r\n  console.log(\"the research tag finds only the researcher, the json input mode finds only the coder and text/plain finds both, so a caller can ask for a capability and not a name; a match on advertised tags is only a claim, because the card was written by the agent owner and nothing here tests that the skill works or that the caller may use it.\");\r\n\r\n  section(\"4. Genuinely running: a task through submitted, working, artifact and completed\");\r\n  const tm = new TaskManager();\r\n  tm.registerHandler(\"researcher\", async function* (task) {\r\n    yield { status: \"TASK_STATE_WORKING\" };\r\n    yield { artifact: { id: crypto.randomUUID(), name: \"research-results\" } };\r\n    yield { status: \"TASK_STATE_COMPLETED\" };\r\n    yield { artifact: { id: crypto.randomUUID(), name: \"late-artifact\" } };\r\n    yield { status: \"TASK_STATE_WORKING\" };\r\n  });\r\n  const task = await tm.sendMessage(\"researcher\", first);\r\n  console.log(\"final state:\", task.state, \"| artifacts kept:\", task.artifacts.map((a) => a.name), \"| events ignored after the end state:\", tm.ignored);\r\n  console.log(\"after the completed state the later artifact and the later working update were both dropped and counted as ignored, so a finished task cannot be reopened by a stray event; this is our own model of terminal states and not the lesson TaskManager.\");\r\n\r\n  section(\"5. Genuinely running: an advertised card with nobody behind it\");\r\n  const ghost = registry.resolve(\"coder\");\r\n  const failed = await tm.sendMessage(\"coder\", first);\r\n  console.log(\"card found:\", ghost !== undefined, \"| advertised endpoint:\", ghost?.supportedInterfaces[0].url, \"| task state when no handler exists:\", failed.state);\r\n  console.log(\"the registry returns a complete card with an endpoint for the coder, yet sending it work fails because no handler was ever registered, so an advertised interface is not an implemented one; discovery tells you what an agent claims and not that it can be reached.\");\r\n}"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: messages and their identifiers ---\nsame text, different ids: true | reply points to the request: true | id length: 36\ntwo messages with identical text get different UUIDs and a reply carries the id of the message it answers, which lets a client match answers to requests; an id identifies a message and says nothing about who sent it.\n\n--- 2. Genuinely running: a part must have exactly one shape ---\nsingle-shape check: true, true, true, false\nthe three single-shape parts pass and an object that mixes a text field with a file reference fails the exact-one-shape check even though each of its fields is valid on its own, so a runtime validator is needed to enforce one shape per part; a url part is only a reference and nothing was downloaded.\n\n--- 3. Genuinely running: discovery by skill tag and by input mode ---\ntag research: [ 'researcher' ]\ntag coding: [ 'coder' ]\ninput application/json: [ 'coder' ] | text/plain: [ 'researcher', 'coder' ]\nunknown name resolves to: undefined | all cards: 2\nthe research tag finds only the researcher, the json input mode finds only the coder and text/plain finds both, so a caller can ask for a capability and not a name; a match on advertised tags is only a claim, because the card was written by the agent owner and nothing here tests that the skill works or that the caller may use it.\n\n--- 4. Genuinely running: a task through submitted, working, artifact and completed ---\nfinal state: TASK_STATE_COMPLETED | artifacts kept: [ 'research-results' ] | events ignored after the end state: 2\nafter the completed state the later artifact and the later working update were both dropped and counted as ignored, so a finished task cannot be reopened by a stray event; this is our own model of terminal states and not the lesson TaskManager.\n\n--- 5. Genuinely running: an advertised card with nobody behind it ---\ncard found: true | advertised endpoint: https://coder.local/a2a/v1 | task state when no handler exists: TASK_STATE_FAILED\nthe registry returns a complete card with an endpoint for the coder, yet sending it work fails because no handler was ever registered, so an advertised interface is not an implemented one; discovery tells you what an agent claims and not that it can be reached."
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
    "headingEn": "Experiment 1: Messages and their identifiers",
    "headingKn": "ಪ್ರಯೋಗ 1: Messages and their identifiers",
    "bodyEn": "What it ran: Messages and their identifiers. What the lab concluded: two messages with identical text get different UUIDs and a reply carries the id of the message it answers, which lets a client match answers to requests; an id identifies a message and says nothing about who sent it.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Messages and their identifiers. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): two messages with identical text get different UUIDs and a reply carries the id of the message it answers, which lets a client match answers to requests; an id identifies a message and says nothing about who sent it."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. Genuinely running: messages and their identifiers ---\nsame text, different ids: true | reply points to the request: true | id length: 36"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: A part must have exactly one shape",
    "headingKn": "ಪ್ರಯೋಗ 2: A part must have exactly one shape",
    "bodyEn": "What it ran: A part must have exactly one shape. What the lab concluded: the three single-shape parts pass and an object that mixes a text field with a file reference fails the exact-one-shape check even though each of its fields is valid on its own, so a runtime validator is needed to enforce one shape per part; a url part is only a reference and nothing was downloaded.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A part must have exactly one shape. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the three single-shape parts pass and an object that mixes a text field with a file reference fails the exact-one-shape check even though each of its fields is valid on its own, so a runtime validator is needed to enforce one shape per part; a url part is only a reference and nothing was downloaded."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely running: a part must have exactly one shape ---\nsingle-shape check: true, true, true, false"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: Discovery by skill tag and by input mode",
    "headingKn": "ಪ್ರಯೋಗ 3: Discovery by skill tag and by input mode",
    "bodyEn": "What it ran: Discovery by skill tag and by input mode. What the lab concluded: the research tag finds only the researcher, the json input mode finds only the coder and text/plain finds both, so a caller can ask for a capability and not a name; a match on advertised tags is only a claim, because the card was written by the agent owner and nothing here tests that the skill works or that the caller may use it.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Discovery by skill tag and by input mode. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the research tag finds only the researcher, the json input mode finds only the coder and text/plain finds both, so a caller can ask for a capability and not a name; a match on advertised tags is only a claim, because the card was written by the agent owner and nothing here tests that the skill works or that the caller may use it."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely running: discovery by skill tag and by input mode ---\ntag research: [ 'researcher' ]\ntag coding: [ 'coder' ]\ninput application/json: [ 'coder' ] | text/plain: [ 'researcher', 'coder' ]\nunknown name resolves to: undefined | all cards: 2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 4: A task through submitted, working, artifact and completed",
    "headingKn": "ಪ್ರಯೋಗ 4: A task through submitted, working, artifact and completed",
    "bodyEn": "What it ran: A task through submitted, working, artifact and completed. What the lab concluded: after the completed state the later artifact and the later working update were both dropped and counted as ignored, so a finished task cannot be reopened by a stray event; this is our own model of terminal states and not the lesson TaskManager.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A task through submitted, working, artifact and completed. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): after the completed state the later artifact and the later working update were both dropped and counted as ignored, so a finished task cannot be reopened by a stray event; this is our own model of terminal states and not the lesson TaskManager."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 4. Genuinely running: a task through submitted, working, artifact and completed ---\nfinal state: TASK_STATE_COMPLETED | artifacts kept: [ 'research-results' ] | events ignored after the end state: 2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 5: An advertised card with nobody behind it",
    "headingKn": "ಪ್ರಯೋಗ 5: An advertised card with nobody behind it",
    "bodyEn": "What it ran: An advertised card with nobody behind it. What the lab concluded: the registry returns a complete card with an endpoint for the coder, yet sending it work fails because no handler was ever registered, so an advertised interface is not an implemented one; discovery tells you what an agent claims and not that it can be reached.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: An advertised card with nobody behind it. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the registry returns a complete card with an endpoint for the coder, yet sending it work fails because no handler was ever registered, so an advertised interface is not an implemented one; discovery tells you what an agent claims and not that it can be reached."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 5. Genuinely running: an advertised card with nobody behind it ---\ncard found: true | advertised endpoint: https://coder.local/a2a/v1 | task state when no handler exists: TASK_STATE_FAILED"
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
    "headingEn": "Genuinely Found: Messages and Discovery",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಸಂದೇಶಗಳು ಮತ್ತು ಅನ್ವೇಷಣೆ",
    "bodyEn": "Section 1: two messages with the same text had different ids, the reply pointed at its request and the id length was 36. Section 2: the exact-one-shape check gave true, true, true and false for the text, data, file and mixed parts. Section 3: tag research found the researcher, tag coding found the coder, application/json found only the coder, text/plain found both and an unknown name resolved to undefined.",
    "bodyKn": "ವಿಭಾಗ 1: ಒಂದೇ ಪಠ್ಯದ ಎರಡು ಸಂದೇಶಗಳಿಗೆ ಬೇರೆ id ಗಳಿದ್ದವು, ಉತ್ತರ ತನ್ನ ವಿನಂತಿಯನ್ನು ತೋರಿಸಿತು ಮತ್ತು id ಉದ್ದ 36. ವಿಭಾಗ 2: ಒಂದೇ-ರೂಪ ಪರಿಶೀಲನೆ ಪಠ್ಯ, ಡೇಟಾ, ಫೈಲ್ ಮತ್ತು ಮಿಶ್ರ ಭಾಗಗಳಿಗೆ true, true, true ಮತ್ತು false ನೀಡಿತು. ವಿಭಾಗ 3: tag research researcher ಅನ್ನು, tag coding coder ಅನ್ನು ಕಂಡುಕೊಂಡಿತು, application/json coder ಮಾತ್ರ ಕಂಡುಕೊಂಡಿತು, text/plain ಎರಡನ್ನೂ ಕಂಡುಕೊಂಡಿತು ಮತ್ತು ಅಜ್ಞಾತ ಹೆಸರು undefined ಆಯಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Task States and an Empty Card",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಕಾರ್ಯ ಸ್ಥಿತಿಗಳು ಮತ್ತು ಖಾಲಿ card",
    "bodyEn": "Section 4: the task ended TASK_STATE_COMPLETED with only the research-results artifact and 2 events ignored after the end state. Section 5: the coder card was found with the endpoint https://coder.local/a2a/v1, yet sending it work gave TASK_STATE_FAILED because no handler existed.",
    "bodyKn": "ವಿಭಾಗ 4: ಕೆಲಸ TASK_STATE_COMPLETED ನೊಂದಿಗೆ ಮುಗಿದು research-results artifact ಮಾತ್ರ ಉಳಿಯಿತು ಮತ್ತು ಅಂತಿಮ ಸ್ಥಿತಿಯ ನಂತರ 2 ಘಟನೆಗಳು ಕಡೆಗಣಿಸಲ್ಪಟ್ಟವು. ವಿಭಾಗ 5: coder card endpoint https://coder.local/a2a/v1 ನೊಂದಿಗೆ ಸಿಕ್ಕಿತು, ಆದರೂ ಅದಕ್ಕೆ ಕೆಲಸ ಕಳುಹಿಸಿದಾಗ handler ಇಲ್ಲದ ಕಾರಣ TASK_STATE_FAILED ಬಂದಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A shared message model, a way to find an agent by skill and a task with visible states are what let separately built agents hand work to each other, and each of them can fail in its own way that has to be checked.",
    "bodyKn": "ಹಂಚಿಕೆಯ ಸಂದೇಶ ಮಾದರಿ, skill ಮೂಲಕ ಏಜೆಂಟ್ ಹುಡುಕುವ ದಾರಿ ಮತ್ತು ಕಾಣುವ ಸ್ಥಿತಿಗಳಿರುವ ಕೆಲಸ ಇವು ಪ್ರತ್ಯೇಕವಾಗಿ ನಿರ್ಮಿಸಿದ ಏಜೆಂಟ್‌ಗಳು ಪರಸ್ಪರ ಕೆಲಸ ನೀಡಲು ಅವಕಾಶ ಮಾಡುತ್ತವೆ, ಮತ್ತು ಪ್ರತಿಯೊಂದೂ ಪರಿಶೀಲಿಸಬೇಕಾದ ತನ್ನದೇ ರೀತಿಯಲ್ಲಿ ವಿಫಲವಾಗಬಹುದು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"a card in the registry means the agent works.\" The coder card was complete and its endpoint was never served.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"registry ಯಲ್ಲಿ card ಇದೆ ಎಂದರೆ ಏಜೆಂಟ್ ಕೆಲಸ ಮಾಡುತ್ತದೆ.\" coder card ಪೂರ್ಣವಾಗಿತ್ತು ಮತ್ತು ಅದರ endpoint ಎಂದೂ ಒದಗಿಸಲ್ಪಡಲಿಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Agent Card: an agent self-description. Skill tag: a label used to find an agent. Task: a stateful unit of delegated work. Artifact: an output of a task. Terminal state: a state after which a task accepts no more updates.",
    "bodyKn": "Agent Card: ಏಜೆಂಟ್‌ನ ಸ್ವ-ವಿವರಣೆ. Skill tag: ಏಜೆಂಟ್ ಹುಡುಕಲು ಬಳಸುವ ಲೇಬಲ್. Task: ನಿಯೋಜಿಸಿದ ಸ್ಥಿತಿಯುಳ್ಳ ಕೆಲಸದ ಘಟಕ. Artifact: ಕೆಲಸದ ಫಲಿತಾಂಶ. ಅಂತಿಮ ಸ್ಥಿತಿ: ನಂತರ ಕೆಲಸ ಮತ್ತಷ್ಟು ನವೀಕರಣಗಳನ್ನು ಒಪ್ಪದ ಸ್ಥಿತಿ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) Two identical messages got different ids. 2) A part with two shapes failed the exact-one-shape check. 3) Discovery by input mode found the coder for json and both agents for text. 4) A completed task ignored 2 late events. 5) A complete card with no handler gave TASK_STATE_FAILED.",
    "bodyKn": "1) ಒಂದೇ ರೀತಿಯ ಎರಡು ಸಂದೇಶಗಳಿಗೆ ಬೇರೆ id ಸಿಕ್ಕವು. 2) ಎರಡು ರೂಪಗಳ ಭಾಗ ಒಂದೇ-ರೂಪ ಪರಿಶೀಲನೆಯಲ್ಲಿ ವಿಫಲವಾಯಿತು. 3) ಇನ್‌ಪುಟ್ ಮೋಡ್ ಅನ್ವೇಷಣೆ json ಗೆ coder ಮತ್ತು text ಗೆ ಎರಡೂ ಏಜೆಂಟ್‌ಗಳನ್ನು ಕಂಡುಕೊಂಡಿತು. 4) ಪೂರ್ಣಗೊಂಡ ಕೆಲಸ 2 ತಡವಾದ ಘಟನೆಗಳನ್ನು ಕಡೆಗಣಿಸಿತು. 5) handler ಇಲ್ಲದ ಪೂರ್ಣ card TASK_STATE_FAILED ನೀಡಿತು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "How many events did the completed task ignore?",
      "qKn": "ಪೂರ್ಣಗೊಂಡ ಕೆಲಸ ಎಷ್ಟು ಘಟನೆಗಳನ್ನು ಕಡೆಗಣಿಸಿತು?",
      "opts": [
       "2",
       "0",
       "1",
       "5"
      ],
      "optsKn": [
       "2",
       "0",
       "1",
       "5"
      ],
      "correct": 0
     },
     {
      "q": "Which agents accept text/plain input in the registry?",
      "qKn": "registry ಯಲ್ಲಿ ಯಾವ ಏಜೆಂಟ್‌ಗಳು text/plain ಇನ್‌ಪುಟ್ ಒಪ್ಪುತ್ತವೆ?",
      "opts": [
       "researcher and coder",
       "only researcher",
       "only coder",
       "neither"
      ],
      "optsKn": [
       "researcher ಮತ್ತು coder",
       "researcher ಮಾತ್ರ",
       "coder ಮಾತ್ರ",
       "ಯಾವುದೂ ಇಲ್ಲ"
      ],
      "correct": 0
     },
     {
      "q": "What task state did the coder get when it had no handler?",
      "qKn": "handler ಇಲ್ಲದಾಗ coder ಗೆ ಯಾವ ಕೆಲಸ ಸ್ಥಿತಿ ಸಿಕ್ಕಿತು?",
      "opts": [
       "TASK_STATE_FAILED",
       "TASK_STATE_COMPLETED",
       "TASK_STATE_WORKING",
       "TASK_STATE_SUBMITTED"
      ],
      "optsKn": [
       "TASK_STATE_FAILED",
       "TASK_STATE_COMPLETED",
       "TASK_STATE_WORKING",
       "TASK_STATE_SUBMITTED"
      ],
      "correct": 0
     },
     {
      "q": "What does a message id establish?",
      "qKn": "ಸಂದೇಶ id ಏನನ್ನು ಸ್ಥಾಪಿಸುತ್ತದೆ?",
      "opts": [
       "Which message it is, and nothing about the sender",
       "Who sent it",
       "That it is authorised",
       "That it was delivered"
      ],
      "optsKn": [
       "ಅದು ಯಾವ ಸಂದೇಶ, ಕಳುಹಿಸುವವನ ಬಗ್ಗೆ ಏನೂ ಇಲ್ಲ",
       "ಯಾರು ಕಳುಹಿಸಿದರು",
       "ಅದಕ್ಕೆ ಅಧಿಕಾರವಿದೆ",
       "ಅದು ತಲುಪಿತು"
      ],
      "correct": 0
     },
     {
      "q": "Which part check gave false in the lab?",
      "qKn": "ಲ್ಯಾಬ್‌ನಲ್ಲಿ ಯಾವ ಭಾಗ ಪರಿಶೀಲನೆ false ನೀಡಿತು?",
      "opts": [
       "The part mixing a text field and a file",
       "The text part",
       "The data part",
       "The file part"
      ],
      "optsKn": [
       "ಪಠ್ಯ ಕ್ಷೇತ್ರ ಮತ್ತು ಫೈಲ್ ಬೆರೆಸಿದ ಭಾಗ",
       "ಪಠ್ಯ ಭಾಗ",
       "ಡೇಟಾ ಭಾಗ",
       "ಫೈಲ್ ಭಾಗ"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
