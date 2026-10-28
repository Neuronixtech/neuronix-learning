"""Teaching implementation (our own): Tree of Thoughts Part 3 - search cost, routing and evaluator quality."""
import tot_1
import tot_2


def count_tot(start=5, beam=2):
    calls = {"evals": 0}

    def scorer(n):
        calls["evals"] += 1
        return tot_1.evaluate(n)

    node, explored = tot_1.tot_search(start=start, beam_width=beam, scorer=scorer)
    return node, {"generated": explored, "evaluations": calls["evals"], "rollouts": 0, "reflections": 0}


def count_lats(start=5, iterations=8):
    calls = {"evals": 0}
    orig = tot_2.symbolic_score

    def counting(v):
        calls["evals"] += 1
        return orig(v)

    tot_2.symbolic_score = counting
    try:
        root, first = tot_2.lats(start=start, iterations=iterations)
    finally:
        tot_2.symbolic_score = orig

    def count_nodes(n):
        return 1 + sum(count_nodes(c) for c in n.children)

    return root, first, {"generated": count_nodes(root) - 1, "evaluations": calls["evals"],
                         "rollouts": iterations, "reflections": iterations}


def choose_strategy(difficulty, verifier_available, correctness_priority):
    if difficulty == "easy":
        return "direct"
    if difficulty == "medium" and not verifier_available:
        return "react"
    if difficulty == "hard" and not verifier_available:
        return "tot"
    if difficulty == "hard" and verifier_available and correctness_priority == "high":
        return "lats"
    return "react"


def noisy_scorer(amplitude):
    def scorer(n):
        noise = amplitude * (((n.value * 7 + n.depth * 3) % 5) - 2) / 2   # deterministic, in [-amp, +amp]
        return tot_1.evaluate(n) + noise
    return scorer


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Search-space arithmetic (K = breadth, D = depth)")
    print(f"{'K':>3} {'D':>3} {'leaves K^D':>14} {'nodes 1+K+..+K^D':>18}")
    for K, D in ((3, 3), (3, 4), (3, 5), (3, 10), (5, 10)):
        print(f"{K:>3} {D:>3} {K ** D:>14,} {sum(K ** i for i in range(D + 1)):>18,}")

    section("2. ToT beam search versus the toy LATS on the same problem (start 5)")
    node, tcost = count_tot()
    root, first, lcost = count_lats()
    print(f"{'':<14}{'generated':>10}{'evaluations':>13}{'rollouts':>10}{'reflections':>13}")
    print(f"{'ToT beam=2':<14}{tcost['generated']:>10}{tcost['evaluations']:>13}{tcost['rollouts']:>10}{tcost['reflections']:>13}")
    print(f"{'LATS 8 iter':<14}{lcost['generated']:>10}{lcost['evaluations']:>13}{lcost['rollouts']:>10}{lcost['reflections']:>13}")
    print("both reach 24 on this instance; ToT returned", node.expression, "| LATS first rollout hit at iteration", first)

    section("3. The strategy router from the lesson")
    cases = [("easy", False, "low"), ("medium", False, "low"), ("hard", False, "high"),
             ("hard", True, "high"), ("hard", True, "low"), ("medium", True, "high")]
    for d, v, p in cases:
        print(f"difficulty={d:<7} verifier={str(v):<5} priority={p:<5} -> {choose_strategy(d, v, p)}")

    section("4. Adaptive escalation on starts 1..30: greedy first, search only on failure")
    greedy_cost = escalate_cost = always_cost = 0
    solved_greedy = solved_after = unsolved = 0
    for s in range(1, 31):
        n1, ex1 = tot_1.tot_search(start=s, beam_width=1)
        greedy_cost += ex1
        if n1:
            solved_greedy += 1
            escalate_cost += ex1
        else:
            n3, ex3 = tot_1.tot_search(start=s, beam_width=3)
            escalate_cost += ex1 + ex3
            if n3:
                solved_after += 1
            else:
                unsolved += 1
        _, exa = tot_1.tot_search(start=s, beam_width=3)
        always_cost += exa
    print(f"solved by the cheap greedy attempt: {solved_greedy}/30")
    print(f"rescued by escalating to beam 3:    {solved_after}/30")
    print(f"unsolved even at beam 3:            {unsolved}/30")
    print(f"thoughts generated: always beam 3 = {always_cost}, escalate on failure = {escalate_cost}")

    section("5. Evaluator noise (deterministic) and ToT beam 2, starts 1..30")
    print(f"{'noise amplitude':>16} {'solved':>8}")
    for amp in (0.0, 0.01, 0.03, 0.06, 0.12):
        solved = sum(tot_1.tot_search(start=s, beam_width=2, scorer=noisy_scorer(amp))[0] is not None for s in range(1, 31))
        print(f"{amp:>16} {solved:>5}/30")
    print("scores here are about 0.05 to 1.0, so noise of 0.06 or more is the same size as the signal for most states")

    section("6. Cost-adjusted utility: Quality - lambda * Cost (ILLUSTRATIVE numbers, not measurements)")
    print("method A: quality 0.90, cost 1;  method B: quality 0.91, cost 100")
    for lam in (0.0, 0.0001, 0.001, 0.01):
        ua, ub = 0.90 - lam * 1, 0.91 - lam * 100
        print(f"lambda={lam:<7} U(A)={ua:.4f}  U(B)={ub:.4f}  -> prefer {'B' if ub > ua else 'A'}")
    print("one MCTS iteration at 1500 tokens x 50 iterations =", 1500 * 50, "tokens before environment context")


if __name__ == "__main__":
    main()
