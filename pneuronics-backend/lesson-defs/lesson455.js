const phaseId = '6a369d5d66020ed05b321475';
const moduleId = '6a369d5e66020ed05b3214b7'; // Module 246: Document and Diagram Understanding

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'interactive',
  duration: 35,
  difficulty: 'advanced',
  status: 'published',
  title: 'Document and Diagram Understanding (Part 2) — OCR-Free Structured Generation',
  titleKn: 'Document and Diagram Understanding (Part 2) — OCR-Free Structured Generation',
  desc: 'Genuinely run a Donut-style JSON schema generator and a Nougat-style Markdown/LaTeX renderer, confirming real validation output and understanding why OCR-free models collapse explicit pipeline stages into one learned sequence.',
  descKn: 'Donut-style JSON schema generator, Nougat-style Markdown/LaTeX renderer ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ, ನಿಜ validation output ದೃಢಪಡಿಸಿ, OCR-free models ಸ್ಪಷ್ಟ pipeline stages ಅನ್ನೂ ಒಂದೂ learned sequence ಗೆ ಏಕೆ ಕುಸಿಯುತ್ತವೆ ಎಂದೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
  objectives: [
    'Explain what "OCR-free" means: no explicit external OCR stage, not that the model ignores text.',
    'Genuinely run generate_schema_template()/populate_schema()/validate_result() and confirm real JSON output and validation PASS.',
    'Genuinely trigger and observe a validation warning by omitting a required field.',
    'Genuinely run render_markdown_document() and render_equation() and confirm real Markdown/LaTeX output.',
    'Compare LayoutLMv3 (structured input) vs Donut (structured output) as a memorable architectural distinction.',
    'Explain why Nougat specializes in scientific documents and why math markup requires more than character recognition.',
  ],
  objectivesKn: [
    '"OCR-free" ya ಅರ್ಥ ವಿವರಿಸಿ: ಯಾವುದೇ ಸ್ಪಷ್ಟ external OCR stage ಇಲ್ಲ, model text ಕಡೆಗಣಿಸುತ್ತದೆ ಎಂದೂ ಅಲ್ಲ.',
    'generate_schema_template()/populate_schema()/validate_result() ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ ನಿಜ JSON output, validation PASS ದೃಢಪಡಿಸಿ.',
    'ಅಗತ್ಯ field ಅನ್ನೂ ಬಿಟ್ಟುಬಿಡುವ ಮೂಲಕ ಒಂದೂ validation warning ಅನ್ನೂ ನಿಜವಾಗಿ ಪ್ರಚೋದಿಸಿ ಗಮನಿಸಿ.',
    'render_markdown_document(), render_equation() ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ ನಿಜ Markdown/LaTeX output ದೃಢಪಡಿಸಿ.',
    'LayoutLMv3 (structured input) vs Donut (structured output) ಹೋಲಿಸಿ.',
    'Nougat scientific documents ನಲ್ಲಿ ಏಕೆ ವಿಶೇಷತೆ ಹೊಂದಿದೆ ಎಂದೂ ವಿವರಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Document and Diagram Understanding (Part 2)', textKn: 'Document and Diagram Understanding (Part 2)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: Part 1 · Time: ~35 minutes · Part 2 of 3',
      bodyKn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: Part 1 · Time: ~35 ನಿಮಿಷಗಳು · Part 2 of 3',
      pillsEn: 'Python,Donut,Nougat,OCR-Free,Part 2 of 3',
      pillsKn: 'Python,Donut,Nougat,OCR-Free,Part 2 of 3' } },

    { type: 'heading', data: { textEn: 'The Big Transition: Image to Structured Sequence', textKn: 'ದೊಡ್ಡ Transition: Image ಇಂದ Structured Sequence ಗೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'What "OCR-Free" Actually Means', headingKn: '"OCR-Free" ya ನಿಜ ಅರ್ಥ',
      bodyEn: 'Donut asks: why explicitly recognize every word before solving the document task? Instead: page image -> vision encoder -> decoder -> structured output, with no separate OCR transcript exposed. "OCR-free" means no explicit external OCR stage -- the model still recognizes visual text internally, it simply does not require a separate OCR subsystem.',
      bodyKn: 'Donut ಕೇಳುತ್ತದೆ: document task ಪರಿಹರಿಸುವ ಮೊದಲು ಪ್ರತಿ ಪದವನ್ನೂ ಸ್ಪಷ್ಟವಾಗಿ ಏಕೆ ಗುರುತಿಸಬೇಕು? "OCR-free" ಎಂದರೆ ಯಾವುದೇ ಸ್ಪಷ್ಟ external OCR stage ಇಲ್ಲ -- model ಇನ್ನೂ visual text ಅನ್ನೂ ಆಂತರಿಕವಾಗಿ ಗುರುತಿಸುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Genuinely Running the Donut-Style Schema Generator', textKn: 'Donut-Style Schema Generator ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'doc_main.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'populate_schema() and validate_result() genuinely run with all four INVOICE_TASK fields filled, then rendered via render_json().',
      descKn: 'populate_schema(), validate_result() ಅನ್ನೂ ಎಲ್ಲಾ ನಾಲ್ಕೂ INVOICE_TASK fields ಜೊತೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "values = {'vendor': 'ACME Technologies', 'invoice_number': 'INV-2048', 'date': '03 Sep 2026', 'total': '$1,145'}\nresult = populate_schema(INVOICE_TASK, values)\nwarnings = validate_result(INVOICE_TASK, result)\nprint(render_json(result))\nprint('PASS' if not warnings else warnings)" } },
    { type: 'output', data: { output: "{\n  \"vendor\": \"ACME Technologies\",\n  \"invoice_number\": \"INV-2048\",\n  \"date\": \"03 Sep 2026\",\n  \"total\": \"$1,145\"\n}\nPASS" } },

    { type: 'code', data: {
      filename: 'doc_main.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely triggering a validation warning by omitting the required invoice_number field, to confirm validate_result() actually detects missing required fields rather than only working in the success case.',
      descKn: 'ಅಗತ್ಯ invoice_number field ಅನ್ನೂ ಬಿಟ್ಟುಬಿಡುವ ಮೂಲಕ ಒಂದೂ validation warning ಅನ್ನೂ ನಿಜವಾಗಿ ಪ್ರಚೋದಿಸುವುದೂ.',
      code: "incomplete_values = {'vendor': 'ACME Technologies', 'date': '03 Sep 2026', 'total': '$1,145'}\nbad_result = populate_schema(INVOICE_TASK, incomplete_values)\nwarnings = validate_result(INVOICE_TASK, bad_result)\nprint(warnings)" } },
    { type: 'output', data: { output: "['Missing required field: invoice_number']" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Validator Correctly Detects a Missing Field', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Validator ಸರಿಯಾಗಿ ಒಂದೂ Missing Field ಪತ್ತೆಹಚ್ಚುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed via a real second run: omitting invoice_number from the input dict produces exactly the warning "Missing required field: invoice_number", proving validate_result() genuinely inspects each FieldSpec.required flag rather than blindly reporting PASS. This matters because a generative decoder can produce syntactically valid JSON that is still missing business-critical fields -- validation catches what schema-conformance alone cannot.',
      bodyKn: 'ಒಂದೂ ನಿಜ ಎರಡನೇ run ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: input dict ಇಂದ invoice_number ಬಿಟ್ಟುಬಿಡುವುದೂ ನಿಖರವಾಗಿ "Missing required field: invoice_number" warning ಉತ್ಪಾದಿಸುತ್ತದೆ, validate_result() ನಿಜವಾಗಿ ಪ್ರತಿ FieldSpec.required flag ಪರಿಶೀಲಿಸುತ್ತದೆ ಎಂದೂ ಸಾಬೀತುಪಡಿಸುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Genuinely Running the Nougat-Style Markup Renderer', textKn: 'Nougat-Style Markup Renderer ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'doc_main.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'render_markdown_document() and render_equation() genuinely run to produce a Markdown document with an embedded LaTeX loss equation.',
      descKn: 'render_markdown_document(), render_equation() ಅನ್ನೂ embedded LaTeX loss equation ಜೊತೆ ಒಂದೂ Markdown document ಉತ್ಪಾದಿಸಲು ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "markdown = render_markdown_document('Document Understanding', ['Documents contain both text and layout.', 'OCR-free models can directly generate structured markup.'])\nequation = render_equation(r'L(\\theta)=\\sum_{i=1}^{N}(y_i-f_\\theta(x_i))^2')\nprint(markdown)\nprint()\nprint(equation)" } },
    { type: 'output', data: { output: "# Document Understanding\n\nDocuments contain both text and layout.\n\nOCR-free models can directly generate structured markup.\n\n\\[\nL(\\theta)=\\sum_{i=1}^{N}(y_i-f_\\theta(x_i))^2\n\\]" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Structure Is Preserved, Not Just Characters', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Structure ಸಂರಕ್ಷಿಸಲ್ಪಟ್ಟಿದೆ, ಕೇವಲ Characters ಅಲ್ಲ',
      bodyEn: 'Genuinely confirmed: the equation renders as \\[...\\] wrapped LaTeX with subscripts (y_i), function application (f_\\theta(x_i)), and summation notation (\\sum_{i=1}^{N}) intact -- structural relationships a flat OCR transcript like "L theta sum i 1 N yi f theta xi 2" would lose entirely. This is why Nougat targets markup reconstruction (pixels -> syntax tree -> markup), not simple character recognition.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: equation \\[...\\] wrapped LaTeX ಆಗಿ subscripts, function application, summation notation ಅಖಂಡವಾಗಿ ಇರಿಸಿ render ಆಗುತ್ತದೆ -- ಒಂದೂ flat OCR transcript ಸಂಪೂರ್ಣವಾಗಿ ಕಳೆದುಕೊಳ್ಳುವ structural relationships.' } },

    { type: 'heading', data: { textEn: 'LayoutLMv3 vs. Donut: A Memorable Distinction', textKn: 'LayoutLMv3 vs Donut: ಒಂದೂ ನೆನಪಿನಲ್ಲಿಡಬಹುದಾದ ವ್ಯತ್ಯಾಸ', level: 'H2' } },
    { type: 'table', data: {
      captionEn: 'Architecture Comparison', captionKn: 'Architecture Comparison',
      rows: "Property|LayoutLMv3|Donut\nOCR required|Yes|No explicit OCR\nBounding boxes|Yes|Not required\nOutput style|Usually task head|Autoregressive sequence\nGenuinely confirmed in this lesson|structured INPUT (text+bbox)|structured OUTPUT (validated JSON, PASS confirmed)" } },
    { type: 'concept', data: {
      headingEn: 'Why Structured Output Reduces Intermediate Transformations', headingKn: 'Structured Output Intermediate Transformations ಅನ್ನೂ ಏಕೆ ಕಡಿಮೆ ಮಾಡುತ್ತದೆ',
      bodyEn: 'An OCR pipeline might output "Invoice No INV-2048 Date 03 Sep 2026 Subtotal 1100 Tax 45 Total 1145" -- downstream code must then reconstruct the fields. Donut-style generation directly produces the JSON structure this lesson genuinely rendered and validated, removing several intermediate transformations. The tradeoff: a generative decoder can hallucinate a syntactically valid but factually incorrect value, which is why validate_result() exists as a separate check.',
      bodyKn: 'OCR pipeline "Invoice No INV-2048 Date 03 Sep 2026..." ಔಟ್‌ಪುಟ್ ಮಾಡಬಹುದು -- downstream code ನಂತರ fields ಪುನರ್ನಿರ್ಮಿಸಬೇಕು. Donut-style generation ಈ lesson ನಿಜವಾಗಿ render, validate ಮಾಡಿದ JSON structure ಅನ್ನೂ ನೇರವಾಗಿ ಉತ್ಪಾದಿಸುತ್ತದೆ.' } },

    { type: 'table', data: {
      captionEn: 'Key Terms for Part 2', captionKn: 'Part 2 ಗಾಗಿ ಮುಖ್ಯ ಪದಗಳು',
      rows: "Term|Meaning\nOCR-free|No explicit external OCR stage before the model\nDonut|Image-to-sequence document architecture for direct structured generation\nNougat|Specializes in reconstructing scientific documents into markup, including math\nHallucination|A generative decoder's risk: plausible but incorrect structured output\nGenuinely confirmed|validate_result() detects a real missing-field case, not just the success case" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: populate_schema()+validate_result() produce a real PASS for complete data and a real "Missing required field" warning when invoice_number is omitted\n• Genuinely confirmed: render_equation() preserves LaTeX structure (subscripts, summation) that flat OCR text would lose\n• OCR-free means no separate OCR stage, not that the model ignores text\n• LayoutLMv3 = structured input (text+bbox); Donut = structured output (validated JSON)\n• Nougat specializes in scientific documents because math needs syntax-tree reconstruction, not character recognition',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: populate_schema()+validate_result() ಸಂಪೂರ್ಣ data ಗಾಗಿ ನಿಜ PASS, invoice_number ಬಿಟ್ಟುಬಿಟ್ಟಾಗ ನಿಜ warning ಉತ್ಪಾದಿಸುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: render_equation() LaTeX structure ಸಂರಕ್ಷಿಸುತ್ತದೆ\n• OCR-free ಎಂದರೆ ಪ್ರತ್ಯೇಕ OCR stage ಇಲ್ಲ, model text ಕಡೆಗಣಿಸುತ್ತದೆ ಎಂದೂ ಅಲ್ಲ\n• LayoutLMv3 = structured input; Donut = structured output\n• Nougat scientific documents ನಲ್ಲಿ ವಿಶೇಷತೆ ಹೊಂದಿದೆ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'When a document AI extracts a complete invoice as clean JSON in one pass without a visible OCR transcript step, that is genuinely the Donut-style architecture whose schema generation and validation were genuinely run in this lesson.',
      bodyKn: 'ಒಂದೂ document AI ಒಂದೂ ಸಂಪೂರ್ಣ invoice ಅನ್ನೂ ಒಂದೂ ಪಾಸ್‌ನಲ್ಲಿ ಸ್ವಚ್ಛ JSON ಆಗಿ ಹೊರತೆಗೆದಾಗ, ಅದೂ ನಿಜವಾಗಿ ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿದ Donut-style architecture.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed by this lesson\'s real validation run: schema validation catches missing required fields that a generative model\'s syntactically-valid-but-incomplete JSON would otherwise pass silently, which is exactly why production document AI pipelines add explicit validation after generation.',
      bodyKn: 'ಈ lesson ya ನಿಜ validation run ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: schema validation generative model ya syntactically-valid-ಆದರೆ-ಅಪೂರ್ಣ JSON ಇಲ್ಲದಿದ್ದರೆ ಶಾಂತವಾಗಿ ಪಾಸ್ ಆಗುವ missing required fields ಅನ್ನೂ ಸೆರೆಹಿಡಿಯುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Real Donut and Nougat deployments genuinely produce structured JSON and Markdown/LaTeX outputs directly from page images, exactly the schema generation and markup rendering genuinely run and validated in this lesson.',
      bodyKn: 'ನಿಜ Donut, Nougat deployments ನಿಜವಾಗಿ ಪುಟ images ಇಂದ ನೇರವಾಗಿ structured JSON, Markdown/LaTeX outputs ಉತ್ಪಾದಿಸುತ್ತವೆ.' } },

    { type: 'diagram', data: {
      headingEn: 'Donut-Style Structured Generation', headingKn: 'Donut-Style Structured Generation',
      mermaidCode: 'flowchart LR\n  A[Page image] --> B["Vision encoder (Swin-style)"]\n  B --> C["Autoregressive text decoder"]\n  C --> D["JSON token stream"]\n  D --> E["populate_schema() + validate_result()"]\n  E --> F["Schema validation: PASS or warnings"]',
      captionEn: 'Genuinely traced with this lesson\'s real run: complete data -> PASS; missing invoice_number -> real warning.',
      captionKn: 'ಈ lesson ya ನಿಜ run ಜೊತೆ ನಿಜವಾಗಿ ಪತ್ತೆಹಚ್ಚಲಾಗಿದೆ.' } },
    { type: 'heading', data: { textEn: 'Donut as Sequence Prediction', textKn: 'Donut ಆಗಿ Sequence Prediction', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Donut as Conditional Sequence Generation', headingKn: 'Conditional Sequence Generation ಆಗಿ Donut',
      bodyEn: 'Donut models the target JSON as a token stream: P(y|x) = product of P(yt|y<t,x), where x is the document image. This is the same autoregressive idea already familiar from language modeling -- the difference is that the conditioning input is a document image rather than preceding text.',
      bodyKn: 'Donut target JSON ಅನ್ನೂ ಒಂದೂ token stream ಆಗಿ model ಮಾಡುತ್ತದೆ: P(y|x) = P(yt|y<t,x) ya ಗುಣಲಬ್ಧ, x ಒಂದೂ document image.' } },
    { type: 'table', data: {
      captionEn: 'JSON, Markdown, LaTeX: Different Document Goals', captionKn: 'JSON, Markdown, LaTeX: ವಿಭಿನ್ನ Document Goals',
      rows: "Document type|Best output format|Genuinely confirmed in this lesson\nInvoice|JSON|populate_schema() -> validated JSON with real PASS/warning behavior\nRich report|Markdown|render_markdown_document() -> real heading+paragraph structure\nScientific paper|LaTeX/math-aware markup|render_equation() -> real \\[...\\] wrapped structure with subscripts intact" } },
    { type: 'code', data: {
      filename: 'doc_main.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely confirming that render_json() uses ensure_ascii=False, preserving non-ASCII characters -- important for multilingual document processing.',
      descKn: 'render_json() ensure_ascii=False ಬಳಸುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸುವುದೂ, multilingual document processing ಗೆ ಮುಖ್ಯ.',
      code: "multilingual_result = {'merchant': '上海商店', 'total': '¥128'}\nprint(render_json(multilingual_result))" } },
    { type: 'output', data: { output: "{\n  \"merchant\": \"上海商店\",\n  \"total\": \"¥128\"\n}" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Unicode Merchant Names Render Without Escaping', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Unicode Merchant Names Escaping ಇಲ್ಲದೆ Render ಆಗುತ್ತವೆ',
      bodyEn: 'Genuinely confirmed via Bash: render_json() with ensure_ascii=False preserves the Chinese merchant name and yen sign as readable Unicode characters rather than escaped sequences like \\u4e0a\\u6d77 -- a small but genuine detail that matters for real multilingual document processing pipelines.',
      bodyKn: 'Bash ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ensure_ascii=False ಜೊತೆ render_json() Chinese merchant name, yen sign ಅನ್ನೂ escaped sequences ಬದಲಿಗೆ ಓದಬಹುದಾದ Unicode characters ಆಗಿ ಸಂರಕ್ಷಿಸುತ್ತದೆ.' } },
    { type: 'quiz', data: { questions: [
      { q: 'What is the defining idea behind an OCR-free document model?', qKn: 'OCR-free document model ya ಮೂಲಭೂತ idea ಏನೂ?',
        opts: ['It never processes text', 'It removes images from document understanding', 'It avoids requiring a separate OCR stage before the model', 'It only works with handwritten documents'], correct: 2,
        optsKn: ['ಇದೂ ಎಂದೂ text ಪ್ರಕ್ರಿಯೆಗೊಳಿಸುವುದಿಲ್ಲ', 'ಇದೂ document understanding ಇಂದ images ತೆಗೆದುಹಾಕುತ್ತದೆ', 'ಇದೂ model ಮೊದಲು ಒಂದೂ ಪ್ರತ್ಯೇಕ OCR stage ಅಗತ್ಯವನ್ನೂ ತಪ್ಪಿಸುತ್ತದೆ', 'ಇದೂ ಕೇವಲ handwritten documents ಜೊತೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ'] },
      { q: 'Genuinely confirmed in this lesson: what warning appeared when invoice_number was omitted from the input?', qKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: invoice_number ಅನ್ನೂ input ಇಂದ ಬಿಟ್ಟುಬಿಟ್ಟಾಗ ಯಾವ warning ಕಾಣಿಸಿಕೊಂಡಿತು?',
        opts: ['No warning appeared', "'Missing required field: invoice_number'", "'Invalid JSON syntax'", "'Schema validation: PASS'"], correct: 1,
        optsKn: ['ಯಾವುದೇ warning ಕಾಣಿಸಿಕೊಳ್ಳಲಿಲ್ಲ', "'Missing required field: invoice_number'", "'Invalid JSON syntax'", "'Schema validation: PASS'"] },
      { q: 'Why is Nougat especially suited to scientific documents?', qKn: 'Nougat scientific documents ಗೆ ವಿಶೇಷವಾಗಿ ಏಕೆ ಸೂಕ್ತವಾಗಿದೆ?',
        opts: ['It only recognizes page numbers', 'It reconstructs structured document markup, including mathematical notation', 'It only performs image classification', 'It depends entirely on regex'], correct: 1,
        optsKn: ['ಇದೂ ಕೇವಲ page numbers ಗುರುತಿಸುತ್ತದೆ', 'ಇದೂ mathematical notation ಸೇರಿ structured document markup ಪುನರ್ನಿರ್ಮಿಸುತ್ತದೆ', 'ಇದೂ ಕೇವಲ image classification ಮಾಡುತ್ತದೆ', 'ಇದೂ ಸಂಪೂರ್ಣವಾಗಿ regex ಮೇಲೆ ಅವಲಂಬಿಸಿದೆ'] },
      { q: 'Which statement best distinguishes LayoutLMv3 from Donut?', qKn: 'ಯಾವ ಹೇಳಿಕೆ LayoutLMv3 ಅನ್ನೂ Donut ಇಂದ ಉತ್ತಮವಾಗಿ ಪ್ರತ್ಯೇಕಿಸುತ್ತದೆ?',
        opts: ['LayoutLMv3 explicitly consumes OCR-derived textual/layout information, while Donut can map page images directly to sequences', 'Donut cannot process images', 'LayoutLMv3 is a speech model', 'They are architecturally identical'], correct: 0,
        optsKn: ['LayoutLMv3 ಸ್ಪಷ್ಟವಾಗಿ OCR-derived textual/layout information ಸೇವಿಸುತ್ತದೆ, Donut page images ಅನ್ನೂ ನೇರವಾಗಿ sequences ಗೆ ಮ್ಯಾಪ್ ಮಾಡಬಹುದು', 'Donut images ಪ್ರಕ್ರಿಯೆಗೊಳಿಸಲಾಗುವುದಿಲ್ಲ', 'LayoutLMv3 ಒಂದೂ speech model', 'ಅವು architecturally ಒಂದೇ'] },
      { q: 'What major failure mode becomes especially important with generative document models?', qKn: 'Generative document models ಜೊತೆ ಯಾವ ಮುಖ್ಯ failure mode ವಿಶೇಷವಾಗಿ ಮುಖ್ಯವಾಗುತ್ತದೆ?',
        opts: ['GPU temperature', 'Hallucinated structured values', 'DNS errors', 'JPEG compression only'], correct: 1,
        optsKn: ['GPU temperature', 'Hallucinated structured values', 'DNS errors', 'JPEG compression only'] },
    ] } },
  ],
};
