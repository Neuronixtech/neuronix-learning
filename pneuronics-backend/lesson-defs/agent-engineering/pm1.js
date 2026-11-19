module.exports = {
 "phaseId": "6a369d6366020ed05b32158c",
 "moduleId": "6a369d6366020ed05b3215aa",
 "order": 0,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Claude Code Permission Modes and Auto Mode (Part 1 of 3) — Modes as a Table",
 "titleKn": "Claude Code ಅನುಮತಿ ಮೋಡ್‌ಗಳು ಮತ್ತು Auto ಮೋಡ್ (ಭಾಗ 1 / 3) — ಮೋಡ್‌ಗಳು ಕೋಷ್ಟಕವಾಗಿ",
 "desc": "Model permission modes as an allow, ask or deny table and count the prompts and unattended risk.",
 "descKn": "ಅನುಮತಿ ಮೋಡ್‌ಗಳನ್ನು allow, ask ಅಥವಾ deny ಕೋಷ್ಟಕವಾಗಿ ಮಾದರಿ ಮಾಡಿ prompts ಮತ್ತು ಮೇಲ್ವಿಚಾರಣೆ ಇಲ್ಲದ ಅಪಾಯ ಎಣಿಸಿ.",
 "objectives": [
  "Write a mode table.",
  "Replay a session.",
  "Count prompts.",
  "Count unattended risk.",
  "Apply a deny rule first."
 ],
 "objectivesKn": [
  "ಮೋಡ್ ಕೋಷ್ಟಕ ಬರೆಯಿರಿ.",
  "ಸೆಷನ್ ಮರುಪ್ರದರ್ಶಿಸಿ.",
  "prompts ಎಣಿಸಿ.",
  "ಮೇಲ್ವಿಚಾರಣೆ ಇಲ್ಲದ ಅಪಾಯ ಎಣಿಸಿ.",
  "ಮೊದಲು deny ನಿಯಮ ಅನ್ವಯಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Claude Code Permission Modes and Auto Mode (Part 1 of 3)",
    "textKn": "Claude Code ಅನುಮತಿ ಮೋಡ್‌ಗಳು ಮತ್ತು Auto ಮೋಡ್ (ಭಾಗ 1 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 1 of 3: a six-mode table mapping action categories to allow, ask or deny, a forty-action session replayed under each mode, risky actions that run unattended and deny rules that override a mode. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind agent permission modes (a six-mode allow/ask/deny table, prompt counts, deny rules, a two-stage classifier, obfuscation, a hard policy and a trajectory monitor), not the real software, and the mode table, the command lists and the sessions are invented for the lab, the classifier is a handful of string rules, and nothing is executed and no language model or real product setting is involved, so no real LLM behaviour is measured. The original code/main.py was not supplied, so the labs are our own implementation. The mode names and any figures the lesson quotes about a specific product are cited from the lesson and were not checked against that product; the mode table, the command lists, the string rules and every rate in the labs are invented to show the ideas. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 1ನೆಯದು: ಕ್ರಿಯಾ ವರ್ಗಗಳನ್ನು allow, ask ಅಥವಾ deny ಗೆ ಮ್ಯಾಪ್ ಮಾಡುವ ಆರು-ಮೋಡ್ ಕೋಷ್ಟಕ, ಪ್ರತಿ ಮೋಡ್‌ನಲ್ಲಿ ಮರುಪ್ರದರ್ಶಿಸಿದ ನಲವತ್ತು-ಕ್ರಿಯೆ ಸೆಷನ್, ಮಾನವ ನಿರ್ಧಾರವಿಲ್ಲದೆ ಓಡುವ ಅಪಾಯಕಾರಿ ಕ್ರಿಯೆಗಳು ಮತ್ತು ಮೋಡ್ ಅನ್ನು ಮೀರಿಸುವ deny ನಿಯಮಗಳು. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು agent ಅನುಮತಿ ಮೋಡ್‌ಗಳು (ಆರು-ಮೋಡ್ allow/ask/deny ಕೋಷ್ಟಕ, prompt ಎಣಿಕೆಗಳು, deny ನಿಯಮಗಳು, ಎರಡು-ಹಂತದ ವರ್ಗೀಕಾರಕ, obfuscation, ಕಠಿಣ ನೀತಿ ಮತ್ತು trajectory ಮಾನಿಟರ್) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಮೋಡ್ ಕೋಷ್ಟಕ, ಕಮಾಂಡ್ ಪಟ್ಟಿಗಳು ಮತ್ತು ಸೆಷನ್‌ಗಳು ಲ್ಯಾಬ್‌ಗಾಗಿ ಕಲ್ಪಿತ, ವರ್ಗೀಕಾರಕ ಕೆಲವು ಸ್ಟ್ರಿಂಗ್ ನಿಯಮಗಳು, ಮತ್ತು ಯಾವುದೂ ಕಾರ್ಯಗತಗೊಳ್ಳುವುದಿಲ್ಲ ಹಾಗೂ ಭಾಷಾ ಮಾದರಿ ಅಥವಾ ನಿಜ ಉತ್ಪನ್ನ ಸೆಟ್ಟಿಂಗ್ ಇಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ code/main.py ಒದಗಿಸಿರಲಿಲ್ಲ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ನಮ್ಮದೇ ಅನುಷ್ಠಾನ. ನಿರ್ದಿಷ್ಟ ಉತ್ಪನ್ನದ ಬಗ್ಗೆ lesson ಉಲ್ಲೇಖಿಸುವ ಮೋಡ್ ಹೆಸರುಗಳು ಮತ್ತು ಅಂಕಿಗಳು lesson ನಿಂದ ಉಲ್ಲೇಖಿತ ಮತ್ತು ಆ ಉತ್ಪನ್ನದ ವಿರುದ್ಧ ಪರಿಶೀಲಿಸಲಾಗಿಲ್ಲ; ಮೋಡ್ ಕೋಷ್ಟಕ, ಕಮಾಂಡ್ ಪಟ್ಟಿಗಳು, ಸ್ಟ್ರಿಂಗ್ ನಿಯಮಗಳು ಮತ್ತು ಲ್ಯಾಬ್‌ಗಳ ಪ್ರತಿ ದರ ಕಲ್ಪನೆಗಳನ್ನು ತೋರಿಸಲು ಕಲ್ಪಿತ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Every Prompt Saved Is a Decision Delegated",
    "textKn": "ಉಳಿಸಿದ ಪ್ರತಿ Prompt ಒಂದು ನಿಯೋಜಿತ ನಿರ್ಧಾರ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Six Modes in One Table",
    "headingKn": "ಒಂದು ಕೋಷ್ಟಕದಲ್ಲಿ ಆರು ಮೋಡ್‌ಗಳು",
    "bodyEn": "A permission mode sets how much an agent may do before it has to ask a person. This part models six modes as a table from six kinds of action to allow, ask or deny, replays the same forty-action session under each mode and counts the prompts, counts which risky actions run with no human decision, and shows that a deny rule checked before the mode holds even in the most permissive one. The table is invented and is not any product configuration.",
    "bodyKn": "ಅನುಮತಿ ಮೋಡ್ agent ವ್ಯಕ್ತಿಯನ್ನು ಕೇಳುವ ಮೊದಲು ಎಷ್ಟು ಮಾಡಬಹುದು ಎಂದು ಹೊಂದಿಸುತ್ತದೆ. ಈ ಭಾಗ ಆರು ಮೋಡ್‌ಗಳನ್ನು ಆರು ರೀತಿಯ ಕ್ರಿಯೆಯಿಂದ allow, ask ಅಥವಾ deny ಗೆ ಕೋಷ್ಟಕವಾಗಿ ಮಾದರಿ ಮಾಡುತ್ತದೆ, ಅದೇ ನಲವತ್ತು-ಕ್ರಿಯೆ ಸೆಷನ್ ಪ್ರತಿ ಮೋಡ್‌ನಲ್ಲಿ ಮರುಪ್ರದರ್ಶಿಸಿ prompts ಎಣಿಸುತ್ತದೆ, ಯಾವ ಅಪಾಯಕಾರಿ ಕ್ರಿಯೆಗಳು ಮಾನವ ನಿರ್ಧಾರವಿಲ್ಲದೆ ಓಡುತ್ತವೆ ಎಣಿಸುತ್ತದೆ ಮತ್ತು ಮೋಡ್‌ಗಿಂತ ಮೊದಲು ಪರಿಶೀಲಿಸುವ deny ನಿಯಮ ಅತ್ಯಂತ ಅನುಮತಿಸುವ ಮೋಡ್‌ನಲ್ಲೂ ಉಳಿಯುತ್ತದೆ ಎಂದು ತೋರಿಸುತ್ತದೆ. ಕೋಷ್ಟಕ ಕಲ್ಪಿತ ಮತ್ತು ಯಾವುದೇ ಉತ್ಪನ್ನ ಸಂರಚನೆ ಅಲ್ಲ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Permission Modes as a Table",
    "headingKn": "ಅನುಮತಿ ಮೋಡ್‌ಗಳು ಕೋಷ್ಟಕವಾಗಿ",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">a mode is a table, and a deny rule is checked first</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">action</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">category</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">mode</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">table lookup</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">allow ask deny</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">decision</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">deny rule</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">overrides mode</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">a mode is a table, and a deny rule is checked first</text></svg>",
    "captionEn": "Each mode decides allow, ask or deny per kind of action.",
    "captionKn": "ಪ್ರತಿ ಮೋಡ್ ಪ್ರತಿ ರೀತಿಯ ಕ್ರಿಯೆಗೆ allow, ask ಅಥವಾ deny ನಿರ್ಧರಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "captionEn": "The session replayed",
    "captionKn": "ಮರುಪ್ರದರ್ಶಿಸಿದ ಸೆಷನ್",
    "rows": "Action category|Count in the 40-action session\nread|14\nedit|10\nsafe_cmd|8\nrisky_cmd, network, delete|3, 3 and 2\nmodes|ask_always, default, accept_edits, plan, auto, bypass"
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
    "filename": "pm_1.py",
    "headingEn": "The mode table and the decision function",
    "headingKn": "ಮೋಡ್ ಕೋಷ್ಟಕ ಮತ್ತು ನಿರ್ಧಾರ ಕಾರ್ಯ",
    "descEn": "MODES maps each mode and action category to allow, ask or deny and decide checks the deny rules first and then the mode.",
    "descKn": "MODES ಪ್ರತಿ ಮೋಡ್ ಮತ್ತು ಕ್ರಿಯಾ ವರ್ಗವನ್ನು allow, ask ಅಥವಾ deny ಗೆ ಮ್ಯಾಪ್ ಮಾಡುತ್ತದೆ ಮತ್ತು decide ಮೊದಲು deny ನಿಯಮಗಳನ್ನು ಮತ್ತು ನಂತರ ಮೋಡ್ ಅನ್ನು ಪರಿಶೀಲಿಸುತ್ತದೆ.",
    "code": "ACTIONS = [\"read\", \"edit\", \"safe_cmd\", \"risky_cmd\", \"network\", \"delete\"]\nMODES = {\n    \"ask_always\": {\"read\": \"ask\", \"edit\": \"ask\", \"safe_cmd\": \"ask\", \"risky_cmd\": \"ask\", \"network\": \"ask\", \"delete\": \"ask\"},\n    \"default\": {\"read\": \"allow\", \"edit\": \"ask\", \"safe_cmd\": \"ask\", \"risky_cmd\": \"ask\", \"network\": \"ask\", \"delete\": \"ask\"},\n    \"accept_edits\": {\"read\": \"allow\", \"edit\": \"allow\", \"safe_cmd\": \"ask\", \"risky_cmd\": \"ask\", \"network\": \"ask\", \"delete\": \"ask\"},\n    \"plan\": {\"read\": \"allow\", \"edit\": \"deny\", \"safe_cmd\": \"deny\", \"risky_cmd\": \"deny\", \"network\": \"deny\", \"delete\": \"deny\"},\n    \"auto\": {\"read\": \"allow\", \"edit\": \"allow\", \"safe_cmd\": \"allow\", \"risky_cmd\": \"ask\", \"network\": \"ask\", \"delete\": \"ask\"},\n    \"bypass\": {\"read\": \"allow\", \"edit\": \"allow\", \"safe_cmd\": \"allow\", \"risky_cmd\": \"allow\", \"network\": \"allow\", \"delete\": \"allow\"},\n}\n\nSESSION = ([\"read\"] * 14 + [\"edit\"] * 10 + [\"safe_cmd\"] * 8 + [\"risky_cmd\"] * 3 + [\"network\"] * 3 + [\"delete\"] * 2)\n\n\ndef decide(mode, action, deny_rules=()):\n    if action in deny_rules:\n        return \"deny\"\n    return MODES[mode][action]"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "pm_1.py",
    "headingEn": "main(): experiments",
    "headingKn": "main(): ಪ್ರಯೋಗಗಳು",
    "descEn": "main() prints the table, replays the session under each mode, counts unattended risky actions and applies deny rules.",
    "descKn": "main() ಕೋಷ್ಟಕ ಮುದ್ರಿಸಿ, ಪ್ರತಿ ಮೋಡ್‌ನಲ್ಲಿ ಸೆಷನ್ ಮರುಪ್ರದರ್ಶಿಸಿ, ಮೇಲ್ವಿಚಾರಣೆ ಇಲ್ಲದ ಅಪಾಯಕಾರಿ ಕ್ರಿಯೆ ಎಣಿಸಿ ಮತ್ತು deny ನಿಯಮ ಅನ್ವಯಿಸುತ್ತದೆ.",
    "code": "def main():\n    section(\"1. Genuinely running: the mode table\")\n    print(f\"{'mode':12}\" + \"\".join(f\"{a:>10}\" for a in ACTIONS))\n    for m, row in MODES.items():\n        print(f\"{m:12}\" + \"\".join(f\"{row[a]:>10}\" for a in ACTIONS))\n    print(\"each mode answers the same six questions differently, from asking about everything to allowing everything, and plan mode allows reads and denies the rest; the table is a simplified model with invented cells\")\n\n    section(\"2. Genuinely measuring: the same forty-action session under each mode\")\n    print(f\"session: {dict(Counter(SESSION))}\")\n    for m in MODES:\n        c = Counter(decide(m, a) for a in SESSION)\n        print(f\"{m:12} allow {c['allow']:2d} | ask {c['ask']:2d} | deny {c['deny']:2d}\")\n    print(\"the number of human prompts falls from 40 to 0 as the mode gets more permissive, but the actions allowed without asking grow in step, so every prompt saved is a decision moved from a person to a rule; plan mode produces no prompts only because it denies nearly everything\")\n\n    section(\"3. Genuinely measuring: which risky actions run without a human decision\")\n    for m in MODES:\n        unattended = sum(1 for a in SESSION if a in (\"risky_cmd\", \"network\", \"delete\") and decide(m, a) == \"allow\")\n        asked = sum(1 for a in SESSION if a in (\"risky_cmd\", \"network\", \"delete\") and decide(m, a) == \"ask\")\n        print(f\"{m:12}: of 8 risky actions, run with no human decision {unattended} | put to a human {asked}\")\n    print(\"only the bypass mode runs all eight risky actions unattended, and the auto mode keeps all eight in front of a human; the lab counts actions by category and does not judge whether a given command is actually risky\")\n\n    section(\"4. Genuinely running: a deny rule overrides the mode\")\n    for m in (\"auto\", \"bypass\"):\n        rows = [f\"{a}={decide(m, a, deny_rules=('delete', 'network'))}\" for a in ACTIONS]\n        print(f\"{m:7} with deny rules for delete and network: {' '.join(rows)}\")\n    print(\"a deny rule is checked before the mode, so even bypass cannot delete or use the network once those are denied, which is why hard rules sit outside the mode setting; the rule list here is a tuple in the same program and a real system keeps it where the agent cannot edit it\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: the mode table ---\nmode              read      edit  safe_cmd risky_cmd   network    delete\nask_always         ask       ask       ask       ask       ask       ask\ndefault          allow       ask       ask       ask       ask       ask\naccept_edits     allow     allow       ask       ask       ask       ask\nplan             allow      deny      deny      deny      deny      deny\nauto             allow     allow     allow       ask       ask       ask\nbypass           allow     allow     allow     allow     allow     allow\neach mode answers the same six questions differently, from asking about everything to allowing everything, and plan mode allows reads and denies the rest; the table is a simplified model with invented cells\n\n--- 2. Genuinely measuring: the same forty-action session under each mode ---\nsession: {'read': 14, 'edit': 10, 'safe_cmd': 8, 'risky_cmd': 3, 'network': 3, 'delete': 2}\nask_always   allow  0 | ask 40 | deny  0\ndefault      allow 14 | ask 26 | deny  0\naccept_edits allow 24 | ask 16 | deny  0\nplan         allow 14 | ask  0 | deny 26\nauto         allow 32 | ask  8 | deny  0\nbypass       allow 40 | ask  0 | deny  0\nthe number of human prompts falls from 40 to 0 as the mode gets more permissive, but the actions allowed without asking grow in step, so every prompt saved is a decision moved from a person to a rule; plan mode produces no prompts only because it denies nearly everything\n\n--- 3. Genuinely measuring: which risky actions run without a human decision ---\nask_always  : of 8 risky actions, run with no human decision 0 | put to a human 8\ndefault     : of 8 risky actions, run with no human decision 0 | put to a human 8\naccept_edits: of 8 risky actions, run with no human decision 0 | put to a human 8\nplan        : of 8 risky actions, run with no human decision 0 | put to a human 0\nauto        : of 8 risky actions, run with no human decision 0 | put to a human 8\nbypass      : of 8 risky actions, run with no human decision 8 | put to a human 0\nonly the bypass mode runs all eight risky actions unattended, and the auto mode keeps all eight in front of a human; the lab counts actions by category and does not judge whether a given command is actually risky\n\n--- 4. Genuinely running: a deny rule overrides the mode ---\nauto    with deny rules for delete and network: read=allow edit=allow safe_cmd=allow risky_cmd=ask network=deny delete=deny\nbypass  with deny rules for delete and network: read=allow edit=allow safe_cmd=allow risky_cmd=allow network=deny delete=deny\na deny rule is checked before the mode, so even bypass cannot delete or use the network once those are denied, which is why hard rules sit outside the mode setting; the rule list here is a tuple in the same program and a real system keeps it where the agent cannot edit it"
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
    "headingEn": "Experiment 1: The mode table",
    "headingKn": "ಪ್ರಯೋಗ 1: The mode table",
    "bodyEn": "What it ran: The mode table. What the lab concluded: each mode answers the same six questions differently, from asking about everything to allowing everything, and plan mode allows reads and denies the rest; the table is a simplified model with invented cells",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: The mode table. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): each mode answers the same six questions differently, from asking about everything to allowing everything, and plan mode allows reads and denies the rest; the table is a simplified model with invented cells"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. Genuinely running: the mode table ---\nmode              read      edit  safe_cmd risky_cmd   network    delete\nask_always         ask       ask       ask       ask       ask       ask\ndefault          allow       ask       ask       ask       ask       ask\naccept_edits     allow     allow       ask       ask       ask       ask\nplan             allow      deny      deny      deny      deny      deny\nauto             allow     allow     allow       ask       ask       ask\nbypass           allow     allow     allow     allow     allow     allow"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: The same forty-action session under each mode",
    "headingKn": "ಪ್ರಯೋಗ 2: The same forty-action session under each mode",
    "bodyEn": "What it ran: The same forty-action session under each mode. What the lab concluded: the number of human prompts falls from 40 to 0 as the mode gets more permissive, but the actions allowed without asking grow in step, so every prompt saved is a decision moved from a person to a rule; plan mode produces no prompts only because it denies nearly everything",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: The same forty-action session under each mode. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the number of human prompts falls from 40 to 0 as the mode gets more permissive, but the actions allowed without asking grow in step, so every prompt saved is a decision moved from a person to a rule; plan mode produces no prompts only because it denies nearly everything"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely measuring: the same forty-action session under each mode ---\nsession: {'read': 14, 'edit': 10, 'safe_cmd': 8, 'risky_cmd': 3, 'network': 3, 'delete': 2}\nask_always   allow  0 | ask 40 | deny  0\ndefault      allow 14 | ask 26 | deny  0\naccept_edits allow 24 | ask 16 | deny  0\nplan         allow 14 | ask  0 | deny 26\nauto         allow 32 | ask  8 | deny  0\nbypass       allow 40 | ask  0 | deny  0"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: Which risky actions run without a human decision",
    "headingKn": "ಪ್ರಯೋಗ 3: Which risky actions run without a human decision",
    "bodyEn": "What it ran: Which risky actions run without a human decision. What the lab concluded: only the bypass mode runs all eight risky actions unattended, and the auto mode keeps all eight in front of a human; the lab counts actions by category and does not judge whether a given command is actually risky",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Which risky actions run without a human decision. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): only the bypass mode runs all eight risky actions unattended, and the auto mode keeps all eight in front of a human; the lab counts actions by category and does not judge whether a given command is actually risky"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely measuring: which risky actions run without a human decision ---\nask_always  : of 8 risky actions, run with no human decision 0 | put to a human 8\ndefault     : of 8 risky actions, run with no human decision 0 | put to a human 8\naccept_edits: of 8 risky actions, run with no human decision 0 | put to a human 8\nplan        : of 8 risky actions, run with no human decision 0 | put to a human 0\nauto        : of 8 risky actions, run with no human decision 0 | put to a human 8\nbypass      : of 8 risky actions, run with no human decision 8 | put to a human 0"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 4: A deny rule overrides the mode",
    "headingKn": "ಪ್ರಯೋಗ 4: A deny rule overrides the mode",
    "bodyEn": "What it ran: A deny rule overrides the mode. What the lab concluded: a deny rule is checked before the mode, so even bypass cannot delete or use the network once those are denied, which is why hard rules sit outside the mode setting; the rule list here is a tuple in the same program and a real system keeps it where the agent cannot edit it",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A deny rule overrides the mode. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a deny rule is checked before the mode, so even bypass cannot delete or use the network once those are denied, which is why hard rules sit outside the mode setting; the rule list here is a tuple in the same program and a real system keeps it where the agent cannot edit it"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 4. Genuinely running: a deny rule overrides the mode ---\nauto    with deny rules for delete and network: read=allow edit=allow safe_cmd=allow risky_cmd=ask network=deny delete=deny\nbypass  with deny rules for delete and network: read=allow edit=allow safe_cmd=allow risky_cmd=allow network=deny delete=deny"
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
    "headingEn": "Genuinely Found: Prompts Under Each Mode",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಪ್ರತಿ ಮೋಡ್‌ನಲ್ಲಿ Prompts",
    "bodyEn": "Section 2: the 40-action session gave allow/ask/deny counts of 0/40/0 for ask_always, 14/26/0 for default, 24/16/0 for accept_edits, 14/0/26 for plan, 32/8/0 for auto and 40/0/0 for bypass.",
    "bodyKn": "ವಿಭಾಗ 2: 40-ಕ್ರಿಯೆ ಸೆಷನ್ allow/ask/deny ಎಣಿಕೆ ask_always ಗೆ 0/40/0, default ಗೆ 14/26/0, accept_edits ಗೆ 24/16/0, plan ಗೆ 14/0/26, auto ಗೆ 32/8/0 ಮತ್ತು bypass ಗೆ 40/0/0 ನೀಡಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Unattended Risk and Deny Rules",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಮೇಲ್ವಿಚಾರಣೆ ಇಲ್ಲದ ಅಪಾಯ ಮತ್ತು Deny ನಿಯಮಗಳು",
    "bodyEn": "Section 3: of 8 risky actions, bypass ran all 8 with no human decision, plan ran none and asked none, and every other mode put all 8 to a human. Section 4: with deny rules for delete and network, auto and bypass both showed network=deny and delete=deny while bypass still allowed risky_cmd.",
    "bodyKn": "ವಿಭಾಗ 3: 8 ಅಪಾಯಕಾರಿ ಕ್ರಿಯೆಗಳಲ್ಲಿ bypass ಎಲ್ಲಾ 8 ಅನ್ನು ಮಾನವ ನಿರ್ಧಾರವಿಲ್ಲದೆ ಓಡಿಸಿತು, plan ಯಾವುದನ್ನೂ ಓಡಿಸಲಿಲ್ಲ ಮತ್ತು ಕೇಳಲಿಲ್ಲ, ಮತ್ತು ಉಳಿದ ಪ್ರತಿ ಮೋಡ್ ಎಲ್ಲಾ 8 ಅನ್ನು ಮಾನವನ ಮುಂದೆ ಇಟ್ಟಿತು. ವಿಭಾಗ 4: delete ಮತ್ತು network ಗೆ deny ನಿಯಮಗಳೊಂದಿಗೆ, auto ಮತ್ತು bypass ಎರಡೂ network=deny ಮತ್ತು delete=deny ತೋರಿಸಿದವು ಆದರೆ bypass ಇನ್ನೂ risky_cmd ಅನುಮತಿಸಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "Fewer prompts mean less fatigue and faster work, but each one removed hands a decision to a rule, so the mode should match how much a wrong action would cost.",
    "bodyKn": "ಕಡಿಮೆ prompts ಎಂದರೆ ಕಡಿಮೆ ಆಯಾಸ ಮತ್ತು ವೇಗದ ಕೆಲಸ, ಆದರೆ ತೆಗೆದ ಪ್ರತಿಯೊಂದೂ ನಿರ್ಧಾರವನ್ನು ನಿಯಮಕ್ಕೆ ಹಸ್ತಾಂತರಿಸುತ್ತದೆ, ಆದ್ದರಿಂದ ಮೋಡ್ ತಪ್ಪು ಕ್ರಿಯೆಗೆ ಎಷ್ಟು ವೆಚ್ಚವಾಗುತ್ತದೆ ಎಂಬುದಕ್ಕೆ ಹೊಂದಬೇಕು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"plan mode is the safest because it never asks.\" It asked zero times only because it denied 26 of 40 actions.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"plan ಮೋಡ್ ಎಂದಿಗೂ ಕೇಳದ ಕಾರಣ ಸುರಕ್ಷಿತ.\" ಅದು 40 ರಲ್ಲಿ 26 ಕ್ರಿಯೆಗಳನ್ನು ನಿರಾಕರಿಸಿದ್ದರಿಂದ ಮಾತ್ರ ಶೂನ್ಯ ಬಾರಿ ಕೇಳಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Permission mode: a preset of what is allowed, asked or denied. Prompt: a request for human approval. Deny rule: a rule that blocks regardless of mode. Unattended: run with no human decision.",
    "bodyKn": "Permission mode: ಏನನ್ನು ಅನುಮತಿಸುವುದು, ಕೇಳುವುದು ಅಥವಾ ನಿರಾಕರಿಸುವುದು ಎಂಬ ಪೂರ್ವನಿಗದಿ. Prompt: ಮಾನವ ಅನುಮೋದನೆಗೆ ವಿನಂತಿ. Deny rule: ಮೋಡ್ ಏನೇ ಇರಲಿ ತಡೆಯುವ ನಿಯಮ. Unattended: ಮಾನವ ನಿರ್ಧಾರವಿಲ್ಲದೆ ಓಡಿ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) ask_always asked 40 times, bypass 0. 2) Auto asked 8 times and allowed 32. 3) Only bypass ran all 8 risky actions unattended. 4) Deny rules held even in bypass. 5) The table is invented.",
    "bodyKn": "1) ask_always 40 ಬಾರಿ ಕೇಳಿತು, bypass 0. 2) auto 8 ಬಾರಿ ಕೇಳಿ 32 ಅನುಮತಿಸಿತು. 3) bypass ಮಾತ್ರ ಎಲ್ಲಾ 8 ಅಪಾಯಕಾರಿ ಕ್ರಿಯೆಗಳನ್ನು ಮೇಲ್ವಿಚಾರಣೆ ಇಲ್ಲದೆ ಓಡಿಸಿತು. 4) bypass ನಲ್ಲೂ deny ನಿಯಮಗಳು ಉಳಿದವು. 5) ಕೋಷ್ಟಕ ಕಲ್ಪಿತ."
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
    "bodyEn": "1) Open a terminal in pneuronics-backend/lesson-defs/labs. 2) Run: python -B pm_1.py (in Git Bash on Windows: PYTHONIOENCODING=utf-8 python -B pm_1.py). 3) Compare each section with the walkthrough above. The -B flag stops Python from writing __pycache__ folders.",
    "bodyKn": "1) pneuronics-backend/lesson-defs/labs ನಲ್ಲಿ ಟರ್ಮಿನಲ್ ತೆರೆಯಿರಿ. 2) ಓಡಿಸಿ: python -B pm_1.py (Windows Git Bash ನಲ್ಲಿ: PYTHONIOENCODING=utf-8 python -B pm_1.py). 3) ಪ್ರತಿ ವಿಭಾಗವನ್ನು ಮೇಲಿನ ನಡೆದಾಟಕ್ಕೆ ಹೋಲಿಸಿ. -B ಧ್ವಜ Python __pycache__ ಫೋಲ್ಡರ್‌ಗಳನ್ನು ಬರೆಯುವುದನ್ನು ತಡೆಯುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Predict before you run",
    "headingKn": "ಓಡಿಸುವ ಮುನ್ನ ಊಹಿಸಿ",
    "bodyEn": "Before rerunning, write down what you expect each experiment to print, then compare:\n1. The mode table\n2. The same forty-action session under each mode\n3. Which risky actions run without a human decision\n4. A deny rule overrides the mode",
    "bodyKn": "ಮರುಓಡಿಸುವ ಮುನ್ನ ಪ್ರತಿ ಪ್ರಯೋಗ ಏನು ಮುದ್ರಿಸುತ್ತದೆ ಎಂದು ನಿರೀಕ್ಷಿಸುವುದನ್ನು ಬರೆಯಿರಿ, ನಂತರ ಹೋಲಿಸಿ:\n1. The mode table\n2. The same forty-action session under each mode\n3. Which risky actions run without a human decision\n4. A deny rule overrides the mode"
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "How many of the 40 actions did auto mode put to a human?",
      "qKn": "40 ಕ್ರಿಯೆಗಳಲ್ಲಿ auto ಮೋಡ್ ಎಷ್ಟನ್ನು ಮಾನವನ ಮುಂದೆ ಇಟ್ಟಿತು?",
      "opts": [
       "8",
       "26",
       "16",
       "0"
      ],
      "optsKn": [
       "8",
       "26",
       "16",
       "0"
      ],
      "correct": 0
     },
     {
      "q": "Which mode ran all 8 risky actions with no human decision?",
      "qKn": "ಯಾವ ಮೋಡ್ ಎಲ್ಲಾ 8 ಅಪಾಯಕಾರಿ ಕ್ರಿಯೆಗಳನ್ನು ಮಾನವ ನಿರ್ಧಾರವಿಲ್ಲದೆ ಓಡಿಸಿತು?",
      "opts": [
       "bypass",
       "auto",
       "default",
       "plan"
      ],
      "optsKn": [
       "bypass",
       "auto",
       "default",
       "plan"
      ],
      "correct": 0
     },
     {
      "q": "How many actions did plan mode deny?",
      "qKn": "plan ಮೋಡ್ ಎಷ್ಟು ಕ್ರಿಯೆಗಳನ್ನು ನಿರಾಕರಿಸಿತು?",
      "opts": [
       "26",
       "8",
       "14",
       "40"
      ],
      "optsKn": [
       "26",
       "8",
       "14",
       "40"
      ],
      "correct": 0
     },
     {
      "q": "Why did a deny rule hold even in bypass?",
      "qKn": "bypass ನಲ್ಲೂ deny ನಿಯಮ ಏಕೆ ಉಳಿಯಿತು?",
      "opts": [
       "It is checked before the mode table",
       "Bypass ignores tables",
       "It was added to the mode",
       "It was a prompt"
      ],
      "optsKn": [
       "ಅದನ್ನು ಮೋಡ್ ಕೋಷ್ಟಕಕ್ಕಿಂತ ಮೊದಲು ಪರಿಶೀಲಿಸಲಾಗುತ್ತದೆ",
       "bypass ಕೋಷ್ಟಕಗಳನ್ನು ನಿರ್ಲಕ್ಷಿಸುತ್ತದೆ",
       "ಅದನ್ನು ಮೋಡ್‌ಗೆ ಸೇರಿಸಲಾಗಿತ್ತು",
       "ಅದು prompt ಆಗಿತ್ತು"
      ],
      "correct": 0
     },
     {
      "q": "Is the lab table the configuration of a real product?",
      "qKn": "ಲ್ಯಾಬ್ ಕೋಷ್ಟಕ ನಿಜ ಉತ್ಪನ್ನದ ಸಂರಚನೆಯೇ?",
      "opts": [
       "No, it is invented",
       "Yes, exactly",
       "Yes, for one product",
       "It was copied from main.py"
      ],
      "optsKn": [
       "ಇಲ್ಲ, ಅದು ಕಲ್ಪಿತ",
       "ಹೌದು, ಇದ್ದಂತೆಯೇ",
       "ಹೌದು, ಒಂದು ಉತ್ಪನ್ನಕ್ಕೆ",
       "ಅದನ್ನು main.py ಯಿಂದ ನಕಲಿಸಲಾಯಿತು"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
