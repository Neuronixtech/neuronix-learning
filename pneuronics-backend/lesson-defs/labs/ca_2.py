"""Teaching implementation (our own): coding-agent scaffolds, Part 2 - scope contracts for code-as-action. A contract names the paths a task may read and write and the most operations it may use; a guarded environment enforces it, and the lab shows that restricting builtins in exec is not a sandbox.
All files and snippets are invented; the snippets are fixed strings written for the lab and no language model is involved."""


class Violation(Exception):
    pass


class GuardedEnv:
    def __init__(self, fs, read_ok, write_ok, max_ops):
        self.fs, self.read_ok, self.write_ok, self.max_ops = dict(fs), tuple(read_ok), tuple(write_ok), max_ops
        self.ops = 0
        self.denied = []

    def _count(self):
        self.ops += 1
        if self.ops > self.max_ops:
            self.denied.append("op budget")
            raise Violation("operation budget exceeded")

    def read_file(self, name):
        self._count()
        if not name.startswith(self.read_ok):
            self.denied.append(f"read {name}")
            raise Violation(f"read denied: {name}")
        return self.fs[name]

    def write_file(self, name, text):
        self._count()
        if not name.startswith(self.write_ok):
            self.denied.append(f"write {name}")
            raise Violation(f"write denied: {name}")
        self.fs[name] = text


FS = {"src/app.py": "print('hi')\n", "src/util.py": "x = 1\n", "docs/readme.md": "# doc\n", "secrets/key.txt": "made-up-secret", "out/report.txt": ""}


def run_snippet(code, env):
    ns = {"read_file": env.read_file, "write_file": env.write_file}
    try:
        exec(code, {"__builtins__": {"len": len, "sorted": sorted, "range": range, "str": str}}, ns)
        return "completed"
    except Violation as e:
        return f"stopped: {e}"
    except Exception as e:
        return f"error: {type(e).__name__}"


SNIPPETS = {
    "in scope": "text = read_file('src/app.py') + read_file('src/util.py')\nwrite_file('out/report.txt', str(len(text)))",
    "reads secrets": "read_file('src/app.py')\nread_file('secrets/key.txt')",
    "writes source": "write_file('src/app.py', 'print(1)')",
    "op loop": "for i in range(100):\n    read_file('src/app.py')",
}


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Genuinely running: four snippets under one contract")
    for name, code in SNIPPETS.items():
        env = GuardedEnv(FS, read_ok=("src/", "docs/"), write_ok=("out/",), max_ops=10)
        res = run_snippet(code, env)
        print(f"{name:14} -> {res} | operations used {env.ops} | denied {env.denied}")
    print("the in-scope snippet completes, the secret read, the source write and the runaway loop are each stopped at the first operation that breaks the contract, and the file system is untouched by the denied operations; the contract is a prefix list and an operation count, which is simpler than a real policy")

    section("2. Genuinely running: what a stopped snippet leaves behind")
    env = GuardedEnv(FS, read_ok=("src/",), write_ok=("out/",), max_ops=10)
    run_snippet("write_file('out/report.txt', 'partial')\nread_file('secrets/key.txt')\nwrite_file('out/report.txt', 'final')", env)
    print("report after the run:", repr(env.fs["out/report.txt"]), "| denied:", env.denied)
    print("the first write happened before the denied read, so a contract that stops a snippet midway does not undo what ran earlier; scope contracts bound future operations and do not roll back past ones")

    section("3. Genuinely running: restricting builtins is not a sandbox")
    env = GuardedEnv(FS, read_ok=("src/",), write_ok=("out/",), max_ops=10)
    probe = "answer = len(().__class__.__bases__[0].__subclasses__())"
    ns = {}
    exec(probe, {"__builtins__": {"len": len}}, ns)
    print("a snippet with only len available still reached the interpreter's class list; classes reachable:", ns["answer"] > 50)
    print("with no import and no open in the namespace the snippet can still walk from a tuple to every loaded class, which is the first step of well-known escapes, so removing builtins narrows what a snippet does by accident and does not contain a hostile one; the lab only counts the reachable classes and does not use them")

    section("4. Genuinely running: a guarded environment is only as strong as the process around it")
    env = GuardedEnv(FS, read_ok=("src/",), write_ok=("out/",), max_ops=10)
    run_snippet("pass", env)
    env.read_ok = ("src/", "secrets/")
    print("a caller that can reach the environment object can widen the contract:", env.read_file("secrets/key.txt") == "made-up-secret")
    print("because the contract lives in an ordinary Python object, anything that shares the process can edit it, so real enforcement has to sit in a separate process or container with its own permissions")


if __name__ == "__main__":
    main()
