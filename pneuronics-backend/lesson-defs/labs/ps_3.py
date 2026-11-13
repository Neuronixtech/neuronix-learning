"""Teaching implementation (our own): choosing prototype, pilot or production deliberately, Part 3 - promotion authorization as a separate step from stage selection, an evidence model whose entries expire,
a rollback that is actually executed on a toy deployment, an alert rule run over invented error rates, and ownership as a promotion requirement. Dates, rates and the deployment model are made up. No language model is used."""
from datetime import date, timedelta

TODAY = date(2026, 11, 14)
REQUIRED = ("slo_defined", "monitoring_alert_tested", "rollback_tested", "privacy_review", "on_call_owner")
MAX_AGE_DAYS = 30


def promotion(evidence, today=TODAY):
    problems = []
    for k in REQUIRED:
        e = evidence.get(k)
        if not e:
            problems.append(f"{k}: missing")
        elif (today - e["date"]).days > MAX_AGE_DAYS:
            problems.append(f"{k}: stale ({(today - e['date']).days} days old)")
        elif not e["ok"]:
            problems.append(f"{k}: failed")
    return ("promote" if not problems else "do not promote"), problems


class Deployment:
    def __init__(self):
        self.version, self.history = "v1", ["v1"]

    def deploy(self, v):
        self.version = v
        self.history.append(v)

    def rollback(self):
        if len(self.history) < 2:
            return False
        self.history.pop()
        self.version = self.history[-1]
        return True


def alert(rates, threshold, windows):
    run = 0
    for i, r in enumerate(rates):
        run = run + 1 if r > threshold else 0
        if run >= windows:
            return i
    return None


def section(t):
    print(f"\n--- {t} ---")


def main():
    ev = lambda d, ok=True: {"date": TODAY - timedelta(days=d), "ok": ok}
    section("1. Genuinely running: selection and promotion are different questions")
    print("selection answers which stage can produce the evidence; promotion answers whether the evidence for the next stage exists")
    full = {k: ev(5) for k in REQUIRED}
    print("all five present and recent :", promotion(full))
    partial = {k: ev(5) for k in REQUIRED if k != "on_call_owner"}
    print("everything but an owner     :", promotion(partial))
    print("a system can pass every technical check and still not be promotable because nobody is on call for it; the five required items are the lab's own list")

    section("2. Genuinely running: evidence expires (fixed today = 2026-11-14, window 30 days)")
    mixed = dict(full, rollback_tested=ev(45), privacy_review=ev(5, ok=False))
    print(promotion(mixed))
    print("a rollback test run 45 days ago was refused as stale and a failed privacy review was refused as failed, and the other three items still counted; the 30-day window is invented, and what counts as stale depends on how fast the system changes")

    section("3. Genuinely running: a rollback is exercised on a toy deployment")
    d = Deployment()
    print("fresh deployment, rollback possible:", d.rollback(), "| version", d.version)
    d.deploy("v2")
    d.deploy("v3")
    hist = list(d.history)
    print("after v2 and v3:", hist, "| rollback:", d.rollback(), "| now", d.version, "| rollback again:", d.rollback(), "| now", d.version, "| and again:", d.rollback(), "| now", d.version)
    print("the first two rollbacks worked, going from v3 to v2 and then to v1, and the third was refused at v1 because there is nothing earlier to return to; a rollback test records facts like that, which a written rollback plan never exercises, and this model has no database migration, which is where real rollbacks usually break")

    section("4. Genuinely running: an alert rule over invented error rates")
    rates = [0.01, 0.02, 0.09, 0.02, 0.11, 0.12, 0.13, 0.02]
    print("rates:", rates)
    print("alert after 3 consecutive windows above 0.05 at index:", alert(rates, 0.05, 3))
    print("alert after 2 consecutive windows:", alert(rates, 0.05, 2), "| after 1:", alert(rates, 0.05, 1), "| after 4:", alert(rates, 0.05, 4))
    print("one window above the threshold fired at index 2 (a spike), two consecutive fired at 5 and three at 6, while four never fired in this series; the rule shows the trade between noise and delay, and the rates here are invented, not measured")

    section("5. Genuinely running: stage drift versus promotion")
    sys_ = {"claimed": "pilot", "permissions": ["prod_write"], "evidence": partial}
    print("claimed stage:", sys_["claimed"], "| has prod_write:", "prod_write" in sys_["permissions"], "| promotion decision:", promotion(sys_["evidence"])[0])
    print("the system acts as production with a production permission while its evidence says it cannot be promoted, and that mismatch is the finding: either remove the permission or finish the evidence; the lab reports it and takes no action")


if __name__ == "__main__":
    main()
