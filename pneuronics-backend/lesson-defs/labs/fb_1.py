"""Teaching implementation (our own): building a feedback ratchet with ownership and retirement, Part 1 - routing signals from four sources to the layer that owns them, a priority score from severity and
recurrence, and a runtime timeout signal that is classified from a REAL subprocess that exceeds its limit. The signals are made up. No language model is used."""
import subprocess
import sys

LAYER_OF = {"scope": "scope_policy", "format": "schema_validator", "wrong_answer": "test_suite", "timeout": "runtime_limits", "preference": "human_decision"}
OWNER_OF = {"scope_policy": "platform", "schema_validator": "api-team", "test_suite": "quality", "runtime_limits": "sre", "human_decision": "product", "triage": "triage-rota"}


def route(signal):
    kind = signal["kind"]
    layer = LAYER_OF.get(kind, "triage")
    return {"id": signal["id"], "layer": layer, "owner": OWNER_OF[layer]}


def priority(sev, recurrence):
    return sev * recurrence


def classify_command(cmd, limit_s):
    try:
        p = subprocess.run(cmd, capture_output=True, text=True, timeout=limit_s)
        return "failed" if p.returncode else "ok"
    except subprocess.TimeoutExpired:
        return "timeout"


def section(t):
    print(f"\n--- {t} ---")


SIGNALS = [
    {"id": "S001", "source": "user", "kind": "wrong_answer", "sev": 4, "n": 6},
    {"id": "S002", "source": "agent_correction", "kind": "scope", "sev": 3, "n": 5},
    {"id": "S003", "source": "evaluation", "kind": "format", "sev": 2, "n": 9},
    {"id": "S004", "source": "incident", "kind": "timeout", "sev": 5, "n": 2},
    {"id": "S005", "source": "user", "kind": "preference", "sev": 1, "n": 3},
    {"id": "S006", "source": "user", "kind": "tone_complaint", "sev": 2, "n": 2},
]


def main():
    section("1. Genuinely running: six signals from four sources routed to owning layers (signals invented)")
    for s in SIGNALS:
        r = route(s)
        print(f"{s['id']} {s['source']:17} {s['kind']:15} -> layer={r['layer']:17} owner={r['owner']}")
    print("each signal landed on a layer with a named owner, and the unfamiliar kind tone_complaint went to triage instead of being dropped or guessed; a route table is only as complete as its entries")

    section("2. Genuinely computing: priority = severity x recurrence")
    ranked = sorted(SIGNALS, key=lambda s: (-priority(s["sev"], s["n"]), s["id"]))
    for s in ranked:
        print(f"{s['id']} sev={s['sev']} n={s['n']} priority={priority(s['sev'], s['n']):2}")
    print("the wrong refund answer (4 x 6 = 24) outranked the format failure that happened nine times (2 x 9 = 18) and the single worst incident, a timeout at severity 5 seen twice (10), came fourth; the ranking depends on the scoring rule, and the severities here are invented")

    section("3. Genuinely running: a timeout classified from a real subprocess")
    quick = [sys.executable, "-c", "print('done')"]
    failing = [sys.executable, "-c", "raise SystemExit(3)"]
    hanging = [sys.executable, "-c", "import time; time.sleep(5)"]
    for label, cmd in (("quick command", quick), ("failing command", failing), ("hanging command, limit 1 s", hanging)):
        print(f"{label:28} -> {classify_command(cmd, 1)}")
    print("the hanging command was stopped after one second and reported as a timeout, which is a different signal from a command that ran and failed; the first routes to runtime limits and the second to the test suite, and treating both as 'failed' would send them to the wrong owner")

    section("4. Genuinely running: the timeout signal joins the router")
    sig = {"id": "S007", "source": "incident", "kind": "timeout", "sev": 4, "n": 1}
    print(route(sig), "| priority:", priority(sig["sev"], sig["n"]))
    print("adding the timeout kind needed one line in each of two tables and no change to the router function, so a new signal kind is cheap to add as long as its owner is named")

    section("5. Genuinely running: a signal with no owner for its layer")
    LAYER_OF["legal"] = "legal_review"
    try:
        route({"id": "S008", "kind": "legal", "sev": 3, "n": 1})
    except KeyError as e:
        print("routing failed with KeyError:", e)
    print("a layer added without an owner raised a KeyError, which is better than routing to nobody, and it shows why every layer in the table needs an owner entry before a signal can be sent to it")


if __name__ == "__main__":
    main()
