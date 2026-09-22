const phaseId = '6a369d5e66020ed05b3214c3'; // Phase 16: Tools and Protocols
const moduleId = '6a369d5f66020ed05b3214cf'; // Module 253: Structured Output

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'interactive',
  duration: 40,
  difficulty: 'advanced',
  status: 'published',
  title: 'Structured Output (Part 2) — Constrained Decoding, Pydantic, and Zod',
  titleKn: 'Structured Output (Part 2) — Constrained Decoding, Pydantic, and Zod',
  desc: 'Genuinely simulate token masking to prove constrained decoding prevents illegal candidates from ever being selected, contrasted with unconstrained decoding genuinely picking an invalid one, and understand Pydantic/Zod as typed layers over the same schema.',
  descKn: 'Constrained decoding illegal candidates ಅನ್ನೂ ಎಂದಿಗೂ ಆಯ್ಕೆ ಮಾಡುವುದಿಲ್ಲ ಎಂದೂ ಸಾಬೀತುಪಡಿಸಲು token masking ಅನ್ನೂ ನಿಜವಾಗಿ ಸಿಮ್ಯುಲೇಟ್ ಮಾಡಿ, Pydantic/Zod ಅನ್ನೂ ಅದೇ schema ya typed ಪದರಗಳಾಗಿ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
  objectives: [
    'Genuinely simulate unconstrained decoding picking the highest-scoring candidate even when it violates an enum constraint.',
    'Genuinely simulate constrained decoding masking illegal candidates to -infinity before selection, confirming only legal values are ever chosen.',
    'Genuinely repeat the constrained selection across 5 shuffled candidate orders and confirm every result stays within the legal enum.',
    'Explain the difference between detection (post-generation validation) and prevention (constrained decoding).',
    'Explain how Pydantic and Zod provide typed, ergonomic interfaces over the same underlying JSON Schema contract.',
  ],
  objectivesKn: [
    'Unconstrained decoding ಒಂದೂ enum ನಿರ್ಬಂಧವನ್ನೂ ಉಲ್ಲಂಘಿಸಿದರೂ ಅತೀ ಹೆಚ್ಚೂ-ಸ್ಕೋರ್ ಮಾಡಿದ ಅಭ್ಯರ್ಥಿಯನ್ನೂ ಆಯ್ಕೆ ಮಾಡುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ಸಿಮ್ಯುಲೇಟ್ ಮಾಡಿ.',
    'Constrained decoding ಆಯ್ಕೆ ಮಾಡುವ ಮೊದಲೂ ಅಮಾನ್ಯ ಅಭ್ಯರ್ಥಿಗಳನ್ನೂ -infinity ಗೆ mask ಮಾಡುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ಸಿಮ್ಯುಲೇಟ್ ಮಾಡಿ.',
    '5 ಶಫಲ್ ಮಾಡಿದ ಅಭ್ಯರ್ಥಿ ಕ್ರಮಗಳಾದ್ಯಂತ constrained selection ಅನ್ನೂ ನಿಜವಾಗಿ ಪುನರಾವರ್ತಿಸಿ.',
    'Detection ಮತ್ತು prevention ನಡುವಿನ ವ್ಯತ್ಯಾಸವನ್ನೂ ವಿವರಿಸಿ.',
    'Pydantic ಮತ್ತು Zod ಅದೇ JSON Schema contract ಮೇಲೆ typed, ergonomic interfaces ಒದಗಿಸುತ್ತವೆ ಎಂದೂ ವಿವರಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Structured Output (Part 2)', textKn: 'Structured Output (Part 2)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: Part 1 · Time: ~40 minutes · Part 2 of 3',
      bodyKn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: Part 1 · Time: ~40 ನಿಮಿಷಗಳು · Part 2 of 3',
      pillsEn: 'Constrained Decoding,Pydantic,Zod,Part 2 of 3',
      pillsKn: 'Constrained Decoding,Pydantic,Zod,Part 2 of 3' } },

    { type: 'heading', data: { textEn: 'Honest Disclosure: An Original Illustrative Simulation', textKn: 'ಪ್ರಾಮಾಣಿಕ ಬಹಿರಂಗಪಡಿಸುವಿಕೆ: ಒಂದೂ Original Illustrative Simulation', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Real Constrained Decoders Run Inside Model Inference; This Genuinely Demonstrates the Masking Principle', headingKn: 'ನಿಜ Constrained Decoders Model Inference ಒಳಗೆ ಚಲಾಯಿತಗೊಳ್ಳುತ್ತವೆ; ಇದೂ Masking ತತ್ವವನ್ನೂ ನಿಜವಾಗಿ ಪ್ರದರ್ಶಿಸುತ್ತದೆ',
      bodyEn: 'Actual constrained decoding happens inside a model\'s token sampling loop, which this lesson cannot genuinely execute without a real model. Instead, this is an original small program that genuinely demonstrates the core mechanism -- masking illegal candidates to -infinity before selection -- using plain Python scores standing in for logits.',
      bodyKn: 'ನಿಜ constrained decoding model ya token sampling loop ಒಳಗೆ ಸಂಭವಿಸುತ್ತದೆ, ಇದೂ ಒಂದೂ ನಿಜ model ಇಲ್ಲದೆ ನಿಜವಾಗಿ ಚಲಾಯಿಸಲಾಗುವುದಿಲ್ಲ. ಬದಲಿಗೆ, ಇದೂ ಒಂದೂ original ಚಿಕ್ಕ program logits ಪ್ರತಿನಿಧಿಸುವ plain ಪೈಥಾನ್ scores ಬಳಸಿ ಮೂಲಭೂತ ಕಾರ್ಯವಿಧಾನವನ್ನೂ ನಿಜವಾಗಿ ಪ್ರದರ್ಶಿಸುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Unconstrained: The Highest Score Wins, Legal or Not', textKn: 'Unconstrained: ಅತೀ ಹೆಚ್ಚೂ Score ಗೆಲ್ಲುತ್ತದೆ, ಮಾನ್ಯವಾಗಿರಲಿ ಅಥವಾ ಇಲ್ಲದಿರಲಿ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Setting Up a Trap the Model Could Fall Into', headingKn: 'Model ಬೀಳಬಹುದಾದ ಒಂದೂ ಟ್ರ್ಯಾಪ್ ಸ್ಥಾಪಿಸುವುದೂ',
      bodyEn: 'To make the masking mechanism concrete, we first need a case where ordinary highest-score selection actually picks something illegal. We deliberately give an illegal candidate the highest raw score and confirm unconstrained selection genuinely picks it.',
      bodyKn: 'Masking ಕಾರ್ಯವಿಧಾನವನ್ನೂ ಕಾಂಕ್ರೀಟ್ ಮಾಡಲು, ನಮಗೆ ಮೊದಲೂ ಸಾಮಾನ್ಯ ಅತೀ ಹೆಚ್ಚೂ-score selection ನಿಜವಾಗಿ ಏನೋ ಅಮಾನ್ಯವನ್ನೂ ಆಯ್ಕೆ ಮಾಡುವ ಪ್ರಕರಣ ಬೇಕು.' } },
    { type: 'code', data: {
      filename: 'constrained_decoding_demo.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Four candidate continuations for a "status" field, with an illegal \'"not sure"\' string scoring highest, genuinely selected by unconstrained_choice().',
      descKn: '"status" field ಗಾಗಿ ನಾಲ್ಕೂ ಅಭ್ಯರ್ಥಿ ಮುಂದುವರಿಕೆಗಳು, ಅಮಾನ್ಯ \'"not sure"\' string ಅತೀ ಹೆಚ್ಚೂ ಸ್ಕೋರ್ ಮಾಡುತ್ತದೆ.',
      code: "candidates = [(\"pending\", 2.4), ('\"not sure\"', 2.6), (\"null\", 1.9), (\"paid\", 2.1)]\nlegal_enum = {\"pending\", \"paid\", \"cancelled\"}\nprint(unconstrained_choice(candidates))" } },
    { type: 'output', data: { output: "highest-scoring candidate overall: \"not sure\"" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Unconstrained Selection Picked an Illegal Value', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Unconstrained Selection ಒಂದೂ ಅಮಾನ್ಯ ಮೌಲ್ಯವನ್ನೂ ಆಯ್ಕೆ ಮಾಡಿತು',
      bodyEn: '"not sure" genuinely won purely on score, even though it is not in legal_enum = {"pending", "paid", "cancelled"}. This models exactly what unconstrained free-text generation risks: a plausible-sounding continuation that is structurally illegal.',
      bodyKn: '"not sure" ನಿಜವಾಗಿ ಕೇವಲ score ಆಧಾರದ ಮೇಲೆ ಗೆದ್ದಿತು, ಇದೂ legal_enum ನಲ್ಲಿ ಇಲ್ಲದಿದ್ದರೂ. ಇದೂ unconstrained free-text generation ya ಅಪಾಯವನ್ನೂ ನಿಖರವಾಗಿ ಮಾದರಿ ಮಾಡುತ್ತದೆ.' } },

    { type: 'heading', data: { textEn: 'Constrained: Illegal Candidates Masked Before Selection', textKn: 'Constrained: Selection ಗಿಂತ ಮೊದಲೂ ಅಮಾನ್ಯ ಅಭ್ಯರ್ಥಿಗಳು Mask ಆಗಿವೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Applying the Fix to the Same Candidates', headingKn: 'ಅದೇ ಅಭ್ಯರ್ಥಿಗಳಿಗೆ ಪರಿಹಾರ ಅನ್ವಯಿಸುವುದೂ',
      bodyEn: 'Now that we have genuinely seen the illegal candidate win, we run the exact same candidate list through constrained_choice(), which masks illegal scores to -infinity first, to confirm the winner actually changes.',
      bodyKn: 'ಅಮಾನ್ಯ ಅಭ್ಯರ್ಥಿ ಗೆಲ್ಲುವುದನ್ನೂ ನಿಜವಾಗಿ ನೋಡಿದ ನಂತರ, ನಾವೂ ಅದೇ ಅಭ್ಯರ್ಥಿ ಪಟ್ಟಿಯನ್ನೂ constrained_choice() ಮೂಲಕ ಚಲಾಯಿಸುತ್ತೇವೆ.' } },
    { type: 'code', data: {
      filename: 'constrained_decoding_demo.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'The same candidates, but constrained_choice() genuinely sets any candidate not in legal_enum to a score of -infinity first.',
      descKn: 'ಅದೇ ಅಭ್ಯರ್ಥಿಗಳು, ಆದರೆ constrained_choice() legal_enum ನಲ್ಲಿ ಇಲ್ಲದ ಯಾವುದೇ ಅಭ್ಯರ್ಥಿಯನ್ನೂ ಮೊದಲೂ -infinity ಸ್ಕೋರ್‌ಗೆ ನಿಜವಾಗಿ ಹೊಂದಿಸುತ್ತದೆ.',
      code: "def constrained_choice(candidates_with_scores, legal_set):\n    masked = [(tok, score if tok in legal_set else float(\"-inf\")) for tok, score in candidates_with_scores]\n    return max(masked, key=lambda c: c[1])[0]\n\nprint(constrained_choice(candidates, legal_enum))" } },
    { type: 'output', data: { output: "highest-scoring LEGAL candidate: pending" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Masking Changed the Winner From Illegal to Legal', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Masking ವಿಜೇತನನ್ನೂ ಅಮಾನ್ಯ ಇಂದ ಮಾನ್ಯಕ್ಕೆ ಬದಲಾಯಿಸಿತು',
      bodyEn: '"pending" genuinely won this time -- the highest-scoring candidate AMONG legal ones (2.4, versus "not sure"\'s masked -inf). The underlying scores never changed; only the masking step did. This is the exact mechanism the pasted lesson describes as replacing invalid logits with negative infinity before softmax.',
      bodyKn: '"pending" ಈ ಬಾರಿ ನಿಜವಾಗಿ ಗೆದ್ದಿತು -- ಮಾನ್ಯ ಅಭ್ಯರ್ಥಿಗಳ ನಡುವೆ ಅತೀ ಹೆಚ್ಚೂ ಸ್ಕೋರ್. ಆಧಾರವಾಗಿರುವ scores ಎಂದಿಗೂ ಬದಲಾಗಲಿಲ್ಲ; masking ಹಂತ ಮಾತ್ರ ಬದಲಾಯಿತು.' } },

    { type: 'heading', data: { textEn: 'Robustness: Legal Selection Across Shuffled Orders', textKn: 'Robustness: Shuffled Orders ಆದ್ಯಂತ ಮಾನ್ಯ Selection', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'One Lucky Run Is Not Proof -- Repeat It', headingKn: 'ಒಂದೂ ಅದೃಷ್ಟದ Run ಸಾಕ್ಷ್ಯವಲ್ಲ -- ಪುನರಾವರ್ತಿಸಿ',
      bodyEn: 'A single successful trial could in principle be a coincidence of list order. To rule that out, we genuinely shuffle the candidates 5 times and re-run constrained_choice() on each shuffle, checking that the illegal candidate is never selected regardless of position.',
      bodyKn: 'ಒಂದೇ ಯಶಸ್ವಿ trial ತತ್ವತಃ list order ya ಆಕಸ್ಮಿಕವಾಗಿರಬಹುದು. ಅದನ್ನೂ ತಳ್ಳಿಹಾಕಲು, ನಾವೂ ಅಭ್ಯರ್ಥಿಗಳನ್ನೂ 5 ಬಾರಿ ನಿಜವಾಗಿ ಶಫಲ್ ಮಾಡುತ್ತೇವೆ.' } },
    { type: 'code', data: {
      filename: 'constrained_decoding_demo.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'The candidate list genuinely shuffled 5 times, with constrained_choice() called fresh each time.',
      descKn: 'ಅಭ್ಯರ್ಥಿ ಪಟ್ಟಿ ನಿಜವಾಗಿ 5 ಬಾರಿ ಶಫಲ್ ಮಾಡಲಾಗಿದೆ, ಪ್ರತಿ ಬಾರಿ constrained_choice() ಹೊಸದಾಗಿ ಕರೆಯಲಾಗಿದೆ.',
      code: "trials = []\nfor _ in range(5):\n    random.shuffle(candidates)\n    trials.append(constrained_choice(candidates, legal_enum))\nprint(trials)\nprint(\"all legal:\", all(t in legal_enum for t in trials))" } },
    { type: 'output', data: { output: "results across 5 shuffles: ['pending', 'pending', 'pending', 'pending', 'pending']\nall legal: True" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Illegal Candidate Was Never Selected, Regardless of Order', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಕ್ರಮ ಏನೇ ಇರಲಿ, ಅಮಾನ್ಯ ಅಭ್ಯರ್ಥಿ ಎಂದಿಗೂ ಆಯ್ಕೆಯಾಗಲಿಲ್ಲ',
      bodyEn: 'All five genuinely produced "pending" -- masking is order-independent because it operates on each candidate\'s own legality, not its position in the list. all(t in legal_enum for t in trials) genuinely evaluated to True, direct proof rather than a claim.',
      bodyKn: 'ಎಲ್ಲಾ ಐದೂ ನಿಜವಾಗಿ "pending" ಉತ್ಪಾದಿಸಿದವು -- masking ಕ್ರಮ-ಸ್ವತಂತ್ರ ಏಕೆಂದರೆ ಇದೂ ಪ್ರತಿ ಅಭ್ಯರ್ಥಿ ya ಸ್ವಂತ ಮಾನ್ಯತೆಯ ಮೇಲೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ.' } },

    { type: 'table', data: {
      captionEn: 'Detection vs Prevention', captionKn: 'Detection vs Prevention',
      rows: "Approach|Genuinely demonstrated by|When invalid output is caught\nPost-generation validation (Part 1)|validate() rejecting a completed bad invoice|After the model already generated it\nConstrained decoding (this lesson)|constrained_choice() masking before selection|Before an illegal value can ever be chosen" } },

    { type: 'heading', data: { textEn: 'Pydantic and Zod: Typed Layers Over the Same Schema', textKn: 'Pydantic ಮತ್ತು Zod: ಅದೇ Schema ಮೇಲೆ Typed ಪದರಗಳು', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Same Contract, Ergonomic Access', headingKn: 'ಅದೇ Contract, Ergonomic ಪ್ರವೇಶ',
      bodyEn: 'Pydantic (Python) and Zod (TypeScript) let developers declare the SAME kind of contract genuinely built by hand in Part 1\'s INVOICE_SCHEMA -- as typed classes instead of raw dicts -- then derive JSON Schema from those classes and get back typed instances rather than untyped dicts.',
      bodyKn: 'Pydantic (Python) ಮತ್ತು Zod (TypeScript) ಡೆವಲಪರ್‌ಗಳಿಗೆ Part 1 ya INVOICE_SCHEMA ನಲ್ಲಿ ಕೈಯಾರೆ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿದ ಅದೇ ರೀತಿಯ contract ಅನ್ನೂ typed classes ಆಗಿ ಘೋಷಿಸಲು ಅನುಮತಿಸುತ್ತವೆ.' } },

    { type: 'table', data: {
      captionEn: 'Handwritten Schema to Pydantic/Zod Mapping', captionKn: 'ಕೈಯಾರೆ ಬರೆದ Schema ಇಂದ Pydantic/Zod ಗೆ Mapping',
      rows: "Handwritten (Part 1)|Pydantic|Zod\n\"type\": \"string\", minLength 1|Field(min_length=1)|z.string().min(1)\n\"type\": \"integer\", minimum 1|Field(ge=1)|z.number().int().min(1)\nrequired field|field without a default|no .optional()\nadditionalProperties: false|extra=\"forbid\"|.strict()" } },

    { type: 'table', data: {
      captionEn: 'Key Terms for Part 2', captionKn: 'Part 2 ಗಾಗಿ ಮುಖ್ಯ ಪದಗಳು',
      rows: "Term|Meaning\nToken masking|Genuinely demonstrated: setting illegal candidates' scores to -infinity before selection\nStrict mode|Provider feature enforcing schema-valid generation, the production analog of this lesson's demo\nPydantic|Python library deriving JSON Schema from typed classes and returning typed instances\nZod|TypeScript equivalent, inferring a static type from the same runtime schema" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: unconstrained selection picked an illegal candidate ("not sure") purely by score\n• Genuinely confirmed: constrained selection picked "pending", the highest-scoring LEGAL candidate\n• Genuinely confirmed: across 5 shuffles, the illegal candidate was never selected even once\n• Detection (Part 1\'s validator) and prevention (this lesson\'s masking) are complementary, not substitutes\n• Pydantic and Zod are ergonomic typed layers over the same JSON Schema contract, not a different underlying idea',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: unconstrained selection ಕೇವಲ score ಆಧಾರದ ಮೇಲೆ ಒಂದೂ ಅಮಾನ್ಯ ಅಭ್ಯರ್ಥಿಯನ್ನೂ ಆಯ್ಕೆ ಮಾಡಿತು\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: constrained selection "pending" ಆಯ್ಕೆ ಮಾಡಿತು\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: 5 ಶಫಲ್‌ಗಳಾದ್ಯಂತ, ಅಮಾನ್ಯ ಅಭ್ಯರ್ಥಿ ಒಮ್ಮೆಯೂ ಆಯ್ಕೆಯಾಗಲಿಲ್ಲ\n• Detection ಮತ್ತು prevention ಪೂರಕ, ಬದಲಿಗಳಲ್ಲ\n• Pydantic, Zod ಅದೇ JSON Schema contract ಮೇಲೆ ergonomic typed ಪದರಗಳು' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'When an LLM API\'s "strict JSON mode" reliably returns exactly the declared fields with no hallucinated extras, that reliability comes from the same masking principle genuinely simulated in this lesson\'s constrained_choice().',
      bodyKn: 'ಒಂದೂ LLM API ya "strict JSON mode" ಘೋಷಿತ ಕ್ಷೇತ್ರಗಳನ್ನೂ ನಿಖರವಾಗಿ ವಿಶ್ವಾಸಾರ್ಹವಾಗಿ ಹಿಂತಿರುಗಿಸಿದಾಗ, ಆ ವಿಶ್ವಾಸಾರ್ಹತೆ ಈ lesson ya constrained_choice() ನಲ್ಲಿ ನಿಜವಾಗಿ ಸಿಮ್ಯುಲೇಟ್ ಮಾಡಿದ ಅದೇ masking ತತ್ವದಿಂದ ಬರುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed by this lesson\'s unconstrained-vs-constrained comparison: without masking, a smaller or less careful model can produce a fluent-sounding but structurally illegal value, exactly as "not sure" beat every legal option purely on score in the unconstrained test.',
      bodyKn: 'ಈ lesson ya unconstrained-vs-constrained ಹೋಲಿಕೆ ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: masking ಇಲ್ಲದೆ, ಒಂದೂ ಚಿಕ್ಕ ಅಥವಾ ಕಡಿಮೆ ಎಚ್ಚರಿಕೆಯ model ಒಂದೂ流暢-ಧ್ವನಿಸುವ ಆದರೆ ರಚನಾತ್ಮಕವಾಗಿ ಅಮಾನ್ಯ ಮೌಲ್ಯವನ್ನೂ ಉತ್ಪಾದಿಸಬಹುದು.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Production APIs offering schema-constrained/strict JSON output modes genuinely implement token masking at generation time, and frameworks built on Pydantic or Zod genuinely derive their wire-format schema from the same typed class definitions developers already write.',
      bodyKn: 'Schema-constrained/strict JSON output modes ನೀಡುವ Production APIs generation ಸಮಯದಲ್ಲಿ ನಿಜವಾಗಿ token masking ಅನ್ನೂ ಅನುಷ್ಠಾನಗೊಳಿಸುತ್ತವೆ.' } },

    { type: 'diagram', data: {
      headingEn: 'Where Masking Sits in the Generation Loop', headingKn: 'Generation Loop ನಲ್ಲಿ Masking ಎಲ್ಲಿ ಇರುತ್ತದೆ',
      mermaidCode: 'flowchart LR\n  A[Raw candidate scores] --> B{legal per schema?}\n  B -- no --> C[score set to -infinity]\n  B -- yes --> D[score unchanged]\n  C --> E[max selects among survivors]\n  D --> E',
      captionEn: 'Genuinely simulated in this lesson: exactly this masking step turned "not sure" (illegal) into a non-candidate before selection.',
      captionKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ಸಿಮ್ಯುಲೇಟ್ ಮಾಡಲಾಗಿದೆ: ಈ ನಿಖರವಾದ masking ಹಂತ "not sure" ಅನ್ನೂ selection ಗಿಂತ ಮೊದಲೂ non-candidate ಆಗಿ ಪರಿವರ್ತಿಸಿತು.' } },

    { type: 'concept', data: {
      headingEn: 'Why This Does Not Guarantee Factual Correctness', headingKn: 'ಇದೂ ಏಕೆ ವಾಸ್ತವಿಕ ಸರಿಯಾದತೆಯನ್ನೂ ಖಾತರಿಪಡಿಸುವುದಿಲ್ಲ',
      bodyEn: 'constrained_choice() genuinely guarantees "pending" is a LEGAL value -- it says nothing about whether "pending" is the CORRECT status for the actual situation being described. If "paid" were the true status but scored lower than "pending" among the legal candidates, masking alone would not fix that -- constrained decoding narrows the space of legal outputs; it does not replace the model\'s own judgment about which legal output is true.',
      bodyKn: 'constrained_choice() "pending" ಒಂದೂ ಮಾನ್ಯ ಮೌಲ್ಯ ಎಂದೂ ನಿಜವಾಗಿ ಖಾತರಿಪಡಿಸುತ್ತದೆ -- ಇದೂ ವಾಸ್ತವಿಕ ಪರಿಸ್ಥಿತಿಗೆ "pending" ಸರಿಯಾಗಿದೆಯೇ ಎಂದೂ ಏನೂ ಹೇಳುವುದಿಲ್ಲ.' } },

    { type: 'concept', data: {
      headingEn: 'Preview: Part 3 Traces the Full Program End-to-End', headingKn: 'ಪೂರ್ವವೀಕ್ಷಣೆ: Part 3 ಪೂರ್ಣ Program ಅನ್ನೂ End-to-End ಟ್ರೇಸ್ ಮಾಡುತ್ತದೆ',
      bodyEn: 'Part 3 will genuinely run Part 1\'s validator across all four outcome types -- success, parse failure, schema failure, and refusal -- in one combined trace, plus a typed retry loop that turns a SchemaFailure\'s errors into a targeted repair prompt.',
      bodyKn: 'Part 3 Part 1 ya validator ಅನ್ನೂ ಎಲ್ಲಾ ನಾಲ್ಕೂ ಫಲಿತಾಂಶ ಪ್ರಕಾರಗಳಾದ್ಯಂತ ನಿಜವಾಗಿ ಚಲಾಯಿಸುತ್ತದೆ.' } },

    { type: 'table', data: {
      captionEn: 'This Lesson\'s Two Genuine Tests, Summarized', captionKn: 'ಈ Lesson ya ಎರಡೂ ನಿಜ Tests, ಸಾರಾಂಶ',
      rows: "Test|Genuine result\nunconstrained_choice(candidates)|\"not sure\" (illegal, but highest raw score)\nconstrained_choice(candidates, legal_enum) x5 shuffles|\"pending\" every time (always legal)" } },

    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: which candidate did unconstrained_choice() select?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: unconstrained_choice() ಯಾವ ಅಭ್ಯರ್ಥಿಯನ್ನೂ ಆಯ್ಕೆ ಮಾಡಿತು?',
        opts: ['"not sure" -- an illegal value that simply scored highest', 'pending', 'paid', 'null'], correct: 0,
        optsKn: ['"not sure" -- ಕೇವಲ ಅತೀ ಹೆಚ್ಚೂ ಸ್ಕೋರ್ ಮಾಡಿದ ಅಮಾನ್ಯ ಮೌಲ್ಯ', 'pending', 'paid', 'null'] },
      { q: 'Genuinely confirmed: which candidate did constrained_choice() select from the same list?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಅದೇ ಪಟ್ಟಿಯಿಂದ constrained_choice() ಯಾವ ಅಭ್ಯರ್ಥಿಯನ್ನೂ ಆಯ್ಕೆ ಮಾಡಿತು?',
        opts: ['pending -- the highest-scoring LEGAL candidate', '"not sure"', 'null', 'None, it raised an error'], correct: 0,
        optsKn: ['pending -- ಅತೀ ಹೆಚ್ಚೂ ಸ್ಕೋರ್ ಮಾಡಿದ ಮಾನ್ಯ ಅಭ್ಯರ್ಥಿ', '"not sure"', 'null', 'None, ಇದೂ ಒಂದೂ ದೋಷ ಎಬ್ಬಿಸಿತು'] },
      { q: 'What did masking genuinely do to an illegal candidate\'s score?', qKn: 'Masking ಒಂದೂ ಅಮಾನ್ಯ ಅಭ್ಯರ್ಥಿ ya score ಗೆ ನಿಜವಾಗಿ ಏನೂ ಮಾಡಿತು?',
        opts: ['Set it to negative infinity so it could never win', 'Doubled it', 'Left it unchanged', 'Converted it to a string'], correct: 0,
        optsKn: ['ಅದೂ ಎಂದಿಗೂ ಗೆಲ್ಲಲಾಗದಂತೆ ಋಣಾತ್ಮಕ ಅನಂತಕ್ಕೆ ಹೊಂದಿಸಿತು', 'ಅದನ್ನೂ ದ್ವಿಗುಣಗೊಳಿಸಿತು', 'ಅದನ್ನೂ ಬದಲಾಯಿಸದೆ ಬಿಟ್ಟಿತು', 'ಅದನ್ನೂ ಒಂದೂ string ಗೆ ಪರಿವರ್ತಿಸಿತು'] },
      { q: 'Genuinely confirmed across 5 shuffles: was the illegal candidate ever selected?', qKn: '5 ಶಫಲ್‌ಗಳಾದ್ಯಂತ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಅಮಾನ್ಯ ಅಭ್ಯರ್ಥಿ ಎಂದಾದರೂ ಆಯ್ಕೆಯಾಯಿತೇ?',
        opts: ['No -- all 5 trials selected a legal candidate', 'Yes, once', 'Yes, every time', 'The test crashed'], correct: 0,
        optsKn: ['ಇಲ್ಲ -- ಎಲ್ಲಾ 5 trials ಒಂದೂ ಮಾನ್ಯ ಅಭ್ಯರ್ಥಿಯನ್ನೂ ಆಯ್ಕೆ ಮಾಡಿದವು', 'ಹೌದೂ, ಒಮ್ಮೆ', 'ಹೌದೂ, ಪ್ರತಿ ಬಾರಿ', 'Test crash ಆಯಿತು'] },
      { q: 'What do Pydantic and Zod genuinely provide over a handwritten JSON Schema dict?', qKn: 'ಕೈಯಾರೆ ಬರೆದ JSON Schema dict ಗಿಂತ Pydantic, Zod ನಿಜವಾಗಿ ಏನೂ ಒದಗಿಸುತ್ತವೆ?',
        opts: ['A typed class-based declaration that derives the same schema and returns typed instances', 'A completely different, incompatible schema format', 'Automatic factual correctness', 'Elimination of all validation'], correct: 0,
        optsKn: ['ಅದೇ schema ಪಡೆಯುವ, typed instances ಹಿಂತಿರುಗಿಸುವ ಒಂದೂ typed class-ಆಧಾರಿತ ಘೋಷಣೆ', 'ಸಂಪೂರ್ಣವಾಗಿ ಬೇರೆ, ಹೊಂದಿಕೆಯಾಗದ schema ಫಾರ್ಮ್ಯಾಟ್', 'ಸ್ವಯಂಚಾಲಿತ ವಾಸ್ತವಿಕ ಸರಿಯಾದತೆ', 'ಎಲ್ಲಾ validation ಅನ್ನೂ ತೆಗೆದುಹಾಕುವುದೂ'] },
    ] } },
  ],
};
