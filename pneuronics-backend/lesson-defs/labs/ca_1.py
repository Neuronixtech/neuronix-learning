"""Teaching implementation (our own): coding-agent scaffolds, Part 1 - a one-call-per-turn JSON tool scaffold against a code-as-action scaffold on four scripted tasks over an in-memory virtual file system.
The 'agents' are scripted planners, not language models; the tasks, the turn limit and the file contents are invented for the lab. Turn and operation counts are computed by actually running each plan against the virtual file system."""


def make_fs():
    return {
        "a.txt": "x\nTODO fix\ny\n", "b.txt": "1\n2\n", "c.txt": "alpha\nbeta\ngamma\n", "d.txt": "one\n", "e.txt": "q\nr\n",
        "n1.txt": "A", "n2.txt": "B", "n3.txt": "C", "n4.txt": "D", "n5.txt": "E", "n6.txt": "F",
    }


class Env:
    def __init__(self, fs):
        self.fs, self.ops = dict(fs), 0

    def list_files(self):
        self.ops += 1
        return sorted(self.fs)

    def read_file(self, name):
        self.ops += 1
        return self.fs[name]

    def write_file(self, name, text):
        self.ops += 1
        self.fs[name] = text

    def rename(self, old, new):
        self.ops += 1
        self.fs[new] = self.fs.pop(old)


TASKS = {
    "count_lines": {"files": ["a.txt", "b.txt", "c.txt", "d.txt", "e.txt"], "check": lambda fs, ans: ans == 11},
    "find_todo": {"files": ["a.txt", "b.txt", "c.txt", "d.txt", "e.txt"], "check": lambda fs, ans: ans == "a.txt"},
    "rename_six": {"files": [f"n{i}.txt" for i in range(1, 7)], "check": lambda fs, ans: all(f"n{i}.md" in fs and f"n{i}.txt" not in fs for i in range(1, 7))},
    "concat_four": {"files": ["a.txt", "b.txt", "c.txt", "d.txt"], "check": lambda fs, ans: fs.get("all.txt") == fs["a.txt"] + fs["b.txt"] + fs["c.txt"] + fs["d.txt"]},
}


def json_plan(task, files):
    """One tool call per turn. Returns the list of calls the scripted JSON agent would make."""
    if task in ("count_lines", "find_todo"):
        return [("read_file", f) for f in files]
    if task == "rename_six":
        return [("rename", f, f[:-4] + ".md") for f in files]
    if task == "concat_four":
        return [("read_file", f) for f in files] + [("write_file", "all.txt")]


def run_json(task, max_turns):
    env = Env(make_fs())
    files = TASKS[task]["files"]
    calls = json_plan(task, files)
    seen, turns = [], 0
    for call in calls:
        if turns >= max_turns:
            break
        turns += 1
        if call[0] == "read_file":
            seen.append(env.read_file(call[1]))
        elif call[0] == "rename":
            env.rename(call[1], call[2])
        elif call[0] == "write_file":
            env.write_file("all.txt", "".join(seen))
    done = turns == len(calls)
    if task == "count_lines":
        ans = sum(t.count("\n") for t in seen) if done else None
    elif task == "find_todo":
        ans = next((f for f, t in zip(files, seen) if "TODO" in t), None) if done else None
    else:
        ans = None
    ok = done and TASKS[task]["check"](env.fs, ans)
    return ok, turns, env.ops


CODE = {
    "count_lines": "total = sum(read_file(f).count('\\n') for f in FILES)\nanswer = total",
    "find_todo": "answer = next(f for f in FILES if 'TODO' in read_file(f))",
    "rename_six": "for f in FILES:\n    rename(f, f[:-4] + '.md')",
    "concat_four": "write_file('all.txt', ''.join(read_file(f) for f in FILES))",
}


def run_codeact(task):
    env = Env(make_fs())
    ns = {"__builtins__": {"sum": sum, "next": next}, "FILES": TASKS[task]["files"], "read_file": env.read_file, "write_file": env.write_file, "rename": env.rename, "list_files": env.list_files}
    exec(CODE[task], ns)
    ok = TASKS[task]["check"](env.fs, ns.get("answer"))
    return ok, 1, env.ops


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Genuinely running: the JSON tool-call scaffold with a limit of 5 turns per task")
    tot_turns = tot_ops = passed = 0
    for t in TASKS:
        ok, turns, ops = run_json(t, 5)
        passed += ok
        tot_turns += turns
        tot_ops += ops
        print(f"{t:12} solved {ok!s:5} | turns {turns} | operations {ops}")
    print(f"JSON scaffold: {passed}/4 solved | {tot_turns} turns | {tot_ops} operations")
    print("each tool call costs a turn, so the rename task, which needs six calls, runs into the limit of 5 and is reported as unsolved even though its plan was correct, while the three tasks that need exactly five calls just fit; the turn limit of 5 and the tasks are invented")

    section("2. Genuinely running: the code-as-action scaffold, one program per task")
    tot_turns = tot_ops = passed = 0
    for t in TASKS:
        ok, turns, ops = run_codeact(t)
        passed += ok
        tot_turns += turns
        tot_ops += ops
        print(f"{t:12} solved {ok!s:5} | turns {turns} | operations {ops}")
    print(f"code-as-action scaffold: {passed}/4 solved | {tot_turns} turns | {tot_ops} operations")
    print("one program can loop over many files, so every task finishes in a single turn; the operation counts match the JSON scaffold for three tasks and are lower for find_todo, where the program stops reading at the first match, so the saving is mainly in turns; the scripted programs were written by hand for these four tasks")

    section("3. Genuinely measuring: how the turn limit changes the JSON result")
    for limit in (3, 5, 6, 10):
        res = [run_json(t, limit) for t in TASKS]
        print(f"limit {limit:2d}: solved {sum(r[0] for r in res)}/4 | turns used {sum(r[1] for r in res):2d}")
    print("the JSON scaffold solves all four once the limit is large enough, so the gap between the two scaffolds on this toy is a budget effect and not a capability difference; a real comparison would also have to count tokens per turn and errors in the generated code")


if __name__ == "__main__":
    main()
