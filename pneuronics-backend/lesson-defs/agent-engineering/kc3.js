module.exports = {
 "phaseId": "6a369d6366020ed05b32158c",
 "moduleId": "6a369d6466020ed05b3215b6",
 "order": 2,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Kill Switches, Circuit Breakers, Canary Tokens (Part 3 of 3) — Outages, Drift and Recovery",
 "titleKn": "Kill Switches, Circuit Breakers, Canary Tokens (ಭಾಗ 3 / 3) — ಸ್ಥಗಿತಗಳು, Drift ಮತ್ತು ಚೇತರಿಕೆ",
 "desc": "Test fail-closed control, slow-drift detection, a counter race, a frozen policy and token-gated recovery.",
 "descKn": "fail-closed ನಿಯಂತ್ರಣ, ನಿಧಾನ-drift ಪತ್ತೆ, ಕೌಂಟರ್ ಓಟ, ಹೆಪ್ಪುಗಟ್ಟಿದ ನೀತಿ ಮತ್ತು token-ನಿಯಂತ್ರಿತ ಚೇತರಿಕೆ ಪರೀಕ್ಷಿಸಿ.",
 "objectives": [
  "Compare fail open and fail closed.",
  "Detect slow drift with CUSUM.",
  "Show a lost-update race.",
  "Test a frozen policy honestly.",
  "Gate recovery on a token."
 ],
 "objectivesKn": [
  "fail open ಮತ್ತು fail closed ಹೋಲಿಸಿ.",
  "CUSUM ನಿಂದ ನಿಧಾನ drift ಪತ್ತೆ ಮಾಡಿ.",
  "lost-update ಓಟ ತೋರಿಸಿ.",
  "ಹೆಪ್ಪುಗಟ್ಟಿದ ನೀತಿ ಪ್ರಾಮಾಣಿಕವಾಗಿ ಪರೀಕ್ಷಿಸಿ.",
  "ಚೇತರಿಕೆಯನ್ನು token ಮೇಲೆ ನಿಯಂತ್ರಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Kill Switches, Circuit Breakers, Canary Tokens (Part 3 of 3)",
    "textKn": "Kill Switches, Circuit Breakers, Canary Tokens (ಭಾಗ 3 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 3 of 3: fail-open against fail-closed during a control-store outage, EWMA, CUSUM and a hard limit on a slow drift and a sudden jump, a lost-update race in a shared counter, a constitutional policy and an incident controller with a recovery token. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind kill switches, circuit breakers and canary tokens (an externally owned stop, a repetition breaker, canary monitoring, an ordered safety gateway, fail-closed control, EWMA and CUSUM, a shared-counter race, a hard policy and incident recovery), not the real software, and the control store, the policy and the incident token live in the same process, the executor only records requests, the rates are invented and nothing is sent, deleted or run for real, so no real LLM behaviour is measured. The original code/main.py was not supplied, so the labs are our own implementation. The lesson Redis, signed-configuration, eBPF and Cilium material, including its latency remarks, is conceptual and was not run here because it needs third-party services; the labs cover the standard-library parts. The lesson Part 2 warned that its first gateway version had a bug, and the lab reproduces that bug and its fix. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 3ನೆಯದು: ನಿಯಂತ್ರಣ-ಸಂಗ್ರಹ ಸ್ಥಗಿತದಲ್ಲಿ fail-open ವಿರುದ್ಧ fail-closed, ನಿಧಾನ drift ಮತ್ತು ಹಠಾತ್ ಜಿಗಿತದ ಮೇಲೆ EWMA, CUSUM ಮತ್ತು ಕಠಿಣ ಮಿತಿ, ಹಂಚಿದ ಕೌಂಟರ್‌ನಲ್ಲಿ lost-update ಓಟ, ಸಂವಿಧಾನಾತ್ಮಕ ನೀತಿ ಮತ್ತು ಚೇತರಿಕೆ token ಇರುವ ಘಟನೆ ನಿಯಂತ್ರಕ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು kill switches, circuit breakers ಮತ್ತು canary tokens (ಹೊರಗಿನ ಒಡೆತನದ ನಿಲುಗಡೆ, ಪುನರಾವರ್ತನೆ breaker, canary ಮೇಲ್ವಿಚಾರಣೆ, ಕ್ರಮಬದ್ಧ ಸುರಕ್ಷತಾ gateway, fail-closed ನಿಯಂತ್ರಣ, EWMA ಮತ್ತು CUSUM, ಹಂಚಿದ ಕೌಂಟರ್ ಓಟ, ಕಠಿಣ ನೀತಿ ಮತ್ತು ಘಟನೆ ಚೇತರಿಕೆ) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ನಿಯಂತ್ರಣ ಸಂಗ್ರಹ, ನೀತಿ ಮತ್ತು ಘಟನೆ token ಅದೇ ಪ್ರಕ್ರಿಯೆಯಲ್ಲಿವೆ, executor ವಿನಂತಿಗಳನ್ನು ದಾಖಲಿಸುತ್ತದೆ ಮಾತ್ರ, ದರಗಳು ಕಲ್ಪಿತ ಮತ್ತು ನಿಜವಾಗಿ ಏನೂ ಕಳುಹಿಸಲ್ಪಡುವುದಿಲ್ಲ, ಅಳಿಸಲ್ಪಡುವುದಿಲ್ಲ ಅಥವಾ ಓಡುವುದಿಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ code/main.py ಒದಗಿಸಿರಲಿಲ್ಲ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ನಮ್ಮದೇ ಅನುಷ್ಠಾನ. lesson ನ Redis, ಸಹಿ ಮಾಡಿದ ಸಂರಚನೆ, eBPF ಮತ್ತು Cilium ವಿಷಯ, ಅದರ ವಿಳಂಬ ಟಿಪ್ಪಣಿಗಳು ಸೇರಿ, ಪರಿಕಲ್ಪನಾತ್ಮಕ ಮತ್ತು ಇಲ್ಲಿ ಓಡಿಸಲಾಗಿಲ್ಲ ಏಕೆಂದರೆ ಅದಕ್ಕೆ ಮೂರನೇ ಪಕ್ಷದ ಸೇವೆಗಳು ಬೇಕು; ಲ್ಯಾಬ್‌ಗಳು standard-library ಭಾಗಗಳನ್ನು ಒಳಗೊಳ್ಳುತ್ತವೆ. lesson ನ ಭಾಗ 2 ಅದರ ಮೊದಲ gateway ಆವೃತ್ತಿಯಲ್ಲಿ ದೋಷವಿತ್ತು ಎಂದು ಎಚ್ಚರಿಸಿತು, ಮತ್ತು ಲ್ಯಾಬ್ ಆ ದೋಷ ಮತ್ತು ಅದರ ಪರಿಹಾರವನ್ನು ಪುನರುತ್ಪಾದಿಸುತ್ತದೆ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Controls Fail Too",
    "textKn": "ನಿಯಂತ್ರಣಗಳೂ ವಿಫಲವಾಗುತ್ತವೆ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Five Production Questions",
    "headingKn": "ಐದು ಉತ್ಪಾದನಾ ಪ್ರಶ್ನೆಗಳು",
    "bodyEn": "A safety control has to keep working when its own dependencies fail and when the agent behaves slowly rather than suddenly. This part asks five questions in code: what a gateway does when the control store is unreachable, which of EWMA, CUSUM and a hard limit notices a slow climb and a sudden jump, what a shared counter loses without atomic updates, whether a frozen policy object is really fixed, and who can move an incident from review back to normal. All numbers are invented.",
    "bodyKn": "ಸುರಕ್ಷತಾ ನಿಯಂತ್ರಣ ತನ್ನ ಅವಲಂಬನೆಗಳು ವಿಫಲವಾದಾಗ ಮತ್ತು agent ಹಠಾತ್ತಾಗಿ ಅಲ್ಲ ನಿಧಾನವಾಗಿ ವರ್ತಿಸಿದಾಗ ಕೆಲಸ ಮಾಡುತ್ತಲೇ ಇರಬೇಕು. ಈ ಭಾಗ ಕೋಡ್‌ನಲ್ಲಿ ಐದು ಪ್ರಶ್ನೆ ಕೇಳುತ್ತದೆ: ನಿಯಂತ್ರಣ ಸಂಗ್ರಹ ತಲುಪಲಾಗದಾಗ gateway ಏನು ಮಾಡುತ್ತದೆ, EWMA, CUSUM ಮತ್ತು ಕಠಿಣ ಮಿತಿಯಲ್ಲಿ ಯಾವುದು ನಿಧಾನ ಏರಿಕೆ ಮತ್ತು ಹಠಾತ್ ಜಿಗಿತ ಗಮನಿಸುತ್ತದೆ, ಪರಮಾಣು ನವೀಕರಣ ಇಲ್ಲದೆ ಹಂಚಿದ ಕೌಂಟರ್ ಏನು ಕಳೆದುಕೊಳ್ಳುತ್ತದೆ, ಹೆಪ್ಪುಗಟ್ಟಿದ ನೀತಿ ವಸ್ತು ನಿಜವಾಗಿಯೂ ನಿಗದಿತವೇ, ಮತ್ತು ಘಟನೆಯನ್ನು ವಿಮರ್ಶೆಯಿಂದ ಸಾಮಾನ್ಯಕ್ಕೆ ಯಾರು ಹಿಂತಿರುಗಿಸಬಹುದು. ಎಲ್ಲಾ ಸಂಖ್ಯೆಗಳು ಕಲ್ಪಿತ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Production Concerns",
    "headingKn": "ಉತ್ಪಾದನಾ ಕಾಳಜಿಗಳು",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">production safety is about failure, drift and recovery</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">outage</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">fail closed</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">drift</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">CUSUM and hard limit</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">race</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">needs atomic update</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">recovery</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">needs a token</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">production safety is about failure, drift and recovery</text></svg>",
    "captionEn": "Outages, drift, races and recovery decide whether the controls hold.",
    "captionKn": "ಸ್ಥಗಿತಗಳು, drift, ಓಟಗಳು ಮತ್ತು ಚೇತರಿಕೆ ನಿಯಂತ್ರಣಗಳು ಉಳಿಯುತ್ತವೆಯೇ ನಿರ್ಧರಿಸುತ್ತವೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "captionEn": "The five questions",
    "captionKn": "ಐದು ಪ್ರಶ್ನೆಗಳು",
    "rows": "Question|What the lab does\noutage|store unreachable on requests 4 to 6 of 10, fail open against fail closed\ndrift|a 16-minute slow climb and a jump to 40 calls per minute\nrace|8 threads of 2000 increments, with and without a lock\npolicy|a frozenset of forbidden tools\nrecovery|incident states and an operator token"
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
    "filename": "kc_3.py",
    "headingEn": "Control store, detectors, race, policy and incident controller",
    "headingKn": "ನಿಯಂತ್ರಣ ಸಂಗ್ರಹ, ಪತ್ತೆಕಾರಕಗಳು, ಓಟ, ನೀತಿ ಮತ್ತು ಘಟನೆ ನಿಯಂತ್ರಕ",
    "descEn": "ControlStore can be told to fail, EWMADetector and CUSUMDetector watch a rate, race compares a counter with and without a lock, Policy holds forbidden tools and IncidentController gates recovery on a token.",
    "descKn": "ControlStore ವಿಫಲವಾಗಲು ಹೇಳಬಹುದು, EWMADetector ಮತ್ತು CUSUMDetector ದರ ನೋಡುತ್ತವೆ, race ಲಾಕ್ ಇದ್ದು ಮತ್ತು ಇಲ್ಲದ ಕೌಂಟರ್ ಹೋಲಿಸುತ್ತದೆ, Policy ನಿಷೇಧಿತ tools ಹೊಂದಿದೆ ಮತ್ತು IncidentController ಚೇತರಿಕೆಯನ್ನು token ಮೇಲೆ ನಿಯಂತ್ರಿಸುತ್ತದೆ.",
    "code": "class ControlStore:\r\n    def __init__(self):\r\n        self.enabled, self.up = True, True\r\n\r\n    def read(self):\r\n        if not self.up:\r\n            raise ConnectionError(\"control store unavailable\")\r\n        return self.enabled\r\n\r\n\r\ndef gateway_decision(store, fail_closed):\r\n    try:\r\n        return store.read()\r\n    except ConnectionError:\r\n        return not fail_closed\r\n\r\n\r\nclass EWMADetector:\r\n    def __init__(self, alpha=0.2, baseline=10.0, margin=8.0):\r\n        self.alpha, self.baseline, self.margin = alpha, baseline, margin\r\n\r\n    def observe(self, x):\r\n        alert = x > self.baseline + self.margin\r\n        self.baseline = self.alpha * x + (1 - self.alpha) * self.baseline\r\n        return alert\r\n\r\n\r\nclass CUSUMDetector:\r\n    def __init__(self, mean=10.0, allowance=1.0, threshold=12.0):\r\n        self.mean, self.k, self.h, self.s = mean, allowance, threshold, 0.0\r\n\r\n    def observe(self, x):\r\n        self.s = max(0.0, self.s + x - self.mean - self.k)\r\n        return self.s > self.h\r\n\r\n\r\ndef first_alerts(series, hard_limit=20):\r\n    e, c = EWMADetector(), CUSUMDetector()\r\n    out = {\"ewma\": None, \"cusum\": None, \"hard\": None}\r\n    for minute, x in enumerate(series, 1):\r\n        if e.observe(x) and out[\"ewma\"] is None:\r\n            out[\"ewma\"] = minute\r\n        if c.observe(x) and out[\"cusum\"] is None:\r\n            out[\"cusum\"] = minute\r\n        if x > hard_limit and out[\"hard\"] is None:\r\n            out[\"hard\"] = minute\r\n    return out\r\n\r\n\r\ndef race(use_lock, threads=8, per_thread=2000):\r\n    state = {\"n\": 0}\r\n    lock = threading.Lock()\r\n\r\n    def work():\r\n        for _ in range(per_thread):\r\n            if use_lock:\r\n                with lock:\r\n                    state[\"n\"] += 1\r\n            else:\r\n                v = state[\"n\"]\r\n                time.sleep(0)\r\n                state[\"n\"] = v + 1\r\n\r\n    ts = [threading.Thread(target=work) for _ in range(threads)]\r\n    for t in ts:\r\n        t.start()\r\n    for t in ts:\r\n        t.join()\r\n    return state[\"n\"], threads * per_thread\r\n\r\n\r\nclass Policy:\r\n    forbidden_tools = frozenset({\"disable_security_monitor\", \"delete_production_database\"})\r\n    forbidden_recipients = frozenset({\"secrets@example.invalid\"})\r\n\r\n    def evaluate(self, tool, arguments):\r\n        if tool in self.forbidden_tools:\r\n            return False, \"Forbidden tool\"\r\n        if tool == \"send_email\" and arguments.get(\"recipient\") in self.forbidden_recipients:\r\n            return False, \"Forbidden recipient\"\r\n        return True, \"Allowed\"\r\n\r\n\r\nclass Incident(Enum):\r\n    NORMAL = 0\r\n    SUSPICIOUS = 1\r\n    QUARANTINED = 2\r\n    UNDER_REVIEW = 3\r\n    RECOVERY_APPROVED = 4\r\n\r\n\r\nclass IncidentController:\r\n    def __init__(self, operator_token):\r\n        self.state, self._token = Incident.NORMAL, operator_token\r\n\r\n    def advance(self, to):\r\n        order = [Incident.NORMAL, Incident.SUSPICIOUS, Incident.QUARANTINED, Incident.UNDER_REVIEW]\r\n        if self.state in order and to == order[min(order.index(self.state) + 1, 3)] and to != self.state:\r\n            self.state = to\r\n        return self.state\r\n\r\n    def approve_recovery(self, token):\r\n        if self.state == Incident.UNDER_REVIEW and token == self._token:\r\n            self.state = Incident.RECOVERY_APPROVED\r\n        return self.state"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "kc_3.py",
    "headingEn": "main(): experiments",
    "headingKn": "main(): ಪ್ರಯೋಗಗಳು",
    "descEn": "main() compares outage policies, finds first alerts on two rate series, measures the counter race, tests the policy and walks the incident states.",
    "descKn": "main() ಸ್ಥಗಿತ ನೀತಿಗಳನ್ನು ಹೋಲಿಸಿ, ಎರಡು ದರ ಸರಣಿಗಳಲ್ಲಿ ಮೊದಲ ಎಚ್ಚರಿಕೆ ಕಂಡುಹಿಡಿದು, ಕೌಂಟರ್ ಓಟ ಅಳೆದು, ನೀತಿ ಪರೀಕ್ಷಿಸಿ ಮತ್ತು ಘಟನೆ ಸ್ಥಿತಿಗಳಲ್ಲಿ ನಡೆಯುತ್ತದೆ.",
    "code": "def main():\r\n    section(\"1. Genuinely running: a control-store outage on requests 4 to 6 of 10\")\r\n    for fail_closed in (False, True):\r\n        store = ControlStore()\r\n        executed = []\r\n        for i in range(1, 11):\r\n            store.up = not (4 <= i <= 6)\r\n            if gateway_decision(store, fail_closed):\r\n                executed.append(i)\r\n        print(f\"{'fail closed' if fail_closed else 'fail open':11}: actions executed {executed}\")\r\n    store = ControlStore()\r\n    store.enabled, store.up = False, False\r\n    print(\"operator has disabled the agent and the store is unreachable ->\", \"fail open allows\" if gateway_decision(store, False) else \"fail open denies\", \"|\", \"fail closed allows\" if gateway_decision(store, True) else \"fail closed denies\")\r\n    print(\"fail open keeps working through the outage, including the case where the operator had already switched the agent off, while fail closed refuses requests 4 to 6; the safer default for consequential actions is fail closed, and the price is lost availability during the outage\")\r\n\r\n    section(\"2. Genuinely running: a slow rate drift against a sudden jump (calls per minute)\")\r\n    slow = [10, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 20, 21, 22]\r\n    jump = [10, 10, 10, 10, 40, 40]\r\n    print(\"slow drift:\", slow)\r\n    print(\"minute of first alert ->\", first_alerts(slow))\r\n    print(\"sudden jump:\", jump)\r\n    print(\"minute of first alert ->\", first_alerts(jump))\r\n    print(\"on the slow climb the adaptive EWMA baseline keeps following the rate and never alerts, CUSUM measured against a fixed reference accumulates the excess and alerts at minute 8, and the fixed hard limit of 20 alerts only at minute 15; on the sudden jump all three detectors alert at minute 5, the first minute at 40; the series and thresholds are invented\")\r\n\r\n    section(\"3. Genuinely measuring: a shared counter without and with a lock (8 threads x 2000)\")\r\n    got, want = race(False)\r\n    print(f\"without a lock: counted {got} of {want} | lost {want - got}\")\r\n    got, want = race(True)\r\n    print(f\"with a lock:    counted {got} of {want} | lost {want - got}\")\r\n    print(\"read, add one, write back is not atomic, so threads overwrite each other and increments are lost when the threads interleave, and a lock makes every increment count; the deliberate sleep(0) between the read and the write forces a thread switch and so exaggerates the loss, and a real unsynchronised counter would usually lose far fewer; a breaker counter shared by several workers has the same problem, and across machines the lock has to be a database transaction or an atomic increment in a shared store; the exact number lost varies from run to run\")\r\n\r\n    section(\"4. Genuinely running: a constitutional policy the agent cannot edit at run time\")\r\n    p = Policy()\r\n    print(p.evaluate(\"send_email\", {\"recipient\": \"secrets@example.invalid\"}))\r\n    print(p.evaluate(\"send_email\", {\"recipient\": \"customer@example.com\"}))\r\n    print(p.evaluate(\"disable_security_monitor\", {}))\r\n    try:\r\n        p.forbidden_tools.add(\"nothing\")\r\n    except AttributeError as e:\r\n        print(\"adding to the frozen set:\", type(e).__name__)\r\n    p.forbidden_tools = frozenset()\r\n    print(\"rebinding the attribute is still possible in the same process:\", p.evaluate(\"disable_security_monitor\", {}))\r\n    print(\"a frozenset cannot be changed in place, but the attribute can be replaced by any code in the process, so the last line shows the policy allowing a forbidden tool after one assignment; real enforcement must sit in a separate component with its own credentials\")\r\n\r\n    section(\"5. Genuinely running: incident states and a recovery token the agent does not hold\")\r\n    ic = IncidentController(\"operator-secret-token\")\r\n    for to in (Incident.SUSPICIOUS, Incident.QUARANTINED, Incident.UNDER_REVIEW):\r\n        print(\"advance ->\", ic.advance(to).name)\r\n    print(\"agent tries a guessed token:\", ic.approve_recovery(\"guess\").name)\r\n    print(\"operator with the token:\", ic.approve_recovery(\"operator-secret-token\").name)\r\n    print(\"recovery from review is only reachable with the token, and an attempt without it leaves the state at under review; the token here is a string in the same object, which a real system replaces with an authenticated operator decision that the agent cannot forge\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: a control-store outage on requests 4 to 6 of 10 ---\nfail open  : actions executed [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\nfail closed: actions executed [1, 2, 3, 7, 8, 9, 10]\noperator has disabled the agent and the store is unreachable -> fail open allows | fail closed denies\nfail open keeps working through the outage, including the case where the operator had already switched the agent off, while fail closed refuses requests 4 to 6; the safer default for consequential actions is fail closed, and the price is lost availability during the outage\n\n--- 2. Genuinely running: a slow rate drift against a sudden jump (calls per minute) ---\nslow drift: [10, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 20, 21, 22]\nminute of first alert -> {'ewma': None, 'cusum': 8, 'hard': 15}\nsudden jump: [10, 10, 10, 10, 40, 40]\nminute of first alert -> {'ewma': 5, 'cusum': 5, 'hard': 5}\non the slow climb the adaptive EWMA baseline keeps following the rate and never alerts, CUSUM measured against a fixed reference accumulates the excess and alerts at minute 8, and the fixed hard limit of 20 alerts only at minute 15; on the sudden jump all three detectors alert at minute 5, the first minute at 40; the series and thresholds are invented\n\n--- 3. Genuinely measuring: a shared counter without and with a lock (8 threads x 2000) ---\nwithout a lock: counted 2205 of 16000 | lost 13795\nwith a lock:    counted 16000 of 16000 | lost 0\nread, add one, write back is not atomic, so threads overwrite each other and increments are lost when the threads interleave, and a lock makes every increment count; the deliberate sleep(0) between the read and the write forces a thread switch and so exaggerates the loss, and a real unsynchronised counter would usually lose far fewer; a breaker counter shared by several workers has the same problem, and across machines the lock has to be a database transaction or an atomic increment in a shared store; the exact number lost varies from run to run\n\n--- 4. Genuinely running: a constitutional policy the agent cannot edit at run time ---\n(False, 'Forbidden recipient')\n(True, 'Allowed')\n(False, 'Forbidden tool')\nadding to the frozen set: AttributeError\nrebinding the attribute is still possible in the same process: (True, 'Allowed')\na frozenset cannot be changed in place, but the attribute can be replaced by any code in the process, so the last line shows the policy allowing a forbidden tool after one assignment; real enforcement must sit in a separate component with its own credentials\n\n--- 5. Genuinely running: incident states and a recovery token the agent does not hold ---\nadvance -> SUSPICIOUS\nadvance -> QUARANTINED\nadvance -> UNDER_REVIEW\nagent tries a guessed token: UNDER_REVIEW\noperator with the token: RECOVERY_APPROVED\nrecovery from review is only reachable with the token, and an attempt without it leaves the state at under review; the token here is a string in the same object, which a real system replaces with an authenticated operator decision that the agent cannot forge"
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Experiment Walkthrough",
    "textKn": "Experiment ನಡೆದಾಟ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 1: A control-store outage on requests 4 to 6 of 10",
    "headingKn": "ಪ್ರಯೋಗ 1: A control-store outage on requests 4 to 6 of 10",
    "bodyEn": "What it ran: A control-store outage on requests 4 to 6 of 10. What the lab concluded: fail open keeps working through the outage, including the case where the operator had already switched the agent off, while fail closed refuses requests 4 to 6; the safer default for consequential actions is fail closed, and the price is lost availability during the outage",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A control-store outage on requests 4 to 6 of 10. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): fail open keeps working through the outage, including the case where the operator had already switched the agent off, while fail closed refuses requests 4 to 6; the safer default for consequential actions is fail closed, and the price is lost availability during the outage"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. Genuinely running: a control-store outage on requests 4 to 6 of 10 ---\nfail open  : actions executed [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\nfail closed: actions executed [1, 2, 3, 7, 8, 9, 10]\noperator has disabled the agent and the store is unreachable -> fail open allows | fail closed denies"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: A slow rate drift against a sudden jump (calls per minute)",
    "headingKn": "ಪ್ರಯೋಗ 2: A slow rate drift against a sudden jump (calls per minute)",
    "bodyEn": "What it ran: A slow rate drift against a sudden jump (calls per minute). What the lab concluded: on the slow climb the adaptive EWMA baseline keeps following the rate and never alerts, CUSUM measured against a fixed reference accumulates the excess and alerts at minute 8, and the fixed hard limit of 20 alerts only at minute 15; on the sudden jump all three detectors alert at minute 5, the first minute at 40; the series and thresholds are invented",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A slow rate drift against a sudden jump (calls per minute). ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): on the slow climb the adaptive EWMA baseline keeps following the rate and never alerts, CUSUM measured against a fixed reference accumulates the excess and alerts at minute 8, and the fixed hard limit of 20 alerts only at minute 15; on the sudden jump all three detectors alert at minute 5, the first minute at 40; the series and thresholds are invented"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely running: a slow rate drift against a sudden jump (calls per minute) ---\nslow drift: [10, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 20, 21, 22]\nminute of first alert -> {'ewma': None, 'cusum': 8, 'hard': 15}\nsudden jump: [10, 10, 10, 10, 40, 40]\nminute of first alert -> {'ewma': 5, 'cusum': 5, 'hard': 5}"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: A shared counter without and with a lock (8 threads x 2000)",
    "headingKn": "ಪ್ರಯೋಗ 3: A shared counter without and with a lock (8 threads x 2000)",
    "bodyEn": "What it ran: A shared counter without and with a lock (8 threads x 2000). What the lab concluded: read, add one, write back is not atomic, so threads overwrite each other and increments are lost when the threads interleave, and a lock makes every increment count; the deliberate sleep(0) between the read and the write forces a thread switch and so exaggerates the loss, and a real unsynchronised counter would usually lose far fewer; a breaker counter shared by several workers has the same problem, and across machines the lock has to be a database transaction or an atomic increment in a shared store; the exact number lost varies from run to run",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A shared counter without and with a lock (8 threads x 2000). ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): read, add one, write back is not atomic, so threads overwrite each other and increments are lost when the threads interleave, and a lock makes every increment count; the deliberate sleep(0) between the read and the write forces a thread switch and so exaggerates the loss, and a real unsynchronised counter would usually lose far fewer; a breaker counter shared by several workers has the same problem, and across machines the lock has to be a database transaction or an atomic increment in a shared store; the exact number lost varies from run to run"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely measuring: a shared counter without and with a lock (8 threads x 2000) ---\nwithout a lock: counted 2205 of 16000 | lost 13795\nwith a lock:    counted 16000 of 16000 | lost 0"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 4: A constitutional policy the agent cannot edit at run time",
    "headingKn": "ಪ್ರಯೋಗ 4: A constitutional policy the agent cannot edit at run time",
    "bodyEn": "What it ran: A constitutional policy the agent cannot edit at run time. What the lab concluded: a frozenset cannot be changed in place, but the attribute can be replaced by any code in the process, so the last line shows the policy allowing a forbidden tool after one assignment; real enforcement must sit in a separate component with its own credentials",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A constitutional policy the agent cannot edit at run time. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a frozenset cannot be changed in place, but the attribute can be replaced by any code in the process, so the last line shows the policy allowing a forbidden tool after one assignment; real enforcement must sit in a separate component with its own credentials"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 4. Genuinely running: a constitutional policy the agent cannot edit at run time ---\n(False, 'Forbidden recipient')\n(True, 'Allowed')\n(False, 'Forbidden tool')\nadding to the frozen set: AttributeError\nrebinding the attribute is still possible in the same process: (True, 'Allowed')"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 5: Incident states and a recovery token the agent does not hold",
    "headingKn": "ಪ್ರಯೋಗ 5: Incident states and a recovery token the agent does not hold",
    "bodyEn": "What it ran: Incident states and a recovery token the agent does not hold. What the lab concluded: recovery from review is only reachable with the token, and an attempt without it leaves the state at under review; the token here is a string in the same object, which a real system replaces with an authenticated operator decision that the agent cannot forge",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Incident states and a recovery token the agent does not hold. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): recovery from review is only reachable with the token, and an attempt without it leaves the state at under review; the token here is a string in the same object, which a real system replaces with an authenticated operator decision that the agent cannot forge"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 5. Genuinely running: incident states and a recovery token the agent does not hold ---\nadvance -> SUSPICIOUS\nadvance -> QUARANTINED\nadvance -> UNDER_REVIEW\nagent tries a guessed token: UNDER_REVIEW\noperator with the token: RECOVERY_APPROVED"
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
    "headingEn": "Genuinely Found: Outage and Drift",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಸ್ಥಗಿತ ಮತ್ತು Drift",
    "bodyEn": "Section 1: fail open executed all ten requests while fail closed executed 1, 2, 3, 7, 8, 9 and 10, and with the operator off and the store unreachable fail open allowed and fail closed denied. Section 2: on the slow climb EWMA never alerted, CUSUM alerted at minute 8 and the hard limit of 20 at minute 15; on the jump to 40 all three alerted at minute 5.",
    "bodyKn": "ವಿಭಾಗ 1: fail open ಎಲ್ಲಾ ಹತ್ತು ವಿನಂತಿ ಕಾರ್ಯಗತಗೊಳಿಸಿತು, fail closed 1, 2, 3, 7, 8, 9 ಮತ್ತು 10 ಕಾರ್ಯಗತಗೊಳಿಸಿತು, ಮತ್ತು ಆಪರೇಟರ್ ಆಫ್ ಮಾಡಿ ಸಂಗ್ರಹ ತಲುಪಲಾಗದಾಗ fail open ಅನುಮತಿಸಿತು ಮತ್ತು fail closed ನಿರಾಕರಿಸಿತು. ವಿಭಾಗ 2: ನಿಧಾನ ಏರಿಕೆಯಲ್ಲಿ EWMA ಎಂದಿಗೂ ಎಚ್ಚರಿಸಲಿಲ್ಲ, CUSUM ನಿಮಿಷ 8 ರಲ್ಲಿ ಮತ್ತು ಕಠಿಣ ಮಿತಿ 20 ನಿಮಿಷ 15 ರಲ್ಲಿ ಎಚ್ಚರಿಸಿತು; 40 ಕ್ಕೆ ಜಿಗಿತದಲ್ಲಿ ಮೂರೂ ನಿಮಿಷ 5 ರಲ್ಲಿ ಎಚ್ಚರಿಸಿದವು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Race, Policy and Recovery",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಓಟ, ನೀತಿ ಮತ್ತು ಚೇತರಿಕೆ",
    "bodyEn": "Section 3: without a lock 8 threads counted 2205 of 16000 and lost 13795 in the cached run, with a lock they counted 16000 and lost 0; the loss varies from run to run. Section 4: the forbidden recipient and tool were refused, adding to the frozenset raised AttributeError, and after reassigning the attribute the forbidden tool was allowed. Section 5: the incident moved suspicious, quarantined, under review, a guessed token left it under review and the operator token moved it to recovery approved.",
    "bodyKn": "ವಿಭಾಗ 3: ಲಾಕ್ ಇಲ್ಲದೆ 8 threads 16000 ರಲ್ಲಿ 2205 ಎಣಿಸಿ ಸಂಗ್ರಹಿತ ಓಟದಲ್ಲಿ 13795 ಕಳೆದುಕೊಂಡವು, ಲಾಕ್ ಜೊತೆ 16000 ಎಣಿಸಿ 0 ಕಳೆದುಕೊಂಡವು; ನಷ್ಟ ಓಟದಿಂದ ಓಟಕ್ಕೆ ಬದಲಾಗುತ್ತದೆ. ವಿಭಾಗ 4: ನಿಷೇಧಿತ ಸ್ವೀಕರಿಸುವವರು ಮತ್ತು tool ನಿರಾಕರಿಸಲ್ಪಟ್ಟವು, frozenset ಗೆ ಸೇರಿಸುವುದು AttributeError ಎತ್ತಿತು, ಮತ್ತು ಗುಣಲಕ್ಷಣ ಮರುನಿಯೋಜಿಸಿದ ನಂತರ ನಿಷೇಧಿತ tool ಅನುಮತಿಸಲ್ಪಟ್ಟಿತು. ವಿಭಾಗ 5: ಘಟನೆ suspicious, quarantined, under review ಗೆ ಸರಿಯಿತು, ಊಹಿಸಿದ token ಅದನ್ನು under review ನಲ್ಲಿ ಬಿಟ್ಟಿತು ಮತ್ತು ಆಪರೇಟರ್ token ಅದನ್ನು recovery approved ಗೆ ಸರಿಸಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "Controls that fail open, adapt to drift, lose updates or can be rewritten by the process they guard give a false sense of safety, so each of these has to be tested the way this lab does.",
    "bodyKn": "ತೆರೆದು ವಿಫಲವಾಗುವ, drift ಗೆ ಹೊಂದಿಕೊಳ್ಳುವ, ನವೀಕರಣ ಕಳೆದುಕೊಳ್ಳುವ ಅಥವಾ ಅವು ಕಾಯುವ ಪ್ರಕ್ರಿಯೆಯಿಂದಲೇ ಮರುಬರೆಯಬಹುದಾದ ನಿಯಂತ್ರಣಗಳು ಸುಳ್ಳು ಸುರಕ್ಷತೆ ಭಾವನೆ ನೀಡುತ್ತವೆ, ಆದ್ದರಿಂದ ಇವುಗಳಲ್ಲಿ ಪ್ರತಿಯೊಂದನ್ನು ಈ ಲ್ಯಾಬ್ ಮಾಡುವಂತೆ ಪರೀಕ್ಷಿಸಬೇಕು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"a frozenset makes the policy tamper-proof.\" One attribute assignment replaced it and the forbidden tool was allowed.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"frozenset ನೀತಿಯನ್ನು tamper-ಪ್ರೂಫ್ ಮಾಡುತ್ತದೆ.\" ಒಂದು ಗುಣಲಕ್ಷಣ ನಿಯೋಜನೆ ಅದನ್ನು ಬದಲಿಸಿತು ಮತ್ತು ನಿಷೇಧಿತ tool ಅನುಮತಿಸಲ್ಪಟ್ಟಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Fail closed: deny when the control state cannot be read. EWMA: a moving average that follows the data. CUSUM: accumulated excess over a fixed reference. Race: updates that overwrite each other.",
    "bodyKn": "Fail closed: ನಿಯಂತ್ರಣ ಸ್ಥಿತಿ ಓದಲಾಗದಾಗ ನಿರಾಕರಿಸಿ. EWMA: ದತ್ತಾಂಶ ಅನುಸರಿಸುವ ಚಲಿಸುವ ಸರಾಸರಿ. CUSUM: ನಿಗದಿತ ಉಲ್ಲೇಖದ ಮೇಲೆ ಸಂಚಿತ ಹೆಚ್ಚಳ. Race: ಪರಸ್ಪರ ಬರೆದು ಬದಲಿಸುವ ನವೀಕರಣಗಳು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) Fail open ran all 10 requests through the outage. 2) EWMA missed the slow climb that CUSUM caught at minute 8. 3) All three caught the jump at minute 5. 4) An unlocked counter lost most increments. 5) A recovery token gated the return to normal.",
    "bodyKn": "1) fail open ಸ್ಥಗಿತದ ಮೂಲಕ ಎಲ್ಲಾ 10 ವಿನಂತಿ ಓಡಿಸಿತು. 2) CUSUM ನಿಮಿಷ 8 ರಲ್ಲಿ ಹಿಡಿದ ನಿಧಾನ ಏರಿಕೆಯನ್ನು EWMA ತಪ್ಪಿಸಿತು. 3) ಮೂರೂ ಜಿಗಿತವನ್ನು ನಿಮಿಷ 5 ರಲ್ಲಿ ಹಿಡಿದವು. 4) ಲಾಕ್ ಇಲ್ಲದ ಕೌಂಟರ್ ಹೆಚ್ಚಿನ ಏರಿಕೆಗಳನ್ನು ಕಳೆದುಕೊಂಡಿತು. 5) ಚೇತರಿಕೆ token ಸಾಮಾನ್ಯಕ್ಕೆ ಮರಳುವುದನ್ನು ನಿಯಂತ್ರಿಸಿತು."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Try It Yourself",
    "textKn": "ನೀವೇ ಪ್ರಯತ್ನಿಸಿ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Run the lab",
    "headingKn": "ಲ್ಯಾಬ್ ಓಡಿಸಿ",
    "bodyEn": "1) Open a terminal in pneuronics-backend/lesson-defs/labs. 2) Run: python -B kc_3.py (in Git Bash on Windows: PYTHONIOENCODING=utf-8 python -B kc_3.py). 3) Compare each section with the walkthrough above. The -B flag stops Python from writing __pycache__ folders.",
    "bodyKn": "1) pneuronics-backend/lesson-defs/labs ನಲ್ಲಿ ಟರ್ಮಿನಲ್ ತೆರೆಯಿರಿ. 2) ಓಡಿಸಿ: python -B kc_3.py (Windows Git Bash ನಲ್ಲಿ: PYTHONIOENCODING=utf-8 python -B kc_3.py). 3) ಪ್ರತಿ ವಿಭಾಗವನ್ನು ಮೇಲಿನ ನಡೆದಾಟಕ್ಕೆ ಹೋಲಿಸಿ. -B ಧ್ವಜ Python __pycache__ ಫೋಲ್ಡರ್‌ಗಳನ್ನು ಬರೆಯುವುದನ್ನು ತಡೆಯುತ್ತದೆ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "Which requests did fail closed execute when the store was down for requests 4 to 6?",
      "qKn": "ಸಂಗ್ರಹ ವಿನಂತಿ 4 ರಿಂದ 6 ಕ್ಕೆ ಕೆಳಗಿದ್ದಾಗ fail closed ಯಾವ ವಿನಂತಿಗಳನ್ನು ಕಾರ್ಯಗತಗೊಳಿಸಿತು?",
      "opts": [
       "1, 2, 3, 7, 8, 9, 10",
       "All ten",
       "4, 5, 6",
       "None"
      ],
      "optsKn": [
       "1, 2, 3, 7, 8, 9, 10",
       "ಎಲ್ಲಾ ಹತ್ತು",
       "4, 5, 6",
       "ಯಾವುದೂ ಇಲ್ಲ"
      ],
      "correct": 0
     },
     {
      "q": "At which minute did CUSUM first alert on the slow climb?",
      "qKn": "ನಿಧಾನ ಏರಿಕೆಯಲ್ಲಿ CUSUM ಮೊದಲು ಯಾವ ನಿಮಿಷ ಎಚ್ಚರಿಸಿತು?",
      "opts": [
       "8",
       "5",
       "15",
       "Never"
      ],
      "optsKn": [
       "8",
       "5",
       "15",
       "ಎಂದಿಗೂ ಇಲ್ಲ"
      ],
      "correct": 0
     },
     {
      "q": "Did EWMA alert on the slow climb?",
      "qKn": "ನಿಧಾನ ಏರಿಕೆಯಲ್ಲಿ EWMA ಎಚ್ಚರಿಸಿತೇ?",
      "opts": [
       "No, its baseline followed the rate",
       "Yes at minute 1",
       "Yes at minute 8",
       "Yes at minute 15"
      ],
      "optsKn": [
       "ಇಲ್ಲ, ಅದರ ಆಧಾರ ದರ ಅನುಸರಿಸಿತು",
       "ಹೌದು ನಿಮಿಷ 1",
       "ಹೌದು ನಿಮಿಷ 8",
       "ಹೌದು ನಿಮಿಷ 15"
      ],
      "correct": 0
     },
     {
      "q": "What did the counter with a lock reach in the race test?",
      "qKn": "ಓಟ ಪರೀಕ್ಷೆಯಲ್ಲಿ ಲಾಕ್ ಇರುವ ಕೌಂಟರ್ ಏನು ತಲುಪಿತು?",
      "opts": [
       "16000 of 16000",
       "2205 of 16000",
       "8000 of 16000",
       "0"
      ],
      "optsKn": [
       "16000 ರಲ್ಲಿ 16000",
       "16000 ರಲ್ಲಿ 2205",
       "16000 ರಲ್ಲಿ 8000",
       "0"
      ],
      "correct": 0
     },
     {
      "q": "Why is a frozenset policy still not tamper-proof?",
      "qKn": "frozenset ನೀತಿ ಇನ್ನೂ tamper-ಪ್ರೂಫ್ ಏಕೆ ಅಲ್ಲ?",
      "opts": [
       "Code in the process can rebind the attribute to another set",
       "frozenset can be changed in place",
       "It is not a set",
       "It is stored on disk"
      ],
      "optsKn": [
       "ಪ್ರಕ್ರಿಯೆಯಲ್ಲಿನ ಕೋಡ್ ಗುಣಲಕ್ಷಣವನ್ನು ಇನ್ನೊಂದು ಸೆಟ್‌ಗೆ ಮರುಬಂಧಿಸಬಹುದು",
       "frozenset ಅನ್ನು ಸ್ಥಳದಲ್ಲೇ ಬದಲಿಸಬಹುದು",
       "ಅದು ಸೆಟ್ ಅಲ್ಲ",
       "ಅದು ಡಿಸ್ಕ್‌ನಲ್ಲಿ ಸಂಗ್ರಹಿತ"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
