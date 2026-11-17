module.exports = {
 "phaseId": "6a369d6366020ed05b32158c",
 "moduleId": "6a369d6466020ed05b3215c2",
 "order": 2,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Llama Guard and Input/Output Classification (Part 3 of 3) — Layers Around the Guard",
 "titleKn": "Llama Guard ಮತ್ತು ಇನ್‌ಪುಟ್/ಔಟ್‌ಪುಟ್ ವರ್ಗೀಕರಣ (ಭಾಗ 3 / 3) — Guard ಸುತ್ತಲಿನ ಪದರಗಳು",
 "desc": "Wrap a keyword guard in permission, ownership, approval and output layers and break each on purpose.",
 "descKn": "keyword guard ಅನ್ನು ಅನುಮತಿ, ಮಾಲೀಕತ್ವ, ಅನುಮೋದನೆ ಮತ್ತು ಔಟ್‌ಪುಟ್ ಪದರಗಳಲ್ಲಿ ಸುತ್ತಿ ಪ್ರತಿಯೊಂದನ್ನು ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ಒಡೆಯಿರಿ.",
 "objectives": [
  "Check object ownership.",
  "Require approval before commit.",
  "Fail closed on error.",
  "Escalate repeated denials.",
  "Guard the output."
 ],
 "objectivesKn": [
  "ವಸ್ತು ಮಾಲೀಕತ್ವ ಪರಿಶೀಲಿಸಿ.",
  "commit ಮೊದಲು ಅನುಮೋದನೆ ಬೇಡಿ.",
  "ದೋಷದಲ್ಲಿ fail closed ಮಾಡಿ.",
  "ಪುನರಾವರ್ತಿತ ನಿರಾಕರಣೆ ಉಲ್ಬಣಗೊಳಿಸಿ.",
  "ಔಟ್‌ಪುಟ್ ಕಾಯಿರಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Llama Guard and Input/Output Classification (Part 3 of 3)",
    "textKn": "Llama Guard ಮತ್ತು ಇನ್‌ಪುಟ್/ಔಟ್‌ಪುಟ್ ವರ್ಗೀಕರಣ (ಭಾಗ 3 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 3 of 3: a guarded agent with input checks, permissions, an ownership check, a proposal with approval and an idempotent commit, fail-closed handling, session escalation, the content-derived key problem, a dialog rail and six unit tests that are run. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind Llama Guard and input/output classification (a toy phrase classifier, classification against enforcement, substring and word-boundary matching, a confusion matrix, Unicode look-alikes and inserted symbols, normalisation steps, input and output guards, fail-closed handling, session escalation and a dialog rail), not the real software, and the classifier is a phrase matcher and not Llama Guard, the sentinel phrase is harmless, the labelled set and policies are written by the lab author, identity is a string and all state is in memory, so no real LLM behaviour is measured. The original code/main.py was not supplied and the lesson code was shown only in fragments, so the labs are our own implementation and the outputs were produced by running them. No Llama Guard model, NeMo Guardrails or Colang was run, and the lesson statements about Llama Guard 3 and 4, the MLCommons taxonomy, the 30 tokens per second figure and the cited attack success rates are conceptual or cited and were not measured here. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 3ನೆಯದು: ಇನ್‌ಪುಟ್ ಪರಿಶೀಲನೆ, ಅನುಮತಿಗಳು, ಮಾಲೀಕತ್ವ ಪರಿಶೀಲನೆ, ಅನುಮೋದನೆ ಇರುವ proposal ಮತ್ತು idempotent commit ಇರುವ ಸಂರಕ್ಷಿತ agent, fail-closed ನಿರ್ವಹಣೆ, ಸೆಶನ್ ಉಲ್ಬಣ, ವಿಷಯ-ಉತ್ಪನ್ನ key ಸಮಸ್ಯೆ, dialog rail ಮತ್ತು ಓಡಿಸಿದ ಆರು unit ಪರೀಕ್ಷೆಗಳು. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು Llama Guard ಮತ್ತು ಇನ್‌ಪುಟ್/ಔಟ್‌ಪುಟ್ ವರ್ಗೀಕರಣ (ಆಟಿಕೆ ಪದಗುಚ್ಛ ವರ್ಗೀಕಾರಕ, ವರ್ಗೀಕರಣ ಮತ್ತು ಜಾರಿ, substring ಮತ್ತು ಪದ-ಗಡಿ ಹೊಂದಾಣಿಕೆ, confusion matrix, Unicode ಹೋಲಿಕೆ ಅಕ್ಷರಗಳು ಮತ್ತು ಸೇರಿಸಿದ ಚಿಹ್ನೆಗಳು, ಸಾಮಾನ್ಯೀಕರಣ ಹಂತಗಳು, ಇನ್‌ಪುಟ್ ಮತ್ತು ಔಟ್‌ಪುಟ್ guards, fail-closed ನಿರ್ವಹಣೆ, ಸೆಶನ್ ಉಲ್ಬಣ ಮತ್ತು dialog rail) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ವರ್ಗೀಕಾರಕ ಪದಗುಚ್ಛ ಹೊಂದಿಸುವ ಸಾಧನ, Llama Guard ಅಲ್ಲ, sentinel ಪದಗುಚ್ಛ ಹಾನಿರಹಿತ, ಲೇಬಲ್ ಮಾಡಿದ ಸೆಟ್ ಮತ್ತು ನೀತಿಗಳನ್ನು ಲ್ಯಾಬ್ ಲೇಖಕ ಬರೆದಿದ್ದಾರೆ, ಗುರುತು ಒಂದು ಸ್ಟ್ರಿಂಗ್ ಮತ್ತು ಎಲ್ಲಾ ಸ್ಥಿತಿ ಮೆಮೊರಿಯಲ್ಲಿದೆ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ code/main.py ಒದಗಿಸಿರಲಿಲ್ಲ ಮತ್ತು lesson ಕೋಡ್ ತುಣುಕುಗಳಲ್ಲಿ ಮಾತ್ರ ತೋರಿಸಲ್ಪಟ್ಟಿತು, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ನಮ್ಮದೇ ಅನುಷ್ಠಾನ ಮತ್ತು ಔಟ್‌ಪುಟ್ ಅನ್ನು ಅವನ್ನು ಓಡಿಸಿ ಪಡೆಯಲಾಗಿದೆ. ಯಾವುದೇ Llama Guard ಮಾದರಿ, NeMo Guardrails ಅಥವಾ Colang ಓಡಿಸಲಾಗಿಲ್ಲ, ಮತ್ತು Llama Guard 3 ಮತ್ತು 4, MLCommons ವರ್ಗೀಕರಣ, ಸೆಕೆಂಡಿಗೆ 30 tokens ಅಂಕಿ ಮತ್ತು ಉಲ್ಲೇಖಿತ ದಾಳಿ ಯಶಸ್ಸು ದರಗಳ ಬಗ್ಗೆ lesson ಹೇಳಿಕೆಗಳು ಪರಿಕಲ್ಪನಾತ್ಮಕ ಅಥವಾ ಉಲ್ಲೇಖಿತ ಮತ್ತು ಇಲ್ಲಿ ಅಳೆಯಲಾಗಿಲ್ಲ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Passing the Classifier Does Not Authorise the Action",
    "textKn": "ವರ್ಗೀಕಾರಕ ಹಾದುಹೋಗುವುದು ಕ್ರಿಯೆಗೆ ಅಧಿಕಾರ ನೀಡುವುದಿಲ್ಲ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Layers Around a Keyword Guard",
    "headingKn": "Keyword Guard ಸುತ್ತಲಿನ ಪದರಗಳು",
    "bodyEn": "This part wraps the toy guard in the layers a request meets in an application: a permission check, an ownership check on the object, a refund proposal that waits for approval, an idempotent commit and an output check. It then breaks the design on purpose: a classifier that throws an error, repeated denied attempts, a key derived only from content that collapses two real refunds, and a confirmation that a user claims was already checked. A dialog rail is shown as a hand-written state check, and NeMo Guardrails and Colang were not run.",
    "bodyKn": "ಈ ಭಾಗ ಆಟಿಕೆ guard ಅನ್ನು ಅಪ್ಲಿಕೇಶನ್‌ನಲ್ಲಿ ವಿನಂತಿ ಎದುರಿಸುವ ಪದರಗಳಲ್ಲಿ ಸುತ್ತುತ್ತದೆ: ಅನುಮತಿ ಪರಿಶೀಲನೆ, ವಸ್ತುವಿನ ಮೇಲೆ ಮಾಲೀಕತ್ವ ಪರಿಶೀಲನೆ, ಅನುಮೋದನೆಗೆ ಕಾಯುವ ಮರುಪಾವತಿ proposal, idempotent commit ಮತ್ತು ಔಟ್‌ಪುಟ್ ಪರಿಶೀಲನೆ. ನಂತರ ವಿನ್ಯಾಸವನ್ನು ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ಒಡೆಯುತ್ತದೆ: ದೋಷ ಎಸೆಯುವ ವರ್ಗೀಕಾರಕ, ಪುನರಾವರ್ತಿತ ನಿರಾಕರಿಸಿದ ಪ್ರಯತ್ನಗಳು, ಎರಡು ನಿಜ ಮರುಪಾವತಿಗಳನ್ನು ಒಂದಾಗಿಸುವ ವಿಷಯದಿಂದ ಮಾತ್ರ ಉತ್ಪನ್ನ key, ಮತ್ತು ಈಗಾಗಲೇ ಪರಿಶೀಲಿಸಲಾಗಿದೆ ಎಂದು ಬಳಕೆದಾರ ಹೇಳುವ ದೃಢೀಕರಣ. dialog rail ಅನ್ನು ಕೈಯಿಂದ ಬರೆದ ಸ್ಥಿತಿ ಪರಿಶೀಲನೆಯಾಗಿ ತೋರಿಸಲಾಗಿದೆ, ಮತ್ತು NeMo Guardrails ಹಾಗೂ Colang ಓಡಿಸಲಾಗಿಲ್ಲ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "A Guarded Agent",
    "headingKn": "ಸಂರಕ್ಷಿತ Agent",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">a classifier is one layer among several</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">input</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">classified</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">permission</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">and ownership</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">approval</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">before commit</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">output</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">checked last</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">a classifier is one layer among several</text></svg>",
    "captionEn": "Classification, permission, approval and output checks are separate layers.",
    "captionKn": "ವರ್ಗೀಕರಣ, ಅನುಮತಿ, ಅನುಮೋದನೆ ಮತ್ತು ಔಟ್‌ಪುಟ್ ಪರಿಶೀಲನೆ ಪ್ರತ್ಯೇಕ ಪದರಗಳು."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "The layers",
    "headingKn": "ಪದರಗಳು",
    "headers": [
     "Layer",
     "What the lab checks"
    ],
    "rows": [
     [
      "input guard",
      "keyword classification then allow, review or block"
     ],
     [
      "permission",
      "orders:read, refunds:prepare, refunds:commit"
     ],
     [
      "ownership",
      "a user may read only an order they own"
     ],
     [
      "approval and commit",
      "commit refused until approved, repeat returns the stored result"
     ],
     [
      "escalation",
      "the third denied attempt escalates the session"
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
    "filename": "gd_3.py",
    "headingEn": "Agent, session, rail and tests",
    "headingKn": "Agent, ಸೆಶನ್, rail ಮತ್ತು ಪರೀಕ್ಷೆಗಳು",
    "descEn": "Agent.permitted checks authentication, escalation and the required permission and counts denials, read_order adds an ownership check, commit_refund requires approval and returns a stored result on a repeat, and BookingRail refuses to confirm before verification.",
    "descKn": "Agent.permitted ದೃಢೀಕರಣ, ಉಲ್ಬಣ ಮತ್ತು ಅಗತ್ಯ ಅನುಮತಿ ಪರಿಶೀಲಿಸಿ ನಿರಾಕರಣೆ ಎಣಿಸುತ್ತದೆ, read_order ಮಾಲೀಕತ್ವ ಪರಿಶೀಲನೆ ಸೇರಿಸುತ್ತದೆ, commit_refund ಅನುಮೋದನೆ ಬೇಡುತ್ತದೆ ಮತ್ತು ಪುನರಾವರ್ತನೆಯಲ್ಲಿ ಸಂಗ್ರಹಿತ ಫಲಿತಾಂಶ ಹಿಂತಿರುಗಿಸುತ್ತದೆ, ಮತ್ತು BookingRail ಪರಿಶೀಲನೆಯ ಮೊದಲು ದೃಢೀಕರಿಸಲು ನಿರಾಕರಿಸುತ್ತದೆ.",
    "code": "REQUIRED = {\"read_order\": \"orders:read\", \"prepare_refund\": \"refunds:prepare\", \"commit_refund\": \"refunds:commit\"}\r\nORDERS = {\"ORDER-100\": {\"owner\": \"alice\", \"status\": \"shipped\"}, \"ORDER-200\": {\"owner\": \"bob\", \"status\": \"processing\"}}\r\n\r\n\r\nclass Agent:\r\n    def __init__(self):\r\n        self.proposals, self.audit = {}, []\r\n\r\n    def log(self, event, user, **d):\r\n        self.audit.append({\"event\": event, \"user\": user, **d})\r\n\r\n    def permitted(self, s, op):\r\n        need = REQUIRED.get(op)\r\n        if need is None or not s.authenticated or s.escalated:\r\n            return False\r\n        if need not in s.permissions:\r\n            s.blocked_attempts += 1\r\n            if s.blocked_attempts >= 3:\r\n                s.escalated = True\r\n            return False\r\n        return True\r\n\r\n    def handle_text(self, s, text, classifier=classify, fail_open=False):\r\n        d = decide(classify_with_fallback(classifier, text), fail_open)\r\n        self.log(\"input_check\", s.user_id, decision=d)\r\n        if d == \"allow\":\r\n            return \"Your request passed the input check. No business action was executed.\"\r\n        return \"Request blocked by safety policy.\" if d == \"block\" else \"Request sent for review.\"\r\n\r\n    def read_order(self, s, order_id):\r\n        if not self.permitted(s, \"read_order\"):\r\n            return \"Permission denied.\"\r\n        o = ORDERS.get(order_id)\r\n        if o is None or o[\"owner\"] != s.user_id:\r\n            return \"Order unavailable.\"\r\n        return f\"Order {order_id} status: {o['status']}\"\r\n\r\n    def propose_refund(self, s, order_id):\r\n        if not self.permitted(s, \"prepare_refund\"):\r\n            return None\r\n        key = hashlib.sha256(json.dumps({\"u\": s.user_id, \"o\": order_id}, sort_keys=True).encode()).hexdigest()[:12]\r\n        self.proposals.setdefault(key, {\"id\": key, \"user\": s.user_id, \"order\": order_id, \"status\": \"pending\", \"result\": None})\r\n        return key\r\n\r\n    def approve(self, pid, reviewer):\r\n        self.proposals[pid][\"status\"] = \"approved\"\r\n        self.proposals[pid][\"reviewer\"] = reviewer\r\n\r\n    def commit_refund(self, s, pid):\r\n        if not self.permitted(s, \"commit_refund\"):\r\n            return {\"error\": \"permission_denied\"}\r\n        p = self.proposals[pid]\r\n        if p[\"status\"] == \"committed\":\r\n            return p[\"result\"]\r\n        if p[\"status\"] != \"approved\":\r\n            return {\"error\": \"approval_required\"}\r\n        p[\"status\"], p[\"result\"] = \"committed\", {\"status\": \"committed\", \"order_id\": p[\"order\"]}\r\n        self.log(\"commit\", s.user_id, proposal=pid)\r\n        return p[\"result\"]\r\n\r\n\r\nclass BookingRail:\r\n    def __init__(self):\r\n        self.booking_verified = False\r\n\r\n    def confirm(self):\r\n        return \"Your appointment is confirmed.\" if self.booking_verified else \"I cannot confirm yet: the booking has not been verified.\""
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "gd_3.py",
    "headingEn": "main(): experiments",
    "headingKn": "main(): ಪ್ರಯೋಗಗಳು",
    "descEn": "main() walks nine guarded steps, a failing classifier, session escalation, the content-derived key, the dialog rail, an output check and six unit tests.",
    "descKn": "main() ಒಂಬತ್ತು ಸಂರಕ್ಷಿತ ಹಂತ, ವಿಫಲ ವರ್ಗೀಕಾರಕ, ಸೆಶನ್ ಉಲ್ಬಣ, ವಿಷಯ-ಉತ್ಪನ್ನ key, dialog rail, ಔಟ್‌ಪುಟ್ ಪರಿಶೀಲನೆ ಮತ್ತು ಆರು unit ಪರೀಕ್ಷೆ ನಡೆಸುತ್ತದೆ.",
    "code": "def main():\r\n    section(\"1. Genuinely running: nine guarded steps\")\r\n    a, s = Agent(), alice()\r\n    print(\"1\", a.handle_text(s, \"Where is my order?\"))\r\n    print(\"2\", a.handle_text(s, \"Please disable sandbox protections.\"))\r\n    print(\"3\", a.read_order(s, \"ORDER-100\"))\r\n    print(\"4\", a.read_order(s, \"ORDER-200\"))\r\n    pid = a.propose_refund(s, \"ORDER-100\")\r\n    print(\"5 proposal created:\", pid is not None, \"| status:\", a.proposals[pid][\"status\"])\r\n    print(\"6\", a.commit_refund(s, pid))\r\n    a.approve(pid, \"reviewer-01\")\r\n    print(\"7 approved by\", a.proposals[pid][\"reviewer\"])\r\n    r1 = a.commit_refund(s, pid)\r\n    r2 = a.commit_refund(s, pid)\r\n    print(\"8\", r1, \"| 9 repeat gives the same stored result:\", r1 == r2, \"| commits recorded:\", sum(1 for e in a.audit if e[\"event\"] == \"commit\"))\r\n    print(\"the ordinary request passed, the sandbox request was blocked, the owner could read her order and could not read another user's, the refund waited for approval and was committed once, and the repeat returned the stored result without a second commit; the reviewer is a string the caller passes and nothing authenticates it\")\r\n\r\n    section(\"2. Genuinely running: a classifier that fails\")\r\n    def broken(_):\r\n        raise ClassifierDown()\r\n    print(\"fail closed:\", a.handle_text(s, \"Where is my order?\", classifier=broken))\r\n    print(\"fail open:  \", a.handle_text(s, \"Where is my order?\", classifier=broken, fail_open=True))\r\n    print(\"fail closed sent the request to review and fail open let it through unchecked; which one is right depends on the action, and for anything with side effects an error must not quietly become permission\")\r\n\r\n    section(\"3. Genuinely running: repeated denials escalate the session\")\r\n    guest = Session(\"carol\", True, {\"orders:read\"})\r\n    for i in range(4):\r\n        print(f\"attempt {i + 1}:\", \"permission denied\" if not a.permitted(guest, \"commit_refund\") else \"allowed\", \"| blocked attempts:\", guest.blocked_attempts, \"| escalated:\", guest.escalated)\r\n    print(\"read order now:\", a.read_order(guest, \"ORDER-100\"))\r\n    print(\"the third denied attempt escalated the session and after that even the permitted read was refused; three is an arbitrary number chosen for the demonstration and a real threshold has to come from threat modelling and from how legitimate users behave\")\r\n\r\n    section(\"4. Genuinely running: an identity derived only from the content\")\r\n    a2, s2 = Agent(), alice()\r\n    p1 = a2.propose_refund(s2, \"ORDER-100\")\r\n    p2 = a2.propose_refund(s2, \"ORDER-100\")\r\n    print(\"two separate refund requests for the same order, ids:\", p1, p2, \"| proposals stored:\", len(a2.proposals))\r\n    print(\"two genuinely separate identical requests collapsed into one proposal, which is right for a retry and wrong for two deliberate refunds, so a real system needs an operation id supplied by the caller and enforced where the commit happens\")\r\n\r\n    section(\"5. Genuinely running: a dialog rail on a confirmation\")\r\n    rail = BookingRail()\r\n    print(\"before verification:\", rail.confirm())\r\n    rail.booking_verified = True\r\n    print(\"after verification: \", rail.confirm())\r\n    print(\"the rail refused to say confirmed until the booking was marked verified, so the user's claim that it had already been checked changes nothing; this is a hand-written state check and not NeMo Guardrails or Colang, which were not run\")\r\n\r\n    section(\"6. Genuinely running: output checked after an allowed input\")\r\n    out = \"Your account summary includes the customer secret.\"\r\n    print(\"input:\", decide(classify(\"Summarise my account settings\")), \"| output:\", decide(classify(out)))\r\n    print(\"the input passed and the generated text was stopped, which shows two checkpoints on one request; the keyword match would miss any secret written without the phrase\")\r\n\r\n    section(\"7. Genuinely running: the unit tests\")\r\n    stream = io.StringIO()\r\n    res = unittest.TextTestRunner(stream=stream, verbosity=0).run(unittest.defaultTestLoader.loadTestsFromTestCase(AgentTests))\r\n    print(f\"ran {res.testsRun} tests | failures {len(res.failures)} | errors {len(res.errors)} | passed {res.wasSuccessful()}\")\r\n    print(\"the tests cover a safe input, a blocked input, another user's order, a commit before approval, a repeated commit and a classifier error on this lab's own agent, and they prove nothing about a real attacker\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: nine guarded steps ---\n1 Your request passed the input check. No business action was executed.\n2 Request blocked by safety policy.\n3 Order ORDER-100 status: shipped\n4 Order unavailable.\n5 proposal created: True | status: pending\n6 {'error': 'approval_required'}\n7 approved by reviewer-01\n8 {'status': 'committed', 'order_id': 'ORDER-100'} | 9 repeat gives the same stored result: True | commits recorded: 1\nthe ordinary request passed, the sandbox request was blocked, the owner could read her order and could not read another user's, the refund waited for approval and was committed once, and the repeat returned the stored result without a second commit; the reviewer is a string the caller passes and nothing authenticates it\n\n--- 2. Genuinely running: a classifier that fails ---\nfail closed: Request sent for review.\nfail open:   Your request passed the input check. No business action was executed.\nfail closed sent the request to review and fail open let it through unchecked; which one is right depends on the action, and for anything with side effects an error must not quietly become permission\n\n--- 3. Genuinely running: repeated denials escalate the session ---\nattempt 1: permission denied | blocked attempts: 1 | escalated: False\nattempt 2: permission denied | blocked attempts: 2 | escalated: False\nattempt 3: permission denied | blocked attempts: 3 | escalated: True\nattempt 4: permission denied | blocked attempts: 3 | escalated: True\nread order now: Permission denied.\nthe third denied attempt escalated the session and after that even the permitted read was refused; three is an arbitrary number chosen for the demonstration and a real threshold has to come from threat modelling and from how legitimate users behave\n\n--- 4. Genuinely running: an identity derived only from the content ---\ntwo separate refund requests for the same order, ids: bb4e01e4f2a7 bb4e01e4f2a7 | proposals stored: 1\ntwo genuinely separate identical requests collapsed into one proposal, which is right for a retry and wrong for two deliberate refunds, so a real system needs an operation id supplied by the caller and enforced where the commit happens\n\n--- 5. Genuinely running: a dialog rail on a confirmation ---\nbefore verification: I cannot confirm yet: the booking has not been verified.\nafter verification:  Your appointment is confirmed.\nthe rail refused to say confirmed until the booking was marked verified, so the user's claim that it had already been checked changes nothing; this is a hand-written state check and not NeMo Guardrails or Colang, which were not run\n\n--- 6. Genuinely running: output checked after an allowed input ---\ninput: allow | output: block\nthe input passed and the generated text was stopped, which shows two checkpoints on one request; the keyword match would miss any secret written without the phrase\n\n--- 7. Genuinely running: the unit tests ---\nran 6 tests | failures 0 | errors 0 | passed True\nthe tests cover a safe input, a blocked input, another user's order, a commit before approval, a repeated commit and a classifier error on this lab's own agent, and they prove nothing about a real attacker"
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
    "headingEn": "Genuinely Found: Nine Steps, Failure and Escalation",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಒಂಬತ್ತು ಹಂತ, ವೈಫಲ್ಯ ಮತ್ತು ಉಲ್ಬಣ",
    "bodyEn": "Section 1: the ordinary request passed, the sandbox request was blocked, the owner read ORDER-100 and got Order unavailable for ORDER-200, the commit before approval returned approval_required, and after approval the commit ran once and the repeat returned the same stored result with 1 commit recorded. Section 2: with a failing classifier fail closed sent the request to review and fail open let it through. Section 3: the third denied attempt escalated the session with 3 blocked attempts and the permitted read was then refused.",
    "bodyKn": "ವಿಭಾಗ 1: ಸಾಮಾನ್ಯ ವಿನಂತಿ ಹಾದುಹೋಯಿತು, sandbox ವಿನಂತಿ ನಿರ್ಬಂಧಿಸಲ್ಪಟ್ಟಿತು, ಮಾಲೀಕ ORDER-100 ಓದಿದರು ಮತ್ತು ORDER-200 ಗೆ Order unavailable ಸಿಕ್ಕಿತು, ಅನುಮೋದನೆ ಮೊದಲು commit approval_required ನೀಡಿತು, ಮತ್ತು ಅನುಮೋದನೆಯ ನಂತರ commit ಒಮ್ಮೆ ಓಡಿ ಪುನರಾವರ್ತನೆ 1 commit ದಾಖಲಾಗಿ ಅದೇ ಸಂಗ್ರಹಿತ ಫಲಿತಾಂಶ ನೀಡಿತು. ವಿಭಾಗ 2: ವಿಫಲ ವರ್ಗೀಕಾರಕದೊಂದಿಗೆ fail closed ವಿನಂತಿಯನ್ನು review ಗೆ ಕಳುಹಿಸಿತು ಮತ್ತು fail open ಅದನ್ನು ಹಾದುಹೋಗಲು ಬಿಟ್ಟಿತು. ವಿಭಾಗ 3: ಮೂರನೇ ನಿರಾಕರಿಸಿದ ಪ್ರಯತ್ನ 3 ನಿರ್ಬಂಧಿತ ಪ್ರಯತ್ನಗಳೊಂದಿಗೆ ಸೆಶನ್ ಉಲ್ಬಣಗೊಳಿಸಿತು ಮತ್ತು ಅನುಮತಿಸಿದ ಓದು ನಂತರ ನಿರಾಕರಿಸಲ್ಪಟ್ಟಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Keys, Rail, Output and Tests",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Keys, Rail, ಔಟ್‌ಪುಟ್ ಮತ್ತು ಪರೀಕ್ಷೆಗಳು",
    "bodyEn": "Section 4: two separate refund requests for the same order got the same id and 1 proposal was stored. Section 5: the rail refused to confirm before verification and confirmed after it. Section 6: the input passed and the output with the customer secret was blocked. Section 7: the six unit tests ran with 0 failures and 0 errors.",
    "bodyKn": "ವಿಭಾಗ 4: ಒಂದೇ ಆರ್ಡರ್‌ಗೆ ಎರಡು ಪ್ರತ್ಯೇಕ ಮರುಪಾವತಿ ವಿನಂತಿಗಳು ಅದೇ id ಪಡೆದವು ಮತ್ತು 1 proposal ಸಂಗ್ರಹವಾಯಿತು. ವಿಭಾಗ 5: rail ಪರಿಶೀಲನೆಯ ಮೊದಲು ದೃಢೀಕರಿಸಲು ನಿರಾಕರಿಸಿ ನಂತರ ದೃಢೀಕರಿಸಿತು. ವಿಭಾಗ 6: ಇನ್‌ಪುಟ್ ಹಾದುಹೋಯಿತು ಮತ್ತು customer secret ಇರುವ ಔಟ್‌ಪುಟ್ ನಿರ್ಬಂಧಿಸಲ್ಪಟ್ಟಿತು. ವಿಭಾಗ 7: ಆರು unit ಪರೀಕ್ಷೆಗಳು 0 ವೈಫಲ್ಯ ಮತ್ತು 0 ದೋಷದೊಂದಿಗೆ ಓಡಿದವು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A guard verdict is one input to a chain of checks, and the permission, ownership, approval and output layers are what stop an action when the classifier misses or fails.",
    "bodyKn": "guard ತೀರ್ಪು ಪರಿಶೀಲನೆಗಳ ಸರಪಳಿಗೆ ಒಂದು ಇನ್‌ಪುಟ್, ಮತ್ತು ವರ್ಗೀಕಾರಕ ತಪ್ಪಿಸಿದಾಗ ಅಥವಾ ವಿಫಲವಾದಾಗ ಕ್ರಿಯೆ ನಿಲ್ಲಿಸುವುದು ಅನುಮತಿ, ಮಾಲೀಕತ್ವ, ಅನುಮೋದನೆ ಮತ್ತು ಔಟ್‌ಪುಟ್ ಪದರಗಳು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"a key made from the request content is a safe idempotency key.\" Two separate identical refunds shared one id.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ವಿನಂತಿ ವಿಷಯದಿಂದ ಮಾಡಿದ key ಸುರಕ್ಷಿತ idempotency key.\" ಎರಡು ಪ್ರತ್ಯೇಕ ಒಂದೇ ಮರುಪಾವತಿಗಳು ಒಂದು id ಹಂಚಿಕೊಂಡವು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Fail closed: an error becomes review or block. Object-level authorisation: a check on this specific record. Escalation: a session moved to human review. Dialog rail: a state check on a conversation.",
    "bodyKn": "Fail closed: ದೋಷ review ಅಥವಾ block ಆಗುತ್ತದೆ. ವಸ್ತು-ಮಟ್ಟದ ಅಧಿಕಾರ: ಈ ನಿರ್ದಿಷ್ಟ ದಾಖಲೆಯ ಮೇಲೆ ಪರಿಶೀಲನೆ. ಉಲ್ಬಣ: ಮಾನವ ವಿಮರ್ಶೆಗೆ ಸರಿದ ಸೆಶನ್. Dialog rail: ಸಂಭಾಷಣೆಯ ಮೇಲೆ ಸ್ಥಿತಿ ಪರಿಶೀಲನೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) The owner could read her order and not another user order. 2) A commit needed approval and repeated safely. 3) Fail closed sent an error to review. 4) The third denial escalated the session. 5) Two real refunds collapsed into one proposal.",
    "bodyKn": "1) ಮಾಲೀಕ ತನ್ನ ಆರ್ಡರ್ ಓದಬಹುದಿತ್ತು, ಇನ್ನೊಬ್ಬ ಬಳಕೆದಾರರದ್ದಲ್ಲ. 2) commit ಗೆ ಅನುಮೋದನೆ ಬೇಕಿತ್ತು ಮತ್ತು ಸುರಕ್ಷಿತವಾಗಿ ಪುನರಾವರ್ತಿಸಿತು. 3) Fail closed ದೋಷವನ್ನು review ಗೆ ಕಳುಹಿಸಿತು. 4) ಮೂರನೇ ನಿರಾಕರಣೆ ಸೆಶನ್ ಉಲ್ಬಣಗೊಳಿಸಿತು. 5) ಎರಡು ನಿಜ ಮರುಪಾವತಿಗಳು ಒಂದು proposal ಆಗಿ ಕುಸಿದವು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What did a commit before approval return?",
      "qKn": "ಅನುಮೋದನೆ ಮೊದಲು commit ಏನು ಹಿಂತಿರುಗಿಸಿತು?",
      "opts": [
       "approval_required",
       "committed",
       "permission_denied",
       "an exception"
      ],
      "optsKn": [
       "approval_required (ಅನುಮೋದನೆ ಅಗತ್ಯ)",
       "committed (commit ಆಯಿತು)",
       "permission_denied (ಅನುಮತಿ ನಿರಾಕರಣೆ)",
       "ಒಂದು ಅಪವಾದ"
      ],
      "correct": 0
     },
     {
      "q": "How many commits were recorded after the commit and its repeat?",
      "qKn": "commit ಮತ್ತು ಅದರ ಪುನರಾವರ್ತನೆಯ ನಂತರ ಎಷ್ಟು commits ದಾಖಲಾದವು?",
      "opts": [
       "1",
       "2",
       "0",
       "3"
      ],
      "optsKn": [
       "1",
       "2",
       "0",
       "3"
      ],
      "correct": 0
     },
     {
      "q": "On which denied attempt did the session escalate?",
      "qKn": "ಯಾವ ನಿರಾಕರಿಸಿದ ಪ್ರಯತ್ನದಲ್ಲಿ ಸೆಶನ್ ಉಲ್ಬಣಗೊಂಡಿತು?",
      "opts": [
       "The third",
       "The first",
       "The fourth",
       "Never"
      ],
      "optsKn": [
       "ಮೂರನೆಯದು",
       "ಮೊದಲನೆಯದು",
       "ನಾಲ್ಕನೆಯದು",
       "ಎಂದಿಗೂ ಇಲ್ಲ"
      ],
      "correct": 0
     },
     {
      "q": "What did the fail-closed handling do when the classifier threw an error?",
      "qKn": "ವರ್ಗೀಕಾರಕ ದೋಷ ಎಸೆದಾಗ fail-closed ನಿರ್ವಹಣೆ ಏನು ಮಾಡಿತು?",
      "opts": [
       "Sent the request to review",
       "Allowed it",
       "Deleted it",
       "Retried forever"
      ],
      "optsKn": [
       "ವಿನಂತಿಯನ್ನು review ಗೆ ಕಳುಹಿಸಿತು",
       "ಅದನ್ನು ಅನುಮತಿಸಿತು",
       "ಅದನ್ನು ಅಳಿಸಿತು",
       "ಶಾಶ್ವತವಾಗಿ ಮರುಪ್ರಯತ್ನಿಸಿತು"
      ],
      "correct": 0
     },
     {
      "q": "Was NeMo Guardrails run in this lab?",
      "qKn": "ಈ ಲ್ಯಾಬ್‌ನಲ್ಲಿ NeMo Guardrails ಓಡಿಸಲಾಯಿತೇ?",
      "opts": [
       "No, the rail is a hand-written state check",
       "Yes",
       "Only the Colang part",
       "Only in the tests"
      ],
      "optsKn": [
       "ಇಲ್ಲ, rail ಕೈಯಿಂದ ಬರೆದ ಸ್ಥಿತಿ ಪರಿಶೀಲನೆ",
       "ಹೌದು",
       "Colang ಭಾಗ ಮಾತ್ರ",
       "ಪರೀಕ್ಷೆಗಳಲ್ಲಿ ಮಾತ್ರ"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
