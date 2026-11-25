module.exports = {
 "phaseId": "6a369d6466020ed05b3215d1",
 "moduleId": "6a369d6566020ed05b3215dd",
 "order": 1,
 "type": "interactive",
 "duration": 120,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Communication Protocols (Part 2 of 3) — Audit Trails and Identity",
 "titleKn": "ಸಂವಹನ ಪ್ರೋಟೋಕಾಲ್‌ಗಳು (ಭಾಗ 2 / 3) — Audit ಜಾಡು ಮತ್ತು ಗುರುತು",
 "desc": "Run an audit runner and an Ed25519 identity registry and find where each stops being evidence.",
 "descKn": "audit ರನ್ನರ್ ಮತ್ತು Ed25519 ಗುರುತು registry ಓಡಿಸಿ ಮತ್ತು ಪ್ರತಿಯೊಂದೂ ಎಲ್ಲಿ ಸಾಕ್ಷಿಯಾಗುವುದನ್ನು ನಿಲ್ಲಿಸುತ್ತದೆ ಎಂದು ಹುಡುಕಿ.",
 "objectives": [
  "Record a run.",
  "Handle a failed run.",
  "Verify a signature.",
  "See why publish needs a guard.",
  "Know what a signature covers."
 ],
 "objectivesKn": [
  "ಓಟ ದಾಖಲಿಸಿ.",
  "ವಿಫಲ ಓಟ ನಿಭಾಯಿಸಿ.",
  "ಸಹಿ ಪರಿಶೀಲಿಸಿ.",
  "publish ಗೆ ಕಾವಲು ಏಕೆ ಬೇಕು ನೋಡಿ.",
  "ಸಹಿ ಏನನ್ನು ಆವರಿಸುತ್ತದೆ ತಿಳಿಯಿರಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Communication Protocols (Part 2 of 3)",
    "textKn": "ಸಂವಹನ ಪ್ರೋಟೋಕಾಲ್‌ಗಳು (ಭಾಗ 2 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: TypeScript (Node.js 24, no packages; Node prints a harmless module-type warning on stderr because the lab uses import) · Time: ~120 minutes. Part 2 of 3: an audit runner, a failed run with no handler, a handler that throws, copies of the log, Ed25519 signatures with a fail-closed registry, an overwritten identity and what a signature over the id alone covers. Every output below was genuinely produced by the lab file on Node.js v24.19.0. The lesson original main.ts was not supplied, so the labs are our own implementation, and the MCP, A2A, ACP and ANP material is modelled in one process with no real server, no network, no HPKE encryption and no live search. AuditableRunner, IdentityRegistry and createIdentity follow the lesson text, and signPayload is our own helper because it was not in the pasted text. This lesson replaces the earlier placeholder at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: TypeScript (Node.js 24, ಯಾವುದೇ package ಇಲ್ಲ; ಲ್ಯಾಬ್ import ಬಳಸುವುದರಿಂದ Node stderr ನಲ್ಲಿ ಹಾನಿರಹಿತ module-type ಎಚ್ಚರಿಕೆ ಮುದ್ರಿಸುತ್ತದೆ) · ಸಮಯ: ~120 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 2ನೆಯದು: audit ರನ್ನರ್, handler ಇಲ್ಲದ ವಿಫಲ ಓಟ, ದೋಷ ಎಸೆಯುವ handler, ದಾಖಲೆಯ ಪ್ರತಿಗಳು, fail-closed registry ಯೊಂದಿಗೆ Ed25519 ಸಹಿಗಳು, ಮೇಲ್ಬರಹ ಮಾಡಿದ ಗುರುತು ಮತ್ತು id ಮಾತ್ರದ ಮೇಲಿನ ಸಹಿ ಏನನ್ನು ಆವರಿಸುತ್ತದೆ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Node.js v24.19.0 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. lesson ನ ಮೂಲ main.ts ನೀಡಲಾಗಿಲ್ಲ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ನಮ್ಮದೇ ಅನುಷ್ಠಾನ, ಮತ್ತು MCP, A2A, ACP ಹಾಗೂ ANP ವಿಷಯವನ್ನು ಒಂದೇ ಪ್ರಕ್ರಿಯೆಯಲ್ಲಿ ಮಾದರಿ ಮಾಡಲಾಗಿದೆ, ನಿಜವಾದ ಸರ್ವರ್, ಜಾಲ, HPKE ಎನ್‌ಕ್ರಿಪ್ಷನ್ ಅಥವಾ ನೇರ ಹುಡುಕಾಟ ಇಲ್ಲ. AuditableRunner, IdentityRegistry ಮತ್ತು createIdentity lesson ಪಠ್ಯವನ್ನು ಅನುಸರಿಸುತ್ತವೆ, ಮತ್ತು signPayload ಅಂಟಿಸಿದ ಪಠ್ಯದಲ್ಲಿ ಇಲ್ಲದ ಕಾರಣ ಅದು ನಮ್ಮದೇ ಸಹಾಯಕ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ placeholder ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Records and Signatures Are Evidence, Not Proof",
    "textKn": "ದಾಖಲೆಗಳು ಮತ್ತು ಸಹಿಗಳು ಸಾಕ್ಷಿ, ರುಜುವಾತಲ್ಲ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "The Audit Runner and the DID Registry",
    "headingKn": "Audit ರನ್ನರ್ ಮತ್ತು DID Registry",
    "bodyEn": "An audit entry records an input, an output, a trajectory of tool steps and a status, and an identity registry lets a receiver check a signature against a published key. This part runs the lesson audit runner on a completed run, a run with no handler and a handler that throws, checks that the declared awaiting status is ever used, and shows that copies protect the log from accidents. It then creates a real Ed25519 identity, verifies a signature, shows a fail-closed refusal for an unknown identity, overwrites a published identity with an attacker key, and shows what a signature over only a message id leaves uncovered.",
    "bodyKn": "audit ನಮೂದು input, output, tool ಹಂತಗಳ trajectory ಮತ್ತು ಸ್ಥಿತಿಯನ್ನು ದಾಖಲಿಸುತ್ತದೆ, ಮತ್ತು ಗುರುತು registry ಸ್ವೀಕರಿಸುವವನಿಗೆ ಪ್ರಕಟಿತ key ವಿರುದ್ಧ ಸಹಿ ಪರಿಶೀಲಿಸಲು ಅವಕಾಶ ನೀಡುತ್ತದೆ. ಈ ಭಾಗವು lesson ನ audit ರನ್ನರ್ ಅನ್ನು ಪೂರ್ಣಗೊಂಡ ಓಟ, handler ಇಲ್ಲದ ಓಟ ಮತ್ತು ದೋಷ ಎಸೆಯುವ handler ಮೇಲೆ ಓಡಿಸುತ್ತದೆ, ಘೋಷಿಸಿದ awaiting ಸ್ಥಿತಿ ಎಂದಾದರೂ ಬಳಕೆಯಾಗುತ್ತದೆಯೇ ಎಂದು ಪರಿಶೀಲಿಸುತ್ತದೆ, ಮತ್ತು ಪ್ರತಿಗಳು ದಾಖಲೆಯನ್ನು ಆಕಸ್ಮಿಕಗಳಿಂದ ರಕ್ಷಿಸುತ್ತವೆ ಎಂದು ತೋರಿಸುತ್ತದೆ. ನಂತರ ನಿಜವಾದ Ed25519 ಗುರುತು ರಚಿಸಿ, ಸಹಿ ಪರಿಶೀಲಿಸಿ, ಅಜ್ಞಾತ ಗುರುತಿಗೆ fail-closed ನಿರಾಕರಣೆ ತೋರಿಸಿ, ಪ್ರಕಟಿತ ಗುರುತನ್ನು ದಾಳಿಕೋರನ key ಯಿಂದ ಮೇಲ್ಬರಹ ಮಾಡಿ, ಮತ್ತು ಕೇವಲ ಸಂದೇಶ id ಮೇಲಿನ ಸಹಿ ಏನನ್ನು ಆವರಿಸದೆ ಬಿಡುತ್ತದೆ ಎಂದು ತೋರಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Audit and Identity",
    "headingKn": "Audit ಮತ್ತು ಗುರುತು",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">a log and a signature each prove less than they seem to</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">audit</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">what ran, when</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">identity</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">who signed</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">registry</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">who may publish</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">gap</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">record is not proof</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">a log and a signature each prove less than they seem to</text></svg>",
    "captionEn": "A trail and a signature are useful, and each has a clear limit.",
    "captionKn": "ಜಾಡು ಮತ್ತು ಸಹಿ ಉಪಯುಕ್ತ, ಮತ್ತು ಪ್ರತಿಯೊಂದಕ್ಕೂ ಸ್ಪಷ್ಟ ಮಿತಿ ಇದೆ."
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
      "runs",
      "completed, no handler and a thrown error"
     ],
     [
      "statuses",
      "whether awaiting is ever reached"
     ],
     [
      "copies",
      "editing the input and the returned log"
     ],
     [
      "signatures",
      "valid, changed payload and unknown DID"
     ],
     [
      "publish",
      "an attacker replacing the coder key"
     ],
     [
      "coverage",
      "a signature over the id with a different body"
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
    "filename": "cp_2.ts",
    "headingEn": "The audit runner",
    "headingKn": "Audit ರನ್ನರ್",
    "descEn": "AuditableRunner creates an entry before the handler runs, copies input and output with structuredClone, marks completed or failed and returns copies from its query methods.",
    "descKn": "AuditableRunner handler ಓಡುವ ಮೊದಲು ನಮೂದು ರಚಿಸುತ್ತದೆ, structuredClone ನಿಂದ input ಮತ್ತು output ನಕಲಿಸುತ್ತದೆ, completed ಅಥವಾ failed ಗುರುತಿಸುತ್ತದೆ ಮತ್ತು ತನ್ನ ಪ್ರಶ್ನೆ ವಿಧಾನಗಳಿಂದ ಪ್ರತಿಗಳನ್ನು ನೀಡುತ್ತದೆ.",
    "code": "class AuditableRunner {\n  private log: AuditEntry[] = [];\n  private handlers: Map<string, Handler> = new Map();\n  registerAgent(name: string, handler: Handler) { this.handlers.set(name, handler); }\n  async run(agentName: string, input: AgentMessage[], sessionId?: string): Promise<AuditEntry> {\n    const entry: AuditEntry = { runId: crypto.randomUUID(), agentName, input: structuredClone(input), output: [], trajectory: [], status: \"created\", startedAt: Date.now(), sessionId };\n    this.log.push(entry);\n    const handler = this.handlers.get(agentName);\n    if (!handler) { entry.status = \"failed\"; return entry; }\n    entry.status = \"in-progress\";\n    try {\n      const result = await handler(input);\n      entry.output = structuredClone(result.output);\n      entry.trajectory = structuredClone(result.trajectory);\n      entry.status = \"completed\";\n      entry.completedAt = Date.now();\n    } catch (err) {\n      entry.status = \"failed\";\n      entry.trajectory.push({ reasoning: `Error: ${String(err)}`, timestamp: Date.now() });\n      entry.completedAt = Date.now();\n    }\n    return entry;\n  }\n  getFullAuditLog(): AuditEntry[] { return structuredClone(this.log); }\n  getAuditLogForSession(sessionId: string): AuditEntry[] { return structuredClone(this.log.filter((e) => e.sessionId === sessionId)); }\n  getTrajectoryForRun(runId: string): TrajectoryEntry[] { const e = this.log.find((x) => x.runId === runId); return e ? structuredClone(e.trajectory) : []; }\n}"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "cp_2.ts",
    "headingEn": "The identity registry",
    "headingKn": "ಗುರುತು registry",
    "descEn": "IdentityRegistry stores DID documents, verifies a signature against the authentication keys and answers requiresHumanAuth, and createIdentity makes a real Ed25519 key pair.",
    "descKn": "IdentityRegistry DID ದಾಖಲೆಗಳನ್ನು ಸಂಗ್ರಹಿಸುತ್ತದೆ, authentication key ಗಳ ವಿರುದ್ಧ ಸಹಿ ಪರಿಶೀಲಿಸುತ್ತದೆ ಮತ್ತು requiresHumanAuth ಗೆ ಉತ್ತರಿಸುತ್ತದೆ, ಮತ್ತು createIdentity ನಿಜವಾದ Ed25519 key ಜೋಡಿ ರಚಿಸುತ್ತದೆ.",
    "code": "type VerificationMethod = { id: string; type: string; controller: string; publicKeyDer: string };\ntype DIDDocument = { id: string; verificationMethod: VerificationMethod[]; authentication: string[]; keyAgreement: string[]; humanAuthorization: string[]; service: { id: string; type: string; serviceEndpoint: string }[] };\ntype AgentIdentity = { did: string; document: DIDDocument; privateKey: crypto.KeyObject; publicKey: crypto.KeyObject };\n\nclass IdentityRegistry {\n  private documents: Map<string, DIDDocument> = new Map();\n  publish(doc: DIDDocument) { this.documents.set(doc.id, doc); }\n  resolve(did: string): DIDDocument | undefined { return this.documents.get(did); }\n  verify(did: string, signature: string, payload: string): boolean {\n    const doc = this.documents.get(did);\n    if (!doc) return false;\n    const authKeys = doc.verificationMethod.filter((vm) => doc.authentication.includes(vm.id));\n    for (const key of authKeys) {\n      const publicKey = crypto.createPublicKey({ key: Buffer.from(key.publicKeyDer, \"base64\"), format: \"der\", type: \"spki\" });\n      if (crypto.verify(null, Buffer.from(payload), publicKey, Buffer.from(signature, \"hex\"))) return true;\n    }\n    return false;\n  }\n  requiresHumanAuth(did: string, operationKeyId: string): boolean {\n    const doc = this.documents.get(did);\n    if (!doc) return false;\n    return doc.humanAuthorization.includes(operationKeyId);\n  }\n}\n\nfunction createIdentity(domain: string, agentName: string): AgentIdentity {\n  const did = `did:wba:${domain}:agent:${agentName}`;\n  const { publicKey, privateKey } = crypto.generateKeyPairSync(\"ed25519\");\n  const publicKeyDer = publicKey.export({ format: \"der\", type: \"spki\" }).toString(\"base64\");\n  const keyId = `${did}#key-1`;\n  const document: DIDDocument = {\n    id: did,\n    verificationMethod: [{ id: keyId, type: \"Ed25519VerificationKey2020\", controller: did, publicKeyDer }],\n    authentication: [keyId], keyAgreement: [], humanAuthorization: [],\n    service: [{ id: `${did}#agent-description`, type: \"AgentDescription\", serviceEndpoint: `https://${domain}/agents/${agentName}/ad.json` }],\n  };\n  return { did, document, privateKey, publicKey };\n}\nfunction signPayload(identity: AgentIdentity, payload: string): string {\n  return crypto.sign(null, Buffer.from(payload), identity.privateKey).toString(\"hex\");\n}"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "cp_2.ts",
    "headingEn": "The experiments",
    "headingKn": "ಪ್ರಯೋಗಗಳು",
    "descEn": "main() runs the six experiments and prints the real result of each.",
    "descKn": "main() ಆರು ಪ್ರಯೋಗಗಳನ್ನು ಓಡಿಸಿ ಪ್ರತಿಯೊಂದರ ನಿಜ ಫಲಿತಾಂಶ ಮುದ್ರಿಸುತ್ತದೆ.",
    "code": "async function main() {\n  section(\"1. Genuinely running: a completed run and a run with no handler\");\n  const runner = new AuditableRunner();\n  runner.registerAgent(\"document-researcher\", async () => ({\n    output: [textMessage(\"ROLE_AGENT\", \"Document research completed\")],\n    trajectory: [\n      { reasoning: \"Search approved documentation\", toolName: \"document_search\", toolInput: { query: \"retention\" }, toolOutput: { documentCount: 5 }, timestamp: Date.now() },\n      { reasoning: \"Extract relevant passages\", toolName: \"document_extract\", toolInput: { documentCount: 5 }, toolOutput: { passageCount: 18 }, timestamp: Date.now() },\n    ],\n  }));\n  const ok = await runner.run(\"document-researcher\", [textMessage(\"ROLE_USER\", \"Research retention\")], \"legal-review-001\");\n  const missing = await runner.run(\"nobody\", [textMessage(\"ROLE_USER\", \"hi\")], \"legal-review-001\");\n  console.log(\"completed:\", ok.status, \"| steps:\", ok.trajectory.length, \"| completedAt set:\", ok.completedAt !== undefined);\n  console.log(\"no handler:\", missing.status, \"| completedAt set:\", missing.completedAt !== undefined);\n  console.log(\"the completed run carries two trajectory steps and a completion time, while the run with no handler is marked failed and never gets a completion time, so the failed branch leaves the record incomplete; the trajectory here was written by the handler itself and is not evidence that the tools ran.\");\n\n  section(\"2. Genuinely running: a handler that throws, and the unused awaiting state\");\n  runner.registerAgent(\"flaky\", async () => { throw new Error(\"tool unavailable\"); });\n  const bad = await runner.run(\"flaky\", [textMessage(\"ROLE_USER\", \"go\")], \"legal-review-001\");\n  console.log(\"status:\", bad.status, \"| error entry:\", bad.trajectory[0].reasoning, \"| completedAt set:\", bad.completedAt !== undefined);\n  const statuses = runner.getFullAuditLog().map((e) => e.status);\n  console.log(\"statuses seen:\", [...new Set(statuses)].sort().join(\", \"), \"| awaiting ever used:\", statuses.includes(\"awaiting\"));\n  console.log(\"a thrown error becomes a failed run with the error text recorded as a trajectory entry and a completion time, and across three runs the awaiting status never appeared, so a state can be declared in a type without any code that ever moves a run into it.\");\n\n  section(\"3. Genuinely running: copies keep the log from being edited by accident\");\n  const input = [textMessage(\"ROLE_USER\", \"original\")];\n  const run3 = await runner.run(\"document-researcher\", input);\n  input[0].parts[0].text = \"changed by the caller\";\n  const copy = runner.getFullAuditLog();\n  copy[0].status = \"failed\";\n  console.log(\"stored input text:\", (runner.getFullAuditLog().find((e) => e.runId === run3.runId) as AuditEntry).input[0].parts[0].text, \"| internal status of run 1 after editing the copy:\", runner.getFullAuditLog()[0].status);\n  console.log(\"changing the caller input after the run and editing a returned copy both left the stored record unchanged, because structuredClone copies on the way in and out; this protects against accidents only, since any code with access to the runner object can still change the real log.\");\n\n  section(\"4. Genuinely running: signatures and a fail-closed registry\");\n  const registry = new IdentityRegistry();\n  const coder = createIdentity(\"coder.local\", \"coder\");\n  registry.publish(coder.document);\n  const msg = textMessage(\"ROLE_USER\", \"Research React 19\");\n  const sig = signPayload(coder, msg.id);\n  console.log(\"DID:\", coder.did);\n  console.log(\"valid:\", registry.verify(coder.did, sig, msg.id), \"| payload changed:\", registry.verify(coder.did, sig, msg.id + \"x\"), \"| unknown DID:\", registry.verify(\"did:wba:nobody:agent:x\", sig, msg.id));\n  console.log(\"the right key and payload verify, a changed payload fails and an unknown DID fails closed, which is the behaviour you want; a valid signature only says that the holder of that private key signed those bytes and says nothing about whether the request is allowed.\");\n\n  section(\"5. Genuinely running: replacing a published identity\");\n  const attacker = createIdentity(\"evil.local\", \"mallory\");\n  const forgedDoc: DIDDocument = { ...attacker.document, id: coder.did };\n  forgedDoc.verificationMethod = [{ ...attacker.document.verificationMethod[0], id: coder.did + \"#key-1\", controller: coder.did }];\n  forgedDoc.authentication = [coder.did + \"#key-1\"];\n  registry.publish(forgedDoc);\n  const forgedSig = signPayload(attacker, msg.id);\n  console.log(\"attacker signature accepted for the coder DID:\", registry.verify(coder.did, forgedSig, msg.id), \"| the real coder signature still accepted:\", registry.verify(coder.did, sig, msg.id));\n  console.log(\"because publish just overwrites the map entry, anyone who can call it can swap the coder key for their own, after which the attacker signature verifies and the real one stops working; a real registry must restrict who may publish or change a key.\");\n\n  section(\"6. Genuinely running: what the signature covers, and the human-auth lookup\");\n  const sig2 = signPayload(coder, msg.id);\n  const cleanRegistry = new IdentityRegistry();\n  cleanRegistry.publish(coder.document);\n  const tampered = { ...msg, parts: [{ text: \"Delete every record\" }] };\n  console.log(\"signature still verifies after the body was replaced:\", cleanRegistry.verify(coder.did, sig2, tampered.id), \"| new body:\", tampered.parts[0].text);\n  console.log(\"requiresHumanAuth for a known DID:\", cleanRegistry.requiresHumanAuth(coder.did, coder.did + \"#key-1\"), \"| for an unknown DID:\", cleanRegistry.requiresHumanAuth(\"did:wba:nobody:agent:x\", \"k\"));\n  console.log(\"the signature covers only the message id, so a different body with the same id still verifies, and requiresHumanAuth returns false both for a known DID with no requirement and for an unknown DID, so a caller cannot tell no requirement from no identity; a signature should bind the whole request and the unknown case should be refused.\");\n}"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: a completed run and a run with no handler ---\ncompleted: completed | steps: 2 | completedAt set: true\nno handler: failed | completedAt set: false\nthe completed run carries two trajectory steps and a completion time, while the run with no handler is marked failed and never gets a completion time, so the failed branch leaves the record incomplete; the trajectory here was written by the handler itself and is not evidence that the tools ran.\n\n--- 2. Genuinely running: a handler that throws, and the unused awaiting state ---\nstatus: failed | error entry: Error: Error: tool unavailable | completedAt set: true\nstatuses seen: completed, failed | awaiting ever used: false\na thrown error becomes a failed run with the error text recorded as a trajectory entry and a completion time, and across three runs the awaiting status never appeared, so a state can be declared in a type without any code that ever moves a run into it.\n\n--- 3. Genuinely running: copies keep the log from being edited by accident ---\nstored input text: original | internal status of run 1 after editing the copy: completed\nchanging the caller input after the run and editing a returned copy both left the stored record unchanged, because structuredClone copies on the way in and out; this protects against accidents only, since any code with access to the runner object can still change the real log.\n\n--- 4. Genuinely running: signatures and a fail-closed registry ---\nDID: did:wba:coder.local:agent:coder\nvalid: true | payload changed: false | unknown DID: false\nthe right key and payload verify, a changed payload fails and an unknown DID fails closed, which is the behaviour you want; a valid signature only says that the holder of that private key signed those bytes and says nothing about whether the request is allowed.\n\n--- 5. Genuinely running: replacing a published identity ---\nattacker signature accepted for the coder DID: true | the real coder signature still accepted: false\nbecause publish just overwrites the map entry, anyone who can call it can swap the coder key for their own, after which the attacker signature verifies and the real one stops working; a real registry must restrict who may publish or change a key.\n\n--- 6. Genuinely running: what the signature covers, and the human-auth lookup ---\nsignature still verifies after the body was replaced: true | new body: Delete every record\nrequiresHumanAuth for a known DID: false | for an unknown DID: false\nthe signature covers only the message id, so a different body with the same id still verifies, and requiresHumanAuth returns false both for a known DID with no requirement and for an unknown DID, so a caller cannot tell no requirement from no identity; a signature should bind the whole request and the unknown case should be refused."
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
    "headingEn": "Experiment 1: A completed run and a run with no handler",
    "headingKn": "ಪ್ರಯೋಗ 1: A completed run and a run with no handler",
    "bodyEn": "What it ran: A completed run and a run with no handler. What the lab concluded: the completed run carries two trajectory steps and a completion time, while the run with no handler is marked failed and never gets a completion time, so the failed branch leaves the record incomplete; the trajectory here was written by the handler itself and is not evidence that the tools ran.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A completed run and a run with no handler. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the completed run carries two trajectory steps and a completion time, while the run with no handler is marked failed and never gets a completion time, so the failed branch leaves the record incomplete; the trajectory here was written by the handler itself and is not evidence that the tools ran."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. Genuinely running: a completed run and a run with no handler ---\ncompleted: completed | steps: 2 | completedAt set: true\nno handler: failed | completedAt set: false"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: A handler that throws, and the unused awaiting state",
    "headingKn": "ಪ್ರಯೋಗ 2: A handler that throws, and the unused awaiting state",
    "bodyEn": "What it ran: A handler that throws, and the unused awaiting state. What the lab concluded: a thrown error becomes a failed run with the error text recorded as a trajectory entry and a completion time, and across three runs the awaiting status never appeared, so a state can be declared in a type without any code that ever moves a run into it.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A handler that throws, and the unused awaiting state. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a thrown error becomes a failed run with the error text recorded as a trajectory entry and a completion time, and across three runs the awaiting status never appeared, so a state can be declared in a type without any code that ever moves a run into it."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely running: a handler that throws, and the unused awaiting state ---\nstatus: failed | error entry: Error: Error: tool unavailable | completedAt set: true\nstatuses seen: completed, failed | awaiting ever used: false"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: Copies keep the log from being edited by accident",
    "headingKn": "ಪ್ರಯೋಗ 3: Copies keep the log from being edited by accident",
    "bodyEn": "What it ran: Copies keep the log from being edited by accident. What the lab concluded: changing the caller input after the run and editing a returned copy both left the stored record unchanged, because structuredClone copies on the way in and out; this protects against accidents only, since any code with access to the runner object can still change the real log.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Copies keep the log from being edited by accident. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): changing the caller input after the run and editing a returned copy both left the stored record unchanged, because structuredClone copies on the way in and out; this protects against accidents only, since any code with access to the runner object can still change the real log."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely running: copies keep the log from being edited by accident ---\nstored input text: original | internal status of run 1 after editing the copy: completed"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 4: Signatures and a fail-closed registry",
    "headingKn": "ಪ್ರಯೋಗ 4: Signatures and a fail-closed registry",
    "bodyEn": "What it ran: Signatures and a fail-closed registry. What the lab concluded: the right key and payload verify, a changed payload fails and an unknown DID fails closed, which is the behaviour you want; a valid signature only says that the holder of that private key signed those bytes and says nothing about whether the request is allowed.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Signatures and a fail-closed registry. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the right key and payload verify, a changed payload fails and an unknown DID fails closed, which is the behaviour you want; a valid signature only says that the holder of that private key signed those bytes and says nothing about whether the request is allowed."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 4. Genuinely running: signatures and a fail-closed registry ---\nDID: did:wba:coder.local:agent:coder\nvalid: true | payload changed: false | unknown DID: false"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 5: Replacing a published identity",
    "headingKn": "ಪ್ರಯೋಗ 5: Replacing a published identity",
    "bodyEn": "What it ran: Replacing a published identity. What the lab concluded: because publish just overwrites the map entry, anyone who can call it can swap the coder key for their own, after which the attacker signature verifies and the real one stops working; a real registry must restrict who may publish or change a key.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Replacing a published identity. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): because publish just overwrites the map entry, anyone who can call it can swap the coder key for their own, after which the attacker signature verifies and the real one stops working; a real registry must restrict who may publish or change a key."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 5. Genuinely running: replacing a published identity ---\nattacker signature accepted for the coder DID: true | the real coder signature still accepted: false"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 6: What the signature covers, and the human-auth lookup",
    "headingKn": "ಪ್ರಯೋಗ 6: What the signature covers, and the human-auth lookup",
    "bodyEn": "What it ran: What the signature covers, and the human-auth lookup. What the lab concluded: the signature covers only the message id, so a different body with the same id still verifies, and requiresHumanAuth returns false both for a known DID with no requirement and for an unknown DID, so a caller cannot tell no requirement from no identity; a signature should bind the whole request and the unknown case should be refused.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: What the signature covers, and the human-auth lookup. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the signature covers only the message id, so a different body with the same id still verifies, and requiresHumanAuth returns false both for a known DID with no requirement and for an unknown DID, so a caller cannot tell no requirement from no identity; a signature should bind the whole request and the unknown case should be refused."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 6. Genuinely running: what the signature covers, and the human-auth lookup ---\nsignature still verifies after the body was replaced: true | new body: Delete every record\nrequiresHumanAuth for a known DID: false | for an unknown DID: false"
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
    "headingEn": "Genuinely Found: The Audit Runner",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Audit ರನ್ನರ್",
    "bodyEn": "Section 1: the completed run had 2 steps and a completion time, and the run with no handler was failed with no completion time. Section 2: a thrown error gave failed, an error entry of Error: Error: tool unavailable and a completion time, and across the runs only completed and failed appeared, never awaiting. Section 3: editing the caller input and a returned copy left the stored record as original and completed.",
    "bodyKn": "ವಿಭಾಗ 1: ಪೂರ್ಣಗೊಂಡ ಓಟಕ್ಕೆ 2 ಹಂತಗಳು ಮತ್ತು ಪೂರ್ಣಗೊಂಡ ಸಮಯ ಇತ್ತು, ಮತ್ತು handler ಇಲ್ಲದ ಓಟ ಪೂರ್ಣಗೊಂಡ ಸಮಯವಿಲ್ಲದೆ failed ಆಯಿತು. ವಿಭಾಗ 2: ಎಸೆದ ದೋಷ failed, Error: Error: tool unavailable ಎಂಬ ದೋಷ ನಮೂದು ಮತ್ತು ಪೂರ್ಣಗೊಂಡ ಸಮಯ ನೀಡಿತು, ಮತ್ತು ಓಟಗಳಲ್ಲಿ completed ಮತ್ತು failed ಮಾತ್ರ ಕಾಣಿಸಿಕೊಂಡವು, awaiting ಎಂದೂ ಇಲ್ಲ. ವಿಭಾಗ 3: ಕರೆದವರ input ಮತ್ತು ಹಿಂದಿರುಗಿದ ಪ್ರತಿ ಬದಲಿಸಿದರೂ ಸಂಗ್ರಹಿತ ದಾಖಲೆ original ಮತ್ತು completed ಆಗಿಯೇ ಉಳಿಯಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Identity and Signatures",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಗುರುತು ಮತ್ತು ಸಹಿಗಳು",
    "bodyEn": "Section 4: the right signature verified, a changed payload and an unknown DID both failed. Section 5: after the attacker published a document under the coder DID the attacker signature was accepted and the real coder signature was no longer accepted. Section 6: a signature over the id still verified after the body was replaced, and requiresHumanAuth gave false for both a known and an unknown DID.",
    "bodyKn": "ವಿಭಾಗ 4: ಸರಿಯಾದ ಸಹಿ ಪರಿಶೀಲನೆಯಾಯಿತು, ಬದಲಾದ payload ಮತ್ತು ಅಜ್ಞಾತ DID ಎರಡೂ ವಿಫಲವಾದವು. ವಿಭಾಗ 5: ದಾಳಿಕೋರ coder DID ಅಡಿಯಲ್ಲಿ ದಾಖಲೆ ಪ್ರಕಟಿಸಿದ ನಂತರ ದಾಳಿಕೋರನ ಸಹಿ ಒಪ್ಪಲ್ಪಟ್ಟಿತು ಮತ್ತು ನಿಜವಾದ coder ಸಹಿ ಇನ್ನು ಒಪ್ಪಲ್ಪಡಲಿಲ್ಲ. ವಿಭಾಗ 6: body ಬದಲಿಸಿದ ನಂತರವೂ id ಮೇಲಿನ ಸಹಿ ಪರಿಶೀಲನೆಯಾಯಿತು, ಮತ್ತು requiresHumanAuth ಪರಿಚಿತ ಹಾಗೂ ಅಜ್ಞಾತ DID ಎರಡಕ್ಕೂ false ನೀಡಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "An audit trail and a signature are the two things people reach for when they want to trust an agent, and the lab shows precisely where each one stops being evidence: who may write the log, who may publish a key and what bytes were actually signed.",
    "bodyKn": "ಏಜೆಂಟ್ ಮೇಲೆ ನಂಬಿಕೆ ಬೇಕಾದಾಗ ಜನರು audit ಜಾಡು ಮತ್ತು ಸಹಿ ಕಡೆ ಹೋಗುತ್ತಾರೆ, ಮತ್ತು ಪ್ರತಿಯೊಂದೂ ಎಲ್ಲಿ ಸಾಕ್ಷಿಯಾಗುವುದನ್ನು ನಿಲ್ಲಿಸುತ್ತದೆ ಎಂದು ಲ್ಯಾಬ್ ನಿಖರವಾಗಿ ತೋರಿಸುತ್ತದೆ: ದಾಖಲೆ ಯಾರು ಬರೆಯಬಹುದು, key ಯಾರು ಪ್ರಕಟಿಸಬಹುದು ಮತ್ತು ನಿಜವಾಗಿ ಯಾವ ಬೈಟ್‌ಗಳಿಗೆ ಸಹಿ ಮಾಡಲಾಯಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"a verified signature means the sender is trusted.\" After the key was swapped the attacker signature verified, and a signature over the id also verified a different body.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಪರಿಶೀಲಿತ ಸಹಿ ಎಂದರೆ ಕಳುಹಿಸುವವ ನಂಬಲರ್ಹ.\" key ಬದಲಾದ ನಂತರ ದಾಳಿಕೋರನ ಸಹಿ ಪರಿಶೀಲನೆಯಾಯಿತು, ಮತ್ತು id ಮೇಲಿನ ಸಹಿ ಬೇರೆ body ಯನ್ನೂ ಪರಿಶೀಲಿಸಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Trajectory: the recorded steps of a run. DID: a decentralised identifier. Verification method: a published key. Fail closed: refuse when the answer is unknown. Authentication: who signed. Authorisation: what they may do.",
    "bodyKn": "Trajectory: ಓಟದ ದಾಖಲಿತ ಹಂತಗಳು. DID: ವಿಕೇಂದ್ರೀಕೃತ ಗುರುತಿಸುವಿಕೆ. Verification method: ಪ್ರಕಟಿತ key. Fail closed: ಉತ್ತರ ತಿಳಿದಿಲ್ಲದಾಗ ನಿರಾಕರಿಸುವುದು. ಪ್ರಮಾಣೀಕರಣ: ಯಾರು ಸಹಿ ಮಾಡಿದರು. ಅಧಿಕಾರ: ಅವರು ಏನು ಮಾಡಬಹುದು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) The run with no handler never got a completion time. 2) The awaiting status was never used. 3) Copies kept the stored record unchanged. 4) An overwritten key made the attacker signature valid and the real one invalid. 5) A signature over the id verified a different body.",
    "bodyKn": "1) handler ಇಲ್ಲದ ಓಟಕ್ಕೆ ಪೂರ್ಣಗೊಂಡ ಸಮಯ ಎಂದೂ ಸಿಗಲಿಲ್ಲ. 2) awaiting ಸ್ಥಿತಿ ಎಂದೂ ಬಳಕೆಯಾಗಲಿಲ್ಲ. 3) ಪ್ರತಿಗಳು ಸಂಗ್ರಹಿತ ದಾಖಲೆಯನ್ನು ಬದಲಾಗದಂತೆ ಇಟ್ಟವು. 4) ಮೇಲ್ಬರಹ ಮಾಡಿದ key ದಾಳಿಕೋರನ ಸಹಿಯನ್ನು ಮಾನ್ಯ ಮತ್ತು ನಿಜವಾದದ್ದನ್ನು ಅಮಾನ್ಯ ಮಾಡಿತು. 5) id ಮೇಲಿನ ಸಹಿ ಬೇರೆ body ಯನ್ನು ಪರಿಶೀಲಿಸಿತು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "Did the run with no handler get a completion time?",
      "qKn": "handler ಇಲ್ಲದ ಓಟಕ್ಕೆ ಪೂರ್ಣಗೊಂಡ ಸಮಯ ಸಿಕ್ಕಿತೇ?",
      "opts": [
       "No",
       "Yes",
       "Only on retry",
       "It was not tested"
      ],
      "optsKn": [
       "ಇಲ್ಲ",
       "ಹೌದು",
       "ಮರುಪ್ರಯತ್ನದಲ್ಲಿ ಮಾತ್ರ",
       "ಪರೀಕ್ಷಿಸಿಲ್ಲ"
      ],
      "correct": 0
     },
     {
      "q": "Which statuses actually appeared in the audit log?",
      "qKn": "audit ದಾಖಲೆಯಲ್ಲಿ ನಿಜವಾಗಿ ಯಾವ ಸ್ಥಿತಿಗಳು ಕಾಣಿಸಿಕೊಂಡವು?",
      "opts": [
       "completed and failed",
       "completed, failed and awaiting",
       "awaiting only",
       "created only"
      ],
      "optsKn": [
       "completed ಮತ್ತು failed",
       "completed, failed ಮತ್ತು awaiting",
       "awaiting ಮಾತ್ರ",
       "created ಮಾತ್ರ"
      ],
      "correct": 0
     },
     {
      "q": "What happened to the real coder signature after the key was replaced?",
      "qKn": "key ಬದಲಾದ ನಂತರ ನಿಜವಾದ coder ಸಹಿಗೆ ಏನಾಯಿತು?",
      "opts": [
       "It was no longer accepted",
       "It was still accepted",
       "It was deleted",
       "It was re-signed"
      ],
      "optsKn": [
       "ಅದು ಇನ್ನು ಒಪ್ಪಲ್ಪಡಲಿಲ್ಲ",
       "ಅದು ಇನ್ನೂ ಒಪ್ಪಲ್ಪಟ್ಟಿತು",
       "ಅದು ಅಳಿಸಲ್ಪಟ್ಟಿತು",
       "ಅದಕ್ಕೆ ಮರು-ಸಹಿ ಆಯಿತು"
      ],
      "correct": 0
     },
     {
      "q": "What does the lesson signature cover?",
      "qKn": "lesson ನ ಸಹಿ ಏನನ್ನು ಆವರಿಸುತ್ತದೆ?",
      "opts": [
       "Only the message id",
       "The whole request",
       "The target agent",
       "The session"
      ],
      "optsKn": [
       "ಸಂದೇಶ id ಮಾತ್ರ",
       "ಇಡೀ ವಿನಂತಿ",
       "ಗುರಿ ಏಜೆಂಟ್",
       "ಸೆಷನ್"
      ],
      "correct": 0
     },
     {
      "q": "What did requiresHumanAuth return for an unknown DID?",
      "qKn": "ಅಜ್ಞಾತ DID ಗೆ requiresHumanAuth ಏನು ನೀಡಿತು?",
      "opts": [
       "false, the same as for a known DID with no requirement",
       "true",
       "It threw an error",
       "undefined"
      ],
      "optsKn": [
       "false, ಅವಶ್ಯಕತೆ ಇಲ್ಲದ ಪರಿಚಿತ DID ಗೆ ಇದ್ದಂತೆಯೇ",
       "true",
       "ಅದು ದೋಷ ಎಸೆಯಿತು",
       "undefined"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
