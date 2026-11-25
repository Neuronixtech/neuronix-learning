// Teaching implementation (our own): Why Multi-Agent, Part 2 - message passing, coordination, fan-out and fan-in, consensus and a peer swarm.
// fakeLLMCall is our own deterministic stand-in (the lesson text does not supply it): no model is called and tokens are ceil(characters / 4).
// Only multiAgentApproach follows the lesson code; the fan-out, voting and swarm sections are the lesson illustrations, run here for real.

type AgentResult = { content: string; tokensUsed: number; toolCalls: number };
type FakeLLMResult = { output: string; tokens: number; calls: number };
type SpecialistAgent = { name: string; systemPrompt: string; run: (input: string) => Promise<AgentResult> };
type AgentMessage = { from: string; to: string; content: string; timestamp: number };

const seenInputs: Record<string, string> = {};

async function fakeLLMCall(systemPrompt: string, input: string): Promise<FakeLLMResult> {
  const p = systemPrompt.toLowerCase();
  let who: string;
  let output: string;
  if (p.includes("technical researcher")) { who = "researcher"; output = "Research findings: shared storage for counters, HTTP 429 on excess, document the window."; }
  else if (p.includes("code reviewer")) { who = "reviewer"; output = "Review findings: trusted proxy settings are not validated."; }
  else { who = "coder"; output = "Implementation proposal: Express middleware with a configurable limit."; }
  seenInputs[who] = input;
  return { output, tokens: Math.ceil((systemPrompt.length + input.length + output.length) / 4), calls: 1 };
}

function createSpecialist(name: string, systemPrompt: string): SpecialistAgent {
  return { name, systemPrompt, run: async (input: string) => { const r = await fakeLLMCall(systemPrompt, input); return { content: r.output, tokensUsed: r.tokens, toolCalls: r.calls }; } };
}
const researcher = createSpecialist("researcher", "You are a technical researcher. Read documentation, find patterns, and summarize findings.");
const coder = createSpecialist("coder", "You are a senior TypeScript developer. Given requirements and research notes, write clean, tested code.");
const reviewer = createSpecialist("reviewer", "You are a code reviewer. Find bugs, security issues, and logic errors.");

async function multiAgentApproach(task: string): Promise<{ result: AgentResult; messages: AgentMessage[] }> {
  const messages: AgentMessage[] = [];
  let totalTokens = 0;
  let totalToolCalls = 0;
  const researchResult = await researcher.run(task);
  messages.push({ from: "researcher", to: "coder", content: researchResult.content, timestamp: Date.now() });
  totalTokens += researchResult.tokensUsed; totalToolCalls += researchResult.toolCalls;
  const coderInput = messages.filter((m) => m.to === "coder").map((m) => `[From ${m.from}]: ${m.content}`).join("\n");
  const codeResult = await coder.run(coderInput);
  messages.push({ from: "coder", to: "reviewer", content: codeResult.content, timestamp: Date.now() });
  totalTokens += codeResult.tokensUsed; totalToolCalls += codeResult.toolCalls;
  const reviewerInput = messages.filter((m) => m.to === "reviewer").map((m) => `[From ${m.from}]: ${m.content}`).join("\n");
  const reviewResult = await reviewer.run(reviewerInput);
  messages.push({ from: "reviewer", to: "orchestrator", content: reviewResult.content, timestamp: Date.now() });
  totalTokens += reviewResult.tokensUsed; totalToolCalls += reviewResult.toolCalls;
  return { result: { content: messages.map((m) => `[${m.from} -> ${m.to}]: ${m.content}`).join("\n\n"), tokensUsed: totalTokens, toolCalls: totalToolCalls }, messages };
}

type AgentRole = "researcher" | "coder" | "reviewer";
function nextAgent(current: AgentRole): AgentRole | null {
  if (current === "researcher") return "coder";
  if (current === "coder") return "reviewer";
  return null;
}

type Finding = { source: string; severity: "low" | "medium" | "high"; description: string };
let started = 0;
async function review(source: string, severity: Finding["severity"], fail = false): Promise<Finding[]> {
  started++;
  await new Promise<void>((r) => setTimeout(r, 5));
  if (fail) throw new Error(`${source} reviewer unavailable`);
  return [{ source, severity, description: `${source} finding` }];
}

type ReviewVote = { reviewer: string; approved: boolean };
function majorityApproved(votes: ReviewVote[]): boolean {
  if (votes.length === 0) return false;
  return votes.filter((v) => v.approved).length > votes.length / 2;
}
type ReviewDecision = { reviewer: string; approved: boolean; criticalIssue: boolean };
function canRelease(reviews: ReviewDecision[]): boolean {
  if (reviews.length === 0) return false;
  if (reviews.some((r) => r.criticalIssue)) return false;
  return reviews.every((r) => r.approved);
}

type SwarmTask = { id: number; description: string };
type RoutedTask = { id: string; handoffs: number; maxHandoffs: number };
const canDelegate = (t: RoutedTask) => t.handoffs < t.maxHandoffs;

const section = (title: string) => console.log(`\n--- ${title} ---`);

async function main() {
  const task = "Build a rate limiter middleware for an Express.js API";

  section("1. Genuinely running: the message pipeline");
  const { result, messages } = await multiAgentApproach(task);
  for (const m of messages) console.log(`${m.from} -> ${m.to}: ${m.content.length} characters`);
  console.log("tokens:", result.tokensUsed, "| tool calls:", result.toolCalls);
  console.log("coder input starts with:", JSON.stringify(seenInputs.coder.slice(0, 22)));
  console.log("reviewer input contains the research text:", seenInputs.reviewer.includes("Research findings"));
  console.log("the three stages run one after another and each specialist receives only the messages addressed to it, so the reviewer never sees the research text; the last message goes to a recipient called orchestrator that is only a string here, and nothing applies the review or loops back to the coder.");

  section("2. Genuinely running: recipient filtering is routing and not access control");
  const sample: AgentMessage[] = [
    { from: "researcher", to: "coder", content: "Use Redis.", timestamp: 1000 },
    { from: "tester", to: "reviewer", content: "Two tests failed.", timestamp: 2000 },
  ];
  console.log("messages for coder:", sample.filter((m) => m.to === "coder").length, "| messages for reviewer:", sample.filter((m) => m.to === "reviewer").length);
  console.log("code holding the whole array can still read every message:", sample.map((m) => m.content).join(" / "));
  console.log("filter selects what is passed on, which keeps prompts small, but any code that holds the array can read all of it, so the filter is not a security boundary and real isolation needs separate stores and permissions.");

  section("3. Genuinely running: a deterministic coordinator");
  const roles: AgentRole[] = ["researcher", "coder", "reviewer"];
  console.log(roles.map((r) => `${r} -> ${nextAgent(r)}`).join(" | "));
  console.log("a coordinator applies a fixed routing rule with no model call, so its behaviour is predictable, while an orchestrator that reasons about the next step would add model calls and the freedom to change the order.");

  section("4. Genuinely running: fan-out and fan-in");
  started = 0;
  const all = await Promise.all([review("security", "high"), review("performance", "medium"), review("contract", "low")]);
  console.log("findings after flat():", all.flat().map((f) => `${f.source}:${f.severity}`).join(", "));
  started = 0;
  const settled = await Promise.allSettled([review("security", "high", true), review("performance", "medium"), review("contract", "low")]);
  console.log("allSettled statuses:", settled.map((s) => s.status).join(", "));
  let rejected = "";
  started = 0;
  try { await Promise.all([review("security", "high", true), review("performance", "medium"), review("contract", "low")]); } catch (e) { rejected = (e as Error).message; }
  console.log("Promise.all rejected with:", rejected, "| reviews started:", started);
  console.log("Promise.all rejects as soon as one worker fails and does not cancel the others, which had already started, while allSettled keeps the two good results next to the failure; a failed security review should still block a release even when the other two succeed.");

  section("5. Genuinely running: voting policies");
  const votes: ReviewVote[] = [{ reviewer: "A", approved: true }, { reviewer: "B", approved: false }, { reviewer: "C", approved: true }];
  console.log("majority approves A,B,C = true,false,true:", majorityApproved(votes));
  const reviews: ReviewDecision[] = [{ reviewer: "A", approved: true, criticalIssue: false }, { reviewer: "B", approved: true, criticalIssue: true }, { reviewer: "C", approved: true, criticalIssue: false }];
  console.log("canRelease with every vote approved but one critical issue:", canRelease(reviews));
  console.log("canRelease with no reviews:", canRelease([]), "| majority with no votes:", majorityApproved([]));
  console.log("a majority rule approves a change that one reviewer rejected, while the risk-aware rule refuses it because of the critical issue, and both refuse an empty set of reviews; consensus here is only a decision rule and proves nothing about whether the finding is true.");

  section("6. Genuinely computing: messages with and without a hub");
  const rows = [3, 6, 10, 20, 50].map((n) => `${n} agents: all-to-all ${n * (n - 1)}, hub ${2 * n}`);
  console.log(rows.join("\n"));
  console.log("all-to-all directed messages grow as N times N minus one while a hub needs two connections per agent, so at fifty agents the counts are 2450 against 100; these are topology counts under stated assumptions and not measured traffic, and the hub trades fewer links for a possible bottleneck.");

  section("7. Genuinely running: a peer swarm and a handoff cap");
  const queue: SwarmTask[] = [1, 2, 3, 4].map((id) => ({ id, description: `task ${id}` }));
  const claims: string[] = [];
  async function worker(name: string): Promise<void> {
    while (true) {
      const t = queue.shift();
      if (!t) break;
      claims.push(`${name}:${t.id}`);
      await Promise.resolve();
    }
  }
  await Promise.all([worker("A"), worker("B"), worker("C")]);
  const ids = claims.map((c) => c.split(":")[1]);
  console.log("claims:", claims.join(" "));
  console.log("every task claimed exactly once:", new Set(ids).size === 4 && ids.length === 4);
  console.log("canDelegate at 2 of 3 handoffs:", canDelegate({ id: "t", handoffs: 2, maxHandoffs: 3 }), "| at 3 of 3:", canDelegate({ id: "t", handoffs: 3, maxHandoffs: 3 }));
  console.log("queue.shift() claims a task before the worker first awaits, so no task is claimed twice inside this one single-threaded process; that is a property of this setting only, and separate processes need atomic claims and leases, while the handoff cap stops a delegation loop but does not detect a cycle.");
}

main().catch((error: unknown) => { console.error("failed:", error); process.exitCode = 1; });
