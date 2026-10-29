"""Teaching implementation (our own): HTN Part 1 - state, operators, preconditions, effects, methods."""
from dataclasses import dataclass
from typing import Callable

Task = tuple
State = set


@dataclass
class Operator:
    name: str
    preconditions: Callable
    apply_effects: Callable

    def applicable(self, state: State, task: Task) -> bool:
        return self.preconditions(state, task)

    def execute(self, state: State, task: Task) -> State:
        if not self.applicable(state, task):
            raise ValueError(f"Operator {self.name!r} cannot execute for task {task!r}")
        return self.apply_effects(state, task)


@dataclass
class Method:
    name: str
    task_name: str
    condition: Callable
    decompose: Callable

    def applicable(self, state: State, task: Task) -> bool:
        return self.condition(state, task)


def can_pickup(state, task):
    _, package = task
    return f"package:{package}:warehouse" in state and "worker:warehouse" in state


def apply_pickup(state, task):
    _, package = task
    new = set(state)
    new.remove(f"package:{package}:warehouse")
    new.add(f"package:{package}:picked")
    return new


def can_load(state, task):
    _, package = task
    return f"package:{package}:picked" in state and "truck:warehouse" in state


def apply_load(state, task):
    _, package = task
    new = set(state)
    new.remove(f"package:{package}:picked")
    new.add(f"package:{package}:loaded")
    return new


def can_drive(state, task):
    _, package = task
    return f"package:{package}:loaded" in state and "truck:warehouse" in state and "driver:available" in state


def apply_drive(state, task):
    new = set(state)
    new.remove("truck:warehouse")
    new.add("truck:customer")
    return new


def can_handover(state, task):
    _, package = task
    return f"package:{package}:loaded" in state and "truck:customer" in state


def apply_handover(state, task):
    _, package = task
    new = set(state)
    new.remove(f"package:{package}:loaded")
    new.add(f"package:{package}:delivered")
    return new


OPERATORS = {
    "pickup_package": Operator("pickup_package", can_pickup, apply_pickup),
    "load_package": Operator("load_package", can_load, apply_load),
    "drive_to_customer": Operator("drive_to_customer", can_drive, apply_drive),
    "handover_package": Operator("handover_package", can_handover, apply_handover),
}


def decompose_delivery(state, task):
    _, package = task
    return [("prepare_package", package), ("transport_package", package), ("handover_package", package)]


def decompose_prepare(state, task):
    _, package = task
    return [("pickup_package", package), ("load_package", package)]


METHODS = {
    "deliver_package": [Method("standard_delivery", "deliver_package", lambda s, t: True, decompose_delivery)],
    "prepare_package": [Method("standard_preparation", "prepare_package", lambda s, t: True, decompose_prepare)],
}

INITIAL = {"package:P1:warehouse", "worker:warehouse", "truck:warehouse", "driver:available"}


def show(title, state):
    print(title)
    for fact in sorted(state):
        print("  -", fact)


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Operators transform state: S' = (S - Del) + Add")
    s0 = set(INITIAL)
    show("INITIAL STATE", s0)
    task = ("pickup_package", "P1")
    print("Can execute pickup?", OPERATORS["pickup_package"].applicable(s0, task))
    s1 = OPERATORS["pickup_package"].execute(s0, task)
    show("AFTER PICKUP", s1)
    s2 = OPERATORS["load_package"].execute(s1, ("load_package", "P1"))
    show("AFTER LOAD", s2)
    print("original state unchanged:", s0 == INITIAL)

    section("2. Preconditions reject illegal orderings")
    for name in ("drive_to_customer", "handover_package", "load_package"):
        print(f"{name:<18} at the initial state -> applicable: {OPERATORS[name].applicable(s0, (name, 'P1'))}")
    try:
        OPERATORS["drive_to_customer"].execute(s0, ("drive_to_customer", "P1"))
    except ValueError as e:
        print("execute() raises:", e)

    section("3. Checking proposed sequences mechanically")
    def check(sequence):
        state = set(INITIAL)
        for i, t in enumerate(sequence, 1):
            op = OPERATORS[t[0]]
            if not op.applicable(state, t):
                return f"rejected at step {i}: {t[0]} preconditions not met"
            state = op.execute(state, t)
        return f"valid, final state has delivered: {'package:P1:delivered' in state}"
    good = [("pickup_package", "P1"), ("load_package", "P1"), ("drive_to_customer", "P1"), ("handover_package", "P1")]
    print("fluent, correct order      ->", check(good))
    print("drive first                ->", check([good[2], good[0], good[1], good[3]]))
    print("pickup, drive, load, hand  ->", check([good[0], good[2], good[1], good[3]]))

    section("4. Why copying state matters during search")
    shared = set(INITIAL)
    OPERATORS["pickup_package"].execute(shared, ("pickup_package", "P1"))
    print("operator copied: shared state still has package at warehouse:", "package:P1:warehouse" in shared)
    def bad_apply(state, task):
        state.remove("package:P1:warehouse")
        state.add("package:P1:picked")
        return state
    broken = Operator("bad_pickup", can_pickup, bad_apply)
    trial = set(INITIAL)
    broken.execute(trial, ("bad_pickup", "P1"))
    print("in-place operator: the caller's state was changed too:", "package:P1:picked" in trial)
    print("after that, a second branch cannot try pickup again:", broken.applicable(trial, ("bad_pickup", "P1")))

    section("5. Genuinely checking: soundness is only as good as the schema")
    def can_pay_wrong(state, task):
        return True
    pay_wrong = Operator("release_payment", can_pay_wrong, lambda s, t: s | {"payment:released"})
    pay_right = Operator("release_payment", lambda s, t: {"invoice_verified", "manager_approved"} <= s, lambda s, t: s | {"payment:released"})
    bare = {"invoice_verified"}
    print("wrong schema (always True) allows payment without approval:", pay_wrong.applicable(bare, ("release_payment",)))
    print("correct schema blocks it                                  :", not pay_right.applicable(bare, ("release_payment",)))

    section("6. The hierarchy so far, and the deliberate gap")
    task_names = set(OPERATORS) | set(METHODS)
    for t in ("deliver_package", "prepare_package", "transport_package", "pickup_package"):
        kind = "primitive" if t in OPERATORS else ("compound, has method" if t in METHODS else "UNKNOWN: no operator and no method")
        print(f"{t:<18} {kind}")


if __name__ == "__main__":
    main()
