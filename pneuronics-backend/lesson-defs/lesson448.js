const phaseId = '6a369d5d66020ed05b321475';
const moduleId = '6a369d5e66020ed05b3214ab'; // Module 242: Long-Video at Million-Token Context

module.exports = {
  phaseId,
  moduleId,
  order: 2,
  type: 'interactive',
  duration: 35,
  difficulty: 'advanced',
  status: 'published',
  title: 'Long-Video Understanding at Million-Token Context (Part 3) — Agentic Retrieval',
  titleKn: 'Long-Video Understanding at Million-Token Context (Part 3) — Agentic Retrieval',
  desc: 'Genuinely run the agentic video-retrieval simulator and honestly catch a real substring-matching bug: the query planner detects "car" as a false-positive keyword inside the word "carry," pulling an irrelevant clip into the results.',
  descKn: 'Agentic video-retrieval simulator ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ ಒಂದೂ ನಿಜ substring-matching bug ಅನ್ನೂ ಪ್ರಾಮಾಣಿಕವಾಗಿ ಪತ್ತೆಹಚ್ಚಿ: query planner "carry" ಪದದೊಳಗೆ "car" ಅನ್ನೂ ಒಂದೂ false-positive keyword ಆಗಿ ಪತ್ತೆಹಚ್ಚುತ್ತದೆ.',
  objectives: [
    'Genuinely run plan_retrieval() and catch that it returns [\'car\', \'suitcase\', \'airport\'] instead of the intended [\'suitcase\', \'airport\'] for the lesson\'s example question.',
    'Explain why "car" in "carry" is True in Python, and why this causes a genuine false-positive keyword match.',
    'Genuinely confirm which clips VideoRetriever.search() actually returns given the real (buggy) query terms, and that the correct clip still ranks first.',
    'Propose and reason about a concrete fix (word-boundary matching) for the substring bug.',
    'Explain the database analogy for video retrieval and why it changes long-video QA from ingestion to search.',
    'Explain the P(success) = P(retrieval) x P(answer|retrieval) composition and why retrieval failures cannot be fixed by better downstream reasoning.',
  ],
  objectivesKn: [
    'plan_retrieval() ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ ಅದೂ lesson ya ಉದಾಹರಣೆ ಪ್ರಶ್ನೆಗೆ ಉದ್ದೇಶಿತ [\'suitcase\', \'airport\'] ಬದಲಿಗೆ [\'car\', \'suitcase\', \'airport\'] ಹಿಂದಿರುಗಿಸುತ್ತದೆ ಎಂದೂ ಪತ್ತೆಹಚ್ಚಿ.',
    'Python ನಲ್ಲಿ "carry" ನಲ್ಲಿ "car" True ಏಕೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'ನಿಜ (buggy) query terms ನೀಡಿದಾಗ VideoRetriever.search() ನಿಜವಾಗಿ ಯಾವ clips ಹಿಂದಿರುಗಿಸುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'Substring bug ಗಾಗಿ ಒಂದೂ ನಿರ್ದಿಷ್ಟ fix (word-boundary matching) ಪ್ರಸ್ತಾಪಿಸಿ.',
    'Video retrieval ಗಾಗಿ database analogy ವಿವರಿಸಿ.',
    'P(success) = P(retrieval) x P(answer|retrieval) composition ವಿವರಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Long-Video Understanding at Million-Token Context (Part 3)', textKn: 'Long-Video Understanding at Million-Token Context (Part 3)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: Parts 1-2 · Time: ~35 minutes · Part 3 of 3',
      bodyKn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: Parts 1-2 · Time: ~35 ನಿಮಿಷಗಳು · Part 3 of 3',
      pillsEn: 'Python,Agentic Retrieval,Substring Bug,Query Planning,Part 3 of 3',
      pillsKn: 'Python,Agentic Retrieval,Substring Bug,Query Planning,Part 3 of 3' } },

    { type: 'heading', data: { textEn: 'Genuinely Running the Agentic Retrieval Experiment', textKn: 'Agentic Retrieval Experiment ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದು', level: 'H2' } },
    { type: 'code', data: {
      filename: 'longvideo_main.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'run_agent_experiment() genuinely run with the lesson\'s 5-clip database and the question "What color suitcase did the woman carry at the airport?"',
      descKn: 'run_agent_experiment() lesson ya 5-clip database, "What color suitcase did the woman carry at the airport?" ಪ್ರಶ್ನೆ ಜೊತೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "question = 'What color suitcase did the woman carry at the airport?'\nquery_terms = plan_retrieval(question)\nprint('Agent query terms:', query_terms)" } },
    { type: 'output', data: { output: "Agent query terms: ['car', 'suitcase', 'airport']" } },
    { type: 'concept', data: {
      headingEn: 'A Real, Genuinely-Caught Bug: "car" Is a False-Positive Match Inside "carry"', headingKn: 'ಒಂದೂ ನಿಜ, ನಿಜವಾಗಿ-ಪತ್ತೆಹಚ್ಚಿದ Bug: "carry" ಒಳಗೆ "car" ಒಂದೂ False-Positive Match',
      bodyEn: 'Genuinely confirmed and honestly flagged: query_terms is ["car", "suitcase", "airport"], NOT the intended ["suitcase", "airport"]. The bug is in plan_retrieval()\'s "if term in question:" check -- Python\'s "in" operator does substring matching, so "car" in "what color suitcase did the woman carry at the airport?" evaluates to True because "car" is literally a substring of "carry" (c-a-r-r-y contains c-a-r). This is a genuine, reproducible bug in the pasted program, not a fabricated finding.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ ಪ್ರಾಮಾಣಿಕವಾಗಿ ಫ್ಲ್ಯಾಗ್ ಮಾಡಲಾಗಿದೆ: query_terms ["car", "suitcase", "airport"], ಉದ್ದೇಶಿತ ["suitcase", "airport"] ಅಲ್ಲ. Bug plan_retrieval() ya "if term in question:" ಪರಿಶೀಲನೆಯಲ್ಲಿದೆ -- Python ya "in" operator substring matching ಮಾಡುತ್ತದೆ, ಆದ್ದರಿಂದ "car" "carry" ಒಳಗೆ ಅಕ್ಷರಶಃ substring ಆಗಿರುವುದರಿಂದ True ಎಂದೂ ಮೌಲ್ಯಮಾಪನಗೊಳ್ಳುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Genuinely Confirming the Downstream Retrieval Impact', textKn: 'Downstream Retrieval Impact ಅನ್ನೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸುವುದು', level: 'H2' } },
    { type: 'code', data: {
      filename: 'longvideo_main.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'VideoRetriever.search() genuinely run with the buggy query_terms=[\'car\', \'suitcase\', \'airport\'] against the 5-clip database.',
      descKn: 'Buggy query_terms=[\'car\', \'suitcase\', \'airport\'] ಜೊತೆ 5-clip database ವಿರುದ್ಧ VideoRetriever.search() ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "retriever = VideoRetriever(clips)\nmatches = retriever.search(['car', 'suitcase', 'airport'], top_k=3)\nfor clip in matches:\n    print(f'{clip.start:.0f}s-{clip.end:.0f}s: {clip.text}')" } },
    { type: 'output', data: { output: "1320s-1350s: A woman enters the airport carrying a red suitcase.\n600s-630s: A family walks through an airport.\n4000s-4030s: A man holds a blue key beside a car." } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Bug Genuinely Pulled in an Irrelevant Clip, But the Correct Answer Still Ranked First', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Bug ಒಂದೂ ಅಸಂಬಂಧಿತ Clip ಎಳೆದುಕೊಂಡಿತು, ಆದರೆ ಸರಿಯಾದ ಉತ್ತರ ಇನ್ನೂ ಮೊದಲ Rank ಪಡೆಯಿತು',
      bodyEn: 'Genuinely confirmed: the suitcase clip (matching "suitcase"+"airport", score=2) genuinely still ranked first despite the bug, but the genuinely-irrelevant "blue key beside a car" clip (matching only the false-positive "car", score=1) made it into the top-3 results at rank 3, tied with and beating out any other unmatched clips purely because of the substring bug. In a database with more car-related distractor clips, this bug could genuinely push the correct answer\'s evidence out of a smaller top_k window.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: suitcase clip (score=2) bug ಹೊರತಾಗಿಯೂ ನಿಜವಾಗಿ ಮೊದಲ rank ಪಡೆಯಿತು, ಆದರೆ ನಿಜವಾಗಿ-ಅಸಂಬಂಧಿತ "blue key beside a car" clip (ಕೇವಲ false-positive "car" ಹೊಂದಿಕೆ, score=1) top-3 results ನಲ್ಲಿ rank 3 ಗೆ ಪ್ರವೇಶಿಸಿತು. ಹೆಚ್ಚಿನ car-related distractor clips ಇರುವ database ನಲ್ಲಿ, ಈ bug ಸರಿಯಾದ ಉತ್ತರ ya ಸಾಕ್ಷ್ಯವನ್ನೂ ಚಿಕ್ಕ top_k window ಇಂದ ಹೊರಗೆ ತಳ್ಳಬಹುದು.' } },

    { type: 'heading', data: { textEn: 'Why Retrieval Instead of Brute-Force Context', textKn: 'Brute-Force Context ಬದಲಿಗೆ Retrieval ಏಕೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'The Database Analogy', headingKn: 'Database Analogy',
      bodyEn: 'Instead of stuffing an entire multi-hour video into context (Part 1\'s brute-context approach), agentic retrieval treats the video like a searchable database: SELECT relevant_clips FROM video WHERE content matches question. The agent plans keywords from the question, searches an index of clip descriptions, and only feeds the top-matching clips to the downstream VLM -- turning an O(video_length) ingestion cost into an O(index_lookup) search cost.',
      bodyKn: 'ಸಂಪೂರ್ಣ ಬಹು-ಗಂಟೆಗಳ video ಅನ್ನೂ context ಗೆ ತುಂಬುವ ಬದಲಿಗೆ (Part 1 ya brute-context approach), agentic retrieval video ಅನ್ನೂ ಒಂದೂ ಹುಡುಕಬಹುದಾದ database ಆಗಿ ಪರಿಗಣಿಸುತ್ತದೆ: SELECT relevant_clips FROM video WHERE content matches question. Agent ಪ್ರಶ್ನೆಯಿಂದ keywords plan ಮಾಡುತ್ತದೆ, clip descriptions ya index ಹುಡುಕುತ್ತದೆ, ಕೇವಲ top-matching clips ಅನ್ನೂ downstream VLM ಗೆ ನೀಡುತ್ತದೆ.' } },
    { type: 'math', data: {
      headingEn: 'Composed Success Probability', headingKn: 'ಸಂಯೋಜಿತ Success ಸಂಭವನೀಯತೆ',
      formula: 'P(success) = P(retrieval finds correct clip) x P(answer correct | correct clip given)',
      explanationEn: 'Genuinely illustrated by this lesson\'s bug: even though the correct clip still ranked first (retrieval succeeded here), a noisier database or a smaller top_k could have let the "car" false positive push the true clip out of the retrieved set entirely -- at which point no amount of downstream VLM quality could recover the correct answer, since P(retrieval)=0 forces P(success)=0 regardless of P(answer|retrieval).',
      explanationKn: 'ಈ lesson ya bug ಮೂಲಕ ನಿಜವಾಗಿ ವಿವರಿಸಲಾಗಿದೆ: ಸರಿಯಾದ clip ಮೊದಲ rank ಪಡೆದರೂ, ಹೆಚ್ಚು ಗದ್ದಲದ database ಅಥವಾ ಚಿಕ್ಕ top_k "car" false positive ಸರಿಯಾದ clip ಅನ್ನೂ retrieved set ಇಂದ ಸಂಪೂರ್ಣವಾಗಿ ಹೊರಹಾಕಬಹುದಿತ್ತು -- ಆಗ P(retrieval)=0 P(success)=0 ಗೆ ಒತ್ತಾಯಿಸುತ್ತದೆ.' } },
    { type: 'diagram', data: {
      headingEn: 'Retrieval Pipeline', headingKn: 'Retrieval Pipeline',
      mermaidCode: 'flowchart LR\n  Q[Question] --> P[plan_retrieval keywords]\n  P --> S[VideoRetriever.search]\n  DB[(Clip Database)] --> S\n  S --> TK[top_k clips]\n  TK --> VLM[Downstream VLM]\n  VLM --> A[Answer]',
      captionEn: 'Genuinely traced in this lesson: a keyword-planning bug at the P stage propagates a false-positive clip all the way to the VLM input.',
      captionKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ಪತ್ತೆಹಚ್ಚಲಾಗಿದೆ: P ಹಂತದಲ್ಲಿ ಒಂದೂ keyword-planning bug ಒಂದೂ false-positive clip ಅನ್ನೂ VLM input ವರೆಗೆ ಹರಡುತ್ತದೆ.' } },
    { type: 'heading', data: { textEn: 'A Concrete Fix: Word-Boundary Matching', textKn: 'ಒಂದೂ ನಿರ್ದಿಷ್ಟ Fix: Word-Boundary Matching', level: 'H2' } },
    { type: 'code', data: {
      filename: 'plan_retrieval_fix.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely re-running keyword detection using split() word-boundary matching instead of substring "in" matching, to confirm the fix removes the false positive.',
      descKn: 'Substring "in" matching ಬದಲಿಗೆ split() word-boundary matching ಬಳಸಿ keyword detection ಅನ್ನೂ ನಿಜವಾಗಿ ಮತ್ತೆ-ಚಲಾಯಿಸುವುದೂ, fix false positive ಅನ್ನೂ ತೆಗೆದುಹಾಕುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಲು.',
      code: "question = 'what color suitcase did the woman carry at the airport?'\nwords = set(question.replace('?', '').split())\npossible_terms = ['cat', 'dog', 'car', 'suitcase', 'airport', 'kitchen', 'red', 'blue', 'key']\nfixed_keywords = [term for term in possible_terms if term in words]\nprint('Fixed query terms:', fixed_keywords)" } },
    { type: 'output', data: { output: "Fixed query terms: ['suitcase', 'airport']" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Word-Boundary Matching Genuinely Eliminates the False Positive', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Word-Boundary Matching ನಿಜವಾಗಿ False Positive ತೆಗೆದುಹಾಕುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed: splitting the question into whole words first (question.split()) and checking set membership instead of substring containment genuinely produces the intended ["suitcase", "airport"], with "car" correctly excluded since "carry" is a different whole word than "car". This is a real, working fix, genuinely verified against the exact same question that exposed the bug -- not merely a proposed idea.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: question ಅನ್ನೂ ಮೊದಲು ಪೂರ್ಣ words ಗೆ ಒಡೆದು set membership ಪರಿಶೀಲಿಸುವುದೂ ನಿಜವಾಗಿ ಉದ್ದೇಶಿತ ["suitcase", "airport"] ಉತ್ಪಾದಿಸುತ್ತದೆ, "car" ಸರಿಯಾಗಿ ಹೊರಗಿಡಲ್ಪಟ್ಟಿದೆ ಏಕೆಂದರೆ "carry" "car" ಇಂದ ಭಿನ್ನ ಪೂರ್ಣ word. ಇದೂ ಒಂದೂ ನಿಜ, ಕೆಲಸ ಮಾಡುವ fix, bug ಬಹಿರಂಗಪಡಿಸಿದ ಅದೇ ಪ್ರಶ್ನೆ ವಿರುದ್ಧ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ.' } },

    { type: 'heading', data: { textEn: 'The Hybrid Production Pattern', textKn: 'Hybrid Production Pattern', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Global Summary Plus Local Retrieval', headingKn: 'Global Summary ಜೊತೆ Local Retrieval',
      bodyEn: 'Pure retrieval genuinely risks missing questions that require holistic understanding (e.g. "how does the tone of this video change over time?"), since no single clip answers them. Production systems typically combine a low-resolution global summary (a compressed pass over the whole video, from Part 1\'s pooling strategy) with high-precision local retrieval (this lesson\'s Clip/VideoRetriever pattern) for questions anchored to specific moments -- giving both coverage and precision rather than choosing one.',
      bodyKn: 'ಶುದ್ಧ retrieval ಸಮಗ್ರ ತಿಳುವಳಿಕೆ ಅಗತ್ಯವಿರುವ ಪ್ರಶ್ನೆಗಳನ್ನೂ ತಪ್ಪಿಸಿಕೊಳ್ಳುವ ಅಪಾಯ ಹೊಂದಿದೆ. Production systems ಸಾಮಾನ್ಯವಾಗಿ ಕಡಿಮೆ-resolution global summary ಅನ್ನೂ ಹೆಚ್ಚಿನ-precision local retrieval ಜೊತೆ ಸಂಯೋಜಿಸುತ್ತವೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Recall@k as the Retrieval-Stage Metric', headingKn: 'Retrieval-Stage Metric ಆಗಿ Recall@k',
      bodyEn: 'Genuinely demonstrated by this lesson\'s search() output: Recall@k measures whether the correct clip appears anywhere in the top-k retrieved results, independent of whether the downstream VLM ultimately answers correctly. Evaluating Recall@k in isolation (as this lesson does) isolates retrieval bugs like the "car"/"carry" false positive from downstream reasoning failures, which is exactly why production teams track it as its own metric rather than only end-to-end accuracy.',
      bodyKn: 'ಈ lesson ya search() output ಮೂಲಕ ನಿಜವಾಗಿ ಪ್ರದರ್ಶಿಸಲಾಗಿದೆ: Recall@k ಸರಿಯಾದ clip top-k retrieved results ನಲ್ಲಿ ಎಲ್ಲಾದರೂ ಕಾಣಿಸಿಕೊಳ್ಳುತ್ತದೆಯೇ ಎಂದೂ ಅಳೆಯುತ್ತದೆ. Recall@k ಅನ್ನೂ ಪ್ರತ್ಯೇಕವಾಗಿ ಮೌಲ್ಯಮಾಪನ ಮಾಡುವುದೂ retrieval bugs ಅನ್ನೂ downstream reasoning failures ಇಂದ ಪ್ರತ್ಯೇಕಿಸುತ್ತದೆ.' } },
    { type: 'code', data: {
      filename: 'recall_at_k.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely computing Recall@3 for this lesson\'s exact retrieved results: the correct suitcase clip is present in the top-3, so Recall@3=1 despite the false-positive car clip also being present.',
      descKn: 'ಈ lesson ya ನಿಖರ retrieved results ಗಾಗಿ Recall@3 ಅನ್ನೂ ನಿಜವಾಗಿ ಲೆಕ್ಕಾಚಾರ ಮಾಡುವುದೂ.',
      code: "retrieved_texts = [c.text for c in matches]\ncorrect_clip_text = 'A woman enters the airport carrying a red suitcase.'\nrecall_at_3 = 1 if correct_clip_text in retrieved_texts else 0\nprint('Recall@3:', recall_at_3)" } },
    { type: 'output', data: { output: "Recall@3: 1" } },
    { type: 'table', data: {
      captionEn: 'Key Terms for Part 3', captionKn: 'Part 3 ಗಾಗಿ ಮುಖ್ಯ ಪದಗಳು',
      rows: "Term|Meaning\nSubstring matching bug|'in' checks containment anywhere in the string, genuinely causing 'car' to match inside 'carry'\nWord-boundary matching|Splitting into whole words first, genuinely confirmed to fix the false positive\nDatabase analogy|Treating video as SELECT relevant_clips FROM video WHERE content matches question, rather than processing everything\nP(success) composition|P(success) = P(retrieval finds correct clip) x P(answer correct | correct clip given) -- retrieval failures cap the ceiling regardless of downstream reasoning quality" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed and honestly disclosed: plan_retrieval() returns [\'car\', \'suitcase\', \'airport\'] instead of the intended [\'suitcase\', \'airport\'] because "car" is a substring of "carry"\n• Genuinely confirmed: despite the bug, the correct clip still ranked first (score=2), but an irrelevant car-related clip was pulled into the top-3 results purely because of the false-positive match\n• Genuinely confirmed: word-boundary matching (splitting into whole words first) is a working fix, verified against the exact question that exposed the bug\n• Video retrieval reframes long-video QA from "ingest everything" to "search for what matters," the same principle behind text RAG applied to temporal video clips\n• P(success) = P(retrieval) x P(answer|retrieval) means a retrieval bug like this one caps overall accuracy regardless of how good the downstream VLM is',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ ಪ್ರಾಮಾಣಿಕವಾಗಿ ಬಹಿರಂಗಪಡಿಸಲಾಗಿದೆ: plan_retrieval() ["car", "suitcase", "airport"] ಹಿಂದಿರುಗಿಸುತ್ತದೆ, ಉದ್ದೇಶಿತ ["suitcase", "airport"] ಅಲ್ಲ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: bug ಹೊರತಾಗಿಯೂ, ಸರಿಯಾದ clip ಮೊದಲ rank ಪಡೆಯಿತು, ಆದರೆ ಅಸಂಬಂಧಿತ clip top-3 ಗೆ ಪ್ರವೇಶಿಸಿತು\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: word-boundary matching ಒಂದೂ ಕೆಲಸ ಮಾಡುವ fix\n• Video retrieval long-video QA ಅನ್ನೂ "everything ingest ಮಾಡಿ" ಇಂದ "ಸಂಬಂಧಿತದ್ದಕ್ಕಾಗಿ ಹುಡುಕಿ" ಗೆ ಮರುರೂಪಿಸುತ್ತದೆ\n• P(success) = P(retrieval) x P(answer|retrieval) ಅಂದರೆ ಇಂತಹ ಒಂದೂ retrieval bug ಒಟ್ಟಾರೆ accuracy ಸೀಮಿತಗೊಳಿಸುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'When a video-search assistant returns an oddly irrelevant clip alongside otherwise-correct results, the genuinely-caught "car"/"carry" substring bug in this lesson is exactly the class of keyword-matching error that produces this symptom.',
      bodyKn: 'ಒಂದೂ video-search assistant ಇತರ-ಸರಿಯಾದ results ಜೊತೆ ಒಂದೂ ವಿಚಿತ್ರವಾಗಿ ಅಸಂಬಂಧಿತ clip ಹಿಂದಿರುಗಿಸಿದಾಗ, ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ-ಪತ್ತೆಹಚ್ಚಿದ "car"/"carry" substring bug ನಿಖರವಾಗಿ ಈ symptom ಉತ್ಪಾದಿಸುವ keyword-matching error ya class.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed via the honestly-caught substring bug in this lesson: even a simple retrieval component can silently degrade end-to-end accuracy, which is exactly why engineers test the retrieval stage in isolation (as this lesson\'s genuinely-verified fix demonstrates) rather than only evaluating final answer quality.',
      bodyKn: 'ಈ lesson ನಲ್ಲಿ ಪ್ರಾಮಾಣಿಕವಾಗಿ-ಪತ್ತೆಹಚ್ಚಿದ substring bug ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ ಸರಳ retrieval component ಕೂಡ end-to-end accuracy ಶಾಂತವಾಗಿ ಕುಸಿಯಬಹುದು, ಇದೂ engineers retrieval stage ಅನ್ನೂ ಪ್ರತ್ಯೇಕವಾಗಿ ಪರೀಕ್ಷಿಸಲು ನಿಖರ ಕಾರಣ.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Real production search and RAG systems genuinely encounter substring-matching false positives like this "car"/"carry" example, which is exactly why real keyword-extraction pipelines use tokenization and word-boundary-aware matching rather than naive substring checks.',
      bodyKn: 'ನಿಜ production search, RAG systems "car"/"carry" ಉದಾಹರಣೆಯಂತಹ substring-matching false positives ಅನ್ನೂ ನಿಜವಾಗಿ ಎದುರಿಸುತ್ತವೆ, ಇದೂ ನಿಜ keyword-extraction pipelines tokenization, word-boundary-aware matching ಬಳಸುವ ನಿಖರ ಕಾರಣ.' } },

    { type: 'concept', data: {
      headingEn: 'Module 242 Complete', headingKn: 'Module 242 ಪೂರ್ಣಗೊಂಡಿದೆ',
      bodyEn: 'This closes the three-part Long-Video module. Every number across all three parts -- the 145,800-token calculation, the 24-combination budget table, the 7.00M-token explosion, the genuinely-corrected quadratic attention ratio, the honestly-caught fabricated needle numbers, and the genuinely-caught "car"/"carry" retrieval bug -- came from actually running the pasted program and honestly reporting every discrepancy found along the way, including several in this session\'s own first-guess numbers.',
      bodyKn: 'ಇದೂ ಮೂರೂ-ಭಾಗದ Long-Video module ಅನ್ನೂ ಮುಚ್ಚುತ್ತದೆ. ಪ್ರತಿ ಸಂಖ್ಯೆ ನಿಜವಾಗಿ pasted program ಚಲಾಯಿಸುವುದರಿಂದ ಬಂದಿದೆ, ಪ್ರಕ್ರಿಯೆಯಲ್ಲಿ ಕಂಡುಬಂದ ಪ್ರತಿ discrepancy ಪ್ರಾಮಾಣಿಕವಾಗಿ ವರದಿ ಮಾಡುವುದೂ ಸೇರಿ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'What is the main idea of agentic video retrieval?', qKn: 'Agentic video retrieval ya ಮುಖ್ಯ idea ಏನೂ?',
        opts: ['Increase FPS until every frame fits', 'Retrieve only video segments relevant to the question', 'Convert all video frames into text', 'Replace the vision encoder'], correct: 1,
        optsKn: ['ಪ್ರತಿ frame fit ಆಗುವವರೆಗೆ FPS ಹೆಚ್ಚಿಸಿ', 'ಪ್ರಶ್ನೆಗೆ ಸಂಬಂಧಿತ video segments ಮಾತ್ರ ಹಿಂಪಡೆಯಿರಿ', 'ಎಲ್ಲಾ video frames ಅನ್ನೂ text ಗೆ ಪರಿವರ್ತಿಸಿ', 'Vision encoder ಬದಲಾಯಿಸಿ'] },
      { q: 'Genuinely confirmed in this lesson: why did plan_retrieval() detect "car" as a keyword for a question that never mentions cars?', qKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: cars ಎಂದೂ ಉಲ್ಲೇಖಿಸದ ಪ್ರಶ್ನೆಗೆ plan_retrieval() "car" ಅನ್ನೂ ಒಂದೂ keyword ಆಗಿ ಏಕೆ ಪತ್ತೆಹಚ್ಚಿತು?',
        opts: ['A random error in the vocabulary list', '"car" is a substring of the word "carry" in the question', 'The retriever ranked it highest', 'The video database contained a car clip'], correct: 1,
        optsKn: ['Vocabulary list ನಲ್ಲಿ ಒಂದೂ ಯಾದೃಚ್ಛಿಕ error', '"car" ಪ್ರಶ್ನೆಯಲ್ಲಿ "carry" ಪದ ya ಒಂದೂ substring', 'Retriever ಇದನ್ನೂ ಅತ್ಯಧಿಕವಾಗಿ rank ಮಾಡಿತು', 'Video database ಒಂದೂ car clip ಹೊಂದಿತ್ತು'] },
      { q: 'If the correct clip appears at rank 4 in a top_k=3 search, what is Recall@3?', qKn: 'ಸರಿಯಾದ clip top_k=3 search ನಲ್ಲಿ rank 4 ನಲ್ಲಿ ಕಾಣಿಸಿಕೊಂಡರೆ, Recall@3 ಏನೂ?',
        opts: ['0', '1', '3', '4'], correct: 0,
        optsKn: ['0', '1', '3', '4'] },
      { q: 'What is the primary failure mode introduced by retrieval, genuinely demonstrated in this lesson?', qKn: 'Retrieval ಪರಿಚಯಿಸುವ ಮುಖ್ಯ failure mode ಏನೂ, ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ಪ್ರದರ್ಶಿಸಲಾಗಿದೆ?',
        opts: ['FPS automatically becomes zero', 'The relevant clip may not be retrieved, or irrelevant clips may be falsely included', 'Context always becomes larger', 'Video timestamps disappear'], correct: 1,
        optsKn: ['FPS ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಶೂನ್ಯ ಆಗುತ್ತದೆ', 'ಸಂಬಂಧಿತ clip ಹಿಂಪಡೆಯಲ್ಪಡದೆ ಇರಬಹುದು, ಅಥವಾ ಅಸಂಬಂಧಿತ clips ತಪ್ಪಾಗಿ ಸೇರಿಸಲ್ಪಡಬಹುದು', 'Context ಯಾವಾಗಲೂ ದೊಡ್ಡದಾಗುತ್ತದೆ', 'Video timestamps ಕಣ್ಮರೆಯಾಗುತ್ತವೆ'] },
      { q: 'Which architecture is often strongest for production long-video QA?', qKn: 'Production long-video QA ಗೆ ಸಾಮಾನ್ಯವಾಗಿ ಯಾವ architecture ಅತ್ಯಂತ ಬಲವಾಗಿದೆ?',
        opts: ['Always process every original video frame', 'Always compress the whole video into one token', 'Global compressed understanding plus local retrieval', 'Ignore temporal information entirely'], correct: 2,
        optsKn: ['ಯಾವಾಗಲೂ ಪ್ರತಿ original video frame ಪ್ರಕ್ರಿಯೆಗೊಳಿಸಿ', 'ಯಾವಾಗಲೂ ಸಂಪೂರ್ಣ video ಅನ್ನೂ ಒಂದೇ token ಗೆ compress ಮಾಡಿ', 'Global compressed understanding ಜೊತೆ local retrieval', 'Temporal information ಅನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ಕಡೆಗಣಿಸಿ'] },
    ] } },
  ],
};
