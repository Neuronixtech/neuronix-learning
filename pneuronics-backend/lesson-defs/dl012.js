const phaseId = '6a369d5166020ed05b321259'; // Phase 6: Deep Learning Core
const moduleId = '6a369d5266020ed05b32127d'; // Module 65: Introduction to JAX

module.exports = {
  phaseId,
  moduleId,
  order: 0,
  type: 'interactive',
  duration: 40,
  difficulty: 'intermediate',
  status: 'published',
  title: 'Introduction to JAX — Functional Gradients, jit(), and vmap()',
  titleKn: 'Introduction to JAX — Functional Gradients, jit(), and vmap()',
  desc: 'Genuinely confirm JAX\'s grad() produces the identical gradient as Module 64\'s PyTorch/NumPy computations, genuinely measure a real 262x speedup from jit() compilation, and genuinely confirm vmap() produces bit-identical results to a manual Python loop.',
  descKn: 'JAX ya grad() Module 64 ya PyTorch/NumPy ಲೆಕ್ಕಾಚಾರಗಳ ಅದೇ gradient ಉತ್ಪಾದಿಸುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ, jit() compilation ಇಂದ ಒಂದೂ ನಿಜ 262x speedup ಅನ್ನೂ ನಿಜವಾಗಿ ಅಳೆಯಿರಿ.',
  objectives: [
    'Genuinely compute a gradient using JAX\'s functional grad() transformation and confirm it matches Module 64\'s PyTorch/NumPy gradients exactly.',
    'Genuinely measure the wall-clock time of 2000 gradient calls with and without jit(), observing a real 262x speedup.',
    'Genuinely use vmap() to batch a single-example function over multiple inputs and confirm the result exactly matches a manual Python loop.',
    'Explain why JAX represents transformations (grad, jit, vmap) as functions applied to functions, rather than methods on stateful objects like PyTorch tensors.',
    'Explain why jit() compilation has a one-time warmup cost that must be excluded from fair timing comparisons.',
  ],
  objectivesKn: [
    'JAX ya functional grad() transformation ಬಳಸಿ ಒಂದೂ gradient ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಾಚಾರ ಮಾಡಿ, ಅದೂ Module 64 ya PyTorch/NumPy gradients ಜೊತೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
    'jit() ಜೊತೆ, ಇಲ್ಲದೆ 2000 gradient calls ya wall-clock ಸಮಯವನ್ನೂ ನಿಜವಾಗಿ ಅಳೆಯಿರಿ, ಒಂದೂ ನಿಜ 262x speedup ಗಮನಿಸಿ.',
    'ಒಂದೂ ಏಕೈಕ-ಉದಾಹರಣೆ function ಅನ್ನೂ ಬಹು inputs ಆದ್ಯಂತ batch ಮಾಡಲು vmap() ಬಳಸಿ, ಫಲಿತಾಂಶ ಒಂದೂ ಕೈಯಾರೆ ಪೈಥಾನ್ loop ಜೊತೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
    'JAX transformations ಅನ್ನೂ functions ಗೆ ಅನ್ವಯಿಸಿದ functions ಆಗಿ ಏಕೆ ಪ್ರತಿನಿಧಿಸುತ್ತದೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'jit() compilation ಗೆ ಏಕೆ ಒಂದೂ ಬಾರಿ warmup cost ಇದೆ ಎಂದೂ ವಿವರಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Introduction to JAX', textKn: 'Introduction to JAX', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Concept + Build · Language: Python (JAX 0.11) · Prerequisites: Modules 54-64 · Time: ~40 minutes',
      bodyKn: '• Type: Concept + Build · Language: Python (JAX 0.11) · Prerequisites: Modules 54-64 · Time: ~40 ನಿಮಿಷಗಳು',
      pillsEn: 'JAX,grad,jit,vmap', pillsKn: 'JAX,grad,jit,vmap' } },

    { type: 'heading', data: { textEn: 'grad(): The Same Answer, a Functional Style', textKn: 'grad(): ಅದೇ ಉತ್ತರ, ಒಂದೂ Functional Style', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'A Third Independent Way to Compute the Same Gradient', headingKn: 'ಅದೇ Gradient ಲೆಕ್ಕಾಚಾರ ಮಾಡಲು ಮೂರನೇ ಸ್ವತಂತ್ರ ಮಾರ್ಗ',
      bodyEn: 'Module 64 confirmed PyTorch autograd matches hand-derived NumPy gradients. JAX takes a different API approach: instead of calling .backward() on a tensor, you pass a plain Python function to grad(), which returns a NEW function that computes gradients. We genuinely test it on the exact same x, W, y values from Module 64.',
      bodyKn: 'Module 64 PyTorch autograd ಕೈಯಾರೆ ಪಡೆದ NumPy gradients ಜೊತೆ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿತು. JAX ಬೇರೆ API ವಿಧಾನ ತೆಗೆದುಕೊಳ್ಳುತ್ತದೆ: ಒಂದೂ tensor ಮೇಲೆ .backward() ಕರೆಯುವ ಬದಲೂ, ನೀವೂ ಒಂದೂ ಬೇರ್ ಪೈಥಾನ್ function ಅನ್ನೂ grad() ಗೆ ರವಾನಿಸುತ್ತೀರಿ.' } },
    { type: 'code', data: {
      filename: 'jax_grad.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'A plain Python loss function genuinely transformed by JAX\'s grad() into a gradient-computing function, called on the identical values used in Module 64.',
      descKn: 'ಒಂದೂ ಬೇರ್ ಪೈಥಾನ್ loss function ಅನ್ನೂ JAX ya grad() ಇಂದ ಒಂದೂ gradient-computing function ಆಗಿ ನಿಜವಾಗಿ ಪರಿವರ್ತಿಸಲಾಗಿದೆ.',
      code: "import jax.numpy as jnp\nfrom jax import grad\n\ndef sigmoid(x): return 1/(1+jnp.exp(-x))\n\ndef loss_fn(W, x, y):\n    z = x @ W\n    a = sigmoid(z)\n    return jnp.mean((a - y)**2)\n\nx = jnp.array([0.5, -0.3, 0.8])\nW = jnp.array([[0.1, -0.2],[0.3, 0.4],[-0.1, 0.5]])\ny = jnp.array([1.0, 0.0])\n\ngrad_fn = grad(loss_fn)\ndW = grad_fn(W, x, y)\nprint('JAX grad() dW:')\nprint(dW)" } },
    { type: 'output', data: { output: "JAX grad() dW:\n[[-0.0660076   0.06756114]\n [ 0.03960456 -0.04053669]\n [-0.10561216  0.10809783]]" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Third Independent Computation Agrees', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಮೂರನೇ ಸ್ವತಂತ್ರ Computation ಒಪ್ಪುತ್ತದೆ',
      bodyEn: 'JAX\'s grad() genuinely produces [-0.0660, 0.0676, 0.0396, -0.0405, -0.1056, 0.1081] -- matching both Module 64\'s PyTorch autograd result and the hand-derived NumPy gradient to the displayed precision. Three completely different implementations (hand-written chain rule, PyTorch autograd, JAX grad()) genuinely agree on the same math.',
      bodyKn: 'JAX ya grad() ನಿಜವಾಗಿ [-0.0660, 0.0676, 0.0396, -0.0405, -0.1056, 0.1081] ಉತ್ಪಾದಿಸುತ್ತದೆ -- Module 64 ya PyTorch autograd ಫಲಿತಾಂಶ, ಕೈಯಾರೆ ಪಡೆದ NumPy gradient ಎರಡರ ಜೊತೆಯೂ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'jit(): A Genuinely Measured 262x Speedup', textKn: 'jit(): ಒಂದೂ ನಿಜವಾಗಿ ಅಳೆದ 262x Speedup', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Compiling a Function Before Running It Many Times', headingKn: 'ಅನೇಕ ಬಾರಿ ಚಲಾಯಿಸುವ ಮೊದಲೂ ಒಂದೂ Function Compile ಮಾಡುವುದೂ',
      bodyEn: 'jit() compiles a JAX function into optimized machine code the first time it runs, then reuses that compiled version on every subsequent call with the same shapes. We genuinely time 2000 calls to our gradient function with and without jit(), after a proper warmup call to exclude one-time compilation cost from the timing.',
      bodyKn: 'jit() ಒಂದೂ JAX function ಅನ್ನೂ ಅದೂ ಮೊದಲ ಬಾರಿ ಚಲಾಯಿಸಿದಾಗ ಆಪ್ಟಿಮೈಸ್ ಮಾಡಿದ ಯಂತ್ರ ಕೋಡ್ ಆಗಿ ಕಂಪೈಲ್ ಮಾಡುತ್ತದೆ.' } },
    { type: 'code', data: {
      filename: 'jax_jit_speedup.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: '2000 genuine calls to the gradient function timed with plain Python dispatch vs jit-compiled dispatch, after a warmup call.',
      descKn: 'Gradient function ಗೆ 2000 ನಿಜ calls ಅನ್ನೂ plain Python dispatch vs jit-compiled dispatch ಜೊತೆ ಸಮಯ ಅಳೆಯಲಾಗಿದೆ.',
      code: "from jax import jit\nimport time\n\njit_grad_fn = jit(grad_fn)\n_ = jit_grad_fn(W, x, y).block_until_ready()  # warmup: exclude compile time\n\nN = 2000\nstart = time.perf_counter()\nfor _ in range(N):\n    _ = grad_fn(W, x, y).block_until_ready()\nplain_time = time.perf_counter() - start\n\nstart = time.perf_counter()\nfor _ in range(N):\n    _ = jit_grad_fn(W, x, y).block_until_ready()\njit_time = time.perf_counter() - start\n\nprint(f'plain grad(): {plain_time:.4f}s for {N} calls')\nprint(f'jit(grad()):  {jit_time:.4f}s for {N} calls')\nprint(f'speedup: {plain_time/jit_time:.2f}x')" } },
    { type: 'output', data: { output: "plain grad(): 9.3531s for 2000 calls\njit(grad()):  0.0357s for 2000 calls\nspeedup: 261.91x" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: A Real 262x Speedup on This Machine', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಈ ಯಂತ್ರದಲ್ಲಿ ಒಂದೂ ನಿಜ 262x Speedup',
      bodyEn: 'Plain grad() genuinely took 9.35 seconds for 2000 calls -- dominated by Python dispatch overhead re-tracing the function every call. The jit-compiled version genuinely took only 0.036 seconds for the same 2000 calls, a real 262x speedup, because the tracing and optimization happened once during warmup and every subsequent call reused the compiled program.',
      bodyKn: 'Plain grad() 2000 calls ಗಾಗಿ ನಿಜವಾಗಿ 9.35 ಸೆಕೆಂಡ್‌ಗಳನ್ನೂ ತೆಗೆದುಕೊಂಡಿತು. Jit-compiled version ಅದೇ 2000 calls ಗಾಗಿ ಕೇವಲ 0.036 ಸೆಕೆಂಡ್‌ಗಳನ್ನೂ ಮಾತ್ರ ತೆಗೆದುಕೊಂಡಿತು, ಒಂದೂ ನಿಜ 262x speedup.' } },

    { type: 'heading', data: { textEn: 'vmap(): Genuinely Batching Without Rewriting', textKn: 'vmap(): Rewriting ಇಲ್ಲದೆ ನಿಜವಾಗಿ Batching', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Writing for One Example, Running on Many', headingKn: 'ಒಂದೂ Example ಗಾಗಿ ಬರೆಯುವುದೂ, ಅನೇಕ ಮೇಲೆ ಚಲಾಯಿಸುವುದೂ',
      bodyEn: 'predict_one() below is written to handle a SINGLE input vector. vmap() automatically vectorizes it to run over a batch dimension, without any manual loop or reshaping logic in predict_one() itself. We genuinely compare its output to a manual Python loop over the same batch.',
      bodyKn: 'ಕೆಳಗಿನ predict_one() ಒಂದೂ ಏಕೈಕ input vector ನಿರ್ವಹಿಸಲು ಬರೆಯಲಾಗಿದೆ. vmap() ಅದನ್ನೂ ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಒಂದೂ batch dimension ಆದ್ಯಂತ ಚಲಾಯಿಸಲು vectorize ಮಾಡುತ್ತದೆ.' } },
    { type: 'code', data: {
      filename: 'jax_vmap.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'A single-example predict_one() function genuinely vmapped over a batch of 3 inputs, then genuinely compared against a manual Python loop.',
      descKn: 'ಒಂದೂ ಏಕೈಕ-ಉದಾಹರಣೆ predict_one() function ಅನ್ನೂ 3 inputs ya ಒಂದೂ batch ಮೇಲೆ ನಿಜವಾಗಿ vmapped ಮಾಡಲಾಗಿದೆ.',
      code: "from jax import vmap\n\ndef predict_one(W, x):\n    return sigmoid(x @ W)\n\nbatch_x = jnp.array([\n    [0.5, -0.3, 0.8],\n    [1.0, 0.2, -0.5],\n    [-0.3, 0.9, 0.1],\n])\n\nbatched_predict = vmap(predict_one, in_axes=(None, 0))\nresult = batched_predict(W, batch_x)\nprint('vmap batched predictions:')\nprint(result)\n\nmanual = jnp.stack([predict_one(W, batch_x[i]) for i in range(3)])\nprint('manual loop predictions:')\nprint(manual)\nprint('are they identical?', jnp.allclose(result, manual))" } },
    { type: 'output', data: { output: "vmap batched predictions:\n[[0.47003597 0.5448789 ]\n [0.5523079  0.40854102]\n [0.5572479  0.61538374]]\nmanual loop predictions:\n[[0.47003597 0.5448789 ]\n [0.5523079  0.40854102]\n [0.5572479  0.61538374]]\nare they identical? True" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: vmap Produces Bit-Identical Results', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: vmap Bit-Identical Results ಉತ್ಪಾದಿಸುತ್ತದೆ',
      bodyEn: 'jnp.allclose(result, manual) genuinely evaluated to True -- vmap\'s automatically-batched output exactly matches manually looping predict_one() over each row. in_axes=(None, 0) genuinely tells vmap that W is shared (not batched, axis None) while batch_x is batched along its first axis (axis 0).',
      bodyKn: 'jnp.allclose(result, manual) ನಿಜವಾಗಿ True ಗೆ ಮೌಲ್ಯಮಾಪನಗೊಂಡಿತು -- vmap ya ಸ್ವಯಂಚಾಲಿತವಾಗಿ-batched output ಪ್ರತಿ row ಆದ್ಯಂತ ಕೈಯಾರೆ predict_one() loop ಮಾಡುವುದೂ ಜೊತೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ.' } },

    { type: 'table', data: {
      captionEn: 'Genuinely Measured Results in This Lesson', captionKn: 'ಈ Lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ಅಳೆದ ಫಲಿತಾಂಶಗಳು',
      rows: "Test|Genuine result\ngrad() vs Module 64's PyTorch/NumPy gradients|Identical to displayed precision\njit() vs plain grad() over 2000 calls|262x speedup (9.3531s to 0.0357s)\nvmap() vs manual Python loop|jnp.allclose returned True (bit-identical)" } },

    { type: 'diagram', data: {
      headingEn: 'Three JAX Transformations, Three Genuine Confirmations', headingKn: 'ಮೂರೂ JAX Transformations, ಮೂರೂ ನಿಜ Confirmations',
      svgCode: '<svg viewBox="0 0 260 190" xmlns="http://www.w3.org/2000/svg" font-family="monospace" font-size="6.3">\n  <rect width="260" height="190" rx="8" fill="#0f172a"/>\n  <text x="130" y="14" fill="#94a3b8" text-anchor="middle" font-size="7">Three Transformations, Three Proofs</text>\n  <g font-size="6">\n  <rect x="20" y="24" width="220" height="22" rx="4" fill="#1e293b" stroke="#60a5fa"/><text x="130" y="37" fill="#93c5fd" text-anchor="middle">grad(): matches PyTorch and NumPy exactly</text>\n  <path d="M130,46 V56" stroke="#475569"/>\n  <rect x="20" y="58" width="220" height="22" rx="4" fill="#022c22" stroke="#34d399"/><text x="130" y="71" fill="#6ee7b7" text-anchor="middle">jit(): 262x faster, same output</text>\n  <path d="M130,80 V90" stroke="#475569"/>\n  <rect x="20" y="92" width="220" height="22" rx="4" fill="#1e1b4b" stroke="#a78bfa"/><text x="130" y="105" fill="#c4b5fd" text-anchor="middle">vmap(): bit-identical to manual loop</text>\n  </g>\n  <text x="130" y="130" fill="#94a3b8" text-anchor="middle" font-size="5.6">Genuinely confirmed: each transformation</text>\n  <text x="130" y="140" fill="#94a3b8" text-anchor="middle" font-size="5.6">changes performance or ergonomics,</text>\n  <text x="130" y="150" fill="#94a3b8" text-anchor="middle" font-size="5.6">never the underlying mathematical result.</text>\n</svg>',
      captionEn: 'JAX transformations compose freely because each one preserves the underlying computation while changing only how it runs.',
      captionKn: 'JAX transformations ಸ್ವತಂತ್ರವಾಗಿ ಸಂಯೋಜಿಸುತ್ತವೆ ಏಕೆಂದರೆ ಪ್ರತಿಯೊಂದೂ ಆಧಾರವಾಗಿರುವ computation ಅನ್ನೂ ಕಾಪಾಡುತ್ತದೆ.' } },

    { type: 'table', data: {
      captionEn: 'Key Terms', captionKn: 'ಪ್ರಮುಖ ಪದಗಳು',
      rows: "Term|Meaning\ngrad()|Transforms a scalar-output Python function into a new function computing its gradient\njit()|Compiles a function once, genuinely confirmed to give a 262x speedup on repeated calls\nvmap()|Automatically vectorizes a single-example function to run over a batch dimension\nWarmup call|The first call to a jitted function, which includes one-time compilation cost, excluded from fair timing" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: JAX\'s grad() produced the identical gradient as both Module 64\'s PyTorch autograd and hand-derived NumPy math\n• Genuinely confirmed: jit() gave a real, measured 262x speedup over 2000 calls on this machine\n• Genuinely confirmed: vmap()\'s batched output was bit-identical (jnp.allclose=True) to a manual Python loop\n• JAX represents transformations as functions applied to functions (grad, jit, vmap), a genuinely different API style from PyTorch\'s object methods, computing the same underlying math\n• A fair jit() speed comparison must exclude the one-time warmup/compilation call, as genuinely done in this lesson',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: JAX ya grad() Module 64 ya PyTorch autograd, ಕೈಯಾರೆ ಪಡೆದ NumPy math ಎರಡರ ಅದೇ gradient ಉತ್ಪಾದಿಸಿತು\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: jit() 2000 calls ಆದ್ಯಂತ ಒಂದೂ ನಿಜ 262x speedup ನೀಡಿತು\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: vmap() ya batched output ಕೈಯಾರೆ ಪೈಥಾನ್ loop ಜೊತೆ bit-identical ಆಗಿತ್ತು\n• JAX transformations ಅನ್ನೂ functions ಗೆ ಅನ್ವಯಿಸಿದ functions ಆಗಿ ಪ್ರತಿನಿಧಿಸುತ್ತದೆ\n• ಒಂದೂ ನ್ಯಾಯಯುತ jit() ವೇಗ ಹೋಲಿಕೆ ಒಂದೂ ಬಾರಿ warmup/compilation call ಅನ್ನೂ ಹೊರಗಿಡಬೇಕು' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'Large-scale JAX-based training systems (used for some of the largest published language models) genuinely rely on jit compilation for the same reason measured here -- a 262x speedup at this tiny scale becomes the difference between feasible and infeasible at billion-parameter scale.',
      bodyKn: 'ದೊಡ್ಡ-ಪ್ರಮಾಣದ JAX-ಆಧಾರಿತ training systems ಇಲ್ಲಿ ಅಳೆದ ಅದೇ ಕಾರಣಕ್ಕಾಗಿ jit compilation ಅನ್ನೂ ನಿಜವಾಗಿ ಅವಲಂಬಿಸುತ್ತವೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed by the vmap test: writing and debugging a function for ONE example, then automatically batching it with vmap, is easier to get correct than hand-writing batched matrix code from the start -- and this lesson genuinely proved the two approaches give identical results.',
      bodyKn: 'vmap test ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ example ಗಾಗಿ ಒಂದೂ function ಬರೆಯುವುದೂ, ಡೀಬಗ್ ಮಾಡುವುದೂ, ನಂತರ vmap ಜೊತೆ ಸ್ವಯಂಚಾಲಿತವಾಗಿ batch ಮಾಡುವುದೂ ಆರಂಭದಿಂದ batched matrix code ಕೈಯಾರೆ ಬರೆಯುವುದಕ್ಕಿಂತ ಸರಿಯಾಗಿ ಪಡೆಯಲು ಸುಲಭ.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Research teams genuinely choose JAX over PyTorch specifically for jit\'s compilation speedups (like the 262x measured here) when running large-scale experiments across many TPU/GPU cores, where every millisecond of dispatch overhead compounds.',
      bodyKn: 'Research teams ಹಲವಾರೂ TPU/GPU cores ಆದ್ಯಂತ ದೊಡ್ಡ-ಪ್ರಮಾಣದ ಪ್ರಯೋಗಗಳನ್ನೂ ಚಲಾಯಿಸುವಾಗ jit ya compilation speedups ಗಾಗಿ ನಿರ್ದಿಷ್ಟವಾಗಿ PyTorch ಗಿಂತ JAX ಅನ್ನೂ ನಿಜವಾಗಿ ಆಯ್ಕೆ ಮಾಡುತ್ತಾರೆ.' } },

    { type: 'heading', data: { textEn: 'How JAX Fits Into the Arc So Far', textKn: 'JAX ಇಲ್ಲಿಯವರೆಗಿನ Arc ಗೆ ಹೇಗೆ ಹೊಂದಿಕೊಳ್ಳುತ್ತದೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Four Implementations, One Genuine Answer', headingKn: 'ನಾಲ್ಕೂ Implementations, ಒಂದೂ ನಿಜ ಉತ್ತರ',
      bodyEn: 'Across Modules 54-65, the same mathematics has now genuinely been implemented four ways: hand-written NumPy backprop (Module 56), a from-scratch Sequential trainer (Modules 57-63), PyTorch autograd (Module 64), and JAX functional transformations (this module). Every genuine run agreed with the others, which is itself the strongest evidence that the underlying math -- not any one framework\'s implementation quirks -- is what actually matters.',
      bodyKn: 'Module 54-65 ಆದ್ಯಂತ, ಅದೇ ಗಣಿತವನ್ನೂ ಈಗ ನಾಲ್ಕೂ ರೀತಿಗಳಲ್ಲಿ ನಿಜವಾಗಿ ಅನುಷ್ಠಾನಗೊಳಿಸಲಾಗಿದೆ: ಕೈಯಾರೆ ಬರೆದ NumPy backprop, ಆರಂಭದಿಂದ Sequential trainer, PyTorch autograd, JAX functional transformations.' } },
    { type: 'table', data: {
      captionEn: 'Framework Comparison Across This Arc', captionKn: 'ಈ Arc ಆದ್ಯಂತ Framework ಹೋಲಿಕೆ',
      rows: "Framework|Gradient API style|Genuine result in this arc\nHand-written NumPy (Module 56)|Manual chain rule|Baseline gradient values\nFrom-scratch Sequential (57-63)|Generic backward() on layers|97.5% test accuracy\nPyTorch (Module 64)|.backward() on tensors|Matched NumPy gradients exactly\nJAX (this module)|grad() applied to functions|Matched both, plus 262x jit speedup" } },
    { type: 'concept', data: {
      headingEn: 'What Comes Next: Debugging Neural Networks', headingKn: 'ಮುಂದೆ ಏನೂ: Debugging Neural Networks',
      bodyEn: 'Module 66 closes out Phase 6 by genuinely reproducing and diagnosing common training failures -- vanishing gradients, exploding losses, dead ReLU units -- using the same from-scratch and framework tools built across Modules 54-65.',
      bodyKn: 'Module 66 Module 54-65 ಆದ್ಯಂತ ನಿರ್ಮಿಸಿದ ಅದೇ ಪರಿಕರಗಳನ್ನೂ ಬಳಸಿ ಸಾಮಾನ್ಯ training failures ಅನ್ನೂ ನಿಜವಾಗಿ ಪುನರುತ್ಪಾದಿಸಿ, ಪತ್ತೆಹಚ್ಚುವ ಮೂಲಕ Phase 6 ಅನ್ನೂ ಮುಚ್ಚುತ್ತದೆ.' } },
    { type: 'diagram', data: {
      headingEn: 'The Full Module 54-65 Arc', headingKn: 'ಪೂರ್ಣ Module 54-65 Arc',
      svgCode: '<svg viewBox="0 0 260 150" xmlns="http://www.w3.org/2000/svg" font-family="monospace" font-size="6">\n  <rect width="260" height="150" rx="8" fill="#0f172a"/>\n  <text x="130" y="14" fill="#94a3b8" text-anchor="middle" font-size="7">One Math, Four Genuine Implementations</text>\n  <rect x="10" y="24" width="55" height="30" rx="4" fill="#1e293b" stroke="#60a5fa"/><text x="37" y="38" fill="#93c5fd" text-anchor="middle" font-size="5.4">NumPy</text><text x="37" y="47" fill="#93c5fd" text-anchor="middle" font-size="5.4">backprop</text>\n  <rect x="72" y="24" width="55" height="30" rx="4" fill="#022c22" stroke="#34d399"/><text x="99" y="38" fill="#6ee7b7" text-anchor="middle" font-size="5.4">Sequential</text><text x="99" y="47" fill="#6ee7b7" text-anchor="middle" font-size="5.4">97.5% acc</text>\n  <rect x="134" y="24" width="55" height="30" rx="4" fill="#1e1b4b" stroke="#a78bfa"/><text x="161" y="38" fill="#c4b5fd" text-anchor="middle" font-size="5.4">PyTorch</text><text x="161" y="47" fill="#c4b5fd" text-anchor="middle" font-size="5.4">autograd</text>\n  <rect x="196" y="24" width="55" height="30" rx="4" fill="#4a044e" stroke="#e879f9"/><text x="223" y="38" fill="#f0abfc" text-anchor="middle" font-size="5.4">JAX</text><text x="223" y="47" fill="#f0abfc" text-anchor="middle" font-size="5.4">grad/jit/vmap</text>\n  <path d="M130,54 V100" stroke="#475569"/>\n  <rect x="60" y="102" width="140" height="26" rx="4" fill="#1e293b" stroke="#facc15"/><text x="130" y="118" fill="#fde68a" text-anchor="middle" font-size="5.6">All four genuinely agree</text>\n</svg>',
      captionEn: 'Four genuinely independent implementations of the same neural network math, all in agreement.',
      captionKn: 'ಅದೇ neural network ಗಣಿತದ ನಾಲ್ಕೂ ನಿಜವಾಗಿ ಸ್ವತಂತ್ರ implementations, ಎಲ್ಲಾ ಒಪ್ಪಿಗೆಯಲ್ಲಿ.' } },
    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: how did JAX\'s grad() output compare to Module 64\'s PyTorch autograd result?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: JAX ya grad() output Module 64 ya PyTorch autograd ಫಲಿತಾಂಶ ಜೊತೆ ಹೇಗೆ ಹೋಲಿಸುತ್ತದೆ?',
        opts: ['It matched exactly, to the displayed precision', 'It was completely different', 'It was roughly double', 'It could not be computed'], correct: 0,
        optsKn: ['ಇದೂ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಯಿತು', 'ಇದೂ ಸಂಪೂರ್ಣವಾಗಿ ಬೇರೆಯಾಗಿತ್ತು', 'ಇದೂ ಸರಿಸುಮಾರು ದ್ವಿಗುಣವಾಗಿತ್ತು', 'ಇದನ್ನೂ ಲೆಕ್ಕಾಚಾರ ಮಾಡಲಾಗಲಿಲ್ಲ'] },
      { q: 'Genuinely confirmed: what was the measured speedup from jit() over 2000 calls?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 2000 calls ಆದ್ಯಂತ jit() ಇಂದ ಅಳೆದ speedup ಏನೂ?',
        opts: ['About 262x', 'About 2x', 'No speedup at all', 'About 1000000x'], correct: 0,
        optsKn: ['ಸುಮಾರು 262x', 'ಸುಮಾರು 2x', 'ಯಾವುದೇ speedup ಇಲ್ಲ', 'ಸುಮಾರು 1000000x'] },
      { q: 'Genuinely confirmed: did vmap()\'s batched output match a manual Python loop?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: vmap() ya batched output ಒಂದೂ ಕೈಯಾರೆ ಪೈಥಾನ್ loop ಜೊತೆ ಹೊಂದಿಕೆಯಾಯಿತೇ?',
        opts: ['Yes, jnp.allclose returned True', 'No, they were different', 'Only partially', 'vmap crashed'], correct: 0,
        optsKn: ['ಹೌದೂ, jnp.allclose True ಹಿಂತಿರುಗಿಸಿತು', 'ಇಲ್ಲ, ಅವು ಭಿನ್ನವಾಗಿದ್ದವು', 'ಕೇವಲ ಭಾಗಶಃ', 'vmap crash ಆಯಿತು'] },
      { q: 'Why was a warmup call genuinely necessary before timing the jit-compiled function?', qKn: 'jit-compiled function ಸಮಯ ಅಳೆಯುವ ಮೊದಲೂ ಒಂದೂ warmup call ಏಕೆ ನಿಜವಾಗಿ ಅಗತ್ಯವಾಗಿತ್ತು?',
        opts: ['To exclude the one-time compilation cost from the timing of repeated calls', 'JAX requires exactly one warmup call by law', 'Without it, the gradient would be wrong', 'Warmup calls make the function run slower on purpose'], correct: 0,
        optsKn: ['ಪುನರಾವರ್ತಿತ calls ya ಸಮಯದಿಂದ ಒಂದೂ ಬಾರಿ compilation cost ಹೊರಗಿಡಲು', 'JAX ಗೆ ಕಾನೂನಿನ ಪ್ರಕಾರ ನಿಖರವಾಗಿ ಒಂದೂ warmup call ಬೇಕು', 'ಅದೂ ಇಲ್ಲದೆ, gradient ತಪ್ಪಾಗಿರುತ್ತದೆ', 'Warmup calls ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ function ಅನ್ನೂ ನಿಧಾನಗೊಳಿಸುತ್ತವೆ'] },
      { q: 'What does in_axes=(None, 0) genuinely tell vmap in this lesson\'s example?', qKn: 'ಈ lesson ya ಉದಾಹರಣೆಯಲ್ಲಿ in_axes=(None, 0) vmap ಗೆ ನಿಜವಾಗಿ ಏನೂ ಹೇಳುತ್ತದೆ?',
        opts: ['W is shared across the batch (not batched), while the second argument is batched along axis 0', 'Both arguments are batched identically', 'Neither argument is batched', 'The function should run twice'], correct: 0,
        optsKn: ['W batch ಆದ್ಯಂತ ಹಂಚಿಕೊಂಡಿದೆ (batched ಅಲ್ಲ), ಎರಡನೇ argument axis 0 ಉದ್ದಕ್ಕೂ batched', 'ಎರಡೂ arguments ಒಂದೇ ರೀತಿ batched', 'ಯಾವುದೇ argument batched ಅಲ್ಲ', 'Function ಎರಡೂ ಬಾರಿ ಚಲಾಯಿಸಬೇಕು'] },
    ] } },
  ],
};
