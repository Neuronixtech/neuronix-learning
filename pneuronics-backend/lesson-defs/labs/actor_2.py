"""Teaching implementation (our own): Actor model Part 2 - fault isolation, dead letters, retries, per-actor concurrency."""
import threading
import time
from queue import Queue

from actor_1 import Actor, Message


class Runtime:
    def __init__(self, notify_sender=False, max_attempts=1, max_messages=1000):
        self.actors, self.queue = {}, Queue()
        self.failures, self.dead_letters, self.trace = [], [], []
        self.notify_sender, self.max_attempts, self.max_messages = notify_sender, max_attempts, max_messages
        self.attempts = {}
        self.delivered = 0

    def log(self, text):
        self.trace.append(text)
        print(text)

    def register(self, actor):
        if actor.actor_id in self.actors:
            raise ValueError(f"actor already registered: {actor.actor_id}")
        self.actors[actor.actor_id] = actor

    def send(self, message):
        self.log(f"[send] {message.sender} -> {message.recipient} topic={message.topic}")
        self.queue.put(message)

    def deliver(self, message):
        actor = self.actors.get(message.recipient)
        if actor is None:
            self.dead_letters.append(message)
            self.log(f"[dead-letter] recipient={message.recipient} topic={message.topic}")
            return
        try:
            actor.receive(message, self)
        except Exception as exc:
            self.failures.append({"actor": actor.actor_id, "topic": message.topic, "error": str(exc)})
            self.log(f"[failure] actor={actor.actor_id} topic={message.topic} error={exc}")
            key = id(message)
            self.attempts[key] = self.attempts.get(key, 0) + 1
            if self.attempts[key] < self.max_attempts:
                self.log(f"[retry] attempt {self.attempts[key] + 1} of {self.max_attempts}")
                self.queue.put(message)
            elif self.notify_sender and message.sender in self.actors:
                self.queue.put(Message("runtime", message.sender, "actor_failed", {"actor": actor.actor_id, "topic": message.topic, "error": str(exc)}))

    def run(self):
        while not self.queue.empty():
            self.delivered += 1
            if self.delivered > self.max_messages:
                raise RuntimeError("message budget exhausted")
            message = self.queue.get()
            self.log(f"[deliver] {message.recipient} <- {message.sender} topic={message.topic}")
            self.deliver(message)


class Echo(Actor):
    def receive(self, message, runtime):
        print(f"{self.actor_id} received: {message.body}")


class Broken(Actor):
    def receive(self, message, runtime):
        raise RuntimeError("simulated actor crash")


class Reviewer(Actor):
    def __init__(self, actor_id):
        super().__init__(actor_id)
        self.status = "IDLE"
        self.verdict = None

    def receive(self, message, runtime):
        if message.topic == "review_request":
            self.status = "WAITING_FOR_CHECKLIST"
            runtime.send(Message(self.actor_id, "checklist", "checklist_request", message.body))
        elif message.topic == "checklist_result":
            self.status = "COMPLETE"
            self.verdict = "APPROVED"
        elif message.topic == "actor_failed":
            self.status = "FAILED"
            self.verdict = f"UNKNOWN ({message.body['actor']} failed)"


class Checklist(Actor):
    def __init__(self, actor_id):
        super().__init__(actor_id)
        self.check_count = 0

    def receive(self, message, runtime):
        self.check_count += 1
        if message.body.get("simulate_failure"):
            raise RuntimeError("simulated checklist failure")
        runtime.send(Message(self.actor_id, "reviewer", "checklist_result", {"findings": []}))


class Sleeper(Actor):
    def __init__(self, actor_id, seconds):
        super().__init__(actor_id)
        self.seconds, self.handled = seconds, []

    def receive(self, message, runtime):
        time.sleep(self.seconds)
        self.handled.append(message.body)


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. A crashing actor does not stop the runtime")
    rt = Runtime()
    rt.register(Broken("broken"))
    rt.register(Echo("echo"))
    rt.send(Message("main", "broken", "test", None))
    rt.send(Message("main", "echo", "say", "Still alive!"))
    rt.run()
    print("failures:", rt.failures)

    section("2. Dead letters are kept, not lost")
    rt2 = Runtime()
    rt2.send(Message("main", "missing-agent", "ping", None))
    rt2.run()
    print("dead letters stored:", len(rt2.dead_letters))

    section("3. Genuinely checking: isolation is not recovery")
    rt3 = Runtime()
    reviewer, checklist = Reviewer("reviewer"), Checklist("checklist")
    rt3.register(reviewer)
    rt3.register(checklist)
    rt3.send(Message("main", "reviewer", "review_request", {"simulate_failure": True}))
    rt3.run()
    print("reviewer.status after the checklist crashed:", reviewer.status, "| verdict:", reviewer.verdict)
    print("the runtime survived, and the workflow is stuck waiting for a result that will never arrive")

    section("4. A failure notification lets the sender react")
    rt4 = Runtime(notify_sender=True)
    reviewer4, checklist4 = Reviewer("reviewer"), Checklist("checklist")
    rt4.register(reviewer4)
    rt4.register(checklist4)
    rt4.send(Message("main", "reviewer", "review_request", {"simulate_failure": True}))
    rt4.run()
    print("reviewer.status:", reviewer4.status, "| verdict:", reviewer4.verdict)

    section("5. Genuinely checking: retries and duplicate processing")
    rt5 = Runtime(max_attempts=3)
    flaky_calls = []
    class Flaky(Actor):
        def receive(self, message, runtime):
            flaky_calls.append(1)
            if len(flaky_calls) < 3:
                raise RuntimeError("transient")
            print("flaky succeeded on call", len(flaky_calls))
    rt5.register(Flaky("flaky"))
    rt5.send(Message("main", "flaky", "t", None))
    rt5.run()
    class Charger(Actor):
        def __init__(self, actor_id, idempotent):
            super().__init__(actor_id)
            self.charges, self.seen, self.idempotent = 0, set(), idempotent
        def receive(self, message, runtime):
            if self.idempotent and message.body["id"] in self.seen:
                return
            self.seen.add(message.body["id"])
            self.charges += 1
    for idem in (False, True):
        rt6 = Runtime()
        ch = Charger("charge", idem)
        rt6.register(ch)
        dup = Message("main", "charge", "charge", {"id": "op-1"})
        rt6.queue.put(dup)
        rt6.queue.put(dup)
        rt6.run()
        print(f"same message delivered twice, idempotent={idem}: charges applied = {ch.charges}")

    section("6. Genuinely checking: what 'except Exception' does not catch")
    rt7 = Runtime()
    class Quitter(Actor):
        def receive(self, message, runtime):
            raise SystemExit("actor called exit")
    rt7.register(Quitter("q"))
    rt7.register(Echo("echo"))
    rt7.send(Message("main", "q", "t", None))
    rt7.send(Message("main", "echo", "say", "never printed"))
    try:
        rt7.run()
    except SystemExit as e:
        print("SystemExit escaped the runtime:", e, "| messages still queued:", rt7.queue.qsize())

    section("7. Genuinely measuring: independent actors overlap, one actor serialises")
    a, b = Sleeper("a", 0.2), Sleeper("b", 0.2)
    t0 = time.perf_counter()
    for actor in (a, b):
        for i in range(3):
            actor.receive(Message("main", actor.actor_id, "t", i), None)
    sequential = time.perf_counter() - t0
    a, b = Sleeper("a", 0.2), Sleeper("b", 0.2)
    def mailbox_loop(actor, box):
        while True:
            m = box.get()
            if m is None:
                return
            actor.receive(m, None)
    boxes = {"a": Queue(), "b": Queue()}
    threads = [threading.Thread(target=mailbox_loop, args=(actor, boxes[actor.actor_id])) for actor in (a, b)]
    t0 = time.perf_counter()
    for t in threads:
        t.start()
    for actor in (a, b):
        for i in range(3):
            boxes[actor.actor_id].put(Message("main", actor.actor_id, "t", i))
        boxes[actor.actor_id].put(None)
    for t in threads:
        t.join()
    concurrent = time.perf_counter() - t0
    print(f"6 handler calls of 0.2 s: one thread {sequential:.2f}s | one thread per actor mailbox {concurrent:.2f}s")
    print("each actor still handled its own messages in order:", a.handled, b.handled)


if __name__ == "__main__":
    main()
