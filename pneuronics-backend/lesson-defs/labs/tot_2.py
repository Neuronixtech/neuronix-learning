"""Teaching implementation (our own): Tree of Thoughts Part 2 - a toy LATS-style Monte Carlo Tree Search."""
import math
from dataclasses import dataclass, field
from typing import List, Optional

TARGET = 24
MAX_TREE_DEPTH = 4
ROLLOUT_STEPS = 3
EXPLORATION_CONSTANT = 1.4


@dataclass
class MCTSNode:
    expression: str
    value: int
    parent: Optional["MCTSNode"] = None
    children: List["MCTSNode"] = field(default_factory=list)
    visits: int = 0
    total_reward: float = 0.0
    depth: int = 0

    @property
    def q_value(self) -> float:
        return 0.0 if self.visits == 0 else self.total_reward / self.visits


def symbolic_score(value: int) -> float:
    return 1 / (1 + abs(TARGET - value))


def is_terminal(node: MCTSNode) -> bool:
    return node.value == TARGET or node.depth >= MAX_TREE_DEPTH


def uct_score(parent, child, c=EXPLORATION_CONSTANT) -> float:
    if child.visits == 0:
        return float("inf")
    exploitation = child.total_reward / child.visits
    exploration = c * math.sqrt(math.log(max(parent.visits, 1)) / child.visits)
    return exploitation + exploration


def select(root, c=EXPLORATION_CONSTANT):
    current = root
    while current.children and not is_terminal(current):
        current = max(current.children, key=lambda ch: uct_score(current, ch, c))
    return current


def expand(node):
    if is_terminal(node):
        return []
    if node.children:
        return node.children
    d = node.depth + 1
    node.children = [
        MCTSNode(f"({node.expression} + 4)", node.value + 4, node, depth=d),
        MCTSNode(f"({node.expression} * 2)", node.value * 2, node, depth=d),
        MCTSNode(f"({node.expression} - 1)", node.value - 1, node, depth=d),
    ]
    return node.children


def choose_rollout_action(value, expression):
    candidates = [(value + 4, f"({expression} + 4)"), (value * 2, f"({expression} * 2)"), (value - 1, f"({expression} - 1)")]
    return max(candidates, key=lambda item: symbolic_score(item[0]))


def simulate(node, rollout_steps=ROLLOUT_STEPS, reward_fn=None):
    reward_fn = reward_fn or symbolic_score
    value, expression = node.value, node.expression
    for _ in range(rollout_steps):
        if value == TARGET:
            break
        value, expression = choose_rollout_action(value, expression)
    return reward_fn(value), value, expression


def backpropagate(node, reward):
    current = node
    while current is not None:
        current.visits += 1
        current.total_reward += reward
        current = current.parent


def reflect(final_value: int) -> str:
    if final_value == TARGET:
        return "Success: the rollout reached the target exactly."
    if final_value > TARGET:
        return "Failure: the rollout overshot the target. Future rollouts should avoid aggressive multiplication near 24."
    return "Failure: the rollout ended below the target. Future rollouts should look for operations that increase the value efficiently."


def lats(start=5, iterations=8, c=EXPLORATION_CONSTANT, verbose=False, reward_fn=None):
    root = MCTSNode(str(start), start)
    expand(root)
    first_hit = None
    for it in range(1, iterations + 1):
        selected = select(root, c)
        pre_visits, pre_q = selected.visits, selected.q_value
        children = expand(selected)
        rollout_node = next((ch for ch in children if ch.visits == 0), children[0]) if children else selected
        reward, final_value, final_expr = simulate(rollout_node, reward_fn=reward_fn)
        backpropagate(rollout_node, reward)
        if final_value == TARGET and first_hit is None:
            first_hit = it
        if verbose:
            print(f"\nITERATION {it}")
            print(f"  SELECT      {selected.expression} (value {selected.value}, visits {pre_visits}, Q {pre_q:.3f}, depth {selected.depth})")
            print("  EXPAND      " + ", ".join(f"{ch.value}" for ch in children))
            print(f"  SIMULATE    from {rollout_node.expression} => {final_value}  reward {reward:.3f}")
            print(f"  REFLECT     {reflect(final_value)}")
            print("  ROOT CHILDREN  " + " | ".join(
                f"{ch.value}: N={ch.visits} Q={ch.q_value:.3f}" for ch in root.children))
    return root, first_hit


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. The lesson's worked UCT numbers, recomputed")
    parent = MCTSNode("p", 0, visits=100)
    a = MCTSNode("a", 0, parent, visits=10, total_reward=7.0)    # Q = 0.70
    b = MCTSNode("b", 0, parent, visits=80, total_reward=64.0)   # Q = 0.80
    c_unvisited = MCTSNode("c", 0, parent)
    print(f"child A  Q=0.70 visits=10 -> UCT {uct_score(parent, a):.3f}  (lesson: ~1.651)")
    print(f"child B  Q=0.80 visits=80 -> UCT {uct_score(parent, b):.3f}  (lesson: ~1.136)")
    print(f"unvisited child          -> UCT {uct_score(parent, c_unvisited)}")
    print("pure exploitation would pick B; UCT picks", "A" if uct_score(parent, a) > uct_score(parent, b) else "B")

    section("2. Eight MCTS iterations from start 5")
    root, first = lats(verbose=True)
    print("\nfirst iteration whose rollout reached 24:", first)

    section("3. Final root statistics")
    for ch in sorted(root.children, key=lambda n: -n.visits):
        print(f"{ch.expression:<8} value={ch.value:<3} visits={ch.visits} total_reward={ch.total_reward:.3f} Q={ch.q_value:.3f}")
    print("root visits:", root.visits, "= sum of child visits:", sum(ch.visits for ch in root.children))
    best = max(root.children, key=lambda n: n.visits)
    print("most-visited root action:", best.expression)

    section("4. Exploration constant c (start 5, 8 iterations)")
    print(f"{'c':>5}  {'root-child visits (9, 10, 4)':<30} first hit of 24")
    for cval in (0.0, 0.5, 1.4, 3.0):
        r, fh = lats(c=cval)
        print(f"{cval:>5}  {str([ch.visits for ch in r.children]):<30} {fh}")

    section("5. Start 3, where greedy beam search failed in the previous lesson part")
    r, fh = lats(start=3, iterations=12)
    print("root children (value: visits, Q):", [(ch.value, ch.visits, round(ch.q_value, 3)) for ch in r.children])
    print("first iteration that reached 24:", fh)

    section("6. Rollouts still use the distance policy, but the REWARD is value/100")
    bad_reward = lambda v: min(v, 100) / 100
    r, fh = lats(start=5, iterations=12, reward_fn=bad_reward)
    print("root children (value: visits, Q):", [(ch.value, ch.visits, round(ch.q_value, 3)) for ch in r.children])
    print("rollouts that reached exactly 24:", fh, "(first iteration)")
    good, _ = lats(start=5, iterations=12)
    print("with the distance reward:        ", [(ch.value, ch.visits, round(ch.q_value, 3)) for ch in good.children])
    print("a rollout that hits 24 earns only 0.24 under the bad reward, while a rollout that overshoots to 40 earns 0.40")


if __name__ == "__main__":
    main()
