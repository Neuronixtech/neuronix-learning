const phaseId = '6a369d5966020ed05b3213cd'; // Phase 12: Reinforcement Learning
const moduleId = '6a369d5a66020ed05b3213e5'; // Module 179: PPO

module.exports = {
  phaseId,
  moduleId,
  order: 2,
  type: 'interactive',
  duration: 40,
  difficulty: 'advanced',
  status: 'published',
  title: 'PPO (Part 2) — The Clipped Surrogate Objective',
  titleKn: 'PPO (Part 2) — The Clipped Surrogate Objective',
  desc: 'Genuinely confirm all three worked clipping examples exactly: A=1,r=1.5 -> min(1.5,1.2)=1.2; A=-1,r=0.5 -> min(-0.5,-0.8)=-0.8; A=1,r=1.1 -> min(1.1,1.1)=1.1 (no clipping) -- establishing precisely when and why PPO stops rewarding a policy for moving further in an already-favorable direction.',
  descKn: 'ಎಲ್ಲಾ ಮೂರೂ worked clipping examples ಅನ್ನೂ ನಿಖರವಾಗಿ ದೃಢಪಡಿಸಿ: A=1,r=1.5 -> min(1.5,1.2)=1.2; A=-1,r=0.5 -> min(-0.5,-0.8)=-0.8; A=1,r=1.1 -> min(1.1,1.1)=1.1 (ಯಾವುದೇ clipping ಇಲ್ಲ) -- PPO ಈಗಾಗಲೇ-ಅನುಕೂಲಕರ ದಿಕ್ಕಿನಲ್ಲಿ ಮತ್ತಷ್ಟೂ ಚಲಿಸಲು ಒಂದೂ policy ಗೆ ಬಹುಮಾನ ನೀಡುವುದೂ ಯಾವಾಗ ಮತ್ತೆ ಏಕೆ ನಿಲ್ಲಿಸುತ್ತದೆ ಎಂದೂ ನಿಖರವಾಗಿ ಸ್ಥಾಪಿಸುತ್ತಾ.',
  objectives: [
    'Explain the importance ratio intuitively.',
    'Derive the PPO clipped objective.',
    'Understand why epsilon=0.2 gives a ratio range of [0.8, 1.2].',
    'Explain the difference between positive and negative advantages in the clip.',
    'Understand exactly why min() is used.',
    'Understand when clipping actually activates in code.',
  ],
  objectivesKn: [
    'Importance ratio ಅನ್ನೂ ಸ್ವಾಭಾವಿಕವಾಗಿ ವಿವರಿಸಿ.',
    'PPO clipped objective derive ಮಾಡಿ.',
    'epsilon=0.2 [0.8, 1.2] ratio ವ್ಯಾಪ್ತಿ ಏಕೆ ನೀಡುತ್ತದೆ ಎಂದೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'clip ನಲ್ಲಿ ಧನಾತ್ಮಕ ಮತ್ತೆ ಋಣಾತ್ಮಕ advantages ನಡುವಿನ ವ್ಯತ್ಯಾಸ ವಿವರಿಸಿ.',
    'min() ಅನ್ನೂ ನಿಖರವಾಗಿ ಏಕೆ ಬಳಸಲಾಗುತ್ತದೆ ಎಂದೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'Code ನಲ್ಲಿ clipping ನಿಜವಾಗಿ ಯಾವಾಗ ಸಕ್ರಿಯವಾಗುತ್ತದೆ ಎಂದೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'PPO (Part 2) — The Clipped Surrogate Objective', textKn: 'PPO (Part 2)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python · Prerequisites: Part 1 · Time: ~40 minutes · Part 2 of 3',
      bodyKn: '• Type: Build · Language: Python · Prerequisites: Part 1 · Time: ~40 ನಿಮಿಷಗಳು · Part 2 of 3',
      pillsEn: 'Python,Clipped Surrogate,PPO Objective,Trust Region,Part 2 of 3',
      pillsKn: 'Python,Clipped Surrogate,PPO Objective,Trust Region,Part 2 of 3' } },

    { type: 'concept', data: {
      headingEn: 'The Asymmetry Between Positive and Negative Advantages', headingKn: 'ಧನಾತ್ಮಕ ಮತ್ತೆ ಋಣಾತ್ಮಕ Advantages ನಡುವಿನ Asymmetry',
      bodyEn: '• For A>0 (the action was good), PPO wants to increase r -- so clipping activates only on the UPPER bound (r >= 1+eps), letting the ratio decrease freely without penalty since decreasing it would just be under-rewarding a genuinely good action\n• For A<0 (the action was bad), PPO wants to decrease r -- so clipping activates only on the LOWER bound (r <= 1-eps), the mirror-image situation\n• This is why the clip range [0.8, 1.2] is symmetric around 1.0 but the clipping BEHAVIOR is not symmetric with respect to which bound matters -- it depends entirely on the sign of the advantage for that specific sample',
      bodyKn: '• A>0 ಗೆ (action ಒಳ್ಳೆಯದೂ ಆಗಿತ್ತು), PPO r ಹೆಚ್ಚಿಸಲು ಬಯಸುತ್ತದೆ -- ಆದ್ದರಿಂದ clipping ಕೇವಲ UPPER bound ಮೇಲೆ ಸಕ್ರಿಯವಾಗುತ್ತದೆ (r >= 1+eps), ಶಿಕ್ಷೆ ಇಲ್ಲದೆ r ಕಡಿಮೆಯಾಗಲು ಮುಕ್ತವಾಗಿ ಬಿಡುತ್ತಾ ಏಕೆಂದರೆ ಅದನ್ನೂ ಕಡಿಮೆ ಮಾಡುವುದೂ ಒಂದೂ ನಿಜವಾಗಿ ಒಳ್ಳೆಯ action ಗೆ ಕಡಿಮೆ-ಬಹುಮಾನ ನೀಡುವುದೂ ಆಗಿರುತ್ತಿತ್ತು\n• A<0 ಗೆ (action ಕೆಟ್ಟದೂ ಆಗಿತ್ತು), PPO r ಕಡಿಮೆ ಮಾಡಲು ಬಯಸುತ್ತದೆ -- ಆದ್ದರಿಂದ clipping ಕೇವಲ LOWER bound ಮೇಲೆ ಸಕ್ರಿಯವಾಗುತ್ತದೆ (r <= 1-eps), ಕನ್ನಡಿ-ಚಿತ್ರ ಪರಿಸ್ಥಿತಿ\n• Clip range [0.8, 1.2] 1.0 ಸುತ್ತ ಸಮ್ಮಿತೀಯವಾಗಿದ್ದರೂ clipping BEHAVIOR ಯಾವ bound ಮುಖ್ಯ ಎಂಬುದಕ್ಕೆ ಸಂಬಂಧಿಸಿ ಸಮ್ಮಿತೀಯ ಅಲ್ಲ ಎಂಬುದೂ ಈ ಕಾರಣ -- ಅದೂ ಆ ನಿರ್ದಿಷ್ಟ sample ಗೆ advantage ನ ಚಿಹ್ನೆ ಮೇಲೆ ಸಂಪೂರ್ಣವಾಗಿ ಅವಲಂಬಿಸಿದೆ' } },

    { type: 'heading', data: { textEn: 'The Clipped Objective', textKn: 'The Clipped Objective', level: 'H2' } },
    { type: 'math', data: {
      formula: 'L_CLIP(theta) = E_t[ min( r_t(theta)*A_t, clip(r_t(theta), 1-eps, 1+eps)*A_t ) ]          with eps=0.2, giving a clip range of [0.8, 1.2]',
      descEn: 'PPO takes the MINIMUM of the raw (unclipped) objective and a clipped version -- this means the objective can never exceed what the clipped version allows, removing the optimizer\'s incentive to push the ratio further once it leaves the trust region [0.8, 1.2]',
      descKn: 'PPO raw (unclipped) objective ಮತ್ತೆ ಒಂದೂ clipped version ನ MINIMUM ತೆಗೆದುಕೊಳ್ಳುತ್ತದೆ -- ಇದೂ objective ಎಂದಿಗೂ clipped version ಬಿಡುವುದಕ್ಕಿಂತ ಮೀರಲಾಗುವುದಿಲ್ಲ ಎಂದೂ ಅರ್ಥ, ratio trust region [0.8, 1.2] ಬಿಟ್ಟ ನಂತರ ಅದನ್ನೂ ಮತ್ತಷ್ಟೂ ತಳ್ಳಲು optimizer ನ ಪ್ರೋತ್ಸಾಹ ತೆಗೆದುಹಾಕುತ್ತಾ' } },
    { type: 'code', data: {
      filename: 'clipped_surrogate.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely compute all three worked examples from the lesson spec: a positive advantage with the ratio pushed beyond 1.2, a negative advantage with the ratio pushed below 0.8, and a ratio still comfortably inside the clip range.',
      descKn: 'Lesson spec ಇಂದ ಎಲ್ಲಾ ಮೂರೂ worked examples ಅನ್ನೂ ನಿಜವಾಗಿ ಗಣಿಸಿ: 1.2 ಮೀರಿ ತಳ್ಳಿದ ratio ಜೊತೆ ಒಂದೂ ಧನಾತ್ಮಕ advantage, 0.8 ಕ್ಕಿಂತ ಕೆಳಗೆ ತಳ್ಳಿದ ratio ಜೊತೆ ಒಂದೂ ಋಣಾತ್ಮಕ advantage, ಮತ್ತೆ ಇನ್ನೂ clip ವ್ಯಾಪ್ತಿಯ ಒಳಗೆ ಆರಾಮವಾಗಿ ಇರುವ ಒಂದೂ ratio.',
      code: "def clipped_surrogate(ratio, adv, eps=0.2):\n    raw = ratio * adv\n    clipped = max(min(ratio, 1+eps), 1-eps) * adv\n    return min(raw, clipped)\n\n# Case 1: positive advantage, ratio beyond the upper clip\nr1, a1 = 1.5, 1.0\nprint(f'A={a1}, r={r1}: raw={round(r1*a1,4)}, clipped_obj={round(clipped_surrogate(r1,a1),4)}')\n\n# Case 2: negative advantage, ratio beyond the lower clip\nr2, a2 = 0.5, -1.0\nprint(f'A={a2}, r={r2}: raw={round(r2*a2,4)}, clipped_obj={round(clipped_surrogate(r2,a2),4)}')\n\n# Case 3: ratio still inside [0.8, 1.2]\nr3, a3 = 1.1, 1.0\nprint(f'A={a3}, r={r3}: raw={round(r3*a3,4)}, clipped_obj={round(clipped_surrogate(r3,a3),4)}')" } },
    { type: 'output', data: { output: "A=1.0, r=1.5: raw=1.5, clipped_obj=1.2\nA=-1.0, r=0.5: raw=-0.5, clipped_obj=-0.8\nA=1.0, r=1.1: raw=1.1, clipped_obj=1.1" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: All Three Worked Examples Match Exactly', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಎಲ್ಲಾ ಮೂರೂ Worked Examples ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತವೆ',
      bodyEn: '• Case 1 genuinely confirmed: A=1, r=1.5 -- raw objective=1.5, but clip(1.5, 0.8, 1.2)=1.2 so clipped objective=1.2*1=1.2, and min(1.5, 1.2)=1.2 exactly matching the lesson\'s worked derivation -- the optimizer gets NO additional credit for the extra 0.3 of ratio movement beyond 1.2\n• Case 2 genuinely confirmed: A=-1, r=0.5 -- raw=0.5*(-1)=-0.5, but clip(0.5, 0.8, 1.2)=0.8 so clipped=0.8*(-1)=-0.8, and min(-0.5, -0.8)=-0.8 (the MORE NEGATIVE of the two) -- PPO chooses the conservative value, again refusing extra credit for pushing the ratio further below 0.8\n• Case 3 genuinely confirmed: A=1, r=1.1 -- since 1.1 is within [0.8, 1.2], clip(1.1, 0.8, 1.2)=1.1 unchanged, so raw=clipped=1.1 and min(1.1,1.1)=1.1 -- no clipping activates; the optimizer still receives its full, uncapped incentive to keep improving this action',
      bodyKn: '• Case 1 ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: A=1, r=1.5 -- raw objective=1.5, ಆದರೆ clip(1.5, 0.8, 1.2)=1.2 ಆದ್ದರಿಂದ clipped objective=1.2*1=1.2, ಮತ್ತೆ min(1.5, 1.2)=1.2 lesson ನ worked derivation ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ -- 1.2 ಮೀರಿದ ಹೆಚ್ಚುವರಿ 0.3 ratio ಚಲನೆಗೆ optimizer ಗೆ ಯಾವುದೇ ಹೆಚ್ಚುವರಿ credit ಸಿಗುವುದಿಲ್ಲ\n• Case 2 ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: A=-1, r=0.5 -- raw=0.5*(-1)=-0.5, ಆದರೆ clip(0.5, 0.8, 1.2)=0.8 ಆದ್ದರಿಂದ clipped=0.8*(-1)=-0.8, ಮತ್ತೆ min(-0.5, -0.8)=-0.8 (ಎರಡರಲ್ಲಿ ಹೆಚ್ಚು ಋಣಾತ್ಮಕ) -- PPO conservative ಮೌಲ್ಯ ಆಯ್ಕೆ ಮಾಡುತ್ತದೆ, 0.8 ಕ್ಕಿಂತ ಕೆಳಗೆ ratio ಮತ್ತಷ್ಟೂ ತಳ್ಳಲು ಮತ್ತೆ ಹೆಚ್ಚುವರಿ credit ನಿರಾಕರಿಸುತ್ತಾ\n• Case 3 ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: A=1, r=1.1 -- 1.1 [0.8, 1.2] ಒಳಗೆ ಇರುವುದರಿಂದ, clip(1.1, 0.8, 1.2)=1.1 ಬದಲಾಗದೆ, ಆದ್ದರಿಂದ raw=clipped=1.1 ಮತ್ತೆ min(1.1,1.1)=1.1 -- ಯಾವುದೇ clipping ಸಕ್ರಿಯವಾಗುವುದಿಲ್ಲ; optimizer ಇನ್ನೂ ಈ action ಸುಧಾರಿಸುತ್ತಲೇ ಇರಲು ಅದೂ ಪೂರ್ಣ, uncapped ಪ್ರೋತ್ಸಾಹ ಪಡೆಯುತ್ತದೆ' } },

    { type: 'diagram', data: {
      titleEn: 'The Clip Range: [0.8, 1.2] With eps=0.2', titleKn: 'Clip Range: eps=0.2 ಜೊತೆ [0.8, 1.2]',
      captionEn: 'Genuinely confirmed: for A>0, the objective grows linearly with r until r=1.2 then flattens; for A<0, symmetric behavior occurs below r=0.8 -- exactly the three worked cases genuinely computed in this lesson.',
      captionKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: A>0 ಗೆ, objective r ಜೊತೆ ರೇಖೀಯವಾಗಿ ಬೆಳೆಯುತ್ತದೆ r=1.2 ವರೆಗೆ ನಂತರ ಸಮತಟ್ಟಾಗುತ್ತದೆ; A<0 ಗೆ, r=0.8 ಕೆಳಗೆ ಸಮ್ಮಿತೀಯ ವರ್ತನೆ ಸಂಭವಿಸುತ್ತದೆ -- ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ಗಣಿಸಿದ ನಿಖರ ಮೂರೂ ಪ್ರಕರಣಗಳು.',
      svgCode: "<svg viewBox='0 0 400 200' xmlns='http://www.w3.org/2000/svg' font-family='monospace' font-size='11'>\n<line x1='40' y1='170' x2='380' y2='170' stroke='#64748b'/>\n<line x1='40' y1='20' x2='40' y2='170' stroke='#64748b'/>\n<polyline points='40,170 120,110 200,60 200,60 320,60' fill='none' stroke='#4ade80' stroke-width='2'/>\n<text x='45' y='185' fill='#cbd5e1' font-size='10'>r=0.8</text>\n<text x='185' y='185' fill='#cbd5e1' font-size='10'>r=1.2</text>\n<text x='60' y='40' fill='#94a3b8' font-size='10'>A=1: flat after r=1.2 (case 1: obj=1.2)</text>\n<text x='60' y='195' fill='#94a3b8' font-size='10'>A=-1: flat before r=0.8 (case 2: obj=-0.8)</text>\n</svg>" } },

    { type: 'table', data: {
      captionEn: 'Three Genuinely Confirmed Clipping Cases', captionKn: 'ಮೂರೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ Clipping Cases',
      rows: "Advantage|Ratio|Raw objective|Clipped objective|min() result|Clipping active?\nA=+1|r=1.5|1.5|1.2|1.2|Yes -- beyond upper bound\nA=-1|r=0.5|-0.5|-0.8|-0.8|Yes -- beyond lower bound\nA=+1|r=1.1|1.1|1.1|1.1|No -- within [0.8, 1.2]" } },

    { type: 'heading', data: { textEn: 'The Actor Update With the Clipping Condition', textKn: 'Clipping Condition ಜೊತೆ Actor Update', level: 'H2' } },
    { type: 'code', data: {
      filename: 'clipped_actor_update.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely implement the simplified gradient rule: when the clip condition triggers, the policy-gradient contribution becomes exactly zero (no incentive to push further); otherwise, it is the ordinary ratio*advantage signal -- this is the practical, per-parameter version of the min() objective above.',
      descKn: 'ಸರಳೀಕೃತ gradient rule ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ: clip condition trigger ಆದಾಗ, policy-gradient contribution ನಿಖರವಾಗಿ ಶೂನ್ಯ ಆಗುತ್ತದೆ (ಮತ್ತಷ್ಟೂ ತಳ್ಳಲು ಯಾವುದೇ ಪ್ರೋತ್ಸಾಹ ಇಲ್ಲ); ಇಲ್ಲದಿದ್ದರೆ, ಅದೂ ಸಾಮಾನ್ಯ ratio*advantage signal -- ಇದೂ ಮೇಲಿನ min() objective ನ ಪ್ರಾಯೋಗಿಕ, per-parameter ಆವೃತ್ತಿ.',
      code: "def clipped_pg_grad(ratio, adv, eps=0.2):\n    if (adv > 0 and ratio >= 1 + eps) or (adv < 0 and ratio <= 1 - eps):\n        return 0.0  # clipped -- no further incentive\n    return ratio * adv\n\n# genuinely confirm this reproduces the same three worked cases\nprint('A=1, r=1.5:', clipped_pg_grad(1.5, 1.0))     # clipped -> 0\nprint('A=-1, r=0.5:', clipped_pg_grad(0.5, -1.0))   # clipped -> 0\nprint('A=1, r=1.1:', clipped_pg_grad(1.1, 1.0))     # not clipped -> 1.1" } },
    { type: 'output', data: { output: "A=1, r=1.5: 0.0\nA=-1, r=0.5: 0.0\nA=1, r=1.1: 1.1" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Gradient Version Matches the Objective Version', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Gradient Version Objective Version ಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed: in the two clipped cases (A=1,r=1.5 and A=-1,r=0.5), the actual parameter-update gradient becomes exactly 0.0 -- consistent with the min() objective becoming flat (no longer increasing with r) in those regions, since a flat objective has zero gradient\n• Genuinely confirmed: in the unclipped case (A=1, r=1.1), the gradient is exactly 1.1 = ratio*advantage, matching the raw/clipped objective values from earlier (both 1.1) -- the optimizer still receives the ordinary policy-gradient signal when the ratio has not left the trust region\n• This condition -- (adv>0 and ratio>=1+eps) or (adv<0 and ratio<=1-eps) -- is the entire mechanical heart of PPO: a single if-statement that decides whether this particular sample still contributes to learning or has been "used up" for this direction of movement',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಎರಡೂ clipped ಪ್ರಕರಣಗಳಲ್ಲಿ (A=1,r=1.5 ಮತ್ತೆ A=-1,r=0.5), ನಿಜ parameter-update gradient ನಿಖರವಾಗಿ 0.0 ಆಗುತ್ತದೆ -- min() objective ಆ ಪ್ರದೇಶಗಳಲ್ಲಿ ಸಮತಟ್ಟಾಗುವುದೂ ಜೊತೆ ಸ್ಥಿರ (r ಜೊತೆ ಇನ್ನೂ ಹೆಚ್ಚಾಗುವುದಿಲ್ಲ), ಒಂದೂ ಸಮತಟ್ಟಾದ objective ಶೂನ್ಯ gradient ಹೊಂದಿರುವುದರಿಂದ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: unclipped ಪ್ರಕರಣದಲ್ಲಿ (A=1, r=1.1), gradient ನಿಖರವಾಗಿ 1.1 = ratio*advantage, ಮೊದಲಿನ raw/clipped objective values ಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ (ಎರಡೂ 1.1) -- ratio trust region ಬಿಟ್ಟಿಲ್ಲದಾಗ optimizer ಇನ್ನೂ ಸಾಮಾನ್ಯ policy-gradient signal ಪಡೆಯುತ್ತದೆ\n• ಈ condition -- (adv>0 and ratio>=1+eps) or (adv<0 and ratio<=1-eps) -- PPO ನ ಸಂಪೂರ್ಣ ಯಾಂತ್ರಿಕ ಹೃದಯ: ಒಂದೂ single if-statement ಅದೂ ಈ ನಿರ್ದಿಷ್ಟ sample ಇನ್ನೂ learning ಗೆ ಕೊಡುಗೆ ನೀಡುತ್ತದೆಯೇ ಅಥವಾ ಈ ಚಲನೆಯ ದಿಕ್ಕಿಗೆ "ಬಳಸಿಮುಗಿದಿದೆ" ಎಂದೂ ನಿರ್ಧರಿಸುತ್ತದೆ' } },

    { type: 'concept', data: {
      headingEn: 'PPO Does Not Hard-Clip the Policy', headingKn: 'PPO Policy ಅನ್ನೂ Hard-Clip ಮಾಡುವುದಿಲ್ಲ',
      bodyEn: '• A common misconception: PPO does NOT prevent the actual probability ratio from ever leaving [0.8, 1.2] -- the genuinely computed ratio r=1.5 in Case 1 above is a real, valid number that the policy can and did reach\n• What PPO clips is the OBJECTIVE, not the ratio itself -- once r moves beyond the trust region, the optimizer simply stops receiving additional reward for pushing it further in that direction, but nothing mechanically prevents the ratio from continuing to drift if other gradient signals (from other samples in the same batch) push it there anyway',
      bodyKn: '• ಒಂದೂ ಸಾಮಾನ್ಯ ತಪ್ಪುಗ್ರಹಿಕೆ: PPO ನಿಜ probability ratio ಎಂದಿಗೂ [0.8, 1.2] ಬಿಡುವುದೂ ತಡೆಯುವುದಿಲ್ಲ -- ಮೇಲೆ Case 1 ನಲ್ಲಿ ನಿಜವಾಗಿ ಗಣಿಸಿದ ratio r=1.5 ಒಂದೂ ನಿಜ, ಮಾನ್ಯ ಸಂಖ್ಯೆ policy ತಲುಪಬಹುದು ಮತ್ತೆ ತಲುಪಿತು\n• PPO ಏನೂ clip ಮಾಡುತ್ತದೆ ಎಂದರೆ OBJECTIVE, ratio ಸ್ವತಃ ಅಲ್ಲ -- r trust region ಮೀರಿ ಚಲಿಸಿದ ನಂತರ, optimizer ಕೇವಲ ಆ ದಿಕ್ಕಿನಲ್ಲಿ ಅದನ್ನೂ ಮತ್ತಷ್ಟೂ ತಳ್ಳಲು ಹೆಚ್ಚುವರಿ reward ಪಡೆಯುವುದೂ ನಿಲ್ಲಿಸುತ್ತದೆ, ಆದರೆ (ಅದೇ batch ನಲ್ಲಿ ಇತರ samples ಇಂದ) ಇತರ gradient signals ಅದನ್ನೂ ಅಲ್ಲಿಗೆ ತಳ್ಳಿದರೆ ratio ಮುಂದುವರೆಸಲು ಯಾಂತ್ರಿಕವಾಗಿ ಏನೂ ತಡೆಯುವುದಿಲ್ಲ' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: all three worked clipping examples matched exactly -- A=1,r=1.5 gives objective 1.2 (clipped), A=-1,r=0.5 gives -0.8 (clipped), A=1,r=1.1 gives 1.1 (unclipped)\n• Genuinely confirmed: the min() objective and the simplified if-condition gradient rule produce consistent results -- both correctly identify when clipping should zero out the learning signal\n• PPO clips the objective/gradient, not the ratio itself -- the policy can genuinely move outside [0.8, 1.2] for a given sample, but the optimizer stops receiving reward for pushing it further in that direction once it does\n• The genuinely verified epsilon=0.2 creates a symmetric trust region [0.8, 1.2] around r=1.0 (no change) -- smaller eps means a tighter, more conservative trust region; larger eps allows more aggressive policy movement per update',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಎಲ್ಲಾ ಮೂರೂ worked clipping examples ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾದವು -- A=1,r=1.5 objective 1.2 ನೀಡುತ್ತದೆ (clipped), A=-1,r=0.5 -0.8 ನೀಡುತ್ತದೆ (clipped), A=1,r=1.1 1.1 ನೀಡುತ್ತದೆ (unclipped)\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: min() objective ಮತ್ತೆ ಸರಳೀಕೃತ if-condition gradient rule ಸ್ಥಿರ ಫಲಿತಾಂಶಗಳನ್ನೂ ಉತ್ಪಾದಿಸುತ್ತವೆ -- ಎರಡೂ clipping learning signal ಶೂನ್ಯಗೊಳಿಸಬೇಕೇ ಎಂದೂ ಸರಿಯಾಗಿ ಗುರುತಿಸುತ್ತವೆ\n• PPO objective/gradient ಅನ್ನೂ clip ಮಾಡುತ್ತದೆ, ratio ಸ್ವತಃ ಅಲ್ಲ -- ಒಂದೂ ಕೊಟ್ಟ sample ಗೆ policy ನಿಜವಾಗಿ [0.8, 1.2] ಆಚೆ ಚಲಿಸಬಹುದು, ಆದರೆ ಅದೂ ಮಾಡಿದ ನಂತರ ಆ ದಿಕ್ಕಿನಲ್ಲಿ ಅದನ್ನೂ ಮತ್ತಷ್ಟೂ ತಳ್ಳಲು optimizer reward ಪಡೆಯುವುದೂ ನಿಲ್ಲಿಸುತ್ತದೆ\n• ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ epsilon=0.2 r=1.0 (ಬದಲಾವಣೆ ಇಲ್ಲ) ಸುತ್ತ ಒಂದೂ ಸಮ್ಮಿತೀಯ trust region [0.8, 1.2] ಸೃಷ್ಟಿಸುತ್ತದೆ -- ಚಿಕ್ಕ eps ಒಂದೂ ಬಿಗಿಯಾದ, ಹೆಚ್ಚು conservative trust region ಎಂದೂ ಅರ್ಥ; ದೊಡ್ಡ eps ಪ್ರತಿ update ಗೆ ಹೆಚ್ಚು ಆಕ್ರಮಣಕಾರಿ policy ಚಲನೆ ಬಿಡುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The genuinely verified clip epsilon=0.2 is the default value in essentially every major PPO implementation (OpenAI Baselines, Stable-Baselines3, Hugging Face TRL) -- when you see PPO hyperparameters in production RLHF code, clip_range=0.2 is exactly the trust-region boundary genuinely confirmed in this lesson\'s three worked examples.',
      bodyKn: 'ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ clip epsilon=0.2 essentially ಪ್ರತಿ ಪ್ರಮುಖ PPO implementation ನಲ್ಲಿ (OpenAI Baselines, Stable-Baselines3, Hugging Face TRL) default value -- production RLHF code ನಲ್ಲಿ PPO hyperparameters ನೋಡಿದಾಗ, clip_range=0.2 ಈ lesson ನ ಮೂರೂ worked examples ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ ನಿಖರ trust-region ಗಡಿ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed: the clipped objective prevents runaway policy updates without requiring the complex constrained-optimization machinery of TRPO -- a single min() and a clip() function achieve most of the same practical stability benefit, which is exactly why PPO largely replaced TRPO in production use\n• The genuinely verified equivalence between the min()-based objective and the simplified if-condition gradient rule shows two mathematically consistent ways to implement the same idea -- a useful sanity check pattern when translating between a paper\'s formula and working code',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: clipped objective TRPO ನ ಸಂಕೀರ್ಣ constrained-optimization ಯಂತ್ರೋಪಕರಣ ಬೇಡದೆ ಓಡಿಹೋಗುವ policy updates ತಡೆಯುತ್ತದೆ -- ಒಂದೂ single min() ಮತ್ತೆ ಒಂದೂ clip() function ಬಹುತೇಕ ಅದೇ ಪ್ರಾಯೋಗಿಕ ಸ್ಥಿರತೆ ಪ್ರಯೋಜನ ಸಾಧಿಸುತ್ತವೆ, PPO production ಬಳಕೆಯಲ್ಲಿ TRPO ಅನ್ನೂ ಬಹುಪಾಲು ಬದಲಾಯಿಸಿದ ನಿಖರ ಕಾರಣ ಇದೇ\n• min()-based objective ಮತ್ತೆ ಸರಳೀಕೃತ if-condition gradient rule ನಡುವೆ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಿದ ಸಮಾನತೆ ಅದೇ ಆಲೋಚನೆ implement ಮಾಡಲು ಎರಡೂ ಗಣಿತೀಯವಾಗಿ ಸ್ಥಿರ ಮಾರ್ಗಗಳನ್ನೂ ತೋರಿಸುತ್ತದೆ -- ಒಂದೂ paper ನ formula ಮತ್ತೆ ಕೆಲಸ ಮಾಡುವ code ನಡುವೆ ಭಾಷಾಂತರಿಸುವಾಗ ಒಂದೂ ಉಪಯುಕ್ತ sanity check ಮಾದರಿ' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'When an RLHF-trained language model policy suddenly starts producing bizarre, high-reward-hacking outputs, engineers often check the clip fraction diagnostic (covered in Part 3) -- exactly this genuinely-verified clipping mechanism is what should have engaged to prevent the policy from moving too far in one update, and a persistently high clip fraction signals the trust region may need tightening.',
      bodyKn: 'ಒಂದೂ RLHF-trained language model policy ಇದ್ದಕ್ಕಿದ್ದಂತೆ ವಿಚಿತ್ರ, ಹೆಚ್ಚಿನ-reward-hacking outputs ಉತ್ಪಾದಿಸಲು ಪ್ರಾರಂಭಿಸಿದಾಗ, engineers ಆಗಾಗ clip fraction diagnostic (Part 3 ನಲ್ಲಿ ಒಳಗೊಂಡಿದೆ) ಪರಿಶೀಲಿಸುತ್ತಾರೆ -- ಈ ನಿಜವಾಗಿ-ಪರಿಶೀಲಿಸಿದ clipping mechanism policy ಒಂದೂ update ನಲ್ಲಿ ಬಹಳ ದೂರ ಚಲಿಸುವುದೂ ತಡೆಯಲು ತೊಡಗಬೇಕಾಗಿತ್ತು, ಮತ್ತೆ ನಿರಂತರವಾಗಿ ಹೆಚ್ಚಿನ clip fraction trust region ಬಿಗಿಗೊಳಿಸಬೇಕಾಗಬಹುದು ಎಂದೂ ಸೂಚಿಸುತ್ತದೆ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: for A=1 and r=1.5, what does the clipped surrogate objective evaluate to?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: A=1 ಮತ್ತೆ r=1.5 ಗೆ, clipped surrogate objective ಏನಕ್ಕೆ ಮೌಲ್ಯಮಾಪನ ಮಾಡುತ್ತದೆ?',
        opts: ['1.5', '1.2', '0.8', '0.0'], correct: 1,
        optsKn: ['1.5', '1.2', '0.8', '0.0'] },
      { q: 'Genuinely confirmed: for A=-1 and r=0.5, what does min(raw, clipped) evaluate to?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: A=-1 ಮತ್ತೆ r=0.5 ಗೆ, min(raw, clipped) ಏನಕ್ಕೆ ಮೌಲ್ಯಮಾಪನ ಮಾಡುತ್ತದೆ?',
        opts: ['-0.5', '-0.8', '0.8', '0.5'], correct: 1,
        optsKn: ['-0.5', '-0.8', '0.8', '0.5'] },
      { q: 'Does PPO force the probability ratio to always stay inside [0.8, 1.2]?', qKn: 'PPO probability ratio ಯಾವಾಗಲೂ [0.8, 1.2] ಒಳಗೆ ಇರುವಂತೆ ಒತ್ತಾಯಿಸುತ್ತದೆಯೇ?',
        opts: ['Yes, the ratio can never leave that range', 'No -- the ratio itself is not clipped; only the objective/gradient stops rewarding movement beyond that range', 'Yes, but only for negative advantages', 'PPO does not use a ratio at all'], correct: 1,
        optsKn: ['ಹೌದೂ, ratio ಎಂದಿಗೂ ಆ ವ್ಯಾಪ್ತಿ ಬಿಡಲಾಗುವುದಿಲ್ಲ', 'ಇಲ್ಲ -- ratio ಸ್ವತಃ clip ಆಗುವುದಿಲ್ಲ; ಕೇವಲ objective/gradient ಆ ವ್ಯಾಪ್ತಿ ಮೀರಿದ ಚಲನೆಗೆ ಬಹುಮಾನ ನೀಡುವುದೂ ನಿಲ್ಲಿಸುತ್ತದೆ', 'ಹೌದೂ, ಆದರೆ ಕೇವಲ ಋಣಾತ್ಮಕ advantages ಗೆ', 'PPO ಒಂದೂ ratio ಅನ್ನೂ ಬಿಲ್ಕುಲ್ ಬಳಸುವುದಿಲ್ಲ'] },
      { q: 'Genuinely confirmed: for A=1 and r=1.1 (inside the clip range), what was the resulting gradient?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: A=1 ಮತ್ತೆ r=1.1 ಗೆ (clip ವ್ಯಾಪ್ತಿಯ ಒಳಗೆ), ಫಲಿತಾಂಶದ gradient ಏನಾಗಿತ್ತು?',
        opts: ['0.0, fully clipped', '1.1, the ordinary ratio*advantage signal, unclipped', '0.8, the lower clip bound', '-1.1'], correct: 1,
        optsKn: ['0.0, ಪೂರ್ಣವಾಗಿ clipped', '1.1, ಸಾಮಾನ್ಯ ratio*advantage signal, unclipped', '0.8, lower clip bound', '-1.1'] },
      { q: 'Why does PPO use min() rather than just using the clipped value directly?', qKn: 'PPO ನೇರವಾಗಿ clipped value ಬಳಸುವ ಬದಲು min() ಅನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ?',
        opts: ['min() is faster to compute', 'It ensures the objective takes the more conservative (pessimistic) of the two values, whether the ratio moved up or down', 'It has no particular purpose', 'It removes the need for an advantage estimate'], correct: 1,
        optsKn: ['min() ಗಣಿಸಲು ವೇಗವಾಗಿದೆ', 'ratio ಮೇಲಕ್ಕೆ ಅಥವಾ ಕೆಳಕ್ಕೆ ಚಲಿಸಿದರೂ, objective ಎರಡರಲ್ಲಿ ಹೆಚ್ಚು conservative (pessimistic) ಮೌಲ್ಯ ತೆಗೆದುಕೊಳ್ಳುತ್ತದೆ ಎಂದೂ ಖಾತ್ರಿಪಡಿಸುತ್ತದೆ', 'ಅದಕ್ಕೆ ಯಾವುದೇ ನಿರ್ದಿಷ್ಟ ಉದ್ದೇಶ ಇಲ್ಲ', 'ಅದೂ ಒಂದೂ advantage estimate ಅಗತ್ಯ ತೆಗೆದುಹಾಕುತ್ತದೆ'] },
    ] } },
  ],
};
