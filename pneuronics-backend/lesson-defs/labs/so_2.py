"""Teaching implementation (our own): Society of Mind and multi-agent debate, Part 2 - a structured, scripted debate engine with verification, consensus, stopping, calibration and cost.
The original code/main.py was not supplied. Agents are scripted and no model is called, so the lab tests the engine (messages, rounds, stopping, metrics) and not the reasoning of real LLMs."""
import json
from collections import Counter
from dataclasses import dataclass, field, asdict
from typing import Optional


@dataclass
class Message:
    agent: str
    round: int
    answer: int
    confidence: float
    reasoning: str
    evidence: list = field(default_factory=list)
    revised: bool = False
    previous: Optional[int] = None
    verified: bool = False


def verify_notebooks():
    subtotal = 12 * 45
    discount = subtotal * 10 // 100
    return subtotal - discount


def consensus(answers):
    return max(Counter(answers).values()) / len(answers)


def majority(answers):
    c = Counter(answers)
    top = max(c.values())
    winners = [a for a, n in c.items() if n == top]
    return winners[0] if len(winners) == 1 else None


def peer_revise(own, peers):
    # peer-only: adopt the strict majority of the peers if there is one, else keep your own answer
    m = majority(peers)
    return m if m is not None else own


def run_debate(initial, rounds=3, threshold=1.0, use_verifier=False, truth_check=None):
    state = {"messages": [], "stop": None, "rounds": 0}
    cur = dict(initial)
    state["messages"] += [Message(n, 1, a, 0.7, "initial", []) for n, a in cur.items()]
    state["rounds"] = 1
    for r in range(1, rounds + 1):
        if consensus(list(cur.values())) >= threshold:
            state["stop"] = "consensus threshold reached"
            break
        if r == rounds:
            state["stop"] = "max rounds reached"
            break
        new = {}
        v = verify_notebooks() if use_verifier else None
        for n, a in cur.items():
            peers = [x for k, x in cur.items() if k != n]
            new_a = v if v is not None else peer_revise(a, peers)
            state["messages"].append(Message(n, r + 1, new_a, 0.8, "verified" if v is not None else "peer", [], new_a != a, a, v is not None))
            new[n] = new_a
        cur = new
        state["rounds"] = r + 1
    state["final"] = majority(list(cur.values()))
    state["answers"] = cur
    return state


def brier(preds, outs):
    if len(preds) != len(outs) or not preds:
        raise ValueError("need equal, non-empty lists")
    return sum((p - o) ** 2 for p, o in zip(preds, outs)) / len(preds)


def text_consensus(answers):
    return consensus([str(a).strip().lower() for a in answers])


def flag_unjustified(messages):
    return [m.agent for m in messages if m.revised and not m.verified]


def section(title):
    print(f"\n--- {title} ---")


def main():
    truth = verify_notebooks()
    start = {"A": 540, "B": 486, "C": 480}

    section("1. Genuinely running: debate with a verifier and early stopping")
    s = run_debate(start, rounds=3, threshold=1.0, use_verifier=True)
    print("verified answer:", truth, "| rounds used:", s["rounds"], "| final:", s["final"], "| stop:", s["stop"], "| messages:", len(s["messages"]))
    print("round 1 consensus:", round(consensus(list(start.values())), 4), "| round 2 answers:", s["answers"])
    print("all three agents adopt 486 in round 2 and the debate stops before round 3 with six messages, but the verifier already knows the arithmetic, so this shows a shared check resolving a disagreement and does not show that the peers corrected each other.")

    section("2. Genuinely running: the same start with no verifier (peer-only)")
    s2 = run_debate(start, rounds=3, threshold=1.0, use_verifier=False)
    print("answers after the run:", s2["answers"], "| final:", s2["final"], "| stop:", s2["stop"], "| revisions:", sum(m.revised for m in s2["messages"]))
    print("with three different answers there is no strict majority among the peers, so nobody revises, the debate runs to its round limit and no majority exists; counting answers is not the same as weighing arguments, and an engine that only votes cannot reproduce the idea of debate.")

    section("3. Genuinely running: a wrong majority")
    wrong = {"A": 540, "B": 540, "C": 486}
    print("independent vote:", majority(list(wrong.values())), "| correct:", majority(list(wrong.values())) == truth)
    p = run_debate(wrong, rounds=3, use_verifier=False)
    v = run_debate(wrong, rounds=3, use_verifier=True)
    print("peer-only debate final:", p["final"], "| with verifier final:", v["final"])
    print("voting returns 540, the peer-only debate also stays at 540 because for A and B the two peers disagree so they keep 540, and C sees two peers saying 540 and gives way, and only the verifier reaches 486; an exchange of answers can reinforce a shared mistake, so correctness needs a source outside the agents.")

    section("4. Genuinely running: consensus metrics and thresholds")
    for ans in (["a", "b", "c"], ["a", "a", "b"], ["a", "a", "a"], ["a", "a", "b", "b"]):
        print(ans, "->", round(consensus(ans), 4))
    print("text normalisation:", text_consensus(["Approved", "approved", " APPROVED "]))
    two_thirds = consensus([486, 486, 540])
    print("2 of 3 agree:", round(two_thirds, 6), "| meets 0.67:", two_thirds >= 0.67, "| meets 2/3:", two_thirds >= 2 / 3)
    print("two agreeing agents out of three score 0.666667, which falls just below a threshold of 0.67 and meets an exact 2/3, and exact string matching only treats short categorical answers as equal after normalising case and spaces; high consensus is strength of agreement and says nothing about correctness.")

    section("5. Genuinely running: flagging answer changes that carry no evidence")
    conf = {"A": 0.5, "B": 0.6, "C": 0.99}
    cur = {"A": 100, "B": 120, "C": 140}
    top = max(conf, key=conf.get)
    msgs = [Message(n, 2, cur[top], conf[n], f"{top} sounded certain", [], cur[top] != cur[n], cur[n], False) for n in cur]
    print("follow the most confident peer:", {m.agent: m.answer for m in msgs}, "| flagged as unjustified:", flag_unjustified(msgs))
    ver = run_debate(start, rounds=3, use_verifier=True)
    print("verified run, flagged as unjustified:", flag_unjustified(ver["messages"]))
    print("when agents A and B simply copy the most confident agent C they reach 140 and both revisions are flagged because they carry no verified marker, while the verified run flags nothing; the flag reports revisions without a marker, which is a warning sign and not proof of sycophancy, and it cannot judge whether the marker itself is trustworthy.")

    section("6. Genuinely computing: calibration, cost and the transcript")
    print("brier score:", round(brier([0.9, 0.8, 0.6, 0.7], [1, 0, 1, 1]), 4))
    print("tokens for 5 agents x 4 rounds x 1200:", 5 * 4 * 1200, "| 3x3, 5x5, 10x10 at 1000:", [n * r * 1000 for n, r in ((3, 3), (5, 5), (10, 10))])
    text = json.dumps({"question": "What is the discounted price?", "rounds": s["rounds"], "final": s["final"], "stop": s["stop"], "messages": [asdict(m) for m in s["messages"]]}, ensure_ascii=False)
    back = json.loads(text)
    print("transcript round-trips:", back["final"] == 486 and len(back["messages"]) == 6, "| bytes:", len(text.encode("utf-8")))
    print("the Brier score of the lesson example is 0.225 and not the 0.1725 printed in the lesson (the squared errors 0.01, 0.64, 0.16 and 0.09 add to 0.90 over four predictions), 20 responses of 1200 tokens come to 24000 and the response count grows as N times R while real input cost grows faster because later rounds carry the history; the figures are arithmetic on invented inputs and the transcript only proves the engine can save and reload its messages.")


if __name__ == "__main__":
    main()
