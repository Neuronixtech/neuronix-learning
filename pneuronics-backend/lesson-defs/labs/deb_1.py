"""Teaching implementation (our own): multi-agent debate foundations - scripted debaters, voting, a simple update rule, independence and correlated errors.
All agent behaviour is SIMULATED with assumed error rates; no language model is involved."""
import random
import statistics
from collections import Counter
from dataclasses import dataclass


@dataclass(frozen=True)
class Question:
    key: str
    prompt: str
    correct: str
    category: str


@dataclass
class Debater:
    name: str
    answer: str
    confidence: float


def initial_answers(rng, n, error_rate, trap_share=0.0, correct="C", trap="W", others=("X", "Y", "Z"), calibrated=True):
    """Independent draws. A wrong agent picks the shared trap with probability trap_share (error correlation), else a random other answer."""
    out = []
    for i in range(n):
        wrong = rng.random() < error_rate
        if wrong:
            ans = trap if rng.random() < trap_share else rng.choice(others)
            conf = rng.gauss(0.55 if calibrated else 0.75, 0.12)
        else:
            ans = correct
            conf = rng.gauss(0.80 if calibrated else 0.75, 0.12)
        out.append(Debater(f"A{i + 1}", ans, min(1.0, max(0.0, conf))))
    return out


def plurality(answers, weights=None):
    tally = Counter()
    for i, a in enumerate(answers):
        tally[a] += weights[i] if weights else 1
    top = tally.most_common()
    if len(top) > 1 and top[0][1] == top[1][1]:
        return None
    return top[0][0]


def update_round(agents, threshold=0.5, weighted=False):
    """Synchronous round: every agent sees all peers' ORIGINAL answers and switches to the peer plurality if it has more than `threshold` support."""
    snapshot = [(a.answer, a.confidence) for a in agents]
    new = []
    for i, a in enumerate(agents):
        peers = [snapshot[j] for j in range(len(agents)) if j != i]
        answers = [p[0] for p in peers]
        w = [p[1] for p in peers] if weighted else None
        top = plurality(answers, w)
        support = (sum(1 for x in answers if x == top) / len(answers)) if top else 0
        new.append(Debater(a.name, top if top and support > threshold and top != a.answer else a.answer, a.confidence))
    return new


def run_debate(agents, rounds=3, threshold=0.5, weighted=False):
    history = [[a.answer for a in agents]]
    for _ in range(rounds):
        agents = update_round(agents, threshold, weighted)
        history.append([a.answer for a in agents])
        if len(set(history[-1])) == 1:
            break
    return agents, history


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. One scripted question, three debaters")
    q = Question("q1", "What is 17 + 26?", "C", "arithmetic")
    ags = [Debater("A1", "C", 0.8), Debater("A2", "W", 0.6), Debater("A3", "C", 0.7)]
    final, hist = run_debate(ags)
    print("question:", q.prompt, "| correct:", q.correct)
    for i, h in enumerate(hist):
        print(f"round {i}: {h}")
    print("vote of initial answers:", plurality(hist[0]), "| debate final:", plurality(hist[-1]))

    section("2. Genuinely measuring: majority vote under independent errors (error rate per agent ASSUMED, seed 1, 20000 questions)")
    rng = random.Random(1)
    print(f"{'agents':>7} {'error rate':>10} {'single agent':>13} {'majority vote':>14}")
    for n in (1, 3, 5, 9):
        for err in (0.2, 0.4):
            single = vote = 0
            for _ in range(20000):
                ags = initial_answers(rng, n, err)
                single += ags[0].answer == "C"
                vote += plurality([a.answer for a in ags]) == "C"
            print(f"{n:>7} {err:>10.0%} {single / 20000:>13.1%} {vote / 20000:>14.1%}")
    print("with independent errors voting helps when each agent is right more often than not; at 40 percent error with several agents wrong answers also split three ways, which lets the correct answer win a little more often than counting only 'more than half correct' would predict")

    section("3. Genuinely measuring: independent errors versus errors that share a cause (5 agents, similar average error, seed 2)")
    rng = random.Random(2)
    N = 20000
    ind_vote = ind_single = cor_vote = cor_single = cor_unan_wrong = ind_unan_wrong = 0
    cor_err_total = 0.0
    for _ in range(N):
        ags = initial_answers(rng, 5, 0.31)
        ind_vote += plurality([a.answer for a in ags]) == "C"
        ind_single += ags[0].answer == "C"
        ind_unan_wrong += len({a.answer for a in ags}) == 1 and ags[0].answer != "C"
        hard = rng.random() < 0.30  # a hard question makes every agent likely to fall for the same trap
        err = 0.80 if hard else 0.10
        ags = initial_answers(rng, 5, err, trap_share=0.9 if hard else 0.0)
        cor_vote += plurality([a.answer for a in ags]) == "C"
        cor_single += ags[0].answer == "C"
        cor_unan_wrong += len({a.answer for a in ags}) == 1 and ags[0].answer != "C"
    print(f"{'error structure':44} {'one agent':>10} {'majority of 5':>14} {'unanimous and wrong':>20}")
    print(f"{'independent, 31% wrong each':44} {ind_single / N:>10.1%} {ind_vote / N:>14.1%} {ind_unan_wrong / N:>20.1%}")
    print(f"{'shared cause (30% hard questions, 80% wrong)':44} {cor_single / N:>10.1%} {cor_vote / N:>14.1%} {cor_unan_wrong / N:>20.1%}")
    print("both setups make a single agent about 69 percent right, but when mistakes cluster on the same hard questions the majority gains far less and a sizeable share of questions end with all five agreeing on a wrong answer; independence of errors, not the number of agents, is what voting needs")

    section("4. Genuinely measuring: debate versus voting (threshold rule, 3 rounds, 5 agents, error 30 percent, seed 3)")
    rng = random.Random(3)
    print(f"{'trap share':>11} {'initial vote':>13} {'debate final':>13} {'converged':>10} {'converged and wrong':>20} {'correct -> wrong':>17}")
    for trap in (0.0, 0.7):
        iv = df = conv = cw = c2w = 0
        N = 10000
        for _ in range(N):
            ags = initial_answers(rng, 5, 0.30, trap_share=trap)
            init = [a.answer for a in ags]
            final, hist = run_debate(ags)
            fa = [a.answer for a in final]
            iv += plurality(init) == "C"
            df += plurality(fa) == "C"
            converged = len(set(fa)) == 1
            conv += converged
            cw += converged and fa[0] != "C"
            c2w += plurality(init) == "C" and plurality(fa) != "C"
        print(f"{trap:>11.1f} {iv / N:>13.1%} {df / N:>13.1%} {conv / N:>10.1%} {cw / N:>20.2%} {c2w / N:>17.2%}")
    print("with this update rule the debate final matched the initial vote exactly and never turned a correct majority into a wrong one; what it added was agreement (86.5 to 89.8 percent converged), and some of that agreement is on a wrong answer, 2.45 and 6.75 percent of questions")

    section("5. Genuinely measuring: confidence-weighted updating when confidence is or is not informative (seed 4)")
    rng = random.Random(4)
    print(f"{'confidence':>16} {'unweighted final':>17} {'weighted final':>15}")
    for calibrated in (True, False):
        u = w = 0
        N = 10000
        for _ in range(N):
            ags = initial_answers(rng, 3, 0.35, trap_share=0.5, calibrated=calibrated)
            fu, _ = run_debate([Debater(a.name, a.answer, a.confidence) for a in ags], threshold=0.0)
            fw, _ = run_debate([Debater(a.name, a.answer, a.confidence) for a in ags], threshold=0.0, weighted=True)
            u += plurality([a.answer for a in fu]) == "C"
            w += plurality([a.answer for a in fw]) == "C"
        print(f"{'informative' if calibrated else 'uninformative':>16} {u / N:>17.1%} {w / N:>15.1%}")
    print("weighting by confidence helped a lot when confidence tracked correctness (71.4 to 91.5 percent, by construction of our assumption) and hurt when it did not (71.7 down to 64.8 percent), because the weights then break ties at random")

    section("6. Genuinely checking: ties and even group sizes")
    for n, answers in ((2, ["C", "W"]), (4, ["C", "C", "W", "W"]), (4, ["C", "C", "W", "X"]), (6, ["C", "C", "C", "W", "W", "W"])):
        print(f"{n} agents {answers}: plurality = {plurality(answers)}")
    ags = [Debater("A1", "C", 0.9), Debater("A2", "W", 0.9)]
    final, hist = run_debate(ags, rounds=4, threshold=0.0)
    print("two agents who disagree, switching to the other's answer each round:", hist)
    print("a tie has no winner, and with a synchronous update two agents can swap answers forever instead of converging")


if __name__ == "__main__":
    main()
