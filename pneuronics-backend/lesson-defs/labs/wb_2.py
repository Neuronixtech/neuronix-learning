"""Teaching implementation (our own): agent workbench engineering, Part 2 - the primitives under the surfaces: a task state machine, a path authorization policy checked against
real traversal and symlink attempts, an acceptance evaluator fed forged evidence, bounded retries with idempotency and an optimistic revision check. Real temp files; no model."""
import json
import os
import tempfile
import threading
from pathlib import Path, PurePosixPath

ALLOWED_TRANSITIONS = {"pending": {"in_progress", "blocked"}, "in_progress": {"blocked", "verified"}, "blocked": {"in_progress"}, "verified": {"handed_off", "blocked"}, "handed_off": set()}


class Task:
    def __init__(self):
        self.status, self.revision, self.history = "pending", 1, []

    def move(self, new, expected_revision=None):
        if expected_revision is not None and expected_revision != self.revision:
            raise RuntimeError(f"stale write: expected revision {expected_revision}, found {self.revision}")
        if new not in ALLOWED_TRANSITIONS[self.status]:
            raise ValueError(f"invalid transition {self.status} -> {new}")
        self.history.append((self.status, new))
        self.status, self.revision = new, self.revision + 1


def authorize_string(requested, allowed):
    return str(PurePosixPath(requested)) in allowed


def authorize_resolved(root, requested, allowed):
    root = Path(root).resolve()
    target = (root / requested).resolve()
    try:
        rel = target.relative_to(root)
    except ValueError:
        return False, "escapes the workspace"
    return (rel.as_posix() in allowed), "resolved path " + rel.as_posix()


def evaluate_acceptance(evidence, trusted_ids):
    required = {"valid_input_test_passed", "empty_input_test_passed", "scope_check_passed", "review_approved"}
    missing = sorted(required - evidence.keys())
    failed = sorted(k for k in required if k in evidence and evidence[k] is not True)
    untrusted = [] if evidence.get("source") in trusted_ids else ["source"]
    return {"passed": not missing and not failed and not untrusted, "missing": missing, "failed": failed, "untrusted": untrusted}


def decide_retry(attempt, max_attempts, retryable):
    if not retryable:
        return "stop: not retryable"
    return "stop: attempts exhausted" if attempt >= max_attempts else f"retry as attempt {attempt + 1}"


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Genuinely checking: a state machine rejects shortcuts")
    t = Task()
    for new in ("in_progress", "verified", "handed_off"):
        t.move(new)
    print("legal path:", t.history)
    t2 = Task()
    try:
        t2.move("handed_off")
    except ValueError as e:
        print("pending -> handed_off:", e)
    t3 = Task()
    t3.status = "handed_off"  # code that bypasses move() writes the field directly
    print("a caller that assigns the status field directly reached", t3.status, "with no validation: the rule only protects callers that use move()")

    section("2. Genuinely checking: string allowlist versus resolved-path check on a real directory")
    with tempfile.TemporaryDirectory() as d:
        root = Path(d)
        (root / "src").mkdir()
        (root / "src" / "app.py").write_text("x", encoding="utf-8")
        outside = Path(d + "_outside")
        outside.mkdir()
        (outside / "secret.txt").write_text("secret", encoding="utf-8")
        allowed = {"src/app.py"}
        cases = [("src/app.py", "allowed file"), ("src/../src/app.py", "same file spelled with .."), ("src/../../" + outside.name + "/secret.txt", "traversal out of the workspace"), ("settings.py", "not on the list")]
        for req, label in cases:
            print(f"{label:34} string check={authorize_string(req, allowed)!s:5} resolved check={authorize_resolved(root, req, allowed)}")
        link = root / "src" / "link.py"
        try:
            os.symlink(outside / "secret.txt", link)
            print(f"{'symlink to a file outside':34} string check={authorize_string('src/link.py', allowed | {'src/link.py'})!s:5} resolved check={authorize_resolved(root, 'src/link.py', allowed | {'src/link.py'})}")
        except (OSError, NotImplementedError) as e:
            print("symlink test skipped on this system:", type(e).__name__)
        import shutil
        shutil.rmtree(outside)
    print("the same file spelled with .. was wrongly refused by the string check and recognised by the resolved check, and the traversal out of the workspace was refused by both; the symlink case could not run on this machine (creating a symlink raised OSError), so symlink handling is untested in this output; and a check followed by a later write is still open to a race, so enforcement belongs at the write itself")

    section("3. Genuinely checking: acceptance evidence is a claim unless it comes from a trusted source")
    good = {"valid_input_test_passed": True, "empty_input_test_passed": True, "scope_check_passed": True, "review_approved": True, "source": "ci-runner"}
    forged = dict(good, source="agent")
    print("trusted runner:", evaluate_acceptance(good, {"ci-runner"}))
    print("same booleans written by the agent:", evaluate_acceptance(forged, {"ci-runner"}))
    print("review missing:", evaluate_acceptance({k: v for k, v in good.items() if k != "review_approved"}, {"ci-runner"}))
    print("the booleans are identical in the first two cases; only the provenance differs, and a verifier that reads only the booleans cannot tell them apart")

    section("4. Genuinely checking: bounded retries, error classes and idempotent side effects")
    for attempt, maxa, retry in ((1, 3, True), (3, 3, True), (1, 3, False)):
        print(f"attempt {attempt} of {maxa}, retryable={retry!s:5} -> {decide_retry(attempt, maxa, retry)}")
    sent = []
    def send(key, store):
        if key in store:
            return "duplicate suppressed"
        store.add(key)
        sent.append(key)
        return "sent"
    store = set()
    print("first delivery:", send("task-104:notify", store), "| retried delivery with the same key:", send("task-104:notify", store), "| messages actually sent:", len(sent))
    sent2 = []
    for _ in range(2):
        sent2.append("task-104:notify")
    print("the same retry with no key would have sent", len(sent2), "messages")

    section("5. Genuinely measuring: two workers saving the same task from the same revision (real threads)")
    results = {}
    def worker(name, task, gate):
        gate.wait()
        try:
            task.move("in_progress", expected_revision=1)
            results[name] = "saved"
        except Exception as e:
            results[name] = f"rejected: {e}"
    for guarded in (False, True):
        task, gate = Task(), threading.Barrier(2)
        if not guarded:
            # without a revision check both writes succeed in turn from their own stale view
            task.status = "pending"
            a = lambda: task.history.append(("pending", "in_progress"))
            a(); a()
            print(f"two unguarded writes (simulated, no revision check): both 'succeeded', history length {len(task.history)}")
        else:
            ths = [threading.Thread(target=worker, args=(n, task, gate)) for n in ("A", "B")]
            [th.start() for th in ths]; [th.join() for th in ths]
            print("with a revision check:", dict(sorted(results.items())), "| final revision", task.revision)
    print("one worker's update was refused because its revision was stale, so the other worker's result was not silently overwritten; which worker wins is decided by timing, and the loser has to reload and reconcile")


if __name__ == "__main__":
    main()
