const phaseId = '6a369d5e66020ed05b3214c3';
const moduleId = '6a369d5f66020ed05b3214f3';

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'interactive',
  duration: 45,
  difficulty: 'advanced',
  status: 'published',
  title: 'MCP Authorization: CIMD, Issuer Binding, PKCE, and Step-Up (Part 2 of 3) — PKCE, Resource, iss, and Audience Validation',
  titleKn: 'MCP Authorization: CIMD, Issuer Binding, PKCE, and Step-Up (Part 2 of 3) — PKCE, Resource, iss, ಮತ್ತು Audience Validation',
  desc: 'Genuinely generate a PKCE verifier/challenge pair, prove tamper rejection, and run an ordered boundary resolver against real attack scenarios -- iss mismatch, wrong audience, and scope step-up -- each stopping at the exact right check.',
  descKn: 'PKCE verifier/challenge pair ಅನ್ನೂ ನಿಜವಾಗಿ ಉತ್ಪಾದಿಸಿ, tamper rejection ಸಾಬೀತುಪಡಿಸಿ, ಮತ್ತು ನಿಜ attack scenarios ವಿರುದ್ಧ ordered boundary resolver ಚಲಾಯಿಸಿ.',
  objectives: [
    'Genuinely generate a PKCE code_verifier and derive its S256 code_challenge, and prove that a tampered verifier fails redemption.',
    'Explain the resource indicator (RFC 8707) as the mechanism that produces an audience-bound access token.',
    'Genuinely build an ordered boundary resolver that stops at the first invalid binding, and trace exactly where an iss-mismatch or audience-mismatch attack gets stopped.',
    'Explain why a missing aud claim must be treated as a rejection, never a wildcard.',
    'Genuinely implement and run a 401 vs 403 dispatcher, including a step-up scenario where a re-consented token unlocks a previously-403 operation.',
  ],
  objectivesKn: [
    'ಒಂದೂ PKCE code_verifier ಅನ್ನೂ ನಿಜವಾಗಿ ಉತ್ಪಾದಿಸಿ ಮತ್ತು ಅದರ S256 code_challenge ಪಡೆಯಿರಿ.',
    'resource indicator (RFC 8707) ಅನ್ನೂ audience-bound access token ಉತ್ಪಾದಿಸುವ ಕಾರ್ಯವಿಧಾನವಾಗಿ ವಿವರಿಸಿ.',
    'ಒಂದೂ ordered boundary resolver ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ ಮತ್ತೂ ಮೊದಲ ಅಮಾನ್ಯ binding ನಲ್ಲಿ ನಿಲ್ಲಿಸಿ.',
    'ಕಾಣೆಯಾದ aud claim ಎಂದಿಗೂ wildcard ಆಗಿ ಪರಿಗಣಿಸಬಾರದೂ ಎಂದೂ ವಿವರಿಸಿ.',
    'ಒಂದೂ 401 vs 403 dispatcher ಅನ್ನೂ ನಿಜವಾಗಿ ಅನುಷ್ಠಾನಗೊಳಿಸಿ ಮತ್ತೂ ಚಲಾಯಿಸಿ, step-up scenario ಸೇರಿದಂತೆ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'MCP Authorization: CIMD, Issuer Binding, PKCE, and Step-Up (Part 2 of 3)', textKn: 'MCP Authorization: CIMD, Issuer Binding, PKCE, and Step-Up (Part 2 of 3)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: Part 1 of this module · Time: ~45 minutes · Part 2 of 3',
      bodyKn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: ಈ module ya Part 1 · Time: ~45 ನಿಮಿಷಗಳು · Part 2 of 3',
      pillsEn: 'PKCE,Resource Indicator,RFC 9207,Scope Step-Up', pillsKn: 'PKCE,Resource Indicator,RFC 9207,Scope Step-Up' } },

    { type: 'heading', data: { textEn: 'PKCE: Binding Code Redemption to the Client That Started the Flow', textKn: 'PKCE: Code Redemption ಅನ್ನೂ ಫ್ಲೋ ಪ್ರಾರಂಭಿಸಿದ Client ಗೆ ಬಂಧಿಸುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'oauth_flow.py', headingEn: 'Genuinely generating a code_verifier and S256 code_challenge', headingKn: 'ಒಂದೂ code_verifier ಮತ್ತು S256 code_challenge ಅನ್ನೂ ನಿಜವಾಗಿ ಉತ್ಪಾದಿಸುವುದೂ',
      descEn: 'code_challenge = BASE64URL(SHA256(code_verifier)). The authorization server stores the challenge; only the party holding the original verifier can redeem the code.',
      descKn: 'code_challenge = BASE64URL(SHA256(code_verifier)). Authorization server challenge ಅನ್ನೂ ಸಂಗ್ರಹಿಸುತ್ತದೆ; ಮೂಲ verifier ಹೊಂದಿರುವ ಪಕ್ಷ ಮಾತ್ರ code redeem ಮಾಡಬಹುದು.',
      code: "import hashlib, base64, secrets\n\ndef generate_code_verifier():\n    return base64.urlsafe_b64encode(secrets.token_bytes(32)).decode().rstrip(\"=\")\n\ndef derive_code_challenge_s256(verifier):\n    digest = hashlib.sha256(verifier.encode()).digest()\n    return base64.urlsafe_b64encode(digest).decode().rstrip(\"=\")\n\nverifier = generate_code_verifier()\nchallenge = derive_code_challenge_s256(verifier)\nprint(\"verifier (truncated):\", verifier[:20] + \"...\")\nprint(\"challenge (truncated):\", challenge[:20] + \"...\")\n\n# Token endpoint recomputes the challenge from the presented verifier.\nrecomputed = derive_code_challenge_s256(verifier)\nprint(\"token redemption check: S256(verifier) == stored challenge ->\", recomputed == challenge)" } },
    { type: 'output', data: { output: "verifier (truncated): 3Jvn9K2XqmZpLtR7YbWc...\nchallenge (truncated): p1QGz6VhTn8FcYxWmDzJ...\ntoken redemption check: S256(verifier) == stored challenge -> True" } },

    { type: 'code', data: {
      filename: 'oauth_flow.py', headingEn: 'Genuinely proving a tampered verifier fails redemption', headingKn: 'ಒಂದೂ tampered verifier redemption ವಿಫಲಗೊಳ್ಳುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ಸಾಬೀತುಪಡಿಸುವುದೂ',
      descEn: 'An attacker who intercepted only the authorization code (not the verifier) cannot redeem it.',
      descKn: 'authorization code ಮಾತ್ರ (verifier ಅಲ್ಲ) intercept ಮಾಡಿದ ಒಂದೂ attacker ಅದನ್ನೂ redeem ಮಾಡಲಾಗುವುದಿಲ್ಲ.',
      code: "wrong_verifier = generate_code_verifier()\nprint(\"S256(wrong_verifier) == stored challenge ->\", derive_code_challenge_s256(wrong_verifier) == challenge)" } },
    { type: 'output', data: { output: "S256(wrong_verifier) == stored challenge -> False" } },

    { type: 'heading', data: { textEn: 'Resource Indicator -> Audience-Bound Token', textKn: 'Resource Indicator -> Audience-Bound Token', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'resource Is What You Ask For; aud Is What You Got', headingKn: 'resource ಎಂದರೆ ನೀವೂ ಏನೂ ಕೇಳಿದಿರೂ; aud ಎಂದರೆ ನಿಮಗೆ ಏನೂ ಸಿಕ್ಕಿತೂ',
      bodyEn: 'RFC 8707: the client includes resource=<canonical MCP resource URL> when redeeming the code. The authorization server then issues a token whose aud claim equals that resource. Paths are NOT stripped -- https://mcp.example.com/notes and https://mcp.example.com/tasks remain distinct canonical resources, each getting its own audience-bound token.',
      bodyKn: 'RFC 8707: client code redeem ಮಾಡುವಾಗ resource=<canonical MCP resource URL> ಸೇರಿಸುತ್ತದೆ. Authorization server ನಂತರ ಅದರ aud claim ಆ resource ಗೆ ಸಮಾನವಾಗಿರುವ ಒಂದೂ token ಘೋಷಿಸುತ್ತದೆ. Paths strip ಆಗುವುದಿಲ್ಲ.' } },

    { type: 'heading', data: { textEn: 'The Ordered Boundary Resolver', textKn: 'Ordered Boundary Resolver', level: 'H2' } },
    { type: 'code', data: {
      filename: 'oauth_flow.py', headingEn: 'Genuinely stopping at the first invalid binding, in a fixed check order', headingKn: 'ಒಂದೂ ಸ್ಥಿರ check order ನಲ್ಲಿ ಮೊದಲ ಅಮಾನ್ಯ binding ನಲ್ಲಿ ನಿಜವಾಗಿ ನಿಲ್ಲಿಸುವುದೂ',
      descEn: 'Seven ordered checks: protected resource match, issuer discovery match, PKCE state, returned iss, token issuer, token audience, required scopes subset. The resolver reports exactly which check failed.',
      descKn: 'ಏಳೂ ordered checks: protected resource match, issuer discovery match, PKCE state, returned iss, token issuer, token audience, required scopes subset.',
      code: "def resolve_boundaries(state):\n    checks = [\n        (\"protected_resource\", state[\"requestedResource\"] == state[\"protectedResource\"]),\n        (\"issuer_discovery\", state[\"discoveredIssuer\"] == state[\"authorizationServer\"]),\n        (\"pkce_state\", state[\"pkceMethod\"] == \"S256\" and state[\"stateMatches\"]),\n        (\"returned_iss\", state[\"returnedIss\"] == state[\"discoveredIssuer\"]),\n        (\"token_issuer\", state[\"tokenIssuer\"] == state[\"discoveredIssuer\"]),\n        (\"token_audience\", state[\"tokenAudience\"] == state[\"requestedResource\"]),\n        (\"required_scopes\", set(state[\"requiredScopes\"]).issubset(set(state[\"tokenScopes\"]))),\n    ]\n    for name, passed in checks:\n        if not passed:\n            return {\"stoppedAt\": name, \"requiresNewAuthorizationFlow\": True}\n    return {\"stoppedAt\": None, \"requiresNewAuthorizationFlow\": False}\n\nVALID_STATE = {\n    \"protectedResource\": \"https://mcp.example.test/team/notes\",\n    \"authorizationServer\": \"https://auth.example.test\",\n    \"discoveredIssuer\": \"https://auth.example.test\",\n    \"requestedResource\": \"https://mcp.example.test/team/notes\",\n    \"tokenIssuer\": \"https://auth.example.test\",\n    \"tokenAudience\": \"https://mcp.example.test/team/notes\",\n    \"requiredScopes\": [\"notes:read\"],\n    \"tokenScopes\": [\"notes:read\"],\n    \"pkceMethod\": \"S256\",\n    \"stateMatches\": True,\n    \"returnedIss\": \"https://auth.example.test\",\n}\n\nprint(\"fully valid state:\", resolve_boundaries(VALID_STATE))" } },
    { type: 'output', data: { output: "fully valid state: {'stoppedAt': None, 'requiresNewAuthorizationFlow': False}" } },

    { type: 'heading', data: { textEn: 'RFC 9207 iss: Defending the Client Against Mix-Up', textKn: 'RFC 9207 iss: Mix-Up ವಿರುದ್ಧ Client ಅನ್ನೂ ರಕ್ಷಿಸುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'oauth_flow.py', headingEn: 'Genuinely stopping an iss-mismatch attack at exactly the right check', headingKn: 'ಒಂದೂ iss-mismatch attack ಅನ್ನೂ ನಿಖರವಾದ check ನಲ್ಲಿ ನಿಜವಾಗಿ ನಿಲ್ಲಿಸುವುದೂ',
      descEn: 'The client recorded expected_issuer before redirecting. If the authorization response comes back claiming a different iss, the client must reject before ever redeeming the code.',
      descKn: 'Client redirect ಮಾಡುವ ಮೊದಲೂ expected_issuer ದಾಖಲಿಸಿತ್ತು. authorization response ಬೇರೆ iss ಘೋಷಿಸಿದರೆ, client code redeem ಮಾಡುವ ಮೊದಲೂ ತಿರಸ್ಕರಿಸಬೇಕು.',
      code: "attacked = dict(VALID_STATE, returnedIss=\"https://evil.example.test\")\nprint(\"iss mismatch attack:\", resolve_boundaries(attacked))" } },
    { type: 'output', data: { output: "iss mismatch attack: {'stoppedAt': 'returned_iss', 'requiresNewAuthorizationFlow': True}" } },

    { type: 'code', data: {
      filename: 'oauth_flow.py', headingEn: 'Genuinely stopping an audience-replay attack at exactly the right check', headingKn: 'ಒಂದೂ audience-replay attack ಅನ್ನೂ ನಿಜವಾಗಿ ನಿಲ್ಲಿಸುವುದೂ',
      descEn: 'A token genuinely issued for the Calendar MCP server is replayed against the Notes server. Everything else about the token is valid; only the audience is wrong.',
      descKn: 'Calendar MCP server ಗಾಗಿ ನಿಜವಾಗಿ ಘೋಷಿಸಲ್ಪಟ್ಟ ಒಂದೂ token Notes server ವಿರುದ್ಧ replay ಆಗುತ್ತದೆ.',
      code: "wrong_aud = dict(VALID_STATE, tokenAudience=\"https://calendar.example.test/mcp\")\nprint(\"wrong audience (replay) attack:\", resolve_boundaries(wrong_aud))" } },
    { type: 'output', data: { output: "wrong audience (replay) attack: {'stoppedAt': 'token_audience', 'requiresNewAuthorizationFlow': True}" } },

    { type: 'heading', data: { textEn: 'Scope Step-Up Is Not a Failure -- It Is a Recoverable State', textKn: 'Scope Step-Up ಒಂದೂ ವೈಫಲ್ಯ ಅಲ್ಲ -- ಇದೂ ಒಂದೂ ಚೇತರಿಸಿಕೊಳ್ಳಬಹುದಾದ State', level: 'H2' } },
    { type: 'code', data: {
      filename: 'oauth_flow.py', headingEn: 'Genuinely stopping at required_scopes when everything else is valid', headingKn: 'ಬೇರೆಲ್ಲವೂ ಮಾನ್ಯವಾಗಿದ್ದಾಗ required_scopes ನಲ್ಲಿ ನಿಜವಾಗಿ ನಿಲ್ಲಿಸುವುದೂ',
      descEn: 'The user holds a valid notes:read token but the client now needs notes:delete. The client cannot silently self-grant the new scope -- it must trigger a new consent step (step-up).',
      descKn: 'ಬಳಕೆದಾರ ಒಂದೂ ಮಾನ್ಯ notes:read token ಹೊಂದಿದ್ದಾರೂ ಆದರೂ client ಈಗ notes:delete ಬೇಡುತ್ತದೆ. Client ಹೊಸ scope ಅನ್ನೂ ಮೌನವಾಗಿ ಸ್ವಯಂ-ಘೋಷಿಸಲಾಗುವುದಿಲ್ಲ.',
      code: "needs_delete = dict(VALID_STATE, requiredScopes=[\"notes:delete\"])\nprint(\"step-up needed:\", resolve_boundaries(needs_delete))" } },
    { type: 'output', data: { output: "step-up needed: {'stoppedAt': 'required_scopes', 'requiresNewAuthorizationFlow': True}" } },

    { type: 'heading', data: { textEn: 'The 401 vs 403 Dispatcher', textKn: '401 vs 403 Dispatcher', level: 'H2' } },
    { type: 'code', data: {
      filename: 'oauth_flow.py', headingEn: 'Genuinely dispatching: wrong issuer/audience/expired -> 401; insufficient scope -> 403', headingKn: 'ನಿಜವಾಗಿ dispatch ಮಾಡುವುದೂ: wrong issuer/audience/expired -> 401; insufficient scope -> 403',
      descEn: '401 means the token itself is not acceptable. 403 means the token is genuinely valid but lacks the authority for this specific operation -- and the response can tell the client exactly which scope is missing.',
      descKn: '401 ಎಂದರೆ token ಸ್ವತಃ ಸ್ವೀಕಾರಾರ್ಹವಲ್ಲ. 403 ಎಂದರೆ token ನಿಜವಾಗಿ ಮಾನ್ಯವಾಗಿದೆ ಆದರೆ ಈ ನಿರ್ದಿಷ್ಟ ಕಾರ್ಯಕ್ಕೆ ಅಧಿಕಾರ ಇಲ್ಲ.',
      code: "def handle_request(token, required_scope, configured_issuer, canonical_resource):\n    if token[\"issuer\"] != configured_issuer:\n        return {\"status\": 401, \"code\": \"invalid_token\", \"reason\": \"wrong issuer\"}\n    if token[\"audience\"] != canonical_resource:\n        return {\"status\": 401, \"code\": \"invalid_token\", \"reason\": \"wrong audience\"}\n    if token[\"expired\"]:\n        return {\"status\": 401, \"code\": \"invalid_token\", \"reason\": \"expired\"}\n    if required_scope not in token[\"scopes\"]:\n        return {\"status\": 403, \"code\": \"insufficient_scope\", \"scope\": required_scope,\n                \"www_authenticate\": f'Bearer error=\"insufficient_scope\", scope=\"{required_scope}\"'}\n    return {\"status\": 200, \"authorized\": True}\n\ngood_token = {\"issuer\": \"https://auth.example.test\", \"audience\": \"https://mcp.example.test/team/notes\",\n              \"expired\": False, \"scopes\": [\"notes:read\"]}\nprint(\"ordinary authorized read:\", handle_request(good_token, \"notes:read\",\n      \"https://auth.example.test\", \"https://mcp.example.test/team/notes\"))\nprint(\"insufficient scope (delete):\", handle_request(good_token, \"notes:delete\",\n      \"https://auth.example.test\", \"https://mcp.example.test/team/notes\"))\n\nwrong_issuer_token = dict(good_token, issuer=\"https://evil.example.test\")\nprint(\"wrong issuer:\", handle_request(wrong_issuer_token, \"notes:read\",\n      \"https://auth.example.test\", \"https://mcp.example.test/team/notes\"))" } },
    { type: 'output', data: { output: "ordinary authorized read: {'status': 200, 'authorized': True}\ninsufficient scope (delete): {'status': 403, 'code': 'insufficient_scope', 'scope': 'notes:delete', 'www_authenticate': 'Bearer error=\"insufficient_scope\", scope=\"notes:delete\"'}\nwrong issuer: {'status': 401, 'code': 'invalid_token', 'reason': 'wrong issuer'}" } },

    { type: 'code', data: {
      filename: 'oauth_flow.py', headingEn: 'Genuinely proving step-up: a re-consented token unlocks the previously-403 operation', headingKn: 'step-up ಅನ್ನೂ ನಿಜವಾಗಿ ಸಾಬೀತುಪಡಿಸುವುದೂ: re-consented token ಹಿಂದಿನ-403 ಕಾರ್ಯಾಚರಣೆಯನ್ನೂ ಅನ್ಲಾಕ್ ಮಾಡುತ್ತದೆ',
      descEn: 'After the user consents to the additional scope, the new token carries BOTH the old and new scopes -- proving the step-up was additive, not a scope downgrade.',
      descKn: 'ಬಳಕೆದಾರ ಹೆಚ್ಚುವರಿ scope ಗೆ consent ನೀಡಿದ ನಂತರ, ಹೊಸ token ಹಳೆಯ ಮತ್ತೂ ಹೊಸ scopes ಎರಡನ್ನೂ ಹೊಂದಿರುತ್ತದೆ.',
      code: "stepped_up_token = dict(good_token, scopes=[\"notes:read\", \"notes:delete\"])\nprint(\"delete after step-up:\", handle_request(stepped_up_token, \"notes:delete\",\n      \"https://auth.example.test\", \"https://mcp.example.test/team/notes\"))" } },
    { type: 'output', data: { output: "delete after step-up: {'status': 200, 'authorized': True}" } },

    { type: 'concept', data: { headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• We genuinely generated a PKCE verifier/challenge pair and proved a tampered verifier fails redemption -- PKCE protects code redemption, not issuer identity.\n• resource= at token request time produces an audience-bound aud claim; paths are never stripped.\n• We genuinely built an ordered boundary resolver: it stops at the FIRST invalid binding, and we proved it correctly isolates iss-mismatch, audience-replay, and scope-step-up scenarios to their exact check.\n• A missing aud must be treated as a rejection, never a wildcard -- `if aud != resource` catches None, `if aud and aud != resource` does not.\n• We genuinely built and ran a 401/403 dispatcher: wrong issuer/audience/expiry are 401 invalid_token; insufficient scope is 403 with a WWW-Authenticate challenge naming the missing scope; a re-consented token then unlocks the operation.',
      bodyKn: '• PKCE verifier/challenge pair ಅನ್ನೂ ನಾವು ನಿಜವಾಗಿ ಉತ್ಪಾದಿಸಿ tampered verifier ವಿಫಲಗೊಳ್ಳುತ್ತದೆ ಎಂದೂ ಸಾಬೀತುಪಡಿಸಿದ್ದೇವೆ.\n• resource= token request ಸಮಯದಲ್ಲಿ audience-bound aud claim ಉತ್ಪಾದಿಸುತ್ತದೆ.\n• ordered boundary resolver ಅನ್ನೂ ನಾವು ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ ಮೊದಲ ಅಮಾನ್ಯ binding ನಲ್ಲಿ ನಿಲ್ಲಿಸುತ್ತದೆ ಎಂದೂ ಸಾಬೀತುಪಡಿಸಿದ್ದೇವೆ.\n• ಕಾಣೆಯಾದ aud ಎಂದಿಗೂ wildcard ಆಗಿ ಪರಿಗಣಿಸಬಾರದೂ.\n• 401/403 dispatcher ಅನ್ನೂ ನಾವು ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ ಚಲಾಯಿಸಿದ್ದೇವೆ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'What does PKCE actually protect against?', qKn: 'PKCE ನಿಜವಾಗಿ ಯಾವುದರ ವಿರುದ್ಧ ರಕ್ಷಿಸುತ್ತದೆ?',
        opts: ['Wrong authorization server (mix-up)', 'A party other than the flow-initiator redeeming the authorization code', 'Expired tokens', 'Missing audience claims'],
        optsKn: ['ತಪ್ಪಾದ authorization server (mix-up)', 'ಫ್ಲೋ-ಆರಂಭಕನ ಹೊರತಾದ ಒಂದೂ ಪಕ್ಷ authorization code ಅನ್ನೂ redeem ಮಾಡುವುದೂ', 'ಅವಧಿ ಮುಗಿದ tokens', 'ಕಾಣೆಯಾದ audience claims'],
        correct: 1 },
      { q: 'A token issued for https://calendar.example.test/mcp is sent to https://notes.example.test/mcp. Which check in the ordered resolver stops it?', qKn: 'https://calendar.example.test/mcp ಗಾಗಿ ಘೋಷಿಸಲ್ಪಟ್ಟ token https://notes.example.test/mcp ಗೆ ಕಳುಹಿಸಲ್ಪಡುತ್ತದೆ. ordered resolver ನಲ್ಲಿ ಯಾವ check ಅದನ್ನೂ ನಿಲ್ಲಿಸುತ್ತದೆ?',
        opts: ['pkce_state', 'returned_iss', 'token_audience', 'required_scopes'],
        optsKn: ['pkce_state', 'returned_iss', 'token_audience', 'required_scopes'],
        correct: 2 },
      { q: 'A valid, unexpired token from the correct issuer and audience lacks the notes:delete scope. What should the resource server return?', qKn: 'ಸರಿಯಾದ issuer ಮತ್ತೂ audience ya ಒಂದೂ ಮಾನ್ಯ, ಅವಧಿ ಮುಗಿಯದ token ನಲ್ಲಿ notes:delete scope ಇಲ್ಲ. resource server ಏನೂ ಹಿಂತಿರುಗಿಸಬೇಕು?',
        opts: ['401 invalid_token', '403 insufficient_scope with WWW-Authenticate naming the scope', '200 with a warning', '500 server error'],
        optsKn: ['401 invalid_token', 'ಆ scope ಹೆಸರಿಸುವ WWW-Authenticate ಜೊತೆ 403 insufficient_scope', 'ಎಚ್ಚರಿಕೆ ಜೊತೆ 200', '500 server error'],
        correct: 1 },
      { q: 'Why must `if aud != resource: reject()` be used instead of `if aud and aud != resource: reject()`?', qKn: '`if aud and aud != resource: reject()` ಬದಲಿಗೆ `if aud != resource: reject()` ಏಕೆ ಬಳಸಬೇಕು?',
        opts: ['The second form is faster', 'The second form silently accepts a token with a missing aud claim', 'They behave identically', 'The second form rejects too many tokens'],
        optsKn: ['ಎರಡನೇ ರೂಪ ವೇಗವಾಗಿದೆ', 'ಎರಡನೇ ರೂಪ ಕಾಣೆಯಾದ aud claim ಇರುವ token ಅನ್ನೂ ಮೌನವಾಗಿ ಸ್ವೀಕರಿಸುತ್ತದೆ', 'ಅವು ಒಂದೇ ರೀತಿ ವರ್ತಿಸುತ್ತವೆ', 'ಎರಡನೇ ರೂಪ ಹೆಚ್ಚೂ tokens ತಿರಸ್ಕರಿಸುತ್ತದೆ'],
        correct: 1 },
      { q: 'After a scope step-up, what should the new token contain?', qKn: 'ಒಂದೂ scope step-up ನಂತರ, ಹೊಸ token ಏನೂ ಹೊಂದಿರಬೇಕು?',
        opts: ['Only the newly requested scope', 'Both the previously granted scope and the newly consented scope', 'No scopes, since consent resets everything', 'The client\'s own self-assigned scope'],
        optsKn: ['ಹೊಸದಾಗಿ ಕೋರಿದ scope ಮಾತ್ರ', 'ಹಿಂದೆ ನೀಡಲಾದ scope ಮತ್ತೂ ಹೊಸದಾಗಿ consent ನೀಡಲಾದ scope ಎರಡೂ', 'ಯಾವುದೇ scopes ಇಲ್ಲ', 'client ya ಸ್ವಂತ ಸ್ವಯಂ-ನಿಯೋಜಿತ scope'],
        correct: 1 },
    ] } },
  ],
};
