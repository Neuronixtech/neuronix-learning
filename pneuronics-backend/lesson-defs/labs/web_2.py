"""Teaching implementation (our own): OSWorld-style GUI grounding - rectangles, screens, clicks, and separating grounding errors from operational-knowledge errors."""
import math
import random
from dataclasses import dataclass


@dataclass
class Rect:
    x1: int
    y1: int
    x2: int
    y2: int

    def contains(self, x, y):
        return self.x1 <= x <= self.x2 and self.y1 <= y <= self.y2

    def center(self):
        return ((self.x1 + self.x2) // 2, (self.y1 + self.y2) // 2)


@dataclass
class GUIElement:
    name: str
    bounds: Rect


@dataclass
class ClickAction:
    x: int
    y: int


SCREENS = {
    "settings": {"Appearance": GUIElement("Appearance", Rect(20, 40, 180, 80)), "Notifications": GUIElement("Notifications", Rect(20, 90, 180, 130)),
                 "Privacy": GUIElement("Privacy", Rect(20, 140, 180, 180))},
    "appearance": {"Light": GUIElement("Light", Rect(200, 40, 320, 80)), "Dark": GUIElement("Dark", Rect(200, 90, 320, 130)),
                   "Back": GUIElement("Back", Rect(20, 300, 100, 330))},
    "notifications": {"Back": GUIElement("Back", Rect(20, 300, 100, 330)), "Toggle": GUIElement("Toggle", Rect(200, 40, 320, 80))},
}


class DesktopEnvironment:
    def __init__(self, scale=1.0):
        self.scale = scale
        self.reset()

    def reset(self):
        self.screen, self.theme, self.log = "settings", "light", []

    def element_at(self, x, y):
        for el in SCREENS[self.screen].values():
            if el.bounds.contains(x, y):
                return el.name
        return None

    def click(self, action):
        x, y = round(action.x * self.scale), round(action.y * self.scale)
        hit = self.element_at(x, y)
        self.log.append((self.screen, action.x, action.y, hit))
        if hit is None:
            return "nothing there"
        if self.screen == "settings" and hit in ("Appearance", "Notifications"):
            self.screen = hit.lower()
        elif self.screen == "appearance" and hit in ("Light", "Dark"):
            self.theme = hit.lower()
        elif hit == "Back":
            self.screen = "settings"
        return f"clicked {hit}"

    def dark_mode(self):
        return self.theme == "dark"


def diagnose(env_log, intended):
    """Classify each click: right element, grounding miss (intended element but coordinates off), or wrong target (knowledge)."""
    out = []
    for (screen, x, y, hit), want in zip(env_log, intended):
        if hit == want:
            out.append("ok")
        elif hit is None:
            out.append("grounding miss")
        elif want in SCREENS[screen] and hit != want:
            out.append("grounding slip (hit a neighbour)")
        else:
            out.append("knowledge error (target not on this screen)")
    return out


def diagnose_v2(env_log, intended):
    """Our fix: first ask whether the intended element exists on the screen the click happened on."""
    out = []
    for (screen, x, y, hit), want in zip(env_log, intended):
        if hit == want:
            out.append("ok")
        elif want not in SCREENS[screen]:
            out.append("knowledge error (wanted element is not on this screen)")
        elif hit is None:
            out.append("grounding miss")
        else:
            out.append("grounding slip (hit a neighbour)")
    return out


def center_of(screen, name):
    return SCREENS[screen][name].bounds.center()


def section(t):
    print(f"\n--- {t} ---")


def main():
    env = DesktopEnvironment()

    section("1. Dark mode through two clicks")
    for want, screen in (("Appearance", "settings"), ("Dark", "appearance")):
        x, y = center_of(screen, want)
        print(f"click ({x},{y}) ->", env.click(ClickAction(x, y)))
    print("dark mode:", env.dark_mode(), "| screen:", env.screen)

    section("2. Genuinely checking: the Rect boundary")
    r = Rect(20, 40, 180, 80)
    for pt in ((20, 40), (180, 80), (181, 80), (19, 40), (100, 81)):
        print(f"point {pt} inside {r}: {r.contains(*pt)}")
    print("Rect.contains is inclusive on all four sides, so neighbouring elements that share an edge both contain that edge pixel")
    SCREENS["demo"] = {"A": GUIElement("A", Rect(0, 0, 50, 50)), "B": GUIElement("B", Rect(50, 0, 100, 50))}
    e2 = DesktopEnvironment(); e2.screen = "demo"
    print("pixel (50, 25) lies on the shared edge of A and B -> resolved to", e2.element_at(50, 25), "(first in dictionary order wins, nothing records that B was equally valid)")
    del SCREENS["demo"]

    section("3. Genuinely checking: screen-specific elements and stale screenshots")
    env.reset()
    x, y = center_of("appearance", "Dark")
    print(f"click Dark's coordinates ({x},{y}) while still on 'settings' ->", env.click(ClickAction(x, y)), "| theme:", env.theme)
    env.reset()
    x, y = center_of("settings", "Appearance")
    env.click(ClickAction(x, y))
    print(f"click the Appearance coordinates ({x},{y}) again, now on '{env.screen}' ->", env.click(ClickAction(x, y)))
    print("the same coordinates mean different things on different screens, so an action planned from an old screenshot misfires")

    section("4. Genuinely measuring: screenshot scale mismatch")
    for scale in (1.0, 0.75, 0.5, 2.0):
        env = DesktopEnvironment(scale)
        hits = 0
        for screen, name in (("settings", "Appearance"), ("settings", "Notifications"), ("settings", "Privacy"), ("appearance", "Dark"), ("appearance", "Light")):
            env.screen = screen
            x, y = center_of(screen, name)
            hits += env.element_at(round(x * scale), round(y * scale)) == name
        print(f"agent sees one resolution, display is x{scale}: intended element hit {hits}/5")
    print("a model that returns pixel coordinates for a screenshot that was resized before sending misses unless the coordinates are converted back")

    section("5. Genuinely measuring: grounding hit rate versus click noise and element size (Gaussian noise ASSUMED, seed 8)")
    rng = random.Random(8)
    sizes = {"large 160x40": Rect(0, 0, 160, 40), "medium 80x24": Rect(0, 0, 80, 24), "small 24x24": Rect(0, 0, 24, 24)}
    print(f"{'element':14}" + "".join(f"{'sigma=' + str(s):>11}" for s in (2, 5, 10, 20)))
    for label, rect in sizes.items():
        cx, cy = rect.center()
        row = ""
        for sigma in (2, 5, 10, 20):
            ok = sum(rect.contains(round(rng.gauss(cx, sigma)), round(rng.gauss(cy, sigma))) for _ in range(20000))
            row += f"{ok / 20000:>11.1%}"
        print(f"{label:14}{row}")
    print("at sigma 20 the wide button is still hit 69.7 percent of the time and the small icon 21.8 percent; grounding accuracy depends on target size as well as on the model")

    section("6. Separating grounding errors from operational-knowledge errors")
    cases = {
        "knows the plan, slightly off": ([("settings", 100, 100, None)], ["Appearance"]),
        "knows the plan, hits neighbour": ([("settings", 100, 100, "Notifications")], ["Appearance"]),
        "wrong operation (Dark on settings)": ([("settings", 260, 110, None)], ["Dark"]),
    }
    env = DesktopEnvironment()
    for name, (log, intended) in cases.items():
        print(f"{name:36} -> first rule: {diagnose(log, intended)} | with screen check: {diagnose_v2(log, intended)}")
    env = DesktopEnvironment()
    env.click(ClickAction(*center_of("settings", "Privacy")))
    want = ["Dark"]
    print("a click on a real element that is not the one needed on this screen ->", diagnose(env.log, want))
    print("the first rule called the wrong-operation click a grounding miss because it landed on empty space; asking whether the wanted element exists on that screen fixed it. Both are heuristics on a log, not ground truth: the real intent of the agent is never observed")


if __name__ == "__main__":
    main()
