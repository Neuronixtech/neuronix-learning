module.exports = {
  lessonId: '6a4e753c97de740611db5cbc',
  outFile: './lesson-defs/lesson316.js',
  fills: {
    b1: {
      headingKn: 'LEARNING OBJECTIVES',
      bodyKn: 'ಈ lesson ಪೂರ್ಣಗೊಳಿಸಿದ ನಂತರ, ನೀವು ಇವುಗಳನ್ನು ಮಾಡಲು ಸಾಧ್ಯವಾಗುತ್ತದೆ:\n\nself parameter ಅರ್ಥ ಮಾಡಿಕೊಳ್ಳಿ\nInstance methods ರಚಿಸಿ\n@staticmethod ಬಳಸಿ static methods ರಚಿಸಿ\n__init__() constructor ಬಳಸಿ\nಸಂಪೂರ್ಣ Python classes ಕಟ್ಟಿ',
    },
    b2: {
      headingKn: '1. self Parameter ಅರ್ಥ ಮಾಡಿಕೊಳ್ಳುವುದು',
      bodyKn: 'Python ನಲ್ಲಿ ಪ್ರತಿ object ಗೆ ತನ್ನನ್ನೇ ಉಲ್ಲೇಖಿಸಲು ಒಂದು ಮಾರ್ಗ ಬೇಕು. Python ಈ ಉದ್ದೇಶಕ್ಕಾಗಿ self parameter ಬಳಸುತ್ತದೆ.\n\nself ಅನ್ನು ಹೀಗೆ ಹೇಳುತ್ತಿದೆ ಎಂದು ಯೋಚಿಸಿ: "ನಾನು ಈ ನಿರ್ದಿಷ್ಟ object."\n\nನೀವು ಒಂದು object ಮೇಲೆ ಒಂದು method ಕರೆದಾಗ, Python ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಆ object ಅನ್ನು ಮೊದಲ argument (self) ಆಗಿ ರವಾನಿಸುತ್ತದೆ.',
    },
    b3: { headingKn: 'ಒಂದು method ಕರೆಯುವುದು — ಪರದೆಯ ಹಿಂದೆ self', descKn: 'Python ಆಂತರಿಕವಾಗಿ harry.getSalary() ಅನ್ನು Employee.getSalary(harry) ನಂತೆ ಪರಿಗಣಿಸುತ್ತದೆ. ಆದ್ದರಿಂದ self harry object ಅನ್ನು ಉಲ್ಲೇಖಿಸುತ್ತದೆ.' },
    b5: {
      headingKn: 'self ಏಕೆ ಅಗತ್ಯ?',
      bodyKn: 'ಇಬ್ಬರು employees ಇದ್ದಾರೆ ಎಂದು ಭಾವಿಸಿ: harry ಮತ್ತು riya.\n\nನೀವು harry.getSalary() ಕರೆದಾಗ, Python self harry ಎಂದು ತಿಳಿಯುತ್ತದೆ.\nನೀವು riya.getSalary() ಕರೆದಾಗ, Python self riya ಎಂದು ತಿಳಿಯುತ್ತದೆ.\n\nself ಇಲ್ಲದೆ, ಯಾವ object ನ ಡೇಟಾ ಬಳಸಬೇಕೆಂದು Python ಗೆ ತಿಳಿಯುವುದಿಲ್ಲ.',
    },
    b6: { headingKn: 'self instance attributes ಜೊತೆ', descKn: 'self.name ಎಂದರೆ "ಪ್ರಸ್ತುತ object ನ name."' },
    b8: { headingKn: '2. ಒಂದು Class ನಲ್ಲಿ Methods', bodyKn: 'ಒಂದು method ಕೇವಲ ಒಂದು class ಗೆ ಸೇರಿದ ಒಂದು function.' },
    b9: { headingKn: 'ಒಂದು ಸರಳ instance method' },
    b11: { headingKn: '3. Static Methods', bodyKn: 'ಕೆಲವೊಮ್ಮೆ ಒಂದು function ಗೆ ಯಾವುದೇ object ಡೇಟಾ ಬೇಕಾಗುವುದಿಲ್ಲ. ಉದಾಹರಣೆಗೆ, ಒಂದು welcome message ತೋರಿಸುವುದು.' },
    b12: { headingKn: 'ಒಂದು static method ವ್ಯಾಖ್ಯಾನಿಸುವುದು' },
    b13: { headingKn: 'ಒಂದು static method ಕರೆಯುವುದು', descKn: 'ಎರಡೂ ಮಾರ್ಗಗಳು ಕೆಲಸ ಮಾಡುತ್ತವೆ.' },
    b15: {
      headingKn: 'Static Methods ಯಾವಾಗ ಬಳಸಬೇಕು?',
      bodyKn: 'Function ಈ ರೀತಿ ಇದ್ದಾಗ @staticmethod ಬಳಸಿ:\nself ಬಳಸುವುದಿಲ್ಲ\nobject attributes ಪ್ರವೇಶಿಸುವುದಿಲ್ಲ\nobject ಡೇಟಾ ಮಾರ್ಪಡಿಸುವುದಿಲ್ಲ\n\nಉದಾಹರಣೆ: ಬಳಕೆದಾರರನ್ನು ಸ್ವಾಗತಿಸುವುದು, ಸರಳ ಮೌಲ್ಯಗಳನ್ನು ಲೆಕ್ಕಹಾಕುವುದು, company rules ತೋರಿಸುವುದು.',
    },
    b16: { headingKn: '4. Constructor — __init__()', bodyKn: 'ಒಂದು constructor ಒಂದು object ರಚಿಸಿದಾಗ ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಚಲಿಸುವ ಒಂದು ವಿಶೇಷ method.' },
    b17: { headingKn: 'ಒಂದು ಮೂಲಭೂತ constructor', descKn: 'ನೀವು __init__() ಅನ್ನು ನೇರವಾಗಿ ಕರೆಯಲಿಲ್ಲ. Python ಅದನ್ನು ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಮಾಡಿತು.' },
    b19: { headingKn: 'Parameters ಜೊತೆ Constructor' },
    b20: { headingKn: 'Constructor ಗೆ ಡೇಟಾ ರವಾನಿಸುವುದು' },
    b22: {
      textKn: 'ಒಂದು ಹೊಸ ವಿದ್ಯಾರ್ಥಿಯನ್ನು register ಮಾಡುವುದನ್ನು ಊಹಿಸಿ. ಒಬ್ಬ ಹೊಸ ವಿದ್ಯಾರ್ಥಿ ಸೇರಿದಾಗ, ನೀವು ತಕ್ಷಣ ಅವರ Name, Roll Number, ಮತ್ತು Course ಸಂಗ್ರಹಿಸುತ್ತೀರಿ. Constructor ಈ ಮೌಲ್ಯಗಳನ್ನು ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಆರಂಭಿಸುತ್ತದೆ.',
    },
    b23: { headingKn: 'Constructor ಬಳಸಿ ವಿದ್ಯಾರ್ಥಿ registration' },
    b25: { textKn: 'ಸಂಪೂರ್ಣ OOP ಉದಾಹರಣೆ' },
    b26: { headingKn: 'ಎಲ್ಲವನ್ನೂ ಒಟ್ಟುಗೂಡಿಸುವುದು — class attribute, constructor, method, static method' },
  },
  quizKn: [
    { qKn: 'self ಏನನ್ನು ಉಲ್ಲೇಖಿಸುತ್ತದೆ?', optsKn: ['Class', 'ಪ್ರಸ್ತುತ object', 'ಒಂದು global variable', 'ಒಂದು module'] },
    { qKn: 'ಒಂದು object ರಚಿಸಿದಾಗ ಯಾವ method ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಚಲಿಸುತ್ತದೆ?', optsKn: ['start()', 'create()', '__init__()', 'main()'] },
    { qKn: '@staticmethod ನ ಉದ್ದೇಶ ಏನು?', optsKn: ['Objects ರಚಿಸಲು', 'self ಬಳಸದ ಒಂದು method ವ್ಯಾಖ್ಯಾನಿಸಲು', 'Objects ಅಳಿಸಲು', 'Classes inherit ಮಾಡಲು'] },
    { qKn: 'ಏನು ಮುದ್ರಿಸಲಾಗುತ್ತದೆ?\nclass Student:\n    def __init__(self, name):\n        self.name = name\n\ns = Student("Anita")\nprint(s.name)', optsKn: ['Student', '__init__', 'Anita', 'Error'] },
    { qKn: 'Constructors ಬಗ್ಗೆ ಯಾವ statement ಸರಿ?', optsKn: ['ಅವುಗಳನ್ನು ಕೈಯಾರೆ ಕರೆಯಬೇಕು.', 'ಒಂದು object ರಚಿಸಿದಾಗ ಅವು ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಚಲಿಸುತ್ತವೆ.', 'ಅವು ಕೇವಲ messages ಮುದ್ರಿಸಬಹುದು.', 'ಅವು parameters ತೆಗೆದುಕೊಳ್ಳಲಾಗುವುದಿಲ್ಲ.'] },
  ],
};
