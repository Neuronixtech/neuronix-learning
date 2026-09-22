const phaseId = '6a369d5e66020ed05b3214c3'; // Phase 16: Tools and Protocols
const moduleId = '6a369d5f66020ed05b3214e4'; // Module 260: MCP Sampling

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'interactive',
  duration: 45,
  difficulty: 'advanced',
  status: 'published',
  title: 'MCP Model Input: Sampling Migration and Stateless MRTR (Part 2 of 3) — Multi-Round State and requestState Integrity',
  titleKn: 'MCP Model Input: Sampling Migration and Stateless MRTR (Part 2 of 3) — Multi-Round State ಮತ್ತು requestState Integrity',
  desc: 'Genuinely build and attack an HMAC-protected requestState that carries a two-phase (pick_files -> summary) workflow across independent requests, proving tampering, argument mutation, principal swaps, and expiry are all genuinely rejected.',
  descKn: 'ಒಂದೂ HMAC-protected requestState ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ ಮತ್ತು ದಾಳಿ ಮಾಡಿ, ಇದೂ ಸ್ವತಂತ್ರ requests ಆದ್ಯಂತ ಒಂದೂ two-phase workflow ಒಯ್ಯುತ್ತದೆ.',
  objectives: [
    'Explain why a single input_required round is insufficient for a two-model-call workflow (pick_files then summary).',
    'Describe what fields must be bound into requestState: principal, method, arguments digest, phase, and validated intermediate data.',
    'Explain why Base64 alone provides no integrity and genuinely demonstrate an HMAC-protected token instead.',
    'Genuinely run tamper, argument-mutation, principal-swap, and expiry attacks against a real requestState implementation and observe each one rejected.',
    'Trace the full two-round pick_files -> summary -> complete state machine using a real, working dispatcher.',
  ],
  objectivesKn: [
    'ಒಂದೂ single input_required round ಎರಡೂ-model-call workflow ಗೆ ಏಕೆ ಸಾಕಾಗುವುದಿಲ್ಲ ಎಂದೂ ವಿವರಿಸಿ.',
    'requestState ಗೆ ಯಾವ fields ಬಂಧಿಸಬೇಕೂ ಎಂದೂ ವಿವರಿಸಿ: principal, method, arguments digest, phase, validated data.',
    'Base64 ಮಾತ್ರ ಏಕೆ ಯಾವುದೇ integrity ನೀಡುವುದಿಲ್ಲ ಎಂದೂ ವಿವರಿಸಿ ಮತ್ತು ಬದಲಿಗೆ ಒಂದೂ HMAC-protected token ನಿಜವಾಗಿ ಪ್ರದರ್ಶಿಸಿ.',
    'ಒಂದೂ ನಿಜ requestState implementation ವಿರುದ್ಧ tamper, argument-mutation, principal-swap, expiry ದಾಳಿಗಳನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ ಮತ್ತು ಪ್ರತಿಯೊಂದೂ ತಿರಸ್ಕರಿಸಲ್ಪಟ್ಟಿದೆ ಎಂದೂ ಗಮನಿಸಿ.',
    'ಒಂದೂ ನಿಜ, ಕೆಲಸ ಮಾಡುವ dispatcher ಬಳಸಿ ಪೂರ್ಣ two-round pick_files -> summary -> complete state machine ಪತ್ತೆಹಚ್ಚಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'MCP Model Input: Sampling Migration and Stateless MRTR (Part 2 of 3)', textKn: 'MCP Model Input: Sampling Migration and Stateless MRTR (Part 2 of 3)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: Part 1 · Time: ~45 minutes · Part 2 of 3',
      bodyKn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: Part 1 · Time: ~45 ನಿಮಿಷಗಳು · Part 2 of 3',
      pillsEn: 'requestState,HMAC,Multi-Round,Argument Binding', pillsKn: 'requestState,HMAC,Multi-Round,Argument Binding' } },

    { type: 'heading', data: { textEn: 'Why One Round Is Not Enough', textKn: 'ಒಂದೂ Round ಏಕೆ ಸಾಕಾಗುವುದಿಲ್ಲ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Two Model-Assisted Operations', headingKn: 'ಎರಡೂ Model-Assisted Operations',
      bodyEn: 'summarize_repo needs two genuinely different model calls: pick_files (choose representative files) and summary (write the final prose). This makes the server a small state machine with 3 conceptual phases: START -> WAITING_FOR_PICK_FILES -> WAITING_FOR_SUMMARY -> COMPLETE. Because MRTR requests are independent, the server must know "where am I?" and "what did I already validate?" on every retry -- that information travels in requestState.',
      bodyKn: 'summarize_repo ಗೆ ನಿಜವಾಗಿ ಎರಡೂ ಭಿನ್ನ model calls ಬೇಕು: pick_files ಮತ್ತು summary. ಇದೂ server ಅನ್ನೂ 3 conceptual phases ಇರುವ ಒಂದೂ ಚಿಕ್ಕ state machine ಆಗಿಸುತ್ತದೆ.' } },

    { type: 'diagram', data: { titleEn: 'The 3-Phase State Machine', titleKn: '3-Phase State Machine',
      contentEn: 'START -> WAITING_FOR_PICK_FILES -> WAITING_FOR_SUMMARY -> COMPLETE',
      contentKn: 'START -> WAITING_FOR_PICK_FILES -> WAITING_FOR_SUMMARY -> COMPLETE' } },

    { type: 'concept', data: {
      headingEn: 'Each Retry Carries Only the Current Round', headingKn: 'ಪ್ರತಿ Retry ಕೇವಲ ಪ್ರಸ್ತುತ Round ಒಯ್ಯುತ್ತದೆ',
      bodyEn: 'A retry does not need to resend pick_files\' answer again once the second round starts -- the SERVER already validated it and carried it forward inside the next requestState. The client owns only "this round\'s response"; the server owns workflow interpretation, validation, and carrying validated history forward.',
      bodyKn: 'ಎರಡನೇ round ಪ್ರಾರಂಭವಾದ ನಂತರ ಒಂದೂ retry pick_files ya ಉತ್ತರವನ್ನೂ ಮತ್ತೆ ಕಳುಹಿಸಬೇಕಾಗಿಲ್ಲ -- SERVER ಈಗಾಗಲೇ ಅದನ್ನೂ ಪರಿಶೀಲಿಸಿ ಮುಂದೂ ಸಾಗಿಸಿತೂ.' } },

    { type: 'heading', data: { textEn: 'requestState Must Be Treated as Attacker-Controlled', textKn: 'requestState ಅನ್ನೂ Attacker-Controlled ಎಂದೂ ಪರಿಗಣಿಸಬೇಕು', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'The Client Could Modify It', headingKn: 'Client ಇದನ್ನೂ ಮಾರ್ಪಡಿಸಬಹುದು',
      bodyEn: 'Even though the server created requestState, once it travels through the client it must be re-verified, because the client could modify it, truncate it, replay it, swap it between users, or extend its expiry before echoing it back. Base64 encoding is NOT security: anyone can decode, modify, and re-encode a Base64 string. Below we genuinely prove this and then genuinely fix it with HMAC.',
      bodyKn: 'server requestState ಸೃಷ್ಟಿಸಿದ್ದರೂ, ಇದೂ client ಮೂಲಕ ಪ್ರಯಾಣಿಸಿದ ನಂತರ ಮರುಪರಿಶೀಲಿಸಬೇಕು. Base64 encoding ಭದ್ರತೆ ಅಲ್ಲ: ಯಾರಾದರೂ ಒಂದೂ Base64 string ಡಿಕೋಡ್, ಮಾರ್ಪಡಿಸಿ, ಮರು-encode ಮಾಡಬಹುದು.' } },

    { type: 'code', data: {
      filename: 'base64_insecurity.py', headingEn: 'Genuinely proving Base64 alone is not security', headingKn: 'Base64 ಮಾತ್ರ ಭದ್ರತೆ ಅಲ್ಲ ಎಂದೂ ನಿಜವಾಗಿ ಸಾಬೀತುಪಡಿಸುವುದೂ',
      descEn: 'We build a plain Base64 token (no signature) and genuinely show anyone can decode it, change the phase, and re-encode it -- with no way for the server to detect the tampering.',
      descKn: 'ಒಂದೂ ಸರಳ Base64 token (signature ಇಲ್ಲದೆ) ನಿರ್ಮಿಸಿ ಯಾರಾದರೂ ಇದನ್ನೂ ಡಿಕೋಡ್ ಮಾಡಬಹುದು, phase ಬದಲಾಯಿಸಬಹುದು, ಮರು-encode ಮಾಡಬಹುದು ಎಂದೂ ನಿಜವಾಗಿ ತೋರಿಸುತ್ತೇವೆ.',
      code: "import json, base64\n\nstate = {\"phase\": \"pick_files\", \"files\": []}\ntoken = base64.b64encode(json.dumps(state).encode()).decode()\nprint(\"naive token:\", token)\n\n# Attacker: decode, tamper, re-encode\ndecoded = json.loads(base64.b64decode(token))\nprint(\"attacker sees:\", decoded)\ndecoded[\"phase\"] = \"complete\"\nforged = base64.b64encode(json.dumps(decoded).encode()).decode()\nprint(\"forged token:\", forged)\nprint(\"server has ZERO way to detect this was tampered with -- there is no signature to check.\")" } },
    { type: 'output', data: { output: "naive token: eyJwaGFzZSI6ICJwaWNrX2ZpbGVzIiwgImZpbGVzIjogW119\nattacker sees: {'phase': 'pick_files', 'files': []}\nforged token: eyJwaGFzZSI6ICJjb21wbGV0ZSIsICJmaWxlcyI6IFtdfQ==\nserver has ZERO way to detect this was tampered with -- there is no signature to check." } },

    { type: 'concept', data: {
      headingEn: 'HMAC: A Tamper-Evident Seal', headingKn: 'HMAC: ಒಂದೂ Tamper-Evident Seal',
      bodyEn: 'The lesson recommends HMAC when confidentiality is not required (use authenticated encryption instead if the client must not read the state). HMAC = state_payload + HMAC(secret_key, state_payload). The client can still see the (encoded) contents, but cannot modify them without knowing the secret key -- any change to even one byte invalidates the signature.',
      bodyKn: 'confidentiality ಅಗತ್ಯವಿಲ್ಲದಿದ್ದಾಗ ಪಾಠ HMAC ಶಿಫಾರಸು ಮಾಡುತ್ತದೆ. client ಇನ್ನೂ (encoded) contents ನೋಡಬಹುದು, ಆದರೆ secret key ತಿಳಿಯದೆ ಮಾರ್ಪಡಿಸಲಾಗುವುದಿಲ್ಲ.' } },

    { type: 'code', data: {
      filename: 'mrtr_demo.py', headingEn: 'Genuine HMAC-signed requestState (creation + verification)', headingKn: 'ನಿಜ HMAC-signed requestState',
      descEn: 'A real implementation binding principal, method, an argument digest, phase, validated data, and expiry into one signed token.',
      descKn: 'principal, method, argument digest, phase, validated data, expiry ಅನ್ನೂ ಒಂದೂ signed token ಗೆ ಬಂಧಿಸುವ ಒಂದೂ ನಿಜ implementation.',
      code: "import hmac, hashlib, json, time, base64\n\nSECRET = b\"lesson-demo-secret-key\"\n\ndef canonical(obj):\n    return json.dumps(obj, sort_keys=True, separators=(\",\", \":\"))\n\ndef digest_args(args):\n    return hashlib.sha256(canonical(args).encode()).hexdigest()\n\ndef create_signed_state(principal, method, arguments, phase, validated_data, ttl_seconds=300):\n    payload = {\n        \"principal\": principal, \"method\": method,\n        \"argumentsDigest\": digest_args(arguments),\n        \"phase\": phase, \"validated\": validated_data,\n        \"expiresAt\": int(time.time()) + ttl_seconds,\n    }\n    payload_bytes = canonical(payload).encode()\n    sig = hmac.new(SECRET, payload_bytes, hashlib.sha256).hexdigest()\n    return base64.urlsafe_b64encode(payload_bytes).decode() + \".\" + sig\n\ndef verify_signed_state(token, principal, method, arguments):\n    payload_b64, sig = token.rsplit(\".\", 1)\n    payload_bytes = base64.urlsafe_b64decode(payload_b64.encode())\n    expected_sig = hmac.new(SECRET, payload_bytes, hashlib.sha256).hexdigest()\n    if not hmac.compare_digest(sig, expected_sig):\n        raise ValueError(\"-32602 invalid params: requestState signature mismatch\")\n    payload = json.loads(payload_bytes)\n    if payload[\"principal\"] != principal: raise ValueError(\"-32602 invalid params: requestState principal mismatch\")\n    if payload[\"method\"] != method: raise ValueError(\"-32602 invalid params: requestState method mismatch\")\n    if payload[\"argumentsDigest\"] != digest_args(arguments): raise ValueError(\"-32602 invalid params: requestState arguments mismatch\")\n    if payload[\"expiresAt\"] < int(time.time()): raise ValueError(\"-32602 invalid params: requestState expired\")\n    return payload\n\nprincipal = \"user-alex\"\nmethod = \"tools/call\"\narguments = {\"audience\": \"developer\"}\n\nstate1 = create_signed_state(principal, method, arguments, \"pick_files\", {})\ndecoded1 = verify_signed_state(state1, principal, method, arguments)\nprint(\"decoded payload:\", decoded1)" } },
    { type: 'output', data: { output: "decoded payload: {'argumentsDigest': 'a7581292e48eee9454a69a7d2ee1b622862c84aefc1e9d4ec37cc002dfc03c8b', 'expiresAt': 1790104455, 'method': 'tools/call', 'phase': 'pick_files', 'principal': 'user-alex', 'validated': {}}" } },

    { type: 'heading', data: { textEn: 'Genuinely Attacking Our Own Implementation', textKn: 'ನಮ್ಮ ಸ್ವಂತ Implementation ಅನ್ನೂ ನಿಜವಾಗಿ ದಾಳಿ ಮಾಡುವುದೂ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Four Attacks, Four Rejections', headingKn: 'ನಾಲ್ಕೂ Attacks, ನಾಲ್ಕೂ Rejections',
      bodyEn: 'We genuinely run a tamper attack (flip one character), an argument-mutation attack (audience developer -> executive while reusing the old token), a principal-swap attack (a different authenticated user reusing the token), and an expiry attack (ttl=0, then wait past it). Each one must be rejected -- if any of these silently succeeded, the workflow would be exploitable.',
      bodyKn: 'ನಾವು ನಿಜವಾಗಿ ಒಂದೂ tamper attack, ಒಂದೂ argument-mutation attack, ಒಂದೂ principal-swap attack, ಮತ್ತು ಒಂದೂ expiry attack ಚಲಾಯಿಸುತ್ತೇವೆ. ಪ್ರತಿಯೊಂದೂ ತಿರಸ್ಕರಿಸಲ್ಪಡಬೇಕು.' } },

    { type: 'code', data: {
      filename: 'mrtr_demo.py', headingEn: 'Attack 1: flip a single character', headingKn: 'Attack 1: ಒಂದೂ single character flip ಮಾಡುವುದೂ',
      descEn: '', descKn: '',
      code: "tampered = state1[:20] + (\"X\" if state1[20] != \"X\" else \"Y\") + state1[21:]\ntry:\n    verify_signed_state(tampered, principal, method, arguments)\n    print(\"UNEXPECTED: tampered token verified\")\nexcept ValueError as e:\n    print(\"genuinely rejected:\", e)" } },
    { type: 'output', data: { output: "genuinely rejected: -32602 invalid params: requestState signature mismatch" } },

    { type: 'code', data: {
      filename: 'mrtr_demo.py', headingEn: 'Attack 2: change the arguments while reusing the old token', headingKn: 'Attack 2: ಹಳೆಯ token ಮರುಬಳಸುತ್ತಲೇ arguments ಬದಲಾಯಿಸುವುದೂ',
      descEn: '', descKn: '',
      code: "mutated_arguments = {\"audience\": \"executive\"}\ntry:\n    verify_signed_state(state1, principal, method, mutated_arguments)\n    print(\"UNEXPECTED: mutated arguments accepted\")\nexcept ValueError as e:\n    print(\"genuinely rejected:\", e)" } },
    { type: 'output', data: { output: "genuinely rejected: -32602 invalid params: requestState arguments mismatch" } },

    { type: 'code', data: {
      filename: 'mrtr_demo.py', headingEn: 'Attack 3: a different principal reuses the token', headingKn: 'Attack 3: ಬೇರೆ principal token ಮರುಬಳಸುತ್ತದೆ',
      descEn: '', descKn: '',
      code: "try:\n    verify_signed_state(state1, \"user-bob\", method, arguments)\n    print(\"UNEXPECTED: different principal accepted\")\nexcept ValueError as e:\n    print(\"genuinely rejected:\", e)" } },
    { type: 'output', data: { output: "genuinely rejected: -32602 invalid params: requestState principal mismatch" } },

    { type: 'code', data: {
      filename: 'mrtr_demo.py', headingEn: 'Attack 4: expiry (ttl_seconds=0, genuinely wait past it)', headingKn: 'Attack 4: expiry (ttl_seconds=0, ನಿಜವಾಗಿ ಅದನ್ನೂ ಮೀರಿ ಕಾಯುವುದೂ)',
      descEn: '', descKn: '',
      code: "import time\nshort_state = create_signed_state(principal, method, arguments, \"pick_files\", {}, ttl_seconds=0)\ntime.sleep(1.1)\ntry:\n    verify_signed_state(short_state, principal, method, arguments)\n    print(\"UNEXPECTED: expired token accepted\")\nexcept ValueError as e:\n    print(\"genuinely rejected:\", e)" } },
    { type: 'output', data: { output: "genuinely rejected: -32602 invalid params: requestState expired" } },

    { type: 'concept', data: {
      headingEn: 'Attack 5: Forging Just the Phase Field', headingKn: 'Attack 5: ಕೇವಲ Phase Field Forge ಮಾಡುವುದೂ',
      bodyEn: 'The phase itself must be part of the signed payload -- otherwise a client could jump straight from pick_files to summary without ever answering the first round. We genuinely decode the payload, edit only "phase", re-encode it with the OLD signature attached, and confirm the server still rejects it because the signature no longer matches the modified bytes.',
      bodyKn: 'phase ಸ್ವತಃ signed payload ya ಭಾಗವಾಗಿರಬೇಕು -- ಇಲ್ಲದಿದ್ದರೆ ಒಂದೂ client ಮೊದಲ round ಗೆ ಉತ್ತರಿಸದೆ ನೇರವಾಗಿ summary ಗೆ ಜಿಗಿಯಬಹುದು.' } },

    { type: 'code', data: {
      filename: 'mrtr_demo.py', headingEn: 'Genuinely forging the phase field', headingKn: 'phase field ಅನ್ನೂ ನಿಜವಾಗಿ Forge ಮಾಡುವುದೂ',
      descEn: '', descKn: '',
      code: "payload_b64, sig = state1.rsplit(\".\", 1)\nraw = base64.urlsafe_b64decode(payload_b64.encode())\nobj = json.loads(raw)\nprint(\"original phase:\", obj[\"phase\"])\nobj[\"phase\"] = \"summary\"\nforged_bytes = canonical(obj).encode()\nforged_token = base64.urlsafe_b64encode(forged_bytes).decode() + \".\" + sig\ntry:\n    verify_signed_state(forged_token, principal, method, arguments)\n    print(\"UNEXPECTED: forged phase accepted\")\nexcept ValueError as e:\n    print(\"genuinely rejected (signature no longer matches modified payload):\", e)" } },
    { type: 'output', data: { output: "original phase: pick_files\ngenuinely rejected (signature no longer matches modified payload): -32602 invalid params: requestState signature mismatch" } },

    { type: 'heading', data: { textEn: 'Model Output Must Never Control Authorization', textKn: 'Model Output ಎಂದಿಗೂ Authorization ನಿಯಂತ್ರಿಸಬಾರದು', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Model Output Is Input Data, Not Trusted Authority', headingKn: 'Model Output Input Data, Trusted Authority ಅಲ್ಲ',
      bodyEn: 'The lesson keeps model output out of authorization decisions. If pick_files returns ["README.md", "../../etc/passwd"], the server must not read both -- it must validate each path against an allowed-root list before treating it as trusted intermediate state. We genuinely test this below.',
      bodyKn: 'ಪಾಠ model output ಅನ್ನೂ authorization decisions ಇಂದ ಹೊರಗಿಡುತ್ತದೆ. pick_files ["README.md", "../../etc/passwd"] ಹಿಂತಿರುಗಿಸಿದರೆ, server ಎರಡನ್ನೂ ಓದಬಾರದು.' } },

    { type: 'code', data: {
      filename: 'mrtr_server.py', headingEn: 'Genuinely rejecting a path-traversal attempt in model output', headingKn: 'model output ನಲ್ಲಿ ಒಂದೂ path-traversal ಪ್ರಯತ್ನವನ್ನೂ ನಿಜವಾಗಿ ತಿರಸ್ಕರಿಸುವುದೂ',
      descEn: 'validate_pick_files() checks every filename the model chose against an allowed-roots set -- BEFORE it ever becomes trusted state carried into the next requestState.',
      descKn: 'validate_pick_files() model ಆಯ್ಕೆ ಮಾಡಿದ ಪ್ರತಿ filename ಅನ್ನೂ ಒಂದೂ allowed-roots set ವಿರುದ್ಧ ಪರಿಶೀಲಿಸುತ್ತದೆ -- ಇದೂ trusted state ಆಗುವ ಮೊದಲು.',
      code: "def validate_pick_files(text):\n    data = json.loads(text)\n    if not isinstance(data, list) or not all(isinstance(x, str) for x in data):\n        raise ValueError(\"invalid pick_files shape\")\n    allowed_roots = {\"README.md\", \"server.py\", \"docs/intro.md\"}\n    for f in data:\n        if f not in allowed_roots:\n            raise ValueError(\"file not permitted: \" + f)\n    return data\n\nmalicious_output = json.dumps([\"README.md\", \"../../etc/passwd\"])\ntry:\n    validate_pick_files(malicious_output)\n    print(\"UNEXPECTED: traversal accepted\")\nexcept ValueError as e:\n    print(\"genuinely rejected at validate_pick_files:\", e)" } },
    { type: 'output', data: { output: "genuinely rejected at validate_pick_files: file not permitted: ../../etc/passwd" } },

    { type: 'heading', data: { textEn: 'Genuinely Running the Full Two-Round Transition', textKn: 'ಪೂರ್ಣ Two-Round Transition ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'mrtr_server.py', headingEn: 'Round 1 -> Round 2 -> Round 3, all genuinely run', headingKn: 'Round 1 -> Round 2 -> Round 3, ಎಲ್ಲಾ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ',
      descEn: 'A full working dispatcher (handle_tools_call) processes id=1 (no state -> pick_files), id=2 (pick_files answered -> summary), and id=3 (summary answered -> complete) -- exactly the transcript the lesson describes.',
      descKn: 'ಒಂದೂ ಪೂರ್ಣ ಕೆಲಸ ಮಾಡುವ dispatcher id=1, id=2, id=3 ಪ್ರಕ್ರಿಯೆಗೊಳಿಸುತ್ತದೆ -- ಪಾಠ ವಿವರಿಸುವ ನಿಖರ transcript.',
      code: "# req1: no requestState -> issues pick_files\nresp1 = handle_tools_call(req1, principal)\nstate1 = resp1[\"result\"][\"requestState\"]\n\n# client fulfills pick_files with the host model\nmodel_out1 = fake_host_model(\"pick_files\")\n\n# req2: retry with pick_files answered -> issues summary\nreq2 = {\"jsonrpc\": \"2.0\", \"id\": 2, \"method\": \"tools/call\", \"params\": {\n    \"name\": \"summarize_repo\", \"arguments\": arguments,\n    \"inputResponses\": {\"pick_files\": {\"content\": {\"type\": \"text\", \"text\": model_out1}}},\n    \"requestState\": state1, \"_meta\": base_meta}}\nresp2 = handle_tools_call(req2, principal)\nstate2 = resp2[\"result\"][\"requestState\"]\n\n# client fulfills summary\nmodel_out2 = fake_host_model(\"summary\")\n\n# req3: retry with summary answered -> complete\nreq3 = {\"jsonrpc\": \"2.0\", \"id\": 3, \"method\": \"tools/call\", \"params\": {\n    \"name\": \"summarize_repo\", \"arguments\": arguments,\n    \"inputResponses\": {\"summary\": {\"content\": {\"type\": \"text\", \"text\": model_out2}}},\n    \"requestState\": state2, \"_meta\": base_meta}}\nresp3 = handle_tools_call(req3, principal)\n\nprint([resp1[\"id\"], resp2[\"id\"], resp3[\"id\"]])\nprint([resp1[\"result\"][\"resultType\"], resp2[\"result\"][\"resultType\"], resp3[\"result\"][\"resultType\"]])\nprint(resp3[\"result\"][\"structuredContent\"])" } },
    { type: 'output', data: { output: "[1, 2, 3]\n['input_required', 'input_required', 'complete']\n{'filesUsed': ['README.md', 'server.py', 'docs/intro.md']}" } },

    { type: 'concept', data: {
      headingEn: 'The Full 3-Round Diagram', headingKn: 'ಪೂರ್ಣ 3-Round Diagram',
      bodyEn: 'id=1: no state -> input_required(pick_files). id=2: pick_files answered, state verified -> input_required(summary). id=3: summary answered, state verified -> complete. Every round used a FRESH id, the SAME method/tool/arguments, and each requestState was cryptographically bound to that round\'s phase.',
      bodyKn: 'id=1: state ಇಲ್ಲ -> input_required(pick_files). id=2: pick_files ಉತ್ತರಿಸಲಾಗಿದೆ -> input_required(summary). id=3: summary ಉತ್ತರಿಸಲಾಗಿದೆ -> complete.' } },

    { type: 'concept', data: { headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Base64 encodes; it does not protect integrity. Use HMAC (or authenticated encryption if confidentiality is also needed).\n• requestState must bind principal, method, an argument digest, phase, and validated intermediate data.\n• We genuinely proved 5 different tamper attempts are all rejected by a real implementation.\n• Model output (like file selections) must be validated against an allow-list before it becomes trusted state -- never trust it for authorization.\n• The full 2-round workflow produces exactly ids [1,2,3] and resultTypes [input_required, input_required, complete].',
      bodyKn: '• Base64 encode ಮಾಡುತ್ತದೆ; ಇದೂ integrity ರಕ್ಷಿಸುವುದಿಲ್ಲ. HMAC ಬಳಸಿ.\n• requestState principal, method, argument digest, phase, validated data ಬಂಧಿಸಬೇಕು.\n• ನಾವು ನಿಜವಾಗಿ 5 ವಿಭಿನ್ನ tamper ಪ್ರಯತ್ನಗಳು ಎಲ್ಲಾ ತಿರಸ್ಕರಿಸಲ್ಪಟ್ಟಿವೆ ಎಂದೂ ಸಾಬೀತುಪಡಿಸಿದ್ದೇವೆ.\n• Model output ಅನ್ನೂ trusted state ಆಗುವ ಮೊದಲು ಒಂದೂ allow-list ವಿರುದ್ಧ ಮೌಲ್ಯೀಕರಿಸಬೇಕು.\n• ಪೂರ್ಣ 2-round workflow ನಿಖರವಾಗಿ ids [1,2,3] ಉತ್ಪಾದಿಸುತ್ತದೆ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Why does the next MRTR retry not need to resend all previous model responses?', qKn: 'ಮುಂದಿನ MRTR retry ಎಲ್ಲಾ ಹಿಂದಿನ model responses ಅನ್ನೂ ಏಕೆ ಮತ್ತೆ ಕಳುಹಿಸಬೇಕಾಗಿಲ್ಲ?',
        opts: ['The server ignores previous rounds', 'Validated intermediate data is carried in the next integrity-protected requestState', 'JSON-RPC automatically stores previous requests', 'The model provider maintains the state'],
        optsKn: ['server ಹಿಂದಿನ rounds ನಿರ್ಲಕ್ಷಿಸುತ್ತದೆ', 'Validated intermediate data ಮುಂದಿನ integrity-protected requestState ನಲ್ಲಿ ಒಯ್ಯಲಾಗುತ್ತದೆ', 'JSON-RPC ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಹಿಂದಿನ requests ಸಂಗ್ರಹಿಸುತ್ತದೆ', 'model provider state ಇಟ್ಟುಕೊಳ್ಳುತ್ತದೆ'],
        correct: 1 },
      { q: 'Which is insufficient by itself for protecting requestState?', qKn: 'requestState ರಕ್ಷಿಸಲು ಯಾವುದೂ ಸ್ವತಃ ಸಾಕಾಗುವುದಿಲ್ಲ?',
        opts: ['HMAC', 'Authenticated encryption', 'Base64 encoding', 'Cryptographic integrity verification'],
        optsKn: ['HMAC', 'Authenticated encryption', 'Base64 encoding', 'Cryptographic integrity verification'],
        correct: 2 },
      { q: 'Which identity should requestState be bound to?', qKn: 'requestState ಯಾವ identity ಗೆ ಬಂಧಿಸಬೇಕು?',
        opts: ['clientInfo.name', 'Model name', 'Authenticated principal', 'JSON-RPC id'],
        optsKn: ['clientInfo.name', 'Model ಹೆಸರು', 'Authenticated principal', 'JSON-RPC id'],
        correct: 2 },
      { q: 'The original arguments are {"audience": "developer"}. The retry changes them to {"audience": "executive"}. What should happen?', qKn: 'ಮೂಲ arguments {"audience": "developer"}. retry {"audience": "executive"} ಗೆ ಬದಲಾಯಿಸುತ್ತದೆ. ಏನಾಗಬೇಕು?',
        opts: ['Accept the retry', 'Restart the protocol session', 'Fail the request-state binding check', 'Ignore the new argument'],
        optsKn: ['retry ಸ್ವೀಕರಿಸಿ', 'protocol session ಮರುಪ್ರಾರಂಭಿಸಿ', 'request-state binding check ವಿಫಲಗೊಳಿಸಿ', 'ಹೊಸ argument ನಿರ್ಲಕ್ಷಿಸಿ'],
        correct: 2 },
      { q: 'Which sequence best describes this lesson\'s state machine?', qKn: 'ಈ ಪಾಠದ state machine ಅನ್ನೂ ಯಾವ ಅನುಕ್ರಮ ಅತ್ಯುತ್ತಮವಾಗಿ ವಿವರಿಸುತ್ತದೆ?',
        opts: ['summary -> pick_files -> complete', 'pick_files -> complete -> summary', 'pick_files -> summary -> complete', 'initialize -> sampling -> session close'],
        optsKn: ['summary -> pick_files -> complete', 'pick_files -> complete -> summary', 'pick_files -> summary -> complete', 'initialize -> sampling -> session close'],
        correct: 2 },
    ] } },
  ],
};
