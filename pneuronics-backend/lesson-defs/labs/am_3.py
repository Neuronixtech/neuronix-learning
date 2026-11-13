"""Teaching implementation (our own): mapping assumptions and resolving the riskiest one first, Part 3 - updating the map after a verdict, keeping the verdict apart from the decision, choosing the cheapest
decisive experiment, ordering by reversibility, and an auditable report. Ratings, costs and verdicts are made up. No language model is used."""
import json

MAP = {
    "A1": dict(claim="alerts identify the failing service", impact=5, uncertainty=4, irreversibility=3, status="open"),
    "A2": dict(claim="engineers act on recommendations", impact=4, uncertainty=4, irreversibility=2, status="open"),
    "A3": dict(claim="runs without production write access", impact=5, uncertainty=2, irreversibility=5, status="open"),
    "A4": dict(claim="triage time falls under two minutes", impact=5, uncertainty=5, irreversibility=2, status="open"),
}
COST_H = {"A1": 4, "A2": 16, "A3": 2, "A4": 40}


def risk(a):
    return a["impact"] * a["uncertainty"] * a["irreversibility"]


def next_risk(m):
    openers = [k for k, v in m.items() if v["status"] == "open"]
    return sorted(openers, key=lambda k: (-risk(m[k]), -m[k]["irreversibility"], k))


def apply_verdict(m, aid, verdict, history):
    history.append({"aid": aid, "verdict": verdict, "before": dict(m[aid])})
    if verdict == "supports":
        m[aid] = dict(m[aid], uncertainty=1, status="supported")
    elif verdict == "rejects":
        m[aid] = dict(m[aid], status="rejected")
    else:
        m[aid] = dict(m[aid], uncertainty=max(1, m[aid]["uncertainty"] - 1))


def decide(verdict):
    return {"supports": "proceed to the next assumption", "rejects": "stop and revise the plan", "ambiguous": "gather more evidence or narrow the question"}[verdict]


def pick_experiment(m, cost):
    best = None
    for k in next_risk(m):
        reduction = risk(m[k]) - risk(dict(m[k], uncertainty=1))
        per_hour = reduction / cost[k]
        if best is None or per_hour > best[2]:
            best = (k, reduction, per_hour)
    return best


def section(t):
    print(f"\n--- {t} ---")


def main():
    m = {k: dict(v) for k, v in MAP.items()}
    history = []
    section("1. Genuinely running: an evidence verdict updates the map")
    print("riskiest first:", [(k, risk(m[k])) for k in next_risk(m)])
    apply_verdict(m, "A1", "supports", history)
    print("A1 supported ->", m["A1"]["status"], "uncertainty", m["A1"]["uncertainty"], "| next:", [(k, risk(m[k])) for k in next_risk(m)])
    apply_verdict(m, "A4", "ambiguous", history)
    print("A4 ambiguous -> uncertainty", m["A4"]["uncertainty"], "status", m["A4"]["status"], "| next:", [(k, risk(m[k])) for k in next_risk(m)])
    print("a supporting result removed A1 from the open list and an ambiguous one only lowered A4's uncertainty from 5 to 4, which left it still open; the verdicts here are scripted, as no experiment was actually run")

    section("2. Genuinely running: the verdict and the decision are separate records")
    for v in ("supports", "rejects", "ambiguous"):
        print(f"verdict={v:9} decision={decide(v)}")
    print("the evidence says what was observed and the decision says what the team does about it; keeping them apart lets two teams read the same evidence and decide differently without rewriting the evidence")

    section("3. Genuinely computing: the cheapest decisive experiment (ILLUSTRATIVE costs in hours)")
    m2 = {k: dict(v) for k, v in MAP.items()}
    for k in next_risk(m2):
        red = risk(m2[k]) - risk(dict(m2[k], uncertainty=1))
        print(f"{k} risk={risk(m2[k]):3} cost={COST_H[k]:2}h  risk removed if resolved={red:3}  per hour={red / COST_H[k]:.1f}")
    print("chosen:", pick_experiment(m2, COST_H))
    print("A1 is the riskiest by score at 60, but A3 removes the most risk per hour (12.5 against 11.2 for A1) because it costs two hours, and A4 at 40 hours removes only 1.0 per hour; the picked experiment is therefore not the riskiest assumption, which is a result of the per-hour rule and of the assumption that resolving an item drops its uncertainty to 1, both of which are the lab's own choices")

    section("4. Genuinely running: irreversibility orders risky experiments")
    steps = [("inspect query dependencies", 1), ("test the migration on a copy", 1), ("run the migration in production", 5), ("validate the rollback procedure", 1)]
    print("by irreversibility then name:", [s for s, _ in sorted(steps, key=lambda x: (x[1], x[0]))])
    print("by the order a team might write them:", [s for s, _ in steps])
    print("the irreversible step sorted last, after the rollback was validated, but only because the lab sorts by irreversibility alone; dependencies between steps are not modelled here, so a real plan still needs a human to check that the order makes sense")

    section("5. Genuinely running: a rejected assumption triggers a re-plan, and the report keeps the history")
    m3 = {k: dict(v) for k, v in MAP.items()}
    h3 = []
    apply_verdict(m3, "A3", "rejects", h3)
    print("A3 rejected -> status", m3["A3"]["status"], "| plan action:", decide("rejects"))
    report = {"map": m3, "history": h3, "next": next_risk(m3)}
    text = json.dumps(report, sort_keys=True)
    back = json.loads(text)
    print("report keys:", sorted(back), "| history entries:", len(back["history"]), "| earlier values kept:", back["history"][0]["before"]["status"])
    print("the report holds the current map and the record of what it looked like before each verdict, so the change in A3 can be audited; it is built in memory and not written to a file")


if __name__ == "__main__":
    main()
