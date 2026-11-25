"""Teaching implementation (our own): Parallel / swarm / networked architectures, Part 3 - an in-process event bus, message envelopes, content-based routing, a message-driven pipeline, delivery guarantees, dead letters and message validation.
The original code/main.py was not supplied and the lesson's runnable code was only partly pasted. Everything runs in one process in one thread with scripted handlers; it models the shape of Matrix, NATS, Kafka or SQS style systems and is not any of them."""
import itertools
import json
from collections import defaultdict, deque
from dataclasses import dataclass, field

_ids = itertools.count(1)


@dataclass
class Msg:
    topic: str
    payload: dict
    correlation_id: str
    causation_id: str = ""
    msg_id: str = field(default_factory=lambda: f"m{next(_ids)}")
    deliveries: int = 0


class Bus:
    def __init__(self):
        self.queues = defaultdict(deque)
        self.log = []
        self.dead = []

    def publish(self, m):
        self.queues[m.topic].append(m)
        self.log.append((m.msg_id, m.topic, m.correlation_id, m.causation_id))

    def take(self, topic):
        if self.queues[topic]:
            m = self.queues[topic].popleft()
            m.deliveries += 1
            return m
        return None


def route(payload):
    t = payload.get("type", "")
    if t == "invoice":
        return "documents.invoice"
    if t == "contract":
        return "documents.contract"
    if payload.get("size", 0) > 1000:
        return "documents.large"
    return "documents.unknown"


def run_pipeline(bus, docs):
    handlers = {
        "documents.invoice": lambda m: ("extract.done", {"fields": ["total", "date"], "doc": m.payload["doc"]}),
        "documents.contract": lambda m: ("extract.done", {"fields": ["parties"], "doc": m.payload["doc"]}),
        "extract.done": lambda m: ("validate.done", {"ok": bool(m.payload["fields"]), "doc": m.payload["doc"]}),
        "validate.done": lambda m: ("store.done", {"stored": m.payload["doc"]}),
    }
    for i, d in enumerate(docs):
        bus.publish(Msg(route(d), d, f"corr-{i}"))
    progress = True
    while progress:
        progress = False
        for topic, h in handlers.items():
            m = bus.take(topic)
            if m:
                progress = True
                nt, pl = h(m)
                bus.publish(Msg(nt, pl, m.correlation_id, m.msg_id))
    return {t: len(q) for t, q in bus.queues.items() if q}


def chain(bus, corr):
    return [(mid, topic) for mid, topic, c, _ in bus.log if c == corr]


def consume_at_least_once(bus, topic, handler, max_deliveries=3, mode="none"):
    seen, effects = set(), []
    while True:
        m = bus.take(topic)
        if m is None:
            return effects, seen
        if mode != "none" and m.msg_id in seen:
            continue
        try:
            if mode == "with_effect":
                seen.add(m.msg_id)
            handler(m, effects)
            if mode == "after":
                seen.add(m.msg_id)
        except RuntimeError:
            if m.deliveries >= max_deliveries:
                bus.dead.append(m)
            else:
                bus.queues[topic].append(m)


def validate(m, allowed_topics):
    errors = []
    for k in ("topic", "payload", "correlation_id"):
        if not getattr(m, k):
            errors.append(f"missing {k}")
    if m.topic not in allowed_topics:
        errors.append(f"topic {m.topic} not permitted")
    return errors


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Genuinely running: content-based routing")
    for d in ({"type": "invoice", "doc": "d1"}, {"type": "contract", "doc": "d2"}, {"doc": "d3", "size": 5000}, {"doc": "d4"}):
        print(d, "->", route(d))
    print("the router sends each message to a topic chosen from its content and sends anything it does not recognise to documents.unknown instead of dropping it; a rule that matches on a type field is only as good as the sender's honesty, so unexpected content needs a destination you actually watch.")

    section("2. Genuinely running: a message-driven pipeline with no supervisor")
    bus = Bus()
    left = run_pipeline(bus, [{"type": "invoice", "doc": "d1"}, {"type": "contract", "doc": "d2"}, {"doc": "d3", "size": 5000}])
    print("stored:", [m.payload["stored"] for m in bus.queues["store.done"]], "| messages left on unprocessed topics:", left)
    print("the invoice and the contract each pass through extract, validate and store through topics alone, with no component that decides the order, while the large untyped document sits unread on documents.large because nothing subscribes to it and the two store.done messages are the finished results; decentralised flow makes a missing subscriber silent, so a queue depth alarm is the only thing that reveals it.")

    section("3. Genuinely running: correlation and causation identifiers")
    for mid, topic in chain(bus, "corr-0"):
        print(mid, topic)
    causes = [(mid, c) for mid, _, corr, c in bus.log if corr == "corr-0"]
    print("causation links (message <- caused by):", causes)
    print("all four messages of the first document share the correlation id corr-0 and each points at the message that caused it, so the full path of one document can be rebuilt from the log; the ids are assigned by the code in the lab and a real system must make sure that every hop copies them forward.")

    section("4. Genuinely running: at-least-once delivery without and with idempotency")
    flaky = {"n": 0}

    def handler(m, effects):
        effects.append(f"charged {m.payload['order']}")
        flaky["n"] += 1
        if flaky["n"] == 1:
            raise RuntimeError("crashed after the side effect")
    for mode in ("none", "after", "with_effect"):
        b = Bus(); flaky["n"] = 0
        b.publish(Msg("pay", {"order": "o1"}, "c1"))
        eff, seen = consume_at_least_once(b, "pay", handler, mode=mode)
        print(f"dedupe recorded {mode:<11}: effects={eff}")
    print("a worker that charges and crashes before acknowledging gets the same message again, so with no dedupe the effect is applied twice, and recording the id only after the handler succeeds still applies it twice because the crash happens before that line, while recording the id together with the effect applies it once; recording it before the effect could instead lose the effect if the crash came earlier, which is why a real system stores the key and the effect in one atomic step.")

    section("5. Genuinely running: a dead-letter queue")
    b = Bus()
    b.publish(Msg("pay", {"order": "poison"}, "c9"))

    def always_fail(m, effects):
        raise RuntimeError("cannot process")
    consume_at_least_once(b, "pay", always_fail, max_deliveries=3)
    print("dead letters:", [(m.msg_id, m.deliveries) for m in b.dead], "| pay queue length:", len(b.queues["pay"]))
    print("a message that fails on every delivery is moved aside after three deliveries instead of being redelivered forever, and the pay queue ends empty; a dead-letter queue stores the failure for a person or a repair job to look at and needs an alert, otherwise it is a quiet place to lose work.")

    section("6. Genuinely running: validating messages before trusting them")
    allowed = {"documents.invoice", "documents.contract"}
    good = Msg("documents.invoice", {"doc": "d1"}, "c1")
    bad = Msg("admin.shutdown", {}, "")
    print("good:", validate(good, allowed))
    print("bad :", validate(bad, allowed))
    print("a message missing its payload and correlation id and addressed to a topic that is not on the allow-list is rejected with all three reasons, while the well-formed one passes; this checks shape and a topic list only, and says nothing about whether the sender is who it claims to be, which needs authentication outside this lab.")


if __name__ == "__main__":
    main()
