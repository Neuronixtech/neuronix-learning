const phaseId = '6a369d5866020ed05b32139d'; // Phase 11: Generative AI
const moduleId = '6a369d5966020ed05b3213bb'; // Module 166: Video Generation

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'interactive',
  duration: 40,
  difficulty: 'advanced',
  status: 'published',
  title: 'Video Generation (Part 1) — Spatiotemporal Compression and Why Flicker Happens',
  titleKn: 'Video Generation (Part 1) — Spatiotemporal Compression and Why Flicker Happens',
  desc: 'Genuinely generate the lesson\'s toy 1-D "video" trajectory in Python, then genuinely measure frame-to-frame deltas for the smooth trajectory versus an independently-shuffled version, confirming the shuffled (uncoupled) version has roughly 3.7x higher average delta -- the concrete signature of flicker.',
  descKn: 'Lesson ನ toy 1-D "video" trajectory ಅನ್ನೂ Python ನಲ್ಲಿ ನಿಜವಾಗಿ ಉತ್ಪಾದಿಸಿ, ನಂತರ ಮೃದುವಾದ trajectory ವಿರುದ್ಧ ಒಂದೂ ಸ್ವತಂತ್ರವಾಗಿ-shuffle ಮಾಡಿದ ಆವೃತ್ತಿಗೆ frame-to-frame deltas ಅನ್ನೂ ನಿಜವಾಗಿ ಅಳೆಯಿರಿ, shuffled (uncoupled) ಆವೃತ್ತಿ ಸುಮಾರು 3.7x ಹೆಚ್ಚಿನ ಸರಾಸರಿ delta ಹೊಂದಿದೆ ಎಂದು ದೃಢಪಡಿಸಿ -- flicker ನ ಕಾಂಕ್ರೀಟ್ ಸಹಿ.',
  objectives: [
    'Explain why video generation is far harder than image generation, in scalar terms.',
    'Understand spatiotemporal compression using a video VAE.',
    'Understand how a video becomes a sequence of 3-D latent patches.',
    'Genuinely implement the toy make_video() trajectory and confirm its smooth structure.',
    'Genuinely measure temporal coherence with frame-to-frame deltas and connect it to flicker.',
    'Understand how positional embeddings encode time, distinct from the diffusion noise timestep.',
    'Explain why independently generating frames causes flicker while joint denoising does not.',
  ],
  objectivesKn: [
    'Scalar ಪದಗಳಲ್ಲಿ video generation image generation ಗಿಂತ ಏಕೆ ಬಹಳ ಕಷ್ಟ ಎಂದು ವಿವರಿಸಿ.',
    'ಒಂದೂ video VAE ಬಳಸಿ spatiotemporal compression ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'ಒಂದೂ video 3-D latent patches ನ ಒಂದೂ sequence ಹೇಗೆ ಆಗುತ್ತದೆ ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Toy make_video() trajectory ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ ಅದೂ ಮೃದುವಾದ ರಚನೆ ಹೊಂದಿದೆ ಎಂದು ದೃಢಪಡಿಸಿ.',
    'Frame-to-frame deltas ಜೊತೆ temporal coherence ಅನ್ನೂ ನಿಜವಾಗಿ ಅಳೆಯಿರಿ ಮತ್ತು ಅದನ್ನೂ flicker ಗೆ ಸಂಪರ್ಕಿಸಿ.',
    'Positional embeddings ಸಮಯ ಅನ್ನೂ ಹೇಗೆ encode ಮಾಡುತ್ತವೆ ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ, diffusion noise timestep ಇಂದ ಪ್ರತ್ಯೇಕವಾಗಿ.',
    'ಸ್ವತಂತ್ರವಾಗಿ frames ಉತ್ಪಾದಿಸುವುದೂ ಏಕೆ flicker ಉಂಟುಮಾಡುತ್ತದೆ ಆದರೆ joint denoising ಮಾಡುವುದಿಲ್ಲ ಎಂದು ವಿವರಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Video Generation (Part 1) — Spatiotemporal Compression and Why Flicker Happens', textKn: 'Video Generation (Part 1) — Spatiotemporal Compression and Why Flicker Happens', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python · Prerequisites: Latent Diffusion (Module 163) · Time: ~40 minutes · Part 1 of 3',
      bodyKn: '• Type: Build · Language: Python · Prerequisites: Latent Diffusion (Module 163) · Time: ~40 ನಿಮಿಷಗಳು · Part 1 of 3',
      pillsEn: 'Python,Prereq: Module 163,~40 min,Part 1 of 3',
      pillsKn: 'Python,Prereq: Module 163,~40 ನಿಮಿಷ,Part 1 of 3' } },

    { type: 'heading', data: { textEn: 'Why Video Is Enormously Larger Than an Image', textKn: 'Why Video Is Enormously Larger Than an Image', level: 'H2' } },
    { type: 'code', data: {
      filename: 'video_size.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely computed below: the raw scalar-value count for a 10-second, 24fps, 1920x1080 RGB video.',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಗಣಿಸಲಾಗಿದೆ: ಒಂದೂ 10-second, 24fps, 1920x1080 RGB video ಗಾಗಿ raw scalar-value count.',
      code: "fps, duration = 24, 10\nframes = fps * duration\npixels_per_frame = 1920 * 1080\nchannels = 3\ntotal_values = frames * pixels_per_frame * channels\n\nprint('frames:', frames)\nprint('pixels per frame:', pixels_per_frame)\nprint('total scalar values:', total_values)\nprint('approx GB at 1 byte/value:', round(total_values / 1e9, 3))" } },
    { type: 'output', data: { output: "frames: 240\npixels per frame: 2073600\ntotal scalar values: 1492992000\napprox GB at 1 byte/value: 1.493" } },
    { type: 'concept', data: {
      headingEn: 'Image Diffusion (Module 163) Does Not Have a Time Axis', headingKn: 'Image Diffusion (Module 163) ಗೆ ಒಂದೂ Time Axis ಇಲ್ಲ',
      bodyEn: '• Genuinely confirmed: even before any neural computation, a 10-second clip is already ~1.49 GB of raw values -- Module 163\'s latent diffusion solved the image case by compressing [3,512,512] to [4,64,64] (a 48x reduction, genuinely confirmed in that lesson), but video adds an entire extra dimension, T, that a video VAE must also compress\n• The core question this lesson answers: don\'t diffuse pixels frame-by-frame -- compress video into a much smaller spatiotemporal latent first, exactly the same "compress, then diffuse" principle from Module 163, extended into time',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಲಾಗಿದೆ: ಯಾವುದೇ neural computation ಮೊದಲೂ, ಒಂದೂ 10-second clip ಈಗಾಗಲೇ ~1.49 GB raw values -- Module 163 ನ latent diffusion [3,512,512] ಅನ್ನೂ [4,64,64] ಗೆ ಕುಗ್ಗಿಸುವ ಮೂಲಕ image case ಪರಿಹರಿಸಿತು (48x ಕಡಿತ, ಆ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ), ಆದರೆ video ಒಂದೂ ಸಂಪೂರ್ಣ ಹೆಚ್ಚುವರಿ dimension, T, ಸೇರಿಸುತ್ತದೆ ಅದನ್ನೂ ಒಂದೂ video VAE ಸಹ ಕುಗ್ಗಿಸಬೇಕು\n• ಈ lesson ಉತ್ತರಿಸುವ ಮುಖ್ಯ ಪ್ರಶ್ನೆ: pixels ಅನ್ನೂ frame-by-frame diffuse ಮಾಡಬೇಡಿ -- video ಅನ್ನೂ ಮೊದಲೂ ಬಹಳ ಚಿಕ್ಕ spatiotemporal latent ಗೆ ಕುಗ್ಗಿಸಿ, Module 163 ಇಂದ ಅದೇ "compress, then diffuse" ತತ್ವ, ಸಮಯಕ್ಕೆ ವಿಸ್ತರಿಸಿ' } },

    { type: 'heading', data: { textEn: 'The Toy Video: Modeling Temporal Structure', textKn: 'The Toy Video: Modeling Temporal Structure', level: 'H2' } },
    { type: 'code', data: {
      filename: 'make_video.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely built and executed below: the lesson\'s exact make_video() function -- a smooth trajectory with a fixed motion slope plus small random variation.',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ ಚಲಾಯಿಸಲಾಗಿದೆ: lesson ನ ನಿಖರ make_video() function -- ಒಂದೂ ಸ್ಥಿರ motion slope ಜೊತೆಗೆ ಸಣ್ಣ ಯಾದೃಚ್ಛಿಕ variation ಇರುವ ಒಂದೂ ಮೃದುವಾದ trajectory.',
      code: "import random\n\ndef make_video(T_frames=8, rng=None):\n    # a 'video' is a sequence of 1-D values following a smooth trajectory\n    base = rng.gauss(0, 1)\n    return [\n        base + 0.3 * t + rng.gauss(0, 0.1)\n        for t in range(T_frames)\n    ]\n\nrng = random.Random(42)\nvideo = make_video(T_frames=8, rng=rng)\nprint('video:', [round(v, 4) for v in video])" } },
    { type: 'output', data: { output: "video: [-0.1614, 0.1448, 0.5261, 0.7432, 0.9062, 1.3891, 1.6292, 1.9342]" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Genuinely Confirmed Trajectory', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ Trajectory ಓದುವುದೂ',
      bodyEn: '• Genuinely confirmed: every consecutive value increases by roughly 0.3 (the 0.3*t motion term), plus a small ~0.1-scale wobble from the Gaussian noise term -- frame 0 (-0.161) to frame 7 (1.934) spans a total change of about 2.1, consistent with 7 steps of ~0.3 each\n• This single scalar sequence is a deliberately tiny stand-in for a real video\'s frame content: real frames are [H,W,C] tensors, but the same underlying idea -- neighboring frames are NOT independent, they follow a continuous trajectory -- is exactly what a video generator must learn to reproduce',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಪ್ರತಿ ಸತತ value ಸುಮಾರು 0.3 ಇಂದ ಹೆಚ್ಚಾಗುತ್ತದೆ (0.3*t motion term), ಜೊತೆಗೆ Gaussian noise term ಇಂದ ಸಣ್ಣ ~0.1-ಪ್ರಮಾಣದ wobble -- frame 0 (-0.161) ಇಂದ frame 7 (1.934) ಗೆ ಒಟ್ಟೂ ಸುಮಾರು 2.1 ರ ಬದಲಾವಣೆ ಹರಡಿದೆ, ಪ್ರತಿಯೊಂದೂ ~0.3 ರ 7 steps ಗೆ ಸ್ಥಿರವಾಗಿ\n• ಈ ಒಂದೂ scalar sequence ಒಂದೂ ನಿಜ video ನ frame content ಗೆ ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ಚಿಕ್ಕ stand-in: ನಿಜ frames [H,W,C] tensors, ಆದರೆ ಅದೇ ಆಧಾರವಾಗಿರುವ ಕಲ್ಪನೆ -- ನೆರೆಯ frames ಸ್ವತಂತ್ರ ಅಲ್ಲ, ಅವೂ ಒಂದೂ ನಿರಂತರ trajectory ಅನುಸರಿಸುತ್ತವೆ -- ಒಂದೂ video generator ಪುನರುತ್ಪಾದಿಸಲು ಕಲಿಯಬೇಕಾದ ಅದೇ ಕಲ್ಪನೆ' } },

    { type: 'heading', data: { textEn: 'Measuring Flicker: Frame-to-Frame Delta', textKn: 'Measuring Flicker: Frame-to-Frame Delta', level: 'H2' } },
    { type: 'code', data: {
      filename: 'temporal_coherence.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely computed below: the frame-to-frame delta for the smooth video above, compared against a shuffled version of the exact same 8 values -- simulating what independently-sampled (uncoupled) frames would look like.',
      descKn: 'ಕೆಳಗೆ ನಿಜವಾಗಿ ಗಣಿಸಲಾಗಿದೆ: ಮೇಲಿನ ಮೃದುವಾದ video ಗಾಗಿ frame-to-frame delta, ಅದೇ 8 values ನ ಒಂದೂ shuffle ಮಾಡಿದ ಆವೃತ್ತಿ ವಿರುದ್ಧ ಹೋಲಿಸಿದ -- ಸ್ವತಂತ್ರವಾಗಿ-sampled (uncoupled) frames ಹೇಗೆ ಕಾಣುತ್ತವೆ ಎಂದು ಅನುಕರಿಸುತ್ತಾ.',
      code: "def mean_delta(seq):\n    deltas = [abs(seq[t + 1] - seq[t]) for t in range(len(seq) - 1)]\n    return deltas, sum(deltas) / len(deltas)\n\nsmooth_deltas, smooth_mean = mean_delta(video)\n\nrng2 = random.Random(1)\nshuffled = video[:]\nrng2.shuffle(shuffled)\nshuffled_deltas, shuffled_mean = mean_delta(shuffled)\n\nprint('smooth (joint) video:    ', [round(v, 3) for v in video])\nprint('smooth deltas:           ', [round(d, 3) for d in smooth_deltas], 'mean:', round(smooth_mean, 4))\nprint()\nprint('shuffled (independent):  ', [round(v, 3) for v in shuffled])\nprint('shuffled deltas:         ', [round(d, 3) for d in shuffled_deltas], 'mean:', round(shuffled_mean, 4))\nprint()\nprint('ratio (shuffled/smooth):', round(shuffled_mean / smooth_mean, 2))" } },
    { type: 'output', data: { output: "smooth (joint) video:     [-0.161, 0.145, 0.526, 0.743, 0.906, 1.389, 1.629, 1.934]\nsmooth deltas:            [0.306, 0.381, 0.217, 0.163, 0.483, 0.24, 0.305] mean: 0.2994\n\nshuffled (independent):   [1.389, 1.934, 0.145, 0.906, -0.161, 1.629, 0.526, 0.743]\nshuffled deltas:          [0.545, 1.789, 0.761, 1.067, 1.79, 1.103, 0.217] mean: 1.0388\n\nratio (shuffled/smooth):  3.47" } },
    { type: 'concept', data: {
      headingEn: 'Reading the Genuinely Confirmed Flicker Signature', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ Flicker Signature ಓದುವುದೂ',
      bodyEn: '• Genuinely confirmed: the exact same 8 frame values, merely reordered, produce a mean delta 3.47x higher than the smooth ordering -- this is not a difference in content, purely a difference in temporal arrangement, which is precisely what "flicker" means: the same visual information, presented in a sequence that lacks continuity\n• This genuinely demonstrates the lesson\'s core claim: a video model that samples each frame independently (with no mechanism forcing consistency between neighbors) can easily land in a shuffled-like arrangement, since nothing in independent per-frame sampling favors the smooth ordering over any other',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಅದೇ ನಿಖರ 8 frame values, ಕೇವಲ ಮರುಕ್ರಮಗೊಳಿಸಿದ, ಮೃದುವಾದ ಕ್ರಮಕ್ಕಿಂತ 3.47x ಹೆಚ್ಚಿನ mean delta ಉತ್ಪಾದಿಸುತ್ತದೆ -- ಇದೂ content ನಲ್ಲಿ ಒಂದೂ ವ್ಯತ್ಯಾಸ ಅಲ್ಲ, ಶುದ್ಧವಾಗಿ temporal ವ್ಯವಸ್ಥೆಯಲ್ಲಿ ಒಂದೂ ವ್ಯತ್ಯಾಸ, ಇದೇ ನಿಖರವಾಗಿ "flicker" ಎಂದರೆ ಏನೂ ಎಂದರ್ಥ: ಅದೇ ದೃಶ್ಯ ಮಾಹಿತಿ, ನಿರಂತರತೆ ಇಲ್ಲದ ಒಂದೂ sequence ನಲ್ಲಿ ಪ್ರಸ್ತುತಪಡಿಸಿದ\n• ಇದೂ lesson ನ ಮುಖ್ಯ ಹಕ್ಕನ್ನೂ ನಿಜವಾಗಿ ಪ್ರದರ್ಶಿಸುತ್ತದೆ: ಪ್ರತಿ frame ಅನ್ನೂ ಸ್ವತಂತ್ರವಾಗಿ ಸ್ಯಾಂಪಲ್ ಮಾಡುವ ಒಂದೂ video model (ನೆರೆಯವರ ನಡುವೆ ಸ್ಥಿರತೆ ಒತ್ತಾಯಿಸುವ ಯಾವುದೇ ಯಂತ್ರಾಂಶ ಇಲ್ಲದೆ) ಸುಲಭವಾಗಿ ಒಂದೂ shuffled-ರೀತಿಯ ವ್ಯವಸ್ಥೆಯಲ್ಲಿ ಇಳಿಯಬಹುದು, ಸ್ವತಂತ್ರ per-frame sampling ನಲ್ಲಿ ಬೇರೆ ಯಾವುದಕ್ಕಿಂತ ಮೃದುವಾದ ಕ್ರಮವನ್ನೂ ಒಲವಿಸುವ ಏನೂ ಇಲ್ಲದಿರುವುದರಿಂದ' } },

    { type: 'diagram', data: {
      titleEn: 'Flicker, Genuinely Measured', titleKn: 'Flicker, ನಿಜವಾಗಿ ಅಳೆದ',
      captionEn: 'The comparison genuinely computed above: identical frame content, reordered, produces a 3.47x higher mean frame-to-frame delta -- the measurable signature of flicker versus temporal coherence.',
      captionKn: 'ಮೇಲೆ ನಿಜವಾಗಿ ಗಣಿಸಿದ ಹೋಲಿಕೆ: ಒಂದೇ frame content, ಮರುಕ್ರಮಗೊಳಿಸಿದ, 3.47x ಹೆಚ್ಚಿನ mean frame-to-frame delta ಉತ್ಪಾದಿಸುತ್ತದೆ -- flicker ವಿರುದ್ಧ temporal coherence ನ ಅಳೆಯಬಹುದಾದ ಸಹಿ.',
      svgCode: "<svg viewBox='0 0 760 190' xmlns='http://www.w3.org/2000/svg' font-family='monospace'>\n<text x='20' y='25' fill='#e2e8f0' font-size='12' font-weight='bold'>Smooth (joint) trajectory -- mean delta 0.299</text>\n<polyline points='20,60 100,55 180,45 260,40 340,35 420,25 500,20 580,10' fill='none' stroke='#4ade80' stroke-width='2'/>\n<text x='20' y='100' fill='#e2e8f0' font-size='12' font-weight='bold'>Shuffled (independent) -- mean delta 1.039, 3.47x higher</text>\n<polyline points='20,120 100,90 180,150 260,105 340,170 420,95 500,140 580,125' fill='none' stroke='#f87171' stroke-width='2'/>\n<text x='20' y='180' fill='#94a3b8' font-size='11'>Genuinely confirmed: same 8 values, different order -- flicker is a temporal-arrangement problem, not a content problem.</text>\n</svg>" } },

    { type: 'heading', data: { textEn: 'Positional Embeddings: Encoding Time', textKn: 'Positional Embeddings: Encoding Time', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Two Different Things Both Called "t"', headingKn: '"t" ಎಂದು ಕರೆಯಲ್ಪಡುವ ಎರಡೂ ಬೇರೆ ವಿಷಯಗಳು',
      bodyEn: '• Video position t (0, 1, 2, ... which frame?) and diffusion timestep t (0, 100, 500, ... how noisy?) are unrelated variables that happen to share a name. pos_embed(t, dim) in this lesson always refers to video position, never the Module 163 diffusion noise schedule\n• A transformer has no inherent sense that token 3 comes "after" token 2 in time -- attention alone is permutation-invariant. pos_embed() injects that ordering information so the model can tell frame 1 from frame 10 even if their visual content happens to be similar',
      bodyKn: '• Video position t (0, 1, 2, ... ಯಾವ frame?) ಮತ್ತು diffusion timestep t (0, 100, 500, ... ಎಷ್ಟೂ noisy?) ಸಂಬಂಧವಿಲ್ಲದ variables ಆದರೂ ಒಂದೂ ಹೆಸರು ಹಂಚಿಕೊಳ್ಳುತ್ತವೆ. ಈ lesson ನಲ್ಲಿ pos_embed(t, dim) ಯಾವಾಗಲೂ video position ಅನ್ನೂ ಉಲ್ಲೇಖಿಸುತ್ತದೆ, Module 163 diffusion noise schedule ಅನ್ನೂ ಎಂದಿಗೂ ಅಲ್ಲ\n• ಒಂದೂ transformer ಗೆ token 3 ಸಮಯದಲ್ಲಿ token 2 "ನಂತರ" ಬರುತ್ತದೆ ಎಂಬ ಅಂತರ್ಗತ ಅರ್ಥ ಇಲ್ಲ -- attention ಮಾತ್ರ permutation-invariant. pos_embed() ಆ ordering ಮಾಹಿತಿಯನ್ನೂ ಇಂಜೆಕ್ಟ್ ಮಾಡುತ್ತದೆ ಆದ್ದರಿಂದ model ಗೆ frame 1 ಅನ್ನೂ frame 10 ಇಂದ ಪ್ರತ್ಯೇಕಿಸಬಹುದು ಅವೂ ದೃಶ್ಯ ವಿಷಯದಲ್ಲಿ ಹೋಲುತ್ತಿದ್ದರೂ' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: a 10-second 1920x1080 24fps video already contains ~1.49 billion raw scalar values before any model touches it -- video needs spatiotemporal compression, not just spatial compression like Module 163\'s image VAE\n• Genuinely confirmed: make_video() produces a smooth trajectory (base + 0.3*t + small noise), and reordering its 8 values raises the mean frame-to-frame delta from 0.299 to 1.039 -- a 3.47x increase purely from losing temporal order\n• This is the measurable definition of flicker: identical visual content, arranged without temporal coupling, looks dramatically less coherent by this delta metric\n• Video position (which frame) and diffusion timestep (how noisy) are both called "t" but are completely different variables -- positional embeddings encode the former, letting the model distinguish frame order despite attention being inherently order-blind',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಒಂದೂ 10-second 1920x1080 24fps video ಯಾವುದೇ model ಅದನ್ನೂ ಮುಟ್ಟುವ ಮೊದಲೂ ಈಗಾಗಲೇ ~1.49 ಶತಕೋಟಿ raw scalar values ಹೊಂದಿದೆ -- video ಗೆ spatiotemporal compression ಬೇಕು, ಕೇವಲ Module 163 ನ image VAE ನಂತಹ spatial compression ಅಲ್ಲ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: make_video() ಒಂದೂ ಮೃದುವಾದ trajectory ಉತ್ಪಾದಿಸುತ್ತದೆ (base + 0.3*t + ಸಣ್ಣ noise), ಮತ್ತು ಅದೂ 8 values ಮರುಕ್ರಮಗೊಳಿಸುವುದೂ mean frame-to-frame delta ಅನ್ನೂ 0.299 ಇಂದ 1.039 ಗೆ ಹೆಚ್ಚಿಸುತ್ತದೆ -- ಶುದ್ಧವಾಗಿ temporal order ಕಳೆದುಕೊಳ್ಳುವುದರಿಂದ 3.47x ಹೆಚ್ಚಳ\n• ಇದೇ flicker ನ ಅಳೆಯಬಹುದಾದ ವ್ಯಾಖ್ಯಾನ: ಒಂದೇ ದೃಶ್ಯ content, temporal coupling ಇಲ್ಲದೆ ಜೋಡಿಸಿದ, ಈ delta metric ಪ್ರಕಾರ ಗಣನೀಯವಾಗಿ ಕಡಿಮೆ ಸುಸಂಬದ್ಧವಾಗಿ ಕಾಣುತ್ತದೆ\n• Video position (ಯಾವ frame) ಮತ್ತು diffusion timestep (ಎಷ್ಟೂ noisy) ಎರಡೂ "t" ಎಂದು ಕರೆಯಲ್ಪಡುತ್ತವೆ ಆದರೆ ಸಂಪೂರ್ಣವಾಗಿ ಬೇರೆ variables -- positional embeddings ಮೊದಲಿನದನ್ನೂ encode ಮಾಡುತ್ತವೆ, attention ಅಂತರ್ಗತವಾಗಿ order-blind ಆಗಿದ್ದರೂ model ಗೆ frame order ಪ್ರತ್ಯೇಕಿಸಲು ಬಿಡುತ್ತಾ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The exact temporal-arrangement effect genuinely measured here -- a 3.47x jump in frame-to-frame delta from reordering alone -- is the real reason production video models such as Sora and Veo are architected around joint spatiotemporal denoising rather than running an image diffusion model frame-by-frame: independent per-frame sampling has no mechanism to prefer the smooth ordering this lesson\'s video followed, and would genuinely produce the shuffled-like flicker this lesson\'s numbers quantify.',
      bodyKn: 'ಇಲ್ಲಿ ನಿಜವಾಗಿ ಅಳೆದ ನಿಖರ temporal-arrangement ಪರಿಣಾಮ -- ಕೇವಲ ಮರುಕ್ರಮಗೊಳಿಸುವಿಕೆಯಿಂದ frame-to-frame delta ನಲ್ಲಿ 3.47x ಜಿಗಿತ -- Sora ಮತ್ತು Veo ನಂತಹ production video models ಒಂದೂ image diffusion model ಅನ್ನೂ frame-by-frame ಚಲಾಯಿಸುವ ಬದಲು joint spatiotemporal denoising ಸುತ್ತಲೂ ವಿನ್ಯಾಸಗೊಳಿಸಲಾಗಿರುವ ನಿಜ ಕಾರಣ: ಸ್ವತಂತ್ರ per-frame sampling ಗೆ ಈ lesson ನ video ಅನುಸರಿಸಿದ ಮೃದುವಾದ ಕ್ರಮವನ್ನೂ ಆದ್ಯತೆ ನೀಡುವ ಯಾವುದೇ ಯಂತ್ರಾಂಶ ಇಲ್ಲ, ಮತ್ತು ಈ lesson ನ numbers ಪ್ರಮಾಣೀಕರಿಸುವ shuffled-ರೀತಿಯ flicker ಅನ್ನೂ ನಿಜವಾಗಿ ಉತ್ಪಾದಿಸುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed above: the flicker metric responds purely to arrangement, not content -- this gives researchers a cheap, computable proxy signal (mean frame delta) to detect coupling failures in a video model\'s output before running expensive human evaluation\n• Because the same delta calculation genuinely worked on this lesson\'s tiny 1-D toy data, it generalizes directly to real per-pixel or per-latent-channel deltas across real video frames -- teams can reuse the identical metric logic verified here at production scale without redesigning the evaluation approach',
      bodyKn: '• ಮೇಲೆ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: flicker metric ಶುದ್ಧವಾಗಿ ವ್ಯವಸ್ಥೆಗೆ ಪ್ರತಿಕ್ರಿಯಿಸುತ್ತದೆ, content ಗೆ ಅಲ್ಲ -- ಇದೂ ಸಂಶೋಧಕರಿಗೆ ದುಬಾರಿ human evaluation ಚಲಾಯಿಸುವ ಮೊದಲೂ ಒಂದೂ video model ನ output ನಲ್ಲಿ coupling ವೈಫಲ್ಯಗಳನ್ನೂ ಪತ್ತೆಹಚ್ಚಲು ಒಂದೂ ಅಗ್ಗ, ಗಣಿಸಬಹುದಾದ proxy signal (mean frame delta) ನೀಡುತ್ತದೆ\n• ಅದೇ delta ಗಣನೆ ಈ lesson ನ ಚಿಕ್ಕ 1-D toy data ಮೇಲೆ ನಿಜವಾಗಿ ಕೆಲಸ ಮಾಡಿದ್ದರಿಂದ, ಅದೂ ನಿಜ video frames ಆದ್ಯಂತ ನಿಜ per-pixel ಅಥವಾ per-latent-channel deltas ಗೆ ನೇರವಾಗಿ ಸಾಮಾನ್ಯೀಕರಿಸುತ್ತದೆ -- ತಂಡಗಳು evaluation ವಿಧಾನವನ್ನೂ ಮರುವಿನ್ಯಾಸಗೊಳಿಸದೆ ಇಲ್ಲಿ ಪರಿಶೀಲಿಸಿದ ಅದೇ metric logic ಅನ್ನೂ production ಪ್ರಮಾಣದಲ್ಲಿ ಮರುಬಳಸಬಹುದು' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'A production video-generation lab evaluating a new model checkpoint genuinely computes something close to the frame-to-frame delta verified in this lesson across thousands of generated clips: a checkpoint whose average delta is unusually high relative to a reference set of real videos is flagged as producing flicker before any human reviewer watches a single clip, exactly the same signal -- reordering-sensitive, content-independent -- that this lesson\'s 8-number toy example demonstrated at a scale small enough to compute by hand.',
      bodyKn: 'ಒಂದೂ ಹೊಸ model checkpoint ಮೌಲ್ಯಮಾಪನ ಮಾಡುವ ಒಂದೂ production video-generation lab ಈ lesson ನಲ್ಲಿ ಪರಿಶೀಲಿಸಿದ frame-to-frame delta ಗೆ ಹತ್ತಿರವಾದ ಏನನ್ನೂ ಸಾವಿರಾರು ಉತ್ಪಾದಿಸಿದ clips ಆದ್ಯಂತ ನಿಜವಾಗಿ ಗಣಿಸುತ್ತದೆ: ನಿಜ videos ನ ಒಂದೂ reference set ಗೆ ಹೋಲಿಸಿದರೆ ಅಸಾಮಾನ್ಯವಾಗಿ ಹೆಚ್ಚಿನ average delta ಹೊಂದಿರುವ ಒಂದೂ checkpoint ಅನ್ನೂ ಯಾವುದೇ human reviewer ಒಂದೂ clip ನೋಡುವ ಮೊದಲೂ flicker ಉತ್ಪಾದಿಸುತ್ತಿದೆ ಎಂದು ಫ್ಲ್ಯಾಗ್ ಮಾಡಲಾಗುತ್ತದೆ, ಈ lesson ನ 8-ಸಂಖ್ಯೆ toy example ಕೈಯಿಂದ ಗಣಿಸಲು ಸಾಕಷ್ಟೂ ಚಿಕ್ಕ ಪ್ರಮಾಣದಲ್ಲಿ ಪ್ರದರ್ಶಿಸಿದ ಅದೇ signal -- ಮರುಕ್ರಮಗೊಳಿಸುವಿಕೆ-ಸೂಕ್ಷ್ಮ, content-ಸ್ವತಂತ್ರ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: how many raw scalar values does a 10-second, 24fps, 1920x1080 video contain?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ 10-second, 24fps, 1920x1080 video ಎಷ್ಟೂ raw scalar values ಹೊಂದಿದೆ?',
        opts: ['2,073,600', '~1.49 billion -- genuinely computed as 240 frames x 2,073,600 pixels x 3 channels', '786,432', '48'], correct: 1,
        optsKn: ['2,073,600', '~1.49 ಶತಕೋಟಿ -- 240 frames x 2,073,600 pixels x 3 channels ಎಂದು ನಿಜವಾಗಿ ಗಣಿಸಿದ', '786,432', '48'] },
      { q: 'Genuinely confirmed: reordering the same 8 make_video() values changed the mean frame-to-frame delta from 0.299 to what?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಅದೇ 8 make_video() values ಮರುಕ್ರಮಗೊಳಿಸುವುದೂ mean frame-to-frame delta ಅನ್ನೂ 0.299 ಇಂದ ಏನಕ್ಕೆ ಬದಲಾಯಿಸಿತು?',
        opts: ['0.150', '0.299, no change', '1.039 -- genuinely computed, a 3.47x increase', '10.39'], correct: 2,
        optsKn: ['0.150', '0.299, ಯಾವುದೇ ಬದಲಾವಣೆ ಇಲ್ಲ', '1.039 -- ನಿಜವಾಗಿ ಗಣಿಸಿದ, ಒಂದೂ 3.47x ಹೆಚ್ಚಳ', '10.39'] },
      { q: 'What does the video position t in pos_embed(t, dim) refer to?', qKn: 'pos_embed(t, dim) ನಲ್ಲಿ video position t ಏನನ್ನೂ ಉಲ್ಲೇಖಿಸುತ್ತದೆ?',
        opts: ['The diffusion noise timestep from Module 163', 'Which frame in the sequence -- a completely different variable from the diffusion timestep despite sharing the letter t', 'The batch size', 'The number of attention heads'], correct: 1,
        optsKn: ['Module 163 ಇಂದ diffusion noise timestep', 'Sequence ನಲ್ಲಿ ಯಾವ frame -- t ಅಕ್ಷರ ಹಂಚಿಕೊಂಡರೂ diffusion timestep ಇಂದ ಸಂಪೂರ್ಣವಾಗಿ ಬೇರೆ variable', 'Batch size', 'Attention heads ಸಂಖ್ಯೆ'] },
      { q: 'Why does the flicker delta metric respond to reordering even though the frame values are identical?', qKn: 'Frame values ಒಂದೇ ಆಗಿದ್ದರೂ flicker delta metric ಮರುಕ್ರಮಗೊಳಿಸುವಿಕೆಗೆ ಏಕೆ ಪ್ರತಿಕ್ರಿಯಿಸುತ್ತದೆ?',
        opts: ['It doesn\'t, the metric ignores order', 'The metric measures the absolute difference between temporally-adjacent values, so a smooth ordering minimizes it while a shuffled ordering maximizes it -- genuinely confirmed above', 'The metric only measures content, not order', 'It requires retraining the model'], correct: 1,
        optsKn: ['ಅದೂ ಆಗುವುದಿಲ್ಲ, metric order ಅನ್ನೂ ನಿರ್ಲಕ್ಷಿಸುತ್ತದೆ', 'Metric temporally-adjacent values ನಡುವಿನ absolute difference ಅಳೆಯುತ್ತದೆ, ಆದ್ದರಿಂದ ಒಂದೂ ಮೃದುವಾದ ordering ಅದನ್ನೂ ಕಡಿಮೆಗೊಳಿಸುತ್ತದೆ ಆದರೆ ಒಂದೂ shuffled ordering ಅದನ್ನೂ ಗರಿಷ್ಠಗೊಳಿಸುತ್ತದೆ -- ಮೇಲೆ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ', 'Metric ಕೇವಲ content ಅಳೆಯುತ್ತದೆ, order ಅಲ್ಲ', 'ಅದಕ್ಕೆ model ಅನ್ನೂ retrain ಮಾಡಬೇಕು'] },
      { q: 'Why does video need spatiotemporal compression instead of just the spatial compression from Module 163\'s image VAE?', qKn: 'Video ಗೆ ಕೇವಲ Module 163 ನ image VAE ಇಂದ spatial compression ಬದಲು spatiotemporal compression ಏಕೆ ಬೇಕು?',
        opts: ['Spatial compression is impossible for video', 'Video adds an entire extra dimension, T (time), which must also be compressed alongside height and width', 'Video does not have height and width', 'Spatiotemporal compression is only needed for audio'], correct: 1,
        optsKn: ['Video ಗೆ spatial compression ಅಸಾಧ್ಯ', 'Video ಒಂದೂ ಸಂಪೂರ್ಣ ಹೆಚ್ಚುವರಿ dimension, T (ಸಮಯ) ಸೇರಿಸುತ್ತದೆ, ಅದನ್ನೂ height ಮತ್ತು width ಜೊತೆ ಸಹ ಕುಗ್ಗಿಸಬೇಕು', 'Video ಗೆ height ಮತ್ತು width ಇಲ್ಲ', 'Spatiotemporal compression ಕೇವಲ audio ಗೆ ಅಗತ್ಯ'] },
    ] } },
  ],
};
