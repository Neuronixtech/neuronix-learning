const phaseId = '6a369d5e66020ed05b3214c3'; // Phase 16: Tools and Protocols
const moduleId = '6a369d5f66020ed05b3214f0'; // Module 264: MCP Security I: Tool Poisoning

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'interactive',
  duration: 45,
  difficulty: 'advanced',
  status: 'published',
  title: 'MCP Security: Poisoned Metadata, Routing, and MRTR State (Part 2 of 3) — Action-Bound requestState and Replay Defense',
  titleKn: 'MCP Security: Poisoned Metadata, Routing, and MRTR State (Part 2 of 3) — Action-Bound requestState ಮತ್ತು Replay Defense',
  desc: 'Genuinely bind a signed requestState to the exact typed action (tool + normalized arguments), then genuinely attack it with an argument-widening attempt and a replay attempt -- both rejected.',
  descKn: 'ಒಂದೂ signed requestState ಅನ್ನೂ ನಿಖರ typed action ಗೆ ನಿಜವಾಗಿ ಬಂಧಿಸಿ, ನಂತರ ಒಂದೂ argument-widening ಪ್ರಯತ್ನ ಮತ್ತು replay ಪ್ರಯತ್ನ ಜೊತೆ ನಿಜವಾಗಿ ದಾಳಿ ಮಾಡಿ -- ಎರಡೂ ತಿರಸ್ಕರಿಸಲ್ಪಟ್ಟಿವೆ.',
  objectives: [
    'Explain why MRTR is needed for a consequential call even after it passes descriptor, routing, schema, and authorization checks.',
    'Genuinely build a requestState bound to an action digest (tool + normalized arguments) rather than just the tool name.',
    'Genuinely prove that widening approved arguments on retry (query="private" -> query="*") is rejected by the action digest.',
    'Explain why a valid HMAC alone does not prevent replay, and genuinely prove a one-time nonce with an atomic claim store blocks a second use.',
    'Explain the Rule of Two heuristic: no single automatic step should combine untrusted input, sensitive-data access, and a consequential external action.',
  ],
  objectivesKn: [
    'descriptor, routing, schema, authorization checks ಪಾಸ್ ಆದ ನಂತರವೂ ಒಂದೂ consequential call ಗೆ MRTR ಏಕೆ ಬೇಕು ಎಂದೂ ವಿವರಿಸಿ.',
    'ಕೇವಲ tool ಹೆಸರೂ ಬದಲಿಗೆ ಒಂದೂ action digest ಗೆ ಬಂಧಿಸಿದ requestState ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ.',
    'retry ಮೇಲೆ ಅನುಮೋದಿತ arguments ವಿಸ್ತರಿಸುವುದೂ action digest ಇಂದ ತಿರಸ್ಕರಿಸಲ್ಪಡುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ಸಾಬೀತುಪಡಿಸಿ.',
    'ಒಂದೂ ಮಾನ್ಯ HMAC ಮಾತ್ರ ಏಕೆ replay ತಡೆಯುವುದಿಲ್ಲ ಎಂದೂ ವಿವರಿಸಿ, ಒಂದೂ one-time nonce replay ತಡೆಯುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ಸಾಬೀತುಪಡಿಸಿ.',
    'Rule of Two heuristic ವಿವರಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'MCP Security: Poisoned Metadata, Routing, and MRTR State (Part 2 of 3)', textKn: 'MCP Security: Poisoned Metadata, Routing, and MRTR State (Part 2 of 3)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: Part 1 · Time: ~45 minutes · Part 2 of 3',
      bodyKn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: Part 1 · Time: ~45 ನಿಮಿಷಗಳು · Part 2 of 3',
      pillsEn: 'Action-Bound Approval,requestState,Replay Defense,Rule of Two', pillsKn: 'Action-Bound Approval,requestState,Replay Defense,Rule of Two' } },

    { type: 'heading', data: { textEn: 'Why a Valid Request Still Needs Confirmation', textKn: 'ಒಂದೂ Valid Request ಇನ್ನೂ Confirmation ಏಕೆ ಬೇಡುತ್ತದೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Technically Valid Is Not the Same as Safe to Auto-Execute', headingKn: 'Technically Valid ಎಂದರೆ Auto-Execute ಗೆ ಸುರಕ್ಷಿತ ಎಂದಲ್ಲ',
      bodyEn: 'notes.export(query="private", destination="archive") can genuinely pass every Part 1 check (descriptor stable, routing consistent, arguments valid, principal authorized) and STILL be consequential enough to need explicit confirmation before executing. MRTR handles exactly this: input_required -> user confirms -> fresh retry.',
      bodyKn: 'notes.export(query="private", destination="archive") Part 1 ya ಪ್ರತಿ ಪರಿಶೀಲನೆಯನ್ನೂ ನಿಜವಾಗಿ ಪಾಸ್ ಆಗಬಹುದು ಮತ್ತು ಚಲಾಯಿಸುವ ಮೊದಲು ಇನ್ನೂ ಸ್ಪಷ್ಟ confirmation ಬೇಡುವಷ್ಟೂ consequential ಆಗಿರಬಹುದು.' } },

    { type: 'heading', data: { textEn: 'Action-Bound requestState: Tool + Normalized Arguments', textKn: 'Action-Bound requestState: Tool + Normalized Arguments', level: 'H2' } },
    { type: 'code', data: {
      filename: 'security_gateway.py', headingEn: 'Genuine signed state binding the exact action, not just the tool', headingKn: 'ಕೇವಲ tool ಅಲ್ಲ, ನಿಖರ action ಬಂಧಿಸುವ ನಿಜ signed state',
      descEn: 'digest_action() hashes BOTH the qualified tool name AND the normalized arguments together -- so approval is tied to "export THIS query to THIS destination", never just "export something".',
      descKn: 'digest_action() qualified tool name ಮತ್ತು normalized arguments ಎರಡನ್ನೂ ಒಟ್ಟಿಗೆ hash ಮಾಡುತ್ತದೆ -- approval "ಈ query ಅನ್ನೂ ಈ destination ಗೆ export" ಗೆ ಬಂಧಿಸಲ್ಪಟ್ಟಿದೆ, ಕೇವಲ "ಏನನ್ನೋ export ಮಾಡಿ" ಅಲ್ಲ.',
      code: "import hmac, time, uuid, base64\n\nSECRET = b\"lesson-demo-gateway-secret\"\n\ndef digest_action(qualified_name, arguments):\n    return hashlib.sha256(canonical({\"tool\": qualified_name, \"arguments\": arguments}).encode()).hexdigest()\n\ndef create_signed_state(principal, qualified_name, arguments, ttl_seconds=300):\n    payload = {\n        \"principal\": principal, \"actionDigest\": digest_action(qualified_name, arguments),\n        \"nonce\": str(uuid.uuid4()), \"expiresAt\": int(time.time()) + ttl_seconds,\n    }\n    raw = canonical(payload).encode()\n    sig = hmac.new(SECRET, raw, hashlib.sha256).hexdigest()\n    return base64.urlsafe_b64encode(raw).decode() + \".\" + sig\n\ndef verify_signed_state(token, principal, qualified_name, arguments):\n    payload_b64, sig = token.rsplit(\".\", 1)\n    raw = base64.urlsafe_b64decode(payload_b64.encode())\n    expected = hmac.new(SECRET, raw, hashlib.sha256).hexdigest()\n    if not hmac.compare_digest(sig, expected):\n        raise ValueError(\"-32602 requestState signature mismatch\")\n    payload = json.loads(raw)\n    if payload[\"principal\"] != principal: raise ValueError(\"-32602 requestState principal mismatch\")\n    if payload[\"actionDigest\"] != digest_action(qualified_name, arguments): raise ValueError(\"-32602 requestState action mismatch\")\n    if payload[\"expiresAt\"] < int(time.time()): raise ValueError(\"-32602 requestState expired\")\n    return payload\n\nprincipal = \"user-alex\"\nqname = \"notes.export\"\nargs = {\"query\": \"private\", \"destination\": \"archive\"}\nstate = create_signed_state(principal, qname, args)\ndecoded = verify_signed_state(state, principal, qname, args)\nprint(\"valid retry accepted, nonce:\", decoded[\"nonce\"][:8] + \"...\")" } },
    { type: 'output', data: { output: "valid retry accepted, nonce: 08281d9a..." } },

    { type: 'heading', data: { textEn: 'Genuinely Rejecting an Argument-Widening Attack', textKn: 'ಒಂದೂ Argument-Widening Attack ಅನ್ನೂ ನಿಜವಾಗಿ ತಿರಸ್ಕರಿಸುವುದೂ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'The User Approved One Query, Not Every Query', headingKn: 'User ಒಂದೂ Query ಅನುಮೋದಿಸಿದ್ದಾರೆ, ಪ್ರತಿ Query ಅಲ್ಲ',
      bodyEn: 'The user saw and approved query="private". A malicious or buggy retry tries to reuse the SAME confirmation state but with query="*" -- effectively "export everything" instead of the one approved query.',
      bodyKn: 'user query="private" ನೋಡಿ ಅನುಮೋದಿಸಿದ್ದಾರೆ. ಒಂದೂ malicious ಅಥವಾ buggy retry ಅದೇ confirmation state ಅನ್ನೂ query="*" ಜೊತೆ ಮರುಬಳಸಲು ಪ್ರಯತ್ನಿಸುತ್ತದೆ.' } },

    { type: 'code', data: {
      filename: 'security_gateway.py', headingEn: 'Genuine rejection: same state token, widened arguments', headingKn: 'ನಿಜ ತಿರಸ್ಕಾರ: ಅದೇ state token, ವಿಸ್ತರಿಸಿದ arguments',
      descEn: '', descKn: '',
      code: "try:\n    verify_signed_state(state, principal, qname, {\"query\": \"*\", \"destination\": \"archive\"})\n    print(\"UNEXPECTED\")\nexcept ValueError as e:\n    print(\"genuinely rejected (argument widened):\", e)" } },
    { type: 'output', data: { output: "genuinely rejected (argument widened): -32602 requestState action mismatch" } },

    { type: 'heading', data: { textEn: 'Integrity Is Not Replay Protection', textKn: 'Integrity Replay Protection ಅಲ್ಲ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'A Perfectly Valid, Unmodified Request Can Still Be Resent', headingKn: 'ಒಂದೂ ಸಂಪೂರ್ಣ ಮಾನ್ಯ, ಮಾರ್ಪಡಿಸದ Request ಇನ್ನೂ ಮರುಕಳುಹಿಸಲ್ಪಡಬಹುದು',
      bodyEn: 'HMAC proves the token wasn\'t tampered with. It says nothing about whether it was already USED. For a genuinely one-shot action like a destructive export, that distinction matters enormously.',
      bodyKn: 'HMAC token ಬದಲಾಯಿಸಲ್ಪಡಲಿಲ್ಲ ಎಂದೂ ಸಾಬೀತುಪಡಿಸುತ್ತದೆ. ಇದೂ ಈಗಾಗಲೇ ಬಳಸಲ್ಪಟ್ಟಿದೆಯೇ ಎಂಬುದರ ಬಗ್ಗೆ ಏನೂ ಹೇಳುವುದಿಲ್ಲ.' } },

    { type: 'code', data: {
      filename: 'security_gateway.py', headingEn: 'Genuine one-time nonce, atomically claimed', headingKn: 'ನಿಜ one-time nonce, atomically claim ಮಾಡಲಾಗಿದೆ',
      descEn: '', descKn: '',
      code: "class ReplayStore:\n    def __init__(self):\n        self._claimed = set()\n    def atomic_claim(self, nonce):\n        if nonce in self._claimed:\n            return False\n        self._claimed.add(nonce)\n        return True\n\nstore = ReplayStore()\nprint(\"first claim:\", store.atomic_claim(decoded[\"nonce\"]))\nprint(\"replay claim:\", store.atomic_claim(decoded[\"nonce\"]))" } },
    { type: 'output', data: { output: "first claim: True\nreplay claim: False" } },

    { type: 'heading', data: { textEn: 'The Rule of Two', textKn: 'Rule of Two', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Three Risk Axes, No Automatic Step Should Combine All Three', headingKn: 'ಮೂರೂ Risk Axes, ಯಾವುದೇ Automatic Step ಎಲ್ಲಾ ಮೂರನ್ನೂ ಸಂಯೋಜಿಸಬಾರದೂ',
      bodyEn: 'A call can (1) consume untrusted input, (2) access sensitive data, and (3) cause a consequential external action. One automatic step should not combine all three -- exactly why our notes.export flow needs MRTR confirmation: it reads sensitive notes (2) and causes an external effect (3), based on a query that could originate from untrusted model output (1). If it combined all three with NO human step, that would be a Rule-of-Two violation.',
      bodyKn: 'ಒಂದೂ call (1) untrusted input ಬಳಸಬಹುದು, (2) sensitive data access ಮಾಡಬಹುದು, (3) ಒಂದೂ consequential external action ಉಂಟುಮಾಡಬಹುದು. ಒಂದೂ automatic step ಈ ಮೂರನ್ನೂ ಸಂಯೋಜಿಸಬಾರದೂ -- ಇದೇ ನಮ್ಮ notes.export flow MRTR confirmation ಏಕೆ ಬೇಡುತ್ತದೆ ಎಂಬುದೂ.' } },

    { type: 'concept', data: { headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Passing every Part 1 check does not exempt a consequential call from needing explicit confirmation -- MRTR handles this.\n• requestState must bind the exact typed action (tool + normalized arguments), not just the tool name -- we genuinely proved this rejects an argument-widening attack.\n• HMAC proves integrity, never freshness -- we genuinely proved a one-time nonce with an atomic claim store blocks replay of an otherwise perfectly valid request.\n• The Rule of Two: never let one automatic step combine untrusted input, sensitive-data access, and a consequential external action.',
      bodyKn: '• ಪ್ರತಿ Part 1 check ಪಾಸ್ ಆಗುವುದೂ ಒಂದೂ consequential call ಅನ್ನೂ explicit confirmation ಇಂದ ವಿನಾಯಿತಿ ನೀಡುವುದಿಲ್ಲ -- MRTR ಇದನ್ನೂ ನಿರ್ವಹಿಸುತ್ತದೆ.\n• requestState ನಿಖರ typed action ಗೆ ಬಂಧಿಸಬೇಕು.\n• HMAC integrity ಸಾಬೀತುಪಡಿಸುತ್ತದೆ, freshness ಅಲ್ಲ.\n• Rule of Two: untrusted input, sensitive-data access, consequential external action ಮೂರನ್ನೂ ಒಂದೂ automatic step ಸಂಯೋಜಿಸಬಾರದೂ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Which is insufficient by itself for protecting requestState?', qKn: 'requestState ರಕ್ಷಿಸಲು ಯಾವುದೂ ಸ್ವತಃ ಸಾಕಾಗುವುದಿಲ್ಲ?',
        opts: ['HMAC', 'Authenticated encryption', 'Base64 encoding', 'Cryptographic integrity verification'],
        optsKn: ['HMAC', 'Authenticated encryption', 'Base64 encoding', 'Cryptographic integrity verification'],
        correct: 2 },
      { q: 'Why bind user approval to exact arguments?', qKn: 'user approval ಅನ್ನೂ ನಿಖರ arguments ಗೆ ಏಕೆ ಬಂಧಿಸಬೇಕು?',
        opts: ['To reduce JSON size', 'So an approval for one operation cannot be reused with changed parameters', 'To support tool shadowing', 'To replace authentication'],
        optsKn: ['JSON size ಕಡಿಮೆ ಮಾಡಲು', 'ಒಂದೂ operation ಗಾಗಿ ಒಂದೂ approval ಬದಲಾದ parameters ಜೊತೆ ಮರುಬಳಸಲಾಗುವುದಿಲ್ಲ ಎಂದೂ', 'tool shadowing ಬೆಂಬಲಿಸಲು', 'authentication ಬದಲಾಯಿಸಲು'],
        correct: 1 },
      { q: "Why isn't an HMAC alone sufficient against replay?", qKn: 'HMAC ಮಾತ್ರ replay ವಿರುದ್ಧ ಏಕೆ ಸಾಕಾಗುವುದಿಲ್ಲ?',
        opts: ['HMAC does not detect modification', 'HMAC cannot sign JSON', 'An unchanged, correctly signed request can still be submitted more than once', 'HMAC requires a protocol session'],
        optsKn: ['HMAC ಮಾರ್ಪಾಡು ಪತ್ತೆಹಚ್ಚುವುದಿಲ್ಲ', 'HMAC JSON ಸಹಿ ಮಾಡಲಾಗುವುದಿಲ್ಲ', 'ಬದಲಾಗದ, ಸರಿಯಾಗಿ signed request ಇನ್ನೂ ಒಂದಕ್ಕಿಂತ ಹೆಚ್ಚು ಬಾರಿ ಸಲ್ಲಿಸಬಹುದು', 'HMAC ಒಂದೂ protocol session ಬೇಡುತ್ತದೆ'],
        correct: 2 },
      { q: 'What is the Rule of Two trying to avoid?', qKn: 'Rule of Two ಏನೂ ತಪ್ಪಿಸಲು ಪ್ರಯತ್ನಿಸುತ್ತದೆ?',
        opts: ['Two servers using the same protocol version', 'One automatic step combining untrusted input, sensitive-data access, and consequential external action', 'Two JSON-RPC requests sharing an id', 'Two descriptor hashes being equal'],
        optsKn: ['ಎರಡೂ servers ಅದೇ protocol version ಬಳಸುವುದೂ', 'ಒಂದೂ automatic step untrusted input, sensitive-data access, consequential external action ಸಂಯೋಜಿಸುವುದೂ', 'ಎರಡೂ JSON-RPC requests ಒಂದೂ id ಹಂಚಿಕೊಳ್ಳುವುದೂ', 'ಎರಡೂ descriptor hashes ಸಮಾನವಾಗಿರುವುದೂ'],
        correct: 1 },
      { q: 'Which sequence best represents secure MRTR confirmation handling?', qKn: 'ಸುರಕ್ಷಿತ MRTR confirmation handling ಅನ್ನೂ ಯಾವ ಅನುಕ್ರಮ ಅತ್ಯುತ್ತಮವಾಗಿ ಪ್ರತಿನಿಧಿಸುತ್ತದೆ?',
        opts: ['Accept -> execute -> validate', 'Validate state -> validate response -> authorize -> atomic claim -> execute', 'Execute -> claim nonce -> validate', 'Claim nonce -> execute -> validate state'],
        optsKn: ['Accept -> execute -> validate', 'state ಮೌಲ್ಯೀಕರಿಸಿ -> response ಮೌಲ್ಯೀಕರಿಸಿ -> authorize -> atomic claim -> execute', 'Execute -> nonce claim -> validate', 'Nonce claim -> execute -> state ಮೌಲ್ಯೀಕರಿಸಿ'],
        correct: 1 },
    ] } },
  ],
};
