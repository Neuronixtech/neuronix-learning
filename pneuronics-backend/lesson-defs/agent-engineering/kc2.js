module.exports = {
 "phaseId": "6a369d6366020ed05b32158c",
 "moduleId": "6a369d6466020ed05b3215b6",
 "order": 1,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Kill Switches, Circuit Breakers, Canary Tokens (Part 2 of 3) — The Safety Gateway",
 "titleKn": "Kill Switches, Circuit Breakers, Canary Tokens (ಭಾಗ 2 / 3) — ಸುರಕ್ಷತಾ Gateway",
 "desc": "Combine the detectors behind one gateway, reproduce the eager-evaluation bug and test recovery.",
 "descKn": "ಪತ್ತೆಕಾರಕಗಳನ್ನು ಒಂದು gateway ಹಿಂದೆ ಸೇರಿಸಿ, eager-ಮೌಲ್ಯಮಾಪನ ದೋಷ ಪುನರುತ್ಪಾದಿಸಿ ಮತ್ತು ಚೇತರಿಕೆ ಪರೀಕ್ಷಿಸಿ.",
 "objectives": [
  "Route requests through one gateway.",
  "Check in a fixed order.",
  "Compare eager and sequential.",
  "Try half-open recovery.",
  "Run unit tests."
 ],
 "objectivesKn": [
  "ವಿನಂತಿಗಳನ್ನು ಒಂದು gateway ಮೂಲಕ ಕಳುಹಿಸಿ.",
  "ನಿಗದಿತ ಕ್ರಮದಲ್ಲಿ ಪರಿಶೀಲಿಸಿ.",
  "eager ಮತ್ತು ಕ್ರಮಬದ್ಧ ಹೋಲಿಸಿ.",
  "half-open ಚೇತರಿಕೆ ಪ್ರಯತ್ನಿಸಿ.",
  "unit ಪರೀಕ್ಷೆ ಓಡಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Kill Switches, Circuit Breakers, Canary Tokens (Part 2 of 3)",
    "textKn": "Kill Switches, Circuit Breakers, Canary Tokens (ಭಾಗ 2 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 2 of 3: an integrated safety gateway that checks the kill switch, a hard policy, the canary and the breaker in order, a ten-step trajectory, the eager-evaluation bug the lesson warned about, half-open recovery and seven unit tests that are run. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind kill switches, circuit breakers and canary tokens (an externally owned stop, a repetition breaker, canary monitoring, an ordered safety gateway, fail-closed control, EWMA and CUSUM, a shared-counter race, a hard policy and incident recovery), not the real software, and the control store, the policy and the incident token live in the same process, the executor only records requests, the rates are invented and nothing is sent, deleted or run for real, so no real LLM behaviour is measured. The original code/main.py was not supplied, so the labs are our own implementation. The lesson Redis, signed-configuration, eBPF and Cilium material, including its latency remarks, is conceptual and was not run here because it needs third-party services; the labs cover the standard-library parts. The lesson Part 2 warned that its first gateway version had a bug, and the lab reproduces that bug and its fix. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 2ನೆಯದು: kill switch, ಕಠಿಣ ನೀತಿ, canary ಮತ್ತು breaker ಅನ್ನು ಕ್ರಮವಾಗಿ ಪರಿಶೀಲಿಸುವ ಸಂಯೋಜಿತ ಸುರಕ್ಷತಾ gateway, ಹತ್ತು-ಹಂತದ trajectory, lesson ಎಚ್ಚರಿಸಿದ eager-ಮೌಲ್ಯಮಾಪನ ದೋಷ, half-open ಚೇತರಿಕೆ ಮತ್ತು ಓಡಿಸಿದ ಏಳು unit ಪರೀಕ್ಷೆಗಳು. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು kill switches, circuit breakers ಮತ್ತು canary tokens (ಹೊರಗಿನ ಒಡೆತನದ ನಿಲುಗಡೆ, ಪುನರಾವರ್ತನೆ breaker, canary ಮೇಲ್ವಿಚಾರಣೆ, ಕ್ರಮಬದ್ಧ ಸುರಕ್ಷತಾ gateway, fail-closed ನಿಯಂತ್ರಣ, EWMA ಮತ್ತು CUSUM, ಹಂಚಿದ ಕೌಂಟರ್ ಓಟ, ಕಠಿಣ ನೀತಿ ಮತ್ತು ಘಟನೆ ಚೇತರಿಕೆ) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ನಿಯಂತ್ರಣ ಸಂಗ್ರಹ, ನೀತಿ ಮತ್ತು ಘಟನೆ token ಅದೇ ಪ್ರಕ್ರಿಯೆಯಲ್ಲಿವೆ, executor ವಿನಂತಿಗಳನ್ನು ದಾಖಲಿಸುತ್ತದೆ ಮಾತ್ರ, ದರಗಳು ಕಲ್ಪಿತ ಮತ್ತು ನಿಜವಾಗಿ ಏನೂ ಕಳುಹಿಸಲ್ಪಡುವುದಿಲ್ಲ, ಅಳಿಸಲ್ಪಡುವುದಿಲ್ಲ ಅಥವಾ ಓಡುವುದಿಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ code/main.py ಒದಗಿಸಿರಲಿಲ್ಲ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ನಮ್ಮದೇ ಅನುಷ್ಠಾನ. lesson ನ Redis, ಸಹಿ ಮಾಡಿದ ಸಂರಚನೆ, eBPF ಮತ್ತು Cilium ವಿಷಯ, ಅದರ ವಿಳಂಬ ಟಿಪ್ಪಣಿಗಳು ಸೇರಿ, ಪರಿಕಲ್ಪನಾತ್ಮಕ ಮತ್ತು ಇಲ್ಲಿ ಓಡಿಸಲಾಗಿಲ್ಲ ಏಕೆಂದರೆ ಅದಕ್ಕೆ ಮೂರನೇ ಪಕ್ಷದ ಸೇವೆಗಳು ಬೇಕು; ಲ್ಯಾಬ್‌ಗಳು standard-library ಭಾಗಗಳನ್ನು ಒಳಗೊಳ್ಳುತ್ತವೆ. lesson ನ ಭಾಗ 2 ಅದರ ಮೊದಲ gateway ಆವೃತ್ತಿಯಲ್ಲಿ ದೋಷವಿತ್ತು ಎಂದು ಎಚ್ಚರಿಸಿತು, ಮತ್ತು ಲ್ಯಾಬ್ ಆ ದೋಷ ಮತ್ತು ಅದರ ಪರಿಹಾರವನ್ನು ಪುನರುತ್ಪಾದಿಸುತ್ತದೆ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Order of Checks Is Part of the Design",
    "textKn": "ಪರಿಶೀಲನೆಗಳ ಕ್ರಮ ವಿನ್ಯಾಸದ ಭಾಗ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "One Gateway, Seven Tests",
    "headingKn": "ಒಂದು Gateway, ಏಳು ಪರೀಕ್ಷೆಗಳು",
    "bodyEn": "This part joins the three detectors and a hard policy behind one gateway that the agent must go through. The agent submits a structured request, the gateway evaluates the kill switch, the hard policy, the canary monitor and the breaker in that order and stops at the first denial, and only a fully approved request reaches an executor that records it. The lesson warned that building the list of decisions eagerly evaluates every detector, and the lab runs both versions and compares what each leaves behind.",
    "bodyKn": "ಈ ಭಾಗ ಮೂರು ಪತ್ತೆಕಾರಕಗಳು ಮತ್ತು ಕಠಿಣ ನೀತಿಯನ್ನು agent ಹಾದುಹೋಗಲೇಬೇಕಾದ ಒಂದು gateway ಹಿಂದೆ ಸೇರಿಸುತ್ತದೆ. agent ರಚನಾತ್ಮಕ ವಿನಂತಿ ಸಲ್ಲಿಸುತ್ತದೆ, gateway kill switch, ಕಠಿಣ ನೀತಿ, canary ಮಾನಿಟರ್ ಮತ್ತು breaker ಅನ್ನು ಆ ಕ್ರಮದಲ್ಲಿ ಮೌಲ್ಯಮಾಪನ ಮಾಡಿ ಮೊದಲ ನಿರಾಕರಣೆಯಲ್ಲಿ ನಿಲ್ಲುತ್ತದೆ, ಮತ್ತು ಸಂಪೂರ್ಣ ಅನುಮೋದಿತ ವಿನಂತಿ ಮಾತ್ರ ಅದನ್ನು ದಾಖಲಿಸುವ executor ತಲುಪುತ್ತದೆ. ನಿರ್ಧಾರಗಳ ಪಟ್ಟಿಯನ್ನು eager ಆಗಿ ನಿರ್ಮಿಸುವುದು ಪ್ರತಿ ಪತ್ತೆಕಾರಕವನ್ನು ಮೌಲ್ಯಮಾಪನ ಮಾಡುತ್ತದೆ ಎಂದು lesson ಎಚ್ಚರಿಸಿತು, ಮತ್ತು ಲ್ಯಾಬ್ ಎರಡೂ ಆವೃತ್ತಿಗಳನ್ನು ಓಡಿಸಿ ಪ್ರತಿಯೊಂದು ಏನು ಬಿಡುತ್ತದೆ ಹೋಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "The Safety Gateway",
    "headingKn": "ಸುರಕ್ಷತಾ Gateway",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">a denied request must change no detector state</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">request</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">from the agent</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">gateway</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">ordered checks</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">first denial</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">stops the rest</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">executor</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">only if all pass</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">a denied request must change no detector state</text></svg>",
    "captionEn": "Checks run in order and the first denial stops the chain.",
    "captionKn": "ಪರಿಶೀಲನೆಗಳು ಕ್ರಮವಾಗಿ ಓಡುತ್ತವೆ ಮತ್ತು ಮೊದಲ ನಿರಾಕರಣೆ ಸರಪಳಿ ನಿಲ್ಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "The ten-step trajectory",
    "headingKn": "ಹತ್ತು-ಹಂತದ trajectory",
    "headers": [
     "Step",
     "Expected result"
    ],
    "rows": [
     [
      "1 and 2",
      "lookup_order and update_ticket are allowed"
     ],
     [
      "3 to 6",
      "the first four delete_record calls are allowed"
     ],
     [
      "7",
      "the fifth delete_record call is blocked by the breaker"
     ],
     [
      "8",
      "read of the decoy file is blocked with an alert"
     ],
     [
      "9 and 10",
      "operator disables the agent, send_email is blocked"
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
    "filename": "kc_2.py",
    "headingEn": "Request, detectors, executor and gateway",
    "headingKn": "ವಿನಂತಿ, ಪತ್ತೆಕಾರಕಗಳು, executor ಮತ್ತು gateway",
    "descEn": "SafetyGateway.handle runs the four checks one at a time and stops at the first denial, handle_eager is the buggy version that builds all decisions first, and SimulatedExecutor only records what reaches it.",
    "descKn": "SafetyGateway.handle ನಾಲ್ಕು ಪರಿಶೀಲನೆಗಳನ್ನು ಒಂದೊಂದಾಗಿ ಓಡಿಸಿ ಮೊದಲ ನಿರಾಕರಣೆಯಲ್ಲಿ ನಿಲ್ಲುತ್ತದೆ, handle_eager ಎಲ್ಲಾ ನಿರ್ಧಾರಗಳನ್ನು ಮೊದಲು ನಿರ್ಮಿಸುವ ದೋಷಯುಕ್ತ ಆವೃತ್ತಿ, ಮತ್ತು SimulatedExecutor ತಲುಪಿದ್ದನ್ನು ದಾಖಲಿಸುತ್ತದೆ ಮಾತ್ರ.",
    "code": "@dataclass(frozen=True)\r\nclass ActionRequest:\r\n    tool: str\r\n    arguments: dict = field(default_factory=dict)\r\n\r\n\r\n@dataclass(frozen=True)\r\nclass Decision:\r\n    allowed: bool\r\n    detector: str\r\n    reason: str\r\n\r\n\r\nclass ExternalControlStore:\r\n    def __init__(self):\r\n        self._enabled = True\r\n\r\n    def read_enabled(self):\r\n        return self._enabled\r\n\r\n    def operator_disable(self):\r\n        self._enabled = False\r\n\r\n\r\nclass BreakerState(Enum):\r\n    CLOSED = \"CLOSED\"\r\n    OPEN = \"OPEN\"\r\n    HALF_OPEN = \"HALF_OPEN\"\r\n\r\n\r\nclass KillSwitch:\r\n    def __init__(self, store):\r\n        self.store = store\r\n\r\n    def evaluate(self):\r\n        if not self.store.read_enabled():\r\n            return Decision(False, \"KILL_SWITCH\", \"Agent disabled by operator\")\r\n        return Decision(True, \"KILL_SWITCH\", \"Enabled\")\r\n\r\n\r\nclass HardPolicy:\r\n    forbidden = frozenset({\"delete_production_database\", \"disable_security_monitor\"})\r\n\r\n    def evaluate(self, req):\r\n        if req.tool in self.forbidden:\r\n            return Decision(False, \"HARD_POLICY\", \"Forbidden tool\")\r\n        return Decision(True, \"HARD_POLICY\", \"Allowed\")\r\n\r\n\r\nclass RepetitionCircuitBreaker:\r\n    def __init__(self, threshold=5):\r\n        self.threshold, self.prev, self.count, self.state = threshold, None, 0, BreakerState.CLOSED\r\n\r\n    def evaluate(self, req):\r\n        if self.state == BreakerState.OPEN:\r\n            return Decision(False, \"CIRCUIT_BREAKER\", \"Circuit already open\")\r\n        sig = (req.tool, json.dumps(req.arguments, sort_keys=True, separators=(\",\", \":\")))\r\n        self.count = self.count + 1 if sig == self.prev else 1\r\n        self.prev = sig\r\n        if self.state == BreakerState.HALF_OPEN:\r\n            self.state = BreakerState.CLOSED\r\n            return Decision(True, \"CIRCUIT_BREAKER\", \"Probe passed\")\r\n        if self.count >= self.threshold:\r\n            self.state = BreakerState.OPEN\r\n            return Decision(False, \"CIRCUIT_BREAKER\", \"Threshold reached\")\r\n        return Decision(True, \"CIRCUIT_BREAKER\", \"ok\")\r\n\r\n    def enter_half_open(self):\r\n        if self.state == BreakerState.OPEN:\r\n            self.state, self.count, self.prev = BreakerState.HALF_OPEN, 0, None\r\n\r\n\r\nclass CanaryMonitor:\r\n    def __init__(self, paths):\r\n        self.paths, self.alerts = set(paths), []\r\n\r\n    def evaluate(self, req):\r\n        if req.tool != \"read_file\":\r\n            return Decision(True, \"CANARY\", \"Not a file read\")\r\n        path = req.arguments.get(\"path\")\r\n        if path in self.paths:\r\n            self.alerts.append({\"event\": \"CANARY_ACCESS\", \"path\": path, \"severity\": \"HIGH\"})\r\n            return Decision(False, \"CANARY\", \"Canary resource\")\r\n        return Decision(True, \"CANARY\", \"Not a canary\")\r\n\r\n\r\nclass SimulatedExecutor:\r\n    def __init__(self):\r\n        self.executed = []\r\n\r\n    def execute(self, req):\r\n        self.executed.append(req)\r\n        return {\"status\": \"SUCCESS\", \"tool\": req.tool}\r\n\r\n\r\nclass SafetyGateway:\r\n    def __init__(self, kill, breaker, canary, policy, executor):\r\n        self.kill, self.breaker, self.canary, self.policy, self.executor = kill, breaker, canary, policy, executor\r\n        self.audit = []\r\n\r\n    def handle(self, req):\r\n        checks = [lambda: self.kill.evaluate(), lambda: self.policy.evaluate(req), lambda: self.canary.evaluate(req), lambda: self.breaker.evaluate(req)]\r\n        for run in checks:\r\n            d = run()\r\n            if not d.allowed:\r\n                ev = {\"tool\": req.tool, \"status\": \"BLOCKED\", \"detector\": d.detector, \"reason\": d.reason}\r\n                self.audit.append(ev)\r\n                return ev\r\n        self.executor.execute(req)\r\n        ev = {\"tool\": req.tool, \"status\": \"EXECUTED\", \"detector\": \"GATEWAY\", \"reason\": \"All checks passed\"}\r\n        self.audit.append(ev)\r\n        return ev\r\n\r\n    def handle_eager(self, req):\r\n        \"\"\"The buggy version from the lesson: every detector runs before any decision is examined.\"\"\"\r\n        decisions = [self.kill.evaluate(), self.policy.evaluate(req), self.canary.evaluate(req), self.breaker.evaluate(req)]\r\n        for d in decisions:\r\n            if not d.allowed:\r\n                return {\"tool\": req.tool, \"status\": \"BLOCKED\", \"detector\": d.detector}\r\n        self.executor.execute(req)\r\n        return {\"tool\": req.tool, \"status\": \"EXECUTED\", \"detector\": \"GATEWAY\"}"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "kc_2.py",
    "headingEn": "main(): experiments",
    "headingKn": "main(): ಪ್ರಯೋಗಗಳು",
    "descEn": "main() runs the trajectory, compares the eager and sequential gateways, tries half-open recovery and runs the seven unit tests.",
    "descKn": "main() trajectory ಓಡಿಸಿ, eager ಮತ್ತು ಕ್ರಮಬದ್ಧ gateway ಹೋಲಿಸಿ, half-open ಚೇತರಿಕೆ ಪ್ರಯತ್ನಿಸಿ ಮತ್ತು ಏಳು unit ಪರೀಕ್ಷೆಗಳನ್ನು ಓಡಿಸುತ್ತದೆ.",
    "code": "def main():\r\n    section(\"1. Genuinely running: the ten-step trajectory through the corrected gateway\")\r\n    gw, store = make_gateway()\r\n    for i, req in enumerate(TRAJECTORY, 1):\r\n        ev = gw.handle(req)\r\n        print(f\"{i}. {req.tool}: {ev['status']} [{ev['detector']}]\")\r\n    store.operator_disable()\r\n    print(\"operator disables the agent\")\r\n    print(\"send_email:\", gw.handle(ActionRequest(\"send_email\", {\"to\": \"customer@example.com\"})))\r\n    print(f\"executed {len(gw.executor.executed)} | canary alerts {len(gw.canary.alerts)} | breaker {gw.breaker.state.value} | kill switch enabled {store.read_enabled()}\")\r\n    print(\"six actions executed, the fifth repeated delete was blocked by the breaker, the decoy read was blocked with an alert and the email after the operator action was blocked by the kill switch, which matches the lesson expected trace; the first four deletes ran, so a repetition breaker limits a loop but does not undo what it already did\")\r\n\r\n    section(\"2. Genuinely running: the eager gateway bug\")\r\n    gw2, store2 = make_gateway()\r\n    store2.operator_disable()\r\n    for _ in range(3):\r\n        gw2.handle_eager(ActionRequest(\"delete_record\", {\"record_id\": 42}))\r\n    gw2.handle_eager(ActionRequest(\"read_file\", {\"path\": \"workspace/.decoy/token.txt\"}))\r\n    gw3, store3 = make_gateway()\r\n    store3.operator_disable()\r\n    for _ in range(3):\r\n        gw3.handle(ActionRequest(\"delete_record\", {\"record_id\": 42}))\r\n    gw3.handle(ActionRequest(\"read_file\", {\"path\": \"workspace/.decoy/token.txt\"}))\r\n    print(f\"eager: breaker count {gw2.breaker.count}, canary alerts {len(gw2.canary.alerts)} | sequential: breaker count {gw3.breaker.count}, canary alerts {len(gw3.canary.alerts)}\")\r\n    print(\"when the agent is already disabled the eager version still updates the breaker, whose last-seen request and count are changed (count 1 after the final request against 0), and records a canary alert, because every detector runs before any decision is read, while the sequential version stops at the kill switch and leaves both untouched; the lesson flagged this mistake and the lab measures its effect\")\r\n\r\n    section(\"3. Genuinely running: half-open recovery\")\r\n    b = RepetitionCircuitBreaker(3)\r\n    req = ActionRequest(\"update_record\", {\"record_id\": 42})\r\n    print(\"three identical requests:\", [b.evaluate(req).allowed for _ in range(3)], \"| state\", b.state.value)\r\n    b.enter_half_open()\r\n    print(\"after enter_half_open:\", b.state.value)\r\n    print(\"probe of a different request:\", b.evaluate(ActionRequest(\"update_record\", {\"record_id\": 43})).allowed, \"| state\", b.state.value)\r\n    print(\"the state moves closed, open, half-open and closed again after a successful probe; the lab has no cool-down timer and does not limit concurrent probes, and for a destructive tool a probe could itself do harm\")\r\n\r\n    section(\"4. Genuinely running: the seven unit tests\")\r\n    stream = io.StringIO()\r\n    res = unittest.TextTestRunner(stream=stream, verbosity=0).run(unittest.defaultTestLoader.loadTestsFromTestCase(GatewayTests))\r\n    print(f\"ran {res.testsRun} tests | failures {len(res.failures)} | errors {len(res.errors)} | passed {res.wasSuccessful()}\")\r\n    print(\"the tests check a legitimate action, the fifth-call block, the canary alert, the kill switch, the hard policy and the two no-side-effect-after-shutdown properties; they test this teaching gateway and say nothing about the repository original\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: the ten-step trajectory through the corrected gateway ---\n1. lookup_order: EXECUTED [GATEWAY]\n2. update_ticket: EXECUTED [GATEWAY]\n3. delete_record: EXECUTED [GATEWAY]\n4. delete_record: EXECUTED [GATEWAY]\n5. delete_record: EXECUTED [GATEWAY]\n6. delete_record: EXECUTED [GATEWAY]\n7. delete_record: BLOCKED [CIRCUIT_BREAKER]\n8. read_file: BLOCKED [CANARY]\noperator disables the agent\nsend_email: {'tool': 'send_email', 'status': 'BLOCKED', 'detector': 'KILL_SWITCH', 'reason': 'Agent disabled by operator'}\nexecuted 6 | canary alerts 1 | breaker OPEN | kill switch enabled False\nsix actions executed, the fifth repeated delete was blocked by the breaker, the decoy read was blocked with an alert and the email after the operator action was blocked by the kill switch, which matches the lesson expected trace; the first four deletes ran, so a repetition breaker limits a loop but does not undo what it already did\n\n--- 2. Genuinely running: the eager gateway bug ---\neager: breaker count 1, canary alerts 1 | sequential: breaker count 0, canary alerts 0\nwhen the agent is already disabled the eager version still updates the breaker, whose last-seen request and count are changed (count 1 after the final request against 0), and records a canary alert, because every detector runs before any decision is read, while the sequential version stops at the kill switch and leaves both untouched; the lesson flagged this mistake and the lab measures its effect\n\n--- 3. Genuinely running: half-open recovery ---\nthree identical requests: [True, True, False] | state OPEN\nafter enter_half_open: HALF_OPEN\nprobe of a different request: True | state CLOSED\nthe state moves closed, open, half-open and closed again after a successful probe; the lab has no cool-down timer and does not limit concurrent probes, and for a destructive tool a probe could itself do harm\n\n--- 4. Genuinely running: the seven unit tests ---\nran 7 tests | failures 0 | errors 0 | passed True\nthe tests check a legitimate action, the fifth-call block, the canary alert, the kill switch, the hard policy and the two no-side-effect-after-shutdown properties; they test this teaching gateway and say nothing about the repository original"
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
    "headingEn": "Genuinely Found: The Trajectory and the Bug",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Trajectory ಮತ್ತು ದೋಷ",
    "bodyEn": "Section 1: steps 1 to 6 were executed, step 7 was blocked by CIRCUIT_BREAKER, step 8 by CANARY, and after the operator disabled the agent send_email was blocked by KILL_SWITCH, leaving 6 executed, 1 canary alert, the breaker OPEN and the switch off. Section 2: after the agent was disabled the eager gateway left breaker count 1 and 1 canary alert, while the sequential gateway left breaker count 0 and 0 alerts.",
    "bodyKn": "ವಿಭಾಗ 1: ಹಂತ 1 ರಿಂದ 6 ಕಾರ್ಯಗತವಾದವು, ಹಂತ 7 CIRCUIT_BREAKER ನಿಂದ, ಹಂತ 8 CANARY ನಿಂದ ನಿರ್ಬಂಧಿಸಲ್ಪಟ್ಟವು, ಮತ್ತು ಆಪರೇಟರ್ agent ನಿಷ್ಕ್ರಿಯಗೊಳಿಸಿದ ನಂತರ send_email KILL_SWITCH ನಿಂದ ನಿರ್ಬಂಧಿಸಲ್ಪಟ್ಟಿತು, 6 ಕಾರ್ಯಗತ, 1 canary ಎಚ್ಚರಿಕೆ, breaker OPEN ಮತ್ತು switch ಆಫ್ ಬಿಟ್ಟಿತು. ವಿಭಾಗ 2: agent ನಿಷ್ಕ್ರಿಯಗೊಂಡ ನಂತರ eager gateway breaker ಎಣಿಕೆ 1 ಮತ್ತು 1 canary ಎಚ್ಚರಿಕೆ ಬಿಟ್ಟಿತು, ಕ್ರಮಬದ್ಧ gateway breaker ಎಣಿಕೆ 0 ಮತ್ತು 0 ಎಚ್ಚರಿಕೆ ಬಿಟ್ಟಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Recovery and the Tests",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಚೇತರಿಕೆ ಮತ್ತು ಪರೀಕ್ಷೆಗಳು",
    "bodyEn": "Section 3: three identical requests were allowed, allowed and refused with the state OPEN, enter_half_open moved it to HALF_OPEN, and a probe of a different request was allowed and closed it. Section 4: the seven unit tests ran with 0 failures and 0 errors.",
    "bodyKn": "ವಿಭಾಗ 3: ಮೂರು ಒಂದೇ ವಿನಂತಿಗಳು ಅನುಮತಿ, ಅನುಮತಿ ಮತ್ತು OPEN ಸ್ಥಿತಿಯೊಂದಿಗೆ ನಿರಾಕರಣೆ ಪಡೆದವು, enter_half_open ಅದನ್ನು HALF_OPEN ಗೆ ಸರಿಸಿತು, ಮತ್ತು ಬೇರೆ ವಿನಂತಿಯ probe ಅನುಮತಿಸಲ್ಪಟ್ಟು ಅದನ್ನು ಮುಚ್ಚಿತು. ವಿಭಾಗ 4: ಏಳು unit ಪರೀಕ್ಷೆಗಳು 0 ವೈಫಲ್ಯ ಮತ್ತು 0 ದೋಷದೊಂದಿಗೆ ಓಡಿದವು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A gateway that evaluates every detector before reading any decision lets denied requests change detector state, so the order of checks and stopping at the first denial are part of what makes it safe.",
    "bodyKn": "ಯಾವುದೇ ನಿರ್ಧಾರ ಓದುವ ಮೊದಲು ಪ್ರತಿ ಪತ್ತೆಕಾರಕ ಮೌಲ್ಯಮಾಪನ ಮಾಡುವ gateway ನಿರಾಕರಿಸಿದ ವಿನಂತಿಗಳು ಪತ್ತೆಕಾರಕ ಸ್ಥಿತಿ ಬದಲಿಸಲು ಬಿಡುತ್ತದೆ, ಆದ್ದರಿಂದ ಪರಿಶೀಲನೆಗಳ ಕ್ರಮ ಮತ್ತು ಮೊದಲ ನಿರಾಕರಣೆಯಲ್ಲಿ ನಿಲ್ಲುವುದು ಅದನ್ನು ಸುರಕ್ಷಿತ ಮಾಡುವುದರ ಭಾಗ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"the breaker stops all harm from a loop.\" The first four deletes ran before the fifth was blocked.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"breaker ಲೂಪ್‌ನ ಎಲ್ಲಾ ಹಾನಿ ನಿಲ್ಲಿಸುತ್ತದೆ.\" ಐದನೆಯದು ನಿರ್ಬಂಧಿಸುವ ಮೊದಲು ಮೊದಲ ನಾಲ್ಕು ಅಳಿಸುವಿಕೆಗಳು ಓಡಿದ್ದವು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Gateway: the one path to the executor. Eager evaluation: computing every check before reading any result. Half-open: a state that allows a probe. Executor: the part that performs the action.",
    "bodyKn": "Gateway: executor ಗೆ ಏಕೈಕ ಮಾರ್ಗ. Eager evaluation: ಯಾವುದೇ ಫಲಿತಾಂಶ ಓದುವ ಮೊದಲು ಪ್ರತಿ ಪರಿಶೀಲನೆ ಲೆಕ್ಕ ಹಾಕುವುದು. Half-open: probe ಅನುಮತಿಸುವ ಸ್ಥಿತಿ. Executor: ಕ್ರಿಯೆ ನಿರ್ವಹಿಸುವ ಭಾಗ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) Six actions executed and three were blocked by three different detectors. 2) The eager gateway changed breaker and canary state after shutdown. 3) The sequential gateway changed nothing. 4) Half-open allowed a probe and closed. 5) Seven tests passed.",
    "bodyKn": "1) ಆರು ಕ್ರಿಯೆಗಳು ಕಾರ್ಯಗತವಾದವು ಮತ್ತು ಮೂರು ಮೂರು ಬೇರೆ ಪತ್ತೆಕಾರಕಗಳಿಂದ ನಿರ್ಬಂಧಿಸಲ್ಪಟ್ಟವು. 2) eager gateway ನಿಲುಗಡೆಯ ನಂತರ breaker ಮತ್ತು canary ಸ್ಥಿತಿ ಬದಲಿಸಿತು. 3) ಕ್ರಮಬದ್ಧ gateway ಏನನ್ನೂ ಬದಲಿಸಲಿಲ್ಲ. 4) Half-open probe ಅನುಮತಿಸಿ ಮುಚ್ಚಿತು. 5) ಏಳು ಪರೀಕ್ಷೆಗಳು ಪಾಸ್ ಆದವು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "How many of the ten steps were executed?",
      "qKn": "ಹತ್ತು ಹಂತಗಳಲ್ಲಿ ಎಷ್ಟು ಕಾರ್ಯಗತವಾದವು?",
      "opts": [
       "6",
       "7",
       "10",
       "4"
      ],
      "optsKn": [
       "6",
       "7",
       "10",
       "4"
      ],
      "correct": 0
     },
     {
      "q": "Which detector blocked step 8, the decoy read?",
      "qKn": "ಹಂತ 8, decoy ಓದನ್ನು ಯಾವ ಪತ್ತೆಕಾರಕ ನಿರ್ಬಂಧಿಸಿತು?",
      "opts": [
       "CANARY",
       "CIRCUIT_BREAKER",
       "KILL_SWITCH",
       "HARD_POLICY"
      ],
      "optsKn": [
       "CANARY",
       "CIRCUIT_BREAKER",
       "KILL_SWITCH",
       "HARD_POLICY"
      ],
      "correct": 0
     },
     {
      "q": "After shutdown, what breaker count did the sequential gateway leave?",
      "qKn": "ನಿಲುಗಡೆಯ ನಂತರ ಕ್ರಮಬದ್ಧ gateway ಯಾವ breaker ಎಣಿಕೆ ಬಿಟ್ಟಿತು?",
      "opts": [
       "0",
       "1",
       "3",
       "5"
      ],
      "optsKn": [
       "0",
       "1",
       "3",
       "5"
      ],
      "correct": 0
     },
     {
      "q": "What state did the breaker reach after enter_half_open and a successful probe?",
      "qKn": "enter_half_open ಮತ್ತು ಯಶಸ್ವಿ probe ನಂತರ breaker ಯಾವ ಸ್ಥಿತಿ ತಲುಪಿತು?",
      "opts": [
       "CLOSED",
       "OPEN",
       "HALF_OPEN",
       "STOPPED"
      ],
      "optsKn": [
       "CLOSED",
       "OPEN",
       "HALF_OPEN",
       "STOPPED"
      ],
      "correct": 0
     },
     {
      "q": "Are the seven tests the lesson original tests?",
      "qKn": "ಈ ಏಳು ಪರೀಕ್ಷೆಗಳು lesson ನ ಮೂಲ ಪರೀಕ್ಷೆಗಳೇ?",
      "opts": [
       "No, they test the lab own teaching gateway",
       "Yes, identical",
       "Yes, from main.py",
       "They were not run"
      ],
      "optsKn": [
       "ಇಲ್ಲ, ಅವು ಲ್ಯಾಬ್‌ನ ಸ್ವಂತ ಬೋಧನಾ gateway ಪರೀಕ್ಷಿಸುತ್ತವೆ",
       "ಹೌದು, ಒಂದೇ",
       "ಹೌದು, main.py ಯಿಂದ",
       "ಅವನ್ನು ಓಡಿಸಲಿಲ್ಲ"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
