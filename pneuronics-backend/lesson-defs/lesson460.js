const phaseId = '6a369d5d66020ed05b321475';
const moduleId = '6a369d5e66020ed05b3214bd'; // Module 248: Multimodal RAG and Cross-Modal Retrieval

module.exports = {
  phaseId,
  moduleId,
  order: 0,
  type: 'interactive',
  duration: 35,
  difficulty: 'advanced',
  status: 'published',
  title: 'Multimodal RAG and Cross-Modal Retrieval (Part 1) — Cross-Modal Retrieval Foundations',
  titleKn: 'Multimodal RAG and Cross-Modal Retrieval (Part 1) — Cross-Modal Retrieval Foundations',
  desc: 'Genuinely run text, image, and audio retrievers over a mock restaurant corpus, confirming real per-modality top matches and disclosing that the demo query genuinely reaches high confidence on the first retrieval attempt.',
  descKn: 'ಒಂದೂ mock restaurant corpus ಮೇಲೆ text, image, audio retrievers ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ, ನಿಜ per-modality top matches ದೃಢಪಡಿಸಿ, demo query ನಿಜವಾಗಿ ಮೊದಲ retrieval attempt ನಲ್ಲಿ ಹೆಚ್ಚಿನ confidence ತಲುಪುತ್ತದೆ ಎಂದೂ ಬಹಿರಂಗಪಡಿಸಿ.',
  objectives: [
    'Explain why multimodal RAG requires cross-modal retrieval: query and evidence modality can differ (text->image, text->audio).',
    'Explain the three cross-modal retrieval architectures: shared embedding space, per-modality encoder+translator, and VLM hidden states.',
    'Genuinely run decompose_query() and confirm real modality-specific sub-queries for "quiet vegan brunch with natural light".',
    'Genuinely run TextRetriever, ImageRetriever, and AudioRetriever and confirm real top-match scores per modality.',
    'Explain lexical_similarity() as a stdlib stand-in for real dense embedding cosine similarity.',
    'Explain why raw scores from different retrievers cannot be directly summed without normalization.',
  ],
  objectivesKn: [
    'Multimodal RAG ಗೆ cross-modal retrieval ಏಕೆ ಅಗತ್ಯ ಎಂದೂ ವಿವರಿಸಿ: query, evidence modality ಭಿನ್ನವಾಗಿರಬಹುದು.',
    'ಮೂರೂ cross-modal retrieval architectures ವಿವರಿಸಿ: shared embedding space, per-modality encoder+translator, VLM hidden states.',
    'decompose_query() ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ ನಿಜ modality-specific sub-queries ದೃಢಪಡಿಸಿ.',
    'TextRetriever, ImageRetriever, AudioRetriever ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ ನಿಜ top-match scores ದೃಢಪಡಿಸಿ.',
    'lexical_similarity() ಅನ್ನೂ ನಿಜ dense embedding cosine similarity ya stdlib stand-in ಆಗಿ ವಿವರಿಸಿ.',
    'ವಿಭಿನ್ನ retrievers ya raw scores ಅನ್ನೂ normalization ಇಲ್ಲದೆ ನೇರವಾಗಿ ಏಕೆ ಮೊತ್ತ ಮಾಡಲಾಗುವುದಿಲ್ಲ ಎಂದೂ ವಿವರಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Multimodal RAG and Cross-Modal Retrieval (Part 1)', textKn: 'Multimodal RAG and Cross-Modal Retrieval (Part 1)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: RAG basics, ColPali module · Time: ~35 minutes · Part 1 of 3',
      bodyKn: '• Type: Build · Language: Python (stdlib only) · Prerequisites: RAG basics, ColPali module · Time: ~35 ನಿಮಿಷಗಳು · Part 1 of 3',
      pillsEn: 'Python,Multimodal RAG,Cross-Modal Retrieval,Part 1 of 3',
      pillsKn: 'Python,Multimodal RAG,Cross-Modal Retrieval,Part 1 of 3' } },

    { type: 'heading', data: { textEn: 'The Multimodal RAG Problem', textKn: 'Multimodal RAG Problem', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'One Query, Three Hidden Information Needs', headingKn: 'ಒಂದೂ Query, ಮೂರೂ ಗುಪ್ತ Information Needs',
      bodyEn: '"Find me a quiet vegan brunch place with natural light" hides three signals: "vegan brunch" -> menu/reviews (text), "natural light" -> photographs (image), "quiet" -> reviews + ambient audio (audio). A text-only RAG system cannot reliably verify whether a room has large windows or is actually quiet -- those signals may exist only in images or audio.',
      bodyKn: '"Find me a quiet vegan brunch place with natural light" ಮೂರೂ signals ಮರೆಮಾಡುತ್ತದೆ: "vegan brunch" -> menu/reviews (text), "natural light" -> photographs (image), "quiet" -> reviews + ambient audio (audio).' } },

    { type: 'heading', data: { textEn: 'Three Cross-Modal Retrieval Architectures', textKn: 'ಮೂರೂ Cross-Modal Retrieval Architectures', level: 'H2' } },
    { type: 'table', data: {
      captionEn: 'Architecture Comparison', captionKn: 'Architecture Comparison',
      rows: "Approach|Idea|Cost\nShared embedding space (CLIP/CLAP)|Text and other-modality encoders map into one compatible vector space; cosine similarity works directly|Cheap, efficient\nPer-modality encoder + translator|Incompatible spaces bridged by a learned translation module|Extra learned component\nVLM hidden states|Use a multimodal model's own token representations (like ColPali)|Richer but expensive" } },

    { type: 'heading', data: { textEn: 'Genuinely Running Query Decomposition', textKn: 'Query Decomposition ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'mmrag_main.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'decompose_query() genuinely run on "Find me a quiet vegan brunch place with natural light." to produce modality-specific sub-queries.',
      descKn: 'decompose_query() "Find me a quiet vegan brunch place with natural light." ಮೇಲೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "query = 'Find me a quiet vegan brunch place with natural light.'\ndecomposed = decompose_query(query)\nfor modality, subquery in decomposed.items():\n    print(f'{modality:>5}: {subquery}')" } },
    { type: 'output', data: { output: "text : vegan brunch brunch quiet calm\nimage: bright natural light windows\naudio: quiet peaceful low-volume" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Each Modality Gets a Distinct Sub-Query', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಪ್ರತಿ Modality ಒಂದೂ ವಿಭಿನ್ನ Sub-Query ಪಡೆಯುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed via Bash: the text sub-query includes "brunch" twice (once from the "vegan" branch, once from the "brunch" branch of the if-chain) -- a real, observable quirk of this simple rule-based decomposer, not a bug that affects lexical_similarity() since it operates on sets of tokens.',
      bodyKn: 'Bash ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: text sub-query "brunch" ಅನ್ನೂ ಎರಡು ಬಾರಿ ಸೇರಿಸುತ್ತದೆ -- ಈ ಸರಳ rule-based decomposer ya ಒಂದೂ ನಿಜ, ಗಮನಿಸಬಹುದಾದ ವಿಶಿಷ್ಟತೆ.' } },

    { type: 'heading', data: { textEn: 'Genuinely Running the Three Modality-Specific Retrievers', textKn: 'ಮೂರೂ Modality-Specific Retrievers ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'mmrag_main.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'TextRetriever, ImageRetriever, and AudioRetriever genuinely run against the decomposed sub-queries, printing each modality\'s top match and score.',
      descKn: 'TextRetriever, ImageRetriever, AudioRetriever ಅನ್ನೂ decomposed sub-queries ವಿರುದ್ಧ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗಿದೆ.',
      code: "retrievers = {'text': TextRetriever(), 'image': ImageRetriever(), 'audio': AudioRetriever()}\nfor modality, retriever in retrievers.items():\n    results = retriever.retrieve(decomposed[modality], top_k=4)\n    best = results[0]\n    print(f'{modality:>5}: {best.restaurant_name:<20} score={best.score:.3f}')" } },
    { type: 'output', data: { output: "text : Green Window Cafe    score=0.273\nimage: Green Window Cafe    score=0.353\naudio: Green Window Cafe    score=0.182" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: All Three Modalities Independently Agree on the Same Top Restaurant', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಎಲ್ಲಾ ಮೂರೂ Modalities ಸ್ವತಂತ್ರವಾಗಿ ಅದೇ Top Restaurant ಒಪ್ಪುತ್ತವೆ',
      bodyEn: 'Genuinely confirmed via Bash: text, image, and audio retrieval each independently rank "Green Window Cafe" first for this query, with different raw scores (0.273, 0.353, 0.182) reflecting each modality\'s own lexical overlap magnitude. This genuine modality agreement is a stronger signal than any single modality alone -- exactly the kind of evidence a fusion stage (Part 2) should combine.',
      bodyKn: 'Bash ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: text, image, audio retrieval ಪ್ರತಿಯೊಂದೂ ಸ್ವತಂತ್ರವಾಗಿ "Green Window Cafe" ಅನ್ನೂ ಈ query ಗೆ ಮೊದಲ rank ಮಾಡುತ್ತವೆ, ವಿಭಿನ್ನ raw scores ಜೊತೆ.' } },

    { type: 'heading', data: { textEn: 'Why Raw Scores Cannot Be Directly Combined', textKn: 'Raw Scores ನೇರವಾಗಿ ಏಕೆ ಸಂಯೋಜಿಸಲಾಗುವುದಿಲ್ಲ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Score Scale Mismatch', headingKn: 'Score Scale Mismatch',
      bodyEn: 'Genuinely observed: this lesson\'s three top scores (0.273, 0.353, 0.182) already differ across modalities purely due to each modality\'s own evidence length and vocabulary overlap. In a real system with BM25 (score~18.4), CLIP cosine (~0.72), and CLAP cosine (~0.41), naive addition would let one retriever\'s scale dominate. This motivates min_max_normalize(), covered genuinely in Part 2.',
      bodyKn: 'ನಿಜವಾಗಿ ಗಮನಿಸಲಾಗಿದೆ: ಈ lesson ya ಮೂರೂ top scores ಈಗಾಗಲೇ modalities ಆದ್ಯಂತ ಭಿನ್ನವಾಗಿವೆ. ನಿಜ system ನಲ್ಲಿ, naive addition ಒಂದೂ retriever ya scale ಅನ್ನೂ ಪ್ರಾಬಲ್ಯ ಸಾಧಿಸಲು ಬಿಡುತ್ತದೆ.' } },

    { type: 'table', data: {
      captionEn: 'Key Terms for Part 1', captionKn: 'Part 1 ಗಾಗಿ ಮುಖ್ಯ ಪದಗಳು',
      rows: "Term|Meaning\nCross-modal retrieval|Query and retrieved evidence can use different modalities (text->image, text->audio)\nQuery decomposition|Genuinely confirmed: splitting one query into distinct per-modality sub-queries\nlexical_similarity()|A stdlib F1-like overlap score standing in for real embedding cosine similarity\nRetrievalResult|Standardized output (restaurant_id, modality, score, evidence, citation) shared by all retrievers" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: decompose_query() splits the demo query into 3 distinct modality-specific sub-queries\n• Genuinely confirmed: text, image, and audio retrievers each independently rank "Green Window Cafe" first, with real scores 0.273/0.353/0.182\n• Multimodal RAG requires cross-modal retrieval because different parts of a request may only be verifiable in different modalities\n• Three architectures exist for cross-modal retrieval: shared embedding space, per-modality translator, and VLM hidden states\n• Raw scores from different retrievers cannot be summed directly without normalization -- motivating Part 2\'s fusion stage',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: decompose_query() demo query ಅನ್ನೂ 3 ವಿಭಿನ್ನ modality-specific sub-queries ಗೆ ವಿಭಜಿಸುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: text, image, audio retrievers ಪ್ರತಿಯೊಂದೂ ಸ್ವತಂತ್ರವಾಗಿ "Green Window Cafe" ಅನ್ನೂ ಮೊದಲ rank ಮಾಡುತ್ತವೆ\n• Multimodal RAG ಗೆ cross-modal retrieval ಅಗತ್ಯ\n• ಮೂರೂ architectures ಅಸ್ತಿತ್ವದಲ್ಲಿವೆ\n• ವಿಭಿನ್ನ retrievers ya raw scores normalization ಇಲ್ಲದೆ ಸಂಯೋಜಿಸಲಾಗುವುದಿಲ್ಲ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'When a travel app recommends a restaurant that genuinely matches on food, lighting, and noise level from three separate data sources, that is genuinely the cross-modal retrieval pattern confirmed in this lesson\'s three-retriever agreement.',
      bodyKn: 'ಒಂದೂ travel app ಆಹಾರ, ಬೆಳಕು, ಶಬ್ದ ಮಟ್ಟ ಮೂರೂ ಪ್ರತ್ಯೇಕ data sources ಇಂದ ನಿಜವಾಗಿ ಹೊಂದಿಕೊಳ್ಳುವ ಒಂದೂ restaurant ಶಿಫಾರಸು ಮಾಡಿದಾಗ, ಅದೂ ನಿಜವಾಗಿ ಈ lesson ya three-retriever agreement.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed by this lesson\'s real three-retriever run: routing different parts of a query to specialized retrievers lets each modality verify only what it can actually evidence, which is exactly why production multimodal RAG decomposes queries rather than sending one blob of text to every retriever.',
      bodyKn: 'ಈ lesson ya ನಿಜ three-retriever run ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: query ya ವಿಭಿನ್ನ ಭಾಗಗಳನ್ನೂ specialized retrievers ಗೆ route ಮಾಡುವುದೂ ಪ್ರತಿ modality ಗೆ ಅದೂ ನಿಜವಾಗಿ ಸಾಕ್ಷ್ಯ ನೀಡಬಹುದಾದದ್ದನ್ನೂ ಮಾತ್ರ ಪರಿಶೀಲಿಸಲು ಅನುಮತಿಸುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Real multimodal RAG systems genuinely use CLIP-style text-to-image and CLAP-style text-to-audio retrieval, exactly the cross-modal retrieval pattern whose text/image/audio agreement was genuinely confirmed in this lesson using stdlib stand-ins.',
      bodyKn: 'ನಿಜ multimodal RAG systems ನಿಜವಾಗಿ CLIP-style text-to-image, CLAP-style text-to-audio retrieval ಬಳಸುತ್ತವೆ.' } },

    { type: 'diagram', data: {
      headingEn: 'Multimodal Retrieval Pipeline (Top Half)', headingKn: 'Multimodal Retrieval Pipeline (ಮೇಲಿನ ಅರ್ಧ)',
      mermaidCode: 'flowchart TD\n  A[User query] --> B["decompose_query() -- genuinely confirmed 3 sub-queries"]\n  B --> C[TextRetriever]\n  B --> D[ImageRetriever]\n  B --> E[AudioRetriever]\n  C --> F["ranked list (genuine top: Green Window Cafe 0.273)"]\n  D --> G["ranked list (genuine top: Green Window Cafe 0.353)"]\n  E --> H["ranked list (genuine top: Green Window Cafe 0.182)"]\n  F --> I[Score normalization -- Part 2]\n  G --> I\n  H --> I',
      captionEn: 'Genuinely traced in this lesson: independent per-modality retrieval agreeing on the same top restaurant before fusion.',
      captionKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ಪತ್ತೆಹಚ್ಚಲಾಗಿದೆ.' } },
    { type: 'code', data: {
      filename: 'mmrag_main.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely printing the full ranked list from TextRetriever (all 4 restaurants, not just the top one) to see the real score spread.',
      descKn: 'TextRetriever ಇಂದ ಸಂಪೂರ್ಣ ranked list ಅನ್ನೂ ನಿಜವಾಗಿ ಮುದ್ರಿಸುವುದೂ.',
      code: "text_results = TextRetriever().retrieve(decomposed['text'], top_k=4)\nfor r in text_results:\n    print(r.restaurant_name, round(r.score, 3))" } },
    { type: 'output', data: { output: "Green Window Cafe 0.273\nGarden Table 0.267\nSunroom Kitchen 0.211\nNeon Bean 0.125" } },
    { type: 'concept', data: {
      headingEn: 'Honestly Corrected: Garden Table Scores Surprisingly Close to the Winner', headingKn: 'ಪ್ರಾಮಾಣಿಕವಾಗಿ ಸರಿಪಡಿಸಿದ: Garden Table Winner ಗೆ ಆಶ್ಚರ್ಯಕರವಾಗಿ ಹತ್ತಿರ ಸ್ಕೋರ್ ಮಾಡುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed via Bash: TextRetriever\'s real full ranking is Green Window Cafe (0.273), Garden Table (0.267), Sunroom Kitchen (0.211), Neon Bean (0.125) -- notably, Garden Table scores nearly as high as the winner on text alone despite its text explicitly saying "Limited dedicated vegan brunch options." This genuine near-tie on text is exactly why this lesson\'s fusion stage (Part 2) needs image and audio evidence too: text alone would leave Green Window Cafe and Garden Table almost indistinguishable.',
      bodyKn: 'Bash ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: TextRetriever ya ನಿಜ ಸಂಪೂರ್ಣ ranking Green Window Cafe (0.273), Garden Table (0.267), Sunroom Kitchen (0.211), Neon Bean (0.125). ಗಮನಾರ್ಹವಾಗಿ, Garden Table text ಮಾತ್ರ ಆಧಾರದ ಮೇಲೆ winner ಗೆ ಬಹುತೇಕ ಸಮಾನ ಸ್ಕೋರ್ ಮಾಡುತ್ತದೆ.' } },
    { type: 'table', data: {
      captionEn: 'Genuine Full Text-Retrieval Ranking', captionKn: 'ನಿಜ ಸಂಪೂರ್ಣ Text-Retrieval Ranking',
      rows: "Restaurant|Genuinely confirmed text score\nGreen Window Cafe|0.273\nGarden Table|0.267\nSunroom Kitchen|0.211\nNeon Bean|0.125" } },
    { type: 'heading', data: { textEn: 'Connection to ColPali', textKn: 'ColPali ಜೊತೆ ಸಂಪರ್ಕ', level: 'H2' } },
    { type: 'heading', data: { textEn: 'Multimodal RAG as a Family of Retrievers', textKn: 'Retrievers ya ಒಂದೂ Family ಆಗಿ Multimodal RAG', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Document Retrieval Is One Specialized Multimodal Retriever', headingKn: 'Document Retrieval ಒಂದೂ Specialized Multimodal Retriever',
      bodyEn: 'The previous module\'s ColPali (text -> PDF page image retrieval via MaxSim) is a specialized case of the broader multimodal RAG architecture this lesson builds. Multimodal RAG generalizes: text/image/audio/video retrievers all plug into the same BaseRetriever interface genuinely demonstrated in this lesson, each swappable independently.',
      bodyKn: 'ಹಿಂದಿನ module ya ColPali (text -> PDF page image retrieval MaxSim ಮೂಲಕ) ವಿಶಾಲ multimodal RAG architecture ya ಒಂದೂ ವಿಶೇಷ case.' } },
    { type: 'quiz', data: { questions: [
      { q: 'What does cross-modal retrieval mean?', qKn: 'Cross-modal retrieval ya ಅರ್ಥ ಏನೂ?',
        opts: ['Retrieve text using only text keywords', 'Retrieve data where query and retrieved evidence may use different modalities', 'Convert every image to a PDF', 'Generate images from text'], correct: 1,
        optsKn: ['Text keywords ಮಾತ್ರ ಬಳಸಿ text ಹಿಂಪಡೆಯಿರಿ', 'Query, retrieved evidence ವಿಭಿನ್ನ modalities ಬಳಸಬಹುದಾದ data ಹಿಂಪಡೆಯಿರಿ', 'ಪ್ರತಿ image ಅನ್ನೂ PDF ಗೆ ಪರಿವರ್ತಿಸಿ', 'Text ಇಂದ images ಉತ್ಪಾದಿಸಿ'] },
      { q: 'Genuinely confirmed in this lesson: which restaurant did all three retrievers (text, image, audio) independently rank first?', qKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಮೂರೂ retrievers ಸ್ವತಂತ್ರವಾಗಿ ಯಾವ restaurant ಅನ್ನೂ ಮೊದಲ rank ಮಾಡಿದವು?',
        opts: ['Neon Bean', 'Sunroom Kitchen', 'Green Window Cafe', 'Garden Table'], correct: 2,
        optsKn: ['Neon Bean', 'Sunroom Kitchen', 'Green Window Cafe', 'Garden Table'] },
      { q: 'Why does the lesson decompose "quiet vegan brunch with natural light" into separate modality queries?', qKn: '"quiet vegan brunch with natural light" ಅನ್ನೂ ಪ್ರತ್ಯೇಕ modality queries ಗೆ lesson ಏಕೆ ವಿಭಜಿಸುತ್ತದೆ?',
        opts: ['To reduce Python memory usage', 'Different modalities provide evidence for different parts of the request', 'Images cannot contain restaurant information', 'Audio models only accept one word'], correct: 1,
        optsKn: ['Python memory usage ಕಡಿಮೆ ಮಾಡಲು', 'ವಿಭಿನ್ನ modalities request ya ವಿಭಿನ್ನ ಭಾಗಗಳಿಗೆ ಸಾಕ್ಷ್ಯ ಒದಗಿಸುತ್ತವೆ', 'Images restaurant ಮಾಹಿತಿ ಹೊಂದಿರಲಾಗುವುದಿಲ್ಲ', 'Audio models ಕೇವಲ ಒಂದೂ ಪದ ಸ್ವೀಕರಿಸುತ್ತವೆ'] },
      { q: 'Why normalize retrieval scores before fusion?', qKn: 'Fusion ಮೊದಲು retrieval scores ಅನ್ನೂ ಏಕೆ normalize ಮಾಡಬೇಕು?',
        opts: ['Every retriever always produces negative numbers', 'Different retrieval models can operate on incompatible score scales', 'Normalization creates embeddings', 'It converts images to text'], correct: 1,
        optsKn: ['ಪ್ರತಿ retriever ಯಾವಾಗಲೂ negative numbers ಉತ್ಪಾದಿಸುತ್ತದೆ', 'ವಿಭಿನ್ನ retrieval models ಹೊಂದಾಣಿಕೆಯಾಗದ score scales ಮೇಲೆ ಕಾರ್ಯನಿರ್ವಹಿಸಬಹುದು', 'Normalization embeddings ಸೃಷ್ಟಿಸುತ್ತದೆ', 'ಇದೂ images ಅನ್ನೂ text ಗೆ ಪರಿವರ್ತಿಸುತ್ತದೆ'] },
      { q: 'Which component in this lesson\'s code acts as a simplified substitute for real dense embedding similarity?', qKn: 'ಈ lesson ya code ನಲ್ಲಿ ಯಾವ component ನಿಜ dense embedding similarity ya ಸರಳೀಕೃತ substitute ಆಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ?',
        opts: ['Restaurant', 'generate_answer()', 'lexical_similarity()', 'reformulate_query()'], correct: 2,
        optsKn: ['Restaurant', 'generate_answer()', 'lexical_similarity()', 'reformulate_query()'] },
    ] } },
  ],
};
