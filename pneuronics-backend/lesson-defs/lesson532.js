const phaseId = '6a369d5e66020ed05b3214c3';
const moduleId = '6a369d6066020ed05b3214f6';

module.exports = {
  phaseId,
  moduleId,
  order: 2,
  type: 'interactive',
  duration: 40,
  difficulty: 'advanced',
  status: 'published',
  title: 'Stateless MCP Gateways and Registry Admission (Part 3 of 3) — Legacy Isolation, Registry vs Live Discovery, and the Full Flow',
  titleKn: 'Stateless MCP Gateways and Registry Admission (Part 3 of 3) — Legacy Isolation, Registry vs Live Discovery, ಮತ್ತೂ Full Flow',
  desc: 'Genuinely run the aligned-release check against a matching descriptor, then break it three separate ways -- unsupported protocol version, missing capability, and descriptor drift -- proving each failure is caught by a distinct comparison.',
  descKn: 'aligned-release check ಅನ್ನೂ ಒಂದೂ ಹೊಂದಾಣಿಕೆಯ descriptor ವಿರುದ್ಧ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ, ನಂತರ ಅದನ್ನೂ ಮೂರೂ ಪ್ರತ್ಯೇಕ ರೀತಿಯಲ್ಲಿ ಮುರಿಯಿರಿ.',
  objectives: [
    'Explain why legacy compatibility must sit behind an explicit, version-gated adapter rather than scattered inline checks.',
    'Explain why a legacy session identifier must never become the modern authorization identity, rate-limit key, or backend route.',
    'Genuinely run an aligned-release check across protocol version, capability, and descriptor digest, and genuinely break each dimension independently to see which one halts release.',
    'Explain "Publication is not admission" as the module\'s central Registry-vs-live-discovery principle, and trace the complete tool-call, streaming, MRTR, and task walkthroughs end to end.',
    'State the module\'s three-layer trust model from memory: publication != admission != runtime authorization.',
  ],
  objectivesKn: [
    'Legacy compatibility ಒಂದೂ ಸ್ಪಷ್ಟ, version-gated adapter ಹಿಂದೆ ಏಕೆ ಕುಳಿತಿರಬೇಕೂ ಎಂದೂ ವಿವರಿಸಿ.',
    'ಒಂದೂ legacy session identifier ಎಂದಿಗೂ modern authorization identity ಆಗಬಾರದೂ ಎಂದೂ ವಿವರಿಸಿ.',
    'protocol version, capability, descriptor digest ಮೂಲಕ ಒಂದೂ aligned-release check ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ.',
    '"Publication is not admission" ಅನ್ನೂ module ya ಕೇಂದ್ರ ತತ್ವವಾಗಿ ವಿವರಿಸಿ.',
    'module ya ಮೂರೂ-ಪದರ trust model ಅನ್ನೂ ನೆನಪಿನಿಂದ ಹೇಳಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Stateless MCP Gateways and Registry Admission (Part 3 of 3)', textKn: 'Stateless MCP Gateways and Registry Admission (Part 3 of 3)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: Parts 1-2 of this module · Time: ~40 minutes · Part 3 of 3',
      bodyKn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: ಈ module ya Parts 1-2 · Time: ~40 ನಿಮಿಷಗಳು · Part 3 of 3',
      pillsEn: 'Legacy Adapter,Release Alignment,Descriptor Drift,Full Flow', pillsKn: 'Legacy Adapter,Release Alignment,Descriptor Drift,Full Flow' } },

    { type: 'heading', data: { textEn: 'The Legacy Adapter: an Explicit, Version-Gated Boundary', textKn: 'Legacy Adapter: ಒಂದೂ ಸ್ಪಷ್ಟ, Version-Gated Boundary', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Dispatch on Protocol Era, Never Sprinkle Checks Everywhere', headingKn: 'Protocol Era ಮೇಲೆ Dispatch ಮಾಡಿ, Checks ಎಂದಿಗೂ ಎಲ್ಲೆಡೆ ಚದುರಿಸಬೇಡಿ',
      bodyEn: 'Correct: if protocol_era == "modern": handle_modern_request(request); elif protocol_era == "legacy": legacy_adapter.handle(request); else: raise UnsupportedProtocol(). Wrong: scattered if session_id / if old_initialize / if old_get_stream checks throughout the modern code path -- this gradually contaminates modern invariants with assumptions inherited from the old protocol.',
      bodyKn: 'ಸರಿಯಾದೂ: protocol_era ಮೇಲೆ ಸ್ಪಷ್ಟ dispatch. ತಪ್ಪೂ: modern code path ಉದ್ದಕ್ಕೂ ಚದುರಿದ checks -- ಇದೂ ಕ್ರಮೇಣ modern invariants ಅನ್ನೂ ಹಳೆಯ protocol ಇಂದ ಆನುವಂಶಿಕವಾಗಿ ಪಡೆದ ಊಹೆಗಳಿಂದ ಕಲುಷಿತಗೊಳಿಸುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Legacy Session IDs Must Never Become Modern Authorization Identity', textKn: 'Legacy Session IDs ಎಂದಿಗೂ Modern Authorization Identity ಆಗಬಾರದೂ', level: 'H2' } },
    { type: 'table', data: {
      headingEn: 'Where Mcp-Session-Id: xyz123 must stay vs must never go', headers: ['Stays inside', 'Must never become'],
      rows: [
        ['Legacy adapter internal state', 'authorization identity = xyz123'],
        ['Legacy adapter internal state', 'rate limit key = xyz123'],
        ['Legacy adapter internal state', 'backend route = xyz123'],
      ] } },
    { type: 'concept', data: {
      headingEn: 'Modern Authority Comes From Elsewhere Entirely', headingKn: 'Modern Authority ಸಂಪೂರ್ಣವಾಗಿ ಬೇರೆ ಕಡೆಯಿಂದ ಬರುತ್ತದೆ',
      bodyEn: 'The modern request still derives authority from: authenticated principal, issuer/resource (Module 265), qualified route, arguments, current policy, descriptor pin -- never from a compatibility session identifier the legacy adapter happens to be holding.',
      bodyKn: 'Modern request ಇನ್ನೂ authenticated principal, issuer/resource, qualified route, arguments, current policy, descriptor pin ಇಂದ authority ಪಡೆಯುತ್ತದೆ -- legacy adapter ಹೊಂದಿರುವ ಒಂದೂ compatibility session identifier ಇಂದ ಎಂದಿಗೂ ಅಲ್ಲ.' } },

    { type: 'heading', data: { textEn: 'Avoid Silent Downgrades', textKn: 'Silent Downgrades ತಪ್ಪಿಸಿ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'A Failure Does Not Mean "This Must Be Legacy"', headingKn: 'ಒಂದೂ ವೈಫಲ್ಯ ಎಂದರೆ "ಇದೂ Legacy ಆಗಿರಲೇಬೇಕೂ" ಎಂದೂ ಅಲ್ಲ',
      bodyEn: 'A modern-protocol attempt that fails could mean: network failure, authentication failure, malformed response, policy rejection, attack, or configuration problem -- not necessarily "this server needs the legacy path." The lesson recommends a bounded discovery probe plus an explicit fallback policy, never a silent try-modern-then-silently-try-old chain.',
      bodyKn: 'ಒಂದೂ modern-protocol ಪ್ರಯತ್ನ ವಿಫಲಗೊಂಡರೆ ಅದೂ ಅರ್ಥ: network failure, authentication failure, malformed response, policy rejection, attack, ಅಥವಾ configuration problem ಆಗಿರಬಹುದೂ -- "ಈ server legacy path ಬೇಡುತ್ತದೆ" ಎಂದೂ ಅಗತ್ಯವಿಲ್ಲ.' } },

    { type: 'heading', data: { textEn: 'Registry vs Live Discovery vs Approved State', textKn: 'Registry vs Live Discovery vs Approved State', level: 'H2' } },
    { type: 'table', data: {
      headingEn: 'Three information sources the gateway compares before exposing a backend', headers: ['Source', 'Question Answered'],
      rows: [
        ['Registry publication', 'What was published? (name, version, package, endpoint)'],
        ['Live server/discover', 'What is running now? (supported protocol versions, capabilities)'],
        ['Approved descriptor digest', 'What did we approve? (the pinned digest from admission)'],
      ] } },
    { type: 'concept', data: {
      headingEn: 'Publication Is Not Admission', headingKn: 'Publication Admission ಅಲ್ಲ',
      bodyEn: 'This is the lesson\'s central principle, first introduced in Part 1 and now completed: a gateway must compare all three sources before ADMIT/EXPOSE, never trusting Registry presence alone.',
      bodyKn: 'ಇದೂ module ya ಕೇಂದ್ರ ತತ್ವ: ಒಂದೂ gateway ADMIT/EXPOSE ಮಾಡುವ ಮೊದಲೂ ಎಲ್ಲಾ ಮೂರೂ ಮೂಲಗಳನ್ನೂ ಹೋಲಿಸಬೇಕೂ.' } },

    { type: 'heading', data: { textEn: 'Genuinely Running the Aligned-Release Check', textKn: 'Aligned-Release Check ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'gateway_admission.py', headingEn: 'Genuine release check: aligned admission, wrong protocol, missing capability, and descriptor drift', headingKn: 'ನಿಜ release check: aligned admission, ತಪ್ಪಾದ protocol, ಕಾಣೆಯಾದ capability, descriptor drift',
      descEn: 'Four scenarios run against the same check_release() logic, each breaking exactly one of the three alignment dimensions: protocol version, capability set, and descriptor digest.',
      descKn: 'ನಾಲ್ಕೂ ಸನ್ನಿವೇಶಗಳು ಒಂದೇ check_release() logic ವಿರುದ್ಧ ಚಲಿಸುತ್ತವೆ, ಪ್ರತಿಯೊಂದೂ ಮೂರೂ alignment ಆಯಾಮಗಳಲ್ಲಿ ನಿಖರವಾಗಿ ಒಂದನ್ನೂ ಮುರಿಯುತ್ತದೆ.',
      code: "import hashlib, json\n\ndef canonical_digest(descriptor):\n    canonical = json.dumps(descriptor, sort_keys=True, separators=(\",\", \":\"))\n    return \"sha256:\" + hashlib.sha256(canonical.encode()).hexdigest()[:16]\n\ndef check_release(approved_digest, live_digest, live_supported_versions, required_version, live_capabilities, required_capability):\n    if required_version not in live_supported_versions:\n        return {\"release\": False, \"reason\": \"protocol version incompatible\"}\n    if required_capability not in live_capabilities:\n        return {\"release\": False, \"reason\": \"capability mismatch\"}\n    if approved_digest != live_digest:\n        return {\"release\": False, \"reason\": \"descriptor drift detected\"}\n    return {\"release\": True, \"reason\": \"aligned release\"}\n\ndescriptor_v4 = {\"name\": \"notes.search\", \"inputSchema\": {\"query\": \"string\"}, \"version\": \"4.0.0\"}\napproved_digest = canonical_digest(descriptor_v4)\nlive_digest_same = canonical_digest(descriptor_v4)\n\nprint(\"=== aligned ===\")\nprint(check_release(approved_digest, live_digest_same, [\"2026-07-28\"], \"2026-07-28\", {\"tools\"}, \"tools\"))\n\nprint(\"=== protocol version unsupported ===\")\nprint(check_release(approved_digest, live_digest_same, [\"2025-old-version\"], \"2026-07-28\", {\"tools\"}, \"tools\"))\n\nprint(\"=== capability mismatch ===\")\nprint(check_release(approved_digest, live_digest_same, [\"2026-07-28\"], \"2026-07-28\", set(), \"tools\"))\n\nprint(\"=== descriptor drift (name unchanged, schema changed) ===\")\ndescriptor_v5 = {\"name\": \"notes.search\", \"inputSchema\": {\"query\": \"string\", \"limit\": \"int\"}, \"version\": \"5.0.0\"}\nlive_digest_drifted = canonical_digest(descriptor_v5)\nprint(check_release(approved_digest, live_digest_drifted, [\"2026-07-28\"], \"2026-07-28\", {\"tools\"}, \"tools\"))" } },
    { type: 'output', data: { output: "=== aligned ===\n{'release': True, 'reason': 'aligned release'}\n=== protocol version unsupported ===\n{'release': False, 'reason': 'protocol version incompatible'}\n=== capability mismatch ===\n{'release': False, 'reason': 'capability mismatch'}\n=== descriptor drift (name unchanged, schema changed) ===\n{'release': False, 'reason': 'descriptor drift detected'}" } },

    { type: 'concept', data: {
      headingEn: 'Registry Presence Cannot Override Protocol Incompatibility', headingKn: 'Registry Presence Protocol Incompatibility ಅನ್ನೂ Override ಮಾಡಲಾಗುವುದಿಲ್ಲ',
      bodyEn: 'Even when Registry publication and provenance both check out, an unsupported live protocol version alone is sufficient to block release. The check_release() run above proves this directly: identical descriptor and identical capabilities, but the wrong supported-versions list still halts release with "protocol version incompatible" before the descriptor comparison is even reached.',
      bodyKn: 'Registry publication ಮತ್ತೂ provenance ಎರಡೂ ಸರಿಯಾಗಿದ್ದರೂ, ಒಂದೂ ಬೆಂಬಲಿತವಲ್ಲದ live protocol version ಒಂದೇ release ಅನ್ನೂ ತಡೆಯಲು ಸಾಕೂ.' } },

    { type: 'concept', data: {
      headingEn: 'Descriptor Drift Is the Most Security-Sensitive Case', headingKn: 'Descriptor Drift ಅತ್ಯಂತ Security-Sensitive Case',
      bodyEn: 'Even when the tool name (notes.search) is unchanged, a live digest that no longer matches the approved digest must trigger: remove from tools/list, reject direct calls, audit, require re-approval. The gateway must never silently replace the approved pin just because the name still looks familiar.',
      bodyKn: 'tool ya ಹೆಸರೂ (notes.search) ಬದಲಾಗದಿದ್ದರೂ, approved digest ಗೆ ಇನ್ನೂ ಹೊಂದಿಕೆಯಾಗದ ಒಂದೂ live digest ಪ್ರಚೋದಿಸಬೇಕೂ: tools/list ಇಂದ ತೆಗೆದುಹಾಕಿ, ನೇರ calls ತಿರಸ್ಕರಿಸಿ, audit ಮಾಡಿ, ಮರು-ಅನುಮೋದನೆ ಬೇಡಿ.' } },

    { type: 'heading', data: { textEn: 'Why Display Names Are Not Security Identity', textKn: 'Display Names Security Identity ಏಕೆ ಅಲ್ಲ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'serverInfo.name Is a Self-Reported Claim, Not Evidence', headingKn: 'serverInfo.name ಒಂದೂ ಸ್ವಯಂ-ವರದಿ claim, evidence ಅಲ್ಲ',
      bodyEn: 'A backend saying serverInfo.name = "TrustedBank MCP" is exactly as trustworthy as a stranger introducing themselves by any name they like. It establishes none of: publisher identity, artifact provenance, authorization issuer, or approved endpoint. Security identity must come from the admission record\'s verified evidence (Part 1), never from a friendly display string.',
      bodyKn: 'ಒಂದೂ backend serverInfo.name = "TrustedBank MCP" ಎಂದೂ ಹೇಳುವುದೂ ಒಂದೂ ಅಪರಿಚಿತರು ತಮಗೆ ಇಷ್ಟವಾದ ಯಾವುದೇ ಹೆಸರಿನಿಂದ ತಮ್ಮನ್ನೂ ಪರಿಚಯಿಸಿಕೊಳ್ಳುವಷ್ಟೂ ವಿಶ್ವಾಸಾರ್ಹ.' } },

    { type: 'heading', data: { textEn: 'The Complete Tool Call, One More Time', textKn: 'ಸಂಪೂರ್ಣ Tool Call, ಇನ್ನೊಮ್ಮೆ', level: 'H2' } },
    { type: 'diagram', data: {
      titleEn: 'From Alice\'s request to the audited, credential-mediated backend call', titleKn: 'Alice ya request ಇಂದ audited, credential-mediated backend call ವರೆಗೆ',
      contentEn: 'Alice -> Bearer token -> authenticate principal\n  -> validate protocol (JSON-RPC, _meta, MCP-Protocol-Version)\n  -> verify Mcp-Method == Mcp-Name == body (else -32020 before backend lookup)\n  -> resolve qualified route: notes.search -> Notes backend : search\n  -> verify admission record approved\n  -> verify descriptor pin: approved digest == live digest\n  -> runtime policy check (Module 265 issuer/audience/scope rules apply here too)\n  -> ALLOW -> rate limit -> credential mediation (never forward Alice\'s token)\n  -> fresh backend request (new id, gateway client metadata)\n  -> Backend executes -> complete | input_required (MRTR) | task\n  -> validate result -> audit (no bearer tokens in the audit record) -> return to Alice' } },

    { type: 'concept', data: { headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Legacy support belongs behind an explicit, version-gated adapter -- dispatch on protocol_era, never scatter compatibility checks through modern code.\n• A legacy session identifier must never become the modern authorization identity, rate-limit key, or backend route.\n• A protocol failure does not automatically mean "this server is legacy" -- silent downgrade is a security risk; use a bounded probe and an explicit fallback policy instead.\n• We genuinely ran the aligned-release check across four scenarios and proved each of protocol version, capability set, and descriptor digest independently gates release.\n• serverInfo.name and other self-reported display fields are never security identity -- only the admission record\'s verified evidence is.\n• The module\'s single sentence: publication feeds admission evidence, descriptor pins protect approved contracts, qualified names make routing deterministic, and runtime policy re-authorizes every operation.',
      bodyKn: '• Legacy support ಒಂದೂ ಸ್ಪಷ್ಟ, version-gated adapter ಹಿಂದೆ ಸೇರಿದೆ.\n• ಒಂದೂ legacy session identifier ಎಂದಿಗೂ modern authorization identity ಆಗಬಾರದೂ.\n• ಒಂದೂ protocol failure ಸ್ವಯಂಚಾಲಿತವಾಗಿ "ಈ server legacy" ಎಂದೂ ಅರ್ಥವಲ್ಲ.\n• ನಾಲ್ಕೂ ಸನ್ನಿವೇಶಗಳಲ್ಲಿ aligned-release check ಅನ್ನೂ ನಾವು ನಿಜವಾಗಿ ಚಲಾಯಿಸಿದ್ದೇವೆ.\n• serverInfo.name ಎಂದಿಗೂ security identity ಅಲ್ಲ.\n• Module ya ಒಂದೂ ವಾಕ್ಯ: publication admission evidence ಒದಗಿಸುತ್ತದೆ, descriptor pins approved contracts ರಕ್ಷಿಸುತ್ತವೆ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Why should legacy support be placed behind a dedicated adapter?', qKn: 'Legacy support ಏಕೆ ಒಂದೂ ಮೀಸಲಾದ adapter ಹಿಂದೆ ಇಡಬೇಕೂ?',
        opts: ['To make all modern requests use sessions', 'To prevent old handshake/session assumptions from leaking into modern routing and authorization', 'Because legacy servers cannot expose tools', 'To avoid authentication'],
        optsKn: ['ಎಲ್ಲಾ modern requests ಗಳೂ sessions ಬಳಸುವಂತೆ ಮಾಡಲು', 'ಹಳೆಯ handshake/session ಊಹೆಗಳೂ modern routing ಗೆ ಸೋರಿಕೆಯಾಗುವುದನ್ನೂ ತಡೆಯಲು', 'legacy servers tools expose ಮಾಡಲಾಗುವುದಿಲ್ಲವಾದ್ದರಿಂದ', 'authentication ತಪ್ಪಿಸಲು'],
        correct: 1 },
      { q: 'Registry publication and live discovery agree, but the live descriptor digest differs from the approved digest. What should happen?', qKn: 'Registry publication ಮತ್ತೂ live discovery ಒಪ್ಪುತ್ತವೆ, ಆದರೆ live descriptor digest approved digest ಇಂದ ಭಿನ್ನವಾಗಿದೆ. ಏನಾಗಬೇಕೂ?',
        opts: ['Automatically replace the pin', 'Ignore it because the Registry agrees', 'Stop exposing/reject the tool until the change is approved', 'Create Mcp-Session-Id'],
        optsKn: ['pin ಅನ್ನೂ ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಬದಲಾಯಿಸಿ', 'Registry ಒಪ್ಪುವುದರಿಂದ ಅದನ್ನೂ ನಿರ್ಲಕ್ಷಿಸಿ', 'ಬದಲಾವಣೆ ಅನುಮೋದಿಸುವವರೆಗೂ tool ಅನ್ನೂ expose ಮಾಡುವುದನ್ನೂ ನಿಲ್ಲಿಸಿ/ತಿರಸ್ಕರಿಸಿ', 'Mcp-Session-Id ರಚಿಸಿ'],
        correct: 2 },
      { q: 'What security meaning should the gateway assign to serverInfo.name?', qKn: 'gateway serverInfo.name ಗೆ ಯಾವ security ಅರ್ಥ ನೀಡಬೇಕೂ?',
        opts: ['Verified publisher identity', 'Authorization principal', 'Display/diagnostic information, not security identity', 'Backend credential'],
        optsKn: ['ಪರಿಶೀಲಿಸಲಾದ publisher identity', 'Authorization principal', 'Display/diagnostic information, security identity ಅಲ್ಲ', 'Backend credential'],
        correct: 2 },
      { q: 'A live server reports only supportedVersions: [2025-old-version] while the gateway requires 2026-07-28, but Registry and descriptor checks otherwise pass. What happens?', qKn: 'ಒಂದೂ live server supportedVersions: [2025-old-version] ಮಾತ್ರ ವರದಿ ಮಾಡುತ್ತದೆ ಆದರೆ gateway 2026-07-28 ಬೇಡುತ್ತದೆ. ಏನಾಗುತ್ತದೆ?',
        opts: ['Release proceeds since Registry and descriptor agree', 'Release is blocked -- Registry presence cannot override protocol incompatibility', 'The gateway silently falls back to the legacy adapter', 'The gateway upgrades the server\'s protocol version automatically'],
        optsKn: ['Registry ಮತ್ತೂ descriptor ಒಪ್ಪುವುದರಿಂದ release ಮುಂದುವರಿಯುತ್ತದೆ', 'Release ತಡೆಯಲಾಗಿದೆ -- Registry presence protocol incompatibility ಅನ್ನೂ override ಮಾಡಲಾಗುವುದಿಲ್ಲ', 'gateway ಮೌನವಾಗಿ legacy adapter ಗೆ fallback ಆಗುತ್ತದೆ', 'gateway server ya protocol version ಅನ್ನೂ ಸ್ವಯಂಚಾಲಿತವಾಗಿ upgrade ಮಾಡುತ್ತದೆ'],
        correct: 1 },
      { q: 'What is the module\'s single most important security model?', qKn: 'module ya ಅತ್ಯಂತ ಪ್ರಮುಖ security model ಏನೂ?',
        opts: ['Session cookies for every connection', 'PUBLICATION != ADMISSION != RUNTIME AUTHORIZATION as three distinct layers', 'A single global trust flag per backend', 'Display names determine routing'],
        optsKn: ['ಪ್ರತಿ connection ಗಾಗಿ session cookies', 'PUBLICATION != ADMISSION != RUNTIME AUTHORIZATION ಮೂರೂ ವಿಭಿನ್ನ ಪದರಗಳಾಗಿ', 'ಪ್ರತಿ backend ಗಾಗಿ ಒಂದೂ ಏಕ ಜಾಗತಿಕ trust flag', 'Display names routing ನಿರ್ಧರಿಸುತ್ತವೆ'],
        correct: 1 },
    ] } },
  ],
};
