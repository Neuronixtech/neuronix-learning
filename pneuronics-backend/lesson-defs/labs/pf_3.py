"""Teaching implementation (our own): OpenAI Preparedness Framework and DeepMind Frontier Safety Framework, Part 3 - an allowed-files check run against path spellings that try to slip past it, a capture runner that records the exit code, output hash and timeout of a command, a safeguards-interference event that is denied, recorded and escalated, a source record that only counts as verified when a hash and a verifier agree, and six unit tests that are run.
The scope check is an application-level string check and not a sandbox: symlinks and operating-system permissions are not tested here, and the commands run by the capture runner are harmless one-line Python programs written by the lab."""
import hashlib
import io
import json
import posixpath
import subprocess
import sys
import tempfile
import unittest
from dataclasses import dataclass
from pathlib import Path, PurePosixPath

ALLOWED_FILES = {"src/application.py", "tests/test_application.py"}


def is_allowed_change(path):
    return str(PurePosixPath(path)) in ALLOWED_FILES


def is_allowed_resolved(path):
    if path.startswith("/"):
        return False
    return posixpath.normpath(path) in ALLOWED_FILES


def capture(command, timeout=2):
    try:
        r = subprocess.run(command, capture_output=True, text=True, timeout=timeout, check=False)
        return {"exit_code": r.returncode, "timed_out": False, "stdout": r.stdout, "stdout_sha256": hashlib.sha256(r.stdout.encode()).hexdigest()[:12], "stderr_lines": len(r.stderr.splitlines())}
    except subprocess.TimeoutExpired:
        return {"exit_code": None, "timed_out": True, "stdout": "", "stdout_sha256": None, "stderr_lines": 0}


def handle_attempt(path, events):
    if is_allowed_change(path):
        events.append({"path": path, "decision": "ALLOW"})
        return "ALLOW"
    events.append({"path": path, "decision": "DENY", "action": "preserve evidence and escalate for review"})
    return "DENY"


@dataclass(frozen=True)
class PolicySource:
    organization: str
    document_name: str
    document_version: str
    content_hash: str
    verified_by: str


def source_verified(src, document_bytes):
    return bool(src.verified_by) and src.content_hash == hashlib.sha256(document_bytes).hexdigest()


class Tests(unittest.TestCase):
    def test_allowed_path(self):
        self.assertTrue(is_allowed_change("src/application.py"))

    def test_monitoring_denied(self):
        self.assertFalse(is_allowed_change("config/monitoring.yaml"))

    def test_traversal_to_monitoring_denied_both_ways(self):
        p = "src/../config/monitoring.yaml"
        self.assertFalse(is_allowed_change(p) or is_allowed_resolved(p))

    def test_resolved_allows_a_roundabout_spelling_of_an_allowed_file(self):
        self.assertTrue(is_allowed_resolved("src/../src/application.py"))
        self.assertFalse(is_allowed_change("src/../src/application.py"))

    def test_failing_command_exit_code_kept(self):
        self.assertEqual(capture([sys.executable, "-c", "import sys; sys.exit(3)"])["exit_code"], 3)

    def test_timeout_recorded(self):
        self.assertTrue(capture([sys.executable, "-c", "import time; time.sleep(5)"], timeout=1)["timed_out"])


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Genuinely running: an allowed-files check against several spellings")
    paths = ["src/application.py", "config/monitoring.yaml", "src//application.py", "./src/application.py", "src/../config/monitoring.yaml", "src/../src/application.py", "/etc/passwd", "SRC/application.py"]
    print(f"{'path':34} {'lesson check':13} resolved check")
    for p in paths:
        print(f"{p:34} {'ALLOW' if is_allowed_change(p) else 'DENY':13} {'ALLOW' if is_allowed_resolved(p) else 'DENY'}")
    print("both checks allowed the real file and denied the monitoring file, the doubled slash and the leading dot were normalised to the allowed name, a path that climbs out and back to the allowed file was denied by the string check and allowed once the path was resolved, and the upper-case spelling was denied by both; this is a string comparison and says nothing about symlinks or file permissions, which were not tested")

    section("2. Genuinely running: an attempt on a file outside the scope")
    events = []
    for p in ("src/application.py", "config/monitoring.yaml"):
        print(p, "->", handle_attempt(p, events))
    print(json.dumps(events[1], sort_keys=True))
    print("the in-scope edit was allowed and the monitoring file was denied with a record and an escalation step; the denial does not prove deceptive behaviour, since the agent may have misunderstood the task, and the event is only worth anything if the agent cannot edit the place that stores it")

    section("3. Genuinely running: capturing evidence from three commands")
    for label, cmd, tmo in (("prints and exits 0", [sys.executable, "-c", "print('ok')"], 2), ("exits with code 3", [sys.executable, "-c", "import sys; print('partial'); sys.exit(3)"], 2), ("runs too long", [sys.executable, "-c", "import time; time.sleep(5)"], 1)):
        c = capture(cmd, tmo)
        print(f"{label:20} exit_code={c['exit_code']!s:5} timed_out={c['timed_out']!s:5} stdout={c['stdout'].strip()!r:10} sha256={c['stdout_sha256']}")
    print("the successful run, the failing run and the run that exceeded its timeout all produced a record with their own exit status, and the failing one kept its exit code 3 and its partial output instead of being reported as a success; a clean exit code alone does not show that the program's decisions were right")

    section("4. Genuinely running: a source record counts as verified only with a hash and a verifier")
    doc = b"An example policy document used only for this demonstration."
    good = PolicySource("Example Lab", "Example Framework", "2026-01", hashlib.sha256(doc).hexdigest(), "reviewer-1")
    no_verifier = PolicySource("Example Lab", "Example Framework", "2026-01", hashlib.sha256(doc).hexdigest(), "")
    stale = PolicySource("Example Lab", "Example Framework", "2026-01", hashlib.sha256(b"older text").hexdigest(), "reviewer-1")
    print("hash matches and a verifier is named:", source_verified(good, doc))
    print("hash matches, nobody named:", source_verified(no_verifier, doc))
    print("verifier named, document has changed since:", source_verified(stale, doc))
    print("only the record with both a named verifier and a matching hash counted as verified, and the document that changed after review no longer did; a matching hash shows the bytes are the ones reviewed and does not show the reviewer read them correctly")

    section("5. Genuinely running: the unit tests")
    stream = io.StringIO()
    res = unittest.TextTestRunner(stream=stream, verbosity=0).run(unittest.defaultTestLoader.loadTestsFromTestCase(Tests))
    print(f"ran {res.testsRun} tests | failures {len(res.failures)} | errors {len(res.errors)} | passed {res.wasSuccessful()}")
    print("the tests cover an allowed path, a denied path, a traversal spelling, the roundabout spelling of an allowed file, an exit code that is kept and a timeout that is recorded, on this lab's own functions")


if __name__ == "__main__":
    main()
