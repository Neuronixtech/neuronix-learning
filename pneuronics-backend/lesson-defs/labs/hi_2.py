"""Teaching implementation (our own): Hierarchical architecture and its failure mode, Part 2 - decomposition checks, requirement preservation, three-valued claims, bounded reconciliation, a canary and provenance.
The original code/main.py was not supplied. Everything is deterministic standard-library Python with scripted data; no model decides anything and the evidence references point at nothing real."""
import hashlib
import json
from dataclasses import dataclass
from enum import Enum


@dataclass(frozen=True)
class UserRequest:
    description: str
    required_domains: frozenset


def verify_decomposition(request, assigned_domains):
    required, assigned = set(request.required_domains), set(assigned_domains)
    return {"valid": not (required - assigned), "missing": sorted(required - assigned), "extra": sorted(assigned - required)}


@dataclass(frozen=True)
class RequirementContract:
    task_id: str
    original_requirements: frozenset
    assigned_requirements: frozenset

    def missing(self):
        return sorted(self.original_requirements - self.assigned_requirements)


class ClaimStatus(str, Enum):
    SUPPORTED = "supported"
    REFUTED = "refuted"
    UNKNOWN = "unknown"


def preserving_summary(statement, status):
    return {ClaimStatus.SUPPORTED: f"{statement}: supported by available evidence.", ClaimStatus.REFUTED: f"{statement}: contradicted by available evidence.", ClaimStatus.UNKNOWN: f"{statement}: unable to determine from available evidence."}[status]


def lossy_summary(statement, status):
    return f"{statement}: confirmed." if status != ClaimStatus.REFUTED else f"{statement}: false."


def task_fingerprint(task_name, inputs):
    payload = json.dumps({"task_name": task_name, "inputs": inputs}, sort_keys=True, separators=(",", ":")).encode("utf-8")
    return hashlib.sha256(payload).hexdigest()


def reconcile(check_agreement, evidence_for, max_attempts):
    seen, attempts = [], 0
    for attempt in range(1, max_attempts + 1):
        attempts = attempt
        if check_agreement(attempt):
            return {"resolved": True, "attempts": attempts, "status": "RESOLVED"}
        fp = task_fingerprint("rerun", evidence_for(attempt))
        if fp in seen:
            return {"resolved": False, "attempts": attempts, "status": "ESCALATE_NO_PROGRESS"}
        seen.append(fp)
    return {"resolved": False, "attempts": attempts, "status": "ESCALATE"}


@dataclass(frozen=True)
class CanaryContract:
    original_question: str
    required_domains: frozenset


def canary_check(contract, delegated_domains):
    missing = sorted(contract.required_domains - set(delegated_domains))
    return {"passed": not missing, "missing": missing}


def validate_provenance(summary, findings, evidence):
    errors = []
    for fid in summary["finding_ids"]:
        f = findings.get(fid)
        if f is None:
            errors.append(f"summary cites unknown finding {fid}")
            continue
        for eid in f["evidence_ids"]:
            if eid not in evidence:
                errors.append(f"finding {fid} cites unknown evidence {eid}")
    return errors


def section(title):
    print(f"\n--- {title} ---")


def main():
    section("1. Genuinely running: checking a plan before anything runs")
    req = UserRequest("Assess engineering and legal readiness", frozenset({"engineering", "legal"}))
    print("correct plan:", verify_decomposition(req, ["engineering", "legal"]))
    print("finance for legal:", verify_decomposition(req, ["engineering", "finance"]))
    print("extra security work:", verify_decomposition(req, ["engineering", "legal", "security"]))
    print("the plan that swaps legal for finance is rejected with legal named as missing and finance as extra, and an additional security branch is valid because nothing required is missing; extra work is reported and not blocked, so a separate rule has to decide whether extra work is allowed.")

    section("2. Genuinely running: a narrowed requirement")
    contract = RequirementContract("security-review", frozenset({"authentication", "authorization", "data_protection"}), frozenset({"authentication"}))
    print("missing requirements:", contract.missing())
    print("the original asked for application security in three parts and the delegated task kept one, so authorization and data_protection are lost between the request and the worker; keeping the original set beside the assigned one is what makes the loss visible.")

    section("3. Genuinely running: unknown must stay unknown")
    for st in ClaimStatus:
        print(f"{st.value}: preserving -> {preserving_summary('The system satisfies privacy requirements', st)}")
    print("lossy for unknown ->", lossy_summary("The system satisfies privacy requirements", ClaimStatus.UNKNOWN))
    print("the preserving summary says unable to determine for an unknown claim, while the lossy one turns the same unknown into confirmed, so a summary step can create certainty that no worker had; a separate execution status and claim status stops that at the data level.")

    section("4. Genuinely running: bounded reconciliation and no-progress detection")
    print("never agrees, evidence changes each time:", reconcile(lambda a: False, lambda a: {"round": a}, 3))
    print("never agrees, same evidence every time:", reconcile(lambda a: False, lambda a: {"round": "same"}, 5))
    print("agrees on attempt 2:", reconcile(lambda a: a == 2, lambda a: {"round": a}, 3))
    same = task_fingerprint("verify_authentication", {"application_version": "1.2", "configuration_revision": 8}) == task_fingerprint("verify_authentication", {"configuration_revision": 8, "application_version": "1.2"})
    print("fingerprint ignores key order:", same)
    print("with changing evidence the loop used its three attempts and escalated, with identical evidence it escalated on the second attempt without waiting for the fifth, and a real agreement ended it at once; an equal fingerprint says the inputs repeated and does not prove that the result would repeat.")

    section("5. Genuinely running: an immutable copy of the original request")
    canary = CanaryContract("Assess engineering and legal readiness", frozenset({"engineering", "legal"}))
    manager_rewrite = "Assess technical and financial readiness"
    print("manager rewrote the task as:", manager_rewrite)
    print("canary against the delegated domains:", canary_check(canary, ["engineering", "finance"]), "| against a correct plan:", canary_check(canary, ["engineering", "legal"]))
    print("the manager rewrite of the task text does not change what the canary compares against, so the missing legal work is still found; a canary built from the same biased reading as the manager would miss it, which is why it only detects drift and does not prove correctness.")

    section("6. Genuinely running: tracing a claim back to evidence")
    evidence = {"E-001": {"source": "api-test-results.json"}}
    findings = {"F-001": {"worker": "backend_worker", "statement": "API tests passed", "evidence_ids": ["E-001"]}}
    good = {"summary_id": "S-1", "finding_ids": ["F-001"]}
    broken = {"summary_id": "S-2", "finding_ids": ["F-999"]}
    dangling = {"F-002": {"worker": "ui_worker", "statement": "UI checked", "evidence_ids": ["E-404"]}}
    print("good chain:", validate_provenance(good, findings, evidence))
    print("summary citing a missing finding:", validate_provenance(broken, findings, evidence))
    print("finding citing missing evidence:", validate_provenance({"summary_id": "S-3", "finding_ids": ["F-002"]}, dangling, evidence))
    print("a complete chain gives no errors and both broken chains are named, which makes a final claim checkable back to a worker finding and an evidence record; the record E-001 here is a dictionary entry, so nothing proves that the file exists or says what the finding claims.")


if __name__ == "__main__":
    main()
