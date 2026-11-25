"""Teaching implementation (our own): Hierarchical architecture and its failure mode, Part 3 - choosing a pattern, a gate before delegation, evidence and reconciliation rules, cost, and a generated fitness document.
The original code/main.py was not supplied. The scoring rules are our own transparent heuristic, not calibrated against real outcomes. CrewAI and LangGraph material in the lesson is conceptual and was not run."""
import os
import tempfile
from dataclasses import dataclass
from enum import Enum


class Pattern(str, Enum):
    SEQUENTIAL = "sequential"
    FLAT = "flat_supervisor"
    HIERARCHICAL = "hierarchical"


@dataclass(frozen=True)
class TaskProfile:
    description: str
    independent_branches: int
    branches_with_subteams: int
    dependency_strength: int
    reconciliation_budget: int
    observability_ready: bool


def recommend_pattern(t):
    if t.independent_branches < 1:
        raise ValueError("At least one branch is required")
    if t.dependency_strength >= 3 or t.independent_branches == 1:
        return Pattern.SEQUENTIAL, "strong dependencies or one branch"
    if t.branches_with_subteams >= 2 and t.reconciliation_budget >= 1 and t.observability_ready:
        return Pattern.HIERARCHICAL, "independent branches with sub-teams and the controls to manage them"
    return Pattern.FLAT, "independent work without enough sub-team structure or controls"


CAPABILITIES = {"engineering_manager": {"engineering"}, "legal_manager": {"legal"}, "finance_manager": {"finance"}}
MANAGER_OF = {"engineering": "engineering_manager", "legal": "legal_manager", "finance": "finance_manager"}


def validate_assignment(manager, domain):
    return domain in CAPABILITIES.get(manager, set())


def validate_plan(required, plan):
    errors = []
    missing = sorted(set(required) - set(plan))
    if missing:
        errors.append(f"Missing required domains: {missing}")
    for d in plan:
        if not validate_assignment(MANAGER_OF.get(d, ""), d):
            errors.append(f"No capable manager for {d}")
    return errors


def run_workflow(required, plan, legal_status="supported", drop_refs=None):
    errors = validate_plan(required, plan)
    if errors:
        return {"status": "rejected", "errors": errors, "reports": 0}
    findings = {"engineering": ("success", "supported"), "legal": ("success", legal_status), "finance": ("success", "supported")}
    reports = [{"domain": d, "execution": findings[d][0], "evidence": findings[d][1], "refs": [f"mock://{d}"] if findings[d][1] != "unknown" else []} for d in plan]
    for r in reports:
        if r["domain"] == drop_refs:
            r["refs"] = []
    unresolved = [r["domain"] for r in reports if r["evidence"] == "unknown"]
    if unresolved:
        return {"status": "needs_review", "errors": [f"Unresolved requirement: {d}" for d in unresolved], "reports": len(reports)}
    uncited = [r["domain"] for r in reports if not r["refs"]]
    if uncited:
        return {"status": "needs_review", "errors": [f"Missing evidence references: {d}" for d in uncited], "reports": len(reports)}
    return {"status": "accepted", "errors": [], "reports": len(reports)}


def classify(kind):
    return {"factual": "targeted evidence request", "scope": "clarify the task contract", "policy": "apply the explicit decision policy", "uncertainty": "compare the evidence"}[kind]


def reconcile_policy(attempts_used, budget, new_evidence):
    if new_evidence:
        return "continue" if attempts_used < budget else "escalate_budget_exhausted"
    return "escalate_no_progress"


def section(title):
    print(f"\n--- {title} ---")


def main():
    section("1. Genuinely running: picking a pattern from the structure of the task")
    tasks = [TaskProfile("research, draft, edit", 1, 0, 4, 1, True), TaskProfile("three independent reviews", 3, 0, 0, 1, True),
             TaskProfile("enterprise launch readiness", 4, 4, 1, 2, True), TaskProfile("enterprise launch, no tracing", 4, 4, 1, 2, False)]
    for t in tasks:
        p, why = recommend_pattern(t)
        print(f"{t.description}: {p.value} ({why})")
    print("a chain of dependent steps gets a sequential pipeline, three independent reviews get a flat supervisor, and four departments with sub-teams get a hierarchy only when tracing is ready, otherwise the same task falls back to a flat supervisor; the rules and thresholds are our own heuristic and have not been calibrated on real outcomes.")

    section("2. Genuinely running: capability checks")
    print("legal_manager for legal:", validate_assignment("legal_manager", "legal"), "| finance_manager for legal:", validate_assignment("finance_manager", "legal"), "| unknown manager:", validate_assignment("ghost", "legal"))
    print("a legal task is accepted for the legal manager and refused for the finance manager, and an unregistered manager has no capabilities; a capability match checks who may do a job and not whether the plan covers the request, so both checks are needed.")

    section("3. Genuinely running: three scenarios with a gate before delegation")
    required = ["engineering", "legal"]
    for label, plan, legal in (("happy path", ["engineering", "legal"], "supported"), ("legal swapped for finance", ["engineering", "finance"], "supported"), ("unknown legal evidence", ["engineering", "legal"], "unknown")):
        print(f"{label}: {run_workflow(required, plan, legal)}")
    print("the correct plan is accepted with two reports, the swapped plan is rejected before any department runs and so has zero reports, and the plan with unknown legal evidence runs both departments and ends as needs_review instead of being accepted; accepted here means the scripted structural rules held and not that a product is ready.")

    section("4. Genuinely running: a finding that cites nothing")
    print("with references:", run_workflow(required, ["engineering", "legal"]))
    print("engineering cites nothing:", run_workflow(required, ["engineering", "legal"], drop_refs="engineering"))
    print("the same plan and the same supported findings are accepted when every report cites a reference and end as needs_review when the engineering report cites none, naming the department; the references in this lab are mock strings, so the gate checks that something is cited and cannot check that the cited thing exists or supports the claim.")

    section("5. Genuinely running: what kind of disagreement it is, and when to stop")
    for kind in ("factual", "scope", "policy", "uncertainty"):
        print(f"{kind}: {classify(kind)}")
    print("attempt 1 of 2 with new evidence:", reconcile_policy(1, 2, True), "| attempt 2 of 2 with new evidence:", reconcile_policy(2, 2, True), "| attempt 1 with no new evidence:", reconcile_policy(1, 2, False))
    print("each kind of disagreement gets its own response, and the policy escalates when the budget is used up or when an attempt brings no new evidence, instead of asking the departments to agree again; engineering saying deployable and legal saying not approved can both be true, so the final report keeps both statements.")

    section("6. Genuinely computing: management calls, tokens and a generated fitness document")
    calls = 2 + 2 * 3 + 4
    tokens = 8 * 2000 + 4 * 3000
    print("calls for a top manager of 2, two sub-managers of 3 each and four workers of 1:", calls, "| tokens at 8 manager calls of 2000 and 4 worker calls of 3000:", tokens)
    required_sections = ["Purpose", "Task description", "Organizational structure", "Architecture alternatives", "Fitness assessment", "Recommendation", "Required safeguards", "Failure modes", "Acceptance criteria", "Verification plan", "Final decision"]
    text = "# Hierarchy Fitness Evaluation\n\n" + "\n\n".join(f"## {s}\n\nTo be completed for this task." for s in required_sections)
    path = os.path.join(tempfile.mkdtemp(), "skill-hierarchy-fitness.md")
    with open(path, "w", encoding="utf-8") as f:
        f.write(text)
    written = open(path, encoding="utf-8").read()
    print("sections written:", written.count("\n## "), "| all required headings present:", all(f"## {s}" in written for s in required_sections))
    print("twelve model calls and 28000 tokens are what the example numbers add up to for this shape of hierarchy, and a generated skeleton with eleven headings is not an evaluation until someone fills it in; the file is written to a temporary folder and the call and token figures are example inputs and not measurements.")


if __name__ == "__main__":
    main()
