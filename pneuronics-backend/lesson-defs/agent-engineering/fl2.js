module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6266020ed05b32157a",
 "order": 1,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Runtime Feedback Loops (Part 2 of 3) — Bounded Output and Redaction",
 "titleKn": "Runtime ಪ್ರತಿಕ್ರಿಯೆ ಲೂಪ್‌ಗಳು (ಭಾಗ 2 / 3) — ಮಿತಿಯ ಔಟ್‌ಪುಟ್ ಮತ್ತು ಮರೆಮಾಚುವಿಕೆ",
 "desc": "Truncate output deterministically, measure memory for capture versus bounded streaming and test what pattern redaction catches and misses.",
 "descKn": "ಔಟ್‌ಪುಟ್ ಅನ್ನು ನಿರ್ಣಾಯಕವಾಗಿ ಕತ್ತರಿಸಿ, capture ಮತ್ತು ಮಿತಿಯ streaming ಮೆಮೊರಿ ಅಳೆದು, ಮಾದರಿ ಮರೆಮಾಚುವಿಕೆ ಏನು ಹಿಡಿಯುತ್ತದೆ ಮತ್ತು ತಪ್ಪಿಸುತ್ತದೆ ಎಂದು ಪರೀಕ್ಷಿಸಿ.",
 "objectives": [
  "Truncate with head, tail and a marker.",
  "Limit bytes as well as lines.",
  "Bound memory while reading.",
  "Redact before persistence.",
  "Document redaction blind spots."
 ],
 "objectivesKn": [
  "head, tail ಮತ್ತು ಗುರುತಿನೊಂದಿಗೆ ಕತ್ತರಿಸಿ.",
  "ಸಾಲುಗಳ ಜೊತೆ ಬೈಟ್‌ಗಳನ್ನೂ ಮಿತಿಗೊಳಿಸಿ.",
  "ಓದುವಾಗ ಮೆಮೊರಿ ಮಿತಿಗೊಳಿಸಿ.",
  "ಉಳಿಸುವ ಮುನ್ನ ಮರೆಮಾಚಿ.",
  "ಮರೆಮಾಚುವಿಕೆಯ ಕುರುಡು ಬಿಂದುಗಳನ್ನು ದಾಖಲಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Runtime Feedback Loops (Part 2 of 3)",
    "textKn": "Runtime ಪ್ರತಿಕ್ರಿಯೆ ಲೂಪ್‌ಗಳು (ಭಾಗ 2 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 2 of 3: head-and-tail truncation, peak memory of capture versus bounded streaming and write-time secret redaction. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind runtime feedback loops (execution records, bounded output, redaction, rotation, retry chains and verification gates), not the real software, and the commands are real processes run on this machine and any agent step is a scripted stand-in, with no language model involved, so no real LLM behaviour is measured. The pasted lesson said its original main.py was not supplied, so the lab is our own implementation of the behaviour it describes; results depend on the machine it ran on. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 2ನೆಯದು: head-and-tail ಕತ್ತರಿಸುವಿಕೆ, ಸೆರೆಹಿಡಿಯುವಿಕೆ ಮತ್ತು ಮಿತಿಯ streaming ನ ಗರಿಷ್ಠ ಮೆಮೊರಿ ಹಾಗೂ ಬರೆಯುವ-ಸಮಯದ ರಹಸ್ಯ ಮರೆಮಾಚುವಿಕೆ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು runtime ಪ್ರತಿಕ್ರಿಯೆ ಲೂಪ್‌ಗಳು (ಕಾರ್ಯಗತ ದಾಖಲೆಗಳು, ಮಿತಿಯ ಔಟ್‌ಪುಟ್, ಮರೆಮಾಚುವಿಕೆ, rotation, ಮರುಪ್ರಯತ್ನ ಸರಪಳಿಗಳು ಮತ್ತು ಪರಿಶೀಲನಾ gates) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಆದೇಶಗಳು ಈ ಯಂತ್ರದಲ್ಲಿ ಓಡುವ ನಿಜ processes ಮತ್ತು ಯಾವುದೇ agent ಹಂತ ಸ್ಕ್ರಿಪ್ಟ್ ಮಾಡಿದ ಬದಲಿ, ಭಾಷಾ ಮಾದರಿ ಇಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಅಂಟಿಸಿದ lesson ತನ್ನ ಮೂಲ main.py ಒದಗಿಸಿಲ್ಲ ಎಂದು ಹೇಳಿತ್ತು, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್ ಅದು ವಿವರಿಸುವ ವರ್ತನೆಯ ನಮ್ಮದೇ ಅನುಷ್ಠಾನ; ಫಲಿತಾಂಶಗಳು ಅದು ಓಡಿದ ಯಂತ್ರವನ್ನು ಅವಲಂಬಿಸಿವೆ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Output Is Untrusted Size and Untrusted Content",
    "textKn": "ಔಟ್‌ಪುಟ್ ನಂಬಲಾಗದ ಗಾತ್ರ ಮತ್ತು ನಂಬಲಾಗದ ವಿಷಯ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Truncate Deterministically, Redact on Write",
    "headingKn": "ನಿರ್ಣಾಯಕವಾಗಿ ಕತ್ತರಿಸಿ, ಬರೆಯುವಾಗ ಮರೆಮಾಚಿ",
    "bodyEn": "A command can print megabytes and can print secrets. Keeping the first and last lines with a marker for the omitted ones is deterministic and bounded, but it can lose the one line that mattered and a line-based limit can be defeated by one long line. This part also measures peak Python memory for capture-then-truncate against a bounded streaming reader, tests which secret shapes a pattern redactor catches and misses, and checks that redaction has to happen before the record reaches disk.",
    "bodyKn": "ಆದೇಶ ಮೆಗಾಬೈಟ್‌ಗಳನ್ನು ಮುದ್ರಿಸಬಹುದು ಮತ್ತು ರಹಸ್ಯಗಳನ್ನೂ ಮುದ್ರಿಸಬಹುದು. ಮೊದಲ ಮತ್ತು ಕೊನೆಯ ಸಾಲುಗಳನ್ನು ಬಿಟ್ಟ ಸಾಲುಗಳ ಗುರುತಿನೊಂದಿಗೆ ಉಳಿಸುವುದು ನಿರ್ಣಾಯಕ ಮತ್ತು ಮಿತಿಯದು, ಆದರೆ ಮುಖ್ಯವಾದ ಒಂದು ಸಾಲನ್ನು ಕಳೆದುಕೊಳ್ಳಬಹುದು ಮತ್ತು ಸಾಲು-ಆಧಾರಿತ ಮಿತಿಯನ್ನು ಒಂದು ಉದ್ದ ಸಾಲು ಸೋಲಿಸಬಹುದು. ಈ ಭಾಗ capture-ನಂತರ-ಕತ್ತರಿಸುವುದಕ್ಕೆ ಮಿತಿಯ streaming ಓದುಗನ ವಿರುದ್ಧ ಗರಿಷ್ಠ Python ಮೆಮೊರಿ ಅಳೆದು, ಮಾದರಿ ಮರೆಮಾಚುವಿಕೆ ಯಾವ ರಹಸ್ಯ ಆಕಾರಗಳನ್ನು ಹಿಡಿಯುತ್ತದೆ ಮತ್ತು ತಪ್ಪಿಸುತ್ತದೆ ಎಂದು ಪರೀಕ್ಷಿಸಿ, ಮರೆಮಾಚುವಿಕೆ ದಾಖಲೆ ಡಿಸ್ಕ್ ತಲುಪುವ ಮುನ್ನ ನಡೆಯಬೇಕು ಎಂದು ಪರಿಶೀಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Bound Then Clean",
    "headingKn": "ಮಿತಿಗೊಳಿಸಿ ನಂತರ ಶುದ್ಧಗೊಳಿಸಿ",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">Bound it, then clean it</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">bounded read</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">head + tail</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">truncate</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">lines and bytes</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">redact</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">before writing</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">stored record</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">safe to keep</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">redaction by pattern is one layer</text></svg>",
    "captionEn": "Redact before the record is written.",
    "captionKn": "ದಾಖಲೆ ಬರೆಯುವ ಮುನ್ನ ಮರೆಮಾಚಿ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Limits and where they fail",
    "headingKn": "ಮಿತಿಗಳು ಮತ್ತು ಅವು ವಿಫಲವಾಗುವಲ್ಲಿ",
    "headers": [
     "Control",
     "Bounds",
     "Fails when"
    ],
    "rows": [
     [
      "line truncation",
      "number of lines kept",
      "one enormous line"
     ],
     [
      "capture then truncate",
      "what is stored",
      "memory during capture is unbounded"
     ],
     [
      "bounded streaming",
      "memory and storage",
      "the key line is in the dropped middle"
     ],
     [
      "pattern redaction",
      "known secret shapes",
      "the secret has another shape"
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
    "filename": "fl_2.py",
    "headingEn": "Truncation, bounded capture and redaction",
    "headingKn": "ಕತ್ತರಿಸುವಿಕೆ, ಮಿತಿಯ ಸೆರೆಹಿಡಿಯುವಿಕೆ ಮತ್ತು ಮರೆಮಾಚುವಿಕೆ",
    "descEn": "truncate_lines keeps a head and a tail with a marker for the omitted line count. BoundedCapture feeds chunks into a fixed head buffer and a sliding tail buffer, tracking the total. redact applies a list of regular expressions.",
    "descKn": "truncate_lines head ಮತ್ತು tail ಅನ್ನು ಬಿಟ್ಟ ಸಾಲುಗಳ ಎಣಿಕೆ ಗುರುತಿನೊಂದಿಗೆ ಉಳಿಸುತ್ತದೆ. BoundedCapture ತುಣುಕುಗಳನ್ನು ಸ್ಥಿರ head buffer ಮತ್ತು ಜಾರುವ tail buffer ಗೆ ನೀಡಿ ಒಟ್ಟು ಎಣಿಸುತ್ತದೆ. redact ಸಾಮಾನ್ಯ ಅಭಿವ್ಯಕ್ತಿಗಳ ಪಟ್ಟಿ ಅನ್ವಯಿಸುತ್ತದೆ.",
    "code": "def truncate_lines(text, head=5, tail=5):\n    lines = text.splitlines()\n    if len(lines) <= head + tail:\n        return text\n    omitted = len(lines) - head - tail\n    return chr(10).join(lines[:head] + [f\"...truncated {omitted} lines...\"] + lines[-tail:])\n\n\nclass BoundedCapture:\n    def __init__(self, head_limit=2000, tail_limit=2000):\n        self.head_limit, self.tail_limit = head_limit, tail_limit\n        self.head, self.tail, self.total = bytearray(), bytearray(), 0\n\n    def feed(self, chunk):\n        self.total += len(chunk)\n        room = self.head_limit - len(self.head)\n        if room > 0:\n            self.head += chunk[:room]\n            chunk = chunk[room:]\n        if chunk:\n            self.tail += chunk\n            if len(self.tail) > self.tail_limit:\n                del self.tail[: len(self.tail) - self.tail_limit]\n\n    def render(self):\n        kept = len(self.head) + len(self.tail)\n        mid = f\"{chr(10)}...truncated {self.total - kept} bytes...{chr(10)}\" if self.total > kept else \"\"\n        return self.head.decode(\"utf-8\", \"replace\") + mid + self.tail.decode(\"utf-8\", \"replace\")\n\n\nPATTERNS = [(re.compile(r\"(?i)\\bBearer\\s+\\S+\"), \"Bearer [REDACTED]\"), (re.compile(r\"(?i)\\bpassword\\s*=\\s*\\S+\"), \"password=[REDACTED]\"), (re.compile(r\"(?i)\\bapi_key\\s*=\\s*\\S+\"), \"api_key=[REDACTED]\")]\n\n\ndef redact(text):\n    for pat, rep in PATTERNS:\n        text = pat.sub(rep, text)\n    return text"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "fl_2.py",
    "headingEn": "main(): six experiments",
    "headingKn": "main(): ಆರು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() truncates a hundred lines, tries a five-million-character line, measures tracemalloc peaks for a child printing 20 MB, redacts four sample lines, tries five shapes of secret and compares a raw log with a redacted one.",
    "descKn": "main() ನೂರು ಸಾಲು ಕತ್ತರಿಸಿ, ಐದು ಮಿಲಿಯನ್ ಅಕ್ಷರದ ಸಾಲು ಪ್ರಯತ್ನಿಸಿ, 20 MB ಮುದ್ರಿಸುವ child ಗೆ tracemalloc ಗರಿಷ್ಠ ಅಳೆದು, ನಾಲ್ಕು ಮಾದರಿ ಸಾಲು ಮರೆಮಾಚಿ, ಐದು ರಹಸ್ಯ ಆಕಾರ ಪ್ರಯತ್ನಿಸಿ ಮತ್ತು ಕಚ್ಚಾ ಲಾಗ್ ಅನ್ನು ಮರೆಮಾಚಿದ ಲಾಗ್‌ಗೆ ಹೋಲಿಸುತ್ತದೆ.",
    "code": "def main():\n    py = sys.executable\n    section(\"1. Genuinely running: head and tail truncation, and what falls in the middle\")\n    out = chr(10).join(f\"Line {i}\" for i in range(1, 101))\n    t = truncate_lines(out)\n    print(t.replace(chr(10), \" | \"))\n    print(\"same input twice gives identical output:\", truncate_lines(out) == truncate_lines(out))\n    buried = chr(10).join(\"ERROR: the real cause\" if i == 50 else f\"Line {i}\" for i in range(1, 101))\n    print(\"line 50 survives truncation:\", \"ERROR: the real cause\" in truncate_lines(buried))\n    print(\"the output is deterministic and bounded, and the one line that mattered, buried in the middle, was dropped; head and tail help because tools usually print the summary last, but they cannot know which line is important\")\n\n    section(\"2. Genuinely measuring: line limits against one enormous line\")\n    one = \"x\" * 5_000_000\n    print(\"lines:\", len(one.splitlines()), \"| characters kept by truncate_lines:\", len(truncate_lines(one)))\n    print(\"a line-based limit kept all 5,000,000 characters because it counted one line; the limit has to be in bytes as well as lines\")\n\n    section(\"3. Genuinely measuring: peak memory, capture then truncate versus bounded streaming\")\n    child = \"import sys; [sys.stdout.write('y' * 99 + chr(10)) for _ in range(200000)]\"\n    tracemalloc.start()\n    p = subprocess.run([py, \"-c\", child], capture_output=True, text=True)\n    cur, peak_run = tracemalloc.get_traced_memory()\n    tracemalloc.stop()\n    kept_run = len(truncate_lines(p.stdout))\n    tracemalloc.start()\n    cap = BoundedCapture()\n    proc = subprocess.Popen([py, \"-c\", child], stdout=subprocess.PIPE)\n    while True:\n        chunk = proc.stdout.read(8192)\n        if not chunk:\n            break\n        cap.feed(chunk)\n    proc.wait()\n    cur2, peak_b = tracemalloc.get_traced_memory()\n    tracemalloc.stop()\n    print(f\"child printed {cap.total:,} bytes\")\n    print(f\"subprocess.run capture then truncate: peak traced {peak_run / 1e6:.1f} MB, kept {kept_run:,} characters\")\n    print(f\"bounded streaming capture           : peak traced {peak_b / 1e6:.2f} MB, kept {len(cap.render()):,} characters, stdout fully drained: {proc.returncode == 0}\")\n    print(\"truncating after capture limited what was stored but not what was held while the output arrived, whereas the bounded reader kept memory near its limits; these are Python-allocation peaks from tracemalloc, not operating-system memory\")\n\n    section(\"4. Genuinely running: redaction patterns on sample text with made-up secrets\")\n    sample = chr(10).join([\"Authorization: Bearer abc123\", \"password=secret123\", \"api_key=example456\", \"PASSWORD = spaced-secret\"])\n    print(redact(sample).replace(chr(10), \" | \"))\n    print(\"the known shapes were replaced, including a different capitalisation and spaces around the equals sign\")\n\n    section(\"5. Genuinely checking: secrets the patterns do not know about\")\n    misses = ['{\"password\": \"json-secret\"}', \"token: ghp_exampletoken123\", \"secret=abc\", \"https://user:pw@example.com/path\", \"Authorization: Basic dXNlcjpwdw==\"]\n    for m in misses:\n        r = redact(m)\n        print(f\"{m:46} -> {'unchanged' if r == m else r}\")\n    print(\"every one of these passed through untouched, because redaction by pattern only removes shapes someone listed; it is a layer, to be combined with keeping secrets out of command lines and with restricted access to the log\")\n\n    section(\"6. Genuinely checking: redact before writing, not when reading\")\n    with tempfile.TemporaryDirectory() as d:\n        raw, safe = Path(d) / \"raw.jsonl\", Path(d) / \"safe.jsonl\"\n        rec = {\"command\": [\"deploy\", \"--password=hunter2\"], \"stdout\": \"Authorization: Bearer abc123\"}\n        raw.write_text(json.dumps(rec) + chr(10), encoding=\"utf-8\")\n        safe.write_text(json.dumps({\"command\": [redact(a) for a in rec[\"command\"]], \"stdout\": redact(rec[\"stdout\"])}) + chr(10), encoding=\"utf-8\")\n        print(\"raw file contains hunter2:\", \"hunter2\" in raw.read_text(encoding=\"utf-8\"), \"| redacted-on-write file contains hunter2:\", \"hunter2\" in safe.read_text(encoding=\"utf-8\"))\n        print(\"redacted command stored:\", json.loads(safe.read_text(encoding=\"utf-8\"))[\"command\"])\n        print(\"the actual command list passed to the process is the original, so redaction changes only what is stored; redacting when the log is read would have left the secret on disk\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: head and tail truncation, and what falls in the middle ---\nLine 1 | Line 2 | Line 3 | Line 4 | Line 5 | ...truncated 90 lines... | Line 96 | Line 97 | Line 98 | Line 99 | Line 100\nsame input twice gives identical output: True\nline 50 survives truncation: False\nthe output is deterministic and bounded, and the one line that mattered, buried in the middle, was dropped; head and tail help because tools usually print the summary last, but they cannot know which line is important\n\n--- 2. Genuinely measuring: line limits against one enormous line ---\nlines: 1 | characters kept by truncate_lines: 5000000\na line-based limit kept all 5,000,000 characters because it counted one line; the limit has to be in bytes as well as lines\n\n--- 3. Genuinely measuring: peak memory, capture then truncate versus bounded streaming ---\nchild printed 20,200,000 bytes\nsubprocess.run capture then truncate: peak traced 60.9 MB, kept 1,028 characters\nbounded streaming capture           : peak traced 0.16 MB, kept 4,032 characters, stdout fully drained: True\ntruncating after capture limited what was stored but not what was held while the output arrived, whereas the bounded reader kept memory near its limits; these are Python-allocation peaks from tracemalloc, not operating-system memory\n\n--- 4. Genuinely running: redaction patterns on sample text with made-up secrets ---\nAuthorization: Bearer [REDACTED] | password=[REDACTED] | api_key=[REDACTED] | password=[REDACTED]\nthe known shapes were replaced, including a different capitalisation and spaces around the equals sign\n\n--- 5. Genuinely checking: secrets the patterns do not know about ---\n{\"password\": \"json-secret\"}                    -> unchanged\ntoken: ghp_exampletoken123                     -> unchanged\nsecret=abc                                     -> unchanged\nhttps://user:pw@example.com/path               -> unchanged\nAuthorization: Basic dXNlcjpwdw==              -> unchanged\nevery one of these passed through untouched, because redaction by pattern only removes shapes someone listed; it is a layer, to be combined with keeping secrets out of command lines and with restricted access to the log\n\n--- 6. Genuinely checking: redact before writing, not when reading ---\nraw file contains hunter2: True | redacted-on-write file contains hunter2: False\nredacted command stored: ['deploy', '--password=[REDACTED]']\nthe actual command list passed to the process is the original, so redaction changes only what is stored; redacting when the log is read would have left the secret on disk"
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
    "headingEn": "Experiment 1: Head and tail truncation, and what falls in the middle",
    "headingKn": "ಪ್ರಯೋಗ 1: Head and tail truncation, and what falls in the middle",
    "bodyEn": "What it ran: Head and tail truncation, and what falls in the middle. What the lab concluded: the output is deterministic and bounded, and the one line that mattered, buried in the middle, was dropped; head and tail help because tools usually print the summary last, but they cannot know which line is important",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Head and tail truncation, and what falls in the middle. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the output is deterministic and bounded, and the one line that mattered, buried in the middle, was dropped; head and tail help because tools usually print the summary last, but they cannot know which line is important"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. Genuinely running: head and tail truncation, and what falls in the middle ---\nLine 1 | Line 2 | Line 3 | Line 4 | Line 5 | ...truncated 90 lines... | Line 96 | Line 97 | Line 98 | Line 99 | Line 100\nsame input twice gives identical output: True\nline 50 survives truncation: False"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: Line limits against one enormous line",
    "headingKn": "ಪ್ರಯೋಗ 2: Line limits against one enormous line",
    "bodyEn": "What it ran: Line limits against one enormous line. What the lab concluded: a line-based limit kept all 5,000,000 characters because it counted one line; the limit has to be in bytes as well as lines",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Line limits against one enormous line. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a line-based limit kept all 5,000,000 characters because it counted one line; the limit has to be in bytes as well as lines"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely measuring: line limits against one enormous line ---\nlines: 1 | characters kept by truncate_lines: 5000000"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: Peak memory, capture then truncate versus bounded streaming",
    "headingKn": "ಪ್ರಯೋಗ 3: Peak memory, capture then truncate versus bounded streaming",
    "bodyEn": "What it ran: Peak memory, capture then truncate versus bounded streaming. What the lab concluded: truncating after capture limited what was stored but not what was held while the output arrived, whereas the bounded reader kept memory near its limits; these are Python-allocation peaks from tracemalloc, not operating-system memory",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Peak memory, capture then truncate versus bounded streaming. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): truncating after capture limited what was stored but not what was held while the output arrived, whereas the bounded reader kept memory near its limits; these are Python-allocation peaks from tracemalloc, not operating-system memory"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely measuring: peak memory, capture then truncate versus bounded streaming ---\nchild printed 20,200,000 bytes\nsubprocess.run capture then truncate: peak traced 60.9 MB, kept 1,028 characters\nbounded streaming capture           : peak traced 0.16 MB, kept 4,032 characters, stdout fully drained: True"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 4: Redaction patterns on sample text with made-up secrets",
    "headingKn": "ಪ್ರಯೋಗ 4: Redaction patterns on sample text with made-up secrets",
    "bodyEn": "What it ran: Redaction patterns on sample text with made-up secrets. What the lab concluded: the known shapes were replaced, including a different capitalisation and spaces around the equals sign",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Redaction patterns on sample text with made-up secrets. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the known shapes were replaced, including a different capitalisation and spaces around the equals sign"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 4. Genuinely running: redaction patterns on sample text with made-up secrets ---\nAuthorization: Bearer [REDACTED] | password=[REDACTED] | api_key=[REDACTED] | password=[REDACTED]"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 5: Secrets the patterns do not know about",
    "headingKn": "ಪ್ರಯೋಗ 5: Secrets the patterns do not know about",
    "bodyEn": "What it ran: Secrets the patterns do not know about. What the lab concluded: every one of these passed through untouched, because redaction by pattern only removes shapes someone listed; it is a layer, to be combined with keeping secrets out of command lines and with restricted access to the log",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Secrets the patterns do not know about. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): every one of these passed through untouched, because redaction by pattern only removes shapes someone listed; it is a layer, to be combined with keeping secrets out of command lines and with restricted access to the log"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 5. Genuinely checking: secrets the patterns do not know about ---\n{\"password\": \"json-secret\"}                    -> unchanged\ntoken: ghp_exampletoken123                     -> unchanged\nsecret=abc                                     -> unchanged\nhttps://user:pw@example.com/path               -> unchanged\nAuthorization: Basic dXNlcjpwdw==              -> unchanged"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 6: Redact before writing, not when reading",
    "headingKn": "ಪ್ರಯೋಗ 6: Redact before writing, not when reading",
    "bodyEn": "What it ran: Redact before writing, not when reading. What the lab concluded: the actual command list passed to the process is the original, so redaction changes only what is stored; redacting when the log is read would have left the secret on disk",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Redact before writing, not when reading. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the actual command list passed to the process is the original, so redaction changes only what is stored; redacting when the log is read would have left the secret on disk"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 6. Genuinely checking: redact before writing, not when reading ---\nraw file contains hunter2: True | redacted-on-write file contains hunter2: False\nredacted command stored: ['deploy', '--password=[REDACTED]']"
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
    "headingEn": "Genuinely Found: Bounded Is Not the Same as Informative, and Lines Are Not Bytes",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಮಿತಿ ಎಂದರೆ ಮಾಹಿತಿಯುಕ್ತ ಅಲ್ಲ, ಮತ್ತು ಸಾಲುಗಳು ಬೈಟ್‌ಗಳಲ್ಲ",
    "bodyEn": "Section 1: 100 lines became five head lines, a marker saying 90 lines were truncated and five tail lines; the same input gave identical output, and the \"ERROR: the real cause\" line at line 50 did not survive. Section 2: a single 5,000,000-character line passed through the line limit completely, 5,000,000 characters kept. Section 3: for a child printing 20,200,000 bytes, capture then truncate peaked at 60.9 MB of traced Python memory and kept 1,028 characters, while the bounded streaming reader peaked at 0.16 MB and kept 4,032 characters.",
    "bodyKn": "ವಿಭಾಗ 1: 100 ಸಾಲುಗಳು ಐದು head ಸಾಲು, 90 ಸಾಲು ಕತ್ತರಿಸಲಾಗಿದೆ ಎಂಬ ಗುರುತು ಮತ್ತು ಐದು tail ಸಾಲಾದವು; ಅದೇ ಇನ್‌ಪುಟ್ ಒಂದೇ ಔಟ್‌ಪುಟ್ ನೀಡಿತು, ಮತ್ತು ಸಾಲು 50 ರ \"ERROR: the real cause\" ಸಾಲು ಉಳಿಯಲಿಲ್ಲ. ವಿಭಾಗ 2: ಒಂದೇ 5,000,000-ಅಕ್ಷರದ ಸಾಲು ಸಾಲು ಮಿತಿಯನ್ನು ಸಂಪೂರ್ಣವಾಗಿ ದಾಟಿತು, 5,000,000 ಅಕ್ಷರ ಉಳಿದವು. ವಿಭಾಗ 3: 20,200,000 ಬೈಟ್ ಮುದ್ರಿಸುವ child ಗೆ capture-ನಂತರ-ಕತ್ತರಿಸುವುದು 60.9 MB ಗರಿಷ್ಠ trace Python ಮೆಮೊರಿ ತಲುಪಿ 1,028 ಅಕ್ಷರ ಉಳಿಸಿತು, ಮಿತಿಯ streaming ಓದುಗ 0.16 MB ಗರಿಷ್ಠ ತಲುಪಿ 4,032 ಅಕ್ಷರ ಉಳಿಸಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Redaction Catches Shapes and Must Run Before Writing",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಮರೆಮಾಚುವಿಕೆ ಆಕಾರಗಳನ್ನು ಹಿಡಿಯುತ್ತದೆ ಮತ್ತು ಬರೆಯುವ ಮುನ್ನ ನಡೆಯಬೇಕು",
    "bodyEn": "Section 4: Bearer, password= and api_key= values were replaced, including capitals and spaces around the equals sign. Section 5: five other shapes passed through unchanged, a JSON \"password\" key, \"token: ghp_...\", \"secret=abc\", a URL with user:pw@ and a Basic authorization header. Section 6: the raw log contained the made-up secret and the redact-on-write log did not; the stored command showed --password=[REDACTED].",
    "bodyKn": "ವಿಭಾಗ 4: Bearer, password= ಮತ್ತು api_key= ಮೌಲ್ಯಗಳು ಬದಲಾದವು, ದೊಡ್ಡಕ್ಷರ ಮತ್ತು ಸಮಾನ ಚಿಹ್ನೆಯ ಸುತ್ತಲಿನ ಖಾಲಿಸ್ಥಳ ಸೇರಿ. ವಿಭಾಗ 5: ಇತರ ಐದು ಆಕಾರಗಳು ಬದಲಾಗದೆ ಹಾದವು, JSON \"password\" ಕೀ, \"token: ghp_...\", \"secret=abc\", user:pw@ ಇರುವ URL ಮತ್ತು Basic authorization header. ವಿಭಾಗ 6: ಕಚ್ಚಾ ಲಾಗ್ ಮಾಡಿದ ರಹಸ್ಯ ಹೊಂದಿತ್ತು ಮತ್ತು ಬರೆಯುವಾಗ-ಮರೆಮಾಚಿದ ಲಾಗ್ ಹೊಂದಿರಲಿಲ್ಲ; ಉಳಿಸಿದ ಆದೇಶ --password=[REDACTED] ತೋರಿಸಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "Output limits and redaction protect memory, storage and secrets only when they run at the right point in the pipeline and their known blind spots are written down.",
    "bodyKn": "ಔಟ್‌ಪುಟ್ ಮಿತಿಗಳು ಮತ್ತು ಮರೆಮಾಚುವಿಕೆ ಪೈಪ್‌ಲೈನ್‌ನ ಸರಿಯಾದ ಹಂತದಲ್ಲಿ ನಡೆದು ಅವುಗಳ ತಿಳಿದ ಕುರುಡು ಬಿಂದುಗಳನ್ನು ಬರೆದಿಟ್ಟಾಗ ಮಾತ್ರ ಮೆಮೊರಿ, ಸಂಗ್ರಹ ಮತ್ತು ರಹಸ್ಯಗಳನ್ನು ರಕ್ಷಿಸುತ್ತವೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"truncating the output limits memory.\" After capture it limited only what was stored; the peak was already 60.9 MB.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಔಟ್‌ಪುಟ್ ಕತ್ತರಿಸುವುದು ಮೆಮೊರಿ ಮಿತಿಗೊಳಿಸುತ್ತದೆ.\" capture ನಂತರ ಅದು ಉಳಿಸಿದ್ದನ್ನು ಮಾತ್ರ ಮಿತಿಗೊಳಿಸಿತು; ಗರಿಷ್ಠ ಈಗಾಗಲೇ 60.9 MB ಆಗಿತ್ತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Deterministic truncation: the same input and settings give the same output. Bounded capture: memory is limited while output arrives. Redaction: replacing known secret shapes. Write-time redaction: done before persistence. Truncation marker: text stating how much was omitted.",
    "bodyKn": "Deterministic truncation: ಅದೇ ಇನ್‌ಪುಟ್ ಮತ್ತು ಸೆಟ್ಟಿಂಗ್ ಅದೇ ಔಟ್‌ಪುಟ್ ನೀಡುತ್ತವೆ. Bounded capture: ಔಟ್‌ಪುಟ್ ಬರುವಾಗ ಮೆಮೊರಿ ಮಿತಿಯಲ್ಲಿರುತ್ತದೆ. Redaction: ತಿಳಿದ ರಹಸ್ಯ ಆಕಾರಗಳನ್ನು ಬದಲಿಸುವುದು. Write-time redaction: ಉಳಿಸುವ ಮುನ್ನ ಮಾಡುವುದು. Truncation marker: ಎಷ್ಟು ಬಿಟ್ಟಿದೆ ಎಂದು ಹೇಳುವ ಪಠ್ಯ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) Truncation was deterministic and dropped line 50. 2) One 5,000,000-character line passed a line limit untouched. 3) Peak traced memory was 60.9 MB for capture-then-truncate and 0.16 MB for bounded streaming. 4) Five secret shapes were not redacted. 5) Only redaction on write kept the secret off disk.",
    "bodyKn": "1) ಕತ್ತರಿಸುವಿಕೆ ನಿರ್ಣಾಯಕವಾಗಿ ಸಾಲು 50 ಅನ್ನು ಕೈಬಿಟ್ಟಿತು. 2) ಒಂದು 5,000,000-ಅಕ್ಷರ ಸಾಲು ಸಾಲು ಮಿತಿಯನ್ನು ಮುಟ್ಟದೆ ದಾಟಿತು. 3) ಗರಿಷ್ಠ trace ಮೆಮೊರಿ capture-ನಂತರ-ಕತ್ತರಿಸುವುದಕ್ಕೆ 60.9 MB ಮತ್ತು ಮಿತಿಯ streaming ಗೆ 0.16 MB. 4) ಐದು ರಹಸ್ಯ ಆಕಾರಗಳು ಮರೆಮಾಚಲ್ಪಡಲಿಲ್ಲ. 5) ಬರೆಯುವಾಗ ಮರೆಮಾಚುವಿಕೆ ಮಾತ್ರ ರಹಸ್ಯವನ್ನು ಡಿಸ್ಕ್‌ನಿಂದ ದೂರ ಇಟ್ಟಿತು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "Did the line at position 50 survive 5-head 5-tail truncation of 100 lines?",
      "qKn": "100 ಸಾಲುಗಳ 5-head 5-tail ಕತ್ತರಿಸುವಿಕೆಯಲ್ಲಿ ಸ್ಥಾನ 50 ರ ಸಾಲು ಉಳಿಯಿತೇ?",
      "opts": [
       "No",
       "Yes",
       "Only on Windows",
       "Only with a marker"
      ],
      "optsKn": [
       "ಇಲ್ಲ",
       "ಹೌದು",
       "Windows ನಲ್ಲಿ ಮಾತ್ರ",
       "ಗುರುತಿನೊಂದಿಗೆ ಮಾತ್ರ"
      ],
      "correct": 0
     },
     {
      "q": "How many characters did the line limit keep from one 5,000,000-character line?",
      "qKn": "ಒಂದು 5,000,000-ಅಕ್ಷರ ಸಾಲಿನಿಂದ ಸಾಲು ಮಿತಿ ಎಷ್ಟು ಅಕ್ಷರ ಉಳಿಸಿತು?",
      "opts": [
       "5,000,000",
       "10",
       "1,000",
       "0"
      ],
      "optsKn": [
       "5,000,000",
       "10",
       "1,000",
       "0"
      ],
      "correct": 0
     },
     {
      "q": "What was the peak traced memory of capture then truncate?",
      "qKn": "capture-ನಂತರ-ಕತ್ತರಿಸುವುದರ ಗರಿಷ್ಠ trace ಮೆಮೊರಿ ಎಷ್ಟು?",
      "opts": [
       "60.9 MB",
       "0.16 MB",
       "1 GB",
       "1 KB"
      ],
      "optsKn": [
       "60.9 MB",
       "0.16 MB",
       "1 GB",
       "1 KB"
      ],
      "correct": 0
     },
     {
      "q": "Which of these secrets was NOT redacted?",
      "qKn": "ಇವುಗಳಲ್ಲಿ ಯಾವ ರಹಸ್ಯ ಮರೆಮಾಚಲ್ಪಡಲಿಲ್ಲ?",
      "opts": [
       "A JSON \"password\" key",
       "password=value",
       "Bearer token",
       "api_key=value"
      ],
      "optsKn": [
       "JSON \"password\" ಕೀ",
       "password=value",
       "Bearer token",
       "api_key=value"
      ],
      "correct": 0
     },
     {
      "q": "Why must redaction run before the record is written?",
      "qKn": "ದಾಖಲೆ ಬರೆಯುವ ಮುನ್ನ ಮರೆಮಾಚುವಿಕೆ ಏಕೆ ನಡೆಯಬೇಕು?",
      "opts": [
       "Redacting on read leaves the secret on disk",
       "It is faster",
       "JSON requires it",
       "It shortens output"
      ],
      "optsKn": [
       "ಓದುವಾಗ ಮರೆಮಾಚಿದರೆ ರಹಸ್ಯ ಡಿಸ್ಕ್‌ನಲ್ಲಿ ಉಳಿಯುತ್ತದೆ",
       "ಅದು ವೇಗ",
       "JSON ಅದನ್ನು ಬಯಸುತ್ತದೆ",
       "ಅದು ಔಟ್‌ಪುಟ್ ಚಿಕ್ಕದಾಗಿಸುತ್ತದೆ"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
