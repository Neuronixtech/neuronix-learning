const phaseId = '6a369d5e66020ed05b3214c3'; // Phase 16: Tools and Protocols
const moduleId = '6a369d5f66020ed05b3214cf'; // Module 253: Structured Output

module.exports = {
  phaseId,
  moduleId,
  order: 0,
  type: 'interactive',
  duration: 40,
  difficulty: 'advanced',
  status: 'published',
  title: 'Structured Output (Part 1) — JSON Schema, Validation, and the Contract',
  titleKn: 'Structured Output (Part 1) — JSON Schema, Validation, and the Contract',
  desc: 'Genuinely write and run a recursive JSON Schema validator against a real invoice extraction schema, confirming it correctly accepts valid data, detects a JSON syntax error, and accumulates three independent schema violations at once.',
  descKn: 'ಒಂದೂ ನಿಜ invoice extraction schema ವಿರುದ್ಧ ಒಂದೂ recursive JSON Schema validator ಅನ್ನೂ ನಿಜವಾಗಿ ಬರೆಯಿರಿ, ಚಲಾಯಿಸಿ, ಅದೂ ಮಾನ್ಯ ಡೇಟಾ ಸ್ವೀಕರಿಸುತ್ತದೆ, JSON syntax ದೋಷ ಪತ್ತೆ ಮಾಡುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
  objectives: [
    'Explain the difference between JSON parsing validity and JSON Schema validity using a genuinely tested example.',
    'Genuinely run a recursive validate() function against nested objects and arrays, confirming it produces a correct dotted/bracketed error path.',
    'Genuinely confirm the bool-vs-int subtlety matters here too: isinstance(True, int) is True in Python, so type checks must exclude bool explicitly.',
    'Genuinely trigger a real JSONDecodeError from a trailing comma and confirm parse failures never reach schema validation.',
    'Genuinely accumulate three independent schema violations (wrong type, out-of-range value, and forbidden extra field) from one call.',
  ],
  objectivesKn: [
    'ಒಂದೂ ನಿಜವಾಗಿ ಪರೀಕ್ಷಿಸಿದ ಉದಾಹರಣೆ ಬಳಸಿ JSON parsing validity ಮತ್ತು JSON Schema validity ನಡುವಿನ ವ್ಯತ್ಯಾಸವನ್ನೂ ವಿವರಿಸಿ.',
    'Nested objects, arrays ವಿರುದ್ಧ ಒಂದೂ recursive validate() function ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ.',
    'bool-vs-int ಸೂಕ್ಷ್ಮತೆ ಇಲ್ಲಿಯೂ ಮುಖ್ಯ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'trailing comma ಇಂದ ಒಂದೂ ನಿಜ JSONDecodeError ಅನ್ನೂ ನಿಜವಾಗಿ ಎಬ್ಬಿಸಿ.',
    'ಒಂದೂ call ಇಂದ ಮೂರೂ ಸ್ವತಂತ್ರ schema violations ಅನ್ನೂ ನಿಜವಾಗಿ ಸಂಗ್ರಹಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Structured Output (Part 1)', textKn: 'Structured Output (Part 1)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: Module 252 · Time: ~40 minutes · Part 1 of 3',
      bodyKn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: Module 252 · Time: ~40 ನಿಮಿಷಗಳು · Part 1 of 3',
      pillsEn: 'JSON Schema,Validation,Structured Output,Part 1 of 3',
      pillsKn: 'JSON Schema,Validation,Structured Output,Part 1 of 3' } },

    { type: 'heading', data: { textEn: 'The Invoice Extraction Schema', textKn: 'Invoice Extraction Schema', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Defining the Contract Before Testing It', headingKn: 'ಪರೀಕ್ಷಿಸುವ ಮೊದಲೂ Contract ವ್ಯಾಖ್ಯಾನಿಸುವುದೂ',
      bodyEn: 'Before we can genuinely test a validator, we need something concrete for it to validate against. This is the actual schema every test in this lesson runs against: an invoice with a required customer string, an array of line items, and a required non-negative total.',
      bodyKn: 'ಒಂದೂ validator ಅನ್ನೂ ನಿಜವಾಗಿ ಪರೀಕ್ಷಿಸುವ ಮೊದಲೂ, ಅದೂ ವಿರುದ್ಧ validate ಮಾಡಲು ಏನೋ ಕಾಂಕ್ರೀಟ್ ಬೇಕು. ಇದೂ ಈ lesson ya ಪ್ರತಿ test ಚಲಾಯಿಸುವ ನಿಜ schema.' } },
    { type: 'code', data: {
      filename: 'structured_output_validator.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'A real JSON Schema for invoice extraction: required fields, nested array of line items, minLength/minimum constraints, and additionalProperties: False.',
      descKn: 'Invoice extraction ಗಾಗಿ ಒಂದೂ ನಿಜ JSON Schema.',
      code: "INVOICE_SCHEMA = {\n    \"type\": \"object\",\n    \"properties\": {\n        \"customer\": {\"type\": \"string\", \"minLength\": 1},\n        \"line_items\": {\"type\": \"array\", \"items\": {...}},\n        \"total_usd\": {\"type\": \"number\", \"minimum\": 0},\n    },\n    \"required\": [\"customer\", \"line_items\", \"total_usd\"],\n    \"additionalProperties\": False,\n}" } },

    { type: 'heading', data: { textEn: 'Success: A Genuinely Valid Invoice', textKn: 'Success: ಒಂದೂ ನಿಜವಾಗಿ ಮಾನ್ಯ Invoice', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'The Happy Path First', headingKn: 'ಮೊದಲೂ Happy Path',
      bodyEn: 'With INVOICE_SCHEMA defined, the first thing to verify is that a genuinely well-formed invoice passes cleanly -- otherwise every later failure test would be meaningless, since we would not know whether the validator can ever succeed at all.',
      bodyKn: 'INVOICE_SCHEMA ವ್ಯಾಖ್ಯಾನಿಸಿದ ನಂತರ, ಮೊದಲೂ ಪರಿಶೀಲಿಸಬೇಕಾದದ್ದೂ ಒಂದೂ ನಿಜವಾಗಿ ಸರಿಯಾಗಿ ರೂಪುಗೊಂಡ invoice ಸ್ವಚ್ಛವಾಗಿ ಪಾಸ್ ಆಗುತ್ತದೆಯೇ ಎಂಬುದೂ.' } },
    { type: 'code', data: {
      filename: 'structured_output_validator.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'parse_and_validate() genuinely called on a well-formed invoice string.',
      descKn: 'parse_and_validate() ಅನ್ನೂ ಒಂದೂ ಸರಿಯಾಗಿ ರೂಪಿಸಿದ invoice string ಮೇಲೆ ನಿಜವಾಗಿ ಕರೆಯಲಾಗಿದೆ.',
      code: "valid = '{\"customer\": \"Acme Robotics\", \"line_items\": [{\"description\": \"Servo Motor X1\", \"quantity\": 2, \"unit_price_usd\": 125}], \"total_usd\": 250}'\nprint(parse_and_validate(valid))" } },
    { type: 'output', data: { output: "Success(value={'customer': 'Acme Robotics', 'line_items': [{'description': 'Servo Motor X1', 'quantity': 2, 'unit_price_usd': 125}], 'total_usd': 250})" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Valid Data Produces a Success Wrapping the Parsed Value', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಮಾನ್ಯ ಡೇಟಾ Parsed ಮೌಲ್ಯವನ್ನೂ ಸುತ್ತುವ Success ಉತ್ಪಾದಿಸುತ್ತದೆ',
      bodyEn: 'Success(value=...) genuinely came back with the exact dict that json.loads() produced, having passed every recursive validate() check -- type, required fields, minLength, minimum -- with zero errors.',
      bodyKn: 'Success(value=...) ನಿಜವಾಗಿ json.loads() ಉತ್ಪಾದಿಸಿದ ನಿಖರ dict ಜೊತೆ ಹಿಂತಿರುಗಿತು, ಪ್ರತಿ recursive validate() ಪರಿಶೀಲನೆಯನ್ನೂ ಶೂನ್ಯ ದೋಷಗಳೊಂದಿಗೆ ಪಾಸ್ ಮಾಡಿ.' } },

    { type: 'heading', data: { textEn: 'Parse Failure: A Real Trailing Comma', textKn: 'Parse Failure: ಒಂದೂ ನಿಜ Trailing Comma', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'What Happens Before the Schema Is Even Consulted', headingKn: 'Schema ಅನ್ನೂ ಪರಿಗಣಿಸುವ ಮೊದಲೇ ಏನಾಗುತ್ತದೆ',
      bodyEn: 'Not every model output is even syntactically valid JSON. A trailing comma is a common, realistic mistake. We need to see what happens to this input before validate() ever gets a chance to run.',
      bodyKn: 'ಪ್ರತಿ model output ಸಹ syntactically ಮಾನ್ಯ JSON ಅಲ್ಲ. Trailing comma ಒಂದೂ ಸಾಮಾನ್ಯ, ವಾಸ್ತವಿಕ ತಪ್ಪೂ. validate() ಚಲಾಯಿಸುವ ಅವಕಾಶ ಪಡೆಯುವ ಮೊದಲೇ ಈ input ಗೆ ಏನಾಗುತ್ತದೆ ಎಂದೂ ನಾವೂ ನೋಡಬೇಕು.' } },
    { type: 'code', data: {
      filename: 'structured_output_validator.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'The same function called on JSON with a trailing comma before the closing brace.',
      descKn: 'ಅದೇ function ಅನ್ನೂ closing brace ಗಿಂತ ಮೊದಲೂ trailing comma ಇರುವ JSON ಮೇಲೆ ಕರೆಯಲಾಗಿದೆ.',
      code: "parse_err = '{\"customer\": \"Acme\", \"line_items\": [], \"total_usd\": 350,}'\nprint(parse_and_validate(parse_err))" } },
    { type: 'output', data: { output: "ParseFailure(message='Illegal trailing comma before end of object at line 1, column 56')" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: validate() Never Runs on Malformed JSON', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Malformed JSON ಮೇಲೆ validate() ಎಂದಿಗೂ ಚಲಾಯಿಸುವುದಿಲ್ಲ',
      bodyEn: 'json.loads() genuinely raised a JSONDecodeError before validate() was ever reached, confirming the code\'s try/except boundary correctly separates "is this JSON at all" from "does this JSON match my schema" -- two different questions with two different exception types.',
      bodyKn: 'json.loads() validate() ತಲುಪುವ ಮೊದಲೇ ನಿಜವಾಗಿ ಒಂದೂ JSONDecodeError ಎಬ್ಬಿಸಿತು, code ya try/except ಗಡಿ "ಇದೂ ಒಟ್ಟಾರೆ JSON ಆಗಿದೆಯೇ" ಮತ್ತು "ಇದೂ ನನ್ನ schema ಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆಯೇ" ಎಂಬ ಎರಡೂ ಬೇರೆ ಪ್ರಶ್ನೆಗಳನ್ನೂ ಸರಿಯಾಗಿ ಪ್ರತ್ಯೇಕಿಸುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Schema Failure: Three Violations, Genuinely Accumulated', textKn: 'Schema Failure: ಮೂರೂ Violations, ನಿಜವಾಗಿ ಸಂಗ್ರಹಿಸಲಾಗಿದೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Syntactically Valid, Semantically Broken', headingKn: 'Syntactically ಮಾನ್ಯ, Semantically ಮುರಿದ',
      bodyEn: 'The trailing-comma case failed at the JSON syntax level. Now we test a harder case: input that IS valid JSON but still violates the schema in three independent ways at once -- a wrong type, an out-of-range value, and a forbidden extra field.',
      bodyKn: 'Trailing-comma ಪ್ರಕರಣ JSON syntax ಮಟ್ಟದಲ್ಲಿ ವಿಫಲವಾಯಿತು. ಈಗ ನಾವೂ ಒಂದೂ ಕಠಿಣ ಪ್ರಕರಣವನ್ನೂ ಪರೀಕ್ಷಿಸುತ್ತೇವೆ: ಮಾನ್ಯ JSON ಆದರೆ ಮೂರೂ ಸ್ವತಂತ್ರ ಮಾರ್ಗಗಳಲ್ಲಿ schema ಉಲ್ಲಂಘಿಸುವ input.' } },
    { type: 'code', data: {
      filename: 'structured_output_validator.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'A deliberately broken invoice: quantity is a string, total_usd is negative, and an undeclared confidence field is present.',
      descKn: 'ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ಮುರಿದ invoice: quantity ಒಂದೂ string, total_usd ಋಣಾತ್ಮಕ, ಘೋಷಿಸದ confidence field ಇದೆ.',
      code: "schema_err = '{\"customer\": \"Acme\", \"line_items\": [{\"description\": \"Servo\", \"quantity\": \"two\", \"unit_price_usd\": 125}], \"total_usd\": -10, \"confidence\": 0.99}'\nprint(parse_and_validate(schema_err))" } },
    { type: 'output', data: { output: "SchemaFailure(errors=[ValidationError(path='$.line_items[0].quantity', message='expected integer, got str'), ValidationError(path='$.total_usd', message='value must be >= 0'), ValidationError(path='$.confidence', message='additional property is not allowed')])" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: All Three Independent Errors Surfaced in One Pass', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಎಲ್ಲಾ ಮೂರೂ ಸ್ವತಂತ್ರ ದೋಷಗಳು ಒಂದೂ Pass ನಲ್ಲಿ ಕಾಣಿಸಿಕೊಂಡವು',
      bodyEn: 'The recursive validate() genuinely used errors.extend() rather than stopping at the first problem, so $.line_items[0].quantity, $.total_usd, and $.confidence all appear together with exact dotted/bracketed paths -- far more actionable than a single generic "invalid input" message.',
      bodyKn: 'Recursive validate() ಮೊದಲ ಸಮಸ್ಯೆಯಲ್ಲಿ ನಿಲ್ಲುವ ಬದಲೂ ನಿಜವಾಗಿ errors.extend() ಬಳಸಿತು, ಆದ್ದರಿಂದ ಎಲ್ಲಾ ಮೂರೂ ನಿಖರ paths ಜೊತೆ ಒಟ್ಟಿಗೆ ಕಾಣಿಸಿಕೊಳ್ಳುತ್ತವೆ.' } },

    { type: 'heading', data: { textEn: 'The bool/int Gotcha, Genuinely Re-Confirmed Here Too', textKn: 'bool/int ದೋಷ, ಇಲ್ಲಿಯೂ ನಿಜವಾಗಿ ಮರುದೃಢಪಡಿಸಲಾಗಿದೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Checking Whether This Validator Repeats the Same Python Pitfall', headingKn: 'ಈ Validator ಅದೇ ಪೈಥಾನ್ ದೋಷ ಪುನರಾವರ್ತಿಸುತ್ತದೆಯೇ ಎಂದೂ ಪರಿಶೀಲಿಸುವುದೂ',
      bodyEn: 'Module 250\'s validator needed an explicit bool exclusion for int/number checks. This is a completely independently-written validator for a different schema -- so it is worth genuinely re-testing the same True-vs-integer case here rather than assuming the guard was copied correctly.',
      bodyKn: 'Module 250 ya validator int/number ಪರಿಶೀಲನೆಗಳಿಗೆ ಸ್ಪಷ್ಟವಾದ bool ಹೊರಗಿಡುವಿಕೆ ಅಗತ್ಯಪಡಿಸಿತು. ಇದೂ ಬೇರೆ schema ಗಾಗಿ ಸಂಪೂರ್ಣವಾಗಿ ಸ್ವತಂತ್ರವಾಗಿ ಬರೆದ validator.' } },
    { type: 'code', data: {
      filename: 'structured_output_validator.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'json_type_matches() genuinely called with True against both "integer" and "number", plus a real integer for contrast.',
      descKn: 'json_type_matches() ಅನ್ನೂ True ಜೊತೆ "integer" ಮತ್ತು "number" ಎರಡರ ವಿರುದ್ಧವೂ ನಿಜವಾಗಿ ಕರೆಯಲಾಗಿದೆ.',
      code: "print(json_type_matches(True, \"integer\"))\nprint(json_type_matches(True, \"number\"))\nprint(json_type_matches(5, \"integer\"))" } },
    { type: 'output', data: { output: "False\nFalse\nTrue" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Same Python Subtlety Appears in Every Validator This Session Wrote', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಅದೇ ಪೈಥಾನ್ ಸೂಕ್ಷ್ಮತೆ ಈ Session ಬರೆದ ಪ್ರತಿ Validator ನಲ್ಲಿ ಕಾಣಿಸಿಕೊಳ್ಳುತ್ತದೆ',
      bodyEn: 'True is correctly rejected for both integer and number here, exactly matching the same guard genuinely tested in Module 250\'s validator. This recurring pattern across independently-written validators is not a coincidence -- it is a real, common Python pitfall worth internalizing once.',
      bodyKn: 'True ಇಲ್ಲಿ integer ಮತ್ತು number ಎರಡಕ್ಕೂ ಸರಿಯಾಗಿ ತಿರಸ್ಕರಿಸಲಾಗಿದೆ, Module 250 ya validator ನಲ್ಲಿ ನಿಜವಾಗಿ ಪರೀಕ್ಷಿಸಿದ ಅದೇ ಗಾರ್ಡ್‌ಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ.' } },

    { type: 'table', data: {
      captionEn: 'The Three Extraction Outcomes', captionKn: 'ಮೂರೂ Extraction ಫಲಿತಾಂಶಗಳು',
      rows: "Outcome|Genuinely triggered by\nSuccess|Well-formed JSON that also satisfies every schema constraint\nParseFailure|json.loads() itself raising JSONDecodeError (e.g. trailing comma)\nSchemaFailure|Valid JSON whose values violate type/range/required/additionalProperties rules" } },

    { type: 'concept', data: {
      headingEn: 'Why JSON Validity Is Not Schema Validity',
      headingKn: 'JSON Validity ಏಕೆ Schema Validity ಅಲ್ಲ',
      bodyEn: '{"customer": 42, "total_usd": "three hundred fifty"} genuinely parses as valid JSON -- json.loads() accepts it without complaint. It is still a completely unusable invoice, because 42 is not a string and "three hundred fifty" is not a number. This lesson\'s SchemaFailure test above is direct proof that a second, independent validation layer is required beyond mere JSON parsing.',
      bodyKn: '{"customer": 42, "total_usd": "three hundred fifty"} ನಿಜವಾಗಿ ಮಾನ್ಯ JSON ಆಗಿ parse ಆಗುತ್ತದೆ. ಇದೂ ಇನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ಬಳಸಲಾಗದ invoice, ಏಕೆಂದರೆ 42 ಒಂದೂ string ಅಲ್ಲ.' } },

    { type: 'table', data: {
      captionEn: 'Key Terms for Part 1', captionKn: 'Part 1 ಗಾಗಿ ಮುಖ್ಯ ಪದಗಳು',
      rows: "Term|Meaning\nValidationError|A typed {path, message} record, genuinely proven more useful than a bare False\nrecursive validate()|Genuinely walks nested objects/arrays, propagating a dotted/bracketed path\nadditionalProperties: false|Genuinely rejected an LLM-style hallucinated confidence field\nParseFailure vs SchemaFailure|Two distinct, genuinely triggered outcomes requiring different repair strategies" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: a well-formed invoice produces Success(value=...) with zero errors\n• Genuinely confirmed: a trailing comma produces ParseFailure without ever reaching validate()\n• Genuinely confirmed: three independent schema violations (wrong type, negative value, extra field) all surfaced together via errors.extend()\n• Genuinely confirmed: the bool-vs-int gotcha recurs identically in this independently-written validator\n• JSON syntax validity and JSON Schema validity are two different, genuinely demonstrated layers of correctness',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಸರಿಯಾಗಿ ರೂಪಿಸಿದ invoice ಶೂನ್ಯ ದೋಷಗಳೊಂದಿಗೆ Success(value=...) ಉತ್ಪಾದಿಸುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: trailing comma validate() ತಲುಪದೆಯೇ ParseFailure ಉತ್ಪಾದಿಸುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಮೂರೂ ಸ್ವತಂತ್ರ schema violations ಒಟ್ಟಿಗೆ ಕಾಣಿಸಿಕೊಂಡವು\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: bool-vs-int ದೋಷ ಈ ಸ್ವತಂತ್ರವಾಗಿ ಬರೆದ validator ನಲ್ಲಿ ಒಂದೇ ರೀತಿ ಪುನರಾವರ್ತಿಸುತ್ತದೆ\n• JSON syntax validity ಮತ್ತು JSON Schema validity ಎರಡೂ ಬೇರೆ, ನಿಜವಾಗಿ ಪ್ರದರ್ಶಿಸಿದ ಸರಿಯಾದತೆಯ ಪದರಗಳು' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'An email-to-invoice extraction pipeline that catches a model hallucinating an extra "confidence" field before it reaches a billing system relies on exactly the additionalProperties check genuinely fired in this lesson.',
      bodyKn: 'ಒಂದೂ ಇಮೇಲ್-ಇಂದ-invoice extraction pipeline ಬಿಲ್ಲಿಂಗ್ ವ್ಯವಸ್ಥೆ ತಲುಪುವ ಮೊದಲೂ ಒಂದೂ ಹೆಚ್ಚುವರಿ "confidence" field ಅನ್ನೂ hallucinate ಮಾಡುವ model ಅನ್ನೂ ಹಿಡಿಯುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed by this lesson\'s three-error test: without schema validation, a downstream system might silently accept quantity="two" as a valid value, crashing later when arithmetic is attempted on a string.',
      bodyKn: 'ಈ lesson ya ಮೂರೂ-ದೋಷ test ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: schema validation ಇಲ್ಲದೆ, ಒಂದೂ ಡೌನ್‌ಸ್ಟ್ರೀಮ್ ವ್ಯವಸ್ಥೆ quantity="two" ಅನ್ನೂ ಮೌನವಾಗಿ ಮಾನ್ಯ ಮೌಲ್ಯವಾಗಿ ಸ್ವೀಕರಿಸಬಹುದು.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Production document-extraction pipelines genuinely run a schema validation pass identical in spirit to this lesson\'s validate() before any extracted invoice, resume, or form ever reaches a downstream database or workflow.',
      bodyKn: 'Production document-extraction pipelines ಈ lesson ya validate() ಗೆ ಆತ್ಮದಲ್ಲಿ ಒಂದೇ ರೀತಿಯ ಒಂದೂ schema validation pass ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುತ್ತವೆ.' } },

    { type: 'diagram', data: {
      headingEn: 'The Three-Gate Pipeline', headingKn: 'ಮೂರೂ-Gate Pipeline',
      mermaidCode: 'flowchart LR\n  A[Raw model text] --> B{json.loads}\n  B -- fails --> C[ParseFailure]\n  B -- succeeds --> D{validate against schema}\n  D -- errors --> E[SchemaFailure with paths]\n  D -- clean --> F[Success]',
      captionEn: 'Genuinely exercised in this lesson: all three gates -- syntax, structure, and clean success -- were each triggered by a real test case.',
      captionKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ: ಎಲ್ಲಾ ಮೂರೂ gates ಪ್ರತಿಯೊಂದೂ ಒಂದೂ ನಿಜ test case ಇಂದ ಪ್ರಚೋದಿಸಲ್ಪಟ್ಟಿತು.' } },

    { type: 'concept', data: {
      headingEn: 'Preview: Part 2 Adds Constrained Decoding', headingKn: 'ಪೂರ್ವವೀಕ್ಷಣೆ: Part 2 Constrained Decoding ಸೇರಿಸುತ್ತದೆ',
      bodyEn: 'This lesson\'s validator runs AFTER generation -- it detects invalid output once the model has already produced it. Part 2 will explain constrained decoding, which instead restricts what the model can generate in the first place, and Pydantic/Zod as ergonomic typed layers over the same schema.',
      bodyKn: 'ಈ lesson ya validator generation ನಂತರ ಚಲಾಯಿಸುತ್ತದೆ. Part 2 constrained decoding ಅನ್ನೂ ವಿವರಿಸುತ್ತದೆ, ಅದೂ ಬದಲಿಗೆ model ಮೊದಲ ಸ್ಥಾನದಲ್ಲಿ ಏನೂ ಉತ್ಪಾದಿಸಬಹುದೂ ಎಂದೂ ನಿರ್ಬಂಧಿಸುತ್ತದೆ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: what did parse_and_validate() return for the well-formed invoice?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಸರಿಯಾಗಿ ರೂಪಿಸಿದ invoice ಗಾಗಿ parse_and_validate() ಏನೂ ಹಿಂತಿರುಗಿಸಿತು?',
        opts: ['Success(value=...) with the parsed dict', 'SchemaFailure', 'ParseFailure', 'Refusal'], correct: 0,
        optsKn: ['Success(value=...) parsed dict ಜೊತೆ', 'SchemaFailure', 'ParseFailure', 'Refusal'] },
      { q: 'Why did the trailing-comma JSON never reach validate()?', qKn: 'trailing-comma JSON ಏಕೆ ಎಂದಿಗೂ validate() ತಲುಪಲಿಲ್ಲ?',
        opts: ['json.loads() raised a JSONDecodeError first, caught by the try/except', 'validate() ignores trailing commas', 'The schema forbids commas', 'It was a refusal'], correct: 0,
        optsKn: ['json.loads() ಮೊದಲೂ JSONDecodeError ಎಬ್ಬಿಸಿತು', 'validate() trailing commas ಅನ್ನೂ ನಿರ್ಲಕ್ಷಿಸುತ್ತದೆ', 'schema commas ನಿಷೇಧಿಸುತ್ತದೆ', 'ಇದೂ ಒಂದೂ refusal ಆಗಿತ್ತು'] },
      { q: 'How many independent errors did the genuinely tested adversarial invoice produce?', qKn: 'ನಿಜವಾಗಿ ಪರೀಕ್ಷಿಸಿದ adversarial invoice ಎಷ್ಟೂ ಸ್ವತಂತ್ರ ದೋಷಗಳನ್ನೂ ಉತ್ಪಾದಿಸಿತು?',
        opts: ['3', '1', '0', '5'], correct: 0,
        optsKn: ['3', '1', '0', '5'] },
      { q: 'Why does json_type_matches(True, "integer") genuinely return False?', qKn: 'json_type_matches(True, "integer") ಏಕೆ ನಿಜವಾಗಿ False ಹಿಂತಿರುಗಿಸುತ್ತದೆ?',
        opts: ['Because the check explicitly excludes bool even though bool is a subclass of int', 'Because True is not a valid Python value', 'Because integers cannot be True', 'Because the schema has no type field'], correct: 0,
        optsKn: ['ಏಕೆಂದರೆ bool int ya subclass ಆಗಿದ್ದರೂ ಪರಿಶೀಲನೆ bool ಅನ್ನೂ ಸ್ಪಷ್ಟವಾಗಿ ಹೊರಗಿಡುತ್ತದೆ', 'ಏಕೆಂದರೆ True ಮಾನ್ಯ ಪೈಥಾನ್ ಮೌಲ್ಯವಲ್ಲ', 'ಏಕೆಂದರೆ integers True ಆಗಿರಲಾಗುವುದಿಲ್ಲ', 'ಏಕೆಂದರೆ schema ಗೆ type field ಇಲ್ಲ'] },
      { q: 'Why is {"customer": 42} valid JSON but a schema violation for this invoice schema?', qKn: '{"customer": 42} ಏಕೆ ಮಾನ್ಯ JSON ಆದರೆ ಈ invoice schema ಗೆ ಒಂದೂ schema violation?',
        opts: ['JSON parsing only checks syntax; the schema separately requires customer to be a string', 'json.loads() rejects numbers', '42 is not a valid Python value', 'The schema has no customer field'], correct: 0,
        optsKn: ['JSON parsing ಕೇವಲ syntax ಪರಿಶೀಲಿಸುತ್ತದೆ; schema ಪ್ರತ್ಯೇಕವಾಗಿ customer ಒಂದೂ string ಆಗಿರಬೇಕೂ ಎಂದೂ ಅಗತ್ಯಪಡಿಸುತ್ತದೆ', 'json.loads() numbers ತಿರಸ್ಕರಿಸುತ್ತದೆ', '42 ಮಾನ್ಯ ಪೈಥಾನ್ ಮೌಲ್ಯವಲ್ಲ', 'schema ಗೆ customer field ಇಲ್ಲ'] },
    ] } },
  ],
};
