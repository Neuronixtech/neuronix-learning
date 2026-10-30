module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6166020ed05b32153e",
 "order": 0,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Claude Agent SDK: The Harness, Subagents and Sessions (Part 1 of 3) — Tools and the Registry",
 "titleKn": "Claude Agent SDK: Harness, Subagents ಮತ್ತು Sessions (ಭಾಗ 1 / 3) — Tools ಮತ್ತು Registry",
 "desc": "Build Tool, ToolRegistry and three file tools, then test the directory boundary, size and encoding limits, silent overwrites and which hook events a failing call produces.",
 "descKn": "Tool, ToolRegistry ಮತ್ತು ಮೂರು ಫೈಲ್ tools ನಿರ್ಮಿಸಿ, ನಂತರ ಡೈರೆಕ್ಟರಿ ಗಡಿ, ಗಾತ್ರ ಮತ್ತು encoding ಮಿತಿಗಳು, ಮೌನ ಮೇಲ್ಬರಹ ಮತ್ತು ವಿಫಲ ಕರೆ ಯಾವ hook ಘಟನೆಗಳನ್ನು ನೀಡುತ್ತದೆ ಎಂದು ಪರೀಕ್ಷಿಸಿ.",
 "objectives": [
  "Explain what a harness adds to a model call.",
  "Build a registry that rejects duplicates.",
  "Find the directory-boundary gap in a file tool.",
  "Explain why a result envelope helps.",
  "Know which hook events a failing call skips."
 ],
 "objectivesKn": [
  "Harness ಮಾದರಿ ಕರೆಗೆ ಏನು ಸೇರಿಸುತ್ತದೆ ಎಂದು ವಿವರಿಸಿ.",
  "ನಕಲುಗಳನ್ನು ತಿರಸ್ಕರಿಸುವ registry ನಿರ್ಮಿಸಿ.",
  "ಫೈಲ್ tool ನಲ್ಲಿ ಡೈರೆಕ್ಟರಿ-ಗಡಿ ಅಂತರ ಕಂಡುಹಿಡಿಯಿರಿ.",
  "ಫಲಿತಾಂಶ ಹೊದಿಕೆ ಏಕೆ ಸಹಾಯ ಮಾಡುತ್ತದೆ ಎಂದು ವಿವರಿಸಿ.",
  "ವಿಫಲ ಕರೆ ಯಾವ hook ಘಟನೆಗಳನ್ನು ಬಿಡುತ್ತದೆ ಎಂದು ತಿಳಿಯಿರಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Claude Agent SDK: The Harness, Subagents and Sessions (Part 1 of 3)",
    "textKn": "Claude Agent SDK: Harness, Subagents ಮತ್ತು Sessions (ಭಾಗ 1 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 1 of 3: Tool, ToolRegistry and the built-in file tools. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind the Claude Agent SDK, not the SDK itself, and the subagents are simulated workers, so no real LLM behaviour is measured. The pasted source was a flattened export, so the code is rebuilt from its descriptions and run for real. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 1ನೆಯದು: Tool, ToolRegistry ಮತ್ತು ಅಂತರ್ನಿರ್ಮಿತ ಫೈಲ್ tools. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು Claude Agent SDK ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, SDK ಸ್ವತಃ ಅಲ್ಲ, ಮತ್ತು subagents ಅನುಕರಿಸಿದ ಕೆಲಸಗಾರರು, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಅಂಟಿಸಿದ ಮೂಲ ಚಪ್ಪಟೆಗೊಂಡ ರಫ್ತು ಆಗಿತ್ತು, ಆದ್ದರಿಂದ ಅದರ ವಿವರಣೆಗಳಿಂದ ಕೋಡ್ ಮರುನಿರ್ಮಿಸಿ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "The Harness Is the Runtime Around the Model",
    "textKn": "ಮಾದರಿಯ ಸುತ್ತಲಿನ runtime ಎಂದರೆ harness",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why a Model Call Is Not an Agent",
    "headingKn": "ಮಾದರಿ ಕರೆ agent ಏಕೆ ಅಲ್ಲ",
    "bodyEn": "A model that writes \"inspect src/app.py\" has not inspected anything. A harness turns that intention into an operation: the model proposes a tool call, the harness resolves the name in a registry, runs the function and returns the result. With a plain client SDK you own that loop; an agent SDK ships it, together with hooks, subagents and a session store. This part builds the first piece: a Tool, a ToolRegistry and three file tools.",
    "bodyKn": "\"inspect src/app.py\" ಎಂದು ಬರೆಯುವ ಮಾದರಿ ಏನನ್ನೂ ಪರಿಶೀಲಿಸಿಲ್ಲ. Harness ಆ ಉದ್ದೇಶವನ್ನು ಕಾರ್ಯಾಚರಣೆಯಾಗಿ ಬದಲಿಸುತ್ತದೆ: ಮಾದರಿ tool ಕರೆಯನ್ನು ಪ್ರಸ್ತಾಪಿಸುತ್ತದೆ, harness registry ಯಲ್ಲಿ ಹೆಸರನ್ನು ಹುಡುಕುತ್ತದೆ, ಕಾರ್ಯವನ್ನು ಚಲಾಯಿಸಿ ಫಲಿತಾಂಶ ಮರಳಿಸುತ್ತದೆ. ಸಾಮಾನ್ಯ client SDK ಯಲ್ಲಿ ಆ ಚಕ್ರ ನಿಮ್ಮದು; agent SDK ಅದನ್ನು hooks, subagents ಮತ್ತು session store ಜೊತೆ ನೀಡುತ್ತದೆ. ಈ ಭಾಗ ಮೊದಲ ತುಣುಕನ್ನು ನಿರ್ಮಿಸುತ್ತದೆ: Tool, ToolRegistry ಮತ್ತು ಮೂರು ಫೈಲ್ tools."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Model, Harness and Tools",
    "headingKn": "ಮಾದರಿ, Harness ಮತ್ತು Tools",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">The harness is the runtime around the model</text><rect x=\"100\" y=\"26\" width=\"100\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"150\" y=\"41\" fill=\"#e2e8f0\" text-anchor=\"middle\">Model</text><text x=\"150\" y=\"53\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">proposes a tool call</text><rect x=\"100\" y=\"86\" width=\"100\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"150\" y=\"101\" fill=\"#e2e8f0\" text-anchor=\"middle\">Harness</text><text x=\"150\" y=\"113\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">registry, hooks, sessions</text><rect x=\"20\" y=\"140\" width=\"80\" height=\"30\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"60\" y=\"155\" fill=\"#e2e8f0\" text-anchor=\"middle\">read_file</text><rect x=\"110\" y=\"140\" width=\"80\" height=\"30\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"155\" fill=\"#e2e8f0\" text-anchor=\"middle\">write_file</text><rect x=\"200\" y=\"140\" width=\"80\" height=\"30\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"240\" y=\"155\" fill=\"#e2e8f0\" text-anchor=\"middle\">list_dir</text><path d=\"M150,60 V86 M130,120 L60,140 M150,120 V140 M170,120 L240,140\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">the model only asks; the harness decides and executes</text></svg>",
    "captionEn": "The model never touches the filesystem; the harness does.",
    "captionKn": "ಮಾದರಿ ಫೈಲ್‌ಸಿಸ್ಟಮ್ ಮುಟ್ಟುವುದಿಲ್ಲ; harness ಮುಟ್ಟುತ್ತದೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Client SDK versus agent SDK",
    "headingKn": "Client SDK ಮತ್ತು agent SDK ಹೋಲಿಕೆ",
    "headers": [
     "",
     "Client SDK",
     "Agent SDK"
    ],
    "rows": [
     [
      "You write",
      "the loop, dispatch, persistence",
      "the tools, policies and tasks"
     ],
     [
      "Tool results",
      "you append them",
      "the harness appends them"
     ],
     [
      "Cross-cutting rules",
      "scattered through your code",
      "hooks at named events"
     ]
    ]
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Building the Tool Layer",
    "textKn": "Tool ಪದರ ನಿರ್ಮಿಸುವುದು",
    "level": "H2"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "cas_1.py",
    "headingEn": "Tool, ToolRegistry and the file tools",
    "headingKn": "Tool, ToolRegistry ಮತ್ತು ಫೈಲ್ tools",
    "descEn": "A Tool is a name, a description and a function behind a run() boundary. The registry keeps one implementation per name and raises on duplicates. read_file, write_file and list_dir are the lesson's three built-ins; execute() here already has optional pre and post hook points.",
    "descKn": "Tool ಎಂದರೆ ಹೆಸರು, ವಿವರಣೆ ಮತ್ತು run() ಗಡಿಯ ಹಿಂದಿನ ಕಾರ್ಯ. Registry ಪ್ರತಿ ಹೆಸರಿಗೆ ಒಂದು ಅನುಷ್ಠಾನ ಇಡುತ್ತದೆ ಮತ್ತು ನಕಲು ಬಂದರೆ ದೋಷ ಎತ್ತುತ್ತದೆ. read_file, write_file ಮತ್ತು list_dir ಲೆಸನ್‌ನ ಮೂರು ಅಂತರ್ನಿರ್ಮಿತ tools; ಇಲ್ಲಿನ execute() ಈಗಾಗಲೇ ಐಚ್ಛಿಕ pre ಮತ್ತು post hook ಬಿಂದುಗಳನ್ನು ಹೊಂದಿದೆ.",
    "code": "@dataclass\nclass Tool:\n    name: str\n    description: str\n    fn: Callable[..., Any]\n\n    def run(self, **kwargs: Any) -> Any:\n        return self.fn(**kwargs)\n\n\nclass ToolRegistry:\n    def __init__(self, hooks=None):\n        self._tools = {}\n        self.hooks = hooks\n\n    def register(self, tool):\n        if tool.name in self._tools:\n            raise ValueError(f\"Tool already registered: {tool.name}\")\n        self._tools[tool.name] = tool\n\n    def get(self, name):\n        try:\n            return self._tools[name]\n        except KeyError as exc:\n            raise KeyError(f\"Unknown tool: {name}\") from exc\n\n    def list_tools(self):\n        return sorted(self._tools)\n\n    def execute(self, name, **kwargs):\n        if self.hooks is not None:\n            self.hooks(\"pre_tool_use\", tool=name, arguments=kwargs)\n        result = self.get(name).run(**kwargs)\n        if self.hooks is not None:\n            self.hooks(\"post_tool_use\", tool=name, result=result)\n        return result\n\n\ndef read_file(path):\n    return Path(path).read_text(encoding=\"utf-8\")\n\n\ndef write_file(path, content):\n    target = Path(path)\n    target.parent.mkdir(parents=True, exist_ok=True)\n    target.write_text(content, encoding=\"utf-8\")\n    return f\"Wrote {len(content)} characters to {target}\"\n\n\ndef list_dir(path=\".\"):\n    root = Path(path)\n    if not root.exists():\n        raise FileNotFoundError(path)\n    if not root.is_dir():\n        raise NotADirectoryError(path)\n    return sorted(item.name for item in root.iterdir())\n\n\ndef build_tool_registry(hooks=None):\n    registry = ToolRegistry(hooks)\n    registry.register(Tool(\"read_file\", \"Read a UTF-8 text file\", read_file))\n    registry.register(Tool(\"write_file\", \"Write a UTF-8 text file\", write_file))\n    registry.register(Tool(\"list_dir\", \"List entries in a directory\", list_dir))\n    return registry"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "cas_1.py",
    "headingEn": "sandboxed_write and the seven experiments",
    "headingKn": "sandboxed_write ಮತ್ತು ಏಳು ಪ್ರಯೋಗಗಳು",
    "descEn": "sandboxed_write is our own fix: resolve the target and refuse anything outside the root. main() runs in a temporary directory that is deleted afterwards, and tests the registry, the directory boundary, size and encoding, overwrites and where post hooks fire.",
    "descKn": "sandboxed_write ನಮ್ಮದೇ ಪರಿಹಾರ: ಗುರಿಯನ್ನು resolve ಮಾಡಿ root ಹೊರಗಿನದನ್ನು ನಿರಾಕರಿಸುತ್ತದೆ. main() ತಾತ್ಕಾಲಿಕ ಡೈರೆಕ್ಟರಿಯಲ್ಲಿ ಚಲಿಸುತ್ತದೆ (ನಂತರ ಅಳಿಸಲಾಗುತ್ತದೆ) ಮತ್ತು registry, ಡೈರೆಕ್ಟರಿ ಗಡಿ, ಗಾತ್ರ ಮತ್ತು encoding, ಮೇಲ್ಬರಹ ಹಾಗೂ post hooks ಎಲ್ಲಿ ಚಲಿಸುತ್ತವೆ ಎಂದು ಪರೀಕ್ಷಿಸುತ್ತದೆ.",
    "code": "def sandboxed_write(root):\n    \"\"\"Our fix: resolve the target and refuse anything that lands outside root.\"\"\"\n    base = Path(root).resolve()\n\n    def fn(path, content):\n        target = (base / path).resolve()\n        if not target.is_relative_to(base):\n            raise PermissionError(f\"path escapes sandbox: {path}\")\n        target.parent.mkdir(parents=True, exist_ok=True)\n        target.write_text(content, encoding=\"utf-8\")\n        return f\"Wrote {len(content)} characters\"\n    return fn\n\n\ndef section(t):\n    print(f\"\\n--- {t} ---\")\n\n\ndef attempt(label, fn):\n    try:\n        print(f\"{label}: {fn()}\")\n    except Exception as e:\n        print(f\"{label}: {type(e).__name__}: {e}\")\n\n\ndef main():\n    work = Path(tempfile.mkdtemp(prefix=\"cas1_\"))\n    sandbox = work / \"agent_demo\"\n    outside = work / \"outside.txt\"\n    old = Path.cwd()\n    os.chdir(sandbox.parent)\n    try:\n        reg = build_tool_registry()\n\n        section(\"1. The lesson's demo: write, read and list through the registry\")\n        print(reg.list_tools())\n        print(reg.execute(\"write_file\", path=\"agent_demo/test.txt\", content=\"Harness as a library\"))\n        print(reg.execute(\"read_file\", path=\"agent_demo/test.txt\"))\n        print(reg.execute(\"list_dir\", path=\"agent_demo\"))\n\n        section(\"2. Registry invariants\")\n        attempt(\"register a duplicate name\", lambda: reg.register(Tool(\"read_file\", \"again\", read_file)))\n        attempt(\"execute an unknown tool\", lambda: reg.execute(\"delete_file\", path=\"x\"))\n        attempt(\"wrong argument name\", lambda: reg.execute(\"read_file\", filename=\"x\"))\n        attempt(\"missing file\", lambda: reg.execute(\"read_file\", path=\"agent_demo/missing.txt\"))\n        print(\"every failure surfaces as a raw Python exception; the registry has no result envelope with ok/error\")\n\n        section(\"3. Genuinely checking: write_file and the directory boundary\")\n        attempt(\"write ../outside.txt\", lambda: reg.execute(\"write_file\", path=\"agent_demo/../outside.txt\", content=\"ESCAPED\"))\n        print(\"file now exists outside agent_demo:\", outside.exists(), \"| content:\", outside.read_text() if outside.exists() else None)\n        abs_target = work / \"absolute.txt\"\n        attempt(\"write an absolute path\", lambda: reg.execute(\"write_file\", path=str(abs_target), content=\"ABS\"))\n        print(\"absolute path written:\", abs_target.exists())\n        safe = ToolRegistry()\n        safe.register(Tool(\"write_file\", \"sandboxed write\", sandboxed_write(sandbox)))\n        outside.unlink(); abs_target.unlink()\n        attempt(\"sandboxed ../outside.txt\", lambda: safe.execute(\"write_file\", path=\"../outside.txt\", content=\"ESCAPED\"))\n        attempt(\"sandboxed absolute path\", lambda: safe.execute(\"write_file\", path=str(abs_target), content=\"ABS\"))\n        attempt(\"sandboxed normal path\", lambda: safe.execute(\"write_file\", path=\"notes/a.txt\", content=\"ok\"))\n        print(\"outside files exist after sandboxed attempts:\", outside.exists(), abs_target.exists())\n\n        section(\"4. Genuinely checking: reading files that are large or not text\")\n        big = sandbox / \"big.txt\"\n        big.write_text(\"line of log output\\n\" * 200_000, encoding=\"utf-8\")\n        text = reg.execute(\"read_file\", path=\"agent_demo/big.txt\")\n        print(f\"read_file returned {len(text):,} characters (~{len(text.split()):,} words) in one result; there is no size cap\")\n        (sandbox / \"image.bin\").write_bytes(bytes(range(256)))\n        attempt(\"read a binary file\", lambda: reg.execute(\"read_file\", path=\"agent_demo/image.bin\"))\n\n        section(\"5. Genuinely measuring: the success message counts characters, not bytes\")\n        for label, s in ((\"ASCII\", \"hello\"), (\"Kannada\", \"ನಮಸ್ಕಾರ\"), (\"emoji\", \"ok \\U0001F600\")):\n            msg = reg.execute(\"write_file\", path=\"agent_demo/enc.txt\", content=s)\n            print(f\"{label:8} {msg.split(' to ')[0]:30} bytes on disk: {(sandbox / 'enc.txt').stat().st_size}\")\n        print(\"'characters' is not the size on disk; a quota or budget keyed to the message would be wrong for non-ASCII text\")\n\n        section(\"6. Genuinely checking: write_file overwrites silently\")\n        reg.execute(\"write_file\", path=\"agent_demo/plan.txt\", content=\"v1: carefully written plan\")\n        reg.execute(\"write_file\", path=\"agent_demo/plan.txt\", content=\"v2\")\n        print(\"plan.txt now:\", repr(reg.execute(\"read_file\", path=\"agent_demo/plan.txt\")), \"| v1 is gone, no warning was returned\")\n\n        section(\"7. Genuinely checking: where a post-tool hook does and does not run\")\n        events = []\n        hooked = build_tool_registry(lambda event, **p: events.append((event, p[\"tool\"])))\n        hooked.execute(\"list_dir\", path=\"agent_demo\")\n        attempt(\"failing call\", lambda: hooked.execute(\"read_file\", path=\"agent_demo/missing.txt\"))\n        print(\"events:\", events)\n        print(\"pre_tool_use fired for the failing call but post_tool_use did not: an audit that depends on post would not record failures\")\n    finally:\n        os.chdir(old)\n        shutil.rmtree(work, ignore_errors=True)"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. The lesson's demo: write, read and list through the registry ---\n['list_dir', 'read_file', 'write_file']\nWrote 20 characters to agent_demo\\test.txt\nHarness as a library\n['test.txt']\n\n--- 2. Registry invariants ---\nregister a duplicate name: ValueError: Tool already registered: read_file\nexecute an unknown tool: KeyError: 'Unknown tool: delete_file'\nwrong argument name: TypeError: read_file() got an unexpected keyword argument 'filename'\nmissing file: FileNotFoundError: [Errno 2] No such file or directory: 'agent_demo\\\\missing.txt'\nevery failure surfaces as a raw Python exception; the registry has no result envelope with ok/error\n\n--- 3. Genuinely checking: write_file and the directory boundary ---\nwrite ../outside.txt: Wrote 7 characters to agent_demo\\..\\outside.txt\nfile now exists outside agent_demo: True | content: ESCAPED\nwrite an absolute path: Wrote 3 characters to C:\\Users\\samee\\AppData\\Local\\Temp\\cas1_wtzyoyol\\absolute.txt\nabsolute path written: True\nsandboxed ../outside.txt: PermissionError: path escapes sandbox: ../outside.txt\nsandboxed absolute path: PermissionError: path escapes sandbox: C:\\Users\\samee\\AppData\\Local\\Temp\\cas1_wtzyoyol\\absolute.txt\nsandboxed normal path: Wrote 2 characters\noutside files exist after sandboxed attempts: False False\n\n--- 4. Genuinely checking: reading files that are large or not text ---\nread_file returned 3,800,000 characters (~800,000 words) in one result; there is no size cap\nread a binary file: UnicodeDecodeError: 'utf-8' codec can't decode byte 0x80 in position 128: invalid start byte\n\n--- 5. Genuinely measuring: the success message counts characters, not bytes ---\nASCII    Wrote 5 characters             bytes on disk: 5\nKannada  Wrote 7 characters             bytes on disk: 21\nemoji    Wrote 4 characters             bytes on disk: 7\n'characters' is not the size on disk; a quota or budget keyed to the message would be wrong for non-ASCII text\n\n--- 6. Genuinely checking: write_file overwrites silently ---\nplan.txt now: 'v2' | v1 is gone, no warning was returned\n\n--- 7. Genuinely checking: where a post-tool hook does and does not run ---\nfailing call: FileNotFoundError: [Errno 2] No such file or directory: 'agent_demo\\\\missing.txt'\nevents: [('pre_tool_use', 'list_dir'), ('post_tool_use', 'list_dir'), ('pre_tool_use', 'read_file')]\npre_tool_use fired for the failing call but post_tool_use did not: an audit that depends on post would not record failures"
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
    "headingEn": "Genuinely Found: write_file Leaves the Directory It Was Meant For",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: write_file ತನಗೆ ಉದ್ದೇಶಿಸಿದ ಡೈರೆಕ್ಟರಿ ಬಿಟ್ಟು ಹೋಗುತ್ತದೆ",
    "bodyEn": "Section 3: with the demo's write_file, the path \"agent_demo/../outside.txt\" wrote a file outside agent_demo, and an absolute path to a different folder was written as well. Nothing in the registry checks a boundary. Our sandboxed_write resolves the path first and raised PermissionError for both, and no outside file existed afterwards. A tool name like \"write_file\" is not a permission; the boundary has to be coded or enforced by a hook.",
    "bodyKn": "ವಿಭಾಗ 3: ಡೆಮೊದ write_file ನೊಂದಿಗೆ \"agent_demo/../outside.txt\" ಮಾರ್ಗ agent_demo ಹೊರಗೆ ಫೈಲ್ ಬರೆಯಿತು, ಮತ್ತು ಬೇರೆ ಫೋಲ್ಡರ್‌ಗೆ ಸಂಪೂರ್ಣ ಮಾರ್ಗವನ್ನೂ ಬರೆಯಲಾಯಿತು. Registry ಯಲ್ಲಿ ಗಡಿ ಪರಿಶೀಲಿಸುವುದು ಏನೂ ಇಲ್ಲ. ನಮ್ಮ sandboxed_write ಮೊದಲು ಮಾರ್ಗವನ್ನು resolve ಮಾಡಿ ಎರಡಕ್ಕೂ PermissionError ಎತ್ತಿತು, ನಂತರ ಹೊರಗಿನ ಫೈಲ್ ಇರಲಿಲ್ಲ. \"write_file\" ಎಂಬ tool ಹೆಸರು ಅನುಮತಿ ಅಲ್ಲ; ಗಡಿಯನ್ನು ಕೋಡ್ ಮಾಡಬೇಕು ಅಥವಾ hook ಮೂಲಕ ಜಾರಿಗೊಳಿಸಬೇಕು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Unbounded Reads, Silent Overwrites and Character Counts",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಮಿತಿಯಿಲ್ಲದ ಓದುವಿಕೆ, ಮೌನ ಮೇಲ್ಬರಹ ಮತ್ತು ಅಕ್ಷರ ಎಣಿಕೆ",
    "bodyEn": "Section 4: read_file returned 3,800,000 characters (about 800,000 words) as a single result, with no cap; a real harness would have to truncate or page it before it reaches a model. A binary file raised UnicodeDecodeError. Section 5: the success message counts characters, not bytes: the 7-character Kannada word occupied 21 bytes and a 4-character string with an emoji occupied 7. Section 6: a second write replaced \"v1: carefully written plan\" with \"v2\" and returned no warning. Section 2: every error surfaces as a raw Python exception because the registry has no result envelope.",
    "bodyKn": "ವಿಭಾಗ 4: read_file 3,800,000 ಅಕ್ಷರಗಳನ್ನು (ಸುಮಾರು 800,000 ಪದಗಳು) ಮಿತಿಯಿಲ್ಲದೆ ಒಂದೇ ಫಲಿತಾಂಶವಾಗಿ ಮರಳಿಸಿತು; ನಿಜವಾದ harness ಮಾದರಿಗೆ ತಲುಪುವ ಮುನ್ನ ಅದನ್ನು ಕತ್ತರಿಸಬೇಕು ಅಥವಾ ಪುಟಗಳಾಗಿ ವಿಭಜಿಸಬೇಕು. ಬೈನರಿ ಫೈಲ್ UnicodeDecodeError ಎತ್ತಿತು. ವಿಭಾಗ 5: ಯಶಸ್ಸಿನ ಸಂದೇಶ ಅಕ್ಷರಗಳನ್ನು ಎಣಿಸುತ್ತದೆ, bytes ಅಲ್ಲ: 7 ಅಕ್ಷರಗಳ ಕನ್ನಡ ಪದ 21 bytes ಆಕ್ರಮಿಸಿತು ಮತ್ತು emoji ಇರುವ 4 ಅಕ್ಷರಗಳ ಸ್ಟ್ರಿಂಗ್ 7 bytes. ವಿಭಾಗ 6: ಎರಡನೇ ಬರವಣಿಗೆ \"v1: carefully written plan\" ಅನ್ನು \"v2\" ನಿಂದ ಬದಲಿಸಿತು ಮತ್ತು ಯಾವುದೇ ಎಚ್ಚರಿಕೆ ನೀಡಲಿಲ್ಲ. ವಿಭಾಗ 2: registry ಯಲ್ಲಿ ಫಲಿತಾಂಶ ಹೊದಿಕೆ ಇಲ್ಲದ ಕಾರಣ ಪ್ರತಿ ದೋಷವೂ ಕಚ್ಚಾ Python exception ಆಗಿ ಹೊರಬರುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: A post Hook Does Not See Failures",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: post hook ವೈಫಲ್ಯಗಳನ್ನು ನೋಡುವುದಿಲ್ಲ",
    "bodyEn": "Section 7: list_dir produced pre_tool_use and post_tool_use events. The failing read_file produced only pre_tool_use, because the exception left execute() before the post hook was reached. An audit log built on post_tool_use would silently omit every failed call, which is often exactly what an investigation needs.",
    "bodyKn": "ವಿಭಾಗ 7: list_dir pre_tool_use ಮತ್ತು post_tool_use ಘಟನೆಗಳನ್ನು ನೀಡಿತು. ವಿಫಲವಾದ read_file ಕೇವಲ pre_tool_use ನೀಡಿತು, ಏಕೆಂದರೆ post hook ತಲುಪುವ ಮುನ್ನ exception execute() ನಿಂದ ಹೊರಬಂದಿತು. post_tool_use ಮೇಲೆ ನಿರ್ಮಿಸಿದ audit ಲಾಗ್ ಪ್ರತಿ ವಿಫಲ ಕರೆಯನ್ನೂ ಮೌನವಾಗಿ ಬಿಡುತ್ತದೆ, ತನಿಖೆಗೆ ಬೇಕಾದದ್ದು ಸಾಮಾನ್ಯವಾಗಿ ಅದೇ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "Tools give the model reach and the registry gives the harness control: one place to resolve names, reject duplicates and add checks. Because a tool is the boundary between a language model and the real world, the quality of its argument checks and error reporting matters more than its description text.",
    "bodyKn": "Tools ಮಾದರಿಗೆ ವ್ಯಾಪ್ತಿ ನೀಡುತ್ತವೆ ಮತ್ತು registry harness ಗೆ ನಿಯಂತ್ರಣ ನೀಡುತ್ತದೆ: ಹೆಸರುಗಳನ್ನು ಹುಡುಕಲು, ನಕಲುಗಳನ್ನು ತಿರಸ್ಕರಿಸಲು ಮತ್ತು ಪರಿಶೀಲನೆಗಳನ್ನು ಸೇರಿಸಲು ಒಂದೇ ಸ್ಥಳ. Tool ಭಾಷಾ ಮಾದರಿ ಮತ್ತು ನಿಜ ಪ್ರಪಂಚದ ನಡುವಿನ ಗಡಿಯಾದ ಕಾರಣ ಅದರ ವಿವರಣಾ ಪಠ್ಯಕ್ಕಿಂತ ಆರ್ಗ್ಯುಮೆಂಟ್ ಪರಿಶೀಲನೆ ಮತ್ತು ದೋಷ ವರದಿಯ ಗುಣಮಟ್ಟ ಹೆಚ್ಚು ಮುಖ್ಯ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"a registry of named tools is a permission system.\" The registry only resolves names; the demo write_file wrote outside its folder until a path check was added.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಹೆಸರಿನ tools ನ registry ಅನುಮತಿ ವ್ಯವಸ್ಥೆ.\" Registry ಕೇವಲ ಹೆಸರುಗಳನ್ನು ಹುಡುಕುತ್ತದೆ; ಮಾರ್ಗ ಪರಿಶೀಲನೆ ಸೇರಿಸುವವರೆಗೆ ಡೆಮೊ write_file ತನ್ನ ಫೋಲ್ಡರ್ ಹೊರಗೆ ಬರೆಯಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Harness: the runtime around the model. Tool: name, description and function. ToolRegistry: name to Tool lookup. Hook point: a named event in execute(). Sandbox: a root the tool must stay inside. Result envelope: a uniform ok/error wrapper.",
    "bodyKn": "Harness: ಮಾದರಿಯ ಸುತ್ತಲಿನ runtime. Tool: ಹೆಸರು, ವಿವರಣೆ ಮತ್ತು ಕಾರ್ಯ. ToolRegistry: ಹೆಸರಿನಿಂದ Tool ಹುಡುಕಾಟ. Hook point: execute() ಯಲ್ಲಿನ ಹೆಸರಿನ ಘಟನೆ. Sandbox: tool ಒಳಗೇ ಇರಬೇಕಾದ root. Result envelope: ಏಕರೂಪದ ok/error ಹೊದಿಕೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) The harness executes what the model proposes. 2) The registry rejects duplicate names and unknown tools. 3) write_file escaped its directory through \"..\" and an absolute path. 4) read_file had no size cap (3.8M characters). 5) The success message counts characters, not bytes. 6) A post hook never sees failed calls.",
    "bodyKn": "1) ಮಾದರಿ ಪ್ರಸ್ತಾಪಿಸಿದ್ದನ್ನು harness ಕಾರ್ಯಗತಗೊಳಿಸುತ್ತದೆ. 2) Registry ನಕಲು ಹೆಸರುಗಳನ್ನು ಮತ್ತು ಅಜ್ಞಾತ tools ಅನ್ನು ತಿರಸ್ಕರಿಸುತ್ತದೆ. 3) write_file \"..\" ಮತ್ತು ಸಂಪೂರ್ಣ ಮಾರ್ಗದ ಮೂಲಕ ತನ್ನ ಡೈರೆಕ್ಟರಿ ಬಿಟ್ಟಿತು. 4) read_file ಗೆ ಗಾತ್ರ ಮಿತಿ ಇರಲಿಲ್ಲ (3.8M ಅಕ್ಷರಗಳು). 5) ಯಶಸ್ಸಿನ ಸಂದೇಶ ಅಕ್ಷರಗಳನ್ನು ಎಣಿಸುತ್ತದೆ, bytes ಅಲ್ಲ. 6) post hook ವಿಫಲ ಕರೆಗಳನ್ನು ಎಂದೂ ನೋಡುವುದಿಲ್ಲ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What does the harness do that a bare model call does not?",
      "qKn": "ಬರಿಯ ಮಾದರಿ ಕರೆ ಮಾಡದ್ದನ್ನು harness ಏನು ಮಾಡುತ್ತದೆ?",
      "opts": [
       "It makes the model smarter",
       "It executes the proposed tool call and returns the result",
       "It stores the weights",
       "It removes the need for tools"
      ],
      "optsKn": [
       "ಮಾದರಿಯನ್ನು ಬುದ್ಧಿವಂತವಾಗಿಸುತ್ತದೆ",
       "ಪ್ರಸ್ತಾಪಿಸಿದ tool ಕರೆಯನ್ನು ಕಾರ್ಯಗತಗೊಳಿಸಿ ಫಲಿತಾಂಶ ಮರಳಿಸುತ್ತದೆ",
       "ತೂಕಗಳನ್ನು ಸಂಗ್ರಹಿಸುತ್ತದೆ",
       "tools ಅಗತ್ಯವನ್ನು ತೆಗೆಯುತ್ತದೆ"
      ],
      "correct": 1
     },
     {
      "q": "What happened to write_file(\"agent_demo/../outside.txt\")?",
      "qKn": "write_file(\"agent_demo/../outside.txt\") ಗೆ ಏನಾಯಿತು?",
      "opts": [
       "It was rejected",
       "It wrote a file outside agent_demo",
       "It wrote inside agent_demo",
       "It raised KeyError"
      ],
      "optsKn": [
       "ತಿರಸ್ಕೃತವಾಯಿತು",
       "agent_demo ಹೊರಗೆ ಫೈಲ್ ಬರೆಯಿತು",
       "agent_demo ಒಳಗೆ ಬರೆಯಿತು",
       "KeyError ಎತ್ತಿತು"
      ],
      "correct": 1
     },
     {
      "q": "Why did the 7-character Kannada word report \"7 characters\" but occupy 21 bytes?",
      "qKn": "7 ಅಕ್ಷರಗಳ ಕನ್ನಡ ಪದ \"7 characters\" ಎಂದು ವರದಿ ಮಾಡಿ 21 bytes ಏಕೆ ಆಕ್ರಮಿಸಿತು?",
      "opts": [
       "The file was compressed",
       "The message counts characters while UTF-8 uses several bytes per Kannada character",
       "The registry doubled it",
       "It was a bug in Path"
      ],
      "optsKn": [
       "ಫೈಲ್ ಸಂಕುಚಿತವಾಗಿತ್ತು",
       "ಸಂದೇಶ ಅಕ್ಷರಗಳನ್ನು ಎಣಿಸುತ್ತದೆ, UTF-8 ಪ್ರತಿ ಕನ್ನಡ ಅಕ್ಷರಕ್ಕೆ ಹಲವು bytes ಬಳಸುತ್ತದೆ",
       "Registry ಅದನ್ನು ದ್ವಿಗುಣಗೊಳಿಸಿತು",
       "ಅದು Path ನ ದೋಷ"
      ],
      "correct": 1
     },
     {
      "q": "Which events did the failing read_file produce?",
      "qKn": "ವಿಫಲ read_file ಯಾವ ಘಟನೆಗಳನ್ನು ನೀಡಿತು?",
      "opts": [
       "pre and post",
       "pre only",
       "post only",
       "none"
      ],
      "optsKn": [
       "pre ಮತ್ತು post",
       "pre ಮಾತ್ರ",
       "post ಮಾತ್ರ",
       "ಯಾವುದೂ ಇಲ್ಲ"
      ],
      "correct": 1
     },
     {
      "q": "What does sandboxed_write do differently?",
      "qKn": "sandboxed_write ಏನು ಬೇರೆ ಮಾಡುತ್ತದೆ?",
      "opts": [
       "It resolves the path and refuses targets outside the root",
       "It encrypts the file",
       "It ignores the path",
       "It uses a thread"
      ],
      "optsKn": [
       "ಮಾರ್ಗ resolve ಮಾಡಿ root ಹೊರಗಿನ ಗುರಿಗಳನ್ನು ನಿರಾಕರಿಸುತ್ತದೆ",
       "ಫೈಲ್ ಎನ್‌ಕ್ರಿಪ್ಟ್ ಮಾಡುತ್ತದೆ",
       "ಮಾರ್ಗ ನಿರ್ಲಕ್ಷಿಸುತ್ತದೆ",
       "thread ಬಳಸುತ್ತದೆ"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
