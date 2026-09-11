module.exports = {
  "phaseId": "6a358e65fc29b5a471444755",
  "moduleId": "6a358e66fc29b5a471444773",
  "order": 1,
  "type": "reading",
  "duration": 22,
  "difficulty": "beginner",
  "status": "published",
  "title": "Self Parameter, Methods, Static Methods & Constructors",
  "titleKn": "ಸೆಲ್ಫ್ ಪ್ಯಾರಾಮೀಟರ್, ಮೆಥಡ್ಸ್, ಸ್ಟ್ಯಾಟಿಕ್ ಮೆಥಡ್ಸ್ ಅಂಡ್ ಕನ್‌ಸ್ಟ್ರಕ್ಟರ್ಸ್",
  "desc": "Understand self, instance methods, @staticmethod, and the __init__() constructor",
  "descKn": "Understand self, instance methods, @staticmethod, and the __init__() constructor",
  "objectives": [
    "Understand the self parameter",
    "Create instance methods",
    "Create static methods using @staticmethod",
    "Use the __init__() constructor",
    "Build complete Python classes"
  ],
  "objectivesKn": [],
  "blocks": [
    {
      "id": "b1",
      "type": "concept",
      "data": {
        "headingEn": "LEARNING OBJECTIVES",
        "bodyEn": "After completing this lesson, you will be able to:\n\nUnderstand the self parameter\nCreate instance methods\nCreate static methods using @staticmethod\nUse the __init__() constructor\nBuild complete Python classes",
        "headingKn": "LEARNING OBJECTIVES",
        "bodyKn": "ಈ lesson ಪೂರ್ಣಗೊಳಿಸಿದ ನಂತರ, ನೀವು ಇವುಗಳನ್ನು ಮಾಡಲು ಸಾಧ್ಯವಾಗುತ್ತದೆ:\n\nself parameter ಅರ್ಥ ಮಾಡಿಕೊಳ್ಳಿ\nInstance methods ರಚಿಸಿ\n@staticmethod ಬಳಸಿ static methods ರಚಿಸಿ\n__init__() constructor ಬಳಸಿ\nಸಂಪೂರ್ಣ Python classes ಕಟ್ಟಿ"
      }
    },
    {
      "id": "b2",
      "type": "concept",
      "data": {
        "headingEn": "1. Understanding the self Parameter",
        "bodyEn": "Every object in Python needs a way to refer to itself. Python uses the self parameter for this purpose.\n\nThink of self as saying: \"I am this specific object.\"\n\nWhen you call a method on an object, Python automatically passes that object as the first argument (self).",
        "headingKn": "1. self Parameter ಅರ್ಥ ಮಾಡಿಕೊಳ್ಳುವುದು",
        "bodyKn": "Python ನಲ್ಲಿ ಪ್ರತಿ object ಗೆ ತನ್ನನ್ನೇ ಉಲ್ಲೇಖಿಸಲು ಒಂದು ಮಾರ್ಗ ಬೇಕು. Python ಈ ಉದ್ದೇಶಕ್ಕಾಗಿ self parameter ಬಳಸುತ್ತದೆ.\n\nself ಅನ್ನು ಹೀಗೆ ಹೇಳುತ್ತಿದೆ ಎಂದು ಯೋಚಿಸಿ: \"ನಾನು ಈ ನಿರ್ದಿಷ್ಟ object.\"\n\nನೀವು ಒಂದು object ಮೇಲೆ ಒಂದು method ಕರೆದಾಗ, Python ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಆ object ಅನ್ನು ಮೊದಲ argument (self) ಆಗಿ ರವಾನಿಸುತ್ತದೆ."
      }
    },
    {
      "id": "b3",
      "type": "code",
      "data": {
        "headingEn": "Calling a method — self behind the scenes",
        "descEn": "Python internally treats harry.getSalary() like Employee.getSalary(harry). So self refers to the harry object.",
        "code": "class Employee:\n    def getSalary(self):\n        print(\"Salary is 30000\")\n\nharry = Employee()\nharry.getSalary()",
        "filename": "self_basics.py",
        "headingKn": "ಒಂದು method ಕರೆಯುವುದು — ಪರದೆಯ ಹಿಂದೆ self",
        "descKn": "Python ಆಂತರಿಕವಾಗಿ harry.getSalary() ಅನ್ನು Employee.getSalary(harry) ನಂತೆ ಪರಿಗಣಿಸುತ್ತದೆ. ಆದ್ದರಿಂದ self harry object ಅನ್ನು ಉಲ್ಲೇಖಿಸುತ್ತದೆ."
      }
    },
    {
      "id": "b4",
      "type": "output",
      "data": {
        "output": "Salary is 30000"
      }
    },
    {
      "id": "b5",
      "type": "concept",
      "data": {
        "headingEn": "Why is self Needed?",
        "bodyEn": "Suppose there are two employees: harry and riya.\n\nWhen you call harry.getSalary(), Python knows self is harry.\nWhen you call riya.getSalary(), Python knows self is riya.\n\nWithout self, Python wouldn't know which object's data to use.",
        "headingKn": "self ಏಕೆ ಅಗತ್ಯ?",
        "bodyKn": "ಇಬ್ಬರು employees ಇದ್ದಾರೆ ಎಂದು ಭಾವಿಸಿ: harry ಮತ್ತು riya.\n\nನೀವು harry.getSalary() ಕರೆದಾಗ, Python self harry ಎಂದು ತಿಳಿಯುತ್ತದೆ.\nನೀವು riya.getSalary() ಕರೆದಾಗ, Python self riya ಎಂದು ತಿಳಿಯುತ್ತದೆ.\n\nself ಇಲ್ಲದೆ, ಯಾವ object ನ ಡೇಟಾ ಬಳಸಬೇಕೆಂದು Python ಗೆ ತಿಳಿಯುವುದಿಲ್ಲ."
      }
    },
    {
      "id": "b6",
      "type": "code",
      "data": {
        "headingEn": "self with instance attributes",
        "descEn": "self.name means \"the name of the current object.\"",
        "code": "class Student:\n    def display(self):\n        print(self.name)\n\ns1 = Student()\ns1.name = \"Rahul\"\n\ns1.display()",
        "filename": "self_instance_attr.py",
        "headingKn": "self instance attributes ಜೊತೆ",
        "descKn": "self.name ಎಂದರೆ \"ಪ್ರಸ್ತುತ object ನ name.\""
      }
    },
    {
      "id": "b7",
      "type": "output",
      "data": {
        "output": "Rahul"
      }
    },
    {
      "id": "b8",
      "type": "concept",
      "data": {
        "headingEn": "2. Methods in a Class",
        "bodyEn": "A method is simply a function that belongs to a class.",
        "headingKn": "2. ಒಂದು Class ನಲ್ಲಿ Methods",
        "bodyKn": "ಒಂದು method ಕೇವಲ ಒಂದು class ಗೆ ಸೇರಿದ ಒಂದು function."
      }
    },
    {
      "id": "b9",
      "type": "code",
      "data": {
        "headingEn": "A simple instance method",
        "descEn": "",
        "code": "class Employee:\n    def greet(self):\n        print(\"Welcome!\")\n\nemp = Employee()\nemp.greet()",
        "filename": "instance_method.py",
        "headingKn": "ಒಂದು ಸರಳ instance method"
      }
    },
    {
      "id": "b10",
      "type": "output",
      "data": {
        "output": "Welcome!"
      }
    },
    {
      "id": "b11",
      "type": "concept",
      "data": {
        "headingEn": "3. Static Methods",
        "bodyEn": "Sometimes a function doesn't need any object data. For example, displaying a welcome message.",
        "headingKn": "3. Static Methods",
        "bodyKn": "ಕೆಲವೊಮ್ಮೆ ಒಂದು function ಗೆ ಯಾವುದೇ object ಡೇಟಾ ಬೇಕಾಗುವುದಿಲ್ಲ. ಉದಾಹರಣೆಗೆ, ಒಂದು welcome message ತೋರಿಸುವುದು."
      }
    },
    {
      "id": "b12",
      "type": "code",
      "data": {
        "headingEn": "Defining a static method",
        "descEn": "",
        "code": "class Employee:\n\n    @staticmethod\n    def greet():\n        print(\"Hello User\")",
        "filename": "static_method_def.py",
        "headingKn": "ಒಂದು static method ವ್ಯಾಖ್ಯಾನಿಸುವುದು"
      }
    },
    {
      "id": "b13",
      "type": "code",
      "data": {
        "headingEn": "Calling a static method",
        "descEn": "Both ways work.",
        "code": "Employee.greet()\n\n# or\nemp = Employee()\nemp.greet()",
        "filename": "static_method_call.py",
        "headingKn": "ಒಂದು static method ಕರೆಯುವುದು",
        "descKn": "ಎರಡೂ ಮಾರ್ಗಗಳು ಕೆಲಸ ಮಾಡುತ್ತವೆ."
      }
    },
    {
      "id": "b14",
      "type": "output",
      "data": {
        "output": "Hello User"
      }
    },
    {
      "id": "b15",
      "type": "concept",
      "data": {
        "headingEn": "When to Use Static Methods?",
        "bodyEn": "Use @staticmethod when the function:\nDoesn't use self\nDoesn't access object attributes\nDoesn't modify object data\n\nExample: Greeting users, calculating simple values, displaying company rules.",
        "headingKn": "Static Methods ಯಾವಾಗ ಬಳಸಬೇಕು?",
        "bodyKn": "Function ಈ ರೀತಿ ಇದ್ದಾಗ @staticmethod ಬಳಸಿ:\nself ಬಳಸುವುದಿಲ್ಲ\nobject attributes ಪ್ರವೇಶಿಸುವುದಿಲ್ಲ\nobject ಡೇಟಾ ಮಾರ್ಪಡಿಸುವುದಿಲ್ಲ\n\nಉದಾಹರಣೆ: ಬಳಕೆದಾರರನ್ನು ಸ್ವಾಗತಿಸುವುದು, ಸರಳ ಮೌಲ್ಯಗಳನ್ನು ಲೆಕ್ಕಹಾಕುವುದು, company rules ತೋರಿಸುವುದು."
      }
    },
    {
      "id": "b16",
      "type": "concept",
      "data": {
        "headingEn": "4. Constructor — __init__( )",
        "bodyEn": "A constructor is a special method that runs automatically when an object is created.",
        "headingKn": "4. Constructor — __init__()",
        "bodyKn": "ಒಂದು constructor ಒಂದು object ರಚಿಸಿದಾಗ ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಚಲಿಸುವ ಒಂದು ವಿಶೇಷ method."
      }
    },
    {
      "id": "b17",
      "type": "code",
      "data": {
        "headingEn": "A basic constructor",
        "descEn": "You didn't call __init__() directly. Python did it automatically.",
        "code": "class Employee:\n\n    def __init__(self):\n        print(\"Employee Created\")\n\nemp = Employee()",
        "filename": "basic_constructor.py",
        "headingKn": "ಒಂದು ಮೂಲಭೂತ constructor",
        "descKn": "ನೀವು __init__() ಅನ್ನು ನೇರವಾಗಿ ಕರೆಯಲಿಲ್ಲ. Python ಅದನ್ನು ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಮಾಡಿತು."
      }
    },
    {
      "id": "b18",
      "type": "output",
      "data": {
        "output": "Employee Created"
      }
    },
    {
      "id": "b19",
      "type": "concept",
      "data": {
        "headingEn": "Constructor with Parameters",
        "bodyEn": "",
        "headingKn": "Parameters ಜೊತೆ Constructor"
      }
    },
    {
      "id": "b20",
      "type": "code",
      "data": {
        "headingEn": "Passing data into the constructor",
        "descEn": "",
        "code": "class Employee:\n\n    def __init__(self, name):\n        self.name = name\n\n    def display(self):\n        print(self.name)\n\nemp = Employee(\"Harry\")\nemp.display()",
        "filename": "constructor_with_params.py",
        "headingKn": "Constructor ಗೆ ಡೇಟಾ ರವಾನಿಸುವುದು"
      }
    },
    {
      "id": "b21",
      "type": "output",
      "data": {
        "output": "Harry"
      }
    },
    {
      "id": "b22",
      "type": "example",
      "data": {
        "tag": "Real-Life Example",
        "textEn": "Imagine registering a new student. When a new student joins, you immediately collect their Name, Roll Number, and Course. The constructor initializes these values automatically.",
        "textKn": "ಒಂದು ಹೊಸ ವಿದ್ಯಾರ್ಥಿಯನ್ನು register ಮಾಡುವುದನ್ನು ಊಹಿಸಿ. ಒಬ್ಬ ಹೊಸ ವಿದ್ಯಾರ್ಥಿ ಸೇರಿದಾಗ, ನೀವು ತಕ್ಷಣ ಅವರ Name, Roll Number, ಮತ್ತು Course ಸಂಗ್ರಹಿಸುತ್ತೀರಿ. Constructor ಈ ಮೌಲ್ಯಗಳನ್ನು ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಆರಂಭಿಸುತ್ತದೆ."
      }
    },
    {
      "id": "b23",
      "type": "code",
      "data": {
        "headingEn": "Student registration using a constructor",
        "descEn": "",
        "code": "class Student:\n\n    def __init__(self, name, roll, course):\n        self.name = name\n        self.roll = roll\n        self.course = course\n\n    def display(self):\n        print(self.name)\n        print(self.roll)\n        print(self.course)\n\ns1 = Student(\"Rahul\", 101, \"BCA\")\ns1.display()",
        "filename": "student_registration.py",
        "headingKn": "Constructor ಬಳಸಿ ವಿದ್ಯಾರ್ಥಿ registration"
      }
    },
    {
      "id": "b24",
      "type": "output",
      "data": {
        "output": "Rahul\n101\nBCA"
      }
    },
    {
      "id": "b25",
      "type": "heading",
      "data": {
        "textEn": "Complete OOP Example",
        "level": "H1",
        "textKn": "ಸಂಪೂರ್ಣ OOP ಉದಾಹರಣೆ"
      }
    },
    {
      "id": "b26",
      "type": "code",
      "data": {
        "headingEn": "Bringing it all together — class attribute, constructor, method, static method",
        "descEn": "",
        "code": "class Employee:\n\n    company = \"Google\"\n\n    def __init__(self, name, salary):\n        self.name = name\n        self.salary = salary\n\n    def display(self):\n        print(\"Name :\", self.name)\n        print(\"Salary :\", self.salary)\n        print(\"Company :\", Employee.company)\n\n    @staticmethod\n    def greet():\n        print(\"Welcome to the company!\")\n\nemp1 = Employee(\"Harry\", 30000)\nemp2 = Employee(\"Riya\", 45000)\n\nEmployee.greet()\n\nemp1.display()\nprint()\n\nemp2.display()",
        "filename": "complete_oop_example.py",
        "headingKn": "ಎಲ್ಲವನ್ನೂ ಒಟ್ಟುಗೂಡಿಸುವುದು — class attribute, constructor, method, static method"
      }
    },
    {
      "id": "b27",
      "type": "output",
      "data": {
        "output": "Welcome to the company!\nName : Harry\nSalary : 30000\nCompany : Google\n\nName : Riya\nSalary : 45000\nCompany : Google"
      }
    },
    {
      "type": "concept",
      "data": {
        "headingEn": "Key Takeaways",
        "headingKn": "ಮುಖ್ಯ ಅಂಶಗಳು",
        "bodyEn": "• self is the first parameter of every instance method -- it's how Python passes a reference to the specific object the method was called on, letting the method read and modify that object's own attributes.\n• Regular methods operate on an instance (and take self); static methods don't need access to the instance or its data, so they're defined without self using the @staticmethod decorator.\n• The constructor, __init__(), runs automatically when an object is created and is the standard place to set up initial attribute values, optionally accepting parameters to customize each new object.\n• Together, self, methods, static methods, and constructors are the working vocabulary of every Python class you'll write -- understanding what each one is for is what separates comfortably reading OOP code from being confused by it.",
        "bodyKn": "• self ಪ್ರತಿ instance method ನ ಮೊದಲ parameter -- Python ಒಂದು method ಯಾವ ನಿರ್ದಿಷ್ಟ object ಮೇಲೆ ಕರೆಯಲ್ಪಟ್ಟಿತು ಎಂಬುದಕ್ಕೆ ಒಂದು reference ಹೇಗೆ ರವಾನಿಸುತ್ತದೆ ಎಂಬುದು, method ಗೆ ಆ object ನ ಸ್ವಂತ attributes ಗಳನ್ನು ಓದಲು ಮತ್ತು ಮಾರ್ಪಡಿಸಲು ಅನುಮತಿಸುತ್ತದೆ.\n• ಸಾಮಾನ್ಯ methods ಒಂದು instance ಮೇಲೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತವೆ (ಮತ್ತು self ತೆಗೆದುಕೊಳ್ಳುತ್ತವೆ); static methods ಗೆ instance ಅಥವಾ ಅದರ ಡೇಟಾಗೆ access ಬೇಕಾಗಿಲ್ಲ, ಆದ್ದರಿಂದ ಅವು @staticmethod decorator ಬಳಸಿ self ಇಲ್ಲದೆ ವ್ಯಾಖ್ಯಾನಿಸಲ್ಪಡುತ್ತವೆ.\n• Constructor, __init__(), ಒಂದು object ರಚಿಸಿದಾಗ ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಚಲಿಸುತ್ತದೆ ಮತ್ತು ಆರಂಭಿಕ attribute ಮೌಲ್ಯಗಳನ್ನು ಹೊಂದಿಸಲು ಪ್ರಮಾಣಿತ ಸ್ಥಳ, ಪ್ರತಿ ಹೊಸ object ಅನ್ನು ಕಸ್ಟಮೈಸ್ ಮಾಡಲು ಐಚ್ಛಿಕವಾಗಿ parameters ಸ್ವೀಕರಿಸುತ್ತದೆ.\n• ಒಟ್ಟಿಗೆ, self, methods, static methods, ಮತ್ತು constructors ನೀವು ಬರೆಯುವ ಪ್ರತಿ Python class ನ ಕೆಲಸ ಮಾಡುವ ಶಬ್ದಕೋಶ -- ಪ್ರತಿಯೊಂದೂ ಯಾವುದಕ್ಕೆ ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದೇ OOP ಕೋಡ್ ಅನ್ನು ಆರಾಮವಾಗಿ ಓದುವುದು ಮತ್ತು ಅದರಿಂದ ಗೊಂದಲಗೊಳ್ಳುವುದರ ನಡುವಿನ ವ್ಯತ್ಯಾಸ."
      }
    },
    {
      "id": "b28",
      "type": "quiz",
      "data": {
        "questions": [
          {
            "q": "What does self refer to?",
            "opts": [
              "The class",
              "The current object",
              "A global variable",
              "A module"
            ],
            "correct": 1,
            "qKn": "self ಏನನ್ನು ಉಲ್ಲೇಖಿಸುತ್ತದೆ?",
            "optsKn": [
              "Class",
              "ಪ್ರಸ್ತುತ object",
              "ಒಂದು global variable",
              "ಒಂದು module"
            ]
          },
          {
            "q": "Which method runs automatically when an object is created?",
            "opts": [
              "start()",
              "create()",
              "__init__()",
              "main()"
            ],
            "correct": 2,
            "qKn": "ಒಂದು object ರಚಿಸಿದಾಗ ಯಾವ method ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಚಲಿಸುತ್ತದೆ?",
            "optsKn": [
              "start()",
              "create()",
              "__init__()",
              "main()"
            ]
          },
          {
            "q": "What is the purpose of @staticmethod?",
            "opts": [
              "To create objects",
              "To define a method that does not use self",
              "To delete objects",
              "To inherit classes"
            ],
            "correct": 1,
            "qKn": "@staticmethod ನ ಉದ್ದೇಶ ಏನು?",
            "optsKn": [
              "Objects ರಚಿಸಲು",
              "self ಬಳಸದ ಒಂದು method ವ್ಯಾಖ್ಯಾನಿಸಲು",
              "Objects ಅಳಿಸಲು",
              "Classes inherit ಮಾಡಲು"
            ]
          },
          {
            "q": "What will be printed?\nclass Student:\n    def __init__(self, name):\n        self.name = name\n\ns = Student(\"Anita\")\nprint(s.name)",
            "opts": [
              "Student",
              "__init__",
              "Anita",
              "Error"
            ],
            "correct": 2,
            "qKn": "ಏನು ಮುದ್ರಿಸಲಾಗುತ್ತದೆ?\nclass Student:\n    def __init__(self, name):\n        self.name = name\n\ns = Student(\"Anita\")\nprint(s.name)",
            "optsKn": [
              "Student",
              "__init__",
              "Anita",
              "Error"
            ]
          },
          {
            "q": "Which statement about constructors is true?",
            "opts": [
              "They must be called manually.",
              "They run automatically when an object is created.",
              "They can only print messages.",
              "They cannot take parameters."
            ],
            "correct": 1,
            "qKn": "Constructors ಬಗ್ಗೆ ಯಾವ statement ಸರಿ?",
            "optsKn": [
              "ಅವುಗಳನ್ನು ಕೈಯಾರೆ ಕರೆಯಬೇಕು.",
              "ಒಂದು object ರಚಿಸಿದಾಗ ಅವು ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಚಲಿಸುತ್ತವೆ.",
              "ಅವು ಕೇವಲ messages ಮುದ್ರಿಸಬಹುದು.",
              "ಅವು parameters ತೆಗೆದುಕೊಳ್ಳಲಾಗುವುದಿಲ್ಲ."
            ]
          }
        ]
      }
    }
  ]
};
