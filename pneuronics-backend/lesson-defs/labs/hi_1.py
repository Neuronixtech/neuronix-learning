"""Teaching implementation (our own): Hierarchical architecture and its failure mode, Part 1 - a three-level hierarchy, a correct delegation and a perturbed one.
The original code/main.py was not supplied. Managers and workers are scripted functions with canned findings: no model is used and no real engineering, legal or finance review happens."""
from dataclasses import dataclass
from typing import List


@dataclass
class Task:
    task_id: str
    domain: str
    description: str


@dataclass
class WorkerResult:
    worker_name: str
    domain: str
    findings: List[str]
    success: bool = True


@dataclass
class DepartmentReport:
    manager_name: str
    domain: str
    worker_results: List[WorkerResult]
    summary: str


class Worker:
    def __init__(self, name, domain, findings):
        self.name, self.domain, self.findings = name, domain, findings

    def execute(self, task):
        if task.domain != self.domain:
            return WorkerResult(self.name, self.domain, [f"cannot handle domain {task.domain}"], success=False)
        return WorkerResult(self.name, self.domain, list(self.findings))


class DepartmentManager:
    def __init__(self, name, domain, workers):
        self.name, self.domain, self.workers = name, domain, workers

    def execute(self, task):
        results = [w.execute(Task(task.task_id + "/" + w.name, self.domain, task.description)) for w in self.workers]
        ok = all(r.success for r in results)
        return DepartmentReport(self.name, self.domain, results, f"{self.domain} assessment completed" if ok else f"{self.domain} assessment failed")


class TopManager:
    def __init__(self, managers):
        self.managers = managers

    def run(self, required_domains, delegated_domains):
        reports = [self.managers[d].execute(Task("root-" + d, d, "Assess readiness")) for d in delegated_domains]
        delivered = [r.domain for r in reports]
        missing = sorted(set(required_domains) - set(delivered))
        verdict = "COVERAGE SATISFIED" if not missing else "INCOMPLETE"
        return reports, delivered, missing, verdict


def build():
    return TopManager({
        "engineering": DepartmentManager("engineering_manager", "engineering", [Worker("frontend_worker", "engineering", ["frontend checked"]), Worker("backend_worker", "engineering", ["backend checked"])]),
        "legal": DepartmentManager("legal_manager", "legal", [Worker("legal_worker", "legal", ["compliance checked"])]),
        "finance": DepartmentManager("finance_manager", "finance", [Worker("finance_worker", "finance", ["costs estimated"])]),
    })


def section(title):
    print(f"\n--- {title} ---")


def main():
    required = ["engineering", "legal"]
    top = build()

    section("1. Genuinely running: the correct delegation")
    reports, delivered, missing, verdict = top.run(required, ["engineering", "legal"])
    print("delivered:", delivered, "| missing:", missing, "| verdict:", verdict, "| workers run:", sum(len(r.worker_results) for r in reports))
    print("both required departments received work, the engineering manager used two workers and the legal manager one, and nothing required is missing; the verdict is called coverage satisfied and not success, because the findings are canned and no real review took place.")

    section("2. Genuinely running: the same hierarchy with finance in place of legal")
    reports2, delivered2, missing2, verdict2 = top.run(required, ["engineering", "finance"])
    print("delivered:", delivered2, "| missing:", missing2, "| verdict:", verdict2)
    print("every report says completed:", all(r.summary.endswith("completed") for r in reports2), "| every worker reported success:", all(w.success for r in reports2 for w in r.worker_results))
    print("each department and each worker finished correctly and the run still fails the original request, because legal was never delegated; local execution success cannot show a decomposition error, so the check has to compare what was delivered with what was asked.")

    section("3. Genuinely running: a mislabelled task against a worker")
    legal_worker = Worker("legal_worker", "legal", ["compliance checked"])
    finance_worker = Worker("finance_worker", "finance", ["costs estimated"])
    wrong = finance_worker.execute(Task("t", "legal", "Review privacy"))
    right = finance_worker.execute(Task("t", "finance", "Estimate costs"))
    print("legal task to the finance worker:", wrong.success, wrong.findings, "| finance task to the finance worker:", right.success)
    print("a task whose domain label does not match the worker is refused, which catches careless routing; the finance manager in experiment 2 received a correctly labelled finance task and had no way to know that the user wanted legal, so a local check cannot replace a check against the original request.")

    section("4. Genuinely running: a department with nobody in it")
    empty = DepartmentManager("legal_manager", "legal", [])
    report = empty.execute(Task("t", "legal", "Assess"))
    print("workers:", len(report.worker_results), "| summary:", report.summary)
    print("all() over an empty list is True, so a department with no workers reports its assessment as completed without any work having been done; a manager that must have workers has to reject an empty set explicitly.")

    section("5. Genuinely computing: why extra layers are not free")
    p = 0.95
    print(f"three transformations that each keep the requirements with probability {p}: {p ** 3:.4f}")
    r = 0.9
    print(f"three summaries that each keep 90% of a chosen measure of information: {r ** 3:.3f}")
    print("under these invented independent probabilities complete preservation drops to about 85.7% and retained information to 72.9% after three steps; the numbers are illustrations of compounding and not measurements, and real failures are correlated.")

    section("6. Genuinely computing: what a sub-manager summary saves and risks")
    worker_tokens, summary_tokens = 15 * 2000, 3 * 1000
    print(f"fifteen reports of 2000 tokens: {worker_tokens} | three summaries of 1000 tokens: {summary_tokens} | reduction: {100 * (1 - summary_tokens / worker_tokens):.0f}%")
    print("the top manager reads a tenth of the text it would otherwise read, at the price of the sub-managers own calls and of whatever detail the summaries drop; the token counts are example inputs from the lesson, so this shows the trade and does not measure any real saving.")


if __name__ == "__main__":
    main()
