module.exports = {
 "phaseId": "6a369d6366020ed05b32158c",
 "moduleId": "6a369d6466020ed05b3215b3",
 "order": 0,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Action Budgets, Iteration Caps, Cost Governors (Part 1 of 3) — Cost Arithmetic and Simple Governors",
 "titleKn": "ಕ್ರಿಯೆ ಬಜೆಟ್‌ಗಳು, Iteration ಮಿತಿಗಳು, ವೆಚ್ಚ ನಿಯಂತ್ರಕಗಳು (ಭಾಗ 1 / 3) — ವೆಚ್ಚ ಅಂಕಗಣಿತ ಮತ್ತು ಸರಳ ನಿಯಂತ್ರಕಗಳು",
 "desc": "Price requests exactly, build three simple governors and recheck a lesson expected output by running it.",
 "descKn": "ವಿನಂತಿಗಳಿಗೆ ನಿಖರವಾಗಿ ಬೆಲೆ ಕಟ್ಟಿ, ಮೂರು ಸರಳ ನಿಯಂತ್ರಕ ನಿರ್ಮಿಸಿ ಮತ್ತು lesson ನಿರೀಕ್ಷಿತ ಔಟ್‌ಪುಟ್ ಅನ್ನು ಓಡಿಸಿ ಮರುಪರಿಶೀಲಿಸಿ.",
 "objectives": [
  "Price a request with Decimal.",
  "Cap tokens and tools.",
  "Limit spend per window.",
  "Check quadratic growth.",
  "Recompute an expected output."
 ],
 "objectivesKn": [
  "Decimal ನೊಂದಿಗೆ ವಿನಂತಿಗೆ ಬೆಲೆ ಕಟ್ಟಿ.",
  "tokens ಮತ್ತು tools ಮಿತಿಗೊಳಿಸಿ.",
  "ಪ್ರತಿ ವಿಂಡೋಗೆ ಖರ್ಚು ಮಿತಿಗೊಳಿಸಿ.",
  "ವರ್ಗೀಯ ಬೆಳವಣಿಗೆ ಪರಿಶೀಲಿಸಿ.",
  "ನಿರೀಕ್ಷಿತ ಔಟ್‌ಪುಟ್ ಮರುಲೆಕ್ಕ ಹಾಕಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Action Budgets, Iteration Caps, Cost Governors (Part 1 of 3)",
    "textKn": "ಕ್ರಿಯೆ ಬಜೆಟ್‌ಗಳು, Iteration ಮಿತಿಗಳು, ವೆಚ್ಚ ನಿಯಂತ್ರಕಗಳು (ಭಾಗ 1 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 1 of 3: request cost arithmetic with Decimal, a lesson example whose first expected output was wrong, token, tool and velocity governors, quadratic context growth checked against a loop and the saving from model routing. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind action budgets, iteration caps and cost governors (Decimal cost arithmetic, token and tool caps, velocity limits, layered policies, approvals and a durable SQLite reservation ledger), not the real software, and prices are the lesson illustrative numbers or invented, time is simulated, the ledger is a temporary SQLite file and no model, provider or real tool is called, so no real LLM behaviour is measured. The original code/main.py was not supplied, so the labs are our own implementation; the lesson says its code is original teaching code and its first expected output contained a cost mistake that it corrected itself, which the lab confirms by running the arithmetic. The e-commerce story of monthly spend rising from 1,200 to 4,800 dollars is cited from the lesson and was not verified. All prices are the lesson illustrations or invented. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 1ನೆಯದು: Decimal ನೊಂದಿಗೆ ವಿನಂತಿ ವೆಚ್ಚ ಅಂಕಗಣಿತ, ಮೊದಲ ನಿರೀಕ್ಷಿತ ಔಟ್‌ಪುಟ್ ತಪ್ಪಾಗಿದ್ದ lesson ಉದಾಹರಣೆ, token, tool ಮತ್ತು ವೇಗ ನಿಯಂತ್ರಕಗಳು, ಲೂಪ್ ವಿರುದ್ಧ ಪರಿಶೀಲಿಸಿದ ವರ್ಗೀಯ ಸಂದರ್ಭ ಬೆಳವಣಿಗೆ ಮತ್ತು model routing ನಿಂದ ಉಳಿತಾಯ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು ಕ್ರಿಯೆ ಬಜೆಟ್‌ಗಳು, iteration ಮಿತಿಗಳು ಮತ್ತು ವೆಚ್ಚ ನಿಯಂತ್ರಕಗಳು (Decimal ವೆಚ್ಚ ಅಂಕಗಣಿತ, token ಮತ್ತು tool ಮಿತಿಗಳು, ವೇಗ ಮಿತಿಗಳು, ಪದರದ ನೀತಿಗಳು, ಅನುಮೋದನೆಗಳು ಮತ್ತು durable SQLite ಕಾಯ್ದಿರಿಸುವ ಲೆಡ್ಜರ್) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಬೆಲೆಗಳು lesson ನ ವಿವರಣಾತ್ಮಕ ಸಂಖ್ಯೆಗಳು ಅಥವಾ ಕಲ್ಪಿತ, ಸಮಯ ಅನುಕರಿತ, ಲೆಡ್ಜರ್ ತಾತ್ಕಾಲಿಕ SQLite ಫೈಲ್ ಮತ್ತು ಯಾವ ಮಾದರಿ, ಪೂರೈಕೆದಾರ ಅಥವಾ ನಿಜ tool ಕರೆಯಲ್ಪಡುವುದಿಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ code/main.py ಒದಗಿಸಿರಲಿಲ್ಲ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ನಮ್ಮದೇ ಅನುಷ್ಠಾನ; lesson ತನ್ನ ಕೋಡ್ ಮೂಲ ಬೋಧನಾ ಕೋಡ್ ಎನ್ನುತ್ತದೆ ಮತ್ತು ಅದರ ಮೊದಲ ನಿರೀಕ್ಷಿತ ಔಟ್‌ಪುಟ್‌ನಲ್ಲಿ ವೆಚ್ಚ ತಪ್ಪಿತ್ತು, ಅದನ್ನು ಅದೇ ಸರಿಪಡಿಸಿತು, ಲ್ಯಾಬ್ ಅಂಕಗಣಿತ ಓಡಿಸಿ ಅದನ್ನು ದೃಢಪಡಿಸುತ್ತದೆ. ಮಾಸಿಕ ಖರ್ಚು 1,200 ರಿಂದ 4,800 ಡಾಲರ್‌ಗೆ ಏರಿದ ಇ-ಕಾಮರ್ಸ್ ಕಥೆ lesson ನಿಂದ ಉಲ್ಲೇಖಿತ ಮತ್ತು ಪರಿಶೀಲಿಸಲಾಗಿಲ್ಲ. ಎಲ್ಲಾ ಬೆಲೆಗಳು lesson ವಿವರಣೆಗಳು ಅಥವಾ ಕಲ್ಪಿತ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "A Cheap Request Inside a Loop Is Not Cheap",
    "textKn": "ಲೂಪ್‌ನೊಳಗಿನ ಅಗ್ಗದ ವಿನಂತಿ ಅಗ್ಗವಲ್ಲ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Pricing, Caps and a Wrong Expected Output",
    "headingKn": "ಬೆಲೆ, ಮಿತಿಗಳು ಮತ್ತು ತಪ್ಪಾದ ನಿರೀಕ್ಷಿತ ಔಟ್‌ಪುಟ್",
    "bodyEn": "An agent that can repeat billable actions needs limits that the agent cannot argue with. This part starts with the arithmetic: pricing a request with Decimal, the effect of cached input tokens, and the way a small cost multiplies. It then builds the simplest governors, a token budget, a per-tool call cap and a rolling velocity limit, checks that total input tokens grow with the square of the number of turns, and prices a routing mix. One of the lesson own expected outputs was wrong, and the lab recomputes it.",
    "bodyKn": "ಬಿಲ್ ಆಗುವ ಕ್ರಿಯೆಗಳನ್ನು ಪುನರಾವರ್ತಿಸಬಲ್ಲ agent ಗೆ agent ವಾದಿಸಲಾಗದ ಮಿತಿಗಳು ಬೇಕು. ಈ ಭಾಗ ಅಂಕಗಣಿತದಿಂದ ಆರಂಭ: Decimal ನೊಂದಿಗೆ ವಿನಂತಿಗೆ ಬೆಲೆ ಕಟ್ಟುವುದು, cached ಇನ್‌ಪುಟ್ tokens ಪರಿಣಾಮ ಮತ್ತು ಸಣ್ಣ ವೆಚ್ಚ ಹೇಗೆ ಗುಣಿಸುತ್ತದೆ. ನಂತರ ಸರಳ ನಿಯಂತ್ರಕಗಳು, token ಬಜೆಟ್, ಪ್ರತಿ-tool ಕರೆ ಮಿತಿ ಮತ್ತು ರೋಲಿಂಗ್ ವೇಗ ಮಿತಿ, ನಿರ್ಮಿಸುತ್ತದೆ, ಒಟ್ಟು ಇನ್‌ಪುಟ್ tokens ಟರ್ನ್‌ಗಳ ವರ್ಗದಂತೆ ಬೆಳೆಯುತ್ತದೆ ಎಂದು ಪರಿಶೀಲಿಸುತ್ತದೆ ಮತ್ತು routing ಮಿಶ್ರಣಕ್ಕೆ ಬೆಲೆ ಕಟ್ಟುತ್ತದೆ. lesson ನ ಸ್ವಂತ ನಿರೀಕ್ಷಿತ ಔಟ್‌ಪುಟ್‌ಗಳಲ್ಲಿ ಒಂದು ತಪ್ಪಾಗಿತ್ತು, ಮತ್ತು ಲ್ಯಾಬ್ ಅದನ್ನು ಮರುಲೆಕ್ಕ ಹಾಕುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Cost Arithmetic and Simple Governors",
    "headingKn": "ವೆಚ್ಚ ಅಂಕಗಣಿತ ಮತ್ತು ಸರಳ ನಿಯಂತ್ರಕಗಳು",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">every limit is checked before the money goes out</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">cost</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">tokens x price</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">caps</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">tokens, tools, turns</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">velocity</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">rolling window</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">deny</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">before it is spent</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">every limit is checked before the money goes out</text></svg>",
    "captionEn": "Price a request, then cap the number, size and speed of requests.",
    "captionKn": "ವಿನಂತಿಗೆ ಬೆಲೆ ಕಟ್ಟಿ, ನಂತರ ವಿನಂತಿಗಳ ಸಂಖ್ಯೆ, ಗಾತ್ರ ಮತ್ತು ವೇಗ ಮಿತಿಗೊಳಿಸಿ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "The illustrative prices",
    "headingKn": "ವಿವರಣಾತ್ಮಕ ಬೆಲೆಗಳು",
    "headers": [
     "Item",
     "Value"
    ],
    "rows": [
     [
      "first example",
      "input 2, output 8 dollars per million tokens"
     ],
     [
      "simulator small model",
      "input 1.00, output 4.00, cached input 0.25 per million"
     ],
     [
      "simulator action",
      "10000 input (5000 cached), 2000 output, plus a 6.00 tool charge"
     ],
     [
      "velocity limit",
      "50 dollars in 600 seconds"
     ],
     [
      "routing example",
      "0.002 small, 0.08 premium per request"
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
    "filename": "cg_1.py",
    "headingEn": "Cost function and the three governors",
    "headingKn": "ವೆಚ್ಚ ಕಾರ್ಯ ಮತ್ತು ಮೂರು ನಿಯಂತ್ರಕಗಳು",
    "descEn": "request_cost prices tokens with Decimal including cached input, TokenBudget, ToolCallGovernor and VelocityGovernor refuse requests that would pass a limit.",
    "descKn": "request_cost cached ಇನ್‌ಪುಟ್ ಸೇರಿ Decimal ನೊಂದಿಗೆ tokens ಗೆ ಬೆಲೆ ಕಟ್ಟುತ್ತದೆ, TokenBudget, ToolCallGovernor ಮತ್ತು VelocityGovernor ಮಿತಿ ದಾಟುವ ವಿನಂತಿಗಳನ್ನು ನಿರಾಕರಿಸುತ್ತವೆ.",
    "code": "def request_cost(input_tokens, output_tokens, in_price, out_price, cached_tokens=0, cached_price=Decimal(\"0\")):\r\n    \"\"\"USD cost with prices given per million tokens. Cached input tokens are billed at the cached price instead of the input price.\"\"\"\r\n    million = Decimal(1_000_000)\r\n    uncached = input_tokens - cached_tokens\r\n    return (Decimal(uncached) * in_price + Decimal(cached_tokens) * cached_price + Decimal(output_tokens) * out_price) / million\r\n\r\n\r\nclass TokenBudget:\r\n    def __init__(self, limit):\r\n        self.limit, self.used = limit, 0\r\n\r\n    def consume(self, tokens):\r\n        if tokens < 0 or self.used + tokens > self.limit:\r\n            return False\r\n        self.used += tokens\r\n        return True\r\n\r\n\r\nclass ToolCallGovernor:\r\n    def __init__(self, limits):\r\n        self.limits, self.counts = limits, {}\r\n\r\n    def allow(self, tool):\r\n        if tool not in self.limits:\r\n            return False\r\n        c = self.counts.get(tool, 0)\r\n        if c >= self.limits[tool]:\r\n            return False\r\n        self.counts[tool] = c + 1\r\n        return True\r\n\r\n\r\nclass VelocityGovernor:\r\n    def __init__(self, limit_usd, window_seconds):\r\n        self.limit, self.window, self.events = Decimal(limit_usd), window_seconds, deque()\r\n\r\n    def current(self, now):\r\n        cutoff = now - self.window\r\n        while self.events and self.events[0][0] <= cutoff:\r\n            self.events.popleft()\r\n        return sum((a for _, a in self.events), Decimal(0))\r\n\r\n    def allow(self, now, amount):\r\n        amount = Decimal(amount)\r\n        if amount < 0 or self.current(now) + amount > self.limit:\r\n            return False\r\n        self.events.append((now, amount))\r\n        return True"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "cg_1.py",
    "headingEn": "main(): experiments",
    "headingKn": "main(): ಪ್ರಯೋಗಗಳು",
    "descEn": "main() prices requests, recomputes the lesson action cost, runs the three governors, checks context growth and prices a routing mix.",
    "descKn": "main() ವಿನಂತಿಗಳಿಗೆ ಬೆಲೆ ಕಟ್ಟಿ, lesson ಕ್ರಿಯೆ ವೆಚ್ಚ ಮರುಲೆಕ್ಕ ಹಾಕಿ, ಮೂರು ನಿಯಂತ್ರಕ ಓಡಿಸಿ, ಸಂದರ್ಭ ಬೆಳವಣಿಗೆ ಪರಿಶೀಲಿಸಿ ಮತ್ತು routing ಮಿಶ್ರಣಕ್ಕೆ ಬೆಲೆ ಕಟ್ಟುತ್ತದೆ.",
    "code": "def main():\r\n    section(\"1. Genuinely computing: one request, then ten thousand of them\")\r\n    c = request_cost(10_000, 2_000, Decimal(\"2\"), Decimal(\"8\"))\r\n    print(\"one request costs\", c, \"USD | 10000 such requests cost\", c * 10_000, \"USD\")\r\n    print(\"the lesson example gives 0.02 for input and 0.016 for output, 0.036 in all, and ten thousand of them reach 360 dollars, so a cheap request becomes an expensive loop; the prices are illustrative\")\r\n\r\n    section(\"2. Genuinely computing: the lesson simulator action cost, and the figure its expected output printed\")\r\n    small = dict(in_price=Decimal(\"1.00\"), out_price=Decimal(\"4.00\"), cached_price=Decimal(\"0.25\"))\r\n    model = request_cost(10_000, 2_000, cached_tokens=5_000, **small)\r\n    action = model + Decimal(\"6.00\")\r\n    print(\"model cost:\", model, \"| action cost with a 6.00 tool charge:\", action, \"| seven actions:\", action * 7)\r\n    from decimal import ROUND_HALF_UP\r\n    q = Decimal(\"0.0001\")\r\n    print(\"rounded to four places with Python default half-even:\", round(action, 4), \"and\", round(action * 7, 4), \"| rounded half-up:\", action.quantize(q, rounding=ROUND_HALF_UP), \"and\", (action * 7).quantize(q, rounding=ROUND_HALF_UP))\r\n    print(\"the lesson first printed 6.0183 per action and 42.1270 in total, then corrected itself to 6.01425 and 42.09975; running the arithmetic gives the corrected exact figures, so the first expected output was a hand-written mistake and the code was right; the correction says four places should read 6.0143, which is true for round-half-up, while Python's default rounding for Decimal is half-even and prints 6.0142, so the printed digit depends on the rounding rule; the lab pricing is the lesson example, not a real price list\")\r\n\r\n    section(\"3. Genuinely running: token budget and tool call cap\")\r\n    tb = TokenBudget(100_000)\r\n    print(\"consume 92000:\", tb.consume(92_000), \"| consume 12000:\", tb.consume(12_000), \"| used:\", tb.used)\r\n    g = ToolCallGovernor({\"order_tracking\": 3})\r\n    print(\"order_tracking attempts:\", [\"ALLOW\" if g.allow(\"order_tracking\") else \"DENY\" for _ in range(5)], \"| unknown tool:\", \"ALLOW\" if g.allow(\"web_fetch\") else \"DENY\")\r\n    print(\"the second token request is refused because it would pass the limit, the fourth and fifth tool calls are refused at a cap of three, and an unknown tool is refused by default, which is the fail-closed choice\")\r\n\r\n    section(\"4. Genuinely running: a ten-minute velocity limit of 50 dollars\")\r\n    v = VelocityGovernor(\"50\", 600)\r\n    for t, amt in ((0, \"12\"), (120, \"14\"), (240, \"18\"), (360, \"10\")):\r\n        print(t, amt, \"ALLOW\" if v.allow(t, amt) else \"DENY\")\r\n    print(\"spend was 12, 26 and 44 dollars inside the window and the fourth request of 10 would make 54, so it was denied before it was spent; this is prevention, and checking the total after spending would only be monitoring\")\r\n\r\n    section(\"5. Genuinely computing: context growth is quadratic, T = n*b + d*n*(n-1)/2\")\r\n    b, d = 2_000, 1_000\r\n    for n in (10, 50, 100):\r\n        loop = sum(b + i * d for i in range(n))\r\n        formula = n * b + d * n * (n - 1) // 2\r\n        print(f\"{n:3d} turns: loop {loop:9d} | formula {formula:9d} | equal {loop == formula}\")\r\n    print(\"with a 2000 token base and 1000 tokens added per turn, the total input tokens grow with the square of the number of turns, which is why a long agent gets expensive without any single bad request\")\r\n\r\n    section(\"6. Genuinely computing: model routing\")\r\n    all_premium = 1000 * Decimal(\"0.08\")\r\n    routed = 800 * Decimal(\"0.002\") + 200 * Decimal(\"0.08\")\r\n    print(\"all premium:\", all_premium, \"| 800 small and 200 premium:\", routed, \"| saving:\", all_premium - routed, \"|\", f\"{(all_premium - routed) / all_premium:.0%}\")\r\n    print(\"the routed mix costs 17.60 against 80 and saves 78 percent, but the per-request costs are the lesson hypothetical figures and the calculation ignores any retries the cheaper model would need\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely computing: one request, then ten thousand of them ---\none request costs 0.036 USD | 10000 such requests cost 360.000 USD\nthe lesson example gives 0.02 for input and 0.016 for output, 0.036 in all, and ten thousand of them reach 360 dollars, so a cheap request becomes an expensive loop; the prices are illustrative\n\n--- 2. Genuinely computing: the lesson simulator action cost, and the figure its expected output printed ---\nmodel cost: 0.01425 | action cost with a 6.00 tool charge: 6.01425 | seven actions: 42.09975\nrounded to four places with Python default half-even: 6.0142 and 42.0998 | rounded half-up: 6.0143 and 42.0998\nthe lesson first printed 6.0183 per action and 42.1270 in total, then corrected itself to 6.01425 and 42.09975; running the arithmetic gives the corrected exact figures, so the first expected output was a hand-written mistake and the code was right; the correction says four places should read 6.0143, which is true for round-half-up, while Python's default rounding for Decimal is half-even and prints 6.0142, so the printed digit depends on the rounding rule; the lab pricing is the lesson example, not a real price list\n\n--- 3. Genuinely running: token budget and tool call cap ---\nconsume 92000: True | consume 12000: False | used: 92000\norder_tracking attempts: ['ALLOW', 'ALLOW', 'ALLOW', 'DENY', 'DENY'] | unknown tool: DENY\nthe second token request is refused because it would pass the limit, the fourth and fifth tool calls are refused at a cap of three, and an unknown tool is refused by default, which is the fail-closed choice\n\n--- 4. Genuinely running: a ten-minute velocity limit of 50 dollars ---\n0 12 ALLOW\n120 14 ALLOW\n240 18 ALLOW\n360 10 DENY\nspend was 12, 26 and 44 dollars inside the window and the fourth request of 10 would make 54, so it was denied before it was spent; this is prevention, and checking the total after spending would only be monitoring\n\n--- 5. Genuinely computing: context growth is quadratic, T = n*b + d*n*(n-1)/2 ---\n 10 turns: loop     65000 | formula     65000 | equal True\n 50 turns: loop   1325000 | formula   1325000 | equal True\n100 turns: loop   5150000 | formula   5150000 | equal True\nwith a 2000 token base and 1000 tokens added per turn, the total input tokens grow with the square of the number of turns, which is why a long agent gets expensive without any single bad request\n\n--- 6. Genuinely computing: model routing ---\nall premium: 80.00 | 800 small and 200 premium: 17.600 | saving: 62.400 | 78%\nthe routed mix costs 17.60 against 80 and saves 78 percent, but the per-request costs are the lesson hypothetical figures and the calculation ignores any retries the cheaper model would need"
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
    "headingEn": "Genuinely Found: Pricing and the Corrected Figure",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಬೆಲೆ ಮತ್ತು ಸರಿಪಡಿಸಿದ ಅಂಕಿ",
    "bodyEn": "Section 1: one request cost 0.036 dollars and 10000 of them cost 360. Section 2: the model cost was 0.01425, the action 6.01425 and seven actions 42.09975; four-place rounding gave 6.0142 and 42.0998 with Python default half-even rounding, while half-up rounding gives 6.0143, and the lesson first printed 6.0183 and 42.1270.",
    "bodyKn": "ವಿಭಾಗ 1: ಒಂದು ವಿನಂತಿಗೆ 0.036 ಡಾಲರ್ ಮತ್ತು 10000 ಕ್ಕೆ 360. ವಿಭಾಗ 2: ಮಾದರಿ ವೆಚ್ಚ 0.01425, ಕ್ರಿಯೆ 6.01425 ಮತ್ತು ಏಳು ಕ್ರಿಯೆಗಳು 42.09975; ನಾಲ್ಕು-ಸ್ಥಾನ ದುಂಡಾಗಿಸುವಿಕೆ Python ಡೀಫಾಲ್ಟ್ half-even ನೊಂದಿಗೆ 6.0142 ಮತ್ತು 42.0998 ನೀಡಿತು, half-up 6.0143 ನೀಡುತ್ತದೆ, ಮತ್ತು lesson ಮೊದಲು 6.0183 ಮತ್ತು 42.1270 ಮುದ್ರಿಸಿತ್ತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Governors, Growth and Routing",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ನಿಯಂತ್ರಕಗಳು, ಬೆಳವಣಿಗೆ ಮತ್ತು Routing",
    "bodyEn": "Section 3: a token budget of 100000 accepted 92000 and refused 12000, and a tool cap of 3 gave ALLOW three times then DENY twice, with an unknown tool denied. Section 4: velocity requests of 12, 14, 18 and 10 dollars at 0, 120, 240 and 360 seconds gave ALLOW, ALLOW, ALLOW, DENY. Section 5: loop and formula agreed at 65000, 1325000 and 5150000 tokens for 10, 50 and 100 turns. Section 6: routing cost 17.60 against 80, a 78 percent saving.",
    "bodyKn": "ವಿಭಾಗ 3: 100000 token ಬಜೆಟ್ 92000 ಸ್ವೀಕರಿಸಿ 12000 ನಿರಾಕರಿಸಿತು, ಮತ್ತು 3 tool ಮಿತಿ ಮೂರು ಬಾರಿ ALLOW ನಂತರ ಎರಡು ಬಾರಿ DENY ನೀಡಿತು, ಅಪರಿಚಿತ tool ನಿರಾಕರಿಸಲ್ಪಟ್ಟಿತು. ವಿಭಾಗ 4: 0, 120, 240 ಮತ್ತು 360 ಸೆಕೆಂಡ್‌ಗಳಲ್ಲಿ 12, 14, 18 ಮತ್ತು 10 ಡಾಲರ್ ವೇಗ ವಿನಂತಿಗಳು ALLOW, ALLOW, ALLOW, DENY ನೀಡಿದವು. ವಿಭಾಗ 5: 10, 50 ಮತ್ತು 100 ಟರ್ನ್‌ಗಳಿಗೆ ಲೂಪ್ ಮತ್ತು ಸೂತ್ರ 65000, 1325000 ಮತ್ತು 5150000 tokens ನಲ್ಲಿ ಒಪ್ಪಿದವು. ವಿಭಾಗ 6: routing 80 ವಿರುದ್ಧ 17.60, 78 ಶೇಕಡಾ ಉಳಿತಾಯ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A limit that checks before the spend stops a loop, a limit that reports afterwards only records it, and running the arithmetic is how you catch an expected output that was typed by hand.",
    "bodyKn": "ಖರ್ಚಿಗೆ ಮೊದಲು ಪರಿಶೀಲಿಸುವ ಮಿತಿ ಲೂಪ್ ನಿಲ್ಲಿಸುತ್ತದೆ, ನಂತರ ವರದಿ ಮಾಡುವ ಮಿತಿ ಅದನ್ನು ದಾಖಲಿಸುತ್ತದೆ ಮಾತ್ರ, ಮತ್ತು ಅಂಕಗಣಿತ ಓಡಿಸುವುದೇ ಕೈಯಿಂದ ಬರೆದ ನಿರೀಕ್ಷಿತ ಔಟ್‌ಪುಟ್ ಹಿಡಿಯುವ ವಿಧಾನ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"the expected output in a lesson is the truth.\" The lesson printed 6.0183 per action and the exact figure is 6.01425.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"lesson ನ ನಿರೀಕ್ಷಿತ ಔಟ್‌ಪುಟ್ ಸತ್ಯ.\" lesson ಪ್ರತಿ ಕ್ರಿಯೆಗೆ 6.0183 ಮುದ್ರಿಸಿತು ಮತ್ತು ನಿಖರ ಅಂಕಿ 6.01425."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Decimal: exact decimal arithmetic. Cached tokens: input billed at a lower rate. Velocity limit: a cap on spend inside a rolling window. Fail closed: refuse what is not listed.",
    "bodyKn": "Decimal: ನಿಖರ ದಶಮಾಂಶ ಅಂಕಗಣಿತ. Cached tokens: ಕಡಿಮೆ ದರದಲ್ಲಿ ಬಿಲ್ ಆಗುವ ಇನ್‌ಪುಟ್. Velocity limit: ರೋಲಿಂಗ್ ವಿಂಡೋದೊಳಗೆ ಖರ್ಚಿನ ಮಿತಿ. Fail closed: ಪಟ್ಟಿ ಮಾಡದ್ದನ್ನು ನಿರಾಕರಿಸಿ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) A 0.036 dollar request costs 360 dollars ten thousand times. 2) The action cost is 6.01425, not 6.0183. 3) Rounding rules change the fourth decimal. 4) The velocity limit denied the fourth request before it was spent. 5) Input tokens grow with the square of the turns.",
    "bodyKn": "1) 0.036 ಡಾಲರ್ ವಿನಂತಿ ಹತ್ತು ಸಾವಿರ ಬಾರಿ 360 ಡಾಲರ್ ವೆಚ್ಚ. 2) ಕ್ರಿಯೆ ವೆಚ್ಚ 6.01425, 6.0183 ಅಲ್ಲ. 3) ದುಂಡಾಗಿಸುವ ನಿಯಮ ನಾಲ್ಕನೇ ದಶಮಾಂಶ ಬದಲಿಸುತ್ತದೆ. 4) ವೇಗ ಮಿತಿ ನಾಲ್ಕನೇ ವಿನಂತಿಯನ್ನು ಖರ್ಚಾಗುವ ಮೊದಲು ನಿರಾಕರಿಸಿತು. 5) ಇನ್‌ಪುಟ್ tokens ಟರ್ನ್‌ಗಳ ವರ್ಗದಂತೆ ಬೆಳೆಯುತ್ತವೆ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What was the exact cost of one simulator action?",
      "qKn": "ಒಂದು simulator ಕ್ರಿಯೆಯ ನಿಖರ ವೆಚ್ಚ ಎಷ್ಟು?",
      "opts": [
       "6.01425",
       "6.0183",
       "6.00",
       "0.01425"
      ],
      "optsKn": [
       "6.01425",
       "6.0183",
       "6.00",
       "0.01425"
      ],
      "correct": 0
     },
     {
      "q": "What did seven simulator actions cost exactly?",
      "qKn": "ಏಳು simulator ಕ್ರಿಯೆಗಳ ನಿಖರ ವೆಚ್ಚ ಎಷ್ಟು?",
      "opts": [
       "42.09975",
       "42.1270",
       "42.00",
       "6.01425"
      ],
      "optsKn": [
       "42.09975",
       "42.1270",
       "42.00",
       "6.01425"
      ],
      "correct": 0
     },
     {
      "q": "Which request did the velocity limit deny?",
      "qKn": "ವೇಗ ಮಿತಿ ಯಾವ ವಿನಂತಿ ನಿರಾಕರಿಸಿತು?",
      "opts": [
       "The fourth, 10 dollars at 360 seconds",
       "The first",
       "The second",
       "None"
      ],
      "optsKn": [
       "ನಾಲ್ಕನೆಯದು, 360 ಸೆಕೆಂಡ್‌ನಲ್ಲಿ 10 ಡಾಲರ್",
       "ಮೊದಲನೆಯದು",
       "ಎರಡನೆಯದು",
       "ಯಾವುದೂ ಇಲ್ಲ"
      ],
      "correct": 0
     },
     {
      "q": "How many input tokens did 100 turns total with a 2000 base and 1000 added per turn?",
      "qKn": "2000 ಆಧಾರ ಮತ್ತು ಪ್ರತಿ ಟರ್ನ್‌ಗೆ 1000 ಸೇರಿಸಿ 100 ಟರ್ನ್‌ಗಳು ಒಟ್ಟು ಎಷ್ಟು ಇನ್‌ಪುಟ್ tokens?",
      "opts": [
       "5150000",
       "300000",
       "1325000",
       "65000"
      ],
      "optsKn": [
       "5150000",
       "300000",
       "1325000",
       "65000"
      ],
      "correct": 0
     },
     {
      "q": "Why does the printed fourth decimal depend on the rounding rule?",
      "qKn": "ಮುದ್ರಿತ ನಾಲ್ಕನೇ ದಶಮಾಂಶ ದುಂಡಾಗಿಸುವ ನಿಯಮವನ್ನು ಏಕೆ ಅವಲಂಬಿಸುತ್ತದೆ?",
      "opts": [
       "The exact value ends in exactly 5, so half-even and half-up differ",
       "Decimal is inexact",
       "The prices changed",
       "The loop was wrong"
      ],
      "optsKn": [
       "ನಿಖರ ಮೌಲ್ಯ ನಿಖರವಾಗಿ 5 ರಲ್ಲಿ ಕೊನೆಗೊಳ್ಳುತ್ತದೆ, ಆದ್ದರಿಂದ half-even ಮತ್ತು half-up ಭಿನ್ನ",
       "Decimal ನಿಖರವಲ್ಲ",
       "ಬೆಲೆಗಳು ಬದಲಾದವು",
       "ಲೂಪ್ ತಪ್ಪಾಗಿತ್ತು"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
