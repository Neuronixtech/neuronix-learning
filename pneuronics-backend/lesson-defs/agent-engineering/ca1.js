module.exports = {
 "phaseId": "6a369d6366020ed05b32158c",
 "moduleId": "6a369d6366020ed05b3215a7",
 "order": 0,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Autonomous Coding Agent Landscape (SWE-bench, CodeAct) (Part 1 of 3) — JSON Calls Against Code-as-Action",
 "titleKn": "ಸ್ವಾಯತ್ತ ಕೋಡಿಂಗ್ Agent ಭೂದೃಶ್ಯ (SWE-bench, CodeAct) (ಭಾಗ 1 / 3) — JSON ಕರೆಗಳು ವಿರುದ್ಧ Code-as-Action",
 "desc": "Count turns and operations for a JSON tool scaffold and a code-as-action scaffold on four tasks.",
 "descKn": "ನಾಲ್ಕು ಕಾರ್ಯಗಳಲ್ಲಿ JSON tool scaffold ಮತ್ತು code-as-action scaffold ಗೆ ಟರ್ನ್ ಮತ್ತು ಕಾರ್ಯಾಚರಣೆ ಎಣಿಸಿ.",
 "objectives": [
  "Run a tool-call plan.",
  "Run a program as an action.",
  "Count turns and operations.",
  "Vary the turn limit.",
  "Separate cost from capability."
 ],
 "objectivesKn": [
  "tool-call ಯೋಜನೆ ಓಡಿಸಿ.",
  "ಪ್ರೋಗ್ರಾಂ ಅನ್ನು ಕ್ರಿಯೆಯಾಗಿ ಓಡಿಸಿ.",
  "ಟರ್ನ್ ಮತ್ತು ಕಾರ್ಯಾಚರಣೆ ಎಣಿಸಿ.",
  "ಟರ್ನ್ ಮಿತಿ ಬದಲಿಸಿ.",
  "ವೆಚ್ಚ ಮತ್ತು ಸಾಮರ್ಥ್ಯ ಬೇರ್ಪಡಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Autonomous Coding Agent Landscape (SWE-bench, CodeAct) (Part 1 of 3)",
    "textKn": "ಸ್ವಾಯತ್ತ ಕೋಡಿಂಗ್ Agent ಭೂದೃಶ್ಯ (SWE-bench, CodeAct) (ಭಾಗ 1 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 1 of 3: a one-call-per-turn JSON scaffold against a code-as-action scaffold on four scripted tasks over a virtual file system, turn and operation counts and the effect of the turn limit. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind the autonomous coding agent landscape (JSON tool-call versus code-as-action scaffolds, scope contracts, why exec with restricted builtins is not a sandbox, workload-weighted scores, confidence intervals and benchmark contamination), not the real software, and the agents are scripted planners and fixed code snippets over an in-memory file system, the success rates and task mixes are invented, and no language model or published benchmark is run, so no real LLM behaviour is measured. The original code/main.py was not supplied, so the labs are our own implementation. The lesson quotes a JSON-versus-CodeAct comparison (JSON 2 of 4 tasks in 16 turns, CodeAct 4 of 4 in 7 turns with 26 operations), published SWE-bench numbers and a workload-weighted success of 71.5 percent; those figures are cited from the lesson and were not reproduced, and our lab produced different counts on its own invented tasks, which the lesson reports as they came out. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 1ನೆಯದು: ಒಂದು-ಕರೆ-ಪ್ರತಿ-ಟರ್ನ್ JSON scaffold ಅನ್ನು ವರ್ಚುವಲ್ ಫೈಲ್ ವ್ಯವಸ್ಥೆಯ ಮೇಲೆ ನಾಲ್ಕು scripted ಕಾರ್ಯಗಳಲ್ಲಿ code-as-action scaffold ವಿರುದ್ಧ, ಟರ್ನ್ ಮತ್ತು ಕಾರ್ಯಾಚರಣೆ ಎಣಿಕೆಗಳು ಮತ್ತು ಟರ್ನ್ ಮಿತಿಯ ಪರಿಣಾಮ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು ಸ್ವಾಯತ್ತ ಕೋಡಿಂಗ್ agent ಭೂದೃಶ್ಯ (JSON tool-call ವಿರುದ್ಧ code-as-action scaffolds, scope ಒಪ್ಪಂದಗಳು, ನಿರ್ಬಂಧಿತ builtins ಇರುವ exec ಏಕೆ sandbox ಅಲ್ಲ, ಕೆಲಸಭಾರ-ತೂಕದ ಅಂಕಗಳು, ವಿಶ್ವಾಸ ಅಂತರಗಳು ಮತ್ತು benchmark ಕಲುಷಿತ) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು agents ಮೆಮೊರಿ ಫೈಲ್ ವ್ಯವಸ್ಥೆಯ ಮೇಲೆ scripted ಯೋಜಕರು ಮತ್ತು ನಿಗದಿತ ಕೋಡ್ ತುಣುಕುಗಳು, ಯಶಸ್ಸು ದರಗಳು ಮತ್ತು ಕೆಲಸ ಮಿಶ್ರಣಗಳು ಕಲ್ಪಿತ, ಮತ್ತು ಭಾಷಾ ಮಾದರಿ ಅಥವಾ ಪ್ರಕಟಿತ benchmark ಓಡಿಸಲಾಗಿಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ code/main.py ಒದಗಿಸಿರಲಿಲ್ಲ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ನಮ್ಮದೇ ಅನುಷ್ಠಾನ. lesson JSON-ವಿರುದ್ಧ-CodeAct ಹೋಲಿಕೆ (JSON 4 ರಲ್ಲಿ 2 ಕಾರ್ಯ 16 ಟರ್ನ್‌ಗಳಲ್ಲಿ, CodeAct 4 ರಲ್ಲಿ 4, 7 ಟರ್ನ್‌ಗಳು ಮತ್ತು 26 ಕಾರ್ಯಾಚರಣೆ), ಪ್ರಕಟಿತ SWE-bench ಸಂಖ್ಯೆಗಳು ಮತ್ತು 71.5 ಶೇಕಡಾ ಕೆಲಸಭಾರ-ತೂಕದ ಯಶಸ್ಸನ್ನು ಉಲ್ಲೇಖಿಸುತ್ತದೆ; ಆ ಅಂಕಿಗಳು lesson ನಿಂದ ಉಲ್ಲೇಖಿತ ಮತ್ತು ಪುನರುತ್ಪಾದಿಸಲಾಗಿಲ್ಲ, ಮತ್ತು ನಮ್ಮ ಲ್ಯಾಬ್ ತನ್ನ ಕಲ್ಪಿತ ಕಾರ್ಯಗಳಲ್ಲಿ ಬೇರೆ ಎಣಿಕೆ ನೀಡಿತು, ಅವು ಬಂದಂತೆಯೇ lesson ವರದಿ ಮಾಡುತ್ತದೆ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "A Loop in Code Costs One Turn",
    "textKn": "ಕೋಡ್‌ನಲ್ಲಿನ ಲೂಪ್‌ಗೆ ಒಂದು ಟರ್ನ್ ವೆಚ್ಚ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Counting Turns and Operations",
    "headingKn": "ಟರ್ನ್ ಮತ್ತು ಕಾರ್ಯಾಚರಣೆ ಎಣಿಕೆ",
    "bodyEn": "A JSON tool-call agent makes one call per turn, while a code-as-action agent writes a program that can loop. This part runs both on four small tasks, counting lines across five files, finding the file with a TODO, renaming six files and joining four files, against an in-memory file system. The plans are scripted and the file operations are real, so the turn and operation counts are measured, but the tasks and the limit of 5 turns are invented.",
    "bodyKn": "JSON tool-call agent ಪ್ರತಿ ಟರ್ನ್‌ಗೆ ಒಂದು ಕರೆ ಮಾಡುತ್ತದೆ, ಆದರೆ code-as-action agent ಲೂಪ್ ಮಾಡಬಲ್ಲ ಪ್ರೋಗ್ರಾಂ ಬರೆಯುತ್ತದೆ. ಈ ಭಾಗ ಎರಡನ್ನೂ ನಾಲ್ಕು ಚಿಕ್ಕ ಕಾರ್ಯಗಳಲ್ಲಿ, ಐದು ಫೈಲ್‌ಗಳಲ್ಲಿ ಸಾಲು ಎಣಿಸುವುದು, TODO ಇರುವ ಫೈಲ್ ಹುಡುಕುವುದು, ಆರು ಫೈಲ್ ಮರುಹೆಸರಿಸುವುದು ಮತ್ತು ನಾಲ್ಕು ಫೈಲ್ ಸೇರಿಸುವುದು, ಮೆಮೊರಿ ಫೈಲ್ ವ್ಯವಸ್ಥೆಯ ವಿರುದ್ಧ ಓಡಿಸುತ್ತದೆ. ಯೋಜನೆಗಳು scripted ಮತ್ತು ಫೈಲ್ ಕಾರ್ಯಾಚರಣೆಗಳು ನಿಜ, ಆದ್ದರಿಂದ ಟರ್ನ್ ಮತ್ತು ಕಾರ್ಯಾಚರಣೆ ಎಣಿಕೆಗಳು ಅಳೆದವು, ಆದರೆ ಕಾರ್ಯಗಳು ಮತ್ತು 5 ಟರ್ನ್ ಮಿತಿ ಕಲ್ಪಿತ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Two Ways to Act",
    "headingKn": "ಕಾರ್ಯನಿರ್ವಹಿಸುವ ಎರಡು ವಿಧಾನಗಳು",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">the same file operations, different numbers of turns</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">JSON</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">one call per turn</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">CodeAct</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">one program per turn</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">turns</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">counted</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">limit</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">decides the gap</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">the same file operations, different numbers of turns</text></svg>",
    "captionEn": "One tool call per turn against a program per turn.",
    "captionKn": "ಪ್ರತಿ ಟರ್ನ್‌ಗೆ ಒಂದು tool ಕರೆ ವಿರುದ್ಧ ಪ್ರತಿ ಟರ್ನ್‌ಗೆ ಒಂದು ಪ್ರೋಗ್ರಾಂ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "The four tasks",
    "headingKn": "ನಾಲ್ಕು ಕಾರ್ಯಗಳು",
    "headers": [
     "Task",
     "What it needs"
    ],
    "rows": [
     [
      "count_lines",
      "read five files and add the line counts"
     ],
     [
      "find_todo",
      "find which of five files contains TODO"
     ],
     [
      "rename_six",
      "rename six .txt files to .md"
     ],
     [
      "concat_four",
      "read four files then write one joined file"
     ],
     [
      "JSON limit",
      "5 turns, one call per turn"
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
    "filename": "ca_1.py",
    "headingEn": "Virtual file system and the two scaffolds",
    "headingKn": "ವರ್ಚುವಲ್ ಫೈಲ್ ವ್ಯವಸ್ಥೆ ಮತ್ತು ಎರಡು scaffolds",
    "descEn": "Env is the file system with an operation counter, run_json executes one call per turn up to a limit and run_codeact executes one program per task.",
    "descKn": "Env ಕಾರ್ಯಾಚರಣೆ ಕೌಂಟರ್ ಇರುವ ಫೈಲ್ ವ್ಯವಸ್ಥೆ, run_json ಮಿತಿಯವರೆಗೆ ಪ್ರತಿ ಟರ್ನ್‌ಗೆ ಒಂದು ಕರೆ ನಿರ್ವಹಿಸುತ್ತದೆ ಮತ್ತು run_codeact ಪ್ರತಿ ಕಾರ್ಯಕ್ಕೆ ಒಂದು ಪ್ರೋಗ್ರಾಂ ನಿರ್ವಹಿಸುತ್ತದೆ.",
    "code": "def make_fs():\r\n    return {\r\n        \"a.txt\": \"x\\nTODO fix\\ny\\n\", \"b.txt\": \"1\\n2\\n\", \"c.txt\": \"alpha\\nbeta\\ngamma\\n\", \"d.txt\": \"one\\n\", \"e.txt\": \"q\\nr\\n\",\r\n        \"n1.txt\": \"A\", \"n2.txt\": \"B\", \"n3.txt\": \"C\", \"n4.txt\": \"D\", \"n5.txt\": \"E\", \"n6.txt\": \"F\",\r\n    }\r\n\r\n\r\nclass Env:\r\n    def __init__(self, fs):\r\n        self.fs, self.ops = dict(fs), 0\r\n\r\n    def list_files(self):\r\n        self.ops += 1\r\n        return sorted(self.fs)\r\n\r\n    def read_file(self, name):\r\n        self.ops += 1\r\n        return self.fs[name]\r\n\r\n    def write_file(self, name, text):\r\n        self.ops += 1\r\n        self.fs[name] = text\r\n\r\n    def rename(self, old, new):\r\n        self.ops += 1\r\n        self.fs[new] = self.fs.pop(old)\r\n\r\n\r\nTASKS = {\r\n    \"count_lines\": {\"files\": [\"a.txt\", \"b.txt\", \"c.txt\", \"d.txt\", \"e.txt\"], \"check\": lambda fs, ans: ans == 11},\r\n    \"find_todo\": {\"files\": [\"a.txt\", \"b.txt\", \"c.txt\", \"d.txt\", \"e.txt\"], \"check\": lambda fs, ans: ans == \"a.txt\"},\r\n    \"rename_six\": {\"files\": [f\"n{i}.txt\" for i in range(1, 7)], \"check\": lambda fs, ans: all(f\"n{i}.md\" in fs and f\"n{i}.txt\" not in fs for i in range(1, 7))},\r\n    \"concat_four\": {\"files\": [\"a.txt\", \"b.txt\", \"c.txt\", \"d.txt\"], \"check\": lambda fs, ans: fs.get(\"all.txt\") == fs[\"a.txt\"] + fs[\"b.txt\"] + fs[\"c.txt\"] + fs[\"d.txt\"]},\r\n}\r\n\r\n\r\ndef json_plan(task, files):\r\n    \"\"\"One tool call per turn. Returns the list of calls the scripted JSON agent would make.\"\"\"\r\n    if task in (\"count_lines\", \"find_todo\"):\r\n        return [(\"read_file\", f) for f in files]\r\n    if task == \"rename_six\":\r\n        return [(\"rename\", f, f[:-4] + \".md\") for f in files]\r\n    if task == \"concat_four\":\r\n        return [(\"read_file\", f) for f in files] + [(\"write_file\", \"all.txt\")]\r\n\r\n\r\ndef run_json(task, max_turns):\r\n    env = Env(make_fs())\r\n    files = TASKS[task][\"files\"]\r\n    calls = json_plan(task, files)\r\n    seen, turns = [], 0\r\n    for call in calls:\r\n        if turns >= max_turns:\r\n            break\r\n        turns += 1\r\n        if call[0] == \"read_file\":\r\n            seen.append(env.read_file(call[1]))\r\n        elif call[0] == \"rename\":\r\n            env.rename(call[1], call[2])\r\n        elif call[0] == \"write_file\":\r\n            env.write_file(\"all.txt\", \"\".join(seen))\r\n    done = turns == len(calls)\r\n    if task == \"count_lines\":\r\n        ans = sum(t.count(\"\\n\") for t in seen) if done else None\r\n    elif task == \"find_todo\":\r\n        ans = next((f for f, t in zip(files, seen) if \"TODO\" in t), None) if done else None\r\n    else:\r\n        ans = None\r\n    ok = done and TASKS[task][\"check\"](env.fs, ans)\r\n    return ok, turns, env.ops\r\n\r\n\r\nCODE = {\r\n    \"count_lines\": \"total = sum(read_file(f).count('\\\\n') for f in FILES)\\nanswer = total\",\r\n    \"find_todo\": \"answer = next(f for f in FILES if 'TODO' in read_file(f))\",\r\n    \"rename_six\": \"for f in FILES:\\n    rename(f, f[:-4] + '.md')\",\r\n    \"concat_four\": \"write_file('all.txt', ''.join(read_file(f) for f in FILES))\",\r\n}\r\n\r\n\r\ndef run_codeact(task):\r\n    env = Env(make_fs())\r\n    ns = {\"__builtins__\": {\"sum\": sum, \"next\": next}, \"FILES\": TASKS[task][\"files\"], \"read_file\": env.read_file, \"write_file\": env.write_file, \"rename\": env.rename, \"list_files\": env.list_files}\r\n    exec(CODE[task], ns)\r\n    ok = TASKS[task][\"check\"](env.fs, ns.get(\"answer\"))\r\n    return ok, 1, env.ops"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "ca_1.py",
    "headingEn": "main(): experiments",
    "headingKn": "main(): ಪ್ರಯೋಗಗಳು",
    "descEn": "main() runs the JSON scaffold, the code-as-action scaffold and a sweep of the JSON turn limit.",
    "descKn": "main() JSON scaffold, code-as-action scaffold ಮತ್ತು JSON ಟರ್ನ್ ಮಿತಿ ಸ್ವೀಪ್ ಓಡಿಸುತ್ತದೆ.",
    "code": "def main():\r\n    section(\"1. Genuinely running: the JSON tool-call scaffold with a limit of 5 turns per task\")\r\n    tot_turns = tot_ops = passed = 0\r\n    for t in TASKS:\r\n        ok, turns, ops = run_json(t, 5)\r\n        passed += ok\r\n        tot_turns += turns\r\n        tot_ops += ops\r\n        print(f\"{t:12} solved {ok!s:5} | turns {turns} | operations {ops}\")\r\n    print(f\"JSON scaffold: {passed}/4 solved | {tot_turns} turns | {tot_ops} operations\")\r\n    print(\"each tool call costs a turn, so the rename task, which needs six calls, runs into the limit of 5 and is reported as unsolved even though its plan was correct, while the three tasks that need exactly five calls just fit; the turn limit of 5 and the tasks are invented\")\r\n\r\n    section(\"2. Genuinely running: the code-as-action scaffold, one program per task\")\r\n    tot_turns = tot_ops = passed = 0\r\n    for t in TASKS:\r\n        ok, turns, ops = run_codeact(t)\r\n        passed += ok\r\n        tot_turns += turns\r\n        tot_ops += ops\r\n        print(f\"{t:12} solved {ok!s:5} | turns {turns} | operations {ops}\")\r\n    print(f\"code-as-action scaffold: {passed}/4 solved | {tot_turns} turns | {tot_ops} operations\")\r\n    print(\"one program can loop over many files, so every task finishes in a single turn; the operation counts match the JSON scaffold for three tasks and are lower for find_todo, where the program stops reading at the first match, so the saving is mainly in turns; the scripted programs were written by hand for these four tasks\")\r\n\r\n    section(\"3. Genuinely measuring: how the turn limit changes the JSON result\")\r\n    for limit in (3, 5, 6, 10):\r\n        res = [run_json(t, limit) for t in TASKS]\r\n        print(f\"limit {limit:2d}: solved {sum(r[0] for r in res)}/4 | turns used {sum(r[1] for r in res):2d}\")\r\n    print(\"the JSON scaffold solves all four once the limit is large enough, so the gap between the two scaffolds on this toy is a budget effect and not a capability difference; a real comparison would also have to count tokens per turn and errors in the generated code\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: the JSON tool-call scaffold with a limit of 5 turns per task ---\ncount_lines  solved True  | turns 5 | operations 5\nfind_todo    solved True  | turns 5 | operations 5\nrename_six   solved False | turns 5 | operations 5\nconcat_four  solved True  | turns 5 | operations 5\nJSON scaffold: 3/4 solved | 20 turns | 20 operations\neach tool call costs a turn, so the rename task, which needs six calls, runs into the limit of 5 and is reported as unsolved even though its plan was correct, while the three tasks that need exactly five calls just fit; the turn limit of 5 and the tasks are invented\n\n--- 2. Genuinely running: the code-as-action scaffold, one program per task ---\ncount_lines  solved True  | turns 1 | operations 5\nfind_todo    solved True  | turns 1 | operations 1\nrename_six   solved True  | turns 1 | operations 6\nconcat_four  solved True  | turns 1 | operations 5\ncode-as-action scaffold: 4/4 solved | 4 turns | 17 operations\none program can loop over many files, so every task finishes in a single turn; the operation counts match the JSON scaffold for three tasks and are lower for find_todo, where the program stops reading at the first match, so the saving is mainly in turns; the scripted programs were written by hand for these four tasks\n\n--- 3. Genuinely measuring: how the turn limit changes the JSON result ---\nlimit  3: solved 0/4 | turns used 12\nlimit  5: solved 3/4 | turns used 20\nlimit  6: solved 4/4 | turns used 21\nlimit 10: solved 4/4 | turns used 21\nthe JSON scaffold solves all four once the limit is large enough, so the gap between the two scaffolds on this toy is a budget effect and not a capability difference; a real comparison would also have to count tokens per turn and errors in the generated code"
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
    "headingEn": "Experiment 1: The JSON tool-call scaffold with a limit of 5 turns per task",
    "headingKn": "ಪ್ರಯೋಗ 1: The JSON tool-call scaffold with a limit of 5 turns per task",
    "bodyEn": "What it ran: The JSON tool-call scaffold with a limit of 5 turns per task. What the lab concluded: each tool call costs a turn, so the rename task, which needs six calls, runs into the limit of 5 and is reported as unsolved even though its plan was correct, while the three tasks that need exactly five calls just fit; the turn limit of 5 and the tasks are invented",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: The JSON tool-call scaffold with a limit of 5 turns per task. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): each tool call costs a turn, so the rename task, which needs six calls, runs into the limit of 5 and is reported as unsolved even though its plan was correct, while the three tasks that need exactly five calls just fit; the turn limit of 5 and the tasks are invented"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. Genuinely running: the JSON tool-call scaffold with a limit of 5 turns per task ---\ncount_lines  solved True  | turns 5 | operations 5\nfind_todo    solved True  | turns 5 | operations 5\nrename_six   solved False | turns 5 | operations 5\nconcat_four  solved True  | turns 5 | operations 5\nJSON scaffold: 3/4 solved | 20 turns | 20 operations"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: The code-as-action scaffold, one program per task",
    "headingKn": "ಪ್ರಯೋಗ 2: The code-as-action scaffold, one program per task",
    "bodyEn": "What it ran: The code-as-action scaffold, one program per task. What the lab concluded: one program can loop over many files, so every task finishes in a single turn; the operation counts match the JSON scaffold for three tasks and are lower for find_todo, where the program stops reading at the first match, so the saving is mainly in turns; the scripted programs were written by hand for these four tasks",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: The code-as-action scaffold, one program per task. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): one program can loop over many files, so every task finishes in a single turn; the operation counts match the JSON scaffold for three tasks and are lower for find_todo, where the program stops reading at the first match, so the saving is mainly in turns; the scripted programs were written by hand for these four tasks"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely running: the code-as-action scaffold, one program per task ---\ncount_lines  solved True  | turns 1 | operations 5\nfind_todo    solved True  | turns 1 | operations 1\nrename_six   solved True  | turns 1 | operations 6\nconcat_four  solved True  | turns 1 | operations 5\ncode-as-action scaffold: 4/4 solved | 4 turns | 17 operations"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: How the turn limit changes the JSON result",
    "headingKn": "ಪ್ರಯೋಗ 3: How the turn limit changes the JSON result",
    "bodyEn": "What it ran: How the turn limit changes the JSON result. What the lab concluded: the JSON scaffold solves all four once the limit is large enough, so the gap between the two scaffolds on this toy is a budget effect and not a capability difference; a real comparison would also have to count tokens per turn and errors in the generated code",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: How the turn limit changes the JSON result. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the JSON scaffold solves all four once the limit is large enough, so the gap between the two scaffolds on this toy is a budget effect and not a capability difference; a real comparison would also have to count tokens per turn and errors in the generated code"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely measuring: how the turn limit changes the JSON result ---\nlimit  3: solved 0/4 | turns used 12\nlimit  5: solved 3/4 | turns used 20\nlimit  6: solved 4/4 | turns used 21\nlimit 10: solved 4/4 | turns used 21"
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
    "headingEn": "Genuinely Found: The Two Scaffolds",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಎರಡು Scaffolds",
    "bodyEn": "Section 1: with a limit of 5 turns the JSON scaffold solved count_lines, find_todo and concat_four and failed rename_six, which needs six calls, for 3 of 4 solved, 20 turns and 20 operations. Section 2: the code-as-action scaffold solved all four in one turn each, 4 turns in total, using 17 operations: 5, 1, 6 and 5.",
    "bodyKn": "ವಿಭಾಗ 1: 5 ಟರ್ನ್ ಮಿತಿಯಲ್ಲಿ JSON scaffold count_lines, find_todo ಮತ್ತು concat_four ಪರಿಹರಿಸಿತು ಮತ್ತು ಆರು ಕರೆ ಬೇಕಾದ rename_six ವಿಫಲವಾಯಿತು, 4 ರಲ್ಲಿ 3 ಪರಿಹಾರ, 20 ಟರ್ನ್ ಮತ್ತು 20 ಕಾರ್ಯಾಚರಣೆ. ವಿಭಾಗ 2: code-as-action scaffold ಎಲ್ಲಾ ನಾಲ್ಕನ್ನೂ ತಲಾ ಒಂದು ಟರ್ನ್‌ನಲ್ಲಿ, ಒಟ್ಟು 4 ಟರ್ನ್, 17 ಕಾರ್ಯಾಚರಣೆ ಬಳಸಿ ಪರಿಹರಿಸಿತು: 5, 1, 6 ಮತ್ತು 5."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: The Turn Limit",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಟರ್ನ್ ಮಿತಿ",
    "bodyEn": "Section 3: JSON limits of 3, 5, 6 and 10 gave 0, 3, 4 and 4 solved of 4, using 12, 20, 21 and 21 turns, so once the limit reached 6 the JSON scaffold solved every task and the gap came from the budget alone.",
    "bodyKn": "ವಿಭಾಗ 3: JSON ಮಿತಿ 3, 5, 6 ಮತ್ತು 10 ಇದ್ದಾಗ 4 ರಲ್ಲಿ 0, 3, 4 ಮತ್ತು 4 ಪರಿಹಾರ, 12, 20, 21 ಮತ್ತು 21 ಟರ್ನ್ ಬಳಸಿ, ಆದ್ದರಿಂದ ಮಿತಿ 6 ತಲುಪಿದಾಗ JSON scaffold ಪ್ರತಿ ಕಾರ್ಯ ಪರಿಹರಿಸಿತು ಮತ್ತು ಅಂತರ ಬಜೆಟ್‌ನಿಂದ ಮಾತ್ರ ಬಂದಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A scaffold that lets one turn do a loop saves turns, and when turns are the scarce resource that saving decides which tasks finish, which is a cost effect and not necessarily a difference in what the agent can do.",
    "bodyKn": "ಒಂದು ಟರ್ನ್ ಲೂಪ್ ಮಾಡಲು ಬಿಡುವ scaffold ಟರ್ನ್‌ಗಳನ್ನು ಉಳಿಸುತ್ತದೆ, ಮತ್ತು ಟರ್ನ್‌ಗಳು ವಿರಳ ಸಂಪನ್ಮೂಲವಾದಾಗ ಆ ಉಳಿತಾಯ ಯಾವ ಕಾರ್ಯಗಳು ಮುಗಿಯುತ್ತವೆ ನಿರ್ಧರಿಸುತ್ತದೆ, ಅದು ವೆಚ್ಚ ಪರಿಣಾಮ, ಅಗತ್ಯವಾಗಿ agent ಏನು ಮಾಡಬಲ್ಲದು ಎಂಬುದರ ವ್ಯತ್ಯಾಸವಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"code-as-action solves tasks JSON cannot.\" With a limit of 6 turns the JSON scaffold solved all four.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"code-as-action JSON ಮಾಡಲಾಗದ ಕಾರ್ಯಗಳನ್ನು ಪರಿಹರಿಸುತ್ತದೆ.\" 6 ಟರ್ನ್ ಮಿತಿಯೊಂದಿಗೆ JSON scaffold ಎಲ್ಲಾ ನಾಲ್ಕನ್ನೂ ಪರಿಹರಿಸಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Scaffold: the loop and tools around a model. JSON tool call: one structured call per turn. Code-as-action: the model writes a program per turn. Turn limit: cap on turns.",
    "bodyKn": "Scaffold: ಮಾದರಿಯ ಸುತ್ತಲಿನ ಲೂಪ್ ಮತ್ತು ಉಪಕರಣಗಳು. JSON tool call: ಪ್ರತಿ ಟರ್ನ್‌ಗೆ ಒಂದು ರಚನಾತ್ಮಕ ಕರೆ. Code-as-action: ಮಾದರಿ ಪ್ರತಿ ಟರ್ನ್‌ಗೆ ಪ್ರೋಗ್ರಾಂ ಬರೆಯುತ್ತದೆ. Turn limit: ಟರ್ನ್‌ಗಳ ಮಿತಿ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) JSON solved 3 of 4 at a limit of 5. 2) Code-as-action solved 4 of 4 in 4 turns. 3) The code scaffold used 17 operations, the JSON one 20 on the unfinished run. 4) A limit of 6 closed the gap. 5) The lesson 2-of-4 and 16-turn figures are cited, not reproduced.",
    "bodyKn": "1) JSON 5 ಮಿತಿಯಲ್ಲಿ 4 ರಲ್ಲಿ 3 ಪರಿಹರಿಸಿತು. 2) Code-as-action 4 ರಲ್ಲಿ 4 ಅನ್ನು 4 ಟರ್ನ್‌ಗಳಲ್ಲಿ ಪರಿಹರಿಸಿತು. 3) code scaffold 17 ಕಾರ್ಯಾಚರಣೆ ಬಳಸಿತು, JSON ಅಪೂರ್ಣ ಓಟದಲ್ಲಿ 20. 4) ಮಿತಿ 6 ಅಂತರ ಮುಚ್ಚಿತು. 5) lesson ನ 4 ರಲ್ಲಿ 2 ಮತ್ತು 16-ಟರ್ನ್ ಅಂಕಿಗಳು ಉಲ್ಲೇಖಿತ, ಪುನರುತ್ಪಾದಿಸಲಾಗಿಲ್ಲ."
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
    "bodyEn": "1) Open a terminal in pneuronics-backend/lesson-defs/labs. 2) Run: python -B ca_1.py (in Git Bash on Windows: PYTHONIOENCODING=utf-8 python -B ca_1.py). 3) Compare each section with the walkthrough above. The -B flag stops Python from writing __pycache__ folders.",
    "bodyKn": "1) pneuronics-backend/lesson-defs/labs ನಲ್ಲಿ ಟರ್ಮಿನಲ್ ತೆರೆಯಿರಿ. 2) ಓಡಿಸಿ: python -B ca_1.py (Windows Git Bash ನಲ್ಲಿ: PYTHONIOENCODING=utf-8 python -B ca_1.py). 3) ಪ್ರತಿ ವಿಭಾಗವನ್ನು ಮೇಲಿನ ನಡೆದಾಟಕ್ಕೆ ಹೋಲಿಸಿ. -B ಧ್ವಜ Python __pycache__ ಫೋಲ್ಡರ್‌ಗಳನ್ನು ಬರೆಯುವುದನ್ನು ತಡೆಯುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Predict before you run",
    "headingKn": "ಓಡಿಸುವ ಮುನ್ನ ಊಹಿಸಿ",
    "bodyEn": "Before rerunning, write down what you expect each experiment to print, then compare:\n1. The JSON tool-call scaffold with a limit of 5 turns per task\n2. The code-as-action scaffold, one program per task\n3. How the turn limit changes the JSON result",
    "bodyKn": "ಮರುಓಡಿಸುವ ಮುನ್ನ ಪ್ರತಿ ಪ್ರಯೋಗ ಏನು ಮುದ್ರಿಸುತ್ತದೆ ಎಂದು ನಿರೀಕ್ಷಿಸುವುದನ್ನು ಬರೆಯಿರಿ, ನಂತರ ಹೋಲಿಸಿ:\n1. The JSON tool-call scaffold with a limit of 5 turns per task\n2. The code-as-action scaffold, one program per task\n3. How the turn limit changes the JSON result"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Change one thing",
    "headingKn": "ಒಂದನ್ನು ಬದಲಿಸಿ",
    "bodyEn": "Pick one constant, threshold or input in the code shown above, change it, and predict which experiment will change before you rerun. If an experiment you did not expect changes, you have found a coupling worth understanding.",
    "bodyKn": "ಮೇಲೆ ತೋರಿಸಿದ ಕೋಡ್‌ನಲ್ಲಿ ಒಂದು ಸ್ಥಿರಾಂಕ, ಮಿತಿ ಅಥವಾ ಇನ್‌ಪುಟ್ ಆಯ್ದು ಬದಲಿಸಿ, ಮರುಓಡಿಸುವ ಮುನ್ನ ಯಾವ ಪ್ರಯೋಗ ಬದಲಾಗುತ್ತದೆ ಎಂದು ಊಹಿಸಿ. ನೀವು ನಿರೀಕ್ಷಿಸದ ಪ್ರಯೋಗ ಬದಲಾದರೆ, ಅರ್ಥಮಾಡಿಕೊಳ್ಳಬೇಕಾದ ಸಂಬಂಧವನ್ನು ನೀವು ಕಂಡುಕೊಂಡಿದ್ದೀರಿ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Where your numbers may differ",
    "headingKn": "ನಿಮ್ಮ ಸಂಖ್ಯೆಗಳು ಎಲ್ಲಿ ಭಿನ್ನವಾಗಬಹುದು",
    "bodyEn": "Timings, temporary paths, hashes and commit ids differ between runs and machines. Counts, verdicts and error messages should match unless your Python version or operating system differs from the one named in Lesson Info.",
    "bodyKn": "ಸಮಯಗಳು, ತಾತ್ಕಾಲಿಕ paths, hashes ಮತ್ತು commit ids ಓಟಗಳ ಮತ್ತು ಯಂತ್ರಗಳ ನಡುವೆ ಭಿನ್ನವಾಗುತ್ತವೆ. ಎಣಿಕೆಗಳು, ತೀರ್ಪುಗಳು ಮತ್ತು ದೋಷ ಸಂದೇಶಗಳು ನಿಮ್ಮ Python ಆವೃತ್ತಿ ಅಥವಾ ಆಪರೇಟಿಂಗ್ ಸಿಸ್ಟಮ್ Lesson Info ನಲ್ಲಿ ಹೆಸರಿಸಿದ್ದಕ್ಕಿಂತ ಭಿನ್ನವಾಗಿಲ್ಲದಿದ್ದರೆ ಹೊಂದಬೇಕು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "How many of 4 tasks did the JSON scaffold solve at a limit of 5 turns?",
      "qKn": "5 ಟರ್ನ್ ಮಿತಿಯಲ್ಲಿ JSON scaffold 4 ಕಾರ್ಯಗಳಲ್ಲಿ ಎಷ್ಟು ಪರಿಹರಿಸಿತು?",
      "opts": [
       "3",
       "2",
       "4",
       "0"
      ],
      "optsKn": [
       "3",
       "2",
       "4",
       "0"
      ],
      "correct": 0
     },
     {
      "q": "Which task failed under the JSON limit?",
      "qKn": "JSON ಮಿತಿಯಲ್ಲಿ ಯಾವ ಕಾರ್ಯ ವಿಫಲವಾಯಿತು?",
      "opts": [
       "rename_six",
       "count_lines",
       "find_todo",
       "concat_four"
      ],
      "optsKn": [
       "rename_six",
       "count_lines",
       "find_todo",
       "concat_four"
      ],
      "correct": 0
     },
     {
      "q": "How many turns did the code-as-action scaffold use in total?",
      "qKn": "code-as-action scaffold ಒಟ್ಟು ಎಷ್ಟು ಟರ್ನ್ ಬಳಸಿತು?",
      "opts": [
       "4",
       "20",
       "17",
       "7"
      ],
      "optsKn": [
       "4",
       "20",
       "17",
       "7"
      ],
      "correct": 0
     },
     {
      "q": "At what JSON turn limit did all four tasks first get solved?",
      "qKn": "ಯಾವ JSON ಟರ್ನ್ ಮಿತಿಯಲ್ಲಿ ಎಲ್ಲಾ ನಾಲ್ಕು ಕಾರ್ಯಗಳು ಮೊದಲು ಪರಿಹಾರವಾದವು?",
      "opts": [
       "6",
       "3",
       "5",
       "10"
      ],
      "optsKn": [
       "6",
       "3",
       "5",
       "10"
      ],
      "correct": 0
     },
     {
      "q": "What does the gap between scaffolds on this toy reflect?",
      "qKn": "ಈ ಆಟಿಕೆಯಲ್ಲಿ scaffolds ನಡುವಿನ ಅಂತರ ಏನನ್ನು ಪ್ರತಿಬಿಂಬಿಸುತ್ತದೆ?",
      "opts": [
       "A turn budget effect, not a capability difference",
       "A capability difference",
       "A bug in the JSON scaffold",
       "Different file systems"
      ],
      "optsKn": [
       "ಟರ್ನ್ ಬಜೆಟ್ ಪರಿಣಾಮ, ಸಾಮರ್ಥ್ಯ ವ್ಯತ್ಯಾಸವಲ್ಲ",
       "ಸಾಮರ್ಥ್ಯ ವ್ಯತ್ಯಾಸ",
       "JSON scaffold ನ ದೋಷ",
       "ಬೇರೆ ಫೈಲ್ ವ್ಯವಸ್ಥೆಗಳು"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
