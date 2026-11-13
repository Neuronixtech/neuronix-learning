module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6266020ed05b32155f",
 "order": 1,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Orchestration Patterns: Supervisor, Swarm, Hierarchical (Part 2 of 3) — Swarm and Handoffs",
 "titleKn": "ಆರ್ಕೆಸ್ಟ್ರೇಶನ್ ಮಾದರಿಗಳು: Supervisor, Swarm, Hierarchical (ಭಾಗ 2 / 3) — Swarm ಮತ್ತು Handoffs",
 "desc": "Build a peer-to-peer swarm with a hop limit, reproduce a bouncing handoff, compare the hop limit with cycle detection and count coordination edges.",
 "descKn": "Hop ಮಿತಿ ಇರುವ peer-to-peer swarm ನಿರ್ಮಿಸಿ, bouncing handoff ಪುನರುತ್ಪಾದಿಸಿ, hop ಮಿತಿಯನ್ನು ಚಕ್ರ ಪತ್ತೆಯೊಂದಿಗೆ ಹೋಲಿಸಿ ಮತ್ತು ಸಂಯೋಜನೆ edges ಎಣಿಸಿ.",
 "objectives": [
  "Define a swarm and a handoff.",
  "Reproduce a bouncing handoff.",
  "Bound execution with a hop limit.",
  "Compare hop limits with cycle detection.",
  "Count coordination edges."
 ],
 "objectivesKn": [
  "Swarm ಮತ್ತು handoff ವ್ಯಾಖ್ಯಾನಿಸಿ.",
  "Bouncing handoff ಪುನರುತ್ಪಾದಿಸಿ.",
  "Hop ಮಿತಿಯಿಂದ ಕಾರ್ಯಗತ ಮಿತಿಗೊಳಿಸಿ.",
  "Hop ಮಿತಿಗಳನ್ನು ಚಕ್ರ ಪತ್ತೆಯೊಂದಿಗೆ ಹೋಲಿಸಿ.",
  "ಸಂಯೋಜನೆ edges ಎಣಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Orchestration Patterns: Supervisor, Swarm, Hierarchical (Part 2 of 3)",
    "textKn": "ಆರ್ಕೆಸ್ಟ್ರೇಶನ್ ಮಾದರಿಗಳು: Supervisor, Swarm, Hierarchical (ಭಾಗ 2 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 2 of 3: a swarm with direct handoffs, a hop limit, a bouncing-handoff failure and coordination edges. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind orchestration patterns (supervisor-worker, swarm, hierarchical and debate), not the real software, and every agent is a scripted keyword function or a seeded simulation with an assumed accuracy, so no language model and no real multi-agent system is measured, so no real LLM behaviour is measured. The pasted part was cut off by a size limit before it finished, so its later sections are rebuilt from its own outline and the neighbouring parts. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 2ನೆಯದು: ನೇರ handoffs, hop ಮಿತಿ, bouncing-handoff ವೈಫಲ್ಯ ಮತ್ತು ಸಂಯೋಜನೆ edges ಇರುವ swarm. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು ಆರ್ಕೆಸ್ಟ್ರೇಶನ್ ಮಾದರಿಗಳು (supervisor-worker, swarm, hierarchical ಮತ್ತು debate) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಪ್ರತಿ agent ಸ್ಕ್ರಿಪ್ಟ್ ಕೀವರ್ಡ್ ಫಂಕ್ಷನ್ ಅಥವಾ ಊಹಿಸಿದ ನಿಖರತೆಯ seeded ಅನುಕರಣೆ, ಆದ್ದರಿಂದ ಯಾವುದೇ ಭಾಷಾ ಮಾದರಿ ಮತ್ತು ನಿಜ ಬಹು-agent ವ್ಯವಸ್ಥೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಅಂಟಿಸಿದ ಭಾಗ ಮುಗಿಯುವ ಮುನ್ನ ಗಾತ್ರ ಮಿತಿಯಿಂದ ಕತ್ತರಿಸಲ್ಪಟ್ಟಿತ್ತು, ಆದ್ದರಿಂದ ಅದರ ನಂತರದ ವಿಭಾಗಗಳು ಅದರ ಸ್ವಂತ ರೂಪರೇಖೆ ಮತ್ತು ನೆರೆಯ ಭಾಗಗಳಿಂದ ಮರುನಿರ್ಮಿಸಲಾಗಿದೆ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Removing the Central Router",
    "textKn": "ಕೇಂದ್ರ Router ತೆಗೆಯುವುದು",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Ownership Moves Between Peers",
    "headingKn": "ಮಾಲೀಕತ್ವ peers ನಡುವೆ ಚಲಿಸುತ್ತದೆ",
    "bodyEn": "In a swarm each agent decides locally whether to answer or hand the task to a named peer. There is no permanent supervisor, so routing steps can disappear, but the path is harder to predict. This part builds a three-agent swarm with a hop limit, shows two locally sensible agents bouncing a task forever, compares the hop limit with cycle detection, counts coordination edges as peers are added and checks what happens when an agent names a peer that does not exist.",
    "bodyKn": "Swarm ನಲ್ಲಿ ಪ್ರತಿ agent ಉತ್ತರಿಸಬೇಕೇ ಅಥವಾ ಹೆಸರಿಸಿದ peer ಗೆ ಕಾರ್ಯ ಒಪ್ಪಿಸಬೇಕೇ ಎಂದು ಸ್ಥಳೀಯವಾಗಿ ನಿರ್ಧರಿಸುತ್ತದೆ. ಶಾಶ್ವತ supervisor ಇಲ್ಲ, ಆದ್ದರಿಂದ routing ಹಂತಗಳು ಮಾಯವಾಗಬಹುದು, ಆದರೆ ಮಾರ್ಗ ಊಹಿಸಲು ಕಷ್ಟ. ಈ ಭಾಗ hop ಮಿತಿ ಇರುವ ಮೂರು-agent swarm ನಿರ್ಮಿಸಿ, ಸ್ಥಳೀಯವಾಗಿ ಸಮಂಜಸ ಎರಡು agents ಕಾರ್ಯವನ್ನು ಎಂದೆಂದಿಗೂ ಪುಟಿಸುವುದನ್ನು ತೋರಿಸಿ, hop ಮಿತಿಯನ್ನು ಚಕ್ರ ಪತ್ತೆಯೊಂದಿಗೆ ಹೋಲಿಸಿ, peers ಸೇರಿಸಿದಂತೆ ಸಂಯೋಜನೆ edges ಎಣಿಸಿ, ಅಸ್ತಿತ್ವದಲ್ಲಿಲ್ಲದ peer ಅನ್ನು agent ಹೆಸರಿಸಿದರೆ ಏನಾಗುತ್ತದೆ ಎಂದು ಪರಿಶೀಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Peers Handing Off",
    "headingKn": "ಪರಸ್ಪರ Handoff ಮಾಡುವ Peers",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">Swarm</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">triage</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">entry peer</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">billing</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">peer</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">support</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">peer</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">hop limit</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">bounds bouncing</text><path d=\"M90,47 H110 M190,47 H210 M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">ownership moves from peer to peer</text></svg>",
    "captionEn": "No permanent router; the runtime bounds the hops.",
    "captionKn": "ಶಾಶ್ವತ router ಇಲ್ಲ; runtime hops ಅನ್ನು ಮಿತಿಗೊಳಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Supervisor versus swarm",
    "headingKn": "Supervisor ವಿರುದ್ಧ swarm",
    "headers": [
     "Property",
     "Supervisor",
     "Swarm"
    ],
    "rows": [
     [
      "Who routes",
      "one central agent",
      "each agent, locally"
     ],
     [
      "Routing steps",
      "one per request",
      "zero, but one per handoff"
     ],
     [
      "Failure of the router",
      "everything stops",
      "no single router to fail"
     ],
     [
      "Worst case",
      "misrouting",
      "loops between peers"
     ],
     [
      "Safeguard",
      "escalation",
      "hop limit and peer registry"
     ]
    ]
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Building and Testing the Pattern",
    "textKn": "ಮಾದರಿ ನಿರ್ಮಿಸಿ ಪರೀಕ್ಷಿಸುವುದು",
    "level": "H2"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "orch_2.py",
    "headingEn": "Three peer agents and the swarm runner",
    "headingKn": "ಮೂರು peer agents ಮತ್ತು swarm runner",
    "descEn": "Each agent returns either (\"final\", answer) or (\"handoff\", peer). run_swarm loops up to max_hops, optionally detects a repeated agent, refuses an unknown peer and records every step in a Trace.",
    "descKn": "ಪ್ರತಿ agent (\"final\", answer) ಅಥವಾ (\"handoff\", peer) ಮರಳಿಸುತ್ತದೆ. run_swarm max_hops ವರೆಗೆ ಲೂಪ್ ಮಾಡಿ, ಐಚ್ಛಿಕವಾಗಿ ಪುನರಾವರ್ತಿತ agent ಪತ್ತೆ ಮಾಡಿ, ಅಜ್ಞಾತ peer ತಿರಸ್ಕರಿಸಿ ಪ್ರತಿ ಹಂತವನ್ನು Trace ನಲ್ಲಿ ದಾಖಲಿಸುತ್ತದೆ.",
    "code": "def triage_agent(task):\n    t = task.text.lower()\n    if \"refund\" in t or \"charged\" in t:\n        return (\"handoff\", \"billing\")\n    if \"crash\" in t or \"error\" in t:\n        return (\"handoff\", \"support\")\n    return (\"final\", \"triage answered: \" + task.text[:24])\n\n\ndef billing_agent(task):\n    if \"error\" in task.text.lower():\n        return (\"handoff\", \"support\")\n    return (\"final\", \"billing resolved: \" + task.text[:24])\n\n\ndef support_agent(task):\n    if \"refund\" in task.text.lower():\n        return (\"handoff\", \"billing\")\n    return (\"final\", \"support resolved: \" + task.text[:24])\n\n\nAGENTS = {\"triage\": triage_agent, \"billing\": billing_agent, \"support\": support_agent}\n\n\ndef run_swarm(task, agents=AGENTS, entry=\"triage\", max_hops=4, detect_cycles=False):\n    trace = Trace()\n    trace.add(\"user\", \"task\", task.text)\n    current, visited = entry, []\n    for hop in range(1, max_hops + 1):\n        trace.add(current, \"run\", f\"hop {hop}\")\n        if detect_cycles and current in visited:\n            trace.add(current, \"CYCLE\", f\"already visited {visited}\")\n            return \"stopped: cycle detected\", trace\n        visited.append(current)\n        kind, value = agents[current](task)\n        if kind == \"final\":\n            trace.add(current, \"final\", value)\n            return value, trace\n        if value not in agents:\n            trace.add(current, \"BAD PEER\", value)\n            return \"stopped: unknown peer\", trace\n        trace.add(current, \"handoff\", f\"-> {value}\")\n        current = value\n    trace.add(\"runtime\", \"HOP LIMIT\", f\"{max_hops} hops used\")\n    return \"stopped: hop limit\", trace"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "orch_2.py",
    "headingEn": "main(): six experiments",
    "headingKn": "main(): ಆರು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() shows straight paths, the bouncing task, hop limit versus cycle detection, the edge table, an unknown peer and a comparison with the supervisor design.",
    "descKn": "main() ನೇರ ಮಾರ್ಗಗಳು, bouncing ಕಾರ್ಯ, hop ಮಿತಿ ವಿರುದ್ಧ ಚಕ್ರ ಪತ್ತೆ, edge ಕೋಷ್ಟಕ, ಅಜ್ಞಾತ peer ಮತ್ತು supervisor ವಿನ್ಯಾಸದೊಂದಿಗೆ ಹೋಲಿಕೆ ತೋರಿಸುತ್ತದೆ.",
    "code": "def section(t):\n    print(f\"\\n--- {t} ---\")\n\n\ndef main():\n    section(\"1. Genuinely checking: a straight swarm path and a swarm that ends at the entry agent\")\n    for text in (\"I was charged twice and need a refund\", \"The checkout shows an error\", \"Tell me about plans\"):\n        r, tr = run_swarm(Task(text))\n        print(f\"task: {text}\")\n        tr.show()\n        print(f\"  -> {r}\")\n    print(\"the entry agent is only the first peer, not a permanent supervisor; ownership moves with each handoff and the last agent answers\")\n\n    section(\"2. Genuinely checking: a bouncing handoff between two peers\")\n    bounce = Task(\"My refund request had an error\")\n    r, tr = run_swarm(bounce, max_hops=6)\n    tr.show()\n    print(f\"  -> {r}\")\n    print(\"billing hands this task to support because of the word 'error', and support hands it straight back because of the word 'refund'; each agent is locally sensible and together they never finish, so only the hop limit stopped it\")\n\n    section(\"3. Genuinely measuring: the hop limit versus cycle detection on the bouncing task\")\n    for label, kw in ((\"hop limit 4 only\", dict(max_hops=4)), (\"hop limit 20 only\", dict(max_hops=20)), (\"cycle detection, limit 20\", dict(max_hops=20, detect_cycles=True))):\n        r, tr = run_swarm(bounce, **kw)\n        runs = sum(1 for e in tr.events if e[1] == \"run\")\n        print(f\"{label:28} agent runs={runs:2} result={r}\")\n    print(\"a larger hop limit burns more agent runs before stopping; cycle detection stops at the first repeat but a task that legitimately revisits an agent would also be cut off, so the limit is a bound and the detector is a heuristic\")\n\n    section(\"4. Genuinely measuring: coordination edges as peers are added\")\n    print(f\"{'agents':>7} {'hub edges (N)':>14} {'full mesh edges N(N-1)/2':>26} {'chain edges (N-1)':>19}\")\n    for n in (3, 5, 10, 30, 100):\n        print(f\"{n:>7} {n:>14} {n * (n - 1) // 2:>26} {n - 1:>19}\")\n    print(\"an unrestricted peer graph can reach N(N-1)/2 possible handoff edges, which is the O(N^2) worry; a real swarm limits each agent to a few peers, so the count depends on the peer registry you write\")\n\n    section(\"5. Genuinely checking: an agent naming a peer that does not exist\")\n    broken = dict(AGENTS)\n    broken[\"triage\"] = lambda t: (\"handoff\", \"legal\")\n    r, tr = run_swarm(Task(\"anything\"), agents=broken)\n    tr.show()\n    print(f\"  -> {r}\")\n    print(\"without a registry check the runtime would raise a KeyError; here the unknown peer is refused and recorded, which is what a peer registry is for\")\n\n    section(\"6. Genuinely measuring: model calls and hops against the supervisor design on four tasks\")\n    tasks = [\"I was charged twice and need a refund\", \"The checkout shows an error\", \"Tell me about plans\", \"My refund request had an error\"]\n    print(f\"{'task':40} {'supervisor calls':>17} {'swarm agent runs':>17} {'swarm result'}\")\n    for text in tasks:\n        sc, _ = run_supervisor_calls(Task(text))\n        r, tr = run_swarm(Task(text), max_hops=6)\n        runs = sum(1 for e in tr.events if e[1] == \"run\")\n        print(f\"{text:40} {sc:>17} {runs:>17} {r}\")\n    print(\"on the three tasks that finished, the swarm used 1 to 2 agent runs where the supervisor design used 1 model call plus a worker, and it removes the central routing step; counting runs and calls is not the same unit, so this is not a cost comparison, and on the bouncing task the swarm used its whole hop budget (6), so a short good case does not bound the worst case\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely checking: a straight swarm path and a swarm that ends at the entry agent ---\ntask: I was charged twice and need a refund\n   1. user       task      I was charged twice and need a refund\n   2. triage     run       hop 1\n   3. triage     handoff   -> billing\n   4. billing    run       hop 2\n   5. billing    final     billing resolved: I was charged twice and \n  -> billing resolved: I was charged twice and \ntask: The checkout shows an error\n   1. user       task      The checkout shows an error\n   2. triage     run       hop 1\n   3. triage     handoff   -> support\n   4. support    run       hop 2\n   5. support    final     support resolved: The checkout shows an er\n  -> support resolved: The checkout shows an er\ntask: Tell me about plans\n   1. user       task      Tell me about plans\n   2. triage     run       hop 1\n   3. triage     final     triage answered: Tell me about plans\n  -> triage answered: Tell me about plans\nthe entry agent is only the first peer, not a permanent supervisor; ownership moves with each handoff and the last agent answers\n\n--- 2. Genuinely checking: a bouncing handoff between two peers ---\n   1. user       task      My refund request had an error\n   2. triage     run       hop 1\n   3. triage     handoff   -> billing\n   4. billing    run       hop 2\n   5. billing    handoff   -> support\n   6. support    run       hop 3\n   7. support    handoff   -> billing\n   8. billing    run       hop 4\n   9. billing    handoff   -> support\n  10. support    run       hop 5\n  11. support    handoff   -> billing\n  12. billing    run       hop 6\n  13. billing    handoff   -> support\n  14. runtime    HOP LIMIT 6 hops used\n  -> stopped: hop limit\nbilling hands this task to support because of the word 'error', and support hands it straight back because of the word 'refund'; each agent is locally sensible and together they never finish, so only the hop limit stopped it\n\n--- 3. Genuinely measuring: the hop limit versus cycle detection on the bouncing task ---\nhop limit 4 only             agent runs= 4 result=stopped: hop limit\nhop limit 20 only            agent runs=20 result=stopped: hop limit\ncycle detection, limit 20    agent runs= 4 result=stopped: cycle detected\na larger hop limit burns more agent runs before stopping; cycle detection stops at the first repeat but a task that legitimately revisits an agent would also be cut off, so the limit is a bound and the detector is a heuristic\n\n--- 4. Genuinely measuring: coordination edges as peers are added ---\n agents  hub edges (N)   full mesh edges N(N-1)/2   chain edges (N-1)\n      3              3                          3                   2\n      5              5                         10                   4\n     10             10                         45                   9\n     30             30                        435                  29\n    100            100                       4950                  99\nan unrestricted peer graph can reach N(N-1)/2 possible handoff edges, which is the O(N^2) worry; a real swarm limits each agent to a few peers, so the count depends on the peer registry you write\n\n--- 5. Genuinely checking: an agent naming a peer that does not exist ---\n   1. user       task      anything\n   2. triage     run       hop 1\n   3. triage     BAD PEER  legal\n  -> stopped: unknown peer\nwithout a registry check the runtime would raise a KeyError; here the unknown peer is refused and recorded, which is what a peer registry is for\n\n--- 6. Genuinely measuring: model calls and hops against the supervisor design on four tasks ---\ntask                                      supervisor calls  swarm agent runs swarm result\nI was charged twice and need a refund                    1                 2 billing resolved: I was charged twice and \nThe checkout shows an error                              1                 2 support resolved: The checkout shows an er\nTell me about plans                                      1                 1 triage answered: Tell me about plans\nMy refund request had an error                           1                 6 stopped: hop limit\non the three tasks that finished, the swarm used 1 to 2 agent runs where the supervisor design used 1 model call plus a worker, and it removes the central routing step; counting runs and calls is not the same unit, so this is not a cost comparison, and on the bouncing task the swarm used its whole hop budget (6), so a short good case does not bound the worst case"
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Experiment Walkthrough",
    "textKn": "Experiment ನಡೆದಾಟ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 1: A straight swarm path and a swarm that ends at the entry agent",
    "headingKn": "ಪ್ರಯೋಗ 1: A straight swarm path and a swarm that ends at the entry agent",
    "bodyEn": "What it ran: A straight swarm path and a swarm that ends at the entry agent. What the lab concluded: the entry agent is only the first peer, not a permanent supervisor; ownership moves with each handoff and the last agent answers",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A straight swarm path and a swarm that ends at the entry agent. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the entry agent is only the first peer, not a permanent supervisor; ownership moves with each handoff and the last agent answers"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. Genuinely checking: a straight swarm path and a swarm that ends at the entry agent ---\ntask: I was charged twice and need a refund\n   1. user       task      I was charged twice and need a refund\n   2. triage     run       hop 1\n   3. triage     handoff   -> billing\n   4. billing    run       hop 2\n   5. billing    final     billing resolved: I was charged twice and\n  -> billing resolved: I was charged twice and\ntask: The checkout shows an error\n   1. user       task      The checkout shows an error\n   2. triage     run       hop 1\n   3. triage     handoff   -> support\n   4. support    run       hop 2\n   5. support    final     support resolved: The checkout shows an er\n  -> support resolved: The checkout shows an er\n…"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: A bouncing handoff between two peers",
    "headingKn": "ಪ್ರಯೋಗ 2: A bouncing handoff between two peers",
    "bodyEn": "What it ran: A bouncing handoff between two peers. What the lab concluded: billing hands this task to support because of the word 'error', and support hands it straight back because of the word 'refund'; each agent is locally sensible and together they never finish, so only the hop limit stopped it",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A bouncing handoff between two peers. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): billing hands this task to support because of the word 'error', and support hands it straight back because of the word 'refund'; each agent is locally sensible and together they never finish, so only the hop limit stopped it"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely checking: a bouncing handoff between two peers ---\n   1. user       task      My refund request had an error\n   2. triage     run       hop 1\n   3. triage     handoff   -> billing\n   4. billing    run       hop 2\n   5. billing    handoff   -> support\n   6. support    run       hop 3\n   7. support    handoff   -> billing\n   8. billing    run       hop 4\n   9. billing    handoff   -> support\n  10. support    run       hop 5\n  11. support    handoff   -> billing\n  12. billing    run       hop 6\n  13. billing    handoff   -> support\n  14. runtime    HOP LIMIT 6 hops used\n…"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: The hop limit versus cycle detection on the bouncing task",
    "headingKn": "ಪ್ರಯೋಗ 3: The hop limit versus cycle detection on the bouncing task",
    "bodyEn": "What it ran: The hop limit versus cycle detection on the bouncing task. What the lab concluded: a larger hop limit burns more agent runs before stopping; cycle detection stops at the first repeat but a task that legitimately revisits an agent would also be cut off, so the limit is a bound and the detector is a heuristic",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: The hop limit versus cycle detection on the bouncing task. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a larger hop limit burns more agent runs before stopping; cycle detection stops at the first repeat but a task that legitimately revisits an agent would also be cut off, so the limit is a bound and the detector is a heuristic"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely measuring: the hop limit versus cycle detection on the bouncing task ---\nhop limit 4 only             agent runs= 4 result=stopped: hop limit\nhop limit 20 only            agent runs=20 result=stopped: hop limit\ncycle detection, limit 20    agent runs= 4 result=stopped: cycle detected"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 4: Coordination edges as peers are added",
    "headingKn": "ಪ್ರಯೋಗ 4: Coordination edges as peers are added",
    "bodyEn": "What it ran: Coordination edges as peers are added. What the lab concluded: an unrestricted peer graph can reach N(N-1)/2 possible handoff edges, which is the O(N^2) worry; a real swarm limits each agent to a few peers, so the count depends on the peer registry you write",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Coordination edges as peers are added. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): an unrestricted peer graph can reach N(N-1)/2 possible handoff edges, which is the O(N^2) worry; a real swarm limits each agent to a few peers, so the count depends on the peer registry you write"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 4. Genuinely measuring: coordination edges as peers are added ---\n agents  hub edges (N)   full mesh edges N(N-1)/2   chain edges (N-1)\n      3              3                          3                   2\n      5              5                         10                   4\n     10             10                         45                   9\n     30             30                        435                  29\n    100            100                       4950                  99"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 5: An agent naming a peer that does not exist",
    "headingKn": "ಪ್ರಯೋಗ 5: An agent naming a peer that does not exist",
    "bodyEn": "What it ran: An agent naming a peer that does not exist. What the lab concluded: without a registry check the runtime would raise a KeyError; here the unknown peer is refused and recorded, which is what a peer registry is for",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: An agent naming a peer that does not exist. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): without a registry check the runtime would raise a KeyError; here the unknown peer is refused and recorded, which is what a peer registry is for"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 5. Genuinely checking: an agent naming a peer that does not exist ---\n   1. user       task      anything\n   2. triage     run       hop 1\n   3. triage     BAD PEER  legal\n  -> stopped: unknown peer"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 6: Model calls and hops against the supervisor design on four tasks",
    "headingKn": "ಪ್ರಯೋಗ 6: Model calls and hops against the supervisor design on four tasks",
    "bodyEn": "What it ran: Model calls and hops against the supervisor design on four tasks. What the lab concluded: on the three tasks that finished, the swarm used 1 to 2 agent runs where the supervisor design used 1 model call plus a worker, and it removes the central routing step; counting runs and calls is not the same unit, so this is not a cost comparison, and on the bouncing task the swarm used its whole hop budget (6), so a short good case does not bound the worst case",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Model calls and hops against the supervisor design on four tasks. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): on the three tasks that finished, the swarm used 1 to 2 agent runs where the supervisor design used 1 model call plus a worker, and it removes the central routing step; counting runs and calls is not the same unit, so this is not a cost comparison, and on the bouncing task the swarm used its whole hop budget (6), so a short good case does not bound the worst case"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 6. Genuinely measuring: model calls and hops against the supervisor design on four tasks ---\ntask                                      supervisor calls  swarm agent runs swarm result\nI was charged twice and need a refund                    1                 2 billing resolved: I was charged twice and\nThe checkout shows an error                              1                 2 support resolved: The checkout shows an er\nTell me about plans                                      1                 1 triage answered: Tell me about plans\nMy refund request had an error                           1                 6 stopped: hop limit"
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
    "headingEn": "Genuinely Found: Two Sensible Agents Can Loop Forever",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಎರಡು ಸಮಂಜಸ agents ಎಂದೆಂದಿಗೂ ಲೂಪ್ ಮಾಡಬಹುದು",
    "bodyEn": "Section 1: three tasks ended at billing, at support and at the entry agent. Section 2: the task \"My refund request had an error\" went triage to billing, billing to support (word \"error\"), support back to billing (word \"refund\") and so on, until the runtime stopped it at the six-hop limit. Section 3 on the same task: a hop limit of 4 used 4 agent runs, a limit of 20 used 20 runs, and cycle detection with a limit of 20 stopped after 4 runs; cycle detection would also cut off a task that legitimately revisits an agent.",
    "bodyKn": "ವಿಭಾಗ 1: ಮೂರು ಕಾರ್ಯಗಳು billing ನಲ್ಲಿ, support ನಲ್ಲಿ ಮತ್ತು entry agent ನಲ್ಲಿ ಮುಗಿದವು. ವಿಭಾಗ 2: \"My refund request had an error\" ಕಾರ್ಯ triage ನಿಂದ billing ಗೆ, billing ನಿಂದ support ಗೆ (\"error\" ಪದ), support ನಿಂದ ಮತ್ತೆ billing ಗೆ (\"refund\" ಪದ) ಹೀಗೆ ಹೋಗಿ runtime ಆರು-hop ಮಿತಿಯಲ್ಲಿ ನಿಲ್ಲಿಸುವವರೆಗೆ ಮುಂದುವರಿಯಿತು. ವಿಭಾಗ 3, ಅದೇ ಕಾರ್ಯ: 4 hop ಮಿತಿ 4 agent ಓಟ, 20 ಮಿತಿ 20 ಓಟ ಬಳಸಿತು, ಮತ್ತು 20 ಮಿತಿಯೊಂದಿಗೆ ಚಕ್ರ ಪತ್ತೆ 4 ಓಟದ ನಂತರ ನಿಲ್ಲಿಸಿತು; ಕಾನೂನುಬದ್ಧವಾಗಿ agent ಅನ್ನು ಮರುಭೇಟಿ ಮಾಡುವ ಕಾರ್ಯವನ್ನೂ ಚಕ್ರ ಪತ್ತೆ ಕತ್ತರಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Edges, Peer Registry and the Comparison With a Supervisor",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Edges, peer registry ಮತ್ತು supervisor ಜೊತೆ ಹೋಲಿಕೆ",
    "bodyEn": "Section 4: possible edges for a hub are N, for a chain N-1 and for a full mesh N(N-1)/2, which reaches 4,950 at 100 agents. Section 5: an agent naming the nonexistent peer \"legal\" was stopped with \"unknown peer\" and recorded, instead of a KeyError. Section 6: on three tasks that finished the swarm used 1, 2 and 2 agent runs against the supervisor design's 1 model call plus a worker; on the bouncing task the swarm used its full budget of 6. The two numbers are different units, so this is not a cost comparison.",
    "bodyKn": "ವಿಭಾಗ 4: hub ಗೆ ಸಾಧ್ಯ edges N, chain ಗೆ N-1 ಮತ್ತು ಪೂರ್ಣ mesh ಗೆ N(N-1)/2, ಅದು 100 agents ಗೆ 4,950 ತಲುಪುತ್ತದೆ. ವಿಭಾಗ 5: ಅಸ್ತಿತ್ವದಲ್ಲಿಲ್ಲದ peer \"legal\" ಹೆಸರಿಸಿದ agent KeyError ಬದಲು \"unknown peer\" ಜೊತೆ ನಿಲ್ಲಿಸಿ ದಾಖಲಿಸಲ್ಪಟ್ಟಿತು. ವಿಭಾಗ 6: ಮುಗಿದ ಮೂರು ಕಾರ್ಯಗಳಲ್ಲಿ swarm 1, 2 ಮತ್ತು 2 agent ಓಟ ಬಳಸಿತು, supervisor ವಿನ್ಯಾಸ 1 ಮಾದರಿ ಕರೆ ಮತ್ತು worker; bouncing ಕಾರ್ಯದಲ್ಲಿ swarm ತನ್ನ ಪೂರ್ಣ 6 ಬಜೆಟ್ ಬಳಸಿತು. ಎರಡು ಸಂಖ್ಯೆಗಳು ಬೇರೆ ಘಟಕಗಳು, ಆದ್ದರಿಂದ ಇದು ವೆಚ್ಚ ಹೋಲಿಕೆ ಅಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A swarm trades a central point of failure for the risk of loops between peers. A hop limit and a peer registry are the two guards that make that trade safe to run.",
    "bodyKn": "Swarm ಕೇಂದ್ರ ವೈಫಲ್ಯ ಬಿಂದುವನ್ನು peers ನಡುವಿನ ಲೂಪ್ ಅಪಾಯಕ್ಕೆ ವಿನಿಮಯ ಮಾಡುತ್ತದೆ. Hop ಮಿತಿ ಮತ್ತು peer registry ಆ ವಿನಿಮಯವನ್ನು ಓಡಿಸಲು ಸುರಕ್ಷಿತಗೊಳಿಸುವ ಎರಡು ರಕ್ಷಣೆಗಳು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"if each agent is correct locally, the swarm is correct.\" Billing and support were each sensible and together never finished.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಪ್ರತಿ agent ಸ್ಥಳೀಯವಾಗಿ ಸರಿಯಾಗಿದ್ದರೆ swarm ಸರಿ.\" Billing ಮತ್ತು support ಪ್ರತಿಯೊಂದೂ ಸಮಂಜಸ ಆದರೆ ಒಟ್ಟಾಗಿ ಎಂದೂ ಮುಗಿಯಲಿಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Handoff: passing ownership of the task to a named peer. Hop: one transition between agents. Hop limit: a runtime bound on hops. Peer registry: the set of valid peers. Cycle detection: stopping when an agent repeats.",
    "bodyKn": "Handoff: ಕಾರ್ಯದ ಮಾಲೀಕತ್ವವನ್ನು ಹೆಸರಿಸಿದ peer ಗೆ ವರ್ಗಾಯಿಸುವುದು. Hop: agents ನಡುವಿನ ಒಂದು ಪರಿವರ್ತನೆ. Hop limit: hops ಮೇಲೆ runtime ಮಿತಿ. Peer registry: ಮಾನ್ಯ peers ಸೆಟ್. Cycle detection: agent ಪುನರಾವರ್ತಿಸಿದಾಗ ನಿಲ್ಲಿಸುವುದು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) Ownership moved from peer to peer and the last agent answered. 2) Billing and support bounced a task until the 6-hop limit. 3) Limits of 4 and 20 used 4 and 20 runs; cycle detection used 4. 4) A full mesh reaches 4,950 possible edges at 100 agents. 5) An unknown peer was refused and recorded. 6) The swarm used 1 to 2 runs on finished tasks and its whole budget on the bouncing one.",
    "bodyKn": "1) ಮಾಲೀಕತ್ವ peer ನಿಂದ peer ಗೆ ಚಲಿಸಿ ಕೊನೆಯ agent ಉತ್ತರಿಸಿತು. 2) Billing ಮತ್ತು support 6-hop ಮಿತಿವರೆಗೆ ಕಾರ್ಯ ಪುಟಿಸಿದವು. 3) 4 ಮತ್ತು 20 ಮಿತಿಗಳು 4 ಮತ್ತು 20 ಓಟ ಬಳಸಿದವು; ಚಕ್ರ ಪತ್ತೆ 4 ಬಳಸಿತು. 4) ಪೂರ್ಣ mesh 100 agents ಗೆ 4,950 ಸಾಧ್ಯ edges ತಲುಪುತ್ತದೆ. 5) ಅಜ್ಞಾತ peer ತಿರಸ್ಕರಿಸಿ ದಾಖಲಿಸಲ್ಪಟ್ಟಿತು. 6) ಮುಗಿದ ಕಾರ್ಯಗಳಲ್ಲಿ swarm 1 ರಿಂದ 2 ಓಟ ಮತ್ತು bouncing ಕಾರ್ಯದಲ್ಲಿ ಇಡೀ ಬಜೆಟ್ ಬಳಸಿತು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What stopped the bouncing task in the six-hop run?",
      "qKn": "ಆರು-hop ಓಟದಲ್ಲಿ bouncing ಕಾರ್ಯವನ್ನು ಏನು ನಿಲ್ಲಿಸಿತು?",
      "opts": [
       "A supervisor",
       "The runtime hop limit",
       "billing finishing",
       "A KeyError"
      ],
      "optsKn": [
       "Supervisor",
       "Runtime hop ಮಿತಿ",
       "billing ಮುಗಿಸುವುದು",
       "KeyError"
      ],
      "correct": 1
     },
     {
      "q": "How many agent runs did cycle detection use on the bouncing task?",
      "qKn": "Bouncing ಕಾರ್ಯದಲ್ಲಿ ಚಕ್ರ ಪತ್ತೆ ಎಷ್ಟು agent ಓಟ ಬಳಸಿತು?",
      "opts": [
       "20",
       "6",
       "4",
       "1"
      ],
      "optsKn": [
       "20",
       "6",
       "4",
       "1"
      ],
      "correct": 2
     },
     {
      "q": "How many possible edges does a full mesh of 100 agents have?",
      "qKn": "100 agents ನ ಪೂರ್ಣ mesh ಗೆ ಎಷ್ಟು ಸಾಧ್ಯ edges ಇವೆ?",
      "opts": [
       "100",
       "99",
       "4,950",
       "10,000"
      ],
      "optsKn": [
       "100",
       "99",
       "4,950",
       "10,000"
      ],
      "correct": 2
     },
     {
      "q": "What happened when an agent named a nonexistent peer?",
      "qKn": "Agent ಅಸ್ತಿತ್ವದಲ್ಲಿಲ್ಲದ peer ಹೆಸರಿಸಿದಾಗ ಏನಾಯಿತು?",
      "opts": [
       "A KeyError crashed it",
       "It was refused as an unknown peer and recorded",
       "The task finished",
       "It looped"
      ],
      "optsKn": [
       "KeyError ಕ್ರ್ಯಾಶ್ ಮಾಡಿತು",
       "ಅಜ್ಞಾತ peer ಎಂದು ತಿರಸ್ಕರಿಸಿ ದಾಖಲಿಸಲ್ಪಟ್ಟಿತು",
       "ಕಾರ್ಯ ಮುಗಿಯಿತು",
       "ಲೂಪ್ ಆಯಿತು"
      ],
      "correct": 1
     },
     {
      "q": "Why is the swarm-versus-supervisor count not a cost comparison?",
      "qKn": "Swarm-ವಿರುದ್ಧ-supervisor ಎಣಿಕೆ ವೆಚ್ಚ ಹೋಲಿಕೆ ಏಕಲ್ಲ?",
      "opts": [
       "It uses different units: agent runs versus model calls",
       "It has no data",
       "Swarms are free",
       "Supervisors never run"
      ],
      "optsKn": [
       "ಅದು ಬೇರೆ ಘಟಕಗಳನ್ನು ಬಳಸುತ್ತದೆ: agent ಓಟ ವಿರುದ್ಧ ಮಾದರಿ ಕರೆಗಳು",
       "ಅದಕ್ಕೆ ಡೇಟಾ ಇಲ್ಲ",
       "Swarms ಉಚಿತ",
       "Supervisors ಎಂದೂ ಓಡುವುದಿಲ್ಲ"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
