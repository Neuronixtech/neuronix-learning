module.exports = {
 "phaseId": "6a369d6366020ed05b32158c",
 "moduleId": "6a369d6466020ed05b3215b6",
 "order": 0,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Kill Switches, Circuit Breakers, Canary Tokens (Part 1 of 3) — The Three Detectors",
 "titleKn": "Kill Switches, Circuit Breakers, Canary Tokens (ಭಾಗ 1 / 3) — ಮೂರು ಪತ್ತೆಕಾರಕಗಳು",
 "desc": "Build and exercise a kill switch, a repetition breaker and a canary monitor on their own.",
 "descKn": "kill switch, ಪುನರಾವರ್ತನೆ breaker ಮತ್ತು canary ಮಾನಿಟರ್ ಅನ್ನು ಏಕಾಂಗಿಯಾಗಿ ನಿರ್ಮಿಸಿ ಪರೀಕ್ಷಿಸಿ.",
 "objectives": [
  "Read a stop switch per action.",
  "Open a breaker on repetition.",
  "Normalise call arguments.",
  "Raise a canary alert.",
  "See a breaker false alarm."
 ],
 "objectivesKn": [
  "ಪ್ರತಿ ಕ್ರಿಯೆಗೆ stop switch ಓದಿ.",
  "ಪುನರಾವರ್ತನೆಯಲ್ಲಿ breaker ತೆರೆಯಿರಿ.",
  "ಕರೆ ಆರ್ಗ್ಯುಮೆಂಟ್ ಸಾಮಾನ್ಯೀಕರಿಸಿ.",
  "canary ಎಚ್ಚರಿಕೆ ಎತ್ತಿ.",
  "breaker ತಪ್ಪು ಎಚ್ಚರಿಕೆ ನೋಡಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Kill Switches, Circuit Breakers, Canary Tokens (Part 1 of 3)",
    "textKn": "Kill Switches, Circuit Breakers, Canary Tokens (ಭಾಗ 1 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 1 of 3: an externally owned kill switch, a repetition breaker that opens on the fifth identical call with argument normalisation, a canary monitor and a repeated harmless call that the breaker also refuses. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind kill switches, circuit breakers and canary tokens (an externally owned stop, a repetition breaker, canary monitoring, an ordered safety gateway, fail-closed control, EWMA and CUSUM, a shared-counter race, a hard policy and incident recovery), not the real software, and the control store, the policy and the incident token live in the same process, the executor only records requests, the rates are invented and nothing is sent, deleted or run for real, so no real LLM behaviour is measured. The original code/main.py was not supplied, so the labs are our own implementation. The lesson Redis, signed-configuration, eBPF and Cilium material, including its latency remarks, is conceptual and was not run here because it needs third-party services; the labs cover the standard-library parts. The lesson Part 2 warned that its first gateway version had a bug, and the lab reproduces that bug and its fix. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 1ನೆಯದು: ಹೊರಗಿನ ಒಡೆತನದ kill switch, ಐದನೇ ಒಂದೇ ಕರೆಯಲ್ಲಿ ತೆರೆಯುವ ಆರ್ಗ್ಯುಮೆಂಟ್ ಸಾಮಾನ್ಯೀಕರಣ ಇರುವ ಪುನರಾವರ್ತನೆ breaker, canary ಮಾನಿಟರ್ ಮತ್ತು breaker ಕೂಡ ನಿರಾಕರಿಸುವ ಪುನರಾವರ್ತಿತ ಹಾನಿರಹಿತ ಕರೆ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು kill switches, circuit breakers ಮತ್ತು canary tokens (ಹೊರಗಿನ ಒಡೆತನದ ನಿಲುಗಡೆ, ಪುನರಾವರ್ತನೆ breaker, canary ಮೇಲ್ವಿಚಾರಣೆ, ಕ್ರಮಬದ್ಧ ಸುರಕ್ಷತಾ gateway, fail-closed ನಿಯಂತ್ರಣ, EWMA ಮತ್ತು CUSUM, ಹಂಚಿದ ಕೌಂಟರ್ ಓಟ, ಕಠಿಣ ನೀತಿ ಮತ್ತು ಘಟನೆ ಚೇತರಿಕೆ) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ನಿಯಂತ್ರಣ ಸಂಗ್ರಹ, ನೀತಿ ಮತ್ತು ಘಟನೆ token ಅದೇ ಪ್ರಕ್ರಿಯೆಯಲ್ಲಿವೆ, executor ವಿನಂತಿಗಳನ್ನು ದಾಖಲಿಸುತ್ತದೆ ಮಾತ್ರ, ದರಗಳು ಕಲ್ಪಿತ ಮತ್ತು ನಿಜವಾಗಿ ಏನೂ ಕಳುಹಿಸಲ್ಪಡುವುದಿಲ್ಲ, ಅಳಿಸಲ್ಪಡುವುದಿಲ್ಲ ಅಥವಾ ಓಡುವುದಿಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ code/main.py ಒದಗಿಸಿರಲಿಲ್ಲ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ನಮ್ಮದೇ ಅನುಷ್ಠಾನ. lesson ನ Redis, ಸಹಿ ಮಾಡಿದ ಸಂರಚನೆ, eBPF ಮತ್ತು Cilium ವಿಷಯ, ಅದರ ವಿಳಂಬ ಟಿಪ್ಪಣಿಗಳು ಸೇರಿ, ಪರಿಕಲ್ಪನಾತ್ಮಕ ಮತ್ತು ಇಲ್ಲಿ ಓಡಿಸಲಾಗಿಲ್ಲ ಏಕೆಂದರೆ ಅದಕ್ಕೆ ಮೂರನೇ ಪಕ್ಷದ ಸೇವೆಗಳು ಬೇಕು; ಲ್ಯಾಬ್‌ಗಳು standard-library ಭಾಗಗಳನ್ನು ಒಳಗೊಳ್ಳುತ್ತವೆ. lesson ನ ಭಾಗ 2 ಅದರ ಮೊದಲ gateway ಆವೃತ್ತಿಯಲ್ಲಿ ದೋಷವಿತ್ತು ಎಂದು ಎಚ್ಚರಿಸಿತು, ಮತ್ತು ಲ್ಯಾಬ್ ಆ ದೋಷ ಮತ್ತು ಅದರ ಪರಿಹಾರವನ್ನು ಪುನರುತ್ಪಾದಿಸುತ್ತದೆ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "The Agent Must Not Be the Last Word on Stopping",
    "textKn": "ನಿಲ್ಲಿಸುವ ಬಗ್ಗೆ Agent ಅಂತಿಮ ಮಾತಾಗಬಾರದು",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Kill Switch, Breaker and Canary on Their Own",
    "headingKn": "Kill Switch, Breaker ಮತ್ತು Canary ಏಕಾಂಗಿಯಾಗಿ",
    "bodyEn": "A budget does not stop a single destructive call, and a permission does not notice a loop of permitted calls. This part builds three small detectors and tries each: a kill switch whose state is owned outside the agent and is read at every action, a circuit breaker that opens on the fifth identical consecutive call after normalising the arguments, and a canary monitor that raises an alert when a decoy path is read. Each is exercised on its own before they are combined.",
    "bodyKn": "ಬಜೆಟ್ ಒಂದು ವಿನಾಶಕಾರಿ ಕರೆಯನ್ನು ನಿಲ್ಲಿಸುವುದಿಲ್ಲ, ಮತ್ತು ಅನುಮತಿ ಅನುಮತಿಸಿದ ಕರೆಗಳ ಲೂಪ್ ಗಮನಿಸುವುದಿಲ್ಲ. ಈ ಭಾಗ ಮೂರು ಚಿಕ್ಕ ಪತ್ತೆಕಾರಕಗಳನ್ನು ನಿರ್ಮಿಸಿ ಪ್ರತಿಯೊಂದನ್ನು ಪ್ರಯತ್ನಿಸುತ್ತದೆ: ಸ್ಥಿತಿ agent ಹೊರಗೆ ಒಡೆತನದಲ್ಲಿದ್ದು ಪ್ರತಿ ಕ್ರಿಯೆಯಲ್ಲಿ ಓದಲ್ಪಡುವ kill switch, ಆರ್ಗ್ಯುಮೆಂಟ್ ಸಾಮಾನ್ಯೀಕರಿಸಿದ ನಂತರ ಐದನೇ ಒಂದೇ ಸತತ ಕರೆಯಲ್ಲಿ ತೆರೆಯುವ circuit breaker, ಮತ್ತು decoy path ಓದಿದಾಗ ಎಚ್ಚರಿಕೆ ಎತ್ತುವ canary ಮಾನಿಟರ್. ಅವುಗಳನ್ನು ಸೇರಿಸುವ ಮೊದಲು ಪ್ರತಿಯೊಂದನ್ನು ಏಕಾಂಗಿಯಾಗಿ ಪರೀಕ್ಷಿಸಲಾಗುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Three Detectors",
    "headingKn": "ಮೂರು ಪತ್ತೆಕಾರಕಗಳು",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">three detectors answer three different questions</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">kill switch</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">stop everything</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">breaker</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">stop a pattern</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">canary</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">alert on a decoy</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">gateway</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">checks before running</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">three detectors answer three different questions</text></svg>",
    "captionEn": "A global stop, a pattern stop and an alarm on a decoy.",
    "captionKn": "ಜಾಗತಿಕ ನಿಲುಗಡೆ, ಮಾದರಿ ನಿಲುಗಡೆ ಮತ್ತು decoy ಮೇಲೆ ಎಚ್ಚರಿಕೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "The three detectors",
    "headingKn": "ಮೂರು ಪತ್ತೆಕಾರಕಗಳು",
    "headers": [
     "Detector",
     "Question it answers"
    ],
    "rows": [
     [
      "kill switch",
      "is the agent allowed to act at all?"
     ],
     [
      "circuit breaker",
      "is this action pattern abnormal? opens at 5 identical consecutive calls"
     ],
     [
      "canary monitor",
      "did the agent touch something it should never need?"
     ],
     [
      "state",
      "the control state and the canary list live in this process"
     ],
     [
      "executor",
      "not present in this part, decisions are only returned"
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
    "filename": "kc_1.py",
    "headingEn": "The three detectors",
    "headingKn": "ಮೂರು ಪತ್ತೆಕಾರಕಗಳು",
    "descEn": "KillSwitch reads the state each call, RepetitionCircuitBreaker counts consecutive identical normalised calls and CanaryMonitor matches decoy paths and records alerts.",
    "descKn": "KillSwitch ಪ್ರತಿ ಕರೆಯಲ್ಲಿ ಸ್ಥಿತಿ ಓದುತ್ತದೆ, RepetitionCircuitBreaker ಸತತ ಒಂದೇ ಸಾಮಾನ್ಯೀಕೃತ ಕರೆಗಳನ್ನು ಎಣಿಸುತ್ತದೆ ಮತ್ತು CanaryMonitor decoy path ಹೊಂದಿಸಿ ಎಚ್ಚರಿಕೆ ದಾಖಲಿಸುತ್ತದೆ.",
    "code": "class KillSwitch:\n    def __init__(self, external_state):\n        self._state = external_state\n\n    def allow(self, action):\n        if not self._state[\"agent_enabled\"]:\n            return {\"allowed\": False, \"action\": action, \"reason\": \"External kill switch disabled\"}\n        return {\"allowed\": True, \"action\": action, \"reason\": \"Kill switch permits evaluation\"}\n\n\nclass RepetitionCircuitBreaker:\n    def __init__(self, threshold=5):\n        if threshold < 1:\n            raise ValueError(\"threshold must be positive\")\n        self.threshold, self.prev, self.count, self.state = threshold, None, 0, \"CLOSED\"\n\n    @staticmethod\n    def signature(tool, arguments):\n        return (tool, json.dumps(arguments, sort_keys=True, separators=(\",\", \":\")))\n\n    def evaluate(self, tool, arguments):\n        if self.state == \"OPEN\":\n            return {\"allowed\": False, \"state\": self.state, \"count\": self.count, \"reason\": \"Circuit already open\"}\n        sig = self.signature(tool, arguments)\n        self.count = self.count + 1 if sig == self.prev else 1\n        self.prev = sig\n        if self.count >= self.threshold:\n            self.state = \"OPEN\"\n            return {\"allowed\": False, \"state\": self.state, \"count\": self.count, \"reason\": \"Threshold reached\"}\n        return {\"allowed\": True, \"state\": self.state, \"count\": self.count, \"reason\": \"ok\"}\n\n\nclass CanaryMonitor:\n    def __init__(self, canary_paths):\n        self.canary_paths, self.alerts = set(canary_paths), []\n\n    def evaluate_read(self, path):\n        if path in self.canary_paths:\n            alert = {\"event\": \"CANARY_ACCESS\", \"resource\": path, \"severity\": \"HIGH\"}\n            self.alerts.append(alert)\n            return {\"allowed\": False, \"alert\": alert}\n        return {\"allowed\": True, \"alert\": None}"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "kc_1.py",
    "headingEn": "main(): experiments",
    "headingKn": "main(): ಪ್ರಯೋಗಗಳು",
    "descEn": "main() flips the kill switch, drives the breaker through six calls, checks argument normalisation, reads a canary and repeats a harmless lookup.",
    "descKn": "main() kill switch ಬದಲಿಸಿ, breaker ಅನ್ನು ಆರು ಕರೆಗಳ ಮೂಲಕ ನಡೆಸಿ, ಆರ್ಗ್ಯುಮೆಂಟ್ ಸಾಮಾನ್ಯೀಕರಣ ಪರಿಶೀಲಿಸಿ, canary ಓದಿ ಮತ್ತು ಹಾನಿರಹಿತ lookup ಪುನರಾವರ್ತಿಸುತ್ತದೆ.",
    "code": "def main():\n    section(\"1. Genuinely running: a kill switch read at the moment of each action\")\n    state = {\"agent_enabled\": True}\n    ks = KillSwitch(state)\n    print(ks.allow(\"lookup_order\"))\n    state[\"agent_enabled\"] = False\n    print(ks.allow(\"delete_order\"))\n    print(\"the switch holds a reference to the state and reads it on every call, so a change made by the operator takes effect on the next action; it was read once per action here, and a copy taken at startup would have ignored the change; the dictionary lives in this process, so nothing stops code in the same process from editing it\")\n\n    section(\"2. Genuinely running: five identical calls against the breaker\")\n    b = RepetitionCircuitBreaker(5)\n    for i in range(1, 7):\n        r = b.evaluate(\"delete_record\", {\"record_id\": 42})\n        print(f\"attempt {i}: count {r['count']} | state {r['state']:6} | allowed {r['allowed']} | {r['reason']}\")\n    print(\"the first four attempts are allowed with the count rising to four, the fifth is refused and opens the breaker, and the sixth is refused because the breaker is already open; the check is made before the tool would run, so the fifth call never executes\")\n\n    section(\"3. Genuinely running: argument order and different arguments\")\n    b = RepetitionCircuitBreaker(3)\n    print(\"same arguments in different key order ->\", [b.evaluate(\"update\", a)[\"count\"] for a in ({\"force\": True, \"record_id\": 42}, {\"record_id\": 42, \"force\": True}, {\"force\": True, \"record_id\": 42})])\n    b = RepetitionCircuitBreaker(3)\n    print(\"different record ids in a row ->\", [b.evaluate(\"delete_record\", {\"record_id\": i})[\"count\"] for i in (42, 43, 44)])\n    print(\"sorting the keys makes the first three calls count as one repeated action and open the breaker at three, while calls on different records each restart the count at one, which avoids a false alarm on a legitimate batch; a tool-name-only breaker would have opened on the batch\")\n\n    section(\"4. Genuinely running: a canary read through a gateway function\")\n    m = CanaryMonitor({\"workspace/.decoy/internal_token.txt\"})\n    print(\"normal read:\", m.evaluate_read(\"workspace/README.md\"))\n    print(\"canary read:\", m.evaluate_read(\"workspace/.decoy/internal_token.txt\"))\n    print(\"alerts recorded:\", len(m.alerts))\n    print(\"the canary read is refused and an alert with severity HIGH is recorded while the ordinary read passes; the monitor matches exact path strings, so a path spelled differently or reached through a shell command would not trigger it\")\n\n    section(\"5. Genuinely running: a repeated call that is not a loop\")\n    b = RepetitionCircuitBreaker(5)\n    results = [b.evaluate(\"lookup_order\", {\"order_id\": 42})[\"allowed\"] for _ in range(5)]\n    print(\"five identical successful lookups:\", results)\n    print(\"a breaker on repetition cannot tell a harmless polling loop from a destructive one, so the fifth lookup is refused even though lookups are harmless, and the threshold and the set of tools it applies to are policy choices\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: a kill switch read at the moment of each action ---\n{'allowed': True, 'action': 'lookup_order', 'reason': 'Kill switch permits evaluation'}\n{'allowed': False, 'action': 'delete_order', 'reason': 'External kill switch disabled'}\nthe switch holds a reference to the state and reads it on every call, so a change made by the operator takes effect on the next action; it was read once per action here, and a copy taken at startup would have ignored the change; the dictionary lives in this process, so nothing stops code in the same process from editing it\n\n--- 2. Genuinely running: five identical calls against the breaker ---\nattempt 1: count 1 | state CLOSED | allowed True | ok\nattempt 2: count 2 | state CLOSED | allowed True | ok\nattempt 3: count 3 | state CLOSED | allowed True | ok\nattempt 4: count 4 | state CLOSED | allowed True | ok\nattempt 5: count 5 | state OPEN   | allowed False | Threshold reached\nattempt 6: count 5 | state OPEN   | allowed False | Circuit already open\nthe first four attempts are allowed with the count rising to four, the fifth is refused and opens the breaker, and the sixth is refused because the breaker is already open; the check is made before the tool would run, so the fifth call never executes\n\n--- 3. Genuinely running: argument order and different arguments ---\nsame arguments in different key order -> [1, 2, 3]\ndifferent record ids in a row -> [1, 1, 1]\nsorting the keys makes the first three calls count as one repeated action and open the breaker at three, while calls on different records each restart the count at one, which avoids a false alarm on a legitimate batch; a tool-name-only breaker would have opened on the batch\n\n--- 4. Genuinely running: a canary read through a gateway function ---\nnormal read: {'allowed': True, 'alert': None}\ncanary read: {'allowed': False, 'alert': {'event': 'CANARY_ACCESS', 'resource': 'workspace/.decoy/internal_token.txt', 'severity': 'HIGH'}}\nalerts recorded: 1\nthe canary read is refused and an alert with severity HIGH is recorded while the ordinary read passes; the monitor matches exact path strings, so a path spelled differently or reached through a shell command would not trigger it\n\n--- 5. Genuinely running: a repeated call that is not a loop ---\nfive identical successful lookups: [True, True, True, True, False]\na breaker on repetition cannot tell a harmless polling loop from a destructive one, so the fifth lookup is refused even though lookups are harmless, and the threshold and the set of tools it applies to are policy choices"
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
    "headingEn": "Experiment 1: A kill switch read at the moment of each action",
    "headingKn": "ಪ್ರಯೋಗ 1: A kill switch read at the moment of each action",
    "bodyEn": "What it ran: A kill switch read at the moment of each action. What the lab concluded: the switch holds a reference to the state and reads it on every call, so a change made by the operator takes effect on the next action; it was read once per action here, and a copy taken at startup would have ignored the change; the dictionary lives in this process, so nothing stops code in the same process from editing it",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A kill switch read at the moment of each action. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the switch holds a reference to the state and reads it on every call, so a change made by the operator takes effect on the next action; it was read once per action here, and a copy taken at startup would have ignored the change; the dictionary lives in this process, so nothing stops code in the same process from editing it"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. Genuinely running: a kill switch read at the moment of each action ---\n{'allowed': True, 'action': 'lookup_order', 'reason': 'Kill switch permits evaluation'}\n{'allowed': False, 'action': 'delete_order', 'reason': 'External kill switch disabled'}"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: Five identical calls against the breaker",
    "headingKn": "ಪ್ರಯೋಗ 2: Five identical calls against the breaker",
    "bodyEn": "What it ran: Five identical calls against the breaker. What the lab concluded: the first four attempts are allowed with the count rising to four, the fifth is refused and opens the breaker, and the sixth is refused because the breaker is already open; the check is made before the tool would run, so the fifth call never executes",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Five identical calls against the breaker. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the first four attempts are allowed with the count rising to four, the fifth is refused and opens the breaker, and the sixth is refused because the breaker is already open; the check is made before the tool would run, so the fifth call never executes"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely running: five identical calls against the breaker ---\nattempt 1: count 1 | state CLOSED | allowed True | ok\nattempt 2: count 2 | state CLOSED | allowed True | ok\nattempt 3: count 3 | state CLOSED | allowed True | ok\nattempt 4: count 4 | state CLOSED | allowed True | ok\nattempt 5: count 5 | state OPEN   | allowed False | Threshold reached\nattempt 6: count 5 | state OPEN   | allowed False | Circuit already open"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: Argument order and different arguments",
    "headingKn": "ಪ್ರಯೋಗ 3: Argument order and different arguments",
    "bodyEn": "What it ran: Argument order and different arguments. What the lab concluded: sorting the keys makes the first three calls count as one repeated action and open the breaker at three, while calls on different records each restart the count at one, which avoids a false alarm on a legitimate batch; a tool-name-only breaker would have opened on the batch",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Argument order and different arguments. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): sorting the keys makes the first three calls count as one repeated action and open the breaker at three, while calls on different records each restart the count at one, which avoids a false alarm on a legitimate batch; a tool-name-only breaker would have opened on the batch"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely running: argument order and different arguments ---\nsame arguments in different key order -> [1, 2, 3]\ndifferent record ids in a row -> [1, 1, 1]"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 4: A canary read through a gateway function",
    "headingKn": "ಪ್ರಯೋಗ 4: A canary read through a gateway function",
    "bodyEn": "What it ran: A canary read through a gateway function. What the lab concluded: the canary read is refused and an alert with severity HIGH is recorded while the ordinary read passes; the monitor matches exact path strings, so a path spelled differently or reached through a shell command would not trigger it",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A canary read through a gateway function. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the canary read is refused and an alert with severity HIGH is recorded while the ordinary read passes; the monitor matches exact path strings, so a path spelled differently or reached through a shell command would not trigger it"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 4. Genuinely running: a canary read through a gateway function ---\nnormal read: {'allowed': True, 'alert': None}\ncanary read: {'allowed': False, 'alert': {'event': 'CANARY_ACCESS', 'resource': 'workspace/.decoy/internal_token.txt', 'severity': 'HIGH'}}\nalerts recorded: 1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 5: A repeated call that is not a loop",
    "headingKn": "ಪ್ರಯೋಗ 5: A repeated call that is not a loop",
    "bodyEn": "What it ran: A repeated call that is not a loop. What the lab concluded: a breaker on repetition cannot tell a harmless polling loop from a destructive one, so the fifth lookup is refused even though lookups are harmless, and the threshold and the set of tools it applies to are policy choices",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A repeated call that is not a loop. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a breaker on repetition cannot tell a harmless polling loop from a destructive one, so the fifth lookup is refused even though lookups are harmless, and the threshold and the set of tools it applies to are policy choices"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 5. Genuinely running: a repeated call that is not a loop ---\nfive identical successful lookups: [True, True, True, True, False]"
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
    "headingEn": "Genuinely Found: Switch and Breaker",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Switch ಮತ್ತು Breaker",
    "bodyEn": "Section 1: lookup_order was permitted, and after the operator set agent_enabled to false delete_order was refused with External kill switch disabled. Section 2: five identical delete_record calls gave counts 1 to 5 with the first four allowed, the fifth refused with the state OPEN, and a sixth refused as Circuit already open.",
    "bodyKn": "ವಿಭಾಗ 1: lookup_order ಅನುಮತಿಸಲ್ಪಟ್ಟಿತು, ಮತ್ತು ಆಪರೇಟರ್ agent_enabled ಅನ್ನು false ಮಾಡಿದ ನಂತರ delete_order External kill switch disabled ನೊಂದಿಗೆ ನಿರಾಕರಿಸಲ್ಪಟ್ಟಿತು. ವಿಭಾಗ 2: ಐದು ಒಂದೇ delete_record ಕರೆಗಳು 1 ರಿಂದ 5 ಎಣಿಕೆ ನೀಡಿದವು, ಮೊದಲ ನಾಲ್ಕು ಅನುಮತಿಸಲ್ಪಟ್ಟು ಐದನೆಯದು OPEN ಸ್ಥಿತಿಯೊಂದಿಗೆ ನಿರಾಕರಿಸಲ್ಪಟ್ಟಿತು, ಮತ್ತು ಆರನೆಯದು Circuit already open ಎಂದು ನಿರಾಕರಿಸಲ್ಪಟ್ಟಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Normalisation, Canary and a Harmless Loop",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಸಾಮಾನ್ಯೀಕರಣ, Canary ಮತ್ತು ಹಾನಿರಹಿತ ಲೂಪ್",
    "bodyEn": "Section 3: the same arguments in different key order counted 1, 2, 3, while calls on records 42, 43 and 44 counted 1, 1, 1. Section 4: the ordinary read passed, the canary read was refused with a HIGH severity alert and one alert was recorded. Section 5: five identical lookups gave True, True, True, True, False.",
    "bodyKn": "ವಿಭಾಗ 3: ಬೇರೆ key ಕ್ರಮದಲ್ಲಿ ಅದೇ ಆರ್ಗ್ಯುಮೆಂಟ್‌ಗಳು 1, 2, 3 ಎಂದು ಎಣಿಕೆಯಾದವು, ಮತ್ತು ದಾಖಲೆ 42, 43 ಮತ್ತು 44 ಮೇಲಿನ ಕರೆಗಳು 1, 1, 1. ವಿಭಾಗ 4: ಸಾಮಾನ್ಯ ಓದು ಹಾದುಹೋಯಿತು, canary ಓದು HIGH ತೀವ್ರತೆಯ ಎಚ್ಚರಿಕೆಯೊಂದಿಗೆ ನಿರಾಕರಿಸಲ್ಪಟ್ಟಿತು ಮತ್ತು ಒಂದು ಎಚ್ಚರಿಕೆ ದಾಖಲಾಯಿತು. ವಿಭಾಗ 5: ಐದು ಒಂದೇ lookup ಗಳು True, True, True, True, False ನೀಡಿದವು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "Each detector covers a gap the others leave: the switch stops everything, the breaker stops a pattern and the canary shows access that no task should need, and none of them replaces permissions.",
    "bodyKn": "ಪ್ರತಿ ಪತ್ತೆಕಾರಕ ಇತರವು ಬಿಡುವ ಅಂತರ ಮುಚ್ಚುತ್ತದೆ: switch ಎಲ್ಲವನ್ನೂ ನಿಲ್ಲಿಸುತ್ತದೆ, breaker ಮಾದರಿ ನಿಲ್ಲಿಸುತ್ತದೆ ಮತ್ತು canary ಯಾವ ಕಾರ್ಯಕ್ಕೂ ಬೇಡದ ಪ್ರವೇಶ ತೋರಿಸುತ್ತದೆ, ಮತ್ತು ಯಾವುದೂ ಅನುಮತಿಗಳನ್ನು ಬದಲಿಸುವುದಿಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"a breaker only fires on harmful loops.\" Five harmless lookups also opened it, so its scope and threshold are policy choices.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"breaker ಹಾನಿಕಾರಕ ಲೂಪ್‌ಗಳಲ್ಲಿ ಮಾತ್ರ ಉರಿಯುತ್ತದೆ.\" ಐದು ಹಾನಿರಹಿತ lookup ಗಳೂ ಅದನ್ನು ತೆರೆದವು, ಆದ್ದರಿಂದ ಅದರ ವ್ಯಾಪ್ತಿ ಮತ್ತು ಮಿತಿ ನೀತಿ ಆಯ್ಕೆಗಳು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Kill switch: an externally owned stop. Circuit breaker: a block on an abnormal pattern. Canary: a decoy whose access raises an alert. Normalisation: a standard form so equal calls compare equal.",
    "bodyKn": "Kill switch: ಹೊರಗಿನ ಒಡೆತನದ ನಿಲುಗಡೆ. Circuit breaker: ಅಸಹಜ ಮಾದರಿಯ ತಡೆ. Canary: ಪ್ರವೇಶ ಎಚ್ಚರಿಕೆ ಎತ್ತುವ decoy. Normalisation: ಸಮಾನ ಕರೆಗಳು ಸಮನಾಗಿ ಹೋಲಿಸಲು ಪ್ರಮಾಣಿತ ರೂಪ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) The switch was read on every action. 2) The breaker refused the fifth identical call before it ran. 3) Key order did not change the signature. 4) The canary read raised one alert. 5) Five lookups also tripped the breaker.",
    "bodyKn": "1) switch ಪ್ರತಿ ಕ್ರಿಯೆಯಲ್ಲಿ ಓದಲ್ಪಟ್ಟಿತು. 2) breaker ಐದನೇ ಒಂದೇ ಕರೆಯನ್ನು ಅದು ಓಡುವ ಮೊದಲು ನಿರಾಕರಿಸಿತು. 3) key ಕ್ರಮ ಸಹಿ ಬದಲಿಸಲಿಲ್ಲ. 4) canary ಓದು ಒಂದು ಎಚ್ಚರಿಕೆ ಎತ್ತಿತು. 5) ಐದು lookup ಗಳೂ breaker ಅನ್ನು ಉರಿಸಿದವು."
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
    "bodyEn": "1) Open a terminal in pneuronics-backend/lesson-defs/labs. 2) Run: python -B kc_1.py (in Git Bash on Windows: PYTHONIOENCODING=utf-8 python -B kc_1.py). 3) Compare each section with the walkthrough above. The -B flag stops Python from writing __pycache__ folders.",
    "bodyKn": "1) pneuronics-backend/lesson-defs/labs ನಲ್ಲಿ ಟರ್ಮಿನಲ್ ತೆರೆಯಿರಿ. 2) ಓಡಿಸಿ: python -B kc_1.py (Windows Git Bash ನಲ್ಲಿ: PYTHONIOENCODING=utf-8 python -B kc_1.py). 3) ಪ್ರತಿ ವಿಭಾಗವನ್ನು ಮೇಲಿನ ನಡೆದಾಟಕ್ಕೆ ಹೋಲಿಸಿ. -B ಧ್ವಜ Python __pycache__ ಫೋಲ್ಡರ್‌ಗಳನ್ನು ಬರೆಯುವುದನ್ನು ತಡೆಯುತ್ತದೆ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "On which identical call did the breaker open?",
      "qKn": "ಯಾವ ಒಂದೇ ಕರೆಯಲ್ಲಿ breaker ತೆರೆಯಿತು?",
      "opts": [
       "The fifth",
       "The first",
       "The third",
       "The sixth"
      ],
      "optsKn": [
       "ಐದನೆಯದು",
       "ಮೊದಲನೆಯದು",
       "ಮೂರನೆಯದು",
       "ಆರನೆಯದು"
      ],
      "correct": 0
     },
     {
      "q": "What counts did calls on records 42, 43 and 44 produce?",
      "qKn": "ದಾಖಲೆ 42, 43 ಮತ್ತು 44 ಮೇಲಿನ ಕರೆಗಳು ಯಾವ ಎಣಿಕೆ ನೀಡಿದವು?",
      "opts": [
       "1, 1, 1",
       "1, 2, 3",
       "3, 3, 3",
       "0, 0, 0"
      ],
      "optsKn": [
       "1, 1, 1",
       "1, 2, 3",
       "3, 3, 3",
       "0, 0, 0"
      ],
      "correct": 0
     },
     {
      "q": "What did sorting the argument keys achieve?",
      "qKn": "ಆರ್ಗ್ಯುಮೆಂಟ್ keys ವಿಂಗಡಿಸುವುದು ಏನು ಸಾಧಿಸಿತು?",
      "opts": [
       "Equal calls in a different key order counted as one repeated action",
       "It disabled the breaker",
       "It hid the canary",
       "It reset the switch"
      ],
      "optsKn": [
       "ಬೇರೆ key ಕ್ರಮದ ಸಮಾನ ಕರೆಗಳು ಒಂದು ಪುನರಾವರ್ತಿತ ಕ್ರಿಯೆಯಾಗಿ ಎಣಿಕೆಯಾದವು",
       "ಅದು breaker ನಿಷ್ಕ್ರಿಯಗೊಳಿಸಿತು",
       "ಅದು canary ಮರೆಮಾಡಿತು",
       "ಅದು switch ಮರುಹೊಂದಿಸಿತು"
      ],
      "correct": 0
     },
     {
      "q": "How many alerts did the canary read record?",
      "qKn": "canary ಓದು ಎಷ್ಟು ಎಚ್ಚರಿಕೆ ದಾಖಲಿಸಿತು?",
      "opts": [
       "1",
       "0",
       "2",
       "5"
      ],
      "optsKn": [
       "1",
       "0",
       "2",
       "5"
      ],
      "correct": 0
     },
     {
      "q": "Why is the lab kill switch not a real security boundary?",
      "qKn": "ಲ್ಯಾಬ್ kill switch ನಿಜ ಭದ್ರತಾ ಗಡಿ ಏಕೆ ಅಲ್ಲ?",
      "opts": [
       "Its state is a dictionary in the same process",
       "It cannot be read",
       "It never changes",
       "It uses a database"
      ],
      "optsKn": [
       "ಅದರ ಸ್ಥಿತಿ ಅದೇ ಪ್ರಕ್ರಿಯೆಯಲ್ಲಿನ ನಿಘಂಟು",
       "ಅದನ್ನು ಓದಲಾಗದು",
       "ಅದು ಎಂದಿಗೂ ಬದಲಾಗುವುದಿಲ್ಲ",
       "ಅದು ಡೇಟಾಬೇಸ್ ಬಳಸುತ್ತದೆ"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
