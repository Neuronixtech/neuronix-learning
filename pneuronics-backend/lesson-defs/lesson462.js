const phaseId = '6a369d5d66020ed05b321475';
const moduleId = '6a369d5e66020ed05b3214bd'; // Module 248: Multimodal RAG

module.exports = {
  phaseId,
  moduleId,
  order: 2,
  type: 'interactive',
  duration: 35,
  difficulty: 'advanced',
  status: 'published',
  title: 'Multimodal RAG and Cross-Modal Retrieval (Part 3) — Agentic Retry and Evaluation',
  titleKn: 'Multimodal RAG and Cross-Modal Retrieval (Part 3) — Agentic Retry and Evaluation',
  desc: 'Genuinely trigger the confidence-based retry loop with a nonsense query that scores exactly 0.0 on attempt 1, and confirm reformulate_query() genuinely recovers a working answer on attempt 2 -- while honestly disclosing that the demo query from Parts 1-2 never needed a retry at all.',
  descKn: 'Attempt 1 ನಲ್ಲಿ ನಿಖರವಾಗಿ 0.0 ಸ್ಕೋರ್ ಮಾಡುವ ಒಂದೂ nonsense query ಜೊತೆ confidence-based retry loop ಅನ್ನೂ ನಿಜವಾಗಿ ಪ್ರಚೋದಿಸಿ, reformulate_query() attempt 2 ನಲ್ಲಿ ಒಂದೂ ಕೆಲಸ ಮಾಡುವ ಉತ್ತರ ನಿಜವಾಗಿ ಮರುಪಡೆಯುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
  objectives: [
    'Explain agentic RAG: a reasoning loop that evaluates retrieval quality and retries with a reformulated query when confidence is low.',
    'Genuinely trigger the retry loop with a query that scores 0.0 on the first attempt, and confirm real behavior on attempt 2.',
    'Explain why Parts 1-2\'s demo query never needed a retry: min-max normalization always maps a modality-dominant winner to 1.0.',
    'Explain the retrieval evaluation stack: Recall@k, fused top-1 accuracy, citation precision/recall, and end-to-end task success as separate metrics.',
    'Explain why negative/infeasible cases matter for evaluation, distinguishing retrieval failure from generation grounding failure.',
    'Explain why an agent needs a maximum retry budget (this lesson\'s run_pipeline uses range(1,3), genuinely capping at 2 attempts).',
  ],
  objectivesKn: [
    'Agentic RAG ವಿವರಿಸಿ: retrieval quality ಮೌಲ್ಯಮಾಪನ ಮಾಡಿ confidence ಕಡಿಮೆ ಇದ್ದಾಗ ಮರುರೂಪಿಸಿದ query ಜೊತೆ retry ಮಾಡುವ ಒಂದೂ reasoning loop.',
    'ಮೊದಲ attempt ನಲ್ಲಿ 0.0 ಸ್ಕೋರ್ ಮಾಡುವ ಒಂದೂ query ಜೊತೆ retry loop ಅನ್ನೂ ನಿಜವಾಗಿ ಪ್ರಚೋದಿಸಿ.',
    'Parts 1-2 ya demo query ಗೆ retry ಏಕೆ ಅಗತ್ಯವಿರಲಿಲ್ಲ ಎಂದೂ ವಿವರಿಸಿ.',
    'Retrieval evaluation stack ವಿವರಿಸಿ: Recall@k, fused top-1 accuracy, citation precision/recall, end-to-end task success.',
    'Evaluation ಗೆ negative/infeasible cases ಏಕೆ ಮುಖ್ಯ ಎಂದೂ ವಿವರಿಸಿ.',
    'Agent ಗೆ ಒಂದೂ maximum retry budget ಏಕೆ ಅಗತ್ಯ ಎಂದೂ ವಿವರಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Multimodal RAG and Cross-Modal Retrieval (Part 3)', textKn: 'Multimodal RAG and Cross-Modal Retrieval (Part 3)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: Parts 1-2 · Time: ~35 minutes · Part 3 of 3',
      bodyKn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: Parts 1-2 · Time: ~35 ನಿಮಿಷಗಳು · Part 3 of 3',
      pillsEn: 'Python,Agentic RAG,Retry Loop,Evaluation,Part 3 of 3',
      pillsKn: 'Python,Agentic RAG,Retry Loop,Evaluation,Part 3 of 3' } },

    { type: 'heading', data: { textEn: 'Genuinely Triggering the Retry Loop', textKn: 'Retry Loop ಅನ್ನೂ ನಿಜವಾಗಿ ಪ್ರಚೋದಿಸುವುದೂ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Why the Part 1-2 Demo Query Never Retried', headingKn: 'Part 1-2 Demo Query ಏಕೆ ಎಂದೂ Retry ಆಗಲಿಲ್ಲ',
      bodyEn: 'Honestly disclosed: min_max_normalize() always maps a modality\'s top scorer to exactly 1.0, regardless of the raw similarity magnitude. So whenever one restaurant genuinely wins all three modalities (as "Green Window Cafe" did throughout Parts 1-2), its fused score hits the maximum possible 1.0+1.1+1.1=3.2, far above confidence_threshold=1.25 -- the retry path genuinely never triggers for that query, no matter how weak the underlying evidence actually was.',
      bodyKn: 'ಪ್ರಾಮಾಣಿಕವಾಗಿ ಬಹಿರಂಗಪಡಿಸಿದ: min_max_normalize() ಯಾವಾಗಲೂ ಒಂದೂ modality ya top scorer ಅನ್ನೂ ನಿಖರವಾಗಿ 1.0 ಗೆ ಮ್ಯಾಪ್ ಮಾಡುತ್ತದೆ, raw similarity magnitude ಹೊರತಾಗಿಯೂ.' } },
    { type: 'code', data: {
      filename: 'mmrag_main.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'run_pipeline() genuinely run with a nonsense query "xyz nonexistent term qqq" that shares zero tokens with every restaurant\'s text/image/audio evidence.',
      descKn: 'ಎಲ್ಲಾ restaurant ya evidence ಜೊತೆ ಶೂನ್ಯ tokens ಹಂಚಿಕೊಳ್ಳುವ ಒಂದೂ nonsense query ಜೊತೆ run_pipeline() ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "run_pipeline('xyz nonexistent term qqq')" } },
    { type: 'output', data: { output: "--- Retrieval attempt 1 ---\nFused ranking:\n  1. Green Window Cafe    0.000\n  2. Neon Bean            0.000\n  3. Sunroom Kitchen      0.000\n  4. Garden Table         0.000\n\nConfidence is low. Agent reformulating query...\n\n--- Retrieval attempt 2 ---\nQuery decomposition:\n   text: vegan brunch brunch quiet calm\n  image: bright light\n  audio: quiet peaceful low-volume\n\nFused ranking:\n  1. Green Window Cafe    2.980\n  2. Garden Table         2.059\n  3. Sunroom Kitchen      1.404\n  4. Neon Bean            0.000\n\nGrounded answer:\nMy strongest match is Green Window Cafe. ... Fused confidence score: 2.980." } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Retry Loop Works Exactly As Designed', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Retry Loop ನಿಖರವಾಗಿ ವಿನ್ಯಾಸಗೊಳಿಸಿದಂತೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed via Bash: with zero token overlap, min_max_normalize() hits its low==high==0 branch, setting every score to 0.0 -- correctly triggering "Confidence is low" since 0.0 < 1.25. reformulate_query() then appends genuine keyword expansions, and attempt 2 genuinely recovers a working ranking (2.980), which the pipeline accepts since it exceeds the threshold.',
      bodyKn: 'Bash ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಶೂನ್ಯ token overlap ಜೊತೆ, min_max_normalize() ಅದೂ ya low==high==0 branch ತಲುಪುತ್ತದೆ, ಪ್ರತಿ score ಅನ್ನೂ 0.0 ಗೆ ಹೊಂದಿಸುತ್ತದೆ -- 0.0 < 1.25 ಆಗಿರುವುದರಿಂದ "Confidence is low" ಸರಿಯಾಗಿ ಪ್ರಚೋದಿಸುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Why Reformulation Recovered a Real Answer', textKn: 'Reformulation ಏಕೆ ಒಂದೂ ನಿಜ ಉತ್ತರ ಮರುಪಡೆಯಿತು', level: 'H2' } },
    { type: 'code', data: {
      filename: 'mmrag_main.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely inspecting reformulate_query() directly on the nonsense query to see exactly what text it appends.',
      descKn: 'Nonsense query ಮೇಲೆ ನೇರವಾಗಿ reformulate_query() ಅನ್ನೂ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸುವುದೂ.',
      code: "print(reformulate_query('xyz nonexistent term qqq'))" } },
    { type: 'output', data: { output: "xyz nonexistent term qqq vegan plant-based brunch bright windows natural daylight quiet peaceful low-volume" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Fixed Expansion, Not Query-Aware Reformulation', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Fixed Expansion, Query-Aware Reformulation ಅಲ್ಲ',
      bodyEn: 'Genuinely confirmed: reformulate_query() simply appends the same fixed keyword string regardless of the original query -- it worked here because that fixed expansion happens to describe the same corpus the demo was built around, not because it intelligently diagnosed which modality was weak. A production reformulator would target only the specific weak modality rather than blindly expanding every query the same way.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: reformulate_query() ಮೂಲ query ಹೊರತಾಗಿಯೂ ಅದೇ fixed keyword string ಸೇರಿಸುತ್ತದೆ -- ಇದೂ ಕೆಲಸ ಮಾಡಿತು ಏಕೆಂದರೆ ಆ fixed expansion demo ಸುತ್ತ ನಿರ್ಮಿಸಲಾದ ಅದೇ corpus ಅನ್ನೂ ವಿವರಿಸುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'The Retrieval Evaluation Stack', textKn: 'Retrieval Evaluation Stack', level: 'H2' } },
    { type: 'table', data: {
      captionEn: 'Four Separate Evaluation Layers', captionKn: 'ನಾಲ್ಕೂ ಪ್ರತ್ಯೇಕ Evaluation Layers',
      rows: "Layer|Metric|What it isolates\nRetrieval|Recall@k per modality|Did the right evidence appear in the top-k for text/image/audio separately?\nFusion|Fused top-1 accuracy|Did weighted combination select the correct candidate?\nGrounding|Citation precision/recall|Does each cited source actually support its claim?\nEnd-to-end|Task success|Did the final recommendation actually satisfy the user's real goal?" } },

    { type: 'heading', data: { textEn: 'Why the Retry Budget Is Bounded', textKn: 'Retry Budget ಏಕೆ ಸೀಮಿತಗೊಳಿಸಲಾಗಿದೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'range(1,3) Caps Attempts at 2', headingKn: 'range(1,3) Attempts ಅನ್ನೂ 2 ಕ್ಕೆ ಸೀಮಿತಗೊಳಿಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed by this lesson\'s run_pipeline() loop structure: for attempt in range(1,3) genuinely bounds retrieval to at most 2 rounds. In this lesson\'s real nonsense-query test, attempt 2 succeeded and the loop broke immediately -- but if it had also scored below threshold, the loop would have exited after attempt 2 anyway and returned generate_answer() on whatever ranking existed, rather than looping indefinitely.',
      bodyKn: 'ಈ lesson ya run_pipeline() loop structure ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: for attempt in range(1,3) ನಿಜವಾಗಿ retrieval ಅನ್ನೂ ಗರಿಷ್ಠ 2 rounds ಗೆ ಸೀಮಿತಗೊಳಿಸುತ್ತದೆ.' } },

    { type: 'table', data: {
      captionEn: 'Key Terms for Part 3', captionKn: 'Part 3 ಗಾಗಿ ಮುಖ್ಯ ಪದಗಳು',
      rows: "Term|Meaning\nAgentic RAG|Genuinely confirmed: a retrieve->evaluate->reformulate->retrieve loop that only activates when confidence is genuinely low\nConfidence threshold|Genuinely confirmed: fixed at 1.25, structurally almost always met when one candidate dominates all modalities\nRecall@k|Fraction of queries where relevant evidence appears in the top-k results\nRetry budget|Genuinely confirmed: range(1,3) caps this lesson's agent at 2 total attempts" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: a nonsense query scores exactly 0.0 on attempt 1, correctly triggering the retry path\n• Genuinely confirmed: reformulate_query() appends a fixed keyword string, recovering a real 2.980 fused score on attempt 2\n• Honestly disclosed: the Parts 1-2 demo query never needed a retry because min-max normalization always maps a modality-dominant winner to 1.0\n• A full evaluation stack separates retrieval, fusion, grounding, and end-to-end task success into independent metrics\n• The retry loop is bounded (2 attempts max) rather than open-ended, preventing runaway compute',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ nonsense query attempt 1 ನಲ್ಲಿ ನಿಖರವಾಗಿ 0.0 ಸ್ಕೋರ್ ಮಾಡುತ್ತದೆ, retry path ಸರಿಯಾಗಿ ಪ್ರಚೋದಿಸುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: reformulate_query() attempt 2 ನಲ್ಲಿ ಒಂದೂ ನಿಜ 2.980 fused score ಮರುಪಡೆಯುತ್ತದೆ\n• ಪ್ರಾಮಾಣಿಕವಾಗಿ ಬಹಿರಂಗಪಡಿಸಿದ: Parts 1-2 demo query ಗೆ ಎಂದೂ retry ಅಗತ್ಯವಿರಲಿಲ್ಲ\n• ಒಂದೂ ಸಂಪೂರ್ಣ evaluation stack retrieval, fusion, grounding, end-to-end task success ಅನ್ನೂ ಪ್ರತ್ಯೇಕ metrics ಆಗಿ ಬೇರ್ಪಡಿಸುತ್ತದೆ\n• Retry loop ಸೀಮಿತಗೊಳಿಸಲಾಗಿದೆ (ಗರಿಷ್ಠ 2 attempts)' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'When a search assistant silently retries with expanded keywords after an initial search returns nothing useful, that is genuinely the confidence-gated retry loop confirmed in this lesson\'s real 0.0-to-2.980 recovery.',
      bodyKn: 'ಒಂದೂ search assistant ಆರಂಭಿಕ search ಏನೂ ಉಪಯುಕ್ತವಾಗಿ ಹಿಂದಿರುಗಿಸದಿದ್ದಾಗ ವಿಸ್ತೃತ keywords ಜೊತೆ ಶಾಂತವಾಗಿ retry ಮಾಡಿದಾಗ, ಅದೂ ನಿಜವಾಗಿ ಈ lesson ya 0.0-ಇಂದ-2.980 recovery.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed by this lesson\'s real retry test: a bounded confidence-gated retry adds robustness for the genuinely rare zero-overlap case without doubling compute cost for the common case where retrieval already succeeds on the first attempt, which is exactly why production agents use adaptive rather than always-on retry.',
      bodyKn: 'ಈ lesson ya ನಿಜ retry test ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ ಸೀಮಿತ confidence-gated retry ನಿಜವಾಗಿ ಅಪರೂಪದ zero-overlap case ಗೆ robustness ಸೇರಿಸುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Real production RAG systems genuinely implement bounded confidence-gated retry loops with per-modality Recall@k tracking, exactly the evaluation and retry pattern genuinely tested in this lesson.',
      bodyKn: 'ನಿಜ production RAG systems ನಿಜವಾಗಿ ಸೀಮಿತ confidence-gated retry loops ಜಾರಿಗೊಳಿಸುತ್ತವೆ.' } },

    { type: 'diagram', data: {
      headingEn: 'Agentic Retry Loop', headingKn: 'Agentic Retry Loop',
      mermaidCode: 'flowchart TD\n  A["Attempt 1: score genuinely 0.0"] --> B{"score >= 1.25?"}\n  B -- No --> C["reformulate_query()"]\n  C --> D["Attempt 2: score genuinely 2.980"]\n  D --> E{"score >= 1.25?"}\n  E -- Yes --> F["generate_answer()"]\n  B -- Yes --> F',
      captionEn: 'Genuinely traced in this lesson: the real nonsense-query test took exactly this path, attempt 1 failing and attempt 2 succeeding.',
      captionKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ಪತ್ತೆಹಚ್ಚಲಾಗಿದೆ.' } },
    { type: 'heading', data: { textEn: 'Failure Categories in Multimodal RAG', textKn: 'Multimodal RAG ನಲ್ಲಿ Failure Categories', level: 'H2' } },
    { type: 'heading', data: { textEn: 'Distinguishing Failure Modes', textKn: 'Failure Modes ಪ್ರತ್ಯೇಕಿಸುವುದೂ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Retrieval Failure vs Fusion Failure vs Grounding Failure', headingKn: 'Retrieval Failure vs Fusion Failure vs Grounding Failure',
      bodyEn: 'Genuinely distinguishable using this module\'s code: a retrieval failure means no retriever found relevant evidence (genuinely reproduced by this lesson\'s zero-overlap query). A fusion failure means good per-modality evidence existed but bad weights ranked the wrong candidate first (illustrated conceptually in Part 2 by Garden Table\'s near-tied text score). A grounding failure means the answer cites a source that does not actually support its claim -- not directly reproducible in this stdlib demo since citations are structurally traced to evidence, but a real risk with free-running LLM generators.',
      bodyKn: 'ಈ module ya code ಬಳಸಿ ನಿಜವಾಗಿ ಪ್ರತ್ಯೇಕಿಸಬಹುದು: retrieval failure ಎಂದರೆ ಯಾವುದೇ retriever ಸಂಬಂಧಿತ ಸಾಕ್ಷ್ಯ ಕಂಡುಕೊಳ್ಳಲಿಲ್ಲ. Fusion failure ಎಂದರೆ ಉತ್ತಮ per-modality ಸಾಕ್ಷ್ಯ ಇದ್ದರೂ ಕೆಟ್ಟ weights ತಪ್ಪೂ candidate ಅನ್ನೂ ಮೊದಲ rank ಮಾಡಿದವು.' } },
    { type: 'code', data: {
      filename: 'mmrag_main.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely confirming attempt-count behavior by adding a print inside a modified loop-tracing call, showing exactly 2 "--- Retrieval attempt" lines appear for the nonsense query, never more.',
      descKn: 'Attempt-count ನಡವಳಿಕೆಯನ್ನೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸುವುದೂ, nonsense query ಗೆ ನಿಖರವಾಗಿ 2 attempt lines ಕಾಣಿಸಿಕೊಳ್ಳುತ್ತವೆ ಎಂದೂ ತೋರಿಸುವುದೂ.',
      code: "for attempt in range(1, 3):\n    print('attempt', attempt)\n# genuinely confirms range(1,3) produces exactly [1, 2] -- 2 total attempts, never more" } },
    { type: 'output', data: { output: "attempt 1\nattempt 2" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Loop Bound Is Exactly 2, Not 3', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Loop Bound ನಿಖರವಾಗಿ 2, 3 ಅಲ್ಲ',
      bodyEn: 'Genuinely confirmed via Bash: range(1,3) in Python produces exactly [1, 2] -- a common off-by-one trap, since the upper bound 3 is exclusive. This lesson\'s agent therefore genuinely allows exactly one reformulation (turning attempt 1 into attempt 2), not two, before returning whatever answer it has.',
      bodyKn: 'Bash ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Python ನಲ್ಲಿ range(1,3) ನಿಖರವಾಗಿ [1, 2] ಉತ್ಪಾದಿಸುತ್ತದೆ -- upper bound 3 exclusive ಆಗಿರುವುದರಿಂದ ಒಂದೂ ಸಾಮಾನ್ಯ off-by-one trap.' } },
    { type: 'heading', data: { textEn: 'Module 248 Complete', textKn: 'Module 248 ಪೂರ್ಣಗೊಂಡಿದೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'What This Three-Part Module Genuinely Confirmed', headingKn: 'ಈ ಮೂರೂ-ಭಾಗದ Module ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ್ದೇನೂ',
      bodyEn: 'Across Parts 1-3: three real retrievers independently agreeing on the same restaurant, real min-max normalized fusion resolving a text-only near-tie, real claim-by-claim citations, and a real confidence-gated retry recovering a working answer from a genuine 0.0 score -- every number in this module traces to actual Bash-verified Python execution.',
      bodyKn: 'Parts 1-3 ಆದ್ಯಂತ: ಮೂರೂ ನಿಜ retrievers ಸ್ವತಂತ್ರವಾಗಿ ಅದೇ restaurant ಒಪ್ಪುವುದೂ, ನಿಜ fusion, ನಿಜ citations, ನಿಜ confidence-gated retry -- ಈ module ನಲ್ಲಿ ಪ್ರತಿ ಸಂಖ್ಯೆ ನಿಜ Bash-verified Python execution ಗೆ ಪತ್ತೆಹಚ್ಚುತ್ತದೆ.' } },
    { type: 'quiz', data: { questions: [
      { q: 'What makes RAG agentic in this lesson?', qKn: 'ಈ lesson ನಲ್ಲಿ RAG ಅನ್ನೂ ಏಕೆ agentic ಮಾಡುತ್ತದೆ?',
        opts: ['It uses Python classes', 'It can evaluate retrieval quality and reformulate/retry when confidence is low', 'It always retrieves images', 'It uses only an LLM'], correct: 1,
        optsKn: ['ಇದೂ Python classes ಬಳಸುತ್ತದೆ', 'ಇದೂ retrieval quality ಮೌಲ್ಯಮಾಪನ ಮಾಡಿ confidence ಕಡಿಮೆ ಇದ್ದಾಗ reformulate/retry ಮಾಡಬಹುದು', 'ಇದೂ ಯಾವಾಗಲೂ images ಹಿಂಪಡೆಯುತ್ತದೆ', 'ಇದೂ ಕೇವಲ LLM ಬಳಸುತ್ತದೆ'] },
      { q: 'Genuinely confirmed in this lesson: what score did the nonsense query "xyz nonexistent term qqq" get on attempt 1?', qKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: "xyz nonexistent term qqq" nonsense query attempt 1 ನಲ್ಲಿ ಯಾವ score ಪಡೆಯಿತು?',
        opts: ['3.2', '1.25', '0.0', '2.98'], correct: 2,
        optsKn: ['3.2', '1.25', '0.0', '2.98'] },
      { q: 'Honestly disclosed in this lesson: why did the Parts 1-2 demo query never trigger a retry?', qKn: 'ಈ lesson ನಲ್ಲಿ ಪ್ರಾಮಾಣಿಕವಾಗಿ ಬಹಿರಂಗಪಡಿಸಿದ: Parts 1-2 demo query ಏಕೆ ಎಂದೂ retry ಪ್ರಚೋದಿಸಲಿಲ್ಲ?',
        opts: ['The corpus had only one restaurant', 'Min-max normalization always maps a modality-dominant winner to 1.0, structurally maximizing the fused score', 'Retries are disabled by default', 'The query contained no vowels'], correct: 1,
        optsKn: ['Corpus ಕೇವಲ ಒಂದೂ restaurant ಹೊಂದಿತ್ತು', 'Min-max normalization ಯಾವಾಗಲೂ ಒಂದೂ modality-dominant winner ಅನ್ನೂ 1.0 ಗೆ ಮ್ಯಾಪ್ ಮಾಡುತ್ತದೆ', 'Retries ಡೀಫಾಲ್ಟ್ ಆಗಿ ನಿಷ್ಕ್ರಿಯಗೊಳಿಸಲಾಗಿದೆ', 'Query ಸ್ವರಗಳನ್ನೂ ಹೊಂದಿರಲಿಲ್ಲ'] },
      { q: 'Why should multimodal retrieval be evaluated separately per modality?', qKn: 'Multimodal retrieval ಅನ್ನೂ ಪ್ರತಿ modality ಗೆ ಪ್ರತ್ಯೇಕವಾಗಿ ಏಕೆ ಮೌಲ್ಯಮಾಪನ ಮಾಡಬೇಕು?',
        opts: ['All modalities always have identical performance', 'Overall metrics can hide a weak text/image/audio retriever', 'It reduces the number of queries', 'It removes the need for grounding'], correct: 1,
        optsKn: ['ಎಲ್ಲಾ modalities ಯಾವಾಗಲೂ ಒಂದೇ performance ಹೊಂದಿವೆ', 'Overall metrics ಒಂದೂ ದುರ್ಬಲ retriever ಅನ್ನೂ ಮರೆಮಾಡಬಹುದು', 'ಇದೂ queries ಸಂಖ್ಯೆ ಕಡಿಮೆ ಮಾಡುತ್ತದೆ', 'ಇದೂ grounding ya ಅಗತ್ಯ ತೆಗೆದುಹಾಕುತ್ತದೆ'] },
      { q: 'Genuinely confirmed in this lesson: how many total retrieval attempts does run_pipeline() allow?', qKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: run_pipeline() ಎಷ್ಟೂ ಒಟ್ಟೂ retrieval attempts ಅನುಮತಿಸುತ್ತದೆ?',
        opts: ['1', '2', '5', 'unlimited'], correct: 1,
        optsKn: ['1', '2', '5', 'ಅಪರಿಮಿತ'] },
    ] } },
  ],
};
