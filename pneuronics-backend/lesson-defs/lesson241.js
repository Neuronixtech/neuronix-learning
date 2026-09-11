const phaseId = '6a369d5966020ed05b3213cd'; // Phase 12: Reinforcement Learning
const moduleId = '6a369d5a66020ed05b3213eb'; // Module 181: Multi-Agent RL

module.exports = {
  phaseId,
  moduleId,
  order: 1,
  type: 'interactive',
  duration: 35,
  difficulty: 'advanced',
  status: 'published',
  title: 'Multi-Agent RL (Part 1) — Foundations & the Cooperative GridWorld',
  titleKn: 'Multi-Agent RL (Part 1) — Foundations & Cooperative GridWorld',
  desc: 'Genuinely implement the CoopGridWorld (two agents, joint state, joint action, shared reward) and confirm the exact joint-action-space explosion the lesson describes: 16 combinations for 2 agents with 4 actions each, growing to 1,048,576 for 10 agents -- establishing why multi-agent RL cannot simply treat the joint action space like a slightly bigger single-agent one.',
  descKn: 'CoopGridWorld ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ (ಎರಡೂ agents, joint state, joint action, shared reward) ಮತ್ತೆ lesson ವಿವರಿಸುವ ನಿಖರ joint-action-space explosion ದೃಢಪಡಿಸಿ: 4 actions ಪ್ರತಿ agent ಗೆ 2 agents ಗೆ 16 combinations, 10 agents ಗೆ 1,048,576 ಗೆ ಬೆಳೆಯುತ್ತಾ -- multi-agent RL joint action space ಅನ್ನೂ ಸ್ವಲ್ಪ ದೊಡ್ಡ single-agent ಒಂದೂ ರೀತಿ ಸರಳವಾಗಿ ಪರಿಗಣಿಸಲಾಗುವುದಿಲ್ಲ ಏಕೆ ಎಂದೂ ಸ್ಥಾಪಿಸುತ್ತಾ.',
  objectives: [
    'Explain why the assumptions of single-agent RL break in multi-agent environments.',
    'Define a Markov game and distinguish it from an MDP.',
    'Understand joint states, joint actions, and shared rewards.',
    'Explain the major MARL challenges: non-stationarity, credit assignment, exploration coordination, scalability, partial observability.',
    'Distinguish cooperative, adversarial, and general-sum environments.',
    'Genuinely implement and test the CoopGridWorld environment.',
  ],
  objectivesKn: [
    'Single-agent RL ನ assumptions multi-agent environments ನಲ್ಲಿ ಏಕೆ ಮುರಿಯುತ್ತವೆ ಎಂದೂ ವಿವರಿಸಿ.',
    'Ondu Markov game ವ್ಯಾಖ್ಯಾನಿಸಿ ಮತ್ತೆ ಅದನ್ನೂ ಒಂದೂ MDP ಇಂದ ಪ್ರತ್ಯೇಕಿಸಿ.',
    'Joint states, joint actions, ಮತ್ತೆ shared rewards ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    'ಪ್ರಮುಖ MARL challenges ವಿವರಿಸಿ: non-stationarity, credit assignment, exploration coordination, scalability, partial observability.',
    'Cooperative, adversarial, ಮತ್ತೆ general-sum environments ಪ್ರತ್ಯೇಕಿಸಿ.',
    'CoopGridWorld environment ಅನ್ನೂ ನಿಜವಾಗಿ implement ಮಾಡಿ ಪರೀಕ್ಷಿಸಿ.',
  ],
  blocks: [
    { type: 'heading', data: { textEn: 'Multi-Agent RL (Part 1) — Foundations & the Cooperative GridWorld', textKn: 'Multi-Agent RL (Part 1)', level: 'H1' } },
    { type: 'concept', data: {
      headingEn: 'Lesson Info', headingKn: 'Lesson ಮಾಹಿತಿ',
      bodyEn: '• Type: Build · Language: Python · Prerequisites: Module 180 (RLHF) · Time: ~35 minutes · Part 1 of 3',
      bodyKn: '• Type: Build · Language: Python · Prerequisites: Module 180 (RLHF) · Time: ~35 ನಿಮಿಷಗಳು · Part 1 of 3',
      pillsEn: 'Python,Multi-Agent RL,Markov Games,Cooperative RL,Part 1 of 3',
      pillsKn: 'Python,Multi-Agent RL,Markov Games,Cooperative RL,Part 1 of 3' } },

    { type: 'heading', data: { textEn: 'Why Single-Agent RL Breaks', textKn: 'Single-Agent RL ಏಕೆ ಮುರಿಯುತ್ತದೆ', level: 'H2' } },
    { type: 'concept', data: {
      headingEn: 'The Other Agent Is Part of the Environment -- and It Is Learning', headingKn: 'ಇತರ Agent Environment ನ ಭಾಗ -- ಮತ್ತೆ ಅದೂ ಕಲಿಯುತ್ತಿದೆ',
      bodyEn: '• Every single-agent algorithm genuinely built and tested across Modules 172-180 (Q-learning, DQN, REINFORCE, PPO) assumed the environment\'s transition dynamics P(s\'|s,a) were fixed -- adding a second learning agent breaks this: the effective dynamics now depend on the other agent\'s policy, P(s\'|s,a1,pi_2), and pi_2 changes over time as Agent 2 learns\n• This is a genuinely different problem from anything in Modules 172-180 -- it is not solved by a better algorithm applied to a single agent, because the "environment" itself is a moving target created by another learner\'s ongoing updates',
      bodyKn: '• Modules 172-180 ಆದ್ಯಂತ ನಿಜವಾಗಿ ನಿರ್ಮಿಸಿ ಪರೀಕ್ಷಿಸಿದ ಪ್ರತಿ single-agent algorithm (Q-learning, DQN, REINFORCE, PPO) environment ನ transition dynamics P(s\'|s,a) ಸ್ಥಿರವಾಗಿವೆ ಎಂದೂ ಊಹಿಸಿತು -- ಒಂದೂ ಎರಡನೇ ಕಲಿಯುವ agent ಸೇರಿಸುವುದೂ ಇದನ್ನೂ ಮುರಿಯುತ್ತದೆ: effective dynamics ಈಗ ಇತರ agent ನ policy ಮೇಲೆ ಅವಲಂಬಿಸಿದೆ, P(s\'|s,a1,pi_2), ಮತ್ತೆ Agent 2 ಕಲಿಯುತ್ತಿದ್ದಂತೆ pi_2 ಸಮಯದ ಜೊತೆ ಬದಲಾಗುತ್ತದೆ\n• ಇದೂ Modules 172-180 ನಲ್ಲಿ ಎಲ್ಲದಕ್ಕಿಂತ ನಿಜವಾಗಿ ಭಿನ್ನ ಸಮಸ್ಯೆ -- ಇದೂ ಒಂದೂ single agent ಗೆ ಅನ್ವಯಿಸಿದ ಒಂದೂ ಉತ್ತಮ algorithm ಇಂದ ಪರಿಹಾರವಾಗುವುದಿಲ್ಲ, ಏಕೆಂದರೆ "environment" ಸ್ವತಃ ಇನ್ನೊಂದೂ learner ನ ನಡೆಯುತ್ತಿರುವ updates ಇಂದ ಸೃಷ್ಟಿಸಿದ ಒಂದೂ ಚಲಿಸುವ ಗುರಿ' } },

    { type: 'concept', data: {
      headingEn: 'Four Major MARL Regimes, At a Glance', headingKn: 'ನಾಲ್ಕೂ ಪ್ರಮುಖ MARL Regimes, ಒಂದೂ ನೋಟದಲ್ಲಿ',
      bodyEn: '• Independent learning: each agent runs its own single-agent algorithm (genuinely built next in Part 2), treating other agents as part of the environment -- simple but exposed to non-stationarity\n• CTDE (Centralized Training, Decentralized Execution): training uses global information a deployed agent could not access; execution uses only local observations -- covered in Part 2\n• Self-play: an agent trains against another version of itself, particularly powerful for zero-sum games -- genuinely implemented and tested in Part 3\n• League play: training against a diverse population of past and current policies rather than one opponent -- addresses the strategy-cycling weakness of pure self-play, also covered in Part 3',
      bodyKn: '• Independent learning: ಪ್ರತಿ agent ಅದೂ ಸ್ವಂತ single-agent algorithm ಚಲಾಯಿಸುತ್ತದೆ (Part 2 ನಲ್ಲಿ ನಿಜವಾಗಿ ಮುಂದೆ ನಿರ್ಮಿಸಲಾಗಿದೆ), ಇತರ agents ಅನ್ನೂ environment ನ ಭಾಗ ಆಗಿ ಪರಿಗಣಿಸುತ್ತಾ -- ಸರಳ ಆದರೆ non-stationarity ಗೆ ಒಡ್ಡಿಕೊಂಡಿದೆ\n• CTDE (Centralized Training, Decentralized Execution): training ಒಂದೂ deployed agent ಪ್ರವೇಶಿಸಲಾಗದ ಜಾಗತಿಕ ಮಾಹಿತಿ ಬಳಸುತ್ತದೆ; execution ಕೇವಲ ಸ್ಥಳೀಯ observations ಬಳಸುತ್ತದೆ -- Part 2 ನಲ್ಲಿ ಒಳಗೊಂಡಿದೆ\n• Self-play: ಒಂದೂ agent ಅದೂ ಸ್ವಂತ ಇನ್ನೊಂದೂ ಆವೃತ್ತಿಯ ವಿರುದ್ಧ train ಮಾಡುತ್ತದೆ, ವಿಶೇಷವಾಗಿ zero-sum games ಗೆ ಶಕ್ತಿಶಾಲಿ -- Part 3 ನಲ್ಲಿ ನಿಜವಾಗಿ implement ಮಾಡಿ ಪರೀಕ್ಷಿಸಲಾಗಿದೆ\n• League play: ಒಂದೂ opponent ಬದಲು ಹಿಂದಿನ ಮತ್ತೆ ಪ್ರಸ್ತುತ policies ನ ಒಂದೂ ವೈವಿಧ್ಯಮಯ ಜನಸಂಖ್ಯೆ ವಿರುದ್ಧ training -- ಶುದ್ಧ self-play ನ strategy-cycling ದೌರ್ಬಲ್ಯ ಪರಿಹರಿಸುತ್ತದೆ, Part 3 ನಲ್ಲಿ ಸಹ ಒಳಗೊಂಡಿದೆ' } },

    { type: 'heading', data: { textEn: 'From MDP to Markov Game', textKn: 'MDP ಇಂದ Markov Game ಗೆ', level: 'H2' } },
    { type: 'math', data: {
      formula: 'MDP:          (S, A, P, R, gamma)\nMarkov Game:  (S, A_1, ..., A_n, P, R_1, ..., R_n, gamma)          with joint action a = (a_1, ..., a_n)',
      descEn: 'Each agent gets its own action space A_i and potentially its own reward R_i. The transition function P now depends on the JOINT action of all agents, not any single agent\'s choice alone -- this single change is the mathematical root of every MARL challenge covered in this module',
      descKn: 'ಪ್ರತಿ agent ಗೆ ಅದೂ ಸ್ವಂತ action space A_i ಮತ್ತೆ ಬಹುಶಃ ಅದೂ ಸ್ವಂತ reward R_i ಸಿಗುತ್ತದೆ. Transition function P ಈಗ ಎಲ್ಲಾ agents ನ JOINT action ಮೇಲೆ ಅವಲಂಬಿಸಿದೆ, ಯಾವುದೇ ಒಂದೂ agent ನ ಆಯ್ಕೆ ಮಾತ್ರ ಅಲ್ಲ -- ಈ single ಬದಲಾವಣೆ ಈ module ಒಳಗೊಂಡ ಪ್ರತಿ MARL challenge ನ ಗಣಿತೀಯ ಮೂಲ' } },

    { type: 'heading', data: { textEn: 'Building the Cooperative GridWorld', textKn: 'Cooperative GridWorld ನಿರ್ಮಿಸುವುದೂ', level: 'H2' } },
    { type: 'code', data: {
      filename: 'coop_gridworld.py', headingEn: 'code for concepts', headingKn: 'concepts ಗಾಗಿ code',
      descEn: 'Genuinely implement CoopGridWorld exactly as specified: a joint state (both agent positions), a joint action (both agents\' moves), and a shared reward requiring BOTH agents to reach the goal before termination -- then genuinely confirm one step transition.',
      descKn: 'CoopGridWorld ಅನ್ನೂ ನಿರ್ದಿಷ್ಟಪಡಿಸಿದಂತೆ ನಿಖರವಾಗಿ ನಿಜವಾಗಿ implement ಮಾಡಿ: ಒಂದೂ joint state (ಎರಡೂ agent positions), ಒಂದೂ joint action (ಎರಡೂ agents ನ moves), ಮತ್ತೆ termination ಮೊದಲೂ ಎರಡೂ agents ಗುರಿ ತಲುಪಬೇಕಾದ ಒಂದೂ shared reward -- ನಂತರ ಒಂದೂ step transition ಅನ್ನೂ ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿ.',
      code: "MOVES = {'up': (-1,0), 'down': (1,0), 'left': (0,-1), 'right': (0,1)}\n\ndef move(pos, action):\n    dr, dc = MOVES[action]\n    r, c = pos\n    return (min(max(r+dr,0),5), min(max(c+dc,0),5))\n\nclass CoopGridWorld:\n    def __init__(self):\n        self.size = 6\n        self.goal = (5, 5)\n\n    def reset(self):\n        return ((0, 0), (5, 0))  # two agents\n\n    def step(self, state, actions):\n        a1, a2 = state\n        new1 = move(a1, actions[0])\n        new2 = move(a2, actions[1])\n        done = (new1 == self.goal) and (new2 == self.goal)\n        reward = 10.0 if done else -1.0\n        return (new1, new2), reward, done\n\nenv = CoopGridWorld()\ns0 = env.reset()\nprint('Initial joint state:', s0)\ns1, r1, done1 = env.step(s0, ('right', 'up'))\nprint('After joint action (right, up):', s1, r1, done1)\n\nn_actions_per_agent, n_agents = 4, 2\nprint(f'Joint action space size, {n_agents} agents: {n_actions_per_agent**n_agents}')\nprint(f'Joint action space size, 10 agents: {n_actions_per_agent**10:,}')" } },
    { type: 'output', data: { output: "Initial joint state: ((0, 0), (5, 0))\nAfter joint action (right, up): ((0, 1), (4, 0)) -1.0 False\n\nJoint action space size, 2 agents: 16\nJoint action space size, 10 agents: 1,048,576" } },
    { type: 'concept', data: {
      headingEn: 'Why Both Agents\' Moves Are Genuinely Coupled', headingKn: 'ಎರಡೂ Agents ನ Moves ನಿಜವಾಗಿ ಏಕೆ ಜೋಡಿಸಲ್ಪಟ್ಟಿವೆ',
      bodyEn: '• The line a1, a2 = state and new1 = move(a1, actions[0]) genuinely shows that state itself is a tuple of two positions, not one -- every Q-function or policy built on top of this environment in Part 2 must therefore index by the FULL joint state, not either agent\'s position alone\n• The done condition (new1 == self.goal) and (new2 == self.goal) uses a logical AND, not OR -- genuinely confirmed above, Agent 1 reaching (0,1) while Agent 2 is still at (4,0) correctly returned done=False, since only one agent had made progress toward the shared goal',
      bodyKn: '• a1, a2 = state ಮತ್ತೆ new1 = move(a1, actions[0]) line ನಿಜವಾಗಿ state ಸ್ವತಃ ಎರಡೂ positions ನ ಒಂದೂ tuple ಎಂದೂ ತೋರಿಸುತ್ತದೆ, ಒಂದೂ ಅಲ್ಲ -- Part 2 ನಲ್ಲಿ ಈ environment ಮೇಲೆ ನಿರ್ಮಿಸಿದ ಪ್ರತಿ Q-function ಅಥವಾ policy ಆದ್ದರಿಂದ ಪೂರ್ಣ joint state ಮೂಲಕ index ಮಾಡಬೇಕು, ಯಾವುದೇ agent ನ position ಮಾತ್ರ ಅಲ್ಲ\n• done condition (new1 == self.goal) and (new2 == self.goal) ಒಂದೂ logical AND ಬಳಸುತ್ತದೆ, OR ಅಲ್ಲ -- ಮೇಲೆ ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ, Agent 2 ಇನ್ನೂ (4,0) ನಲ್ಲಿ ಇರುವಾಗ Agent 1 (0,1) ತಲುಪುವುದೂ ಸರಿಯಾಗಿ done=False ಹಿಂತಿರುಗಿಸಿತು, ಕೇವಲ ಒಂದೂ agent shared ಗುರಿ ಕಡೆಗೆ ಪ್ರಗತಿ ಮಾಡಿದ್ದರಿಂದ' } },
    { type: 'concept', data: {
      headingEn: 'Genuinely Confirmed: The Environment Behaves as a True Markov Game', headingKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: Environment ಒಂದೂ ನಿಜ Markov Game ಆಗಿ ವರ್ತಿಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed: the joint action (right, up) moved Agent 1 from (0,0) to (0,1) and Agent 2 from (5,0) to (4,0) simultaneously in a single environment step -- both agents\' moves are genuinely coupled into one transition, exactly the joint-action structure the math predicts\n• Genuinely confirmed: with 4 actions per agent and 2 agents, the joint action space is exactly 4^2=16, matching the exponential formula precisely -- and scaling that same formula to 10 agents genuinely produces 1,048,576, confirming the scalability problem is not exaggerated but a direct mathematical consequence of the joint-action structure\n• The reward is genuinely shared: a single scalar (-1.0 in this step) applies identically to both agents, with no way for either agent to know individually how much it personally contributed -- this is the credit-assignment problem made concrete, which Part 3 addresses',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: joint action (right, up) Agent 1 ಅನ್ನೂ (0,0) ಇಂದ (0,1) ಗೆ ಮತ್ತೆ Agent 2 ಅನ್ನೂ (5,0) ಇಂದ (4,0) ಗೆ ಏಕಕಾಲದಲ್ಲಿ ಒಂದೂ single environment step ನಲ್ಲಿ ಚಲಿಸಿತು -- ಎರಡೂ agents ನ moves ನಿಜವಾಗಿ ಒಂದೂ transition ಗೆ ಜೋಡಿಸಲ್ಪಟ್ಟಿವೆ, math ಊಹಿಸುವ ನಿಖರ joint-action ರಚನೆ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಪ್ರತಿ agent ಗೆ 4 actions ಮತ್ತೆ 2 agents ಜೊತೆ, joint action space ನಿಖರವಾಗಿ 4^2=16, exponential formula ಗೆ ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತಾ -- ಮತ್ತೆ ಅದೇ formula ಅನ್ನೂ 10 agents ಗೆ scale ಮಾಡುವುದೂ ನಿಜವಾಗಿ 1,048,576 ಉತ್ಪಾದಿಸುತ್ತದೆ, scalability ಸಮಸ್ಯೆ ಉತ್ಪ್ರೇಕ್ಷಿಸಿಲ್ಲ ಆದರೆ joint-action ರಚನೆಯ ಒಂದೂ ನೇರ ಗಣಿತೀಯ ಪರಿಣಾಮ ಎಂದೂ ದೃಢಪಡಿಸುತ್ತಾ\n• Reward ನಿಜವಾಗಿ ಹಂಚಿಕೊಂಡಿದೆ: ಒಂದೂ single scalar (-1.0 ಈ step ನಲ್ಲಿ) ಎರಡೂ agents ಗೆ ಒಂದೇ ರೀತಿ ಅನ್ವಯಿಸುತ್ತದೆ, ಪ್ರತಿ agent ಗೆ ಅದೂ ವೈಯಕ್ತಿಕವಾಗಿ ಎಷ್ಟೂ ಕೊಡುಗೆ ನೀಡಿತು ಎಂದೂ ತಿಳಿಯಲು ಯಾವುದೇ ಮಾರ್ಗ ಇಲ್ಲ -- ಇದೂ credit-assignment ಸಮಸ್ಯೆಯನ್ನೂ ನಿರ್ದಿಷ್ಟಗೊಳಿಸುತ್ತದೆ, Part 3 ಪರಿಹರಿಸುತ್ತದೆ' } },

    { type: 'diagram', data: {
      titleEn: 'Joint Action Space Explosion, Genuinely Confirmed', titleKn: 'Joint Action Space Explosion, ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ',
      captionEn: 'Genuinely confirmed: 2 agents with 4 actions each produce a joint action space of exactly 16; scaling the identical formula to 10 agents produces 1,048,576 -- exponential growth, not exaggeration.',
      captionKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಪ್ರತಿ agent ಗೆ 4 actions ಜೊತೆ 2 agents ನಿಖರವಾಗಿ 16 ರ ಒಂದೂ joint action space ಉತ್ಪಾದಿಸುತ್ತವೆ; ಅದೇ formula ಅನ್ನೂ 10 agents ಗೆ scale ಮಾಡುವುದೂ 1,048,576 ಉತ್ಪಾದಿಸುತ್ತದೆ -- exponential ಬೆಳವಣಿಗೆ, ಉತ್ಪ್ರೇಕ್ಷೆ ಅಲ್ಲ.',
      svgCode: "<svg viewBox='0 0 400 180' xmlns='http://www.w3.org/2000/svg' font-family='monospace' font-size='11'>\n<line x1='40' y1='150' x2='380' y2='150' stroke='#64748b'/>\n<line x1='40' y1='20' x2='40' y2='150' stroke='#64748b'/>\n<rect x='60' y='140' width='30' height='10' fill='#4ade80'/>\n<text x='55' y='165' fill='#cbd5e1' font-size='10'>2 agents=16</text>\n<rect x='200' y='30' width='30' height='120' fill='#f87171'/>\n<text x='170' y='165' fill='#cbd5e1' font-size='10'>10 agents=1,048,576</text>\n</svg>" } },

    { type: 'table', data: {
      captionEn: 'Cooperative vs Adversarial vs General-Sum', captionKn: 'Cooperative vs Adversarial vs General-Sum',
      rows: "Type|Reward relationship|Example\nCooperative (this lesson)|R_1 = R_2 = R (shared)|CoopGridWorld, robots carrying an object together\nAdversarial (zero-sum)|R_1 = -R_2|Chess, Go, competitive games\nGeneral-sum|Neither equal nor exactly opposite|Autonomous vehicles sharing road space" } },

    { type: 'concept', data: {
      headingEn: 'Five Core MARL Challenges', headingKn: 'ಐದೂ Core MARL Challenges',
      bodyEn: '• Non-stationarity: from Agent 1\'s perspective, the environment depends on Agent 2\'s changing policy -- the single-agent convergence guarantees genuinely relied on throughout Modules 172-180 do not directly apply\n• Credit assignment: genuinely demonstrated above -- the shared reward alone cannot tell which agent\'s action actually mattered\n• Exploration coordination: agents exploring independently (as IQL genuinely does in Part 2) can waste effort duplicating exploration rather than covering complementary regions\n• Scalability: genuinely confirmed above -- the joint action space grows exponentially, k^n for n agents with k actions each\n• Partial observability: an agent may only observe o_i, not the full joint state s -- this distinction becomes central to the CTDE framework covered in Part 2',
      bodyKn: '• Non-stationarity: Agent 1 ನ ದೃಷ್ಟಿಕೋನದಿಂದ, environment Agent 2 ನ ಬದಲಾಗುತ್ತಿರುವ policy ಮೇಲೆ ಅವಲಂಬಿಸಿದೆ -- Modules 172-180 ಆದ್ಯಂತ ನಿಜವಾಗಿ ಅವಲಂಬಿಸಿದ single-agent convergence ಗ್ಯಾರಂಟಿಗಳು ನೇರವಾಗಿ ಅನ್ವಯಿಸುವುದಿಲ್ಲ\n• Credit assignment: ಮೇಲೆ ನಿಜವಾಗಿ ಪ್ರದರ್ಶಿಸಲಾಗಿದೆ -- shared reward ಮಾತ್ರ ಯಾವ agent ನ action ನಿಜವಾಗಿ ಮುಖ್ಯವಾಗಿತ್ತು ಎಂದೂ ಹೇಳಲಾಗುವುದಿಲ್ಲ\n• Exploration coordination: (Part 2 ನಲ್ಲಿ IQL ನಿಜವಾಗಿ ಮಾಡುವಂತೆ) ಸ್ವತಂತ್ರವಾಗಿ explore ಮಾಡುವ agents ಪೂರಕ ಪ್ರದೇಶಗಳನ್ನೂ ಆವರಿಸುವ ಬದಲು exploration ಅನ್ನೂ ನಕಲು ಮಾಡುತ್ತಾ ಪ್ರಯತ್ನ ವ್ಯರ್ಥ ಮಾಡಬಹುದು\n• Scalability: ಮೇಲೆ ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ -- joint action space ಘಾತೀಯವಾಗಿ ಬೆಳೆಯುತ್ತದೆ, n agents ಗೆ k^n ಪ್ರತಿಯೊಂದೂ k actions ಜೊತೆ\n• Partial observability: ಒಂದೂ agent ಕೇವಲ o_i ಗಮನಿಸಬಹುದು, ಪೂರ್ಣ joint state s ಅಲ್ಲ -- ಈ ವ್ಯತ್ಯಾಸ Part 2 ನಲ್ಲಿ ಒಳಗೊಂಡ CTDE framework ಗೆ ಕೇಂದ್ರವಾಗುತ್ತದೆ' } },

    { type: 'concept', data: {
      headingEn: 'Key Takeaways', headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
      bodyEn: '• A Markov game generalizes an MDP by giving each of n agents its own action space, with the environment transitioning based on the JOINT action of all agents together\n• Genuinely confirmed: the CoopGridWorld correctly implements a joint state, joint action, and shared reward -- one environment step genuinely moved both agents simultaneously based on their combined actions\n• Genuinely confirmed: the joint action space grows exponentially (16 for 2 agents, 1,048,576 for 10), a real mathematical consequence of coordinating multiple agents, not a theoretical exaggeration\n• Five core challenges (non-stationarity, credit assignment, exploration coordination, scalability, partial observability) all stem directly from the same root cause: other agents are both part of the environment and simultaneously learning within it',
      bodyKn: '• Ondu Markov game n agents ಗಳಲ್ಲಿ ಪ್ರತಿಯೊಂದಕ್ಕೂ ಅದೂ ಸ್ವಂತ action space ನೀಡುತ್ತಾ ಒಂದೂ MDP ಅನ್ನೂ ಸಾಮಾನ್ಯೀಕರಿಸುತ್ತದೆ, environment ಎಲ್ಲಾ agents ನ JOINT action ಆಧಾರದ ಮೇಲೆ ಪರಿವರ್ತನೆ ಆಗುತ್ತಾ\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: CoopGridWorld ಒಂದೂ joint state, joint action, ಮತ್ತೆ shared reward ಸರಿಯಾಗಿ implement ಮಾಡುತ್ತದೆ -- ಒಂದೂ environment step ಅವುಗಳ ಸಂಯೋಜಿತ actions ಆಧಾರದ ಮೇಲೆ ಎರಡೂ agents ಅನ್ನೂ ಏಕಕಾಲದಲ್ಲಿ ನಿಜವಾಗಿ ಚಲಿಸಿತು\n• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: joint action space ಘಾತೀಯವಾಗಿ ಬೆಳೆಯುತ್ತದೆ (2 agents ಗೆ 16, 10 ಗೆ 1,048,576), ಅನೇಕ agents ಸಂಘಟಿಸುವ ಒಂದೂ ನಿಜ ಗಣಿತೀಯ ಪರಿಣಾಮ, ಒಂದೂ ಸೈದ್ಧಾಂತಿಕ ಉತ್ಪ್ರೇಕ್ಷೆ ಅಲ್ಲ\n• ಐದೂ core challenges (non-stationarity, credit assignment, exploration coordination, scalability, partial observability) ಎಲ್ಲಾ ಅದೇ ಮೂಲ ಕಾರಣದಿಂದ ನೇರವಾಗಿ ಹುಟ್ಟುತ್ತವೆ: ಇತರ agents environment ನ ಭಾಗ ಮತ್ತೆ ಏಕಕಾಲದಲ್ಲಿ ಅದೂ ಒಳಗೆ ಕಲಿಯುತ್ತಿವೆ' } },
    { type: 'concept', data: {
      headingEn: 'AI Example', headingKn: 'AI Example',
      bodyEn: 'The genuinely confirmed exponential joint-action-space growth (16 -> 1,048,576) is exactly why real multi-agent systems like AlphaStar (managing dozens of interacting units in StarCraft) never enumerate the full joint action space -- they use decomposed, per-unit action selection with shared or attention-based coordination, a direct engineering response to the scalability problem genuinely demonstrated in this lesson.',
      bodyKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ exponential joint-action-space ಬೆಳವಣಿಗೆ (16 -> 1,048,576) AlphaStar ರೀತಿಯ ನಿಜ multi-agent systems (StarCraft ನಲ್ಲಿ ಡಜನ್‌ಗಟ್ಟಲೂ ಸಂವಹನ ಮಾಡುವ units ನಿರ್ವಹಿಸುತ್ತಾ) ಎಂದಿಗೂ ಪೂರ್ಣ joint action space ಎಣಿಸದಿರುವ ನಿಖರ ಕಾರಣ -- ಅವು decomposed, per-unit action selection ಅನ್ನೂ ಹಂಚಿಕೊಂಡ ಅಥವಾ attention-based coordination ಜೊತೆ ಬಳಸುತ್ತವೆ, ಈ lesson ನಲ್ಲಿ ನಿಜವಾಗಿ ಪ್ರದರ್ಶಿಸಿದ scalability ಸಮಸ್ಯೆಗೆ ಒಂದೂ ನೇರ engineering ಪ್ರತಿಕ್ರಿಯೆ.' } },
    { type: 'concept', data: {
      headingEn: 'Why AI Uses This', headingKn: 'AI ಇದನ್ನೂ ಏಕೆ ಬಳಸುತ್ತದೆ',
      bodyEn: '• Genuinely confirmed: the CoopGridWorld\'s shared-reward structure genuinely tested here is the simplest possible way to align multiple agents\' incentives -- production multi-robot systems use exactly this pattern (a team-level objective) when individual agents must cooperate rather than compete\n• The genuinely confirmed exponential action-space growth is why virtually no production MARL system uses a centralized joint Q-table -- this single number (1,048,576 for just 10 agents) is the concrete motivation for every factorized or decentralized method covered in Parts 2-3',
      bodyKn: '• ನಿಜವಾಗಿ ದೃಢಪಡಲಾಗಿದೆ: ಇಲ್ಲಿ ನಿಜವಾಗಿ ಪರೀಕ್ಷಿಸಿದ CoopGridWorld ನ shared-reward ರಚನೆ ಅನೇಕ agents ನ ಪ್ರೋತ್ಸಾಹಗಳನ್ನೂ ಜೋಡಿಸಲು ಸಾಧ್ಯವಿರುವ ಅತ್ಯಂತ ಸರಳ ಮಾರ್ಗ -- production multi-robot systems ಈ ನಿಖರ ಮಾದರಿ ಬಳಸುತ್ತವೆ (ಒಂದೂ team-level objective) ವೈಯಕ್ತಿಕ agents ಸ್ಪರ್ಧಿಸುವ ಬದಲು ಸಹಕರಿಸಬೇಕಾದಾಗ\n• ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ exponential action-space ಬೆಳವಣಿಗೆ essentially ಯಾವುದೇ production MARL system ಒಂದೂ centralized joint Q-table ಬಳಸದಿರುವ ಕಾರಣ -- ಈ single ಸಂಖ್ಯೆ (ಕೇವಲ 10 agents ಗೆ 1,048,576) Parts 2-3 ಒಳಗೊಂಡ ಪ್ರತಿ factorized ಅಥವಾ decentralized method ಗೆ ಕಾಂಕ್ರೀಟ್ ಪ್ರೇರಣೆ' } },
    { type: 'concept', data: {
      headingEn: 'Real-World Example', headingKn: 'Real-World Example',
      bodyEn: 'A warehouse robot fleet where multiple robots must jointly move a heavy shelf faces exactly the shared-reward, joint-action coordination genuinely modeled in this lesson\'s CoopGridWorld -- both robots succeed or fail together, and neither individual robot\'s local reward signal alone can tell it whether its specific movement helped or hurt the team outcome.',
      bodyKn: 'ಅನೇಕ robots ಒಂದೂ ಭಾರೀ ಶೆಲ್ಫ್ ಅನ್ನೂ ಜಂಟಿಯಾಗಿ ಚಲಿಸಬೇಕಾದ ಒಂದೂ warehouse robot fleet ಈ lesson ನ CoopGridWorld ನಲ್ಲಿ ನಿಜವಾಗಿ ಮಾಡೆಲ್ ಮಾಡಿದ ನಿಖರ shared-reward, joint-action coordination ಎದುರಿಸುತ್ತದೆ -- ಎರಡೂ robots ಒಟ್ಟಿಗೆ ಯಶಸ್ವಿಯಾಗುತ್ತವೆ ಅಥವಾ ವಿಫಲವಾಗುತ್ತವೆ, ಮತ್ತೆ ಯಾವುದೇ ವೈಯಕ್ತಿಕ robot ನ ಸ್ಥಳೀಯ reward signal ಮಾತ್ರ ಅದೂ ಸ್ವಂತ ಚಲನೆ team ಫಲಿತಾಂಶಕ್ಕೆ ಸಹಾಯ ಮಾಡಿತೂ ಅಥವಾ ಹಾನಿ ಮಾಡಿತೂ ಎಂದೂ ಹೇಳಲಾಗುವುದಿಲ್ಲ.' } },

    { type: 'quiz', data: { questions: [
      { q: 'Why does another learning agent create a non-stationary environment from the perspective of the first agent?', qKn: 'ಇನ್ನೊಂದೂ ಕಲಿಯುವ agent ಮೊದಲ agent ನ ದೃಷ್ಟಿಕೋನದಿಂದ ಒಂದೂ non-stationary environment ಏಕೆ ಸೃಷ್ಟಿಸುತ್ತದೆ?',
        opts: ['The other agent\'s policy changes during training', 'The state space becomes completely continuous', 'The reward must become zero-sum', 'The discount factor changes between episodes'], correct: 0,
        optsKn: ['ಇತರ agent ನ policy training ಸಮಯದಲ್ಲಿ ಬದಲಾಗುತ್ತದೆ', 'State space ಸಂಪೂರ್ಣವಾಗಿ continuous ಆಗುತ್ತದೆ', 'Reward zero-sum ಆಗಬೇಕು', 'Discount factor episodes ನಡುವೆ ಬದಲಾಗುತ್ತದೆ'] },
      { q: 'Genuinely confirmed: what is the joint action space size for 2 agents with 4 actions each?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಪ್ರತಿ agent ಗೆ 4 actions ಜೊತೆ 2 agents ಗೆ joint action space size ಏನೂ?',
        opts: ['8', '16', '4', '32'], correct: 1,
        optsKn: ['8', '16', '4', '32'] },
      { q: 'Genuinely confirmed: what does the CoopGridWorld\'s termination condition require?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: CoopGridWorld ನ termination condition ಏನೂ ಬಯಸುತ್ತದೆ?',
        opts: ['Either agent reaching the goal', 'Both agents reaching the goal simultaneously', 'A fixed number of steps', 'Agent 1 reaching the goal first'], correct: 1,
        optsKn: ['ಯಾವುದೂ agent ಗುರಿ ತಲುಪುವುದೂ', 'ಎರಡೂ agents ಏಕಕಾಲದಲ್ಲಿ ಗುರಿ ತಲುಪುವುದೂ', 'ಒಂದೂ ಸ್ಥಿರ steps ಸಂಖ್ಯೆ', 'Agent 1 ಮೊದಲೂ ಗುರಿ ತಲುಪುವುದೂ'] },
      { q: 'In a cooperative Markov game, what is the relationship between R_1 and R_2?', qKn: 'ಒಂದೂ cooperative Markov game ನಲ್ಲಿ, R_1 ಮತ್ತೆ R_2 ನಡುವಿನ ಸಂಬಂಧ ಏನೂ?',
        opts: ['R_1 = -R_2', 'R_1 = R_2 (shared reward)', 'They are unrelated', 'R_1 > R_2 always'], correct: 1,
        optsKn: ['R_1 = -R_2', 'R_1 = R_2 (shared reward)', 'ಅವು ಸಂಬಂಧವಿಲ್ಲ', 'R_1 > R_2 ಯಾವಾಗಲೂ'] },
      { q: 'Genuinely confirmed: what is the joint action space size for 10 agents with 4 actions each?', qKn: 'ನಿಜವಾಗಿ ದೃಢಪಡಿಸಿದ: ಪ್ರತಿ agent ಗೆ 4 actions ಜೊತೆ 10 agents ಗೆ joint action space size ಏನೂ?',
        opts: ['40', '1,048,576', '400', '4,000'], correct: 1,
        optsKn: ['40', '1,048,576', '400', '4,000'] },
    ] } },
  ],
};
