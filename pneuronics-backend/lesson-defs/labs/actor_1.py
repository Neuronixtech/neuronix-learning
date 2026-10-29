"""Teaching implementation (our own): Actor model Part 1 - messages, actors, a queue-based runtime."""
from abc import ABC, abstractmethod
from dataclasses import FrozenInstanceError, dataclass
from queue import Queue
from typing import Any


@dataclass(frozen=True)
class Message:
    sender: str
    recipient: str
    topic: str
    body: Any


class Actor(ABC):
    def __init__(self, actor_id: str):
        self.actor_id = actor_id

    @abstractmethod
    def receive(self, message: Message, runtime: "Runtime") -> None:
        raise NotImplementedError


class Runtime:
    def __init__(self, max_messages=1000):
        self.actors: dict = {}
        self.queue: Queue = Queue()
        self.max_messages = max_messages
        self.delivered = 0

    def register(self, actor: Actor) -> None:
        if actor.actor_id in self.actors:
            raise ValueError(f"actor already registered: {actor.actor_id}")
        self.actors[actor.actor_id] = actor

    def send(self, message: Message) -> None:
        self.queue.put(message)

    def run(self) -> None:
        while not self.queue.empty():
            if self.delivered >= self.max_messages:
                raise RuntimeError(f"message budget of {self.max_messages} exhausted, {self.queue.qsize()} still queued")
            message = self.queue.get()
            self.delivered += 1
            actor = self.actors.get(message.recipient)
            if actor is None:
                continue
            actor.receive(message, self)


class EchoActor(Actor):
    def receive(self, message, runtime):
        print(f"{self.actor_id} received: {message.body}")


class CounterActor(Actor):
    def __init__(self, actor_id):
        super().__init__(actor_id)
        self.count = 0

    def receive(self, message, runtime):
        if message.topic == "increment":
            self.count += 1
            print(f"{self.actor_id}: {self.count}")


class PingPong(Actor):
    def receive(self, message, runtime):
        other = "pong" if self.actor_id == "ping" else "ping"
        runtime.send(Message(self.actor_id, other, "ball", message.body))


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Sending is not handling")
    rt = Runtime()
    counter = CounterActor("counter")
    rt.register(counter)
    for _ in range(3):
        rt.send(Message("main", "counter", "increment", None))
    print("after three sends, before run(): count =", counter.count, "| queued:", rt.queue.qsize())
    rt.run()
    print("after run(): count =", counter.count)

    section("2. The message envelope: routing metadata plus a body")
    rt2 = Runtime()
    rt2.register(EchoActor("echo"))
    rt2.send(Message("main", "echo", "say", "Hello actor!"))
    rt2.run()

    section("3. Registry rules")
    try:
        rt2.register(EchoActor("echo"))
    except ValueError as e:
        print("duplicate id ->", e)
    rt2.send(Message("main", "nobody", "say", "anyone there?"))
    rt2.run()
    print("a message to an unknown recipient was silently dropped by this first runtime; Part 2 fixes that")

    section("4. Genuinely checking: frozen protects the fields, not what they point to")
    m = Message("main", "echo", "say", {"items": ["a"]})
    try:
        m.topic = "other"
    except FrozenInstanceError as e:
        print("assigning m.topic ->", type(e).__name__)
    seen = []
    class Recorder(Actor):
        def receive(self, message, runtime):
            seen.append(list(message.body["items"]))
    rt3 = Runtime()
    rt3.register(Recorder("rec"))
    shared = {"items": ["a"]}
    rt3.send(Message("main", "rec", "t", shared))
    shared["items"].append("INJECTED AFTER SEND")
    rt3.run()
    print("recipient saw:", seen[0], "| the sender changed the body after sending")
    print("use tuples or copy.deepcopy(body) when sending, or immutable payload dataclasses")

    section("5. Genuinely checking: two actors can keep a run alive forever")
    rt4 = Runtime(max_messages=50)
    rt4.register(PingPong("ping"))
    rt4.register(PingPong("pong"))
    rt4.send(Message("main", "ping", "ball", 0))
    try:
        rt4.run()
    except RuntimeError as e:
        print("RuntimeError:", e)
    print("an event loop needs a message budget or a termination rule, like any agent loop")

    section("6. Ordering: one FIFO queue")
    rt5 = Runtime()
    log = []
    class Logger(Actor):
        def receive(self, message, runtime):
            log.append(message.body)
    rt5.register(Logger("log"))
    for i in range(5):
        rt5.send(Message("main", "log", "t", i))
    rt5.run()
    print("delivery order:", log)
    print("a real distributed transport weakens this: retries, partitions and parallel workers all reorder")


if __name__ == "__main__":
    main()
