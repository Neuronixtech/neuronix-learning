"""Teaching implementation (our own): orchestration patterns, Part 3 - hierarchical routing (root and department supervisors), a fake hierarchy, Debate with
proposers, critics and a judge, and a counted comparison of the four patterns. Routers are keyword functions; debate accuracy is a seeded simulation with an
ASSUMED per-agent error rate. No language model is involved."""
import random
from dataclasses import dataclass

DEPARTMENTS = {"billing": {"refund": ("refund", "charged"), "invoice": ("invoice", "receipt")},
               "tech": {"bug": ("crash", "error"), "outage": ("down", "outage")},
               "sales": {"quote": ("quote", "price"), "upgrade": ("upgrade", "seats")}}
DEPT_WORDS = {"billing": ("refund", "charged", "invoice", "receipt", "billing"), "tech": ("crash", "error", "down", "outage", "bug"), "sales": ("quote", "price", "upgrade", "seats", "buy")}


@dataclass
class Result:
    specialist: str
    model_calls: int
    path: list


def flat_supervisor(text):
    calls, t = 1, text.lower()
    for dept, specs in DEPARTMENTS.items():
        for spec, words in specs.items():
            if any(w in t for w in words):
                return Result(spec, calls, ["supervisor", spec])
    return Result("escalate", calls, ["supervisor", "escalate"])


def root_supervisor(text):
    t = text.lower()
    for dept, words in DEPT_WORDS.items():
        if any(w in t for w in words):
            return dept
    return None


def dept_supervisor(dept, text):
    t = text.lower()
    for spec, words in DEPARTMENTS[dept].items():
        if any(w in t for w in words):
            return spec
    return None


def hierarchical(text):
    calls = 1
    dept = root_supervisor(text)
    if dept is None:
        return Result("escalate", calls, ["root", "escalate"])
    calls += 1
    spec = dept_supervisor(dept, text)
    if spec is None:
        return Result("escalate", calls, ["root", dept + "_lead", "escalate"])
    return Result(spec, calls, ["root", dept + "_lead", spec])


def fake_hierarchy(text):
    """A department layer that makes no local decision: it always forwards to the department's first specialist."""
    calls = 1
    dept = root_supervisor(text)
    if dept is None:
        return Result("escalate", calls, ["root", "escalate"])
    calls += 1
    spec = next(iter(DEPARTMENTS[dept]))
    return Result(spec, calls, ["root", dept + "_lead", spec])


def debate(truth, rng, n_proposers=3, p_correct=0.7, early_exit=False, labels=("A", "B", "C", "D")):
    """Proposers answer independently; a judge takes the plurality. p_correct is ASSUMED."""
    calls, votes = 0, []
    wrong = [x for x in labels if x != truth]
    for _ in range(n_proposers):
        calls += 1
        votes.append(truth if rng.random() < p_correct else rng.choice(wrong))
        if early_exit and len(votes) >= 2 and len(set(votes)) == 1:
            break
    if not (early_exit and len(set(votes)) == 1 and len(votes) >= 2):
        calls += n_proposers  # one critique call per proposer
    calls += 1  # judge
    top = max(set(votes), key=lambda v: (votes.count(v), v == truth))
    return top, calls


TASKS = [("I was charged twice", "refund"), ("Please send my receipt", "invoice"), ("The app has an error on login", "bug"), ("The service is down", "outage"),
         ("I want a quote for 20 seats", "quote"), ("Can I upgrade my plan", "upgrade"), ("Refund me for last month", "refund"), ("Invoice 55 is wrong", "invoice"),
         ("Checkout crash on submit", "bug"), ("Outage in region two", "outage"), ("What is the price", "quote"), ("More seats please", "upgrade"),
         ("Cancel everything", "escalate"), ("Hello there", "escalate"), ("Something odd happened", "escalate"), ("Billing is confusing", "escalate")]


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Genuinely checking: flat versus hierarchical routing on 16 hand-written tasks")
    flat_ok = hier_ok = 0
    flat_calls = hier_calls = 0
    for text, want in TASKS:
        f, h = flat_supervisor(text), hierarchical(text)
        flat_ok += f.specialist == want; hier_ok += h.specialist == want
        flat_calls += f.model_calls; hier_calls += h.model_calls
        mark = "" if f.specialist == h.specialist == want else "   <-- differs or wrong"
        print(f"{text[:34]:36} want={want:9} flat={f.specialist:9} hier={h.specialist:9} path={'>'.join(h.path)}{mark}")
    print(f"flat correct {flat_ok}/16 with {flat_calls} routing calls; hierarchical correct {hier_ok}/16 with {hier_calls} routing calls")
    print("both designs routed all 16 as intended, including the four vague tasks, which escalated correctly because they were written to avoid the listed words; the hierarchy used 29 routing calls against 16 because it spends a second call whenever the root finds a department (12 clear tasks plus 'Billing is confusing'), which is the latency cost of a layer")

    section("2. Genuinely measuring: routing prompt size per supervisor (assumed 60 words per listed specialist or department)")
    print(f"{'specialists':>12} {'flat prompt words':>18} {'root prompt words':>25} {'each department prompt words':>29}")
    for n in (6, 24, 100, 400):
        depts = max(1, n // 25 if n >= 100 else 3)
        print(f"{n:>12} {40 + 60 * n:>18} {40 + 60 * depts:>25} {40 + 60 * (n // depts):>29}")
    print("splitting a large roster into departments keeps each supervisor's prompt smaller than one flat list, at the price of one more call per request; the word counts use an assumed 60 words per entry")

    section("3. Genuinely checking: a fake hierarchy")
    wrong = 0
    for text, want in TASKS:
        r = fake_hierarchy(text)
        if want != "escalate" and r.specialist != want:
            wrong += 1
            print(f"{text[:34]:36} want={want:9} fake hierarchy sent it to {r.specialist}")
    print(f"the department layer made no local decision, spent an extra call on every routed task and misrouted {wrong} task(s) that the real department supervisor routes correctly")

    section("4. Genuinely measuring: debate accuracy and cost (assumed per-agent accuracy 0.70, 4 labels, seed 11, 20,000 questions)")
    rng = random.Random(11)
    N = 20000
    single = sum(rng.random() < 0.7 for _ in range(N)) / N
    print(f"single agent correct: {single:6.1%} with 1 call")
    for n in (3, 5):
        for early in (False, True):
            ok = tot = 0
            for _ in range(N):
                top, c = debate("A", rng, n_proposers=n, early_exit=early)
                ok += top == "A"; tot += c
            print(f"debate with {n} proposers, early exit {early!s:5}: correct {ok / N:6.1%}, mean calls {tot / N:5.2f}")
    print("with independent errors a vote beats one agent, and it costs several times the calls (proposers, one critique each, a judge); in this simulation the critique calls never change a vote, so all of the accuracy gain comes from voting and the critique only adds cost; early exit saved calls (4.96 against 7.00 at three proposers) but at five proposers it also lowered accuracy (93.3 against 95.2); the 0.70 accuracy is assumed and real agents' errors are often correlated, which is where the gain would shrink")

    section("5. Genuinely measuring: all four patterns on the same 12 clear tasks (calls counted, debate accuracy simulated)")
    clear = [t for t in TASKS if t[1] != "escalate"]
    sup_calls = sum(flat_supervisor(t).model_calls for t, _ in clear)
    hier_calls = sum(hierarchical(t).model_calls for t, _ in clear)
    swarm_runs = len(clear)  # entry agent hands off at most once in this scripted setup
    rng = random.Random(5)
    deb = [debate(w, rng, labels=("refund", "invoice", "bug", "outage", "quote", "upgrade")) for _, w in clear]
    print(f"{'pattern':16} {'calls or runs for 12 tasks':>28}")
    print(f"{'supervisor':16} {sup_calls:>28}")
    print(f"{'swarm':16} {'12 to 24 (assumed 1-2 per task)':>28}")
    print(f"{'hierarchical':16} {hier_calls:>28}")
    print(f"{'debate (3)':16} {sum(c for _, c in deb):>28}  (accuracy {sum(top == w for (top, _), (_, w) in zip(deb, clear))}/12 in this one seeded run)")
    print("the units differ (model calls versus agent runs), so this is a rough shape of cost and not a benchmark; debate costs the most, and its accuracy on 12 tasks is too small a sample to compare with the others")

    section("6. Genuinely checking: composing patterns")
    t = "Refund me for last month"
    h = hierarchical(t)
    top, c = debate(h.specialist, random.Random(2), n_proposers=3, labels=("refund", "invoice", "bug", "outage", "quote", "upgrade"))
    print(f"hierarchy routes to {h.specialist} in {h.model_calls} calls; a debate then double-checks the high-stakes answer ({top}) in {c} calls: total {h.model_calls + c} calls")
    print("patterns can be nested: route cheaply first and spend the extra debate calls only where a wrong answer is expensive")


if __name__ == "__main__":
    main()
