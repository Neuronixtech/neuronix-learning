"""Teaching implementation (our own): frame the task before code, Part 1 - a TaskFrame with six fields (goal, repository facts with evidence receipts, allowed paths, forbidden paths,
acceptance commands, unknowns), a validator that collects every error, lexical path normalisation, and the four required breakages. The repository paths and facts are made up. No language model is used."""
import copy
from dataclasses import dataclass, field
from pathlib import PurePosixPath
from typing import List

VALID_CATEGORIES = {"discoverable", "decidable", "human", "deferred"}


@dataclass
class RepositoryFact:
    claim: str
    evidence: str


@dataclass
class Unknown:
    question: str
    category: str
    action: str


@dataclass
class TaskFrame:
    goal: str
    repository_facts: List[RepositoryFact] = field(default_factory=list)
    allowed_paths: List[str] = field(default_factory=list)
    forbidden_paths: List[str] = field(default_factory=list)
    acceptance_commands: List[str] = field(default_factory=list)
    unknowns: List[Unknown] = field(default_factory=list)


def is_nonempty(value):
    return isinstance(value, str) and bool(value.strip())


def normalize_path(value):
    raw = value.strip().replace(chr(92), "/")
    path = PurePosixPath(raw)
    if path.is_absolute():
        raise ValueError("absolute paths are not allowed")
    parts = []
    for part in path.parts:
        if part in ("", "."):
            continue
        if part == "..":
            raise ValueError("parent traversal is not allowed")
        parts.append(part)
    return "/".join(parts)


def path_covers(parent, child):
    return child == parent or child.startswith(parent + "/")


def validate_task_frame(frame):
    errors = []
    if not is_nonempty(frame.goal):
        errors.append("Goal is required.")
    for i, fact in enumerate(frame.repository_facts, start=1):
        if not is_nonempty(fact.claim):
            errors.append(f"Repository fact {i} has no claim.")
        if not is_nonempty(fact.evidence):
            errors.append(f"Repository fact {i} has no evidence receipt.")
    if not frame.allowed_paths:
        errors.append("At least one allowed path is required.")
    allowed, forbidden = [], []
    for label, raw_list, out in (("allowed", frame.allowed_paths, allowed), ("forbidden", frame.forbidden_paths, forbidden)):
        for raw in raw_list:
            try:
                n = normalize_path(raw)
                if not n:
                    errors.append(f"A {label} path cannot be empty.")
                else:
                    out.append(n)
            except ValueError as exc:
                errors.append(f"Invalid {label} path {raw!r}: {exc}.")
    for a in allowed:
        for f in forbidden:
            if path_covers(a, f) or path_covers(f, a):
                errors.append(f"Allowed and forbidden paths overlap: {a!r} vs {f!r}.")
    if not [c for c in frame.acceptance_commands if is_nonempty(c)]:
        errors.append("At least one acceptance command is required.")
    for i, u in enumerate(frame.unknowns, start=1):
        if not is_nonempty(u.question):
            errors.append(f"Unknown {i} has no question.")
        if u.category not in VALID_CATEGORIES:
            errors.append(f"Unknown {i} has invalid category {u.category!r}.")
        if not is_nonempty(u.action):
            errors.append(f"Unknown {i} has no planned action.")
    return errors


def example_task_frame():
    return TaskFrame(
        goal="Reject registration when the normalized email already exists, using the established duplicate response and creating no second account.",
        repository_facts=[RepositoryFact("The duplicate-registration test expects HTTP 409.", "tests/test_accounts.py:44"), RepositoryFact("Email normalization is centralized.", "src/accounts/normalization.py:18")],
        allowed_paths=["src/accounts/", "tests/accounts/"],
        forbidden_paths=["migrations/", "deploy/", "src/auth/"],
        acceptance_commands=["python3 -m unittest tests.test_accounts -v"],
        unknowns=[Unknown("Does storage prevent concurrent duplicate inserts?", "discoverable", "Inspect database constraints and persistence tests.")],
    )


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Genuinely running: the example frame and the four required breakages")
    base = example_task_frame()
    print("valid frame errors:", validate_task_frame(base))
    cases = []
    f = copy.deepcopy(base); f.goal = ""; cases.append(("remove the goal", f))
    f = copy.deepcopy(base); f.repository_facts[0].evidence = ""; cases.append(("remove a fact receipt", f))
    f = copy.deepcopy(base); f.allowed_paths = ["src/accounts/"]; f.forbidden_paths = ["src/accounts/service.py"]; cases.append(("overlap the paths", f))
    f = copy.deepcopy(base); f.acceptance_commands = []; cases.append(("remove acceptance command", f))
    for label, fr in cases:
        print(f"{label:26} -> {validate_task_frame(fr)}")
    print("each breakage produced its own specific message and nothing else, so the four failures are distinguishable and a generic 'invalid task' is never needed")

    section("2. Genuinely running: errors are collected, not stopped at the first")
    f = copy.deepcopy(base); f.goal = "   "; f.acceptance_commands = [""]; f.allowed_paths = []
    errs = validate_task_frame(f)
    print(len(errs), "errors in one run:", errs)
    print("a whitespace-only goal, a blank command and a missing allowed path were all reported together, which lets the author fix several problems in one pass; the tests should assert the specific message rather than the whole list for this reason")

    section("3. Genuinely measuring: directory-aware coverage versus a naive prefix test")
    for parent, child in (("src/accounts", "src/accounts/service.py"), ("src/accounts", "src/accounts_old/service.py"), ("src/accounts", "src/accounts"), ("src/accounts/service.py", "src/accounts")):
        print(f"{parent:26} covers {child:30} directory-aware={path_covers(parent, child)!s:5} naive startswith={child.startswith(parent)}")
    print("the naive startswith test said src/accounts covers src/accounts_old, which is a different directory, while the directory-aware test did not; and the last row is False in this direction, which is why the validator checks coverage both ways")

    section("4. Genuinely running: lexical path normalisation")
    for p in ("src/accounts/", "src/./accounts", "src\\accounts", "  src/accounts  ", "/etc/config", "../secrets", "src/../secrets", "", "."):
        try:
            print(f"{p!r:22} -> {normalize_path(p)!r}")
        except ValueError as e:
            print(f"{p!r:22} rejected: {e}")
    print("trailing slashes, dot segments, backslashes and padding all collapsed to one form, and absolute or parent-traversal paths were rejected; an empty string and a single dot normalised to an empty path, which the validator reports separately; this is lexical only and says nothing about symlinks or the real filesystem")

    section("5. Genuinely measuring: what the nonempty checks do not catch")
    f = copy.deepcopy(base); f.acceptance_commands = ["", "echo all tests passed"]
    print("acceptance commands ['', 'echo all tests passed']:", validate_task_frame(f))
    f = copy.deepcopy(base); f.goal = "Improve everything"
    print("goal 'Improve everything':", validate_task_frame(f))
    f = copy.deepcopy(base); f.repository_facts[0].evidence = "somewhere in the tests"
    print("evidence 'somewhere in the tests':", validate_task_frame(f))
    print("all three passed: a blank entry beside one real command is tolerated, an echo is accepted as an acceptance command, a vague goal is accepted and an evidence receipt with no file or line is accepted; the validator checks that things exist, and judging whether they are good still needs review")


if __name__ == "__main__":
    main()
