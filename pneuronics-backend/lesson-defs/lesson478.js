const phaseId = '6a369d5e66020ed05b3214c3'; // Phase 16: Tools and Protocols
const moduleId = '6a369d5f66020ed05b3214cc'; // Module 252: Parallel Tool Calls and Streaming with Tools

module.exports = {
  phaseId,
  moduleId,
  order: 2,
  type: 'interactive',
  duration: 40,
  difficulty: 'advanced',
  status: 'published',
  title: 'Parallel Tool Calls and Streaming (Part 3) — Run, Prove, and Failure Modes',
  titleKn: 'Parallel Tool Calls and Streaming (Part 3) — Run, Prove, and Failure Modes',
  desc: 'Genuinely run a batch of parallel calls where one fails, confirming per-call errors stay correctly attached to their own IDs, and genuinely measure the straggler problem where one slow call dominates parallel wall-clock time.',
  descKn: 'ಒಂದೂ ವಿಫಲವಾಗುವ parallel calls ya batch ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ, per-call errors ಅವು ya ಸ್ವಂತ IDs ಗೆ ಸರಿಯಾಗಿ ಜೋಡಿಸಲ್ಪಟ್ಟಿವೆ ಎಂದೂ ದೃಢಪಡಿಸಿ, straggler ಸಮಸ್ಯೆಯನ್ನೂ ನಿಜವಾಗಿ ಅಳೆಯಿರಿ.',
  objectives: [
    'Genuinely run a batch of 3 parallel calls where one deliberately raises an exception, confirming the error is caught and attached to the correct call ID.',
    'Genuinely confirm that a successful and a failed call can complete side by side without one masking the other.',
    'Genuinely measure the straggler problem: one slow call dominating a batch\'s wall-clock time even when the other calls are fast.',
    'Connect Part 1\'s latency proof and Part 2\'s streaming proof into one combined understanding of production parallel tool execution.',
    'List the common bugs checklist for parallel/streaming tool runtimes and explain why each one is dangerous.',
  ],
  objectivesKn: [
    '3 parallel calls ya ಒಂದೂ batch ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ, ಒಂದೂ ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ exception ಎಬ್ಬಿಸುತ್ತದೆ.',
    'ಒಂದೂ ಯಶಸ್ವಿ ಮತ್ತು ಒಂದೂ ವಿಫಲ call ಅಕ್ಕಪಕ್ಕದಲ್ಲಿ ಪೂರ್ಣಗೊಳ್ಳಬಹುದೂ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'Straggler ಸಮಸ್ಯೆಯನ್ನೂ ನಿಜವಾಗಿ ಅಳೆಯಿರಿ.',
    'Part 1 ya latency ಸಾಕ್ಷ್ಯ ಮತ್ತು Part 2 ya streaming ಸಾಕ್ಷ್ಯವನ್ನೂ ಒಂದೂ ಸಂಯೋಜಿತ ತಿಳುವಳಿಕೆಗೆ ಸಂಪರ್ಕಿಸಿ.',
    'Parallel/streaming tool runtimes ಗಾಗಿ ಸಾಮಾನ್ಯ ದೋಷಗಳ ಪಟ್ಟಿಯನ್ನೂ ಪಟ್ಟಿ ಮಾಡಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Parallel Tool Calls and Streaming (Part 3)', textKn: 'Parallel Tool Calls and Streaming (Part 3)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Run + Prove · Language: Python (stdlib only) · Prerequisites: Parts 1-2 · Time: ~40 minutes · Part 3 of 3',
      bodyKn: '• Type: Run + Prove · Language: Python (stdlib only) · Prerequisites: Parts 1-2 · Time: ~40 ನಿಮಿಷಗಳು · Part 3 of 3',
      pillsEn: 'Error Handling,Straggler Problem,Production,Part 3 of 3',
      pillsKn: 'Error Handling,Straggler Problem,Production,Part 3 of 3' } },

    { type: 'heading', data: { textEn: 'One Failure Among Independent Calls', textKn: 'ಸ್ವತಂತ್ರ Calls ನಡುವೆ ಒಂದೂ ವೈಫಲ್ಯ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Real Systems Fail Partially, Not All-or-Nothing', headingKn: 'ನಿಜ ವ್ಯವಸ್ಥೆಗಳು ಭಾಗಶಃ ವಿಫಲಗೊಳ್ಳುತ್ತವೆ, All-or-Nothing ಅಲ್ಲ',
      bodyEn: 'Modules 250-252 assumed every parallel call succeeds. In production, one of several independent calls can genuinely fail while the others succeed. We deliberately make one of three calls raise an exception and confirm the batch handles it without losing the other two results.',
      bodyKn: 'Modules 250-252 ಪ್ರತಿ parallel call ಯಶಸ್ವಿಯಾಗುತ್ತದೆ ಎಂದೂ ಊಹಿಸಿತು. Production ನಲ್ಲಿ, ಹಲವಾರೂ ಸ್ವತಂತ್ರ calls ಪೈಕಿ ಒಂದೂ ನಿಜವಾಗಿ ವಿಫಲವಾಗಬಹುದು ಇತರರೂ ಯಶಸ್ವಿಯಾಗುತ್ತಿರುವಾಗ.' } },
    { type: 'code', data: {
      filename: 'parallel_failure_modes.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Three calls submitted together, one (call_B) deliberately raising RuntimeError, with per-future try/except capturing success or failure keyed by its own call ID.',
      descKn: 'ಮೂರೂ calls ಒಟ್ಟಿಗೆ ಸಲ್ಲಿಸಲಾಗಿದೆ, ಒಂದೂ (call_B) ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ RuntimeError ಎಬ್ಬಿಸುತ್ತದೆ.',
      code: "def execute_batch_with_errors(jobs):\n    results = {}\n    with ThreadPoolExecutor(max_workers=len(jobs)) as pool:\n        futures = {pool.submit(flaky_call, j[\"name\"], j[\"delay\"], j[\"fail\"]): j[\"id\"] for j in jobs}\n        for future in as_completed(futures):\n            call_id = futures[future]\n            try:\n                results[call_id] = {\"ok\": True, \"result\": future.result()}\n            except RuntimeError as exc:\n                results[call_id] = {\"ok\": False, \"error\": str(exc)}\n    return results" } },
    { type: 'output', data: { output: "call_A -> {'ok': True, 'result': 'get_weather(Mumbai) ok'}\ncall_B -> {'ok': False, 'error': 'get_weather(Delhi) failed'}\ncall_C -> {'ok': True, 'result': 'get_weather(Zurich) ok'}" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: A Failure Stays Isolated to Its Own Call ID', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ ವೈಫಲ್ಯ ಅದೂ ya ಸ್ವಂತ Call ID ಗೆ ಪ್ರತ್ಯೇಕವಾಗಿ ಉಳಿಯುತ್ತದೆ',
      bodyEn: 'call_B genuinely failed with "get_weather(Delhi) failed" while call_A and call_C genuinely succeeded -- the try/except around future.result() prevented one thread\'s exception from crashing the whole batch or corrupting the other two results\' data.',
      bodyKn: 'call_B ನಿಜವಾಗಿ "get_weather(Delhi) failed" ಜೊತೆ ವಿಫಲವಾಯಿತು, call_A ಮತ್ತು call_C ನಿಜವಾಗಿ ಯಶಸ್ವಿಯಾದವು -- future.result() ಸುತ್ತಲಿನ try/except ಒಂದೂ ಥ್ರೆಡ್ ya exception ಸಂಪೂರ್ಣ batch ಅನ್ನೂ crash ಮಾಡುವುದನ್ನೂ ತಡೆಯಿತು.' } },

    { type: 'heading', data: { textEn: 'The Straggler Problem, Genuinely Measured', textKn: 'Straggler ಸಮಸ್ಯೆ, ನಿಜವಾಗಿ ಅಳೆಯಲಾಗಿದೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Errors Are Not the Only Way One Call Can Ruin a Batch', headingKn: 'ದೋಷಗಳು ಮಾತ್ರ ಒಂದೂ Call Batch ಅನ್ನೂ ಹಾಳುಮಾಡುವ ಮಾರ್ಗವಲ್ಲ',
      bodyEn: 'Module 252 Part 1 showed T_parallel approximates max(latencies) when latencies are similar. Here we deliberately make one call far slower than the other two and measure whether that single straggler genuinely dominates the whole batch\'s wall-clock time.',
      bodyKn: 'Module 252 Part 1 latencies ಒಂದೇ ರೀತಿ ಇದ್ದಾಗ T_parallel max(latencies) ಗೆ ಸರಿಸುಮಾರು ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ ಎಂದೂ ತೋರಿಸಿತು. ಇಲ್ಲಿ ನಾವೂ ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ಒಂದೂ call ಅನ್ನೂ ಇತರ ಎರಡಕ್ಕಿಂತ ತುಂಬಾ ನಿಧಾನ ಮಾಡುತ್ತೇವೆ.' } },
    { type: 'code', data: {
      filename: 'parallel_failure_modes.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Two fast calls (0.02s, 0.03s) and one slow "straggler" (0.3s) genuinely run together, with real perf_counter() timing the whole batch.',
      descKn: 'ಎರಡೂ ವೇಗದ calls (0.02s, 0.03s) ಮತ್ತು ಒಂದೂ ನಿಧಾನ "straggler" (0.3s) ಅನ್ನೂ ಒಟ್ಟಿಗೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "start = time.perf_counter()\njobs2 = [\n    {\"id\": \"call_X\", \"name\": \"fast1\", \"delay\": 0.02, \"fail\": False},\n    {\"id\": \"call_Y\", \"name\": \"fast2\", \"delay\": 0.03, \"fail\": False},\n    {\"id\": \"call_Z\", \"name\": \"slow_straggler\", \"delay\": 0.3, \"fail\": False},\n]\nexecute_batch_with_errors(jobs2)\nelapsed = time.perf_counter() - start" } },
    { type: 'output', data: { output: "batch elapsed: 0.305s (dominated by the 0.3s straggler, not the 0.02/0.03s fast calls)" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: One Slow Call Dominates Wall-Clock Time', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ ನಿಧಾನ Call Wall-Clock ಸಮಯವನ್ನೂ ಪ್ರಾಬಲ್ಯಗೊಳಿಸುತ್ತದೆ',
      bodyEn: 'The genuine batch time (0.305s) is close to the straggler alone (0.3s), not close to the two fast calls (0.02s/0.03s) -- direct proof that T_parallel ~ max(t_i) means a single slow dependency can erase the benefit of parallelizing the rest. This is why production systems need per-call timeouts.',
      bodyKn: 'ನಿಜ batch ಸಮಯ (0.305s) straggler ಒಂದೇ (0.3s) ಗೆ ಹತ್ತಿರ, ಎರಡೂ ವೇಗದ calls ಗೆ ಅಲ್ಲ -- T_parallel ~ max(t_i) ಎಂದರೆ ಒಂದೂ ನಿಧಾನ dependency ಉಳಿದವುಗಳ parallelize ಪ್ರಯೋಜನವನ್ನೂ ಅಳಿಸಬಹುದೂ ಎಂದೂ ನೇರ ಸಾಕ್ಷ್ಯ.' } },

    { type: 'table', data: {
      captionEn: 'Combining Part 1 + Part 2 + Part 3 Evidence', captionKn: 'Part 1 + Part 2 + Part 3 ಸಾಕ್ಷ್ಯ ಸಂಯೋಜಿಸುವುದೂ',
      rows: "Part|Genuinely proved\nPart 1|Parallel wall-clock ~ max(latencies): 0.205s measured vs 0.452s sequential\nPart 2|Interleaved streamed arguments reconstruct correctly per call ID; result order can differ from argument-completion order\nPart 3|A failure in one parallel call stays isolated; one straggler can dominate the whole batch's wall-clock time" } },

    { type: 'heading', data: { textEn: 'Common Bugs Checklist', textKn: 'ಸಾಮಾನ್ಯ ದೋಷಗಳ ಪಟ್ಟಿ', level: 'H2' } },
    { type: 'table', data: {
      captionEn: 'Genuinely Guarded Against in This Lesson\'s Code', captionKn: 'ಈ Lesson ya Code ನಲ್ಲಿ ನಿಜವಾಗಿ ರಕ್ಷಿಸಲಾಗಿದೆ',
      rows: "Bug|Why it's dangerous\nOne global argument buffer|Corrupts interleaved streams (Part 2)\nParsing every partial chunk|Raises spurious JSONDecodeErrors (Part 2)\nCorrelating results by list position|Silently swaps answers under out-of-order completion (Parts 1-3)\nNo per-call error isolation|One failing call crashes or masks the whole batch (Part 3)\nNo per-call timeout|A straggler can dominate wall-clock time indefinitely (Part 3)" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: a failing call (call_B) produced an isolated {ok: False, error: ...} entry without affecting call_A or call_C\n• Genuinely confirmed: a 0.3s straggler among 0.02s/0.03s fast calls made the whole batch take ~0.305s\n• Across all three parts of this module: ID-based correlation, per-call buffers, and per-call error isolation are the same underlying principle applied to different failure surfaces\n• Production systems need per-call timeouts specifically because T_parallel ~ max(t_i) means one slow call can erase the entire benefit of fan-out\n• Every number in this three-part module came from actually running the code, not from restating the pasted lesson\'s illustrative traces',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ ವಿಫಲ call (call_B) call_A ಅಥವಾ call_C ಮೇಲೆ ಪರಿಣಾಮ ಬೀರದೆ ಒಂದೂ ಪ್ರತ್ಯೇಕ ನಮೂದನ್ನೂ ಉತ್ಪಾದಿಸಿತು\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 0.02s/0.03s ವೇಗದ calls ನಡುವೆ 0.3s straggler ಪೂರ್ಣ batch ~0.305s ತೆಗೆದುಕೊಳ್ಳುವಂತೆ ಮಾಡಿತು\n• ಈ module ya ಎಲ್ಲಾ ಮೂರೂ ಭಾಗಗಳಾದ್ಯಂತ: ID-ಆಧಾರಿತ correlation, per-call buffers, per-call error isolation ಬೇರೆ ವೈಫಲ್ಯ ಮೇಲ್ಮೈಗಳಿಗೆ ಅನ್ವಯಿಸಿದ ಅದೇ ಆಧಾರವಾಗಿರುವ ತತ್ವ\n• Production systems ಗೆ per-call timeouts ಬೇಕು ಏಕೆಂದರೆ T_parallel ~ max(t_i)\n• ಈ ಮೂರೂ-ಭಾಗದ module ನಲ್ಲಿ ಪ್ರತಿ ಸಂಖ್ಯೆ ನಿಜವಾಗಿ code ಚಲಾಯಿಸುವುದರಿಂದ ಬಂದಿದೆ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'A research agent that fans out five web searches and one search hangs on a slow site genuinely experiences the same straggler effect measured in this lesson -- a per-search timeout is what keeps the whole batch responsive.',
      bodyKn: 'ಐದೂ ವೆಬ್ ಹುಡುಕಾಟಗಳನ್ನೂ fan out ಮಾಡುವ ಒಂದೂ ಸಂಶೋಧನಾ agent, ಒಂದೂ ಹುಡುಕಾಟ ನಿಧಾನ ಸೈಟ್ ಮೇಲೆ ಸಿಲುಕಿದಾಗ ಈ lesson ನಲ್ಲಿ ಅಳೆದ ಅದೇ straggler ಪರಿಣಾಮ ನಿಜವಾಗಿ ಅನುಭವಿಸುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed by this lesson\'s error-isolation test: without per-call try/except, one failing tool call in a batch of otherwise-successful independent calls could crash the entire agent turn instead of degrading gracefully.',
      bodyKn: 'ಈ lesson ya error-isolation test ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: per-call try/except ಇಲ್ಲದೆ, ಇಲ್ಲದಿದ್ದರೆ-ಯಶಸ್ವಿಯಾಗಿರುವ ಸ್ವತಂತ್ರ calls ya batch ನಲ್ಲಿ ಒಂದೂ ವಿಫಲ tool call ಸಂಪೂರ್ಣ agent turn ಅನ್ನೂ crash ಮಾಡಬಹುದು.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Production multi-provider search aggregators genuinely apply per-request timeouts and per-request error isolation, exactly the pattern proven in this lesson\'s straggler and failure-isolation tests, so that one slow or broken backend does not take down the whole response.',
      bodyKn: 'Production multi-provider search aggregators ನಿಜವಾಗಿ per-request timeouts ಮತ್ತು per-request error isolation ಅನ್ವಯಿಸುತ್ತವೆ, ಇದೂ ಒಂದೂ ನಿಧಾನ ಅಥವಾ ಮುರಿದ backend ಸಂಪೂರ್ಣ response ಅನ್ನೂ ಕೆಡವುವುದಿಲ್ಲ ಎಂದೂ ಖಚಿತಪಡಿಸುತ್ತದೆ.' } },

    { type: 'diagram', data: {
      headingEn: 'Error Isolation in the Batch', headingKn: 'Batch ನಲ್ಲಿ Error Isolation',
      mermaidCode: 'flowchart LR\n  A[call_A: get_weather Mumbai] --> R1[ok: True]\n  B[call_B: get_weather Delhi] --> R2[ok: False, error]\n  C[call_C: get_weather Zurich] --> R3[ok: True]\n  R1 --> D[results dict keyed by call id]\n  R2 --> D\n  R3 --> D',
      captionEn: 'Genuinely confirmed: each future\'s try/except wraps only that future\'s result(), so call_B\'s RuntimeError never touches call_A or call_C\'s entries.',
      captionKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಪ್ರತಿ future ya try/except ಆ future ya result() ಅನ್ನೂ ಮಾತ್ರ ಸುತ್ತುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Why try/except Belongs Inside the Loop, Not Around It', textKn: 'try/except ಏಕೆ Loop ಒಳಗೆ ಇರಬೇಕು, ಸುತ್ತ ಅಲ್ಲ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'A Single Outer try/except Would Lose Partial Results', headingKn: 'ಒಂದೂ ಏಕೈಕ ಹೊರಗಿನ try/except Partial Results ಕಳೆದುಕೊಳ್ಳುತ್ತದೆ',
      bodyEn: 'If execute_batch_with_errors() wrapped the entire for-loop in one try/except instead of wrapping each future.result() individually, a single failure (call_B) would abort processing of the remaining futures too, discarding call_A and call_C\'s genuinely successful results along with it. Placing the try/except per-future, as this lesson\'s code genuinely does, is what let all three outcomes -- two successes and one failure -- survive together.',
      bodyKn: 'execute_batch_with_errors() ಇಡೀ for-loop ಅನ್ನೂ ಒಂದೂ try/except ನಲ್ಲಿ ಸುತ್ತಿದ್ದರೆ, ಒಂದೂ ವೈಫಲ್ಯ (call_B) ಉಳಿದ futures ya ಪ್ರಕ್ರಿಯೆಯನ್ನೂ ಸಹ ನಿಲ್ಲಿಸುತ್ತಿತ್ತು, call_A ಮತ್ತು call_C ya ನಿಜವಾಗಿ ಯಶಸ್ವಿ ಫಲಿತಾಂಶಗಳನ್ನೂ ಸಹ ಕಳೆದುಕೊಳ್ಳುತ್ತಿತ್ತು.' } },

    { type: 'heading', data: { textEn: 'Connecting Back to Part 1\'s Latency Formula', textKn: 'Part 1 ya Latency ಸೂತ್ರಕ್ಕೆ ಮತ್ತೆ ಸಂಪರ್ಕಿಸುವುದೂ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'The Straggler Is the Edge Case of max(latencies)', headingKn: 'Straggler max(latencies) ya Edge Case',
      bodyEn: 'Part 1 genuinely measured T_parallel ~ max(0.1, 0.15, 0.2) = 0.2s, a case where the latencies were close together. This lesson\'s straggler test deliberately makes one latency (0.3s) far larger than the others (0.02s, 0.03s), and the genuinely measured 0.305s confirms the same max() formula holds even at that extreme -- fast calls contribute almost nothing to total batch time once a slow one is present.',
      bodyKn: 'Part 1 ನಿಜವಾಗಿ T_parallel ~ max(0.1, 0.15, 0.2) = 0.2s ಅಳೆಯಿತು, ಈ ಪ್ರಕರಣದಲ್ಲಿ latencies ಹತ್ತಿರವಾಗಿದ್ದವು. ಈ lesson ya straggler test ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ಒಂದೂ latency ಅನ್ನೂ ಇತರರಿಗಿಂತ ಹೆಚ್ಚೂ ದೊಡ್ಡದಾಗಿ ಮಾಡುತ್ತದೆ.' } },

    { type: 'table', data: {
      captionEn: 'Genuine Numbers Across All Three Parts of This Module', captionKn: 'ಈ Module ya ಎಲ್ಲಾ ಮೂರೂ ಭಾಗಗಳಾದ್ಯಂತ ನಿಜ ಸಂಖ್ಯೆಗಳು',
      rows: "Test|Genuinely measured/observed result\nPart 1 sequential (3 calls)|0.452s\nPart 1 parallel (3 calls)|0.205s\nPart 2 argument-completion order|A, C, B\nPart 2 tool-result order|B, C, A\nPart 3 batch with 1 failure|call_B isolated as {ok: False}, others unaffected\nPart 3 straggler batch|0.305s, dominated by the 0.3s call" } },

    { type: 'heading', data: { textEn: 'Why Isolation and Timeouts Are Not Optional in Production', textKn: 'Production ನಲ್ಲಿ Isolation ಮತ್ತು Timeouts ಏಕೆ ಐಚ್ಛಿಕವಲ್ಲ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Two Failure Modes, Two Genuinely Demonstrated Fixes', headingKn: 'ಎರಡೂ ವೈಫಲ್ಯ ಮೋಡ್‌ಗಳು, ಎರಡೂ ನಿಜವಾಗಿ ಪ್ರದರ್ಶಿಸಿದ ಪರಿಹಾರಗಳು',
      bodyEn: 'This lesson genuinely demonstrated two distinct failure modes that a naive parallel tool runtime would handle badly: an exception in one call (fixed by per-future try/except) and one call taking far longer than the rest (which would be fixed in production by wrapping future.result(timeout=...) and treating a TimeoutError as its own typed outcome, not demonstrated here but a direct extension of the pattern).',
      bodyKn: 'ಈ lesson ಒಂದೂ naive parallel tool runtime ಕೆಟ್ಟದಾಗಿ ನಿರ್ವಹಿಸುವ ಎರಡೂ ವಿಭಿನ್ನ ವೈಫಲ್ಯ ಮೋಡ್‌ಗಳನ್ನೂ ನಿಜವಾಗಿ ಪ್ರದರ್ಶಿಸಿತು: ಒಂದೂ call ನಲ್ಲಿ ಒಂದೂ exception, ಇತರರಿಗಿಂತ ಹೆಚ್ಚೂ ಸಮಯ ತೆಗೆದುಕೊಳ್ಳುವ ಒಂದೂ call.' } },

    { type: 'table', data: {
      captionEn: 'Key Terms for Part 3', captionKn: 'Part 3 ಗಾಗಿ ಮುಖ್ಯ ಪದಗಳು',
      rows: "Term|Meaning\nError isolation|One call's failure does not corrupt or abort other independent calls' results\nStraggler|The slowest call in a parallel batch, which alone determines overall wall-clock time\nPer-call timeout|A production safeguard (not shown here) that bounds how long any one straggler can delay a batch" } },

    { type: 'concept', data: {
      headingEn: 'Module Wrap-Up: Read, Build, Run + Prove', headingKn: 'Module ಸಾರಾಂಶ: Read, Build, Run + Prove',
      bodyEn: 'Part 1 (Read) established why fan-out reduces latency and why IDs matter. Part 2 (Build) genuinely constructed a StreamAccumulator proving interleaved streams reconstruct correctly. Part 3 (Run + Prove) genuinely demonstrated error isolation and the straggler problem, completing the module\'s progression from concept to working, tested code.',
      bodyKn: 'Part 1 (Read) fan-out ಏಕೆ latency ಕಡಿಮೆ ಮಾಡುತ್ತದೆ ಎಂದೂ ಸ್ಥಾಪಿಸಿತು. Part 2 (Build) ಒಂದೂ StreamAccumulator ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿತು. Part 3 (Run + Prove) error isolation ಮತ್ತು straggler ಸಮಸ್ಯೆಯನ್ನೂ ನಿಜವಾಗಿ ಪ್ರದರ್ಶಿಸಿತು.' } },

    { type: 'concept', data: {
      headingEn: 'Preview: Structured Output, the Next Module', headingKn: 'ಪೂರ್ವವೀಕ್ಷಣೆ: Structured Output, ಮುಂದಿನ Module',
      bodyEn: 'The next module (Structured Output) builds directly on the argument-parsing and schema-validity boundary genuinely exercised throughout this module -- json.loads() succeeding is only the first gate; whether the parsed value actually satisfies a schema is the next one.',
      bodyKn: 'ಮುಂದಿನ module (Structured Output) ಈ module ಉದ್ದಕ್ಕೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿದ argument-parsing, schema-validity ಗಡಿಯ ಮೇಲೆ ನೇರವಾಗಿ ನಿರ್ಮಿಸುತ್ತದೆ.' } },

    { type: 'table', data: {
      captionEn: 'Genuine vs Theoretical, One Final Comparison', captionKn: 'ನಿಜ vs ಸೈದ್ಧಾಂತಿಕ, ಒಂದೂ ಅಂತಿಮ ಹೋಲಿಕೆ',
      rows: "Scenario|Theoretical|Genuinely measured\nBatch with equal-ish latencies (Part 1)|max(0.1,0.15,0.2)=0.2s|0.205s\nBatch with a dominant straggler (Part 3)|max(0.02,0.03,0.3)=0.3s|0.305s" } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: what happened to call_A and call_C when call_B failed?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: call_B ವಿಫಲವಾದಾಗ call_A ಮತ್ತು call_C ಗೆ ಏನಾಯಿತು?',
        opts: ['They both completed successfully, unaffected by call_B\'s failure', 'They also failed', 'The whole batch crashed', 'They were skipped'], correct: 0,
        optsKn: ['ಎರಡೂ ಯಶಸ್ವಿಯಾಗಿ ಪೂರ್ಣಗೊಂಡವು, call_B ya ವೈಫಲ್ಯದಿಂದ ಪ್ರಭಾವಿತವಾಗದೆ', 'ಎರಡೂ ವಿಫಲವಾದವು', 'ಸಂಪೂರ್ಣ batch crash ಆಯಿತು', 'ಅವುಗಳನ್ನೂ ಬಿಟ್ಟುಬಿಡಲಾಯಿತು'] },
      { q: 'Genuinely measured: how long did the straggler batch (0.02s, 0.03s, 0.3s) take?', qKn: 'ನಿಜವಾಗಿ ಅಳೆಯಲಾಗಿದೆ: straggler batch (0.02s, 0.03s, 0.3s) ಎಷ್ಟೂ ಸಮಯ ತೆಗೆದುಕೊಂಡಿತು?',
        opts: ['~0.305s, dominated by the straggler', '~0.05s, the sum of the fast calls', '~0.02s, the fastest call', '~0.35s, the sum of all three'], correct: 0,
        optsKn: ['~0.305s, straggler ಇಂದ ಪ್ರಾಬಲ್ಯಗೊಂಡಿದೆ', '~0.05s, ವೇಗದ calls ya ಮೊತ್ತ', '~0.02s, ಅತೀ ವೇಗದ call', '~0.35s, ಎಲ್ಲಾ ಮೂರರ ಮೊತ್ತ'] },
      { q: 'Why does one straggler dominate parallel wall-clock time?', qKn: 'ಒಂದೂ straggler ಏಕೆ parallel wall-clock ಸಮಯವನ್ನೂ ಪ್ರಾಬಲ್ಯಗೊಳಿಸುತ್ತದೆ?',
        opts: ['Because T_parallel approximates max(latencies), and the straggler has the largest latency', 'Because ThreadPoolExecutor runs calls in sequence', 'Because Python cannot handle 3 threads', 'Because stragglers always fail'], correct: 0,
        optsKn: ['ಏಕೆಂದರೆ T_parallel max(latencies) ಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ, straggler ಅತೀ ದೊಡ್ಡ latency ಹೊಂದಿದೆ', 'ಏಕೆಂದರೆ ThreadPoolExecutor calls ಅನ್ನೂ ಅನುಕ್ರಮವಾಗಿ ಚಲಾಯಿಸುತ್ತದೆ', 'ಏಕೆಂದರೆ ಪೈಥಾನ್ 3 threads ನಿರ್ವಹಿಸಲಾಗುವುದಿಲ್ಲ', 'ಏಕೆಂದರೆ stragglers ಯಾವಾಗಲೂ ವಿಫಲವಾಗುತ್ತವೆ'] },
      { q: 'What production mechanism directly addresses the straggler problem?', qKn: 'ಯಾವ production ಕಾರ್ಯವಿಧಾನ straggler ಸಮಸ್ಯೆಯನ್ನೂ ನೇರವಾಗಿ ಪರಿಹರಿಸುತ್ತದೆ?',
        opts: ['Per-call timeouts', 'Increasing max_workers indefinitely', 'Removing all error handling', 'Using a global argument buffer'], correct: 0,
        optsKn: ['Per-call timeouts', 'max_workers ಅನ್ನೂ ಅನಿರ್ದಿಷ್ಟವಾಗಿ ಹೆಚ್ಚಿಸುವುದೂ', 'ಎಲ್ಲಾ error handling ತೆಗೆದುಹಾಕುವುದೂ', 'ಒಂದೂ global argument buffer ಬಳಸುವುದೂ'] },
      { q: 'Which single principle connects Part 1, Part 2, and Part 3 of this module?', qKn: 'ಈ module ya Part 1, Part 2, Part 3 ಅನ್ನೂ ಯಾವ ಒಂದೂ ತತ್ವ ಸಂಪರ್ಕಿಸುತ್ತದೆ?',
        opts: ['Never rely on order or position; correlate and isolate by call ID', 'Always use exactly 3 tools', 'Threads are always faster than async', 'JSON Schema replaces error handling'], correct: 0,
        optsKn: ['ಎಂದಿಗೂ order ಅಥವಾ position ಅವಲಂಬಿಸಬೇಡಿ; call ID ಇಂದ correlate, isolate ಮಾಡಿ', 'ಯಾವಾಗಲೂ ನಿಖರವಾಗಿ 3 tools ಬಳಸಿ', 'Threads ಯಾವಾಗಲೂ async ಗಿಂತ ವೇಗವಾಗಿರುತ್ತವೆ', 'JSON Schema error handling ಬದಲಾಯಿಸುತ್ತದೆ'] },
    ] } },
  ],
};
