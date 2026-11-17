module.exports = {
 "phaseId": "6a369d6366020ed05b32158c",
 "moduleId": "6a369d6366020ed05b3215a7",
 "order": 1,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Autonomous Coding Agent Landscape (Part 2 of 3) — Scope Contracts and the Sandbox Gap",
 "titleKn": "ಸ್ವಾಯತ್ತ ಕೋಡಿಂಗ್ Agent ಭೂದೃಶ್ಯ (ಭಾಗ 2 / 3) — Scope ಒಪ್ಪಂದಗಳು ಮತ್ತು Sandbox ಅಂತರ",
 "desc": "Enforce a scope contract on generated code and see why it is not a sandbox.",
 "descKn": "ರಚಿತ ಕೋಡ್ ಮೇಲೆ scope ಒಪ್ಪಂದ ಜಾರಿಗೊಳಿಸಿ ಮತ್ತು ಅದು sandbox ಏಕೆ ಅಲ್ಲ ನೋಡಿ.",
 "objectives": [
  "Write a scope contract.",
  "Enforce it per operation.",
  "See partial effects.",
  "Explain the builtins gap.",
  "Name where enforcement belongs."
 ],
 "objectivesKn": [
  "scope ಒಪ್ಪಂದ ಬರೆಯಿರಿ.",
  "ಪ್ರತಿ ಕಾರ್ಯಾಚರಣೆಗೆ ಜಾರಿಗೊಳಿಸಿ.",
  "ಭಾಗಶಃ ಪರಿಣಾಮ ನೋಡಿ.",
  "builtins ಅಂತರ ವಿವರಿಸಿ.",
  "ಜಾರಿ ಎಲ್ಲಿ ಸೇರಿದೆ ಹೆಸರಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Autonomous Coding Agent Landscape (Part 2 of 3)",
    "textKn": "ಸ್ವಾಯತ್ತ ಕೋಡಿಂಗ್ Agent ಭೂದೃಶ್ಯ (ಭಾಗ 2 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 2 of 3: scope contracts with path prefixes and an operation budget, what a stopped snippet leaves behind, why restricted builtins do not make a sandbox and why an in-process contract can be widened. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind the autonomous coding agent landscape (JSON tool-call versus code-as-action scaffolds, scope contracts, why exec with restricted builtins is not a sandbox, workload-weighted scores, confidence intervals and benchmark contamination), not the real software, and the agents are scripted planners and fixed code snippets over an in-memory file system, the success rates and task mixes are invented, and no language model or published benchmark is run, so no real LLM behaviour is measured. The original code/main.py was not supplied, so the labs are our own implementation. The lesson quotes a JSON-versus-CodeAct comparison (JSON 2 of 4 tasks in 16 turns, CodeAct 4 of 4 in 7 turns with 26 operations), published SWE-bench numbers and a workload-weighted success of 71.5 percent; those figures are cited from the lesson and were not reproduced, and our lab produced different counts on its own invented tasks, which the lesson reports as they came out. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 2ನೆಯದು: path ಪೂರ್ವಪ್ರತ್ಯಯಗಳು ಮತ್ತು ಕಾರ್ಯಾಚರಣೆ ಬಜೆಟ್ ಇರುವ scope ಒಪ್ಪಂದಗಳು, ನಿಂತ ತುಣುಕು ಏನನ್ನು ಬಿಡುತ್ತದೆ, ನಿರ್ಬಂಧಿತ builtins ಏಕೆ sandbox ಮಾಡುವುದಿಲ್ಲ ಮತ್ತು ಪ್ರಕ್ರಿಯೆಯೊಳಗಿನ ಒಪ್ಪಂದ ಏಕೆ ವಿಸ್ತರಿಸಬಹುದು. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು ಸ್ವಾಯತ್ತ ಕೋಡಿಂಗ್ agent ಭೂದೃಶ್ಯ (JSON tool-call ವಿರುದ್ಧ code-as-action scaffolds, scope ಒಪ್ಪಂದಗಳು, ನಿರ್ಬಂಧಿತ builtins ಇರುವ exec ಏಕೆ sandbox ಅಲ್ಲ, ಕೆಲಸಭಾರ-ತೂಕದ ಅಂಕಗಳು, ವಿಶ್ವಾಸ ಅಂತರಗಳು ಮತ್ತು benchmark ಕಲುಷಿತ) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು agents ಮೆಮೊರಿ ಫೈಲ್ ವ್ಯವಸ್ಥೆಯ ಮೇಲೆ scripted ಯೋಜಕರು ಮತ್ತು ನಿಗದಿತ ಕೋಡ್ ತುಣುಕುಗಳು, ಯಶಸ್ಸು ದರಗಳು ಮತ್ತು ಕೆಲಸ ಮಿಶ್ರಣಗಳು ಕಲ್ಪಿತ, ಮತ್ತು ಭಾಷಾ ಮಾದರಿ ಅಥವಾ ಪ್ರಕಟಿತ benchmark ಓಡಿಸಲಾಗಿಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ code/main.py ಒದಗಿಸಿರಲಿಲ್ಲ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ನಮ್ಮದೇ ಅನುಷ್ಠಾನ. lesson JSON-ವಿರುದ್ಧ-CodeAct ಹೋಲಿಕೆ (JSON 4 ರಲ್ಲಿ 2 ಕಾರ್ಯ 16 ಟರ್ನ್‌ಗಳಲ್ಲಿ, CodeAct 4 ರಲ್ಲಿ 4, 7 ಟರ್ನ್‌ಗಳು ಮತ್ತು 26 ಕಾರ್ಯಾಚರಣೆ), ಪ್ರಕಟಿತ SWE-bench ಸಂಖ್ಯೆಗಳು ಮತ್ತು 71.5 ಶೇಕಡಾ ಕೆಲಸಭಾರ-ತೂಕದ ಯಶಸ್ಸನ್ನು ಉಲ್ಲೇಖಿಸುತ್ತದೆ; ಆ ಅಂಕಿಗಳು lesson ನಿಂದ ಉಲ್ಲೇಖಿತ ಮತ್ತು ಪುನರುತ್ಪಾದಿಸಲಾಗಿಲ್ಲ, ಮತ್ತು ನಮ್ಮ ಲ್ಯಾಬ್ ತನ್ನ ಕಲ್ಪಿತ ಕಾರ್ಯಗಳಲ್ಲಿ ಬೇರೆ ಎಣಿಕೆ ನೀಡಿತು, ಅವು ಬಂದಂತೆಯೇ lesson ವರದಿ ಮಾಡುತ್ತದೆ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Bounding What Generated Code May Touch",
    "textKn": "ರಚಿತ ಕೋಡ್ ಏನನ್ನು ಮುಟ್ಟಬಹುದು ಎಂದು ಮಿತಿಗೊಳಿಸುವುದು",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "A Contract, a Guard and Their Limits",
    "headingKn": "ಒಪ್ಪಂದ, ಗಾರ್ಡ್ ಮತ್ತು ಅವುಗಳ ಮಿತಿಗಳು",
    "bodyEn": "Code-as-action gives an agent power, so each task needs a contract that names what it may read, what it may write and how many operations it may use. This part builds a guarded environment that enforces such a contract on four fixed snippets, shows that a snippet stopped midway leaves earlier writes in place, shows that removing builtins from exec still leaves a path to the interpreter classes, and shows that a contract stored in an ordinary object can be widened by anything in the same process.",
    "bodyKn": "Code-as-action agent ಗೆ ಶಕ್ತಿ ನೀಡುತ್ತದೆ, ಆದ್ದರಿಂದ ಪ್ರತಿ ಕಾರ್ಯಕ್ಕೆ ಅದು ಏನು ಓದಬಹುದು, ಏನು ಬರೆಯಬಹುದು ಮತ್ತು ಎಷ್ಟು ಕಾರ್ಯಾಚರಣೆ ಬಳಸಬಹುದು ಹೆಸರಿಸುವ ಒಪ್ಪಂದ ಬೇಕು. ಈ ಭಾಗ ಅಂತಹ ಒಪ್ಪಂದ ಜಾರಿಗೊಳಿಸುವ ಗಾರ್ಡ್ ಮಾಡಿದ ಪರಿಸರ ನಾಲ್ಕು ನಿಗದಿತ ತುಣುಕುಗಳ ಮೇಲೆ ನಿರ್ಮಿಸುತ್ತದೆ, ಮಧ್ಯದಲ್ಲಿ ನಿಂತ ತುಣುಕು ಮೊದಲಿನ ಬರವಣಿಗೆಗಳನ್ನು ಉಳಿಸುತ್ತದೆ ಎಂದು ತೋರಿಸುತ್ತದೆ, exec ನಿಂದ builtins ತೆಗೆದರೂ ಇಂಟರ್ಪ್ರಿಟರ್ ವರ್ಗಗಳಿಗೆ ದಾರಿ ಉಳಿಯುತ್ತದೆ ಎಂದು ತೋರಿಸುತ್ತದೆ, ಮತ್ತು ಸಾಮಾನ್ಯ ವಸ್ತುವಿನಲ್ಲಿ ಸಂಗ್ರಹಿಸಿದ ಒಪ್ಪಂದವನ್ನು ಅದೇ ಪ್ರಕ್ರಿಯೆಯಲ್ಲಿನ ಯಾವುದೇ ವಸ್ತು ವಿಸ್ತರಿಸಬಹುದು ಎಂದು ತೋರಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Scope Contracts for Generated Code",
    "headingKn": "ರಚಿತ ಕೋಡ್‌ಗೆ Scope ಒಪ್ಪಂದಗಳು",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">a contract bounds operations but cannot contain code</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">contract</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">paths + ops</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">guard</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">checks each call</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">snippet</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">stops at breach</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">not a sandbox</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">same process</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">a contract bounds operations but cannot contain code</text></svg>",
    "captionEn": "A guard checks each operation against a contract.",
    "captionKn": "ಗಾರ್ಡ್ ಪ್ರತಿ ಕಾರ್ಯಾಚರಣೆಯನ್ನು ಒಪ್ಪಂದದ ವಿರುದ್ಧ ಪರಿಶೀಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "The contract in the lab",
    "headingKn": "ಲ್ಯಾಬ್‌ನಲ್ಲಿ ಒಪ್ಪಂದ",
    "headers": [
     "Field",
     "Value"
    ],
    "rows": [
     [
      "readable prefixes",
      "src/ and docs/"
     ],
     [
      "writable prefixes",
      "out/"
     ],
     [
      "operation budget",
      "10"
     ],
     [
      "files",
      "src/app.py, src/util.py, docs/readme.md, secrets/key.txt (made-up), out/report.txt"
     ],
     [
      "snippets",
      "four fixed strings written for the lab"
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
    "filename": "ca_2.py",
    "headingEn": "Guarded environment and snippet runner",
    "headingKn": "ಗಾರ್ಡ್ ಮಾಡಿದ ಪರಿಸರ ಮತ್ತು ತುಣುಕು ಓಟಗಾರ",
    "descEn": "GuardedEnv counts operations and checks every read and write against the contract, and run_snippet executes a snippet with a minimal builtins table and reports whether it completed or was stopped.",
    "descKn": "GuardedEnv ಕಾರ್ಯಾಚರಣೆ ಎಣಿಸಿ ಪ್ರತಿ ಓದು ಮತ್ತು ಬರವಣಿಗೆಯನ್ನು ಒಪ್ಪಂದದ ವಿರುದ್ಧ ಪರಿಶೀಲಿಸುತ್ತದೆ, ಮತ್ತು run_snippet ಕನಿಷ್ಠ builtins ಕೋಷ್ಟಕದೊಂದಿಗೆ ತುಣುಕು ನಿರ್ವಹಿಸಿ ಅದು ಪೂರ್ಣವಾಯಿತೇ ಅಥವಾ ನಿಲ್ಲಿಸಲ್ಪಟ್ಟಿತೇ ವರದಿ ಮಾಡುತ್ತದೆ.",
    "code": "class Violation(Exception):\r\n    pass\r\n\r\n\r\nclass GuardedEnv:\r\n    def __init__(self, fs, read_ok, write_ok, max_ops):\r\n        self.fs, self.read_ok, self.write_ok, self.max_ops = dict(fs), tuple(read_ok), tuple(write_ok), max_ops\r\n        self.ops = 0\r\n        self.denied = []\r\n\r\n    def _count(self):\r\n        self.ops += 1\r\n        if self.ops > self.max_ops:\r\n            self.denied.append(\"op budget\")\r\n            raise Violation(\"operation budget exceeded\")\r\n\r\n    def read_file(self, name):\r\n        self._count()\r\n        if not name.startswith(self.read_ok):\r\n            self.denied.append(f\"read {name}\")\r\n            raise Violation(f\"read denied: {name}\")\r\n        return self.fs[name]\r\n\r\n    def write_file(self, name, text):\r\n        self._count()\r\n        if not name.startswith(self.write_ok):\r\n            self.denied.append(f\"write {name}\")\r\n            raise Violation(f\"write denied: {name}\")\r\n        self.fs[name] = text\r\n\r\n\r\nFS = {\"src/app.py\": \"print('hi')\\n\", \"src/util.py\": \"x = 1\\n\", \"docs/readme.md\": \"# doc\\n\", \"secrets/key.txt\": \"made-up-secret\", \"out/report.txt\": \"\"}\r\n\r\n\r\ndef run_snippet(code, env):\r\n    ns = {\"read_file\": env.read_file, \"write_file\": env.write_file}\r\n    try:\r\n        exec(code, {\"__builtins__\": {\"len\": len, \"sorted\": sorted, \"range\": range, \"str\": str}}, ns)\r\n        return \"completed\"\r\n    except Violation as e:\r\n        return f\"stopped: {e}\"\r\n    except Exception as e:\r\n        return f\"error: {type(e).__name__}\"\r\n\r\n\r\nSNIPPETS = {\r\n    \"in scope\": \"text = read_file('src/app.py') + read_file('src/util.py')\\nwrite_file('out/report.txt', str(len(text)))\",\r\n    \"reads secrets\": \"read_file('src/app.py')\\nread_file('secrets/key.txt')\",\r\n    \"writes source\": \"write_file('src/app.py', 'print(1)')\",\r\n    \"op loop\": \"for i in range(100):\\n    read_file('src/app.py')\",\r\n}"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "ca_2.py",
    "headingEn": "main(): experiments",
    "headingKn": "main(): ಪ್ರಯೋಗಗಳು",
    "descEn": "main() runs four snippets under the contract, shows partial effects, counts reachable interpreter classes and widens the contract from inside the process.",
    "descKn": "main() ಒಪ್ಪಂದದಡಿ ನಾಲ್ಕು ತುಣುಕು ಓಡಿಸಿ, ಭಾಗಶಃ ಪರಿಣಾಮ ತೋರಿಸಿ, ತಲುಪಬಹುದಾದ ಇಂಟರ್ಪ್ರಿಟರ್ ವರ್ಗ ಎಣಿಸಿ ಮತ್ತು ಪ್ರಕ್ರಿಯೆಯ ಒಳಗಿನಿಂದ ಒಪ್ಪಂದ ವಿಸ್ತರಿಸುತ್ತದೆ.",
    "code": "def main():\r\n    section(\"1. Genuinely running: four snippets under one contract\")\r\n    for name, code in SNIPPETS.items():\r\n        env = GuardedEnv(FS, read_ok=(\"src/\", \"docs/\"), write_ok=(\"out/\",), max_ops=10)\r\n        res = run_snippet(code, env)\r\n        print(f\"{name:14} -> {res} | operations used {env.ops} | denied {env.denied}\")\r\n    print(\"the in-scope snippet completes, the secret read, the source write and the runaway loop are each stopped at the first operation that breaks the contract, and the file system is untouched by the denied operations; the contract is a prefix list and an operation count, which is simpler than a real policy\")\r\n\r\n    section(\"2. Genuinely running: what a stopped snippet leaves behind\")\r\n    env = GuardedEnv(FS, read_ok=(\"src/\",), write_ok=(\"out/\",), max_ops=10)\r\n    run_snippet(\"write_file('out/report.txt', 'partial')\\nread_file('secrets/key.txt')\\nwrite_file('out/report.txt', 'final')\", env)\r\n    print(\"report after the run:\", repr(env.fs[\"out/report.txt\"]), \"| denied:\", env.denied)\r\n    print(\"the first write happened before the denied read, so a contract that stops a snippet midway does not undo what ran earlier; scope contracts bound future operations and do not roll back past ones\")\r\n\r\n    section(\"3. Genuinely running: restricting builtins is not a sandbox\")\r\n    env = GuardedEnv(FS, read_ok=(\"src/\",), write_ok=(\"out/\",), max_ops=10)\r\n    probe = \"answer = len(().__class__.__bases__[0].__subclasses__())\"\r\n    ns = {}\r\n    exec(probe, {\"__builtins__\": {\"len\": len}}, ns)\r\n    print(\"a snippet with only len available still reached the interpreter's class list; classes reachable:\", ns[\"answer\"] > 50)\r\n    print(\"with no import and no open in the namespace the snippet can still walk from a tuple to every loaded class, which is the first step of well-known escapes, so removing builtins narrows what a snippet does by accident and does not contain a hostile one; the lab only counts the reachable classes and does not use them\")\r\n\r\n    section(\"4. Genuinely running: a guarded environment is only as strong as the process around it\")\r\n    env = GuardedEnv(FS, read_ok=(\"src/\",), write_ok=(\"out/\",), max_ops=10)\r\n    run_snippet(\"pass\", env)\r\n    env.read_ok = (\"src/\", \"secrets/\")\r\n    print(\"a caller that can reach the environment object can widen the contract:\", env.read_file(\"secrets/key.txt\") == \"made-up-secret\")\r\n    print(\"because the contract lives in an ordinary Python object, anything that shares the process can edit it, so real enforcement has to sit in a separate process or container with its own permissions\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: four snippets under one contract ---\nin scope       -> completed | operations used 3 | denied []\nreads secrets  -> stopped: read denied: secrets/key.txt | operations used 2 | denied ['read secrets/key.txt']\nwrites source  -> stopped: write denied: src/app.py | operations used 1 | denied ['write src/app.py']\nop loop        -> stopped: operation budget exceeded | operations used 11 | denied ['op budget']\nthe in-scope snippet completes, the secret read, the source write and the runaway loop are each stopped at the first operation that breaks the contract, and the file system is untouched by the denied operations; the contract is a prefix list and an operation count, which is simpler than a real policy\n\n--- 2. Genuinely running: what a stopped snippet leaves behind ---\nreport after the run: 'partial' | denied: ['read secrets/key.txt']\nthe first write happened before the denied read, so a contract that stops a snippet midway does not undo what ran earlier; scope contracts bound future operations and do not roll back past ones\n\n--- 3. Genuinely running: restricting builtins is not a sandbox ---\na snippet with only len available still reached the interpreter's class list; classes reachable: True\nwith no import and no open in the namespace the snippet can still walk from a tuple to every loaded class, which is the first step of well-known escapes, so removing builtins narrows what a snippet does by accident and does not contain a hostile one; the lab only counts the reachable classes and does not use them\n\n--- 4. Genuinely running: a guarded environment is only as strong as the process around it ---\na caller that can reach the environment object can widen the contract: True\nbecause the contract lives in an ordinary Python object, anything that shares the process can edit it, so real enforcement has to sit in a separate process or container with its own permissions"
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
    "headingEn": "Experiment 1: Four snippets under one contract",
    "headingKn": "ಪ್ರಯೋಗ 1: Four snippets under one contract",
    "bodyEn": "What it ran: Four snippets under one contract. What the lab concluded: the in-scope snippet completes, the secret read, the source write and the runaway loop are each stopped at the first operation that breaks the contract, and the file system is untouched by the denied operations; the contract is a prefix list and an operation count, which is simpler than a real policy",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Four snippets under one contract. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the in-scope snippet completes, the secret read, the source write and the runaway loop are each stopped at the first operation that breaks the contract, and the file system is untouched by the denied operations; the contract is a prefix list and an operation count, which is simpler than a real policy"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. Genuinely running: four snippets under one contract ---\nin scope       -> completed | operations used 3 | denied []\nreads secrets  -> stopped: read denied: secrets/key.txt | operations used 2 | denied ['read secrets/key.txt']\nwrites source  -> stopped: write denied: src/app.py | operations used 1 | denied ['write src/app.py']\nop loop        -> stopped: operation budget exceeded | operations used 11 | denied ['op budget']"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: What a stopped snippet leaves behind",
    "headingKn": "ಪ್ರಯೋಗ 2: What a stopped snippet leaves behind",
    "bodyEn": "What it ran: What a stopped snippet leaves behind. What the lab concluded: the first write happened before the denied read, so a contract that stops a snippet midway does not undo what ran earlier; scope contracts bound future operations and do not roll back past ones",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: What a stopped snippet leaves behind. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the first write happened before the denied read, so a contract that stops a snippet midway does not undo what ran earlier; scope contracts bound future operations and do not roll back past ones"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely running: what a stopped snippet leaves behind ---\nreport after the run: 'partial' | denied: ['read secrets/key.txt']"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: Restricting builtins is not a sandbox",
    "headingKn": "ಪ್ರಯೋಗ 3: Restricting builtins is not a sandbox",
    "bodyEn": "What it ran: Restricting builtins is not a sandbox. What the lab concluded: with no import and no open in the namespace the snippet can still walk from a tuple to every loaded class, which is the first step of well-known escapes, so removing builtins narrows what a snippet does by accident and does not contain a hostile one; the lab only counts the reachable classes and does not use them",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Restricting builtins is not a sandbox. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): with no import and no open in the namespace the snippet can still walk from a tuple to every loaded class, which is the first step of well-known escapes, so removing builtins narrows what a snippet does by accident and does not contain a hostile one; the lab only counts the reachable classes and does not use them"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely running: restricting builtins is not a sandbox ---\na snippet with only len available still reached the interpreter's class list; classes reachable: True"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 4: A guarded environment is only as strong as the process around it",
    "headingKn": "ಪ್ರಯೋಗ 4: A guarded environment is only as strong as the process around it",
    "bodyEn": "What it ran: A guarded environment is only as strong as the process around it. What the lab concluded: because the contract lives in an ordinary Python object, anything that shares the process can edit it, so real enforcement has to sit in a separate process or container with its own permissions",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A guarded environment is only as strong as the process around it. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): because the contract lives in an ordinary Python object, anything that shares the process can edit it, so real enforcement has to sit in a separate process or container with its own permissions"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 4. Genuinely running: a guarded environment is only as strong as the process around it ---\na caller that can reach the environment object can widen the contract: True"
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
    "headingEn": "Genuinely Found: Four Snippets and a Partial Run",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ನಾಲ್ಕು ತುಣುಕುಗಳು ಮತ್ತು ಭಾಗಶಃ ಓಟ",
    "bodyEn": "Section 1: the in-scope snippet completed with 3 operations, the secret read was stopped after 2 operations, the source write was stopped at its first operation and the runaway loop was stopped when it reached 11 operations against the budget of 10. Section 2: a snippet that wrote out/report.txt, then tried a denied read, left the report as partial.",
    "bodyKn": "ವಿಭಾಗ 1: scope ಒಳಗಿನ ತುಣುಕು 3 ಕಾರ್ಯಾಚರಣೆಗಳೊಂದಿಗೆ ಪೂರ್ಣವಾಯಿತು, ರಹಸ್ಯ ಓದು 2 ಕಾರ್ಯಾಚರಣೆ ನಂತರ ನಿಲ್ಲಿಸಲ್ಪಟ್ಟಿತು, ಮೂಲ ಬರವಣಿಗೆ ಅದರ ಮೊದಲ ಕಾರ್ಯಾಚರಣೆಯಲ್ಲಿ ನಿಲ್ಲಿಸಲ್ಪಟ್ಟಿತು ಮತ್ತು ಓಡುತ್ತಿದ್ದ ಲೂಪ್ ಬಜೆಟ್ 10 ವಿರುದ್ಧ 11 ಕಾರ್ಯಾಚರಣೆ ತಲುಪಿದಾಗ ನಿಲ್ಲಿಸಲ್ಪಟ್ಟಿತು. ವಿಭಾಗ 2: out/report.txt ಬರೆದು ನಂತರ ನಿರಾಕರಿಸಿದ ಓದು ಪ್ರಯತ್ನಿಸಿದ ತುಣುಕು ವರದಿಯನ್ನು partial ಆಗಿ ಬಿಟ್ಟಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Not a Sandbox",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Sandbox ಅಲ್ಲ",
    "bodyEn": "Section 3: a snippet given only len still reached the interpreter class list, with more than 50 classes reachable. Section 4: code that shares the process with the guard widened the readable prefixes and read the made-up secret file.",
    "bodyKn": "ವಿಭಾಗ 3: ಕೇವಲ len ನೀಡಿದ ತುಣುಕು ಇನ್ನೂ ಇಂಟರ್ಪ್ರಿಟರ್ ವರ್ಗ ಪಟ್ಟಿ ತಲುಪಿತು, 50 ಕ್ಕಿಂತ ಹೆಚ್ಚು ವರ್ಗಗಳು ತಲುಪಬಹುದಾಗಿದ್ದವು. ವಿಭಾಗ 4: ಗಾರ್ಡ್‌ನೊಂದಿಗೆ ಪ್ರಕ್ರಿಯೆ ಹಂಚಿಕೊಳ್ಳುವ ಕೋಡ್ ಓದಬಹುದಾದ ಪೂರ್ವಪ್ರತ್ಯಯಗಳನ್ನು ವಿಸ್ತರಿಸಿ ಕಲ್ಪಿತ ರಹಸ್ಯ ಫೈಲ್ ಓದಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A contract tells you what an honest snippet may do, but only a boundary outside the process can stop a snippet that is trying to get out, and neither can undo what already ran.",
    "bodyKn": "ಒಪ್ಪಂದ ಪ್ರಾಮಾಣಿಕ ತುಣುಕು ಏನು ಮಾಡಬಹುದು ಎಂದು ಹೇಳುತ್ತದೆ, ಆದರೆ ಹೊರಬರಲು ಪ್ರಯತ್ನಿಸುತ್ತಿರುವ ತುಣುಕನ್ನು ಪ್ರಕ್ರಿಯೆಯ ಹೊರಗಿನ ಗಡಿ ಮಾತ್ರ ತಡೆಯಬಲ್ಲದು, ಮತ್ತು ಯಾವುದೂ ಈಗಾಗಲೇ ಓಡಿದ್ದನ್ನು ಹಿಂತಿರುಗಿಸಲಾರದು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"exec with a tiny builtins table is a sandbox.\" A snippet with only len available still reached the interpreter classes.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಚಿಕ್ಕ builtins ಕೋಷ್ಟಕವಿರುವ exec ಒಂದು sandbox.\" ಕೇವಲ len ಲಭ್ಯವಿದ್ದ ತುಣುಕು ಇನ್ನೂ ಇಂಟರ್ಪ್ರಿಟರ್ ವರ್ಗಗಳನ್ನು ತಲುಪಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Scope contract: the paths and operation count a task may use. Guard: code that checks each operation. Sandbox: isolation enforced outside the process. Partial effect: changes made before a stop.",
    "bodyKn": "Scope contract: ಕಾರ್ಯ ಬಳಸಬಹುದಾದ path ಮತ್ತು ಕಾರ್ಯಾಚರಣೆ ಸಂಖ್ಯೆ. Guard: ಪ್ರತಿ ಕಾರ್ಯಾಚರಣೆ ಪರಿಶೀಲಿಸುವ ಕೋಡ್. Sandbox: ಪ್ರಕ್ರಿಯೆಯ ಹೊರಗೆ ಜಾರಿಗೊಳಿಸಿದ ಪ್ರತ್ಯೇಕತೆ. Partial effect: ನಿಲ್ಲುವ ಮೊದಲು ಮಾಡಿದ ಬದಲಾವಣೆಗಳು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) The in-scope snippet completed in 3 operations. 2) The secret read was stopped at its second operation. 3) A stopped snippet left a partial report. 4) Restricted builtins still reached interpreter classes. 5) An in-process contract was widened from inside.",
    "bodyKn": "1) scope ಒಳಗಿನ ತುಣುಕು 3 ಕಾರ್ಯಾಚರಣೆಗಳಲ್ಲಿ ಪೂರ್ಣವಾಯಿತು. 2) ರಹಸ್ಯ ಓದು ಅದರ ಎರಡನೇ ಕಾರ್ಯಾಚರಣೆಯಲ್ಲಿ ನಿಲ್ಲಿಸಲ್ಪಟ್ಟಿತು. 3) ನಿಂತ ತುಣುಕು ಭಾಗಶಃ ವರದಿ ಬಿಟ್ಟಿತು. 4) ನಿರ್ಬಂಧಿತ builtins ಇನ್ನೂ ಇಂಟರ್ಪ್ರಿಟರ್ ವರ್ಗಗಳನ್ನು ತಲುಪಿದವು. 5) ಪ್ರಕ್ರಿಯೆಯೊಳಗಿನ ಒಪ್ಪಂದ ಒಳಗಿನಿಂದ ವಿಸ್ತರಿಸಲ್ಪಟ್ಟಿತು."
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
    "bodyEn": "1) Open a terminal in pneuronics-backend/lesson-defs/labs. 2) Run: python -B ca_2.py (in Git Bash on Windows: PYTHONIOENCODING=utf-8 python -B ca_2.py). 3) Compare each section with the walkthrough above. The -B flag stops Python from writing __pycache__ folders.",
    "bodyKn": "1) pneuronics-backend/lesson-defs/labs ನಲ್ಲಿ ಟರ್ಮಿನಲ್ ತೆರೆಯಿರಿ. 2) ಓಡಿಸಿ: python -B ca_2.py (Windows Git Bash ನಲ್ಲಿ: PYTHONIOENCODING=utf-8 python -B ca_2.py). 3) ಪ್ರತಿ ವಿಭಾಗವನ್ನು ಮೇಲಿನ ನಡೆದಾಟಕ್ಕೆ ಹೋಲಿಸಿ. -B ಧ್ವಜ Python __pycache__ ಫೋಲ್ಡರ್‌ಗಳನ್ನು ಬರೆಯುವುದನ್ನು ತಡೆಯುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Predict before you run",
    "headingKn": "ಓಡಿಸುವ ಮುನ್ನ ಊಹಿಸಿ",
    "bodyEn": "Before rerunning, write down what you expect each experiment to print, then compare:\n1. Four snippets under one contract\n2. What a stopped snippet leaves behind\n3. Restricting builtins is not a sandbox\n4. A guarded environment is only as strong as the process around it",
    "bodyKn": "ಮರುಓಡಿಸುವ ಮುನ್ನ ಪ್ರತಿ ಪ್ರಯೋಗ ಏನು ಮುದ್ರಿಸುತ್ತದೆ ಎಂದು ನಿರೀಕ್ಷಿಸುವುದನ್ನು ಬರೆಯಿರಿ, ನಂತರ ಹೋಲಿಸಿ:\n1. Four snippets under one contract\n2. What a stopped snippet leaves behind\n3. Restricting builtins is not a sandbox\n4. A guarded environment is only as strong as the process around it"
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "How many operations had the runaway loop used when it was stopped?",
      "qKn": "ಓಡುತ್ತಿದ್ದ ಲೂಪ್ ನಿಲ್ಲಿಸಿದಾಗ ಎಷ್ಟು ಕಾರ್ಯಾಚರಣೆ ಬಳಸಿತ್ತು?",
      "opts": [
       "11",
       "10",
       "100",
       "3"
      ],
      "optsKn": [
       "11",
       "10",
       "100",
       "3"
      ],
      "correct": 0
     },
     {
      "q": "What did out/report.txt contain after the snippet that wrote it and then hit a denied read?",
      "qKn": "ಅದನ್ನು ಬರೆದು ನಂತರ ನಿರಾಕರಿಸಿದ ಓದು ತಟ್ಟಿದ ತುಣುಕಿನ ನಂತರ out/report.txt ಏನು ಹೊಂದಿತ್ತು?",
      "opts": [
       "partial",
       "final",
       "nothing",
       "the secret"
      ],
      "optsKn": [
       "partial",
       "final",
       "ಏನೂ ಇಲ್ಲ",
       "ರಹಸ್ಯ"
      ],
      "correct": 0
     },
     {
      "q": "Why does removing builtins not make exec a sandbox?",
      "qKn": "builtins ತೆಗೆಯುವುದು exec ಅನ್ನು sandbox ಏಕೆ ಮಾಡುವುದಿಲ್ಲ?",
      "opts": [
       "Objects can still lead to interpreter classes",
       "Builtins are required for exec",
       "exec is always safe",
       "It speeds up code"
      ],
      "optsKn": [
       "ವಸ್ತುಗಳು ಇನ್ನೂ ಇಂಟರ್ಪ್ರಿಟರ್ ವರ್ಗಗಳಿಗೆ ದಾರಿ ಮಾಡಿಕೊಡುತ್ತವೆ",
       "exec ಗೆ builtins ಅಗತ್ಯ",
       "exec ಯಾವಾಗಲೂ ಸುರಕ್ಷಿತ",
       "ಅದು ಕೋಡ್ ವೇಗಗೊಳಿಸುತ್ತದೆ"
      ],
      "correct": 0
     },
     {
      "q": "Who could widen the contract in section 4?",
      "qKn": "ವಿಭಾಗ 4 ರಲ್ಲಿ ಒಪ್ಪಂದ ಯಾರು ವಿಸ್ತರಿಸಬಹುದು?",
      "opts": [
       "Any code sharing the process with the guard",
       "Only an operator",
       "Only the file system",
       "Nobody"
      ],
      "optsKn": [
       "ಗಾರ್ಡ್‌ನೊಂದಿಗೆ ಪ್ರಕ್ರಿಯೆ ಹಂಚಿಕೊಳ್ಳುವ ಯಾವುದೇ ಕೋಡ್",
       "ಆಪರೇಟರ್ ಮಾತ್ರ",
       "ಫೈಲ್ ವ್ಯವಸ್ಥೆ ಮಾತ್ರ",
       "ಯಾರೂ ಇಲ್ಲ"
      ],
      "correct": 0
     },
     {
      "q": "Where must real enforcement live?",
      "qKn": "ನಿಜ ಜಾರಿ ಎಲ್ಲಿರಬೇಕು?",
      "opts": [
       "In a separate process or container with its own permissions",
       "In the same Python dictionary",
       "In the snippet",
       "In the prompt"
      ],
      "optsKn": [
       "ತನ್ನದೇ ಅನುಮತಿಗಳಿರುವ ಪ್ರತ್ಯೇಕ ಪ್ರಕ್ರಿಯೆ ಅಥವಾ ಕಂಟೇನರ್‌ನಲ್ಲಿ",
       "ಅದೇ Python ನಿಘಂಟಿನಲ್ಲಿ",
       "ತುಣುಕಿನಲ್ಲಿ",
       "ಪ್ರಾಂಪ್ಟ್‌ನಲ್ಲಿ"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
