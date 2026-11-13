"""Teaching implementation (our own): turning agent corrections into system improvements, Part 2 - executable controls that are verified against the failure they target: a scope validator, a schema validator,
a regression test run for real against a buggy and a fixed implementation, an unverified control that never runs, idempotent event ingestion and a JSON report that is validated on read. All data is made up.
No language model is used."""
import json
import subprocess
import sys
import tempfile
import textwrap
from pathlib import Path, PurePosixPath


def check_scope(changed, allowed):
    allowed_parts = [PurePosixPath(a.replace(chr(92), "/")).parts for a in allowed]
    bad = [c for c in changed if not any(PurePosixPath(c.replace(chr(92), "/")).parts[: len(p)] == p for p in allowed_parts)]
    return {"ok": not bad, "violations": bad}


def check_response(resp):
    missing = [k for k in ("status", "user_id") if not isinstance(resp, dict) or k not in resp]
    return {"ok": not missing, "missing": missing}


def run_unittest(code, test):
    with tempfile.TemporaryDirectory() as d:
        Path(d, "totals.py").write_text(code, encoding="utf-8")
        Path(d, "test_totals.py").write_text(test, encoding="utf-8")
        p = subprocess.run([sys.executable, "-B", "-m", "unittest", "-q", "test_totals"], cwd=d, capture_output=True, text=True)
        return p.returncode, (p.stderr.strip().splitlines() or [""])[-1]


BUGGY = "def total(items):" + chr(10) + "    return sum(items) - 1" + chr(10)
FIXED = "def total(items):" + chr(10) + "    return sum(items)" + chr(10)
TEST = textwrap.dedent("""
    import unittest
    from totals import total
    class T(unittest.TestCase):
        def test_total(self):
            self.assertEqual(total([1, 2, 3]), 6)
    """)
TEST_NO_ASSERT = textwrap.dedent("""
    import unittest
    from totals import total
    class T(unittest.TestCase):
        def test_total(self):
            total([1, 2, 3])
    """)
TEST_NOT_COLLECTED = textwrap.dedent("""
    import unittest
    from totals import total
    class T(unittest.TestCase):
        def check_total(self):
            self.assertEqual(total([1, 2, 3]), 6)
    """)


def verify_control(control_fails_on_bad, control_passes_on_good):
    return "verified" if control_fails_on_bad and control_passes_on_good else "unverified"


class Ingest:
    def __init__(self):
        self.seen, self.records = set(), []

    def add(self, event):
        if event["event_id"] in self.seen:
            return False
        self.seen.add(event["event_id"])
        self.records.append(event)
        return True


def validate_report(text):
    data = json.loads(text)
    if not isinstance(data, dict) or not isinstance(data.get("corrections"), list):
        raise ValueError("Expected a corrections list")
    for i, c in enumerate(data["corrections"]):
        for k in ("fingerprint", "cause", "layer", "owner", "review_by", "verified"):
            if k not in c:
                raise ValueError(f"corrections[{i}] is missing {k}")
    return data


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Genuinely running: a scope control and a schema control")
    print("changed README.md only        :", check_scope(["README.md"], ["app/registration"]))
    print("changed registration file     :", check_scope(["app/registration/validate.py"], ["app/registration"]))
    print("app/registration_old.py       :", check_scope(["app/registration_old.py"], ["app/registration"]))
    print("response with user_id         :", check_response({"status": "success", "user_id": 42}))
    print("response without user_id      :", check_response({"status": "success"}))
    print("the controls turned two conversational corrections into checks that run on the output, and the third line shows component matching keeping a sibling directory outside the allowed path")

    section("2. Genuinely running: a regression test is run against bad and good code")
    r_bad, last_bad = run_unittest(BUGGY, TEST)
    r_good, last_good = run_unittest(FIXED, TEST)
    print("test against buggy code exit:", r_bad, "|", last_bad)
    print("test against fixed code exit:", r_good, "|", last_good)
    print("status:", verify_control(r_bad == 1, r_good == 0))
    print("a control counts as verified here because it failed on the code that had the defect and passed on the corrected code; passing alone says nothing about whether it can detect the failure")

    section("3. Genuinely running: controls that look like protection and are not")
    r1, _ = run_unittest(BUGGY, TEST_NO_ASSERT)
    r2, l2 = run_unittest(BUGGY, TEST_NOT_COLLECTED)
    print("test with no assertion against buggy code exit :", r1, "->", verify_control(r1 == 1, True))
    print("test never collected against buggy code exit   :", r2, "|", l2, "->", verify_control(r2 == 1, True))
    print("the first exited 0 on code that was wrong because it never compared anything; the second was not named test_ so no test ran and the runner exited 5, which is not the exit 1 of a real test failure, so only an exit of 1 counts as the control catching the defect; running a control against the known-bad case is what exposes both")

    section("4. Genuinely running: duplicate events are ingested once")
    ing = Ingest()
    evs = [{"event_id": "a1", "cause": "off_scope_edit"}, {"event_id": "a1", "cause": "off_scope_edit"}, {"event_id": "a2", "cause": "off_scope_edit"}]
    print("accepted:", [ing.add(e) for e in evs], "| stored records:", len(ing.records))
    print("without the event id check the same webhook delivered twice would have counted as two recurrences and promoted a control early; a retry is not a new failure")

    section("5. Genuinely running: a report is validated when it is read")
    good = json.dumps({"corrections": [{"fingerprint": "1ad37322ca49", "cause": "off_scope_edit", "layer": "scope_policy", "owner": "platform", "review_by": "2027-02-01", "verified": True}]})
    no_owner = json.dumps({"corrections": [{"fingerprint": "1ad37322ca49", "cause": "off_scope_edit", "layer": "scope_policy", "review_by": "2027-02-01", "verified": True}]})
    for label, text in (("complete record", good), ("record without owner", no_owner), ("not a list", json.dumps({"corrections": {}})), ("not json", "{")):
        try:
            validate_report(text)
            print(f"{label:22} accepted")
        except (ValueError, json.JSONDecodeError) as e:
            print(f"{label:22} rejected: {type(e).__name__}: {str(e)[:48]}")
    print("a report that cannot say who owns a control or when it is due for review is rejected on read, so a hand-edited file cannot drop those fields without anyone noticing")


if __name__ == "__main__":
    main()
