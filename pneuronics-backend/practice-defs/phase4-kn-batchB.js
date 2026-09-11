const phaseId = '6a4feb6003016efda2350503'; // Phase 4: Math Foundations

const m19 = '6a4febd4795ffc51a8bf26e2';
const m20 = '6a4febd5795ffc51a8bf26e5';
const m21 = '6a4febd5795ffc51a8bf270f';
const m22 = '6a4febd5795ffc51a8bf26eb';
const m23 = '6a4febd5795ffc51a8bf26ee';

const l19_1 = '6a5119d6518b01cb47589e43';
const l20_1 = '6a5121b24df6552884b7a08d';
const l21_0 = '6a528cd1702e4cabb3c09c55';
const l22_0 = '6a529614dd3133a9c9bc1d70';
const l22_1 = '6a5296a3eb13c8a6e603dc97';
const l22_2 = '6a5297651a1b97c3648ee768';
const l22_3 = '6a5298aa00377e23702a9414';
const l23_0 = '6a529c251afbcea0168b05cc';
const l23_1 = '6a529d27c6b09326da25d2d7';
const l23_2 = '6a529dffb31e80596d371c7c';

module.exports = [
  // Module 19, Lesson 1
  { phaseId, moduleId: m19, lessonId: l19_1, order: 0, difficulty: 'beginner',
    title: 'Sampling and Estimation',
    titleKn: 'Sampling ಮತ್ತು Estimation',
    problem: "Using Python's random module only:\n\n1. Generate 1000 uniform samples from U(0,1). Estimate mean and variance.\n2. Generate 1000 Bernoulli(p=0.3) samples. Estimate p from samples.\n3. Build a text histogram: bucket 1000 uniform samples into 10 bins, print bar lengths.\n4. Central Limit Theorem demo: generate 1000 samples of means (each mean of 30 U(0,1) draws). What distribution do these means follow?\n5. Generate exponential samples using inverse CDF: if U~Uniform(0,1), then X=-log(1-U)/λ is Exponential(λ). Generate 1000 samples with λ=2. Estimate the mean (should be 1/λ=0.5).",
    problemKn: "ಕೇವಲ Python ya random module ಬಳಸಿ:\n\n1. U(0,1) ಇಂದ 1000 uniform samples ಉತ್ಪಾದಿಸಿ. mean ಮತ್ತು variance ಅಂದಾಜಿಸಿ.\n2. 1000 Bernoulli(p=0.3) samples ಉತ್ಪಾದಿಸಿ. samples ಇಂದ p ಅಂದಾಜಿಸಿ.\n3. ಒಂದು text histogram ನಿರ್ಮಿಸಿ: 1000 uniform samples ಅನ್ನೂ 10 bins ಗೆ ಬಕೆಟ್ ಮಾಡಿ.\n4. Central Limit Theorem demo: means ya 1000 samples ಉತ್ಪಾದಿಸಿ. ಈ means ಯಾವ distribution ಅನುಸರಿಸುತ್ತವೆ?\n5. inverse CDF ಬಳಸಿ exponential samples ಉತ್ಪಾದಿಸಿ. λ=2 ಜೊತೆ 1000 samples ಉತ್ಪಾದಿಸಿ. mean ಅಂದಾಜಿಸಿ (1/λ=0.5 ಆಗಿರಬೇಕು)." },
  { phaseId, moduleId: m19, lessonId: l19_1, order: 1, difficulty: 'intermediate',
    title: 'Gaussian PDF and MLE',
    titleKn: 'Gaussian PDF ಮತ್ತು MLE',
    problem: "Gaussian PDF: f(x) = (1/√(2πσ²)) × exp(-(x-μ)²/(2σ²))\n\n1. Implement gaussian_pdf(x, mu, sigma). Compute at x = μ-2σ, μ-σ, μ, μ+σ, μ+2σ for μ=0, σ=1.\n2. Numerically verify 68-95-99.7 rule: integrate f(x)dx from -σ to +σ in steps of 0.001.\n3. Observe 10 values: [2.1, 1.8, 2.3, 2.0, 1.9, 2.2, 1.7, 2.4, 2.1, 1.8]\n   MLE for Gaussian: μ̂ = sample mean, σ̂² = sample variance\n4. Evaluate log-likelihood log L(μ,σ|data) = Σ log f(xᵢ;μ,σ) at (μ̂,σ̂) vs (μ=1.5,σ=1.0). Which is higher?\n5. Box-Muller: u1,u2~U(0,1) → z = sqrt(-2log(u1))×cos(2π×u2). Generate 500 samples. Verify mean≈0, std≈1.",
    problemKn: "Gaussian PDF: f(x) = (1/√(2πσ²)) × exp(-(x-μ)²/(2σ²))\n\n1. gaussian_pdf(x, mu, sigma) ಜಾರಿಗೊಳಿಸಿ. μ=0, σ=1 ಗೆ x = μ-2σ, μ-σ, μ, μ+σ, μ+2σ ನಲ್ಲಿ ಲೆಕ್ಕಹಾಕಿ.\n2. 68-95-99.7 ನಿಯಮವನ್ನೂ ಸಂಖ್ಯಾತ್ಮಕವಾಗಿ ಪರಿಶೀಲಿಸಿ.\n3. 10 ಮೌಲ್ಯಗಳನ್ನೂ ಗಮನಿಸಿ: [2.1, 1.8, 2.3, 2.0, 1.9, 2.2, 1.7, 2.4, 2.1, 1.8]\n   Gaussian ಗೆ MLE: μ̂ = sample mean, σ̂² = sample variance\n4. (μ̂,σ̂) vs (μ=1.5,σ=1.0) ನಲ್ಲಿ log-likelihood ಮೌಲ್ಯಮಾಪನ ಮಾಡಿ. ಯಾವುದೂ ಹೆಚ್ಚು?\n5. Box-Muller: 500 samples ಉತ್ಪಾದಿಸಿ. mean≈0, std≈1 ಎಂದು ಖಚಿತಪಡಿಸಿ." },
  { phaseId, moduleId: m19, lessonId: l19_1, order: 2, difficulty: 'advanced',
    title: 'Maximum Likelihood Estimation',
    titleKn: 'Maximum Likelihood Estimation',
    problem: "Coin flips: [1,1,0,1,0,1,1,1,0,1] (1=heads). Model: P(H)=p.\n\n1. Likelihood: L(p) = p^k × (1-p)^(n-k). Evaluate at p=0.5,0.6,0.7,0.8.\n2. Log-likelihood: log L(p) = k×log(p) + (n-k)×log(1-p)\n3. MLE: d(log L)/dp=0 → p̂ = k/n. What is p̂?\n4. Plot log L vs p in {0.1,0.2,...,0.9} as a text bar chart. Is max at p̂?\n5. Now consider 3 coins with unknown (shared) p, observed:\n   Coin1: [1,1,0,1], Coin2: [1,0,0], Coin3: [1,1,1,1,0]\n   Pooled MLE: p̂ = total_heads / total_flips. Compute p̂ and log L.",
    problemKn: "Coin flips: [1,1,0,1,0,1,1,1,0,1] (1=heads). Model: P(H)=p.\n\n1. Likelihood: L(p) = p^k × (1-p)^(n-k). p=0.5,0.6,0.7,0.8 ನಲ್ಲಿ ಮೌಲ್ಯಮಾಪನ ಮಾಡಿ.\n2. Log-likelihood ಲೆಕ್ಕಹಾಕಿ\n3. MLE: p̂ = k/n. p̂ ಏನು?\n4. log L ಅನ್ನೂ p ಜೊತೆ ಒಂದು text bar chart ಆಗಿ ಪ್ಲಾಟ್ ಮಾಡಿ. ಗರಿಷ್ಠ p̂ ನಲ್ಲಿ ಇದೆಯೇ?\n5. ಈಗ ಗೊತ್ತಿಲ್ಲದ (ಹಂಚಿಕೊಂಡ) p ಇರುವ 3 coins ಪರಿಗಣಿಸಿ. Pooled MLE ಲೆಕ್ಕಹಾಕಿ." },

  // Module 20, Lesson 1
  { phaseId, moduleId: m20, lessonId: l20_1, order: 0, difficulty: 'beginner',
    title: 'Bayes Theorem Applied',
    titleKn: 'Bayes Theorem ಅನ್ವಯಿಸಿದಂತೆ',
    problem: "Disease: 1% prevalence. Test: 95% sensitivity, 90% specificity.\n\n1. Set up all four probabilities: P(sick), P(healthy), P(pos|sick), P(pos|healthy)\n2. Total probability: P(positive) = P(pos|sick)×P(sick) + P(pos|healthy)×P(healthy)\n3. Bayes: P(sick|positive) = P(pos|sick)×P(sick) / P(positive)\n4. You test positive. What is P(sick|positive)? (Should be surprisingly low!)\n5. What prevalence would you need for P(sick|pos) > 50%? Solve for P(sick) analytically.",
    problemKn: "Disease: 1% prevalence. Test: 95% sensitivity, 90% specificity.\n\n1. ಎಲ್ಲಾ ನಾಲ್ಕು probabilities ಸ್ಥಾಪಿಸಿ\n2. Total probability ಲೆಕ್ಕಹಾಕಿ\n3. Bayes: P(sick|positive) ಲೆಕ್ಕಹಾಕಿ\n4. ನೀವು positive test ಮಾಡುತ್ತೀರಿ. P(sick|positive) ಏನು? (ಆಶ್ಚರ್ಯಕರವಾಗಿ ಕಡಿಮೆ ಇರಬೇಕು!)\n5. P(sick|pos) > 50% ಗೆ ಯಾವ prevalence ಬೇಕಾಗುತ್ತದೆ? P(sick) ಗೆ analytically ಪರಿಹರಿಸಿ." },
  { phaseId, moduleId: m20, lessonId: l20_1, order: 1, difficulty: 'intermediate',
    title: 'Naive Bayes Classifier',
    titleKn: 'Naive Bayes Classifier',
    problem: "Spam classifier from word frequencies:\n  spam: [\"free money now\", \"win prize click\", \"cheap loans offer\"]\n  ham:  [\"meeting at 3pm\", \"project update done\", \"lunch tomorrow\"]\n\n1. Compute P(spam) and P(ham)\n2. For each class, count word frequencies\n3. P(word|class) with Laplace smoothing: (count+1)/(total_words+vocab_size)\n4. Classify \"free lunch tomorrow\" using log-probabilities:\n   log P(class|msg) ∝ log P(class) + Σ log P(word|class)\n5. Which class wins? What if you received \"free meeting tomorrow\"?",
    problemKn: "word frequencies ಇಂದ ಒಂದು spam classifier:\n  spam: [\"free money now\", \"win prize click\", \"cheap loans offer\"]\n  ham:  [\"meeting at 3pm\", \"project update done\", \"lunch tomorrow\"]\n\n1. P(spam) ಮತ್ತು P(ham) ಲೆಕ್ಕಹಾಕಿ\n2. ಪ್ರತಿ class ಗೆ, word frequencies ಎಣಿಸಿ\n3. Laplace smoothing ಜೊತೆ P(word|class) ಲೆಕ್ಕಹಾಕಿ\n4. log-probabilities ಬಳಸಿ \"free lunch tomorrow\" ವರ್ಗೀಕರಿಸಿ\n5. ಯಾವ class ಗೆಲ್ಲುತ್ತದೆ? \"free meeting tomorrow\" ಸ್ವೀಕರಿಸಿದರೆ ಏನಾಗುತ್ತದೆ?" },
  { phaseId, moduleId: m20, lessonId: l20_1, order: 2, difficulty: 'advanced',
    title: 'Sequential Bayesian Updating',
    titleKn: 'Sequential Bayesian Updating',
    problem: "Coin authenticity: prior P(fair)=0.5, P(biased)=0.5\n  Fair coin: P(H|fair) = 0.5\n  Biased coin: P(H|biased) = 0.9\n\nObservations: [H, H, H, T, H, H, H, H, H, T]\n\n1. Update P(fair|data) sequentially after each flip using Bayes rule\n2. Print P(fair) and P(biased) after each observation\n3. After all 10 flips, what is your posterior belief about the coin?\n4. How many heads in a row would it take to push P(biased) > 0.99?\n5. Implement update(prior, likelihood_fair, likelihood_biased) as a general function and apply to a new sequence [H,H,H,H,H,H,H,H,H,H].",
    problemKn: "Coin authenticity: prior P(fair)=0.5, P(biased)=0.5\n  Fair coin: P(H|fair) = 0.5\n  Biased coin: P(H|biased) = 0.9\n\nObservations: [H, H, H, T, H, H, H, H, H, T]\n\n1. Bayes rule ಬಳಸಿ ಪ್ರತಿ flip ನಂತರ P(fair|data) ಅನ್ನೂ ಅನುಕ್ರಮವಾಗಿ update ಮಾಡಿ\n2. ಪ್ರತಿ observation ನಂತರ P(fair) ಮತ್ತು P(biased) ಪ್ರಿಂಟ್ ಮಾಡಿ\n3. ಎಲ್ಲಾ 10 flips ನಂತರ, coin ಬಗ್ಗೆ ನಿಮ್ಮ posterior ನಂಬಿಕೆ ಏನು?\n4. P(biased) > 0.99 ಗೆ ತಳ್ಳಲು ಸತತವಾಗಿ ಎಷ್ಟು heads ಬೇಕಾಗುತ್ತದೆ?\n5. update(prior, likelihood_fair, likelihood_biased) ಅನ್ನೂ ಒಂದು general function ಆಗಿ ಜಾರಿಗೊಳಿಸಿ." },

  // Module 21, Lesson 0
  { phaseId, moduleId: m21, lessonId: l21_0, order: 0, difficulty: 'beginner',
    title: 'Gradient Descent on a Simple Loss',
    titleKn: 'ಒಂದು ಸರಳ Loss ಮೇಲೆ Gradient Descent',
    problem: "f(w) = (w-3)², f'(w) = 2(w-3)\nStart w=0, run GD for 25 steps:\n\n1. lr=0.1: print w and f(w) every 5 steps. Converges to w=3?\n2. lr=0.9: convergence? Slower/faster?\n3. lr=1.1: does it overshoot and oscillate?\n4. lr=1.5: does it diverge?\n5. Max stable lr < 2/L where L=f''(w)=2. So max lr < 1. Verify experimentally — find the approximate threshold lr where it starts to oscillate.",
    problemKn: "f(w) = (w-3)², f'(w) = 2(w-3)\nw=0 ಇಂದ ಪ್ರಾರಂಭಿಸಿ, 25 ಹಂತಗಳಿಗೆ GD ಚಲಾಯಿಸಿ:\n\n1. lr=0.1: ಪ್ರತಿ 5 ಹಂತಗಳಿಗೆ w ಮತ್ತು f(w) ಪ್ರಿಂಟ್ ಮಾಡಿ. w=3 ಗೆ ಒಮ್ಮುಖವಾಗುತ್ತದೆಯೇ?\n2. lr=0.9: convergence? ನಿಧಾನ/ವೇಗ?\n3. lr=1.1: ಇದು overshoot ಮತ್ತು oscillate ಆಗುತ್ತದೆಯೇ?\n4. lr=1.5: ಇದು ಬೇರೆಯಾಗುತ್ತದೆಯೇ?\n5. ಗರಿಷ್ಠ ಸ್ಥಿರ lr < 2/L, L=2 ಇರುವಾಗ. ಪ್ರಾಯೋಗಿಕವಾಗಿ ಇದನ್ನೂ ಖಚಿತಪಡಿಸಿ — oscillate ಪ್ರಾರಂಭವಾಗುವ ಅಂದಾಜು threshold lr ಕಂಡುಹಿಡಿಯಿರಿ." },
  { phaseId, moduleId: m21, lessonId: l21_0, order: 1, difficulty: 'intermediate',
    title: 'Adam from Scratch',
    titleKn: 'Adam ಅನ್ನೂ ಮೊದಲಿನಿಂದ',
    problem: "Minimize f(w) = w[0]² + 100×w[1]² from w=[5.0,5.0], 200 steps.\n\nAdam:\n  m = β₁m + (1-β₁)g\n  v = β₂v + (1-β₂)g²\n  m̂ = m/(1-β₁ᵗ),  v̂ = v/(1-β₂ᵗ)\n  w = w - lr×m̂/(√v̂+ε)\nUse: lr=0.01, β₁=0.9, β₂=0.999, ε=1e-8\n\n1. Implement Adam\n2. Print w and f(w) every 50 steps\n3. Compare with vanilla SGD (lr=0.01) — which reaches f<0.01 faster?\n4. The 100× curvature ratio makes SGD slow in w[1]. How does Adam's v (per-param RMS) equalize the effective step size?\n5. What happens if β₂=0? (effectively becomes SGD+momentum)",
    problemKn: "w=[5.0,5.0] ಇಂದ, 200 ಹಂತಗಳಲ್ಲಿ f(w) = w[0]² + 100×w[1]² ಕಡಿಮೆ ಮಾಡಿ.\n\nAdam:\n  m = β₁m + (1-β₁)g\n  v = β₂v + (1-β₂)g²\n  m̂ = m/(1-β₁ᵗ),  v̂ = v/(1-β₂ᵗ)\n  w = w - lr×m̂/(√v̂+ε)\n\n1. Adam ಜಾರಿಗೊಳಿಸಿ\n2. ಪ್ರತಿ 50 ಹಂತಗಳಿಗೆ w ಮತ್ತು f(w) ಪ್ರಿಂಟ್ ಮಾಡಿ\n3. vanilla SGD ಜೊತೆ ಹೋಲಿಸಿ — ಯಾವುದೂ f<0.01 ಗೆ ವೇಗವಾಗಿ ತಲುಪುತ್ತದೆ?\n4. Adam ya v ಪ್ರತಿ-param ಪರಿಣಾಮಕಾರಿ step size ಅನ್ನೂ ಹೇಗೆ ಸಮೀಕರಿಸುತ್ತದೆ?\n5. β₂=0 ಆದರೆ ಏನಾಗುತ್ತದೆ?" },
  { phaseId, moduleId: m21, lessonId: l21_0, order: 2, difficulty: 'advanced',
    title: 'Saddle Points and Escape Dynamics',
    titleKn: 'Saddle Points ಮತ್ತು Escape Dynamics',
    problem: "f(w0,w1) = w0² - w1²  (saddle at origin)\n∂f/∂w0 = 2w0,  ∂f/∂w1 = -2w1\n\n1. Starting at (0.001, 0.001), run GD (lr=0.1) for 50 steps. Print every 10 steps. What happens to each coordinate?\n2. Add momentum (γ=0.9). Same start. Does it escape faster?\n3. The Hessian at (0,0): H=[[2,0],[0,-2]]. Eigenvalues: +2 (ascent direction), -2 (descent direction). At a true minimum, what sign would all eigenvalues be?\n4. In deep networks, true local minima are rare. Most critical points are saddle points with many negative eigenvalues. What does this mean for training?\n5. Noise helps escape saddles. Add Gaussian noise N(0,0.01) to gradients each step. Does noisy GD escape the saddle at (0.001,0.001) faster than vanilla GD? Run 5 trials and report average escape steps.",
    problemKn: "f(w0,w1) = w0² - w1²  (origin ನಲ್ಲಿ saddle)\n\n1. (0.001, 0.001) ಇಂದ ಪ್ರಾರಂಭಿಸಿ, 50 ಹಂತಗಳಿಗೆ GD (lr=0.1) ಚಲಾಯಿಸಿ. ಪ್ರತಿ coordinate ಗೆ ಏನಾಗುತ್ತದೆ?\n2. Momentum (γ=0.9) ಸೇರಿಸಿ. ಅದೇ ಪ್ರಾರಂಭ. ಇದು ವೇಗವಾಗಿ ತಪ್ಪಿಸಿಕೊಳ್ಳುತ್ತದೆಯೇ?\n3. (0,0) ನಲ್ಲಿ Hessian: eigenvalues +2 ಮತ್ತು -2. ಒಂದು ನಿಜ minimum ನಲ್ಲಿ, ಎಲ್ಲಾ eigenvalues ya ಚಿಹ್ನೆ ಏನಿರುತ್ತದೆ?\n4. ಆಳವಾದ networks ನಲ್ಲಿ, ನಿಜ local minima ಅಪರೂಪ. ಇದು training ಗೆ ಏನನ್ನೂ ಅರ್ಥೈಸುತ್ತದೆ?\n5. Noise saddles ತಪ್ಪಿಸಿಕೊಳ್ಳಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ. ಪ್ರತಿ ಹಂತಕ್ಕೆ gradients ಗೆ Gaussian noise ಸೇರಿಸಿ." },

  // Module 22, Lesson 0
  { phaseId, moduleId: m22, lessonId: l22_0, order: 0, difficulty: 'beginner',
    title: 'Entropy Calculations',
    titleKn: 'Entropy ಲೆಕ್ಕಾಚಾರಗಳು',
    problem: "Shannon entropy: H(P) = -Σ P(x)×log₂(P(x))\n\nCompute entropy of:\n1. Fair coin: P=[0.5,0.5]\n2. Biased coin: P=[0.9,0.1]\n3. Fair die: P=[1/6]*6\n4. Certain outcome: P=[1.0,0.0,0.0]\n\nQuestions:\n5. Write entropy(p_list) in Python. Plot binary entropy H([p,1-p]) for p in {0.1,0.2,...,0.9} as a text bar chart. At which p is entropy maximum?",
    problemKn: "Shannon entropy: H(P) = -Σ P(x)×log₂(P(x))\n\nಇವುಗಳ entropy ಲೆಕ್ಕಹಾಕಿ:\n1. Fair coin: P=[0.5,0.5]\n2. Biased coin: P=[0.9,0.1]\n3. Fair die: P=[1/6]*6\n4. Certain outcome: P=[1.0,0.0,0.0]\n\nಪ್ರಶ್ನೆಗಳು:\n5. Python ನಲ್ಲಿ entropy(p_list) ಬರೆಯಿರಿ. binary entropy ಅನ್ನೂ p ya ವಿವಿಧ ಮೌಲ್ಯಗಳಿಗೆ ಒಂದು text bar chart ಆಗಿ ಪ್ಲಾಟ್ ಮಾಡಿ. ಯಾವ p ನಲ್ಲಿ entropy ಗರಿಷ್ಠ?" },
  { phaseId, moduleId: m22, lessonId: l22_0, order: 1, difficulty: 'intermediate',
    title: 'KL Divergence as Model Evaluation',
    titleKn: 'Model Evaluation ಆಗಿ KL Divergence',
    problem: "True distribution P = [0.40, 0.30, 0.20, 0.10]  (4 classes)\nModel Q1 = [0.35, 0.30, 0.25, 0.10]\nModel Q2 = [0.10, 0.10, 0.40, 0.40]  (wrong about main class)\n\n1. KL(P||Q1) = Σ P(x)×log(P(x)/Q(x))\n2. KL(P||Q2)\n3. Cross-entropy H(P,Q) = -Σ P(x)×log(Q(x)). Compute for Q1 and Q2.\n4. Verify: H(P,Q) = H(P) + KL(P||Q)\n5. If Q2 assigned 0 probability to the top class: Q2[0]=0. What happens to KL(P||Q2)? Why does this motivate label smoothing?",
    problemKn: "True distribution P = [0.40, 0.30, 0.20, 0.10]  (4 classes)\nModel Q1 = [0.35, 0.30, 0.25, 0.10]\nModel Q2 = [0.10, 0.10, 0.40, 0.40]  (ಮುಖ್ಯ class ಬಗ್ಗೆ ತಪ್ಪಾಗಿದೆ)\n\n1. KL(P||Q1) ಲೆಕ್ಕಹಾಕಿ\n2. KL(P||Q2) ಲೆಕ್ಕಹಾಕಿ\n3. Cross-entropy H(P,Q) ಅನ್ನೂ Q1 ಮತ್ತು Q2 ಗೆ ಲೆಕ್ಕಹಾಕಿ.\n4. ಖಚಿತಪಡಿಸಿ: H(P,Q) = H(P) + KL(P||Q)\n5. Q2 ಮುಖ್ಯ class ಗೆ 0 probability ನಿಯೋಜಿಸಿದರೆ, KL(P||Q2) ಗೆ ಏನಾಗುತ್ತದೆ? ಇದು label smoothing ಗೆ ಏಕೆ ಪ್ರೇರೇಪಿಸುತ್ತದೆ?" },
  { phaseId, moduleId: m22, lessonId: l22_0, order: 2, difficulty: 'advanced',
    title: 'Huffman-style Code Design',
    titleKn: 'Huffman-style Code ವಿನ್ಯಾಸ',
    problem: "Weather forecast frequencies:\n  Sunny:50%, Cloudy:25%, Rainy:15%, Snowy:8%, Foggy:2%\n\n1. Compute the entropy H of this distribution\n2. Assign prefix codes (shorter for more frequent):\n   e.g. Sunny=0, Cloudy=10, Rainy=110, Snowy=1110, Foggy=1111\n3. Compute average code length: Σ P(symbol)×len(code(symbol))\n4. Is average length close to entropy? (Source coding theorem: average ≥ H)\n5. For 1 million weather reports: how many bits with your code? With fixed-length (⌈log₂(5)⌉=3 bits)? How many bits saved?",
    problemKn: "Weather forecast frequencies:\n  Sunny:50%, Cloudy:25%, Rainy:15%, Snowy:8%, Foggy:2%\n\n1. ಈ distribution ya entropy H ಲೆಕ್ಕಹಾಕಿ\n2. prefix codes ನಿಯೋಜಿಸಿ (ಹೆಚ್ಚು ಆಗಾಗ ಸಂಭವಿಸುವುದಕ್ಕೆ ಚಿಕ್ಕದು)\n3. ಸರಾಸರಿ code length ಲೆಕ್ಕಹಾಕಿ\n4. ಸರಾಸರಿ ಉದ್ದ entropy ಗೆ ಹತ್ತಿರವಿದೆಯೇ?\n5. 10 ಲಕ್ಷ weather reports ಗೆ: ನಿಮ್ಮ code ಜೊತೆ ಎಷ್ಟು bits? fixed-length ಜೊತೆ? ಎಷ್ಟು bits ಉಳಿಸಲಾಗಿದೆ?" },

  // Module 22, Lesson 1
  { phaseId, moduleId: m22, lessonId: l22_1, order: 0, difficulty: 'beginner',
    title: 'Softmax and Cross-Entropy',
    titleKn: 'Softmax ಮತ್ತು Cross-Entropy',
    problem: "Logits z = [2.0, 1.0, 0.1], true label: class 0.\n\n1. Softmax: P(k) = exp(z_k) / Σ exp(z_j)\n2. Cross-entropy loss: L = -log(P[0])\n3. Repeat with z = [5.0, 1.0, 0.1] (more confident correct). Lower loss?\n4. Repeat with z = [0.0, 5.0, 0.1] (confident wrong). Higher loss?\n5. What is L when the model predicts P[0]=1.0 exactly (perfect)? What is L when P[0]=1e-10 (certain wrong)? Why does -log catch both extremes?",
    problemKn: "Logits z = [2.0, 1.0, 0.1], true label: class 0.\n\n1. Softmax ಲೆಕ್ಕಹಾಕಿ\n2. Cross-entropy loss ಲೆಕ್ಕಹಾಕಿ\n3. z = [5.0, 1.0, 0.1] ಜೊತೆ ಪುನರಾವರ್ತಿಸಿ. ಕಡಿಮೆ loss?\n4. z = [0.0, 5.0, 0.1] ಜೊತೆ ಪುನರಾವರ್ತಿಸಿ. ಹೆಚ್ಚಿನ loss?\n5. model P[0]=1.0 ನಿಖರವಾಗಿ ಊಹಿಸಿದಾಗ L ಏನು? P[0]=1e-10 ಆದಾಗ L ಏನು? -log ಎರಡೂ ತೀವ್ರತೆಗಳನ್ನೂ ಏಕೆ ಸೆರೆಹಿಡಿಯುತ್ತದೆ?" },
  { phaseId, moduleId: m22, lessonId: l22_1, order: 1, difficulty: 'intermediate',
    title: 'CE Minimum Equals Q=P',
    titleKn: 'CE Minimum Q=P ಗೆ ಸಮ',
    problem: "P=[0.7,0.3] fixed, Q=[q,1-q] is the model.\n\n1. Write H(P,Q) = -0.7×log(q) - 0.3×log(1-q)\n2. Write KL(P||Q) = 0.7×log(0.7/q) + 0.3×log(0.3/(1-q))\n3. Evaluate both at q=0.5, q=0.7, q=0.9\n4. Find the minimum of H(P,Q) by setting dH/dq=0. Solve for q.\n5. Prove algebraically: minimizing H(P,Q) is equivalent to minimizing KL(P||Q) when P is fixed (show they differ by H(P), a constant w.r.t. q).",
    problemKn: "P=[0.7,0.3] ಸ್ಥಿರ, Q=[q,1-q] model.\n\n1. H(P,Q) ಬರೆಯಿರಿ\n2. KL(P||Q) ಬರೆಯಿರಿ\n3. q=0.5, q=0.7, q=0.9 ನಲ್ಲಿ ಎರಡನ್ನೂ ಮೌಲ್ಯಮಾಪನ ಮಾಡಿ\n4. dH/dq=0 ಇಡುವ ಮೂಲಕ H(P,Q) ya minimum ಕಂಡುಹಿಡಿಯಿರಿ.\n5. algebraically ಸಾಬೀತುಪಡಿಸಿ: P ಸ್ಥಿರವಾಗಿದ್ದಾಗ H(P,Q) ಕಡಿಮೆ ಮಾಡುವುದೂ KL(P||Q) ಕಡಿಮೆ ಮಾಡುವುದಕ್ಕೆ ಸಮ." },
  { phaseId, moduleId: m22, lessonId: l22_1, order: 2, difficulty: 'advanced',
    title: 'Label Smoothing vs Hard Labels',
    titleKn: 'Label Smoothing vs Hard Labels',
    problem: "Hard label (4 classes, true=1): y_hard = [0,1,0,0]\nSmooth label (ε=0.1): y_smooth = [0.025, 0.925, 0.025, 0.025]\n\nTwo model predictions:\n  q_good   = [0.05, 0.90, 0.03, 0.02]\n  q_overfit= [0.001, 0.997, 0.001, 0.001]\n\n1. CE(y_hard, q_good) and CE(y_hard, q_overfit)\n2. CE(y_smooth, q_good) and CE(y_smooth, q_overfit)\n3. Which loss penalizes q_overfit more — hard or smooth labels?\n4. Implement KL(y_smooth || q) for both predictions\n5. Derive mathematically: with smooth labels, the model is penalized for assigning 0 to any class. Why? (What happens to CE when q[k]=0 but y_smooth[k]=0.025>0?)",
    problemKn: "Hard label (4 classes, true=1): y_hard = [0,1,0,0]\nSmooth label (ε=0.1): y_smooth = [0.025, 0.925, 0.025, 0.025]\n\nಎರಡು model predictions:\n  q_good   = [0.05, 0.90, 0.03, 0.02]\n  q_overfit= [0.001, 0.997, 0.001, 0.001]\n\n1. CE(y_hard, q_good) ಮತ್ತು CE(y_hard, q_overfit) ಲೆಕ್ಕಹಾಕಿ\n2. CE(y_smooth, q_good) ಮತ್ತು CE(y_smooth, q_overfit) ಲೆಕ್ಕಹಾಕಿ\n3. ಯಾವ loss q_overfit ಅನ್ನೂ ಹೆಚ್ಚು ದಂಡಿಸುತ್ತದೆ?\n4. ಎರಡೂ predictions ಗೆ KL(y_smooth || q) ಜಾರಿಗೊಳಿಸಿ\n5. ಗಣಿತೀಯವಾಗಿ ಪಡೆಯಿರಿ: smooth labels ಜೊತೆ, model ಯಾವುದೇ class ಗೆ 0 ನಿಯೋಜಿಸಲು ದಂಡಿಸಲ್ಪಡುತ್ತದೆ. ಏಕೆ?" },

  // Module 22, Lesson 2
  { phaseId, moduleId: m22, lessonId: l22_2, order: 0, difficulty: 'beginner',
    title: 'Joint and Conditional Entropy',
    titleKn: 'Joint ಮತ್ತು Conditional Entropy',
    problem: "X=weather (0=sunny,1=rainy), Y=umbrella (0=no,1=yes)\nJoint: P(0,0)=0.45, P(0,1)=0.05, P(1,0)=0.10, P(1,1)=0.40\n\n1. Marginal P(X) and P(Y) by summing\n2. H(X), H(Y), H(X,Y) — joint entropy\n3. Conditional H(Y|X) = H(X,Y) - H(X)\n4. Is H(Y|X) < H(Y)? What does that tell you?\n5. Mutual information I(X;Y) = H(Y) - H(Y|X). If X and Y were independent, what would I(X;Y) be?",
    problemKn: "X=weather (0=sunny,1=rainy), Y=umbrella (0=no,1=yes)\nJoint: P(0,0)=0.45, P(0,1)=0.05, P(1,0)=0.10, P(1,1)=0.40\n\n1. ಸೇರಿಸುವ ಮೂಲಕ Marginal P(X) ಮತ್ತು P(Y) ಲೆಕ್ಕಹಾಕಿ\n2. H(X), H(Y), H(X,Y) — joint entropy ಲೆಕ್ಕಹಾಕಿ\n3. Conditional H(Y|X) ಲೆಕ್ಕಹಾಕಿ\n4. H(Y|X) < H(Y) ಆಗಿದೆಯೇ? ಇದು ಏನನ್ನೂ ಹೇಳುತ್ತದೆ?\n5. Mutual information I(X;Y) ಲೆಕ್ಕಹಾಕಿ. X ಮತ್ತು Y ಸ್ವತಂತ್ರವಾಗಿದ್ದರೆ, I(X;Y) ಏನಾಗಿರುತ್ತಿತ್ತು?" },
  { phaseId, moduleId: m22, lessonId: l22_2, order: 1, difficulty: 'intermediate',
    title: 'Mutual Information for Feature Selection',
    titleKn: 'Feature Selection ಗಾಗಿ Mutual Information',
    problem: "Word \"free\" in spam detection:\n  P(w=1,y=1)=0.30, P(w=1,y=0)=0.05, P(w=0,y=1)=0.20, P(w=0,y=0)=0.45\nWord \"meeting\":\n  P(w=1,y=1)=0.02, P(w=1,y=0)=0.25, P(w=0,y=1)=0.48, P(w=0,y=0)=0.25\n\n1. Compute I(\"free\";Y) = H(Y) - H(Y|W=\"free\") from the joint table\n2. Compute I(\"meeting\";Y) similarly\n3. Which word is more predictive of spam?\n4. PMI(w,y) = log(P(w,y)/(P(w)×P(y))) — compute for (free,spam), (free,ham), (meeting,ham)\n5. Negative PMI means the word repels that label. Which word-label pair has the strongest negative PMI?",
    problemKn: "Word \"free\" spam detection ನಲ್ಲಿ:\n  P(w=1,y=1)=0.30, P(w=1,y=0)=0.05, P(w=0,y=1)=0.20, P(w=0,y=0)=0.45\nWord \"meeting\":\n  P(w=1,y=1)=0.02, P(w=1,y=0)=0.25, P(w=0,y=1)=0.48, P(w=0,y=0)=0.25\n\n1. joint table ಇಂದ I(\"free\";Y) ಲೆಕ್ಕಹಾಕಿ\n2. I(\"meeting\";Y) ಅನ್ನೂ ಅದೇ ರೀತಿ ಲೆಕ್ಕಹಾಕಿ\n3. ಯಾವ word spam ya ಹೆಚ್ಚು ಭವಿಷ್ಯಸೂಚಕ?\n4. PMI(w,y) ಲೆಕ್ಕಹಾಕಿ\n5. ಋಣಾತ್ಮಕ PMI ಎಂದರೆ word ಆ label ಅನ್ನೂ ಹಿಮ್ಮೆಟ್ಟಿಸುತ್ತದೆ. ಯಾವ word-label ಜೋಡಿ ಅತ್ಯಂತ ಬಲಶಾಲಿ ಋಣಾತ್ಮಕ PMI ಹೊಂದಿದೆ?" },
  { phaseId, moduleId: m22, lessonId: l22_2, order: 2, difficulty: 'advanced',
    title: 'Information Gain in Decision Trees',
    titleKn: 'Decision Trees ನಲ್ಲಿ Information Gain',
    problem: "Decision tree splits on features that maximize Information Gain:\n  IG(Y, X) = H(Y) - H(Y|X)\n\nDataset (20 samples): predict if a loan defaults (Y=1=default)\n  Feature A (income > 50k): 12 have high income (2 default), 8 have low (6 default)\n  Feature B (owns car): 10 own car (3 default), 10 don't (5 default)\n\n1. Compute H(Y) for the full dataset (P(default) = 8/20)\n2. For Feature A: compute H(Y|A=high) and H(Y|A=low), then H(Y|A) = P(high)×H(Y|A=high) + P(low)×H(Y|A=low)\n3. IG(Y,A) = H(Y) - H(Y|A). Repeat for Feature B.\n4. Which feature should the decision tree split on first?\n5. Implement information_gain(y, feature) in Python and apply to both features.",
    problemKn: "Decision tree Information Gain ಗರಿಷ್ಠಗೊಳಿಸುವ features ಮೇಲೆ split ಮಾಡುತ್ತದೆ:\n  IG(Y, X) = H(Y) - H(Y|X)\n\nDataset (20 samples): ಒಂದು loan default ಆಗುತ್ತದೆಯೇ ಎಂದು ಊಹಿಸಿ\n  Feature A (income > 50k): 12 ಹೆಚ್ಚಿನ income (2 default), 8 ಕಡಿಮೆ (6 default)\n  Feature B (owns car): 10 car ಹೊಂದಿದ್ದಾರೆ (3 default), 10 ಇಲ್ಲ (5 default)\n\n1. ಪೂರ್ಣ dataset ಗೆ H(Y) ಲೆಕ್ಕಹಾಕಿ\n2. Feature A ಗೆ: H(Y|A=high) ಮತ್ತು H(Y|A=low) ಲೆಕ್ಕಹಾಕಿ, ನಂತರ H(Y|A) ಲೆಕ್ಕಹಾಕಿ\n3. IG(Y,A) ಲೆಕ್ಕಹಾಕಿ. Feature B ಗೆ ಪುನರಾವರ್ತಿಸಿ.\n4. ಯಾವ feature ಮೇಲೆ decision tree ಮೊದಲು split ಮಾಡಬೇಕು?\n5. Python ನಲ್ಲಿ information_gain(y, feature) ಜಾರಿಗೊಳಿಸಿ ಮತ್ತು ಎರಡೂ features ಗೆ ಅನ್ವಯಿಸಿ." },

  // Module 22, Lesson 3
  { phaseId, moduleId: m22, lessonId: l22_3, order: 0, difficulty: 'beginner',
    title: 'Perplexity Computation',
    titleKn: 'Perplexity Computation',
    problem: "Language model probabilities for 6 test tokens:\n  P = [0.12, 0.08, 0.15, 0.20, 0.25, 0.10]\n\n1. NLL (nats): -(1/n) × Σ log(Pᵢ)\n2. Perplexity: exp(NLL)\n3. Convert NLL to bits: multiply by 1/log(2). What is bits-per-token?\n4. A uniform model over vocab size V has perplexity = V. Verify this for V=100.\n5. Model A: perplexity=45. Model B: perplexity=120. How many more bits per word does B \"not know\" vs A? (bits_B - bits_A = log₂(B/A))",
    problemKn: "6 test tokens ಗೆ Language model probabilities:\n  P = [0.12, 0.08, 0.15, 0.20, 0.25, 0.10]\n\n1. NLL (nats) ಲೆಕ್ಕಹಾಕಿ\n2. Perplexity ಲೆಕ್ಕಹಾಕಿ\n3. NLL ಅನ್ನೂ bits ಗೆ ಪರಿವರ್ತಿಸಿ. bits-per-token ಏನು?\n4. vocab size V ಮೇಲೆ ಒಂದು uniform model perplexity = V ಹೊಂದಿದೆ. V=100 ಗೆ ಇದನ್ನೂ ಖಚಿತಪಡಿಸಿ.\n5. Model A: perplexity=45. Model B: perplexity=120. B A ಗಿಂತ ಪ್ರತಿ word ಗೆ ಎಷ್ಟು ಹೆಚ್ಚು bits \"ಗೊತ್ತಿಲ್ಲ\"?" },
  { phaseId, moduleId: m22, lessonId: l22_3, order: 1, difficulty: 'intermediate',
    title: 'NLL = Cross-Entropy Equivalence',
    titleKn: 'NLL = Cross-Entropy Equivalence',
    problem: "Sentence: \"the cat sat\" — model assigns:\n  P(\"the\")=0.20, P(\"cat\"|\"the\")=0.05, P(\"sat\"|prev)=0.10\n\n1. NLL = -(1/3)×(log(0.20)+log(0.05)+log(0.10))\n2. One-hot CE: for each token, CE = -log(P[true_token]). Average the 3 CEs.\n3. Show NLL == avg CE\n4. A 200-word paragraph with avg log-prob = -4.0 nats/word. Compute perplexity.\n5. Model trained on Wikipedia (perplexity 45) tested on legal text (perplexity 180). Ratio = 4×. How many extra bits per token does the domain shift cost?",
    problemKn: "Sentence: \"the cat sat\" — model ನಿಯೋಜಿಸುತ್ತದೆ:\n  P(\"the\")=0.20, P(\"cat\"|\"the\")=0.05, P(\"sat\"|prev)=0.10\n\n1. NLL ಲೆಕ್ಕಹಾಕಿ\n2. One-hot CE: ಪ್ರತಿ token ಗೆ, CE = -log(P[true_token]). 3 CEs ya ಸರಾಸರಿ ತೆಗೆದುಕೊಳ್ಳಿ.\n3. NLL == avg CE ಎಂದು ತೋರಿಸಿ\n4. avg log-prob = -4.0 nats/word ಇರುವ ಒಂದು 200-word paragraph ಗೆ perplexity ಲೆಕ್ಕಹಾಕಿ.\n5. Wikipedia ಮೇಲೆ train ಆದ model (perplexity 45) legal text ಮೇಲೆ test ಮಾಡಿದೆ (perplexity 180). domain shift ಪ್ರತಿ token ಗೆ ಎಷ್ಟು ಹೆಚ್ಚುವರಿ bits ವೆಚ್ಚ ಮಾಡುತ್ತದೆ?" },
  { phaseId, moduleId: m22, lessonId: l22_3, order: 2, difficulty: 'advanced',
    title: 'Label Smoothing and NLL',
    titleKn: 'Label Smoothing ಮತ್ತು NLL',
    problem: "Vocabulary size V=1000. Model assigns P[true]=0.997, uniform 0.000003 to others.\n\nHard label CE:   L_hard = -log(0.997)\nSmooth CE (ε=0.1): y_smooth[true]=1-ε+(ε/V), y_smooth[others]=ε/V\n  L_smooth = -y_smooth[true]×log(0.997) - (V-1)×(ε/V)×log(1/V + tiny)\n\n1. Compute L_hard\n2. Compute y_smooth[true] and y_smooth[other] for ε=0.1, V=1000\n3. Compute L_smooth\n4. Which loss is higher for this overconfident prediction? (Smooth should penalize it more)\n5. Implement compute_ce_loss(logits, true_idx, smooth_eps, vocab_size) that handles both hard (eps=0) and smooth (eps>0) cases.",
    problemKn: "Vocabulary size V=1000. Model P[true]=0.997 ನಿಯೋಜಿಸುತ್ತದೆ.\n\nHard label CE:   L_hard = -log(0.997)\nSmooth CE (ε=0.1): y_smooth[true]=1-ε+(ε/V), y_smooth[others]=ε/V\n\n1. L_hard ಲೆಕ್ಕಹಾಕಿ\n2. ε=0.1, V=1000 ಗೆ y_smooth[true] ಮತ್ತು y_smooth[other] ಲೆಕ್ಕಹಾಕಿ\n3. L_smooth ಲೆಕ್ಕಹಾಕಿ\n4. ಈ overconfident prediction ಗೆ ಯಾವ loss ಹೆಚ್ಚು?\n5. compute_ce_loss(logits, true_idx, smooth_eps, vocab_size) ಜಾರಿಗೊಳಿಸಿ, ಎರಡೂ hard ಮತ್ತು smooth ಪ್ರಕರಣಗಳನ್ನೂ ನಿಭಾಯಿಸುತ್ತದೆ." },

  // Module 23, Lesson 0
  { phaseId, moduleId: m23, lessonId: l23_0, order: 0, difficulty: 'beginner',
    title: 'PCA Step by Step',
    titleKn: 'PCA ಹಂತ ಹಂತವಾಗಿ',
    problem: "Data: X = [[2,3],[3,4],[4,5],[3,2],[2,4]]\n\n1. Column means: μ = [mean(col0), mean(col1)]\n2. Center: Xc = X - μ (subtract mean from each row)\n3. Covariance: C = (1/(n-1)) × Xcᵀ @ Xc  (2×2 matrix)\n4. For C=[[a,b],[b,d]]: eigenvalues from det(C-λI)=0 → λ²-(a+d)λ+(ad-b²)=0\n5. Which eigenvalue is larger? Its fraction of total variance = λ₁/(λ₁+λ₂). Compute it.",
    problemKn: "Data: X = [[2,3],[3,4],[4,5],[3,2],[2,4]]\n\n1. Column means ಲೆಕ್ಕಹಾಕಿ\n2. Center ಮಾಡಿ: Xc = X - μ\n3. Covariance ಲೆಕ್ಕಹಾಕಿ: C = (1/(n-1)) × Xcᵀ @ Xc\n4. C=[[a,b],[b,d]] ಗೆ: eigenvalues det(C-λI)=0 ಇಂದ ಲೆಕ್ಕಹಾಕಿ\n5. ಯಾವ eigenvalue ದೊಡ್ಡದು? ಒಟ್ಟು variance ya ಅದರ ಭಾಗ ಲೆಕ್ಕಹಾಕಿ." },
  { phaseId, moduleId: m23, lessonId: l23_0, order: 1, difficulty: 'intermediate',
    title: 'Curse of Dimensionality',
    titleKn: 'Curse of Dimensionality',
    problem: "Demonstrate distance concentration in high dimensions.\n\nFor d = 2, 5, 10, 20, 50:\n1. Generate 200 random points in [-1,1]^d using random.uniform(-1,1)\n2. Compute all pairwise distances (L2)\n3. Record: mean_dist, min_dist, max_dist\n4. Compute concentration ratio: (max_dist - min_dist) / mean_dist\n5. What happens to this ratio as d increases? Why does this make nearest-neighbor search unreliable in high dimensions? Print a table: d | mean | min | max | ratio",
    problemKn: "ಹೆಚ್ಚಿನ dimensions ನಲ್ಲಿ distance concentration ಪ್ರದರ್ಶಿಸಿ.\n\nd = 2, 5, 10, 20, 50 ಗೆ:\n1. [-1,1]^d ನಲ್ಲಿ 200 random points ಉತ್ಪಾದಿಸಿ\n2. ಎಲ್ಲಾ pairwise distances (L2) ಲೆಕ್ಕಹಾಕಿ\n3. ದಾಖಲಿಸಿ: mean_dist, min_dist, max_dist\n4. concentration ratio ಲೆಕ್ಕಹಾಕಿ\n5. d ಹೆಚ್ಚಾದಂತೆ ಈ ratio ಗೆ ಏನಾಗುತ್ತದೆ? ಇದು ಹೆಚ್ಚಿನ dimensions ನಲ್ಲಿ nearest-neighbor search ಅನ್ನೂ ಏಕೆ ಅವಿಶ್ವಾಸಾರ್ಹಗೊಳಿಸುತ್ತದೆ?" },
  { phaseId, moduleId: m23, lessonId: l23_0, order: 2, difficulty: 'advanced',
    title: 'When to Use PCA vs t-SNE vs UMAP',
    titleKn: 'ಯಾವಾಗ PCA vs t-SNE vs UMAP ಬಳಸಬೇಕು',
    problem: "Three scenarios — choose the best method and justify:\n\nScenario A: 50,000 customer purchase vectors (100D). You want to reduce to 2D for visualization to find customer segments. Speed matters (minutes, not hours). Training set will change weekly.\n\nScenario B: 10,000 MNIST digit images (784D) → 2D plot to show that CNNs learn meaningful clusters. One-time analysis, quality matters more than speed.\n\nScenario C: Gene expression data (20,000 genes, 500 patients). Reduce to 50D for downstream logistic regression. Must be reproducible and interpretable.\n\n1. For each: select PCA / t-SNE / UMAP and explain why.\n2. For Scenario C: implement PCA to reduce from 20000D to 50D. How many singular values do you compute? What is the compression ratio?\n3. For Scenario B: explain what hyperparameter in t-SNE most affects whether local clusters are tight or spread out, and what values to try.",
    problemKn: "ಮೂರು ಸನ್ನಿವೇಶಗಳು — ಅತ್ಯುತ್ತಮ ವಿಧಾನ ಆಯ್ಕೆ ಮಾಡಿ ಮತ್ತು ಸಮರ್ಥಿಸಿ:\n\nSnario A: 50,000 customer purchase vectors (100D). customer segments ಕಂಡುಹಿಡಿಯಲು 2D ಗೆ ಕಡಿಮೆ ಮಾಡಬೇಕು. ವೇಗ ಮುಖ್ಯ.\n\nScenario B: 10,000 MNIST digit images (784D) → CNNs ಅರ್ಥಪೂರ್ಣ clusters ಕಲಿಯುತ್ತವೆ ಎಂದು ತೋರಿಸಲು 2D plot. One-time ವಿಶ್ಲೇಷಣೆ, quality ವೇಗಕ್ಕಿಂತ ಮುಖ್ಯ.\n\nScenario C: Gene expression data. downstream logistic regression ಗೆ 50D ಗೆ ಕಡಿಮೆ ಮಾಡಬೇಕು. reproducible ಮತ್ತು interpretable ಆಗಿರಬೇಕು.\n\n1. ಪ್ರತಿಯೊಂದಕ್ಕೂ: PCA / t-SNE / UMAP ಆಯ್ಕೆ ಮಾಡಿ ಮತ್ತು ಏಕೆ ಎಂದು ವಿವರಿಸಿ.\n2. Scenario C ಗೆ: 20000D ಇಂದ 50D ಗೆ ಕಡಿಮೆ ಮಾಡಲು PCA ಜಾರಿಗೊಳಿಸಿ.\n3. Scenario B ಗೆ: t-SNE ನಲ್ಲಿ ಯಾವ hyperparameter local clusters ಬಿಗಿಯಾಗಿ ಅಥವಾ ಹರಡಿ ಇರುತ್ತವೆ ಎಂಬುದನ್ನೂ ಅತ್ಯಂತ ಬಾಧಿಸುತ್ತದೆ ಎಂದು ವಿವರಿಸಿ." },

  // Module 23, Lesson 1
  { phaseId, moduleId: m23, lessonId: l23_1, order: 0, difficulty: 'beginner',
    title: 'High-D to Low-D Probabilities',
    titleKn: 'High-D ಇಂದ Low-D Probabilities',
    problem: "4 points in 1D: x=[0, 1, 5, 6]. σ=1.0\nGaussian affinity: a(i,j) = exp(-|xᵢ-xⱼ|²/2)\n\n1. Compute all pairwise affinities a(i,j) for i≠j\n2. Normalize row-wise: p(j|i) = a(i,j) / Σₖ≠ᵢ a(i,k)\n3. Symmetrize: p(i,j) = (p(j|i)+p(i|j)) / (2n)\n4. Which pairs have the highest p(i,j)? Lowest? Does this reflect the data geometry?\n5. The points 0,1 are close and 5,6 are close. Does p(i,j) reflect both clusters? What happens to the long-range pair (0,6)?",
    problemKn: "1D ನಲ್ಲಿ 4 points: x=[0, 1, 5, 6]. σ=1.0\nGaussian affinity: a(i,j) = exp(-|xᵢ-xⱼ|²/2)\n\n1. i≠j ಗೆ ಎಲ್ಲಾ pairwise affinities a(i,j) ಲೆಕ್ಕಹಾಕಿ\n2. Row-wise normalize ಮಾಡಿ: p(j|i)\n3. Symmetrize ಮಾಡಿ: p(i,j)\n4. ಯಾವ ಜೋಡಿಗಳು ಗರಿಷ್ಠ p(i,j) ಹೊಂದಿವೆ? ಕನಿಷ್ಠ? ಇದು data geometry ಪ್ರತಿಬಿಂಬಿಸುತ್ತದೆಯೇ?\n5. points 0,1 ಹತ್ತಿರವಾಗಿವೆ ಮತ್ತು 5,6 ಹತ್ತಿರವಾಗಿವೆ. p(i,j) ಎರಡೂ clusters ಪ್ರತಿಬಿಂಬಿಸುತ್ತದೆಯೇ? long-range ಜೋಡಿ (0,6) ಗೆ ಏನಾಗುತ್ತದೆ?" },
  { phaseId, moduleId: m23, lessonId: l23_1, order: 1, difficulty: 'intermediate',
    title: 'Student-t Heavy Tails',
    titleKn: 'Student-t Heavy Tails',
    problem: "Compare Gaussian vs Student-t kernel decay:\n  Gaussian: q_G(d) = exp(-d²)\n  Student-t: q_t(d) = 1/(1+d²)\n\n1. Compute both at d=0.5, 1, 2, 3, 4, 5\n2. Ratio q_G/q_t at each d — does the Gaussian drop off faster?\n3. For two points far apart (d=3): t-SNE in 2D uses Student-t. The Gaussian in high-D already made them far. How does the heavier tail allow the 2D model to place them further apart without infinite force?\n4. The \"crowding problem\": in high-D, many points can be at distance d. In 2D, far fewer can. Why does this cause all non-neighbor clusters to collapse together with a Gaussian kernel?\n5. Implement both kernels and plot their values for d in range(0,6,0.5) as a text table.",
    problemKn: "Gaussian vs Student-t kernel decay ಹೋಲಿಸಿ:\n  Gaussian: q_G(d) = exp(-d²)\n  Student-t: q_t(d) = 1/(1+d²)\n\n1. d=0.5, 1, 2, 3, 4, 5 ನಲ್ಲಿ ಎರಡನ್ನೂ ಲೆಕ್ಕಹಾಕಿ\n2. ಪ್ರತಿ d ನಲ್ಲಿ ratio q_G/q_t — Gaussian ವೇಗವಾಗಿ ಇಳಿಯುತ್ತದೆಯೇ?\n3. ದೂರ ಇರುವ ಎರಡು ಬಿಂದುಗಳಿಗೆ: heavier tail 2D model ಗೆ ಅವುಗಳನ್ನೂ ಹೇಗೆ ದೂರವಿಡಲು ಅನುಮತಿಸುತ್ತದೆ?\n4. \"crowding problem\": ಇದು Gaussian kernel ಜೊತೆ ಎಲ್ಲಾ non-neighbor clusters ಅನ್ನೂ ಒಟ್ಟಿಗೆ ಕುಸಿಯುವಂತೆ ಏಕೆ ಮಾಡುತ್ತದೆ?\n5. ಎರಡೂ kernels ಜಾರಿಗೊಳಿಸಿ ಮತ್ತು d ya ಮೌಲ್ಯಗಳಿಗೆ ಒಂದು text table ಆಗಿ ಪ್ಲಾಟ್ ಮಾಡಿ." },
  { phaseId, moduleId: m23, lessonId: l23_1, order: 2, difficulty: 'advanced',
    title: 'Perplexity as Effective Neighbors',
    titleKn: 'ಪರಿಣಾಮಕಾರಿ Neighbors ಆಗಿ Perplexity',
    problem: "Perplexity = 2^H where H = -Σ p(j|i)×log₂(p(j|i))\n\nPoint i has 5 neighbors at distances [0.5, 1.0, 2.0, 5.0, 10.0], σ=1.0:\n\n1. Compute p(j|i) ∝ exp(-dᵢⱼ²/2σ²) for each neighbor, then normalize\n2. Compute Shannon entropy H(Pᵢ) and perplexity\n3. Repeat with σ=0.3 (tight kernel): which neighbors dominate? What is perplexity?\n4. Repeat with σ=3.0 (wide kernel): what happens to perplexity?\n5. Implement binary_search_sigma(distances, target_perplexity) that finds σ such that |perplexity - target| < 0.1 using bisection. Test with target_perplexity=3.",
    problemKn: "Perplexity = 2^H, ಇಲ್ಲಿ H = -Σ p(j|i)×log₂(p(j|i))\n\nPoint i ಗೆ [0.5, 1.0, 2.0, 5.0, 10.0] ದೂರಗಳಲ್ಲಿ 5 neighbors, σ=1.0:\n\n1. ಪ್ರತಿ neighbor ಗೆ p(j|i) ಲೆಕ್ಕಹಾಕಿ, ನಂತರ normalize ಮಾಡಿ\n2. Shannon entropy H(Pᵢ) ಮತ್ತು perplexity ಲೆಕ್ಕಹಾಕಿ\n3. σ=0.3 ಜೊತೆ ಪುನರಾವರ್ತಿಸಿ: ಯಾವ neighbors ಪ್ರಾಬಲ್ಯ ಹೊಂದಿವೆ? perplexity ಏನು?\n4. σ=3.0 ಜೊತೆ ಪುನರಾವರ್ತಿಸಿ: perplexity ಗೆ ಏನಾಗುತ್ತದೆ?\n5. bisection ಬಳಸಿ binary_search_sigma(distances, target_perplexity) ಜಾರಿಗೊಳಿಸಿ." },

  // Module 23, Lesson 2
  { phaseId, moduleId: m23, lessonId: l23_2, order: 0, difficulty: 'beginner',
    title: 'k-NN Graph Construction',
    titleKn: 'k-NN Graph ನಿರ್ಮಾಣ',
    problem: "5 points: p1=[0,0], p2=[1,0], p3=[0,1], p4=[5,5], p5=[5,6]\n\n1. Compute all pairwise L2 distances\n2. For k=2: find the 2 nearest neighbors of each point\n3. Build adjacency list: {p1: [...], p2: [...], ...}\n4. Is the graph symmetric? (if pj is in pi's list, is pi in pj's?)\n5. UMAP fuzzy weight: w(i,j) = exp(-(d(i,j) - ρᵢ)/σᵢ) where ρᵢ=distance to nearest neighbor\n   For p1 with σ=1.0: compute w(p1,p2) and w(p1,p3). Does the nearest neighbor always get weight 1.0?",
    problemKn: "5 points: p1=[0,0], p2=[1,0], p3=[0,1], p4=[5,5], p5=[5,6]\n\n1. ಎಲ್ಲಾ pairwise L2 distances ಲೆಕ್ಕಹಾಕಿ\n2. k=2 ಗೆ: ಪ್ರತಿ ಬಿಂದುವಿನ 2 ಹತ್ತಿರದ neighbors ಕಂಡುಹಿಡಿಯಿರಿ\n3. adjacency list ನಿರ್ಮಿಸಿ\n4. graph symmetric ಆಗಿದೆಯೇ?\n5. UMAP fuzzy weight ಲೆಕ್ಕಹಾಕಿ. ಹತ್ತಿರದ neighbor ಯಾವಾಗಲೂ weight 1.0 ಪಡೆಯುತ್ತದೆಯೇ?" },
  { phaseId, moduleId: m23, lessonId: l23_2, order: 1, difficulty: 'intermediate',
    title: 'UMAP vs t-SNE Structure Preservation',
    titleKn: 'UMAP vs t-SNE Structure Preservation',
    problem: "Three clusters (simplified to 4D):\n  Cluster A: center = [0,0,0,0], 5 points with small noise\n  Cluster B: center = [10,0,0,0], 5 points with small noise\n  Cluster C: center = [0,10,0,0], 5 points with small noise\n\nGenerate:\n  A = [[random.gauss(0,0.1) for _ in range(4)] for _ in range(5)]\n  B = [[random.gauss(10,0.1) if j==0 else random.gauss(0,0.1) for j in range(4)] for _ in range(5)]\n  C = [[random.gauss(10,0.1) if j==1 else random.gauss(0,0.1) for j in range(4)] for _ in range(5)]\n\n1. Compute centroid-centroid distances in 4D: d(A,B), d(A,C), d(B,C)\n2. UMAP preserves these ratios in 2D. t-SNE does not. Which property of UMAP's loss enables this?\n3. For a practical choice: you have 50,000 single-cell RNA sequences (1000D). You want a visualization where similar cell types cluster and the distances between clusters are meaningful. UMAP or t-SNE? Why?\n4. For the same data, you want to use the 2D embedding as input to a downstream classifier. Which would you choose?",
    problemKn: "ಮೂರು clusters (4D ಗೆ ಸರಳೀಕರಿಸಿದ):\n  Cluster A: center = [0,0,0,0]\n  Cluster B: center = [10,0,0,0]\n  Cluster C: center = [0,10,0,0]\n\n1. 4D ನಲ್ಲಿ centroid-centroid distances ಲೆಕ್ಕಹಾಕಿ\n2. UMAP 2D ನಲ್ಲಿ ಈ ratios ಸಂರಕ್ಷಿಸುತ್ತದೆ. t-SNE ಮಾಡುವುದಿಲ್ಲ. UMAP ya loss ya ಯಾವ ಗುಣಲಕ್ಷಣ ಇದನ್ನೂ ಸಕ್ರಿಯಗೊಳಿಸುತ್ತದೆ?\n3. ಪ್ರಾಯೋಗಿಕ ಆಯ್ಕೆಗಾಗಿ: ನಿಮಗೆ 50,000 single-cell RNA sequences (1000D) ಇವೆ. UMAP ಅಥವಾ t-SNE? ಏಕೆ?\n4. ಅದೇ data ಗೆ, downstream classifier ಗೆ 2D embedding ಇನ್ಪುಟ್ ಆಗಿ ಬಳಸಬೇಕು. ಯಾವುದೂ ಆಯ್ಕೆ ಮಾಡುತ್ತೀರಿ?" },
  { phaseId, moduleId: m23, lessonId: l23_2, order: 2, difficulty: 'advanced',
    title: 'UMAP Hyperparameters',
    titleKn: 'UMAP Hyperparameters',
    problem: "UMAP has two key hyperparameters: n_neighbors (k) and min_dist.\n\n  n_neighbors: controls k in the k-NN graph → balances local vs global structure\n  min_dist: controls minimum spread of points in output space → packing density\n\nFor a dataset with 3 tight clusters well-separated in high-D:\n\n1. n_neighbors=3: the k-NN graph will connect points only within each cluster. What does the UMAP embedding look like?\n2. n_neighbors=30: connects across clusters. What changes in the embedding?\n3. min_dist=0.0: points in the same cluster can collapse to single points. Good or bad for visualization?\n4. min_dist=0.9: points spread out even within clusters. What is lost?\n5. Design a grid search: for n_neighbors in [5,15,30] and min_dist in [0.0,0.1,0.5], describe the expected qualitative behavior of the embedding for your 3-cluster dataset. Which combination would you choose for a paper figure?",
    problemKn: "UMAP ಎರಡು ಮುಖ್ಯ hyperparameters ಹೊಂದಿದೆ: n_neighbors (k) ಮತ್ತು min_dist.\n\nಹೆಚ್ಚಿನ-D ನಲ್ಲಿ ಚೆನ್ನಾಗಿ ಪ್ರತ್ಯೇಕಿಸಿದ 3 ಬಿಗಿಯಾದ clusters ಇರುವ ಒಂದು dataset ಗೆ:\n\n1. n_neighbors=3: k-NN graph ಕೇವಲ ಪ್ರತಿ cluster ಒಳಗೆ ಬಿಂದುಗಳನ್ನೂ ಸಂಪರ್ಕಿಸುತ್ತದೆ. UMAP embedding ಹೇಗೆ ಕಾಣುತ್ತದೆ?\n2. n_neighbors=30: clusters ಗಳಾದ್ಯಂತ ಸಂಪರ್ಕಿಸುತ್ತದೆ. embedding ನಲ್ಲಿ ಏನೂ ಬದಲಾಗುತ್ತದೆ?\n3. min_dist=0.0: ಅದೇ cluster ನಲ್ಲಿನ ಬಿಂದುಗಳು ಒಂದೇ ಬಿಂದುಗೆ ಕುಸಿಯಬಹುದು. visualization ಗೆ ಒಳ್ಳೆಯದೇ ಅಥವಾ ಕೆಟ್ಟದೇ?\n4. min_dist=0.9: ಬಿಂದುಗಳು cluster ಒಳಗೆ ಸಹ ಹರಡುತ್ತವೆ. ಏನೂ ಕಳೆದುಹೋಗುತ್ತದೆ?\n5. ಒಂದು grid search ವಿನ್ಯಾಸಗೊಳಿಸಿ: ನಿಮ್ಮ 3-cluster dataset ಗೆ ನಿರೀಕ್ಷಿತ ಗುಣಾತ್ಮಕ ವರ್ತನೆ ವಿವರಿಸಿ." },
];
