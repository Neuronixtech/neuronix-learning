// Teaching implementation (our own): Why Multi-Agent, Part 1 - the single-agent ceiling and specialist agents.
// The lesson text references fakeLLMCall but does not supply it, so fakeLLMCall below is our own deterministic stand-in: it calls no model,
// it estimates tokens as ceil(characters / 4), and it reports one call per invocation. Nothing here measures a real LLM.

type AgentResult = { content: string; tokensUsed: number; toolCalls: number };
type FakeLLMResult = { output: string; tokens: number; calls: number };
type SpecialistAgent = { name: string; systemPrompt: string; run: (input: string) => Promise<AgentResult> };

const callLog: { prompt: string; inputChars: number }[] = [];

async function fakeLLMCall(systemPrompt: string, input: string): Promise<FakeLLMResult> {
  const p = systemPrompt.toLowerCase();
  const i = input.toLowerCase();
  let output: string;
  if (p.includes("technical researcher") || i.startsWith("research:")) {
    output = "Research findings: use a configurable rate limit, return HTTP 429 when exceeded, and consider shared storage across instances.";
  } else if (p.includes("code reviewer") || i.includes("review the code")) {
    output = "Review findings: check trusted proxy configuration, concurrent requests, counter expiry and tests.";
  } else {
    output = "Implementation proposal: Express middleware with a configurable request limit and time window.";
  }
  callLog.push({ prompt: systemPrompt.slice(0, 24), inputChars: input.length });
  return { output, tokens: Math.ceil((systemPrompt.length + input.length + output.length) / 4), calls: 1 };
}

const SINGLE_PROMPT = `You are a full-stack developer. You must:
1. Research the requirements
2. Write the code
3. Review the code for bugs
4. Write tests
Do ALL of these in a single conversation.`;

async function singleAgentApproach(task: string): Promise<AgentResult> {
  const contextWindow: string[] = [];
  let totalTokens = 0;
  let totalToolCalls = 0;
  const research = await fakeLLMCall(SINGLE_PROMPT, `Research: ${task}`);
  contextWindow.push(research.output);
  totalTokens += research.tokens;
  totalToolCalls += research.calls;
  const code = await fakeLLMCall(SINGLE_PROMPT, `Given this research:\n${contextWindow.join("\n")}\n\nNow write code for: ${task}`);
  contextWindow.push(code.output);
  totalTokens += code.tokens;
  totalToolCalls += code.calls;
  const review = await fakeLLMCall(SINGLE_PROMPT, `Given all previous context:\n${contextWindow.join("\n")}\n\nReview the code.`);
  contextWindow.push(review.output);
  totalTokens += review.tokens;
  totalToolCalls += review.calls;
  return { content: contextWindow.join("\n---\n"), tokensUsed: totalTokens, toolCalls: totalToolCalls };
}

function createSpecialist(name: string, systemPrompt: string): SpecialistAgent {
  return {
    name,
    systemPrompt,
    run: async (input: string) => {
      const result = await fakeLLMCall(systemPrompt, input);
      return { content: result.output, tokensUsed: result.tokens, toolCalls: result.calls };
    },
  };
}

const researcher = createSpecialist("researcher", "You are a technical researcher. Read documentation, find patterns, and summarize findings. Output only the facts needed for implementation.");
const coder = createSpecialist("coder", "You are a senior TypeScript developer. Given requirements and research notes, write clean, tested code. Nothing else.");
const reviewer = createSpecialist("reviewer", "You are a code reviewer. Find bugs, security issues, and logic errors. Be specific. Cite line numbers.");

function useMultiAgent(toolCalls: number, tokens: number): boolean {
  return toolCalls >= 20 || tokens >= 100000;
}

const sleep = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));
const section = (title: string) => console.log(`\n--- ${title} ---`);

async function main() {
  const task = "Build a rate limiter middleware for an Express.js API";

  section("1. Genuinely running: the overloaded single agent");
  callLog.length = 0;
  const single = await singleAgentApproach(task);
  console.log("tokens:", single.tokensUsed, "| tool calls:", single.toolCalls);
  console.log("input characters per call:", callLog.map((c) => c.inputChars).join(", "));
  console.log("every call used the same system prompt:", new Set(callLog.map((c) => c.prompt)).size === 1);
  console.log("each call receives all earlier output, so the input grows from the first call to the third while the system prompt never changes; the numbers come from our stand-in, so they show the shape of the growth and not real model usage.");

  section("2. Genuinely running: three specialists with separate prompts");
  callLog.length = 0;
  for (const agent of [researcher, coder, reviewer]) {
    const r = await agent.run(task);
    console.log(`${agent.name}: prompt ${agent.systemPrompt.length} characters, tokens ${r.tokensUsed}, calls ${r.toolCalls}`);
  }
  console.log("distinct system prompts:", new Set(callLog.map((c) => c.prompt)).size);
  console.log("createSpecialist gives each role its own prompt and a common run() interface, and all three run through the same stand-in call, so the only difference between the roles is the prompt text they carry.");

  section("3. Genuinely running: duties in the prompt against calls in the code");
  const duties = (SINGLE_PROMPT.match(/^\d+\./gm) || []).length;
  console.log("numbered duties in the single-agent prompt:", duties);
  console.log("calls the single-agent function actually makes:", single.toolCalls);
  console.log("the prompt asks for four duties but the code path makes three calls and has no test stage, so the stated responsibilities and the executed ones differ; reading the prompt alone would overstate what the function does.");

  section("4. Genuinely running: sequential against parallel when work is independent");
  const t0 = performance.now();
  await sleep(60); await sleep(60); await sleep(60);
  const seq = performance.now() - t0;
  const t1 = performance.now();
  await Promise.all([sleep(60), sleep(60), sleep(60)]);
  const par = performance.now() - t1;
  console.log("three independent 60 ms waits, sequential about", Math.round(seq / 10) * 10, "ms, parallel about", Math.round(par / 10) * 10, "ms");
  console.log("sequential at least 170 ms:", seq >= 170, "| parallel under 100 ms:", par < 100);
  console.log("timers are measured with performance.now() and rounded to ten milliseconds, so exact values change between runs; the finding is the shape, a sum for sequential waits against roughly the longest wait for independent ones, and it holds only because these three waits do not depend on each other.");

  section("5. Genuinely running: the lesson heuristic for when one agent is enough");
  const cases: [string, number, number][] = [["rename one function", 6, 12000], ["research, code, review", 18, 60000], ["multi-service migration", 40, 90000], ["huge context", 12, 150000]];
  for (const [name, calls, tokens] of cases) console.log(`${name}: ${calls} calls, ${tokens} tokens -> multi-agent worth considering: ${useMultiAgent(calls, tokens)}`);
  console.log("the rule of thumb of about twenty tool calls and one hundred thousand tokens flags the last two cases, and it is a heuristic taken from the lesson and not a technical limit, so a small task with a real need for independent review can still justify specialists.");
}

main().catch((error: unknown) => { console.error("failed:", error); process.exitCode = 1; });
