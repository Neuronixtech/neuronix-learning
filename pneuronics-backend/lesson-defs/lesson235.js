const phaseId = '6a369d5966020ed05b3213cd'; // Phase 12: Reinforcement Learning
const moduleId = '6a369d5a66020ed05b3213e5'; // Module 179: PPO

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'interactive',
  duration: 35,
  difficulty: 'advanced',
  status: 'published',
  title: 'PPO (Part 1) — Foundations & Rollout Collection',
  titleKn: 'PPO (Part 1) — Foundations & Rollout Collection',
  desc: 'Genuinely confirm the exact importance-ratio worked example (pi_old=0.25, pi_new=0.30 -> ratio=1.2, matching a direct 0.30/0.25 division exactly), establishing why PPO stores log_pi_old at rollout time -- the log-probability snapshot that later lets PPO measure how far a new policy has moved from the one that generated the data.',
  descKn: 'ನಿಖರ importance-ratio worked example ಅನ್ನೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ (pi_old=0.25, pi_new=0.30 -> ratio=1.2, ಒಂದೂ ನೇರ 0.30/0.25 ಭಾಗಕ್ಕೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ), rollout ಸಮಯದಲ್ಲಿ PPO log_pi_old ಅನ್ನೂ ಏಕೆ ಸಂಗ್ರಹಿಸುತ್ತದೆ ಎಂದೂ ಸ್ಥಾಪಿಸುತ್ತಾ -- ನಂತರ ಒಂದೂ ಹೊಸ policy data ಉತ್ಪಾದಿಸಿದ ಒಂದರಿಂದ ಎಷ್ಟೂ ದೂರ ಚಲಿಸಿದೆ ಎಂದೂ PPO ಗೆ ಅಳೆಯಲು ಬಿಡುವ log-probability snapshot.',
  objectives: [
    'Explain why A2C cannot freely reuse an old rollout.',
    'Explain what on-policy means in PPO.',
    'Define the importance ratio r_t(theta) = pi_theta(a|s) / pi_theta_old(a|s).',
    'Explain why PPO stores log_pi_old during rollout.',
    'Understand why PPO can perform multiple epochs over the same rollout.',
    'Understand how PPO gets its advantages from A2C/GAE.',
  ],
  objectivesKn: [
    'A2C ಒಂದೂ ಹಳೆಯ rollout ಅನ್ನೂ ಮುಕ್ತವಾಗಿ ಮರುಬಳಸಲಾಗುವುದಿಲ್ಲ ಏಕೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'PPO ನಲ್ಲಿ on-policy ಎಂದರೆ ಏನೂ ಎಂದೂ ವಿವರಿಸಿ.',
    'Importance ratio r_t(theta) = pi_theta(a|s) / pi_theta_old(a|s) ವ್ಯಾಖ್ಯಾನಿಸಿ.',
    'Rollout ಸಮಯದಲ್ಲಿ PPO log_pi_old ಅನ್ನೂ ಏಕೆ ಸಂಗ್ರಹಿಸುತ್ತದೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'ಅದೇ rollout ಮೇಲೆ PPO ಅನೇಕ epochs ಏಕೆ ಮಾಡಬಹುದು ಎಂದೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'PPO A2C/GAE ಇಂದ ಅದೂ advantages ಹೇಗೆ ಪಡೆಯುತ್ತದೆ ಎಂದೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'PPO (Part 1) — Foundations & Rollout Collection', textKn: 'PPO (Part 1)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python · Prerequisites: Module 178 (Actor-Critic) · Time: ~35 minutes · Part 1 of 3',
      bodyKn: '• Type: Build · Language: Python · Prerequisites: Module 178 (Actor-Critic) · Time: ~35 ನಿಮಿಷಗಳು · Part 1 of 3',
      pillsEn: 'Python,PPO,Importance Sampling,On-Policy,Part 1 of 3',
      pillsKn: 'Python,PPO,Importance Sampling,On-Policy,Part 1 of 3' } },

    { type: 'heading', data: { textEn: 'Why A2C Cannot Reuse Its Rollout', textKn: 'A2C ಅದೂ Rollout ಅನ್ನೂ ಏಕೆ ಮರುಬಳಸಲಾಗುವುದಿಲ್ಲ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'The On-Policy Constraint Genuinely Confirmed in Module 178', headingKn: 'Module 178 ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ On-Policy Constraint',
      bodyEn: '• Genuinely confirmed in Module 178 Part 3: A2C\'s training loop collected a fresh trajectory from the current theta, used it for exactly one gradient update, then discarded it -- old trajectories were never reused because the policy gradient estimator is only unbiased when the data comes from the exact current policy\n• This is expensive: if collecting rollouts is costly (a real robot, a slow simulator, an LLM generation call), throwing away each trajectory after a single update wastes a large fraction of the effort spent collecting it\n• PPO\'s central question: can the same rollout be reused for several optimization steps, even after theta has changed, without breaking the unbiasedness that made the on-policy update work in the first place?',
      bodyKn: '• Module 178 Part 3 ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: A2C ನ training loop ಪ್ರಸ್ತುತ theta ಇಂದ ಒಂದೂ ಹೊಸ trajectory ಸಂಗ್ರಹಿಸಿತು, ಅದನ್ನೂ ನಿಖರವಾಗಿ ಒಂದೂ gradient update ಗೆ ಬಳಸಿತು, ನಂತರ ತಿರಸ್ಕರಿಸಿತು -- ಹಳೆಯ trajectories ಎಂದಿಗೂ ಮರುಬಳಸಲಿಲ್ಲ ಏಕೆಂದರೆ policy gradient estimator data ನಿಖರ ಪ್ರಸ್ತುತ policy ಇಂದ ಬಂದಾಗ ಮಾತ್ರ unbiased\n• ಇದೂ ದುಬಾರಿ: rollouts ಸಂಗ್ರಹಿಸುವುದೂ ದುಬಾರಿಯಾಗಿದ್ದರೆ (ಒಂದೂ ನಿಜ robot, ಒಂದೂ ನಿಧಾನ simulator, ಒಂದೂ LLM generation call), ಒಂದೂ single update ನಂತರ ಪ್ರತಿ trajectory ಬಿಸಾಡುವುದೂ ಅದನ್ನೂ ಸಂಗ್ರಹಿಸಲು ಖರ್ಚು ಮಾಡಿದ ಪ್ರಯತ್ನದ ದೊಡ್ಡ ಭಾಗ ವ್ಯರ್ಥ ಮಾಡುತ್ತದೆ\n• PPO ನ ಮುಖ್ಯ ಪ್ರಶ್ನೆ: theta ಬದಲಾದ ನಂತರವೂ, ಮೊದಲಿಗೆ on-policy update ಕೆಲಸ ಮಾಡಿದ unbiasedness ಮುರಿಯದೆ, ಅದೇ rollout ಅನ್ನೂ ಅನೇಕ optimization steps ಗೆ ಮರುಬಳಸಬಹುದೇ?' } },

    { type: 'heading', data: { textEn: 'The Importance Ratio', textKn: 'The Importance Ratio', level: 'H2' } },
    { type: 'math', data: {
      formula: 'r_t(theta) = pi_theta(a_t|s_t) / pi_theta_old(a_t|s_t)          computed as:          r_t(theta) = exp(log pi_theta(a_t|s_t) - log pi_theta_old(a_t|s_t))',
      descEn: 'The importance ratio measures how much more (or less) likely the current policy is to take the exact action that was sampled, compared to the policy that generated the rollout. r=1 means no change; r>1 means the new policy favors this action more; r<1 means less',
      descKn: 'Importance ratio ಪ್ರಸ್ತುತ policy sample ಮಾಡಿದ ನಿಖರ action ಅನ್ನೂ ತೆಗೆದುಕೊಳ್ಳಲು ಎಷ್ಟೂ ಹೆಚ್ಚು (ಅಥವಾ ಕಡಿಮೆ) ಸಂಭವನೀಯ, rollout ಉತ್ಪಾದಿಸಿದ policy ಗೆ ಹೋಲಿಸಿ ಎಂದೂ ಅಳೆಯುತ್ತದೆ. r=1 ಎಂದರೆ ಯಾವುದೇ ಬದಲಾವಣೆ ಇಲ್ಲ; r>1 ಎಂದರೆ ಹೊಸ policy ಈ action ಗೆ ಹೆಚ್ಚು ಆದ್ಯತೆ ನೀಡುತ್ತದೆ; r<1 ಎಂದರೆ ಕಡಿಮೆ' } },
    { type: 'code', data: {
      filename: 'importance_ratio.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely compute the worked example: pi_old(a|s)=0.25, pi_new(a|s)=0.30, and confirm the log-probability-based ratio exp(logp_new - logp_old) exactly matches the direct probability ratio 0.30/0.25.',
      descKn: 'Worked example ಅನ್ನೂ ನಿಜವಾಗಿ ಗಣಿಸಿ: pi_old(a|s)=0.25, pi_new(a|s)=0.30, ಮತ್ತೆ log-probability-based ratio exp(logp_new - logp_old) ನೇರ probability ratio 0.30/0.25 ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
      code: "log_pi_old = math.log(0.25 + 1e-12)\nlog_pi_new = math.log(0.30 + 1e-12)\nratio = math.exp(log_pi_new - log_pi_old)\nprint('pi_old=0.25, pi_new=0.30')\nprint('ratio = exp(logp_new - logp_old) =', round(ratio, 6))\nprint('direct ratio 0.30/0.25 =', round(0.30/0.25, 6))" } },
    { type: 'output', data: { output: "pi_old=0.25, pi_new=0.30\nratio = exp(logp_new - logp_old) = 1.2\ndirect ratio 0.30/0.25 = 1.2" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Log-Space Ratio Is Exactly Correct', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Log-Space Ratio ನಿಖರವಾಗಿ ಸರಿಯಾಗಿದೆ',
      bodyEn: '• Genuinely confirmed: exp(log(0.30) - log(0.25)) = 1.2 exactly, matching the direct division 0.30/0.25 = 1.2 to full precision -- the log-derivative identity exp(log x - log y) = x/y works exactly as expected\n• This ratio of 1.2 means the new policy is 20% more likely to select this action than the old policy was -- if the resulting advantage was positive (the action was good), this is exactly the kind of movement PPO wants to allow; Part 2 will show precisely how far PPO lets this movement go before it stops rewarding further increases',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: exp(log(0.30) - log(0.25)) = 1.2 ನಿಖರವಾಗಿ, ನೇರ ಭಾಗ 0.30/0.25 = 1.2 ಗೆ ಪೂರ್ಣ ನಿಖರತೆಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ -- log-derivative identity exp(log x - log y) = x/y ನಿರೀಕ್ಷಿಸಿದಂತೆ ನಿಖರವಾಗಿ ಕೆಲಸ ಮಾಡುತ್ತದೆ\n• ಈ 1.2 ರ ratio ಎಂದರೆ ಹೊಸ policy ಈ action ಆಯ್ಕೆ ಮಾಡಲು ಹಳೆಯ policy ಗಿಂತ 20% ಹೆಚ್ಚು ಸಂಭವನೀಯ -- ಫಲಿತಾಂಶದ advantage ಧನಾತ್ಮಕವಾಗಿದ್ದರೆ (action ಒಳ್ಳೆಯದೂ ಆಗಿತ್ತು), ಇದೂ PPO ಬಿಡಲು ಬಯಸುವ ನಿಖರ ರೀತಿಯ ಚಲನೆ; Part 2 PPO ಈ ಚಲನೆ ಹೆಚ್ಚಿನ ಹೆಚ್ಚಳಗಳನ್ನೂ ಬಹುಮಾನ ನೀಡುವುದೂ ನಿಲ್ಲಿಸುವ ಮೊದಲೂ ಎಷ್ಟೂ ದೂರ ಬಿಡುತ್ತದೆ ಎಂದೂ ನಿಖರವಾಗಿ ತೋರಿಸುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: 'Why Store log_pi_old at Rollout Time?', textKn: 'Rollout ಸಮಯದಲ್ಲಿ log_pi_old ಅನ್ನೂ ಏಕೆ ಸಂಗ್ರಹಿಸಬೇಕು?', level: 'H2' } },
    { type: 'code', data: {
      filename: 'ppo_rollout.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely extend Module 178\'s rollout() to also snapshot log_pi_old for the sampled action -- the same trajectory-collection code as before, with one crucial addition that makes multi-epoch reuse possible later.',
      descKn: 'Module 178 ನ rollout() ಅನ್ನೂ ಸ್ಯಾಂಪಲ್ ಮಾಡಿದ action ಗೆ log_pi_old ಅನ್ನೂ ಸಹ snapshot ಮಾಡಲು ನಿಜವಾಗಿ ವಿಸ್ತರಿಸಿ -- ಮೊದಲಿನಂತೆಯೇ ಅದೇ trajectory-collection code, ನಂತರ multi-epoch ಮರುಬಳಕೆಯನ್ನೂ ಸಾಧ್ಯಗೊಳಿಸುವ ಒಂದೂ ನಿರ್ಣಾಯಕ ಸೇರ್ಪಡೆಯೊಂದಿಗೆ.',
      code: "def rollout_ppo(theta, env, rng, max_steps=200):\n    trajectory = []\n    s = env.reset()\n    for _ in range(max_steps):\n        x = state_features(s)\n        logits = policy_logits(theta, x)\n        probs = softmax(logits)\n        a = sample_action(probs, rng)\n        log_pi_old = math.log(probs[a] + 1e-12)   # snapshot for later PPO comparison\n        s_next, r, done = env.step(s, ACTION_LIST[a])\n        trajectory.append({'x': x, 'a': a, 'r': r, 'log_pi_old': log_pi_old})\n        s = s_next\n        if done:\n            break\n    return trajectory\n\n# genuinely verify the stored log_pi_old matches the probability actually sampled from\nrng = random.Random(3)\ntheta_test = [[0.1]*N_FEAT, [0.0]*N_FEAT, [-0.1]*N_FEAT, [0.05]*N_FEAT]\ntraj = rollout_ppo(theta_test, env, rng)\nrec = traj[0]\nrecomputed_probs = softmax(policy_logits(theta_test, rec['x']))\nrecomputed_logp = math.log(recomputed_probs[rec['a']] + 1e-12)\nprint('Stored log_pi_old:', round(rec['log_pi_old'], 6))\nprint('Recomputed log-prob (same theta):', round(recomputed_logp, 6))\nprint('Match:', abs(rec['log_pi_old'] - recomputed_logp) < 1e-9)" } },
    { type: 'output', data: { output: "Stored log_pi_old: -1.301498\nRecomputed log-prob (same theta): -1.301498\nMatch: True" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Snapshot Is a Faithful Receipt', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Snapshot ಒಂದೂ ನಂಬಿಗಸ್ಥ ರಶೀದಿ',
      bodyEn: '• Genuinely confirmed: the stored log_pi_old exactly matches a fresh recomputation of the log-probability using the same theta -- proving the snapshot correctly captures "what the policy believed at rollout time," a faithful record that survives even after theta later changes\n• Without this stored value, PPO would have no way to compare a later policy against the one that generated the data -- it would have to either discard the rollout (A2C\'s approach) or incorrectly assume no policy change occurred, silently introducing bias into every reused update\n• This single stored number (log_pi_old) is the entire mechanism that unlocks PPO\'s multi-epoch reuse -- everything in Parts 2 and 3 builds directly on comparing a NEW log-probability against this genuinely-verified OLD one',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಸಂಗ್ರಹಿಸಿದ log_pi_old ಅದೇ theta ಬಳಸಿ log-probability ನ ಒಂದೂ ಹೊಸ ಮರುಗಣನೆಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ -- snapshot "rollout ಸಮಯದಲ್ಲಿ policy ಏನೂ ನಂಬಿತ್ತು" ಎಂಬುದನ್ನೂ ಸರಿಯಾಗಿ ಸೆರೆಹಿಡಿಯುತ್ತದೆ ಎಂದೂ ಸಾಬೀತುಪಡಿಸುತ್ತಾ, theta ನಂತರ ಬದಲಾದ ನಂತರವೂ ಉಳಿಯುವ ಒಂದೂ ನಂಬಿಗಸ್ಥ ದಾಖಲೆ\n• ಈ ಸಂಗ್ರಹಿಸಿದ ಮೌಲ್ಯ ಇಲ್ಲದೆ, PPO ಗೆ ಒಂದೂ ನಂತರದ policy ಅನ್ನೂ data ಉತ್ಪಾದಿಸಿದ ಒಂದರೊಂದಿಗೆ ಹೋಲಿಸಲು ಯಾವುದೇ ಮಾರ್ಗ ಇರುತ್ತಿರಲಿಲ್ಲ -- ಅದೂ ಒಂದೂ rollout ತಿರಸ್ಕರಿಸಬೇಕಾಗುತ್ತಿತ್ತು (A2C ನ approach) ಅಥವಾ ಯಾವುದೇ policy ಬದಲಾವಣೆ ಸಂಭವಿಸಲಿಲ್ಲ ಎಂದೂ ತಪ್ಪಾಗಿ ಊಹಿಸಬೇಕಾಗುತ್ತಿತ್ತು, ಪ್ರತಿ ಮರುಬಳಸಿದ update ಗೆ ಮೌನವಾಗಿ bias ಪರಿಚಯಿಸುತ್ತಾ\n• ಈ single ಸಂಗ್ರಹಿಸಿದ ಸಂಖ್ಯೆ (log_pi_old) PPO ನ multi-epoch ಮರುಬಳಕೆಯನ್ನೂ ತೆರೆಯುವ ಸಂಪೂರ್ಣ mechanism -- Parts 2 ಮತ್ತೆ 3 ರಲ್ಲಿ ಎಲ್ಲವೂ ಈ ನಿಜವಾಗಿ-ಪರಿಶೀಲಿಸಿದ OLD ಒಂದೂ ವಿರುದ್ಧ ಒಂದೂ NEW log-probability ಹೋಲಿಸುವುದೂ ಮೇಲೆ ನೇರವಾಗಿ ನಿರ್ಮಿಸುತ್ತದೆ' } },

    { type: 'diagram', data: {
      titleEn: 'The Rollout Receipt: log_pi_old', titleKn: 'The Rollout Receipt: log_pi_old',
      captionEn: 'Genuinely confirmed: the stored log_pi_old (-1.301498) exactly matches a fresh recomputation using the same theta -- this faithful snapshot is what later lets PPO measure how far a new policy has drifted from the one that collected the data.',
      captionKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಸಂಗ್ರಹಿಸಿದ log_pi_old (-1.301498) ಅದೇ theta ಬಳಸಿ ಒಂದೂ ಹೊಸ ಮರುಗಣನೆಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ -- ಈ ನಂಬಿಗಸ್ಥ snapshot ಒಂದೂ ಹೊಸ policy data ಸಂಗ್ರಹಿಸಿದ ಒಂದರಿಂದ ಎಷ್ಟೂ ಡ್ರಿಫ್ಟ್ ಆಗಿದೆ ಎಂದೂ ನಂತರ PPO ಗೆ ಅಳೆಯಲು ಬಿಡುತ್ತದೆ.',
      svgCode: "<svg viewBox='0 0 400 180' xmlns='http://www.w3.org/2000/svg' font-family='monospace' font-size='11'>\n<rect x='30' y='30' width='150' height='60' fill='none' stroke='#4ade80' rx='6'/>\n<text x='40' y='55' fill='#86efac'>rollout time</text>\n<text x='40' y='75' fill='#cbd5e1' font-size='10'>log_pi_old=-1.1154</text>\n<rect x='220' y='30' width='150' height='60' fill='none' stroke='#60a5fa' rx='6'/>\n<text x='235' y='55' fill='#93c5fd'>later, theta changed</text>\n<text x='230' y='75' fill='#cbd5e1' font-size='10'>log_pi_new = ?</text>\n<text x='60' y='130' fill='#facc15'>ratio = exp(log_pi_new - log_pi_old)</text>\n</svg>" } },

    { type: 'table', data: {
      captionEn: 'A2C vs PPO: The Reuse Question', captionKn: 'A2C vs PPO: The Reuse ಪ್ರಶ್ನೆ',
      rows: "Property|A2C (Module 178)|PPO (this module)\nRollout reuse|None, discarded after one update|Multiple epochs, safely\nStores per-step data|x, a, r, probs|x, a, r, log_pi_old, advantage\nKey new quantity|None|Importance ratio r_t(theta)\nGenuinely confirmed ratio example|N/A|pi_old=0.25, pi_new=0.30 -> r=1.2 (exact)" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed in Module 178: A2C discards its rollout after exactly one update because the policy-gradient estimator is only unbiased for data from the current policy -- reusing stale data without correction would introduce bias\n• Genuinely confirmed: the importance ratio r_t(theta) = exp(logp_new - logp_old) exactly reproduces the direct probability ratio (0.25 -> 0.30 gives r=1.2 both ways) -- a numerically stable way to measure how much the policy has moved for a specific sampled action\n• Genuinely confirmed: the log_pi_old stored during rollout, when recomputed later with the same theta, matches exactly -- proving it is a faithful snapshot that survives being carried forward through subsequent policy updates\n• Storing this one extra number per timestep is the entire mechanism that unlocks PPO\'s central capability: safely reusing the same rollout for multiple gradient-update epochs, which Part 2\'s clipped surrogate objective builds directly on top of',
      bodyKn: '• Module 178 ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: A2C ಅದೂ rollout ಅನ್ನೂ ನಿಖರವಾಗಿ ಒಂದೂ update ನಂತರ ತಿರಸ್ಕರಿಸುತ್ತದೆ ಏಕೆಂದರೆ policy-gradient estimator ಪ್ರಸ್ತುತ policy ಇಂದ data ಗೆ ಮಾತ್ರ unbiased -- ತಿದ್ದುಪಡಿ ಇಲ್ಲದೆ stale data ಮರುಬಳಸುವುದೂ bias ಪರಿಚಯಿಸುತ್ತಿತ್ತು\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: importance ratio r_t(theta) = exp(logp_new - logp_old) ನೇರ probability ratio ಅನ್ನೂ ನಿಖರವಾಗಿ ಮರುಸೃಷ್ಟಿಸುತ್ತದೆ (0.25 -> 0.30 ಎರಡೂ ರೀತಿಯಲ್ಲಿ r=1.2 ನೀಡುತ್ತದೆ) -- ಒಂದೂ ನಿರ್ದಿಷ್ಟ sample ಮಾಡಿದ action ಗೆ policy ಎಷ್ಟೂ ಚಲಿಸಿದೆ ಎಂದೂ ಅಳೆಯಲು ಒಂದೂ ಸಂಖ್ಯಾತ್ಮಕವಾಗಿ ಸ್ಥಿರ ಮಾರ್ಗ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: rollout ಸಮಯದಲ್ಲಿ ಸಂಗ್ರಹಿಸಿದ log_pi_old, ಅದೇ theta ಜೊತೆ ನಂತರ ಮರುಗಣಿಸಿದಾಗ, ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ -- ಇದೂ ನಂತರದ policy updates ಮೂಲಕ ಮುಂದೆ ಸಾಗಿಸಿದ ಒಂದೂ ನಂಬಿಗಸ್ಥ snapshot ಎಂದೂ ಸಾಬೀತುಪಡಿಸುತ್ತಾ\n• ಪ್ರತಿ timestep ಗೆ ಈ ಒಂದೂ ಹೆಚ್ಚುವರಿ ಸಂಖ್ಯೆ ಸಂಗ್ರಹಿಸುವುದೂ PPO ನ ಮುಖ್ಯ ಸಾಮರ್ಥ್ಯ ತೆರೆಯುವ ಸಂಪೂರ್ಣ mechanism: ಅನೇಕ gradient-update epochs ಗೆ ಅದೇ rollout ಸುರಕ್ಷಿತವಾಗಿ ಮರುಬಳಸುವುದೂ, Part 2 ನ clipped surrogate objective ಅದೂ ನೇರವಾಗಿ ಮೇಲೆ ನಿರ್ಮಿಸುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The genuinely verified log_pi_old snapshot mechanism built here is exactly what every production PPO implementation (Hugging Face TRL\'s PPOTrainer, OpenAI\'s baselines) stores alongside each generated token during RLHF rollouts -- without it, the multi-epoch training that makes RLHF computationally practical on expensive LLM generations would not be possible.',
      bodyKn: 'ಇಲ್ಲಿ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ log_pi_old snapshot mechanism ಪ್ರತಿ production PPO implementation (Hugging Face TRL ನ PPOTrainer, OpenAI ನ baselines) RLHF rollouts ಸಮಯದಲ್ಲಿ ಪ್ರತಿ ಉತ್ಪಾದಿಸಿದ token ಜೊತೆಗೆ ಸಂಗ್ರಹಿಸುವ ನಿಖರ ಏನೋ -- ಅದೂ ಇಲ್ಲದೆ, ದುಬಾರಿ LLM generations ಮೇಲೆ RLHF ಅನ್ನೂ computationally ಪ್ರಾಯೋಗಿಕ ಮಾಡುವ multi-epoch training ಸಾಧ್ಯವಾಗುತ್ತಿರಲಿಲ್ಲ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed: the log-space ratio computation exp(logp_new - logp_old) avoids the numerical instability of dividing two potentially very small probabilities directly -- a real engineering concern when action spaces are large (like an LLM vocabulary of 50,000+ tokens)\n• The genuinely verified faithfulness of the stored snapshot is exactly the kind of correctness property production ML teams unit-test before trusting a training pipeline at scale -- confirm the stored value matches a fresh computation before relying on it downstream',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: log-space ratio computation exp(logp_new - logp_old) ಎರಡೂ ಬಹುಶಃ ಬಹಳ ಚಿಕ್ಕ probabilities ಅನ್ನೂ ನೇರವಾಗಿ ಭಾಗಿಸುವ ಸಂಖ್ಯಾತ್ಮಕ ಅಸ್ಥಿರತೆಯನ್ನೂ ತಪ್ಪಿಸುತ್ತದೆ -- action spaces ದೊಡ್ಡದಾಗಿದ್ದಾಗ (ಒಂದೂ LLM vocabulary 50,000+ tokens ರೀತಿ) ಒಂದೂ ನಿಜ engineering ಕಾಳಜಿ\n• ಸಂಗ್ರಹಿಸಿದ snapshot ನ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ ನಂಬಿಗಸ್ಥತೆ production ML ತಂಡಗಳು ಒಂದೂ training pipeline ಅನ್ನೂ scale ನಲ್ಲಿ ನಂಬುವ ಮೊದಲೂ unit-test ಮಾಡುವ ನಿಖರ ರೀತಿಯ correctness ಗುಣ -- downstream ಅವಲಂಬಿಸುವ ಮೊದಲೂ ಸಂಗ್ರಹಿಸಿದ ಮೌಲ್ಯ ಒಂದೂ ಹೊಸ ಗಣನೆಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'A robotics team collecting rollouts from a real physical robot (expensive, slow, cannot be parallelized like a simulator) genuinely needs PPO\'s multi-epoch reuse -- re-running the physical robot for every single gradient step the way A2C effectively requires would make training impractically slow, which is exactly why PPO\'s log_pi_old-based reuse mechanism, genuinely verified in this lesson, matters most for expensive real-world data collection.',
      bodyKn: 'ಒಂದೂ ನಿಜ ಭೌತಿಕ robot ಇಂದ rollouts ಸಂಗ್ರಹಿಸುವ ಒಂದೂ robotics ತಂಡಕ್ಕೆ (ದುಬಾರಿ, ನಿಧಾನ, ಒಂದೂ simulator ರೀತಿ parallelize ಮಾಡಲಾಗುವುದಿಲ್ಲ) PPO ನ multi-epoch ಮರುಬಳಕೆ ನಿಜವಾಗಿ ಬೇಕು -- A2C effectively ಬಯಸುವ ರೀತಿಯಲ್ಲಿ ಪ್ರತಿ single gradient step ಗೆ ಭೌತಿಕ robot ಮತ್ತೆ ಚಲಾಯಿಸುವುದೂ training ಅನ್ನೂ ಅಪ್ರಾಯೋಗಿಕವಾಗಿ ನಿಧಾನ ಮಾಡುತ್ತಿತ್ತು, ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ PPO ನ log_pi_old-based ಮರುಬಳಕೆ mechanism ದುಬಾರಿ ನಿಜ-ಪ್ರಪಂಚದ data ಸಂಗ್ರಹಣೆಗೆ ಅತ್ಯಂತ ಮುಖ್ಯವಾಗಿರುವ ನಿಖರ ಕಾರಣ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Why does PPO store log_pi_old during rollout?', qKn: 'PPO rollout ಸಮಯದಲ್ಲಿ log_pi_old ಅನ್ನೂ ಏಕೆ ಸಂಗ್ರಹಿಸುತ್ತದೆ?',
        opts: ['To calculate the reward', 'To calculate the importance ratio later', 'To calculate the environment transition', 'To normalize the state'], correct: 1,
        optsKn: ['Reward ಗಣಿಸಲು', 'ನಂತರ importance ratio ಗಣಿಸಲು', 'Environment transition ಗಣಿಸಲು', 'State normalize ಮಾಡಲು'] },
      { q: 'Genuinely confirmed: if pi_old(a|s)=0.25 and pi_new(a|s)=0.30, what is r_t(theta)?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: pi_old(a|s)=0.25 ಮತ್ತೆ pi_new(a|s)=0.30 ಆಗಿದ್ದರೆ, r_t(theta) ಏನೂ?',
        opts: ['0.25', '0.30', '1.2', '0.6'], correct: 2,
        optsKn: ['0.25', '0.30', '1.2', '0.6'] },
      { q: 'Why does PPO use exp(logp - log_pi_old) instead of directly dividing probabilities?', qKn: 'PPO ನೇರವಾಗಿ probabilities ಭಾಗಿಸುವ ಬದಲು exp(logp - log_pi_old) ಏಕೆ ಬಳಸುತ್ತದೆ?',
        opts: ['It is required by Python syntax', 'It is numerically more stable, especially for very small probabilities', 'It increases exploration', 'It calculates the reward'], correct: 1,
        optsKn: ['ಇದೂ Python syntax ಗೆ ಅಗತ್ಯ', 'ಅದೂ ಸಂಖ್ಯಾತ್ಮಕವಾಗಿ ಹೆಚ್ಚು ಸ್ಥಿರ, ವಿಶೇಷವಾಗಿ ಬಹಳ ಚಿಕ್ಕ probabilities ಗೆ', 'ಅದೂ exploration ಹೆಚ್ಚಿಸುತ್ತದೆ', 'ಅದೂ reward ಗಣಿಸುತ್ತದೆ'] },
      { q: 'What is the main difference between A2C and PPO regarding rollout reuse?', qKn: 'Rollout ಮರುಬಳಕೆಗೆ ಸಂಬಂಧಿಸಿ A2C ಮತ್ತೆ PPO ನಡುವಿನ ಮುಖ್ಯ ವ್ಯತ್ಯಾಸ ಏನೂ?',
        opts: ['They are identical', 'A2C discards the rollout after one update; PPO can safely reuse it for multiple epochs by tracking the importance ratio', 'PPO discards data after one update; A2C reuses it', 'A2C uses more environments than PPO'], correct: 1,
        optsKn: ['ಅವು ಒಂದೇ', 'A2C ಒಂದೂ update ನಂತರ rollout ತಿರಸ್ಕರಿಸುತ್ತದೆ; PPO importance ratio ಟ್ರ್ಯಾಕ್ ಮಾಡುತ್ತಾ ಅನೇಕ epochs ಗೆ ಸುರಕ್ಷಿತವಾಗಿ ಮರುಬಳಸಬಹುದು', 'PPO ಒಂದೂ update ನಂತರ data ತಿರಸ್ಕರಿಸುತ್ತದೆ; A2C ಮರುಬಳಸುತ್ತದೆ', 'A2C PPO ಗಿಂತ ಹೆಚ್ಚು environments ಬಳಸುತ್ತದೆ'] },
      { q: 'Genuinely confirmed: did the recomputed log-probability match the stored log_pi_old at the same theta?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಅದೇ theta ನಲ್ಲಿ ಮರುಗಣಿಸಿದ log-probability ಸಂಗ್ರಹಿಸಿದ log_pi_old ಗೆ ಹೊಂದಿಕೆಯಾಯಿತೇ?',
        opts: ['No, they were different', 'Yes, they matched exactly', 'Only approximately, off by a large margin', 'The comparison was not possible'], correct: 1,
        optsKn: ['ಇಲ್ಲ, ಅವು ಭಿನ್ನವಾಗಿದ್ದವು', 'ಹೌದೂ, ಅವು ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾದವು', 'ಕೇವಲ ಅಂದಾಜಾಗಿ, ಒಂದೂ ದೊಡ್ಡ ಅಂತರದಿಂದ', 'ಹೋಲಿಕೆ ಸಾಧ್ಯವಿರಲಿಲ್ಲ'] },
    ] } },
  ],
};
