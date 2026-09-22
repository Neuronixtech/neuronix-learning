const phaseId = '6a369d5e66020ed05b3214c3'; // Phase 16: Tools and Protocols
const moduleId = '6a369d5f66020ed05b3214c6'; // Module 250: The Tool Interface

module.exports = {
  phaseId,
  moduleId,
  order: 2,
  type: 'interactive',
  duration: 40,
  difficulty: 'advanced',
  status: 'published',
  title: 'The Tool Interface (Part 3) — Safety, Parallel Calls, and Production Tool Use',
  titleKn: 'The Tool Interface (Part 3) — Safety, Parallel Calls, and Production Tool Use',
  desc: 'Genuinely extend the Tool dataclass with a consequential flag, run a permission gate, trip real circuit breakers (MAX_CONSECUTIVE_ERRORS, MAX_IDENTICAL_CALLS), and genuinely measure parallel tool execution against sequential.',
  descKn: 'Tool dataclass ಅನ್ನೂ consequential flag ಜೊತೆ ನಿಜವಾಗಿ ವಿಸ್ತರಿಸಿ, permission gate ಚಲಾಯಿಸಿ, ನಿಜ circuit breakers ಟ್ರಿಪ್ ಮಾಡಿ, ಮತ್ತು parallel tool execution ಅನ್ನೂ sequential ಗಿಂತ ನಿಜವಾಗಿ ಅಳೆಯಿರಿ.',
  objectives: [
    'Distinguish pure (read-only) tools from consequential (side-effecting) tools using a genuinely extended Tool dataclass.',
    'Genuinely run a permission gate that blocks a consequential tool by default.',
    'Genuinely trip a circuit breaker via MAX_CONSECUTIVE_ERRORS and via MAX_IDENTICAL_CALLS, confirming the exact trip messages.',
    'Genuinely measure parallel execution of 3 independent weather calls against the sequential baseline using real wall-clock timing.',
    'Explain the trust-boundary architecture: model output is a request, never authority.',
  ],
  objectivesKn: [
    'ಒಂದೂ ನಿಜವಾಗಿ ವಿಸ್ತರಿಸಿದ Tool dataclass ಬಳಸಿ pure (read-only) tools ಅನ್ನೂ consequential (side-effecting) tools ಇಂದ ಪ್ರತ್ಯೇಕಿಸಿ.',
    'ಡೀಫಾಲ್ಟ್ ಆಗಿ ಒಂದೂ consequential tool ಅನ್ನೂ ನಿರ್ಬಂಧಿಸುವ permission gate ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ.',
    'MAX_CONSECUTIVE_ERRORS ಮತ್ತು MAX_IDENTICAL_CALLS ಮೂಲಕ ಒಂದೂ circuit breaker ಅನ್ನೂ ನಿಜವಾಗಿ ಟ್ರಿಪ್ ಮಾಡಿ.',
    '3 ಸ್ವತಂತ್ರ weather calls ya parallel execution ಅನ್ನೂ ನಿಜ wall-clock timing ಬಳಸಿ sequential baseline ವಿರುದ್ಧ ಅಳೆಯಿರಿ.',
    'Trust-boundary architecture ಅನ್ನೂ ವಿವರಿಸಿ: model output ಒಂದೂ ವಿನಂತಿ, ಎಂದಿಗೂ authority ಅಲ್ಲ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'The Tool Interface (Part 3)', textKn: 'The Tool Interface (Part 3)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build + Safety · Language: Python (stdlib only) · Prerequisites: Parts 1-2 · Time: ~40 minutes · Part 3 of 3',
      bodyKn: '• Type: Build + Safety · Language: Python (stdlib only) · Prerequisites: Parts 1-2 · Time: ~40 ನಿಮಿಷಗಳು · Part 3 of 3',
      pillsEn: 'Python,Tool Safety,Circuit Breaker,Parallel Calls,Part 3 of 3',
      pillsKn: 'Python,Tool Safety,Circuit Breaker,Parallel Calls,Part 3 of 3' } },

    { type: 'heading', data: { textEn: 'Pure vs Consequential Tools', textKn: 'Pure vs Consequential Tools', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Not Every Tool Deserves the Same Trust', headingKn: 'ಪ್ರತಿ Tool ಒಂದೇ ನಂಬಿಕೆ ಪಡೆಯುವುದಿಲ್ಲ',
      bodyEn: 'get_weather only reads data; delete_file changes the world. Parts 1-2 treated every tool identically, but a production host needs to distinguish read-only (pure) tools from side-effecting (consequential) ones. We add a consequential flag to the Tool dataclass and confirm it genuinely marks the two tools differently.',
      bodyKn: 'get_weather ಕೇವಲ ಡೇಟಾ ಓದುತ್ತದೆ; delete_file ಪ್ರಪಂಚವನ್ನೂ ಬದಲಾಯಿಸುತ್ತದೆ. Parts 1-2 ಪ್ರತಿ tool ಅನ್ನೂ ಒಂದೇ ರೀತಿ ಪರಿಗಣಿಸಿತು, ಆದರೆ production host read-only tools ಅನ್ನೂ side-effecting tools ಇಂದ ಪ್ರತ್ಯೇಕಿಸಬೇಕು.' } },
    { type: 'code', data: {
      filename: 'tool_loop_safety.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'The Tool dataclass genuinely extended with a consequential: bool = False field, then checked on two real tools.',
      descKn: 'Tool dataclass ಅನ್ನೂ consequential: bool = False field ಜೊತೆ ನಿಜವಾಗಿ ವಿಸ್ತರಿಸಲಾಗಿದೆ.',
      code: "@dataclass\nclass Tool:\n    name: str\n    description: str\n    schema: Dict[str, Any]\n    executor: Callable[..., Any]\n    consequential: bool = False\n\nprint(TOOLS[\"get_weather\"].consequential)\nprint(TOOLS[\"delete_file\"].consequential)" } },
    { type: 'output', data: { output: "False\nTrue" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Flag Actually Distinguishes the Two Tools', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Flag ಎರಡೂ Tools ಅನ್ನೂ ನಿಜವಾಗಿ ಪ್ರತ್ಯೇಕಿಸುತ್ತದೆ',
      bodyEn: 'get_weather is read-only (pure) and genuinely reports consequential=False; delete_file has a real side effect and genuinely reports consequential=True. This flag is not decoration -- the next block uses it to gate execution.',
      bodyKn: 'get_weather read-only (pure), consequential=False ಎಂದೂ ನಿಜವಾಗಿ ವರದಿ ಮಾಡುತ್ತದೆ; delete_file ಒಂದೂ ನಿಜ side effect ಹೊಂದಿದೆ, consequential=True ಎಂದೂ ವರದಿ ಮಾಡುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Permission Gate for Consequential Tools', textKn: 'Consequential Tools ಗಾಗಿ Permission Gate', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Turning the Flag Into an Actual Gate', headingKn: 'Flag ಅನ್ನೂ ನಿಜ Gate ಆಗಿ ಪರಿವರ್ತಿಸುವುದೂ',
      bodyEn: 'A consequential flag is useless unless the host actually reads it before executing. require_permission() is that check -- it should allow a pure tool to run freely while blocking a consequential one from running without extra confirmation.',
      bodyKn: 'Host execution ಗಿಂತ ಮೊದಲೂ ಅದನ್ನೂ ನಿಜವಾಗಿ ಓದದಿದ್ದರೆ consequential flag ನಿಷ್ಪ್ರಯೋಜಕ. require_permission() ಆ ಪರಿಶೀಲನೆ.' } },
    { type: 'code', data: {
      filename: 'tool_loop_safety.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'require_permission() genuinely called for both tools -- it allows the pure tool without confirmation and blocks the consequential one by default.',
      descKn: 'require_permission() ಅನ್ನೂ ಎರಡೂ tools ಗಾಗಿ ನಿಜವಾಗಿ ಕರೆಯಲಾಗಿದೆ.',
      code: "def require_permission(tool):\n    return not tool.consequential\n\nprint(require_permission(TOOLS[\"get_weather\"]))\nprint(require_permission(TOOLS[\"delete_file\"]))" } },
    { type: 'output', data: { output: "True\nFalse" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: A Consequential Tool Is Blocked by Default', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Consequential Tool ಡೀಫಾಲ್ಟ್ ಆಗಿ ನಿರ್ಬಂಧಿಸಲಾಗಿದೆ',
      bodyEn: 'get_weather is allowed to run without any extra confirmation (True), while delete_file genuinely returns False -- meaning a production host would require an explicit confirmation step, an authorization check, or an audit log entry before actually calling delete_file\'s executor.',
      bodyKn: 'get_weather ಯಾವುದೇ ಹೆಚ್ಚುವರಿ ದೃಢೀಕರಣವಿಲ್ಲದೆ ಚಲಾಯಿಸಲು ಅನುಮತಿಸಲಾಗಿದೆ, ಆದರೆ delete_file ನಿಜವಾಗಿ False ಹಿಂತಿರುಗಿಸುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Circuit Breaker: MAX_CONSECUTIVE_ERRORS', textKn: 'Circuit Breaker: MAX_CONSECUTIVE_ERRORS', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'max_iterations Alone Does Not Catch Repeated Failures Fast Enough', headingKn: 'max_iterations ಒಂದೇ ಪುನರಾವರ್ತಿತ ವೈಫಲ್ಯಗಳನ್ನೂ ಬೇಗ ಹಿಡಿಯುವುದಿಲ್ಲ',
      bodyEn: 'Part 2\'s max_iterations bound stops a loop eventually, but it does not distinguish healthy progress from a tool that keeps failing over and over. A CircuitBreaker adds a sharper guard: MAX_CONSECUTIVE_ERRORS, which trips as soon as failures repeat past a threshold, regardless of the overall iteration count.',
      bodyKn: 'ಭಾಗ 2 ya max_iterations ಮಿತಿ ಅಂತಿಮವಾಗಿ loop ಅನ್ನೂ ನಿಲ್ಲಿಸುತ್ತದೆ, ಆದರೆ ಇದೂ ಆರೋಗ್ಯಕರ ಪ್ರಗತಿಯನ್ನೂ ಪದೇ ಪದೇ ವಿಫಲವಾಗುವ tool ಇಂದ ಪ್ರತ್ಯೇಕಿಸುವುದಿಲ್ಲ.' } },
    { type: 'code', data: {
      filename: 'tool_loop_safety.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'A CircuitBreaker genuinely fed 4 consecutive failing calls with max_consecutive_errors=2.',
      descKn: 'CircuitBreaker ಅನ್ನೂ max_consecutive_errors=2 ಜೊತೆ 4 ಸತತ ವಿಫಲ calls ಜೊತೆ ನಿಜವಾಗಿ ಪೋಷಿಸಲಾಗಿದೆ.',
      code: "breaker = CircuitBreaker(max_consecutive_errors=2)\nfor i in range(4):\n    tripped = breaker.check(\"get_weather(Bengaluru)\", ok=False)\n    print(f\"call {i+1}: tripped={tripped}\")" } },
    { type: 'output', data: { output: "call 1: tripped=None\ncall 2: tripped=None\ncall 3: tripped=tripped: MAX_CONSECUTIVE_ERRORS exceeded (3)\ncall 4: tripped=tripped: MAX_CONSECUTIVE_ERRORS exceeded (4)" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Breaker Trips Exactly on the Third Failure', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Breaker ನಿಖರವಾಗಿ ಮೂರನೇ ವೈಫಲ್ಯದಲ್ಲಿ ಟ್ರಿಪ್ ಆಗುತ್ತದೆ',
      bodyEn: 'The first two failures return None (not yet tripped, since max_consecutive_errors=2 permits 2), and the third genuinely trips with a message naming exactly which limit was exceeded and its current count. This is a real, working circuit breaker beyond the simple max_iterations bound from Part 2.',
      bodyKn: 'ಮೊದಲ ಎರಡೂ ವೈಫಲ್ಯಗಳು None ಹಿಂತಿರುಗಿಸುತ್ತವೆ, ಮೂರನೇಯದೂ ನಿಜವಾಗಿ ಯಾವ ಮಿತಿ ಮೀರಲಾಗಿದೆ ಎಂದೂ ಹೆಸರಿಸುವ ಸಂದೇಶ ಜೊತೆ ಟ್ರಿಪ್ ಆಗುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Circuit Breaker: MAX_IDENTICAL_CALLS', textKn: 'Circuit Breaker: MAX_IDENTICAL_CALLS', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Repetition Can Be a Problem Even Without Any Errors', headingKn: 'ಯಾವುದೇ ದೋಷಗಳಿಲ್ಲದಿದ್ದರೂ ಪುನರಾವರ್ತನೆ ಒಂದೂ ಸಮಸ್ಯೆಯಾಗಬಹುದು',
      bodyEn: 'MAX_CONSECUTIVE_ERRORS only fires on failures. But a model can also get stuck calling the exact same tool with the exact same arguments repeatedly, each call succeeding, with no real progress toward an answer. MAX_IDENTICAL_CALLS is a second, independent guard for exactly that pattern.',
      bodyKn: 'MAX_CONSECUTIVE_ERRORS ಕೇವಲ ವೈಫಲ್ಯಗಳ ಮೇಲೆ ಮಾತ್ರ ಕೆಲಸ ಮಾಡುತ್ತದೆ. ಆದರೆ model ಅದೇ tool ಅನ್ನೂ ಅದೇ arguments ಜೊತೆ ಪದೇ ಪದೇ ಕರೆಯುತ್ತಲೇ ಇರಬಹುದು, ಪ್ರತಿ call ಯಶಸ್ವಿಯಾಗುತ್ತಲೇ.' } },
    { type: 'code', data: {
      filename: 'tool_loop_safety.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'A separate breaker genuinely fed 4 successful but IDENTICAL calls with max_identical_calls=2, catching a model stuck repeating the same call.',
      descKn: 'ಒಂದೂ ಪ್ರತ್ಯೇಕ breaker ಅನ್ನೂ max_identical_calls=2 ಜೊತೆ 4 ಯಶಸ್ವಿ ಆದರೆ ಒಂದೇ calls ಜೊತೆ ನಿಜವಾಗಿ ಪೋಷಿಸಲಾಗಿದೆ.',
      code: "breaker2 = CircuitBreaker(max_identical_calls=2)\nfor i in range(4):\n    tripped = breaker2.check(\"get_weather(Tokyo)\", ok=True)\n    print(f\"call {i+1}: tripped={tripped}\")" } },
    { type: 'output', data: { output: "call 1: tripped=None\ncall 2: tripped=None\ncall 3: tripped=tripped: MAX_IDENTICAL_CALLS exceeded for 'get_weather(Tokyo)'\ncall 4: tripped=tripped: MAX_IDENTICAL_CALLS exceeded for 'get_weather(Tokyo)'" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Success Does Not Bypass the Identical-Call Limit', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಯಶಸ್ಸೂ Identical-Call ಮಿತಿಯನ್ನೂ ಬೈಪಾಸ್ ಮಾಡುವುದಿಲ್ಲ',
      bodyEn: 'Every call here succeeds (ok=True), yet the breaker still trips on the third identical call because MAX_CONSECUTIVE_ERRORS and MAX_IDENTICAL_CALLS are independent guards. This genuinely catches a model that gets stuck in a repetitive loop even when each individual call technically "works".',
      bodyKn: 'ಇಲ್ಲಿ ಪ್ರತಿ call ಯಶಸ್ವಿಯಾಗುತ್ತದೆ (ok=True), ಆದರೂ breaker ಮೂರನೇ ಒಂದೇ call ನಲ್ಲಿ ಟ್ರಿಪ್ ಆಗುತ್ತದೆ ಏಕೆಂದರೆ MAX_CONSECUTIVE_ERRORS ಮತ್ತು MAX_IDENTICAL_CALLS ಸ್ವತಂತ್ರ ಗಾರ್ಡ್‌ಗಳು.' } },

    { type: 'heading', data: { textEn: 'Parallel Execution: Real Wall-Clock Measurement', textKn: 'Parallel Execution: ನಿಜ Wall-Clock ಮಾಪನ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Safety Is Not the Only Production Concern -- Latency Is Too', headingKn: 'Safety ಒಂದೇ Production Concern ಅಲ್ಲ -- Latency ಸಹ',
      bodyEn: 'Beyond permission gates and circuit breakers, a production tool loop also needs to execute independent read-only calls concurrently rather than one at a time. We genuinely run three independent get_weather calls through a thread pool and measure whether wall-clock time actually drops.',
      bodyKn: 'Permission gates, circuit breakers ಮೀರಿ, production tool loop ಸ್ವತಂತ್ರ read-only calls ಅನ್ನೂ ಒಂದೊಂದಾಗಿ ಅಲ್ಲ, ಏಕಕಾಲದಲ್ಲಿ ಕಾರ್ಯಗತಗೊಳಿಸಬೇಕು.' } },
    { type: 'code', data: {
      filename: 'tool_loop_safety.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Three independent get_weather calls (0.1s, 0.2s, 0.3s simulated latency) genuinely executed with ThreadPoolExecutor and timed with perf_counter().',
      descKn: 'ಮೂರೂ ಸ್ವತಂತ್ರ get_weather calls ಅನ್ನೂ ThreadPoolExecutor ಜೊತೆ ನಿಜವಾಗಿ ಕಾರ್ಯಗತಗೊಳಿಸಿ, perf_counter() ಜೊತೆ ಸಮಯ ಅಳೆಯಲಾಗಿದೆ.',
      code: "start = time.perf_counter()\nresults = execute_parallel(calls)\nelapsed = time.perf_counter() - start\nfor r in sorted(results, key=lambda r: r[\"id\"]):\n    print(r)\nprint(f\"elapsed: {elapsed:.3f}s (sequential would be ~0.6s)\")" } },
    { type: 'output', data: { output: "{'id': 'call_1', 'result': {'temperature_c': 27}}\n{'id': 'call_2', 'result': {'temperature_c': 24}}\n{'id': 'call_3', 'result': {'temperature_c': 16}}\nelapsed: 0.303s (sequential would be ~0.6s)" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Parallel Wall-Clock Roughly Matches max(latencies), Not sum(latencies)', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Parallel Wall-Clock max(latencies) ಗೆ ಸರಿಸುಮಾರು ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ, sum(latencies) ಅಲ್ಲ',
      bodyEn: 'On this run, the real elapsed time was 0.303s -- close to the slowest single call (0.3s), not the sum of all three (0.1+0.2+0.3=0.6s). Each result correctly carries its own id (call_1/call_2/call_3), so results were sorted back into request order for display even though completion order under ThreadPoolExecutor is not guaranteed.',
      bodyKn: 'ಈ run ನಲ್ಲಿ, ನಿಜ ಕಳೆದ ಸಮಯ 0.303s -- ಅತೀ ನಿಧಾನ ಒಂದೂ call (0.3s) ಗೆ ಹತ್ತಿರ, ಎಲ್ಲಾ ಮೂರರ ಮೊತ್ತ (0.6s) ಅಲ್ಲ. ಪ್ರತಿ result ಅದೂ ya ಸ್ವಂತ id ಸರಿಯಾಗಿ ಹೊಂದಿದೆ.' } },

    { type: 'heading', data: { textEn: 'Three Validation Layers', textKn: 'ಮೂರೂ Validation Layers', level: 'H2' } },
    { type: 'table', data: {
      captionEn: 'Structural, Business, Authorization', captionKn: 'Structural, Business, Authorization',
      rows: "Layer|What it checks|Genuinely demonstrated by\nStructural|Types, required fields, ranges|Part 2's validate_arguments() rejecting a=\"three\"\nBusiness rules|Domain-specific invariants (e.g. amount within limits)|CircuitBreaker's MAX_IDENTICAL_CALLS catching a repetitive pattern\nAuthorization|Is this caller/action actually allowed?|require_permission() genuinely blocking delete_file by default" } },

    { type: 'heading', data: { textEn: 'The Trust Boundary', textKn: 'Trust Boundary', level: 'H2' } },
    { type: 'diagram', data: {
      headingEn: 'Model Output Is a Request, Never Authority', headingKn: 'Model Output ಒಂದೂ ವಿನಂತಿ, ಎಂದಿಗೂ Authority ಅಲ್ಲ',
      mermaidCode: 'flowchart LR\n  A[Model proposes tool call] --> B[Structural validation]\n  B --> C[Business validation]\n  C --> D[Authorization / permission gate]\n  D --> E[Circuit breaker check]\n  E --> F[Execution]\n  F --> G[Audit log]',
      captionEn: 'Genuinely demonstrated this lesson: structural validation (Part 2), permission gate, and circuit breaker all sit between the model\'s proposal and real execution.',
      captionKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ಪ್ರದರ್ಶಿಸಲಾಗಿದೆ: structural validation, permission gate, circuit breaker ಎಲ್ಲವೂ model ya ಪ್ರಸ್ತಾಪ ಮತ್ತು ನಿಜ execution ನಡುವೆ ಇರುತ್ತವೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why the Host Owns Every Gate', headingKn: 'Host ಏಕೆ ಪ್ರತಿ Gate ಅನ್ನೂ ಹೊಂದಿದೆ',
      bodyEn: 'Genuinely confirmed across this lesson: the model only ever proposes a tool_call dict. Every gate that actually protects the system -- schema validation, the consequential-tool permission check, and the circuit breaker -- runs entirely in host Python code that the model cannot see or influence beyond the arguments it emits.',
      bodyKn: 'ಈ lesson ಉದ್ದಕ್ಕೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: model ಕೇವಲ ಒಂದೂ tool_call dict ಪ್ರಸ್ತಾಪಿಸುತ್ತದೆ. ವ್ಯವಸ್ಥೆಯನ್ನೂ ನಿಜವಾಗಿ ರಕ್ಷಿಸುವ ಪ್ರತಿ gate host ಪೈಥಾನ್ code ನಲ್ಲಿ ಸಂಪೂರ್ಣವಾಗಿ ಚಲಾಯಿತಗೊಳ್ಳುತ್ತದೆ.' } },

    { type: 'table', data: {
      captionEn: 'Key Terms for Part 3', captionKn: 'Part 3 ಗಾಗಿ ಮುಖ್ಯ ಪದಗಳು',
      rows: "Term|Meaning\nPure tool|Read-only, side-effect-free (e.g. get_weather); safe fan-out candidate\nConsequential tool|Side-effecting (e.g. delete_file); needs permission/confirmation/audit\nCircuit breaker|A guard that halts the agent loop on repeated failures or repeated identical calls\nTrust boundary|The line between what the model proposes and what the host actually authorizes/executes" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: a consequential=True flag genuinely blocks a tool from require_permission() by default\n• Genuinely confirmed: MAX_CONSECUTIVE_ERRORS trips exactly one call after its threshold, with a specific message naming the count\n• Genuinely confirmed: MAX_IDENTICAL_CALLS trips even when every individual call succeeds\n• Genuinely confirmed: 3 parallel weather calls with 0.1/0.2/0.3s latency finished in ~0.3s, not ~0.6s\n• Structural validation, permission gates, and circuit breakers are three independent, composable safety layers -- not substitutes for each other',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: consequential=True flag ಡೀಫಾಲ್ಟ್ ಆಗಿ ಒಂದೂ tool ಅನ್ನೂ require_permission() ಇಂದ ನಿಜವಾಗಿ ನಿರ್ಬಂಧಿಸುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: MAX_CONSECUTIVE_ERRORS ನಿಖರವಾಗಿ ಒಂದೂ call ಅದೂ ya ಮಿತಿಯ ನಂತರ ಟ್ರಿಪ್ ಆಗುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: MAX_IDENTICAL_CALLS ಪ್ರತಿ call ಯಶಸ್ವಿಯಾದರೂ ಟ್ರಿಪ್ ಆಗುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 3 parallel weather calls ~0.3s ನಲ್ಲಿ ಮುಗಿದವು, ~0.6s ಅಲ್ಲ\n• Structural validation, permission gates, circuit breakers ಮೂರೂ ಸ್ವತಂತ್ರ, ಸಂಯೋಜಿಸಬಹುದಾದ ಸುರಕ್ಷತಾ ಪದರಗಳು' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'When Claude Code asks for confirmation before running a destructive bash command or file deletion, that is genuinely the same consequential/permission-gate pattern demonstrated in this lesson\'s require_permission() test.',
      bodyKn: 'Claude Code ಒಂದೂ destructive bash command ಅಥವಾ file deletion ಚಲಾಯಿಸುವ ಮೊದಲೂ ದೃಢೀಕರಣ ಕೇಳಿದಾಗ, ಅದೂ ನಿಜವಾಗಿ ಈ lesson ya require_permission() test ನಲ್ಲಿ ಪ್ರದರ್ಶಿಸಿದ ಅದೇ consequential/permission-gate ಮಾದರಿ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed by this lesson\'s MAX_IDENTICAL_CALLS test: without a circuit breaker, an agent stuck in a loop of repeated identical tool calls would keep succeeding technically while making no real progress, silently wasting cost and time.',
      bodyKn: 'ಈ lesson ya MAX_IDENTICAL_CALLS test ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: circuit breaker ಇಲ್ಲದೆ, ಪುನರಾವರ್ತಿತ ಒಂದೇ tool calls ya ಚಕ್ರದಲ್ಲಿ ಸಿಲುಕಿದ agent ಯಾವುದೇ ನಿಜ ಪ್ರಗತಿಯಿಲ್ಲದೆ ತಾಂತ್ರಿಕವಾಗಿ ಯಶಸ್ವಿಯಾಗುತ್ತಲೇ ಇರುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'A production trading agent would mark execute_trade as consequential=True and route it through authorization plus a circuit breaker exactly like the one genuinely tripped in this lesson, while a get_quote tool would remain pure and safe for parallel fan-out.',
      bodyKn: 'ಒಂದೂ production trading agent execute_trade ಅನ್ನೂ consequential=True ಎಂದೂ ಗುರುತಿಸುತ್ತದೆ, ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ಟ್ರಿಪ್ ಮಾಡಿದಂತೆಯೇ authorization ಮತ್ತು circuit breaker ಮೂಲಕ ರೂಟ್ ಮಾಡುತ್ತದೆ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'What did require_permission() genuinely return for delete_file?', qKn: 'delete_file ಗಾಗಿ require_permission() ನಿಜವಾಗಿ ಏನೂ ಹಿಂತಿರುಗಿಸಿತು?',
        opts: ['False, because it is consequential', 'True, because all tools are allowed', 'An exception', 'None'], correct: 0,
        optsKn: ['False, ಏಕೆಂದರೆ ಇದೂ consequential', 'True, ಏಕೆಂದರೆ ಎಲ್ಲಾ tools ಗೆ ಅನುಮತಿ ಇದೆ', 'ಒಂದೂ exception', 'None'] },
      { q: 'On which call did the MAX_CONSECUTIVE_ERRORS breaker (max=2) genuinely trip?', qKn: 'MAX_CONSECUTIVE_ERRORS breaker (max=2) ಯಾವ call ನಲ್ಲಿ ನಿಜವಾಗಿ ಟ್ರಿಪ್ ಆಯಿತು?',
        opts: ['Call 1', 'Call 2', 'Call 3', 'It never tripped'], correct: 2,
        optsKn: ['Call 1', 'Call 2', 'Call 3', 'ಎಂದಿಗೂ ಟ್ರಿಪ್ ಆಗಲಿಲ್ಲ'] },
      { q: 'Why did MAX_IDENTICAL_CALLS trip even though every call had ok=True?', qKn: 'ಪ್ರತಿ call ok=True ಹೊಂದಿದ್ದರೂ MAX_IDENTICAL_CALLS ಏಕೆ ಟ್ರಿಪ್ ಆಯಿತು?',
        opts: ['Because it is an independent guard checking repetition, not success/failure', 'Because ok=True always trips it', 'Because the breaker had a bug', 'Because get_weather always fails'], correct: 0,
        optsKn: ['ಏಕೆಂದರೆ ಇದೂ ಒಂದೂ ಸ್ವತಂತ್ರ ಗಾರ್ಡ್, ಪುನರಾವರ್ತನೆ ಪರಿಶೀಲಿಸುತ್ತದೆ', 'ಏಕೆಂದರೆ ok=True ಯಾವಾಗಲೂ ಟ್ರಿಪ್ ಮಾಡುತ್ತದೆ', 'ಏಕೆಂದರೆ breaker ನಲ್ಲಿ ದೋಷವಿತ್ತು', 'ಏಕೆಂದರೆ get_weather ಯಾವಾಗಲೂ ವಿಫಲವಾಗುತ್ತದೆ'] },
      { q: 'The genuine parallel run took ~0.303s for calls of 0.1s/0.2s/0.3s. What does this confirm?', qKn: 'ನಿಜ parallel run 0.1s/0.2s/0.3s calls ಗಾಗಿ ~0.303s ತೆಗೆದುಕೊಂಡಿತು. ಇದೂ ಏನೂ ದೃಢಪಡಿಸುತ್ತದೆ?',
        opts: ['Parallel time approximates max(latencies), not sum(latencies)', 'Parallel execution is always exactly instant', 'Threads do not work in Python', 'The results were returned in random, uncorrelated order'], correct: 0,
        optsKn: ['Parallel ಸಮಯ max(latencies) ಗೆ ಸರಿಸುಮಾರು ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ, sum(latencies) ಅಲ್ಲ', 'Parallel execution ಯಾವಾಗಲೂ ನಿಖರವಾಗಿ ತಕ್ಷಣ', 'ಪೈಥಾನ್‌ನಲ್ಲಿ threads ಕೆಲಸ ಮಾಡುವುದಿಲ್ಲ', 'Results ಯಾದೃಚ್ಛಿಕ, ಸಂಬಂಧವಿಲ್ಲದ ಕ್ರಮದಲ್ಲಿ ಹಿಂತಿರುಗಿಸಲಾಯಿತು'] },
      { q: 'Why is the consequential flag placed on the Tool dataclass rather than checked by the model?', qKn: 'Consequential flag ಅನ್ನೂ model ಬದಲೂ Tool dataclass ನಲ್ಲಿ ಏಕೆ ಇರಿಸಲಾಗಿದೆ?',
        opts: ['Because the host, not the model, must own every safety-relevant decision', 'Because the model cannot read dataclasses', 'Because it makes execution faster', 'Because JSON Schema requires it'], correct: 0,
        optsKn: ['ಏಕೆಂದರೆ host, model ಅಲ್ಲ, ಪ್ರತಿ ಸುರಕ್ಷತೆ-ಸಂಬಂಧಿತ ನಿರ್ಧಾರವನ್ನೂ ಹೊಂದಿರಬೇಕು', 'ಏಕೆಂದರೆ model dataclasses ಓದಲಾಗುವುದಿಲ್ಲ', 'ಏಕೆಂದರೆ ಇದೂ execution ವೇಗವಾಗಿಸುತ್ತದೆ', 'ಏಕೆಂದರೆ JSON Schema ಇದೂ ಅಗತ್ಯಪಡಿಸುತ್ತದೆ'] },
    ] } },
  ],
};
