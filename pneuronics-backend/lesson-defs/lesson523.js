const phaseId = '6a369d5e66020ed05b3214c3'; // Phase 16: Tools and Protocols
const moduleId = '6a369d5f66020ed05b3214ed'; // Module 263: MCP Apps

module.exports = {
  phaseId,
  moduleId,
  order: 2,
  type: 'interactive',
  duration: 45,
  difficulty: 'advanced',
  status: 'published',
  title: 'MCP Apps on the Stateless Protocol (Part 3 of 3) — The Bridge, Host Authority, and Revocation',
  titleKn: 'MCP Apps on the Stateless Protocol (Part 3 of 3) — Bridge, Host Authority, Revocation',
  desc: 'Genuinely build a host-side bridge message handler that rejects untrusted origins, missing capabilities, and revoked permissions -- proving a valid message never equals authority, and that authorization is checked at action time, not just at ui/initialize.',
  descKn: 'ಅವಿಶ್ವಾಸಾರ್ಹ origins, ಕಾಣೆಯಾದ capabilities, revoked permissions ಅನ್ನೂ ತಿರಸ್ಕರಿಸುವ ಒಂದೂ host-side bridge message handler ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ.',
  objectives: [
    "Explain why ui/initialize belongs only to the local iframe-to-host bridge and never recreates the (removed) MCP core session model.",
    'Trace the correct bridge lifecycle: ui/initialize -> hostCapabilities+hostContext -> ui/notifications/initialized -> bridge ready.',
    'Genuinely build and test a host message handler that validates event origin BEFORE processing any bridge message.',
    'Genuinely prove that a valid, well-formed bridge message does not equal authority -- capability, current authorization, and origin must ALL agree.',
    'Genuinely prove that permission revoked after ui/initialize is caught at action time, not assumed to still hold from initialization.',
  ],
  objectivesKn: [
    'ui/initialize ಏಕೆ ಕೇವಲ local iframe-to-host bridge ಗೆ ಸೇರಿದೆ ಮತ್ತು (ತೆಗೆದುಹಾಕಲಾದ) MCP core session ಮಾದರಿ ಎಂದಿಗೂ ಮರುಸೃಷ್ಟಿಸುವುದಿಲ್ಲ ಎಂದೂ ವಿವರಿಸಿ.',
    'ಸರಿಯಾದ bridge lifecycle ಪತ್ತೆಹಚ್ಚಿ.',
    'ಬೈಂಡ್ message ಪ್ರಕ್ರಿಯೆಗೊಳಿಸುವ ಮೊದಲು event origin ಮೌಲ್ಯೀಕರಿಸುವ ಒಂದೂ host message handler ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ ಪರೀಕ್ಷಿಸಿ.',
    'ಒಂದೂ ಮಾನ್ಯ, ಸರಿಯಾಗಿ ರೂಪುಗೊಂಡ bridge message authority ಗೆ ಸಮನಾಗಿಲ್ಲ ಎಂದೂ ನಿಜವಾಗಿ ಸಾಬೀತುಪಡಿಸಿ.',
    'ui/initialize ನಂತರ revoke ಆದ permission action time ನಲ್ಲಿ ಹಿಡಿಯಲ್ಪಡುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ಸಾಬೀತುಪಡಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'MCP Apps on the Stateless Protocol (Part 3 of 3)', textKn: 'MCP Apps on the Stateless Protocol (Part 3 of 3)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: Parts 1-2 · Time: ~45 minutes · Part 3 of 3',
      bodyKn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: Parts 1-2 · Time: ~45 ನಿಮಿಷಗಳು · Part 3 of 3',
      pillsEn: 'Apps Bridge,Origin Validation,Host Authority,Revocation', pillsKn: 'Apps Bridge,Origin Validation,Host Authority,Revocation' } },

    { type: 'heading', data: { textEn: "Don't Confuse ui/initialize With MCP Core Initialization", textKn: 'ui/initialize ಅನ್ನೂ MCP Core Initialization ಜೊತೆ ಗೊಂದಲಗೊಳಿಸಬೇಡಿ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Two Completely Separate Lifecycles', headingKn: 'ಎರಡೂ ಸಂಪೂರ್ಣ ಪ್ರತ್ಯೇಕ Lifecycles',
      bodyEn: 'The modern MCP core has no initialize/notifications/initialized connection lifecycle -- every core request carries its own protocolVersion and clientCapabilities. But MCP Apps still has ui/initialize and ui/notifications/initialized -- these belong to the LOCAL iframe-to-host postMessage bridge, and never recreate a server protocol session.',
      bodyKn: 'ಆಧುನಿಕ MCP core ಗೆ initialize/notifications/initialized connection lifecycle ಇಲ್ಲ. ಆದರೆ MCP Apps ಗೆ ಇನ್ನೂ ui/initialize ಇದೆ -- ಇವೂ LOCAL iframe-to-host bridge ಗೆ ಸೇರಿವೆ, ಎಂದಿಗೂ ಒಂದೂ server protocol session ಮರುಸೃಷ್ಟಿಸುವುದಿಲ್ಲ.' } },

    { type: 'diagram', data: { titleEn: 'The Correct Bridge Lifecycle', titleKn: 'ಸರಿಯಾದ Bridge Lifecycle',
      contentEn: 'View --ui/initialize--> Host --hostCapabilities+hostContext--> View --ui/notifications/initialized--> Host (bridge ready, host may now send messages)',
      contentKn: 'View --ui/initialize--> Host --hostCapabilities+hostContext--> View --ui/notifications/initialized--> Host (bridge ready)' } },

    { type: 'concept', data: {
      headingEn: 'The Host Must Wait for the Initialized Notification', headingKn: 'Host Initialized Notification ಗಾಗಿ ಕಾಯಬೇಕು',
      bodyEn: 'If the host sends a message before the View has said it is ready, the View\'s listener might not exist yet and the message is lost. This is why the lifecycle is strictly ordered: ui/initialize -> host response -> ui/notifications/initialized -> only THEN does the host begin sending messages.',
      bodyKn: 'View ಸಿದ್ಧವಾಗಿದೆ ಎಂದೂ ಹೇಳುವ ಮೊದಲು host ಒಂದೂ message ಕಳುಹಿಸಿದರೆ, View ya listener ಇನ್ನೂ ಅಸ್ತಿತ್ವದಲ್ಲಿಲ್ಲದಿರಬಹುದು ಮತ್ತು message ಕಳೆದುಹೋಗುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Genuinely Validating Bridge Message Origin', textKn: 'Bridge Message Origin ಅನ್ನೂ ನಿಜವಾಗಿ ಮೌಲ್ಯೀಕರಿಸುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'mcp_apps_bridge.py', headingEn: 'Genuine origin check: the FIRST line of defense', headingKn: 'ನಿಜ origin check: ಮೊದಲ ರಕ್ಷಣಾ ಸಾಲು',
      descEn: 'postMessage(message, "*") is dangerous -- it removes the target-origin restriction. Here we build the equivalent server-side host handler and genuinely reject a message claiming to come from a different origin, exactly mirroring the browser\'s event.origin check.',
      descKn: 'postMessage(message, "*") ಅಪಾಯಕಾರಿ -- ಇದೂ target-origin ನಿರ್ಬಂಧ ತೆಗೆದುಹಾಕುತ್ತದೆ. ನಾವು ಸಮಾನ server-side host handler ನಿರ್ಮಿಸಿ ಬೇರೆ origin ಇಂದ ಬಂದಂತೆ ಹೇಳಿಕೊಳ್ಳುವ ಒಂದೂ message ಅನ್ನೂ ನಿಜವಾಗಿ ತಿರಸ್ಕರಿಸುತ್ತೇವೆ.',
      code: "HOST_ORIGIN = \"https://host.example\"\n\ndef handle_bridge_message(event_origin, message, current_user, host_capabilities, authorize_fn):\n    if event_origin != HOST_ORIGIN:\n        return {\"error\": \"rejected: untrusted origin \" + event_origin}\n\n    if message.get(\"method\") == \"tools/call\":\n        name = message[\"params\"][\"name\"]\n        arguments = message[\"params\"][\"arguments\"]\n        if not host_capabilities.get(\"tools\", {}).get(\"call\"):\n            return {\"error\": \"rejected: capability unavailable\"}\n        if not authorize_fn(current_user, name, arguments):\n            return {\"error\": \"rejected: action not permitted\"}\n        return {\"ok\": True, \"freshRequest\": {\"jsonrpc\": \"2.0\", \"id\": \"fresh-900\",\n                \"method\": \"tools/call\", \"params\": {\"name\": name, \"arguments\": arguments}}}\n    return {\"error\": \"rejected: unknown method\"}\n\nmsg = {\"method\": \"tools/call\", \"params\": {\"name\": \"notes_timeline\", \"arguments\": {}}}\nhost_caps = {\"tools\": {\"call\": True}}\nPERMISSIONS = {\"alice\": True}\ndef authorize(user, tool, arguments): return PERMISSIONS.get(user, False)\n\nprint(\"valid message:\", handle_bridge_message(HOST_ORIGIN, msg, \"alice\", host_caps, authorize))\nprint(\"wrong origin:\", handle_bridge_message(\"https://attacker.example\", msg, \"alice\", host_caps, authorize))" } },
    { type: 'output', data: { output: "valid message: {'ok': True, 'freshRequest': {'jsonrpc': '2.0', 'id': 'fresh-900', 'method': 'tools/call', 'params': {'name': 'notes_timeline', 'arguments': {}}}}\nwrong origin: {'error': 'rejected: untrusted origin https://attacker.example'}" } },

    { type: 'heading', data: { textEn: 'A Valid Message Is Not Authority', textKn: 'ಒಂದೂ Valid Message Authority ಅಲ್ಲ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: "Intent Is Not Authority Either", headingKn: 'Intent ಸಹ Authority ಅಲ್ಲ',
      bodyEn: 'A button click and a valid bridge message express intent; neither grants authority. The host still checks: current user? currently allowed? correct arguments? Below we genuinely show the same valid message rejected purely because the CAPABILITY was declared unavailable -- origin and message shape were both fine.',
      bodyKn: 'ಒಂದೂ button click ಮತ್ತು ಒಂದೂ ಮಾನ್ಯ bridge message intent ವ್ಯಕ್ತಪಡಿಸುತ್ತವೆ; ಎರಡೂ authority ನೀಡುವುದಿಲ್ಲ. host ಇನ್ನೂ ಪರಿಶೀಲಿಸುತ್ತದೆ: ಪ್ರಸ್ತುತ user? ಪ್ರಸ್ತುತ ಅನುಮತಿಸಲ್ಪಟ್ಟಿದೆ?' } },

    { type: 'code', data: {
      filename: 'mcp_apps_bridge.py', headingEn: 'Genuine rejection: valid message, but capability unavailable', headingKn: 'ನಿಜ ತಿರಸ್ಕಾರ: ಮಾನ್ಯ message, ಆದರೆ capability ಲಭ್ಯವಿಲ್ಲ',
      descEn: '', descKn: '',
      code: "no_call_caps = {\"tools\": {\"call\": False}}\nprint(handle_bridge_message(HOST_ORIGIN, msg, \"alice\", no_call_caps, authorize))" } },
    { type: 'output', data: { output: "{'error': 'rejected: capability unavailable'}" } },

    { type: 'heading', data: { textEn: 'Permission Revoked After ui/initialize Must Still Be Caught', textKn: 'ui/initialize ನಂತರ Revoke ಆದ Permission ಇನ್ನೂ ಹಿಡಿಯಲ್ಪಡಬೇಕು', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Never Assume Permission Allowed at Init Time Stays Allowed', headingKn: 'Init Time ನಲ್ಲಿ ಅನುಮತಿಸಿದ Permission ಇನ್ನೂ ಅನುಮತಿಸಲ್ಪಟ್ಟಿದೆ ಎಂದೂ ಎಂದಿಗೂ ಊಹಿಸಬೇಡಿ',
      bodyEn: 'A user\'s policy can change while the App is still open. We genuinely revoke alice\'s permission mid-session (after her first successful call) and confirm the exact same message now gets rejected -- proving authorization is checked at ACTION time, not just once at ui/initialize.',
      bodyKn: 'App ಇನ್ನೂ ತೆರೆದಿರುವಾಗ ಒಂದೂ user ya policy ಬದಲಾಗಬಹುದು. ನಾವು ನಿಜವಾಗಿ alice ya permission ಅನ್ನೂ session ya ಮಧ್ಯದಲ್ಲಿ revoke ಮಾಡಿ ಅದೇ message ಈಗ ತಿರಸ್ಕರಿಸಲ್ಪಡುತ್ತದೆ ಎಂದೂ ಖಚಿತಪಡಿಸುತ್ತೇವೆ.' } },

    { type: 'code', data: {
      filename: 'mcp_apps_bridge.py', headingEn: 'Genuine mid-session revocation, caught at action time', headingKn: 'ನಿಜ mid-session revocation, action time ನಲ್ಲಿ ಹಿಡಿಯಲ್ಪಟ್ಟಿದೆ',
      descEn: '', descKn: '',
      code: "print(\"Before revocation:\", handle_bridge_message(HOST_ORIGIN, msg, \"alice\", host_caps, authorize))\nPERMISSIONS[\"alice\"] = False   # policy changes while the App is still open\nprint(\"After revocation: \", handle_bridge_message(HOST_ORIGIN, msg, \"alice\", host_caps, authorize))" } },
    { type: 'output', data: { output: "Before revocation: {'ok': True, 'freshRequest': {'jsonrpc': '2.0', 'id': 'fresh-900', 'method': 'tools/call', 'params': {'name': 'notes_timeline', 'arguments': {}}}}\nAfter revocation:  {'error': 'rejected: action not permitted'}" } },

    { type: 'concept', data: {
      headingEn: 'Bridged Calls Become Fresh, Self-Contained MCP Requests', headingKn: 'Bridged Calls ಹೊಸ, Self-Contained MCP Requests ಆಗುತ್ತವೆ',
      bodyEn: 'Notice the approved bridge message produces a freshRequest with its own new JSON-RPC id and full params -- it does not reuse any hidden session. Server state does NOT rely on iframe bridge state: server state, bridge state, and view state remain three genuinely separate things.',
      bodyKn: 'ಅನುಮೋದಿತ bridge message ಅದರ ಸ್ವಂತ ಹೊಸ JSON-RPC id ಮತ್ತು ಪೂರ್ಣ params ಜೊತೆ ಒಂದೂ freshRequest ಉತ್ಪಾದಿಸುತ್ತದೆ ಎಂದೂ ಗಮನಿಸಿ -- ಇದೂ ಯಾವುದೇ hidden session ಮರುಬಳಸುವುದಿಲ್ಲ.' } },

    { type: 'heading', data: { textEn: 'Text Fallback for Non-Apps Hosts', textKn: 'Non-Apps Hosts ಗಾಗಿ Text Fallback', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Tool Completion Cannot Depend on an Iframe Existing', headingKn: 'Tool Completion ಒಂದೂ Iframe ಅಸ್ತಿತ್ವದಲ್ಲಿದೆ ಎಂಬುದರ ಮೇಲೆ ಅವಲಂಬಿಸಬಾರದೂ',
      bodyEn: 'Recall from Part 1: tools/list without Apps support strips _meta.ui but the tool result (content + structuredContent) is identical either way. Rendering is a host concern, never a condition for the tool\'s own semantic success.',
      bodyKn: 'Part 1 ಇಂದ ನೆನಪಿಸಿ: Apps support ಇಲ್ಲದೆ tools/list _meta.ui ತೆಗೆಯುತ್ತದೆ ಆದರೆ tool result ಒಂದೇ ಆಗಿ ಉಳಿಯುತ್ತದೆ. Rendering ಒಂದೂ host ಕಾಳಜಿ, tool ya ಸ್ವಂತ ಶಬ್ದಾರ್ಥ ಯಶಸ್ಸಿಗೆ ಎಂದಿಗೂ ಒಂದೂ ಷರತ್ತು ಅಲ್ಲ.' } },

    { type: 'concept', data: { headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• ui/initialize belongs ONLY to the local iframe-to-host bridge and never recreates an MCP core session.\n• The bridge lifecycle is strictly ordered: ui/initialize -> hostCapabilities/hostContext -> ui/notifications/initialized -> THEN the host may send messages.\n• We genuinely built and tested a host message handler: wrong origin, missing capability, and revoked authorization are all genuinely rejected.\n• A valid, well-formed bridge message never equals authority -- capability, current authorization, and origin must all independently agree.\n• We genuinely proved permission revoked mid-session (after ui/initialize) is caught at action time, not assumed to persist from initialization.',
      bodyKn: '• ui/initialize ಕೇವಲ local iframe-to-host bridge ಗೆ ಸೇರಿದೆ, MCP core session ಎಂದಿಗೂ ಮರುಸೃಷ್ಟಿಸುವುದಿಲ್ಲ.\n• Bridge lifecycle ಕಟ್ಟುನಿಟ್ಟಾಗಿ ಕ್ರಮಬದ್ಧವಾಗಿದೆ.\n• ನಾವು ಒಂದೂ host message handler ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ ಪರೀಕ್ಷಿಸಿದ್ದೇವೆ.\n• ಒಂದೂ ಮಾನ್ಯ bridge message ಎಂದಿಗೂ authority ಗೆ ಸಮನಲ್ಲ.\n• mid-session revoke ಆದ permission action time ನಲ್ಲಿ ಹಿಡಿಯಲ್ಪಡುತ್ತದೆ ಎಂದೂ ನಾವು ನಿಜವಾಗಿ ಸಾಬೀತುಪಡಿಸಿದ್ದೇವೆ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'What does ui/initialize initialize?', qKn: 'ui/initialize ಏನೂ initialize ಮಾಡುತ್ತದೆ?',
        opts: ['The MCP server protocol session', 'OAuth authentication', 'The local Apps bridge between View and host', 'Streamable HTTP'],
        optsKn: ['MCP server protocol session', 'OAuth authentication', 'View ಮತ್ತು host ನಡುವಿನ local Apps bridge', 'Streamable HTTP'],
        correct: 2 },
      { q: 'When should the host begin sending normal host-to-View bridge messages?', qKn: 'host ಸಾಮಾನ್ಯ host-to-View bridge messages ಯಾವಾಗ ಕಳುಹಿಸಲು ಪ್ರಾರಂಭಿಸಬೇಕು?',
        opts: ['Immediately when the HTML downloads', 'After ui/notifications/initialized', 'After server/discover', 'Before ui/initialize'],
        optsKn: ['HTML download ಆದ ತಕ್ಷಣ', 'ui/notifications/initialized ನಂತರ', 'server/discover ನಂತರ', 'ui/initialize ಗಿಂತ ಮೊದಲು'],
        correct: 1 },
      { q: 'A View sends a valid tools/call bridge request. What should the host do?', qKn: 'ಒಂದೂ View ಒಂದೂ ಮಾನ್ಯ tools/call bridge request ಕಳುಹಿಸುತ್ತದೆ. host ಏನೂ ಮಾಡಬೇಕು?',
        opts: ['Always forward it', 'Trust it because the iframe is sandboxed', 'Validate current user, target, arguments, capability, and policy before acting', 'Give the iframe a bearer token'],
        optsKn: ['ಯಾವಾಗಲೂ ಫಾರ್ವರ್ಡ್ ಮಾಡಿ', 'iframe sandboxed ಆಗಿರುವುದರಿಂದ ನಂಬಿ', 'ಕ್ರಮ ಕೈಗೊಳ್ಳುವ ಮೊದಲು current user, target, arguments, capability, policy ಮೌಲ್ಯೀಕರಿಸಿ', 'iframe ಗೆ ಒಂದೂ bearer token ನೀಡಿ'],
        correct: 2 },
      { q: 'Why should permission be checked at action time?', qKn: 'permission action time ನಲ್ಲಿ ಏಕೆ ಪರಿಶೀಲಿಸಬೇಕು?',
        opts: ['JSON-RPC IDs may change', 'Authorization or capabilities may have been revoked since initialization', 'ui:// URIs expire immediately', 'tools/list cannot be cached'],
        optsKn: ['JSON-RPC IDs ಬದಲಾಗಬಹುದು', 'Authorization ಅಥವಾ capabilities initialization ಇಂದ revoke ಆಗಿರಬಹುದು', 'ui:// URIs ತಕ್ಷಣ ಮುಗಿಯುತ್ತವೆ', 'tools/list cache ಮಾಡಲಾಗುವುದಿಲ್ಲ'],
        correct: 1 },
      { q: 'What is the correct behavior for a host without Apps support?', qKn: 'Apps support ಇಲ್ಲದ ಒಂದೂ host ಗೆ ಸರಿಯಾದ ವರ್ತನೆ ಏನೂ?',
        opts: ['Fail all tools', 'Pretend it supports Apps', 'Keep useful text behavior while omitting UI binding', 'Automatically load the ui:// resource'],
        optsKn: ['ಎಲ್ಲಾ tools ವಿಫಲಗೊಳಿಸಿ', 'ಇದೂ Apps ಬೆಂಬಲಿಸುತ್ತದೆ ಎಂದೂ ನಟಿಸಿ', 'UI binding ಬಿಟ್ಟುಬಿಡುತ್ತಲೇ ಉಪಯುಕ್ತ text ವರ್ತನೆ ಇಡಿ', 'ಸ್ವಯಂಚಾಲಿತವಾಗಿ ui:// resource ಲೋಡ್ ಮಾಡಿ'],
        correct: 2 },
    ] } },
  ],
};
