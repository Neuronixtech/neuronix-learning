"""Teaching implementation (our own): Self-Refine Part 1 - generate, feedback, refine with history."""
from dataclasses import dataclass

TASK = "Write exactly 3 short bullet points about Python. Each bullet must be under 60 characters."


@dataclass
class Attempt:
    iteration: int
    output: str
    critique: list[str]


def generate(task: str) -> str:
    """An intentionally imperfect first draft: four bullets where three were requested."""
    return "\n".join([
        "- Python was created by Guido van Rossum.",
        "- Python was first released in 1991.",
        "- Python is widely used for automation.",
        "- Python emphasizes readable code.",
    ])


def bullets_of(output: str) -> list[str]:
    return [line.strip() for line in output.splitlines() if line.strip().startswith("- ")]


def feedback(task: str, output: str) -> list[str]:
    issues: list[str] = []
    bullets = bullets_of(output)
    if len(bullets) != 3:
        issues.append(f"Expected exactly 3 bullets; found {len(bullets)}.")
    for number, bullet in enumerate(bullets, start=1):
        if len(bullet) >= 60:
            issues.append(f"Bullet {number} must be under 60 characters.")
    return issues


def format_history(history: list[Attempt]) -> str:
    if not history:
        return "No previous attempts."
    sections = []
    for attempt in history:
        critique_text = "\n".join(f"- {i}" for i in attempt.critique) if attempt.critique else "- No issues."
        sections.append(f"Iteration {attempt.iteration}\nOutput:\n{attempt.output}\nCritique:\n{critique_text}")
    return "\n\n".join(sections)


def refine(task: str, output: str, critique: list[str], history: list[Attempt]) -> str:
    bullets = bullets_of(output)
    has_count_problem = any("exactly 3 bullets" in issue for issue in critique)
    if has_count_problem and len(bullets) > 3:
        bullets = bullets[:3]
    revised = []
    for bullet in bullets:
        if len(bullet) >= 60:
            bullet = bullet[:56].rstrip() + "..."
        revised.append(bullet)
    return "\n".join(revised)


def self_refine(task: str, max_iterations: int = 4, refiner=refine, quiet=False, generator=generate):
    history: list[Attempt] = []
    output = generator(task)
    for iteration in range(max_iterations):
        critique = feedback(task, output)
        history.append(Attempt(iteration, output, critique.copy()))
        if not quiet:
            print(f"ITERATION {iteration}: bullets={len(bullets_of(output))} critique={critique or 'none'}")
        if not critique:
            if not quiet:
                print("STOP: the feedback stage found no remaining issues.")
            break
        output = refiner(task, output, critique, history)
    else:
        if not quiet:
            print("Maximum refinement iterations reached.")
    return output, history


def shorten(bullet: str) -> str:
    return bullet if len(bullet) < 60 else bullet[:56].rstrip() + "..."


def forgetful_refiner(task, output, critique, history):
    """Constructed to forget: it reacts only to the first issue and rewrites from scratch on a length issue."""
    first = critique[0]
    if "exactly 3 bullets" in first:
        return "\n".join(bullets_of(output)[:3])
    fresh = [shorten(b) for b in bullets_of(output)] + ["- Python has a large standard library."]
    return "\n".join(fresh)          # the rewrite quietly brings back a fourth bullet


def history_refiner(task, output, critique, history):
    """Same repair, but it carries forward every constraint that any earlier critique named."""
    bullets = [shorten(b) for b in bullets_of(output)]
    earlier = [c for a in history for c in a.critique]
    if any("exactly 3 bullets" in c for c in earlier):
        bullets = bullets[:3]
    return "\n".join(bullets)


def messy_generate(task):
    return "\n".join([
        "- Python was created by Guido van Rossum.",
        "- Python is widely used in data science and machine learning.",
        "- Python was first released in 1991.",
        "- Python emphasizes readable code.",
    ])


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. The loop as the lesson builds it")
    print("TASK:", TASK)
    final, history = self_refine(TASK)
    print("FINAL OUTPUT:")
    print(final)

    section("2. History as context for the refiner")
    print(format_history(history))

    section("3. The boundary: under 60 means 59 passes, 60 fails")
    for n in (58, 59, 60, 61):
        line = "- " + "x" * (n - 2)
        print(f"bullet of {len(line)} characters -> {feedback(TASK, chr(10).join([line] * 3)) or 'accepted'}")

    section("4. What the toy refiner does to a long bullet")
    long_output = "\n".join([
        "- Python was created by Guido van Rossum in the Netherlands.",
        "- Python is widely used in data science and machine learning.",
        "- Python emphasizes readable code.",
    ])
    print("critique before:", feedback(TASK, long_output))
    fixed = refine(TASK, long_output, feedback(TASK, long_output), [])
    print(fixed)
    print("critique after :", feedback(TASK, fixed) or "none")
    print("lengths:", [len(b) for b in bullets_of(fixed)], "- the constraint is met, but the text is cut mid-sentence")

    section("5. A stubborn refiner: termination is not success")
    stubborn = lambda task, output, critique, history: output
    final, history = self_refine(TASK, max_iterations=4, refiner=stubborn)
    print("returned output still has", len(bullets_of(final)), "bullets")
    print("the loop returns (output, history) with no success flag; the last critique was:", history[-1].critique)

    section("6. Anti-pattern: regenerate instead of refine")
    for i in range(3):
        print(f"regenerate {i}: bullets={len(bullets_of(generate(TASK)))} (the critique was thrown away)")

    section("7. Cost model (arithmetic on stated assumptions, NOT a measurement)")
    cg, cf, cr = 1.0, 1.0, 1.0
    print("assume generate = feedback = refine = 1 unit")
    for n in (0, 1, 2, 4):
        print(f"n={n} refinement rounds: cost ~ Cg + n*(Cf+Cr) = {cg + n * (cf + cr)} units (+ one feedback to confirm the last output)")
    per_iter = 800 + 200
    print("history growth if each attempt is 800 tokens and each critique 200:",
          [per_iter * k for k in range(1, 5)], "tokens after iterations 1..4")

    section("8. A constructed scenario: what history is for (4 bullets, one too long)")
    for name, refiner in (("forgetful refiner", forgetful_refiner), ("history-aware refiner", history_refiner)):
        print(name + ":")
        final, hist = self_refine(TASK, max_iterations=5, refiner=refiner, quiet=True, generator=messy_generate)
        for a in hist:
            print(f"  iteration {a.iteration}: bullets={len(bullets_of(a.output))} critique={a.critique or 'none'}")
        print("  ended clean:", not hist[-1].critique)
    print("our regular refine() accepts history but never reads it, so only this constructed pair shows what history buys")


if __name__ == "__main__":
    main()
