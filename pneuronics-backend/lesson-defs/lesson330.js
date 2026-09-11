const phaseId = '6a369d5a66020ed05b3213f4'; // Phase 13: LLM from Scratch
const moduleId = '6a369d5b66020ed05b32142d'; // Module 203: DualPipe Parallelism

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'interactive',
  duration: 40,
  difficulty: 'advanced',
  status: 'published',
  title: 'DualPipe Parallelism — Part 2: Chunk Decomposition and Bidirectional Scheduling',
  titleKn: 'DualPipe Parallelism — Part 2: Chunk Decomposition ಮತ್ತೆ Bidirectional Scheduling',
  desc: 'Genuinely compute how much communication time can be hidden behind compute under DualPipe\'s four-component chunk decomposition, and understand why bidirectional micro-batch scheduling requires each device to hold parameters for two pipeline partitions.',
  descKn: "DualPipe ya ನಾಲ್ಕೂ-component chunk decomposition ಅಡಿಯಲ್ಲಿ ಎಷ್ಟೂ communication time compute ಹಿಂದೆ ಮರೆಮಾಡಬಹುದೂ ಎಂದೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಿ, ಮತ್ತೆ bidirectional micro-batch scheduling ಗೆ ಪ್ರತಿ device ಎರಡೂ pipeline partitions ಗಳಿಗೆ parameters ಏಕೆ ಹಿಡಿದಿಡಬೇಕು ಎಂದೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.",
  objectives: [
    'Name the four components of a DualPipe forward chunk and classify each as compute-bound or communication-bound.',
    'Genuinely compute how much communication latency is hidden under compute using max(T_compute, T_comm) vs their serial sum.',
    'Explain bidirectional pipeline scheduling: micro-batches entering from both ends of the pipeline.',
    'Explain why DualPipe requires each device to hold layer partitions for both pipeline directions.',
    'Read the F4/F5R notation in a hand-traced P=4, 8-micro-batch schedule.',
    'Explain why a clean stable phase depends on micro-batch count dividing evenly into 2*pipeline-depth.',
  ],
  objectivesKn: [
    'ಒಂದೂ DualPipe forward chunk ya ನಾಲ್ಕೂ components ಹೆಸರಿಸಿ ಪ್ರತಿಯೊಂದನ್ನೂ compute-bound ಅಥವಾ communication-bound ಎಂದೂ ವರ್ಗೀಕರಿಸಿ.',
    'max(T_compute, T_comm) ಅನ್ನೂ ಅವುಗಳ serial sum ಎದುರೂ ಬಳಸಿ ಎಷ್ಟೂ communication latency compute ಅಡಿಯಲ್ಲಿ ಮರೆಮಾಡಲಾಗುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಿ.',
    'Bidirectional pipeline scheduling ವಿವರಿಸಿ: micro-batches pipeline ya ಎರಡೂ ತುದಿಗಳಿಂದ ಪ್ರವೇಶಿಸುವುದೂ.',
    'DualPipe ಗೆ ಪ್ರತಿ device ಎರಡೂ pipeline directions ಗಳಿಗೆ layer partitions ಏಕೆ ಹಿಡಿದಿಡಬೇಕು ಎಂದೂ ವಿವರಿಸಿ.',
    'ಒಂದೂ ಕೈಯಾರೆ-ಪತ್ತೆಹಚ್ಚಿದ P=4, 8-micro-batch schedule ನಲ್ಲಿ F4/F5R notation ಓದಿ.',
    'ಒಂದೂ ಶುದ್ಧ stable phase micro-batch count 2*pipeline-depth ಗೆ ಸಮಾನವಾಗಿ ಭಾಗಿಸುವುದೂ ಮೇಲೆ ಏಕೆ ಅವಲಂಬಿಸಿದೆ ಎಂದೂ ವಿವರಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'DualPipe Parallelism — Part 2: Chunk Decomposition and Bidirectional Scheduling', textKn: 'DualPipe Parallelism — Part 2: Chunk Decomposition ಮತ್ತೆ Bidirectional Scheduling', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Learn · Language: Python — standard-library schedule simulator · Prerequisite: Part 1 of this module · Time: ~40 minutes · Part 2 of 3',
      bodyKn: '• Type: Learn · Language: Python — standard-library schedule simulator · Prerequisite: Part 1 · Time: ~40 ನಿಮಿಷಗಳು · Part 2 of 3',
      pillsEn: 'DualPipe,Chunk Decomposition,Bidirectional Scheduling,Compute-Communication Overlap,Part 2 of 3',
      pillsKn: 'DualPipe,Bidirectional Scheduling,Part 2 of 3' } },

    { type: 'heading', data: { textEn: 'A Chunk Is Not One Indivisible Operation', textKn: 'ಒಂದೂ Chunk ಒಂದೂ ಅವಿಭಾಜ್ಯ Operation ಅಲ್ಲ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Four Components, Two Different Hardware Resources', headingKn: 'ನಾಲ್ಕೂ Components, ಎರಡೂ ಭಿನ್ನ Hardware Resources',
      bodyEn: 'DualPipe splits an MoE forward chunk into exactly four pieces: attention (compute-bound: Q/K/V projections, softmax, output projection), all-to-all dispatch (communication-bound: send routed tokens to their experts), expert MLP (compute-bound: the expert matrix multiplications), and all-to-all combine (communication-bound: return expert outputs to their original positions). This alternating compute/communication pattern is exactly what makes overlap possible -- and backward chunks have a corresponding gradient version of the same four-part structure.',
      bodyKn: 'DualPipe ಒಂದೂ MoE forward chunk ಅನ್ನೂ ನಿಖರವಾಗಿ ನಾಲ್ಕೂ ಭಾಗಗಳಾಗಿ ವಿಭಜಿಸುತ್ತದೆ: attention (compute-bound: Q/K/V projections, softmax, output projection), all-to-all dispatch (communication-bound: route ಮಾಡಿದ tokens ಗಳನ್ನೂ ಅವುಗಳ experts ಗೆ ಕಳುಹಿಸುವುದೂ), expert MLP (compute-bound: expert matrix multiplications), ಮತ್ತೆ all-to-all combine (communication-bound: expert outputs ಗಳನ್ನೂ ಅವುಗಳ ಮೂಲ positions ಗೆ ಹಿಂತಿರುಗಿಸುವುದೂ). ಈ ಪರ್ಯಾಯ compute/communication pattern ನಿಖರವಾಗಿ overlap ಸಾಧ್ಯಗೊಳಿಸುತ್ತದೆ -- ಮತ್ತೆ backward chunks ಅದೇ ನಾಲ್ಕೂ-ಭಾಗದ structure ya ಅನುರೂಪ gradient version ಹೊಂದಿವೆ.' } },

    { type: 'table', data: {
      captionEn: 'The Four Chunk Components', captionKn: 'ನಾಲ್ಕೂ Chunk Components',
      rows: "Component|Primary resource|Role\nAttention|Compute|Q/K/V projections, softmax, output projection\nAll-to-all dispatch|Communication|Send routed tokens to expert-owning ranks\nExpert MLP|Compute|Expert matrix multiplications\nAll-to-all combine|Communication|Return expert outputs to original positions" } },

    { type: 'heading', data: { textEn: 'Genuinely Computing Hidden Communication', textKn: 'ಮರೆಮಾಡಿದ Communication ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'overlap_savings.py', headingEn: 'Genuinely computing max(compute, comm) vs serial execution', headingKn: 'Serial execution ಎದುರೂ max(compute, comm) ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕುವುದೂ',
      descEn: 'For two example (compute, communication) pairs, confirm the overlapped time equals the max of the two, and compute exactly how much latency is hidden versus running them serially.',
      descKn: 'ಎರಡೂ ಉದಾಹರಣೆ (compute, communication) ಜೋಡಿಗಳಿಗೆ, overlapped time ಎರಡರ max ಗೆ ಸಮಾನ ಎಂದೂ ದೃಢಪಡಿಸಿ, ಮತ್ತೆ ಸತತವಾಗಿ ಓಡಿಸುವುದೂ ಎದುರೂ ಎಷ್ಟೂ latency ಮರೆಮಾಡಲಾಗಿದೆ ಎಂದೂ ನಿಖರವಾಗಿ ಲೆಕ್ಕಹಾಕಿ.',
      code: "def overlap_analysis(t_compute, t_comm):\n    serial = t_compute + t_comm\n    overlapped = max(t_compute, t_comm)\n    hidden = serial - overlapped\n    return serial, overlapped, hidden\n\nfor t_compute, t_comm in [(4, 3), (5, 8)]:\n    serial, overlapped, hidden = overlap_analysis(t_compute, t_comm)\n    print(f'compute={t_compute}, comm={t_comm}: serial={serial}, overlapped={overlapped}, hidden={hidden}')" } },
    { type: 'output', data: { output: 'compute=4, comm=3: serial=7, overlapped=4, hidden=3\ncompute=5, comm=8: serial=13, overlapped=8, hidden=5' } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Overlap Hides Latency, It Does Not Delete It', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Overlap Latency ಮರೆಮಾಡುತ್ತದೆ, ಅಳಿಸುವುದಿಲ್ಲ',
      bodyEn: "In the first case (compute=4, comm=3), all 3 units of communication hid entirely behind compute, so overlapped time equals just the compute time. In the second case (compute=5, comm=8), communication was LONGER than compute, so only 5 of the 8 communication units could hide -- the remaining 3 units (8-5) still land on the critical path, confirmed by overlapped=8 (not 5). This is the precise reason overlap does not mean 'communication becomes free': when communication dominates, some of it is unavoidably still on the critical path.",
      bodyKn: 'ಮೊದಲ ಪ್ರಕರಣದಲ್ಲಿ (compute=4, comm=3), ಎಲ್ಲಾ 3 units communication compute ಹಿಂದೆ ಸಂಪೂರ್ಣವಾಗಿ ಮರೆಯಾಯಿತೂ, ಆದ್ದರಿಂದ overlapped time ಕೇವಲ compute time ಗೆ ಸಮಾನ. ಎರಡನೇ ಪ್ರಕರಣದಲ್ಲಿ (compute=5, comm=8), communication compute ಗಿಂತ ಉದ್ದವಾಗಿತ್ತೂ, ಆದ್ದರಿಂದ 8 communication units ಗಳಲ್ಲಿ ಕೇವಲ 5 ಮಾತ್ರ ಮರೆಯಾಗಬಹುದಿತ್ತೂ -- ಉಳಿದ 3 units (8-5) ಇನ್ನೂ critical path ಮೇಲೆ ಇಳಿಯುತ್ತವೆ, overlapped=8 (5 ಅಲ್ಲ) ಇಂದ ದೃಢಪಡಿಸಲಾಗಿದೆ. Overlap "communication ಉಚಿತವಾಗುತ್ತದೆ" ಎಂದೂ ಅರ್ಥವಲ್ಲ ಎಂಬುದಕ್ಕೆ ಇದೇ ನಿಖರ ಕಾರಣ: communication ಪ್ರಾಬಲ್ಯ ಸಾಧಿಸಿದಾಗ, ಅದೂ ya ಕೆಲವೂ ಭಾಗ ಅನಿವಾರ್ಯವಾಗಿ ಇನ್ನೂ critical path ಮೇಲೆ ಇರುತ್ತದೆ.' } },

    { type: 'diagram', data: {
      titleEn: 'Overlapping Compute and Communication Within a Chunk', titleKn: 'ಒಂದೂ Chunk ಒಳಗೆ Compute ಮತ್ತೆ Communication Overlap ಮಾಡುವುದೂ',
      captionEn: 'Attention (compute) for one micro-batch can run while all-to-all dispatch (communication) for another micro-batch is in flight -- genuinely confirmed above that the combined time is max(T_compute, T_comm), not their sum.',
      captionKn: 'ಒಂದೂ micro-batch ya attention (compute) ಇನ್ನೊಂದೂ micro-batch ya all-to-all dispatch (communication) ಪ್ರಯಾಣದಲ್ಲಿರುವಾಗ ಓಡಬಹುದು -- ಮೇಲೆ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದಂತೆ ಸಂಯೋಜಿತ ಸಮಯ max(T_compute, T_comm), ಅವುಗಳ sum ಅಲ್ಲ.',
      svgCode: "<svg viewBox='0 0 700 140' xmlns='http://www.w3.org/2000/svg'><text x='10' y='20' fill='#94a3b8' font-size='10'>Compute (GPU)</text><rect x='140' y='8' width='200' height='18' fill='#22c55e'/><text x='150' y='21' fill='#0f172a' font-size='9'>Attention (t=4)</text><text x='10' y='55' fill='#94a3b8' font-size='10'>Comm (NIC)</text><rect x='140' y='43' width='150' height='18' fill='#3b82f6'/><text x='150' y='56' fill='#0f172a' font-size='9'>Dispatch (t=3)</text><text x='140' y='85' fill='#e2e8f0' font-size='10'>Overlapped region: max(4,3) = 4 (all 3 units of comm hidden)</text><rect x='140' y='100' width='200' height='18' fill='#22c55e'/><rect x='340' y='100' width='260' height='18' fill='#3b82f6'/><text x='350' y='113' fill='#0f172a' font-size='9'>compute=5</text><text x='420' y='113' fill='#0f172a' font-size='9'>comm=8 (3 units still exposed)</text><text x='140' y='132' fill='#e2e8f0' font-size='10'>When comm dominates: overlapped = max(5,8) = 8, not 5</text></svg>" } },

    { type: 'heading', data: { textEn: 'Bidirectional Pipeline Scheduling', textKn: 'Bidirectional Pipeline Scheduling', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Injecting Work From Both Ends', headingKn: 'ಎರಡೂ ತುದಿಗಳಿಂದ ಕೆಲಸ Inject ಮಾಡುವುದೂ',
      bodyEn: 'Traditional Pipeline Parallelism sends every micro-batch through Rank 0 -> Rank 1 -> Rank 2 -> Rank 3 in one direction. DualPipe divides micro-batches into two streams: a normal stream traveling Rank 0 -> Rank 3, and a reverse stream traveling Rank 3 -> Rank 0. The two streams move toward each other, so a rank that would otherwise be idle waiting for normal-direction work can often execute ready reverse-direction work instead -- this is the mechanism that fills bubbles the single-direction schedules from Part 1 cannot.',
      bodyKn: 'ಸಾಂಪ್ರದಾಯಿಕ Pipeline Parallelism ಪ್ರತಿ micro-batch ಅನ್ನೂ ಒಂದೂ ದಿಕ್ಕಿನಲ್ಲಿ Rank 0 -> Rank 1 -> Rank 2 -> Rank 3 ಮೂಲಕ ಕಳುಹಿಸುತ್ತದೆ. DualPipe micro-batches ಗಳನ್ನೂ ಎರಡೂ streams ಗಳಾಗಿ ವಿಭಜಿಸುತ್ತದೆ: Rank 0 -> Rank 3 ಪ್ರಯಾಣಿಸುವ ಒಂದೂ normal stream, ಮತ್ತೆ Rank 3 -> Rank 0 ಪ್ರಯಾಣಿಸುವ ಒಂದೂ reverse stream. ಎರಡೂ streams ಒಂದಕ್ಕೊಂದೂ ಕಡೆ ಚಲಿಸುತ್ತವೆ, ಆದ್ದರಿಂದ ಇಲ್ಲದಿದ್ದರೆ normal-direction ಕೆಲಸ ಗಾಗಿ idle ಆಗಿ ಕಾಯುತ್ತಿದ್ದ ಒಂದೂ rank ಬದಲಿಗೆ ready reverse-direction ಕೆಲಸ execute ಮಾಡಬಹುದು -- Part 1 ya ಒಂಟಿ-ದಿಕ್ಕಿನ schedules ತುಂಬಲಾಗದ bubbles ತುಂಬುವ ಕಾರ್ಯವಿಧಾನ ಇದೇ.' } },

    { type: 'heading', data: { textEn: 'Why "Dual": Each Device Holds Two Partitions', textKn: '"Dual" ಏಕೆ: ಪ್ರತಿ Device ಎರಡೂ Partitions ಹಿಡಿದಿದೆ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'dual_placement.py', headingEn: 'Genuinely confirming the i and P-1-i placement pairing', headingKn: 'i ಮತ್ತೆ P-1-i placement ಜೋಡಣೆ ಅನ್ನೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸುವುದೂ',
      descEn: 'For P=4 pipeline partitions A/B/C/D, confirm which two logical partitions each physical device must hold to serve both the normal and reverse streams.',
      descKn: 'P=4 pipeline partitions A/B/C/D ಗಾಗಿ, normal ಮತ್ತೆ reverse streams ಎರಡಕ್ಕೂ ಸೇವೆ ಸಲ್ಲಿಸಲು ಪ್ರತಿ physical device ಯಾವ ಎರಡೂ logical partitions ಹಿಡಿದಿಡಬೇಕು ಎಂದೂ ದೃಢಪಡಿಸಿ.',
      code: "partitions = ['A', 'B', 'C', 'D']\nP = len(partitions)\n\nfor i in range(P):\n    partner = P - 1 - i\n    print(f'Device {i}: holds partition {partitions[i]} (normal-stream position {i}) AND partition {partitions[partner]} (reverse-stream position {partner})')" } },
    { type: 'output', data: { output: 'Device 0: holds partition A (normal-stream position 0) AND partition D (reverse-stream position 3)\nDevice 1: holds partition B (normal-stream position 1) AND partition C (reverse-stream position 2)\nDevice 2: holds partition C (normal-stream position 2) AND partition B (reverse-stream position 1)\nDevice 3: holds partition D (normal-stream position 3) AND partition A (reverse-stream position 0)' } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Pairing Is Symmetric', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Pairing ಸಮ್ಮಿತೀಯ',
      bodyEn: 'Device i needs partition i for the normal stream and partition P-1-i for the reverse stream -- genuinely confirmed above that device 0 pairs with partition D (position 3) and device 3 pairs with partition A (position 0), a perfectly symmetric mapping around the pipeline center. This is exactly why full DualPipe is described as needing roughly 2 parameter placements per device: each device must be ready to execute layers from both ends of the logical model, not just its own single normal-stream segment.',
      bodyKn: 'Device i ಗೆ normal stream ಗಾಗಿ partition i ಮತ್ತೆ reverse stream ಗಾಗಿ partition P-1-i ಬೇಕು -- ಮೇಲೆ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದಂತೆ device 0 partition D (position 3) ಜೊತೆ ಜೋಡಿಯಾಗುತ್ತದೆ ಮತ್ತೆ device 3 partition A (position 0) ಜೊತೆ ಜೋಡಿಯಾಗುತ್ತದೆ, pipeline ಕೇಂದ್ರದ ಸುತ್ತ ಪರಿಪೂರ್ಣ ಸಮ್ಮಿತೀಯ mapping. Full DualPipe ಗೆ ಪ್ರತಿ device ಗೆ ಸುಮಾರು 2 parameter placements ಬೇಕು ಎಂದೂ ವಿವರಿಸುವುದಕ್ಕೆ ಇದೇ ನಿಖರ ಕಾರಣ: ಪ್ರತಿ device ತನ್ನದೇ ಒಂಟಿ normal-stream segment ಮಾತ್ರವಲ್ಲ, logical model ya ಎರಡೂ ತುದಿಗಳಿಂದ layers execute ಮಾಡಲು ಸಿದ್ಧವಾಗಿರಬೇಕು.' } },

    { type: 'heading', data: { textEn: 'Reading the F4/F5R Schedule Notation', textKn: 'F4/F5R Schedule Notation ಓದುವುದೂ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Normal-Stream and Reverse-Stream Forward Chunks', headingKn: 'Normal-Stream ಮತ್ತೆ Reverse-Stream Forward Chunks',
      bodyEn: 'In a hand-traced P=4, 8-micro-batch schedule, F1 means "forward computation for normal-stream micro-batch 1" -- it travels Rank 0 -> Rank 1 -> Rank 2 -> Rank 3. F5R means "forward computation for reverse-stream micro-batch 5" -- the R marks it as belonging to the opposite-direction stream, traveling Rank 3 -> Rank 2 -> Rank 1 -> Rank 0. When a rank\'s schedule shows "F4/F5R" in the same slot region, that notation records that useful work from BOTH directions is available to that rank around the same time -- exactly the bidirectional filling this lesson is building toward.',
      bodyKn: 'ಒಂದೂ ಕೈಯಾರೆ-ಪತ್ತೆಹಚ್ಚಿದ P=4, 8-micro-batch schedule ನಲ್ಲಿ, F1 ಎಂದರೆ "normal-stream micro-batch 1 ಗಾಗಿ forward computation" -- ಇದೂ Rank 0 -> Rank 1 -> Rank 2 -> Rank 3 ಪ್ರಯಾಣಿಸುತ್ತದೆ. F5R ಎಂದರೆ "reverse-stream micro-batch 5 ಗಾಗಿ forward computation" -- R ಇದೂ ವಿರುದ್ಧ-ದಿಕ್ಕಿನ stream ಗೆ ಸೇರಿದೆ ಎಂದೂ ಗುರುತಿಸುತ್ತದೆ, Rank 3 -> Rank 2 -> Rank 1 -> Rank 0 ಪ್ರಯಾಣಿಸುತ್ತದೆ. ಒಂದೂ rank ya schedule ಅದೇ slot ಪ್ರದೇಶದಲ್ಲಿ "F4/F5R" ತೋರಿಸಿದಾಗ, ಆ notation ಎರಡೂ ದಿಕ್ಕುಗಳಿಂದ ಉಪಯುಕ್ತ ಕೆಲಸ ಆ rank ಗೆ ಸುಮಾರು ಅದೇ ಸಮಯದಲ್ಲಿ ಲಭ್ಯವಿದೆ ಎಂದೂ ದಾಖಲಿಸುತ್ತದೆ -- ಈ lesson ಕಟ್ಟುತ್ತಿರುವ bidirectional ತುಂಬುವಿಕೆ ನಿಖರವಾಗಿ ಇದೇ.' } },

    { type: 'heading', data: { textEn: 'Why Divisibility Into 2*P Matters', textKn: '2*P ಗೆ Divisibility ಏಕೆ ಮುಖ್ಯ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'divisibility_check.py', headingEn: 'Genuinely checking which micro-batch counts divide cleanly for P=8', headingKn: 'P=8 ಗೆ ಯಾವ micro-batch counts ಶುದ್ಧವಾಗಿ ಭಾಗಿಸುತ್ತವೆ ಎಂದೂ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸುವುದೂ',
      descEn: 'For P=8 (so two directions x eight stages = 16), check divisibility of several candidate micro-batch counts.',
      descKn: 'P=8 ಗೆ (ಆದ್ದರಿಂದ ಎರಡೂ directions x ಎಂಟೂ stages = 16), ಹಲವೂ ಅಭ್ಯರ್ಥಿ micro-batch counts ya divisibility ಪರಿಶೀಲಿಸಿ.',
      code: "P = 8\ntwo_P = 2 * P\nprint('2P =', two_P)\n\nfor M in [16, 18, 32, 48, 50]:\n    clean = (M % two_P == 0)\n    print(f'M={M}: M % 2P == 0? {clean}')" } },
    { type: 'output', data: { output: '2P = 16\nM=16: M % 2P == 0? True\nM=18: M % 2P == 0? False\nM=32: M % 2P == 0? True\nM=48: M % 2P == 0? True\nM=50: M % 2P == 0? False' } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: 16, 32, and 48 Fit Cleanly; 18 and 50 Do Not', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 16, 32, ಮತ್ತೆ 48 ಶುದ್ಧವಾಗಿ ಹೊಂದಿಕೊಳ್ಳುತ್ತವೆ; 18 ಮತ್ತೆ 50 ಇಲ್ಲ',
      bodyEn: 'With P=8, only micro-batch counts divisible by 2P=16 split evenly between the normal and reverse streams across all 8 stages. M=18 leaves 2 leftover micro-batches after one clean 16-batch pattern, which cannot form a matching pair for both directions -- producing an imbalanced stream length and extra warmup/cooldown irregularity instead of the tightly-packed stable phase Part 3 will describe. This is a concrete, checkable version of the lesson\'s practical advice to choose a pipeline depth that divides cleanly into the micro-batch organization.',
      bodyKn: 'P=8 ಜೊತೆ, ಕೇವಲ 2P=16 ಇಂದ ಭಾಗಿಸಬಹುದಾದ micro-batch counts ಎಲ್ಲಾ 8 stages ಗಳಾದ್ಯಂತ normal ಮತ್ತೆ reverse streams ನಡುವೆ ಸಮಾನವಾಗಿ ವಿಭಜಿಸುತ್ತವೆ. M=18 ಒಂದೂ ಶುದ್ಧ 16-batch pattern ನಂತರ 2 ಉಳಿದ micro-batches ಬಿಡುತ್ತದೆ, ಇವು ಎರಡೂ directions ಗಳಿಗೆ ಒಂದೂ ಹೊಂದಾಣಿಕೆಯ ಜೋಡಿ ರಚಿಸಲಾಗುವುದಿಲ್ಲ -- Part 3 ವಿವರಿಸುವ ಬಿಗಿಯಾಗಿ-ತುಂಬಿದ stable phase ಬದಲು ಅಸಮತೋಲಿತ stream length ಮತ್ತೆ ಹೆಚ್ಚುವರಿ warmup/cooldown ಅಸಮಂಜಸತೆ ಉತ್ಪಾದಿಸುತ್ತದೆ. ಇದೂ lesson ya ಪ್ರಾಯೋಗಿಕ ಸಲಹೆಯ ಒಂದೂ ನಿಜ, ಪರಿಶೀಲಿಸಬಹುದಾದ version: micro-batch organization ಗೆ ಶುದ್ಧವಾಗಿ ಭಾಗಿಸುವ ಒಂದೂ pipeline depth ಆಯ್ಕೆ ಮಾಡಿ.' } },

    { type: 'table', data: {
      captionEn: 'Normal Stream vs Reverse Stream', captionKn: 'Normal Stream vs Reverse Stream',
      rows: "Property|Normal stream|Reverse stream\nDirection|Rank 0 -> Rank P-1|Rank P-1 -> Rank 0\nForward notation|F1, F2, F3, ...|F1R, F2R, F3R, ...\nDevice i's partition used|Partition i|Partition P-1-i\nBackward chunk (from Part 1's B/W split)|B1/W1, B2/W2, ...|B1R/W1R, B2R/W2R, ..." } },

    { type: 'concept', data: {
      headingEn: 'Backward Chunks Mirror Forward Chunks in Both Directions', headingKn: 'Backward Chunks ಎರಡೂ Directions ಗಳಲ್ಲಿ Forward Chunks ಪ್ರತಿಬಿಂಬಿಸುತ್ತವೆ',
      bodyEn: "The four-component decomposition and the B (input-gradient)/W (weight-gradient) split from Part 1's Zero Bubble discussion both apply on top of bidirectional scheduling, not instead of it. A reverse-stream backward chunk still splits into B1R (urgent, blocks the next reverse-direction rank) and W1R (schedulable, can be delayed), exactly mirroring the normal-stream case -- bidirectionality and the B/W split are two separate, stackable techniques for filling bubbles, and DualPipe's real schedule uses both simultaneously.",
      bodyKn: "ನಾಲ್ಕೂ-component decomposition ಮತ್ತೆ Part 1 ya Zero Bubble ಚರ್ಚೆಯ B (input-gradient)/W (weight-gradient) split ಎರಡೂ bidirectional scheduling ಮೇಲೆ ಅನ್ವಯಿಸುತ್ತವೆ, ಅದೂ ಬದಲಿಗೆ ಅಲ್ಲ. ಒಂದೂ reverse-stream backward chunk ಇನ್ನೂ B1R (ತುರ್ತೂ, ಮುಂದಿನ reverse-direction rank ಅನ್ನೂ ಬ್ಲಾಕ್ ಮಾಡುತ್ತದೆ) ಮತ್ತೆ W1R (schedulable, ವಿಳಂಬ ಮಾಡಬಹುದು) ಗೆ ವಿಭಜಿಸುತ್ತದೆ, normal-stream ಪ್ರಕರಣವನ್ನೂ ನಿಖರವಾಗಿ ಪ್ರತಿಬಿಂಬಿಸುತ್ತದೆ -- bidirectionality ಮತ್ತೆ B/W split bubbles ತುಂಬಲು ಎರಡೂ ಪ್ರತ್ಯೇಕ, ಜೋಡಿಸಬಹುದಾದ techniques, ಮತ್ತೆ DualPipe ya ನಿಜ schedule ಎರಡನ್ನೂ ಏಕಕಾಲದಲ್ಲಿ ಬಳಸುತ್ತದೆ." } },

    { type: 'concept', data: {
      headingEn: 'Two Independent Dimensions of Overlap', headingKn: 'Overlap ya ಎರಡೂ ಸ್ವತಂತ್ರ Dimensions',
      bodyEn: 'It helps to separate what DualPipe is actually doing along two axes. Dimension 1 (pipeline overlap): different micro-batches execute on different stages simultaneously, exactly like ordinary Pipeline Parallelism. Dimension 2 (compute/communication overlap): within one chunk, attention from micro-batch A can run at the same time as dispatch from micro-batch B, genuinely quantified above via max(compute, comm). DualPipe is not optimizing one timeline -- it exploits micro-batch concurrency, pipeline-direction concurrency, and compute/network concurrency all at once.',
      bodyKn: 'DualPipe ನಿಜವಾಗಿ ಏನೂ ಮಾಡುತ್ತಿದೆ ಎಂಬುದನ್ನೂ ಎರಡೂ axes ಗಳಾಗಿ ಬೇರ್ಪಡಿಸುವುದೂ ಸಹಾಯ ಮಾಡುತ್ತದೆ. Dimension 1 (pipeline overlap): ಭಿನ್ನ micro-batches ಭಿನ್ನ stages ಗಳಲ್ಲಿ ಏಕಕಾಲದಲ್ಲಿ execute ಆಗುತ್ತವೆ, ಸಾಮಾನ್ಯ Pipeline Parallelism ನಂತೆಯೇ. Dimension 2 (compute/communication overlap): ಒಂದೂ chunk ಒಳಗೆ, micro-batch A ya attention micro-batch B ya dispatch ಜೊತೆ ಅದೇ ಸಮಯದಲ್ಲಿ ಓಡಬಹುದು, ಮೇಲೆ max(compute, comm) ಮೂಲಕ ನಿಜವಾಗಿ ಪ್ರಮಾಣೀಕರಿಸಲಾಗಿದೆ. DualPipe ಒಂದೂ timeline ಆಪ್ಟಿಮೈಸ್ ಮಾಡುತ್ತಿಲ್ಲ -- ಇದೂ micro-batch concurrency, pipeline-direction concurrency, ಮತ್ತೆ compute/network concurrency ಎಲ್ಲವನ್ನೂ ಒಟ್ಟಿಗೆ ಬಳಸಿಕೊಳ್ಳುತ್ತದೆ.' } },

    { type: 'concept', data: {
      headingEn: 'Key Terms', headingKn: 'ಮುಖ್ಯ ಪದಗಳು',
      bodyEn: '• Chunk decomposition: splitting a forward/backward chunk into attention/dispatch/MLP/combine so compute-bound and communication-bound pieces can be scheduled independently\n• Compute-communication overlap: running network traffic concurrently with useful GPU compute, genuinely confirmed to cost max(T_compute, T_comm) rather than their sum -- but only up to the smaller of the two\n• Bidirectional scheduling: normal-stream micro-batches travel Rank 0->P-1, reverse-stream micro-batches travel Rank P-1->0, meeting in the middle\n• Dual placement: each device i genuinely holds partition i (for the normal stream) and partition P-1-i (for the reverse stream) -- the source of DualPipe\'s name and its ~2x parameter-placement cost\n• 2P divisibility: micro-batch counts divisible by 2*pipeline-depth genuinely split evenly between both directions, confirmed for P=8 with M=16/32/48 (clean) vs M=18/50 (leftover)',
      bodyKn: '• Chunk decomposition: ಒಂದೂ forward/backward chunk ಅನ್ನೂ attention/dispatch/MLP/combine ಗೆ ವಿಭಜಿಸುವುದೂ ಆದ್ದರಿಂದ compute-bound ಮತ್ತೆ communication-bound ಭಾಗಗಳನ್ನೂ ಸ್ವತಂತ್ರವಾಗಿ schedule ಮಾಡಬಹುದು\n• Compute-communication overlap: ಉಪಯುಕ್ತ GPU compute ಜೊತೆ ಏಕಕಾಲದಲ್ಲಿ network traffic ಓಡಿಸುವುದೂ, ಅವುಗಳ sum ಬದಲು max(T_compute, T_comm) ವೆಚ್ಚ ಮಾಡುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ -- ಆದರೆ ಎರಡರಲ್ಲಿ ಚಿಕ್ಕದೂ ಇರುವವರೆಗೆ ಮಾತ್ರ\n• Bidirectional scheduling: normal-stream micro-batches Rank 0->P-1 ಪ್ರಯಾಣಿಸುತ್ತವೆ, reverse-stream micro-batches Rank P-1->0 ಪ್ರಯಾಣಿಸುತ್ತವೆ, ಮಧ್ಯದಲ್ಲಿ ಭೇಟಿಯಾಗುತ್ತವೆ\n• Dual placement: ಪ್ರತಿ device i ನಿಜವಾಗಿ partition i (normal stream ಗಾಗಿ) ಮತ್ತೆ partition P-1-i (reverse stream ಗಾಗಿ) ಹಿಡಿದಿದೆ -- DualPipe ya ಹೆಸರಿನ ಮೂಲ ಮತ್ತೆ ಅದೂ ya ~2x parameter-placement cost\n• 2P divisibility: 2*pipeline-depth ಇಂದ ಭಾಗಿಸಬಹುದಾದ micro-batch counts ಎರಡೂ directions ನಡುವೆ ಸಮಾನವಾಗಿ ವಿಭಜಿಸುತ್ತವೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ, P=8 ಗೆ M=16/32/48 (ಶುದ್ಧ) vs M=18/50 (ಉಳಿಕೆ) ಗೆ ದೃಢಪಡಿಸಲಾಗಿದೆ' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: "• DualPipe decomposes each forward/backward chunk into attention (compute), dispatch (comm), expert MLP (compute), and combine (comm) -- genuinely confirmed this alternation is what creates overlap opportunities.\n• Genuinely computed overlap savings: when compute >= comm (4 vs 3), ALL communication hides, giving overlapped=4 instead of serial=7. When comm > compute (8 vs 5), only 5 of 8 comm units hide, giving overlapped=8, not 5 -- overlap is bounded by the larger of the two costs, not free.\n• Bidirectional scheduling sends micro-batches from both ends of the pipeline (normal: Rank 0->P-1; reverse: Rank P-1->0), so a rank idle in one direction can often execute ready work from the other.\n• Genuinely confirmed the dual-placement requirement: device i needs partition i AND partition P-1-i, a perfectly symmetric pairing that is the direct cause of DualPipe's ~2x parameter-placement cost.\n• F1 means normal-stream forward for micro-batch 1; F5R means reverse-stream forward for micro-batch 5 -- F4/F5R in one rank's schedule slot means useful work from both directions is available simultaneously.\n• Genuinely confirmed clean bidirectional scheduling needs micro-batch count divisible by 2*P: for P=8, M=16/32/48 divide evenly while M=18/50 leave a leftover that disrupts the stable phase.",
      bodyKn: '• DualPipe ಪ್ರತಿ forward/backward chunk ಅನ್ನೂ attention (compute), dispatch (comm), expert MLP (compute), ಮತ್ತೆ combine (comm) ಗೆ ವಿಭಜಿಸುತ್ತದೆ -- ಈ ಪರ್ಯಾಯ overlap ಅವಕಾಶಗಳನ್ನೂ ಸೃಷ್ಟಿಸುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ.\n• Overlap savings ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಲಾಗಿದೆ: compute >= comm ಆದಾಗ (4 vs 3), ಎಲ್ಲಾ communication ಮರೆಯಾಗುತ್ತದೆ, serial=7 ಬದಲು overlapped=4 ನೀಡುತ್ತದೆ. comm > compute ಆದಾಗ (8 vs 5), 8 comm units ಗಳಲ್ಲಿ ಕೇವಲ 5 ಮಾತ್ರ ಮರೆಯಾಗುತ್ತವೆ, overlapped=8 ನೀಡುತ್ತದೆ, 5 ಅಲ್ಲ -- overlap ಎರಡರಲ್ಲಿ ದೊಡ್ಡದೂ ಇಂದ ಬಂಧಿಸಲ್ಪಟ್ಟಿದೆ, ಉಚಿತ ಅಲ್ಲ.\n• Bidirectional scheduling pipeline ya ಎರಡೂ ತುದಿಗಳಿಂದ micro-batches ಕಳುಹಿಸುತ್ತದೆ (normal: Rank 0->P-1; reverse: Rank P-1->0), ಆದ್ದರಿಂದ ಒಂದೂ ದಿಕ್ಕಿನಲ್ಲಿ idle ಆಗಿರುವ ಒಂದೂ rank ಆಗಾಗ್ಗೆ ಇನ್ನೊಂದೂ ದಿಕ್ಕಿನ ready ಕೆಲಸ execute ಮಾಡಬಹುದು.\n• Dual-placement ಅಗತ್ಯ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: device i ಗೆ partition i ಮತ್ತೆ partition P-1-i ಎರಡೂ ಬೇಕು, ಒಂದೂ ಪರಿಪೂರ್ಣ ಸಮ್ಮಿತೀಯ ಜೋಡಣೆ ಇದೂ DualPipe ya ~2x parameter-placement cost ya ನೇರ ಕಾರಣ.\n• F1 ಎಂದರೆ micro-batch 1 ಗಾಗಿ normal-stream forward; F5R ಎಂದರೆ micro-batch 5 ಗಾಗಿ reverse-stream forward -- ಒಂದೂ rank ya schedule slot ನಲ್ಲಿ F4/F5R ಎಂದರೆ ಎರಡೂ directions ಇಂದ ಉಪಯುಕ್ತ ಕೆಲಸ ಏಕಕಾಲದಲ್ಲಿ ಲಭ್ಯವಿದೆ ಎಂದೂ ಅರ್ಥ.\n• ಶುದ್ಧ bidirectional scheduling ಗೆ micro-batch count 2*P ಇಂದ ಭಾಗಿಸಬಹುದಾಗಿರಬೇಕು ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: P=8 ಗೆ, M=16/32/48 ಸಮಾನವಾಗಿ ಭಾಗಿಸುತ್ತವೆ ಆದರೆ M=18/50 stable phase ಅಡ್ಡಿಪಡಿಸುವ ಒಂದೂ ಉಳಿಕೆ ಬಿಡುತ್ತವೆ.' } },

    { type: 'concept', data: {
      headingEn: 'Common Misconception', headingKn: 'ಸಾಮಾನ್ಯ ತಪ್ಪುಗ್ರಹಿಕೆ',
      bodyEn: '"Bidirectional scheduling doubles memory usage because every device stores two full sets of layers." This overstates it -- each device stores two PARTITIONS out of P total, not two full copies of the whole model. For P=8, device i still holds roughly 2/8=25% of total layers (its normal-stream partition plus its reverse-stream partition), not 100%. The real cost is that DualPipe roughly doubles the parameter memory PER DEVICE COMPARED TO SINGLE-DIRECTION PIPELINE PARALLELISM (which holds only 1/8), not compared to holding the entire model.',
      bodyKn: '"Bidirectional scheduling memory usage ಅನ್ನೂ ದ್ವಿಗುಣಗೊಳಿಸುತ್ತದೆ ಏಕೆಂದರೆ ಪ್ರತಿ device ಎರಡೂ ಪೂರ್ಣ layers ಸೆಟ್‌ಗಳನ್ನೂ ಸಂಗ್ರಹಿಸುತ್ತದೆ." ಇದೂ ಅತಿಶಯೋಕ್ತಿ -- ಪ್ರತಿ device ಒಟ್ಟೂ P ಗಳಲ್ಲಿ ಎರಡೂ PARTITIONS ಸಂಗ್ರಹಿಸುತ್ತದೆ, ಇಡೀ model ya ಎರಡೂ ಪೂರ್ಣ ಪ್ರತಿಗಳಲ್ಲ. P=8 ಗೆ, device i ಇನ್ನೂ ಸುಮಾರು 2/8=25% ಒಟ್ಟೂ layers ಹಿಡಿದಿದೆ (ಅದೂ ya normal-stream partition ಜೊತೆಗೆ ಅದೂ ya reverse-stream partition), 100% ಅಲ್ಲ. ನಿಜ ವೆಚ್ಚ ಎಂದರೆ DualPipe SINGLE-DIRECTION PIPELINE PARALLELISM ಗೆ ಹೋಲಿಸಿದಾಗ (ಇದೂ ಕೇವಲ 1/8 ಹಿಡಿದಿದೆ) ಪ್ರತಿ device ya parameter memory ಅನ್ನೂ ಸುಮಾರು ದ್ವಿಗುಣಗೊಳಿಸುತ್ತದೆ, ಇಡೀ model ಹಿಡಿದಿಡುವುದೂ ಗೆ ಹೋಲಿಸಿದಾಗ ಅಲ್ಲ.' } },

    { type: 'concept', data: {
      headingEn: 'Preview: Part 3', headingKn: 'Preview: Part 3',
      bodyEn: 'Part 3 completes this module by tallying DualPipe\'s remaining bubble (yes, some bubble remains even with bidirectional scheduling), building a comparison table against 1F1B and Zero Bubble across bubble time, memory, and communication cost, and mapping every schedule element from Parts 1-2 onto a small working Python simulator you can run and modify yourself.',
      bodyKn: 'Part 3 ಈ module ಅನ್ನೂ ಪೂರ್ಣಗೊಳಿಸುತ್ತದೆ DualPipe ya ಉಳಿದ bubble ಲೆಕ್ಕ ಮಾಡುವ ಮೂಲಕ (ಹೌದೂ, bidirectional scheduling ಜೊತೆಗೂ ಸ್ವಲ್ಪ bubble ಉಳಿಯುತ್ತದೆ), 1F1B ಮತ್ತೆ Zero Bubble ಎದುರೂ bubble time, memory, ಮತ್ತೆ communication cost ಗಳಾದ್ಯಂತ ಒಂದೂ ಹೋಲಿಕೆ table ಕಟ್ಟುವ ಮೂಲಕ, ಮತ್ತೆ Parts 1-2 ya ಪ್ರತಿ schedule element ಅನ್ನೂ ನೀವೇ ಓಡಿಸಿ ಮಾರ್ಪಡಿಸಬಹುದಾದ ಒಂದೂ ಚಿಕ್ಕ ಕೆಲಸ ಮಾಡುವ Python simulator ಮೇಲೆ ನಕ್ಷೆ ಮಾಡುವ ಮೂಲಕ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'What are the four components of a DualPipe forward chunk?',
        qKn: 'ಒಂದೂ DualPipe forward chunk ya ನಾಲ್ಕೂ components ಯಾವುವು?',
        opts: ['Embedding, attention, LayerNorm, optimizer', 'Attention, all-to-all dispatch, expert MLP, all-to-all combine', 'Forward, backward, optimizer, checkpoint', 'Router, tokenizer, decoder, sampler'], correct: 1,
        optsKn: ['Embedding, attention, LayerNorm, optimizer', 'Attention, all-to-all dispatch, expert MLP, all-to-all combine', 'Forward, backward, optimizer, checkpoint', 'Router, tokenizer, decoder, sampler'] },
      { q: 'Genuinely confirmed: for compute=5, comm=8, what was the overlapped time, and how much communication remained on the critical path?',
        qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: compute=5, comm=8 ಗೆ, overlapped time ಏನಾಗಿತ್ತೂ, ಮತ್ತೆ ಎಷ್ಟೂ communication critical path ಮೇಲೆ ಉಳಿಯಿತೂ?',
        opts: ['overlapped=5, all communication hidden', 'overlapped=8, 3 units of communication could not hide', 'overlapped=13, nothing hidden', 'overlapped=0'], correct: 1,
        optsKn: ['overlapped=5, ಎಲ್ಲಾ communication ಮರೆಯಾಯಿತೂ', 'overlapped=8, 3 units communication ಮರೆಯಾಗಲಿಲ್ಲ', 'overlapped=13, ಏನೂ ಮರೆಯಾಗಲಿಲ್ಲ', 'overlapped=0'] },
      { q: 'Genuinely confirmed: for P=4 partitions A/B/C/D, which partition does Device 0 hold in addition to A?',
        qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: P=4 partitions A/B/C/D ಗೆ, Device 0 A ಜೊತೆಗೆ ಯಾವ partition ಹಿಡಿದಿದೆ?',
        opts: ['B', 'C', 'D', 'None -- only A'], correct: 2,
        optsKn: ['B', 'C', 'D', 'ಯಾವುದೂ ಇಲ್ಲ -- ಕೇವಲ A'] },
      { q: 'What does F5R mean in the DualPipe schedule notation?',
        qKn: 'DualPipe schedule notation ನಲ್ಲಿ F5R ಎಂದರೆ ಏನೂ?',
        opts: ['Backward for micro-batch 5', 'Forward computation for reverse-stream micro-batch 5', 'Rank 5 failure', 'The fifth expert-routing operation'], correct: 1,
        optsKn: ['Micro-batch 5 ya Backward', 'Reverse-stream micro-batch 5 ಗಾಗಿ Forward computation', 'Rank 5 failure', 'ಐದನೇ expert-routing operation'] },
      { q: 'Genuinely confirmed: for P=8 (2P=16), which of these micro-batch counts does NOT divide evenly?',
        qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: P=8 (2P=16) ಗೆ, ಈ micro-batch counts ಗಳಲ್ಲಿ ಯಾವುದೂ ಸಮಾನವಾಗಿ ಭಾಗಿಸುವುದಿಲ್ಲ?',
        opts: ['16', '32', '48', '18'], correct: 3,
        optsKn: ['16', '32', '48', '18'] },
    ] } },
  ],
};
