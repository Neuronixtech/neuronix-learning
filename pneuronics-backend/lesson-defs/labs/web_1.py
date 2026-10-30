"""Teaching implementation (our own): WebArena-style execution-based evaluation - shopping environment, actions, goal_check on state, trajectories."""
import random
from dataclasses import dataclass, field
from typing import Callable, List, Optional


@dataclass
class Product:
    product_id: str
    name: str
    price: float


@dataclass
class Action:
    name: str
    argument: Optional[str] = None


CATALOG = [Product("p1", "Wireless Mouse A", 24.99), Product("p2", "Wireless Mouse B", 19.99), Product("p3", "Wired Mouse", 9.99),
           Product("p4", "Wireless Mouse C", 29.50), Product("p5", "Keyboard", 49.00)]


class ShoppingEnvironment:
    def __init__(self):
        self.cart, self.orders, self.results, self.current = [], [], [], None

    def reset(self):
        self.cart, self.orders, self.results, self.current = [], [], [], None

    def execute(self, action):
        """Returns an observation string. Invalid actions return text; they do not raise."""
        n, a = action.name, action.argument
        if n == "search":
            self.results = [p for p in CATALOG if (a or "").lower() in p.name.lower()]
            return "results: " + ", ".join(f"{p.product_id}:{p.name}:${p.price}" for p in self.results)
        if n == "open":
            prod = next((p for p in CATALOG if p.product_id == a), None)
            self.current = prod
            return f"opened {prod.name}" if prod else f"error: no product {a}"
        if n == "add_to_cart":
            if a not in [p.product_id for p in CATALOG]:
                return f"error: no product {a}"
            self.cart.append(a)
            return f"cart: {self.cart}"
        if n == "checkout":
            if not self.cart:
                return "error: cart is empty"
            self.orders.append(list(self.cart))
            self.cart = []
            return f"order placed: {self.orders[-1]}"
        return f"error: unknown action {n}"


@dataclass
class Task:
    task_id: str
    description: str
    goal_check: Callable[[ShoppingEnvironment], bool]


def cheapest_wireless_mouse():
    return min((p for p in CATALOG if "wireless mouse" in p.name.lower()), key=lambda p: p.price)


def check_in_cart(env):
    return cheapest_wireless_mouse().product_id in env.cart


def check_exact_cart(env):
    return env.cart == [cheapest_wireless_mouse().product_id]


def check_order_exact(env):
    return env.orders == [[cheapest_wireless_mouse().product_id]]


TASK_CART = Task("cart-1", "Add the cheapest wireless mouse to the cart", check_in_cart)
TASK_ORDER = Task("order-1", "Buy exactly the cheapest wireless mouse", check_order_exact)


class ScriptedAgent:
    def __init__(self, script):
        self.script, self.i = list(script), 0

    def next_action(self, observation):
        if self.i >= len(self.script):
            return None
        a = self.script[self.i]
        self.i += 1
        return a


def run_task(env, agent, task, max_steps=15, reset=True):
    if reset:
        env.reset()
    traj, obs = [], "start"
    for _ in range(max_steps):
        action = agent.next_action(obs)
        if action is None:
            break
        obs = env.execute(action)
        traj.append((action, obs))
    return {"task": task.task_id, "success": task.goal_check(env), "steps": len(traj), "trajectory": traj}


def good_script():
    return [Action("search", "wireless mouse"), Action("open", "p2"), Action("add_to_cart", "p2"), Action("checkout")]


def section(t):
    print(f"\n--- {t} ---")


def main():
    env = ShoppingEnvironment()

    section("1. One task, one trajectory, checked against state")
    r = run_task(env, ScriptedAgent(good_script()), TASK_ORDER)
    for a, o in r["trajectory"]:
        print(f"{a.name:12} {str(a.argument):15} -> {o}")
    print("success:", r["success"], "| steps:", r["steps"], "| cheapest wireless mouse is", cheapest_wireless_mouse().product_id)

    section("2. Genuinely checking: the same text 'success' claim versus the state check")
    liar = ScriptedAgent([Action("search", "wireless mouse"), Action("open", "p2")])
    r = run_task(env, liar, TASK_ORDER)
    print("agent stopped after opening p2; whatever it says, the state check returns", r["success"], "| orders:", env.orders)
    print("an agent's claim is not evidence; the environment's state is")

    section("3. Genuinely checking: a goal_check that accepts more than the goal")
    extra = ScriptedAgent([Action("add_to_cart", "p5"), Action("add_to_cart", "p2"), Action("add_to_cart", "p3")])
    run_task(env, extra, TASK_CART)
    print("cart:", env.cart, "| 'in cart' check:", check_in_cart(env), "| exact-cart check:", check_exact_cart(env))
    run_task(env, ScriptedAgent([Action("add_to_cart", "p2"), Action("add_to_cart", "p2")]), TASK_CART)
    print("duplicate add: cart", env.cart, "| in-cart:", check_in_cart(env), "| exact:", check_exact_cart(env))
    print("the loose check passed a cart holding a keyboard and a wired mouse; the strict check also rejected a duplicate, which may or may not be what the task meant")

    section("4. Genuinely checking: side effects the final check does not see")
    env.reset()
    for a in [Action("add_to_cart", "p5"), Action("checkout"), Action("add_to_cart", "p2")]:
        env.execute(a)
    print("orders:", env.orders, "| cart:", env.cart, "| 'cheapest in cart' passes:", check_in_cart(env))
    print("the agent bought a keyboard along the way; a cart-only goal_check passes because it never looks at orders")
    r = run_task(env, ScriptedAgent(good_script() + [Action("checkout")]), TASK_ORDER)
    print("double checkout after a good run -> last observation:", r["trajectory"][-1][1], "| orders:", env.orders)

    section("5. Genuinely measuring: reset() and reproducibility")
    for do_reset in (True, False):
        e = ShoppingEnvironment()
        results = [run_task(e, ScriptedAgent(good_script()), TASK_ORDER, reset=do_reset)["success"] for _ in range(5)]
        print(f"reset between runs={do_reset!s:5} -> successes {results} | orders left: {len(e.orders)}")
    print("without reset, run 2 onward saw run 1's orders, so an identical correct agent failed four times in a row")

    section("6. Genuinely measuring: action budget and invalid actions")
    wander = ScriptedAgent([Action("search", "mouse")] * 20)
    r = run_task(env, wander, TASK_CART, max_steps=15)
    print("agent that only searches: steps used", r["steps"], "success", r["success"], "(stopped by the budget, not by itself)")
    bad = ScriptedAgent([Action("open", "p99"), Action("click", "buy"), Action("checkout")])
    r = run_task(env, bad, TASK_ORDER)
    for a, o in r["trajectory"]:
        print(f"{a.name:10} {str(a.argument):6} -> {o}")
    print("invalid actions came back as observations and the run continued; an agent that cannot read them just burns steps")

    section("7. Genuinely measuring: a 10-step task under an assumed per-step reliability (seed 6, 20000 runs)")
    rng = random.Random(6)
    for p in (0.99, 0.95, 0.90):
        ok = sum(all(rng.random() < p for _ in range(10)) for _ in range(20000))
        print(f"per-step success {p:.0%}: {ok / 20000:.1%} of 10-step shopping tasks complete (arithmetic {p ** 10:.1%})")
    print("the rates are assumptions; the point is that a 10-step flow needs every step to land")


if __name__ == "__main__":
    main()
