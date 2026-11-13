"""Teaching implementation (our own): defining the outcome before choosing the output, Part 3 - acceptance evidence fixed before building, a verification gate that separates 'built correctly' from 'solved the right problem',
measuring the outcome against a baseline with made-up samples, builder and reviewer separation, an approval policy and when a target may be revised. All numbers are ILLUSTRATIVE. No language model is used."""
import statistics


def make_evidence(metric, baseline, target, sample_min):
    return {"metric": metric, "baseline": baseline, "target": target, "sample_min": sample_min}


def measure(samples, ev):
    if len(samples) < ev["sample_min"]:
        return {"status": "insufficient_data", "n": len(samples)}
    med = statistics.median(samples)
    return {"status": "met" if med <= ev["target"] else "not_met", "n": len(samples), "median": med, "baseline": ev["baseline"]}


def gate(tests_pass, constraints_ok, outcome):
    reasons = []
    if not tests_pass:
        reasons.append("tests failing")
    if not constraints_ok:
        reasons.append("constraint violated")
    if outcome["status"] == "insufficient_data":
        reasons.append("outcome not measured")
    elif outcome["status"] == "not_met":
        reasons.append("outcome target not met")
    return ("PASS" if not reasons else "BLOCK"), reasons


def review(builder, reviewer):
    return "independent" if builder != reviewer else "not independent"


def approval_needed(action):
    return action in {"change_alert_routing", "enable_auto_remediation", "write_production_data"}


def may_revise_target(old_target, new_target, evidence_note, approver):
    if not evidence_note or not approver:
        return False, "a revision needs evidence and an approver"
    if new_target > old_target and "baseline" not in evidence_note:
        return False, "loosening the target must cite the baseline"
    return True, "revision recorded"


def section(t):
    print(f"\n--- {t} ---")


def main():
    ev = make_evidence("minutes to identify the failing service", baseline=12, target=2, sample_min=8)
    section("1. Genuinely running: evidence is defined before building")
    print("evidence:", ev)
    print("the metric, the baseline, the target and the minimum sample size were written down before any implementation existed, so the result cannot be argued into success afterwards; these numbers are invented for the lab")

    section("2. Genuinely computing: tests passing is not the outcome (ILLUSTRATIVE samples, minutes)")
    after_build = [9, 10, 8, 9, 11, 9, 10, 8, 9]
    after_fix = [2, 1.5, 3, 1.8, 2, 1.2, 2.5, 1.9, 1.6]
    for label, s, t in (("assistant built, tests pass", after_build, True), ("after fixing metadata labels", after_fix, True)):
        out = measure(s, ev)
        print(f"{label:30} measure={out} gate={gate(t, True, out)}")
    print("the first build passed every test and the gate still blocked because the median of nine minutes missed the two-minute target, while the second sample met it; the same tests were green both times, so they could not tell the two apart")

    section("3. Genuinely running: a missing measurement blocks")
    out = measure([2, 2, 3], ev)
    print("three samples:", out, "->", gate(True, True, out))
    print("a gate that treats no data as success would pass a change nobody measured, so too few samples is its own reason to block")

    section("4. Genuinely running: constraints and the gate")
    out = measure(after_fix, ev)
    print("outcome met, constraint violated:", gate(True, False, out))
    print("outcome met, tests failing      :", gate(False, True, out))
    print("everything holds                :", gate(True, True, out))
    print("a speed gain bought by breaking the read-only rule still blocks, because the outcome is one condition among several")

    section("5. Genuinely running: independent review, approval and target revision")
    print("builder and reviewer the same agent :", review("agent-a", "agent-a"))
    print("builder and reviewer different       :", review("agent-a", "agent-b"))
    for a in ("read_logs", "enable_auto_remediation"):
        print(f"approval needed for {a:26}: {approval_needed(a)}")
    print("revise target without evidence      :", may_revise_target(2, 4, "", "owner"))
    print("loosen target without citing baseline:", may_revise_target(2, 4, "the team prefers it", "owner"))
    print("loosen target citing baseline        :", may_revise_target(2, 4, "baseline measured at 12 minutes; 2 not reachable with current logs", "owner"))
    print("the builder cannot be its own independent reviewer, risky actions need a human, and a target moves only with evidence and an approver; here 'cites the baseline' is a keyword check on the note, which a careless note could satisfy")


if __name__ == "__main__":
    main()
