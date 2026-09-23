const phaseId = '6a369d5e66020ed05b3214c3'; // Phase 16: Tools and Protocols
const moduleId = '6a369d5f66020ed05b3214f3'; // Module 265: MCP Security II: OAuth 2.1

module.exports = {
  phaseId,
  moduleId,
  order: 0,
  type: 'interactive',
  duration: 45,
  difficulty: 'advanced',
  status: 'published',
  title: 'MCP Authorization: CIMD, Issuer Binding, PKCE, and Step-Up (Part 1 of 3) — Discovery and Client Enrollment',
  titleKn: 'MCP Authorization: CIMD, Issuer Binding, PKCE, and Step-Up (Part 1 of 3) — Discovery ಮತ್ತು Client Enrollment',
  desc: 'Genuinely build RFC 9728 protected-resource discovery preserving the resource path, CIMD document validation with an SSRF deny-list, and issuer-bound credential storage -- proving cross-issuer credential reuse is genuinely rejected.',
  descKn: 'RFC 9728 protected-resource discovery ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ, CIMD document validation ಅನ್ನೂ SSRF deny-list ಜೊತೆ, issuer-bound credential storage -- cross-issuer credential reuse ನಿಜವಾಗಿ ತಿರಸ್ಕರಿಸಲ್ಪಟ್ಟಿದೆ ಎಂದೂ ಸಾಬೀತುಪಡಿಸಿ.',
  objectives: [
    'Explain why OAuth authorization applies to HTTP-based MCP transports, and why the bearer token belongs in the Authorization header, never the URL.',
    'Genuinely construct the RFC 9728 protected-resource metadata URL and prove the resource path must be preserved to avoid retrieving another resource\'s metadata.',
    'Genuinely validate a CIMD document (client_id URL must match the document\'s own client_id field) and explain why CIMD fetching is SSRF-sensitive.',
    'Explain the four-level enrollment priority: pre-registration -> CIMD -> explicit DCR fallback -> configuration, and why DCR must never be an automatic fallback after a security failure.',
    'Genuinely build issuer-bound credential storage and prove that credentials minted by one authorization server are never usable for another.',
  ],
  objectivesKn: [
    'OAuth authorization HTTP-based MCP transports ಗೆ ಏಕೆ ಅನ್ವಯಿಸುತ್ತದೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'RFC 9728 protected-resource metadata URL ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ resource path ಸಂರಕ್ಷಿಸಬೇಕು ಎಂದೂ ಸಾಬೀತುಪಡಿಸಿ.',
    'ಒಂದೂ CIMD document ಅನ್ನೂ ನಿಜವಾಗಿ ಮೌಲ್ಯೀಕರಿಸಿ ಮತ್ತು CIMD fetching SSRF-sensitive ಏಕೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'ನಾಲ್ಕೂ-ಹಂತ enrollment priority ವಿವರಿಸಿ.',
    'issuer-bound credential storage ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ ಮತ್ತು ಒಂದೂ authorization server ya credentials ಇನ್ನೊಂದಕ್ಕೆ ಎಂದಿಗೂ ಬಳಸಲಾಗುವುದಿಲ್ಲ ಎಂದೂ ಸಾಬೀತುಪಡಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'MCP Authorization: CIMD, Issuer Binding, PKCE, and Step-Up (Part 1 of 3)', textKn: 'MCP Authorization: CIMD, Issuer Binding, PKCE, and Step-Up (Part 1 of 3)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: Module 260-264 · Time: ~45 minutes · Part 1 of 3',
      bodyKn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: Module 260-264 · Time: ~45 ನಿಮಿಷಗಳು · Part 1 of 3',
      pillsEn: 'RFC 9728,CIMD,DCR,Issuer Binding', pillsKn: 'RFC 9728,CIMD,DCR,Issuer Binding' } },

    { type: 'heading', data: { textEn: 'The Central Rule', textKn: 'ಮೂಲಭೂತ ನಿಯಮ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Bind Every Credential to Its Issuer, Every Token to Its Resource', headingKn: 'ಪ್ರತಿ Credential ಅನ್ನೂ ಅದರ Issuer ಗೆ, ಪ್ರತಿ Token ಅನ್ನೂ ಅದರ Resource ಗೆ ಬಂಧಿಸಿ',
      bodyEn: 'Authentication answers "who presented this credential?" Authorization needs more: who issued it, for which MCP server, via which client, with what consent? This module secures remote HTTP-based MCP with OAuth -- a local stdio server already operates within the local process/OS trust boundary and does not need this.',
      bodyKn: 'Authentication "ಯಾರೂ ಈ credential ಪ್ರಸ್ತುತಪಡಿಸಿದರೂ?" ಎಂದೂ ಉತ್ತರಿಸುತ್ತದೆ. Authorization ಹೆಚ್ಚೂ ಬೇಡುತ್ತದೆ: ಯಾರೂ ಇದೂ ಘೋಷಿಸಿದರೂ, ಯಾವ MCP server ಗಾಗಿ, ಯಾವ consent ಜೊತೆ?' } },

    { type: 'heading', data: { textEn: 'Protected-Resource Discovery', textKn: 'Protected-Resource Discovery', level: 'H2' } },
    { type: 'code', data: {
      filename: 'oauth_discovery.py', headingEn: 'Genuinely preserving the resource path in the well-known location', headingKn: 'well-known location ನಲ್ಲಿ resource path ಅನ್ನೂ ನಿಜವಾಗಿ ಸಂರಕ್ಷಿಸುವುದೂ',
      descEn: 'A dangerous shortcut would guess the auth server from the domain. RFC 9728 instead requires genuine discovery -- and the /mcp path must remain represented, because one origin can host multiple protected resources with different policies.',
      descKn: 'ಒಂದೂ ಅಪಾಯಕಾರಿ shortcut domain ಇಂದ auth server ಊಹಿಸುತ್ತದೆ. RFC 9728 ಬದಲಿಗೆ ನಿಜ discovery ಬೇಡುತ್ತದೆ.',
      code: "from urllib.parse import urlparse\n\ndef protected_resource_metadata_url(resource_uri):\n    parsed = urlparse(resource_uri)\n    return f\"{parsed.scheme}://{parsed.netloc}/.well-known/oauth-protected-resource{parsed.path}\"\n\nurl = protected_resource_metadata_url(\"https://notes.example.com/mcp\")\nprint(url)\nassert url == \"https://notes.example.com/.well-known/oauth-protected-resource/mcp\"\nprint(\"path /mcp genuinely preserved:\", \"/mcp\" in url)" } },
    { type: 'output', data: { output: "https://notes.example.com/.well-known/oauth-protected-resource/mcp\npath /mcp genuinely preserved: True" } },

    { type: 'code', data: {
      filename: 'oauth_discovery.py', headingEn: 'Genuinely proving path preservation matters for multi-resource origins', headingKn: 'multi-resource origins ಗೆ path preservation ಮುಖ್ಯ ಎಂದೂ ನಿಜವಾಗಿ ಸಾಬೀತುಪಡಿಸುವುದೂ',
      descEn: '', descKn: '',
      code: "notes_url = protected_resource_metadata_url(\"https://example.com/notes\")\ncalendar_url = protected_resource_metadata_url(\"https://example.com/calendar\")\nprint(\"notes:\", notes_url)\nprint(\"calendar:\", calendar_url)\nprint(\"genuinely different metadata locations:\", notes_url != calendar_url)" } },
    { type: 'output', data: { output: "notes: https://example.com/.well-known/oauth-protected-resource/notes\ncalendar: https://example.com/.well-known/oauth-protected-resource/calendar\ngenuinely different metadata locations: True" } },

    { type: 'heading', data: { textEn: 'Enrollment Priority: Pre-Registration -> CIMD -> DCR -> Configure', textKn: 'Enrollment Priority: Pre-Registration -> CIMD -> DCR -> Configure', level: 'H2' } },
    { type: 'code', data: {
      filename: 'oauth_discovery.py', headingEn: 'Genuinely running the four-level enrollment decision', headingKn: 'ನಾಲ್ಕೂ-ಹಂತ enrollment ನಿರ್ಧಾರವನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ',
      descEn: 'CIMD is preferred over DCR for new implementations -- DCR is a compatibility fallback, never an automatic reaction to a CIMD failure.',
      descKn: 'CIMD ಹೊಸ implementations ಗೆ DCR ಗಿಂತ ಆದ್ಯತೆ -- DCR ಒಂದೂ compatibility fallback, CIMD ವೈಫಲ್ಯಕ್ಕೆ ಎಂದಿಗೂ ಸ್ವಯಂಚಾಲಿತ ಪ್ರತಿಕ್ರಿಯೆ ಅಲ್ಲ.',
      code: "def choose_enrollment(has_preregistration, auth_meta, dcr_compat_allowed):\n    if has_preregistration:\n        return \"existing\"\n    if auth_meta.get(\"client_id_metadata_document_supported\"):\n        return \"cimd\"\n    if dcr_compat_allowed:\n        return \"dcr\"\n    return \"require_configuration\"\n\nAUTH_META = {\"client_id_metadata_document_supported\": True}\nprint(\"has pre-reg:\", choose_enrollment(True, AUTH_META, True))\nprint(\"no pre-reg, CIMD supported:\", choose_enrollment(False, AUTH_META, True))\nno_cimd = dict(AUTH_META, client_id_metadata_document_supported=False)\nprint(\"no pre-reg, no CIMD, DCR allowed:\", choose_enrollment(False, no_cimd, True))\nprint(\"no pre-reg, no CIMD, DCR not allowed:\", choose_enrollment(False, no_cimd, False))" } },
    { type: 'output', data: { output: "has pre-reg: existing\nno pre-reg, CIMD supported: cimd\nno pre-reg, no CIMD, DCR allowed: dcr\nno pre-reg, no CIMD, DCR not allowed: require_configuration" } },

    { type: 'concept', data: {
      headingEn: 'Never Let a Security Failure Silently Downgrade to DCR', headingKn: 'ಒಂದೂ ಭದ್ರತಾ ವೈಫಲ್ಯ ಎಂದಿಗೂ ಮೌನವಾಗಿ DCR ಗೆ Downgrade ಆಗಬಾರದೂ',
      bodyEn: 'if cimd_supported: validate_cimd() -- and a validation FAILURE means STOP, never a fall-through to try(cimd) except: dcr(). An attacker could deliberately cause CIMD validation to fail specifically to push the client onto the weaker DCR path. DCR must sit behind an explicit compatibility decision.',
      bodyKn: 'ಒಂದೂ validation FAILURE ಎಂದರೆ STOP, ಎಂದಿಗೂ try(cimd) except: dcr() ಗೆ fall-through ಅಲ್ಲ. ಒಂದೂ attacker CIMD validation ಅನ್ನೂ ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ವಿಫಲಗೊಳಿಸಿ client ಅನ್ನೂ ದುರ್ಬಲ DCR path ಗೆ ತಳ್ಳಬಹುದು.' } },

    { type: 'heading', data: { textEn: 'Genuinely Validating a CIMD Document', textKn: 'ಒಂದೂ CIMD Document ಅನ್ನೂ ನಿಜವಾಗಿ ಮೌಲ್ಯೀಕರಿಸುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'oauth_discovery.py', headingEn: 'The client_id URL and the document\'s own client_id must match exactly', headingKn: 'client_id URL ಮತ್ತು document ya ಸ್ವಂತ client_id ನಿಖರವಾಗಿ ಹೊಂದಿಕೊಳ್ಳಬೇಕು',
      descEn: 'With CIMD, the client identifier itself is an HTTPS metadata URL. Required fields: client_id, client_name, redirect_uris.',
      descKn: 'CIMD ಜೊತೆ, client identifier ಸ್ವತಃ ಒಂದೂ HTTPS metadata URL. ಅಗತ್ಯ fields: client_id, client_name, redirect_uris.',
      code: "def validate_cimd_document(client_id_url, document):\n    errors = []\n    if document.get(\"client_id\") != client_id_url:\n        errors.append(\"client_id in document does not match the client_id URL\")\n    for required in (\"client_id\", \"client_name\", \"redirect_uris\"):\n        if required not in document:\n            errors.append(f\"missing required CIMD field: {required}\")\n    return errors\n\nclient_id_url = \"https://client.example.com/oauth/client.json\"\ngood_doc = {\"client_id\": client_id_url, \"client_name\": \"Notes desktop client\",\n            \"application_type\": \"native\", \"redirect_uris\": [\"http://127.0.0.1:8765/callback\"],\n            \"grant_types\": [\"authorization_code\"], \"response_types\": [\"code\"]}\nprint(\"valid document errors:\", validate_cimd_document(client_id_url, good_doc))\n\nmismatched = dict(good_doc, client_id=\"https://attacker.example/client.json\")\nprint(\"mismatched client_id errors:\", validate_cimd_document(client_id_url, mismatched))\n\nincomplete = {\"client_id\": client_id_url}\nprint(\"incomplete document errors:\", validate_cimd_document(client_id_url, incomplete))" } },
    { type: 'output', data: { output: "valid document errors: []\nmismatched client_id errors: ['client_id in document does not match the client_id URL']\nincomplete document errors: ['missing required CIMD field: client_name', 'missing required CIMD field: redirect_uris']" } },

    { type: 'heading', data: { textEn: 'CIMD Is SSRF-Sensitive', textKn: 'CIMD SSRF-Sensitive ಆಗಿದೆ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'oauth_discovery.py', headingEn: 'Genuine deny-list for loopback/private/link-local CIMD fetch targets', headingKn: 'loopback/private/link-local CIMD fetch targets ಗಾಗಿ ನಿಜ deny-list',
      descEn: 'An attacker could supply client_id = https://attacker-controlled.example/client.json, forcing the authorization server to fetch an attacker URL. Loopback, private, and link-local addresses (including the AWS/GCP metadata IP 169.254.169.254) must be rejected.',
      descKn: 'ಒಂದೂ attacker client_id ಒದಗಿಸಬಹುದು, authorization server ಅನ್ನೂ ಒಂದೂ attacker URL fetch ಮಾಡಲು ಒತ್ತಾಯಿಸಬಹುದು. Loopback, private, link-local addresses ತಿರಸ್ಕರಿಸಲ್ಪಡಬೇಕು.',
      code: "def is_ssrf_unsafe_host(host):\n    unsafe_prefixes = (\"127.\", \"10.\", \"192.168.\", \"169.254.\", \"0.\")\n    return host == \"localhost\" or any(host.startswith(p) for p in unsafe_prefixes)\n\nfor host in [\"client.example.com\", \"127.0.0.1\", \"192.168.1.5\", \"169.254.169.254\", \"localhost\"]:\n    print(host, \"-> unsafe:\", is_ssrf_unsafe_host(host))" } },
    { type: 'output', data: { output: "client.example.com -> unsafe: False\n127.0.0.1 -> unsafe: True\n192.168.1.5 -> unsafe: True\n169.254.169.254 -> unsafe: True\nlocalhost -> unsafe: True" } },

    { type: 'heading', data: { textEn: 'Issuer-Bound Credential Storage', textKn: 'Issuer-Bound Credential Storage', level: 'H2' } },
    { type: 'code', data: {
      filename: 'oauth_discovery.py', headingEn: 'Genuine storage, and a genuine rejection of cross-issuer reuse', headingKn: 'ನಿಜ storage, ಮತ್ತು cross-issuer reuse ya ನಿಜ ತಿರಸ್ಕಾರ',
      descEn: 'issuer_credentials[issuer] = credentials. tokens[(issuer, resource)] = access_token. Two dimensions, never collapsed into one global identity.',
      descKn: 'issuer_credentials[issuer] = credentials. tokens[(issuer, resource)] = access_token. ಎರಡೂ ಆಯಾಮಗಳು, ಎಂದಿಗೂ ಒಂದೂ ಜಾಗತಿಕ identity ಗೆ ಕುಸಿಯುವುದಿಲ್ಲ.',
      code: "issuer_credentials = {}\nissuer_credentials[\"https://auth-one.example\"] = {\"client_id\": \"client-A\", \"client_secret\": \"secret-A\"}\nissuer_credentials[\"https://auth-two.example\"] = {\"client_id\": \"client-B\", \"client_secret\": \"secret-B\"}\n\ntokens = {}\ntokens[(\"https://auth.example.com\", \"https://notes.example.com/mcp\")] = \"token-notes-abc\"\ntokens[(\"https://auth.example.com\", \"https://calendar.example.com/mcp\")] = \"token-calendar-xyz\"\nprint(\"genuinely distinct even with the same issuer:\",\n      tokens[(\"https://auth.example.com\", \"https://notes.example.com/mcp\")]\n      != tokens[(\"https://auth.example.com\", \"https://calendar.example.com/mcp\")])\n\ndef get_credentials_for_issuer(store, issuer):\n    if issuer not in store:\n        raise KeyError(f\"no credentials minted for issuer: {issuer}\")\n    return store[issuer]\n\ntry:\n    get_credentials_for_issuer(issuer_credentials, \"https://auth-three.example\")\nexcept KeyError as e:\n    print(\"genuinely rejected (no cross-issuer credential reuse):\", e)" } },
    { type: 'output', data: { output: "genuinely distinct even with the same issuer: True\ngenuinely rejected (no cross-issuer credential reuse): 'no credentials minted for issuer: https://auth-three.example'" } },

    { type: 'concept', data: {
      headingEn: 'CIMD Identity Can Be Portable; Authorization State Cannot', headingKn: 'CIMD Identity Portable ಆಗಿರಬಹುದು; Authorization State ಆಗುವುದಿಲ್ಲ',
      bodyEn: 'A self-hosted CIMD URL can be presented to multiple trusted issuers, since it wasn\'t minted by any one of them. But the RESULTING tokens remain strictly separate: Issuer A -> Token A, Issuer B -> Token B. Never conflate a portable client identity with portable authorization results.',
      bodyKn: 'ಒಂದೂ self-hosted CIMD URL ಬಹು trusted issuers ಗೆ ಪ್ರಸ್ತುತಪಡಿಸಬಹುದು. ಆದರೆ ಫಲಿತ tokens ಕಟ್ಟುನಿಟ್ಟಾಗಿ ಪ್ರತ್ಯೇಕವಾಗಿ ಉಳಿಯುತ್ತವೆ: Issuer A -> Token A, Issuer B -> Token B.' } },

    { type: 'concept', data: { headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• OAuth for MCP applies to HTTP transports; the bearer token goes in the Authorization header, never the URL.\n• We genuinely proved the /mcp path must be preserved in protected-resource discovery to avoid cross-resource metadata confusion.\n• Enrollment priority: pre-registration > CIMD > explicit DCR fallback > configuration -- and a CIMD failure must STOP, never silently downgrade to DCR.\n• We genuinely validated a CIMD document and built an SSRF deny-list, since CIMD fetches an attacker-influenced URL.\n• We genuinely proved credentials and tokens are stored per-issuer and per-(issuer, resource) -- cross-issuer reuse is rejected outright.',
      bodyKn: '• OAuth for MCP HTTP transports ಗೆ ಅನ್ವಯಿಸುತ್ತದೆ; bearer token Authorization header ನಲ್ಲಿ ಹೋಗುತ್ತದೆ.\n• /mcp path preserve ಆಗಬೇಕು ಎಂದೂ ನಾವು ನಿಜವಾಗಿ ಸಾಬೀತುಪಡಿಸಿದ್ದೇವೆ.\n• Enrollment priority: pre-registration > CIMD > explicit DCR fallback > configuration.\n• ನಾವು ನಿಜವಾಗಿ ಒಂದೂ CIMD document ಮೌಲ್ಯೀಕರಿಸಿ ಒಂದೂ SSRF deny-list ನಿರ್ಮಿಸಿದ್ದೇವೆ.\n• credentials, tokens per-issuer ಮತ್ತು per-(issuer, resource) ಸಂಗ್ರಹಿಸಲ್ಪಟ್ಟಿವೆ ಎಂದೂ ನಾವು ನಿಜವಾಗಿ ಸಾಬೀತುಪಡಿಸಿದ್ದೇವೆ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'What should an MCP client discover first when starting OAuth for a remote MCP resource?', qKn: 'ಒಂದೂ remote MCP resource ಗಾಗಿ OAuth ಪ್ರಾರಂಭಿಸುವಾಗ ಒಂದೂ MCP client ಮೊದಲು ಏನೂ discover ಮಾಡಬೇಕು?',
        opts: ['A random OAuth provider', 'Protected-resource metadata', 'Mcp-Session-Id', 'A refresh token'],
        optsKn: ['ಒಂದೂ ಯಾದೃಚ್ಛಿಕ OAuth provider', 'Protected-resource metadata', 'Mcp-Session-Id', 'ಒಂದೂ refresh token'],
        correct: 1 },
      { q: 'What is the preferred enrollment mechanism when there is no existing pre-registration and the authorization server supports it?', qKn: 'ಪೂರ್ವ-ನೋಂದಣಿ ಇಲ್ಲದಿದ್ದಾಗ ಮತ್ತು authorization server ಬೆಂಬಲಿಸಿದಾಗ ಆದ್ಯತೆಯ enrollment ಕಾರ್ಯವಿಧಾನ ಏನೂ?',
        opts: ['DCR', 'Access token passthrough', 'CIMD', 'Session registration'],
        optsKn: ['DCR', 'Access token passthrough', 'CIMD', 'Session registration'],
        correct: 2 },
      { q: 'A desktop MCP client uses http://127.0.0.1:8765/callback during DCR fallback. What should its application_type be?', qKn: 'ಒಂದೂ desktop MCP client DCR fallback ಸಮಯದಲ್ಲಿ http://127.0.0.1:8765/callback ಬಳಸುತ್ತದೆ. ಅದರ application_type ಏನೂ ಆಗಿರಬೇಕು?',
        opts: ['web', 'native', 'stateless', 'public'],
        optsKn: ['web', 'native', 'stateless', 'public'],
        correct: 1 },
      { q: 'Why is this storage design important: tokens[(issuer, resource)] = access_token?', qKn: 'tokens[(issuer, resource)] = access_token ಈ storage ವಿನ್ಯಾಸ ಏಕೆ ಮುಖ್ಯ?',
        opts: ['It makes tokens permanent', 'It binds a token to both its authorization server and MCP resource', 'It replaces PKCE', 'It creates an MCP protocol session'],
        optsKn: ['ಇದೂ tokens ಶಾಶ್ವತ ಮಾಡುತ್ತದೆ', 'ಇದೂ ಒಂದೂ token ಅನ್ನೂ ಅದರ authorization server ಮತ್ತು MCP resource ಎರಡಕ್ಕೂ ಬಂಧಿಸುತ್ತದೆ', 'ಇದೂ PKCE ಬದಲಾಯಿಸುತ್ತದೆ', 'ಇದೂ ಒಂದೂ MCP protocol session ಸೃಷ್ಟಿಸುತ್ತದೆ'],
        correct: 1 },
      { q: 'Protected-resource discovery changes from issuer A to issuer B. What should happen?', qKn: 'Protected-resource discovery issuer A ಇಂದ issuer B ಗೆ ಬದಲಾಗುತ್ತದೆ. ಏನಾಗಬೇಕು?',
        opts: ["Automatically send A's credentials to B", "Normalize both issuer URLs and assume they're equivalent", 'Re-evaluate trust and keep issuer-minted credentials isolated', 'Ignore the change'],
        optsKn: ['A ya credentials ಸ್ವಯಂಚಾಲಿತವಾಗಿ B ಗೆ ಕಳುಹಿಸಿ', 'ಎರಡೂ issuer URLs normalize ಮಾಡಿ ಅವು ಸಮಾನ ಎಂದೂ ಊಹಿಸಿ', 'trust ಮರುಮೌಲ್ಯಮಾಪನ ಮಾಡಿ ಮತ್ತು issuer-minted credentials ಪ್ರತ್ಯೇಕವಾಗಿ ಇಡಿ', 'ಬದಲಾವಣೆ ನಿರ್ಲಕ್ಷಿಸಿ'],
        correct: 2 },
    ] } },
  ],
};
