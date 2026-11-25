// Teaching implementation (our own): Communication Protocols, Part 2 - an ACP-style audit trail and ANP-style identity checks.
// AuditEntry, AuditableRunner, VerificationMethod, DIDDocument, IdentityRegistry and createIdentity follow the lesson text. signPayload was not in the pasted text, so it is our own helper.
// The DID registry is a local map: there is no DID resolution, no HPKE encryption and no ACP or ANP server. Ed25519 signing is real and comes from node:crypto.
import crypto from "node:crypto";

type MessagePart = { text: string };
type AgentMessage = { id: string; role: "ROLE_USER" | "ROLE_AGENT"; parts: MessagePart[]; timestamp: number };
type TrajectoryEntry = { reasoning: string; toolName?: string; toolInput?: unknown; toolOutput?: unknown; timestamp: number };
const textMessage = (role: AgentMessage["role"], text: string): AgentMessage => ({ id: crypto.randomUUID(), role, parts: [{ text }], timestamp: Date.now() });

type AuditEntry = {
  runId: string; agentName: string; input: AgentMessage[]; output: AgentMessage[]; trajectory: TrajectoryEntry[];
  status: "created" | "in-progress" | "completed" | "failed" | "awaiting"; startedAt: number; completedAt?: number; sessionId?: string;
};
type Handler = (input: AgentMessage[]) => Promise<{ output: AgentMessage[]; trajectory: TrajectoryEntry[] }>;

class AuditableRunner {
  private log: AuditEntry[] = [];
  private handlers: Map<string, Handler> = new Map();
  registerAgent(name: string, handler: Handler) { this.handlers.set(name, handler); }
  async run(agentName: string, input: AgentMessage[], sessionId?: string): Promise<AuditEntry> {
    const entry: AuditEntry = { runId: crypto.randomUUID(), agentName, input: structuredClone(input), output: [], trajectory: [], status: "created", startedAt: Date.now(), sessionId };
    this.log.push(entry);
    const handler = this.handlers.get(agentName);
    if (!handler) { entry.status = "failed"; return entry; }
    entry.status = "in-progress";
    try {
      const result = await handler(input);
      entry.output = structuredClone(result.output);
      entry.trajectory = structuredClone(result.trajectory);
      entry.status = "completed";
      entry.completedAt = Date.now();
    } catch (err) {
      entry.status = "failed";
      entry.trajectory.push({ reasoning: `Error: ${String(err)}`, timestamp: Date.now() });
      entry.completedAt = Date.now();
    }
    return entry;
  }
  getFullAuditLog(): AuditEntry[] { return structuredClone(this.log); }
  getAuditLogForSession(sessionId: string): AuditEntry[] { return structuredClone(this.log.filter((e) => e.sessionId === sessionId)); }
  getTrajectoryForRun(runId: string): TrajectoryEntry[] { const e = this.log.find((x) => x.runId === runId); return e ? structuredClone(e.trajectory) : []; }
}

type VerificationMethod = { id: string; type: string; controller: string; publicKeyDer: string };
type DIDDocument = { id: string; verificationMethod: VerificationMethod[]; authentication: string[]; keyAgreement: string[]; humanAuthorization: string[]; service: { id: string; type: string; serviceEndpoint: string }[] };
type AgentIdentity = { did: string; document: DIDDocument; privateKey: crypto.KeyObject; publicKey: crypto.KeyObject };

class IdentityRegistry {
  private documents: Map<string, DIDDocument> = new Map();
  publish(doc: DIDDocument) { this.documents.set(doc.id, doc); }
  resolve(did: string): DIDDocument | undefined { return this.documents.get(did); }
  verify(did: string, signature: string, payload: string): boolean {
    const doc = this.documents.get(did);
    if (!doc) return false;
    const authKeys = doc.verificationMethod.filter((vm) => doc.authentication.includes(vm.id));
    for (const key of authKeys) {
      const publicKey = crypto.createPublicKey({ key: Buffer.from(key.publicKeyDer, "base64"), format: "der", type: "spki" });
      if (crypto.verify(null, Buffer.from(payload), publicKey, Buffer.from(signature, "hex"))) return true;
    }
    return false;
  }
  requiresHumanAuth(did: string, operationKeyId: string): boolean {
    const doc = this.documents.get(did);
    if (!doc) return false;
    return doc.humanAuthorization.includes(operationKeyId);
  }
}

function createIdentity(domain: string, agentName: string): AgentIdentity {
  const did = `did:wba:${domain}:agent:${agentName}`;
  const { publicKey, privateKey } = crypto.generateKeyPairSync("ed25519");
  const publicKeyDer = publicKey.export({ format: "der", type: "spki" }).toString("base64");
  const keyId = `${did}#key-1`;
  const document: DIDDocument = {
    id: did,
    verificationMethod: [{ id: keyId, type: "Ed25519VerificationKey2020", controller: did, publicKeyDer }],
    authentication: [keyId], keyAgreement: [], humanAuthorization: [],
    service: [{ id: `${did}#agent-description`, type: "AgentDescription", serviceEndpoint: `https://${domain}/agents/${agentName}/ad.json` }],
  };
  return { did, document, privateKey, publicKey };
}
function signPayload(identity: AgentIdentity, payload: string): string {
  return crypto.sign(null, Buffer.from(payload), identity.privateKey).toString("hex");
}

const section = (title: string) => console.log(`\n--- ${title} ---`);

async function main() {
  section("1. Genuinely running: a completed run and a run with no handler");
  const runner = new AuditableRunner();
  runner.registerAgent("document-researcher", async () => ({
    output: [textMessage("ROLE_AGENT", "Document research completed")],
    trajectory: [
      { reasoning: "Search approved documentation", toolName: "document_search", toolInput: { query: "retention" }, toolOutput: { documentCount: 5 }, timestamp: Date.now() },
      { reasoning: "Extract relevant passages", toolName: "document_extract", toolInput: { documentCount: 5 }, toolOutput: { passageCount: 18 }, timestamp: Date.now() },
    ],
  }));
  const ok = await runner.run("document-researcher", [textMessage("ROLE_USER", "Research retention")], "legal-review-001");
  const missing = await runner.run("nobody", [textMessage("ROLE_USER", "hi")], "legal-review-001");
  console.log("completed:", ok.status, "| steps:", ok.trajectory.length, "| completedAt set:", ok.completedAt !== undefined);
  console.log("no handler:", missing.status, "| completedAt set:", missing.completedAt !== undefined);
  console.log("the completed run carries two trajectory steps and a completion time, while the run with no handler is marked failed and never gets a completion time, so the failed branch leaves the record incomplete; the trajectory here was written by the handler itself and is not evidence that the tools ran.");

  section("2. Genuinely running: a handler that throws, and the unused awaiting state");
  runner.registerAgent("flaky", async () => { throw new Error("tool unavailable"); });
  const bad = await runner.run("flaky", [textMessage("ROLE_USER", "go")], "legal-review-001");
  console.log("status:", bad.status, "| error entry:", bad.trajectory[0].reasoning, "| completedAt set:", bad.completedAt !== undefined);
  const statuses = runner.getFullAuditLog().map((e) => e.status);
  console.log("statuses seen:", [...new Set(statuses)].sort().join(", "), "| awaiting ever used:", statuses.includes("awaiting"));
  console.log("a thrown error becomes a failed run with the error text recorded as a trajectory entry and a completion time, and across three runs the awaiting status never appeared, so a state can be declared in a type without any code that ever moves a run into it.");

  section("3. Genuinely running: copies keep the log from being edited by accident");
  const input = [textMessage("ROLE_USER", "original")];
  const run3 = await runner.run("document-researcher", input);
  input[0].parts[0].text = "changed by the caller";
  const copy = runner.getFullAuditLog();
  copy[0].status = "failed";
  console.log("stored input text:", (runner.getFullAuditLog().find((e) => e.runId === run3.runId) as AuditEntry).input[0].parts[0].text, "| internal status of run 1 after editing the copy:", runner.getFullAuditLog()[0].status);
  console.log("changing the caller input after the run and editing a returned copy both left the stored record unchanged, because structuredClone copies on the way in and out; this protects against accidents only, since any code with access to the runner object can still change the real log.");

  section("4. Genuinely running: signatures and a fail-closed registry");
  const registry = new IdentityRegistry();
  const coder = createIdentity("coder.local", "coder");
  registry.publish(coder.document);
  const msg = textMessage("ROLE_USER", "Research React 19");
  const sig = signPayload(coder, msg.id);
  console.log("DID:", coder.did);
  console.log("valid:", registry.verify(coder.did, sig, msg.id), "| payload changed:", registry.verify(coder.did, sig, msg.id + "x"), "| unknown DID:", registry.verify("did:wba:nobody:agent:x", sig, msg.id));
  console.log("the right key and payload verify, a changed payload fails and an unknown DID fails closed, which is the behaviour you want; a valid signature only says that the holder of that private key signed those bytes and says nothing about whether the request is allowed.");

  section("5. Genuinely running: replacing a published identity");
  const attacker = createIdentity("evil.local", "mallory");
  const forgedDoc: DIDDocument = { ...attacker.document, id: coder.did };
  forgedDoc.verificationMethod = [{ ...attacker.document.verificationMethod[0], id: coder.did + "#key-1", controller: coder.did }];
  forgedDoc.authentication = [coder.did + "#key-1"];
  registry.publish(forgedDoc);
  const forgedSig = signPayload(attacker, msg.id);
  console.log("attacker signature accepted for the coder DID:", registry.verify(coder.did, forgedSig, msg.id), "| the real coder signature still accepted:", registry.verify(coder.did, sig, msg.id));
  console.log("because publish just overwrites the map entry, anyone who can call it can swap the coder key for their own, after which the attacker signature verifies and the real one stops working; a real registry must restrict who may publish or change a key.");

  section("6. Genuinely running: what the signature covers, and the human-auth lookup");
  const sig2 = signPayload(coder, msg.id);
  const cleanRegistry = new IdentityRegistry();
  cleanRegistry.publish(coder.document);
  const tampered = { ...msg, parts: [{ text: "Delete every record" }] };
  console.log("signature still verifies after the body was replaced:", cleanRegistry.verify(coder.did, sig2, tampered.id), "| new body:", tampered.parts[0].text);
  console.log("requiresHumanAuth for a known DID:", cleanRegistry.requiresHumanAuth(coder.did, coder.did + "#key-1"), "| for an unknown DID:", cleanRegistry.requiresHumanAuth("did:wba:nobody:agent:x", "k"));
  console.log("the signature covers only the message id, so a different body with the same id still verifies, and requiresHumanAuth returns false both for a known DID with no requirement and for an unknown DID, so a caller cannot tell no requirement from no identity; a signature should bind the whole request and the unknown case should be refused.");
}

main().catch((error: unknown) => { console.error("failed:", error); process.exitCode = 1; });
