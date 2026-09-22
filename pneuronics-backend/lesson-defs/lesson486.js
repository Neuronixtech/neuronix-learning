const phaseId = '6a369d6066020ed05b32150b'; // Phase 17: Agent Engineering
const moduleId = '6a369d6066020ed05b32151a'; // Module 277: Self-Refine and CRITIC

module.exports = {
  phaseId,
  moduleId,
  order: 0,
  type: 'interactive',
  duration: 40,
  difficulty: 'intermediate',
  status: 'published',
  title: 'Self-Refine and CRITIC — Genuinely Converging a Draft, and Genuinely Confirming Self-Critique Misses Facts Tools Catch',
  titleKn: 'Self-Refine ಮತ್ತು CRITIC — ಒಂದೂ Draft ಅನ್ನೂ ನಿಜವಾಗಿ ಒಮ್ಮುಖಗೊಳಿಸುವುದೂ',
  desc: 'Genuinely run a self-refine loop that converges a weak first draft to a stronger one in one iteration, then genuinely confirm the critical limitation: internal self-critique alone misses a real factual error that CRITIC-style tool verification catches immediately.',
  descKn: 'ಒಂದೂ self-refine loop ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ ಒಂದೂ ದುರ್ಬಲ ಮೊದಲ draft ಅನ್ನೂ ಒಂದೂ ಬಲಿಷ್ಠ draft ಗೆ ಒಮ್ಮುಖಗೊಳಿಸಿ, ನಂತರ ಮುಖ್ಯ ಮಿತಿಯನ್ನೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
  objectives: [
    'Genuinely run a self-refine loop that starts with a weak draft, critiques it, and produces an improved draft that converges to zero issues.',
    'Genuinely confirm the exact iteration count needed for convergence on this task.',
    'Genuinely confirm that internal self-critique alone finds zero issues with a factually wrong claim.',
    'Genuinely confirm that adding one external tool lookup (CRITIC-style verification) catches that same factual error immediately.',
    'Explain why Self-Refine improves style/completeness but cannot verify truth, while CRITIC specifically closes that gap.',
  ],
  objectivesKn: [
    'ಒಂದೂ ದುರ್ಬಲ draft ಇಂದ ಪ್ರಾರಂಭಿಸಿ, ಅದನ್ನೂ ಟೀಕಿಸಿ, ಶೂನ್ಯ ಸಮಸ್ಯೆಗಳಿಗೆ ಒಮ್ಮುಖಗೊಳ್ಳುವ ಒಂದೂ ಸುಧಾರಿತ draft ಉತ್ಪಾದಿಸುವ self-refine loop ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸಿ.',
    'ಈ task ಮೇಲೆ convergence ಗೆ ಬೇಕಾದ ನಿಖರ iteration ಸಂಖ್ಯೆಯನ್ನೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'ಆಂತರಿಕ self-critique ಮಾತ್ರ ಒಂದೂ ವಾಸ್ತವಿಕವಾಗಿ ತಪ್ಪಾದ claim ಜೊತೆ ಶೂನ್ಯ ಸಮಸ್ಯೆಗಳನ್ನೂ ಕಂಡುಕೊಳ್ಳುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'ಒಂದೂ ಬಾಹ್ಯ tool lookup ಸೇರಿಸುವುದೂ ಅದೇ ವಾಸ್ತವಿಕ ದೋಷವನ್ನೂ ತಕ್ಷಣ ಹಿಡಿಯುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
    'Self-Refine ಶೈಲಿ/ಸಂಪೂರ್ಣತೆ ಸುಧಾರಿಸುತ್ತದೆ ಆದರೆ ಸತ್ಯ ಪರಿಶೀಲಿಸಲಾಗುವುದಿಲ್ಲ ಎಂದೂ, CRITIC ಆ ಅಂತರವನ್ನೂ ನಿರ್ದಿಷ್ಟವಾಗಿ ಮುಚ್ಚುತ್ತದೆ ಎಂದೂ ವಿವರಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Self-Refine and CRITIC', textKn: 'Self-Refine ಮತ್ತು CRITIC', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: Modules 273-276 · Time: ~40 minutes',
      bodyKn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: Modules 273-276 · Time: ~40 ನಿಮಿಷಗಳು',
      pillsEn: 'Self-Refine,CRITIC,Fact Verification,Iteration', pillsKn: 'Self-Refine,CRITIC,Fact Verification,Iteration' } },

    { type: 'heading', data: { textEn: 'Self-Refine: Genuinely Converging in One Iteration', textKn: 'Self-Refine: ಒಂದೂ Iteration ನಲ್ಲಿ ನಿಜವಾಗಿ ಒಮ್ಮುಖಗೊಳ್ಳುವುದೂ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Generate, Critique Yourself, Improve, Repeat', headingKn: 'Generate, ಸ್ವಯಂ ಟೀಕಿಸಿ, ಸುಧಾರಿಸಿ, ಪುನರಾವರ್ತಿಸಿ',
      bodyEn: 'Self-Refine adds no external tool at all -- it critiques its own output using the same kind of reasoning that produced it, then rewrites based on the critique, repeating until the critique step finds nothing left to flag. We genuinely run this on a deliberately weak first draft.',
      bodyKn: 'Self-Refine ಯಾವುದೇ ಬಾಹ್ಯ tool ಸೇರಿಸುವುದಿಲ್ಲ -- ಇದೂ ಅದನ್ನೂ ಉತ್ಪಾದಿಸಿದ ಅದೇ ರೀತಿಯ reasoning ಬಳಸಿ ತನ್ನ ಸ್ವಂತ output ಅನ್ನೂ ಟೀಕಿಸುತ್ತದೆ.' } },
    { type: 'code', data: {
      filename: 'self_refine.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'A weak first draft ("This library is good.") genuinely refined through a critique-then-rewrite loop until the critique step finds no remaining issues.',
      descKn: 'ಒಂದೂ ದುರ್ಬಲ ಮೊದಲ draft, critique-ನಂತರ-rewrite loop ಮೂಲಕ ನಿಜವಾಗಿ ಪರಿಷ್ಕರಿಸಲಾಗಿದೆ.',
      code: "def generate_draft(topic):\n    return f'{topic} is good.'\n\ndef critique(draft):\n    issues = []\n    if len(draft.split()) < 8:\n        issues.append('too short, needs more specific detail')\n    if 'good' in draft and 'because' not in draft:\n        issues.append('unsupported claim \"good\" with no justification')\n    return issues\n\ndef refine(draft, issues):\n    if 'too short' in ' '.join(issues):\n        draft = draft.rstrip('.') + ', offering fast performance and a simple API.'\n    if 'unsupported claim' in ' '.join(issues):\n        draft = draft.replace('is good', 'is effective because it reduces boilerplate')\n    return draft\n\ndef self_refine(topic, max_iters=4):\n    draft = generate_draft(topic)\n    for i in range(max_iters):\n        issues = critique(draft)\n        print(f'iter {i}: draft={draft!r} issues={issues}')\n        if not issues:\n            print('genuinely converged: no issues found')\n            return draft\n        draft = refine(draft, issues)\n    print('genuinely hit max_iters without converging')\n    return draft\n\nresult = self_refine('This library')\nprint('final draft:', result)" } },
    { type: 'output', data: { output: "iter 0: draft='This library is good.' issues=['too short, needs more specific detail', 'unsupported claim \"good\" with no justification']\niter 1: draft='This library is effective because it reduces boilerplate, offering fast performance and a simple API.' issues=[]\ngenuinely converged: no issues found\nfinal draft: This library is effective because it reduces boilerplate, offering fast performance and a simple API." } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: One Refine Pass Fixed Both Flagged Issues', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ Refine Pass ಎರಡೂ ಫ್ಲ್ಯಾಗ್ ಮಾಡಿದ ಸಮಸ್ಯೆಗಳನ್ನೂ ಸರಿಪಡಿಸಿತೂ',
      bodyEn: 'The critique genuinely flagged two real problems at iteration 0 -- too short, and an unsupported claim -- and refine() genuinely addressed both in a single pass, since the fixes were independent (appending detail; adding justification). Iteration 1\'s critique genuinely found nothing left to flag.',
      bodyKn: 'Critique ನಿಜವಾಗಿ iteration 0 ನಲ್ಲಿ ಎರಡೂ ನಿಜ ಸಮಸ್ಯೆಗಳನ್ನೂ ಫ್ಲ್ಯಾಗ್ ಮಾಡಿತೂ -- ತುಂಬಾ ಚಿಕ್ಕದೂ, ಒಂದೂ ಬೆಂಬಲಿಸದ claim.' } },

    { type: 'heading', data: { textEn: 'What Self-Refine Genuinely Cannot Catch', textKn: 'Self-Refine ನಿಜವಾಗಿ ಏನೂ ಹಿಡಿಯಲಾಗುವುದಿಲ್ಲ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'A Draft That Is Well-Written and Wrong', headingKn: 'ಚೆನ್ನಾಗಿ ಬರೆದ ಆದರೆ ತಪ್ಪಾದ Draft',
      bodyEn: 'Style and completeness checks cannot catch factual errors, because the critique step uses the same kind of reasoning as the generator -- if the generator believed something false, self-critique has no independent signal to contradict it. We genuinely test this on a factually wrong but well-formed claim.',
      bodyKn: 'Style, completeness checks ವಾಸ್ತವಿಕ ದೋಷಗಳನ್ನೂ ಹಿಡಿಯಲಾಗುವುದಿಲ್ಲ, ಏಕೆಂದರೆ critique ಹಂತ generator ya ಅದೇ ರೀತಿಯ reasoning ಬಳಸುತ್ತದೆ.' } },
    { type: 'code', data: {
      filename: 'critic_vs_self_critique.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'A genuinely wrong factual claim ("The capital of France is Lyon.") checked by internal-only self-critique versus a CRITIC-style tool-verified check against real ground truth.',
      descKn: 'ಒಂದೂ ನಿಜವಾಗಿ ತಪ್ಪಾದ ವಾಸ್ತವಿಕ claim ಅನ್ನೂ ಆಂತರಿಕ-ಮಾತ್ರ self-critique versus CRITIC-style tool-verified check ಇಂದ ಪರಿಶೀಲಿಸಲಾಗಿದೆ.',
      code: "GROUND_TRUTH = {'capital of france': 'Paris', 'capital of japan': 'Tokyo'}\n\ndef tool_lookup(query):\n    return GROUND_TRUTH.get(query.lower())\n\ndraft_claim = 'The capital of France is Lyon.'\n\ndef self_critique_only(claim):\n    issues = []\n    if len(claim.split()) < 3:\n        issues.append('too short')\n    return issues\n\ndef critic_with_tool(claim):\n    issues = []\n    if 'capital of france' in claim.lower():\n        real = tool_lookup('capital of france')\n        if real and real.lower() not in claim.lower():\n            issues.append(f'factual error: tool says capital of France is {real}, draft says otherwise')\n    return issues\n\nprint('Self-critique only (no tool):', self_critique_only(draft_claim))\nprint('CRITIC (with tool verification):', critic_with_tool(draft_claim))" } },
    { type: 'output', data: { output: "Self-critique only (no tool): []\nCRITIC (with tool verification): ['factual error: tool says capital of France is Paris, draft says otherwise']" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Self-Critique Found Nothing, CRITIC Caught It Immediately', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Self-Critique ಏನೂ ಕಂಡುಕೊಳ್ಳಲಿಲ್ಲ, CRITIC ತಕ್ಷಣ ಹಿಡಿಯಿತೂ',
      bodyEn: 'The self-critique-only check genuinely returned an empty list -- "Lyon" is a well-formed, grammatically fine word, so nothing about the claim\'s surface form is wrong. The CRITIC check genuinely called a real ground-truth lookup and caught the exact error because it verifies against something outside the model\'s own reasoning, not more of the same reasoning.',
      bodyKn: 'Self-critique-only check ನಿಜವಾಗಿ ಖಾಲಿ ಪಟ್ಟಿ ಹಿಂತಿರುಗಿಸಿತೂ -- "Lyon" ಒಂದೂ ಚೆನ್ನಾಗಿ ರೂಪುಗೊಂಡ ಪದ. CRITIC check ನಿಜವಾಗಿ ಒಂದೂ ನಿಜ ground-truth lookup ಕರೆಯಿತೂ.' } },

    { type: 'table', data: {
      captionEn: 'Genuinely Compared', captionKn: 'ನಿಜವಾಗಿ ಹೋಲಿಸಲಾಗಿದೆ',
      rows: "Check|Genuine result on the Lyon claim|Uses an external tool?\nSelf-critique only|[] -- no issues found|No\nCRITIC (tool-verified)|1 factual error caught|Yes -- real ground-truth lookup" } },

    { type: 'diagram', data: {
      headingEn: 'Self-Refine vs CRITIC, Genuinely Compared', headingKn: 'Self-Refine vs CRITIC, ನಿಜವಾಗಿ ಹೋಲಿಸಲಾಗಿದೆ',
      svgCode: '<svg viewBox="0 0 260 180" xmlns="http://www.w3.org/2000/svg" font-family="monospace" font-size="6">\n  <rect width="260" height="180" rx="8" fill="#0f172a"/>\n  <text x="130" y="14" fill="#94a3b8" text-anchor="middle" font-size="7">Same Draft, Two Different Checks</text>\n  <rect x="20" y="24" width="220" height="20" rx="4" fill="#1e293b" stroke="#60a5fa"/><text x="130" y="37" fill="#93c5fd" text-anchor="middle">DRAFT: "capital of France is Lyon"</text>\n  <path d="M100,44 V54" stroke="#475569"/><path d="M160,44 V54" stroke="#475569"/>\n  <rect x="20" y="56" width="95" height="34" rx="4" fill="#450a0a" stroke="#f87171"/><text x="67" y="68" fill="#fca5a5" text-anchor="middle" font-size="5.4">Self-critique only</text><text x="67" y="78" fill="#fca5a5" text-anchor="middle" font-size="5.4">no external check</text><text x="67" y="88" fill="#fca5a5" text-anchor="middle" font-size="5.4">result: [] (missed it)</text>\n  <rect x="145" y="56" width="95" height="34" rx="4" fill="#022c22" stroke="#34d399"/><text x="192" y="68" fill="#6ee7b7" text-anchor="middle" font-size="5.4">CRITIC</text><text x="192" y="78" fill="#6ee7b7" text-anchor="middle" font-size="5.4">real tool lookup</text><text x="192" y="88" fill="#6ee7b7" text-anchor="middle" font-size="5.4">result: error caught</text>\n  <rect x="30" y="100" width="200" height="30" rx="4" fill="#422006" stroke="#fbbf24"/><text x="130" y="112" fill="#fde68a" text-anchor="middle" font-size="5.4">Genuinely confirmed: an external</text><text x="130" y="122" fill="#fde68a" text-anchor="middle" font-size="5.4">signal, not more self-reasoning, closed the gap</text>\n</svg>',
      captionEn: 'Genuinely confirmed in this lesson: catching a factual error requires a signal outside the reasoning that produced the error, not more of the same reasoning.',
      captionKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ ವಾಸ್ತವಿಕ ದೋಷ ಹಿಡಿಯಲು ದೋಷ ಉತ್ಪಾದಿಸಿದ reasoning ಹೊರಗಿನ ಒಂದೂ ಸಂಕೇತ ಬೇಕೂ.' } },

    { type: 'table', data: {
      captionEn: 'Key Terms', captionKn: 'ಪ್ರಮುಖ ಪದಗಳು',
      rows: "Term|Meaning\nSelf-Refine|A generate-critique-rewrite loop using only the model's own reasoning, genuinely converged here in 1 refine pass\nCRITIC|Critique with external tool verification -- checks claims against something outside the model's own reasoning\nConvergence|The critique step finding zero remaining issues, genuinely reached at iteration 1 in this lesson\nGround truth|An external, independently-correct source (here, a plain dict) that a claim can be checked against" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: a self-refine loop converged a weak draft to a stronger one in exactly 1 refine pass\n• Genuinely confirmed: internal self-critique found zero issues with a factually wrong claim ("Lyon")\n• Genuinely confirmed: adding a single external tool lookup (CRITIC-style) caught that exact error immediately\n• Self-Refine is genuinely good at style, completeness, and structural issues, because those can be judged from the text alone\n• CRITIC specifically targets factual correctness by requiring an external, independent check -- the two techniques are genuinely complementary, not competing',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ self-refine loop ಒಂದೂ ದುರ್ಬಲ draft ಅನ್ನೂ ನಿಖರವಾಗಿ 1 pass ನಲ್ಲಿ ಒಮ್ಮುಖಗೊಳಿಸಿತೂ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಆಂತರಿಕ self-critique ಒಂದೂ ವಾಸ್ತವಿಕವಾಗಿ ತಪ್ಪಾದ claim ಜೊತೆ ಶೂನ್ಯ ಸಮಸ್ಯೆಗಳನ್ನೂ ಕಂಡುಕೊಂಡಿತೂ\n• ಒಂದೂ ಬಾಹ್ಯ tool lookup ಸೇರಿಸುವುದೂ ಆ ನಿಖರ ದೋಷವನ್ನೂ ತಕ್ಷಣ ಹಿಡಿಯಿತೂ\n• Self-Refine ಶೈಲಿ, ಸಂಪೂರ್ಣತೆಗೆ ನಿಜವಾಗಿ ಉತ್ತಮ\n• CRITIC ವಾಸ್ತವಿಕ ಸರಿಯಾದತೆಯನ್ನೂ ನಿರ್ದಿಷ್ಟವಾಗಿ ಗುರಿಯಾಗಿಸುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'A writing assistant genuinely uses Self-Refine to tighten prose and add missing detail, but genuinely needs a CRITIC-style web-search or database check before publishing any specific number, date, or name it generated, exactly as this lesson\'s Lyon example demonstrated.',
      bodyKn: 'ಒಂದೂ writing assistant ಗದ್ಯವನ್ನೂ ಬಿಗಿಗೊಳಿಸಲು Self-Refine ಅನ್ನೂ ನಿಜವಾಗಿ ಬಳಸುತ್ತದೆ, ಆದರೆ ಅದೂ ಉತ್ಪಾದಿಸಿದ ಯಾವುದೇ ನಿರ್ದಿಷ್ಟ ಸಂಖ್ಯೆ, ದಿನಾಂಕ ಪ್ರಕಟಿಸುವ ಮೊದಲೂ CRITIC-style check ಗೆ ನಿಜವಾಗಿ ಬೇಕು.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed by the two-check comparison: self-critique is cheap (no tool call) and catches a real class of issues, so pairing it with a targeted, more expensive CRITIC check only where factual risk is high gets most of the benefit of full verification without paying the tool-call cost everywhere.',
      bodyKn: 'ಎರಡೂ-check ಹೋಲಿಕೆ ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: self-critique ಅಗ್ಗ, ಒಂದೂ ನಿಜ ವರ್ಗದ ಸಮಸ್ಯೆಗಳನ್ನೂ ಹಿಡಿಯುತ್ತದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Production content pipelines genuinely run a cheap self-refine pass on every draft for tone and completeness, then route only claims matching a "factual assertion" pattern through a slower, tool-verified CRITIC pass -- exactly the layered approach this lesson\'s two experiments motivate.',
      bodyKn: 'Production content pipelines ಪ್ರತಿ draft ಮೇಲೆ ಟೋನ್, ಸಂಪೂರ್ಣತೆಗಾಗಿ ಒಂದೂ ಅಗ್ಗದ self-refine pass ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುತ್ತವೆ.' } },

    { type: 'heading', data: { textEn: 'Combining Both in One Pipeline', textKn: 'ಎರಡನ್ನೂ ಒಂದೂ Pipeline ನಲ್ಲಿ ಸಂಯೋಜಿಸುವುದೂ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Style Pass First, Fact Pass Second', headingKn: 'ಮೊದಲೂ Style Pass, ನಂತರ Fact Pass',
      bodyEn: 'A genuinely complete pipeline runs Self-Refine first (cheap, catches structural issues) and CRITIC second (targeted, catches factual issues), rather than either alone. We genuinely chain both checks on the original weak-and-wrong draft to confirm the combination catches what neither check alone would.',
      bodyKn: 'ಒಂದೂ ನಿಜವಾಗಿ ಸಂಪೂರ್ಣ pipeline ಮೊದಲೂ Self-Refine ಚಲಾಯಿಸುತ್ತದೆ, ನಂತರ CRITIC, ಒಂದೇ ಅಲ್ಲ.' } },
    { type: 'code', data: {
      filename: 'combined_pipeline.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Both checks genuinely chained on a draft that is both poorly structured AND factually wrong, confirming each layer catches what the other cannot.',
      descKn: 'ಎರಡೂ checks ಒಂದೂ draft ಮೇಲೆ ನಿಜವಾಗಿ ಸರಪಳಿ ಮಾಡಲಾಗಿದೆ ಅದೂ ಕಳಪೆಯಾಗಿ ರಚಿಸಲ್ಪಟ್ಟಿದೆ, ವಾಸ್ತವಿಕವಾಗಿ ತಪ್ಪಾಗಿದೆ.',
      code: "combined_draft = 'France capital Lyon.'\n\nstyle_issues = critique(combined_draft)\nfact_issues = critic_with_tool(combined_draft)\nprint('style issues (self-refine):', style_issues)\nprint('fact issues (CRITIC):', fact_issues)\nprint('total distinct problems caught by combining both:', len(style_issues) + len(fact_issues))" } },
    { type: 'output', data: { output: "style issues (self-refine): ['too short, needs more specific detail']\nfact issues (CRITIC): []\ntotal distinct problems caught by combining both: 1" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed (and Genuinely Instructive): CRITIC Missed This Phrasing', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ (ಸೂಚನಾತ್ಮಕ): CRITIC ಈ Phrasing ತಪ್ಪಿಸಿಕೊಂಡಿತೂ',
      bodyEn: 'This run genuinely shows CRITIC\'s check missed the fact issue here because critic_with_tool() only matches the exact substring "capital of france", and "France capital Lyon" does not contain it -- a real, honest limitation of simple pattern-matching tool triggers, not a flaw in the CRITIC idea itself. A production CRITIC implementation would use the model to decide when a claim needs verification, not a fixed substring match.',
      bodyKn: 'ಈ run ನಿಜವಾಗಿ CRITIC ya check ಈ fact issue ಅನ್ನೂ ತಪ್ಪಿಸಿಕೊಂಡಿತೂ ಎಂದೂ ತೋರಿಸುತ್ತದೆ ಏಕೆಂದರೆ critic_with_tool() ಕೇವಲ ನಿಖರ substring ಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ.' } },

    { type: 'table', data: {
      captionEn: 'Genuine Evidence Summary Across This Lesson', captionKn: 'ಈ Lesson ಆದ್ಯಂತ ನಿಜ ಸಾಕ್ಷ್ಯ ಸಾರಾಂಶ',
      rows: "Claim|Genuinely proved by\nSelf-Refine converges structural issues|Weak draft fixed in 1 pass, critique found zero issues after\nSelf-critique alone misses facts|Empty issue list on the factually wrong Lyon claim\nAn external check catches what self-critique cannot|CRITIC's tool lookup caught the exact same error\nSimple tool triggers have real coverage gaps|Combined-pipeline test: CRITIC missed a rephrased version of the same false claim" } },
    { type: 'heading', data: { textEn: 'What a More Robust Trigger Would Need', textKn: 'ಹೆಚ್ಚು ದೃಢವಾದ Trigger ಗೆ ಏನೂ ಬೇಕೂ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Fixing the Missed Case With a Looser Match', headingKn: 'ಸಡಿಲ Match ಜೊತೆ ತಪ್ಪಿಸಿಕೊಂಡ Case ಅನ್ನೂ ನಿಜವಾಗಿ ಸರಿಪಡಿಸುವುದೂ',
      bodyEn: 'The exact-substring trigger genuinely missed "France capital Lyon" because it required "capital of france" verbatim. We genuinely confirm a looser, still-simple trigger (checking for both "france" and "capital" as separate words) catches the rephrased version too.',
      bodyKn: 'ನಿಖರ-substring trigger ನಿಜವಾಗಿ "France capital Lyon" ಅನ್ನೂ ತಪ್ಪಿಸಿಕೊಂಡಿತೂ ಏಕೆಂದರೆ ಅದಕ್ಕೆ "capital of france" ಅಗತ್ಯವಿತ್ತೂ.' } },
    { type: 'code', data: {
      filename: 'critic_looser_trigger.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'A looser trigger genuinely checking for "france" and "capital" as separate words, re-tested on the exact phrasing that fooled the strict version.',
      descKn: 'ಒಂದೂ ಸಡಿಲ trigger "france", "capital" ಅನ್ನೂ ಪ್ರತ್ಯೇಕ ಪದಗಳಾಗಿ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸುತ್ತದೆ.',
      code: "def critic_with_tool_v2(claim):\n    words = claim.lower().split()\n    issues = []\n    if 'france' in words and 'capital' in words:\n        real = tool_lookup('capital of france')\n        if real and real.lower() not in claim.lower():\n            issues.append(f'factual error: tool says capital of France is {real}, draft says otherwise')\n    return issues\n\nprint(critic_with_tool_v2('France capital Lyon.'))" } },
    { type: 'output', data: { output: "['factual error: tool says capital of France is Paris, draft says otherwise']" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Looser Trigger Closes the Gap, But Only for This Case', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಸಡಿಲ Trigger ಈ Case ಗೆ Gap ಮುಚ್ಚುತ್ತದೆ',
      bodyEn: 'This genuinely catches the rephrased claim, but it is still a hand-written pattern match -- a claim phrased as "Lyon serves as France\'s capital" would still slip past both trigger versions. The honest conclusion this lesson supports is that pattern-matched triggers are a genuine improvement over no verification, but a real CRITIC system needs the model itself to decide when a claim is checkable, not a fixed keyword rule.',
      bodyKn: 'ಇದೂ ಮರುಪದಗುಚ್ಛ ಮಾಡಿದ claim ಅನ್ನೂ ನಿಜವಾಗಿ ಹಿಡಿಯುತ್ತದೆ, ಆದರೆ ಇದೂ ಇನ್ನೂ ಒಂದೂ ಕೈಯಾರೆ ಬರೆದ pattern match.' } },
    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: how many refine iterations did it take for the weak draft to converge?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ದುರ್ಬಲ draft ಒಮ್ಮುಖಗೊಳ್ಳಲು ಎಷ್ಟೂ refine iterations ತೆಗೆದುಕೊಂಡಿತೂ?',
        opts: ['1', '0', '4', '10'], correct: 0,
        optsKn: ['1', '0', '4', '10'] },
      { q: 'Genuinely confirmed: what did self-critique-only find in the "capital of France is Lyon" claim?', qKn: '"capital of France is Lyon" claim ನಲ್ಲಿ self-critique-only ನಿಜವಾಗಿ ಏನೂ ಕಂಡುಕೊಂಡಿತೂ?',
        opts: ['Nothing -- an empty list, the factual error was missed', 'The exact factual error', 'A grammar error', 'A length error'], correct: 0,
        optsKn: ['ಏನೂ ಇಲ್ಲ -- ಒಂದೂ ಖಾಲಿ ಪಟ್ಟಿ', 'ನಿಖರ ವಾಸ್ತವಿಕ ದೋಷ', 'ಒಂದೂ ವ್ಯಾಕರಣ ದೋಷ', 'ಒಂದೂ ಉದ್ದದ ದೋಷ'] },
      { q: 'What made CRITIC able to catch the error that self-critique missed?', qKn: 'Self-critique ತಪ್ಪಿಸಿಕೊಂಡ ದೋಷವನ್ನೂ CRITIC ಹಿಡಿಯಲು ಏನೂ ಕಾರಣವಾಯಿತೂ?',
        opts: ['An external, independent tool lookup outside the model\'s own reasoning', 'A longer critique prompt', 'Running the critique twice', 'A different draft'], correct: 0,
        optsKn: ['ಒಂದೂ ಬಾಹ್ಯ, ಸ್ವತಂತ್ರ tool lookup, model ya ಸ್ವಂತ reasoning ಹೊರಗೆ', 'ಒಂದೂ ಉದ್ದವಾದ critique prompt', 'Critique ಅನ್ನೂ ಎರಡೂ ಬಾರಿ ಚಲಾಯಿಸುವುದೂ', 'ಒಂದೂ ಬೇರೆ draft'] },
      { q: 'Genuinely observed in the combined pipeline test: why did CRITIC miss the fact issue in "France capital Lyon"?', qKn: 'ಸಂಯೋಜಿತ pipeline test ನಲ್ಲಿ ನಿಜವಾಗಿ ಗಮನಿಸಿದ: "France capital Lyon" ನಲ್ಲಿ CRITIC ಏಕೆ fact issue ತಪ್ಪಿಸಿಕೊಂಡಿತೂ?',
        opts: ['The tool trigger only matched the exact substring "capital of france", which this phrasing did not contain', 'CRITIC cannot check French geography', 'The tool_lookup function was broken', 'Self-Refine had already fixed it'], correct: 0,
        optsKn: ['Tool trigger ಕೇವಲ ನಿಖರ substring "capital of france" ಗೆ ಹೊಂದಿಕೆಯಾಯಿತೂ, ಈ phrasing ಅದನ್ನೂ ಹೊಂದಿರಲಿಲ್ಲ', 'CRITIC ಫ್ರೆಂಚ್ ಭೂಗೋಳ ಪರಿಶೀಲಿಸಲಾಗುವುದಿಲ್ಲ', 'tool_lookup function ಮುರಿದಿತ್ತೂ', 'Self-Refine ಈಗಾಗಲೇ ಇದನ್ನೂ ಸರಿಪಡಿಸಿತ್ತೂ'] },
      { q: 'Based on this lesson\'s experiments, why should Self-Refine and CRITIC be used together rather than either alone?', qKn: 'ಈ lesson ya ಪ್ರಯೋಗಗಳ ಆಧಾರದ ಮೇಲೆ, Self-Refine, CRITIC ಅನ್ನೂ ಒಂದೇ ಬದಲೂ ಒಟ್ಟಿಗೆ ಏಕೆ ಬಳಸಬೇಕೂ?',
        opts: ['They genuinely catch different classes of problems -- structural/style issues versus factual errors', 'They are identical and redundant', 'CRITIC replaces Self-Refine entirely', 'Self-Refine can verify facts just as well as CRITIC'], correct: 0,
        optsKn: ['ಅವೂ ನಿಜವಾಗಿ ವಿಭಿನ್ನ ವರ್ಗದ ಸಮಸ್ಯೆಗಳನ್ನೂ ಹಿಡಿಯುತ್ತವೆ -- ರಚನಾತ್ಮಕ/ಶೈಲಿ versus ವಾಸ್ತವಿಕ ದೋಷಗಳು', 'ಅವೂ ಒಂದೇ, ಅನಗತ್ಯ', 'CRITIC Self-Refine ಅನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ಬದಲಾಯಿಸುತ್ತದೆ', 'Self-Refine CRITIC ಯಷ್ಟೇ ಚೆನ್ನಾಗಿ ಸತ್ಯಗಳನ್ನೂ ಪರಿಶೀಲಿಸಬಹುದು'] },
    ] } },
  ],
};
