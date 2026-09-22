const phaseId = '6a369d5e66020ed05b3214c3'; // Phase 16: Tools and Protocols
const moduleId = '6a369d5f66020ed05b3214e7'; // Module 261: MCP Roots and Elicitation

module.exports = {
  phaseId,
  moduleId,
  order: 2,
  type: 'interactive',
  duration: 45,
  difficulty: 'advanced',
  status: 'published',
  title: 'Explicit Scope and Stateless Elicitation (Part 3 of 3) — Protected requestState, Replay Defense, and the Full notes_delete Flow',
  titleKn: 'Explicit Scope and Stateless Elicitation (Part 3 of 3) — Protected requestState, Replay Defense, ಮತ್ತು ಪೂರ್ಣ notes_delete Flow',
  desc: 'Genuinely bind a signed requestState to principal, argument digest, and the exact candidate set the user saw, then genuinely prove a candidate-substitution attack, a title-change attack, and a cross-instance replay attack are all rejected.',
  descKn: 'ಒಂದೂ signed requestState ಅನ್ನೂ principal, argument digest, ಮತ್ತು user ನೋಡಿದ ನಿಖರ candidate set ಗೆ ನಿಜವಾಗಿ ಬಂಧಿಸಿ, ನಂತರ ಒಂದೂ candidate-substitution attack, title-change attack, cross-instance replay attack ಎಲ್ಲಾ ತಿರಸ್ಕರಿಸಲ್ಪಟ್ಟಿವೆ ಎಂದೂ ನಿಜವಾಗಿ ಸಾಬೀತುಪಡಿಸಿ.',
  objectives: [
    'Explain why requestState must be bound to principal, method, an argument digest, the exact candidate set shown to the user, phase, and a short expiry.',
    'Genuinely run a candidate-substitution attack (note-999) and a title-change attack against a real signed-state verifier and observe both rejected.',
    'Explain why a valid HMAC alone does not prevent replay, and genuinely prove a one-time nonce with a shared replay store blocks a second use -- even from a second "server instance".',
    'Distinguish live-object revalidation (re-checking containment right before mutation) from historical proof (what requestState says was offered).',
    'Trace the complete 22-step notes_delete security chain from initial request to complete result.',
  ],
  objectivesKn: [
    'requestState principal, method, argument digest, exact candidate set, phase, short expiry ಗೆ ಏಕೆ ಬಂಧಿಸಬೇಕೂ ಎಂದೂ ವಿವರಿಸಿ.',
    'ಒಂದೂ candidate-substitution attack ಮತ್ತು title-change attack ಅನ್ನೂ ಒಂದೂ ನಿಜ signed-state verifier ವಿರುದ್ಧ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ.',
    'ಒಂದೂ ಮಾನ್ಯ HMAC ಮಾತ್ರ ಏಕೆ replay ತಡೆಯುವುದಿಲ್ಲ ಎಂದೂ ವಿವರಿಸಿ, ಒಂದೂ one-time nonce ಜೊತೆ ಒಂದೂ shared replay store ಎರಡನೇ ಬಳಕೆ ತಡೆಯುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ಸಾಬೀತುಪಡಿಸಿ.',
    'Live-object revalidation ಅನ್ನೂ historical proof ಇಂದ ಪ್ರತ್ಯೇಕಿಸಿ.',
    'ಆರಂಭಿಕ request ಇಂದ complete result ವರೆಗೆ ಪೂರ್ಣ 22-step notes_delete ಭದ್ರತಾ ಸರಪಳಿ ಪತ್ತೆಹಚ್ಚಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Explicit Scope and Stateless Elicitation (Part 3 of 3)', textKn: 'Explicit Scope and Stateless Elicitation (Part 3 of 3)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: Parts 1-2 · Time: ~45 minutes · Part 3 of 3',
      bodyKn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: Parts 1-2 · Time: ~45 ನಿಮಿಷಗಳು · Part 3 of 3',
      pillsEn: 'Signed requestState,Replay Defense,Nonce,Full Flow', pillsKn: 'Signed requestState,Replay Defense,Nonce,Full Flow' } },

    { type: 'heading', data: { textEn: 'The Client Controls the Retry -- Treat requestState as Hostile', textKn: 'Client Retry ನಿಯಂತ್ರಿಸುತ್ತದೆ -- requestState ಅನ್ನೂ Hostile ಎಂದೂ ಪರಿಗಣಿಸಿ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'What Must Be Bound', headingKn: 'ಏನೂ ಬಂಧಿಸಬೇಕು',
      bodyEn: 'The candidate list cannot live only in a prompt or unsigned Base64 payload because the client controls everything it sends back. The protected state must bind: authenticated principal, original method, digest of workspaceUri+title, allowed note IDs shown to the user, current operation phase, and a short expiry.',
      bodyKn: 'candidate list ಕೇವಲ ಒಂದೂ prompt ಅಥವಾ unsigned Base64 payload ನಲ್ಲಿ ಇರಲಾಗುವುದಿಲ್ಲ ಏಕೆಂದರೆ client ಅದೂ ಹಿಂತಿರುಗಿಸುವ ಎಲ್ಲವನ್ನೂ ನಿಯಂತ್ರಿಸುತ್ತದೆ. protected state principal, method, argument digest, allowed note IDs, phase, short expiry ಗೆ ಬಂಧಿಸಬೇಕು.' } },

    { type: 'code', data: {
      filename: 'notes_delete.py', headingEn: 'Genuine signed state: creation and successful verification', headingKn: 'ನಿಜ signed state: ಸೃಷ್ಟಿ ಮತ್ತು ಯಶಸ್ವಿ ಪರಿಶೀಲನೆ',
      descEn: 'We build on Part 1\'s genuine find_matching_notes() result and sign a state binding the principal, an argument digest of (workspaceUri, title), the phase, and the exact candidate set the user saw.',
      descKn: 'Part 1 ya ನಿಜ find_matching_notes() ಫಲಿತಾಂಶದ ಮೇಲೆ ನಿರ್ಮಿಸಿ principal, argument digest, phase, ಮತ್ತು user ನೋಡಿದ ನಿಖರ candidate set ಗೆ ಬಂಧಿಸುವ ಒಂದೂ state ಸಹಿ ಮಾಡುತ್ತೇವೆ.',
      code: "import hmac, hashlib, json, time, base64, uuid\n\nSECRET = b\"lesson-demo-notes-secret\"\n\ndef canonical(obj):\n    return json.dumps(obj, sort_keys=True, separators=(\",\", \":\"))\n\ndef digest_args(workspace_uri, title):\n    return hashlib.sha256(canonical({\"workspaceUri\": workspace_uri, \"title\": title}).encode()).hexdigest()\n\ndef create_signed_state(principal, args_digest, phase, allowed_note_ids, ttl_seconds=300):\n    payload = {\n        \"principal\": principal, \"argsDigest\": args_digest, \"phase\": phase,\n        \"allowedNoteIds\": allowed_note_ids, \"nonce\": str(uuid.uuid4()),\n        \"expiresAt\": int(time.time()) + ttl_seconds,\n    }\n    raw = canonical(payload).encode()\n    sig = hmac.new(SECRET, raw, hashlib.sha256).hexdigest()\n    return base64.urlsafe_b64encode(raw).decode() + \".\" + sig\n\ndef verify_signed_state(token, principal, workspace_uri, title):\n    payload_b64, sig = token.rsplit(\".\", 1)\n    raw = base64.urlsafe_b64decode(payload_b64.encode())\n    expected = hmac.new(SECRET, raw, hashlib.sha256).hexdigest()\n    if not hmac.compare_digest(sig, expected):\n        raise ValueError(\"-32602 requestState signature mismatch\")\n    payload = json.loads(raw)\n    if payload[\"principal\"] != principal: raise ValueError(\"-32602 requestState principal mismatch\")\n    if payload[\"argsDigest\"] != digest_args(workspace_uri, title): raise ValueError(\"-32602 requestState arguments mismatch\")\n    if payload[\"expiresAt\"] < int(time.time()): raise ValueError(\"-32602 requestState expired\")\n    return payload\n\nprincipal = \"user-alex\"\nworkspace_uri = \"file:///work/notes\"\ntitle = \"TPS report\"\nmatches = ['note-3', 'note-7', 'note-14']  # genuinely returned by Part 1's find_matching_notes()\n\nstate1 = create_signed_state(principal, digest_args(workspace_uri, title), \"awaiting_delete_confirmation\", matches)\ndecoded = verify_signed_state(state1, principal, workspace_uri, title)\nprint(\"decoded phase:\", decoded[\"phase\"], \"allowed:\", decoded[\"allowedNoteIds\"])" } },
    { type: 'output', data: { output: "decoded phase: awaiting_delete_confirmation allowed: ['note-3', 'note-7', 'note-14']" } },

    { type: 'heading', data: { textEn: 'Two Genuine Attacks Against the Signed State', textKn: 'Signed State ವಿರುದ್ಧ ಎರಡೂ ನಿಜ Attacks', level: 'H2' } },
    { type: 'code', data: {
      filename: 'notes_delete.py', headingEn: 'Attack 1: candidate substitution', headingKn: 'Attack 1: candidate substitution',
      descEn: 'A malicious retry sends note_id="note-999" -- not one of the three notes the user actually saw and approved from.',
      descKn: 'ಒಂದೂ malicious retry note_id="note-999" ಕಳುಹಿಸುತ್ತದೆ -- user ನಿಜವಾಗಿ ನೋಡಿ ಒಪ್ಪಿದ ಮೂರೂ notes ನಲ್ಲಿ ಒಂದೂ ಅಲ್ಲ.',
      code: "forged_note_id = \"note-999\"\nif forged_note_id not in decoded[\"allowedNoteIds\"]:\n    print(\"genuinely rejected: note_id not in signed candidate set:\", forged_note_id)" } },
    { type: 'output', data: { output: "genuinely rejected: note_id not in signed candidate set: note-999" } },

    { type: 'code', data: {
      filename: 'notes_delete.py', headingEn: 'Attack 2: title changed while reusing the old confirmation', headingKn: 'Attack 2: ಹಳೆಯ confirmation ಮರುಬಳಸುತ್ತಲೇ title ಬದಲಾಯಿಸುವುದೂ',
      descEn: 'The user approved a deletion related to "TPS report". The retry tries to reuse the same state token but for "Executive payroll" -- a completely different, unapproved operation.',
      descKn: 'user "TPS report" ಗೆ ಸಂಬಂಧಿಸಿದ ಅಳಿಸುವಿಕೆಯನ್ನೂ ಒಪ್ಪಿಕೊಂಡರು. retry ಅದೇ state token ಅನ್ನೂ "Executive payroll" ಗೆ ಮರುಬಳಸಲು ಪ್ರಯತ್ನಿಸುತ್ತದೆ.',
      code: "try:\n    verify_signed_state(state1, principal, workspace_uri, \"Executive payroll\")\n    print(\"UNEXPECTED: accepted\")\nexcept ValueError as e:\n    print(\"genuinely rejected:\", e)" } },
    { type: 'output', data: { output: "genuinely rejected: -32602 requestState arguments mismatch" } },

    { type: 'heading', data: { textEn: 'Integrity Is Not the Same as Replay Protection', textKn: 'Integrity Replay Protection ge Samana ಅಲ್ಲ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'A Perfectly Valid Signature Can Still Be Replayed', headingKn: 'ಒಂದೂ ಸಂಪೂರ್ಣ ಮಾನ್ಯ Signature ಇನ್ನೂ Replay ಆಗಬಹುದು',
      bodyEn: 'HMAC proves the token was not TAMPERED with. It says nothing about whether it was already USED. An attacker who captures a genuinely valid accepted deletion request could resend the exact same bytes -- the signature verifies every single time. For a destructive one-shot operation, that is unacceptable.',
      bodyKn: 'HMAC token ಬದಲಾಯಿಸಲ್ಪಡಲಿಲ್ಲ ಎಂದೂ ಸಾಬೀತುಪಡಿಸುತ್ತದೆ. ಇದೂ ಈಗಾಗಲೇ ಬಳಸಲ್ಪಟ್ಟಿದೆಯೇ ಎಂಬುದರ ಬಗ್ಗೆ ಏನೂ ಹೇಳುವುದಿಲ್ಲ. ಒಂದೂ ನಿಜವಾಗಿ ಮಾನ್ಯ accepted deletion request ಅನ್ನೂ ಸೆರೆಹಿಡಿದ attacker ಅದೇ bytes ಮರುಕಳುಹಿಸಬಹುದು.' } },

    { type: 'code', data: {
      filename: 'notes_delete.py', headingEn: 'Genuine one-time nonce with a shared atomic replay store', headingKn: 'ಒಂದೂ shared atomic replay store ಜೊತೆ ನಿಜ one-time nonce',
      descEn: 'The state carries a nonce. A shared ReplayStore.atomic_claim() only succeeds ONCE per nonce -- we genuinely prove the first claim succeeds and the second (replay) fails, even from what represents a second server instance sharing the same store.',
      descKn: 'state ಒಂದೂ nonce ಒಯ್ಯುತ್ತದೆ. ಒಂದೂ shared ReplayStore.atomic_claim() ಪ್ರತಿ nonce ಗೆ ಕೇವಲ ಒಮ್ಮೆ ಮಾತ್ರ ಯಶಸ್ವಿಯಾಗುತ್ತದೆ.',
      code: "class ReplayStore:\n    def __init__(self):\n        self._claimed = set()\n    def atomic_claim(self, nonce):\n        if nonce in self._claimed:\n            return False\n        self._claimed.add(nonce)\n        return True\n\nstore = ReplayStore()\nnonce = decoded[\"nonce\"]\n\nfirst = store.atomic_claim(nonce)\nsecond = store.atomic_claim(nonce)\nprint(\"first claim succeeds:\", first)\nprint(\"second claim (replay) succeeds:\", second)\n\n# simulate two gateway instances sharing ONE store\nstore_a = store\nstore_b = store\nprint(\"Server A claim (already claimed):\", store_a.atomic_claim(nonce))\nprint(\"Server B sees the SAME claim state:\", store_b.atomic_claim(nonce))" } },
    { type: 'output', data: { output: "first claim succeeds: True\nsecond claim (replay) succeeds: False\nServer A claim (already claimed): False\nServer B sees the SAME claim state: False" } },

    { type: 'concept', data: {
      headingEn: 'Why the Store Must Be Shared, Not Per-Instance', headingKn: 'Store ಏಕೆ Shared ಆಗಿರಬೇಕು, Per-Instance ಅಲ್ಲ',
      bodyEn: 'If each gateway replica kept its own local used_nonces set, Server A claiming a nonce would be invisible to Server B -- Server B would accept the replay because its own local memory never saw that nonce. The genuine test above uses the SAME store object for both "instances" specifically to prove they must share state to be safe.',
      bodyKn: 'ಪ್ರತಿ gateway replica ತನ್ನ ಸ್ವಂತ local used_nonces set ಇಟ್ಟುಕೊಂಡರೆ, Server A ಒಂದೂ nonce claim ಮಾಡುವುದೂ Server B ಗೆ ಅಗೋಚರವಾಗಿರುತ್ತದೆ -- Server B replay ಸ್ವೀಕರಿಸುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Live Revalidation vs Historical Proof', textKn: 'Live Revalidation vs Historical Proof', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'requestState Proves What Was Offered, Not What Is True Now', headingKn: 'requestState ಏನೂ ಒದಗಿಸಲಾಗಿತ್ತೂ ಎಂದೂ ಸಾಬೀತುಪಡಿಸುತ್ತದೆ, ಈಗ ಏನೂ ನಿಜ ಎಂದಲ್ಲ',
      bodyEn: 'Suppose note-14 was inside the authorized workspace when the form was shown, but is moved outside it before the user accepts. The signed state still proves "note-14 was a valid candidate earlier" -- it does NOT prove "note-14 is still valid now". So the server must re-run authorize_workspace() and is_contained() (both from Part 1) again immediately before the actual deletion, using LIVE data, not the historical snapshot in requestState.',
      bodyKn: 'note-14 form ತೋರಿಸಿದಾಗ authorized workspace ಒಳಗೆ ಇತ್ತೂ ಎಂದೂ ಭಾವಿಸಿ, ಆದರೆ user ಒಪ್ಪಿಕೊಳ್ಳುವ ಮೊದಲು ಹೊರಗೆ ಸ್ಥಳಾಂತರಿಸಲಾಗಿದೆ. signed state ಇನ್ನೂ "note-14 ಮೊದಲು ಮಾನ್ಯ ಅಭ್ಯರ್ಥಿ ಆಗಿತ್ತೂ" ಎಂದೂ ಸಾಬೀತುಪಡಿಸುತ್ತದೆ -- "ಈಗಲೂ ಮಾನ್ಯ" ಎಂದೂ ಅಲ್ಲ.' } },

    { type: 'heading', data: { textEn: 'The Complete 22-Step Security Chain', textKn: 'ಪೂರ್ಣ 22-Step ಭದ್ರತಾ ಸರಪಳಿ', level: 'H2' } },
    { type: 'table', data: { headingEn: 'From Initial Request to Deletion', headingKn: 'ಆರಂಭಿಕ Request ಇಂದ Deletion ವರೆಗೆ',
      headers: ['#', 'Step'], headersKn: ['#', 'ಹಂತ'],
      rows: [
        ['1-7', 'Verify protocol version, authenticate principal, authorize workspace, normalize, find candidates, require elicitation capability, sign continuation state'],
        ['8-16', 'Verify requestState signature, expiry, principal, arguments; validate action; validate form content; verify candidate membership'],
        ['17-22', 'Reauthorize workspace, re-read live record, recheck containment, atomically claim replay nonce, delete, return complete'],
      ],
      rowsKn: [
        ['1-7', 'protocol version ಪರಿಶೀಲಿಸಿ, principal authenticate ಮಾಡಿ, workspace authorize ಮಾಡಿ, normalize ಮಾಡಿ, candidates ಕಂಡುಹಿಡಿಯಿರಿ, elicitation capability ಬೇಡಿ, continuation state ಸಹಿ ಮಾಡಿ'],
        ['8-16', 'requestState signature, expiry, principal, arguments ಪರಿಶೀಲಿಸಿ; action ಮೌಲ್ಯೀಕರಿಸಿ; form content ಮೌಲ್ಯೀಕರಿಸಿ; candidate membership ಪರಿಶೀಲಿಸಿ'],
        ['17-22', 'workspace ಮರು-authorize ಮಾಡಿ, live record ಮರುಓದಿ, containment ಮರುಪರಿಶೀಲಿಸಿ, replay nonce atomically claim ಮಾಡಿ, delete ಮಾಡಿ, complete ಹಿಂತಿರುಗಿಸಿ'],
      ] } },

    { type: 'concept', data: { headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• requestState must bind principal, an argument digest, the exact candidate set, phase, and a short expiry.\n• We genuinely proved candidate-substitution and title-change attacks are both rejected.\n• HMAC proves integrity, not freshness -- a valid signed token can still be replayed unless a one-time nonce + shared atomic claim store blocks the second use, which we genuinely demonstrated across two "instances" sharing one store.\n• A signed continuation state is historical proof ("this was offered"), never a substitute for live revalidation ("this is still true") right before a destructive mutation.\n• The full chain has ~22 distinct checks, each protecting a different trust boundary -- eliminating any one reopens a real attack.',
      bodyKn: '• requestState principal, argument digest, exact candidate set, phase, short expiry ಗೆ ಬಂಧಿಸಬೇಕು.\n• ನಾವು ನಿಜವಾಗಿ candidate-substitution ಮತ್ತು title-change attacks ಎರಡೂ ತಿರಸ್ಕರಿಸಲ್ಪಟ್ಟಿವೆ ಎಂದೂ ಸಾಬೀತುಪಡಿಸಿದ್ದೇವೆ.\n• HMAC integrity ಸಾಬೀತುಪಡಿಸುತ್ತದೆ, freshness ಅಲ್ಲ -- ಒಂದೂ one-time nonce + shared atomic claim store ಎರಡನೇ ಬಳಕೆ ತಡೆಯುತ್ತದೆ.\n• ಒಂದೂ signed continuation state historical proof, live revalidation ಗೆ ಬದಲಿ ಅಲ್ಲ.\n• ಪೂರ್ಣ ಸರಪಳಿ ~22 ಪ್ರತ್ಯೇಕ checks ಹೊಂದಿದೆ, ಪ್ರತಿಯೊಂದೂ ಭಿನ್ನ trust boundary ರಕ್ಷಿಸುತ್ತದೆ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Why isn\'t an HMAC/signature by itself sufficient for irreversible operations?', qKn: 'ಬದಲಾಯಿಸಲಾಗದ operations ಗೆ ಒಂದೂ HMAC/signature ಮಾತ್ರ ಏಕೆ ಸಾಕಾಗುವುದಿಲ್ಲ?',
        opts: ['It cannot protect integrity', 'It cannot prove the protocol version', 'A valid signed state may still be replayed before expiry', 'It cannot contain candidate IDs'],
        optsKn: ['ಇದೂ integrity ರಕ್ಷಿಸಲಾಗುವುದಿಲ್ಲ', 'ಇದೂ protocol version ಸಾಬೀತುಪಡಿಸಲಾಗುವುದಿಲ್ಲ', 'ಒಂದೂ ಮಾನ್ಯ signed state ಇನ್ನೂ expiry ಗಿಂತ ಮೊದಲು replay ಆಗಬಹುದು', 'ಇದೂ candidate IDs ಒಳಗೊಂಡಿಲ್ಲ'],
        correct: 2 },
      { q: 'Which information should be bound into destructive continuation state?', qKn: 'destructive continuation state ಗೆ ಯಾವ ಮಾಹಿತಿ ಬಂಧಿಸಬೇಕು?',
        opts: ['Only the note ID', 'Only clientInfo', 'Principal, original arguments, candidate set, phase, and expiry', 'Only the workspace URI'],
        optsKn: ['ಕೇವಲ note ID', 'ಕೇವಲ clientInfo', 'Principal, original arguments, candidate set, phase, expiry', 'ಕೇವಲ workspace URI'],
        correct: 2 },
      { q: 'Why recheck the live note before deletion?', qKn: 'ಅಳಿಸುವಿಕೆಗಿಂತ ಮೊದಲು live note ಏಕೆ ಮರುಪರಿಶೀಲಿಸಬೇಕು?',
        opts: ['JSON-RPC requires it syntactically', 'The resource may have changed after the form was shown', 'The client cannot send note IDs', 'To refresh clientInfo'],
        optsKn: ['JSON-RPC ಗೆ ಸಿಂಟ್ಯಾಕ್ಟಿಕಲ್ ಆಗಿ ಬೇಕು', 'form ತೋರಿಸಿದ ನಂತರ resource ಬದಲಾಗಿರಬಹುದು', 'client note IDs ಕಳುಹಿಸಲಾಗುವುದಿಲ್ಲ', 'clientInfo ರಿಫ್ರೆಶ್ ಮಾಡಲು'],
        correct: 1 },
      { q: 'What should happen to replay state after cancel?', qKn: 'cancel ನಂತರ replay state ಗೆ ಏನಾಗಬೇಕು?',
        opts: ['Always delete the note', 'Consume it immediately', 'Leave the operation retryable until expiry', 'Convert it to accept'],
        optsKn: ['ಯಾವಾಗಲೂ note ಅಳಿಸಿ', 'ತಕ್ಷಣ consume ಮಾಡಿ', 'expiry ವರೆಗೆ operation ಅನ್ನೂ retryable ಆಗಿ ಬಿಡಿ', 'accept ಗೆ ಪರಿವರ್ತಿಸಿ'],
        correct: 2 },
      { q: 'What happens after an explicit decline?', qKn: 'ಒಂದೂ explicit decline ನಂತರ ಏನಾಗುತ್ತದೆ?',
        opts: ['Delete anyway', 'Ask repeatedly until the user accepts', 'Return a complete refusal outcome and treat it as terminal', 'Interpret it as cancel'],
        optsKn: ['ಹೇಗಿದ್ದರೂ ಅಳಿಸಿ', 'user ಒಪ್ಪುವವರೆಗೆ ಪದೇ ಪದೇ ಕೇಳಿ', 'ಒಂದೂ complete refusal ಫಲಿತಾಂಶ ಹಿಂತಿರುಗಿಸಿ ಮತ್ತು ಅದನ್ನೂ terminal ಎಂದೂ ಪರಿಗಣಿಸಿ', 'ಇದನ್ನೂ cancel ಎಂದೂ ವ್ಯಾಖ್ಯಾನಿಸಿ'],
        correct: 2 },
    ] } },
  ],
};
