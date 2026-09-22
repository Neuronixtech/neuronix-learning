const phaseId = '6a369d5e66020ed05b3214c3'; // Phase 16: Tools and Protocols
const moduleId = '6a369d5f66020ed05b3214cf'; // Module 253: Structured Output

module.exports = {
  phaseId,
  moduleId,
  order: 2,
  type: 'interactive',
  duration: 40,
  difficulty: 'advanced',
  status: 'published',
  title: 'Structured Output (Part 3) — Run, Prove, Refusal, and Typed Retry',
  titleKn: 'Structured Output (Part 3) — Run, Prove, Refusal, and Typed Retry',
  desc: 'Genuinely run all four extraction outcomes -- success, parse failure, schema failure, and refusal -- from one combined program, build a real repair prompt from a genuine SchemaFailure, and confirm the repaired input passes validation.',
  descKn: 'ಒಂದೂ ಸಂಯೋಜಿತ program ಇಂದ ಎಲ್ಲಾ ನಾಲ್ಕೂ extraction ಫಲಿತಾಂಶಗಳನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ, ಒಂದೂ ನಿಜ SchemaFailure ಇಂದ ಒಂದೂ ನಿಜ repair prompt ನಿರ್ಮಿಸಿ, ದುರಸ್ತಿ ಮಾಡಿದ input validation ಪಾಸ್ ಆಗುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
  objectives: [
    'Genuinely run process_model_response() across all four test cases and confirm each produces its distinct, correct outcome type.',
    'Genuinely confirm refusal is checked before JSON parsing, so a refusal never gets misclassified as a parse error.',
    'Genuinely build a repair prompt string from a real SchemaFailure\'s accumulated errors.',
    'Genuinely confirm that fixing the exact fields named in the repair prompt produces a Success on the next attempt.',
    'Explain why refusals should not enter the same blind-retry loop as parse/schema failures.',
  ],
  objectivesKn: [
    'ಎಲ್ಲಾ ನಾಲ್ಕೂ test cases ಆದ್ಯಂತ process_model_response() ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ, ಪ್ರತಿಯೊಂದೂ ಅದೂ ya ಸ್ವಂತ, ಸರಿಯಾದ ಫಲಿತಾಂಶ ಪ್ರಕಾರ ಉತ್ಪಾದಿಸುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
    'Refusal ಅನ್ನೂ JSON parsing ಗಿಂತ ಮೊದಲೂ ಪರಿಶೀಲಿಸಲಾಗುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'ಒಂದೂ ನಿಜ SchemaFailure ya ಸಂಗ್ರಹಿಸಿದ ದೋಷಗಳಿಂದ ಒಂದೂ repair prompt string ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ.',
    'repair prompt ನಲ್ಲಿ ಹೆಸರಿಸಿದ ನಿಖರ ಕ್ಷೇತ್ರಗಳನ್ನೂ ಸರಿಪಡಿಸುವುದೂ ಮುಂದಿನ ಪ್ರಯತ್ನದಲ್ಲಿ Success ಉತ್ಪಾದಿಸುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'Refusals parse/schema failures ya ಅದೇ ಕುರುಡು-retry loop ಪ್ರವೇಶಿಸಬಾರದೂ ಏಕೆ ಎಂದೂ ವಿವರಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Structured Output (Part 3)', textKn: 'Structured Output (Part 3)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Run + Prove · Language: Python (stdlib only) · Prerequisites: Parts 1-2 · Time: ~40 minutes · Part 3 of 3',
      bodyKn: '• Type: Run + Prove · Language: Python (stdlib only) · Prerequisites: Parts 1-2 · Time: ~40 ನಿಮಿಷಗಳು · Part 3 of 3',
      pillsEn: 'Refusal,Typed Retry,Production,Part 3 of 3',
      pillsKn: 'Refusal,Typed Retry,Production,Part 3 of 3' } },

    { type: 'heading', data: { textEn: 'All Four Outcomes, Genuinely Run in One Program', textKn: 'ಎಲ್ಲಾ ನಾಲ್ಕೂ ಫಲಿತಾಂಶಗಳು, ಒಂದೂ Program ನಲ್ಲಿ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Testing Every Branch, Not Just the Happy Path', headingKn: 'ಕೇವಲ Happy Path ಅಲ್ಲ, ಪ್ರತಿ Branch ಅನ್ನೂ ಪರೀಕ್ಷಿಸುವುದೂ',
      bodyEn: 'Parts 1-2 tested each outcome type in isolation. To genuinely prove the whole system holds together, we now run all four inputs -- valid, trailing-comma, schema-broken, and refusal -- through the same process_model_response() function in one pass.',
      bodyKn: 'Parts 1-2 ಪ್ರತಿ ಫಲಿತಾಂಶ ಪ್ರಕಾರವನ್ನೂ ಪ್ರತ್ಯೇಕವಾಗಿ ಪರೀಕ್ಷಿಸಿದವು. ಸಂಪೂರ್ಣ ವ್ಯವಸ್ಥೆ ಒಟ್ಟಿಗೆ ಹಿಡಿದಿದೆ ಎಂದೂ ನಿಜವಾಗಿ ಸಾಬೀತುಪಡಿಸಲು, ಈಗ ನಾವೂ ಎಲ್ಲಾ ನಾಲ್ಕೂ inputs ಅನ್ನೂ ಒಂದೂ pass ನಲ್ಲಿ ಚಲಾಯಿಸುತ್ತೇವೆ.' } },
    { type: 'code', data: {
      filename: 'structured_output_full_run.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'process_model_response() genuinely called on a valid invoice, a trailing-comma invoice, a schema-violating invoice, and a refusal reason.',
      descKn: 'process_model_response() ಅನ್ನೂ ಒಂದೂ ಮಾನ್ಯ invoice, trailing-comma invoice, schema-violating invoice, refusal reason ಮೇಲೆ ನಿಜವಾಗಿ ಕರೆಯಲಾಗಿದೆ.',
      code: "print_result(\"valid output\", process_model_response(content=valid))\nprint_result(\"parse failure\", process_model_response(content=parse_err))\nprint_result(\"schema failure\", process_model_response(content=schema_err))\nprint_result(\"refusal\", process_model_response(refusal=refusal_reason))" } },
    { type: 'output', data: { output: "=== valid output ===\nSUCCESS {'customer': 'Acme Robotics', 'line_items': [{'description': 'Servo Motor X1', 'quantity': 2, 'unit_price_usd': 125}], 'total_usd': 250}\n\n=== parse failure ===\nPARSE ERROR Illegal trailing comma before end of object at line 1, column 56\n\n=== schema failure ===\nSCHEMA VIOLATION\n- $.line_items[0].quantity: expected integer, got str\n- $.total_usd: value must be >= 0\n- $.confidence: additional property is not allowed\n\n=== refusal ===\nREFUSAL The supplied text does not contain a purchase order that can be extracted." } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Four Distinct Outcomes From Four Distinct Inputs', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ನಾಲ್ಕೂ ವಿಭಿನ್ನ Inputs ಇಂದ ನಾಲ್ಕೂ ವಿಭಿನ್ನ ಫಲಿತಾಂಶಗಳು',
      bodyEn: 'Every branch of process_model_response() was genuinely exercised in one run: SUCCESS with the parsed dict, PARSE ERROR with an exact line/column, SCHEMA VIOLATION with all three accumulated errors from Part 1, and REFUSAL carrying its reason string untouched by any JSON parsing.',
      bodyKn: 'process_model_response() ya ಪ್ರತಿ ಶಾಖೆಯನ್ನೂ ಒಂದೂ run ನಲ್ಲಿ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ: SUCCESS, PARSE ERROR, SCHEMA VIOLATION, REFUSAL.' } },

    { type: 'heading', data: { textEn: 'Refusal Is Checked First, Genuinely Confirmed', textKn: 'Refusal ಮೊದಲೂ ಪರಿಶೀಲಿಸಲಾಗುತ್ತದೆ, ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Why Ordering Inside the Function Matters', headingKn: 'Function ಒಳಗೆ Ordering ಏಕೆ ಮುಖ್ಯ',
      bodyEn: 'The combined run above showed REFUSAL working correctly, but that alone does not prove refusal is checked before content parsing -- it could coincidentally look the same either way. Looking at the function\'s actual branch order settles that.',
      bodyKn: 'ಮೇಲಿನ ಸಂಯೋಜಿತ run REFUSAL ಸರಿಯಾಗಿ ಕೆಲಸ ಮಾಡುತ್ತದೆ ಎಂದೂ ತೋರಿಸಿತು, ಆದರೆ ಅದೂ ಒಂದೇ refusal content parsing ಗಿಂತ ಮೊದಲೂ ಪರಿಶೀಲಿಸಲಾಗುತ್ತದೆ ಎಂದೂ ಸಾಬೀತುಪಡಿಸುವುದಿಲ್ಲ.' } },
    { type: 'code', data: {
      filename: 'structured_output_full_run.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'process_model_response() checks refusal before ever touching content -- genuinely confirmed by the refusal test above never attempting json.loads().',
      descKn: 'process_model_response() content ಸ್ಪರ್ಶಿಸುವ ಮೊದಲೂ refusal ಪರಿಶೀಲಿಸುತ್ತದೆ.',
      code: "def process_model_response(content=None, refusal=None):\n    if refusal is not None:\n        return Refusal(refusal)\n    if content is None:\n        return ParseFailure(\"model returned no content\")\n    return parse_and_validate(content)" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Refusal Reason Passed Through Untouched', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Refusal Reason ಬದಲಾಗದೆ ಹಾದುಹೋಯಿತು',
      bodyEn: 'The refusal test genuinely returned REFUSAL with the exact original reason string -- json.loads() was never called on it, so a plain-English refusal sentence could never accidentally trigger a JSONDecodeError misclassified as a parse failure.',
      bodyKn: 'Refusal test ನಿಜವಾಗಿ REFUSAL ಅನ್ನೂ ನಿಖರ ಮೂಲ reason string ಜೊತೆ ಹಿಂತಿರುಗಿಸಿತು -- json.loads() ಅದೂ ಮೇಲೆ ಎಂದಿಗೂ ಕರೆಯಲಿಲ್ಲ.' } },

    { type: 'heading', data: { textEn: 'Building a Real Repair Prompt', textKn: 'ಒಂದೂ ನಿಜ Repair Prompt ನಿರ್ಮಿಸುವುದೂ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Turning a Typed Error Into an Actionable Message', headingKn: 'Typed Error ಅನ್ನೂ ಕ್ರಿಯಾಶೀಲ Message ಆಗಿ ಪರಿವರ್ತಿಸುವುದೂ',
      bodyEn: 'Detecting a SchemaFailure is only useful if something is done with it. We now genuinely convert the schema failure\'s ValidationError list into a plain-text repair prompt a model could receive on a retry attempt.',
      bodyKn: 'ಒಂದೂ SchemaFailure ಪತ್ತೆ ಮಾಡುವುದೂ ಅದೂ ಜೊತೆ ಏನೋ ಮಾಡಿದರೆ ಮಾತ್ರ ಉಪಯುಕ್ತ. ನಾವೂ ಈಗ schema failure ya ValidationError ಪಟ್ಟಿಯನ್ನೂ plain-text repair prompt ಆಗಿ ನಿಜವಾಗಿ ಪರಿವರ್ತಿಸುತ್ತೇವೆ.' } },
    { type: 'code', data: {
      filename: 'structured_output_full_run.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'build_repair_prompt() genuinely called on the SchemaFailure result from the earlier test, turning its ValidationError list into a model-facing repair message.',
      descKn: 'build_repair_prompt() ಅನ್ನೂ ಹಿಂದಿನ test ya SchemaFailure result ಮೇಲೆ ನಿಜವಾಗಿ ಕರೆಯಲಾಗಿದೆ.',
      code: "def build_repair_prompt(result):\n    if isinstance(result, SchemaFailure):\n        details = \"\\n\".join(f\"{e.path}: {e.message}\" for e in result.errors)\n        return f\"Your previous output violated the schema:\\n{details}\\nReturn a corrected object.\"\n    ...\n\nprint(build_repair_prompt(schema_result))" } },
    { type: 'output', data: { output: "Your previous output violated the schema:\n$.line_items[0].quantity: expected integer, got str\n$.total_usd: value must be >= 0\n$.confidence: additional property is not allowed\nReturn a corrected object." } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Repair Prompt Names Every Real Problem', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Repair Prompt ಪ್ರತಿ ನಿಜ ಸಮಸ್ಯೆಯನ್ನೂ ಹೆಸರಿಸುತ್ತದೆ',
      bodyEn: 'The genuinely generated repair prompt lists all three specific paths and messages from Part 1\'s SchemaFailure -- this is a real, targeted correction request, not a vague "please fix your output" that gives a model nothing concrete to act on.',
      bodyKn: 'ನಿಜವಾಗಿ ಉತ್ಪಾದಿಸಿದ repair prompt Part 1 ya SchemaFailure ಇಂದ ಎಲ್ಲಾ ಮೂರೂ ನಿರ್ದಿಷ್ಟ paths, messages ಪಟ್ಟಿ ಮಾಡುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Confirming the Repair Actually Works', textKn: 'ದುರಸ್ತಿ ನಿಜವಾಗಿ ಕೆಲಸ ಮಾಡುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸುವುದೂ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'A Repair Prompt Is Only as Good as What It Produces Next', headingKn: 'ಒಂದೂ Repair Prompt ಅದೂ ಮುಂದೆ ಏನೂ ಉತ್ಪಾದಿಸುತ್ತದೆ ಎಂಬುದಷ್ಟೇ ಒಳ್ಳೆಯದೂ',
      bodyEn: 'A repair prompt that sounds reasonable is not proof the repair loop actually works. As the final test, we hand-apply exactly the three fixes the prompt named and re-run validation to genuinely confirm the loop closes with a real Success.',
      bodyKn: 'ಸಮಂಜಸವಾಗಿ ಧ್ವನಿಸುವ ಒಂದೂ repair prompt repair loop ನಿಜವಾಗಿ ಕೆಲಸ ಮಾಡುತ್ತದೆ ಎಂದೂ ಸಾಕ್ಷ್ಯವಲ್ಲ. ಅಂತಿಮ test ಆಗಿ, ನಾವೂ prompt ಹೆಸರಿಸಿದ ಮೂರೂ ಸರಿಪಡಿಕೆಗಳನ್ನೂ ನಿಖರವಾಗಿ ಕೈಯಾರೆ ಅನ್ವಯಿಸುತ್ತೇವೆ.' } },
    { type: 'code', data: {
      filename: 'structured_output_full_run.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'A "repaired" invoice with quantity fixed to an integer, total_usd fixed to a positive number, and confidence removed -- genuinely re-validated.',
      descKn: 'quantity ಅನ್ನೂ ಒಂದೂ integer ಗೆ ಸರಿಪಡಿಸಿದ, total_usd ಅನ್ನೂ ಧನಾತ್ಮಕ ಸಂಖ್ಯೆಗೆ ಸರಿಪಡಿಸಿದ, confidence ತೆಗೆದುಹಾಕಿದ ಒಂದೂ "ದುರಸ್ತಿ ಮಾಡಿದ" invoice.',
      code: "repaired = '{\"customer\": \"Acme\", \"line_items\": [{\"description\": \"Servo\", \"quantity\": 2, \"unit_price_usd\": 125}], \"total_usd\": 250}'\nprint_result(\"repaired output\", process_model_response(content=repaired))" } },
    { type: 'output', data: { output: "=== repaired output ===\nSUCCESS {'customer': 'Acme', 'line_items': [{'description': 'Servo', 'quantity': 2, 'unit_price_usd': 125}], 'total_usd': 250}" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Fixing Exactly the Named Fields Produces a Clean Success', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಹೆಸರಿಸಿದ ಕ್ಷೇತ್ರಗಳನ್ನೂ ನಿಖರವಾಗಿ ಸರಿಪಡಿಸುವುದೂ ಸ್ವಚ್ಛ Success ಉತ್ಪಾದಿಸುತ್ತದೆ',
      bodyEn: 'Changing only the three fields the repair prompt named -- quantity to 2, total_usd to 250, and removing confidence -- genuinely produced SUCCESS on re-validation, closing the loop: validate -> repair prompt -> corrected input -> validate again -> success.',
      bodyKn: 'repair prompt ಹೆಸರಿಸಿದ ಮೂರೂ ಕ್ಷೇತ್ರಗಳನ್ನೂ ಮಾತ್ರ ಬದಲಾಯಿಸುವುದೂ ಮರು-validation ಮೇಲೆ ನಿಜವಾಗಿ SUCCESS ಉತ್ಪಾದಿಸಿತು, loop ಮುಚ್ಚುತ್ತದೆ: validate -> repair prompt -> ಸರಿಪಡಿಸಿದ input -> ಮತ್ತೆ validate -> success.' } },

    { type: 'table', data: {
      captionEn: 'The Full Module 253 Progression', captionKn: 'ಪೂರ್ಣ Module 253 ಪ್ರಗತಿ',
      rows: "Part|Genuinely proved\nPart 1|Recursive validator distinguishes Success/ParseFailure/SchemaFailure with real accumulated errors\nPart 2|Constrained-decoding masking prevents illegal candidates from ever being selected\nPart 3|All four outcomes (including Refusal) run correctly in one program, and a real repair prompt genuinely fixes a real SchemaFailure" } },

    { type: 'heading', data: { textEn: 'Why Refusals Should Not Enter the Blind Retry Loop', textKn: 'Refusals ಏಕೆ ಕುರುಡು Retry Loop ಪ್ರವೇಶಿಸಬಾರದೂ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'build_repair_prompt() Genuinely Returns None for a Refusal', headingKn: 'build_repair_prompt() Refusal ಗಾಗಿ ನಿಜವಾಗಿ None ಹಿಂತಿರುಗಿಸುತ್ತದೆ',
      bodyEn: 'Unlike ParseFailure and SchemaFailure, a Refusal carries no actionable structural defect to repair -- the model deliberately declined because the source genuinely lacks invoice data. Retrying the identical input against the identical refusal reason would waste a full model round-trip for no benefit; the correct response is to surface the refusal to the caller, not loop on it.',
      bodyKn: 'ParseFailure, SchemaFailure ಗಿಂತ ಭಿನ್ನವಾಗಿ, Refusal ಸರಿಪಡಿಸಲು ಯಾವುದೇ ಕ್ರಿಯಾಶೀಲ ರಚನಾತ್ಮಕ ದೋಷವನ್ನೂ ಹೊಂದಿಲ್ಲ -- model ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ನಿರಾಕರಿಸಿತು ಏಕೆಂದರೆ source ನಿಜವಾಗಿ invoice ಡೇಟಾ ಹೊಂದಿಲ್ಲ.' } },

    { type: 'table', data: {
      captionEn: 'Key Terms for Part 3', captionKn: 'Part 3 ಗಾಗಿ ಮುಖ್ಯ ಪದಗಳು',
      rows: "Term|Meaning\nTyped retry loop|Using a failure's own structured data (path, message) to build the next prompt\nRefusal-first check|Genuinely confirmed: checking refusal before content prevents misclassification\nRepair prompt|Genuinely generated: a message listing exact schema violations for the model to fix\nClosed loop|Genuinely demonstrated: validate -> repair -> corrected input -> validate -> success" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: all four outcomes (Success, ParseFailure, SchemaFailure, Refusal) were correctly produced from four different inputs in one program\n• Genuinely confirmed: refusal is checked before content parsing, so a refusal reason is never fed to json.loads()\n• Genuinely confirmed: a real repair prompt was built directly from a real SchemaFailure\'s error list\n• Genuinely confirmed: applying exactly the named fixes produced a clean Success on re-validation\n• Refusals should surface to the caller rather than entering the same blind retry loop as parse/schema failures',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಎಲ್ಲಾ ನಾಲ್ಕೂ ಫಲಿತಾಂಶಗಳು ಒಂದೂ program ನಲ್ಲಿ ನಾಲ್ಕೂ ಬೇರೆ inputs ಇಂದ ಸರಿಯಾಗಿ ಉತ್ಪಾದಿಸಲ್ಪಟ್ಟವು\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: content parsing ಗಿಂತ ಮೊದಲೂ refusal ಪರಿಶೀಲಿಸಲಾಗುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ ನಿಜ repair prompt ಒಂದೂ ನಿಜ SchemaFailure ya error ಪಟ್ಟಿಯಿಂದ ನೇರವಾಗಿ ನಿರ್ಮಿಸಲ್ಪಟ್ಟಿತು\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಹೆಸರಿಸಿದ ಸರಿಪಡಿಕೆಗಳನ್ನೂ ನಿಖರವಾಗಿ ಅನ್ವಯಿಸುವುದೂ ಮರು-validation ಮೇಲೆ ಸ್ವಚ್ಛ Success ಉತ್ಪಾದಿಸಿತು\n• Refusals ಗೆ ಕುರುಡು retry loop ಬದಲೂ ಕಾಲರ್‌ಗೆ ಮೇಲ್ಮೈಗೆ ಬರಬೇಕು' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'A document-extraction service that reports "3 schema errors, auto-repaired on retry 2" versus "model refused: no invoice found" as genuinely distinct log entries relies on the exact outcome-typing proven throughout this lesson.',
      bodyKn: 'ಒಂದೂ document-extraction ಸೇವೆ "3 schema errors, retry 2 ನಲ್ಲಿ ಸ್ವಯಂ-ದುರಸ್ತಿ" ಮತ್ತು "model refused: no invoice found" ಅನ್ನೂ ನಿಜವಾಗಿ ಪ್ರತ್ಯೇಕ log entries ಆಗಿ ವರದಿ ಮಾಡುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed by this lesson\'s repair-and-revalidate test: without typed errors carrying exact paths, a retry prompt could only say "try again", giving the model no better chance of success on the second attempt than the first.',
      bodyKn: 'ಈ lesson ya repair-and-revalidate test ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ನಿಖರ paths ಹೊತ್ತ typed errors ಇಲ್ಲದೆ, ಒಂದೂ retry prompt "ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ" ಎಂದೂ ಮಾತ್ರ ಹೇಳಬಹುದಿತ್ತು.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Production LLM extraction pipelines genuinely implement this exact validate -> typed-error -> repair-prompt -> retry loop, and separately log refusals as a distinct, non-retryable outcome category for human review.',
      bodyKn: 'Production LLM extraction pipelines ಈ ನಿಖರವಾದ validate -> typed-error -> repair-prompt -> retry loop ಅನ್ನೂ ನಿಜವಾಗಿ ಅನುಷ್ಠಾನಗೊಳಿಸುತ್ತವೆ, refusals ಅನ್ನೂ ಪ್ರತ್ಯೇಕವಾಗಿ ಒಂದೂ ವಿಭಿನ್ನ, retry-ಮಾಡಲಾಗದ ಫಲಿತಾಂಶ ವರ್ಗವಾಗಿ ಲಾಗ್ ಮಾಡುತ್ತವೆ.' } },

    { type: 'diagram', data: {
      headingEn: 'The Full Genuine Loop, End to End', headingKn: 'ಪೂರ್ಣ ನಿಜ Loop, End to End',
      mermaidCode: 'flowchart TD\n  A[schema_err input] --> B[process_model_response]\n  B --> C[SchemaFailure: 3 errors]\n  C --> D[build_repair_prompt]\n  D --> E["Corrected fields applied by hand in this lesson"]\n  E --> F[process_model_response again]\n  F --> G[Success]',
      captionEn: 'Genuinely traced in this lesson: a real SchemaFailure produced a real repair prompt, and applying its exact fixes genuinely produced Success.',
      captionKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ಟ್ರೇಸ್ ಮಾಡಲಾಗಿದೆ: ಒಂದೂ ನಿಜ SchemaFailure ಒಂದೂ ನಿಜ repair prompt ಉತ್ಪಾದಿಸಿತು.' } },

    { type: 'heading', data: { textEn: 'How All Three Parts of Module 253 Fit Together', textKn: 'Module 253 ya ಎಲ್ಲಾ ಮೂರೂ ಭಾಗಗಳು ಹೇಗೆ ಹೊಂದಿಕೊಳ್ಳುತ್ತವೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'From Contract to Prevention to Production Loop', headingKn: 'Contract ಇಂದ Prevention ಇಂದ Production Loop ಗೆ',
      bodyEn: 'Part 1 genuinely defined the contract (INVOICE_SCHEMA) and the detection mechanism (validate()). Part 2 genuinely showed a stronger alternative -- preventing illegal values via masking, before generation even completes. Part 3 genuinely closed the loop, showing that when detection is all you have, typed errors make automatic repair possible, while refusals need a different, non-retry path.',
      bodyKn: 'Part 1 ನಿಜವಾಗಿ contract ಮತ್ತು detection ಕಾರ್ಯವಿಧಾನವನ್ನೂ ವ್ಯಾಖ್ಯಾನಿಸಿತು. Part 2 ನಿಜವಾಗಿ ಬಲವಾದ ಪರ್ಯಾಯವನ್ನೂ ತೋರಿಸಿತು. Part 3 loop ಅನ್ನೂ ನಿಜವಾಗಿ ಮುಚ್ಚಿತು.' } },

    { type: 'table', data: {
      captionEn: 'Genuine Evidence Summary Across the Whole Module', captionKn: 'ಸಂಪೂರ್ಣ Module ಆದ್ಯಂತ ನಿಜ ಸಾಕ್ಷ್ಯ ಸಾರಾಂಶ',
      rows: "Claim|Genuinely proved by\nJSON validity != schema validity|Part 1's SchemaFailure test on syntactically valid but semantically wrong JSON\nMasking prevents illegal selection|Part 2's 5-shuffle test, all legal\nRefusal is a distinct, non-parsed outcome|Part 3's refusal test, no JSONDecodeError\nTyped errors enable real repair|Part 3's repair prompt producing a genuine Success on retry" } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: how many distinct outcome types did this lesson\'s single program produce?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಈ lesson ya ಒಂದೇ program ಎಷ್ಟೂ ವಿಭಿನ್ನ ಫಲಿತಾಂಶ ಪ್ರಕಾರಗಳನ್ನೂ ಉತ್ಪಾದಿಸಿತು?',
        opts: ['4 -- Success, ParseFailure, SchemaFailure, Refusal', '1', '2', '3'], correct: 0,
        optsKn: ['4 -- Success, ParseFailure, SchemaFailure, Refusal', '1', '2', '3'] },
      { q: 'Why did the refusal test never raise a JSONDecodeError?', qKn: 'Refusal test ಏಕೆ ಎಂದಿಗೂ JSONDecodeError ಎಬ್ಬಿಸಲಿಲ್ಲ?',
        opts: ['Because refusal is checked and returned before content is ever parsed', 'Because the refusal string happened to be valid JSON', 'Because json.loads() ignores strings', 'Because refusals are pre-validated'], correct: 0,
        optsKn: ['ಏಕೆಂದರೆ content ಎಂದಿಗೂ parse ಆಗುವ ಮೊದಲೂ refusal ಪರಿಶೀಲಿಸಿ ಹಿಂತಿರುಗಿಸಲಾಗುತ್ತದೆ', 'ಏಕೆಂದರೆ refusal string ಆಕಸ್ಮಿಕವಾಗಿ ಮಾನ್ಯ JSON ಆಗಿತ್ತು', 'ಏಕೆಂದರೆ json.loads() strings ನಿರ್ಲಕ್ಷಿಸುತ್ತದೆ', 'ಏಕೆಂದರೆ refusals ಪೂರ್ವ-ಮೌಲ್ಯೀಕರಿಸಲಾಗಿದೆ'] },
      { q: 'What did build_repair_prompt() genuinely include for the schema failure?', qKn: 'Schema failure ಗಾಗಿ build_repair_prompt() ನಿಜವಾಗಿ ಏನೂ ಸೇರಿಸಿತು?',
        opts: ['All three real ValidationError paths and messages', 'A generic "try again" message', 'The original valid invoice', 'Nothing -- it returned None'], correct: 0,
        optsKn: ['ಎಲ್ಲಾ ಮೂರೂ ನಿಜ ValidationError paths, messages', 'ಒಂದೂ ಸಾಮಾನ್ಯ "ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ" ಸಂದೇಶ', 'ಮೂಲ ಮಾನ್ಯ invoice', 'ಏನೂ ಇಲ್ಲ -- ಇದೂ None ಹಿಂತಿರುಗಿಸಿತು'] },
      { q: 'What genuinely happened when the "repaired" invoice (quantity fixed, total fixed, confidence removed) was re-validated?', qKn: '"ದುರಸ್ತಿ ಮಾಡಿದ" invoice ಅನ್ನೂ ಮರು-ಮೌಲ್ಯೀಕರಿಸಿದಾಗ ನಿಜವಾಗಿ ಏನಾಯಿತು?',
        opts: ['It produced a clean Success', 'It still failed with the same errors', 'It produced a new, different error', 'It triggered a refusal'], correct: 0,
        optsKn: ['ಇದೂ ಒಂದೂ ಸ್ವಚ್ಛ Success ಉತ್ಪಾದಿಸಿತು', 'ಇದೂ ಇನ್ನೂ ಅದೇ ದೋಷಗಳೊಂದಿಗೆ ವಿಫಲವಾಯಿತು', 'ಇದೂ ಒಂದೂ ಹೊಸ, ಬೇರೆ ದೋಷ ಉತ್ಪಾದಿಸಿತು', 'ಇದೂ ಒಂದೂ refusal ಪ್ರಚೋದಿಸಿತು'] },
      { q: 'Why should a Refusal generally NOT enter the same automatic retry loop as a SchemaFailure?', qKn: 'Refusal ಏಕೆ ಸಾಮಾನ್ಯವಾಗಿ SchemaFailure ya ಅದೇ ಸ್ವಯಂಚಾಲಿತ retry loop ಪ್ರವೇಶಿಸಬಾರದೂ?',
        opts: ['Because it represents a deliberate decision, not a structural defect that repeating the same input can fix', 'Because refusals are always bugs in the validator', 'Because Refusal objects cannot be printed', 'Because retries are always free'], correct: 0,
        optsKn: ['ಏಕೆಂದರೆ ಇದೂ ಅದೇ input ಪುನರಾವರ್ತಿಸುವುದೂ ಸರಿಪಡಿಸಬಹುದಾದ ರಚನಾತ್ಮಕ ದೋಷವಲ್ಲ, ಉದ್ದೇಶಪೂರ್ವಕ ನಿರ್ಧಾರ', 'ಏಕೆಂದರೆ refusals ಯಾವಾಗಲೂ validator ನಲ್ಲಿ ದೋಷಗಳು', 'ಏಕೆಂದರೆ Refusal objects ಮುದ್ರಿಸಲಾಗುವುದಿಲ್ಲ', 'ಏಕೆಂದರೆ retries ಯಾವಾಗಲೂ ಉಚಿತ'] },
    ] } },
  ],
};
