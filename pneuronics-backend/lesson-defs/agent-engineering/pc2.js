module.exports = {
 "phaseId": "6a369d6366020ed05b32158c",
 "moduleId": "6a369d6466020ed05b3215b9",
 "order": 1,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Human-in-the-Loop: Propose-Then-Commit (Part 2 of 3) — The Full Workflow",
 "titleKn": "Human-in-the-Loop: Propose-Then-Commit (ಭಾಗ 2 / 3) — ಪೂರ್ಣ ಕಾರ್ಯಪ್ರವಾಹ",
 "desc": "Run the full propose, review, commit and verify workflow through a lost response and a wrong amount.",
 "descKn": "ಪೂರ್ಣ propose, ವಿಮರ್ಶೆ, commit ಮತ್ತು ಪರಿಶೀಲನೆ ಕಾರ್ಯಪ್ರವಾಹವನ್ನು ಕಳೆದ ಪ್ರತಿಕ್ರಿಯೆ ಮತ್ತು ತಪ್ಪು ಮೊತ್ತದ ಮೂಲಕ ಓಡಿಸಿ.",
 "objectives": [
  "Bind approval to a digest.",
  "Reconcile a lost response.",
  "Block an incomplete checklist.",
  "Verify against the record.",
  "Run unit tests."
 ],
 "objectivesKn": [
  "ಅನುಮೋದನೆಯನ್ನು digest ಗೆ ಬಂಧಿಸಿ.",
  "ಕಳೆದ ಪ್ರತಿಕ್ರಿಯೆ ಸಮನ್ವಯಿಸಿ.",
  "ಅಪೂರ್ಣ ಚೆಕ್‌ಲಿಸ್ಟ್ ತಡೆಯಿರಿ.",
  "ದಾಖಲೆಯ ವಿರುದ್ಧ ಪರಿಶೀಲಿಸಿ.",
  "unit ಪರೀಕ್ಷೆ ಓಡಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Human-in-the-Loop: Propose-Then-Commit (Part 2 of 3)",
    "textKn": "Human-in-the-Loop: Propose-Then-Commit (ಭಾಗ 2 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 2 of 3: the full workflow with authorised reviewers, digest-bound approval, a provider whose response can be lost, reconciliation, verification against the provider record and eight unit tests that are run. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind propose-then-commit (digests and idempotency keys, a state machine, a reviewer checklist, digest-bound approval, lost-response reconciliation, post-action verification, atomic claims, expiry, a kill switch, an outbox and a hash-chained audit log), not the real software, and the payment provider is a JSON ledger or a counter, reviewers are plain strings, the clock is a number the lab chooses, the stores have no real locking across processes and nothing is paid or sent, so no real LLM behaviour is measured. The original code/main.py was not supplied and the lesson Part 2 showed its workflow code only in fragments, so the labs are our own full implementation and the expected outputs were produced by running them. The LangGraph interrupt(), Microsoft RequestInfoEvent and Cloudflare waitForApproval() material and the EU AI Act Article 14 remarks are conceptual or cited and were not run here because they need third-party services. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 2ನೆಯದು: ಅಧಿಕೃತ ವಿಮರ್ಶಕರು, digest-ಬಂಧಿತ ಅನುಮೋದನೆ, ಪ್ರತಿಕ್ರಿಯೆ ಕಳೆದುಹೋಗಬಹುದಾದ ಪೂರೈಕೆದಾರ, ಸಮನ್ವಯ, ಪೂರೈಕೆದಾರ ದಾಖಲೆಯ ವಿರುದ್ಧ ಪರಿಶೀಲನೆ ಮತ್ತು ಓಡಿಸಿದ ಎಂಟು unit ಪರೀಕ್ಷೆಗಳೊಂದಿಗೆ ಪೂರ್ಣ ಕಾರ್ಯಪ್ರವಾಹ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು propose-then-commit (digest ಮತ್ತು idempotency key, ಸ್ಥಿತಿ ಯಂತ್ರ, ವಿಮರ್ಶಕ ಚೆಕ್‌ಲಿಸ್ಟ್, digest-ಬಂಧಿತ ಅನುಮೋದನೆ, ಕಳೆದುಹೋದ ಪ್ರತಿಕ್ರಿಯೆಯ ಸಮನ್ವಯ, ಕ್ರಿಯೆಯ ನಂತರದ ಪರಿಶೀಲನೆ, ಪರಮಾಣು claim, ಅವಧಿ ಮುಕ್ತಾಯ, kill switch, outbox ಮತ್ತು hash-ಸರಪಳಿ ಲೆಕ್ಕಪರಿಶೋಧನೆ) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಪಾವತಿ ಪೂರೈಕೆದಾರ JSON ಲೆಡ್ಜರ್ ಅಥವಾ ಕೌಂಟರ್, ವಿಮರ್ಶಕರು ಸರಳ ಸ್ಟ್ರಿಂಗ್‌ಗಳು, ಗಡಿಯಾರ ಲ್ಯಾಬ್ ಆಯ್ಕೆ ಮಾಡುವ ಸಂಖ್ಯೆ, ಸಂಗ್ರಹಗಳಿಗೆ ಪ್ರಕ್ರಿಯೆಗಳ ನಡುವೆ ನಿಜ ಲಾಕಿಂಗ್ ಇಲ್ಲ ಮತ್ತು ಏನೂ ಪಾವತಿಸಲ್ಪಡುವುದಿಲ್ಲ ಅಥವಾ ಕಳುಹಿಸಲ್ಪಡುವುದಿಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ code/main.py ಒದಗಿಸಿರಲಿಲ್ಲ ಮತ್ತು lesson ನ ಭಾಗ 2 ತನ್ನ workflow ಕೋಡ್ ಅನ್ನು ತುಣುಕುಗಳಲ್ಲಿ ಮಾತ್ರ ತೋರಿಸಿತು, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ನಮ್ಮದೇ ಸಂಪೂರ್ಣ ಅನುಷ್ಠಾನ ಮತ್ತು ನಿರೀಕ್ಷಿತ ಔಟ್‌ಪುಟ್ ಅನ್ನು ಅವುಗಳನ್ನು ಓಡಿಸಿ ಪಡೆಯಲಾಗಿದೆ. LangGraph interrupt(), Microsoft RequestInfoEvent ಮತ್ತು Cloudflare waitForApproval() ವಿಷಯ ಮತ್ತು EU AI Act Article 14 ಟಿಪ್ಪಣಿಗಳು ಪರಿಕಲ್ಪನಾತ್ಮಕ ಅಥವಾ ಉಲ್ಲೇಖಿತ ಮತ್ತು ಮೂರನೇ ಪಕ್ಷದ ಸೇವೆಗಳು ಬೇಕಾದ್ದರಿಂದ ಇಲ್ಲಿ ಓಡಿಸಲಾಗಿಲ್ಲ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "What Happens When the Response Is Lost",
    "textKn": "ಪ್ರತಿಕ್ರಿಯೆ ಕಳೆದುಹೋದರೆ ಏನಾಗುತ್ತದೆ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "One Workflow, Five Situations",
    "headingKn": "ಒಂದು ಕಾರ್ಯಪ್ರವಾಹ, ಐದು ಸಂದರ್ಭಗಳು",
    "bodyEn": "The lesson text showed this workflow only in fragments, so this part builds it in full and runs it. A proposal is stored, an authorised reviewer approves it with a complete checklist and the digest they saw, the executor refuses anything that is not approved or whose action changed, and the result is checked against the provider record and not against the response. The lab then runs a clean approval, a response lost after the refund was made, an incomplete checklist, a request lost before it reached the provider and a provider that records a different amount.",
    "bodyKn": "lesson ಪಠ್ಯ ಈ ಕಾರ್ಯಪ್ರವಾಹವನ್ನು ತುಣುಕುಗಳಲ್ಲಿ ಮಾತ್ರ ತೋರಿಸಿತು, ಆದ್ದರಿಂದ ಈ ಭಾಗ ಅದನ್ನು ಸಂಪೂರ್ಣವಾಗಿ ನಿರ್ಮಿಸಿ ಓಡಿಸುತ್ತದೆ. proposal ಸಂಗ್ರಹವಾಗುತ್ತದೆ, ಅಧಿಕೃತ ವಿಮರ್ಶಕ ಸಂಪೂರ್ಣ ಚೆಕ್‌ಲಿಸ್ಟ್ ಮತ್ತು ತಾನು ನೋಡಿದ digest ನೊಂದಿಗೆ ಅನುಮೋದಿಸುತ್ತಾನೆ, executor ಅನುಮೋದಿತವಲ್ಲದ ಅಥವಾ ಕ್ರಿಯೆ ಬದಲಾದ ಯಾವುದನ್ನೂ ನಿರಾಕರಿಸುತ್ತದೆ, ಮತ್ತು ಫಲಿತಾಂಶ ಪ್ರತಿಕ್ರಿಯೆಯ ವಿರುದ್ಧ ಅಲ್ಲ ಪೂರೈಕೆದಾರ ದಾಖಲೆಯ ವಿರುದ್ಧ ಪರಿಶೀಲಿಸಲ್ಪಡುತ್ತದೆ. ನಂತರ ಲ್ಯಾಬ್ ಸ್ವಚ್ಛ ಅನುಮೋದನೆ, ಮರುಪಾವತಿಯ ನಂತರ ಕಳೆದುಹೋದ ಪ್ರತಿಕ್ರಿಯೆ, ಅಪೂರ್ಣ ಚೆಕ್‌ಲಿಸ್ಟ್, ಪೂರೈಕೆದಾರ ತಲುಪುವ ಮೊದಲು ಕಳೆದುಹೋದ ವಿನಂತಿ ಮತ್ತು ಬೇರೆ ಮೊತ್ತ ದಾಖಲಿಸುವ ಪೂರೈಕೆದಾರನನ್ನು ಓಡಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "The Workflow",
    "headingKn": "ಕಾರ್ಯಪ್ರವಾಹ",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">a lost response is reconciled, not retried</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">propose</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">agent writes</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">approve</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">bound to digest</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">commit</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">only if approved</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">verify</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">read the record</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">a lost response is reconciled, not retried</text></svg>",
    "captionEn": "Propose, review, commit, then verify against the provider record.",
    "captionKn": "Propose, ವಿಮರ್ಶೆ, commit, ನಂತರ ಪೂರೈಕೆದಾರ ದಾಖಲೆಯ ವಿರುದ್ಧ ಪರಿಶೀಲನೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "captionEn": "The five situations",
    "captionKn": "ಐದು ಸಂದರ್ಭಗಳು",
    "rows": "Situation|Result\nclean approval|VERIFIED through COMMITTING and VERIFYING\nresponse lost after the refund|RECONCILIATION_REQUIRED, then VERIFIED with no second refund\nincomplete checklist|approval blocked, still PENDING_REVIEW\nrequest lost before the provider|ledger empty, a deliberate retry gives exactly one refund\nprovider records 501 for 500|FAILED"
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
    "filename": "pc_2.py",
    "headingEn": "Stores, review, provider and commit",
    "headingKn": "ಸಂಗ್ರಹಗಳು, ವಿಮರ್ಶೆ, ಪೂರೈಕೆದಾರ ಮತ್ತು commit",
    "descEn": "ReviewService.approve checks the reviewer, the checklist and the digest, SimulatedPaymentProvider can lose a response before or after the effect, and CommitService.commit requires APPROVED, rechecks the digest, reconciles after uncertainty and verifies.",
    "descKn": "ReviewService.approve ವಿಮರ್ಶಕ, ಚೆಕ್‌ಲಿಸ್ಟ್ ಮತ್ತು digest ಪರಿಶೀಲಿಸುತ್ತದೆ, SimulatedPaymentProvider ಪರಿಣಾಮದ ಮೊದಲು ಅಥವಾ ನಂತರ ಪ್ರತಿಕ್ರಿಯೆ ಕಳೆಯಬಹುದು, ಮತ್ತು CommitService.commit APPROVED ಬೇಡುತ್ತದೆ, digest ಮರುಪರಿಶೀಲಿಸುತ್ತದೆ, ಅನಿಶ್ಚಿತತೆಯ ನಂತರ ಸಮನ್ವಯ ಮಾಡುತ್ತದೆ ಮತ್ತು ಪರಿಶೀಲಿಸುತ್ತದೆ.",
    "code": "class ReviewService:\n    def __init__(self, store, authorized):\n        self.store, self.authorized = store, set(authorized)\n\n    def _reviewer(self, rid):\n        if rid not in self.authorized:\n            raise ApprovalError(\"Reviewer is not authorized\")\n\n    def validate_checklist(self, checklist):\n        missing = [n for n in REQUIRED_CHECKS if checklist.get(n) is not True]\n        if missing:\n            raise ApprovalError(\"Missing acknowledgements: \" + \", \".join(missing))\n\n    def approve(self, pid, reviewer_id, checklist, expected_digest):\n        self._reviewer(reviewer_id)\n        self.validate_checklist(checklist)\n        p = self.store.get(pid)\n        if p is None:\n            raise ApprovalError(\"Unknown proposal\")\n        if p[\"action_digest\"] != expected_digest or action_digest(p[\"action\"]) != expected_digest:\n            raise ApprovalError(\"Action digest mismatch\")\n        transition(p, \"APPROVED\")\n        p[\"approved_by\"], p[\"approved_at\"] = reviewer_id, utc_now()\n        p[\"events\"].append({\"at\": utc_now(), \"type\": \"HUMAN_APPROVED\", \"reviewer\": reviewer_id, \"checklist\": checklist})\n        self.store.put(p)\n        return p\n\n    def reject(self, pid, reviewer_id, reason):\n        self._reviewer(reviewer_id)\n        p = self.store.get(pid)\n        transition(p, \"REJECTED\")\n        p[\"events\"].append({\"at\": utc_now(), \"type\": \"HUMAN_REJECTED\", \"reviewer\": reviewer_id, \"reason\": reason})\n        self.store.put(p)\n        return p\n\n\nclass SimulatedPaymentProvider:\n    def __init__(self, ledger_path, corrupt_amount=False):\n        self.path, self.corrupt = ledger_path, corrupt_amount\n\n    def refund(self, key, action, lost_after_effect=False, lost_before_effect=False):\n        if lost_before_effect:\n            raise TransientError(\"Request lost before processing\")\n        ledger = read_json(self.path)\n        if key in ledger:\n            result = ledger[key]\n        else:\n            result = {\"payment_id\": \"PAY-\" + key[:12], \"order_id\": action[\"order_id\"], \"amount\": action[\"amount\"] + (1 if self.corrupt else 0), \"currency\": action[\"currency\"], \"status\": \"REFUNDED\"}\n            ledger[key] = result\n            atomic_write_json(self.path, ledger)\n        if lost_after_effect:\n            raise TransientError(\"Response lost after processing\")\n        return result\n\n    def get_refund(self, key):\n        return read_json(self.path).get(key)\n\n\nclass CommitService:\n    def __init__(self, store, provider):\n        self.store, self.provider = store, provider\n\n    def commit(self, pid, lost_after_effect=False, lost_before_effect=False):\n        p = self.store.get(pid)\n        if p is None:\n            raise ExecutionError(\"Unknown proposal\")\n        if p[\"status\"] == \"VERIFIED\":\n            return p\n        if p[\"status\"] == \"RECONCILIATION_REQUIRED\":\n            return self.reconcile(pid)\n        if p[\"status\"] != \"APPROVED\":\n            raise ExecutionError(\"Positive approval required\")\n        if action_digest(p[\"action\"]) != p[\"action_digest\"]:\n            raise ExecutionError(\"Approved action was modified\")\n        transition(p, \"COMMITTING\")\n        self.store.put(p)\n        try:\n            self.provider.refund(pid, p[\"action\"], lost_after_effect, lost_before_effect)\n        except TransientError:\n            transition(p, \"RECONCILIATION_REQUIRED\")\n            self.store.put(p)\n            return p\n        transition(p, \"VERIFYING\")\n        self.store.put(p)\n        return self.verify(pid)\n\n    def reconcile(self, pid):\n        p = self.store.get(pid)\n        actual = self.provider.get_refund(pid)\n        if actual is None:\n            p[\"events\"].append({\"at\": utc_now(), \"type\": \"RECONCILE_NO_EFFECT_FOUND\"})\n            self.store.put(p)\n            return p\n        transition(p, \"VERIFYING\")\n        self.store.put(p)\n        return self.verify(pid)\n\n    def retry_after_empty_reconcile(self, pid):\n        \"\"\"A deliberate second attempt with the same key, allowed only when reconciliation found no effect.\"\"\"\n        p = self.store.get(pid)\n        self.provider.refund(pid, p[\"action\"])\n        transition(p, \"VERIFYING\")\n        self.store.put(p)\n        return self.verify(pid)\n\n    def verify(self, pid):\n        p = self.store.get(pid)\n        a, actual = p[\"action\"], self.provider.get_refund(pid)\n        ok = actual is not None and actual[\"order_id\"] == a[\"order_id\"] and actual[\"amount\"] == a[\"amount\"] and actual[\"currency\"] == a[\"currency\"] and actual[\"status\"] == \"REFUNDED\"\n        transition(p, \"VERIFIED\" if ok else \"FAILED\")\n        self.store.put(p)\n        return p"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "pc_2.py",
    "headingEn": "main(): experiments",
    "headingKn": "main(): ಪ್ರಯೋಗಗಳು",
    "descEn": "main() runs the five situations and then the eight unit tests.",
    "descKn": "main() ಐದು ಸಂದರ್ಭಗಳನ್ನು ಓಡಿಸಿ ನಂತರ ಎಂಟು unit ಪರೀಕ್ಷೆಗಳನ್ನು ಓಡಿಸುತ್ತದೆ.",
    "code": "def main():\n    with tempfile.TemporaryDirectory() as d:\n        store, svc, rev, exe, prov = build(d)\n        section(\"1. Genuinely running: scenario 1, a clean approval\")\n        p1 = mk(svc, \"thread-001\", \"refund-001\", \"ORDER-100\", 100)\n        print(\"proposal created with status\", p1[\"status\"], \"| stored before review:\", store.get(p1[\"proposal_id\"]) is not None)\n        rev.approve(p1[\"proposal_id\"], \"reviewer-001\", full_checklist(), p1[\"action_digest\"])\n        r1 = exe.commit(p1[\"proposal_id\"])\n        print(\"Final status:\", r1[\"status\"], \"| path:\", \" -> \".join(e[\"to\"] for e in r1[\"events\"] if e[\"type\"] == \"TRANSITION\"))\n        print(\"the proposal is saved while pending, a reviewer with a complete checklist approves it and the executor takes it through committing and verifying to verified, with each step recorded as an event\")\n\n        section(\"2. Genuinely running: scenario 2, a lost response after the refund was made\")\n        p2 = mk(svc, \"thread-002\", \"refund-002\", \"ORDER-200\", 200)\n        dup = mk(svc, \"thread-002\", \"refund-002\", \"ORDER-200\", 200)\n        print(\"Same proposal:\", p2[\"proposal_id\"] == dup[\"proposal_id\"])\n        rev.approve(p2[\"proposal_id\"], \"reviewer-001\", full_checklist(), p2[\"action_digest\"])\n        first = exe.commit(p2[\"proposal_id\"], lost_after_effect=True)\n        print(\"After lost response:\", first[\"status\"], \"| refunds in the ledger:\", len(read_json(prov.path)))\n        second = exe.commit(p2[\"proposal_id\"])\n        print(\"After reconciliation:\", second[\"status\"], \"| refunds in the ledger:\", len(read_json(prov.path)))\n        print(\"the provider recorded the refund before the response was lost, so the executor marked reconciliation required instead of retrying, then found the existing record and verified it; the ledger holds two refunds in total for the two logical operations so far and no refund was made twice\")\n\n        section(\"3. Genuinely running: scenario 3, an incomplete checklist\")\n        p3 = mk(svc, \"thread-003\", \"refund-003\", \"ORDER-300\", 300)\n        try:\n            rev.approve(p3[\"proposal_id\"], \"reviewer-001\", {\"resource_checked\": True, \"blast_radius_checked\": False, \"rollback_checked\": False}, p3[\"action_digest\"])\n        except ApprovalError as e:\n            print(\"Approval blocked:\", e)\n        print(\"status after the blocked attempt:\", store.get(p3[\"proposal_id\"])[\"status\"])\n        rev.approve(p3[\"proposal_id\"], \"reviewer-001\", full_checklist(), p3[\"action_digest\"])\n        print(\"After proper review:\", exe.commit(p3[\"proposal_id\"])[\"status\"])\n        print(\"the incomplete checklist named the two missing acknowledgements and left the proposal pending, and after a complete checklist the same proposal went through to verified; the lesson printed the same sequence but its text was written by hand, and this output comes from running the code\")\n        print(\"FINAL COUNTS | proposals:\", len(store.all()), \"| refund effects:\", len(read_json(prov.path)))\n\n    with tempfile.TemporaryDirectory() as d:\n        section(\"4. Genuinely running: a lost request that never reached the provider\")\n        store, svc, rev, exe, prov = build(d)\n        p = mk(svc, \"thread-004\", \"refund-004\", \"ORDER-400\", 400)\n        rev.approve(p[\"proposal_id\"], \"reviewer-001\", full_checklist(), p[\"action_digest\"])\n        s1 = exe.commit(p[\"proposal_id\"], lost_before_effect=True)[\"status\"]\n        s2 = exe.commit(p[\"proposal_id\"])[\"status\"]\n        print(\"after the lost request:\", s1, \"| after reconcile finds nothing:\", s2, \"| refunds in the ledger:\", len(read_json(prov.path)))\n        s3 = exe.retry_after_empty_reconcile(p[\"proposal_id\"])[\"status\"]\n        print(\"after a deliberate retry with the same key:\", s3, \"| refunds in the ledger:\", len(read_json(prov.path)))\n        print(\"when reconciliation finds no effect the proposal stays in reconciliation required until a retry is chosen on purpose, and the retry reuses the original key so exactly one refund exists afterwards; the lab simulates only the case where the provider has an immediately consistent ledger\")\n\n    with tempfile.TemporaryDirectory() as d:\n        section(\"5. Genuinely running: a provider result that does not match the approval\")\n        store, svc, rev, exe, prov = build(d, corrupt=True)\n        p = mk(svc, \"thread-005\", \"refund-005\", \"ORDER-500\", 500)\n        rev.approve(p[\"proposal_id\"], \"reviewer-001\", full_checklist(), p[\"action_digest\"])\n        res = exe.commit(p[\"proposal_id\"])\n        print(\"status:\", res[\"status\"], \"| provider amount:\", prov.get_refund(p[\"proposal_id\"])[\"amount\"], \"| approved amount:\", res[\"action\"][\"amount\"])\n        print(\"the provider recorded 501 for an approved 500, and the verifier compared the recorded values with the approved action and ended in failed instead of verified, which is why success is checked against the authoritative record and not against the response\")\n\n    section(\"6. Genuinely running: the eight unit tests\")\n    import io\n    stream = io.StringIO()\n    res = unittest.TextTestRunner(stream=stream, verbosity=0).run(unittest.defaultTestLoader.loadTestsFromTestCase(WorkflowTests))\n    print(f\"ran {res.testsRun} tests | failures {len(res.failures)} | errors {len(res.errors)} | passed {res.wasSuccessful()}\")\n    print(\"the tests cover committing a pending or rejected proposal, an unknown reviewer, an action modified after approval, a duplicate proposal, a repeated commit of a verified proposal, an unknown proposal and an illegal transition\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: scenario 1, a clean approval ---\nproposal created with status PENDING_REVIEW | stored before review: True\nFinal status: VERIFIED | path: APPROVED -> COMMITTING -> VERIFYING -> VERIFIED\nthe proposal is saved while pending, a reviewer with a complete checklist approves it and the executor takes it through committing and verifying to verified, with each step recorded as an event\n\n--- 2. Genuinely running: scenario 2, a lost response after the refund was made ---\nSame proposal: True\nAfter lost response: RECONCILIATION_REQUIRED | refunds in the ledger: 2\nAfter reconciliation: VERIFIED | refunds in the ledger: 2\nthe provider recorded the refund before the response was lost, so the executor marked reconciliation required instead of retrying, then found the existing record and verified it; the ledger holds two refunds in total for the two logical operations so far and no refund was made twice\n\n--- 3. Genuinely running: scenario 3, an incomplete checklist ---\nApproval blocked: Missing acknowledgements: blast_radius_checked, rollback_checked\nstatus after the blocked attempt: PENDING_REVIEW\nAfter proper review: VERIFIED\nthe incomplete checklist named the two missing acknowledgements and left the proposal pending, and after a complete checklist the same proposal went through to verified; the lesson printed the same sequence but its text was written by hand, and this output comes from running the code\nFINAL COUNTS | proposals: 3 | refund effects: 3\n\n--- 4. Genuinely running: a lost request that never reached the provider ---\nafter the lost request: RECONCILIATION_REQUIRED | after reconcile finds nothing: RECONCILIATION_REQUIRED | refunds in the ledger: 0\nafter a deliberate retry with the same key: VERIFIED | refunds in the ledger: 1\nwhen reconciliation finds no effect the proposal stays in reconciliation required until a retry is chosen on purpose, and the retry reuses the original key so exactly one refund exists afterwards; the lab simulates only the case where the provider has an immediately consistent ledger\n\n--- 5. Genuinely running: a provider result that does not match the approval ---\nstatus: FAILED | provider amount: 501 | approved amount: 500\nthe provider recorded 501 for an approved 500, and the verifier compared the recorded values with the approved action and ended in failed instead of verified, which is why success is checked against the authoritative record and not against the response\n\n--- 6. Genuinely running: the eight unit tests ---\nran 8 tests | failures 0 | errors 0 | passed True\nthe tests cover committing a pending or rejected proposal, an unknown reviewer, an action modified after approval, a duplicate proposal, a repeated commit of a verified proposal, an unknown proposal and an illegal transition"
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
    "headingEn": "Experiment 1: Scenario 1, a clean approval",
    "headingKn": "ಪ್ರಯೋಗ 1: Scenario 1, a clean approval",
    "bodyEn": "What it ran: Scenario 1, a clean approval. What the lab concluded: the proposal is saved while pending, a reviewer with a complete checklist approves it and the executor takes it through committing and verifying to verified, with each step recorded as an event",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Scenario 1, a clean approval. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the proposal is saved while pending, a reviewer with a complete checklist approves it and the executor takes it through committing and verifying to verified, with each step recorded as an event"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. Genuinely running: scenario 1, a clean approval ---\nproposal created with status PENDING_REVIEW | stored before review: True\nFinal status: VERIFIED | path: APPROVED -> COMMITTING -> VERIFYING -> VERIFIED"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: Scenario 2, a lost response after the refund was made",
    "headingKn": "ಪ್ರಯೋಗ 2: Scenario 2, a lost response after the refund was made",
    "bodyEn": "What it ran: Scenario 2, a lost response after the refund was made. What the lab concluded: the provider recorded the refund before the response was lost, so the executor marked reconciliation required instead of retrying, then found the existing record and verified it; the ledger holds two refunds in total for the two logical operations so far and no refund was made twice",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Scenario 2, a lost response after the refund was made. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the provider recorded the refund before the response was lost, so the executor marked reconciliation required instead of retrying, then found the existing record and verified it; the ledger holds two refunds in total for the two logical operations so far and no refund was made twice"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely running: scenario 2, a lost response after the refund was made ---\nSame proposal: True\nAfter lost response: RECONCILIATION_REQUIRED | refunds in the ledger: 2\nAfter reconciliation: VERIFIED | refunds in the ledger: 2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: Scenario 3, an incomplete checklist",
    "headingKn": "ಪ್ರಯೋಗ 3: Scenario 3, an incomplete checklist",
    "bodyEn": "What it ran: Scenario 3, an incomplete checklist. What the lab concluded: This experiment prints data only; read the lines in the output below.",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Scenario 3, an incomplete checklist. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): This experiment prints data only; read the lines in the output below."
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely running: scenario 3, an incomplete checklist ---\nApproval blocked: Missing acknowledgements: blast_radius_checked, rollback_checked\nstatus after the blocked attempt: PENDING_REVIEW\nAfter proper review: VERIFIED\nthe incomplete checklist named the two missing acknowledgements and left the proposal pending, and after a complete checklist the same proposal went through to verified; the lesson printed the same sequence but its text…\nFINAL COUNTS | proposals: 3 | refund effects: 3"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 4: A lost request that never reached the provider",
    "headingKn": "ಪ್ರಯೋಗ 4: A lost request that never reached the provider",
    "bodyEn": "What it ran: A lost request that never reached the provider. What the lab concluded: when reconciliation finds no effect the proposal stays in reconciliation required until a retry is chosen on purpose, and the retry reuses the original key so exactly one refund exists afterwards; the lab simulates only the case where the provider has an immediately consistent ledger",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A lost request that never reached the provider. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): when reconciliation finds no effect the proposal stays in reconciliation required until a retry is chosen on purpose, and the retry reuses the original key so exactly one refund exists afterwards; the lab simulates only the case where the provider has an immediately consistent ledger"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 4. Genuinely running: a lost request that never reached the provider ---\nafter the lost request: RECONCILIATION_REQUIRED | after reconcile finds nothing: RECONCILIATION_REQUIRED | refunds in the ledger: 0\nafter a deliberate retry with the same key: VERIFIED | refunds in the ledger: 1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 5: A provider result that does not match the approval",
    "headingKn": "ಪ್ರಯೋಗ 5: A provider result that does not match the approval",
    "bodyEn": "What it ran: A provider result that does not match the approval. What the lab concluded: the provider recorded 501 for an approved 500, and the verifier compared the recorded values with the approved action and ended in failed instead of verified, which is why success is checked against the authoritative record and not against the response",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A provider result that does not match the approval. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the provider recorded 501 for an approved 500, and the verifier compared the recorded values with the approved action and ended in failed instead of verified, which is why success is checked against the authoritative record and not against the response"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 5. Genuinely running: a provider result that does not match the approval ---\nstatus: FAILED | provider amount: 501 | approved amount: 500"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 6: The eight unit tests",
    "headingKn": "ಪ್ರಯೋಗ 6: The eight unit tests",
    "bodyEn": "What it ran: The eight unit tests. What the lab concluded: the tests cover committing a pending or rejected proposal, an unknown reviewer, an action modified after approval, a duplicate proposal, a repeated commit of a verified proposal, an unknown proposal and an illegal transition",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: The eight unit tests. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the tests cover committing a pending or rejected proposal, an unknown reviewer, an action modified after approval, a duplicate proposal, a repeated commit of a verified proposal, an unknown proposal and an illegal transition"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 6. Genuinely running: the eight unit tests ---\nran 8 tests | failures 0 | errors 0 | passed True"
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
    "headingEn": "Genuinely Found: Clean, Lost Response, Incomplete Checklist",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಸ್ವಚ್ಛ, ಕಳೆದ ಪ್ರತಿಕ್ರಿಯೆ, ಅಪೂರ್ಣ ಚೆಕ್‌ಲಿಸ್ಟ್",
    "bodyEn": "Section 1: the proposal was stored as PENDING_REVIEW before review and ended VERIFIED through APPROVED, COMMITTING, VERIFYING and VERIFIED. Section 2: the repeated proposal was the same record, after the lost response the status was RECONCILIATION_REQUIRED and the ledger held 2 refunds in total, and after reconciliation it was VERIFIED with still 2. Section 3: approval was blocked with Missing acknowledgements: blast_radius_checked, rollback_checked, the status stayed PENDING_REVIEW and after a complete checklist it reached VERIFIED, with 3 proposals and 3 refund effects at the end.",
    "bodyKn": "ವಿಭಾಗ 1: proposal ವಿಮರ್ಶೆಯ ಮೊದಲು PENDING_REVIEW ಎಂದು ಸಂಗ್ರಹವಾಗಿ APPROVED, COMMITTING, VERIFYING ಮತ್ತು VERIFIED ಮೂಲಕ VERIFIED ಆಗಿ ಮುಗಿಯಿತು. ವಿಭಾಗ 2: ಪುನರಾವರ್ತಿತ proposal ಅದೇ ದಾಖಲೆ, ಕಳೆದ ಪ್ರತಿಕ್ರಿಯೆಯ ನಂತರ ಸ್ಥಿತಿ RECONCILIATION_REQUIRED ಮತ್ತು ಲೆಡ್ಜರ್ ಒಟ್ಟು 2 ಮರುಪಾವತಿ ಹೊಂದಿತ್ತು, ಸಮನ್ವಯದ ನಂತರ ಅದು VERIFIED ಮತ್ತು ಇನ್ನೂ 2. ವಿಭಾಗ 3: ಅನುಮೋದನೆ Missing acknowledgements: blast_radius_checked, rollback_checked ನೊಂದಿಗೆ ತಡೆಯಲ್ಪಟ್ಟಿತು, ಸ್ಥಿತಿ PENDING_REVIEW ಆಗಿ ಉಳಿಯಿತು ಮತ್ತು ಸಂಪೂರ್ಣ ಚೆಕ್‌ಲಿಸ್ಟ್ ನಂತರ VERIFIED ತಲುಪಿತು, ಕೊನೆಗೆ 3 proposal ಮತ್ತು 3 ಮರುಪಾವತಿ ಪರಿಣಾಮ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Lost Request, Wrong Amount and Tests",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಕಳೆದ ವಿನಂತಿ, ತಪ್ಪು ಮೊತ್ತ ಮತ್ತು ಪರೀಕ್ಷೆಗಳು",
    "bodyEn": "Section 4: after a request lost before the provider the status was RECONCILIATION_REQUIRED with 0 refunds, reconciliation found nothing and left it there, and a deliberate retry with the same key gave VERIFIED with exactly 1 refund. Section 5: the provider recorded 501 for an approved 500 and the status was FAILED. Section 6: the eight unit tests ran with 0 failures and 0 errors.",
    "bodyKn": "ವಿಭಾಗ 4: ಪೂರೈಕೆದಾರ ತಲುಪುವ ಮೊದಲು ಕಳೆದ ವಿನಂತಿಯ ನಂತರ ಸ್ಥಿತಿ RECONCILIATION_REQUIRED ಮತ್ತು 0 ಮರುಪಾವತಿ, ಸಮನ್ವಯ ಏನನ್ನೂ ಕಂಡುಕೊಳ್ಳದೆ ಅಲ್ಲೇ ಬಿಟ್ಟಿತು, ಮತ್ತು ಅದೇ key ನೊಂದಿಗೆ ಉದ್ದೇಶಪೂರ್ವಕ ಮರುಪ್ರಯತ್ನ ಸರಿಯಾಗಿ 1 ಮರುಪಾವತಿಯೊಂದಿಗೆ VERIFIED ನೀಡಿತು. ವಿಭಾಗ 5: ಪೂರೈಕೆದಾರ ಅನುಮೋದಿತ 500 ಗೆ 501 ದಾಖಲಿಸಿತು ಮತ್ತು ಸ್ಥಿತಿ FAILED. ವಿಭಾಗ 6: ಎಂಟು unit ಪರೀಕ್ಷೆಗಳು 0 ವೈಫಲ್ಯ ಮತ್ತು 0 ದೋಷದೊಂದಿಗೆ ಓಡಿದವು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A timeout is not a failure, so the executor records an unknown outcome, asks the provider what exists and only then continues, and it judges success from the provider record and not from the response.",
    "bodyKn": "ಟೈಮ್‌ಔಟ್ ವೈಫಲ್ಯವಲ್ಲ, ಆದ್ದರಿಂದ executor ಅಜ್ಞಾತ ಫಲಿತಾಂಶ ದಾಖಲಿಸುತ್ತದೆ, ಪೂರೈಕೆದಾರನಲ್ಲಿ ಏನಿದೆ ಎಂದು ಕೇಳುತ್ತದೆ ಮತ್ತು ಆಗ ಮಾತ್ರ ಮುಂದುವರಿಯುತ್ತದೆ, ಮತ್ತು ಯಶಸ್ಸನ್ನು ಪ್ರತಿಕ್ರಿಯೆಯಿಂದ ಅಲ್ಲ ಪೂರೈಕೆದಾರ ದಾಖಲೆಯಿಂದ ನಿರ್ಣಯಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"an empty reconciliation means it is safe to retry at once.\" The lab left the proposal in RECONCILIATION_REQUIRED until a retry was chosen, and it assumes an immediately consistent ledger.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಖಾಲಿ ಸಮನ್ವಯ ಎಂದರೆ ತಕ್ಷಣ ಮರುಪ್ರಯತ್ನ ಸುರಕ್ಷಿತ.\" ಮರುಪ್ರಯತ್ನ ಆಯ್ಕೆಯಾಗುವವರೆಗೆ ಲ್ಯಾಬ್ proposal ಅನ್ನು RECONCILIATION_REQUIRED ನಲ್ಲಿ ಇಟ್ಟಿತು, ಮತ್ತು ಅದು ತಕ್ಷಣ ಸ್ಥಿರ ಲೆಡ್ಜರ್ ಊಹಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Reconciliation: asking the authority what really happened. Digest binding: approval tied to one action fingerprint. Verification: checking the record against the approved action. Lost response: an effect with no reply.",
    "bodyKn": "ಸಮನ್ವಯ: ವಾಸ್ತವದಲ್ಲಿ ಏನಾಯಿತು ಎಂದು ಅಧಿಕಾರಿಯನ್ನು ಕೇಳುವುದು. Digest ಬಂಧನ: ಒಂದು ಕ್ರಿಯೆಯ ಬೆರಳಚ್ಚಿಗೆ ಜೋಡಿಸಿದ ಅನುಮೋದನೆ. ಪರಿಶೀಲನೆ: ಅನುಮೋದಿತ ಕ್ರಿಯೆಯ ವಿರುದ್ಧ ದಾಖಲೆ ಪರಿಶೀಲಿಸುವುದು. ಕಳೆದ ಪ್ರತಿಕ್ರಿಯೆ: ಉತ್ತರವಿಲ್ಲದ ಪರಿಣಾಮ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) A clean run went through four states to VERIFIED. 2) A lost response ended with 2 refunds in total and no duplicate. 3) A blocked checklist left the proposal pending. 4) An empty reconciliation led to exactly 1 refund after a deliberate retry. 5) 501 against 500 ended FAILED.",
    "bodyKn": "1) ಸ್ವಚ್ಛ ಓಟ ನಾಲ್ಕು ಸ್ಥಿತಿಗಳ ಮೂಲಕ VERIFIED ತಲುಪಿತು. 2) ಕಳೆದ ಪ್ರತಿಕ್ರಿಯೆ ಒಟ್ಟು 2 ಮರುಪಾವತಿಗಳೊಂದಿಗೆ ಮುಗಿಯಿತು, ನಕಲು ಇಲ್ಲ. 3) ತಡೆದ ಚೆಕ್‌ಲಿಸ್ಟ್ proposal ಅನ್ನು ಬಾಕಿ ಇಟ್ಟಿತು. 4) ಖಾಲಿ ಸಮನ್ವಯ ಉದ್ದೇಶಪೂರ್ವಕ ಮರುಪ್ರಯತ್ನದ ನಂತರ ಸರಿಯಾಗಿ 1 ಮರುಪಾವತಿಗೆ ಕಾರಣವಾಯಿತು. 5) 500 ವಿರುದ್ಧ 501 FAILED ಆಗಿ ಮುಗಿಯಿತು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What status followed a response lost after the refund was made?",
      "qKn": "ಮರುಪಾವತಿ ಮಾಡಿದ ನಂತರ ಪ್ರತಿಕ್ರಿಯೆ ಕಳೆದರೆ ಯಾವ ಸ್ಥಿತಿ ಬಂತು?",
      "opts": [
       "RECONCILIATION_REQUIRED",
       "FAILED",
       "APPROVED",
       "REJECTED"
      ],
      "optsKn": [
       "RECONCILIATION_REQUIRED",
       "FAILED",
       "APPROVED",
       "REJECTED"
      ],
      "correct": 0
     },
     {
      "q": "How many refunds did the ledger hold after the lost-response reconciliation?",
      "qKn": "ಕಳೆದ-ಪ್ರತಿಕ್ರಿಯೆ ಸಮನ್ವಯದ ನಂತರ ಲೆಡ್ಜರ್ ಎಷ್ಟು ಮರುಪಾವತಿ ಹೊಂದಿತ್ತು?",
      "opts": [
       "2 in total, no duplicate",
       "3",
       "4",
       "0"
      ],
      "optsKn": [
       "ಒಟ್ಟು 2, ನಕಲು ಇಲ್ಲ",
       "3",
       "4",
       "0"
      ],
      "correct": 0
     },
     {
      "q": "Which acknowledgements were missing in the blocked approval?",
      "qKn": "ತಡೆದ ಅನುಮೋದನೆಯಲ್ಲಿ ಯಾವ ಅಂಗೀಕಾರಗಳು ಕೊರತೆಯಾಗಿದ್ದವು?",
      "opts": [
       "blast_radius_checked and rollback_checked",
       "resource_checked only",
       "all three",
       "none"
      ],
      "optsKn": [
       "blast_radius_checked ಮತ್ತು rollback_checked",
       "resource_checked ಮಾತ್ರ",
       "ಮೂರೂ",
       "ಯಾವುದೂ ಇಲ್ಲ"
      ],
      "correct": 0
     },
     {
      "q": "What status did a provider amount of 501 for an approved 500 produce?",
      "qKn": "ಅನುಮೋದಿತ 500 ಗೆ ಪೂರೈಕೆದಾರ ಮೊತ್ತ 501 ಯಾವ ಸ್ಥಿತಿ ನೀಡಿತು?",
      "opts": [
       "FAILED",
       "VERIFIED",
       "APPROVED",
       "COMMITTING"
      ],
      "optsKn": [
       "FAILED",
       "VERIFIED",
       "APPROVED",
       "COMMITTING"
      ],
      "correct": 0
     },
     {
      "q": "Why does the lab assume an immediately consistent ledger?",
      "qKn": "ಲ್ಯಾಬ್ ತಕ್ಷಣ ಸ್ಥಿರ ಲೆಡ್ಜರ್ ಏಕೆ ಊಹಿಸುತ್ತದೆ?",
      "opts": [
       "A real provider may show an effect late, which the lab does not simulate",
       "Ledgers are always instant",
       "To skip verification",
       "JSON requires it"
      ],
      "optsKn": [
       "ನಿಜ ಪೂರೈಕೆದಾರ ಪರಿಣಾಮವನ್ನು ತಡವಾಗಿ ತೋರಿಸಬಹುದು, ಲ್ಯಾಬ್ ಅದನ್ನು ಅನುಕರಿಸುವುದಿಲ್ಲ",
       "ಲೆಡ್ಜರ್ ಯಾವಾಗಲೂ ತಕ್ಷಣ",
       "ಪರಿಶೀಲನೆ ಬಿಡಲು",
       "JSON ಅದನ್ನು ಬೇಡುತ್ತದೆ"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
