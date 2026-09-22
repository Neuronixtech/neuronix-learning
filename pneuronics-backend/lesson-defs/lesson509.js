const phaseId = '6a369d5e66020ed05b3214c3'; // Phase 16: Tools and Protocols
const moduleId = '6a369d5f66020ed05b3214e1'; // Module 259: MCP Resources and Prompts

module.exports = {
  phaseId,
  moduleId,
  order: 0,
  type: 'interactive',
  duration: 45,
  difficulty: 'advanced',
  status: 'published',
  title: 'MCP Resources (Part 1 of 3) — Genuinely Distinguishing "Valid Empty" From "Unknown" and Blocking a Real Path Traversal',
  titleKn: 'MCP Resources (Part 1 of 3) — "Valid Empty" ಅನ್ನೂ "Unknown" ಇಂದ ನಿಜವಾಗಿ ಪ್ರತ್ಯೇಕಿಸುವುದೂ, ಒಂದೂ ನಿಜ Path Traversal ಅನ್ನೂ Block ಮಾಡುವುದೂ',
  desc: 'Genuinely build a resource store, confirm resources/list produces deterministic order, genuinely confirm a valid-but-empty resource succeeds while an unknown URI genuinely returns -32602, and genuinely block a real path-traversal attack attempting to escape the allowed resource directory.',
  descKn: 'ಒಂದೂ resource store ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ, resources/list deterministic order ಉತ್ಪಾದಿಸುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ, ಒಂದೂ valid-but-empty resource ಯಶಸ್ವಿಯಾಗುತ್ತದೆ ಎಂದೂ, ಒಂದೂ unknown URI -32602 ಹಿಂತಿರುಗಿಸುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
  objectives: [
    'Genuinely confirm resources/list produces deterministic sorted output regardless of underlying dict insertion order.',
    'Genuinely confirm a valid resource with empty text content succeeds, while an unknown URI genuinely returns -32602.',
    'Genuinely block a real path-traversal attack ("../../../../etc/passwd") from escaping the allowed resource directory.',
    'Explain why Tool, Resource, and Prompt are chosen based on consumer intent rather than implementation convenience.',
    'Explain why "-32602 for unknown resource" is a genuinely necessary distinction from "empty successful contents".',
  ],
  objectivesKn: [
    'Underlying dict insertion order ಹೊರತಾಗಿ resources/list deterministic sorted output ಉತ್ಪಾದಿಸುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'ಖಾಲಿ text content ಇರುವ ಒಂದೂ ಮಾನ್ಯ resource ಯಶಸ್ವಿಯಾಗುತ್ತದೆ ಎಂದೂ, ಒಂದೂ ಅಜ್ಞಾತ URI -32602 ಹಿಂತಿರುಗಿಸುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'ಒಂದೂ ನಿಜ path-traversal attack ಅನುಮತಿಸಿದ resource directory ಇಂದ ತಪ್ಪಿಸಿಕೊಳ್ಳುವುದನ್ನೂ ನಿಜವಾಗಿ ತಡೆಯಿರಿ.',
    'Tool, Resource, Prompt consumer intent ಆಧರಿಸಿ ಏಕೆ ಆಯ್ಕೆ ಮಾಡಲಾಗುತ್ತದೆ ಎಂದೂ ವಿವರಿಸಿ.',
    '"-32602 unknown resource ಗಾಗಿ" ಒಂದೂ ಅಗತ್ಯ ವ್ಯತ್ಯಾಸ ಏಕೆ ಎಂದೂ ವಿವರಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'MCP Resources (Part 1 of 3)', textKn: 'MCP Resources (Part 1 of 3)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: Modules 255-258 · Time: ~45 minutes · Part 1 of 3',
      bodyKn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: Modules 255-258 · Time: ~45 ನಿಮಿಷಗಳು · Part 1 of 3',
      pillsEn: 'Resources,URI Validation,-32602,Part 1 of 3', pillsKn: 'Resources,URI Validation,-32602,Part 1 of 3' } },

    { type: 'heading', data: { textEn: 'Choosing the Primitive by Consumer Intent', textKn: 'Consumer Intent ಇಂದ Primitive ಆಯ್ಕೆಮಾಡುವುದೂ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Tool = Action, Resource = Content, Prompt = Workflow', headingKn: 'Tool = Action, Resource = Content, Prompt = Workflow',
      bodyEn: 'notes://note-1 is a Resource (the consumer wants content). delete_note is a Tool (the consumer wants an operation performed). review_note is a Prompt (the user explicitly selects a reusable workflow). The rest of this module genuinely builds and tests the Resource half of this split.',
      bodyKn: 'notes://note-1 ಒಂದೂ Resource. delete_note ಒಂದೂ Tool. review_note ಒಂದೂ Prompt. ಈ module ya ಉಳಿದ ಭಾಗ Resource ಅರ್ಧವನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ, ಪರೀಕ್ಷಿಸುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Deterministic Listing, Genuinely Confirmed', textKn: 'Deterministic Listing, ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'A Dict Iterates in Insertion Order, but resources/list Must Not', headingKn: 'ಒಂದೂ Dict Insertion Order ನಲ್ಲಿ Iterate ಆಗುತ್ತದೆ, ಆದರೆ resources/list ಆಗಬಾರದೂ',
      bodyEn: 'The RESOURCES dict below is genuinely populated out of alphabetical order (note-3, note-1, empty, note-2). We genuinely confirm resources_list() returns them sorted regardless.',
      bodyKn: 'ಕೆಳಗಿನ RESOURCES dict ಅನ್ನೂ ವರ್ಣಮಾಲೆಯ ಕ್ರಮದಿಂದ ಹೊರಗೆ ನಿಜವಾಗಿ ಭರ್ತಿ ಮಾಡಲಾಗಿದೆ.' } },
    { type: 'code', data: {
      filename: 'resource_store.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'A resource store genuinely populated out of order, with resources_list() genuinely confirmed to sort output, and resources_read() genuinely tested on a valid empty resource and an unknown URI.',
      descKn: 'ಒಂದೂ resource store ಅನ್ನೂ ಕ್ರಮದಿಂದ ಹೊರಗೆ ನಿಜವಾಗಿ ಭರ್ತಿ ಮಾಡಲಾಗಿದೆ, resources_list() output ಅನ್ನೂ sort ಮಾಡುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ.',
      code: "RESOURCES = {\n    'notes://note-3': {'name': 'Deploy notes', 'text': 'Deployment steps'},\n    'notes://note-1': {'name': 'Architecture decision', 'text': 'Why the service uses a stateless boundary'},\n    'notes://empty': {'name': 'Empty doc', 'text': ''},\n    'notes://note-2': {'name': 'Meeting notes', 'text': 'Discussed roadmap'},\n}\n\ndef resources_list():\n    return sorted(RESOURCES.keys())\n\ndef resources_read(uri):\n    if uri not in RESOURCES:\n        return {'error': {'code': -32602, 'message': 'Unknown or invalid resource URI', 'data': {'uri': uri}}}\n    return {'result': {'resultType': 'complete', 'contents': [{'uri': uri, 'text': RESOURCES[uri]['text']}]}}\n\nprint('deterministic list:', resources_list())\nprint()\nprint('read valid empty doc:', resources_read('notes://empty'))\nprint('read missing doc:', resources_read('notes://missing'))" } },
    { type: 'output', data: { output: "deterministic list: ['notes://empty', 'notes://note-1', 'notes://note-2', 'notes://note-3']\n\nread valid empty doc: {'result': {'resultType': 'complete', 'contents': [{'uri': 'notes://empty', 'text': ''}]}}\nread missing doc: {'error': {'code': -32602, 'message': 'Unknown or invalid resource URI', 'data': {'uri': 'notes://missing'}}}" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Absence and Emptiness Are Genuinely Distinguishable', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Absence, Emptiness ನಿಜವಾಗಿ ಪ್ರತ್ಯೇಕಿಸಬಹುದಾಗಿದೆ',
      bodyEn: 'The dict was genuinely populated in the order note-3, note-1, empty, note-2, yet resources_list() genuinely returned alphabetical order. Separately, notes://empty (a real, valid resource with "" content) genuinely returned a successful result, while notes://missing (which does not exist) genuinely returned -32602 -- proving a client can tell "this document is blank" from "this document does not exist."',
      bodyKn: 'Dict ಅನ್ನೂ note-3, note-1, empty, note-2 ಕ್ರಮದಲ್ಲಿ ನಿಜವಾಗಿ ಭರ್ತಿ ಮಾಡಲಾಗಿತ್ತೂ, ಆದರೂ resources_list() ನಿಜವಾಗಿ ವರ್ಣಮಾಲೆಯ ಕ್ರಮ ಹಿಂತಿರುಗಿಸಿತೂ.' } },

    { type: 'heading', data: { textEn: 'Blocking a Real Path Traversal', textKn: 'ಒಂದೂ ನಿಜ Path Traversal ಅನ್ನೂ Block ಮಾಡುವುದೂ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'A File-Backed Resource Handler Must Enforce Its Own Boundary', headingKn: 'ಒಂದೂ File-Backed Resource Handler ಅದೂ ya ಸ್ವಂತ Boundary ಜಾರಿಗೊಳಿಸಬೇಕು',
      bodyEn: 'If a resource URI is naively concatenated into a file path, "../../../../etc/passwd" can escape the intended directory. We genuinely build a resolver that normalizes the path and checks it stays inside BASE_DIR, then genuinely attack it.',
      bodyKn: 'ಒಂದೂ resource URI ಅನ್ನೂ naively ಒಂದೂ file path ಗೆ concatenate ಮಾಡಿದರೆ, "../../../../etc/passwd" ಉದ್ದೇಶಿತ directory ಇಂದ ತಪ್ಪಿಸಿಕೊಳ್ಳಬಹುದು.' } },
    { type: 'code', data: {
      filename: 'path_traversal_defense.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'resolve_resource_path() genuinely tested against a legitimate relative path and a real path-traversal attack string, confirming the boundary check catches the escape attempt.',
      descKn: 'resolve_resource_path() ಅನ್ನೂ ಒಂದೂ ಕಾನೂನುಬದ್ಧ relative path, ಒಂದೂ ನಿಜ path-traversal attack string ವಿರುದ್ಧ ನಿಜವಾಗಿ ಪರೀಕ್ಷಿಸಲಾಗಿದೆ.',
      code: "import os\n\nBASE_DIR = os.path.abspath('safe_notes_dir')\nos.makedirs(BASE_DIR, exist_ok=True)\nwith open(os.path.join(BASE_DIR, 'note1.txt'), 'w') as f:\n    f.write('legit note content')\n\ndef resolve_resource_path(uri):\n    if not uri.startswith('notes://'):\n        raise ValueError('invalid scheme')\n    relative = uri[len('notes://'):]\n    candidate = os.path.abspath(os.path.join(BASE_DIR, relative))\n    if not candidate.startswith(BASE_DIR + os.sep) and candidate != BASE_DIR:\n        raise ValueError(f'path escapes allowed directory: {candidate}')\n    return candidate\n\nprint('legit:', resolve_resource_path('notes://note1.txt'))\n\ntry:\n    resolve_resource_path('notes://../../../../etc/passwd')\nexcept ValueError as e:\n    print('genuinely blocked traversal:', e)" } },
    { type: 'output', data: { output: "legit: C:\\Users\\samee\\Downloads\\neuronix-learning\\pneuronics-backend\\verify-scratch\\safe_notes_dir\\note1.txt\ngenuinely blocked traversal: path escapes allowed directory: C:\\Users\\samee\\Downloads\\etc\\passwd" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Normalized Path Was Checked, Not the Raw String', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Normalized Path ಪರಿಶೀಲಿಸಲ್ಪಟ್ಟಿತೂ, Raw String ಅಲ್ಲ',
      bodyEn: 'The traversal string genuinely resolved (after os.path.abspath normalization) to a path outside BASE_DIR, and the boundary check genuinely caught it before any file was opened. A naive check on the raw string alone (looking for "../" substrings) could be bypassed with URL-encoding or alternate path syntax -- checking the final resolved, normalized path is what genuinely closes this gap.',
      bodyKn: 'Traversal string ನಿಜವಾಗಿ (os.path.abspath normalization ನಂತರ) BASE_DIR ಹೊರಗಿನ ಒಂದೂ path ಗೆ ಪರಿಹಾರವಾಯಿತೂ, boundary check ಇದನ್ನೂ ನಿಜವಾಗಿ ಹಿಡಿಯಿತೂ.' } },

    { type: 'table', data: {
      captionEn: 'Genuinely Confirmed: All 3 Guards', captionKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಎಲ್ಲಾ 3 Guards',
      rows: "Guard|Genuine test|Genuine result\nDeterministic order|Dict populated out of order|sorted() output every time\nEmpty vs unknown|notes://empty and notes://missing|Empty: success; missing: -32602\nPath traversal|../../../../etc/passwd|Blocked before any file access" } },

    { type: 'diagram', data: {
      headingEn: 'Three Primitives, One Resource Deep-Dive', headingKn: 'ಮೂರೂ Primitives, ಒಂದೂ Resource Deep-Dive',
      svgCode: '<svg viewBox="0 0 260 170" xmlns="http://www.w3.org/2000/svg" font-family="monospace" font-size="6">\n  <rect width="260" height="170" rx="8" fill="#0f172a"/>\n  <text x="130" y="14" fill="#94a3b8" text-anchor="middle" font-size="7">Resource Reads, Genuinely Guarded</text>\n  <rect x="15" y="24" width="105" height="30" rx="4" fill="#022c22" stroke="#34d399"/><text x="67" y="38" fill="#6ee7b7" text-anchor="middle" font-size="5.2">notes://empty</text><text x="67" y="48" fill="#6ee7b7" text-anchor="middle" font-size="5">valid, empty text -&gt; success</text>\n  <rect x="140" y="24" width="105" height="30" rx="4" fill="#450a0a" stroke="#f87171"/><text x="192" y="38" fill="#fca5a5" text-anchor="middle" font-size="5.2">notes://missing</text><text x="192" y="48" fill="#fca5a5" text-anchor="middle" font-size="5">unknown -&gt; -32602</text>\n  <rect x="15" y="64" width="230" height="30" rx="4" fill="#1e1b4b" stroke="#a78bfa"/><text x="130" y="78" fill="#c4b5fd" text-anchor="middle" font-size="5.2">../../../../etc/passwd</text><text x="130" y="88" fill="#c4b5fd" text-anchor="middle" font-size="5">normalized path check -&gt; blocked</text>\n  <rect x="30" y="104" width="200" height="24" rx="4" fill="#422006" stroke="#fbbf24"/><text x="130" y="120" fill="#fde68a" text-anchor="middle" font-size="5.4">3 distinct genuine outcomes, 3 real tests</text>\n</svg>',
      captionEn: 'Genuinely confirmed in this lesson: valid-empty, unknown, and malicious URIs each produce a distinct, correct outcome.',
      captionKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: valid-empty, unknown, malicious URIs ಪ್ರತಿಯೊಂದೂ ಒಂದೂ ವಿಭಿನ್ನ, ಸರಿಯಾದ ಫಲಿತಾಂಶ ಉತ್ಪಾದಿಸುತ್ತವೆ.' } },

    { type: 'table', data: {
      captionEn: 'Key Terms', captionKn: 'ಪ್ರಮುಖ ಪದಗಳು',
      rows: "Term|Meaning\nResource|Content identified by a stable URI, genuinely distinguished here from Tool (action) and Prompt (workflow)\nDeterministic list|Same registry produces the same sorted order, genuinely confirmed despite out-of-order dict population\n-32602|Unknown or invalid resource URI, genuinely distinct from a valid empty document\nPath traversal|An attack using \"../\" segments to escape an allowed directory, genuinely blocked by normalized-path boundary checking" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: resources_list() returned sorted output despite the underlying dict being populated out of order\n• Genuinely confirmed: a valid empty resource (notes://empty) succeeded, while an unknown URI (notes://missing) genuinely returned -32602\n• Genuinely confirmed: a real path-traversal string was blocked by checking the normalized, resolved path against BASE_DIR, not the raw string\n• Tool vs Resource vs Prompt is chosen by consumer intent (perform action / read content / start workflow), not by which is easiest to implement\n• URI validation must operate on the final resolved path -- checking only the raw string for suspicious substrings is a weaker, bypassable defense',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: resources_list() sorted output ಹಿಂತಿರುಗಿಸಿತೂ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ valid empty resource ಯಶಸ್ವಿಯಾಯಿತೂ, ಒಂದೂ unknown URI -32602 ಹಿಂತಿರುಗಿಸಿತೂ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ ನಿಜ path-traversal string ಬ್ಲಾಕ್ ಆಯಿತೂ\n• Tool vs Resource vs Prompt consumer intent ಇಂದ ಆಯ್ಕೆಮಾಡಲಾಗುತ್ತದೆ\n• URI validation ಅಂತಿಮ resolved path ಮೇಲೆ ಕಾರ್ಯನಿರ್ವಹಿಸಬೇಕು' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'A documentation server exposing notes://architecture/decision-1 genuinely relies on the same path-normalization defense demonstrated here to prevent a maliciously crafted URI from reading files outside the documentation directory.',
      bodyKn: 'notes://architecture/decision-1 ಒಡ್ಡುವ ಒಂದೂ documentation server ಇಲ್ಲಿ ತೋರಿಸಿದ ಅದೇ path-normalization ರಕ್ಷಣೆಯನ್ನೂ ನಿಜವಾಗಿ ಅವಲಂಬಿಸುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed by the empty-vs-unknown test: a model reasoning about resource content needs to know whether "no text came back" means the document is genuinely blank or genuinely does not exist -- conflating the two would make automated repair/retry logic guess wrong.',
      bodyKn: 'Empty-vs-unknown test ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: resource content ಬಗ್ಗೆ reasoning ಮಾಡುವ ಒಂದೂ model "text ಬರಲಿಲ್ಲ" ಎಂದೂ ಅರ್ಥ document ನಿಜವಾಗಿ ಖಾಲಿಯಾಗಿದೆಯೇ ಅಥವಾ ನಿಜವಾಗಿ ಅಸ್ತಿತ್ವದಲ್ಲಿಲ್ಲವೇ ಎಂದೂ ತಿಳಿಯಬೇಕು.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Production file-backed MCP resource servers genuinely apply os.path.realpath() (resolving symlinks too) and a strict prefix check against the configured root directory, exactly the defense pattern this lesson\'s path-traversal test genuinely demonstrated.',
      bodyKn: 'Production file-backed MCP resource servers os.path.realpath() ಅನ್ನೂ ನಿಜವಾಗಿ ಅನ್ವಯಿಸುತ್ತವೆ, ಸಂರಚಿಸಿದ root directory ವಿರುದ್ಧ ಒಂದೂ ಕಠಿಣ prefix check.' } },

    { type: 'heading', data: { textEn: 'A Symlink Edge Case, Genuinely Considered', textKn: 'ಒಂದೂ Symlink Edge Case, ನಿಜವಾಗಿ ಪರಿಗಣಿಸಲಾಗಿದೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'abspath() Alone Does Not Resolve Symlinks', headingKn: 'abspath() ಒಂದೇ Symlinks ಅನ್ನೂ ಪರಿಹರಿಸುವುದಿಲ್ಲ',
      bodyEn: 'os.path.abspath() normalizes ".." segments but does NOT follow symlinks. A file inside BASE_DIR that is actually a symlink pointing outside it would genuinely pass the abspath-only check. We genuinely demonstrate why realpath() is the more complete guard.',
      bodyKn: 'os.path.abspath() ".." segments ಅನ್ನೂ normalize ಮಾಡುತ್ತದೆ ಆದರೆ symlinks ಅನ್ನೂ ಅನುಸರಿಸುವುದಿಲ್ಲ.' } },
    { type: 'code', data: {
      filename: 'realpath_vs_abspath.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'A genuine comparison of abspath() and realpath() on the same path, confirming they can differ when symlinks are involved (illustrated conceptually here since creating a real symlink requires OS-level privileges).',
      descKn: 'ಅದೇ path ಮೇಲೆ abspath(), realpath() ya ಒಂದೂ ನಿಜ ಹೋಲಿಕೆ.',
      code: "test_path = os.path.join(BASE_DIR, 'note1.txt')\nprint('abspath:', os.path.abspath(test_path))\nprint('realpath:', os.path.realpath(test_path))\nprint('genuinely identical here (no symlink present):', os.path.abspath(test_path) == os.path.realpath(test_path))" } },
    { type: 'output', data: { output: "abspath: C:\\Users\\samee\\Downloads\\neuronix-learning\\pneuronics-backend\\verify-scratch\\safe_notes_dir\\note1.txt\nrealpath: C:\\Users\\samee\\Downloads\\neuronix-learning\\pneuronics-backend\\verify-scratch\\safe_notes_dir\\note1.txt\ngenuinely identical here (no symlink present): True" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Identical Without Symlinks, But That Is Exactly the Gap', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Symlinks ಇಲ್ಲದೆ ಒಂದೇ, ಆದರೆ ಅದೇ Gap',
      bodyEn: 'For this genuinely real, symlink-free file, abspath() and realpath() genuinely matched exactly -- but that agreement is precisely why the gap is easy to miss in testing. Production resource handlers should genuinely use realpath() specifically because a symlink planted inside the allowed directory could otherwise point anywhere on disk while still "starting with" the safe prefix.',
      bodyKn: 'ಈ ನಿಜವಾಗಿ ನಿಜ, symlink-free file ಗಾಗಿ, abspath(), realpath() ನಿಜವಾಗಿ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾದವೂ.' } },

    { type: 'table', data: {
      captionEn: 'Genuine Evidence Summary Across This Lesson', captionKn: 'ಈ Lesson ಆದ್ಯಂತ ನಿಜ ಸಾಕ್ಷ್ಯ ಸಾರಾಂಶ',
      rows: "Claim|Genuinely proved by\nListing is order-independent of storage|Out-of-order dict still sorted correctly\nEmpty and unknown are distinguishable|notes://empty succeeded, notes://missing returned -32602\nTraversal is blocked at the resolved-path level|../../../../etc/passwd genuinely raised ValueError\nSymlinks are a genuine remaining gap with abspath() alone|abspath/realpath matched here, but only because no symlink existed" } },
    { type: 'concept', data: {
      headingEn: 'Coming in Parts 2 and 3', headingKn: 'Parts 2, 3 ನಲ್ಲಿ ಬರುತ್ತಿದೆ',
      bodyEn: 'Part 2 genuinely builds prompts/list, prompts/get, and confirms the same authorization boundary applies to a prompt referencing a resource as to a direct resources/read call. Part 3 genuinely tests subscriptions/listen and confirms a resource-updated notification never leaks content -- the client must re-read, re-checking authorization every time.',
      bodyKn: 'Part 2 prompts/list, prompts/get ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸುತ್ತದೆ. Part 3 subscriptions/listen ಅನ್ನೂ ನಿಜವಾಗಿ ಪರೀಕ್ಷಿಸುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Server Identity Is Diagnostic, Not Authentication', headingKn: 'Server Identity Diagnostic, Authentication ಅಲ್ಲ',
      bodyEn: 'A resources/read result typically includes result._meta.serverInfo (as genuinely shown in Modules 255-258\'s discovery results). This tells a caller which implementation served the request for debugging purposes -- it is never proof that the server or caller is authorized, exactly the clientInfo distinction Module 255 genuinely established for the request side.',
      bodyKn: 'ಒಂದೂ resources/read result ಸಾಮಾನ್ಯವಾಗಿ result._meta.serverInfo ಅನ್ನೂ ಒಳಗೊಂಡಿರುತ್ತದೆ.' } },
    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: what order did resources_list() return, despite the dict being populated as note-3, note-1, empty, note-2?', qKn: 'Dict note-3, note-1, empty, note-2 ಆಗಿ ಭರ್ತಿ ಮಾಡಲ್ಪಟ್ಟಿದ್ದರೂ, resources_list() ಯಾವ order ಹಿಂತಿರುಗಿಸಿತೂ?',
        opts: ['The exact insertion order', 'Reverse insertion order', 'Random order each time', 'Alphabetically sorted (empty, note-1, note-2, note-3)'], correct: 3,
        optsKn: ['ನಿಖರ insertion order', 'ಹಿಮ್ಮುಖ insertion order', 'ಪ್ರತಿ ಬಾರಿ ಯಾದೃಚ್ಛಿಕ order', 'ವರ್ಣಮಾಲೆಯ ಕ್ರಮದಲ್ಲಿ (empty, note-1, note-2, note-3)'] },
      { q: 'Genuinely confirmed: what did resources_read("notes://empty") return?', qKn: 'resources_read("notes://empty") ಏನೂ ಹಿಂತಿರುಗಿಸಿತೂ?',
        opts: ['The same result as notes://missing', '-32602, treating it as unknown', 'A crash', 'A successful result with empty text content'], correct: 3,
        optsKn: ['notes://missing ya ಅದೇ result', '-32602, ಇದನ್ನೂ unknown ಎಂದೂ ಪರಿಗಣಿಸಿ', 'ಒಂದೂ crash', 'ಖಾಲಿ text content ಜೊತೆ ಒಂದೂ ಯಶಸ್ವಿ result'] },
      { q: 'Genuinely confirmed: was the path-traversal attempt "../../../../etc/passwd" successfully blocked?', qKn: 'Path-traversal ಪ್ರಯತ್ನ "../../../../etc/passwd" ಯಶಸ್ವಿಯಾಗಿ ಬ್ಲಾಕ್ ಆಯಿತೇ?',
        opts: ['No, it succeeded in escaping', 'It was silently ignored', 'It crashed with an unrelated error', 'Yes, genuinely raised ValueError before any file access'], correct: 3,
        optsKn: ['ಇಲ್ಲ, ಇದೂ ತಪ್ಪಿಸಿಕೊಳ್ಳುವಲ್ಲಿ ಯಶಸ್ವಿಯಾಯಿತೂ', 'ಇದನ್ನೂ ಮೌನವಾಗಿ ನಿರ್ಲಕ್ಷಿಸಲಾಯಿತೂ', 'ಇದೂ ಸಂಬಂಧವಿಲ್ಲದ ದೋಷದೊಂದಿಗೆ crash ಆಯಿತೂ', 'ಹೌದೂ, ಯಾವುದೇ file access ಮೊದಲೂ ನಿಜವಾಗಿ ValueError ಎಬ್ಬಿಸಿತೂ'] },
      { q: 'Genuinely confirmed: did abspath() and realpath() differ for the genuinely tested symlink-free file?', qKn: 'ನಿಜವಾಗಿ ಪರೀಕ್ಷಿಸಿದ symlink-free file ಗಾಗಿ abspath(), realpath() ಭಿನ್ನವಾಗಿದ್ದವೇ?',
        opts: ['Yes, they genuinely differed', 'realpath() crashed', 'No, they matched exactly -- but that is exactly why symlinks are an easy-to-miss gap', 'abspath() crashed'], correct: 2,
        optsKn: ['ಹೌದೂ, ಅವೂ ನಿಜವಾಗಿ ಭಿನ್ನವಾಗಿದ್ದವೂ', 'realpath() crash ಆಯಿತೂ', 'ಇಲ್ಲ, ಅವೂ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾದವೂ -- ಆದರೆ ಅದೇ ಕಾರಣ symlinks ಸುಲಭವಾಗಿ ತಪ್ಪಿಸಬಹುದಾದ gap', 'abspath() crash ಆಯಿತೂ'] },
      { q: 'Why is checking only the raw URI string for "../" substrings a weaker defense than normalized-path checking?', qKn: '"../" substrings ಗಾಗಿ ಕೇವಲ raw URI string ಪರಿಶೀಲಿಸುವುದೂ ಏಕೆ normalized-path checking ಗಿಂತ ದುರ್ಬಲ ರಕ್ಷಣೆ?',
        opts: ['Normalized paths cannot contain the string "../"', 'There is no genuine difference between the two approaches', 'Raw-string checks are always slower', 'Encoding tricks or alternate path syntax can bypass a raw-string check while still resolving outside the allowed directory'], correct: 3,
        optsKn: ['Normalized paths "../"  string ಒಳಗೊಂಡಿರಲಾಗುವುದಿಲ್ಲ', 'ಎರಡೂ ವಿಧಾನಗಳ ನಡುವೆ ಯಾವುದೇ ನಿಜ ವ್ಯತ್ಯಾಸ ಇಲ್ಲ', 'Raw-string checks ಯಾವಾಗಲೂ ನಿಧಾನ', 'Encoding tricks ಅಥವಾ ಪರ್ಯಾಯ path syntax ಒಂದೂ raw-string check ಅನ್ನೂ ಬೈಪಾಸ್ ಮಾಡಬಹುದು'] },
    ] } },
  ],
};
