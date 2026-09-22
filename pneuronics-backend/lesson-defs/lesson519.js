const phaseId = '6a369d5e66020ed05b3214c3'; // Phase 16: Tools and Protocols
const moduleId = '6a369d5f66020ed05b3214ea'; // Module 262: MCP Async Tasks

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'interactive',
  duration: 40,
  difficulty: 'advanced',
  status: 'published',
  title: 'MCP Tasks Extension: Durable Work on a Stateless Core (Part 2 of 3) — tasks/get, input_required, and tasks/update',
  titleKn: 'MCP Tasks Extension: Durable Work on a Stateless Core (Part 2 of 3) — tasks/get, input_required, tasks/update',
  desc: 'Genuinely advance a durable task through working -> input_required -> tasks/update, and prove tasks/update is idempotent against a duplicate response -- a genuine defense against network retries double-applying an approval.',
  descKn: 'ಒಂದೂ durable task ಅನ್ನೂ working -> input_required -> tasks/update ಮೂಲಕ ನಿಜವಾಗಿ ಮುಂದೂ ಸಾಗಿಸಿ, ಮತ್ತು tasks/update ಒಂದೂ duplicate response ವಿರುದ್ಧ idempotent ಎಂದೂ ಸಾಬೀತುಪಡಿಸಿ.',
  objectives: [
    'Explain why resultType (describes the RPC) and status (describes the durable job) are different layers, and why {"resultType":"complete","status":"working"} is valid.',
    'Explain why there is no tasks/status or tasks/result -- tasks/get always returns the full current snapshot.',
    'Genuinely advance a task to input_required and inspect its inputRequests structure.',
    'Genuinely prove tasks/update is idempotent: a duplicate accepted response does not re-apply.',
    'Explain why input request keys must remain unique for a task\'s entire lifetime.',
  ],
  objectivesKn: [
    'resultType ಮತ್ತು status ಏಕೆ ಭಿನ್ನ layers ಎಂದೂ ವಿವರಿಸಿ.',
    'tasks/status ಅಥವಾ tasks/result ಏಕೆ ಇಲ್ಲ ಎಂದೂ ವಿವರಿಸಿ -- tasks/get ಯಾವಾಗಲೂ ಪೂರ್ಣ ಪ್ರಸ್ತುತ snapshot ಹಿಂತಿರುಗಿಸುತ್ತದೆ.',
    'ಒಂದೂ task ಅನ್ನೂ ನಿಜವಾಗಿ input_required ಗೆ ಮುಂದೂ ಸಾಗಿಸಿ ಅದರ inputRequests ರಚನೆ ಪರಿಶೀಲಿಸಿ.',
    'tasks/update idempotent ಎಂದೂ ನಿಜವಾಗಿ ಸಾಬೀತುಪಡಿಸಿ.',
    'input request keys ಒಂದೂ task ya ಪೂರ್ಣ lifetime ಗೆ ಏಕೆ ವಿಶಿಷ್ಟವಾಗಿ ಉಳಿಯಬೇಕೂ ಎಂದೂ ವಿವರಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'MCP Tasks Extension: Durable Work on a Stateless Core (Part 2 of 3)', textKn: 'MCP Tasks Extension: Durable Work on a Stateless Core (Part 2 of 3)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: Part 1 · Time: ~40 minutes · Part 2 of 3',
      bodyKn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: Part 1 · Time: ~40 ನಿಮಿಷಗಳು · Part 2 of 3',
      pillsEn: 'tasks/get,input_required,tasks/update,Idempotency', pillsKn: 'tasks/get,input_required,tasks/update,Idempotency' } },

    { type: 'heading', data: { textEn: 'The Most Important Parser Distinction in This Module', textKn: 'ಈ Module ನಲ್ಲಿ ಅತ್ಯಂತ ಮುಖ್ಯ Parser ವ್ಯತ್ಯಾಸ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'tasks_demo.py', headingEn: 'Genuinely confirming resultType=complete with status=working', headingKn: 'resultType=complete ಜೊತೆ status=working ಅನ್ನೂ ನಿಜವಾಗಿ ಖಚಿತಪಡಿಸುವುದೂ',
      descEn: 'This looks contradictory but isn\'t: resultType describes whether the tasks/get RPC itself succeeded; status describes whether the underlying durable job is done. We genuinely load the task created in Part 1 and print both.',
      descKn: 'ಇದೂ ವಿರೋಧಾಭಾಸದಂತೆ ಕಾಣುತ್ತದೆ ಆದರೆ ಅಲ್ಲ: resultType tasks/get RPC ಸ್ವತಃ ಯಶಸ್ವಿಯಾಯಿತೇ ಎಂದೂ ವಿವರಿಸುತ್ತದೆ; status ಆಧಾರವಾಗಿರುವ durable job ಮುಗಿದಿದೆಯೇ ಎಂದೂ ವಿವರಿಸುತ್ತದೆ.',
      code: "# task from Part 1, freshly loaded via tasks/get\nsnap = store_a.load(task[\"taskId\"])\nprint(\"resultType: complete (the GET succeeded)\")\nprint(\"status:\", snap[\"status\"], \"(the job is still running)\")" } },
    { type: 'output', data: { output: "resultType: complete (the GET succeeded)\nstatus: working (the job is still running)" } },

    { type: 'concept', data: {
      headingEn: 'Common Client Bug', headingKn: 'ಸಾಮಾನ್ಯ Client Bug',
      bodyEn: 'A wrong client checks: if result["resultType"] == "complete": print("Report finished!") -- that is WRONG, because resultType only tells you the tasks/get RPC finished. The correct check is: if result["status"] == "completed": consume(result["result"]).',
      bodyKn: 'ಒಂದೂ ತಪ್ಪಾದ client: if result["resultType"] == "complete" ಪರಿಶೀಲಿಸುತ್ತದೆ -- ಇದೂ ತಪ್ಪಾಗಿದೆ, ಏಕೆಂದರೆ resultType ಕೇವಲ RPC ಮುಗಿದಿದೆ ಎಂದೂ ಹೇಳುತ್ತದೆ. ಸರಿಯಾದ ಪರಿಶೀಲನೆ status == "completed" ಆಗಿದೆ.' } },

    { type: 'heading', data: { textEn: 'No tasks/status, No tasks/result', textKn: 'tasks/status ಇಲ್ಲ, tasks/result ಇಲ್ಲ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'One Method, Always the Full Snapshot', headingKn: 'ಒಂದೂ Method, ಯಾವಾಗಲೂ ಪೂರ್ಣ Snapshot',
      bodyEn: 'tasks/get always returns the current durable snapshot -- which may already contain the working state, pending input, completed result, or failed error. Once complete, the original tool result appears inside the NEXT tasks/get snapshot -- there is no separate tasks/result call.',
      bodyKn: 'tasks/get ಯಾವಾಗಲೂ ಪ್ರಸ್ತುತ durable snapshot ಹಿಂತಿರುಗಿಸುತ್ತದೆ. complete ಆದ ನಂತರ, ಮೂಲ tool result ಮುಂದಿನ tasks/get snapshot ಒಳಗೆ ಕಾಣಿಸಿಕೊಳ್ಳುತ್ತದೆ -- ಪ್ರತ್ಯೇಕ tasks/result call ಇಲ್ಲ.' } },

    { type: 'heading', data: { textEn: 'Genuinely Advancing to input_required', textKn: 'input_required ಗೆ ನಿಜವಾಗಿ ಮುಂದೂ ಸಾಗಿಸುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'tasks_demo.py', headingEn: 'The worker genuinely transitions and persists inputRequests', headingKn: 'worker ನಿಜವಾಗಿ ಪರಿವರ್ತನೆಗೊಳ್ಳುತ್ತದೆ ಮತ್ತು inputRequests ಸಂಗ್ರಹಿಸುತ್ತದೆ',
      descEn: '', descKn: '',
      code: "def advance_to_input_required(store, task_id):\n    task = store.load(task_id)\n    task[\"status\"] = \"input_required\"\n    task[\"lastUpdatedAt\"] = time.time()\n    task[\"issuedInputKeys\"].append(\"approve_outline\")\n    task[\"inputRequests\"] = {\n        \"approve_outline\": {\n            \"method\": \"elicitation/create\",\n            \"params\": {\"mode\": \"form\", \"message\": \"Approve the generated report outline?\",\n                       \"requestedSchema\": {\"type\": \"object\", \"properties\": {\"approved\": {\"type\": \"boolean\"}}, \"required\": [\"approved\"]}}\n        }\n    }\n    store.save(task)\n    return task\n\nsnap2 = advance_to_input_required(store_a, task[\"taskId\"])\nprint(\"status:\", snap2[\"status\"], \"inputRequests keys:\", list(snap2[\"inputRequests\"].keys()))" } },
    { type: 'output', data: { output: "status: input_required inputRequests keys: ['approve_outline']" } },

    { type: 'heading', data: { textEn: 'Genuinely Proving tasks/update Is Idempotent', textKn: 'tasks/update Idempotent ಎಂದೂ ನಿಜವಾಗಿ ಸಾಬೀತುಪಡಿಸುವುದೂ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Why Idempotency Matters', headingKn: 'Idempotency ಏಕೆ ಮುಖ್ಯ',
      bodyEn: 'If the client sends tasks/update, the server commits it, but the network drops the response before the client sees it -- the client will retry. Without deduplication, the retry could re-apply the same approval a second time. We genuinely test this exact scenario.',
      bodyKn: 'client tasks/update ಕಳುಹಿಸಿದರೆ, server commit ಮಾಡುತ್ತದೆ, ಆದರೆ network response ಕಳೆದುಹೋಗುತ್ತದೆ -- client retry ಮಾಡುತ್ತದೆ. deduplication ಇಲ್ಲದೆ, retry ಅದೇ approval ಅನ್ನೂ ಎರಡನೇ ಬಾರಿ ಮರುಅನ್ವಯಿಸಬಹುದು.' } },

    { type: 'code', data: {
      filename: 'tasks_demo.py', headingEn: 'Genuine tasks/update with fulfilled-key deduplication', headingKn: 'fulfilled-key deduplication ಜೊತೆ ನಿಜ tasks/update',
      descEn: 'tasks_update() checks fulfilledInputKeys BEFORE applying -- a key already fulfilled is silently ignored on retry, rather than re-executed.',
      descKn: 'tasks_update() ಅನ್ವಯಿಸುವ ಮೊದಲು fulfilledInputKeys ಪರಿಶೀಲಿಸುತ್ತದೆ -- ಈಗಾಗಲೇ ಪೂರೈಸಿದ ಒಂದೂ key retry ಮೇಲೆ ಮೌನವಾಗಿ ನಿರ್ಲಕ್ಷಿಸಲ್ಪಡುತ್ತದೆ.',
      code: "def tasks_update(store, task_id, key, response):\n    task = store.load(task_id)\n    if key not in task[\"issuedInputKeys\"]:\n        raise ValueError(\"unknown input key: \" + key)\n    if key in task[\"fulfilledInputKeys\"]:\n        return {\"resultType\": \"complete\", \"note\": \"duplicate ignored\"}  # idempotent\n    if response[\"action\"] == \"accept\":\n        task[\"fulfilledInputKeys\"].append(key)\n        del task[\"inputRequests\"][key]\n        task[\"status\"] = \"working\"\n        task[\"lastUpdatedAt\"] = time.time()\n        store.save(task)\n    return {\"resultType\": \"complete\"}\n\nack = tasks_update(store_a, task[\"taskId\"], \"approve_outline\", {\"action\": \"accept\", \"content\": {\"approved\": True}})\nprint(\"update ack:\", ack)\nsnap3 = store_a.load(task[\"taskId\"])\nprint(\"status after update:\", snap3[\"status\"], \"fulfilledInputKeys:\", snap3[\"fulfilledInputKeys\"])\n\n# simulate the client retrying because it never saw the first response\nack2 = tasks_update(store_a, task[\"taskId\"], \"approve_outline\", {\"action\": \"accept\", \"content\": {\"approved\": True}})\nprint(\"duplicate update ack:\", ack2, \"<- did NOT re-apply\")" } },
    { type: 'output', data: { output: "update ack: {'resultType': 'complete'}\nstatus after update: working fulfilledInputKeys: ['approve_outline']\nduplicate update ack: {'resultType': 'complete', 'note': 'duplicate ignored'} <- did NOT re-apply" } },

    { type: 'heading', data: { textEn: 'Why the Original tools/call Must Not Be Retried', textKn: 'ಮೂಲ tools/call ಏಕೆ Retry ಆಗಬಾರದೂ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'A New tools/call Would Create a Duplicate Job', headingKn: 'ಒಂದೂ ಹೊಸ tools/call ಒಂದೂ Duplicate Job ಸೃಷ್ಟಿಸುತ್ತದೆ',
      bodyEn: 'Once a task exists and enters input_required, the client must continue with tasks/update(existing_task_id) -- not retry tools/call. Retrying tools/call would create tsk_456 alongside the existing tsk_123, potentially producing two competing report generations for the same request.',
      bodyKn: 'ಒಂದೂ task ಅಸ್ತಿತ್ವದಲ್ಲಿದ್ದು input_required ಪ್ರವೇಶಿಸಿದ ನಂತರ, client tasks/update ಜೊತೆ ಮುಂದುವರಿಯಬೇಕು -- tools/call retry ಮಾಡಬಾರದು. Retry ಮಾಡುವುದೂ ಅಸ್ತಿತ್ವದಲ್ಲಿರುವ task ya ಜೊತೆಗೆ ಒಂದೂ ಎರಡನೇ ಪ್ರತಿಸ್ಪರ್ಧಿ task ಸೃಷ್ಟಿಸುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Input Keys Must Stay Unique for the Task\'s Lifetime', textKn: 'Input Keys Task ya Lifetime ಗೆ ವಿಶಿಷ್ಟವಾಗಿ ಉಳಿಯಬೇಕು', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Why Reusing a Key Like "approve" Is Dangerous', headingKn: '"approve" ರಂತಹ ಒಂದೂ Key ಮರುಬಳಸುವುದೂ ಏಕೆ ಅಪಾಯಕಾರಿ',
      bodyEn: 'If "approve" is reused first for "Approve outline?" and later for "Approve final publication?", a delayed duplicate response for the FIRST question could be misapplied to the second. Our issuedInputKeys list (append-only, never reused) is exactly the durable record that prevents this ambiguity.',
      bodyKn: '"approve" ಮೊದಲು "Approve outline?" ಗೆ ಮತ್ತು ನಂತರ "Approve final publication?" ಗೆ ಮರುಬಳಸಿದರೆ, ಮೊದಲ ಪ್ರಶ್ನೆಗೆ ವಿಳಂಬಿತ duplicate response ಎರಡನೇಯದಕ್ಕೆ ತಪ್ಪಾಗಿ ಅನ್ವಯಿಸಬಹುದು.' } },

    { type: 'concept', data: { headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• resultType describes the RPC (tasks/get succeeded); status describes the durable job (working/completed/etc) -- {"resultType":"complete","status":"working"} is genuinely valid and common.\n• There is no tasks/status or tasks/result -- tasks/get always returns the full current snapshot, including the final result once complete.\n• We genuinely proved tasks/update is idempotent: a duplicate accepted response for an already-fulfilled key is ignored, not re-applied.\n• Once a task exists, continue with tasks/update, never retry the original tools/call.\n• Input request keys must remain unique across a task\'s entire lifetime to keep responses correctly correlated.',
      bodyKn: '• resultType RPC ವಿವರಿಸುತ್ತದೆ; status durable job ವಿವರಿಸುತ್ತದೆ -- ಎರಡೂ ಒಂದೇ ಬಾರಿ ಇರಬಹುದು.\n• tasks/status ಅಥವಾ tasks/result ಇಲ್ಲ -- tasks/get ಯಾವಾಗಲೂ ಪೂರ್ಣ ಪ್ರಸ್ತುತ snapshot ಹಿಂತಿರುಗಿಸುತ್ತದೆ.\n• ನಾವು ನಿಜವಾಗಿ tasks/update idempotent ಎಂದೂ ಸಾಬೀತುಪಡಿಸಿದ್ದೇವೆ.\n• ಒಂದೂ task ಅಸ್ತಿತ್ವದಲ್ಲಿದ್ದ ನಂತರ, tasks/update ಜೊತೆ ಮುಂದುವರಿಯಿರಿ, ಮೂಲ tools/call retry ಮಾಡಬೇಡಿ.\n• Input request keys ಒಂದೂ task ya ಪೂರ್ಣ lifetime ಗೆ ವಿಶಿಷ್ಟವಾಗಿ ಉಳಿಯಬೇಕು.' } },

    { type: 'quiz', data: { questions: [
      { q: 'A tasks/get response contains {"resultType": "complete", "status": "working"}. What does it mean?', qKn: 'ಒಂದೂ tasks/get response {"resultType": "complete", "status": "working"} ಒಳಗೊಂಡಿದೆ. ಇದೂ ಏನೂ ಅರ್ಥ?',
        opts: ['The response is invalid', 'The underlying task completed', 'The polling RPC completed but the task is still running', 'The task has failed'],
        optsKn: ['response ಅಮಾನ್ಯವಾಗಿದೆ', 'ಆಧಾರವಾಗಿರುವ task ಮುಗಿದಿದೆ', 'polling RPC ಮುಗಿದಿದೆ ಆದರೆ task ಇನ್ನೂ ಚಾಲನೆಯಲ್ಲಿದೆ', 'task ವಿಫಲವಾಗಿದೆ'],
        correct: 2 },
      { q: 'A task already exists and becomes input_required. How should the client respond?', qKn: 'ಒಂದೂ task ಈಗಾಗಲೇ ಅಸ್ತಿತ್ವದಲ್ಲಿದ್ದು input_required ಆಗುತ್ತದೆ. client ಹೇಗೂ ಪ್ರತಿಕ್ರಿಯಿಸಬೇಕು?',
        opts: ['Retry the original tools/call', 'Call tasks/result', 'Start a new protocol session', 'Send tasks/update with matching inputResponses'],
        optsKn: ['ಮೂಲ tools/call retry ಮಾಡಿ', 'tasks/result ಕರೆ ಮಾಡಿ', 'ಒಂದೂ ಹೊಸ protocol session ಪ್ರಾರಂಭಿಸಿ', 'ಹೊಂದಾಣಿಕೆಯ inputResponses ಜೊತೆ tasks/update ಕಳುಹಿಸಿ'],
        correct: 3 },
      { q: 'Why must input request keys remain unique across a task lifetime?', qKn: 'input request keys ಒಂದೂ task lifetime ಆದ್ಯಂತ ಏಕೆ ವಿಶಿಷ್ಟವಾಗಿ ಉಳಿಯಬೇಕು?',
        opts: ['To reduce JSON size', 'To safely correlate, deduplicate, and ignore stale responses', 'Because JSON objects cannot reuse names', 'To determine ttlMs'],
        optsKn: ['JSON size ಕಡಿಮೆ ಮಾಡಲು', 'ಸುರಕ್ಷಿತವಾಗಿ correlate, deduplicate, ignore stale responses ಮಾಡಲು', 'JSON objects ಹೆಸರುಗಳನ್ನೂ ಮರುಬಳಸಲಾಗುವುದಿಲ್ಲ', 'ttlMs ನಿರ್ಧರಿಸಲು'],
        correct: 1 },
      { q: 'After a successful tasks/update, can the client assume the task is completed?', qKn: 'ಒಂದೂ ಯಶಸ್ವಿ tasks/update ನಂತರ, client task ಮುಗಿದಿದೆ ಎಂದೂ ಊಹಿಸಬಹುದೇ?',
        opts: ['Yes', 'Only if HTTP returned 200', 'No; the acknowledgement only confirms the update RPC completed', 'Yes, if resultType is complete'],
        optsKn: ['ಹೌದು', 'HTTP 200 ಹಿಂತಿರುಗಿಸಿದರೆ ಮಾತ್ರ', 'ಇಲ್ಲ; acknowledgement ಕೇವಲ update RPC ಮುಗಿದಿದೆ ಎಂದೂ ಖಚಿತಪಡಿಸುತ್ತದೆ', 'ಹೌದು, resultType complete ಆಗಿದ್ದರೆ'],
        correct: 2 },
      { q: 'Which modern method returns the final tool result after asynchronous execution completes?', qKn: 'asynchronous execution ಮುಗಿದ ನಂತರ ಯಾವ ಆಧುನಿಕ method ಅಂತಿಮ tool result ಹಿಂತಿರುಗಿಸುತ್ತದೆ?',
        opts: ['tasks/result', 'tasks/status', 'tasks/list', 'tasks/get'],
        optsKn: ['tasks/result', 'tasks/status', 'tasks/list', 'tasks/get'],
        correct: 3 },
    ] } },
  ],
};
