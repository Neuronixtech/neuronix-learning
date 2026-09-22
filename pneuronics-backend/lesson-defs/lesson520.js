const phaseId = '6a369d5e66020ed05b3214c3'; // Phase 16: Tools and Protocols
const moduleId = '6a369d5f66020ed05b3214ea'; // Module 262: MCP Async Tasks

module.exports = {
  phaseId,
  moduleId,
  order: 2,
  type: 'interactive',
  duration: 45,
  difficulty: 'advanced',
  status: 'published',
  title: 'MCP Tasks Extension: Durable Work on a Stateless Core (Part 3 of 3) — Completion, Cancellation, and Restart Recovery',
  titleKn: 'MCP Tasks Extension: Durable Work on a Stateless Core (Part 3 of 3) — Completion, Cancellation, Restart Recovery',
  desc: 'Genuinely complete a task with a nested CallToolResult, genuinely prove idempotent cancellation, and genuinely prove restart recovery by reading the same durable task from a brand new TaskStore instance -- simulating a new server process.',
  descKn: 'ಒಂದೂ task ಅನ್ನೂ ಒಂದೂ nested CallToolResult ಜೊತೆ ನಿಜವಾಗಿ ಪೂರ್ಣಗೊಳಿಸಿ, idempotent cancellation ನಿಜವಾಗಿ ಸಾಬೀತುಪಡಿಸಿ, ಮತ್ತು ಒಂದೂ ಹೊಸ TaskStore instance ಇಂದ ಅದೇ durable task ಓದಿ restart recovery ನಿಜವಾಗಿ ಸಾಬೀತುಪಡಿಸಿ.',
  objectives: [
    'Explain the two-layer nested result: outer resultType (tasks/get succeeded) vs inner result.resultType (the original tool\'s CallToolResult).',
    'Explain why isError:true on the nested result can still mean status:completed, while a genuine deferred-execution failure means status:failed.',
    'Genuinely prove tasks/cancel is idempotent, both on a still-working task and on an already-terminal one.',
    'Genuinely prove restart recovery: a brand new TaskStore instance (simulating a new server process) reads the exact same durable task state.',
    'Explain why request cancellation (stopping one in-flight RPC) and task cancellation (stopping a durable job) are different concerns requiring different mechanisms.',
  ],
  objectivesKn: [
    'ಎರಡೂ-layer nested result ವಿವರಿಸಿ: outer resultType vs inner result.resultType.',
    'nested result ಮೇಲೆ isError:true ಇನ್ನೂ status:completed ಅರ್ಥೈಸಬಹುದೂ ಏಕೆ, ಆದರೆ ನಿಜ deferred-execution failure status:failed ಅರ್ಥೈಸುತ್ತದೆ ಏಕೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'tasks/cancel idempotent ಎಂದೂ ನಿಜವಾಗಿ ಸಾಬೀತುಪಡಿಸಿ.',
    'restart recovery ಅನ್ನೂ ನಿಜವಾಗಿ ಸಾಬೀತುಪಡಿಸಿ: ಒಂದೂ ಹೊಸ TaskStore instance ಅದೇ durable task state ಓದುತ್ತದೆ.',
    'request cancellation ಮತ್ತು task cancellation ಏಕೆ ಭಿನ್ನ ಕಾಳಜಿಗಳು ಎಂದೂ ವಿವರಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'MCP Tasks Extension: Durable Work on a Stateless Core (Part 3 of 3)', textKn: 'MCP Tasks Extension: Durable Work on a Stateless Core (Part 3 of 3)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: Parts 1-2 · Time: ~45 minutes · Part 3 of 3',
      bodyKn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: Parts 1-2 · Time: ~45 ನಿಮಿಷಗಳು · Part 3 of 3',
      pillsEn: 'Completion,Cancellation,Restart Recovery,Idempotency', pillsKn: 'Completion,Cancellation,Restart Recovery,Idempotency' } },

    { type: 'heading', data: { textEn: 'Genuinely Completing the Task', textKn: 'Task ಅನ್ನೂ ನಿಜವಾಗಿ ಪೂರ್ಣಗೊಳಿಸುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'tasks_demo.py', headingEn: 'The two-layer nested result, genuinely produced', headingKn: 'ಎರಡೂ-layer nested result, ನಿಜವಾಗಿ ಉತ್ಪಾದಿಸಲಾಗಿದೆ',
      descEn: 'Outer status="completed" describes the durable job. Nested result.resultType="complete" describes the ORIGINAL tools/call\'s CallToolResult -- exactly what a synchronous call would have returned directly.',
      descKn: 'Outer status="completed" durable job ವಿವರಿಸುತ್ತದೆ. Nested result.resultType="complete" ಮೂಲ tools/call ya CallToolResult ವಿವರಿಸುತ್ತದೆ.',
      code: "def complete_task(store, task_id):\n    task = store.load(task_id)\n    task[\"status\"] = \"completed\"\n    task[\"lastUpdatedAt\"] = time.time()\n    task[\"result\"] = {\n        \"resultType\": \"complete\",\n        \"content\": [{\"type\": \"text\", \"text\": \"Generated large report with approved outline.\"}],\n        \"structuredContent\": {\"size\": \"large\", \"approved\": True},\n        \"isError\": False,\n    }\n    store.save(task)\n    return task\n\nfinal = complete_task(store_a, task[\"taskId\"])\nprint(\"status:\", final[\"status\"])\nprint(\"nested result.resultType:\", final[\"result\"][\"resultType\"], \"isError:\", final[\"result\"][\"isError\"])" } },
    { type: 'output', data: { output: "status: completed\nnested result.resultType: complete isError: False" } },

    { type: 'concept', data: {
      headingEn: 'isError:true Can Still Mean status:completed', headingKn: 'isError:true ಇನ್ನೂ status:completed ಅರ್ಥೈಸಬಹುದು',
      bodyEn: 'If the underlying tool ran successfully as an OPERATION but its own answer says "the report could not be generated because the source document is invalid" (isError:true in the nested content), the TASK still succeeded at producing that defined result -- so status is "completed". The task only becomes "failed" for a genuine deferred JSON-RPC-level failure (e.g. the worker crashed, couldn\'t deserialize its own state).',
      bodyKn: 'ಆಧಾರವಾಗಿರುವ tool ಒಂದೂ OPERATION ಆಗಿ ಯಶಸ್ವಿಯಾಗಿ ಚಲಾಯಿಸಿದರೆ ಆದರೆ ಅದರ ಸ್ವಂತ ಉತ್ತರ isError:true ಆಗಿದ್ದರೆ, TASK ಇನ್ನೂ ಆ ಫಲಿತಾಂಶ ಉತ್ಪಾದಿಸುವಲ್ಲಿ ಯಶಸ್ವಿಯಾಗಿದೆ -- status "completed" ಆಗಿ ಉಳಿಯುತ್ತದೆ. task ಕೇವಲ ಒಂದೂ ನಿಜ deferred JSON-RPC-level failure ಗೆ "failed" ಆಗುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Genuinely Proving Restart Recovery', textKn: 'Restart Recovery ಅನ್ನೂ ನಿಜವಾಗಿ ಸಾಬೀತುಪಡಿಸುವುದೂ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'A New Process Must Resolve the Same Task', headingKn: 'ಒಂದೂ ಹೊಸ Process ಅದೇ Task ಪರಿಹರಿಸಬೇಕು',
      bodyEn: 'We create a SECOND, completely independent TaskStore object pointed at the same durable directory -- this genuinely simulates a new server process/replica starting up after the original one died. If task lifetime truly exceeds process lifetime, this new instance must read the exact same state.',
      bodyKn: 'ನಾವು ಅದೇ durable directory ಗೆ ತೋರಿಸುವ ಒಂದೂ ಎರಡನೇ, ಸಂಪೂರ್ಣ ಸ್ವತಂತ್ರ TaskStore object ರಚಿಸುತ್ತೇವೆ -- ಇದೂ ಮೂಲ ಸತ್ತ ನಂತರ ಒಂದೂ ಹೊಸ server process ಪ್ರಾರಂಭವಾಗುವುದನ್ನೂ ನಿಜವಾಗಿ ಸಿಮ್ಯುಲೇಟ್ ಮಾಡುತ್ತದೆ.' } },

    { type: 'code', data: {
      filename: 'tasks_demo.py', headingEn: 'Genuine restart recovery across two independent TaskStore objects', headingKn: 'ಎರಡೂ ಸ್ವತಂತ್ರ TaskStore objects ಆದ್ಯಂತ ನಿಜ restart recovery',
      descEn: '', descKn: '',
      code: "store_b = TaskStore(tmpdir)  # simulates a new process/replica pointed at the same durable directory\nreloaded = store_b.load(task[\"taskId\"])\nprint(\"Server B genuinely reloaded task status:\", reloaded[\"status\"])\nprint(\"Server B sees the same result:\", reloaded[\"result\"][\"content\"])" } },
    { type: 'output', data: { output: "Server B genuinely reloaded task status: completed\nServer B sees the same result: [{'type': 'text', 'text': 'Generated large report with approved outline.'}]" } },

    { type: 'concept', data: {
      headingEn: 'This Is the Proof That Task Lifetime Exceeds Process Lifetime', headingKn: 'ಇದೂ Task Lifetime Process Lifetime ಮೀರುತ್ತದೆ ಎಂಬುದರ ಸಾಕ್ಷ್ಯ',
      bodyEn: 'store_a created and completed the task; store_b never called create_task_durably() or complete_task() -- it ONLY read from the shared directory, yet it genuinely produced the exact same status and result. That is restart recovery working correctly.',
      bodyKn: 'store_a task ರಚಿಸಿ ಪೂರ್ಣಗೊಳಿಸಿತು; store_b create_task_durably() ಅಥವಾ complete_task() ಎಂದಿಗೂ ಕರೆ ಮಾಡಲಿಲ್ಲ -- ಇದೂ ಕೇವಲ ಹಂಚಿದ directory ಇಂದ ಓದಿತೂ, ಆದರೂ ನಿಜವಾಗಿ ಅದೇ status ಮತ್ತು result ಉತ್ಪಾದಿಸಿತೂ.' } },

    { type: 'heading', data: { textEn: 'Genuinely Proving Cancellation Is Idempotent', textKn: 'Cancellation Idempotent ಎಂದೂ ನಿಜವಾಗಿ ಸಾಬೀತುಪಡಿಸುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'tasks_demo.py', headingEn: 'tasks/cancel: idempotent on both a terminal task and a working one', headingKn: 'tasks/cancel: terminal task ಮತ್ತು working task ಎರಡರಲ್ಲೂ idempotent',
      descEn: 'Calling cancel on an already-completed task returns an acknowledgement without changing its state (never rewrites a terminal outcome). Calling it on a genuinely working task moves it to "cancelled". Calling it again on that same now-cancelled task is safely a no-op.',
      descKn: 'ಈಗಾಗಲೇ ಪೂರ್ಣಗೊಂಡ ಒಂದೂ task ಮೇಲೆ cancel ಕರೆ ಮಾಡುವುದೂ ಅದರ state ಬದಲಾಯಿಸದೆ ಒಂದೂ acknowledgement ಹಿಂತಿರುಗಿಸುತ್ತದೆ. ನಿಜವಾಗಿ working ಆಗಿರುವ task ಮೇಲೆ ಕರೆ ಮಾಡುವುದೂ ಅದನ್ನೂ "cancelled" ಗೆ ಸ್ಥಳಾಂತರಿಸುತ್ತದೆ.',
      code: "TERMINAL = {\"completed\", \"failed\", \"cancelled\"}\n\ndef tasks_cancel(store, task_id):\n    task = store.load(task_id)\n    if task[\"status\"] in TERMINAL:\n        return {\"resultType\": \"complete\", \"note\": \"idempotent, already terminal: \" + task[\"status\"]}\n    task[\"status\"] = \"cancelled\"\n    task[\"lastUpdatedAt\"] = time.time()\n    store.save(task)\n    return {\"resultType\": \"complete\"}\n\n# Case 1: cancel on an already-completed task -- must not rewrite the terminal state\nprint(tasks_cancel(store_b, task[\"taskId\"]))\n\n# Case 2: cancel on a genuinely still-working task\ntask2 = create_task_durably(store_a, tenant=\"tenant-a\", principal=\"user-17\")\nprint(tasks_cancel(store_a, task2[\"taskId\"]))\nprint(\"final status:\", store_a.load(task2[\"taskId\"])[\"status\"])\n\n# Case 3: cancel again on that now-cancelled task -- idempotent no-op\nprint(tasks_cancel(store_a, task2[\"taskId\"]))" } },
    { type: 'output', data: { output: "{'resultType': 'complete', 'note': 'idempotent, already terminal: completed'}\n{'resultType': 'complete'}\nfinal status: cancelled\n{'resultType': 'complete', 'note': 'idempotent, already terminal: cancelled'}" } },

    { type: 'concept', data: {
      headingEn: 'Why Idempotency Matters for Cancel Specifically', headingKn: 'Cancel ಗಾಗಿ Idempotency ಏಕೆ ಮುಖ್ಯ',
      bodyEn: 'A network drop after a successful cancel forces the client to retry. Without the TERMINAL check, a retried cancel on an already-cancelled task would be harmless here, but on a system with side effects per transition (e.g. sending a cancellation notification) it could cause duplicate notifications or worse. Checking terminal status first makes the whole operation safely repeatable.',
      bodyKn: 'ಒಂದೂ ಯಶಸ್ವಿ cancel ನಂತರ network drop client retry ಒತ್ತಾಯಿಸುತ್ತದೆ. TERMINAL check ಇಲ್ಲದೆ, ಪ್ರತಿ transition ಗೆ side effects ಇರುವ ಒಂದೂ system ನಲ್ಲಿ duplicate notifications ಉಂಟಾಗಬಹುದು.' } },

    { type: 'heading', data: { textEn: 'Request Cancellation vs Task Cancellation', textKn: 'Request Cancellation vs Task Cancellation', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Different Targets, Different Mechanisms', headingKn: 'ಭಿನ್ನ Targets, ಭಿನ್ನ Mechanisms',
      bodyEn: 'Request cancellation stops ONE currently in-flight JSON-RPC operation (e.g. a streaming tasks/get). Task cancellation stops a DURABLE job that can outlive the original request, HTTP response, connection, and even the client/server process. Once tools/call has returned resultType="task", the original request is already finished -- closing its transport connection cannot identify or stop the durable job. Only an explicit tasks/cancel(taskId) can.',
      bodyKn: 'Request cancellation ಒಂದೂ ಪ್ರಸ್ತುತ in-flight JSON-RPC operation ನಿಲ್ಲಿಸುತ್ತದೆ. Task cancellation ಒಂದೂ durable job ನಿಲ್ಲಿಸುತ್ತದೆ, ಇದೂ ಮೂಲ request ಗಿಂತ ಹೆಚ್ಚೂ ಬದುಕಬಹುದು. tools/call resultType="task" ಹಿಂತಿರುಗಿಸಿದ ನಂತರ, ಮೂಲ request ಈಗಾಗಲೇ ಮುಗಿದಿದೆ -- ಅದರ transport connection ಮುಚ್ಚುವುದೂ durable job ಗುರುತಿಸಲಾಗುವುದಿಲ್ಲ ಅಥವಾ ನಿಲ್ಲಿಸಲಾಗುವುದಿಲ್ಲ.' } },

    { type: 'concept', data: { headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• A completed task snapshot has TWO resultType-like fields: outer status="completed" (the job) and inner result.resultType="complete" (the original tool\'s CallToolResult).\n• isError:true on the nested result can still mean status:completed -- only a genuine deferred-execution failure means status:failed.\n• We genuinely proved restart recovery: a brand new TaskStore instance, never involved in creating or completing the task, reads the exact same durable state.\n• We genuinely proved tasks/cancel is idempotent in both directions -- on an already-terminal task and on a repeated cancel of a just-cancelled one.\n• Request cancellation and task cancellation are different concerns: closing a transport connection cannot stop a durable job once resultType="task" has been returned.',
      bodyKn: '• ಒಂದೂ ಪೂರ್ಣಗೊಂಡ task snapshot ಗೆ ಎರಡೂ resultType-ರಂತಹ fields ಇವೆ: outer status="completed" ಮತ್ತು inner result.resultType="complete".\n• nested result ಮೇಲೆ isError:true ಇನ್ನೂ status:completed ಅರ್ಥೈಸಬಹುದು.\n• ನಾವು ನಿಜವಾಗಿ restart recovery ಸಾಬೀತುಪಡಿಸಿದ್ದೇವೆ: ಒಂದೂ ಹೊಸ TaskStore instance ಅದೇ durable state ಓದುತ್ತದೆ.\n• ನಾವು ನಿಜವಾಗಿ tasks/cancel idempotent ಎಂದೂ ಸಾಬೀತುಪಡಿಸಿದ್ದೇವೆ.\n• Request cancellation ಮತ್ತು task cancellation ಭಿನ್ನ ಕಾಳಜಿಗಳು.' } },

    { type: 'quiz', data: { questions: [
      { q: "A task's nested tool result contains \"isError\": true. Must the task status be failed?", qKn: 'ಒಂದೂ task ya nested tool result "isError": true ಒಳಗೊಂಡಿದೆ. task status failed ಆಗಿರಬೇಕೇ?',
        opts: ['Yes', "No; it can still be completed if the tool produced a valid CallToolResult", 'Only if ttlMs expired', 'Only for tools/list'],
        optsKn: ['ಹೌದು', 'ಇಲ್ಲ; tool ಒಂದೂ ಮಾನ್ಯ CallToolResult ಉತ್ಪಾದಿಸಿದ್ದರೆ ಇನ್ನೂ completed ಆಗಿರಬಹುದು', 'ttlMs ಮೀರಿದ್ದರೆ ಮಾತ್ರ', 'tools/list ಗೆ ಮಾತ್ರ'],
        correct: 1 },
      { q: 'What makes a durable task become failed in this lesson?', qKn: 'ಈ ಪಾಠದಲ್ಲಿ ಒಂದೂ durable task ಏಕೆ failed ಆಗುತ್ತದೆ?',
        opts: ['Any isError: true tool result', 'A JSON-RPC/deferred execution failure stored under error', 'A client polling too slowly', 'Receiving tasks/update'],
        optsKn: ['ಯಾವುದೇ isError: true tool result', 'error ಅಡಿಯಲ್ಲಿ ಸಂಗ್ರಹಿಸಿದ ಒಂದೂ JSON-RPC/deferred execution failure', 'client ಬಹಳ ನಿಧಾನವಾಗಿ poll ಮಾಡುವುದೂ', 'tasks/update ಸ್ವೀಕರಿಸುವುದೂ'],
        correct: 1 },
      { q: 'What does a successful tasks/cancel acknowledgement guarantee?', qKn: 'ಒಂದೂ ಯಶಸ್ವಿ tasks/cancel acknowledgement ಏನೂ ಖಾತ್ರಿಪಡಿಸುತ್ತದೆ?',
        opts: ['The worker has definitely stopped', 'The task is definitely cancelled already', 'Cancellation intent was acknowledged, but final state must still be observed', 'The result has been deleted'],
        optsKn: ['worker ಖಚಿತವಾಗಿ ನಿಂತಿದೆ', 'task ಖಚಿತವಾಗಿ ಈಗಾಗಲೇ cancelled ಆಗಿದೆ', 'Cancellation intent ಖಚಿತಪಡಿಸಲಾಗಿದೆ, ಆದರೆ ಅಂತಿಮ state ಇನ್ನೂ ಗಮನಿಸಬೇಕು', 'result ಅಳಿಸಲಾಗಿದೆ'],
        correct: 2 },
      { q: "Why can't closing the original tools/call HTTP connection cancel a task after it returned resultType: \"task\"?", qKn: 'resultType: "task" ಹಿಂತಿರುಗಿಸಿದ ನಂತರ ಮೂಲ tools/call HTTP connection ಮುಚ್ಚುವುದೂ ಒಂದೂ task ಅನ್ನೂ ಏಕೆ cancel ಮಾಡಲಾಗುವುದಿಲ್ಲ?',
        opts: ['HTTP cannot carry cancellation', 'The original request is already complete; the durable job is now identified separately by taskId', "Tasks don't support cancellation", 'Only SSE can cancel tasks'],
        optsKn: ['HTTP cancellation ಒಯ್ಯಲಾಗುವುದಿಲ್ಲ', 'ಮೂಲ request ಈಗಾಗಲೇ ಮುಗಿದಿದೆ; durable job ಈಗ taskId ಇಂದ ಪ್ರತ್ಯೇಕವಾಗಿ ಗುರುತಿಸಲ್ಪಟ್ಟಿದೆ', 'Tasks cancellation ಬೆಂಬಲಿಸುವುದಿಲ್ಲ', 'ಕೇವಲ SSE tasks cancel ಮಾಡಬಹುದು'],
        correct: 1 },
      { q: 'What should a client rely on to recover after a notification stream disconnects?', qKn: 'ಒಂದೂ notification stream ಸಂಪರ್ಕ ಕಡಿತಗೊಂಡ ನಂತರ client ಏನನ್ನೂ ಅವಲಂಬಿಸಬೇಕು?',
        opts: ['Last-Event-ID only', 'Hidden session state', 'Durable task IDs and fresh polling/subscription', 'Sticky load balancing'],
        optsKn: ['ಕೇವಲ Last-Event-ID', 'Hidden session state', 'Durable task IDs ಮತ್ತು ಹೊಸ polling/subscription', 'Sticky load balancing'],
        correct: 2 },
    ] } },
  ],
};
