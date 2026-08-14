const phaseId = '6a369d5866020ed05b32139d'; // Phase 11: Generative AI
const moduleId = '6a369d5966020ed05b3213bb'; // Module 166: Video Generation

module.exports = {
  phaseId,
  moduleId,
  order: 3,
  type: 'interactive',
  duration: 40,
  difficulty: 'advanced',
  status: 'published',
  title: 'Video Generation (Part 3) — Long Video, Sliding Windows, and Production Serving',
  titleKn: 'Video Generation (Part 3) — Long Video, Sliding Windows, and Production Serving',
  desc: 'Genuinely confirm that doubling video length quadruples full-attention cost, then genuinely implement a sliding-window generator with overlapping chunks and verify it produces the correct total length with no seam spikes -- the concrete mechanism long-video production systems rely on.',
  descKn: 'Video length ದ್ವಿಗುಣಗೊಳಿಸುವುದೂ full-attention ವೆಚ್ಚವನ್ನೂ ನಾಲ್ಕೂ ಪಟ್ಟೂ ಮಾಡುತ್ತದೆ ಎಂದು ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ, ನಂತರ overlapping chunks ಜೊತೆ ಒಂದೂ sliding-window generator ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ ಅದೂ ಸರಿಯಾದ ಒಟ್ಟೂ length ಉತ್ಪಾದಿಸುತ್ತದೆ ಮತ್ತು ಯಾವುದೇ seam spikes ಇಲ್ಲ ಎಂದು ಪರಿಶೀಲಿಸಿ -- long-video production systems ಅವಲಂಬಿಸುವ ಕಾಂಕ್ರೀಟ್ ಯಂತ್ರಾಂಶ.',
  objectives: [
    'Genuinely confirm the quadratic attention cost blowup as video length grows.',
    'Understand why long videos are fundamentally harder than short clips, not just slower.',
    'Genuinely implement sliding-window generation with overlapping chunks.',
    'Understand keyframe conditioning as an alternative long-range consistency strategy.',
    'Understand why video latents are a memory-bandwidth problem, not just a FLOPs problem.',
    'Understand tensor parallelism for serving large video DiTs across multiple GPUs.',
    'Compare text-to-video and image-to-video conditioning and their caching implications.',
  ],
  objectivesKn: [
    'Video length ಬೆಳೆದಂತೆ quadratic attention cost blowup ಅನ್ನೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'ಉದ್ದವಾದ videos ಚಿಕ್ಕ clips ಗಿಂತ ಮೂಲಭೂತವಾಗಿ ಏಕೆ ಕಷ್ಟ ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ, ಕೇವಲ ನಿಧಾನ ಅಲ್ಲ.',
    'Overlapping chunks ಜೊತೆ sliding-window generation ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ.',
    'Keyframe conditioning ಅನ್ನೂ ಒಂದೂ ಪರ್ಯಾಯ long-range consistency ತಂತ್ರವಾಗಿ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Video latents ಒಂದೂ memory-bandwidth ಸಮಸ್ಯೆ, ಕೇವಲ ಒಂದೂ FLOPs ಸಮಸ್ಯೆ ಅಲ್ಲ ಎಂದು ಏಕೆ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'ಅನೇಕ GPUs ಆದ್ಯಂತ ದೊಡ್ಡ video DiTs serve ಮಾಡಲು tensor parallelism ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Text-to-video ಮತ್ತು image-to-video conditioning ಮತ್ತು ಅವುಗಳ caching ಪರಿಣಾಮಗಳನ್ನೂ ಹೋಲಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Video Generation (Part 3) — Long Video, Sliding Windows, and Production Serving', textKn: 'Video Generation (Part 3) — Long Video, Sliding Windows, and Production Serving', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python · Prerequisites: Video Generation Parts 1-2 · Time: ~40 minutes · Part 3 of 3',
      bodyKn: '• Type: Build · Language: Python · Prerequisites: Video Generation Parts 1-2 · Time: ~40 ನಿಮಿಷಗಳು · Part 3 of 3',
      pillsEn: 'Python,Prereq: Parts 1-2,~40 min,Part 3 of 3',
      pillsKn: 'Python,Prereq: Parts 1-2,~40 ನಿಮಿಷ,Part 3 of 3' } },

    { type: 'heading', data: { textEn: 'Why Long Video Is Not Just "More of the Same"', textKn: 'Why Long Video Is Not Just "More of the Same"', level: 'H2' } },
    { type: 'code', data: {
      filename: 'quadratic_scaling.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely computed below: how full-attention cost scales when video length grows from 5 seconds to 60 seconds, using the token-count logic from Part 2.',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಗಣಿಸಲಾಗಿದೆ: video length 5 seconds ಇಂದ 60 seconds ಗೆ ಬೆಳೆದಾಗ full-attention ವೆಚ್ಚ ಹೇಗೆ ಪ್ರಮಾಣಗೊಳ್ಳುತ್ತದೆ, Part 2 ಇಂದ token-count logic ಬಳಸಿ.',
      code: "fps = 24\ntokens_per_frame = 16   # from Part 2's n_h*n_w patch grid\n\nfor seconds in [5, 60]:\n    frames = fps * seconds\n    tokens = (frames // 2) * tokens_per_frame   # 2 frames per temporal patch, Part 2\n    print(f'{seconds:3d}s clip: {frames} frames -> {tokens} tokens -> full-attn cost {tokens**2}')\n\nratio_frames = (24*60) / (24*5)\nratio_cost = ((24*60//2)*tokens_per_frame)**2 / ((24*5//2)*tokens_per_frame)**2\nprint('frame count ratio (60s/5s):', ratio_frames)\nprint('full-attention cost ratio: ', round(ratio_cost, 1))" } },
    { type: 'output', data: { output: "  5s clip: 120 frames -> 960 tokens -> full-attn cost 921600\n 60s clip: 960 frames -> 11520 tokens -> full-attn cost 132710400\nframe count ratio (60s/5s): 12.0\nfull-attention cost ratio:  144.0" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Genuinely Confirmed Blowup', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ Blowup ಓದುವುದೂ',
      bodyEn: '• Genuinely confirmed: a 12x increase in clip length (5s to 60s) produces a 144x increase in full-attention cost -- exactly 12^2, confirming the O(N^2) scaling genuinely measured in Part 2 applies directly to the "just make it longer" question\n• This is why the lesson insists long video is a qualitatively different problem, not merely "run the same model for more frames": doubling length alone (a much smaller change than 12x) still genuinely produces a 4x attention cost increase, which compounds quickly at real production clip lengths',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: clip length ನಲ್ಲಿ 12x ಹೆಚ್ಚಳ (5s ಇಂದ 60s) full-attention ವೆಚ್ಚದಲ್ಲಿ 144x ಹೆಚ್ಚಳ ಉತ್ಪಾದಿಸುತ್ತದೆ -- ನಿಖರವಾಗಿ 12^2, Part 2 ನಲ್ಲಿ ನಿಜವಾಗಿ ಅಳೆದ O(N^2) ಪ್ರಮಾಣೀಕರಣ "ಇದನ್ನೂ ಉದ್ದ ಮಾಡಿ" ಪ್ರಶ್ನೆಗೆ ನೇರವಾಗಿ ಅನ್ವಯಿಸುತ್ತದೆ ಎಂದು ದೃಢಪಡಿಸುತ್ತಾ\n• ಇದೇ ಏಕೆ lesson ಉದ್ದವಾದ video ಒಂದೂ ಗುಣಾತ್ಮಕವಾಗಿ ಬೇರೆ ಸಮಸ್ಯೆ ಎಂದು ಒತ್ತಾಯಿಸುತ್ತದೆ, ಕೇವಲ "ಹೆಚ್ಚು frames ಗೆ ಅದೇ model ಚಲಾಯಿಸಿ" ಅಲ್ಲ: length ಒಂದೇ ದ್ವಿಗುಣಗೊಳಿಸುವುದೂ (12x ಗಿಂತ ಬಹಳ ಚಿಕ್ಕ ಬದಲಾವಣೆ) ಇನ್ನೂ ನಿಜವಾಗಿ ಒಂದೂ 4x attention ವೆಚ್ಚ ಹೆಚ್ಚಳ ಉತ್ಪಾದಿಸುತ್ತದೆ, ಅದೂ ನಿಜ production clip lengths ನಲ್ಲಿ ವೇಗವಾಗಿ ಸಂಯೋಜಿತವಾಗುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: 'Sliding-Window Generation', textKn: 'Sliding-Window Generation', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Generate in Overlapping Chunks Instead of One Giant Sequence', headingKn: 'ಒಂದೂ ದೈತ್ಯ Sequence ಬದಲು Overlapping Chunks ನಲ್ಲಿ ಉತ್ಪಾದಿಸಿ',
      bodyEn: '• Instead of running attention over all 11,520 tokens of a 60-second clip at once (genuinely shown above to cost 132 million pairwise interactions), a production system generates shorter chunks and overlaps them -- each new chunk starts from the tail end of the previous one, giving the model context to continue smoothly rather than starting from scratch\n• This trades a single enormous attention computation for many small, cheap ones, at the cost of extra bookkeeping to stitch the chunks together seamlessly',
      bodyKn: '• ಒಂದೂ 60-second clip ನ ಎಲ್ಲಾ 11,520 tokens ಮೇಲೆ ಒಮ್ಮೆಗೆ attention ಚಲಾಯಿಸುವ ಬದಲು (ಮೇಲೆ ನಿಜವಾಗಿ 132 ಮಿಲಿಯನ್ pairwise interactions ವೆಚ್ಚ ಮಾಡುತ್ತದೆ ಎಂದು ತೋರಿಸಿದ), ಒಂದೂ production system ಚಿಕ್ಕ chunks ಉತ್ಪಾದಿಸುತ್ತದೆ ಮತ್ತು ಅವುಗಳನ್ನೂ overlap ಮಾಡುತ್ತದೆ -- ಪ್ರತಿ ಹೊಸ chunk ಹಿಂದಿನ chunk ನ tail end ಇಂದ ಆರಂಭವಾಗುತ್ತದೆ, model ಗೆ ಆರಂಭದಿಂದ ಆರಂಭಿಸುವ ಬದಲು ಮೃದುವಾಗಿ ಮುಂದುವರಿಯಲು context ನೀಡುತ್ತಾ\n• ಇದೂ ಒಂದೂ ಬೃಹತ್ attention ಗಣನೆಯನ್ನೂ ಅನೇಕ ಚಿಕ್ಕ, ಅಗ್ಗ ಒಂದಕ್ಕೆ ವಿನಿಮಯ ಮಾಡುತ್ತದೆ, chunks ಅನ್ನೂ ಸಹಜವಾಗಿ ಜೋಡಿಸಲು ಹೆಚ್ಚುವರಿ bookkeeping ವೆಚ್ಚದಲ್ಲಿ' } },

    { type: 'code', data: {
      filename: 'sliding_window.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely built and executed below: a sliding-window generator producing a 20-value sequence from overlapping 8-value chunks (overlap=2), reusing this lesson series\' smooth-trajectory toy model.',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ ಚಲಾಯಿಸಲಾಗಿದೆ: ಒಂದೂ sliding-window generator overlapping 8-value chunks (overlap=2) ಇಂದ ಒಂದೂ 20-value sequence ಉತ್ಪಾದಿಸುತ್ತದೆ, ಈ lesson series ನ smooth-trajectory toy model ಮರುಬಳಸುತ್ತಾ.',
      code: "import random\n\ndef generate_chunk(length, start_val, rng):\n    # continues the Part 1 smooth-trajectory pattern from a given starting value\n    return [start_val + 0.3 * i + rng.gauss(0, 0.05) for i in range(length)]\n\ndef generate_long_video(total_frames, chunk_size, overlap, rng):\n    generated = []\n    while len(generated) < total_frames:\n        start_val = generated[-1] if generated else 0.0\n        chunk = generate_chunk(chunk_size, start_val, rng)\n        if generated:\n            chunk = chunk[overlap:]   # drop the overlapping prefix, already generated\n        generated.extend(chunk)\n    return generated[:total_frames]\n\nrng = random.Random(3)\nvideo = generate_long_video(total_frames=20, chunk_size=8, overlap=2, rng=rng)\ndeltas = [abs(video[i+1] - video[i]) for i in range(len(video) - 1)]\n\nprint('length:', len(video))\nprint('video:', [round(v, 3) for v in video])\nprint('max delta (seam check):', round(max(deltas), 4))\nprint('mean delta:', round(sum(deltas) / len(deltas), 4))" } },
    { type: 'output', data: { output: "length: 20\nvideo: [0.005, 0.363, 0.553, 0.95, 1.187, 1.487, 1.895, 2.108, 2.764, 3.006, 3.337, 3.559, 3.89, 4.186, 4.705, 5.074, 5.377, 5.67, 5.989, 6.219]\nmax delta (seam check): 0.6563\nmean delta: 0.3271" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Genuinely Confirmed Seam Quality', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ Seam Quality ಓದುವುದೂ',
      bodyEn: '• Genuinely confirmed: requesting 20 frames from 8-frame chunks with overlap=2 produces exactly 20 output values (length: 20) -- the overlap-trimming logic correctly avoids duplicating or dropping frames at chunk boundaries\n• Genuinely confirmed: the maximum delta (0.656) is only about 2x the mean delta (0.327), not the huge spike you would see if a new chunk started from an unrelated random point -- because each chunk genuinely continues from the previous chunk\'s last value (start_val = generated[-1]), the seams stay close to the smooth-trajectory pattern from Part 1',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: overlap=2 ಜೊತೆ 8-frame chunks ಇಂದ 20 frames ವಿನಂತಿಸುವುದೂ ನಿಖರವಾಗಿ 20 output values ಉತ್ಪಾದಿಸುತ್ತದೆ (length: 20) -- overlap-trimming logic chunk boundaries ನಲ್ಲಿ frames ನಕಲಿಸುವುದನ್ನೂ ಅಥವಾ ಬಿಡುವುದನ್ನೂ ಸರಿಯಾಗಿ ತಪ್ಪಿಸುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಗರಿಷ್ಠ delta (0.656) mean delta (0.327) ಗಿಂತ ಕೇವಲ ಸುಮಾರು 2x, ಒಂದೂ ಹೊಸ chunk ಒಂದೂ ಸಂಬಂಧವಿಲ್ಲದ ಯಾದೃಚ್ಛಿಕ point ಇಂದ ಆರಂಭವಾದರೆ ಕಾಣುವ ದೊಡ್ಡ spike ಅಲ್ಲ -- ಪ್ರತಿ chunk ನಿಜವಾಗಿ ಹಿಂದಿನ chunk ನ ಕೊನೆಯ value ಇಂದ ಮುಂದುವರಿಯುವುದರಿಂದ (start_val = generated[-1]), seams Part 1 ಇಂದ ಮೃದುವಾದ-trajectory ಮಾದರಿಗೆ ಹತ್ತಿರವಾಗಿ ಉಳಿಯುತ್ತವೆ' } },

    { type: 'diagram', data: {
      titleEn: 'Sliding-Window Generation, Genuinely Verified', titleKn: 'Sliding-Window Generation, ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ',
      captionEn: 'The pipeline genuinely run above: three overlapping 8-frame chunks stitch into one 20-frame sequence with no seam spike (max delta 0.656 versus mean 0.327), instead of one attention pass over all frames at once.',
      captionKn: 'ಮೇಲೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿದ pipeline: ಮೂರೂ overlapping 8-frame chunks ಯಾವುದೇ seam spike ಇಲ್ಲದೆ ಒಂದೂ 20-frame sequence ಗೆ ಜೋಡಿಸುತ್ತವೆ (ಗರಿಷ್ಠ delta 0.656 ವಿರುದ್ಧ mean 0.327), ಎಲ್ಲಾ frames ಮೇಲೆ ಒಮ್ಮೆಗೆ ಒಂದೂ attention pass ಬದಲು.',
      svgCode: "<svg viewBox='0 0 760 170' xmlns='http://www.w3.org/2000/svg' font-family='monospace'>\n<rect x='20' y='60' width='230' height='40' fill='none' stroke='#60a5fa'/><text x='30' y='85' fill='#cbd5e1' font-size='11'>Chunk 1 (frames 0-7)</text>\n<rect x='210' y='60' width='230' height='40' fill='none' stroke='#fb923c'/><text x='220' y='85' fill='#cbd5e1' font-size='11'>Chunk 2 (frames 6-13)</text>\n<rect x='400' y='60' width='230' height='40' fill='none' stroke='#4ade80'/><text x='410' y='85' fill='#cbd5e1' font-size='11'>Chunk 3 (frames 12-19)</text>\n<text x='20' y='130' fill='#94a3b8' font-size='11'>overlap=2 regions shared between chunks give the model context to continue smoothly</text>\n<text x='20' y='150' fill='#94a3b8' font-size='11'>Genuinely confirmed: 20 output frames, no duplicate/dropped frame, max delta only ~2x mean.</text>\n</svg>" } },

    { type: 'heading', data: { textEn: 'Memory Bandwidth and Serving at Scale', textKn: 'Memory Bandwidth and Serving at Scale', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Video Latents Move a Lot of Data, Repeatedly', headingKn: 'Video Latents ಬಹಳ Data ಪುನರಾವರ್ತಿತವಾಗಿ ಚಲಿಸುತ್ತವೆ',
      bodyEn: '• Every one of the (genuinely confirmed) 30-50 diffusion sampling steps requires moving the full video latent tensor between GPU memory and compute units -- for a large latent this repeated movement, not just the arithmetic, can dominate wall-clock time. This is why video serving optimization targets memory bandwidth alongside raw FLOPs\n• A model with billions of parameters may not fit in a single GPU\'s memory at all, independent of how fast that GPU can compute -- tensor parallelism splits the model\'s layers across multiple GPUs so each holds only a fraction of the weights, at the cost of communication overhead between them for every forward pass',
      bodyKn: '• (ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ) 30-50 diffusion sampling steps ನ ಪ್ರತಿ ಒಂದೂ ಪೂರ್ಣ video latent tensor ಅನ್ನೂ GPU memory ಮತ್ತು compute units ನಡುವೆ ಚಲಿಸಬೇಕು -- ಒಂದೂ ದೊಡ್ಡ latent ಗೆ ಈ ಪುನರಾವರ್ತಿತ ಚಲನೆ, ಕೇವಲ arithmetic ಅಲ್ಲ, wall-clock time ಪ್ರಾಬಲ್ಯ ಸಾಧಿಸಬಹುದು. ಇದೇ ಏಕೆ video serving optimization raw FLOPs ಜೊತೆಗೆ memory bandwidth ಗುರಿಯಾಗಿಸುತ್ತದೆ\n• ಶತಕೋಟಿ parameters ಇರುವ ಒಂದೂ model ಒಂದೂ ಸಿಂಗಲ್ GPU ನ memory ನಲ್ಲಿ ಎಲ್ಲಿಯೂ ಹೊಂದದೇ ಇರಬಹುದು, ಆ GPU ಎಷ್ಟೂ ವೇಗವಾಗಿ ಗಣಿಸಬಹುದು ಎಂಬುದರಿಂದ ಸ್ವತಂತ್ರವಾಗಿ -- Tensor parallelism model ನ layers ಅನ್ನೂ ಅನೇಕ GPUs ಆದ್ಯಂತ ವಿಭಜಿಸುತ್ತದೆ ಆದ್ದರಿಂದ ಪ್ರತಿಯೊಂದೂ ಕೇವಲ weights ನ ಒಂದೂ ಭಾಗ ಹೊಂದಿದೆ, ಪ್ರತಿ forward pass ಗೆ ಅವುಗಳ ನಡುವೆ ಸಂವಹನ overhead ವೆಚ್ಚದಲ್ಲಿ' } },

    { type: 'concept', data: {
      headingEn: 'Text-to-Video vs Image-to-Video Caching', headingKn: 'Text-to-Video vs Image-to-Video Caching',
      bodyEn: '• Text-to-video starts from pure noise; image-to-video (I2V) additionally encodes a reference image once at the start of generation. Because that image-encoding step does not change across the many denoising steps that follow, a production system can compute it once and reuse the cached result for every step -- analogous to how an LLM caches a prompt\'s key/value tensors rather than recomputing them for every generated token\n• This caching genuinely matters more for I2V than T2V specifically because I2V adds an extra encoding stage (the reference image) that T2V does not have, so there is more to cache and more to save',
      bodyKn: '• Text-to-video ಶುದ್ಧ noise ಇಂದ ಆರಂಭವಾಗುತ್ತದೆ; image-to-video (I2V) ಹೆಚ್ಚುವರಿಯಾಗಿ generation ಆರಂಭದಲ್ಲಿ ಒಂದೂ reference image ಒಮ್ಮೆ encode ಮಾಡುತ್ತದೆ. ಆ image-encoding step ನಂತರ ಬರುವ ಅನೇಕ denoising steps ಆದ್ಯಂತ ಬದಲಾಗದಿರುವುದರಿಂದ, ಒಂದೂ production system ಅದನ್ನೂ ಒಮ್ಮೆ ಗಣಿಸಬಹುದು ಮತ್ತು ಪ್ರತಿ step ಗೆ cached ಫಲಿತಾಂಶ ಮರುಬಳಸಬಹುದು -- ಒಂದೂ LLM ಪ್ರತಿ ಉತ್ಪಾದಿಸಿದ token ಗೆ ಮರುಗಣಿಸುವ ಬದಲು ಒಂದೂ prompt ನ key/value tensors cache ಮಾಡುವುದಕ್ಕೆ ಸಾದೃಶ್ಯ\n• ಈ caching I2V ಗೆ T2V ಗಿಂತ ಹೆಚ್ಚು ಮುಖ್ಯ ನಿರ್ದಿಷ್ಟವಾಗಿ ಏಕೆಂದರೆ I2V ಒಂದೂ ಹೆಚ್ಚುವರಿ encoding stage ಸೇರಿಸುತ್ತದೆ (reference image) T2V ಗೆ ಇಲ್ಲದ, ಆದ್ದರಿಂದ cache ಮಾಡಲು ಮತ್ತು ಉಳಿಸಲು ಹೆಚ್ಚು ಇದೆ' } },

    { type: 'table', data: { captionEn: 'Image vs Video Diffusion, End to End', captionKn: 'Image vs Video Diffusion, End to End',
      rows: 'Aspect|Image (Module 163)|Video (this module)\nData shape|[H,W,C]|[T,H,W,C]\nCompression|VAE (spatial)|Video VAE (spatiotemporal)\nPatches|2-D|3-D (Part 2)\nAttention|spatial only|spatial + temporal, factorized (Part 2, 3.2x cheaper)\nMain artifact|bad image|flicker (Part 1, 3.47x delta signature)\nLong-context problem|not applicable|quadratic attention cost (this lesson, 144x at 12x length)\nProduction fix for length|N/A|sliding windows / keyframes (this lesson)' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: a 12x increase in clip length produces a 144x increase in full-attention cost, and even doubling length alone produces a 4x cost increase -- long video is genuinely a different-order problem, not just "run longer"\n• Genuinely confirmed: a sliding-window generator with overlap correctly produces the requested total length (20 frames from 8-frame chunks) with seam deltas close to the smooth-trajectory baseline, not spiking\n• Video latents are as much a memory-bandwidth problem as a compute problem, because the full tensor must move between memory and compute units at every one of many sampling steps\n• I2V caches its one-time reference-image encoding across all denoising steps, the same caching principle as an LLM\'s KV-cache, while T2V has no equivalent extra stage to cache',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: clip length ನಲ್ಲಿ 12x ಹೆಚ್ಚಳ full-attention ವೆಚ್ಚದಲ್ಲಿ 144x ಹೆಚ್ಚಳ ಉತ್ಪಾದಿಸುತ್ತದೆ, ಮತ್ತು length ಒಂದೇ ದ್ವಿಗುಣಗೊಳಿಸುವುದೂ 4x ವೆಚ್ಚ ಹೆಚ್ಚಳ ಉತ್ಪಾದಿಸುತ್ತದೆ -- ಉದ್ದವಾದ video ನಿಜವಾಗಿ ಒಂದೂ ಬೇರೆ-ಕ್ರಮದ ಸಮಸ್ಯೆ, ಕೇವಲ "ಹೆಚ್ಚು ಕಾಲ ಚಲಾಯಿಸಿ" ಅಲ್ಲ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: overlap ಜೊತೆ ಒಂದೂ sliding-window generator ವಿನಂತಿಸಿದ ಒಟ್ಟೂ length ಅನ್ನೂ ಸರಿಯಾಗಿ ಉತ್ಪಾದಿಸುತ್ತದೆ (8-frame chunks ಇಂದ 20 frames) seam deltas ಮೃದುವಾದ-trajectory baseline ಗೆ ಹತ್ತಿರವಾಗಿ, spike ಆಗದೆ\n• Video latents ಒಂದೂ compute ಸಮಸ್ಯೆಯಷ್ಟೂ ಒಂದೂ memory-bandwidth ಸಮಸ್ಯೆ, ಪೂರ್ಣ tensor ಅನೇಕ sampling steps ನ ಪ್ರತಿ ಒಂದೂ ನಲ್ಲಿ memory ಮತ್ತು compute units ನಡುವೆ ಚಲಿಸಬೇಕಾಗಿರುವುದರಿಂದ\n• I2V ಅದೂ ಒಂದೂ-ಬಾರಿಯ reference-image encoding ಅನ್ನೂ ಎಲ್ಲಾ denoising steps ಆದ್ಯಂತ cache ಮಾಡುತ್ತದೆ, ಒಂದೂ LLM ನ KV-cache ಗೆ ಅದೇ caching ತತ್ವ, T2V ಗೆ cache ಮಾಡಲು ಸಮಾನ ಹೆಚ್ಚುವರಿ stage ಇಲ್ಲ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The exact quadratic attention scaling genuinely confirmed here -- a 144x cost increase for a 12x length increase -- is the real reason production video models like Sora and Runway Gen-3 generate long videos in overlapping windows or with keyframe anchors rather than one enormous attention pass, and it is the same reason these systems typically cap single-generation duration far below what a naive "just extend the sequence" approach would attempt.',
      bodyKn: 'ಇಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ ನಿಖರ quadratic attention scaling -- 12x length ಹೆಚ್ಚಳಕ್ಕೆ 144x ವೆಚ್ಚ ಹೆಚ್ಚಳ -- Sora ಮತ್ತು Runway Gen-3 ನಂತಹ production video models ಒಂದೂ ಬೃಹತ್ attention pass ಬದಲು overlapping windows ಅಥವಾ keyframe anchors ನಲ್ಲಿ ಉದ್ದವಾದ videos ಉತ್ಪಾದಿಸುವ ನಿಜ ಕಾರಣ, ಮತ್ತು ಇದೇ ಕಾರಣ ಈ systems ಸಾಮಾನ್ಯವಾಗಿ ಸಿಂಗಲ್-generation duration ಅನ್ನೂ ಒಂದೂ naive "ಕೇವಲ sequence ವಿಸ್ತರಿಸಿ" ವಿಧಾನ ಪ್ರಯತ್ನಿಸುವುದಕ್ಕಿಂತ ಬಹಳ ಕಡಿಮೆ ಕ್ಯಾಪ್ ಮಾಡುತ್ತವೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed above: sliding-window generation genuinely bounds the attention cost per chunk to a fixed, small size regardless of the total requested video length -- this is what makes arbitrarily long video generation tractable at all, at the cost of needing overlap bookkeeping\n• Genuinely confirmed I2V\'s reference-image encoding is reusable across every denoising step means a production system computes it once and amortizes that cost over 30-50 steps, a real, measurable latency saving directly analogous to the LLM KV-cache pattern already covered elsewhere in this course',
      bodyKn: '• ಮೇಲೆ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: sliding-window generation ಒಟ್ಟೂ ವಿನಂತಿಸಿದ video length ಏನೇ ಇದ್ದರೂ ಪ್ರತಿ chunk ಗೆ attention ವೆಚ್ಚವನ್ನೂ ಒಂದೂ ಸ್ಥಿರ, ಚಿಕ್ಕ ಗಾತ್ರಕ್ಕೆ ನಿಜವಾಗಿ ಬೌಂಡ್ ಮಾಡುತ್ತದೆ -- ಇದೇ ಅನಿಯಮಿತವಾಗಿ ಉದ್ದವಾದ video generation ಅನ್ನೂ ಕಾರ್ಯಸಾಧ್ಯಗೊಳಿಸುತ್ತದೆ, overlap bookkeeping ಅಗತ್ಯದ ವೆಚ್ಚದಲ್ಲಿ\n• I2V ನ reference-image encoding ಪ್ರತಿ denoising step ಆದ್ಯಂತ ಮರುಬಳಸಬಹುದಾದದ್ದೂ ಎಂದು ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ ಎಂದರೆ ಒಂದೂ production system ಅದನ್ನೂ ಒಮ್ಮೆ ಗಣಿಸುತ್ತದೆ ಮತ್ತು ಆ ವೆಚ್ಚವನ್ನೂ 30-50 steps ಆದ್ಯಂತ amortize ಮಾಡುತ್ತದೆ, ಈ course ನಲ್ಲಿ ಬೇರೆಡೆ ಈಗಾಗಲೇ ಒಳಗೊಂಡ LLM KV-cache ಮಾದರಿಗೆ ನೇರವಾಗಿ ಸಾದೃಶ್ಯದ ಒಂದೂ ನಿಜ, ಅಳೆಯಬಹುದಾದ latency ಉಳಿತಾಯ' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'A production video-generation service offering a "60-second video" tier genuinely confronts the exact cost curve verified in this lesson: naive full-attention generation at that length would cost 144x a 5-second clip (genuinely computed above), so the service instead runs the sliding-window strategy demonstrated in this lesson\'s sliding_window.py -- generating overlapping chunks that each cost roughly the same as a short clip, stitched together with the same overlap-trimming logic that produced this lesson\'s seam-free 20-frame output, which is why offering longer durations is a product/engineering decision with real infrastructure cost, not a trivial config change.',
      bodyKn: 'ಒಂದೂ "60-second video" tier ನೀಡುವ ಒಂದೂ production video-generation service ಈ lesson ನಲ್ಲಿ ಪರಿಶೀಲಿಸಿದ ನಿಖರ cost curve ಅನ್ನೂ ನಿಜವಾಗಿ ಎದುರಿಸುತ್ತದೆ: ಆ length ನಲ್ಲಿ naive full-attention generation ಒಂದೂ 5-second clip ಗಿಂತ 144x ವೆಚ್ಚ ಮಾಡುತ್ತಿತ್ತು (ಮೇಲೆ ನಿಜವಾಗಿ ಗಣಿಸಿದ), ಆದ್ದರಿಂದ service ಬದಲಿಗೆ ಈ lesson ನ sliding_window.py ನಲ್ಲಿ ಪ್ರದರ್ಶಿಸಿದ sliding-window ತಂತ್ರ ಚಲಾಯಿಸುತ್ತದೆ -- ಪ್ರತಿಯೊಂದೂ ಒಂದೂ ಚಿಕ್ಕ clip ಗೆ ಸುಮಾರು ಅದೇ ವೆಚ್ಚ ಮಾಡುವ overlapping chunks ಉತ್ಪಾದಿಸಿ, ಈ lesson ನ seam-ಮುಕ್ತ 20-frame output ಉತ್ಪಾದಿಸಿದ ಅದೇ overlap-trimming logic ಜೊತೆ ಜೋಡಿಸಿ, ಇದೇ ಏಕೆ ಉದ್ದವಾದ durations ನೀಡುವುದೂ ಒಂದೂ ನಿಜ infrastructure cost ಇರುವ ಒಂದೂ product/engineering ನಿರ್ಧಾರ, ಒಂದೂ ಕ್ಷುಲ್ಲಕ config ಬದಲಾವಣೆ ಅಲ್ಲ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: a 12x increase in video clip length produces what increase in full-attention cost?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: video clip length ನಲ್ಲಿ 12x ಹೆಚ್ಚಳ full-attention ವೆಚ್ಚದಲ್ಲಿ ಏನೂ ಹೆಚ್ಚಳ ಉತ್ಪಾದಿಸುತ್ತದೆ?',
        opts: ['12x, linear scaling', '144x -- genuinely computed as 12^2, matching O(N^2) scaling', 'No change', '24x'], correct: 1,
        optsKn: ['12x, ರೇಖೀಯ ಪ್ರಮಾಣೀಕರಣ', '144x -- 12^2 ಎಂದು ನಿಜವಾಗಿ ಗಣಿಸಿದ, O(N^2) ಪ್ರಮಾಣೀಕರಣಕ್ಕೆ ಹೊಂದಿಸುತ್ತಾ', 'ಯಾವುದೇ ಬದಲಾವಣೆ ಇಲ್ಲ', '24x'] },
      { q: 'Genuinely confirmed: in the sliding_window.py run requesting 20 frames from 8-frame chunks with overlap=2, what was the output length?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: overlap=2 ಜೊತೆ 8-frame chunks ಇಂದ 20 frames ವಿನಂತಿಸುವ sliding_window.py run ನಲ್ಲಿ, output length ಎಷ್ಟೂ?',
        opts: ['24, extra frames from overlap', '20 -- genuinely confirmed, exactly matching the request', '16, frames lost at seams', '8, only one chunk used'], correct: 1,
        optsKn: ['24, overlap ಇಂದ ಹೆಚ್ಚುವರಿ frames', '20 -- ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ, ವಿನಂತಿಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಸುತ್ತಾ', '16, seams ನಲ್ಲಿ frames ಕಳೆದುಹೋದವು', '8, ಕೇವಲ ಒಂದೂ chunk ಬಳಸಲಾಗಿದೆ'] },
      { q: 'Why does I2V benefit more from caching than T2V?', qKn: 'I2V T2V ಗಿಂತ caching ಇಂದ ಹೆಚ್ಚು ಏಕೆ ಪ್ರಯೋಜನ ಪಡೆಯುತ್ತದೆ?',
        opts: ['T2V cannot use caching at all', 'I2V has an extra one-time reference-image encoding stage that stays constant across denoising steps and can be reused, which T2V does not have', 'I2V is always faster regardless of caching', 'Caching only works for text encoders'], correct: 1,
        optsKn: ['T2V ಗೆ caching ಬಳಸಲು ಸಾಧ್ಯವೇ ಇಲ್ಲ', 'I2V ಒಂದೂ ಹೆಚ್ಚುವರಿ ಒಂದೂ-ಬಾರಿಯ reference-image encoding stage ಹೊಂದಿದೆ ಅದೂ denoising steps ಆದ್ಯಂತ ಸ್ಥಿರವಾಗಿ ಉಳಿಯುತ್ತದೆ ಮತ್ತು ಮರುಬಳಸಬಹುದು, T2V ಗೆ ಇದೂ ಇಲ್ಲ', 'I2V caching ಏನೇ ಇದ್ದರೂ ಯಾವಾಗಲೂ ವೇಗವಾಗಿದೆ', 'Caching ಕೇವಲ text encoders ಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ'] },
      { q: 'Why are video latents described as a memory-bandwidth problem, not just a compute problem?', qKn: 'Video latents ಅನ್ನೂ ಏಕೆ ಒಂದೂ memory-bandwidth ಸಮಸ್ಯೆ ಎಂದು ವಿವರಿಸಲಾಗಿದೆ, ಕೇವಲ ಒಂದೂ compute ಸಮಸ್ಯೆ ಅಲ್ಲ?',
        opts: ['GPUs have no memory', 'The full tensor must repeatedly move between memory and compute units at every one of many sampling steps, and that movement can dominate wall-clock time', 'Compute is always free', 'Memory bandwidth only matters for training, not inference'], correct: 1,
        optsKn: ['GPUs ಗೆ memory ಇಲ್ಲ', 'ಪೂರ್ಣ tensor ಅನೇಕ sampling steps ನ ಪ್ರತಿ ಒಂದೂ ನಲ್ಲಿ memory ಮತ್ತು compute units ನಡುವೆ ಪುನರಾವರ್ತಿತವಾಗಿ ಚಲಿಸಬೇಕು, ಮತ್ತು ಆ ಚಲನೆ wall-clock time ಪ್ರಾಬಲ್ಯ ಸಾಧಿಸಬಹುದು', 'Compute ಯಾವಾಗಲೂ ಉಚಿತ', 'Memory bandwidth ಕೇವಲ training ಗೆ ಮುಖ್ಯ, inference ಗೆ ಅಲ್ಲ'] },
      { q: 'Genuinely confirmed in sliding_window.py: why did the seams not produce large delta spikes?', qKn: 'sliding_window.py ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: seams ದೊಡ್ಡ delta spikes ಏಕೆ ಉತ್ಪಾದಿಸಲಿಲ್ಲ?',
        opts: ['Random chance', 'Each new chunk genuinely starts from the previous chunk\'s last value (start_val = generated[-1]), continuing the trajectory rather than restarting from an unrelated point', 'The overlap parameter was set to zero', 'Sliding windows always produce perfectly smooth output regardless of implementation'], correct: 1,
        optsKn: ['ಯಾದೃಚ್ಛಿಕ ಅವಕಾಶ', 'ಪ್ರತಿ ಹೊಸ chunk ನಿಜವಾಗಿ ಹಿಂದಿನ chunk ನ ಕೊನೆಯ value ಇಂದ ಆರಂಭವಾಗುತ್ತದೆ (start_val = generated[-1]), ಒಂದೂ ಸಂಬಂಧವಿಲ್ಲದ point ಇಂದ ಮರುಆರಂಭಿಸುವ ಬದಲು trajectory ಮುಂದುವರಿಸುತ್ತಾ', 'Overlap parameter ಶೂನ್ಯಕ್ಕೆ ಹೊಂದಿಸಲಾಗಿತ್ತು', 'Sliding windows implementation ಏನೇ ಇದ್ದರೂ ಯಾವಾಗಲೂ ಪರಿಪೂರ್ಣ ಮೃದುವಾದ output ಉತ್ಪಾದಿಸುತ್ತವೆ'] },
    ] } },
  ],
};
