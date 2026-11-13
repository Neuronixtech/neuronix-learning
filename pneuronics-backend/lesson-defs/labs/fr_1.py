"""Teaching implementation (our own): turning agent corrections into system improvements, Part 1 - structured correction records, symptom versus root cause, choosing the earliest effective control layer,
normalising differently worded corrections to one canonical cause, stable fingerprints, and recurrence counting without false merges. All records are made up. No language model is used."""
import hashlib
import json
from dataclasses import dataclass, field

LAYERS = ("type_or_schema", "test", "scope_policy", "automation", "instruction_or_example", "human_decision")
CAUSES = {
    "off_scope_edit": ("scope_policy", ("do not edit", "do not modify", "do not change files outside", "only change files related")),
    "missing_field": ("type_or_schema", ("missing a required field", "must always be present", "include the error code", "is missing")),
    "wrong_command": ("automation", ("use the project's existing test command", "wrong command", "do not repeat the setup")),
    "wrong_result": ("test", ("the result is wrong", "wrong calculation", "off by one")),
    "policy_disagreement": ("human_decision", ("which behaviour do we want", "product decision")),
}


@dataclass
class Correction:
    event_id: str
    message: str
    symptom: str
    target: str
    cause: str = ""
    layer: str = ""
    evidence: tuple = field(default_factory=tuple)


def normalize_text(text):
    return " ".join(str(text).lower().replace("’", "'").split()).strip(" .!")


def resolve_cause(message):
    m = normalize_text(message)
    for cause, (layer, phrases) in CAUSES.items():
        if any(p in m for p in phrases):
            return cause, layer
    return "unclassified", "human_decision"


def validate(c):
    for name in ("event_id", "message", "symptom", "target"):
        if not isinstance(getattr(c, name), str) or not getattr(c, name).strip():
            raise ValueError(f"Expected a non-empty {name}")
    return c


def classify(c):
    validate(c)
    c.cause, c.layer = resolve_cause(c.message)
    return c


def fingerprint(cause, target, include_time=None):
    payload = {"cause": cause, "target": target.replace(chr(92), "/").strip("/")}
    if include_time is not None:
        payload["time"] = include_time
    return hashlib.sha256(json.dumps(payload, sort_keys=True).encode()).hexdigest()[:12]


def naive_fingerprint(message):
    return hashlib.sha256(message.encode()).hexdigest()[:12]


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Genuinely running: a symptom is not a cause")
    c = classify(Correction("e1", "Do not edit README.md. Only change files related to registration validation.", "agent edited README.md", "README.md"))
    print("symptom:", c.symptom, "| resolved cause:", c.cause, "| earliest layer:", c.layer)
    print("the correction says what to avoid in one conversation; the cause names the missing control (an executable scope), and the layer says where prevention belongs")

    section("2. Genuinely measuring: differently worded corrections reach the same cause")
    msgs = [("Do not modify README.md.", "README.md"), ("Please do NOT edit   README.md!", "README.md"), ("Don’t touch README.md", "README.md"),
            ("The response is missing a required field: user_id", "api/response.py"), ("The result is wrong; the total is off by one", "app/totals.py"), ("Which behaviour do we want for expired carts?", "app/cart.py")]
    for i, (m, t) in enumerate(msgs):
        k = classify(Correction(f"m{i}", m, "s", t))
        print(f"{m!r:62} -> {k.cause:20} {k.layer:16} {fingerprint(k.cause, k.target)}")
    print("the first two wordings matched a phrase and shared a fingerprint, while the third (\"Don't touch\") matched no phrase and fell to unclassified; a phrase table is only as good as its phrases, and unclassified items go to a human instead of being guessed")

    section("3. Genuinely measuring: what goes into a fingerprint")
    a = fingerprint("off_scope_edit", "README.md")
    print("same cause and target, different message text :", a == fingerprint("off_scope_edit", "README.md"))
    print("backslash path and leading slash               :", a == fingerprint("off_scope_edit", chr(92) + "README.md"))
    print("different target (LICENSE)                     :", a == fingerprint("off_scope_edit", "LICENSE"))
    print("different cause on the same target             :", a == fingerprint("missing_field", "README.md"))
    print("timestamp included (two runs a second apart)   :", fingerprint("off_scope_edit", "README.md", "10:00:01") == fingerprint("off_scope_edit", "README.md", "10:00:02"))
    print("hash of the raw message for two wordings       :", naive_fingerprint("Do not modify README.md.") == naive_fingerprint("Please do NOT edit README.md!"))
    print("the fingerprint covers the cause and the target only; adding a timestamp or hashing the raw wording made equal failures look different, and dropping the target would have merged README.md with LICENSE")

    section("4. Genuinely running: recurrence counting with and without false merges")
    log = [("README.md", "Do not edit README.md"), ("README.md", "Do not modify README.md"), ("LICENSE", "Do not edit LICENSE"), ("api/response.py", "The response is missing a required field"), ("README.md", "Do not change files outside the task")]
    counts, ids = {}, {}
    for i, (t, m) in enumerate(log):
        k = classify(Correction(f"r{i}", m, "s", t))
        fp = fingerprint(k.cause, k.target)
        counts[fp] = counts.get(fp, 0) + 1
        ids[fp] = (k.cause, k.target)
    for fp, n in sorted(counts.items(), key=lambda x: -x[1]):
        print(f"{fp} {ids[fp][0]:16} {ids[fp][1]:16} recurrence={n}")
    cause_only = {}
    for t, m in log:
        k = classify(Correction("x", m, "s", t))
        cause_only[k.cause] = cause_only.get(k.cause, 0) + 1
    print("if the target is ignored, off_scope_edit would count", cause_only.get("off_scope_edit"), "events as one problem")
    print("with the target in the fingerprint README.md has 3 recurrences and LICENSE has 1, so a control is justified for README.md and LICENSE is not lumped in; a recurrence count only means something if equal causes are merged and unequal ones are not")

    section("5. Genuinely running: malformed corrections are rejected before they become records")
    for label, kw in (("empty message", dict(message="  ")), ("missing target", dict(target="")), ("non-string symptom", dict(symptom=None))):
        base = dict(event_id="b1", message="Do not edit README.md", symptom="s", target="README.md")
        base.update(kw)
        try:
            classify(Correction(**base))
            print(f"{label:20} accepted")
        except ValueError as e:
            print(f"{label:20} rejected: {e}")
    print("a record without a message or a target cannot be fingerprinted, so the ingest step refuses it instead of storing something that will never match")


if __name__ == "__main__":
    main()
