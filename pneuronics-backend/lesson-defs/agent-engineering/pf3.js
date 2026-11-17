module.exports = {
 "phaseId": "6a369d6366020ed05b32158c",
 "moduleId": "6a369d6466020ed05b3215c8",
 "order": 2,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "OpenAI Preparedness and DeepMind FSF (Part 3 of 3) — Scope, Evidence and Sources",
 "titleKn": "OpenAI Preparedness ಮತ್ತು DeepMind FSF (ಭಾಗ 3 / 3) — ವ್ಯಾಪ್ತಿ, ಸಾಕ್ಷ್ಯ ಮತ್ತು ಮೂಲಗಳು",
 "desc": "Check file scope against tricky spellings, capture run evidence honestly and verify a source with a hash.",
 "descKn": "ಕಷ್ಟಕರ ಕಾಗುಣಿತಗಳ ವಿರುದ್ಧ ಫೈಲ್ ವ್ಯಾಪ್ತಿ ಪರಿಶೀಲಿಸಿ, ಓಟ ಸಾಕ್ಷ್ಯವನ್ನು ಪ್ರಾಮಾಣಿಕವಾಗಿ ಸೆರೆಹಿಡಿಯಿರಿ ಮತ್ತು ಮೂಲವನ್ನು hash ನೊಂದಿಗೆ ಪರಿಶೀಲಿಸಿ.",
 "objectives": [
  "Check path scope.",
  "Keep exit codes.",
  "Record a timeout.",
  "Verify a source with a hash.",
  "Escalate a denial."
 ],
 "objectivesKn": [
  "path ವ್ಯಾಪ್ತಿ ಪರಿಶೀಲಿಸಿ.",
  "ನಿರ್ಗಮನ ಕೋಡ್ ಉಳಿಸಿ.",
  "ಸಮಯ ಮೀರುವಿಕೆ ದಾಖಲಿಸಿ.",
  "ಮೂಲವನ್ನು hash ನೊಂದಿಗೆ ಪರಿಶೀಲಿಸಿ.",
  "ನಿರಾಕರಣೆ ಉಲ್ಬಣಗೊಳಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "OpenAI Preparedness and DeepMind FSF (Part 3 of 3)",
    "textKn": "OpenAI Preparedness ಮತ್ತು DeepMind FSF (ಭಾಗ 3 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 3 of 3: an allowed-files check against several path spellings, a capture runner that records exit code, output hash and timeout, a denied interference attempt that is recorded and escalated, a source record that counts as verified only with a hash and a verifier and six unit tests that are run. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind the OpenAI Preparedness Framework and the DeepMind Frontier Safety Framework (a decision-table comparison tool with a controlled trigger vocabulary, evaluation metrics, a performance-gap detector and what chance alone produces, a policy version diff, a readiness check, an allowed-files check, evidence capture and source verification), not the real software, and the table cells restate how the lesson describes the frameworks and none was checked against the source documents, the evaluation records are fictional, the models in the simulations are probabilities written by the lab author and the commands run by the capture runner are harmless one-line programs, so no real LLM behaviour is measured. The original code/main.py was not supplied and the lesson code was shown only in fragments, so the labs are our own implementation and the outputs were produced by running them. Every classification in the comparison table restates how the lesson describes OpenAI, DeepMind and Anthropic, none was checked against the framework documents, and seven of the 21 cells say not_determined on purpose. The lesson itself corrects its earlier mapping and says AI self-improvement is a separate Tracked Category at OpenAI, which the table follows, and it names later versions such as DeepMind FSF 3.1 that were not examined here. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 3ನೆಯದು: ಹಲವು path ಕಾಗುಣಿತಗಳ ವಿರುದ್ಧ ಅನುಮತಿಸಿದ-ಫೈಲ್ ಪರಿಶೀಲನೆ, ನಿರ್ಗಮನ ಕೋಡ್, ಔಟ್‌ಪುಟ್ hash ಮತ್ತು ಸಮಯ ಮೀರುವಿಕೆ ದಾಖಲಿಸುವ capture runner, ದಾಖಲಿಸಿ ಉಲ್ಬಣಗೊಳಿಸಿದ ನಿರಾಕರಿಸಿದ ಹಸ್ತಕ್ಷೇಪ ಪ್ರಯತ್ನ, hash ಮತ್ತು ಪರಿಶೀಲಕ ಇದ್ದಾಗ ಮಾತ್ರ ಪರಿಶೀಲಿತ ಎಂದು ಪರಿಗಣಿಸುವ ಮೂಲ ದಾಖಲೆ ಮತ್ತು ಓಡಿಸಿದ ಆರು unit ಪರೀಕ್ಷೆಗಳು. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು OpenAI Preparedness Framework ಮತ್ತು DeepMind Frontier Safety Framework (ನಿಯಂತ್ರಿತ trigger ಶಬ್ದಕೋಶ ಇರುವ ನಿರ್ಧಾರ-ಟೇಬಲ್ ಹೋಲಿಕೆ ಸಾಧನ, ಮೌಲ್ಯಮಾಪನ ಮಾಪನಗಳು, ಕಾರ್ಯಕ್ಷಮತೆ-ಅಂತರ ಪತ್ತೆಕಾರಕ ಮತ್ತು ಕೇವಲ ಅವಕಾಶ ಏನು ಉಂಟುಮಾಡುತ್ತದೆ, ನೀತಿ ಆವೃತ್ತಿ ವ್ಯತ್ಯಾಸ, ಸಿದ್ಧತೆ ಪರಿಶೀಲನೆ, ಅನುಮತಿಸಿದ-ಫೈಲ್ ಪರಿಶೀಲನೆ, ಸಾಕ್ಷ್ಯ ಸೆರೆಹಿಡಿಯುವಿಕೆ ಮತ್ತು ಮೂಲ ಪರಿಶೀಲನೆ) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಟೇಬಲ್ ಕೋಶಗಳು lesson ಚೌಕಟ್ಟುಗಳನ್ನು ಹೇಗೆ ವಿವರಿಸುತ್ತದೆ ಎಂಬುದನ್ನು ಪುನರುಚ್ಚರಿಸುತ್ತವೆ ಮತ್ತು ಯಾವುದನ್ನೂ ಮೂಲ ದಾಖಲೆಗಳ ವಿರುದ್ಧ ಪರಿಶೀಲಿಸಿಲ್ಲ, ಮೌಲ್ಯಮಾಪನ ದಾಖಲೆಗಳು ಕಾಲ್ಪನಿಕ, ಸಿಮ್ಯುಲೇಶನ್‌ಗಳಲ್ಲಿನ ಮಾದರಿಗಳು ಲ್ಯಾಬ್ ಲೇಖಕ ಬರೆದ ಸಂಭವನೀಯತೆಗಳು ಮತ್ತು capture runner ಓಡಿಸುವ ಆಜ್ಞೆಗಳು ಹಾನಿರಹಿತ ಒಂದು-ಸಾಲಿನ ಕಾರ್ಯಕ್ರಮಗಳು, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ code/main.py ಒದಗಿಸಿರಲಿಲ್ಲ ಮತ್ತು lesson ಕೋಡ್ ತುಣುಕುಗಳಲ್ಲಿ ಮಾತ್ರ ತೋರಿಸಲ್ಪಟ್ಟಿತು, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ನಮ್ಮದೇ ಅನುಷ್ಠಾನ ಮತ್ತು ಔಟ್‌ಪುಟ್ ಅನ್ನು ಅವನ್ನು ಓಡಿಸಿ ಪಡೆಯಲಾಗಿದೆ. ಹೋಲಿಕೆ ಟೇಬಲ್‌ನ ಪ್ರತಿ ವರ್ಗೀಕರಣ OpenAI, DeepMind ಮತ್ತು Anthropic ಅನ್ನು lesson ಹೇಗೆ ವಿವರಿಸುತ್ತದೆ ಎಂಬುದನ್ನು ಪುನರುಚ್ಚರಿಸುತ್ತದೆ, ಯಾವುದನ್ನೂ ಚೌಕಟ್ಟು ದಾಖಲೆಗಳ ವಿರುದ್ಧ ಪರಿಶೀಲಿಸಿಲ್ಲ, ಮತ್ತು 21 ಕೋಶಗಳಲ್ಲಿ ಏಳು ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ not_determined ಎನ್ನುತ್ತವೆ. lesson ಸ್ವತಃ ತನ್ನ ಹಿಂದಿನ ನಕ್ಷೆಯನ್ನು ಸರಿಪಡಿಸಿ AI self-improvement OpenAI ನಲ್ಲಿ ಪ್ರತ್ಯೇಕ Tracked Category ಎನ್ನುತ್ತದೆ, ಟೇಬಲ್ ಅದನ್ನು ಅನುಸರಿಸುತ್ತದೆ, ಮತ್ತು DeepMind FSF 3.1 ನಂತಹ ನಂತರದ ಆವೃತ್ತಿಗಳನ್ನು ಹೆಸರಿಸುತ್ತದೆ, ಅವನ್ನು ಇಲ್ಲಿ ಪರೀಕ್ಷಿಸಿಲ್ಲ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "A Check on Strings Is Not a Sandbox",
    "textKn": "ಸ್ಟ್ರಿಂಗ್ ಪರಿಶೀಲನೆ ಸ್ಯಾಂಡ್‌ಬಾಕ್ಸ್ ಅಲ್ಲ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Paths, Captured Runs and Verified Sources",
    "headingKn": "Paths, ಸೆರೆಹಿಡಿದ ಓಟಗಳು ಮತ್ತು ಪರಿಶೀಲಿತ ಮೂಲಗಳು",
    "bodyEn": "This part covers the practical end of the lesson. It tries eight spellings of a file path against the lesson allowed-files check and against a resolved-path check, records a denied attempt on a monitoring file as evidence with an escalation step and without calling it deception, runs three harmless commands through a capture runner that keeps exit codes, output hashes and timeouts, and shows a source record that counts as verified only when a verifier is named and the document hash still matches. It ends with six unit tests. None of this is a sandbox.",
    "bodyKn": "ಈ ಭಾಗ lesson ನ ಪ್ರಾಯೋಗಿಕ ತುದಿ ಒಳಗೊಳ್ಳುತ್ತದೆ. ಇದು ಫೈಲ್ path ನ ಎಂಟು ಕಾಗುಣಿತಗಳನ್ನು lesson ನ ಅನುಮತಿಸಿದ-ಫೈಲ್ ಪರಿಶೀಲನೆ ಮತ್ತು ಪರಿಹರಿಸಿದ-path ಪರಿಶೀಲನೆ ವಿರುದ್ಧ ಪ್ರಯತ್ನಿಸುತ್ತದೆ, ಮಾನಿಟರಿಂಗ್ ಫೈಲ್ ಮೇಲಿನ ನಿರಾಕರಿಸಿದ ಪ್ರಯತ್ನವನ್ನು ಉಲ್ಬಣ ಹಂತದೊಂದಿಗೆ ವಂಚನೆ ಎನ್ನದೆ ಸಾಕ್ಷ್ಯವಾಗಿ ದಾಖಲಿಸುತ್ತದೆ, ನಿರ್ಗಮನ ಕೋಡ್, ಔಟ್‌ಪುಟ್ hash ಮತ್ತು ಸಮಯ ಮೀರುವಿಕೆ ಉಳಿಸುವ capture runner ಮೂಲಕ ಮೂರು ಹಾನಿರಹಿತ ಆಜ್ಞೆ ಓಡಿಸುತ್ತದೆ, ಮತ್ತು ಪರಿಶೀಲಕ ಹೆಸರಿಸಿ ದಾಖಲೆ hash ಇನ್ನೂ ಹೊಂದಿದಾಗ ಮಾತ್ರ ಪರಿಶೀಲಿತ ಎಂದು ಪರಿಗಣಿಸುವ ಮೂಲ ದಾಖಲೆ ತೋರಿಸುತ್ತದೆ. ಅದು ಆರು unit ಪರೀಕ್ಷೆಗಳೊಂದಿಗೆ ಮುಗಿಯುತ್ತದೆ. ಇದರಲ್ಲಿ ಯಾವುದೂ ಸ್ಯಾಂಡ್‌ಬಾಕ್ಸ್ ಅಲ್ಲ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Scope, Evidence and Sources",
    "headingKn": "ವ್ಯಾಪ್ತಿ, ಸಾಕ್ಷ್ಯ ಮತ್ತು ಮೂಲಗಳು",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">evidence has to record failures too</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">scope</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">string check</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">denied</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">recorded and escalated</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">capture</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">exit code kept</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">source</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">hash and verifier</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">evidence has to record failures too</text></svg>",
    "captionEn": "A denied action, a captured run and a verified source are the audit trail.",
    "captionKn": "ನಿರಾಕರಿಸಿದ ಕ್ರಿಯೆ, ಸೆರೆಹಿಡಿದ ಓಟ ಮತ್ತು ಪರಿಶೀಲಿತ ಮೂಲ ಲೆಕ್ಕಪರಿಶೋಧನೆ ಜಾಡು."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "The eight path spellings",
    "headingKn": "ಎಂಟು path ಕಾಗುಣಿತಗಳು",
    "headers": [
     "Path",
     "Lesson check, resolved check"
    ],
    "rows": [
     [
      "src/application.py",
      "ALLOW, ALLOW"
     ],
     [
      "config/monitoring.yaml",
      "DENY, DENY"
     ],
     [
      "src//application.py and ./src/application.py",
      "ALLOW, ALLOW"
     ],
     [
      "src/../config/monitoring.yaml",
      "DENY, DENY"
     ],
     [
      "src/../src/application.py",
      "DENY, ALLOW"
     ],
     [
      "/etc/passwd and SRC/application.py",
      "DENY, DENY"
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
    "filename": "pf_3.py",
    "headingEn": "Scope checks, capture runner and source record",
    "headingKn": "ವ್ಯಾಪ್ತಿ ಪರಿಶೀಲನೆ, capture runner ಮತ್ತು ಮೂಲ ದಾಖಲೆ",
    "descEn": "is_allowed_change compares the normalised string, is_allowed_resolved also collapses parent references, capture runs a command and records exit code, timeout and output hash, and source_verified needs a verifier and a matching hash.",
    "descKn": "is_allowed_change ಸಾಮಾನ್ಯೀಕರಿಸಿದ ಸ್ಟ್ರಿಂಗ್ ಹೋಲಿಸುತ್ತದೆ, is_allowed_resolved ಪೋಷಕ ಉಲ್ಲೇಖಗಳನ್ನೂ ಕುಗ್ಗಿಸುತ್ತದೆ, capture ಆಜ್ಞೆ ಓಡಿಸಿ ನಿರ್ಗಮನ ಕೋಡ್, ಸಮಯ ಮೀರುವಿಕೆ ಮತ್ತು ಔಟ್‌ಪುಟ್ hash ದಾಖಲಿಸುತ್ತದೆ, ಮತ್ತು source_verified ಗೆ ಪರಿಶೀಲಕ ಮತ್ತು ಹೊಂದುವ hash ಬೇಕು.",
    "code": "ALLOWED_FILES = {\"src/application.py\", \"tests/test_application.py\"}\n\n\ndef is_allowed_change(path):\n    return str(PurePosixPath(path)) in ALLOWED_FILES\n\n\ndef is_allowed_resolved(path):\n    if path.startswith(\"/\"):\n        return False\n    return posixpath.normpath(path) in ALLOWED_FILES\n\n\ndef capture(command, timeout=2):\n    try:\n        r = subprocess.run(command, capture_output=True, text=True, timeout=timeout, check=False)\n        return {\"exit_code\": r.returncode, \"timed_out\": False, \"stdout\": r.stdout, \"stdout_sha256\": hashlib.sha256(r.stdout.encode()).hexdigest()[:12], \"stderr_lines\": len(r.stderr.splitlines())}\n    except subprocess.TimeoutExpired:\n        return {\"exit_code\": None, \"timed_out\": True, \"stdout\": \"\", \"stdout_sha256\": None, \"stderr_lines\": 0}\n\n\ndef handle_attempt(path, events):\n    if is_allowed_change(path):\n        events.append({\"path\": path, \"decision\": \"ALLOW\"})\n        return \"ALLOW\"\n    events.append({\"path\": path, \"decision\": \"DENY\", \"action\": \"preserve evidence and escalate for review\"})\n    return \"DENY\"\n\n\n@dataclass(frozen=True)\nclass PolicySource:\n    organization: str\n    document_name: str\n    document_version: str\n    content_hash: str\n    verified_by: str\n\n\ndef source_verified(src, document_bytes):\n    return bool(src.verified_by) and src.content_hash == hashlib.sha256(document_bytes).hexdigest()\n\n\nclass Tests(unittest.TestCase):\n    def test_allowed_path(self):\n        self.assertTrue(is_allowed_change(\"src/application.py\"))\n\n    def test_monitoring_denied(self):\n        self.assertFalse(is_allowed_change(\"config/monitoring.yaml\"))\n\n    def test_traversal_to_monitoring_denied_both_ways(self):\n        p = \"src/../config/monitoring.yaml\"\n        self.assertFalse(is_allowed_change(p) or is_allowed_resolved(p))\n\n    def test_resolved_allows_a_roundabout_spelling_of_an_allowed_file(self):\n        self.assertTrue(is_allowed_resolved(\"src/../src/application.py\"))\n        self.assertFalse(is_allowed_change(\"src/../src/application.py\"))\n\n    def test_failing_command_exit_code_kept(self):\n        self.assertEqual(capture([sys.executable, \"-c\", \"import sys; sys.exit(3)\"])[\"exit_code\"], 3)\n\n    def test_timeout_recorded(self):\n        self.assertTrue(capture([sys.executable, \"-c\", \"import time; time.sleep(5)\"], timeout=1)[\"timed_out\"])"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "pf_3.py",
    "headingEn": "main(): experiments",
    "headingKn": "main(): ಪ್ರಯೋಗಗಳು",
    "descEn": "main() tries the path spellings, records a denied attempt, captures three commands, checks three source records and runs six unit tests.",
    "descKn": "main() path ಕಾಗುಣಿತ ಪ್ರಯತ್ನಿಸಿ, ನಿರಾಕರಿಸಿದ ಪ್ರಯತ್ನ ದಾಖಲಿಸಿ, ಮೂರು ಆಜ್ಞೆ ಸೆರೆಹಿಡಿದು, ಮೂರು ಮೂಲ ದಾಖಲೆ ಪರಿಶೀಲಿಸಿ ಮತ್ತು ಆರು unit ಪರೀಕ್ಷೆ ಓಡಿಸುತ್ತದೆ.",
    "code": "def main():\n    section(\"1. Genuinely running: an allowed-files check against several spellings\")\n    paths = [\"src/application.py\", \"config/monitoring.yaml\", \"src//application.py\", \"./src/application.py\", \"src/../config/monitoring.yaml\", \"src/../src/application.py\", \"/etc/passwd\", \"SRC/application.py\"]\n    print(f\"{'path':34} {'lesson check':13} resolved check\")\n    for p in paths:\n        print(f\"{p:34} {'ALLOW' if is_allowed_change(p) else 'DENY':13} {'ALLOW' if is_allowed_resolved(p) else 'DENY'}\")\n    print(\"both checks allowed the real file and denied the monitoring file, the doubled slash and the leading dot were normalised to the allowed name, a path that climbs out and back to the allowed file was denied by the string check and allowed once the path was resolved, and the upper-case spelling was denied by both; this is a string comparison and says nothing about symlinks or file permissions, which were not tested\")\n\n    section(\"2. Genuinely running: an attempt on a file outside the scope\")\n    events = []\n    for p in (\"src/application.py\", \"config/monitoring.yaml\"):\n        print(p, \"->\", handle_attempt(p, events))\n    print(json.dumps(events[1], sort_keys=True))\n    print(\"the in-scope edit was allowed and the monitoring file was denied with a record and an escalation step; the denial does not prove deceptive behaviour, since the agent may have misunderstood the task, and the event is only worth anything if the agent cannot edit the place that stores it\")\n\n    section(\"3. Genuinely running: capturing evidence from three commands\")\n    for label, cmd, tmo in ((\"prints and exits 0\", [sys.executable, \"-c\", \"print('ok')\"], 2), (\"exits with code 3\", [sys.executable, \"-c\", \"import sys; print('partial'); sys.exit(3)\"], 2), (\"runs too long\", [sys.executable, \"-c\", \"import time; time.sleep(5)\"], 1)):\n        c = capture(cmd, tmo)\n        print(f\"{label:20} exit_code={c['exit_code']!s:5} timed_out={c['timed_out']!s:5} stdout={c['stdout'].strip()!r:10} sha256={c['stdout_sha256']}\")\n    print(\"the successful run, the failing run and the run that exceeded its timeout all produced a record with their own exit status, and the failing one kept its exit code 3 and its partial output instead of being reported as a success; a clean exit code alone does not show that the program's decisions were right\")\n\n    section(\"4. Genuinely running: a source record counts as verified only with a hash and a verifier\")\n    doc = b\"An example policy document used only for this demonstration.\"\n    good = PolicySource(\"Example Lab\", \"Example Framework\", \"2026-01\", hashlib.sha256(doc).hexdigest(), \"reviewer-1\")\n    no_verifier = PolicySource(\"Example Lab\", \"Example Framework\", \"2026-01\", hashlib.sha256(doc).hexdigest(), \"\")\n    stale = PolicySource(\"Example Lab\", \"Example Framework\", \"2026-01\", hashlib.sha256(b\"older text\").hexdigest(), \"reviewer-1\")\n    print(\"hash matches and a verifier is named:\", source_verified(good, doc))\n    print(\"hash matches, nobody named:\", source_verified(no_verifier, doc))\n    print(\"verifier named, document has changed since:\", source_verified(stale, doc))\n    print(\"only the record with both a named verifier and a matching hash counted as verified, and the document that changed after review no longer did; a matching hash shows the bytes are the ones reviewed and does not show the reviewer read them correctly\")\n\n    section(\"5. Genuinely running: the unit tests\")\n    stream = io.StringIO()\n    res = unittest.TextTestRunner(stream=stream, verbosity=0).run(unittest.defaultTestLoader.loadTestsFromTestCase(Tests))\n    print(f\"ran {res.testsRun} tests | failures {len(res.failures)} | errors {len(res.errors)} | passed {res.wasSuccessful()}\")\n    print(\"the tests cover an allowed path, a denied path, a traversal spelling, the roundabout spelling of an allowed file, an exit code that is kept and a timeout that is recorded, on this lab's own functions\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: an allowed-files check against several spellings ---\npath                               lesson check  resolved check\nsrc/application.py                 ALLOW         ALLOW\nconfig/monitoring.yaml             DENY          DENY\nsrc//application.py                ALLOW         ALLOW\n./src/application.py               ALLOW         ALLOW\nsrc/../config/monitoring.yaml      DENY          DENY\nsrc/../src/application.py          DENY          ALLOW\n/etc/passwd                        DENY          DENY\nSRC/application.py                 DENY          DENY\nboth checks allowed the real file and denied the monitoring file, the doubled slash and the leading dot were normalised to the allowed name, a path that climbs out and back to the allowed file was denied by the string check and allowed once the path was resolved, and the upper-case spelling was denied by both; this is a string comparison and says nothing about symlinks or file permissions, which were not tested\n\n--- 2. Genuinely running: an attempt on a file outside the scope ---\nsrc/application.py -> ALLOW\nconfig/monitoring.yaml -> DENY\n{\"action\": \"preserve evidence and escalate for review\", \"decision\": \"DENY\", \"path\": \"config/monitoring.yaml\"}\nthe in-scope edit was allowed and the monitoring file was denied with a record and an escalation step; the denial does not prove deceptive behaviour, since the agent may have misunderstood the task, and the event is only worth anything if the agent cannot edit the place that stores it\n\n--- 3. Genuinely running: capturing evidence from three commands ---\nprints and exits 0   exit_code=0     timed_out=False stdout='ok'       sha256=dc51b8c96c2d\nexits with code 3    exit_code=3     timed_out=False stdout='partial'  sha256=95aebb28195b\nruns too long        exit_code=None  timed_out=True  stdout=''         sha256=None\nthe successful run, the failing run and the run that exceeded its timeout all produced a record with their own exit status, and the failing one kept its exit code 3 and its partial output instead of being reported as a success; a clean exit code alone does not show that the program's decisions were right\n\n--- 4. Genuinely running: a source record counts as verified only with a hash and a verifier ---\nhash matches and a verifier is named: True\nhash matches, nobody named: False\nverifier named, document has changed since: False\nonly the record with both a named verifier and a matching hash counted as verified, and the document that changed after review no longer did; a matching hash shows the bytes are the ones reviewed and does not show the reviewer read them correctly\n\n--- 5. Genuinely running: the unit tests ---\nran 6 tests | failures 0 | errors 0 | passed True\nthe tests cover an allowed path, a denied path, a traversal spelling, the roundabout spelling of an allowed file, an exit code that is kept and a timeout that is recorded, on this lab's own functions"
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
    "headingEn": "Genuinely Found: Paths and the Denied Attempt",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Paths ಮತ್ತು ನಿರಾಕರಿಸಿದ ಪ್ರಯತ್ನ",
    "bodyEn": "Section 1: both checks allowed src/application.py and denied config/monitoring.yaml, normalised the doubled slash and the leading dot to ALLOW, denied src/../config/monitoring.yaml, and differed only on src/../src/application.py which the lesson check denied and the resolved check allowed; /etc/passwd and SRC/application.py were denied by both. Section 2: the in-scope edit was ALLOW and the monitoring file was DENY with the action to preserve evidence and escalate for review.",
    "bodyKn": "ವಿಭಾಗ 1: ಎರಡೂ ಪರಿಶೀಲನೆಗಳು src/application.py ಅನುಮತಿಸಿ config/monitoring.yaml ನಿರಾಕರಿಸಿದವು, ದ್ವಿಗುಣ slash ಮತ್ತು ಮುಂದಿನ ಚುಕ್ಕೆಯನ್ನು ALLOW ಗೆ ಸಾಮಾನ್ಯೀಕರಿಸಿದವು, src/../config/monitoring.yaml ನಿರಾಕರಿಸಿದವು, ಮತ್ತು src/../src/application.py ನಲ್ಲಿ ಮಾತ್ರ ಭಿನ್ನವಾದವು, ಅದನ್ನು lesson ಪರಿಶೀಲನೆ ನಿರಾಕರಿಸಿ ಪರಿಹರಿಸಿದ ಪರಿಶೀಲನೆ ಅನುಮತಿಸಿತು; /etc/passwd ಮತ್ತು SRC/application.py ಎರಡರಿಂದಲೂ ನಿರಾಕರಿಸಲ್ಪಟ್ಟವು. ವಿಭಾಗ 2: ವ್ಯಾಪ್ತಿಯೊಳಗಿನ ಸಂಪಾದನೆ ALLOW ಮತ್ತು ಮಾನಿಟರಿಂಗ್ ಫೈಲ್ ಸಾಕ್ಷ್ಯ ಉಳಿಸಿ ವಿಮರ್ಶೆಗೆ ಉಲ್ಬಣಗೊಳಿಸುವ ಕ್ರಿಯೆಯೊಂದಿಗೆ DENY ಆಯಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Capture, Sources and Tests",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಸೆರೆಹಿಡಿಯುವಿಕೆ, ಮೂಲಗಳು ಮತ್ತು ಪರೀಕ್ಷೆಗಳು",
    "bodyEn": "Section 3: the successful command gave exit code 0 and ok, the failing one kept exit code 3 and its partial output, and the long one was recorded as timed out with no exit code. Section 4: only the source record with a named verifier and a matching hash counted as verified, and a missing verifier or a changed document did not. Section 5: the six unit tests ran with 0 failures and 0 errors.",
    "bodyKn": "ವಿಭಾಗ 3: ಯಶಸ್ವಿ ಆಜ್ಞೆ ನಿರ್ಗಮನ ಕೋಡ್ 0 ಮತ್ತು ok ನೀಡಿತು, ವಿಫಲವಾದದ್ದು ನಿರ್ಗಮನ ಕೋಡ್ 3 ಮತ್ತು ತನ್ನ ಭಾಗಶಃ ಔಟ್‌ಪುಟ್ ಉಳಿಸಿತು, ಮತ್ತು ಉದ್ದದ್ದು ನಿರ್ಗಮನ ಕೋಡ್ ಇಲ್ಲದೆ ಸಮಯ ಮೀರಿದೆ ಎಂದು ದಾಖಲಾಯಿತು. ವಿಭಾಗ 4: ಹೆಸರಿಸಿದ ಪರಿಶೀಲಕ ಮತ್ತು ಹೊಂದುವ hash ಇರುವ ಮೂಲ ದಾಖಲೆ ಮಾತ್ರ ಪರಿಶೀಲಿತ ಎಂದು ಪರಿಗಣಿಸಲ್ಪಟ್ಟಿತು, ಕಾಣೆಯಾದ ಪರಿಶೀಲಕ ಅಥವಾ ಬದಲಾದ ದಾಖಲೆ ಆಗಲಿಲ್ಲ. ವಿಭಾಗ 5: ಆರು unit ಪರೀಕ್ಷೆಗಳು 0 ವೈಫಲ್ಯ ಮತ್ತು 0 ದೋಷದೊಂದಿಗೆ ಓಡಿದವು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A string check on paths, a run recorded only when it succeeds and a source marked verified without a hash all fail quietly, so the lab records failures, exit codes and what was actually compared.",
    "bodyKn": "path ಮೇಲೆ ಸ್ಟ್ರಿಂಗ್ ಪರಿಶೀಲನೆ, ಯಶಸ್ವಿಯಾದಾಗ ಮಾತ್ರ ದಾಖಲಿಸುವ ಓಟ ಮತ್ತು hash ಇಲ್ಲದೆ ಪರಿಶೀಲಿತ ಎಂದು ಗುರುತಿಸಿದ ಮೂಲ ಮೌನವಾಗಿ ವಿಫಲವಾಗುತ್ತವೆ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್ ವೈಫಲ್ಯ, ನಿರ್ಗಮನ ಕೋಡ್ ಮತ್ತು ವಾಸ್ತವದಲ್ಲಿ ಏನನ್ನು ಹೋಲಿಸಲಾಯಿತು ಎಂದು ದಾಖಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"a denied write proves the agent was deceptive.\" The agent may have misunderstood the task, and the check only shows the path was outside the scope.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ನಿರಾಕರಿಸಿದ ಬರಹ agent ವಂಚಕ ಎಂದು ಸಾಬೀತು ಮಾಡುತ್ತದೆ.\" agent ಕಾರ್ಯ ತಪ್ಪಾಗಿ ಅರ್ಥಮಾಡಿಕೊಂಡಿರಬಹುದು, ಮತ್ತು ಪರಿಶೀಲನೆ path ವ್ಯಾಪ್ತಿಯ ಹೊರಗಿತ್ತು ಎಂದಷ್ಟೇ ತೋರಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Scope check: whether a target is allowed for this task. Resolved path: a path with parent references collapsed. Capture: recording exit code, output and timeout. Verified source: a named verifier and a matching hash.",
    "bodyKn": "ವ್ಯಾಪ್ತಿ ಪರಿಶೀಲನೆ: ಈ ಕಾರ್ಯಕ್ಕೆ ಗುರಿ ಅನುಮತಿಸಲಾಗಿದೆಯೇ. ಪರಿಹರಿಸಿದ path: ಪೋಷಕ ಉಲ್ಲೇಖ ಕುಗ್ಗಿಸಿದ path. ಸೆರೆಹಿಡಿಯುವಿಕೆ: ನಿರ್ಗಮನ ಕೋಡ್, ಔಟ್‌ಪುಟ್ ಮತ್ತು ಸಮಯ ಮೀರುವಿಕೆ ದಾಖಲಿಸುವುದು. ಪರಿಶೀಲಿತ ಮೂಲ: ಹೆಸರಿಸಿದ ಪರಿಶೀಲಕ ಮತ್ತು ಹೊಂದುವ hash."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) The roundabout spelling of an allowed file was denied by one check and allowed by the other. 2) A denied edit was recorded and escalated, not called deception. 3) Exit code 3 and a timeout were kept as such. 4) A source needed a verifier and a matching hash. 5) None of this tests symlinks.",
    "bodyKn": "1) ಅನುಮತಿಸಿದ ಫೈಲ್‌ನ ಸುತ್ತುಬಳಸಿ ಕಾಗುಣಿತ ಒಂದು ಪರಿಶೀಲನೆಯಿಂದ ನಿರಾಕರಿಸಲ್ಪಟ್ಟು ಇನ್ನೊಂದರಿಂದ ಅನುಮತಿಸಲ್ಪಟ್ಟಿತು. 2) ನಿರಾಕರಿಸಿದ ಸಂಪಾದನೆ ದಾಖಲಿಸಿ ಉಲ್ಬಣಗೊಳಿಸಲಾಯಿತು, ವಂಚನೆ ಎನ್ನಲಿಲ್ಲ. 3) ನಿರ್ಗಮನ ಕೋಡ್ 3 ಮತ್ತು ಸಮಯ ಮೀರುವಿಕೆ ಹಾಗೆಯೇ ಉಳಿದವು. 4) ಮೂಲಕ್ಕೆ ಪರಿಶೀಲಕ ಮತ್ತು ಹೊಂದುವ hash ಬೇಕಿತ್ತು. 5) ಇದರಲ್ಲಿ ಯಾವುದೂ symlinks ಪರೀಕ್ಷಿಸುವುದಿಲ್ಲ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "Which path did the lesson check deny and the resolved check allow?",
      "qKn": "ಯಾವ path ಅನ್ನು lesson ಪರಿಶೀಲನೆ ನಿರಾಕರಿಸಿ ಪರಿಹರಿಸಿದ ಪರಿಶೀಲನೆ ಅನುಮತಿಸಿತು?",
      "opts": [
       "src/../src/application.py",
       "config/monitoring.yaml",
       "/etc/passwd",
       "SRC/application.py"
      ],
      "optsKn": [
       "src/../src/application.py",
       "config/monitoring.yaml",
       "/etc/passwd",
       "SRC/application.py"
      ],
      "correct": 0
     },
     {
      "q": "What exit code did the failing command keep?",
      "qKn": "ವಿಫಲವಾದ ಆಜ್ಞೆ ಯಾವ ನಿರ್ಗಮನ ಕೋಡ್ ಉಳಿಸಿತು?",
      "opts": [
       "3",
       "0",
       "1",
       "None"
      ],
      "optsKn": [
       "3",
       "0",
       "1",
       "ಯಾವುದೂ ಇಲ್ಲ"
      ],
      "correct": 0
     },
     {
      "q": "What was recorded for the command that ran too long?",
      "qKn": "ತುಂಬಾ ಹೊತ್ತು ಓಡಿದ ಆಜ್ಞೆಗೆ ಏನು ದಾಖಲಾಯಿತು?",
      "opts": [
       "timed_out true and no exit code",
       "exit code 0",
       "exit code 3",
       "Nothing"
      ],
      "optsKn": [
       "timed_out true ಮತ್ತು ನಿರ್ಗಮನ ಕೋಡ್ ಇಲ್ಲ",
       "ನಿರ್ಗಮನ ಕೋಡ್ 0",
       "ನಿರ್ಗಮನ ಕೋಡ್ 3",
       "ಏನೂ ಇಲ್ಲ"
      ],
      "correct": 0
     },
     {
      "q": "When did a source record count as verified?",
      "qKn": "ಮೂಲ ದಾಖಲೆ ಯಾವಾಗ ಪರಿಶೀಲಿತ ಎಂದು ಪರಿಗಣಿಸಲ್ಪಟ್ಟಿತು?",
      "opts": [
       "With a named verifier and a matching hash",
       "With a named verifier only",
       "With a hash only",
       "Always"
      ],
      "optsKn": [
       "ಹೆಸರಿಸಿದ ಪರಿಶೀಲಕ ಮತ್ತು ಹೊಂದುವ hash ಇದ್ದಾಗ",
       "ಹೆಸರಿಸಿದ ಪರಿಶೀಲಕ ಮಾತ್ರ",
       "hash ಮಾತ್ರ",
       "ಯಾವಾಗಲೂ"
      ],
      "correct": 0
     },
     {
      "q": "Does the denied write on the monitoring file prove deception?",
      "qKn": "ಮಾನಿಟರಿಂಗ್ ಫೈಲ್ ಮೇಲಿನ ನಿರಾಕರಿಸಿದ ಬರಹ ವಂಚನೆ ಸಾಬೀತು ಮಾಡುತ್ತದೆಯೇ?",
      "opts": [
       "No, it shows only that the path was out of scope",
       "Yes",
       "Yes, with the hash",
       "Only for resolved paths"
      ],
      "optsKn": [
       "ಇಲ್ಲ, ಅದು path ವ್ಯಾಪ್ತಿಯ ಹೊರಗಿತ್ತು ಎಂದಷ್ಟೇ ತೋರಿಸುತ್ತದೆ",
       "ಹೌದು",
       "ಹೌದು, hash ಜೊತೆ",
       "ಪರಿಹರಿಸಿದ path ಗೆ ಮಾತ್ರ"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
