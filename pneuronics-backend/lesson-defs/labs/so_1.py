"""Teaching implementation (our own): Society of Mind and multi-agent debate, Part 1 - the confidence-weighted numerical debate, spread versus error, synchronous updates, and the cost of a society.
The original code/main.py was not supplied. This is a numerical consensus model, not language-model critique: no model is called and nothing here measures whether real LLM debate improves accuracy."""
from collections import Counter
from dataclasses import dataclass
from statistics import mean


@dataclass
class Agent:
    name: str
    answer: float
    confidence: float


def spread(agents):
    a = [x.answer for x in agents]
    return max(a) - min(a)


def mae(agents, correct):
    return mean(abs(x.answer - correct) for x in agents)


def neighbor_answer(agent, agents):
    others = [o for o in agents if o.name != agent.name]
    return sum(o.answer * o.confidence for o in others) / sum(o.confidence for o in others)


def run_round(agents, alpha=0.5, synchronous=True):
    if synchronous:
        new = {a.name: (1 - alpha) * a.answer + alpha * neighbor_answer(a, agents) for a in agents}
        for a in agents:
            a.answer = new[a.name]
    else:
        for a in agents:
            a.answer = (1 - alpha) * a.answer + alpha * neighbor_answer(a, agents)


def make(spec):
    return [Agent(n, x, c) for n, x, c in spec]


def debate(spec, rounds=3, alpha=0.5, correct=100.0, synchronous=True):
    agents = make(spec)
    rows = [(1, [a.answer for a in agents], spread(agents), mae(agents, correct))]
    for r in range(2, rounds + 1):
        run_round(agents, alpha, synchronous)
        rows.append((r, [a.answer for a in agents], spread(agents), mae(agents, correct)))
    return agents, rows


BASE = [("A", 80.0, 0.60), ("B", 100.0, 0.90), ("C", 120.0, 0.50)]


def fmt(rows):
    return " | ".join(f"r{r}: {[round(x, 2) for x in xs]} spread={s:.2f} mae={e:.2f}" for r, xs, s, e in rows)


def section(title):
    print(f"\n--- {title} ---")


def main():
    section("1. Genuinely running: the three-agent, three-round numerical debate")
    agents, rows = debate(BASE)
    for r, xs, s, e in rows:
        print(f"round {r}: A={xs[0]:.2f} B={xs[1]:.2f} C={xs[2]:.2f} spread={s:.2f} mae={e:.2f}")
    print("final mean answer:", round(mean(a.answer for a in agents), 2))
    print("round 2 matches the lesson table (93.57, 99.09, 106.00, spread 12.43) but round 3 does not: the lesson lists 98.20, 99.15, 100.42 and spread 2.22 while this run gives 97.56, 99.16, 101.44 and spread 3.88, so the lesson table for round 3 is not reproduced by its own stated update rule; agent B, who started at the correct 100, drifts to 99.09 in round 2 because the others pull it, and convergence here is a property of the update rule and says nothing about real language models.")

    section("2. Genuinely running: converging is not the same as being right")
    agents2, rows2 = debate([("A", 80.0, 0.6), ("B", 90.0, 0.9), ("C", 100.0, 0.5)])
    print(fmt(rows2))
    print("final mean answer:", round(mean(a.answer for a in agents2), 2), "| correct answer: 100.0")
    print("with starting answers 80, 90 and 100 the spread shrinks every round while the mean error against 100 stays well above zero, so the agents become more alike without becoming right; agreement is a property of the agents and truth is a property of the answer, and only the error column knows the correct value.")

    section("3. Genuinely running: a confidently wrong agent")
    a3, rows3 = debate([("A", 100.0, 0.40), ("B", 100.0, 0.50), ("C", 150.0, 0.99)])
    print(fmt(rows3))
    print("agents A and B both started at the correct 100 and C started at 150 with confidence 0.99")
    print("two agents that were right at the start are pulled towards the one that was wrong because its confidence weight dominates the average, and the final spread is smaller than the starting spread of 50 while the error is larger than zero; a declared confidence is a weight chosen for the simulation and not a calibrated probability, so weighting by it rewards whoever claims the most.")

    section("4. Genuinely running: how much each agent moves (learning rate)")
    for alpha in (0.2, 0.5, 0.8):
        _, rr = debate(BASE, alpha=alpha)
        print(f"alpha={alpha}: final spread={rr[-1][2]:.2f} final mae={rr[-1][3]:.2f}")
    print("a larger learning rate shrinks the spread faster, and here the error shrinks in the same order only because the starting answers 80, 100 and 120 are symmetric around the correct 100; in section 2 the same rule shrinks the spread while the error stays near 10, so a smaller spread alone never tells you the answer improved.")

    section("5. Genuinely running: synchronous against sequential updates")
    _, sync_rows = debate(BASE, rounds=2, synchronous=True)
    _, seq_rows = debate(BASE, rounds=2, synchronous=False)
    print("synchronous round 2:", [round(x, 4) for x in sync_rows[-1][1]])
    print("sequential  round 2:", [round(x, 4) for x in seq_rows[-1][1]])
    rev = [BASE[2], BASE[1], BASE[0]]
    _, seq_rev = debate(rev, rounds=2, synchronous=False)
    print("sequential, agents listed in reverse order:", [round(x, 4) for x in seq_rev[-1][1]][::-1])
    print("the synchronous update reads one snapshot of the previous round, so by construction the order of the list cannot matter, whereas the sequential update lets later agents read earlier agents new answers and gives different numbers (B 102.79 against 99.09) and a different result when the list order is reversed; real systems need a snapshot or version for the same reason.")

    section("6. Genuinely computing: responses, tokens and the cost of a bigger society")
    print("responses N x R:", {(n, r): n * r for n in (1, 3, 5) for r in (1, 2, 3)})
    print("tokens at 1000 per response, 1 agent once:", 1 * 1000, "| 3 agents, 3 rounds:", 3 * 3 * 1000)
    print("directed agent-to-agent links N(N-1) for 3 agents:", 3 * 2, "| for 129 agents:", 129 * 128)
    c = Counter(["42", "42", "41", "42", "42"])
    print("consensus of 42,42,41,42,42:", max(c.values()) / 5)
    print("three agents for three rounds make nine responses and about 9000 tokens when every response costs 1000, and a fully connected society of 129 agents has 16512 possible directed links; the 9000 ignores that later rounds carry earlier answers, and the 16512 counts possible links and not model calls.")


if __name__ == "__main__":
    main()
