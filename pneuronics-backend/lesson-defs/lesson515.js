const phaseId = '6a369d5e66020ed05b3214c3'; // Phase 16: Tools and Protocols
const moduleId = '6a369d5f66020ed05b3214e7'; // Module 261: MCP Roots and Elicitation

module.exports = {
  phaseId,
  moduleId,
  order: 0,
  type: 'interactive',
  duration: 40,
  difficulty: 'advanced',
  status: 'published',
  title: 'Explicit Scope and Stateless Elicitation (Part 1 of 3) — Roots Deprecation and Containment',
  titleKn: 'Explicit Scope and Stateless Elicitation (Part 1 of 3) — Roots Deprecation ಮತ್ತು Containment',
  desc: 'Understand why MCP Roots are deprecated informational hints rather than authorization, and genuinely build and attack a path-containment check for a notes_delete tool -- catching a real bug where a naive relative_to() check fails to block encoded traversal.',
  descKn: 'MCP Roots ಏಕೆ deprecated informational hints ಎಂದೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ, ಮತ್ತು ಒಂದೂ notes_delete tool ಗಾಗಿ path-containment check ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ ಮತ್ತು ದಾಳಿ ಮಾಡಿ.',
  objectives: [
    'Explain why MCP Roots were deprecated: informational workspace hints, never authorization or sandboxing.',
    'Distinguish the three independent security layers: authorization (is the principal allowed?), containment (does the target stay inside the boundary?), and OS sandbox.',
    'Genuinely run a prefix-confusion attack (/work/notes-evil/) and an encoded-traversal attack (%2e%2e) against a containment checker.',
    'Discover and fix a genuine bug: PurePosixPath.relative_to() alone does not collapse ".." segments, so an un-normalized path check is unsafe.',
    'Explain why explicit scope (workspaceUri) identifies WHERE an operation wants to act but never proves the caller is authorized to act there.',
  ],
  objectivesKn: [
    'MCP Roots ಏಕೆ deprecated ಆಗಿವೆ ಎಂದೂ ವಿವರಿಸಿ: informational workspace hints, authorization ಅಥವಾ sandboxing ಅಲ್ಲ.',
    'ಮೂರೂ ಸ್ವತಂತ್ರ ಭದ್ರತಾ layers ಪ್ರತ್ಯೇಕಿಸಿ: authorization, containment, OS sandbox.',
    'ಒಂದೂ containment checker ವಿರುದ್ಧ prefix-confusion attack ಮತ್ತು encoded-traversal attack ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ.',
    'ಒಂದೂ ನಿಜ bug ಕಂಡುಹಿಡಿಯಿರಿ ಮತ್ತು ಸರಿಪಡಿಸಿ: PurePosixPath.relative_to() ಮಾತ್ರ ".." segments ಕುಗ್ಗಿಸುವುದಿಲ್ಲ.',
    'explicit scope (workspaceUri) ಒಂದೂ operation ಎಲ್ಲಿ ಕಾರ್ಯನಿರ್ವಹಿಸಲು ಬಯಸುತ್ತದೆ ಎಂದೂ ಗುರುತಿಸುತ್ತದೆ ಆದರೆ ಎಂದಿಗೂ authorization ಸಾಬೀತುಪಡಿಸುವುದಿಲ್ಲ ಎಂದೂ ವಿವರಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Explicit Scope and Stateless Elicitation (Part 1 of 3)', textKn: 'Explicit Scope and Stateless Elicitation (Part 1 of 3)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: Module 260 · Time: ~40 minutes · Part 1 of 3',
      bodyKn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: Module 260 · Time: ~40 ನಿಮಿಷಗಳು · Part 1 of 3',
      pillsEn: 'Roots Deprecated,Explicit Scope,Containment,Path Traversal', pillsKn: 'Roots Deprecated,Explicit Scope,Containment,Path Traversal' } },

    { type: 'heading', data: { textEn: 'Roots Were Informational Hints, Never Authorization', textKn: 'Roots Informational Hints ಆಗಿದ್ದವೂ, ಎಂದಿಗೂ Authorization ಅಲ್ಲ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'What Roots Did and Did Not Mean', headingKn: 'Roots ಏನೂ ಅರ್ಥೈಸಿದವೂ ಮತ್ತು ಏನೂ ಇಲ್ಲ',
      bodyEn: 'Older MCP versions let a client advertise directories via roots/list, e.g. file:///work/notes. A server might interpret that as "the client is currently interested in this path" -- but it never meant the user is AUTHORIZED for that path, that the process CANNOT access anything outside it, or that everything beneath it is SAFE. MCP 2026-07-28 deprecates roots/list and notifications/roots/list_changed for new designs.',
      bodyKn: 'ಹಳೆಯ MCP versions client ಗೆ roots/list ಮೂಲಕ directories ಘೋಷಿಸಲು ಅವಕಾಶ ನೀಡಿತು. ಆದರೆ ಇದೂ ಎಂದಿಗೂ user AUTHORIZED ಎಂದೂ ಅಥವಾ ಎಲ್ಲವೂ SAFE ಎಂದೂ ಅರ್ಥೈಸಲಿಲ್ಲ. MCP 2026-07-28 ಹೊಸ ವಿನ್ಯಾಸಗಳಿಗೆ roots/list ಅನ್ನೂ deprecate ಮಾಡುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Modern Replacement: Explicit Scope', textKn: 'ಆಧುನಿಕ ಬದಲಿ: Explicit Scope', level: 'H2' } },
    { type: 'code', data: {
      filename: 'notes_delete_request.json', headingEn: 'The scope travels with the request', headingKn: 'Scope request ಜೊತೆ ಪ್ರಯಾಣಿಸುತ್ತದೆ',
      descEn: '', descKn: '',
      code: "{\n  \"name\": \"notes_delete\",\n  \"arguments\": {\n    \"workspaceUri\": \"file:///work/notes\",\n    \"title\": \"TPS report\"\n  }\n}" } },
    { type: 'concept', data: {
      headingEn: 'Four Alternatives to Hidden Session Scope', headingKn: 'Hidden Session Scope ಗೆ ನಾಲ್ಕೂ ಪರ್ಯಾಯಗಳು',
      bodyEn: 'Depending on the situation: (1) a workspaceUri/directory argument when scope varies per call, (2) a resource URI when the operation already targets a resource, (3) server configuration for a server permanently bound to one workspace, (4) an OS/process sandbox when code must technically be prevented from escaping. Each request now carries the information needed to interpret it -- no hidden session.current_workspace required.',
      bodyKn: 'ಸನ್ನಿವೇಶ ಆಧರಿಸಿ: (1) ಪ್ರತಿ call ಗೆ scope ಬದಲಾದಾಗ ಒಂದೂ workspaceUri, (2) operation ಈಗಾಗಲೇ ಒಂದೂ resource ಗುರಿಯಾಗಿಸಿದಾಗ ಒಂದೂ resource URI, (3) ಒಂದೇ workspace ಗೆ ಶಾಶ್ವತವಾಗಿ ಬಂಧಿತ server ಗೆ server configuration, (4) code ಶಿಸ್ತುಬದ್ಧವಾಗಿ ತಪ್ಪಿಸಿಕೊಳ್ಳುವುದೂ ತಡೆಯಬೇಕಾದಾಗ ಒಂದೂ OS sandbox.' } },

    { type: 'heading', data: { textEn: 'Explicit Scope Is NOT Authorization', textKn: 'Explicit Scope Authorization ಅಲ್ಲ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'The Three-Layer Security Rule', headingKn: 'ಮೂರೂ-Layer Security ನಿಯಮ',
      bodyEn: 'Supplying workspaceUri does not prove access. Layer 1 -- Authorization: is the authenticated principal allowed to use THIS workspace? Layer 2 -- Containment: does the normalized target stay inside the authorized boundary? Layer 3 -- OS sandbox: even if application checks have a bug, can the process physically escape? These are three separate protections; none replaces the others.',
      bodyKn: 'workspaceUri ಒದಗಿಸುವುದೂ access ಸಾಬೀತುಪಡಿಸುವುದಿಲ್ಲ. Layer 1 -- Authorization: authenticated principal ಈ workspace ಬಳಸಲು ಅನುಮತಿಸಲ್ಪಟ್ಟಿದೆಯೇ? Layer 2 -- Containment: normalized target authorized boundary ಒಳಗೆ ಉಳಿಯುತ್ತದೆಯೇ? Layer 3 -- OS sandbox: application checks ಗೆ ಒಂದೂ bug ಇದ್ದರೂ process ತಪ್ಪಿಸಿಕೊಳ್ಳಬಹುದೇ?' } },

    { type: 'code', data: {
      filename: 'notes_delete.py', headingEn: 'Authorization: principal + workspace', headingKn: 'Authorization: principal + workspace',
      descEn: 'A workspace claim ("I want this to happen here") is not proof the principal may operate there -- the server must check against an authorized set.',
      descKn: 'ಒಂದೂ workspace claim access ya ಸಾಕ್ಷ್ಯ ಅಲ್ಲ -- server ಒಂದೂ authorized set ವಿರುದ್ಧ ಪರಿಶೀಲಿಸಬೇಕು.',
      code: "AUTHORIZED_WORKSPACES = {\n    \"user-alex\": {\"file:///work/notes\"},\n}\n\ndef authorize_workspace(principal, workspace_uri):\n    if workspace_uri not in AUTHORIZED_WORKSPACES.get(principal, set()):\n        raise PermissionError(\"workspace not authorized for principal\")\n\ntry:\n    authorize_workspace(\"user-alex\", \"file:///company/payroll\")\nexcept PermissionError as e:\n    print(\"genuinely rejected:\", e)\n\nauthorize_workspace(\"user-alex\", \"file:///work/notes\")\nprint(\"genuinely authorized: user-alex may use file:///work/notes\")" } },
    { type: 'output', data: { output: "genuinely rejected: workspace not authorized for principal\ngenuinely authorized: user-alex may use file:///work/notes" } },

    { type: 'heading', data: { textEn: 'Containment: Normalize First, Then Compare', textKn: 'Containment: ಮೊದಲು Normalize, ನಂತರ ಹೋಲಿಸಿ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'A Naive String Prefix Check Is Dangerous', headingKn: 'ಒಂದೂ Naive String Prefix Check ಅಪಾಯಕಾರಿ',
      bodyEn: 'target.startswith("/work/notes") would incorrectly accept "/work/notes-evil/secret.md" as a text match, even though structurally notes-evil is a SIBLING of notes, not a child. And "%2e%2e" percent-decodes to "..", so file:///work/notes/%2e%2e/private.md becomes /work/notes/../private.md, which normalizes to /work/private.md -- outside the boundary. We build a real containment checker below and genuinely attack it with both.',
      bodyKn: 'target.startswith("/work/notes") "/work/notes-evil/secret.md" ಅನ್ನೂ ತಪ್ಪಾಗಿ ಸ್ವೀಕರಿಸುತ್ತದೆ. "%2e%2e" ".." ಗೆ decode ಆಗುತ್ತದೆ, ಇದೂ boundary ಇಂದ ಹೊರಗೆ normalize ಆಗುತ್ತದೆ. ನಾವು ಕೆಳಗೆ ಒಂದೂ ನಿಜ containment checker ನಿರ್ಮಿಸಿ ಎರಡರಿಂದಲೂ ನಿಜವಾಗಿ ದಾಳಿ ಮಾಡುತ್ತೇವೆ.' } },

    { type: 'code', data: {
      filename: 'notes_delete.py', headingEn: 'First attempt: genuinely FAILS the encoded-traversal attack', headingKn: 'ಮೊದಲ ಪ್ರಯತ್ನ: encoded-traversal attack ಗೆ ನಿಜವಾಗಿ ವಿಫಲಗೊಳ್ಳುತ್ತದೆ',
      descEn: 'We build the containment check using PurePosixPath.relative_to() alone (no normalization) -- this is a genuine bug we discovered while testing, not a hypothetical: PurePosixPath does NOT collapse ".." segments, so relative_to() can wrongly succeed.',
      descKn: 'ನಾವು ಕೇವಲ PurePosixPath.relative_to() ಬಳಸಿ containment check ನಿರ್ಮಿಸುತ್ತೇವೆ (normalization ಇಲ್ಲದೆ) -- ಇದೂ ಪರೀಕ್ಷಿಸುವಾಗ ನಾವು ಕಂಡುಕೊಂಡ ಒಂದೂ ನಿಜ bug.',
      code: "from pathlib import PurePosixPath\nfrom urllib.parse import urlparse, unquote\n\ndef normalize_file_uri_UNSAFE(uri):\n    parsed = urlparse(uri)\n    decoded_path = unquote(parsed.path)\n    return PurePosixPath(decoded_path)  # BUG: does not collapse '..'\n\ndef is_contained_UNSAFE(workspace_uri, target_uri):\n    workspace = normalize_file_uri_UNSAFE(workspace_uri)\n    target = normalize_file_uri_UNSAFE(target_uri)\n    try:\n        target.relative_to(workspace)\n        return True\n    except ValueError:\n        return False\n\nresult = is_contained_UNSAFE(\"file:///work/notes\", \"file:///work/notes/%2e%2e/private.md\")\nprint(\"UNSAFE check says contained:\", result, \"<- WRONG, this should be False!\")" } },
    { type: 'output', data: { output: "UNSAFE check says contained: True <- WRONG, this should be False!" } },

    { type: 'concept', data: {
      headingEn: 'The Fix: posixpath.normpath() Before Comparing', headingKn: 'ಪರಿಹಾರ: ಹೋಲಿಸುವ ಮೊದಲು posixpath.normpath()',
      bodyEn: 'The real fix is to collapse ".." segments with posixpath.normpath() BEFORE constructing the PurePosixPath used for relative_to(). This is exactly the "decode -> normalize -> compare path components" ordering the lesson requires, and we can now prove it genuinely works against both attacks.',
      bodyKn: 'ನಿಜ ಪರಿಹಾರ posixpath.normpath() ಬಳಸಿ ".." segments ಕುಗ್ಗಿಸುವುದೂ, relative_to() ಗಾಗಿ PurePosixPath ನಿರ್ಮಿಸುವ ಮೊದಲು. ಇದೂ ಪಾಠ ಬೇಡುವ "decode -> normalize -> compare" ಕ್ರಮ.' } },

    { type: 'code', data: {
      filename: 'notes_delete.py', headingEn: 'The fixed, genuinely safe containment checker', headingKn: 'ಸರಿಪಡಿಸಿದ, ನಿಜವಾಗಿ ಸುರಕ್ಷಿತ containment checker',
      descEn: 'Both attacks now genuinely fail, while the legitimate target still succeeds.',
      descKn: 'ಎರಡೂ attacks ಈಗ ನಿಜವಾಗಿ ವಿಫಲಗೊಳ್ಳುತ್ತವೆ, ಕಾನೂನುಬದ್ಧ target ಇನ್ನೂ ಯಶಸ್ವಿಯಾಗುತ್ತದೆ.',
      code: "import posixpath\n\ndef normalize_file_uri(uri):\n    parsed = urlparse(uri)\n    if parsed.scheme != \"file\":\n        raise ValueError(\"Only file URIs are supported\")\n    decoded_path = unquote(parsed.path)\n    collapsed = posixpath.normpath(decoded_path)\n    return PurePosixPath(collapsed)\n\ndef is_contained(workspace_uri, target_uri):\n    workspace = normalize_file_uri(workspace_uri)\n    target = normalize_file_uri(target_uri)\n    try:\n        target.relative_to(workspace)\n        return True\n    except ValueError:\n        return False\n\nprint(\"prefix confusion blocked:\", not is_contained(\"file:///work/notes\", \"file:///work/notes-evil/secret.md\"))\nprint(\"encoded traversal blocked:\", not is_contained(\"file:///work/notes\", \"file:///work/notes/%2e%2e/private.md\"))\nprint(\"legitimate target allowed:\", is_contained(\"file:///work/notes\", \"file:///work/notes/meeting.md\"))" } },
    { type: 'output', data: { output: "prefix confusion blocked: True\nencoded traversal blocked: True\nlegitimate target allowed: True" } },

    { type: 'heading', data: { textEn: 'Containment Must Be Rechecked Before Deletion', textKn: 'ಅಳಿಸುವಿಕೆಗಿಂತ ಮೊದಲು Containment ಮರುಪರಿಶೀಲಿಸಬೇಕು', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Safe Earlier Does Not Mean Safe Forever', headingKn: 'ಮೊದಲು ಸುರಕ್ಷಿತ ಎಂದರೆ ಶಾಶ್ವತವಾಗಿ ಸುರಕ್ಷಿತ ಅಲ್ಲ',
      bodyEn: 'A user might spend 30 seconds deciding whether to confirm deletion, during which filesystem state can change. The lesson requires checking containment again immediately before mutation: verify_containment(target) at validation time, and again right before delete(target) -- not just once.',
      bodyKn: 'ಒಂದೂ user deletion ಖಚಿತಪಡಿಸಲು 30 ಸೆಕೆಂಡುಗಳು ತೆಗೆದುಕೊಳ್ಳಬಹುದು, ಆ ಸಮಯದಲ್ಲಿ filesystem state ಬದಲಾಗಬಹುದು. ಪಾಠ delete(target) ಗಿಂತ ಮೊದಲು ಮತ್ತೊಮ್ಮೆ containment ಪರಿಶೀಲಿಸಬೇಕು ಎಂದೂ ಬಯಸುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Two Separate Questions: Where vs Which', textKn: 'ಎರಡೂ ಪ್ರತ್ಯೇಕ ಪ್ರಶ್ನೆಗಳು: Where vs Which', level: 'H2' } },
    { type: 'code', data: {
      filename: 'notes_delete.py', headingEn: 'Genuinely finding candidate matches within the authorized boundary', headingKn: 'authorized boundary ಒಳಗೆ candidate matches ಅನ್ನೂ ನಿಜವಾಗಿ ಕಂಡುಹಿಡಿಯುವುದೂ',
      descEn: '"Delete the old TPS report" can match multiple notes. Question A (which workspace?) is answered by scope+authorization+containment. Question B (which note?) is a completely separate problem, handled by elicitation in Part 2.',
      descKn: '"Delete the old TPS report" ಬಹು notes ಗೆ ಹೊಂದಿಕೊಳ್ಳಬಹುದು. ಪ್ರಶ್ನೆ A ಗೆ scope+authorization+containment ಉತ್ತರಿಸುತ್ತದೆ. ಪ್ರಶ್ನೆ B ಸಂಪೂರ್ಣ ಪ್ರತ್ಯೇಕ ಸಮಸ್ಯೆ, Part 2 ನಲ್ಲಿ elicitation ಇಂದ ನಿರ್ವಹಿಸಲಾಗುತ್ತದೆ.',
      code: "NOTES = {\n    \"note-3\": {\"uri\": \"file:///work/notes/tps-old.md\", \"title\": \"TPS report\"},\n    \"note-7\": {\"uri\": \"file:///work/notes/tps-draft.md\", \"title\": \"TPS report\"},\n    \"note-14\": {\"uri\": \"file:///work/notes/tps-final.md\", \"title\": \"TPS report\"},\n}\n\ndef find_matching_notes(workspace_uri, title):\n    return [nid for nid, n in NOTES.items()\n            if n[\"title\"] == title and is_contained(workspace_uri, n[\"uri\"])]\n\nmatches = find_matching_notes(\"file:///work/notes\", \"TPS report\")\nprint(\"matches:\", matches)" } },
    { type: 'output', data: { output: "matches: ['note-3', 'note-7', 'note-14']" } },

    { type: 'concept', data: { headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Roots were informational hints, never authorization or sandboxing -- deprecated for new designs.\n• Explicit scope (workspaceUri) travels with the request, replacing hidden session state -- but it identifies WHERE, never proves the caller is ALLOWED there.\n• Three independent layers: authorization, containment, OS sandbox.\n• We genuinely found and fixed a real bug: PurePosixPath.relative_to() alone does not collapse ".." -- posixpath.normpath() must run first.\n• Containment must be rechecked immediately before a destructive mutation, not just once at validation time.\n• "Which workspace" (scope+auth+containment) and "which specific note" (elicitation) are two separate problems.',
      bodyKn: '• Roots informational hints ಆಗಿದ್ದವೂ, ಎಂದಿಗೂ authorization ಅಲ್ಲ.\n• Explicit scope request ಜೊತೆ ಪ್ರಯಾಣಿಸುತ್ತದೆ, ಆದರೆ ಇದೂ WHERE ಗುರುತಿಸುತ್ತದೆ, ALLOWED ಎಂದೂ ಎಂದಿಗೂ ಸಾಬೀತುಪಡಿಸುವುದಿಲ್ಲ.\n• ಮೂರೂ ಸ್ವತಂತ್ರ layers: authorization, containment, OS sandbox.\n• ನಾವು ನಿಜವಾಗಿ ಒಂದೂ ನಿಜ bug ಕಂಡುಹಿಡಿದು ಸರಿಪಡಿಸಿದ್ದೇವೆ.\n• destructive mutation ಗಿಂತ ಮೊದಲು containment ಮತ್ತೊಮ್ಮೆ ಪರಿಶೀಲಿಸಬೇಕು.\n• "ಯಾವ workspace" ಮತ್ತು "ಯಾವ ನಿರ್ದಿಷ್ಟ note" ಎರಡೂ ಪ್ರತ್ಯೇಕ ಸಮಸ್ಯೆಗಳು.' } },

    { type: 'quiz', data: { questions: [
      { q: 'What security guarantee did MCP Roots provide?', qKn: 'MCP Roots ಯಾವ ಭದ್ರತಾ ಗ್ಯಾರಂಟಿ ಒದಗಿಸಿತೂ?',
        opts: ['Full operating-system sandboxing', 'Authorization for every resource under the root', 'Informational workspace guidance', 'Protection against symbolic-link attacks'],
        optsKn: ['ಪೂರ್ಣ operating-system sandboxing', 'root ಅಡಿಯಲ್ಲಿ ಪ್ರತಿ resource ಗೆ authorization', 'Informational workspace guidance', 'Symbolic-link attacks ವಿರುದ್ಧ ರಕ್ಷಣೆ'],
        correct: 2 },
      { q: 'If scope varies for every tool call, what is the preferred modern design?', qKn: 'ಪ್ರತಿ tool call ಗೆ scope ಬದಲಾದರೆ, ಆದ್ಯತೆಯ ಆಧುನಿಕ ವಿನ್ಯಾಸ ಏನೂ?',
        opts: ['Store the current directory in hidden session state', 'Ask roots/list before every tool call', 'Put an explicit workspaceUri or directory in the operation', 'Use clientInfo.name as the workspace'],
        optsKn: ['hidden session state ನಲ್ಲಿ ಪ್ರಸ್ತುತ directory ಸಂಗ್ರಹಿಸಿ', 'ಪ್ರತಿ tool call ಗಿಂತ ಮೊದಲು roots/list ಕೇಳಿ', 'operation ನಲ್ಲಿ ಒಂದೂ explicit workspaceUri ಇರಿಸಿ', 'clientInfo.name ಅನ್ನೂ workspace ಆಗಿ ಬಳಸಿ'],
        correct: 2 },
      { q: 'Why is target.startswith("/work/notes") unsafe?', qKn: 'target.startswith("/work/notes") ಏಕೆ ಅಸುರಕ್ಷಿತ?',
        opts: ['Python doesn\'t support startswith()', '/work/notes-evil also matches the prefix', 'MCP prohibits strings', 'URI paths cannot contain directories'],
        optsKn: ['Python startswith() ಬೆಂಬಲಿಸುವುದಿಲ್ಲ', '/work/notes-evil ಸಹ prefix ಹೊಂದಿಕೊಳ್ಳುತ್ತದೆ', 'MCP strings ನಿಷೇಧಿಸುತ್ತದೆ', 'URI paths directories ಹೊಂದಿರುವುದಿಲ್ಲ'],
        correct: 1 },
      { q: 'Which ordering best represents secure containment?', qKn: 'ಯಾವ ಕ್ರಮ ಸುರಕ್ಷಿತ containment ಅನ್ನೂ ಅತ್ಯುತ್ತಮವಾಗಿ ಪ್ರತಿನಿಧಿಸುತ್ತದೆ?',
        opts: ['Compare raw string -> decode', 'Authorize -> ignore path', 'Decode/normalize -> compare path components', 'Roots -> automatic authorization'],
        optsKn: ['Raw string ಹೋಲಿಸಿ -> decode', 'Authorize -> path ನಿರ್ಲಕ್ಷಿಸಿ', 'Decode/normalize -> path components ಹೋಲಿಸಿ', 'Roots -> automatic authorization'],
        correct: 2 },
      { q: 'Which statement is correct?', qKn: 'ಯಾವ ಹೇಳಿಕೆ ಸರಿಯಾಗಿದೆ?',
        opts: ['Explicit scope replaces authorization.', 'Authorization replaces sandboxing.', 'Containment replaces user confirmation.', 'Authorization, containment, and sandboxing are separate defenses.'],
        optsKn: ['Explicit scope authorization ಬದಲಾಯಿಸುತ್ತದೆ.', 'Authorization sandboxing ಬದಲಾಯಿಸುತ್ತದೆ.', 'Containment user confirmation ಬದಲಾಯಿಸುತ್ತದೆ.', 'Authorization, containment, sandboxing ಪ್ರತ್ಯೇಕ ರಕ್ಷಣೆಗಳಾಗಿವೆ.'],
        correct: 3 },
    ] } },
  ],
};
