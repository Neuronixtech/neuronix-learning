const phaseId = '6a369d5e66020ed05b3214c3';
const moduleId = '6a369d5f66020ed05b3214f3';

module.exports = {
  phaseId,
  moduleId,
  order: 2,
  type: 'interactive',
  duration: 40,
  difficulty: 'advanced',
  status: 'published',
  title: 'MCP Authorization: CIMD, Issuer Binding, PKCE, and Step-Up (Part 3 of 3) — Least Privilege, Attacks, and Full Code Flow',
  titleKn: 'MCP Authorization: CIMD, Issuer Binding, PKCE, and Step-Up (Part 3 of 3) — Least Privilege, Attacks, ಮತ್ತು Full Code Flow',
  desc: 'Tie discovery, PKCE, and audience binding together into one genuinely traced authorization flow, and distinguish three attacks that are easy to confuse -- audience replay, mix-up, and confused deputy -- by the exact boundary each one crosses.',
  descKn: 'Discovery, PKCE, audience binding ಅನ್ನೂ ಒಂದೂ ನಿಜ traced authorization flow ಆಗಿ ಒಟ್ಟುಗೂಡಿಸಿ, ಮತ್ತೂ ಮೂರೂ ಗೊಂದಲಮಯ attacks ಪ್ರತ್ಯೇಕಿಸಿ.',
  objectives: [
    'Distinguish audience replay (token for A used against B), mix-up (client confused about which authorization server it is talking to), and confused deputy (an MCP proxy misusing upstream authorization) by the exact boundary each crosses.',
    'Explain why registrations must be keyed by issuer and tokens by (issuer, resource), and genuinely demonstrate the collision each weaker cache key would allow.',
    'Genuinely trace a complete authorization flow end to end using the module\'s own verification code, from discovery through PKCE through the boundary resolver to the final 401/403 decision.',
    'Explain the WWW-Authenticate recovery pattern and the precise distinction between the resource and resource_metadata parameters.',
    'State the module\'s single unifying principle: every credential is bound to a specific issuer, resource, and operation -- and explain what breaks when each binding is removed.',
  ],
  objectivesKn: [
    'audience replay, mix-up, confused deputy ಅನ್ನೂ ಪ್ರತಿಯೊಂದೂ ದಾಟುವ ನಿಖರ boundary ಮೂಲಕ ಪ್ರತ್ಯೇಕಿಸಿ.',
    'registrations issuer ಮೂಲಕ ಮತ್ತೂ tokens (issuer, resource) ಮೂಲಕ ಏಕೆ key ಆಗಬೇಕೂ ಎಂದೂ ವಿವರಿಸಿ.',
    'module ya ಸ್ವಂತ verification code ಬಳಸಿ ಒಂದೂ ಸಂಪೂರ್ಣ authorization flow ಅನ್ನೂ ನಿಜವಾಗಿ trace ಮಾಡಿ.',
    'WWW-Authenticate recovery pattern ಮತ್ತೂ resource vs resource_metadata ನಡುವಿನ ನಿಖರ ವ್ಯತ್ಯಾಸ ವಿವರಿಸಿ.',
    'module ya ಏಕೀಕರಿಸುವ ತತ್ವ ಹೇಳಿ: ಪ್ರತಿ credential ಒಂದೂ ನಿರ್ದಿಷ್ಟ issuer, resource, ಮತ್ತೂ operation ಗೆ ಬಂಧಿಸಲ್ಪಟ್ಟಿದೆ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'MCP Authorization: CIMD, Issuer Binding, PKCE, and Step-Up (Part 3 of 3)', textKn: 'MCP Authorization: CIMD, Issuer Binding, PKCE, and Step-Up (Part 3 of 3)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: Parts 1-2 of this module · Time: ~40 minutes · Part 3 of 3',
      bodyKn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: ಈ module ya Parts 1-2 · Time: ~40 ನಿಮಿಷಗಳು · Part 3 of 3',
      pillsEn: 'Audience Replay,Mix-Up Attack,Confused Deputy,Cache Binding', pillsKn: 'Audience Replay,Mix-Up Attack,Confused Deputy,Cache Binding' } },

    { type: 'heading', data: { textEn: 'Three Attacks That Are Easy to Confuse', textKn: 'ಗೊಂದಲಮಯ ಮೂರೂ Attacks', level: 'H2' } },
    { type: 'table', data: {
      headingEn: 'Attack vs Boundary Crossed vs Defense', headers: ['Attack', 'Boundary Crossed', 'Main Defense'],
      rows: [
        ['Audience replay', 'Resource A -> Resource B', 'resource= at token request + aud check at each resource server'],
        ['Mix-up', 'Authorization Server A -> Authorization Server B', 'RFC 9207 returned_iss check, before code redemption'],
        ['Confused deputy', 'MCP proxy -> upstream API', 'Separate per-client consent and a distinct upstream token, never forwarding the inbound token'],
      ] } },
    { type: 'concept', data: {
      headingEn: 'Why These Three Are Genuinely Different', headingKn: 'ಈ ಮೂರೂ ನಿಜವಾಗಿ ಏಕೆ ಭಿನ್ನ',
      bodyEn: 'Audience replay happens AFTER a token exists -- the aud check catches it. Mix-up happens BEFORE a token exists, during the authorization-response step -- aud validation cannot help because there is no access token yet. Confused deputy is architectural: an MCP server acting as an OAuth proxy must never treat "the client authorized me" as "I am now authorized to act as the client against an upstream API."',
      bodyKn: 'Audience replay ಒಂದೂ token ಅಸ್ತಿತ್ವದಲ್ಲಿ ಇರುವ ನಂತರ ಸಂಭವಿಸುತ್ತದೆ. Mix-up token ಅಸ್ತಿತ್ವದಲ್ಲಿ ಇರುವ ಮೊದಲೇ ಸಂಭವಿಸುತ್ತದೆ. Confused deputy ವಾಸ್ತುಶಿಲ್ಪೀಯವಾಗಿದೆ.' } },

    { type: 'heading', data: { textEn: 'Genuinely Proving the Audience-Replay Defense', textKn: 'Audience-Replay Defense ಅನ್ನೂ ನಿಜವಾಗಿ ಸಾಬೀತುಪಡಿಸುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'oauth_flow.py', headingEn: 'A token for one resource, correctly rejected by another', headingKn: 'ಒಂದೂ resource ಗಾಗಿ ಒಂದೂ token, ಇನ್ನೊಂದೂ ಇಂದ ಸರಿಯಾಗಿ ತಿರಸ್ಕರಿಸಲ್ಪಟ್ಟಿದೆ',
      descEn: 'This reuses the handle_request() dispatcher from Part 2. A signature-valid, correctly-issued token for one MCP resource is replayed against another -- the audience check is what actually stops it, not the signature or issuer checks.',
      descKn: 'ಇದೂ Part 2 ya handle_request() dispatcher ಅನ್ನೂ ಮರುಬಳಸುತ್ತದೆ. ಒಂದೂ signature-valid token ಇನ್ನೊಂದೂ MCP resource ವಿರುದ್ಧ replay ಆಗುತ್ತದೆ.',
      code: "def handle_request(token, required_scope, configured_issuer, canonical_resource):\n    if token[\"issuer\"] != configured_issuer:\n        return {\"status\": 401, \"code\": \"invalid_token\", \"reason\": \"wrong issuer\"}\n    if token[\"audience\"] != canonical_resource:\n        return {\"status\": 401, \"code\": \"invalid_token\", \"reason\": \"wrong audience\"}\n    if token[\"expired\"]:\n        return {\"status\": 401, \"code\": \"invalid_token\", \"reason\": \"expired\"}\n    if required_scope not in token[\"scopes\"]:\n        return {\"status\": 403, \"code\": \"insufficient_scope\", \"scope\": required_scope}\n    return {\"status\": 200, \"authorized\": True}\n\nnotes_token = {\"issuer\": \"https://auth.example.com\", \"audience\": \"https://notes.example.com\",\n               \"expired\": False, \"scopes\": [\"mcp:tools.invoke\"]}\n\nprint(\"presented to Notes (correct resource):\", handle_request(\n    notes_token, \"mcp:tools.invoke\", \"https://auth.example.com\", \"https://notes.example.com\"))\n\nprint(\"replayed against Tasks (wrong resource):\", handle_request(\n    notes_token, \"mcp:tools.invoke\", \"https://auth.example.com\", \"https://tasks.example.com\"))" } },
    { type: 'output', data: { output: "presented to Notes (correct resource): {'status': 200, 'authorized': True}\nreplayed against Tasks (wrong resource): {'status': 401, 'code': 'invalid_token', 'reason': 'wrong audience'}" } },

    { type: 'heading', data: { textEn: 'Genuinely Proving the Mix-Up Defense', textKn: 'Mix-Up Defense ಅನ್ನೂ ನಿಜವಾಗಿ ಸಾಬೀತುಪಡಿಸುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'oauth_flow.py', headingEn: 'PKCE alone does not stop mix-up; returned_iss does', headingKn: 'PKCE ಮಾತ್ರ mix-up ಅನ್ನೂ ನಿಲ್ಲಿಸುವುದಿಲ್ಲ; returned_iss ನಿಲ್ಲಿಸುತ್ತದೆ',
      descEn: 'This reuses resolve_boundaries() from Part 2. Notice: pkce_state passes (the client genuinely holds a matching verifier), yet the flow still correctly halts -- because PKCE proves possession of the verifier, not the identity of the token endpoint being talked to.',
      descKn: 'ಇದೂ Part 2 ya resolve_boundaries() ಮರುಬಳಸುತ್ತದೆ. pkce_state ಪಾಸ್ ಆಗುತ್ತದೆ, ಆದರೂ flow ಇನ್ನೂ ಸರಿಯಾಗಿ ನಿಲ್ಲುತ್ತದೆ.',
      code: "def resolve_boundaries(state):\n    checks = [\n        (\"protected_resource\", state[\"requestedResource\"] == state[\"protectedResource\"]),\n        (\"issuer_discovery\", state[\"discoveredIssuer\"] == state[\"authorizationServer\"]),\n        (\"pkce_state\", state[\"pkceMethod\"] == \"S256\" and state[\"stateMatches\"]),\n        (\"returned_iss\", state[\"returnedIss\"] == state[\"discoveredIssuer\"]),\n        (\"token_issuer\", state[\"tokenIssuer\"] == state[\"discoveredIssuer\"]),\n        (\"token_audience\", state[\"tokenAudience\"] == state[\"requestedResource\"]),\n        (\"required_scopes\", set(state[\"requiredScopes\"]).issubset(set(state[\"tokenScopes\"]))),\n    ]\n    for name, passed in checks:\n        if not passed:\n            return {\"stoppedAt\": name, \"requiresNewAuthorizationFlow\": True}\n    return {\"stoppedAt\": None, \"requiresNewAuthorizationFlow\": False}\n\nmix_up_state = {\n    \"protectedResource\": \"https://mcp.example.test/team/notes\",\n    \"authorizationServer\": \"https://auth.good.example\",\n    \"discoveredIssuer\": \"https://auth.good.example\",\n    \"requestedResource\": \"https://mcp.example.test/team/notes\",\n    \"tokenIssuer\": \"https://auth.good.example\",\n    \"tokenAudience\": \"https://mcp.example.test/team/notes\",\n    \"requiredScopes\": [\"notes:read\"],\n    \"tokenScopes\": [\"notes:read\"],\n    \"pkceMethod\": \"S256\",\n    \"stateMatches\": True,\n    # The authorization response itself claims a different issuer --\n    # the client was redirected to the wrong token endpoint.\n    \"returnedIss\": \"https://auth.attacker-controlled.example\",\n}\n\nprint(\"PKCE state alone:\", mix_up_state[\"pkceMethod\"] == \"S256\" and mix_up_state[\"stateMatches\"])\nprint(\"full resolver result:\", resolve_boundaries(mix_up_state))" } },
    { type: 'output', data: { output: "PKCE state alone: True\nfull resolver result: {'stoppedAt': 'returned_iss', 'requiresNewAuthorizationFlow': True}" } },

    { type: 'heading', data: { textEn: 'Confused Deputy: An Architectural Failure, Not a Missing Check', textKn: 'Confused Deputy: ಒಂದೂ ವಾಸ್ತುಶಿಲ್ಪೀಯ ವೈಫಲ್ಯ, ಕಾಣೆಯಾದ Check ಅಲ್ಲ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Never Forward the Inbound Token to an Upstream API', headingKn: 'Inbound Token ಅನ್ನೂ ಎಂದಿಗೂ Upstream API ಗೆ Forward ಮಾಡಬೇಡಿ',
      bodyEn: 'Dangerous: inbound MCP token -> forwarded directly -> Google/GitHub/Salesforce API. Correct: inbound MCP authorization establishes the principal; the MCP server then obtains its OWN separately-consented upstream token for that principal. The two authorization relationships (client-to-MCP-server, MCP-server-to-upstream-API) must never collapse into one forwarded credential.',
      bodyKn: 'ಅಪಾಯಕಾರಿ: inbound MCP token -> ನೇರವಾಗಿ forward -> upstream API. ಸರಿಯಾದೂ: inbound MCP authorization principal ಸ್ಥಾಪಿಸುತ್ತದೆ; MCP server ನಂತರ ಆ principal ಗಾಗಿ ತನ್ನ ಸ್ವಂತ ಪ್ರತ್ಯೇಕ-consented upstream token ಪಡೆಯುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Cache Key Collisions Are the Same Bug in Different Clothes', textKn: 'Cache Key Collisions ವಿಭಿನ್ನ ಬಟ್ಟೆಗಳಲ್ಲಿ ಅದೇ Bug', level: 'H2' } },
    { type: 'code', data: {
      filename: 'oauth_discovery.py', headingEn: 'Genuinely comparing correct vs collision-prone cache keys', headingKn: 'ಸರಿಯಾದೂ vs collision-prone cache keys ಅನ್ನೂ ನಿಜವಾಗಿ ಹೋಲಿಸುವುದೂ',
      descEn: 'registrations[resource] would let a resource that switches authorization servers silently reuse the old server\'s client_id. tokens[issuer] would let one issuer\'s Notes token get handed to Tasks just because both are served by the same issuer.',
      descKn: 'registrations[resource] ಒಂದೂ resource authorization servers ಬದಲಾಯಿಸಿದಾಗ ಹಳೆಯ server ya client_id ಮೌನವಾಗಿ ಮರುಬಳಸಲು ಅನುಮತಿಸುತ್ತದೆ.',
      code: "# WRONG: keyed by resource -- collides when the resource's AS changes\nweak_registrations = {}\nweak_registrations[\"https://notes.example.com\"] = {\"client_id\": \"client-for-auth-A\"}\n# Resource now points at a different authorization server; the weak cache\n# still hands out auth-A's client_id, which auth-B never issued.\nprint(\"weak lookup after AS change:\", weak_registrations[\"https://notes.example.com\"])\n\n# CORRECT: keyed by issuer\ncorrect_registrations = {}\ncorrect_registrations[\"https://auth-a.example\"] = {\"client_id\": \"client-for-auth-A\"}\ncorrect_registrations[\"https://auth-b.example\"] = {\"client_id\": \"client-for-auth-B\"}\nprint(\"correct lookup is issuer-specific:\",\n      correct_registrations[\"https://auth-a.example\"] != correct_registrations[\"https://auth-b.example\"])\n\n# WRONG: tokens keyed only by issuer -- collides across resources\nweak_tokens = {}\nweak_tokens[\"https://auth.example.com\"] = \"token-for-notes\"\nweak_tokens[\"https://auth.example.com\"] = \"token-for-tasks\"  # silently overwrites!\nprint(\"weak token cache after second write:\", weak_tokens[\"https://auth.example.com\"])\n\n# CORRECT: tokens keyed by (issuer, resource)\ncorrect_tokens = {}\ncorrect_tokens[(\"https://auth.example.com\", \"https://notes.example.com\")] = \"token-for-notes\"\ncorrect_tokens[(\"https://auth.example.com\", \"https://tasks.example.com\")] = \"token-for-tasks\"\nprint(\"correct tokens remain distinct:\",\n      correct_tokens[(\"https://auth.example.com\", \"https://notes.example.com\")]\n      != correct_tokens[(\"https://auth.example.com\", \"https://tasks.example.com\")])" } },
    { type: 'output', data: { output: "weak lookup after AS change: {'client_id': 'client-for-auth-A'}\ncorrect lookup is issuer-specific: True\nweak token cache after second write: token-for-tasks\ncorrect tokens remain distinct: True" } },

    { type: 'concept', data: {
      headingEn: 'The weak_tokens Line Proves the Bug, Not Just Describes It', headingKn: 'weak_tokens Line ಬಗ್ಗೆ ವಿವರಿಸುವುದಿಲ್ಲ, Bug ಅನ್ನೂ ಸಾಬೀತುಪಡಿಸುತ್ತದೆ',
      bodyEn: 'The second assignment to weak_tokens["https://auth.example.com"] genuinely overwrites the first in a real Python dict -- this is not a simulated failure, it is the actual collision that a same-issuer-different-resource cache design produces. That is exactly why the module requires tokens[(issuer, resource)].',
      bodyKn: 'weak_tokens["https://auth.example.com"] ಗೆ ಎರಡನೇ assignment ಒಂದೂ ನಿಜ Python dict ನಲ್ಲಿ ಮೊದಲನೆಯದೂ ನಿಜವಾಗಿ overwrite ಮಾಡುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'WWW-Authenticate Recovery', textKn: 'WWW-Authenticate Recovery', level: 'H2' } },
    { type: 'code', data: {
      filename: 'oauth_flow.py', headingEn: 'Genuinely building the recovery challenge for the two rejection kinds', headingKn: 'ಎರಡೂ ತಿರಸ್ಕಾರ ಪ್ರಕಾರಗಳಿಗೆ recovery challenge ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸುವುದೂ',
      descEn: 'resource_metadata points to the RFC 9728 metadata document about the resource, NOT the resource itself -- an easy trap. The client uses this pointer to restart discovery correctly instead of guessing.',
      descKn: 'resource_metadata resource ಬಗ್ಗೆ RFC 9728 metadata document ಗೆ ಸೂಚಿಸುತ್ತದೆ, resource ಸ್ವತಃ ಅಲ್ಲ.',
      code: "def build_www_authenticate(result, resource):\n    metadata_url = f\"{resource}/.well-known/oauth-protected-resource\"\n    if result[\"code\"] == \"invalid_token\":\n        return (f'Bearer error=\"invalid_token\", '\n                f'error_description=\"{result[\"reason\"]}\", '\n                f'resource_metadata=\"{metadata_url}\"')\n    if result[\"code\"] == \"insufficient_scope\":\n        return (f'Bearer error=\"insufficient_scope\", '\n                f'scope=\"{result[\"scope\"]}\", '\n                f'resource_metadata=\"{metadata_url}\"')\n    return None\n\naudience_failure = {\"status\": 401, \"code\": \"invalid_token\", \"reason\": \"audience mismatch\"}\nprint(build_www_authenticate(audience_failure, \"https://tasks.example.com\"))\n\nscope_failure = {\"status\": 403, \"code\": \"insufficient_scope\", \"scope\": \"notes:delete\"}\nprint(build_www_authenticate(scope_failure, \"https://notes.example.com\"))" } },
    { type: 'output', data: { output: 'Bearer error="invalid_token", error_description="audience mismatch", resource_metadata="https://tasks.example.com/.well-known/oauth-protected-resource"\nBearer error="insufficient_scope", scope="notes:delete", resource_metadata="https://notes.example.com/.well-known/oauth-protected-resource"' } },

    { type: 'heading', data: { textEn: 'The Full Flow, Traced End to End', textKn: 'ಪೂರ್ಣ Flow, End to End Traced', level: 'H2' } },
    { type: 'diagram', data: {
      titleEn: 'Discovery through PKCE through boundary resolution to the final decision', titleKn: 'Discovery ಇಂದ PKCE ಇಂದ boundary resolution ಇಂದ ಅಂತಿಮ ನಿರ್ಧಾರ',
      contentEn: 'protected_resource_metadata_url() [genuine]\n  -> choose_enrollment() [genuine: cimd]\n  -> validate_cimd_document() [genuine: no errors]\n  -> generate_code_verifier() + derive_code_challenge_s256() [genuine]\n  -> resolve_boundaries(VALID_STATE) [genuine: stoppedAt None]\n  -> handle_request(good_token, "notes:read", ...) [genuine: 200]\n\nEvery arrow above was run with real Python in this module -- not narrated, not assumed.' } },

    { type: 'heading', data: { textEn: 'The Single Unifying Principle', textKn: 'ಏಕೈಕ ಏಕೀಕರಿಸುವ ತತ್ವ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Every Credential Is Bound to an Issuer, a Resource, and an Operation', headingKn: 'ಪ್ರತಿ Credential ಒಂದೂ Issuer, ಒಂದೂ Resource, ಮತ್ತೂ ಒಂದೂ Operation ಗೆ ಬಂಧಿಸಲ್ಪಟ್ಟಿದೆ',
      bodyEn: 'Remove issuer binding: an attacker-controlled AS gets trusted. Remove audience binding: Notes\' token authorizes Tasks. Remove operation-scope binding: a read-only token deletes data. Remove authorization-response issuer binding: mix-up succeeds. Remove token-cache resource binding: Notes/Tasks collide in storage. Every rule in this three-part module is a specific instance of one heuristic: whenever a credential is cached, forwarded, validated, or reused, ask exactly what security context it is bound to.',
      bodyKn: 'Issuer binding ತೆಗೆದುಹಾಕಿ: attacker-controlled AS trusted ಆಗುತ್ತದೆ. Audience binding ತೆಗೆದುಹಾಕಿ: Notes ya token Tasks ಅನ್ನೂ ಅಧಿಕೃತಗೊಳಿಸುತ್ತದೆ. ಪ್ರತಿ credential cache, forward, validate, ಅಥವಾ reuse ಆದಾಗಲೂ, ಅದೂ ಯಾವ security context ಗೆ ಬಂಧಿಸಲ್ಪಟ್ಟಿದೆ ಎಂದೂ ಕೇಳಿ.' } },

    { type: 'concept', data: { headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Audience replay, mix-up, and confused deputy are three genuinely distinct attacks crossing three different boundaries -- resource, authorization server, and upstream API respectively.\n• We genuinely proved the aud check stops audience replay, and that PKCE state alone does not stop mix-up -- returned_iss does.\n• Confused deputy is fixed architecturally: an MCP proxy must never forward the client\'s inbound token to an upstream API.\n• We genuinely reproduced a real dict-overwrite collision to prove why registrations must be issuer-keyed and tokens must be (issuer, resource)-keyed.\n• WWW-Authenticate\'s resource_metadata points to the metadata document, not the resource itself -- this lets a rejected client recover correctly instead of guessing.\n• The whole module reduces to one rule: bind every credential to its issuer, its resource, and its operation, and never let any of those three collapse into an assumption.',
      bodyKn: '• Audience replay, mix-up, confused deputy ಮೂರೂ ವಿಭಿನ್ನ boundaries ದಾಟುವ ಮೂರೂ ನಿಜವಾಗಿ ಭಿನ್ನ attacks.\n• aud check audience replay ಅನ್ನೂ ನಿಲ್ಲಿಸುತ್ತದೆ ಎಂದೂ, PKCE state ಮಾತ್ರ mix-up ಅನ್ನೂ ನಿಲ್ಲಿಸುವುದಿಲ್ಲ ಎಂದೂ ನಾವು ನಿಜವಾಗಿ ಸಾಬೀತುಪಡಿಸಿದ್ದೇವೆ.\n• Confused deputy ವಾಸ್ತುಶಿಲ್ಪೀಯವಾಗಿ ಸರಿಪಡಿಸಲಾಗಿದೆ.\n• registrations issuer-keyed ಆಗಿರಬೇಕೂ ಮತ್ತೂ tokens (issuer, resource)-keyed ಆಗಿರಬೇಕೂ ಎಂದೂ ಸಾಬೀತುಪಡಿಸಲು ನಾವು ನಿಜ dict-overwrite collision ಅನ್ನೂ ಪುನರುತ್ಪಾದಿಸಿದ್ದೇವೆ.\n• WWW-Authenticate ya resource_metadata metadata document ಗೆ ಸೂಚಿಸುತ್ತದೆ, resource ಸ್ವತಃ ಅಲ್ಲ.\n• ಇಡೀ module ಒಂದೂ ನಿಯಮಕ್ಕೆ ಕಡಿಮೆಯಾಗುತ್ತದೆ: ಪ್ರತಿ credential ಅನ್ನೂ ಅದರ issuer, resource, ಮತ್ತೂ operation ಗೆ ಬಂಧಿಸಿ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'A Notes-audience token is replayed against the Tasks MCP server. Which attack is this?', qKn: 'ಒಂದೂ Notes-audience token Tasks MCP server ವಿರುದ್ಧ replay ಆಗುತ್ತದೆ. ಇದೂ ಯಾವ attack?',
        opts: ['Mix-up', 'Confused deputy', 'Audience replay', 'CIMD spoofing'],
        optsKn: ['Mix-up', 'Confused deputy', 'Audience replay', 'CIMD spoofing'],
        correct: 2 },
      { q: 'Why can\'t aud validation stop a mix-up attack?', qKn: 'aud validation ಒಂದೂ mix-up attack ಅನ್ನೂ ಏಕೆ ನಿಲ್ಲಿಸಲಾಗುವುದಿಲ್ಲ?',
        opts: ['aud is only checked for opaque tokens', 'Mix-up happens before an access token exists', 'aud is optional in MCP', 'PKCE already covers it'],
        optsKn: ['aud opaque tokens ಗಾಗಿ ಮಾತ್ರ ಪರಿಶೀಲಿಸಲ್ಪಡುತ್ತದೆ', 'Mix-up ಒಂದೂ access token ಅಸ್ತಿತ್ವದಲ್ಲಿ ಇರುವ ಮೊದಲೇ ಸಂಭವಿಸುತ್ತದೆ', 'aud MCP ನಲ್ಲಿ ಐಚ್ಛಿಕ', 'PKCE ಈಗಾಗಲೇ ಅದನ್ನೂ ಒಳಗೊಂಡಿದೆ'],
        correct: 1 },
      { q: 'An MCP server acting as an OAuth proxy forwards the client\'s inbound bearer token directly to an upstream third-party API. What is this?', qKn: 'ಒಂದೂ OAuth proxy ಆಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸುವ MCP server client ya inbound bearer token ಅನ್ನೂ ನೇರವಾಗಿ upstream third-party API ಗೆ forward ಮಾಡುತ್ತದೆ. ಇದೂ ಏನೂ?',
        opts: ['A correct least-privilege pattern', 'Confused deputy', 'Audience replay', 'Step-up authorization'],
        optsKn: ['ಒಂದೂ ಸರಿಯಾದೂ least-privilege pattern', 'Confused deputy', 'Audience replay', 'Step-up authorization'],
        correct: 1 },
      { q: 'What is the collision risk of caching access tokens as tokens[issuer] instead of tokens[(issuer, resource)]?', qKn: 'tokens[(issuer, resource)] ಬದಲಿಗೆ tokens[issuer] ಆಗಿ access tokens cache ಮಾಡುವ collision ಅಪಾಯ ಏನೂ?',
        opts: ['No risk, issuer alone is sufficient', 'A token for one MCP resource can silently overwrite/be reused for another sharing the same issuer', 'It only affects DCR clients', 'It prevents PKCE from working'],
        optsKn: ['ಯಾವುದೇ ಅಪಾಯ ಇಲ್ಲ', 'ಒಂದೂ MCP resource ya token ಅದೇ issuer ಹಂಚಿಕೊಳ್ಳುವ ಇನ್ನೊಂದಕ್ಕೆ ಮೌನವಾಗಿ overwrite/reuse ಆಗಬಹುದು', 'ಇದೂ DCR clients ಅನ್ನೂ ಮಾತ್ರ ಬಾಧಿಸುತ್ತದೆ', 'ಇದೂ PKCE ಕೆಲಸ ಮಾಡುವುದನ್ನೂ ತಡೆಯುತ್ತದೆ'],
        correct: 1 },
      { q: 'In a WWW-Authenticate challenge, what does resource_metadata point to?', qKn: 'ಒಂದೂ WWW-Authenticate challenge ನಲ್ಲಿ, resource_metadata ಏನೂ ಸೂಚಿಸುತ್ತದೆ?',
        opts: ['The protected resource itself', 'The metadata document describing the protected resource', 'The access token', 'The client_id URL'],
        optsKn: ['protected resource ಸ್ವತಃ', 'protected resource ವಿವರಿಸುವ metadata document', 'access token', 'client_id URL'],
        correct: 1 },
    ] } },
  ],
};
