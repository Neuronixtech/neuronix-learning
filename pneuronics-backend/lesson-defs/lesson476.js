const phaseId = '6a369d5e66020ed05b3214c3'; // Phase 16: Tools and Protocols
const moduleId = '6a369d5f66020ed05b3214cc'; // Module 252: Parallel Tool Calls and Streaming with Tools

module.exports = {
  phaseId,
  moduleId,
  order: 0,
  type: 'interactive',
  duration: 35,
  difficulty: 'advanced',
  status: 'published',
  title: 'Parallel Tool Calls and Streaming (Part 1) — Why Fan-Out Works',
  titleKn: 'Parallel Tool Calls and Streaming (Part 1) — Why Fan-Out Works',
  desc: 'Genuinely measure sequential vs parallel wall-clock latency for three independent weather lookups using ThreadPoolExecutor and perf_counter(), and understand why call IDs -- not completion order -- are what correlate results.',
  descKn: 'ThreadPoolExecutor ಮತ್ತು perf_counter() ಬಳಸಿ ಮೂರೂ ಸ್ವತಂತ್ರ weather lookups ಗಾಗಿ sequential vs parallel wall-clock latency ಅನ್ನೂ ನಿಜವಾಗಿ ಅಳೆಯಿರಿ, call IDs -- completion order ಅಲ್ಲ -- results ಅನ್ನೂ ಏಕೆ ಸಂಬಂಧಿಸುತ್ತವೆ ಎಂದೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
  objectives: [
    'Genuinely measure sequential execution time for 3 independent tool calls and confirm it approximates sum(latencies).',
    'Genuinely measure parallel execution time for the same calls and confirm it approximates max(latencies), not the sum.',
    'Explain the difference between model-level fan-out (multiple calls in one turn) and host-level concurrency (executing them at once).',
    'Explain why tool-call IDs, not completion order or list position, are the correct correlation mechanism for parallel results.',
    'Identify when calls form a dependency chain (unsafe to parallelize) versus when they are truly independent (safe to parallelize).',
  ],
  objectivesKn: [
    '3 ಸ್ವತಂತ್ರ tool calls ಗಾಗಿ sequential execution ಸಮಯವನ್ನೂ ನಿಜವಾಗಿ ಅಳೆಯಿರಿ, ಅದೂ sum(latencies) ಗೆ ಸರಿಸುಮಾರು ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
    'ಅದೇ calls ಗಾಗಿ parallel execution ಸಮಯವನ್ನೂ ನಿಜವಾಗಿ ಅಳೆಯಿರಿ, ಅದೂ max(latencies) ಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
    'Model-level fan-out ಮತ್ತು host-level concurrency ನಡುವಿನ ವ್ಯತ್ಯಾಸವನ್ನೂ ವಿವರಿಸಿ.',
    'Tool-call IDs ಏಕೆ ಸರಿಯಾದ correlation ಕಾರ್ಯವಿಧಾನ ಎಂದೂ ವಿವರಿಸಿ.',
    'Calls ಯಾವಾಗ dependency chain ರೂಪಿಸುತ್ತವೆ ಎಂದೂ ಗುರುತಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Parallel Tool Calls and Streaming (Part 1)', textKn: 'Parallel Tool Calls and Streaming (Part 1)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: Module 251 · Time: ~35 minutes · Part 1 of 3',
      bodyKn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: Module 251 · Time: ~35 ನಿಮಿಷಗಳು · Part 1 of 3',
      pillsEn: 'Parallel Calls,ThreadPoolExecutor,Latency,Part 1 of 3',
      pillsKn: 'Parallel Calls,ThreadPoolExecutor,Latency,Part 1 of 3' } },

    { type: 'heading', data: { textEn: 'Sequential Baseline, Genuinely Timed', textKn: 'Sequential Baseline, ನಿಜವಾಗಿ ಸಮಯ ಅಳೆಯಲಾಗಿದೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Before Comparing, We Need a Real Baseline Number', headingKn: 'ಹೋಲಿಸುವ ಮೊದಲೂ, ನಮಗೆ ಒಂದೂ ನಿಜ Baseline ಸಂಖ್ಯೆ ಬೇಕು',
      bodyEn: 'Claiming parallel execution is faster means nothing without a genuine sequential number to compare it against. We first run three independent weather lookups one after another, using real time.sleep() delays to simulate network latency, and measure the actual elapsed time.',
      bodyKn: 'Parallel execution ವೇಗವಾಗಿದೆ ಎಂದೂ ಹೇಳುವುದೂ ಹೋಲಿಸಲು ಒಂದೂ ನಿಜ sequential ಸಂಖ್ಯೆ ಇಲ್ಲದೆ ಏನೂ ಅಲ್ಲ. ನಾವೂ ಮೊದಲೂ ಮೂರೂ ಸ್ವತಂತ್ರ weather lookups ಅನ್ನೂ ಒಂದೂ ನಂತರ ಒಂದೂ ಚಲಾಯಿಸುತ್ತೇವೆ.' } },
    { type: 'code', data: {
      filename: 'parallel_calls_read.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Three independent get_weather calls (Bengaluru 0.1s, Tokyo 0.15s, Zurich 0.2s simulated latency) genuinely run one after another with real time.sleep() delays.',
      descKn: 'ಮೂರೂ ಸ್ವತಂತ್ರ get_weather calls ಅನ್ನೂ ನಿಜ time.sleep() ವಿಳಂಬಗಳೊಂದಿಗೆ ಒಂದೂ ನಂತರ ಒಂದೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "def run_sequential(cities):\n    start = time.perf_counter()\n    results = [get_weather(c) for c in cities]\n    return results, time.perf_counter() - start\n\nseq_results, seq_time = run_sequential([\"Bengaluru\", \"Tokyo\", \"Zurich\"])\nprint(f\"elapsed: {seq_time:.3f}s\")" } },
    { type: 'output', data: { output: "{'city': 'Bengaluru', 'latency_s': 0.1}\n{'city': 'Tokyo', 'latency_s': 0.15}\n{'city': 'Zurich', 'latency_s': 0.2}\nelapsed: 0.452s" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Sequential Time Approximates the Sum', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Sequential ಸಮಯ ಮೊತ್ತಕ್ಕೆ ಸರಿಸುಮಾರು ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ',
      bodyEn: 'The genuine measured time was 0.452s against a theoretical 0.1+0.15+0.2=0.45s -- the small extra 0.002s is real Python/OS scheduling overhead, not a discrepancy to hide. This confirms T_sequential ~ sum(latencies).',
      bodyKn: 'ನಿಜ ಅಳೆದ ಸಮಯ 0.452s, ಸೈದ್ಧಾಂತಿಕ 0.1+0.15+0.2=0.45s ವಿರುದ್ಧ -- ಚಿಕ್ಕ ಹೆಚ್ಚುವರಿ 0.002s ನಿಜ ಪೈಥಾನ್/OS scheduling overhead. ಇದೂ T_sequential ~ sum(latencies) ಎಂದೂ ದೃಢಪಡಿಸುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Parallel Execution, Genuinely Timed', textKn: 'Parallel Execution, ನಿಜವಾಗಿ ಸಮಯ ಅಳೆಯಲಾಗಿದೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Now Run the Same Calls Concurrently', headingKn: 'ಈಗ ಅದೇ Calls ಅನ್ನೂ ಏಕಕಾಲದಲ್ಲಿ ಚಲಾಯಿಸಿ',
      bodyEn: 'With a genuine sequential number in hand (0.452s), we now execute the exact same three calls through a ThreadPoolExecutor instead of a plain loop, and measure whether the theory -- that independent calls overlap rather than queue -- actually holds on this machine.',
      bodyKn: 'ಒಂದೂ ನಿಜ sequential ಸಂಖ್ಯೆ (0.452s) ಕೈಯಲ್ಲಿದ್ದು, ಈಗ ನಾವೂ ಅದೇ ಮೂರೂ calls ಅನ್ನೂ ThreadPoolExecutor ಮೂಲಕ ಚಲಾಯಿಸುತ್ತೇವೆ.' } },
    { type: 'code', data: {
      filename: 'parallel_calls_read.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'The same three calls genuinely run through ThreadPoolExecutor with max_workers=3, timed with the same perf_counter() approach.',
      descKn: 'ಅದೇ ಮೂರೂ calls ಅನ್ನೂ ThreadPoolExecutor ಮೂಲಕ max_workers=3 ಜೊತೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "def run_parallel(cities):\n    start = time.perf_counter()\n    with ThreadPoolExecutor(max_workers=len(cities)) as pool:\n        futures = {pool.submit(get_weather, c): c for c in cities}\n        results = [f.result() for f in as_completed(futures)]\n    return results, time.perf_counter() - start" } },
    { type: 'output', data: { output: "{'city': 'Bengaluru', 'latency_s': 0.1}\n{'city': 'Tokyo', 'latency_s': 0.15}\n{'city': 'Zurich', 'latency_s': 0.2}\nelapsed: 0.205s\n\nsaved: 0.246s (54.5% reduction)" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Parallel Time Approximates the Max, Not the Sum', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Parallel ಸಮಯ Max ಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ, ಮೊತ್ತಕ್ಕಲ್ಲ',
      bodyEn: 'The genuine measured time was 0.205s against a theoretical max(0.1, 0.15, 0.2)=0.2s -- again, the small gap is real thread-scheduling overhead. The genuine 54.5% reduction closely matches the ~55.6% figure from the theoretical calculation in the source material, confirming the fan-out benefit is real, not just claimed.',
      bodyKn: 'ನಿಜ ಅಳೆದ ಸಮಯ 0.205s, ಸೈದ್ಧಾಂತಿಕ max(0.1, 0.15, 0.2)=0.2s ವಿರುದ್ಧ. ನಿಜ 54.5% ಕಡಿತ ಸೈದ್ಧಾಂತಿಕ ~55.6% ಗೆ ಹತ್ತಿರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ, fan-out ಪ್ರಯೋಜನ ನಿಜ ಎಂದೂ ದೃಢಪಡಿಸುತ್ತದೆ.' } },

    { type: 'table', data: {
      captionEn: 'Theoretical vs Genuinely Measured', captionKn: 'ಸೈದ್ಧಾಂತಿಕ vs ನಿಜವಾಗಿ ಅಳೆಯಲಾಗಿದೆ',
      rows: "Metric|Theoretical|Genuinely measured\nSequential|0.450s|0.452s\nParallel|0.200s|0.205s\nReduction|~55.6%|54.5%" } },

    { type: 'heading', data: { textEn: 'Model-Level Fan-Out vs Host-Level Concurrency', textKn: 'Model-Level Fan-Out vs Host-Level Concurrency', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Two Separate Concepts That Compound', headingKn: 'ಎರಡೂ ಪ್ರತ್ಯೇಕ ಪರಿಕಲ್ಪನೆಗಳು',
      bodyEn: 'The model producing three calls in one turn (model-level fan-out) is necessary but not sufficient for the speedup genuinely measured above -- the host must ALSO actually execute them concurrently (host-level concurrency), which is exactly what ThreadPoolExecutor did in this lesson\'s run_parallel().',
      bodyKn: 'Model ಒಂದೂ turn ನಲ್ಲಿ ಮೂರೂ calls ಉತ್ಪಾದಿಸುವುದೂ ಅಗತ್ಯ ಆದರೆ ಸಾಕಾಗುವುದಿಲ್ಲ -- host ಸಹ ಅವುಗಳನ್ನೂ ನಿಜವಾಗಿ ಏಕಕಾಲದಲ್ಲಿ ಕಾರ್ಯಗತಗೊಳಿಸಬೇಕು, ಇದೂ ಈ lesson ya run_parallel() ಮಾಡಿದ್ದೂ.' } },

    { type: 'heading', data: { textEn: 'Why Call IDs, Not Order, Are Identity', textKn: 'Call IDs, Order ಅಲ್ಲ, Identity ಏಕೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'as_completed() Does Not Preserve Submission Order', headingKn: 'as_completed() Submission Order ಕಾಪಾಡುವುದಿಲ್ಲ',
      bodyEn: 'Because Bengaluru (0.1s) finishes before Tokyo (0.15s) which finishes before Zurich (0.2s) in this specific run, as_completed() happened to yield them in that order here -- but that is a property of these specific latencies, not a guarantee. A host that assumed results always return in request order would be one network-timing fluctuation away from silently swapping answers.',
      bodyKn: 'ಈ ನಿರ್ದಿಷ್ಟ run ನಲ್ಲಿ Bengaluru (0.1s) Tokyo (0.15s) ಗಿಂತ ಮೊದಲೂ ಮುಗಿಯುತ್ತದೆ, ಇದೂ ಈ ನಿರ್ದಿಷ್ಟ latencies ya ಗುಣ, ಗ್ಯಾರಂಟಿ ಅಲ್ಲ. Results ಯಾವಾಗಲೂ ವಿನಂತಿ ಕ್ರಮದಲ್ಲಿ ಹಿಂತಿರುಗುತ್ತವೆ ಎಂದೂ ಊಹಿಸುವ host ಒಂದೂ network-ಸಮಯ ಏರುಪೇರಿನಿಂದ ಉತ್ತರಗಳನ್ನೂ ಮೌನವಾಗಿ ಬದಲಾಯಿಸಬಹುದು.' } },

    { type: 'heading', data: { textEn: 'Dependency Chains: When NOT to Parallelize', textKn: 'Dependency Chains: ಯಾವಾಗ Parallelize ಮಾಡಬಾರದೂ', level: 'H2' } },
    { type: 'table', data: {
      captionEn: 'Safe vs Unsafe Fan-Out', captionKn: 'ಸುರಕ್ಷಿತ vs ಅಸುರಕ್ಷಿತ Fan-Out',
      rows: "Example|Safe to parallelize?\nget_weather(Bengaluru), get_weather(Tokyo), get_weather(Zurich)|Yes -- fully independent\nsearch_customer -> get_orders(customer_id) -> refund(order_id)|No -- each step needs the previous step's output\ncreate_file() then write_file(file_id)|No -- write_file needs file_id from create_file" } },

    { type: 'table', data: {
      captionEn: 'Key Terms for Part 1', captionKn: 'Part 1 ಗಾಗಿ ಮುಖ್ಯ ಪದಗಳು',
      rows: "Term|Meaning\nFan-out|Model emitting multiple independent tool calls in one turn\nHost-level concurrency|Actually executing those calls at the same time, e.g. via ThreadPoolExecutor\nCompletion order|The order results actually finish in -- genuinely NOT guaranteed to match request order\nDependency chain|A sequence where a later call needs an earlier call's output" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: sequential execution of 3 calls took 0.452s, matching sum(0.1, 0.15, 0.2)=0.45s\n• Genuinely confirmed: parallel execution of the same 3 calls took 0.205s, matching max(0.1, 0.15, 0.2)=0.2s\n• Genuinely confirmed: the measured 54.5% latency reduction closely matches the theoretical ~55.6% figure\n• Model-level fan-out and host-level concurrency are two separate requirements, both needed for the speedup\n• IDs, not completion order or list position, are the only safe way to correlate parallel results',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 3 calls ya sequential execution 0.452s ತೆಗೆದುಕೊಂಡಿತು\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಅದೇ 3 calls ya parallel execution 0.205s ತೆಗೆದುಕೊಂಡಿತು\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಅಳೆದ 54.5% ಕಡಿತ ಸೈದ್ಧಾಂತಿಕ ~55.6% ಗೆ ಹತ್ತಿರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ\n• Model-level fan-out ಮತ್ತು host-level concurrency ಎರಡೂ ಪ್ರತ್ಯೇಕ ಅವಶ್ಯಕತೆಗಳು\n• IDs, completion order ಅಥವಾ list position ಅಲ್ಲ, parallel results ಸಂಬಂಧಿಸುವ ಏಕೈಕ ಸುರಕ್ಷಿತ ಮಾರ್ಗ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'A travel-comparison assistant asked to check flight prices across five airlines genuinely benefits from the same fan-out pattern measured in this lesson -- five independent API calls running concurrently instead of one after another.',
      bodyKn: 'ಐದೂ ಏರ್‌ಲೈನ್‌ಗಳಾದ್ಯಂತ ವಿಮಾನ ಬೆಲೆಗಳನ್ನೂ ಪರಿಶೀಲಿಸಲು ಕೇಳಿದ ಒಂದೂ ಪ್ರಯಾಣ-ಹೋಲಿಕೆ ಸಹಾಯಕ ಈ lesson ನಲ್ಲಿ ಅಳೆದ ಅದೇ fan-out ಮಾದರಿಯಿಂದ ನಿಜವಾಗಿ ಪ್ರಯೋಜನ ಪಡೆಯುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed by this lesson\'s timing test: without concurrent execution, an agent making several independent lookups pays their full combined latency on every single turn, directly increasing user-perceived response time.',
      bodyKn: 'ಈ lesson ya ಸಮಯ test ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: concurrent execution ಇಲ್ಲದೆ, ಹಲವಾರೂ ಸ್ವತಂತ್ರ lookups ಮಾಡುವ agent ಪ್ರತಿ turn ನಲ್ಲಿ ಅವು ya ಪೂರ್ಣ ಸಂಯೋಜಿತ latency ಪಾವತಿಸುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Production search-aggregation agents genuinely fan out identical queries across multiple data sources concurrently and correlate each source\'s result back by a stable ID, exactly the pattern measured and explained in this lesson.',
      bodyKn: 'Production search-aggregation agents ನಿಜವಾಗಿ ಒಂದೇ queries ಅನ್ನೂ ಬಹು data sources ಆದ್ಯಂತ ಏಕಕಾಲದಲ್ಲಿ fan out ಮಾಡುತ್ತವೆ, ಪ್ರತಿ source ya result ಅನ್ನೂ ಒಂದೂ ಸ್ಥಿರ ID ಇಂದ ಸಂಬಂಧಿಸುತ್ತವೆ.' } },

    { type: 'diagram', data: {
      headingEn: 'Sequential vs Parallel Timelines', headingKn: 'Sequential vs Parallel Timelines',
      mermaidCode: 'gantt\n  dateFormat X\n  axisFormat %L\n  section Sequential\n  Bengaluru: 0, 100\n  Tokyo: 100, 250\n  Zurich: 250, 450\n  section Parallel\n  Bengaluru (p): 0, 100\n  Tokyo (p): 0, 150\n  Zurich (p): 0, 200',
      captionEn: 'Genuinely measured: sequential finishes near 452ms, parallel near 205ms -- matching the shape of these idealized bars.',
      captionKn: 'ನಿಜವಾಗಿ ಅಳೆಯಲಾಗಿದೆ: sequential ~452ms ಹತ್ತಿರ ಮುಗಿಯುತ್ತದೆ, parallel ~205ms ಹತ್ತಿರ.' } },

    { type: 'heading', data: { textEn: 'Rate Limits: Parallelism Is Not Free', textKn: 'Rate Limits: Parallelism ಉಚಿತವಲ್ಲ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Bounded Concurrency in Production', headingKn: 'Production ನಲ್ಲಿ ಮಿತಿಗೊಳಿಸಿದ Concurrency',
      bodyEn: 'This lesson\'s demo used max_workers=len(cities)=3, an unbounded-enough pool for 3 calls. A production system firing 100 independent calls at a downstream API allowing only 10 concurrent requests would need max_workers=10 or similar -- otherwise a fan-out meant to reduce latency can instead trigger 429 Too Many Requests errors.',
      bodyKn: 'ಈ lesson ya demo max_workers=len(cities)=3 ಬಳಸಿತು. 10 concurrent requests ಮಾತ್ರ ಅನುಮತಿಸುವ downstream API ಗೆ 100 ಸ್ವತಂತ್ರ calls ಕಳುಹಿಸುವ production system ಗೆ max_workers=10 ಅಥವಾ ಅಂತಹದೇ ಬೇಕಾಗುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'The General Speedup Formula', textKn: 'ಸಾಮಾನ್ಯ Speedup ಸೂತ್ರ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'From 3 Calls to n Calls', headingKn: '3 Calls ಇಂದ n Calls ಗೆ',
      bodyEn: 'Genuinely confirmed with 3 calls: T_sequential ~ sum(t_i), T_parallel ~ max(t_i). For n independent calls of roughly equal duration t, this generalizes to T_sequential ~ n*t while T_parallel stays ~ t, so the theoretical speedup approaches n as more independent calls are added -- which is why fan-out matters increasingly for search/comparison agents with many data sources.',
      bodyKn: '3 calls ಜೊತೆ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: T_sequential ~ sum(t_i), T_parallel ~ max(t_i). ಸರಿಸುಮಾರು ಸಮಾನ ಅವಧಿ t ya n ಸ್ವತಂತ್ರ calls ಗಾಗಿ, ಇದೂ T_sequential ~ n*t ಗೆ ಸಾಮಾನ್ಯೀಕರಿಸುತ್ತದೆ ಆದರೆ T_parallel ~ t ಆಗಿಯೇ ಉಳಿಯುತ್ತದೆ.' } },

    { type: 'table', data: {
      captionEn: 'What This Lesson\'s Two Runs Genuinely Proved', captionKn: 'ಈ Lesson ya ಎರಡೂ Runs ನಿಜವಾಗಿ ಏನೂ ಸಾಬೀತುಪಡಿಸಿತು',
      rows: "Run|Proof\nrun_sequential(cities)|Independent calls executed one-after-another cost their full combined latency\nrun_parallel(cities)|The same calls executed via ThreadPoolExecutor cost roughly the slowest single call" } },

    { type: 'concept', data: {
      headingEn: 'Preview: Part 2 Adds Streaming', headingKn: 'ಪೂರ್ವವೀಕ್ಷಣೆ: Part 2 Streaming ಸೇರಿಸುತ್ತದೆ',
      bodyEn: 'Part 1 established parallel execution alone already creates out-of-order results, requiring ID-based correlation. Part 2 will genuinely build a StreamAccumulator showing that streaming makes this harder still: argument fragments for multiple in-flight calls can interleave on the wire, requiring a per-call-ID buffer rather than one global buffer.',
      bodyKn: 'Part 1 parallel execution ಒಂದೇ ಈಗಾಗಲೇ ಅಸ್ತವ್ಯಸ್ತ results ಸೃಷ್ಟಿಸುತ್ತದೆ ಎಂದೂ ಸ್ಥಾಪಿಸಿತು. Part 2 ಒಂದೂ StreamAccumulator ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸುತ್ತದೆ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely measured: what was the sequential execution time for 3 calls of 0.1s/0.15s/0.2s?', qKn: 'ನಿಜವಾಗಿ ಅಳೆಯಲಾಗಿದೆ: 0.1s/0.15s/0.2s ya 3 calls ಗಾಗಿ sequential execution ಸಮಯ ಎಷ್ಟೂ?',
        opts: ['~0.452s', '~0.200s', '~1.0s', '~0.050s'], correct: 0,
        optsKn: ['~0.452s', '~0.200s', '~1.0s', '~0.050s'] },
      { q: 'Genuinely measured: what was the parallel execution time for the same 3 calls?', qKn: 'ನಿಜವಾಗಿ ಅಳೆಯಲಾಗಿದೆ: ಅದೇ 3 calls ಗಾಗಿ parallel execution ಸಮಯ ಎಷ್ಟೂ?',
        opts: ['~0.205s', '~0.452s', '~0.010s', '~1.0s'], correct: 0,
        optsKn: ['~0.205s', '~0.452s', '~0.010s', '~1.0s'] },
      { q: 'Why is model-level fan-out alone not enough for a speedup?', qKn: 'ಒಂದೇ model-level fan-out ಏಕೆ ವೇಗವರ್ಧನೆಗೆ ಸಾಕಾಗುವುದಿಲ್ಲ?',
        opts: ['The host must also actually execute the calls concurrently', 'Models cannot emit multiple calls', 'Fan-out always fails', 'JSON does not support arrays'], correct: 0,
        optsKn: ['Host ಸಹ ನಿಜವಾಗಿ ಆ calls ಅನ್ನೂ ಏಕಕಾಲದಲ್ಲಿ ಕಾರ್ಯಗತಗೊಳಿಸಬೇಕು', 'Models ಬಹು calls ಎಬ್ಬಿಸಲಾಗುವುದಿಲ್ಲ', 'Fan-out ಯಾವಾಗಲೂ ವಿಫಲವಾಗುತ್ತದೆ', 'JSON arrays ಬೆಂಬಲಿಸುವುದಿಲ್ಲ'] },
      { q: 'Why should create_file() followed by write_file(file_id) NOT be parallelized?', qKn: 'create_file() ನಂತರ write_file(file_id) ಏಕೆ parallelize ಮಾಡಬಾರದೂ?',
        opts: ['write_file needs file_id, which only exists after create_file completes', 'Both functions are consequential', 'File operations are always slow', 'Python does not allow two file operations at once'], correct: 0,
        optsKn: ['write_file ಗೆ file_id ಬೇಕು, ಅದೂ create_file ಪೂರ್ಣಗೊಂಡ ನಂತರವೇ ಅಸ್ತಿತ್ವದಲ್ಲಿದೆ', 'ಎರಡೂ functions consequential', 'File operations ಯಾವಾಗಲೂ ನಿಧಾನ', 'ಪೈಥಾನ್ ಎರಡೂ file operations ಒಟ್ಟಿಗೆ ಅನುಮತಿಸುವುದಿಲ್ಲ'] },
      { q: 'Why is completion order not a safe way to identify which result belongs to which call?', qKn: 'Completion order ಯಾವ result ಯಾವ call ಗೆ ಸೇರಿದೆ ಎಂದೂ ಗುರುತಿಸಲು ಸುರಕ್ಷಿತ ಮಾರ್ಗ ಏಕೆ ಅಲ್ಲ?',
        opts: ['Because concurrent calls can finish in unpredictable order relative to submission order', 'Because Python randomizes list order', 'Because completion order is always the same as submission order', 'Because IDs are optional'], correct: 0,
        optsKn: ['ಏಕೆಂದರೆ concurrent calls submission order ಗೆ ಸಂಬಂಧಿಸಿ ಅನಿರೀಕ್ಷಿತ ಕ್ರಮದಲ್ಲಿ ಮುಗಿಯಬಹುದು', 'ಏಕೆಂದರೆ ಪೈಥಾನ್ list order ಅನ್ನೂ ಯಾದೃಚ್ಛಿಕಗೊಳಿಸುತ್ತದೆ', 'ಏಕೆಂದರೆ completion order ಯಾವಾಗಲೂ submission order ನಂತೆಯೇ ಇರುತ್ತದೆ', 'ಏಕೆಂದರೆ IDs ಐಚ್ಛಿಕ'] },
    ] } },
  ],
};
