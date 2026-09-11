module.exports = {
  "phaseId": "6a358e65fc29b5a471444755",
  "moduleId": "6a358e66fc29b5a471444794",
  "order": 0,
  "type": "reading",
  "duration": 28,
  "difficulty": "intermediate",
  "status": "published",
  "title": "Inheritance & Advanced OOP",
  "titleKn": "ಇನ್ಹೆರಿಟೆನ್ಸ್ ಅಂಡ್ ಅಡ್ವಾನ್ಸ್ಡ್ OOP",
  "desc": "Inheritance, super(), class methods, properties, and operator overloading",
  "descKn": "Inheritance, super(), class methods, properties, and operator overloading",
  "objectives": [
    "Implement single and multiple inheritance in Python classes",
    "Use super() to call parent class methods and constructors",
    "Override methods in child classes to customize behavior",
    "Understand Method Resolution Order (MRO) in multiple inheritance",
    "Apply encapsulation using private and protected attributes",
    "Use dunder (magic) methods like __str__, __repr__, and __len__"
  ],
  "objectivesKn": [
    "Python classes ನಲ್ಲಿ single ಮತ್ತು multiple inheritance ಅಳವಡಿಸಿ",
    "Parent class methods ಮತ್ತು constructors call ಮಾಡಲು super() ಬಳಸಿ",
    "ನಡವಳಿಕೆ customize ಮಾಡಲು child classes ನಲ್ಲಿ methods override ಮಾಡಿ",
    "Multiple inheritance ನಲ್ಲಿ Method Resolution Order (MRO) ಅರ್ಥ ಮಾಡಿಕೊಳ್ಳಿ",
    "Private ಮತ್ತು protected attributes ಬಳಸಿ encapsulation ಅನ್ವಯಿಸಿ",
    "__str__, __repr__, __len__ ಮುಂತಾದ dunder (magic) methods ಬಳಸಿ"
  ],
  "blocks": [
    {
      "id": "b1",
      "type": "heading",
      "data": {
        "textEn": "Inheritance & More on OOPs",
        "level": "H1",
        "textKn": "Inheritance & OOPs ಬಗ್ಗೆ ಇನ್ನಷ್ಟು"
      }
    },
    {
      "id": "b2",
      "type": "concept",
      "data": {
        "headingEn": "Inheritance",
        "bodyEn": "Inheritance lets you create a new class from an existing one, so the new class automatically gets the parent's attributes and methods — and can add or override its own.",
        "headingKn": "Inheritance",
        "bodyKn": "Inheritance ನಿಮಗೆ ಇರುವ ಒಂದು class ಇಂದ ಒಂದು ಹೊಸ class ರಚಿಸಲು ಅನುಮತಿಸುತ್ತದೆ, ಆದ್ದರಿಂದ ಹೊಸ class ಸ್ವಯಂಚಾಲಿತವಾಗಿ parent ನ attributes ಮತ್ತು methods ಪಡೆಯುತ್ತದೆ — ಮತ್ತು ತನ್ನದೇ ಆದವುಗಳನ್ನು ಸೇರಿಸಬಹುದು ಅಥವಾ override ಮಾಡಬಹುದು."
      }
    },
    {
      "id": "b3",
      "type": "code",
      "data": {
        "headingEn": "Base class and derived class",
        "descEn": "Programmer automatically has work() from Employee, and adds its own code() method.",
        "code": "class Employee:              # Base class\n    def __init__(self, name):\n        self.name = name\n\n    def work(self):\n        print(f\"{self.name} is working\")\n\nclass Programmer(Employee):  # Derived / child class\n    def code(self):\n        print(f\"{self.name} is writing code\")",
        "filename": "inheritance_base.py",
        "headingKn": "Base class ಮತ್ತು derived class",
        "descKn": "Programmer ಸ್ವಯಂಚಾಲಿತವಾಗಿ Employee ಇಂದ work() ಹೊಂದಿದೆ, ಮತ್ತು ತನ್ನದೇ code() method ಸೇರಿಸುತ್ತದೆ."
      }
    },
    {
      "id": "b4",
      "type": "code",
      "data": {
        "headingEn": "Using the inherited and new methods",
        "descEn": "",
        "code": "harry = Programmer(\"Harry\")\nharry.work()  # inherited from Employee\nharry.code()  # defined in Programmer",
        "filename": "inheritance_use.py",
        "headingKn": "Inherit ಮಾಡಿದ ಮತ್ತು ಹೊಸ methods ಬಳಸುವುದು"
      }
    },
    {
      "id": "b5",
      "type": "output",
      "data": {
        "output": "Harry is working\nHarry is writing code"
      }
    },
    {
      "id": "b6",
      "type": "heading",
      "data": {
        "textEn": "Types of Inheritance",
        "level": "H2",
        "textKn": "Inheritance ನ ವಿಧಗಳು"
      }
    },
    {
      "id": "b7",
      "type": "concept",
      "data": {
        "headingEn": "",
        "bodyEn": "Single inheritance — one child inherits from one parent.\nMultiple inheritance — one child inherits from two (or more) parents at once.\nMultilevel inheritance — a chain where a child becomes the parent of another child.",
        "bodyKn": "Single inheritance — ಒಂದು child ಒಂದು parent ಇಂದ inherit ಮಾಡುತ್ತದೆ.\nMultiple inheritance — ಒಂದು child ಒಮ್ಮೆಗೆ ಎರಡು (ಅಥವಾ ಹೆಚ್ಚು) parents ಇಂದ inherit ಮಾಡುತ್ತದೆ.\nMultilevel inheritance — ಒಂದು child ಇನ್ನೊಂದು child ನ parent ಆಗುವ ಒಂದು ಸರಪಳಿ."
      }
    },
    {
      "id": "b8",
      "type": "heading",
      "data": {
        "textEn": "Single Inheritance",
        "level": "H2",
        "textKn": "Single Inheritance"
      }
    },
    {
      "id": "b9",
      "type": "concept",
      "data": {
        "headingEn": "",
        "bodyEn": "Base → Derived\n\nThis is the Employee → Programmer example shown above.",
        "bodyKn": "Base → Derived\n\nಇದು ಮೇಲೆ ತೋರಿಸಿದ Employee → Programmer ಉದಾಹರಣೆ."
      }
    },
    {
      "id": "b10",
      "type": "heading",
      "data": {
        "textEn": "Multiple Inheritance",
        "level": "H2",
        "textKn": "Multiple Inheritance"
      }
    },
    {
      "id": "b11",
      "type": "concept",
      "data": {
        "headingEn": "",
        "bodyEn": "One child inherits from two or more parents at once.\n\nParent 1 ─┐\n          ├─→ Child\nParent 2 ─┘",
        "bodyKn": "ಒಂದು child ಒಮ್ಮೆಗೆ ಎರಡು ಅಥವಾ ಹೆಚ್ಚು parents ಇಂದ inherit ಮಾಡುತ್ತದೆ.\n\nParent 1 ─┐\n          ├─→ Child\nParent 2 ─┘"
      }
    },
    {
      "id": "b12",
      "type": "code",
      "data": {
        "headingEn": "A Duck that inherits from two parents",
        "descEn": "",
        "code": "class Flyer:\n    def fly(self):\n        print(\"I can fly\")\n\nclass Swimmer:\n    def swim(self):\n        print(\"I can swim\")\n\nclass Duck(Flyer, Swimmer):   # inherits from both\n    pass\n\nd = Duck()\nd.fly()   # from Flyer\nd.swim()  # from Swimmer",
        "filename": "multiple_inheritance.py",
        "headingKn": "ಎರಡು parents ಇಂದ inherit ಮಾಡುವ ಒಂದು Duck"
      }
    },
    {
      "id": "b13",
      "type": "output",
      "data": {
        "output": "I can fly\nI can swim"
      }
    },
    {
      "id": "b14",
      "type": "heading",
      "data": {
        "textEn": "Multilevel Inheritance",
        "level": "H2",
        "textKn": "Multilevel Inheritance"
      }
    },
    {
      "id": "b15",
      "type": "concept",
      "data": {
        "headingEn": "",
        "bodyEn": "A chain where a child becomes the parent of another child.\n\nParent → Child1 → Child2",
        "bodyKn": "ಒಂದು child ಇನ್ನೊಂದು child ನ parent ಆಗುವ ಒಂದು ಸರಪಳಿ.\n\nParent → Child1 → Child2"
      }
    },
    {
      "id": "b16",
      "type": "code",
      "data": {
        "headingEn": "Animal → Dog → Puppy",
        "descEn": "",
        "code": "class Animal:\n    def eat(self):\n        print(\"Eating...\")\n\nclass Dog(Animal):        # Child1\n    def bark(self):\n        print(\"Barking...\")\n\nclass Puppy(Dog):         # Child2, inherits Animal *and* Dog\n    def play(self):\n        print(\"Playing...\")\n\np = Puppy()\np.eat()   # from Animal (2 levels up)\np.bark()  # from Dog (1 level up)\np.play()  # its own",
        "filename": "multilevel_inheritance.py",
        "headingKn": "Animal → Dog → Puppy"
      }
    },
    {
      "id": "b17",
      "type": "output",
      "data": {
        "output": "Eating...\nBarking...\nPlaying..."
      }
    },
    {
      "id": "b18",
      "type": "heading",
      "data": {
        "textEn": "super( ) Method",
        "level": "H1",
        "textKn": "super() Method"
      }
    },
    {
      "id": "b19",
      "type": "concept",
      "data": {
        "headingEn": "",
        "bodyEn": "super( ) lets a child class call a method from its parent — most commonly the parent's __init__( ), so you don't have to rewrite that setup code.",
        "bodyKn": "super() ಒಂದು child class ಗೆ ಅದರ parent ಇಂದ ಒಂದು method ಕರೆಯಲು ಅನುಮತಿಸುತ್ತದೆ — ಸಾಮಾನ್ಯವಾಗಿ parent ನ __init__(), ಆದ್ದರಿಂದ ನೀವು ಆ setup ಕೋಡ್ ಅನ್ನು ಮತ್ತೆ ಬರೆಯಬೇಕಾಗಿಲ್ಲ."
      }
    },
    {
      "id": "b20",
      "type": "code",
      "data": {
        "headingEn": "Using super( ) to reuse the parent constructor",
        "descEn": "Without super(), you'd have to duplicate self.name = name inside Programmer yourself.",
        "code": "class Employee:\n    def __init__(self, name):\n        self.name = name\n\nclass Programmer(Employee):\n    def __init__(self, name, language):\n        super().__init__(name)     # calls Employee's __init__\n        self.language = language\n\np = Programmer(\"Harry\", \"Python\")\nprint(p.name, p.language)",
        "filename": "super_method.py",
        "headingKn": "Parent constructor ಮರುಬಳಕೆ ಮಾಡಲು super() ಬಳಸುವುದು",
        "descKn": "super() ಇಲ್ಲದೆ, ನೀವು Programmer ಒಳಗೆ self.name = name ಅನ್ನು ನೀವೇ ಪುನರಾವರ್ತಿಸಬೇಕಾಗುತ್ತದೆ."
      }
    },
    {
      "id": "b21",
      "type": "output",
      "data": {
        "output": "Harry Python"
      }
    },
    {
      "id": "b22",
      "type": "heading",
      "data": {
        "textEn": "Class Method",
        "level": "H1",
        "textKn": "Class Method"
      }
    },
    {
      "id": "b23",
      "type": "concept",
      "data": {
        "headingEn": "",
        "bodyEn": "A class method is bound to the class itself, not to any one object — so it doesn't need self. It takes cls instead, and is marked with @classmethod.",
        "bodyKn": "ಒಂದು class method ಯಾವುದೇ ಒಂದು object ಗೆ ಅಲ್ಲ, class ಗೇ bound ಆಗಿದೆ — ಆದ್ದರಿಂದ ಇದಕ್ಕೆ self ಬೇಕಾಗಿಲ್ಲ. ಇದು ಬದಲಿಗೆ cls ತೆಗೆದುಕೊಳ್ಳುತ್ತದೆ, ಮತ್ತು @classmethod ಜೊತೆ ಗುರುತಿಸಲಾಗಿದೆ."
      }
    },
    {
      "id": "b24",
      "type": "code",
      "data": {
        "headingEn": "A @classmethod that changes a class attribute",
        "descEn": "",
        "code": "class Employee:\n    company = \"Google\"\n\n    @classmethod\n    def change_company(cls, new_name):\n        cls.company = new_name\n\nEmployee.change_company(\"YouTube\")\nprint(Employee.company)",
        "filename": "classmethod_basic.py",
        "headingKn": "ಒಂದು class attribute ಬದಲಾಯಿಸುವ @classmethod"
      }
    },
    {
      "id": "b25",
      "type": "output",
      "data": {
        "output": "YouTube"
      }
    },
    {
      "id": "b26",
      "type": "concept",
      "data": {
        "headingEn": "",
        "bodyEn": "This is handy for operations that affect the whole class rather than one instance — like a factory method that builds objects a different way.",
        "bodyKn": "ಒಂದು instance ಬದಲು ಸಂಪೂರ್ಣ class ಮೇಲೆ ಪರಿಣಾಮ ಬೀರುವ operations ಗಳಿಗೆ ಇದು ಉಪಯುಕ್ತ — ಬೇರೆ ರೀತಿಯಲ್ಲಿ objects ಕಟ್ಟುವ ಒಂದು factory method ನಂತೆ."
      }
    },
    {
      "id": "b27",
      "type": "code",
      "data": {
        "headingEn": "A classmethod used as a factory",
        "descEn": "",
        "code": "class Employee:\n    def __init__(self, name, salary):\n        self.name = name\n        self.salary = salary\n\n    @classmethod\n    def from_string(cls, data_str):\n        name, salary = data_str.split(\"-\")\n        return cls(name, int(salary))\n\ne = Employee.from_string(\"Harry-50000\")\nprint(e.name, e.salary)",
        "filename": "classmethod_factory.py",
        "headingKn": "ಒಂದು factory ಆಗಿ ಬಳಸುವ classmethod"
      }
    },
    {
      "id": "b28",
      "type": "output",
      "data": {
        "output": "Harry 50000"
      }
    },
    {
      "id": "b29",
      "type": "heading",
      "data": {
        "textEn": "@property Decorator, Getters & Setters",
        "level": "H1",
        "textKn": "@property Decorator, Getters & Setters"
      }
    },
    {
      "id": "b30",
      "type": "concept",
      "data": {
        "headingEn": "",
        "bodyEn": "Normally, accessing e.name just reads an attribute directly. @property lets you make .name look like a plain attribute while secretly running a function behind the scenes — useful for validation or computed values.",
        "bodyKn": "ಸಾಮಾನ್ಯವಾಗಿ, e.name ಪ್ರವೇಶಿಸುವುದು ಕೇವಲ ಒಂದು attribute ಅನ್ನು ನೇರವಾಗಿ ಓದುತ್ತದೆ. @property ನಿಮಗೆ .name ಅನ್ನು ಒಂದು ಸರಳ attribute ನಂತೆ ಕಾಣಿಸುವಂತೆ ಮಾಡುತ್ತದೆ ಆದರೆ ಪರದೆಯ ಹಿಂದೆ ರಹಸ್ಯವಾಗಿ ಒಂದು function ಚಲಾಯಿಸುತ್ತದೆ — validation ಅಥವಾ computed ಮೌಲ್ಯಗಳಿಗೆ ಉಪಯುಕ್ತ."
      }
    },
    {
      "id": "b31",
      "type": "code",
      "data": {
        "headingEn": "A getter and setter using @property",
        "descEn": "Note there's no () when calling e.name — that's the whole point of @property: it behaves like a normal attribute, not a method call, while still letting you run validation logic when it's read or written.",
        "code": "class Employee:\n    def __init__(self, ename):\n        self.ename = ename\n\n    @property\n    def name(self):          # getter\n        return self.ename\n\n    @name.setter\n    def name(self, value):   # setter\n        if len(value) < 2:\n            raise ValueError(\"Name too short\")\n        self.ename = value\n\ne = Employee(\"Harry\")\nprint(e.name)       # calls the getter\ne.name = \"Rohan\"    # calls the setter, validates, then sets self.ename\nprint(e.name)\ne.name = \"R\"        # raises ValueError(\"Name too short\")",
        "filename": "property_getter_setter.py",
        "headingKn": "@property ಬಳಸಿ ಒಂದು getter ಮತ್ತು setter",
        "descKn": "e.name ಕರೆಯುವಾಗ () ಇಲ್ಲ ಎಂದು ಗಮನಿಸಿ — ಇದೇ @property ನ ಸಂಪೂರ್ಣ ಅಂಶ: ಇದು ಒಂದು method call ಅಲ್ಲ, ಒಂದು ಸಾಮಾನ್ಯ attribute ನಂತೆ ವರ್ತಿಸುತ್ತದೆ, ಆದರೂ ಅದನ್ನು ಓದುವಾಗ ಅಥವಾ ಬರೆಯುವಾಗ validation logic ಚಲಾಯಿಸಲು ಅನುಮತಿಸುತ್ತದೆ."
      }
    },
    {
      "id": "b32",
      "type": "output",
      "data": {
        "output": "Harry\nRohan\nValueError: Name too short"
      }
    },
    {
      "id": "b33",
      "type": "heading",
      "data": {
        "textEn": "Operator Overloading",
        "level": "H1",
        "textKn": "Operator Overloading"
      }
    },
    {
      "id": "b34",
      "type": "concept",
      "data": {
        "headingEn": "",
        "bodyEn": "By default, Python doesn't know what + or * should mean between two of your own objects. Dunder (\"double underscore\") methods let you define that behavior.",
        "bodyKn": "ಡೀಫಾಲ್ಟ್ ಆಗಿ, ನಿಮ್ಮ ಸ್ವಂತ ಎರಡು objects ಗಳ ನಡುವೆ + ಅಥವಾ * ಏನನ್ನು ಅರ್ಥೈಸಬೇಕು ಎಂದು Python ಗೆ ತಿಳಿದಿಲ್ಲ. Dunder (\"double underscore\") methods ನಿಮಗೆ ಆ ವರ್ತನೆ ವ್ಯಾಖ್ಯಾನಿಸಲು ಅನುಮತಿಸುತ್ತವೆ."
      }
    },
    {
      "id": "b35",
      "type": "code",
      "data": {
        "headingEn": "Overloading + and defining __str__ and __len__",
        "descEn": "",
        "code": "class Point:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n\n    def __add__(self, other):        # called for p1 + p2\n        return Point(self.x + other.x, self.y + other.y)\n\n    def __str__(self):               # called by str(p) or print(p)\n        return f\"({self.x}, {self.y})\"\n\n    def __len__(self):               # called by len(p)\n        return 2   # e.g. a 2D point has 2 components\n\np1 = Point(1, 2)\np2 = Point(3, 4)\np3 = p1 + p2       # internally calls p1.__add__(p2)\nprint(p3)          # uses __str__\nprint(len(p3))     # uses __len__",
        "filename": "operator_overloading.py",
        "headingKn": "+ Overload ಮಾಡುವುದು ಮತ್ತು __str__ ಮತ್ತು __len__ ವ್ಯಾಖ್ಯಾನಿಸುವುದು"
      }
    },
    {
      "id": "b36",
      "type": "output",
      "data": {
        "output": "(4, 6)\n2"
      }
    },
    {
      "id": "b37",
      "type": "concept",
      "data": {
        "headingEn": "",
        "bodyEn": "Without __str__, print(p3) would show something unreadable like <__main__.Point object at 0x7f...> — overriding it gives you control over how your object is displayed.",
        "bodyKn": "__str__ ಇಲ್ಲದೆ, print(p3) <__main__.Point object at 0x7f...> ನಂತಹ ಓದಲಾಗದ ಏನನ್ನಾದರೂ ತೋರಿಸುತ್ತದೆ — ಅದನ್ನು override ಮಾಡುವುದು ನಿಮ್ಮ object ಹೇಗೆ ಪ್ರದರ್ಶಿಸಲಾಗುತ್ತದೆ ಎಂಬುದರ ಮೇಲೆ ನಿಯಂತ್ರಣ ನೀಡುತ್ತದೆ."
      }
    },
    {
      "id": "b38",
      "type": "table",
      "data": {
        "captionEn": "The full set of arithmetic dunders",
        "rows": "Expression | Calls\np1 + p2 | p1.__add__(p2)\np1 - p2 | p1.__sub__(p2)\np1 * p2 | p1.__mul__(p2)\np1 / p2 | p1.__truediv__(p2)\np1 // p2 | p1.__floordiv__(p2)",
        "captionKn": "Arithmetic dunders ನ ಸಂಪೂರ್ಣ ಸೆಟ್"
      }
    },
    {
      "type": "concept",
      "data": {
        "headingEn": "Key Takeaways",
        "headingKn": "ಮುಖ್ಯ ಅಂಶಗಳು",
        "bodyEn": "• Inheritance lets a class (child) reuse and extend the attributes and methods of another class (parent) -- Python supports single, multiple, and multilevel inheritance.\n• super() calls the parent class's version of a method (commonly the constructor), letting a child class reuse parent logic instead of duplicating it.\n• @classmethod operates on the class itself rather than an instance (often used as an alternative constructor), while @property turns a method into something accessed like a plain attribute, enabling clean getters and setters.\n• Operator overloading (defining methods like __add__, __str__, and __len__) lets custom objects work naturally with Python's built-in operators and functions -- this is the same mechanism that lets you write my_list + my_list or len(my_list) on ordinary Python objects.",
        "bodyKn": "• Inheritance ಒಂದು class (child) ಗೆ ಇನ್ನೊಂದು class (parent) ನ attributes ಮತ್ತು methods ಮರುಬಳಕೆ ಮಾಡಲು ಮತ್ತು ವಿಸ್ತರಿಸಲು ಅನುಮತಿಸುತ್ತದೆ -- Python single, multiple, ಮತ್ತು multilevel inheritance ಬೆಂಬಲಿಸುತ್ತದೆ.\n• super() parent class ನ ಒಂದು method ನ ಆವೃತ್ತಿಯನ್ನು ಕರೆಯುತ್ತದೆ (ಸಾಮಾನ್ಯವಾಗಿ constructor), ಒಂದು child class ಗೆ parent ಲಾಜಿಕ್ ಅನ್ನು ನಕಲಿಸುವ ಬದಲು ಮರುಬಳಕೆ ಮಾಡಲು ಅನುಮತಿಸುತ್ತದೆ.\n• @classmethod ಒಂದು instance ಬದಲು class ಮೇಲೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ (ಆಗಾಗ ಒಂದು ಪರ್ಯಾಯ constructor ಆಗಿ ಬಳಸಲಾಗುತ್ತದೆ), @property ಒಂದು method ಅನ್ನು ಒಂದು ಸರಳ attribute ನಂತೆ access ಮಾಡಬಹುದಾದ ಸಂಗತಿಯಾಗಿ ಬದಲಾಯಿಸುತ್ತದೆ, ಸ್ವಚ್ಛ getters ಮತ್ತು setters ಸಕ್ರಿಯಗೊಳಿಸುತ್ತದೆ.\n• Operator overloading (methods ಗಳಾದ __add__, __str__, ಮತ್ತು __len__ ವ್ಯಾಖ್ಯಾನಿಸುವುದು) custom objects ಗಳಿಗೆ Python ನ built-in operators ಮತ್ತು functions ಗಳ ಜೊತೆ ಸ್ವಾಭಾವಿಕವಾಗಿ ಕೆಲಸ ಮಾಡಲು ಅನುಮತಿಸುತ್ತದೆ -- ಇದೇ ಯಾಂತ್ರಿಕತೆ ನಿಮಗೆ ಸಾಮಾನ್ಯ Python objects ಗಳ ಮೇಲೆ my_list + my_list ಅಥವಾ len(my_list) ಬರೆಯಲು ಅನುಮತಿಸುತ್ತದೆ."
      }
    },
    {
      "id": "b39",
      "type": "quiz",
      "data": {
        "questions": [
          {
            "q": "What kind of inheritance occurs when a child class inherits from more than one parent class?",
            "opts": [
              "Single inheritance",
              "Multiple inheritance",
              "Multilevel inheritance",
              "Static inheritance"
            ],
            "correct": 1,
            "qKn": "ಒಂದು child class ಒಂದಕ್ಕಿಂತ ಹೆಚ್ಚು parent class ಇಂದ inherit ಮಾಡಿದಾಗ ಯಾವ ರೀತಿಯ inheritance ಸಂಭವಿಸುತ್ತದೆ?",
            "optsKn": [
              "Single inheritance",
              "Multiple inheritance",
              "Multilevel inheritance",
              "Static inheritance"
            ]
          },
          {
            "q": "What does calling super( ).__init__( ) inside a child class do?",
            "opts": [
              "Creates a new child object",
              "Deletes the parent class",
              "Calls the constructor of the base (parent) class",
              "Overloads the + operator"
            ],
            "correct": 2,
            "qKn": "ಒಂದು child class ಒಳಗೆ super().__init__() ಕರೆಯುವುದು ಏನು ಮಾಡುತ್ತದೆ?",
            "optsKn": [
              "ಒಂದು ಹೊಸ child object ರಚಿಸುತ್ತದೆ",
              "Parent class ಅನ್ನು ಅಳಿಸುತ್ತದೆ",
              "Base (parent) class ನ constructor ಕರೆಯುತ್ತದೆ",
              "+ operator ಅನ್ನು overload ಮಾಡುತ್ತದೆ"
            ]
          },
          {
            "q": "Which decorator is used to define a method that belongs to the class rather than any single object?",
            "opts": [
              "@staticmethod",
              "@property",
              "@classmethod",
              "@override"
            ],
            "correct": 2,
            "qKn": "ಯಾವುದೇ ಒಂದು object ಬದಲು class ಗೆ ಸೇರಿದ ಒಂದು method ವ್ಯಾಖ್ಯಾನಿಸಲು ಯಾವ decorator ಬಳಸಲಾಗುತ್ತದೆ?",
            "optsKn": [
              "@staticmethod",
              "@property",
              "@classmethod",
              "@override"
            ]
          },
          {
            "q": "Which dunder method is automatically called when you write p1 + p2 for two custom objects?",
            "opts": [
              "__str__",
              "__add__",
              "__init__",
              "__len__"
            ],
            "correct": 1,
            "qKn": "ಎರಡು custom objects ಗಳಿಗೆ p1 + p2 ಬರೆದಾಗ ಯಾವ dunder method ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಕರೆಯಲಾಗುತ್ತದೆ?",
            "optsKn": [
              "__str__",
              "__add__",
              "__init__",
              "__len__"
            ]
          },
          {
            "q": "What does the @property decorator let you do?",
            "opts": [
              "Make a method behave like a read-only or validated attribute",
              "Turn a class into a module",
              "Automatically inherit from another class",
              "Convert a function into a loop"
            ],
            "correct": 0,
            "qKn": "@property decorator ನಿಮಗೆ ಏನು ಮಾಡಲು ಅನುಮತಿಸುತ್ತದೆ?",
            "optsKn": [
              "ಒಂದು method ಅನ್ನು read-only ಅಥವಾ validated attribute ನಂತೆ ವರ್ತಿಸುವಂತೆ ಮಾಡಲು",
              "ಒಂದು class ಅನ್ನು ಒಂದು module ಆಗಿ ಪರಿವರ್ತಿಸಲು",
              "ಇನ್ನೊಂದು class ಇಂದ ಸ್ವಯಂಚಾಲಿತವಾಗಿ inherit ಮಾಡಲು",
              "ಒಂದು function ಅನ್ನು ಒಂದು loop ಆಗಿ ಪರಿವರ್ತಿಸಲು"
            ]
          }
        ]
      }
    }
  ]
};
