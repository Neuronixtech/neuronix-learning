module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6af75a0777fff3943254255c",
 "order": 2,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Write Specifications That Preserve Judgment (Part 3 of 3) — Authority, Approval and Audit",
 "titleKn": "ವಿವೇಚನೆ ಉಳಿಸುವ ವಿಶೇಷಣಗಳನ್ನು ಬರೆಯಿರಿ (ಭಾಗ 3 / 3) — ಅಧಿಕಾರ, ಅನುಮೋದನೆ ಮತ್ತು ಲೆಕ್ಕಪರಿಶೋಧನೆ",
 "desc": "Enforce decision authority on agent proposals, require signed approvals for production writes and keep a tamper-evident audit trail.",
 "descKn": "agent ಪ್ರಸ್ತಾವಗಳ ಮೇಲೆ ನಿರ್ಧಾರ ಅಧಿಕಾರ ಜಾರಿಗೊಳಿಸಿ, production ಬರಹಗಳಿಗೆ ಸಹಿ ಅನುಮೋದನೆ ಬಯಸಿ ಮತ್ತು ತಿರುಚುವಿಕೆ ತೋರಿಸುವ ಲೆಕ್ಕಪರಿಶೋಧನೆ ದಾಖಲೆ ಇಡಿ.",
 "objectives": [
  "Authorize proposed changes.",
  "Verify signed approvals.",
  "Keep a hash-chained audit trail.",
  "Gate on matching evidence.",
  "Detect self-contradicting specs."
 ],
 "objectivesKn": [
  "ಪ್ರಸ್ತಾವಿತ ಬದಲಾವಣೆಗಳನ್ನು ಅಧಿಕೃತಗೊಳಿಸಿ.",
  "ಸಹಿ ಅನುಮೋದನೆ ಪರಿಶೀಲಿಸಿ.",
  "hash-ಸರಪಳಿ ಲೆಕ್ಕಪರಿಶೋಧನೆ ದಾಖಲೆ ಇಡಿ.",
  "ಹೊಂದುವ ಸಾಕ್ಷ್ಯದ ಮೇಲೆ gate ಮಾಡಿ.",
  "ಸ್ವ-ವಿರೋಧಿ ವಿಶೇಷಣ ಪತ್ತೆ ಮಾಡಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Write Specifications That Preserve Judgment (Part 3 of 3)",
    "textKn": "ವಿವೇಚನೆ ಉಳಿಸುವ ವಿಶೇಷಣಗಳನ್ನು ಬರೆಯಿರಿ (ಭಾಗ 3 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 3 of 3: decision authority enforced on proposed changes, a signed approval for production writes, a tamper-evident audit trail, a verification gate and a self-contradicting specification. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind writing specifications that preserve judgment (six surfaces, decision modes, executable examples, proof matching and approval boundaries), not the real software, and the specifications, support articles and implementations are made up by the lab and no language model is involved, so no real LLM behaviour is measured. The original code/main.py was not supplied, and the lesson text only names its output artifact, so the labs are our own implementation of the behaviour described. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 3ನೆಯದು: ಪ್ರಸ್ತಾವಿತ ಬದಲಾವಣೆಗಳ ಮೇಲೆ ಜಾರಿಗೊಳಿಸಿದ ನಿರ್ಧಾರ ಅಧಿಕಾರ, production ಬರಹಗಳಿಗೆ ಸಹಿ ಮಾಡಿದ ಅನುಮೋದನೆ, ತಿರುಚುವಿಕೆ ತೋರಿಸುವ ಲೆಕ್ಕಪರಿಶೋಧನೆ ದಾಖಲೆ, ಪರಿಶೀಲನೆ gate ಮತ್ತು ತನ್ನನ್ನೇ ವಿರೋಧಿಸುವ ವಿಶೇಷಣ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು ವಿವೇಚನೆ ಉಳಿಸುವ ವಿಶೇಷಣಗಳನ್ನು ಬರೆಯುವುದು (ಆರು ಮೇಲ್ಮೈಗಳು, ನಿರ್ಧಾರ ವಿಧಾನಗಳು, ಕಾರ್ಯಗತ ಉದಾಹರಣೆಗಳು, ಪುರಾವೆ ಹೊಂದಾಣಿಕೆ ಮತ್ತು ಅನುಮೋದನೆ ಗಡಿಗಳು) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ವಿಶೇಷಣಗಳು, ಬೆಂಬಲ ಲೇಖನಗಳು ಮತ್ತು ಅನುಷ್ಠಾನಗಳನ್ನು ಲ್ಯಾಬ್ ಕಲ್ಪಿಸಿದ್ದು ಮತ್ತು ಭಾಷಾ ಮಾದರಿ ಇಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ code/main.py ಒದಗಿಸಿರಲಿಲ್ಲ, ಮತ್ತು lesson ಪಠ್ಯ ಅದರ ಔಟ್‌ಪುಟ್ ಕಲಾಕೃತಿಯನ್ನು ಮಾತ್ರ ಹೆಸರಿಸುತ್ತದೆ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ವಿವರಿಸಿದ ವರ್ತನೆಯ ನಮ್ಮದೇ ಅನುಷ್ಠಾನ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "A Specification Needs Enforcement",
    "textKn": "ವಿಶೇಷಣಕ್ಕೆ ಜಾರಿ ಬೇಕು",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Proposals Are Not Authority",
    "headingKn": "ಪ್ರಸ್ತಾವಗಳು ಅಧಿಕಾರವಲ್ಲ",
    "bodyEn": "The agent proposes changes, and the specification decides whether each is allowed. This part checks proposals against locked, bounded and delegated decisions, requires a signed action-bound approval for a production write, keeps an audit trail whose entries each hash the previous one, gates on evidence matched to claims and finds a specification whose example contradicts its own invariant. The key, bounds and data are made up.",
    "bodyKn": "agent ಬದಲಾವಣೆಗಳನ್ನು ಪ್ರಸ್ತಾಪಿಸುತ್ತದೆ, ಮತ್ತು ಪ್ರತಿಯೊಂದು ಅನುಮತಿಸಲ್ಪಟ್ಟಿದೆಯೇ ಎಂದು ವಿಶೇಷಣ ನಿರ್ಧರಿಸುತ್ತದೆ. ಈ ಭಾಗ ಪ್ರಸ್ತಾವಗಳನ್ನು ಲಾಕ್, ಬೌಂಡೆಡ್ ಮತ್ತು ಡೆಲಿಗೇಟೆಡ್ ನಿರ್ಧಾರಗಳ ವಿರುದ್ಧ ಪರಿಶೀಲಿಸುತ್ತದೆ, production ಬರಹಕ್ಕೆ ಸಹಿ ಮಾಡಿದ ಕ್ರಿಯೆ-ಬಂಧಿತ ಅನುಮೋದನೆ ಬಯಸುತ್ತದೆ, ಪ್ರತಿ ನಮೂದು ಹಿಂದಿನದನ್ನು hash ಮಾಡುವ ಲೆಕ್ಕಪರಿಶೋಧನೆ ದಾಖಲೆ ಇಡುತ್ತದೆ, ಹೇಳಿಕೆಗಳಿಗೆ ಹೊಂದಿದ ಸಾಕ್ಷ್ಯದ ಮೇಲೆ gate ಮಾಡುತ್ತದೆ ಮತ್ತು ತನ್ನ ಉದಾಹರಣೆ ತನ್ನದೇ invariant ಗೆ ವಿರುದ್ಧವಾಗಿರುವ ವಿಶೇಷಣ ಕಂಡುಹಿಡಿಯುತ್ತದೆ. ಕೀಲಿ, ಮಿತಿಗಳು ಮತ್ತು ದತ್ತಾಂಶ ಕಲ್ಪಿತ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Authority, Approval and Audit",
    "headingKn": "ಅಧಿಕಾರ, ಅನುಮೋದನೆ ಮತ್ತು ಲೆಕ್ಕಪರಿಶೋಧನೆ",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">authority, approval and audit hold outside the agent</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">authority</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">locked/bounded</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">approval</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">signed, bound</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">audit</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">hash chain</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">gate</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">evidence matches</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">authority, approval and audit hold outside the agent</text></svg>",
    "captionEn": "Authority, approval and audit are enforced outside the agent.",
    "captionKn": "ಅಧಿಕಾರ, ಅನುಮೋದನೆ ಮತ್ತು ಲೆಕ್ಕಪರಿಶೋಧನೆ agent ಹೊರಗೆ ಜಾರಿಯಾಗುತ್ತವೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Policy used in the lab",
    "headingKn": "ಲ್ಯಾಬ್‌ನಲ್ಲಿ ಬಳಸಿದ ನೀತಿ",
    "headers": [
     "Decision",
     "Mode",
     "Detail"
    ],
    "rows": [
     [
      "index_choice",
      "delegated",
      "agent decides"
     ],
     [
      "cache_ttl_s",
      "bounded",
      "30 to 600 seconds"
     ],
     [
      "response_format",
      "locked",
      "owner only"
     ],
     [
      "production_write",
      "locked",
      "needs signed approval"
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
    "filename": "sp_3.py",
    "headingEn": "Authorization, signed approval, audit and gate",
    "headingKn": "ಅಧಿಕಾರ, ಸಹಿ ಅನುಮೋದನೆ, ಲೆಕ್ಕಪರಿಶೋಧನೆ ಮತ್ತು gate",
    "descEn": "authorize applies the policy to a proposed change, approved verifies an HMAC bound to the action and approver and refuses malformed records, Audit chains entry hashes and verify recomputes them, and gate blocks when evidence is missing or of the wrong kind.",
    "descKn": "authorize ನೀತಿಯನ್ನು ಪ್ರಸ್ತಾವಿತ ಬದಲಾವಣೆಗೆ ಅನ್ವಯಿಸುತ್ತದೆ, approved ಕ್ರಿಯೆ ಮತ್ತು ಅನುಮೋದಕನಿಗೆ ಬಂಧಿತ HMAC ಪರಿಶೀಲಿಸಿ ದೋಷಪೂರ್ಣ ದಾಖಲೆ ನಿರಾಕರಿಸುತ್ತದೆ, Audit ನಮೂದು hash ಗಳನ್ನು ಸರಪಳಿ ಮಾಡುತ್ತದೆ ಮತ್ತು verify ಅವನ್ನು ಮರುಲೆಕ್ಕ ಹಾಕುತ್ತದೆ, ಮತ್ತು gate ಸಾಕ್ಷ್ಯ ಕಾಣೆಯಾದಾಗ ಅಥವಾ ತಪ್ಪು ರೀತಿಯದಾದಾಗ ತಡೆಯುತ್ತದೆ.",
    "code": "def authorize(change, policy=POLICY):\n    name, value = change[\"name\"], change.get(\"value\")\n    p = policy.get(name)\n    if p is None:\n        return False, \"decision is not in the specification\"\n    if p[\"mode\"] == \"locked\":\n        return False, \"locked decision; changes need the owner\"\n    if p[\"mode\"] == \"bounded\":\n        lo, hi = p[\"bounds\"]\n        return (lo <= value <= hi), f\"bounded to {lo}..{hi}\"\n    return True, \"delegated\"\n\n\ndef sign(action, approver):\n    return hmac.new(KEY, f\"{action}|{approver}\".encode(), hashlib.sha256).hexdigest()\n\n\ndef approved(record, action):\n    if record.get(\"action\") != action or not record.get(\"approver\") or not record.get(\"sig\"):\n        return False\n    return hmac.compare_digest(sign(record[\"action\"], record[\"approver\"]), record[\"sig\"])\n\n\nclass Audit:\n    def __init__(self):\n        self.entries, self.prev = [], \"0\" * 12\n\n    def add(self, event):\n        h = hashlib.sha256((self.prev + json.dumps(event, sort_keys=True)).encode()).hexdigest()[:12]\n        self.entries.append({\"event\": event, \"hash\": h, \"prev\": self.prev})\n        self.prev = h\n\n    def verify(self):\n        prev = \"0\" * 12\n        for e in self.entries:\n            if e[\"prev\"] != prev or hashlib.sha256((prev + json.dumps(e[\"event\"], sort_keys=True)).encode()).hexdigest()[:12] != e[\"hash\"]:\n                return False\n            prev = e[\"hash\"]\n        return True\n\n\ndef gate(claims, evidence, proof):\n    problems = [c for c in claims if proof.get(c) != evidence.get(c)]\n    return (\"PASS\" if not problems else \"BLOCK\"), problems\n\n\ndef conflicts(invariants, examples):\n    return [(i, e) for i in invariants for e in examples if i == \"no private data\" and e.get(\"returns_email\")]"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "sp_3.py",
    "headingEn": "main(): five experiments",
    "headingKn": "main(): ಐದು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() authorizes five changes, tests four approval records, edits an audit trail, gates matching and non-matching evidence and checks one specification for a conflict.",
    "descKn": "main() ಐದು ಬದಲಾವಣೆ ಅಧಿಕೃತಗೊಳಿಸಿ, ನಾಲ್ಕು ಅನುಮೋದನೆ ದಾಖಲೆ ಪರೀಕ್ಷಿಸಿ, ಲೆಕ್ಕಪರಿಶೋಧನೆ ದಾಖಲೆ ಸಂಪಾದಿಸಿ, ಹೊಂದುವ ಮತ್ತು ಹೊಂದದ ಸಾಕ್ಷ್ಯ gate ಮಾಡಿ ಮತ್ತು ಒಂದು ವಿಶೇಷಣವನ್ನು ಸಂಘರ್ಷಕ್ಕಾಗಿ ಪರಿಶೀಲಿಸುತ್ತದೆ.",
    "code": "def main():\n    section(\"1. Genuinely running: authority is enforced on proposed changes\")\n    for ch in ({\"name\": \"index_choice\", \"value\": \"bm25\"}, {\"name\": \"cache_ttl_s\", \"value\": 120}, {\"name\": \"cache_ttl_s\", \"value\": 5000}, {\"name\": \"response_format\", \"value\": \"v2\"}, {\"name\": \"retry_count\", \"value\": 3}):\n        print(f\"{ch['name']:16} value={ch['value']!s:6} -> {authorize(ch)}\")\n    print(\"a delegated choice and an in-range bounded value were allowed, an out-of-range value and a locked decision were refused, and a change to something the specification never named was refused too; the bounds are invented\")\n\n    section(\"2. Genuinely running: a production write needs a signed, action-bound approval\")\n    rec = {\"action\": \"production_write\", \"approver\": \"owner-1\", \"sig\": sign(\"production_write\", \"owner-1\")}\n    print(\"valid approval:\", approved(rec, \"production_write\"))\n    print(\"same record for another action:\", approved(rec, \"delete_data\"))\n    print(\"approver edited:\", approved(dict(rec, approver=\"agent\"), \"production_write\"))\n    print(\"an agent-set flag:\", approved({\"action\": \"production_write\", \"approved\": True}, \"production_write\"))\n    print(\"only the record signed for this action and approver counted, and the flag record with no approver or signature was refused; a first version of this check raised a KeyError on that record instead of refusing it, which would have turned a malformed approval into a crash; the key is a constant made up for the lab, and a real one must live where the agent cannot read it\")\n\n    section(\"3. Genuinely running: an audit trail that shows edits\")\n    a = Audit()\n    a.add({\"change\": \"cache_ttl_s\", \"to\": 120, \"by\": \"agent\"})\n    a.add({\"change\": \"index_choice\", \"to\": \"bm25\", \"by\": \"agent\"})\n    a.add({\"approval\": \"production_write\", \"by\": \"owner-1\"})\n    print(\"entries:\", len(a.entries), \"| verifies:\", a.verify())\n    a.entries[1][\"event\"][\"to\"] = \"tf-idf\"\n    print(\"after editing entry 1 in place | verifies:\", a.verify())\n    print(\"each entry hashes the one before it, so an after-the-fact edit breaks the chain from that point; this detects edits to the list and does not stop someone from rewriting every entry and hash together, which needs the hashes held somewhere else\")\n\n    section(\"4. Genuinely running: a verification gate over claims and evidence\")\n    proof = {\"no private data\": \"forbidden example\", \"response format kept\": \"contract test\", \"within two seconds\": \"latency measurement\"}\n    ev_ok = dict(proof)\n    ev_bad = {\"no private data\": \"latency measurement\", \"response format kept\": \"contract test\"}\n    print(\"matching evidence:\", gate(list(proof), ev_ok, proof))\n    print(\"wrong and missing evidence:\", gate(list(proof), ev_bad, proof))\n    print(\"a claim is blocked when its evidence is of the wrong kind or absent, so a passing run of unrelated tests does not open the gate\")\n\n    section(\"5. Genuinely running: a specification that contradicts itself\")\n    print(\"conflict found:\", conflicts([\"no private data\"], [{\"name\": \"support lookup\", \"returns_email\": True}]))\n    print(\"no conflict   :\", conflicts([\"no private data\"], [{\"name\": \"support lookup\", \"returns_email\": False}]))\n    print(\"an example that returns an email address contradicts the invariant that forbids private data, and the check reports the pair before anyone builds to it; the rule here knows only one invariant and one field, which is a stand-in for a real consistency check\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: authority is enforced on proposed changes ---\nindex_choice     value=bm25   -> (True, 'delegated')\ncache_ttl_s      value=120    -> (True, 'bounded to 30..600')\ncache_ttl_s      value=5000   -> (False, 'bounded to 30..600')\nresponse_format  value=v2     -> (False, 'locked decision; changes need the owner')\nretry_count      value=3      -> (False, 'decision is not in the specification')\na delegated choice and an in-range bounded value were allowed, an out-of-range value and a locked decision were refused, and a change to something the specification never named was refused too; the bounds are invented\n\n--- 2. Genuinely running: a production write needs a signed, action-bound approval ---\nvalid approval: True\nsame record for another action: False\napprover edited: False\nan agent-set flag: False\nonly the record signed for this action and approver counted, and the flag record with no approver or signature was refused; a first version of this check raised a KeyError on that record instead of refusing it, which would have turned a malformed approval into a crash; the key is a constant made up for the lab, and a real one must live where the agent cannot read it\n\n--- 3. Genuinely running: an audit trail that shows edits ---\nentries: 3 | verifies: True\nafter editing entry 1 in place | verifies: False\neach entry hashes the one before it, so an after-the-fact edit breaks the chain from that point; this detects edits to the list and does not stop someone from rewriting every entry and hash together, which needs the hashes held somewhere else\n\n--- 4. Genuinely running: a verification gate over claims and evidence ---\nmatching evidence: ('PASS', [])\nwrong and missing evidence: ('BLOCK', ['no private data', 'within two seconds'])\na claim is blocked when its evidence is of the wrong kind or absent, so a passing run of unrelated tests does not open the gate\n\n--- 5. Genuinely running: a specification that contradicts itself ---\nconflict found: [('no private data', {'name': 'support lookup', 'returns_email': True})]\nno conflict   : []\nan example that returns an email address contradicts the invariant that forbids private data, and the check reports the pair before anyone builds to it; the rule here knows only one invariant and one field, which is a stand-in for a real consistency check"
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
    "headingEn": "Genuinely Found: Delegated and In-Range Allowed, the Rest Refused",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಡೆಲಿಗೇಟೆಡ್ ಮತ್ತು ವ್ಯಾಪ್ತಿಯೊಳಗಿನದು ಅನುಮತಿ, ಉಳಿದದ್ದು ನಿರಾಕರಣೆ",
    "bodyEn": "Section 1: index_choice (delegated) and cache_ttl_s 120 (within 30 to 600) were allowed, cache_ttl_s 5000, the locked response_format and the unnamed retry_count were refused. Section 2: the signed record was valid, failed for another action and with the approver edited to agent, and a flag record with no approver or signature was refused after a first version crashed on it with a KeyError.",
    "bodyKn": "ವಿಭಾಗ 1: index_choice (ಡೆಲಿಗೇಟೆಡ್) ಮತ್ತು cache_ttl_s 120 (30 ರಿಂದ 600 ರೊಳಗೆ) ಅನುಮತಿಸಲಾಯಿತು, cache_ttl_s 5000, ಲಾಕ್ ಮಾಡಿದ response_format ಮತ್ತು ಹೆಸರಿಸದ retry_count ನಿರಾಕರಿಸಲಾಯಿತು. ವಿಭಾಗ 2: ಸಹಿ ದಾಖಲೆ ಮಾನ್ಯವಾಗಿತ್ತು, ಬೇರೆ ಕ್ರಿಯೆಗೆ ಮತ್ತು ಅನುಮೋದಕನನ್ನು agent ಗೆ ಸಂಪಾದಿಸಿದಾಗ ವಿಫಲವಾಯಿತು, ಮತ್ತು ಅನುಮೋದಕ ಅಥವಾ ಸಹಿ ಇಲ್ಲದ ಧ್ವಜ ದಾಖಲೆ ನಿರಾಕರಿಸಲಾಯಿತು, ಮೊದಲ ಆವೃತ್ತಿ ಅದರಲ್ಲಿ KeyError ನೊಂದಿಗೆ ಕ್ರ್ಯಾಶ್ ಆದ ನಂತರ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: An Edited Audit Entry, a Wrong-Kind Proof and a Contradiction",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಸಂಪಾದಿತ ಲೆಕ್ಕಪರಿಶೋಧನೆ ನಮೂದು, ತಪ್ಪು-ರೀತಿಯ ಪುರಾವೆ ಮತ್ತು ವಿರೋಧಾಭಾಸ",
    "bodyEn": "Section 3: three entries verified, and editing entry 1 in place made verification fail, though rewriting every entry and hash together would not be detected. Section 4: matching evidence gave PASS and a latency number for the privacy claim plus a missing speed proof gave BLOCK for both claims. Section 5: an example returning an email address was reported as contradicting the invariant \"no private data\", and the same example with returns_email False was not.",
    "bodyKn": "ವಿಭಾಗ 3: ಮೂರು ನಮೂದುಗಳು ಪರಿಶೀಲನೆ ಆದವು, ಮತ್ತು ನಮೂದು 1 ಅನ್ನು ಅಲ್ಲೇ ಸಂಪಾದಿಸಿದ್ದು ಪರಿಶೀಲನೆ ವಿಫಲಗೊಳಿಸಿತು, ಆದರೆ ಪ್ರತಿ ನಮೂದು ಮತ್ತು hash ಅನ್ನು ಒಟ್ಟಿಗೆ ಪುನಃ ಬರೆದರೆ ಪತ್ತೆಯಾಗುವುದಿಲ್ಲ. ವಿಭಾಗ 4: ಹೊಂದುವ ಸಾಕ್ಷ್ಯ PASS ನೀಡಿತು ಮತ್ತು ಗೌಪ್ಯತೆ ಹೇಳಿಕೆಗೆ latency ಸಂಖ್ಯೆ ಹಾಗೂ ಕಾಣೆಯಾದ ವೇಗ ಪುರಾವೆ ಎರಡೂ ಹೇಳಿಕೆಗಳಿಗೆ BLOCK ನೀಡಿತು. ವಿಭಾಗ 5: ಇಮೇಲ್ ವಿಳಾಸ ಮರಳಿಸುವ ಉದಾಹರಣೆ invariant \"no private data\" ವಿರೋಧಿಸುತ್ತದೆ ಎಂದು ವರದಿಯಾಯಿತು, ಮತ್ತು returns_email False ಇರುವ ಅದೇ ಉದಾಹರಣೆ ವರದಿಯಾಗಲಿಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "Proposals from an agent are not decisions, so authority, approval and audit have to hold outside anything the agent can edit.",
    "bodyKn": "agent ನ ಪ್ರಸ್ತಾವಗಳು ನಿರ್ಧಾರಗಳಲ್ಲ, ಆದ್ದರಿಂದ ಅಧಿಕಾರ, ಅನುಮೋದನೆ ಮತ್ತು ಲೆಕ್ಕಪರಿಶೋಧನೆ agent ಸಂಪಾದಿಸಬಲ್ಲ ಯಾವುದರ ಹೊರಗೂ ಉಳಿಯಬೇಕು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"an audit chain makes the log tamper-proof.\" It only shows edits to entries, not a full rewrite.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಲೆಕ್ಕಪರಿಶೋಧನೆ ಸರಪಳಿ ದಾಖಲೆಯನ್ನು ತಿರುಚಲಾಗದಂತೆ ಮಾಡುತ್ತದೆ.\" ಅದು ನಮೂದುಗಳ ಸಂಪಾದನೆ ಮಾತ್ರ ತೋರಿಸುತ್ತದೆ, ಪೂರ್ಣ ಪುನರ್ಲೇಖನ ಅಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Authorization: checking a proposal against the policy. Signed approval: a record bound to an action and approver. Hash chain: each entry hashes the previous. Verification gate: blocks without matching evidence.",
    "bodyKn": "Authorization: ನೀತಿಯ ವಿರುದ್ಧ ಪ್ರಸ್ತಾವ ಪರಿಶೀಲಿಸುವುದು. Signed approval: ಕ್ರಿಯೆ ಮತ್ತು ಅನುಮೋದಕನಿಗೆ ಬಂಧಿತ ದಾಖಲೆ. Hash chain: ಪ್ರತಿ ನಮೂದು ಹಿಂದಿನದನ್ನು hash ಮಾಡುತ್ತದೆ. Verification gate: ಹೊಂದುವ ಸಾಕ್ಷ್ಯವಿಲ್ಲದೆ ತಡೆಯುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) Locked and out-of-range changes were refused. 2) Only a signed, action-bound approval counted. 3) An edited audit entry broke the chain. 4) Wrong-kind evidence blocked. 5) A contradictory example was found.",
    "bodyKn": "1) ಲಾಕ್ ಮತ್ತು ವ್ಯಾಪ್ತಿ ಮೀರಿದ ಬದಲಾವಣೆ ನಿರಾಕರಿಸಲಾಯಿತು. 2) ಸಹಿ ಮಾಡಿದ, ಕ್ರಿಯೆ-ಬಂಧಿತ ಅನುಮೋದನೆ ಮಾತ್ರ ಪರಿಗಣಿತ. 3) ಸಂಪಾದಿತ ಲೆಕ್ಕಪರಿಶೋಧನೆ ನಮೂದು ಸರಪಳಿ ಮುರಿಯಿತು. 4) ತಪ್ಪು-ರೀತಿಯ ಸಾಕ್ಷ್ಯ ತಡೆಯಿತು. 5) ವಿರೋಧಾತ್ಮಕ ಉದಾಹರಣೆ ಕಂಡುಬಂದಿತು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What happened to cache_ttl_s = 5000?",
      "qKn": "cache_ttl_s = 5000 ಗೆ ಏನಾಯಿತು?",
      "opts": [
       "Refused as outside 30 to 600",
       "Allowed",
       "Delegated",
       "Signed"
      ],
      "optsKn": [
       "30 ರಿಂದ 600 ರ ಹೊರಗಿರುವುದರಿಂದ ನಿರಾಕರಿಸಲಾಯಿತು",
       "ಅನುಮತಿಸಲಾಯಿತು",
       "ಡೆಲಿಗೇಟ್ ಆಯಿತು",
       "ಸಹಿ ಆಯಿತು"
      ],
      "correct": 0
     },
     {
      "q": "What happened to the flag record with no approver?",
      "qKn": "ಅನುಮೋದಕನಿಲ್ಲದ ಧ್ವಜ ದಾಖಲೆಗೆ ಏನಾಯಿತು?",
      "opts": [
       "It was refused",
       "It was approved",
       "It was signed",
       "It was deleted"
      ],
      "optsKn": [
       "ಅದನ್ನು ನಿರಾಕರಿಸಲಾಯಿತು",
       "ಅದು ಅನುಮೋದನೆ ಪಡೆಯಿತು",
       "ಅದಕ್ಕೆ ಸಹಿ ಆಯಿತು",
       "ಅದನ್ನು ಅಳಿಸಲಾಯಿತು"
      ],
      "correct": 0
     },
     {
      "q": "What did editing audit entry 1 do?",
      "qKn": "ಲೆಕ್ಕಪರಿಶೋಧನೆ ನಮೂದು 1 ಸಂಪಾದಿಸಿದ್ದು ಏನು ಮಾಡಿತು?",
      "opts": [
       "Verification failed",
       "Nothing",
       "It was signed",
       "It was merged"
      ],
      "optsKn": [
       "ಪರಿಶೀಲನೆ ವಿಫಲವಾಯಿತು",
       "ಏನೂ ಇಲ್ಲ",
       "ಅದಕ್ಕೆ ಸಹಿ ಆಯಿತು",
       "ಅದು ವಿಲೀನವಾಯಿತು"
      ],
      "correct": 0
     },
     {
      "q": "Which claims blocked in the wrong-evidence gate?",
      "qKn": "ತಪ್ಪು-ಸಾಕ್ಷ್ಯ gate ನಲ್ಲಿ ಯಾವ ಹೇಳಿಕೆಗಳು ತಡೆಯಲ್ಪಟ್ಟವು?",
      "opts": [
       "no private data and within two seconds",
       "response format kept",
       "All three",
       "None"
      ],
      "optsKn": [
       "no private data ಮತ್ತು within two seconds",
       "response format kept",
       "ಮೂರೂ",
       "ಯಾವುದೂ ಇಲ್ಲ"
      ],
      "correct": 0
     },
     {
      "q": "What does the hash chain not stop?",
      "qKn": "hash ಸರಪಳಿ ಯಾವುದನ್ನು ತಡೆಯುವುದಿಲ್ಲ?",
      "opts": [
       "Rewriting every entry and hash together",
       "Editing one entry",
       "Deleting one entry",
       "Reordering entries"
      ],
      "optsKn": [
       "ಪ್ರತಿ ನಮೂದು ಮತ್ತು hash ಅನ್ನು ಒಟ್ಟಿಗೆ ಪುನಃ ಬರೆಯುವುದು",
       "ಒಂದು ನಮೂದು ಸಂಪಾದಿಸುವುದು",
       "ಒಂದು ನಮೂದು ಅಳಿಸುವುದು",
       "ನಮೂದುಗಳ ಮರುಕ್ರಮ"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
