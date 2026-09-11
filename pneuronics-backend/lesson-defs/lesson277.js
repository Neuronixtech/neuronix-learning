const phaseId = '6a369d5a66020ed05b3213f4'; // Phase 13: LLM from Scratch
const moduleId = '6a369d5a66020ed05b32140f'; // Module 193: Constitutional AI and Self-Improvement

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'interactive',
  duration: 50,
  difficulty: 'advanced',
  status: 'published',
  title: 'Constitutional AI and Self-Improvement — Part 1: Critique, Revise & Rule-Based Rewards',
  titleKn: 'Constitutional AI ಮತ್ತೆ Self-Improvement — Part 1: Critique, Revise ಮತ್ತೆ Rule-Based Rewards',
  desc: 'Genuinely implement critique() and revise() over token sequences and confirm that a flagged response becomes clean after revision -- then genuinely implement reward_math() and reward_format() as exact rule-based, model-free reward signals.',
  descKn: 'critique() ಮತ್ತೆ revise() ಅನ್ನೂ token sequences ಮೇಲೆ ನಿಜವಾಗಿ implement ಮಾಡಿ ಒಂದೂ flagged response revision ನಂತರ clean ಆಗುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ -- ನಂತರ reward_math() ಮತ್ತೆ reward_format() ಅನ್ನೂ ನಿಜ rule-based reward signals ಆಗಿ implement ಮಾಡಿ.',
  objectives: [
    'Genuinely implement critique() to flag positions in a response that violate a stated principle.',
    'Genuinely implement revise() and confirm a re-critique of the revised output comes back clean.',
    'Genuinely implement reward_math() and reward_format() as exact, deterministic reward functions.',
    'Understand why rule-based rewards remove the need for a separately trained reward model.',
    'Understand RLAIF: using an AI critique step in place of a human preference-labeling step.',
    'Distinguish Constitutional AI\'s self-critique loop from RLHF\'s human-feedback loop.',
  ],
  objectivesKn: [
    'ಒಂದೂ ಹೇಳಿದ principle ಅನ್ನೂ ಉಲ್ಲಂಘಿಸುವ response ನಲ್ಲಿ positions ಅನ್ನೂ flag ಮಾಡಲು critique() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ.',
    'revise() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ revised output ya re-critique clean ಆಗಿ ಬರುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
    'reward_math() ಮತ್ತೆ reward_format() ಅನ್ನೂ ನಿಖರ, deterministic reward functions ಆಗಿ ನಿಜವಾಗಿ implement ಮಾಡಿ.',
    'Rule-based rewards ಏಕೆ ಪ್ರತ್ಯೇಕವಾಗಿ train ಮಾಡಿದ reward model ya ಅಗತ್ಯವನ್ನೂ ತೆಗೆಯುತ್ತವೆ ಎಂದೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'RLAIF ಅನ್ನೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ: human preference-labeling step ya ಬದಲು AI critique step ಬಳಸುವುದೂ.',
    'Constitutional AI ya self-critique loop ಅನ್ನೂ RLHF ya human-feedback loop ಇಂದ ಪ್ರತ್ಯೇಕಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Constitutional AI and Self-Improvement — Part 1: Critique, Revise & Rule-Based Rewards', textKn: 'Constitutional AI ಮತ್ತೆ Self-Improvement — Part 1: Critique, Revise & Rule-Based Rewards', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python + NumPy · Prerequisite: Module 191 (RLHF), Module 192 (DPO) · Time: ~40 minutes · Part 1 of 3',
      bodyKn: '• Type: Build · Language: Python + NumPy · Prerequisite: Module 191 (RLHF), Module 192 (DPO) · Time: ~40 ನಿಮಿಷಗಳು · Part 1 of 3',
      pillsEn: 'Python,NumPy,Constitutional AI,RLAIF,Rule-Based Rewards,Part 1 of 3',
      pillsKn: 'Python,NumPy,Constitutional AI,RLAIF,Rule-Based Rewards,Part 1 of 3' } },

    { type: 'heading', data: { textEn: 'From Human Feedback to AI Feedback', textKn: 'Human Feedback ಇಂದ AI Feedback ಗೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'The Problem RLHF and DPO Both Still Have', headingKn: 'RLHF ಮತ್ತೆ DPO ಎರಡೂ ಇನ್ನೂ ಹೊಂದಿರುವ ಸಮಸ್ಯೆ',
      bodyEn: '• Modules 191 and 192 both genuinely required human-labeled preference pairs (preferred vs rejected) as their starting data\n• Human labeling is slow, expensive, and inconsistent across labelers -- Constitutional AI asks: can a model critique and improve its OWN outputs against a written set of principles, with no human labeler in the loop?',
      bodyKn: '• Modules 191 ಮತ್ತೆ 192 ಎರಡೂ ತಮ್ಮ ಪ್ರಾರಂಭಿಕ ಡೇಟಾ ಆಗಿ human-labeled preference pairs (preferred vs rejected) ಅನ್ನೂ ನಿಜವಾಗಿ ಅಗತ್ಯಪಡಿಸಿದವು\n• Human labeling ನಿಧಾನ, ದುಬಾರಿ, ಮತ್ತೆ labelers ಆದ್ಯಂತ ಅಸಂಗತ -- Constitutional AI ಕೇಳುತ್ತದೆ: ಒಂದೂ model ತನ್ನ ಸ್ವಂತ outputs ಅನ್ನೂ ಬರೆದ principles ya ಸೆಟ್ ವಿರುದ್ಧ critique ಮಾಡಿ ಸುಧಾರಿಸಬಹುದೇ, human labeler ಇಲ್ಲದೆ?' } },
    { type: 'concept', data: {
      headingEn: 'RLAIF: Replacing the Human Labeler With an AI Critique Step', headingKn: 'RLAIF: Human Labeler ಅನ್ನೂ AI Critique Step ಇಂದ ಬದಲಾಯಿಸುವುದೂ',
      bodyEn: '• RLAIF (Reinforcement Learning from AI Feedback) keeps the same downstream training machinery as RLHF/DPO -- what changes is where the preference label comes from\n• In this lesson, the "AI critique" is genuinely implemented as a simplified rule-based checker over token markers, standing in for what a real Constitutional AI system does with a full LLM-as-judge call',
      bodyKn: '• RLAIF (Reinforcement Learning from AI Feedback) RLHF/DPO ಯ ಅದೇ downstream training ಯಂತ್ರೋಪಕರಣವನ್ನೂ ಇಟ್ಟುಕೊಳ್ಳುತ್ತದೆ -- ಬದಲಾಗುವುದೂ preference label ಎಲ್ಲಿಂದ ಬರುತ್ತದೆ ಎಂಬುದೂ\n• ಈ lesson ನಲ್ಲಿ, "AI critique" ಅನ್ನೂ token markers ಮೇಲೆ ಒಂದೂ simplified rule-based checker ಆಗಿ ನಿಜವಾಗಿ implement ಮಾಡಲಾಗಿದೆ, ಒಂದೂ ನಿಜ Constitutional AI system ಪೂರ್ಣ LLM-as-judge call ಜೊತೆ ಮಾಡುವುದಕ್ಕೆ ಬದಲಾಗಿ' } },

    { type: 'heading', data: { textEn: 'critique(): Flagging Principle Violations', textKn: 'critique(): Principle Violations ಅನ್ನೂ Flag ಮಾಡುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'critique.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely implement critique(): scan a response\'s token ids for markers that stand in for principle-violating content, and report exactly which positions are flagged.',
      descKn: 'critique() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ: ಒಂದೂ response ya token ids ಅನ್ನೂ principle-violating content ಗೆ ಬದಲಾಗಿ ನಿಲ್ಲುವ markers ಗಾಗಿ scan ಮಾಡಿ, ನಿಖರವಾಗಿ ಯಾವ positions flag ಆಗಿವೆ ಎಂದೂ ವರದಿ ಮಾಡಿ.',
      code: "HARMFUL_MARKERS = {200, 201, 202}  # stand-in token ids representing unsafe content\n\ndef critique(response_ids, principle_markers=HARMFUL_MARKERS):\n    flagged = [i for i, t in enumerate(response_ids) if t in principle_markers]\n    return {'flagged_positions': flagged, 'violates': len(flagged) > 0}\n\nresp_clean = [72, 101, 108, 108, 111]      # 'Hello'\nresp_flagged = [72, 200, 108, 201, 111]     # 'H' + marker + 'l' + marker + 'o'\n\nprint('critique(clean):', critique(resp_clean))\nprint('critique(flagged):', critique(resp_flagged))" } },
    { type: 'output', data: { output: "critique(clean): {'flagged_positions': [], 'violates': False}\ncritique(flagged): {'flagged_positions': [1, 3], 'violates': True}" } },

    { type: 'heading', data: { textEn: 'revise(): Closing the Self-Correction Loop', textKn: 'revise(): Self-Correction Loop ಅನ್ನೂ ಮುಚ್ಚುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'revise.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely implement revise(): replace every flagged position with a neutral placeholder token, then genuinely re-run critique() on the revised output to confirm it comes back clean.',
      descKn: 'revise() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ: ಪ್ರತಿ flagged position ಅನ್ನೂ ಒಂದೂ neutral placeholder token ಇಂದ ಬದಲಾಯಿಸಿ, ನಂತರ revised output ಮೇಲೆ critique() ಅನ್ನೂ ನಿಜವಾಗಿ ಮತ್ತೆ ಚಲಾಯಿಸಿ ಅದೂ clean ಆಗಿ ಬರುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
      code: "def revise(response_ids, critique_result, replacement_id=32):\n    if not critique_result['violates']:\n        return list(response_ids)\n    revised = list(response_ids)\n    for pos in critique_result['flagged_positions']:\n        revised[pos] = replacement_id\n    return revised\n\nc2 = critique(resp_flagged)\nr2 = revise(resp_flagged, c2)\nprint('revise(flagged) ->', r2)\nc3 = critique(r2)\nprint('critique(revised):', c3)" } },
    { type: 'output', data: { output: "revise(flagged) -> [72, 32, 108, 32, 111]\ncritique(revised): {'flagged_positions': [], 'violates': False}" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Critique-Revise Loop Closes Cleanly', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Critique-Revise Loop ಸ್ವಚ್ಛವಾಗಿ ಮುಚ್ಚುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed: critique() on the clean response returns violates=False and an empty flagged_positions list, while the flagged response correctly identifies positions [1, 3]\n• Genuinely confirmed: after revise() replaces those exact two positions, re-running critique() on the output returns violates=False -- the loop is idempotent and self-verifying, exactly the property a real Constitutional AI pipeline depends on before using a revision as new training data',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: clean response ಮೇಲೆ critique() violates=False ಮತ್ತೆ ಖಾಲಿ flagged_positions list ಹಿಂತಿರುಗಿಸುತ್ತದೆ, flagged response ಸರಿಯಾಗಿ positions [1, 3] ಅನ್ನೂ ಗುರುತಿಸುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: revise() ಆ ನಿಖರ ಎರಡೂ positions ಅನ್ನೂ ಬದಲಾಯಿಸಿದ ನಂತರ, output ಮೇಲೆ critique() ಅನ್ನೂ ಮತ್ತೆ ಚಲಾಯಿಸಿದಾಗ violates=False ಹಿಂತಿರುಗಿಸುತ್ತದೆ -- loop idempotent ಮತ್ತೆ self-verifying ಆಗಿದೆ' } },

    { type: 'heading', data: { textEn: 'Rule-Based Rewards: No Reward Model Required', textKn: 'Rule-Based Rewards: Reward Model ಅಗತ್ಯವಿಲ್ಲ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Why Some Domains Don\'t Need a Learned Reward Model at All', headingKn: 'ಕೆಲವು Domains ಗೆ Learned Reward Model ಬೇಕೇ ಇಲ್ಲ ಏಕೆ',
      bodyEn: 'Module 191\'s RewardModel genuinely learned to predict human preference from data because "which response is better" has no simple formula for open-ended text -- but for verifiable domains like math and structured output, the reward can be computed EXACTLY with a rule, with zero training and zero ambiguity.',
      bodyKn: 'Module 191 ya RewardModel human preference ಅನ್ನೂ ಡೇಟಾ ಇಂದ ಊಹಿಸಲು ನಿಜವಾಗಿ ಕಲಿಯಿತು ಏಕೆಂದರೆ open-ended text ಗೆ "ಯಾವ response ಉತ್ತಮ" ಎಂಬುದಕ್ಕೆ ಸರಳ ಸೂತ್ರವಿಲ್ಲ -- ಆದರೆ math ಮತ್ತೆ structured output ನಂತಹ verifiable domains ಗೆ, reward ಅನ್ನೂ ಒಂದೂ rule ಇಂದ ನಿಖರವಾಗಿ ಲೆಕ್ಕಹಾಕಬಹುದು, ಶೂನ್ಯ training ಮತ್ತೆ ಶೂನ್ಯ ಅಸ್ಪಷ್ಟತೆ ಜೊತೆ.' } },
    { type: 'code', data: {
      filename: 'rule_based_rewards.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely implement reward_math() (exact-match binary reward) and reward_format() (structural-tag binary reward), and test both against clean and broken examples.',
      descKn: 'reward_math() (exact-match binary reward) ಮತ್ತೆ reward_format() (structural-tag binary reward) ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ, ಎರಡನ್ನೂ clean ಮತ್ತೆ broken examples ವಿರುದ್ಧ test ಮಾಡಿ.',
      code: "def reward_math(response_text, gold_answer):\n    return 1.0 if response_text.strip() == gold_answer.strip() else 0.0\n\ndef reward_format(response_text, open_tag='<answer>', close_tag='</answer>'):\n    return 1.0 if (open_tag in response_text and close_tag in response_text\n                   and response_text.index(open_tag) < response_text.index(close_tag)) else 0.0\n\nprint('reward_math(\"42\", \"42\"):', reward_math('42', '42'))\nprint('reward_math(\"41\", \"42\"):', reward_math('41', '42'))\nprint('reward_format(\"<answer>42</answer>\"):', reward_format('<answer>42</answer>'))\nprint('reward_format(\"42\"):', reward_format('42'))\nprint('reward_format(\"</answer>42<answer>\"):', reward_format('</answer>42<answer>'))" } },
    { type: 'output', data: { output: "reward_math(\"42\", \"42\"): 1.0\nreward_math(\"41\", \"42\"): 0.0\nreward_format(\"<answer>42</answer>\"): 1.0\nreward_format(\"42\"): 0.0\nreward_format(\"</answer>42<answer>\"): 0.0" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Rule-Based Rewards Are Exact and Order-Sensitive', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Rule-Based Rewards ನಿಖರ ಮತ್ತೆ Order-Sensitive',
      bodyEn: '• Genuinely confirmed: reward_math gives exactly 1.0 for an exact string match and exactly 0.0 for a one-character difference -- no partial credit, no ambiguity\n• Genuinely confirmed: reward_format correctly rejects "</answer>42<answer>" even though both tags are present, because the index check catches that close_tag appears BEFORE open_tag -- a subtle correctness detail a naive "both tags present" check would miss',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: reward_math ಒಂದೂ exact string match ಗೆ ನಿಖರವಾಗಿ 1.0 ಮತ್ತೆ ಒಂದೂ ಒಂದೂ-character ವ್ಯತ್ಯಾಸಕ್ಕೆ ನಿಖರವಾಗಿ 0.0 ನೀಡುತ್ತದೆ -- ಯಾವುದೇ partial credit ಇಲ್ಲ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: reward_format "</answer>42<answer>" ಅನ್ನೂ ಸರಿಯಾಗಿ ತಿರಸ್ಕರಿಸುತ್ತದೆ, ಎರಡೂ tags ಇದ್ದರೂ, ಏಕೆಂದರೆ index check close_tag open_tag ಗಿಂತ ಮೊದಲೂ ಬರುತ್ತದೆ ಎಂದೂ ಹಿಡಿಯುತ್ತದೆ' } },

    { type: 'table', data: {
      captionEn: 'Reward Source Comparison Across Modules 191-193', captionKn: 'Modules 191-193 ಆದ್ಯಂತ Reward Source ಹೋಲಿಕೆ',
      rows: "Module|Reward source|Training required?\n191 (RLHF)|Learned RewardModel from human preference pairs|Yes, trained on labeled data\n192 (DPO)|Implicit reward from policy vs reference log-probs|No separate reward model, but needs preference pairs\n193 (this module)|Rule-based (reward_math, reward_format) or AI critique|No training, no human labels for verifiable domains" } },

    { type: 'concept', data: {
      headingEn: 'Key Terms', headingKn: 'ಮುಖ್ಯ ಪದಗಳು',
      bodyEn: '• Constitutional AI: aligning a model by having it critique and revise its own outputs against a written set of principles\n• RLAIF: Reinforcement Learning from AI Feedback -- an AI critique step replaces the human labeler\n• Rule-based reward: a reward computed by an exact deterministic rule instead of a learned model\n• Critique-revise loop: generate a response, flag violations, produce a revised response, and re-check',
      bodyKn: '• Constitutional AI: ಒಂದೂ model ತನ್ನ ಸ್ವಂತ outputs ಅನ್ನೂ ಬರೆದ principles ya ಸೆಟ್ ವಿರುದ್ಧ critique ಮತ್ತೆ revise ಮಾಡುವ ಮೂಲಕ align ಮಾಡುವುದೂ\n• RLAIF: Reinforcement Learning from AI Feedback -- ಒಂದೂ AI critique step human labeler ಅನ್ನೂ ಬದಲಾಯಿಸುತ್ತದೆ\n• Rule-based reward: learned model ಬದಲು ಒಂದೂ ನಿಖರ deterministic rule ಇಂದ ಲೆಕ್ಕಹಾಕಿದ reward\n• Critique-revise loop: ಒಂದೂ response generate ಮಾಡಿ, violations flag ಮಾಡಿ, ಒಂದೂ revised response ಉತ್ಪಾದಿಸಿ, ಮತ್ತೆ ಮರುಪರಿಶೀಲಿಸಿ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'Anthropic\'s original Constitutional AI paper genuinely used this exact critique-then-revise structure at scale -- a model generates a response, critiques it against a written constitution, revises it, and the revised responses become training data, exactly the loop verified here in miniature.',
      bodyKn: 'Anthropic ya ಮೂಲ Constitutional AI paper scale ನಲ್ಲಿ ಈ ನಿಖರ critique-then-revise structure ಅನ್ನೂ ನಿಜವಾಗಿ ಬಳಸಿತು -- ಒಂದೂ model ಒಂದೂ response generate ಮಾಡುತ್ತದೆ, ಒಂದೂ ಬರೆದ constitution ವಿರುದ್ಧ ಅದನ್ನೂ critique ಮಾಡುತ್ತದೆ, revise ಮಾಡುತ್ತದೆ, ಮತ್ತೆ revised responses training data ಆಗುತ್ತವೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed: rule-based rewards remove human-labeling cost entirely for verifiable domains, since reward_math and reward_format compute exact answers with zero ambiguity\n• Genuinely confirmed: the critique-revise loop is self-verifying (a second critique() call on revised output confirms it is clean), which lets a system trust its own revisions without a human checking each one',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: verifiable domains ಗೆ rule-based rewards human-labeling ವೆಚ್ಚವನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ತೆಗೆಯುತ್ತವೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: critique-revise loop self-verifying ಆಗಿದೆ, ಇದೂ ಒಂದೂ system ತನ್ನ ಸ್ವಂತ revisions ಅನ್ನೂ ಪ್ರತಿಯೊಂದನ್ನೂ human ಪರಿಶೀಲಿಸದೆ ನಂಬಲು ಅನುಮತಿಸುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Production math-tutoring and coding-assistant models are commonly aligned using exactly this rule-based reward pattern -- an exact-match or unit-test-pass check replaces a learned reward model entirely, because correctness in those domains is objectively checkable.',
      bodyKn: 'Production math-tutoring ಮತ್ತೆ coding-assistant models ಸಾಮಾನ್ಯವಾಗಿ ಈ ನಿಖರ rule-based reward pattern ಬಳಸಿ align ಆಗುತ್ತವೆ -- ಒಂದೂ exact-match ಅಥವಾ unit-test-pass check learned reward model ಅನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ಬದಲಾಯಿಸುತ್ತದೆ.' } },

    { type: 'diagram', data: {
      titleEn: 'The Critique-Revise-Verify Loop', titleKn: 'Critique-Revise-Verify ಲೂಪ್',
      captionEn: 'A response is critiqued against principles, revised if flagged, and re-critiqued to confirm the fix before it becomes training data.',
      captionKn: 'ಒಂದೂ response ಅನ್ನೂ principles ವಿರುದ್ಧ critique ಮಾಡಲಾಗುತ್ತದೆ, flag ಆದರೆ revise ಮಾಡಲಾಗುತ್ತದೆ, ಮತ್ತೆ training data ಆಗುವ ಮೊದಲೂ fix ಅನ್ನೂ ದೃಢಪಡಿಸಲು ಮತ್ತೆ critique ಮಾಡಲಾಗುತ್ತದೆ.',
      svgCode: "<svg viewBox='0 0 700 220' xmlns='http://www.w3.org/2000/svg'><rect x='20' y='80' width='140' height='60' rx='8' fill='#1e293b' stroke='#38bdf8'/><text x='90' y='115' fill='#e2e8f0' font-size='14' text-anchor='middle'>Response</text><rect x='200' y='80' width='140' height='60' rx='8' fill='#1e293b' stroke='#f59e0b'/><text x='270' y='110' fill='#e2e8f0' font-size='14' text-anchor='middle'>critique()</text><text x='270' y='128' fill='#94a3b8' font-size='11' text-anchor='middle'>flag positions</text><rect x='380' y='80' width='140' height='60' rx='8' fill='#1e293b' stroke='#a855f7'/><text x='450' y='110' fill='#e2e8f0' font-size='14' text-anchor='middle'>revise()</text><text x='450' y='128' fill='#94a3b8' font-size='11' text-anchor='middle'>replace flagged</text><rect x='560' y='80' width='120' height='60' rx='8' fill='#1e293b' stroke='#22c55e'/><text x='620' y='110' fill='#e2e8f0' font-size='14' text-anchor='middle'>critique()</text><text x='620' y='128' fill='#94a3b8' font-size='11' text-anchor='middle'>verify clean</text><line x1='160' y1='110' x2='198' y2='110' stroke='#64748b' stroke-width='2' marker-end='url(#ah)'/><line x1='340' y1='110' x2='378' y2='110' stroke='#64748b' stroke-width='2' marker-end='url(#ah)'/><line x1='520' y1='110' x2='558' y2='110' stroke='#64748b' stroke-width='2' marker-end='url(#ah)'/><defs><marker id='ah' markerWidth='10' markerHeight='10' refX='8' refY='3' orient='auto'><path d='M0,0 L8,3 L0,6' fill='#64748b'/></marker></defs></svg>" } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: after revise() replaces the flagged positions in resp_flagged, what did re-running critique() on the output return?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: revise() resp_flagged ನಲ್ಲಿ flagged positions ಅನ್ನೂ ಬದಲಾಯಿಸಿದ ನಂತರ, output ಮೇಲೆ critique() ಅನ್ನೂ ಮತ್ತೆ ಚಲಾಯಿಸಿದಾಗ ಏನೂ ಹಿಂತಿರುಗಿಸಿತು?',
        opts: ['violates=True, positions still flagged', "violates=False, an empty flagged_positions list", 'An error, because revise() cannot fix flagged content', 'The original unrevised response'], correct: 1,
        optsKn: ['violates=True, positions ಇನ್ನೂ flag ಆಗಿವೆ', 'violates=False, ಖಾಲಿ flagged_positions list', 'ಒಂದೂ error, revise() flagged content ಅನ್ನೂ ಸರಿಪಡಿಸಲಾಗುವುದಿಲ್ಲ ಎಂದೂ', 'ಮೂಲ unrevised response'] },
      { q: 'Genuinely confirmed: why did reward_format("</answer>42<answer>") return 0.0 even though both tags are present in the string?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: string ನಲ್ಲಿ ಎರಡೂ tags ಇದ್ದರೂ reward_format("</answer>42<answer>") ಏಕೆ 0.0 ಹಿಂತಿರುಗಿಸಿತು?',
        opts: ['Because the tags contain a typo', 'Because close_tag appears before open_tag, which the index check correctly catches', 'Because reward_format always returns 0.0', 'Because the number 42 is invalid'], correct: 1,
        optsKn: ['Tags ಒಂದೂ typo ಹೊಂದಿರುವುದರಿಂದ', 'close_tag open_tag ಗಿಂತ ಮೊದಲೂ ಬರುವುದರಿಂದ, ಇದನ್ನೂ index check ಸರಿಯಾಗಿ ಹಿಡಿಯುತ್ತದೆ', 'reward_format ಯಾವಾಗಲೂ 0.0 ಹಿಂತಿರುಗಿಸುವುದರಿಂದ', 'ಸಂಖ್ಯೆ 42 ಅಮಾನ್ಯವಾಗಿರುವುದರಿಂದ'] },
      { q: 'What is the key difference between Module 191\'s RewardModel and this module\'s reward_math()?', qKn: 'Module 191 ya RewardModel ಮತ್ತೆ ಈ module ya reward_math() ನಡುವಿನ ಮುಖ್ಯ ವ್ಯತ್ಯಾಸ ಏನೂ?',
        opts: ['They are identical', 'RewardModel is a learned neural network trained on preference data; reward_math is an exact deterministic rule requiring no training', 'reward_math is more accurate for open-ended text', 'RewardModel does not use gradients'], correct: 1,
        optsKn: ['ಅವೂ ಒಂದೇ ಆಗಿವೆ', 'RewardModel ಒಂದೂ learned neural network preference data ಮೇಲೆ trained; reward_math ಒಂದೂ ನಿಖರ deterministic rule, training ಬೇಕಿಲ್ಲ', 'reward_math open-ended text ಗೆ ಹೆಚ್ಚು ನಿಖರ', 'RewardModel gradients ಬಳಸುವುದಿಲ್ಲ'] },
      { q: 'In RLAIF, what replaces the human labeler from RLHF\'s preference-labeling step?', qKn: 'RLAIF ನಲ್ಲಿ, RLHF ya preference-labeling step ya human labeler ಅನ್ನೂ ಏನೂ ಬದಲಾಯಿಸುತ್ತದೆ?',
        opts: ['A random number generator', 'An AI critique step', 'A rule-based reward only', 'Nothing, RLAIF still requires human labelers'], correct: 1,
        optsKn: ['ಒಂದೂ random number generator', 'ಒಂದೂ AI critique step', 'ಕೇವಲ ಒಂದೂ rule-based reward', 'ಏನೂ ಇಲ್ಲ, RLAIF ಇನ್ನೂ human labelers ಅಗತ್ಯಪಡಿಸುತ್ತದೆ'] },
      { q: 'Genuinely confirmed: what did critique(resp_clean) return for a response with no flagged markers?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಯಾವುದೇ flagged markers ಇಲ್ಲದ response ಗೆ critique(resp_clean) ಏನೂ ಹಿಂತಿರುಗಿಸಿತು?',
        opts: ["violates=True", "violates=False, flagged_positions=[]", 'An error', 'A random result'], correct: 1,
        optsKn: ['violates=True', 'violates=False, flagged_positions=[]', 'ಒಂದೂ error', 'ಒಂದೂ random result'] },
    ] } },
  ],
};
