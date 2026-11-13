module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6266020ed05b32156e",
 "order": 2,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Agent Instructions as Executable Constraints (Part 3 of 3) — Lock Files, Router Limits and Scoped Overrides",
 "titleKn": "Agent ಸೂಚನೆಗಳು ಕಾರ್ಯಗತಗೊಳಿಸಬಹುದಾದ ನಿರ್ಬಂಧಗಳಾಗಿ (ಭಾಗ 3 / 3) — Lock ಫೈಲ್‌ಗಳು, Router ಮಿತಿಗಳು ಮತ್ತು ವ್ಯಾಪ್ತಿಯುಳ್ಳ Overrides",
 "desc": "Generate a lock file from the rules, check router reachability and size on real files, review expiring rules and run a gate with scoped overrides through a real exit code.",
 "descKn": "ನಿಯಮಗಳಿಂದ lock ಫೈಲ್ ರಚಿಸಿ, ನಿಜ ಫೈಲ್‌ಗಳಲ್ಲಿ router ತಲುಪುವಿಕೆ ಮತ್ತು ಗಾತ್ರ ಪರಿಶೀಲಿಸಿ, ಮುಕ್ತಾಯವಾಗುವ ನಿಯಮಗಳನ್ನು ಪರಿಶೀಲಿಸಿ ಮತ್ತು ನಿಜ exit code ಮೂಲಕ ವ್ಯಾಪ್ತಿಯುಳ್ಳ overrides ಇರುವ gate ಓಡಿಸಿ.",
 "objectives": [
  "Regenerate a lock from reviewed source.",
  "Check router reachability and size.",
  "Review expired and unused rules.",
  "Scope overrides to rule, task and revision.",
  "Give every rule a failing test case."
 ],
 "objectivesKn": [
  "ಪರಿಶೀಲಿತ ಮೂಲದಿಂದ lock ಮರುರಚಿಸಿ.",
  "Router ತಲುಪುವಿಕೆ ಮತ್ತು ಗಾತ್ರ ಪರಿಶೀಲಿಸಿ.",
  "ಮುಕ್ತಾಯವಾದ ಮತ್ತು ಬಳಕೆಯಿಲ್ಲದ ನಿಯಮಗಳನ್ನು ಪರಿಶೀಲಿಸಿ.",
  "Overrides ಅನ್ನು ನಿಯಮ, ಕಾರ್ಯ ಮತ್ತು revision ಗೆ ಸೀಮಿತಗೊಳಿಸಿ.",
  "ಪ್ರತಿ ನಿಯಮಕ್ಕೆ ವಿಫಲ ಪರೀಕ್ಷಾ ಪ್ರಕರಣ ನೀಡಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Agent Instructions as Executable Constraints (Part 3 of 3)",
    "textKn": "Agent ಸೂಚನೆಗಳು ಕಾರ್ಯಗತಗೊಳಿಸಬಹುದಾದ ನಿರ್ಬಂಧಗಳಾಗಿ (ಭಾಗ 3 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 3 of 3: a lock file generated from the Markdown rules, router reachability, rule expiry, a gate with an exit code and a scoped override. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind agent instructions as executable constraints (rule files, checkers, severities and gates), not the real software, and the run records are hand-written and no language model is involved, so no real LLM behaviour is measured. The pasted lesson said its main.py and rule_checker.py were not supplied, so the lab is our own implementation of the behaviour it describes. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 3ನೆಯದು: Markdown ನಿಯಮಗಳಿಂದ ರಚಿಸಿದ lock ಫೈಲ್, router ತಲುಪುವಿಕೆ, ನಿಯಮ ಮುಕ್ತಾಯ, exit code ಇರುವ gate ಮತ್ತು ವ್ಯಾಪ್ತಿಯುಳ್ಳ override. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು agent ಸೂಚನೆಗಳು ಕಾರ್ಯಗತಗೊಳಿಸಬಹುದಾದ ನಿರ್ಬಂಧಗಳಾಗಿ (ನಿಯಮ ಫೈಲ್‌ಗಳು, checkers, ತೀವ್ರತೆಗಳು ಮತ್ತು gates) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು run ದಾಖಲೆಗಳು ಕೈಬರಹ ಮತ್ತು ಯಾವುದೇ ಭಾಷಾ ಮಾದರಿ ಇಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಅಂಟಿಸಿದ lesson ತನ್ನ main.py ಮತ್ತು rule_checker.py ಒದಗಿಸಿಲ್ಲ ಎಂದು ಹೇಳಿತ್ತು, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್ ಅದು ವಿವರಿಸುವ ವರ್ತನೆಯ ನಮ್ಮದೇ ಅನುಷ್ಠಾನ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Rules Need Maintenance",
    "textKn": "ನಿಯಮಗಳಿಗೆ ನಿರ್ವಹಣೆ ಬೇಕು",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Source, Cache, Router and Expiry",
    "headingKn": "ಮೂಲ, ಕ್ಯಾಶ್, Router ಮತ್ತು ಮುಕ್ತಾಯ",
    "bodyEn": "A rule set that is not maintained either drifts from its cache or fills with rules nobody reviews. This part generates a deterministic JSON lock from the Markdown source and detects a stale lock by hash, checks that every rule is reachable from the router within two hops on real files and that the router stays within a line budget, flags rules whose expiry has passed or that have not fired for a long time, runs a gate through a real exit code with a scoped override, and shows why a rule needs a failing test case.",
    "bodyKn": "ನಿರ್ವಹಿಸದ ನಿಯಮ ಸೆಟ್ ತನ್ನ ಕ್ಯಾಶ್‌ನಿಂದ ದೂರ ಸರಿಯುತ್ತದೆ ಅಥವಾ ಯಾರೂ ಪರಿಶೀಲಿಸದ ನಿಯಮಗಳಿಂದ ತುಂಬುತ್ತದೆ. ಈ ಭಾಗ Markdown ಮೂಲದಿಂದ ನಿರ್ಣಾಯಕ JSON lock ರಚಿಸಿ hash ಮೂಲಕ ಹಳೆಯ lock ಪತ್ತೆ ಮಾಡುತ್ತದೆ, ನಿಜ ಫೈಲ್‌ಗಳಲ್ಲಿ ಪ್ರತಿ ನಿಯಮ router ನಿಂದ ಎರಡು hops ಒಳಗೆ ತಲುಪಬಹುದು ಮತ್ತು router ಸಾಲು ಬಜೆಟ್ ಒಳಗಿದೆ ಎಂದು ಪರಿಶೀಲಿಸುತ್ತದೆ, ಮುಕ್ತಾಯ ಕಳೆದ ಅಥವಾ ದೀರ್ಘಕಾಲ ಬೆಂಕಿ ಹೊತ್ತದ ನಿಯಮಗಳನ್ನು ಗುರುತಿಸುತ್ತದೆ, ವ್ಯಾಪ್ತಿಯುಳ್ಳ override ಜೊತೆ ನಿಜ exit code ಮೂಲಕ gate ಓಡಿಸುತ್ತದೆ, ಮತ್ತು ನಿಯಮಕ್ಕೆ ವಿಫಲ ಪರೀಕ್ಷಾ ಪ್ರಕರಣ ಏಕೆ ಬೇಕು ಎಂದು ತೋರಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Keeping the Rules Alive",
    "headingKn": "ನಿಯಮಗಳನ್ನು ಜೀವಂತವಾಗಿಡುವುದು",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">Keeping rules alive</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">lock file</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">hash of the source</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">router</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">two hops, short</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">expiry</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">review, do not drop</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">scoped override</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">rule, task, revision</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">maintenance is part of the control</text></svg>",
    "captionEn": "Maintenance is part of the control.",
    "captionKn": "ನಿರ್ವಹಣೆ ನಿಯಂತ್ರಣದ ಭಾಗ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Maintenance checks",
    "headingKn": "ನಿರ್ವಹಣೆ ಪರಿಶೀಲನೆಗಳು",
    "headers": [
     "Check",
     "Detects",
     "Fails the build when"
    ],
    "rows": [
     [
      "lock freshness",
      "source and cache disagree",
      "the Markdown hash differs from the lock"
     ],
     [
      "router reachability",
      "broken or deep links",
      "a rule is more than two hops away"
     ],
     [
      "router size",
      "a router that grew into a manual",
      "it exceeds the line budget"
     ],
     [
      "expiry review",
      "forgotten or unused rules",
      "a rule is past its date"
     ],
     [
      "override scope",
      "blanket exceptions",
      "rule, task or revision do not match"
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
    "filename": "ic_3.py",
    "headingEn": "Parsing with expiry, the lock, reachability and review checks",
    "headingKn": "ಮುಕ್ತಾಯದೊಂದಿಗೆ ಪಾರ್ಸಿಂಗ್, lock, ತಲುಪುವಿಕೆ ಮತ್ತು ಪರಿಶೀಲನೆ ಪರೀಕ್ಷೆಗಳು",
    "descEn": "build_lock produces a sorted rule list and the SHA-256 of the Markdown source, and lock_is_fresh compares that hash. reachable follows backticked .md references breadth-first up to a hop limit. review_due flags rules that are expired or have had zero violations for a long time.",
    "descKn": "build_lock ವಿಂಗಡಿಸಿದ ನಿಯಮ ಪಟ್ಟಿ ಮತ್ತು Markdown ಮೂಲದ SHA-256 ಉತ್ಪಾದಿಸುತ್ತದೆ, lock_is_fresh ಆ hash ಹೋಲಿಸುತ್ತದೆ. reachable backtick ಇರುವ .md ಉಲ್ಲೇಖಗಳನ್ನು hop ಮಿತಿ ವರೆಗೆ ಅಗಲ-ಮೊದಲಾಗಿ ಅನುಸರಿಸುತ್ತದೆ. review_due ಮುಕ್ತಾಯವಾದ ಅಥವಾ ದೀರ್ಘಕಾಲ ಶೂನ್ಯ ಉಲ್ಲಂಘನೆ ಇರುವ ನಿಯಮಗಳನ್ನು ಗುರುತಿಸುತ್ತದೆ.",
    "code": "RULES_MD = \"## a-rule\\n- category: startup\\n- severity: block\\n- check: startup_before_edit\\n- description: x\\n- expires: 2026-12-31\\n\\n## b-rule\\n- category: forbidden\\n- severity: block\\n- check: no_protected_file_writes\\n- description: y\\n- expires: 2026-06-30\\n\"\n\n\ndef parse(md):\n    out, cur = [], None\n    for line in md.splitlines():\n        h = re.match(r\"^## (\\S+)\", line)\n        if h:\n            cur = {\"slug\": h.group(1)}\n            out.append(cur)\n            continue\n        f = re.match(r\"^- (\\w+):\\s*(.+)$\", line)\n        if f and cur is not None:\n            cur[f.group(1)] = f.group(2).strip()\n    return sorted(out, key=lambda r: r[\"slug\"])\n\n\ndef build_lock(md):\n    return {\"source_sha256\": hashlib.sha256(md.encode()).hexdigest(), \"rules\": parse(md)}\n\n\ndef lock_is_fresh(md, lock):\n    return lock.get(\"source_sha256\") == hashlib.sha256(md.encode()).hexdigest()\n\n\ndef review_due(rules, today, zero_violation_days):\n    due = []\n    for r in rules:\n        exp = date.fromisoformat(r[\"expires\"])\n        if exp <= today:\n            due.append((r[\"slug\"], \"expired: review, do not silently drop\"))\n        elif zero_violation_days.get(r[\"slug\"], 0) >= 60:\n            due.append((r[\"slug\"], \"zero violations for 60+ days: still useful?\"))\n    return due\n\n\ndef reachable(root, start, target_name, max_hops=2):\n    seen, frontier = {start}, [(start, 0)]\n    while frontier:\n        f, d = frontier.pop(0)\n        if f.name == target_name:\n            return True, d\n        if d == max_hops:\n            continue\n        for ref in re.findall(r\"`([^`]+\\.md)`\", f.read_text(encoding=\"utf-8\")):\n            p = (root / ref)\n            if p.exists() and p not in seen:\n                seen.add(p)\n                frontier.append((p, d + 1))\n    return False, None"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "ic_3.py",
    "headingEn": "main(): five experiments",
    "headingKn": "main(): ಐದು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() regenerates and compares the lock, checks reachability and size on real files, computes review dates, runs the gate with four override variants through a subprocess exit code and exercises a checker with positive, negative and missing-evidence cases.",
    "descKn": "main() lock ಮರುರಚಿಸಿ ಹೋಲಿಸಿ, ನಿಜ ಫೈಲ್‌ಗಳಲ್ಲಿ ತಲುಪುವಿಕೆ ಮತ್ತು ಗಾತ್ರ ಪರಿಶೀಲಿಸಿ, ಪರಿಶೀಲನೆ ದಿನಾಂಕ ಲೆಕ್ಕಿಸಿ, ನಾಲ್ಕು override ರೂಪಾಂತರಗಳೊಂದಿಗೆ subprocess exit code ಮೂಲಕ gate ಓಡಿಸಿ, ಧನಾತ್ಮಕ, ಋಣಾತ್ಮಕ ಮತ್ತು ಕಾಣೆಯಾದ-ಸಾಕ್ಷ್ಯ ಪ್ರಕರಣಗಳಿಂದ checker ಪರೀಕ್ಷಿಸುತ್ತದೆ.",
    "code": "def section(t):\n    print(f\"\\n--- {t} ---\")\n\n\ndef main():\n    section(\"1. Genuinely checking: a deterministic lock and a stale-cache check\")\n    lock = build_lock(RULES_MD)\n    print(\"lock keys:\", sorted(lock), \"| rules:\", [r[\"slug\"] for r in lock[\"rules\"]], \"| same input twice gives the same lock:\", build_lock(RULES_MD) == lock)\n    edited = RULES_MD.replace(\"severity: block\\n- check: no_protected_file_writes\", \"severity: warn\\n- check: no_protected_file_writes\")\n    print(\"source edited, lock regenerated:\", lock_is_fresh(edited, build_lock(edited)), \"| source edited but the old lock kept:\", lock_is_fresh(edited, lock))\n    print(\"with a stale lock the runtime would keep enforcing b-rule as block after the reviewed source weakened it to warn; CI fails the build when the hash of the Markdown differs from the one in the lock\")\n\n    section(\"2. Genuinely checking: router reachability within two hops and a size budget (real files)\")\n    with tempfile.TemporaryDirectory() as d:\n        root = Path(d)\n        (root / \"docs\").mkdir()\n        (root / \"AGENTS.md\").write_text(\"# Router\\nRead `docs/agent-rules.md`.\\nTesting: `docs/testing.md`.\\n\", encoding=\"utf-8\")\n        (root / \"docs\" / \"agent-rules.md\").write_text(\"# Rules\\nSee `docs/deep.md`.\\n\", encoding=\"utf-8\")\n        (root / \"docs\" / \"testing.md\").write_text(\"# Testing\\n\", encoding=\"utf-8\")\n        (root / \"docs\" / \"deep.md\").write_text(\"# Deep\\nSee `docs/deeper.md`.\\n\", encoding=\"utf-8\")\n        (root / \"docs\" / \"deeper.md\").write_text(\"# Deeper\\n\", encoding=\"utf-8\")\n        start = root / \"AGENTS.md\"\n        for name in (\"agent-rules.md\", \"testing.md\", \"deep.md\", \"deeper.md\", \"missing.md\"):\n            print(f\"{name:16} reachable within 2 hops: {reachable(root, start, name)}\")\n        (root / \"AGENTS.md\").write_text(\"\\n\".join(f\"line {i}\" for i in range(75)) + \"\\n\", encoding=\"utf-8\")\n        n = len((root / \"AGENTS.md\").read_text().splitlines())\n        print(f\"router length {n} lines against a budget of 50: {'over budget' if n > 50 else 'ok'}\")\n    print(\"deeper.md is three hops away and so is not reachable by the rule; a broken link would show as unreachable and should fail the startup check; the 50-line budget is a design choice, not a measured threshold\")\n\n    section(\"3. Genuinely measuring: rule expiry and low-use review (simulated today = 2026-10-05)\")\n    rules = lock[\"rules\"]\n    print(review_due(rules, date(2026, 10, 5), {\"a-rule\": 75}))\n    print(\"a-rule had no violations for 75 days and b-rule's date has passed; both are queued for review, and the safe default for an expired safety rule is to keep enforcing it until a person decides, not to drop it\")\n\n    section(\"4. Genuinely checking: the gate as a real exit code, with and without a scoped override\")\n    code = (\"import json,sys;d=json.loads(sys.argv[1]);o=d.get('override');\"\n            \"blocked=[r for r in d['results'] if r['status']!='pass' and r['severity']=='block' and not (o and o['rule']==r['slug'] and o['task']==d['task'] and o['revision']==d['revision'])];\"\n            \"print(json.dumps({'blocked':[r['slug'] for r in blocked]}));sys.exit(1 if blocked else 0)\")\n    base = {\"task\": \"T-1\", \"revision\": \"r7\", \"results\": [{\"slug\": \"protected-writes\", \"status\": \"fail\", \"severity\": \"block\"}, {\"slug\": \"assumptions\", \"status\": \"fail\", \"severity\": \"warn\"}]}\n    for label, payload in ((\"no override\", base), (\"override for this rule, task and revision\", dict(base, override={\"rule\": \"protected-writes\", \"task\": \"T-1\", \"revision\": \"r7\"})),\n                           (\"override for another revision\", dict(base, override={\"rule\": \"protected-writes\", \"task\": \"T-1\", \"revision\": \"r6\"})), (\"override for another rule\", dict(base, override={\"rule\": \"assumptions\", \"task\": \"T-1\", \"revision\": \"r7\"}))):\n        p = subprocess.run([sys.executable, \"-c\", code, json.dumps(payload)], capture_output=True, text=True)\n        print(f\"{label:42} exit code {p.returncode} {p.stdout.strip()}\")\n    print(\"exit code 1 stops the pipeline and 0 lets it continue; an override only counted when its rule, task and revision all matched, so one approval did not become a blanket exception; the override record still has to be signed by trusted infrastructure, which this demo does not do\")\n\n    section(\"5. Genuinely checking: a checker that is never exercised\")\n    def checker(run):\n        return run.get(\"tests_ran\") is True\n    cases = [({\"tests_ran\": True}, True), ({\"tests_ran\": False}, False), ({}, False)]\n    print(\"positive, negative and missing-evidence cases:\", [(checker(r) == want) for r, want in cases])\n    always = lambda run: True\n    print(\"a checker that always passes agrees with the positive case only:\", [(always(r) == want) for r, want in cases])\n    print(\"a test set with only the passing example cannot tell the real checker from one that always returns True, so every rule needs a failing case and a missing-evidence case\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely checking: a deterministic lock and a stale-cache check ---\nlock keys: ['rules', 'source_sha256'] | rules: ['a-rule', 'b-rule'] | same input twice gives the same lock: True\nsource edited, lock regenerated: True | source edited but the old lock kept: False\nwith a stale lock the runtime would keep enforcing b-rule as block after the reviewed source weakened it to warn; CI fails the build when the hash of the Markdown differs from the one in the lock\n\n--- 2. Genuinely checking: router reachability within two hops and a size budget (real files) ---\nagent-rules.md   reachable within 2 hops: (True, 1)\ntesting.md       reachable within 2 hops: (True, 1)\ndeep.md          reachable within 2 hops: (True, 2)\ndeeper.md        reachable within 2 hops: (False, None)\nmissing.md       reachable within 2 hops: (False, None)\nrouter length 75 lines against a budget of 50: over budget\ndeeper.md is three hops away and so is not reachable by the rule; a broken link would show as unreachable and should fail the startup check; the 50-line budget is a design choice, not a measured threshold\n\n--- 3. Genuinely measuring: rule expiry and low-use review (simulated today = 2026-10-05) ---\n[('a-rule', 'zero violations for 60+ days: still useful?'), ('b-rule', 'expired: review, do not silently drop')]\na-rule had no violations for 75 days and b-rule's date has passed; both are queued for review, and the safe default for an expired safety rule is to keep enforcing it until a person decides, not to drop it\n\n--- 4. Genuinely checking: the gate as a real exit code, with and without a scoped override ---\nno override                                exit code 1 {\"blocked\": [\"protected-writes\"]}\noverride for this rule, task and revision  exit code 0 {\"blocked\": []}\noverride for another revision              exit code 1 {\"blocked\": [\"protected-writes\"]}\noverride for another rule                  exit code 1 {\"blocked\": [\"protected-writes\"]}\nexit code 1 stops the pipeline and 0 lets it continue; an override only counted when its rule, task and revision all matched, so one approval did not become a blanket exception; the override record still has to be signed by trusted infrastructure, which this demo does not do\n\n--- 5. Genuinely checking: a checker that is never exercised ---\npositive, negative and missing-evidence cases: [True, True, True]\na checker that always passes agrees with the positive case only: [True, False, False]\na test set with only the passing example cannot tell the real checker from one that always returns True, so every rule needs a failing case and a missing-evidence case"
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
    "headingEn": "Experiment 1: A deterministic lock and a stale-cache check",
    "headingKn": "ಪ್ರಯೋಗ 1: A deterministic lock and a stale-cache check",
    "bodyEn": "What it ran: A deterministic lock and a stale-cache check. What the lab concluded: with a stale lock the runtime would keep enforcing b-rule as block after the reviewed source weakened it to warn; CI fails the build when the hash of the Markdown differs from the one in the lock",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A deterministic lock and a stale-cache check. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): with a stale lock the runtime would keep enforcing b-rule as block after the reviewed source weakened it to warn; CI fails the build when the hash of the Markdown differs from the one in the lock"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. Genuinely checking: a deterministic lock and a stale-cache check ---\nlock keys: ['rules', 'source_sha256'] | rules: ['a-rule', 'b-rule'] | same input twice gives the same lock: True\nsource edited, lock regenerated: True | source edited but the old lock kept: False"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: Router reachability within two hops and a size budget (real files)",
    "headingKn": "ಪ್ರಯೋಗ 2: Router reachability within two hops and a size budget (real files)",
    "bodyEn": "What it ran: Router reachability within two hops and a size budget (real files). What the lab concluded: deeper.md is three hops away and so is not reachable by the rule; a broken link would show as unreachable and should fail the startup check; the 50-line budget is a design choice, not a measured threshold",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Router reachability within two hops and a size budget (real files). ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): deeper.md is three hops away and so is not reachable by the rule; a broken link would show as unreachable and should fail the startup check; the 50-line budget is a design choice, not a measured threshold"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely checking: router reachability within two hops and a size budget (real files) ---\nagent-rules.md   reachable within 2 hops: (True, 1)\ntesting.md       reachable within 2 hops: (True, 1)\ndeep.md          reachable within 2 hops: (True, 2)\ndeeper.md        reachable within 2 hops: (False, None)\nmissing.md       reachable within 2 hops: (False, None)\nrouter length 75 lines against a budget of 50: over budget"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: Rule expiry and low-use review (simulated today = 2026-10-05)",
    "headingKn": "ಪ್ರಯೋಗ 3: Rule expiry and low-use review (simulated today = 2026-10-05)",
    "bodyEn": "What it ran: Rule expiry and low-use review (simulated today = 2026-10-05). What the lab concluded: a-rule had no violations for 75 days and b-rule's date has passed; both are queued for review, and the safe default for an expired safety rule is to keep enforcing it until a person decides, not to drop it",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Rule expiry and low-use review (simulated today = 2026-10-05). ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a-rule had no violations for 75 days and b-rule's date has passed; both are queued for review, and the safe default for an expired safety rule is to keep enforcing it until a person decides, not to drop it"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely measuring: rule expiry and low-use review (simulated today = 2026-10-05) ---\n[('a-rule', 'zero violations for 60+ days: still useful?'), ('b-rule', 'expired: review, do not silently drop')]"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 4: The gate as a real exit code, with and without a scoped override",
    "headingKn": "ಪ್ರಯೋಗ 4: The gate as a real exit code, with and without a scoped override",
    "bodyEn": "What it ran: The gate as a real exit code, with and without a scoped override. What the lab concluded: exit code 1 stops the pipeline and 0 lets it continue; an override only counted when its rule, task and revision all matched, so one approval did not become a blanket exception; the override record still has to be signed by trusted infrastructure, which this demo does not do",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: The gate as a real exit code, with and without a scoped override. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): exit code 1 stops the pipeline and 0 lets it continue; an override only counted when its rule, task and revision all matched, so one approval did not become a blanket exception; the override record still has to be signed by trusted infrastructure, which this demo does not do"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 4. Genuinely checking: the gate as a real exit code, with and without a scoped override ---\nno override                                exit code 1 {\"blocked\": [\"protected-writes\"]}\noverride for this rule, task and revision  exit code 0 {\"blocked\": []}\noverride for another revision              exit code 1 {\"blocked\": [\"protected-writes\"]}\noverride for another rule                  exit code 1 {\"blocked\": [\"protected-writes\"]}"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 5: A checker that is never exercised",
    "headingKn": "ಪ್ರಯೋಗ 5: A checker that is never exercised",
    "bodyEn": "What it ran: A checker that is never exercised. What the lab concluded: a test set with only the passing example cannot tell the real checker from one that always returns True, so every rule needs a failing case and a missing-evidence case",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A checker that is never exercised. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a test set with only the passing example cannot tell the real checker from one that always returns True, so every rule needs a failing case and a missing-evidence case"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 5. Genuinely checking: a checker that is never exercised ---\npositive, negative and missing-evidence cases: [True, True, True]\na checker that always passes agrees with the positive case only: [True, False, False]"
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
    "headingEn": "Genuinely Found: A Stale Lock Keeps Enforcing the Old Rule; the Router Has Limits",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಹಳೆಯ Lock ಹಳೆಯ ನಿಯಮ ಜಾರಿಗೊಳಿಸುತ್ತಲೇ ಇರುತ್ತದೆ; Router ಗೆ ಮಿತಿಗಳಿವೆ",
    "bodyEn": "Section 1: generating the lock twice from the same Markdown gave identical output; after the source weakened b-rule from block to warn, a regenerated lock was fresh and the old lock was stale. Section 2 (real files): agent-rules.md and testing.md were one hop from AGENTS.md and deep.md two hops, deeper.md was three hops away and so was not reachable, and a missing file was not reachable; a 75-line router was over a 50-line budget, which is a design choice and not a measured threshold.",
    "bodyKn": "ವಿಭಾಗ 1: ಅದೇ Markdown ನಿಂದ lock ಎರಡು ಬಾರಿ ರಚಿಸಿದಾಗ ಒಂದೇ ಔಟ್‌ಪುಟ್; ಮೂಲ b-rule ಅನ್ನು block ರಿಂದ warn ಗೆ ದುರ್ಬಲಗೊಳಿಸಿದ ನಂತರ ಮರುರಚಿತ lock ಹೊಸದಾಗಿತ್ತು ಮತ್ತು ಹಳೆಯ lock ಹಳೆಯದಾಗಿತ್ತು. ವಿಭಾಗ 2 (ನಿಜ ಫೈಲ್‌ಗಳು): agent-rules.md ಮತ್ತು testing.md AGENTS.md ನಿಂದ ಒಂದು hop ಮತ್ತು deep.md ಎರಡು hops, deeper.md ಮೂರು hops ದೂರದಲ್ಲಿದ್ದು ತಲುಪಲಾಗಲಿಲ್ಲ, ಮತ್ತು ಕಾಣೆಯಾದ ಫೈಲ್ ತಲುಪಲಾಗಲಿಲ್ಲ; 75-ಸಾಲಿನ router 50-ಸಾಲಿನ ಬಜೆಟ್ ಮೀರಿತ್ತು, ಅದು ವಿನ್ಯಾಸ ಆಯ್ಕೆ, ಅಳೆದ ಮಿತಿ ಅಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Expiry, a Scoped Override and a Checker With No Failing Case",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಮುಕ್ತಾಯ, ವ್ಯಾಪ್ತಿಯುಳ್ಳ Override ಮತ್ತು ವಿಫಲ ಪ್ರಕರಣವಿಲ್ಲದ Checker",
    "bodyEn": "Section 3 (simulated date 2026-10-05): a-rule was queued for review after 75 days with no violations and b-rule because its date 2026-06-30 had passed; the safe default for an expired safety rule is to keep enforcing it until a person decides. Section 4: with no override the gate exited 1; an override matching rule, task and revision exited 0; an override for another revision or another rule exited 1. Section 5: positive, negative and missing-evidence cases all agreed with the real checker, while an always-true checker agreed only with the positive case.",
    "bodyKn": "ವಿಭಾಗ 3 (ಅನುಕರಿತ ದಿನಾಂಕ 2026-10-05): ಉಲ್ಲಂಘನೆ ಇಲ್ಲದ 75 ದಿನಗಳ ನಂತರ a-rule ಮತ್ತು ಅದರ ದಿನಾಂಕ 2026-06-30 ಕಳೆದದ್ದರಿಂದ b-rule ಪರಿಶೀಲನೆಗೆ ಸರದಿಯಲ್ಲಿ ಇಡಲ್ಪಟ್ಟವು; ಮುಕ್ತಾಯವಾದ ಸುರಕ್ಷತಾ ನಿಯಮದ ಸುರಕ್ಷಿತ ಪೂರ್ವನಿಯೋಜನೆ ವ್ಯಕ್ತಿ ನಿರ್ಧರಿಸುವವರೆಗೆ ಜಾರಿಗೊಳಿಸುತ್ತಲೇ ಇರುವುದು. ವಿಭಾಗ 4: override ಇಲ್ಲದೆ gate 1 ನೊಂದಿಗೆ ನಿರ್ಗಮಿಸಿತು; ನಿಯಮ, ಕಾರ್ಯ ಮತ್ತು revision ಹೊಂದುವ override 0 ನೊಂದಿಗೆ ನಿರ್ಗಮಿಸಿತು; ಬೇರೆ revision ಅಥವಾ ಬೇರೆ ನಿಯಮದ override 1 ನೊಂದಿಗೆ ನಿರ್ಗಮಿಸಿತು. ವಿಭಾಗ 5: ಧನಾತ್ಮಕ, ಋಣಾತ್ಮಕ ಮತ್ತು ಕಾಣೆಯಾದ-ಸಾಕ್ಷ್ಯ ಪ್ರಕರಣಗಳು ಎಲ್ಲವೂ ನಿಜ checker ಗೆ ಒಪ್ಪಿದವು, ಯಾವಾಗಲೂ-true checker ಧನಾತ್ಮಕಕ್ಕೆ ಮಾತ್ರ ಒಪ್ಪಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A rule set stays trustworthy only if its cache is regenerated from the reviewed source, its router stays short and reachable, stale rules are reviewed rather than dropped, and exceptions are scoped.",
    "bodyKn": "ನಿಯಮ ಸೆಟ್ ಅದರ ಕ್ಯಾಶ್ ಪರಿಶೀಲಿತ ಮೂಲದಿಂದ ಮರುರಚಿಸಲ್ಪಟ್ಟರೆ, router ಚಿಕ್ಕದಾಗಿ ತಲುಪಬಹುದಾದರೆ, ಹಳೆಯ ನಿಯಮಗಳು ಬಿಡುವ ಬದಲು ಪರಿಶೀಲಿಸಲ್ಪಟ್ಟರೆ ಮತ್ತು ವಿನಾಯಿತಿಗಳು ವ್ಯಾಪ್ತಿಯುಳ್ಳವಾದರೆ ಮಾತ್ರ ನಂಬಲರ್ಹವಾಗಿ ಉಳಿಯುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"an approved override clears the failure.\" The record still failed; the override only let the gate proceed for one rule, task and revision.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಅನುಮೋದಿತ override ವೈಫಲ್ಯ ತೆರವುಗೊಳಿಸುತ್ತದೆ.\" ದಾಖಲೆ ಇನ್ನೂ ವಿಫಲವಾಗಿತ್ತು; override ಒಂದು ನಿಯಮ, ಕಾರ್ಯ ಮತ್ತು revision ಗೆ gate ಮುಂದುವರಿಯಲು ಮಾತ್ರ ಬಿಟ್ಟಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Lock file: a generated cache of the reviewed source. Reachability: a rule can be found from the router within a hop limit. Expiry: a date that triggers review. Scoped override: an exception tied to a rule, task and revision. Exit code: how CI reads the gate.",
    "bodyKn": "Lock file: ಪರಿಶೀಲಿತ ಮೂಲದ ರಚಿತ ಕ್ಯಾಶ್. Reachability: hop ಮಿತಿ ಒಳಗೆ router ನಿಂದ ನಿಯಮ ಕಂಡುಹಿಡಿಯಬಹುದು. Expiry: ಪರಿಶೀಲನೆ ಪ್ರಚೋದಿಸುವ ದಿನಾಂಕ. Scoped override: ನಿಯಮ, ಕಾರ್ಯ ಮತ್ತು revision ಗೆ ಕಟ್ಟಿದ ವಿನಾಯಿತಿ. Exit code: CI gate ಅನ್ನು ಹೇಗೆ ಓದುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) A stale lock was detected by a hash mismatch. 2) deeper.md was three hops away and unreachable; a 75-line router exceeded a 50-line budget. 3) Two rules were queued for review. 4) Exit codes were 1, 0, 1, 1 for no override, a matching override and two mismatched ones. 5) An always-true checker agreed only with the passing case.",
    "bodyKn": "1) ಹಳೆಯ lock hash ಹೊಂದಾಣಿಕೆಯಿಲ್ಲದೆ ಪತ್ತೆಯಾಯಿತು. 2) deeper.md ಮೂರು hops ದೂರ ಮತ್ತು ತಲುಪಲಾಗದ್ದು; 75-ಸಾಲಿನ router 50-ಸಾಲಿನ ಬಜೆಟ್ ಮೀರಿತು. 3) ಎರಡು ನಿಯಮಗಳು ಪರಿಶೀಲನೆಗೆ ಸರದಿಯಲ್ಲಿ ಇಡಲ್ಪಟ್ಟವು. 4) override ಇಲ್ಲದ, ಹೊಂದುವ override ಮತ್ತು ಎರಡು ಹೊಂದದ ಪ್ರಕರಣಗಳಿಗೆ exit codes 1, 0, 1, 1. 5) ಯಾವಾಗಲೂ-true checker ಪಾಸ್ ಪ್ರಕರಣಕ್ಕೆ ಮಾತ್ರ ಒಪ್ಪಿತು."
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
    "bodyEn": "1) Open a terminal in pneuronics-backend/lesson-defs/labs. 2) Run: python -B ic_3.py (in Git Bash on Windows: PYTHONIOENCODING=utf-8 python -B ic_3.py). 3) Compare each section with the walkthrough above. The -B flag stops Python from writing __pycache__ folders.",
    "bodyKn": "1) pneuronics-backend/lesson-defs/labs ನಲ್ಲಿ ಟರ್ಮಿನಲ್ ತೆರೆಯಿರಿ. 2) ಓಡಿಸಿ: python -B ic_3.py (Windows Git Bash ನಲ್ಲಿ: PYTHONIOENCODING=utf-8 python -B ic_3.py). 3) ಪ್ರತಿ ವಿಭಾಗವನ್ನು ಮೇಲಿನ ನಡೆದಾಟಕ್ಕೆ ಹೋಲಿಸಿ. -B ಧ್ವಜ Python __pycache__ ಫೋಲ್ಡರ್‌ಗಳನ್ನು ಬರೆಯುವುದನ್ನು ತಡೆಯುತ್ತದೆ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What made the old lock stale?",
      "qKn": "ಹಳೆಯ lock ಅನ್ನು ಹಳೆಯದನ್ನಾಗಿಸಿದ್ದು ಏನು?",
      "opts": [
       "The Markdown source changed and its hash differed from the lock",
       "It was too large",
       "It was JSON",
       "It had no rules"
      ],
      "optsKn": [
       "Markdown ಮೂಲ ಬದಲಾಯಿತು ಮತ್ತು ಅದರ hash lock ಗಿಂತ ಭಿನ್ನವಾಗಿತ್ತು",
       "ಅದು ತುಂಬಾ ದೊಡ್ಡದು",
       "ಅದು JSON",
       "ಅದಕ್ಕೆ ನಿಯಮಗಳಿರಲಿಲ್ಲ"
      ],
      "correct": 0
     },
     {
      "q": "How far from AGENTS.md was deeper.md, and was it reachable under a two-hop limit?",
      "qKn": "deeper.md AGENTS.md ನಿಂದ ಎಷ್ಟು ದೂರ, ಮತ್ತು ಎರಡು-hop ಮಿತಿಯಲ್ಲಿ ತಲುಪಬಹುದಿತ್ತೇ?",
      "opts": [
       "Three hops, not reachable",
       "Two hops, reachable",
       "One hop, reachable",
       "Four hops, reachable"
      ],
      "optsKn": [
       "ಮೂರು hops, ತಲುಪಲಾಗದು",
       "ಎರಡು hops, ತಲುಪಬಹುದು",
       "ಒಂದು hop, ತಲುಪಬಹುದು",
       "ನಾಲ್ಕು hops, ತಲುಪಬಹುದು"
      ],
      "correct": 0
     },
     {
      "q": "What exit code did the gate give for an override that matched rule, task and revision?",
      "qKn": "ನಿಯಮ, ಕಾರ್ಯ ಮತ್ತು revision ಹೊಂದುವ override ಗೆ gate ಯಾವ exit code ನೀಡಿತು?",
      "opts": [
       "1",
       "0",
       "2",
       "255"
      ],
      "optsKn": [
       "1",
       "0",
       "2",
       "255"
      ],
      "correct": 1
     },
     {
      "q": "What is the safe default for an expired safety rule?",
      "qKn": "ಮುಕ್ತಾಯವಾದ ಸುರಕ್ಷತಾ ನಿಯಮಕ್ಕೆ ಸುರಕ್ಷಿತ ಪೂರ್ವನಿಯೋಜನೆ ಏನು?",
      "opts": [
       "Drop it",
       "Keep enforcing it until a person decides",
       "Downgrade it to info",
       "Hide it"
      ],
      "optsKn": [
       "ಬಿಡುವುದು",
       "ವ್ಯಕ್ತಿ ನಿರ್ಧರಿಸುವವರೆಗೆ ಜಾರಿಗೊಳಿಸುತ್ತಲೇ ಇರುವುದು",
       "info ಗೆ ಇಳಿಸುವುದು",
       "ಮರೆಮಾಡುವುದು"
      ],
      "correct": 1
     },
     {
      "q": "Why does a rule need a failing test case?",
      "qKn": "ನಿಯಮಕ್ಕೆ ವಿಫಲ ಪರೀಕ್ಷಾ ಪ್ರಕರಣ ಏಕೆ ಬೇಕು?",
      "opts": [
       "Otherwise an always-true checker cannot be told from the real one",
       "To make tests longer",
       "Because JSON requires it",
       "No reason"
      ],
      "optsKn": [
       "ಇಲ್ಲದಿದ್ದರೆ ಯಾವಾಗಲೂ-true checker ಅನ್ನು ನಿಜವಾದದ್ದರಿಂದ ಬೇರ್ಪಡಿಸಲಾಗದು",
       "ಪರೀಕ್ಷೆ ಉದ್ದ ಮಾಡಲು",
       "JSON ಬೇಕು ಎನ್ನುವುದರಿಂದ",
       "ಕಾರಣ ಇಲ್ಲ"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
