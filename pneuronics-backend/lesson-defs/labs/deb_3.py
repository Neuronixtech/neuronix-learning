"""Teaching implementation (our own): debate evaluation harness - accuracy, convergence, transitions, cost, escalation and fallbacks.
Agents are SCRIPTED or SIMULATED with assumed error rates; no language model is involved."""
import random
import statistics
from collections import Counter
from dataclasses import dataclass

from deb_1 import Debater, Question, initial_answers, plurality
from deb_2 import debate

QUESTIONS = [
    Question("arith", "What is 17 + 26?", "43", "arithmetic"),
    Question("bound", "Is 2000 a leap year?", "yes", "boundary"),
    Question("seq", "Next number: 2, 6, 12, 20, ?", "30", "sequence"),
]
SCRIPTED = {  # question -> answers of Agent-A, Agent-B, Agent-C (written for this lab)
    "arith": ["43", "43", "42"],
    "bound": ["yes", "no", "no"],
    "seq": ["30", "28", "32"],
}


@dataclass
class TransitionStats:
    wrong_to_correct: int
    correct_to_wrong: int
    unchanged_correct: int
    unchanged_wrong: int


def transitions(initial, final, correct):
    t = TransitionStats(0, 0, 0, 0)
    for a, b in zip(initial, final):
        if a != correct and b == correct:
            t.wrong_to_correct += 1
        elif a == correct and b != correct:
            t.correct_to_wrong += 1
        elif a == correct:
            t.unchanged_correct += 1
        else:
            t.unchanged_wrong += 1
    return t


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Three scripted questions through full mesh and hub-and-spoke")
    print(f"{'question':8} {'initial answers':22} {'initial vote':>12} | {'full mesh final':18} {'conv':>5} {'ops':>4} | {'hub final':18} {'conv':>5} {'ops':>4}")
    totals = {"full": [0, 0, 0, 0], "hub": [0, 0, 0, 0]}
    for q in QUESTIONS:
        init = SCRIPTED[q.key]
        row = f"{q.key:8} {str(init):22} {str(plurality(init)):>12} |"
        for topo in ("full", "hub"):
            ags = [Debater(f"A{i}", a, 0.7) for i, a in enumerate(init)]
            r = debate(ags, topo, 3)
            row += f" {str(r.history[-1]):18} {str(r.converged):>5} {r.critique_ops:>4} |"
            totals[topo][0] += r.final_answer == q.correct
            totals[topo][1] += r.converged
            totals[topo][2] += r.critique_ops
            tr = transitions(init, r.history[-1], q.correct)
            totals[topo][3] += tr.correct_to_wrong
        print(row)
    for topo, (acc, conv, ops, dmg) in totals.items():
        print(f"{topo:5}: accuracy {acc}/3, converged {conv}/3, critique operations {ops}, correct-to-wrong agent changes {dmg}")
    print("on the boundary question two of three agents started wrong with the same answer, so both topologies moved the right agent toward it (correct-to-wrong 1 each); the full mesh left the three-way split on the sequence question unresolved (no answer, so it scores as wrong) and ended with accuracy 1/3. The hub's 3/3 should not be read as better: its sequence answer is right because the hub agent happened to be the right one and the spokes copied it, and its boundary answer is the plurality of a state that was still swapping every round")

    section("2. Genuinely checking: converged does not mean correct (the scripted boundary question)")
    init = SCRIPTED["bound"]
    r = debate([Debater(f"A{i}", a, 0.7) for i, a in enumerate(init)], "full", 3)
    print(f"initial {init} -> final {r.history[-1]} | converged={r.converged} | correct={r.final_answer == 'yes'} | transitions: {transitions(init, r.history[-1], 'yes')}")
    print("all three agents now agree, and they agree on the wrong answer: a convergence rate can look good while accuracy falls")

    section("3. Genuinely measuring: a larger simulated benchmark (3000 questions, 5 agents, assumed error structure, seed 10)")
    rng = random.Random(10)
    N = 3000

    def make_agents(hard):
        err = 0.75 if hard else 0.12
        return initial_answers(rng, 5, err, trap_share=0.85 if hard else 0.0)

    rows = {k: {"correct": 0, "ops": 0, "calls": 0, "conv": 0, "rounds": 0, "c2w": 0, "w2c": 0} for k in ("single agent", "majority vote", "full mesh debate", "hub debate", "vote, debate if split")}
    for _ in range(N):
        hard = rng.random() < 0.25
        ags = make_agents(hard)
        init = [a.answer for a in ags]
        rows["single agent"]["correct"] += init[0] == "C"
        rows["single agent"]["calls"] += 1
        rows["majority vote"]["correct"] += plurality(init) == "C"
        rows["majority vote"]["calls"] += 5
        for name, topo in (("full mesh debate", "full"), ("hub debate", "hub")):
            r = debate([Debater(a.name, a.answer, a.confidence) for a in ags], topo, 3)
            d = rows[name]
            d["correct"] += r.final_answer == "C"
            d["ops"] += r.critique_ops
            d["calls"] += 5 + r.critique_ops
            d["conv"] += r.converged
            d["rounds"] += r.rounds
            t = transitions(init, r.history[-1], "C")
            d["c2w"] += t.correct_to_wrong
            d["w2c"] += t.wrong_to_correct
        d = rows["vote, debate if split"]
        if len(set(init)) == 1:
            d["correct"] += init[0] == "C"
            d["calls"] += 5
        else:
            r = debate([Debater(a.name, a.answer, a.confidence) for a in ags], "full", 3)
            d["correct"] += r.final_answer == "C"
            d["calls"] += 5 + r.critique_ops
    print(f"{'protocol':24} {'accuracy':>9} {'model calls / question':>23} {'converged':>10} {'agent changes right->wrong':>28} {'wrong->right':>13}")
    for k, d in rows.items():
        conv = f"{d['conv'] / N:.1%}" if d["conv"] else "-"
        c2w = d["c2w"] if d["c2w"] or d["w2c"] else "-"
        w2c = d["w2c"] if d["c2w"] or d["w2c"] else "-"
        print(f"{k:24} {d['correct'] / N:>9.1%} {d['calls'] / N:>23.1f} {conv:>10} {str(c2w):>28} {str(w2c):>13}")
    print("model calls count the initial answers plus one per critique operation, an assumed unit of cost. Under this assumed error structure (25 percent hard questions where agents share a trap) the full mesh moved 1,343 agent answers from wrong to right and 535 from right to wrong, yet its accuracy (76.8 percent) equalled the plain majority vote's, at 26.8 calls instead of 5.0. Escalating to debate only when the first answers split kept that accuracy at 18.2 calls. The hub debate scored 71.5 percent, exactly the single agent's, because the spokes copy the hub so the group answer is essentially the hub's")

    section("4. Genuinely measuring: prompt homogenisation (how much the agents' mistakes overlap), 5 agents, seed 11")
    rng = random.Random(11)
    print(f"{'wrong agents pick the same trap':32} {'majority vote':>14} {'full mesh debate':>17}")
    for trap in (0.0, 0.5, 0.9):
        v = dbt = 0
        for _ in range(6000):
            hard = rng.random() < 0.25
            ags = initial_answers(rng, 5, 0.6 if hard else 0.1, trap_share=trap)
            init = [a.answer for a in ags]
            v += plurality(init) == "C"
            dbt += debate(ags, "full", 3).final_answer == "C"
        print(f"{trap:>32.1f} {v / 6000:>14.1%} {dbt / 6000:>17.1%}")
    print("debate matched the plain vote exactly at every setting (83.8, 85.6 and 82.0 percent), because this update rule only spreads the initial plurality; accuracy for both moved within about 3.6 points across settings without a clean trend, so these runs do not show homogenisation hurting steadily. What they show is that debate cannot add information that no agent had")

    section("5. Genuinely measuring: what to do with a debate that does not converge (stuck rate and fallbacks, seed 12)")
    rng = random.Random(12)
    stuck = 0
    fall = {"return nothing": 0, "most common answer": 0, "judge (80 percent right between the top two, ASSUMED)": 0}
    for _ in range(N):
        hard = rng.random() < 0.25
        ags = initial_answers(rng, 5, 0.75 if hard else 0.12, trap_share=0.5 if hard else 0.0, others=("X", "Y", "Z", "V"))
        r = debate(ags, "ring", 3)
        if not r.converged:
            stuck += 1
            fall["return nothing"] += 0
            top2 = [a for a, _ in Counter(r.history[-1]).most_common(2)]
            fall["most common answer"] += top2[0] == "C"
            judged = rng.choice(top2) if rng.random() > 0.8 else ("C" if "C" in top2 else top2[0])
            fall["judge (80 percent right between the top two, ASSUMED)"] += judged == "C"
    print(f"debates that had not converged after 3 rounds (ring): {stuck} of {N} ({stuck / N:.1%})")
    for k, v in fall.items():
        print(f"  fallback '{k}': correct on {v} of the {stuck} unresolved debates ({v / stuck:.1%})" if stuck else "")
    print("unresolved debates are a real share of traffic and need an explicit rule; returning nothing is safe but unhelpful, and the judge row rests on an assumed judge accuracy, not a measured one")


if __name__ == "__main__":
    main()
