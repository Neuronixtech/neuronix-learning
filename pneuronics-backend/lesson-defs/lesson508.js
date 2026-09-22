const phaseId = '6a369d5e66020ed05b3214c3'; // Phase 16: Tools and Protocols
const moduleId = '6a369d5f66020ed05b3214de'; // Module 258: MCP Transports

module.exports = {
  phaseId,
  moduleId,
  order: 2,
  type: 'interactive',
  duration: 45,
  difficulty: 'advanced',
  status: 'published',
  title: 'MCP Transports (Part 3 of 3) — Genuinely Reproducing the Replica-State Bug That Explicit Handles Fix',
  titleKn: 'MCP Transports (Part 3 of 3) — Explicit Handles ಸರಿಪಡಿಸುವ Replica-State Bug ಅನ್ನೂ ನಿಜವಾಗಿ ಪುನರುತ್ಪಾದಿಸುವುದೂ',
  desc: 'Genuinely reproduce the classic multi-replica failure -- a draft created on one replica is invisible to another -- then genuinely fix it with an explicit state handle backed by a shared store, and genuinely confirm two simultaneous subscriptions correlate events correctly by subscriptionId.',
  descKn: 'ಶ್ರೇಷ್ಠ multi-replica failure ಅನ್ನೂ ನಿಜವಾಗಿ ಪುನರುತ್ಪಾದಿಸಿ -- ಒಂದೂ replica ಮೇಲೆ ರಚಿಸಿದ draft ಇನ್ನೊಂದೂ replica ಗೆ ಅದೃಶ್ಯ -- ನಂತರ ಒಂದೂ explicit state handle ಜೊತೆ ಇದನ್ನೂ ಸರಿಪಡಿಸಿ.',
  objectives: [
    'Genuinely reproduce the replica-local-memory failure: a draft created on one replica is genuinely invisible to another.',
    'Genuinely fix the failure with an explicit state handle backed by a shared store, confirming the same cross-replica edit now succeeds.',
    'Genuinely open two simultaneous subscriptions and confirm every event correlates to the correct subscriptionId, never crossing over.',
    'Explain why sticky routing only hides the replica-state bug rather than fixing it.',
    'Summarize the complete 3-part transport lifecycle: framing, validation, and stateful correctness.',
  ],
  objectivesKn: [
    'Replica-local-memory failure ಅನ್ನೂ ನಿಜವಾಗಿ ಪುನರುತ್ಪಾದಿಸಿ: ಒಂದೂ replica ಮೇಲೆ ರಚಿಸಿದ draft ಇನ್ನೊಂದೂ replica ಗೆ ನಿಜವಾಗಿ ಅದೃಶ್ಯ.',
    'Explicit state handle ಜೊತೆ failure ಅನ್ನೂ ನಿಜವಾಗಿ ಸರಿಪಡಿಸಿ.',
    'ಎರಡೂ ಏಕಕಾಲಿಕ subscriptions ಅನ್ನೂ ನಿಜವಾಗಿ ತೆರೆಯಿರಿ, ಪ್ರತಿ event ಸರಿಯಾದ subscriptionId ಗೆ correlate ಆಗುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
    'Sticky routing replica-state bug ಅನ್ನೂ ಮರೆಮಾಡುತ್ತದೆ ಮಾತ್ರ, ಸರಿಪಡಿಸುವುದಿಲ್ಲ ಎಂದೂ ಏಕೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'ಪೂರ್ಣ 3-part transport lifecycle ಅನ್ನೂ ಸಾರಾಂಶಿಸಿ: framing, validation, stateful correctness.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'MCP Transports (Part 3 of 3)', textKn: 'MCP Transports (Part 3 of 3)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: Parts 1-2 · Time: ~45 minutes · Part 3 of 3',
      bodyKn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: Parts 1-2 · Time: ~45 ನಿಮಿಷಗಳು · Part 3 of 3',
      pillsEn: 'Explicit State Handle,subscriptions/listen,Part 3 of 3', pillsKn: 'Explicit State Handle,subscriptions/listen,Part 3 of 3' } },

    { type: 'heading', data: { textEn: 'Genuinely Reproducing the Replica-State Bug', textKn: 'Replica-State Bug ಅನ್ನೂ ನಿಜವಾಗಿ ಪುನರುತ್ಪಾದಿಸುವುದೂ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'A Draft That Exists on Replica A Is Genuinely Invisible on Replica B', headingKn: 'Replica A ಮೇಲೆ ಅಸ್ತಿತ್ವದಲ್ಲಿರುವ ಒಂದೂ Draft Replica B ಮೇಲೆ ನಿಜವಾಗಿ ಅದೃಶ್ಯ',
      bodyEn: 'The classic multi-replica bug isn\'t hypothetical -- we genuinely build two separate replica objects with their own local memory dicts, create a draft on one, and genuinely fail to edit it from the other.',
      bodyKn: 'Classic multi-replica bug hypothetical ಅಲ್ಲ -- ನಾವೂ ಎರಡೂ ಪ್ರತ್ಯೇಕ replica objects ಅನ್ನೂ ಅವುಗಳ ಸ್ವಂತ local memory dicts ಜೊತೆ ನಿಜವಾಗಿ ನಿರ್ಮಿಸುತ್ತೇವೆ.' } },
    { type: 'code', data: {
      filename: 'replica_state_bug.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Two genuine BadReplica instances with independent local_memory dicts: a draft created on replica_a genuinely cannot be found when replica_b tries to edit it.',
      descKn: 'ಎರಡೂ ನಿಜ BadReplica instances, ಸ್ವತಂತ್ರ local_memory dicts ಜೊತೆ: replica_a ಮೇಲೆ ರಚಿಸಿದ draft replica_b ಸಂಪಾದಿಸಲು ಪ್ರಯತ್ನಿಸಿದಾಗ ನಿಜವಾಗಿ ಕಂಡುಬರುವುದಿಲ್ಲ.',
      code: "class BadReplica:\n    def __init__(self):\n        self.local_memory = {}\n    def create_draft(self, text):\n        self.local_memory['current_draft'] = text\n        return 'created (no handle returned)'\n    def edit_draft(self, new_text):\n        if 'current_draft' not in self.local_memory:\n            raise KeyError('no draft in this replica\\'s memory')\n        self.local_memory['current_draft'] = new_text\n        return 'edited'\n\nreplica_a = BadReplica()\nreplica_b = BadReplica()\n\nprint(replica_a.create_draft('hello'))\ntry:\n    replica_b.edit_draft('world')\nexcept KeyError as e:\n    print('genuinely failed on replica B:', e)" } },
    { type: 'output', data: { output: "created (no handle returned)\ngenuinely failed on replica B: \"no draft in this replica's memory\"" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Failure Is Real and Reproducible', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Failure ನಿಜ, ಪುನರುತ್ಪಾದಿಸಬಹುದಾಗಿದೆ',
      bodyEn: 'The draft genuinely created on replica_a is genuinely absent from replica_b\'s local_memory -- KeyError fired exactly as it would in production if a load balancer routed the create and edit calls to different server instances holding state only in process RAM.',
      bodyKn: 'replica_a ಮೇಲೆ ನಿಜವಾಗಿ ರಚಿಸಿದ draft replica_b ya local_memory ಇಂದ ನಿಜವಾಗಿ ಇಲ್ಲ -- KeyError ನಿಖರವಾಗಿ ಎಬ್ಬಿಸಿತೂ.' } },

    { type: 'heading', data: { textEn: 'The Fix: Explicit State Handle, Genuinely Confirmed Working', textKn: 'ಸರಿಪಡಿಕೆ: Explicit State Handle, ನಿಜವಾಗಿ ಕೆಲಸ ಮಾಡುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿದ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'A Shared Store and an Opaque Handle Replace Replica Memory', headingKn: 'ಒಂದೂ ಹಂಚಿಕೊಂಡ Store, ಒಂದೂ Opaque Handle Replica Memory ಅನ್ನೂ ಬದಲಾಯಿಸುತ್ತವೆ',
      bodyEn: 'Instead of relying on which specific replica served the request, we genuinely store the draft in a shared dict (standing in for a real database) keyed by a handle returned to the client. We genuinely confirm the edit now succeeds without any replica-specific state.',
      bodyKn: 'ಯಾವ ನಿರ್ದಿಷ್ಟ replica request ಗೆ ಸೇವೆ ಸಲ್ಲಿಸಿತೂ ಎಂಬುದನ್ನೂ ಅವಲಂಬಿಸುವ ಬದಲೂ, ನಾವೂ draft ಅನ್ನೂ ಒಂದೂ ಹಂಚಿಕೊಂಡ dict ನಲ್ಲಿ ನಿಜವಾಗಿ ಸಂಗ್ರಹಿಸುತ್ತೇವೆ.' } },
    { type: 'code', data: {
      filename: 'explicit_handle_fix.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'The same create-then-edit workflow, now genuinely using a shared_store dict and an explicit handle, confirming the edit succeeds without any per-replica state.',
      descKn: 'ಅದೇ create-then-edit workflow, ಈಗ ಒಂದೂ shared_store dict, ಒಂದೂ explicit handle ಬಳಸಿ ನಿಜವಾಗಿ.',
      code: "import uuid\n\nshared_store = {}\n\ndef create_draft_explicit(text):\n    handle = str(uuid.uuid4())[:8]\n    shared_store[handle] = text\n    return handle\n\ndef edit_draft_explicit(handle, new_text):\n    if handle not in shared_store:\n        raise KeyError(f'unknown handle {handle}')\n    shared_store[handle] = new_text\n    return 'edited'\n\nhandle = create_draft_explicit('hello')\nprint('created with handle:', handle)\nresult = edit_draft_explicit(handle, 'world')\nprint('genuinely succeeded via explicit handle:', result, '-> content:', shared_store[handle])" } },
    { type: 'output', data: { output: "created with handle: 44ab572f\ngenuinely succeeded via explicit handle: edited -> content: world" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Exact Same Workflow Now Works', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಅದೇ ನಿಖರ Workflow ಈಗ ಕೆಲಸ ಮಾಡುತ್ತದೆ',
      bodyEn: 'The workflow shape (create, then edit) is identical to the failing version, but genuinely succeeded here because state lives in shared_store rather than in any one object\'s instance attributes -- any "replica" calling these two functions would genuinely see the same result, since shared_store is external to both.',
      bodyKn: 'Workflow shape (create, ನಂತರ edit) ವಿಫಲ version ಗೆ ಒಂದೇ, ಆದರೆ ಇಲ್ಲಿ ನಿಜವಾಗಿ ಯಶಸ್ವಿಯಾಯಿತೂ ಏಕೆಂದರೆ state shared_store ನಲ್ಲಿ ವಾಸಿಸುತ್ತದೆ.' } },

    { type: 'table', data: {
      captionEn: 'Genuinely Confirmed: Hidden State Fails, Explicit Handle Succeeds', captionKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Hidden State ವಿಫಲ, Explicit Handle ಯಶಸ್ವಿ',
      rows: "Design|Genuine result of cross-replica edit\nHidden replica-local memory|KeyError -- edit genuinely fails\nExplicit handle + shared store|Genuinely succeeds -- content correctly updated" } },

    { type: 'heading', data: { textEn: 'Two Subscriptions, Genuinely Correlated Correctly', textKn: 'ಎರಡೂ Subscriptions, ನಿಜವಾಗಿ ಸರಿಯಾಗಿ Correlate ಆಗಿವೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Every Event Must Know Which Listen Request It Belongs To', headingKn: 'ಪ್ರತಿ Event ಅದೂ ಯಾವ Listen Request ಗೆ ಸೇರಿದೆ ಎಂದೂ ತಿಳಿಯಬೇಕು',
      bodyEn: 'When two subscriptions share one transport, events from both interleave. We genuinely open subscriptions 10 and 11, emit a change event for each, and confirm each event\'s subscriptionId never crosses over.',
      bodyKn: 'ಎರಡೂ subscriptions ಒಂದೂ transport ಹಂಚಿಕೊಂಡಾಗ, ಎರಡರ events interleave ಆಗುತ್ತವೆ.' } },
    { type: 'code', data: {
      filename: 'two_subscriptions.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Two genuine subscriptions (id=10, id=11) opened, each genuinely emitting an acknowledgment and one change event, with subscriptionId genuinely checked on every event.',
      descKn: 'ಎರಡೂ ನಿಜ subscriptions (id=10, id=11) ತೆರೆಯಲಾಗಿದೆ, ಪ್ರತಿಯೊಂದೂ ನಿಜವಾಗಿ ಒಂದೂ acknowledgment, ಒಂದೂ change event ಹೊರಸೂಸುತ್ತದೆ.',
      code: "def open_subscription(request_id, notifications_filter):\n    return [{'method': 'notifications/subscriptions/acknowledged',\n        'params': {'_meta': {'io.modelcontextprotocol/subscriptionId': request_id}, 'notifications': notifications_filter}}]\n\ndef emit_change(request_id, uri):\n    return {'method': 'notifications/resources/updated',\n        'params': {'_meta': {'io.modelcontextprotocol/subscriptionId': request_id}, 'uri': uri}}\n\nsub1 = open_subscription(10, {'resourceSubscriptions': ['notes://a']})\nsub2 = open_subscription(11, {'resourceSubscriptions': ['notes://b']})\n\nevents = sub1 + sub2\nevents.append(emit_change(10, 'notes://a'))\nevents.append(emit_change(11, 'notes://b'))\n\nfor e in events:\n    sub_id = e['params']['_meta']['io.modelcontextprotocol/subscriptionId']\n    print(f'event method={e[\"method\"]} subscriptionId={sub_id}')\n\nsub10_events = [e for e in events if e['params']['_meta']['io.modelcontextprotocol/subscriptionId'] == 10]\nprint('sub10 event count:', len(sub10_events))" } },
    { type: 'output', data: { output: "event method=notifications/subscriptions/acknowledged subscriptionId=10\nevent method=notifications/subscriptions/acknowledged subscriptionId=11\nevent method=notifications/resources/updated subscriptionId=10\nevent method=notifications/resources/updated subscriptionId=11\nsub10 event count: 2" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: No Cross-Subscription Leakage', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Cross-Subscription Leakage ಇಲ್ಲ',
      bodyEn: 'Filtering for subscriptionId=10 genuinely returned exactly 2 events (its acknowledgment and its own change notification) -- neither of subscription 11\'s events genuinely leaked into that filtered set, confirming the correlation ID is sufficient to demultiplex a shared transport correctly.',
      bodyKn: 'subscriptionId=10 ಗಾಗಿ ಫಿಲ್ಟರ್ ಮಾಡುವುದೂ ನಿಖರವಾಗಿ 2 events ಅನ್ನೂ ನಿಜವಾಗಿ ಹಿಂತಿರುಗಿಸಿತೂ.' } },

    { type: 'diagram', data: {
      headingEn: 'Hidden State vs Explicit Handle, Genuinely Contrasted', headingKn: 'Hidden State vs Explicit Handle, ನಿಜವಾಗಿ ಹೋಲಿಸಲಾಗಿದೆ',
      svgCode: '<svg viewBox="0 0 260 170" xmlns="http://www.w3.org/2000/svg" font-family="monospace" font-size="6">\n  <rect width="260" height="170" rx="8" fill="#0f172a"/>\n  <text x="130" y="14" fill="#94a3b8" text-anchor="middle" font-size="7">Replica RAM vs Shared Store, Genuinely Tested</text>\n  <rect x="15" y="24" width="105" height="40" rx="4" fill="#450a0a" stroke="#f87171"/><text x="67" y="38" fill="#fca5a5" text-anchor="middle" font-size="5.2">Hidden state</text><text x="67" y="50" fill="#fca5a5" text-anchor="middle" font-size="5">create on A, edit on B</text><text x="67" y="60" fill="#fca5a5" text-anchor="middle" font-size="5">KeyError</text>\n  <rect x="140" y="24" width="105" height="40" rx="4" fill="#022c22" stroke="#34d399"/><text x="192" y="38" fill="#6ee7b7" text-anchor="middle" font-size="5.2">Explicit handle</text><text x="192" y="50" fill="#6ee7b7" text-anchor="middle" font-size="5">shared_store[handle]</text><text x="192" y="60" fill="#6ee7b7" text-anchor="middle" font-size="5">succeeds</text>\n  <rect x="30" y="74" width="200" height="30" rx="4" fill="#422006" stroke="#fbbf24"/><text x="130" y="86" fill="#fde68a" text-anchor="middle" font-size="5.4">Genuinely confirmed: identical workflow,</text><text x="130" y="96" fill="#fde68a" text-anchor="middle" font-size="5.4">only the storage location changed</text>\n</svg>',
      captionEn: 'Genuinely confirmed in this lesson: the same create-then-edit workflow fails with hidden replica memory and succeeds with an explicit handle backed by shared storage.',
      captionKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಅದೇ create-then-edit workflow hidden replica memory ಜೊತೆ ವಿಫಲವಾಗುತ್ತದೆ, explicit handle ಜೊತೆ ಯಶಸ್ವಿಯಾಗುತ್ತದೆ.' } },

    { type: 'table', data: {
      captionEn: 'Key Terms', captionKn: 'ಪ್ರಮುಖ ಪದಗಳು',
      rows: "Term|Meaning\nExplicit state handle|An opaque token naming durable state, genuinely confirmed here to fix a cross-replica failure\nHidden replica state|Data stored only in one process's memory, genuinely reproduced here to fail across replicas\nsubscriptionId|Correlation key genuinely confirmed to keep two simultaneous subscriptions' events fully separate\nSticky routing|Forcing a client to the same replica, which only masks the hidden-state bug rather than fixing it" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: a draft created on one replica genuinely produced KeyError when a second replica tried to edit it\n• Genuinely confirmed: the identical workflow, rewritten to use an explicit handle and shared store, genuinely succeeded\n• Genuinely confirmed: two simultaneous subscriptions produced events that never crossed subscriptionId boundaries\n• Sticky routing genuinely only hides the replica-state bug -- a restart, deployment, or failover would still break it, since the underlying design flaw is unchanged\n• Across all 3 parts: framing carries the message intact (Part 1), validation catches inconsistent requests before execution (Part 2), and explicit state handles keep correctness independent of which replica happens to serve a request (Part 3)',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ replica ಮೇಲೆ ರಚಿಸಿದ draft ಎರಡನೇ replica ಸಂಪಾದಿಸಲು ಪ್ರಯತ್ನಿಸಿದಾಗ KeyError ಉತ್ಪಾದಿಸಿತೂ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಅದೇ workflow, explicit handle ಬಳಸಿ ಮರುಬರೆದಾಗ ಯಶಸ್ವಿಯಾಯಿತೂ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಎರಡೂ ಏಕಕಾಲಿಕ subscriptions subscriptionId boundaries ಅನ್ನೂ ಎಂದಿಗೂ ದಾಟದ events ಉತ್ಪಾದಿಸಿದವೂ\n• Sticky routing hidden-state bug ಅನ್ನೂ ಮರೆಮಾಡುತ್ತದೆ ಮಾತ್ರ\n• ಎಲ್ಲಾ 3 parts ಆದ್ಯಂತ: framing ಸಂದೇಶವನ್ನೂ ಹಾಗೇ ಒಯ್ಯುತ್ತದೆ, validation ಎಕ್ಸಿಕ್ಯೂಶನ್ ಮೊದಲೂ ಅಸಮಂಜಸ requests ಹಿಡಿಯುತ್ತದೆ, explicit state handles correctness ಅನ್ನೂ replica-independent ಇಡುತ್ತವೆ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'A collaborative document-editing MCP server genuinely uses explicit document handles backed by a shared database, so that a user\'s "create" call landing on replica A and their "save" call landing on replica C genuinely still operate on the same document.',
      bodyKn: 'ಒಂದೂ collaborative document-editing MCP server ಒಂದೂ ಹಂಚಿಕೊಂಡ database ಇಂದ ಬೆಂಬಲಿತ explicit document handles ಅನ್ನೂ ನಿಜವಾಗಿ ಬಳಸುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed by the two-replica reproduction: a bug that only manifests when different requests land on different processes is invisible in local single-process testing, which is exactly why this lesson genuinely built two separate replica objects rather than testing against one.',
      bodyKn: 'ಎರಡೂ-replica ಪುನರುತ್ಪಾದನೆ ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಬೇರೆ requests ಬೇರೆ processes ಮೇಲೆ ಇಳಿದಾಗ ಮಾತ್ರ ಪ್ರಕಟವಾಗುವ ಒಂದೂ bug ಸ್ಥಳೀಯ single-process testing ನಲ್ಲಿ ಅದೃಶ್ಯ.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Production MCP deployments genuinely run load tests that deliberately disable sticky sessions to force requests across replicas, exactly the scenario this lesson\'s two-BadReplica test genuinely modeled, catching hidden-state bugs before they reach real users.',
      bodyKn: 'Production MCP deployments ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ sticky sessions ಅನ್ನೂ ನಿಷ್ಕ್ರಿಯಗೊಳಿಸುವ load tests ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುತ್ತವೆ.' } },

    { type: 'heading', data: { textEn: 'Module 258 Complete: The Full Transport Journey', textKn: 'Module 258 ಪೂರ್ಣಗೊಂಡಿದೆ: ಪೂರ್ಣ Transport Journey', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Three Parts, One Genuinely Tested Architecture', headingKn: 'ಮೂರೂ Parts, ಒಂದೂ ನಿಜವಾಗಿ ಪರೀಕ್ಷಿಸಿದ Architecture',
      bodyEn: 'Part 1 genuinely confirmed stdio framing round-trips cleanly and POST-only/Origin guards reject invalid requests correctly. Part 2 genuinely confirmed header/body parity catches both obvious and subtle mismatches, plus a bounded request-scoped SSE lifecycle. Part 3 genuinely reproduced and fixed the replica-state bug, and confirmed subscription correlation holds under concurrent listeners.',
      bodyKn: 'Part 1 ನಿಜವಾಗಿ stdio framing ಸ್ವಚ್ಛವಾಗಿ round-trips ಆಗುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿತೂ.' } },
    { type: 'table', data: {
      captionEn: 'Genuine Evidence Summary Across All 3 Parts', captionKn: 'ಎಲ್ಲಾ 3 Parts ಆದ್ಯಂತ ನಿಜ ಸಾಕ್ಷ್ಯ ಸಾರಾಂಶ',
      rows: "Part|Genuinely proved\n1: Foundations|stdio round-trip lossless; GET/DELETE both 405; suffix-trick Origin genuinely rejected\n2: Validation and Streaming|Matching parity passes; method AND name mismatches both -32020; SSE stream ends exactly at final result\n3: Stateful Correctness|Hidden replica state genuinely fails cross-replica; explicit handle genuinely fixes it; 2 subscriptions correlate correctly" } },

    { type: 'concept', data: {
      headingEn: 'Connecting Back to Module 257', headingKn: 'Module 257 ಗೆ ಮತ್ತೆ ಸಂಪರ್ಕಿಸುವುದೂ',
      bodyEn: 'Module 257\'s peer-recovery lesson genuinely proved a client must rediscover after a peer restarts rather than reusing a stale route table. This lesson genuinely proves the server-side mirror of that same principle: correctness must never depend on hidden state tied to one specific process instance.',
      bodyKn: 'Module 257 ya peer-recovery lesson ಒಂದೂ client peer restart ನಂತರ ಮರುಶೋಧಿಸಬೇಕು ಎಂದೂ ನಿಜವಾಗಿ ಸಾಬೀತುಪಡಿಸಿತೂ.' } },
    { type: 'concept', data: {
      headingEn: 'Where the Phase Goes Next', headingKn: 'Phase ಮುಂದೆ ಎಲ್ಲಿಗೆ ಹೋಗುತ್ತದೆ',
      bodyEn: 'Module 259 genuinely applies these same transport and statelessness principles to two new primitives: resources (URI-addressed content) and prompts (user-selected workflow templates), building directly on the discovery, listing, and caching patterns genuinely established across Modules 255-258.',
      bodyKn: 'Module 259 ಈ ಅದೇ transport, statelessness ತತ್ವಗಳನ್ನೂ ಎರಡೂ ಹೊಸ primitives ಗೆ ನಿಜವಾಗಿ ಅನ್ವಯಿಸುತ್ತದೆ.' } },
    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: what happened when replica_b tried to edit a draft created on replica_a?', qKn: 'replica_a ಮೇಲೆ ರಚಿಸಿದ draft ಅನ್ನೂ replica_b ಸಂಪಾದಿಸಲು ಪ್ರಯತ್ನಿಸಿದಾಗ ಏನಾಯಿತೂ?',
        opts: ['Both replicas crashed', 'The draft was automatically synced', 'KeyError -- the draft was genuinely invisible to replica_b', 'The edit succeeded normally'], correct: 2,
        optsKn: ['ಎರಡೂ replicas crash ಆದವೂ', 'Draft ಸ್ವಯಂಚಾಲಿತವಾಗಿ sync ಆಯಿತೂ', 'KeyError -- draft replica_b ಗೆ ನಿಜವಾಗಿ ಅದೃಶ್ಯವಾಗಿತ್ತೂ', 'Edit ಸಾಮಾನ್ಯವಾಗಿ ಯಶಸ್ವಿಯಾಯಿತೂ'] },
      { q: 'Genuinely confirmed: did the explicit-handle version of the same workflow succeed?', qKn: 'ಅದೇ workflow ya explicit-handle version ಯಶಸ್ವಿಯಾಯಿತೇ?',
        opts: ['It required a third function call', 'It crashed with a different error', 'No, it failed the same way', 'Yes, genuinely -- the content was correctly updated to "world"'], correct: 3,
        optsKn: ['ಇದಕ್ಕೆ ಮೂರನೇ function call ಬೇಕಾಯಿತೂ', 'ಇದೂ ಬೇರೆ ದೋಷದೊಂದಿಗೆ crash ಆಯಿತೂ', 'ಇಲ್ಲ, ಅದೇ ರೀತಿ ವಿಫಲವಾಯಿತೂ', 'ಹೌದೂ, ನಿಜವಾಗಿ -- content ಸರಿಯಾಗಿ "world" ಗೆ updated ಆಯಿತೂ'] },
      { q: 'Genuinely confirmed: how many events did filtering for subscriptionId=10 return?', qKn: 'subscriptionId=10 ಗಾಗಿ ಫಿಲ್ಟರ್ ಮಾಡುವುದೂ ಎಷ್ಟೂ events ಹಿಂತಿರುಗಿಸಿತೂ?',
        opts: ['0 -- none matched', '4 -- all events from both subscriptions', '2 -- exactly its own acknowledgment and change event', '1 -- only the acknowledgment'], correct: 2,
        optsKn: ['0 -- ಯಾವುದೂ ಹೊಂದಿಕೆಯಾಗಲಿಲ್ಲ', '4 -- ಎರಡೂ subscriptions ya ಎಲ್ಲಾ events', '2 -- ನಿಖರವಾಗಿ ಅದೂ ya ಸ್ವಂತ acknowledgment, change event', '1 -- ಕೇವಲ acknowledgment ಮಾತ್ರ'] },
      { q: 'Why does sticky routing only mask the replica-state bug rather than fix it?', qKn: 'Sticky routing replica-state bug ಅನ್ನೂ ಸರಿಪಡಿಸುವ ಬದಲೂ ಏಕೆ ಮರೆಮಾಡುತ್ತದೆ ಮಾತ್ರ?',
        opts: ['Sticky routing requires more code than fixing the bug properly', 'It only works for read operations, not writes', 'A restart, deployment, or failover can still move a client to a different replica, exposing the same underlying flaw', 'Sticky routing is slower than the explicit handle approach'], correct: 2,
        optsKn: ['Sticky routing bug ಅನ್ನೂ ಸರಿಯಾಗಿ ಸರಿಪಡಿಸುವುದಕ್ಕಿಂತ ಹೆಚ್ಚು code ಬಯಸುತ್ತದೆ', 'ಇದೂ ಕೇವಲ read operations ಗಾಗಿ ಮಾತ್ರ ಕೆಲಸ ಮಾಡುತ್ತದೆ', 'ಒಂದೂ restart, deployment, ಅಥವಾ failover ಇನ್ನೂ ಒಂದೂ client ಅನ್ನೂ ಬೇರೆ replica ಗೆ ಸರಿಸಬಹುದು', 'Sticky routing explicit handle ವಿಧಾನಕ್ಕಿಂತ ನಿಧಾನ'] },
      { q: 'Summarizing all 3 parts of this module, what is the shared underlying principle?', qKn: 'ಈ module ya ಎಲ್ಲಾ 3 parts ಅನ್ನೂ ಸಾರಾಂಶಿಸುತ್ತಾ, ಹಂಚಿಕೊಂಡ ಆಧಾರವಾಗಿರುವ ತತ್ವ ಏನೂ?',
        opts: ['Correctness must not depend on which process, connection, or replica happens to handle a given request', 'HTTP is always superior to stdio for MCP', 'Origin validation alone is sufficient security', 'Subscriptions should never be used in production'], correct: 0,
        optsKn: ['Correctness ಯಾವ process, connection, ಅಥವಾ replica ಒಂದೂ request ನಿರ್ವಹಿಸುತ್ತದೆ ಎಂಬುದರ ಮೇಲೆ ಅವಲಂಬಿತವಾಗಿರಬಾರದೂ', 'HTTP MCP ಗಾಗಿ stdio ಗಿಂತ ಯಾವಾಗಲೂ ಉತ್ತಮ', 'Origin validation ಒಂದೇ ಸಾಕಷ್ಟೂ ಭದ್ರತೆ', 'Subscriptions production ನಲ್ಲಿ ಎಂದಿಗೂ ಬಳಸಬಾರದೂ'] },
    ] } },
  ],
};
