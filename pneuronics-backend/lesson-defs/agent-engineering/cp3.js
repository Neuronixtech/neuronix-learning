module.exports = {
 "phaseId": "6a369d6466020ed05b3215d1",
 "moduleId": "6a369d6566020ed05b3215dd",
 "order": 2,
 "type": "interactive",
 "duration": 120,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Communication Protocols (Part 3 of 3) — The Gateway, Audit Order and Replay",
 "titleKn": "ಸಂವಹನ ಪ್ರೋಟೋಕಾಲ್‌ಗಳು (ಭಾಗ 3 / 3) — Gateway, Audit ಕ್ರಮ ಮತ್ತು ಮರುಪ್ರಸಾರ",
 "desc": "Wire discovery, identity, audit and tasks together and find the ordering, sharing and replay problems.",
 "descKn": "ಅನ್ವೇಷಣೆ, ಗುರುತು, audit ಮತ್ತು ಕೆಲಸಗಳನ್ನು ಜೋಡಿಸಿ ಕ್ರಮ, ಹಂಚಿಕೆ ಮತ್ತು ಮರುಪ್ರಸಾರ ಸಮಸ್ಯೆಗಳನ್ನು ಹುಡುಕಿ.",
 "objectives": [
  "Wire a gateway.",
  "Order the checks.",
  "Audit after completion.",
  "Stop replay.",
  "Compare two statuses."
 ],
 "objectivesKn": [
  "gateway ಜೋಡಿಸಿ.",
  "ಪರಿಶೀಲನೆಗಳ ಕ್ರಮ ಇಡಿ.",
  "ಪೂರ್ಣಗೊಂಡ ನಂತರ audit ಮಾಡಿ.",
  "ಮರುಪ್ರಸಾರ ತಡೆಯಿರಿ.",
  "ಎರಡು ಸ್ಥಿತಿಗಳನ್ನು ಹೋಲಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Communication Protocols (Part 3 of 3)",
    "textKn": "ಸಂವಹನ ಪ್ರೋಟೋಕಾಲ್‌ಗಳು (ಭಾಗ 3 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: TypeScript (Node.js 24, no packages; Node prints a harmless module-type warning on stderr because the lab uses import) · Time: ~120 minutes. Part 3 of 3: a gateway that verifies identity, finds the agent, audits and delegates, the audit-ordering weakness, a shared trajectory list, a per-task trajectory, refusals, replay and a bound signature, and a failing task next to a completed audit. Every output below was genuinely produced by the lab file on Node.js v24.19.0. The lesson original main.ts was not supplied, so the labs are our own implementation, and the MCP, A2A, ACP and ANP material is modelled in one process with no real server, no network, no HPKE encryption and no live search. The lesson text for this part stops mid-delegation, and TaskManager and ProtocolGateway here are our own models of the described design, so the ordering weakness shown is reproduced in our model and not copied from lesson output. This lesson replaces the earlier placeholder at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: TypeScript (Node.js 24, ಯಾವುದೇ package ಇಲ್ಲ; ಲ್ಯಾಬ್ import ಬಳಸುವುದರಿಂದ Node stderr ನಲ್ಲಿ ಹಾನಿರಹಿತ module-type ಎಚ್ಚರಿಕೆ ಮುದ್ರಿಸುತ್ತದೆ) · ಸಮಯ: ~120 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 3ನೆಯದು: ಗುರುತು ಪರಿಶೀಲಿಸಿ, ಏಜೆಂಟ್ ಹುಡುಕಿ, audit ಮಾಡಿ ನಿಯೋಜಿಸುವ gateway, audit-ಕ್ರಮ ದೌರ್ಬಲ್ಯ, ಹಂಚಿಕೆಯ trajectory ಪಟ್ಟಿ, ಪ್ರತಿ-ಕೆಲಸ trajectory, ನಿರಾಕರಣೆಗಳು, ಮರುಪ್ರಸಾರ ಮತ್ತು ಬಂಧಿತ ಸಹಿ, ಹಾಗೂ ಪೂರ್ಣಗೊಂಡ audit ಪಕ್ಕದಲ್ಲಿ ವಿಫಲ ಕೆಲಸ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Node.js v24.19.0 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. lesson ನ ಮೂಲ main.ts ನೀಡಲಾಗಿಲ್ಲ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ನಮ್ಮದೇ ಅನುಷ್ಠಾನ, ಮತ್ತು MCP, A2A, ACP ಹಾಗೂ ANP ವಿಷಯವನ್ನು ಒಂದೇ ಪ್ರಕ್ರಿಯೆಯಲ್ಲಿ ಮಾದರಿ ಮಾಡಲಾಗಿದೆ, ನಿಜವಾದ ಸರ್ವರ್, ಜಾಲ, HPKE ಎನ್‌ಕ್ರಿಪ್ಷನ್ ಅಥವಾ ನೇರ ಹುಡುಕಾಟ ಇಲ್ಲ. ಈ ಭಾಗದ lesson ಪಠ್ಯ ನಿಯೋಜನೆಯ ಮಧ್ಯದಲ್ಲಿ ನಿಲ್ಲುತ್ತದೆ, ಮತ್ತು ಇಲ್ಲಿನ TaskManager ಹಾಗೂ ProtocolGateway ವಿವರಿಸಿದ ವಿನ್ಯಾಸದ ನಮ್ಮದೇ ಮಾದರಿಗಳು, ಆದ್ದರಿಂದ ತೋರಿಸಿದ ಕ್ರಮ ದೌರ್ಬಲ್ಯ ನಮ್ಮ ಮಾದರಿಯಲ್ಲಿ ಪುನರುತ್ಪಾದಿತವಾಗಿದ್ದು lesson output ನಿಂದ ನಕಲಿಸಿದ್ದಲ್ಲ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ placeholder ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Wiring It Together Shows What Each Piece Misses",
    "textKn": "ಒಟ್ಟಿಗೆ ಜೋಡಿಸಿದಾಗ ಪ್ರತಿ ತುಣುಕು ಏನನ್ನು ತಪ್ಪಿಸುತ್ತದೆ ಎಂದು ತಿಳಿಯುತ್ತದೆ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "One Gateway, Six Experiments",
    "headingKn": "ಒಂದು Gateway, ಆರು ಪ್ರಯೋಗಗಳು",
    "bodyEn": "The last step of the lesson joins discovery, an identity check, an audit run and an asynchronous task behind one gateway. This part builds that gateway as our own model and runs it six ways: the lesson ordering, in which the audit entry is taken before the task has done its work, two concurrent tasks writing to one shared trajectory list, a per-task list audited after completion, refusals that must leave nothing behind, a replayed signature against a signature that binds the body, target and a one-time nonce, and a failing task whose audit entry still says completed.",
    "bodyKn": "lesson ನ ಕೊನೆಯ ಹಂತ ಅನ್ವೇಷಣೆ, ಗುರುತು ಪರಿಶೀಲನೆ, audit ಓಟ ಮತ್ತು ಅಸಮಕಾಲಿಕ ಕೆಲಸವನ್ನು ಒಂದು gateway ಹಿಂದೆ ಜೋಡಿಸುತ್ತದೆ. ಈ ಭಾಗವು ಆ gateway ಅನ್ನು ನಮ್ಮದೇ ಮಾದರಿಯಾಗಿ ನಿರ್ಮಿಸಿ ಆರು ರೀತಿಯಲ್ಲಿ ಓಡಿಸುತ್ತದೆ: lesson ನ ಕ್ರಮ, ಅದರಲ್ಲಿ ಕೆಲಸ ತನ್ನ ಕೆಲಸ ಮಾಡುವ ಮೊದಲೇ audit ನಮೂದು ತೆಗೆಯಲಾಗುತ್ತದೆ, ಒಂದು ಹಂಚಿಕೆಯ trajectory ಪಟ್ಟಿಗೆ ಬರೆಯುವ ಎರಡು ಏಕಕಾಲಿಕ ಕೆಲಸಗಳು, ಪೂರ್ಣಗೊಂಡ ನಂತರ audit ಮಾಡಿದ ಪ್ರತಿ-ಕೆಲಸ ಪಟ್ಟಿ, ಏನನ್ನೂ ಬಿಡಬಾರದ ನಿರಾಕರಣೆಗಳು, ಮರುಪ್ರಸಾರವಾದ ಸಹಿ ಮತ್ತು body, ಗುರಿ ಹಾಗೂ ಒಂದು-ಬಾರಿ nonce ಅನ್ನು ಬಂಧಿಸುವ ಸಹಿ, ಮತ್ತು audit ನಮೂದು ಇನ್ನೂ completed ಎನ್ನುವ ವಿಫಲ ಕೆಲಸ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "The Protocol Gateway",
    "headingKn": "Protocol Gateway",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">the order of the gateway steps decides what a refusal leaves behind</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">verify</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">who is asking</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">discover</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">who can do it</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">audit</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">record the run</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">delegate</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">start the task</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">the order of the gateway steps decides what a refusal leaves behind</text></svg>",
    "captionEn": "Identity first, then discovery, then audit, then delegation.",
    "captionKn": "ಮೊದಲು ಗುರುತು, ನಂತರ ಅನ್ವೇಷಣೆ, ನಂತರ audit, ನಂತರ ನಿಯೋಜನೆ."
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
      "lesson order",
      "audit before the task has worked, and the status of each"
     ],
     [
      "shared list",
      "two tasks, one trajectory array"
     ],
     [
      "per-task list",
      "audit after completion with that task own steps"
     ],
     [
      "refusals",
      "wrong signer and unknown agent leave no task or audit entry"
     ],
     [
      "replay",
      "id-only signature against a bound signature with a nonce"
     ],
     [
      "failure",
      "audit completed while the task failed"
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
    "filename": "cp_3.ts",
    "headingEn": "The audit runner and task manager",
    "headingKn": "Audit ರನ್ನರ್ ಮತ್ತು task manager",
    "descEn": "AuditRunner copies whatever its handler returns at the moment it runs, and TaskManager starts a task in the background and lets a caller wait for it.",
    "descKn": "AuditRunner ತನ್ನ handler ಓಡುವ ಕ್ಷಣದಲ್ಲಿ ಅದು ಹಿಂದಿರುಗಿಸುವುದನ್ನು ನಕಲಿಸುತ್ತದೆ, ಮತ್ತು TaskManager ಕೆಲಸವನ್ನು ಹಿನ್ನೆಲೆಯಲ್ಲಿ ಆರಂಭಿಸಿ ಕರೆದವನು ಅದಕ್ಕಾಗಿ ಕಾಯಲು ಅವಕಾಶ ನೀಡುತ್ತದೆ.",
    "code": "class AuditRunner {\r\n  log: AuditEntry[] = [];\r\n  handlers = new Map<string, () => Promise<Traj[]>>();\r\n  async run(agent: string): Promise<AuditEntry> {\r\n    const handler = this.handlers.get(agent);\r\n    if (!handler) { const e: AuditEntry = { agent, status: \"failed\", trajectory: [] }; this.log.push(e); return e; }\r\n    const entry: AuditEntry = { agent, status: \"completed\", trajectory: structuredClone(await handler()) };\r\n    this.log.push(entry);\r\n    return entry;\r\n  }\r\n}\r\n\r\nclass TaskManager {\r\n  tasks = new Map<string, Task>();\r\n  handlers = new Map<string, (task: Task) => AsyncGenerator<{ status?: TState; artifact?: boolean }>>();\r\n  running = new Map<string, Promise<void>>();\r\n  async sendMessage(agent: string): Promise<Task> {\r\n    const task: Task = { id: crypto.randomUUID(), state: \"TASK_STATE_SUBMITTED\", artifacts: 0 };\r\n    this.tasks.set(task.id, task);\r\n    const handler = this.handlers.get(agent);\r\n    if (!handler) { task.state = \"TASK_STATE_FAILED\"; return task; }\r\n    this.running.set(task.id, this.process(task, handler));\r\n    return task;\r\n  }\r\n  async process(task: Task, handler: (t: Task) => AsyncGenerator<{ status?: TState; artifact?: boolean }>) {\r\n    try {\r\n      for await (const ev of handler(task)) {\r\n        if (task.state === \"TASK_STATE_COMPLETED\" || task.state === \"TASK_STATE_FAILED\") continue;\r\n        if (ev.status) task.state = ev.status;\r\n        if (ev.artifact) task.artifacts++;\r\n      }\r\n    } catch { task.state = \"TASK_STATE_FAILED\"; }\r\n  }\r\n  async waitFor(id: string) { await this.running.get(id); return this.tasks.get(id) as Task; }\r\n}"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "cp_3.ts",
    "headingEn": "Identity and the gateway",
    "headingKn": "ಗುರುತು ಮತ್ತು gateway",
    "descEn": "delegate checks the signature, then the agent name, then audits and sends the task, and delegateBound signs the body, target and nonce and refuses a reused nonce.",
    "descKn": "delegate ಸಹಿ, ನಂತರ ಏಜೆಂಟ್ ಹೆಸರು ಪರಿಶೀಲಿಸಿ, ನಂತರ audit ಮಾಡಿ ಕೆಲಸ ಕಳುಹಿಸುತ್ತದೆ, ಮತ್ತು delegateBound body, ಗುರಿ ಹಾಗೂ nonce ಗೆ ಸಹಿ ಮಾಡಿ ಮರುಬಳಕೆಯ nonce ನಿರಾಕರಿಸುತ್ತದೆ.",
    "code": "type Identity = { did: string; privateKey: crypto.KeyObject; publicKey: crypto.KeyObject };\r\nfunction createIdentity(name: string): Identity {\r\n  const { publicKey, privateKey } = crypto.generateKeyPairSync(\"ed25519\");\r\n  return { did: `did:wba:${name}.local:agent:${name}`, privateKey, publicKey };\r\n}\r\nconst sign = (id: Identity, payload: string) => crypto.sign(null, Buffer.from(payload), id.privateKey).toString(\"hex\");\r\nclass Keys {\r\n  keys = new Map<string, crypto.KeyObject>();\r\n  publish(id: Identity) { this.keys.set(id.did, id.publicKey); }\r\n  verify(did: string, signature: string, payload: string) {\r\n    const key = this.keys.get(did);\r\n    return key ? crypto.verify(null, Buffer.from(payload), key, Buffer.from(signature, \"hex\")) : false;\r\n  }\r\n}\r\n\r\nclass ProtocolGateway {\r\n  names: Set<string>; tm: TaskManager; audit: AuditRunner; keys: Keys; seen = new Set<string>();\r\n  constructor(names: Set<string>, tm: TaskManager, audit: AuditRunner, keys: Keys) { this.names = names; this.tm = tm; this.audit = audit; this.keys = keys; }\r\n  async delegate(did: string, signature: string, target: string, message: AgentMessage) {\r\n    if (!this.keys.verify(did, signature, message.id)) return { error: \"Signature verification failed\" };\r\n    if (!this.names.has(target)) return { error: \"Unknown agent\" };\r\n    const audit = await this.audit.run(target);\r\n    const task = await this.tm.sendMessage(target);\r\n    return { audit, task };\r\n  }\r\n  // Our extension: the signature binds the body, target and a nonce, and a nonce can be used once.\r\n  async delegateBound(did: string, signature: string, target: string, body: string, nonce: string) {\r\n    const canonical = JSON.stringify({ body, target, nonce });\r\n    if (!this.keys.verify(did, signature, canonical)) return { error: \"Signature verification failed\" };\r\n    if (this.seen.has(nonce)) return { error: \"Replay rejected\" };\r\n    this.seen.add(nonce);\r\n    return { ok: true };\r\n  }\r\n}"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "cp_3.ts",
    "headingEn": "The experiments",
    "headingKn": "ಪ್ರಯೋಗಗಳು",
    "descEn": "main() wires one gateway and runs the six experiments in order.",
    "descKn": "main() ಒಂದು gateway ಜೋಡಿಸಿ ಆರು ಪ್ರಯೋಗಗಳನ್ನು ಕ್ರಮವಾಗಿ ಓಡಿಸುತ್ತದೆ.",
    "code": "async function main() {\r\n  const shared: Traj[] = [];\r\n  const tm = new TaskManager();\r\n  const audit = new AuditRunner();\r\n  tm.handlers.set(\"researcher\", async function* (task) {\r\n    yield { status: \"TASK_STATE_WORKING\" };\r\n    await sleep(5);\r\n    shared.push({ reasoning: \"search\", toolName: \"web_search\", taskId: task.id });\r\n    await sleep(5);\r\n    shared.push({ reasoning: \"analyse\", toolName: \"doc_analysis\", taskId: task.id });\r\n    yield { artifact: true };\r\n    yield { status: \"TASK_STATE_COMPLETED\" };\r\n  });\r\n  audit.handlers.set(\"researcher\", async () => shared);\r\n  const keys = new Keys();\r\n  const coder = createIdentity(\"coder\");\r\n  keys.publish(coder);\r\n  const gateway = new ProtocolGateway(new Set([\"researcher\", \"coder\"]), tm, audit, keys);\r\n\r\n  section(\"1. Genuinely running: the delegation and what each status really says\");\r\n  const m1 = newMessage(\"Research React 19\");\r\n  const r1 = await gateway.delegate(coder.did, sign(coder, m1.id), \"researcher\", m1) as { audit: AuditEntry; task: Task };\r\n  console.log(\"right after delegation: audit status\", r1.audit.status, \"| audit steps\", r1.audit.trajectory.length, \"| task state\", r1.task.state);\r\n  const done = await tm.waitFor(r1.task.id);\r\n  console.log(\"after waiting: task state\", done.state, \"| artifacts\", done.artifacts, \"| shared trajectory now\", shared.length, \"| stored audit steps\", audit.log[0].trajectory.length);\r\n  console.log(\"the audit run finished first and copied an empty trajectory, the task had only just started working at that moment and completed later with two steps in the shared list, so the audit record says completed with no steps while the real work had not finished; the audit status describes the audit handler and not the task.\");\r\n\r\n  section(\"2. Genuinely running: two tasks writing to one shared trajectory list\");\r\n  shared.length = 0;\r\n  const m2 = newMessage(\"task A\"), m3 = newMessage(\"task B\");\r\n  const ra = await gateway.delegate(coder.did, sign(coder, m2.id), \"researcher\", m2) as { task: Task };\r\n  const rb = await gateway.delegate(coder.did, sign(coder, m3.id), \"researcher\", m3) as { task: Task };\r\n  await tm.waitFor(ra.task.id); await tm.waitFor(rb.task.id);\r\n  const perTask = new Map<string, number>();\r\n  for (const t of shared) perTask.set(t.taskId as string, (perTask.get(t.taskId as string) || 0) + 1);\r\n  console.log(\"entries in the one shared list:\", shared.length, \"| entries per task id:\", [...perTask.values()].join(\", \"), \"| unattributed without the task id field:\", shared.length);\r\n  console.log(\"two concurrent tasks produced four entries in a single list, so a reader of the list alone cannot say which entries belong to which task; the lab only knows because each entry also carries a task id, and the lesson shared array has no such field.\");\r\n\r\n  section(\"3. Genuinely running: a trajectory kept per task, audited after completion\");\r\n  const perTaskLog = new Map<string, Traj[]>();\r\n  tm.handlers.set(\"researcher\", async function* (task) {\r\n    yield { status: \"TASK_STATE_WORKING\" };\r\n    await sleep(5);\r\n    perTaskLog.set(task.id, [{ reasoning: \"search\" }, { reasoning: \"analyse\" }]);\r\n    yield { artifact: true };\r\n    yield { status: \"TASK_STATE_COMPLETED\" };\r\n  });\r\n  const m4 = newMessage(\"task C\");\r\n  const rc = await gateway.delegate(coder.did, sign(coder, m4.id), \"researcher\", m4) as { task: Task };\r\n  await tm.waitFor(rc.task.id);\r\n  audit.handlers.set(\"researcher\", async () => perTaskLog.get(rc.task.id) as Traj[]);\r\n  const late = await audit.run(\"researcher\");\r\n  console.log(\"audit taken after completion: status\", late.status, \"| steps\", late.trajectory.length, \"| task state\", tm.tasks.get(rc.task.id)?.state);\r\n  console.log(\"taking the audit entry after the task finished and reading that task own list gives two steps that match the completed task, so the fix for the empty record is to audit after completion and to keep one trajectory per task, not a shared array.\");\r\n\r\n  section(\"4. Genuinely running: refusals create no task\");\r\n  const before = tm.tasks.size, logBefore = audit.log.length;\r\n  const stranger = createIdentity(\"stranger\");\r\n  const m5 = newMessage(\"hello\");\r\n  const bad = await gateway.delegate(coder.did, sign(stranger, m5.id), \"researcher\", m5);\r\n  const unknown = await gateway.delegate(coder.did, sign(coder, m5.id), \"planner\", m5);\r\n  console.log(\"wrong signer:\", \"error\" in bad ? bad.error : \"accepted\", \"| unknown agent:\", \"error\" in unknown ? unknown.error : \"accepted\");\r\n  console.log(\"tasks created:\", tm.tasks.size - before, \"| audit entries added:\", audit.log.length - logBefore);\r\n  console.log(\"a signature from the wrong key and a request for an agent that is not registered were both refused before anything ran, so no task and no audit entry was created; the order of checks in the gateway is what keeps a refused request from leaving side effects.\");\r\n\r\n  section(\"5. Genuinely running: replay, and a signature that binds the request\");\r\n  const m6 = newMessage(\"Research React 19\");\r\n  const sigId = sign(coder, m6.id);\r\n  const first = await gateway.delegate(coder.did, sigId, \"researcher\", m6) as { task: Task };\r\n  const again = await gateway.delegate(coder.did, sigId, \"researcher\", { ...m6, body: \"Delete everything\" }) as { task: Task };\r\n  console.log(\"same signature used twice with a changed body:\", first.task.id !== again.task.id ? \"two tasks created\" : \"one task\");\r\n  const nonce = crypto.randomUUID();\r\n  const canonical = JSON.stringify({ body: \"Research React 19\", target: \"researcher\", nonce });\r\n  const sigBound = sign(coder, canonical);\r\n  console.log(\"bound request:\", await gateway.delegateBound(coder.did, sigBound, \"researcher\", \"Research React 19\", nonce));\r\n  console.log(\"replayed:\", await gateway.delegateBound(coder.did, sigBound, \"researcher\", \"Research React 19\", nonce));\r\n  console.log(\"body changed:\", await gateway.delegateBound(coder.did, sigBound, \"researcher\", \"Delete everything\", nonce));\r\n  console.log(\"the lesson style signature over the id alone accepted the same signature twice and with a different body, creating two tasks, while signing the body, target and a one-time nonce accepted the first use and refused both the replay and the changed body; the seen-nonce set lives in memory, so it is lost on restart.\");\r\n\r\n  section(\"6. Genuinely running: a failing task next to a completed audit\");\r\n  tm.handlers.set(\"researcher\", async function* () { yield { status: \"TASK_STATE_WORKING\" }; throw new Error(\"search tool unavailable\"); });\r\n  audit.handlers.set(\"researcher\", async () => []);\r\n  const m7 = newMessage(\"will fail\");\r\n  const r7 = await gateway.delegate(coder.did, sign(coder, m7.id), \"researcher\", m7) as { audit: AuditEntry; task: Task };\r\n  const end = await tm.waitFor(r7.task.id);\r\n  console.log(\"audit status:\", r7.audit.status, \"| task state:\", end.state);\r\n  console.log(\"the audit entry says completed while the task ended failed, because they describe two different executions, so a dashboard or a reviewer that reads only the audit status would report success for work that failed; the two records have to be linked and checked together.\");\r\n}"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: the delegation and what each status really says ---\nright after delegation: audit status completed | audit steps 0 | task state TASK_STATE_WORKING\nafter waiting: task state TASK_STATE_COMPLETED | artifacts 1 | shared trajectory now 2 | stored audit steps 0\nthe audit run finished first and copied an empty trajectory, the task had only just started working at that moment and completed later with two steps in the shared list, so the audit record says completed with no steps while the real work had not finished; the audit status describes the audit handler and not the task.\n\n--- 2. Genuinely running: two tasks writing to one shared trajectory list ---\nentries in the one shared list: 4 | entries per task id: 2, 2 | unattributed without the task id field: 4\ntwo concurrent tasks produced four entries in a single list, so a reader of the list alone cannot say which entries belong to which task; the lab only knows because each entry also carries a task id, and the lesson shared array has no such field.\n\n--- 3. Genuinely running: a trajectory kept per task, audited after completion ---\naudit taken after completion: status completed | steps 2 | task state TASK_STATE_COMPLETED\ntaking the audit entry after the task finished and reading that task own list gives two steps that match the completed task, so the fix for the empty record is to audit after completion and to keep one trajectory per task, not a shared array.\n\n--- 4. Genuinely running: refusals create no task ---\nwrong signer: Signature verification failed | unknown agent: Unknown agent\ntasks created: 0 | audit entries added: 0\na signature from the wrong key and a request for an agent that is not registered were both refused before anything ran, so no task and no audit entry was created; the order of checks in the gateway is what keeps a refused request from leaving side effects.\n\n--- 5. Genuinely running: replay, and a signature that binds the request ---\nsame signature used twice with a changed body: two tasks created\nbound request: { ok: true }\nreplayed: { error: 'Replay rejected' }\nbody changed: { error: 'Signature verification failed' }\nthe lesson style signature over the id alone accepted the same signature twice and with a different body, creating two tasks, while signing the body, target and a one-time nonce accepted the first use and refused both the replay and the changed body; the seen-nonce set lives in memory, so it is lost on restart.\n\n--- 6. Genuinely running: a failing task next to a completed audit ---\naudit status: completed | task state: TASK_STATE_FAILED\nthe audit entry says completed while the task ended failed, because they describe two different executions, so a dashboard or a reviewer that reads only the audit status would report success for work that failed; the two records have to be linked and checked together."
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
    "headingEn": "Experiment 1: The delegation and what each status really says",
    "headingKn": "ಪ್ರಯೋಗ 1: The delegation and what each status really says",
    "bodyEn": "What it ran: The delegation and what each status really says. What the lab concluded: the audit run finished first and copied an empty trajectory, the task had only just started working at that moment and completed later with two steps in the shared list, so the audit record says completed with no steps while the real work had not finished; the audit status describes the audit handler and not the task.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: The delegation and what each status really says. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the audit run finished first and copied an empty trajectory, the task had only just started working at that moment and completed later with two steps in the shared list, so the audit record says completed with no steps while the real work had not finished; the audit status describes the audit handler and not the task."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. Genuinely running: the delegation and what each status really says ---\nright after delegation: audit status completed | audit steps 0 | task state TASK_STATE_WORKING\nafter waiting: task state TASK_STATE_COMPLETED | artifacts 1 | shared trajectory now 2 | stored audit steps 0"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: Two tasks writing to one shared trajectory list",
    "headingKn": "ಪ್ರಯೋಗ 2: Two tasks writing to one shared trajectory list",
    "bodyEn": "What it ran: Two tasks writing to one shared trajectory list. What the lab concluded: two concurrent tasks produced four entries in a single list, so a reader of the list alone cannot say which entries belong to which task; the lab only knows because each entry also carries a task id, and the lesson shared array has no such field.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Two tasks writing to one shared trajectory list. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): two concurrent tasks produced four entries in a single list, so a reader of the list alone cannot say which entries belong to which task; the lab only knows because each entry also carries a task id, and the lesson shared array has no such field."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely running: two tasks writing to one shared trajectory list ---\nentries in the one shared list: 4 | entries per task id: 2, 2 | unattributed without the task id field: 4"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: A trajectory kept per task, audited after completion",
    "headingKn": "ಪ್ರಯೋಗ 3: A trajectory kept per task, audited after completion",
    "bodyEn": "What it ran: A trajectory kept per task, audited after completion. What the lab concluded: taking the audit entry after the task finished and reading that task own list gives two steps that match the completed task, so the fix for the empty record is to audit after completion and to keep one trajectory per task, not a shared array.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A trajectory kept per task, audited after completion. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): taking the audit entry after the task finished and reading that task own list gives two steps that match the completed task, so the fix for the empty record is to audit after completion and to keep one trajectory per task, not a shared array."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely running: a trajectory kept per task, audited after completion ---\naudit taken after completion: status completed | steps 2 | task state TASK_STATE_COMPLETED"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 4: Refusals create no task",
    "headingKn": "ಪ್ರಯೋಗ 4: Refusals create no task",
    "bodyEn": "What it ran: Refusals create no task. What the lab concluded: a signature from the wrong key and a request for an agent that is not registered were both refused before anything ran, so no task and no audit entry was created; the order of checks in the gateway is what keeps a refused request from leaving side effects.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Refusals create no task. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a signature from the wrong key and a request for an agent that is not registered were both refused before anything ran, so no task and no audit entry was created; the order of checks in the gateway is what keeps a refused request from leaving side effects."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 4. Genuinely running: refusals create no task ---\nwrong signer: Signature verification failed | unknown agent: Unknown agent\ntasks created: 0 | audit entries added: 0"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 5: Replay, and a signature that binds the request",
    "headingKn": "ಪ್ರಯೋಗ 5: Replay, and a signature that binds the request",
    "bodyEn": "What it ran: Replay, and a signature that binds the request. What the lab concluded: the lesson style signature over the id alone accepted the same signature twice and with a different body, creating two tasks, while signing the body, target and a one-time nonce accepted the first use and refused both the replay and the changed body; the seen-nonce set lives in memory, so it is lost on restart.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Replay, and a signature that binds the request. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the lesson style signature over the id alone accepted the same signature twice and with a different body, creating two tasks, while signing the body, target and a one-time nonce accepted the first use and refused both the replay and the changed body; the seen-nonce set lives in memory, so it is lost on restart."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 5. Genuinely running: replay, and a signature that binds the request ---\nsame signature used twice with a changed body: two tasks created\nbound request: { ok: true }\nreplayed: { error: 'Replay rejected' }\nbody changed: { error: 'Signature verification failed' }"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 6: A failing task next to a completed audit",
    "headingKn": "ಪ್ರಯೋಗ 6: A failing task next to a completed audit",
    "bodyEn": "What it ran: A failing task next to a completed audit. What the lab concluded: the audit entry says completed while the task ended failed, because they describe two different executions, so a dashboard or a reviewer that reads only the audit status would report success for work that failed; the two records have to be linked and checked together.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A failing task next to a completed audit. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the audit entry says completed while the task ended failed, because they describe two different executions, so a dashboard or a reviewer that reads only the audit status would report success for work that failed; the two records have to be linked and checked together."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 6. Genuinely running: a failing task next to a completed audit ---\naudit status: completed | task state: TASK_STATE_FAILED"
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
    "headingEn": "Genuinely Found: Ordering and the Shared List",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಕ್ರಮ ಮತ್ತು ಹಂಚಿಕೆಯ ಪಟ್ಟಿ",
    "bodyEn": "Section 1: right after delegation the audit status was completed with 0 steps while the task was TASK_STATE_WORKING, and after waiting the task was TASK_STATE_COMPLETED with 1 artifact, the shared list held 2 entries and the stored audit still had 0 steps. Section 2: two concurrent tasks put 4 entries in one list, 2 for each task id. Section 3: auditing after completion from that task own list gave 2 steps and a completed task.",
    "bodyKn": "ವಿಭಾಗ 1: ನಿಯೋಜನೆಯ ತಕ್ಷಣ ಕೆಲಸ TASK_STATE_WORKING ಆಗಿದ್ದಾಗ audit ಸ್ಥಿತಿ 0 ಹಂತಗಳೊಂದಿಗೆ completed ಆಗಿತ್ತು, ಮತ್ತು ಕಾಯ್ದ ನಂತರ ಕೆಲಸ 1 artifact ನೊಂದಿಗೆ TASK_STATE_COMPLETED ಆಗಿತ್ತು, ಹಂಚಿಕೆಯ ಪಟ್ಟಿ 2 ನಮೂದುಗಳನ್ನು ಹೊಂದಿತ್ತು ಮತ್ತು ಸಂಗ್ರಹಿತ audit ಇನ್ನೂ 0 ಹಂತಗಳನ್ನು ಹೊಂದಿತ್ತು. ವಿಭಾಗ 2: ಎರಡು ಏಕಕಾಲಿಕ ಕೆಲಸಗಳು ಒಂದು ಪಟ್ಟಿಯಲ್ಲಿ 4 ನಮೂದುಗಳನ್ನು ಹಾಕಿದವು, ಪ್ರತಿ ಕೆಲಸ id ಗೆ 2. ವಿಭಾಗ 3: ಆ ಕೆಲಸದ ಸ್ವಂತ ಪಟ್ಟಿಯಿಂದ ಪೂರ್ಣಗೊಂಡ ನಂತರ audit ಮಾಡಿದಾಗ 2 ಹಂತಗಳು ಮತ್ತು ಪೂರ್ಣಗೊಂಡ ಕೆಲಸ ಸಿಕ್ಕಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Refusals, Replay and Failure",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ನಿರಾಕರಣೆಗಳು, ಮರುಪ್ರಸಾರ ಮತ್ತು ವೈಫಲ್ಯ",
    "bodyEn": "Section 4: a wrong signer gave Signature verification failed and an unknown agent gave Unknown agent, with 0 tasks and 0 audit entries created. Section 5: the id-only signature created two tasks when reused with a different body, while the bound request was accepted once, the replay gave Replay rejected and the changed body gave Signature verification failed. Section 6: the audit status was completed while the task state was TASK_STATE_FAILED.",
    "bodyKn": "ವಿಭಾಗ 4: ತಪ್ಪು ಸಹಿದಾರ Signature verification failed ನೀಡಿದನು ಮತ್ತು ಅಜ್ಞಾತ ಏಜೆಂಟ್ Unknown agent ನೀಡಿತು, 0 ಕೆಲಸಗಳು ಮತ್ತು 0 audit ನಮೂದುಗಳು ರಚಿಸಲ್ಪಟ್ಟವು. ವಿಭಾಗ 5: id-ಮಾತ್ರದ ಸಹಿ ಬೇರೆ body ಯೊಂದಿಗೆ ಮರುಬಳಸಿದಾಗ ಎರಡು ಕೆಲಸಗಳನ್ನು ರಚಿಸಿತು, ಆದರೆ ಬಂಧಿತ ವಿನಂತಿ ಒಮ್ಮೆ ಒಪ್ಪಲ್ಪಟ್ಟಿತು, ಮರುಪ್ರಸಾರ Replay rejected ನೀಡಿತು ಮತ್ತು ಬದಲಾದ body Signature verification failed ನೀಡಿತು. ವಿಭಾಗ 6: ಕೆಲಸ ಸ್ಥಿತಿ TASK_STATE_FAILED ಆಗಿದ್ದಾಗ audit ಸ್ಥಿತಿ completed ಆಗಿತ್ತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "Wiring four pieces together produces failure modes that none of them has alone, in particular a record that is taken at the wrong moment and two statuses that describe different things, and both are found only by running the whole flow.",
    "bodyKn": "ನಾಲ್ಕು ತುಣುಕುಗಳನ್ನು ಜೋಡಿಸಿದಾಗ ಯಾವುದಕ್ಕೂ ಒಂಟಿಯಾಗಿ ಇಲ್ಲದ ವೈಫಲ್ಯ ವಿಧಾನಗಳು ಹುಟ್ಟುತ್ತವೆ, ವಿಶೇಷವಾಗಿ ತಪ್ಪು ಕ್ಷಣದಲ್ಲಿ ತೆಗೆದ ದಾಖಲೆ ಮತ್ತು ಬೇರೆ ಬೇರೆ ವಿಷಯ ವಿವರಿಸುವ ಎರಡು ಸ್ಥಿತಿಗಳು, ಮತ್ತು ಎರಡೂ ಇಡೀ ಹರಿವನ್ನು ಓಡಿಸಿದಾಗ ಮಾತ್ರ ಕಾಣುತ್ತವೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"the audit entry says completed, so the work succeeded.\" In the lab it said completed while the task was still working and again after the task failed.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"audit ನಮೂದು completed ಎನ್ನುತ್ತದೆ, ಆದ್ದರಿಂದ ಕೆಲಸ ಯಶಸ್ವಿಯಾಯಿತು.\" ಲ್ಯಾಬ್‌ನಲ್ಲಿ ಕೆಲಸ ಇನ್ನೂ ನಡೆಯುತ್ತಿರುವಾಗ ಮತ್ತು ಕೆಲಸ ವಿಫಲವಾದ ನಂತರವೂ ಅದು completed ಎಂದಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Gateway: one controlled entry point. Nonce: a one-time value that makes a request unrepeatable. Replay: sending a valid request again. Shared mutable state: one list several tasks write to. Asynchronous task: work that continues after the call returns.",
    "bodyKn": "Gateway: ಒಂದು ನಿಯಂತ್ರಿತ ಪ್ರವೇಶ ಬಿಂದು. Nonce: ವಿನಂತಿಯನ್ನು ಪುನರಾವರ್ತಿಸಲಾಗದಂತೆ ಮಾಡುವ ಒಂದು-ಬಾರಿ ಮೌಲ್ಯ. Replay: ಮಾನ್ಯ ವಿನಂತಿಯನ್ನು ಮತ್ತೆ ಕಳುಹಿಸುವುದು. ಹಂಚಿಕೆಯ ಬದಲಾಗುವ ಸ್ಥಿತಿ: ಹಲವು ಕೆಲಸಗಳು ಬರೆಯುವ ಒಂದು ಪಟ್ಟಿ. ಅಸಮಕಾಲಿಕ ಕೆಲಸ: ಕರೆ ಹಿಂದಿರುಗಿದ ನಂತರವೂ ಮುಂದುವರಿಯುವ ಕೆಲಸ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) The audit entry had 0 steps while the task was still working. 2) Two tasks put 4 entries in one shared list. 3) Refusals created no task and no audit entry. 4) A replayed id-only signature created a second task and a bound nonce refused it. 5) The audit said completed for a failed task.",
    "bodyKn": "1) ಕೆಲಸ ಇನ್ನೂ ನಡೆಯುತ್ತಿರುವಾಗ audit ನಮೂದಿಗೆ 0 ಹಂತಗಳಿದ್ದವು. 2) ಎರಡು ಕೆಲಸಗಳು ಒಂದು ಹಂಚಿಕೆಯ ಪಟ್ಟಿಯಲ್ಲಿ 4 ನಮೂದುಗಳನ್ನು ಹಾಕಿದವು. 3) ನಿರಾಕರಣೆಗಳು ಯಾವ ಕೆಲಸ ಮತ್ತು audit ನಮೂದನ್ನೂ ರಚಿಸಲಿಲ್ಲ. 4) ಮರುಪ್ರಸಾರವಾದ id-ಮಾತ್ರದ ಸಹಿ ಎರಡನೇ ಕೆಲಸ ರಚಿಸಿತು ಮತ್ತು ಬಂಧಿತ nonce ಅದನ್ನು ನಿರಾಕರಿಸಿತು. 5) ವಿಫಲ ಕೆಲಸಕ್ಕೂ audit completed ಎಂದಿತು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "How many audit steps did the entry have right after delegation?",
      "qKn": "ನಿಯೋಜನೆಯ ತಕ್ಷಣ audit ನಮೂದಿಗೆ ಎಷ್ಟು ಹಂತಗಳಿದ್ದವು?",
      "opts": [
       "0",
       "2",
       "1",
       "4"
      ],
      "optsKn": [
       "0",
       "2",
       "1",
       "4"
      ],
      "correct": 0
     },
     {
      "q": "How many entries did two concurrent tasks put in the shared list?",
      "qKn": "ಎರಡು ಏಕಕಾಲಿಕ ಕೆಲಸಗಳು ಹಂಚಿಕೆಯ ಪಟ್ಟಿಯಲ್ಲಿ ಎಷ್ಟು ನಮೂದುಗಳನ್ನು ಹಾಕಿದವು?",
      "opts": [
       "4",
       "2",
       "1",
       "8"
      ],
      "optsKn": [
       "4",
       "2",
       "1",
       "8"
      ],
      "correct": 0
     },
     {
      "q": "What did the gateway create when the signer was wrong?",
      "qKn": "ಸಹಿದಾರ ತಪ್ಪಾಗಿದ್ದಾಗ gateway ಏನು ರಚಿಸಿತು?",
      "opts": [
       "Nothing, no task and no audit entry",
       "A failed task",
       "An audit entry only",
       "A task only"
      ],
      "optsKn": [
       "ಏನೂ ಇಲ್ಲ, ಕೆಲಸ ಅಥವಾ audit ನಮೂದು ಇಲ್ಲ",
       "ವಿಫಲ ಕೆಲಸ",
       "audit ನಮೂದು ಮಾತ್ರ",
       "ಕೆಲಸ ಮಾತ್ರ"
      ],
      "correct": 0
     },
     {
      "q": "What happened to the replayed bound request?",
      "qKn": "ಮರುಪ್ರಸಾರವಾದ ಬಂಧಿತ ವಿನಂತಿಗೆ ಏನಾಯಿತು?",
      "opts": [
       "Replay rejected",
       "It was accepted again",
       "It created a task",
       "It was signed again"
      ],
      "optsKn": [
       "Replay rejected",
       "ಅದು ಮತ್ತೆ ಒಪ್ಪಲ್ಪಟ್ಟಿತು",
       "ಅದು ಕೆಲಸ ರಚಿಸಿತು",
       "ಅದಕ್ಕೆ ಮತ್ತೆ ಸಹಿ ಆಯಿತು"
      ],
      "correct": 0
     },
     {
      "q": "What state did the failing task end in while its audit said completed?",
      "qKn": "audit completed ಎಂದಾಗ ವಿಫಲ ಕೆಲಸ ಯಾವ ಸ್ಥಿತಿಯಲ್ಲಿ ಮುಗಿಯಿತು?",
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
     }
    ]
   }
  }
 ]
};
