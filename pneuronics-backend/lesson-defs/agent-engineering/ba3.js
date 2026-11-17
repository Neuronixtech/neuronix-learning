module.exports = {
 "phaseId": "6a369d6366020ed05b32158c",
 "moduleId": "6a369d6466020ed05b3215ad",
 "order": 2,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Browser Agents and Indirect Prompt Injection (Part 3 of 3) — A Layered Policy",
 "titleKn": "Browser Agents ಮತ್ತು ಪರೋಕ್ಷ Prompt Injection (ಭಾಗ 3 / 3) — ಪದರದ ನೀತಿ",
 "desc": "Combine a sanitizer, an allowlist, source tracking and confirmation and measure attacks stopped against legitimate work blocked.",
 "descKn": "ಸ್ಯಾನಿಟೈಸರ್, allowlist, ಮೂಲ ಟ್ರ್ಯಾಕಿಂಗ್ ಮತ್ತು ದೃಢೀಕರಣ ಸೇರಿಸಿ ನಿಲ್ಲಿಸಿದ ದಾಳಿಗಳನ್ನು ನಿರ್ಬಂಧಿಸಿದ ಕಾನೂನುಬದ್ಧ ಕೆಲಸದ ವಿರುದ್ಧ ಅಳೆಯಿರಿ.",
 "objectives": [
  "Script an attack and a legitimate workload.",
  "Apply four layers.",
  "Find what survives each layer.",
  "Count false blocks.",
  "Explain why source matters."
 ],
 "objectivesKn": [
  "ದಾಳಿ ಮತ್ತು ಕಾನೂನುಬದ್ಧ ಕೆಲಸಭಾರ ಸ್ಕ್ರಿಪ್ಟ್ ಮಾಡಿ.",
  "ನಾಲ್ಕು ಪದರ ಅನ್ವಯಿಸಿ.",
  "ಪ್ರತಿ ಪದರ ದಾಟುವುದನ್ನು ಕಂಡುಹಿಡಿಯಿರಿ.",
  "ತಪ್ಪು ನಿರ್ಬಂಧ ಎಣಿಸಿ.",
  "ಮೂಲ ಏಕೆ ಮುಖ್ಯ ವಿವರಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Browser Agents and Indirect Prompt Injection (Part 3 of 3)",
    "textKn": "Browser Agents ಮತ್ತು ಪರೋಕ್ಷ Prompt Injection (ಭಾಗ 3 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 3 of 3: four layered defenses (sanitizer, domain allowlist, source tracking and confirmation) on 400 generated attacks and 200 legitimate tasks, the attacks that survive each layer and the cost to legitimate work. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind browser agents and indirect prompt injection (injection channels, poisoned memory, the limits of pattern sanitizers, domain allowlists, source tracking and confirmation of sensitive actions), not the real software, and pages are Python dictionaries, the agent is a pattern follower and not a language model, nothing is sent over a network and the attacker domain is a reserved example name, so no real LLM behaviour is measured. The original code/main.py was not supplied, so the labs are our own implementation. The lesson sources quote results about real browser agents and attack success rates; those are cited from the lesson and were not reproduced here. The agent, the pages, the sanitizer and the attack mix in the labs are all invented to show the mechanics, and the lab agent understands only fixed text patterns, not language. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 3ನೆಯದು: ನಾಲ್ಕು ಪದರದ ರಕ್ಷಣೆಗಳು (ಸ್ಯಾನಿಟೈಸರ್, ಡೊಮೇನ್ allowlist, ಮೂಲ ಟ್ರ್ಯಾಕಿಂಗ್ ಮತ್ತು ದೃಢೀಕರಣ) 400 ರಚಿತ ದಾಳಿಗಳು ಮತ್ತು 200 ಕಾನೂನುಬದ್ಧ ಕಾರ್ಯಗಳ ಮೇಲೆ, ಪ್ರತಿ ಪದರ ದಾಟುವ ದಾಳಿಗಳು ಮತ್ತು ಕಾನೂನುಬದ್ಧ ಕೆಲಸಕ್ಕೆ ವೆಚ್ಚ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು browser agents ಮತ್ತು ಪರೋಕ್ಷ prompt injection (injection ಮಾರ್ಗಗಳು, ವಿಷಪೂರಿತ ಮೆಮೊರಿ, ಮಾದರಿ ಸ್ಯಾನಿಟೈಸರ್‌ಗಳ ಮಿತಿಗಳು, ಡೊಮೇನ್ allowlists, ಮೂಲ ಟ್ರ್ಯಾಕಿಂಗ್ ಮತ್ತು ಸೂಕ್ಷ್ಮ ಕ್ರಿಯೆಗಳ ದೃಢೀಕರಣ) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಪುಟಗಳು Python ನಿಘಂಟುಗಳು, agent ಮಾದರಿ ಅನುಸರಿಸುವವನು, ಭಾಷಾ ಮಾದರಿ ಅಲ್ಲ, ನೆಟ್‌ವರ್ಕ್‌ನಲ್ಲಿ ಏನೂ ಕಳುಹಿಸಲ್ಪಡುವುದಿಲ್ಲ ಮತ್ತು ದಾಳಿಕೋರ ಡೊಮೇನ್ ಕಾದಿರಿಸಿದ ಉದಾಹರಣೆ ಹೆಸರು, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ code/main.py ಒದಗಿಸಿರಲಿಲ್ಲ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ನಮ್ಮದೇ ಅನುಷ್ಠಾನ. ನಿಜ browser agents ಮತ್ತು ದಾಳಿ ಯಶಸ್ಸು ದರಗಳ ಬಗ್ಗೆ lesson ಮೂಲಗಳು ಉಲ್ಲೇಖಿಸುವ ಫಲಿತಾಂಶಗಳು lesson ನಿಂದ ಉಲ್ಲೇಖಿತ ಮತ್ತು ಇಲ್ಲಿ ಪುನರುತ್ಪಾದಿಸಲಾಗಿಲ್ಲ. ಲ್ಯಾಬ್‌ಗಳ agent, ಪುಟಗಳು, ಸ್ಯಾನಿಟೈಸರ್ ಮತ್ತು ದಾಳಿ ಮಿಶ್ರಣ ಯಂತ್ರಶಾಸ್ತ್ರ ತೋರಿಸಲು ಕಲ್ಪಿತ, ಮತ್ತು ಲ್ಯಾಬ್ agent ನಿಗದಿತ ಪಠ್ಯ ಮಾದರಿಗಳನ್ನು ಮಾತ್ರ ಅರ್ಥಮಾಡಿಕೊಳ್ಳುತ್ತದೆ, ಭಾಷೆಯನ್ನಲ್ಲ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Where the Instruction Came From Matters Most",
    "textKn": "ಸೂಚನೆ ಎಲ್ಲಿಂದ ಬಂತು ಎಂಬುದು ಅತಿ ಮುಖ್ಯ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Four Layers Compared",
    "headingKn": "ನಾಲ್ಕು ಪದರಗಳ ಹೋಲಿಕೆ",
    "bodyEn": "A text filter cannot decide whether an instruction is legitimate, but the system can know who asked for an action. This part scripts 400 attacks and 200 legitimate tasks and applies four layers singly and in combination: a sanitizer, an allowlist of destination domains, a rule that sensitive actions requested by page content are refused, and confirmation of every sensitive action. It reports how many attacks and how many legitimate tasks still execute. The attack mix and rates are invented.",
    "bodyKn": "ಪಠ್ಯ ಫಿಲ್ಟರ್ ಸೂಚನೆ ಕಾನೂನುಬದ್ಧವೇ ಎಂದು ನಿರ್ಧರಿಸಲಾರದು, ಆದರೆ ಕ್ರಿಯೆಯನ್ನು ಯಾರು ಕೇಳಿದರು ಎಂದು ವ್ಯವಸ್ಥೆ ತಿಳಿಯಬಲ್ಲದು. ಈ ಭಾಗ 400 ದಾಳಿ ಮತ್ತು 200 ಕಾನೂನುಬದ್ಧ ಕಾರ್ಯಗಳನ್ನು ಸ್ಕ್ರಿಪ್ಟ್ ಮಾಡಿ ನಾಲ್ಕು ಪದರಗಳನ್ನು ಒಂದೊಂದಾಗಿ ಮತ್ತು ಸಂಯೋಜನೆಯಲ್ಲಿ ಅನ್ವಯಿಸುತ್ತದೆ: ಸ್ಯಾನಿಟೈಸರ್, ಗಮ್ಯಸ್ಥಾನ ಡೊಮೇನ್‌ಗಳ allowlist, ಪುಟ ವಿಷಯ ಕೇಳಿದ ಸೂಕ್ಷ್ಮ ಕ್ರಿಯೆಗಳನ್ನು ನಿರಾಕರಿಸುವ ನಿಯಮ ಮತ್ತು ಪ್ರತಿ ಸೂಕ್ಷ್ಮ ಕ್ರಿಯೆಯ ದೃಢೀಕರಣ. ಎಷ್ಟು ದಾಳಿ ಮತ್ತು ಎಷ್ಟು ಕಾನೂನುಬದ್ಧ ಕಾರ್ಯಗಳು ಇನ್ನೂ ಕಾರ್ಯಗತವಾಗುತ್ತವೆ ವರದಿ ಮಾಡುತ್ತದೆ. ದಾಳಿ ಮಿಶ್ರಣ ಮತ್ತು ದರಗಳು ಕಲ್ಪಿತ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "A Layered Browser-Agent Policy",
    "headingKn": "ಪದರದ Browser-Agent ನೀತಿ",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">layers stop different attacks and cost different amounts</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">allowlist</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">destination</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">source</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">who asked</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">confirm</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">sensitive actions</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">sanitizer</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">text filter</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">layers stop different attacks and cost different amounts</text></svg>",
    "captionEn": "Destination, source and confirmation checks run before a sensitive action.",
    "captionKn": "ಸೂಕ್ಷ್ಮ ಕ್ರಿಯೆಗೆ ಮೊದಲು ಗಮ್ಯಸ್ಥಾನ, ಮೂಲ ಮತ್ತು ದೃಢೀಕರಣ ಪರಿಶೀಲನೆಗಳು ಓಡುತ್ತವೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "The four layers",
    "headingKn": "ನಾಲ್ಕು ಪದರಗಳು",
    "headers": [
     "Layer",
     "What it blocks"
    ],
    "rows": [
     [
      "sanitizer",
      "undisguised instructions in visible, hidden or fragment text"
     ],
     [
      "allowlist",
      "actions whose destination is outside bob.example and docs.example"
     ],
     [
      "source tracking",
      "sensitive actions requested by page content"
     ],
     [
      "confirmation",
      "every sensitive action until a person approves"
     ],
     [
      "workload",
      "400 attacks and 200 user-requested legitimate tasks"
     ]
    ]
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Building and Testing the Ideas",
    "textKn": "ಕಲ್ಪನೆಗಳನ್ನು ನಿರ್ಮಿಸಿ ಪರೀಕ್ಷಿಸುವುದು",
    "level": "H2"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "ba_3.py",
    "headingEn": "Attack generator, sanitizer and defense check",
    "headingKn": "ದಾಳಿ ಜನರೇಟರ್, ಸ್ಯಾನಿಟೈಸರ್ ಮತ್ತು ರಕ್ಷಣೆ ಪರಿಶೀಲನೆ",
    "descEn": "gen_attacks and gen_legit script the workloads, sanitizer_blocks models the text filter and allowed applies the chosen layers to a task.",
    "descKn": "gen_attacks ಮತ್ತು gen_legit ಕೆಲಸಭಾರಗಳನ್ನು ಸ್ಕ್ರಿಪ್ಟ್ ಮಾಡುತ್ತವೆ, sanitizer_blocks ಪಠ್ಯ ಫಿಲ್ಟರ್ ಮಾದರಿ ಮಾಡುತ್ತದೆ ಮತ್ತು allowed ಆರಿಸಿದ ಪದರಗಳನ್ನು ಕಾರ್ಯಕ್ಕೆ ಅನ್ವಯಿಸುತ್ತದೆ.",
    "code": "ALLOWED_DOMAINS = {\"bob.example\", \"docs.example\"}\r\nSENSITIVE = {\"send_cookie\", \"send_report\", \"send_password\"}\r\n\r\n\r\ndef gen_attacks(r, n=400):\r\n    out = []\r\n    for _ in range(n):\r\n        out.append({\"source\": \"page\", \"action\": r.choice([\"send_cookie\", \"send_password\", \"send_report\"]), \"domain\": r.choice([\"evil.example\", \"evil.example\", \"docs.example\"]),\r\n                    \"disguised\": r.random() < 0.5, \"channel\": r.choice([\"visible\", \"hidden\", \"fragment\", \"memory\"])})\r\n    return out\r\n\r\n\r\ndef gen_legit(r, n=200):\r\n    out = []\r\n    for _ in range(n):\r\n        out.append({\"source\": \"user\", \"action\": r.choice([\"send_report\", \"send_report\", \"navigate\"]), \"domain\": r.choice([\"bob.example\", \"docs.example\"]), \"disguised\": False, \"channel\": \"user\"})\r\n    return out\r\n\r\n\r\ndef sanitizer_blocks(task):\r\n    \"\"\"Catches undisguised instructions in visible, hidden and fragment text; misses disguised ones and memory replays.\"\"\"\r\n    return task[\"source\"] == \"page\" and (not task[\"disguised\"]) and task[\"channel\"] in (\"visible\", \"hidden\", \"fragment\")\r\n\r\n\r\ndef allowed(task, defenses):\r\n    \"\"\"Return True if the action would run without any block or confirmation.\"\"\"\r\n    if \"sanitizer\" in defenses and sanitizer_blocks(task):\r\n        return False\r\n    if \"allowlist\" in defenses and task[\"domain\"] not in ALLOWED_DOMAINS:\r\n        return False\r\n    if \"source\" in defenses and task[\"source\"] == \"page\" and task[\"action\"] in SENSITIVE:\r\n        return False\r\n    if \"confirm\" in defenses and task[\"action\"] in SENSITIVE:\r\n        return False\r\n    return True"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "ba_3.py",
    "headingEn": "main(): experiments",
    "headingKn": "main(): ಪ್ರಯೋಗಗಳು",
    "descEn": "main() compares seven defense combinations, examines the attacks that survive the allowlist and the sanitizer and counts false blocks.",
    "descKn": "main() ಏಳು ರಕ್ಷಣೆ ಸಂಯೋಜನೆಗಳನ್ನು ಹೋಲಿಸಿ, allowlist ಮತ್ತು ಸ್ಯಾನಿಟೈಸರ್ ದಾಟುವ ದಾಳಿಗಳನ್ನು ಪರೀಕ್ಷಿಸಿ ಮತ್ತು ತಪ್ಪು ನಿರ್ಬಂಧ ಎಣಿಸುತ್ತದೆ.",
    "code": "def main():\r\n    r = random.Random(1)\r\n    attacks, legit = gen_attacks(r), gen_legit(r)\r\n    combos = [\r\n        (\"no defenses\", set()),\r\n        (\"sanitizer only\", {\"sanitizer\"}),\r\n        (\"allowlist only\", {\"allowlist\"}),\r\n        (\"source tracking only\", {\"source\"}),\r\n        (\"confirm sensitive only\", {\"confirm\"}),\r\n        (\"allowlist + source\", {\"allowlist\", \"source\"}),\r\n        (\"all four\", {\"sanitizer\", \"allowlist\", \"source\", \"confirm\"}),\r\n    ]\r\n    section(\"1. Genuinely measuring: 400 attacks and 200 legitimate tasks under each combination\")\r\n    print(f\"{'defenses':24} {'attacks executed':>17} {'legit tasks executed':>21}\")\r\n    for name, d in combos:\r\n        a = sum(allowed(t, d) for t in attacks)\r\n        l = sum(allowed(t, d) for t in legit)\r\n        print(f\"{name:24} {a:7d}/400 {a / 400:6.3f} {l:9d}/200 {l / 200:6.3f}\")\r\n    print(\"each defense removes a different slice of the attacks, the sanitizer alone leaves the disguised ones and the memory replays, the allowlist leaves the attacks aimed at an allowed domain, and source tracking blocks every sensitive action that came from page content; the price is paid in legitimate tasks, which confirmation of every sensitive action also holds back\")\r\n\r\n    section(\"2. Genuinely measuring: the attacks that survive the allowlist alone\")\r\n    survivors = [t for t in attacks if allowed(t, {\"allowlist\"})]\r\n    print(f\"survivors: {len(survivors)} | all aimed at an allowed domain: {all(t['domain'] in ALLOWED_DOMAINS for t in survivors)}\")\r\n    print(\"these attacks send data to docs.example, a domain on the allowlist, so a destination check cannot tell them from legitimate use, and what separates them is that the instruction came from page content, which is exactly what source tracking records\")\r\n\r\n    section(\"3. Genuinely measuring: attacks that survive the sanitizer alone, by channel and disguise\")\r\n    surv = [t for t in attacks if allowed(t, {\"sanitizer\"})]\r\n    for ch in (\"visible\", \"hidden\", \"fragment\", \"memory\"):\r\n        sub = [t for t in surv if t[\"channel\"] == ch]\r\n        print(f\"{ch:9}: {len(sub):3d} survive | disguised among them {sum(t['disguised'] for t in sub):3d}\")\r\n    print(\"every memory replay survives because the sanitizer in this lab only inspects the page being read, and in the other channels only the disguised attacks survive, which matches the pattern-list limit measured in part 2; the 50 percent disguise rate is invented\")\r\n\r\n    section(\"4. Genuinely measuring: layering by false blocks on legitimate work\")\r\n    for name, d in combos[1:]:\r\n        blocked = sum(not allowed(t, d) for t in legit)\r\n        print(f\"{name:24} blocks {blocked:3d} of 200 legitimate tasks\")\r\n    print(\"source tracking blocks no legitimate task here because the legitimate tasks come from the user, which is the situation the design relies on; confirmation holds back 127 of 200 of them (63.5 percent), because sensitive reports are the commonest legitimate action in the generated mix, so it protects well and costs the user a prompt each time\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely measuring: 400 attacks and 200 legitimate tasks under each combination ---\ndefenses                  attacks executed  legit tasks executed\nno defenses                  400/400  1.000       200/200  1.000\nsanitizer only               240/400  0.600       200/200  1.000\nallowlist only               154/400  0.385       200/200  1.000\nsource tracking only           0/400  0.000       200/200  1.000\nconfirm sensitive only         0/400  0.000        73/200  0.365\nallowlist + source             0/400  0.000       200/200  1.000\nall four                       0/400  0.000        73/200  0.365\neach defense removes a different slice of the attacks, the sanitizer alone leaves the disguised ones and the memory replays, the allowlist leaves the attacks aimed at an allowed domain, and source tracking blocks every sensitive action that came from page content; the price is paid in legitimate tasks, which confirmation of every sensitive action also holds back\n\n--- 2. Genuinely measuring: the attacks that survive the allowlist alone ---\nsurvivors: 154 | all aimed at an allowed domain: True\nthese attacks send data to docs.example, a domain on the allowlist, so a destination check cannot tell them from legitimate use, and what separates them is that the instruction came from page content, which is exactly what source tracking records\n\n--- 3. Genuinely measuring: attacks that survive the sanitizer alone, by channel and disguise ---\nvisible  :  45 survive | disguised among them  45\nhidden   :  53 survive | disguised among them  53\nfragment :  49 survive | disguised among them  49\nmemory   :  93 survive | disguised among them  44\nevery memory replay survives because the sanitizer in this lab only inspects the page being read, and in the other channels only the disguised attacks survive, which matches the pattern-list limit measured in part 2; the 50 percent disguise rate is invented\n\n--- 4. Genuinely measuring: layering by false blocks on legitimate work ---\nsanitizer only           blocks   0 of 200 legitimate tasks\nallowlist only           blocks   0 of 200 legitimate tasks\nsource tracking only     blocks   0 of 200 legitimate tasks\nconfirm sensitive only   blocks 127 of 200 legitimate tasks\nallowlist + source       blocks   0 of 200 legitimate tasks\nall four                 blocks 127 of 200 legitimate tasks\nsource tracking blocks no legitimate task here because the legitimate tasks come from the user, which is the situation the design relies on; confirmation holds back 127 of 200 of them (63.5 percent), because sensitive reports are the commonest legitimate action in the generated mix, so it protects well and costs the user a prompt each time"
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
    "headingEn": "Genuinely Found: The Combinations",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಸಂಯೋಜನೆಗಳು",
    "bodyEn": "Section 1: with no defenses 400 of 400 attacks and 200 of 200 legitimate tasks executed; the sanitizer alone let 240 attacks and all 200 legitimate tasks through, the allowlist alone 154 and 200, source tracking alone 0 and 200, confirmation alone 0 attacks but only 73 of 200 legitimate tasks, allowlist plus source tracking 0 and 200, and all four 0 and 73.",
    "bodyKn": "ವಿಭಾಗ 1: ರಕ್ಷಣೆ ಇಲ್ಲದೆ 400 ರಲ್ಲಿ 400 ದಾಳಿ ಮತ್ತು 200 ರಲ್ಲಿ 200 ಕಾನೂನುಬದ್ಧ ಕಾರ್ಯ ಕಾರ್ಯಗತವಾದವು; ಸ್ಯಾನಿಟೈಸರ್ ಮಾತ್ರ 240 ದಾಳಿ ಮತ್ತು ಎಲ್ಲಾ 200 ಕಾನೂನುಬದ್ಧ ಕಾರ್ಯ ಹಾದುಹೋಗಲು ಬಿಟ್ಟಿತು, allowlist ಮಾತ್ರ 154 ಮತ್ತು 200, ಮೂಲ ಟ್ರ್ಯಾಕಿಂಗ್ ಮಾತ್ರ 0 ಮತ್ತು 200, ದೃಢೀಕರಣ ಮಾತ್ರ 0 ದಾಳಿ ಆದರೆ 200 ರಲ್ಲಿ 73 ಕಾನೂನುಬದ್ಧ ಕಾರ್ಯ ಮಾತ್ರ, allowlist ಜೊತೆ ಮೂಲ ಟ್ರ್ಯಾಕಿಂಗ್ 0 ಮತ್ತು 200, ಮತ್ತು ನಾಲ್ಕೂ 0 ಮತ್ತು 73."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Survivors and the Cost",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಉಳಿದವು ಮತ್ತು ವೆಚ್ಚ",
    "bodyEn": "Section 2: all 154 attacks that survived the allowlist were aimed at an allowed domain. Section 3: attacks that survived the sanitizer were 45 visible, 53 hidden, 49 fragment and 93 memory, all of the first three disguised and 44 of the memory ones. Section 4: confirmation blocked 127 of 200 legitimate tasks, and every other layer blocked 0.",
    "bodyKn": "ವಿಭಾಗ 2: allowlist ದಾಟಿದ ಎಲ್ಲಾ 154 ದಾಳಿಗಳು ಅನುಮತಿಸಿದ ಡೊಮೇನ್ ಗುರಿಯಾಗಿದ್ದವು. ವಿಭಾಗ 3: ಸ್ಯಾನಿಟೈಸರ್ ದಾಟಿದ ದಾಳಿಗಳು 45 ಗೋಚರ, 53 ಅಡಗಿದ, 49 ತುಣುಕು ಮತ್ತು 93 ಮೆಮೊರಿ, ಮೊದಲ ಮೂರರ ಎಲ್ಲವೂ ಮರೆಮಾಚಿದ್ದು ಮತ್ತು ಮೆಮೊರಿಯವುಗಳಲ್ಲಿ 44. ವಿಭಾಗ 4: ದೃಢೀಕರಣ 200 ಕಾನೂನುಬದ್ಧ ಕಾರ್ಯಗಳಲ್ಲಿ 127 ನಿರ್ಬಂಧಿಸಿತು, ಮತ್ತು ಉಳಿದ ಪ್ರತಿ ಪದರ 0 ನಿರ್ಬಂಧಿಸಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "The strongest layer here does not try to read the text at all, it asks where the request came from, and the layers that look at text or destinations alone leave attacks that look like legitimate use.",
    "bodyKn": "ಇಲ್ಲಿನ ಅತ್ಯಂತ ಬಲವಾದ ಪದರ ಪಠ್ಯ ಓದಲು ಪ್ರಯತ್ನಿಸುವುದೇ ಇಲ್ಲ, ವಿನಂತಿ ಎಲ್ಲಿಂದ ಬಂತು ಎಂದು ಕೇಳುತ್ತದೆ, ಮತ್ತು ಪಠ್ಯ ಅಥವಾ ಗಮ್ಯಸ್ಥಾನಗಳನ್ನು ಮಾತ್ರ ನೋಡುವ ಪದರಗಳು ಕಾನೂನುಬದ್ಧ ಬಳಕೆಯಂತೆ ಕಾಣುವ ದಾಳಿಗಳನ್ನು ಬಿಡುತ್ತವೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"an allowlist of domains is enough.\" The 154 attacks that passed it all targeted an allowed domain.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಡೊಮೇನ್‌ಗಳ allowlist ಸಾಕು.\" ಅದನ್ನು ದಾಟಿದ 154 ದಾಳಿಗಳು ಎಲ್ಲವೂ ಅನುಮತಿಸಿದ ಡೊಮೇನ್ ಗುರಿಯಾಗಿದ್ದವು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Allowlist: the only destinations permitted. Source tracking: recording whether an instruction came from the user or from content. Confirmation: a person approves before a sensitive action. Layering: using several checks together.",
    "bodyKn": "Allowlist: ಅನುಮತಿಸಿದ ಏಕೈಕ ಗಮ್ಯಸ್ಥಾನಗಳು. Source tracking: ಸೂಚನೆ ಬಳಕೆದಾರರಿಂದ ಅಥವಾ ವಿಷಯದಿಂದ ಬಂತೇ ದಾಖಲಿಸುವುದು. Confirmation: ಸೂಕ್ಷ್ಮ ಕ್ರಿಯೆಗೆ ಮೊದಲು ವ್ಯಕ್ತಿ ಅನುಮೋದಿಸುವುದು. Layering: ಹಲವು ಪರಿಶೀಲನೆಗಳನ್ನು ಒಟ್ಟಿಗೆ ಬಳಸುವುದು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) The sanitizer alone left 240 of 400 attacks. 2) The allowlist alone left 154. 3) Source tracking alone left 0 and blocked no legitimate task. 4) Confirmation also left 0 but blocked 127 of 200 legitimate tasks. 5) The workloads are scripted and invented.",
    "bodyKn": "1) ಸ್ಯಾನಿಟೈಸರ್ ಮಾತ್ರ 400 ರಲ್ಲಿ 240 ದಾಳಿ ಬಿಟ್ಟಿತು. 2) allowlist ಮಾತ್ರ 154 ಬಿಟ್ಟಿತು. 3) ಮೂಲ ಟ್ರ್ಯಾಕಿಂಗ್ ಮಾತ್ರ 0 ಬಿಟ್ಟು ಯಾವ ಕಾನೂನುಬದ್ಧ ಕಾರ್ಯ ನಿರ್ಬಂಧಿಸಲಿಲ್ಲ. 4) ದೃಢೀಕರಣವೂ 0 ಬಿಟ್ಟು ಆದರೆ 200 ಕಾನೂನುಬದ್ಧ ಕಾರ್ಯಗಳಲ್ಲಿ 127 ನಿರ್ಬಂಧಿಸಿತು. 5) ಕೆಲಸಭಾರಗಳು ಸ್ಕ್ರಿಪ್ಟ್ ಮಾಡಿದ ಮತ್ತು ಕಲ್ಪಿತ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "How many of 400 attacks executed under the sanitizer alone?",
      "qKn": "ಸ್ಯಾನಿಟೈಸರ್ ಮಾತ್ರದಲ್ಲಿ 400 ದಾಳಿಗಳಲ್ಲಿ ಎಷ್ಟು ಕಾರ್ಯಗತವಾದವು?",
      "opts": [
       "240",
       "154",
       "0",
       "400"
      ],
      "optsKn": [
       "240",
       "154",
       "0",
       "400"
      ],
      "correct": 0
     },
     {
      "q": "How many attacks executed under the allowlist alone?",
      "qKn": "allowlist ಮಾತ್ರದಲ್ಲಿ ಎಷ್ಟು ದಾಳಿಗಳು ಕಾರ್ಯಗತವಾದವು?",
      "opts": [
       "154",
       "240",
       "0",
       "73"
      ],
      "optsKn": [
       "154",
       "240",
       "0",
       "73"
      ],
      "correct": 0
     },
     {
      "q": "Why did the allowlist survivors get through?",
      "qKn": "allowlist ಉಳಿದವು ಹೇಗೆ ದಾಟಿದವು?",
      "opts": [
       "They targeted an allowed domain",
       "They were hidden",
       "The sanitizer helped",
       "They came from the user"
      ],
      "optsKn": [
       "ಅವು ಅನುಮತಿಸಿದ ಡೊಮೇನ್ ಗುರಿಯಾಗಿದ್ದವು",
       "ಅವು ಅಡಗಿದ್ದವು",
       "ಸ್ಯಾನಿಟೈಸರ್ ಸಹಾಯ ಮಾಡಿತು",
       "ಅವು ಬಳಕೆದಾರರಿಂದ ಬಂದವು"
      ],
      "correct": 0
     },
     {
      "q": "How many legitimate tasks did confirmation block?",
      "qKn": "ದೃಢೀಕರಣ ಎಷ್ಟು ಕಾನೂನುಬದ್ಧ ಕಾರ್ಯ ನಿರ್ಬಂಧಿಸಿತು?",
      "opts": [
       "127 of 200",
       "0 of 200",
       "73 of 200",
       "154 of 200"
      ],
      "optsKn": [
       "200 ರಲ್ಲಿ 127",
       "200 ರಲ್ಲಿ 0",
       "200 ರಲ್ಲಿ 73",
       "200 ರಲ್ಲಿ 154"
      ],
      "correct": 0
     },
     {
      "q": "What does source tracking rely on that makes it work here?",
      "qKn": "ಇಲ್ಲಿ ಮೂಲ ಟ್ರ್ಯಾಕಿಂಗ್ ಕೆಲಸ ಮಾಡಲು ಅದು ಯಾವುದರ ಮೇಲೆ ಅವಲಂಬಿತ?",
      "opts": [
       "Legitimate tasks come from the user and attacks from page content",
       "Reading the text of each page",
       "The sanitizer catching disguises",
       "A larger allowlist"
      ],
      "optsKn": [
       "ಕಾನೂನುಬದ್ಧ ಕಾರ್ಯಗಳು ಬಳಕೆದಾರರಿಂದ ಮತ್ತು ದಾಳಿಗಳು ಪುಟ ವಿಷಯದಿಂದ ಬರುತ್ತವೆ",
       "ಪ್ರತಿ ಪುಟದ ಪಠ್ಯ ಓದುವುದು",
       "ಸ್ಯಾನಿಟೈಸರ್ ಮರೆಮಾಚುವಿಕೆ ಹಿಡಿಯುವುದು",
       "ದೊಡ್ಡ allowlist"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
