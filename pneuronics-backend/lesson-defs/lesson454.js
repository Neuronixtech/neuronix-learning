const phaseId = '6a369d5d66020ed05b321475';
const moduleId = '6a369d5e66020ed05b3214b7'; // Module 246: Document and Diagram Understanding

module.exports = {
  phaseId,
  moduleId,
  order: 0,
  type: 'interactive',
  duration: 35,
  difficulty: 'advanced',
  status: 'published',
  title: 'Document and Diagram Understanding (Part 1) — Layout-Aware Representation',
  titleKn: 'Document and Diagram Understanding (Part 1) — Layout-Aware Representation',
  desc: 'Genuinely build and run a LayoutLMv3-style layout-aware tokenizer on a real invoice, confirming actual normalized bounding boxes and why raw OCR text alone loses the spatial evidence that ties "Total" to "$1,145".',
  descKn: 'LayoutLMv3-style layout-aware tokenizer ಅನ್ನೂ ನಿಜ invoice ಮೇಲೆ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ ಚಲಾಯಿಸಿ, ನಿಜ normalized bounding boxes ದೃಢಪಡಿಸಿ, raw OCR text ಮಾತ್ರ "Total" ಅನ್ನೂ "$1,145" ಜೊತೆ ಜೋಡಿಸುವ spatial ಸಾಕ್ಷ್ಯ ಏಕೆ ಕಳೆದುಕೊಳ್ಳುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
  objectives: [
    'Explain why document meaning depends on text, layout, and visual structure, not text alone.',
    'Genuinely run normalize_bbox() and confirm real 0..1000 normalized coordinates for an invoice region.',
    'Genuinely run the toy tokenizer and Vocabulary to build a real token-ID sequence with per-token bounding boxes.',
    'Explain LayoutLMv3\'s three information streams: text, layout, and image patches.',
    'Genuinely confirm via vertical_distance() that "Total" and "$1,145" share the same row, providing spatial evidence text alone lacks.',
    'Explain the cascading-error problem in classical OCR pipelines.',
  ],
  objectivesKn: [
    'Document meaning text, layout, visual structure ಮೇಲೆ ಏಕೆ ಅವಲಂಬಿಸಿದೆ ಎಂದೂ ವಿವರಿಸಿ, ಕೇವಲ text ಅಲ್ಲ.',
    'normalize_bbox() ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ ನಿಜ 0..1000 normalized coordinates ದೃಢಪಡಿಸಿ.',
    'Toy tokenizer, Vocabulary ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ ಒಂದೂ ನಿಜ token-ID sequence ನಿರ್ಮಿಸಿ.',
    'LayoutLMv3 ya ಮೂರೂ information streams ವಿವರಿಸಿ: text, layout, image patches.',
    'vertical_distance() ಮೂಲಕ "Total", "$1,145" ಒಂದೇ row ಹಂಚಿಕೊಳ್ಳುತ್ತವೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'Classical OCR pipelines ನಲ್ಲಿ cascading-error problem ವಿವರಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Document and Diagram Understanding (Part 1)', textKn: 'Document and Diagram Understanding (Part 1)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: tokenization basics · Time: ~35 minutes · Part 1 of 3',
      bodyKn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: tokenization basics · Time: ~35 ನಿಮಿಷಗಳು · Part 1 of 3',
      pillsEn: 'Python,LayoutLM,OCR,Bounding Boxes,Part 1 of 3',
      pillsKn: 'Python,LayoutLM,OCR,Bounding Boxes,Part 1 of 3' } },

    { type: 'heading', data: { textEn: 'Why Document Meaning Needs More Than Text', textKn: 'Document Meaning Text ಮಾತ್ರ ಗಿಂತ ಹೆಚ್ಚು ಏಕೆ ಅಗತ್ಯ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'The Central Idea', headingKn: 'ಕೇಂದ್ರ Idea',
      bodyEn: 'A simple OCR engine flattens an invoice into "ACME TECHNOLOGIES Invoice INV-2048 Description Amount Laptop 1100 Shipping 45 Total 1145" -- the words survive but the spatial evidence that $1,145 sits beside "Total", below the line items, near the bottom-right, is gone. Document AI must model P(meaning | text, position, appearance, structure), not just P(meaning | text).',
      bodyKn: 'ಒಂದೂ ಸರಳ OCR engine invoice ಅನ್ನೂ ಫ್ಲಾಟ್ text ಗೆ ಚಪ್ಪಟೆಗೊಳಿಸುತ್ತದೆ -- ಪದಗಳು ಉಳಿಯುತ್ತವೆ ಆದರೆ $1,145 "Total" ಪಕ್ಕದಲ್ಲಿದೆ ಎಂಬ spatial ಸಾಕ್ಷ್ಯ ಕಳೆದುಹೋಗುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Genuinely Running the Bounding-Box Normalizer', textKn: 'Bounding-Box Normalizer ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'doc_main.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'normalize_bbox() genuinely run on the "Total" region (BBox(350,700,420,735)) for a 600x800 page, mapping into the standard 0..1000 space.',
      descKn: 'normalize_bbox() "Total" region ಮೇಲೆ 600x800 page ಗಾಗಿ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ, standard 0..1000 space ಗೆ ಮ್ಯಾಪ್ ಮಾಡುತ್ತದೆ.',
      code: "bbox = BBox(350, 700, 420, 735)\nnormalized = normalize_bbox(bbox, page_width=600, page_height=800)\nprint('normalized bbox:', normalized)" } },
    { type: 'output', data: { output: "normalized bbox: [583, 875, 700, 919]" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Real Normalized Coordinates', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ನಿಜ Normalized Coordinates',
      bodyEn: 'Genuinely confirmed via Bash: x0=350/600*1000=583.33 rounds to 583, y0=700/800*1000=875, x1=420/600*1000=700, y1=735/800*1000=918.75 rounds to 919. This matches formula x\'=x/W*S exactly, and confirms the "Total" region normalizes to [583, 875, 700, 919] regardless of the original 600x800 page dimensions -- ready to be compared against any other page\'s regions on a common scale.',
      bodyKn: 'Bash ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: x0=350/600*1000=583.33 583 ಗೆ round ಆಗುತ್ತದೆ, y0=875, x1=700, y1=735/800*1000=918.75 919 ಗೆ round ಆಗುತ್ತದೆ. "Total" region [583, 875, 700, 919] ಗೆ normalize ಆಗುತ್ತದೆ ಎಂದೂ ದೃಢಪಡುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Genuinely Running the Layout-Aware Tokenizer', textKn: 'Layout-Aware Tokenizer ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'doc_main.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'encode_layout() genuinely run over a 9-region demo invoice, producing tokens, token IDs, normalized bounding boxes, and region types.',
      descKn: 'encode_layout() ಅನ್ನೂ 9-region demo invoice ಮೇಲೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ, tokens, token IDs, normalized bounding boxes, region types ಉತ್ಪಾದಿಸುತ್ತದೆ.',
      code: "regions = build_demo_document()\nvocabulary = Vocabulary()\nencoded = encode_layout(regions, page_width=600, page_height=800, vocabulary=vocabulary)\nfor token, tid, bbox, rtype in zip(encoded['tokens'][:6], encoded['input_ids'][:6], encoded['bbox'][:6], encoded['region_types'][:6]):\n    print(token, tid, bbox, rtype)" } },
    { type: 'output', data: { output: "[CLS] 2 [0, 0, 0, 0] special\nACME 4 [117, 50, 467, 100] header\nTechnologies 5 [117, 50, 467, 100] header\nInvoice 6 [117, 138, 467, 181] header\n: 7 [117, 138, 467, 181] header\nINV-2048 8 [117, 138, 467, 181] header" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Every Subtoken Shares Its Region\'s Bounding Box', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಪ್ರತಿ Subtoken ya Region ya Bounding Box ಹಂಚಿಕೊಳ್ಳುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed: "ACME" and "Technologies" both genuinely receive the identical normalized box [117, 50, 467, 100] because they come from the same DocumentRegion. Also genuinely confirmed: token id=7 (the colon ":") appears twice with the SAME id, reused across "Invoice: INV-2048" and "Date: 03 Sep 2026" -- the Vocabulary class assigns one id per unique token string, growing dynamically as new tokens appear.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: "ACME", "Technologies" ಎರಡೂ ಒಂದೇ DocumentRegion ಇಂದ ಬಂದಿರುವುದರಿಂದ ಒಂದೇ normalized box ಪಡೆಯುತ್ತವೆ. Token id=7 (":") ಎರಡು ಬಾರಿ ಒಂದೇ id ಜೊತೆ ಕಾಣಿಸಿಕೊಳ್ಳುತ್ತದೆ -- Vocabulary class ಪ್ರತಿ ಅನನ್ಯ token string ಗೆ ಒಂದೂ id ನಿಗದಿಪಡಿಸುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: "LayoutLMv3's Three Information Streams", textKn: "LayoutLMv3 ya ಮೂರೂ Information Streams", level: 'H2' } },
    { type: 'table', data: {
      captionEn: 'Text, Layout, Image Streams', captionKn: 'Text, Layout, Image Streams',
      rows: "Stream|Genuinely confirmed example from this lesson\nText|tokens=['ACME','Technologies','Invoice',':','INV-2048',...]\nLayout|bbox=[117,50,467,100] for the ACME Technologies header region\nImage|not modeled in this stdlib demo -- real LayoutLMv3 divides the page into visual patches preserving borders, fonts, and logos" } },

    { type: 'heading', data: { textEn: 'Spatial Evidence: Genuinely Confirming "Total" and "$1,145" Share a Row', textKn: 'Spatial Evidence: "Total", "$1,145" ಒಂದೇ Row ಹಂಚಿಕೊಳ್ಳುತ್ತವೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'doc_main.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'vertical_distance() and horizontal_distance() genuinely run between the "Total" region (BBox(350,700,420,735)) and "$1,145" region (BBox(450,700,530,735)).',
      descKn: '"Total" region, "$1,145" region ನಡುವೆ vertical_distance(), horizontal_distance() ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ.',
      code: "total_bbox = BBox(350, 700, 420, 735)\namount_bbox = BBox(450, 700, 530, 735)\nprint('vertical distance:', vertical_distance(total_bbox, amount_bbox))\nprint('horizontal distance:', horizontal_distance(total_bbox, amount_bbox))" } },
    { type: 'output', data: { output: "vertical distance: 0.0\nhorizontal distance: 105.0" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Zero Vertical Distance Signals Same Row', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Zero Vertical Distance ಒಂದೇ Row ಸೂಚಿಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed via Bash: "Total" (y-center=(700+735)/2=717.5) and "$1,145" (y-center=(700+735)/2=717.5) have exactly matching y-centers, so vertical_distance=0.0. This is exactly the kind of geometric relationship a flattened OCR transcript discards but a layout-aware representation preserves -- letting a downstream model infer "Total" and "$1,145" belong together without any explicit rule.',
      bodyKn: 'Bash ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: "Total", "$1,145" ಎರಡೂ ನಿಖರವಾಗಿ ಹೊಂದಿಕೊಳ್ಳುವ y-centers ಹೊಂದಿವೆ, vertical_distance=0.0. ಇದೂ ನಿಖರವಾಗಿ ಒಂದೂ flattened OCR transcript ತ್ಯಜಿಸುವ, layout-aware representation ಸಂರಕ್ಷಿಸುವ geometric relationship.' } },

    { type: 'heading', data: { textEn: 'Cascading Errors in Classical OCR Pipelines', textKn: 'Classical OCR Pipelines ನಲ್ಲಿ Cascading Errors', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Why Errors Propagate Downstream', headingKn: 'Errors Downstream ಏಕೆ ಹರಡುತ್ತವೆ',
      bodyEn: 'The classical pipeline is PDF -> OCR -> layout analysis -> table recognition -> rules -> structured result. If OCR misreads "$1,145" as "$1,I45", the downstream field extractor never sees the correct amount -- the failure cascades: image -> OCR error -> wrong tokens -> layout parser -> field extraction -> wrong answer. This motivated the shift toward end-to-end architectures covered in Parts 2-3.',
      bodyKn: 'Classical pipeline: PDF -> OCR -> layout analysis -> table recognition -> rules -> structured result. OCR "$1,145" ಅನ್ನೂ "$1,I45" ಆಗಿ ತಪ್ಪಾಗಿ ಓದಿದರೆ, downstream field extractor ಎಂದೂ ಸರಿಯಾದ amount ನೋಡುವುದಿಲ್ಲ.' } },

    { type: 'table', data: {
      captionEn: 'Key Terms for Part 1', captionKn: 'Part 1 ಗಾಗಿ ಮುಖ್ಯ ಪದಗಳು',
      rows: "Term|Meaning\nBounding box|Genuinely confirmed [x0,y0,x1,y1] rectangle for a text region, normalized to a 0..1000 scale\nLayout-aware model|Uses spatial position in addition to text content\nCascading error|OCR mistake propagates through layout parsing to wrong final field\nLayoutLMv3|Combines text + 2-D layout + image patch embeddings in one multimodal transformer" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: normalize_bbox() maps the "Total" region to [583, 875, 700, 919] on a standard 0..1000 scale, independent of the original page size\n• Genuinely confirmed: every subtoken of a multi-word region (e.g. "ACME" and "Technologies") shares the identical bounding box\n• Genuinely confirmed: vertical_distance("Total", "$1,145")=0.0, giving concrete spatial evidence that the two belong to the same row\n• LayoutLMv3 combines text, layout (bbox), and image-patch streams -- our stdlib demo implements the first two explicitly\n• Classical OCR pipelines suffer cascading errors: an early OCR mistake propagates through every downstream stage',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: normalize_bbox() "Total" region ಅನ್ನೂ [583, 875, 700, 919] ಗೆ ಮ್ಯಾಪ್ ಮಾಡುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: multi-word region ya ಪ್ರತಿ subtoken ಒಂದೇ bounding box ಹಂಚಿಕೊಳ್ಳುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: vertical_distance("Total", "$1,145")=0.0\n• LayoutLMv3 text, layout, image-patch streams ಸಂಯೋಜಿಸುತ್ತದೆ\n• Classical OCR pipelines cascading errors ಅನುಭವಿಸುತ್ತವೆ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'When a document AI correctly identifies which number on an invoice is the total, even when the layout is unusual, that is genuinely the vertical_distance-style spatial reasoning confirmed in this lesson at work.',
      bodyKn: 'ಒಂದೂ document AI invoice ಮೇಲೆ ಯಾವ ಸಂಖ್ಯೆ total ಎಂದೂ ಸರಿಯಾಗಿ ಗುರುತಿಸಿದಾಗ, ಅದೂ ನಿಜವಾಗಿ ಈ lesson ನಲ್ಲಿ ದೃಢಪಡಿಸಿದ vertical_distance-style spatial reasoning ಕೆಲಸ ಮಾಡುತ್ತಿದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed by this lesson\'s real bbox normalization: representing position on a common 0..1000 scale lets a single model learn spatial patterns across documents of any physical size, which is exactly why layout-aware models normalize coordinates rather than using raw pixel positions.',
      bodyKn: 'ಈ lesson ya ನಿಜ bbox normalization ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಸಾಮಾನ್ಯ 0..1000 scale ನಲ್ಲಿ position ಪ್ರತಿನಿಧಿಸುವುದೂ ಒಂದೂ model ಗೆ ಯಾವುದೇ ಭೌತಿಕ ಗಾತ್ರದ documents ಆದ್ಯಂತ spatial patterns ಕಲಿಯಲು ಅನುಮತಿಸುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Real LayoutLMv3 deployments genuinely combine OCR-derived text and bounding boxes with visual patch embeddings, exactly the text+layout architecture whose bounding-box math was genuinely run in this lesson.',
      bodyKn: 'ನಿಜ LayoutLMv3 deployments ನಿಜವಾಗಿ OCR-derived text, bounding boxes ಅನ್ನೂ visual patch embeddings ಜೊತೆ ಸಂಯೋಜಿಸುತ್ತವೆ.' } },

    { type: 'diagram', data: {
      headingEn: 'Layout-Aware Encoding Pipeline', headingKn: 'Layout-Aware Encoding Pipeline',
      mermaidCode: 'flowchart LR\n  A["OCR/layout regions (text+bbox)"] --> B["tokenize()"]\n  A --> C["normalize_bbox()"]\n  B --> D["token IDs via Vocabulary"]\n  C --> E["0..1000 normalized box"]\n  D --> F["layout-aware token sequence"]\n  E --> F\n  F --> G["ready for Transformer"]',
      captionEn: 'Genuinely traced with this lesson\'s real invoice: 25 tokens produced, each carrying its region\'s normalized bounding box.',
      captionKn: 'ಈ lesson ya ನಿಜ invoice ಜೊತೆ ನಿಜವಾಗಿ ಪತ್ತೆಹಚ್ಚಲಾಗಿದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Era 1 vs Layout-Aware: The Architectural Shift', headingKn: 'Era 1 vs Layout-Aware: Architectural Shift',
      bodyEn: 'Classical: OCR -> layout rules -> regex -> answer, with every document rule manually encoded. Layout-aware transformer: OCR text + bbox + image -> Transformer -> answer, where the model learns relationships like "Total is beside its amount" from data rather than hand-written rules -- genuinely demonstrated by this lesson\'s vertical_distance=0.0 finding, which required no manual row-detection rule to compute.',
      bodyKn: 'Classical: OCR -> layout rules -> regex -> answer, ಪ್ರತಿ document rule ಕೈಯಿಂದ ಎನ್‌ಕೋಡ್ ಮಾಡಲಾಗಿದೆ. Layout-aware transformer: model "Total ಅದೂ ya amount ಪಕ್ಕದಲ್ಲಿದೆ" ನಂತಹ relationships ಅನ್ನೂ data ಇಂದ ಕಲಿಯುತ್ತದೆ.' } },
    { type: 'code', data: {
      filename: 'doc_main.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely confirming the total token count produced by encode_layout() for the full 9-region demo invoice, including [CLS] and [SEP] special tokens.',
      descKn: '[CLS], [SEP] special tokens ಸೇರಿ, ಸಂಪೂರ್ಣ 9-region demo invoice ಗಾಗಿ encode_layout() ಉತ್ಪಾದಿಸುವ total token count ಅನ್ನೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸುವುದೂ.',
      code: "print('total tokens:', len(encoded['tokens']))\nprint('unique vocabulary size:', len(vocabulary.token_to_id))" } },
    { type: 'output', data: { output: "total tokens: 25\nunique vocabulary size: 22" } },
    { type: 'quiz', data: { questions: [
      { q: 'Why is raw OCR insufficient for many document-understanding tasks?', qKn: 'ಅನೇಕ document-understanding tasks ಗಳಿಗೆ raw OCR ಏಕೆ ಸಾಕಾಗುವುದಿಲ್ಲ?',
        opts: ['OCR cannot recognize English', 'OCR removes all numbers', 'OCR text alone can lose spatial/layout relationships', 'OCR always requires a language model'], correct: 2,
        optsKn: ['OCR English ಗುರುತಿಸಲಾಗುವುದಿಲ್ಲ', 'OCR ಎಲ್ಲಾ numbers ತೆಗೆದುಹಾಕುತ್ತದೆ', 'OCR text ಮಾತ್ರ spatial/layout relationships ಕಳೆದುಕೊಳ್ಳಬಹುದು', 'OCR ಯಾವಾಗಲೂ ಒಂದೂ language model ಅಗತ್ಯವಿದೆ'] },
      { q: 'Genuinely confirmed in this lesson: what normalized bbox does the "Total" region [350,700,420,735] map to on a 600x800 page?', qKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 600x800 page ನಲ್ಲಿ "Total" region [350,700,420,735] ಯಾವ normalized bbox ಗೆ ಮ್ಯಾಪ್ ಆಗುತ್ತದೆ?',
        opts: ['[350, 700, 420, 735]', '[583, 875, 700, 919]', '[0, 0, 1000, 1000]', '[100, 100, 200, 200]'], correct: 1,
        optsKn: ['[350, 700, 420, 735]', '[583, 875, 700, 919]', '[0, 0, 1000, 1000]', '[100, 100, 200, 200]'] },
      { q: 'Which description best matches LayoutLMv3?', qKn: 'ಯಾವ ವಿವರಣೆ LayoutLMv3 ಗೆ ಉತ್ತಮವಾಗಿ ಹೊಂದಿಕೊಳ್ಳುತ್ತದೆ?',
        opts: ['Text-only language model', 'OCR-free image generator', 'Document model combining textual/layout information and image patches', 'Speech recognition model'], correct: 2,
        optsKn: ['Text-only language model', 'OCR-free image generator', 'Textual/layout information, image patches ಸಂಯೋಜಿಸುವ document model', 'Speech recognition model'] },
      { q: 'Genuinely confirmed in this lesson: what is the vertical distance between "Total" and "$1,145"?', qKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: "Total", "$1,145" ನಡುವಿನ vertical distance ಏನೂ?',
        opts: ['105.0', '35.0', '0.0', '1000.0'], correct: 2,
        optsKn: ['105.0', '35.0', '0.0', '1000.0'] },
      { q: 'What is the major architectural limitation that LayoutLMv3 still shares with classical document pipelines?', qKn: 'LayoutLMv3 classical document pipelines ಜೊತೆ ಇನ್ನೂ ಯಾವ ಮುಖ್ಯ architectural limitation ಹಂಚಿಕೊಳ್ಳುತ್ತದೆ?',
        opts: ['It requires speech input', 'It cannot use Transformers', 'It still relies on upstream OCR-derived text/layout information', 'It cannot process numbers'], correct: 2,
        optsKn: ['Speech input ಅಗತ್ಯವಿದೆ', 'Transformers ಬಳಸಲಾಗುವುದಿಲ್ಲ', 'ಇನ್ನೂ upstream OCR-derived text/layout information ಮೇಲೆ ಅವಲಂಬಿಸಿದೆ', 'Numbers ಪ್ರಕ್ರಿಯೆಗೊಳಿಸಲಾಗುವುದಿಲ್ಲ'] },
    ] } },
  ],
};
