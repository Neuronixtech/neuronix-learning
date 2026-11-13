"""Teaching implementation (our own): delegating agent work with isolation and merge contracts, Part 1 - work-unit contracts with six fields, exclusive write ownership by path COMPONENTS (not text prefixes),
the lesson's app/ ownership conflict, dependency validation and waves, and why parallelism is not automatically faster under ILLUSTRATIVE numbers. Paths and durations are made up. No language model is used."""
from dataclasses import dataclass
from pathlib import PurePosixPath
from typing import Tuple


@dataclass(frozen=True)
class WorkUnit:
    unit_id: str
    goal: str
    owner: str
    paths: Tuple[str, ...]
    dependencies: Tuple[str, ...]
    proof: Tuple[str, ...]
    handoff: Tuple[str, ...]


def normalize_path(path):
    if not isinstance(path, str) or not path.strip():
        raise ValueError("Expected a non-empty path")
    raw = path.replace(chr(92), "/")
    if raw.startswith("/") or (len(raw) > 1 and raw[1] == ":"):
        raise ValueError("Expected a relative path")
    if ".." in raw.split("/"):
        raise ValueError("Parent traversal is not allowed")
    parts = tuple(p for p in PurePosixPath(raw).parts if p != ".")
    if not parts:
        raise ValueError("Repository root ownership is not allowed")
    return parts


def paths_overlap(a, b):
    x, y = normalize_path(a), normalize_path(b)
    n = min(len(x), len(y))
    return x[:n] == y[:n]


def unit(uid, paths, deps=()):
    return WorkUnit(uid, f"Complete {uid}", f"{uid}-agent", tuple(paths), tuple(deps), ("Required proof",), ("Changed files and risks",))


def validate_ownership(units):
    for i, a in enumerate(units):
        for b in units[i + 1:]:
            for pa in a.paths:
                for pb in b.paths:
                    if paths_overlap(pa, pb):
                        raise ValueError(f"Overlapping ownership: {a.unit_id}:{pa} and {b.unit_id}:{pb}")


def validate_dependencies(units):
    ids = [u.unit_id for u in units]
    if len(ids) != len(set(ids)):
        raise ValueError("Duplicate work-unit IDs")
    for u in units:
        for d in u.dependencies:
            if d == u.unit_id:
                raise ValueError(f"{u.unit_id} depends on itself")
            if d not in ids:
                raise ValueError(f"{u.unit_id} has unknown dependency: {d}")


def compute_waves(units):
    validate_dependencies(units)
    pending = {u.unit_id: set(u.dependencies) for u in units}
    done, waves = set(), []
    while pending:
        ready = sorted(k for k, d in pending.items() if d <= done)
        if not ready:
            raise ValueError("No executable units remain; dependency graph is blocked by: " + ", ".join(sorted(pending)))
        waves.append(ready)
        for k in ready:
            del pending[k]
        done.update(ready)
    return waves


def build_plan(units):
    validate_dependencies(units)
    validate_ownership(units)
    return {"units": [u.unit_id for u in units], "execution_waves": compute_waves(units), "status": "planned"}


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Genuinely running: a valid plan and the lesson's app/ ownership experiment")
    api, docs = unit("api", ["app/accounts.py"]), unit("docs", ["docs/accounts.md"])
    review, integ = unit("review", ["reviews/accounts.json"], ["api"]), unit("integration", ["outputs/integration.json"], ["api", "docs", "review"])
    print("plan:", build_plan([api, docs, review, integ]))
    bad_docs = unit("docs", ["app/"])
    try:
        build_plan([api, bad_docs, review, integ])
    except ValueError as e:
        print("docs owns app/:", e)
    print("owning the directory app/ also covers app/accounts.py, so the plan was refused before any worker started; the contract is checked as a plan, which is the only moment it is cheap to fix")

    section("2. Genuinely measuring: component matching versus a text prefix")
    for a, b in (("app/", "app/accounts.py"), ("app", "application/x.py"), ("app/", "application/x.py"), ("app/api.py", "app/models.py"), ("App/accounts.py", "app/")):
        print(f"{a:18} vs {b:18} component overlap={paths_overlap(a, b)!s:5} naive startswith={b.startswith(a)}")
    print("the owner written as app without a trailing slash made the text prefix claim application/x.py as inside it (second row), while the component comparison did not and gave the same answer for app and app/; the last row shows case: this comparison is case-sensitive, so App/accounts.py and app/ do not overlap here even though they would be the same folder on a case-insensitive filesystem")

    section("3. Genuinely running: unsafe paths are rejected before they can own anything")
    for p in ("../secrets.txt", "/etc/passwd", "C:\\Windows\\x", "", ".", "app\\accounts.py", "./app/./accounts.py"):
        try:
            print(f"{p!r:24} -> {normalize_path(p)}")
        except ValueError as e:
            print(f"{p!r:24} rejected: {e}")
    print("traversal, absolute, drive-letter, empty and root paths were refused while backslashes and dot segments were cleaned; this is lexical only, and symlinks and the real filesystem are not consulted")

    section("4. Genuinely running: dependency defects and a blocked graph")
    for label, us in (("unknown dependency", [unit("a", ["a/"], ["zzz"])]), ("self dependency", [unit("a", ["a/"], ["a"])]), ("duplicate ids", [unit("a", ["a/"]), unit("a", ["b/"])]),
                      ("cycle", [unit("a", ["a/"], ["b"]), unit("b", ["b/"], ["a"])])):
        try:
            compute_waves(us)
            print(f"{label:20} accepted")
        except ValueError as e:
            print(f"{label:20} rejected: {e}")
    print("ownership and dependencies are separate checks: two units can own different files and still be unable to run, and the cycle was reported with the names of the units that blocked it")

    section("5. Genuinely computing: when parallel delegation is slower (ILLUSTRATIVE numbers)")
    serial = 12
    for label, crit, coord, integ_t, rework in (("tidy split", 4, 1, 2, 0), ("some conflicts", 4, 1, 2, 3), ("heavy conflicts", 4, 2, 3, 6)):
        total = crit + coord + integ_t + rework
        print(f"{label:16} critical {crit}h + coordination {coord}h + integration {integ_t}h + rework {rework}h = {total}h vs serial {serial}h -> {'faster' if total < serial else 'slower'}")
    print("the hours are invented to show the shape of the argument: the critical path sets the floor, and once coordination, integration and rework are added the parallel plan can lose to the serial one; the lab measured nothing about real agents")


if __name__ == "__main__":
    main()
