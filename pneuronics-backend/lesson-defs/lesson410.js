const phaseId = '6a369d5d66020ed05b321475';
const moduleId = '6a369d5d66020ed05b321487'; // Module 230: Any-Resolution Vision: Patch-n'-Pack and NaFlex

module.exports = {
  phaseId,
  moduleId,
  order: 0,
  type: 'interactive',
  duration: 35,
  difficulty: 'advanced',
  status: 'published',
  title: 'Any-Resolution Vision (Part 1) — Patch-n\'-Pack Foundations',
  titleKn: 'Any-Resolution Vision (Part 1) — Patch-n\'-Pack Foundations',
  desc: 'Genuinely implement and run ceil-division patch counting on 4 real-shaped images (receipt, chart, screenshot, photo), confirming exact patch grids and token counts, and understand why square resizing, cropping, and padding all fail differently for documents and UI screenshots.',
  descKn: 'ceil-division patch counting ಅನ್ನೂ 4 ನಿಜ-ಆಕಾರದ images ಮೇಲೆ ನಿಜವಾಗಿ ಜಾರಿಗೊಳಿಸಿ ಚಲಾಯಿಸಿ, ನಿಖರ patch grids ಮತ್ತೆ token counts ದೃಢಪಡಿಸಿ, square resizing, cropping, padding ಎಲ್ಲಾ documents ಮತ್ತೆ UI screenshots ಗೆ ಏಕೆ ಭಿನ್ನವಾಗಿ ವಿಫಲಗೊಳ್ಳುತ್ತವೆ ಎಂದೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
  objectives: [
    'Explain the three traditional failure modes of forcing images to a fixed square: squishing, cropping, and padding waste.',
    'Genuinely implement ceil_div() and confirm it matches the formula (a+b-1)//b without using math.ceil.',
    'Genuinely implement and run patch_grid() and patch_count() on 4 real-world-shaped images.',
    'Explain why two images of different native resolution produce different sequence lengths under Patch-n\'-Pack.',
    'Genuinely confirm the exact token counts for a receipt, chart, screenshot, and photo at patch_size=14.',
    'Explain why native resolution alone does not solve compute cost, motivating token budgets covered in Part 3.',
  ],
  objectivesKn: [
    'ಒಂದೂ ಸ್ಥಿರ square ಗೆ images ಒತ್ತಾಯಿಸುವ ಮೂರೂ ಸಾಂಪ್ರದಾಯಿಕ failure modes ವಿವರಿಸಿ: squishing, cropping, padding waste.',
    'ceil_div() ಅನ್ನೂ ನಿಜವಾಗಿ ಜಾರಿಗೊಳಿಸಿ formula (a+b-1)//b ಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
    'patch_grid() ಮತ್ತೆ patch_count() ಅನ್ನೂ 4 ನಿಜ-ಪ್ರಪಂಚದ-ಆಕಾರದ images ಮೇಲೆ ನಿಜವಾಗಿ ಜಾರಿಗೊಳಿಸಿ ಚಲಾಯಿಸಿ.',
    'ಭಿನ್ನ native resolution ya ಎರಡೂ images Patch-n\'-Pack ಅಡಿಯಲ್ಲಿ ಭಿನ್ನ sequence lengths ಉತ್ಪಾದಿಸುತ್ತವೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'receipt, chart, screenshot, photo ಗಾಗಿ ನಿಖರ token counts ಅನ್ನೂ patch_size=14 ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'native resolution ಮಾತ್ರ compute cost ಪರಿಹರಿಸುವುದಿಲ್ಲ ಎಂದೂ ವಿವರಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Any-Resolution Vision (Part 1) — Patch-n\'-Pack Foundations', textKn: 'Any-Resolution Vision (Part 1)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: Module 229 (LLaVA) · Time: ~35 minutes · Part 1 of 3',
      bodyKn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: Module 229 · Time: ~35 ನಿಮಿಷಗಳು · Part 1 of 3',
      pillsEn: 'Python,Patch-n-Pack,Any-Resolution,NaFlex,Part 1 of 3',
      pillsKn: 'Python,Patch-n-Pack,Any-Resolution,NaFlex,Part 1 of 3' } },

    { type: 'heading', data: { textEn: 'Removing an Old Assumption: Every Image Must Be the Same Square', textKn: 'ಒಂದೂ ಹಳೆಯ ಊಹೆ ತೆಗೆದುಹಾಕುವುದೂ: ಪ್ರತಿ Image ಅದೇ Square ಆಗಿರಬೇಕು', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Convenience at the Cost of Information', headingKn: 'Information ya ವೆಚ್ಚದಲ್ಲಿ Convenience',
      bodyEn: 'Classic ViT pipelines resize/crop to 224x224 -> 196 tokens, giving every image the same sequence length for trivial batching [B, 196, D]. But this comes at the cost of information: a receipt forced into a square gets characters distorted or tiny, which matters enormously for OCR. Patch-n\'-Pack instead lets each image keep its useful aspect ratio and resolution, converting it into however many patch tokens it naturally needs.',
      bodyKn: 'Classic ViT pipelines 224x224 ಗೆ resize/crop ಮಾಡುತ್ತವೆ -> 196 tokens, ಪ್ರತಿ image ಗೆ ಅದೇ sequence length ನೀಡುತ್ತಾ. ಆದರೆ ಇದೂ information ya ವೆಚ್ಚದಲ್ಲಿ ಬರುತ್ತದೆ: ಒಂದೂ square ಗೆ ಒತ್ತಾಯಿಸಿದ receipt characters ಅನ್ನೂ ವಿಕೃತಗೊಳಿಸುತ್ತದೆ ಅಥವಾ ಚಿಕ್ಕದಾಗಿಸುತ್ತದೆ.' } },
    { type: 'diagram', data: {
      captionEn: 'The Three Traditional Failure Modes', captionKn: 'ಮೂರೂ ಸಾಂಪ್ರದಾಯಿಕ Failure Modes',
      code: "graph TD\n  A[Non-square image] --> B[Square Resize: distorts aspect ratio]\n  A --> C[Cropping: loses content outside crop]\n  A --> D[Padding: wastes token slots on blank pixels]\n  B --> E[All three fail differently]\n  C --> E\n  D --> E" } },

    { type: 'heading', data: { textEn: 'The Three Traditional Failure Modes', textKn: 'ಮೂರೂ ಸಾಂಪ್ರದಾಯಿಕ Failure Modes', level: 'H2' } },
    { type: 'table', data: {
      captionEn: 'Squish, Crop, Pad -- Three Ways to Fail', captionKn: 'Squish, Crop, Pad -- ಮೂರೂ ವಿಫಲಗೊಳ್ಳುವ ದಾರಿಗಳು',
      rows: "Failure mode|What happens|Consequence\nSquare resize|A 1170x2532 screenshot forced to 336x336 changes aspect ratio from 0.462 to 1.0|Text and UI geometry get stretched or compressed\nCropping|A centered square crop of 1170x2532 keeps only 1170x1170, losing 1362 vertical pixels|Navigation, totals, legends, footnotes can disappear\nPadding|1170x2532 padded to 2532x2532 with blank pixels|Padded regions become patch positions -- wasted compute" } },

    { type: 'heading', data: { textEn: 'Genuinely Implementing Ceiling Division', textKn: 'Ceiling Division ಅನ್ನೂ ನಿಜವಾಗಿ ಜಾರಿಗೊಳಿಸುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'ceil_div.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'The exact ceil_div function from the source program, genuinely run and compared against math.ceil to confirm the integer-arithmetic formula produces identical results.',
      descKn: 'ನಿಖರ ceil_div function, ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ math.ceil ಜೊತೆ ಹೋಲಿಸಿ integer-arithmetic formula ಒಂದೇ ಫಲಿತಾಂಶಗಳನ್ನೂ ಉತ್ಪಾದಿಸುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
      code: "import math\n\ndef ceil_div(a: int, b: int) -> int:\n    return (a + b - 1) // b\n\nfor height in [2532, 336, 1170]:\n    for patch_size in [14]:\n        genuine = ceil_div(height, patch_size)\n        reference = math.ceil(height / patch_size)\n        print(f'ceil_div({height}, {patch_size}) = {genuine}, math.ceil match: {genuine == reference}')" } },
    { type: 'output', data: { output: "ceil_div(2532, 14) = 181, math.ceil match: True\nceil_div(336, 14) = 24, math.ceil match: True\nceil_div(1170, 14) = 84, math.ceil match: True" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Integer-Only Ceiling Division Matches math.ceil Exactly', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Integer-Only Ceiling Division math.ceil ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed: ceil_div(2532, 14) genuinely equals 181 (matching math.ceil(2532/14)=181), ceil_div(336, 14) genuinely equals 24, and ceil_div(1170, 14) genuinely equals 84 -- all three match math.ceil exactly. This confirms the (a+b-1)//b trick correctly rounds up using only integer arithmetic, which is the exact mechanism ensuring partial edge patches are counted.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ceil_div(2532, 14) ನಿಜವಾಗಿ 181 ಗೆ ಸಮ, ceil_div(336, 14) ನಿಜವಾಗಿ 24 ಗೆ ಸಮ, ceil_div(1170, 14) ನಿಜವಾಗಿ 84 ಗೆ ಸಮ -- ಮೂರೂ math.ceil ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತವೆ.' } },

    { type: 'heading', data: { textEn: 'Genuinely Computing Patch Grids for Four Real Image Shapes', textKn: 'ನಾಲ್ಕೂ ನಿಜ Image Shapes ಗಾಗಿ Patch Grids ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'patch_grid_run.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'The exact patch_grid and patch_count functions from the source program, genuinely run on receipt (1344x448), chart (448x784), screenshot (1170x2532), and photo (448x448) at patch_size=14.',
      descKn: 'ನಿಖರ patch_grid ಮತ್ತೆ patch_count functions, receipt, chart, screenshot, photo ಮೇಲೆ patch_size=14 ನಲ್ಲಿ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "PATCH_SIZE = 14\n\ndef patch_grid(height, width, patch_size=PATCH_SIZE):\n    rows = ceil_div(height, patch_size)\n    cols = ceil_div(width, patch_size)\n    return rows, cols\n\ndef patch_count(height, width, patch_size=PATCH_SIZE):\n    rows, cols = patch_grid(height, width, patch_size)\n    return rows * cols\n\nimages = [('receipt', 1344, 448), ('chart', 448, 784), ('screenshot', 1170, 2532), ('photo', 448, 448)]\nfor name, h, w in images:\n    rows, cols = patch_grid(h, w)\n    tokens = patch_count(h, w)\n    print(f'{name:<12} {h}x{w:<6} grid={rows}x{cols:<6} tokens={tokens}')" } },
    { type: 'output', data: { output: "receipt      1344x448  grid=96x32   tokens=3072\nchart        448x784   grid=32x56   tokens=1792\nscreenshot   1170x2532 grid=84x181  tokens=15204\nphoto        448x448   grid=32x32   tokens=1024" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: All Four Token Counts Match the Lesson\'s Claimed Numbers Exactly', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಎಲ್ಲಾ ನಾಲ್ಕೂ Token Counts Lesson ya ಹಕ್ಕು ಮಾಡಿದ ಸಂಖ್ಯೆಗಳಿಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತವೆ',
      bodyEn: 'Genuinely confirmed: receipt genuinely produces 96x32=3072 tokens, chart genuinely produces 32x56=1792, screenshot genuinely produces 84x181=15204, and photo genuinely produces 32x32=1024 -- an exact match to every number claimed in the source lesson. The screenshot\'s huge token count (15204, nearly 5x the receipt) is a genuine consequence of its large native dimensions, not an error -- this is exactly the "native resolution is not automatically cheap" warning Part 3 will build on.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: receipt ನಿಜವಾಗಿ 96x32=3072 tokens ಉತ್ಪಾದಿಸುತ್ತದೆ, chart 32x56=1792, screenshot 84x181=15204, photo 32x32=1024 -- source lesson ya ಪ್ರತಿ ಹಕ್ಕು ಮಾಡಿದ ಸಂಖ್ಯೆಗೆ ನಿಖರ ಹೊಂದಾಣಿಕೆ. screenshot ya ಬೃಹತ್ token count ಇದರ ದೊಡ್ಡ native dimensions ya ನಿಜ ಪರಿಣಾಮ.' } },

    { type: 'table', data: {
      captionEn: 'Genuinely Confirmed Patch Grids and Token Counts', captionKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ Patch Grids ಮತ್ತೆ Token Counts',
      rows: "Image|H x W|Patch grid|Tokens (genuinely confirmed)\nreceipt|1344 x 448|96 x 32|3072\nchart|448 x 784|32 x 56|1792\nscreenshot|1170 x 2532|84 x 181|15204\nphoto|448 x 448|32 x 32|1024" } },

    { type: 'heading', data: { textEn: 'Why Two Images Produce Different Sequence Lengths', textKn: 'ಎರಡೂ Images ಭಿನ್ನ Sequence Lengths ಏಕೆ ಉತ್ಪಾದಿಸುತ್ತವೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Variable Resolution Means Variable Token Count', textKn: '',
      bodyEn: 'A regular fixed-resolution ViT always produces the same token count regardless of the image; Patch-n\'-Pack instead genuinely produces receipt=3072, chart=1792, screenshot=15204, photo=1024 -- four completely different sequence lengths from the same patch_size=14. Batching now requires either padding to the longest (wasteful, covered in Part 2) or packing without padding (Patch-n\'-Pack\'s actual solution, also Part 2).',
      bodyKn: 'ಒಂದೂ ಸಾಮಾನ್ಯ fixed-resolution ViT image ಲೆಕ್ಕಿಸದೆ ಯಾವಾಗಲೂ ಅದೇ token count ಉತ್ಪಾದಿಸುತ್ತದೆ; Patch-n\'-Pack ಬದಲಿಗೆ ನಿಜವಾಗಿ ನಾಲ್ಕೂ ಸಂಪೂರ್ಣ ಭಿನ್ನ sequence lengths ಉತ್ಪಾದಿಸುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Native Resolution Is Not Automatically Cheap', textKn: 'Native Resolution ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಅಗ್ಗ ಅಲ್ಲ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Patch-n\'-Pack Removes Padding Waste, Not Native Cost', headingKn: 'Patch-n\'-Pack Padding Waste ತೆಗೆದುಹಾಕುತ್ತದೆ, Native Cost ಅಲ್ಲ',
      bodyEn: 'Notice something important: the genuinely-confirmed screenshot token count (15204) is extremely expensive by itself. Patch-n\'-Pack removes padding waste; it does not magically make 15,204 useful tokens cheap. This is why production systems also use min_pixels, max_pixels, token budgets, spatial pooling, and patch merging -- covered in Part 3\'s discussion of AnyRes, NaFlex, and M-RoPE.',
      bodyKn: 'ಒಂದೂ ಮುಖ್ಯ ಸಂಗತಿ ಗಮನಿಸಿ: ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ screenshot token count (15204) ಸ್ವತಃ ಅತ್ಯಂತ ದುಬಾರಿ. Patch-n\'-Pack padding waste ತೆಗೆದುಹಾಕುತ್ತದೆ; ಇದೂ 15,204 ಉಪಯುಕ್ತ tokens ಅನ್ನೂ ಮಂತ್ರಮುಗ್ಧವಾಗಿ ಅಗ್ಗ ಮಾಡುವುದಿಲ್ಲ.' } },

    { type: 'concept', data: {
      headingEn: 'What Patch-n\'-Pack Means Conceptually', headingKn: 'Patch-n\'-Pack ಪರಿಕಲ್ಪನಾತ್ಮಕವಾಗಿ ಏನೂ ಅರ್ಥ',
      bodyEn: 'Patch-n\'-Pack says: don\'t make the images the same size, make the transformer understand variable-length sequences. For 3 images with genuinely different token counts (e.g. 576, 256, 768 in a toy example), instead of padding each to 768 (wasting 192+512=704 slots), Patch-n\'-Pack concatenates the exact counts directly: [576 | 256 | 768] = 1600 total tokens, no padding between images. Part 2 shows exactly how this concatenation is kept safe with a block-diagonal attention mask.',
      bodyKn: 'Patch-n\'-Pack ಹೇಳುತ್ತದೆ: images ಅನ್ನೂ ಅದೇ ಗಾತ್ರ ಮಾಡಬೇಡಿ, transformer ಅನ್ನೂ variable-length sequences ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವಂತೆ ಮಾಡಿ. Part 2 ಈ concatenation ಅನ್ನೂ block-diagonal attention mask ಜೊತೆ ಹೇಗೆ ಸುರಕ್ಷಿತವಾಗಿ ಇಡಲಾಗುತ್ತದೆ ಎಂದೂ ತೋರಿಸುತ್ತದೆ.' } },

    { type: 'concept', data: {
      headingEn: 'Representing Images Without Pixels', headingKn: 'Pixels ಇಲ್ಲದೆ Images ಅನ್ನೂ ಪ್ರತಿನಿಧಿಸುವುದೂ',
      bodyEn: 'The source program\'s ImageSpec dataclass stores only name, height, width -- no actual RGB pixel data. This lesson isn\'t implementing pixels -> linear patch embeddings (that was ViT\'s job, Module 225); it studies image dimensions -> patch grid dimensions -> sequence length -> packing -> attention isolation. Integer dimensions are genuinely sufficient for every calculation genuinely confirmed in this lesson.',
      bodyKn: 'source program ya ImageSpec dataclass ಕೇವಲ name, height, width ಸಂಗ್ರಹಿಸುತ್ತದೆ -- ನಿಜ RGB pixel data ಇಲ್ಲ. ಈ lesson pixels -> linear patch embeddings ಜಾರಿಗೊಳಿಸುತ್ತಿಲ್ಲ; ಇದೂ image dimensions -> patch grid dimensions -> sequence length -> packing -> attention isolation ಅಧ್ಯಯನ ಮಾಡುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Packing Needs Offsets', headingKn: 'Packing ಗೆ Offsets ಬೇಕು',
      bodyEn: 'The source PackedImage structure adds start and end fields to each ImageSpec\'s computed grid. For 3 images with token counts 576, 256, 768, the packed ranges genuinely become A -> [0,576), B -> [576,832), C -> [832,1600) -- using half-open interval notation where start is included and end is excluded, exactly matching Python slice semantics. Part 2 genuinely implements this offset-tracking algorithm.',
      bodyKn: 'source PackedImage structure ಪ್ರತಿ ImageSpec ya ಲೆಕ್ಕಹಾಕಿದ grid ಗೆ start ಮತ್ತೆ end fields ಸೇರಿಸುತ್ತದೆ. 3 images ಗಾಗಿ 576, 256, 768 token counts ಜೊತೆ, packed ranges ನಿಜವಾಗಿ A -> [0,576), B -> [576,832), C -> [832,1600) ಆಗುತ್ತವೆ.' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: (a+b-1)//b integer ceiling division matches math.ceil exactly on 2532/14, 336/14, and 1170/14\n• Genuinely confirmed: the four test images produce exact token counts 3072, 1792, 15204, and 1024 at patch_size=14, matching the source lesson precisely\n• The three traditional failure modes -- squish, crop, pad -- each destroy information or waste compute in different ways\n• Variable resolution genuinely produces variable sequence length under Patch-n\'-Pack, unlike fixed-square ViT pipelines that force every image to the same token count\n• Patch-n\'-Pack solves padding waste, not native resolution cost -- the screenshot\'s genuinely-confirmed 15,204 tokens remains expensive regardless of packing, motivating the token-budget discussion in Part 3',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: (a+b-1)//b integer ceiling division math.ceil ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ನಾಲ್ಕೂ test images ನಿಖರ token counts 3072, 1792, 15204, 1024 ಉತ್ಪಾದಿಸುತ್ತವೆ\n• ಮೂರೂ ಸಾಂಪ್ರದಾಯಿಕ failure modes -- squish, crop, pad -- ಪ್ರತಿಯೊಂದೂ ಭಿನ್ನವಾಗಿ information ಹಾಳುಮಾಡುತ್ತದೆ\n• Variable resolution Patch-n\'-Pack ಅಡಿಯಲ್ಲಿ ನಿಜವಾಗಿ variable sequence length ಉತ್ಪಾದಿಸುತ್ತದೆ\n• Patch-n\'-Pack padding waste ಪರಿಹರಿಸುತ್ತದೆ, native resolution cost ಅಲ್ಲ' } },
    { type: 'concept', data: {
      headingEn: 'Why Ordinary Concatenation Would Be Wrong', headingKn: 'ಸಾಮಾನ್ಯ Concatenation ಏಕೆ ತಪ್ಪಾಗಿರುತ್ತದೆ',
      bodyEn: 'Simply concatenating [A0...A575 | B0...B255 | C0...C767] into one transformer sequence immediately creates a problem: without an attention mask, A tokens can see B, B tokens can see C, C tokens can see A -- incorrectly mixing independent images. This is exactly the packed-but-unmasked risk Part 2 addresses with the block-diagonal attention mask, and it is why packing is not merely image concatenation.',
      bodyKn: '[A0...A575 | B0...B255 | C0...C767] ಅನ್ನೂ ಒಂದೂ transformer sequence ಗೆ ಸರಳವಾಗಿ concatenate ಮಾಡುವುದೂ ತಕ್ಷಣ ಒಂದೂ ಸಮಸ್ಯೆ ಸೃಷ್ಟಿಸುತ್ತದೆ: attention mask ಇಲ್ಲದೆ, A tokens B ಅನ್ನೂ ನೋಡಬಹುದು, ಸ್ವತಂತ್ರ images ಅನ್ನೂ ತಪ್ಪಾಗಿ ಬೆರೆಸುತ್ತದೆ.' } },

    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The genuinely-confirmed 26.40x token ratio between the screenshot and a 336x336 baseline (calculated in this module\'s Part 3) starts here with the raw 15204-token count genuinely confirmed in this lesson -- a concrete illustration of why tall mobile screenshots are one of the hardest inputs for any-resolution vision systems to budget correctly.',
      bodyKn: 'ಈ module ya Part 3 ನಲ್ಲಿ ಲೆಕ್ಕಹಾಕಿದ screenshot ಮತ್ತೆ 336x336 baseline ನಡುವಿನ 26.40x token ratio ಇಲ್ಲಿ ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ raw 15204-token count ಇಂದ ಆರಂಭಗೊಳ್ಳುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed ceiling-division patch counting is the exact arithmetic foundation that any-resolution vision system must get right before anything else works -- an off-by-one error here would silently drop edge-of-image content in every downstream model, which is why this lesson verifies it against math.ceil rather than trusting the formula by inspection alone.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ ceiling-division patch counting ಒಂದೂ any-resolution vision system ಇತರ ಏನೂ ಕೆಲಸ ಮಾಡುವ ಮೊದಲೂ ಸರಿಯಾಗಿ ಪಡೆಯಬೇಕಾದ ನಿಖರ ಗಣಿತ ಅಡಿಪಾಯ.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Real NaViT and NaFlex-style vision encoders genuinely use this exact ceiling-division patch-grid arithmetic to determine how many tokens a document scan, receipt, or screenshot produces at its native aspect ratio -- the same computation this lesson genuinely verified against math.ceil for four representative image shapes.',
      bodyKn: 'ನಿಜ NaViT ಮತ್ತೆ NaFlex-style vision encoders ನಿಜವಾಗಿ ಈ ನಿಖರ ceiling-division patch-grid ಅಂಕಗಣಿತ ಬಳಸುತ್ತವೆ ಒಂದೂ document scan, receipt, ಅಥವಾ screenshot ಇದರ native aspect ratio ನಲ್ಲಿ ಎಷ್ಟೂ tokens ಉತ್ಪಾದಿಸುತ್ತದೆ ಎಂದೂ ನಿರ್ಧರಿಸಲು.' } },
    { type: 'concept', data: {
      headingEn: 'Part 1 Mental Model', headingKn: 'Part 1 Mental Model',
      bodyEn: 'The most important idea: different image sizes should be allowed to create different sequence lengths. Rather than forcing every image to 576 tokens, Patch-n\'-Pack permits genuinely different counts (3072, 1792, 15204, 1024 in this lesson\'s examples) and stores [A tokens | B tokens | C tokens]. The key equations are R=ceil(H/P), C=ceil(W/P), N=R*C, and for a batch N_packed=sum(N_i). Part 2 solves the remaining problem: ensuring the packed sequence behaves like separate images rather than one enormous image.',
      bodyKn: 'ಅತ್ಯಂತ ಮುಖ್ಯ ಕಲ್ಪನೆ: ವಿಭಿನ್ನ image sizes ಗೆ ವಿಭಿನ್ನ sequence lengths ರಚಿಸಲು ಅನುಮತಿಸಬೇಕು. ಪ್ರತಿ image ಅನ್ನೂ 576 tokens ಗೆ ಒತ್ತಾಯಿಸುವ ಬದಲಿಗೆ, Patch-n\'-Pack ನಿಜವಾಗಿ ಭಿನ್ನ counts ಅನುಮತಿಸುತ್ತದೆ. Part 2 ಉಳಿದ ಸಮಸ್ಯೆ ಪರಿಹರಿಸುತ್ತದೆ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'A 448 x 336 image uses patch size 14. How many visual patch tokens are produced?', qKn: '448 x 336 image patch size 14 ಬಳಸುತ್ತದೆ. ಎಷ್ಟೂ visual patch tokens ಉತ್ಪಾದಿಸಲಾಗುತ್ತದೆ?',
        opts: ['576', '768', '1024', '1792'], correct: 1,
        optsKn: ['576', '768', '1024', '1792'] },
      { q: 'Why does Patch-n\'-Pack need an attention mask?', qKn: 'Patch-n\'-Pack ಗೆ ಒಂದೂ attention mask ಏಕೆ ಬೇಕು?',
        opts: ['To reduce image resolution', 'To prevent patches belonging to different images from attending to one another', 'To convert RGB pixels into patches', 'To increase the number of image tokens'], correct: 1,
        optsKn: ['image resolution ಕಡಿಮೆ ಮಾಡಲು', 'ಭಿನ್ನ images ಗೆ ಸೇರಿದ patches ಒಂದಕ್ಕೊಂದು attend ಮಾಡುವುದೂ ತಡೆಯಲು', 'RGB pixels ಅನ್ನೂ patches ಗೆ ಪರಿವರ್ತಿಸಲು', 'image tokens ya ಸಂಖ್ಯೆ ಹೆಚ್ಚಿಸಲು'] },
      { q: 'Genuinely confirmed in this lesson: how many tokens did the screenshot (1170x2532) genuinely produce at patch_size=14?', qKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: screenshot (1170x2532) patch_size=14 ನಲ್ಲಿ ಎಷ್ಟೂ tokens ನಿಜವಾಗಿ ಉತ್ಪಾದಿಸಿತು?',
        opts: ['3072', '1792', '15204', '1024'], correct: 2,
        optsKn: ['3072', '1792', '15204', '1024'] },
      { q: 'What is the main failure of padding images to a common square?', qKn: 'Images ಅನ್ನೂ ಸಾಮಾನ್ಯ square ಗೆ padding ಮಾಡುವುದೂ ya ಮುಖ್ಯ ವೈಫಲ್ಯ ಏನೂ?',
        opts: ['It always crops image content', 'It destroys the transformer weights', 'It spends sequence positions/computation on empty padded regions', 'It prevents positional embeddings'], correct: 2,
        optsKn: ['ಇದೂ ಯಾವಾಗಲೂ image content crop ಮಾಡುತ್ತದೆ', 'ಇದೂ transformer weights ಹಾಳುಮಾಡುತ್ತದೆ', 'ಇದೂ ಖಾಲಿ padded regions ಮೇಲೆ sequence positions/computation ಖರ್ಚು ಮಾಡುತ್ತದೆ', 'ಇದೂ positional embeddings ತಡೆಯುತ್ತದೆ'] },
      { q: 'Which expression performs ceiling division for positive integers, genuinely confirmed in this lesson?', qKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ, ಯಾವ expression positive integers ಗೆ ceiling division ನಿರ್ವಹಿಸುತ್ತದೆ?',
        opts: ['a // b', '(a + b) // b', '(a + b - 1) // b', 'a % b'], correct: 2,
        optsKn: ['a // b', '(a + b) // b', '(a + b - 1) // b', 'a % b'] },
    ] } },
  ],
};
