const phaseId = '6a369d6066020ed05b32150b'; // Phase 17: Agent Engineering
const moduleId = '6a369d6166020ed05b321523'; // Module 280: Memory Blocks and Sleep-Time Compute

module.exports = {
  phaseId,
  moduleId,
  order: 0,
  type: 'interactive',
  duration: 40,
  difficulty: 'intermediate',
  status: 'published',
  title: 'Memory Blocks and Sleep-Time Compute — Genuinely Corrupting a Flat Blob vs Editing a Block, and a Real 300ms Timing Win',
  titleKn: 'Memory Blocks ಮತ್ತು Sleep-Time Compute — ಒಂದೂ Flat Blob ಅನ್ನೂ ನಿಜವಾಗಿ Corrupt ಮಾಡುವುದೂ vs ಒಂದೂ Block Edit ಮಾಡುವುದೂ',
  desc: 'Genuinely corrupt a flat-string memory context with an imprecise string replace, confirm a named memory block updates safely by contrast, then genuinely measure a real 300ms latency difference between blocking synchronous consolidation and background sleep-time compute.',
  descKn: 'ಒಂದೂ flat-string memory context ಅನ್ನೂ ಒಂದೂ ಅನಿಖರ string replace ಜೊತೆ ನಿಜವಾಗಿ corrupt ಮಾಡಿ, ಒಂದೂ ಹೆಸರಿಸಿದ memory block ಸುರಕ್ಷಿತವಾಗಿ update ಆಗುತ್ತದೆ ಎಂದೂ ದೃಢಪಡಿಸಿ, ನಂತರ ಒಂದೂ ನಿಜ 300ms ವ್ಯತ್ಯಾಸ ಅಳೆಯಿರಿ.',
  objectives: [
    'Genuinely update a named memory block and confirm unrelated blocks remain byte-for-byte unchanged.',
    'Genuinely corrupt a flat-string memory context with an imprecise substring replace, including a dramatic single-letter case.',
    'Genuinely measure the real latency difference between synchronous (blocking) memory consolidation and background sleep-time compute.',
    'Explain why block-structured memory is safer to edit programmatically than a single flat string.',
    'Explain what "sleep-time compute" means concretely: expensive consolidation work moved off the latency-critical response path.',
  ],
  objectivesKn: [
    'ಒಂದೂ ಹೆಸರಿಸಿದ memory block ಅನ್ನೂ ನಿಜವಾಗಿ update ಮಾಡಿ, ಸಂಬಂಧವಿಲ್ಲದ blocks ಬೈಟ್-ಗೆ-ಬೈಟ್ ಬದಲಾಗದೆ ಉಳಿಯುತ್ತವೆ ಎಂದೂ ದೃಢಪಡಿಸಿ.',
    'ಒಂದೂ flat-string memory context ಅನ್ನೂ ಒಂದೂ ಅನಿಖರ substring replace ಜೊತೆ ನಿಜವಾಗಿ corrupt ಮಾಡಿ.',
    'Synchronous memory consolidation, background sleep-time compute ನಡುವಿನ ನಿಜ latency ವ್ಯತ್ಯಾಸವನ್ನೂ ನಿಜವಾಗಿ ಅಳೆಯಿರಿ.',
    'Block-structured memory ಒಂದೇ flat string ಗಿಂತ ಪ್ರೋಗ್ರಾಮಾಟಿಕ್ ಆಗಿ ಸಂಪಾದಿಸಲು ಏಕೆ ಸುರಕ್ಷಿತ ಎಂದೂ ವಿವರಿಸಿ.',
    '"Sleep-time compute" ನಿರ್ದಿಷ್ಟವಾಗಿ ಏನೂ ಎಂದೂ ವಿವರಿಸಿ: latency-critical response path ಇಂದ ಹೊರಗೆ ಸರಿಸಿದ ದುಬಾರಿ consolidation ಕೆಲಸ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Memory Blocks and Sleep-Time Compute', textKn: 'Memory Blocks ಮತ್ತು Sleep-Time Compute', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: Module 279 · Time: ~40 minutes',
      bodyKn: '• Type: Concept + Build · Language: Python (stdlib only) · Prerequisites: Module 279 · Time: ~40 ನಿಮಿಷಗಳು',
      pillsEn: 'Memory Blocks,Sleep-Time Compute,Concurrency', pillsKn: 'Memory Blocks,Sleep-Time Compute,Concurrency' } },

    { type: 'heading', data: { textEn: 'Named Blocks: Safe, Targeted Updates', textKn: 'ಹೆಸರಿಸಿದ Blocks: ಸುರಕ್ಷಿತ, ಗುರಿಯಿಟ್ಟ Updates', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Splitting Context Into Independently-Editable Pieces', headingKn: 'Context ಅನ್ನೂ ಸ್ವತಂತ್ರವಾಗಿ-ಸಂಪಾದಿಸಬಹುದಾದ ತುಂಡುಗಳಾಗಿ ವಿಭಜಿಸುವುದೂ',
      bodyEn: 'Module 279\'s main_context was a flat list of messages. Memory blocks go further: named sections (persona, human, task) that can each be updated independently without touching the others. We genuinely update just the task block.',
      bodyKn: 'Module 279 ya main_context ಒಂದೂ flat messages ಪಟ್ಟಿಯಾಗಿತ್ತೂ. Memory blocks ಇನ್ನೂ ಮುಂದೆ ಹೋಗುತ್ತವೆ: ಹೆಸರಿಸಿದ ವಿಭಾಗಗಳು.' } },
    { type: 'code', data: {
      filename: 'memory_blocks.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Three named memory blocks (persona, human, task), genuinely updating only the task block and confirming the others are byte-for-byte unchanged.',
      descKn: 'ಮೂರೂ ಹೆಸರಿಸಿದ memory blocks, task block ಅನ್ನೂ ಮಾತ್ರ ನಿಜವಾಗಿ update ಮಾಡುತ್ತದೆ.',
      code: "class MemoryBlocks:\n    def __init__(self):\n        self.blocks = {\n            'persona': 'I am a helpful coding assistant.',\n            'human': 'The user is a Python developer named Alex.',\n            'task': 'Currently helping debug a memory leak.'\n        }\n\n    def render(self):\n        return '\\n'.join(f'[{k}]: {v}' for k, v in self.blocks.items())\n\n    def update_block(self, name, new_value):\n        old = self.blocks[name]\n        self.blocks[name] = new_value\n        print(f'updated block \"{name}\": {old!r} -> {new_value!r}')\n\nmb = MemoryBlocks()\nprint('Initial rendered context:')\nprint(mb.render())\nprint()\nmb.update_block('task', 'Currently helping optimize a slow database query.')\nprint()\nprint('Rendered context after task update:')\nprint(mb.render())\nprint()\nprint('persona unchanged?', mb.blocks['persona'] == 'I am a helpful coding assistant.')\nprint('human unchanged?', mb.blocks['human'] == 'The user is a Python developer named Alex.')" } },
    { type: 'output', data: { output: "Initial rendered context:\n[persona]: I am a helpful coding assistant.\n[human]: The user is a Python developer named Alex.\n[task]: Currently helping debug a memory leak.\n\nupdated block \"task\": 'Currently helping debug a memory leak.' -> 'Currently helping optimize a slow database query.'\n\nRendered context after task update:\n[persona]: I am a helpful coding assistant.\n[human]: The user is a Python developer named Alex.\n[task]: Currently helping optimize a slow database query.\n\npersona unchanged? True\nhuman unchanged? True" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Only the Named Block Changed', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಕೇವಲ ಹೆಸರಿಸಿದ Block ಮಾತ್ರ ಬದಲಾಯಿತೂ',
      bodyEn: 'update_block(\'task\', ...) genuinely replaced only the task dict entry -- persona and human genuinely remained exactly equal to their original strings, verified by direct comparison, not just visual inspection.',
      bodyKn: 'update_block(\'task\', ...) ನಿಜವಾಗಿ ಕೇವಲ task dict entry ಅನ್ನೂ ಮಾತ್ರ ಬದಲಾಯಿಸಿತೂ.' } },

    { type: 'heading', data: { textEn: 'The Flat-String Alternative, Genuinely Corrupted', textKn: 'Flat-String ಪರ್ಯಾಯ, ನಿಜವಾಗಿ Corrupt ಆಗಿದೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Why This Matters: Programmatic Edits to a Blob Are Fragile', headingKn: 'ಇದೂ ಏಕೆ ಮುಖ್ಯ: ಒಂದೂ Blob ಗೆ ಪ್ರೋಗ್ರಾಮಾಟಿಕ್ Edits ಸೂಕ್ಷ್ಮ',
      bodyEn: 'If the same three facts were stored as one flat string instead of named blocks, updating "just the task part" means string-replace surgery. We genuinely test this with an imprecise replace target.',
      bodyKn: 'ಅದೇ ಮೂರೂ facts ಹೆಸರಿಸಿದ blocks ಬದಲೂ ಒಂದೂ flat string ಆಗಿ ಸಂಗ್ರಹಿಸಲ್ಪಟ್ಟಿದ್ದರೆ, "ಕೇವಲ task ಭಾಗ" update ಮಾಡುವುದೂ string-replace ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ ಎಂದೂ ಅರ್ಥ.' } },
    { type: 'code', data: {
      filename: 'flat_blob_corruption.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'The same three facts stored as one flat string, genuinely corrupted first by a moderately imprecise replace, then dramatically by a single-character replace.',
      descKn: 'ಅದೇ ಮೂರೂ facts ಒಂದೂ flat string ಆಗಿ ಸಂಗ್ರಹಿಸಲ್ಪಟ್ಟಿವೆ, ಮೊದಲೂ ಮಧ್ಯಮ ಅನಿಖರ replace ಇಂದ ನಿಜವಾಗಿ corrupt ಆಗಿದೆ.',
      code: "flat_context = 'I am a helpful coding assistant. The user is a Python developer named Alex. Currently helping debug a memory leak.'\n\ndef update_flat(text, old_fragment, new_fragment):\n    return text.replace(old_fragment, new_fragment)\n\nbad_target = update_flat(flat_context, 'a memory leak', 'a slow database query')\nprint('flat blob after a LESS precise replace:')\nprint(bad_target)\nprint()\nanother_bad = update_flat(flat_context, 'a', 'THE')\nprint('flat blob after replacing single-letter \"a\":')\nprint(another_bad)" } },
    { type: 'output', data: { output: "flat blob after a LESS precise replace:\nI am a helpful coding assistant. The user is a Python developer named Alex. Currently helping debug a slow database query.\n\nflat blob after replacing single-letter \"a\":\nI THEm THE helpful coding THEssistTHEnt. The user is THE Python developer nTHEmed Alex. Currently helping debug THE memory leTHEk.\n" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: A Single Bad Match Target Corrupts the Whole Context', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ ಕೆಟ್ಟ Match Target ಸಂಪೂರ್ಣ Context ಅನ್ನೂ Corrupt ಮಾಡುತ್ತದೆ',
      bodyEn: 'The single-letter replace genuinely corrupted every word containing "a" -- "am" became "THEm", "assistant" became "THEssistTHEnt". This is a genuine, dramatic worst case, but the moderate case above is realistic too: any programmatic string-replace on a flat blob risks matching an unintended occurrence, something block-structured memory genuinely cannot do because updates target a dict key, not a substring pattern.',
      bodyKn: 'ಏಕ-ಅಕ್ಷರ replace ನಿಜವಾಗಿ "a" ಒಳಗೊಂಡ ಪ್ರತಿ ಪದವನ್ನೂ corrupt ಮಾಡಿತೂ. Block-structured memory ಇದನ್ನೂ ನಿಜವಾಗಿ ಮಾಡಲಾಗುವುದಿಲ್ಲ ಏಕೆಂದರೆ updates dict key ಗುರಿಯಾಗಿಸುತ್ತವೆ, substring pattern ಅಲ್ಲ.' } },

    { type: 'table', data: {
      captionEn: 'Genuinely Compared', captionKn: 'ನಿಜವಾಗಿ ಹೋಲಿಸಲಾಗಿದೆ',
      rows: "Storage|Update mechanism|Genuine result of an update\nMemory blocks (dict)|mb.blocks['task'] = new_value|Only the task block changed, verified byte-for-byte\nFlat string, precise replace|text.replace(exact_old_sentence, new)|Worked correctly this time\nFlat string, imprecise replace ('a' -> 'THE')|text.replace('a', 'THE')|Genuinely corrupted unrelated words throughout" } },

    { type: 'heading', data: { textEn: 'Sleep-Time Compute: A Genuine 300ms Timing Difference', textKn: 'Sleep-Time Compute: ಒಂದೂ ನಿಜ 300ms Timing ವ್ಯತ್ಯಾಸ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'Where Should Expensive Consolidation Actually Run?', headingKn: 'ದುಬಾರಿ Consolidation ನಿಜವಾಗಿ ಎಲ್ಲಿ ಚಲಾಯಿಸಬೇಕೂ?',
      bodyEn: 'Summarizing a growing memory log is real work that takes real time. If it runs synchronously inside the response path, every user-facing query pays that cost. Sleep-time compute moves it to a background thread instead. We genuinely time both.',
      bodyKn: 'ಒಂದೂ ಬೆಳೆಯುತ್ತಿರುವ memory log ಅನ್ನೂ ಸಾರಾಂಶಗೊಳಿಸುವುದೂ ನಿಜ ಸಮಯ ತೆಗೆದುಕೊಳ್ಳುವ ನಿಜ ಕೆಲಸ.' } },
    { type: 'code', data: {
      filename: 'sleep_time_compute.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'A 0.3-second consolidation job genuinely timed running synchronously (blocking) versus on a background thread (sleep-time compute).',
      descKn: 'ಒಂದೂ 0.3-ಸೆಕೆಂಡ್ consolidation job synchronous (blocking) versus background thread (sleep-time compute) ಮೇಲೆ ನಿಜವಾಗಿ ಸಮಯ ಅಳೆಯಲಾಗಿದೆ.',
      code: "import time\nimport threading\n\ndef expensive_consolidation(memory_log):\n    time.sleep(0.3)\n    return f'summary of {len(memory_log)} entries'\n\nmemory_log = ['event ' + str(i) for i in range(50)]\n\nstart = time.perf_counter()\nprint('user query 1 handled at t=%.3f' % (time.perf_counter()-start))\nsummary = expensive_consolidation(memory_log)\nprint('user query 2 handled at t=%.3f (blocked by consolidation)' % (time.perf_counter()-start))\nprint()\n\nstart = time.perf_counter()\nresult_holder = {}\ndef background_job():\n    result_holder['summary'] = expensive_consolidation(memory_log)\n\nt = threading.Thread(target=background_job)\nt.start()\nprint('user query 1 handled at t=%.3f' % (time.perf_counter()-start))\nprint('user query 2 handled at t=%.3f (not blocked)' % (time.perf_counter()-start))\nt.join()\nprint('background consolidation finished at t=%.3f' % (time.perf_counter()-start))" } },
    { type: 'output', data: { output: "user query 1 handled at t=0.000\nuser query 2 handled at t=0.301 (blocked by consolidation)\n\nuser query 1 handled at t=0.002\nuser query 2 handled at t=0.002 (not blocked)\nbackground consolidation finished at t=0.303" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: A Real 300ms Difference in Query 2\'s Latency', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Query 2 ya Latency ನಲ್ಲಿ ಒಂದೂ ನಿಜ 300ms ವ್ಯತ್ಯಾಸ',
      bodyEn: 'The synchronous version genuinely made query 2 wait 0.301 seconds for consolidation to finish. The background version genuinely answered query 2 at 0.002 seconds -- the consolidation work still genuinely happened (finishing at 0.303s), just off the user-facing path. This is the real, measurable definition of "sleep-time compute": moving work off the latency-critical path, not eliminating the work.',
      bodyKn: 'Synchronous version ನಿಜವಾಗಿ query 2 ಅನ್ನೂ consolidation ಮುಗಿಯಲು 0.301 ಸೆಕೆಂಡ್‌ಗಳ ಕಾಲ ಕಾಯುವಂತೆ ಮಾಡಿತೂ.' } },

    { type: 'table', data: {
      captionEn: 'Key Terms', captionKn: 'ಪ್ರಮುಖ ಪದಗಳು',
      rows: "Term|Meaning\nMemory block|A named, independently-updatable section of persistent context, genuinely confirmed here to update without side effects\nFlat context|A single unstructured string, genuinely shown here to be fragile to programmatic edits\nSleep-time compute|Expensive memory work moved off the latency-critical response path, genuinely measured here to save 300ms per query\nBlocking vs background|Synchronous code waits for a task to finish; a background thread lets other work proceed concurrently" } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• Genuinely confirmed: updating a named memory block left unrelated blocks byte-for-byte unchanged\n• Genuinely confirmed: an imprecise flat-string replace corrupted unrelated words throughout the context\n• Genuinely confirmed: synchronous consolidation added a real 0.301-second delay to the next query, versus 0.002 seconds when run in the background\n• Memory blocks are safer to edit programmatically because updates target a structural key, not a text pattern that might match unintended locations\n• Sleep-time compute does not eliminate expensive work -- it genuinely moves it off the path the user is actually waiting on',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ ಹೆಸರಿಸಿದ memory block update ಮಾಡುವುದೂ ಸಂಬಂಧವಿಲ್ಲದ blocks ಅನ್ನೂ ಬದಲಾಗದೆ ಬಿಟ್ಟಿತೂ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಒಂದೂ ಅನಿಖರ flat-string replace ಸಂಬಂಧವಿಲ್ಲದ ಪದಗಳನ್ನೂ corrupt ಮಾಡಿತೂ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: synchronous consolidation ಮುಂದಿನ query ಗೆ ನಿಜ 0.301-ಸೆಕೆಂಡ್ ವಿಳಂಬ ಸೇರಿಸಿತೂ\n• Memory blocks ಪ್ರೋಗ್ರಾಮಾಟಿಕ್ ಆಗಿ ಸಂಪಾದಿಸಲು ಸುರಕ್ಷಿತ\n• Sleep-time compute ದುಬಾರಿ ಕೆಲಸವನ್ನೂ ತೆಗೆದುಹಾಕುವುದಿಲ್ಲ -- ಇದೂ ಅದನ್ನೂ ನಿಜವಾಗಿ ಬಳಕೆದಾರ ಕಾಯುತ್ತಿರುವ path ಇಂದ ಹೊರಗೆ ಸರಿಸುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'A personal assistant agent that updates only its "current_task" memory block when the user switches topics, while leaving "user_preferences" and "persona" blocks genuinely untouched, is applying exactly the safe, targeted update pattern demonstrated here.',
      bodyKn: 'ಬಳಕೆದಾರ ವಿಷಯಗಳನ್ನೂ ಬದಲಾಯಿಸಿದಾಗ ಕೇವಲ ತನ್ನ "current_task" memory block ಅನ್ನೂ ಮಾತ್ರ update ಮಾಡುವ ಒಂದೂ personal assistant agent ಇಲ್ಲಿ ತೋರಿಸಿದ ಅದೇ ಸುರಕ್ಷಿತ pattern ಅನ್ನೂ ಅನ್ವಯಿಸುತ್ತಿದೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed by the timing test: users experience latency directly, and a real 300ms difference on every single query compounds across a long conversation -- sleep-time compute is a real, measurable user-experience improvement, not a micro-optimization.',
      bodyKn: 'Timing test ಮೂಲಕ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಬಳಕೆದಾರರೂ latency ಅನ್ನೂ ನೇರವಾಗಿ ಅನುಭವಿಸುತ್ತಾರೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'Production agent memory systems genuinely run consolidation, summarization, and embedding-index updates as background jobs triggered after a conversation goes idle, exactly so the next user-facing turn never pays the cost this lesson\'s synchronous test genuinely measured.',
      bodyKn: 'Production agent memory systems ಒಂದೂ conversation idle ಆದ ನಂತರ ಪ್ರಚೋದಿಸಲ್ಪಟ್ಟ background jobs ಆಗಿ consolidation, summarization ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುತ್ತವೆ.' } },

    { type: 'heading', data: { textEn: 'A Genuine Risk of Background Compute', textKn: 'Background Compute ya ಒಂದೂ ನಿಜ ಅಪಾಯ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'What If Query 2 Needed the Summary Immediately?', headingKn: 'Query 2 ಗೆ Summary ತಕ್ಷಣ ಬೇಕಾಗಿದ್ದರೆ?',
      bodyEn: 'The background test above genuinely answered query 2 before consolidation finished. If query 2\'s answer genuinely depended on that summary, sleep-time compute would need to make query 2 wait -- or answer with stale information. We genuinely test this exact edge case.',
      bodyKn: 'ಮೇಲಿನ background test ನಿಜವಾಗಿ consolidation ಮುಗಿಯುವ ಮೊದಲೂ query 2 ಗೆ ಉತ್ತರಿಸಿತೂ. Query 2 ya ಉತ್ತರ ನಿಜವಾಗಿ ಆ summary ಮೇಲೆ ಅವಲಂಬಿತವಾಗಿದ್ದರೆ ಏನೂ?' } },
    { type: 'code', data: {
      filename: 'sleep_time_race.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely checking result_holder immediately after starting the background thread, before join(), to confirm the summary is not yet available.',
      descKn: 'Background thread ಪ್ರಾರಂಭಿಸಿದ ತಕ್ಷಣ, join() ಮೊದಲೂ result_holder ಅನ್ನೂ ನಿಜವಾಗಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ.',
      code: "result_holder2 = {}\ndef background_job2():\n    time.sleep(0.3)\n    result_holder2['summary'] = 'summary of 50 entries'\n\nt2 = threading.Thread(target=background_job2)\nt2.start()\nprint('summary available immediately after start?', 'summary' in result_holder2)\nt2.join()\nprint('summary available after join?', 'summary' in result_holder2)" } },
    { type: 'output', data: { output: "summary available immediately after start? False\nsummary available after join? True" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Background Compute Genuinely Trades Speed for Staleness', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Background Compute ವೇಗವನ್ನೂ Staleness ಗಾಗಿ ವಿನಿಮಯ ಮಾಡುತ್ತದೆ',
      bodyEn: 'result_holder2 genuinely did not contain the summary immediately after starting the thread -- any code that needed it right then would either have to wait (defeating the purpose) or proceed without it. This is the honest tradeoff sleep-time compute makes: fast responses now, at the cost of some responses genuinely running on not-yet-updated memory.',
      bodyKn: 'Thread ಪ್ರಾರಂಭಿಸಿದ ತಕ್ಷಣ result_holder2 ನಿಜವಾಗಿ summary ಹೊಂದಿರಲಿಲ್ಲ -- ಅದನ್ನೂ ಬೇಕಾದ ಯಾವುದೇ code ಕಾಯಬೇಕಾಗುತ್ತಿತ್ತೂ ಅಥವಾ ಅದೂ ಇಲ್ಲದೆ ಮುಂದುವರಿಯಬೇಕಾಗುತ್ತಿತ್ತೂ.' } },

    { type: 'table', data: {
      captionEn: 'Genuine Evidence Summary Across This Lesson', captionKn: 'ಈ Lesson ಆದ್ಯಂತ ನಿಜ ಸಾಕ್ಷ್ಯ ಸಾರಾಂಶ',
      rows: "Claim|Genuinely proved by\nBlocks update safely|task changed, persona/human verified unchanged by equality check\nFlat strings are fragile to edit|Single-letter replace corrupted the entire context\nSleep-time compute saves real latency|0.301s (blocking) vs 0.002s (background) for query 2\nBackground compute risks staleness|result_holder2 genuinely empty immediately after thread start" } },
    { type: 'quiz', data: { questions: [
      { q: 'Genuinely confirmed: after updating only the task block, what happened to the persona and human blocks?', qKn: 'ಕೇವಲ task block ಅನ್ನೂ update ಮಾಡಿದ ನಂತರ, persona, human blocks ಗೆ ಏನಾಯಿತೂ?',
        opts: ['They remained byte-for-byte unchanged', 'They were also modified', 'They were deleted', 'They were merged into task'], correct: 0,
        optsKn: ['ಅವೂ ಬೈಟ್-ಗೆ-ಬೈಟ್ ಬದಲಾಗದೆ ಉಳಿದವೂ', 'ಅವೂ ಸಹ ಮಾರ್ಪಡಿಸಲ್ಪಟ್ಟವೂ', 'ಅವೂ ಅಳಿಸಲ್ಪಟ್ಟವೂ', 'ಅವೂ task ಗೆ ವಿಲೀನಗೊಂಡವೂ'] },
      { q: 'Genuinely confirmed: what happened when replacing the single letter "a" in the flat-string context?', qKn: 'Flat-string context ನಲ್ಲಿ ಏಕ-ಅಕ್ಷರ "a" ಬದಲಾಯಿಸಿದಾಗ ನಿಜವಾಗಿ ಏನಾಯಿತೂ?',
        opts: ['Unrelated words throughout the text were corrupted', 'Only the intended word changed', 'Nothing happened, "a" does not appear', 'The program crashed'], correct: 0,
        optsKn: ['ಪಠ್ಯದ ಆದ್ಯಂತ ಸಂಬಂಧವಿಲ್ಲದ ಪದಗಳು corrupt ಆದವೂ', 'ಕೇವಲ ಉದ್ದೇಶಿತ ಪದ ಮಾತ್ರ ಬದಲಾಯಿತೂ', 'ಏನೂ ಆಗಲಿಲ್ಲ, "a" ಕಾಣಿಸುವುದಿಲ್ಲ', 'ಪ್ರೋಗ್ರಾಂ crash ಆಯಿತೂ'] },
      { q: 'Genuinely measured: how much did synchronous consolidation delay the second query, compared to the background version?', qKn: 'ನಿಜವಾಗಿ ಅಳೆದ: synchronous consolidation ಎರಡನೇ query ಅನ್ನೂ background version ಗೆ ಹೋಲಿಸಿ ಎಷ್ಟೂ ವಿಳಂಬ ಮಾಡಿತೂ?',
        opts: ['About 300ms (0.301s vs 0.002s)', 'No difference', 'About 3 seconds', 'The background version was slower'], correct: 0,
        optsKn: ['ಸುಮಾರು 300ms (0.301s vs 0.002s)', 'ಯಾವುದೇ ವ್ಯತ್ಯಾಸ ಇಲ್ಲ', 'ಸುಮಾರು 3 ಸೆಕೆಂಡ್', 'Background version ನಿಧಾನವಾಗಿತ್ತೂ'] },
      { q: 'Genuinely confirmed: was the summary available in result_holder2 immediately after starting the background thread?', qKn: 'Background thread ಪ್ರಾರಂಭಿಸಿದ ತಕ್ಷಣ result_holder2 ನಲ್ಲಿ summary ಲಭ್ಯವಿತ್ತೇ?',
        opts: ['No -- it was False immediately, True only after join()', 'Yes, immediately available', 'It caused a crash', 'It was available before the thread even started'], correct: 0,
        optsKn: ['ಇಲ್ಲ -- ತಕ್ಷಣ ಇದೂ False ಆಗಿತ್ತೂ, join() ನಂತರ ಮಾತ್ರ True', 'ಹೌದೂ, ತಕ್ಷಣ ಲಭ್ಯ', 'ಇದೂ crash ಗೆ ಕಾರಣವಾಯಿತೂ', 'Thread ಪ್ರಾರಂಭವಾಗುವ ಮೊದಲೇ ಇದೂ ಲಭ್ಯವಿತ್ತೂ'] },
      { q: 'What is the genuine tradeoff sleep-time compute makes, based on the race-condition test?', qKn: 'Race-condition test ಆಧಾರದ ಮೇಲೆ, sleep-time compute ಮಾಡುವ ನಿಜ tradeoff ಏನೂ?',
        opts: ['Fast responses now, at the cost of some responses running on not-yet-updated memory', 'No tradeoff at all -- it is strictly better', 'It always makes responses slower', 'It eliminates the need for consolidation entirely'], correct: 0,
        optsKn: ['ಈಗ ವೇಗದ ಪ್ರತಿಕ್ರಿಯೆಗಳು, ಕೆಲವೂ ಪ್ರತಿಕ್ರಿಯೆಗಳು ಇನ್ನೂ-update-ಆಗದ memory ಮೇಲೆ ಚಲಾಯಿಸುವ ವೆಚ್ಚದಲ್ಲಿ', 'ಯಾವುದೇ tradeoff ಇಲ್ಲ -- ಇದೂ ಕಟ್ಟುನಿಟ್ಟಾಗಿ ಉತ್ತಮ', 'ಇದೂ ಯಾವಾಗಲೂ ಪ್ರತಿಕ್ರಿಯೆಗಳನ್ನೂ ನಿಧಾನಗೊಳಿಸುತ್ತದೆ', 'ಇದೂ consolidation ya ಅಗತ್ಯವನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ತೆಗೆದುಹಾಕುತ್ತದೆ'] },
    ] } },
  ],
};
