module.exports = {
 "phaseId": "6a369d6366020ed05b32158c",
 "moduleId": "6a369d6366020ed05b32158f",
 "order": 1,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "From Chatbots to Long-Horizon Agents (Part 2 of 3) — Trees, Checkpoints and Retries",
 "titleKn": "Chatbots ನಿಂದ ದೀರ್ಘ-ಅವಧಿ Agents ಗೆ (ಭಾಗ 2 / 3) — ಮರಗಳು, Checkpoints ಮತ್ತು ಮರುಪ್ರಯತ್ನಗಳು",
 "desc": "Measure restarts, checkpoints and retries on a long task and see when retries stop helping.",
 "descKn": "ದೀರ್ಘ ಕಾರ್ಯದಲ್ಲಿ ಮರುಪ್ರಾರಂಭ, checkpoints ಮತ್ತು ಮರುಪ್ರಯತ್ನ ಅಳೆಯಿರಿ ಮತ್ತು ಮರುಪ್ರಯತ್ನ ಯಾವಾಗ ಸಹಾಯ ಮಾಡುವುದಿಲ್ಲ ನೋಡಿ.",
 "objectives": [
  "Count a branching tree.",
  "Compare restart with checkpoints.",
  "Vary checkpoint spacing.",
  "Check best-of-N by formula.",
  "Explain correlated failure."
 ],
 "objectivesKn": [
  "ಕವಲು ಮರ ಎಣಿಸಿ.",
  "ಮರುಪ್ರಾರಂಭ ಮತ್ತು checkpoints ಹೋಲಿಸಿ.",
  "checkpoint ಅಂತರ ಬದಲಿಸಿ.",
  "best-of-N ಅನ್ನು ಸೂತ್ರದಿಂದ ಪರಿಶೀಲಿಸಿ.",
  "ಸಹಸಂಬಂಧಿತ ವೈಫಲ್ಯ ವಿವರಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "From Chatbots to Long-Horizon Agents (Part 2 of 3)",
    "textKn": "Chatbots ನಿಂದ ದೀರ್ಘ-ಅವಧಿ Agents ಗೆ (ಭಾಗ 2 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 2 of 3: branching trees of attempts, restarting from scratch compared with checkpoints, checkpoint spacing, best-of-N retries checked against a simulation and correlated failures that break the independence assumption. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind long-horizon agents (METR-style time horizons, compounding per-step reliability, checkpoints, retries, memory compaction and trajectory monitors), not the real software, and the success probabilities, step counts and the scripted agent are made up by the lab and no language model is involved, so no real LLM behaviour is measured. The original code/main.py was not supplied, so the labs are our own implementation. METR time-horizon figures and the lesson doubling-time examples (14 hours to 28 to 56) are cited from the lesson and were not measured here; the 4 hour horizon, the 7 month doubling time and every probability in the labs are invented for illustration. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 2ನೆಯದು: ಪ್ರಯತ್ನಗಳ ಕವಲು ಮರಗಳು, ಮೊದಲಿನಿಂದ ಮರುಪ್ರಾರಂಭ ಮತ್ತು checkpoints ಹೋಲಿಕೆ, checkpoint ಅಂತರ, ಸಿಮ್ಯುಲೇಶನ್ ವಿರುದ್ಧ ಪರಿಶೀಲಿಸಿದ best-of-N ಮರುಪ್ರಯತ್ನ ಮತ್ತು ಸ್ವಾತಂತ್ರ್ಯ ಊಹೆ ಮುರಿಯುವ ಸಹಸಂಬಂಧಿತ ವೈಫಲ್ಯಗಳು. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು ದೀರ್ಘ-ಅವಧಿ agents (METR ಶೈಲಿಯ ಸಮಯ ಹಾರಿಜಾನ್, ಹಂತ-ಹಂತದ ವಿಶ್ವಾಸಾರ್ಹತೆಯ ಸಂಯೋಜನೆ, checkpoints, ಮರುಪ್ರಯತ್ನ, ಮೆಮೊರಿ ಸಂಕ್ಷೇಪಣ ಮತ್ತು trajectory ಮಾನಿಟರ್‌ಗಳು) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಯಶಸ್ಸಿನ ಸಂಭವನೀಯತೆಗಳು, ಹಂತ ಸಂಖ್ಯೆಗಳು ಮತ್ತು scripted agent ಅನ್ನು ಲ್ಯಾಬ್ ಕಲ್ಪಿಸಿದ್ದು ಮತ್ತು ಭಾಷಾ ಮಾದರಿ ಇಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ code/main.py ಒದಗಿಸಿರಲಿಲ್ಲ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ನಮ್ಮದೇ ಅನುಷ್ಠಾನ. METR time-horizon ಅಂಕಿಗಳು ಮತ್ತು lesson ನ doubling-time ಉದಾಹರಣೆಗಳು (14 ಗಂಟೆ, 28, 56) lesson ನಿಂದ ಉಲ್ಲೇಖಿತ ಮತ್ತು ಇಲ್ಲಿ ಅಳೆಯಲಾಗಿಲ್ಲ; 4 ಗಂಟೆ horizon, 7 ತಿಂಗಳ doubling time ಮತ್ತು ಲ್ಯಾಬ್‌ಗಳ ಪ್ರತಿ ಸಂಭವನೀಯತೆ ವಿವರಣೆಗಾಗಿ ಕಲ್ಪಿತ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Failure Is Certain, So Plan the Recovery",
    "textKn": "ವೈಫಲ್ಯ ನಿಶ್ಚಿತ, ಆದ್ದರಿಂದ ಚೇತರಿಕೆಗೆ ಯೋಜಿಸಿ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Trees, Checkpoints and Retries",
    "headingKn": "ಮರಗಳು, Checkpoints ಮತ್ತು ಮರುಪ್ರಯತ್ನಗಳು",
    "bodyEn": "Part 1 showed that long tasks fail often even with reliable steps. This part measures ways to cope: counting the nodes of a branching tree of attempts, comparing a restart from scratch with checkpoints at the same per-step reliability, varying checkpoint spacing, checking best-of-N against its formula and showing that correlated failures break that formula. The probabilities are invented and all runs are seeded.",
    "bodyKn": "ಭಾಗ 1 ವಿಶ್ವಾಸಾರ್ಹ ಹಂತಗಳಿದ್ದರೂ ದೀರ್ಘ ಕಾರ್ಯಗಳು ಹೆಚ್ಚಾಗಿ ವಿಫಲವಾಗುತ್ತವೆ ಎಂದು ತೋರಿಸಿತು. ಈ ಭಾಗ ನಿಭಾಯಿಸುವ ವಿಧಾನಗಳನ್ನು ಅಳೆಯುತ್ತದೆ: ಪ್ರಯತ್ನಗಳ ಕವಲು ಮರದ ನೋಡ್‌ಗಳನ್ನು ಎಣಿಸುವುದು, ಅದೇ ಹಂತ-ಹಂತದ ವಿಶ್ವಾಸಾರ್ಹತೆಯಲ್ಲಿ ಮೊದಲಿನಿಂದ ಮರುಪ್ರಾರಂಭ ಮತ್ತು checkpoints ಹೋಲಿಸುವುದು, checkpoint ಅಂತರ ಬದಲಿಸುವುದು, best-of-N ಅನ್ನು ಅದರ ಸೂತ್ರದ ವಿರುದ್ಧ ಪರಿಶೀಲಿಸುವುದು ಮತ್ತು ಸಹಸಂಬಂಧಿತ ವೈಫಲ್ಯಗಳು ಆ ಸೂತ್ರ ಮುರಿಯುತ್ತವೆ ಎಂದು ತೋರಿಸುವುದು. ಸಂಭವನೀಯತೆಗಳು ಕಲ್ಪಿತ ಮತ್ತು ಎಲ್ಲಾ ಓಟಗಳು seeded."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Recovering From a Failed Step",
    "headingKn": "ವಿಫಲ ಹಂತದಿಂದ ಚೇತರಿಕೆ",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">checkpoints limit how much a failure costs</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">attempt</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">many steps</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">fail</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">at step 47</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">checkpoint</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">rewind to 40</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">retry</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">best of N</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">checkpoints limit how much a failure costs</text></svg>",
    "captionEn": "A checkpoint turns a restart into a short rewind.",
    "captionKn": "Checkpoint ಮರುಪ್ರಾರಂಭವನ್ನು ಚಿಕ್ಕ ಹಿಂತಿರುಗುವಿಕೆಯಾಗಿ ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Recovery strategies in the lab",
    "headingKn": "ಲ್ಯಾಬ್‌ನಲ್ಲಿ ಚೇತರಿಕೆ ತಂತ್ರಗಳು",
    "headers": [
     "Strategy",
     "How it recovers"
    ],
    "rows": [
     [
      "restart",
      "a failure sends the task back to step 0, 5 attempts"
     ],
     [
      "checkpoint",
      "a failure rewinds to the last saved step, 5 retries per segment"
     ],
     [
      "best-of-N",
      "run N independent tries and keep any success"
     ],
     [
      "tree",
      "branch b ways to depth d"
     ],
     [
      "task",
      "60 steps at 97 percent per step (invented)"
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
    "filename": "lh_2.py",
    "headingEn": "Trees, restarts, checkpoints and retries",
    "headingKn": "ಮರಗಳು, ಮರುಪ್ರಾರಂಭ, checkpoints ಮತ್ತು ಮರುಪ್ರಯತ್ನ",
    "descEn": "tree_counts counts nodes and leaves, run_with_restart and run_with_checkpoints simulate the two recovery styles and best_of_n tries until one success.",
    "descKn": "tree_counts ನೋಡ್ ಮತ್ತು ಎಲೆಗಳನ್ನು ಎಣಿಸುತ್ತದೆ, run_with_restart ಮತ್ತು run_with_checkpoints ಎರಡು ಚೇತರಿಕೆ ಶೈಲಿಗಳನ್ನು ಅನುಕರಿಸುತ್ತವೆ ಮತ್ತು best_of_n ಒಂದು ಯಶಸ್ಸಿನವರೆಗೆ ಪ್ರಯತ್ನಿಸುತ್ತದೆ.",
    "code": "def tree_counts(branching, depth):\n    nodes = sum(branching ** d for d in range(depth + 1))\n    leaves = branching ** depth\n    return nodes, leaves\n\n\ndef run_with_restart(r, p_step, n_steps, max_attempts):\n    \"\"\"A failure anywhere sends the whole task back to step 0. Returns (success, steps_executed).\"\"\"\n    executed = 0\n    for _ in range(max_attempts):\n        done = True\n        for _s in range(n_steps):\n            executed += 1\n            if r.random() >= p_step:\n                done = False\n                break\n        if done:\n            return True, executed\n    return False, executed\n\n\ndef run_with_checkpoints(r, p_step, n_steps, checkpoint_every, max_retries_per_segment):\n    \"\"\"A failure only rewinds to the last checkpoint. Returns (success, steps_executed).\"\"\"\n    executed = 0\n    pos = 0\n    while pos < n_steps:\n        seg_end = min(pos + checkpoint_every, n_steps)\n        for _ in range(max_retries_per_segment):\n            ok = True\n            for _s in range(pos, seg_end):\n                executed += 1\n                if r.random() >= p_step:\n                    ok = False\n                    break\n            if ok:\n                break\n        else:\n            return False, executed\n        pos = seg_end\n    return True, executed\n\n\ndef best_of_n(r, p, n):\n    return any(r.random() < p for _ in range(n))"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "lh_2.py",
    "headingEn": "main(): experiments",
    "headingKn": "main(): ಪ್ರಯೋಗಗಳು",
    "descEn": "main() counts tree nodes, compares restart and checkpoints, varies checkpoint spacing, checks best-of-N and shows correlated failures.",
    "descKn": "main() ಮರದ ನೋಡ್ ಎಣಿಸಿ, ಮರುಪ್ರಾರಂಭ ಮತ್ತು checkpoints ಹೋಲಿಸಿ, checkpoint ಅಂತರ ಬದಲಿಸಿ, best-of-N ಪರಿಶೀಲಿಸಿ ಮತ್ತು ಸಹಸಂಬಂಧಿತ ವೈಫಲ್ಯಗಳನ್ನು ತೋರಿಸುತ್ತದೆ.",
    "code": "def main():\n    section(\"1. Genuinely computing: size of a branching tree of attempts\")\n    for b, d in ((2, 2), (3, 2), (3, 3), (5, 4)):\n        nodes, leaves = tree_counts(b, d)\n        print(f\"branching {b}, depth {d}: {nodes} nodes in total, {leaves} leaves\")\n    print(\"branching 3 at depth 2 gives 13 nodes and 9 leaves, matching the hand count, and the totals grow fast enough that exploring every branch is its own cost problem\")\n\n    section(\"2. Genuinely measuring: restart from scratch against checkpoints, 60 steps at 97 percent per step\")\n    p, n = 0.97, 60\n    rr = random.Random(11)\n    a = [run_with_restart(rr, p, n, 5) for _ in range(4000)]\n    rr = random.Random(11)\n    b = [run_with_checkpoints(rr, p, n, 10, 5) for _ in range(4000)]\n    print(f\"restart (5 attempts):          success {mean(x[0] for x in a):.3f} | mean steps executed {mean(x[1] for x in a):.1f}\")\n    print(f\"checkpoint every 10 (5 retries each): success {mean(x[0] for x in b):.3f} | mean steps executed {mean(x[1] for x in b):.1f}\")\n    print(\"with the same per-step reliability, checkpoints finished far more tasks and spent fewer executed steps in total, because a failure only repeats at most ten steps; the probabilities are invented and the two runs share a seed but not a random stream, so treat the gap as indicative\")\n\n    section(\"3. Genuinely measuring: checkpoint spacing\")\n    for every in (2, 5, 10, 20, 60):\n        rr = random.Random(21)\n        res = [run_with_checkpoints(rr, p, n, every, 5) for _ in range(3000)]\n        print(f\"checkpoint every {every:2d} steps: success {mean(x[0] for x in res):.3f} | mean steps executed {mean(x[1] for x in res):.1f}\")\n    print(\"very sparse checkpoints behave like restarting, and very dense ones save more work but, in a real system, each checkpoint costs time and storage that this lab does not charge for\")\n\n    section(\"4. Genuinely computing and simulating: best-of-N retries\")\n    rr = random.Random(5)\n    for pp in (0.3, 0.6):\n        for k in (1, 3, 5):\n            sim = mean(best_of_n(rr, pp, k) for _ in range(20000))\n            print(f\"single-try success {pp}, {k} tries: formula {1 - (1 - pp) ** k:.3f} | simulated {sim:.3f}\")\n    print(\"trying several times helps a lot when the tries are independent and a checker can tell which one worked; if the checker is wrong or the failures are correlated, the formula overstates the benefit\")\n\n    section(\"5. Genuinely running: correlated failures break the independence assumption\")\n    rr = random.Random(9)\n    trials = 20000\n    hit_independent = mean(best_of_n(rr, 0.5, 4) for _ in range(trials))\n    hits = 0\n    for _ in range(trials):\n        task_is_hard = rr.random() < 0.5\n        p_local = 0.05 if task_is_hard else 0.95\n        hits += best_of_n(rr, p_local, 4)\n    print(f\"independent tries at 0.5 each, 4 tries: {hit_independent:.3f}\")\n    print(f\"same average (0.5) but half the tasks are hard (5 percent) and half easy (95 percent), 4 tries: {hits / trials:.3f}\")\n    print(\"both setups average 50 percent per try, yet four tries succeed far less often when the failures are concentrated on the hard tasks, so retries cannot rescue tasks the agent systematically cannot do; the 5 and 95 percent split is invented\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely computing: size of a branching tree of attempts ---\nbranching 2, depth 2: 7 nodes in total, 4 leaves\nbranching 3, depth 2: 13 nodes in total, 9 leaves\nbranching 3, depth 3: 40 nodes in total, 27 leaves\nbranching 5, depth 4: 781 nodes in total, 625 leaves\nbranching 3 at depth 2 gives 13 nodes and 9 leaves, matching the hand count, and the totals grow fast enough that exploring every branch is its own cost problem\n\n--- 2. Genuinely measuring: restart from scratch against checkpoints, 60 steps at 97 percent per step ---\nrestart (5 attempts):          success 0.596 | mean steps executed 101.3\ncheckpoint every 10 (5 retries each): success 0.992 | mean steps executed 70.6\nwith the same per-step reliability, checkpoints finished far more tasks and spent fewer executed steps in total, because a failure only repeats at most ten steps; the probabilities are invented and the two runs share a seed but not a random stream, so treat the gap as indicative\n\n--- 3. Genuinely measuring: checkpoint spacing ---\ncheckpoint every  2 steps: success 1.000 | mean steps executed 62.9\ncheckpoint every  5 steps: success 1.000 | mean steps executed 65.9\ncheckpoint every 10 steps: success 0.993 | mean steps executed 71.2\ncheckpoint every 20 steps: success 0.942 | mean steps executed 80.7\ncheckpoint every 60 steps: success 0.573 | mean steps executed 100.0\nvery sparse checkpoints behave like restarting, and very dense ones save more work but, in a real system, each checkpoint costs time and storage that this lab does not charge for\n\n--- 4. Genuinely computing and simulating: best-of-N retries ---\nsingle-try success 0.3, 1 tries: formula 0.300 | simulated 0.298\nsingle-try success 0.3, 3 tries: formula 0.657 | simulated 0.654\nsingle-try success 0.3, 5 tries: formula 0.832 | simulated 0.836\nsingle-try success 0.6, 1 tries: formula 0.600 | simulated 0.596\nsingle-try success 0.6, 3 tries: formula 0.936 | simulated 0.934\nsingle-try success 0.6, 5 tries: formula 0.990 | simulated 0.989\ntrying several times helps a lot when the tries are independent and a checker can tell which one worked; if the checker is wrong or the failures are correlated, the formula overstates the benefit\n\n--- 5. Genuinely running: correlated failures break the independence assumption ---\nindependent tries at 0.5 each, 4 tries: 0.936\nsame average (0.5) but half the tasks are hard (5 percent) and half easy (95 percent), 4 tries: 0.592\nboth setups average 50 percent per try, yet four tries succeed far less often when the failures are concentrated on the hard tasks, so retries cannot rescue tasks the agent systematically cannot do; the 5 and 95 percent split is invented"
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
    "headingEn": "Genuinely Found: Trees, Restart and Checkpoints",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಮರಗಳು, ಮರುಪ್ರಾರಂಭ ಮತ್ತು Checkpoints",
    "bodyEn": "Section 1: branching 2 depth 2 had 7 nodes and 4 leaves, branching 3 depth 2 had 13 nodes and 9 leaves, branching 3 depth 3 had 40 and 27, and branching 5 depth 4 had 781 and 625. Section 2: at 97 percent per step over 60 steps a restart strategy succeeded in 0.596 of 4000 runs using a mean of 101.3 executed steps, while checkpoints every 10 steps succeeded in 0.992 using 70.6 steps.",
    "bodyKn": "ವಿಭಾಗ 1: ಕವಲು 2 ಆಳ 2 ರಲ್ಲಿ 7 ನೋಡ್ ಮತ್ತು 4 ಎಲೆ, ಕವಲು 3 ಆಳ 2 ರಲ್ಲಿ 13 ನೋಡ್ ಮತ್ತು 9 ಎಲೆ, ಕವಲು 3 ಆಳ 3 ರಲ್ಲಿ 40 ಮತ್ತು 27, ಮತ್ತು ಕವಲು 5 ಆಳ 4 ರಲ್ಲಿ 781 ಮತ್ತು 625. ವಿಭಾಗ 2: 60 ಹಂತಗಳಲ್ಲಿ ಪ್ರತಿ ಹಂತಕ್ಕೆ 97 ಶೇಕಡಾದಲ್ಲಿ ಮರುಪ್ರಾರಂಭ ತಂತ್ರ 4000 ಓಟಗಳಲ್ಲಿ 0.596 ಯಶಸ್ವಿಯಾಯಿತು ಮತ್ತು ಸರಾಸರಿ 101.3 ಕಾರ್ಯಗತ ಹಂತ ಬಳಸಿತು, ಆದರೆ ಪ್ರತಿ 10 ಹಂತಕ್ಕೆ checkpoints 0.992 ರಲ್ಲಿ ಯಶಸ್ವಿಯಾಗಿ 70.6 ಹಂತ ಬಳಸಿದವು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Spacing, Best-of-N and Correlation",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಅಂತರ, Best-of-N ಮತ್ತು ಸಹಸಂಬಂಧ",
    "bodyEn": "Section 3: checkpoint spacing 2, 5, 10, 20 and 60 gave success 1.000, 1.000, 0.993, 0.942 and 0.573 with mean steps 62.9, 65.9, 71.2, 80.7 and 100.0. Section 4: best-of-N matched its formula, for example 0.657 formula against 0.654 simulated at p 0.3 with 3 tries and 0.990 against 0.989 at p 0.6 with 5 tries. Section 5: four independent tries at 0.5 succeeded 0.936 of the time, but with the same 0.5 average split into hard (5 percent) and easy (95 percent) tasks they succeeded only 0.592.",
    "bodyKn": "ವಿಭಾಗ 3: checkpoint ಅಂತರ 2, 5, 10, 20 ಮತ್ತು 60 ಯಶಸ್ಸು 1.000, 1.000, 0.993, 0.942 ಮತ್ತು 0.573 ಮತ್ತು ಸರಾಸರಿ ಹಂತ 62.9, 65.9, 71.2, 80.7 ಮತ್ತು 100.0 ನೀಡಿತು. ವಿಭಾಗ 4: best-of-N ತನ್ನ ಸೂತ್ರಕ್ಕೆ ಹೊಂದಿತು, ಉದಾಹರಣೆಗೆ p 0.3 ಮತ್ತು 3 ಪ್ರಯತ್ನಗಳಲ್ಲಿ ಸೂತ್ರ 0.657 ವಿರುದ್ಧ ಸಿಮ್ಯುಲೇಟ್ 0.654 ಮತ್ತು p 0.6 ಮತ್ತು 5 ಪ್ರಯತ್ನಗಳಲ್ಲಿ 0.990 ವಿರುದ್ಧ 0.989. ವಿಭಾಗ 5: 0.5 ರ ನಾಲ್ಕು ಸ್ವತಂತ್ರ ಪ್ರಯತ್ನಗಳು 0.936 ಸಮಯ ಯಶಸ್ವಿಯಾದವು, ಆದರೆ ಅದೇ 0.5 ಸರಾಸರಿಯನ್ನು ಕಠಿಣ (5 ಶೇಕಡಾ) ಮತ್ತು ಸುಲಭ (95 ಶೇಕಡಾ) ಕಾರ್ಯಗಳಾಗಿ ವಿಭಜಿಸಿದಾಗ ಕೇವಲ 0.592."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "Checkpoints change a failure from a total loss into a bounded one, and best-of-N only helps when failures are independent and a checker can recognise the success.",
    "bodyKn": "Checkpoints ವೈಫಲ್ಯವನ್ನು ಸಂಪೂರ್ಣ ನಷ್ಟದಿಂದ ಮಿತಿಯುಳ್ಳದ್ದಾಗಿ ಬದಲಿಸುತ್ತವೆ, ಮತ್ತು best-of-N ವೈಫಲ್ಯಗಳು ಸ್ವತಂತ್ರವಾಗಿದ್ದು ಪರಿಶೀಲಕ ಯಶಸ್ಸನ್ನು ಗುರುತಿಸಬಲ್ಲಾಗ ಮಾತ್ರ ಸಹಾಯ ಮಾಡುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"retries fix unreliable agents.\" With hard and easy tasks mixed, four tries succeeded in 0.592 of runs instead of 0.936.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಮರುಪ್ರಯತ್ನಗಳು ವಿಶ್ವಾಸಾರ್ಹವಲ್ಲದ agents ಅನ್ನು ಸರಿಪಡಿಸುತ್ತವೆ.\" ಕಠಿಣ ಮತ್ತು ಸುಲಭ ಕಾರ್ಯಗಳು ಬೆರೆತಾಗ ನಾಲ್ಕು ಪ್ರಯತ್ನಗಳು 0.936 ಬದಲು 0.592 ಓಟಗಳಲ್ಲಿ ಯಶಸ್ವಿಯಾದವು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Checkpoint: a saved position to resume from. Restart: begin again from step 0. Best-of-N: run N tries and keep a success. Correlated failure: failures that tend to happen on the same tasks.",
    "bodyKn": "Checkpoint: ಮುಂದುವರಿಯಲು ಉಳಿಸಿದ ಸ್ಥಾನ. Restart: ಹಂತ 0 ರಿಂದ ಮತ್ತೆ ಆರಂಭ. Best-of-N: N ಪ್ರಯತ್ನ ಮಾಡಿ ಯಶಸ್ಸು ಇಡಿ. Correlated failure: ಒಂದೇ ಕಾರ್ಯಗಳಲ್ಲಿ ಆಗುವ ವೈಫಲ್ಯಗಳು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) Tree size grows as b to the power d. 2) Checkpoints finished 0.992 against 0.596. 3) Sparse checkpoints behave like restarts. 4) Best-of-N matched its formula. 5) Correlation cut four tries from 0.936 to 0.592.",
    "bodyKn": "1) ಮರದ ಗಾತ್ರ b ನ d ಘಾತದಂತೆ ಬೆಳೆಯುತ್ತದೆ. 2) Checkpoints 0.596 ವಿರುದ್ಧ 0.992 ಮುಗಿಸಿದವು. 3) ವಿರಳ checkpoints ಮರುಪ್ರಾರಂಭದಂತೆ ವರ್ತಿಸುತ್ತವೆ. 4) Best-of-N ಸೂತ್ರಕ್ಕೆ ಹೊಂದಿತು. 5) ಸಹಸಂಬಂಧ ನಾಲ್ಕು ಪ್ರಯತ್ನಗಳನ್ನು 0.936 ರಿಂದ 0.592 ಗೆ ಇಳಿಸಿತು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "How many nodes and leaves did branching 3 at depth 2 have?",
      "qKn": "ಕವಲು 3 ಆಳ 2 ರಲ್ಲಿ ಎಷ್ಟು ನೋಡ್ ಮತ್ತು ಎಲೆ ಇದ್ದವು?",
      "opts": [
       "13 nodes and 9 leaves",
       "9 nodes and 13 leaves",
       "7 nodes and 4 leaves",
       "40 nodes and 27 leaves"
      ],
      "optsKn": [
       "13 ನೋಡ್ ಮತ್ತು 9 ಎಲೆ",
       "9 ನೋಡ್ ಮತ್ತು 13 ಎಲೆ",
       "7 ನೋಡ್ ಮತ್ತು 4 ಎಲೆ",
       "40 ನೋಡ್ ಮತ್ತು 27 ಎಲೆ"
      ],
      "correct": 0
     },
     {
      "q": "What success did checkpoints every 10 steps reach against restarts?",
      "qKn": "ಪ್ರತಿ 10 ಹಂತದ checkpoints ಮರುಪ್ರಾರಂಭಗಳ ವಿರುದ್ಧ ಯಾವ ಯಶಸ್ಸು ತಲುಪಿದವು?",
      "opts": [
       "0.992 against 0.596",
       "0.596 against 0.992",
       "Both 1.0",
       "Both 0.5"
      ],
      "optsKn": [
       "0.992 ವಿರುದ್ಧ 0.596",
       "0.596 ವಿರುದ್ಧ 0.992",
       "ಎರಡೂ 1.0",
       "ಎರಡೂ 0.5"
      ],
      "correct": 0
     },
     {
      "q": "What happened with a checkpoint every 60 steps?",
      "qKn": "ಪ್ರತಿ 60 ಹಂತಕ್ಕೆ checkpoint ಇದ್ದಾಗ ಏನಾಯಿತು?",
      "opts": [
       "It behaved like a restart: 0.573 success, 100.0 mean steps",
       "It reached 1.000",
       "It used 62.9 steps",
       "It never failed"
      ],
      "optsKn": [
       "ಅದು ಮರುಪ್ರಾರಂಭದಂತೆ ವರ್ತಿಸಿತು: 0.573 ಯಶಸ್ಸು, 100.0 ಸರಾಸರಿ ಹಂತ",
       "ಅದು 1.000 ತಲುಪಿತು",
       "ಅದು 62.9 ಹಂತ ಬಳಸಿತು",
       "ಅದು ಎಂದಿಗೂ ವಿಫಲವಾಗಲಿಲ್ಲ"
      ],
      "correct": 0
     },
     {
      "q": "Why did four tries drop to 0.592 in the correlated case?",
      "qKn": "ಸಹಸಂಬಂಧಿತ ಸಂದರ್ಭದಲ್ಲಿ ನಾಲ್ಕು ಪ್ರಯತ್ನಗಳು 0.592 ಗೆ ಏಕೆ ಇಳಿದವು?",
      "opts": [
       "Failures concentrated on the hard tasks",
       "The seed changed",
       "More tries always hurt",
       "The checker was removed"
      ],
      "optsKn": [
       "ವೈಫಲ್ಯಗಳು ಕಠಿಣ ಕಾರ್ಯಗಳಲ್ಲಿ ಕೇಂದ್ರೀಕೃತವಾದವು",
       "seed ಬದಲಾಯಿತು",
       "ಹೆಚ್ಚು ಪ್ರಯತ್ನ ಯಾವಾಗಲೂ ಹಾನಿ ಮಾಡುತ್ತದೆ",
       "ಪರಿಶೀಲಕ ತೆಗೆಯಲಾಯಿತು"
      ],
      "correct": 0
     },
     {
      "q": "What does a real checkpoint cost that this lab does not charge for?",
      "qKn": "ಈ ಲ್ಯಾಬ್ ಲೆಕ್ಕಿಸದ ನಿಜ checkpoint ನ ವೆಚ್ಚವೇನು?",
      "opts": [
       "Time and storage",
       "Nothing",
       "Randomness",
       "Probability"
      ],
      "optsKn": [
       "ಸಮಯ ಮತ್ತು ಸಂಗ್ರಹಣೆ",
       "ಏನೂ ಇಲ್ಲ",
       "ಯಾದೃಚ್ಛಿಕತೆ",
       "ಸಂಭವನೀಯತೆ"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
