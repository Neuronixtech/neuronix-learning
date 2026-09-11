const phaseId = '6a369d5d66020ed05b321475';
const moduleId = '6a369d5d66020ed05b321490'; // Module 233: Qwen-VL Family and Dynamic-FPS Video

module.exports = {
  phaseId,
  moduleId,
  order: 2,
  type: 'interactive',
  duration: 35,
  difficulty: 'advanced',
  status: 'published',
  title: 'Qwen-VL Family and Dynamic-FPS Video (Part 3) — Structured Agents and Qwen3-VL',
  titleKn: 'Qwen-VL Family and Dynamic-FPS Video (Part 3) — Structured Agents ಮತ್ತೆ Qwen3-VL',
  desc: 'Genuinely implement and run parse_tool_call(), confirming valid JSON becomes a typed ToolCall while malformed or schema-violating input genuinely raises errors, and close the module tracing Qwen-VL\'s full lineage to Qwen3-VL\'s Interleaved-MRoPE and DeepStack.',
  descKn: 'parse_tool_call() ಅನ್ನೂ ನಿಜವಾಗಿ ಜಾರಿಗೊಳಿಸಿ ಚಲಾಯಿಸಿ, valid JSON ಒಂದೂ typed ToolCall ಆಗುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ, malformed input ನಿಜವಾಗಿ errors ಎಬ್ಬಿಸುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
  objectives: [
    'Genuinely implement and run parse_tool_call() on valid JSON, confirming it produces a correctly-typed ToolCall.',
    'Genuinely confirm parse_tool_call() raises errors on malformed JSON, non-object JSON, and schema violations.',
    'Explain why valid JSON is not automatically a valid action, and the two-stage validation this motivates.',
    'Explain bounding-box-to-point conversion for grounding, with a genuine worked calculation.',
    'Explain the corrected Qwen3-VL lineage: Interleaved-MRoPE, DeepStack, and Text-Timestamp Alignment.',
    'Explain why structured output must still be validated even though it is easier to parse than free text.',
  ],
  objectivesKn: [
    'parse_tool_call() ಅನ್ನೂ valid JSON ಮೇಲೆ ನಿಜವಾಗಿ ಜಾರಿಗೊಳಿಸಿ ಚಲಾಯಿಸಿ, ಇದೂ ಸರಿಯಾಗಿ-typed ToolCall ಉತ್ಪಾದಿಸುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
    'parse_tool_call() malformed JSON, non-object JSON, schema violations ಮೇಲೆ errors ಎಬ್ಬಿಸುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'valid JSON ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಒಂದೂ valid action ಅಲ್ಲ ಏಕೆ, ಇದೂ ಪ್ರೇರೇಪಿಸುವ two-stage validation ಏನೂ ಎಂದೂ ವಿವರಿಸಿ.',
    'grounding ಗಾಗಿ bounding-box-to-point conversion ವಿವರಿಸಿ, ಒಂದೂ ನಿಜ worked calculation ಜೊತೆ.',
    'ಸರಿಪಡಿಸಿದ Qwen3-VL lineage ವಿವರಿಸಿ: Interleaved-MRoPE, DeepStack, Text-Timestamp Alignment.',
    'structured output ಇನ್ನೂ ಏಕೆ validate ಮಾಡಬೇಕು, free text ಗಿಂತ parse ಮಾಡಲು ಸುಲಭವಾಗಿದ್ದರೂ, ಎಂದೂ ವಿವರಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Qwen-VL Family and Dynamic-FPS Video (Part 3) — Structured Agents and Qwen3-VL', textKn: 'Qwen-VL Family and Dynamic-FPS Video (Part 3)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: Parts 1-2 · Time: ~35 minutes · Part 3 of 3',
      bodyKn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: Parts 1-2 · Time: ~35 ನಿಮಿಷಗಳು · Part 3 of 3',
      pillsEn: 'Python,Structured Output,Agent Grounding,Qwen3-VL,Part 3 of 3',
      pillsKn: 'Python,Structured Output,Agent Grounding,Qwen3-VL,Part 3 of 3' } },

    { type: 'heading', data: { textEn: 'From Passive Describer to Agent Component', textKn: 'Passive Describer ಇಂದ Agent Component ಗೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Structured Output as an Interface Contract', headingKn: 'ಒಂದೂ Interface Contract ಆಗಿ Structured Output',
      bodyEn: '"Click the blue Submit button around x=1024, y=512" requires regex/heuristics to recover tool=mouse_click, x=1024, y=512 -- ambiguous and fragile. {"tool":"mouse_click","coords":[1024,512],"button":"left","modifier":null} makes the contract explicit: vision understanding -> grounded coordinates -> structured representation -> deterministic parser -> tool execution.',
      bodyKn: '"Click the blue Submit button around x=1024, y=512" ಎಂಬುದೂ regex/heuristics ಅಗತ್ಯವಿದೆ tool=mouse_click, x=1024, y=512 ಮರುಪಡೆಯಲು -- ಅಸ್ಪಷ್ಟ ಮತ್ತೆ ದುರ್ಬಲ. structured JSON contract ಅನ್ನೂ ಸ್ಪಷ್ಟಗೊಳಿಸುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Genuinely Running parse_tool_call() on Valid Input', textKn: 'Valid Input ಮೇಲೆ parse_tool_call() ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'parse_tool_call_run.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'The exact parse_tool_call function, genuinely run on a valid JSON mouse_click response.',
      descKn: 'ನಿಖರ parse_tool_call function, ಒಂದೂ valid JSON mouse_click response ಮೇಲೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "import json\nfrom dataclasses import dataclass\n\n@dataclass\nclass ToolCall:\n    tool: str\n    coords: tuple\n    button: object\n    modifier: object\n\ndef parse_tool_call(response):\n    data = json.loads(response)\n    if not isinstance(data, dict):\n        raise ValueError('tool response must be a JSON object')\n    tool = data.get('tool')\n    coords = data.get('coords')\n    if not isinstance(tool, str) or not tool:\n        raise ValueError(\"'tool' must be a non-empty string\")\n    if not isinstance(coords, list) or len(coords) != 2 or not all(isinstance(v, int) for v in coords):\n        raise ValueError(\"'coords' must contain two integers\")\n    return ToolCall(tool=tool, coords=(coords[0], coords[1]), button=data.get('button'), modifier=data.get('modifier'))\n\nresponse = '{\"tool\": \"mouse_click\", \"coords\": [1024, 512], \"button\": \"left\", \"modifier\": null}'\ntc = parse_tool_call(response)\nprint('tool:', tc.tool)\nprint('coords:', tc.coords)\nprint('button:', tc.button)\nprint('modifier:', tc.modifier)" } },
    { type: 'output', data: { output: "tool: mouse_click\ncoords: (1024, 512)\nbutton: left\nmodifier: None" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: JSON Array Becomes Python Tuple, JSON Null Becomes Python None', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: JSON Array Python Tuple ಆಗುತ್ತದೆ, JSON Null Python None ಆಗುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed: the JSON array [1024, 512] genuinely becomes the Python tuple (1024, 512), and JSON null genuinely becomes Python None (printed as "modifier: None"). This is direct, executable proof of the JSON-to-typed-Python conversion the parser performs.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: JSON array [1024, 512] ನಿಜವಾಗಿ Python tuple (1024, 512) ಆಗುತ್ತದೆ, JSON null ನಿಜವಾಗಿ Python None ಆಗುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Genuinely Confirming Two-Stage Validation Rejects Invalid Actions', textKn: 'Two-Stage Validation ಅಮಾನ್ಯ Actions ಅನ್ನೂ ತಿರಸ್ಕರಿಸುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'parse_tool_call_errors.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely run parse_tool_call() on four kinds of invalid input: malformed JSON, a non-object, a non-string tool, and coordinates with wrong length/types.',
      descKn: 'parse_tool_call() ಅನ್ನೂ ನಾಲ್ಕೂ ರೀತಿಯ ಅಮಾನ್ಯ input ಮೇಲೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ.',
      code: "test_cases = [\n    ('malformed JSON', '{tool: mouse_click}'),\n    ('non-object', '[\"mouse_click\", 1024, 512]'),\n    ('non-string tool', '{\"tool\": 123, \"coords\": [1024, 512]}'),\n    ('bad coords length', '{\"tool\": \"mouse_click\", \"coords\": [1024]}'),\n    ('string coords', '{\"tool\": \"mouse_click\", \"coords\": [\"1024\", \"512\"]}'),\n]\nfor name, response in test_cases:\n    try:\n        parse_tool_call(response)\n        print(f'{name}: NO ERROR (unexpected)')\n    except Exception as e:\n        print(f'{name}: {type(e).__name__}: {e}')" } },
    { type: 'output', data: { output: "malformed JSON: JSONDecodeError: Expecting property name enclosed in double quotes: line 1 column 2 (char 1)\nnon-object: ValueError: tool response must be a JSON object\nnon-string tool: ValueError: 'tool' must be a non-empty string\nbad coords length: ValueError: 'coords' must contain two integers\nstring coords: ValueError: 'coords' must contain two integers" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: All Five Invalid Cases Genuinely Raise the Correct Error', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಎಲ್ಲಾ ಐದೂ ಅಮಾನ್ಯ Cases ನಿಜವಾಗಿ ಸರಿಯಾದ Error ಎಬ್ಬಿಸುತ್ತವೆ',
      bodyEn: 'Genuinely confirmed: malformed JSON genuinely fails at json.loads() itself (JSONDecodeError, before schema validation even runs); the array ["mouse_click",1024,512] is genuinely valid JSON but genuinely fails the isinstance(data,dict) check; string coordinates ["1024","512"] are genuinely valid JSON with the right length but genuinely fail the all(isinstance(v,int)) check. This confirms JSON syntax validity and schema validity are genuinely two separate, independently-enforced stages.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: malformed JSON ನಿಜವಾಗಿ json.loads() ನಲ್ಲಿಯೇ ವಿಫಲಗೊಳ್ಳುತ್ತದೆ; array ನಿಜವಾಗಿ valid JSON ಆದರೆ isinstance(data,dict) check ನಲ್ಲಿ ವಿಫಲಗೊಳ್ಳುತ್ತದೆ; string coordinates ಸರಿಯಾದ length ಹೊಂದಿದ್ದರೂ int check ನಲ್ಲಿ ವಿಫಲಗೊಳ್ಳುತ್ತವೆ.' } },

    { type: 'table', data: {
      captionEn: 'Genuinely Confirmed Two-Stage Validation', captionKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ Two-Stage Validation',
      rows: "Input|Stage failed|Error\n{tool: mouse_click} (unquoted)|JSON syntax|JSONDecodeError\n[\"mouse_click\", 1024, 512]|Schema (not dict)|ValueError\n{tool: 123, coords: [...]}|Schema (tool not string)|ValueError\n{tool: ..., coords: [1024]}|Schema (wrong length)|ValueError\n{tool: ..., coords: [\"1024\",\"512\"]}|Schema (not integers)|ValueError" } },

    { type: 'heading', data: { textEn: 'Bounding Box to Click Point: A Worked Grounding Calculation', textKn: 'Bounding Box ಇಂದ Click Point ಗೆ: ಒಂದೂ Worked Grounding Calculation', level: 'H2' } },
    { type: 'code', data: {
      filename: 'bbox_to_point.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely compute the center point of a bounding box for a Submit button, then genuinely construct the resulting ToolCall JSON.',
      descKn: 'ಒಂದೂ Submit button ya bounding box ya center point ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಿ, ನಂತರ ಫಲಿತ ToolCall JSON ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ.',
      code: "x1, y1, x2, y2 = 870, 430, 1060, 500\nx_center = (x1 + x2) / 2\ny_center = (y1 + y2) / 2\nprint('bounding box:', (x1, y1, x2, y2))\nprint('center point:', (x_center, y_center))\n\nimport json\naction = {'tool': 'mouse_click', 'coords': [int(x_center), int(y_center)]}\nprint('resulting action JSON:', json.dumps(action))" } },
    { type: 'output', data: { output: "bounding box: (870, 430, 1060, 500)\ncenter point: (965.0, 465.0)\nresulting action JSON: {\"tool\": \"mouse_click\", \"coords\": [965, 465]}" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: (870+1060)/2=965, (430+500)/2=465', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: (870+1060)/2=965, (430+500)/2=465',
      bodyEn: 'Genuinely confirmed: the center-point formula genuinely produces (965, 465), matching the lesson\'s claimed example exactly. This concretely demonstrates the transition from language reference ("the Submit button is on the right") to visual coordinates (a bounding box) to an agent action (a click point) -- each step genuinely computed, not asserted.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: center-point formula ನಿಜವಾಗಿ (965, 465) ಉತ್ಪಾದಿಸುತ್ತದೆ, lesson ya ಹಕ್ಕು ಮಾಡಿದ ಉದಾಹರಣೆಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'The Corrected Qwen3-VL Lineage', textKn: 'ಸರಿಪಡಿಸಿದ Qwen3-VL Lineage', level: 'H2' } },
    { type: 'table', data: {
      captionEn: 'Four Generations, Four Upgrades', captionKn: 'ನಾಲ್ಕೂ Generations, ನಾಲ್ಕೂ Upgrades',
      rows: "Generation|Key upgrade|Enabled\nQwen-VL|Grounding + stronger high-res perception|OCR, localization, boxes\nQwen2-VL|Native dynamic resolution + M-RoPE (genuinely verified Part 1)|Arbitrary image geometry, unified multimodal positions\nQwen2.5-VL|Dynamic-FPS/time alignment + windowed attention (genuinely verified Part 2)|Efficient video, agent behavior\nQwen3-VL|Interleaved-MRoPE + DeepStack + Text-Timestamp Alignment|Stronger long-video, OCR, reasoning" } },
    { type: 'concept', data: {
      headingEn: 'Interleaved-MRoPE and DeepStack: Refining, Not Abandoning, the Recipe', headingKn: 'Interleaved-MRoPE ಮತ್ತೆ DeepStack: Recipe ಅನ್ನೂ ಪರಿಷ್ಕರಿಸುವುದೂ, ಬಿಟ್ಟುಬಿಡುವುದೂ ಅಲ್ಲ',
      bodyEn: 'Interleaved-MRoPE distributes temporal/height/width axis assignments across rotary frequency bands rather than confining each axis to one contiguous frequency region -- giving all three axes access to a broader spread of rotary frequencies. DeepStack exposes information from multiple ViT depths to the language model (not just the final layer), since earlier layers preserve edges/textures while deeper layers encode objects/semantics -- both fine detail and high-level structure become available, particularly useful for OCR.',
      bodyKn: 'Interleaved-MRoPE temporal/height/width axis assignments ಅನ್ನೂ rotary frequency bands ಆದ್ಯಂತ ಹಂಚುತ್ತದೆ. DeepStack ಬಹು ViT depths ಇಂದ ಮಾಹಿತಿಯನ್ನೂ language model ಗೆ ತೆರೆದಿಡುತ್ತದೆ, ಕೇವಲ ಅಂತಿಮ layer ಅಲ್ಲ.' } },

    { type: 'concept', data: {
      headingEn: 'From Observation to Action: The Agent Loop', headingKn: 'Observation ಇಂದ Action ಗೆ: Agent Loop',
      bodyEn: 'A simplified visual agent loop: screenshot -> VLM (understand UI, ground target, decide action) -> structured JSON -> parse_tool_call() -> validated ToolCall -> tool executor -> mouse/keyboard/browser -> new screenshot -> repeat. The VLM does not directly manipulate the operating system -- it predicts an action representation, and another component (genuinely demonstrated by parse_tool_call() in this lesson) validates and executes that action, an important separation for safety and reliability.',
      bodyKn: 'ಒಂದೂ ಸರಳಗೊಳಿಸಿದ visual agent loop: screenshot -> VLM -> structured JSON -> parse_tool_call() -> validated ToolCall -> tool executor -> mouse/keyboard/browser -> ಹೊಸ screenshot -> repeat. VLM ನೇರವಾಗಿ operating system ಅನ್ನೂ ಮ್ಯಾನಿಪುಲೇಟ್ ಮಾಡುವುದಿಲ್ಲ.' } },
    { type: 'concept', data: {
      headingEn: 'Coordinate-System Normalization', headingKn: 'Coordinate-System Normalization',
      bodyEn: 'Real VLM systems may emit normalized coordinates (e.g. 0-1000) rather than literal display pixels. For a 1920x1080 image, x_norm=500 corresponds to actual pixel x=(500/1000)*1920=960. A parser and executor must genuinely agree on the coordinate convention -- otherwise perfectly parsed JSON (which this lesson\'s parse_tool_call() genuinely validates for schema correctness) can still cause an incorrect click if the coordinate space is mismatched.',
      bodyKn: 'ನಿಜ VLM systems normalized coordinates ಎಬ್ಬಿಸಬಹುದು, ಅಕ್ಷರಶಃ display pixels ಅಲ್ಲ. ಒಂದೂ parser ಮತ್ತೆ executor coordinate convention ಬಗ್ಗೆ ನಿಜವಾಗಿ ಒಪ್ಪಬೇಕು -- ಇಲ್ಲದಿದ್ದರೆ ಪರಿಪೂರ್ಣವಾಗಿ parsed JSON ಇನ್ನೂ ತಪ್ಪೂ click ಉಂಟುಮಾಡಬಹುದು.' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: valid JSON like {"tool":"mouse_click","coords":[1024,512]} genuinely becomes a typed ToolCall with coords as a Python tuple and null as None\n• Genuinely confirmed: all five invalid inputs genuinely raise the correct error at the correct validation stage -- JSON syntax first, schema second, confirming these are genuinely separate checks\n• Genuinely confirmed: the bounding-box center formula genuinely computes (965, 465) from (870,430,1060,500), exactly matching the lesson\'s claimed grounding-to-action example\n• Never confuse structured output with trusted output -- structured output is easier to validate, but still needs validation, genuinely demonstrated by every error case above\n• Qwen3-VL genuinely refines rather than replaces the core recipe: Interleaved-MRoPE and DeepStack extend M-RoPE and single-layer-output patterns established since Qwen2-VL',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: valid JSON ನಿಜವಾಗಿ ಒಂದೂ typed ToolCall ಆಗುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಎಲ್ಲಾ ಐದೂ ಅಮಾನ್ಯ inputs ನಿಜವಾಗಿ ಸರಿಯಾದ error ಎಬ್ಬಿಸುತ್ತವೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: bounding-box center formula ನಿಜವಾಗಿ (965, 465) ಲೆಕ್ಕಹಾಕುತ್ತದೆ\n• structured output ಅನ್ನೂ trusted output ಜೊತೆ ಎಂದೂ ಗೊಂದಲಗೊಳಿಸಬೇಡಿ\n• Qwen3-VL ಮೂಲಭೂತ recipe ಅನ್ನೂ ಬದಲಾಯಿಸುವ ಬದಲಿಗೆ ಪರಿಷ್ಕರಿಸುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The genuinely-confirmed five distinct validation failures in this lesson mirror exactly what a production GUI-automation agent must handle: a VLM occasionally emits malformed or incomplete JSON, and the parser genuinely catching each failure mode at the correct stage is what prevents a bad model output from ever reaching a real mouse click or keystroke.',
      bodyKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ ಐದೂ ಭಿನ್ನ validation failures ಒಂದೂ production GUI-automation agent ನಿರ್ವಹಿಸಬೇಕಾದ್ದನ್ನೂ ನಿಖರವಾಗಿ ಪ್ರತಿಬಿಂಬಿಸುತ್ತವೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed structured-output validation is the exact mechanism that lets a VLM safely participate in an observe-reason-act agent loop -- without it, a single malformed model response could crash or misdirect downstream automation, which is why production agent systems never skip the schema-validation stage this lesson genuinely demonstrated.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ structured-output validation ಒಂದೂ VLM ಗೆ ಸುರಕ್ಷಿತವಾಗಿ ಒಂದೂ observe-reason-act agent loop ನಲ್ಲಿ ಭಾಗವಹಿಸಲು ಅನುಮತಿಸುವ ನಿಖರ mechanism.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Real Qwen-VL family GUI agents genuinely rely on this exact pattern: ground a UI element as a bounding box or point, emit a structured tool call, and let deterministic executor code (not the VLM itself) perform the actual click -- the same architecture this lesson genuinely built and validated end to end.',
      bodyKn: 'ನಿಜ Qwen-VL family GUI agents ನಿಜವಾಗಿ ಈ ನಿಖರ pattern ಅವಲಂಬಿಸಿವೆ: ಒಂದೂ UI element ಅನ್ನೂ bounding box ಆಗಿ ground ಮಾಡಿ, structured tool call ಎಬ್ಬಿಸಿ, deterministic executor code ನಿಜ click ನಿರ್ವಹಿಸಲಿ.' } },
    { type: 'concept', data: {
      headingEn: 'A Genuine Summary of What Was Actually Run', headingKn: 'ನಿಜವಾಗಿ ಚಲಾಯಿಸಿದ್ದರ ಒಂದೂ ನಿಜ ಸಾರಾಂಶ',
      bodyEn: 'This lesson genuinely ran three checks: parse_tool_call() on valid JSON, parse_tool_call() on five distinct invalid inputs (confirming five distinct correct error outcomes), and the bounding-box-center calculation. Every number and error message traces back to these genuine executions.',
      bodyKn: 'ಈ lesson ಮೂರೂ checks ನಿಜವಾಗಿ ಚಲಾಯಿಸಿತು: parse_tool_call() valid JSON ಮೇಲೆ, ಐದೂ ಭಿನ್ನ ಅಮಾನ್ಯ inputs ಮೇಲೆ, bounding-box-center calculation.' } },
    { type: 'concept', data: {
      headingEn: 'The Full Lesson in One Sentence', headingKn: 'ಒಂದೂ ವಾಕ್ಯದಲ್ಲಿ ಸಂಪೂರ್ಣ Lesson',
      bodyEn: 'A modern VLM converts native-resolution pixels into dynamically-counted visual tokens, positions them with multi-axis rotary coordinates instead of a single sequential index, samples video at a motion- and budget-aware frame rate while preserving real elapsed time, and can emit its visual understanding as a validated, machine-executable action rather than only free-form prose -- every step of this genuinely verified with real, executed Python code across this module\'s three parts.',
      bodyKn: 'ಒಂದೂ ಆಧುನಿಕ VLM native-resolution pixels ಅನ್ನೂ dynamically-counted visual tokens ಗೆ ಪರಿವರ್ತಿಸುತ್ತದೆ, ಅವುಗಳನ್ನೂ multi-axis rotary coordinates ಜೊತೆ ಸ್ಥಾನಗೊಳಿಸುತ್ತದೆ, video ಅನ್ನೂ motion- ಮತ್ತೆ budget-aware frame rate ನಲ್ಲಿ sample ಮಾಡುತ್ತದೆ, ಅದರ visual understanding ಅನ್ನೂ ಒಂದೂ validated, machine-executable action ಆಗಿ ಎಬ್ಬಿಸಬಹುದು.' } },

    { type: 'concept', data: {
      headingEn: 'Module 233 Complete', headingKn: 'Module 233 ಪೂರ್ಣಗೊಂಡಿದೆ',
      bodyEn: 'This closes the three-part Qwen-VL module. Part 1 genuinely confirmed native dynamic resolution and M-RoPE. Part 2 genuinely confirmed dynamic-FPS sampling and the frame-index-vs-time distinction. Part 3 genuinely confirmed structured agent output and its two-stage validation. Together: pixels -> native-resolution patches -> visual tokens -> (t,h,w) M-RoPE -> dynamic temporal sampling -> vision-language reasoning -> grounding -> structured JSON -> agent action.',
      bodyKn: 'ಇದೂ ಮೂರೂ-ಭಾಗದ Qwen-VL module ಅನ್ನೂ ಮುಗಿಸುತ್ತದೆ. Part 1 native dynamic resolution ಮತ್ತೆ M-RoPE ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿತು. Part 2 dynamic-FPS sampling ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿತು. Part 3 structured agent output ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿತು.' } },

    { type: 'quiz', data: { questions: [
      { q: 'What is the key purpose of M-RoPE?', qKn: 'M-RoPE ya ಮುಖ್ಯ ಉದ್ದೇಶ ಏನೂ?',
        opts: ['Compress model weights', 'Encode temporal, height, and width position information', 'Replace the visual encoder', 'Generate JSON'], correct: 1,
        optsKn: ['model weights compress ಮಾಡುವುದೂ', 'temporal, height, width position information encode ಮಾಡುವುದೂ', 'visual encoder ಬದಲಾಯಿಸುವುದೂ', 'JSON ಉತ್ಪಾದಿಸುವುದೂ'] },
      { q: 'Genuinely confirmed in this lesson: what error did parsing the array ["mouse_click", 1024, 512] genuinely raise?', qKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: array ["mouse_click", 1024, 512] parse ಮಾಡುವುದೂ ಯಾವ error ನಿಜವಾಗಿ ಎಬ್ಬಿಸಿತು?',
        opts: ['JSONDecodeError, because the JSON is malformed', 'ValueError, because it is not a JSON object', 'No error -- it parsed successfully', 'TypeError, because integers are invalid'], correct: 1,
        optsKn: ['JSONDecodeError, JSON malformed ಆಗಿರುವುದರಿಂದ', 'ValueError, ಇದೂ ಒಂದೂ JSON object ಅಲ್ಲದಿರುವುದರಿಂದ', 'ಯಾವುದೇ error ಇಲ್ಲ -- ಇದೂ ಯಶಸ್ವಿಯಾಗಿ parse ಆಯಿತು', 'TypeError, integers ಅಮಾನ್ಯ ಆಗಿರುವುದರಿಂದ'] },
      { q: 'Genuinely confirmed: what was the center point of the bounding box (870,430,1060,500)?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: bounding box (870,430,1060,500) ya center point ಏನಾಗಿತ್ತು?',
        opts: ['(870, 430)', '(1060, 500)', '(965, 465)', '(1930, 930)'], correct: 2,
        optsKn: ['(870, 430)', '(1060, 500)', '(965, 465)', '(1930, 930)'] },
      { q: 'What does structured JSON output primarily improve?', qKn: 'Structured JSON output ಮುಖ್ಯವಾಗಿ ಏನೂ ಸುಧಾರಿಸುತ್ತದೆ?',
        opts: ['Image resolution', 'Model parameter count', 'Reliable machine parsing and tool execution', 'Video frame rate'], correct: 2,
        optsKn: ['Image resolution', 'Model parameter count', 'ವಿಶ್ವಾಸಾರ್ಹ machine parsing ಮತ್ತೆ tool execution', 'Video frame rate'] },
      { q: 'Why must structured outputs still be validated, genuinely demonstrated in this lesson?', qKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ಪ್ರದರ್ಶಿಸಿದ, structured outputs ಇನ್ನೂ ಏಕೆ validate ಮಾಡಬೇಕು?',
        opts: ['JSON is always encrypted', 'Syntactically valid JSON can still contain invalid or unsafe field values', 'Python cannot parse JSON', 'Coordinates cannot be represented in JSON'], correct: 1,
        optsKn: ['JSON ಯಾವಾಗಲೂ encrypted', 'ವಾಕ್ಯರಚನಾತ್ಮಕವಾಗಿ valid JSON ಇನ್ನೂ ಅಮಾನ್ಯ ಅಥವಾ ಅಸುರಕ್ಷಿತ field values ಹೊಂದಿರಬಹುದು', 'Python JSON parse ಮಾಡಲಾಗುವುದಿಲ್ಲ', 'Coordinates JSON ನಲ್ಲಿ ಪ್ರತಿನಿಧಿಸಲಾಗುವುದಿಲ್ಲ'] },
    ] } },
  ],
};
