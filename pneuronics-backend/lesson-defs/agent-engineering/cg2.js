module.exports = {
 "phaseId": "6a369d6366020ed05b32158c",
 "moduleId": "6a369d6466020ed05b3215b3",
 "order": 1,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Action Budgets, Iteration Caps, Cost Governors (Part 2 of 3) — A Layered Governor",
 "titleKn": "ಕ್ರಿಯೆ ಬಜೆಟ್‌ಗಳು, Iteration ಮಿತಿಗಳು, ವೆಚ್ಚ ನಿಯಂತ್ರಕಗಳು (ಭಾಗ 2 / 3) — ಪದರದ ನಿಯಂತ್ರಕ",
 "desc": "Build a layered cost governor and watch it stop an order-polling loop that a monthly cap would miss.",
 "descKn": "ಪದರದ ವೆಚ್ಚ ನಿಯಂತ್ರಕ ನಿರ್ಮಿಸಿ ಮತ್ತು ಮಾಸಿಕ ಮಿತಿ ತಪ್ಪಿಸುವ order-polling ಲೂಪ್ ಅದು ನಿಲ್ಲಿಸುವುದನ್ನು ನೋಡಿ.",
 "objectives": [
  "Model a policy, action and ledger.",
  "Evaluate layers in order.",
  "Record a named stop reason.",
  "Compare monthly-only with layered.",
  "Keep approval below hard limits."
 ],
 "objectivesKn": [
  "ನೀತಿ, ಕ್ರಿಯೆ ಮತ್ತು ಲೆಡ್ಜರ್ ಮಾದರಿ ಮಾಡಿ.",
  "ಪದರಗಳನ್ನು ಕ್ರಮವಾಗಿ ಮೌಲ್ಯಮಾಪನ ಮಾಡಿ.",
  "ಹೆಸರಿಸಿದ ನಿಲುಗಡೆ ಕಾರಣ ದಾಖಲಿಸಿ.",
  "ಮಾಸಿಕ-ಮಾತ್ರ ಮತ್ತು ಪದರ ಹೋಲಿಸಿ.",
  "ಅನುಮೋದನೆಯನ್ನು ಕಠಿಣ ಮಿತಿಗಳ ಕೆಳಗೆ ಇಡಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Action Budgets, Iteration Caps, Cost Governors (Part 2 of 3)",
    "textKn": "ಕ್ರಿಯೆ ಬಜೆಟ್‌ಗಳು, Iteration ಮಿತಿಗಳು, ವೆಚ್ಚ ನಿಯಂತ್ರಕಗಳು (ಭಾಗ 2 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 2 of 3: a layered governor with a policy, ledger and per-action evaluation, the lesson order-tracking scenario, a higher tool cap that lets the velocity limit fire, a monthly-only policy against a layered one and approval that does not override other limits. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind action budgets, iteration caps and cost governors (Decimal cost arithmetic, token and tool caps, velocity limits, layered policies, approvals and a durable SQLite reservation ledger), not the real software, and prices are the lesson illustrative numbers or invented, time is simulated, the ledger is a temporary SQLite file and no model, provider or real tool is called, so no real LLM behaviour is measured. The original code/main.py was not supplied, so the labs are our own implementation; the lesson says its code is original teaching code and its first expected output contained a cost mistake that it corrected itself, which the lab confirms by running the arithmetic. The e-commerce story of monthly spend rising from 1,200 to 4,800 dollars is cited from the lesson and was not verified. All prices are the lesson illustrations or invented. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 2ನೆಯದು: ನೀತಿ, ಲೆಡ್ಜರ್ ಮತ್ತು ಪ್ರತಿ-ಕ್ರಿಯೆ ಮೌಲ್ಯಮಾಪನ ಇರುವ ಪದರದ ನಿಯಂತ್ರಕ, lesson ನ order-tracking ಸನ್ನಿವೇಶ, ವೇಗ ಮಿತಿ ಉರಿಯಲು ಬಿಡುವ ಹೆಚ್ಚಿನ tool ಮಿತಿ, ಪದರದ ನೀತಿಯ ವಿರುದ್ಧ ಮಾಸಿಕ-ಮಾತ್ರ ನೀತಿ ಮತ್ತು ಇತರ ಮಿತಿಗಳನ್ನು ಮೀರಿಸದ ಅನುಮೋದನೆ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು ಕ್ರಿಯೆ ಬಜೆಟ್‌ಗಳು, iteration ಮಿತಿಗಳು ಮತ್ತು ವೆಚ್ಚ ನಿಯಂತ್ರಕಗಳು (Decimal ವೆಚ್ಚ ಅಂಕಗಣಿತ, token ಮತ್ತು tool ಮಿತಿಗಳು, ವೇಗ ಮಿತಿಗಳು, ಪದರದ ನೀತಿಗಳು, ಅನುಮೋದನೆಗಳು ಮತ್ತು durable SQLite ಕಾಯ್ದಿರಿಸುವ ಲೆಡ್ಜರ್) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಬೆಲೆಗಳು lesson ನ ವಿವರಣಾತ್ಮಕ ಸಂಖ್ಯೆಗಳು ಅಥವಾ ಕಲ್ಪಿತ, ಸಮಯ ಅನುಕರಿತ, ಲೆಡ್ಜರ್ ತಾತ್ಕಾಲಿಕ SQLite ಫೈಲ್ ಮತ್ತು ಯಾವ ಮಾದರಿ, ಪೂರೈಕೆದಾರ ಅಥವಾ ನಿಜ tool ಕರೆಯಲ್ಪಡುವುದಿಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ code/main.py ಒದಗಿಸಿರಲಿಲ್ಲ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ನಮ್ಮದೇ ಅನುಷ್ಠಾನ; lesson ತನ್ನ ಕೋಡ್ ಮೂಲ ಬೋಧನಾ ಕೋಡ್ ಎನ್ನುತ್ತದೆ ಮತ್ತು ಅದರ ಮೊದಲ ನಿರೀಕ್ಷಿತ ಔಟ್‌ಪುಟ್‌ನಲ್ಲಿ ವೆಚ್ಚ ತಪ್ಪಿತ್ತು, ಅದನ್ನು ಅದೇ ಸರಿಪಡಿಸಿತು, ಲ್ಯಾಬ್ ಅಂಕಗಣಿತ ಓಡಿಸಿ ಅದನ್ನು ದೃಢಪಡಿಸುತ್ತದೆ. ಮಾಸಿಕ ಖರ್ಚು 1,200 ರಿಂದ 4,800 ಡಾಲರ್‌ಗೆ ಏರಿದ ಇ-ಕಾಮರ್ಸ್ ಕಥೆ lesson ನಿಂದ ಉಲ್ಲೇಖಿತ ಮತ್ತು ಪರಿಶೀಲಿಸಲಾಗಿಲ್ಲ. ಎಲ್ಲಾ ಬೆಲೆಗಳು lesson ವಿವರಣೆಗಳು ಅಥವಾ ಕಲ್ಪಿತ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "One Decision Point, Many Limits",
    "textKn": "ಒಂದು ನಿರ್ಧಾರ ಬಿಂದು, ಹಲವು ಮಿತಿಗಳು",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "The Simulator and the Order-Polling Loop",
    "headingKn": "ಸಿಮ್ಯುಲೇಟರ್ ಮತ್ತು Order-Polling ಲೂಪ್",
    "bodyEn": "The governor sits between the agent and anything billable. This part builds one with a frozen policy, an action record and a mutable ledger, checks output tokens, context size, task tokens, task dollars, turns, tool allowlist and cap, a ten-minute velocity window, a daily and a monthly limit and an approval threshold, in that order. It then runs a scripted agent that does two normal actions and starts polling an order tool, and compares a monthly-only policy with the layered one.",
    "bodyKn": "ನಿಯಂತ್ರಕ agent ಮತ್ತು ಬಿಲ್ ಆಗುವ ಯಾವುದರ ನಡುವೆ ಕುಳಿತಿದೆ. ಈ ಭಾಗ ಹೆಪ್ಪುಗಟ್ಟಿದ ನೀತಿ, ಕ್ರಿಯೆ ದಾಖಲೆ ಮತ್ತು ಬದಲಾಗುವ ಲೆಡ್ಜರ್ ಇರುವ ಒಂದನ್ನು ನಿರ್ಮಿಸಿ, ಔಟ್‌ಪುಟ್ tokens, ಸಂದರ್ಭ ಗಾತ್ರ, ಕಾರ್ಯ tokens, ಕಾರ್ಯ ಡಾಲರ್, ಟರ್ನ್‌ಗಳು, tool allowlist ಮತ್ತು ಮಿತಿ, ಹತ್ತು-ನಿಮಿಷದ ವೇಗ ವಿಂಡೋ, ದೈನಿಕ ಮತ್ತು ಮಾಸಿಕ ಮಿತಿ ಹಾಗೂ ಅನುಮೋದನೆ ಮಿತಿ, ಆ ಕ್ರಮದಲ್ಲಿ ಪರಿಶೀಲಿಸುತ್ತದೆ. ನಂತರ ಎರಡು ಸಾಮಾನ್ಯ ಕ್ರಿಯೆ ಮಾಡಿ order tool ಪೋಲ್ ಮಾಡಲು ಆರಂಭಿಸುವ scripted agent ಓಡಿಸಿ, ಮಾಸಿಕ-ಮಾತ್ರ ನೀತಿಯನ್ನು ಪದರದ ನೀತಿಯೊಂದಿಗೆ ಹೋಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "A Layered Cost Governor",
    "headingKn": "ಪದರದ ವೆಚ್ಚ ನಿಯಂತ್ರಕ",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">the first failing layer stops the agent and says why</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">action</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">proposed</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">governor</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">checks every layer</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">ledger</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">tracks spend</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">stop</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">with a named reason</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">the first failing layer stops the agent and says why</text></svg>",
    "captionEn": "Each proposed action passes every layer in order or is denied.",
    "captionKn": "ಪ್ರತಿ ಪ್ರಸ್ತಾಪಿತ ಕ್ರಿಯೆ ಪ್ರತಿ ಪದರವನ್ನು ಕ್ರಮವಾಗಿ ಪಾಸ್ ಮಾಡುತ್ತದೆ ಅಥವಾ ನಿರಾಕರಿಸಲ್ಪಡುತ್ತದೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Layers in evaluation order",
    "headingKn": "ಮೌಲ್ಯಮಾಪನ ಕ್ರಮದಲ್ಲಿ ಪದರಗಳು",
    "headers": [
     "Order",
     "Check and denial reason"
    ],
    "rows": [
     [
      "1 to 3",
      "kill switch, output tokens, context size"
     ],
     [
      "4 to 6",
      "task tokens, task dollars, turns"
     ],
     [
      "7 and 8",
      "tool allowlist and tool call cap"
     ],
     [
      "9 to 11",
      "velocity window, daily limit, monthly limit"
     ],
     [
      "12",
      "approval threshold of 25 dollars"
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
    "filename": "cg_2.py",
    "headingEn": "Policy, action, ledger and governor",
    "headingKn": "ನೀತಿ, ಕ್ರಿಯೆ, ಲೆಡ್ಜರ್ ಮತ್ತು ನಿಯಂತ್ರಕ",
    "descEn": "BudgetPolicy holds the limits, Action describes a proposal, UsageLedger records spend and the audit trail and CostGovernor.evaluate returns the first failing reason while execute updates the ledger only for authorised actions.",
    "descKn": "BudgetPolicy ಮಿತಿಗಳನ್ನು ಹೊಂದಿದೆ, Action ಪ್ರಸ್ತಾವನೆ ವಿವರಿಸುತ್ತದೆ, UsageLedger ಖರ್ಚು ಮತ್ತು ಆಡಿಟ್ ಹಾದಿ ದಾಖಲಿಸುತ್ತದೆ ಮತ್ತು CostGovernor.evaluate ಮೊದಲ ವಿಫಲ ಕಾರಣ ಹಿಂತಿರುಗಿಸುತ್ತದೆ, execute ಅಧಿಕೃತ ಕ್ರಿಯೆಗಳಿಗೆ ಮಾತ್ರ ಲೆಡ್ಜರ್ ನವೀಕರಿಸುತ್ತದೆ.",
    "code": "MILLION = Decimal(1_000_000)\r\nPRICES = {\"small\": (Decimal(\"1.00\"), Decimal(\"4.00\"), Decimal(\"0.25\")), \"premium\": (Decimal(\"5.00\"), Decimal(\"20.00\"), Decimal(\"1.25\"))}\r\n\r\n\r\ndef money(x):\r\n    return Decimal(x)\r\n\r\n\r\n@dataclass(frozen=True)\r\nclass BudgetPolicy:\r\n    max_output_tokens: int = 4_000\r\n    max_context_tokens: int = 20_000\r\n    max_task_tokens: int = 200_000\r\n    max_task_usd: Decimal = money(\"100\")\r\n    max_turns: int = 20\r\n    velocity_window: int = 600\r\n    velocity_limit: Decimal = money(\"50\")\r\n    daily_limit: Decimal = money(\"200\")\r\n    monthly_limit: Decimal = money(\"3000\")\r\n    approval_threshold: Decimal = money(\"25\")\r\n    tool_limits: dict = field(default_factory=lambda: {\"lookup\": 5, \"order_tracking\": 5})\r\n\r\n\r\n@dataclass(frozen=True)\r\nclass Action:\r\n    name: str\r\n    tool: str\r\n    t: int\r\n    input_tokens: int = 10_000\r\n    cached_tokens: int = 5_000\r\n    output_tokens: int = 2_000\r\n    tool_cost: Decimal = money(\"6.00\")\r\n    complexity: str = \"simple\"\r\n\r\n\r\n@dataclass\r\nclass UsageLedger:\r\n    tokens: int = 0\r\n    cost: Decimal = Decimal(0)\r\n    turns: int = 0\r\n    tool_counts: dict = field(default_factory=lambda: defaultdict(int))\r\n    events: list = field(default_factory=list)\r\n    stopped: bool = False\r\n    audit: list = field(default_factory=list)\r\n\r\n\r\ndef action_cost(a):\r\n    inp, out, cached = PRICES[\"premium\" if a.complexity == \"complex\" else \"small\"]\r\n    model = (Decimal(a.input_tokens - a.cached_tokens) * inp + Decimal(a.cached_tokens) * cached + Decimal(a.output_tokens) * out) / MILLION\r\n    return model + a.tool_cost\r\n\r\n\r\nclass CostGovernor:\r\n    def __init__(self, policy):\r\n        self.p, self.ledger = policy, UsageLedger()\r\n\r\n    def spent_in(self, now, window):\r\n        return sum((c for t, c in self.ledger.events if now - window < t <= now), Decimal(0))\r\n\r\n    def evaluate(self, a, approved=False):\r\n        L, p = self.ledger, self.p\r\n        cost = action_cost(a)\r\n        tokens = a.input_tokens + a.output_tokens\r\n        if L.stopped:\r\n            return \"KILL_SWITCH_ACTIVE\", cost\r\n        if a.output_tokens > p.max_output_tokens:\r\n            return \"REQUEST_OUTPUT_TOKEN_LIMIT\", cost\r\n        if a.input_tokens > p.max_context_tokens:\r\n            return \"CONTEXT_WINDOW_LIMIT\", cost\r\n        if L.tokens + tokens > p.max_task_tokens:\r\n            return \"TASK_TOKEN_BUDGET\", cost\r\n        if L.cost + cost > p.max_task_usd:\r\n            return \"TASK_DOLLAR_BUDGET\", cost\r\n        if L.turns + 1 > p.max_turns:\r\n            return \"ITERATION_CAP\", cost\r\n        if a.tool not in p.tool_limits:\r\n            return \"TOOL_NOT_ALLOWED\", cost\r\n        if L.tool_counts[a.tool] + 1 > p.tool_limits[a.tool]:\r\n            return \"TOOL_CALL_CAP\", cost\r\n        if self.spent_in(a.t, p.velocity_window) + cost > p.velocity_limit:\r\n            return \"VELOCITY_LIMIT\", cost\r\n        if self.spent_in(a.t, 86_400) + cost > p.daily_limit:\r\n            return \"DAILY_BUDGET\", cost\r\n        if self.spent_in(a.t, 30 * 86_400) + cost > p.monthly_limit:\r\n            return \"MONTHLY_BUDGET\", cost\r\n        if cost >= p.approval_threshold and not approved:\r\n            return \"HUMAN_APPROVAL_REQUIRED\", cost\r\n        return \"AUTHORIZED\", cost\r\n\r\n    def execute(self, a, approved=False):\r\n        reason, cost = self.evaluate(a, approved)\r\n        L = self.ledger\r\n        L.audit.append({\"t\": a.t, \"action\": a.name, \"tool\": a.tool, \"allowed\": reason == \"AUTHORIZED\", \"reason\": reason})\r\n        if reason == \"AUTHORIZED\":\r\n            L.tokens += a.input_tokens + a.output_tokens\r\n            L.cost += cost\r\n            L.turns += 1\r\n            L.tool_counts[a.tool] += 1\r\n            L.events.append((a.t, cost))\r\n        elif reason != \"HUMAN_APPROVAL_REQUIRED\":\r\n            L.stopped = True\r\n        return reason, cost\r\n\r\n\r\ndef scripted_run(policy, n_polls=8, spacing=60):\r\n    g = CostGovernor(policy)\r\n    plan = [Action(\"normal_work\", \"lookup\", 0), Action(\"normal_work\", \"lookup\", spacing)]\r\n    plan += [Action(\"poll_order_status\", \"order_tracking\", 2 * spacing + i * spacing) for i in range(n_polls)]\r\n    for a in plan:\r\n        reason, _ = g.execute(a)\r\n        if g.ledger.stopped:\r\n            break\r\n    return g"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "cg_2.py",
    "headingEn": "main(): experiments",
    "headingKn": "main(): ಪ್ರಯೋಗಗಳು",
    "descEn": "main() runs the lesson scenario, raises the tool cap, compares monthly-only with layered and tests approval.",
    "descKn": "main() lesson ಸನ್ನಿವೇಶ ಓಡಿಸಿ, tool ಮಿತಿ ಏರಿಸಿ, ಮಾಸಿಕ-ಮಾತ್ರ ಮತ್ತು ಪದರ ಹೋಲಿಸಿ ಮತ್ತು ಅನುಮೋದನೆ ಪರೀಕ್ಷಿಸುತ್ತದೆ.",
    "code": "def main():\r\n    section(\"1. Genuinely running: the lesson scenario, tool cap of 5 on order tracking\")\r\n    g = scripted_run(BudgetPolicy())\r\n    for i, e in enumerate(g.ledger.audit, 1):\r\n        print(f\"{i:02d} {'ALLOW' if e['allowed'] else 'DENY ':5} {e['action']:18} {e['reason']}\")\r\n    print(f\"turns {g.ledger.turns} | tokens {g.ledger.tokens} | task cost {g.ledger.cost} | stopped {g.ledger.stopped}\")\r\n    print(\"two normal actions and five polls were authorised and the eighth action, a sixth poll, was denied by the tool cap, which also tripped the kill switch; each action cost 6.01425, so seven cost 42.09975, matching the corrected figures from the lesson and not the first printed ones\")\r\n\r\n    section(\"2. Genuinely running: a higher tool cap lets the velocity limit fire instead\")\r\n    g2 = scripted_run(BudgetPolicy(tool_limits={\"lookup\": 5, \"order_tracking\": 50}), n_polls=15)\r\n    last = g2.ledger.audit[-1]\r\n    print(f\"stopped after {g2.ledger.turns} authorised actions at t={last['t']} seconds because of {last['reason']} | spent in the window {g2.spent_in(last['t'], 600)}\")\r\n    print(\"with a cap of 50 the first limit to fire is the ten-minute velocity limit of 50 dollars, because eight actions fit in the window at 48.11 and the ninth would make 54.12, which is the second layer catching what the first would have allowed\")\r\n\r\n    section(\"3. Genuinely running: monthly-only policy against layered policies over ten polls\")\r\n    monthly_only = BudgetPolicy(max_turns=10_000, max_task_usd=money(\"1000000\"), velocity_limit=money(\"1000000\"), daily_limit=money(\"1000000\"), tool_limits={\"lookup\": 10_000, \"order_tracking\": 10_000}, max_task_tokens=10_000_000)\r\n    gm = scripted_run(monthly_only, n_polls=10)\r\n    gl = scripted_run(BudgetPolicy(), n_polls=10)\r\n    print(f\"monthly-only: {gm.ledger.turns} actions allowed, {gm.ledger.cost} spent, stopped {gm.ledger.stopped}\")\r\n    print(f\"layered:      {gl.ledger.turns} actions allowed, {gl.ledger.cost} spent, stopped {gl.ledger.stopped}, reason {gl.ledger.audit[-1]['reason']}\")\r\n    print(\"the monthly cap of 3000 never fires within a dozen actions, so the loop would run until it did, while the layered policy stopped at 42.10 dollars; one limit sized for a month cannot catch a loop that burns money in minutes\")\r\n\r\n    section(\"4. Genuinely running: approval for an expensive action does not override other limits\")\r\n    g3 = CostGovernor(BudgetPolicy())\r\n    expensive = Action(\"research\", \"lookup\", 0, tool_cost=money(\"30\"))\r\n    print(\"without approval:\", g3.evaluate(expensive)[0], \"| with approval:\", g3.evaluate(expensive, approved=True)[0])\r\n    g3.ledger.cost = money(\"80\")\r\n    print(\"with approval but only 20 left in the task budget:\", g3.evaluate(expensive, approved=True)[0])\r\n    print(\"an expensive action is paused for approval first, approval turns it into an authorised action only when every hard limit still passes, and when the remaining task budget is too small it is denied even with approval; in the lab approval is a boolean argument and a real system must check an authenticated record\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: the lesson scenario, tool cap of 5 on order tracking ---\n01 ALLOW normal_work        AUTHORIZED\n02 ALLOW normal_work        AUTHORIZED\n03 ALLOW poll_order_status  AUTHORIZED\n04 ALLOW poll_order_status  AUTHORIZED\n05 ALLOW poll_order_status  AUTHORIZED\n06 ALLOW poll_order_status  AUTHORIZED\n07 ALLOW poll_order_status  AUTHORIZED\n08 DENY  poll_order_status  TOOL_CALL_CAP\nturns 7 | tokens 84000 | task cost 42.09975 | stopped True\ntwo normal actions and five polls were authorised and the eighth action, a sixth poll, was denied by the tool cap, which also tripped the kill switch; each action cost 6.01425, so seven cost 42.09975, matching the corrected figures from the lesson and not the first printed ones\n\n--- 2. Genuinely running: a higher tool cap lets the velocity limit fire instead ---\nstopped after 8 authorised actions at t=480 seconds because of VELOCITY_LIMIT | spent in the window 48.11400\nwith a cap of 50 the first limit to fire is the ten-minute velocity limit of 50 dollars, because eight actions fit in the window at 48.11 and the ninth would make 54.12, which is the second layer catching what the first would have allowed\n\n--- 3. Genuinely running: monthly-only policy against layered policies over ten polls ---\nmonthly-only: 12 actions allowed, 72.17100 spent, stopped False\nlayered:      7 actions allowed, 42.09975 spent, stopped True, reason TOOL_CALL_CAP\nthe monthly cap of 3000 never fires within a dozen actions, so the loop would run until it did, while the layered policy stopped at 42.10 dollars; one limit sized for a month cannot catch a loop that burns money in minutes\n\n--- 4. Genuinely running: approval for an expensive action does not override other limits ---\nwithout approval: HUMAN_APPROVAL_REQUIRED | with approval: AUTHORIZED\nwith approval but only 20 left in the task budget: TASK_DOLLAR_BUDGET\nan expensive action is paused for approval first, approval turns it into an authorised action only when every hard limit still passes, and when the remaining task budget is too small it is denied even with approval; in the lab approval is a boolean argument and a real system must check an authenticated record"
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
    "headingEn": "Genuinely Found: The Scenario and the Velocity Limit",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಸನ್ನಿವೇಶ ಮತ್ತು ವೇಗ ಮಿತಿ",
    "bodyEn": "Section 1: two normal actions and five polls were authorised and the eighth action was denied with TOOL_CALL_CAP, for 7 turns, 84000 tokens, a task cost of 42.09975 and the kill switch set. Section 2: with the order-tracking cap raised to 50 the run stopped after 8 authorised actions at 480 seconds with VELOCITY_LIMIT, with 48.114 spent in the window.",
    "bodyKn": "ವಿಭಾಗ 1: ಎರಡು ಸಾಮಾನ್ಯ ಕ್ರಿಯೆ ಮತ್ತು ಐದು polls ಅಧಿಕೃತವಾದವು ಮತ್ತು ಎಂಟನೇ ಕ್ರಿಯೆ TOOL_CALL_CAP ನೊಂದಿಗೆ ನಿರಾಕರಿಸಲ್ಪಟ್ಟಿತು, 7 ಟರ್ನ್, 84000 tokens, ಕಾರ್ಯ ವೆಚ್ಚ 42.09975 ಮತ್ತು kill switch ಹೊಂದಿಸಲ್ಪಟ್ಟಿತು. ವಿಭಾಗ 2: order-tracking ಮಿತಿ 50 ಕ್ಕೆ ಏರಿಸಿದಾಗ ಓಟ 8 ಅಧಿಕೃತ ಕ್ರಿಯೆ ನಂತರ 480 ಸೆಕೆಂಡ್‌ನಲ್ಲಿ VELOCITY_LIMIT ನೊಂದಿಗೆ ನಿಂತಿತು, ವಿಂಡೋದಲ್ಲಿ 48.114 ಖರ್ಚಾಗಿತ್ತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Monthly-Only and Approval",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಮಾಸಿಕ-ಮಾತ್ರ ಮತ್ತು ಅನುಮೋದನೆ",
    "bodyEn": "Section 3: the monthly-only policy allowed 12 actions and 72.171 dollars with no stop, while the layered policy allowed 7 actions, 42.09975 dollars and stopped on TOOL_CALL_CAP. Section 4: a 30 dollar action returned HUMAN_APPROVAL_REQUIRED without approval and AUTHORIZED with it, and with only 20 left in the task budget returned TASK_DOLLAR_BUDGET even with approval.",
    "bodyKn": "ವಿಭಾಗ 3: ಮಾಸಿಕ-ಮಾತ್ರ ನೀತಿ 12 ಕ್ರಿಯೆ ಮತ್ತು 72.171 ಡಾಲರ್ ಅನುಮತಿಸಿ ನಿಲ್ಲಿಸಲಿಲ್ಲ, ಪದರದ ನೀತಿ 7 ಕ್ರಿಯೆ, 42.09975 ಡಾಲರ್ ಅನುಮತಿಸಿ TOOL_CALL_CAP ನಲ್ಲಿ ನಿಂತಿತು. ವಿಭಾಗ 4: 30 ಡಾಲರ್ ಕ್ರಿಯೆ ಅನುಮೋದನೆ ಇಲ್ಲದೆ HUMAN_APPROVAL_REQUIRED ಮತ್ತು ಅದರೊಂದಿಗೆ AUTHORIZED ಹಿಂತಿರುಗಿಸಿತು, ಮತ್ತು ಕಾರ್ಯ ಬಜೆಟ್‌ನಲ್ಲಿ ಕೇವಲ 20 ಉಳಿದಿದ್ದಾಗ ಅನುಮೋದನೆ ಇದ್ದರೂ TASK_DOLLAR_BUDGET ಹಿಂತಿರುಗಿಸಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "Each layer catches a different failure, so a loop that slips past one is stopped by the next, and a limit sized for a month cannot catch a loop that burns money in minutes.",
    "bodyKn": "ಪ್ರತಿ ಪದರ ಬೇರೆ ವೈಫಲ್ಯ ಹಿಡಿಯುತ್ತದೆ, ಆದ್ದರಿಂದ ಒಂದನ್ನು ಜಾರಿದ ಲೂಪ್ ಮುಂದಿನದರಿಂದ ನಿಲ್ಲುತ್ತದೆ, ಮತ್ತು ತಿಂಗಳಿಗೆ ಅಳತೆ ಮಾಡಿದ ಮಿತಿ ನಿಮಿಷಗಳಲ್ಲಿ ಹಣ ಸುಡುವ ಲೂಪ್ ಹಿಡಿಯಲಾರದು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"approval overrides the limits.\" With 20 left in the task budget a 30 dollar action was denied even when approved.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಅನುಮೋದನೆ ಮಿತಿಗಳನ್ನು ಮೀರಿಸುತ್ತದೆ.\" ಕಾರ್ಯ ಬಜೆಟ್‌ನಲ್ಲಿ 20 ಉಳಿದಿದ್ದಾಗ ಅನುಮೋದನೆ ಇದ್ದರೂ 30 ಡಾಲರ್ ಕ್ರಿಯೆ ನಿರಾಕರಿಸಲ್ಪಟ್ಟಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Policy: the configured limits. Ledger: the record of what was spent. Audit event: a record of a decision and its reason. Kill switch: a stored stop after a hard breach.",
    "bodyKn": "Policy: ಸಂರಚಿತ ಮಿತಿಗಳು. Ledger: ಏನು ಖರ್ಚಾಯಿತು ಎಂಬ ದಾಖಲೆ. Audit event: ನಿರ್ಧಾರ ಮತ್ತು ಅದರ ಕಾರಣದ ದಾಖಲೆ. Kill switch: ಕಠಿಣ ಉಲ್ಲಂಘನೆಯ ನಂತರ ಸಂಗ್ರಹಿತ ನಿಲುಗಡೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) The tool cap stopped the loop at 42.09975 dollars. 2) A cap of 50 let the velocity limit fire at 8 actions. 3) Monthly-only allowed 72.171 dollars and no stop. 4) Approval turned a pause into a go. 5) Approval did not beat the task budget.",
    "bodyKn": "1) tool ಮಿತಿ ಲೂಪ್ ಅನ್ನು 42.09975 ಡಾಲರ್‌ನಲ್ಲಿ ನಿಲ್ಲಿಸಿತು. 2) ಮಿತಿ 50 ವೇಗ ಮಿತಿ 8 ಕ್ರಿಯೆಗಳಲ್ಲಿ ಉರಿಯಲು ಬಿಟ್ಟಿತು. 3) ಮಾಸಿಕ-ಮಾತ್ರ 72.171 ಡಾಲರ್ ಅನುಮತಿಸಿ ನಿಲ್ಲಿಸಲಿಲ್ಲ. 4) ಅನುಮೋದನೆ ವಿರಾಮವನ್ನು ಮುಂದುವರಿಕೆಯಾಗಿ ಬದಲಿಸಿತು. 5) ಅನುಮೋದನೆ ಕಾರ್ಯ ಬಜೆಟ್ ಅನ್ನು ಮೀರಿಸಲಿಲ್ಲ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "Why was the eighth action denied in the lesson scenario?",
      "qKn": "lesson ಸನ್ನಿವೇಶದಲ್ಲಿ ಎಂಟನೇ ಕ್ರಿಯೆ ಏಕೆ ನಿರಾಕರಿಸಲ್ಪಟ್ಟಿತು?",
      "opts": [
       "TOOL_CALL_CAP",
       "VELOCITY_LIMIT",
       "DAILY_BUDGET",
       "ITERATION_CAP"
      ],
      "optsKn": [
       "TOOL_CALL_CAP",
       "VELOCITY_LIMIT",
       "DAILY_BUDGET",
       "ITERATION_CAP"
      ],
      "correct": 0
     },
     {
      "q": "Which limit fired when the tool cap was raised to 50?",
      "qKn": "tool ಮಿತಿ 50 ಕ್ಕೆ ಏರಿಸಿದಾಗ ಯಾವ ಮಿತಿ ಉರಿಯಿತು?",
      "opts": [
       "VELOCITY_LIMIT",
       "TOOL_CALL_CAP",
       "MONTHLY_BUDGET",
       "None"
      ],
      "optsKn": [
       "VELOCITY_LIMIT",
       "TOOL_CALL_CAP",
       "MONTHLY_BUDGET",
       "ಯಾವುದೂ ಇಲ್ಲ"
      ],
      "correct": 0
     },
     {
      "q": "How much did the monthly-only policy spend over 12 actions?",
      "qKn": "12 ಕ್ರಿಯೆಗಳಲ್ಲಿ ಮಾಸಿಕ-ಮಾತ್ರ ನೀತಿ ಎಷ್ಟು ಖರ್ಚು ಮಾಡಿತು?",
      "opts": [
       "72.171",
       "42.09975",
       "3000",
       "48.114"
      ],
      "optsKn": [
       "72.171",
       "42.09975",
       "3000",
       "48.114"
      ],
      "correct": 0
     },
     {
      "q": "What did a 30 dollar action return with approval and 20 left in the task budget?",
      "qKn": "ಕಾರ್ಯ ಬಜೆಟ್‌ನಲ್ಲಿ 20 ಉಳಿದು ಅನುಮೋದನೆ ಇದ್ದಾಗ 30 ಡಾಲರ್ ಕ್ರಿಯೆ ಏನು ಹಿಂತಿರುಗಿಸಿತು?",
      "opts": [
       "TASK_DOLLAR_BUDGET",
       "AUTHORIZED",
       "HUMAN_APPROVAL_REQUIRED",
       "KILL_SWITCH_ACTIVE"
      ],
      "optsKn": [
       "TASK_DOLLAR_BUDGET",
       "AUTHORIZED",
       "HUMAN_APPROVAL_REQUIRED",
       "KILL_SWITCH_ACTIVE"
      ],
      "correct": 0
     },
     {
      "q": "Is the approval in the lab a real approval record?",
      "qKn": "ಲ್ಯಾಬ್‌ನ ಅನುಮೋದನೆ ನಿಜ ಅನುಮೋದನೆ ದಾಖಲೆಯೇ?",
      "opts": [
       "No, it is a boolean argument",
       "Yes, authenticated",
       "Yes, signed",
       "It is read from the ledger"
      ],
      "optsKn": [
       "ಇಲ್ಲ, ಅದು ಬೂಲಿಯನ್ ಆರ್ಗ್ಯುಮೆಂಟ್",
       "ಹೌದು, ದೃಢೀಕೃತ",
       "ಹೌದು, ಸಹಿ ಮಾಡಿದ",
       "ಅದನ್ನು ಲೆಡ್ಜರ್‌ನಿಂದ ಓದಲಾಗಿದೆ"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
