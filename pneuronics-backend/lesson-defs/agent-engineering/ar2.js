module.exports = {
 "phaseId": "6a369d6366020ed05b32158c",
 "moduleId": "6a369d6366020ed05b32159e",
 "order": 1,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Automated Alignment Research (Part 2 of 3) — Journals, Policy and Provenance",
 "titleKn": "ಸ್ವಯಂಚಾಲಿತ Alignment ಸಂಶೋಧನೆ (ಭಾಗ 2 / 3) — ಜರ್ನಲ್‌ಗಳು, ನೀತಿ ಮತ್ತು Provenance",
 "desc": "Build a hash-chained research journal, attack it, add a role policy and check provenance.",
 "descKn": "ಹ್ಯಾಶ್-ಸರಪಳಿ ಸಂಶೋಧನಾ ಜರ್ನಲ್ ನಿರ್ಮಿಸಿ, ಅದರ ಮೇಲೆ ದಾಳಿ ಮಾಡಿ, ಪಾತ್ರ ನೀತಿ ಸೇರಿಸಿ ಮತ್ತು provenance ಪರಿಶೀಲಿಸಿ.",
 "objectives": [
  "Build a hash chain.",
  "Detect edits and truncation.",
  "Write a default-deny policy.",
  "Check provenance.",
  "State what a chain cannot prove."
 ],
 "objectivesKn": [
  "ಹ್ಯಾಶ್ ಸರಪಳಿ ನಿರ್ಮಿಸಿ.",
  "ಸಂಪಾದನೆ ಮತ್ತು ಕತ್ತರಿಸುವಿಕೆ ಪತ್ತೆ ಮಾಡಿ.",
  "ಡೀಫಾಲ್ಟ್-ನಿರಾಕರಣೆ ನೀತಿ ಬರೆಯಿರಿ.",
  "Provenance ಪರಿಶೀಲಿಸಿ.",
  "ಸರಪಳಿ ಏನನ್ನು ಸಾಬೀತುಪಡಿಸಲಾರದು ಹೇಳಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Automated Alignment Research (Part 2 of 3)",
    "textKn": "ಸ್ವಯಂಚಾಲಿತ Alignment ಸಂಶೋಧನೆ (ಭಾಗ 2 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 2 of 3: a hash-chained research journal, tamper and truncation detection, a role-based authorization policy with default deny and provenance checks that tie findings to earlier evidence. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind automated alignment research (weak-to-strong supervision, hash-chained research journals, role-based authorization, provenance checks, dependency contamination and reviewer blind spots), not the real software, and the student is a threshold fitted on random numbers, the agents are scripted functions, the journal and policy live in memory and the research graphs are random, and no language model is involved, so no real LLM behaviour is measured. The original code/main.py was not supplied, so the labs are our own implementation. Results the lesson quotes about published automated alignment research are cited, not reproduced; the toy student, the journal, the policy dictionary and every error rate in the labs are invented to show the mechanics. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 2ನೆಯದು: ಹ್ಯಾಶ್-ಸರಪಳಿ ಸಂಶೋಧನಾ ಜರ್ನಲ್, tamper ಮತ್ತು ಕತ್ತರಿಸುವಿಕೆ ಪತ್ತೆ, ಡೀಫಾಲ್ಟ್ ನಿರಾಕರಣೆಯ ಪಾತ್ರ-ಆಧಾರಿತ ಅಧಿಕಾರ ನೀತಿ ಮತ್ತು ಸಂಶೋಧನೆಗಳನ್ನು ಹಿಂದಿನ ಸಾಕ್ಷ್ಯಕ್ಕೆ ಕಟ್ಟುವ provenance ಪರಿಶೀಲನೆಗಳು. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು ಸ್ವಯಂಚಾಲಿತ alignment ಸಂಶೋಧನೆ (weak-to-strong ಮೇಲ್ವಿಚಾರಣೆ, ಹ್ಯಾಶ್-ಸರಪಳಿ ಸಂಶೋಧನಾ ಜರ್ನಲ್‌ಗಳು, ಪಾತ್ರ-ಆಧಾರಿತ ಅಧಿಕಾರ, provenance ಪರಿಶೀಲನೆ, ಅವಲಂಬನೆ ಕಲುಷಿತ ಮತ್ತು ವಿಮರ್ಶಕ blind spots) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ವಿದ್ಯಾರ್ಥಿ ಯಾದೃಚ್ಛಿಕ ಸಂಖ್ಯೆಗಳ ಮೇಲೆ ಹೊಂದಿಸಿದ ಮಿತಿ, agents scripted ಕಾರ್ಯಗಳು, ಜರ್ನಲ್ ಮತ್ತು ನೀತಿ ಮೆಮೊರಿಯಲ್ಲಿವೆ ಮತ್ತು ಸಂಶೋಧನಾ ಗ್ರಾಫ್‌ಗಳು ಯಾದೃಚ್ಛಿಕ, ಮತ್ತು ಭಾಷಾ ಮಾದರಿ ಇಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ code/main.py ಒದಗಿಸಿರಲಿಲ್ಲ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ನಮ್ಮದೇ ಅನುಷ್ಠಾನ. ಪ್ರಕಟಿತ ಸ್ವಯಂಚಾಲಿತ alignment ಸಂಶೋಧನೆಯ ಬಗ್ಗೆ lesson ಉಲ್ಲೇಖಿಸುವ ಫಲಿತಾಂಶಗಳು ಉಲ್ಲೇಖಿತ, ಪುನರುತ್ಪಾದಿಸಲಾಗಿಲ್ಲ; ಆಟಿಕೆ ವಿದ್ಯಾರ್ಥಿ, ಜರ್ನಲ್, ನೀತಿ ನಿಘಂಟು ಮತ್ತು ಲ್ಯಾಬ್‌ಗಳ ಪ್ರತಿ ದೋಷ ದರ ಯಂತ್ರಶಾಸ್ತ್ರ ತೋರಿಸಲು ಕಲ್ಪಿತ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "A Record That Shows Its Own Edits",
    "textKn": "ತನ್ನದೇ ಸಂಪಾದನೆಗಳನ್ನು ತೋರಿಸುವ ದಾಖಲೆ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Chain, Roles and Trails",
    "headingKn": "ಸರಪಳಿ, ಪಾತ್ರಗಳು ಮತ್ತು ಹಾದಿಗಳು",
    "bodyEn": "When many agent researchers post to a shared forum, the record has to show who posted what, resist quiet edits and make each claim traceable. This part builds a hash-chained journal and tries four ways of tampering with it, adds a role-based authorization policy that denies unknown roles by default, and checks that each finding points to earlier evidence entries. The agents are scripted and the entries are invented.",
    "bodyKn": "ಅನೇಕ agent ಸಂಶೋಧಕರು ಹಂಚಿದ ಫೋರಂಗೆ ಪೋಸ್ಟ್ ಮಾಡುವಾಗ, ದಾಖಲೆ ಯಾರು ಏನು ಪೋಸ್ಟ್ ಮಾಡಿದರು ತೋರಿಸಬೇಕು, ಮೌನ ಸಂಪಾದನೆಗಳನ್ನು ವಿರೋಧಿಸಬೇಕು ಮತ್ತು ಪ್ರತಿ ಹೇಳಿಕೆಯನ್ನು ಪತ್ತೆಹಚ್ಚಬಲ್ಲದಾಗಿಸಬೇಕು. ಈ ಭಾಗ ಹ್ಯಾಶ್-ಸರಪಳಿ ಜರ್ನಲ್ ನಿರ್ಮಿಸಿ ಅದನ್ನು ತಿದ್ದುವ ನಾಲ್ಕು ವಿಧಾನ ಪ್ರಯತ್ನಿಸುತ್ತದೆ, ಅಪರಿಚಿತ ಪಾತ್ರಗಳನ್ನು ಡೀಫಾಲ್ಟ್ ಆಗಿ ನಿರಾಕರಿಸುವ ಪಾತ್ರ-ಆಧಾರಿತ ಅಧಿಕಾರ ನೀತಿ ಸೇರಿಸುತ್ತದೆ ಮತ್ತು ಪ್ರತಿ ಸಂಶೋಧನೆ ಹಿಂದಿನ ಸಾಕ್ಷ್ಯ ನಮೂದುಗಳನ್ನು ತೋರಿಸುತ್ತದೆಯೇ ಪರಿಶೀಲಿಸುತ್ತದೆ. agents scripted ಮತ್ತು ನಮೂದುಗಳು ಕಲ್ಪಿತ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Journal, Policy and Provenance",
    "headingKn": "ಜರ್ನಲ್, ನೀತಿ ಮತ್ತು Provenance",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">a research record that shows how a claim was reached</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">entry</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">hash of previous</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">verify</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">walk the chain</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">policy</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">role and action</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">provenance</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">points to evidence</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">a research record that shows how a claim was reached</text></svg>",
    "captionEn": "Every claim traces back to evidence in a chain that detects edits.",
    "captionKn": "ಪ್ರತಿ ಹೇಳಿಕೆ ಸಂಪಾದನೆ ಪತ್ತೆ ಮಾಡುವ ಸರಪಳಿಯಲ್ಲಿ ಸಾಕ್ಷ್ಯಕ್ಕೆ ಹಿಂತಿರುಗುತ್ತದೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Components of the lab",
    "headingKn": "ಲ್ಯಾಬ್‌ನ ಘಟಕಗಳು",
    "headers": [
     "Component",
     "Behavior"
    ],
    "rows": [
     [
      "journal",
      "each entry stores the hash of the previous entry"
     ],
     [
      "verify",
      "recomputes every hash and checks the links"
     ],
     [
      "roles",
      "proposer, reviewer, admin; unknown roles denied"
     ],
     [
      "provenance",
      "findings must cite earlier evidence entries"
     ],
     [
      "head hash",
      "the newest hash, kept outside the journal"
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
    "filename": "ar_2.py",
    "headingEn": "Journal, policy and provenance check",
    "headingKn": "ಜರ್ನಲ್, ನೀತಿ ಮತ್ತು provenance ಪರಿಶೀಲನೆ",
    "descEn": "Journal.append links entries by hash, Journal.verify walks the chain, authorize looks up a role in POLICY and provenance_ok requires references to earlier evidence entries.",
    "descKn": "Journal.append ಹ್ಯಾಶ್ ಮೂಲಕ ನಮೂದುಗಳನ್ನು ಜೋಡಿಸುತ್ತದೆ, Journal.verify ಸರಪಳಿ ನಡೆಯುತ್ತದೆ, authorize POLICY ನಲ್ಲಿ ಪಾತ್ರ ಹುಡುಕುತ್ತದೆ ಮತ್ತು provenance_ok ಹಿಂದಿನ ಸಾಕ್ಷ್ಯ ನಮೂದುಗಳಿಗೆ ಉಲ್ಲೇಖ ಬೇಕು ಎನ್ನುತ್ತದೆ.",
    "code": "def h(obj):\n    return hashlib.sha256(json.dumps(obj, sort_keys=True, separators=(\",\", \":\")).encode()).hexdigest()\n\n\nclass Journal:\n    def __init__(self):\n        self.entries = []\n\n    def append(self, author, kind, body, refs=()):\n        prev = self.entries[-1][\"hash\"] if self.entries else \"0\" * 64\n        e = {\"idx\": len(self.entries), \"author\": author, \"kind\": kind, \"body\": body, \"refs\": list(refs), \"prev\": prev}\n        e[\"hash\"] = h({k: v for k, v in e.items() if k != \"hash\"})\n        self.entries.append(e)\n        return e[\"idx\"]\n\n    def verify(self, head=None):\n        prev = \"0\" * 64\n        for i, e in enumerate(self.entries):\n            core = {k: v for k, v in e.items() if k != \"hash\"}\n            if e[\"prev\"] != prev or e[\"hash\"] != h(core):\n                return False, i\n            prev = e[\"hash\"]\n        if head is not None and prev != head:\n            return False, \"head mismatch\"\n        return True, None\n\n    def head(self):\n        return self.entries[-1][\"hash\"]\n\n\nPOLICY = {\n    \"proposer\": {\"post_hypothesis\", \"post_evidence\"},\n    \"reviewer\": {\"post_review\"},\n    \"admin\": {\"post_hypothesis\", \"post_evidence\", \"post_review\", \"close_thread\"},\n}\n\n\ndef authorize(role, action):\n    return action in POLICY.get(role, set())\n\n\ndef provenance_ok(journal, finding_idx):\n    \"\"\"A finding is supported when every reference points to an earlier evidence entry.\"\"\"\n    e = journal.entries[finding_idx]\n    if not e[\"refs\"]:\n        return False\n    return all(r < finding_idx and journal.entries[r][\"kind\"] == \"evidence\" for r in e[\"refs\"])"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "ar_2.py",
    "headingEn": "main(): experiments",
    "headingKn": "main(): ಪ್ರಯೋಗಗಳು",
    "descEn": "main() builds a chain, tries edits and truncation, tests the policy and checks provenance.",
    "descKn": "main() ಸರಪಳಿ ನಿರ್ಮಿಸಿ, ಸಂಪಾದನೆ ಮತ್ತು ಕತ್ತರಿಸುವಿಕೆ ಪ್ರಯತ್ನಿಸಿ, ನೀತಿ ಪರೀಕ್ಷಿಸಿ ಮತ್ತು provenance ಪರಿಶೀಲಿಸುತ್ತದೆ.",
    "code": "def main():\n    section(\"1. Genuinely running: building and verifying a hash chain\")\n    j = Journal()\n    a = j.append(\"agent_a\", \"hypothesis\", \"feature F predicts refusal\")\n    b = j.append(\"agent_b\", \"evidence\", \"probe accuracy 0.81 on set S\", refs=[a])\n    c = j.append(\"agent_c\", \"finding\", \"F is linearly decodable\", refs=[b])\n    print(\"entries:\", len(j.entries), \"| chain verifies:\", j.verify())\n    print(\"each entry stores the hash of the one before it, so changing any earlier entry changes every later hash; the entries are invented text\")\n\n    section(\"2. Genuinely running: tamper and truncation\")\n    head = j.head()\n    saved = json.dumps(j.entries)\n    j.entries[1][\"body\"] = \"probe accuracy 0.99 on set S\"\n    print(\"edit entry 1 body ->\", j.verify())\n    j.entries = json.loads(saved)\n    j.entries[1][\"body\"] = \"probe accuracy 0.99 on set S\"\n    j.entries[1][\"hash\"] = h({k: v for k, v in j.entries[1].items() if k != \"hash\"})\n    print(\"edit entry 1 and recompute only its own hash ->\", j.verify())\n    j.entries = json.loads(saved)[:2]\n    print(\"drop the last entry, no external head ->\", j.verify())\n    print(\"drop the last entry, compare with the saved head ->\", j.verify(head))\n    print(\"a plain edit is caught at the edited entry, an edit that recomputes its own hash is caught at the next entry, and silently removing the newest entries passes unless the latest hash was recorded somewhere the writer cannot change; the chain proves consistency and not honesty\")\n\n    section(\"3. Genuinely running: a role-based authorization policy\")\n    attempts = [(\"proposer\", \"post_hypothesis\"), (\"proposer\", \"post_review\"), (\"reviewer\", \"post_evidence\"), (\"reviewer\", \"post_review\"), (\"intern\", \"post_hypothesis\"), (\"admin\", \"close_thread\")]\n    for role, action in attempts:\n        print(f\"{role:9} {action:16} -> {'allow' if authorize(role, action) else 'deny'}\")\n    print(\"an unknown role gets an empty permission set, so it is denied by default, and a proposer cannot approve its own work because review is a separate action; the policy is a dictionary inside the same program, which the agent could edit if it shared the process\")\n\n    section(\"4. Genuinely running: provenance of findings\")\n    j = Journal()\n    h0 = j.append(\"agent_a\", \"hypothesis\", \"H1\")\n    e1 = j.append(\"agent_b\", \"evidence\", \"probe result\", refs=[h0])\n    f1 = j.append(\"agent_c\", \"finding\", \"supported claim\", refs=[e1])\n    f2 = j.append(\"agent_c\", \"finding\", \"claim with no references\")\n    f3 = j.append(\"agent_c\", \"finding\", \"claim citing a hypothesis only\", refs=[h0])\n    for name, idx in ((\"supported\", f1), (\"no refs\", f2), (\"cites a hypothesis\", f3)):\n        print(f\"{name:20} provenance ok: {provenance_ok(j, idx)}\")\n    print(\"a finding counts as supported only when it points to earlier evidence entries, so a claim with no references or one that cites only a hypothesis is flagged; this checks the structure of the trail and not whether the evidence is true\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: building and verifying a hash chain ---\nentries: 3 | chain verifies: (True, None)\neach entry stores the hash of the one before it, so changing any earlier entry changes every later hash; the entries are invented text\n\n--- 2. Genuinely running: tamper and truncation ---\nedit entry 1 body -> (False, 1)\nedit entry 1 and recompute only its own hash -> (False, 2)\ndrop the last entry, no external head -> (True, None)\ndrop the last entry, compare with the saved head -> (False, 'head mismatch')\na plain edit is caught at the edited entry, an edit that recomputes its own hash is caught at the next entry, and silently removing the newest entries passes unless the latest hash was recorded somewhere the writer cannot change; the chain proves consistency and not honesty\n\n--- 3. Genuinely running: a role-based authorization policy ---\nproposer  post_hypothesis  -> allow\nproposer  post_review      -> deny\nreviewer  post_evidence    -> deny\nreviewer  post_review      -> allow\nintern    post_hypothesis  -> deny\nadmin     close_thread     -> allow\nan unknown role gets an empty permission set, so it is denied by default, and a proposer cannot approve its own work because review is a separate action; the policy is a dictionary inside the same program, which the agent could edit if it shared the process\n\n--- 4. Genuinely running: provenance of findings ---\nsupported            provenance ok: True\nno refs              provenance ok: False\ncites a hypothesis   provenance ok: False\na finding counts as supported only when it points to earlier evidence entries, so a claim with no references or one that cites only a hypothesis is flagged; this checks the structure of the trail and not whether the evidence is true"
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
    "headingEn": "Experiment 1: Building and verifying a hash chain",
    "headingKn": "ಪ್ರಯೋಗ 1: Building and verifying a hash chain",
    "bodyEn": "What it ran: Building and verifying a hash chain. What the lab concluded: each entry stores the hash of the one before it, so changing any earlier entry changes every later hash; the entries are invented text",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Building and verifying a hash chain. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): each entry stores the hash of the one before it, so changing any earlier entry changes every later hash; the entries are invented text"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. Genuinely running: building and verifying a hash chain ---\nentries: 3 | chain verifies: (True, None)"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: Tamper and truncation",
    "headingKn": "ಪ್ರಯೋಗ 2: Tamper and truncation",
    "bodyEn": "What it ran: Tamper and truncation. What the lab concluded: a plain edit is caught at the edited entry, an edit that recomputes its own hash is caught at the next entry, and silently removing the newest entries passes unless the latest hash was recorded somewhere the writer cannot change; the chain proves consistency and not honesty",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Tamper and truncation. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a plain edit is caught at the edited entry, an edit that recomputes its own hash is caught at the next entry, and silently removing the newest entries passes unless the latest hash was recorded somewhere the writer cannot change; the chain proves consistency and not honesty"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely running: tamper and truncation ---\nedit entry 1 body -> (False, 1)\nedit entry 1 and recompute only its own hash -> (False, 2)\ndrop the last entry, no external head -> (True, None)\ndrop the last entry, compare with the saved head -> (False, 'head mismatch')"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: A role-based authorization policy",
    "headingKn": "ಪ್ರಯೋಗ 3: A role-based authorization policy",
    "bodyEn": "What it ran: A role-based authorization policy. What the lab concluded: an unknown role gets an empty permission set, so it is denied by default, and a proposer cannot approve its own work because review is a separate action; the policy is a dictionary inside the same program, which the agent could edit if it shared the process",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A role-based authorization policy. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): an unknown role gets an empty permission set, so it is denied by default, and a proposer cannot approve its own work because review is a separate action; the policy is a dictionary inside the same program, which the agent could edit if it shared the process"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely running: a role-based authorization policy ---\nproposer  post_hypothesis  -> allow\nproposer  post_review      -> deny\nreviewer  post_evidence    -> deny\nreviewer  post_review      -> allow\nintern    post_hypothesis  -> deny\nadmin     close_thread     -> allow"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 4: Provenance of findings",
    "headingKn": "ಪ್ರಯೋಗ 4: Provenance of findings",
    "bodyEn": "What it ran: Provenance of findings. What the lab concluded: a finding counts as supported only when it points to earlier evidence entries, so a claim with no references or one that cites only a hypothesis is flagged; this checks the structure of the trail and not whether the evidence is true",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Provenance of findings. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a finding counts as supported only when it points to earlier evidence entries, so a claim with no references or one that cites only a hypothesis is flagged; this checks the structure of the trail and not whether the evidence is true"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 4. Genuinely running: provenance of findings ---\nsupported            provenance ok: True\nno refs              provenance ok: False\ncites a hypothesis   provenance ok: False"
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
    "headingEn": "Genuinely Found: The Chain Under Attack",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ದಾಳಿಗೊಳಗಾದ ಸರಪಳಿ",
    "bodyEn": "Section 1: a three-entry chain verified as (True, None). Section 2: editing entry 1 was detected at index 1, editing it and recomputing only its own hash was detected at index 2, dropping the last entry passed when no external head was supplied and was detected as a head mismatch when the saved head was compared.",
    "bodyKn": "ವಿಭಾಗ 1: ಮೂರು-ನಮೂದಿನ ಸರಪಳಿ (True, None) ಎಂದು ಪರಿಶೀಲಿತವಾಯಿತು. ವಿಭಾಗ 2: ನಮೂದು 1 ಸಂಪಾದನೆ ಸೂಚ್ಯಂಕ 1 ರಲ್ಲಿ ಪತ್ತೆಯಾಯಿತು, ಅದನ್ನು ಸಂಪಾದಿಸಿ ತನ್ನ ಹ್ಯಾಶ್ ಮಾತ್ರ ಮರುಲೆಕ್ಕ ಮಾಡಿದ್ದು ಸೂಚ್ಯಂಕ 2 ರಲ್ಲಿ ಪತ್ತೆಯಾಯಿತು, ಕೊನೆಯ ನಮೂದು ಬಿಡುವುದು ಬಾಹ್ಯ head ನೀಡದಾಗ ಹಾದುಹೋಯಿತು ಮತ್ತು ಉಳಿಸಿದ head ಹೋಲಿಸಿದಾಗ head mismatch ಎಂದು ಪತ್ತೆಯಾಯಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Policy and Provenance",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ನೀತಿ ಮತ್ತು Provenance",
    "bodyEn": "Section 3: a proposer could post a hypothesis but not a review, a reviewer could post a review but not evidence, an intern with an unknown role was denied and an admin could close a thread. Section 4: a finding citing evidence passed provenance, a finding with no references failed and a finding that cited only a hypothesis failed.",
    "bodyKn": "ವಿಭಾಗ 3: proposer hypothesis ಪೋಸ್ಟ್ ಮಾಡಬಹುದು ಆದರೆ review ಅಲ್ಲ, reviewer review ಪೋಸ್ಟ್ ಮಾಡಬಹುದು ಆದರೆ ಸಾಕ್ಷ್ಯ ಅಲ್ಲ, ಅಪರಿಚಿತ ಪಾತ್ರದ intern ನಿರಾಕರಿಸಲ್ಪಟ್ಟ ಮತ್ತು admin thread ಮುಚ್ಚಬಹುದು. ವಿಭಾಗ 4: ಸಾಕ್ಷ್ಯ ಉಲ್ಲೇಖಿಸಿದ ಸಂಶೋಧನೆ provenance ಹಾದುಹೋಯಿತು, ಉಲ್ಲೇಖವಿಲ್ಲದ ಸಂಶೋಧನೆ ವಿಫಲವಾಯಿತು ಮತ್ತು hypothesis ಮಾತ್ರ ಉಲ್ಲೇಖಿಸಿದ ಸಂಶೋಧನೆ ವಿಫಲವಾಯಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A chain makes quiet edits detectable and a role policy makes self-approval impossible, but the chain only proves the record is consistent, not that its contents are honest.",
    "bodyKn": "ಸರಪಳಿ ಮೌನ ಸಂಪಾದನೆಗಳನ್ನು ಪತ್ತೆಹಚ್ಚಬಲ್ಲದಾಗಿಸುತ್ತದೆ ಮತ್ತು ಪಾತ್ರ ನೀತಿ ಸ್ವಯಂ-ಅನುಮೋದನೆಯನ್ನು ಅಸಾಧ್ಯವಾಗಿಸುತ್ತದೆ, ಆದರೆ ಸರಪಳಿ ದಾಖಲೆ ಸ್ಥಿರವಾಗಿದೆ ಎಂದು ಮಾತ್ರ ಸಾಬೀತುಪಡಿಸುತ್ತದೆ, ಅದರ ವಿಷಯ ಪ್ರಾಮಾಣಿಕ ಎಂದಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"a hash chain detects every change.\" Dropping the newest entry passed verification until the saved head hash was compared.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಹ್ಯಾಶ್ ಸರಪಳಿ ಪ್ರತಿ ಬದಲಾವಣೆ ಪತ್ತೆ ಮಾಡುತ್ತದೆ.\" ಉಳಿಸಿದ head ಹ್ಯಾಶ್ ಹೋಲಿಸುವವರೆಗೆ ಹೊಸ ನಮೂದನ್ನು ಬಿಡುವುದು ಪರಿಶೀಲನೆ ಹಾದುಹೋಯಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Hash chain: entries linked by the hash of the previous one. Head hash: the newest hash. Default deny: unknown roles get no permissions. Provenance: the trail from a claim back to evidence.",
    "bodyKn": "Hash chain: ಹಿಂದಿನದರ ಹ್ಯಾಶ್‌ನಿಂದ ಜೋಡಿಸಿದ ನಮೂದುಗಳು. Head hash: ಹೊಸ ಹ್ಯಾಶ್. Default deny: ಅಪರಿಚಿತ ಪಾತ್ರಗಳಿಗೆ ಅನುಮತಿ ಇಲ್ಲ. Provenance: ಹೇಳಿಕೆಯಿಂದ ಸಾಕ್ಷ್ಯಕ್ಕೆ ಹಿಂತಿರುಗುವ ಹಾದಿ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) A plain edit was caught at its own index. 2) A self-rehashed edit was caught one entry later. 3) Truncation needed an external head. 4) Unknown roles were denied. 5) Provenance checks structure, not truth.",
    "bodyKn": "1) ಸಾದಾ ಸಂಪಾದನೆ ತನ್ನ ಸೂಚ್ಯಂಕದಲ್ಲಿ ಹಿಡಿಯಲ್ಪಟ್ಟಿತು. 2) ಸ್ವಯಂ-ಮರುಹ್ಯಾಶ್ ಸಂಪಾದನೆ ಒಂದು ನಮೂದು ನಂತರ ಹಿಡಿಯಲ್ಪಟ್ಟಿತು. 3) ಕತ್ತರಿಸುವಿಕೆಗೆ ಬಾಹ್ಯ head ಬೇಕಾಯಿತು. 4) ಅಪರಿಚಿತ ಪಾತ್ರಗಳು ನಿರಾಕರಿಸಲ್ಪಟ್ಟವು. 5) Provenance ರಚನೆ ಪರಿಶೀಲಿಸುತ್ತದೆ, ಸತ್ಯವಲ್ಲ."
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
    "bodyEn": "1) Open a terminal in pneuronics-backend/lesson-defs/labs. 2) Run: python -B ar_2.py (in Git Bash on Windows: PYTHONIOENCODING=utf-8 python -B ar_2.py). 3) Compare each section with the walkthrough above. The -B flag stops Python from writing __pycache__ folders.",
    "bodyKn": "1) pneuronics-backend/lesson-defs/labs ನಲ್ಲಿ ಟರ್ಮಿನಲ್ ತೆರೆಯಿರಿ. 2) ಓಡಿಸಿ: python -B ar_2.py (Windows Git Bash ನಲ್ಲಿ: PYTHONIOENCODING=utf-8 python -B ar_2.py). 3) ಪ್ರತಿ ವಿಭಾಗವನ್ನು ಮೇಲಿನ ನಡೆದಾಟಕ್ಕೆ ಹೋಲಿಸಿ. -B ಧ್ವಜ Python __pycache__ ಫೋಲ್ಡರ್‌ಗಳನ್ನು ಬರೆಯುವುದನ್ನು ತಡೆಯುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Predict before you run",
    "headingKn": "ಓಡಿಸುವ ಮುನ್ನ ಊಹಿಸಿ",
    "bodyEn": "Before rerunning, write down what you expect each experiment to print, then compare:\n1. Building and verifying a hash chain\n2. Tamper and truncation\n3. A role-based authorization policy\n4. Provenance of findings",
    "bodyKn": "ಮರುಓಡಿಸುವ ಮುನ್ನ ಪ್ರತಿ ಪ್ರಯೋಗ ಏನು ಮುದ್ರಿಸುತ್ತದೆ ಎಂದು ನಿರೀಕ್ಷಿಸುವುದನ್ನು ಬರೆಯಿರಿ, ನಂತರ ಹೋಲಿಸಿ:\n1. Building and verifying a hash chain\n2. Tamper and truncation\n3. A role-based authorization policy\n4. Provenance of findings"
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "Where was an edit that recomputed only its own hash detected?",
      "qKn": "ತನ್ನ ಹ್ಯಾಶ್ ಮಾತ್ರ ಮರುಲೆಕ್ಕ ಮಾಡಿದ ಸಂಪಾದನೆ ಎಲ್ಲಿ ಪತ್ತೆಯಾಯಿತು?",
      "opts": [
       "At the next entry, index 2",
       "At index 1",
       "Nowhere",
       "At the head"
      ],
      "optsKn": [
       "ಮುಂದಿನ ನಮೂದು, ಸೂಚ್ಯಂಕ 2 ರಲ್ಲಿ",
       "ಸೂಚ್ಯಂಕ 1 ರಲ್ಲಿ",
       "ಎಲ್ಲಿಯೂ ಇಲ್ಲ",
       "head ನಲ್ಲಿ"
      ],
      "correct": 0
     },
     {
      "q": "What was needed to detect that the newest entry had been dropped?",
      "qKn": "ಹೊಸ ನಮೂದನ್ನು ಬಿಡಲಾಗಿದೆ ಎಂದು ಪತ್ತೆ ಮಾಡಲು ಏನು ಬೇಕಾಯಿತು?",
      "opts": [
       "A saved head hash kept outside the journal",
       "A longer chain",
       "A second role",
       "More entries"
      ],
      "optsKn": [
       "ಜರ್ನಲ್ ಹೊರಗೆ ಇಟ್ಟ ಉಳಿಸಿದ head ಹ್ಯಾಶ್",
       "ಉದ್ದ ಸರಪಳಿ",
       "ಎರಡನೇ ಪಾತ್ರ",
       "ಹೆಚ್ಚು ನಮೂದುಗಳು"
      ],
      "correct": 0
     },
     {
      "q": "What happened when a role not in the policy tried to post a hypothesis?",
      "qKn": "ನೀತಿಯಲ್ಲಿಲ್ಲದ ಪಾತ್ರ hypothesis ಪೋಸ್ಟ್ ಮಾಡಲು ಪ್ರಯತ್ನಿಸಿದಾಗ ಏನಾಯಿತು?",
      "opts": [
       "It was denied",
       "It was allowed",
       "It became an admin",
       "It posted evidence"
      ],
      "optsKn": [
       "ಅದು ನಿರಾಕರಿಸಲ್ಪಟ್ಟಿತು",
       "ಅದು ಅನುಮತಿಸಲ್ಪಟ್ಟಿತು",
       "ಅದು admin ಆಯಿತು",
       "ಅದು ಸಾಕ್ಷ್ಯ ಪೋಸ್ಟ್ ಮಾಡಿತು"
      ],
      "correct": 0
     },
     {
      "q": "Did a finding citing only a hypothesis pass the provenance check?",
      "qKn": "hypothesis ಮಾತ್ರ ಉಲ್ಲೇಖಿಸಿದ ಸಂಶೋಧನೆ provenance ಪರಿಶೀಲನೆ ಹಾದುಹೋಯಿತೇ?",
      "opts": [
       "No",
       "Yes",
       "Only for admins",
       "Only with refs empty"
      ],
      "optsKn": [
       "ಇಲ್ಲ",
       "ಹೌದು",
       "admins ಗೆ ಮಾತ್ರ",
       "refs ಖಾಲಿಯಿದ್ದರೆ ಮಾತ್ರ"
      ],
      "correct": 0
     },
     {
      "q": "What does a verified chain not prove?",
      "qKn": "ಪರಿಶೀಲಿತ ಸರಪಳಿ ಏನನ್ನು ಸಾಬೀತುಪಡಿಸುವುದಿಲ್ಲ?",
      "opts": [
       "That the contents are honest",
       "That entries are linked",
       "That an edit changed a hash",
       "That the order is kept"
      ],
      "optsKn": [
       "ವಿಷಯ ಪ್ರಾಮಾಣಿಕ ಎಂದು",
       "ನಮೂದುಗಳು ಜೋಡಿಸಲ್ಪಟ್ಟಿವೆ ಎಂದು",
       "ಸಂಪಾದನೆ ಹ್ಯಾಶ್ ಬದಲಿಸಿತು ಎಂದು",
       "ಕ್ರಮ ಉಳಿದಿದೆ ಎಂದು"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
