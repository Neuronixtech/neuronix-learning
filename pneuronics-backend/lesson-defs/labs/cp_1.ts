// Teaching implementation (our own): Communication Protocols, Part 1 - message types, Agent Cards, a registry and a task lifecycle.
// The message types, createMessage, textMessage and AgentRegistry follow the lesson text. The lesson TaskManager was not in the pasted text, so TaskManager below is our own
// model of the described behaviour (states, events, artifacts, terminal states). No MCP, A2A, ACP or ANP server exists here: everything is in one process.
import crypto from "node:crypto";

type MessageRole = "ROLE_USER" | "ROLE_AGENT";
type MessagePart = { text: string } | { data: unknown; mediaType: string } | { url: string; filename: string; mediaType: string };
type AgentMessage = { id: string; role: MessageRole; parts: MessagePart[]; replyTo?: string; timestamp: number };

function createMessage(role: MessageRole, parts: MessagePart[], replyTo?: string): AgentMessage {
  return { id: crypto.randomUUID(), role, parts, replyTo, timestamp: Date.now() };
}
function textMessage(role: MessageRole, text: string): AgentMessage {
  return createMessage(role, [{ text }]);
}

type Skill = { id: string; name: string; description: string; tags: string[]; inputModes: string[]; outputModes: string[] };
type AgentInterface = { url: string; protocolBinding: string; protocolVersion: string };
type AgentCard = {
  name: string; description: string; version: string; supportedInterfaces: AgentInterface[];
  capabilities: { streaming: boolean; pushNotifications: boolean }; defaultInputModes: string[]; defaultOutputModes: string[]; skills: Skill[];
};

class AgentRegistry {
  private cards: Map<string, AgentCard> = new Map();
  register(card: AgentCard) { this.cards.set(card.name, card); }
  discoverBySkillTag(tag: string): AgentCard[] {
    return [...this.cards.values()].filter((card) => card.skills.some((skill) => skill.tags.includes(tag)));
  }
  discoverByInputMode(mimeType: string): AgentCard[] {
    return [...this.cards.values()].filter((card) => card.defaultInputModes.includes(mimeType) || card.skills.some((skill) => skill.inputModes.includes(mimeType)));
  }
  resolve(name: string): AgentCard | undefined { return this.cards.get(name); }
  listAll(): AgentCard[] { return [...this.cards.values()]; }
}

type TaskState = "TASK_STATE_SUBMITTED" | "TASK_STATE_WORKING" | "TASK_STATE_COMPLETED" | "TASK_STATE_FAILED";
type Task = { id: string; state: TaskState; artifacts: { id: string; name: string }[] };
type TaskEvent = { status?: TaskState; artifact?: { id: string; name: string } };
const TERMINAL: TaskState[] = ["TASK_STATE_COMPLETED", "TASK_STATE_FAILED"];

class TaskManager {
  tasks: Map<string, Task> = new Map();
  handlers: Map<string, (task: Task, message: AgentMessage) => AsyncGenerator<TaskEvent>> = new Map();
  ignored = 0;
  registerHandler(agent: string, handler: (task: Task, message: AgentMessage) => AsyncGenerator<TaskEvent>) { this.handlers.set(agent, handler); }
  async sendMessage(agent: string, message: AgentMessage): Promise<Task> {
    const task: Task = { id: crypto.randomUUID(), state: "TASK_STATE_SUBMITTED", artifacts: [] };
    this.tasks.set(task.id, task);
    const handler = this.handlers.get(agent);
    if (!handler) { task.state = "TASK_STATE_FAILED"; return task; }
    for await (const event of handler(task, message)) {
      if (TERMINAL.includes(task.state)) { this.ignored++; continue; }
      if (event.status) task.state = event.status;
      if (event.artifact) task.artifacts.push(event.artifact);
    }
    return task;
  }
}

function isSinglePart(p: object): boolean {
  const shapes = [("text" in p), ("data" in p && "mediaType" in p && !("url" in p)), ("url" in p && "filename" in p)];
  return shapes.filter(Boolean).length === 1;
}

const researcherCard: AgentCard = {
  name: "researcher", description: "Searches and summarizes findings", version: "1.0.0",
  supportedInterfaces: [{ url: "https://researcher.local/a2a/v1", protocolBinding: "JSONRPC", protocolVersion: "1.0" }],
  capabilities: { streaming: true, pushNotifications: false }, defaultInputModes: ["text/plain"], defaultOutputModes: ["text/plain", "application/json"],
  skills: [{ id: "web-research", name: "Web Research", description: "Searches the web", tags: ["research", "search", "summarization"], inputModes: ["text/plain"], outputModes: ["application/json"] }],
};
const coderCard: AgentCard = {
  name: "coder", description: "Writes code from specs", version: "1.0.0",
  supportedInterfaces: [{ url: "https://coder.local/a2a/v1", protocolBinding: "JSONRPC", protocolVersion: "1.0" }],
  capabilities: { streaming: false, pushNotifications: false }, defaultInputModes: ["text/plain", "application/json"], defaultOutputModes: ["text/plain"],
  skills: [{ id: "code-gen", name: "Code Generation", description: "Generates code", tags: ["coding", "generation"], inputModes: ["text/plain", "application/json"], outputModes: ["text/plain"] }],
};

const section = (title: string) => console.log(`\n--- ${title} ---`);

async function main() {
  section("1. Genuinely running: messages and their identifiers");
  const first = textMessage("ROLE_USER", "Research React 19");
  const reply = createMessage("ROLE_AGENT", [{ text: "Done" }], first.id);
  const second = textMessage("ROLE_USER", "Research React 19");
  console.log("same text, different ids:", first.id !== second.id, "| reply points to the request:", reply.replyTo === first.id, "| id length:", first.id.length);
  console.log("two messages with identical text get different UUIDs and a reply carries the id of the message it answers, which lets a client match answers to requests; an id identifies a message and says nothing about who sent it.");

  section("2. Genuinely running: a part must have exactly one shape");
  const parts: object[] = [{ text: "hello" }, { data: { a: 1 }, mediaType: "application/json" }, { url: "https://example.com/r.pdf", filename: "r.pdf", mediaType: "application/pdf" }, { text: "x", url: "https://example.com/r.pdf", filename: "r.pdf", mediaType: "application/pdf" }];
  console.log("single-shape check:", parts.map((p) => isSinglePart(p)).join(", "));
  console.log("the three single-shape parts pass and an object that mixes a text field with a file reference fails the exact-one-shape check even though each of its fields is valid on its own, so a runtime validator is needed to enforce one shape per part; a url part is only a reference and nothing was downloaded.");

  section("3. Genuinely running: discovery by skill tag and by input mode");
  const registry = new AgentRegistry();
  registry.register(researcherCard);
  registry.register(coderCard);
  console.log("tag research:", registry.discoverBySkillTag("research").map((c) => c.name));
  console.log("tag coding:", registry.discoverBySkillTag("coding").map((c) => c.name));
  console.log("input application/json:", registry.discoverByInputMode("application/json").map((c) => c.name), "| text/plain:", registry.discoverByInputMode("text/plain").map((c) => c.name));
  console.log("unknown name resolves to:", registry.resolve("planner"), "| all cards:", registry.listAll().length);
  console.log("the research tag finds only the researcher, the json input mode finds only the coder and text/plain finds both, so a caller can ask for a capability and not a name; a match on advertised tags is only a claim, because the card was written by the agent owner and nothing here tests that the skill works or that the caller may use it.");

  section("4. Genuinely running: a task through submitted, working, artifact and completed");
  const tm = new TaskManager();
  tm.registerHandler("researcher", async function* (task) {
    yield { status: "TASK_STATE_WORKING" };
    yield { artifact: { id: crypto.randomUUID(), name: "research-results" } };
    yield { status: "TASK_STATE_COMPLETED" };
    yield { artifact: { id: crypto.randomUUID(), name: "late-artifact" } };
    yield { status: "TASK_STATE_WORKING" };
  });
  const task = await tm.sendMessage("researcher", first);
  console.log("final state:", task.state, "| artifacts kept:", task.artifacts.map((a) => a.name), "| events ignored after the end state:", tm.ignored);
  console.log("after the completed state the later artifact and the later working update were both dropped and counted as ignored, so a finished task cannot be reopened by a stray event; this is our own model of terminal states and not the lesson TaskManager.");

  section("5. Genuinely running: an advertised card with nobody behind it");
  const ghost = registry.resolve("coder");
  const failed = await tm.sendMessage("coder", first);
  console.log("card found:", ghost !== undefined, "| advertised endpoint:", ghost?.supportedInterfaces[0].url, "| task state when no handler exists:", failed.state);
  console.log("the registry returns a complete card with an endpoint for the coder, yet sending it work fails because no handler was ever registered, so an advertised interface is not an implemented one; discovery tells you what an agent claims and not that it can be reached.");
}

main().catch((error: unknown) => { console.error("failed:", error); process.exitCode = 1; });
