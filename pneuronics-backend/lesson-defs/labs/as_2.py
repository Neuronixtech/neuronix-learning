"""Teaching implementation (our own): AI Scientist v2 style failure modes, Part 2 - a keyword novelty check and how its threshold trades false duplicates against false novelties, retry budgets for coding, and a review that is fooled by polish.
Ideas are random keyword sets, 'quality' scores are invented numbers, and no language model is used."""
import random
from statistics import mean

VOCAB = [f"w{i}" for i in range(40)]


def jaccard(a, b):
    return len(a & b) / len(a | b)


def make_corpus(r, n=60):
    return [frozenset(r.sample(VOCAB, 6)) for _ in range(n)]


def make_ideas(r, corpus, n=400):
    """Half are near-copies of a corpus entry (not novel, 1 or 2 words swapped), half are fresh random sets."""
    ideas = []
    for _ in range(n):
        if r.random() < 0.5:
            base = set(r.choice(corpus))
            for _ in range(r.choice([1, 2])):
                base.discard(r.choice(sorted(base)))
                base.add(r.choice(VOCAB))
            ideas.append((frozenset(base), False))
        else:
            ideas.append((frozenset(r.sample(VOCAB, 6)), True))
    return ideas


def judged_novel(idea, corpus, threshold):
    return max(jaccard(idea, c) for c in corpus) < threshold


def retries_until_success(r, p, budget):
    for k in range(1, budget + 1):
        if r.random() < p:
            return k
    return None


def review_score(content, polish, w_polish):
    return (1 - w_polish) * content + w_polish * polish


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Genuinely measuring: novelty threshold against errors (400 ideas, 60 corpus entries, seed 1)")
    r = random.Random(1)
    corpus = make_corpus(r)
    ideas = make_ideas(r, corpus)
    for t in (0.2, 0.3, 0.4, 0.5, 0.7):
        false_novel = sum(1 for i, nov in ideas if (not nov) and judged_novel(i, corpus, t))
        false_dup = sum(1 for i, nov in ideas if nov and not judged_novel(i, corpus, t))
        print(f"similarity threshold {t:.1f}: near-copies called novel {false_novel:3d} | fresh ideas called duplicates {false_dup:3d}")
    print("a low threshold of 0.2 labels 201 fresh ideas as duplicates (essentially all of them) while a high threshold of 0.7 lets 80 near-copies through, and in this run only 0.4 and 0.5 missed no near-copies at the price of 26 false duplicates; a keyword overlap check also cannot see a reworded copy, and these ideas are random word sets")

    section("2. Genuinely measuring: retry budgets for a coding step (success 0.58 per try, 20000 trials)")
    r = random.Random(2)
    for budget in (1, 2, 3, 5, 8):
        out = [retries_until_success(r, 0.58, budget) for _ in range(20000)]
        done = [x for x in out if x is not None]
        print(f"budget {budget}: success {len(done) / len(out):.4f} | formula {1 - 0.42 ** budget:.4f} | mean tries used {mean(x if x is not None else budget for x in out):.2f}")
    print("each extra try adds less than the one before, and the mean tries used stays close to 1.7 even for a large budget because most runs succeed early; the budget mainly bounds the worst case, and 0.58 is an assumed rate")

    section("3. Genuinely running: when retries hit the cap, where does the cost go?")
    r = random.Random(3)
    cap = 3
    out = [retries_until_success(r, 0.3, cap) for _ in range(20000)]
    failed = sum(1 for x in out if x is None)
    print(f"success rate 0.30, budget {cap}: {failed / len(out):.3f} of runs exhausted the budget and spent {cap} tries each; {mean(x if x is not None else cap for x in out):.2f} tries on average")
    print("with a weak step about a third of runs exhaust the budget and the cost is spent for no result, so a retry budget needs a rule for what happens next, such as stopping the run and recording why")

    section("4. Genuinely measuring: a reviewer that weighs polish")
    r = random.Random(4)
    papers = [(r.random(), r.random()) for _ in range(20000)]
    solid_but_plain = [(c, p) for c, p in papers if c > 0.7 and p < 0.3]
    weak_but_polished = [(c, p) for c, p in papers if c < 0.3 and p > 0.7]
    for w in (0.0, 0.3, 0.6):
        acc_weak = mean(review_score(c, p, w) > 0.5 for c, p in weak_but_polished)
        acc_solid = mean(review_score(c, p, w) > 0.5 for c, p in solid_but_plain)
        print(f"polish weight {w:.1f}: weak-but-polished accepted {acc_weak:.3f} | solid-but-plain accepted {acc_solid:.3f}")
    print("as the reviewer weighs polish more, weak papers with good presentation get accepted and solid plain ones get rejected, which is the masking effect the lesson warns about; the content and polish scores are independent uniform numbers and the 0.5 acceptance cutoff is invented")


if __name__ == "__main__":
    main()
