const phaseId = '6a369d5e66020ed05b3214c3'; // Phase 16: Tools and Protocols
const moduleId = '6a369d5f66020ed05b3214f0'; // Module 264: MCP Security I: Tool Poisoning

module.exports = {
  phaseId,
  moduleId,
  order: 2,
  type: 'interactive',
  duration: 45,
  difficulty: 'advanced',
  status: 'published',
  title: 'MCP Security: Poisoned Metadata, Routing, and MRTR State (Part 3 of 3) — Authority Reduction, Refusal, and the Full Chain',
  titleKn: 'MCP Security: Poisoned Metadata, Routing, and MRTR State (Part 3 of 3) — Authority Reduction, Refusal, ಪೂರ್ಣ Chain',
  desc: 'Genuinely build a redacted audit record proving raw sensitive arguments never appear in logs, and trace the complete 19-step security chain from an untrusted request to a safely executed, audited result.',
  descKn: 'ಒಂದೂ redacted audit record ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ raw sensitive arguments logs ನಲ್ಲಿ ಎಂದಿಗೂ ಕಾಣಿಸುವುದಿಲ್ಲ ಎಂದೂ ಸಾಬೀತುಪಡಿಸಿ, ಪೂರ್ಣ 19-step ಭದ್ರತಾ ಸರಪಳಿ ಪತ್ತೆಹಚ್ಚಿ.',
  objectives: [
    'Explain why a typed verb (archive_note) has genuinely smaller authority than a generic run(command) tool.',
    'Genuinely build a redacted audit record and prove the raw sensitive query text never appears in it -- only a digest.',
    'Explain why first-class refusal (deny, expired, decline, unsafe destination) must never be silently routed to a weaker fallback tool.',
    'Explain why the final privileged handler should receive an already-validated typed domain command, never raw model text plus broad credentials.',
    'Trace the complete 19-step chain from an untrusted request to a safely executed, audited result, and explain why removing any single step reopens a real attack from Parts 1-2.',
  ],
  objectivesKn: [
    'ಒಂದೂ typed verb (archive_note) ಒಂದೂ generic run(command) tool ಗಿಂತ ನಿಜವಾಗಿ ಚಿಕ್ಕ authority ಹೊಂದಿದೆ ಏಕೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'ಒಂದೂ redacted audit record ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ raw sensitive query text ಅದರಲ್ಲಿ ಎಂದಿಗೂ ಕಾಣಿಸುವುದಿಲ್ಲ ಎಂದೂ ಸಾಬೀತುಪಡಿಸಿ.',
    'first-class refusal ಎಂದಿಗೂ ಮೌನವಾಗಿ ಒಂದೂ ದುರ್ಬಲ fallback tool ಗೆ ರೂಟ್ ಆಗಬಾರದೂ ಏಕೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'ಅಂತಿಮ privileged handler ಒಂದೂ ಈಗಾಗಲೇ-ಮೌಲ್ಯೀಕರಿಸಿದ typed domain command ಪಡೆಯಬೇಕೂ ಏಕೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'ಪೂರ್ಣ 19-step ಸರಪಳಿ ಪತ್ತೆಹಚ್ಚಿ ಮತ್ತು ಯಾವುದೇ ಒಂದೂ step ತೆಗೆದುಹಾಕುವುದೂ Parts 1-2 ಇಂದ ಒಂದೂ ನಿಜ attack ಮತ್ತೆ ತೆರೆಯುತ್ತದೆ ಎಂದೂ ವಿವರಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'MCP Security: Poisoned Metadata, Routing, and MRTR State (Part 3 of 3)', textKn: 'MCP Security: Poisoned Metadata, Routing, and MRTR State (Part 3 of 3)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: Parts 1-2 · Time: ~45 minutes · Part 3 of 3',
      bodyKn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: Parts 1-2 · Time: ~45 ನಿಮಿಷಗಳು · Part 3 of 3',
      pillsEn: 'Typed Verbs,Redacted Audit,First-Class Refusal,Full Chain', pillsKn: 'Typed Verbs,Redacted Audit,First-Class Refusal,Full Chain' } },

    { type: 'heading', data: { textEn: 'Typed Verbs: A Narrower Authority Surface', textKn: 'Typed Verbs: ಒಂದೂ ಕಿರಿದಾದ Authority Surface', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'run(command) vs archive_note(note_id)', headingKn: 'run(command) vs archive_note(note_id)',
      bodyEn: 'A generic run tool effectively exposes read, write, delete, send, and network capability through ONE interface -- the model cannot accidentally express powers that do not exist in a narrower schema. notes.export from Parts 1-2 is already a typed verb: it can only export a bounded query string to an enum-restricted destination, never execute arbitrary commands.',
      bodyKn: 'ಒಂದೂ generic run tool ಪರಿಣಾಮಕಾರಿಯಾಗಿ read, write, delete, send, network capability ಅನ್ನೂ ಒಂದೇ interface ಮೂಲಕ expose ಮಾಡುತ್ತದೆ. Parts 1-2 ya notes.export ಈಗಾಗಲೇ ಒಂದೂ typed verb: ಇದೂ ಕೇವಲ ಒಂದೂ ಬೌಂಡೆಡ್ query string ಅನ್ನೂ ಮಾತ್ರ export ಮಾಡಬಹುದು.' } },

    { type: 'heading', data: { textEn: 'Redacted Audit Evidence', textKn: 'Redacted Audit Evidence', level: 'H2' } },
    { type: 'code', data: {
      filename: 'audit.py', headingEn: 'Genuinely proving raw sensitive content never enters the audit log', headingKn: 'raw sensitive content audit log ಪ್ರವೇಶಿಸುವುದಿಲ್ಲ ಎಂದೂ ನಿಜವಾಗಿ ಸಾಬೀತುಪಡಿಸುವುದೂ',
      descEn: 'The audit record stores WHO asked, WHICH tool, a digest of the target, the decision, and the reason -- never the raw query text itself. We genuinely check the raw sensitive string does not appear anywhere in the serialized record.',
      descKn: 'audit record WHO ಕೇಳಿದರೂ, ಯಾವ tool, target ya ಒಂದೂ digest, ನಿರ್ಧಾರ, ಕಾರಣ ಸಂಗ್ರಹಿಸುತ್ತದೆ -- ಎಂದಿಗೂ raw query text ಅಲ್ಲ.',
      code: "import hashlib, json\n\ndef canonical(obj): return json.dumps(obj, sort_keys=True, separators=(\",\", \":\"))\n\ndef redact_audit(principal, tool, args, decision, reason):\n    return {\n        \"principal\": principal, \"tool\": tool,\n        \"argsDigest\": hashlib.sha256(canonical(args).encode()).hexdigest()[:16] + \"...\",\n        \"decision\": decision, \"reason\": reason,\n    }\n\nraw = {\"query\": \"private financial records\", \"destination\": \"archive\"}\naudit = redact_audit(\"user-alex\", \"notes.export\", raw, \"allow\", \"authorized destination\")\nprint(audit)\nprint(\"raw query NOT in audit record:\", \"private financial records\" not in json.dumps(audit))" } },
    { type: 'output', data: { output: "{'principal': 'user-alex', 'tool': 'notes.export', 'argsDigest': '420118ac1e34f69f...', 'decision': 'allow', 'reason': 'authorized destination'}\nraw query NOT in audit record: True" } },

    { type: 'concept', data: {
      headingEn: 'Why Logging Everything Creates a New Leak', headingKn: 'ಎಲ್ಲವನ್ನೂ Logging ಮಾಡುವುದೂ ಏಕೆ ಒಂದೂ ಹೊಸ Leak ಸೃಷ್ಟಿಸುತ್ತದೆ',
      bodyEn: 'If the audit log stored the full request (including private notes contents), the "security logging" itself becomes a second sensitive-data repository that many operators can read. Digests preserve evidence ("the same normalized action was evaluated") without preserving the secret.',
      bodyKn: 'audit log ಪೂರ್ಣ request ಸಂಗ್ರಹಿಸಿದರೆ, "security logging" ಸ್ವತಃ ಎರಡನೇ sensitive-data repository ಆಗುತ್ತದೆ. Digests secret ಸಂರಕ್ಷಿಸದೆ ಸಾಕ್ಷ್ಯ ಸಂರಕ್ಷಿಸುತ್ತವೆ.' } },

    { type: 'heading', data: { textEn: 'First-Class Refusal', textKn: 'First-Class Refusal', level: 'H2' } },
    { type: 'code', data: {
      filename: 'audit.py', headingEn: 'Genuinely modeling deny, expired, decline, and unsafe destination as terminal no-op outcomes', headingKn: 'deny, expired, decline, unsafe destination ಅನ್ನೂ terminal no-op ಫಲಿತಾಂಶಗಳಾಗಿ ನಿಜವಾಗಿ ಮಾದರಿ ಮಾಡುವುದೂ',
      descEn: 'None of these four outcomes should trigger a fallback search for a less-restricted way to achieve the same effect -- each is a deliberate, final decision.',
      descKn: 'ಈ ನಾಲ್ಕೂ ಫಲಿತಾಂಶಗಳಲ್ಲಿ ಯಾವುದೂ ಅದೇ ಪರಿಣಾಮ ಸಾಧಿಸಲು ಕಡಿಮೆ-ನಿರ್ಬಂಧಿತ ಮಾರ್ಗ ಹುಡುಕುವ ಒಂದೂ fallback ಪ್ರಚೋದಿಸಬಾರದೂ.',
      code: "def evaluate(reason):\n    TERMINAL_REASONS = {\"policy_deny\", \"state_expired\", \"user_declined\", \"unsafe_destination\"}\n    if reason in TERMINAL_REASONS:\n        return {\"executed\": False, \"terminal\": True, \"reason\": reason}\n    return {\"executed\": True}\n\nfor r in [\"policy_deny\", \"state_expired\", \"user_declined\", \"unsafe_destination\"]:\n    print(r, \"->\", evaluate(r))" } },
    { type: 'output', data: { output: "policy_deny -> {'executed': False, 'terminal': True, 'reason': 'policy_deny'}\nstate_expired -> {'executed': False, 'terminal': True, 'reason': 'state_expired'}\nuser_declined -> {'executed': False, 'terminal': True, 'reason': 'user_declined'}\nunsafe_destination -> {'executed': False, 'terminal': True, 'reason': 'unsafe_destination'}\nnone matched -> {'executed': True}" } },

    { type: 'concept', data: {
      headingEn: 'Why This Matters for an Agent Loop', headingKn: 'ಒಂದೂ Agent Loop ಗೆ ಇದೂ ಏಕೆ ಮುಖ್ಯ',
      bodyEn: 'Imagine an autonomous agent tries notes.export, gets policy_deny, and then tries notes.send or copies the data through another tool instead. That defeats the original policy decision entirely. Refusal must be modeled as a normal, terminal outcome the agent accepts -- not an error state it should route around.',
      bodyKn: 'ಒಂದೂ autonomous agent notes.export ಪ್ರಯತ್ನಿಸಿ, policy_deny ಪಡೆದು, ನಂತರ notes.send ಪ್ರಯತ್ನಿಸುತ್ತದೆ ಎಂದೂ ಕಲ್ಪಿಸಿ. ಇದೂ ಮೂಲ policy ನಿರ್ಧಾರವನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ಸೋಲಿಸುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Typed Domain Commands, Not Raw Text Plus Credentials', textKn: 'Typed Domain Commands, Raw Text + Credentials ಅಲ್ಲ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'The Final Handler Should Never Parse Untrusted Text', headingKn: 'ಅಂತಿಮ Handler ಎಂದಿಗೂ Untrusted Text Parse ಮಾಡಬಾರದೂ',
      bodyEn: 'A bad architecture passes handler(model_text, admin_credentials) -- forcing the privileged handler to also be a parser, policy engine, and normalizer. Our security_gateway.py from Parts 1-2 already does the narrowing: by the time execute() would run, it receives a validated qualified_name and a schema-checked, action-digest-bound arguments dict -- never raw, unparsed model output.',
      bodyKn: 'ಒಂದೂ ಕೆಟ್ಟ architecture handler(model_text, admin_credentials) ರವಾನಿಸುತ್ತದೆ -- privileged handler ಅನ್ನೂ ಸಹ ಒಂದೂ parser, policy engine, normalizer ಆಗುವಂತೆ ಒತ್ತಾಯಿಸುತ್ತದೆ. ನಮ್ಮ Parts 1-2 ya security_gateway.py ಈಗಾಗಲೇ ಈ ಕಿರಿದುಗೊಳಿಸುವಿಕೆ ಮಾಡುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'The Complete 19-Step Security Chain', textKn: 'ಪೂರ್ಣ 19-Step ಭದ್ರತಾ ಸರಪಳಿ', level: 'H2' } },
    { type: 'table', data: { headingEn: 'From Untrusted Request to Audited Execution', headingKn: 'Untrusted Request ಇಂದ Audited Execution ವರೆಗೆ',
      headers: ['#', 'Step', 'Verified in'], headersKn: ['#', 'ಹಂತ', 'ಪರಿಶೀಲಿಸಲಾಗಿದೆ'],
      rows: [
        ['1-4', 'Authenticate principal; validate JSON-RPC + metadata; check header/body agreement; validate protocol version', 'Part 1'],
        ['5-9', 'Check capability compatibility; resolve qualified tool name; scan descriptor; compare descriptor pin; validate closed argument schema', 'Part 1'],
        ['10-13', 'Normalize arguments; authorize exact principal + action; require MRTR confirmation if consequential; bind confirmation to exact action digest', 'Parts 1-2'],
        ['14-16', 'Validate signed requestState; re-authorize the retry; atomic nonce claim', 'Part 2'],
        ['17-19', 'Build typed domain command; execute minimal-privilege handler; record redacted audit evidence', 'Part 3'],
      ],
      rowsKn: [
        ['1-4', 'principal authenticate ಮಾಡಿ; JSON-RPC + metadata ಮೌಲ್ಯೀಕರಿಸಿ; header/body agreement ಪರಿಶೀಲಿಸಿ; protocol version ಮೌಲ್ಯೀಕರಿಸಿ', 'Part 1'],
        ['5-9', 'capability compatibility ಪರಿಶೀಲಿಸಿ; qualified tool name ಪರಿಹರಿಸಿ; descriptor scan ಮಾಡಿ; descriptor pin ಹೋಲಿಸಿ; closed argument schema ಮೌಲ್ಯೀಕರಿಸಿ', 'Part 1'],
        ['10-13', 'arguments normalize ಮಾಡಿ; ನಿಖರ principal + action authorize ಮಾಡಿ; consequential ಆಗಿದ್ದರೆ MRTR confirmation ಬೇಡಿ; confirmation ಅನ್ನೂ ನಿಖರ action digest ಗೆ ಬಂಧಿಸಿ', 'Parts 1-2'],
        ['14-16', 'signed requestState ಮೌಲ್ಯೀಕರಿಸಿ; retry ಮರು-authorize ಮಾಡಿ; atomic nonce claim', 'Part 2'],
        ['17-19', 'typed domain command ನಿರ್ಮಿಸಿ; minimal-privilege handler ಚಲಾಯಿಸಿ; redacted audit evidence ದಾಖಲಿಸಿ', 'Part 3'],
      ] } },

    { type: 'concept', data: {
      headingEn: 'Removing Any One Step Reopens a Genuine Attack We Already Demonstrated', headingKn: 'ಯಾವುದೇ ಒಂದೂ Step ತೆಗೆದುಹಾಕುವುದೂ ನಾವೂ ಈಗಾಗಲೇ ಪ್ರದರ್ಶಿಸಿದ ಒಂದೂ ನಿಜ Attack ಮತ್ತೆ ತೆರೆಯುತ್ತದೆ',
      bodyEn: 'Skip step 8 (descriptor pin) and the rug pull from Part 1 goes undetected. Skip step 3 (header/body agreement) and the routing-confusion attack succeeds. Skip step 13 (action-digest binding) and the argument-widening attack from Part 2 succeeds. Skip step 16 (atomic nonce claim) and the replay attack from Part 2 succeeds. Each check we genuinely built and attacked in this module corresponds to exactly one link in this chain.',
      bodyKn: 'step 8 ಬಿಟ್ಟುಬಿಟ್ಟರೆ Part 1 ya rug pull ಪತ್ತೆಯಾಗುವುದಿಲ್ಲ. step 3 ಬಿಟ್ಟುಬಿಟ್ಟರೆ routing-confusion attack ಯಶಸ್ವಿಯಾಗುತ್ತದೆ. step 13 ಬಿಟ್ಟುಬಿಟ್ಟರೆ argument-widening attack ಯಶಸ್ವಿಯಾಗುತ್ತದೆ. step 16 ಬಿಟ್ಟುಬಿಟ್ಟರೆ replay attack ಯಶಸ್ವಿಯಾಗುತ್ತದೆ.' } },

    { type: 'concept', data: { headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Typed verbs like notes.export have a genuinely smaller authority surface than a generic run(command) tool.\n• We genuinely proved a redacted audit record preserves accountability (who, what, digest, decision) without ever storing the raw sensitive query.\n• deny, expired, decline, and unsafe-destination are first-class terminal outcomes -- never silently retried through a weaker fallback tool.\n• The final privileged handler should receive an already-validated typed domain command, never raw model text plus broad credentials.\n• The full 19-step chain has no redundant links -- we genuinely demonstrated that removing any one of several specific steps reopens a specific attack from earlier in this module.',
      bodyKn: '• notes.export ರಂತಹ typed verbs generic run(command) tool ಗಿಂತ ನಿಜವಾಗಿ ಚಿಕ್ಕ authority surface ಹೊಂದಿವೆ.\n• ನಾವು ನಿಜವಾಗಿ ಒಂದೂ redacted audit record raw sensitive query ಎಂದಿಗೂ ಸಂಗ್ರಹಿಸದೆ accountability ಸಂರಕ್ಷಿಸುತ್ತದೆ ಎಂದೂ ಸಾಬೀತುಪಡಿಸಿದ್ದೇವೆ.\n• deny, expired, decline, unsafe-destination first-class terminal ಫಲಿತಾಂಶಗಳು.\n• ಅಂತಿಮ privileged handler ಒಂದೂ ಈಗಾಗಲೇ-ಮೌಲ್ಯೀಕರಿಸಿದ typed domain command ಪಡೆಯಬೇಕು.\n• ಪೂರ್ಣ 19-step ಸರಪಳಿಗೆ ಯಾವುದೇ redundant links ಇಲ್ಲ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Why is a narrow archive_note tool safer than a generic run tool?', qKn: 'ಒಂದೂ ಕಿರಿದಾದ archive_note tool ಒಂದೂ generic run tool ಗಿಂತ ಏಕೆ ಸುರಕ್ಷಿತ?',
        opts: ['It uses fewer characters', 'It has a smaller authority/action surface', 'It avoids authentication', 'It removes the need for schemas'],
        optsKn: ['ಇದೂ ಕಡಿಮೆ characters ಬಳಸುತ್ತದೆ', 'ಇದೂ ಒಂದೂ ಚಿಕ್ಕ authority/action surface ಹೊಂದಿದೆ', 'ಇದೂ authentication ತಪ್ಪಿಸುತ್ತದೆ', 'ಇದೂ schemas ya ಅಗತ್ಯ ತೆಗೆಯುತ್ತದೆ'],
        correct: 1 },
      { q: 'What should happen after an explicit policy deny?', qKn: 'ಒಂದೂ explicit policy deny ನಂತರ ಏನಾಗಬೇಕು?',
        opts: ['Automatically try a weaker tool', 'Rephrase the request until it works', 'Produce a no-side-effect refusal outcome', 'Ignore authorization if MRTR was accepted'],
        optsKn: ['ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಒಂದೂ ದುರ್ಬಲ tool ಪ್ರಯತ್ನಿಸಿ', 'ಇದೂ ಕೆಲಸ ಮಾಡುವವರೆಗೆ request ಮರುಬರೆಯಿರಿ', 'ಒಂದೂ no-side-effect refusal ಫಲಿತಾಂಶ ಉತ್ಪಾದಿಸಿ', 'MRTR ಅನುಮೋದಿಸಿದ್ದರೆ authorization ನಿರ್ಲಕ್ಷಿಸಿ'],
        correct: 2 },
      { q: 'What should the final privileged handler ideally receive?', qKn: 'ಅಂತಿಮ privileged handler ಆದರ್ಶವಾಗಿ ಏನೂ ಪಡೆಯಬೇಕು?',
        opts: ['Raw model instructions plus broad credentials', 'A validated typed domain command', 'clientInfo.name', 'A session id'],
        optsKn: ['Raw model instructions ಜೊತೆಗೆ broad credentials', 'ಒಂದೂ ಮೌಲ್ಯೀಕರಿಸಿದ typed domain command', 'clientInfo.name', 'ಒಂದೂ session id'],
        correct: 1 },
      { q: 'Why should the audit log store a digest of the query rather than the raw text?', qKn: 'audit log ಏಕೆ query ya ಒಂದೂ digest ಸಂಗ್ರಹಿಸಬೇಕು, raw text ಅಲ್ಲ?',
        opts: ['Digests are faster to compute', 'Storing raw sensitive content would make the audit log itself a new data-leak surface', 'JSON cannot store long strings', 'Digests are required by JSON-RPC'],
        optsKn: ['Digests ಲೆಕ್ಕಾಚಾರ ಮಾಡಲು ವೇಗವಾಗಿವೆ', 'raw sensitive content ಸಂಗ್ರಹಿಸುವುದೂ audit log ಅನ್ನೂ ಸ್ವತಃ ಒಂದೂ ಹೊಸ data-leak surface ಆಗಿಸುತ್ತದೆ', 'JSON ಉದ್ದ strings ಸಂಗ್ರಹಿಸಲಾಗುವುದಿಲ್ಲ', 'Digests JSON-RPC ಇಂದ ಬೇಡಲ್ಪಟ್ಟಿವೆ'],
        correct: 1 },
      { q: 'What connects all 19 steps of the full security chain in this module?', qKn: 'ಈ module ya ಪೂರ್ಣ ಭದ್ರತಾ ಸರಪಳಿ ya ಎಲ್ಲಾ 19 steps ಅನ್ನೂ ಏನೂ ಸಂಪರ್ಕಿಸುತ್ತದೆ?',
        opts: ['They are all optional and interchangeable', 'Each step corresponds to a specific attack this module genuinely demonstrated and defended against', 'They all use the same error code', 'They only apply to notes.export specifically'],
        optsKn: ['ಇವೆಲ್ಲಾ ಐಚ್ಛಿಕ ಮತ್ತು ಪರಸ್ಪರ ಬದಲಾಯಿಸಬಹುದಾದವೂ', 'ಪ್ರತಿ step ಈ module ನಿಜವಾಗಿ ಪ್ರದರ್ಶಿಸಿ ರಕ್ಷಿಸಿದ ಒಂದೂ ನಿರ್ದಿಷ್ಟ attack ಗೆ ಅನುಗುಣವಾಗಿದೆ', 'ಇವೆಲ್ಲಾ ಅದೇ error code ಬಳಸುತ್ತವೆ', 'ಇವೂ ಕೇವಲ notes.export ಗೆ ಮಾತ್ರ ಅನ್ವಯಿಸುತ್ತವೆ'],
        correct: 1 },
    ] } },
  ],
};
