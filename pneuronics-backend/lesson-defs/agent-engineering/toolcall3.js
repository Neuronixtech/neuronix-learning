module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6066020ed05b32151d",
 "order": 2,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Tool Use and Function Calling (Part 3 of 3) — Parallel Calls, Routing, Dynamic Agents and State-Based Evaluation",
 "titleKn": "Tool Use ಮತ್ತು Function Calling (ಭಾಗ 3 / 3) — ಸಮಾನಾಂತರ ಕರೆಗಳು, Routing, ಕ್ರಿಯಾತ್ಮಕ Agents ಮತ್ತು State-Based ಮೌಲ್ಯಮಾಪನ",
 "desc": "Run independent tool calls in parallel and join them by tool_use_id, test a router and find three of the lesson's routing claims fail, run a dynamic agent, evaluate final state, and see that a timed-out write can still happen and that a stress test without a race proves little.",
 "descKn": "ಸ್ವತಂತ್ರ tool ಕರೆಗಳನ್ನು ಸಮಾನಾಂತರವಾಗಿ ಚಲಾಯಿಸಿ tool_use_id ಮೂಲಕ ಜೋಡಿಸಿ, router ಪರೀಕ್ಷಿಸಿ ಪಾಠದ ಮೂರು routing ಹೇಳಿಕೆಗಳು ವಿಫಲವಾಗುವುದನ್ನು ಕಂಡುಹಿಡಿಯಿರಿ, ಕ್ರಿಯಾತ್ಮಕ agent ಚಲಾಯಿಸಿ, ಅಂತಿಮ ಸ್ಥಿತಿ ಮೌಲ್ಯಮಾಪನ ಮಾಡಿ, ಮತ್ತು timeout ಆದ ಬರವಣಿಗೆ ಇನ್ನೂ ನಡೆಯಬಹುದು ಹಾಗೂ ಓಟ ಸಿಗದ ಒತ್ತಡ ಪರೀಕ್ಷೆ ಕಡಿಮೆ ಸಾಬೀತುಪಡಿಸುತ್ತದೆ ಎಂದು ನೋಡಿ.",
 "objectives": [
  "Execute independent tool calls in parallel and correlate results by tool_use_id.",
  "Build a router with abstention and test it on real queries, including negative-boundary effects.",
  "Build an agent whose later actions depend on earlier observations without inventing data.",
  "Verify outcomes with state-based postconditions instead of trusting tool results.",
  "Explain indeterminate outcomes, idempotency and why a clean stress test is weak evidence."
 ],
 "objectivesKn": [
  "ಸ್ವತಂತ್ರ tool ಕರೆಗಳನ್ನು ಸಮಾನಾಂತರವಾಗಿ ಚಲಾಯಿಸಿ ಫಲಿತಾಂಶಗಳನ್ನು tool_use_id ಮೂಲಕ ಜೋಡಿಸಿ.",
  "Abstention ಇರುವ router ನಿರ್ಮಿಸಿ ಋಣಾತ್ಮಕ-ಗಡಿ ಪರಿಣಾಮಗಳೂ ಸೇರಿ ನಿಜವಾದ queries ಮೇಲೆ ಪರೀಕ್ಷಿಸಿ.",
  "ನಂತರದ actions ಹಿಂದಿನ observations ಮೇಲೆ ಅವಲಂಬಿಸುವ, ಡೇಟಾ ಕಲ್ಪಿಸದ agent ನಿರ್ಮಿಸಿ.",
  "Tool ಫಲಿತಾಂಶ ನಂಬುವ ಬದಲು state-based postconditions ಮೂಲಕ ಫಲಿತಾಂಶ ಪರಿಶೀಲಿಸಿ.",
  "ಅನಿರ್ದಿಷ್ಟ ಫಲಿತಾಂಶ, idempotency ಮತ್ತು ಸ್ವಚ್ಛ ಒತ್ತಡ ಪರೀಕ್ಷೆ ದುರ್ಬಲ ಸಾಕ್ಷ್ಯ ಏಕೆ ಎಂದು ವಿವರಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Tool Use and Function Calling (Part 3 of 3)",
    "textKn": "Tool Use ಮತ್ತು Function Calling (ಭಾಗ 3 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 3 of 3: parallel tool calls and correlation IDs, routing with abstention, a dynamic multi-step agent and state-based evaluation. Every output was genuinely produced by toolcall_3.py (built on toolcall_1.py and toolcall_2.py) on Python 3.14.5. The router is lexical and deterministic, a stand-in for a semantic model. The source text for this part was cut off near its failure taxonomy, and the code is rebuilt from the lesson's description. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ ಮೂರನೆಯದು: ಸಮಾನಾಂತರ tool ಕರೆಗಳು ಮತ್ತು correlation IDs, abstention ಇರುವ routing, ಕ್ರಿಯಾತ್ಮಕ ಬಹು-ಹಂತ agent ಮತ್ತು state-based ಮೌಲ್ಯಮಾಪನ. ಎಲ್ಲಾ output toolcall_3.py (toolcall_1.py ಮತ್ತು toolcall_2.py ಮೇಲೆ ನಿರ್ಮಿತ) ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. Router ಪದ-ಆಧಾರಿತ ಮತ್ತು ನಿರ್ಧಾರಾತ್ಮಕ, semantic ಮಾದರಿಗೆ ಬದಲಿ. ಈ ಭಾಗದ ಮೂಲ ಪಠ್ಯ ಅದರ ವೈಫಲ್ಯ ವರ್ಗೀಕರಣದ ಹತ್ತಿರ ಕತ್ತರಿಸಲ್ಪಟ್ಟಿತ್ತು, ಮತ್ತು ಕೋಡ್ ಅನ್ನು ಪಾಠದ ವಿವರಣೆಯಿಂದ ಮರುನಿರ್ಮಿಸಲಾಗಿದೆ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Parallel Tool Calls",
    "textKn": "ಸಮಾನಾಂತರ Tool ಕರೆಗಳು",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Independent Calls Can Run Together",
    "headingKn": "ಸ್ವತಂತ್ರ ಕರೆಗಳು ಒಟ್ಟಿಗೆ ಚಲಿಸಬಹುದು",
    "bodyEn": "When one model turn requests a search, a calculation and a database lookup that need nothing from each other, running them concurrently approaches max(latencies) instead of the sum. But completion order is not request order, so each call carries a tool_use_id and every result, success or failure, carries it back. The tool name cannot identify a call because three calls can all be search_web. Duplicate ids destroy the guarantee, so they are rejected up front. Calls that depend on each other (look up an email address, then send to it) must stay sequential, and two parallel writes to one record race.",
    "bodyKn": "ಒಂದು ಮಾದರಿ ಸುತ್ತು ಒಂದಕ್ಕೊಂದು ಏನೂ ಬೇಡದ search, ಲೆಕ್ಕಾಚಾರ ಮತ್ತು ಡೇಟಾಬೇಸ್ ಹುಡುಕಾಟ ಕೇಳಿದಾಗ, ಅವನ್ನು ಏಕಕಾಲದಲ್ಲಿ ಚಲಾಯಿಸಿದರೆ ಮೊತ್ತದ ಬದಲು max(ವಿಳಂಬ) ಹತ್ತಿರ ಬರುತ್ತದೆ. ಆದರೆ ಪೂರ್ಣಗೊಳ್ಳುವ ಕ್ರಮ ವಿನಂತಿ ಕ್ರಮವಲ್ಲ, ಆದ್ದರಿಂದ ಪ್ರತಿ ಕರೆ tool_use_id ಒಯ್ಯುತ್ತದೆ ಮತ್ತು ಪ್ರತಿ ಫಲಿತಾಂಶ, ಯಶಸ್ಸು ಅಥವಾ ವೈಫಲ್ಯ, ಅದನ್ನು ಹಿಂದೆ ಒಯ್ಯುತ್ತದೆ. ಮೂರು ಕರೆಗಳೂ search_web ಆಗಿರಬಹುದಾದ್ದರಿಂದ tool ಹೆಸರು ಕರೆಯನ್ನು ಗುರುತಿಸಲಾರದು. ನಕಲು ids ಖಾತರಿ ನಾಶಮಾಡುತ್ತವೆ, ಆದ್ದರಿಂದ ಮೊದಲೇ ತಿರಸ್ಕರಿಸಲಾಗುತ್ತದೆ. ಒಂದರ ಮೇಲೊಂದು ಅವಲಂಬಿತ ಕರೆಗಳು (ಇಮೇಲ್ ವಿಳಾಸ ಹುಡುಕಿ, ನಂತರ ಅದಕ್ಕೆ ಕಳುಹಿಸಿ) ಅನುಕ್ರಮವಾಗಿರಬೇಕು, ಮತ್ತು ಒಂದೇ ದಾಖಲೆಗೆ ಎರಡು ಸಮಾನಾಂತರ ಬರವಣಿಗೆಗಳು ಓಟ ನಡೆಸುತ್ತವೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Correlation by tool_use_id",
    "headingKn": "tool_use_id ಮೂಲಕ ಜೋಡಣೆ",
    "svgCode": "<svg viewBox=\"0 0 300 200\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\">\n  <rect width=\"300\" height=\"200\" rx=\"8\" fill=\"#0f172a\"/>\n  <text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">Parallel calls: identity travels with the work</text>\n  <rect x=\"100\" y=\"22\" width=\"100\" height=\"20\" rx=\"4\" fill=\"#1e293b\" stroke=\"#60a5fa\"/><text x=\"150\" y=\"35\" fill=\"#93c5fd\" text-anchor=\"middle\">one model turn</text>\n  <path d=\"M120,42 L60,62 M150,42 V62 M180,42 L240,62\" stroke=\"#475569\"/>\n  <rect x=\"20\" y=\"62\" width=\"80\" height=\"24\" rx=\"4\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"60\" y=\"73\" fill=\"#6ee7b7\" text-anchor=\"middle\">call_001</text><text x=\"60\" y=\"82\" fill=\"#6ee7b7\" text-anchor=\"middle\" font-size=\"6\">0.30 s</text>\n  <rect x=\"110\" y=\"62\" width=\"80\" height=\"24\" rx=\"4\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"150\" y=\"73\" fill=\"#6ee7b7\" text-anchor=\"middle\">call_002</text><text x=\"150\" y=\"82\" fill=\"#6ee7b7\" text-anchor=\"middle\" font-size=\"6\">0.05 s</text>\n  <rect x=\"200\" y=\"62\" width=\"80\" height=\"24\" rx=\"4\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"240\" y=\"73\" fill=\"#6ee7b7\" text-anchor=\"middle\">call_003</text><text x=\"240\" y=\"82\" fill=\"#6ee7b7\" text-anchor=\"middle\" font-size=\"6\">0.15 s</text>\n  <path d=\"M60,86 V110 M150,86 V110 M240,86 V110\" stroke=\"#475569\"/>\n  <rect x=\"20\" y=\"110\" width=\"260\" height=\"22\" rx=\"4\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"150\" y=\"125\" fill=\"#c4b5fd\" text-anchor=\"middle\">completion order: 002, 003, 001</text>\n  <path d=\"M150,132 V146\" stroke=\"#475569\"/>\n  <rect x=\"20\" y=\"146\" width=\"260\" height=\"22\" rx=\"4\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"161\" fill=\"#fde68a\" text-anchor=\"middle\">join by tool_use_id -> request order 001, 002, 003</text>\n  <text x=\"150\" y=\"188\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">never pair results to calls by list position</text>\n</svg>",
    "captionEn": "Three calls finish in a different order from the request order. Joining on the id restores the right mapping.",
    "captionKn": "ಮೂರು ಕರೆಗಳು ವಿನಂತಿ ಕ್ರಮಕ್ಕಿಂತ ಬೇರೆ ಕ್ರಮದಲ್ಲಿ ಮುಗಿಯುತ್ತವೆ. id ಮೇಲೆ ಜೋಡಿಸಿದರೆ ಸರಿಯಾದ ನಕ್ಷೆ ಮರಳುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Building the Runtime",
    "textKn": "Runtime ನಿರ್ಮಿಸುವುದು",
    "level": "H2"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "toolcall_3.py",
    "headingEn": "create_task, parallel dispatch, correlation and the router",
    "headingKn": "create_task, ಸಮಾನಾಂತರ dispatch, ಜೋಡಣೆ ಮತ್ತು router",
    "descEn": "execute_parallel submits each call to a thread pool and collects results as they complete, with future_to_call kept as a second correlation layer. restore_call_order rebuilds request order by id. route_tool scores each description against the query and returns None (abstain) below a threshold. create_task changes shared state, so it can demonstrate state-based evaluation.",
    "descKn": "execute_parallel ಪ್ರತಿ ಕರೆಯನ್ನು thread pool ಗೆ ಸಲ್ಲಿಸಿ ಪೂರ್ಣಗೊಂಡಂತೆ ಫಲಿತಾಂಶ ಸಂಗ್ರಹಿಸುತ್ತದೆ, future_to_call ಎರಡನೇ ಜೋಡಣೆ ಪದರವಾಗಿ ಇರುತ್ತದೆ. restore_call_order id ಮೂಲಕ ವಿನಂತಿ ಕ್ರಮ ಮರುಕಟ್ಟುತ್ತದೆ. route_tool ಪ್ರತಿ ವಿವರಣೆಗೆ query ವಿರುದ್ಧ ಅಂಕ ನೀಡಿ ಮಿತಿಗಿಂತ ಕೆಳಗೆ None (abstain) ಹಿಂತಿರುಗಿಸುತ್ತದೆ. create_task ಹಂಚಿಕೆ ಸ್ಥಿತಿ ಬದಲಿಸುತ್ತದೆ, ಆದ್ದರಿಂದ state-based ಮೌಲ್ಯಮಾಪನ ತೋರಿಸಬಹುದು.",
    "code": "TASKS: dict[int, dict[str, Any]] = {}\nNEXT_TASK_ID = 1\nCREATE_DELAY = 0.0\n\n\ndef create_task(title: str) -> dict[str, Any]:\n    global NEXT_TASK_ID\n    time.sleep(CREATE_DELAY)\n    task_id = NEXT_TASK_ID\n    NEXT_TASK_ID += 1\n    TASKS[task_id] = {\"id\": task_id, \"title\": title, \"completed\": False}\n    return {\"created\": True, \"task\": TASKS[task_id]}\n\n\ndef task_exists(title: str) -> bool:\n    return any(t[\"title\"] == title for t in TASKS.values())\n\n\ndef reset_tasks():\n    global NEXT_TASK_ID\n    TASKS.clear()\n    NEXT_TASK_ID = 1\n\n\ndef full_registry() -> ToolRegistry:\n    reg = build_registry()\n    reg.register(Tool(\"create_task\", \"Create a new local task with a title. This changes task-store state.\",\n                      {\"type\": \"object\", \"properties\": {\"title\": {\"type\": \"string\"}}, \"required\": [\"title\"], \"additionalProperties\": False},\n                      1.0, create_task))\n    return reg\n\n\ndef validate_call_ids(calls):\n    seen = set()\n    for c in calls:\n        if c.tool_use_id in seen:\n            raise ValueError(f\"duplicate tool_use_id: {c.tool_use_id}\")\n        seen.add(c.tool_use_id)\n\n\ndef execute_parallel(registry, calls, max_workers=4):\n    if not calls:\n        return []\n    validate_call_ids(calls)\n    results = []\n    with ThreadPoolExecutor(max_workers=min(max_workers, len(calls))) as pool:\n        future_to_call = {pool.submit(execute_tool_call, registry, c): c for c in calls}\n        for fut in as_completed(future_to_call):\n            results.append(fut.result())\n    return results\n\n\ndef restore_call_order(calls, results):\n    by_id = {r.tool_use_id: r for r in results}\n    return [by_id[c.tool_use_id] for c in calls]\n\n\n@dataclass(frozen=True)\nclass RouteDecision:\n    tool_name: str | None\n    score: float\n    reason: str\n\n\ndef route_tool(registry, query, threshold=0.15):\n    best, best_score = None, 0.0\n    for tool in registry.all_tools():\n        s = lexical_similarity(query, tool.description)\n        if s > best_score:\n            best, best_score = tool.name, s\n    if best is None or best_score < threshold:\n        return RouteDecision(None, round(best_score, 3), \"no registered tool matched strongly enough\")\n    return RouteDecision(best, round(best_score, 3), \"best lexical match\")"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "toolcall_3.py",
    "headingEn": "The dynamic agent and eight experiments",
    "headingKn": "ಕ್ರಿಯಾತ್ಮಕ agent ಮತ್ತು ಎಂಟು ಪ್ರಯೋಗಗಳು",
    "descEn": "run_customer_agent looks up a customer, and only if the account exists and is open does it build a calculator call from the returned balance. main() runs parallel and ordering experiments, duplicate ids, routing, the agent on three customers, state-based checks, a timed-out write, a thread-safety test and the reliability arithmetic.",
    "descKn": "run_customer_agent ಗ್ರಾಹಕರನ್ನು ಹುಡುಕುತ್ತದೆ, ಮತ್ತು ಖಾತೆ ಇದ್ದು ತೆರೆದಿದ್ದರೆ ಮಾತ್ರ ಹಿಂತಿರುಗಿದ ಬಾಕಿಯಿಂದ calculator ಕರೆ ರಚಿಸುತ್ತದೆ. main() ಸಮಾನಾಂತರ ಮತ್ತು ಕ್ರಮ ಪ್ರಯೋಗಗಳು, ನಕಲು ids, routing, ಮೂರು ಗ್ರಾಹಕರ ಮೇಲೆ agent, state-based ಪರಿಶೀಲನೆಗಳು, timeout ಆದ ಬರವಣಿಗೆ, thread-ಸುರಕ್ಷತೆ ಪರೀಕ್ಷೆ ಮತ್ತು ವಿಶ್ವಾಸಾರ್ಹತೆ ಅಂಕಗಣಿತ ಚಲಾಯಿಸುತ್ತದೆ.",
    "code": "def run_customer_agent(registry, customer_id):\n    state = {\"customer_id\": customer_id, \"customer\": None, \"ten_percent\": None, \"completed\": False, \"reason\": None}\n    trace = []\n    r = execute_tool_call(registry, ToolCall(\"agent_lookup\", \"query_db\", {\"customer_id\": customer_id}))\n    trace.append(f\"query_db({customer_id}) -> {'ok' if r.ok else r.error_type}\")\n    if not r.ok:\n        state[\"reason\"] = \"customer lookup failed\"\n        return state, trace\n    out = r.output\n    if not out[\"found\"]:\n        state[\"reason\"] = \"customer not found; no balance invented\"\n        return state, trace\n    state[\"customer\"] = out[\"customer\"]\n    if out[\"customer\"][\"status\"] != \"open\":\n        state.update(completed=True, reason=\"account is not open; no calculation needed\")\n        return state, trace\n    expr = f\"{out['customer']['balance']} * 0.10\"\n    r2 = execute_tool_call(registry, ToolCall(\"agent_calc\", \"run_python\", {\"expression\": expr}))\n    trace.append(f\"run_python({expr!r}) -> {r2.output['result'] if r2.ok else r2.error_type}\")\n    if r2.ok:\n        state.update(ten_percent=r2.output[\"result\"], completed=True, reason=\"goal completed\")\n    return state, trace\n\n\ndef section(t):\n    print(f\"\\n--- {t} ---\")\n\n\ndef main():\n    global CREATE_DELAY\n    reg = full_registry()\n\n    section(\"1. Parallel calls with different delays: completion order versus request order\")\n    delays = {\"A\": 0.30, \"B\": 0.05, \"C\": 0.15}\n\n    def delayed(label):\n        time.sleep(delays[label])\n        return f\"result for {label}\"\n\n    dreg = ToolRegistry()\n    dreg.register(Tool(\"lookup\", \"delayed lookup\", {\"type\": \"object\", \"properties\": {\"label\": {\"type\": \"string\"}}, \"required\": [\"label\"], \"additionalProperties\": False}, 2.0, delayed))\n    calls = [ToolCall(f\"call_00{i}\", \"lookup\", {\"label\": l}) for i, l in enumerate(\"ABC\", 1)]\n    t0 = time.perf_counter()\n    results = execute_parallel(dreg, calls)\n    wall = time.perf_counter() - t0\n    print(\"request order   :\", [c.tool_use_id for c in calls], \"(all the same tool name: 'lookup')\")\n    print(\"completion order:\", [r.tool_use_id for r in results])\n    print(\"restored order  :\", [r.tool_use_id for r in restore_call_order(calls, results)])\n    print(\"mapping         :\", {r.tool_use_id: r.output for r in results})\n    print(f\"wall time {wall:.2f}s against {sum(delays.values()):.2f}s sequential\")\n\n    section(\"2. Duplicate correlation ids are rejected\")\n    try:\n        execute_parallel(dreg, [calls[0], ToolCall(\"call_001\", \"lookup\", {\"label\": \"B\"})])\n    except ValueError as exc:\n        print(\"ValueError:\", exc)\n\n    section(\"3. Routing and abstention (lexical stand-in for a semantic router)\")\n    queries = [\"Search public factual information about France\", \"Use arithmetic to calculate a numeric result\",\n               \"Read an internal customer record\", \"Write a poem about rain\",\n               \"multiply 15 and 20\", \"Delete customer 101\"]\n    for q in queries:\n        d = route_tool(reg, q)\n        print(f\"{q:<48} -> {d.tool_name or 'NO_TOOL':<12} score={d.score}\")\n    print(\"'multiply 15 and 20' has no word in common with the calculator description, so a lexical router abstains where a semantic one would route\")\n    print(\"'Delete customer 101' routes to the read-only query_db because 'customer' matches: the verb is not considered\")\n\n    section(\"4. A dynamic agent: the second call exists only because of the first observation\")\n    for cid in (103, 102, 999):\n        state, trace = run_customer_agent(reg, cid)\n        print(f\"customer {cid}: {state['reason']}\")\n        for line in trace:\n            print(\"    \", line)\n        print(\"     ten_percent:\", state[\"ten_percent\"], \"| completed:\", state[\"completed\"])\n\n    section(\"5. State-based evaluation: the call succeeded, did the world change?\")\n    reset_tasks()\n    wanted = \"Review quarterly report\"\n    r = execute_tool_call(reg, ToolCall(\"state_001\", \"create_task\", {\"title\": wanted}))\n    print(\"tool result ok:\", r.ok, \"| postcondition task_exists:\", task_exists(wanted))\n    reset_tasks()\n    r = execute_tool_call(reg, ToolCall(\"state_002\", \"create_task\", {\"title\": \"Quarterly report\"}))\n    print(\"wrong title    -> tool result ok:\", r.ok, \"| postcondition for the REQUESTED title:\", task_exists(wanted))\n\n    section(\"6. A timed-out call whose work still happened\")\n    reset_tasks()\n    CREATE_DELAY = 0.3\n    r = execute_tool_call(reg, ToolCall(\"state_003\", \"create_task\", {\"title\": \"Timed out task\"}), timeout_override=0.1)\n    print(\"observation:\", r.error_type, \"|\", r.error_message)\n    print(\"immediately after, task exists:\", task_exists(\"Timed out task\"))\n    time.sleep(0.5)\n    print(\"0.5s later, task exists:\", task_exists(\"Timed out task\"), \"| a blind retry would now create a duplicate\")\n    CREATE_DELAY = 0.0\n\n    section(\"7. Is create_task thread-safe? 4000 parallel calls, 16 workers\")\n    reset_tasks()\n    with ThreadPoolExecutor(max_workers=16) as pool:\n        futures = [pool.submit(create_task, f\"task {i}\") for i in range(4000)]\n        ids = [f.result()[\"task\"][\"id\"] for f in futures]\n    print(\"calls:\", len(ids), \"| distinct ids returned:\", len(set(ids)), \"| tasks stored:\", len(TASKS), \"| last NEXT_TASK_ID:\", NEXT_TASK_ID)\n    print(\"read-modify-write on a shared counter is a race by construction; whether this run showed it depends on the interpreter's scheduling\")\n\n    section(\"8. Per-step reliability compounds (independence assumed: NOT a benchmark)\")\n    for p, n in ((0.98, 10), (0.98, 20), (0.98, 40), (0.99, 40)):\n        print(f\"per-step {p} x {n:>2} steps = {p ** n:.3f}\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Parallel calls with different delays: completion order versus request order ---\nrequest order   : ['call_001', 'call_002', 'call_003'] (all the same tool name: 'lookup')\ncompletion order: ['call_002', 'call_003', 'call_001']\nrestored order  : ['call_001', 'call_002', 'call_003']\nmapping         : {'call_002': 'result for B', 'call_003': 'result for C', 'call_001': 'result for A'}\nwall time 0.30s against 0.50s sequential\n\n--- 2. Duplicate correlation ids are rejected ---\nValueError: duplicate tool_use_id: call_001\n\n--- 3. Routing and abstention (lexical stand-in for a semantic router) ---\nSearch public factual information about France   -> search_web   score=0.667\nUse arithmetic to calculate a numeric result     -> search_web   score=0.429\nRead an internal customer record                 -> query_db     score=1.0\nWrite a poem about rain                          -> search_web   score=0.2\nmultiply 15 and 20                               -> NO_TOOL      score=0.0\nDelete customer 101                              -> query_db     score=0.333\n'multiply 15 and 20' has no word in common with the calculator description, so a lexical router abstains where a semantic one would route\n'Delete customer 101' routes to the read-only query_db because 'customer' matches: the verb is not considered\n\n--- 4. A dynamic agent: the second call exists only because of the first observation ---\ncustomer 103: goal completed\n     query_db(103) -> ok\n     run_python('875.5 * 0.10') -> 87.55000000000001\n     ten_percent: 87.55000000000001 | completed: True\ncustomer 102: account is not open; no calculation needed\n     query_db(102) -> ok\n     ten_percent: None | completed: True\ncustomer 999: customer not found; no balance invented\n     query_db(999) -> ok\n     ten_percent: None | completed: False\n\n--- 5. State-based evaluation: the call succeeded, did the world change? ---\ntool result ok: True | postcondition task_exists: True\nwrong title    -> tool result ok: True | postcondition for the REQUESTED title: False\n\n--- 6. A timed-out call whose work still happened ---\nobservation: timeout | tool exceeded timeout of 0.1 seconds\nimmediately after, task exists: False\n0.5s later, task exists: True | a blind retry would now create a duplicate\n\n--- 7. Is create_task thread-safe? 4000 parallel calls, 16 workers ---\ncalls: 4000 | distinct ids returned: 4000 | tasks stored: 4000 | last NEXT_TASK_ID: 4001\nread-modify-write on a shared counter is a race by construction; whether this run showed it depends on the interpreter's scheduling\n\n--- 8. Per-step reliability compounds (independence assumed: NOT a benchmark) ---\nper-step 0.98 x 10 steps = 0.817\nper-step 0.98 x 20 steps = 0.668\nper-step 0.98 x 40 steps = 0.446\nper-step 0.99 x 40 steps = 0.669"
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
    "headingEn": "Completion Order Differs and the Ids Fix It",
    "headingKn": "ಪೂರ್ಣಗೊಳ್ಳುವ ಕ್ರಮ ಬೇರೆ, ids ಸರಿಪಡಿಸುತ್ತವೆ",
    "bodyEn": "Section 1 gives three calls to the same tool with delays 0.30, 0.05 and 0.15 seconds. Request order is call_001, 002, 003 but completion order is 002, 003, 001. The mapping joined by id is correct (call_002 is \"result for B\", call_001 is \"result for A\"), and restore_call_order recovers request order. Wall time is 0.30 s against 0.50 s sequential. Section 2 confirms that a repeated id raises ValueError: duplicate tool_use_id: call_001.",
    "bodyKn": "ವಿಭಾಗ 1 ಒಂದೇ tool ಗೆ 0.30, 0.05 ಮತ್ತು 0.15 ಸೆಕೆಂಡ್ ವಿಳಂಬದ ಮೂರು ಕರೆಗಳನ್ನು ನೀಡುತ್ತದೆ. ವಿನಂತಿ ಕ್ರಮ call_001, 002, 003 ಆದರೆ ಪೂರ್ಣಗೊಳ್ಳುವ ಕ್ರಮ 002, 003, 001. id ಮೂಲಕ ಜೋಡಿಸಿದ ನಕ್ಷೆ ಸರಿ (call_002 \"result for B\", call_001 \"result for A\"), ಮತ್ತು restore_call_order ವಿನಂತಿ ಕ್ರಮ ಮರುಪಡೆಯುತ್ತದೆ. ಗೋಡೆ ಸಮಯ 0.30 ಸೆ, ಅನುಕ್ರಮಕ್ಕೆ 0.50 ಸೆ. ವಿಭಾಗ 2 ಪುನರಾವರ್ತಿತ id ValueError: duplicate tool_use_id: call_001 ಎತ್ತುತ್ತದೆ ಎಂದು ದೃಢೀಕರಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: The Lesson's Routing Examples Do Not Route as Claimed",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಪಾಠದ Routing ಉದಾಹರಣೆಗಳು ಹೇಳಿದಂತೆ route ಆಗುವುದಿಲ್ಲ",
    "bodyEn": "Section 3 routes six queries with the lesson's lexical router and threshold 0.15. \"Search public factual information about France\" goes to search_web (0.667) and \"Read an internal customer record\" goes to query_db (1.0), as expected. Three results contradict the lesson. First, \"Use arithmetic to calculate a numeric result\" goes to search_web with a score of 0.429, not to the calculator, because the search tool's own description says \"rather than arithmetic\": the negative boundary adds overlap for the word it excludes. Second, \"Write a poem about rain\" does not abstain: search_web scores 0.2, above the threshold, because the stopword \"a\" appears in its description. Third, \"multiply 15 and 20\" shares no token with any description and abstains where a semantic router would pick the calculator. Word overlap rewards the wrong things, and an abstention threshold has to be tuned on real queries, not chosen by hand.",
    "bodyKn": "ವಿಭಾಗ 3 ಆರು queries ಅನ್ನು ಪಾಠದ lexical router ಮತ್ತು ಮಿತಿ 0.15 ಜೊತೆ route ಮಾಡುತ್ತದೆ. \"Search public factual information about France\" search_web ಗೆ (0.667) ಮತ್ತು \"Read an internal customer record\" query_db ಗೆ (1.0) ಹೋಗುತ್ತದೆ, ನಿರೀಕ್ಷಿಸಿದಂತೆ. ಮೂರು ಫಲಿತಾಂಶಗಳು ಪಾಠಕ್ಕೆ ವಿರುದ್ಧ. ಮೊದಲನೆಯದು, \"Use arithmetic to calculate a numeric result\" calculator ಗೆ ಅಲ್ಲ, 0.429 ಅಂಕದೊಂದಿಗೆ search_web ಗೆ ಹೋಗುತ್ತದೆ, ಏಕೆಂದರೆ search tool ನ ಸ್ವಂತ ವಿವರಣೆ \"rather than arithmetic\" ಎನ್ನುತ್ತದೆ: ಋಣಾತ್ಮಕ ಗಡಿ ಅದು ಹೊರಗಿಡುವ ಪದಕ್ಕೆ ಅತಿಕ್ರಮಣ ಸೇರಿಸುತ್ತದೆ. ಎರಡನೆಯದು, \"Write a poem about rain\" abstain ಆಗುವುದಿಲ್ಲ: stopword \"a\" ಅದರ ವಿವರಣೆಯಲ್ಲಿ ಇರುವುದರಿಂದ search_web 0.2, ಮಿತಿಗಿಂತ ಹೆಚ್ಚು. ಮೂರನೆಯದು, \"multiply 15 and 20\" ಯಾವ ವಿವರಣೆಯೊಂದಿಗೂ ಯಾವುದೇ token ಹಂಚಿಕೊಳ್ಳುವುದಿಲ್ಲ ಮತ್ತು semantic router calculator ಆರಿಸುತ್ತಿದ್ದಲ್ಲಿ ಅದು abstain ಮಾಡುತ್ತದೆ. ಪದ ಅತಿಕ್ರಮಣ ತಪ್ಪಾದವುಗಳಿಗೆ ಬಹುಮಾನ ನೀಡುತ್ತದೆ, ಮತ್ತು abstention ಮಿತಿಯನ್ನು ಕೈಯಿಂದ ಆರಿಸದೆ ನಿಜವಾದ queries ಮೇಲೆ ಹೊಂದಿಸಬೇಕು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Capability Includes the Verb",
    "headingKn": "Capability ಕ್ರಿಯಾಪದವನ್ನೂ ಒಳಗೊಂಡಿದೆ",
    "bodyEn": "\"Delete customer 101\" routes to query_db with a score of 0.333 because \"customer\" matches, even though query_db is read-only and no registered tool can delete. The router matched the noun and ignored the verb. The correct outcome is NO_TOOL or an explanation that no tool supports deletion, and the tool description should state what the tool cannot do (\"read-only, cannot create, modify or delete\"). Abstention is part of tool selection, not a failure to use tools, and an unknown tool name such as delete_customer must stay unknown instead of being swapped for the nearest registered one.",
    "bodyKn": "\"Delete customer 101\" query_db ಗೆ 0.333 ಅಂಕದೊಂದಿಗೆ route ಆಗುತ್ತದೆ ಏಕೆಂದರೆ \"customer\" ಹೊಂದುತ್ತದೆ, query_db ಓದು-ಮಾತ್ರ ಮತ್ತು ಯಾವುದೇ ನೋಂದಾಯಿತ tool ಅಳಿಸಲಾರದು ಎಂದಾದರೂ. Router ನಾಮಪದ ಹೊಂದಿಸಿ ಕ್ರಿಯಾಪದ ಕಡೆಗಣಿಸಿತು. ಸರಿಯಾದ ಫಲಿತಾಂಶ NO_TOOL ಅಥವಾ ಯಾವುದೇ tool ಅಳಿಸುವಿಕೆ ಬೆಂಬಲಿಸುವುದಿಲ್ಲ ಎಂಬ ವಿವರಣೆ, ಮತ್ತು tool ವಿವರಣೆ tool ಏನು ಮಾಡಲಾರದು ಎಂದು ಹೇಳಬೇಕು (\"read-only, cannot create, modify or delete\"). Abstention tool ಆಯ್ಕೆಯ ಭಾಗ, tools ಬಳಸಲು ವಿಫಲವಾಗುವುದಲ್ಲ, ಮತ್ತು delete_customer ನಂತಹ ತಿಳಿಯದ tool ಹೆಸರು ಸಮೀಪದ ನೋಂದಾಯಿತದ್ದಕ್ಕೆ ಬದಲಾಗದೆ ತಿಳಿಯದ್ದಾಗಿಯೇ ಉಳಿಯಬೇಕು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "A Dynamic Agent and a Float Surprise",
    "headingKn": "ಕ್ರಿಯಾತ್ಮಕ Agent ಮತ್ತು Float ಆಶ್ಚರ್ಯ",
    "bodyEn": "Section 4 runs the agent. For customer 103 the second call exists only because the first returned an open account with balance 875.5: it builds the expression \"875.5 * 0.10\" and gets a result. For customer 102 the account is closed so the calculator is never called. For customer 999 the lookup returns found False and the agent stops without inventing a balance. The result for 103 is 87.55000000000001, not the 87.55 the lesson prints, because 875.5 * 0.10 is binary floating point. For money use decimal or integer minor units and format explicitly, and never compare such results with ==.",
    "bodyKn": "ವಿಭಾಗ 4 agent ಚಲಾಯಿಸುತ್ತದೆ. ಗ್ರಾಹಕ 103 ಗೆ ಎರಡನೇ ಕರೆ ಅಸ್ತಿತ್ವದಲ್ಲಿರುವುದು ಮೊದಲನೆಯದು ಬಾಕಿ 875.5 ಇರುವ ತೆರೆದ ಖಾತೆ ಹಿಂತಿರುಗಿಸಿದ್ದರಿಂದ ಮಾತ್ರ: ಅದು \"875.5 * 0.10\" ಅಭಿವ್ಯಕ್ತಿ ರಚಿಸಿ ಫಲಿತಾಂಶ ಪಡೆಯುತ್ತದೆ. ಗ್ರಾಹಕ 102 ಗೆ ಖಾತೆ ಮುಚ್ಚಿದೆ, ಆದ್ದರಿಂದ calculator ಎಂದೂ ಕರೆಯಲ್ಪಡುವುದಿಲ್ಲ. ಗ್ರಾಹಕ 999 ಗೆ ಹುಡುಕಾಟ found False ಹಿಂತಿರುಗಿಸಿ agent ಬಾಕಿ ಕಲ್ಪಿಸದೆ ನಿಲ್ಲುತ್ತದೆ. 103 ರ ಫಲಿತಾಂಶ 87.55000000000001, ಪಾಠ ಮುದ್ರಿಸುವ 87.55 ಅಲ್ಲ, ಏಕೆಂದರೆ 875.5 * 0.10 ದ್ವಿಮಾನ ಫ್ಲೋಟಿಂಗ್ ಪಾಯಿಂಟ್. ಹಣಕ್ಕೆ decimal ಅಥವಾ ಪೂರ್ಣಾಂಕ ಚಿಕ್ಕ ಘಟಕಗಳನ್ನು ಬಳಸಿ ಸ್ಪಷ್ಟವಾಗಿ ರೂಪಿಸಿ, ಮತ್ತು ಅಂಥ ಫಲಿತಾಂಶಗಳನ್ನು == ನಿಂದ ಎಂದೂ ಹೋಲಿಸಬೇಡಿ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "State Is the Ground Truth",
    "headingKn": "ಸ್ಥಿತಿಯೇ ನೆಲದ ಸತ್ಯ",
    "bodyEn": "Section 5 separates the two checks. Creating \"Review quarterly report\" gives tool ok True and the postcondition task_exists is True. Creating \"Quarterly report\" instead also gives tool ok True, but the postcondition for the requested title is False: the call succeeded and the goal did not. A benchmark that only compares the call to an expected string would miss that, and one that checks the environment state would catch it. State-based evaluation also tolerates several correct trajectories, since different tool sequences can reach the same final state.",
    "bodyKn": "ವಿಭಾಗ 5 ಎರಡು ಪರಿಶೀಲನೆಗಳನ್ನು ಬೇರ್ಪಡಿಸುತ್ತದೆ. \"Review quarterly report\" ರಚಿಸಿದರೆ tool ok True ಮತ್ತು postcondition task_exists True. ಬದಲಿಗೆ \"Quarterly report\" ರಚಿಸಿದರೂ tool ok True, ಆದರೆ ಕೇಳಿದ ಶೀರ್ಷಿಕೆಗೆ postcondition False: ಕರೆ ಯಶಸ್ವಿಯಾಯಿತು, ಗುರಿ ಆಗಲಿಲ್ಲ. ಕರೆಯನ್ನು ನಿರೀಕ್ಷಿತ ಸ್ಟ್ರಿಂಗ್‌ಗೆ ಹೋಲಿಸುವ benchmark ಅದನ್ನು ತಪ್ಪಿಸುತ್ತದೆ, ಮತ್ತು ಪರಿಸರ ಸ್ಥಿತಿ ಪರಿಶೀಲಿಸುವುದು ಹಿಡಿಯುತ್ತದೆ. State-based ಮೌಲ್ಯಮಾಪನ ಹಲವು ಸರಿಯಾದ trajectories ಅನ್ನೂ ಸಹಿಸುತ್ತದೆ, ಏಕೆಂದರೆ ಬೇರೆ tool ಅನುಕ್ರಮಗಳು ಅದೇ ಅಂತಿಮ ಸ್ಥಿತಿ ತಲುಪಬಹುದು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: A Failed Observation Does Not Mean the World Did Not Change",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ವಿಫಲ Observation ಎಂದರೆ ಜಗತ್ತು ಬದಲಾಗಲಿಲ್ಲ ಎಂದಲ್ಲ",
    "bodyEn": "Section 6 makes create_task take 0.3 seconds and gives it a 0.1 second timeout. The observation is a timeout error. Immediately afterwards the task does not exist, and 0.5 seconds later it does. From the agent's side the outcome is indeterminate: a blind retry would now create a duplicate. For tools with side effects the observation must distinguish confirmed success, confirmed failure and unknown, and retries need idempotency keys or a postcondition check before they run. The same reasoning applies to a payment that times out after the charge.",
    "bodyKn": "ವಿಭಾಗ 6 create_task ಅನ್ನು 0.3 ಸೆಕೆಂಡ್ ತೆಗೆದುಕೊಳ್ಳುವಂತೆ ಮಾಡಿ 0.1 ಸೆಕೆಂಡ್ timeout ನೀಡುತ್ತದೆ. Observation timeout ದೋಷ. ತಕ್ಷಣದ ನಂತರ task ಇಲ್ಲ, ಮತ್ತು 0.5 ಸೆಕೆಂಡ್ ನಂತರ ಇದೆ. Agent ಬದಿಯಿಂದ ಫಲಿತಾಂಶ ಅನಿರ್ದಿಷ್ಟ: ಕುರುಡು retry ಈಗ ನಕಲು ರಚಿಸುತ್ತದೆ. Side effect ಇರುವ tools ಗೆ observation ಖಚಿತ ಯಶಸ್ಸು, ಖಚಿತ ವೈಫಲ್ಯ ಮತ್ತು ತಿಳಿಯದ್ದು ಎಂದು ಬೇರ್ಪಡಿಸಬೇಕು, ಮತ್ತು retries ಚಲಿಸುವ ಮೊದಲು idempotency ಕೀಗಳು ಅಥವಾ postcondition ಪರಿಶೀಲನೆ ಬೇಕು. ಶುಲ್ಕದ ನಂತರ timeout ಆಗುವ ಪಾವತಿಗೂ ಇದೇ ತರ್ಕ ಅನ್ವಯ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Measured, With a Null Result: The Counter Race Did Not Show Up",
    "headingKn": "ನಿಜವಾಗಿ ಅಳೆದದ್ದು, ಶೂನ್ಯ ಫಲಿತಾಂಶ ಸಹಿತ: Counter ಓಟ ಕಾಣಿಸಲಿಲ್ಲ",
    "bodyEn": "Section 7 runs 4,000 create_task calls on 16 worker threads against a shared counter updated by read, add and write. All 4,000 ids were distinct and 4,000 tasks were stored. The race did not reproduce in this run. That does not make the code safe: an unsynchronised read-modify-write on shared state is a race by construction, and whether a given run exposes it depends on interpreter scheduling. A null result from a stress test is weak evidence of safety. Use a lock, an atomic counter or a database sequence, and treat parallel writes to one record as an ordering problem.",
    "bodyKn": "ವಿಭಾಗ 7 ಓದು, ಕೂಡು ಮತ್ತು ಬರೆಯುವ ಮೂಲಕ ನವೀಕರಿಸುವ ಹಂಚಿಕೆ counter ವಿರುದ್ಧ 16 worker threads ಮೇಲೆ 4,000 create_task ಕರೆಗಳನ್ನು ಚಲಾಯಿಸುತ್ತದೆ. ಎಲ್ಲಾ 4,000 ids ಭಿನ್ನವಾಗಿದ್ದವು ಮತ್ತು 4,000 tasks ಸಂಗ್ರಹವಾದವು. ಈ ಓಟದಲ್ಲಿ ಓಟ ಪರಿಸ್ಥಿತಿ ಮರುಸೃಷ್ಟಿಯಾಗಲಿಲ್ಲ. ಅದು ಕೋಡ್ ಸುರಕ್ಷಿತ ಎಂದು ಮಾಡುವುದಿಲ್ಲ: ಹಂಚಿಕೆ ಸ್ಥಿತಿಯ ಸಿಂಕ್ರೊನೈಸ್ ಮಾಡದ ಓದು-ಬದಲಿಸು-ಬರೆ ರಚನೆಯಿಂದಲೇ ಓಟ ಪರಿಸ್ಥಿತಿ, ಮತ್ತು ಒಂದು ಓಟ ಅದನ್ನು ಬಯಲುಗೊಳಿಸುತ್ತದೆಯೇ ಎಂಬುದು interpreter scheduling ಮೇಲೆ ಅವಲಂಬಿತ. ಒತ್ತಡ ಪರೀಕ್ಷೆಯ ಶೂನ್ಯ ಫಲಿತಾಂಶ ಸುರಕ್ಷತೆಯ ದುರ್ಬಲ ಸಾಕ್ಷ್ಯ. Lock, atomic counter ಅಥವಾ ಡೇಟಾಬೇಸ್ sequence ಬಳಸಿ, ಮತ್ತು ಒಂದೇ ದಾಖಲೆಗೆ ಸಮಾನಾಂತರ ಬರವಣಿಗೆಗಳನ್ನು ಕ್ರಮ ಸಮಸ್ಯೆ ಎಂದು ಪರಿಗಣಿಸಿ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Production Concerns",
    "textKn": "Production ಕಾಳಜಿಗಳು",
    "level": "H2"
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Failure taxonomy for tool-using agents",
    "headingKn": "Tool ಬಳಸುವ agents ಗೆ ವೈಫಲ್ಯ ವರ್ಗೀಕರಣ",
    "headers": [
     "Failure",
     "Example in this module"
    ],
    "rows": [
     [
      "Routing failure",
      "\"calculate a numeric result\" routed to search_web"
     ],
     [
      "Abstention failure",
      "\"Write a poem about rain\" did not abstain"
     ],
     [
      "Hallucinated tool",
      "send_email: unknown_tool (Part 2)"
     ],
     [
      "Validation failure",
      "\"banana\" for an integer (Part 2)"
     ],
     [
      "Authorization failure",
      "A valid delete request with only a read-only tool exposed"
     ],
     [
      "Execution failure",
      "10 / 0"
     ],
     [
      "Timeout",
      "The slow tool, and the create_task whose work still happened"
     ],
     [
      "Trajectory or state failure",
      "The wrong task title: the call ok, the goal not met"
     ]
    ]
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Long Horizons: Memory, Checkpoints and Recovery",
    "headingKn": "ದೀರ್ಘ ಆಕಾಶ: Memory, Checkpoints ಮತ್ತು ಚೇತರಿಕೆ",
    "bodyEn": "Per-step reliability compounds: 0.98 over 10, 20 and 40 steps gives 0.817, 0.668 and 0.446, and 0.99 over 40 steps still gives 0.669 (independence assumed, so this is an illustration and not a benchmark). Long chains drift from the original goal, so keep structured working state (goal, constraints, completed and pending work) separate from the transcript and checkpoint it. Recovery depends on the error class: repair arguments after a validation error, retry or use an alternative after a transient timeout, never retry an unknown tool, and rethink the expression after an execution error. A tool failure is not an agent failure unless the system cannot recover and still reach the goal.",
    "bodyKn": "ಹಂತ ವಿಶ್ವಾಸಾರ್ಹತೆ ಸಂಯೋಜಿತ: 10, 20 ಮತ್ತು 40 ಹಂತಗಳಲ್ಲಿ 0.98 0.817, 0.668 ಮತ್ತು 0.446 ನೀಡುತ್ತದೆ, ಮತ್ತು 40 ಹಂತಗಳಲ್ಲಿ 0.99 ಇನ್ನೂ 0.669 (ಸ್ವಾತಂತ್ರ್ಯ ಊಹಿಸಲಾಗಿದೆ, ಆದ್ದರಿಂದ ಇದು ವಿವರಣೆ, benchmark ಅಲ್ಲ). ದೀರ್ಘ ಸರಪಳಿಗಳು ಮೂಲ ಗುರಿಯಿಂದ ದೂರ ಸರಿಯುತ್ತವೆ, ಆದ್ದರಿಂದ ರಚನಾತ್ಮಕ ಕೆಲಸದ ಸ್ಥಿತಿ (ಗುರಿ, ನಿರ್ಬಂಧಗಳು, ಪೂರ್ಣಗೊಂಡ ಮತ್ತು ಬಾಕಿ ಕೆಲಸ) ಅನ್ನು ಪ್ರತಿಲಿಪಿಯಿಂದ ಪ್ರತ್ಯೇಕವಾಗಿಟ್ಟು checkpoint ಮಾಡಿ. ಚೇತರಿಕೆ ದೋಷ ವರ್ಗದ ಮೇಲೆ ಅವಲಂಬಿತ: ಮಾನ್ಯತಾ ದೋಷದ ನಂತರ arguments ಸರಿಪಡಿಸಿ, ತಾತ್ಕಾಲಿಕ timeout ನಂತರ retry ಅಥವಾ ಪರ್ಯಾಯ ಬಳಸಿ, ತಿಳಿಯದ tool ಅನ್ನು ಎಂದೂ retry ಮಾಡಬೇಡಿ, ಮತ್ತು ಕಾರ್ಯಗತ ದೋಷದ ನಂತರ ಅಭಿವ್ಯಕ್ತಿ ಮರುಚಿಂತಿಸಿ. ವ್ಯವಸ್ಥೆ ಚೇತರಿಸಿ ಗುರಿ ತಲುಪಲಾಗದ ಹೊರತು tool ವೈಫಲ್ಯ agent ವೈಫಲ್ಯವಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Production Extensions",
    "headingKn": "Production ವಿಸ್ತರಣೆಗಳು",
    "bodyEn": "Idempotency keys for write tools, confirmation gates for sending, deleting, purchasing and deploying, bounded retries by error class, circuit breakers for failing services, tool and schema versioning, tracing that records the id, tool, outcome and duration without logging secrets, and separate metrics for routing, argument generation, execution and final-state success. A confirmation requirement is policy, and a schema cannot express it.",
    "bodyKn": "Write tools ಗೆ idempotency ಕೀಗಳು, ಕಳುಹಿಸುವ, ಅಳಿಸುವ, ಖರೀದಿ ಮತ್ತು deploy ಗೆ ದೃಢೀಕರಣ ದ್ವಾರಗಳು, ದೋಷ ವರ್ಗದ ಪ್ರಕಾರ ಮಿತಿಯ retries, ವಿಫಲ ಸೇವೆಗಳಿಗೆ circuit breakers, tool ಮತ್ತು schema ಆವೃತ್ತಿ, ರಹಸ್ಯಗಳನ್ನು ದಾಖಲಿಸದೆ id, tool, ಫಲಿತಾಂಶ ಮತ್ತು ಅವಧಿ ದಾಖಲಿಸುವ tracing, ಮತ್ತು routing, argument ಉತ್ಪಾದನೆ, ಕಾರ್ಯಗತ ಹಾಗೂ ಅಂತಿಮ-ಸ್ಥಿತಿ ಯಶಸ್ಸಿಗೆ ಪ್ರತ್ಯೇಕ ಮೆಟ್ರಿಕ್ಸ್. ದೃಢೀಕರಣ ಅವಶ್ಯಕತೆ ನೀತಿ, ಮತ್ತು schema ಅದನ್ನು ವ್ಯಕ್ತಪಡಿಸಲಾರದು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "Agents spend most of their time acting through tools, so the quality of selection, validation, concurrency control and outcome verification sets the ceiling for the whole system. Descriptions, ids, abstention and postcondition checks are the engineering that turns single tool calls into trajectories you can trust.",
    "bodyKn": "Agents ತಮ್ಮ ಹೆಚ್ಚಿನ ಸಮಯ tools ಮೂಲಕ ಕ್ರಿಯೆಯಲ್ಲಿ ಕಳೆಯುತ್ತವೆ, ಆದ್ದರಿಂದ ಆಯ್ಕೆ, ಮಾನ್ಯತೆ, ಏಕಕಾಲಿಕತೆ ನಿಯಂತ್ರಣ ಮತ್ತು ಫಲಿತಾಂಶ ಪರಿಶೀಲನೆಯ ಗುಣಮಟ್ಟ ಇಡೀ ವ್ಯವಸ್ಥೆಯ ಮೇಲ್ಮಿತಿ ನಿಗದಿಪಡಿಸುತ್ತದೆ. ವಿವರಣೆಗಳು, ids, abstention ಮತ್ತು postcondition ಪರಿಶೀಲನೆಗಳು ಒಂದೇ tool ಕರೆಗಳನ್ನು ನೀವು ನಂಬಬಹುದಾದ trajectories ಆಗಿ ಪರಿವರ್ತಿಸುವ ಎಂಜಿನಿಯರಿಂಗ್."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Where This Appears in AI Systems",
    "headingKn": "AI ವ್ಯವಸ್ಥೆಗಳಲ್ಲಿ ಇದು ಎಲ್ಲಿ ಕಾಣುತ್ತದೆ",
    "bodyEn": "Provider APIs return several tool calls in one turn and expect results keyed by call id. Coding agents run independent reads in parallel and keep writes sequential. Booking and support agents verify the resulting state (the event exists, the record was updated) before telling the user it is done. Evaluation suites such as BFCL score abstention and multi-turn behaviour alongside single calls.",
    "bodyKn": "Provider APIs ಒಂದು ಸುತ್ತಿನಲ್ಲಿ ಹಲವು tool ಕರೆಗಳನ್ನು ಹಿಂತಿರುಗಿಸಿ ಕರೆ id ಯಿಂದ ಕೀ ಮಾಡಿದ ಫಲಿತಾಂಶಗಳನ್ನು ನಿರೀಕ್ಷಿಸುತ್ತವೆ. Coding agents ಸ್ವತಂತ್ರ ಓದುಗಳನ್ನು ಸಮಾನಾಂತರವಾಗಿ ಚಲಾಯಿಸಿ ಬರವಣಿಗೆಗಳನ್ನು ಅನುಕ್ರಮವಾಗಿಡುತ್ತವೆ. ಬುಕಿಂಗ್ ಮತ್ತು ಬೆಂಬಲ agents ಮುಗಿಯಿತು ಎಂದು ಬಳಕೆದಾರರಿಗೆ ಹೇಳುವ ಮೊದಲು ಫಲಿತ ಸ್ಥಿತಿ ಪರಿಶೀಲಿಸುತ್ತವೆ (ಈವೆಂಟ್ ಇದೆ, ದಾಖಲೆ ನವೀಕರಿಸಲಾಗಿದೆ). BFCL ನಂತಹ ಮೌಲ್ಯಮಾಪನ ಸೂಟ್‌ಗಳು ಒಂದೇ ಕರೆಗಳ ಜೊತೆ abstention ಮತ್ತು multi-turn ವರ್ತನೆಗೂ ಅಂಕ ನೀಡುತ್ತವೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"a successful tool result means the goal was achieved.\" Section 5 shows a successful call that left the requested task missing, and section 6 shows a failed observation whose work still happened. The tool result is evidence about the call, and the environment state is evidence about the goal.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಯಶಸ್ವಿ tool ಫಲಿತಾಂಶ ಎಂದರೆ ಗುರಿ ಸಾಧಿಸಲಾಯಿತು.\" ವಿಭಾಗ 5 ಕೇಳಿದ task ಕಾಣೆಯಾಗಿ ಬಿಟ್ಟ ಯಶಸ್ವಿ ಕರೆ ತೋರಿಸುತ್ತದೆ, ಮತ್ತು ವಿಭಾಗ 6 ಕೆಲಸ ಇನ್ನೂ ನಡೆದ ವಿಫಲ observation ತೋರಿಸುತ್ತದೆ. Tool ಫಲಿತಾಂಶ ಕರೆಯ ಬಗ್ಗೆ ಸಾಕ್ಷ್ಯ, ಮತ್ತು ಪರಿಸರ ಸ್ಥಿತಿ ಗುರಿಯ ಬಗ್ಗೆ ಸಾಕ್ಷ್ಯ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Correlation id: the identity that links a result to its call. Completion order: the order results finish, not the order requested. Abstention: choosing no tool. Postcondition: what should be true afterwards. Indeterminate outcome: a call that may or may not have taken effect. Idempotency key: a token that makes a repeated write safe. Race condition: a result that depends on timing.",
    "bodyKn": "Correlation id: ಫಲಿತಾಂಶವನ್ನು ಅದರ ಕರೆಗೆ ಜೋಡಿಸುವ ಗುರುತು. Completion order: ಫಲಿತಾಂಶಗಳು ಮುಗಿಯುವ ಕ್ರಮ, ಕೇಳಿದ ಕ್ರಮವಲ್ಲ. Abstention: ಯಾವುದೇ tool ಆರಿಸದಿರುವುದು. Postcondition: ನಂತರ ಏನು ನಿಜವಾಗಿರಬೇಕು. Indeterminate outcome: ಪರಿಣಾಮ ಬೀರಿರಬಹುದಾದ ಅಥವಾ ಬೀರದ ಕರೆ. Idempotency key: ಪುನರಾವರ್ತಿತ ಬರವಣಿಗೆಯನ್ನು ಸುರಕ್ಷಿತಗೊಳಿಸುವ ಟೋಕನ್. Race condition: ಸಮಯದ ಮೇಲೆ ಅವಲಂಬಿತ ಫಲಿತಾಂಶ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) Run independent calls in parallel and join results by tool_use_id: completion order was 002, 003, 001. 2) Reject duplicate ids. 3) Do not trust a router you have not tested: three of the lesson's routing claims failed on its own router. 4) Include the verb and the negative boundaries in descriptions, and watch for negative words boosting the wrong tool. 5) Evaluate the final state: a successful call left the wrong task. 6) A timed-out write may still have happened. 7) A stress test that finds no race is not a proof of safety. 8) Use decimal or integer units for money.",
    "bodyKn": "1) ಸ್ವತಂತ್ರ ಕರೆಗಳನ್ನು ಸಮಾನಾಂತರವಾಗಿ ಚಲಾಯಿಸಿ ಮತ್ತು ಫಲಿತಾಂಶಗಳನ್ನು tool_use_id ಮೂಲಕ ಜೋಡಿಸಿ: ಪೂರ್ಣಗೊಳ್ಳುವ ಕ್ರಮ 002, 003, 001 ಆಗಿತ್ತು. 2) ನಕಲು ids ತಿರಸ್ಕರಿಸಿ. 3) ಪರೀಕ್ಷಿಸದ router ಅನ್ನು ನಂಬಬೇಡಿ: ಪಾಠದ ಮೂರು routing ಹೇಳಿಕೆಗಳು ಅದರ ಸ್ವಂತ router ನಲ್ಲಿ ವಿಫಲವಾದವು. 4) ವಿವರಣೆಗಳಲ್ಲಿ ಕ್ರಿಯಾಪದ ಮತ್ತು ಋಣಾತ್ಮಕ ಗಡಿಗಳನ್ನು ಸೇರಿಸಿ, ಮತ್ತು ಋಣಾತ್ಮಕ ಪದಗಳು ತಪ್ಪಾದ tool ಅನ್ನು ಉತ್ತೇಜಿಸುವುದನ್ನು ಗಮನಿಸಿ. 5) ಅಂತಿಮ ಸ್ಥಿತಿ ಮೌಲ್ಯಮಾಪನ ಮಾಡಿ: ಯಶಸ್ವಿ ಕರೆ ತಪ್ಪು task ಬಿಟ್ಟಿತು. 6) Timeout ಆದ ಬರವಣಿಗೆ ಇನ್ನೂ ನಡೆದಿರಬಹುದು. 7) ಓಟ ಸಿಗದ ಒತ್ತಡ ಪರೀಕ್ಷೆ ಸುರಕ್ಷತೆಯ ಪುರಾವೆಯಲ್ಲ. 8) ಹಣಕ್ಕೆ decimal ಅಥವಾ ಪೂರ್ಣಾಂಕ ಘಟಕ ಬಳಸಿ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "Why is tool_use_id needed when calls run in parallel?",
      "qKn": "ಕರೆಗಳು ಸಮಾನಾಂತರವಾಗಿ ಚಲಿಸುವಾಗ tool_use_id ಏಕೆ ಬೇಕು?",
      "opts": [
       "It speeds up the tools",
       "Completion order differs from request order, so each result must carry the identity of its call",
       "It replaces validation",
       "It sets the timeout"
      ],
      "optsKn": [
       "ಅದು tools ವೇಗಗೊಳಿಸುತ್ತದೆ",
       "ಪೂರ್ಣಗೊಳ್ಳುವ ಕ್ರಮ ವಿನಂತಿ ಕ್ರಮಕ್ಕಿಂತ ಬೇರೆ, ಆದ್ದರಿಂದ ಪ್ರತಿ ಫಲಿತಾಂಶ ತನ್ನ ಕರೆಯ ಗುರುತು ಒಯ್ಯಬೇಕು",
       "ಅದು ಮಾನ್ಯತೆ ಬದಲಿಸುತ್ತದೆ",
       "ಅದು timeout ನಿಗದಿಪಡಿಸುತ್ತದೆ"
      ],
      "correct": 1
     },
     {
      "q": "In this lesson's run, where did \"Use arithmetic to calculate a numeric result\" route and why?",
      "qKn": "ಈ ಪಾಠದ ಓಟದಲ್ಲಿ \"Use arithmetic to calculate a numeric result\" ಎಲ್ಲಿಗೆ route ಆಯಿತು ಮತ್ತು ಏಕೆ?",
      "opts": [
       "To run_python, as the lesson claims",
       "To search_web, because its description mentions \"arithmetic\" in its negative boundary",
       "To query_db",
       "It abstained"
      ],
      "optsKn": [
       "ಪಾಠ ಹೇಳುವಂತೆ run_python ಗೆ",
       "search_web ಗೆ, ಏಕೆಂದರೆ ಅದರ ವಿವರಣೆ ಋಣಾತ್ಮಕ ಗಡಿಯಲ್ಲಿ \"arithmetic\" ಉಲ್ಲೇಖಿಸುತ್ತದೆ",
       "query_db ಗೆ",
       "ಅದು abstain ಮಾಡಿತು"
      ],
      "correct": 1
     },
     {
      "q": "The create_task call timed out, yet the task existed 0.5 seconds later. What does that show?",
      "qKn": "create_task ಕರೆ timeout ಆಯಿತು, ಆದರೂ 0.5 ಸೆಕೆಂಡ್ ನಂತರ task ಇತ್ತು. ಅದು ಏನು ತೋರಿಸುತ್ತದೆ?",
      "opts": [
       "The timeout was wrong",
       "A failed observation does not prove the world did not change, so blind retries can duplicate",
       "Tasks are created twice by default",
       "Validation failed"
      ],
      "optsKn": [
       "Timeout ತಪ್ಪಾಗಿತ್ತು",
       "ವಿಫಲ observation ಜಗತ್ತು ಬದಲಾಗಲಿಲ್ಲ ಎಂದು ಸಾಬೀತುಪಡಿಸುವುದಿಲ್ಲ, ಆದ್ದರಿಂದ ಕುರುಡು retries ನಕಲು ಮಾಡಬಹುದು",
       "Tasks ಡೀಫಾಲ್ಟ್ ಆಗಿ ಎರಡು ಬಾರಿ ರಚನೆಯಾಗುತ್ತವೆ",
       "ಮಾನ್ಯತೆ ವಿಫಲವಾಯಿತು"
      ],
      "correct": 1
     },
     {
      "q": "The wrong-title create_task call returned ok True. Under state-based evaluation, did the task succeed?",
      "qKn": "ತಪ್ಪು-ಶೀರ್ಷಿಕೆಯ create_task ಕರೆ ok True ಹಿಂತಿರುಗಿಸಿತು. State-based ಮೌಲ್ಯಮಾಪನದಲ್ಲಿ ಕಾರ್ಯ ಯಶಸ್ವಿಯಾಯಿತೇ?",
      "opts": [
       "Yes, the tool said ok",
       "No, the requested task does not exist in the environment",
       "Only if the id was unique",
       "Yes, the schema validated"
      ],
      "optsKn": [
       "ಹೌದು, tool ok ಎಂದಿತು",
       "ಇಲ್ಲ, ಕೇಳಿದ task ಪರಿಸರದಲ್ಲಿ ಇಲ್ಲ",
       "id ವಿಶಿಷ್ಟವಾಗಿದ್ದರೆ ಮಾತ್ರ",
       "ಹೌದು, schema ಮಾನ್ಯವಾಯಿತು"
      ],
      "correct": 1
     },
     {
      "q": "What can you conclude from a 4,000-call stress test that found no duplicate ids?",
      "qKn": "ನಕಲು ids ಸಿಗದ 4,000-ಕರೆಯ ಒತ್ತಡ ಪರೀಕ್ಷೆಯಿಂದ ನೀವು ಏನು ತೀರ್ಮಾನಿಸಬಹುದು?",
      "opts": [
       "The counter is thread-safe",
       "Only that this run did not expose the race; unsynchronised read-modify-write remains unsafe by construction",
       "Locks are unnecessary",
       "The tool is idempotent"
      ],
      "optsKn": [
       "Counter thread-ಸುರಕ್ಷಿತ",
       "ಈ ಓಟ ಓಟ ಪರಿಸ್ಥಿತಿ ಬಯಲುಗೊಳಿಸಲಿಲ್ಲ ಎಂಬುದು ಮಾತ್ರ; ಸಿಂಕ್ರೊನೈಸ್ ಮಾಡದ ಓದು-ಬದಲಿಸು-ಬರೆ ರಚನೆಯಿಂದಲೇ ಅಸುರಕ್ಷಿತ",
       "Locks ಅನಗತ್ಯ",
       "Tool idempotent"
      ],
      "correct": 1
     }
    ]
   }
  }
 ]
};
