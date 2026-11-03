module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6266020ed05b321559",
 "order": 2,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Agent Failure Modes: Detect, Ground and Contain (Part 3 of 3) — Gates, Postconditions and Containment",
 "titleKn": "Agent ವೈಫಲ್ಯ ವಿಧಗಳು: ಪತ್ತೆ, ಆಧಾರ ಮತ್ತು ನಿಯಂತ್ರಣ (ಭಾಗ 3 / 3) — Gates, Postconditions ಮತ್ತು ನಿಯಂತ್ರಣ",
 "desc": "Build a pre-execution gate, a postcondition check, halt-on-failure, bounded retries with idempotency, checkpoint resume and detector metrics, and run each against a simulated environment.",
 "descKn": "ಪೂರ್ವ-ಕಾರ್ಯಗತ gate, postcondition ಪರಿಶೀಲನೆ, ವೈಫಲ್ಯದಲ್ಲಿ ನಿಲ್ಲಿಸುವಿಕೆ, idempotency ಜೊತೆ ಮಿತಿ ಮರುಪ್ರಯತ್ನ, checkpoint ಮುಂದುವರಿಕೆ ಮತ್ತು detector metrics ನಿರ್ಮಿಸಿ, ಪ್ರತಿಯೊಂದನ್ನೂ ಅನುಕರಿತ ಪರಿಸರದ ವಿರುದ್ಧ ಚಲಾಯಿಸಿ.",
 "objectives": [
  "Gate a proposed action before it runs.",
  "Verify against the environment, not the response.",
  "Classify retries and use idempotency keys.",
  "Resume from a trusted checkpoint.",
  "Compute precision, recall and F1 and read drift."
 ],
 "objectivesKn": [
  "ಪ್ರಸ್ತಾಪಿತ ಕ್ರಿಯೆಯನ್ನು ಓಡುವ ಮುನ್ನ gate ಮಾಡಿ.",
  "ಪ್ರತಿಕ್ರಿಯೆ ಅಲ್ಲ, ಪರಿಸರದ ವಿರುದ್ಧ ಪರಿಶೀಲಿಸಿ.",
  "ಮರುಪ್ರಯತ್ನಗಳನ್ನು ವರ್ಗೀಕರಿಸಿ ಮತ್ತು idempotency keys ಬಳಸಿ.",
  "ವಿಶ್ವಾಸಾರ್ಹ checkpoint ನಿಂದ ಮುಂದುವರಿಸಿ.",
  "Precision, recall, F1 ಲೆಕ್ಕಿಸಿ ಮತ್ತು drift ಓದಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Agent Failure Modes: Detect, Ground and Contain (Part 3 of 3)",
    "textKn": "Agent ವೈಫಲ್ಯ ವಿಧಗಳು: ಪತ್ತೆ, ಆಧಾರ ಮತ್ತು ನಿಯಂತ್ರಣ (ಭಾಗ 3 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 3 of 3: pre-execution gates, postcondition checks, retries, idempotency, checkpoints and detector metrics. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind agent failure modes (detection, grounding and containment), not the real software, and every trace, tool and environment is hand-written or simulated with assumed rates, so no language model and no real agent is measured, so no real LLM behaviour is measured. The pasted Part 3 was cut off by a size limit before its program finished, so the gates, containment and metrics here are rebuilt from the part that arrived and the earlier parts. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 3ನೆಯದು: ಪೂರ್ವ-ಕಾರ್ಯಗತ gates, postcondition ಪರಿಶೀಲನೆ, ಮರುಪ್ರಯತ್ನ, idempotency, checkpoints ಮತ್ತು detector metrics. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು agent ವೈಫಲ್ಯ ವಿಧಗಳು (ಪತ್ತೆ, ಆಧಾರ ಮತ್ತು ನಿಯಂತ್ರಣ) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಪ್ರತಿ trace, tool ಮತ್ತು ಪರಿಸರ ಕೈಬರಹ ಅಥವಾ ಊಹಿಸಿದ ದರಗಳೊಂದಿಗೆ ಅನುಕರಿಸಲಾಗಿದೆ, ಆದ್ದರಿಂದ ಯಾವುದೇ ಭಾಷಾ ಮಾದರಿ ಮತ್ತು ನಿಜ agent ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಅಂಟಿಸಿದ ಭಾಗ 3 ತನ್ನ ಪ್ರೋಗ್ರಾಂ ಮುಗಿಯುವ ಮುನ್ನ ಗಾತ್ರ ಮಿತಿಯಿಂದ ಕತ್ತರಿಸಲ್ಪಟ್ಟಿತ್ತು, ಆದ್ದರಿಂದ ಇಲ್ಲಿನ gates, ನಿಯಂತ್ರಣ ಮತ್ತು metrics ಬಂದ ಭಾಗ ಮತ್ತು ಹಿಂದಿನ ಭಾಗಗಳಿಂದ ಮರುನಿರ್ಮಿಸಲಾಗಿದೆ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "From Detecting to Preventing",
    "textKn": "ಪತ್ತೆಯಿಂದ ತಡೆಗಟ್ಟುವಿಕೆಗೆ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Gates Before, Evidence After",
    "headingKn": "ಮೊದಲು Gates, ನಂತರ ಸಾಕ್ಷ್ಯ",
    "bodyEn": "Detectors read a finished trace. This part moves the checks in front of the action. A gate inspects each proposed call against the tool registry, the task scope, grounded arguments, constraints, the workflow order and an approval rule, and blocks it before anything runs. After execution a postcondition check looks at the simulated environment, not at the 200 the tool returned. A failed step halts the run, retries are bounded and classified, idempotency keys stop duplicate sends, and a checkpoint resumes from the last trusted step.",
    "bodyKn": "Detectors ಮುಗಿದ trace ಓದುತ್ತವೆ. ಈ ಭಾಗ ಪರಿಶೀಲನೆಗಳನ್ನು ಕ್ರಿಯೆಯ ಮುಂದೆ ಸರಿಸುತ್ತದೆ. Gate ಪ್ರತಿ ಪ್ರಸ್ತಾಪಿತ ಕರೆಯನ್ನು tool registry, ಕಾರ್ಯ ವ್ಯಾಪ್ತಿ, ಆಧಾರಿತ ಆರ್ಗ್ಯುಮೆಂಟ್‌ಗಳು, ನಿರ್ಬಂಧಗಳು, workflow ಕ್ರಮ ಮತ್ತು ಅನುಮೋದನೆ ನಿಯಮದ ವಿರುದ್ಧ ಪರಿಶೀಲಿಸಿ ಏನೂ ಓಡುವ ಮುನ್ನ ತಡೆಯುತ್ತದೆ. ಕಾರ್ಯಗತದ ನಂತರ postcondition ಪರಿಶೀಲನೆ tool ಮರಳಿಸಿದ 200 ಅನ್ನಲ್ಲ, ಅನುಕರಿತ ಪರಿಸರವನ್ನು ನೋಡುತ್ತದೆ. ವಿಫಲ ಹಂತ ಓಟವನ್ನು ನಿಲ್ಲಿಸುತ್ತದೆ, ಮರುಪ್ರಯತ್ನಗಳು ಮಿತಿ ಮತ್ತು ವರ್ಗೀಕರಣ ಹೊಂದಿವೆ, idempotency keys ನಕಲು send ತಡೆಯುತ್ತವೆ, ಮತ್ತು checkpoint ಕೊನೆಯ ವಿಶ್ವಾಸಾರ್ಹ ಹಂತದಿಂದ ಮುಂದುವರಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Gate, Execute, Verify, Contain",
    "headingKn": "Gate, ಕಾರ್ಯಗತ, ಪರಿಶೀಲನೆ, ನಿಯಂತ್ರಣ",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">Gate, execute, verify, contain</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">pre-gate</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">tool, scope, args, order</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">execute</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">then check the world</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">halt</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">stop after a failure</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">checkpoint</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">resume from trusted step</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">a 200 is a claim, the environment is the evidence</text></svg>",
    "captionEn": "The environment is the evidence; the tool response is a claim.",
    "captionKn": "ಪರಿಸರ ಸಾಕ್ಷ್ಯ; tool ಪ್ರತಿಕ್ರಿಯೆ ಒಂದು ಹೇಳಿಕೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Trust states and gate decisions",
    "headingKn": "ನಂಬಿಕೆ ಸ್ಥಿತಿಗಳು ಮತ್ತು gate ತೀರ್ಮಾನಗಳು",
    "headers": [
     "Item",
     "Values",
     "Meaning"
    ],
    "rows": [
     [
      "Trust",
      "unverified, trusted, failed, tainted",
      "whether a step result may be built on"
     ],
     [
      "Decision",
      "allow, block, require_approval",
      "what the gate does with a proposal"
     ],
     [
      "Risk",
      "low, medium, high, critical",
      "critical tools need an approval before running"
     ]
    ]
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "The Harness and Its Experiments",
    "textKn": "Harness ಮತ್ತು ಅದರ ಪ್ರಯೋಗಗಳು",
    "level": "H2"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "fm_3.py",
    "headingEn": "The pre-execution gate",
    "headingKn": "ಪೂರ್ವ-ಕಾರ್ಯಗತ gate",
    "descEn": "gate() returns a Decision and a list of findings. It blocks an unregistered tool, a tool outside the allowed set, a write or send under a read-only constraint, an argument not in its grounded set, a repeat without a retry flag, and a step taken before its predecessors. Approval is consulted only when no earlier finding exists.",
    "descKn": "gate() Decision ಮತ್ತು findings ಪಟ್ಟಿ ಮರಳಿಸುತ್ತದೆ. ನೋಂದಣಿಯಾಗದ tool, ಅನುಮತಿಸಿದ ಸೆಟ್ ಹೊರಗಿನ tool, ಓದುವ-ಮಾತ್ರ ನಿರ್ಬಂಧದಲ್ಲಿನ write ಅಥವಾ send, ತನ್ನ ಆಧಾರಿತ ಸೆಟ್‌ನಲ್ಲಿಲ್ಲದ ಆರ್ಗ್ಯುಮೆಂಟ್, retry ಫ್ಲ್ಯಾಗ್ ಇಲ್ಲದ ಪುನರಾವರ್ತನೆ, ಮತ್ತು ಹಿಂದಿನ ಹಂತಗಳ ಮುನ್ನ ತೆಗೆದುಕೊಂಡ ಹಂತವನ್ನು ತಡೆಯುತ್ತದೆ. ಹಿಂದಿನ finding ಇಲ್ಲದಿದ್ದಾಗ ಮಾತ್ರ ಅನುಮೋದನೆ ಪರಿಶೀಲಿಸಲಾಗುತ್ತದೆ.",
    "code": "def gate(rt, p):\n    spec = REGISTRY.get(p.tool)\n    if spec is None:\n        return Decision.BLOCK, [Finding(\"hallucinated_action\", f\"{p.tool} is not registered\")]\n    out = []\n    if p.tool not in rt.allowed_tools:\n        out.append(Finding(\"scope_creep\", f\"{p.tool} is not allowed for this task\"))\n    if rt.constraints.get(\"read_only\") and spec.category in (\"write\", \"send\", \"destructive\"):\n        out.append(Finding(\"constraint_violation\", \"read-only task\"))\n    for k, v in p.args.items():\n        ok = rt.grounded.get(k)\n        if ok is not None and v not in ok:\n            out.append(Finding(\"ungrounded_argument\", f\"{k}={v!r} is not grounded\"))\n    prior = [h for h in rt.history if h[0] == p.tool and h[1] == p.args]\n    if prior and not p.retry:\n        out.append(Finding(\"redundancy\", f\"{p.tool} repeated\"))\n    done = set(rt.completed)\n    needed = [s for s in rt.required_steps[:rt.required_steps.index(p.step)]] if p.step in rt.required_steps else []\n    missing = [s for s in needed if s not in done]\n    if missing:\n        out.append(Finding(\"workflow_disorder\", f\"{p.step} before {missing}\"))\n    if out:\n        return Decision.BLOCK, out\n    if spec.risk is Risk.CRITICAL and p.tool not in rt.approvals:\n        return Decision.REQUIRE_APPROVAL, [Finding(\"approval_required\", f\"{p.tool} is critical\")]\n    return Decision.ALLOW, []"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "fm_3.py",
    "headingEn": "run_action: gate, execute, record, verify",
    "headingKn": "run_action: gate, ಕಾರ್ಯಗತ, ದಾಖಲು, ಪರಿಶೀಲನೆ",
    "descEn": "run_action stops if the run is halted, gates the proposal, executes it, records the call and marks a failed result as FAILED and halts. For tools that require verification it checks the environment and only then marks the step TRUSTED and completed. verify_task_completion reports required steps that never completed.",
    "descKn": "ಓಟ ನಿಂತಿದ್ದರೆ run_action ನಿಲ್ಲುತ್ತದೆ, ಪ್ರಸ್ತಾಪವನ್ನು gate ಮಾಡುತ್ತದೆ, ಕಾರ್ಯಗತಗೊಳಿಸುತ್ತದೆ, ಕರೆ ದಾಖಲಿಸುತ್ತದೆ ಮತ್ತು ವಿಫಲ ಫಲಿತಾಂಶವನ್ನು FAILED ಎಂದು ಗುರುತಿಸಿ ನಿಲ್ಲಿಸುತ್ತದೆ. ಪರಿಶೀಲನೆ ಬೇಕಾದ tools ಗೆ ಪರಿಸರ ಪರಿಶೀಲಿಸಿ ನಂತರ ಮಾತ್ರ ಹಂತವನ್ನು TRUSTED ಮತ್ತು ಪೂರ್ಣ ಎಂದು ಗುರುತಿಸುತ್ತದೆ. verify_task_completion ಎಂದೂ ಪೂರ್ಣಗೊಳ್ಳದ ಅಗತ್ಯ ಹಂತಗಳನ್ನು ವರದಿ ಮಾಡುತ್ತದೆ.",
    "code": "def verify_postcondition(rt, p):\n    env, path = rt.env, p.args.get(\"path\", \"\")\n    return {\"create_file\": lambda: path in env[\"files\"], \"upload_file\": lambda: path in env[\"uploads\"],\n            \"notify_user\": lambda: p.args.get(\"text\", \"\") in env[\"notifications\"], \"delete_file\": lambda: path not in env[\"files\"]}.get(p.tool, lambda: True)()\n\n\ndef run_action(rt, p, **kw):\n    if rt.halted:\n        return \"halted\"\n    decision, findings = gate(rt, p)\n    if decision is not Decision.ALLOW:\n        rt.failure_labels += [f.code for f in findings]\n        rt.halted = True\n        return decision.value\n    res = execute_tool(rt, p, **kw)\n    rt.history.append((p.tool, p.args))\n    if not res.success:\n        rt.failure_labels.append(\"tool_failure\")\n        rt.trust[p.step] = Trust.FAILED\n        rt.halted = True\n        return f\"tool_failure:{res.status}\"\n    spec = REGISTRY[p.tool]\n    rt.trust[p.step] = Trust.UNVERIFIED\n    if spec.requires_verification:\n        if rt.verify_enabled and not verify_postcondition(rt, p):\n            rt.failure_labels.append(\"postcondition_failed\")\n            rt.trust[p.step] = Trust.FAILED\n            rt.halted = True\n            return \"postcondition_failed\"\n        rt.trust[p.step] = Trust.TRUSTED if rt.verify_enabled else Trust.UNVERIFIED\n    else:\n        rt.trust[p.step] = Trust.TRUSTED\n    rt.completed.append(p.step)\n    return \"ok\"\n\n\ndef verify_task_completion(rt):\n    missing = [s for s in rt.required_steps if s not in rt.completed]\n    if missing:\n        rt.failure_labels += [\"omission\"] * len(missing)\n    return missing"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Three runs with executable assertions ---\n  create  -> ok\n  upload  -> ok\n  notify  -> ok\nPASS safe run: three steps verified, nothing halted\n  create  -> tool_failure:400\n  upload  -> halted\n  notify  -> halted\nPASS cascade run: the failed create halted the run; uploads set() notifications [] executions {'create_file': 1}\n  read -> ok\n  delete -> block | labels ['scope_creep', 'constraint_violation']\nPASS scope run: delete_file was proposed, blocked and never executed (execution count 0 )\n\n--- 2. Genuinely checking: a tool that returns 200 without changing state ---\npostcondition checks off: result=ok                   file exists=False step trust=unverified completed steps=['create']\npostcondition checks on : result=postcondition_failed file exists=False step trust=failed completed steps=[]\nwithout the check the run recorded 'create' as complete although no file existed; with it, the 200 was not trusted and the run halted\n\n--- 3. Genuinely checking: gate decisions on single proposals ---\ngrounded create          allow             []\nfabricated path          block             ['ungrounded_argument']\nunknown tool             block             ['hallucinated_action']\nupload before create     block             ['workflow_disorder']\ndelete without approval  require_approval  ['approval_required']\nafter approving the TOOL 'delete_file', a delete of a different, ungrounded path -> block\napproving the tool did not let the ungrounded path through: the argument checks run before the approval check, so an approval only matters once every other gate has passed; an approval stored per tool name (as here) would still cover every grounded path of that tool, which is broader than approving one specific action\n\n--- 4. Genuinely measuring: retries, transient versus permanent failures and idempotency ---\ntransient 503 twice    -> success              attempts=3 backoff delays=[0.01, 0.02]\ntransient 503 always   -> exhausted            attempts=3 backoff delays=[0.01, 0.02]\npermanent 400          -> gave up (permanent)  attempts=1 backoff delays=[]\nretrying a non-idempotent send three times, idempotency key not used: messages actually sent = 3\nretrying a non-idempotent send three times, idempotency key used: messages actually sent = 1\nthe first send had already succeeded when its response was lost, so blind retries produced three messages; remembering the operation key left one\n\n--- 5. Genuinely measuring: resuming from the last trusted checkpoint ---\nfirst run: ['understand', 'gather', 'analyze'] | crash at draft\nafter resume the steps executed in total: ['understand', 'gather', 'analyze', 'draft', 'validate'] | 'understand' ran 1 time(s)\nrestarting from zero instead: steps executed in total 8 against 5 with the checkpoint\n\n--- 6. Genuinely computing: detector precision, recall and F1, and trace versus event counts ---\nTP=2 FP=1 FN=1 -> precision 0.667 recall 0.667 F1 0.667\none trace repeating the same bad action 10 times: event-level count 10, trace-level affected traces 1\nseverity-weighted score: 100 low failures = 100, 5 critical failures = 250; the version with fewer failures scores worse\n\n--- 7. Genuinely measuring: drift needs both an absolute and a relative view ---\ncontext_loss  baseline 2.0% current 7.0% change +5.0 points (3.5x) alert at +2 points: True\ntool_misuse   baseline 1.0% current 1.5% change +0.5 points (1.5x) alert at +2 points: False\nscope_creep   baseline 0.5% current 0.8% change +0.3 points (1.6x) alert at +2 points: False\ncascade       baseline 0.5% current 0.6% change +0.1 points (1.2x) alert at +2 points: False\na rare mode rising from 0.1% to 0.5% is 5x but only +0.4 points and would never trip a 2-point absolute alert, so a relative rule is needed for rare critical modes\nwith 100 traces per window and no real change, a 3 percent rate showed between 0.0% and 7.0% (95 percent of windows); the baseline figures above are assumed"
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
    "headingEn": "Genuinely Found: Gates Block Before Execution; Postconditions Catch a Lying 200",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Gates ಕಾರ್ಯಗತಕ್ಕೆ ಮುನ್ನ ತಡೆಯುತ್ತವೆ; Postconditions ಸುಳ್ಳು 200 ಹಿಡಿಯುತ್ತವೆ",
    "bodyEn": "Section 1: the safe run completed all three steps; in the cascade run create_file returned 400, the run halted, upload and notify never ran (uploads empty, notifications empty, only create_file executed once); in the scope run delete_file was blocked with scope_creep and constraint_violation and its execution count stayed 0. Section 2: a create_file that returned 200 without writing anything was recorded as complete with verification off (the file did not exist) and, with it on, the step was marked failed and the run halted. Section 3: a grounded create was allowed; a fabricated path, an unknown tool and an upload before create were each blocked with the matching label; a delete without approval returned require_approval.",
    "bodyKn": "ವಿಭಾಗ 1: ಸುರಕ್ಷಿತ ಓಟ ಮೂರೂ ಹಂತ ಪೂರ್ಣಗೊಳಿಸಿತು; cascade ಓಟದಲ್ಲಿ create_file 400 ಮರಳಿಸಿತು, ಓಟ ನಿಂತಿತು, upload ಮತ್ತು notify ಎಂದೂ ಓಡಲಿಲ್ಲ (uploads ಖಾಲಿ, notifications ಖಾಲಿ, create_file ಒಮ್ಮೆ ಮಾತ್ರ ಕಾರ್ಯಗತ); scope ಓಟದಲ್ಲಿ delete_file scope_creep ಮತ್ತು constraint_violation ಜೊತೆ ತಡೆಯಲ್ಪಟ್ಟಿತು ಮತ್ತು ಅದರ ಕಾರ್ಯಗತ ಎಣಿಕೆ 0 ಆಗಿಯೇ ಉಳಿಯಿತು. ವಿಭಾಗ 2: ಏನನ್ನೂ ಬರೆಯದೆ 200 ಮರಳಿಸಿದ create_file ಪರಿಶೀಲನೆ ಆಫ್ ಇದ್ದಾಗ ಪೂರ್ಣ ಎಂದು ದಾಖಲಾಯಿತು (ಫೈಲ್ ಇರಲಿಲ್ಲ) ಮತ್ತು ಆನ್ ಇದ್ದಾಗ ಹಂತ ವಿಫಲ ಎಂದು ಗುರುತಾಗಿ ಓಟ ನಿಂತಿತು. ವಿಭಾಗ 3: ಆಧಾರಿತ create ಅನುಮತಿಸಲ್ಪಟ್ಟಿತು; ಕಲ್ಪಿತ path, ಅಜ್ಞಾತ tool ಮತ್ತು create ಮುನ್ನ upload ಪ್ರತಿಯೊಂದೂ ಹೊಂದುವ ಲೇಬಲ್‌ನೊಂದಿಗೆ ತಡೆಯಲ್ಪಟ್ಟವು; ಅನುಮೋದನೆ ಇಲ್ಲದ delete require_approval ಮರಳಿಸಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Approval Order, Retries and Idempotency",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಅನುಮೋದನೆ ಕ್ರಮ, ಮರುಪ್ರಯತ್ನ ಮತ್ತು Idempotency",
    "bodyEn": "Section 3 (after approving the tool delete_file): a delete of an ungrounded path was still blocked, because the argument checks run before the approval check; an approval stored per tool name would still cover every grounded path of that tool. An earlier draft of this printout said the grounding check was bypassed, and the real output showed the opposite, so the text was corrected. Section 4: a transient 503 twice then success took 3 attempts with delays 0.01 and 0.02 seconds, a 503 every time was exhausted after 3, a permanent 400 gave up after 1; a non-idempotent send retried three times without a key sent 3 messages and with an idempotency key sent 1.",
    "bodyKn": "ವಿಭಾಗ 3 (tool delete_file ಅನುಮೋದಿಸಿದ ನಂತರ): ಆಧಾರರಹಿತ path ನ delete ಇನ್ನೂ ತಡೆಯಲ್ಪಟ್ಟಿತು, ಏಕೆಂದರೆ ಆರ್ಗ್ಯುಮೆಂಟ್ ಪರಿಶೀಲನೆಗಳು ಅನುಮೋದನೆ ಪರಿಶೀಲನೆಗೆ ಮುನ್ನ ಓಡುತ್ತವೆ; tool ಹೆಸರಿಗೆ ಸಂಗ್ರಹಿಸಿದ ಅನುಮೋದನೆ ಆ tool ನ ಪ್ರತಿ ಆಧಾರಿತ path ಅನ್ನೂ ಆವರಿಸುತ್ತದೆ. ಈ printout ನ ಹಿಂದಿನ ಕರಡು ಆಧಾರ ಪರಿಶೀಲನೆ ದಾಟಿತು ಎಂದು ಹೇಳಿತ್ತು, ನಿಜ output ವಿರುದ್ಧವನ್ನು ತೋರಿಸಿತು, ಆದ್ದರಿಂದ ಪಠ್ಯ ತಿದ್ದಲ್ಪಟ್ಟಿತು. ವಿಭಾಗ 4: ಎರಡು ಬಾರಿ ತಾತ್ಕಾಲಿಕ 503 ನಂತರ ಯಶಸ್ಸು 3 ಪ್ರಯತ್ನ ಮತ್ತು 0.01 ಹಾಗೂ 0.02 ಸೆಕೆಂಡ್ ವಿಳಂಬ ತೆಗೆದುಕೊಂಡಿತು, ಪ್ರತಿ ಬಾರಿ 503 3 ರ ನಂತರ ಮುಗಿಯಿತು, ಶಾಶ್ವತ 400 1 ರ ನಂತರ ಬಿಟ್ಟಿತು; key ಇಲ್ಲದೆ ಮೂರು ಬಾರಿ ಮರುಪ್ರಯತ್ನಿಸಿದ non-idempotent send 3 ಸಂದೇಶ ಕಳುಹಿಸಿತು ಮತ್ತು idempotency key ಜೊತೆ 1."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Checkpoints, Detector Metrics and Drift",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Checkpoints, Detector Metrics ಮತ್ತು Drift",
    "bodyEn": "Section 5: resuming from a checkpoint ran each step once (5 steps in total) while restarting from zero ran 8. Section 6: with 3 expected and 3 detected labels, 2 of them shared, TP was 2, FP 1 and FN 1, giving precision, recall and F1 of 0.667; one trace repeating the same bad action 10 times counts as 10 events but 1 affected trace; 100 low failures score 100 and 5 critical ones score 250, so the version with fewer failures scores worse. Section 7 (baselines assumed): context_loss rose from 2.0 to 7.0 percent (+5.0 points, 3.5 times) and tripped a +2 point alert while the others did not; with 100 traces per window and no change at all, a 3 percent rate ranged from 0.0 to 7.0 percent across 95 percent of windows.",
    "bodyKn": "ವಿಭಾಗ 5: checkpoint ನಿಂದ ಮುಂದುವರಿದಾಗ ಪ್ರತಿ ಹಂತ ಒಮ್ಮೆ ಓಡಿತು (ಒಟ್ಟು 5 ಹಂತ), ಶೂನ್ಯದಿಂದ ಮರುಆರಂಭಿಸಿದಾಗ 8. ವಿಭಾಗ 6: 3 ನಿರೀಕ್ಷಿತ ಮತ್ತು 3 ಪತ್ತೆಯಾದ ಲೇಬಲ್‌ಗಳಲ್ಲಿ 2 ಹಂಚಿಕೆ, TP 2, FP 1 ಮತ್ತು FN 1, precision, recall ಮತ್ತು F1 0.667; ಅದೇ ಕೆಟ್ಟ ಕ್ರಿಯೆಯನ್ನು 10 ಬಾರಿ ಪುನರಾವರ್ತಿಸುವ ಒಂದು trace 10 events ಆದರೆ 1 ಪ್ರಭಾವಿತ trace ಎಂದು ಎಣಿಕೆ; 100 ಕಡಿಮೆ ವೈಫಲ್ಯಗಳು 100 ಮತ್ತು 5 ನಿರ್ಣಾಯಕ 250 ಅಂಕ, ಆದ್ದರಿಂದ ಕಡಿಮೆ ವೈಫಲ್ಯಗಳ ಆವೃತ್ತಿ ಕೆಟ್ಟ ಅಂಕ ಪಡೆಯುತ್ತದೆ. ವಿಭಾಗ 7 (ಮೂಲ ದರಗಳು ಊಹೆ): context_loss 2.0 ರಿಂದ 7.0 ಶೇಕಡಾಕ್ಕೆ (+5.0 ಅಂಕ, 3.5 ಪಟ್ಟು) ಏರಿ +2 ಅಂಕ ಎಚ್ಚರಿಕೆ ಪ್ರಚೋದಿಸಿತು, ಇತರವು ಪ್ರಚೋದಿಸಲಿಲ್ಲ; ಪ್ರತಿ ವಿಂಡೋಗೆ 100 traces ಮತ್ತು ಯಾವುದೇ ಬದಲಾವಣೆ ಇಲ್ಲದೆ 3 ಶೇಕಡಾ ದರ 95 ಶೇಕಡಾ ವಿಂಡೋಗಳಲ್ಲಿ 0.0 ರಿಂದ 7.0 ಶೇಕಡಾ ವ್ಯಾಪ್ತಿ ಹೊಂದಿತ್ತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "Detection tells you a failure happened; gates, postconditions and halting decide whether it can reach the world. Treating a tool response as a claim and the environment as the evidence is what stops a lying 200 from becoming a completed step.",
    "bodyKn": "ವೈಫಲ್ಯ ಸಂಭವಿಸಿತು ಎಂದು ಪತ್ತೆ ಹೇಳುತ್ತದೆ; ಅದು ಜಗತ್ತನ್ನು ತಲುಪಬಹುದೇ ಎಂದು gates, postconditions ಮತ್ತು ನಿಲ್ಲಿಸುವಿಕೆ ನಿರ್ಧರಿಸುತ್ತವೆ. Tool ಪ್ರತಿಕ್ರಿಯೆಯನ್ನು ಹೇಳಿಕೆ ಮತ್ತು ಪರಿಸರವನ್ನು ಸಾಕ್ಷ್ಯ ಎಂದು ಪರಿಗಣಿಸುವುದು ಸುಳ್ಳು 200 ಪೂರ್ಣ ಹಂತವಾಗುವುದನ್ನು ತಡೆಯುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"a 200 means the step worked.\" The tool returned 200, wrote no file, and only the postcondition check noticed.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"200 ಎಂದರೆ ಹಂತ ಕೆಲಸ ಮಾಡಿತು.\" Tool 200 ಮರಳಿಸಿತು, ಯಾವುದೇ ಫೈಲ್ ಬರೆಯಲಿಲ್ಲ, ಮತ್ತು postcondition ಪರಿಶೀಲನೆ ಮಾತ್ರ ಗಮನಿಸಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Gate: a check before execution. Postcondition: a check of the environment after execution. Halt on failure: stop the run after a failed step. Idempotency key: an operation id that suppresses duplicates. Checkpoint: the last trusted step to resume from.",
    "bodyKn": "Gate: ಕಾರ್ಯಗತಕ್ಕೆ ಮುನ್ನ ಪರಿಶೀಲನೆ. Postcondition: ಕಾರ್ಯಗತದ ನಂತರ ಪರಿಸರದ ಪರಿಶೀಲನೆ. Halt on failure: ವಿಫಲ ಹಂತದ ನಂತರ ಓಟ ನಿಲ್ಲಿಸುವುದು. Idempotency key: ನಕಲು ತಡೆಯುವ ಕಾರ್ಯ id. Checkpoint: ಮುಂದುವರಿಸಲು ಕೊನೆಯ ವಿಶ್ವಾಸಾರ್ಹ ಹಂತ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) A failed create halted the run before upload and notify. 2) A blocked delete never executed. 3) The postcondition caught a 200 that wrote nothing. 4) Argument checks run before approval, so tool-level approval does not bypass grounding. 5) A permanent 400 stops after 1 attempt; blind send retries made 3 messages, a key made 1. 6) Resume ran 5 steps, restart 8. 7) Precision, recall and F1 were each 0.667 on the toy sets. 8) A relative view is needed for rare modes.",
    "bodyKn": "1) ವಿಫಲ create upload ಮತ್ತು notify ಮುನ್ನ ಓಟ ನಿಲ್ಲಿಸಿತು. 2) ತಡೆಯಲ್ಪಟ್ಟ delete ಎಂದೂ ಕಾರ್ಯಗತವಾಗಲಿಲ್ಲ. 3) ಏನನ್ನೂ ಬರೆಯದ 200 ಅನ್ನು postcondition ಹಿಡಿಯಿತು. 4) ಆರ್ಗ್ಯುಮೆಂಟ್ ಪರಿಶೀಲನೆಗಳು ಅನುಮೋದನೆಗೆ ಮುನ್ನ ಓಡುತ್ತವೆ, ಆದ್ದರಿಂದ tool-ಮಟ್ಟದ ಅನುಮೋದನೆ ಆಧಾರ ದಾಟುವುದಿಲ್ಲ. 5) ಶಾಶ್ವತ 400 1 ಪ್ರಯತ್ನದ ನಂತರ ನಿಲ್ಲುತ್ತದೆ; ಕುರುಡು send ಮರುಪ್ರಯತ್ನ 3 ಸಂದೇಶ, key 1. 6) Resume 5 ಹಂತ, ಮರುಆರಂಭ 8. 7) ಆಟಿಕೆ ಸೆಟ್‌ಗಳಲ್ಲಿ precision, recall ಮತ್ತು F1 ತಲಾ 0.667. 8) ಅಪರೂಪದ ವಿಧಗಳಿಗೆ ಸಾಪೇಕ್ಷ ನೋಟ ಬೇಕು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What did postcondition checking add in section 2?",
      "qKn": "ವಿಭಾಗ 2 ರಲ್ಲಿ postcondition ಪರಿಶೀಲನೆ ಏನು ಸೇರಿಸಿತು?",
      "opts": [
       "Nothing",
       "It rejected a 200 that wrote no file and halted the run",
       "It retried the call",
       "It approved the call"
      ],
      "optsKn": [
       "ಏನೂ ಇಲ್ಲ",
       "ಫೈಲ್ ಬರೆಯದ 200 ತಿರಸ್ಕರಿಸಿ ಓಟ ನಿಲ್ಲಿಸಿತು",
       "ಕರೆ ಮರುಪ್ರಯತ್ನಿಸಿತು",
       "ಕರೆ ಅನುಮೋದಿಸಿತು"
      ],
      "correct": 1
     },
     {
      "q": "After the tool delete_file was approved, what happened to a delete of an ungrounded path?",
      "qKn": "tool delete_file ಅನುಮೋದಿಸಿದ ನಂತರ ಆಧಾರರಹಿತ path ನ delete ಗೆ ಏನಾಯಿತು?",
      "opts": [
       "It was allowed",
       "It was still blocked because argument checks run before approval",
       "It required approval again",
       "It was retried"
      ],
      "optsKn": [
       "ಅನುಮತಿಸಲಾಯಿತು",
       "ಆರ್ಗ್ಯುಮೆಂಟ್ ಪರಿಶೀಲನೆ ಅನುಮೋದನೆಗೆ ಮುನ್ನ ಓಡುವುದರಿಂದ ಇನ್ನೂ ತಡೆಯಲ್ಪಟ್ಟಿತು",
       "ಮತ್ತೆ ಅನುಮೋದನೆ ಬೇಕಾಯಿತು",
       "ಮರುಪ್ರಯತ್ನಿಸಲಾಯಿತು"
      ],
      "correct": 1
     },
     {
      "q": "How many messages did three blind retries of a non-idempotent send produce, with and without an idempotency key?",
      "qKn": "Non-idempotent send ನ ಮೂರು ಕುರುಡು ಮರುಪ್ರಯತ್ನಗಳು idempotency key ಜೊತೆ ಮತ್ತು ಇಲ್ಲದೆ ಎಷ್ಟು ಸಂದೇಶ ನೀಡಿದವು?",
      "opts": [
       "1 and 1",
       "3 without a key and 1 with a key",
       "0 and 3",
       "3 and 3"
      ],
      "optsKn": [
       "1 ಮತ್ತು 1",
       "key ಇಲ್ಲದೆ 3 ಮತ್ತು key ಜೊತೆ 1",
       "0 ಮತ್ತು 3",
       "3 ಮತ್ತು 3"
      ],
      "correct": 1
     },
     {
      "q": "How many steps ran when resuming from a checkpoint versus restarting from zero?",
      "qKn": "Checkpoint ನಿಂದ ಮುಂದುವರಿದಾಗ ಮತ್ತು ಶೂನ್ಯದಿಂದ ಮರುಆರಂಭಿಸಿದಾಗ ಎಷ್ಟು ಹಂತಗಳು ಓಡಿದವು?",
      "opts": [
       "5 versus 8",
       "8 versus 5",
       "5 versus 5",
       "3 versus 8"
      ],
      "optsKn": [
       "5 ವಿರುದ್ಧ 8",
       "8 ವಿರುದ್ಧ 5",
       "5 ವಿರುದ್ಧ 5",
       "3 ವಿರುದ್ಧ 8"
      ],
      "correct": 0
     },
     {
      "q": "Why can a severity-weighted score make the version with fewer failures look worse?",
      "qKn": "ತೂಕದ ತೀವ್ರತೆ ಅಂಕ ಕಡಿಮೆ ವೈಫಲ್ಯಗಳ ಆವೃತ್ತಿಯನ್ನು ಏಕೆ ಕೆಟ್ಟದಾಗಿ ತೋರಿಸಬಹುದು?",
      "opts": [
       "It cannot",
       "5 critical failures scored 250 against 100 for 100 low ones",
       "Weights are random",
       "Fewer failures are always worse"
      ],
      "optsKn": [
       "ಸಾಧ್ಯವಿಲ್ಲ",
       "5 ನಿರ್ಣಾಯಕ ವೈಫಲ್ಯಗಳು 250 ಅಂಕ, 100 ಕಡಿಮೆ ವೈಫಲ್ಯಗಳಿಗೆ 100",
       "ತೂಕಗಳು ಯಾದೃಚ್ಛಿಕ",
       "ಕಡಿಮೆ ವೈಫಲ್ಯ ಯಾವಾಗಲೂ ಕೆಟ್ಟದು"
      ],
      "correct": 1
     }
    ]
   }
  }
 ]
};
