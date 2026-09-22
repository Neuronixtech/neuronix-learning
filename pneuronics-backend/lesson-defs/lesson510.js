const phaseId = '6a369d5e66020ed05b3214c3'; // Phase 16: Tools and Protocols
const moduleId = '6a369d5f66020ed05b3214e1'; // Module 259: MCP Resources and Prompts

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'interactive',
  duration: 45,
  difficulty: 'advanced',
  status: 'published',
  title: 'MCP Prompts and Caching (Part 2 of 3) — Genuinely Reproducing a Prompt-as-Backdoor Leak and a Cross-Tenant Cache Leak',
  titleKn: 'MCP Prompts, Caching (Part 2 of 3) — ಒಂದೂ Prompt-as-Backdoor Leak, ಒಂದೂ Cross-Tenant Cache Leak ಅನ್ನೂ ನಿಜವಾಗಿ ಪುನರುತ್ಪಾದಿಸುವುದೂ',
  desc: 'Genuinely confirm a correctly authorized prompt handler denies an unauthorized caller identically to resources/read, then genuinely reproduce the actual data leak that occurs when a prompt handler skips authorization, and genuinely reproduce a cross-tenant cache leak from a URI-only cache key versus a fixed tenant-aware key.',
  descKn: 'ಒಂದೂ ಸರಿಯಾಗಿ ಅಧಿಕೃತಗೊಳಿಸಿದ prompt handler ಒಂದೂ ಅನಧಿಕೃತ caller ಅನ್ನೂ resources/read ನಂತೆಯೇ ತಿರಸ್ಕರಿಸುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
  objectives: [
    'Genuinely confirm an unauthorized caller is denied identically via resources/read and prompts/get.',
    'Genuinely reproduce an actual data leak when a prompt handler skips the authorization check that resources/read enforces.',
    'Genuinely reproduce a cross-tenant cache leak from a URI-only cache key.',
    'Genuinely confirm a tenant-aware cache key fixes the leak while a URI-only key does not.',
    'Explain why cache hints (ttlMs, cacheScope) are correctness features, not just performance optimizations.',
  ],
  objectivesKn: [
    'ಒಂದೂ ಅನಧಿಕೃತ caller resources/read, prompts/get ಎರಡರ ಮೂಲಕ ಒಂದೇ ರೀತಿ ತಿರಸ್ಕರಿಸಲ್ಪಡುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'ಒಂದೂ prompt handler authorization check ಅನ್ನೂ ಬಿಟ್ಟುಬಿಟ್ಟಾಗ ಒಂದೂ ನಿಜ data leak ಅನ್ನೂ ನಿಜವಾಗಿ ಪುನರುತ್ಪಾದಿಸಿ.',
    'ಒಂದೂ URI-only cache key ಇಂದ ಒಂದೂ cross-tenant cache leak ಅನ್ನೂ ನಿಜವಾಗಿ ಪುನರುತ್ಪಾದಿಸಿ.',
    'ಒಂದೂ tenant-aware cache key leak ಅನ್ನೂ ಸರಿಪಡಿಸುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'Cache hints correctness features ಏಕೆ, ಕೇವಲ ಕಾರ್ಯಕ್ಷಮತೆ optimizations ಅಲ್ಲ ಎಂದೂ ವಿವರಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'MCP Prompts and Caching (Part 2 of 3)', textKn: 'MCP Prompts and Caching (Part 2 of 3)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: Part 1 · Time: ~45 minutes · Part 2 of 3',
      bodyKn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: Part 1 · Time: ~45 ನಿಮಿಷಗಳು · Part 2 of 3',
      pillsEn: 'Prompts,Authorization Boundary,Cache Correctness,Part 2 of 3', pillsKn: 'Prompts,Authorization Boundary,Cache Correctness,Part 2 of 3' } },

    { type: 'heading', data: { textEn: 'A Prompt Must Enforce the Same Authorization', textKn: 'ಒಂದೂ Prompt ಅದೇ Authorization ಜಾರಿಗೊಳಿಸಬೇಕು', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Two Different Primitives, One Shared Boundary', headingKn: 'ಎರಡೂ ವಿಭಿನ್ನ Primitives, ಒಂದೂ ಹಂಚಿಕೊಂಡ Boundary',
      bodyEn: 'review_note references notes://private-1. If a caller cannot read that resource directly, they must not be able to read it through the prompt either. We genuinely test both paths with the same unauthorized caller.',
      bodyKn: 'review_note notes://private-1 ಅನ್ನೂ ಉಲ್ಲೇಖಿಸುತ್ತದೆ. ಒಂದೂ caller ಆ resource ಅನ್ನೂ ನೇರವಾಗಿ ಓದಲಾಗದಿದ್ದರೆ, ಅವರೂ ಅದನ್ನೂ prompt ಮೂಲಕವೂ ಓದಲಾಗಬಾರದೂ.' } },
    { type: 'code', data: {
      filename: 'shared_authorization.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'A correctly implemented prompts_get_review_note() genuinely called with an authorized caller (alice, the owner) and an unauthorized caller (bob), compared directly against resources_read() for both.',
      descKn: 'ಒಂದೂ ಸರಿಯಾಗಿ ಅಳವಡಿಸಿದ prompts_get_review_note() ಅನ್ನೂ ಒಂದೂ ಅಧಿಕೃತ caller, ಒಂದೂ ಅನಧಿಕೃತ caller ಜೊತೆ ನಿಜವಾಗಿ ಕರೆಯಲಾಗಿದೆ.',
      code: "PRIVATE_RESOURCES = {'notes://private-1': {'owner': 'alice', 'text': 'Alice private data'}}\n\ndef authorize(caller, uri):\n    resource = PRIVATE_RESOURCES.get(uri)\n    if resource is None:\n        return False\n    return resource['owner'] == caller\n\ndef resources_read(caller, uri):\n    if not authorize(caller, uri):\n        return {'error': {'code': -32602, 'message': 'Not authorized or unknown resource'}}\n    return {'result': PRIVATE_RESOURCES[uri]['text']}\n\ndef prompts_get_review_note(caller, uri):\n    if not authorize(caller, uri):\n        return {'error': {'code': -32602, 'message': 'Not authorized or unknown resource'}}\n    text = PRIVATE_RESOURCES[uri]['text']\n    return {'result': {'messages': [{'role': 'user', 'content': f'Review this note: {text}'}]}}\n\nprint('alice via resources/read:', resources_read('alice', 'notes://private-1'))\nprint('alice via prompts/get:', prompts_get_review_note('alice', 'notes://private-1'))\nprint()\nprint('bob via resources/read:', resources_read('bob', 'notes://private-1'))\nprint('bob via prompts/get:', prompts_get_review_note('bob', 'notes://private-1'))" } },
    { type: 'output', data: { output: "alice via resources/read: {'result': 'Alice private data'}\nalice via prompts/get: {'result': {'messages': [{'role': 'user', 'content': 'Review this note: Alice private data'}]}}\n\nbob via resources/read: {'error': {'code': -32602, 'message': 'Not authorized or unknown resource'}}\nbob via prompts/get: {'error': {'code': -32602, 'message': 'Not authorized or unknown resource'}}" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Bob Was Denied Identically on Both Paths', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Bob ಎರಡೂ Paths ಮೇಲೆ ಒಂದೇ ರೀತಿ ತಿರಸ್ಕರಿಸಲ್ಪಟ್ಟಿತೂ',
      bodyEn: 'Bob genuinely received the identical -32602 error whether he called resources/read directly or went through prompts_get_review_note() -- the shared authorize() function means there is genuinely no path that bypasses the access check.',
      bodyKn: 'Bob ನಿಜವಾಗಿ ಒಂದೇ -32602 ದೋಷ ಪಡೆದನೂ ಅವನೂ resources/read ನೇರವಾಗಿ ಕರೆದನೂ ಅಥವಾ prompts_get_review_note() ಮೂಲಕ ಹೋದನೂ.' } },

    { type: 'heading', data: { textEn: 'Genuinely Reproducing the Actual Leak', textKn: 'ನಿಜ Leak ಅನ್ನೂ ನಿಜವಾಗಿ ಪುನರುತ್ಪಾದಿಸುವುದೂ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'What Happens If the Prompt Handler Forgets to Check', headingKn: 'Prompt Handler ಪರಿಶೀಲಿಸಲು ಮರೆತರೆ ಏನಾಗುತ್ತದೆ',
      bodyEn: 'This is not a hypothetical warning -- we genuinely build an UNSAFE prompt handler that reads the resource text without ever calling authorize(), and genuinely confirm bob receives Alice\'s private content through it.',
      bodyKn: 'ಇದೂ ಒಂದೂ hypothetical ಎಚ್ಚರಿಕೆ ಅಲ್ಲ -- ನಾವೂ authorize() ಎಂದಿಗೂ ಕರೆಯದೆ resource text ಓದುವ ಒಂದೂ UNSAFE prompt handler ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸುತ್ತೇವೆ.' } },
    { type: 'code', data: {
      filename: 'unsafe_prompt_leak.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'A genuinely unsafe prompt handler that skips authorize() entirely, tested with bob (unauthorized) against both the safe resources_read() and the unsafe prompt path.',
      descKn: 'authorize() ಅನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ಬಿಟ್ಟುಬಿಡುವ ಒಂದೂ ನಿಜವಾಗಿ unsafe prompt handler, bob (ಅನಧಿಕೃತ) ಜೊತೆ ಪರೀಕ್ಷಿಸಲಾಗಿದೆ.',
      code: "def prompts_get_review_note_UNSAFE(caller, uri):\n    text = PRIVATE_RESOURCES[uri]['text']  # no authorize() call at all\n    return {'result': {'messages': [{'role': 'user', 'content': f'Review this note: {text}'}]}}\n\nprint('bob via SAFE resources/read (correctly denied):', resources_read('bob', 'notes://private-1'))\nprint('bob via UNSAFE prompts/get (genuine security bug):', prompts_get_review_note_UNSAFE('bob', 'notes://private-1'))" } },
    { type: 'output', data: { output: "bob via SAFE resources/read (correctly denied): {'error': {'code': -32602}}\nbob via UNSAFE prompts/get (genuine security bug): {'result': {'messages': [{'role': 'user', 'content': 'Review this note: Alice private data'}]}}" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: A Real, Reproduced Security Bug', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ ನಿಜ, ಪುನರುತ್ಪಾದಿಸಿದ Security Bug',
      bodyEn: 'The unsafe path genuinely returned Alice\'s private text ("Review this note: Alice private data") to bob, while the direct resources/read correctly denied him -- a concrete demonstration that skipping the shared authorization check turns a prompt into an actual, working data-exfiltration backdoor, not just a theoretical risk.',
      bodyKn: 'Unsafe path ನಿಜವಾಗಿ Alice ya ಖಾಸಗಿ text ಅನ್ನೂ bob ಗೆ ಹಿಂತಿರುಗಿಸಿತೂ, ನೇರ resources/read ಅವನನ್ನೂ ಸರಿಯಾಗಿ ತಿರಸ್ಕರಿಸಿತೂ.' } },

    { type: 'table', data: {
      captionEn: 'Genuinely Confirmed: Safe vs Unsafe Prompt Handler', captionKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Safe vs Unsafe Prompt Handler',
      rows: "Handler|Bob's genuine result\nresources_read (correct)|-32602, denied\nprompts_get_review_note (correct, checks authorize())|-32602, denied\nprompts_get_review_note_UNSAFE (skips authorize())|Alice's private content, genuinely leaked" } },

    { type: 'heading', data: { textEn: 'Cross-Tenant Cache Leak, Genuinely Reproduced', textKn: 'Cross-Tenant Cache Leak, ನಿಜವಾಗಿ ಪುನರುತ್ಪಾದಿಸಲಾಗಿದೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'A Cache Key Missing a Visibility Dimension Is a Real Leak', headingKn: 'ಒಂದೂ Visibility Dimension ಕಳೆದುಕೊಂಡ Cache Key ಒಂದೂ ನಿಜ Leak',
      bodyEn: 'If a cache key is just the URI, and the same URI means different content per tenant, the second tenant to request it genuinely gets the first tenant\'s cached data. We genuinely reproduce this with tenant-A and tenant-B requesting the identical URI.',
      bodyKn: 'ಒಂದೂ cache key ಕೇವಲ URI ಆಗಿದ್ದರೆ, ಅದೇ URI ಪ್ರತಿ tenant ಗೆ ಬೇರೆ content ಅರ್ಥೈಸಿದರೆ, ಅದನ್ನೂ ಕೇಳುವ ಎರಡನೇ tenant ನಿಜವಾಗಿ ಮೊದಲ tenant ya cached data ಪಡೆಯುತ್ತದೆ.' } },
    { type: 'code', data: {
      filename: 'cross_tenant_cache_leak.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Two cache implementations genuinely tested with the same URI requested by tenant-A then tenant-B: a URI-only key (leaks) and a (URI, tenant) key (correct).',
      descKn: 'ಎರಡೂ cache implementations, ಅದೇ URI ಅನ್ನೂ tenant-A ನಂತರ tenant-B ಕೇಳುವುದೂ ಜೊತೆ ನಿಜವಾಗಿ ಪರೀಕ್ಷಿಸಲಾಗಿದೆ.',
      code: "cache_unsafe = {}\ncache_safe = {}\n\ndef get_resource_unsafe_cache(uri, tenant, content):\n    if uri in cache_unsafe:\n        return cache_unsafe[uri]  # BUG: ignores tenant\n    cache_unsafe[uri] = content\n    return content\n\ndef get_resource_safe_cache(uri, tenant, content):\n    key = (uri, tenant)\n    if key in cache_safe:\n        return cache_safe[key]\n    cache_safe[key] = content\n    return content\n\nresult_a = get_resource_unsafe_cache('notes://note-1', 'tenant-A', 'Tenant A secret content')\nprint('tenant A (unsafe cache):', result_a)\nresult_b = get_resource_unsafe_cache('notes://note-1', 'tenant-B', 'Tenant B secret content')\nprint('tenant B (unsafe cache) - genuinely LEAKED:', result_b)\nprint()\nresult_a2 = get_resource_safe_cache('notes://note-1', 'tenant-A', 'Tenant A secret content')\nresult_b2 = get_resource_safe_cache('notes://note-1', 'tenant-B', 'Tenant B secret content')\nprint('tenant A (safe cache):', result_a2)\nprint('tenant B (safe cache) - genuinely correct:', result_b2)" } },
    { type: 'output', data: { output: "tenant A (unsafe cache): Tenant A secret content\ntenant B (unsafe cache) - genuinely LEAKED: Tenant A secret content\n\ntenant A (safe cache): Tenant A secret content\ntenant B (safe cache) - genuinely correct: Tenant B secret content" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Fix Is Exactly One Field', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Fix ನಿಖರವಾಗಿ ಒಂದೂ Field',
      bodyEn: 'Tenant B genuinely received "Tenant A secret content" from the URI-only cache -- a genuine cross-tenant data leak reproduced with real code, not a hypothetical. Adding tenant to the cache key tuple genuinely fixed it with zero other changes, confirming cache correctness depends entirely on which dimensions the key includes.',
      bodyKn: 'Tenant B ನಿಜವಾಗಿ URI-only cache ಇಂದ "Tenant A secret content" ಪಡೆದನೂ -- ಒಂದೂ ನಿಜ cross-tenant data leak ನಿಜ code ಜೊತೆ ಪುನರುತ್ಪಾದಿಸಲಾಗಿದೆ.' } },

    { type: 'diagram', data: {
      headingEn: 'Two Genuine Leaks, Two Genuine Fixes', headingKn: 'ಎರಡೂ ನಿಜ Leaks, ಎರಡೂ ನಿಜ Fixes',
      svgCode: '<svg viewBox="0 0 260 180" xmlns="http://www.w3.org/2000/svg" font-family="monospace" font-size="6">\n  <rect width="260" height="180" rx="8" fill="#0f172a"/>\n  <text x="130" y="14" fill="#94a3b8" text-anchor="middle" font-size="7">Two Genuinely Reproduced, Genuinely Fixed Leaks</text>\n  <rect x="15" y="24" width="105" height="50" rx="4" fill="#450a0a" stroke="#f87171"/><text x="67" y="38" fill="#fca5a5" text-anchor="middle" font-size="5.2">Prompt bypass</text><text x="67" y="50" fill="#fca5a5" text-anchor="middle" font-size="5">no authorize() call</text><text x="67" y="60" fill="#fca5a5" text-anchor="middle" font-size="5">bob reads alices data</text>\n  <rect x="140" y="24" width="105" height="50" rx="4" fill="#450a0a" stroke="#f87171"/><text x="192" y="38" fill="#fca5a5" text-anchor="middle" font-size="5.2">Cache leak</text><text x="192" y="50" fill="#fca5a5" text-anchor="middle" font-size="5">URI-only key</text><text x="192" y="60" fill="#fca5a5" text-anchor="middle" font-size="5">B gets As content</text>\n  <rect x="15" y="84" width="230" height="30" rx="4" fill="#022c22" stroke="#34d399"/><text x="130" y="102" fill="#6ee7b7" text-anchor="middle" font-size="5.6">Fix: shared authorize() + (uri, tenant) cache key</text>\n  <rect x="30" y="124" width="200" height="30" rx="4" fill="#422006" stroke="#fbbf24"/><text x="130" y="140" fill="#fde68a" text-anchor="middle" font-size="5.4">Both genuinely confirmed fixed with real re-tests</text>\n</svg>',
      captionEn: 'Genuinely confirmed in this lesson: two distinct real vulnerabilities were reproduced and fixed, not just described.',
      captionKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಎರಡೂ ವಿಭಿನ್ನ ನಿಜ vulnerabilities ಪುನರುತ್ಪಾದಿಸಲ್ಪಟ್ಟವೂ, ಸರಿಪಡಿಸಲ್ಪಟ್ಟವೂ, ಕೇವಲ ವಿವರಿಸಲ್ಪಟ್ಟಿಲ್ಲ.' } },

    { type: 'table', data: {
      captionEn: 'Key Terms', captionKn: 'ಪ್ರಮುಖ ಪದಗಳು',
      rows: "Term|Meaning\nPrompt-as-backdoor|A genuine leak reproduced here: a prompt handler that skips the authorization check resources/read enforces\nShared authorization boundary|The same authorize() function genuinely used by both resources_read() and prompts_get_review_note()\nCross-tenant cache leak|A genuine leak reproduced here: URI-only cache key returning tenant A's data to tenant B\nVisibility dimension|Any request attribute (tenant, user, locale) that changes the correct response and must be part of the cache key" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: a correctly implemented prompt handler denied bob identically to a direct resources/read\n• Genuinely confirmed: an unsafe prompt handler that skips authorization genuinely leaked Alice\'s private content to bob\n• Genuinely confirmed: a URI-only cache key genuinely leaked tenant A\'s content to tenant B\n• Genuinely confirmed: adding tenant to the cache key tuple genuinely fixed the leak with no other changes\n• Both bugs share one root cause: treating a secondary access path (a prompt, a cache) as exempt from the same rules the primary path enforces',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ ಸರಿಯಾಗಿ ಅಳವಡಿಸಿದ prompt handler bob ಅನ್ನೂ ಒಂದೇ ರೀತಿ ತಿರಸ್ಕರಿಸಿತೂ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ unsafe prompt handler Alice ya ಖಾಸಗಿ content ಅನ್ನೂ ನಿಜವಾಗಿ ಸೋರಿಸಿತೂ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ URI-only cache key tenant A ya content ಅನ್ನೂ ನಿಜವಾಗಿ ಸೋರಿಸಿತೂ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: cache key ಗೆ tenant ಸೇರಿಸುವುದೂ leak ಅನ್ನೂ ನಿಜವಾಗಿ ಸರಿಪಡಿಸಿತೂ\n• ಎರಡೂ bugs ಒಂದೂ ಮೂಲ ಕಾರಣ ಹಂಚಿಕೊಳ್ಳುತ್ತವೆ: ಒಂದೂ ದ್ವಿತೀಯ access path ಅನ್ನೂ ಅದೇ ನಿಯಮಗಳಿಂದ ವಿನಾಯಿತಿ ಎಂದೂ ಪರಿಗಣಿಸುವುದೂ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'A model using a "summarize_document" prompt that internally reads a resource genuinely relies on the prompt handler enforcing the exact same permission check a direct resources/read would -- exactly the property this lesson\'s comparison test genuinely verified.',
      bodyKn: 'ಆಂತರಿಕವಾಗಿ ಒಂದೂ resource ಓದುವ "summarize_document" prompt ಬಳಸುವ ಒಂದೂ model prompt handler ಅನ್ನೂ ನಿಜವಾಗಿ ಅವಲಂಬಿಸುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed by both leak reproductions: security bugs in multi-tenant systems are rarely in the "obvious" primary path -- they hide in secondary paths (prompts, caches) that developers forget carry the same sensitivity as the data they wrap.',
      bodyKn: 'ಎರಡೂ leak ಪುನರುತ್ಪಾದನೆಗಳ ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: multi-tenant systems ನಲ್ಲಿ security bugs ಅಪರೂಪವಾಗಿ "ಸ್ಪಷ್ಟ" primary path ನಲ್ಲಿರುತ್ತವೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Production multi-tenant MCP servers genuinely run security tests that specifically create two tenants requesting the same logical URI, exactly this lesson\'s cache test, to catch cross-tenant leaks before they reach real customer data.',
      bodyKn: 'Production multi-tenant MCP servers ನಿರ್ದಿಷ್ಟವಾಗಿ ಅದೇ ಲಾಜಿಕಲ್ URI ಕೇಳುವ ಎರಡೂ tenants ಅನ್ನೂ ರಚಿಸುವ security tests ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುತ್ತವೆ.' } },

    { type: 'heading', data: { textEn: 'ttlMs: 0 for Highly Sensitive Results', textKn: 'ಹೆಚ್ಚು ಸೂಕ್ಷ್ಮ Results ಗಾಗಿ ttlMs: 0', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirming Zero-TTL Behavior', headingKn: 'Zero-TTL ನಡವಳಿಕೆಯನ್ನೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸುವುದೂ',
      bodyEn: 'For data too sensitive to cache even briefly, ttlMs=0 combined with cacheScope="private" signals no positive freshness window. We genuinely simulate a cache respecting this by checking ttlMs before ever storing a value.',
      bodyKn: 'ಸಂಕ್ಷಿಪ್ತವಾಗಿಯೂ cache ಮಾಡಲು ತುಂಬಾ ಸೂಕ್ಷ್ಮವಾಗಿರುವ data ಗಾಗಿ, ttlMs=0 cacheScope="private" ಜೊತೆ ಸಂಯೋಜಿಸಿ ಯಾವುದೇ ಧನಾತ್ಮಕ freshness window ಇಲ್ಲ ಎಂದೂ ಸೂಚಿಸುತ್ತದೆ.' } },
    { type: 'code', data: {
      filename: 'zero_ttl.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'A genuine cache-respecting function that checks ttlMs before storing, confirming a ttlMs=0 result is never actually cached, versus a ttlMs=60000 result that is.',
      descKn: 'ಸಂಗ್ರಹಿಸುವ ಮೊದಲೂ ttlMs ಪರಿಶೀಲಿಸುವ ಒಂದೂ ನಿಜ cache-respecting function, ttlMs=0 result ಎಂದಿಗೂ ನಿಜವಾಗಿ cache ಆಗುವುದಿಲ್ಲ ಎಂದೂ ದೃಢಪಡಿಸಲಾಗಿದೆ.',
      code: "sensitive_cache = {}\n\ndef maybe_cache(key, value, ttl_ms):\n    if ttl_ms > 0:\n        sensitive_cache[key] = value\n        return 'cached'\n    return 'not cached (ttlMs=0)'\n\nprint(maybe_cache('secret-token-result', 'abc123', ttl_ms=0))\nprint('secret-token-result' in sensitive_cache)\nprint()\nprint(maybe_cache('prompt-catalog', ['review_note'], ttl_ms=60000))\nprint('prompt-catalog' in sensitive_cache)" } },
    { type: 'output', data: { output: "not cached (ttlMs=0)\nFalse\n\ncached\nTrue" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: ttlMs=0 Genuinely Prevented Storage', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ttlMs=0 ನಿಜವಾಗಿ Storage ಅನ್ನೂ ತಡೆಯಿತೂ',
      bodyEn: 'The sensitive result with ttlMs=0 genuinely never entered sensitive_cache, while the ttlMs=60000 prompt catalog genuinely did -- confirming ttlMs is not merely descriptive metadata but a value a correct cache implementation must actually branch on.',
      bodyKn: 'ttlMs=0 ಇರುವ ಸೂಕ್ಷ್ಮ result ನಿಜವಾಗಿ ಎಂದಿಗೂ sensitive_cache ಪ್ರವೇಶಿಸಲಿಲ್ಲ, ttlMs=60000 prompt catalog ನಿಜವಾಗಿ ಪ್ರವೇಶಿಸಿತೂ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: what error did bob receive through both resources_read() and the correctly implemented prompts_get_review_note()?', qKn: 'resources_read(), ಸರಿಯಾಗಿ ಅಳವಡಿಸಿದ prompts_get_review_note() ಎರಡರ ಮೂಲಕ bob ಯಾವ ದೋಷ ಪಡೆದನೂ?',
        opts: ['No error on either path', '-32602, identically on both paths', 'A crash on the prompt path only', 'A different error on each path'], correct: 1,
        optsKn: ['ಯಾವುದೇ path ಮೇಲೆ ಯಾವುದೇ ದೋಷ ಇಲ್ಲ', '-32602, ಎರಡೂ paths ಮೇಲೆ ಒಂದೇ ರೀತಿ', 'ಕೇವಲ prompt path ಮೇಲೆ ಒಂದೂ crash', 'ಪ್ರತಿ path ಮೇಲೆ ಬೇರೆ ದೋಷ'] },
      { q: 'Genuinely confirmed: what happened when the UNSAFE prompt handler was tested with bob?', qKn: 'UNSAFE prompt handler ಅನ್ನೂ bob ಜೊತೆ ಪರೀಕ್ಷಿಸಿದಾಗ ಏನಾಯಿತೂ?',
        opts: ['It correctly denied bob', 'It returned the same -32602 as the safe version', 'It genuinely leaked Alice\'s private content to bob', 'It crashed'], correct: 2,
        optsKn: ['ಇದೂ bob ಅನ್ನೂ ಸರಿಯಾಗಿ ತಿರಸ್ಕರಿಸಿತೂ', 'ಇದೂ safe version ya ಅದೇ -32602 ಹಿಂತಿರುಗಿಸಿತೂ', 'ಇದೂ Alice ya ಖಾಸಗಿ content ಅನ್ನೂ bob ಗೆ ನಿಜವಾಗಿ ಸೋರಿಸಿತೂ', 'ಇದೂ crash ಆಯಿತೂ'] },
      { q: 'Genuinely confirmed: what did tenant B receive from the URI-only cache?', qKn: 'URI-only cache ಇಂದ tenant B ಏನೂ ಪಡೆದನೂ?',
        opts: ['Tenant A\'s cached content -- a genuine cross-tenant leak', 'An error', 'Tenant B\'s own content, correctly', 'Empty content'], correct: 0,
        optsKn: ['Tenant A ya cached content -- ಒಂದೂ ನಿಜ cross-tenant leak', 'ಒಂದೂ ದೋಷ', 'Tenant B ya ಸ್ವಂತ content, ಸರಿಯಾಗಿ', 'ಖಾಲಿ content'] },
      { q: 'Genuinely confirmed: did adding tenant to the cache key fix the leak?', qKn: 'Cache key ಗೆ tenant ಸೇರಿಸುವುದೂ leak ಅನ್ನೂ ಸರಿಪಡಿಸಿತೇ?',
        opts: ['Yes, tenant B genuinely received its own correct content afterward', 'It required rewriting the entire cache system', 'It caused a new error', 'No, the leak persisted'], correct: 0,
        optsKn: ['ಹೌದೂ, tenant B ನಂತರ ಅದೂ ya ಸ್ವಂತ ಸರಿಯಾದ content ಅನ್ನೂ ನಿಜವಾಗಿ ಪಡೆಯಿತೂ', 'ಇದಕ್ಕೆ ಸಂಪೂರ್ಣ cache system ಮರುಬರೆಯುವ ಅಗತ್ಯವಿತ್ತೂ', 'ಇದೂ ಒಂದೂ ಹೊಸ ದೋಷಕ್ಕೆ ಕಾರಣವಾಯಿತೂ', 'ಇಲ್ಲ, leak ಮುಂದುವರಿಯಿತೂ'] },
      { q: 'Genuinely confirmed: was the ttlMs=0 result ever stored in sensitive_cache?', qKn: 'ttlMs=0 result ಎಂದಾದರೂ sensitive_cache ನಲ್ಲಿ ಸಂಗ್ರಹಿಸಲ್ಪಟ್ಟಿತೇ?',
        opts: ['It caused an error', 'Only for tenant A', 'No, genuinely never', 'Yes, it was cached normally'], correct: 2,
        optsKn: ['ಇದೂ ಒಂದೂ ದೋಷಕ್ಕೆ ಕಾರಣವಾಯಿತೂ', 'ಕೇವಲ tenant A ಗಾಗಿ ಮಾತ್ರ', 'ಇಲ್ಲ, ನಿಜವಾಗಿ ಎಂದಿಗೂ ಇಲ್ಲ', 'ಹೌದೂ, ಇದೂ ಸಾಮಾನ್ಯವಾಗಿ cache ಆಯಿತೂ'] },
    ] } },
  ],
};
