module.exports = {
  lessonId: '6a4e90eae5d017b586dd0f50',
  outFile: './lesson-defs/lesson317.js',
  fills: {
    b1: { textKn: 'Inheritance & OOPs ಬಗ್ಗೆ ಇನ್ನಷ್ಟು' },
    b2: {
      headingKn: 'Inheritance',
      bodyKn: "Inheritance ನಿಮಗೆ ಇರುವ ಒಂದು class ಇಂದ ಒಂದು ಹೊಸ class ರಚಿಸಲು ಅನುಮತಿಸುತ್ತದೆ, ಆದ್ದರಿಂದ ಹೊಸ class ಸ್ವಯಂಚಾಲಿತವಾಗಿ parent ನ attributes ಮತ್ತು methods ಪಡೆಯುತ್ತದೆ — ಮತ್ತು ತನ್ನದೇ ಆದವುಗಳನ್ನು ಸೇರಿಸಬಹುದು ಅಥವಾ override ಮಾಡಬಹುದು.",
    },
    b3: { headingKn: 'Base class ಮತ್ತು derived class', descKn: 'Programmer ಸ್ವಯಂಚಾಲಿತವಾಗಿ Employee ಇಂದ work() ಹೊಂದಿದೆ, ಮತ್ತು ತನ್ನದೇ code() method ಸೇರಿಸುತ್ತದೆ.' },
    b4: { headingKn: 'Inherit ಮಾಡಿದ ಮತ್ತು ಹೊಸ methods ಬಳಸುವುದು' },
    b6: { textKn: 'Inheritance ನ ವಿಧಗಳು' },
    b7: {
      bodyKn: 'Single inheritance — ಒಂದು child ಒಂದು parent ಇಂದ inherit ಮಾಡುತ್ತದೆ.\nMultiple inheritance — ಒಂದು child ಒಮ್ಮೆಗೆ ಎರಡು (ಅಥವಾ ಹೆಚ್ಚು) parents ಇಂದ inherit ಮಾಡುತ್ತದೆ.\nMultilevel inheritance — ಒಂದು child ಇನ್ನೊಂದು child ನ parent ಆಗುವ ಒಂದು ಸರಪಳಿ.',
    },
    b8: { textKn: 'Single Inheritance' },
    b9: { bodyKn: 'Base → Derived\n\nಇದು ಮೇಲೆ ತೋರಿಸಿದ Employee → Programmer ಉದಾಹರಣೆ.' },
    b10: { textKn: 'Multiple Inheritance' },
    b11: { bodyKn: 'ಒಂದು child ಒಮ್ಮೆಗೆ ಎರಡು ಅಥವಾ ಹೆಚ್ಚು parents ಇಂದ inherit ಮಾಡುತ್ತದೆ.\n\nParent 1 ─┐\n          ├─→ Child\nParent 2 ─┘' },
    b12: { headingKn: 'ಎರಡು parents ಇಂದ inherit ಮಾಡುವ ಒಂದು Duck' },
    b14: { textKn: 'Multilevel Inheritance' },
    b15: { bodyKn: 'ಒಂದು child ಇನ್ನೊಂದು child ನ parent ಆಗುವ ಒಂದು ಸರಪಳಿ.\n\nParent → Child1 → Child2' },
    b16: { headingKn: 'Animal → Dog → Puppy' },
    b18: { textKn: 'super() Method' },
    b19: {
      bodyKn: "super() ಒಂದು child class ಗೆ ಅದರ parent ಇಂದ ಒಂದು method ಕರೆಯಲು ಅನುಮತಿಸುತ್ತದೆ — ಸಾಮಾನ್ಯವಾಗಿ parent ನ __init__(), ಆದ್ದರಿಂದ ನೀವು ಆ setup ಕೋಡ್ ಅನ್ನು ಮತ್ತೆ ಬರೆಯಬೇಕಾಗಿಲ್ಲ.",
    },
    b20: { headingKn: 'Parent constructor ಮರುಬಳಕೆ ಮಾಡಲು super() ಬಳಸುವುದು', descKn: 'super() ಇಲ್ಲದೆ, ನೀವು Programmer ಒಳಗೆ self.name = name ಅನ್ನು ನೀವೇ ಪುನರಾವರ್ತಿಸಬೇಕಾಗುತ್ತದೆ.' },
    b22: { textKn: 'Class Method' },
    b23: {
      bodyKn: 'ಒಂದು class method ಯಾವುದೇ ಒಂದು object ಗೆ ಅಲ್ಲ, class ಗೇ bound ಆಗಿದೆ — ಆದ್ದರಿಂದ ಇದಕ್ಕೆ self ಬೇಕಾಗಿಲ್ಲ. ಇದು ಬದಲಿಗೆ cls ತೆಗೆದುಕೊಳ್ಳುತ್ತದೆ, ಮತ್ತು @classmethod ಜೊತೆ ಗುರುತಿಸಲಾಗಿದೆ.',
    },
    b24: { headingKn: 'ಒಂದು class attribute ಬದಲಾಯಿಸುವ @classmethod' },
    b26: { bodyKn: 'ಒಂದು instance ಬದಲು ಸಂಪೂರ್ಣ class ಮೇಲೆ ಪರಿಣಾಮ ಬೀರುವ operations ಗಳಿಗೆ ಇದು ಉಪಯುಕ್ತ — ಬೇರೆ ರೀತಿಯಲ್ಲಿ objects ಕಟ್ಟುವ ಒಂದು factory method ನಂತೆ.' },
    b27: { headingKn: 'ಒಂದು factory ಆಗಿ ಬಳಸುವ classmethod' },
    b29: { textKn: '@property Decorator, Getters & Setters' },
    b30: {
      bodyKn: 'ಸಾಮಾನ್ಯವಾಗಿ, e.name ಪ್ರವೇಶಿಸುವುದು ಕೇವಲ ಒಂದು attribute ಅನ್ನು ನೇರವಾಗಿ ಓದುತ್ತದೆ. @property ನಿಮಗೆ .name ಅನ್ನು ಒಂದು ಸರಳ attribute ನಂತೆ ಕಾಣಿಸುವಂತೆ ಮಾಡುತ್ತದೆ ಆದರೆ ಪರದೆಯ ಹಿಂದೆ ರಹಸ್ಯವಾಗಿ ಒಂದು function ಚಲಾಯಿಸುತ್ತದೆ — validation ಅಥವಾ computed ಮೌಲ್ಯಗಳಿಗೆ ಉಪಯುಕ್ತ.',
    },
    b31: {
      headingKn: '@property ಬಳಸಿ ಒಂದು getter ಮತ್ತು setter',
      descKn: 'e.name ಕರೆಯುವಾಗ () ಇಲ್ಲ ಎಂದು ಗಮನಿಸಿ — ಇದೇ @property ನ ಸಂಪೂರ್ಣ ಅಂಶ: ಇದು ಒಂದು method call ಅಲ್ಲ, ಒಂದು ಸಾಮಾನ್ಯ attribute ನಂತೆ ವರ್ತಿಸುತ್ತದೆ, ಆದರೂ ಅದನ್ನು ಓದುವಾಗ ಅಥವಾ ಬರೆಯುವಾಗ validation logic ಚಲಾಯಿಸಲು ಅನುಮತಿಸುತ್ತದೆ.',
    },
    b33: { textKn: 'Operator Overloading' },
    b34: {
      bodyKn: 'ಡೀಫಾಲ್ಟ್ ಆಗಿ, ನಿಮ್ಮ ಸ್ವಂತ ಎರಡು objects ಗಳ ನಡುವೆ + ಅಥವಾ * ಏನನ್ನು ಅರ್ಥೈಸಬೇಕು ಎಂದು Python ಗೆ ತಿಳಿದಿಲ್ಲ. Dunder ("double underscore") methods ನಿಮಗೆ ಆ ವರ್ತನೆ ವ್ಯಾಖ್ಯಾನಿಸಲು ಅನುಮತಿಸುತ್ತವೆ.',
    },
    b35: { headingKn: '+ Overload ಮಾಡುವುದು ಮತ್ತು __str__ ಮತ್ತು __len__ ವ್ಯಾಖ್ಯಾನಿಸುವುದು' },
    b37: {
      bodyKn: '__str__ ಇಲ್ಲದೆ, print(p3) <__main__.Point object at 0x7f...> ನಂತಹ ಓದಲಾಗದ ಏನನ್ನಾದರೂ ತೋರಿಸುತ್ತದೆ — ಅದನ್ನು override ಮಾಡುವುದು ನಿಮ್ಮ object ಹೇಗೆ ಪ್ರದರ್ಶಿಸಲಾಗುತ್ತದೆ ಎಂಬುದರ ಮೇಲೆ ನಿಯಂತ್ರಣ ನೀಡುತ್ತದೆ.',
    },
    b38: { captionKn: 'Arithmetic dunders ನ ಸಂಪೂರ್ಣ ಸೆಟ್' },
  },
  quizKn: [
    { qKn: 'ಒಂದು child class ಒಂದಕ್ಕಿಂತ ಹೆಚ್ಚು parent class ಇಂದ inherit ಮಾಡಿದಾಗ ಯಾವ ರೀತಿಯ inheritance ಸಂಭವಿಸುತ್ತದೆ?', optsKn: ['Single inheritance', 'Multiple inheritance', 'Multilevel inheritance', 'Static inheritance'] },
    { qKn: 'ಒಂದು child class ಒಳಗೆ super().__init__() ಕರೆಯುವುದು ಏನು ಮಾಡುತ್ತದೆ?', optsKn: ['ಒಂದು ಹೊಸ child object ರಚಿಸುತ್ತದೆ', 'Parent class ಅನ್ನು ಅಳಿಸುತ್ತದೆ', 'Base (parent) class ನ constructor ಕರೆಯುತ್ತದೆ', '+ operator ಅನ್ನು overload ಮಾಡುತ್ತದೆ'] },
    { qKn: 'ಯಾವುದೇ ಒಂದು object ಬದಲು class ಗೆ ಸೇರಿದ ಒಂದು method ವ್ಯಾಖ್ಯಾನಿಸಲು ಯಾವ decorator ಬಳಸಲಾಗುತ್ತದೆ?', optsKn: ['@staticmethod', '@property', '@classmethod', '@override'] },
    { qKn: 'ಎರಡು custom objects ಗಳಿಗೆ p1 + p2 ಬರೆದಾಗ ಯಾವ dunder method ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಕರೆಯಲಾಗುತ್ತದೆ?', optsKn: ['__str__', '__add__', '__init__', '__len__'] },
    { qKn: '@property decorator ನಿಮಗೆ ಏನು ಮಾಡಲು ಅನುಮತಿಸುತ್ತದೆ?', optsKn: ['ಒಂದು method ಅನ್ನು read-only ಅಥವಾ validated attribute ನಂತೆ ವರ್ತಿಸುವಂತೆ ಮಾಡಲು', 'ಒಂದು class ಅನ್ನು ಒಂದು module ಆಗಿ ಪರಿವರ್ತಿಸಲು', 'ಇನ್ನೊಂದು class ಇಂದ ಸ್ವಯಂಚಾಲಿತವಾಗಿ inherit ಮಾಡಲು', 'ಒಂದು function ಅನ್ನು ಒಂದು loop ಆಗಿ ಪರಿವರ್ತಿಸಲು'] },
  ],
};
