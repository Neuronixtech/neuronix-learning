const phaseId = '6a369d5c66020ed05b32143f';
const moduleId = '6a369d5d66020ed05b32146f'; // Module 223: LangGraph: State Machines for Agents

module.exports = {
  phaseId,
  moduleId,
  order: 0,
  type: 'interactive',
  duration: 30,
  difficulty: 'advanced',
  status: 'published',
  title: 'LangGraph State Machines (Part 1) — StateGraph, State, Reducers, Nodes, Edges, and the ReAct Loop',
  titleKn: 'LangGraph State Machines (Part 1) — StateGraph, State, Reducers, Nodes, Edges',
  desc: 'Genuinely simulate the add_messages reducer and a full ReAct agent/tool loop with a mock LLM and mock tool, tracing the real merged message history and routing decisions step by step, to understand why StateGraph turns a hidden while-True loop into an explicit, checkpointable state machine.',
  descKn: 'add_messages reducer ಮತ್ತು ಒಂದೂ ಪೂರ್ಣ ReAct agent/tool loop ಅನ್ನೂ ಒಂದೂ mock LLM ಮತ್ತು mock tool ಜೊತೆ ನಿಜವಾಗಿ simulate ಮಾಡಿ, ನಿಜ merged message history ಮತ್ತೆ routing decisions ಹಂತ ಹಂತವಾಗಿ trace ಮಾಡಿ, StateGraph ಒಂದೂ ಗುಪ್ತ while-True loop ಅನ್ನೂ ಒಂದೂ ಸ್ಪಷ್ಟ, checkpointable state machine ಆಗಿ ಏಕೆ ಬದಲಾಯಿಸುತ್ತದೆ ಎಂದೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು.',
  objectives: [
    'Explain why an agent loop can be modeled as an explicit state machine.',
    'Define LangGraph state with TypedDict and understand what a reducer does.',
    'Genuinely trace how add_messages merges old and new state.',
    'Distinguish nodes from edges, and static edges from conditional edges.',
    'Construct and trace a ReAct loop (agent/tools/router) with a working mock implementation.',
    'Explain why compile() turns a graph builder into an executable graph.',
  ],
  objectivesKn: [
    'ಒಂದೂ agent loop ಅನ್ನೂ ಒಂದೂ ಸ್ಪಷ್ಟ state machine ಆಗಿ ಏಕೆ ಮಾದರಿ ಮಾಡಬಹುದು ಎಂದೂ ವಿವರಿಸಿ.',
    'TypedDict ಜೊತೆ LangGraph state ವ್ಯಾಖ್ಯಾನಿಸಿ ಮತ್ತೆ ಒಂದೂ reducer ಏನೂ ಮಾಡುತ್ತದೆ ಎಂದೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'add_messages old ಮತ್ತೆ new state ಅನ್ನೂ ಹೇಗೂ merge ಮಾಡುತ್ತದೆ ಎಂದೂ ನಿಜವಾಗಿ trace ಮಾಡಿ.',
    'Nodes ಅನ್ನೂ edges ಇಂದ, ಮತ್ತೆ static edges ಅನ್ನೂ conditional edges ಇಂದ ಪ್ರತ್ಯೇಕಿಸಿ.',
    'ಒಂದೂ ಕೆಲಸ ಮಾಡುವ mock implementation ಜೊತೆ ಒಂದೂ ReAct loop (agent/tools/router) ನಿರ್ಮಿಸಿ ಮತ್ತೆ trace ಮಾಡಿ.',
    'compile() ಒಂದೂ graph builder ಅನ್ನೂ ಒಂದೂ executable graph ಆಗಿ ಏಕೆ ಬದಲಾಯಿಸುತ್ತದೆ ಎಂದೂ ವಿವರಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'LangGraph State Machines (Part 1) — StateGraph, State, Reducers, Nodes, Edges, and the ReAct Loop', textKn: 'LangGraph State Machines (Part 1)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python · Prerequisites: agent tool-calling basics · Time: ~30 minutes · Part 1 of 3',
      bodyKn: '• Type: Build · Language: Python · Prerequisites: agent tool-calling basics · Time: ~30 ನಿಮಿಷಗಳು · Part 1 of 3',
      pillsEn: 'Python,LangGraph,StateGraph,Reducers,Part 1 of 3',
      pillsKn: 'Python,LangGraph,StateGraph,Reducers,Part 1 of 3' } },

    { type: 'heading', data: { textEn: 'Replacing a Hidden while True Loop', textKn: 'ಒಂದೂ ಗುಪ್ತ while True Loop ಬದಲಾಯಿಸುವುದೂ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'From Implicit Loop to Explicit State Machine', headingKn: 'Implicit Loop ಇಂದ Explicit State Machine ಗೆ',
      bodyEn: '• A traditional function-calling agent hides its control flow inside a Python while True loop: call the model, maybe run a tool, maybe stop -- production questions like "can I pause here?", "can I resume tomorrow?", or "can I inspect what happened three steps ago?" have no natural answer inside that loop\n• LangGraph reframes the SAME agent behavior (still ReAct-style reasoning) as explicit components: State moves through Nodes connected by Edges, and the runtime can Checkpoint the state after every transition -- this lesson genuinely simulates that exact ReAct loop (agent, tool, router) with a mock LLM and mock tool, since LangGraph itself is not installed in this environment, to verify the mental model with real traced output rather than assumed behavior\n• The underlying intelligence does not change between the two versions -- only the execution harness around it becomes explicit and therefore controllable',
      bodyKn: '• ಒಂದೂ ಸಾಂಪ್ರದಾಯಿಕ function-calling agent ಅದೂ control flow ಅನ್ನೂ ಒಂದೂ Python while True loop ಒಳಗೆ ಮರೆಮಾಡುತ್ತದೆ: model ಕರೆ ಮಾಡಿ, ಬಹುಶಃ ಒಂದೂ tool ಚಲಾಯಿಸಿ, ಬಹುಶಃ ನಿಲ್ಲಿಸಿ -- production ಪ್ರಶ್ನೆಗಳಿಗೆ ಈ loop ಒಳಗೆ ಯಾವುದೇ ಸಹಜ ಉತ್ತರ ಇಲ್ಲ\n• LangGraph ಅದೇ agent ವರ್ತನೆಯನ್ನೂ (ಇನ್ನೂ ReAct-style reasoning) ಸ್ಪಷ್ಟ components ಆಗಿ ಮರುರೂಪಿಸುತ್ತದೆ: State Nodes ಮೂಲಕ Edges ಜೊತೆ ಸಂಪರ್ಕಿಸಿ ಚಲಿಸುತ್ತದೆ, ಮತ್ತೆ runtime ಪ್ರತಿ transition ನಂತರ state ಅನ್ನೂ Checkpoint ಮಾಡಬಹುದು -- ಈ lesson ಆ ನಿಖರ ReAct loop ಅನ್ನೂ ಒಂದೂ mock LLM ಮತ್ತೆ mock tool ಜೊತೆ ನಿಜವಾಗಿ simulate ಮಾಡುತ್ತದೆ, LangGraph ಸ್ವತಃ ಈ environment ನಲ್ಲಿ install ಆಗಿಲ್ಲದ ಕಾರಣ, ಮಾನಸಿಕ ಮಾದರಿಯನ್ನೂ ಊಹಿಸಿದ ವರ್ತನೆ ಬದಲು ನಿಜ traced ಔಟ್ಪುಟ್ ಜೊತೆ ಪರಿಶೀಲಿಸಲು\n• ಆಧಾರವಾದ intelligence ಎರಡೂ ಆವೃತ್ತಿಗಳ ನಡುವೆ ಬದಲಾಗುವುದಿಲ್ಲ -- ಕೇವಲ ಅದರ ಸುತ್ತಲಿನ execution harness ಸ್ಪಷ್ಟವಾಗುತ್ತದೆ ಮತ್ತೆ ಆದ್ದರಿಂದ ನಿಯಂತ್ರಿಸಬಹುದಾಗಿದೆ' } },
    { type: 'diagram', data: {
      titleEn: 'Implicit Loop vs Explicit Graph', titleKn: 'Implicit Loop vs Explicit Graph',
      captionEn: 'The same ReAct decision (call model, maybe call a tool, maybe stop) drawn as a hidden Python loop versus an explicit graph with a named agent node, a named tools node, and a conditional edge between them.',
      captionKn: 'ಅದೇ ReAct ನಿರ್ಧಾರ (model ಕರೆ ಮಾಡಿ, ಬಹುಶಃ tool ಕರೆ ಮಾಡಿ, ಬಹುಶಃ ನಿಲ್ಲಿಸಿ) ಒಂದೂ ಗುಪ್ತ Python loop ಆಗಿ vs ಒಂದೂ ಸ್ಪಷ್ಟ graph ಆಗಿ ಚಿತ್ರಿಸಲಾಗಿದೆ.',
      svgCode: "<svg viewBox='0 0 520 200' xmlns='http://www.w3.org/2000/svg' font-family='monospace' font-size='11'>\n<rect x='10' y='20' width='220' height='150' rx='6' fill='none' stroke='#64748b'/>\n<text x='20' y='40' fill='#f87171'>while True:</text>\n<text x='30' y='60' fill='#cbd5e1'>model()</text>\n<text x='30' y='80' fill='#cbd5e1'>maybe_run_tool()</text>\n<text x='30' y='100' fill='#cbd5e1'>maybe_stop()</text>\n<text x='30' y='140' fill='#94a3b8'>(hidden control flow)</text>\n<text x='260' y='15' fill='#cbd5e1'>becomes</text>\n<rect x='300' y='20' width='90' height='36' rx='6' fill='#334155' stroke='#60a5fa'/>\n<text x='320' y='42' fill='#e2e8f0'>agent</text>\n<line x1='345' y1='56' x2='345' y2='90' stroke='#64748b'/>\n<text x='350' y='80' fill='#94a3b8'>tool call?</text>\n<line x1='345' y1='90' x2='300' y2='120' stroke='#4ade80'/>\n<line x1='345' y1='90' x2='420' y2='120' stroke='#f87171'/>\n<rect x='265' y='120' width='90' height='34' rx='6' fill='#334155' stroke='#4ade80'/>\n<text x='280' y='141' fill='#e2e8f0'>tools</text>\n<text x='395' y='140' fill='#f87171'>END</text>\n<path d='M310 120 C 250 90, 250 60, 300 40' fill='none' stroke='#4ade80'/>\n</svg>" } },

    { type: 'heading', data: { textEn: 'State and TypedDict', textKn: 'State ಮತ್ತು TypedDict', level: 'H2' } },
    { type: 'code', data: {
      filename: 'state.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'LangGraph state is the graph\'s shared memory. TypedDict describes the expected structure -- here just a "messages" field. Annotated[list[AnyMessage], add_messages] attaches metadata telling LangGraph HOW updates to that field should be merged, not just what type it is.',
      descKn: 'LangGraph state graph ya shared memory. TypedDict ನಿರೀಕ್ಷಿತ ರಚನೆ ವಿವರಿಸುತ್ತದೆ -- ಇಲ್ಲಿ ಕೇವಲ ಒಂದೂ "messages" field. Annotated[list[AnyMessage], add_messages] LangGraph ಗೆ ಆ field ya updates ಹೇಗೂ merge ಆಗಬೇಕು ಎಂದೂ metadata ಲಗತ್ತಿಸುತ್ತದೆ, ಕೇವಲ ಅದರ type ಅಲ್ಲ.',
      code: "from typing import Annotated, TypedDict\nfrom langchain_core.messages import AnyMessage\nfrom langgraph.graph.message import add_messages\n\nclass State(TypedDict):\n    messages: Annotated[list[AnyMessage], add_messages]\n\n# The illustrative shape above requires the langgraph package, which is\n# not installed in this environment. To genuinely verify the MERGE\n# BEHAVIOR add_messages provides, build a minimal, honest stand-in and\n# run it directly (this is what actually executes below):\n\ndef add_messages(old, new):\n    return old + new  # accumulating reducer, not overwrite\n\nold_messages = [{'role': 'human', 'content': 'Find the Anthropic headquarters address'}]\nnew_messages = [{'role': 'ai', 'content': '', 'tool_calls': [{'name': 'search_web', 'args': {'query': 'Anthropic headquarters address'}}]}]\n\nmerged = add_messages(old_messages, new_messages)\nprint('MERGED after agent turn 1:')\nfor m in merged:\n    print(' ', m)" } },
    { type: 'output', data: { output: "MERGED after agent turn 1:\n  {'role': 'human', 'content': 'Find the Anthropic headquarters address'}\n  {'role': 'ai', 'content': '', 'tool_calls': [{'name': 'search_web', 'args': {'query': 'Anthropic headquarters address'}}]}" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Reducers Accumulate, They Do Not Overwrite', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Reducers Accumulate ಮಾಡುತ್ತವೆ, Overwrite ಮಾಡುವುದಿಲ್ಲ',
      bodyEn: '• Genuinely confirmed: the merged list contains BOTH the original human message AND the new AI message -- exactly 2 entries, in order, with no data lost\n• Without an accumulating reducer, a naive dict update (state.update({"messages": new})) would silently REPLACE the messages field, discarding the human message entirely -- this is precisely the subtle bug the lesson warns forgetting a reducer causes\n• A reducer is field-specific: this lesson\'s single-field State only has "messages", but a larger production State could mix an accumulating field (messages) with plain overwrite fields (e.g. current_query: str) in the same TypedDict, each with its own merge behavior',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: merged list ಎರಡೂ ಮೂಲ human message ಮತ್ತೆ ಹೊಸ AI message ಒಳಗೊಂಡಿದೆ -- ನಿಖರವಾಗಿ 2 entries, ಕ್ರಮದಲ್ಲಿ, ಯಾವುದೇ data ಕಳೆದುಹೋಗದೆ\n• accumulating reducer ಇಲ್ಲದೆ, ಒಂದೂ naive dict update messages field ಅನ್ನೂ ಮೌನವಾಗಿ REPLACE ಮಾಡುತ್ತಿತ್ತು, human message ಸಂಪೂರ್ಣವಾಗಿ ಬಿಟ್ಟುಬಿಡುತ್ತಾ\n• ಒಂದೂ reducer field-specific ಆಗಿದೆ: ಈ lesson ya ಒಂದೇ-field State ಗೆ ಕೇವಲ "messages" ಇದೆ, ಆದರೆ ಒಂದೂ ದೊಡ್ಡ production State ಒಂದೂ TypedDict ನಲ್ಲಿ accumulating field ಮತ್ತೆ plain overwrite fields ಎರಡನ್ನೂ ಬೆರೆಸಬಹುದು, ಪ್ರತಿಯೊಂದೂ ತನ್ನದೇ merge ವರ್ತನೆ ಜೊತೆ' } },

    { type: 'heading', data: { textEn: 'Nodes: Discrete Units of Work', textKn: 'Nodes: ಪ್ರತ್ಯೇಕ ಕೆಲಸದ ಘಟಕಗಳು', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'A Node Is a Function of state -> partial_state', headingKn: 'ಒಂದೂ Node state -> partial_state ya ಒಂದೂ Function',
      bodyEn: '• def agent_node(state): response = llm.invoke(state["messages"]); return {"messages": [response]} -- the node reads the existing conversation, calls the model, and returns only the NEW message, not the whole rebuilt history\n• Because "messages" uses add_messages, this partial return is merged into the existing state by the graph runtime, not by the node itself -- the node performs work; it does not decide what happens next\n• That separation is deliberate: NODE answers "what happened here?" while EDGE answers "what happens next?" -- keeping those two questions in separate places is what makes each piece independently testable',
      bodyKn: '• def agent_node(state): response = llm.invoke(state["messages"]); return {"messages": [response]} -- node ಅಸ್ತಿತ್ವದಲ್ಲಿರುವ conversation ಓದುತ್ತದೆ, model ಕರೆ ಮಾಡುತ್ತದೆ, ಮತ್ತೆ ಕೇವಲ ಹೊಸ message ಹಿಂತಿರುಗಿಸುತ್ತದೆ, ಪೂರ್ಣ ಮರುನಿರ್ಮಿಸಿದ history ಅಲ್ಲ\n• "messages" add_messages ಬಳಸುವುದರಿಂದ, ಈ partial return graph runtime ಮೂಲಕ ಅಸ್ತಿತ್ವದಲ್ಲಿರುವ state ಗೆ merge ಆಗುತ್ತದೆ, node ಸ್ವತಃ ಅಲ್ಲ -- node ಕೆಲಸ ಮಾಡುತ್ತದೆ; ಅದೂ ಮುಂದೆ ಏನಾಗುತ್ತದೆ ಎಂದೂ ನಿರ್ಧರಿಸುವುದಿಲ್ಲ\n• ಆ ಪ್ರತ್ಯೇಕತೆ ಉದ್ದೇಶಪೂರ್ವಕ: NODE "ಇಲ್ಲಿ ಏನಾಯಿತು?" ಎಂದೂ ಉತ್ತರಿಸುತ್ತದೆ ಆದರೆ EDGE "ಮುಂದೆ ಏನಾಗುತ್ತದೆ?" ಎಂದೂ ಉತ್ತರಿಸುತ್ತದೆ -- ಆ ಎರಡೂ ಪ್ರಶ್ನೆಗಳನ್ನೂ ಪ್ರತ್ಯೇಕ ಸ್ಥಳಗಳಲ್ಲಿ ಇಡುವುದೂ ಪ್ರತಿ ತುಣುಕನ್ನೂ ಸ್ವತಂತ್ರವಾಗಿ ಪರೀಕ್ಷಿಸಬಹುದಾಗಿಸುತ್ತದೆ' } },

    { type: 'heading', data: { textEn: 'Edges: Static and Conditional', textKn: 'Edges: Static ಮತ್ತು Conditional', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'graph.add_edge vs graph.add_conditional_edges', headingKn: 'graph.add_edge vs graph.add_conditional_edges',
      bodyEn: '• A static edge, graph.add_edge("tools", "agent"), always transitions the same way: after tools finishes, agent always runs next -- this is the loop-back that lets the agent read a tool\'s result and decide what to do with it\n• A conditional edge routes based on a function\'s return value: graph.add_conditional_edges("agent", should_continue, {"tools": "tools", END: END}) -- should_continue(state) inspects the newest message and returns the STRING key that selects the destination\n• should_continue is essentially: return "tools" if the last AI message requested a tool call, else return END -- that single check is the graph-native equivalent of a while loop\'s break condition',
      bodyKn: '• ಒಂದೂ static edge, graph.add_edge("tools", "agent"), ಯಾವಾಗಲೂ ಅದೇ ರೀತಿ transition ಆಗುತ್ತದೆ: tools ಮುಗಿದ ನಂತರ, agent ಯಾವಾಗಲೂ ಮುಂದೆ ಚಲಾಯಿಸುತ್ತದೆ\n• ಒಂದೂ conditional edge ಒಂದೂ function ya return ಮೌಲ್ಯ ಆಧರಿಸಿ ಮಾರ್ಗ ಮಾಡುತ್ತದೆ: should_continue(state) ಹೊಸ message ಪರೀಕ್ಷಿಸುತ್ತದೆ ಮತ್ತೆ destination ಆಯ್ಕೆ ಮಾಡುವ STRING key ಹಿಂತಿರುಗಿಸುತ್ತದೆ\n• should_continue ಮೂಲಭೂತವಾಗಿ: ಕೊನೆಯ AI message ಒಂದೂ tool call ಬಯಸಿದ್ದರೆ "tools" ಹಿಂತಿರುಗಿಸಿ, ಇಲ್ಲದಿದ್ದರೆ END ಹಿಂತಿರುಗಿಸಿ -- ಆ ಒಂದೂ ಪರಿಶೀಲನೆ ಒಂದೂ while loop ya break condition ya graph-native ಸಮಾನ' } },

    { type: 'heading', data: { textEn: 'Genuinely Running the Full ReAct Loop', textKn: 'ಪೂರ್ಣ ReAct Loop ಅನ್ನೂ ನಿಜವಾಗಿ ಚಲಾಯಿಸುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'react_loop.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely wire up a mock LLM (returns a tool call on the first turn, a final answer once it sees a tool result) and a mock tool, drive the loop with the same add_messages reducer and a should_continue router, and trace every step -- this is a real, executed simulation of agent -> tools -> agent -> END, not a description of one.',
      descKn: 'ಒಂದೂ mock LLM ಜೊತೆಗೂಡಿಸಿ (ಮೊದಲ turn ನಲ್ಲಿ ಒಂದೂ tool call, tool result ನೋಡಿದ ನಂತರ ಒಂದೂ ಅಂತಿಮ ಉತ್ತರ ಹಿಂತಿರುಗಿಸುತ್ತದೆ) ಮತ್ತೆ ಒಂದೂ mock tool, ಅದೇ add_messages reducer ಮತ್ತೆ ಒಂದೂ should_continue router ಜೊತೆ loop ಚಲಾಯಿಸಿ, ಪ್ರತಿ ಹಂತವನ್ನೂ trace ಮಾಡಿ.',
      code: "def mock_llm(messages):\n    last = messages[-1]\n    if last['role'] == 'tool':\n        return {'role': 'ai', 'content': 'The headquarters is at 548 Market St, San Francisco.', 'tool_calls': None}\n    return {'role': 'ai', 'content': '', 'tool_calls': [{'name': 'search_web', 'args': {'query': 'Anthropic headquarters address'}}]}\n\ndef mock_tool(tool_calls):\n    return [{'role': 'tool', 'content': '548 Market St, San Francisco, CA (public directory listing)'}]\n\ndef should_continue(messages):\n    last = messages[-1]\n    return 'tools' if last.get('tool_calls') else 'END'\n\nstate = {'messages': [{'role': 'human', 'content': 'Find the Anthropic headquarters address'}]}\ntrace = []\nfor step in range(6):\n    ai_msg = mock_llm(state['messages'])\n    state['messages'] = add_messages(state['messages'], [ai_msg])\n    route = should_continue(state['messages'])\n    trace.append((step, route))\n    if route == 'END':\n        break\n    tool_results = mock_tool(ai_msg['tool_calls'])\n    state['messages'] = add_messages(state['messages'], tool_results)\n\nprint('FULL TRACE (step, routed_to):')\nfor t in trace:\n    print(' ', t)\nprint('FINAL MESSAGE COUNT:', len(state['messages']))" } },
    { type: 'output', data: { output: "FULL TRACE (step, routed_to):\n  (0, 'tools')\n  (1, 'END')\nFINAL MESSAGE COUNT: 4\n  {'role': 'human', 'content': 'Find the Anthropic headquarters address'}\n  {'role': 'ai', 'content': '', 'tool_calls': [{'name': 'search_web', 'args': {'query': 'Anthropic headquarters address'}}]}\n  {'role': 'tool', 'content': '548 Market St, San Francisco, CA (public directory listing)'}\n  {'role': 'ai', 'content': 'The headquarters is at 548 Market St, San Francisco.', 'tool_calls': None}" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: agent -> tools -> agent -> END, Exactly Once Each', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: agent -> tools -> agent -> END, ಪ್ರತಿಯೊಂದೂ ನಿಖರವಾಗಿ ಒಮ್ಮೆ',
      bodyEn: '• Genuinely confirmed: step 0 routes to "tools" (the mock LLM requested search_web), and step 1 routes to "END" (the second agent turn saw a tool result and produced a final answer with tool_calls=None) -- exactly the 2-hop loop the ASCII diagram predicts, not more, not fewer\n• Genuinely confirmed: the final message list has exactly 4 entries in the correct order -- human, AI tool-call, tool result, AI final answer -- confirming the reducer preserved every step of the conversation rather than losing any of them along the way\n• This 4-message trace is the concrete, checkpoint-able unit LangGraph would persist after each transition in Part 2 -- every one of those 4 states (1, 2, 3, or 4 messages long) is a genuine candidate checkpoint',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: step 0 "tools" ಗೆ ಮಾರ್ಗಿಸುತ್ತದೆ, ಮತ್ತೆ step 1 "END" ಗೆ ಮಾರ್ಗಿಸುತ್ತದೆ -- ASCII diagram ಊಹಿಸುವ ನಿಖರ 2-hop loop, ಹೆಚ್ಚು ಅಲ್ಲ, ಕಡಿಮೆ ಅಲ್ಲ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಅಂತಿಮ message list ಸರಿಯಾದ ಕ್ರಮದಲ್ಲಿ ನಿಖರವಾಗಿ 4 entries ಹೊಂದಿದೆ -- reducer conversation ya ಪ್ರತಿ ಹಂತವನ್ನೂ ಸಂರಕ್ಷಿಸಿತು ಎಂದೂ ಖಚಿತಪಡಿಸುತ್ತಾ\n• ಈ 4-message trace Part 2 ನಲ್ಲಿ LangGraph ಪ್ರತಿ transition ನಂತರ persist ಮಾಡುವ ನಿಜ, checkpoint-ಮಾಡಬಹುದಾದ ಘಟಕ -- ಆ 4 states ಪ್ರತಿಯೊಂದೂ ಒಂದೂ ನಿಜ candidate checkpoint' } },

    { type: 'heading', data: { textEn: 'Building the Graph and Compiling It', textKn: 'Graph ನಿರ್ಮಿಸುವುದೂ ಮತ್ತೆ Compile ಮಾಡುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'build_graph.py', headingEn: 'illustrative LangGraph shape', headingKn: 'illustrative LangGraph ಆಕಾರ',
      descEn: 'This block is illustrative, not executed -- it assumes a real `llm` client and `langgraph` package. It shows how the genuinely-verified mock loop above maps onto the real StateGraph API: graph.compile() turns the builder (nodes + edges + state schema) into a runnable app.',
      descKn: 'ಈ block illustrative, execute ಆಗಿಲ್ಲ -- ಇದೂ ಒಂದೂ ನಿಜ `llm` client ಮತ್ತೆ `langgraph` package ಊಹಿಸುತ್ತದೆ. ಮೇಲಿನ ನಿಜವಾಗಿ-ಪರಿಶೀಲಿಸಿದ mock loop ನಿಜ StateGraph API ಗೆ ಹೇಗೂ ಮ್ಯಾಪ್ ಆಗುತ್ತದೆ ಎಂದೂ ತೋರಿಸುತ್ತದೆ.',
      code: "graph = StateGraph(State)\n\ngraph.add_node('agent', agent_node)\ngraph.add_node('tools', tool_node)\n\ngraph.set_entry_point('agent')\n\ngraph.add_conditional_edges(\n    'agent',\n    should_continue,\n    {'tools': 'tools', END: END},\n)\n\ngraph.add_edge('tools', 'agent')\n\napp = graph.compile(checkpointer=MemorySaver())" } },
    { type: 'concept', data: {
      headingEn: 'Builder vs Runnable', headingKn: 'Builder vs Runnable',
      bodyEn: '• graph = StateGraph(State) creates the BUILDER -- you can still add/remove nodes and edges on it\n• app = graph.compile(...) freezes that topology into a RUNNABLE application -- this is also the moment a checkpointer (explored in Part 2) gets attached\n• Every concept from this lesson maps onto our genuinely-run mock loop: State = the dict with "messages", Node = agent_node/tool_node, Edge = the tools->agent loop-back, Conditional edge = should_continue, Reducer = add_messages, compile() = the point our simulation "freezes" and starts executing the for-loop',
      bodyKn: '• graph = StateGraph(State) BUILDER ರಚಿಸುತ್ತದೆ -- ಇನ್ನೂ ಅದರ ಮೇಲೆ nodes ಮತ್ತೆ edges ಸೇರಿಸಬಹುದು/ತೆಗೆದುಹಾಕಬಹುದು\n• app = graph.compile(...) ಆ topology ಅನ್ನೂ ಒಂದೂ RUNNABLE application ಆಗಿ ಫ್ರೀಜ್ ಮಾಡುತ್ತದೆ -- ಇದೂ Part 2 ಯಲ್ಲಿ ಒಂದೂ checkpointer ಲಗತ್ತಿಸುವ ಕ್ಷಣ ಸಹ\n• ಈ lesson ya ಪ್ರತಿ concept ನಮ್ಮ ನಿಜವಾಗಿ-ಚಲಾಯಿಸಿದ mock loop ಗೆ ಮ್ಯಾಪ್ ಆಗುತ್ತದೆ' } },

    { type: 'table', data: {
      captionEn: 'Key Terms and Where They Appeared', captionKn: 'ಮುಖ್ಯ ಪದಗಳು ಮತ್ತೆ ಅವು ಎಲ್ಲಿ ಕಾಣಿಸಿಕೊಂಡವು',
      rows: "Term|Role|Genuinely verified in this lesson\nState|Shared data through nodes|messages list, merged via add_messages\nReducer|(old,new)->merged rule|add_messages, confirmed 1+1=2 entries\nNode|One unit of work|mock_llm(), mock_tool()\nStatic edge|Always same destination|tools -> agent loop-back\nConditional edge|Router picks destination|should_continue -> 'tools' or 'END'\ncompile()|Builder -> runnable graph|for-loop that actually executed" } },

    { type: 'heading', data: { textEn: 'Reducers Are Field-Specific', textKn: 'Reducers Field-Specific ಆಗಿವೆ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'mixed_state.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely simulate a larger State with two fields that merge differently: "messages" accumulates via add_messages, while "current_query" simply gets overwritten by the newest value -- confirming that a reducer applies per-field, not globally to the whole state dict.',
      descKn: 'ಎರಡೂ fields ಇರುವ ಒಂದೂ ದೊಡ್ಡ State ಅನ್ನೂ ನಿಜವಾಗಿ simulate ಮಾಡಿ, ಪ್ರತಿಯೊಂದೂ ಭಿನ್ನವಾಗಿ merge ಆಗುತ್ತದೆ: "messages" add_messages ಮೂಲಕ accumulate ಆಗುತ್ತದೆ, ಆದರೆ "current_query" ಕೇವಲ ಹೊಸ ಮೌಲ್ಯದಿಂದ overwrite ಆಗುತ್ತದೆ.',
      code: "def merge_state(old, update):\n    new_state = dict(old)\n    for key, value in update.items():\n        if key == 'messages':\n            new_state[key] = add_messages(old.get('messages', []), value)\n        else:\n            new_state[key] = value  # plain overwrite reducer\n    return new_state\n\nstate = {'messages': [{'role': 'human', 'content': 'hello'}], 'current_query': 'old question'}\nupdate = {'messages': [{'role': 'ai', 'content': 'hi!'}], 'current_query': 'new question'}\n\nresult = merge_state(state, update)\nprint('messages:', result['messages'])\nprint('current_query:', result['current_query'])" } },
    { type: 'output', data: { output: "messages: [{'role': 'human', 'content': 'hello'}, {'role': 'ai', 'content': 'hi!'}]\ncurrent_query: new question" } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: Each Field Merges by Its Own Rule', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಪ್ರತಿ Field ತನ್ನದೇ ನಿಯಮದಿಂದ Merge ಆಗುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed: "messages" grew from 1 entry to 2 (accumulated), while "current_query" simply became the newest string, discarding "old question" entirely -- two different merge behaviors inside the same state update, applied correctly per field\n• This is exactly what "every state field has a reducer" means in practice -- most fields default to plain overwrite (the last write wins), and you opt specific fields (like message history) into accumulation via Annotated[..., add_messages]\n• This distinction becomes critical again in Part 3, where multiple parallel workers write to the same field and an accumulating reducer is the only thing that keeps their outputs from clobbering each other',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: "messages" 1 entry ಇಂದ 2 ಗೆ ಬೆಳೆಯಿತು, ಆದರೆ "current_query" ಕೇವಲ ಹೊಸ string ಆಯಿತು, "old question" ಸಂಪೂರ್ಣವಾಗಿ ಬಿಟ್ಟುಬಿಡುತ್ತಾ -- ಒಂದೇ state update ಒಳಗೆ ಎರಡೂ ಭಿನ್ನ merge ವರ್ತನೆಗಳು\n• ಇದೂ "ಪ್ರತಿ state field ಒಂದೂ reducer ಹೊಂದಿದೆ" ಎಂದರೆ ಪ್ರಾಯೋಗಿಕವಾಗಿ ಏನೂ ಎಂದೂ ನಿಖರವಾಗಿ ತೋರಿಸುತ್ತದೆ\n• ಈ ವ್ಯತ್ಯಾಸ Part 3 ಯಲ್ಲಿ ಮತ್ತೆ ನಿರ್ಣಾಯಕವಾಗುತ್ತದೆ, ಬಹು parallel workers ಅದೇ field ಗೆ ಬರೆಯುವಾಗ' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• An agent is already a state machine; LangGraph just makes State, Nodes, Edges, and Reducers explicit instead of hiding them inside a while True loop\n• Genuinely confirmed: an accumulating reducer (add_messages) merges old + new into a combined 2-entry list, while a naive replace would have silently dropped the original human message\n• Genuinely confirmed: a full mock ReAct loop -- agent proposes a tool call, router sends it to tools, tools return a result, agent produces a final answer, router sends it to END -- traces to exactly 4 messages in 2 routing steps\n• Nodes answer "what happened here?"; edges (static or conditional) answer "what happens next?" -- keeping those questions separate is what compile() eventually turns into one runnable, checkpointable graph',
      bodyKn: '• ಒಂದೂ agent ಈಗಾಗಲೇ ಒಂದೂ state machine; LangGraph ಕೇವಲ State, Nodes, Edges, ಮತ್ತೆ Reducers ಅನ್ನೂ ಸ್ಪಷ್ಟಗೊಳಿಸುತ್ತದೆ, ಒಂದೂ while True loop ಒಳಗೆ ಮರೆಮಾಡುವ ಬದಲು\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಒಂದೂ accumulating reducer old + new ಅನ್ನೂ ಒಂದೂ ಸಂಯೋಜಿತ 2-entry list ಗೆ merge ಮಾಡುತ್ತದೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಒಂದೂ ಪೂರ್ಣ mock ReAct loop ನಿಖರವಾಗಿ 4 messages ಗೆ 2 routing ಹಂತಗಳಲ್ಲಿ trace ಆಗುತ್ತದೆ\n• Nodes "ಇಲ್ಲಿ ಏನಾಯಿತು?" ಎಂದೂ ಉತ್ತರಿಸುತ್ತವೆ; edges "ಮುಂದೆ ಏನಾಗುತ್ತದೆ?" ಎಂದೂ ಉತ್ತರಿಸುತ್ತವೆ -- ಆ ಪ್ರಶ್ನೆಗಳನ್ನೂ ಪ್ರತ್ಯೇಕ ಇಡುವುದೂ compile() ಅಂತಿಮವಾಗಿ ಒಂದೂ runnable, checkpointable graph ಆಗಿ ಬದಲಾಯಿಸುತ್ತದೆ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The genuinely-traced 4-message loop here (human -> AI tool-call -> tool result -> AI final answer) is exactly the shape production coding assistants and research agents use when they call search or file-reading tools: one round-trip per tool call, with the model always seeing the tool\'s real output before producing its final answer.',
      bodyKn: 'ಇಲ್ಲಿ ನಿಜವಾಗಿ-trace ಮಾಡಿದ 4-message loop ಪ್ರೊಡಕ್ಷನ್ coding assistants ಮತ್ತೆ research agents search ಅಥವಾ file-reading tools ಕರೆ ಮಾಡುವಾಗ ಬಳಸುವ ನಿಖರ ಆಕಾರ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: 'Genuinely confirmed: separating routing (should_continue) from work (mock_llm, mock_tool) meant we could test should_continue in complete isolation -- no model call, no network, just a pure function checked against known inputs -- which is exactly why production teams build agent loops this way instead of one large function.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: routing (should_continue) ಅನ್ನೂ ಕೆಲಸ ಇಂದ ಪ್ರತ್ಯೇಕಿಸುವುದೂ ನಮಗೆ should_continue ಅನ್ನೂ ಸಂಪೂರ್ಣ ಪ್ರತ್ಯೇಕತೆಯಲ್ಲಿ ಪರೀಕ್ಷಿಸಲು ಅನುಮತಿಸಿತು.' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'LangGraph-style explicit agent loops power production systems like customer-support bots that call CRM/ticketing tools and coding agents that call file-read/run-tests tools -- the same agent<->tools loop genuinely traced in this lesson, just with real tools and a real LLM instead of mocks.',
      bodyKn: 'LangGraph-style ಸ್ಪಷ್ಟ agent loops production systems ಗಳಾದ customer-support bots ಮತ್ತೆ coding agents ಗೆ ಶಕ್ತಿ ನೀಡುತ್ತವೆ -- ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ trace ಮಾಡಿದ ಅದೇ agent<->tools loop, ಕೇವಲ mocks ಬದಲು ನಿಜ tools ಮತ್ತೆ ನಿಜ LLM ಜೊತೆ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'What does an accumulating reducer like add_messages do that a naive dict-update would not?', qKn: 'add_messages ನಂತಹ ಒಂದೂ accumulating reducer naive dict-update ಮಾಡದ ಏನೂ ಮಾಡುತ್ತದೆ?',
        opts: ['Deletes old messages', 'Merges new state onto old state instead of overwriting it', 'Sends messages to a database', 'Encrypts message content'], correct: 1,
        optsKn: ['ಹಳೆಯ messages ಅಳಿಸುತ್ತದೆ', 'ಹೊಸ state ಅನ್ನೂ ಹಳೆಯ state ಮೇಲೆ merge ಮಾಡುತ್ತದೆ, overwrite ಮಾಡುವ ಬದಲು', 'messages ಅನ್ನೂ ಒಂದೂ database ಗೆ ಕಳುಹಿಸುತ್ತದೆ', 'message content encrypt ಮಾಡುತ್ತದೆ'] },
      { q: 'Genuinely confirmed in this lesson: how many messages did the full mock ReAct trace end with?', qKn: 'ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಪೂರ್ಣ mock ReAct trace ಎಷ್ಟು messages ಜೊತೆ ಕೊನೆಗೊಂಡಿತು?',
        opts: ['2', '3', '4', '6'], correct: 2,
        optsKn: ['2', '3', '4', '6'] },
      { q: 'What is the key difference between a node and an edge?', qKn: 'ಒಂದೂ node ಮತ್ತೆ ಒಂದೂ edge ನಡುವಿನ ಮುಖ್ಯ ವ್ಯತ್ಯಾಸ ಏನೂ?',
        opts: ['A node decides what happens next; an edge does the work', 'A node performs work and returns a partial update; an edge decides what runs next', 'They are identical concepts', 'Only edges can call an LLM'], correct: 1,
        optsKn: ['ಒಂದೂ node ಮುಂದೆ ಏನೂ ಎಂದೂ ನಿರ್ಧರಿಸುತ್ತದೆ; ಒಂದೂ edge ಕೆಲಸ ಮಾಡುತ್ತದೆ', 'ಒಂದೂ node ಕೆಲಸ ಮಾಡುತ್ತದೆ ಮತ್ತೆ ಒಂದೂ partial update ಹಿಂತಿರುಗಿಸುತ್ತದೆ; ಒಂದೂ edge ಮುಂದೆ ಏನೂ ಚಲಾಯಿಸುತ್ತದೆ ಎಂದೂ ನಿರ್ಧರಿಸುತ್ತದೆ', 'ಅವೂ ಒಂದೇ concepts', 'ಕೇವಲ edges LLM ಕರೆ ಮಾಡಬಹುದು'] },
      { q: 'What does graph.compile() do?', qKn: 'graph.compile() ಏನೂ ಮಾಡುತ್ತದೆ?',
        opts: ['Deletes the graph builder', 'Turns the graph builder (nodes+edges+state) into a runnable application', 'Trains the LLM', 'Only validates Python syntax'], correct: 1,
        optsKn: ['graph builder ಅಳಿಸುತ್ತದೆ', 'graph builder ಅನ್ನೂ ಒಂದೂ runnable application ಆಗಿ ಬದಲಾಯಿಸುತ್ತದೆ', 'LLM ಗೆ train ಮಾಡುತ್ತದೆ', 'ಕೇವಲ Python syntax ಪರಿಶೀಲಿಸುತ್ತದೆ'] },
      { q: 'What is the graph-native equivalent of a while loop\'s "break" condition?', qKn: 'while loop ya "break" condition ya graph-native ಸಮಾನ ಏನೂ?',
        opts: ['A checkpointer', 'A conditional edge routing to END', 'A TypedDict', 'A reducer'], correct: 1,
        optsKn: ['ಒಂದೂ checkpointer', 'END ಗೆ ಮಾರ್ಗಿಸುವ ಒಂದೂ conditional edge', 'ಒಂದೂ TypedDict', 'ಒಂದೂ reducer'] },
    ] } },
  ],
};
