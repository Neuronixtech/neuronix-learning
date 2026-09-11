module.exports = {
  lessonId: '6a4e74fddb81aff9f2bca9ab',
  outFile: './lesson-defs/lesson315.js',
  fills: {
    b1: {
      headingKn: 'LEARNING OBJECTIVES',
      bodyKn: 'ಈ lesson ನ ಕೊನೆಯಲ್ಲಿ ನೀವು ಇವುಗಳನ್ನು ಮಾಡಲು ಸಾಧ್ಯವಾಗುತ್ತದೆ:\n\nObject-Oriented Programming (OOP) ಎಂದರೇನು ಎಂಬುದನ್ನು ಅರ್ಥ ಮಾಡಿಕೊಳ್ಳಿ\nClass ಮತ್ತು Object ನಡುವೆ ವ್ಯತ್ಯಾಸ ಗುರುತಿಸಿ\nOOP ಬಳಸಿ ನಿಜ-ಜಗತ್ತಿನ ಸಮಸ್ಯೆಗಳನ್ನು ಮಾಡೆಲ್ ಮಾಡಿ\nClass Attributes ಮತ್ತು Instance Attributes ಅರ್ಥ ಮಾಡಿಕೊಳ್ಳಿ\nself parameter ನ ಉದ್ದೇಶ ಕಲಿಯಿರಿ\nಸರಳ Python classes ರಚಿಸಿ',
    },
    b2: {
      headingKn: '1. ನಮಗೆ Object-Oriented Programming ಏಕೆ ಬೇಕು?',
      bodyKn: 'ಇಲ್ಲಿಯವರೆಗೆ ನಾವು ಈ ರೀತಿಯ programs ಬರೆದಿದ್ದೇವೆ — ಇದು ಒಬ್ಬ ವ್ಯಕ್ತಿಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ. ಆದರೆ ನಮಗೆ 10,000 ವಿದ್ಯಾರ್ಥಿಗಳಿದ್ದರೆ? ಪ್ರತಿಯೊಬ್ಬರಿಗೂ ಪ್ರತ್ಯೇಕ variables ರಚಿಸುವುದು ಅಸಾಧ್ಯವಾಗುತ್ತದೆ.\n\nಬದಲಿಗೆ ನಾವು Class ಎಂಬ ಒಂದು blueprint ರಚಿಸುತ್ತೇವೆ. ಆ blueprint ಇಂದ ನಾವು ಅನೇಕ Objects ರಚಿಸುತ್ತೇವೆ. ಇದು ಕೋಡ್ ಅನ್ನು ಮರುಬಳಕೆ ಮಾಡಬಹುದಾದ, ಸ್ವಚ್ಛ, ಮತ್ತು ನಿರ್ವಹಿಸಲು ಸುಲಭವಾಗಿಸುತ್ತದೆ.\n\nಈ programming ಶೈಲಿಯನ್ನು Object-Oriented Programming (OOP) ಎಂದು ಕರೆಯಲಾಗುತ್ತದೆ.',
    },
    b3: { headingKn: 'OOP ಇಲ್ಲದೆ — ಕೇವಲ ಒಬ್ಬ ವ್ಯಕ್ತಿಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ' },
    b4: {
      textKn: 'ಒಂದು college admission ಪ್ರಕ್ರಿಯೆಯನ್ನು ಊಹಿಸಿ. ಯಾವುದೇ ವಿದ್ಯಾರ್ಥಿ apply ಮಾಡುವ ಮೊದಲು, college ಒಂದು ಖಾಲಿ application form ತಯಾರಿಸುತ್ತದೆ. ಪ್ರತಿ ವಿದ್ಯಾರ್ಥಿ ಅದೇ form ಭರ್ತಿ ಮಾಡುತ್ತಾರೆ.\n\nಖಾಲಿ Form → Rahul ನ Application → Priya ಳ Application → Arjun ನ Application\n\nForm ಎಂಬುದೇ Class. ಪ್ರತಿ ಭರ್ತಿ ಮಾಡಿದ application ಒಂದು Object. Python ನಲ್ಲಿ ನಿಖರವಾಗಿ ಇದೇ ಸಂಭವಿಸುತ್ತದೆ.',
    },
    b5: {
      headingKn: 'DRY Principle',
      bodyKn: "OOP ಒಂದು ಮುಖ್ಯ programming ನಿಯಮ ಅನುಸರಿಸುತ್ತದೆ.\n\nDRY = Don't Repeat Yourself\n\nಅದೇ ಕೋಡ್ ಅನ್ನು ಪದೇಪದೇ ಬರೆಯುವ ಬದಲು, ನಾವು ಅದನ್ನು ಒಂದು class ಒಳಗೆ ಒಮ್ಮೆ ಬರೆದು ಮರುಬಳಕೆ ಮಾಡುತ್ತೇವೆ.",
    },
    b6: {
      headingKn: '2. Class ಎಂದರೇನು?',
      bodyKn: 'ಒಂದು Class objects ರಚಿಸಲು ಬಳಸುವ ಒಂದು blueprint ಅಥವಾ template. ಇದನ್ನು ಒಂದು design ಎಂದು ಯೋಚಿಸಿ.\n\nHouse Blueprint → House 1, House 2, House 3\n\nBlueprint ನಿಜವಾದ ಮನೆ ಅಲ್ಲ. ಅದೇ ರೀತಿ, ಒಂದು Class Objects ಉತ್ಪಾದಿಸುತ್ತದೆ.',
    },
    b7: { headingKn: 'Python Syntax', descKn: 'class ಒಂದು class ರಚಿಸಲು ಬಳಸುವ keyword. Employee class ಹೆಸರು.' },
    b8: {
      headingKn: 'Class Naming Convention',
      bodyKn: 'Class ಹೆಸರುಗಳು ಸಾಮಾನ್ಯವಾಗಿ PascalCase ಅನುಸರಿಸುತ್ತವೆ.\n\nಒಳ್ಳೆಯ ಉದಾಹರಣೆಗಳು: Student, BankAccount, Car, LibraryBook\nಕೆಟ್ಟ ಉದಾಹರಣೆಗಳು: student, bank_account, car1',
    },
    b9: {
      headingKn: '3. Object ಎಂದರೇನು?',
      bodyKn: 'ಒಂದು object ಒಂದು class ಇಂದ ರಚಿಸಿದ ನಿಜ instance.\n\nBlueprint → House\n\nಅದೇ ರೀತಿ, Class Employee → Harry, Riya, Amit. Harry, Riya ಮತ್ತು Amit objects.',
    },
    b10: { headingKn: 'ಒಂದು class ಇಂದ objects ರಚಿಸುವುದು', descKn: 'Employee class. emp1 ಮತ್ತು emp2 objects.' },
    b11: {
      headingKn: 'Memory Allocation',
      bodyKn: 'ಒಂದು ಮುಖ್ಯ ವಿಷಯ ಗಮನಿಸಿ. ನಾವು class Employee: pass ಬರೆದಾಗ, ಇನ್ನೂ ಯಾವುದೇ employee ಅಸ್ತಿತ್ವದಲ್ಲಿಲ್ಲ.\n\nನಾವು emp = Employee() ರಚಿಸಿದಾಗ ಮಾತ್ರ memory allocate ಆಗುತ್ತದೆ. ಈಗ Python memory ಯಲ್ಲಿ ಒಂದು ನಿಜ object ರಚಿಸುತ್ತದೆ.',
    },
    b12: { textKn: '4. ಒಂದು ನಿಜ-ಜಗತ್ತಿನ ಸಮಸ್ಯೆಯನ್ನು Modelling ಮಾಡುವುದು' },
    b13: { headingKn: 'OOP ಬಳಸಿ ಸಮಸ್ಯೆಗಳನ್ನು ಪರಿಹರಿಸುವಾಗ, ಮೂರು ವಿಷಯಗಳನ್ನು ಗುರುತಿಸಿ.' },
    b14: { headingKn: 'ಹಂತ 1: Nouns Classes ಆಗುತ್ತವೆ', bodyKn: 'ಉದಾಹರಣೆ: Employee, Student, Car, Book — ಇವು Classes ಆಗುತ್ತವೆ.' },
    b15: { headingKn: 'ಹಂತ 2: Adjectives Attributes ಆಗುತ್ತವೆ', bodyKn: 'Employee → Name, Age, Salary, Department\nStudent → Roll Number, Name, Marks' },
    b16: { headingKn: 'ಹಂತ 3: Verbs Methods ಆಗುತ್ತವೆ', bodyKn: 'Employee → work(), getSalary(), incrementSalary()\nStudent → study(), writeExam(), displayResult()' },
    b17: { captionKn: 'Employee: Class → Attributes → Methods' },
    b18: { textKn: '5. Class Attributes' },
    b19: { headingKn: 'ಒಂದು Class Attribute ಸಂಪೂರ್ಣ classಗೆ ಸೇರಿದೆ.', bodyKn: 'ಪ್ರತಿ object ಇದನ್ನು ಹಂಚಿಕೊಳ್ಳುತ್ತದೆ.' },
    b20: { headingKn: 'ಒಂದು class attribute ವ್ಯಾಖ್ಯಾನಿಸುವುದು', descKn: 'company class ಗೆ ಸೇರಿದೆ. ಎಲ್ಲಾ employees ಆರಂಭದಲ್ಲಿ Google ನಲ್ಲಿ ಕೆಲಸ ಮಾಡುತ್ತಾರೆ.' },
    b22: { headingKn: 'class attribute ಬದಲಾಯಿಸುವುದು' },
    b24: { bodyKn: 'ಏಕೆಂದರೆ ಪ್ರತಿ employee ಅದೇ class attribute ಹಂಚಿಕೊಳ್ಳುತ್ತಾರೆ.' },
    b25: {
      textKn: 'College ಹೆಸರು. ಪ್ರತಿ ವಿದ್ಯಾರ್ಥಿ ABC Engineering College ಗೆ ಸೇರಿದ್ದಾರೆ. ಪ್ರತಿ ವಿದ್ಯಾರ್ಥಿ ಒಳಗೆ college ಹೆಸರು ಸಂಗ್ರಹಿಸುವ ಬದಲು, ಅದನ್ನು ಒಮ್ಮೆ ಒಂದು class attribute ಆಗಿ ಸಂಗ್ರಹಿಸಿ.',
    },
    b26: { textKn: '6. Instance Attributes' },
    b27: { headingKn: 'Instance Attributes ಕೇವಲ ಒಂದು object ಗೆ ಮಾತ್ರ ಸೇರಿವೆ.' },
    b28: { headingKn: 'Instance attributes ಸೆಟ್ ಮಾಡುವುದು', descKn: 'name ಮತ್ತು salary ಕೇವಲ Harry ಗೆ ಮಾತ್ರ ಸೇರಿವೆ.' },
    b29: { headingKn: 'ಇನ್ನೊಂದು employee ಬೇರೆ ಡೇಟಾ ಹೊಂದಿದೆ', descKn: 'ಪ್ರತಿ employee ಬೇರೆ ಡೇಟಾ ಹೊಂದಿದ್ದಾರೆ.' },
    b30: { captionKn: 'Class Attribute vs Instance Attribute' },
    b31: { headingKn: 'Priority Rule', bodyKn: 'Python ಮೊದಲು Object ಪರಿಶೀಲಿಸುತ್ತದೆ, ನಂತರ Class. Instance attributes ಯಾವಾಗಲೂ priority ಪಡೆಯುತ್ತವೆ.' },
    b32: { headingKn: 'Instance attribute class attribute ಅನ್ನು override ಮಾಡುತ್ತದೆ' },
    b34: {
      textKn: 'Student ಎಂಬ ಒಂದು class ರಚಿಸಿ. ಮೂರು objects ರಚಿಸಿ. Name, Roll Number, ಮತ್ತು Marks ಅನ್ನು instance attributes ಆಗಿ ಸೇರಿಸಿ. ಎಲ್ಲಾ ವಿವರಗಳನ್ನು ಮುದ್ರಿಸಿ.',
    },
  },
  quizKn: [
    { qKn: 'ಒಂದು class ಎಂದರೆ:', optsKn: ['Variable', 'Function', 'Blueprint', 'Loop'] },
    { qKn: 'ಇವುಗಳಲ್ಲಿ ಯಾವುದು ಒಂದು object ರಚಿಸುತ್ತದೆ? (Employee())', optsKn: ['Class', 'Object', 'Function', 'Module'] },
    { qKn: 'ಎಲ್ಲಾ objects ಗಳ ನಡುವೆ ಯಾವುದು ಹಂಚಿಕೊಳ್ಳಲಾಗಿದೆ?', optsKn: ['Instance Attribute', 'Local Variable', 'Class Attribute', 'Loop Variable'] },
    { qKn: 'ಒಂದು instance attribute ಮತ್ತು ಒಂದು class attribute ಒಂದೇ ಹೆಸರು ಹೊಂದಿದ್ದರೆ, ಯಾವುದು priority ಪಡೆಯುತ್ತದೆ?', optsKn: ['Class Attribute', 'Instance Attribute', 'Function', 'Global Variable'] },
    { qKn: 'ಇದರಲ್ಲಿ class ಗುರುತಿಸಿ: class Car: pass \n mycar = Car()', optsKn: ['mycar', 'pass', 'Car', 'class'] },
  ],
};
