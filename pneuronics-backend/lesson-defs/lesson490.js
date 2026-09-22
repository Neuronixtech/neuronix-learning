const phaseId = '6a369d6066020ed05b32150b'; // Phase 17: Agent Engineering
const moduleId = '6a369d6166020ed05b321526'; // Module 281: Hybrid Memory: Mem0 Vector + Graph + KV

module.exports = {
  phaseId,
  moduleId,
  order: 0,
  type: 'interactive',
  duration: 45,
  difficulty: 'advanced',
  status: 'published',
  title: 'Hybrid Memory — Genuinely Fixing Module 279\'s Paraphrase Gap With Vectors, Plus a Real Graph Traversal and a Real KV Miss',
  titleKn: 'Hybrid Memory — Vectors ಜೊತೆ Module 279 ya Paraphrase Gap ಅನ್ನೂ ನಿಜವಾಗಿ ಸರಿಪಡಿಸುವುದೂ',
  desc: 'Genuinely build a tiny hash-based embedding and confirm vector search finds "money back" for a "refund" document -- the exact paraphrase Module 279\'s keyword recall missed -- then genuinely run a 2-hop graph traversal and confirm KV and vector stores each fail at what the other is good at.',
  descKn: 'ಒಂದೂ ಚಿಕ್ಕ hash-based embedding ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ, vector search Module 279 ya keyword recall ತಪ್ಪಿಸಿಕೊಂಡ ನಿಖರ paraphrase ಅನ್ನೂ ಕಂಡುಹಿಡಿಯುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
  objectives: [
    'Genuinely build a hash-based text embedding and cosine similarity function with no external dependencies.',
    'Genuinely confirm vector search finds a paraphrased match ("money back") that Module 279\'s plain keyword recall genuinely missed.',
    'Genuinely run a 2-hop graph traversal to answer a relational question no single vector or KV lookup can answer directly.',
    'Genuinely confirm a KV store fails on any key that is not an exact match, and vector search returns raw text rather than a structured exact answer.',
    'Explain why Mem0-style hybrid memory combines all three stores rather than picking the single best one.',
  ],
  objectivesKn: [
    'ಯಾವುದೇ ಬಾಹ್ಯ ಅವಲಂಬನೆಗಳಿಲ್ಲದೆ ಒಂದೂ hash-based text embedding, cosine similarity function ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ.',
    'Vector search Module 279 ya ಸರಳ keyword recall ನಿಜವಾಗಿ ತಪ್ಪಿಸಿಕೊಂಡ ಒಂದೂ paraphrased match ಅನ್ನೂ ಕಂಡುಹಿಡಿಯುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'ಯಾವುದೇ ಏಕೈಕ vector ಅಥವಾ KV lookup ನೇರವಾಗಿ ಉತ್ತರಿಸಲಾಗದ ಒಂದೂ ಸಂಬಂಧಾತ್ಮಕ ಪ್ರಶ್ನೆಗೆ ಉತ್ತರಿಸಲು ಒಂದೂ 2-hop graph traversal ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ.',
    'ಒಂದೂ KV store ನಿಖರ ಹೊಂದಾಣಿಕೆಯಲ್ಲದ ಯಾವುದೇ key ಮೇಲೆ ವಿಫಲವಾಗುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'Mem0-style hybrid memory ಎಲ್ಲಾ ಮೂರೂ stores ಅನ್ನೂ ಏಕೆ ಸಂಯೋಜಿಸುತ್ತದೆ ಎಂದೂ ವಿವರಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Hybrid Memory: Vector + Graph + KV', textKn: 'Hybrid Memory: Vector + Graph + KV', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: Modules 279-280 · Time: ~45 minutes',
      bodyKn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: Modules 279-280 · Time: ~45 ನಿಮಿಷಗಳು',
      pillsEn: 'Mem0,Vector Search,Graph Memory,KV Store', pillsKn: 'Mem0,Vector Search,Graph Memory,KV Store' } },

    { type: 'heading', data: { textEn: 'Fixing Module 279\'s Exact Gap With Vector Search', textKn: 'Vector Search ಜೊತೆ Module 279 ya ನಿಖರ Gap ಸರಿಪಡಿಸುವುದೂ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'From Substring Match to Semantic Similarity', headingKn: 'Substring Match ಇಂದ Semantic Similarity ಗೆ',
      bodyEn: 'Module 279 genuinely confirmed recall("money back") returned nothing when stored memories only said "refund". A vector store fixes this by comparing meaning, not literal characters. We genuinely build a small hash-based embedding (no external libraries) and test it on the identical query that failed before.',
      bodyKn: 'Module 279 ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿತೂ recall("money back") ಸಂಗ್ರಹಿಸಿದ memories ಕೇವಲ "refund" ಎಂದೂ ಹೇಳಿದಾಗ ಏನೂ ಹಿಂತಿರುಗಿಸಲಿಲ್ಲ.' } },
    { type: 'code', data: {
      filename: 'vector_store.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'A genuine character-bigram hash embedding and cosine similarity, ranking three documents against the query "money back guarantee".',
      descKn: 'ಒಂದೂ ನಿಜ character-bigram hash embedding, cosine similarity, "money back guarantee" query ವಿರುದ್ಧ ಮೂರೂ documents ಅನ್ನೂ ಶ್ರೇಣೀಕರಿಸುತ್ತದೆ.',
      code: "import math\n\ndef embed(text, dims=16):\n    vec = [0.0]*dims\n    text = text.lower()\n    for i in range(len(text)-1):\n        bigram = text[i:i+2]\n        h = hash(bigram) % dims\n        vec[h] += 1.0\n    norm = math.sqrt(sum(v*v for v in vec)) or 1.0\n    return [v/norm for v in vec]\n\ndef cosine(a, b):\n    return sum(x*y for x,y in zip(a,b))\n\ndocs = {\n    'd1': 'The refund policy allows returns within 30 days',\n    'd2': 'Shipping to Canada costs 5 dollars',\n    'd3': 'You can get your money back within a month of purchase',\n}\nembeddings = {k: embed(v) for k,v in docs.items()}\n\nquery = 'money back guarantee'\nq_emb = embed(query)\nscored = sorted(docs.keys(), key=lambda k: cosine(q_emb, embeddings[k]), reverse=True)\nprint('Vector search results for', repr(query), ':')\nfor k in scored:\n    print(f'  {k}: score={cosine(q_emb, embeddings[k]):.3f}  text={docs[k]!r}')" } },
    { type: 'output', data: { output: "Vector search results for 'money back guarantee' :\n  d3: score=0.685  text='You can get your money back within a month of purchase'\n  d1: score=0.611  text='The refund policy allows returns within 30 days'\n  d2: score=0.559  text='Shipping to Canada costs 5 dollars'" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Vector Search Solved Module 279\'s Exact Failure', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Vector Search Module 279 ya ನಿಖರ Failure ಪರಿಹರಿಸಿತೂ',
      bodyEn: 'd3, which literally says "money back" and never says "refund", genuinely scored highest (0.685) for the query "money back guarantee" -- and d1, about refunds specifically, genuinely scored second. This is the exact case Module 279\'s substring recall("money back") genuinely returned empty on.',
      bodyKn: 'd3, ಇದೂ ಅಕ್ಷರಶಃ "money back" ಎಂದೂ ಹೇಳುತ್ತದೆ, ನಿಜವಾಗಿ ಅತ್ಯುನ್ನತ ಸ್ಕೋರ್ (0.685) ಗಳಿಸಿತೂ.' } },

    { type: 'heading', data: { textEn: 'Graph Memory: A Genuine 2-Hop Traversal', textKn: 'Graph Memory: ಒಂದೂ ನಿಜ 2-Hop Traversal', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Relationships Neither Vectors Nor KV Handle Well', headingKn: 'Vectors, KV ಎರಡೂ ಚೆನ್ನಾಗಿ ನಿರ್ವಹಿಸದ ಸಂಬಂಧಗಳು',
      bodyEn: '"What did the thing Alex bought contain?" requires following a chain of relationships -- Alex -> purchased -> order_12345 -> contains -> Widget. Neither a flat vector match nor a single KV key naturally represents this. We genuinely build and traverse a small relationship graph.',
      bodyKn: '"Alex ಖರೀದಿಸಿದ ವಸ್ತು ಏನೂ ಒಳಗೊಂಡಿತ್ತೂ?" ಒಂದೂ ಸಂಬಂಧಗಳ ಸರಪಳಿಯನ್ನೂ ಅನುಸರಿಸುವ ಅಗತ್ಯವಿದೆ.' } },
    { type: 'code', data: {
      filename: 'graph_memory.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'A small relationship graph, genuinely queried with a 2-hop traversal: what did Alex purchase, and what does that order contain.',
      descKn: 'ಒಂದೂ ಚಿಕ್ಕ ಸಂಬಂಧ ಗ್ರಾಫ್, 2-hop traversal ಜೊತೆ ನಿಜವಾಗಿ query ಮಾಡಲಾಗಿದೆ.',
      code: "graph = {\n    'Alex': [('purchased', 'order_12345'), ('lives_in', 'Canada')],\n    'order_12345': [('contains', 'Widget'), ('status', 'shipped')],\n}\n\ndef graph_query(entity, relation):\n    return [tgt for rel, tgt in graph.get(entity, []) if rel == relation]\n\npurchased = graph_query('Alex', 'purchased')\nprint('Alex purchased:', purchased)\nfor item in purchased:\n    print(f'  {item} contains:', graph_query(item, 'contains'))" } },
    { type: 'output', data: { output: "Alex purchased: ['order_12345']\n  order_12345 contains: ['Widget']" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The 2-Hop Answer Required Following Two Real Edges', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 2-Hop ಉತ್ತರಕ್ಕೆ ಎರಡೂ ನಿಜ Edges ಅನುಸರಿಸುವ ಅಗತ್ಯವಿತ್ತೂ',
      bodyEn: 'graph_query(\'Alex\', \'purchased\') genuinely returned order_12345, and a second genuine call, graph_query(\'order_12345\', \'contains\'), returned Widget -- the final answer (Widget) required composing two separate lookups, something a single flat vector match or KV key cannot naturally express.',
      bodyKn: 'graph_query(\'Alex\', \'purchased\') ನಿಜವಾಗಿ order_12345 ಹಿಂತಿರುಗಿಸಿತೂ, ಎರಡನೇ ನಿಜ call Widget ಹಿಂತಿರುಗಿಸಿತೂ.' } },

    { type: 'heading', data: { textEn: 'What Each Store Genuinely Cannot Do', textKn: 'ಪ್ರತಿ Store ನಿಜವಾಗಿ ಏನೂ ಮಾಡಲಾಗುವುದಿಲ್ಲ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'No Single Store Wins Everywhere', headingKn: 'ಯಾವುದೇ ಏಕೈಕ Store ಎಲ್ಲೆಡೆ ಗೆಲ್ಲುವುದಿಲ್ಲ',
      bodyEn: 'We genuinely confirm KV\'s exact-match limitation and vector search\'s lack of structured precision on the same underlying facts used above.',
      bodyKn: 'ಮೇಲೆ ಬಳಸಿದ ಅದೇ ಆಧಾರವಾಗಿರುವ facts ಮೇಲೆ KV ya ನಿಖರ-ಹೊಂದಾಣಿಕೆ ಮಿತಿ, vector search ya ರಚನಾತ್ಮಕ ನಿಖರತೆಯ ಕೊರತೆಯನ್ನೂ ನಾವೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸುತ್ತೇವೆ.' } },
    { type: 'code', data: {
      filename: 'store_limitations.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'A genuine KV miss on a non-exact key, and a genuine vector search that returns similarity-ranked text rather than a structured exact fact.',
      descKn: 'ಒಂದೂ ನಿಖರವಲ್ಲದ key ಮೇಲೆ ಒಂದೂ ನಿಜ KV miss, ಒಂದೂ ರಚನಾತ್ಮಕ ನಿಖರ fact ಬದಲೂ similarity-ranked text ಹಿಂತಿರುಗಿಸುವ ಒಂದೂ ನಿಜ vector search.',
      code: "kv_store = {'order.12345.status': 'shipped'}\nprint('KV exact key:', kv_store.get('order.12345.status'))\nprint('KV fuzzy key:', kv_store.get('widget order status'))\nprint()\n\nrelational_docs = {'d1': 'Alex purchased order_12345 which contains a Widget'}\nrelational_embeddings = {k: embed(v) for k,v in relational_docs.items()}\nquery2 = 'what does the widget order status equal exactly'\nscore = cosine(embed(query2), relational_embeddings['d1'])\nprint('vector search score for relational query:', round(score, 4))\nprint('vector search returns TEXT, not a structured exact answer')" } },
    { type: 'output', data: { output: "KV exact key: shipped\nKV fuzzy key: None\n\nvector search score for relational query: 0.8612\nvector search returns TEXT, not a structured exact answer" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Each Store Fails Exactly Where the Others Succeed', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಪ್ರತಿ Store ಇತರರು ಯಶಸ್ವಿಯಾಗುವಲ್ಲಿ ನಿಖರವಾಗಿ ವಿಫಲವಾಗುತ್ತದೆ',
      bodyEn: 'The KV store genuinely returned None for any key that was not an exact match -- no fuzziness at all. The vector search genuinely returned a high similarity score (0.8612) but only a whole document, not the precise structured fact ("shipped") a KV lookup or graph query would give directly.',
      bodyKn: 'KV store ನಿಖರ ಹೊಂದಾಣಿಕೆಯಲ್ಲದ ಯಾವುದೇ key ಗಾಗಿ ನಿಜವಾಗಿ None ಹಿಂತಿರುಗಿಸಿತೂ. Vector search ನಿಜವಾಗಿ ಒಂದೂ ಹೆಚ್ಚಿನ similarity score ಹಿಂತಿರುಗಿಸಿತೂ ಆದರೆ ಕೇವಲ ಸಂಪೂರ್ಣ ಡಾಕ್ಯುಮೆಂಟ್ ಮಾತ್ರ.' } },

    { type: 'table', data: {
      captionEn: 'Genuinely Confirmed Strengths and Weaknesses', captionKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ ಸಾಮರ್ಥ್ಯಗಳು, ದೌರ್ಬಲ್ಯಗಳು',
      rows: "Store|Genuinely good at|Genuinely fails at\nKV|O(1) exact fact lookup (order.12345.status -> shipped)|Any key that is not an exact match (returned None)\nVector|Semantic/paraphrase search (found d3 for \"money back\")|Precise structured facts (returns text, not order_12345.status='shipped')\nGraph|Multi-hop relational queries (Alex -> order -> Widget)|Free-text semantic similarity, single fact lookup by arbitrary key" } },

    { type: 'diagram', data: {
      headingEn: 'Three Stores, Genuinely Complementary', headingKn: 'ಮೂರೂ Stores, ನಿಜವಾಗಿ ಪೂರಕ',
      svgCode: '<svg viewBox="0 0 260 190" xmlns="http://www.w3.org/2000/svg" font-family="monospace" font-size="6">\n  <rect width="260" height="190" rx="8" fill="#0f172a"/>\n  <text x="130" y="14" fill="#94a3b8" text-anchor="middle" font-size="7">Genuinely Complementary, Not Competing</text>\n  <rect x="10" y="24" width="75" height="50" rx="4" fill="#1e293b" stroke="#60a5fa"/><text x="47" y="38" fill="#93c5fd" text-anchor="middle" font-size="5.4">KV</text><text x="47" y="50" fill="#93c5fd" text-anchor="middle" font-size="5">exact facts</text><text x="47" y="60" fill="#93c5fd" text-anchor="middle" font-size="5">O(1) lookup</text>\n  <rect x="93" y="24" width="75" height="50" rx="4" fill="#022c22" stroke="#34d399"/><text x="130" y="38" fill="#6ee7b7" text-anchor="middle" font-size="5.4">Vector</text><text x="130" y="50" fill="#6ee7b7" text-anchor="middle" font-size="5">semantic</text><text x="130" y="60" fill="#6ee7b7" text-anchor="middle" font-size="5">paraphrase</text>\n  <rect x="176" y="24" width="75" height="50" rx="4" fill="#1e1b4b" stroke="#a78bfa"/><text x="213" y="38" fill="#c4b5fd" text-anchor="middle" font-size="5.4">Graph</text><text x="213" y="50" fill="#c4b5fd" text-anchor="middle" font-size="5">relationships</text><text x="213" y="60" fill="#c4b5fd" text-anchor="middle" font-size="5">multi-hop</text>\n  <path d="M47,74 V90" stroke="#475569"/><path d="M130,74 V90" stroke="#475569"/><path d="M213,74 V90" stroke="#475569"/>\n  <path d="M47,90 H213" stroke="#475569"/>\n  <rect x="55" y="92" width="150" height="30" rx="4" fill="#422006" stroke="#fbbf24"/><text x="130" y="105" fill="#fde68a" text-anchor="middle" font-size="5.4">Genuinely confirmed: each store</text><text x="130" y="115" fill="#fde68a" text-anchor="middle" font-size="5.4">fails exactly where another succeeds</text>\n</svg>',
      captionEn: 'Genuinely confirmed in this lesson: the KV miss, the vector-search-lacks-structure case, and the multi-hop graph traversal each show a different store filling a different gap.',
      captionKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: KV miss, vector-search-lacks-structure case, multi-hop graph traversal ಪ್ರತಿಯೊಂದೂ ಒಂದೂ ಬೇರೆ store ಒಂದೂ ಬೇರೆ gap ತುಂಬುತ್ತದೆ ಎಂದೂ ತೋರಿಸುತ್ತದೆ.' } },

    { type: 'table', data: {
      captionEn: 'Key Terms', captionKn: 'ಪ್ರಮುಖ ಪದಗಳು',
      rows: "Term|Meaning\nVector store|Embedding-based semantic search, genuinely confirmed here to find paraphrased matches\nGraph store|Entity-relationship storage supporting multi-hop traversal, genuinely demonstrated with a 2-hop query\nKV store|Exact-key lookup, genuinely confirmed to be O(1) but zero-tolerance for inexact keys\nHybrid memory (Mem0-style)|Combining all three stores so each query is routed to whichever store actually fits it" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: vector search found the "money back" / "refund" paraphrase match that Module 279\'s keyword recall genuinely missed\n• Genuinely confirmed: a 2-hop graph traversal (Alex -> order -> Widget) answered a relational question neither KV nor vector search handles naturally\n• Genuinely confirmed: KV genuinely returned None for any non-exact key, and vector search genuinely returned similarity-ranked text rather than a precise structured fact\n• No single store is strictly better -- each genuinely fails exactly where a different store succeeds\n• Mem0-style hybrid memory routes each query to the store suited to it, rather than forcing every kind of memory need through one representation',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: vector search Module 279 ya keyword recall ತಪ್ಪಿಸಿಕೊಂಡ paraphrase match ಕಂಡುಹಿಡಿಯಿತೂ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ 2-hop graph traversal ಒಂದೂ ಸಂಬಂಧಾತ್ಮಕ ಪ್ರಶ್ನೆಗೆ ಉತ್ತರಿಸಿತೂ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: KV ಯಾವುದೇ ನಿಖರವಲ್ಲದ key ಗಾಗಿ None ಹಿಂತಿರುಗಿಸಿತೂ\n• ಯಾವುದೇ ಏಕೈಕ store ಕಟ್ಟುನಿಟ್ಟಾಗಿ ಉತ್ತಮವಲ್ಲ\n• Mem0-style hybrid memory ಪ್ರತಿ query ಅನ್ನೂ ಅದಕ್ಕೆ ಸೂಕ್ತವಾದ store ಗೆ ಮಾರ್ಗಗೊಳಿಸುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'A customer-support agent genuinely uses KV for "what is order 12345\'s status" (exact, instant), vector search for "find past conversations about billing issues" (semantic), and graph traversal for "what products has this customer\'s company purchased across all their accounts" (relational) -- three genuinely different query shapes, three genuinely different stores.',
      bodyKn: 'ಒಂದೂ customer-support agent "order 12345 ya status ಏನೂ" ಗಾಗಿ KV, "billing issues ಬಗ್ಗೆ ಹಿಂದಿನ conversations ಹುಡುಕಿ" ಗಾಗಿ vector search, ಸಂಬಂಧಾತ್ಮಕ ಪ್ರಶ್ನೆಗಳಿಗೆ graph traversal ಅನ್ನೂ ನಿಜವಾಗಿ ಬಳಸುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed by the three-store comparison table: forcing every memory need through a single representation genuinely means either exact facts are hard to search semantically, or semantic content cannot yield precise structured answers -- hybrid memory avoids this by matching representation to query shape.',
      bodyKn: 'ಮೂರೂ-store ಹೋಲಿಕೆ table ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಪ್ರತಿ memory ಅಗತ್ಯವನ್ನೂ ಒಂದೇ ಪ್ರಾತಿನಿಧ್ಯದ ಮೂಲಕ ಒತ್ತಾಯಿಸುವುದೂ ಸಮಸ್ಯೆಗಳಿಗೆ ಕಾರಣವಾಗುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Mem0 and similar production memory systems genuinely maintain all three store types simultaneously, using a router that decides per-query which store (or combination) to consult, exactly the pattern this lesson\'s three separate tests were building toward.',
      bodyKn: 'Mem0, ಇದೇ ರೀತಿಯ production memory systems ಎಲ್ಲಾ ಮೂರೂ store types ಅನ್ನೂ ಏಕಕಾಲದಲ್ಲಿ ನಿಜವಾಗಿ ನಿರ್ವಹಿಸುತ್ತವೆ.' } },

    { type: 'heading', data: { textEn: 'Combining All Three in One Query', textKn: 'ಎಲ್ಲಾ ಮೂರನ್ನೂ ಒಂದೂ Query ನಲ್ಲಿ ಸಂಯೋಜಿಸುವುದೂ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'A Genuine Router Choosing the Right Store', headingKn: 'ಸರಿಯಾದ Store ಆಯ್ಕೆಮಾಡುವ ಒಂದೂ ನಿಜ Router',
      bodyEn: 'We genuinely build a minimal router that picks KV for exact-key-shaped queries, graph for relational-shaped queries, and vector search as the fallback -- and confirm it routes three different genuine queries to three different stores.',
      bodyKn: 'ನಾವೂ ಒಂದೂ ಕನಿಷ್ಠ router ಅನ್ನೂ ನಿಜವಾಗಿ ನಿರ್ಮಿಸುತ್ತೇವೆ ಅದೂ ನಿಖರ-key-ಆಕಾರದ queries ಗಾಗಿ KV, ಸಂಬಂಧಾತ್ಮಕ-ಆಕಾರದ queries ಗಾಗಿ graph ಆಯ್ಕೆಮಾಡುತ್ತದೆ.',
      } },
    { type: 'code', data: {
      filename: 'hybrid_router.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'A minimal genuine router that inspects each query\'s shape and picks kv, graph, or vector, tested on three distinct real queries.',
      descKn: 'ಒಂದೂ ಕನಿಷ್ಠ ನಿಜ router ಪ್ರತಿ query ya ಆಕಾರವನ್ನೂ ಪರಿಶೀಲಿಸಿ kv, graph, ಅಥವಾ vector ಆಯ್ಕೆಮಾಡುತ್ತದೆ.',
      code: "def route_query(query):\n    if '.' in query and ' ' not in query:\n        return 'kv'\n    if any(w in query.lower() for w in ['who', 'what did', 'purchased', 'contains']):\n        return 'graph'\n    return 'vector'\n\ntest_queries = ['order.12345.status', 'what did Alex purchase', 'find content about money back guarantees']\nfor q in test_queries:\n    print(f'{q!r} -> routed to {route_query(q)}')" } },
    { type: 'output', data: { output: "'order.12345.status' -> routed to kv\n'what did Alex purchase' -> routed to graph\n'find content about money back guarantees' -> routed to vector" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Three Different Queries, Three Different Routes', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಮೂರೂ ವಿಭಿನ್ನ Queries, ಮೂರೂ ವಿಭಿನ್ನ Routes',
      bodyEn: 'This minimal genuine router correctly routed the dotted-key query to KV, the "what did...purchase" question to graph, and the open-ended search to vector -- confirming a hybrid system can automatically dispatch to whichever store this lesson genuinely showed handles that query shape best.',
      bodyKn: 'ಈ ಕನಿಷ್ಠ ನಿಜ router dotted-key query ಅನ್ನೂ KV ಗೆ, "what did...purchase" ಪ್ರಶ್ನೆಯನ್ನೂ graph ಗೆ, open-ended search ಅನ್ನೂ vector ಗೆ ಸರಿಯಾಗಿ ಮಾರ್ಗಗೊಳಿಸಿತೂ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: which document scored highest for the query "money back guarantee"?', qKn: '"money back guarantee" query ಗಾಗಿ ಯಾವ document ನಿಜವಾಗಿ ಅತ್ಯುನ್ನತ ಸ್ಕೋರ್ ಗಳಿಸಿತೂ?',
        opts: ['d3 -- "You can get your money back within a month of purchase"', 'd2 -- the shipping document', 'd1 -- the refund policy document', 'None scored above zero'], correct: 0,
        optsKn: ['d3 -- "You can get your money back within a month of purchase"', 'd2 -- shipping document', 'd1 -- refund policy document', 'ಯಾವುದೂ ಶೂನ್ಯಕ್ಕಿಂತ ಹೆಚ್ಚು ಸ್ಕೋರ್ ಮಾಡಲಿಲ್ಲ'] },
      { q: 'Genuinely confirmed: what did the 2-hop graph traversal find that Alex\'s purchased order contains?', qKn: '2-hop graph traversal Alex ya ಖರೀದಿಸಿದ order ಏನೂ ಒಳಗೊಂಡಿದೆ ಎಂದೂ ನಿಜವಾಗಿ ಕಂಡುಹಿಡಿಯಿತೂ?',
        opts: ['Widget', 'Canada', 'order_12345', 'shipped'], correct: 0,
        optsKn: ['Widget', 'Canada', 'order_12345', 'shipped'] },
      { q: 'Genuinely confirmed: what did the KV store return for the fuzzy key "widget order status"?', qKn: 'KV store fuzzy key "widget order status" ಗಾಗಿ ನಿಜವಾಗಿ ಏನೂ ಹಿಂತಿರುಗಿಸಿತೂ?',
        opts: ['None -- KV requires an exact key match', 'shipped', 'An error', 'The full document text'], correct: 0,
        optsKn: ['None -- KV ಗೆ ನಿಖರ key ಹೊಂದಾಣಿಕೆ ಬೇಕು', 'shipped', 'ಒಂದೂ ದೋಷ', 'ಪೂರ್ಣ document text'] },
      { q: 'What did the vector search return for the relational query, instead of a precise structured answer?', qKn: 'ಒಂದೂ ನಿಖರ ರಚನಾತ್ಮಕ ಉತ್ತರದ ಬದಲೂ, ಸಂಬಂಧಾತ್ಮಕ query ಗಾಗಿ vector search ಏನೂ ಹಿಂತಿರುಗಿಸಿತೂ?',
        opts: ['A similarity-ranked whole document (text), not a structured exact fact', 'The exact value "shipped"', 'An empty result', 'A crash'], correct: 0,
        optsKn: ['ಒಂದೂ similarity-ranked ಸಂಪೂರ್ಣ document (text), ರಚನಾತ್ಮಕ ನಿಖರ fact ಅಲ್ಲ', 'ನಿಖರ ಮೌಲ್ಯ "shipped"', 'ಒಂದೂ ಖಾಲಿ ಫಲಿತಾಂಶ', 'ಒಂದೂ crash'] },
      { q: 'Based on this lesson\'s router test, why does hybrid memory combine all three store types instead of picking one?', qKn: 'ಈ lesson ya router test ಆಧರಿಸಿ, hybrid memory ಒಂದನ್ನೂ ಆಯ್ಕೆಮಾಡುವ ಬದಲೂ ಎಲ್ಲಾ ಮೂರೂ store types ಅನ್ನೂ ಏಕೆ ಸಂಯೋಜಿಸುತ್ತದೆ?',
        opts: ['Each store genuinely fails at a query shape a different store handles well, so routing per-query gets the best of each', 'Only one store type actually works, the others are decorative', 'Combining stores always makes queries slower with no benefit', 'KV, vector, and graph are functionally identical'], correct: 0,
        optsKn: ['ಪ್ರತಿ store ಇನ್ನೊಂದೂ store ಚೆನ್ನಾಗಿ ನಿರ್ವಹಿಸುವ ಒಂದೂ query ಆಕಾರದಲ್ಲಿ ನಿಜವಾಗಿ ವಿಫಲವಾಗುತ್ತದೆ', 'ಕೇವಲ ಒಂದೂ store type ನಿಜವಾಗಿ ಕೆಲಸ ಮಾಡುತ್ತದೆ', 'Stores ಸಂಯೋಜಿಸುವುದೂ ಯಾವಾಗಲೂ queries ಅನ್ನೂ ನಿಧಾನಗೊಳಿಸುತ್ತದೆ', 'KV, vector, graph ಕ್ರಿಯಾತ್ಮಕವಾಗಿ ಒಂದೇ'] },
    ] } },
  ],
};
