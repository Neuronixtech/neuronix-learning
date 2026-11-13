"""Teaching implementation (our own): delegating agent work, Part 3 - controlled integration on a REAL git repository: merging worker branches in a stated order, a mechanical conflict that stops the merge,
a semantic conflict that git merges cleanly but a cross-unit check catches, the integration gate, and an approval flag an agent could set itself versus an HMAC-signed approval. The signing key is a made-up
lab constant. No language model is used."""
import hashlib
import hmac
import json
import subprocess
import tempfile
from dataclasses import dataclass
from pathlib import Path

GIT = ["git", "-c", "user.name=lab", "-c", "user.email=lab@example.com", "-c", "commit.gpgsign=false"]
KEY = b"lab-only-approval-key"


def git(repo, *a, check=True):
    p = subprocess.run(GIT + list(a), cwd=repo, capture_output=True, text=True)
    if check and p.returncode != 0:
        raise RuntimeError(p.stderr.strip() or p.stdout.strip())
    return p


def commit_file(repo, rel, text, msg):
    (Path(repo) / rel).parent.mkdir(parents=True, exist_ok=True)
    (Path(repo) / rel).write_text(text, encoding="utf-8")
    git(repo, "add", "-A")
    git(repo, "commit", "-q", "-m", msg)


def merge_in_order(repo, branches):
    merged = []
    if git(repo, "status", "--porcelain").stdout.strip():
        return merged, "integration checkout is not clean"
    for b in branches:
        p = git(repo, "merge", "--no-ff", "-q", "-m", f"merge {b}", b, check=False)
        if p.returncode != 0:
            git(repo, "merge", "--abort", check=False)
            return merged, f"conflict while merging {b}; merge aborted"
        merged.append(b)
    return merged, "all merged"


def gate(scope_ok, proof_ok, review_ok, tests_ok, approval_required, approved):
    reasons = [n for n, v in (("scope", scope_ok), ("proof", proof_ok), ("review", review_ok), ("integration tests", tests_ok)) if not v]
    if approval_required and not approved:
        reasons.append("human approval missing")
    return ("PASS" if not reasons else "BLOCK"), reasons


@dataclass
class ApprovalFlag:
    action: str
    approved: bool = False


def sign(action, approver):
    return hmac.new(KEY, f"{action}|{approver}".encode(), hashlib.sha256).hexdigest()


def verify_approval(record, action):
    if record.get("action") != action:
        return False
    return hmac.compare_digest(sign(record["action"], record["approver"]), record.get("sig", ""))


def section(t):
    print(f"\n--- {t} ---")


def main():
    with tempfile.TemporaryDirectory() as d:
        repo = Path(d) / "repo"
        repo.mkdir()
        git(repo, "init", "-q", "-b", "main")
        commit_file(repo, "app/accounts.py", "def create_account(email):" + chr(10) + "    return {'email': email}" + chr(10), "base")
        commit_file(repo, "docs/accounts.md", "POST /accounts takes email" + chr(10), "base docs")
        commit_file(repo, "app/config.py", "MAX_RETRIES = 3" + chr(10), "base config")

        section("1. Genuinely running: merging two worker branches in the contract order")
        git(repo, "checkout", "-q", "-b", "worker/api", "main")
        commit_file(repo, "app/accounts.py", "def create_account(email, username):" + chr(10) + "    return {'email': email, 'username': username}" + chr(10), "api adds username")
        git(repo, "checkout", "-q", "main")
        git(repo, "checkout", "-q", "-b", "worker/docs", "main")
        commit_file(repo, "docs/accounts.md", "POST /accounts takes email" + chr(10) + "Returns the new account" + chr(10), "docs add return value")
        git(repo, "checkout", "-q", "main")
        print("merge result:", merge_in_order(repo, ["worker/api", "worker/docs"]))
        print("log:", git(repo, "log", "--oneline", "-5").stdout.replace(chr(10), " | "))
        print("two branches that touched different files merged cleanly in the stated order; a clean merge only says git could combine the text")

        section("2. Genuinely measuring: a semantic conflict that git did not report")
        api_src = (repo / "app/accounts.py").read_text(encoding="utf-8")
        doc_src = (repo / "docs/accounts.md").read_text(encoding="utf-8")
        print("code requires username:", "username" in api_src, "| docs mention username:", "username" in doc_src)
        print("cross-unit check passed:", ("username" in api_src) == ("username" in doc_src))
        print("the api branch added a required username parameter and the docs branch still says the endpoint takes only email; git merged both without complaint and only a check that compares the two surfaces found the disagreement")

        section("3. Genuinely running: a mechanical conflict stops the merge and leaves a clean tree")
        git(repo, "checkout", "-q", "-b", "worker/a", "main")
        commit_file(repo, "app/config.py", "MAX_RETRIES = 5" + chr(10), "a sets 5")
        git(repo, "checkout", "-q", "main")
        git(repo, "checkout", "-q", "-b", "worker/b", "main")
        commit_file(repo, "app/config.py", "MAX_RETRIES = 7" + chr(10), "b sets 7")
        git(repo, "checkout", "-q", "main")
        print("merge result:", merge_in_order(repo, ["worker/a", "worker/b"]))
        print("working tree status after the abort:", repr(git(repo, "status", "--porcelain").stdout.strip()), "| config now:", (repo / "app/config.py").read_text(encoding="utf-8").strip())
        print("worker a merged, worker b conflicted on the same line and the merge was aborted instead of resolved by guessing; a conflict is a decision point, and the tree is back to a clean state for whoever decides")

        section("4. Genuinely running: the integration gate")
        print("everything passes, approval not needed :", gate(True, True, True, True, False, False))
        print("everything passes, approval required   :", gate(True, True, True, True, True, False))
        print("tests pass but scope failed             :", gate(False, True, True, True, False, False))
        print("proof and review failed                 :", gate(True, False, False, True, False, False))
        print("a pass needs every check, and automated success does not supply a missing approval, so the second line blocked with only the approval missing")

        section("5. Genuinely running: an approval flag the agent can set, and a signed record it cannot forge")
        flag = ApprovalFlag("production_write")
        print("flag before:", flag.approved)
        flag.approved = True
        print("flag after the agent assigns it:", flag.approved)
        record = {"action": "production_write", "approver": "owner-1", "sig": sign("production_write", "owner-1")}
        forged = dict(record, approver="agent")
        print("signed record valid for production_write:", verify_approval(record, "production_write"))
        print("same record presented for another action:", verify_approval(record, "delete_data"))
        print("approver field edited to 'agent'        :", verify_approval(forged, "production_write"))
        print("a plain boolean was set by the code that wanted the permission, while the signed record failed when the action or the approver was changed; the key here is a constant in the lab, and a real key must be held by a service the agent cannot read")


if __name__ == "__main__":
    main()
