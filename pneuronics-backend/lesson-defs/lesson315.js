module.exports = {
  "phaseId": "6a358e65fc29b5a471444755",
  "moduleId": "6a358e66fc29b5a471444773",
  "order": 0,
  "type": "reading",
  "duration": 22,
  "difficulty": "beginner",
  "status": "published",
  "title": "Object-Oriented Programming (OOP) Fundamentals",
  "titleKn": "ಆಬ್ಜೆಕ್ಟ್-ಓರಿಯೆಂಟೆಡ್ ಪ್ರೋಗ್ರಾಮಿಂಗ್ (OOP) ಫಂಡಮೆಂಟಲ್ಸ್",
  "desc": "Understand classes, objects, and how to model real-world problems in Python",
  "descKn": "Understand classes, objects, and how to model real-world problems in Python",
  "objectives": [
    "Understand what Object-Oriented Programming (OOP) is",
    "Differentiate between Class and Object",
    "Model real-world problems using OOP",
    "Understand Class Attributes and Instance Attributes",
    "Learn the purpose of the self parameter",
    "Create simple Python classes"
  ],
  "objectivesKn": [],
  "blocks": [
    {
      "id": "b1",
      "type": "concept",
      "data": {
        "headingEn": "LEARNING OBJECTIVES",
        "bodyEn": "By the end of this lesson you will be able to:\n\nUnderstand what Object-Oriented Programming (OOP) is\nDifferentiate between Class and Object\nModel real-world problems using OOP\nUnderstand Class Attributes and Instance Attributes\nLearn the purpose of the self parameter\nCreate simple Python classes",
        "headingKn": "LEARNING OBJECTIVES",
        "bodyKn": "ಈ lesson ನ ಕೊನೆಯಲ್ಲಿ ನೀವು ಇವುಗಳನ್ನು ಮಾಡಲು ಸಾಧ್ಯವಾಗುತ್ತದೆ:\n\nObject-Oriented Programming (OOP) ಎಂದರೇನು ಎಂಬುದನ್ನು ಅರ್ಥ ಮಾಡಿಕೊಳ್ಳಿ\nClass ಮತ್ತು Object ನಡುವೆ ವ್ಯತ್ಯಾಸ ಗುರುತಿಸಿ\nOOP ಬಳಸಿ ನಿಜ-ಜಗತ್ತಿನ ಸಮಸ್ಯೆಗಳನ್ನು ಮಾಡೆಲ್ ಮಾಡಿ\nClass Attributes ಮತ್ತು Instance Attributes ಅರ್ಥ ಮಾಡಿಕೊಳ್ಳಿ\nself parameter ನ ಉದ್ದೇಶ ಕಲಿಯಿರಿ\nಸರಳ Python classes ರಚಿಸಿ"
      }
    },
    {
      "id": "b2",
      "type": "concept",
      "data": {
        "headingEn": "1. Why Do We Need Object-Oriented Programming?",
        "bodyEn": "Until now we have written programs like this — which works for one person. But what if we have 10,000 students? Creating separate variables for each one becomes impossible.\n\nInstead we create a blueprint called a Class. From that blueprint we create many Objects. This makes code reusable, cleaner, and easier to maintain.\n\nThis programming style is called Object-Oriented Programming (OOP).",
        "headingKn": "1. ನಮಗೆ Object-Oriented Programming ಏಕೆ ಬೇಕು?",
        "bodyKn": "ಇಲ್ಲಿಯವರೆಗೆ ನಾವು ಈ ರೀತಿಯ programs ಬರೆದಿದ್ದೇವೆ — ಇದು ಒಬ್ಬ ವ್ಯಕ್ತಿಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ. ಆದರೆ ನಮಗೆ 10,000 ವಿದ್ಯಾರ್ಥಿಗಳಿದ್ದರೆ? ಪ್ರತಿಯೊಬ್ಬರಿಗೂ ಪ್ರತ್ಯೇಕ variables ರಚಿಸುವುದು ಅಸಾಧ್ಯವಾಗುತ್ತದೆ.\n\nಬದಲಿಗೆ ನಾವು Class ಎಂಬ ಒಂದು blueprint ರಚಿಸುತ್ತೇವೆ. ಆ blueprint ಇಂದ ನಾವು ಅನೇಕ Objects ರಚಿಸುತ್ತೇವೆ. ಇದು ಕೋಡ್ ಅನ್ನು ಮರುಬಳಕೆ ಮಾಡಬಹುದಾದ, ಸ್ವಚ್ಛ, ಮತ್ತು ನಿರ್ವಹಿಸಲು ಸುಲಭವಾಗಿಸುತ್ತದೆ.\n\nಈ programming ಶೈಲಿಯನ್ನು Object-Oriented Programming (OOP) ಎಂದು ಕರೆಯಲಾಗುತ್ತದೆ."
      }
    },
    {
      "id": "b3",
      "type": "code",
      "data": {
        "headingEn": "Without OOP — works for only one person",
        "descEn": "",
        "code": "name = \"Rahul\"\nage = 20\n\nprint(name)\nprint(age)",
        "filename": "single_student.py",
        "headingKn": "OOP ಇಲ್ಲದೆ — ಕೇವಲ ಒಬ್ಬ ವ್ಯಕ್ತಿಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ"
      }
    },
    {
      "id": "b4",
      "type": "example",
      "data": {
        "tag": "Real-Life Example",
        "textEn": "Imagine a college admission process. Before any student applies, the college prepares a blank application form. Every student fills the same form.\n\nBlank Form → Rahul's Application → Priya's Application → Arjun's Application\n\nThe form is the Class. Each filled application is an Object. Exactly the same thing happens in Python.",
        "textKn": "ಒಂದು college admission ಪ್ರಕ್ರಿಯೆಯನ್ನು ಊಹಿಸಿ. ಯಾವುದೇ ವಿದ್ಯಾರ್ಥಿ apply ಮಾಡುವ ಮೊದಲು, college ಒಂದು ಖಾಲಿ application form ತಯಾರಿಸುತ್ತದೆ. ಪ್ರತಿ ವಿದ್ಯಾರ್ಥಿ ಅದೇ form ಭರ್ತಿ ಮಾಡುತ್ತಾರೆ.\n\nಖಾಲಿ Form → Rahul ನ Application → Priya ಳ Application → Arjun ನ Application\n\nForm ಎಂಬುದೇ Class. ಪ್ರತಿ ಭರ್ತಿ ಮಾಡಿದ application ಒಂದು Object. Python ನಲ್ಲಿ ನಿಖರವಾಗಿ ಇದೇ ಸಂಭವಿಸುತ್ತದೆ."
      }
    },
    {
      "id": "b5",
      "type": "concept",
      "data": {
        "headingEn": "DRY Principle",
        "bodyEn": "OOP follows an important programming rule.\n\nDRY = Don't Repeat Yourself\n\nInstead of writing the same code repeatedly, we write it once inside a class and reuse it.",
        "headingKn": "DRY Principle",
        "bodyKn": "OOP ಒಂದು ಮುಖ್ಯ programming ನಿಯಮ ಅನುಸರಿಸುತ್ತದೆ.\n\nDRY = Don't Repeat Yourself\n\nಅದೇ ಕೋಡ್ ಅನ್ನು ಪದೇಪದೇ ಬರೆಯುವ ಬದಲು, ನಾವು ಅದನ್ನು ಒಂದು class ಒಳಗೆ ಒಮ್ಮೆ ಬರೆದು ಮರುಬಳಕೆ ಮಾಡುತ್ತೇವೆ."
      }
    },
    {
      "id": "b6",
      "type": "concept",
      "data": {
        "headingEn": "2. What is a Class?",
        "bodyEn": "A Class is a blueprint or template used to create objects. Think of it as a design.\n\nHouse Blueprint → House 1, House 2, House 3\n\nThe blueprint is not the actual house. Similarly, a Class produces Objects.",
        "headingKn": "2. Class ಎಂದರೇನು?",
        "bodyKn": "ಒಂದು Class objects ರಚಿಸಲು ಬಳಸುವ ಒಂದು blueprint ಅಥವಾ template. ಇದನ್ನು ಒಂದು design ಎಂದು ಯೋಚಿಸಿ.\n\nHouse Blueprint → House 1, House 2, House 3\n\nBlueprint ನಿಜವಾದ ಮನೆ ಅಲ್ಲ. ಅದೇ ರೀತಿ, ಒಂದು Class Objects ಉತ್ಪಾದಿಸುತ್ತದೆ."
      }
    },
    {
      "id": "b7",
      "type": "code",
      "data": {
        "headingEn": "Python Syntax",
        "descEn": "class is the keyword used to create a class. Employee is the class name.",
        "code": "class Employee:\n    pass",
        "filename": "class_syntax.py",
        "headingKn": "Python Syntax",
        "descKn": "class ಒಂದು class ರಚಿಸಲು ಬಳಸುವ keyword. Employee class ಹೆಸರು."
      }
    },
    {
      "id": "b8",
      "type": "concept",
      "data": {
        "headingEn": "Class Naming Convention",
        "bodyEn": "Class names usually follow PascalCase.\n\nGood examples: Student, BankAccount, Car, LibraryBook\nBad examples: student, bank_account, car1",
        "headingKn": "Class Naming Convention",
        "bodyKn": "Class ಹೆಸರುಗಳು ಸಾಮಾನ್ಯವಾಗಿ PascalCase ಅನುಸರಿಸುತ್ತವೆ.\n\nಒಳ್ಳೆಯ ಉದಾಹರಣೆಗಳು: Student, BankAccount, Car, LibraryBook\nಕೆಟ್ಟ ಉದಾಹರಣೆಗಳು: student, bank_account, car1"
      }
    },
    {
      "id": "b9",
      "type": "concept",
      "data": {
        "headingEn": "3. What is an Object?",
        "bodyEn": "An object is a real instance created from a class.\n\nBlueprint → House\n\nSimilarly, Class Employee → Harry, Riya, Amit. Harry, Riya and Amit are objects.",
        "headingKn": "3. Object ಎಂದರೇನು?",
        "bodyKn": "ಒಂದು object ಒಂದು class ಇಂದ ರಚಿಸಿದ ನಿಜ instance.\n\nBlueprint → House\n\nಅದೇ ರೀತಿ, Class Employee → Harry, Riya, Amit. Harry, Riya ಮತ್ತು Amit objects."
      }
    },
    {
      "id": "b10",
      "type": "code",
      "data": {
        "headingEn": "Creating objects from a class",
        "descEn": "Employee is the class. emp1 and emp2 are objects.",
        "code": "class Employee:\n    pass\n\nemp1 = Employee()\nemp2 = Employee()",
        "filename": "create_objects.py",
        "headingKn": "ಒಂದು class ಇಂದ objects ರಚಿಸುವುದು",
        "descKn": "Employee class. emp1 ಮತ್ತು emp2 objects."
      }
    },
    {
      "id": "b11",
      "type": "concept",
      "data": {
        "headingEn": "Memory Allocation",
        "bodyEn": "Notice something important. When we write class Employee: pass, no employee exists yet.\n\nMemory is allocated only when we create emp = Employee(). Now Python creates an actual object in memory.",
        "headingKn": "Memory Allocation",
        "bodyKn": "ಒಂದು ಮುಖ್ಯ ವಿಷಯ ಗಮನಿಸಿ. ನಾವು class Employee: pass ಬರೆದಾಗ, ಇನ್ನೂ ಯಾವುದೇ employee ಅಸ್ತಿತ್ವದಲ್ಲಿಲ್ಲ.\n\nನಾವು emp = Employee() ರಚಿಸಿದಾಗ ಮಾತ್ರ memory allocate ಆಗುತ್ತದೆ. ಈಗ Python memory ಯಲ್ಲಿ ಒಂದು ನಿಜ object ರಚಿಸುತ್ತದೆ."
      }
    },
    {
      "id": "b12",
      "type": "heading",
      "data": {
        "textEn": "4. Modelling a Real-World Problem",
        "level": "H1",
        "textKn": "4. ಒಂದು ನಿಜ-ಜಗತ್ತಿನ ಸಮಸ್ಯೆಯನ್ನು Modelling ಮಾಡುವುದು"
      }
    },
    {
      "id": "b13",
      "type": "concept",
      "data": {
        "headingEn": "When solving problems using OOP, identify three things.",
        "bodyEn": "",
        "headingKn": "OOP ಬಳಸಿ ಸಮಸ್ಯೆಗಳನ್ನು ಪರಿಹರಿಸುವಾಗ, ಮೂರು ವಿಷಯಗಳನ್ನು ಗುರುತಿಸಿ."
      }
    },
    {
      "id": "b14",
      "type": "concept",
      "data": {
        "headingEn": "Step 1: Nouns become Classes",
        "bodyEn": "Example: Employee, Student, Car, Book — these become Classes.",
        "headingKn": "ಹಂತ 1: Nouns Classes ಆಗುತ್ತವೆ",
        "bodyKn": "ಉದಾಹರಣೆ: Employee, Student, Car, Book — ಇವು Classes ಆಗುತ್ತವೆ."
      }
    },
    {
      "id": "b15",
      "type": "concept",
      "data": {
        "headingEn": "Step 2: Adjectives become Attributes",
        "bodyEn": "Employee → Name, Age, Salary, Department\nStudent → Roll Number, Name, Marks",
        "headingKn": "ಹಂತ 2: Adjectives Attributes ಆಗುತ್ತವೆ",
        "bodyKn": "Employee → Name, Age, Salary, Department\nStudent → Roll Number, Name, Marks"
      }
    },
    {
      "id": "b16",
      "type": "concept",
      "data": {
        "headingEn": "Step 3: Verbs become Methods",
        "bodyEn": "Employee → work(), getSalary(), incrementSalary()\nStudent → study(), writeExam(), displayResult()",
        "headingKn": "ಹಂತ 3: Verbs Methods ಆಗುತ್ತವೆ",
        "bodyKn": "Employee → work(), getSalary(), incrementSalary()\nStudent → study(), writeExam(), displayResult()"
      }
    },
    {
      "id": "b17",
      "type": "table",
      "data": {
        "captionEn": "Employee: Class → Attributes → Methods",
        "rows": "Part | Examples\nAttributes | Name, Age, Salary\nMethods | Work(), DisplaySalary()",
        "captionKn": "Employee: Class → Attributes → Methods"
      }
    },
    {
      "id": "b18",
      "type": "heading",
      "data": {
        "textEn": "5. Class Attributes",
        "level": "H1",
        "textKn": "5. Class Attributes"
      }
    },
    {
      "id": "b19",
      "type": "concept",
      "data": {
        "headingEn": "A Class Attribute belongs to the entire class.",
        "bodyEn": "Every object shares it.",
        "headingKn": "ಒಂದು Class Attribute ಸಂಪೂರ್ಣ classಗೆ ಸೇರಿದೆ.",
        "bodyKn": "ಪ್ರತಿ object ಇದನ್ನು ಹಂಚಿಕೊಳ್ಳುತ್ತದೆ."
      }
    },
    {
      "id": "b20",
      "type": "code",
      "data": {
        "headingEn": "Defining a class attribute",
        "descEn": "company belongs to the class. All employees initially work at Google.",
        "code": "class Employee:\n    company = \"Google\"\n\nharry = Employee()\n\nprint(harry.company)",
        "filename": "class_attribute.py",
        "headingKn": "ಒಂದು class attribute ವ್ಯಾಖ್ಯಾನಿಸುವುದು",
        "descKn": "company class ಗೆ ಸೇರಿದೆ. ಎಲ್ಲಾ employees ಆರಂಭದಲ್ಲಿ Google ನಲ್ಲಿ ಕೆಲಸ ಮಾಡುತ್ತಾರೆ."
      }
    },
    {
      "id": "b21",
      "type": "output",
      "data": {
        "output": "Google"
      }
    },
    {
      "id": "b22",
      "type": "code",
      "data": {
        "headingEn": "Changing the class attribute",
        "descEn": "",
        "code": "Employee.company = \"YouTube\"\n\nprint(harry.company)",
        "filename": "change_class_attribute.py",
        "headingKn": "class attribute ಬದಲಾಯಿಸುವುದು"
      }
    },
    {
      "id": "b23",
      "type": "output",
      "data": {
        "output": "YouTube"
      }
    },
    {
      "id": "b24",
      "type": "concept",
      "data": {
        "headingEn": "",
        "bodyEn": "Because every employee shares the same class attribute.",
        "bodyKn": "ಏಕೆಂದರೆ ಪ್ರತಿ employee ಅದೇ class attribute ಹಂಚಿಕೊಳ್ಳುತ್ತಾರೆ."
      }
    },
    {
      "id": "b25",
      "type": "example",
      "data": {
        "tag": "Real-Life Example",
        "textEn": "College name. Every student belongs to ABC Engineering College. Instead of storing the college name inside every student, store it once as a class attribute.",
        "textKn": "College ಹೆಸರು. ಪ್ರತಿ ವಿದ್ಯಾರ್ಥಿ ABC Engineering College ಗೆ ಸೇರಿದ್ದಾರೆ. ಪ್ರತಿ ವಿದ್ಯಾರ್ಥಿ ಒಳಗೆ college ಹೆಸರು ಸಂಗ್ರಹಿಸುವ ಬದಲು, ಅದನ್ನು ಒಮ್ಮೆ ಒಂದು class attribute ಆಗಿ ಸಂಗ್ರಹಿಸಿ."
      }
    },
    {
      "id": "b26",
      "type": "heading",
      "data": {
        "textEn": "6. Instance Attributes",
        "level": "H1",
        "textKn": "6. Instance Attributes"
      }
    },
    {
      "id": "b27",
      "type": "concept",
      "data": {
        "headingEn": "Instance Attributes belong to one object only.",
        "bodyEn": "",
        "headingKn": "Instance Attributes ಕೇವಲ ಒಂದು object ಗೆ ಮಾತ್ರ ಸೇರಿವೆ."
      }
    },
    {
      "id": "b28",
      "type": "code",
      "data": {
        "headingEn": "Setting instance attributes",
        "descEn": "name and salary belong only to Harry.",
        "code": "class Employee:\n    company = \"Google\"\n\nharry = Employee()\n\nharry.name = \"Harry\"\nharry.salary = 30000",
        "filename": "instance_attribute.py",
        "headingKn": "Instance attributes ಸೆಟ್ ಮಾಡುವುದು",
        "descKn": "name ಮತ್ತು salary ಕೇವಲ Harry ಗೆ ಮಾತ್ರ ಸೇರಿವೆ."
      }
    },
    {
      "id": "b29",
      "type": "code",
      "data": {
        "headingEn": "Another employee has different data",
        "descEn": "Each employee has different data.",
        "code": "riya = Employee()\n\nriya.name = \"Riya\"\nriya.salary = 45000",
        "filename": "another_instance.py",
        "headingKn": "ಇನ್ನೊಂದು employee ಬೇರೆ ಡೇಟಾ ಹೊಂದಿದೆ",
        "descKn": "ಪ್ರತಿ employee ಬೇರೆ ಡೇಟಾ ಹೊಂದಿದ್ದಾರೆ."
      }
    },
    {
      "id": "b30",
      "type": "table",
      "data": {
        "captionEn": "Class Attribute vs Instance Attribute",
        "rows": "Class Attribute | Instance Attribute\nShared by all objects | Unique to one object\nDefined inside class | Defined inside object\nSame value | Different values",
        "captionKn": "Class Attribute vs Instance Attribute"
      }
    },
    {
      "id": "b31",
      "type": "concept",
      "data": {
        "headingEn": "Priority Rule",
        "bodyEn": "Python first checks the Object, then the Class. Instance attributes always get priority.",
        "headingKn": "Priority Rule",
        "bodyKn": "Python ಮೊದಲು Object ಪರಿಶೀಲಿಸುತ್ತದೆ, ನಂತರ Class. Instance attributes ಯಾವಾಗಲೂ priority ಪಡೆಯುತ್ತವೆ."
      }
    },
    {
      "id": "b32",
      "type": "code",
      "data": {
        "headingEn": "Instance attribute overrides class attribute",
        "descEn": "",
        "code": "class Employee:\n    company = \"Google\"\n\nharry = Employee()\n\nharry.company = \"Microsoft\"\n\nprint(harry.company)",
        "filename": "priority_rule.py",
        "headingKn": "Instance attribute class attribute ಅನ್ನು override ಮಾಡುತ್ತದೆ"
      }
    },
    {
      "id": "b33",
      "type": "output",
      "data": {
        "output": "Microsoft"
      }
    },
    {
      "id": "b34",
      "type": "example",
      "data": {
        "tag": "Coding Practice",
        "textEn": "Create a class named Student. Create three objects. Add Name, Roll Number, and Marks as instance attributes. Print all details.",
        "textKn": "Student ಎಂಬ ಒಂದು class ರಚಿಸಿ. ಮೂರು objects ರಚಿಸಿ. Name, Roll Number, ಮತ್ತು Marks ಅನ್ನು instance attributes ಆಗಿ ಸೇರಿಸಿ. ಎಲ್ಲಾ ವಿವರಗಳನ್ನು ಮುದ್ರಿಸಿ."
      }
    },
    {
      "type": "concept",
      "data": {
        "headingEn": "Key Takeaways",
        "headingKn": "ಮುಖ್ಯ ಅಂಶಗಳು",
        "bodyEn": "• Object-Oriented Programming groups related data and behavior together instead of scattering variables and functions -- this follows the DRY principle (Don't Repeat Yourself).\n• A class is a blueprint; an object is a specific instance created from that blueprint, each with its own memory.\n• Modelling a real-world problem in OOP follows a pattern: nouns become classes, adjectives become attributes, and verbs become methods.\n• Class attributes belong to the entire class and are shared by all objects, while instance attributes belong to one specific object -- when both exist with the same name, the instance attribute takes priority for that object, which is a common source of confusion worth remembering.",
        "bodyKn": "• Object-Oriented Programming variables ಮತ್ತು functions ಗಳನ್ನು ಚದುರಿಸುವ ಬದಲು ಸಂಬಂಧಿತ ಡೇಟಾ ಮತ್ತು ವರ್ತನೆಯನ್ನು ಒಟ್ಟಿಗೆ ಗುಂಪುಗೂಡಿಸುತ್ತದೆ -- ಇದು DRY ತತ್ವ ಅನುಸರಿಸುತ್ತದೆ (Don't Repeat Yourself).\n• ಒಂದು class ಒಂದು blueprint; ಒಂದು object ಆ blueprint ನಿಂದ ರಚಿಸಿದ ಒಂದು ನಿರ್ದಿಷ್ಟ instance, ಪ್ರತಿಯೊಂದೂ ತನ್ನದೇ memory ಹೊಂದಿದೆ.\n• OOP ನಲ್ಲಿ ಒಂದು ನಿಜ-ಜಗತ್ತಿನ ಸಮಸ್ಯೆ ಮಾಡೆಲ್ ಮಾಡುವುದು ಒಂದು ಮಾದರಿ ಅನುಸರಿಸುತ್ತದೆ: nouns classes ಆಗುತ್ತವೆ, adjectives attributes ಆಗುತ್ತವೆ, ಮತ್ತು verbs methods ಆಗುತ್ತವೆ.\n• Class attributes ಇಡೀ class ಗೆ ಸೇರಿವೆ ಮತ್ತು ಎಲ್ಲಾ objects ಗಳಿಂದ ಹಂಚಿಕೊಳ್ಳಲ್ಪಡುತ್ತವೆ, instance attributes ಒಂದು ನಿರ್ದಿಷ್ಟ object ಗೆ ಸೇರಿವೆ -- ಎರಡೂ ಒಂದೇ ಹೆಸರಿನೊಂದಿಗೆ ಅಸ್ತಿತ್ವದಲ್ಲಿದ್ದಾಗ, instance attribute ಆ object ಗೆ ಆದ್ಯತೆ ಪಡೆಯುತ್ತದೆ, ಇದು ನೆನಪಿಡಲು ಯೋಗ್ಯವಾದ ಗೊಂದಲದ ಒಂದು ಸಾಮಾನ್ಯ ಮೂಲ."
      }
    },
    {
      "id": "b35",
      "type": "quiz",
      "data": {
        "questions": [
          {
            "q": "A class is:",
            "opts": [
              "Variable",
              "Function",
              "Blueprint",
              "Loop"
            ],
            "correct": 2,
            "qKn": "ಒಂದು class ಎಂದರೆ:",
            "optsKn": [
              "Variable",
              "Function",
              "Blueprint",
              "Loop"
            ]
          },
          {
            "q": "Which of these creates an object? (Employee())",
            "opts": [
              "Class",
              "Object",
              "Function",
              "Module"
            ],
            "correct": 1,
            "qKn": "ಇವುಗಳಲ್ಲಿ ಯಾವುದು ಒಂದು object ರಚಿಸುತ್ತದೆ? (Employee())",
            "optsKn": [
              "Class",
              "Object",
              "Function",
              "Module"
            ]
          },
          {
            "q": "Which is shared among all objects?",
            "opts": [
              "Instance Attribute",
              "Local Variable",
              "Class Attribute",
              "Loop Variable"
            ],
            "correct": 2,
            "qKn": "ಎಲ್ಲಾ objects ಗಳ ನಡುವೆ ಯಾವುದು ಹಂಚಿಕೊಳ್ಳಲಾಗಿದೆ?",
            "optsKn": [
              "Instance Attribute",
              "Local Variable",
              "Class Attribute",
              "Loop Variable"
            ]
          },
          {
            "q": "When an instance attribute and a class attribute have the same name, which gets priority?",
            "opts": [
              "Class Attribute",
              "Instance Attribute",
              "Function",
              "Global Variable"
            ],
            "correct": 1,
            "qKn": "ಒಂದು instance attribute ಮತ್ತು ಒಂದು class attribute ಒಂದೇ ಹೆಸರು ಹೊಂದಿದ್ದರೆ, ಯಾವುದು priority ಪಡೆಯುತ್ತದೆ?",
            "optsKn": [
              "Class Attribute",
              "Instance Attribute",
              "Function",
              "Global Variable"
            ]
          },
          {
            "q": "Identify the class in: class Car: pass \n mycar = Car()",
            "opts": [
              "mycar",
              "pass",
              "Car",
              "class"
            ],
            "correct": 2,
            "qKn": "ಇದರಲ್ಲಿ class ಗುರುತಿಸಿ: class Car: pass \n mycar = Car()",
            "optsKn": [
              "mycar",
              "pass",
              "Car",
              "class"
            ]
          }
        ]
      }
    }
  ]
};
