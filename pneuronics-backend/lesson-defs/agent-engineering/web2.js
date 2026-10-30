module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6166020ed05b321547",
 "order": 1,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Web and Desktop Agent Benchmarks: WebArena and OSWorld (Part 2 of 3) — GUI Grounding and Failure Diagnosis",
 "titleKn": "Web ಮತ್ತು Desktop Agent Benchmarks: WebArena ಮತ್ತು OSWorld (ಭಾಗ 2 / 3) — GUI Grounding ಮತ್ತು ವೈಫಲ್ಯ ರೋಗನಿರ್ಣಯ",
 "desc": "Build a mock desktop with named rectangles and clickable elements, then test edges, stale screens, screenshot scaling and target size, and separate grounding errors from operational-knowledge errors.",
 "descKn": "ಹೆಸರಿನ ಆಯತಗಳು ಮತ್ತು ಕ್ಲಿಕ್ ಮಾಡಬಹುದಾದ ಅಂಶಗಳಿರುವ ಮಾದರಿ desktop ನಿರ್ಮಿಸಿ, ನಂತರ ಅಂಚುಗಳು, ಹಳೆಯ ಪರದೆಗಳು, screenshot ಸ್ಕೇಲಿಂಗ್ ಮತ್ತು ಗುರಿ ಗಾತ್ರ ಪರೀಕ್ಷಿಸಿ, ಮತ್ತು grounding ದೋಷಗಳನ್ನು ಕಾರ್ಯಾಚರಣೆಯ-ಜ್ಞಾನ ದೋಷಗಳಿಂದ ಬೇರ್ಪಡಿಸಿ.",
 "objectives": [
  "Explain grounding and operational knowledge.",
  "Resolve clicks to elements through rectangles.",
  "Find where coordinates stop meaning what the agent thinks.",
  "Relate hit rate to target size.",
  "Diagnose failures from a click log."
 ],
 "objectivesKn": [
  "Grounding ಮತ್ತು ಕಾರ್ಯಾಚರಣೆಯ ಜ್ಞಾನ ವಿವರಿಸಿ.",
  "ಆಯತಗಳ ಮೂಲಕ ಕ್ಲಿಕ್‌ಗಳನ್ನು ಅಂಶಗಳಿಗೆ ಪರಿಹರಿಸಿ.",
  "ನಿರ್ದೇಶಾಂಕಗಳು agent ಯೋಚಿಸಿದ ಅರ್ಥ ಕಳೆದುಕೊಳ್ಳುವಲ್ಲಿ ಕಂಡುಹಿಡಿಯಿರಿ.",
  "Hit ದರವನ್ನು ಗುರಿ ಗಾತ್ರಕ್ಕೆ ಜೋಡಿಸಿ.",
  "ಕ್ಲಿಕ್ ಲಾಗ್‌ನಿಂದ ವೈಫಲ್ಯ ರೋಗನಿರ್ಣಯ ಮಾಡಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Web and Desktop Agent Benchmarks: WebArena and OSWorld (Part 2 of 3)",
    "textKn": "Web ಮತ್ತು Desktop Agent Benchmarks: WebArena ಮತ್ತು OSWorld (ಭಾಗ 2 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 2 of 3: GUI grounding: rectangles, screens, clicks and failure diagnosis. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind WebArena, OSWorld and OSWorld-Human, not the real software, and the agents are scripted or noise-driven stand-ins, so no real LLM behaviour is measured. The pasted Part 2 describes an OSWorld-style desktop; this lab rebuilds a three-screen mock desktop with rectangles, not OSWorld. Click noise in the grounding experiment is assumed Gaussian noise, not a measured model. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 2ನೆಯದು: GUI grounding: ಆಯತಗಳು, ಪರದೆಗಳು, ಕ್ಲಿಕ್‌ಗಳು ಮತ್ತು ವೈಫಲ್ಯ ರೋಗನಿರ್ಣಯ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು WebArena, OSWorld ಮತ್ತು OSWorld-Human ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು agents ಸ್ಕ್ರಿಪ್ಟ್ ಅಥವಾ ಶಬ್ದ-ಚಾಲಿತ ಬದಲಿಗಳು, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಅಂಟಿಸಿದ ಭಾಗ 2 OSWorld-ಶೈಲಿಯ desktop ವಿವರಿಸುತ್ತದೆ; ಈ ಲ್ಯಾಬ್ ಆಯತಗಳೊಂದಿಗೆ ಮೂರು-ಪರದೆ ಮಾದರಿ desktop ಮರುನಿರ್ಮಿಸುತ್ತದೆ, OSWorld ಅಲ್ಲ. Grounding ಪ್ರಯೋಗದ ಕ್ಲಿಕ್ ಶಬ್ದ ಊಹಿಸಿದ Gaussian ಶಬ್ದ, ಅಳೆದ ಮಾದರಿಯಲ್ಲ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Which Element, Which Pixel",
    "textKn": "ಯಾವ ಅಂಶ, ಯಾವ ಪಿಕ್ಸೆಲ್",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Grounding and Operational Knowledge",
    "headingKn": "Grounding ಮತ್ತು ಕಾರ್ಯಾಚರಣೆಯ ಜ್ಞಾನ",
    "bodyEn": "A computer-use agent must answer two separate questions: which element should I act on (operational knowledge: \"dark mode is under Appearance\"), and where on the screen is it (grounding: turning that intention into coordinates). A failed task can come from either, and the outcome looks the same. This lab models screens as named rectangles, resolves clicks to elements and then tests where grounding breaks: edges, stale screens, scaling and small targets.",
    "bodyKn": "Computer-use agent ಎರಡು ಪ್ರತ್ಯೇಕ ಪ್ರಶ್ನೆಗಳಿಗೆ ಉತ್ತರಿಸಬೇಕು: ಯಾವ ಅಂಶದ ಮೇಲೆ ಕ್ರಿಯೆ ಮಾಡಬೇಕು (ಕಾರ್ಯಾಚರಣೆಯ ಜ್ಞಾನ: \"dark mode Appearance ಅಡಿ ಇದೆ\"), ಮತ್ತು ಅದು ಪರದೆಯಲ್ಲಿ ಎಲ್ಲಿದೆ (grounding: ಆ ಉದ್ದೇಶವನ್ನು ನಿರ್ದೇಶಾಂಕಗಳಾಗಿ ಬದಲಿಸುವುದು). ವಿಫಲ ಕಾರ್ಯ ಯಾವುದರಿಂದಲಾದರೂ ಬರಬಹುದು, ಫಲಿತಾಂಶ ಒಂದೇ ರೀತಿ ಕಾಣುತ್ತದೆ. ಈ ಲ್ಯಾಬ್ ಪರದೆಗಳನ್ನು ಹೆಸರಿನ ಆಯತಗಳಾಗಿ ಮಾದರಿ ಮಾಡಿ, ಕ್ಲಿಕ್‌ಗಳನ್ನು ಅಂಶಗಳಿಗೆ ಪರಿಹರಿಸಿ, grounding ಎಲ್ಲಿ ಮುರಿಯುತ್ತದೆ ಎಂದು ಪರೀಕ್ಷಿಸುತ್ತದೆ: ಅಂಚುಗಳು, ಹಳೆಯ ಪರದೆಗಳು, ಸ್ಕೇಲಿಂಗ್ ಮತ್ತು ಚಿಕ್ಕ ಗುರಿಗಳು."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Two Questions Behind Every Click",
    "headingKn": "ಪ್ರತಿ ಕ್ಲಿಕ್ ಹಿಂದಿನ ಎರಡು ಪ್ರಶ್ನೆಗಳು",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">Grounding versus operational knowledge</text><rect x=\"10\" y=\"40\" width=\"130\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"75\" y=\"55\" fill=\"#e2e8f0\" text-anchor=\"middle\">Which element?</text><text x=\"75\" y=\"67\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">operational knowledge</text><rect x=\"160\" y=\"40\" width=\"130\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"225\" y=\"55\" fill=\"#e2e8f0\" text-anchor=\"middle\">Which pixel?</text><text x=\"225\" y=\"67\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">grounding</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">click log</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">separates the causes</text><path d=\"M75,74 L130,110 M225,74 L170,110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">two different failures can look identical in the outcome</text></svg>",
    "captionEn": "A click log is what lets us tell the two failures apart.",
    "captionKn": "ಕ್ಲಿಕ್ ಲಾಗ್ ಎರಡು ವೈಫಲ್ಯಗಳನ್ನು ಬೇರ್ಪಡಿಸಲು ಅವಕಾಶ ನೀಡುತ್ತದೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Failure types",
    "headingKn": "ವೈಫಲ್ಯ ಪ್ರಕಾರಗಳು",
    "headers": [
     "Type",
     "Meaning",
     "Typical fix"
    ],
    "rows": [
     [
      "Grounding miss",
      "right element, coordinates land on nothing",
      "better pointing, larger targets"
     ],
     [
      "Grounding slip",
      "right element, coordinates hit a neighbour",
      "tighter localisation"
     ],
     [
      "Knowledge error",
      "wanted element is not on this screen",
      "better procedure knowledge"
     ]
    ]
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Building the Desktop",
    "textKn": "Desktop ನಿರ್ಮಿಸುವುದು",
    "level": "H2"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "web_2.py",
    "headingEn": "Rect, GUIElement, screens and DesktopEnvironment",
    "headingKn": "Rect, GUIElement, ಪರದೆಗಳು ಮತ್ತು DesktopEnvironment",
    "descEn": "Rect.contains is inclusive on all sides. Each screen is a dictionary of named elements, so the same coordinates mean different things per screen. DesktopEnvironment.click scales coordinates, resolves the first element that contains them, logs the click and changes screen or theme. diagnose and diagnose_v2 classify logged clicks.",
    "descKn": "Rect.contains ಎಲ್ಲಾ ಬದಿಗಳಲ್ಲಿ ಒಳಗೊಂಡಿದೆ. ಪ್ರತಿ ಪರದೆ ಹೆಸರಿನ ಅಂಶಗಳ ಡಿಕ್ಷನರಿ, ಆದ್ದರಿಂದ ಅದೇ ನಿರ್ದೇಶಾಂಕಗಳು ಪರದೆಗೆ ಬೇರೆ ಅರ್ಥ ನೀಡುತ್ತವೆ. DesktopEnvironment.click ನಿರ್ದೇಶಾಂಕಗಳನ್ನು ಸ್ಕೇಲ್ ಮಾಡಿ, ಅವನ್ನು ಒಳಗೊಂಡ ಮೊದಲ ಅಂಶ ಪರಿಹರಿಸಿ, ಕ್ಲಿಕ್ ದಾಖಲಿಸಿ, ಪರದೆ ಅಥವಾ theme ಬದಲಿಸುತ್ತದೆ. diagnose ಮತ್ತು diagnose_v2 ದಾಖಲಿಸಿದ ಕ್ಲಿಕ್‌ಗಳನ್ನು ವರ್ಗೀಕರಿಸುತ್ತವೆ.",
    "code": "@dataclass\nclass Rect:\n    x1: int\n    y1: int\n    x2: int\n    y2: int\n\n    def contains(self, x, y):\n        return self.x1 <= x <= self.x2 and self.y1 <= y <= self.y2\n\n    def center(self):\n        return ((self.x1 + self.x2) // 2, (self.y1 + self.y2) // 2)\n\n\n@dataclass\nclass GUIElement:\n    name: str\n    bounds: Rect\n\n\n@dataclass\nclass ClickAction:\n    x: int\n    y: int\n\n\nSCREENS = {\n    \"settings\": {\"Appearance\": GUIElement(\"Appearance\", Rect(20, 40, 180, 80)), \"Notifications\": GUIElement(\"Notifications\", Rect(20, 90, 180, 130)),\n                 \"Privacy\": GUIElement(\"Privacy\", Rect(20, 140, 180, 180))},\n    \"appearance\": {\"Light\": GUIElement(\"Light\", Rect(200, 40, 320, 80)), \"Dark\": GUIElement(\"Dark\", Rect(200, 90, 320, 130)),\n                   \"Back\": GUIElement(\"Back\", Rect(20, 300, 100, 330))},\n    \"notifications\": {\"Back\": GUIElement(\"Back\", Rect(20, 300, 100, 330)), \"Toggle\": GUIElement(\"Toggle\", Rect(200, 40, 320, 80))},\n}\n\n\nclass DesktopEnvironment:\n    def __init__(self, scale=1.0):\n        self.scale = scale\n        self.reset()\n\n    def reset(self):\n        self.screen, self.theme, self.log = \"settings\", \"light\", []\n\n    def element_at(self, x, y):\n        for el in SCREENS[self.screen].values():\n            if el.bounds.contains(x, y):\n                return el.name\n        return None\n\n    def click(self, action):\n        x, y = round(action.x * self.scale), round(action.y * self.scale)\n        hit = self.element_at(x, y)\n        self.log.append((self.screen, action.x, action.y, hit))\n        if hit is None:\n            return \"nothing there\"\n        if self.screen == \"settings\" and hit in (\"Appearance\", \"Notifications\"):\n            self.screen = hit.lower()\n        elif self.screen == \"appearance\" and hit in (\"Light\", \"Dark\"):\n            self.theme = hit.lower()\n        elif hit == \"Back\":\n            self.screen = \"settings\"\n        return f\"clicked {hit}\"\n\n    def dark_mode(self):\n        return self.theme == \"dark\"\n\n\ndef diagnose(env_log, intended):\n    \"\"\"Classify each click: right element, grounding miss (intended element but coordinates off), or wrong target (knowledge).\"\"\"\n    out = []\n    for (screen, x, y, hit), want in zip(env_log, intended):\n        if hit == want:\n            out.append(\"ok\")\n        elif hit is None:\n            out.append(\"grounding miss\")\n        elif want in SCREENS[screen] and hit != want:\n            out.append(\"grounding slip (hit a neighbour)\")\n        else:\n            out.append(\"knowledge error (target not on this screen)\")\n    return out\n\n\ndef diagnose_v2(env_log, intended):\n    \"\"\"Our fix: first ask whether the intended element exists on the screen the click happened on.\"\"\"\n    out = []\n    for (screen, x, y, hit), want in zip(env_log, intended):\n        if hit == want:\n            out.append(\"ok\")\n        elif want not in SCREENS[screen]:\n            out.append(\"knowledge error (wanted element is not on this screen)\")\n        elif hit is None:\n            out.append(\"grounding miss\")\n        else:\n            out.append(\"grounding slip (hit a neighbour)\")\n    return out\n\n\ndef center_of(screen, name):\n    return SCREENS[screen][name].bounds.center()"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "web_2.py",
    "headingEn": "main(): six experiments",
    "headingKn": "main(): ಆರು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() performs the two-click dark mode path, tests rectangle edges and shared borders, clicks with a stale screen, mismatches screenshot scale, measures hit rate against click noise and element size, and diagnoses three failures with two rules.",
    "descKn": "main() ಎರಡು-ಕ್ಲಿಕ್ dark mode ಮಾರ್ಗ ನಡೆಸುತ್ತದೆ, ಆಯತ ಅಂಚುಗಳು ಮತ್ತು ಹಂಚಿದ ಗಡಿಗಳನ್ನು ಪರೀಕ್ಷಿಸುತ್ತದೆ, ಹಳೆಯ ಪರದೆಯೊಂದಿಗೆ ಕ್ಲಿಕ್ ಮಾಡುತ್ತದೆ, screenshot ಸ್ಕೇಲ್ ತಪ್ಪಿಸುತ್ತದೆ, ಕ್ಲಿಕ್ ಶಬ್ದ ಮತ್ತು ಅಂಶ ಗಾತ್ರದ ವಿರುದ್ಧ hit ದರ ಅಳೆಯುತ್ತದೆ, ಮತ್ತು ಮೂರು ವೈಫಲ್ಯಗಳನ್ನು ಎರಡು ನಿಯಮಗಳಿಂದ ರೋಗನಿರ್ಣಯ ಮಾಡುತ್ತದೆ.",
    "code": "def section(t):\n    print(f\"\\n--- {t} ---\")\n\n\ndef main():\n    env = DesktopEnvironment()\n\n    section(\"1. Dark mode through two clicks\")\n    for want, screen in ((\"Appearance\", \"settings\"), (\"Dark\", \"appearance\")):\n        x, y = center_of(screen, want)\n        print(f\"click ({x},{y}) ->\", env.click(ClickAction(x, y)))\n    print(\"dark mode:\", env.dark_mode(), \"| screen:\", env.screen)\n\n    section(\"2. Genuinely checking: the Rect boundary\")\n    r = Rect(20, 40, 180, 80)\n    for pt in ((20, 40), (180, 80), (181, 80), (19, 40), (100, 81)):\n        print(f\"point {pt} inside {r}: {r.contains(*pt)}\")\n    print(\"Rect.contains is inclusive on all four sides, so neighbouring elements that share an edge both contain that edge pixel\")\n    SCREENS[\"demo\"] = {\"A\": GUIElement(\"A\", Rect(0, 0, 50, 50)), \"B\": GUIElement(\"B\", Rect(50, 0, 100, 50))}\n    e2 = DesktopEnvironment(); e2.screen = \"demo\"\n    print(\"pixel (50, 25) lies on the shared edge of A and B -> resolved to\", e2.element_at(50, 25), \"(first in dictionary order wins, nothing records that B was equally valid)\")\n    del SCREENS[\"demo\"]\n\n    section(\"3. Genuinely checking: screen-specific elements and stale screenshots\")\n    env.reset()\n    x, y = center_of(\"appearance\", \"Dark\")\n    print(f\"click Dark's coordinates ({x},{y}) while still on 'settings' ->\", env.click(ClickAction(x, y)), \"| theme:\", env.theme)\n    env.reset()\n    x, y = center_of(\"settings\", \"Appearance\")\n    env.click(ClickAction(x, y))\n    print(f\"click the Appearance coordinates ({x},{y}) again, now on '{env.screen}' ->\", env.click(ClickAction(x, y)))\n    print(\"the same coordinates mean different things on different screens, so an action planned from an old screenshot misfires\")\n\n    section(\"4. Genuinely measuring: screenshot scale mismatch\")\n    for scale in (1.0, 0.75, 0.5, 2.0):\n        env = DesktopEnvironment(scale)\n        hits = 0\n        for screen, name in ((\"settings\", \"Appearance\"), (\"settings\", \"Notifications\"), (\"settings\", \"Privacy\"), (\"appearance\", \"Dark\"), (\"appearance\", \"Light\")):\n            env.screen = screen\n            x, y = center_of(screen, name)\n            hits += env.element_at(round(x * scale), round(y * scale)) == name\n        print(f\"agent sees one resolution, display is x{scale}: intended element hit {hits}/5\")\n    print(\"a model that returns pixel coordinates for a screenshot that was resized before sending misses unless the coordinates are converted back\")\n\n    section(\"5. Genuinely measuring: grounding hit rate versus click noise and element size (Gaussian noise ASSUMED, seed 8)\")\n    rng = random.Random(8)\n    sizes = {\"large 160x40\": Rect(0, 0, 160, 40), \"medium 80x24\": Rect(0, 0, 80, 24), \"small 24x24\": Rect(0, 0, 24, 24)}\n    print(f\"{'element':14}\" + \"\".join(f\"{'sigma=' + str(s):>11}\" for s in (2, 5, 10, 20)))\n    for label, rect in sizes.items():\n        cx, cy = rect.center()\n        row = \"\"\n        for sigma in (2, 5, 10, 20):\n            ok = sum(rect.contains(round(rng.gauss(cx, sigma)), round(rng.gauss(cy, sigma))) for _ in range(20000))\n            row += f\"{ok / 20000:>11.1%}\"\n        print(f\"{label:14}{row}\")\n    print(\"at sigma 20 the wide button is still hit 69.7 percent of the time and the small icon 21.8 percent; grounding accuracy depends on target size as well as on the model\")\n\n    section(\"6. Separating grounding errors from operational-knowledge errors\")\n    cases = {\n        \"knows the plan, slightly off\": ([(\"settings\", 100, 100, None)], [\"Appearance\"]),\n        \"knows the plan, hits neighbour\": ([(\"settings\", 100, 100, \"Notifications\")], [\"Appearance\"]),\n        \"wrong operation (Dark on settings)\": ([(\"settings\", 260, 110, None)], [\"Dark\"]),\n    }\n    env = DesktopEnvironment()\n    for name, (log, intended) in cases.items():\n        print(f\"{name:36} -> first rule: {diagnose(log, intended)} | with screen check: {diagnose_v2(log, intended)}\")\n    env = DesktopEnvironment()\n    env.click(ClickAction(*center_of(\"settings\", \"Privacy\")))\n    want = [\"Dark\"]\n    print(\"a click on a real element that is not the one needed on this screen ->\", diagnose(env.log, want))\n    print(\"the first rule called the wrong-operation click a grounding miss because it landed on empty space; asking whether the wanted element exists on that screen fixed it. Both are heuristics on a log, not ground truth: the real intent of the agent is never observed\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Dark mode through two clicks ---\nclick (100,60) -> clicked Appearance\nclick (260,110) -> clicked Dark\ndark mode: True | screen: appearance\n\n--- 2. Genuinely checking: the Rect boundary ---\npoint (20, 40) inside Rect(x1=20, y1=40, x2=180, y2=80): True\npoint (180, 80) inside Rect(x1=20, y1=40, x2=180, y2=80): True\npoint (181, 80) inside Rect(x1=20, y1=40, x2=180, y2=80): False\npoint (19, 40) inside Rect(x1=20, y1=40, x2=180, y2=80): False\npoint (100, 81) inside Rect(x1=20, y1=40, x2=180, y2=80): False\nRect.contains is inclusive on all four sides, so neighbouring elements that share an edge both contain that edge pixel\npixel (50, 25) lies on the shared edge of A and B -> resolved to A (first in dictionary order wins, nothing records that B was equally valid)\n\n--- 3. Genuinely checking: screen-specific elements and stale screenshots ---\nclick Dark's coordinates (260,110) while still on 'settings' -> nothing there | theme: light\nclick the Appearance coordinates (100,60) again, now on 'appearance' -> nothing there\nthe same coordinates mean different things on different screens, so an action planned from an old screenshot misfires\n\n--- 4. Genuinely measuring: screenshot scale mismatch ---\nagent sees one resolution, display is x1.0: intended element hit 5/5\nagent sees one resolution, display is x0.75: intended element hit 1/5\nagent sees one resolution, display is x0.5: intended element hit 0/5\nagent sees one resolution, display is x2.0: intended element hit 0/5\na model that returns pixel coordinates for a screenshot that was resized before sending misses unless the coordinates are converted back\n\n--- 5. Genuinely measuring: grounding hit rate versus click noise and element size (Gaussian noise ASSUMED, seed 8) ---\nelement           sigma=2    sigma=5   sigma=10   sigma=20\nlarge 160x40       100.0%     100.0%      96.1%      69.7%\nmedium 80x24       100.0%      98.7%      79.1%      45.4%\nsmall 24x24        100.0%      97.5%      62.1%      21.8%\nat sigma 20 the wide button is still hit 69.7 percent of the time and the small icon 21.8 percent; grounding accuracy depends on target size as well as on the model\n\n--- 6. Separating grounding errors from operational-knowledge errors ---\nknows the plan, slightly off         -> first rule: ['grounding miss'] | with screen check: ['grounding miss']\nknows the plan, hits neighbour       -> first rule: ['grounding slip (hit a neighbour)'] | with screen check: ['grounding slip (hit a neighbour)']\nwrong operation (Dark on settings)   -> first rule: ['grounding miss'] | with screen check: ['knowledge error (wanted element is not on this screen)']\na click on a real element that is not the one needed on this screen -> ['knowledge error (target not on this screen)']\nthe first rule called the wrong-operation click a grounding miss because it landed on empty space; asking whether the wanted element exists on that screen fixed it. Both are heuristics on a log, not ground truth: the real intent of the agent is never observed"
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Reading the Verified Output",
    "textKn": "ಪರಿಶೀಲಿತ Output ಓದುವುದು",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Edges, Stale Screens and Scale Each Broke a Correct Plan",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಅಂಚುಗಳು, ಹಳೆಯ ಪರದೆಗಳು ಮತ್ತು ಸ್ಕೇಲ್ ಪ್ರತಿಯೊಂದೂ ಸರಿಯಾದ ಯೋಜನೆ ಮುರಿದವು",
    "bodyEn": "Section 2: Rect.contains accepted points on all four edges (20,40) and (180,80) and rejected one pixel outside; two neighbouring rectangles that share an edge both contain it, and pixel (50,25) between A and B resolved to A purely by dictionary order, with nothing recording that B was equally valid. Section 3: Dark's coordinates clicked on the settings screen hit nothing, and the Appearance coordinates clicked again after navigating also hit nothing, so an action planned from an old screenshot misfires. Section 4: when the display was scaled differently from what the agent saw, the intended element was hit 5 of 5 at x1.0, 1 of 5 at x0.75 and 0 of 5 at both x0.5 and x2.0.",
    "bodyKn": "ವಿಭಾಗ 2: Rect.contains ನಾಲ್ಕೂ ಅಂಚುಗಳ ಬಿಂದುಗಳು (20,40) ಮತ್ತು (180,80) ಸ್ವೀಕರಿಸಿ ಒಂದು ಪಿಕ್ಸೆಲ್ ಹೊರಗಿನದನ್ನು ತಿರಸ್ಕರಿಸಿತು; ಅಂಚು ಹಂಚಿಕೊಳ್ಳುವ ಎರಡು ಪಕ್ಕದ ಆಯತಗಳು ಎರಡೂ ಅದನ್ನು ಒಳಗೊಳ್ಳುತ್ತವೆ, ಮತ್ತು A ಹಾಗೂ B ನಡುವಿನ ಪಿಕ್ಸೆಲ್ (50,25) ಕೇವಲ ಡಿಕ್ಷನರಿ ಕ್ರಮದಿಂದ A ಗೆ ಪರಿಹಾರವಾಯಿತು, B ಕೂಡ ಸಮಾನವಾಗಿ ಮಾನ್ಯ ಎಂದು ದಾಖಲಿಸುವುದು ಏನೂ ಇರಲಿಲ್ಲ. ವಿಭಾಗ 3: settings ಪರದೆಯಲ್ಲಿ Dark ನ ನಿರ್ದೇಶಾಂಕಗಳ ಕ್ಲಿಕ್ ಏನನ್ನೂ ತಾಗಲಿಲ್ಲ, ಮತ್ತು ಸಂಚರಿಸಿದ ನಂತರ Appearance ನಿರ್ದೇಶಾಂಕಗಳನ್ನು ಮತ್ತೆ ಕ್ಲಿಕ್ ಮಾಡಿದ್ದೂ ಏನನ್ನೂ ತಾಗಲಿಲ್ಲ, ಆದ್ದರಿಂದ ಹಳೆಯ screenshot ನಿಂದ ಯೋಜಿಸಿದ ಕ್ರಿಯೆ ತಪ್ಪಿಹೋಗುತ್ತದೆ. ವಿಭಾಗ 4: ಪ್ರದರ್ಶನ agent ನೋಡಿದ್ದಕ್ಕಿಂತ ಬೇರೆ ಸ್ಕೇಲ್‌ನಲ್ಲಿದ್ದಾಗ ಉದ್ದೇಶಿತ ಅಂಶ x1.0 ನಲ್ಲಿ 5 ರಲ್ಲಿ 5, x0.75 ನಲ್ಲಿ 5 ರಲ್ಲಿ 1 ಮತ್ತು x0.5 ಹಾಗೂ x2.0 ಎರಡರಲ್ಲಿ 5 ರಲ್ಲಿ 0 ತಾಗಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Small Targets Suffer Most, and the First Diagnosis Rule Was Wrong",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಚಿಕ್ಕ ಗುರಿಗಳಿಗೆ ಹೆಚ್ಚು ಹಾನಿ, ಮತ್ತು ಮೊದಲ ರೋಗನಿರ್ಣಯ ನಿಯಮ ತಪ್ಪಾಗಿತ್ತು",
    "bodyEn": "Section 5 (assumed Gaussian click noise, seed 8, 20,000 clicks per cell): at sigma 20 pixels the 160 by 40 button was hit 69.7 percent of the time, the 80 by 24 button 45.4 percent and the 24 by 24 icon 21.8 percent; at sigma 2 all were hit 100 percent. Section 6: our first diagnosis rule labelled a click for \"Dark\" made on the settings screen as a grounding miss because it landed on empty space, although the real error was operational (Dark is not on that screen). Adding a check that the wanted element exists on the clicked screen reclassified it as a knowledge error. Both rules are heuristics on a log, because the agent's true intent is never observed.",
    "bodyKn": "ವಿಭಾಗ 5 (ಊಹಿಸಿದ Gaussian ಕ್ಲಿಕ್ ಶಬ್ದ, seed 8, ಪ್ರತಿ ಕೋಶಕ್ಕೆ 20,000 ಕ್ಲಿಕ್): sigma 20 ಪಿಕ್ಸೆಲ್‌ನಲ್ಲಿ 160 ಬೈ 40 ಬಟನ್ 69.7 ಶೇಕಡಾ ತಾಗಿತು, 80 ಬೈ 24 ಬಟನ್ 45.4 ಶೇಕಡಾ ಮತ್ತು 24 ಬೈ 24 ಐಕಾನ್ 21.8 ಶೇಕಡಾ; sigma 2 ನಲ್ಲಿ ಎಲ್ಲವೂ 100 ಶೇಕಡಾ ತಾಗಿದವು. ವಿಭಾಗ 6: ನಮ್ಮ ಮೊದಲ ರೋಗನಿರ್ಣಯ ನಿಯಮ settings ಪರದೆಯಲ್ಲಿ \"Dark\" ಗೆ ಮಾಡಿದ ಕ್ಲಿಕ್ ಖಾಲಿ ಜಾಗಕ್ಕೆ ಬಿದ್ದ ಕಾರಣ grounding miss ಎಂದು ಲೇಬಲ್ ಮಾಡಿತು, ನಿಜ ದೋಷ ಕಾರ್ಯಾಚರಣೆಯದಾಗಿದ್ದರೂ (Dark ಆ ಪರದೆಯಲ್ಲಿ ಇಲ್ಲ). ಬಯಸಿದ ಅಂಶ ಕ್ಲಿಕ್ ಮಾಡಿದ ಪರದೆಯಲ್ಲಿ ಇದೆಯೇ ಎಂಬ ಪರಿಶೀಲನೆ ಸೇರಿಸಿದಾಗ ಅದು ಜ್ಞಾನ ದೋಷ ಎಂದು ಮರುವರ್ಗೀಕರಿಸಿತು. ಎರಡೂ ನಿಯಮಗಳು ಲಾಗ್ ಮೇಲಿನ ಊಹಾತ್ಮಕ ನಿಯಮಗಳು, ಏಕೆಂದರೆ agent ನ ನಿಜ ಉದ್ದೇಶ ಎಂದೂ ಗಮನಿಸಲ್ಪಡುವುದಿಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "Computer-use failures are expensive to debug when they all look like \"the task did not finish\". Separating which element from which pixel tells a team whether to improve the model's procedure knowledge, its pointing accuracy, or the screenshot pipeline.",
    "bodyKn": "\"ಕಾರ್ಯ ಮುಗಿಯಲಿಲ್ಲ\" ಎಂದು ಎಲ್ಲವೂ ಕಂಡರೆ computer-use ವೈಫಲ್ಯಗಳನ್ನು ಡೀಬಗ್ ಮಾಡುವುದು ದುಬಾರಿ. ಯಾವ ಅಂಶ ಮತ್ತು ಯಾವ ಪಿಕ್ಸೆಲ್ ಎಂದು ಬೇರ್ಪಡಿಸುವುದು ಮಾದರಿಯ ವಿಧಾನ ಜ್ಞಾನ, ಅದರ ಸೂಚನೆ ನಿಖರತೆ ಅಥವಾ screenshot ಪೈಪ್‌ಲೈನ್ ಯಾವುದನ್ನು ಸುಧಾರಿಸಬೇಕೆಂದು ತಂಡಕ್ಕೆ ಹೇಳುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"a click that hit nothing is a grounding error.\" It was a knowledge error in one case: the agent asked for an element that was not on the screen at all.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಏನನ್ನೂ ತಾಗದ ಕ್ಲಿಕ್ grounding ದೋಷ.\" ಒಂದು ಪ್ರಕರಣದಲ್ಲಿ ಅದು ಜ್ಞಾನ ದೋಷವಾಗಿತ್ತು: agent ಪರದೆಯಲ್ಲೇ ಇಲ್ಲದ ಅಂಶ ಕೇಳಿತ್ತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Grounding: mapping an intention to screen coordinates. Operational knowledge: knowing which element performs a step. Rect: a bounding box. Hit rate: share of clicks landing on the intended element. Stale screenshot: an old view used to plan a new action.",
    "bodyKn": "Grounding: ಉದ್ದೇಶವನ್ನು ಪರದೆ ನಿರ್ದೇಶಾಂಕಗಳಿಗೆ ಹೊಂದಿಸುವುದು. ಕಾರ್ಯಾಚರಣೆಯ ಜ್ಞಾನ: ಯಾವ ಅಂಶ ಹಂತ ನಿರ್ವಹಿಸುತ್ತದೆ ಎಂದು ತಿಳಿಯುವುದು. Rect: ಬೌಂಡಿಂಗ್ ಬಾಕ್ಸ್. Hit rate: ಉದ್ದೇಶಿತ ಅಂಶಕ್ಕೆ ತಾಗುವ ಕ್ಲಿಕ್‌ಗಳ ಪಾಲು. Stale screenshot: ಹೊಸ ಕ್ರಿಯೆ ಯೋಜಿಸಲು ಬಳಸಿದ ಹಳೆಯ ನೋಟ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) Two clicks set dark mode on the right screens. 2) Rect edges are inclusive, so shared borders are ambiguous. 3) Coordinates from an old screen hit nothing. 4) A scale mismatch took the hit rate from 5 of 5 to 1 of 5 and 0 of 5. 5) At sigma 20 a small icon was hit 21.8 percent against 69.7 for a wide button. 6) A first diagnosis rule mislabelled a knowledge error as a grounding miss.",
    "bodyKn": "1) ಎರಡು ಕ್ಲಿಕ್‌ಗಳು ಸರಿಯಾದ ಪರದೆಗಳಲ್ಲಿ dark mode ಹೊಂದಿಸಿದವು. 2) Rect ಅಂಚುಗಳು ಒಳಗೊಂಡಿವೆ, ಆದ್ದರಿಂದ ಹಂಚಿದ ಗಡಿಗಳು ಅಸ್ಪಷ್ಟ. 3) ಹಳೆಯ ಪರದೆಯ ನಿರ್ದೇಶಾಂಕಗಳು ಏನನ್ನೂ ತಾಗಲಿಲ್ಲ. 4) ಸ್ಕೇಲ್ ಅಸಾಮರಸ್ಯ hit ದರವನ್ನು 5 ರಲ್ಲಿ 5 ರಿಂದ 1 ಮತ್ತು 0 ಗೆ ಇಳಿಸಿತು. 5) sigma 20 ನಲ್ಲಿ ಚಿಕ್ಕ ಐಕಾನ್ 21.8 ಶೇಕಡಾ, ಅಗಲ ಬಟನ್ 69.7 ಶೇಕಡಾ. 6) ಮೊದಲ ರೋಗನಿರ್ಣಯ ನಿಯಮ ಜ್ಞಾನ ದೋಷವನ್ನು grounding miss ಎಂದು ತಪ್ಪಾಗಿ ಲೇಬಲ್ ಮಾಡಿತು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What separates grounding from operational knowledge?",
      "qKn": "Grounding ಮತ್ತು ಕಾರ್ಯಾಚರಣೆಯ ಜ್ಞಾನವನ್ನು ಯಾವುದು ಬೇರ್ಪಡಿಸುತ್ತದೆ?",
      "opts": [
       "Which pixel versus which element",
       "Speed versus memory",
       "Python versus JavaScript",
       "Nothing"
      ],
      "optsKn": [
       "ಯಾವ ಪಿಕ್ಸೆಲ್ ಮತ್ತು ಯಾವ ಅಂಶ",
       "ವೇಗ ಮತ್ತು ಮೆಮೊರಿ",
       "Python ಮತ್ತು JavaScript",
       "ಏನೂ ಇಲ್ಲ"
      ],
      "correct": 0
     },
     {
      "q": "How many of 5 intended elements were hit at x0.75 display scale?",
      "qKn": "x0.75 ಪ್ರದರ್ಶನ ಸ್ಕೇಲ್‌ನಲ್ಲಿ 5 ಉದ್ದೇಶಿತ ಅಂಶಗಳಲ್ಲಿ ಎಷ್ಟು ತಾಗಿದವು?",
      "opts": [
       "5",
       "1",
       "3",
       "0"
      ],
      "optsKn": [
       "5",
       "1",
       "3",
       "0"
      ],
      "correct": 1
     },
     {
      "q": "Why is a pixel on a shared border ambiguous?",
      "qKn": "ಹಂಚಿದ ಗಡಿಯ ಪಿಕ್ಸೆಲ್ ಏಕೆ ಅಸ್ಪಷ್ಟ?",
      "opts": [
       "Rect.contains is inclusive, so both neighbours contain it and the first one wins",
       "Pixels have no position",
       "The border is invisible",
       "It is never clicked"
      ],
      "optsKn": [
       "Rect.contains ಒಳಗೊಂಡಿದೆ, ಆದ್ದರಿಂದ ಇಬ್ಬರೂ ನೆರೆಯವರು ಅದನ್ನು ಒಳಗೊಳ್ಳುತ್ತಾರೆ ಮತ್ತು ಮೊದಲನೆಯದು ಗೆಲ್ಲುತ್ತದೆ",
       "ಪಿಕ್ಸೆಲ್‌ಗಳಿಗೆ ಸ್ಥಾನ ಇಲ್ಲ",
       "ಗಡಿ ಕಾಣುವುದಿಲ್ಲ",
       "ಅದನ್ನು ಎಂದೂ ಕ್ಲಿಕ್ ಮಾಡುವುದಿಲ್ಲ"
      ],
      "correct": 0
     },
     {
      "q": "Which size was hit least at sigma 20?",
      "qKn": "sigma 20 ನಲ್ಲಿ ಯಾವ ಗಾತ್ರ ಕನಿಷ್ಠ ತಾಗಿತು?",
      "opts": [
       "The 160 by 40 button (69.7 percent)",
       "The 80 by 24 button (45.4 percent)",
       "The 24 by 24 icon (21.8 percent)",
       "All were equal"
      ],
      "optsKn": [
       "160 ಬೈ 40 ಬಟನ್ (69.7 ಶೇಕಡಾ)",
       "80 ಬೈ 24 ಬಟನ್ (45.4 ಶೇಕಡಾ)",
       "24 ಬೈ 24 ಐಕಾನ್ (21.8 ಶೇಕಡಾ)",
       "ಎಲ್ಲವೂ ಸಮ"
      ],
      "correct": 2
     },
     {
      "q": "Why did the first diagnosis rule mislabel the Dark-on-settings click?",
      "qKn": "Settings ಮೇಲಿನ Dark ಕ್ಲಿಕ್ ಅನ್ನು ಮೊದಲ ರೋಗನಿರ್ಣಯ ನಿಯಮ ಏಕೆ ತಪ್ಪಾಗಿ ಲೇಬಲ್ ಮಾಡಿತು?",
      "opts": [
       "It landed on empty space and the rule only looked at the click, not whether the element existed on that screen",
       "Dark was disabled",
       "The log was empty",
       "The theme was dark already"
      ],
      "optsKn": [
       "ಅದು ಖಾಲಿ ಜಾಗಕ್ಕೆ ಬಿತ್ತು ಮತ್ತು ನಿಯಮ ಕ್ಲಿಕ್ ಮಾತ್ರ ನೋಡಿತು, ಆ ಪರದೆಯಲ್ಲಿ ಅಂಶ ಇದೆಯೇ ಎಂದಲ್ಲ",
       "Dark ನಿಷ್ಕ್ರಿಯವಾಗಿತ್ತು",
       "ಲಾಗ್ ಖಾಲಿ ಇತ್ತು",
       "theme ಈಗಾಗಲೇ dark ಆಗಿತ್ತು"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
