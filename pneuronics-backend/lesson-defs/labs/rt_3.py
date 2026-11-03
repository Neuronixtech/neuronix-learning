"""Teaching implementation (our own): production runtime shapes, Part 3 - a scheduled (cron) runtime on a simulated clock with overlap and misfire policies, schedule
lag, deterministic execution keys, cron feeding a queue, correlation ids across stages, and a runtime-selection function. No real time passes and no model is used."""
from dataclasses import dataclass, field


@dataclass
class Schedule:
    schedule_id: str
    interval: int          # simulated seconds
    duration: int          # how long one run takes, simulated seconds
    overlap: str = "skip"  # allow | skip | queue
    misfire: str = "run_once"  # skip | run_once | run_all
    next_run: int = 0
    running_until: int = -1
    queued: int = 0
    runs: list = field(default_factory=list)  # (scheduled, started, key)
    skipped: int = 0


def simulate(sc, end, down=None, done_keys=None):
    """Tick once per simulated second. `down` is a (start, end) window during which the scheduler process is not running."""
    done_keys = set() if done_keys is None else done_keys
    t = 0
    while t <= end:
        if down and down[0] <= t < down[1]:
            t += 1
            continue
        if t >= sc.next_run:
            missed = (t - sc.next_run) // sc.interval
            due = [sc.next_run + k * sc.interval for k in range(missed + 1)]
            if missed > 0:
                if sc.misfire == "skip":
                    due = []
                elif sc.misfire == "run_once":
                    due = [due[-1]]
            sc.next_run = sc.next_run + (missed + 1) * sc.interval
            for scheduled in due:
                key = f"{sc.schedule_id}:{scheduled}"
                if key in done_keys:
                    continue
                if t < sc.running_until and sc.overlap == "skip":
                    sc.skipped += 1
                    continue
                if t < sc.running_until and sc.overlap == "queue":
                    sc.queued += 1
                    continue
                sc.runs.append((scheduled, t, key))
                done_keys.add(key)
                sc.running_until = t + sc.duration
        if sc.queued and t >= sc.running_until:
            sc.queued -= 1
            scheduled = t
            key = f"{sc.schedule_id}:queued@{t}"
            sc.runs.append((scheduled, t, key))
            sc.running_until = t + sc.duration
        t += 1
    return sc


def choose_runtime(wait, progress, restart_ok, trigger, long_work):
    """A simple decision heuristic for the six runtime shapes."""
    shapes = []
    if trigger == "time":
        shapes.append("cron")
    elif trigger == "event":
        shapes.append("event")
    if wait:
        shapes.append("streaming" if progress else "request-response")
    elif long_work or trigger in ("event", "time"):
        shapes.append("queue")
    if not restart_ok:
        shapes.append("durable")
    return shapes


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Genuinely measuring: overlap policy when a run (8 s) is longer than the interval (5 s), 30 simulated seconds")
    for pol in ("allow", "skip", "queue"):
        sc = simulate(Schedule("report", 5, 8, overlap=pol), 29)
        print(f"overlap={pol:5} started {len(sc.runs)} runs, skipped {sc.skipped}, left queued {sc.queued}, start times {[r[1] for r in sc.runs]}")
    print("allow starts a second run while the first is still running, skip drops the occurrence, queue defers it until the first finishes; none of them is right for every job, and for jobs that write shared state 'allow' risks the double writes described in the lesson")

    section("2. Genuinely measuring: misfire after the scheduler was down (every 60 s, down from t=100 to t=700 = 600 s, overlap allowed)")
    for mf in ("skip", "run_once", "run_all"):
        sc = simulate(Schedule("tick", 60, 1, overlap="allow", misfire=mf), 760, down=(100, 700))
        late = [r[1] - r[0] for r in sc.runs if r[1] - r[0] > 0]
        burst = sum(1 for r in sc.runs if r[1] == 700)
        print(f"misfire={mf:8} total runs {len(sc.runs):2}, runs started late: {len(late):2}, largest schedule lag {max(late) if late else 0:3} s, runs started at t=700: {burst}")
    sc2 = simulate(Schedule("tick", 60, 1, overlap="skip", misfire="run_all"), 760, down=(100, 700))
    print(f"with overlap=skip and misfire=run_all the same outage produced {len(sc2.runs)} runs and {sc2.skipped} skipped occurrences: the overlap policy silently collapsed the catch-up burst")
    print("run_all replayed every missed occurrence in one second after the restart (a load spike), run_once ran only the latest, skip dropped them all; the lesson's example of 8 hours down at one run a minute is 480 missed runs, and the interaction between the misfire and overlap policies changes what actually happens")

    section("3. Genuinely checking: a deterministic execution key suppresses a duplicate fire after a restart")
    done = set()
    s1 = simulate(Schedule("daily", 100, 1), 250, done_keys=done)
    first = len(s1.runs)
    s2 = simulate(Schedule("daily", 100, 1), 250, done_keys=done)  # a restarted scheduler re-fires the same occurrences
    print(f"first scheduler process ran {first} occurrences; a restarted process with the recorded keys ran {len(s2.runs)} more")
    s3 = simulate(Schedule("daily", 100, 1), 250, done_keys=set())
    print(f"without the recorded keys the restarted process ran {len(s3.runs)} occurrences again (duplicates)")
    print("schedule id plus scheduled time identifies one occurrence, so a record of finished keys makes a re-fire harmless; the key store must survive the restart for this to work")

    section("4. Genuinely measuring: cron as a queue producer versus running the work inline")
    work_units, per_unit = 200, 1
    inline = work_units * per_unit
    queued_producer = 1
    print(f"inline: the scheduler thread is busy for {inline} simulated seconds and one crash loses track of which of {work_units} reports finished")
    print(f"as a producer: the scheduler is busy for about {queued_producer} second to enqueue {work_units} jobs; workers retry or dead-letter each job separately")
    print("the figures are simple arithmetic on an assumed 200 one-second reports; the point is the separation of when work starts from how it is executed")

    section("5. Genuinely checking: correlation ids connect cron, queue, worker and agent steps")
    trace_id = "trace:nightly:2026-10-05T02:00"
    events = [("cron", "trigger", {"schedule_lag_s": 4}), ("queue", "submit", {"depth": 14}), ("worker", "start", {"wait_s": 6}), ("agent", "step", {"n": 1}), ("agent", "step", {"n": 2}), ("worker", "complete", {})]
    for comp, action, extra in events:
        print(f"trace={trace_id} component={comp:6} action={action:9} {extra}")
    print(f"{len(events)} records share one trace id; filtering on it reconstructs the path and separates a late scheduler (schedule_lag_s=4) from a slow agent")

    section("6. Genuinely checking: the runtime-selection heuristic on six requirements")
    cases = [("chat answer in 3 s", dict(wait=True, progress=False, restart_ok=True, trigger="user", long_work=False)), ("chat with live typing", dict(wait=True, progress=True, restart_ok=True, trigger="user", long_work=False)),
             ("30-minute research", dict(wait=False, progress=False, restart_ok=False, trigger="user", long_work=True)), ("PR opened review", dict(wait=False, progress=False, restart_ok=False, trigger="event", long_work=True)),
             ("nightly evaluation", dict(wait=False, progress=False, restart_ok=False, trigger="time", long_work=True)), ("hourly memory tidy", dict(wait=False, progress=False, restart_ok=True, trigger="time", long_work=False))]
    for name, kw in cases:
        print(f"{name:24} -> {choose_runtime(**kw)}")
    print("the heuristic returns composable shapes (for example event + queue + durable), which mirrors the lesson's composition matrix; it is a design aid we wrote, not a rule, and real choices also weigh cost and team experience")


if __name__ == "__main__":
    main()
