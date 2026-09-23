const phaseId = '6a369d5e66020ed05b3214c3';
const moduleId = '6a369d6066020ed05b3214fc';

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'interactive',
  duration: 45,
  difficulty: 'intermediate',
  status: 'published',
  title: 'A2A — Agent-to-Agent Protocol (Part 2 of 3) — Task Lifecycle, input_required, Messages, and Artifacts',
  titleKn: 'A2A — Agent-to-Agent Protocol (Part 2 of 3) — Task Lifecycle, input_required, Messages, ಮತ್ತೂ Artifacts',
  desc: 'Genuinely implement a Task state machine and run it through the full multi-turn lifecycle -- submitted, working, input_required, working, completed -- then prove it correctly rejects an illegal jump and an out-of-band message.',
  descKn: 'ಒಂದೂ Task state machine ಅನ್ನೂ ನಿಜವಾಗಿ ಅನುಷ್ಠಾನಗೊಳಿಸಿ ಮತ್ತೂ ಪೂರ್ಣ ಬಹು-ಸುತ್ತಿನ lifecycle ಮೂಲಕ ಚಲಾಯಿಸಿ.',
  objectives: [
    'Genuinely implement a Task state machine enforcing legal transitions, and prove an illegal jump (submitted -> completed) is rejected.',
    'Genuinely trace the full interactive lifecycle: submitted -> working -> input_required -> working -> completed, and prove the follow-up message stays attached to the SAME task, not a new one.',
    'Explain why input_required is a recoverable state, not a failure, and distinguish it from failed, canceled, and rejected.',
    'Genuinely prove that a follow-up message is only accepted while a task is in input_required, never mid-working.',
    'Distinguish Message (communication) from Artifact (deliverable), and explain the Artifact\'s structure: name, mimeType, parts.',
  ],
  objectivesKn: [
    'ಒಂದೂ Task state machine ಅನ್ನೂ ನಿಜವಾಗಿ ಅನುಷ್ಠಾನಗೊಳಿಸಿ ಮತ್ತೂ ಒಂದೂ ಅಕ್ರಮ ಜಂಪ್ ತಿರಸ್ಕರಿಸಲ್ಪಟ್ಟಿದೆ ಎಂದೂ ಸಾಬೀತುಪಡಿಸಿ.',
    'ಸಂಪೂರ್ಣ interactive lifecycle ಅನ್ನೂ ನಿಜವಾಗಿ trace ಮಾಡಿ.',
    'input_required ಒಂದೂ ಚೇತರಿಸಿಕೊಳ್ಳಬಹುದಾದ state, ವೈಫಲ್ಯ ಅಲ್ಲ ಎಂದೂ ವಿವರಿಸಿ.',
    'ಒಂದೂ follow-up message input_required ಸಮಯದಲ್ಲಿ ಮಾತ್ರ ಸ್ವೀಕರಿಸಲ್ಪಡುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ಸಾಬೀತುಪಡಿಸಿ.',
    'Message (communication) ಅನ್ನೂ Artifact (deliverable) ಇಂದ ಪ್ರತ್ಯೇಕಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'A2A — Agent-to-Agent Protocol (Part 2 of 3)', textKn: 'A2A — Agent-to-Agent Protocol (Part 2 of 3)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: Part 1 of this module · Time: ~45 minutes · Part 2 of 3',
      bodyKn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: ಈ module ya Part 1 · Time: ~45 ನಿಮಿಷಗಳು · Part 2 of 3',
      pillsEn: 'Task Lifecycle,input_required,Artifact,State Machine', pillsKn: 'Task Lifecycle,input_required,Artifact,State Machine' } },

    { type: 'heading', data: { textEn: 'The Target Lifecycle', textKn: 'ಗುರಿ Lifecycle', level: 'H2' } },
    { type: 'diagram', data: {
      titleEn: 'submitted -> working -> input_required -> working -> completed', titleKn: 'submitted -> working -> input_required -> working -> completed',
      contentEn: 'submitted -> working -> [completed | failed | canceled]\n              |\n              v (needs more info)\n       input_required\n              |\n              v (client supplies a Message)\n          working (resumes)' } },

    { type: 'heading', data: { textEn: 'Genuinely Implementing the Task State Machine', textKn: 'Task State Machine ಅನ್ನೂ ನಿಜವಾಗಿ ಅನುಷ್ಠಾನಗೊಳಿಸುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'a2a_harness.py', headingEn: 'A Task class that enforces legal transitions instead of allowing any state change', headingKn: 'ಯಾವುದೇ state change ಅನ್ನೂ ಅನುಮತಿಸುವ ಬದಲೂ ಮಾನ್ಯ transitions ಜಾರಿಗೊಳಿಸುವ ಒಂದೂ Task class',
      descEn: 'VALID_TRANSITIONS encodes exactly which state changes are allowed. This is the same discipline as the boundary resolvers in Module 265: a fixed, explicit set of legal moves, not an open-ended "set state to anything."',
      descKn: 'VALID_TRANSITIONS ಯಾವ state changes ಅನುಮತಿಸಲ್ಪಟ್ಟಿವೆ ಎಂದೂ ನಿಖರವಾಗಿ ಎನ್ಕೋಡ್ ಮಾಡುತ್ತದೆ.',
      code: "import uuid\n\nTERMINAL_STATES = {\"completed\", \"failed\", \"canceled\", \"rejected\"}\nVALID_TRANSITIONS = {\n    \"submitted\": {\"working\", \"rejected\"},\n    \"working\": {\"input_required\", \"completed\", \"failed\", \"canceled\"},\n    \"input_required\": {\"working\"},\n}\n\nclass Task:\n    def __init__(self, message):\n        self.id = f\"task-{uuid.uuid4().hex[:8]}\"\n        self.state = \"submitted\"\n        self.messages = [message]\n        self.artifacts = []\n        self.history = [\"submitted\"]\n\n    def transition(self, new_state):\n        allowed = VALID_TRANSITIONS.get(self.state, set())\n        if new_state not in allowed:\n            raise ValueError(\n                f\"illegal transition: {self.state} -> {new_state} \"\n                f\"(allowed: {sorted(allowed)})\"\n            )\n        self.state = new_state\n        self.history.append(new_state)\n\n    def add_message(self, message):\n        if self.state != \"input_required\":\n            raise ValueError(\n                f\"cannot accept a follow-up message while task is '{self.state}'\"\n            )\n        self.messages.append(message)\n\n    def add_artifact(self, artifact):\n        self.artifacts.append(artifact)\n\nprint(\"Task class defined with\", len(VALID_TRANSITIONS), \"transition rules.\")" } },
    { type: 'output', data: { output: "Task class defined with 3 transition rules." } },

    { type: 'heading', data: { textEn: 'Running the Full Interactive Lifecycle', textKn: 'ಪೂರ್ಣ Interactive Lifecycle ಅನ್ನೂ ಚಲಾಯಿಸುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'a2a_harness.py', headingEn: 'Genuinely walking submitted -> working -> input_required -> working -> completed', headingKn: 'submitted -> working -> input_required -> working -> completed ಅನ್ನೂ ನಿಜವಾಗಿ ನಡೆಯುವುದೂ',
      descEn: 'The follow-up message is appended to the SAME task object -- proving A2A does not spin up a new task-002 just because clarification was needed.',
      descKn: 'follow-up message ಒಂದೇ task object ಗೆ append ಆಗುತ್ತದೆ -- clarification ಬೇಕಾಗಿದ್ದರೂ A2A ಹೊಸ task-002 ಸೃಷ್ಟಿಸುವುದಿಲ್ಲ ಎಂದೂ ಸಾಬೀತುಪಡಿಸುತ್ತದೆ.',
      code: "def build_message(role, parts):\n    for part in parts:\n        if part[\"type\"] not in (\"text\", \"file\", \"data\"):\n            raise ValueError(f\"unsupported part type: {part['type']}\")\n    return {\"role\": role, \"parts\": parts}\n\ndef run_multi_turn_task(initial_message, needs_more_info, follow_up_message, produce_artifact):\n    task = Task(initial_message)\n    task.transition(\"working\")\n\n    if needs_more_info:\n        task.transition(\"input_required\")\n        task.add_message(follow_up_message)\n        task.transition(\"working\")\n\n    artifact = produce_artifact()\n    task.add_artifact(artifact)\n    task.transition(\"completed\")\n    return task\n\nmsg = build_message(\"user\", [\n    {\"type\": \"text\", \"text\": \"Summarize this paper.\"},\n    {\"type\": \"file\", \"file\": {\"name\": \"paper.pdf\", \"mimeType\": \"application/pdf\", \"bytes\": \"...\"}},\n])\nfollow_up = build_message(\"user\", [{\"type\": \"data\", \"data\": {\"targetLength\": \"3 paragraphs\"}}])\n\ndef produce_summary_artifact():\n    return {\n        \"name\": \"summary\",\n        \"parts\": [{\"type\": \"text\", \"text\": \"Paragraph 1...\\n\\nParagraph 2...\\n\\nParagraph 3...\"}],\n        \"mimeType\": \"text/markdown\",\n    }\n\ntask = run_multi_turn_task(msg, needs_more_info=True, follow_up_message=follow_up,\n                            produce_artifact=produce_summary_artifact)\nprint(\"task id:\", task.id)\nprint(\"state history:\", task.history)\nprint(\"message count (original + follow-up, SAME task):\", len(task.messages))\nprint(\"artifact names:\", [a[\"name\"] for a in task.artifacts])" } },
    { type: 'output', data: { output: "task id: task-ca62a4b6\nstate history: ['submitted', 'working', 'input_required', 'working', 'completed']\nmessage count (original + follow-up, SAME task): 2\nartifact names: ['summary']" } },

    { type: 'code', data: {
      filename: 'a2a_harness.py', headingEn: 'Genuinely running the single-turn path for comparison', headingKn: 'ಹೋಲಿಕೆಗಾಗಿ single-turn path ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ',
      descEn: 'When no clarification is needed, working occurs exactly once -- input_required never appears in the history.',
      descKn: 'ಯಾವುದೇ clarification ಅಗತ್ಯವಿಲ್ಲದಿದ್ದಾಗ, working ನಿಖರವಾಗಿ ಒಮ್ಮೆ ಸಂಭವಿಸುತ್ತದೆ.',
      code: "direct_task = run_multi_turn_task(msg, needs_more_info=False, follow_up_message=None,\n                                   produce_artifact=produce_summary_artifact)\nprint(\"state history:\", direct_task.history)" } },
    { type: 'output', data: { output: "state history: ['submitted', 'working', 'completed']" } },

    { type: 'heading', data: { textEn: 'Proving the State Machine Actually Enforces Its Rules', textKn: 'State Machine ನಿಜವಾಗಿ ಅದರ ನಿಯಮಗಳನ್ನೂ ಜಾರಿಗೊಳಿಸುತ್ತದೆ ಎಂದೂ ಸಾಬೀತುಪಡಿಸುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'a2a_harness.py', headingEn: 'Genuinely rejecting an illegal jump and an out-of-band message', headingKn: 'ಒಂದೂ ಅಕ್ರಮ ಜಂಪ್ ಮತ್ತೂ ಒಂದೂ out-of-band message ಅನ್ನೂ ನಿಜವಾಗಿ ತಿರಸ್ಕರಿಸುವುದೂ',
      descEn: 'A task cannot skip straight from submitted to completed, and a follow-up message cannot be injected while the agent is mid-working -- both would break the protocol\'s causal ordering.',
      descKn: 'ಒಂದೂ task submitted ಇಂದ ನೇರವಾಗಿ completed ಗೆ ಜಿಗಿಯಲಾಗುವುದಿಲ್ಲ, ಮತ್ತೂ agent mid-working ಇರುವಾಗ ಒಂದೂ follow-up message ಚುಚ್ಚಲಾಗುವುದಿಲ್ಲ.',
      code: "bad_task = Task(msg)\ntry:\n    bad_task.transition(\"completed\")  # cannot jump straight from submitted\nexcept ValueError as e:\n    print(\"genuinely rejected illegal transition:\", e)\n\nworking_task = Task(msg)\nworking_task.transition(\"working\")\ntry:\n    working_task.add_message(follow_up)\nexcept ValueError as e:\n    print(\"genuinely rejected out-of-band message:\", e)" } },
    { type: 'output', data: { output: "genuinely rejected illegal transition: illegal transition: submitted -> completed (allowed: ['rejected', 'working'])\ngenuinely rejected out-of-band message: cannot accept a follow-up message while task is 'working'" } },

    { type: 'heading', data: { textEn: 'input_required Is Recoverable; failed Is Not', textKn: 'input_required ಚೇತರಿಸಿಕೊಳ್ಳಬಹುದಾದದೂ; failed ಅಲ್ಲ', level: 'H2' } },
    { type: 'table', data: {
      headingEn: 'Four terminal-ish outcomes, one recoverable pause', headers: ['State', 'Meaning'],
      rows: [
        ['input_required', 'NOT terminal. "I can continue if you give me something." Recoverable via a new Message.'],
        ['completed', 'Terminal. Work successfully finished.'],
        ['failed', 'Terminal. Accepted work couldn\'t successfully finish.'],
        ['canceled', 'Terminal. Work was intentionally stopped.'],
        ['rejected', 'Terminal. Agent didn\'t accept the work at all.'],
      ] } },
    { type: 'concept', data: {
      headingEn: 'rejected vs failed', headingKn: 'rejected vs failed',
      bodyEn: 'rejected = "I won\'t take this work" (submitted -> rejected, before any processing). failed = "I took the work but couldn\'t finish it" (working -> failed, after an unrecoverable error). The state machine above encodes this distinction directly: rejected is only reachable from submitted, failed is only reachable from working.',
      bodyKn: 'rejected = "ನಾನೂ ಈ ಕೆಲಸ ತೆಗೆದುಕೊಳ್ಳುವುದಿಲ್ಲ". failed = "ನಾನೂ ಕೆಲಸ ತೆಗೆದುಕೊಂಡೆ ಆದರೆ ಮುಗಿಸಲಾಗಲಿಲ್ಲ".' } },

    { type: 'heading', data: { textEn: 'Message vs Artifact', textKn: 'Message vs Artifact', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Communication vs Deliverable', headingKn: 'Communication vs Deliverable',
      bodyEn: 'Message = interaction during the task ("What length?" / "Three paragraphs."). Artifact = the produced output, with its own structure: name (semantic identity, e.g. "summary"), mimeType (representation, e.g. "text/markdown"), and parts (the actual content, itself composed of typed Parts). A Task can accumulate several Messages but produces Artifacts only on completion.',
      bodyKn: 'Message = task ಸಮಯದಲ್ಲಿ interaction. Artifact = ಉತ್ಪಾದಿತ output, ತನ್ನದೇ ಆದ ರಚನೆಯೊಂದಿಗೆ: name, mimeType, parts.' } },

    { type: 'concept', data: { headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• We genuinely built a Task state machine with an explicit VALID_TRANSITIONS table, then genuinely ran it through the full submitted -> working -> input_required -> working -> completed lifecycle.\n• The follow-up message stayed attached to the SAME task (message count: 2), proving A2A does not spin up a new task for clarification.\n• We genuinely proved the state machine rejects an illegal transition (submitted -> completed) and an out-of-band message (added while working, not input_required).\n• input_required is a recoverable pause, not a failure -- only failed represents accepted work that couldn\'t finish, and only rejected represents work never accepted at all.\n• Message is communication; Artifact is the named, typed deliverable produced on completion.',
      bodyKn: '• ಒಂದೂ ಸ್ಪಷ್ಟ VALID_TRANSITIONS table ಜೊತೆ Task state machine ಅನ್ನೂ ನಾವು ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ ಪೂರ್ಣ lifecycle ಮೂಲಕ ಚಲಾಯಿಸಿದ್ದೇವೆ.\n• follow-up message ಒಂದೇ task ಗೆ ಅಂಟಿಕೊಂಡಿತೂ.\n• state machine ಒಂದೂ ಅಕ್ರಮ transition ಮತ್ತೂ ಒಂದೂ out-of-band message ಅನ್ನೂ ತಿರಸ್ಕರಿಸುತ್ತದೆ ಎಂದೂ ನಾವು ನಿಜವಾಗಿ ಸಾಬೀತುಪಡಿಸಿದ್ದೇವೆ.\n• input_required ಒಂದೂ ಚೇತರಿಸಿಕೊಳ್ಳಬಹುದಾದ ವಿರಾಮ, ವೈಫಲ್ಯ ಅಲ್ಲ.\n• Message communication; Artifact completion ಮೇಲೆ ಉತ್ಪಾದಿಸಲಾದ ಹೆಸರಿಸಲಾದ, typed deliverable.' } },

    { type: 'quiz', data: { questions: [
      { q: 'The remote agent needs additional information while processing a Task. Which state should represent this?', qKn: 'ಒಂದೂ Task ಪ್ರಕ್ರಿಯೆಗೊಳಿಸುವಾಗ remote agent ಗೆ ಹೆಚ್ಚುವರಿ ಮಾಹಿತಿ ಬೇಕೂ. ಇದನ್ನೂ ಯಾವ state ಪ್ರತಿನಿಧಿಸಬೇಕೂ?',
        opts: ['failed', 'submitted', 'input_required', 'rejected'],
        optsKn: ['failed', 'submitted', 'input_required', 'rejected'],
        correct: 2 },
      { q: 'In the genuine trace, what proves the follow-up message belongs to the same task rather than a new one?', qKn: 'ನಿಜ trace ನಲ್ಲಿ, follow-up message ಒಂದೇ task ಗೆ ಸೇರಿದೆ ಎಂದೂ ಏನೂ ಸಾಬೀತುಪಡಿಸುತ್ತದೆ?',
        opts: ['The task ID changes', 'task.messages has length 2 under the one task object', 'A new Agent Card is fetched', 'The artifact is duplicated'],
        optsKn: ['task ID ಬದಲಾಗುತ್ತದೆ', 'task.messages ಒಂದೂ task object ಅಡಿಯಲ್ಲಿ length 2 ಹೊಂದಿದೆ', 'ಒಂದೂ ಹೊಸ Agent Card fetch ಆಗುತ್ತದೆ', 'artifact ನಕಲಿಸಲ್ಪಟ್ಟಿದೆ'],
        correct: 1 },
      { q: 'Which statement best distinguishes rejected from failed?', qKn: 'ಯಾವ ಹೇಳಿಕೆ rejected ಅನ್ನೂ failed ಇಂದ ಉತ್ತಮವಾಗಿ ಪ್ರತ್ಯೇಕಿಸುತ್ತದೆ?',
        opts: ['They are identical', 'rejected means the work wasn\'t accepted; failed means accepted work couldn\'t successfully finish', 'failed always means the caller canceled', 'rejected means an Artifact was generated'],
        optsKn: ['ಅವು ಒಂದೇ', 'rejected ಎಂದರೆ ಕೆಲಸ ಸ್ವೀಕರಿಸಲ್ಪಡಲಿಲ್ಲ; failed ಎಂದರೆ ಸ್ವೀಕರಿಸಲ್ಪಟ್ಟ ಕೆಲಸ ಮುಗಿಸಲಾಗಲಿಲ್ಲ', 'failed ಯಾವಾಗಲೂ caller ರದ್ದುಗೊಳಿಸಿದೆ ಎಂದೂ ಅರ್ಥ', 'rejected ಎಂದರೆ ಒಂದೂ Artifact ಉತ್ಪಾದಿಸಲ್ಪಟ್ಟಿದೆ'],
        correct: 1 },
      { q: 'The genuine harness raised an error when add_message() was called while the task was "working" rather than "input_required". What does this prove?', qKn: 'task "input_required" ಬದಲಿಗೆ "working" ಆಗಿದ್ದಾಗ add_message() ಕರೆಯಲ್ಪಟ್ಟಾಗ genuine harness ಒಂದೂ error ಎತ್ತಿತೂ. ಇದೂ ಏನೂ ಸಾಬೀತುಪಡಿಸುತ್ತದೆ?',
        opts: ['Messages can be added at any time', 'A follow-up message is only accepted during input_required, preserving causal ordering', 'working is a terminal state', 'Artifacts must precede Messages'],
        optsKn: ['Messages ಯಾವಾಗಲೂ ಸೇರಿಸಬಹುದೂ', 'ಒಂದೂ follow-up message input_required ಸಮಯದಲ್ಲಿ ಮಾತ್ರ ಸ್ವೀಕರಿಸಲ್ಪಡುತ್ತದೆ', 'working ಒಂದೂ terminal state', 'Artifacts Messages ಗಿಂತ ಮೊದಲೂ ಬರಬೇಕೂ'],
        correct: 1 },
      { q: 'What is an Artifact?', qKn: 'ಒಂದೂ Artifact ಎಂದರೇನೂ?',
        opts: ['The remote agent\'s private chain-of-thought', 'An Agent Card signature', 'A named, typed task output/deliverable', 'A transport connection'],
        optsKn: ['remote agent ya ಖಾಸಗಿ chain-of-thought', 'ಒಂದೂ Agent Card signature', 'ಒಂದೂ ಹೆಸರಿಸಲಾದ, typed task output/deliverable', 'ಒಂದೂ transport connection'],
        correct: 2 },
    ] } },
  ],
};
