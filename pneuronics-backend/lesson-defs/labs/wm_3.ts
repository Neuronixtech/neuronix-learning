// Teaching implementation (our own): Why Multi-Agent, Part 3 - the single against multi comparison and the controls a real system adds.
// fakeLLMCall is our own deterministic stand-in (the lesson text does not supply it): no model is called, tokens are ceil(characters / 4) and every call reports one tool call.
// So the token and call counts below describe this stand-in and prove nothing about real model cost, speed or quality.

type AgentResult = { content: string; tokensUsed: number; toolCalls: number };
type FakeLLMResult = { output: string; tokens: number; calls: number };

async function fakeLLMCall(systemPrompt: string, input: string): Promise<FakeLLMResult> {
  const p = systemPrompt.toLowerCase();
  const i = input.toLowerCase();
  let output: string;
  if (p.includes("technical researcher") || i.startsWith("research:")) output = "Research findings: configurable limit, HTTP 429 when exceeded, shared storage across instances.";
  else if (p.includes("code reviewer") || i.includes("review the code")) output = "Review findings: check trusted proxy configuration, concurrency and expiry.";
  else output = "Implementation proposal: Express middleware with a configurable request limit.";
  return { output, tokens: Math.ceil((systemPrompt.length + input.length + output.length) / 4), calls: 1 };
}

const SINGLE_PROMPT = "You are a full-stack developer. You must: research, write the code, review the code, write tests. Do ALL of these in a single conversation.";

async function singleAgentApproach(task: string): Promise<AgentResult> {
  const ctx: string[] = [];
  let tokens = 0;
  let calls = 0;
  for (const step of [`Research: ${task}`, `Given this research:\n%CTX%\n\nNow write code for: ${task}`, `Given all previous context:\n%CTX%\n\nReview the code.`]) {
    const r = await fakeLLMCall(SINGLE_PROMPT, step.replace("%CTX%", ctx.join("\n")));
    ctx.push(r.output); tokens += r.tokens; calls += r.calls;
  }
  return { content: ctx.join("\n---\n"), tokensUsed: tokens, toolCalls: calls };
}

async function multiAgentApproach(task: string): Promise<AgentResult> {
  const prompts = ["You are a technical researcher. Summarize findings.", "You are a senior TypeScript developer. Write clean code.", "You are a code reviewer. Find bugs."];
  const research = await fakeLLMCall(prompts[0], task);
  const code = await fakeLLMCall(prompts[1], `[From researcher]: ${research.output}`);
  const review = await fakeLLMCall(prompts[2], `[From coder]: ${code.output}`);
  return { content: [research.output, code.output, review.output].join("\n\n"), tokensUsed: research.tokens + code.tokens + review.tokens, toolCalls: 3 };
}

async function measureDuration<T>(operation: () => Promise<T>): Promise<{ result: T; durationMs: number }> {
  const start = performance.now();
  const result = await operation();
  return { result, durationMs: performance.now() - start };
}

type ResearchHandoff = { taskId: string; requirements: string[]; constraints: string[]; evidence: string[]; openQuestions: string[] };

async function retryOperation<T>(operation: () => Promise<T>, maxAttempts: number): Promise<T> {
  if (!Number.isInteger(maxAttempts) || maxAttempts < 1) throw new Error("maxAttempts must be positive");
  let lastError: unknown;
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try { return await operation(); } catch (error) { lastError = error; }
  }
  throw lastError;
}

async function runWithTimeout<T>(operation: (signal: AbortSignal) => Promise<T>, timeoutMs: number): Promise<T> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try { return await operation(controller.signal); } finally { clearTimeout(timer); }
}

type VerificationResult = { buildPassed: boolean; testsPassed: boolean; scopePassed: boolean; criticalFindings: number; humanApprovalRequired: boolean; humanApproved: boolean };
function isComplete(r: VerificationResult): boolean {
  if (!r.buildPassed) return false;
  if (!r.testsPassed) return false;
  if (!r.scopePassed) return false;
  if (r.criticalFindings > 0) return false;
  if (r.humanApprovalRequired && !r.humanApproved) return false;
  return true;
}

const section = (title: string) => console.log(`\n--- ${title} ---`);
const sleep = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));

async function main() {
  const task = "Build a rate limiter middleware for an Express.js API";

  section("1. Genuinely running: the lesson compare() on the stand-in");
  const single = await measureDuration(() => singleAgentApproach(task));
  const multi = await measureDuration(() => multiAgentApproach(task));
  console.log(`single agent: tokens ${single.result.tokensUsed}, tool calls ${single.result.toolCalls}`);
  console.log(`multi-agent: tokens ${multi.result.tokensUsed}, tool calls ${multi.result.toolCalls}`);
  console.log("multi-agent reports fewer tokens than single:", multi.result.tokensUsed < single.result.tokensUsed, "| equal calls:", multi.result.toolCalls === single.result.toolCalls);
  console.log("both durations are under 50 ms:", single.durationMs < 50 && multi.durationMs < 50);
  console.log("the stand-in gives each specialist a short prompt and a short input, so the multi-agent total comes out lower here and both report three calls; this reflects how the stand-in counts characters, and a real comparison would need real model usage, repeated trials and a quality check, because tokens and calls say nothing about correctness.");

  section("2. Genuinely running: what a lossy handoff drops");
  const handoff: ResearchHandoff = {
    taskId: "rate-limit-001",
    requirements: ["Return HTTP 429 when limits are exceeded"],
    constraints: ["Counters must work across application instances", "Do not trust unvalidated forwarded IP headers"],
    evidence: ["Approved API specification"],
    openQuestions: ["What happens when Redis is unavailable?"],
  };
  const lossy = "Implement rate limiting using Redis.";
  const structured = JSON.stringify(handoff);
  console.log("lossy summary mentions the forwarded-header constraint:", lossy.includes("forwarded"));
  console.log("structured handoff mentions it:", structured.includes("forwarded"), "| open questions kept:", handoff.openQuestions.length);
  console.log("a one-line summary silently drops the security constraint and the open question while the structured handoff keeps both, so specialists keep clean contexts only when the handoff carries constraints, evidence and unresolved questions, and even a structured handoff still needs checking against its sources.");

  section("3. Genuinely running: bounded retries");
  let attempts = 0;
  const flaky = async () => { attempts++; if (attempts < 3) throw new Error("temporary timeout"); return "completed"; };
  console.log("retry with 3 attempts:", await retryOperation(flaky, 3), "after", attempts, "attempts");
  attempts = 0;
  let failed = "";
  try { await retryOperation(flaky, 2); } catch (e) { failed = (e as Error).message; }
  console.log("retry with 2 attempts ends with:", failed, "after", attempts, "attempts");
  let bad = "";
  try { await retryOperation(flaky, 0); } catch (e) { bad = (e as Error).message; }
  console.log("zero attempts is rejected with:", bad);
  console.log("the helper stops at the stated limit and rethrows the last error, so a flaky call can succeed on the third attempt but not on the second; it retries every error alike, with no backoff and no idempotency, which would be unsafe for a payment or a deployment.");

  section("4. Genuinely running: a timeout that does not cancel");
  let respectedSignal = "no";
  let ignoredFinished = false;
  try {
    await runWithTimeout((signal) => new Promise<string>((resolve, reject) => {
      signal.addEventListener("abort", () => { respectedSignal = "yes"; reject(new Error("aborted")); });
      setTimeout(() => resolve("done"), 200);
    }), 30);
  } catch { /* expected */ }
  console.log("operation that watches the signal was stopped:", respectedSignal);
  const ignoring = runWithTimeout(async () => { await sleep(70); ignoredFinished = true; return "done"; }, 20);
  const early = await Promise.race([ignoring.then(() => "settled"), sleep(10).then(() => "still pending")]);
  await ignoring;
  console.log("operation that ignores the signal:", early, "at 10 ms and then finished anyway:", ignoredFinished);
  console.log("the wrapper only raises the abort signal after the deadline, so an operation that listens to it can stop, while one that ignores it keeps running to the end and the caller still waits; a timeout needs cooperation from the work it guards, which is why cancellation has to be designed in.");

  section("5. Genuinely running: a verification gate");
  const base: VerificationResult = { buildPassed: true, testsPassed: true, scopePassed: true, criticalFindings: 0, humanApprovalRequired: false, humanApproved: false };
  const cases: [string, VerificationResult][] = [
    ["all checks pass", base],
    ["tests fail", { ...base, testsPassed: false }],
    ["one critical finding", { ...base, criticalFindings: 1 }],
    ["approval required, not given", { ...base, humanApprovalRequired: true }],
    ["approval required and given", { ...base, humanApprovalRequired: true, humanApproved: true }],
  ];
  for (const [name, r] of cases) console.log(`${name}: complete = ${isComplete(r)}`);
  console.log("the gate says complete only for the first and last case, so all specialists having replied is not enough; it trusts the facts it is given, and nothing here proves that the tests really ran or that a person really approved, which the surrounding system must establish.");

  section("6. Genuinely computing: the cost model");
  const tasks = 10000;
  const costSingle = tasks * 0.08;
  const costMulti = tasks * 0.13;
  console.log(`single ${costSingle.toFixed(0)} dollars, multi ${costMulti.toFixed(0)} dollars, difference ${(costMulti - costSingle).toFixed(0)} dollars for ${tasks} tasks`);
  console.log("the per-task prices of 0.08 and 0.13 dollars are illustrative inputs from the lesson, so the 500 dollar gap is arithmetic on assumptions and not a measurement; whether it is worth paying depends on whether independent review prevents defects that cost more than that.");
}

main().catch((error: unknown) => { console.error("failed:", error); process.exitCode = 1; });
