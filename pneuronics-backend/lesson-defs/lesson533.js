const phaseId = '6a369d5e66020ed05b3214c3';
const moduleId = '6a369d6066020ed05b3214fc'; // Module 268: A2A Protocol

module.exports = {
  phaseId,
  moduleId,
  order: 0,
  type: 'interactive',
  duration: 40,
  difficulty: 'intermediate',
  status: 'published',
  title: 'A2A — Agent-to-Agent Protocol (Part 1 of 3) — Foundations, Agent Cards, Tasks, Messages, and Parts',
  titleKn: 'A2A — Agent-to-Agent Protocol (Part 1 of 3) — Foundations, Agent Cards, Tasks, Messages, ಮತ್ತೂ Parts',
  desc: 'Genuinely build agent skill discovery and a typed Message/Part constructor, and prove both correctly reject an unknown skill and an unsupported part type -- the foundation for the full Task lifecycle in Part 2.',
  descKn: 'agent skill discovery ಮತ್ತೂ ಒಂದೂ typed Message/Part constructor ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ.',
  objectives: [
    'Distinguish MCP (agent invokes a tool/capability) from A2A (agent delegates a task to another agent) with a clear mental model.',
    'Explain the five core A2A objects: Agent Card, Skill, Task, Message, Part, Artifact, and how they relate.',
    'Genuinely implement skill discovery against an Agent Card and prove an unadvertised skill is rejected.',
    'Genuinely build a typed Message constructor accepting text/file/data Parts, and prove an unsupported Part type is rejected.',
    'Explain A2A opacity: the caller sees Task state and outputs, never the remote agent\'s internal reasoning, prompts, or tool calls.',
  ],
  objectivesKn: [
    'MCP (agent ಒಂದೂ tool ಆಹ್ವಾನಿಸುತ್ತದೆ) ಅನ್ನೂ A2A (agent ಒಂದೂ task ಅನ್ನೂ ಇನ್ನೊಂದೂ agent ಗೆ ವಹಿಸುತ್ತದೆ) ಇಂದ ಪ್ರತ್ಯೇಕಿಸಿ.',
    'ಐದೂ ಮುಖ್ಯ A2A objects ವಿವರಿಸಿ: Agent Card, Skill, Task, Message, Part, Artifact.',
    'ಒಂದೂ Agent Card ವಿರುದ್ಧ skill discovery ಅನ್ನೂ ನಿಜವಾಗಿ ಅನುಷ್ಠಾನಗೊಳಿಸಿ.',
    'text/file/data Parts ಸ್ವೀಕರಿಸುವ ಒಂದೂ typed Message constructor ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ.',
    'A2A opacity ವಿವರಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'A2A — Agent-to-Agent Protocol (Part 1 of 3)', textKn: 'A2A — Agent-to-Agent Protocol (Part 1 of 3)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: Module 265-266 · Time: ~40 minutes · Part 1 of 3',
      bodyKn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: Module 265-266 · Time: ~40 ನಿಮಿಷಗಳು · Part 1 of 3',
      pillsEn: 'Agent Card,Skill,Task,Message,Part', pillsKn: 'Agent Card,Skill,Task,Message,Part' } },

    { type: 'heading', data: { textEn: 'MCP vs A2A', textKn: 'MCP vs A2A', level: 'H2' } },
    { type: 'table', data: {
      headingEn: 'The core distinction', headers: ['MCP', 'A2A'],
      rows: [
        ['Agent -> tool', 'Agent -> agent'],
        ['Invoke capability', 'Delegate work'],
        ['Tool result', 'Task + lifecycle'],
        ['Caller knows which tool it invoked', "Agent's internal workflow stays opaque"],
      ] } },
    { type: 'concept', data: {
      headingEn: 'A Real Architecture Uses Both, at Different Layers', headingKn: 'ಒಂದೂ ನಿಜ ವಾಸ್ತುಶಿಲ್ಪ ಎರಡನ್ನೂ ಬಳಸುತ್ತದೆ, ವಿಭಿನ್ನ ಪದರಗಳಲ್ಲಿ',
      bodyEn: 'Coordinator Agent --A2A--> Research Agent, and internally the Research Agent uses --MCP--> Search Tool / Database Tool. A2A does not replace MCP -- delegation (A2A) and capability invocation (MCP) solve different problems and commonly coexist in one system.',
      bodyKn: 'Coordinator Agent --A2A--> Research Agent, ಮತ್ತೂ ಆಂತರಿಕವಾಗಿ Research Agent --MCP--> Search Tool ಬಳಸುತ್ತದೆ. A2A MCP ಅನ್ನೂ ಬದಲಾಯಿಸುವುದಿಲ್ಲ.' } },

    { type: 'heading', data: { textEn: 'The Five Core A2A Objects', textKn: 'ಐದೂ ಮುಖ್ಯ A2A Objects', level: 'H2' } },
    { type: 'diagram', data: {
      titleEn: 'Agent Card -> Skill -> Task -> Message -> Part -> Artifact', titleKn: 'Agent Card -> Skill -> Task -> Message -> Part -> Artifact',
      contentEn: 'Agent -> publishes -> Agent Card -> contains -> Skills\n\nClient discovers agent -> Task -> Messages (each with Parts) -> Artifact (the deliverable)' } },

    { type: 'heading', data: { textEn: 'Agent Card and Skill Discovery', textKn: 'Agent Card ಮತ್ತೂ Skill Discovery', level: 'H2' } },
    { type: 'code', data: {
      filename: 'a2a_harness.py', headingEn: 'Genuinely discovering a skill, and genuinely rejecting an unadvertised one', headingKn: 'ಒಂದೂ skill ಅನ್ನೂ ನಿಜವಾಗಿ discover ಮಾಡುವುದೂ, ಘೋಷಿಸದ ಒಂದನ್ನೂ ನಿಜವಾಗಿ ತಿರಸ್ಕರಿಸುವುದೂ',
      descEn: 'The Agent Card is published capability metadata -- identity, endpoint, skills, capabilities. Before delegating, the caller checks whether the target agent actually advertises the needed skill.',
      descKn: 'Agent Card ಘೋಷಿಸಲ್ಪಟ್ಟ capability metadata -- identity, endpoint, skills, capabilities.',
      code: "AGENT_CARD = {\n    \"schemaVersion\": \"1.0\",\n    \"name\": \"research-agent\",\n    \"description\": \"Summarizes documents and drafts citations.\",\n    \"url\": \"http://localhost/a2a\",\n    \"version\": \"1.0.0\",\n    \"skills\": [\n        {\n            \"id\": \"summarize\",\n            \"name\": \"Summarize document\",\n            \"inputModes\": [\"text\", \"file\", \"data\"],\n            \"outputModes\": [\"text\", \"artifact\"],\n        }\n    ],\n    \"capabilities\": {\"streaming\": True, \"pushNotifications\": False},\n}\n\ndef discover_skill(agent_card, skill_id):\n    for skill in agent_card[\"skills\"]:\n        if skill[\"id\"] == skill_id:\n            return skill\n    raise KeyError(f\"agent does not advertise skill: {skill_id}\")\n\nskill = discover_skill(AGENT_CARD, \"summarize\")\nprint(skill)\n\ntry:\n    discover_skill(AGENT_CARD, \"translate\")\nexcept KeyError as e:\n    print(\"genuinely rejected unknown skill:\", e)" } },
    { type: 'output', data: { output: "{'id': 'summarize', 'name': 'Summarize document', 'inputModes': ['text', 'file', 'data'], 'outputModes': ['text', 'artifact']}\ngenuinely rejected unknown skill: 'agent does not advertise skill: translate'" } },

    { type: 'heading', data: { textEn: 'Messages and Typed Parts', textKn: 'Messages ಮತ್ತೂ Typed Parts', level: 'H2' } },
    { type: 'code', data: {
      filename: 'a2a_harness.py', headingEn: 'Genuinely building a mixed text/file/data message, and genuinely rejecting an unsupported Part type', headingKn: 'ಒಂದೂ ಮಿಶ್ರ text/file/data message ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸುವುದೂ',
      descEn: 'An A2A Message is not one flattened string. text carries natural-language intent, file carries a document payload, data carries machine-readable configuration -- each preserved as a distinct typed Part.',
      descKn: 'ಒಂದೂ A2A Message ಒಂದೂ ಚಪ್ಪಟೆಯಾದ string ಅಲ್ಲ. text ಸ್ವಾಭಾವಿಕ-ಭಾಷೆಯ ಉದ್ದೇಶ ಸಾಗಿಸುತ್ತದೆ, file ಒಂದೂ document payload ಸಾಗಿಸುತ್ತದೆ, data ಯಂತ್ರ-ಓದಬಹುದಾದ configuration ಸಾಗಿಸುತ್ತದೆ.',
      code: "def build_message(role, parts):\n    for part in parts:\n        if part[\"type\"] not in (\"text\", \"file\", \"data\"):\n            raise ValueError(f\"unsupported part type: {part['type']}\")\n    return {\"role\": role, \"parts\": parts}\n\nmsg = build_message(\"user\", [\n    {\"type\": \"text\", \"text\": \"Summarize this paper.\"},\n    {\"type\": \"file\", \"file\": {\"name\": \"paper.pdf\", \"mimeType\": \"application/pdf\", \"bytes\": \"...\"}},\n    {\"type\": \"data\", \"data\": {\"targetLength\": \"3 paragraphs\"}},\n])\nprint(\"part types:\", [p[\"type\"] for p in msg[\"parts\"]])\n\ntry:\n    build_message(\"user\", [{\"type\": \"video\", \"video\": {}}])\nexcept ValueError as e:\n    print(\"genuinely rejected unsupported part type:\", e)" } },
    { type: 'output', data: { output: "part types: ['text', 'file', 'data']\ngenuinely rejected unsupported part type: unsupported part type: video" } },

    { type: 'heading', data: { textEn: 'Opacity: The Caller Sees the Contract, Not the Implementation', textKn: 'Opacity: Caller Contract ಅನ್ನೂ ನೋಡುತ್ತದೆ, Implementation ಅಲ್ಲ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'What Stays Hidden', headingKn: 'ಏನೂ ಗುಪ್ತವಾಗಿ ಉಳಿಯುತ್ತದೆ',
      bodyEn: 'The caller sees: Task identity, Task state, Messages intended for it, and Artifacts. It never sees: the remote agent\'s private reasoning, its prompts, its internal MCP tool calls, its retrieval or database operations, or its sub-agent routing. This is what lets independent organizations collaborate through A2A without exposing proprietary internals.',
      bodyKn: 'Caller ನೋಡುವುದೂ: Task identity, Task state, Messages, Artifacts. ಇದೂ ಎಂದಿಗೂ ನೋಡುವುದಿಲ್ಲ: remote agent ya ಖಾಸಗಿ reasoning, ಅದರ prompts, ಆಂತರಿಕ MCP tool calls.' } },

    { type: 'concept', data: { headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• MCP is agent-to-tool capability invocation; A2A is agent-to-agent task delegation -- they compose, they don\'t compete.\n• The five core objects are Agent Card, Skill, Task, Message, Part, Artifact.\n• We genuinely built skill discovery against an Agent Card and proved an unadvertised skill is rejected before any delegation happens.\n• We genuinely built a typed Message constructor and proved an unsupported Part type is rejected -- text/file/data are the three types this module covers.\n• A2A opacity means the caller sees the Task\'s public contract (state, messages, artifacts), never the remote agent\'s internal implementation.',
      bodyKn: '• MCP agent-to-tool capability invocation; A2A agent-to-agent task delegation.\n• ಐದೂ ಮುಖ್ಯ objects: Agent Card, Skill, Task, Message, Part, Artifact.\n• ಒಂದೂ Agent Card ವಿರುದ್ಧ skill discovery ಅನ್ನೂ ನಾವು ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ ಘೋಷಿಸದ skill ತಿರಸ್ಕರಿಸಲ್ಪಟ್ಟಿದೆ ಎಂದೂ ಸಾಬೀತುಪಡಿಸಿದ್ದೇವೆ.\n• ಒಂದೂ typed Message constructor ಅನ್ನೂ ನಾವು ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿದ್ದೇವೆ.\n• A2A opacity ಎಂದರೆ caller Task ya ಸಾರ್ವಜನಿಕ contract ಅನ್ನೂ ನೋಡುತ್ತದೆ, remote agent ya ಆಂತರಿಕ implementation ಅಲ್ಲ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'What is the strongest distinction between MCP and A2A?', qKn: 'MCP ಮತ್ತೂ A2A ನಡುವಿನ ಅತ್ಯಂತ ಬಲವಾದ ವ್ಯತ್ಯಾಸ ಏನೂ?',
        opts: ['MCP uses JSON while A2A uses Python', 'MCP is mainly agent-to-tool; A2A is agent-to-agent delegation', 'MCP supports files but A2A doesn\'t', 'A2A replaces MCP'],
        optsKn: ['MCP JSON ಬಳಸುತ್ತದೆ, A2A Python ಬಳಸುತ್ತದೆ', 'MCP ಪ್ರಧಾನವಾಗಿ agent-to-tool; A2A agent-to-agent delegation', 'MCP files ಬೆಂಬಲಿಸುತ್ತದೆ ಆದರೆ A2A ಇಲ್ಲ', 'A2A MCP ಅನ್ನೂ ಬದಲಾಯಿಸುತ್ತದೆ'],
        correct: 1 },
      { q: 'What is the primary purpose of an Agent Card?', qKn: 'ಒಂದೂ Agent Card ya ಪ್ರಾಥಮಿಕ ಉದ್ದೇಶ ಏನೂ?',
        opts: ['Store chain-of-thought', 'Store task results', 'Advertise agent identity, endpoint, skills and capabilities', 'Execute MCP tools'],
        optsKn: ['chain-of-thought ಸಂಗ್ರಹಿಸಿ', 'task results ಸಂಗ್ರಹಿಸಿ', 'agent identity, endpoint, skills, capabilities ಘೋಷಿಸಿ', 'MCP tools ಚಲಾಯಿಸಿ'],
        correct: 2 },
      { q: 'Which three Part types does this module cover?', qKn: 'ಈ module ಯಾವ ಮೂರೂ Part types ಒಳಗೊಂಡಿದೆ?',
        opts: ['prompt / result / error', 'string / integer / object', 'text / file / data', 'request / response / notification'],
        optsKn: ['prompt / result / error', 'string / integer / object', 'text / file / data', 'request / response / notification'],
        correct: 2 },
      { q: 'A caller requests a skill_id the target agent does not advertise in its Agent Card. What should discover_skill() do?', qKn: 'ಒಂದೂ caller target agent ya Agent Card ನಲ್ಲಿ ಘೋಷಿಸದ ಒಂದೂ skill_id ಕೋರುತ್ತದೆ. discover_skill() ಏನೂ ಮಾಡಬೇಕೂ?',
        opts: ['Silently return the first skill instead', 'Raise/reject before any delegation happens', 'Guess the closest matching skill', 'Delegate anyway and let the remote agent fail'],
        optsKn: ['ಮೌನವಾಗಿ ಮೊದಲ skill ಹಿಂತಿರುಗಿಸಿ', 'ಯಾವುದೇ delegation ಆಗುವ ಮೊದಲೂ ತಿರಸ್ಕರಿಸಿ', 'ಹತ್ತಿರದ ಹೊಂದಾಣಿಕೆಯ skill ಊಹಿಸಿ', 'ಏನೇ ಇರಲಿ delegate ಮಾಡಿ'],
        correct: 1 },
      { q: 'What does A2A opacity mean?', qKn: 'A2A opacity ಎಂದರೇನೂ?',
        opts: ['Tasks have no IDs', 'Messages are encrypted automatically', 'The caller sees task interaction/output without requiring visibility into the called agent\'s internal reasoning and implementation', 'Agent Cards cannot be discovered'],
        optsKn: ['Tasks ಗೆ IDs ಇಲ್ಲ', 'Messages ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಎನ್ಕ್ರಿಪ್ಟ್ ಆಗಿವೆ', 'Caller ಆಂತರಿಕ reasoning ನೋಡದೇ task interaction/output ನೋಡುತ್ತದೆ', 'Agent Cards discover ಮಾಡಲಾಗುವುದಿಲ್ಲ'],
        correct: 2 },
    ] } },
  ],
};
