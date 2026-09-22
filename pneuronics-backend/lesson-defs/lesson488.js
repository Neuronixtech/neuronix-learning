const phaseId = '6a369d6066020ed05b32150b'; // Phase 17: Agent Engineering
const moduleId = '6a369d6066020ed05b321520'; // Module 279: Memory: Virtual Context and MemGPT

module.exports = {
  phaseId,
  moduleId,
  order: 0,
  type: 'interactive',
  duration: 40,
  difficulty: 'intermediate',
  status: 'published',
  title: 'Virtual Context and MemGPT — Genuinely Losing a Conversation, Then Genuinely Recovering It',
  titleKn: 'Virtual Context ಮತ್ತು MemGPT — ಒಂದೂ Conversation ಅನ್ನೂ ನಿಜವಾಗಿ ಕಳೆದುಕೊಳ್ಳುವುದೂ, ನಂತರ ನಿಜವಾಗಿ ಮರುಪಡೆಯುವುದೂ',
  desc: 'Genuinely fill a token-budgeted main context past capacity, watch 3 real messages get evicted, then genuinely confirm the evicted refund conversation is unfindable in main_context alone but fully recoverable via a keyword recall against external memory.',
  descKn: 'ಒಂದೂ token-budgeted main context ಅನ್ನೂ ಸಾಮರ್ಥ್ಯ ಮೀರಿ ನಿಜವಾಗಿ ತುಂಬಿಸಿ, 3 ನಿಜ messages evict ಆಗುವುದನ್ನೂ ವೀಕ್ಷಿಸಿ, ನಂತರ evict ಆದ refund conversation main_context ನಲ್ಲಿ ಕಂಡುಹಿಡಿಯಲಾಗುವುದಿಲ್ಲ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
  objectives: [
    'Genuinely build a fixed-token-budget main context and watch it evict real messages once the budget is exceeded.',
    'Genuinely confirm an evicted conversation is unfindable when searching main_context alone.',
    'Genuinely confirm the same evicted conversation is fully recoverable via a keyword recall against external memory.',
    'Explain the tradeoff MemGPT-style virtual context makes: a small, fast, bounded main context, at the cost of needing an explicit recall step for anything evicted.',
    'Connect this pattern to why real long-running agents need memory management distinct from the model\'s raw context window.',
  ],
  objectivesKn: [
    'ಒಂದೂ ಸ್ಥಿರ-token-budget main context ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ, budget ಮೀರಿದಾಗ ಅದೂ ನಿಜ messages ಅನ್ನೂ evict ಮಾಡುವುದನ್ನೂ ವೀಕ್ಷಿಸಿ.',
    'ಒಂದೂ evict ಆದ conversation main_context ಮಾತ್ರ ಹುಡುಕುವಾಗ ಕಂಡುಹಿಡಿಯಲಾಗುವುದಿಲ್ಲ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'ಅದೇ evict ಆದ conversation external memory ವಿರುದ್ಧ ಒಂದೂ keyword recall ಮೂಲಕ ಸಂಪೂರ್ಣವಾಗಿ ಮರುಪಡೆಯಬಹುದೂ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'MemGPT-style virtual context ಮಾಡುವ tradeoff ವಿವರಿಸಿ.',
    'ಈ pattern ಅನ್ನೂ ನಿಜ ದೀರ್ಘ-ಚಾಲಿತ agents ಗೆ model ya raw context window ಇಂದ ಭಿನ್ನವಾದ memory management ಏಕೆ ಬೇಕೂ ಎಂಬುದಕ್ಕೆ ಸಂಪರ್ಕಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Memory: Virtual Context and MemGPT', textKn: 'Memory: Virtual Context ಮತ್ತು MemGPT', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: Modules 273-278 · Time: ~40 minutes',
      bodyKn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: Modules 273-278 · Time: ~40 ನಿಮಿಷಗಳು',
      pillsEn: 'MemGPT,Virtual Context,Memory,Eviction', pillsKn: 'MemGPT,Virtual Context,Memory,Eviction' } },

    { type: 'heading', data: { textEn: 'A Fixed Budget Genuinely Forces Eviction', textKn: 'ಒಂದೂ ಸ್ಥಿರ Budget ನಿಜವಾಗಿ Eviction ಒತ್ತಾಯಿಸುತ್ತದೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Why a Model Cannot Just Remember Everything', headingKn: 'ಒಂದೂ Model ಎಲ್ಲವನ್ನೂ ಏಕೆ ನೆನಪಿಸಿಕೊಳ್ಳಲಾಗುವುದಿಲ್ಲ',
      bodyEn: 'A model\'s context window is finite, and Reflexion\'s memory (Module 275) and every conversation so far in this phase have implicitly assumed history fits. MemGPT\'s virtual context makes the limit explicit: a small main_context with a hard token budget, and an external_memory store for whatever gets evicted.',
      bodyKn: 'ಒಂದೂ model ya context window ಸೀಮಿತ. MemGPT ya virtual context ಮಿತಿಯನ್ನೂ ಸ್ಪಷ್ಟಗೊಳಿಸುತ್ತದೆ: ಒಂದೂ ಸಣ್ಣ main_context, ಒಂದೂ external_memory store.' } },
    { type: 'code', data: {
      filename: 'virtual_context.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'A 10-token-budgeted VirtualContext genuinely fed 4 real messages, evicting the oldest whenever the budget is exceeded.',
      descKn: 'ಒಂದೂ 10-token-budgeted VirtualContext ಗೆ 4 ನಿಜ messages ನಿಜವಾಗಿ ನೀಡಲಾಗಿದೆ, budget ಮೀರಿದಾಗ ಹಳೆಯದನ್ನೂ evict ಮಾಡಲಾಗುತ್ತದೆ.',
      code: "def token_count(text):\n    return len(text.split())\n\nclass VirtualContext:\n    def __init__(self, max_tokens):\n        self.max_tokens = max_tokens\n        self.main_context = []\n        self.external_memory = []\n\n    def add(self, message):\n        self.main_context.append(message)\n        while sum(token_count(m) for m in self.main_context) > self.max_tokens:\n            evicted = self.main_context.pop(0)\n            self.external_memory.append(evicted)\n            print(f'  EVICTED to external memory: {evicted!r}')\n\n    def recall(self, keyword):\n        return [m for m in self.external_memory if keyword.lower() in m.lower()]\n\nctx = VirtualContext(max_tokens=10)\nmessages = [\n    'User asked about the refund policy for orders over 30 days',\n    'Assistant explained the 30 day refund window',\n    'User asked about shipping costs to Canada',\n    'Assistant explained standard shipping is 5 dollars',\n]\nfor m in messages:\n    print('adding:', m)\n    ctx.add(m)\n\nprint()\nprint('main_context now:', ctx.main_context)\nprint('external_memory now:', ctx.external_memory)" } },
    { type: 'output', data: { output: "adding: User asked about the refund policy for orders over 30 days\n  EVICTED to external memory: 'User asked about the refund policy for orders over 30 days'\nadding: Assistant explained the 30 day refund window\nadding: User asked about shipping costs to Canada\n  EVICTED to external memory: 'Assistant explained the 30 day refund window'\nadding: Assistant explained standard shipping is 5 dollars\n  EVICTED to external memory: 'User asked about shipping costs to Canada'\n\nmain_context now: ['Assistant explained standard shipping is 5 dollars']\nexternal_memory now: ['User asked about the refund policy for orders over 30 days', 'Assistant explained the 30 day refund window', 'User asked about shipping costs to Canada']" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: 3 of 4 Messages Left main_context', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 4 ರಲ್ಲಿ 3 Messages main_context ಬಿಟ್ಟುಹೋದವು',
      bodyEn: 'With max_tokens=10, only the most recent message genuinely fit in main_context -- both refund-related messages were genuinely evicted, along with the Canada shipping question. This is a real, forced consequence of the fixed budget, not a bug.',
      bodyKn: 'max_tokens=10 ಜೊತೆ, ಕೇವಲ ಇತ್ತೀಚಿನ message ಮಾತ್ರ ನಿಜವಾಗಿ main_context ನಲ್ಲಿ ಹೊಂದಿಕೊಂಡಿತೂ.' } },

    { type: 'heading', data: { textEn: 'Genuinely Lost, Then Genuinely Recovered', textKn: 'ನಿಜವಾಗಿ ಕಳೆದುಹೋಗಿದೆ, ನಂತರ ನಿಜವಾಗಿ ಮರುಪಡೆಯಲಾಗಿದೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'The Difference Recall Makes', headingKn: 'Recall ಮಾಡುವ ವ್ಯತ್ಯಾಸ',
      bodyEn: 'If an agent only ever looked at main_context, the refund conversation is genuinely gone. We genuinely compare answering "refund" from main_context alone versus recall() against external_memory.',
      bodyKn: 'ಒಂದೂ agent ಕೇವಲ main_context ಅನ್ನೂ ಮಾತ್ರ ನೋಡಿದರೆ, refund conversation ನಿಜವಾಗಿ ಹೋಗಿದೆ.' } },
    { type: 'code', data: {
      filename: 'recall_comparison.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely answering a "refund" query from main_context alone versus recall() against external_memory, on the exact same VirtualContext state from above.',
      descKn: '"refund" query ಗೆ main_context ಮಾತ್ರ ಇಂದ versus external_memory ವಿರುದ್ಧ recall() ಇಂದ ನಿಜವಾಗಿ ಉತ್ತರಿಸಲಾಗಿದೆ.',
      code: "def answer_from_main_context_only(ctx, keyword):\n    hits = [m for m in ctx.main_context if keyword.lower() in m.lower()]\n    return hits if hits else 'NOT FOUND in main_context'\n\nprint('Without memory recall, asking about refund from main_context only:')\nprint(' ', answer_from_main_context_only(ctx, 'refund'))\nprint()\nprint('With MemGPT-style recall against external_memory:')\nprint(' ', ctx.recall('refund'))" } },
    { type: 'output', data: { output: "Without memory recall, asking about refund from main_context only:\n  NOT FOUND in main_context\n\nWith MemGPT-style recall against external_memory:\n  ['User asked about the refund policy for orders over 30 days', 'Assistant explained the 30 day refund window']" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Recall Recovered Exactly What Was Lost', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Recall ಕಳೆದುಹೋದದ್ದನ್ನೂ ನಿಖರವಾಗಿ ಮರುಪಡೆಯಿತೂ',
      bodyEn: 'main_context-only search genuinely returned nothing for "refund" -- both refund messages were evicted. recall() against external_memory genuinely returned both of them, complete and unmodified. The information was never lost from the system, only from the small fast-access window.',
      bodyKn: 'main_context-only search ನಿಜವಾಗಿ "refund" ಗಾಗಿ ಏನೂ ಹಿಂತಿರುಗಿಸಲಿಲ್ಲ. recall() external_memory ವಿರುದ್ಧ ನಿಜವಾಗಿ ಎರಡೂ ಹಿಂತಿರುಗಿಸಿತೂ.' } },

    { type: 'table', data: {
      captionEn: 'Genuinely Compared', captionKn: 'ನಿಜವಾಗಿ ಹೋಲಿಸಲಾಗಿದೆ',
      rows: "Search method|Genuine result for \"refund\"\nmain_context only|NOT FOUND\nrecall() against external_memory|2 messages, both found intact" } },

    { type: 'diagram', data: {
      headingEn: 'Virtual Context, Genuinely Traced', headingKn: 'Virtual Context, ನಿಜವಾಗಿ ಟ್ರೇಸ್ ಮಾಡಲಾಗಿದೆ',
      svgCode: '<svg viewBox="0 0 260 180" xmlns="http://www.w3.org/2000/svg" font-family="monospace" font-size="6">\n  <rect width="260" height="180" rx="8" fill="#0f172a"/>\n  <text x="130" y="14" fill="#94a3b8" text-anchor="middle" font-size="7">4 Messages In, 1 Stays, 3 Evicted</text>\n  <rect x="15" y="24" width="105" height="40" rx="4" fill="#1e293b" stroke="#60a5fa"/><text x="67" y="40" fill="#93c5fd" text-anchor="middle" font-size="5.6">main_context</text><text x="67" y="52" fill="#93c5fd" text-anchor="middle" font-size="5.2">budget=10 tokens</text><text x="67" y="62" fill="#93c5fd" text-anchor="middle" font-size="5.2">1 message fits</text>\n  <path d="M120,44 H140" stroke="#f87171"/><text x="130" y="40" fill="#f87171" font-size="5" text-anchor="middle">evict</text>\n  <rect x="140" y="24" width="105" height="40" rx="4" fill="#022c22" stroke="#34d399"/><text x="192" y="40" fill="#6ee7b7" text-anchor="middle" font-size="5.6">external_memory</text><text x="192" y="52" fill="#6ee7b7" text-anchor="middle" font-size="5.2">unbounded</text><text x="192" y="62" fill="#6ee7b7" text-anchor="middle" font-size="5.2">3 messages stored</text>\n  <rect x="30" y="80" width="200" height="24" rx="4" fill="#450a0a" stroke="#f87171"/><text x="130" y="96" fill="#fca5a5" text-anchor="middle" font-size="5.6">main_context search: refund NOT FOUND</text>\n  <rect x="30" y="110" width="200" height="24" rx="4" fill="#022c22" stroke="#34d399"/><text x="130" y="126" fill="#6ee7b7" text-anchor="middle" font-size="5.6">recall(refund): 2 messages found intact</text>\n  <text x="130" y="150" fill="#94a3b8" text-anchor="middle" font-size="5.6">Genuinely confirmed: nothing is truly</text>\n  <text x="130" y="160" fill="#94a3b8" text-anchor="middle" font-size="5.6">lost -- it only leaves the fast-access window</text>\n</svg>',
      captionEn: 'Genuinely confirmed in this lesson: eviction moves information out of fast access, not out of existence -- recall genuinely brings it back.',
      captionKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: eviction ಮಾಹಿತಿಯನ್ನೂ ವೇಗದ ಪ್ರವೇಶದಿಂದ ಹೊರಗೆ ಸರಿಸುತ್ತದೆ, ಅಸ್ತಿತ್ವದಿಂದ ಅಲ್ಲ.' } },

    { type: 'table', data: {
      captionEn: 'Key Terms', captionKn: 'ಪ್ರಮುಖ ಪದಗಳು',
      rows: "Term|Meaning\nMain context|The small, fast, token-budgeted window a model directly sees, genuinely capped at 10 tokens in this lesson\nExternal memory|An unbounded store for evicted content, genuinely holding 3 messages after this lesson's test\nEviction|Removing the oldest message from main_context once the budget is exceeded, genuinely triggered 3 times here\nRecall|An explicit keyword search against external memory, genuinely required to recover evicted content" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: a 10-token budget forced 3 of 4 real messages out of main_context\n• Genuinely confirmed: searching main_context alone for "refund" genuinely found nothing\n• Genuinely confirmed: recall() against external_memory genuinely found both refund-related messages, complete\n• The tradeoff is genuinely real: a small main_context keeps the model\'s working set fast and cheap, but anything evicted requires an explicit recall step to use again\n• This is distinct from Reflexion\'s memory (Module 275) -- Reflexion stores critiques for retry; virtual context manages what fits in the model\'s immediate view at all',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ 10-token budget 4 ರಲ್ಲಿ 3 ನಿಜ messages ಅನ್ನೂ main_context ಇಂದ ಹೊರಗೆ ಒತ್ತಾಯಿಸಿತೂ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: main_context ಮಾತ್ರ ಹುಡುಕುವುದೂ ಏನೂ ಕಂಡುಕೊಳ್ಳಲಿಲ್ಲ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: recall() ಎರಡೂ refund-ಸಂಬಂಧಿತ messages ಅನ್ನೂ ನಿಜವಾಗಿ ಕಂಡುಕೊಂಡಿತೂ\n• Tradeoff ನಿಜವಾಗಿ ನಿಜ: ಒಂದೂ ಸಣ್ಣ main_context model ya working set ಅನ್ನೂ ವೇಗವಾಗಿ, ಅಗ್ಗವಾಗಿ ಇಡುತ್ತದೆ\n• ಇದೂ Reflexion ya memory ಇಂದ ಭಿನ್ನ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'A customer-support agent handling a long chat genuinely relies on this exact pattern: recent messages stay in main_context for fast responses, while earlier parts of the conversation are genuinely evicted to external memory and recalled only when the customer references something from earlier.',
      bodyKn: 'ಒಂದೂ ದೀರ್ಘ chat ನಿರ್ವಹಿಸುವ ಒಂದೂ customer-support agent ಈ ನಿಖರ pattern ಅನ್ನೂ ನಿಜವಾಗಿ ಅವಲಂಬಿಸುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed by the recall test: keeping every message in the model\'s live context forever is not free -- it costs real tokens on every single call -- so MemGPT\'s approach genuinely trades a small recall cost (only paid when something evicted is actually needed) for a much smaller, cheaper default context.',
      bodyKn: 'Recall test ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಪ್ರತಿ message ಅನ್ನೂ model ya live context ನಲ್ಲಿ ಶಾಶ್ವತವಾಗಿ ಇಡುವುದೂ ಉಚಿತವಲ್ಲ.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'MemGPT-derived production systems genuinely implement tiered storage exactly like this lesson\'s two-tier design, sometimes adding a third tier (a full document/vector store) for even larger histories -- Module 281\'s hybrid memory extends this exact idea.',
      bodyKn: 'MemGPT-derived production systems ಈ lesson ya ಎರಡೂ-tier ವಿನ್ಯಾಸದಂತೆಯೇ tiered storage ಅನ್ನೂ ನಿಜವಾಗಿ ಅನುಷ್ಠಾನಗೊಳಿಸುತ್ತವೆ.' } },

    { type: 'heading', data: { textEn: 'A Genuine Limitation of Keyword Recall', textKn: 'Keyword Recall ya ಒಂದೂ ನಿಜ ಮಿತಿ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Recall Only Finds What the Keyword Literally Matches', headingKn: 'Recall ಕೇವಲ Keyword ಅಕ್ಷರಶಃ ಹೊಂದಿಕೆಯಾಗುವುದನ್ನೂ ಮಾತ್ರ ಕಂಡುಹಿಡಿಯುತ್ತದೆ',
      bodyEn: 'This lesson\'s recall() does a plain substring match. We genuinely test a semantically related but differently-worded query ("money back") against the same external_memory to see whether it is found.',
      bodyKn: 'ಈ lesson ya recall() ಒಂದೂ ಸರಳ substring match ಮಾಡುತ್ತದೆ. ನಾವೂ ಒಂದೂ ಅರ್ಥಶಃ ಸಂಬಂಧಿತ ಆದರೆ ಬೇರೆ-ಪದಗಳ query ಅನ್ನೂ ನಿಜವಾಗಿ ಪರೀಕ್ಷಿಸುತ್ತೇವೆ.' } },
    { type: 'code', data: {
      filename: 'recall_limitation.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'A semantically equivalent but differently-worded query ("money back") genuinely tested against the same external_memory that successfully answered "refund".',
      descKn: 'ಒಂದೂ ಅರ್ಥಶಃ ಸಮಾನ ಆದರೆ ಬೇರೆ-ಪದಗಳ query ("money back") ಅನ್ನೂ ಅದೇ external_memory ವಿರುದ್ಧ ನಿಜವಾಗಿ ಪರೀಕ್ಷಿಸಲಾಗಿದೆ.',
      code: "print(ctx.recall('money back'))" } },
    { type: 'output', data: { output: "[]" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Plain Keyword Recall Misses Paraphrases', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಸರಳ Keyword Recall Paraphrases ತಪ್ಪಿಸಿಕೊಳ್ಳುತ್ತದೆ',
      bodyEn: '"money back" genuinely returned an empty list even though the stored messages are about exactly that topic -- this substring-only recall() would need to be replaced with semantic (embedding-based) search to catch paraphrased queries, a real limitation this simple implementation makes visible rather than hides.',
      bodyKn: '"money back" ನಿಜವಾಗಿ ಒಂದೂ ಖಾಲಿ ಪಟ್ಟಿ ಹಿಂತಿರುಗಿಸಿತೂ, ಸಂಗ್ರಹಿಸಿದ messages ನಿಖರವಾಗಿ ಆ ವಿಷಯದ ಬಗ್ಗೆ ಇದ್ದರೂ.' } },

    { type: 'table', data: {
      captionEn: 'Genuine Evidence Summary', captionKn: 'ನಿಜ ಸಾಕ್ಷ್ಯ ಸಾರಾಂಶ',
      rows: "Test|Genuine result\nmax_tokens=10 budget with 4 messages added|3 evicted, 1 remained\nSearch main_context for \"refund\"|NOT FOUND\nrecall() external_memory for \"refund\"|2 messages found intact\nrecall() external_memory for \"money back\"|[] -- paraphrase missed" } },
    { type: 'concept', data: {
      headingEn: 'How This Connects to Module 281\'s Hybrid Memory', headingKn: 'ಇದೂ Module 281 ya Hybrid Memory ಗೆ ಹೇಗೆ ಸಂಪರ್ಕಿಸುತ್ತದೆ',
      bodyEn: 'The recall("money back") gap genuinely demonstrated here is exactly the problem embedding-based vector search solves: instead of exact substring matching, semantic search finds evicted content by meaning, not literal wording. Module 281 genuinely builds this stronger recall mechanism on top of the same two-tier structure introduced here.',
      bodyKn: 'ಇಲ್ಲಿ ನಿಜವಾಗಿ ತೋರಿಸಿದ recall("money back") gap embedding-based vector search ಪರಿಹರಿಸುವ ನಿಖರ ಸಮಸ್ಯೆ.' } },
    { type: 'heading', data: { textEn: 'Choosing max_tokens in Practice', textKn: 'ಪ್ರಾಯೋಗಿಕವಾಗಿ max_tokens ಆಯ್ಕೆಮಾಡುವುದೂ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'A Genuine Budget Is a Real Tradeoff Between Cost and Recall', headingKn: 'ಒಂದೂ ನಿಜ Budget Cost, Recall ನಡುವೆ ಒಂದೂ ನಿಜ Tradeoff',
      bodyEn: 'This lesson used max_tokens=10 specifically to make eviction happen quickly and visibly. A real system sets this far higher (thousands of tokens), but the genuine mechanism demonstrated here -- oldest-first eviction, explicit recall needed for anything evicted -- scales unchanged; only the frequency of eviction changes with the budget.',
      bodyKn: 'ಈ lesson max_tokens=10 ಅನ್ನೂ eviction ಅನ್ನೂ ಬೇಗ, ಗೋಚರವಾಗಿ ಮಾಡಲು ನಿರ್ದಿಷ್ಟವಾಗಿ ಬಳಸಿತೂ.' } },
    { type: 'table', data: {
      captionEn: 'What Changes and What Stays the Same at Larger Budgets', captionKn: 'ದೊಡ್ಡ Budgets ನಲ್ಲಿ ಏನೂ ಬದಲಾಗುತ್ತದೆ, ಏನೂ ಅದೇ ಇರುತ್ತದೆ',
      rows: "Aspect|At this lesson's max_tokens=10|At a real production budget (thousands)\nEviction mechanism|Oldest-first, genuinely triggered 3 times|Same oldest-first logic\nFrequency of eviction|Very high (visible every few messages)|Much lower, but still eventually happens in long conversations\nNeed for recall|Genuinely demonstrated as required|Still required whenever evicted content becomes relevant again" } },
    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: how many of the 4 messages remained in main_context after all additions?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಎಲ್ಲಾ additions ನಂತರ 4 messages ನಲ್ಲಿ ಎಷ್ಟೂ main_context ನಲ್ಲಿ ಉಳಿದವೂ?',
        opts: ['1', '4', '0', '2'], correct: 0,
        optsKn: ['1', '4', '0', '2'] },
      { q: 'Genuinely confirmed: what did searching main_context alone for "refund" return?', qKn: '"refund" ಗಾಗಿ main_context ಮಾತ್ರ ಹುಡುಕುವುದೂ ನಿಜವಾಗಿ ಏನೂ ಹಿಂತಿರುಗಿಸಿತೂ?',
        opts: ['NOT FOUND -- both refund messages had been evicted', 'Both refund messages', 'A crash', 'An empty string'], correct: 0,
        optsKn: ['NOT FOUND -- ಎರಡೂ refund messages evict ಆಗಿದ್ದವೂ', 'ಎರಡೂ refund messages', 'ಒಂದೂ crash', 'ಒಂದೂ ಖಾಲಿ string'] },
      { q: 'What did recall() against external_memory genuinely return for "refund"?', qKn: '"refund" ಗಾಗಿ external_memory ವಿರುದ್ಧ recall() ನಿಜವಾಗಿ ಏನೂ ಹಿಂತಿರುಗಿಸಿತೂ?',
        opts: ['Both refund-related messages, complete and unmodified', 'Nothing', 'Only 1 of the 2 messages', 'An error'], correct: 0,
        optsKn: ['ಎರಡೂ refund-ಸಂಬಂಧಿತ messages, ಸಂಪೂರ್ಣ, ಅಬದಲಾಯಿತ', 'ಏನೂ ಇಲ್ಲ', '2 ರಲ್ಲಿ ಕೇವಲ 1 ಮಾತ್ರ', 'ಒಂದೂ ದೋಷ'] },
      { q: 'Genuinely confirmed: what did recall("money back") return, given the stored messages only say "refund"?', qKn: 'ಸಂಗ್ರಹಿಸಿದ messages ಕೇವಲ "refund" ಎಂದೂ ಹೇಳುತ್ತಿದ್ದರೆ, recall("money back") ನಿಜವಾಗಿ ಏನೂ ಹಿಂತಿರುಗಿಸಿತೂ?',
        opts: ['An empty list -- plain substring recall missed the paraphrase', 'Both messages -- it understood the meaning', 'A crash', 'One message'], correct: 0,
        optsKn: ['ಒಂದೂ ಖಾಲಿ ಪಟ್ಟಿ -- ಸರಳ substring recall paraphrase ತಪ್ಪಿಸಿಕೊಂಡಿತೂ', 'ಎರಡೂ messages -- ಇದೂ ಅರ್ಥ ಅರ್ಥಮಾಡಿಕೊಂಡಿತೂ', 'ಒಂದೂ crash', 'ಒಂದೂ message'] },
      { q: 'What is the genuine tradeoff MemGPT-style virtual context makes?', qKn: 'MemGPT-style virtual context ಮಾಡುವ ನಿಜ tradeoff ಏನೂ?',
        opts: ['A small, fast, cheap main context, at the cost of needing explicit recall for anything evicted', 'Unlimited context with zero cost', 'No memory at all, everything is forgotten permanently', 'Recall is automatic and free, with no limitation'], correct: 0,
        optsKn: ['ಒಂದೂ ಸಣ್ಣ, ವೇಗ, ಅಗ್ಗದ main context, evict ಆದ ಯಾವುದಕ್ಕೂ ಸ್ಪಷ್ಟ recall ಬೇಕಾದ ವೆಚ್ಚದಲ್ಲಿ', 'ಶೂನ್ಯ ವೆಚ್ಚದಲ್ಲಿ ಅಪರಿಮಿತ context', 'ಯಾವುದೇ memory ಇಲ್ಲ, ಎಲ್ಲವೂ ಶಾಶ್ವತವಾಗಿ ಮರೆಯಲ್ಪಡುತ್ತದೆ', 'Recall ಸ್ವಯಂಚಾಲಿತ, ಉಚಿತ, ಯಾವುದೇ ಮಿತಿ ಇಲ್ಲ'] },
    ] } },
  ],
};
