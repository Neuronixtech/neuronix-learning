module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6366020ed05b321583",
 "order": 2,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Multi-Session Handoff (Part 3 of 3) — Staleness, Atomic Publishing and Active Pointers",
 "titleKn": "ಬಹು-ಸೆಷನ್ ಹಸ್ತಾಂತರ (ಭಾಗ 3 / 3) — ಹಳೆಯದಾಗುವಿಕೆ, Atomic ಪ್ರಕಟಣೆ ಮತ್ತು ಸಕ್ರಿಯ ಸೂಚಕಗಳು",
 "desc": "Detect a stale handoff in a real git repository, publish atomically, guard an active pointer with compare-and-swap and flag risky next actions.",
 "descKn": "ನಿಜ git repository ಯಲ್ಲಿ ಹಳೆಯ ಹಸ್ತಾಂತರ ಪತ್ತೆಹಚ್ಚಿ, atomic ಆಗಿ ಪ್ರಕಟಿಸಿ, ಸಕ್ರಿಯ ಸೂಚಕವನ್ನು compare-and-swap ಮೂಲಕ ಕಾಯಿರಿ ಮತ್ತು ಅಪಾಯಕಾರಿ next actions ಗುರುತಿಸಿ.",
 "objectives": [
  "Record branch and commit.",
  "Detect stale handoffs.",
  "Publish atomically.",
  "Guard the active pointer.",
  "Flag risky actions for approval."
 ],
 "objectivesKn": [
  "branch ಮತ್ತು commit ದಾಖಲಿಸಿ.",
  "ಹಳೆಯ ಹಸ್ತಾಂತರ ಪತ್ತೆಹಚ್ಚಿ.",
  "Atomic ಆಗಿ ಪ್ರಕಟಿಸಿ.",
  "ಸಕ್ರಿಯ ಸೂಚಕ ಕಾಯಿರಿ.",
  "ಅಪಾಯಕಾರಿ ಕ್ರಿಯೆಗಳನ್ನು ಅನುಮೋದನೆಗೆ ಗುರುತಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Multi-Session Handoff (Part 3 of 3)",
    "textKn": "ಬಹು-ಸೆಷನ್ ಹಸ್ತಾಂತರ (ಭಾಗ 3 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 3 of 3: production behaviour on a real git repository: repository identity, staleness, atomic publication, an active-handoff pointer with compare-and-swap and approval boundaries. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind multi-session handoff (the seven-field packet, consumer validation, staleness and safe publication), not the real software, and the workbench artifacts are made up by the lab and no language model is involved, so no real LLM behaviour is measured. The pasted lesson said its original main.py was not supplied, so the lab is our own implementation of the behaviour it describes; results depend on the machine it ran on. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 3ನೆಯದು: ನಿಜ git repository ಮೇಲೆ production ವರ್ತನೆ: repository ಗುರುತು, ಹಳೆಯದಾಗುವಿಕೆ, ಅಣುಕ ಪ್ರಕಟಣೆ, compare-and-swap ಇರುವ ಸಕ್ರಿಯ-ಹಸ್ತಾಂತರ ಸೂಚಕ ಮತ್ತು ಅನುಮೋದನೆ ಗಡಿಗಳು. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು ಬಹು-ಸೆಷನ್ ಹಸ್ತಾಂತರ (ಏಳು-ಕ್ಷೇತ್ರ ಪ್ಯಾಕೆಟ್, ಗ್ರಾಹಕ ಮಾನ್ಯೀಕರಣ, ಹಳೆಯದಾಗುವಿಕೆ ಮತ್ತು ಸುರಕ್ಷಿತ ಪ್ರಕಟಣೆ) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು workbench ಕಲಾಕೃತಿಗಳನ್ನು ಲ್ಯಾಬ್ ಕಲ್ಪಿಸಿದ್ದು ಮತ್ತು ಯಾವುದೇ ಭಾಷಾ ಮಾದರಿ ಇಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಅಂಟಿಸಿದ lesson ತನ್ನ ಮೂಲ main.py ಒದಗಿಸಿಲ್ಲ ಎಂದು ಹೇಳಿತ್ತು, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್ ಅದು ವಿವರಿಸುವ ವರ್ತನೆಯ ನಮ್ಮದೇ ಅನುಷ್ಠಾನ; ಫಲಿತಾಂಶಗಳು ಅದು ಓಡಿದ ಯಂತ್ರವನ್ನು ಅವಲಂಬಿಸಿವೆ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "A Handoff Is a Claim About a Moment",
    "textKn": "ಹಸ್ತಾಂತರ ಒಂದು ಕ್ಷಣದ ಬಗ್ಗೆ ಹೇಳಿಕೆ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Identity, Atomic Writes and One Active Pointer",
    "headingKn": "ಗುರುತು, Atomic ಬರಹಗಳು ಮತ್ತು ಒಂದು ಸಕ್ರಿಯ ಸೂಚಕ",
    "bodyEn": "A handoff describes a repository at one moment. Another developer can commit after it is written, someone can switch branches, a crash can tear the file and two agents can publish at once. This part records branch and commit in a real temporary git repository, detects staleness, compares an in-place write with a temp-file-plus-replace write, uses a compare-and-swap active pointer for two publishers and flags risky next actions by keyword.",
    "bodyKn": "ಹಸ್ತಾಂತರ ಒಂದು ಕ್ಷಣದಲ್ಲಿ repository ವಿವರಿಸುತ್ತದೆ. ಬರೆದ ನಂತರ ಇನ್ನೊಬ್ಬ ಡೆವಲಪರ್ commit ಮಾಡಬಹುದು, ಯಾರಾದರೂ branches ಬದಲಿಸಬಹುದು, crash ಫೈಲ್ ಹರಿಯಬಹುದು ಮತ್ತು ಎರಡು agents ಒಂದೇ ಬಾರಿ ಪ್ರಕಟಿಸಬಹುದು. ಈ ಭಾಗ ನಿಜ ತಾತ್ಕಾಲಿಕ git repository ಯಲ್ಲಿ branch ಮತ್ತು commit ದಾಖಲಿಸಿ, ಹಳೆಯದಾಗುವಿಕೆ ಪತ್ತೆಹಚ್ಚಿ, ಸ್ಥಳದಲ್ಲೇ ಬರಹವನ್ನು temp-ಫೈಲ್-ಜೊತೆ-ಬದಲಿ ಬರಹಕ್ಕೆ ಹೋಲಿಸಿ, ಇಬ್ಬರು ಪ್ರಕಾಶಕರಿಗೆ compare-and-swap ಸಕ್ರಿಯ ಸೂಚಕ ಬಳಸಿ ಮತ್ತು ಅಪಾಯಕಾರಿ next actions ಅನ್ನು keyword ಮೂಲಕ ಗುರುತಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Still True When Read?",
    "headingKn": "ಓದುವಾಗ ಇನ್ನೂ ಸತ್ಯವೇ?",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">Still true when read?</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">identity</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">branch + commit</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">atomic publish</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">temp + replace</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">active pointer</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">compare and swap</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">approval</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">risky next actions</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">a handoff can go stale before it is read</text></svg>",
    "captionEn": "A handoff can go stale before it is read.",
    "captionKn": "ಓದುವ ಮುನ್ನ ಹಸ್ತಾಂತರ ಹಳೆಯದಾಗಬಹುದು."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Production risks",
    "headingKn": "Production ಅಪಾಯಗಳು",
    "headers": [
     "Risk",
     "Control",
     "Limit shown in the lab"
    ],
    "rows": [
     [
      "another commit or branch switch",
      "record branch and commit, compare on read",
      "a dirty tree is not caught by branch and commit alone"
     ],
     [
      "torn write",
      "write a temp file, then os.replace",
      "a leftover temp file needs cleanup"
     ],
     [
      "two publishers",
      "compare-and-swap on the active pointer",
      "check and write are separate steps"
     ],
     [
      "risky next action",
      "keyword flag and human approval",
      "keywords miss other wording"
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
    "filename": "ms_3.py",
    "headingEn": "identity, is_current, atomic publish and compare-and-swap",
    "headingKn": "identity, is_current, atomic publish ಮತ್ತು compare-and-swap",
    "descEn": "identity reads branch, short commit and dirty state from git. is_current compares them with the recorded values. publish_atomic writes a temp file and replaces the target. publish_cas refuses to publish unless the active pointer still holds the expected previous id, and moves the old one to superseded.",
    "descKn": "identity git ನಿಂದ branch, ಚಿಕ್ಕ commit ಮತ್ತು dirty ಸ್ಥಿತಿ ಓದುತ್ತದೆ. is_current ಅವನ್ನು ದಾಖಲಿಸಿದ ಮೌಲ್ಯಗಳಿಗೆ ಹೋಲಿಸುತ್ತದೆ. publish_atomic temp ಫೈಲ್ ಬರೆದು ಗುರಿಯನ್ನು ಬದಲಿಸುತ್ತದೆ. publish_cas ಸಕ್ರಿಯ ಸೂಚಕ ಇನ್ನೂ ನಿರೀಕ್ಷಿತ ಹಿಂದಿನ id ಹೊಂದಿದ್ದರೆ ಮಾತ್ರ ಪ್ರಕಟಿಸುತ್ತದೆ, ಮತ್ತು ಹಳೆಯದನ್ನು superseded ಗೆ ಸರಿಸುತ್ತದೆ.",
    "code": "def identity(repo):\n    return {\"branch\": git(repo, \"rev-parse\", \"--abbrev-ref\", \"HEAD\"), \"commit\": git(repo, \"rev-parse\", \"HEAD\")[:10], \"dirty\": bool(git(repo, \"status\", \"--porcelain\"))}\n\n\ndef is_current(handoff, repo):\n    now = identity(repo)\n    if now[\"branch\"] != handoff[\"branch\"]:\n        return False, f\"branch changed from {handoff['branch']} to {now['branch']}\"\n    if now[\"commit\"] != handoff[\"commit\"]:\n        return False, f\"{handoff['commit']} is no longer HEAD ({now['commit']})\"\n    return True, \"handoff matches the repository\"\n\n\ndef publish_atomic(path, payload):\n    tmp = path.with_suffix(\".tmp\")\n    tmp.write_text(json.dumps(payload), encoding=\"utf-8\")\n    os.replace(tmp, path)\n\n\ndef publish_torn(path, payload, crash_after=15):\n    text = json.dumps(payload)\n    path.write_text(text[:crash_after], encoding=\"utf-8\")\n\n\ndef publish_cas(pointer, new_id, expected_prev):\n    cur = json.loads(pointer.read_text(encoding=\"utf-8\"))[\"active\"] if pointer.exists() else None\n    if cur != expected_prev:\n        return False, f\"active handoff is {cur}, not {expected_prev}\"\n    publish_atomic(pointer, {\"active\": new_id, \"superseded\": ([cur] if cur else [])})\n    return True, f\"published {new_id}\""
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "ms_3.py",
    "headingEn": "main(): five experiments",
    "headingKn": "main(): ಐದು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() builds a git repository, records identity, edits a file, adds a teammate commit and switches branch, simulates a torn write and a crash during a temp write, runs two publishers and tests three next actions against a keyword list.",
    "descKn": "main() git repository ನಿರ್ಮಿಸಿ, ಗುರುತು ದಾಖಲಿಸಿ, ಫೈಲ್ ಸಂಪಾದಿಸಿ, ಸಹೋದ್ಯೋಗಿ commit ಸೇರಿಸಿ ಮತ್ತು branch ಬದಲಿಸಿ, torn ಬರಹ ಮತ್ತು temp ಬರಹ ಸಮಯದ crash ಅನುಕರಿಸಿ, ಇಬ್ಬರು ಪ್ರಕಾಶಕರನ್ನು ಓಡಿಸಿ ಮತ್ತು ಮೂರು next actions ಅನ್ನು keyword ಪಟ್ಟಿಗೆ ಪರೀಕ್ಷಿಸುತ್ತದೆ.",
    "code": "def main():\n    with tempfile.TemporaryDirectory() as d:\n        repo = Path(d) / \"repo\"\n        repo.mkdir()\n        git(repo, \"init\", \"-q\", \"-b\", \"feature-pay\")\n        (repo / \"a.py\").write_text(\"v1\" + chr(10), encoding=\"utf-8\")\n        git(repo, \"add\", \"-A\")\n        git(repo, \"commit\", \"-q\", \"-m\", \"c1\")\n\n        section(\"1. Genuinely running: a handoff records which repository state it describes\")\n        h = {\"next_action\": \"Run the payment test.\", **identity(repo)}\n        print(\"recorded identity:\", {k: h[k] for k in (\"branch\", \"commit\", \"dirty\")})\n        print(\"same state:\", is_current(h, repo))\n        (repo / \"a.py\").write_text(\"v2\" + chr(10), encoding=\"utf-8\")\n        print(\"uncommitted edit afterwards, identity says dirty:\", identity(repo)[\"dirty\"], \"| still current by branch and commit:\", is_current(h, repo)[0])\n        print(\"a dirty working tree after the handoff did not change the branch or commit, so this check alone did not notice it; recording the dirty flag and the changed-file hashes would be needed to catch that\")\n        git(repo, \"checkout\", \"-q\", \"--\", \"a.py\")\n\n        section(\"2. Genuinely running: another commit and a branch switch make the handoff stale\")\n        (repo / \"b.py\").write_text(\"x\" + chr(10), encoding=\"utf-8\")\n        git(repo, \"add\", \"-A\")\n        git(repo, \"commit\", \"-q\", \"-m\", \"teammate\")\n        print(\"after a teammate's commit:\", is_current(h, repo))\n        git(repo, \"checkout\", \"-q\", \"-b\", \"other-task\")\n        print(\"on another branch:\", is_current(h, repo))\n        print(\"both cases were caught by comparing the recorded branch and commit with the repository, so a fresh session can refuse to continue and ask for a new handoff instead of acting on advice about code that has moved\")\n        git(repo, \"checkout\", \"-q\", \"feature-pay\")\n\n        section(\"3. Genuinely running: atomic publication versus a torn write\")\n        target = Path(d) / \"handoff.json\"\n        publish_atomic(target, {\"v\": 1, \"next_action\": \"old but complete\"})\n        publish_torn(target, {\"v\": 2, \"next_action\": \"new and long enough to be cut off\"})\n        try:\n            json.loads(target.read_text(encoding=\"utf-8\"))\n            print(\"after a torn write: parsed\")\n        except json.JSONDecodeError:\n            print(\"after a torn write: unreadable, the previous complete handoff is gone too\")\n        publish_atomic(target, {\"v\": 1, \"next_action\": \"old but complete\"})\n        tmp = target.with_suffix(\".tmp\")\n        tmp.write_text('{\"v\": 2, \"next_ac', encoding=\"utf-8\")\n        print(\"crash while writing the temp file, published file still reads:\", json.loads(target.read_text(encoding=\"utf-8\")))\n        print(\"writing straight over the published file lost the old handoff and left a broken one, while writing a temp file and then os.replace left the previous complete handoff in place when the crash, simulated here by cutting the write short, happened during the write; the replace itself is atomic on the same volume, and a leftover temp file has to be cleaned up\")\n\n        section(\"4. Genuinely running: two agents publish on the same branch\")\n        pointer = Path(d) / \"active.json\"\n        print(\"agent A publishes first:\", publish_cas(pointer, \"h-A\", None))\n        print(\"agent B had read 'no active handoff' and publishes:\", publish_cas(pointer, \"h-B\", None))\n        print(\"agent B re-reads, then publishes on top of A:\", publish_cas(pointer, \"h-B\", \"h-A\"))\n        print(\"pointer now:\", json.loads(pointer.read_text(encoding=\"utf-8\")))\n        print(\"the second publisher's stale view was refused, and after re-reading it superseded A explicitly, so A's handoff is archived and not silently overwritten; this lab's check and write are separate steps, so two truly simultaneous publishers could still race, and a real implementation needs an atomic create or a lock\")\n\n        section(\"5. Genuinely checking: approval boundaries in next_action\")\n        risky = [\"Run the payment test.\", \"Deploy to production and run migrations.\", \"Delete the old branch.\"]\n        words = (\"deploy\", \"production\", \"delete\", \"migrat\", \"force\")\n        for na in risky:\n            hit = [w for w in words if w in na.lower()]\n            print(f\"{na:45} needs human approval by keyword list: {bool(hit)} {hit}\")\n        print(\"a simple keyword list flagged the two risky actions and passed the safe one, but it would miss any wording not on the list; it is a safety net of our own devising, and the real boundary is that the resuming agent may not execute these actions without an approval it can verify\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: a handoff records which repository state it describes ---\nrecorded identity: {'branch': 'feature-pay', 'commit': 'e7c3b67346', 'dirty': False}\nsame state: (True, 'handoff matches the repository')\nuncommitted edit afterwards, identity says dirty: True | still current by branch and commit: True\na dirty working tree after the handoff did not change the branch or commit, so this check alone did not notice it; recording the dirty flag and the changed-file hashes would be needed to catch that\n\n--- 2. Genuinely running: another commit and a branch switch make the handoff stale ---\nafter a teammate's commit: (False, 'e7c3b67346 is no longer HEAD (5b4de1bfd5)')\non another branch: (False, 'branch changed from feature-pay to other-task')\nboth cases were caught by comparing the recorded branch and commit with the repository, so a fresh session can refuse to continue and ask for a new handoff instead of acting on advice about code that has moved\n\n--- 3. Genuinely running: atomic publication versus a torn write ---\nafter a torn write: unreadable, the previous complete handoff is gone too\ncrash while writing the temp file, published file still reads: {'v': 1, 'next_action': 'old but complete'}\nwriting straight over the published file lost the old handoff and left a broken one, while writing a temp file and then os.replace left the previous complete handoff in place when the crash, simulated here by cutting the write short, happened during the write; the replace itself is atomic on the same volume, and a leftover temp file has to be cleaned up\n\n--- 4. Genuinely running: two agents publish on the same branch ---\nagent A publishes first: (True, 'published h-A')\nagent B had read 'no active handoff' and publishes: (False, 'active handoff is h-A, not None')\nagent B re-reads, then publishes on top of A: (True, 'published h-B')\npointer now: {'active': 'h-B', 'superseded': ['h-A']}\nthe second publisher's stale view was refused, and after re-reading it superseded A explicitly, so A's handoff is archived and not silently overwritten; this lab's check and write are separate steps, so two truly simultaneous publishers could still race, and a real implementation needs an atomic create or a lock\n\n--- 5. Genuinely checking: approval boundaries in next_action ---\nRun the payment test.                         needs human approval by keyword list: False []\nDeploy to production and run migrations.      needs human approval by keyword list: True ['deploy', 'production', 'migrat']\nDelete the old branch.                        needs human approval by keyword list: True ['delete']\na simple keyword list flagged the two risky actions and passed the safe one, but it would miss any wording not on the list; it is a safety net of our own devising, and the real boundary is that the resuming agent may not execute these actions without an approval it can verify"
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
    "headingEn": "Experiment 1: A handoff records which repository state it describes",
    "headingKn": "ಪ್ರಯೋಗ 1: A handoff records which repository state it describes",
    "bodyEn": "What it ran: A handoff records which repository state it describes. What the lab concluded: a dirty working tree after the handoff did not change the branch or commit, so this check alone did not notice it; recording the dirty flag and the changed-file hashes would be needed to catch that",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A handoff records which repository state it describes. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a dirty working tree after the handoff did not change the branch or commit, so this check alone did not notice it; recording the dirty flag and the changed-file hashes would be needed to catch that"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. Genuinely running: a handoff records which repository state it describes ---\nrecorded identity: {'branch': 'feature-pay', 'commit': 'e7c3b67346', 'dirty': False}\nsame state: (True, 'handoff matches the repository')\nuncommitted edit afterwards, identity says dirty: True | still current by branch and commit: True"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: Another commit and a branch switch make the handoff stale",
    "headingKn": "ಪ್ರಯೋಗ 2: Another commit and a branch switch make the handoff stale",
    "bodyEn": "What it ran: Another commit and a branch switch make the handoff stale. What the lab concluded: both cases were caught by comparing the recorded branch and commit with the repository, so a fresh session can refuse to continue and ask for a new handoff instead of acting on advice about code that has moved",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Another commit and a branch switch make the handoff stale. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): both cases were caught by comparing the recorded branch and commit with the repository, so a fresh session can refuse to continue and ask for a new handoff instead of acting on advice about code that has moved"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely running: another commit and a branch switch make the handoff stale ---\nafter a teammate's commit: (False, 'e7c3b67346 is no longer HEAD (5b4de1bfd5)')\non another branch: (False, 'branch changed from feature-pay to other-task')"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: Atomic publication versus a torn write",
    "headingKn": "ಪ್ರಯೋಗ 3: Atomic publication versus a torn write",
    "bodyEn": "What it ran: Atomic publication versus a torn write. What the lab concluded: writing straight over the published file lost the old handoff and left a broken one, while writing a temp file and then os.replace left the previous complete handoff in place when the crash, simulated here by cutting the write short, happened during the write; the replace itself is atomic on the same volume, and a leftover temp file has to be cleaned up",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Atomic publication versus a torn write. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): writing straight over the published file lost the old handoff and left a broken one, while writing a temp file and then os.replace left the previous complete handoff in place when the crash, simulated here by cutting the write short, happened during the write; the replace itself is atomic on the same volume, and a leftover temp file has to be cleaned up"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely running: atomic publication versus a torn write ---\nafter a torn write: unreadable, the previous complete handoff is gone too\ncrash while writing the temp file, published file still reads: {'v': 1, 'next_action': 'old but complete'}"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 4: Two agents publish on the same branch",
    "headingKn": "ಪ್ರಯೋಗ 4: Two agents publish on the same branch",
    "bodyEn": "What it ran: Two agents publish on the same branch. What the lab concluded: the second publisher's stale view was refused, and after re-reading it superseded A explicitly, so A's handoff is archived and not silently overwritten; this lab's check and write are separate steps, so two truly simultaneous publishers could still race, and a real implementation needs an atomic create or a lock",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Two agents publish on the same branch. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the second publisher's stale view was refused, and after re-reading it superseded A explicitly, so A's handoff is archived and not silently overwritten; this lab's check and write are separate steps, so two truly simultaneous publishers could still race, and a real implementation needs an atomic create or a lock"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 4. Genuinely running: two agents publish on the same branch ---\nagent A publishes first: (True, 'published h-A')\nagent B had read 'no active handoff' and publishes: (False, 'active handoff is h-A, not None')\nagent B re-reads, then publishes on top of A: (True, 'published h-B')\npointer now: {'active': 'h-B', 'superseded': ['h-A']}"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 5: Approval boundaries in next_action",
    "headingKn": "ಪ್ರಯೋಗ 5: Approval boundaries in next_action",
    "bodyEn": "What it ran: Approval boundaries in next_action. What the lab concluded: a simple keyword list flagged the two risky actions and passed the safe one, but it would miss any wording not on the list; it is a safety net of our own devising, and the real boundary is that the resuming agent may not execute these actions without an approval it can verify",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Approval boundaries in next_action. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a simple keyword list flagged the two risky actions and passed the safe one, but it would miss any wording not on the list; it is a safety net of our own devising, and the real boundary is that the resuming agent may not execute these actions without an approval it can verify"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 5. Genuinely checking: approval boundaries in next_action ---\nRun the payment test.                         needs human approval by keyword list: False []\nDeploy to production and run migrations.      needs human approval by keyword list: True ['deploy', 'production', 'migrat']\nDelete the old branch.                        needs human approval by keyword list: True ['delete']"
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
    "headingEn": "Genuinely Found: Branch and Commit Catch Moves but Not a Dirty Tree",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Branch ಮತ್ತು Commit ಚಲನೆಗಳನ್ನು ಹಿಡಿಯುತ್ತವೆ ಆದರೆ ಕೊಳಕು ಮರವನ್ನಲ್ಲ",
    "bodyEn": "Section 1: the recorded identity matched the repository; after an uncommitted edit the dirty flag was true while the branch and commit still matched. Section 2: after a teammate's commit the handoff was reported as no longer HEAD, and on another branch it was reported as a branch change.",
    "bodyKn": "ವಿಭಾಗ 1: ದಾಖಲಿಸಿದ ಗುರುತು repository ಗೆ ಹೊಂದಿತು; ಉಳಿಸದ ಸಂಪಾದನೆಯ ನಂತರ ಬದಲಾಯಿತು dirty ಧ್ವಜ true ಆಯಿತು ಆದರೆ branch ಮತ್ತು commit ಇನ್ನೂ ಹೊಂದಿದವು. ವಿಭಾಗ 2: ಸಹೋದ್ಯೋಗಿಯ commit ನಂತರ ಹಸ್ತಾಂತರ ಇನ್ನು HEAD ಅಲ್ಲ ಎಂದು ವರದಿಯಾಯಿತು, ಮತ್ತು ಬೇರೆ branch ನಲ್ಲಿ branch ಬದಲಾವಣೆ ಎಂದು ವರದಿಯಾಯಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Torn Writes, Two Publishers and Keyword Safety Nets",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಹರಿದ ಬರಹಗಳು, ಇಬ್ಬರು ಪ್ರಕಾಶಕರು ಮತ್ತು Keyword ಸುರಕ್ಷತಾ ಬಲೆಗಳು",
    "bodyEn": "Section 3 (the crash simulated by cutting the write short): writing over the published file left an unreadable file and lost the previous handoff; writing a temp file and replacing left the previous complete handoff readable when the crash hit the temp write. Section 4: agent A published, agent B's stale \"no active handoff\" view was refused, and after re-reading B superseded A, giving active h-B and superseded [h-A]. Section 5: a keyword list flagged \"Deploy to production and run migrations.\" and \"Delete the old branch.\" but not \"Run the payment test.\".",
    "bodyKn": "ವಿಭಾಗ 3 (ಬರಹ ಮೊಟಕುಗೊಳಿಸಿ crash ಅನುಕರಿಸಲಾಗಿದೆ): ಪ್ರಕಟಿತ ಫೈಲ್ ಮೇಲೆ ಬರೆದದ್ದು ಓದಲಾಗದ ಫೈಲ್ ಬಿಟ್ಟು ಹಿಂದಿನ ಹಸ್ತಾಂತರ ಕಳೆದುಕೊಂಡಿತು; temp ಫೈಲ್ ಬರೆದು ಬದಲಿಸಿದ್ದು crash temp ಬರಹಕ್ಕೆ ಬಡಿದಾಗ ಹಿಂದಿನ ಪೂರ್ಣ ಹಸ್ತಾಂತರ ಓದಬಹುದಾಗಿ ಉಳಿಸಿತು. ವಿಭಾಗ 4: agent A ಪ್ರಕಟಿಸಿತು, agent B ಯ ಹಳೆಯ \"ಸಕ್ರಿಯ ಹಸ್ತಾಂತರ ಇಲ್ಲ\" ನೋಟ ನಿರಾಕರಿಸಲ್ಪಟ್ಟಿತು, ಮತ್ತು ಮರುಓದಿದ ನಂತರ B A ಯನ್ನು supersede ಮಾಡಿ ಸಕ್ರಿಯ h-B ಮತ್ತು superseded [h-A] ನೀಡಿತು. ವಿಭಾಗ 5: keyword ಪಟ್ಟಿ \"Deploy to production and run migrations.\" ಮತ್ತು \"Delete the old branch.\" ಗುರುತಿಸಿತು ಆದರೆ \"Run the payment test.\" ಅಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A handoff only helps if the reader can tell it still matches the repository, can read it after a crash and cannot be misled by a competing publisher.",
    "bodyKn": "ಓದುಗ ಅದು ಇನ್ನೂ repository ಗೆ ಹೊಂದುತ್ತದೆ ಎಂದು ಹೇಳಬಲ್ಲರೆ, crash ನಂತರ ಓದಬಲ್ಲರೆ ಮತ್ತು ಸ್ಪರ್ಧಿ ಪ್ರಕಾಶಕನಿಂದ ದಾರಿ ತಪ್ಪದಿದ್ದರೆ ಮಾತ್ರ ಹಸ್ತಾಂತರ ಸಹಾಯ ಮಾಡುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"same branch and commit means the same working state.\" An uncommitted edit left both unchanged.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಅದೇ branch ಮತ್ತು commit ಎಂದರೆ ಅದೇ ಕೆಲಸದ ಸ್ಥಿತಿ.\" ಉಳಿಸದ ಸಂಪಾದನೆ ಎರಡನ್ನೂ ಬದಲಿಸದೆ ಬಿಟ್ಟಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Staleness: the repository moved after the handoff. Atomic publish: write a temp file then replace. Compare-and-swap: write only if the current value is the expected one. Superseded: replaced by a newer active handoff. Approval boundary: actions an agent may not take alone.",
    "bodyKn": "Staleness: ಹಸ್ತಾಂತರದ ನಂತರ repository ಚಲಿಸಿತು. Atomic publish: temp ಫೈಲ್ ಬರೆದು ಬದಲಿಸಿ. Compare-and-swap: ಪ್ರಸ್ತುತ ಮೌಲ್ಯ ನಿರೀಕ್ಷಿತವಾಗಿದ್ದರೆ ಮಾತ್ರ ಬರೆಯಿರಿ. Superseded: ಹೊಸ ಸಕ್ರಿಯ ಹಸ್ತಾಂತರದಿಂದ ಬದಲಾಯಿಸಲ್ಪಟ್ಟದ್ದು. Approval boundary: agent ಏಕಾಂಗಿಯಾಗಿ ಮಾಡಬಾರದ ಕ್ರಿಯೆಗಳು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) A teammate commit and a branch switch were both detected. 2) A dirty tree alone was not. 3) Writing in place destroyed the old handoff and temp-plus-replace kept it. 4) A stale publisher was refused and then superseded explicitly. 5) Keywords flagged two risky actions and are only a safety net.",
    "bodyKn": "1) ಸಹೋದ್ಯೋಗಿ commit ಮತ್ತು branch ಬದಲಾವಣೆ ಎರಡೂ ಪತ್ತೆಯಾದವು. 2) ಕೇವಲ ಕೊಳಕು ಮರ ಪತ್ತೆಯಾಗಲಿಲ್ಲ. 3) ಸ್ಥಳದಲ್ಲೇ ಬರಹ ಹಳೆಯ ಹಸ್ತಾಂತರ ನಾಶಮಾಡಿ temp-ಜೊತೆ-ಬದಲಿ ಅದನ್ನು ಉಳಿಸಿತು. 4) ಹಳೆಯ ಪ್ರಕಾಶಕ ನಿರಾಕರಿಸಲ್ಪಟ್ಟು ನಂತರ ಸ್ಪಷ್ಟವಾಗಿ supersede ಆಯಿತು. 5) Keywords ಎರಡು ಅಪಾಯಕಾರಿ ಕ್ರಿಯೆ ಗುರುತಿಸಿದವು ಮತ್ತು ಕೇವಲ ಸುರಕ್ಷತಾ ಬಲೆ."
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
    "bodyEn": "1) Open a terminal in pneuronics-backend/lesson-defs/labs. 2) Run: python -B ms_3.py (in Git Bash on Windows: PYTHONIOENCODING=utf-8 python -B ms_3.py). 3) Compare each section with the walkthrough above. The -B flag stops Python from writing __pycache__ folders.",
    "bodyKn": "1) pneuronics-backend/lesson-defs/labs ನಲ್ಲಿ ಟರ್ಮಿನಲ್ ತೆರೆಯಿರಿ. 2) ಓಡಿಸಿ: python -B ms_3.py (Windows Git Bash ನಲ್ಲಿ: PYTHONIOENCODING=utf-8 python -B ms_3.py). 3) ಪ್ರತಿ ವಿಭಾಗವನ್ನು ಮೇಲಿನ ನಡೆದಾಟಕ್ಕೆ ಹೋಲಿಸಿ. -B ಧ್ವಜ Python __pycache__ ಫೋಲ್ಡರ್‌ಗಳನ್ನು ಬರೆಯುವುದನ್ನು ತಡೆಯುತ್ತದೆ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What did the identity check report after an uncommitted edit?",
      "qKn": "ಉಳಿಸದ ಸಂಪಾದನೆಯ ನಂತರ ಗುರುತು ಪರಿಶೀಲನೆ ಏನು ವರದಿ ಮಾಡಿತು?",
      "opts": [
       "dirty true, branch and commit unchanged",
       "branch changed",
       "commit changed",
       "nothing at all"
      ],
      "optsKn": [
       "dirty true, branch ಮತ್ತು commit ಬದಲಾಗಿಲ್ಲ",
       "branch ಬದಲಾಯಿತು",
       "commit ಬದಲಾಯಿತು",
       "ಏನೂ ಇಲ್ಲ"
      ],
      "correct": 0
     },
     {
      "q": "What happened to the old handoff when the write went straight over the published file and was cut short?",
      "qKn": "ಬರಹ ನೇರವಾಗಿ ಪ್ರಕಟಿತ ಫೈಲ್ ಮೇಲೆ ಹೋಗಿ ಮೊಟಕುಗೊಂಡಾಗ ಹಳೆಯ ಹಸ್ತಾಂತರಕ್ಕೆ ಏನಾಯಿತು?",
      "opts": [
       "It was lost",
       "It was kept",
       "It was signed",
       "It was merged"
      ],
      "optsKn": [
       "ಕಳೆದುಹೋಯಿತು",
       "ಉಳಿಯಿತು",
       "ಸಹಿ ಮಾಡಲಾಯಿತು",
       "ವಿಲೀನವಾಯಿತು"
      ],
      "correct": 0
     },
     {
      "q": "Why was agent B first refused?",
      "qKn": "agent B ಅನ್ನು ಮೊದಲು ಏಕೆ ನಿರಾಕರಿಸಲಾಯಿತು?",
      "opts": [
       "Its view of the active handoff was stale",
       "It had no next action",
       "The branch changed",
       "The file was torn"
      ],
      "optsKn": [
       "ಸಕ್ರಿಯ ಹಸ್ತಾಂತರದ ಅದರ ನೋಟ ಹಳೆಯದಾಗಿತ್ತು",
       "ಅದಕ್ಕೆ next action ಇರಲಿಲ್ಲ",
       "branch ಬದಲಾಯಿತು",
       "ಫೈಲ್ ಹರಿದಿತ್ತು"
      ],
      "correct": 0
     },
     {
      "q": "What was the superseded list after B published on top of A?",
      "qKn": "B A ಮೇಲೆ ಪ್ರಕಟಿಸಿದ ನಂತರ superseded ಪಟ್ಟಿ ಏನಾಗಿತ್ತು?",
      "opts": [
       "[h-A]",
       "[]",
       "[h-B]",
       "[h-A, h-B]"
      ],
      "optsKn": [
       "[h-A]",
       "[]",
       "[h-B]",
       "[h-A, h-B]"
      ],
      "correct": 0
     },
     {
      "q": "Which next action did the keyword list not flag?",
      "qKn": "keyword ಪಟ್ಟಿ ಯಾವ next action ಅನ್ನು ಗುರುತಿಸಲಿಲ್ಲ?",
      "opts": [
       "Run the payment test.",
       "Deploy to production and run migrations.",
       "Delete the old branch.",
       "All were flagged"
      ],
      "optsKn": [
       "payment ಪರೀಕ್ಷೆ ಓಡಿಸಿ.",
       "production ಗೆ ನಿಯೋಜಿಸಿ ಮತ್ತು migrations ಓಡಿಸಿ.",
       "ಹಳೆಯ branch ಅಳಿಸಿ.",
       "ಎಲ್ಲವೂ ಗುರುತಿಸಲ್ಪಟ್ಟವು"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
