const phaseId = '6a369d5e66020ed05b3214c3';
const moduleId = '6a369d6066020ed05b3214fc';

module.exports = {
  phaseId,
  moduleId,
  order: 2,
  type: 'interactive',
  duration: 40,
  difficulty: 'intermediate',
  status: 'published',
  title: 'A2A — Agent-to-Agent Protocol (Part 3 of 3) — Full Harness, Transport Bindings, and the Final Mental Model',
  titleKn: 'A2A — Agent-to-Agent Protocol (Part 3 of 3) — Full Harness, Transport Bindings, ಮತ್ತೂ Final Mental Model',
  desc: 'Combine every genuinely-run piece from Parts 1-2 into one end-to-end trace -- discovery, mixed-part message, multi-turn lifecycle, and terminal-state proof -- then separate the A2A protocol model from its JSON-RPC/gRPC transport bindings.',
  descKn: 'Parts 1-2 ya ಪ್ರತಿ ನಿಜವಾಗಿ-ಚಲಿಸಿದ ಭಾಗವನ್ನೂ ಒಂದೂ end-to-end trace ಗೆ ಸಂಯೋಜಿಸಿ.',
  objectives: [
    'Genuinely run the complete pipeline: skill discovery -> mixed-part message -> multi-turn task -> artifact -> completed, and read every line of the real output back to its protocol meaning.',
    'Explain why A2A separates the logical protocol (Agent Card, Task, Message, Part, Artifact) from its transport binding (JSON-RPC over HTTP, or gRPC).',
    'Distinguish Skill from Tool, and Agent Card from an MCP tool schema, using the agent-boundary vs tool-boundary framing.',
    'Explain how A2A and MCP compose in one architecture: a coordinator delegates via A2A to a worker agent, which internally invokes capabilities via MCP.',
    'State the module\'s one-sentence mental model and correctly classify a new scenario as MCP-shaped or A2A-shaped.',
  ],
  objectivesKn: [
    'ಪೂರ್ಣ pipeline ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ.',
    'A2A logical protocol ಅನ್ನೂ ಅದರ transport binding ಇಂದ ಏಕೆ ಪ್ರತ್ಯೇಕಿಸುತ್ತದೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'Skill ಅನ್ನೂ Tool ಇಂದ ಪ್ರತ್ಯೇಕಿಸಿ.',
    'A2A ಮತ್ತೂ MCP ಒಂದೂ ವಾಸ್ತುಶಿಲ್ಪದಲ್ಲಿ ಹೇಗೆ ಸಂಯೋಜಿಸುತ್ತವೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'module ya ಒಂದೂ-ವಾಕ್ಯ mental model ಹೇಳಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'A2A — Agent-to-Agent Protocol (Part 3 of 3)', textKn: 'A2A — Agent-to-Agent Protocol (Part 3 of 3)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: Parts 1-2 of this module · Time: ~40 minutes · Part 3 of 3',
      bodyKn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: ಈ module ya Parts 1-2 · Time: ~40 ನಿಮಿಷಗಳು · Part 3 of 3',
      pillsEn: 'Full Harness,Transport Binding,Skill vs Tool,Mental Model', pillsKn: 'Full Harness,Transport Binding,Skill vs Tool,Mental Model' } },

    { type: 'heading', data: { textEn: 'Running the Complete Pipeline', textKn: 'ಪೂರ್ಣ Pipeline ಅನ್ನೂ ಚಲಾಯಿಸುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'a2a_harness.py', headingEn: 'Genuinely running discovery, message construction, and the full task lifecycle in one script', headingKn: 'discovery, message construction, ಪೂರ್ಣ task lifecycle ಅನ್ನೂ ಒಂದೂ script ನಲ್ಲಿ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ',
      descEn: 'Everything below was genuinely executed as one connected program -- not narrated separately. This is the harness from Parts 1-2, combined and re-run end to end.',
      descKn: 'ಕೆಳಗಿನ ಎಲ್ಲವೂ ಒಂದೂ ಸಂಪರ್ಕಿತ program ಆಗಿ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲ್ಪಟ್ಟಿತೂ -- ಪ್ರತ್ಯೇಕವಾಗಿ ನಿರೂಪಿಸಲ್ಪಟ್ಟಿಲ್ಲ.',
      code: "import uuid\n\nAGENT_CARD = {\n    \"name\": \"research-agent\",\n    \"skills\": [{\"id\": \"summarize\", \"name\": \"Summarize document\",\n                \"inputModes\": [\"text\", \"file\", \"data\"], \"outputModes\": [\"text\", \"artifact\"]}],\n}\n\ndef discover_skill(agent_card, skill_id):\n    for skill in agent_card[\"skills\"]:\n        if skill[\"id\"] == skill_id:\n            return skill\n    raise KeyError(f\"agent does not advertise skill: {skill_id}\")\n\ndef build_message(role, parts):\n    for part in parts:\n        if part[\"type\"] not in (\"text\", \"file\", \"data\"):\n            raise ValueError(f\"unsupported part type: {part['type']}\")\n    return {\"role\": role, \"parts\": parts}\n\nTERMINAL_STATES = {\"completed\", \"failed\", \"canceled\", \"rejected\"}\nVALID_TRANSITIONS = {\n    \"submitted\": {\"working\", \"rejected\"},\n    \"working\": {\"input_required\", \"completed\", \"failed\", \"canceled\"},\n    \"input_required\": {\"working\"},\n}\n\nclass Task:\n    def __init__(self, message):\n        self.id = f\"task-{uuid.uuid4().hex[:8]}\"\n        self.state = \"submitted\"\n        self.messages = [message]\n        self.artifacts = []\n        self.history = [\"submitted\"]\n    def transition(self, new_state):\n        allowed = VALID_TRANSITIONS.get(self.state, set())\n        if new_state not in allowed:\n            raise ValueError(f\"illegal transition: {self.state} -> {new_state}\")\n        self.state = new_state\n        self.history.append(new_state)\n    def add_message(self, message):\n        if self.state != \"input_required\":\n            raise ValueError(f\"cannot accept message while '{self.state}'\")\n        self.messages.append(message)\n    def add_artifact(self, artifact):\n        self.artifacts.append(artifact)\n\n# 1. Discover\nskill = discover_skill(AGENT_CARD, \"summarize\")\nprint(\"1. discovered skill:\", skill[\"id\"])\n\n# 2. Construct mixed-part message\nmsg = build_message(\"user\", [\n    {\"type\": \"text\", \"text\": \"Summarize this paper.\"},\n    {\"type\": \"file\", \"file\": {\"name\": \"paper.pdf\", \"mimeType\": \"application/pdf\", \"bytes\": \"...\"}},\n])\nprint(\"2. message part types:\", [p[\"type\"] for p in msg[\"parts\"]])\n\n# 3. Delegate -> Task created\ntask = Task(msg)\nprint(\"3. task created, state:\", task.state)\n\n# 4. Begin work\ntask.transition(\"working\")\nprint(\"4. state:\", task.state)\n\n# 5. Need clarification\ntask.transition(\"input_required\")\nprint(\"5. state:\", task.state)\n\n# 6. Client supplies missing info -- SAME task\nfollow_up = build_message(\"user\", [{\"type\": \"data\", \"data\": {\"targetLength\": \"3 paragraphs\"}}])\ntask.add_message(follow_up)\nprint(\"6. messages on task:\", len(task.messages))\n\n# 7. Resume\ntask.transition(\"working\")\nprint(\"7. state:\", task.state)\n\n# 8. Produce artifact and complete\nartifact = {\"name\": \"summary\", \"mimeType\": \"text/markdown\",\n            \"parts\": [{\"type\": \"text\", \"text\": \"Paragraph 1...\\n\\nParagraph 2...\\n\\nParagraph 3...\"}]}\ntask.add_artifact(artifact)\ntask.transition(\"completed\")\nprint(\"8. final state:\", task.state, \"| artifact:\", task.artifacts[0][\"name\"])\n\nprint()\nprint(\"full trace:\", task.history)\nprint(\"is terminal:\", task.state in TERMINAL_STATES)" } },
    { type: 'output', data: { output: "1. discovered skill: summarize\n2. message part types: ['text', 'file']\n3. task created, state: submitted\n4. state: working\n5. state: input_required\n6. messages on task: 2\n7. state: working\n8. final state: completed | artifact: summary\n\nfull trace: ['submitted', 'working', 'input_required', 'working', 'completed']\nis terminal: True" } },

    { type: 'concept', data: {
      headingEn: 'Reading This Output Line by Line', headingKn: 'ಈ Output ಅನ್ನೂ Line by Line ಓದುವುದೂ',
      bodyEn: 'Line 1 proves capability discovery. Line 2 proves the Message carries typed, heterogeneous Parts, not a flattened string. Lines 3-8 are the durable lifecycle proof: one task ID persists through every state change, the follow-up message count (2) proves continuity across the input_required pause, and the final line confirms the task landed in a genuinely terminal state with its Artifact attached.',
      bodyKn: 'Line 1 capability discovery ಸಾಬೀತುಪಡಿಸುತ್ತದೆ. Line 2 Message typed, heterogeneous Parts ಸಾಗಿಸುತ್ತದೆ ಎಂದೂ ಸಾಬೀತುಪಡಿಸುತ್ತದೆ. Lines 3-8 durable lifecycle proof.' } },

    { type: 'heading', data: { textEn: 'Protocol Model vs Transport Binding', textKn: 'Protocol Model vs Transport Binding', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'The Logical Objects Stay the Same Regardless of Wire Format', headingKn: 'Wire Format ಏನೇ ಇರಲಿ Logical Objects ಒಂದೇ ಆಗಿ ಉಳಿಯುತ್ತವೆ',
      bodyEn: 'A2A defines two transport bindings: JSON-RPC over HTTP and gRPC. Both carry the exact same logical concepts -- Agent Card, Task, Message, Part, Artifact, and the lifecycle states. Changing the transport (HTTP vs gRPC) never changes what a Task or an Artifact means, just as changing a letter\'s delivery method (truck vs airplane) never changes what the letter says.',
      bodyKn: 'A2A ಎರಡೂ transport bindings ವಿವರಿಸುತ್ತದೆ: JSON-RPC over HTTP ಮತ್ತೂ gRPC. ಎರಡೂ ಒಂದೇ logical concepts ಸಾಗಿಸುತ್ತವೆ.' } },

    { type: 'heading', data: { textEn: 'Skill vs Tool, Agent Card vs Tool Schema', textKn: 'Skill vs Tool, Agent Card vs Tool Schema', level: 'H2' } },
    { type: 'table', data: {
      headingEn: 'Agent boundary vs tool boundary', headers: ['A2A (agent boundary)', 'MCP (tool boundary)'],
      rows: [
        ['Agent Card: "What agent is this and what work can it perform?"', 'Tool schema: "What function/capability can I invoke?"'],
        ['Skill: an advertised agent-level capability that may involve substantial internal work (searches, sub-agents, LLM calls)', 'Tool: a relatively specific, directly-invokable capability'],
      ] } },
    { type: 'concept', data: {
      headingEn: 'A Skill Is Not Just a Renamed Tool', headingKn: 'ಒಂದೂ Skill ಕೇವಲ ಮರುನಾಮಕರಣಗೊಂಡ Tool ಅಲ್ಲ',
      bodyEn: 'A skill such as "research a company and produce an investment report" could internally involve 10 searches, 3 database queries, 2 sub-agents, and an LLM -- the caller never orchestrates any of that. This is exactly the opacity principle from Part 1, restated at the capability-advertisement level.',
      bodyKn: '"ಒಂದೂ ಕಂಪನಿಯನ್ನೂ ಸಂಶೋಧಿಸಿ ಒಂದೂ investment report ಉತ್ಪಾದಿಸಿ" ನಂತಹ ಒಂದೂ skill ಆಂತರಿಕವಾಗಿ 10 searches, 3 database queries, 2 sub-agents ಒಳಗೊಂಡಿರಬಹುದೂ.' } },

    { type: 'heading', data: { textEn: 'A2A and MCP Composing in One Architecture', textKn: 'A2A ಮತ್ತೂ MCP ಒಂದೂ ವಾಸ್ತುಶಿಲ್ಪದಲ್ಲಿ ಸಂಯೋಜಿಸುವುದೂ', level: 'H2' } },
    { type: 'diagram', data: {
      titleEn: 'Delegation at the top, tool invocation underneath', titleKn: 'ಮೇಲೆ Delegation, ಕೆಳಗೆ Tool Invocation',
      contentEn: 'Customer Agent --A2A: delegate a Task--> Writer Agent\n                                                |\n                        +---------------+-------+-------+\n                        |               |               |\n                       MCP             MCP             MCP\n                        v               v               v\n                     Search          Database         Files\n\nThe customer never sees the MCP calls -- opacity holds at every layer.' } },

    { type: 'heading', data: { textEn: 'The Final Mental Model', textKn: 'ಅಂತಿಮ Mental Model', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'One Decision Rule', headingKn: 'ಒಂದೂ ನಿರ್ಧಾರ ನಿಯಮ',
      bodyEn: 'Ask: do I know exactly which capability I want executed? If yes -- search(query), database.read(id) -- that is MCP-shaped: "Do this operation." If instead you are stating an objective and handing off responsibility for achieving it -- "Research this company," "Resolve this complaint," "Produce the quarterly report" -- that is A2A-shaped: "Own this task." The richer Task lifecycle (submitted/working/input_required/completed, Messages, Artifacts) exists specifically because delegated, potentially long-running, potentially-clarifying work needs more structure than a single request/response.',
      bodyKn: 'ಕೇಳಿ: ನನಗೆ ಯಾವ capability ಚಲಾಯಿಸಬೇಕೂ ಎಂದೂ ನಿಖರವಾಗಿ ತಿಳಿದಿದೆಯೇ? ಹೌದಾದರೆ -- ಇದೂ MCP-shaped. ಬದಲಿಗೆ ಒಂದೂ ಉದ್ದೇಶ ಹೇಳುತ್ತಿದ್ದರೆ -- ಇದೂ A2A-shaped.' } },

    { type: 'concept', data: { headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• We genuinely ran the full pipeline in one connected script -- discovery through mixed-part message through the complete multi-turn lifecycle to a terminal, artifact-bearing completed state.\n• A2A separates its logical protocol (Agent Card, Task, Message, Part, Artifact) from its transport bindings (JSON-RPC/HTTP or gRPC) -- the objects mean the same thing regardless of wire format.\n• Skill operates at the agent boundary ("what can this agent do") while Tool operates at the tool boundary ("what function can I invoke") -- don\'t conflate them.\n• A2A and MCP compose: a coordinator delegates via A2A, and the delegated agent may internally invoke MCP tools -- the outer caller never sees those internal calls.\n• The one-sentence rule: know the exact operation -> MCP; hand off an objective -> A2A.',
      bodyKn: '• ಪೂರ್ಣ pipeline ಅನ್ನೂ ನಾವು ಒಂದೂ ಸಂಪರ್ಕಿತ script ನಲ್ಲಿ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿದ್ದೇವೆ.\n• A2A ಅದರ logical protocol ಅನ್ನೂ ಅದರ transport bindings ಇಂದ ಪ್ರತ್ಯೇಕಿಸುತ್ತದೆ.\n• Skill agent boundary ನಲ್ಲಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ, Tool tool boundary ನಲ್ಲಿ.\n• A2A ಮತ್ತೂ MCP ಸಂಯೋಜಿಸುತ್ತವೆ.\n• ಒಂದೂ-ವಾಕ್ಯ ನಿಯಮ: ನಿಖರ operation ತಿಳಿದಿದೆ -> MCP; ಒಂದೂ ಉದ್ದೇಶ ಹಸ್ತಾಂತರಿಸಿ -> A2A.' } },

    { type: 'quiz', data: { questions: [
      { q: 'In the genuine end-to-end run, what does "messages on task: 2" prove?', qKn: 'ನಿಜ end-to-end run ನಲ್ಲಿ, "messages on task: 2" ಏನೂ ಸಾಬೀತುಪಡಿಸುತ್ತದೆ?',
        opts: ['Two separate tasks were created', 'The follow-up message was appended to the same task rather than starting a new one', 'The artifact has two parts', 'The agent card has two skills'],
        optsKn: ['ಎರಡೂ ಪ್ರತ್ಯೇಕ tasks ಸೃಷ್ಟಿಸಲ್ಪಟ್ಟಿವೆ', 'follow-up message ಒಂದೇ task ಗೆ ಸೇರಿಸಲ್ಪಟ್ಟಿತೂ', 'artifact ಎರಡೂ parts ಹೊಂದಿದೆ', 'agent card ಎರಡೂ skills ಹೊಂದಿದೆ'],
        correct: 1 },
      { q: 'A2A defines JSON-RPC/HTTP and gRPC as transport bindings. What stays the same across both?', qKn: 'A2A JSON-RPC/HTTP ಮತ್ತೂ gRPC ಅನ್ನೂ transport bindings ಆಗಿ ವಿವರಿಸುತ್ತದೆ. ಎರಡರಲ್ಲೂ ಏನೂ ಒಂದೇ ಆಗಿ ಉಳಿಯುತ್ತದೆ?',
        opts: ['The HTTP status codes', 'The logical protocol objects: Agent Card, Task, Message, Part, Artifact', 'The exact byte encoding', 'Nothing, they are unrelated'],
        optsKn: ['HTTP status codes', 'logical protocol objects: Agent Card, Task, Message, Part, Artifact', 'ನಿಖರ byte encoding', 'ಏನೂ ಇಲ್ಲ, ಅವು ಸಂಬಂಧವಿಲ್ಲ'],
        correct: 1 },
      { q: 'A coordinator knows exactly that it needs database.lookup_customer(id). Which protocol fits better?', qKn: 'ಒಂದೂ coordinator ಗೆ database.lookup_customer(id) ಬೇಕೂ ಎಂದೂ ನಿಖರವಾಗಿ ತಿಳಿದಿದೆ. ಯಾವ protocol ಉತ್ತಮ ಹೊಂದಾಣಿಕೆ?',
        opts: ['A2A task delegation', 'MCP tool invocation', 'An Agent Card lookup', 'input_required'],
        optsKn: ['A2A task delegation', 'MCP tool invocation', 'ಒಂದೂ Agent Card lookup', 'input_required'],
        correct: 1 },
      { q: 'Why does an Agent Card differ from an MCP tool schema?', qKn: 'ಒಂದೂ Agent Card ಒಂದೂ MCP tool schema ಇಂದ ಏಕೆ ಭಿನ್ನ?',
        opts: ['They are actually identical', 'The Agent Card describes an agent-level capability that may involve substantial internal work; a tool schema describes a directly-invokable function', 'Agent Cards cannot list skills', 'Tool schemas are agent-level'],
        optsKn: ['ಅವು ವಾಸ್ತವವಾಗಿ ಒಂದೇ', 'Agent Card ಗಣನೀಯ ಆಂತರಿಕ ಕೆಲಸ ಒಳಗೊಳ್ಳಬಹುದಾದ ಒಂದೂ agent-level capability ವಿವರಿಸುತ್ತದೆ; tool schema ನೇರವಾಗಿ-ಆಹ್ವಾನಿಸಬಹುದಾದ ಒಂದೂ function ವಿವರಿಸುತ್ತದೆ', 'Agent Cards skills ಪಟ್ಟಿ ಮಾಡಲಾಗುವುದಿಲ್ಲ', 'Tool schemas agent-level'],
        correct: 1 },
      { q: 'Why can A2A and MCP coexist in one architecture?', qKn: 'A2A ಮತ್ತೂ MCP ಒಂದೂ ವಾಸ್ತುಶಿಲ್ಪದಲ್ಲಿ ಏಕೆ ಸಹಬಾಳ್ವೆ ನಡೆಸಬಹುದೂ?',
        opts: ['They are identical protocols', 'A2A can handle agent-to-agent delegation while an agent can internally use MCP to invoke tools', 'MCP must always transport A2A messages', 'A2A is only an authentication layer'],
        optsKn: ['ಅವು ಒಂದೇ protocols', 'A2A agent-to-agent delegation ನಿರ್ವಹಿಸಬಹುದೂ ಆದರೆ ಒಂದೂ agent ಆಂತರಿಕವಾಗಿ MCP ಬಳಸಬಹುದೂ', 'MCP ಯಾವಾಗಲೂ A2A messages ಸಾಗಿಸಬೇಕೂ', 'A2A ಒಂದೂ authentication layer ಮಾತ್ರ'],
        correct: 1 },
    ] } },
  ],
};
