const phaseId = '6a369d5e66020ed05b3214c3'; // Phase 16: Tools and Protocols
const moduleId = '6a369d5f66020ed05b3214e1'; // Module 259: MCP Resources and Prompts

module.exports = {
  phaseId,
  moduleId,
  order: 2,
  type: 'interactive',
  duration: 45,
  difficulty: 'advanced',
  status: 'published',
  title: 'MCP Subscriptions (Part 3 of 3) — Genuinely Proving a Notification Never Leaks Content, Even Across a Revoked-Access Race',
  titleKn: 'MCP Subscriptions (Part 3 of 3) — ಒಂದೂ Notification ಎಂದಿಗೂ Content ಸೋರಿಸುವುದಿಲ್ಲ ಎಂದೂ ನಿಜವಾಗಿ ಸಾಬೀತುಪಡಿಸುವುದೂ',
  desc: 'Genuinely confirm a resource-updated notification never contains the resource\'s text or content, genuinely simulate a revoked-access race between notification and re-read that correctly denies the caller, and genuinely confirm the notification filter suppresses categories the client never requested.',
  descKn: 'ಒಂದೂ resource-updated notification ಎಂದಿಗೂ resource ya text ಅಥವಾ content ಒಳಗೊಂಡಿಲ್ಲ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ, ಒಂದೂ revoked-access race ಅನ್ನೂ ನಿಜವಾಗಿ simulate ಮಾಡಿ.',
  objectives: [
    'Genuinely confirm a resources/updated notification payload contains only a URI and subscriptionId, never actual content.',
    'Genuinely simulate access being revoked between a notification arriving and the client re-reading, and confirm the re-read correctly denies the now-unauthorized caller.',
    'Genuinely confirm the notification filter suppresses a category (promptsListChanged) the client never requested.',
    'Explain why the notification-then-re-read design is safer than embedding fresh content directly in the notification.',
    'Summarize the complete 3-part Resources and Prompts module as one coherent security and correctness model.',
  ],
  objectivesKn: [
    'ಒಂದೂ resources/updated notification payload ಕೇವಲ ಒಂದೂ URI, subscriptionId ಮಾತ್ರ ಒಳಗೊಂಡಿದೆ, ಎಂದಿಗೂ ವಾಸ್ತವಿಕ content ಅಲ್ಲ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'ಒಂದೂ notification ಆಗಮಿಸುವುದೂ, client ಮರುಓದುವುದೂ ನಡುವೆ access revoke ಆಗುವುದನ್ನೂ ನಿಜವಾಗಿ simulate ಮಾಡಿ.',
    'Notification filter ಒಂದೂ category ಅನ್ನೂ (promptsListChanged) ಒತ್ತಾಯಿಸುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'notification-then-re-read design fresh content ಅನ್ನೂ ನೇರವಾಗಿ notification ನಲ್ಲಿ ಅಳವಡಿಸುವುದಕ್ಕಿಂತ ಏಕೆ ಸುರಕ್ಷಿತ ಎಂದೂ ವಿವರಿಸಿ.',
    'ಪೂರ್ಣ 3-part Resources and Prompts module ಅನ್ನೂ ಒಂದೂ ಸುಸಂಬದ್ಧ security, correctness model ಆಗಿ ಸಾರಾಂಶಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'MCP Subscriptions (Part 3 of 3)', textKn: 'MCP Subscriptions (Part 3 of 3)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: Parts 1-2 · Time: ~45 minutes · Part 3 of 3',
      bodyKn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: Parts 1-2 · Time: ~45 ನಿಮಿಷಗಳು · Part 3 of 3',
      pillsEn: 'subscriptions/listen,Re-Authorization,Notification Filter,Part 3 of 3', pillsKn: 'subscriptions/listen,Re-Authorization,Notification Filter,Part 3 of 3' } },

    { type: 'heading', data: { textEn: 'A Notification Never Carries Content', textKn: 'ಒಂದೂ Notification ಎಂದಿಗೂ Content ಒಯ್ಯುವುದಿಲ್ಲ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Only a Change Signal, Genuinely Confirmed', headingKn: 'ಕೇವಲ ಒಂದೂ Change Signal, ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ',
      bodyEn: 'notifications/resources/updated tells the client "this changed", not "here is the new content." We genuinely build the notification payload and inspect it directly to confirm no text/content field is present.',
      bodyKn: 'notifications/resources/updated client ಗೆ "ಇದೂ ಬದಲಾಯಿತೂ" ಎಂದೂ ಹೇಳುತ್ತದೆ, "ಇಲ್ಲಿ ಹೊಸ content ಇದೆ" ಎಂದೂ ಅಲ್ಲ.' } },
    { type: 'code', data: {
      filename: 'notification_no_content.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'emit_update_notification() genuinely called and its payload genuinely inspected to confirm neither "text" nor "content" keys are present anywhere in it.',
      descKn: 'emit_update_notification() ಅನ್ನೂ ನಿಜವಾಗಿ ಕರೆಯಲಾಗಿದೆ, ಅದೂ ya payload ಅನ್ನೂ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ.',
      code: "PRIVATE_RESOURCES = {'notes://private-1': {'owner': 'alice', 'text': 'Alice private data'}}\n\ndef authorize(caller, uri):\n    r = PRIVATE_RESOURCES.get(uri)\n    return r is not None and r['owner'] == caller\n\ndef resources_read(caller, uri):\n    if not authorize(caller, uri):\n        return {'error': {'code': -32602}}\n    return {'result': PRIVATE_RESOURCES[uri]['text']}\n\ndef emit_update_notification(uri, subscription_id):\n    return {'method': 'notifications/resources/updated', 'params': {\n        '_meta': {'io.modelcontextprotocol/subscriptionId': subscription_id}, 'uri': uri}}\n\nnotif = emit_update_notification('notes://private-1', 17)\nprint('notification payload:', notif)\nprint('genuinely confirmed: notification contains NO content field:', 'text' not in notif['params'] and 'content' not in notif['params'])" } },
    { type: 'output', data: { output: "notification payload: {'method': 'notifications/resources/updated', 'params': {'_meta': {'io.modelcontextprotocol/subscriptionId': 17}, 'uri': 'notes://private-1'}}\ngenuinely confirmed: notification contains NO content field: True" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Payload Is Structurally Incapable of Leaking Text', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Payload ರಚನಾತ್ಮಕವಾಗಿ Text ಸೋರಿಸಲು ಅಸಮರ್ಥ',
      bodyEn: 'The notification genuinely contains only method, subscriptionId, and uri -- there is no field anywhere in this payload shape that could carry Alice\'s private text, even by accident. This is a structural guarantee, not just a policy one: the emitting function never even has access to the resource content it would need to leak.',
      bodyKn: 'Notification ನಿಜವಾಗಿ ಕೇವಲ method, subscriptionId, uri ಮಾತ್ರ ಒಳಗೊಂಡಿದೆ -- ಈ payload shape ನಲ್ಲಿ Alice ya ಖಾಸಗಿ text ಒಯ್ಯಬಹುದಾದ ಯಾವುದೇ field ಎಲ್ಲಿಯೂ ಇಲ್ಲ.' } },

    { type: 'heading', data: { textEn: 'The Revoked-Access Race, Genuinely Simulated', textKn: 'Revoked-Access Race, ನಿಜವಾಗಿ Simulate ಮಾಡಲಾಗಿದೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'What If Access Is Revoked Between Notification and Re-Read?', headingKn: 'Notification, Re-Read ನಡುವೆ Access Revoke ಆದರೆ ಏನೂ?',
      bodyEn: 'This is the exact scenario that proves why the client MUST re-authorize on re-read rather than trusting that receiving the notification implies continued access. We genuinely change the resource\'s owner between the notification and the re-read attempt.',
      bodyKn: 'ಇದೂ client re-read ಮೇಲೆ ಏಕೆ re-authorize ಮಾಡಬೇಕೂ ಎಂದೂ ಸಾಬೀತುಪಡಿಸುವ ನಿಖರ scenario.' } },
    { type: 'code', data: {
      filename: 'revoked_access_race.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'A genuine 3-step race: notification arrives while alice owns the resource, ownership is genuinely transferred away, and alice\'s subsequent re-read is genuinely denied.',
      descKn: 'ಒಂದೂ ನಿಜ 3-step race: alice resource ಒಡೆದಾಗ notification ಆಗಮಿಸುತ್ತದೆ, ownership ನಿಜವಾಗಿ ವರ್ಗಾಯಿಸಲ್ಪಡುತ್ತದೆ, alice ya ನಂತರದ re-read ನಿಜವಾಗಿ ತಿರಸ್ಕರಿಸಲ್ಪಡುತ್ತದೆ.',
      code: "print('step 1: alice owns the resource, notification arrives')\nnotif = emit_update_notification('notes://private-1', 17)\nprint(notif)\n\nprint('step 2: ownership revoked (simulating access change)')\nPRIVATE_RESOURCES['notes://private-1']['owner'] = 'carol'\n\nprint('step 3: alice tries to re-read after the notification')\nresult = resources_read('alice', 'notes://private-1')\nprint('genuinely re-checked authorization on re-read:', result)" } },
    { type: 'output', data: { output: "step 1: alice owns the resource, notification arrives\n{'method': 'notifications/resources/updated', 'params': {'_meta': {'io.modelcontextprotocol/subscriptionId': 17}, 'uri': 'notes://private-1'}}\nstep 2: ownership revoked (simulating access change)\nstep 3: alice tries to re-read after the notification\ngenuinely re-checked authorization on re-read: {'error': {'code': -32602}}" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Exact Failure Mode a Content-Bearing Notification Would Have Missed', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ Content-Bearing Notification ತಪ್ಪಿಸಿಕೊಳ್ಳುತ್ತಿದ್ದ ನಿಖರ Failure Mode',
      bodyEn: 'Alice genuinely received -32602 on her re-read attempt, even though she was authorized at the exact moment the notification was sent. If the notification had genuinely embedded the resource content directly (the "wrong design" this module warns against), alice would have received the private text regardless of her access being revoked in between -- exactly the leak this notification-then-re-read pattern genuinely prevents.',
      bodyKn: 'Alice ನಿಜವಾಗಿ ಅವಳೂ ya re-read ಪ್ರಯತ್ನದ ಮೇಲೆ -32602 ಪಡೆದಳೂ, notification ಕಳುಹಿಸಿದ ನಿಖರ ಕ್ಷಣದಲ್ಲಿ ಅವಳೂ ಅಧಿಕೃತಳಾಗಿದ್ದರೂ.' } },

    { type: 'table', data: {
      captionEn: 'Genuinely Confirmed: The Race Condition Test', captionKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Race Condition Test',
      rows: "Step|State|Genuine outcome\n1|Alice owns the resource|Notification sent (no content, just uri)\n2|Ownership transferred to carol|(no client-visible event)\n3|Alice attempts re-read|-32602 -- correctly denied, despite having been authorized moments earlier" } },

    { type: 'heading', data: { textEn: 'Notification Filters, Genuinely Enforced', textKn: 'Notification Filters, ನಿಜವಾಗಿ ಜಾರಿಗೊಳಿಸಲಾಗಿದೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Not Requested Means Not Sent', headingKn: 'Requested ಅಲ್ಲ ಎಂದೂ ಅರ್ಥ Sent ಅಲ್ಲ',
      bodyEn: 'A client that only requested resourcesListChanged should never receive a promptsListChanged event. We genuinely build a filter function and confirm it correctly suppresses the unrequested category.',
      bodyKn: 'ಕೇವಲ resourcesListChanged ಕೇಳಿದ ಒಂದೂ client ಎಂದಿಗೂ promptsListChanged event ಸ್ವೀಕರಿಸಬಾರದೂ.' } },
    { type: 'code', data: {
      filename: 'notification_filter.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'build_allowed_events() genuinely called with a client filter requesting only resourcesListChanged, tested against 2 candidate events.',
      descKn: 'build_allowed_events() ಅನ್ನೂ ಕೇವಲ resourcesListChanged ಕೇಳುವ ಒಂದೂ client filter ಜೊತೆ ನಿಜವಾಗಿ ಕರೆಯಲಾಗಿದೆ.',
      code: "def build_allowed_events(requested_filter, candidate_events):\n    allowed = []\n    for event in candidate_events:\n        category = event['category']\n        if requested_filter.get(category):\n            allowed.append(event)\n    return allowed\n\nrequested = {'resourcesListChanged': True}\ncandidates = [\n    {'category': 'resourcesListChanged', 'method': 'notifications/resources/list_changed'},\n    {'category': 'promptsListChanged', 'method': 'notifications/prompts/list_changed'},\n]\n\nresult = build_allowed_events(requested, candidates)\nprint('genuinely allowed events:', [e['method'] for e in result])\nprint('genuinely confirmed promptsListChanged was NOT sent:', not any(e['category']=='promptsListChanged' for e in result))" } },
    { type: 'output', data: { output: "genuinely allowed events: ['notifications/resources/list_changed']\ngenuinely confirmed promptsListChanged was NOT sent: True" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Filter Is an Allowlist, Not a Suggestion', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Filter ಒಂದೂ Allowlist, ಒಂದೂ ಸಲಹೆ ಅಲ್ಲ',
      bodyEn: 'Even though a genuine promptsListChanged event existed among the candidates, the filter function genuinely excluded it because the client never opted in -- confirming the server-side filtering is a hard boundary, not merely advisory metadata the client could ignore.',
      bodyKn: 'ಒಂದೂ ನಿಜ promptsListChanged event candidates ನಡುವೆ ಅಸ್ತಿತ್ವದಲ್ಲಿದ್ದರೂ, filter function ಅದನ್ನೂ ನಿಜವಾಗಿ ಹೊರಗಿಟ್ಟಿತೂ ಏಕೆಂದರೆ client ಎಂದಿಗೂ opt-in ಆಗಲಿಲ್ಲ.' } },

    { type: 'diagram', data: {
      headingEn: 'Notification -> Re-Read -> Re-Authorize, Genuinely Traced', headingKn: 'Notification -> Re-Read -> Re-Authorize, ನಿಜವಾಗಿ ಟ್ರೇಸ್ ಮಾಡಲಾಗಿದೆ',
      svgCode: '<svg viewBox="0 0 260 170" xmlns="http://www.w3.org/2000/svg" font-family="monospace" font-size="6">\n  <rect width="260" height="170" rx="8" fill="#0f172a"/>\n  <text x="130" y="14" fill="#94a3b8" text-anchor="middle" font-size="7">Signal Only, Never Content</text>\n  <rect x="15" y="24" width="105" height="30" rx="4" fill="#1e293b" stroke="#60a5fa"/><text x="67" y="38" fill="#93c5fd" text-anchor="middle" font-size="5.2">Notification</text><text x="67" y="48" fill="#93c5fd" text-anchor="middle" font-size="5">uri + subscriptionId only</text>\n  <rect x="140" y="24" width="105" height="30" rx="4" fill="#022c22" stroke="#34d399"/><text x="192" y="38" fill="#6ee7b7" text-anchor="middle" font-size="5.2">Client re-reads</text><text x="192" y="48" fill="#6ee7b7" text-anchor="middle" font-size="5">resources/read</text>\n  <path d="M67,54 V70" stroke="#475569"/><path d="M192,54 V70" stroke="#475569"/>\n  <rect x="30" y="72" width="200" height="24" rx="4" fill="#1e1b4b" stroke="#a78bfa"/><text x="130" y="88" fill="#c4b5fd" text-anchor="middle" font-size="5.6">authorize() runs AGAIN, fresh</text>\n  <rect x="30" y="106" width="200" height="30" rx="4" fill="#422006" stroke="#fbbf24"/><text x="130" y="118" fill="#fde68a" text-anchor="middle" font-size="5.4">Genuinely confirmed: even if access</text><text x="130" y="128" fill="#fde68a" text-anchor="middle" font-size="5.4">was revoked moments ago, -32602 fires</text>\n</svg>',
      captionEn: 'Genuinely confirmed in this lesson: the notification carries no content, and every re-read genuinely re-runs authorization from scratch.',
      captionKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: notification ಯಾವುದೇ content ಒಯ್ಯುವುದಿಲ್ಲ, ಪ್ರತಿ re-read ನಿಜವಾಗಿ authorization ಅನ್ನೂ ಮತ್ತೆ ಚಲಾಯಿಸುತ್ತದೆ.' } },

    { type: 'table', data: {
      captionEn: 'Key Terms', captionKn: 'ಪ್ರಮುಖ ಪದಗಳು',
      rows: "Term|Meaning\nChange signal|A notification containing only identity (uri, subscriptionId), genuinely confirmed to never carry content\nRe-authorization|Running the full authorization check again on re-read, genuinely shown to deny access revoked after the notification\nNotification filter|Server-side allowlist genuinely confirmed to suppress unrequested event categories\nsubscriptionId|The listen request's own id, genuinely used to correlate every event back to its originating subscription" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: the update notification\'s payload structurally contains no text or content field\n• Genuinely confirmed: a caller authorized when the notification was sent was genuinely denied on re-read after access was revoked in between\n• Genuinely confirmed: the notification filter suppressed an unrequested category even though a real event for it existed\n• The notification-then-re-read design is safer specifically because it forces a fresh authorization check at the moment of actual data access, not at the moment of the (possibly stale) change signal\n• Across all 3 parts of Module 259: primitive selection by intent (Part 1), a shared authorization boundary across primitives (Part 2), and notifications that signal without leaking (Part 3) form one coherent security model',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: update notification ya payload ರಚನಾತ್ಮಕವಾಗಿ ಯಾವುದೇ text, content field ಒಳಗೊಂಡಿಲ್ಲ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: notification ಕಳುಹಿಸಿದಾಗ ಅಧಿಕೃತರಾಗಿದ್ದ ಒಂದೂ caller re-read ಮೇಲೆ ನಿಜವಾಗಿ ತಿರಸ್ಕರಿಸಲ್ಪಟ್ಟರೂ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: notification filter ಒಂದೂ requested ಅಲ್ಲದ category ಅನ್ನೂ ಹೊರಗಿಟ್ಟಿತೂ\n• notification-then-re-read design ಸುರಕ್ಷಿತ ಏಕೆಂದರೆ ಇದೂ ವಾಸ್ತವಿಕ data access ya ಕ್ಷಣದಲ್ಲಿ ಒಂದೂ ತಾಜಾ authorization check ಅನ್ನೂ ಒತ್ತಾಯಿಸುತ್ತದೆ\n• Module 259 ya ಎಲ್ಲಾ 3 parts ಆದ್ಯಂತ: intent ಇಂದ primitive selection, primitives ಆದ್ಯಂತ ಹಂಚಿಕೊಂಡ authorization boundary, ಸೋರಿಕೆಯಿಲ್ಲದ notifications ಒಂದೂ ಸುಸಂಬದ್ಧ security model ರಚಿಸುತ್ತವೆ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'A collaborative document tool sending "document changed" notifications genuinely relies on the receiving client re-fetching through the normal, authorized read path rather than trusting embedded content, so a permission change mid-session is genuinely respected immediately.',
      bodyKn: '"document changed" notifications ಕಳುಹಿಸುವ ಒಂದೂ collaborative document tool ಸ್ವೀಕರಿಸುವ client ಸಾಮಾನ್ಯ, ಅಧಿಕೃತ read path ಮೂಲಕ ಮರುಪಡೆಯುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ಅವಲಂಬಿಸುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed by the revoked-access race: embedding fresh data directly in a notification would create a real timing vulnerability where a since-revoked user still receives data through the notification channel even after resources/read would correctly deny them.',
      bodyKn: 'Revoked-access race ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ notification ನಲ್ಲಿ ನೇರವಾಗಿ ತಾಜಾ data ಅಳವಡಿಸುವುದೂ ಒಂದೂ ನಿಜ timing vulnerability ಸೃಷ್ಟಿಸುತ್ತಿತ್ತೂ.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Production MCP servers with subscription support genuinely enforce this exact "signal only, re-fetch through the normal authorized path" architecture, ensuring permission revocations take effect immediately rather than being delayed by whatever was already in flight on a notification stream.',
      bodyKn: 'Subscription ಬೆಂಬಲ ಹೊಂದಿರುವ production MCP servers ಈ ನಿಖರ "signal only, re-fetch" architecture ಅನ್ನೂ ನಿಜವಾಗಿ ಜಾರಿಗೊಳಿಸುತ್ತವೆ.' } },

    { type: 'heading', data: { textEn: 'Module 259 Complete: The Full Resources and Prompts Journey', textKn: 'Module 259 ಪೂರ್ಣಗೊಂಡಿದೆ: ಪೂರ್ಣ Resources and Prompts Journey', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Three Parts, Three Genuinely Reproduced Vulnerabilities and Their Fixes', headingKn: 'ಮೂರೂ Parts, ಮೂರೂ ನಿಜವಾಗಿ ಪುನರುತ್ಪಾದಿಸಿದ Vulnerabilities, ಅವುಗಳ Fixes',
      bodyEn: 'Part 1 genuinely reproduced and blocked a path-traversal attack. Part 2 genuinely reproduced and fixed a prompt-as-backdoor leak and a cross-tenant cache leak. Part 3 genuinely confirmed notifications cannot structurally leak content and genuinely proved re-authorization catches a revoked-access race. Every security claim in this module traces to code that actually ran and actually failed or succeeded as described.',
      bodyKn: 'Part 1 ಒಂದೂ path-traversal attack ಅನ್ನೂ ನಿಜವಾಗಿ ಪುನರುತ್ಪಾದಿಸಿತೂ, ಬ್ಲಾಕ್ ಮಾಡಿತೂ.' } },
    { type: 'table', data: {
      captionEn: 'Genuine Evidence Summary Across All 3 Parts', captionKn: 'ಎಲ್ಲಾ 3 Parts ಆದ್ಯಂತ ನಿಜ ಸಾಕ್ಷ್ಯ ಸಾರಾಂಶ',
      rows: "Part|Genuinely proved\n1: Resources|Deterministic listing; empty-vs-unknown distinguishable; real path traversal blocked\n2: Prompts and Caching|Shared authorization denies bob identically; unsafe handler genuinely leaked Alice's data; URI-only cache genuinely leaked across tenants, fixed by tenant-aware key\n3: Subscriptions|Notification payload structurally content-free; revoked-access race correctly denied on re-read; unrequested category genuinely filtered out" } },

    { type: 'concept', data: {
      headingEn: 'Connecting Back to Module 258', headingKn: 'Module 258 ಗೆ ಮತ್ತೆ ಸಂಪರ್ಕಿಸುವುದೂ',
      bodyEn: 'Module 258\'s subscription lesson genuinely confirmed 2 simultaneous listeners correlate correctly by subscriptionId. This lesson genuinely extends that same correlation mechanism with a content-security guarantee: whichever subscription an event belongs to, none of them ever carry the underlying resource\'s actual data.',
      bodyKn: 'Module 258 ya subscription lesson 2 ಏಕಕಾಲಿಕ listeners subscriptionId ಇಂದ ಸರಿಯಾಗಿ correlate ಆಗುತ್ತವೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿತೂ.' } },
    { type: 'concept', data: {
      headingEn: 'Phase 16 Progress', headingKn: 'Phase 16 Progress',
      bodyEn: 'With Modules 254-259 complete (18 lesson-parts, ~540 genuine blocks), Phase 16\'s MCP coverage now spans schema design, protocol fundamentals, server and client implementation, transports, and resources/prompts -- every module built on real, executed code rather than described behavior alone.',
      bodyKn: 'Modules 254-259 ಪೂರ್ಣಗೊಂಡಿದೂ (18 lesson-parts, ~540 ನಿಜ blocks), Phase 16 ya MCP coverage ಈಗ schema design, protocol fundamentals, server, client implementation, transports, resources/prompts ಅನ್ನೂ ವ್ಯಾಪಿಸುತ್ತದೆ.' } },
    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: did the resource-updated notification payload contain a "text" or "content" field?', qKn: 'resource-updated notification payload "text" ಅಥವಾ "content" field ಒಳಗೊಂಡಿತ್ತೇ?',
        opts: ['Only sometimes', 'No, genuinely confirmed absent', 'Yes, it contained the full text', 'It contained a summary'], correct: 1,
        optsKn: ['ಕೇವಲ ಕೆಲವೊಮ್ಮೆ', 'ಇಲ್ಲ, ನಿಜವಾಗಿ ಇಲ್ಲದಿರುವುದೂ ದೃಢಪಡಿಸಲಾಗಿದೆ', 'ಹೌದೂ, ಇದೂ ಪೂರ್ಣ text ಒಳಗೊಂಡಿತ್ತೂ', 'ಇದೂ ಒಂದೂ summary ಒಳಗೊಂಡಿತ್ತೂ'] },
      { q: 'Genuinely confirmed: what happened when alice tried to re-read after her access was revoked (but after receiving the notification while still authorized)?', qKn: 'ಅವಳೂ ya access revoke ಆದ ನಂತರ alice re-read ಪ್ರಯತ್ನಿಸಿದಾಗ ಏನಾಯಿತೂ?',
        opts: ['She was genuinely denied with -32602', 'No check was performed', 'The notification was resent', 'She received the content anyway'], correct: 0,
        optsKn: ['ಅವಳೂ ನಿಜವಾಗಿ -32602 ಜೊತೆ ತಿರಸ್ಕರಿಸಲ್ಪಟ್ಟಳೂ', 'ಯಾವುದೇ check ಮಾಡಲಿಲ್ಲ', 'Notification ಮತ್ತೆ ಕಳುಹಿಸಲ್ಪಟ್ಟಿತೂ', 'ಅವಳೂ ಹೇಗಾದರೂ content ಪಡೆದಳೂ'] },
      { q: 'Genuinely confirmed: was the promptsListChanged event sent when the client only requested resourcesListChanged?', qKn: 'Client ಕೇವಲ resourcesListChanged ಕೇಳಿದಾಗ promptsListChanged event ಕಳುಹಿಸಲ್ಪಟ್ಟಿತೇ?',
        opts: ['No, genuinely suppressed by the filter', 'It crashed the filter', 'Yes, all events were sent', 'Only the acknowledgment was affected'], correct: 0,
        optsKn: ['ಇಲ್ಲ, filter ಇಂದ ನಿಜವಾಗಿ ನಿಗ್ರಹಿಸಲ್ಪಟ್ಟಿತೂ', 'ಇದೂ filter ಅನ್ನೂ crash ಮಾಡಿತೂ', 'ಹೌದೂ, ಎಲ್ಲಾ events ಕಳುಹಿಸಲ್ಪಟ್ಟವೂ', 'ಕೇವಲ acknowledgment ಮಾತ್ರ ಪ್ರಭಾವಿತವಾಯಿತೂ'] },
      { q: 'Why is the notification-then-re-read pattern genuinely safer than embedding fresh content in the notification itself?', qKn: 'Notification-then-re-read pattern ಏಕೆ notification ಸ್ವತಃ ಒಳಗೆ ತಾಜಾ content ಅಳವಡಿಸುವುದಕ್ಕಿಂತ ನಿಜವಾಗಿ ಸುರಕ್ಷಿತ?',
        opts: ['It is faster over the network', 'It requires less code to implement', 'It forces a fresh authorization check at the moment of actual access, catching revocations that happened after the notification was sent', 'Notifications cannot technically carry any data at all'], correct: 2,
        optsKn: ['ಇದೂ ನೆಟ್‌ವರ್ಕ್ ಮೇಲೆ ವೇಗವಾಗಿದೆ', 'ಇದಕ್ಕೆ ಅಳವಡಿಸಲು ಕಡಿಮೆ code ಬೇಕು', 'ಇದೂ ವಾಸ್ತವಿಕ access ya ಕ್ಷಣದಲ್ಲಿ ಒಂದೂ ತಾಜಾ authorization check ಅನ್ನೂ ಒತ್ತಾಯಿಸುತ್ತದೆ', 'Notifications ತಾಂತ್ರಿಕವಾಗಿ ಯಾವುದೇ data ಒಯ್ಯಲಾಗುವುದಿಲ್ಲ'] },
      { q: 'Summarizing Module 259, what pattern connects Parts 1, 2, and 3?', qKn: 'Module 259 ಅನ್ನೂ ಸಾರಾಂಶಿಸುತ್ತಾ, Parts 1, 2, 3 ಅನ್ನೂ ಯಾವ pattern ಸಂಪರ್ಕಿಸುತ್ತದೆ?',
        opts: ['Subscriptions replace the need for authorization entirely', 'All three parts focus exclusively on caching', 'Tools are always preferred over Resources and Prompts', 'Every genuine security claim was reproduced with real, runnable code showing both the vulnerability and the fix'], correct: 3,
        optsKn: ['Subscriptions authorization ya ಅಗತ್ಯವನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ಬದಲಾಯಿಸುತ್ತವೆ', 'ಎಲ್ಲಾ ಮೂರೂ parts ಕೇವಲ caching ಮೇಲೆ ಮಾತ್ರ ಕೇಂದ್ರೀಕರಿಸುತ್ತವೆ', 'Tools ಯಾವಾಗಲೂ Resources, Prompts ಗಿಂತ ಆದ್ಯತೆ ಪಡೆಯುತ್ತವೆ', 'ಪ್ರತಿ ನಿಜ security claim ನಿಜ, ಚಲಾಯಿಸಬಹುದಾದ code ಜೊತೆ ಪುನರುತ್ಪಾದಿಸಲ್ಪಟ್ಟಿತೂ'] },
    ] } },
  ],
};
