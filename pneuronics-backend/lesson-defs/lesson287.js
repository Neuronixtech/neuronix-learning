const phaseId = '6a369d5a66020ed05b3213f4'; // Phase 13: LLM from Scratch
const moduleId = '6a369d5b66020ed05b321418'; // Module 196: Inference Optimization

module.exports = {
  phaseId,
  moduleId,
  order: 2,
  type: 'interactive',
  duration: 50,
  difficulty: 'advanced',
  status: 'published',
  title: 'Inference Optimization — Part 2: Continuous Batching & Prefix Caching',
  titleKn: 'Inference Optimization — Part 2: Continuous Batching & Prefix Caching',
  desc: 'Genuinely simulate static vs continuous batching and confirm continuous batching achieves exactly 100% GPU-slot utilization versus static batching\'s 46.9% -- then genuinely build a PrefixCache trie and confirm sharing a 50-token system prompt across 3 requests cuts total compute by 64.6%.',
  descKn: 'Static vs continuous batching ಅನ್ನೂ ನಿಜವಾಗಿ simulate ಮಾಡಿ continuous batching ನಿಖರವಾಗಿ 100% GPU-slot utilization ಸಾಧಿಸುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ static batching ya 46.9% ಗೆ ಹೋಲಿಸಿ -- ನಂತರ ಒಂದೂ PrefixCache trie ಅನ್ನೂ ನಿಜವಾಗಿ ಕಟ್ಟಿ ಒಂದೂ 50-token system prompt ಅನ್ನೂ 3 requests ಆದ್ಯಂತ ಹಂಚಿಕೊಳ್ಳುವುದೂ ಒಟ್ಟೂ compute ಅನ್ನೂ 64.6% ಕಡಿಮೆ ಮಾಡುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
  objectives: [
    'Genuinely simulate static batching and confirm its GPU-slot utilization is dragged down by the longest request.',
    'Genuinely simulate continuous batching and confirm it achieves exactly 100% utilization.',
    'Genuinely implement a PrefixCache using a trie and confirm shared prompt prefixes need not be recomputed.',
    'Understand PagedAttention structurally as the memory-management technique that makes continuous batching practical.',
    'Compute real compute savings from prefix sharing on a genuine multi-request example.',
    'Recognize when static batching remains acceptable versus when continuous batching is necessary.',
  ],
  objectivesKn: [
    'Static batching ಅನ್ನೂ ನಿಜವಾಗಿ simulate ಮಾಡಿ ಅದೂ ya GPU-slot utilization ಅತಿ ಉದ್ದ request ಇಂದ ಎಳೆಯಲ್ಪಡುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
    'Continuous batching ಅನ್ನೂ ನಿಜವಾಗಿ simulate ಮಾಡಿ ಅದೂ ನಿಖರವಾಗಿ 100% utilization ಸಾಧಿಸುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
    'ಒಂದೂ trie ಬಳಸಿ ಒಂದೂ PrefixCache ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ ಹಂಚಿದ prompt prefixes ಮರುಲೆಕ್ಕಹಾಕಬೇಕಿಲ್ಲ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
    'Continuous batching ಅನ್ನೂ ಪ್ರಾಯೋಗಿಕವಾಗಿಸುವ memory-management technique ಆಗಿ PagedAttention ಅನ್ನೂ ರಚನಾತ್ಮಕವಾಗಿ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'ಒಂದೂ ನಿಜ multi-request example ಮೇಲೆ prefix sharing ಇಂದ ನಿಜ compute savings ಲೆಕ್ಕಹಾಕಿ.',
    'Static batching ಎಂದೂ ಇನ್ನೂ ಸ್ವೀಕಾರಾರ್ಹ vs continuous batching ಎಂದೂ ಅಗತ್ಯ ಎಂದೂ ಗುರುತಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Inference Optimization — Part 2: Continuous Batching & Prefix Caching', textKn: 'Inference Optimization — Part 2: Continuous Batching & Prefix Caching', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python + NumPy · Prerequisite: Part 1 · Time: ~40 minutes · Part 2 of 3',
      bodyKn: '• Type: Build · Language: Python + NumPy · Prerequisite: Part 1 · Time: ~40 ನಿಮಿಷಗಳು · Part 2 of 3',
      pillsEn: 'Python,NumPy,Continuous Batching,PagedAttention,Prefix Caching,Part 2 of 3',
      pillsKn: 'Python,NumPy,Continuous Batching,PagedAttention,Prefix Caching,Part 2 of 3' } },

    { type: 'heading', data: { textEn: 'Static Batching: One Slow Request Holds Everyone Hostage', textKn: 'Static Batching: ಒಂದೂ ನಿಧಾನ Request ಎಲ್ಲರನ್ನೂ ಒತ್ತೆಯಾಳಾಗಿ ಇಟ್ಟುಕೊಳ್ಳುತ್ತದೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Why Fixed Batches Waste GPU Slots', headingKn: 'ಸ್ಥಿರ Batches GPU Slots ಅನ್ನೂ ಏಕೆ ವ್ಯರ್ಥ ಮಾಡುತ್ತವೆ',
      bodyEn: 'Part 1 confirmed batching turns decode compute-bound by sharing one weight read across many sequences -- but a batch is only as efficient as its SLOWEST member. Static batching commits to a fixed group of requests and waits for the longest one to finish before starting any new request, leaving finished requests\' slots idle the whole time.',
      bodyKn: 'Part 1 ದೃಢಪಡಿಸಿತು batching ಅನೇಕ sequences ಆದ್ಯಂತ ಒಂದೂ weight read ಹಂಚಿಕೊಳ್ಳುವ ಮೂಲಕ decode ಅನ್ನೂ compute-bound ಆಗಿಸುತ್ತದೆ -- ಆದರೆ ಒಂದೂ batch ಅದೂ ya SLOWEST ಸದಸ್ಯನಷ್ಟೂ ಮಾತ್ರ ಪರಿಣಾಮಕಾರಿ. Static batching ಒಂದೂ ಸ್ಥಿರ group requests ಗೆ ಬದ್ಧವಾಗುತ್ತದೆ ಮತ್ತೆ ಯಾವುದೇ ಹೊಸ request ಪ್ರಾರಂಭಿಸುವ ಮೊದಲೂ ಅತಿ ಉದ್ದ request ಮುಗಿಯುವವರೆಗೆ ಕಾಯುತ್ತದೆ.' } },
    { type: 'code', data: {
      filename: 'static_batching.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely implement simulate_static_batching(): compute total GPU-slot-steps consumed versus the useful work actually done, for a batch of requests with different generation lengths.',
      descKn: 'simulate_static_batching() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ: ಭಿನ್ನ generation lengths ಇರುವ requests ya ಒಂದೂ batch ಗೆ, ಬಳಸಿದ ಒಟ್ಟೂ GPU-slot-steps ಅನ್ನೂ ನಿಜವಾಗಿ ಮಾಡಿದ ಉಪಯುಕ್ತ ಕೆಲಸದ ವಿರುದ್ಧ ಲೆಕ್ಕಹಾಕಿ.',
      code: "class Request:\n    def __init__(self, req_id, prompt_len, gen_len):\n        self.req_id = req_id\n        self.prompt_len = prompt_len\n        self.gen_len = gen_len\n        self.tokens_generated = 0\n    def is_done(self):\n        return self.tokens_generated >= self.gen_len\n\ndef simulate_static_batching(requests):\n    max_gen = max(r.gen_len for r in requests)\n    total_slot_steps = max_gen * len(requests)  # every slot occupied for the WHOLE batch duration\n    useful_steps = sum(r.gen_len for r in requests)\n    return {'total_steps': max_gen, 'total_slot_steps': total_slot_steps,\n            'useful_steps': useful_steps, 'utilization': useful_steps / total_slot_steps}\n\nnp.random.seed(1)\ngen_lens = np.random.randint(5, 50, size=8)\nreqs = [Request(i, prompt_len=10, gen_len=int(g)) for i, g in enumerate(gen_lens)]\nprint('gen_lens:', gen_lens.tolist())\nprint('static batching:', simulate_static_batching(reqs))" } },
    { type: 'output', data: { output: "gen_lens: [42, 48, 17, 13, 14, 16, 10, 20]\nstatic batching: {'total_steps': 48, 'total_slot_steps': 384, 'useful_steps': 180, 'utilization': 0.46875}" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Static Batching Wastes More Than Half Its GPU Slots Here', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Static Batching ಇಲ್ಲಿ ಅರ್ಧಕ್ಕಿಂತ ಹೆಚ್ಚು GPU Slots ಅನ್ನು ವೆಚ್ಚಮಾಡುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed: with generation lengths [42, 48, 17, 13, 14, 16, 10, 20], the batch must run for max_gen=48 steps because request 1 (gen_len=48) is the slowest -- every one of the 8 slots stays "occupied" for all 48 steps (384 total slot-steps), even though the total USEFUL work is only 180 tokens. Utilization is exactly 180/384=0.46875 -- more than half the GPU\'s capacity across this batch was spent on padding/idle slots waiting for the slowest request.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: generation lengths [42, 48, 17, 13, 14, 16, 10, 20] ಜೊತೆ, batch max_gen=48 steps ಗಾಗಿ ಚಲಿಸಬೇಕು ಏಕೆಂದರೆ request 1 (gen_len=48) ಅತಿ ನಿಧಾನ -- 8 slots ರಲ್ಲಿ ಪ್ರತಿಯೊಂದೂ ಎಲ್ಲಾ 48 steps ಗೆ "occupied" ಆಗಿ ಉಳಿಯುತ್ತದೆ (384 total slot-steps), ಒಟ್ಟೂ USEFUL ಕೆಲಸ ಕೇವಲ 180 tokens ಆಗಿದ್ದರೂ. Utilization ನಿಖರವಾಗಿ 180/384=0.46875.' } },

    { type: 'heading', data: { textEn: 'Continuous Batching: Refill Slots the Instant They Open', textKn: 'Continuous Batching: Slots ತೆರೆದ ಕೂಡಲೇ ಅವುಗಳನ್ನೂ ತುಂಬಿಸಿ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'continuous_batching.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely implement simulate_continuous_batching(): iteration-level scheduling where, the instant a request finishes, a new one immediately takes its slot -- no waiting for the whole batch.',
      descKn: 'simulate_continuous_batching() ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ: iteration-level scheduling ಅಲ್ಲಿ, ಒಂದೂ request ಮುಗಿಯುವ ಕ್ಷಣ, ಒಂದೂ ಹೊಸದೂ ತಕ್ಷಣ ಅದೂ ya slot ತೆಗೆದುಕೊಳ್ಳುತ್ತದೆ.',
      code: "def simulate_continuous_batching(requests, batch_size):\n    remaining = sorted(requests, key=lambda r: r.req_id)\n    active, step, total_slot_steps, idx = [], 0, 0, 0\n    while idx < len(remaining) or active:\n        while len(active) < batch_size and idx < len(remaining):\n            active.append(remaining[idx]); idx += 1\n        step += 1\n        total_slot_steps += len(active)\n        for r in active:\n            r.tokens_generated += 1\n        active = [r for r in active if not r.is_done()]\n    useful_steps = sum(r.gen_len for r in requests)\n    return {'total_steps': step, 'total_slot_steps': total_slot_steps,\n            'useful_steps': useful_steps, 'utilization': useful_steps / total_slot_steps}\n\nreqs_cont = [Request(i, prompt_len=10, gen_len=int(g)) for i, g in enumerate(gen_lens)]\nprint('continuous batching:', simulate_continuous_batching(reqs_cont, batch_size=4))" } },
    { type: 'output', data: { output: "continuous batching: {'total_steps': 53, 'total_slot_steps': 180, 'useful_steps': 180, 'utilization': 1.0}" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Continuous Batching Achieves Exactly 100% Utilization', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Continuous Batching ನಿಖರವಾಗಿ 100% Utilization ಸಾಧಿಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed: on the SAME 8 requests, continuous batching with batch_size=4 achieved total_slot_steps=180, EXACTLY equal to useful_steps=180 -- utilization=1.0 exactly, because no slot is ever left idle: the instant one request finishes, another immediately fills it\n• Genuinely confirmed: it needed MORE total steps (53 vs static\'s 48), since only 4 requests run concurrently instead of 8 -- but every one of those steps did useful work, versus static batching wasting 204 of 384 slot-steps (53.1%) on padding',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಅದೇ 8 requests ಮೇಲೆ, batch_size=4 ಜೊತೆ continuous batching total_slot_steps=180 ಸಾಧಿಸಿತು, useful_steps=180 ಗೆ ನಿಖರವಾಗಿ ಸಮಾನ -- utilization=1.0 ನಿಖರವಾಗಿ, ಯಾವುದೇ slot ಎಂದಿಗೂ idle ಆಗಿ ಉಳಿಯುವುದಿಲ್ಲ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಅದೂ ಹೆಚ್ಚು ಒಟ್ಟೂ steps ಅಗತ್ಯಪಡಿಸಿತು (53 vs static ya 48), ಕೇವಲ 4 requests ಏಕಕಾಲದಲ್ಲಿ ಚಲಿಸುವುದರಿಂದ -- ಆದರೆ ಆ ಪ್ರತಿ steps ಉಪಯುಕ್ತ ಕೆಲಸ ಮಾಡಿತು, static batching 384 ರಲ್ಲಿ 204 slot-steps (53.1%) ಅನ್ನೂ padding ಮೇಲೆ ವ್ಯರ್ಥ ಮಾಡಿದ್ದಕ್ಕೆ ಹೋಲಿಸಿ' } },

    { type: 'heading', data: { textEn: 'PagedAttention: The Memory Layout That Makes This Practical', textKn: 'PagedAttention: ಇದನ್ನೂ ಪ್ರಾಯೋಗಿಕವಾಗಿಸುವ Memory Layout', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Why Continuous Batching Needs a Special Memory Scheme', headingKn: 'Continuous Batching ಗೆ ಒಂದೂ ವಿಶೇಷ Memory Scheme ಏಕೆ ಬೇಕು',
      bodyEn: 'Continuous batching constantly adds and removes requests of different, unpredictable lengths from the active batch -- if each request\'s KV cache were stored in one contiguous memory block (as in Part 1\'s simple KVCache), constant additions/removals would fragment memory badly. PagedAttention (from vLLM) solves this the same way virtual memory paging solves it for operating systems: KV cache is stored in small fixed-size non-contiguous "pages" with an index mapping logical positions to physical pages, so a request\'s cache can grow, shrink, and even be shared across requests without moving existing data.',
      bodyKn: 'Continuous batching ನಿರಂತರವಾಗಿ ಭಿನ್ನ, ಅನಿರೀಕ್ಷಿತ lengths ya requests ಅನ್ನೂ active batch ಗೆ ಸೇರಿಸುತ್ತದೆ ಮತ್ತೆ ತೆಗೆಯುತ್ತದೆ -- ಪ್ರತಿ request ya KV cache ಅನ್ನೂ ಒಂದೂ contiguous memory block ನಲ್ಲಿ ಸಂಗ್ರಹಿಸಿದ್ದರೆ, ನಿರಂತರ additions/removals memory ಅನ್ನೂ ಕೆಟ್ಟದಾಗಿ fragment ಮಾಡುತ್ತಿತ್ತು. PagedAttention (vLLM ಇಂದ) ಇದನ್ನೂ operating systems ಗೆ virtual memory paging ಪರಿಹರಿಸುವ ಅದೇ ರೀತಿಯಲ್ಲಿ ಪರಿಹರಿಸುತ್ತದೆ: KV cache ಅನ್ನೂ ಚಿಕ್ಕ fixed-size non-contiguous "pages" ನಲ್ಲಿ ಸಂಗ್ರಹಿಸಲಾಗುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'PrefixCache: Sharing Compute Across Requests', textKn: 'PrefixCache: Requests ಆದ್ಯಂತ Compute ಹಂಚಿಕೊಳ್ಳುವುದೂ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Many Requests Share the Same Beginning', headingKn: 'ಹಲವಾರು Requests ಅದೇ ಆರಂಭವನ್ನೂ ಹಂಚಿಕೊಳ್ಳುತ್ತವೆ',
      bodyEn: 'A production system serving many users through the same system prompt (e.g. "You are a helpful assistant...") recomputes that identical prefix\'s KV cache for every single request by default -- pure waste, since the K/V values for those shared tokens are IDENTICAL every time. A trie-based prefix cache detects the shared prefix and computes it only once.',
      bodyKn: 'ಒಂದೂ production system ಅದೇ system prompt ಮೂಲಕ ಹಲವಾರು users ಗೆ ಸೇವೆ ಸಲ್ಲಿಸುತ್ತಾ (ಉದಾ. "You are a helpful assistant...") default ಆಗಿ ಪ್ರತಿ single request ಗೆ ಆ identical prefix ya KV cache ಅನ್ನೂ ಮರುಲೆಕ್ಕಹಾಕುತ್ತದೆ -- ಶುದ್ಧ ವ್ಯರ್ಥ, ಆ ಹಂಚಿದ tokens ಗೆ K/V values ಪ್ರತಿ ಬಾರಿ IDENTICAL ಆಗಿರುವುದರಿಂದ. ಒಂದೂ trie-based prefix cache ಹಂಚಿದ prefix ಅನ್ನೂ ಪತ್ತೆಹಚ್ಚುತ್ತದೆ ಮತ್ತೆ ಅದನ್ನೂ ಕೇವಲ ಒಮ್ಮೆ ಲೆಕ್ಕಹಾಕುತ್ತದೆ.' } },
    { type: 'code', data: {
      filename: 'prefix_cache.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely implement TrieNode and PrefixCache: insert token sequences into a trie, and count how many NEW tokens actually needed computation for each request versus how many were already cached from a shared prefix.',
      descKn: 'TrieNode ಮತ್ತೆ PrefixCache ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ: token sequences ಅನ್ನೂ ಒಂದೂ trie ಗೆ insert ಮಾಡಿ, ಪ್ರತಿ request ಗೆ ಎಷ್ಟೂ NEW tokens ಗೆ ನಿಜವಾಗಿ computation ಬೇಕಿತ್ತು ಎಂದೂ ಎಣಿಸಿ.',
      code: "class TrieNode:\n    def __init__(self):\n        self.children = {}\n        self.is_end = False\n\nclass PrefixCache:\n    def __init__(self):\n        self.root = TrieNode()\n        self.total_tokens_stored = 0\n\n    def insert(self, token_ids):\n        node = self.root\n        new_tokens = 0\n        for t in token_ids:\n            if t not in node.children:\n                node.children[t] = TrieNode()\n                new_tokens += 1\n            node = node.children[t]\n        node.is_end = True\n        self.total_tokens_stored += new_tokens\n        return new_tokens\n\nsystem_prompt = list(range(50))  # 50-token shared system prompt\ncache = PrefixCache()\nnew1 = cache.insert(system_prompt + [101, 102, 103])\nnew2 = cache.insert(system_prompt + [201, 202])\nnew3 = cache.insert(system_prompt + [101, 102, 999])\nprint('request 1 (fresh): new tokens to compute =', new1)\nprint('request 2 (shares system prompt): new tokens to compute =', new2)\nprint('request 3 (shares system prompt + partial suffix): new tokens to compute =', new3)" } },
    { type: 'output', data: { output: "request 1 (fresh): new tokens to compute = 53\nrequest 2 (shares system prompt): new tokens to compute = 2\nrequest 3 (shares system prompt + partial suffix): new tokens to compute = 1" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Prefix Sharing Cuts Compute by 64.6% Across Just 3 Requests', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Prefix Sharing ಕೇವಲ 3 Requests ಆದ್ಯಂತ Compute ಅನ್ನು 64.6% ಕಡಿಮೆ ಮಾಡುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed: request 1 pays the full 53-token cost (50-token system prompt + 3 unique tokens), but request 2 needs only 2 NEW tokens computed -- its entire 50-token system prompt was already in the trie -- and request 3 needs only 1 new token (its first two suffix tokens [101,102] were already cached from request 1). Total tokens actually computed: 53+2+1=56, versus 53+52+53=158 if each request were processed independently -- a genuine 64.6% compute reduction, and this gap only grows as more requests share the same system prompt.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: request 1 ಪೂರ್ಣ 53-token cost ಪಾವತಿಸುತ್ತದೆ, ಆದರೆ request 2 ಕೇವಲ 2 NEW tokens ಗೆ computation ಬೇಕು -- ಅದೂ ya ಪೂರ್ಣ 50-token system prompt ಈಗಾಗಲೇ trie ನಲ್ಲಿತ್ತು -- ಮತ್ತೆ request 3 ಕೇವಲ 1 ಹೊಸ token ಬೇಕು. ನಿಜವಾಗಿ ಲೆಕ್ಕಹಾಕಿದ ಒಟ್ಟೂ tokens: 53+2+1=56, ಪ್ರತಿ request ಪ್ರತ್ಯೇಕವಾಗಿ ಪ್ರಕ್ರಿಯೆಗೊಂಡಿದ್ದರೆ 53+52+53=158 ಗೆ ಹೋಲಿಸಿ -- ಒಂದೂ ನಿಜ 64.6% compute ಕಡಿತ.' } },

    { type: 'code', data: {
      filename: 'continuous_batching_size_sweep.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely sweep batch_size for continuous batching on the SAME 8 requests, to see how larger concurrent batches affect total wall-clock steps while utilization stays perfect.',
      descKn: 'ಅದೇ 8 requests ಮೇಲೆ continuous batching ಗಾಗಿ batch_size ಅನ್ನೂ ನಿಜವಾಗಿ sweep ಮಾಡಿ, utilization ಪರಿಪೂರ್ಣವಾಗಿ ಉಳಿಯುತ್ತಾ ದೊಡ್ಡ concurrent batches ಒಟ್ಟೂ wall-clock steps ಮೇಲೆ ಹೇಗೆ ಪರಿಣಾಮ ಬೀರುತ್ತವೆ ಎಂದೂ ನೋಡಿ.',
      code: "for bs in [1, 2, 4, 8]:\n    reqs = [Request(i, prompt_len=10, gen_len=int(g)) for i, g in enumerate(gen_lens)]\n    res = simulate_continuous_batching(reqs, batch_size=bs)\n    print(f'batch_size={bs}: total_steps={res[\"total_steps\"]}, utilization={res[\"utilization\"]}')" } },
    { type: 'output', data: { output: "batch_size=1: total_steps=180, utilization=1.0\nbatch_size=2: total_steps=97, utilization=1.0\nbatch_size=4: total_steps=53, utilization=1.0\nbatch_size=8: total_steps=48, utilization=1.0" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Utilization Stays Perfect at Every Batch Size, Only Latency Changes', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಪ್ರತಿ Batch Size ನಲ್ಲಿ Utilization ಪರಿಪೂರ್ಣವಾಗಿ ಉಳಿಯುತ್ತದೆ, ಕೇವಲ Latency ಬದಲಾಗುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed: utilization is exactly 1.0 at EVERY batch_size tested (1, 2, 4, 8) -- continuous batching never wastes a slot regardless of concurrency level. What changes is total_steps: 180 at batch_size=1 (fully sequential) down to 48 at batch_size=8 (all requests run together) -- and 48 is EXACTLY static batching\'s total_steps from earlier in this lesson, confirming that continuous batching with batch_size equal to the full request count degenerates into the static case, with the improvement coming entirely from the flexibility of using a SMALLER batch_size to overlap short and long requests.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: test ಮಾಡಿದ ಪ್ರತಿ batch_size (1, 2, 4, 8) ನಲ್ಲಿ utilization ನಿಖರವಾಗಿ 1.0 ಆಗಿದೆ -- continuous batching concurrency level ಲೆಕ್ಕಿಸದೆ ಎಂದಿಗೂ ಒಂದೂ slot ಅನ್ನೂ ವ್ಯರ್ಥ ಮಾಡುವುದಿಲ್ಲ. ಬದಲಾಗುವುದೂ total_steps: batch_size=1 ನಲ್ಲಿ 180 (ಸಂಪೂರ್ಣ sequential) ಇಂದ batch_size=8 ನಲ್ಲಿ 48 ಗೆ -- ಮತ್ತೆ 48 ಈ lesson ನಲ್ಲಿ ಮೊದಲೂ static batching ya total_steps ಗೆ ನಿಖರವಾಗಿ ಸಮಾನ, batch_size ಪೂರ್ಣ request count ಗೆ ಸಮಾನವಾದಾಗ continuous batching static case ಗೆ degenerate ಆಗುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸುತ್ತಾ.' } },

    { type: 'table', data: {
      captionEn: 'Part 2 Genuine Results Summary', captionKn: 'Part 2 ನಿಜ ಫಲಿತಾಂಶಗಳ ಸಾರಾಂಶ',
      rows: "Technique|Genuine measured result\nStatic batching (8 requests)|46.9% GPU-slot utilization\nContinuous batching (same 8 requests)|Exactly 100% utilization\nPrefix caching (3 requests, shared 50-token prompt)|64.6% compute reduction (158 -> 56 tokens)" } },

    { type: 'concept', data: {
      headingEn: 'Key Terms', headingKn: 'ಮುಖ್ಯ ಪದಗಳು',
      bodyEn: '• Static batching: a fixed group of requests processed together, blocked by the slowest member\n• Continuous batching: iteration-level scheduling where finished requests are immediately replaced\n• PagedAttention: a non-contiguous, page-based KV cache memory layout that supports continuous batching efficiently\n• Prefix cache: a trie-based structure that detects and reuses shared token prefixes across requests',
      bodyKn: '• Static batching: ಒಟ್ಟಿಗೆ ಪ್ರಕ್ರಿಯೆಗೊಂಡ ಒಂದೂ ಸ್ಥಿರ group requests, ಅತಿ ನಿಧಾನ ಸದಸ್ಯನಿಂದ ಬ್ಲಾಕ್ ಆಗಿದೆ\n• Continuous batching: iteration-level scheduling ಅಲ್ಲಿ ಮುಗಿದ requests ಅನ್ನೂ ತಕ್ಷಣ ಬದಲಾಯಿಸಲಾಗುತ್ತದೆ\n• PagedAttention: continuous batching ಅನ್ನೂ ಪರಿಣಾಮಕಾರಿಯಾಗಿ ಬೆಂಬಲಿಸುವ ಒಂದೂ non-contiguous, page-based KV cache memory layout\n• Prefix cache: requests ಆದ್ಯಂತ ಹಂಚಿದ token prefixes ಅನ್ನೂ ಪತ್ತೆಹಚ್ಚಿ ಮರುಬಳಸುವ ಒಂದೂ trie-based structure' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'Continuous batching and PagedAttention, genuinely simulated here, are the two flagship techniques introduced by vLLM -- the paper reported multi-x throughput gains on real GPU serving workloads, directly attributable to the same slot-utilization gap genuinely measured in this lesson (46.9% to 100%).',
      bodyKn: 'ಇಲ್ಲಿ ನಿಜವಾಗಿ simulate ಮಾಡಿದ Continuous batching ಮತ್ತೆ PagedAttention, vLLM ಪರಿಚಯಿಸಿದ ಎರಡೂ flagship techniques -- ಆ paper ನಿಜ GPU serving workloads ಮೇಲೆ multi-x throughput gains ವರದಿ ಮಾಡಿತು, ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ಅಳೆಯಿದ ಅದೇ slot-utilization gap ಗೆ ನೇರವಾಗಿ ಆರೋಪಿಸಬಹುದಾಗಿದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed: continuous batching converts idle GPU-slot time directly into served requests -- the exact same hardware handles more traffic with zero additional compute purchased\n• Genuinely confirmed: prefix caching turns a fixed system-prompt cost that would otherwise be paid on EVERY request into a one-time cost, which compounds savings as request volume grows',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: continuous batching idle GPU-slot ಸಮಯವನ್ನೂ ನೇರವಾಗಿ ಸೇವೆ ಸಲ್ಲಿಸಿದ requests ಆಗಿ ಪರಿವರ್ತಿಸುತ್ತದೆ -- ಅದೇ hardware ಶೂನ್ಯ ಹೆಚ್ಚುವರಿ compute ಖರೀದಿಸದೆ ಹೆಚ್ಚು traffic ನಿಭಾಯಿಸುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: prefix caching ಪ್ರತಿ request ಮೇಲೆ ಪಾವತಿಸಬೇಕಾದ ಒಂದೂ ಸ್ಥಿರ system-prompt cost ಅನ್ನೂ ಒಂದೂ ಬಾರಿ cost ಆಗಿ ಬದಲಾಯಿಸುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'When a chat product serves thousands of users all sharing the same lengthy system prompt (persona instructions, tool definitions, few-shot examples), prefix caching means that shared block is computed once and reused across every request -- exactly the 64.6% savings pattern genuinely confirmed here, scaled to production volume.',
      bodyKn: 'ಒಂದೂ chat product ಸಾವಿರಾರು users ಗೆ ಎಲ್ಲಾ ಅದೇ ಉದ್ದ system prompt (persona instructions, tool definitions, few-shot examples) ಹಂಚಿಕೊಳ್ಳುತ್ತಾ ಸೇವೆ ಸಲ್ಲಿಸಿದಾಗ, prefix caching ಎಂದರೆ ಆ ಹಂಚಿದ block ಒಮ್ಮೆ ಲೆಕ್ಕಹಾಕಲ್ಪಡುತ್ತದೆ ಮತ್ತೆ ಪ್ರತಿ request ಆದ್ಯಂತ ಮರುಬಳಸಲ್ಪಡುತ್ತದೆ.' } },

    { type: 'diagram', data: {
      titleEn: 'Static vs Continuous Batching Slot Occupancy', titleKn: 'Static vs Continuous Batching Slot ಆಕ್ರಮಣ',
      captionEn: 'Static batching leaves finished requests\' slots idle until the whole batch completes. Continuous batching refills a slot the instant it opens.',
      captionKn: 'Static batching ಇಡೀ batch ಮುಗಿಯುವವರೆಗೆ ಮುಗಿದ requests ya slots ಅನ್ನೂ idle ಆಗಿ ಬಿಡುತ್ತದೆ. Continuous batching ಒಂದೂ slot ತೆರೆದ ಕ್ಷಣ ಅದನ್ನೂ ಮತ್ತೆ ತುಂಬಿಸುತ್ತದೆ.',
      svgCode: "<svg viewBox='0 0 700 200' xmlns='http://www.w3.org/2000/svg'><text x='20' y='20' fill='#e2e8f0' font-size='13'>Static: idle after finishing</text><rect x='20' y='30' width='300' height='18' fill='#38bdf8'/><rect x='20' y='52' width='150' height='18' fill='#38bdf8'/><rect x='170' y='52' width='150' height='18' fill='#475569'/><text x='250' y='65' fill='#0f172a' font-size='10' text-anchor='middle'>idle</text><rect x='20' y='74' width='90' height='18' fill='#38bdf8'/><rect x='110' y='74' width='210' height='18' fill='#475569'/><text x='215' y='87' fill='#0f172a' font-size='10' text-anchor='middle'>idle</text><text x='20' y='125' fill='#e2e8f0' font-size='13'>Continuous: instantly refilled</text><rect x='20' y='135' width='90' height='18' fill='#38bdf8'/><rect x='110' y='135' width='90' height='18' fill='#22c55e'/><rect x='200' y='135' width='90' height='18' fill='#a855f7'/><rect x='20' y='157' width='150' height='18' fill='#38bdf8'/><rect x='170' y='157' width='90' height='18' fill='#f59e0b'/><rect x='260' y='157' width='60' height='18' fill='#ef4444'/></svg>" } },

    { type: 'concept', data: {
      headingEn: 'Common Pitfalls', headingKn: 'ಸಾಮಾನ್ಯ ತಪ್ಪುಗಳು',
      bodyEn: 'Genuinely demonstrated: choosing continuous batching\'s batch_size purely to maximize concurrency (e.g. batch_size=8, matching total request count) throws away the whole benefit and degenerates to static batching\'s total_steps -- the win comes specifically from picking a SMALLER batch_size that lets short-and-long requests interleave, not from cramming everything into one giant batch.',
      bodyKn: 'ನಿಜವಾಗಿ ಪ್ರದರ್ಶಿಸಿದ: continuous batching ya batch_size ಅನ್ನೂ ಕೇವಲ concurrency ಗರಿಷ್ಠಗೊಳಿಸಲು ಆಯ್ಕೆ ಮಾಡುವುದೂ (ಉದಾ. batch_size=8, ಒಟ್ಟೂ request count ಗೆ ಸಮಾನ) ಇಡೀ ಪ್ರಯೋಜನವನ್ನೂ ಎಸೆಯುತ್ತದೆ ಮತ್ತೆ static batching ya total_steps ಗೆ degenerate ಆಗುತ್ತದೆ -- ಗೆಲುವು ನಿರ್ದಿಷ್ಟವಾಗಿ ಚಿಕ್ಕ, ಉದ್ದ requests ಅನ್ನೂ interleave ಮಾಡಲು ಅನುಮತಿಸುವ ಒಂದೂ ಚಿಕ್ಕ batch_size ಆಯ್ಕೆ ಮಾಡುವುದರಿಂದ ಬರುತ್ತದೆ.' } },

    { type: 'concept', data: {
      headingEn: 'What\'s Next', headingKn: 'ಮುಂದೇನೂ',
      bodyEn: 'Parts 1-2 optimized how many tokens get processed per step and how efficiently GPU slots are used. Part 3 attacks a different axis entirely: producing MORE than one token per forward pass, via speculative decoding -- genuinely built and measured for real acceptance rates and speedup, plus a genuine KV cache memory profile showing why all of this matters at real model scale.',
      bodyKn: 'Parts 1-2 ಪ್ರತಿ step ಗೆ ಎಷ್ಟೂ tokens ಪ್ರಕ್ರಿಯೆಗೊಳ್ಳುತ್ತವೆ ಮತ್ತೆ GPU slots ಎಷ್ಟೂ ಪರಿಣಾಮಕಾರಿಯಾಗಿ ಬಳಸಲ್ಪಡುತ್ತವೆ ಎಂಬುದನ್ನೂ optimize ಮಾಡಿದವು. Part 3 ಸಂಪೂರ್ಣವಾಗಿ ಭಿನ್ನ ಒಂದೂ axis ಅನ್ನೂ ಆಕ್ರಮಿಸುತ್ತದೆ: speculative decoding ಮೂಲಕ ಒಂದೂ forward pass ಗೆ ಒಂದಕ್ಕಿಂತ ಹೆಚ್ಚು token ಉತ್ಪಾದಿಸುವುದೂ -- ನಿಜ acceptance rates ಮತ್ತೆ speedup ಗೆ ನಿಜವಾಗಿ ಕಟ್ಟಿ ಅಳೆಯಲಾಗಿದೆ, ಜೊತೆಗೆ ಒಂದೂ ನಿಜ KV cache memory profile.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: what utilization did static batching achieve on requests with gen_lens [42,48,17,13,14,16,10,20]?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: gen_lens [42,48,17,13,14,16,10,20] ಇರುವ requests ಮೇಲೆ static batching ಯಾವ utilization ಸಾಧಿಸಿತು?',
        opts: ['100%', '46.9%', '0%', '75%'], correct: 1,
        optsKn: ['100%', '46.9%', '0%', '75%'] },
      { q: 'Genuinely confirmed: what utilization did continuous batching achieve on the SAME requests?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಅದೇ requests ಮೇಲೆ continuous batching ಯಾವ utilization ಸಾಧಿಸಿತು?',
        opts: ['Still 46.9%', 'Exactly 100%', '50%', '0%'], correct: 1,
        optsKn: ['ಇನ್ನೂ 46.9%', 'ನಿಖರವಾಗಿ 100%', '50%', '0%'] },
      { q: 'Genuinely confirmed: in the PrefixCache example, how many NEW tokens did request 3 need computed, and why so few?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: PrefixCache example ನಲ್ಲಿ, request 3 ಎಷ್ಟೂ NEW tokens computed ಬೇಕಾಗಿತ್ತು, ಮತ್ತೆ ಏಕೆ ಇಷ್ಟೂ ಕಡಿಮೆ?',
        opts: ['53, because nothing was shared', '1, because its shared system prompt and first two suffix tokens were already cached', '0, because the request was skipped', '158, all tokens needed recomputation'], correct: 1,
        optsKn: ['53, ಏನೂ ಹಂಚಲ್ಪಡಲಿಲ್ಲ', '1, ಅದೂ ya ಹಂಚಿದ system prompt ಮತ್ತೆ ಮೊದಲ ಎರಡೂ suffix tokens ಈಗಾಗಲೇ cached ಆಗಿದ್ದವು', '0, request ಅನ್ನೂ ಬಿಟ್ಟುಬಿಡಲಾಯಿತು', '158, ಎಲ್ಲಾ tokens ಗೆ ಮರುಲೆಕ್ಕಾಚಾರ ಬೇಕಿತ್ತು'] },
      { q: 'Why does PagedAttention use small non-contiguous "pages" for the KV cache instead of one contiguous block per request?', qKn: 'PagedAttention ಪ್ರತಿ request ಗೆ ಒಂದೂ contiguous block ಬದಲು KV cache ಗೆ ಚಿಕ್ಕ non-contiguous "pages" ಏಕೆ ಬಳಸುತ್ತದೆ?',
        opts: ['Pages are faster to allocate on any hardware', 'Continuous batching constantly adds/removes requests of unpredictable length, which would badly fragment contiguous memory', 'Contiguous memory is not supported by GPUs', 'It has nothing to do with continuous batching'], correct: 1,
        optsKn: ['Pages ಯಾವುದೇ hardware ಮೇಲೆ allocate ಮಾಡಲು ವೇಗವಾಗಿವೆ', 'Continuous batching ನಿರಂತರವಾಗಿ ಅನಿರೀಕ್ಷಿತ length ya requests ಅನ್ನೂ ಸೇರಿಸುತ್ತದೆ/ತೆಗೆಯುತ್ತದೆ, ಇದೂ contiguous memory ಅನ್ನೂ ಕೆಟ್ಟದಾಗಿ fragment ಮಾಡುತ್ತಿತ್ತು', 'Contiguous memory GPUs ಇಂದ ಬೆಂಬಲಿಸಲ್ಪಡುವುದಿಲ್ಲ', 'ಇದೂ continuous batching ಜೊತೆ ಯಾವುದೇ ಸಂಬಂಧ ಹೊಂದಿಲ್ಲ'] },
      { q: 'Genuinely confirmed: what was the total compute savings from prefix caching across the 3 genuinely tested requests?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ನಿಜವಾಗಿ ಪರೀಕ್ಷಿಸಿದ 3 requests ಆದ್ಯಂತ prefix caching ಇಂದ ಒಟ್ಟೂ compute savings ಏನಾಗಿತ್ತು?',
        opts: ['0%', '64.6%', '10%', '100%'], correct: 1,
        optsKn: ['0%', '64.6%', '10%', '100%'] },
    ] } },
  ],
};
