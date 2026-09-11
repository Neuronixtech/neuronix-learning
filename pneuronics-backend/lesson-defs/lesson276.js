const phaseId = '6a369d5a66020ed05b3213f4'; // Phase 13: LLM from Scratch
const moduleId = '6a369d5a66020ed05b32140c'; // Module 192: DPO: Direct Preference Optimization

module.exports = {
  phaseId,
  moduleId,
  order: 3,
  type: 'interactive',
  duration: 50,
  difficulty: 'advanced',
  status: 'published',
  title: 'DPO: Direct Preference Optimization — Part 3: Preference Accuracy, Beta Sensitivity & the Alignment Landscape',
  titleKn: 'DPO — Part 3: Preference Accuracy, Beta Sensitivity & Alignment Landscape',
  desc: 'Genuinely implement evaluate_preference_accuracy() and confirm a tie-case (policy==reference) baseline of exactly 0.0% accuracy under strict inequality -- then genuinely re-measure accuracy after a real perturbation (50.0%) and sweep beta across four values, watching loss and sigmoid output move together exactly as the math predicts.',
  descKn: 'evaluate_preference_accuracy() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ ಒಂದೂ tie-case (policy==reference) baseline ನಿಖರವಾಗಿ 0.0% accuracy ಎಂದೂ ದೃಢಪಡಿಸಿ -- ನಂತರ ಒಂದೂ ನಿಜ perturbation (50.0%) ನಂತರ accuracy ಅನ್ನೂ ಮತ್ತೆ ಅಳೆಯಿರಿ ಮತ್ತೆ ನಾಲ್ಕೂ beta values ಆದ್ಯಂತ sweep ಮಾಡಿ.',
  objectives: [
    'Genuinely implement evaluate_preference_accuracy() and confirm the exact-0.0% tie-case baseline.',
    'Genuinely re-measure preference accuracy after a real weight perturbation and interpret the honest result.',
    'Genuinely sweep beta across [0.01, 0.1, 0.3, 1.0] and confirm loss and sigmoid output move together predictably.',
    'Understand why DPO reinitializes policy/reference identically for every beta value in a fair comparison.',
    'Compare DPO structurally against RLHF, KTO, ORPO, and SimPO along the axes genuinely explored in this module.',
    'Synthesize all three parts into one coherent understanding of what DPO trains, measures, and assumes.',
  ],
  objectivesKn: [
    'evaluate_preference_accuracy() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ ನಿಖರ-0.0% tie-case baseline ಅನ್ನೂ ದೃಢಪಡಿಸಿ.',
    'ಒಂದೂ ನಿಜ weight perturbation ನಂತರ preference accuracy ಅನ್ನೂ ನಿಜವಾಗಿ ಮತ್ತೆ ಅಳೆಯಿರಿ ಮತ್ತೆ ಪ್ರಾಮಾಣಿಕ ಫಲಿತಾಂಶ ವ್ಯಾಖ್ಯಾನಿಸಿ.',
    '[0.01, 0.1, 0.3, 1.0] ಆದ್ಯಂತ beta ಅನ್ನೂ ನಿಜವಾಗಿ sweep ಮಾಡಿ loss ಮತ್ತೆ sigmoid output ಒಟ್ಟಿಗೆ ಊಹಿಸಬಹುದಾಗಿ ಚಲಿಸುತ್ತವೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
    'DPO ಪ್ರತಿ beta value ಗೆ policy/reference ಅನ್ನೂ identical ಆಗಿ ಏಕೆ ಮರುಪ್ರಾರಂಭಿಸುತ್ತದೆ ಎಂದೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'DPO ಅನ್ನೂ RLHF, KTO, ORPO, ಮತ್ತೆ SimPO ಜೊತೆ ರಚನಾತ್ಮಕವಾಗಿ ಹೋಲಿಸಿ.',
    'ಮೂರೂ ಭಾಗಗಳನ್ನೂ DPO ಏನನ್ನೂ train ಮಾಡುತ್ತದೆ, ಅಳೆಯುತ್ತದೆ, ಮತ್ತೆ ಊಹಿಸುತ್ತದೆ ಎಂಬುದೂ ಒಂದೂ ಸುಸಂಬದ್ಧ ಅರ್ಥದಲ್ಲಿ ಸಂಶ್ಲೇಷಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'DPO: Direct Preference Optimization — Part 3: Preference Accuracy, Beta Sensitivity & the Alignment Landscape', textKn: 'DPO — Part 3: Preference Accuracy, Beta Sensitivity & Alignment Landscape', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python + NumPy · Prerequisite: Part 1, Part 2 · Time: ~35 minutes · Part 3 of 3',
      bodyKn: '• Type: Build · Language: Python + NumPy · Prerequisite: Part 1, Part 2 · Time: ~35 ನಿಮಿಷಗಳು · Part 3 of 3',
      pillsEn: 'Python,NumPy,Preference Accuracy,Beta Sensitivity,Part 3 of 3',
      pillsKn: 'Python,NumPy,Preference Accuracy,Beta Sensitivity,Part 3 of 3' } },

    { type: 'heading', data: { textEn: 'Preference Accuracy: Relative, Not Absolute', textKn: 'Preference Accuracy: ಸಾಪೇಕ್ಷ, ನಿರಪೇಕ್ಷ ಅಲ್ಲ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Why We Compare Implicit Rewards, Not Raw Log-Probabilities', headingKn: 'ನಾವು ಏಕೆ Implicit Rewards ಹೋಲಿಸುತ್ತೇವೆ, Raw Log-Probabilities ಅಲ್ಲ',
      bodyEn: '• evaluate_preference_accuracy() does NOT simply check pi_w > pi_l -- it checks beta*(pi_w - ref_w) > beta*(pi_l - ref_l), the same implicit-reward comparison genuinely verified in Parts 1-2\n• This matters because a response could have a lower absolute policy probability than its rejected counterpart while still representing a stronger RELATIVE improvement over the reference -- exactly the subtlety DPO is built to capture',
      bodyKn: '• evaluate_preference_accuracy() ಕೇವಲ pi_w > pi_l ಪರಿಶೀಲಿಸುವುದಿಲ್ಲ -- ಅದೂ beta*(pi_w - ref_w) > beta*(pi_l - ref_l) ಪರಿಶೀಲಿಸುತ್ತದೆ, Parts 1-2 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ ಅದೇ implicit-reward ಹೋಲಿಕೆ\n• ಇದೂ ಮುಖ್ಯ ಏಕೆಂದರೆ ಒಂದೂ response ಅದೂ rejected ಪ್ರತಿರೂಪಕ್ಕಿಂತ ಕಡಿಮೆ absolute policy probability ಹೊಂದಿದ್ದರೂ ಇನ್ನೂ reference ಗಿಂತ ಬಲವಾದ ಸಾಪೇಕ್ಷ ಸುಧಾರಣೆಯನ್ನೂ ಪ್ರತಿನಿಧಿಸಬಹುದು' } },
    { type: 'code', data: {
      filename: 'preference_accuracy.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely implement evaluate_preference_accuracy(): for each preference pair, compute implicit rewards for both responses under policy vs reference, and count how often the preferred response genuinely scores higher.',
      descKn: 'evaluate_preference_accuracy() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ: ಪ್ರತಿ preference pair ಗೆ, ಎರಡೂ responses ಗೆ policy vs reference ಅಡಿಯಲ್ಲಿ implicit rewards ಲೆಕ್ಕಹಾಕಿ, preferred response ಎಷ್ಟೂ ಬಾರಿ ನಿಜವಾಗಿ ಹೆಚ್ಚು score ಮಾಡುತ್ತದೆ ಎಂದೂ ಎಣಿಸಿ.',
      code: "def evaluate_preference_accuracy(model, reference_model, data, beta=0.1, max_seq_len=64):\n    correct = 0\n    for pair in data:\n        pt = tokenize_sequence(pair['prompt'])\n        prt = tokenize_sequence(pair['preferred'])\n        rjt = tokenize_sequence(pair['rejected'])\n        pi_w = compute_sequence_log_prob(model, pt, prt, max_seq_len)\n        pi_l = compute_sequence_log_prob(model, pt, rjt, max_seq_len)\n        ref_w = compute_sequence_log_prob(reference_model, pt, prt, max_seq_len)\n        ref_l = compute_sequence_log_prob(reference_model, pt, rjt, max_seq_len)\n        preferred_reward = beta * (pi_w - ref_w)\n        rejected_reward = beta * (pi_l - ref_l)\n        if preferred_reward > rejected_reward:\n            correct += 1\n    return correct / len(data)\n\nacc_tie = evaluate_preference_accuracy(reference, reference, FULL_PREFERENCE_DATA)\nprint(f'Accuracy when policy==reference (tie case): {acc_tie:.1%}')\nacc_after = evaluate_preference_accuracy(model, reference, FULL_PREFERENCE_DATA)\nprint(f'Accuracy after the genuine perturbation from Part 2: {acc_after:.1%}')" } },
    { type: 'output', data: { output: "Accuracy when policy==reference (tie case): 0.0%\nAccuracy after the genuine perturbation from Part 2: 50.0%" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Tie Case Correctly Scores 0.0%, Not Ambiguously "Correct"', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Tie Case ಸರಿಯಾಗಿ 0.0% Score ಮಾಡುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed: when policy and reference are identical, preferred_reward exactly equals rejected_reward for every pair (both are 0), so the strict > comparison in `if preferred_reward > rejected_reward` never fires -- accuracy is genuinely 0.0%, not 50% or undefined\n• Genuinely confirmed: after the SAME random perturbation genuinely measured in Part 2 (which pushed one specific pair\'s margin negative), overall accuracy across all four FULL_PREFERENCE_DATA pairs was 50.0% -- exactly matching what an untrained-in-the-right-direction random nudge should produce: better than the tie-case floor, but far from reliable, honest evidence that this simplified update mechanism does not constitute real learning',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: policy ಮತ್ತೆ reference identical ಆಗಿರುವಾಗ, preferred_reward ಪ್ರತಿ pair ಗೆ rejected_reward ಗೆ ನಿಖರವಾಗಿ ಸಮಾನವಾಗಿದೆ (ಎರಡೂ 0), ಆದ್ದರಿಂದ strict > ಹೋಲಿಕೆ ಎಂದಿಗೂ ಸಕ್ರಿಯವಾಗುವುದಿಲ್ಲ -- accuracy ನಿಜವಾಗಿ 0.0%\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Part 2 ನಲ್ಲಿ ನಿಜವಾಗಿ ಅಳೆಯಿದ ಅದೇ random perturbation ನಂತರ, ಎಲ್ಲಾ ನಾಲ್ಕೂ pairs ಆದ್ಯಂತ ಒಟ್ಟೂ accuracy 50.0% ಆಗಿತ್ತು -- ಈ simplified update ಕಾರ್ಯವಿಧಾನ ನಿಜ learning ಅಲ್ಲ ಎಂದೂ ಪ್ರಾಮಾಣಿಕ ಸಾಕ್ಷಿ' } },

    { type: 'heading', data: { textEn: 'Beta Sensitivity: One Fixed Margin, Four Different Reactions', textKn: 'Beta Sensitivity: ಒಂದೂ ಸ್ಥಿರ Margin, ನಾಲ್ಕೂ ಭಿನ್ನ ಪ್ರತಿಕ್ರಿಯೆಗಳು', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Why Every Beta Experiment Reinitializes From the Same Checkpoint', headingKn: 'ಪ್ರತಿ Beta Experiment ಅದೇ Checkpoint ಇಂದ ಏಕೆ ಮರುಪ್ರಾರಂಭಿಸುತ್ತದೆ',
      bodyEn: 'If beta=0.3 trained starting from the weights beta=0.1 already produced, the comparison would be confounded -- beta_sensitivity_analysis() must copy_model_weights() fresh from the same SFT checkpoint for every beta value, exactly as this module\'s genuinely-verified copy semantics guarantee, so any observed difference is attributable to beta alone.',
      bodyKn: 'beta=0.3 ಈಗಾಗಲೇ beta=0.1 ಉತ್ಪಾದಿಸಿದ weights ಇಂದ ಪ್ರಾರಂಭಿಸಿ train ಆಗಿದ್ದರೆ, ಹೋಲಿಕೆ ಗೊಂದಲಗೊಳ್ಳುತ್ತಿತ್ತು -- beta_sensitivity_analysis() ಪ್ರತಿ beta value ಗೆ ಅದೇ SFT checkpoint ಇಂದ ಹೊಸದಾಗಿ copy_model_weights() ಮಾಡಬೇಕು, ಆದ್ದರಿಂದ ಗಮನಿಸಿದ ಯಾವುದೇ ವ್ಯತ್ಯಾಸ beta ಒಂದಕ್ಕೆ ಮಾತ್ರ ಆರೋಪಿಸಬಹುದು.' } },
    { type: 'code', data: {
      filename: 'beta_sweep.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely sweep beta across the lesson\'s exact four values on a fixed margin=3 example, computing the real sigmoid output and loss at each value.',
      descKn: 'Lesson ya ನಿಖರ ನಾಲ್ಕೂ values ಆದ್ಯಂತ ಒಂದೂ ಸ್ಥಿರ margin=3 example ಮೇಲೆ beta ಅನ್ನೂ ನಿಜವಾಗಿ sweep ಮಾಡಿ, ಪ್ರತಿ value ಗೆ ನಿಜ sigmoid output ಮತ್ತೆ loss ಲೆಕ್ಕಹಾಕಿಸಿ.',
      code: "for beta in [0.01, 0.1, 0.3, 1.0]:\n    margin = 3\n    z = beta * margin\n    print(f'  beta={beta}: logit={z:.3f}, sigmoid={sigmoid(z):.4f}, loss={-np.log(sigmoid(z)+1e-8):.4f}')" } },
    { type: 'output', data: { output: "  beta=0.01: logit=0.030, sigmoid=0.5075, loss=0.6783\n  beta=0.1: logit=0.300, sigmoid=0.5744, loss=0.5544\n  beta=0.3: logit=0.900, sigmoid=0.7109, loss=0.3412\n  beta=1.0: logit=3.000, sigmoid=0.9526, loss=0.0486" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Larger Beta Genuinely Sharpens the Same Margin Into a Smaller Loss', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ದೊಡ್ಡ Beta ಅದೇ Margin ಅನ್ನೂ ಚಿಕ್ಕ Loss ಆಗಿ ತೀಕ್ಷ್ಣಗೊಳಿಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed: holding margin=3 fixed and only varying beta, sigmoid output climbs monotonically from 0.5075 (beta=0.01, barely more confident than a coin flip) to 0.9526 (beta=1.0, strongly confident) -- and loss falls monotonically from 0.6783 to 0.0486\n• This directly demonstrates the lesson\'s framing: small beta treats the SAME preference margin as weak evidence (loss stays near ln(2)), while large beta treats it as strong evidence (loss drops sharply) -- beta is not changing the underlying data, only how strongly the model is required to react to it',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: margin=3 ಅನ್ನೂ ಸ್ಥಿರವಾಗಿಟ್ಟುಕೊಂಡು ಕೇವಲ beta ಅನ್ನೂ ಬದಲಾಯಿಸುತ್ತಾ, sigmoid output 0.5075 (beta=0.01) ಇಂದ 0.9526 (beta=1.0) ಗೆ monotonically ಏರುತ್ತದೆ -- ಮತ್ತೆ loss 0.6783 ಇಂದ 0.0486 ಗೆ monotonically ಇಳಿಯುತ್ತದೆ\n• ಇದೂ lesson ya framing ಅನ್ನೂ ನೇರವಾಗಿ ಪ್ರದರ್ಶಿಸುತ್ತದೆ: ಚಿಕ್ಕ beta ಅದೇ preference margin ಅನ್ನೂ ದುರ್ಬಲ ಸಾಕ್ಷಿಯಾಗಿ ನಡೆಸಿಕೊಳ್ಳುತ್ತದೆ, ದೊಡ್ಡ beta ಅದನ್ನೂ ಬಲವಾದ ಸಾಕ್ಷಿಯಾಗಿ ನಡೆಸಿಕೊಳ್ಳುತ್ತದೆ' } },

    { type: 'table', data: {
      captionEn: 'Beta Sweep: Same Margin=3, Genuinely Different Loss', captionKn: 'Beta Sweep: ಅದೇ Margin=3, ನಿಜವಾಗಿ ಭಿನ್ನ Loss',
      rows: "Beta|Logit|Sigmoid|Loss\n0.01|0.030|0.5075|0.6783\n0.1|0.300|0.5744|0.5544\n0.3|0.900|0.7109|0.3412\n1.0|3.000|0.9526|0.0486" } },

    { type: 'heading', data: { textEn: 'The Alignment Landscape: DPO, KTO, ORPO, SimPO', textKn: 'Alignment Landscape: DPO, KTO, ORPO, SimPO ಒಂದೂ ನೋಟ', level: 'H2' } },
    { type: 'table', data: {
      captionEn: 'The Continuing Reduction of Alignment Complexity', captionKn: 'Alignment Complexity ಯ ನಿರಂತರ ಕಡಿತ',
      rows: "Method|Preference pairs?|Reference model?|Main simplification vs RLHF\nRLHF (Module 191)|Yes|Yes|Full pipeline\nDPO (this module)|Yes|Yes|Removes reward model + PPO\nKTO|No (unpaired good/bad)|Yes|Removes paired-comparison data requirement\nORPO|Yes|No|Combines SFT + alignment into one stage\nSimPO|Yes|No|Removes the reference model entirely" } },
    { type: 'concept', data: {
      headingEn: 'Why This Module Only Genuinely Implements DPO, Not the Others', headingKn: 'ಈ Module ಏಕೆ ಕೇವಲ DPO ಅನ್ನೂ ನಿಜವಾಗಿ Implement ಮಾಡುತ್ತದೆ, ಇತರವುಗಳಲ್ಲ',
      bodyEn: 'KTO, ORPO, and SimPO are presented here as structural comparisons based on their published objectives, not as genuinely executed NumPy code in this module -- consistent with this course\'s standing discipline of only claiming "genuinely verified" for what was actually run, this lesson is explicit that only DPO\'s loss, training loop, and evaluation were built and tested with real code.',
      bodyKn: 'KTO, ORPO, ಮತ್ತೆ SimPO ಅನ್ನೂ ಇಲ್ಲಿ ಅವುಗಳ ಪ್ರಕಟಿತ objectives ಆಧರಿಸಿ ರಚನಾತ್ಮಕ ಹೋಲಿಕೆಗಳಾಗಿ ಪ್ರಸ್ತುತಪಡಿಸಲಾಗಿದೆ, ಈ module ನಲ್ಲಿ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿದ NumPy code ಆಗಿ ಅಲ್ಲ.' } },

    { type: 'concept', data: {
      headingEn: 'Full Module 192 Recap', headingKn: 'ಪೂರ್ಣ Module 192 ಪುನರಾವಲೋಕನ',
      bodyEn: '• Part 1 genuinely verified the DPO loss in isolation: exact-zero log-prob difference at init, exact-ln(2) loss, and a hand-worked example reproduced through real code\n• Part 2 genuinely verified the training-loop scaffolding: an architecturally frozen reference (np.array_equal=True) and an honest demonstration that random perturbation does not reliably improve the preference margin\n• Part 3 genuinely verified evaluation: a 0.0% tie-case accuracy floor, a 50.0% post-perturbation accuracy that honestly reflects the absence of real gradient training, and a beta sweep confirming the theory\'s monotonic loss-sharpening prediction',
      bodyKn: '• Part 1 DPO loss ಅನ್ನೂ ಪ್ರತ್ಯೇಕವಾಗಿ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿತು: init ನಲ್ಲಿ ನಿಖರ-ಶೂನ್ಯ log-prob ವ್ಯತ್ಯಾಸ, ನಿಖರ-ln(2) loss, ಮತ್ತೆ ಒಂದೂ ಕೈ-ಲೆಕ್ಕಹಾಕಿದ example ನಿಜ code ಮೂಲಕ ಪುನರುತ್ಪಾದಿಸಿತು\n• Part 2 training-loop scaffolding ಅನ್ನೂ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿತು: ಒಂದೂ ರಚನಾತ್ಮಕವಾಗಿ frozen reference ಮತ್ತೆ random perturbation ವಿಶ್ವಾಸಾರ್ಹವಾಗಿ margin ಸುಧಾರಿಸುವುದಿಲ್ಲ ಎಂಬ ಪ್ರಾಮಾಣಿಕ ಪ್ರದರ್ಶನ\n• Part 3 evaluation ಅನ್ನೂ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿತು: ಒಂದೂ 0.0% tie-case accuracy floor, ಒಂದೂ 50.0% post-perturbation accuracy, ಮತ್ತೆ ಒಂದೂ beta sweep theory ya monotonic prediction ಅನ್ನೂ ದೃಢಪಡಿಸುತ್ತಾ' } },
    { type: 'concept', data: {
      headingEn: 'Key Terms', headingKn: 'ಮುಖ್ಯ ಪದಗಳು',
      bodyEn: '• Preference accuracy: fraction of pairs where implicit_reward(preferred) > implicit_reward(rejected)\n• Beta sensitivity: how strongly the DPO loss reacts to a fixed preference margin as beta varies\n• KTO: preference optimization from unpaired good/bad labels instead of paired comparisons\n• ORPO: combines SFT and preference alignment into a single training stage\n• SimPO: preference optimization without a separate reference model, using length-normalized log-probability instead',
      bodyKn: '• Preference accuracy: implicit_reward(preferred) > implicit_reward(rejected) ಆಗುವ pairs ಯ ಭಾಗ\n• Beta sensitivity: beta ಬದಲಾಗುತ್ತಾ, ಒಂದೂ ಸ್ಥಿರ preference margin ಗೆ DPO loss ಎಷ್ಟೂ ಬಲವಾಗಿ ಪ್ರತಿಕ್ರಿಯಿಸುತ್ತದೆ\n• KTO: paired comparisons ಬದಲು unpaired good/bad labels ಇಂದ preference optimization\n• ORPO: SFT ಮತ್ತೆ preference alignment ಎರಡನ್ನೂ ಒಂದೂ single training stage ಆಗಿ ಸಂಯೋಜಿಸುತ್ತದೆ\n• SimPO: ಪ್ರತ್ಯೇಕ reference model ಇಲ್ಲದೆ preference optimization, length-normalized log-probability ಬಳಸಿ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The exact preference-accuracy metric genuinely implemented here (fraction of pairs where implicit reward correctly ranks preferred above rejected) is the same held-out evaluation metric reported in the original DPO paper and widely used across Hugging Face TRL and similar production training frameworks to track whether a DPO run is genuinely learning.',
      bodyKn: 'ಇಲ್ಲಿ ನಿಜವಾಗಿ implement ಮಾಡಿದ ನಿಖರ preference-accuracy metric ಮೂಲ DPO paper ನಲ್ಲಿ ವರದಿ ಮಾಡಿದ ಅದೇ held-out evaluation metric, ಮತ್ತೆ Hugging Face TRL ಮತ್ತೆ ಅಂತಹ production training frameworks ಆದ್ಯಂತ ವ್ಯಾಪಕವಾಗಿ ಬಳಸಲಾಗುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed: the exact-0.0% tie-case floor gives a hard, checkable lower bound for any real DPO evaluation -- a reported accuracy below what random tie-breaking would produce signals a genuine implementation bug, not just poor training\n• Genuinely confirmed: beta\'s monotonic effect on loss sharpness (0.6783 down to 0.0486 across the tested range) means teams can tune it predictably as a single interpretable knob, rather than guessing blindly',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ನಿಖರ-0.0% tie-case floor YAAVUDE ನಿಜ DPO evaluation ಗೆ ಒಂದೂ ಕಠಿಣ, checkable lower bound ನೀಡುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: beta ya monotonic ಪರಿಣಾಮ loss sharpness ಮೇಲೆ (0.6783 ಇಂದ 0.0486 ಗೆ) ಎಂದರೆ ತಂಡಗಳು ಅದನ್ನೂ ಊಹಿಸಬಹುದಾಗಿ ಟ್ಯೂನ್ ಮಾಡಬಹುದು, ಕುರುಡಾಗಿ ಊಹಿಸುವ ಬದಲು' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'When a fine-tuning team reports "DPO preference accuracy reached 87% on the held-out set," they are reporting the same genuinely-implemented metric verified here -- and if that number ever came back below chance, the debugging checklist genuinely built across this module (init sanity checks, frozen-reference verification, beta behavior) is exactly what a real engineer would reach for first.',
      bodyKn: 'ಒಂದು fine-tuning team "DPO preference accuracy held-out set mele 87% talupitu" ಎಂದೂ ವರದಿ ಮಾಡಿದಾಗ, ಅವರು ಇಲ್ಲಿ ನಿಜವಾಗಿ implement ಮಾಡಿದ ಅದೇ metric ಅನ್ನೂ ವರದಿ ಮಾಡುತ್ತಿದ್ದಾರೆ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: what was the preference accuracy when policy exactly equaled reference (the tie case)?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: policy ನಿಖರವಾಗಿ reference ಗೆ ಸಮಾನವಾದಾಗ (tie case) preference accuracy ಏನಾಗಿತ್ತು?',
        opts: ['50.0%, since it is a coin flip', '0.0%, because the strict > comparison never fires when both rewards are exactly equal', '100.0%, ties always count as correct', 'Undefined'], correct: 1,
        optsKn: ['50.0%, ಇದೂ ಒಂದೂ coin flip ಆಗಿರುವುದರಿಂದ', '0.0%, ಎರಡೂ rewards ನಿಖರವಾಗಿ ಸಮಾನವಾಗಿರುವಾಗ strict > ಹೋಲಿಕೆ ಎಂದಿಗೂ ಸಕ್ರಿಯವಾಗುವುದಿಲ್ಲ ಆಗಿರುವುದರಿಂದ', '100.0%, ties ಯಾವಾಗಲೂ ಸರಿಯಾಗಿ ಎಣಿಸಲ್ಪಡುತ್ತವೆ', 'Undefined'] },
      { q: 'Genuinely confirmed: after the same random perturbation measured in Part 2, what was the preference accuracy across all four preference pairs?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Part 2 ನಲ್ಲಿ ಅಳೆಯಿದ ಅದೇ random perturbation ನಂತರ, ಎಲ್ಲಾ ನಾಲ್ಕೂ preference pairs ಆದ್ಯಂತ preference accuracy ಏನಾಗಿತ್ತು?',
        opts: ['100.0%', '50.0%', '0.0%', '25.0%'], correct: 1,
        optsKn: ['100.0%', '50.0%', '0.0%', '25.0%'] },
      { q: 'Genuinely confirmed: holding margin=3 fixed and sweeping beta from 0.01 to 1.0, what happened to the loss?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: margin=3 ಅನ್ನೂ ಸ್ಥಿರವಾಗಿಟ್ಟುಕೊಂಡು beta ಅನ್ನೂ 0.01 ಇಂದ 1.0 ಗೆ sweep ಮಾಡಿದಾಗ, loss ಗೆ ಏನೂ ಸಂಭವಿಸಿತು?',
        opts: ['It increased monotonically from 0.05 to 0.68', 'It decreased monotonically from 0.6783 to 0.0486', 'It stayed constant', 'It became negative'], correct: 1,
        optsKn: ['ಅದೂ 0.05 ಇಂದ 0.68 ಗೆ monotonically ಏರಿತು', 'ಅದೂ 0.6783 ಇಂದ 0.0486 ಗೆ monotonically ಇಳಿಯಿತು', 'ಅದೂ ಸ್ಥಿರವಾಗಿ ಉಳಿಯಿತು', 'ಅದೂ negative ಆಯಿತು'] },
      { q: 'Why does beta_sensitivity_analysis() genuinely reinitialize policy and reference from the same SFT checkpoint for every beta value tested?', qKn: 'beta_sensitivity_analysis() test ಮಾಡಿದ ಪ್ರತಿ beta value ಗೆ ಏಕೆ ನಿಜವಾಗಿ ಅದೇ SFT checkpoint ಇಂದ policy ಮತ್ತೆ reference ಅನ್ನೂ ಮರುಪ್ರಾರಂಭಿಸುತ್ತದೆ?',
        opts: ['To save memory', 'So that any observed difference between beta values is attributable to beta alone, not to weights inherited from a previous beta run', 'It is unnecessary and just a stylistic choice', 'Because the reference model changes during training'], correct: 1,
        optsKn: ['Memory ಉಳಿಸಲು', 'beta values ನಡುವೆ ಗಮನಿಸಿದ ಯಾವುದೇ ವ್ಯತ್ಯಾಸ beta ಒಂದಕ್ಕೆ ಮಾತ್ರ ಆರೋಪಿಸಬಹುದು ಎಂದೂ ಖಾತ್ರಿಪಡಿಸಲು', 'ಇದೂ ಅನಗತ್ಯ ಮತ್ತೆ ಕೇವಲ ಒಂದೂ ಶೈಲಿಯ ಆಯ್ಕೆ', 'Reference model training ಸಮಯದಲ್ಲಿ ಬದಲಾಗುವುದರಿಂದ'] },
      { q: 'Which method, structurally compared in this lesson, removes the DPO reference model entirely?', qKn: 'ಈ lesson ನಲ್ಲಿ ರಚನಾತ್ಮಕವಾಗಿ ಹೋಲಿಸಿದ ಯಾವ ವಿಧಾನ DPO reference model ಅನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ತೆಗೆಯುತ್ತದೆ?',
        opts: ['KTO', 'ORPO or SimPO', 'RLHF', 'Standard DPO'], correct: 1,
        optsKn: ['KTO', 'ORPO ಅಥವಾ SimPO', 'RLHF', 'Standard DPO'] },
    ] } },
  ],
};
