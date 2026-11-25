// Teaching implementation (our own): Communication Protocols, Part 3 - a gateway that joins discovery, identity, audit and task delegation.
// The lesson text for this part stops in the middle of the delegation step, and the lesson TaskManager, signPayload and ProtocolGateway were not in the pasted text.
// TaskManager and ProtocolGateway below are our own models of the described design (identity check, then discovery, then audit run, then task send; tasks continue asynchronously).
// Nothing is a real MCP, A2A, ACP or ANP service, and the research results are hard-coded stand-ins.
import crypto from "node:crypto";

type AgentMessage = { id: string; body: string };
type Traj = { reasoning: string; toolName?: string; taskId?: string };
type AuditEntry = { agent: string; status: "completed" | "failed"; trajectory: Traj[] };
type TState = "TASK_STATE_SUBMITTED" | "TASK_STATE_WORKING" | "TASK_STATE_COMPLETED" | "TASK_STATE_FAILED";
type Task = { id: string; state: TState; artifacts: number };

const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));
const newMessage = (body: string): AgentMessage => ({ id: crypto.randomUUID(), body });

class AuditRunner {
  log: AuditEntry[] = [];
  handlers = new Map<string, () => Promise<Traj[]>>();
  async run(agent: string): Promise<AuditEntry> {
    const handler = this.handlers.get(agent);
    if (!handler) { const e: AuditEntry = { agent, status: "failed", trajectory: [] }; this.log.push(e); return e; }
    const entry: AuditEntry = { agent, status: "completed", trajectory: structuredClone(await handler()) };
    this.log.push(entry);
    return entry;
  }
}

class TaskManager {
  tasks = new Map<string, Task>();
  handlers = new Map<string, (task: Task) => AsyncGenerator<{ status?: TState; artifact?: boolean }>>();
  running = new Map<string, Promise<void>>();
  async sendMessage(agent: string): Promise<Task> {
    const task: Task = { id: crypto.randomUUID(), state: "TASK_STATE_SUBMITTED", artifacts: 0 };
    this.tasks.set(task.id, task);
    const handler = this.handlers.get(agent);
    if (!handler) { task.state = "TASK_STATE_FAILED"; return task; }
    this.running.set(task.id, this.process(task, handler));
    return task;
  }
  async process(task: Task, handler: (t: Task) => AsyncGenerator<{ status?: TState; artifact?: boolean }>) {
    try {
      for await (const ev of handler(task)) {
        if (task.state === "TASK_STATE_COMPLETED" || task.state === "TASK_STATE_FAILED") continue;
        if (ev.status) task.state = ev.status;
        if (ev.artifact) task.artifacts++;
      }
    } catch { task.state = "TASK_STATE_FAILED"; }
  }
  async waitFor(id: string) { await this.running.get(id); return this.tasks.get(id) as Task; }
}

type Identity = { did: string; privateKey: crypto.KeyObject; publicKey: crypto.KeyObject };
function createIdentity(name: string): Identity {
  const { publicKey, privateKey } = crypto.generateKeyPairSync("ed25519");
  return { did: `did:wba:${name}.local:agent:${name}`, privateKey, publicKey };
}
const sign = (id: Identity, payload: string) => crypto.sign(null, Buffer.from(payload), id.privateKey).toString("hex");
class Keys {
  keys = new Map<string, crypto.KeyObject>();
  publish(id: Identity) { this.keys.set(id.did, id.publicKey); }
  verify(did: string, signature: string, payload: string) {
    const key = this.keys.get(did);
    return key ? crypto.verify(null, Buffer.from(payload), key, Buffer.from(signature, "hex")) : false;
  }
}

class ProtocolGateway {
  names: Set<string>; tm: TaskManager; audit: AuditRunner; keys: Keys; seen = new Set<string>();
  constructor(names: Set<string>, tm: TaskManager, audit: AuditRunner, keys: Keys) { this.names = names; this.tm = tm; this.audit = audit; this.keys = keys; }
  async delegate(did: string, signature: string, target: string, message: AgentMessage) {
    if (!this.keys.verify(did, signature, message.id)) return { error: "Signature verification failed" };
    if (!this.names.has(target)) return { error: "Unknown agent" };
    const audit = await this.audit.run(target);
    const task = await this.tm.sendMessage(target);
    return { audit, task };
  }
  // Our extension: the signature binds the body, target and a nonce, and a nonce can be used once.
  async delegateBound(did: string, signature: string, target: string, body: string, nonce: string) {
    const canonical = JSON.stringify({ body, target, nonce });
    if (!this.keys.verify(did, signature, canonical)) return { error: "Signature verification failed" };
    if (this.seen.has(nonce)) return { error: "Replay rejected" };
    this.seen.add(nonce);
    return { ok: true };
  }
}

const section = (title: string) => console.log(`\n--- ${title} ---`);

async function main() {
  const shared: Traj[] = [];
  const tm = new TaskManager();
  const audit = new AuditRunner();
  tm.handlers.set("researcher", async function* (task) {
    yield { status: "TASK_STATE_WORKING" };
    await sleep(5);
    shared.push({ reasoning: "search", toolName: "web_search", taskId: task.id });
    await sleep(5);
    shared.push({ reasoning: "analyse", toolName: "doc_analysis", taskId: task.id });
    yield { artifact: true };
    yield { status: "TASK_STATE_COMPLETED" };
  });
  audit.handlers.set("researcher", async () => shared);
  const keys = new Keys();
  const coder = createIdentity("coder");
  keys.publish(coder);
  const gateway = new ProtocolGateway(new Set(["researcher", "coder"]), tm, audit, keys);

  section("1. Genuinely running: the delegation and what each status really says");
  const m1 = newMessage("Research React 19");
  const r1 = await gateway.delegate(coder.did, sign(coder, m1.id), "researcher", m1) as { audit: AuditEntry; task: Task };
  console.log("right after delegation: audit status", r1.audit.status, "| audit steps", r1.audit.trajectory.length, "| task state", r1.task.state);
  const done = await tm.waitFor(r1.task.id);
  console.log("after waiting: task state", done.state, "| artifacts", done.artifacts, "| shared trajectory now", shared.length, "| stored audit steps", audit.log[0].trajectory.length);
  console.log("the audit run finished first and copied an empty trajectory, the task had only just started working at that moment and completed later with two steps in the shared list, so the audit record says completed with no steps while the real work had not finished; the audit status describes the audit handler and not the task.");

  section("2. Genuinely running: two tasks writing to one shared trajectory list");
  shared.length = 0;
  const m2 = newMessage("task A"), m3 = newMessage("task B");
  const ra = await gateway.delegate(coder.did, sign(coder, m2.id), "researcher", m2) as { task: Task };
  const rb = await gateway.delegate(coder.did, sign(coder, m3.id), "researcher", m3) as { task: Task };
  await tm.waitFor(ra.task.id); await tm.waitFor(rb.task.id);
  const perTask = new Map<string, number>();
  for (const t of shared) perTask.set(t.taskId as string, (perTask.get(t.taskId as string) || 0) + 1);
  console.log("entries in the one shared list:", shared.length, "| entries per task id:", [...perTask.values()].join(", "), "| unattributed without the task id field:", shared.length);
  console.log("two concurrent tasks produced four entries in a single list, so a reader of the list alone cannot say which entries belong to which task; the lab only knows because each entry also carries a task id, and the lesson shared array has no such field.");

  section("3. Genuinely running: a trajectory kept per task, audited after completion");
  const perTaskLog = new Map<string, Traj[]>();
  tm.handlers.set("researcher", async function* (task) {
    yield { status: "TASK_STATE_WORKING" };
    await sleep(5);
    perTaskLog.set(task.id, [{ reasoning: "search" }, { reasoning: "analyse" }]);
    yield { artifact: true };
    yield { status: "TASK_STATE_COMPLETED" };
  });
  const m4 = newMessage("task C");
  const rc = await gateway.delegate(coder.did, sign(coder, m4.id), "researcher", m4) as { task: Task };
  await tm.waitFor(rc.task.id);
  audit.handlers.set("researcher", async () => perTaskLog.get(rc.task.id) as Traj[]);
  const late = await audit.run("researcher");
  console.log("audit taken after completion: status", late.status, "| steps", late.trajectory.length, "| task state", tm.tasks.get(rc.task.id)?.state);
  console.log("taking the audit entry after the task finished and reading that task own list gives two steps that match the completed task, so the fix for the empty record is to audit after completion and to keep one trajectory per task, not a shared array.");

  section("4. Genuinely running: refusals create no task");
  const before = tm.tasks.size, logBefore = audit.log.length;
  const stranger = createIdentity("stranger");
  const m5 = newMessage("hello");
  const bad = await gateway.delegate(coder.did, sign(stranger, m5.id), "researcher", m5);
  const unknown = await gateway.delegate(coder.did, sign(coder, m5.id), "planner", m5);
  console.log("wrong signer:", "error" in bad ? bad.error : "accepted", "| unknown agent:", "error" in unknown ? unknown.error : "accepted");
  console.log("tasks created:", tm.tasks.size - before, "| audit entries added:", audit.log.length - logBefore);
  console.log("a signature from the wrong key and a request for an agent that is not registered were both refused before anything ran, so no task and no audit entry was created; the order of checks in the gateway is what keeps a refused request from leaving side effects.");

  section("5. Genuinely running: replay, and a signature that binds the request");
  const m6 = newMessage("Research React 19");
  const sigId = sign(coder, m6.id);
  const first = await gateway.delegate(coder.did, sigId, "researcher", m6) as { task: Task };
  const again = await gateway.delegate(coder.did, sigId, "researcher", { ...m6, body: "Delete everything" }) as { task: Task };
  console.log("same signature used twice with a changed body:", first.task.id !== again.task.id ? "two tasks created" : "one task");
  const nonce = crypto.randomUUID();
  const canonical = JSON.stringify({ body: "Research React 19", target: "researcher", nonce });
  const sigBound = sign(coder, canonical);
  console.log("bound request:", await gateway.delegateBound(coder.did, sigBound, "researcher", "Research React 19", nonce));
  console.log("replayed:", await gateway.delegateBound(coder.did, sigBound, "researcher", "Research React 19", nonce));
  console.log("body changed:", await gateway.delegateBound(coder.did, sigBound, "researcher", "Delete everything", nonce));
  console.log("the lesson style signature over the id alone accepted the same signature twice and with a different body, creating two tasks, while signing the body, target and a one-time nonce accepted the first use and refused both the replay and the changed body; the seen-nonce set lives in memory, so it is lost on restart.");

  section("6. Genuinely running: a failing task next to a completed audit");
  tm.handlers.set("researcher", async function* () { yield { status: "TASK_STATE_WORKING" }; throw new Error("search tool unavailable"); });
  audit.handlers.set("researcher", async () => []);
  const m7 = newMessage("will fail");
  const r7 = await gateway.delegate(coder.did, sign(coder, m7.id), "researcher", m7) as { audit: AuditEntry; task: Task };
  const end = await tm.waitFor(r7.task.id);
  console.log("audit status:", r7.audit.status, "| task state:", end.state);
  console.log("the audit entry says completed while the task ended failed, because they describe two different executions, so a dashboard or a reviewer that reads only the audit status would report success for work that failed; the two records have to be linked and checked together.");
}

main().catch((error: unknown) => { console.error("failed:", error); process.exitCode = 1; });
