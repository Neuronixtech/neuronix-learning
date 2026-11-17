"""Teaching implementation (our own): CAIS, CAISI and societal-scale risk, Part 3 - turning safety claims into evidence by running a test for each control against a correct and a deliberately broken version of it (a miniature mutation check), a weak test that misses its bug, a claim with no test at all, an evidence-level state machine that refuses skipped steps, an incident triage that leaves legal reportability to a person and a structured question rule for an audit.
The five controls are tiny functions written by the lab, the broken variants are bugs the lab chose and no real system, law or organisation is assessed; whether an incident is legally reportable under any statute is deliberately left as an input and is not decided here.
"""
import hashlib

ALLOWED_PATHS = {"src/application.py", "tests/test_application.py"}


# --- correct controls ---
def approval_gate_ok(request, approvals):
    return any(a["target"] == request["target"] and a["decision"] == "approved" for a in approvals)


def scope_ok(path):
    return path in ALLOWED_PATHS


def run_with_kill_ok(steps, kill_at):
    done = 0
    for i in range(steps):
        if kill_at is not None and i >= kill_at:
            break
        done += 1
    return done


def rollback_ok(state, change):
    before = dict(state)
    state.update(change)
    state.clear()
    state.update(before)
    return state


def read_ok(token, resource):
    return resource in token["scopes"]


# --- broken variants ---
def approval_gate_bad(request, approvals):
    return len(approvals) > 0


def scope_bad(path):
    return path.startswith("src")


def run_with_kill_bad(steps, kill_at):
    return steps if kill_at is None or kill_at > 0 else 0


def rollback_bad(state, change):
    before = dict(state)
    state.update(change)
    state.clear()
    state.update({k: str(v)[::-1] for k, v in before.items()})
    return state


def read_bad(token, resource):
    return bool(token["scopes"])


IMPLS = {
    "approval_gate": (approval_gate_ok, approval_gate_bad),
    "file_scope": (scope_ok, scope_bad),
    "kill_switch": (run_with_kill_ok, run_with_kill_bad),
    "rollback": (rollback_ok, rollback_bad),
    "credential_scope": (read_ok, read_bad),
}


def t_approval(f):
    return f({"target": "prod"}, [{"target": "staging", "decision": "approved"}]) is False and f({"target": "prod"}, [{"target": "prod", "decision": "approved"}]) is True


def t_scope(f):
    return f("config/monitoring.yaml") is False and f("src-private/keys.txt") is False and f("src/application.py") is True


def t_kill(f):
    return f(10, 4) == 4 and f(10, None) == 10


def t_rollback_strong(f):
    s = {"quantity": 100, "name": "widget"}
    h = hashlib.sha256(repr(sorted(s.items())).encode()).hexdigest()
    out = f(s, {"quantity": 90})
    return hashlib.sha256(repr(sorted(out.items())).encode()).hexdigest() == h


def t_rollback_weak(f):
    s = {"quantity": 100, "name": "widget"}
    return len(f(s, {"quantity": 90})) == 2


def t_cred(f):
    return f({"scopes": ["orders"]}, "orders") is True and f({"scopes": ["orders"]}, "secrets") is False


TESTS = [("approval_gate", "refuses an approval for another target", t_approval), ("file_scope", "refuses a look-alike folder and the monitoring file", t_scope),
         ("kill_switch", "stops at step 4 of 10 and runs all 10 without a stop", t_kill), ("rollback", "state hash equals the hash before the change", t_rollback_strong),
         ("rollback", "state has the same number of keys", t_rollback_weak), ("credential_scope", "denies a resource outside the token scopes", t_cred)]

CLAIMS = {"Agent cannot deploy without approval": "approval_gate", "Agent respects file boundaries": "file_scope", "Agent can be stopped": "kill_switch",
          "Failed operations can be recovered": "rollback", "Credential access is scoped": "credential_scope", "Incidents are investigated and closed": None, "Safety findings are resolved": None}

LEVELS = ["UNVERIFIED_DESCRIPTION", "DOCUMENTED_FINDING", "REPRODUCED_FINDING", "REMEDIATED_FINDING", "VERIFIED_REMEDIATION"]


def advance(level, target):
    if LEVELS.index(target) != LEVELS.index(level) + 1:
        raise ValueError(f"cannot move from {level} to {target}")
    return target


def triage(incident, statutory_assessment=None):
    sev = "HIGH" if incident.get("unauthorised_action") and incident.get("real_data") else ("MEDIUM" if incident.get("unauthorised_action") else "LOW")
    return {"severity": sev, "legally_reportable": "NEEDS_LEGAL_REVIEW" if statutory_assessment is None else statutory_assessment}


def check_audit_status(dep):
    if dep.get("external_audit_completed") is False:
        return {"category": "organizational_risks", "finding": "External audit not completed", "review_required": True}
    return None


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Genuinely running: each control test against a correct and a broken version")
    print(f"{'control':17} {'test':52} {'correct':8} {'broken':7} verdict")
    caught = 0
    for control, name, fn in TESTS:
        ok, bad = IMPLS[control]
        a, b = fn(ok), fn(bad)
        caught += (a and not b)
        print(f"{control:17} {name:52} {a!s:8} {b!s:7} {'catches the bug' if (a and not b) else 'MISSES the bug' if a else 'test fails on a correct control'}")
    print(f"tests that pass on the correct control and fail on the broken one: {caught} of {len(TESTS)}")
    print("five of the six tests passed on the correct control and failed on the broken one, and the weak rollback test that only counts keys passed on both, so it would have reported the rollback as working when it restored reversed values; a passing test only means something if the same test fails on a version that is wrong")

    section("2. Genuinely running: which claims have a test at all")
    for claim, control in CLAIMS.items():
        print(f"{claim:42} -> {'tested by ' + control if control else 'NO TEST, unsubstantiated'}")
    print(f"claims with a test: {sum(1 for c in CLAIMS.values() if c)} of {len(CLAIMS)}")
    print("five of seven claims have a test behind them and two have none, and a claim with no test is not necessarily false but nothing here shows that it is true; the two untested claims are the ones about people and process rather than code")

    section("3. Genuinely running: the weak and the strong rollback test side by side")
    for name, fn in (("strong, hash comparison", t_rollback_strong), ("weak, key count", t_rollback_weak)):
        print(f"{name:26} correct {fn(rollback_ok)!s:5} broken {fn(rollback_bad)}")
    print("the broken rollback restored every value reversed, the hash comparison saw the difference and the key count did not; comparing the whole restored state to what it was before is the check that matters")

    section("4. Genuinely running: an evidence ladder that cannot be skipped")
    level = LEVELS[0]
    for target in (LEVELS[1], LEVELS[2], LEVELS[3], LEVELS[4]):
        level = advance(level, target)
        print("->", level)
    for frm, to in ((LEVELS[1], LEVELS[4]), (LEVELS[3], LEVELS[2])):
        try:
            advance(frm, to)
        except ValueError as e:
            print("refused:", e)
    print("a finding moved up one step at a time to a verified remediation, a jump from a documented finding to a verified remediation and a step backwards were both refused; these labels are the lesson's proposed workflow and not official CAIS evidence levels")

    section("5. Genuinely running: incident triage and who decides reportability")
    for inc in ({"unauthorised_action": True, "real_data": True}, {"unauthorised_action": True, "real_data": False}, {"unauthorised_action": False}):
        print(inc, "->", triage(inc))
    print("with a person's assessment:", triage({"unauthorised_action": True, "real_data": True}, statutory_assessment=False))
    print("severity came from the incident facts and legal reportability stayed as needs legal review until a person supplied it, because whether an incident is reportable depends on the statute's definitions and on who is covered, which a function like this cannot know and the lab does not claim to know")

    section("6. Genuinely running: a structured question instead of free text")
    print(check_audit_status({"external_audit_completed": False}))
    print(check_audit_status({"external_audit_completed": True}))
    print(check_audit_status({}))
    print("an explicit false produced a finding and an explicit true produced none, and a record with the field left out also produced none, so a missing answer is silently treated as fine and the rule has to be extended to treat absence as unknown; the field is also only a claim until evidence is attached")


if __name__ == "__main__":
    main()
