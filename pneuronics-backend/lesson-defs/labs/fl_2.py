"""Teaching implementation (our own): runtime feedback loops, Part 2 - deterministic head-and-tail truncation, memory behaviour of capturing large output, and write-time secret redaction,
all measured on this machine. The secret values are made up. No language model is used."""
import json
import re
import subprocess
import sys
import tempfile
import tracemalloc
from pathlib import Path


def truncate_lines(text, head=5, tail=5):
    lines = text.splitlines()
    if len(lines) <= head + tail:
        return text
    omitted = len(lines) - head - tail
    return chr(10).join(lines[:head] + [f"...truncated {omitted} lines..."] + lines[-tail:])


class BoundedCapture:
    def __init__(self, head_limit=2000, tail_limit=2000):
        self.head_limit, self.tail_limit = head_limit, tail_limit
        self.head, self.tail, self.total = bytearray(), bytearray(), 0

    def feed(self, chunk):
        self.total += len(chunk)
        room = self.head_limit - len(self.head)
        if room > 0:
            self.head += chunk[:room]
            chunk = chunk[room:]
        if chunk:
            self.tail += chunk
            if len(self.tail) > self.tail_limit:
                del self.tail[: len(self.tail) - self.tail_limit]

    def render(self):
        kept = len(self.head) + len(self.tail)
        mid = f"{chr(10)}...truncated {self.total - kept} bytes...{chr(10)}" if self.total > kept else ""
        return self.head.decode("utf-8", "replace") + mid + self.tail.decode("utf-8", "replace")


PATTERNS = [(re.compile(r"(?i)\bBearer\s+\S+"), "Bearer [REDACTED]"), (re.compile(r"(?i)\bpassword\s*=\s*\S+"), "password=[REDACTED]"), (re.compile(r"(?i)\bapi_key\s*=\s*\S+"), "api_key=[REDACTED]")]


def redact(text):
    for pat, rep in PATTERNS:
        text = pat.sub(rep, text)
    return text


def section(t):
    print(f"\n--- {t} ---")


def main():
    py = sys.executable
    section("1. Genuinely running: head and tail truncation, and what falls in the middle")
    out = chr(10).join(f"Line {i}" for i in range(1, 101))
    t = truncate_lines(out)
    print(t.replace(chr(10), " | "))
    print("same input twice gives identical output:", truncate_lines(out) == truncate_lines(out))
    buried = chr(10).join("ERROR: the real cause" if i == 50 else f"Line {i}" for i in range(1, 101))
    print("line 50 survives truncation:", "ERROR: the real cause" in truncate_lines(buried))
    print("the output is deterministic and bounded, and the one line that mattered, buried in the middle, was dropped; head and tail help because tools usually print the summary last, but they cannot know which line is important")

    section("2. Genuinely measuring: line limits against one enormous line")
    one = "x" * 5_000_000
    print("lines:", len(one.splitlines()), "| characters kept by truncate_lines:", len(truncate_lines(one)))
    print("a line-based limit kept all 5,000,000 characters because it counted one line; the limit has to be in bytes as well as lines")

    section("3. Genuinely measuring: peak memory, capture then truncate versus bounded streaming")
    child = "import sys; [sys.stdout.write('y' * 99 + chr(10)) for _ in range(200000)]"
    tracemalloc.start()
    p = subprocess.run([py, "-c", child], capture_output=True, text=True)
    cur, peak_run = tracemalloc.get_traced_memory()
    tracemalloc.stop()
    kept_run = len(truncate_lines(p.stdout))
    tracemalloc.start()
    cap = BoundedCapture()
    proc = subprocess.Popen([py, "-c", child], stdout=subprocess.PIPE)
    while True:
        chunk = proc.stdout.read(8192)
        if not chunk:
            break
        cap.feed(chunk)
    proc.wait()
    cur2, peak_b = tracemalloc.get_traced_memory()
    tracemalloc.stop()
    print(f"child printed {cap.total:,} bytes")
    print(f"subprocess.run capture then truncate: peak traced {peak_run / 1e6:.1f} MB, kept {kept_run:,} characters")
    print(f"bounded streaming capture           : peak traced {peak_b / 1e6:.2f} MB, kept {len(cap.render()):,} characters, stdout fully drained: {proc.returncode == 0}")
    print("truncating after capture limited what was stored but not what was held while the output arrived, whereas the bounded reader kept memory near its limits; these are Python-allocation peaks from tracemalloc, not operating-system memory")

    section("4. Genuinely running: redaction patterns on sample text with made-up secrets")
    sample = chr(10).join(["Authorization: Bearer abc123", "password=secret123", "api_key=example456", "PASSWORD = spaced-secret"])
    print(redact(sample).replace(chr(10), " | "))
    print("the known shapes were replaced, including a different capitalisation and spaces around the equals sign")

    section("5. Genuinely checking: secrets the patterns do not know about")
    misses = ['{"password": "json-secret"}', "token: ghp_exampletoken123", "secret=abc", "https://user:pw@example.com/path", "Authorization: Basic dXNlcjpwdw=="]
    for m in misses:
        r = redact(m)
        print(f"{m:46} -> {'unchanged' if r == m else r}")
    print("every one of these passed through untouched, because redaction by pattern only removes shapes someone listed; it is a layer, to be combined with keeping secrets out of command lines and with restricted access to the log")

    section("6. Genuinely checking: redact before writing, not when reading")
    with tempfile.TemporaryDirectory() as d:
        raw, safe = Path(d) / "raw.jsonl", Path(d) / "safe.jsonl"
        rec = {"command": ["deploy", "--password=hunter2"], "stdout": "Authorization: Bearer abc123"}
        raw.write_text(json.dumps(rec) + chr(10), encoding="utf-8")
        safe.write_text(json.dumps({"command": [redact(a) for a in rec["command"]], "stdout": redact(rec["stdout"])}) + chr(10), encoding="utf-8")
        print("raw file contains hunter2:", "hunter2" in raw.read_text(encoding="utf-8"), "| redacted-on-write file contains hunter2:", "hunter2" in safe.read_text(encoding="utf-8"))
        print("redacted command stored:", json.loads(safe.read_text(encoding="utf-8"))["command"])
        print("the actual command list passed to the process is the original, so redaction changes only what is stored; redacting when the log is read would have left the secret on disk")


if __name__ == "__main__":
    main()
