module.exports = {
 "phaseId": "6a369d6366020ed05b32158c",
 "moduleId": "6a369d6366020ed05b321598",
 "order": 1,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Darwin Godel Machine: Self-Modifying Agents (Part 2 of 3) — Reward Hacking and Evaluator Firewalls",
 "titleKn": "Darwin Godel Machine: ಸ್ವಯಂ-ಮಾರ್ಪಡಿಸುವ Agents (ಭಾಗ 2 / 3) — Reward Hacking ಮತ್ತು ಮೌಲ್ಯಮಾಪಕ Firewalls",
 "desc": "Hack a naive evaluator, wall it off with a firewall and sign the evidence so a gate can verify it.",
 "descKn": "naive ಮೌಲ್ಯಮಾಪಕವನ್ನು hack ಮಾಡಿ, firewall ನಿಂದ ಗೋಡೆ ಕಟ್ಟಿ ಮತ್ತು gate ಪರಿಶೀಲಿಸಲು ಸಾಕ್ಷ್ಯಕ್ಕೆ ಸಹಿ ಮಾಡಿ.",
 "objectives": [
  "Show two reward hacks.",
  "Build an evaluator firewall.",
  "Sign evidence with HMAC.",
  "Run four tamper checks.",
  "Write a named-check gate."
 ],
 "objectivesKn": [
  "ಎರಡು reward hack ತೋರಿಸಿ.",
  "ಮೌಲ್ಯಮಾಪಕ firewall ನಿರ್ಮಿಸಿ.",
  "HMAC ನಿಂದ ಸಾಕ್ಷ್ಯಕ್ಕೆ ಸಹಿ ಮಾಡಿ.",
  "ನಾಲ್ಕು tamper ಪರಿಶೀಲನೆ ಓಡಿಸಿ.",
  "ಹೆಸರಿಸಿದ-ಪರಿಶೀಲನೆ gate ಬರೆಯಿರಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Darwin Godel Machine: Self-Modifying Agents (Part 2 of 3)",
    "textKn": "Darwin Godel Machine: ಸ್ವಯಂ-ಮಾರ್ಪಡಿಸುವ Agents (ಭಾಗ 2 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 2 of 3: reward hacking against a naive evaluator, an evaluator firewall with its own immutable tests and held-out cases, HMAC-signed evidence with four tamper checks and a verification gate that names failed checks. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind Darwin Godel Machine style open-ended search (agent archives, stepping stones, reward hacking, evaluator firewalls, signed evidence and verification gates), not the real software, and agents are short operator sequences or plain Python callables written for the lab, the cheaters are scripted, and no language model or real code self-modification is involved, so no real LLM behaviour is measured. The original code/main.py was not supplied, so the labs are our own implementation. Benchmark results reported for the published Darwin Godel Machine are cited from the lesson and were not reproduced; the operator-sequence agents, the target function 3x+5, the 5 percent cheat rate and every other number in the labs are invented to show the mechanics. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 2ನೆಯದು: naive ಮೌಲ್ಯಮಾಪಕದ ವಿರುದ್ಧ reward hacking, ತನ್ನದೇ ಬದಲಾಗದ ಪರೀಕ್ಷೆಗಳು ಮತ್ತು held-out ಪ್ರಕರಣಗಳಿರುವ ಮೌಲ್ಯಮಾಪಕ firewall, ನಾಲ್ಕು tamper ಪರಿಶೀಲನೆಗಳಿರುವ HMAC-ಸಹಿ ಸಾಕ್ಷ್ಯ ಮತ್ತು ವಿಫಲ ಪರಿಶೀಲನೆಗಳನ್ನು ಹೆಸರಿಸುವ verification gate. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು Darwin Godel Machine ಶೈಲಿಯ ಮುಕ್ತ-ಅಂತ್ಯ ಹುಡುಕಾಟ (agent ಆರ್ಕೈವ್‌ಗಳು, ಮೆಟ್ಟಿಲು ಕಲ್ಲುಗಳು, reward hacking, ಮೌಲ್ಯಮಾಪಕ firewalls, ಸಹಿ ಮಾಡಿದ ಸಾಕ್ಷ್ಯ ಮತ್ತು verification gates) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು agents ಚಿಕ್ಕ ಆಪರೇಟರ್ ಅನುಕ್ರಮಗಳು ಅಥವಾ ಲ್ಯಾಬ್‌ಗಾಗಿ ಬರೆದ ಸಾಮಾನ್ಯ Python callables, ಮೋಸಗಾರರು scripted, ಮತ್ತು ಭಾಷಾ ಮಾದರಿ ಅಥವಾ ನಿಜ ಕೋಡ್ ಸ್ವಯಂ-ಮಾರ್ಪಾಡು ಇಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ code/main.py ಒದಗಿಸಿರಲಿಲ್ಲ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ನಮ್ಮದೇ ಅನುಷ್ಠಾನ. ಪ್ರಕಟಿತ Darwin Godel Machine ಗೆ ವರದಿಯಾದ benchmark ಫಲಿತಾಂಶಗಳು lesson ನಿಂದ ಉಲ್ಲೇಖಿತ ಮತ್ತು ಪುನರುತ್ಪಾದಿಸಲಾಗಿಲ್ಲ; ಆಪರೇಟರ್-ಅನುಕ್ರಮ agents, ಗುರಿ ಕಾರ್ಯ 3x+5, 5 ಶೇಕಡಾ ಮೋಸ ದರ ಮತ್ತು ಲ್ಯಾಬ್‌ಗಳ ಇತರ ಪ್ರತಿ ಸಂಖ್ಯೆ ಯಂತ್ರಶಾಸ್ತ್ರ ತೋರಿಸಲು ಕಲ್ಪಿತ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "A Score Is Only as Honest as Its Evaluator",
    "textKn": "ಅಂಕ ಅದರ ಮೌಲ್ಯಮಾಪಕದಷ್ಟೇ ಪ್ರಾಮಾಣಿಕ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Hack It, Wall It Off, Sign It",
    "headingKn": "Hack ಮಾಡಿ, ಗೋಡೆ ಕಟ್ಟಿ, ಸಹಿ ಮಾಡಿ",
    "bodyEn": "A self-modifying agent can edit anything it can reach, including the code that scores it. This part runs four scripted candidates against a naive evaluator that reads shared tests and trusts equality, then against a firewall that keeps its own immutable copies, accepts only plain integers and scores held-out cases. It then signs the evidence with an HMAC the candidate never sees, tries four tampering attempts and finishes with a gate that lists exactly which checks failed.",
    "bodyKn": "ಸ್ವಯಂ-ಮಾರ್ಪಡಿಸುವ agent ತಾನು ತಲುಪಬಲ್ಲ ಎಲ್ಲವನ್ನೂ, ತನಗೆ ಅಂಕ ನೀಡುವ ಕೋಡ್ ಸೇರಿ, ಸಂಪಾದಿಸಬಹುದು. ಈ ಭಾಗ ನಾಲ್ಕು scripted ಅಭ್ಯರ್ಥಿಗಳನ್ನು ಹಂಚಿದ ಪರೀಕ್ಷೆಗಳನ್ನು ಓದುವ ಮತ್ತು ಸಮಾನತೆ ನಂಬುವ naive ಮೌಲ್ಯಮಾಪಕದ ವಿರುದ್ಧ ಓಡಿಸುತ್ತದೆ, ನಂತರ ತನ್ನದೇ ಬದಲಾಗದ ನಕಲುಗಳನ್ನಿಟ್ಟು ಸಾಮಾನ್ಯ ಪೂರ್ಣಾಂಕ ಮಾತ್ರ ಸ್ವೀಕರಿಸಿ held-out ಪ್ರಕರಣಗಳಿಗೆ ಅಂಕ ನೀಡುವ firewall ವಿರುದ್ಧ. ನಂತರ ಅಭ್ಯರ್ಥಿ ಎಂದಿಗೂ ನೋಡದ HMAC ನಿಂದ ಸಾಕ್ಷ್ಯಕ್ಕೆ ಸಹಿ ಮಾಡಿ, ನಾಲ್ಕು ತಿದ್ದುವ ಪ್ರಯತ್ನ ಮಾಡಿ ಮತ್ತು ಯಾವ ಪರಿಶೀಲನೆಗಳು ವಿಫಲವಾದವು ಎಂದು ನಿಖರವಾಗಿ ಪಟ್ಟಿ ಮಾಡುವ gate ನೊಂದಿಗೆ ಮುಗಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Evaluator Firewall and Signed Evidence",
    "headingKn": "ಮೌಲ್ಯಮಾಪಕ Firewall ಮತ್ತು ಸಹಿ ಮಾಡಿದ ಸಾಕ್ಷ್ಯ",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">the evaluator must be out of the candidate reach</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">candidate</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">cannot see tests</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">firewall</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">own tests</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">sign</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">HMAC evidence</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">gate</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">all checks</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">the evaluator must be out of the candidate reach</text></svg>",
    "captionEn": "The candidate never touches the tests, the key or the verdict.",
    "captionKn": "ಅಭ್ಯರ್ಥಿ ಎಂದಿಗೂ ಪರೀಕ್ಷೆಗಳು, ಕೀ ಅಥವಾ ತೀರ್ಪನ್ನು ಮುಟ್ಟುವುದಿಲ್ಲ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Candidates in the lab",
    "headingKn": "ಲ್ಯಾಬ್‌ನಲ್ಲಿ ಅಭ್ಯರ್ಥಿಗಳು",
    "headers": [
     "Candidate",
     "Behavior"
    ],
    "rows": [
     [
      "honest",
      "computes 3x+5"
     ],
     [
      "weak",
      "computes 3x"
     ],
     [
      "equal_cheat",
      "returns an object whose == is always True"
     ],
     [
      "tamper_cheat",
      "empties the shared TESTS list when called"
     ],
     [
      "evaluator",
      "naive, or firewall with held-out cases"
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
    "filename": "da_2.py",
    "headingEn": "Naive evaluator, firewall and signer",
    "headingKn": "Naive ಮೌಲ್ಯಮಾಪಕ, firewall ಮತ್ತು signer",
    "descEn": "naive_eval reads shared tests and trusts ==, Firewall keeps tuples of its own and checks the result type, and Signer signs and verifies canonical records with HMAC-SHA256.",
    "descKn": "naive_eval ಹಂಚಿದ ಪರೀಕ್ಷೆಗಳನ್ನು ಓದಿ == ನಂಬುತ್ತದೆ, Firewall ತನ್ನದೇ tuples ಇಟ್ಟು ಫಲಿತಾಂಶ ಪ್ರಕಾರ ಪರಿಶೀಲಿಸುತ್ತದೆ, ಮತ್ತು Signer ಅಂಗೀಕೃತ ದಾಖಲೆಗಳಿಗೆ HMAC-SHA256 ನಿಂದ ಸಹಿ ಮಾಡಿ ಪರಿಶೀಲಿಸುತ್ತದೆ.",
    "code": "TESTS = [(x, 3 * x + 5) for x in range(-5, 6)]\r\nHELD = [(x, 3 * x + 5) for x in range(20, 30)]\r\n\r\n\r\ndef honest(x):\r\n    return 3 * x + 5\r\n\r\n\r\ndef weak(x):\r\n    return 3 * x\r\n\r\n\r\nclass AlwaysEqual:\r\n    def __eq__(self, other):\r\n        return True\r\n\r\n    def __ne__(self, other):\r\n        return False\r\n\r\n    __hash__ = None\r\n\r\n\r\ndef equal_cheat(x):\r\n    return AlwaysEqual()\r\n\r\n\r\ndef tamper_cheat(x):\r\n    TESTS.clear()\r\n    return 0\r\n\r\n\r\ndef naive_eval(agent):\r\n    \"\"\"Reads the shared TESTS list at call time and trusts == on whatever the agent returns.\"\"\"\r\n    agent(0)  # warm-up call, as many harnesses make before scoring\r\n    results = [agent(x) == y for x, y in TESTS]\r\n    return sum(results) / len(results) if results else 1.0\r\n\r\n\r\nclass Firewall:\r\n    \"\"\"Holds its own immutable copies of the tests, checks result types and counts, and scores held-out cases too.\"\"\"\r\n\r\n    def __init__(self, train, held):\r\n        self.train, self.held = tuple(train), tuple(held)\r\n\r\n    def score(self, agent, cases):\r\n        ok = 0\r\n        for x, y in cases:\r\n            out = agent(x)\r\n            if type(out) is int and y == out:\r\n                ok += 1\r\n        return ok / len(cases)\r\n\r\n    def evaluate(self, agent):\r\n        return {\"train\": self.score(agent, self.train), \"held\": self.score(agent, self.held), \"n_train\": len(self.train)}\r\n\r\n\r\ndef canonical(d):\r\n    return json.dumps(d, sort_keys=True, separators=(\",\", \":\")).encode()\r\n\r\n\r\nclass Signer:\r\n    def __init__(self):\r\n        self._key = secrets.token_bytes(32)\r\n\r\n    def sign(self, record):\r\n        return hmac.new(self._key, canonical(record), hashlib.sha256).hexdigest()\r\n\r\n    def verify(self, record, tag):\r\n        return hmac.compare_digest(self.sign(record), tag)\r\n\r\n\r\ndef candidate_hash(name):\r\n    return hashlib.sha256(name.encode()).hexdigest()[:12]"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "da_2.py",
    "headingEn": "main(): experiments",
    "headingKn": "main(): ಪ್ರಯೋಗಗಳು",
    "descEn": "main() scores the four candidates under both evaluators, runs four tamper checks on signed evidence and tries a gate with and without human approval.",
    "descKn": "main() ನಾಲ್ಕು ಅಭ್ಯರ್ಥಿಗಳನ್ನು ಎರಡೂ ಮೌಲ್ಯಮಾಪಕಗಳಲ್ಲಿ ಅಂಕ ನೀಡಿ, ಸಹಿ ಸಾಕ್ಷ್ಯದ ಮೇಲೆ ನಾಲ್ಕು tamper ಪರಿಶೀಲನೆ ಓಡಿಸಿ ಮತ್ತು ಮಾನವ ಅನುಮೋದನೆ ಇದ್ದು ಮತ್ತು ಇಲ್ಲದೆ gate ಪ್ರಯತ್ನಿಸುತ್ತದೆ.",
    "code": "def main():\r\n    section(\"1. Genuinely running: a naive evaluator against four candidates\")\r\n    agents = {\"honest\": honest, \"weak\": weak, \"equal_cheat\": equal_cheat, \"tamper_cheat\": tamper_cheat}\r\n    saved = list(TESTS)\r\n    for name, ag in agents.items():\r\n        TESTS[:] = saved\r\n        print(f\"{name:13} naive score {naive_eval(ag):.3f}\")\r\n    TESTS[:] = saved\r\n    print(\"the honest agent scores 1.000 and the weak one 0.000, but the equal-claiming cheater scores 1.000 because it returns an object that claims to equal anything, and the tampering cheater also scores 1.000 because it empties the shared test list during the evaluator's warm-up call, so the average runs over no tests and defaults to 1.0; the evaluator trusted both the candidate's return values and the shared state\")\r\n\r\n    section(\"2. Genuinely running: the same candidates behind an evaluator firewall\")\r\n    fw = Firewall(TESTS, HELD)\r\n    for name, ag in agents.items():\r\n        TESTS[:] = saved\r\n        res = fw.evaluate(ag)\r\n        print(f\"{name:13} train {res['train']:.3f} | held-out {res['held']:.3f} | tests run {res['n_train']}\")\r\n    TESTS[:] = saved\r\n    print(\"the firewall keeps its own immutable copy of the tests, accepts only plain integers and also scores held-out cases, so the honest agent still gets 1.000 and the weak agent and both cheaters get 0.000; the cheating code is the same, it simply has nothing to tamper with\")\r\n\r\n    section(\"3. Genuinely running: HMAC-signed evidence and a verifier\")\r\n    signer = Signer()\r\n    record = {\"candidate\": candidate_hash(\"honest\"), \"train\": 1.0, \"held\": 1.0, \"n_train\": 11}\r\n    tag = signer.sign(record)\r\n    print(\"genuine record verifies:\", signer.verify(record, tag))\r\n    edited = dict(record, held=1.0, candidate=candidate_hash(\"equal_cheat\"))\r\n    print(\"record moved to another candidate verifies:\", signer.verify(edited, tag))\r\n    inflated = dict(record, train=1.0, held=0.0)\r\n    inflated[\"held\"] = 1.0\r\n    weak_rec = {\"candidate\": candidate_hash(\"weak\"), \"train\": 0.091, \"held\": 0.0, \"n_train\": 11}\r\n    forged = dict(weak_rec, train=1.0, held=1.0)\r\n    print(\"weak record with inflated scores and the original tag verifies:\", signer.verify(forged, signer.sign(weak_rec)))\r\n    guess = hmac.new(b\"guessed-key\", canonical(forged), hashlib.sha256).hexdigest()\r\n    print(\"tag made with a guessed key verifies:\", signer.verify(forged, guess))\r\n    print(\"a tag is bound to the exact record contents under a key the candidate never sees, so changing the candidate, the scores or the key breaks verification; this lab key lives in the same process, so it only illustrates the check, and a real system keeps the key in a separate service\")\r\n\r\n    section(\"4. Genuinely running: a verification gate over several checks\")\r\n    def gate(res, tag_ok, human_ok):\r\n        checks = {\"train_perfect\": res[\"train\"] == 1.0, \"held_perfect\": res[\"held\"] == 1.0, \"tests_complete\": res[\"n_train\"] == 11, \"evidence_signed\": tag_ok, \"human_approved\": human_ok}\r\n        return [k for k, v in checks.items() if not v]\r\n    TESTS[:] = saved\r\n    res = fw.evaluate(honest)\r\n    print(\"honest, all evidence present, no human approval ->\", gate(res, True, False) or \"approved\")\r\n    print(\"honest, all evidence present, human approved    ->\", gate(res, True, True) or \"approved\")\r\n    res = fw.evaluate(tamper_cheat)\r\n    TESTS[:] = saved\r\n    print(\"tamper cheater, human approved                  ->\", gate(res, True, True) or \"approved\")\r\n    print(\"a candidate passes only when every named check passes, the failing checks are listed by name, and human approval is a boolean here that a real system must replace with an authenticated decision the candidate cannot set\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: a naive evaluator against four candidates ---\nhonest        naive score 1.000\nweak          naive score 0.000\nequal_cheat   naive score 1.000\ntamper_cheat  naive score 1.000\nthe honest agent scores 1.000 and the weak one 0.000, but the equal-claiming cheater scores 1.000 because it returns an object that claims to equal anything, and the tampering cheater also scores 1.000 because it empties the shared test list during the evaluator's warm-up call, so the average runs over no tests and defaults to 1.0; the evaluator trusted both the candidate's return values and the shared state\n\n--- 2. Genuinely running: the same candidates behind an evaluator firewall ---\nhonest        train 1.000 | held-out 1.000 | tests run 11\nweak          train 0.000 | held-out 0.000 | tests run 11\nequal_cheat   train 0.000 | held-out 0.000 | tests run 11\ntamper_cheat  train 0.000 | held-out 0.000 | tests run 11\nthe firewall keeps its own immutable copy of the tests, accepts only plain integers and also scores held-out cases, so the honest agent still gets 1.000 and the weak agent and both cheaters get 0.000; the cheating code is the same, it simply has nothing to tamper with\n\n--- 3. Genuinely running: HMAC-signed evidence and a verifier ---\ngenuine record verifies: True\nrecord moved to another candidate verifies: False\nweak record with inflated scores and the original tag verifies: False\ntag made with a guessed key verifies: False\na tag is bound to the exact record contents under a key the candidate never sees, so changing the candidate, the scores or the key breaks verification; this lab key lives in the same process, so it only illustrates the check, and a real system keeps the key in a separate service\n\n--- 4. Genuinely running: a verification gate over several checks ---\nhonest, all evidence present, no human approval -> ['human_approved']\nhonest, all evidence present, human approved    -> approved\ntamper cheater, human approved                  -> ['train_perfect', 'held_perfect']\na candidate passes only when every named check passes, the failing checks are listed by name, and human approval is a boolean here that a real system must replace with an authenticated decision the candidate cannot set"
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
    "headingEn": "Genuinely Found: Naive Against Firewall",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Naive ವಿರುದ್ಧ Firewall",
    "bodyEn": "Section 1: the naive evaluator scored honest 1.000, weak 0.000, equal_cheat 1.000 and tamper_cheat 1.000; the tampering cheater emptied the shared test list during the warm-up call so the average ran over no tests and defaulted to 1.0. Section 2: the firewall gave honest 1.000 on training and held-out with 11 tests run, and gave weak, equal_cheat and tamper_cheat 0.000 on both.",
    "bodyKn": "ವಿಭಾಗ 1: naive ಮೌಲ್ಯಮಾಪಕ honest 1.000, weak 0.000, equal_cheat 1.000 ಮತ್ತು tamper_cheat 1.000 ನೀಡಿತು; tampering ಮೋಸಗಾರ warm-up ಕರೆಯಲ್ಲಿ ಹಂಚಿದ ಪರೀಕ್ಷಾ ಪಟ್ಟಿ ಖಾಲಿ ಮಾಡಿದ್ದರಿಂದ ಸರಾಸರಿ ಯಾವ ಪರೀಕ್ಷೆಯ ಮೇಲೂ ಇಲ್ಲದೆ 1.0 ಡೀಫಾಲ್ಟ್ ಆಯಿತು. ವಿಭಾಗ 2: firewall honest ಗೆ training ಮತ್ತು held-out ಎರಡರಲ್ಲೂ 11 ಪರೀಕ್ಷೆ ಓಡಿ 1.000 ನೀಡಿತು, ಮತ್ತು weak, equal_cheat ಹಾಗೂ tamper_cheat ಗೆ ಎರಡರಲ್ಲೂ 0.000 ನೀಡಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Signed Evidence and the Gate",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಸಹಿ ಸಾಕ್ಷ್ಯ ಮತ್ತು Gate",
    "bodyEn": "Section 3: the genuine record verified True; the same tag on a record moved to another candidate verified False, a weak record with inflated scores verified False and a tag made with a guessed key verified False. Section 4: the gate for honest evidence without human approval listed human_approved, approved when human approval was added, and listed train_perfect and held_perfect for the tampering cheater even with human approval.",
    "bodyKn": "ವಿಭಾಗ 3: ನಿಜ ದಾಖಲೆ True ಎಂದು ಪರಿಶೀಲಿತವಾಯಿತು; ಅದೇ ಟ್ಯಾಗ್ ಬೇರೆ ಅಭ್ಯರ್ಥಿಗೆ ಸರಿಸಿದ ದಾಖಲೆಯ ಮೇಲೆ False, ಉಬ್ಬಿಸಿದ ಅಂಕಗಳ weak ದಾಖಲೆ False ಮತ್ತು ಊಹಿಸಿದ ಕೀಲಿಯಿಂದ ಮಾಡಿದ ಟ್ಯಾಗ್ False ಎಂದು ಪರಿಶೀಲಿತವಾದವು. ವಿಭಾಗ 4: ಮಾನವ ಅನುಮೋದನೆ ಇಲ್ಲದ honest ಸಾಕ್ಷ್ಯಕ್ಕೆ gate human_approved ಪಟ್ಟಿ ಮಾಡಿತು, ಮಾನವ ಅನುಮೋದನೆ ಸೇರಿಸಿದಾಗ approved, ಮತ್ತು ಮಾನವ ಅನುಮೋದನೆ ಇದ್ದರೂ tampering ಮೋಸಗಾರನಿಗೆ train_perfect ಮತ್ತು held_perfect ಪಟ್ಟಿ ಮಾಡಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "If the candidate can reach the tests, the scorer or the evidence, its score measures its ability to cheat rather than its ability to do the task.",
    "bodyKn": "ಅಭ್ಯರ್ಥಿ ಪರೀಕ್ಷೆಗಳು, ಅಂಕಕಾರ ಅಥವಾ ಸಾಕ್ಷ್ಯ ತಲುಪಬಲ್ಲಾದರೆ, ಅದರ ಅಂಕ ಕೆಲಸ ಮಾಡುವ ಸಾಮರ್ಥ್ಯ ಅಲ್ಲ, ಮೋಸ ಮಾಡುವ ಸಾಮರ್ಥ್ಯ ಅಳೆಯುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"a score of 1.000 means the task is solved.\" Three of four candidates scored 1.000 under the naive evaluator and only one was honest.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"1.000 ಅಂಕ ಎಂದರೆ ಕಾರ್ಯ ಪರಿಹಾರವಾಗಿದೆ.\" naive ಮೌಲ್ಯಮಾಪಕದಲ್ಲಿ ನಾಲ್ಕರಲ್ಲಿ ಮೂರು ಅಭ್ಯರ್ಥಿಗಳು 1.000 ಪಡೆದರು ಮತ್ತು ಒಬ್ಬರು ಮಾತ್ರ ಪ್ರಾಮಾಣಿಕ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Reward hacking: scoring well without doing the task. Firewall: an evaluator the candidate cannot reach. HMAC: a keyed hash that proves a record was not changed. Gate: a list of required checks.",
    "bodyKn": "Reward hacking: ಕಾರ್ಯ ಮಾಡದೆ ಚೆನ್ನಾಗಿ ಅಂಕ ಪಡೆಯುವುದು. Firewall: ಅಭ್ಯರ್ಥಿ ತಲುಪಲಾಗದ ಮೌಲ್ಯಮಾಪಕ. HMAC: ದಾಖಲೆ ಬದಲಾಗಿಲ್ಲ ಎಂದು ಸಾಬೀತುಪಡಿಸುವ ಕೀ ಹ್ಯಾಶ್. Gate: ಅಗತ್ಯ ಪರಿಶೀಲನೆಗಳ ಪಟ್ಟಿ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) Naive scored three of four candidates 1.000. 2) The firewall left only honest at 1.000. 3) Three tamper attempts all failed to verify. 4) The gate named missing human approval. 5) The lab key lives in the same process, so it only illustrates the check.",
    "bodyKn": "1) Naive ನಾಲ್ಕರಲ್ಲಿ ಮೂರು ಅಭ್ಯರ್ಥಿಗಳಿಗೆ 1.000 ನೀಡಿತು. 2) Firewall honest ಅನ್ನು ಮಾತ್ರ 1.000 ನಲ್ಲಿ ಬಿಟ್ಟಿತು. 3) ಮೂರು tamper ಪ್ರಯತ್ನಗಳು ಪರಿಶೀಲನೆ ವಿಫಲವಾದವು. 4) Gate ಕಾಣೆಯಾದ ಮಾನವ ಅನುಮೋದನೆ ಹೆಸರಿಸಿತು. 5) ಲ್ಯಾಬ್ ಕೀ ಅದೇ ಪ್ರಕ್ರಿಯೆಯಲ್ಲಿದೆ, ಆದ್ದರಿಂದ ಅದು ಪರಿಶೀಲನೆಯನ್ನು ವಿವರಿಸಲು ಮಾತ್ರ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What did the naive evaluator score the tampering cheater?",
      "qKn": "naive ಮೌಲ್ಯಮಾಪಕ tampering ಮೋಸಗಾರನಿಗೆ ಎಷ್ಟು ಅಂಕ ನೀಡಿತು?",
      "opts": [
       "1.000",
       "0.000",
       "0.091",
       "0.500"
      ],
      "optsKn": [
       "1.000",
       "0.000",
       "0.091",
       "0.500"
      ],
      "correct": 0
     },
     {
      "q": "Why did the tampering cheater score 1.000?",
      "qKn": "tampering ಮೋಸಗಾರ 1.000 ಏಕೆ ಪಡೆದ?",
      "opts": [
       "It emptied the shared tests so the average defaulted to 1.0",
       "It solved the task",
       "The firewall helped",
       "It guessed the key"
      ],
      "optsKn": [
       "ಅದು ಹಂಚಿದ ಪರೀಕ್ಷೆಗಳನ್ನು ಖಾಲಿ ಮಾಡಿದ್ದರಿಂದ ಸರಾಸರಿ 1.0 ಡೀಫಾಲ್ಟ್ ಆಯಿತು",
       "ಅದು ಕಾರ್ಯ ಪರಿಹರಿಸಿತು",
       "firewall ಸಹಾಯ ಮಾಡಿತು",
       "ಅದು ಕೀ ಊಹಿಸಿತು"
      ],
      "correct": 0
     },
     {
      "q": "What did the firewall give equal_cheat?",
      "qKn": "firewall equal_cheat ಗೆ ಏನು ನೀಡಿತು?",
      "opts": [
       "0.000 on training and held-out",
       "1.000",
       "0.091",
       "0.500"
      ],
      "optsKn": [
       "training ಮತ್ತು held-out ನಲ್ಲಿ 0.000",
       "1.000",
       "0.091",
       "0.500"
      ],
      "correct": 0
     },
     {
      "q": "Did a tag made with a guessed key verify?",
      "qKn": "ಊಹಿಸಿದ ಕೀಲಿಯಿಂದ ಮಾಡಿದ ಟ್ಯಾಗ್ ಪರಿಶೀಲಿತವಾಯಿತೇ?",
      "opts": [
       "No, it verified False",
       "Yes",
       "Only for honest records",
       "Only with human approval"
      ],
      "optsKn": [
       "ಇಲ್ಲ, ಅದು False ಎಂದು ಪರಿಶೀಲಿತವಾಯಿತು",
       "ಹೌದು",
       "honest ದಾಖಲೆಗಳಿಗೆ ಮಾತ್ರ",
       "ಮಾನವ ಅನುಮೋದನೆಯೊಂದಿಗೆ ಮಾತ್ರ"
      ],
      "correct": 0
     },
     {
      "q": "What is the limit of the lab HMAC demonstration?",
      "qKn": "ಲ್ಯಾಬ್ HMAC ಪ್ರದರ್ಶನದ ಮಿತಿ ಏನು?",
      "opts": [
       "The key lives in the same process as the code being tested",
       "HMAC cannot detect changes",
       "It needs a language model",
       "It works only for integers"
      ],
      "optsKn": [
       "ಕೀ ಪರೀಕ್ಷಿಸುತ್ತಿರುವ ಕೋಡ್‌ನ ಅದೇ ಪ್ರಕ್ರಿಯೆಯಲ್ಲಿದೆ",
       "HMAC ಬದಲಾವಣೆ ಪತ್ತೆ ಮಾಡಲಾರದು",
       "ಅದಕ್ಕೆ ಭಾಷಾ ಮಾದರಿ ಬೇಕು",
       "ಅದು ಪೂರ್ಣಾಂಕಗಳಿಗೆ ಮಾತ್ರ ಕೆಲಸ ಮಾಡುತ್ತದೆ"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
