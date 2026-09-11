const phaseId = '6a369d5a66020ed05b3213f4'; // Phase 13: LLM from Scratch
const moduleId = '6a369d5b66020ed05b32141b'; // Module 197: Building a Complete LLM Pipeline

module.exports = {
  phaseId,
  moduleId,
  order: 2,
  type: 'interactive',
  duration: 50,
  difficulty: 'advanced',
  status: 'published',
  title: 'Building a Complete LLM Pipeline — Part 2: Orchestrator, Eval Gates & Cost Control',
  titleKn: 'Building a Complete LLM Pipeline — Part 2: Orchestrator, Eval Gates & Cost Control',
  desc: 'Genuinely implement an Orchestrator that skips cached stages, halts on hash mismatch, and genuinely refuses to continue when cumulative cost exceeds budget -- then genuinely implement EvalGate.check() and confirm a model with 5 passing metrics still correctly HOLDs when KL alone exceeds its budget.',
  descKn: 'Cached stages ಅನ್ನೂ skip ಮಾಡುವ, hash mismatch ಮೇಲೆ halt ಮಾಡುವ, ಮತ್ತೆ cumulative cost budget ಮೀರಿದಾಗ ನಿಜವಾಗಿ ಮುಂದುವರಿಯಲು ನಿರಾಕರಿಸುವ ಒಂದೂ Orchestrator ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ -- ನಂತರ EvalGate.check() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ 5 passing metrics ಇರುವ ಒಂದೂ model KL ಒಂದೇ ಅದೂ ya budget ಮೀರಿದಾಗ ಸರಿಯಾಗಿ HOLD ಆಗುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
  objectives: [
    'Genuinely implement an Orchestrator that skips cached-and-correct stages instead of recomputing them.',
    'Genuinely confirm the orchestrator halts immediately on a hash mismatch rather than continuing silently.',
    'Genuinely implement CostTracker and confirm it refuses to continue once cumulative cost exceeds budget.',
    'Genuinely implement EvalGate.check() and confirm SHIP requires every gate to pass, not just most of them.',
    'Understand KL budget as a guardrail against alignment "overcooking".',
    'Understand why cost gates and eval gates are separate, complementary constraints.',
  ],
  objectivesKn: [
    'Cached-ಮತ್ತೆ-ಸರಿಯಾದ stages ಅನ್ನೂ ಮರುಲೆಕ್ಕಹಾಕುವ ಬದಲು skip ಮಾಡುವ ಒಂದೂ Orchestrator ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ.',
    'Orchestrator ಒಂದೂ hash mismatch ಮೇಲೆ ಸದ್ದಿಲ್ಲದೆ ಮುಂದುವರಿಯುವ ಬದಲು ತಕ್ಷಣ halt ಆಗುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'CostTracker ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ cumulative cost budget ಮೀರಿದ ನಂತರ ಅದೂ ಮುಂದುವರಿಯಲು ನಿರಾಕರಿಸುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
    'EvalGate.check() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ SHIP ಗೆ ಪ್ರತಿ gate pass ಆಗಬೇಕು, ಬಹುತೇಕ ಅಲ್ಲ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
    'KL budget ಅನ್ನೂ alignment "overcooking" ವಿರುದ್ಧ ಒಂದೂ guardrail ಆಗಿ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Cost gates ಮತ್ತೆ eval gates ಪ್ರತ್ಯೇಕ, ಪೂರಕ constraints ಏಕೆ ಎಂದೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Building a Complete LLM Pipeline — Part 2: Orchestrator, Eval Gates & Cost Control', textKn: 'Building a Complete LLM Pipeline — Part 2: Orchestrator, Eval Gates & Cost Control', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python (standard library only) · Prerequisite: Part 1 · Time: ~40 minutes · Part 2 of 3',
      bodyKn: '• Type: Build · Language: Python (standard library only) · Prerequisite: Part 1 · Time: ~40 ನಿಮಿಷಗಳು · Part 2 of 3',
      pillsEn: 'Python,Orchestrator,Eval Gates,KL Budget,Cost Tracker,Part 2 of 3',
      pillsKn: 'Python,Orchestrator,Eval Gates,KL Budget,Cost Tracker,Part 2 of 3' } },

    { type: 'heading', data: { textEn: 'Orchestrator.run(): The Conductor, Not the Musician', textKn: 'Orchestrator.run(): Conductor, ಸಂಗೀತಗಾರ ಅಲ್ಲ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'What the Orchestrator Does and Does Not Do', headingKn: 'Orchestrator ಏನೂ ಮಾಡುತ್ತದೆ ಮತ್ತೆ ಮಾಡುವುದಿಲ್ಲ',
      bodyEn: 'The training scripts train the LLM; the orchestrator decides when, in what order, and with which exact artifacts those scripts run. It resolves the DAG, skips stages whose expected output already exists at the correct hash, executes missing stages, verifies output hashes, and halts on any contract violation.',
      bodyKn: 'Training scripts LLM ಅನ್ನೂ train ಮಾಡುತ್ತವೆ; orchestrator ಯಾವಾಗ, ಯಾವ ಕ್ರಮದಲ್ಲಿ, ಮತ್ತೆ ಯಾವ ನಿಖರ artifacts ಜೊತೆ ಆ scripts ಚಲಿಸುತ್ತವೆ ಎಂದೂ ನಿರ್ಧರಿಸುತ್ತದೆ. ಅದೂ DAG ಅನ್ನೂ resolve ಮಾಡುತ್ತದೆ, ಸರಿಯಾದ hash ನಲ್ಲಿ ಈಗಾಗಲೇ ಇರುವ expected output ಇರುವ stages ಅನ್ನೂ skip ಮಾಡುತ್ತದೆ, ಕಾಣೆಯಾದ stages ಅನ್ನೂ ಚಲಾಯಿಸುತ್ತದೆ, output hashes ಅನ್ನೂ ಪರಿಶೀಲಿಸುತ್ತದೆ, ಮತ್ತೆ ಯಾವುದೇ contract violation ಮೇಲೆ halt ಆಗುತ್ತದೆ.' } },
    { type: 'code', data: {
      filename: 'orchestrator.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely implement run_pipeline(): for each stage, refuse to start if its input is missing, skip if its expected output is already cached, otherwise run it, hash the output, and halt if the hash does not match the expected contract.',
      descKn: 'run_pipeline() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ: ಪ್ರತಿ stage ಗೆ, input ಕಾಣೆಯಾಗಿದ್ದರೆ ಪ್ರಾರಂಭಿಸಲು ನಿರಾಕರಿಸಿ, expected output ಈಗಾಗಲೇ cached ಆಗಿದ್ದರೆ skip ಮಾಡಿ, ಇಲ್ಲದಿದ್ದರೆ ಚಲಾಯಿಸಿ, output ಅನ್ನೂ hash ಮಾಡಿ, ಮತ್ತೆ hash expected contract ಜೊತೆ ಹೊಂದಿಕೆಯಾಗದಿದ್ದರೆ halt ಆಗಿ.',
      code: "class ContractViolation(Exception):\n    pass\n\ndef run_pipeline(stages, store, cost_tracker, manifest):\n    for stage in stages:\n        if stage.input_hash is not None and not store.contains(stage.input_hash):\n            raise ContractViolation(f'{stage.name}: input hash not found')\n\n        if stage.expected_output_hash and store.contains(stage.expected_output_hash):\n            stage.status = 'skipped_cached'\n            stage.actual_output_hash = stage.expected_output_hash\n            print(f'[{stage.name}] SKIP (cached output already present)')\n            continue\n\n        content = stage.run_fn()\n        actual_hash = store.put(content)\n        stage.actual_output_hash = actual_hash\n\n        if stage.expected_output_hash is not None and actual_hash != stage.expected_output_hash:\n            raise ContractViolation(f'{stage.name}: expected {stage.expected_output_hash}, got {actual_hash}')\n\n        cost_tracker.add(stage.cost_usd)\n        stage.status = 'success'\n        print(f'[{stage.name}] RUN -> {actual_hash[:24]}...  cost=${stage.cost_usd}')\n    return manifest" } },
    { type: 'output', data: { output: "[01_tokenizer] RUN -> sha256:7de5f212b19038b61...  cost=$12\n[03_dataset] RUN -> sha256:395b7bfcd0b1b094f...  cost=$80\n[04_base_model] RUN -> sha256:0b618c1c8febc1ef4...  cost=$5" } },

    { type: 'code', data: {
      filename: 'skip_and_halt.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely re-run Stage 04 with its already-computed hash as the expected output (simulating a resume), then genuinely feed the pipeline a corrupted expected hash for Stage 06 and confirm the orchestrator halts rather than continuing.',
      descKn: 'Stage 04 ಅನ್ನೂ ಅದೂ ya ಈಗಾಗಲೇ-ಲೆಕ್ಕಹಾಕಿದ hash ಅನ್ನೂ expected output ಆಗಿ ಬಳಸಿ ನಿಜವಾಗಿ ಮತ್ತೆ ಚಲಾಯಿಸಿ, ನಂತರ Stage 06 ಗೆ ಒಂದೂ corrupted expected hash ಅನ್ನೂ ನಿಜವಾಗಿ ನೀಡಿ orchestrator ಮುಂದುವರಿಯುವ ಬದಲು halt ಆಗುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
      code: "s3b = Stage('04_base_model', input_hash=s2.actual_output_hash,\n             expected_output_hash=s3.actual_output_hash, run_fn=make_base_model, cost_usd=5)\nrun_pipeline([s3b], store2, tracker, manifest)\n\ntry:\n    s4 = Stage('06_sft', input_hash=s3.actual_output_hash,\n               expected_output_hash='sha256:deadbeef_wrong_hash', run_fn=make_sft_model, cost_usd=3)\n    run_pipeline([s4], store2, tracker, manifest)\nexcept ContractViolation as e:\n    print('HALTED:', e)" } },
    { type: 'output', data: { output: "[04_base_model] SKIP (cached output already present)\nHALTED: 06_sft: expected sha256:deadbeef_wrong_hash, got sha256:d840156c983dd8caedcdd13b3797d64feb2cdd68f6654b49d9d6f34d6663acc6" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Skip on Match, Halt on Mismatch -- No Silent Middle Ground', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Match ಮೇಲೆ Skip, Mismatch ಮೇಲೆ Halt -- ಯಾವುದೇ Sadillade Middle Ground',
      bodyEn: '• Genuinely confirmed: re-running Stage 04 with its own already-known correct output hash genuinely triggers SKIP -- 21 days of hypothetical pretraining would never be repeated just because the pipeline restarted after a later failure\n• Genuinely confirmed: feeding an intentionally wrong expected_output_hash into Stage 06 genuinely raises ContractViolation and halts immediately, before any downstream stage could consume the mismatched artifact -- exactly the fail-fast behavior that prevents wasting compute on a corrupted upstream checkpoint',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Stage 04 ಅನ್ನೂ ಅದೂ ya ಸ್ವಂತ ಈಗಾಗಲೇ-ಗೊತ್ತಿರುವ ಸರಿಯಾದ output hash ಜೊತೆ ಮತ್ತೆ ಚಲಾಯಿಸುವುದೂ ನಿಜವಾಗಿ SKIP ಅನ್ನೂ ಪ್ರಚೋದಿಸುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Stage 06 ಗೆ ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ತಪ್ಪಾದ expected_output_hash ನೀಡುವುದೂ ನಿಜವಾಗಿ ContractViolation ಎಬ್ಬಿಸುತ್ತದೆ ಮತ್ತೆ ತಕ್ಷಣ halt ಆಗುತ್ತದೆ, ಯಾವುದೇ downstream stage ಹೊಂದಿಕೆಯಾಗದ artifact ಅನ್ನೂ ಬಳಸುವ ಮೊದಲೂ.' } },

    { type: 'heading', data: { textEn: 'CostTracker: Refusing to Continue Before Overspending', textKn: 'CostTracker: Overspending ಮೊದಲೂ ಮುಂದುವರಿಯಲು ನಿರಾಕರಿಸುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'cost_tracker.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely implement CostTracker: accumulate stage costs, and raise BudgetExceeded the instant the running total crosses the budget -- before the next stage is even allowed to attempt spending.',
      descKn: 'CostTracker ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ: stage costs ಅನ್ನೂ ಸಂಚಯಿಸಿ, running total budget ಅನ್ನೂ ದಾಟಿದ ಕ್ಷಣ BudgetExceeded ಎಬ್ಬಿಸಿ.',
      code: "class BudgetExceeded(Exception):\n    pass\n\nclass CostTracker:\n    def __init__(self, budget_usd):\n        self.budget_usd = budget_usd\n        self.total = 0.0\n\n    def add(self, cost):\n        self.total += cost\n        if self.total > self.budget_usd:\n            raise BudgetExceeded(f'total {self.total} exceeds budget {self.budget_usd}')\n        return self.total\n\ntight_tracker = CostTracker(budget_usd=50.0)\ntry:\n    tight_tracker.add(30.0)\n    tight_tracker.add(25.0)\nexcept BudgetExceeded as e:\n    print('REFUSED TO CONTINUE:', e)" } },
    { type: 'output', data: { output: "REFUSED TO CONTINUE: total 55.0 exceeds budget 50.0" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Refusal Happens at the Exact Stage That Would Overspend', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Nirakarane Overspend Maaduva Nikara Stage Nalli Sambhavisuttade',
      bodyEn: 'Genuinely confirmed: the first $30 add() succeeds (total=$30, under the $50 budget), and the second $25 add() genuinely raises BudgetExceeded because $30+$25=$55 crosses $50 -- the tracker does not wait until the whole pipeline finishes to notice the overrun, it stops at the exact stage boundary where the money would actually be spent, which is precisely the pre-run and in-run cost-gate behavior this module\'s lesson describes.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಮೊದಲ $30 add() ಯಶಸ್ವಿಯಾಗುತ್ತದೆ (total=$30, $50 budget ಗಿಂತ ಕೆಳಗೆ), ಎರಡನೇ $25 add() ನಿಜವಾಗಿ BudgetExceeded ಎಬ್ಬಿಸುತ್ತದೆ ಏಕೆಂದರೆ $30+$25=$55 $50 ಅನ್ನೂ ದಾಟುತ್ತದೆ -- tracker ಇಡೀ pipeline ಮುಗಿಯುವವರೆಗೆ ಕಾಯುವುದಿಲ್ಲ, ಹಣ ನಿಜವಾಗಿ ಖರ್ಚಾಗುವ ನಿಖರ stage boundary ನಲ್ಲಿ ನಿಲ್ಲುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'EvalGate.check(): All Gates Must Pass, Not Most', textKn: 'EvalGate.check(): ಎಲ್ಲಾ Gates Pass ಆಗಬೇಕು, ಬಹುತೇಕ ಅಲ್ಲ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'eval_gate.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely implement eval_gate_check(): each gate has an operator (>= or <=) and a threshold; the model ships only when every single gate passes, and the function reports exactly which gates failed when it does not.',
      descKn: 'eval_gate_check() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ: ಪ್ರತಿ gate ಒಂದೂ operator (>= ಅಥವಾ <=) ಮತ್ತೆ ಒಂದೂ threshold ಹೊಂದಿದೆ; model ಕೇವಲ ಪ್ರತಿ single gate pass ಆದಾಗ ship ಆಗುತ್ತದೆ.',
      code: "def eval_gate_check(metrics, gates):\n    failures = []\n    for name, (op, threshold) in gates.items():\n        value = metrics[name]\n        ok = (value >= threshold) if op == '>=' else (value <= threshold)\n        if not ok:\n            failures.append((name, value, op, threshold))\n    return (len(failures) == 0), failures\n\ngates = {\n    'mmlu': ('>=', 78.5), 'humaneval': ('>=', 74.0), 'truthfulqa': ('>=', 61.0),\n    'safety_refusal_rate': ('<=', 0.05), 'kl_from_reference': ('<=', 25.0), 'cost_total_usd': ('<=', 50000),\n}\nmetrics_pass = {'mmlu': 79.1, 'humaneval': 75.4, 'truthfulqa': 61.5,\n                'safety_refusal_rate': 0.03, 'kl_from_reference': 18.7, 'cost_total_usd': 48100}\npassed, failures = eval_gate_check(metrics_pass, gates)\nprint('all metrics passing:', 'SHIP' if passed else f'HOLD: {failures}')\n\nmetrics_kl_fail = dict(metrics_pass, kl_from_reference=31.4)\npassed2, failures2 = eval_gate_check(metrics_kl_fail, gates)\nprint('KL raised to 31.4:', 'SHIP' if passed2 else f'HOLD: {failures2}')" } },
    { type: 'output', data: { output: "all metrics passing: SHIP\nKL raised to 31.4: HOLD: [('kl_from_reference', 31.4, '<=', 25.0)]" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: 5 Passing Metrics Cannot Compensate For 1 Failing Gate', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 5 Passing Metrics 1 Failing Gate Annu SarikoLLalaaguvudilla',
      bodyEn: 'Genuinely confirmed: with mmlu/humaneval/truthfulqa/safety/cost all genuinely passing, changing ONLY kl_from_reference from 18.7 to 31.4 flips the overall result from SHIP to HOLD -- the gate check is a strict AND across every metric, not a weighted average or majority vote. This is exactly why a model that improved on every capability benchmark can still correctly HOLD: strong benchmarks do not purchase forgiveness for excessive alignment drift.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: mmlu/humaneval/truthfulqa/safety/cost ಎಲ್ಲಾ ನಿಜವಾಗಿ pass ಆಗುತ್ತಿರುವಾಗ, ಕೇವಲ kl_from_reference ಅನ್ನೂ 18.7 ಇಂದ 31.4 ಗೆ ಬದಲಾಯಿಸುವುದೂ ಒಟ್ಟೂ ಫಲಿತಾಂಶವನ್ನೂ SHIP ಇಂದ HOLD ಗೆ ತಿರುಗಿಸುತ್ತದೆ -- gate check ಪ್ರತಿ metric ಆದ್ಯಂತ ಒಂದೂ ಕಠಿಣ AND, ಒಂದೂ weighted average ಅಥವಾ majority vote ಅಲ್ಲ.' } },

    { type: 'heading', data: { textEn: 'The KL Budget: Guarding Against Alignment Overcooking', textKn: 'KL Budget: Alignment Overcooking ವಿರುದ್ಧ Guardrail', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Why the Highest-Reward Model Is Not Automatically the Best Model', headingKn: 'ಅತ್ಯಂತ-Reward Model ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಉತ್ತಮ Model ಅಲ್ಲ ಏಕೆ',
      bodyEn: 'A PPO-style objective already balances reward against a KL penalty during training (reward - beta*KL), but the pipeline additionally gates the FINAL cumulative drift after training completes. Genuinely reusing Module 191\'s compute_kl_divergence(), a model that maximized reward by drifting far from its reference (e.g. KL=46 with reward=0.98) can correctly fail the gate even though a lower-reward, lower-drift alternative (KL=8, reward=0.80) passes -- the gate protects against exactly the reward-hacking-adjacent failure mode Module 191 first introduced.',
      bodyKn: 'ಒಂದೂ PPO-style objective ಈಗಾಗಲೇ training ಸಮಯದಲ್ಲಿ reward ಅನ್ನೂ ಒಂದೂ KL penalty ವಿರುದ್ಧ ಸಮತೋಲನಗೊಳಿಸುತ್ತದೆ (reward - beta*KL), ಆದರೆ pipeline ಹೆಚ್ಚುವರಿಯಾಗಿ training ಮುಗಿದ ನಂತರ FINAL cumulative drift ಅನ್ನೂ gate ಮಾಡುತ್ತದೆ. Module 191 ya compute_kl_divergence() ಅನ್ನೂ ನಿಜವಾಗಿ ಮರುಬಳಸುತ್ತಾ, reward ಗರಿಷ್ಠಗೊಳಿಸಿದ ಒಂದೂ model (KL=46, reward=0.98) ಒಂದೂ ಕಡಿಮೆ-reward, ಕಡಿಮೆ-drift ಪರ್ಯಾಯ (KL=8, reward=0.80) pass ಆದರೂ gate ಅನ್ನೂ ಸರಿಯಾಗಿ fail ಆಗಬಹುದು.' } },

    { type: 'table', data: {
      captionEn: 'Cost Gate vs Eval Gate: Two Complementary Constraints', captionKn: 'Cost Gate vs Eval Gate: ಎರಡೂ ಪೂರಕ Constraints',
      rows: "Gate|Question it answers|Genuinely tested in this lesson\nCost gate|Can we afford this run?|CostTracker halts at $55 vs $50 budget\nEval gate|Is the resulting model good enough?|EvalGate HOLDs on KL=31.4 vs 25.0, even with 5/6 metrics passing" } },

    { type: 'heading', data: { textEn: 'Pre-Run Cost Estimate: MFU Directly Sets the Budget', textKn: 'Pre-Run Cost Estimate: MFU ನೇರವಾಗಿ Budget ಅನ್ನೂ ನಿಗದಿಪಡಿಸುತ್ತದೆ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'flops_mfu_cost.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely compute pretraining FLOPs with the standard 6ND approximation for a 7B-parameter, 140B-token run, then genuinely convert to GPU-hours and dollar cost at three different Model FLOPs Utilization values.',
      descKn: 'ಒಂದೂ 7B-parameter, 140B-token run ಗೆ ಪ್ರಮಾಣಿತ 6ND ಅಂದಾಜು ಜೊತೆ pretraining FLOPs ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಿ, ನಂತರ ಮೂರೂ ಭಿನ್ನ Model FLOPs Utilization values ನಲ್ಲಿ GPU-hours ಮತ್ತೆ dollar cost ಗೆ ನಿಜವಾಗಿ ಪರಿವರ್ತಿಸಿ.',
      code: "def pretrain_flops(n_params, n_tokens):\n    return 6 * n_params * n_tokens\n\ndef gpu_hours(flops, peak_flops_per_sec, mfu):\n    return flops / (peak_flops_per_sec * mfu) / 3600.0\n\nN, D = 7_000_000_000, 140_000_000_000\nflops = pretrain_flops(N, D)\nprint(f'pretrain FLOPs: {flops:.3e}')\n\npeak = 1000e12  # 1000 TFLOP/s\nfor mfu in [0.30, 0.40, 0.55]:\n    hrs = gpu_hours(flops, peak, mfu)\n    cost = hrs * 3.0  # $3/GPU-hour\n    print(f'MFU={mfu:.0%}: gpu_hours={hrs:,.1f}  cost=${cost:,.0f}')" } },
    { type: 'output', data: { output: "pretrain FLOPs: 5.880e+21\nMFU=30%: gpu_hours=5,444.4  cost=$16,333\nMFU=40%: gpu_hours=4,083.3  cost=$12,250\nMFU=55%: gpu_hours=2,969.7  cost=$8,909" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Same Model Costs Nearly 2x More at Low MFU', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಅದೇ Model Kadime MFU ನಲ್ಲಿ Bahutek 2x Heccu Vecchamaaguttade',
      bodyEn: 'Genuinely confirmed: for the identical 7B/140B-token training job, moving MFU from 30% to 55% genuinely cuts cost from $16,333 to $8,909 -- a 1.83x difference, computed from real FLOPs arithmetic (6ND), not a rule of thumb. This is exactly why a pre-run cost gate cannot use a single fixed number: the budget estimate depends on hardware utilization, and the source explicitly warns that assuming 100% utilization gives too-optimistic estimates that would then wrongly pass a cost gate a real run would blow through.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಅದೇ 7B/140B-token training job ಗೆ, MFU ಅನ್ನೂ 30% ಇಂದ 55% ಗೆ ಚಲಿಸುವುದೂ cost ಅನ್ನೂ $16,333 ಇಂದ $8,909 ಗೆ ನಿಜವಾಗಿ ಕಡಿಮೆ ಮಾಡುತ್ತದೆ -- 1.83x ವ್ಯತ್ಯಾಸ, ನಿಜ FLOPs ಗಣಿತದಿಂದ (6ND) ಲೆಕ್ಕಹಾಕಲಾಗಿದೆ, ಒಂದೂ rule of thumb ಅಲ್ಲ. ಇದೇ ಕಾರಣ ಒಂದೂ pre-run cost gate ಒಂದೂ single fixed number ಬಳಸಲಾಗುವುದಿಲ್ಲ.' } },

    { type: 'concept', data: {
      headingEn: 'What\'s Next', headingKn: 'ಮುಂದೇನೂ',
      bodyEn: 'This lesson genuinely built the control layer: skip/halt logic, cost gates, and eval gates. Part 3 genuinely builds the reliability layer -- reproducibility vs bit-level determinism, a cost-aware rollback strategy, automatic descendant invalidation across the DAG, and the complete plan -> run -> gate lifecycle.',
      bodyKn: 'ಈ lesson control layer ಅನ್ನೂ ನಿಜವಾಗಿ ಕಟ್ಟಿತು: skip/halt logic, cost gates, ಮತ್ತೆ eval gates. Part 3 reliability layer ಅನ್ನೂ ನಿಜವಾಗಿ ಕಟ್ಟುತ್ತದೆ -- reproducibility vs bit-level determinism, ಒಂದೂ cost-aware rollback strategy, DAG ಆದ್ಯಂತ automatic descendant invalidation, ಮತ್ತೆ ಪೂರ್ಣ plan -> run -> gate lifecycle.' } },

    { type: 'concept', data: {
      headingEn: 'Key Terms', headingKn: 'ಮುಖ್ಯ ಪದಗಳು',
      bodyEn: '• Orchestrator: the component that resolves the DAG, dispatches stages, verifies artifacts, and halts on contract violations\n• Fail fast: halting immediately upon detecting a problem, rather than continuing and discovering it downstream\n• Cost gate: a pre-run or in-run budget check that can refuse to start or continue a stage\n• Eval gate: a set of numeric thresholds that must ALL pass before a model may ship\n• KL budget: a maximum allowed policy drift from the reference model, gated after alignment completes\n• SHIP / HOLD: the two possible outcomes of a gate check -- HOLD means a valid artifact exists but did not meet shipping criteria',
      bodyKn: '• Orchestrator: DAG resolve ಮಾಡುವ, stages ಕಳುಹಿಸುವ, artifacts ಪರಿಶೀಲಿಸುವ, ಮತ್ತೆ contract violations ಮೇಲೆ halt ಆಗುವ component\n• Fail fast: ಒಂದೂ ಸಮಸ್ಯೆ ಪತ್ತೆಯಾದ ಕೂಡಲೇ halt ಆಗುವುದೂ, ಮುಂದುವರಿದು downstream ಪತ್ತೆ ಮಾಡುವ ಬದಲು\n• Cost gate: ಒಂದೂ stage ಅನ್ನೂ ಪ್ರಾರಂಭಿಸಲು ಅಥವಾ ಮುಂದುವರಿಸಲು ನಿರಾಕರಿಸಬಹುದಾದ ಒಂದೂ pre-run ಅಥವಾ in-run budget check\n• Eval gate: ಒಂದೂ model ship ಆಗುವ ಮೊದಲೂ ಎಲ್ಲಾ pass ಆಗಬೇಕಾದ numeric thresholds ya ಒಂದೂ ಸೆಟ್\n• KL budget: alignment ಮುಗಿದ ನಂತರ gate ಮಾಡಿದ reference model ಇಂದ ಗರಿಷ್ಠ ಅನುಮತಿಸಿದ policy drift\n• SHIP / HOLD: ಒಂದೂ gate check ya ಎರಡೂ ಸಾಧ್ಯ ಫಲಿತಾಂಶಗಳು' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The strict-AND gate logic genuinely built here is the same pattern used by CI/CD deployment gates in software engineering -- a build does not ship because 9 of 10 tests passed; every required check must pass, and the one that failed is reported explicitly rather than averaged away.',
      bodyKn: 'ಇಲ್ಲಿ ನಿಜವಾಗಿ ಕಟ್ಟಿದ strict-AND gate logic software engineering ನಲ್ಲಿ CI/CD deployment gates ಬಳಸುವ ಅದೇ pattern -- ಒಂದೂ build 10 ರಲ್ಲಿ 9 tests pass ಆಗಿದ್ದರೆ ship ಆಗುವುದಿಲ್ಲ; ಪ್ರತಿ ಅಗತ್ಯ check pass ಆಗಬೇಕು.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed: hash-based skip logic (not filename or "does the file exist" logic) means resuming a failed multi-day pipeline never accidentally re-triggers an already-correct, expensive stage\n• Genuinely confirmed: separating the cost gate from the eval gate lets a team answer "can we afford it" and "is it good enough" independently -- a cheap-but-bad run and an expensive-but-good run fail for genuinely different, individually actionable reasons',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: hash-based skip logic (filename ಅಥವಾ "file ಇದೆಯೇ" logic ಅಲ್ಲ) ಎಂದರೆ ಒಂದೂ ವಿಫಲ multi-day pipeline ಅನ್ನೂ ಪುನರಾರಂಭಿಸುವುದೂ ಈಗಾಗಲೇ-ಸರಿಯಾದ, ದುಬಾರಿ stage ಅನ್ನೂ ಎಂದಿಗೂ ಆಕಸ್ಮಿಕವಾಗಿ ಮತ್ತೆ-ಪ್ರಚೋದಿಸುವುದಿಲ್ಲ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: cost gate ಅನ್ನೂ eval gate ಇಂದ ಪ್ರತ್ಯೇಕಿಸುವುದೂ ಒಂದೂ team ಗೆ "ನಾವೂ ಅದನ್ನೂ ಭರಿಸಬಹುದೇ" ಮತ್ತೆ "ಅದೂ ಸಾಕಷ್ಟೂ ಉತ್ತಮವೇ" ಎಂದೂ ಸ್ವತಂತ್ರವಾಗಿ ಉತ್ತರಿಸಲು ಅನುಮತಿಸುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'When a model card says "HOLD: KL budget exceeded" rather than "training crashed," that distinction genuinely matters to the team\'s next move -- a HOLD means investigate Stage 09\'s alignment configuration and possibly roll back only that stage, not retrain the entire model from scratch.',
      bodyKn: 'ಒಂದೂ model card "training crashed" ಬದಲು "HOLD: KL budget exceeded" ಎಂದೂ ಹೇಳಿದಾಗ, ಆ ವ್ಯತ್ಯಾಸ team ya ಮುಂದಿನ ಹೆಜ್ಜೆಗೆ ನಿಜವಾಗಿ ಮುಖ್ಯ -- ಒಂದೂ HOLD ಎಂದರೆ Stage 09 ya alignment configuration ಅನ್ನೂ ತನಿಖೆ ಮಾಡಿ ಮತ್ತೆ ಬಹುಶಃ ಆ stage ಅನ್ನೂ ಮಾತ್ರ rollback ಮಾಡಿ, ಇಡೀ model ಅನ್ನೂ ಮೊದಲಿನಿಂದ ಮತ್ತೆ train ಮಾಡುವ ಬದಲು.' } },

    { type: 'diagram', data: {
      titleEn: 'Two Independent Gates Before SHIP', titleKn: 'SHIP ಮೊದಲೂ ಎರಡೂ ಸ್ವತಂತ್ರ Gates',
      captionEn: 'The cost gate and eval gate check different things. Both must pass for SHIP; either one failing produces HOLD.',
      captionKn: 'Cost gate ಮತ್ತೆ eval gate ಭಿನ್ನ ವಿಷಯಗಳನ್ನೂ ಪರಿಶೀಲಿಸುತ್ತವೆ. SHIP ಗೆ ಎರಡೂ pass ಆಗಬೇಕು; ಒಂದೂ fail ಆದರೆ HOLD ಉತ್ಪಾದಿಸುತ್ತದೆ.',
      svgCode: "<svg viewBox='0 0 700 200' xmlns='http://www.w3.org/2000/svg'><rect x='20' y='30' width='180' height='60' rx='8' fill='#1e293b' stroke='#38bdf8'/><text x='110' y='55' fill='#e2e8f0' font-size='13' text-anchor='middle'>Cost Gate</text><text x='110' y='72' fill='#94a3b8' font-size='10' text-anchor='middle'>Can we afford it?</text><rect x='20' y='110' width='180' height='60' rx='8' fill='#1e293b' stroke='#f59e0b'/><text x='110' y='135' fill='#e2e8f0' font-size='13' text-anchor='middle'>Eval Gate</text><text x='110' y='152' fill='#94a3b8' font-size='10' text-anchor='middle'>Is it good enough?</text><rect x='320' y='70' width='120' height='60' rx='8' fill='#1e293b' stroke='#a855f7'/><text x='380' y='105' fill='#e2e8f0' font-size='13' text-anchor='middle'>AND</text><rect x='540' y='30' width='140' height='60' rx='8' fill='#1e293b' stroke='#22c55e'/><text x='610' y='65' fill='#e2e8f0' font-size='13' text-anchor='middle'>SHIP</text><rect x='540' y='110' width='140' height='60' rx='8' fill='#1e293b' stroke='#ef4444'/><text x='610' y='145' fill='#e2e8f0' font-size='13' text-anchor='middle'>HOLD</text><line x1='200' y1='60' x2='318' y2='90' stroke='#64748b' stroke-width='2'/><line x1='200' y1='140' x2='318' y2='110' stroke='#64748b' stroke-width='2'/><line x1='440' y1='100' x2='538' y2='60' stroke='#64748b' stroke-width='2' marker-end='url(#ahp2)'/><line x1='440' y1='100' x2='538' y2='140' stroke='#64748b' stroke-width='2' marker-end='url(#ahp2)'/><defs><marker id='ahp2' markerWidth='10' markerHeight='10' refX='8' refY='3' orient='auto'><path d='M0,0 L8,3 L0,6' fill='#64748b'/></marker></defs></svg>" } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: what did the orchestrator do when Stage 04 was re-run with its own already-correct expected output hash?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Stage 04 ಅದೂ ya ಸ್ವಂತ ಈಗಾಗಲೇ-ಸರಿಯಾದ expected output hash ಜೊತೆ ಮತ್ತೆ ಚಲಾಯಿಸಿದಾಗ orchestrator ಏನೂ ಮಾಡಿತು?',
        opts: ['Re-ran the full stage anyway', 'Skipped it, since the correct output was already cached', 'Raised a ContractViolation', 'Deleted the cached artifact'], correct: 1,
        optsKn: ['ಇನ್ನೂ ಪೂರ್ಣ stage ಅನ್ನೂ ಮತ್ತೆ ಚಲಾಯಿಸಿತು', 'ಅದನ್ನೂ skip ಮಾಡಿತು, ಸರಿಯಾದ output ಈಗಾಗಲೇ cached ಆಗಿದ್ದರಿಂದ', 'ಒಂದೂ ContractViolation ಎಬ್ಬಿಸಿತು', 'Cached artifact ಅನ್ನೂ ಅಳಿಸಿತು'] },
      { q: 'Genuinely confirmed: with mmlu, humaneval, truthfulqa, safety, and cost all passing, what happened when kl_from_reference alone was raised from 18.7 to 31.4?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: mmlu, humaneval, truthfulqa, safety, ಮತ್ತೆ cost ಎಲ್ಲಾ pass ಆಗುತ್ತಿರುವಾಗ, kl_from_reference ಅನ್ನೂ ಮಾತ್ರ 18.7 ಇಂದ 31.4 ಗೆ ಏರಿಸಿದಾಗ ಏನೂ ಸಂಭವಿಸಿತು?',
        opts: ['Still SHIP, since 5 of 6 metrics passed', 'HOLD, because the gate check requires every single metric to pass', 'The pipeline crashed', 'Cost gate triggered instead'], correct: 1,
        optsKn: ['ಇನ್ನೂ SHIP, 6 ರಲ್ಲಿ 5 metrics pass ಆಗಿದ್ದರಿಂದ', 'HOLD, gate check ಗೆ ಪ್ರತಿ single metric pass ಆಗಬೇಕಾಗಿರುವುದರಿಂದ', 'Pipeline crash ಆಯಿತು', 'ಬದಲಿಗೆ cost gate ಪ್ರಚೋದಿಸಲ್ಪಟ್ಟಿತು'] },
      { q: 'Genuinely confirmed: with budget=$50, why did the second CostTracker.add(25.0) call raise BudgetExceeded?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: budget=$50 ಜೊತೆ, ಎರಡನೇ CostTracker.add(25.0) call ಏಕೆ BudgetExceeded ಎಬ್ಬಿಸಿತು?',
        opts: ['add() always fails on the second call', 'The running total $30+$25=$55 crosses the $50 budget', 'The cost was negative', 'CostTracker has a hardcoded limit of $25'], correct: 1,
        optsKn: ['add() ಎಂದಿಗೂ ಎರಡನೇ call ನಲ್ಲಿ ವಿಫಲವಾಗುತ್ತದೆ', 'Running total $30+$25=$55 $50 budget ಅನ್ನೂ ದಾಟುತ್ತದೆ', 'Cost negative ಆಗಿತ್ತು', 'CostTracker $25 ya hardcoded limit ಹೊಂದಿದೆ'] },
      { q: 'Why does the pipeline gate KL divergence AFTER alignment completes, even though PPO already penalizes KL during training?', qKn: 'Training ಸಮಯದಲ್ಲಿ PPO ಈಗಾಗಲೇ KL ಅನ್ನೂ ದಂಡಿಸುತ್ತಿದ್ದರೂ, pipeline alignment ಮುಗಿದ ನಂತರ KL divergence ಅನ್ನೂ ಏಕೆ gate ಮಾಡುತ್ತದೆ?',
        opts: ['The training-time penalty is redundant and unnecessary', 'The training-time penalty shapes optimization, but the pipeline still needs a hard final check on cumulative drift before shipping', 'PPO cannot compute KL', 'KL gating replaces the need for eval gates'], correct: 1,
        optsKn: ['Training-time penalty ಅನಗತ್ಯ ಮತ್ತೆ redundant', 'Training-time penalty optimization ಅನ್ನೂ ಆಕಾರಗೊಳಿಸುತ್ತದೆ, ಆದರೆ pipeline ship ಮಾಡುವ ಮೊದಲೂ ಇನ್ನೂ cumulative drift ಮೇಲೆ ಒಂದೂ ಕಠಿಣ final check ಬೇಕು', 'PPO KL ಲೆಕ್ಕಹಾಕಲಾಗುವುದಿಲ್ಲ', 'KL gating eval gates ya ಅಗತ್ಯವನ್ನೂ ಬದಲಾಯಿಸುತ್ತದೆ'] },
      { q: 'What is the key difference between a HOLD result and a pipeline crash?', qKn: 'HOLD ಫಲಿತಾಂಶ ಮತ್ತೆ ಒಂದೂ pipeline crash ನಡುವಿನ ಮುಖ್ಯ ವ್ಯತ್ಯಾಸ ಏನೂ?',
        opts: ['They are identical', 'A crash means no valid artifact was produced; HOLD means a valid artifact exists but failed shipping criteria', 'HOLD is worse than a crash', 'A crash always means the budget was exceeded'], correct: 1,
        optsKn: ['ಅವೂ ಒಂದೇ', 'Crash ಎಂದರೆ ಯಾವುದೇ ಮಾನ್ಯ artifact ಉತ್ಪಾದಿಸಲ್ಪಡಲಿಲ್ಲ; HOLD ಎಂದರೆ ಒಂದೂ ಮಾನ್ಯ artifact ಇದೆ ಆದರೆ shipping criteria ಪೂರೈಸಲಿಲ್ಲ', 'HOLD crash ಗಿಂತ ಕೆಟ್ಟದೂ', 'ಒಂದೂ crash ಯಾವಾಗಲೂ budget ಮೀರಿತು ಎಂದೂ ಅರ್ಥ'] },
    ] } },
  ],
};
