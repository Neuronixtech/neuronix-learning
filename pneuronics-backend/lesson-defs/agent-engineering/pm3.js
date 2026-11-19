module.exports = {
 "phaseId": "6a369d6366020ed05b32158c",
 "moduleId": "6a369d6366020ed05b3215aa",
 "order": 2,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Claude Code Permission Modes and Auto Mode (Part 3 of 3) — Hard Policy and Trajectory Monitoring",
 "titleKn": "Claude Code ಅನುಮತಿ ಮೋಡ್‌ಗಳು ಮತ್ತು Auto ಮೋಡ್ (ಭಾಗ 3 / 3) — ಕಠಿಣ ನೀತಿ ಮತ್ತು Trajectory ಮೇಲ್ವಿಚಾರಣೆ",
 "desc": "Add a hard policy under the modes and a monitor for dangerous sequences, and measure their limits.",
 "descKn": "ಮೋಡ್‌ಗಳ ಕೆಳಗೆ ಕಠಿಣ ನೀತಿ ಮತ್ತು ಅಪಾಯಕಾರಿ ಅನುಕ್ರಮಗಳಿಗೆ ಮಾನಿಟರ್ ಸೇರಿಸಿ ಮತ್ತು ಅವುಗಳ ಮಿತಿ ಅಳೆಯಿರಿ.",
 "objectives": [
  "Write a hard policy.",
  "Check it before the mode.",
  "Monitor a sequence.",
  "Measure false alarms by window.",
  "Show how padding hides a pattern."
 ],
 "objectivesKn": [
  "ಕಠಿಣ ನೀತಿ ಬರೆಯಿರಿ.",
  "ಮೋಡ್‌ಗಿಂತ ಮೊದಲು ಪರಿಶೀಲಿಸಿ.",
  "ಅನುಕ್ರಮ ಮಾನಿಟರ್ ಮಾಡಿ.",
  "ವಿಂಡೋದ ಮೂಲಕ ತಪ್ಪು ಎಚ್ಚರಿಕೆ ಅಳೆಯಿರಿ.",
  "ತುಂಬುವುದು ಮಾದರಿ ಹೇಗೆ ಮರೆಮಾಡುತ್ತದೆ ತೋರಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Claude Code Permission Modes and Auto Mode (Part 3 of 3)",
    "textKn": "Claude Code ಅನುಮತಿ ಮೋಡ್‌ಗಳು ಮತ್ತು Auto ಮೋಡ್ (ಭಾಗ 3 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 3 of 3: a hard policy that no mode can override, a trajectory monitor that flags a secret read followed by an external post, false alarms on random sessions and how filler actions hide the pattern from a fixed window. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind agent permission modes (a six-mode allow/ask/deny table, prompt counts, deny rules, a two-stage classifier, obfuscation, a hard policy and a trajectory monitor), not the real software, and the mode table, the command lists and the sessions are invented for the lab, the classifier is a handful of string rules, and nothing is executed and no language model or real product setting is involved, so no real LLM behaviour is measured. The original code/main.py was not supplied, so the labs are our own implementation. The mode names and any figures the lesson quotes about a specific product are cited from the lesson and were not checked against that product; the mode table, the command lists, the string rules and every rate in the labs are invented to show the ideas. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 3ನೆಯದು: ಯಾವ ಮೋಡ್ ಮೀರಲಾಗದ ಕಠಿಣ ನೀತಿ, ರಹಸ್ಯ ಓದಿನ ನಂತರ ಬಾಹ್ಯ post ಅನ್ನು ಗುರುತಿಸುವ trajectory ಮಾನಿಟರ್, ಯಾದೃಚ್ಛಿಕ ಸೆಷನ್‌ಗಳಲ್ಲಿ ತಪ್ಪು ಎಚ್ಚರಿಕೆಗಳು ಮತ್ತು ತುಂಬುವ ಕ್ರಿಯೆಗಳು ನಿಗದಿತ ವಿಂಡೋದಿಂದ ಮಾದರಿ ಹೇಗೆ ಮರೆಮಾಡುತ್ತವೆ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು agent ಅನುಮತಿ ಮೋಡ್‌ಗಳು (ಆರು-ಮೋಡ್ allow/ask/deny ಕೋಷ್ಟಕ, prompt ಎಣಿಕೆಗಳು, deny ನಿಯಮಗಳು, ಎರಡು-ಹಂತದ ವರ್ಗೀಕಾರಕ, obfuscation, ಕಠಿಣ ನೀತಿ ಮತ್ತು trajectory ಮಾನಿಟರ್) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಮೋಡ್ ಕೋಷ್ಟಕ, ಕಮಾಂಡ್ ಪಟ್ಟಿಗಳು ಮತ್ತು ಸೆಷನ್‌ಗಳು ಲ್ಯಾಬ್‌ಗಾಗಿ ಕಲ್ಪಿತ, ವರ್ಗೀಕಾರಕ ಕೆಲವು ಸ್ಟ್ರಿಂಗ್ ನಿಯಮಗಳು, ಮತ್ತು ಯಾವುದೂ ಕಾರ್ಯಗತಗೊಳ್ಳುವುದಿಲ್ಲ ಹಾಗೂ ಭಾಷಾ ಮಾದರಿ ಅಥವಾ ನಿಜ ಉತ್ಪನ್ನ ಸೆಟ್ಟಿಂಗ್ ಇಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ code/main.py ಒದಗಿಸಿರಲಿಲ್ಲ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ನಮ್ಮದೇ ಅನುಷ್ಠಾನ. ನಿರ್ದಿಷ್ಟ ಉತ್ಪನ್ನದ ಬಗ್ಗೆ lesson ಉಲ್ಲೇಖಿಸುವ ಮೋಡ್ ಹೆಸರುಗಳು ಮತ್ತು ಅಂಕಿಗಳು lesson ನಿಂದ ಉಲ್ಲೇಖಿತ ಮತ್ತು ಆ ಉತ್ಪನ್ನದ ವಿರುದ್ಧ ಪರಿಶೀಲಿಸಲಾಗಿಲ್ಲ; ಮೋಡ್ ಕೋಷ್ಟಕ, ಕಮಾಂಡ್ ಪಟ್ಟಿಗಳು, ಸ್ಟ್ರಿಂಗ್ ನಿಯಮಗಳು ಮತ್ತು ಲ್ಯಾಬ್‌ಗಳ ಪ್ರತಿ ದರ ಕಲ್ಪನೆಗಳನ್ನು ತೋರಿಸಲು ಕಲ್ಪಿತ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Two Things a Mode Cannot Do",
    "textKn": "ಮೋಡ್ ಮಾಡಲಾಗದ ಎರಡು ವಿಷಯಗಳು",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "A Floor Under the Modes and a Watch Over Sequences",
    "headingKn": "ಮೋಡ್‌ಗಳ ಕೆಳಗೆ ನೆಲ ಮತ್ತು ಅನುಕ್ರಮಗಳ ಮೇಲೆ ನಿಗಾ",
    "bodyEn": "A mode answers whether each action is allowed on its own, but two gaps remain. Some actions should never be allowed whatever the mode, and a harmless-looking set of allowed actions can add up to something harmful. This part builds a hard policy checked before any mode, a trajectory monitor that flags a secret read followed soon by an external post, measures its false alarms on random sessions and shows how padding the sequence defeats a fixed look-back window.",
    "bodyKn": "ಮೋಡ್ ಪ್ರತಿ ಕ್ರಿಯೆ ಸ್ವತಃ ಅನುಮತಿಸಲ್ಪಟ್ಟಿದೆಯೇ ಎಂದು ಉತ್ತರಿಸುತ್ತದೆ, ಆದರೆ ಎರಡು ಅಂತರ ಉಳಿಯುತ್ತವೆ. ಕೆಲವು ಕ್ರಿಯೆಗಳು ಮೋಡ್ ಏನೇ ಇರಲಿ ಎಂದಿಗೂ ಅನುಮತಿಸಬಾರದು, ಮತ್ತು ಹಾನಿರಹಿತ ಎಂದು ಕಾಣುವ ಅನುಮತಿಸಿದ ಕ್ರಿಯೆಗಳ ಸೆಟ್ ಹಾನಿಕಾರಕವಾದದ್ದಕ್ಕೆ ಸೇರಬಹುದು. ಈ ಭಾಗ ಯಾವುದೇ ಮೋಡ್‌ಗಿಂತ ಮೊದಲು ಪರಿಶೀಲಿಸುವ ಕಠಿಣ ನೀತಿ, ರಹಸ್ಯ ಓದಿನ ನಂತರ ಶೀಘ್ರದಲ್ಲೇ ಬಾಹ್ಯ post ಗುರುತಿಸುವ trajectory ಮಾನಿಟರ್ ನಿರ್ಮಿಸುತ್ತದೆ, ಯಾದೃಚ್ಛಿಕ ಸೆಷನ್‌ಗಳಲ್ಲಿ ಅದರ ತಪ್ಪು ಎಚ್ಚರಿಕೆ ಅಳೆಯುತ್ತದೆ ಮತ್ತು ಅನುಕ್ರಮವನ್ನು ತುಂಬುವುದು ನಿಗದಿತ ನೋಟ-ಹಿಂದಿನ ವಿಂಡೋ ಹೇಗೆ ಸೋಲಿಸುತ್ತದೆ ತೋರಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Hard Policy and Trajectory Monitoring",
    "headingKn": "ಕಠಿಣ ನೀತಿ ಮತ್ತು Trajectory ಮೇಲ್ವಿಚಾರಣೆ",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">single actions pass, a sequence can still be flagged</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">hard policy</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">before any mode</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">mode</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">allows actions</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">monitor</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">watches sequences</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">window</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">fixed look-back</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">single actions pass, a sequence can still be flagged</text></svg>",
    "captionEn": "Some actions are never allowed, and some sequences are flagged.",
    "captionKn": "ಕೆಲವು ಕ್ರಿಯೆಗಳು ಎಂದಿಗೂ ಅನುಮತಿಸಲ್ಪಡುವುದಿಲ್ಲ, ಮತ್ತು ಕೆಲವು ಅನುಕ್ರಮಗಳು ಗುರುತಿಸಲ್ಪಡುತ್ತವೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "captionEn": "Parts of the lab",
    "captionKn": "ಲ್ಯಾಬ್‌ನ ಭಾಗಗಳು",
    "rows": "Part|Behavior\nhard policy|denies disable_monitor, write_policy_file and send_secret_external in every mode\nmodes|bypass, auto and default allow different action sets\nmonitor|flags read_secret followed by http_post within a window\nwindow|1, 2, 4 or 8 following actions\nrandom sessions|2000 sessions of 12 uniform random actions"
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
    "filename": "pm_3.py",
    "headingEn": "Authorization with a hard policy and the monitor",
    "headingKn": "ಕಠಿಣ ನೀತಿಯೊಂದಿಗೆ ಅಧಿಕಾರ ಮತ್ತು ಮಾನಿಟರ್",
    "descEn": "authorize checks the hard policy before the mode and monitor looks for a secret read followed by an external post inside a window.",
    "descKn": "authorize ಮೋಡ್‌ಗಿಂತ ಮೊದಲು ಕಠಿಣ ನೀತಿ ಪರಿಶೀಲಿಸುತ್ತದೆ ಮತ್ತು monitor ವಿಂಡೋ ಒಳಗೆ ರಹಸ್ಯ ಓದಿನ ನಂತರ ಬಾಹ್ಯ post ಹುಡುಕುತ್ತದೆ.",
    "code": "HARD_DENY = {\"disable_monitor\", \"write_policy_file\", \"send_secret_external\"}\nALL_ACTIONS = [\"read_file\", \"edit_file\", \"run_tests\", \"list_dir\", \"read_secret\", \"http_post\", \"disable_monitor\", \"write_policy_file\", \"send_secret_external\"]\nMODE_ALLOWS = {\"bypass\": set(ALL_ACTIONS), \"auto\": {\"read_file\", \"edit_file\", \"run_tests\", \"list_dir\", \"read_secret\", \"http_post\"}, \"default\": {\"read_file\", \"list_dir\"}}\n\n\ndef authorize(mode, action):\n    if action in HARD_DENY:\n        return False, \"hard policy\"\n    if action in MODE_ALLOWS[mode]:\n        return True, \"mode allows\"\n    return False, \"mode denies\"\n\n\ndef monitor(traj, window=4):\n    \"\"\"Flag a secret read followed by an external send within `window` later actions.\"\"\"\n    for i, a in enumerate(traj):\n        if a == \"read_secret\" and any(b == \"http_post\" for b in traj[i + 1:i + 1 + window]):\n            return f\"secret read at {i} then external post within {window} actions\"\n    return None\n\n\ndef benign_session(r, n=12):\n    return [r.choice([\"read_file\", \"edit_file\", \"run_tests\", \"list_dir\", \"http_post\", \"read_secret\"]) for _ in range(n)]"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "pm_3.py",
    "headingEn": "main(): experiments",
    "headingKn": "main(): ಪ್ರಯೋಗಗಳು",
    "descEn": "main() checks the hard policy against three modes, flags one trajectory, measures false alarms by window and pads the sequence.",
    "descKn": "main() ಮೂರು ಮೋಡ್‌ಗಳ ವಿರುದ್ಧ ಕಠಿಣ ನೀತಿ ಪರಿಶೀಲಿಸಿ, ಒಂದು trajectory ಗುರುತಿಸಿ, ವಿಂಡೋದಿಂದ ತಪ್ಪು ಎಚ್ಚರಿಕೆ ಅಳೆದು ಮತ್ತು ಅನುಕ್ರಮ ತುಂಬಿಸುತ್ತದೆ.",
    "code": "def main():\n    section(\"1. Genuinely running: a hard policy against three modes\")\n    for mode in MODE_ALLOWS:\n        row = []\n        for a in (\"read_file\", \"http_post\", \"disable_monitor\", \"send_secret_external\"):\n            ok, why = authorize(mode, a)\n            row.append(f\"{a}={'allow' if ok else 'deny'}({why})\")\n        print(f\"{mode:7}: \" + \" \".join(row))\n    print(\"the three hard-denied actions are refused in every mode including bypass, because the hard policy is checked before the mode table; the action names and the policy set are invented for the lab\")\n\n    section(\"2. Genuinely running: every action allowed, one trajectory flagged\")\n    traj = [\"list_dir\", \"read_file\", \"read_secret\", \"edit_file\", \"http_post\", \"run_tests\"]\n    print(\"each action allowed under auto:\", all(authorize(\"auto\", a)[0] for a in traj))\n    print(\"monitor on the sequence:\", monitor(traj))\n    print(\"the same actions in a harmless order:\", monitor([\"list_dir\", \"http_post\", \"read_file\", \"edit_file\", \"read_secret\", \"run_tests\"]))\n    print(\"no single action here breaks a rule, and the monitor flags the pairing of a secret read with a later external post, while the same two actions far apart or in the other order pass; the monitor looks only at order and distance, not at what was read or sent\")\n\n    section(\"3. Genuinely measuring: false alarms on random benign sessions (2000 sessions of 12 actions)\")\n    r = random.Random(1)\n    sessions = [benign_session(r) for _ in range(2000)]\n    for window in (1, 2, 4, 8):\n        rate = mean(monitor(s, window) is not None for s in sessions)\n        print(f\"window {window}: {rate:.3f} of random sessions flagged\")\n    print(\"a wider window flags more random sessions because a secret read and an unrelated post are more likely to fall inside it, so the window trades missed exfiltration against false alarms; the sessions are uniform random draws and real traffic is not uniform\")\n\n    section(\"4. Genuinely measuring: how much spacing hides the pattern\")\n    for gap in (0, 1, 3, 5, 8):\n        s = [\"read_secret\"] + [\"list_dir\"] * gap + [\"http_post\"]\n        print(f\"{gap} filler actions between: flagged with window 4: {monitor(s, 4) is not None} | window 8: {monitor(s, 8) is not None}\")\n    print(\"padding the sequence with harmless actions pushes the post outside a fixed window, which is the weakness of any detector with a fixed look-back; a larger window helps and raises the false alarms measured in section 3\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: a hard policy against three modes ---\nbypass : read_file=allow(mode allows) http_post=allow(mode allows) disable_monitor=deny(hard policy) send_secret_external=deny(hard policy)\nauto   : read_file=allow(mode allows) http_post=allow(mode allows) disable_monitor=deny(hard policy) send_secret_external=deny(hard policy)\ndefault: read_file=allow(mode allows) http_post=deny(mode denies) disable_monitor=deny(hard policy) send_secret_external=deny(hard policy)\nthe three hard-denied actions are refused in every mode including bypass, because the hard policy is checked before the mode table; the action names and the policy set are invented for the lab\n\n--- 2. Genuinely running: every action allowed, one trajectory flagged ---\neach action allowed under auto: True\nmonitor on the sequence: secret read at 2 then external post within 4 actions\nthe same actions in a harmless order: None\nno single action here breaks a rule, and the monitor flags the pairing of a secret read with a later external post, while the same two actions far apart or in the other order pass; the monitor looks only at order and distance, not at what was read or sent\n\n--- 3. Genuinely measuring: false alarms on random benign sessions (2000 sessions of 12 actions) ---\nwindow 1: 0.262 of random sessions flagged\nwindow 2: 0.398 of random sessions flagged\nwindow 4: 0.526 of random sessions flagged\nwindow 8: 0.590 of random sessions flagged\na wider window flags more random sessions because a secret read and an unrelated post are more likely to fall inside it, so the window trades missed exfiltration against false alarms; the sessions are uniform random draws and real traffic is not uniform\n\n--- 4. Genuinely measuring: how much spacing hides the pattern ---\n0 filler actions between: flagged with window 4: True | window 8: True\n1 filler actions between: flagged with window 4: True | window 8: True\n3 filler actions between: flagged with window 4: True | window 8: True\n5 filler actions between: flagged with window 4: False | window 8: True\n8 filler actions between: flagged with window 4: False | window 8: False\npadding the sequence with harmless actions pushes the post outside a fixed window, which is the weakness of any detector with a fixed look-back; a larger window helps and raises the false alarms measured in section 3"
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
    "headingEn": "Experiment 1: A hard policy against three modes",
    "headingKn": "ಪ್ರಯೋಗ 1: A hard policy against three modes",
    "bodyEn": "What it ran: A hard policy against three modes. What the lab concluded: the three hard-denied actions are refused in every mode including bypass, because the hard policy is checked before the mode table; the action names and the policy set are invented for the lab",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A hard policy against three modes. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the three hard-denied actions are refused in every mode including bypass, because the hard policy is checked before the mode table; the action names and the policy set are invented for the lab"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. Genuinely running: a hard policy against three modes ---\nbypass : read_file=allow(mode allows) http_post=allow(mode allows) disable_monitor=deny(hard policy) send_secret_external=deny(hard policy)\nauto   : read_file=allow(mode allows) http_post=allow(mode allows) disable_monitor=deny(hard policy) send_secret_external=deny(hard policy)\ndefault: read_file=allow(mode allows) http_post=deny(mode denies) disable_monitor=deny(hard policy) send_secret_external=deny(hard policy)"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: Every action allowed, one trajectory flagged",
    "headingKn": "ಪ್ರಯೋಗ 2: Every action allowed, one trajectory flagged",
    "bodyEn": "What it ran: Every action allowed, one trajectory flagged. What the lab concluded: no single action here breaks a rule, and the monitor flags the pairing of a secret read with a later external post, while the same two actions far apart or in the other order pass; the monitor looks only at order and distance, not at what was read or sent",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Every action allowed, one trajectory flagged. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): no single action here breaks a rule, and the monitor flags the pairing of a secret read with a later external post, while the same two actions far apart or in the other order pass; the monitor looks only at order and distance, not at what was read or sent"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely running: every action allowed, one trajectory flagged ---\neach action allowed under auto: True\nmonitor on the sequence: secret read at 2 then external post within 4 actions\nthe same actions in a harmless order: None"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: False alarms on random benign sessions (2000 sessions of 12 actions)",
    "headingKn": "ಪ್ರಯೋಗ 3: False alarms on random benign sessions (2000 sessions of 12 actions)",
    "bodyEn": "What it ran: False alarms on random benign sessions (2000 sessions of 12 actions). What the lab concluded: a wider window flags more random sessions because a secret read and an unrelated post are more likely to fall inside it, so the window trades missed exfiltration against false alarms; the sessions are uniform random draws and real traffic is not uniform",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: False alarms on random benign sessions (2000 sessions of 12 actions). ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a wider window flags more random sessions because a secret read and an unrelated post are more likely to fall inside it, so the window trades missed exfiltration against false alarms; the sessions are uniform random draws and real traffic is not uniform"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely measuring: false alarms on random benign sessions (2000 sessions of 12 actions) ---\nwindow 1: 0.262 of random sessions flagged\nwindow 2: 0.398 of random sessions flagged\nwindow 4: 0.526 of random sessions flagged\nwindow 8: 0.590 of random sessions flagged"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 4: How much spacing hides the pattern",
    "headingKn": "ಪ್ರಯೋಗ 4: How much spacing hides the pattern",
    "bodyEn": "What it ran: How much spacing hides the pattern. What the lab concluded: padding the sequence with harmless actions pushes the post outside a fixed window, which is the weakness of any detector with a fixed look-back; a larger window helps and raises the false alarms measured in section 3",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: How much spacing hides the pattern. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): padding the sequence with harmless actions pushes the post outside a fixed window, which is the weakness of any detector with a fixed look-back; a larger window helps and raises the false alarms measured in section 3"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 4. Genuinely measuring: how much spacing hides the pattern ---\n0 filler actions between: flagged with window 4: True | window 8: True\n1 filler actions between: flagged with window 4: True | window 8: True\n3 filler actions between: flagged with window 4: True | window 8: True\n5 filler actions between: flagged with window 4: False | window 8: True\n8 filler actions between: flagged with window 4: False | window 8: False"
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
    "headingEn": "Genuinely Found: Hard Policy and the Flagged Sequence",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಕಠಿಣ ನೀತಿ ಮತ್ತು ಗುರುತಿಸಿದ ಅನುಕ್ರಮ",
    "bodyEn": "Section 1: disable_monitor and send_secret_external were denied by the hard policy in bypass, auto and default alike, while http_post was allowed in bypass and auto and denied in default. Section 2: every action in a six-step trajectory was allowed under auto, yet the monitor flagged a secret read at step 2 followed by an external post within 4 actions, and the harmless ordering returned None.",
    "bodyKn": "ವಿಭಾಗ 1: disable_monitor ಮತ್ತು send_secret_external ಅನ್ನು bypass, auto ಮತ್ತು default ಎಲ್ಲದರಲ್ಲೂ ಕಠಿಣ ನೀತಿ ನಿರಾಕರಿಸಿತು, ಆದರೆ http_post bypass ಮತ್ತು auto ನಲ್ಲಿ ಅನುಮತಿಸಲ್ಪಟ್ಟು default ನಲ್ಲಿ ನಿರಾಕರಿಸಲ್ಪಟ್ಟಿತು. ವಿಭಾಗ 2: ಆರು-ಹಂತದ trajectory ಯ ಪ್ರತಿ ಕ್ರಿಯೆ auto ಅಡಿ ಅನುಮತಿಸಲ್ಪಟ್ಟಿತು, ಆದರೂ ಮಾನಿಟರ್ ಹಂತ 2 ರ ರಹಸ್ಯ ಓದಿನ ನಂತರ 4 ಕ್ರಿಯೆಗಳೊಳಗೆ ಬಾಹ್ಯ post ಗುರುತಿಸಿತು, ಮತ್ತು ಹಾನಿರಹಿತ ಕ್ರಮ None ಹಿಂತಿರುಗಿಸಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: False Alarms and Padding",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ತಪ್ಪು ಎಚ್ಚರಿಕೆಗಳು ಮತ್ತು ತುಂಬುವುದು",
    "bodyEn": "Section 3: windows of 1, 2, 4 and 8 flagged 0.262, 0.398, 0.526 and 0.590 of 2000 random sessions. Section 4: with 0, 1 and 3 filler actions both windows 4 and 8 flagged the pattern, with 5 fillers only window 8 did, and with 8 fillers neither did.",
    "bodyKn": "ವಿಭಾಗ 3: ವಿಂಡೋ 1, 2, 4 ಮತ್ತು 8 ಯಾದೃಚ್ಛಿಕ ಸೆಷನ್‌ಗಳಲ್ಲಿ 0.262, 0.398, 0.526 ಮತ್ತು 0.590 ಗುರುತಿಸಿತು. ವಿಭಾಗ 4: 0, 1 ಮತ್ತು 3 ತುಂಬುವ ಕ್ರಿಯೆಗಳೊಂದಿಗೆ ವಿಂಡೋ 4 ಮತ್ತು 8 ಎರಡೂ ಮಾದರಿ ಗುರುತಿಸಿದವು, 5 ತುಂಬುವಿಕೆಯೊಂದಿಗೆ ವಿಂಡೋ 8 ಮಾತ್ರ, ಮತ್ತು 8 ತುಂಬುವಿಕೆಯೊಂದಿಗೆ ಯಾವುದೂ ಇಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A hard policy gives a floor that no setting can lower, and a sequence monitor catches combinations that a per-action check cannot, but a fixed window both raises false alarms and can be padded around.",
    "bodyKn": "ಕಠಿಣ ನೀತಿ ಯಾವ ಸೆಟ್ಟಿಂಗ್ ಇಳಿಸಲಾಗದ ನೆಲ ನೀಡುತ್ತದೆ, ಮತ್ತು ಅನುಕ್ರಮ ಮಾನಿಟರ್ ಪ್ರತಿ-ಕ್ರಿಯೆ ಪರಿಶೀಲನೆ ಹಿಡಿಯಲಾಗದ ಸಂಯೋಜನೆಗಳನ್ನು ಹಿಡಿಯುತ್ತದೆ, ಆದರೆ ನಿಗದಿತ ವಿಂಡೋ ತಪ್ಪು ಎಚ್ಚರಿಕೆ ಹೆಚ್ಚಿಸುತ್ತದೆ ಮತ್ತು ಅದರ ಸುತ್ತ ತುಂಬಬಹುದು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"if every action is allowed the session is safe.\" Under auto every action in the six-step trajectory was allowed and the monitor still flagged the sequence.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಪ್ರತಿ ಕ್ರಿಯೆ ಅನುಮತಿಸಲ್ಪಟ್ಟರೆ ಸೆಷನ್ ಸುರಕ್ಷಿತ.\" auto ಅಡಿ ಆರು-ಹಂತದ trajectory ಯ ಪ್ರತಿ ಕ್ರಿಯೆ ಅನುಮತಿಸಲ್ಪಟ್ಟಿತು ಮತ್ತು ಮಾನಿಟರ್ ಇನ್ನೂ ಅನುಕ್ರಮ ಗುರುತಿಸಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Hard policy: a rule checked before any mode. Trajectory: the sequence of actions in a session. Window: how many later actions the monitor looks at. Exfiltration: sending data out.",
    "bodyKn": "Hard policy: ಯಾವುದೇ ಮೋಡ್‌ಗಿಂತ ಮೊದಲು ಪರಿಶೀಲಿಸುವ ನಿಯಮ. Trajectory: ಸೆಷನ್‌ನ ಕ್ರಿಯೆಗಳ ಅನುಕ್ರಮ. Window: ಮಾನಿಟರ್ ಎಷ್ಟು ನಂತರದ ಕ್ರಿಯೆಗಳನ್ನು ನೋಡುತ್ತದೆ. Exfiltration: ದತ್ತಾಂಶ ಹೊರಗೆ ಕಳುಹಿಸುವುದು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) The hard policy held in all three modes. 2) The monitor flagged a sequence of individually allowed actions. 3) Window 4 flagged 52.6 percent of random sessions. 4) Five fillers hid the pattern from window 4. 5) The sessions are uniform random, not real traffic.",
    "bodyKn": "1) ಮೂರೂ ಮೋಡ್‌ಗಳಲ್ಲಿ ಕಠಿಣ ನೀತಿ ಉಳಿಯಿತು. 2) ಮಾನಿಟರ್ ಪ್ರತ್ಯೇಕವಾಗಿ ಅನುಮತಿಸಿದ ಕ್ರಿಯೆಗಳ ಅನುಕ್ರಮ ಗುರುತಿಸಿತು. 3) ವಿಂಡೋ 4 ಯಾದೃಚ್ಛಿಕ ಸೆಷನ್‌ಗಳಲ್ಲಿ 52.6 ಶೇಕಡಾ ಗುರುತಿಸಿತು. 4) ಐದು ತುಂಬುವಿಕೆಗಳು ವಿಂಡೋ 4 ರಿಂದ ಮಾದರಿ ಮರೆಮಾಡಿದವು. 5) ಸೆಷನ್‌ಗಳು ಏಕರೂಪ ಯಾದೃಚ್ಛಿಕ, ನಿಜ ಟ್ರಾಫಿಕ್ ಅಲ್ಲ."
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
    "bodyEn": "1) Open a terminal in pneuronics-backend/lesson-defs/labs. 2) Run: python -B pm_3.py (in Git Bash on Windows: PYTHONIOENCODING=utf-8 python -B pm_3.py). 3) Compare each section with the walkthrough above. The -B flag stops Python from writing __pycache__ folders.",
    "bodyKn": "1) pneuronics-backend/lesson-defs/labs ನಲ್ಲಿ ಟರ್ಮಿನಲ್ ತೆರೆಯಿರಿ. 2) ಓಡಿಸಿ: python -B pm_3.py (Windows Git Bash ನಲ್ಲಿ: PYTHONIOENCODING=utf-8 python -B pm_3.py). 3) ಪ್ರತಿ ವಿಭಾಗವನ್ನು ಮೇಲಿನ ನಡೆದಾಟಕ್ಕೆ ಹೋಲಿಸಿ. -B ಧ್ವಜ Python __pycache__ ಫೋಲ್ಡರ್‌ಗಳನ್ನು ಬರೆಯುವುದನ್ನು ತಡೆಯುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Predict before you run",
    "headingKn": "ಓಡಿಸುವ ಮುನ್ನ ಊಹಿಸಿ",
    "bodyEn": "Before rerunning, write down what you expect each experiment to print, then compare:\n1. A hard policy against three modes\n2. Every action allowed, one trajectory flagged\n3. False alarms on random benign sessions (2000 sessions of 12 actions)\n4. How much spacing hides the pattern",
    "bodyKn": "ಮರುಓಡಿಸುವ ಮುನ್ನ ಪ್ರತಿ ಪ್ರಯೋಗ ಏನು ಮುದ್ರಿಸುತ್ತದೆ ಎಂದು ನಿರೀಕ್ಷಿಸುವುದನ್ನು ಬರೆಯಿರಿ, ನಂತರ ಹೋಲಿಸಿ:\n1. A hard policy against three modes\n2. Every action allowed, one trajectory flagged\n3. False alarms on random benign sessions (2000 sessions of 12 actions)\n4. How much spacing hides the pattern"
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "Which actions did the hard policy deny in every mode?",
      "qKn": "ಕಠಿಣ ನೀತಿ ಪ್ರತಿ ಮೋಡ್‌ನಲ್ಲಿ ಯಾವ ಕ್ರಿಯೆಗಳನ್ನು ನಿರಾಕರಿಸಿತು?",
      "opts": [
       "disable_monitor, write_policy_file and send_secret_external",
       "read_file and list_dir",
       "http_post only",
       "run_tests"
      ],
      "optsKn": [
       "disable_monitor, write_policy_file ಮತ್ತು send_secret_external",
       "read_file ಮತ್ತು list_dir",
       "http_post ಮಾತ್ರ",
       "run_tests"
      ],
      "correct": 0
     },
     {
      "q": "What share of random sessions did window 4 flag?",
      "qKn": "ವಿಂಡೋ 4 ಯಾದೃಚ್ಛಿಕ ಸೆಷನ್‌ಗಳಲ್ಲಿ ಎಷ್ಟು ಪಾಲು ಗುರುತಿಸಿತು?",
      "opts": [
       "0.526",
       "0.262",
       "0.398",
       "0.590"
      ],
      "optsKn": [
       "0.526",
       "0.262",
       "0.398",
       "0.590"
      ],
      "correct": 0
     },
     {
      "q": "How many filler actions first hid the pattern from window 4?",
      "qKn": "ಎಷ್ಟು ತುಂಬುವ ಕ್ರಿಯೆಗಳು ಮೊದಲು ವಿಂಡೋ 4 ರಿಂದ ಮಾದರಿ ಮರೆಮಾಡಿದವು?",
      "opts": [
       "5",
       "1",
       "3",
       "8"
      ],
      "optsKn": [
       "5",
       "1",
       "3",
       "8"
      ],
      "correct": 0
     },
     {
      "q": "Why did the monitor flag a trajectory where every action was allowed?",
      "qKn": "ಪ್ರತಿ ಕ್ರಿಯೆ ಅನುಮತಿಸಿದ್ದರೂ ಮಾನಿಟರ್ ಆ trajectory ಅನ್ನು ಏಕೆ ಗುರುತಿಸಿತು?",
      "opts": [
       "It looks at the order and distance of actions, not each one alone",
       "It denies http_post",
       "It overrides the mode",
       "It reads the secret"
      ],
      "optsKn": [
       "ಅದು ಪ್ರತಿ ಕ್ರಿಯೆಯನ್ನು ಪ್ರತ್ಯೇಕವಾಗಿ ಅಲ್ಲ, ಕ್ರಿಯೆಗಳ ಕ್ರಮ ಮತ್ತು ದೂರ ನೋಡುತ್ತದೆ",
       "ಅದು http_post ನಿರಾಕರಿಸುತ್ತದೆ",
       "ಅದು ಮೋಡ್ ಮೀರಿಸುತ್ತದೆ",
       "ಅದು ರಹಸ್ಯ ಓದುತ್ತದೆ"
      ],
      "correct": 0
     },
     {
      "q": "What is the weakness of a fixed look-back window?",
      "qKn": "ನಿಗದಿತ ನೋಟ-ಹಿಂದಿನ ವಿಂಡೋದ ದೌರ್ಬಲ್ಯ ಏನು?",
      "opts": [
       "Harmless filler actions can push the pattern outside it",
       "It cannot flag anything",
       "It denies all posts",
       "It needs a bypass mode"
      ],
      "optsKn": [
       "ಹಾನಿರಹಿತ ತುಂಬುವ ಕ್ರಿಯೆಗಳು ಮಾದರಿಯನ್ನು ಅದರ ಹೊರಗೆ ತಳ್ಳಬಹುದು",
       "ಅದು ಏನನ್ನೂ ಗುರುತಿಸಲಾರದು",
       "ಅದು ಎಲ್ಲಾ posts ನಿರಾಕರಿಸುತ್ತದೆ",
       "ಅದಕ್ಕೆ bypass ಮೋಡ್ ಬೇಕು"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
