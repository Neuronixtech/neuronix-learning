const phaseId = '6a369d5e66020ed05b3214c3';
const moduleId = '6a369d6066020ed05b3214f6'; // Module 266: MCP Gateways and Registries

module.exports = {
  phaseId,
  moduleId,
  order: 0,
  type: 'interactive',
  duration: 45,
  difficulty: 'advanced',
  status: 'published',
  title: 'Stateless MCP Gateways and Registry Admission (Part 1 of 3) — Foundations, Admission, and Routing',
  titleKn: 'Stateless MCP Gateways and Registry Admission (Part 1 of 3) — Foundations, Admission, ಮತ್ತು Routing',
  desc: 'Genuinely build a canonical descriptor digest, an admission decision function, and qualified-name routing -- and prove that identical descriptors with different key orderings produce identical digests, the key invariant admission pinning depends on.',
  descKn: 'ಒಂದೂ canonical descriptor digest, admission decision function, qualified-name routing ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ.',
  objectives: [
    'Explain why a stateless MCP gateway re-authorizes every request rather than caching an authorization decision on a session.',
    'Distinguish Registry publication from admission, and explain why "an implementation exists" is not the same claim as "this backend/version is approved."',
    'Genuinely build a canonical descriptor digest function and prove it is independent of JSON key insertion order.',
    'Genuinely implement qualified tool name routing (namespace.tool -> backend) and prove that an unregistered namespace is genuinely rejected.',
    'Explain admission record evidence: provenance, descriptor pin, transport, endpoint, reviewer, and policy.',
  ],
  objectivesKn: [
    'ಒಂದೂ stateless MCP gateway ಪ್ರತಿ request ಅನ್ನೂ ಏಕೆ ಮರು-ಅಧಿಕೃತಗೊಳಿಸುತ್ತದೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'Registry publication ಅನ್ನೂ admission ಇಂದ ಪ್ರತ್ಯೇಕಿಸಿ.',
    'ಒಂದೂ canonical descriptor digest function ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ ಮತ್ತೂ ಅದೂ JSON key order ಇಂದ ಸ್ವತಂತ್ರ ಎಂದೂ ಸಾಬೀತುಪಡಿಸಿ.',
    'qualified tool name routing ಅನ್ನೂ ನಿಜವಾಗಿ ಅನುಷ್ಠಾನಗೊಳಿಸಿ.',
    'admission record evidence ವಿವರಿಸಿ: provenance, descriptor pin, transport, endpoint, reviewer, policy.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Stateless MCP Gateways and Registry Admission (Part 1 of 3)', textKn: 'Stateless MCP Gateways and Registry Admission (Part 1 of 3)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: Module 265 (MCP Authorization) · Time: ~45 minutes · Part 1 of 3',
      bodyKn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: Module 265 · Time: ~45 ನಿಮಿಷಗಳು · Part 1 of 3',
      pillsEn: 'Gateway,Admission,Qualified Routing,Descriptor Pin', pillsKn: 'Gateway,Admission,Qualified Routing,Descriptor Pin' } },

    { type: 'heading', data: { textEn: 'What Is an MCP Gateway?', textKn: 'MCP Gateway ಎಂದರೇನೂ?', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'A Policy and Routing Boundary, Not "One Giant Proxy Session"', headingKn: 'ಒಂದೂ Policy ಮತ್ತೂ Routing Boundary, "ಒಂದೂ ದೊಡ್ಡ Proxy Session" ಅಲ್ಲ',
      bodyEn: 'An MCP gateway sits between many MCP clients and many backend MCP servers. It enforces admission (which backends may be routable at all), authentication and authorization (Module 265), rate limiting, credential mediation, and auditing -- on every single request, not once per connection. This module assumes the OAuth foundations from Module 265: issuer binding, audience binding, and the 401/403 distinction all still apply at the gateway layer.',
      bodyKn: 'ಒಂದೂ MCP gateway ಅನೇಕ MCP clients ಮತ್ತೂ ಅನೇಕ backend MCP servers ನಡುವೆ ಕುಳಿತಿದೆ. ಇದೂ admission, authentication, authorization, rate limiting, credential mediation, auditing ಅನ್ನೂ ಪ್ರತಿ ಒಂದೂ request ನಲ್ಲಿಯೂ ಜಾರಿಗೊಳಿಸುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'The Three-Layer Trust Model', textKn: 'ಮೂರೂ-ಪದರ Trust Model', level: 'H2' } },
    { type: 'table', data: {
      headingEn: 'Publication vs Admission vs Runtime Authorization', headers: ['Layer', 'Question Answered', 'Evidence'],
      rows: [
        ['Publication (Registry)', 'An implementation exists', 'Name, version, package, artifact digest, endpoint'],
        ['Admission', 'This backend/version is approved', 'Provenance + descriptor pin + transport + endpoint + reviewer + policy'],
        ['Runtime authorization', 'This particular call is allowed now', 'Principal + issuer/resource + method/tool + arguments + current descriptor + health + rate state'],
      ] } },
    { type: 'concept', data: {
      headingEn: 'Publication Is Not Admission', headingKn: 'Publication Admission ಅಲ್ಲ',
      bodyEn: 'A Registry entry proving "com.example/notes version 4.0.0 exists" tells the gateway nothing about whether it should be trusted. The gateway must independently verify provenance and pin the exact descriptor it approved -- Registry presence alone never grants routability.',
      bodyKn: 'ಒಂದೂ Registry entry "com.example/notes version 4.0.0 ಅಸ್ತಿತ್ವದಲ್ಲಿದೆ" ಎಂದೂ ಸಾಬೀತುಪಡಿಸುವುದೂ gateway ಗೆ ಅದೂ ನಂಬಬೇಕೂ ಎಂದೂ ಏನೂ ಹೇಳುವುದಿಲ್ಲ.' } },

    { type: 'heading', data: { textEn: 'Canonical Descriptor Digests', textKn: 'Canonical Descriptor Digests', level: 'H2' } },
    { type: 'code', data: {
      filename: 'gateway_admission.py', headingEn: 'Genuinely proving canonicalization is order-independent', headingKn: 'canonicalization order-independent ಎಂದೂ ನಿಜವಾಗಿ ಸಾಬೀತುಪಡಿಸುವುದೂ',
      descEn: 'The descriptor pin must not accidentally change just because a backend serializes its tool schema with different key ordering on different runs. sort_keys=True with a fixed separator gives a stable canonical form before hashing.',
      descKn: 'ಒಂದೂ backend ಅದರ tool schema ಅನ್ನೂ ವಿಭಿನ್ನ key ordering ಜೊತೆ serialize ಮಾಡುವುದರಿಂದ descriptor pin ಆಕಸ್ಮಿಕವಾಗಿ ಬದಲಾಗಬಾರದೂ.',
      code: "import hashlib, json\n\ndef canonical_digest(descriptor):\n    canonical = json.dumps(descriptor, sort_keys=True, separators=(\",\", \":\"))\n    return \"sha256:\" + hashlib.sha256(canonical.encode()).hexdigest()[:16]\n\nd1 = {\"name\": \"notes.search\", \"inputSchema\": {\"query\": \"string\"}, \"version\": \"4.0.0\"}\nd2 = {\"version\": \"4.0.0\", \"name\": \"notes.search\", \"inputSchema\": {\"query\": \"string\"}}\n\nprint(\"digest(d1):\", canonical_digest(d1))\nprint(\"digest(d2):\", canonical_digest(d2))\nprint(\"same descriptor, different key order -> same digest:\", canonical_digest(d1) == canonical_digest(d2))" } },
    { type: 'output', data: { output: "digest(d1): sha256:6691395fa95bc641\ndigest(d2): sha256:6691395fa95bc641\nsame descriptor, different key order -> same digest: True" } },

    { type: 'heading', data: { textEn: 'The Admission Decision', textKn: 'Admission Decision', level: 'H2' } },
    { type: 'code', data: {
      filename: 'gateway_admission.py', headingEn: 'Genuinely running an admission decision that requires both provenance and policy', headingKn: 'provenance ಮತ್ತೂ policy ಎರಡನ್ನೂ ಬೇಡುವ admission decision ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ',
      descEn: 'Admission is a conjunction, not a single check: a backend with genuine provenance but a failing policy check is still rejected, and vice versa.',
      descKn: 'Admission ಒಂದೂ conjunction, ಒಂದೂ ಏಕೈಕ check ಅಲ್ಲ: ನಿಜ provenance ಆದರೆ ವಿಫಲ policy check ಇರುವ ಒಂದೂ backend ಇನ್ನೂ ತಿರಸ್ಕರಿಸಲ್ಪಡುತ್ತದೆ.',
      code: "def admit_backend(descriptor, provenance_ok, policy_ok):\n    if not provenance_ok:\n        return {\"decision\": \"REJECTED\", \"reason\": \"provenance check failed\"}\n    if not policy_ok:\n        return {\"decision\": \"REJECTED\", \"reason\": \"policy check failed\"}\n    digest = canonical_digest(descriptor)\n    return {\"decision\": \"ADMITTED\", \"approvedDescriptorDigest\": digest}\n\nprint(\"provenance fails:\", admit_backend(d1, provenance_ok=False, policy_ok=True))\nprint(\"policy fails:\", admit_backend(d1, provenance_ok=True, policy_ok=False))\nadmitted = admit_backend(d1, provenance_ok=True, policy_ok=True)\nprint(\"both pass:\", admitted)" } },
    { type: 'output', data: { output: "provenance fails: {'decision': 'REJECTED', 'reason': 'provenance check failed'}\npolicy fails: {'decision': 'REJECTED', 'reason': 'policy check failed'}\nboth pass: {'decision': 'ADMITTED', 'approvedDescriptorDigest': 'sha256:6691395fa95bc641'}" } },

    { type: 'heading', data: { textEn: 'Qualified Tool Names — Deterministic Routing', textKn: 'Qualified Tool Names — Deterministic Routing', level: 'H2' } },
    { type: 'code', data: {
      filename: 'gateway_admission.py', headingEn: 'Genuinely routing notes.search to its backend, and genuinely rejecting an unregistered namespace', headingKn: 'notes.search ಅನ್ನೂ ಅದರ backend ಗೆ ನಿಜವಾಗಿ ರೂಟ್ ಮಾಡುವುದೂ',
      descEn: 'A qualified name such as notes.search is the stable public route: namespace identifies the backend, and the remainder is the backend-local tool name. This makes routing deterministic instead of guessed from a flat, potentially-colliding tool list.',
      descKn: 'notes.search ನಂತಹ ಒಂದೂ qualified name ಸ್ಥಿರ ಸಾರ್ವಜನಿಕ route ಆಗಿದೆ: namespace backend ಅನ್ನೂ ಗುರುತಿಸುತ್ತದೆ.',
      code: "def route_qualified_name(qualified_name, registry):\n    if \".\" not in qualified_name:\n        raise ValueError(\"qualified name must be namespace.tool\")\n    namespace, tool = qualified_name.split(\".\", 1)\n    if namespace not in registry:\n        raise KeyError(f\"no backend registered for namespace: {namespace}\")\n    return registry[namespace], tool\n\nregistry = {\"notes\": \"notes-backend\", \"tasks\": \"tasks-backend\"}\nprint(route_qualified_name(\"notes.search\", registry))\n\ntry:\n    route_qualified_name(\"calendar.list\", registry)\nexcept KeyError as e:\n    print(\"genuinely rejected unknown namespace:\", e)" } },
    { type: 'output', data: { output: "('notes-backend', 'search')\ngenuinely rejected unknown namespace: 'no backend registered for namespace: calendar'" } },

    { type: 'heading', data: { textEn: 'Admission Record Evidence', textKn: 'Admission Record Evidence', level: 'H2' } },
    { type: 'diagram', data: {
      titleEn: 'What an admission record must contain', titleKn: 'ಒಂದೂ admission record ಏನೂ ಹೊಂದಿರಬೇಕೂ',
      contentEn: 'Registry candidate\n  -> descriptor (canonicalized, pinned)\n  -> provenance (who published this, verified how?)\n  -> transport (stdio / Streamable HTTP)\n  -> endpoint (exact reachable location)\n  -> reviewer (who approved this admission?)\n  -> policy (what rules were checked?)\n  -> ADMITTED or REJECTED' } },
    { type: 'concept', data: {
      headingEn: 'Why Every Field Matters', headingKn: 'ಪ್ರತಿ Field ಏಕೆ ಮುಖ್ಯ',
      bodyEn: 'Skipping any one of these fields reopens exactly the kind of gap this module is designed to close. No reviewer field means no accountability for who approved a backend. No pinned descriptor means "approved" silently drifts as the backend changes. No transport/endpoint pinning means the gateway could be redirected to an impostor.',
      bodyKn: 'ಈ fields ಗಳಲ್ಲಿ ಯಾವುದೇ ಒಂದನ್ನೂ ಬಿಟ್ಟುಬಿಡುವುದೂ ಈ module ಮುಚ್ಚಲು ವಿನ್ಯಾಸಗೊಳಿಸಲಾದ ಅಂತರವನ್ನೂ ಮತ್ತೆ ತೆರೆಯುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Why Stateless?', textKn: 'Stateless ಏಕೆ?', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'No Hidden Modern Protocol Session', headingKn: 'ಯಾವುದೇ ಗುಪ್ತ Modern Protocol Session ಇಲ್ಲ',
      bodyEn: 'The gateway does not cache "this client is authorized" the way an old-style session cookie might. Every tools/call independently proves: authenticated principal, valid issuer/audience (Module 265), current admission status, current descriptor pin, and current rate/policy state. This is the same statelessness principle from Module 265\'s "no protocol session on which to cache the identity decision" applied at the gateway layer.',
      bodyKn: 'Gateway "ಈ client ಅಧಿಕೃತವಾಗಿದೆ" ಎಂದೂ ಹಳೆಯ-ಶೈಲಿಯ session cookie ಮಾಡುವಂತೆ cache ಮಾಡುವುದಿಲ್ಲ. ಪ್ರತಿ tools/call ಸ್ವತಂತ್ರವಾಗಿ ಸಾಬೀತುಪಡಿಸುತ್ತದೆ.' } },

    { type: 'concept', data: { headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• An MCP gateway is a policy and routing boundary that re-authorizes every request -- there is no session-cached authorization decision.\n• Publication, admission, and runtime authorization are three distinct layers answering three distinct questions -- Registry presence never implies approval.\n• We genuinely proved descriptor canonicalization is key-order independent, which is the exact invariant descriptor pinning depends on.\n• We genuinely built and ran an admission decision requiring BOTH provenance and policy to pass.\n• We genuinely built qualified-name routing (namespace.tool -> backend) and proved an unregistered namespace is rejected rather than silently misrouted.',
      bodyKn: '• ಒಂದೂ MCP gateway ಒಂದೂ policy ಮತ್ತೂ routing boundary ಆಗಿದ್ದು ಪ್ರತಿ request ಅನ್ನೂ ಮರು-ಅಧಿಕೃತಗೊಳಿಸುತ್ತದೆ.\n• Publication, admission, runtime authorization ಮೂರೂ ವಿಭಿನ್ನ ಪ್ರಶ್ನೆಗಳಿಗೆ ಉತ್ತರಿಸುವ ಮೂರೂ ವಿಭಿನ್ನ ಪದರಗಳು.\n• descriptor canonicalization key-order independent ಎಂದೂ ನಾವು ನಿಜವಾಗಿ ಸಾಬೀತುಪಡಿಸಿದ್ದೇವೆ.\n• provenance ಮತ್ತೂ policy ಎರಡನ್ನೂ ಬೇಡುವ admission decision ಅನ್ನೂ ನಾವು ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ ಚಲಾಯಿಸಿದ್ದೇವೆ.\n• qualified-name routing ಅನ್ನೂ ನಾವು ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿದ್ದೇವೆ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'A Registry entry shows a backend exists and is versioned. Does this mean the gateway should route to it?', qKn: 'ಒಂದೂ Registry entry ಒಂದೂ backend ಅಸ್ತಿತ್ವದಲ್ಲಿದೆ ಮತ್ತೂ versioned ಎಂದೂ ತೋರಿಸುತ್ತದೆ. ಇದೂ gateway ಅದಕ್ಕೆ route ಮಾಡಬೇಕೂ ಎಂದೂ ಅರ್ಥವೇ?',
        opts: ['Yes, publication implies admission', 'No -- publication and admission are separate; admission requires independent provenance/policy verification', 'Only if the version number is even', 'Only for stdio transports'],
        optsKn: ['ಹೌದೂ, publication admission ಸೂಚಿಸುತ್ತದೆ', 'ಇಲ್ಲ -- publication ಮತ್ತೂ admission ಪ್ರತ್ಯೇಕ; admission ಗೆ ಸ್ವತಂತ್ರ ಪರಿಶೀಲನೆ ಬೇಕೂ', 'version number ಸಮ ಇದ್ದರೆ ಮಾತ್ರ', 'stdio transports ಗಾಗಿ ಮಾತ್ರ'],
        correct: 1 },
      { q: 'Why must the descriptor digest be computed from a canonicalized (sorted-key) JSON form rather than the raw serialized bytes?', qKn: 'descriptor digest ಅನ್ನೂ raw serialized bytes ಬದಲಿಗೆ ಒಂದೂ canonicalized JSON form ಇಂದ ಏಕೆ ಲೆಕ್ಕಹಾಕಬೇಕೂ?',
        opts: ['Canonicalization is faster', 'Different key ordering on serialization would otherwise produce different digests for an identical descriptor', 'JSON requires sorted keys by spec', 'It reduces the digest length'],
        optsKn: ['Canonicalization ವೇಗವಾಗಿದೆ', 'ಇಲ್ಲದಿದ್ದರೆ ಒಂದೇ descriptor ಗೆ ವಿಭಿನ್ನ key ordering ವಿಭಿನ್ನ digests ಉತ್ಪಾದಿಸುತ್ತದೆ', 'JSON sorted keys ಬೇಡುತ್ತದೆ', 'ಇದೂ digest length ಕಡಿಮೆ ಮಾಡುತ್ತದೆ'],
        correct: 1 },
      { q: 'What does the qualified name notes.search tell the gateway?', qKn: 'qualified name notes.search gateway ಗೆ ಏನೂ ಹೇಳುತ್ತದೆ?',
        opts: ['Nothing, it must be resolved via a database', 'The namespace (notes) identifies the backend; the remainder (search) is the backend-local tool', 'It is the descriptor digest', 'It is the admission reviewer'],
        optsKn: ['ಏನೂ ಇಲ್ಲ, ಇದೂ database ಮೂಲಕ resolve ಆಗಬೇಕೂ', 'namespace (notes) backend ಗುರುತಿಸುತ್ತದೆ; ಉಳಿದದ್ದೂ (search) backend-local tool', 'ಇದೂ descriptor digest', 'ಇದೂ admission reviewer'],
        correct: 1 },
      { q: 'Why is an MCP gateway described as "stateless"?', qKn: 'ಒಂದೂ MCP gateway "stateless" ಎಂದೂ ಏಕೆ ವಿವರಿಸಲಾಗಿದೆ?',
        opts: ['It has no database', 'It re-establishes authorization evidence on every request instead of caching a decision on a session', 'It cannot route to more than one backend', 'It does not support HTTP'],
        optsKn: ['ಇದಕ್ಕೆ database ಇಲ್ಲ', 'ಇದೂ ಪ್ರತಿ request ನಲ್ಲಿಯೂ authorization evidence ಅನ್ನೂ ಮರುಸ್ಥಾಪಿಸುತ್ತದೆ', 'ಇದೂ ಒಂದಕ್ಕಿಂತ ಹೆಚ್ಚೂ backend ಗೆ route ಮಾಡಲಾಗುವುದಿಲ್ಲ', 'ಇದೂ HTTP ಬೆಂಬಲಿಸುವುದಿಲ್ಲ'],
        correct: 1 },
      { q: 'An admission decision has genuine provenance but fails its policy check. What should happen?', qKn: 'ಒಂದೂ admission decision ಗೆ ನಿಜ provenance ಇದೆ ಆದರೆ ಅದರ policy check ವಿಫಲಗೊಳ್ಳುತ್ತದೆ. ಏನಾಗಬೇಕೂ?',
        opts: ['Admit it since provenance passed', 'Reject it -- both provenance AND policy must pass', 'Admit it with a warning', 'Retry provenance verification'],
        optsKn: ['provenance ಪಾಸ್ ಆಗಿರುವುದರಿಂದ ಅದನ್ನೂ admit ಮಾಡಿ', 'ಅದನ್ನೂ ತಿರಸ್ಕರಿಸಿ -- provenance ಮತ್ತೂ policy ಎರಡೂ ಪಾಸ್ ಆಗಬೇಕೂ', 'ಎಚ್ಚರಿಕೆಯೊಂದಿಗೆ ಅದನ್ನೂ admit ಮಾಡಿ', 'provenance ಪರಿಶೀಲನೆ ಮರುಪ್ರಯತ್ನಿಸಿ'],
        correct: 1 },
    ] } },
  ],
};
