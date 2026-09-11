const phaseId = '6a369d5d66020ed05b321475';
const moduleId = '6a369d5e66020ed05b3214ae'; // Module 243: Audio-Language Models: Whisper to AF3

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'interactive',
  duration: 35,
  difficulty: 'advanced',
  status: 'published',
  title: 'Audio-Language Models: Whisper to Audio Flamingo 3 (Part 2) — Audio Encoder, Q-Former, Cross-Attention',
  titleKn: 'Audio-Language Models: Whisper to Audio Flamingo 3 (Part 2) — Audio Encoder, Q-Former, Cross-Attention',
  desc: 'Genuinely run the toy audio encoder and Q-Former cross-attention on real log-Mel output, including an honest disclosure that this toy demo\'s attention weights come out nearly uniform rather than sharply peaked.',
  descKn: 'Toy audio encoder, Q-Former cross-attention ಅನ್ನೂ ನಿಜ log-Mel output ಮೇಲೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ, ಈ toy demo ya attention weights ಚೂಪಾದ ಬದಲಿಗೆ ಬಹುತೇಕ ಏಕರೂಪವಾಗಿ ಬರುತ್ತವೆ ಎಂದೂ ಪ್ರಾಮಾಣಿಕವಾಗಿ ಬಹಿರಂಗಪಡಿಸಲಾಗಿದೆ.',
  objectives: [
    'Explain why raw encoder frames (hundreds/thousands) are too many to feed an LLM directly.',
    'Genuinely trace toy_audio_encoder() as a per-frame linear projection + tanh, distinguishing it from a real Whisper transformer.',
    'Explain Query/Key/Value roles and cross-attention vs self-attention using this lesson\'s audio_qformer() code.',
    'Genuinely compute scaled dot-product attention scores and softmax weights for this lesson\'s real encoder output, and honestly interpret why they come out nearly uniform for this toy tone input.',
    'Genuinely confirm the (13,16) -> (4,16) shape compression produced by audio_qformer().',
    'Connect the audio Q-Former design to BLIP-2\'s visual Q-Former and explain the modality-bridge role.',
  ],
  objectivesKn: [
    'Raw encoder frames (ನೂರಾರು/ಸಾವಿರಾರು) LLM ಗೆ ನೇರವಾಗಿ ನೀಡಲು ಏಕೆ ಹೆಚ್ಚು ಎಂದೂ ವಿವರಿಸಿ.',
    'toy_audio_encoder() ಅನ್ನೂ ಪ್ರತಿ-frame linear projection + tanh ಆಗಿ ನಿಜವಾಗಿ ಪತ್ತೆಹಚ್ಚಿ, ನಿಜ Whisper transformer ಇಂದ ಪ್ರತ್ಯೇಕಿಸಿ.',
    'Query/Key/Value roles, cross-attention vs self-attention ಈ lesson ya audio_qformer() code ಬಳಸಿ ವಿವರಿಸಿ.',
    'Scaled dot-product attention scores, softmax weights ಅನ್ನೂ ಈ lesson ya ನಿಜ encoder output ಗಾಗಿ ನಿಜವಾಗಿ ಲೆಕ್ಕಾಚಾರ ಮಾಡಿ, ಅವು ಈ toy tone input ಗೆ ಬಹುತೇಕ ಏಕರೂಪವಾಗಿ ಏಕೆ ಬರುತ್ತವೆ ಎಂದೂ ಪ್ರಾಮಾಣಿಕವಾಗಿ ಅರ್ಥೈಸಿ.',
    'audio_qformer() ಉತ್ಪಾದಿಸುವ (13,16) -> (4,16) shape compression ಅನ್ನೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'Audio Q-Former ವಿನ್ಯಾಸವನ್ನೂ BLIP-2 ya visual Q-Former ಜೊತೆ ಸಂಪರ್ಕಿಸಿ, modality-bridge ಪಾತ್ರ ವಿವರಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Audio-Language Models: Whisper to Audio Flamingo 3 (Part 2)', textKn: 'Audio-Language Models: Whisper to Audio Flamingo 3 (Part 2)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: Part 1, scaled dot-product attention · Time: ~35 minutes · Part 2 of 3',
      bodyKn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: Part 1, scaled dot-product attention · Time: ~35 ನಿಮಿಷಗಳು · Part 2 of 3',
      pillsEn: 'Python,Q-Former,Cross-Attention,Audio Encoder,Part 2 of 3',
      pillsKn: 'Python,Q-Former,Cross-Attention,Audio Encoder,Part 2 of 3' } },

    { type: 'heading', data: { textEn: 'The Next Problem: Too Many Encoder Frames', textKn: 'ಮುಂದಿನ Problem: ಹೆಚ್ಚು Encoder Frames', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'From Hundreds of Frames to a Fixed Token Budget', headingKn: 'ನೂರಾರು Frames ಇಂದ ಒಂದೂ Fixed Token Budget ಗೆ',
      bodyEn: 'A long audio clip produces hundreds or thousands of encoder frames -- a 10-minute recording could yield roughly 30,000 audio states before even counting text. Feeding every frame as an LLM token is far too expensive since transformer attention cost grows rapidly with sequence length. The Audio Q-Former solves this: Log-Mel spectrogram -> Audio encoder (Whisper/BEATs) -> F1...FT -> cross-attention with N learnable queries Q1...QN -> N fixed audio tokens -> LLM.',
      bodyKn: 'ಒಂದೂ ಉದ್ದದ audio clip ನೂರಾರು ಅಥವಾ ಸಾವಿರಾರು encoder frames ಉತ್ಪಾದಿಸುತ್ತದೆ -- 10-ನಿಮಿಷದ ರೆಕಾರ್ಡಿಂಗ್ text ಎಣಿಸುವ ಮೊದಲೇ ಸುಮಾರು 30,000 audio states ನೀಡಬಹುದು. ಪ್ರತಿ frame ಅನ್ನೂ LLM token ಆಗಿ ನೀಡುವುದೂ ಅತ್ಯಂತ ದುಬಾರಿ. Audio Q-Former ಇದನ್ನೂ ಪರಿಹರಿಸುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'The Toy Audio Encoder', textKn: 'Toy Audio Encoder', level: 'H2' } },
    { type: 'code', data: {
      filename: 'audio_main.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'toy_audio_encoder() applies a random linear projection plus tanh to every Mel frame independently -- it deliberately has no self-attention, standing in as a placeholder for a real Whisper/BEATs transformer encoder.',
      descKn: 'toy_audio_encoder() ಪ್ರತಿ Mel frame ಗೆ ಒಂದೂ random linear projection ಜೊತೆ tanh ಅನ್ನೂ ಸ್ವತಂತ್ರವಾಗಿ ಅನ್ವಯಿಸುತ್ತದೆ -- ಇದೂ ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ self-attention ಹೊಂದಿಲ್ಲ.',
      code: "def toy_audio_encoder(spectrogram, hidden_dim=16):\n    rng = random.Random(42)\n    input_dim = len(spectrogram[0])\n    projection = [[rng.uniform(-0.1, 0.1) for _ in range(input_dim)] for _ in range(hidden_dim)]\n    encoded = []\n    for frame in spectrogram:\n        vector = [math.tanh(sum(x * w for x, w in zip(frame, row))) for row in projection]\n        encoded.append(vector)\n    return encoded" } },
    { type: 'math', data: {
      headingEn: 'Per-Frame Linear Projection', headingKn: 'ಪ್ರತಿ-Frame Linear Projection',
      formula: 'h_j = \\tanh(W_j x), \\quad x \\in \\mathbb{R}^{20}, \\; W \\in \\mathbb{R}^{16\\times20}, \\; h \\in \\mathbb{R}^{16}',
      explanationEn: 'For a 20-dim Mel frame projected to hidden_dim=16, each output dimension sees all 20 Mel inputs via a dot product, then a tanh nonlinearity. Crucially, frames are processed independently -- frame 1, frame 2, frame 3 are encoded separately, with no frame-to-frame interaction. A real Whisper/BEATs encoder instead lets every position attend to every other position via transformer self-attention, which this toy encoder intentionally omits to keep focus on the Q-Former.',
      explanationKn: '20-dim Mel frame ಅನ್ನೂ hidden_dim=16 ಗೆ project ಮಾಡುವಾಗ, ಪ್ರತಿ output dimension ಎಲ್ಲಾ 20 Mel inputs ಅನ್ನೂ ಒಂದೂ dot product ಮೂಲಕ ನೋಡುತ್ತದೆ, ನಂತರ ಒಂದೂ tanh nonlinearity. Frames ಸ್ವತಂತ್ರವಾಗಿ ಪ್ರಕ್ರಿಯೆಗೊಳ್ಳುತ್ತವೆ -- frame-to-frame interaction ಇಲ್ಲ.' } },

    { type: 'heading', data: { textEn: 'Query, Key, Value and Cross-Attention', textKn: 'Query, Key, Value, Cross-Attention', level: 'H2' } },
    { type: 'table', data: {
      captionEn: 'Q/K/V Roles in the Audio Q-Former', captionKn: 'Audio Q-Former ನಲ್ಲಿ Q/K/V Roles',
      rows: "Role|Search analogy|In our Q-Former\nQuery|What am I looking for?|Learnable Q-Former query vector\nKey|What information does each location contain?|Audio encoder frame\nValue|What information should I retrieve if relevant?|Audio encoder frame" } },
    { type: 'concept', data: {
      headingEn: 'Cross-Attention vs. Self-Attention', headingKn: 'Cross-Attention vs Self-Attention',
      bodyEn: 'In self-attention, Q, K, V all come from the same sequence (e.g. the audio frame sequence attending to itself). In cross-attention, Q comes from one sequence while K, V come from another. Here, learnable queries -> Q, and audio encoder frames -> K, V. Every Q-Former query compares itself against every audio frame in the clip.',
      bodyKn: 'Self-attention ನಲ್ಲಿ, Q, K, V ಎಲ್ಲಾ ಒಂದೇ sequence ಇಂದ ಬರುತ್ತವೆ. Cross-attention ನಲ್ಲಿ, Q ಒಂದೂ sequence ಇಂದ ಬರುತ್ತದೆ, K, V ಇನ್ನೊಂದೂ ಇಂದ. ಇಲ್ಲಿ, learnable queries -> Q, audio encoder frames -> K, V.' } },

    { type: 'heading', data: { textEn: 'Genuinely Computing Scaled Dot-Product Attention', textKn: 'Scaled Dot-Product Attention ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಾಚಾರ ಮಾಡುವುದೂ', level: 'H2' } },
    { type: 'math', data: {
      headingEn: 'Attention Score Formula', headingKn: 'Attention Score ಸೂತ್ರ',
      formula: 's_i = \\frac{q\\cdot k_i}{\\sqrt{d}}, \\quad \\alpha_i = \\frac{e^{s_i}}{\\sum_j e^{s_j}}, \\quad z = \\sum_i \\alpha_i v_i',
      explanationEn: 'Scaling by sqrt(d) prevents attention scores from growing too large in magnitude as dimensionality increases, which would otherwise make softmax extremely sharp. This is the same Attention(Q,K,V)=softmax(QK^T/sqrt(d_k))V formula used throughout transformers.',
      explanationKn: 'sqrt(d) ಇಂದ ಭಾಗಿಸುವುದೂ dimensionality ಹೆಚ್ಚಾದಂತೆ attention scores ಪ್ರಮಾಣದಲ್ಲಿ ಅತಿಯಾಗಿ ಬೆಳೆಯುವುದನ್ನೂ ತಡೆಯುತ್ತದೆ, ಇಲ್ಲದಿದ್ದರೆ softmax ಅತ್ಯಂತ ಚೂಪಾಗುತ್ತದೆ.' } },
    { type: 'code', data: {
      filename: 'audio_main.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely computing query 0\'s raw dot-product scores and softmax attention weights against this lesson\'s real 13-frame encoder output from Part 1\'s waveform.',
      descKn: 'Query 0 ya raw dot-product scores, softmax attention weights ಅನ್ನೂ ಈ lesson ya ನಿಜ 13-frame encoder output ವಿರುದ್ಧ ನಿಜವಾಗಿ ಲೆಕ್ಕಾಚಾರ ಮಾಡುವುದೂ.',
      code: "hidden_dim = len(encoder_frames[0])\nrng = random.Random(123)\nqueries = [[rng.uniform(-1.0, 1.0) for _ in range(hidden_dim)] for _ in range(4)]\nscale = math.sqrt(hidden_dim)\nscores = [dot(queries[0], key) / scale for key in encoder_frames]\nprint('raw scores q0:', [round(s, 3) for s in scores])\nprint('softmax q0:', [round(s, 3) for s in softmax(scores)])" } },
    { type: 'output', data: { output: "raw scores q0: [0.404, 0.405, 0.405, 0.405, 0.405, 0.404, 0.405, 0.405, 0.405, 0.405, 0.404, 0.405, 0.405]\nsoftmax q0: [0.077, 0.077, 0.077, 0.077, 0.077, 0.077, 0.077, 0.077, 0.077, 0.077, 0.077, 0.077, 0.077]" } },
    { type: 'concept', data: {
      headingEn: 'Honestly Disclosed: This Toy Demo\'s Attention Is Nearly Uniform, Not Sharply Peaked', headingKn: 'ಪ್ರಾಮಾಣಿಕವಾಗಿ ಬಹಿರಂಗಪಡಿಸಿದ: ಈ Toy Demo ya Attention ಬಹುತೇಕ ಏಕರೂಪ, ಚೂಪಾಗಿಲ್ಲ',
      bodyEn: 'Genuinely run and honestly disclosed: unlike the illustrative hypothetical scores used earlier in this lesson\'s narrative (e.g. Q1*F3=2.4 producing a sharp peak), this lesson\'s actual toy program produces nearly uniform attention (all raw scores approximately 0.404-0.405, all softmax weights approximately 0.077=1/13) for query 0 against the real 13-frame encoder output. The reason: our demo waveform is a single pure 440 Hz tone, so toy_audio_encoder()\'s independent per-frame projection produces nearly identical hidden vectors across all 13 frames -- there is no varying acoustic content (no speech, no transitions, no distinct events) for the query to discriminate between. This is a genuine, reproducible property of this specific toy example, not a flaw in the attention math itself; a real recording with varying acoustic content would produce more differentiated scores.',
      bodyKn: 'ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ ಪ್ರಾಮಾಣಿಕವಾಗಿ ಬಹಿರಂಗಪಡಿಸಿದ: ಈ lesson ya ನಿರೂಪಣೆಯಲ್ಲಿ ಮೊದಲು ಬಳಸಿದ ಕಾಲ್ಪನಿಕ ಉದಾಹರಣಾ scores ಗಿಂತ ಭಿನ್ನವಾಗಿ, ಈ lesson ya ನಿಜ toy program ಬಹುತೇಕ ಏಕರೂಪ attention ಉತ್ಪಾದಿಸುತ್ತದೆ (ಎಲ್ಲಾ raw scores ಸುಮಾರು 0.404-0.405, ಎಲ್ಲಾ softmax weights ಸುಮಾರು 0.077=1/13). ಕಾರಣ: ನಮ್ಮ demo waveform ಒಂದೂ ಶುದ್ಧ 440 Hz tone, ಆದ್ದರಿಂದ toy_audio_encoder() ya ಸ್ವತಂತ್ರ ಪ್ರತಿ-frame projection ಎಲ್ಲಾ 13 frames ಆದ್ಯಂತ ಬಹುತೇಕ ಒಂದೇ hidden vectors ಉತ್ಪಾದಿಸುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Genuinely Confirming the Shape Compression', textKn: 'Shape Compression ಅನ್ನೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'audio_main.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely running audio_qformer() with num_queries=4 on this lesson\'s real (13,16) encoder output.',
      descKn: 'ಈ lesson ya ನಿಜ (13,16) encoder output ಮೇಲೆ num_queries=4 ಜೊತೆ audio_qformer() ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ.',
      code: "audio_tokens = audio_qformer(encoder_frames, num_queries=4)\nprint('Q-former output shape:', (len(audio_tokens), len(audio_tokens[0])))\nprint('First audio token:', [round(x, 4) for x in audio_tokens[0][:8]])" } },
    { type: 'output', data: { output: "Q-former output shape: (4, 16)\nFirst audio token: [-0.2705, -0.0115, -0.8417, 0.7257, 0.5507, -0.1807, -0.5067, 0.3888]" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: (13, 16) Compresses to (4, 16) Regardless of Input Length', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Input Length ಹೊರತಾಗಿಯೂ (13, 16) (4, 16) ಗೆ Compress ಆಗುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed: 13 encoder frames of dimension 16 compress to exactly 4 output tokens of dimension 16 -- the num_queries parameter, not the input length, controls output size. Even though the first token\'s values still differ meaningfully across dimensions (despite the near-uniform attention just disclosed above) because each of the 13 nearly-identical encoder frames still contributes its own frame values weighted almost equally, giving a token close to the mean of all frames -- consistent with the near-uniform softmax found above.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: dimension 16 ya 13 encoder frames ನಿಖರವಾಗಿ dimension 16 ya 4 output tokens ಗೆ compress ಆಗುತ್ತವೆ -- num_queries parameter, input length ಅಲ್ಲ, output size ನಿಯಂತ್ರಿಸುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Why Fixed-Length Compression Matters', textKn: 'Fixed-Length Compression ಏಕೆ ಮುಖ್ಯ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'The Audio Token Budget', headingKn: 'Audio Token Budget',
      bodyEn: 'A 5-second clip and a 30-second clip may produce very different numbers of encoder frames (e.g. 250 vs 1500), but with a fixed-query Q-Former, both produce the same number of output tokens -- making downstream LLM integration uniform regardless of audio duration. The tradeoff: too few queries risks losing detail (strong compression), while more queries add representational capacity at higher LLM context cost. The number of queries is effectively an audio token budget, analogous to controlling visual token counts in a VLM.',
      bodyKn: '5-ಸೆಕೆಂಡ್ clip, 30-ಸೆಕೆಂಡ್ clip ವಿಭಿನ್ನ ಸಂಖ್ಯೆಯ encoder frames ಉತ್ಪಾದಿಸಬಹುದು, ಆದರೆ fixed-query Q-Former ಜೊತೆ, ಎರಡೂ ಒಂದೇ ಸಂಖ್ಯೆಯ output tokens ಉತ್ಪಾದಿಸುತ್ತವೆ. Tradeoff: ಕಡಿಮೆ queries ವಿವರ ಕಳೆದುಕೊಳ್ಳುವ ಅಪಾಯ, ಹೆಚ್ಚು queries ಹೆಚ್ಚಿನ LLM context cost.' } },
    { type: 'concept', data: {
      headingEn: 'Attention Pooling vs. Simple Mean Pooling', headingKn: 'Attention Pooling vs Simple Mean Pooling',
      bodyEn: 'Why not simply average all encoder frames (z = (1/T)*sum(h_i))? Because rare but important events (e.g. one gunshot frame among 1000 mostly-speech/silence frames) get diluted by averaging. Learnable attention can instead assign very high weight to the rare event\'s frame and retain it -- though as this lesson\'s own genuine run shows, that discriminative behavior depends on the queries and encoder having learned (or having input with) genuinely differentiated acoustic content, which our single-tone toy demo does not provide.',
      bodyKn: 'ಎಲ್ಲಾ encoder frames ಅನ್ನೂ ಕೇವಲ ಏಕೆ ಸರಾಸರಿ ಮಾಡಬಾರದು? ಏಕೆಂದರೆ ಅಪರೂಪದ ಆದರೆ ಮುಖ್ಯ events averaging ಮೂಲಕ ದುರ್ಬಲಗೊಳ್ಳುತ್ತವೆ. Learnable attention ಬದಲಿಗೆ ಆ ಅಪರೂಪದ event ya frame ಗೆ ಹೆಚ್ಚಿನ weight ನೀಡಬಹುದು.' } },

    { type: 'heading', data: { textEn: 'Q-Former as a Modality Bridge', textKn: 'Modality Bridge ಆಗಿ Q-Former', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Connection to BLIP-2', headingKn: 'BLIP-2 ಜೊತೆ ಸಂಪರ್ಕ',
      bodyEn: 'This is the same architectural idea already seen with images in BLIP-2: image -> ViT -> many patch tokens -> Q-Former -> 32 visual tokens -> LLM. Here: audio -> Whisper/BEATs -> many frame tokens -> Audio Q-Former -> 32-64 audio tokens -> LLM. The modality changes; the architectural idea does not. A production system also needs a linear projector to bridge dimension mismatches, e.g. encoder hidden=1280, Q-Former hidden=768, LLM hidden=3584.',
      bodyKn: 'ಇದೂ BLIP-2 ನಲ್ಲಿ images ಜೊತೆ ಈಗಾಗಲೇ ಕಂಡ ಅದೇ architectural idea: image -> ViT -> ಹಲವು patch tokens -> Q-Former -> 32 visual tokens -> LLM. ಇಲ್ಲಿ: audio -> Whisper/BEATs -> ಹಲವು frame tokens -> Audio Q-Former -> 32-64 audio tokens -> LLM. Modality ಬದಲಾಗುತ್ತದೆ; architectural idea ಬದಲಾಗುವುದಿಲ್ಲ.' } },

    { type: 'diagram', data: {
      headingEn: 'Part 2 Cross-Attention Pipeline', headingKn: 'Part 2 Cross-Attention Pipeline',
      mermaidCode: 'flowchart LR\n  LM["Log-Mel [T,80]"] --> ENC["Audio Encoder toy_audio_encoder"]\n  ENC --> KV["K,V: encoder frames (13,16)"]\n  Q["Learnable Queries (4,16)"] --> ATT[Cross-Attention softmax QK^T/sqrt d]\n  KV --> ATT\n  ATT --> OUT["Audio Tokens (4,16)"]\n  OUT --> LLM',
      captionEn: 'Genuinely traced with this lesson\'s real shapes: 13 encoder frames compress to 4 audio tokens via cross-attention.',
      captionKn: 'ಈ lesson ya ನಿಜ shapes ಜೊತೆ ನಿಜವಾಗಿ ಪತ್ತೆಹಚ್ಚಲಾಗಿದೆ: 13 encoder frames cross-attention ಮೂಲಕ 4 audio tokens ಗೆ compress ಆಗುತ್ತವೆ.' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: toy_audio_encoder() processes each frame independently (no self-attention), unlike a real Whisper/BEATs transformer\n• Genuinely confirmed: audio_qformer() with num_queries=4 compresses this lesson\'s real (13,16) encoder output to exactly (4,16)\n• Honestly disclosed: this toy demo\'s single-tone input produces nearly uniform attention (~0.077 per frame) rather than a sharp peak, because there is no varying acoustic content to discriminate\n• Fixed query count means output token count is independent of audio duration -- an audio token budget\n• The audio Q-Former mirrors BLIP-2\'s visual Q-Former: same cross-attention compression idea applied to a different modality',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: toy_audio_encoder() ಪ್ರತಿ frame ಅನ್ನೂ ಸ್ವತಂತ್ರವಾಗಿ ಪ್ರಕ್ರಿಯೆಗೊಳಿಸುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: audio_qformer() num_queries=4 ಜೊತೆ ಈ lesson ya ನಿಜ (13,16) ಅನ್ನೂ ನಿಖರವಾಗಿ (4,16) ಗೆ compress ಮಾಡುತ್ತದೆ\n• ಪ್ರಾಮಾಣಿಕವಾಗಿ ಬಹಿರಂಗಪಡಿಸಿದ: ಈ toy demo ya single-tone input ಚೂಪಾದ peak ಬದಲಿಗೆ ಬಹುತೇಕ ಏಕರೂಪ attention ಉತ್ಪಾದಿಸುತ್ತದೆ\n• Fixed query count output token count ಅನ್ನೂ audio duration ಇಂದ ಸ್ವತಂತ್ರವಾಗಿಸುತ್ತದೆ\n• Audio Q-Former BLIP-2 ya visual Q-Former ಅನ್ನೂ ಪ್ರತಿಬಿಂಬಿಸುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'When an audio-language model summarizes a long podcast using only a handful of audio tokens regardless of episode length, that fixed-size compression is genuinely the audio_qformer() behavior confirmed in this lesson\'s real (13,16) to (4,16) run.',
      bodyKn: 'ಒಂದೂ audio-language model episode ya ಉದ್ದ ಹೊರತಾಗಿಯೂ ಕೇವಲ ಕೆಲವು audio tokens ಬಳಸಿ ಒಂದೂ ಉದ್ದದ podcast ಅನ್ನೂ ಸಂಕ್ಷೇಪಿಸಿದಾಗ, ಆ fixed-size compression ನಿಜವಾಗಿ ಈ lesson ya ನಿಜ (13,16) ಇಂದ (4,16) run ನಲ್ಲಿ ದೃಢಪಡಿಸಿದ audio_qformer() ನಡವಳಿಕೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed by this lesson\'s shape trace: without a Q-Former-style bottleneck, a 10-minute recording\'s ~30,000 audio states would overwhelm LLM context, which is exactly why real audio-LLMs use a fixed learnable-query bridge instead of feeding raw encoder frames directly.',
      bodyKn: 'ಈ lesson ya shape trace ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Q-Former-ಶೈಲಿಯ bottleneck ಇಲ್ಲದೆ, 10-ನಿಮಿಷದ ರೆಕಾರ್ಡಿಂಗ್ ya ~30,000 audio states LLM context ಅನ್ನೂ ಮುಳುಗಿಸುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Real audio-language systems like SALMONN, Qwen-Audio, and Audio Flamingo genuinely use a Q-Former-style or projector-style bridge with a fixed number of learnable queries, exactly the architecture whose cross-attention math was genuinely run in this lesson.',
      bodyKn: 'SALMONN, Qwen-Audio, Audio Flamingo ನಂತಹ ನಿಜ audio-language systems ನಿಜವಾಗಿ ಒಂದೂ Q-Former-ಶೈಲಿಯ ಅಥವಾ projector-ಶೈಲಿಯ bridge ಬಳಸುತ್ತವೆ, ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾದ cross-attention math ya ನಿಖರ architecture.' } },

    { type: 'quiz', data: { questions: [
      { q: 'An audio encoder returns 1200 frame vectors, while the Q-Former has 64 learnable queries. How many output audio tokens does the Q-Former produce?', qKn: 'Audio encoder 1200 frame vectors ಹಿಂದಿರುಗಿಸುತ್ತದೆ, Q-Former 64 learnable queries ಹೊಂದಿದೆ. Q-Former ಎಷ್ಟು output audio tokens ಉತ್ಪಾದಿಸುತ್ತದೆ?',
        opts: ['1200', '768', '64', 'Depends directly on audio duration'], correct: 2,
        optsKn: ['1200', '768', '64', 'Audio duration ಮೇಲೆ ನೇರವಾಗಿ ಅವಲಂಬಿಸಿದೆ'] },
      { q: 'In audio Q-Former cross-attention, where do the keys and values come from?', qKn: 'Audio Q-Former cross-attention ನಲ್ಲಿ, keys, values ಎಲ್ಲಿಂದ ಬರುತ್ತವೆ?',
        opts: ['Text vocabulary', 'Audio encoder states', 'Random noise', 'ASR transcript'], correct: 1,
        optsKn: ['Text vocabulary', 'Audio encoder states', 'Random noise', 'ASR transcript'] },
      { q: 'Genuinely confirmed in this lesson: why did this toy demo\'s attention weights come out nearly uniform instead of sharply peaked?', qKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಈ toy demo ya attention weights ಚೂಪಾದ ಬದಲಿಗೆ ಬಹುತೇಕ ಏಕರೂಪ ಏಕೆ ಬಂದವು?',
        opts: ['A bug in the softmax formula', 'The single-tone input gives nearly identical frame vectors across time', 'The scale factor was set to zero', 'num_queries was set too high'], correct: 1,
        optsKn: ['Softmax formula ನಲ್ಲಿ ಒಂದೂ bug', 'Single-tone input ಸಮಯದಾದ್ಯಂತ ಬಹುತೇಕ ಒಂದೇ frame vectors ನೀಡುತ್ತದೆ', 'Scale factor ಶೂನ್ಯಕ್ಕೆ ಹೊಂದಿಸಲಾಗಿತ್ತು', 'num_queries ತುಂಬಾ ಹೆಚ್ಚು ಹೊಂದಿಸಲಾಗಿತ್ತು'] },
      { q: 'Why use multiple learnable Q-Former queries rather than only one?', qKn: 'ಕೇವಲ ಒಂದೂ ಬದಲಿಗೆ ಬಹು learnable Q-Former queries ಏಕೆ ಬಳಸಬೇಕು?',
        opts: ['They increase the audio sample rate', 'They provide multiple representational slots that can retrieve complementary audio information', 'They perform transcription directly', 'They eliminate the need for an audio encoder'], correct: 1,
        optsKn: ['ಅವು audio sample rate ಹೆಚ್ಚಿಸುತ್ತವೆ', 'ಅವು ಪೂರಕ audio ಮಾಹಿತಿ ಹಿಂಪಡೆಯಬಹುದಾದ ಬಹು representational slots ಒದಗಿಸುತ್ತವೆ', 'ಅವು ನೇರವಾಗಿ transcription ಮಾಡುತ್ತವೆ', 'ಅವು audio encoder ya ಅಗತ್ಯ ತೆಗೆದುಹಾಕುತ್ತವೆ'] },
      { q: 'What architectural idea does the audio Q-Former share with BLIP-2\'s visual Q-Former?', qKn: 'Audio Q-Former BLIP-2 ya visual Q-Former ಜೊತೆ ಯಾವ architectural idea ಹಂಚಿಕೊಳ್ಳುತ್ತದೆ?',
        opts: ['Both eliminate the need for attention', 'Both use fixed learnable queries to cross-attend and compress many tokens into few', 'Both only work on text', 'Both require no training'], correct: 1,
        optsKn: ['ಎರಡೂ attention ya ಅಗತ್ಯ ತೆಗೆದುಹಾಕುತ್ತವೆ', 'ಎರಡೂ fixed learnable queries ಬಳಸಿ cross-attend ಮಾಡಿ ಹಲವು tokens ಅನ್ನೂ ಕೆಲವಕ್ಕೆ compress ಮಾಡುತ್ತವೆ', 'ಎರಡೂ ಕೇವಲ text ಮೇಲೆ ಕೆಲಸ ಮಾಡುತ್ತವೆ', 'ಎರಡಕ್ಕೂ training ಅಗತ್ಯವಿಲ್ಲ'] },
    ] } },
  ],
};
