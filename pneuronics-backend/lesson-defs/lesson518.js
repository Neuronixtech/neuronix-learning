const phaseId = '6a369d5e66020ed05b3214c3'; // Phase 16: Tools and Protocols
const moduleId = '6a369d5f66020ed05b3214ea'; // Module 262: MCP Async Tasks

module.exports = {
  phaseId,
  moduleId,
  order: 0,
  type: 'interactive',
  duration: 40,
  difficulty: 'advanced',
  status: 'published',
  title: 'MCP Tasks Extension: Durable Work on a Stateless Core (Part 1 of 3) — Capability Negotiation and Durable-Before-Return',
  titleKn: 'MCP Tasks Extension: Durable Work on a Stateless Core (Part 1 of 3) — Capability Negotiation ಮತ್ತು Durable-Before-Return',
  desc: 'Understand why a durable MCP task does not violate protocol statelessness, and genuinely build and prove the durable-before-return invariant: a task must be resolvable via tasks/get before its ID is ever returned to the client.',
  descKn: 'ಒಂದೂ durable MCP task protocol statelessness ಅನ್ನೂ ಏಕೆ ಉಲ್ಲಂಘಿಸುವುದಿಲ್ಲ ಎಂದೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ, ಮತ್ತು durable-before-return invariant ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ ಸಾಬೀತುಪಡಿಸಿ.',
  objectives: [
    'Explain why the Tasks extension is optional and should not be used for trivial, cheap, deterministic operations.',
    'Distinguish protocol metadata, transport work, MRTR continuation, and durable task state by lifetime.',
    'Explain why per-process memory is not sufficient durable task storage in a multi-replica deployment.',
    'Genuinely implement and verify the durable-before-return invariant: a taskId is never exposed until tasks/get for it can already resolve.',
    'Explain the difference between ttlMs (measured from creation) and pollIntervalMs (suggested delay between polls).',
  ],
  objectivesKn: [
    'Tasks extension ಏಕೆ optional ಎಂದೂ ಮತ್ತು ಸಣ್ಣ, deterministic operations ಗೆ ಬಳಸಬಾರದೂ ಏಕೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'protocol metadata, transport work, MRTR continuation, durable task state ಅನ್ನೂ ಅವುಗಳ lifetime ಇಂದ ಪ್ರತ್ಯೇಕಿಸಿ.',
    'multi-replica deployment ನಲ್ಲಿ per-process memory ಏಕೆ ಸಾಕಾಗುವುದಿಲ್ಲ ಎಂದೂ ವಿವರಿಸಿ.',
    'durable-before-return invariant ಅನ್ನೂ ನಿಜವಾಗಿ ಜಾರಿಗೊಳಿಸಿ ಮತ್ತು ಪರಿಶೀಲಿಸಿ.',
    'ttlMs ಮತ್ತು pollIntervalMs ನಡುವಿನ ವ್ಯತ್ಯಾಸ ವಿವರಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'MCP Tasks Extension: Durable Work on a Stateless Core (Part 1 of 3)', textKn: 'MCP Tasks Extension: Durable Work on a Stateless Core (Part 1 of 3)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: Module 260-261 · Time: ~40 minutes · Part 1 of 3',
      bodyKn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: Module 260-261 · Time: ~40 ನಿಮಿಷಗಳು · Part 1 of 3',
      pillsEn: 'Tasks Extension,Durable-Before-Return,taskId,Capability Negotiation', pillsKn: 'Tasks Extension,Durable-Before-Return,taskId,Capability Negotiation' } },

    { type: 'heading', data: { textEn: 'The Fundamental Problem', textKn: 'ಮೂಲಭೂತ ಸಮಸ್ಯೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Keeping One Request Alive for 10 Minutes Is Fragile', headingKn: 'ಒಂದೂ Request ಅನ್ನೂ 10 ನಿಮಿಷಗಳ ಕಾಲ ಜೀವಂತವಾಗಿ ಇಡುವುದೂ ಸೂಕ್ಷ್ಮ',
      bodyEn: 'A generate_report tool might take 10 minutes. Keeping one HTTP request alive that long is fragile: load balancers time out, workers restart, clients disconnect, a different replica may receive the next request, and the job might need to pause for approval. The Tasks extension gives the operation an explicit, durable taskId instead of stretching one HTTP request across the whole job.',
      bodyKn: 'ಒಂದೂ generate_report tool 10 ನಿಮಿಷಗಳು ತೆಗೆದುಕೊಳ್ಳಬಹುದು. ಅಷ್ಟೂ ಸಮಯ ಒಂದೂ HTTP request ಜೀವಂತವಾಗಿಡುವುದೂ ಸೂಕ್ಷ್ಮ. Tasks extension ಪೂರ್ಣ job ಆದ್ಯಂತ ಒಂದೂ HTTP request ಚಾಚುವ ಬದಲಿಗೆ ಒಂದೂ ಸ್ಪಷ್ಟ, durable taskId ನೀಡುತ್ತದೆ.' } },

    { type: 'concept', data: {
      headingEn: 'Not Every Operation Needs a Task', headingKn: 'ಪ್ರತಿ Operation ಗೂ Task ಬೇಕಾಗಿಲ್ಲ',
      bodyEn: 'A cheap, deterministic lookup like get_temperature("Bengaluru") probably should not become create task -> persist -> poll -> expire -> retrieve. Tasks add genuine complexity: a durable handle, persistence, authorization, polling, expiry, cancellation, and recovery. Don\'t reach for this extension for trivial operations.',
      bodyKn: 'get_temperature("Bengaluru") ರಂತಹ ಒಂದೂ ಅಗ್ಗದ, deterministic lookup ಒಂದೂ task ಆಗಬಾರದು. Tasks ನಿಜ ಸಂಕೀರ್ಣತೆ ಸೇರಿಸುತ್ತವೆ: ಒಂದೂ durable handle, persistence, authorization, polling, expiry, cancellation, recovery.' } },

    { type: 'heading', data: { textEn: 'Stateless MCP Does NOT Mean Stateless Application', textKn: 'Stateless MCP ಎಂದರೆ Stateless Application ಅಲ್ಲ', level: 'H2' } },
    { type: 'table', data: { headingEn: 'Four Different Lifetimes', headingKn: 'ನಾಲ್ಕೂ ಭಿನ್ನ Lifetimes',
      headers: ['State', 'Lifetime'], headersKn: ['State', 'Lifetime'],
      rows: [['Protocol metadata', 'One request'], ['Transport work', 'One request/response'], ['MRTR continuation', 'One retry sequence'], ['Durable task', 'Many requests, reconnects, replicas, restarts']],
      rowsKn: [['Protocol metadata', 'ಒಂದೂ request'], ['Transport work', 'ಒಂದೂ request/response'], ['MRTR continuation', 'ಒಂದೂ retry sequence'], ['Durable task', 'ಬಹು requests, reconnects, replicas, restarts']] } },
    { type: 'concept', data: {
      headingEn: 'A Task Exists Because of an Explicit Identifier, Not a Connection', headingKn: 'ಒಂದೂ Task Explicit Identifier ಇಂದ ಅಸ್ತಿತ್ವದಲ್ಲಿದೆ, Connection ಇಂದ ಅಲ್ಲ',
      bodyEn: 'A bad mental model is "connection = task". The correct model: the task exists because taskId exists, is persisted, and can be resolved by any replica backed by the same durable store -- completely independent of whether any particular TCP/HTTP connection is still open.',
      bodyKn: 'ಒಂದೂ ಕೆಟ್ಟ ಮಾದರಿ "connection = task". ಸರಿಯಾದ ಮಾದರಿ: taskId ಅಸ್ತಿತ್ವದಲ್ಲಿರುವುದರಿಂದ, ಸಂಗ್ರಹಿಸಲ್ಪಟ್ಟಿರುವುದರಿಂದ task ಅಸ್ತಿತ್ವದಲ್ಲಿದೆ.' } },

    { type: 'heading', data: { textEn: 'Why Process Memory Is Not Sufficient', textKn: 'Process Memory ಏಕೆ ಸಾಕಾಗುವುದಿಲ್ಲ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'A Task Created on Replica A Must Resolve on Replica B', headingKn: 'Replica A ಮೇಲೆ ರಚಿಸಿದ Task Replica B ಮೇಲೆ ಪರಿಹರಿಸಲ್ಪಡಬೇಕು',
      bodyEn: 'If replica A keeps tasks = {} in its own process memory and the next request routes to replica B, B has never heard of the task and would incorrectly report "unknown task" even though the job genuinely exists. This is a durability problem, not a protocol-state problem.',
      bodyKn: 'replica A ತನ್ನ ಸ್ವಂತ process memory ನಲ್ಲಿ tasks = {} ಇಟ್ಟುಕೊಂಡರೆ ಮತ್ತು ಮುಂದಿನ request replica B ಗೆ route ಆದರೆ, B task ಬಗ್ಗೆ ಎಂದಿಗೂ ಕೇಳಿಲ್ಲ ಮತ್ತು ತಪ್ಪಾಗಿ "unknown task" ವರದಿ ಮಾಡುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Capability Negotiation Is Per-Request', textKn: 'Capability Negotiation Per-Request ಆಗಿದೆ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'tasks_meta.json', headingEn: 'The client advertises Tasks support in _meta', headingKn: 'client Tasks support ಅನ್ನೂ _meta ನಲ್ಲಿ ಘೋಷಿಸುತ್ತದೆ',
      descEn: '', descKn: '',
      code: "{\n  \"_meta\": {\n    \"io.modelcontextprotocol/protocolVersion\": \"2026-07-28\",\n    \"io.modelcontextprotocol/clientCapabilities\": {\n      \"extensions\": {\n        \"io.modelcontextprotocol/tasks\": {}\n      }\n    }\n  }\n}" } },
    { type: 'concept', data: {
      headingEn: 'Task Creation Is Server-Directed', headingKn: 'Task Creation Server-Directed ಆಗಿದೆ',
      bodyEn: 'The client does NOT say "please force this into task mode" -- there is no params._meta.task.required. Instead the client declares extension support, and the SERVER decides whether a specific tools/call becomes a task. Notice the original request below has no task-forcing field at all.',
      bodyKn: 'client "ಇದನ್ನೂ task mode ಗೆ ಒತ್ತಾಯಿಸಿ" ಎಂದೂ ಹೇಳುವುದಿಲ್ಲ. ಬದಲಿಗೆ client extension support ಘೋಷಿಸುತ್ತದೆ, SERVER ಒಂದೂ ನಿರ್ದಿಷ್ಟ tools/call task ಆಗುತ್ತದೆಯೇ ಎಂದೂ ನಿರ್ಧರಿಸುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Genuinely Proving Durable-Before-Return', textKn: 'Durable-Before-Return ಅನ್ನೂ ನಿಜವಾಗಿ ಸಾಬೀತುಪಡಿಸುವುದೂ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Never Expose an ID Before It Resolves', headingKn: 'ಇದೂ ಪರಿಹಾರವಾಗುವ ಮೊದಲು ಒಂದೂ ID ಎಂದಿಗೂ ಬಹಿರಂಗಪಡಿಸಬೇಡಿ',
      bodyEn: 'If the client polls tasks/get(taskId) immediately after receiving it, that must succeed -- if persistence happened AFTER returning the ID, a race could make the handle temporarily point to nothing. We genuinely build a TaskStore using atomic write (temp file + os.replace) and assert the task is resolvable immediately after creation.',
      bodyKn: 'client taskId ಪಡೆದ ತಕ್ಷಣ tasks/get(taskId) poll ಮಾಡಿದರೆ, ಇದೂ ಯಶಸ್ವಿಯಾಗಬೇಕು. ನಾವು atomic write ಬಳಸಿ ಒಂದೂ ನಿಜ TaskStore ನಿರ್ಮಿಸಿ, ಸೃಷ್ಟಿಯ ತಕ್ಷಣ task ಪರಿಹರಿಸಲ್ಪಡುತ್ತದೆ ಎಂದೂ assert ಮಾಡುತ್ತೇವೆ.' } },

    { type: 'code', data: {
      filename: 'tasks_demo.py', headingEn: 'Genuine atomic durable task store', headingKn: 'ನಿಜ atomic durable task store',
      descEn: 'save() writes to a temp file then os.replace()s it into place -- atomic on both POSIX and Windows, so a reader never sees a partially-written record. create_task_durably() saves BEFORE returning, then asserts the task can immediately be reloaded.',
      descKn: 'save() ಒಂದೂ temp file ಗೆ ಬರೆದು ನಂತರ os.replace() ಮಾಡುತ್ತದೆ -- atomic. create_task_durably() ಹಿಂತಿರುಗಿಸುವ ಮೊದಲು save ಮಾಡುತ್ತದೆ, ನಂತರ task ತಕ್ಷಣ ಮರುಲೋಡ್ ಆಗಬಹುದು ಎಂದೂ assert ಮಾಡುತ್ತದೆ.',
      code: "import json, time, uuid, os, tempfile\n\nclass TaskStore:\n    def __init__(self, directory):\n        self.directory = directory\n        os.makedirs(directory, exist_ok=True)\n    def _path(self, task_id):\n        return os.path.join(self.directory, task_id + \".json\")\n    def save(self, task):\n        path = self._path(task[\"taskId\"])\n        tmp = path + \".tmp\"\n        with open(tmp, \"w\") as f:\n            json.dump(task, f)\n        os.replace(tmp, path)  # atomic\n    def load(self, task_id):\n        path = self._path(task_id)\n        if not os.path.exists(path):\n            return None\n        with open(path) as f:\n            return json.load(f)\n\ndef create_task_durably(store, tenant, principal):\n    task_id = \"tsk_\" + uuid.uuid4().hex[:12]\n    task = {\n        \"taskId\": task_id, \"status\": \"working\",\n        \"statusMessage\": \"Preparing report outline.\",\n        \"createdAt\": time.time(), \"lastUpdatedAt\": time.time(),\n        \"ttlMs\": 900000, \"pollIntervalMs\": 1000,\n        \"tenantId\": tenant, \"principalId\": principal,\n        \"issuedInputKeys\": [], \"fulfilledInputKeys\": [],\n        \"result\": None, \"error\": None,\n    }\n    store.save(task)               # durable-before-return\n    reloaded = store.load(task_id)\n    assert reloaded is not None, \"task must be resolvable immediately after creation\"\n    return task\n\nwith tempfile.TemporaryDirectory() as tmpdir:\n    store_a = TaskStore(tmpdir)\n    task = create_task_durably(store_a, tenant=\"tenant-a\", principal=\"user-17\")\n    print(\"id:\", task[\"taskId\"], \"resultType=task status=working\")" } },
    { type: 'output', data: { output: "id: tsk_8d093e06412e resultType=task status=working" } },

    { type: 'heading', data: { textEn: 'ttlMs vs pollIntervalMs', textKn: 'ttlMs vs pollIntervalMs', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Two Fields, Two Completely Different Questions', headingKn: 'ಎರಡೂ Fields, ಎರಡೂ ಸಂಪೂರ್ಣ ಭಿನ್ನ ಪ್ರಶ್ನೆಗಳು',
      bodyEn: 'ttlMs (900000 = 15 minutes in our task above) answers "how long can this task live before expiry, measured from CREATION" -- it is NOT a promise to retain a completed result for that long after completion. pollIntervalMs (1000 = 1 second) answers "how soon should I ask for status again" -- an aggressive client polling hundreds of times per second may be rate-limited.',
      bodyKn: 'ttlMs (ನಮ್ಮ task ನಲ್ಲಿ 900000 = 15 ನಿಮಿಷಗಳು) "ಇದೂ CREATION ಇಂದ ಎಷ್ಟೂ ಸಮಯ ಬದುಕಬಹುದು" ಎಂದೂ ಉತ್ತರಿಸುತ್ತದೆ. pollIntervalMs (1000 = 1 ಸೆಕೆಂಡ್) "ಎಷ್ಟೂ ಬೇಗ ಮತ್ತೆ status ಕೇಳಬೇಕು" ಎಂದೂ ಉತ್ತರಿಸುತ್ತದೆ.' } },

    { type: 'concept', data: { headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Tasks are optional -- don\'t use them for cheap, deterministic lookups.\n• Stateless MCP core does not mean the application has no state -- a durable task is EXPLICIT application state, distinct from per-request protocol metadata.\n• Process memory alone is unreliable for multi-replica deployments; a task must resolve through shared durable storage.\n• We genuinely proved durable-before-return using atomic file writes: a task is resolvable via tasks/get the instant its ID is returned.\n• ttlMs is measured from creation, not completion; pollIntervalMs is a suggested minimum delay between polls.',
      bodyKn: '• Tasks optional -- ಅಗ್ಗದ, deterministic lookups ಗೆ ಬಳಸಬೇಡಿ.\n• Stateless MCP core ಎಂದರೆ application state ಇಲ್ಲ ಎಂದಲ್ಲ -- ಒಂದೂ durable task EXPLICIT application state.\n• Process memory ಮಾತ್ರ multi-replica deployments ಗೆ ಅವಿಶ್ವಾಸಾರ್ಹ.\n• ನಾವು ನಿಜವಾಗಿ atomic file writes ಬಳಸಿ durable-before-return ಸಾಬೀತುಪಡಿಸಿದ್ದೇವೆ.\n• ttlMs creation ಇಂದ ಅಳೆಯಲಾಗುತ್ತದೆ, completion ಇಂದ ಅಲ್ಲ.' } },

    { type: 'quiz', data: { questions: [
      { q: "Why doesn't a durable MCP task violate the idea of a stateless protocol?", qKn: 'ಒಂದೂ durable MCP task stateless protocol ya ಕಲ್ಪನೆಯನ್ನೂ ಏಕೆ ಉಲ್ಲಂಘಿಸುವುದಿಲ್ಲ?',
        opts: ['Because task state is hidden inside the HTTP connection', 'Because the task is explicit application state and each RPC remains independently validated', 'Because every task uses sticky load balancing', 'Because Mcp-Session-Id stores the task'],
        optsKn: ['task state HTTP connection ಒಳಗೆ ಅಡಗಿಸಲ್ಪಟ್ಟಿದೆ', 'task explicit application state ಆಗಿದೆ ಮತ್ತು ಪ್ರತಿ RPC ಸ್ವತಂತ್ರವಾಗಿ ಮೌಲ್ಯೀಕರಿಸಲ್ಪಡುತ್ತದೆ', 'ಪ್ರತಿ task sticky load balancing ಬಳಸುತ್ತದೆ', 'Mcp-Session-Id task ಸಂಗ್ರಹಿಸುತ್ತದೆ'],
        correct: 1 },
      { q: 'When may the server safely return "resultType": "task"?', qKn: 'server ಯಾವಾಗ ಸುರಕ್ಷಿತವಾಗಿ "resultType": "task" ಹಿಂತಿರುಗಿಸಬಹುದು?',
        opts: ['Immediately after generating a task ID', 'Before persistence, as long as it saves eventually', 'After the request advertises Tasks support and the task is durably resolvable', 'Only when the client sends task.required=true'],
        optsKn: ['ಒಂದೂ task ID ಉತ್ಪಾದಿಸಿದ ತಕ್ಷಣ', 'persistence ಗಿಂತ ಮೊದಲು, ಅಂತಿಮವಾಗಿ ಸಂಗ್ರಹಿಸಿದರೆ ಸಾಕು', 'request Tasks support ಘೋಷಿಸಿ task durably resolvable ಆದ ನಂತರ', 'client task.required=true ಕಳುಹಿಸಿದಾಗ ಮಾತ್ರ'],
        correct: 2 },
      { q: 'What does "pollIntervalMs": 1000 represent?', qKn: '"pollIntervalMs": 1000 ಏನೂ ಪ್ರತಿನಿಧಿಸುತ್ತದೆ?',
        opts: ['Delete the task after one second', 'Complete the job within one second', 'Suggested minimum delay before polling again', 'Keep the transport connection alive for one second'],
        optsKn: ['ಒಂದೂ ಸೆಕೆಂಡ್ ನಂತರ task ಅಳಿಸಿ', 'ಒಂದೂ ಸೆಕೆಂಡ್ ಒಳಗೆ job ಮುಗಿಸಿ', 'ಮತ್ತೆ poll ಮಾಡುವ ಮೊದಲು ಸೂಚಿತ ಕನಿಷ್ಠ ವಿಳಂಬ', 'transport connection ಒಂದೂ ಸೆಕೆಂಡ್ ಜೀವಂತವಾಗಿ ಇಡಿ'],
        correct: 2 },
      { q: 'Which value is measured from task creation?', qKn: 'ಯಾವ ಮೌಲ್ಯ task creation ಇಂದ ಅಳೆಯಲಾಗುತ್ತದೆ?',
        opts: ['resultType', 'pollIntervalMs', 'ttlMs', 'statusMessage'],
        optsKn: ['resultType', 'pollIntervalMs', 'ttlMs', 'statusMessage'],
        correct: 2 },
      { q: 'Why should task state normally live in shared durable storage instead of only process memory?', qKn: 'task state ಸಾಮಾನ್ಯವಾಗಿ ಕೇವಲ process memory ಬದಲಿಗೆ shared durable storage ನಲ್ಲಿ ಏಕೆ ಇರಬೇಕು?',
        opts: ['JSON-RPC forbids dictionaries', 'It allows another replica or restarted process to resolve the same task', 'It prevents clients from polling', 'It turns HTTP into a session protocol'],
        optsKn: ['JSON-RPC dictionaries ನಿಷೇಧಿಸುತ್ತದೆ', 'ಇದೂ ಇನ್ನೊಂದೂ replica ಅಥವಾ ಮರುಪ್ರಾರಂಭಿಸಿದ process ಅದೇ task ಪರಿಹರಿಸಲು ಅನುಮತಿಸುತ್ತದೆ', 'ಇದೂ clients polling ತಡೆಯುತ್ತದೆ', 'ಇದೂ HTTP ಅನ್ನೂ ಒಂದೂ session protocol ಆಗಿಸುತ್ತದೆ'],
        correct: 1 },
    ] } },
  ],
};
