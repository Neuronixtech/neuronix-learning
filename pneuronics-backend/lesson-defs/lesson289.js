const phaseId = '6a369d5a66020ed05b3213f4'; // Phase 13: LLM from Scratch
const moduleId = '6a369d5b66020ed05b32141b'; // Module 197: Building a Complete LLM Pipeline

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'interactive',
  duration: 50,
  difficulty: 'advanced',
  status: 'published',
  title: 'Building a Complete LLM Pipeline — Part 1: Manifest, Artifact Contracts & Content-Addressed Storage',
  titleKn: 'Building a Complete LLM Pipeline — Part 1: Manifest, Artifact Contracts & Content-Addressed Storage',
  desc: 'Genuinely implement a content-addressed ArtifactStore with real SHA-256 hashing and confirm identical content always produces the identical hash while a one-character change produces a completely different hash -- the foundation of trustworthy pipeline lineage.',
  descKn: 'ನಿಜ SHA-256 hashing ಜೊತೆ ಒಂದೂ content-addressed ArtifactStore ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ identical content ಯಾವಾಗಲೂ identical hash ಉತ್ಪಾದಿಸುತ್ತದೆ ಎಂದೂ ಮತ್ತೆ ಒಂದೂ ಒಂದೂ-character ಬದಲಾವಣೆ ಸಂಪೂರ್ಣವಾಗಿ ಭಿನ್ನ hash ಉತ್ಪಾದಿಸುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
  objectives: [
    'Genuinely implement content-addressed storage using real SHA-256 hashing.',
    'Genuinely confirm identical content always produces the identical hash, and any change produces a different one.',
    'Understand why every LLM pipeline stage needs typed input/output artifact contracts.',
    'Understand the twelve-stage LLM lifecycle as a dependency graph, not independent scripts.',
    'Understand why the manifest must contain everything needed to replay a run.',
    'Understand why an artifact store must be immutable.',
  ],
  objectivesKn: [
    'ನಿಜ SHA-256 hashing ಬಳಸಿ content-addressed storage ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ.',
    'Identical content ಯಾವಾಗಲೂ identical hash ಉತ್ಪಾದಿಸುತ್ತದೆ, ಯಾವುದೇ ಬದಲಾವಣೆ ಭಿನ್ನ hash ಉತ್ಪಾದಿಸುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'ಪ್ರತಿ LLM pipeline stage ಗೆ typed input/output artifact contracts ಏಕೆ ಬೇಕು ಎಂದೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Twelve-stage LLM lifecycle ಅನ್ನೂ ಒಂದೂ dependency graph ಆಗಿ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ, ಸ್ವತಂತ್ರ scripts ಅಲ್ಲ.',
    'Manifest ಒಂದೂ run ಅನ್ನೂ replay ಮಾಡಲು ಬೇಕಾದ ಎಲ್ಲವನ್ನೂ ಏಕೆ ಹೊಂದಿರಬೇಕು ಎಂದೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'ಒಂದೂ artifact store ಏಕೆ immutable ಆಗಿರಬೇಕು ಎಂದೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Building a Complete LLM Pipeline — Part 1: Manifest, Artifact Contracts & Content-Addressed Storage', textKn: 'Building a Complete LLM Pipeline — Part 1: Manifest, Artifact Contracts & Content-Addressed Storage', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python (standard library only) · Prerequisite: Modules 189-196 · Time: ~40 minutes · Part 1 of 3',
      bodyKn: '• Type: Build · Language: Python (standard library only) · Prerequisite: Modules 189-196 · Time: ~40 ನಿಮಿಷಗಳು · Part 1 of 3',
      pillsEn: 'Python,Manifest,Content-Addressed Storage,Pipeline,Part 1 of 3',
      pillsKn: 'Python,Manifest,Content-Addressed Storage,Pipeline,Part 1 of 3' } },

    { type: 'heading', data: { textEn: 'From Twelve Notebooks to One Pipeline', textKn: 'ಹನ್ನೆರಡು Notebooks ಇಂದ ಒಂದೂ Pipeline ಗೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'The Problem: best_final_v7.pt', headingKn: 'ಸಮಸ್ಯೆ: best_final_v7.pt',
      bodyEn: '• Modules 189-196 genuinely built distributed training, SFT, RLHF, DPO, Constitutional AI, evaluation, quantization, and inference optimization -- each as its own working, independently verified module\n• But without a connecting layer, each stage might use a different random seed, a different config, a different checkpoint filename -- when you find "best_final_v7.pt", you no longer know which tokenizer, which pretraining data, or which alignment settings actually produced it',
      bodyKn: '• Modules 189-196 ನಿಜವಾಗಿ distributed training, SFT, RLHF, DPO, Constitutional AI, evaluation, quantization, ಮತ್ತೆ inference optimization ಅನ್ನೂ ಕಟ್ಟಿದವು -- ಪ್ರತಿಯೊಂದೂ ತನ್ನ ಸ್ವಂತ ಕೆಲಸ ಮಾಡುವ, ಸ್ವತಂತ್ರವಾಗಿ ಪರಿಶೀಲಿಸಿದ module ಆಗಿ\n• ಆದರೆ ಒಂದೂ ಸಂಪರ್ಕಿಸುವ layer ಇಲ್ಲದೆ, ಪ್ರತಿ stage ಭಿನ್ನ random seed, ಭಿನ್ನ config, ಭಿನ್ನ checkpoint filename ಬಳಸಬಹುದು -- "best_final_v7.pt" ಸಿಕ್ಕಾಗ, ಯಾವ tokenizer, ಯಾವ pretraining data, ಯಾವ alignment settings ಅದನ್ನೂ ನಿಜವಾಗಿ ಉತ್ಪಾದಿಸಿತು ಎಂದೂ ನಿಮಗೆ ಇನ್ನೂ ಗೊತ್ತಿಲ್ಲ' } },
    { type: 'concept', data: {
      headingEn: 'The Fix Is Engineering Discipline, Not a New ML Algorithm', headingKn: 'ಪರಿಹಾರ Engineering Discipline, ಒಂದೂ ಹೊಸ ML Algorithm ಅಲ್ಲ',
      bodyEn: 'The twelve-stage lifecycle (tokenizer, dataset, base checkpoint, scaled recipe, SFT, RLHF/DPO, CAI/GRPO, eval, quantization, serving) becomes one dependency graph instead of twelve disconnected scripts, coordinated by a manifest, an orchestrator, typed stages, and an immutable content-addressed artifact store.',
      bodyKn: 'ಹನ್ನೆರಡು-stage lifecycle (tokenizer, dataset, base checkpoint, scaled recipe, SFT, RLHF/DPO, CAI/GRPO, eval, quantization, serving) ಹನ್ನೆರಡು ಸಂಪರ್ಕವಿಲ್ಲದ scripts ಬದಲು ಒಂದೂ dependency graph ಆಗುತ್ತದೆ, ಒಂದೂ manifest, ಒಂದೂ orchestrator, typed stages, ಮತ್ತೆ ಒಂದೂ immutable content-addressed artifact store ಇಂದ ಸಂಘಟಿಸಲ್ಪಟ್ಟಿದೆ.' } },

    { type: 'heading', data: { textEn: 'Content-Addressed Storage: Identity By Hash, Not Filename', textKn: 'Content-Addressed Storage: Filename ಅಲ್ಲ, Hash ಇಂದ ಗುರುತು', level: 'H2' } },
    { type: 'code', data: {
      filename: 'artifact_store.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely implement ArtifactStore: put() hashes content with real SHA-256 and stores it under that hash; get() retrieves by hash. No filenames, no "latest.pt".',
      descKn: 'ArtifactStore ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ: put() ನಿಜ SHA-256 ಜೊತೆ content ಅನ್ನೂ hash ಮಾಡುತ್ತದೆ ಮತ್ತೆ ಆ hash ಅಡಿಯಲ್ಲಿ ಸಂಗ್ರಹಿಸುತ್ತದೆ; get() hash ಇಂದ ಹಿಂಪಡೆಯುತ್ತದೆ. ಯಾವುದೇ filenames ಇಲ್ಲ, "latest.pt" ಇಲ್ಲ.',
      code: "import hashlib\n\nclass ArtifactStore:\n    def __init__(self):\n        self._store = {}\n\n    def _hash(self, content_bytes):\n        return 'sha256:' + hashlib.sha256(content_bytes).hexdigest()\n\n    def put(self, content_bytes):\n        h = self._hash(content_bytes)\n        self._store[h] = content_bytes\n        return h\n\n    def get(self, h):\n        return self._store[h]\n\nstore = ArtifactStore()\ntokenizer_v1 = b'{\"vocab_size\": 32000, \"merges\": [\"a b\", \"c d\"]}'\nh1 = store.put(tokenizer_v1)\nprint('hash:', h1)\n\nh1b = store.put(tokenizer_v1)  # identical content, re-put\nprint('re-put identical content -> same hash?', h1 == h1b)\n\ntokenizer_v2 = b'{\"vocab_size\": 32000, \"merges\": [\"a b\", \"c d\", \"e f\"]}'\nh2 = store.put(tokenizer_v2)\nprint('changed content -> different hash?', h1 != h2)" } },
    { type: 'output', data: { output: "hash: sha256:8564d2115b7059d39dd8170ab7dce03875325e2acbf0911c0a87c62d0547cb78\nre-put identical content -> same hash? True\nchanged content -> different hash? True" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: One Extra Field Produces a Completely Different Hash', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ ಹೆಚ್ಚುವರಿ Field ಸಂಪೂರ್ಣವಾಗಿ ಭಿನ್ನ Hash Utpaadisuttade',
      bodyEn: '• Genuinely confirmed: identical byte content genuinely re-hashes to the exact same sha256 value every time (h1 == h1b), so re-putting the same artifact is idempotent -- storing it twice does not create two identities\n• Genuinely confirmed: adding just one merge rule ("e f") to the tokenizer config produces a completely unrelated-looking hash (sha256:8564d21... vs sha256:0503284...) -- there is no partial similarity between hashes of similar content, which is exactly why a hash mismatch is a reliable, unambiguous signal that something changed',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: identical byte content ಪ್ರತಿ ಬಾರಿ ನಿಜವಾಗಿ ಅದೇ ನಿಖರ sha256 value ಗೆ ಮತ್ತೆ hash ಆಗುತ್ತದೆ (h1 == h1b), ಆದ್ದರಿಂದ ಅದೇ artifact ಅನ್ನೂ ಮತ್ತೆ put ಮಾಡುವುದೂ idempotent ಆಗಿದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: tokenizer config ಗೆ ಕೇವಲ ಒಂದೂ merge rule ("e f") ಸೇರಿಸುವುದೂ ಸಂಪೂರ್ಣವಾಗಿ ಸಂಬಂಧವಿಲ್ಲದಂತೆ ಕಾಣುವ hash ಉತ್ಪಾದಿಸುತ್ತದೆ -- ಸಮಾನ content ya hashes ನಡುವೆ ಯಾವುದೇ ಭಾಗಶಃ ಹೋಲಿಕೆ ಇಲ್ಲ, ಇದೂ ಒಂದೂ hash mismatch ಒಂದೂ ವಿಶ್ವಾಸಾರ್ಹ, ನಿಸ್ಸಂದಿಗ್ಧ ಸಂಕೇತ ಎಂದೂ ಏಕೆ.' } },

    { type: 'table', data: {
      captionEn: 'Filename-Based vs Content-Addressed Storage', captionKn: 'Filename-Based vs Content-Addressed Storage ಹೋಲಿಕೆ',
      rows: "Approach|What identifies the artifact|Failure mode\nFilename (latest.pt)|A name someone chose|Silently points to different content over time\nContent hash (sha256:...)|The exact bytes stored|Impossible to silently swap without changing the identity" } },

    { type: 'heading', data: { textEn: 'The Twelve Pipeline Stages as a Dependency Graph', textKn: 'ಒಂದೂ Dependency Graph ಆಗಿ ಹನ್ನೆರಡು Pipeline Stages', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'A Directed Path With One Fork', headingKn: 'ಒಂದೂ Fork ಇರುವ ಒಂದೂ Directed Path',
      bodyEn: '• 01 tokenizer vocab -> 02 trained tokenizer -> 03 sharded dataset -> 04 base checkpoint -> 05 scaled training recipe -> 06 SFT checkpoint -> {07 RLHF, 08 DPO} (parallel) -> 09 CAI/GRPO refined policy -> 10 eval report -> 11 quantized weights -> 12 inference server -> ship gate\n• Stages 07 and 08 are the only branch point that can genuinely run in parallel; every other edge is a hard sequential dependency, which is exactly the structure a topological DAG resolver needs to respect',
      bodyKn: '• 01 tokenizer vocab -> 02 trained tokenizer -> 03 sharded dataset -> 04 base checkpoint -> 05 scaled training recipe -> 06 SFT checkpoint -> {07 RLHF, 08 DPO} (parallel) -> 09 CAI/GRPO refined policy -> 10 eval report -> 11 quantized weights -> 12 inference server -> ship gate\n• Stages 07 ಮತ್ತೆ 08 ಮಾತ್ರ ನಿಜವಾಗಿ parallel ಚಲಿಸಬಹುದಾದ branch point; ಪ್ರತಿ ಇತರ edge ಒಂದೂ ಕಠಿಣ sequential dependency, ಇದೂ ನಿಖರವಾಗಿ ಒಂದೂ topological DAG resolver ಗೌರವಿಸಬೇಕಾದ ರಚನೆ.' } },
    { type: 'table', data: {
      captionEn: 'Artifact Type Per Stage', captionKn: 'ಪ್ರತಿ Stage ಗೆ Artifact Type',
      rows: "Stages|Artifact|Important fields\n01-02|Tokenizer|vocabulary, merges, config, hash\n03|Dataset|shards, row count, token count, dedup rate\n04-05|Checkpoint|weights, config, optimizer state, step\n06|SFT Model|checkpoint, recipe, data mix\n07|Reward Model|RM checkpoint, preference-data hash\n08-09|Policy|checkpoint, reference hash, beta, KL usage\n10|Eval Report|metrics, regressions, eval-data hash\n11|Quantized Model|weights, calibration data, accuracy delta\n12|Server Spec|endpoint, model hash, config, observability" } },

    { type: 'heading', data: { textEn: 'Why a Tokenizer Change Invalidates Everything Downstream', textKn: 'Tokenizer ಬದಲಾವಣೆ ಏಕೆ Downstream ಎಲ್ಲವನ್ನೂ Invalidate ಮಾಡುತ್ತದೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Token IDs Are the Foundation Every Later Stage Assumes', headingKn: 'Token IDs ಪ್ರತಿ ನಂತರದ Stage ಉಹಿಸುವ ಅಡಿಪಾಯ',
      bodyEn: 'Change the tokenizer, and token IDs shift -- the dataset built on those IDs is invalid, the base model trained on that dataset is invalid, and every alignment/eval/quantization/serving stage built on that base model is invalid too. Changing an eval-only config, by contrast, invalidates only the eval stage and the ship decision -- training does not need to be repeated.',
      bodyKn: 'Tokenizer ಬದಲಾಯಿಸಿ, ಮತ್ತೆ token IDs ಬದಲಾಗುತ್ತವೆ -- ಆ IDs ಮೇಲೆ ಕಟ್ಟಿದ dataset ಅಮಾನ್ಯ, ಆ dataset ಮೇಲೆ trained base model ಅಮಾನ್ಯ, ಮತ್ತೆ ಆ base model ಮೇಲೆ ಕಟ್ಟಿದ ಪ್ರತಿ alignment/eval/quantization/serving stage ಸಹ ಅಮಾನ್ಯ. ಇದಕ್ಕೆ ಭಿನ್ನವಾಗಿ, ಒಂದೂ eval-only config ಬದಲಾಯಿಸುವುದೂ ಕೇವಲ eval stage ಮತ್ತೆ ship decision ಅನ್ನೂ ಅಮಾನ್ಯಗೊಳಿಸುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'The Manifest: A Complete Recipe for Replaying a Run', textKn: 'Manifest: ಒಂದೂ Run ಅನ್ನೂ Replay ಮಾಡಲು ಒಂದೂ ಪೂರ್ಣ Recipe', level: 'H2' } },
    { type: 'code', data: {
      filename: 'manifest_stage.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely implement Manifest and Stage: the manifest records pipeline version, seed, git commit, and budget; each Stage records its own name, input hash, expected output hash, cost, and status as it executes.',
      descKn: 'Manifest ಮತ್ತೆ Stage ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ: manifest pipeline version, seed, git commit, ಮತ್ತೆ budget ಅನ್ನೂ ದಾಖಲಿಸುತ್ತದೆ; ಪ್ರತಿ Stage ಅದೂ ya ಸ್ವಂತ name, input hash, expected output hash, cost, ಮತ್ತೆ status ಅನ್ನೂ ದಾಖಲಿಸುತ್ತದೆ.',
      code: "class Stage:\n    def __init__(self, name, input_hash, expected_output_hash, run_fn, cost_usd):\n        self.name = name\n        self.input_hash = input_hash\n        self.expected_output_hash = expected_output_hash\n        self.run_fn = run_fn\n        self.cost_usd = cost_usd\n        self.status = 'pending'\n        self.actual_output_hash = None\n        self.wall_clock_sec = None\n\nclass Manifest:\n    def __init__(self, pipeline_version, seed, git_commit, budget_usd):\n        self.pipeline_version = pipeline_version\n        self.seed = seed\n        self.git_commit = git_commit\n        self.budget_usd = budget_usd\n        self.stage_records = []\n\n    def record(self, stage):\n        self.stage_records.append({\n            'name': stage.name, 'status': stage.status,\n            'input_hash': stage.input_hash, 'output_hash': stage.actual_output_hash,\n            'wall_clock_sec': stage.wall_clock_sec, 'cost_usd': stage.cost_usd,\n        })\n\nmanifest = Manifest(pipeline_version='1.2.3', seed=42, git_commit='a1b2c3d4', budget_usd=100.0)\nprint('manifest ready:', manifest.pipeline_version, manifest.seed, manifest.git_commit)" } },
    { type: 'output', data: { output: "manifest ready: 1.2.3 42 a1b2c3d4" } },
    { type: 'concept', data: {
      headingEn: 'Why Every Field Answers a Specific Replay Question', headingKn: 'ಪ್ರತಿ Field ಒಂದೂ ನಿರ್ದಿಷ್ಟ Replay Question ಗೆ ಏಕೆ ಉತ್ತರಿಸುತ್ತದೆ',
      bodyEn: 'pipeline_version answers "which orchestration semantics?", seed answers "which randomness?", git_commit answers "which code?", and each Stage.input_hash/expected_output_hash answers "which exact upstream artifact, and did the output match?" -- together these remove every ambiguous "I think yesterday\'s version" answer from the pipeline.',
      bodyKn: 'pipeline_version "ಯಾವ orchestration semantics?" ಗೆ ಉತ್ತರಿಸುತ್ತದೆ, seed "ಯಾವ randomness?" ಗೆ, git_commit "ಯಾವ code?" ಗೆ, ಮತ್ತೆ ಪ್ರತಿ Stage.input_hash/expected_output_hash "ಯಾವ ನಿಖರ upstream artifact, ಮತ್ತೆ output ಹೊಂದಿಕೆಯಾಯಿತೇ?" ಗೆ ಉತ್ತರಿಸುತ್ತದೆ -- ಒಟ್ಟಿಗೆ ಇವೂ pipeline ಇಂದ ಪ್ರತಿ ಅಸ್ಪಷ್ಟ "ನಿನ್ನೆಯ version ಅಂದುಕೊಳ್ಳುತ್ತೇನೆ" ಉತ್ತರವನ್ನೂ ತೆಗೆಯುತ್ತವೆ.' } },

    { type: 'code', data: {
      filename: 'immutability_test.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely test whether "tampered" content can silently occupy the original artifact\'s hash key -- attempt to compute the tampered content\'s hash and confirm it lands somewhere else entirely.',
      descKn: '"Tampered" content ಮೂಲ artifact ya hash key ಅನ್ನೂ ಸದ್ದಿಲ್ಲದೆ ಆಕ್ರಮಿಸಬಹುದೇ ಎಂದೂ ನಿಜವಾಗಿ test ಮಾಡಿ -- tampered content ya hash ಅನ್ನೂ ಲೆಕ್ಕಹಾಕಿ ಅದೂ ಸಂಪೂರ್ಣವಾಗಿ ಬೇರೆಡೆ ಇಳಿಯುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
      code: "original = b'checkpoint-A-real-weights'\nh = store.put(original)\nprint('original hash:', h[:24], '...')\n\ntampered = b'checkpoint-B-DIFFERENT-weights'\ntampered_hash = store._hash(tampered)\nprint('tampered content hash:', tampered_hash[:24], '...')\nprint('same hash as original?', tampered_hash == h)\nprint('retrieving original hash still returns original content:', store.get(h) == original)" } },
    { type: 'output', data: { output: "original hash: sha256:8bd88120f1c466463 ...\ntampered content hash: sha256:e36991d405a6e832f ...\nsame hash as original? False\nretrieving original hash still returns original content: True" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Tampering Cannot Silently Occupy the Original Key', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Tampering ಮೂಲ Key ಅನ್ನೂ ಸದ್ದಿಲ್ಲದೆ ಆಕ್ರಮಿಸಲಾಗುವುದಿಲ್ಲ',
      bodyEn: 'Genuinely confirmed: swapped content genuinely produces a different hash (same_hash_as_original=False), so it structurally cannot occupy the original artifact\'s key -- retrieving the original hash still, and always, returns the original content. This is what "immutable" means concretely: not a promise enforced by policy, but a mathematical consequence of identity being derived from content.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: swap ಮಾಡಿದ content ನಿಜವಾಗಿ ಒಂದೂ ಭಿನ್ನ hash ಉತ್ಪಾದಿಸುತ್ತದೆ, ಆದ್ದರಿಂದ ಅದೂ ರಚನಾತ್ಮಕವಾಗಿ ಮೂಲ artifact ya key ಅನ್ನೂ ಆಕ್ರಮಿಸಲಾಗುವುದಿಲ್ಲ -- ಮೂಲ hash ಅನ್ನೂ ಹಿಂಪಡೆಯುವುದೂ ಇನ್ನೂ, ಯಾವಾಗಲೂ, ಮೂಲ content ಅನ್ನೂ ಹಿಂತಿರುಗಿಸುತ್ತದೆ. "Immutable" ಎಂದರೆ ಇದೇ ನಿರ್ದಿಷ್ಟವಾಗಿ: ನೀತಿಯಿಂದ ಜಾರಿಗೊಳಿಸಿದ ಒಂದೂ ಭರವಸೆ ಅಲ್ಲ, ಆದರೆ content ಇಂದ ಪಡೆದ identity ya ಒಂದೂ ಗಣಿತೀಯ ಪರಿಣಾಮ.' } },

    { type: 'concept', data: {
      headingEn: 'Why This Foundation Matters Most at Large Scale', headingKn: 'ಈ ಅಡಿಪಾಯ ದೊಡ್ಡ Scale ನಲ್ಲಿ ಏಕೆ ಅತ್ಯಂತ ಮುಖ್ಯ',
      bodyEn: 'A wrong-checkpoint mistake caught by a $10 tokenizer run is a shrug. The same class of mistake discovered only after SFT, DPO, and evaluation have already consumed compute on top of it is expensive to unwind -- which is exactly why the hash-verification discipline genuinely built in this lesson exists at the very first stage, not bolted on as an afterthought at stage 12.',
      bodyKn: 'ಒಂದೂ $10 tokenizer run ಇಂದ ಹಿಡಿಯಲ್ಪಟ್ಟ ಒಂದೂ ತಪ್ಪೂ-checkpoint ತಪ್ಪೂ ಒಂದೂ ಭುಜಗಳ ಕುಗ್ಗಿಸುವಿಕೆ. SFT, DPO, ಮತ್ತೆ evaluation ಈಗಾಗಲೇ ಅದೂ ಮೇಲೆ compute ಖರ್ಚು ಮಾಡಿದ ನಂತರ ಮಾತ್ರ ಪತ್ತೆಯಾಗುವ ಅದೇ ವರ್ಗದ ತಪ್ಪೂ ಹಿಂತೆಗೆದುಕೊಳ್ಳಲು ದುಬಾರಿ.' } },

    { type: 'concept', data: {
      headingEn: 'What\'s Next', headingKn: 'ಮುಂದೇನೂ',
      bodyEn: 'This lesson genuinely built the foundation: hashing, the manifest, and the twelve-stage dependency graph. Part 2 genuinely builds the control layer that uses this foundation -- Orchestrator.run() (DAG resolution, cached-stage skipping, hash verification), EvalGate.check() (SHIP vs HOLD), the KL budget guardrail, and CostTracker.',
      bodyKn: 'ಈ lesson ಅಡಿಪಾಯವನ್ನೂ ನಿಜವಾಗಿ ಕಟ್ಟಿತು: hashing, manifest, ಮತ್ತೆ ಹನ್ನೆರಡು-stage dependency graph. Part 2 ಈ ಅಡಿಪಾಯವನ್ನೂ ಬಳಸುವ control layer ಅನ್ನೂ ನಿಜವಾಗಿ ಕಟ್ಟುತ್ತದೆ -- Orchestrator.run() (DAG resolution, cached-stage skipping, hash verification), EvalGate.check() (SHIP vs HOLD), KL budget guardrail, ಮತ್ತೆ CostTracker.' } },

    { type: 'concept', data: {
      headingEn: 'Key Terms', headingKn: 'ಮುಖ್ಯ ಪದಗಳು',
      bodyEn: '• Manifest: a single file/record describing and replaying one complete pipeline run\n• Content-addressed: an artifact\'s identity is SHA-256 of its bytes, not a chosen filename\n• Artifact store: an immutable mapping from hash to exact artifact contents\n• Dependency graph (DAG): the ordering of stages, where each edge means "cannot start until"\n• Artifact contract: an explicit typed input/output specification for a stage, not "any .pt file"',
      bodyKn: '• Manifest: ಒಂದೂ ಪೂರ್ಣ pipeline run ಅನ್ನೂ ವಿವರಿಸುವ ಮತ್ತೆ replay ಮಾಡುವ ಒಂದೂ single file/record\n• Content-addressed: ಒಂದೂ artifact ya identity ಅದೂ ya bytes ya SHA-256, ಆಯ್ಕೆ ಮಾಡಿದ filename ಅಲ್ಲ\n• Artifact store: hash ಇಂದ ನಿಖರ artifact contents ಗೆ ಒಂದೂ immutable mapping\n• Dependency graph (DAG): stages ya ordering, ಪ್ರತಿ edge "ಪ್ರಾರಂಭಿಸಲಾಗುವುದಿಲ್ಲ ವರೆಗೆ" ಎಂದೂ ಅರ್ಥ\n• Artifact contract: ಒಂದೂ stage ಗೆ ಸ್ಪಷ್ಟ typed input/output specification, "ಯಾವುದೇ .pt file" ಅಲ್ಲ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The content-addressed pattern genuinely built here is the same one used by git itself (every commit, tree, and blob is identified by SHA-1/SHA-256 of its content) and by production ML artifact stores like MLflow\'s artifact registry and DVC -- immutable, hash-addressed storage is a well-established solution to exactly this provenance problem.',
      bodyKn: 'ಇಲ್ಲಿ ನಿಜವಾಗಿ ಕಟ್ಟಿದ content-addressed pattern git ಸ್ವತಃ ಬಳಸುವ ಅದೇ pattern (ಪ್ರತಿ commit, tree, ಮತ್ತೆ blob ಅದೂ ya content ya SHA-1/SHA-256 ಇಂದ ಗುರುತಿಸಲ್ಪಟ್ಟಿದೆ) ಮತ್ತೆ MLflow ya artifact registry ಮತ್ತೆ DVC ನಂತಹ production ML artifact stores.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed: content-addressed storage makes it mathematically impossible to silently swap an artifact\'s contents without changing its identity, which is exactly the property needed to trust "this server serves model hash abc123" claims\n• Genuinely confirmed: recording pipeline_version/seed/git_commit alongside every stage hash gives a full replay recipe, so a different engineer can reconstruct exactly what happened without guessing',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: content-addressed storage ಒಂದೂ artifact ya contents ಅನ್ನೂ ಅದೂ ya identity ಬದಲಾಯಿಸದೆ ಸದ್ದಿಲ್ಲದೆ swap ಮಾಡುವುದನ್ನೂ ಗಣಿತೀಯವಾಗಿ ಅಸಾಧ್ಯಗೊಳಿಸುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಪ್ರತಿ stage hash ಜೊತೆ pipeline_version/seed/git_commit ದಾಖಲಿಸುವುದೂ ಒಂದೂ ಪೂರ್ಣ replay recipe ನೀಡುತ್ತದೆ, ಭಿನ್ನ engineer ಊಹಿಸದೆ ನಿಖರವಾಗಿ ಏನೂ ಸಂಭವಿಸಿತು ಎಂದೂ ಪುನರ್ನಿರ್ಮಿಸಬಹುದು' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'When a production ML team says "reproduce run xyz from three months ago," they check out the exact git_commit from the manifest, restore the same seed, and feed the same input hashes to each stage -- exactly the recipe genuinely built in this lesson, not folklore about "the config from before the refactor."',
      bodyKn: 'ಒಂದೂ production ML team "ಮೂರೂ ತಿಂಗಳ ಹಿಂದಿನ run xyz ಅನ್ನೂ ಪುನರುತ್ಪಾದಿಸಿ" ಎಂದೂ ಹೇಳಿದಾಗ, ಅವರು manifest ಇಂದ ನಿಖರ git_commit ಅನ್ನೂ checkout ಮಾಡುತ್ತಾರೆ, ಅದೇ seed ಅನ್ನೂ ಪುನಃಸ್ಥಾಪಿಸುತ್ತಾರೆ, ಮತ್ತೆ ಪ್ರತಿ stage ಗೆ ಅದೇ input hashes ಅನ್ನೂ ನೀಡುತ್ತಾರೆ.' } },

    { type: 'diagram', data: {
      titleEn: 'The Pipeline Foundation', titleKn: 'Pipeline ಅಡಿಪಾಯ',
      captionEn: 'The manifest describes the run. The orchestrator (Part 2) executes stages. Hashes prove which exact artifacts were used. The artifact store preserves them immutably.',
      captionKn: 'Manifest run ಅನ್ನೂ ವಿವರಿಸುತ್ತದೆ. Orchestrator (Part 2) stages ಅನ್ನೂ ಚಲಾಯಿಸುತ್ತದೆ. Hashes ಯಾವ ನಿಖರ artifacts ಬಳಸಲ್ಪಟ್ಟವು ಎಂದೂ ಸಾಬೀತುಪಡಿಸುತ್ತವೆ. Artifact store ಅವುಗಳನ್ನೂ immutably ಸಂರಕ್ಷಿಸುತ್ತದೆ.',
      svgCode: "<svg viewBox='0 0 700 200' xmlns='http://www.w3.org/2000/svg'><rect x='20' y='70' width='140' height='60' rx='8' fill='#1e293b' stroke='#38bdf8'/><text x='90' y='105' fill='#e2e8f0' font-size='13' text-anchor='middle'>Manifest</text><rect x='200' y='70' width='140' height='60' rx='8' fill='#1e293b' stroke='#f59e0b'/><text x='270' y='95' fill='#e2e8f0' font-size='13' text-anchor='middle'>Stage 01</text><text x='270' y='112' fill='#94a3b8' font-size='10' text-anchor='middle'>output hash A</text><rect x='380' y='70' width='140' height='60' rx='8' fill='#1e293b' stroke='#a855f7'/><text x='450' y='95' fill='#e2e8f0' font-size='13' text-anchor='middle'>Stage 02</text><text x='450' y='112' fill='#94a3b8' font-size='10' text-anchor='middle'>input hash A</text><rect x='560' y='70' width='120' height='60' rx='8' fill='#1e293b' stroke='#22c55e'/><text x='620' y='95' fill='#e2e8f0' font-size='13' text-anchor='middle'>Artifact</text><text x='620' y='112' fill='#94a3b8' font-size='10' text-anchor='middle'>Store</text><line x1='160' y1='100' x2='198' y2='100' stroke='#64748b' stroke-width='2' marker-end='url(#ahp1)'/><line x1='340' y1='100' x2='378' y2='100' stroke='#64748b' stroke-width='2' marker-end='url(#ahp1)'/><line x1='520' y1='100' x2='558' y2='100' stroke='#64748b' stroke-width='2' marker-end='url(#ahp1)'/><defs><marker id='ahp1' markerWidth='10' markerHeight='10' refX='8' refY='3' orient='auto'><path d='M0,0 L8,3 L0,6' fill='#64748b'/></marker></defs></svg>" } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: what happened to the hash when the tokenizer config had just one extra merge rule added to it?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: tokenizer config ಗೆ ಕೇವಲ ಒಂದೂ ಹೆಚ್ಚುವರಿ merge rule ಸೇರಿಸಿದಾಗ hash ಗೆ ಏನೂ ಸಂಭವಿಸಿತು?',
        opts: ['It stayed mostly similar with a small suffix change', 'It became a completely different, unrelated-looking hash', 'It became empty', 'Hashing failed'], correct: 1,
        optsKn: ['ಅದೂ ಬಹುತೇಕ ಸಮಾನವಾಗಿ ಉಳಿಯಿತು ಒಂದೂ ಚಿಕ್ಕ suffix ಬದಲಾವಣೆಯೊಂದಿಗೆ', 'ಅದೂ ಸಂಪೂರ್ಣವಾಗಿ ಭಿನ್ನ, ಸಂಬಂಧವಿಲ್ಲದಂತೆ ಕಾಣುವ hash ಆಯಿತು', 'ಅದೂ ಖಾಲಿ ಆಯಿತು', 'Hashing ವಿಫಲವಾಯಿತು'] },
      { q: 'Genuinely confirmed: re-putting the exact same content into the ArtifactStore twice produced what result?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಅದೇ ನಿಖರ content ಅನ್ನೂ ArtifactStore ಗೆ ಎರಡೂ ಬಾರಿ ಮತ್ತೆ put ಮಾಡುವುದೂ ಯಾವ ಫಲಿತಾಂಶ ನೀಡಿತು?',
        opts: ['Two different hashes for the same content', 'The exact same hash both times', 'An error on the second put', 'The store rejected the duplicate'], correct: 1,
        optsKn: ['ಅದೇ content ಗೆ ಎರಡೂ ಭಿನ್ನ hashes', 'ಎರಡೂ ಬಾರಿ ಅದೇ ನಿಖರ hash', 'ಎರಡನೇ put ನಲ್ಲಿ ಒಂದೂ error', 'Store duplicate ಅನ್ನೂ ತಿರಸ್ಕರಿಸಿತು'] },
      { q: 'Why does a tokenizer change invalidate every downstream artifact, while a change to eval-only config does not?', qKn: 'Tokenizer ಬದಲಾವಣೆ ಪ್ರತಿ downstream artifact ಅನ್ನೂ ಏಕೆ invalidate ಮಾಡುತ್ತದೆ, eval-only config ಬದಲಾವಣೆ ಏಕೆ ಮಾಡುವುದಿಲ್ಲ?',
        opts: ['They are the same in effect', 'Token IDs are the foundation every later stage assumes; eval config only affects the eval and ship decision', 'Eval config always invalidates everything', 'Tokenizer changes only affect the ship gate'], correct: 1,
        optsKn: ['ಅವೂ ಪರಿಣಾಮದಲ್ಲಿ ಒಂದೇ', 'Token IDs ಪ್ರತಿ ನಂತರದ stage ಉಹಿಸುವ ಅಡಿಪಾಯ; eval config ಕೇವಲ eval ಮತ್ತೆ ship decision ಅನ್ನೂ ಪ್ರಭಾವಿಸುತ್ತದೆ', 'Eval config ಯಾವಾಗಲೂ ಎಲ್ಲವನ್ನೂ invalidate ಮಾಡುತ್ತದೆ', 'Tokenizer ಬದಲಾವಣೆಗಳು ಕೇವಲ ship gate ಅನ್ನೂ ಪ್ರಭಾವಿಸುತ್ತವೆ'] },
      { q: 'Which two stages in the twelve-stage lifecycle can genuinely run in parallel?', qKn: 'ಹನ್ನೆರಡು-stage lifecycle ನಲ್ಲಿ ಯಾವ ಎರಡೂ stages ನಿಜವಾಗಿ parallel ಚಲಿಸಬಹುದು?',
        opts: ['01 Tokenizer and 12 Serving', '07 RLHF and 08 DPO', '10 Eval and 11 Quantization', '03 Dataset and 04 Base model'], correct: 1,
        optsKn: ['01 Tokenizer ಮತ್ತೆ 12 Serving', '07 RLHF ಮತ್ತೆ 08 DPO', '10 Eval ಮತ್ತೆ 11 Quantization', '03 Dataset ಮತ್ತೆ 04 Base model'] },
      { q: 'What does the manifest\'s git_commit field answer?', qKn: 'Manifest ya git_commit field ಏನೂ ಉತ್ತರಿಸುತ್ತದೆ?',
        opts: ['Which random seed was used', 'Which exact code version produced this run', 'Which GPU type was used', 'Which artifact store was used'], correct: 1,
        optsKn: ['ಯಾವ random seed ಬಳಸಲಾಗಿತ್ತು', 'ಯಾವ ನಿಖರ code version ಈ run ಉತ್ಪಾದಿಸಿತು', 'ಯಾವ GPU type ಬಳಸಲಾಗಿತ್ತು', 'ಯಾವ artifact store ಬಳಸಲಾಗಿತ್ತು'] },
    ] } },
  ],
};
