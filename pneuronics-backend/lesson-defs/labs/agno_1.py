"""Teaching implementation (our own): Agno-shaped Part 1 - disposable Agent, durable SessionStore, ModelRouter, ProductionRuntime."""
import itertools
import statistics
import threading
import time
from dataclasses import dataclass, field
from typing import Any, Callable


class SessionStore:
    def __init__(self):
        self._sessions = {}

    def load(self, session_id):
        return list(self._sessions.get(session_id, []))

    def save(self, session_id, messages):
        self._sessions[session_id] = list(messages)


@dataclass
class Tool:
    name: str
    description: str
    handler: Callable[..., Any]

    def execute(self, **kwargs):
        return self.handler(**kwargs)


FAKE_WEATHER = {"bengaluru": "24°C, cloudy", "mumbai": "30°C, humid", "delhi": "29°C, clear"}


def get_weather(city):
    return FAKE_WEATHER[city.lower()]


weather_tool = Tool("get_weather", "Get weather for a city", get_weather)
CITIES = ("bengaluru", "mumbai", "delhi", "chennai")


class ModelRouter:
    """Simulated model: keyword and city matching. `latency` stands in for a provider round trip."""

    def __init__(self, latency=0.0):
        self.latency = latency

    def generate(self, message, history, tools):
        if self.latency:
            time.sleep(self.latency)
        text = message.lower()
        if "weather" in text:
            city = next((c for c in CITIES if c in text), None)
            if city is None:
                return "Which city?"
            tool = next(t for t in tools if t.name == "get_weather")
            return f"The weather in {city.title()} is {tool.execute(city=city)}."
        return "Hello! I can help with weather."


_agent_ids = itertools.count(1)


@dataclass
class Agent:
    model: ModelRouter
    tools: list = field(default_factory=list)
    agent_id: int = field(default_factory=lambda: next(_agent_ids))

    def run(self, message, history):
        return self.model.generate(message, history, self.tools)


class ProductionRuntime:
    def __init__(self, store, model=None):
        self.store, self.model = store, model or ModelRouter()
        self.last_agent_id, self.last_timing = None, {}

    def create_agent(self):
        return Agent(model=self.model, tools=[weather_tool])

    def handle_request(self, session_id, message):
        t0 = time.perf_counter_ns()
        history = self.store.load(session_id)
        t1 = time.perf_counter_ns()
        agent = self.create_agent()
        t2 = time.perf_counter_ns()
        response = agent.run(message, history)
        t3 = time.perf_counter_ns()
        history.append({"role": "user", "content": message})
        history.append({"role": "assistant", "content": response})
        self.store.save(session_id, history)
        t4 = time.perf_counter_ns()
        self.last_agent_id = agent.agent_id
        self.last_timing = {"load": t1 - t0, "create": t2 - t1, "run": t3 - t2, "save": t4 - t3, "total": t4 - t0}
        return response


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. The lesson's three requests, one session")
    rt = ProductionRuntime(SessionStore())
    for msg in ("Hello", "What is the weather in Bengaluru?", "And the weather in Mumbai?"):
        out = rt.handle_request("user-1", msg)
        print(f"agent #{rt.last_agent_id}: {msg!r:36} -> {out} | stored messages: {len(rt.store.load('user-1'))}")
    print("three requests used three different Agent objects; the conversation lived only in the store")

    section("2. Genuinely measuring: how long does creating a fresh agent take")
    rt = ProductionRuntime(SessionStore())
    creates = []
    for i in range(20_000):
        rt.handle_request("bench", "Hello")
        creates.append(rt.last_timing["create"])
    print(f"agent creation over 20000 requests: median {statistics.median(creates) / 1000:.2f} us, p99 {sorted(creates)[int(0.99 * len(creates))] / 1000:.2f} us")
    for latency in (0.0, 0.05, 0.5):
        r = ProductionRuntime(SessionStore(), ModelRouter(latency))
        r.handle_request("x", "Hello")
        tm = r.last_timing
        print(f"model latency {latency * 1000:>5.0f} ms: creation is {tm['create'] / tm['total']:.4%} of the request ({tm['create'] / 1000:.1f} us of {tm['total'] / 1e6:.2f} ms)")
    print("creation costs about a microsecond because this Agent is a tiny dataclass; it is a large share of a request only when the model call is also nearly free, and negligible beside any real latency")

    section("3. Genuinely checking: history is passed in, but does the model use it")
    rt = ProductionRuntime(SessionStore())
    rt.handle_request("s", "What is the weather in Bengaluru?")
    print("follow-up 'And the weather there tomorrow?' ->", rt.handle_request("s", "And the weather there tomorrow?"))
    print("follow-up 'What about Mumbai?'              ->", rt.handle_request("s", "What about Mumbai?"))
    print("history reached generate() both times, but the keyword model never reads it: injection of state is not use of state")

    section("4. Genuinely checking: inputs the keyword model and the tool do not expect")
    for msg in ("Weather in Chennai?", "weather in Pune", "Is it weather-proof?", "weather in Bengaluru and Mumbai", "WEATHER IN DELHI"):
        rt = ProductionRuntime(SessionStore())
        try:
            print(f"{msg!r:36} -> {rt.handle_request('t', msg)}")
        except Exception as e:
            print(f"{msg!r:36} -> {type(e).__name__}: {e!s:.40} | session saved: {bool(rt.store.load('t'))}")
    print("Chennai is a known city for routing but missing in the weather data, so the tool raised KeyError and nothing was saved; 'weather-proof' triggered the weather path; only the first city was answered")

    section("5. Genuinely checking: a failure mid-request and the session")
    rt = ProductionRuntime(SessionStore())
    rt.handle_request("u", "Hello")
    before = rt.store.load("u")
    try:
        rt.handle_request("u", "Weather in Chennai?")
    except KeyError:
        pass
    print("messages before:", len(before), "| after the failed request:", len(rt.store.load("u")), "| the user's failed message was not recorded")

    section("6. Genuinely measuring: two concurrent requests on one session (real threads)")
    for label, latency in (("fast model", 0.0), ("slow model 50 ms", 0.05)):
        lost = 0
        trials = 40
        for _ in range(trials):
            rt = ProductionRuntime(SessionStore(), ModelRouter(latency))
            ts = [threading.Thread(target=rt.handle_request, args=("c", f"Hello {i}")) for i in range(2)]
            [t.start() for t in ts]; [t.join() for t in ts]
            if len(rt.store.load("c")) < 4:
                lost += 1
        print(f"{label:17}: {lost} of {trials} trials ended with fewer than 4 messages (a turn was overwritten)")
    print("load, run, then save is not atomic: with a slow model both requests loaded the same history and the later save replaced the earlier one; the fast model did not race on this run, which proves nothing about other timings")

    section("7. Genuinely checking: store isolation")
    s = SessionStore()
    s.save("a", [{"role": "user", "content": "hi"}])
    got = s.load("a"); got.append({"role": "user", "content": "mutated"})
    print("after mutating a loaded list, the store still has", len(s.load("a")), "message")
    print("a second runtime with its own store sees:", ProductionRuntime(SessionStore()).store.load("a"))
    print("load/save copy lists so callers cannot corrupt the store, but a store held in process memory is private to that process")


if __name__ == "__main__":
    main()
