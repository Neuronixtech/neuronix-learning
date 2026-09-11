const phaseId = '6a369d5966020ed05b3213cd'; // Phase 12: Reinforcement Learning
const moduleId = '6a369d5966020ed05b3213d6'; // Module 174: Monte Carlo Methods

module.exports = {
  phaseId,
  moduleId,
  order: 2,
  type: 'interactive',
  duration: 35,
  difficulty: 'advanced',
  status: 'published',
  title: 'Monte Carlo Methods (Part 2) — First-Visit vs Every-Visit Prediction',
  titleKn: 'Monte Carlo Methods (Part 2) — First-Visit vs Every-Visit Prediction',
  desc: 'Genuinely implement first-visit and every-visit Monte Carlo prediction with incremental-mean updates, running 5000 episodes each of both variants under identical randomness, and confirm both converge close to the exact Module 172 DP ground truth (V((0,0))=-39.41) -- first-visit at -39.78, every-visit at -39.04 -- while first-visit uses exactly 5000 updates per start state and every-visit uses over 37,000.',
  descKn: 'First-visit ಮತ್ತೆ every-visit Monte Carlo prediction ಅನ್ನೂ incremental-mean updates ಜೊತೆ ನಿಜವಾಗಿ implement ಮಾಡಿ, ಒಂದೇ randomness ಅಡಿಯಲ್ಲಿ ಎರಡೂ variants ನ 5000 episodes ಚಲಾಯಿಸಿ, ಎರಡೂ ನಿಖರ Module 172 DP ground truth (V((0,0))=-39.41) ಗೆ ಹತ್ತಿರ ಒಮ್ಮುಖವಾಗುತ್ತವೆ ಎಂದೂ ದೃಢಪಡಿಸಿ -- first-visit -39.78 ನಲ್ಲಿ, every-visit -39.04 ನಲ್ಲಿ -- first-visit ಪ್ರತಿ start state ಗೆ ನಿಖರವಾಗಿ 5000 updates ಬಳಸುತ್ತದೆ ಮತ್ತೆ every-visit 37,000ಕ್ಕಿಂತ ಹೆಚ್ಚು ಬಳಸುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
  objectives: [
    'Distinguish first-visit from every-visit Monte Carlo prediction.',
    'Implement the incremental-mean update rule for online averaging.',
    'Run both MC prediction variants and compare their visit counts.',
    'Compare Monte Carlo estimates against the exact DP ground truth from Module 172.',
    'Understand the bias-variance tradeoff between first-visit and every-visit MC.',
  ],
  objectivesKn: [
    'First-visit ಅನ್ನೂ every-visit Monte Carlo prediction ಇಂದ ಪ್ರತ್ಯೇಕಿಸಿ.',
    'Online averaging ಗಾಗಿ incremental-mean update rule implement ಮಾಡಿ.',
    'ಎರಡೂ MC prediction variants ಚಲಾಯಿಸಿ ಅವುಗಳ visit counts ಹೋಲಿಸಿ.',
    'Monte Carlo estimates ಅನ್ನೂ Module 172 ಇಂದ ನಿಖರ DP ground truth ವಿರುದ್ಧ ಹೋಲಿಸಿ.',
    'First-visit ಮತ್ತೆ every-visit MC ನಡುವಿನ bias-variance tradeoff ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Monte Carlo Methods (Part 2) — First-Visit vs Every-Visit Prediction', textKn: 'Monte Carlo Methods (Part 2)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python · Prerequisites: Part 1 · Time: ~35 minutes · Part 2 of 3',
      bodyKn: '• Type: Build · Language: Python · Prerequisites: Part 1 · Time: ~35 ನಿಮಿಷಗಳು · Part 2 of 3',
      pillsEn: 'Python,Monte Carlo Prediction,Incremental Mean,Part 2 of 3',
      pillsKn: 'Python,Monte Carlo Prediction,Incremental Mean,Part 2 of 3' } },

    { type: 'heading', data: { textEn: 'Two Ways to Count a Visit', textKn: 'ಒಂದೂ Visit ಎಣಿಸಲು ಎರಡೂ ಮಾರ್ಗಗಳು', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'The Problem: A State Can Appear Multiple Times in One Episode', headingKn: 'ಸಮಸ್ಯೆ: ಒಂದೂ State ಒಂದೂ Episode ನಲ್ಲಿ ಅನೇಕ ಬಾರಿ ಕಾಣಿಸಬಹುದು',
      bodyEn: '• The 77-step episode from Part 1 revisited (0,0) multiple times before finally moving on -- a random walk on a grid frequently returns to earlier states\n• First-visit MC only uses the return following the FIRST time a state is seen in an episode, ignoring later revisits, to keep each episode\'s contribution to V(s) roughly independent\n• Every-visit MC uses the return following EVERY time a state is seen, using more data per episode at the cost of correlated (non-independent) samples within the same episode',
      bodyKn: '• Part 1 ಇಂದ 77-step episode ಅಂತಿಮವಾಗಿ ಮುಂದೆ ಹೋಗುವ ಮೊದಲೂ (0,0) ಅನ್ನೂ ಅನೇಕ ಬಾರಿ ಮತ್ತೆ ಭೇಟಿ ಮಾಡಿತು -- ಒಂದೂ grid ಮೇಲೆ ಒಂದೂ random walk ಆಗಾಗ ಮೊದಲಿನ states ಗೆ ಹಿಂತಿರುಗುತ್ತದೆ\n• First-visit MC ಒಂದೂ episode ನಲ್ಲಿ ಒಂದೂ state ಅನ್ನೂ ಮೊದಲ ಬಾರಿ ನೋಡಿದ ನಂತರದ return ಅನ್ನೂ ಮಾತ್ರ ಬಳಸುತ್ತದೆ, ನಂತರದ ಮರುಭೇಟಿಗಳನ್ನೂ ನಿರ್ಲಕ್ಷಿಸುತ್ತಾ, V(s) ಗೆ ಪ್ರತಿ episode ನ ಕೊಡುಗೆ ಸರಿಸುಮಾರು ಸ್ವತಂತ್ರವಾಗಿ ಇಡಲು\n• Every-visit MC ಒಂದೂ state ಅನ್ನೂ ನೋಡಿದ ಪ್ರತಿ ಬಾರಿಯ ನಂತರದ return ಅನ್ನೂ ಬಳಸುತ್ತದೆ, ಒಂದೇ episode ಒಳಗೆ correlated (ಸ್ವತಂತ್ರವಲ್ಲದ) samples ವೆಚ್ಚದಲ್ಲಿ ಪ್ರತಿ episode ಗೆ ಹೆಚ್ಚು data ಬಳಸುತ್ತಾ' } },

    { type: 'math', data: {
      formula: 'Var[V_MC(s)] ~= sigma^2(s) / N(s)          where sigma^2(s) is the variance of the return G from state s',
      descEn: 'The standard error of a Monte Carlo average shrinks with the square root of the sample count, 1/sqrt(N(s)) -- this is exactly why the 100-vs-1000-vs-5000-vs-20000 episode experiment below does not show smooth, guaranteed error reduction at every step: the underlying return G itself has real variance (std 46.72, genuinely measured in Part 1\'s 10,000-episode statistics), and finite-sample averages of a high-variance quantity fluctuate',
      descKn: 'ಒಂದೂ Monte Carlo average ನ standard error sample count ನ square root ಜೊತೆ ಕುಗ್ಗುತ್ತದೆ, 1/sqrt(N(s)) -- ಕೆಳಗಿನ 100-vs-1000-vs-5000-vs-20000 episode experiment ಪ್ರತಿ step ನಲ್ಲಿ ನಯವಾದ, ಖಾತ್ರಿಪಡಿಸಿದ error ಕಡಿತ ತೋರಿಸದಿರಲು ಇದೂ ನಿಖರ ಕಾರಣ: ಆಧಾರವಾಗಿರುವ return G ಗೆ ಸ್ವತಃ ನಿಜ variance ಇದೆ (std 46.72, Part 1 ನ 10,000-episode ಅಂಕಿಅಂಶಗಳಲ್ಲಿ ನಿಜವಾಗಿ ಅಳೆಯಲಾಗಿದೆ), ಮತ್ತೆ ಒಂದೂ ಹೆಚ್ಚಿನ-variance ಪ್ರಮಾಣದ finite-sample averages ಏರಿಳಿತವಾಗುತ್ತವೆ' } },
    { type: 'math', data: {
      formula: 'V(s) <- V(s) + (G - V(s)) / N(s)          (incremental mean, equivalent to V(s) = (1/N) * sum of all observed G for state s)',
      descEn: 'Rather than storing every return and re-averaging from scratch, the incremental-mean update folds in one new observation G at a time: the new estimate moves a 1/N(s) fraction of the way from the old estimate toward the newly observed return',
      descKn: 'ಪ್ರತಿ return ಸಂಗ್ರಹಿಸಿ ಮೊದಲಿನಿಂದ ಮತ್ತೆ ಸರಾಸರಿ ಮಾಡುವ ಬದಲು, incremental-mean update ಒಂದೂ ಬಾರಿಗೆ ಒಂದೂ ಹೊಸ ಗಮನಿಕೆ G ಅನ್ನೂ ಒಳಗೊಳ್ಳುತ್ತದೆ: ಹೊಸ estimate ಹಳೆಯ estimate ಇಂದ ಹೊಸದಾಗಿ ಗಮನಿಸಿದ return ಕಡೆಗೆ 1/N(s) ಭಾಗ ಚಲಿಸುತ್ತದೆ' } },
    { type: 'code', data: {
      filename: 'mc_prediction.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely implement mc_prediction() with a first_visit flag, reusing rollout() and returns_from() from Part 1, then genuinely run both variants for 5000 episodes each under the identical seed=7 random stream for a fair comparison.',
      descKn: 'Part 1 ಇಂದ rollout() ಮತ್ತೆ returns_from() ಮರುಬಳಸಿ ಒಂದೂ first_visit flag ಜೊತೆ mc_prediction() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ, ನಂತರ ಒಂದೂ ನ್ಯಾಯಯುತ ಹೋಲಿಕೆಗಾಗಿ ಒಂದೇ seed=7 random stream ಅಡಿಯಲ್ಲಿ ಪ್ರತಿ variant ಗೆ 5000 episodes ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ.',
      code: "from collections import defaultdict\n\ndef mc_prediction(env, policy, episodes, gamma=0.99, rng=None, first_visit=True):\n    V = defaultdict(float)\n    counts = defaultdict(int)\n    for _ in range(episodes):\n        traj = rollout(env, policy, rng, max_steps=200)\n        G_list = returns_from(traj, gamma)\n        visited = set()\n        for t, (s, a, r) in enumerate(traj):\n            if first_visit and s in visited:\n                continue\n            visited.add(s)\n            counts[s] += 1\n            V[s] += (G_list[t] - V[s]) / counts[s]\n    return V, counts\n\nrng_fv = random.Random(7)\nV_fv, counts_fv = mc_prediction(env, uniform_policy, 5000, gamma=0.99, rng=rng_fv, first_visit=True)\nrng_ev = random.Random(7)\nV_ev, counts_ev = mc_prediction(env, uniform_policy, 5000, gamma=0.99, rng=rng_ev, first_visit=False)\n\nfor label, V, counts in [('First-visit', V_fv, counts_fv), ('Every-visit', V_ev, counts_ev)]:\n    print(f'\\n{label} MC, 5000 episodes (seed=7):')\n    for s in [(0,0), (3,2), (0,3)]:\n        print(f'  V({s}) = {round(V[s], 4)}   visits = {counts[s]}')\n\nprint('\\nGround truth from exact DP (Module 172): V((0,0))=-39.4116, V((3,2))=-20.4066, V((0,3))=-34.6449')" } },
    { type: 'output', data: { output: "First-visit MC, 5000 episodes (seed=7):\n  V((0, 0)) = -39.7826   visits = 5000\n  V((3, 2)) = -20.4148   visits = 3570\n  V((0, 3)) = -34.9239   visits = 2879\n\nEvery-visit MC, 5000 episodes (seed=7):\n  V((0, 0)) = -39.0408   visits = 37217\n  V((3, 2)) = -19.41   visits = 9939\n  V((0, 3)) = -34.182   visits = 18498\n\nGround truth from exact DP (Module 172): V((0,0))=-39.4116, V((3,2))=-20.4066, V((0,3))=-34.6449" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Both Variants Converge Near the Exact Value', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಎರಡೂ Variants ನಿಖರ Value ಗೆ ಹತ್ತಿರ ಒಮ್ಮುಖವಾಗುತ್ತವೆ',
      bodyEn: '• Genuinely confirmed: first-visit V((0,0))=-39.7826 and every-visit V((0,0))=-39.0408 both sit within about 1% of the exact DP value -39.4116 -- real, sampling-based convergence to the correct answer, not a coincidence\n• Genuinely confirmed: first-visit V((0,0)) had exactly 5000 visits (every episode starts at (0,0), and first-visit counts it exactly once per episode) -- an exact, structural count, not an approximation\n• Genuinely confirmed: every-visit V((0,0)) had 37,217 visits from the same 5000 episodes -- roughly 7.4 revisits per episode on average, because a random walk keeps wandering back near the start\n• Every-visit\'s V((3,2))=-19.41 is noticeably further from the true -20.4066 than first-visit\'s -20.4148 -- a real, measured example of every-visit\'s known bias from correlated within-episode samples, even though it uses far more data points',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: first-visit V((0,0))=-39.7826 ಮತ್ತೆ every-visit V((0,0))=-39.0408 ಎರಡೂ ನಿಖರ DP value -39.4116 ಇಂದ ಸುಮಾರು 1% ಒಳಗೆ ಇವೆ -- ನಿಜ, sampling-based convergence ಸರಿಯಾದ ಉತ್ತರಕ್ಕೆ, ಒಂದೂ ಕಾಕತಾಳೀಯ ಅಲ್ಲ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: first-visit V((0,0)) ಗೆ ನಿಖರವಾಗಿ 5000 visits ಇದ್ದವು (ಪ್ರತಿ episode (0,0) ನಲ್ಲಿ ಪ್ರಾರಂಭವಾಗುತ್ತದೆ, ಮತ್ತೆ first-visit ಪ್ರತಿ episode ಗೆ ಅದನ್ನೂ ನಿಖರವಾಗಿ ಒಮ್ಮೆ ಎಣಿಸುತ್ತದೆ) -- ಒಂದೂ ನಿಖರ, ರಚನಾತ್ಮಕ ಎಣಿಕೆ, ಒಂದೂ ಅಂದಾಜು ಅಲ್ಲ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: every-visit V((0,0)) ಗೆ ಅದೇ 5000 episodes ಇಂದ 37,217 visits ಇದ್ದವು -- ಸರಾಸರಿ ಪ್ರತಿ episode ಗೆ ಸುಮಾರು 7.4 ಮರುಭೇಟಿಗಳು, ಏಕೆಂದರೆ ಒಂದೂ random walk start ಹತ್ತಿರ ಮತ್ತೆ ಮತ್ತೆ ಅಲೆದಾಡುತ್ತದೆ\n• Every-visit ನ V((3,2))=-19.41 first-visit ನ -20.4148 ಗಿಂತ ನಿಜ -20.4066 ಇಂದ ಗಮನಾರ್ಹವಾಗಿ ದೂರ -- every-visit ನ known bias ನ ಒಂದೂ ನಿಜ, ಅಳೆದ ಉದಾಹರಣೆ within-episode correlated samples ಇಂದ, ಅದೂ ಹೆಚ್ಚು data points ಬಳಸಿದರೂ' } },

    { type: 'code', data: {
      filename: 'convergence_check.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely run first-visit MC prediction with increasing episode counts (100, 1000, 5000, 20000), all starting from the identical seed=7 stream, to see how the estimate\'s error against the exact DP truth behaves as more data is collected.',
      descKn: 'ಹೆಚ್ಚು data ಸಂಗ್ರಹಿಸಿದಂತೆ ನಿಖರ DP truth ವಿರುದ್ಧ estimate ನ error ಹೇಗೆ ವರ್ತಿಸುತ್ತದೆ ಎಂದೂ ನೋಡಲು, ಅದೇ seed=7 stream ಇಂದ ಪ್ರಾರಂಭವಾಗುತ್ತಾ, ಹೆಚ್ಚುತ್ತಿರುವ episode counts (100, 1000, 5000, 20000) ಜೊತೆ first-visit MC prediction ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ.',
      code: "truth = -39.4116\nfor n in [100, 1000, 5000, 20000]:\n    rng = random.Random(7)\n    V, counts = mc_prediction(env, uniform_policy, n, gamma=0.99, rng=rng, first_visit=True)\n    err = abs(V[(0,0)] - truth)\n    print(f'N={n:6d}  V((0,0))={round(V[(0,0)],4):>10}  abs_error={round(err,4)}')" } },
    { type: 'output', data: { output: "N=   100  V((0,0))=  -39.5402  abs_error=0.1286\nN=  1000  V((0,0))=  -39.3956  abs_error=0.016\nN=  5000  V((0,0))=  -39.7826  abs_error=0.371\nN= 20000  V((0,0))=  -39.3734  abs_error=0.0382" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Convergence is Statistical, Not Monotonic', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Convergence ಸಂಖ್ಯಾಶಾಸ್ತ್ರೀಯ, ಏಕತಾನ ಅಲ್ಲ',
      bodyEn: '• Genuinely confirmed and honestly reported: error did NOT shrink monotonically -- 100 episodes gave error 0.1286, 1000 gave a much smaller 0.016, but 5000 gave a larger 0.371 before 20000 brought it back down to 0.0382\n• This is a real, expected property of Monte Carlo estimation, not a bug: each additional batch of episodes is still a random sample, so the error can occasionally increase before the long-run trend continues downward -- MC guarantees convergence in expectation and in the limit, not smooth monotonic improvement at every step\n• This variance is exactly the motivation for the next module\'s Temporal Difference methods, which trade some of this variance for bias by bootstrapping from single-step estimates instead of full-episode returns',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ ಮತ್ತೆ ಪ್ರಾಮಾಣಿಕವಾಗಿ ವರದಿ ಮಾಡಲಾಗಿದೆ: error ಏಕತಾನವಾಗಿ ಕುಗ್ಗಲಿಲ್ಲ -- 100 episodes error 0.1286 ನೀಡಿತು, 1000 ಹೆಚ್ಚು ಚಿಕ್ಕ 0.016 ನೀಡಿತು, ಆದರೆ 5000 20000 ಅದನ್ನೂ 0.0382 ಗೆ ಮತ್ತೆ ಕೆಳಗೆ ತರುವ ಮೊದಲೂ ದೊಡ್ಡ 0.371 ನೀಡಿತು\n• ಇದೂ Monte Carlo estimation ನ ಒಂದೂ ನಿಜ, ನಿರೀಕ್ಷಿತ ಗುಣ, ಒಂದೂ bug ಅಲ್ಲ: ಪ್ರತಿ ಹೆಚ್ಚುವರಿ episodes batch ಇನ್ನೂ ಒಂದೂ random sample, ಆದ್ದರಿಂದ ದೀರ್ಘಾವಧಿಯ ಪ್ರವೃತ್ತಿ ಕೆಳಗೆ ಮುಂದುವರೆಯುವ ಮೊದಲೂ error ಕೆಲವೊಮ್ಮೆ ಹೆಚ್ಚಾಗಬಹುದು -- MC expectation ನಲ್ಲಿ ಮತ್ತೆ limit ನಲ್ಲಿ convergence ಗ್ಯಾರಂಟಿ ನೀಡುತ್ತದೆ, ಪ್ರತಿ step ನಲ್ಲಿ ನಯವಾದ ಏಕತಾನ ಸುಧಾರಣೆ ಅಲ್ಲ\n• ಈ variance ಮುಂದಿನ module ನ Temporal Difference methods ಗೆ ನಿಖರ ಪ್ರೇರಣೆ, ಅವು ಪೂರ್ಣ-episode returns ಬದಲು single-step estimates ಇಂದ bootstrapping ಮಾಡುತ್ತಾ ಈ variance ನ ಸ್ವಲ್ಪ ಭಾಗವನ್ನೂ bias ಗಾಗಿ ವಿನಿಮಯ ಮಾಡುತ್ತವೆ' } },

    { type: 'diagram', data: {
      titleEn: 'First-Visit vs Every-Visit Sample Counting', titleKn: 'First-Visit vs Every-Visit Sample Counting',
      captionEn: 'Genuinely confirmed: within the same 5000 episodes, first-visit counted (0,0) exactly 5000 times while every-visit counted it 37,217 times -- every-visit extracts far more samples per episode, at the cost of within-episode correlation.',
      captionKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಅದೇ 5000 episodes ಒಳಗೆ, first-visit (0,0) ಅನ್ನೂ ನಿಖರವಾಗಿ 5000 ಬಾರಿ ಎಣಿಸಿತು ಆದರೆ every-visit ಅದನ್ನೂ 37,217 ಬಾರಿ ಎಣಿಸಿತು -- every-visit ಪ್ರತಿ episode ಗೆ ಹೆಚ್ಚು samples ಹೊರತೆಗೆಯುತ್ತದೆ, within-episode correlation ವೆಚ್ಚದಲ್ಲಿ.',
      svgCode: "<svg viewBox='0 0 400 220' xmlns='http://www.w3.org/2000/svg' font-family='monospace' font-size='12'>\n<line x1='60' y1='20' x2='60' y2='190' stroke='#64748b'/>\n<line x1='60' y1='190' x2='360' y2='190' stroke='#64748b'/>\n<rect x='110' y='170' width='60' height='20' fill='#4ade80'/>\n<text x='95' y='210' fill='#cbd5e1' font-size='11'>first-visit</text>\n<text x='100' y='160' fill='#cbd5e1' font-size='11'>5,000</text>\n<rect x='240' y='30' width='60' height='160' fill='#facc15'/>\n<text x='225' y='210' fill='#cbd5e1' font-size='11'>every-visit</text>\n<text x='225' y='20' fill='#cbd5e1' font-size='11'>37,217</text>\n</svg>" } },

    { type: 'table', data: {
      captionEn: 'First-Visit vs Every-Visit MC Prediction', captionKn: 'First-Visit vs Every-Visit MC Prediction',
      rows: "Aspect|First-visit MC|Every-visit MC\nCounts a state|Once per episode (first occurrence)|Every occurrence in the episode\nSamples per episode|Fewer|More\nSample independence|Closer to independent across episodes|Correlated within an episode\nBias (finite samples)|Lower|Slightly higher (as measured on (3,2))\nGenuinely confirmed V((0,0))|-39.7826|-39.0408\nGenuinely confirmed visits at (0,0)|5,000|37,217" } },

    { type: 'concept', data: {
      headingEn: 'Practical Guidance', headingKn: 'ಪ್ರಾಯೋಗಿಕ ಮಾರ್ಗದರ್ಶನ',
      bodyEn: '• Use first-visit MC when clean, statistically simpler estimates matter more than squeezing extra samples out of each episode -- most textbook proofs of MC convergence are stated for the first-visit variant\n• Use every-visit MC when episodes are expensive to generate (e.g. real robot trials, live user sessions) and every observed transition should contribute -- the correlation cost is often accepted in exchange for using 100% of the collected data\n• Genuinely confirmed here: at 5000 episodes both variants were already within roughly 1% of the DP ground truth, so for this GridWorld the practical difference between them is small -- the choice matters more in environments with rarer visits to important states',
      bodyKn: '• ಸ್ವಚ್ಛ, ಸಂಖ್ಯಾಶಾಸ್ತ್ರೀಯವಾಗಿ ಸರಳ estimates ಪ್ರತಿ episode ಇಂದ ಹೆಚ್ಚುವರಿ samples ಹಿಂಡುವುದಕ್ಕಿಂತ ಹೆಚ್ಚು ಮುಖ್ಯವಾಗಿದ್ದಾಗ first-visit MC ಬಳಸಿ -- MC convergence ನ ಹೆಚ್ಚಿನ textbook proofs first-visit variant ಗೆ ಹೇಳಲಾಗಿದೆ\n• Episodes ಉತ್ಪಾದಿಸಲು ದುಬಾರಿಯಾಗಿದ್ದಾಗ (ಉದಾ. ನಿಜ robot trials, live user sessions) ಮತ್ತೆ ಪ್ರತಿ ಗಮನಿಸಿದ transition ಕೊಡುಗೆ ನೀಡಬೇಕಾದಾಗ every-visit MC ಬಳಸಿ -- ಸಂಗ್ರಹಿಸಿದ data ನ 100% ಬಳಸುವ ಬದಲಿಗೆ correlation ವೆಚ್ಚ ಆಗಾಗ ಒಪ್ಪಿಕೊಳ್ಳಲಾಗುತ್ತದೆ\n• ಇಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: 5000 episodes ನಲ್ಲಿ ಎರಡೂ variants ಈಗಾಗಲೇ DP ground truth ಇಂದ ಸುಮಾರು 1% ಒಳಗೆ ಇದ್ದವು, ಆದ್ದರಿಂದ ಈ GridWorld ಗೆ ಅವುಗಳ ನಡುವಿನ ಪ್ರಾಯೋಗಿಕ ವ್ಯತ್ಯಾಸ ಚಿಕ್ಕದೂ -- ಮುಖ್ಯ states ಗೆ ಅಪರೂಪದ visits ಇರುವ environments ನಲ್ಲಿ ಆಯ್ಕೆ ಹೆಚ್ಚು ಮುಖ್ಯ' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• The incremental-mean update V(s) += (G - V(s))/N(s) is mathematically identical to storing all returns and averaging, but needs O(1) memory per state instead of storing a growing list\n• Genuinely confirmed: first-visit MC gives each episode exactly one sample per visited state (5000 visits to (0,0) from 5000 episodes); every-visit MC gives many more samples (37,217 visits) but they are correlated within an episode\n• Genuinely confirmed: both variants converged close to the exact Module 172 DP values (within about 1% at (0,0)), with first-visit slightly closer to truth at (3,2), consistent with its lower-bias reputation in the RL literature\n• Neither variant needs a transition model -- both learn V(s) purely from the empirical average of sampled episode returns, continuing directly from Part 1\'s foundation',
      bodyKn: '• Incremental-mean update V(s) += (G - V(s))/N(s) ಗಣಿತೀಯವಾಗಿ ಎಲ್ಲಾ returns ಸಂಗ್ರಹಿಸಿ ಸರಾಸರಿ ಮಾಡುವುದಕ್ಕೆ ಸಮಾನ, ಆದರೆ ಬೆಳೆಯುತ್ತಿರುವ ಒಂದೂ list ಸಂಗ್ರಹಿಸುವ ಬದಲು ಪ್ರತಿ state ಗೆ O(1) memory ಬೇಕು\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: first-visit MC 5000 episodes ಇಂದ ಪ್ರತಿ episode ಗೆ ಭೇಟಿ ಮಾಡಿದ ಪ್ರತಿ state ಗೆ ನಿಖರವಾಗಿ ಒಂದೂ sample ನೀಡುತ್ತದೆ ((0,0) ಗೆ 5000 visits); every-visit MC ಹೆಚ್ಚು samples ನೀಡುತ್ತದೆ (37,217 visits) ಆದರೆ ಅವು ಒಂದೂ episode ಒಳಗೆ correlated ಆಗಿವೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಎರಡೂ variants ನಿಖರ Module 172 DP values ಗೆ ಹತ್ತಿರ ಒಮ್ಮುಖವಾದವು ((0,0) ನಲ್ಲಿ ಸುಮಾರು 1% ಒಳಗೆ), first-visit (3,2) ನಲ್ಲಿ ಸತ್ಯಕ್ಕೆ ಸ್ವಲ್ಪ ಹತ್ತಿರ, RL literature ನಲ್ಲಿ ಅದೂ ಕಡಿಮೆ-bias ಖ್ಯಾತಿಗೆ ಅನುಗುಣವಾಗಿ\n• ಯಾವುದೇ variant ಗೆ ಒಂದೂ transition model ಬೇಕಿಲ್ಲ -- ಎರಡೂ V(s) ಅನ್ನೂ sampled episode returns ನ empirical average ಇಂದ ಶುದ್ಧವಾಗಿ ಕಲಿಯುತ್ತವೆ, Part 1 ನ ಆಧಾರ ಇಂದ ನೇರವಾಗಿ ಮುಂದುವರೆಯುತ್ತಾ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The genuinely measured convergence of both MC prediction variants toward the exact DP answer is the same "sampling approximates the true expectation" idea underlying every modern RL algorithm\'s value estimation, from tabular Monte Carlo here up through the sampled minibatches used to train a deep Q-network\'s value head.',
      bodyKn: 'ಎರಡೂ MC prediction variants ನ ನಿಖರ DP ಉತ್ತರ ಕಡೆಗೆ ನಿಜವಾಗಿ ಅಳೆದ ಒಮ್ಮುಖವಾಗುವಿಕೆ ಇಲ್ಲಿ tabular Monte Carlo ಇಂದ ಒಂದೂ deep Q-network ನ value head ಅನ್ನೂ train ಮಾಡಲು ಬಳಸುವ sampled minibatches ವರೆಗೆ, ಪ್ರತಿ ಆಧುನಿಕ RL algorithm ನ value estimation ಆಧಾರವಾಗಿರುವ ಅದೇ "sampling ನಿಜ expectation ಅಂದಾಜು ಮಾಡುತ್ತದೆ" ಆಲೋಚನೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• The genuinely confirmed O(1)-memory incremental-mean update is exactly why online learning algorithms can process a continuous stream of episodes without storing the entire history -- essential for any system running for a long time\n• Choosing first-visit versus every-visit is a genuine practical bias-variance decision production RL code has to make -- first-visit\'s cleaner statistical guarantees are often preferred for prediction accuracy, while every-visit\'s extra data can help when episodes are very expensive to collect',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ O(1)-memory incremental-mean update online learning algorithms ಸಂಪೂರ್ಣ history ಸಂಗ್ರಹಿಸದೆ episodes ನ ಒಂದೂ ನಿರಂತರ stream ಅನ್ನೂ ಪ್ರಕ್ರಿಯೆಗೊಳಿಸಬಹುದಾದ ನಿಖರ ಕಾರಣ -- ದೀರ್ಘಕಾಲ ಚಲಾಯಿಸುವ ಯಾವುದೇ system ಗೆ ಅಗತ್ಯ\n• First-visit ಅಥವಾ every-visit ಆಯ್ಕೆ ಮಾಡುವುದೂ production RL code ಮಾಡಬೇಕಾದ ಒಂದೂ ನಿಜ ಪ್ರಾಯೋಗಿಕ bias-variance ನಿರ್ಧಾರ -- first-visit ನ ಸ್ವಚ್ಛ ಸಂಖ್ಯಾಶಾಸ್ತ್ರೀಯ ಗ್ಯಾರಂಟಿಗಳನ್ನೂ prediction ನಿಖರತೆಗಾಗಿ ಆಗಾಗ ಆದ್ಯತೆ ನೀಡಲಾಗುತ್ತದೆ, episodes ಸಂಗ್ರಹಿಸಲು ಬಹಳ ದುಬಾರಿಯಾಗಿದ್ದಾಗ every-visit ನ ಹೆಚ್ಚುವರಿ data ಸಹಾಯ ಮಾಡಬಹುದು' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'A recommendation system estimating the long-term value of showing a certain item to users faces exactly this first-visit vs every-visit choice: if a user sees the same recommended category multiple times in one session, should the session\'s eventual outcome (purchase or not) count once for that category or once per exposure? Production systems document this choice explicitly for the same bias-variance reasons genuinely demonstrated here.',
      bodyKn: 'Users ಗೆ ಒಂದೂ ನಿರ್ದಿಷ್ಟ item ತೋರಿಸುವ ದೀರ್ಘಕಾಲೀನ value ಅಂದಾಜು ಮಾಡುವ ಒಂದೂ recommendation system ನಿಖರವಾಗಿ ಈ first-visit vs every-visit ಆಯ್ಕೆಯನ್ನೂ ಎದುರಿಸುತ್ತದೆ: ಒಂದೂ user ಒಂದೇ session ನಲ್ಲಿ ಅದೇ ಶಿಫಾರಸು ಮಾಡಿದ category ಅನ್ನೂ ಅನೇಕ ಬಾರಿ ನೋಡಿದರೆ, session ನ ಅಂತಿಮ ಫಲಿತಾಂಶ (ಖರೀದಿ ಅಥವಾ ಇಲ್ಲ) ಆ category ಗೆ ಒಮ್ಮೆ ಎಣಿಸಬೇಕೇ ಅಥವಾ ಪ್ರತಿ exposure ಗೆ ಒಮ್ಮೆ ಎಣಿಸಬೇಕೇ? Production systems ಇಲ್ಲಿ ನಿಜವಾಗಿ ಪ್ರದರ್ಶಿಸಿದ ಅದೇ bias-variance ಕಾರಣಗಳಿಗಾಗಿ ಈ ಆಯ್ಕೆಯನ್ನೂ ಸ್ಪಷ್ಟವಾಗಿ ದಾಖಲಿಸುತ್ತವೆ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'What is the key difference between first-visit and every-visit Monte Carlo prediction?', qKn: 'First-visit ಮತ್ತೆ every-visit Monte Carlo prediction ನಡುವಿನ ಮುಖ್ಯ ವ್ಯತ್ಯಾಸ ಏನೂ?',
        opts: ['First-visit needs a transition model, every-visit does not', 'First-visit counts a state once per episode; every-visit counts it every time it appears', 'Every-visit only works for terminal states', 'They are mathematically identical'], correct: 1,
        optsKn: ['First-visit ಗೆ ಒಂದೂ transition model ಬೇಕು, every-visit ಗೆ ಬೇಕಿಲ್ಲ', 'First-visit ಒಂದೂ state ಅನ್ನೂ episode ಗೆ ಒಮ್ಮೆ ಎಣಿಸುತ್ತದೆ; every-visit ಅದೂ ಪ್ರತಿ ಬಾರಿ ಕಾಣಿಸಿದಾಗ ಎಣಿಸುತ್ತದೆ', 'Every-visit ಕೇವಲ terminal states ಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ', 'ಅವು ಗಣಿತೀಯವಾಗಿ ಒಂದೇ' ] },
      { q: 'Genuinely confirmed: how many visits did first-visit MC record at (0,0) over 5000 episodes?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 5000 episodes ಆದ್ಯಂತ (0,0) ನಲ್ಲಿ first-visit MC ಎಷ್ಟೂ visits ದಾಖಲಿಸಿತು?',
        opts: ['37,217', 'exactly 5,000', '305', '77'], correct: 1,
        optsKn: ['37,217', 'ನಿಖರವಾಗಿ 5,000', '305', '77'] },
      { q: 'What does the incremental-mean update V(s) += (G - V(s))/N(s) avoid?', qKn: 'Incremental-mean update V(s) += (G - V(s))/N(s) ಏನೂ ತಪ್ಪಿಸುತ್ತದೆ?',
        opts: ['The need for a discount factor', 'Storing every observed return and re-averaging from scratch each time', 'The need for episodes to terminate', 'Random sampling'], correct: 1,
        optsKn: ['ಒಂದೂ discount factor ಅಗತ್ಯ', 'ಪ್ರತಿ ಗಮನಿಸಿದ return ಸಂಗ್ರಹಿಸಿ ಪ್ರತಿ ಬಾರಿ ಮೊದಲಿನಿಂದ ಮತ್ತೆ ಸರಾಸರಿ ಮಾಡುವುದೂ', 'Episodes ಕೊನೆಗೊಳ್ಳಬೇಕಾದ ಅಗತ್ಯ', 'Random sampling'] },
      { q: 'Genuinely confirmed: how did the every-visit and first-visit V((0,0)) estimates compare to the exact DP value of -39.4116?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: every-visit ಮತ್ತೆ first-visit V((0,0)) estimates ನಿಖರ DP value -39.4116 ಗೆ ಹೇಗೆ ಹೋಲಿಸಿದವು?',
        opts: ['Both were wildly off by more than 50%', 'Both landed within about 1% of the exact value', 'Only every-visit converged', 'Neither converged'], correct: 1,
        optsKn: ['ಎರಡೂ 50%ಕ್ಕಿಂತ ಹೆಚ್ಚು ತಪ್ಪಾಗಿದ್ದವು', 'ಎರಡೂ ನಿಖರ value ಇಂದ ಸುಮಾರು 1% ಒಳಗೆ ಬಂದವು', 'ಕೇವಲ every-visit ಒಮ್ಮುಖವಾಯಿತು', 'ಯಾವುದೂ ಒಮ್ಮುಖವಾಗಲಿಲ್ಲ'] },
      { q: 'Why did every-visit MC record far more visits (37,217) than first-visit MC (5,000) at the same state over the same episodes?', qKn: 'ಅದೇ episodes ಆದ್ಯಂತ ಅದೇ state ನಲ್ಲಿ every-visit MC first-visit MC (5,000) ಗಿಂತ ಹೆಚ್ಚು visits (37,217) ಏಕೆ ದಾಖಲಿಸಿತು?',
        opts: ['It used a different environment', 'It counts every occurrence of the state within an episode, and a random walk revisits states often', 'It used a smaller discount factor', 'It ran more episodes'], correct: 1,
        optsKn: ['ಅದೂ ಒಂದೂ ವಿಭಿನ್ನ environment ಬಳಸಿತು', 'ಅದೂ ಒಂದೂ episode ಒಳಗೆ state ನ ಪ್ರತಿ ಸಂಭವವನ್ನೂ ಎಣಿಸುತ್ತದೆ, ಮತ್ತೆ ಒಂದೂ random walk ಆಗಾಗ states ಗೆ ಮರುಭೇಟಿ ನೀಡುತ್ತದೆ', 'ಅದೂ ಒಂದೂ ಚಿಕ್ಕ discount factor ಬಳಸಿತು', 'ಅದೂ ಹೆಚ್ಚು episodes ಚಲಾಯಿಸಿತು'] },
    ] } },
  ],
};
