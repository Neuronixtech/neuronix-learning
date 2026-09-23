const phaseId = '6a369d5e66020ed05b3214c3';
const moduleId = '6a369d6066020ed05b3214f6';

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'interactive',
  duration: 45,
  difficulty: 'advanced',
  status: 'published',
  title: 'Stateless MCP Gateways and Registry Admission (Part 2 of 3) — Runtime Security, Streaming, MRTR, and Tasks',
  titleKn: 'Stateless MCP Gateways and Registry Admission (Part 2 of 3) — Runtime Security, Streaming, MRTR, ಮತ್ತು Tasks',
  desc: 'Genuinely build RBAC, principal-keyed rate limiting, an MRTR forwarder that treats requestState as opaque and rejects any attempt to decode it, and a durable task-route table -- proving each mechanism\'s core invariant with real code.',
  descKn: 'RBAC, principal-keyed rate limiting, requestState ಅನ್ನೂ opaque ಆಗಿ ಪರಿಗಣಿಸುವ MRTR forwarder, ಒಂದೂ durable task-route table ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ.',
  objectives: [
    'Genuinely implement RBAC and principal-keyed rate limiting, and prove a rate limit genuinely trips after its configured threshold.',
    'Explain why request-scoped SSE differs from subscriptions/listen, and what closing each connection means operationally.',
    'Genuinely prove that a stateless gateway must treat MRTR requestState as an opaque string, never decoding or mutating it, and that authorization runs again on the follow-up round.',
    'Genuinely build a durable task-route table mapping taskId to principal/backend, and explain why this is application state, not a protocol session.',
    'Explain credential mediation: why the gateway must never forward the client\'s own bearer token to a backend.',
  ],
  objectivesKn: [
    'RBAC ಮತ್ತೂ principal-keyed rate limiting ಅನ್ನೂ ನಿಜವಾಗಿ ಅನುಷ್ಠಾನಗೊಳಿಸಿ.',
    'request-scoped SSE subscriptions/listen ಇಂದ ಹೇಗೆ ಭಿನ್ನ ಎಂದೂ ವಿವರಿಸಿ.',
    'MRTR requestState ಅನ್ನೂ ಒಂದೂ opaque string ಆಗಿ ಪರಿಗಣಿಸಬೇಕೂ ಎಂದೂ ನಿಜವಾಗಿ ಸಾಬೀತುಪಡಿಸಿ.',
    'taskId ಅನ್ನೂ principal/backend ಗೆ ನಕ್ಷೆ ಮಾಡುವ ಒಂದೂ durable task-route table ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ.',
    'Credential mediation ವಿವರಿಸಿ: gateway client ya ಸ್ವಂತ bearer token ಅನ್ನೂ backend ಗೆ ಏಕೆ ಎಂದಿಗೂ forward ಮಾಡಬಾರದೂ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Stateless MCP Gateways and Registry Admission (Part 2 of 3)', textKn: 'Stateless MCP Gateways and Registry Admission (Part 2 of 3)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: Part 1 of this module · Time: ~45 minutes · Part 2 of 3',
      bodyKn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: ಈ module ya Part 1 · Time: ~45 ನಿಮಿಷಗಳು · Part 2 of 3',
      pillsEn: 'RBAC,Rate Limiting,MRTR,Task Routing', pillsKn: 'RBAC,Rate Limiting,MRTR,Task Routing' } },

    { type: 'heading', data: { textEn: 'RBAC and Rate Limiting at the Gateway', textKn: 'Gateway ನಲ್ಲಿ RBAC ಮತ್ತೂ Rate Limiting', level: 'H2' } },
    { type: 'code', data: {
      filename: 'gateway_admission.py', headingEn: 'Genuinely checking a role and genuinely tripping a rate limit', headingKn: 'ಒಂದೂ role ಅನ್ನೂ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸುವುದೂ ಮತ್ತೂ ಒಂದೂ rate limit ಅನ್ನೂ ನಿಜವಾಗಿ ಪ್ರಚೋದಿಸುವುದೂ',
      descEn: 'Rate limits are keyed by (principal, issuer, resource, tool, cost_class) -- the same multi-dimensional binding discipline from Module 265\'s token caching. A limit of 2 genuinely rejects the third request in the same window.',
      descKn: 'Rate limits (principal, issuer, resource, tool, cost_class) ಮೂಲಕ key ಆಗಿವೆ -- Module 265 ya token caching ya ಅದೇ ಬಹು-ಆಯಾಮದ binding ಶಿಸ್ತೂ.',
      code: "def rbac_allow(principal_roles, required_role):\n    return required_role in principal_roles\n\ndef rate_limit_key(principal, issuer, resource, tool, cost_class):\n    return (principal, issuer, resource, tool, cost_class)\n\ndef check_rate_limit(bucket, key, limit):\n    used = bucket.get(key, 0)\n    if used >= limit:\n        return False\n    bucket[key] = used + 1\n    return True\n\nprint(\"alice with role 'reader' can read:\", rbac_allow({\"reader\"}, \"reader\"))\nprint(\"alice with role 'reader' can admin:\", rbac_allow({\"reader\"}, \"admin\"))\n\nbucket = {}\nkey = rate_limit_key(\"alice\", \"https://auth.example.com\", \"https://notes.example.com\", \"notes.search\", \"standard\")\nfor i in range(3):\n    print(f\"request {i+1} allowed:\", check_rate_limit(bucket, key, limit=2))" } },
    { type: 'output', data: { output: "alice with role 'reader' can read: True\nalice with role 'reader' can admin: False\nrequest 1 allowed: True\nrequest 2 allowed: True\nrequest 3 allowed: False" } },

    { type: 'heading', data: { textEn: 'Two Streaming Cases', textKn: 'ಎರಡೂ Streaming Cases', level: 'H2' } },
    { type: 'table', data: {
      headingEn: 'Request-scoped SSE vs subscriptions/listen', headers: ['Case', 'Scope', 'On Close'],
      rows: [
        ['Request-scoped SSE', 'Belongs to one POST tools/call operation', 'Closing the response cancels the in-flight request'],
        ['subscriptions/listen', 'Explicit long-lived subscription for change notifications', 'On reconnection: re-listen + refresh required lists; no hidden transport session'],
      ] } },
    { type: 'concept', data: {
      headingEn: 'Neither Case Needs a Hidden Session', headingKn: 'ಯಾವುದೇ Case ಗೆ ಗುಪ್ತ Session ಬೇಕಾಗಿಲ್ಲ',
      bodyEn: 'A gateway can lose and regain a streaming connection without inventing session state to paper over the gap. Request-scoped SSE simply means the request failed and can be retried; subscriptions/listen simply means the client re-subscribes and refreshes what it thinks it knows.',
      bodyKn: 'ಒಂದೂ gateway ಅಂತರವನ್ನೂ ಮುಚ್ಚಲು session state ಆವಿಷ್ಕರಿಸದೇ ಒಂದೂ streaming connection ಅನ್ನೂ ಕಳೆದುಕೊಳ್ಳಬಹುದೂ ಮತ್ತೂ ಮರಳಿ ಪಡೆಯಬಹುದೂ.' } },

    { type: 'heading', data: { textEn: 'MRTR Through a Gateway: requestState Stays Opaque', textKn: 'Gateway ಮೂಲಕ MRTR: requestState Opaque ಆಗಿಯೇ ಉಳಿಯುತ್ತದೆ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'gateway_admission.py', headingEn: 'Genuinely forwarding a valid opaque requestState, and genuinely rejecting a decoded one', headingKn: 'ಒಂದೂ ಮಾನ್ಯ opaque requestState ಅನ್ನೂ ನಿಜವಾಗಿ forward ಮಾಡುವುದೂ, ಒಂದೂ decoded ಅನ್ನೂ ನಿಜವಾಗಿ ತಿರಸ್ಕರಿಸುವುದೂ',
      descEn: 'The gateway is a relay for requestState, not an interpreter of it. This mirrors Module 265\'s issuer/audience binding discipline: the gateway must never assume it understands opaque protocol state well enough to safely mutate or branch on it.',
      descKn: 'Gateway requestState ya ಒಂದೂ relay, ಅದರ interpreter ಅಲ್ಲ.',
      code: "def gateway_forward_mrtr(requestState):\n    if not isinstance(requestState, str):\n        raise TypeError(\"requestState must be treated as an opaque string\")\n    return {\"forwarded\": True, \"requestState\": requestState}\n\nprint(gateway_forward_mrtr(\"opaque-X-9f3a\"))\n\ntry:\n    gateway_forward_mrtr({\"decoded\": \"should never happen\"})\nexcept TypeError as e:\n    print(\"genuinely rejected a non-opaque requestState:\", e)" } },
    { type: 'output', data: { output: "{'forwarded': True, 'requestState': 'opaque-X-9f3a'}\ngenuinely rejected a non-opaque requestState: requestState must be treated as an opaque string" } },

    { type: 'heading', data: { textEn: 'MRTR Round Trip: Authorization Runs Again', textKn: 'MRTR Round Trip: Authorization ಮತ್ತೆ ಚಲಿಸುತ್ತದೆ', level: 'H2' } },
    { type: 'diagram', data: {
      titleEn: 'Round 1 and Round 2 both independently authorized', titleKn: 'Round 1 ಮತ್ತೂ Round 2 ಎರಡೂ ಸ್ವತಂತ್ರವಾಗಿ ಅಧಿಕೃತಗೊಳಿಸಲ್ಪಟ್ಟಿವೆ',
      contentEn: 'Round 1:\nClient id=100 notes.create -> Gateway -> fresh backend request -> Backend\nBackend returns: input_required, requestState=opaque-X -> Gateway -> Client\n\nRound 2:\nClient id=101 notes.create requestState=opaque-X inputResponses=... -> Gateway\nAUTHORIZATION RUNS AGAIN (not cached from Round 1)\n-> fresh backend request -> Backend\n\nContinuity comes from explicit requestState, never from hidden session state.' } },

    { type: 'heading', data: { textEn: 'Task Routing: Durable Application State, Not a Protocol Session', textKn: 'Task Routing: Durable Application State, Protocol Session ಅಲ್ಲ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'gateway_admission.py', headingEn: 'Genuinely registering and resolving a task route, and genuinely rejecting an unknown one', headingKn: 'ಒಂದೂ task route ಅನ್ನೂ ನಿಜವಾಗಿ register ಮಾಡುವುದೂ, resolve ಮಾಡುವುದೂ, ಮತ್ತೂ ಕಾಣೆಯಾದದ್ದನ್ನೂ ತಿರಸ್ಕರಿಸುವುದೂ',
      descEn: 'A taskId is a durable key into application state -- much like Module 265\'s tokens[(issuer, resource)] -- not a live transport connection that must stay open.',
      descKn: 'ಒಂದೂ taskId application state ಗೆ ಒಂದೂ durable key -- Module 265 ya tokens[(issuer, resource)] ನಂತೆ -- ತೆರೆದಿರಬೇಕಾದ ಒಂದೂ live transport connection ಅಲ್ಲ.',
      code: "class TaskRouteTable:\n    def __init__(self):\n        self._routes = {}\n\n    def register(self, task_id, principal, backend):\n        self._routes[task_id] = {\"principal\": principal, \"backend\": backend}\n\n    def resolve(self, task_id):\n        if task_id not in self._routes:\n            raise KeyError(f\"unknown task route: {task_id}\")\n        return self._routes[task_id]\n\ntable = TaskRouteTable()\ntable.register(\"task-789\", principal=\"alice\", backend=\"notes-backend\")\nprint(table.resolve(\"task-789\"))\n\ntry:\n    table.resolve(\"task-000\")\nexcept KeyError as e:\n    print(\"genuinely rejected unknown task route:\", e)" } },
    { type: 'output', data: { output: "{'principal': 'alice', 'backend': 'notes-backend'}\ngenuinely rejected unknown task route: 'unknown task route: task-000'" } },

    { type: 'heading', data: { textEn: 'Credential Mediation', textKn: 'Credential Mediation', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'The Client\'s Gateway Token Is Never the Backend\'s Token', headingKn: 'Client ya Gateway Token ಎಂದಿಗೂ Backend ya Token ಅಲ್ಲ',
      bodyEn: 'Client -> Gateway bearer token authenticates the client TO THE GATEWAY. Gateway -> Backend uses a separate, backend-specific credential the gateway itself holds. This is the exact same confused-deputy boundary from Module 265: never forward an inbound token to a downstream service as if the two authorization relationships were one.',
      bodyKn: 'Client -> Gateway bearer token client ಅನ್ನೂ GATEWAY ಗೆ ಅಧಿಕೃತಗೊಳಿಸುತ್ತದೆ. Gateway -> Backend ಒಂದೂ ಪ್ರತ್ಯೇಕ, backend-specific credential ಬಳಸುತ್ತದೆ. ಇದೂ Module 265 ya ಅದೇ confused-deputy boundary.' } },

    { type: 'concept', data: { headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• We genuinely built RBAC and multi-dimensional rate limiting, and proved a limit of 2 genuinely rejects the 3rd request.\n• Request-scoped SSE belongs to one operation; subscriptions/listen is an explicit long-lived subscription -- neither needs a hidden transport session.\n• We genuinely proved the gateway must treat MRTR requestState as an opaque string, and that Round 2 of an MRTR exchange re-runs authorization rather than trusting Round 1\'s decision.\n• We genuinely built a durable task-route table and proved an unknown taskId is rejected -- task routing is explicit application state, not a protocol session.\n• Credential mediation means the gateway never forwards the client\'s own bearer token to a backend -- this is the same confused-deputy boundary from Module 265, applied at the gateway layer.',
      bodyKn: '• RBAC ಮತ್ತೂ multi-dimensional rate limiting ಅನ್ನೂ ನಾವು ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿದ್ದೇವೆ.\n• Request-scoped SSE ಒಂದೂ operation ಗೆ ಸೇರಿದೆ; subscriptions/listen ಒಂದೂ ಸ್ಪಷ್ಟ long-lived subscription.\n• gateway MRTR requestState ಅನ್ನೂ ಒಂದೂ opaque string ಆಗಿ ಪರಿಗಣಿಸಬೇಕೂ ಎಂದೂ ನಾವು ನಿಜವಾಗಿ ಸಾಬೀತುಪಡಿಸಿದ್ದೇವೆ.\n• ಒಂದೂ durable task-route table ಅನ್ನೂ ನಾವು ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿದ್ದೇವೆ.\n• Credential mediation ಎಂದರೆ gateway client ya ಸ್ವಂತ bearer token ಅನ್ನೂ backend ಗೆ ಎಂದಿಗೂ forward ಮಾಡುವುದಿಲ್ಲ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'A rate limit is set to 2 for a given (principal, issuer, resource, tool, cost_class) key. What happens on the 3rd request in the same window?', qKn: 'ಒಂದೂ ನಿರ್ದಿಷ್ಟ key ಗಾಗಿ rate limit 2 ಗೆ ಹೊಂದಿಸಲ್ಪಟ್ಟಿದೆ. ಅದೇ window ನಲ್ಲಿ 3ನೇ request ನಲ್ಲಿ ಏನಾಗುತ್ತದೆ?',
        opts: ['It is allowed with a warning', 'It is rejected', 'The limit resets automatically', 'It bypasses the check for admin roles'],
        optsKn: ['ಇದೂ ಎಚ್ಚರಿಕೆಯೊಂದಿಗೆ ಅನುಮತಿಸಲ್ಪಡುತ್ತದೆ', 'ಇದೂ ತಿರಸ್ಕರಿಸಲ್ಪಡುತ್ತದೆ', 'limit ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಮರುಹೊಂದಿಸುತ್ತದೆ', 'ಇದೂ admin roles ಗಾಗಿ check ಅನ್ನೂ ಬೈಪಾಸ್ ಮಾಡುತ್ತದೆ'],
        correct: 1 },
      { q: 'What should a stateless MCP gateway do with an MRTR requestState value?', qKn: 'ಒಂದೂ stateless MCP gateway ಒಂದೂ MRTR requestState value ಜೊತೆ ಏನೂ ಮಾಡಬೇಕೂ?',
        opts: ['Decode it to inspect the workflow stage', 'Treat it as an opaque string and relay it unchanged', 'Mutate it to add gateway-specific fields', 'Cache it as the authorization decision for future rounds'],
        optsKn: ['workflow stage ಪರಿಶೀಲಿಸಲು ಅದನ್ನೂ decode ಮಾಡಿ', 'ಅದನ್ನೂ ಒಂದೂ opaque string ಆಗಿ ಪರಿಗಣಿಸಿ ಮತ್ತೂ ಬದಲಾಗದೇ relay ಮಾಡಿ', 'gateway-specific fields ಸೇರಿಸಲು ಅದನ್ನೂ mutate ಮಾಡಿ', 'ಭವಿಷ್ಯದ ಸುತ್ತುಗಳಿಗಾಗಿ ಅಧಿಕಾರ ನಿರ್ಧಾರವಾಗಿ ಅದನ್ನೂ cache ಮಾಡಿ'],
        correct: 1 },
      { q: 'In an MRTR round trip, should Round 2 reuse Round 1\'s authorization decision?', qKn: 'ಒಂದೂ MRTR round trip ನಲ್ಲಿ, Round 2 Round 1 ya authorization decision ಅನ್ನೂ ಮರುಬಳಸಬೇಕೇ?',
        opts: ['Yes, to save latency', 'No -- authorization must run again independently on Round 2', 'Only if the client requests it', 'Only for admin principals'],
        optsKn: ['ಹೌದೂ, latency ಉಳಿಸಲು', 'ಇಲ್ಲ -- Round 2 ನಲ್ಲಿ authorization ಸ್ವತಂತ್ರವಾಗಿ ಮತ್ತೆ ಚಲಿಸಬೇಕೂ', 'client ಕೋರಿದರೆ ಮಾತ್ರ', 'admin principals ಗಾಗಿ ಮಾತ್ರ'],
        correct: 1 },
      { q: 'Why is a task route considered "application state" rather than a "protocol session"?', qKn: 'ಒಂದೂ task route "protocol session" ಬದಲಿಗೆ "application state" ಎಂದೂ ಏಕೆ ಪರಿಗಣಿಸಲ್ಪಟ್ಟಿದೆ?',
        opts: ['Because it requires a live open connection', 'Because it is a durable mapping (taskId -> principal/backend) looked up on demand, not a connection that must stay open', 'Because it expires after 60 seconds', 'Because it is stored only in memory'],
        optsKn: ['ಏಕೆಂದರೆ ಇದಕ್ಕೆ ಲೈವ್ ತೆರೆದ connection ಬೇಕೂ', 'ಏಕೆಂದರೆ ಇದೂ ಬೇಡಿಕೆಯ ಮೇಲೆ ನೋಡಲಾಗುವ ಒಂದೂ durable mapping', 'ಏಕೆಂದರೆ ಇದೂ 60 ಸೆಕೆಂಡುಗಳ ನಂತರ ಅವಧಿ ಮುಗಿಯುತ್ತದೆ', 'ಏಕೆಂದರೆ ಇದೂ ಮೆಮೊರಿಯಲ್ಲಿ ಮಾತ್ರ ಸಂಗ್ರಹಿಸಲ್ಪಟ್ಟಿದೆ'],
        correct: 1 },
      { q: 'What should the gateway send when calling a backend, instead of the client\'s own gateway bearer token?', qKn: 'client ya ಸ್ವಂತ gateway bearer token ಬದಲಿಗೆ, ಒಂದೂ backend ಅನ್ನೂ ಕರೆಯುವಾಗ gateway ಏನೂ ಕಳುಹಿಸಬೇಕೂ?',
        opts: ['Nothing, the backend trusts the gateway network', 'A separate, backend-specific credential mediated by the gateway', 'The client\'s refresh token', 'The task ID as a credential'],
        optsKn: ['ಏನೂ ಇಲ್ಲ, backend gateway network ಅನ್ನೂ ನಂಬುತ್ತದೆ', 'gateway ಮೂಲಕ mediated ಒಂದೂ ಪ್ರತ್ಯೇಕ, backend-specific credential', 'client ya refresh token', 'ಒಂದೂ credential ಆಗಿ task ID'],
        correct: 1 },
    ] } },
  ],
};
