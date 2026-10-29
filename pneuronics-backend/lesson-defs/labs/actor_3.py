"""Teaching implementation (our own): Actor model Part 3 - typed payloads, the full reviewer/checklist system, correlation ids."""
from dataclasses import dataclass
from queue import Queue
from typing import Optional

from actor_1 import Actor, Message


@dataclass(frozen=True)
class ReviewRequest:
    code: str
    simulate_failure: bool = False
    review_id: str = "r-1"


@dataclass(frozen=True)
class ChecklistRequest:
    code: str
    reviewer_findings: tuple
    simulate_failure: bool = False
    review_id: str = "r-1"


@dataclass(frozen=True)
class ChecklistResult:
    findings: tuple
    passed: bool
    review_id: str = "r-1"


@dataclass(frozen=True)
class FinalVerdict:
    verdict: str
    findings: tuple


class Runtime:
    def __init__(self):
        self.actors, self.queue = {}, Queue()
        self.failures, self.dead_letters, self.trace = [], [], []

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

    def run(self):
        while not self.queue.empty():
            message = self.queue.get()
            self.log(f"[deliver] {message.recipient} <- {message.sender} topic={message.topic}")
            self.deliver(message)


class ReviewerAgent(Actor):
    """Deliberately single-slot: it remembers one review at a time (the weakness Part 3 exposes)."""

    def __init__(self, actor_id):
        super().__init__(actor_id)
        self.review_count = 0
        self.status = "IDLE"
        self.current_code = ""
        self.reviewer_findings = ()
        self.final_verdict: Optional[FinalVerdict] = None

    def receive(self, message, runtime):
        if message.topic == "review_request":
            self._on_review(message, runtime)
        elif message.topic == "checklist_result":
            self._on_result(message, runtime)

    def _on_review(self, message, runtime):
        body = message.body
        if not isinstance(body, ReviewRequest):
            raise TypeError("review_request requires ReviewRequest")
        self.review_count += 1
        self.status = "REVIEWING"
        self.current_code = body.code
        findings = []
        if "eval(" in body.code:
            findings.append("avoid eval()")
        if "except:" in body.code:
            findings.append("avoid bare except")
        self.reviewer_findings = tuple(findings)
        runtime.log(f"[reviewer] review={self.review_count} findings={list(self.reviewer_findings)}")
        self.status = "WAITING_FOR_CHECKLIST"
        runtime.send(Message(self.actor_id, "checklist", "checklist_request",
                             ChecklistRequest(body.code, self.reviewer_findings, body.simulate_failure, body.review_id)))

    def _on_result(self, message, runtime):
        body = message.body
        if not isinstance(body, ChecklistResult):
            raise TypeError("checklist_result requires ChecklistResult")
        all_findings = self.reviewer_findings + body.findings
        verdict = "APPROVED" if (not all_findings and body.passed) else "CHANGES_REQUESTED"
        self.final_verdict = FinalVerdict(verdict, all_findings)
        self.status = "COMPLETE"
        runtime.log(f"[reviewer] consensus={verdict} review_id={body.review_id} combined_findings={list(all_findings)}")


class ChecklistAgent(Actor):
    def __init__(self, actor_id):
        super().__init__(actor_id)
        self.check_count = 0
        self.status = "IDLE"
        self.last_findings = ()

    def receive(self, message, runtime):
        if message.topic != "checklist_request":
            return
        body = message.body
        if not isinstance(body, ChecklistRequest):
            raise TypeError("checklist_request requires ChecklistRequest")
        self.check_count += 1
        self.status = "CHECKING"
        runtime.log(f"[checklist] check={self.check_count}")
        if body.simulate_failure:
            self.status = "FAILED"
            raise RuntimeError("simulated checklist failure")
        findings = []
        if "def " not in body.code:
            findings.append("no function definition found")
        if "return " not in body.code:
            findings.append("no explicit return found")
        if len(body.code.strip()) < 20:
            findings.append("implementation is unusually short")
        self.last_findings = tuple(findings)
        self.status = "COMPLETE"
        runtime.send(Message(self.actor_id, "reviewer", "checklist_result",
                             ChecklistResult(self.last_findings, not findings, body.review_id)))


class KeyedReviewer(ReviewerAgent):
    """Fix: per-review state keyed by review_id, so reviews can be in flight together."""

    def __init__(self, actor_id):
        super().__init__(actor_id)
        self.pending = {}
        self.verdicts = {}

    def _on_review(self, message, runtime):
        body = message.body
        findings = tuple(f for cond, f in (("eval(" in body.code, "avoid eval()"), ("except:" in body.code, "avoid bare except")) if cond)
        self.pending[body.review_id] = findings
        runtime.send(Message(self.actor_id, "checklist", "checklist_request", ChecklistRequest(body.code, findings, body.simulate_failure, body.review_id)))

    def _on_result(self, message, runtime):
        body = message.body
        all_findings = self.pending.pop(body.review_id) + body.findings
        self.verdicts[body.review_id] = ("APPROVED" if (not all_findings and body.passed) else "CHANGES_REQUESTED", all_findings)


HEALTHY = "def add(a, b):\n    return a + b"
EVAL_ONLY = "def f(x):\n    return eval(x)"
PROBLEM = "def run(user_input):\n    try:\n        eval(user_input)\n    except:\n        print('failed')"


def submit(rt, code, **kw):
    rt.send(Message("main", "reviewer", "review_request", ReviewRequest(code, **kw)))
    rt.run()


def section(t):
    print(f"\n--- {t} ---")


def main():
    rt = Runtime()
    reviewer, checklist = ReviewerAgent("reviewer"), ChecklistAgent("checklist")
    rt.register(reviewer)
    rt.register(checklist)

    section("CASE 1: healthy code")
    submit(rt, HEALTHY)
    section("CASE 2: problematic code")
    submit(rt, PROBLEM, review_id="r-2")
    section("CASE 3: simulated actor failure")
    submit(rt, HEALTHY, simulate_failure=True, review_id="r-3")
    section("CASE 4: runtime still alive")
    submit(rt, HEALTHY, review_id="r-4")
    section("CASE 5: dead letter")
    rt.send(Message("main", "missing-agent", "ping", None))
    rt.run()

    section("Final state")
    print(f"reviewer.review_count={reviewer.review_count} checklist.check_count={checklist.check_count}")
    print(f"reviewer.status={reviewer.status} final_verdict={reviewer.final_verdict.verdict}")
    print(f"runtime.failures={len(rt.failures)} runtime.dead_letters={len(rt.dead_letters)}")

    section("Genuinely checking: typed payloads reject a malformed message")
    rt_bad = Runtime()
    rt_bad.register(ReviewerAgent("reviewer"))
    rt_bad.send(Message("main", "reviewer", "review_request", {"code": "x"}))
    rt_bad.run()
    print("failure recorded:", rt_bad.failures)

    section("Genuinely checking: two reviews in flight share one state slot")
    rt_a = Runtime()
    shared = ReviewerAgent("reviewer")
    rt_a.register(shared)
    rt_a.register(ChecklistAgent("checklist"))
    rt_a.send(Message("main", "reviewer", "review_request", ReviewRequest(EVAL_ONLY, review_id="A-eval-only")))
    rt_a.send(Message("main", "reviewer", "review_request", ReviewRequest(HEALTHY, review_id="B-healthy")))
    rt_a.run()
    print("A is code the reviewer alone can flag (eval with a return); its correct verdict is CHANGES_REQUESTED")

    section("The fix: state keyed by review_id")
    rt_b = Runtime()
    keyed = KeyedReviewer("reviewer")
    rt_b.register(keyed)
    rt_b.register(ChecklistAgent("checklist"))
    rt_b.send(Message("main", "reviewer", "review_request", ReviewRequest(EVAL_ONLY, review_id="A-eval-only")))
    rt_b.send(Message("main", "reviewer", "review_request", ReviewRequest(HEALTHY, review_id="B-healthy")))
    rt_b.run()
    for rid, (verdict, findings) in sorted(keyed.verdicts.items()):
        print(f"{rid}: {verdict} {list(findings)}")


if __name__ == "__main__":
    main()
