module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6066020ed05b321520",
 "order": 0,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Agent Memory: Virtual Context and Memory Paging (Part 1 of 3) — Context Is Not Memory, the Main Context and Compaction",
 "titleKn": "Agent Memory: Virtual Context ಮತ್ತು Memory Paging (ಭಾಗ 1 / 3) — Context ಮೆಮೊರಿ ಅಲ್ಲ, Main Context ಮತ್ತು Compaction",
 "desc": "Understand overflow, dilution and persistence, the virtual-memory analogy and core versus archival memory; build a budgeted MainContext with compaction, and find that eviction without an archive is deletion, pinned memory can exceed the budget, and the word-based token estimate cannot see Kannada.",
 "descKn": "ಉಕ್ಕಿ ಹರಿಯುವಿಕೆ, ದುರ್ಬಲಗೊಳ್ಳುವಿಕೆ ಮತ್ತು ನಿರಂತರತೆ, virtual-memory ಹೋಲಿಕೆ ಹಾಗೂ core ಮತ್ತು archival ಮೆಮೊರಿ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ; compaction ಇರುವ budget ಹೊಂದಿದ MainContext ನಿರ್ಮಿಸಿ, ಮತ್ತು archive ಇಲ್ಲದ eviction ಅಳಿಸುವಿಕೆ, ಪಿನ್ ಮಾಡಿದ ಮೆಮೊರಿ budget ಮೀರಬಹುದು, ಮತ್ತು ಪದ-ಆಧಾರಿತ token ಅಂದಾಜಿಗೆ ಕನ್ನಡ ಕಾಣುವುದಿಲ್ಲ ಎಂದು ಕಂಡುಹಿಡಿಯಿರಿ.",
 "objectives": [
  "Distinguish a context window from memory and explain overflow, dilution and persistence.",
  "Explain the OS virtual-memory analogy and what virtual context really means.",
  "Implement a MainContext with pinned core memory, rolling messages and automatic compaction.",
  "Show that eviction without archiving is permanent loss and that pinned memory has a cost.",
  "Explain why a word-based token estimate fails for non-English text."
 ],
 "objectivesKn": [
  "Context window ಮತ್ತು ಮೆಮೊರಿ ಬೇರ್ಪಡಿಸಿ ಹಾಗೂ ಉಕ್ಕಿ ಹರಿಯುವಿಕೆ, ದುರ್ಬಲಗೊಳ್ಳುವಿಕೆ ಮತ್ತು ನಿರಂತರತೆ ವಿವರಿಸಿ.",
  "OS virtual-memory ಹೋಲಿಕೆ ಮತ್ತು virtual context ನಿಜವಾಗಿ ಏನರ್ಥ ಎಂದು ವಿವರಿಸಿ.",
  "ಪಿನ್ ಮಾಡಿದ core ಮೆಮೊರಿ, ಉರುಳುವ ಸಂದೇಶಗಳು ಮತ್ತು ಸ್ವಯಂಚಾಲಿತ compaction ಇರುವ MainContext ಅಳವಡಿಸಿ.",
  "Archiving ಇಲ್ಲದ eviction ಶಾಶ್ವತ ನಷ್ಟ ಮತ್ತು ಪಿನ್ ಮಾಡಿದ ಮೆಮೊರಿಗೆ ವೆಚ್ಚವಿದೆ ಎಂದು ತೋರಿಸಿ.",
  "ಇಂಗ್ಲಿಷ್ ಅಲ್ಲದ ಪಠ್ಯಕ್ಕೆ ಪದ-ಆಧಾರಿತ token ಅಂದಾಜು ವಿಫಲವಾಗುವುದು ಏಕೆ ಎಂದು ವಿವರಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Agent Memory: Virtual Context and Memory Paging (Part 1 of 3)",
    "textKn": "Agent Memory: Virtual Context ಮತ್ತು Memory Paging (ಭಾಗ 1 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 1 of 3: why a context window is not memory, the virtual-memory analogy and the main context (\"RAM\") with a token budget and compaction. Every output was genuinely produced by memgpt_1.py on Python 3.14.5. The token estimate is the lesson's teaching approximation (words times 1.3), not a real tokenizer. The source text for this part was cut off near its end, and the code is rebuilt from its description. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ ಮೊದಲನೆಯದು: context window ಮೆಮೊರಿ ಏಕೆ ಅಲ್ಲ, virtual-memory ಹೋಲಿಕೆ ಮತ್ತು token budget ಹಾಗೂ compaction ಇರುವ main context (\"RAM\"). ಎಲ್ಲಾ output memgpt_1.py ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. Token ಅಂದಾಜು ಪಾಠದ ಬೋಧನಾ ಅಂದಾಜು (ಪದಗಳು ಗುಣಿಸು 1.3), ನಿಜವಾದ tokenizer ಅಲ್ಲ. ಈ ಭಾಗದ ಮೂಲ ಪಠ್ಯ ಅಂತ್ಯದ ಹತ್ತಿರ ಕತ್ತರಿಸಲ್ಪಟ್ಟಿತ್ತು, ಮತ್ತು ಕೋಡ್ ಅನ್ನು ಅದರ ವಿವರಣೆಯಿಂದ ಮರುನಿರ್ಮಿಸಲಾಗಿದೆ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Context Is Not Memory",
    "textKn": "Context ಮೆಮೊರಿ ಅಲ್ಲ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Overflow, Dilution and Persistence",
    "headingKn": "ಉಕ್ಕಿ ಹರಿಯುವಿಕೆ, ದುರ್ಬಲಗೊಳ್ಳುವಿಕೆ ಮತ್ತು ನಿರಂತರತೆ",
    "bodyEn": "A context window answers \"what can the model see right now\", and memory answers \"what can the system preserve and recover\". They differ. Overflow: history eventually exceeds a finite window (1,200 tokens a turn for 14 turns is 16,800, already 51 percent of a 32,768-token budget, and 28 turns pass the limit). Dilution: one relevant fact buried in unrelated material is harder to use, so more context is not automatically better context. Persistence: a new session starts without the old conversation, so context alone cannot carry state across sessions. A bigger window postpones the first problem and does not solve the other two.",
    "bodyKn": "Context window \"ಮಾದರಿಗೆ ಈಗ ಏನು ಕಾಣುತ್ತದೆ\" ಎಂಬುದಕ್ಕೆ ಉತ್ತರಿಸುತ್ತದೆ, ಮತ್ತು ಮೆಮೊರಿ \"ವ್ಯವಸ್ಥೆ ಏನನ್ನು ಉಳಿಸಿ ಮರುಪಡೆಯಬಲ್ಲದು\" ಎಂಬುದಕ್ಕೆ. ಅವು ಬೇರೆ. ಉಕ್ಕಿ ಹರಿಯುವಿಕೆ: ಇತಿಹಾಸ ಕೊನೆಗೆ ಸೀಮಿತ window ಮೀರುತ್ತದೆ (ಒಂದು ಸುತ್ತಿಗೆ 1,200 tokens, 14 ಸುತ್ತು 16,800, ಈಗಾಗಲೇ 32,768-token budget ನ 51 ಶೇಕಡಾ, ಮತ್ತು 28 ಸುತ್ತು ಮಿತಿ ದಾಟುತ್ತದೆ). ದುರ್ಬಲಗೊಳ್ಳುವಿಕೆ: ಸಂಬಂಧವಿಲ್ಲದ ವಿಷಯದಲ್ಲಿ ಹೂತ ಒಂದು ಸಂಬಂಧಿತ ಸಂಗತಿ ಬಳಸಲು ಕಷ್ಟ, ಆದ್ದರಿಂದ ಹೆಚ್ಚು context ತಾನಾಗಿ ಉತ್ತಮ context ಅಲ್ಲ. ನಿರಂತರತೆ: ಹೊಸ ಅವಧಿ ಹಳೆಯ ಸಂಭಾಷಣೆ ಇಲ್ಲದೆ ಆರಂಭವಾಗುತ್ತದೆ, ಆದ್ದರಿಂದ context ಮಾತ್ರ ಅವಧಿಗಳ ನಡುವೆ ಸ್ಥಿತಿ ಒಯ್ಯಲಾರದು. ದೊಡ್ಡ window ಮೊದಲ ಸಮಸ್ಯೆಯನ್ನು ಮುಂದೂಡುತ್ತದೆ, ಉಳಿದ ಎರಡನ್ನು ಪರಿಹರಿಸುವುದಿಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "The Virtual-Memory Analogy",
    "headingKn": "Virtual-Memory ಹೋಲಿಕೆ",
    "bodyEn": "MemGPT borrows the operating system idea: a process does not keep every byte in RAM, it has a backing store and pages data in when needed. The mapping is main context is RAM, external context is disk, a memory record is a page, a memory write is a page-out, retrieval is a page-in, a missing fact is a page fault, a memory tool is a system call and the agent runtime is the kernel. Virtual context therefore means a finite main context plus large external storage plus a paging mechanism. It does not mean an infinite prompt: the window stays finite and only retrieved results enter it.",
    "bodyKn": "MemGPT ಕಾರ್ಯಾಚರಣಾ ವ್ಯವಸ್ಥೆಯ ಆಲೋಚನೆಯನ್ನು ಎರವಲು ಪಡೆಯುತ್ತದೆ: ಪ್ರಕ್ರಿಯೆ ಪ್ರತಿ ಬೈಟ್ ಅನ್ನು RAM ನಲ್ಲಿ ಇಡುವುದಿಲ್ಲ, ಅದಕ್ಕೆ backing store ಇದೆ ಮತ್ತು ಬೇಕಾದಾಗ ಡೇಟಾ page in ಮಾಡುತ್ತದೆ. ನಕ್ಷೆ: main context RAM, external context disk, ಮೆಮೊರಿ ದಾಖಲೆ page, ಮೆಮೊರಿ ಬರವಣಿಗೆ page-out, ಪಡೆಯುವಿಕೆ page-in, ಕಾಣೆಯಾದ ಸಂಗತಿ page fault, ಮೆಮೊರಿ tool system call ಮತ್ತು agent runtime kernel. ಆದ್ದರಿಂದ virtual context ಎಂದರೆ ಸೀಮಿತ main context ಜೊತೆ ದೊಡ್ಡ ಬಾಹ್ಯ ಸಂಗ್ರಹ ಜೊತೆ paging ವ್ಯವಸ್ಥೆ. ಅದು ಅನಂತ prompt ಎಂದರ್ಥವಲ್ಲ: window ಸೀಮಿತವಾಗಿಯೇ ಇರುತ್ತದೆ ಮತ್ತು ಪಡೆದ ಫಲಿತಾಂಶಗಳು ಮಾತ್ರ ಅದಕ್ಕೆ ಪ್ರವೇಶಿಸುತ್ತವೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Virtual Context",
    "headingKn": "Virtual Context",
    "svgCode": "<svg viewBox=\"0 0 300 215\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\">\n  <rect width=\"300\" height=\"215\" rx=\"8\" fill=\"#0f172a\"/>\n  <text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">Virtual context = finite window + external store + paging</text>\n  <rect x=\"30\" y=\"24\" width=\"240\" height=\"64\" rx=\"6\" fill=\"#1e293b\" stroke=\"#60a5fa\"/><text x=\"150\" y=\"38\" fill=\"#93c5fd\" text-anchor=\"middle\">MAIN CONTEXT (\"RAM\"): fixed size</text>\n  <rect x=\"42\" y=\"46\" width=\"216\" height=\"14\" rx=\"3\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"150\" y=\"56\" fill=\"#6ee7b7\" text-anchor=\"middle\" font-size=\"6\">CORE: pinned sections (project, preferences)</text>\n  <rect x=\"42\" y=\"64\" width=\"216\" height=\"14\" rx=\"3\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"74\" fill=\"#fde68a\" text-anchor=\"middle\" font-size=\"6\">MESSAGES: rolling, oldest evicted first</text>\n  <path d=\"M110,88 V112 M190,112 V88\" stroke=\"#475569\"/>\n  <text x=\"104\" y=\"104\" fill=\"#fde68a\" font-size=\"6\" text-anchor=\"end\">page out</text>\n  <text x=\"196\" y=\"104\" fill=\"#c4b5fd\" font-size=\"6\">page in</text>\n  <rect x=\"30\" y=\"112\" width=\"240\" height=\"54\" rx=\"6\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"150\" y=\"126\" fill=\"#c4b5fd\" text-anchor=\"middle\">EXTERNAL / ARCHIVAL (\"disk\"): large, searchable</text>\n  <text x=\"150\" y=\"142\" fill=\"#c4b5fd\" text-anchor=\"middle\" font-size=\"6\">MemoryRecord: text, tags, session, turn</text>\n  <text x=\"150\" y=\"154\" fill=\"#c4b5fd\" text-anchor=\"middle\" font-size=\"6\">not visible to the model until retrieved</text>\n  <text x=\"150\" y=\"186\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">the model's window is still finite: only retrieved results enter it</text>\n  <text x=\"150\" y=\"198\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">evicted from context is not the same as forgotten, if it was archived</text>\n</svg>",
    "captionEn": "A small fixed main context holds pinned core memory and rolling messages. A large archive holds everything else. Memory tools move information between them.",
    "captionKn": "ಚಿಕ್ಕ ನಿಗದಿತ main context ಪಿನ್ ಮಾಡಿದ core ಮೆಮೊರಿ ಮತ್ತು ಉರುಳುವ ಸಂದೇಶಗಳನ್ನು ಹೊಂದಿದೆ. ದೊಡ್ಡ archive ಉಳಿದೆಲ್ಲವನ್ನೂ ಹೊಂದಿದೆ. ಮೆಮೊರಿ tools ಅವುಗಳ ನಡುವೆ ಮಾಹಿತಿ ಸರಿಸುತ್ತವೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Operating system versus agent memory",
    "headingKn": "ಕಾರ್ಯಾಚರಣಾ ವ್ಯವಸ್ಥೆ ಮತ್ತು agent ಮೆಮೊರಿ",
    "headers": [
     "Operating system",
     "Agent memory"
    ],
    "rows": [
     [
      "RAM",
      "Main context"
     ],
     [
      "Disk or backing store",
      "External (archival) context"
     ],
     [
      "Page",
      "Memory record"
     ],
     [
      "Page-out",
      "Write or archive information"
     ],
     [
      "Page-in",
      "Retrieve a memory into the prompt"
     ],
     [
      "Page fault",
      "The needed fact is not in the prompt"
     ],
     [
      "System call",
      "A memory tool invocation"
     ],
     [
      "Kernel",
      "The agent runtime"
     ]
    ]
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Core Memory and Working Memory",
    "headingKn": "Core ಮೆಮೊರಿ ಮತ್ತು Working ಮೆಮೊರಿ",
    "bodyEn": "Inside main context, core memory holds named sections pinned in the prompt (project, preferences, constraints) because they are needed on almost every turn; searching for them each time would waste calls. Messages are rolling and the oldest go first. Pinning is not free: core competes for the same budget as conversation, so what is promoted must be chosen. Working memory is simply the assembled prompt for the current task. A decision rule: needed now goes in working context, needed on most turns goes in core, could matter later goes in the archive, and otherwise do not persist.",
    "bodyKn": "Main context ಒಳಗೆ core ಮೆಮೊರಿ prompt ನಲ್ಲಿ ಪಿನ್ ಮಾಡಿದ ಹೆಸರಿಸಿದ ವಿಭಾಗಗಳನ್ನು (project, preferences, constraints) ಹೊಂದಿದೆ, ಏಕೆಂದರೆ ಅವು ಬಹುತೇಕ ಪ್ರತಿ ಸುತ್ತಿಗೆ ಬೇಕು; ಪ್ರತಿ ಬಾರಿ ಹುಡುಕುವುದು ಕರೆಗಳನ್ನು ವ್ಯರ್ಥಗೊಳಿಸುತ್ತದೆ. ಸಂದೇಶಗಳು ಉರುಳುತ್ತವೆ ಮತ್ತು ಹಳೆಯವು ಮೊದಲು ಹೋಗುತ್ತವೆ. ಪಿನ್ ಮಾಡುವುದು ಉಚಿತವಲ್ಲ: core ಸಂಭಾಷಣೆಯಷ್ಟೇ budget ಗೆ ಸ್ಪರ್ಧಿಸುತ್ತದೆ, ಆದ್ದರಿಂದ ಏನನ್ನು ಬಡ್ತಿ ನೀಡಬೇಕು ಎಂದು ಆರಿಸಬೇಕು. Working ಮೆಮೊರಿ ಎಂದರೆ ಪ್ರಸ್ತುತ ಕಾರ್ಯಕ್ಕೆ ಜೋಡಿಸಿದ prompt. ನಿರ್ಧಾರ ನಿಯಮ: ಈಗ ಬೇಕಾದದ್ದು working context ಗೆ, ಬಹುತೇಕ ಸುತ್ತುಗಳಿಗೆ ಬೇಕಾದದ್ದು core ಗೆ, ನಂತರ ಮುಖ್ಯವಾಗಬಹುದಾದದ್ದು archive ಗೆ, ಇಲ್ಲದಿದ್ದರೆ ಉಳಿಸಬೇಡಿ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Building the Main Context",
    "textKn": "Main Context ನಿರ್ಮಿಸುವುದು",
    "level": "H2"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "memgpt_1.py",
    "headingEn": "tokenize, estimate_tokens and MainContext",
    "headingKn": "tokenize, estimate_tokens ಮತ್ತು MainContext",
    "descEn": "estimate_tokens is the lesson's teaching approximation: the number of lowercase letter-and-digit words times 1.3, at least 1. MainContext holds max_tokens, pinned core sections and rolling messages. render() serialises them to prompt text, token_count() measures it, and add_message() appends and then calls compact(), so the component that owns the budget enforces it. compact() evicts the oldest message while the context is over budget and more than one message remains. We added an evicted list so the lesson can inspect what was lost.",
    "descKn": "estimate_tokens ಪಾಠದ ಬೋಧನಾ ಅಂದಾಜು: ಸಣ್ಣ-ಅಕ್ಷರ ಮತ್ತು ಅಂಕೆ ಪದಗಳ ಸಂಖ್ಯೆ ಗುಣಿಸು 1.3, ಕನಿಷ್ಠ 1. MainContext max_tokens, ಪಿನ್ ಮಾಡಿದ core ವಿಭಾಗಗಳು ಮತ್ತು ಉರುಳುವ ಸಂದೇಶಗಳನ್ನು ಹೊಂದಿದೆ. render() ಅವನ್ನು prompt ಪಠ್ಯವಾಗಿ ಧಾರಾವಾಹಿ ಮಾಡುತ್ತದೆ, token_count() ಅದನ್ನು ಅಳೆಯುತ್ತದೆ, ಮತ್ತು add_message() ಸೇರಿಸಿ ನಂತರ compact() ಕರೆಯುತ್ತದೆ, ಹಾಗಾಗಿ budget ಹೊಂದಿದ ಘಟಕವೇ ಅದನ್ನು ಜಾರಿಗೊಳಿಸುತ್ತದೆ. compact() context budget ಮೀರಿದ್ದು ಮತ್ತು ಒಂದಕ್ಕಿಂತ ಹೆಚ್ಚು ಸಂದೇಶ ಉಳಿದಿರುವವರೆಗೆ ಹಳೆಯ ಸಂದೇಶ ತೆಗೆಯುತ್ತದೆ. ಏನು ಕಳೆದುಹೋಯಿತು ಎಂದು ಪಾಠ ಪರಿಶೀಲಿಸಲು ನಾವು evicted ಪಟ್ಟಿ ಸೇರಿಸಿದ್ದೇವೆ.",
    "code": "import re\nfrom dataclasses import dataclass, field\nfrom typing import Dict, List\n\n\ndef tokenize(text: str) -> List[str]:\n    return re.findall(r\"[a-z0-9]+\", text.lower())\n\n\ndef estimate_tokens(text: str) -> int:\n    words = tokenize(text)\n    return max(1, int(len(words) * 1.3))\n\n\n@dataclass\nclass MainContext:\n    max_tokens: int = 120\n    core: Dict[str, str] = field(default_factory=dict)\n    messages: List[Dict[str, str]] = field(default_factory=list)\n    evicted: List[Dict[str, str]] = field(default_factory=list)   # kept only so the lesson can inspect what was lost\n\n    def core_text(self) -> str:\n        return \"\\n\".join(f\"[CORE:{section}] {text}\" for section, text in self.core.items())\n\n    def messages_text(self) -> str:\n        return \"\\n\".join(f\"{m['role'].upper()}: {m['content']}\" for m in self.messages)\n\n    def render(self) -> str:\n        parts = []\n        core, msgs = self.core_text(), self.messages_text()\n        if core:\n            parts.append(core)\n        if msgs:\n            parts.append(msgs)\n        return \"\\n\\n\".join(parts)\n\n    def token_count(self) -> int:\n        return estimate_tokens(self.render())\n\n    def add_message(self, role: str, content: str) -> None:\n        self.messages.append({\"role\": role, \"content\": content})\n        self.compact()\n\n    def compact(self) -> None:\n        while self.token_count() > self.max_tokens and len(self.messages) > 1:\n            removed = self.messages.pop(0)\n            self.evicted.append(removed)\n            print(\"[COMPACT]\", \"evicted\", removed[\"role\"], \"message:\", removed[\"content\"][:60])"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "memgpt_1.py",
    "headingEn": "main(): seven experiments",
    "headingKn": "main(): ಏಳು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() runs the tokenizer on four strings, does the overflow arithmetic, renders a context, forces compaction with a tiny budget, shows what eviction loses without an archive, tests an oversized core, and checks the estimator on Kannada.",
    "descKn": "main() ನಾಲ್ಕು ಸ್ಟ್ರಿಂಗ್‌ಗಳ ಮೇಲೆ tokenizer ಚಲಾಯಿಸುತ್ತದೆ, ಉಕ್ಕಿ ಹರಿಯುವಿಕೆ ಅಂಕಗಣಿತ ಮಾಡುತ್ತದೆ, context ಅನ್ನು render ಮಾಡುತ್ತದೆ, ಚಿಕ್ಕ budget ಜೊತೆ compaction ಒತ್ತಾಯಿಸುತ್ತದೆ, archive ಇಲ್ಲದೆ eviction ಏನು ಕಳೆಯುತ್ತದೆ ಎಂದು ತೋರಿಸುತ್ತದೆ, ದೊಡ್ಡ core ಪರೀಕ್ಷಿಸುತ್ತದೆ, ಮತ್ತು ಕನ್ನಡದ ಮೇಲೆ ಅಂದಾಜನ್ನು ಪರಿಶೀಲಿಸುತ್ತದೆ.",
    "code": "def main():\n    section(\"1. The tokenizer and the estimate\")\n    for text in (\"Alice owns the evaluation pipeline.\", \"Hello\", \"\", \"The deadline is October 20.\"):\n        print(f\"{text!r:<42} tokens(words)={tokenize(text)} estimate={estimate_tokens(text)}\")\n\n    section(\"2. Why a bigger window only postpones overflow (arithmetic)\")\n    used, limit = 1200 * 14, 32768\n    print(f\"1200 tokens/turn x 14 turns = {used:,} tokens = {used / limit:.0%} of a {limit:,}-token budget\")\n    for turns in (14, 27, 28, 100):\n        print(f\"{turns:>4} turns -> {1200 * turns:>8,} tokens; over budget: {1200 * turns > limit}\")\n\n    section(\"3. Rendering: structured memory becomes prompt text\")\n    main_ctx = MainContext(max_tokens=200)\n    main_ctx.core[\"project\"] = \"The active project is Orion.\"\n    main_ctx.core[\"preferences\"] = \"The user prefers concise technical explanations.\"\n    main_ctx.add_message(\"user\", \"What are we building?\")\n    print(main_ctx.render())\n    print(\"approximate tokens:\", main_ctx.token_count())\n\n    section(\"4. Compaction under a tiny budget (max_tokens=50)\")\n    m = MainContext(max_tokens=50)\n    m.core[\"project\"] = \"The active project is Orion.\"\n    for role, text in ((\"user\", \"We need to prepare the prototype.\"),\n                       (\"assistant\", \"I will help organize the prototype work.\"),\n                       (\"user\", \"First we need traction testing.\"),\n                       (\"assistant\", \"Traction testing is now the active task.\"),\n                       (\"user\", \"Alice owns the evaluation pipeline.\")):\n        m.add_message(role, text)\n        print(f\"   after add: tokens={m.token_count()} messages={len(m.messages)}\")\n    print(\"\\nrendered context now:\")\n    print(m.render())\n    print(\"core survived:\", \"[CORE:project]\" in m.render())\n\n    section(\"5. Eviction is not forgetting only if something archived it\")\n    lost = [e[\"content\"] for e in m.evicted]\n    print(\"evicted from the working context:\", lost)\n    print(\"is that exact message still in main.messages?\", any(x[\"content\"] == \"We need to prepare the prototype.\" for x in m.messages))\n    print(\"nothing else stored it, so it is gone\")\n\n    section(\"6. Edge case: pinned core memory larger than the budget\")\n    big = MainContext(max_tokens=20)\n    big.core[\"rules\"] = \" \".join([\"Never modify the production database.\"] * 6)\n    big.add_message(\"user\", \"hello there\")\n    big.add_message(\"user\", \"second message\")\n    print(\"core tokens:\", estimate_tokens(big.core_text()), \"| budget:\", big.max_tokens, \"| total now:\", big.token_count())\n    print(\"messages left:\", len(big.messages), \"(compaction stops at one message, still over budget)\")\n\n    section(\"7. Genuinely checking the estimator on Kannada text\")\n    en = \"Alice owns the evaluation pipeline.\"\n    kn = \"ಆಲಿಸ್ ಮೌಲ್ಯಮಾಪನ ಪೈಪ್‌ಲೈನ್ ಅನ್ನು ಹೊಂದಿದ್ದಾರೆ ಮತ್ತು ಅದರ ವಿಳಂಬವನ್ನು ನಿರ್ವಹಿಸುತ್ತಾರೆ.\"\n    print(\"English :\", estimate_tokens(en), \"tokens\", tokenize(en))\n    print(\"Kannada :\", estimate_tokens(kn), \"token \", tokenize(kn))\n    import contextlib, io\n\n    def first_eviction(text, budget=100):\n        ctx = MainContext(max_tokens=budget)\n        with contextlib.redirect_stdout(io.StringIO()):\n            for n in range(1, 400):\n                ctx.add_message(\"user\", text)\n                if ctx.evicted:\n                    return n, ctx.token_count()\n        return None, ctx.token_count()\n\n    for label, text in ((\"English\", en), (\"Kannada\", kn), (\"empty text\", \"\")):\n        n, tok = first_eviction(text)\n        print(f\"{label:<10} first eviction after {n} messages (budget 100)\")\n    print(\"the Kannada run behaves exactly like empty messages: only the 'USER' label is counted, so the message content is invisible to the budget\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. The tokenizer and the estimate ---\n'Alice owns the evaluation pipeline.'      tokens(words)=['alice', 'owns', 'the', 'evaluation', 'pipeline'] estimate=6\n'Hello'                                    tokens(words)=['hello'] estimate=1\n''                                         tokens(words)=[] estimate=1\n'The deadline is October 20.'              tokens(words)=['the', 'deadline', 'is', 'october', '20'] estimate=6\n\n--- 2. Why a bigger window only postpones overflow (arithmetic) ---\n1200 tokens/turn x 14 turns = 16,800 tokens = 51% of a 32,768-token budget\n  14 turns ->   16,800 tokens; over budget: False\n  27 turns ->   32,400 tokens; over budget: False\n  28 turns ->   33,600 tokens; over budget: True\n 100 turns ->  120,000 tokens; over budget: True\n\n--- 3. Rendering: structured memory becomes prompt text ---\n[CORE:project] The active project is Orion.\n[CORE:preferences] The user prefers concise technical explanations.\n\nUSER: What are we building?\napproximate tokens: 26\n\n--- 4. Compaction under a tiny budget (max_tokens=50) ---\n   after add: tokens=18 messages=1\n   after add: tokens=28 messages=2\n   after add: tokens=36 messages=3\n   after add: tokens=46 messages=4\n[COMPACT] evicted user message: We need to prepare the prototype.\n   after add: tokens=45 messages=4\n\nrendered context now:\n[CORE:project] The active project is Orion.\n\nASSISTANT: I will help organize the prototype work.\nUSER: First we need traction testing.\nASSISTANT: Traction testing is now the active task.\nUSER: Alice owns the evaluation pipeline.\ncore survived: True\n\n--- 5. Eviction is not forgetting only if something archived it ---\nevicted from the working context: ['We need to prepare the prototype.']\nis that exact message still in main.messages? False\nnothing else stored it, so it is gone\n\n--- 6. Edge case: pinned core memory larger than the budget ---\n[COMPACT] evicted user message: hello there\ncore tokens: 41 | budget: 20 | total now: 45\nmessages left: 1 (compaction stops at one message, still over budget)\n\n--- 7. Genuinely checking the estimator on Kannada text ---\nEnglish : 6 tokens ['alice', 'owns', 'the', 'evaluation', 'pipeline']\nKannada : 1 token  []\nEnglish    first eviction after 13 messages (budget 100)\nKannada    first eviction after 78 messages (budget 100)\nempty text first eviction after 78 messages (budget 100)\nthe Kannada run behaves exactly like empty messages: only the 'USER' label is counted, so the message content is invisible to the budget"
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Reading the Verified Output",
    "textKn": "ಪರಿಶೀಲಿತ Output ಓದುವುದು",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "The Estimate and the Render",
    "headingKn": "ಅಂದಾಜು ಮತ್ತು Render",
    "bodyEn": "Section 1: \"Alice owns the evaluation pipeline.\" tokenizes to five words and estimates 6 (5 times 1.3 is 6.5, truncated to 6); \"Hello\" and the empty string both estimate 1 because of the minimum. Section 2 repeats the overflow arithmetic: 28 turns is the first over a 32,768 budget. Section 3 renders core sections as \"[CORE:project] ...\" lines followed by \"USER: ...\" lines, which is the structured memory becoming prompt text; it measures 26 tokens.",
    "bodyKn": "ವಿಭಾಗ 1: \"Alice owns the evaluation pipeline.\" ಐದು ಪದಗಳಾಗಿ tokenize ಆಗಿ 6 ಎಂದು ಅಂದಾಜಿಸುತ್ತದೆ (5 ಗುಣಿಸು 1.3 ಎಂದರೆ 6.5, 6 ಕ್ಕೆ ಕತ್ತರಿಸಲಾಗಿದೆ); \"Hello\" ಮತ್ತು ಖಾಲಿ ಸ್ಟ್ರಿಂಗ್ ಎರಡೂ ಕನಿಷ್ಠದ ಕಾರಣ 1 ಅಂದಾಜಿಸುತ್ತವೆ. ವಿಭಾಗ 2 ಉಕ್ಕಿ ಹರಿಯುವಿಕೆ ಅಂಕಗಣಿತ ಪುನರಾವರ್ತಿಸುತ್ತದೆ: 28 ಸುತ್ತು 32,768 budget ಮೀರುವ ಮೊದಲನೆಯದು. ವಿಭಾಗ 3 core ವಿಭಾಗಗಳನ್ನು \"[CORE:project] ...\" ಸಾಲುಗಳಾಗಿ ನಂತರ \"USER: ...\" ಸಾಲುಗಳಾಗಿ render ಮಾಡುತ್ತದೆ, ಇದು ರಚನಾತ್ಮಕ ಮೆಮೊರಿ prompt ಪಠ್ಯವಾಗುವುದು; ಅದು 26 tokens ಅಳೆಯುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Compaction Keeps Core and Loses the Oldest",
    "headingKn": "Compaction Core ಉಳಿಸುತ್ತದೆ ಮತ್ತು ಹಳೆಯದನ್ನು ಕಳೆಯುತ್ತದೆ",
    "bodyEn": "Section 4 uses a budget of 50. After four messages the context is 46 tokens; the fifth message (\"Alice owns the evaluation pipeline.\") pushes it over, so \"[COMPACT] evicted user message: We need to prepare the prototype.\" fires and the count drops to 45. The core line \"[CORE:project] The active project is Orion.\" survives. Section 5 is the important caveat: nothing archived the evicted message, so it is gone. Eviction is only \"not currently loaded\" if something stored it elsewhere, which is what Part 2 builds.",
    "bodyKn": "ವಿಭಾಗ 4 50 ರ budget ಬಳಸುತ್ತದೆ. ನಾಲ್ಕು ಸಂದೇಶಗಳ ನಂತರ context 46 tokens; ಐದನೇ ಸಂದೇಶ (\"Alice owns the evaluation pipeline.\") ಅದನ್ನು ಮೀರಿಸುತ್ತದೆ, ಆದ್ದರಿಂದ \"[COMPACT] evicted user message: We need to prepare the prototype.\" ಚಲಿಸಿ ಎಣಿಕೆ 45 ಕ್ಕೆ ಇಳಿಯುತ್ತದೆ. Core ಸಾಲು \"[CORE:project] The active project is Orion.\" ಉಳಿಯುತ್ತದೆ. ವಿಭಾಗ 5 ಮುಖ್ಯ ಎಚ್ಚರಿಕೆ: ತೆಗೆದ ಸಂದೇಶವನ್ನು ಯಾವುದೂ archive ಮಾಡಲಿಲ್ಲ, ಆದ್ದರಿಂದ ಅದು ಹೋಗಿದೆ. ಬೇರೆಡೆ ಯಾವುದಾದರೂ ಸಂಗ್ರಹಿಸಿದ್ದರೆ ಮಾತ್ರ eviction \"ಸದ್ಯ ಲೋಡ್ ಆಗಿಲ್ಲ\" ಎಂದರ್ಥ, ಅದನ್ನೇ ಭಾಗ 2 ನಿರ್ಮಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Pinned Memory Can Exceed the Budget",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಪಿನ್ ಮಾಡಿದ ಮೆಮೊರಿ Budget ಮೀರಬಹುದು",
    "bodyEn": "Section 6 pins a 41-token rule block under a budget of 20. Compaction evicts \"hello there\" and then stops with one message left, because the loop will not remove the last message, and the total is 45 tokens against a budget of 20. Compaction can only shrink the rolling part. Pinned memory is not free and also needs limits, summarisation, replacement or demotion to the archive, and the loop also guarantees the single remaining message survives even when it alone is too large.",
    "bodyKn": "ವಿಭಾಗ 6 20 ರ budget ಅಡಿಯಲ್ಲಿ 41-token ನಿಯಮ ಗುಂಪನ್ನು ಪಿನ್ ಮಾಡುತ್ತದೆ. Compaction \"hello there\" ತೆಗೆದು, ಒಂದು ಸಂದೇಶ ಉಳಿದಾಗ ನಿಲ್ಲುತ್ತದೆ, ಏಕೆಂದರೆ loop ಕೊನೆಯ ಸಂದೇಶ ತೆಗೆಯುವುದಿಲ್ಲ, ಮತ್ತು 20 ರ budget ವಿರುದ್ಧ ಒಟ್ಟು 45 tokens. Compaction ಉರುಳುವ ಭಾಗವನ್ನು ಮಾತ್ರ ಕುಗ್ಗಿಸಬಲ್ಲದು. ಪಿನ್ ಮಾಡಿದ ಮೆಮೊರಿ ಉಚಿತವಲ್ಲ ಮತ್ತು ಅದಕ್ಕೂ ಮಿತಿಗಳು, ಸಾರಾಂಶ, ಬದಲಿ ಅಥವಾ archive ಗೆ ಇಳಿಸುವಿಕೆ ಬೇಕು, ಮತ್ತು loop ಉಳಿದ ಒಂದೇ ಸಂದೇಶ ಅದೊಂದೇ ತುಂಬಾ ದೊಡ್ಡದಾಗಿದ್ದರೂ ಉಳಿಯುವುದನ್ನು ಖಾತರಿಪಡಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: The Token Estimate Is Blind to Kannada",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Token ಅಂದಾಜಿಗೆ ಕನ್ನಡ ಕಾಣುವುದಿಲ್ಲ",
    "bodyEn": "Section 7 tests the estimator on a Kannada sentence. tokenize returns an empty list and estimate_tokens returns 1, against 6 for the English sentence. Because the pattern only matches a to z and 0 to 9, no Kannada letter is ever counted. With a budget of 100, English messages trigger the first eviction after 13 messages, while Kannada messages take 78, exactly the same as empty messages: only the \"USER\" label is counted and the content is invisible to the budget. For a bilingual platform that is a real bug: a Kannada conversation would overflow the real model long before this budget noticed. Budget with the target model's own tokenizer, which counts every script, and keep a safety margin.",
    "bodyKn": "ವಿಭಾಗ 7 ಒಂದು ಕನ್ನಡ ವಾಕ್ಯದ ಮೇಲೆ ಅಂದಾಜನ್ನು ಪರೀಕ್ಷಿಸುತ್ತದೆ. tokenize ಖಾಲಿ ಪಟ್ಟಿ ಹಿಂತಿರುಗಿಸುತ್ತದೆ ಮತ್ತು estimate_tokens 1 ಹಿಂತಿರುಗಿಸುತ್ತದೆ, ಇಂಗ್ಲಿಷ್ ವಾಕ್ಯಕ್ಕೆ 6 ವಿರುದ್ಧ. ಮಾದರಿ a ಯಿಂದ z ಮತ್ತು 0 ಯಿಂದ 9 ಮಾತ್ರ ಹೊಂದಿಸುವುದರಿಂದ ಯಾವುದೇ ಕನ್ನಡ ಅಕ್ಷರ ಎಂದೂ ಎಣಿಕೆಯಾಗುವುದಿಲ್ಲ. 100 ರ budget ನೊಂದಿಗೆ ಇಂಗ್ಲಿಷ್ ಸಂದೇಶಗಳು 13 ಸಂದೇಶಗಳ ನಂತರ ಮೊದಲ eviction ಪ್ರಚೋದಿಸುತ್ತವೆ, ಆದರೆ ಕನ್ನಡ ಸಂದೇಶಗಳಿಗೆ 78, ಖಾಲಿ ಸಂದೇಶಗಳಿಗೆ ಸರಿಯಾಗಿ ಅದೇ: ಕೇವಲ \"USER\" ಲೇಬಲ್ ಎಣಿಕೆಯಾಗುತ್ತದೆ ಮತ್ತು ವಿಷಯ budget ಗೆ ಕಾಣುವುದಿಲ್ಲ. ದ್ವಿಭಾಷಾ ವೇದಿಕೆಗೆ ಇದು ನಿಜವಾದ ದೋಷ: ಈ budget ಗಮನಿಸುವ ಮೊದಲೇ ಕನ್ನಡ ಸಂಭಾಷಣೆ ನಿಜವಾದ ಮಾದರಿಯನ್ನು ಉಕ್ಕಿಸುತ್ತಿತ್ತು. ಗುರಿ ಮಾದರಿಯ ಸ್ವಂತ tokenizer ನಿಂದ budget ಮಾಡಿ, ಅದು ಪ್ರತಿ ಲಿಪಿಯನ್ನೂ ಎಣಿಸುತ್ತದೆ, ಮತ್ತು ಸುರಕ್ಷತಾ ಅಂಚು ಇಡಿ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Compaction Versus Archiving, and FIFO Is Not Enough",
    "headingKn": "Compaction ಮತ್ತು Archiving, ಹಾಗೂ FIFO ಸಾಕಾಗದು",
    "bodyEn": "These are different operations. Compaction reduces active context; archiving preserves information outside it. Compaction without archiving loses information, and archiving without compaction still overflows, so a robust system needs both. FIFO eviction assumes old means unimportant, which is false: \"never modify production\" said at turn 1 must not die at turn 100. That is why critical constraints are promoted to core, and why real systems score eviction by importance, relevance, recency and token cost, or summarise old turns into a short note while storing the detail externally.",
    "bodyKn": "ಇವು ಬೇರೆ ಕಾರ್ಯಾಚರಣೆಗಳು. Compaction ಸಕ್ರಿಯ context ಕಡಿಮೆ ಮಾಡುತ್ತದೆ; archiving ಮಾಹಿತಿಯನ್ನು ಅದರ ಹೊರಗೆ ಉಳಿಸುತ್ತದೆ. Archiving ಇಲ್ಲದ compaction ಮಾಹಿತಿ ಕಳೆಯುತ್ತದೆ, ಮತ್ತು compaction ಇಲ್ಲದ archiving ಇನ್ನೂ ಉಕ್ಕುತ್ತದೆ, ಹಾಗಾಗಿ ದೃಢ ವ್ಯವಸ್ಥೆಗೆ ಎರಡೂ ಬೇಕು. FIFO eviction ಹಳೆಯದು ಅಮುಖ್ಯ ಎಂದು ಊಹಿಸುತ್ತದೆ, ಅದು ಸುಳ್ಳು: ಸುತ್ತು 1 ರಲ್ಲಿ ಹೇಳಿದ \"never modify production\" ಸುತ್ತು 100 ರಲ್ಲಿ ಸಾಯಬಾರದು. ಅದಕ್ಕಾಗಿಯೇ ನಿರ್ಣಾಯಕ ನಿರ್ಬಂಧಗಳನ್ನು core ಗೆ ಬಡ್ತಿ ನೀಡಲಾಗುತ್ತದೆ, ಮತ್ತು ನಿಜವಾದ ವ್ಯವಸ್ಥೆಗಳು ಮಹತ್ವ, ಪ್ರಸ್ತುತತೆ, ತಾಜಾತನ ಮತ್ತು token ವೆಚ್ಚದಿಂದ eviction ಗೆ ಅಂಕ ನೀಡುತ್ತವೆ, ಅಥವಾ ವಿವರವನ್ನು ಹೊರಗೆ ಸಂಗ್ರಹಿಸಿ ಹಳೆಯ ಸುತ್ತುಗಳನ್ನು ಚಿಕ್ಕ ಟಿಪ್ಪಣಿಯಾಗಿ ಸಂಕ್ಷೇಪಿಸುತ್ತವೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A persistent agent can accumulate far more history than any window, and putting all of it in every request is costly, slow and noisy. Treating the prompt as an active working set, with a larger addressable store behind it, is the scalable shape, and it turns context management into an explicit agent capability.",
    "bodyKn": "ನಿರಂತರ agent ಯಾವುದೇ window ಗಿಂತ ಹೆಚ್ಚು ಇತಿಹಾಸ ಸಂಗ್ರಹಿಸಬಲ್ಲದು, ಮತ್ತು ಎಲ್ಲವನ್ನೂ ಪ್ರತಿ ವಿನಂತಿಯಲ್ಲಿ ಇಡುವುದು ದುಬಾರಿ, ನಿಧಾನ ಮತ್ತು ಗದ್ದಲದ್ದು. Prompt ಅನ್ನು ಸಕ್ರಿಯ ಕೆಲಸದ ಗಣವಾಗಿ, ಅದರ ಹಿಂದೆ ದೊಡ್ಡ ಹಂಚಿಕೆ ಸಂಗ್ರಹದೊಂದಿಗೆ, ಪರಿಗಣಿಸುವುದು ವಿಸ್ತರಿಸಬಹುದಾದ ರೂಪ, ಮತ್ತು ಅದು context ನಿರ್ವಹಣೆಯನ್ನು ಸ್ಪಷ್ಟ agent ಸಾಮರ್ಥ್ಯವಾಗಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Where This Appears in AI Systems",
    "headingKn": "AI ವ್ಯವಸ್ಥೆಗಳಲ್ಲಿ ಇದು ಎಲ್ಲಿ ಕಾಣುತ್ತದೆ",
    "bodyEn": "Personal assistants that remember a user across sessions, coding agents that keep project conventions pinned and archive earlier investigation, and support agents that recall prior tickets all split state into a small pinned part, a rolling conversation and a searchable store. Systems such as Letta and Mem0 build on this split.",
    "bodyKn": "ಅವಧಿಗಳ ನಡುವೆ ಬಳಕೆದಾರರನ್ನು ನೆನಪಿಡುವ ವೈಯಕ್ತಿಕ ಸಹಾಯಕರು, ಪ್ರಾಜೆಕ್ಟ್ ಸಂಪ್ರದಾಯಗಳನ್ನು ಪಿನ್ ಮಾಡಿ ಹಿಂದಿನ ತನಿಖೆ ಆರ್ಕೈವ್ ಮಾಡುವ coding agents, ಮತ್ತು ಹಿಂದಿನ tickets ನೆನಪಿಸಿಕೊಳ್ಳುವ ಬೆಂಬಲ agents ಎಲ್ಲವೂ ಸ್ಥಿತಿಯನ್ನು ಚಿಕ್ಕ ಪಿನ್ ಮಾಡಿದ ಭಾಗ, ಉರುಳುವ ಸಂಭಾಷಣೆ ಮತ್ತು ಹುಡುಕಬಹುದಾದ ಸಂಗ್ರಹವಾಗಿ ವಿಭಜಿಸುತ್ತವೆ. Letta ಮತ್ತು Mem0 ನಂತಹ ವ್ಯವಸ್ಥೆಗಳು ಈ ವಿಭಜನೆಯ ಮೇಲೆ ನಿರ್ಮಿತ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"virtual context means unlimited memory.\" It means a finite window plus external storage plus paging. When someone says \"unlimited memory\" ask where it is stored, how it is searched, what is loaded, how stale facts are updated and how provenance is kept.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"virtual context ಎಂದರೆ ಅನಿಯಮಿತ ಮೆಮೊರಿ.\" ಅದರರ್ಥ ಸೀಮಿತ window ಜೊತೆ ಬಾಹ್ಯ ಸಂಗ್ರಹ ಜೊತೆ paging. \"ಅನಿಯಮಿತ ಮೆಮೊರಿ\" ಎಂದು ಯಾರಾದರೂ ಹೇಳಿದರೆ ಅದು ಎಲ್ಲಿ ಸಂಗ್ರಹವಾಗಿದೆ, ಹೇಗೆ ಹುಡುಕಲಾಗುತ್ತದೆ, ಏನು ಲೋಡ್ ಆಗುತ್ತದೆ, ಹಳೆಯ ಸಂಗತಿಗಳು ಹೇಗೆ ನವೀಕರಿಸಲಾಗುತ್ತದೆ ಮತ್ತು ಮೂಲ ಹೇಗೆ ಉಳಿಸಲಾಗುತ್ತದೆ ಎಂದು ಕೇಳಿ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Main context: the fixed-size prompt-visible state. Core memory: named sections pinned in the prompt. Archival memory: large external searchable storage. Virtual context: finite window plus external store plus paging. Compaction: reducing active context. Eviction: removing a message from the window. Page-in and page-out: moving information into or out of the window.",
    "bodyKn": "Main context: ನಿಗದಿತ ಗಾತ್ರದ prompt-ಗೋಚರ ಸ್ಥಿತಿ. Core ಮೆಮೊರಿ: prompt ನಲ್ಲಿ ಪಿನ್ ಮಾಡಿದ ಹೆಸರಿಸಿದ ವಿಭಾಗಗಳು. Archival ಮೆಮೊರಿ: ದೊಡ್ಡ ಬಾಹ್ಯ ಹುಡುಕಬಹುದಾದ ಸಂಗ್ರಹ. Virtual context: ಸೀಮಿತ window ಜೊತೆ ಬಾಹ್ಯ ಸಂಗ್ರಹ ಜೊತೆ paging. Compaction: ಸಕ್ರಿಯ context ಕಡಿಮೆ ಮಾಡುವುದು. Eviction: window ನಿಂದ ಸಂದೇಶ ತೆಗೆಯುವುದು. Page-in ಮತ್ತು page-out: window ಒಳಗೆ ಅಥವಾ ಹೊರಗೆ ಮಾಹಿತಿ ಸರಿಸುವುದು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) Context is what is visible, memory is what survives and can be recovered. 2) Overflow, dilution and persistence are three different problems and a bigger window fixes only the first. 3) Virtual context is a finite window, an external store and paging. 4) The owner of a budget should enforce it: add_message calls compact. 5) Eviction without an archive is deletion. 6) Pinned memory can itself blow the budget. 7) The word-based estimate cannot see Kannada: budget with a real tokenizer. Part 2 adds the archive and the memory tools.",
    "bodyKn": "1) Context ಎಂದರೆ ಗೋಚರಿಸುವುದು, ಮೆಮೊರಿ ಎಂದರೆ ಉಳಿದು ಮರುಪಡೆಯಬಹುದಾದದ್ದು. 2) ಉಕ್ಕಿ ಹರಿಯುವಿಕೆ, ದುರ್ಬಲಗೊಳ್ಳುವಿಕೆ ಮತ್ತು ನಿರಂತರತೆ ಮೂರು ಬೇರೆ ಸಮಸ್ಯೆಗಳು ಮತ್ತು ದೊಡ್ಡ window ಮೊದಲನೆಯದನ್ನು ಮಾತ್ರ ಸರಿಪಡಿಸುತ್ತದೆ. 3) Virtual context ಸೀಮಿತ window, ಬಾಹ್ಯ ಸಂಗ್ರಹ ಮತ್ತು paging. 4) Budget ಹೊಂದಿದವರು ಅದನ್ನು ಜಾರಿಗೊಳಿಸಬೇಕು: add_message compact ಕರೆಯುತ್ತದೆ. 5) Archive ಇಲ್ಲದ eviction ಅಳಿಸುವಿಕೆ. 6) ಪಿನ್ ಮಾಡಿದ ಮೆಮೊರಿ ಸ್ವತಃ budget ಸ್ಫೋಟಿಸಬಹುದು. 7) ಪದ-ಆಧಾರಿತ ಅಂದಾಜಿಗೆ ಕನ್ನಡ ಕಾಣುವುದಿಲ್ಲ: ನಿಜವಾದ tokenizer ನಿಂದ budget ಮಾಡಿ. ಭಾಗ 2 archive ಮತ್ತು ಮೆಮೊರಿ tools ಸೇರಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What does MemGPT's virtual-memory analogy map the active context to?",
      "qKn": "MemGPT ಯ virtual-memory ಹೋಲಿಕೆ ಸಕ್ರಿಯ context ಅನ್ನು ಯಾವುದಕ್ಕೆ ನಕ್ಷೆ ಮಾಡುತ್ತದೆ?",
      "opts": [
       "Disk",
       "RAM",
       "Network storage",
       "The CPU scheduler"
      ],
      "optsKn": [
       "Disk",
       "RAM",
       "Network storage",
       "CPU scheduler"
      ],
      "correct": 1
     },
     {
      "q": "Which statement about a larger context window is correct?",
      "qKn": "ದೊಡ್ಡ context window ಬಗ್ಗೆ ಯಾವ ಹೇಳಿಕೆ ಸರಿ?",
      "opts": [
       "It solves overflow, dilution and persistence",
       "It postpones overflow but does not solve dilution or cross-session persistence",
       "It replaces external memory",
       "It removes the need for eviction"
      ],
      "optsKn": [
       "ಅದು ಉಕ್ಕಿ ಹರಿಯುವಿಕೆ, ದುರ್ಬಲಗೊಳ್ಳುವಿಕೆ ಮತ್ತು ನಿರಂತರತೆ ಮೂರನ್ನೂ ಪರಿಹರಿಸುತ್ತದೆ",
       "ಅದು ಉಕ್ಕಿ ಹರಿಯುವಿಕೆ ಮುಂದೂಡುತ್ತದೆ ಆದರೆ ದುರ್ಬಲಗೊಳ್ಳುವಿಕೆ ಅಥವಾ ಅವಧಿ-ಮೀರಿದ ನಿರಂತರತೆ ಪರಿಹರಿಸುವುದಿಲ್ಲ",
       "ಅದು ಬಾಹ್ಯ ಮೆಮೊರಿ ಬದಲಿಸುತ್ತದೆ",
       "ಅದು eviction ಅಗತ್ಯ ತೆಗೆಯುತ್ತದೆ"
      ],
      "correct": 1
     },
     {
      "q": "In this lesson's run, why did evicting the first message count as forgetting?",
      "qKn": "ಈ ಪಾಠದ ಓಟದಲ್ಲಿ ಮೊದಲ ಸಂದೇಶ ತೆಗೆಯುವುದು ಮರೆಯುವುದು ಏಕೆ ಎಂದು ಎಣಿಕೆಯಾಯಿತು?",
      "opts": [
       "Python deleted the file",
       "Nothing had archived it, so no copy existed outside the window",
       "Core memory removed it",
       "The budget was infinite"
      ],
      "optsKn": [
       "Python ಫೈಲ್ ಅಳಿಸಿತು",
       "ಯಾವುದೂ ಅದನ್ನು archive ಮಾಡಿರಲಿಲ್ಲ, ಹಾಗಾಗಿ window ಹೊರಗೆ ಪ್ರತಿ ಇರಲಿಲ್ಲ",
       "Core ಮೆಮೊರಿ ಅದನ್ನು ತೆಗೆಯಿತು",
       "Budget ಅನಂತವಾಗಿತ್ತು"
      ],
      "correct": 1
     },
     {
      "q": "What did the Kannada token-estimate experiment show?",
      "qKn": "ಕನ್ನಡ token-ಅಂದಾಜು ಪ್ರಯೋಗ ಏನು ತೋರಿಸಿತು?",
      "opts": [
       "Kannada costs more tokens than English",
       "The estimator counts no Kannada letters, so Kannada messages behave like empty ones",
       "Kannada is rejected",
       "The estimator converts Kannada to English"
      ],
      "optsKn": [
       "ಕನ್ನಡ ಇಂಗ್ಲಿಷ್‌ಗಿಂತ ಹೆಚ್ಚು tokens ಬಳಸುತ್ತದೆ",
       "ಅಂದಾಜು ಯಾವುದೇ ಕನ್ನಡ ಅಕ್ಷರ ಎಣಿಸುವುದಿಲ್ಲ, ಹಾಗಾಗಿ ಕನ್ನಡ ಸಂದೇಶಗಳು ಖಾಲಿಯಂತೆ ವರ್ತಿಸುತ್ತವೆ",
       "ಕನ್ನಡ ತಿರಸ್ಕೃತವಾಗುತ್ತದೆ",
       "ಅಂದಾಜು ಕನ್ನಡವನ್ನು ಇಂಗ್ಲಿಷ್‌ಗೆ ಪರಿವರ್ತಿಸುತ್ತದೆ"
      ],
      "correct": 1
     },
     {
      "q": "Why is core memory not free?",
      "qKn": "Core ಮೆಮೊರಿ ಉಚಿತವಲ್ಲ ಏಕೆ?",
      "opts": [
       "It is stored on disk",
       "It occupies the same finite budget as the conversation, so pinning more leaves less room",
       "It is slower",
       "It is never rendered"
      ],
      "optsKn": [
       "ಅದು disk ನಲ್ಲಿ ಸಂಗ್ರಹವಾಗುತ್ತದೆ",
       "ಅದು ಸಂಭಾಷಣೆಯಷ್ಟೇ ಸೀಮಿತ budget ಆಕ್ರಮಿಸುತ್ತದೆ, ಹಾಗಾಗಿ ಹೆಚ್ಚು ಪಿನ್ ಮಾಡಿದರೆ ಕಡಿಮೆ ಸ್ಥಳ",
       "ಅದು ನಿಧಾನ",
       "ಅದು ಎಂದೂ render ಆಗುವುದಿಲ್ಲ"
      ],
      "correct": 1
     }
    ]
   }
  }
 ]
};
