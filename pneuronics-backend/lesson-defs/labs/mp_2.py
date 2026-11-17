"""Teaching implementation (our own): managed LLM platforms, Part 2 - a two-provider gateway on a virtual clock with capability and sensitivity checks, a primary and a secondary route, retryable and non-retryable errors, exponential backoff with jitter, a circuit breaker with closed, open and half-open states, a total deadline, retry amplification measured over 1000 requests, the duplicate-execution problem of a tool call across providers and the request cost formula.
The providers are simulators with scripted or seeded failures and a virtual clock that nothing actually waits on; the prices are invented, no Bedrock, Azure OpenAI or Vertex AI call is made and nothing here says that either simulated provider is approved for any real data.
"""
import random
from collections import Counter
from dataclasses import dataclass
from enum import Enum


class Sens(Enum):
    PUBLIC = 0
    INTERNAL = 1
    CONFIDENTIAL = 2
    RESTRICTED = 3


class Err(Enum):
    RATE_LIMIT = "rate_limit"
    TEMPORARY = "temporary"
    UNAVAILABLE = "unavailable"
    INVALID = "invalid_request"
    AUTH = "authentication"
    TIMEOUT_AFTER_EFFECT = "timeout_after_effect"


RETRYABLE = {Err.RATE_LIMIT, Err.TEMPORARY, Err.UNAVAILABLE, Err.TIMEOUT_AFTER_EFFECT}


class ProviderError(Exception):
    def __init__(self, kind):
        super().__init__(kind.value)
        self.kind = kind


class Clock:
    def __init__(self):
        self.ms = 0.0

    def advance(self, d):
        self.ms += d


@dataclass
class Request:
    request_id: str
    task: str
    sensitivity: Sens
    capabilities: frozenset
    budget_ms: int = 5000
    allow_fallback: bool = True
    team: str = "support"
    side_effect: str = ""


@dataclass
class Config:
    name: str
    model: str
    capabilities: frozenset
    max_sensitivity: Sens
    p_in: float
    p_out: float
    latency_ms: int


class Provider:
    def __init__(self, cfg, clock, script=None, failure_rate=0.0, seed=0, effects=None):
        self.cfg, self.clock, self.script = cfg, clock, list(script or [])
        self.failure_rate, self.rng, self.calls, self.effects = failure_rate, random.Random(seed), 0, effects

    def generate(self, req, idem_key=None):
        self.calls += 1
        self.clock.advance(self.cfg.latency_ms)
        err = self.script.pop(0) if self.script else (Err.UNAVAILABLE if self.rng.random() < self.failure_rate else None)
        if err is not None:
            if err == Err.TIMEOUT_AFTER_EFFECT and self.effects is not None and req.side_effect:
                self.effects.run(req.side_effect, idem_key)
            raise ProviderError(err)
        if self.effects is not None and req.side_effect:
            self.effects.run(req.side_effect, idem_key)
        return {"provider": self.cfg.name, "model": self.cfg.model, "input_tokens": 1200, "output_tokens": 300}


class Effects:
    """The external side effect, for example a payment. With a key it deduplicates, without one it repeats."""

    def __init__(self):
        self.done, self.count = set(), 0

    def run(self, name, key):
        if key is not None and (name, key) in self.done:
            return
        self.done.add((name, key))
        self.count += 1


class Breaker:
    def __init__(self, clock, threshold=3, recovery_ms=5000):
        self.clock, self.threshold, self.recovery_ms = clock, threshold, recovery_ms
        self.state, self.fails, self.opened_at = "closed", 0, 0.0

    def allow(self):
        if self.state == "open":
            if self.clock.ms - self.opened_at >= self.recovery_ms:
                self.state = "half_open"
                return True
            return False
        return True

    def success(self):
        self.state, self.fails = "closed", 0

    def failure(self):
        self.fails += 1
        if self.state == "half_open" or self.fails >= self.threshold:
            self.state, self.opened_at = "open", self.clock.ms


class Gateway:
    def __init__(self, primary, secondary, clock, max_attempts=3, use_breaker=True, seed=1):
        self.providers = [primary, secondary]
        self.clock, self.max_attempts = clock, max_attempts
        self.breakers = {p.cfg.name: Breaker(clock) for p in self.providers} if use_breaker else {}
        self.rng, self.log = random.Random(seed), []

    @staticmethod
    def eligible(cfg, req):
        if not req.capabilities <= cfg.capabilities:
            return False, "missing capability " + ",".join(sorted(req.capabilities - cfg.capabilities))
        if req.sensitivity.value > cfg.max_sensitivity.value:
            return False, f"not approved for {req.sensitivity.name.lower()} data"
        return True, "ok"

    def generate(self, req, idempotent=True):
        deadline = self.clock.ms + req.budget_ms
        order = self.providers if req.allow_fallback else self.providers[:1]
        for prov in order:
            ok, why = self.eligible(prov.cfg, req)
            if not ok:
                self.log.append((req.request_id, prov.cfg.name, "skipped", why))
                continue
            br = self.breakers.get(prov.cfg.name)
            if br and not br.allow():
                self.log.append((req.request_id, prov.cfg.name, "skipped", "circuit open"))
                continue
            for attempt in range(self.max_attempts):
                if self.clock.ms + prov.cfg.latency_ms > deadline:
                    self.log.append((req.request_id, prov.cfg.name, "stopped", "deadline"))
                    raise TimeoutError("deadline exceeded")
                try:
                    res = prov.generate(req, req.request_id if idempotent else None)
                    if br:
                        br.success()
                    self.log.append((req.request_id, prov.cfg.name, "ok", f"attempt {attempt + 1}"))
                    res["fallback_used"] = prov is not order[0]
                    return res
                except ProviderError as e:
                    self.log.append((req.request_id, prov.cfg.name, "error", e.kind.value))
                    if e.kind == Err.INVALID:
                        raise
                    if e.kind == Err.AUTH:
                        break
                    if br:
                        br.failure()
                    if e.kind not in RETRYABLE or attempt == self.max_attempts - 1 or (br and br.state == "open"):
                        break
                    back = min(200 * 2 ** attempt, 1000) * self.rng.uniform(0.8, 1.2)
                    if self.clock.ms + back + prov.cfg.latency_ms > deadline:
                        self.log.append((req.request_id, prov.cfg.name, "stopped", "deadline"))
                        raise TimeoutError("deadline exceeded")
                    self.clock.advance(back)
        raise RuntimeError("no provider could serve the request")


BEDROCK = Config("bedrock", "model-b", frozenset({"text", "json", "tools"}), Sens.CONFIDENTIAL, 3.0, 15.0, 800)
AZURE = Config("azure", "model-a", frozenset({"text", "json", "tools", "image"}), Sens.CONFIDENTIAL, 2.5, 10.0, 700)


def cost(cfg, tin, tout):
    return tin / 1e6 * cfg.p_in + tout / 1e6 * cfg.p_out


def make(script_b=None, script_a=None, fr_b=0.0, fr_a=0.0, **kw):
    clock = Clock()
    eff = Effects()
    b = Provider(BEDROCK, clock, script_b, fr_b, 1, eff)
    a = Provider(AZURE, clock, script_a, fr_a, 2, eff)
    return clock, b, a, eff, Gateway(b, a, clock, **kw)


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Genuinely running: routing by capability and sensitivity")
    reqs = [Request("r1", "summarise", Sens.INTERNAL, frozenset({"text"})), Request("r2", "extract", Sens.CONFIDENTIAL, frozenset({"text", "json"})),
            Request("r3", "image analysis", Sens.INTERNAL, frozenset({"text", "image"})), Request("r4", "regulated", Sens.RESTRICTED, frozenset({"text"}))]
    clock, b, a, eff, gw = make()
    for r in reqs:
        try:
            res = gw.generate(r)
            print(f"{r.task:15} -> {res['provider']} (fallback used: {res['fallback_used']})")
        except RuntimeError as e:
            print(f"{r.task:15} -> refused: {e}")
    for entry in gw.log:
        if entry[2] == "skipped":
            print("   skipped:", entry[1], "-", entry[3], "for", entry[0])
    print("the plain summary and the extraction went to the primary, the image request skipped it for lacking image input and went to the secondary without any failure, and the restricted request was refused because neither simulated provider is approved for it; routing here is by a label and a capability set, which is a simplification of a real data-governance decision")

    section("2. Genuinely running: retries with exponential backoff and jitter")
    clock, b, a, eff, gw = make(script_b=[Err.RATE_LIMIT, Err.RATE_LIMIT])
    res = gw.generate(Request("r5", "summarise", Sens.INTERNAL, frozenset({"text"})))
    print("log:", [(e[1], e[2], e[3]) for e in gw.log])
    print(f"served by {res['provider']} after {b.calls} primary calls | virtual time used {clock.ms:.0f} ms | base delays 200, 400 ms with plus or minus 20 percent jitter")
    print("the first two attempts were rate limited, the gateway waited about 200 ms and then about 400 ms and the third attempt succeeded on the same provider without any fallback, and the total time of roughly 3 seconds is three provider latencies of 800 ms plus the two waits; the clock is virtual and nothing slept")

    section("3. Genuinely running: errors that should not be retried")
    for kind in (Err.INVALID, Err.AUTH):
        clock, b, a, eff, gw = make(script_b=[kind, kind, kind])
        try:
            res = gw.generate(Request("r6", "summarise", Sens.INTERNAL, frozenset({"text"})))
            out = f"served by {res['provider']}"
        except ProviderError as e:
            out = f"raised {e.kind.value}"
        print(f"{kind.value:16} primary calls {b.calls} | secondary calls {a.calls} | {out}")
    print("an invalid request was sent once and surfaced as an error, because repeating it or sending it to another provider would only repeat the mistake, while an authentication failure on the primary was not retried and moved to the secondary, since the fault is that provider's configuration; this is the lab's policy choice and a real policy should follow each provider's documented error semantics")

    section("4. Genuinely running: a circuit breaker over time")
    clock, b, a, eff, gw = make(script_b=[Err.UNAVAILABLE] * 4)
    print(f"{'t (ms)':>8} {'breaker':>10} {'primary calls':>14} {'served by':>10}")
    print(f"{clock.ms:>8.0f} {gw.breakers['bedrock'].state:>10} {b.calls:>14} {'-':>10}   before any request")
    for i in range(1, 7):
        res = gw.generate(Request(f"c{i}", "summarise", Sens.INTERNAL, frozenset({"text"})))
        print(f"{clock.ms:>8.0f} {gw.breakers['bedrock'].state:>10} {b.calls:>14} {res['provider']:>10}")
    clock.advance(6000)
    res = gw.generate(Request("c7", "summarise", Sens.INTERNAL, frozenset({"text"})))
    print(f"{clock.ms:>8.0f} {gw.breakers['bedrock'].state:>10} {b.calls:>14} {res['provider']:>10}   after 6000 ms: a half-open probe failed")
    clock.advance(6000)
    res = gw.generate(Request("c8", "summarise", Sens.INTERNAL, frozenset({"text"})))
    print(f"{clock.ms:>8.0f} {gw.breakers['bedrock'].state:>10} {b.calls:>14} {res['provider']:>10}   after another 6000 ms: the probe succeeded")
    print("the three attempts of the very first request were enough to open the breaker, the next five requests went straight to the secondary and the primary call count stayed at 3, the first probe after the cooldown failed and reopened it, and the next probe succeeded, closed the breaker and was served by the primary again; this breaker lives in one process and a fleet of gateways would each have its own")

    section("5. Genuinely measuring: retry amplification over 1000 requests")
    for label, br in (("no breaker", False), ("with breaker", True)):
        clock, b, a, eff, gw = make(fr_b=0.5, fr_a=0.0, use_breaker=br)
        served = Counter()
        for i in range(1000):
            clock.advance(10)
            r = Request(f"a{i}", "summarise", Sens.INTERNAL, frozenset({"text"}), allow_fallback=False)
            try:
                gw.generate(r)
                served["ok"] += 1
            except (RuntimeError, TimeoutError):
                served["failed"] += 1
        print(f"{label:13} logical requests 1000 | provider attempts {b.calls} | per request {b.calls / 1000:.2f} | succeeded {served['ok']}")
    print("with half the attempts failing and up to three attempts per request the primary received 1717 attempts for 1000 requests, close to the expected 1 plus 0.5 plus 0.25 per request, and 888 succeeded against an expected 875; with the breaker the primary received only 26 attempts and 11 requests succeeded, because the breaker kept it closed off for most of the 10 virtual seconds and the other requests failed immediately, since this run has no fallback; retries multiply load, a breaker removes that load, and without a second provider the cost of removing it is failed requests")

    section("6. Genuinely running: a total deadline")
    clock, b, a, eff, gw = make(script_b=[Err.TEMPORARY] * 6)
    try:
        gw.generate(Request("d1", "summarise", Sens.INTERNAL, frozenset({"text"}), budget_ms=1500, allow_fallback=False))
    except TimeoutError as e:
        print("raised:", e, "| primary calls", b.calls, "| virtual time", f"{clock.ms:.0f} ms", "| budget 1500 ms")
    print("with a 1500 ms budget and 800 ms per attempt the gateway made one attempt, saw that waiting and trying again could not finish inside the budget, and stopped instead of spending time on a doomed retry; a budget has to cover every attempt together and not each one separately")

    section("7. Genuinely running: a tool call that may already have happened")
    for label, idem in (("no idempotency key", False), ("same key on both providers", True)):
        clock, b, a, eff, gw = make(script_b=[Err.TIMEOUT_AFTER_EFFECT])
        gw.generate(Request("pay-1", "refund", Sens.INTERNAL, frozenset({"text"}), side_effect="refund-order-77"), idempotent=idem)
        print(f"{label:28} side effects executed: {eff.count}")
    print("the primary carried out the refund and then the connection timed out, so the gateway could not tell and tried the secondary; without a key the refund ran twice and with one key shared across providers it ran once, which is why model calls and external side effects have to be separated and the effect made idempotent")

    section("8. Genuinely computing: the cost of one request")
    for cfg in (BEDROCK, AZURE):
        print(f"{cfg.name:8} 1200 input and 300 output tokens at {cfg.p_in} and {cfg.p_out} per million: {cost(cfg, 1200, 300):.6f}")
    print("the cost is input tokens over a million times the input price plus output tokens over a million times the output price, and it comes to 0.0081 for the first provider and 0.006 for the second with these invented prices; real bills add charges for caching, batch, images and reserved capacity")


if __name__ == "__main__":
    main()
