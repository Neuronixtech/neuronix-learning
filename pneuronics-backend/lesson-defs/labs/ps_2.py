"""Teaching implementation (our own): choosing prototype, pilot or production deliberately, Part 2 - stage-specific controls and exit criteria, stage-drift detection on a system whose permissions and audience grow,
the pilot modification that adds a rollback owner, and a JSON decision artifact. The systems and permission lists are made up. No language model is used."""
import json

CONTROLS = {
    "prototype": {"data": {"synthetic"}, "max_audience": 0, "forbidden_permissions": {"prod_read", "prod_write", "send_email"}},
    "pilot": {"data": {"synthetic", "real_sample"}, "max_audience": 25, "forbidden_permissions": {"prod_write"}},
    "production": {"data": {"synthetic", "real_sample", "production"}, "max_audience": None, "forbidden_permissions": set()},
}
EXIT = {"prototype": ["mechanism works on the synthetic set", "known failure modes listed"], "pilot": ["outcome metrics met on the pilot cohort", "no guardrail breach", "rollback exercised once"], "production": ["SLOs defined and monitored", "on-call owner named"]}


def drift(system):
    c = CONTROLS[system["stage"]]
    found = []
    if system["data"] not in c["data"]:
        found.append(f"data '{system['data']}' is not allowed in {system['stage']}")
    if c["max_audience"] is not None and system["audience"] > c["max_audience"]:
        found.append(f"audience {system['audience']} exceeds {c['max_audience']}")
    bad = sorted(set(system["permissions"]) & c["forbidden_permissions"])
    if bad:
        found.append("forbidden permissions: " + ", ".join(bad))
    return found


def pilot_ready(system):
    miss = [k for k in ("owner", "rollback_owner", "rollback_tested") if not system.get(k)]
    return not miss, miss


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Genuinely running: what each stage allows and what must be true to leave it")
    for st in CONTROLS:
        c = CONTROLS[st]
        print(f"{st:11} data={sorted(c['data'])} audience<= {c['max_audience']} forbidden={sorted(c['forbidden_permissions'])}")
        print(f"            exit: {EXIT[st]}")
    print("each stage has an allowed data set, an audience bound and forbidden permissions, and each has exit criteria written before the stage starts; the audience of 25 and the permission lists are invented")

    section("2. Genuinely running: drift in a system that started as a prototype")
    timeline = [("week 1", dict(stage="prototype", data="synthetic", audience=0, permissions=["read_docs"])),
                ("week 3", dict(stage="prototype", data="real_sample", audience=3, permissions=["read_docs", "prod_read"])),
                ("week 6", dict(stage="prototype", data="production", audience=40, permissions=["read_docs", "prod_read", "prod_write"]))]
    for wk, s in timeline:
        print(f"{wk}: {drift(s) or 'no drift'}")
    print("nothing was ever promoted and the system still moved from synthetic data to production writes, one reasonable-looking step at a time; the check compares the claimed stage with what the system really has, so the prototype label stopped being true at week 3")

    section("3. Genuinely running: a pilot that outgrows its audience")
    for aud in (10, 25, 26, 300):
        print(f"audience {aud:3}: {drift(dict(stage='pilot', data='real_sample', audience=aud, permissions=['read_docs'])) or 'within bounds'}")
    print("the bound is inclusive at 25 and 26 is drift; a pilot that quietly reaches 300 people is a production launch without the production controls")

    section("4. Genuinely running: the pilot modification, a rollback owner who has tested rollback")
    for label, s in (("owner only", dict(owner="ana")), ("owner and rollback owner", dict(owner="ana", rollback_owner="ben")), ("all three", dict(owner="ana", rollback_owner="ben", rollback_tested=True))):
        print(f"{label:26} {pilot_ready(s)}")
    print("a named rollback owner is not the same as a tested rollback, and the readiness check asks for both; whether the rollback was tested is a flag here and a team would attach the evidence")

    section("5. Genuinely running: the decision artifact")
    system = dict(stage="pilot", data="real_sample", audience=30, permissions=["read_docs"], owner="ana", rollback_owner="ben", rollback_tested=True)
    art = {"stage": system["stage"], "drift": drift(system), "pilot_ready": pilot_ready(system)[0], "exit_criteria": EXIT["pilot"]}
    print(json.dumps(art, sort_keys=True))
    print("the artifact lists the drift found, the readiness result and the exit criteria still to meet; a pilot that has outgrown its audience shows up here even though the owner and rollback are fine, and the lab prints it instead of writing outputs/stage-decisions.json")


if __name__ == "__main__":
    main()
