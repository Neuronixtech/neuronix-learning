module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6266020ed05b32157a",
 "order": 2,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Runtime Feedback Loops (Part 3 of 3) — Rotation, Retry Chains and the Gate",
 "titleKn": "Runtime ಪ್ರತಿಕ್ರಿಯೆ ಲೂಪ್‌ಗಳು (ಭಾಗ 3 / 3) — Rotation, ಮರುಪ್ರಯತ್ನ ಸರಪಳಿಗಳು ಮತ್ತು Gate",
 "desc": "Rotate a JSONL log, rebuild retry chains from parent ids, gate on fresh evidence and watch a scripted repair loop meet a stale-cache failure.",
 "descKn": "JSONL ಲಾಗ್ rotate ಮಾಡಿ, parent ids ನಿಂದ ಮರುಪ್ರಯತ್ನ ಸರಪಳಿ ಮರುನಿರ್ಮಿಸಿ, ಹೊಸ ಸಾಕ್ಷ್ಯದ ಮೇಲೆ gate ಮಾಡಿ ಮತ್ತು ಸ್ಕ್ರಿಪ್ಟ್ ದುರಸ್ತಿ ಲೂಪ್ ಹಳೆಯ-ಕ್ಯಾಶ್ ವೈಫಲ್ಯ ಎದುರಿಸುವುದನ್ನು ನೋಡಿ.",
 "objectives": [
  "Rotate a log by size.",
  "Read a log with a torn last line.",
  "Rebuild a retry chain.",
  "Gate on fresh evidence.",
  "Control caches when verifying a fix."
 ],
 "objectivesKn": [
  "ಲಾಗ್ ಅನ್ನು ಗಾತ್ರದಿಂದ rotate ಮಾಡಿ.",
  "ಹರಿದ ಕೊನೆಯ ಸಾಲಿರುವ ಲಾಗ್ ಓದಿ.",
  "ಮರುಪ್ರಯತ್ನ ಸರಪಳಿ ಮರುನಿರ್ಮಿಸಿ.",
  "ಹೊಸ ಸಾಕ್ಷ್ಯದ ಮೇಲೆ gate ಮಾಡಿ.",
  "ಸರಿಪಡಿಕೆ ಪರಿಶೀಲಿಸುವಾಗ ಕ್ಯಾಶ್‌ಗಳನ್ನು ನಿಯಂತ್ರಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Runtime Feedback Loops (Part 3 of 3)",
    "textKn": "Runtime ಪ್ರತಿಕ್ರಿಯೆ ಲೂಪ್‌ಗಳು (ಭಾಗ 3 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 3 of 3: JSONL rotation, retry chains by parent id, a verification gate over records and a scripted failure-and-repair run on real code. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind runtime feedback loops (execution records, bounded output, redaction, rotation, retry chains and verification gates), not the real software, and the commands are real processes run on this machine and any agent step is a scripted stand-in, with no language model involved, so no real LLM behaviour is measured. The pasted Part 3 was cut off at Section 21 (integration with agent frameworks), so everything after that point is not covered; the sections before it describe tests, retry chains, the gate and the failure-and-repair workflow, and the lab is our own implementation of them. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 3ನೆಯದು: JSONL rotation, parent id ಮೂಲಕ ಮರುಪ್ರಯತ್ನ ಸರಪಳಿಗಳು, ದಾಖಲೆಗಳ ಮೇಲಿನ ಪರಿಶೀಲನಾ gate ಮತ್ತು ನಿಜ ಕೋಡ್ ಮೇಲೆ ಸ್ಕ್ರಿಪ್ಟ್ ಮಾಡಿದ ವೈಫಲ್ಯ-ಮತ್ತು-ದುರಸ್ತಿ ಓಟ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು runtime ಪ್ರತಿಕ್ರಿಯೆ ಲೂಪ್‌ಗಳು (ಕಾರ್ಯಗತ ದಾಖಲೆಗಳು, ಮಿತಿಯ ಔಟ್‌ಪುಟ್, ಮರೆಮಾಚುವಿಕೆ, rotation, ಮರುಪ್ರಯತ್ನ ಸರಪಳಿಗಳು ಮತ್ತು ಪರಿಶೀಲನಾ gates) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಆದೇಶಗಳು ಈ ಯಂತ್ರದಲ್ಲಿ ಓಡುವ ನಿಜ processes ಮತ್ತು ಯಾವುದೇ agent ಹಂತ ಸ್ಕ್ರಿಪ್ಟ್ ಮಾಡಿದ ಬದಲಿ, ಭಾಷಾ ಮಾದರಿ ಇಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಅಂಟಿಸಿದ ಭಾಗ 3 ವಿಭಾಗ 21 ರಲ್ಲಿ (agent frameworks ಜೊತೆ ಏಕೀಕರಣ) ಕತ್ತರಿಸಲ್ಪಟ್ಟಿತ್ತು, ಆದ್ದರಿಂದ ಆ ಬಿಂದುವಿನ ನಂತರದ್ದು ಒಳಗೊಂಡಿಲ್ಲ; ಅದಕ್ಕೂ ಮೊದಲಿನ ವಿಭಾಗಗಳು ಪರೀಕ್ಷೆಗಳು, ಮರುಪ್ರಯತ್ನ ಸರಪಳಿಗಳು, gate ಮತ್ತು ವೈಫಲ್ಯ-ಮತ್ತು-ದುರಸ್ತಿ ಕೆಲಸದ ಹರಿವನ್ನು ವಿವರಿಸುತ್ತವೆ, ಮತ್ತು ಲ್ಯಾಬ್ ಅವುಗಳ ನಮ್ಮದೇ ಅನುಷ್ಠಾನ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "From Records to Decisions",
    "textKn": "ದಾಖಲೆಗಳಿಂದ ನಿರ್ಧಾರಗಳಿಗೆ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Rotation, Lineage, a Gate and a Repair Loop",
    "headingKn": "Rotation, ವಂಶಾವಳಿ, Gate ಮತ್ತು ದುರಸ್ತಿ ಲೂಪ್",
    "bodyEn": "Records are only useful if they stay bounded, stay readable and can be tied together. This part rotates a JSONL log by size, reads it despite a damaged last line, follows parent_command_id back through retries and gates a change on a fresh record with exit code 0. It ends with a scripted failure-and-repair run on real code, where the correct one-line fix was still reported as failing; the lab shows why and what removed the problem.",
    "bodyKn": "ದಾಖಲೆಗಳು ಮಿತಿಯಲ್ಲಿದ್ದು, ಓದಬಹುದಾಗಿದ್ದು, ಒಟ್ಟಿಗೆ ಜೋಡಿಸಬಹುದಾದರೆ ಮಾತ್ರ ಉಪಯುಕ್ತ. ಈ ಭಾಗ JSONL ಲಾಗ್ ಅನ್ನು ಗಾತ್ರದಿಂದ rotate ಮಾಡಿ, ಹಾಳಾದ ಕೊನೆಯ ಸಾಲಿದ್ದರೂ ಓದಿ, parent_command_id ಅನ್ನು ಮರುಪ್ರಯತ್ನಗಳ ಮೂಲಕ ಹಿಂಬಾಲಿಸಿ, ಬದಲಾವಣೆಯನ್ನು exit code 0 ಇರುವ ಹೊಸ ದಾಖಲೆಯ ಮೇಲೆ gate ಮಾಡುತ್ತದೆ. ಇದು ನಿಜ ಕೋಡ್ ಮೇಲೆ ಸ್ಕ್ರಿಪ್ಟ್ ಮಾಡಿದ ವೈಫಲ್ಯ-ಮತ್ತು-ದುರಸ್ತಿ ಓಟದೊಂದಿಗೆ ಕೊನೆಗೊಳ್ಳುತ್ತದೆ, ಅಲ್ಲಿ ಸರಿಯಾದ ಒಂದು-ಸಾಲಿನ ಸರಿಪಡಿಕೆ ಇನ್ನೂ ವಿಫಲ ಎಂದು ವರದಿಯಾಯಿತು; ಲ್ಯಾಬ್ ಏಕೆ ಮತ್ತು ಏನು ಸಮಸ್ಯೆ ಹೋಗಲಾಡಿಸಿತು ಎಂದು ತೋರಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Records Feed a Gate",
    "headingKn": "ದಾಖಲೆಗಳು Gate ಗೆ ಆಹಾರ",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">Records feed a gate</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">rotation</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">bounded log</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">retry chain</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">parent ids</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">gate</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">fresh, exit 0</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">repair loop</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">verified by rerun</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">real evidence can still be stale</text></svg>",
    "captionEn": "A real record can still be stale.",
    "captionKn": "ನಿಜ ದಾಖಲೆ ಇನ್ನೂ ಹಳೆಯದಾಗಿರಬಹುದು."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Gate verdicts over records",
    "headingKn": "ದಾಖಲೆಗಳ ಮೇಲಿನ Gate ತೀರ್ಪುಗಳು",
    "headers": [
     "Situation",
     "Verdict",
     "Reason"
    ],
    "rows": [
     [
      "no record for the command",
      "BLOCK",
      "nothing to check"
     ],
     [
      "fresh record, exit 0",
      "ALLOW",
      "evidence supports the claim"
     ],
     [
      "record older than the latest edit",
      "BLOCK",
      "it describes older code"
     ],
     [
      "record with non-zero exit",
      "BLOCK",
      "the command failed"
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
    "filename": "fl_3.py",
    "headingEn": "run, rotation, chain and gate",
    "headingKn": "run, rotation, chain ಮತ್ತು gate",
    "descEn": "run adds a command_id and parent_command_id to each record. append_rotating renames the live file to numbered backups when it would exceed a size limit and drops the oldest. chain follows parent ids back from the last attempt. gate refuses a missing, stale or failing record.",
    "descKn": "run ಪ್ರತಿ ದಾಖಲೆಗೆ command_id ಮತ್ತು parent_command_id ಸೇರಿಸುತ್ತದೆ. append_rotating ಗಾತ್ರ ಮಿತಿ ಮೀರುವಾಗ ಲೈವ್ ಫೈಲ್ ಅನ್ನು ಸಂಖ್ಯೆಯ ಬ್ಯಾಕಪ್‌ಗಳಿಗೆ ಮರುಹೆಸರಿಸಿ ಹಳೆಯದನ್ನು ಬಿಡುತ್ತದೆ. chain ಕೊನೆಯ ಪ್ರಯತ್ನದಿಂದ parent ids ಹಿಂಬಾಲಿಸುತ್ತದೆ. gate ಕಾಣೆಯಾದ, ಹಳೆಯ ಅಥವಾ ವಿಫಲ ದಾಖಲೆ ನಿರಾಕರಿಸುತ್ತದೆ.",
    "code": "def run(command, cwd, parent=None, timeout=60):\n    t0 = time.time()\n    p = subprocess.run(command, capture_output=True, text=True, cwd=cwd, timeout=timeout)\n    return {\"command_id\": uuid.uuid4().hex[:8], \"parent_command_id\": parent, \"command\": command, \"exit_code\": p.returncode, \"stdout\": p.stdout[-300:], \"stderr\": p.stderr[-300:],\n            \"finished_at\": time.time(), \"duration_ms\": round((time.time() - t0) * 1000)}\n\n\ndef append_rotating(path, record, max_bytes=400, keep=3):\n    path = Path(path)\n    line = json.dumps(record) + chr(10)\n    if path.exists() and path.stat().st_size + len(line.encode(\"utf-8\")) > max_bytes:\n        for i in range(keep, 0, -1):\n            src = path if i == 1 else path.with_name(f\"{path.name}.{i - 1}\")\n            dst = path.with_name(f\"{path.name}.{i}\")\n            if src.exists():\n                if dst.exists():\n                    dst.unlink()\n                src.rename(dst)\n    with open(path, \"a\", encoding=\"utf-8\") as f:\n        f.write(line)\n\n\ndef read_records(path):\n    good, bad = [], 0\n    for ln in Path(path).read_text(encoding=\"utf-8\").splitlines():\n        try:\n            good.append(json.loads(ln))\n        except json.JSONDecodeError:\n            bad += 1\n    return good, bad\n\n\ndef chain(records, last_id):\n    by_id = {r[\"command_id\"]: r for r in records}\n    out, cur = [], by_id.get(last_id)\n    while cur:\n        out.append(cur[\"command_id\"])\n        cur = by_id.get(cur[\"parent_command_id\"])\n    return list(reversed(out))\n\n\ndef gate(records, expected_command, newest_edit_time):\n    matching = [r for r in records if r[\"command\"] == expected_command]\n    if not matching:\n        return \"BLOCK\", \"no record for the required command\"\n    last = matching[-1]\n    if last[\"finished_at\"] < newest_edit_time:\n        return \"BLOCK\", \"the record is older than the latest edit\"\n    if last[\"exit_code\"] != 0:\n        return \"BLOCK\", f\"exit code {last['exit_code']}\"\n    return \"ALLOW\", \"fresh record with exit code 0\""
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "fl_3.py",
    "headingEn": "main(): five experiments",
    "headingKn": "main(): ಐದು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() writes twenty records through a 400-byte rotating log, appends a half-written line and reads the file, builds a three-attempt retry chain plus an unrelated command, gates three situations and runs a failing test, applies a one-character fix and reruns, with and without clearing the bytecode cache.",
    "descKn": "main() ಇಪ್ಪತ್ತು ದಾಖಲೆಗಳನ್ನು 400-ಬೈಟ್ rotating ಲಾಗ್ ಮೂಲಕ ಬರೆದು, ಅರ್ಧ ಬರೆದ ಸಾಲು ಸೇರಿಸಿ ಫೈಲ್ ಓದಿ, ಮೂರು-ಪ್ರಯತ್ನದ ಮರುಪ್ರಯತ್ನ ಸರಪಳಿ ಮತ್ತು ಸಂಬಂಧವಿಲ್ಲದ ಆದೇಶ ನಿರ್ಮಿಸಿ, ಮೂರು ಸಂದರ್ಭಗಳನ್ನು gate ಮಾಡಿ, ವಿಫಲ ಪರೀಕ್ಷೆ ಓಡಿಸಿ, ಒಂದು-ಅಕ್ಷರ ಸರಿಪಡಿಕೆ ಅನ್ವಯಿಸಿ ಬೈಟ್‌ಕೋಡ್ ಕ್ಯಾಶ್ ತೆರವಿನೊಂದಿಗೆ ಮತ್ತು ಇಲ್ಲದೆ ಮರುಓಡಿಸುತ್ತದೆ.",
    "code": "def main():\n    with tempfile.TemporaryDirectory() as d:\n        base = Path(d)\n\n        section(\"1. Genuinely running: rotation bounds the log\")\n        log = base / \"feedback_record.jsonl\"\n        for i in range(20):\n            append_rotating(log, {\"i\": i, \"pad\": \"x\" * 60})\n        files = sorted(p.name for p in base.glob(\"feedback_record.jsonl*\"))\n        counts = {n: len((base / n).read_text(encoding=\"utf-8\").splitlines()) for n in files}\n        print(\"files:\", files)\n        print(\"records per file:\", counts, \"| total kept:\", sum(counts.values()), \"of 20 written\")\n        print(\"the newest records stayed in the live file and the oldest were dropped when the backups ran out, so storage is bounded; the dropped records are gone for good, and anything that must be kept longer needs separate retention\")\n\n        section(\"2. Genuinely running: a partial last line and the reader\")\n        with open(log, \"a\", encoding=\"utf-8\") as f:\n            f.write('{\"i\": 99, \"pad\": \"tru')\n        good, bad = read_records(log)\n        print(\"readable records:\", len(good), \"| damaged lines skipped and counted:\", bad)\n        print(\"a crash in the middle of an append left a broken last line; the reader kept every complete record in the live file and reported one damaged line instead of failing on the whole file\")\n\n        section(\"3. Genuinely running: command_id and parent_command_id rebuild a retry history\")\n        proj = base / \"proj\"\n        proj.mkdir()\n        (proj / \"m.py\").write_text(\"print(1)\" + chr(10), encoding=\"utf-8\")\n        a = run([PY, \"-c\", \"import sys; sys.exit(1)\"], proj)\n        b = run([PY, \"-c\", \"import sys; sys.exit(1)\"], proj, parent=a[\"command_id\"])\n        c = run([PY, \"-c\", \"print('ok')\"], proj, parent=b[\"command_id\"])\n        other = run([PY, \"-c\", \"print('unrelated')\"], proj)\n        recs = [a, b, c, other]\n        print(\"attempt exit codes:\", [r[\"exit_code\"] for r in (a, b, c)])\n        print(\"chain for the last attempt:\", [recs.index(next(r for r in recs if r[\"command_id\"] == i)) for i in chain(recs, c[\"command_id\"])], \"of\", len(recs), \"records; the unrelated command is not in it:\", other[\"command_id\"] not in chain(recs, c[\"command_id\"]))\n        print(\"following parents from the last attempt recovered the two failures and the success in order, without mixing in an unrelated command, which is what a reviewer needs to see that the pass came after two failures\")\n\n        section(\"4. Genuinely running: the gate over records, including missing and stale evidence\")\n        test_cmd = [PY, \"-m\", \"unittest\", \"discover\", \"-s\", \"tests\"]\n        (proj / \"tests\").mkdir()\n        (proj / \"tests\" / \"test_m.py\").write_text(\"import unittest\" + chr(10) + \"class T(unittest.TestCase):\" + chr(10) + \"    def test_a(self):\" + chr(10) + \"        self.assertTrue(True)\" + chr(10), encoding=\"utf-8\")\n        edit_time = time.time()\n        print(\"no record yet:\", gate([], test_cmd, edit_time))\n        time.sleep(0.05)\n        r = run([PY, \"-I\", \"-m\", \"unittest\", \"discover\", \"-s\", \"tests\"], proj)\n        gated = [dict(r, command=test_cmd)]\n        print(\"record from -I run labelled with the required command:\", gate(gated, test_cmd, edit_time))\n        later_edit = time.time() + 1\n        print(\"same record after a later edit:\", gate(gated, test_cmd, later_edit))\n        print(\"the gate refused a missing record, accepted a fresh zero exit and refused the same record once the code had changed after it ran; a command that passed before the last edit says nothing about the code now (this lab relabelled the record to keep the gate simple, which a real runner must not do)\")\n\n        section(\"5. Genuinely running: a scripted failure and repair on real code\")\n        work = base / \"discount\"\n        (work / \"tests\").mkdir(parents=True)\n        (work / \"calc.py\").write_text(\"def discount(price, pct):\" + chr(10) + \"    return price + price * pct / 100\" + chr(10), encoding=\"utf-8\")\n        (work / \"tests\" / \"test_calc.py\").write_text(\"import unittest, sys, os\" + chr(10) + \"sys.path.insert(0, os.getcwd())\" + chr(10) + \"from calc import discount\" + chr(10) + \"class T(unittest.TestCase):\" + chr(10) + \"    def test_ten_percent(self):\" + chr(10) + \"        self.assertEqual(discount(200, 10), 180)\" + chr(10), encoding=\"utf-8\")\n        cmd = [PY, \"-I\", \"-m\", \"unittest\", \"discover\", \"-s\", \"tests\"]\n        first = run(cmd, work)\n        print(\"first run: exit\", first[\"exit_code\"], \"| evidence:\", [x for x in first[\"stderr\"].splitlines() if \"AssertionError\" in x])\n        text = (work / \"calc.py\").read_text(encoding=\"utf-8\")\n        (work / \"calc.py\").write_text(text.replace(\"price + price\", \"price - price\"), encoding=\"utf-8\")\n        second = run(cmd, work, parent=first[\"command_id\"])\n        print(\"after the scripted fix: exit\", second[\"exit_code\"], \"| evidence:\", [x for x in second[\"stderr\"].splitlines() if \"AssertionError\" in x] or \"none\", \"| parent is the first run:\", second[\"parent_command_id\"] == first[\"command_id\"])\n        import shutil\n        shutil.rmtree(work / \"__pycache__\", ignore_errors=True)\n        third = run(cmd, work, parent=second[\"command_id\"])\n        print(\"after deleting __pycache__: exit\", third[\"exit_code\"], \"| chain:\", [first[\"exit_code\"], second[\"exit_code\"], third[\"exit_code\"]])\n        print(\"the correct one-character edit still failed with the old assertion value when the test was rerun immediately, which is consistent with stale cached bytecode (the edit kept the file size and landed in the same second; the cause was not inspected directly), and it passed once __pycache__ was removed; on this machine, in three repeated runs, this happened every time; the evidence was real but stale, so a feedback runner should disable or clear bytecode caches when it verifies a change; the stand-in applied one fixed edit, so this shows loop mechanics and not that a real model could find the fix\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: rotation bounds the log ---\nfiles: ['feedback_record.jsonl', 'feedback_record.jsonl.1', 'feedback_record.jsonl.2', 'feedback_record.jsonl.3']\nrecords per file: {'feedback_record.jsonl': 4, 'feedback_record.jsonl.1': 4, 'feedback_record.jsonl.2': 4, 'feedback_record.jsonl.3': 4} | total kept: 16 of 20 written\nthe newest records stayed in the live file and the oldest were dropped when the backups ran out, so storage is bounded; the dropped records are gone for good, and anything that must be kept longer needs separate retention\n\n--- 2. Genuinely running: a partial last line and the reader ---\nreadable records: 4 | damaged lines skipped and counted: 1\na crash in the middle of an append left a broken last line; the reader kept every complete record in the live file and reported one damaged line instead of failing on the whole file\n\n--- 3. Genuinely running: command_id and parent_command_id rebuild a retry history ---\nattempt exit codes: [1, 1, 0]\nchain for the last attempt: [0, 1, 2] of 4 records; the unrelated command is not in it: True\nfollowing parents from the last attempt recovered the two failures and the success in order, without mixing in an unrelated command, which is what a reviewer needs to see that the pass came after two failures\n\n--- 4. Genuinely running: the gate over records, including missing and stale evidence ---\nno record yet: ('BLOCK', 'no record for the required command')\nrecord from -I run labelled with the required command: ('ALLOW', 'fresh record with exit code 0')\nsame record after a later edit: ('BLOCK', 'the record is older than the latest edit')\nthe gate refused a missing record, accepted a fresh zero exit and refused the same record once the code had changed after it ran; a command that passed before the last edit says nothing about the code now (this lab relabelled the record to keep the gate simple, which a real runner must not do)\n\n--- 5. Genuinely running: a scripted failure and repair on real code ---\nfirst run: exit 1 | evidence: ['AssertionError: 220.0 != 180']\nafter the scripted fix: exit 0 | evidence: none | parent is the first run: True\nafter deleting __pycache__: exit 0 | chain: [1, 0, 0]\nthe correct one-character edit still failed with the old assertion value when the test was rerun immediately, which is consistent with stale cached bytecode (the edit kept the file size and landed in the same second; the cause was not inspected directly), and it passed once __pycache__ was removed; on this machine, in three repeated runs, this happened every time; the evidence was real but stale, so a feedback runner should disable or clear bytecode caches when it verifies a change; the stand-in applied one fixed edit, so this shows loop mechanics and not that a real model could find the fix"
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
    "headingEn": "Genuinely Found: Rotation Drops Old Records and the Reader Survives a Torn Line",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Rotation ಹಳೆಯ ದಾಖಲೆಗಳನ್ನು ಬಿಡುತ್ತದೆ ಮತ್ತು ಓದುಗ ಹರಿದ ಸಾಲನ್ನು ಬದುಕುತ್ತಾನೆ",
    "bodyEn": "Section 1: twenty records written with four per file ended in four files (live plus three backups) holding 16 records, so four were dropped. Section 2: after a half-written last line the reader returned the 4 complete records in the live file and counted 1 damaged line. Section 3: the chain from the last attempt returned the three linked attempts (exit codes 1, 1, 0) and excluded an unrelated command.",
    "bodyKn": "ವಿಭಾಗ 1: ಪ್ರತಿ ಫೈಲ್‌ಗೆ ನಾಲ್ಕರಂತೆ ಬರೆದ ಇಪ್ಪತ್ತು ದಾಖಲೆಗಳು 16 ದಾಖಲೆ ಹೊಂದಿರುವ ನಾಲ್ಕು ಫೈಲ್‌ಗಳಲ್ಲಿ (ಲೈವ್ ಮತ್ತು ಮೂರು ಬ್ಯಾಕಪ್) ಕೊನೆಗೊಂಡವು, ಆದ್ದರಿಂದ ನಾಲ್ಕು ಕೈಬಿಡಲ್ಪಟ್ಟವು. ವಿಭಾಗ 2: ಅರ್ಧ ಬರೆದ ಕೊನೆಯ ಸಾಲಿನ ನಂತರ ಓದುಗ ಲೈವ್ ಫೈಲ್‌ನ 4 ಪೂರ್ಣ ದಾಖಲೆ ಮರಳಿಸಿ 1 ಹಾಳಾದ ಸಾಲು ಎಣಿಸಿತು. ವಿಭಾಗ 3: ಕೊನೆಯ ಪ್ರಯತ್ನದಿಂದ chain ಮೂರು ಜೋಡಿತ ಪ್ರಯತ್ನಗಳನ್ನು (exit codes 1, 1, 0) ಮರಳಿಸಿ ಸಂಬಂಧವಿಲ್ಲದ ಆದೇಶ ಹೊರಗಿಟ್ಟಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: A Gate Needs Fresh Evidence, and a Correct Fix Still Failed Once",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Gate ಗೆ ಹೊಸ ಸಾಕ್ಷ್ಯ ಬೇಕು, ಮತ್ತು ಸರಿಯಾದ ಸರಿಪಡಿಕೆ ಒಮ್ಮೆ ಇನ್ನೂ ವಿಫಲವಾಯಿತು",
    "bodyEn": "Section 4: the gate blocked with no record, allowed a fresh record with exit 0 and blocked the same record after a later edit; the lab relabelled one record to the required command to keep the gate simple, which a real runner must not do. Section 5: the first run failed with AssertionError 220.0 != 180; the scripted one-character fix was applied and the immediate rerun still failed with the same assertion; after deleting __pycache__ the third run exited 0, and the same sequence repeated in three further runs on this machine. This is consistent with stale cached bytecode, but the cause was not inspected directly.",
    "bodyKn": "ವಿಭಾಗ 4: gate ದಾಖಲೆ ಇಲ್ಲದಾಗ ತಡೆಯಿತು, exit 0 ಇರುವ ಹೊಸ ದಾಖಲೆಯನ್ನು ಅನುಮತಿಸಿತು ಮತ್ತು ನಂತರದ ಸಂಪಾದನೆಯ ನಂತರ ಅದೇ ದಾಖಲೆಯನ್ನು ತಡೆಯಿತು; gate ಸರಳವಾಗಿಡಲು ಲ್ಯಾಬ್ ಒಂದು ದಾಖಲೆಯನ್ನು ಅಗತ್ಯ ಆದೇಶಕ್ಕೆ ಮರುಲೇಬಲ್ ಮಾಡಿತು, ನಿಜ runner ಇದನ್ನು ಮಾಡಬಾರದು. ವಿಭಾಗ 5: ಮೊದಲ ಓಟ AssertionError 220.0 != 180 ನೊಂದಿಗೆ ವಿಫಲವಾಯಿತು; ಸ್ಕ್ರಿಪ್ಟ್ ಮಾಡಿದ ಒಂದು-ಅಕ್ಷರ ಸರಿಪಡಿಕೆ ಅನ್ವಯಿಸಿ ತಕ್ಷಣದ ಮರುಓಟ ಅದೇ assertion ನೊಂದಿಗೆ ವಿಫಲವಾಯಿತು; __pycache__ ಅಳಿಸಿದ ನಂತರ ಮೂರನೇ ಓಟ 0 ನೊಂದಿಗೆ ನಿರ್ಗಮಿಸಿತು, ಮತ್ತು ಅದೇ ಅನುಕ್ರಮ ಈ ಯಂತ್ರದಲ್ಲಿ ಇನ್ನೂ ಮೂರು ಓಟಗಳಲ್ಲಿ ಪುನರಾವರ್ತನೆಯಾಯಿತು. ಇದು ಹಳೆಯ ಕ್ಯಾಶ್ ಬೈಟ್‌ಕೋಡ್‌ಗೆ ಹೊಂದುತ್ತದೆ, ಆದರೆ ಕಾರಣವನ್ನು ನೇರವಾಗಿ ಪರಿಶೀಲಿಸಲಿಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "Real evidence can still describe the wrong code, so a runner has to control freshness and caches, and the gate has to check that the record is newer than the last edit.",
    "bodyKn": "ನಿಜ ಸಾಕ್ಷ್ಯ ಇನ್ನೂ ತಪ್ಪು ಕೋಡ್ ವಿವರಿಸಬಹುದು, ಆದ್ದರಿಂದ runner ತಾಜಾತನ ಮತ್ತು ಕ್ಯಾಶ್‌ಗಳನ್ನು ನಿಯಂತ್ರಿಸಬೇಕು ಮತ್ತು gate ದಾಖಲೆ ಕೊನೆಯ ಸಂಪಾದನೆಗಿಂತ ಹೊಸದು ಎಂದು ಪರಿಶೀಲಿಸಬೇಕು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"the test ran after my edit, so it tested my edit.\" Here it reported the old assertion for a correct fix.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ನನ್ನ ಸಂಪಾದನೆಯ ನಂತರ ಪರೀಕ್ಷೆ ಓಡಿತು, ಆದ್ದರಿಂದ ಅದು ನನ್ನ ಸಂಪಾದನೆ ಪರೀಕ್ಷಿಸಿತು.\" ಇಲ್ಲಿ ಸರಿಯಾದ ಸರಿಪಡಿಕೆಗೆ ಅದು ಹಳೆಯ assertion ವರದಿ ಮಾಡಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Rotation: renaming a full log to a numbered backup. command_id: a unique id per record. parent_command_id: the id of the attempt this retries. Stale evidence: a record older than the change it is supposed to verify. Bytecode cache: compiled files kept in __pycache__.",
    "bodyKn": "Rotation: ತುಂಬಿದ ಲಾಗ್ ಅನ್ನು ಸಂಖ್ಯೆಯ ಬ್ಯಾಕಪ್‌ಗೆ ಮರುಹೆಸರಿಸುವುದು. command_id: ಪ್ರತಿ ದಾಖಲೆಗೆ ವಿಶಿಷ್ಟ id. parent_command_id: ಇದು ಮರುಪ್ರಯತ್ನಿಸುವ ಪ್ರಯತ್ನದ id. Stale evidence: ಅದು ಪರಿಶೀಲಿಸಬೇಕಾದ ಬದಲಾವಣೆಗಿಂತ ಹಳೆಯ ದಾಖಲೆ. Bytecode cache: __pycache__ ನಲ್ಲಿ ಇಡುವ ಕಂಪೈಲ್ ಫೈಲ್‌ಗಳು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) Rotation kept 16 of 20 records in four files. 2) A torn last line was skipped and counted. 3) Parent ids rebuilt the exit-code sequence 1, 1, 0 without the unrelated command. 4) The gate blocked missing and stale records. 5) A correct fix failed on immediate rerun and passed after clearing __pycache__.",
    "bodyKn": "1) Rotation ನಾಲ್ಕು ಫೈಲ್‌ಗಳಲ್ಲಿ 20 ರಲ್ಲಿ 16 ದಾಖಲೆ ಉಳಿಸಿತು. 2) ಹರಿದ ಕೊನೆಯ ಸಾಲು ಬಿಟ್ಟು ಎಣಿಸಲ್ಪಟ್ಟಿತು. 3) Parent ids ಸಂಬಂಧವಿಲ್ಲದ ಆದೇಶವಿಲ್ಲದೆ exit-code ಅನುಕ್ರಮ 1, 1, 0 ಮರುನಿರ್ಮಿಸಿದವು. 4) gate ಕಾಣೆಯಾದ ಮತ್ತು ಹಳೆಯ ದಾಖಲೆಗಳನ್ನು ತಡೆಯಿತು. 5) ಸರಿಯಾದ ಸರಿಪಡಿಕೆ ತಕ್ಷಣದ ಮರುಓಟದಲ್ಲಿ ವಿಫಲವಾಗಿ __pycache__ ತೆರವಿನ ನಂತರ ಪಾಸ್ ಆಯಿತು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "How many of the twenty records remained after rotation with three backups?",
      "qKn": "ಮೂರು ಬ್ಯಾಕಪ್‌ಗಳೊಂದಿಗೆ rotation ನಂತರ ಇಪ್ಪತ್ತು ದಾಖಲೆಗಳಲ್ಲಿ ಎಷ್ಟು ಉಳಿದವು?",
      "opts": [
       "16",
       "20",
       "4",
       "12"
      ],
      "optsKn": [
       "16",
       "20",
       "4",
       "12"
      ],
      "correct": 0
     },
     {
      "q": "What did the reader do with the half-written last line?",
      "qKn": "ಅರ್ಧ ಬರೆದ ಕೊನೆಯ ಸಾಲಿನೊಂದಿಗೆ ಓದುಗ ಏನು ಮಾಡಿತು?",
      "opts": [
       "Skipped it and counted it",
       "Crashed",
       "Repaired it",
       "Ignored the whole file"
      ],
      "optsKn": [
       "ಅದನ್ನು ಬಿಟ್ಟು ಎಣಿಸಿತು",
       "ಕ್ರ್ಯಾಶ್ ಆಯಿತು",
       "ಸರಿಪಡಿಸಿತು",
       "ಇಡೀ ಫೈಲ್ ನಿರ್ಲಕ್ಷಿಸಿತು"
      ],
      "correct": 0
     },
     {
      "q": "Which exit-code sequence did the retry chain show?",
      "qKn": "ಮರುಪ್ರಯತ್ನ ಸರಪಳಿ ಯಾವ exit-code ಅನುಕ್ರಮ ತೋರಿಸಿತು?",
      "opts": [
       "1, 1, 0",
       "0, 0, 0",
       "1, 0, 1",
       "2, 2, 2"
      ],
      "optsKn": [
       "1, 1, 0",
       "0, 0, 0",
       "1, 0, 1",
       "2, 2, 2"
      ],
      "correct": 0
     },
     {
      "q": "What verdict did the gate give for a record older than the latest edit?",
      "qKn": "ಕೊನೆಯ ಸಂಪಾದನೆಗಿಂತ ಹಳೆಯ ದಾಖಲೆಗೆ gate ಯಾವ ತೀರ್ಪು ನೀಡಿತು?",
      "opts": [
       "BLOCK",
       "ALLOW",
       "WARN",
       "None"
      ],
      "optsKn": [
       "BLOCK",
       "ALLOW",
       "WARN",
       "None"
      ],
      "correct": 0
     },
     {
      "q": "What happened when the correct one-character fix was tested immediately?",
      "qKn": "ಸರಿಯಾದ ಒಂದು-ಅಕ್ಷರ ಸರಿಪಡಿಕೆಯನ್ನು ತಕ್ಷಣ ಪರೀಕ್ಷಿಸಿದಾಗ ಏನಾಯಿತು?",
      "opts": [
       "It failed with the old assertion",
       "It passed",
       "It timed out",
       "It was skipped"
      ],
      "optsKn": [
       "ಹಳೆಯ assertion ನೊಂದಿಗೆ ವಿಫಲವಾಯಿತು",
       "ಪಾಸ್ ಆಯಿತು",
       "ಸಮಯ ಮೀರಿತು",
       "ಬಿಡಲಾಯಿತು"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
