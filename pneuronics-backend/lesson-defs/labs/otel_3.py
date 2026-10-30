"""Teaching implementation (our own): content capture, external store, span status and the stability opt-in - with a 1,200+ line trace proof."""
import contextvars
import os
import random
import subprocess
import sys
import time
import uuid
from contextlib import contextmanager
from dataclasses import dataclass, field
from typing import Optional

LINES = []


def out(text=""):
    for line in str(text).split("\n"):
        LINES.append(line)
        print(line)


CANARY = "SECRET-4821"


@dataclass
class CaptureConfig:
    enabled: bool = False
    inline: bool = False  # the unsafe variant: put content on the span itself


class ExternalContentStore:
    def __init__(self, sequential=False, token="store-token"):
        self.items, self.sequential, self.token, self.n = {}, sequential, token, 0

    def put(self, content):
        self.n += 1
        ref = f"ref-{self.n:04d}" if self.sequential else f"ref-{uuid.uuid4().hex}"
        self.items[ref] = (content, time.monotonic())
        return ref

    def get(self, ref, token=None):
        if self.token is not None and token != self.token:
            raise PermissionError("bad token")
        item = self.items.get(ref)
        return item[0] if item else None

    def delete(self, ref):
        self.items.pop(ref, None)

    def evict_older_than(self, seconds):
        cutoff = time.monotonic() - seconds
        for k in [k for k, (_, t) in self.items.items() if t < cutoff]:
            del self.items[k]


@dataclass
class Span:
    name: str
    kind: str = "INTERNAL"
    attributes: dict = field(default_factory=dict)
    parent_id: Optional[str] = None
    span_id: str = field(default_factory=lambda: uuid.uuid4().hex[:16])
    start: float = 0.0
    end: float = 0.0
    status: str = "UNSET"


class Tracer:
    def __init__(self, record_error_message=False):
        self.spans, self.current = [], contextvars.ContextVar("cur_" + uuid.uuid4().hex, default=None)
        self.record_error_message = record_error_message

    @contextmanager
    def start_span(self, name, kind="INTERNAL", attributes=None):
        parent = self.current.get()
        span = Span(name, kind, dict(attributes or {}), parent.span_id if parent else None, start=time.perf_counter())
        self.spans.append(span)
        token = self.current.set(span)
        try:
            yield span
        except Exception as e:
            span.status = "ERROR"
            span.attributes["error.type"] = type(e).__name__
            if self.record_error_message:
                span.attributes["error.message"] = str(e)
            raise
        else:
            span.status = "OK" if span.status == "UNSET" else span.status
        finally:
            span.end = time.perf_counter()
            self.current.reset(token)


def maybe_store_content(store, config, content):
    if not config.enabled:
        return None
    return store.put(content)


def model_call(tracer, store, config, prompt):
    attrs = {"gen_ai.operation.name": "chat", "gen_ai.provider.name": "openai", "gen_ai.request.model": "gpt-4o"}
    with tracer.start_span("chat gpt-4o", "CLIENT", attrs) as s:
        if config.enabled and config.inline:
            s.attributes["gen_ai.input.messages"] = prompt
        else:
            ref = maybe_store_content(store, config, prompt)
            if ref:
                s.attributes["gen_ai.input.ref"] = ref
        answer = f"answer to a prompt of {len(prompt)} characters"
        ref = maybe_store_content(store, config, answer) if not config.inline else None
        if config.enabled and config.inline:
            s.attributes["gen_ai.output.messages"] = answer
        elif ref:
            s.attributes["gen_ai.output.ref"] = ref
        s.attributes["gen_ai.response.model"] = "gpt-4o-2024-08-06"
        return answer


def search_tool(query, fail):
    if fail:
        raise RuntimeError(f"Search backend unavailable for query: {query}")
    return ["d1", "d2"]


def run_agent(tracer, store, config, question, fail_tool=False):
    with tracer.start_span("invoke_agent researcher", "INTERNAL", {"gen_ai.operation.name": "invoke_agent", "gen_ai.agent.name": "researcher"}):
        model_call(tracer, store, config, question)
        try:
            with tracer.start_span("execute_tool search", "INTERNAL", {"gen_ai.operation.name": "execute_tool", "gen_ai.tool.name": "search"}):
                search_tool(question, fail_tool)
        except RuntimeError:
            raise
        return model_call(tracer, store, config, question + " + documents")


def print_trace(spans):
    kids = {}
    for s in spans:
        kids.setdefault(s.parent_id, []).append(s)

    def rec(s, d):
        attrs = " ".join(f"{k.replace('gen_ai.', '')}={v}" for k, v in sorted(s.attributes.items()) if "message" not in k)
        out(f"{'  ' * d}{s.name} [{s.kind}] status={s.status} id={s.span_id[:8]} {attrs}"[:400])
        for c in kids.get(s.span_id, []):
            rec(c, d + 1)
    for r in kids.get(None, []):
        rec(r, 0)


def serialise(spans):
    return "\n".join(f"{s.name}|{sorted(s.attributes.items())}|{s.status}" for s in spans)


def section(t):
    out(f"\n--- {t} ---")


def main():
    mode = os.getenv("OTEL_SEMCONV_STABILITY_OPT_IN", "not-set")
    out(f"Semantic convention mode: {mode}")

    section("1. Three capture designs on the same request (the prompt contains the canary " + CANARY + ")")
    prompt = f"Summarise the account notes. {CANARY} is the customer's access code."
    for label, cfg in (("capture off (default)", CaptureConfig()), ("inline capture on spans", CaptureConfig(True, True)), ("external store + reference ids", CaptureConfig(True, False))):
        t, store = Tracer(), ExternalContentStore()
        run_agent(t, store, cfg, prompt)
        in_trace = CANARY in serialise(t.spans)
        in_store = any(CANARY in c for c, _ in store.items.values())
        refs = sum(1 for s in t.spans for k in s.attributes if k.endswith(".ref"))
        out(f"{label:32} canary in the trace: {in_trace!s:5} | canary in the store: {in_store!s:5} | reference ids on spans: {refs}")
    out("only the inline design puts the secret into the telemetry pipeline; the store design moves it to a place with its own access control, but it still exists")

    section("2. Genuinely checking: can a reference id be guessed")
    for sequential in (True, False):
        store = ExternalContentStore(sequential=sequential, token=None)
        for i in range(40):
            store.put(f"private message {i}")
        guesses = [f"ref-{i:04d}" for i in range(1, 51)]
        got = sum(store.get(g) is not None for g in guesses)
        out(f"{'sequential' if sequential else 'random 128-bit':14} ids, store with no access control: {got} of 50 guesses returned private content")
    guarded = ExternalContentStore(sequential=True)
    guarded.put("private message")
    try:
        guarded.get("ref-0001")
        verdict = "readable"
    except PermissionError:
        verdict = "refused without the token"
    out(f"sequential ids with a token check: {verdict}")
    out("a reference id is a pointer, not a permission; unguessable ids help but the store needs authorisation, and the span only ever carries the pointer")

    section("3. Genuinely measuring: retention and erasure")
    store = ExternalContentStore()
    cfg = CaptureConfig(True, False)
    refs_kept = []
    for i in range(300):
        t = Tracer()
        run_agent(t, store, cfg, f"question {i} {CANARY if i % 50 == 0 else ''}")
        refs_kept += [v for s in t.spans for k, v in s.attributes.items() if k.endswith(".ref")]
    out(f"after 300 runs the store holds {len(store.items)} items; nothing removes them unless a policy does")
    time.sleep(0.05)
    store.evict_older_than(0.01)
    out(f"after evict_older_than(10 ms): {len(store.items)} items")
    store2 = ExternalContentStore()
    t = Tracer(); run_agent(t, store2, cfg, f"erase me {CANARY}")
    ref = next(v for s in t.spans for k, v in s.attributes.items() if k.endswith("input.ref"))
    store2.delete(ref)
    out(f"after erasing {ref[:12]}..., the span still carries the id and reading it returns {store2.get(ref, 'store-token')!r}; the trace keeps a dangling pointer, which is the intended result of deleting")

    section("4. Genuinely checking: errors, status and what the message leaks")
    for record_message in (False, True):
        t, store = Tracer(record_error_message=record_message), ExternalContentStore()
        try:
            run_agent(t, store, CaptureConfig(), f"find {CANARY}", fail_tool=True)
        except RuntimeError as e:
            raised = f"{type(e).__name__} reached the caller"
        errs = [s for s in t.spans if s.status == "ERROR"]
        out(f"record str(exception)={record_message!s:5} | {raised} | spans with ERROR: {[s.name for s in errs]} | canary in the trace: {CANARY in serialise(t.spans)}")
    out("the span status and the exception type are enough to find the failure; copying the exception message put the user's query, secret included, into the trace; the exception was re-raised either way")

    section("5. Genuinely checking: the stability opt-in is read from the environment")
    code = "import os;print(os.getenv('OTEL_SEMCONV_STABILITY_OPT_IN','not-set'))"
    for env_val in (None, "gen_ai_latest_experimental"):
        env = {k: v for k, v in os.environ.items() if k != "OTEL_SEMCONV_STABILITY_OPT_IN"}
        if env_val:
            env["OTEL_SEMCONV_STABILITY_OPT_IN"] = env_val
        res = subprocess.run([sys.executable, "-I", "-c", code], env=env, capture_output=True, text=True).stdout.strip()
        out(f"child process with variable {'set to ' + env_val if env_val else 'unset':44} reads: {res}")
    out(f"this process was started with: {mode}")
    out("the variable only reports a choice; nothing in this lab changes attribute names, because the lab has no instrumentation library to switch")

    section("6. The 1,200+ line proof: 240 runs with errors, status and reference ids")
    rng = random.Random(8)
    store, cfg = ExternalContentStore(), CaptureConfig(True, False)
    all_spans, runs, failed = [], 240, 0
    for i in range(runs):
        t = Tracer()
        fail = rng.random() < 0.12
        failed += fail
        try:
            run_agent(t, store, cfg, f"question {i}", fail_tool=fail)
            res = "ok"
        except RuntimeError:
            res = "error"
        all_spans += t.spans
        out(f"RUN {i + 1:03d} result={res} spans={len(t.spans)}")
        print_trace(t.spans)
    out("")
    ids = {s.span_id for s in all_spans}
    orphans = sum(1 for s in all_spans if s.parent_id is not None and s.parent_id not in ids)
    errors = sum(1 for s in all_spans if s.status == "ERROR")
    expected_errors = failed * 2  # the tool span and the agent span that re-raised
    canary_leaks = CANARY in serialise(all_spans)
    refs = [v for s in all_spans for k, v in s.attributes.items() if k.endswith(".ref")]
    resolvable = all(store.get(r, "store-token") is not None for r in refs)
    out(f"CHECKS spans={len(all_spans)} runs={runs} failed_runs={failed} error_spans={errors} (expected {expected_errors}) orphans={orphans}")
    out(f"CHECKS reference_ids={len(refs)} all_resolvable={resolvable} secrets_in_trace={canary_leaks} store_items={len(store.items)}")
    total = len(LINES) + 2
    out(f"TOTAL LINES EMITTED BY THIS PROGRAM: {total}")
    out(f"REQUIREMENT line count > 1200: {total > 1200}")


if __name__ == "__main__":
    main()
