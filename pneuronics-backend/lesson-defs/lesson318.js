module.exports = {
  "phaseId": "6a358e67fc29b5a4714447b2",
  "moduleId": "6a358e67fc29b5a4714447b5",
  "order": 0,
  "type": "reading",
  "duration": 32,
  "difficulty": "intermediate",
  "status": "published",
  "title": "Modern Python Features - Walrus, Type Hints, Match-Case & Exception Handling",
  "titleKn": "ಮಾಡರ್ನ್ ಪೈಥಾನ್ ಫೀಚರ್ಸ್ - ವಾಲ್ರಸ್, ಟೈಪ್ ಹಿಂಟ್ಸ್, ಮ್ಯಾಚ್-ಕೇಸ್ ಅಂಡ್ ಎಕ್ಸೆಪ್ಷನ್ ಹ್ಯಾಂಡ್ಲಿಂಗ್",
  "desc": "Newer syntax and safer error handling patterns, explained with real-world analogies",
  "descKn": "Newer syntax and safer error handling patterns, explained with real-world analogies",
  "objectives": [
    "Use the walrus operator (:=) for assignment inside expressions",
    "Add type hints to function signatures and variables for better code clarity",
    "Write match-case statements as a structured alternative to if-elif chains",
    "Understand when each modern feature improves code readability",
    "Apply type hints with complex types using the typing module"
  ],
  "objectivesKn": [
    "Expressions ಒಳಗೆ assignment ಗಾಗಿ walrus operator (:=) ಬಳಸಿ",
    "ಉತ್ತಮ code clarity ಗಾಗಿ function signatures ಮತ್ತು variables ಗೆ type hints ಸೇರಿಸಿ",
    "if-elif chains ಗೆ structured ಪರ್ಯಾಯವಾಗಿ match-case statements ಬರೆಯಿರಿ",
    "ಪ್ರತಿ modern feature code readability ಸುಧಾರಿಸಲು ಯಾವಾಗ ಉಪಯೋಗಿಸಬೇಕು ಎಂದು ಅರ್ಥ ಮಾಡಿಕೊಳ್ಳಿ",
    "typing module ಬಳಸಿ complex types ಗಾಗಿ type hints ಅನ್ವಯಿಸಿ"
  ],
  "blocks": [
    {
      "id": "b1",
      "type": "heading",
      "data": {
        "textEn": "Walrus Operator (:=)",
        "level": "H1",
        "textKn": "Walrus Operator (:=)"
      }
    },
    {
      "id": "b2",
      "type": "concept",
      "data": {
        "headingEn": "What is the Walrus Operator?",
        "bodyEn": "The Walrus Operator (:=) was introduced in Python 3.8.\n\nIt lets you assign a value to a variable while evaluating an expression, reducing the need for separate assignment statements.",
        "headingKn": "Walrus Operator ಎಂದರೇನು?",
        "bodyKn": "Walrus Operator (:=) ಅನ್ನು Python 3.8 ನಲ್ಲಿ ಪರಿಚಯಿಸಲಾಯಿತು.\n\nಇದು ಒಂದು expression evaluate ಮಾಡುತ್ತಿರುವಾಗಲೇ ಒಂದು variable ಗೆ ಒಂದು ಮೌಲ್ಯ ನಿಯೋಜಿಸಲು ಅನುಮತಿಸುತ್ತದೆ, ಪ್ರತ್ಯೇಕ assignment statements ಅಗತ್ಯ ಕಡಿಮೆ ಮಾಡುತ್ತದೆ."
      }
    },
    {
      "id": "b3",
      "type": "code",
      "data": {
        "headingEn": "Without the walrus operator",
        "descEn": "",
        "code": "numbers = [10, 20, 30]\n\nlength = len(numbers)\n\nif length > 2:\n    print(length)",
        "filename": "without_walrus.py",
        "headingKn": "Walrus operator ಇಲ್ಲದೆ"
      }
    },
    {
      "id": "b4",
      "type": "output",
      "data": {
        "output": "3"
      }
    },
    {
      "id": "b5",
      "type": "code",
      "data": {
        "headingEn": "Using the walrus operator",
        "descEn": "",
        "code": "numbers = [10, 20, 30]\n\nif (length := len(numbers)) > 2:\n    print(length)",
        "filename": "with_walrus.py",
        "headingKn": "Walrus operator ಬಳಸುವುದು"
      }
    },
    {
      "id": "b6",
      "type": "output",
      "data": {
        "output": "3"
      }
    },
    {
      "id": "b7",
      "type": "example",
      "data": {
        "tag": "Real-world Example",
        "textEn": "Imagine you're checking attendance. Instead of: Count students, Store count, Check if count > 50, you do everything in one step.",
        "textKn": "ನೀವು attendance ಪರಿಶೀಲಿಸುತ್ತಿದ್ದೀರಿ ಎಂದು ಊಹಿಸಿ. ಬದಲಿಗೆ: ವಿದ್ಯಾರ್ಥಿಗಳನ್ನು ಎಣಿಸಿ, count ಸಂಗ್ರಹಿಸಿ, count > 50 ಪರಿಶೀಲಿಸಿ, ನೀವು ಎಲ್ಲವನ್ನೂ ಒಂದೇ ಹಂತದಲ್ಲಿ ಮಾಡುತ್ತೀರಿ."
      }
    },
    {
      "id": "b8",
      "type": "code",
      "data": {
        "headingEn": "Checking class attendance in one step",
        "descEn": "",
        "code": "students = [\"A\", \"B\", \"C\", \"D\"]\n\nif (count := len(students)) >= 4:\n    print(f\"Class has {count} students\")",
        "filename": "attendance_walrus.py",
        "headingKn": "ಒಂದೇ ಹಂತದಲ್ಲಿ class attendance ಪರಿಶೀಲಿಸುವುದು"
      }
    },
    {
      "id": "b9",
      "type": "output",
      "data": {
        "output": "Class has 4 students"
      }
    },
    {
      "id": "b10",
      "type": "concept",
      "data": {
        "headingEn": "Why use it?",
        "bodyEn": "Less code\nFaster to write\nAvoids repeated calculations",
        "headingKn": "ಇದನ್ನು ಏಕೆ ಬಳಸಬೇಕು?",
        "bodyKn": "ಕಡಿಮೆ ಕೋಡ್\nಬರೆಯಲು ವೇಗ\nಪುನರಾವರ್ತಿತ ಲೆಕ್ಕಾಚಾರಗಳನ್ನು ತಪ್ಪಿಸುತ್ತದೆ"
      }
    },
    {
      "id": "b11",
      "type": "heading",
      "data": {
        "textEn": " Type Hints",
        "level": "H1",
        "textKn": "Type Hints"
      }
    },
    {
      "id": "b12",
      "type": "concept",
      "data": {
        "headingEn": "What are Type Hints?",
        "bodyEn": "Type hints tell programmers what type of data is expected.\n\nPython does not enforce these types - they are only suggestions.\n\nSyntax:\nvariable: datatype = value",
        "headingKn": "Type Hints ಎಂದರೇನು?",
        "bodyKn": "Type hints ಯಾವ ರೀತಿಯ ಡೇಟಾ ನಿರೀಕ್ಷಿಸಲಾಗಿದೆ ಎಂದು programmers ಗೆ ಹೇಳುತ್ತವೆ.\n\nPython ಈ types ಗಳನ್ನು ಜಾರಿಗೊಳಿಸುವುದಿಲ್ಲ - ಅವು ಕೇವಲ ಸಲಹೆಗಳು.\n\nSyntax:\nvariable: datatype = value"
      }
    },
    {
      "id": "b13",
      "type": "code",
      "data": {
        "headingEn": "Annotating variables",
        "descEn": "",
        "code": "age: int = 22\nname: str = \"Sameer\"\nheight: float = 5.8",
        "filename": "type_hints_vars.py",
        "headingKn": "Variables ಅನ್ನು annotate ಮಾಡುವುದು"
      }
    },
    {
      "id": "b14",
      "type": "concept",
      "data": {
        "headingEn": "Function Type Hints",
        "bodyEn": "",
        "headingKn": "Function Type Hints"
      }
    },
    {
      "id": "b15",
      "type": "code",
      "data": {
        "headingEn": "Hinting a function's parameter and return type",
        "descEn": "",
        "code": "def greet(name: str) -> str:\n    return \"Hello \" + name\n\nprint(greet(\"Alice\"))",
        "filename": "function_type_hints.py",
        "headingKn": "ಒಂದು function ನ parameter ಮತ್ತು return type ಸೂಚಿಸುವುದು"
      }
    },
    {
      "id": "b16",
      "type": "output",
      "data": {
        "output": "Hello Alice"
      }
    },
    {
      "id": "b17",
      "type": "example",
      "data": {
        "tag": "Real-world Analogy",
        "textEn": "Imagine a form says:\nAge: Integer\nName: Text\nSalary: Decimal\n\nThe labels are like type hints.",
        "textKn": "ಒಂದು form ಹೀಗೆ ಹೇಳುತ್ತದೆ ಎಂದು ಊಹಿಸಿ:\nAge: Integer\nName: Text\nSalary: Decimal\n\nಲೇಬಲ್‌ಗಳು type hints ನಂತೆ."
      }
    },
    {
      "id": "b18",
      "type": "concept",
      "data": {
        "headingEn": "Advantages",
        "bodyEn": "Easier to understand\nHelps IDE autocomplete\nBetter documentation\nFewer bugs",
        "headingKn": "ಅನುಕೂಲಗಳು",
        "bodyKn": "ಅರ್ಥ ಮಾಡಿಕೊಳ್ಳಲು ಸುಲಭ\nIDE autocomplete ಗೆ ಸಹಾಯ ಮಾಡುತ್ತದೆ\nಉತ್ತಮ documentation\nಕಡಿಮೆ bugs"
      }
    },
    {
      "id": "b19",
      "type": "heading",
      "data": {
        "textEn": " Advanced Type Hints",
        "level": "H1",
        "textKn": "Advanced Type Hints"
      }
    },
    {
      "id": "b20",
      "type": "concept",
      "data": {
        "headingEn": "",
        "bodyEn": "Python provides more detailed types using the typing module.",
        "bodyKn": "Python typing module ಬಳಸಿ ಹೆಚ್ಚು ವಿವರವಾದ types ಒದಗಿಸುತ್ತದೆ."
      }
    },
    {
      "id": "b21",
      "type": "code",
      "data": {
        "headingEn": "Importing the typing module tools",
        "descEn": "",
        "code": "from typing import List, Tuple, Dict, Union",
        "filename": "typing_import.py",
        "headingKn": "typing module tools import ಮಾಡುವುದು"
      }
    },
    {
      "id": "b22",
      "type": "concept",
      "data": {
        "headingEn": "List",
        "bodyEn": "Means a list containing a specific type.",
        "headingKn": "List",
        "bodyKn": "ಒಂದು ನಿರ್ದಿಷ್ಟ type ಒಳಗೊಂಡ ಒಂದು list ಎಂದರ್ಥ."
      }
    },
    {
      "id": "b23",
      "type": "code",
      "data": {
        "headingEn": "List[int]",
        "descEn": "",
        "code": "from typing import List\n\nmarks: List[int] = [85, 90, 95]\n\nprint(marks)",
        "filename": "typing_list.py",
        "headingKn": "List[int]"
      }
    },
    {
      "id": "b24",
      "type": "output",
      "data": {
        "output": "[85, 90, 95]"
      }
    },
    {
      "id": "b25",
      "type": "concept",
      "data": {
        "headingEn": "Tuple",
        "bodyEn": "",
        "headingKn": "Tuple"
      }
    },
    {
      "id": "b26",
      "type": "code",
      "data": {
        "headingEn": "Tuple[str, int]",
        "descEn": "",
        "code": "from typing import Tuple\n\nstudent: Tuple[str, int] = (\"Alice\", 21)\n\nprint(student)",
        "filename": "typing_tuple.py",
        "headingKn": "Tuple[str, int]"
      }
    },
    {
      "id": "b27",
      "type": "output",
      "data": {
        "output": "('Alice', 21)"
      }
    },
    {
      "id": "b28",
      "type": "concept",
      "data": {
        "headingEn": "Dictionary",
        "bodyEn": "Keys are strings, values are integers.",
        "headingKn": "Dictionary",
        "bodyKn": "Keys strings, values integers."
      }
    },
    {
      "id": "b29",
      "type": "code",
      "data": {
        "headingEn": "Dict[str, int]",
        "descEn": "",
        "code": "from typing import Dict\n\nscores: Dict[str, int] = {\n    \"Alice\": 95,\n    \"Bob\": 88\n}",
        "filename": "typing_dict.py",
        "headingKn": "Dict[str, int]"
      }
    },
    {
      "id": "b30",
      "type": "concept",
      "data": {
        "headingEn": "Union",
        "bodyEn": "Sometimes a variable can store more than one type.",
        "headingKn": "Union",
        "bodyKn": "ಕೆಲವೊಮ್ಮೆ ಒಂದು variable ಒಂದಕ್ಕಿಂತ ಹೆಚ್ಚು type ಸಂಗ್ರಹಿಸಬಹುದು."
      }
    },
    {
      "id": "b31",
      "type": "code",
      "data": {
        "headingEn": "Union[int, str]",
        "descEn": "",
        "code": "from typing import Union\n\nid: Union[int, str]\n\nid = \"EMP001\"\nprint(id)\n\nid = 100\nprint(id)",
        "filename": "typing_union.py",
        "headingKn": "Union[int, str]"
      }
    },
    {
      "id": "b32",
      "type": "output",
      "data": {
        "output": "EMP001\n100"
      }
    },
    {
      "id": "b33",
      "type": "example",
      "data": {
        "tag": "Real-world Example",
        "textEn": "Employee ID - sometimes \"EMP001\", sometimes 1001. Union allows both.",
        "textKn": "Employee ID - ಕೆಲವೊಮ್ಮೆ \"EMP001\", ಕೆಲವೊಮ್ಮೆ 1001. Union ಎರಡನ್ನೂ ಅನುಮತಿಸುತ್ತದೆ."
      }
    },
    {
      "id": "b34",
      "type": "table",
      "data": {
        "captionEn": "typing Module Quick Reference",
        "rows": "Hint | Meaning\nList[int] | A list containing integers\nTuple[str, int] | A fixed-size tuple: a string then an int\nDict[str, int] | A dictionary with string keys and int values\nUnion[int, str] | The value can be an int OR a str",
        "captionKn": "typing Module Quick Reference"
      }
    },
    {
      "id": "b35",
      "type": "heading",
      "data": {
        "textEn": " Match Case",
        "level": "H1",
        "textKn": "Match Case"
      }
    },
    {
      "id": "b36",
      "type": "concept",
      "data": {
        "headingEn": "",
        "bodyEn": "Introduced in Python 3.10. Works like switch-case in C, Java, and JavaScript.",
        "bodyKn": "Python 3.10 ನಲ್ಲಿ ಪರಿಚಯಿಸಲಾಯಿತು. C, Java, ಮತ್ತು JavaScript ನಲ್ಲಿನ switch-case ನಂತೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ."
      }
    },
    {
      "id": "b37",
      "type": "code",
      "data": {
        "headingEn": "Instead of a long if-elif chain",
        "descEn": "",
        "code": "if status == 200:\n    ...\nelif status == 404:\n    ...\nelif status == 500:\n    ...",
        "filename": "before_match_case.py",
        "headingKn": "ಒಂದು ಉದ್ದ if-elif ಸರಪಳಿ ಬದಲು"
      }
    },
    {
      "id": "b38",
      "type": "code",
      "data": {
        "headingEn": "Use match-case",
        "descEn": "",
        "code": "def status(code):\n\n    match code:\n\n        case 200:\n            return \"OK\"\n\n        case 404:\n            return \"Not Found\"\n\n        case 500:\n            return \"Server Error\"\n\n        case _:\n            return \"Unknown\"\n\nprint(status(404))",
        "filename": "match_case.py",
        "headingKn": "match-case ಬಳಸಿ"
      }
    },
    {
      "id": "b39",
      "type": "output",
      "data": {
        "output": "Not Found"
      }
    },
    {
      "id": "b40",
      "type": "example",
      "data": {
        "tag": "Real-world Example",
        "textEn": "ATM Menu: 1 -> Balance, 2 -> Withdraw, 3 -> Deposit, 4 -> Exit. Instead of many if-elif, match makes the code cleaner.",
        "textKn": "ATM Menu: 1 -> Balance, 2 -> Withdraw, 3 -> Deposit, 4 -> Exit. ಅನೇಕ if-elif ಬದಲು, match ಕೋಡ್ ಅನ್ನು ಸ್ವಚ್ಛಗೊಳಿಸುತ್ತದೆ."
      }
    },
    {
      "id": "b41",
      "type": "heading",
      "data": {
        "textEn": " Dictionary Merge Operator (|)",
        "level": "H1",
        "textKn": "Dictionary Merge Operator (|)"
      }
    },
    {
      "id": "b42",
      "type": "concept",
      "data": {
        "headingEn": "",
        "bodyEn": "Earlier, you'd write dict1.update(dict2). Now you can use the | operator instead.",
        "bodyKn": "ಮೊದಲು, ನೀವು dict1.update(dict2) ಬರೆಯುತ್ತಿದ್ದಿರಿ. ಈಗ ನೀವು ಬದಲಿಗೆ | operator ಬಳಸಬಹುದು."
      }
    },
    {
      "id": "b43",
      "type": "code",
      "data": {
        "headingEn": "Merging two dictionaries",
        "descEn": "",
        "code": "dict1 = {\n    \"Math\": 90,\n    \"Science\": 85\n}\n\ndict2 = {\n    \"Science\": 95,\n    \"English\": 88\n}\n\nresult = dict1 | dict2\n\nprint(result)",
        "filename": "dict_merge_operator.py",
        "headingKn": "ಎರಡು dictionaries ವಿಲೀನ ಮಾಡುವುದು"
      }
    },
    {
      "id": "b44",
      "type": "output",
      "data": {
        "output": "{'Math': 90, 'Science': 95, 'English': 88}"
      }
    },
    {
      "id": "b45",
      "type": "concept",
      "data": {
        "headingEn": "",
        "bodyEn": "Notice: Science became 95 because the second dictionary overrides duplicate keys.",
        "bodyKn": "ಗಮನಿಸಿ: Science 95 ಆಯಿತು ಏಕೆಂದರೆ ಎರಡನೇ dictionary duplicate keys ಗಳನ್ನು override ಮಾಡುತ್ತದೆ."
      }
    },
    {
      "id": "b46",
      "type": "heading",
      "data": {
        "textEn": " Multiple Context Managers",
        "level": "H1",
        "textKn": "Multiple Context Managers"
      }
    },
    {
      "id": "b47",
      "type": "code",
      "data": {
        "headingEn": "Instead of nesting with blocks",
        "descEn": "",
        "code": "with open(\"a.txt\") as f1:\n    with open(\"b.txt\") as f2:\n        print(f1.read())",
        "filename": "nested_with.py",
        "headingKn": "with blocks nest ಮಾಡುವ ಬದಲು"
      }
    },
    {
      "id": "b48",
      "type": "code",
      "data": {
        "headingEn": "Use a single parenthesized with block",
        "descEn": "Cleaner and easier to read.",
        "code": "with (\n\n    open(\"a.txt\") as f1,\n\n    open(\"b.txt\") as f2\n\n):\n\n    print(f1.read())",
        "filename": "combined_with.py",
        "headingKn": "ಒಂದೇ parenthesized with block ಬಳಸಿ",
        "descKn": "ಸ್ವಚ್ಛ ಮತ್ತು ಓದಲು ಸುಲಭ."
      }
    },
    {
      "id": "b49",
      "type": "heading",
      "data": {
        "textEn": "Exception Handling",
        "level": "H1",
        "textKn": "Exception Handling"
      }
    },
    {
      "id": "b50",
      "type": "concept",
      "data": {
        "headingEn": "",
        "bodyEn": "Programs sometimes crash because of unexpected errors.",
        "bodyKn": "Programs ಕೆಲವೊಮ್ಮೆ ಅನಿರೀಕ್ಷಿತ errors ಕಾರಣ crash ಆಗುತ್ತವೆ."
      }
    },
    {
      "id": "b51",
      "type": "code",
      "data": {
        "headingEn": "An unhandled error crashes the program",
        "descEn": "",
        "code": "print(10/0)",
        "filename": "unhandled_error.py",
        "headingKn": "ಒಂದು ನಿರ್ವಹಿಸದ error program ಅನ್ನು crash ಮಾಡುತ್ತದೆ"
      }
    },
    {
      "id": "b52",
      "type": "output",
      "data": {
        "output": "ZeroDivisionError"
      }
    },
    {
      "id": "b53",
      "type": "code",
      "data": {
        "headingEn": "Handling it with try/except",
        "descEn": "",
        "code": "try:\n    print(10/0)\nexcept ZeroDivisionError:\n    print(\"Cannot divide by zero.\")",
        "filename": "handled_error.py",
        "headingKn": "try/except ಜೊತೆ ಅದನ್ನು ನಿರ್ವಹಿಸುವುದು"
      }
    },
    {
      "id": "b54",
      "type": "output",
      "data": {
        "output": "Cannot divide by zero."
      }
    },
    {
      "id": "b55",
      "type": "concept",
      "data": {
        "headingEn": "Why use Exception Handling?",
        "bodyEn": "Without try-except: the program crashes.\nWith try-except: the program continues running.",
        "headingKn": "Exception Handling ಏಕೆ ಬಳಸಬೇಕು?",
        "bodyKn": "try-except ಇಲ್ಲದೆ: program crash ಆಗುತ್ತದೆ.\ntry-except ಜೊತೆ: program run ಆಗುತ್ತಲೇ ಇರುತ್ತದೆ."
      }
    },
    {
      "id": "b56",
      "type": "heading",
      "data": {
        "textEn": " Raising Exceptions",
        "level": "H1",
        "textKn": "Raising Exceptions"
      }
    },
    {
      "id": "b57",
      "type": "concept",
      "data": {
        "headingEn": "",
        "bodyEn": "Sometimes we want to create our own errors.",
        "bodyKn": "ಕೆಲವೊಮ್ಮೆ ನಾವು ನಮ್ಮ ಸ್ವಂತ errors ರಚಿಸಲು ಬಯಸುತ್ತೇವೆ."
      }
    },
    {
      "id": "b58",
      "type": "code",
      "data": {
        "headingEn": "Raising a custom error for invalid data",
        "descEn": "",
        "code": "age = -5\n\nif age < 0:\n    raise ValueError(\"Age cannot be negative\")",
        "filename": "raise_custom_error.py",
        "headingKn": "ಅಮಾನ್ಯ ಡೇಟಾಗೆ ಒಂದು custom error raise ಮಾಡುವುದು"
      }
    },
    {
      "id": "b59",
      "type": "output",
      "data": {
        "output": "ValueError: Age cannot be negative"
      }
    },
    {
      "id": "b60",
      "type": "example",
      "data": {
        "tag": "Real-world Example",
        "textEn": "Bank Account - minimum balance Rs.1000. If the balance becomes negative, raise an error.",
        "textKn": "Bank Account - ಕನಿಷ್ಠ balance Rs.1000. Balance negative ಆದರೆ, ಒಂದು error raise ಮಾಡಿ."
      }
    },
    {
      "id": "b61",
      "type": "heading",
      "data": {
        "textEn": "Try with Else",
        "level": "H1",
        "textKn": "Try with Else"
      }
    },
    {
      "id": "b62",
      "type": "concept",
      "data": {
        "headingEn": "",
        "bodyEn": "The else block runs only if no exception occurs.",
        "bodyKn": "ಯಾವುದೇ exception ಸಂಭವಿಸದಿದ್ದರೆ ಮಾತ್ರ else block run ಆಗುತ್ತದೆ."
      }
    },
    {
      "id": "b63",
      "type": "code",
      "data": {
        "headingEn": "else runs only when the try succeeds",
        "descEn": "",
        "code": "try:\n    result = 20/2\nexcept:\n    print(\"Error\")\nelse:\n    print(result)",
        "filename": "try_else.py",
        "headingKn": "try ಯಶಸ್ವಿಯಾದಾಗ ಮಾತ್ರ else run ಆಗುತ್ತದೆ"
      }
    },
    {
      "id": "b64",
      "type": "output",
      "data": {
        "output": "10"
      }
    },
    {
      "id": "b65",
      "type": "heading",
      "data": {
        "textEn": " Try with Finally",
        "level": "H1",
        "textKn": "Try with Finally"
      }
    },
    {
      "id": "b66",
      "type": "concept",
      "data": {
        "headingEn": "",
        "bodyEn": "finally always executes.",
        "bodyKn": "finally ಯಾವಾಗಲೂ execute ಆಗುತ್ತದೆ."
      }
    },
    {
      "id": "b67",
      "type": "code",
      "data": {
        "headingEn": "finally runs no matter what",
        "descEn": "Even if an error occurs, \"Closing Program\" always prints.",
        "code": "try:\n    file = open(\"test.txt\")\nexcept:\n    print(\"Error\")\nfinally:\n    print(\"Closing Program\")",
        "filename": "try_finally.py",
        "headingKn": "finally ಏನೇ ಆಗಲಿ run ಆಗುತ್ತದೆ",
        "descKn": "ಒಂದು error ಸಂಭವಿಸಿದರೂ, \"Closing Program\" ಯಾವಾಗಲೂ ಮುದ್ರಿಸುತ್ತದೆ."
      }
    },
    {
      "id": "b68",
      "type": "output",
      "data": {
        "output": "Error\nClosing Program"
      }
    },
    {
      "id": "b69",
      "type": "example",
      "data": {
        "tag": "Real-world Example",
        "textEn": "ATM Machine - even if a withdrawal fails, the card must be returned. That is what finally does.",
        "textKn": "ATM Machine - ಒಂದು withdrawal ವಿಫಲವಾದರೂ, card ಅನ್ನು ಹಿಂತಿರುಗಿಸಬೇಕು. finally ಮಾಡುವುದು ಇದನ್ನೇ."
      }
    },
    {
      "id": "b70",
      "type": "table",
      "data": {
        "captionEn": "try / except / else / finally quick reference",
        "rows": "Block | Runs when\ntry | Always attempted first\nexcept | Only if an error occurs in try\nelse | Only if try succeeds with no error\nfinally | Always, whether or not an error occurred",
        "captionKn": "try / except / else / finally quick reference"
      }
    },
    {
      "id": "b71",
      "type": "heading",
      "data": {
        "textEn": " if __name__ == \"__main__\"",
        "level": "H1",
        "textKn": "if __name__ == \"__main__\""
      }
    },
    {
      "id": "b72",
      "type": "concept",
      "data": {
        "headingEn": "",
        "bodyEn": "Python automatically creates a variable called __name__.\n\nIf the file is executed directly, __name__ == \"__main__\". Otherwise, it contains the module name.",
        "bodyKn": "Python ಸ್ವಯಂಚಾಲಿತವಾಗಿ __name__ ಎಂಬ ಒಂದು variable ರಚಿಸುತ್ತದೆ.\n\nFile ಅನ್ನು ನೇರವಾಗಿ execute ಮಾಡಿದರೆ, __name__ == \"__main__\". ಇಲ್ಲದಿದ್ದರೆ, ಇದು module ಹೆಸರು ಒಳಗೊಂಡಿದೆ."
      }
    },
    {
      "id": "b73",
      "type": "code",
      "data": {
        "headingEn": "Guarding code with the __main__ check",
        "descEn": "Useful when your file is both a program and a reusable module.",
        "code": "def greet():\n    print(\"Hello\")\n\nif __name__ == \"__main__\":\n    greet()",
        "filename": "main_guard.py",
        "headingKn": "__main__ ಪರಿಶೀಲನೆ ಜೊತೆ ಕೋಡ್ guard ಮಾಡುವುದು",
        "descKn": "ನಿಮ್ಮ file ಒಂದು program ಮತ್ತು ಮರುಬಳಕೆ ಮಾಡಬಹುದಾದ module ಎರಡೂ ಆಗಿದ್ದಾಗ ಉಪಯುಕ್ತ."
      }
    },
    {
      "id": "b74",
      "type": "heading",
      "data": {
        "textEn": " Global Keyword",
        "level": "H1",
        "textKn": "Global Keyword"
      }
    },
    {
      "id": "b75",
      "type": "concept",
      "data": {
        "headingEn": "",
        "bodyEn": "Normally, variables inside functions are local.",
        "bodyKn": "ಸಾಮಾನ್ಯವಾಗಿ, functions ಒಳಗಿನ variables local."
      }
    },
    {
      "id": "b76",
      "type": "code",
      "data": {
        "headingEn": "Modifying a variable from outer scope",
        "descEn": "Without global, Python creates a new local variable and won't modify the global one.",
        "code": "count = 0\n\ndef increase():\n    global count\n    count += 1\n\nincrease()\nprint(count)",
        "filename": "global_keyword.py",
        "headingKn": "outer scope ಇಂದ ಒಂದು variable ಮಾರ್ಪಡಿಸುವುದು",
        "descKn": "global ಇಲ್ಲದೆ, Python ಒಂದು ಹೊಸ local variable ರಚಿಸುತ್ತದೆ ಮತ್ತು global ಅನ್ನು ಮಾರ್ಪಡಿಸುವುದಿಲ್ಲ."
      }
    },
    {
      "id": "b77",
      "type": "output",
      "data": {
        "output": "1"
      }
    },
    {
      "id": "b78",
      "type": "heading",
      "data": {
        "textEn": "enumerate( )",
        "level": "H1",
        "textKn": "enumerate()"
      }
    },
    {
      "id": "b79",
      "type": "concept",
      "data": {
        "headingEn": "",
        "bodyEn": "Adds an automatic index while looping.",
        "bodyKn": "Loop ಮಾಡುತ್ತಿರುವಾಗ ಒಂದು ಸ್ವಯಂಚಾಲಿತ index ಸೇರಿಸುತ್ತದೆ."
      }
    },
    {
      "id": "b80",
      "type": "code",
      "data": {
        "headingEn": "Without enumerate",
        "descEn": "",
        "code": "fruits = [\"Apple\", \"Mango\", \"Banana\"]\n\nindex = 0\nfor fruit in fruits:\n    print(index, fruit)\n    index += 1",
        "filename": "without_enumerate.py",
        "headingKn": "enumerate ಇಲ್ಲದೆ"
      }
    },
    {
      "id": "b81",
      "type": "code",
      "data": {
        "headingEn": "With enumerate",
        "descEn": "",
        "code": "fruits = [\"Apple\", \"Mango\", \"Banana\"]\n\nfor index, fruit in enumerate(fruits):\n    print(index, fruit)",
        "filename": "with_enumerate.py",
        "headingKn": "enumerate ಜೊತೆ"
      }
    },
    {
      "id": "b82",
      "type": "output",
      "data": {
        "output": "0 Apple\n1 Mango\n2 Banana"
      }
    },
    {
      "id": "b83",
      "type": "heading",
      "data": {
        "textEn": "List Comprehension",
        "level": "H1",
        "textKn": "List Comprehension"
      }
    },
    {
      "id": "b84",
      "type": "concept",
      "data": {
        "headingEn": "",
        "bodyEn": "A short way to create lists.",
        "bodyKn": "Lists ರಚಿಸುವ ಒಂದು ಚಿಕ್ಕ ಮಾರ್ಗ."
      }
    },
    {
      "id": "b85",
      "type": "code",
      "data": {
        "headingEn": "Normal method",
        "descEn": "",
        "code": "numbers = [1, 2, 3, 4, 5]\n\nsquares = []\nfor i in numbers:\n    squares.append(i*i)",
        "filename": "normal_squares.py",
        "headingKn": "ಸಾಮಾನ್ಯ ವಿಧಾನ"
      }
    },
    {
      "id": "b86",
      "type": "code",
      "data": {
        "headingEn": "Using List Comprehension",
        "descEn": "",
        "code": "numbers = [1, 2, 3, 4, 5]\n\nsquares = [i*i for i in numbers]\n\nprint(squares)",
        "filename": "comprehension_squares.py",
        "headingKn": "List Comprehension ಬಳಸುವುದು"
      }
    },
    {
      "id": "b87",
      "type": "output",
      "data": {
        "output": "[1, 4, 9, 16, 25]"
      }
    },
    {
      "id": "b88",
      "type": "code",
      "data": {
        "headingEn": "Filtering with a comprehension",
        "descEn": "",
        "code": "numbers = [2, 5, 8, 10, 15]\n\neven = [i for i in numbers if i%2==0]\n\nprint(even)",
        "filename": "comprehension_filter.py",
        "headingKn": "ಒಂದು comprehension ಜೊತೆ filter ಮಾಡುವುದು"
      }
    },
    {
      "id": "b89",
      "type": "output",
      "data": {
        "output": "[2, 8, 10]"
      }
    },
    {
      "type": "concept",
      "data": {
        "headingEn": "Key Takeaways",
        "headingKn": "ಮುಖ್ಯ ಅಂಶಗಳು",
        "bodyEn": "• The walrus operator (:=) assigns a value to a variable as part of a larger expression, avoiding a separate assignment line -- useful in conditions and comprehensions.\n• Type hints (name: int, def f(x: int) -> str) document expected types without enforcing them at runtime, and the typing module extends this to List, Tuple, Dict, and Union for more complex shapes.\n• match-case offers a cleaner alternative to long if-elif chains; try/except/else/finally is Python's structured way to handle errors gracefully instead of letting them crash the program, and raise lets you signal your own custom errors.\n• Everyday productivity tools like enumerate() (index + value together while looping) and list comprehensions (a compact one-line way to build a list) appear constantly in real Python code and are worth using by default once understood, since they're both more readable and often faster than the manual alternative.",
        "bodyKn": "• Walrus operator (:=) ಒಂದು ದೊಡ್ಡ expression ನ ಭಾಗವಾಗಿ ಒಂದು variable ಗೆ ಒಂದು ಮೌಲ್ಯ ನಿಯೋಜಿಸುತ್ತದೆ, ಒಂದು ಪ್ರತ್ಯೇಕ assignment ಸಾಲನ್ನು ತಪ್ಪಿಸುತ್ತದೆ -- conditions ಮತ್ತು comprehensions ಗಳಲ್ಲಿ ಉಪಯುಕ್ತ.\n• Type hints (name: int, def f(x: int) -> str) runtime ನಲ್ಲಿ ಜಾರಿಗೊಳಿಸದೆ ನಿರೀಕ್ಷಿತ types ದಾಖಲಿಸುತ್ತವೆ, ಮತ್ತು typing module ಇದನ್ನು ಹೆಚ್ಚು ಸಂಕೀರ್ಣ ಆಕಾರಗಳಿಗೆ List, Tuple, Dict, ಮತ್ತು Union ಗೆ ವಿಸ್ತರಿಸುತ್ತದೆ.\n• match-case ಉದ್ದ if-elif chains ಗಳಿಗೆ ಒಂದು ಸ್ವಚ್ಛ ಪರ್ಯಾಯ ನೀಡುತ್ತದೆ; try/except/else/finally errors ಗಳನ್ನು program crash ಆಗಲು ಬಿಡುವ ಬದಲು ಸೊಗಸಾಗಿ ನಿಭಾಯಿಸಲು Python ನ ವ್ಯವಸ್ಥಿತ ಮಾರ್ಗ, ಮತ್ತು raise ನಿಮ್ಮ ಸ್ವಂತ custom errors ಸೂಚಿಸಲು ಅನುಮತಿಸುತ್ತದೆ.\n• enumerate() (ಲೂಪ್ ಮಾಡುವಾಗ index + value ಒಟ್ಟಿಗೆ) ಮತ್ತು list comprehensions (ಒಂದು list ಕಟ್ಟಲು ಒಂದು ಸಂಕ್ಷಿಪ್ತ ಒಂದೇ-ಸಾಲಿನ ಮಾರ್ಗ) ನಂತಹ ದೈನಂದಿನ productivity tools ನಿಜ Python ಕೋಡ್‌ನಲ್ಲಿ ನಿರಂತರವಾಗಿ ಕಾಣಿಸಿಕೊಳ್ಳುತ್ತವೆ ಮತ್ತು ಅರ್ಥಮಾಡಿಕೊಂಡ ನಂತರ default ಆಗಿ ಬಳಸಲು ಯೋಗ್ಯ, ಏಕೆಂದರೆ ಇವೆರಡೂ ಹೆಚ್ಚು ಓದಬಹುದಾದ ಮತ್ತು ಆಗಾಗ ಕೈಯಾರೆ ಪರ್ಯಾಯಕ್ಕಿಂತ ವೇಗ."
      }
    },
    {
      "id": "b90",
      "type": "quiz",
      "data": {
        "questions": [
          {
            "q": "What does the walrus operator (:=) let you do?",
            "opts": [
              "Compare two values for equality",
              "Assign a value to a variable while evaluating an expression, in one step",
              "Merge two dictionaries together",
              "Define a default parameter value"
            ],
            "correct": 1,
            "qKn": "Walrus operator (:=) ನಿಮಗೆ ಏನು ಮಾಡಲು ಅನುಮತಿಸುತ್ತದೆ?",
            "optsKn": [
              "ಎರಡು ಮೌಲ್ಯಗಳ equality ಹೋಲಿಸಲು",
              "ಒಂದು expression evaluate ಮಾಡುತ್ತಿರುವಾಗಲೇ, ಒಂದೇ ಹಂತದಲ್ಲಿ ಒಂದು variable ಗೆ ಒಂದು ಮೌಲ್ಯ ನಿಯೋಜಿಸಲು",
              "ಎರಡು dictionaries ಗಳನ್ನು ವಿಲೀನಗೊಳಿಸಲು",
              "ಒಂದು default parameter ಮೌಲ್ಯ ವ್ಯಾಖ್ಯಾನಿಸಲು"
            ]
          },
          {
            "q": "Are Python type hints enforced at runtime?",
            "opts": [
              "Yes, Python raises an error if the type doesn't match",
              "No, they are suggestions only and are not enforced",
              "Only for function return types, not variables",
              "Only when using the typing module"
            ],
            "correct": 1,
            "qKn": "Python type hints runtime ನಲ್ಲಿ ಜಾರಿಗೊಳಿಸಲಾಗುತ್ತದೆಯೇ?",
            "optsKn": [
              "ಹೌದು, type ಹೊಂದಿಕೆಯಾಗದಿದ್ದರೆ Python ಒಂದು error ಎಸೆಯುತ್ತದೆ",
              "ಇಲ್ಲ, ಅವು ಕೇವಲ ಸಲಹೆಗಳು ಮತ್ತು ಜಾರಿಗೊಳಿಸಲಾಗುವುದಿಲ್ಲ",
              "ಕೇವಲ function return types ಗಳಿಗೆ, variables ಗಳಿಗಲ್ಲ",
              "ಕೇವಲ typing module ಬಳಸಿದಾಗ"
            ]
          },
          {
            "q": "In a match-case statement, what does case _: represent?",
            "opts": [
              "A syntax error",
              "A case that always raises an exception",
              "The default case, matched when nothing else matches",
              "A case that only matches None"
            ],
            "correct": 2,
            "qKn": "ಒಂದು match-case statement ನಲ್ಲಿ, case _: ಏನನ್ನು ಪ್ರತಿನಿಧಿಸುತ್ತದೆ?",
            "optsKn": [
              "ಒಂದು syntax error",
              "ಯಾವಾಗಲೂ ಒಂದು exception raise ಮಾಡುವ ಒಂದು case",
              "ಬೇರೇನೂ ಹೊಂದದಿದ್ದಾಗ match ಆಗುವ default case",
              "ಕೇವಲ None ಗೆ match ಆಗುವ ಒಂದು case"
            ]
          },
          {
            "q": "When merging dict1 | dict2, which dictionary's value wins if the same key exists in both?",
            "opts": [
              "dict1's value always wins",
              "dict2's value always wins",
              "Python raises an error",
              "The values are combined into a list"
            ],
            "correct": 1,
            "qKn": "dict1 | dict2 ವಿಲೀನಗೊಳಿಸುವಾಗ, ಒಂದೇ key ಎರಡರಲ್ಲೂ ಇದ್ದರೆ ಯಾವ dictionary ನ ಮೌಲ್ಯ ಗೆಲ್ಲುತ್ತದೆ?",
            "optsKn": [
              "dict1 ನ ಮೌಲ್ಯ ಯಾವಾಗಲೂ ಗೆಲ್ಲುತ್ತದೆ",
              "dict2 ನ ಮೌಲ್ಯ ಯಾವಾಗಲೂ ಗೆಲ್ಲುತ್ತದೆ",
              "Python ಒಂದು error ಎಸೆಯುತ್ತದೆ",
              "ಮೌಲ್ಯಗಳನ್ನು ಒಂದು list ಆಗಿ ಸಂಯೋಜಿಸಲಾಗುತ್ತದೆ"
            ]
          },
          {
            "q": "What is the key difference between except and finally in a try block?",
            "opts": [
              "except always runs, finally only runs on error",
              "except only runs if an error occurs; finally always runs regardless",
              "They are just two names for the same thing",
              "finally only works with FileNotFoundError"
            ],
            "correct": 1,
            "qKn": "ಒಂದು try block ನಲ್ಲಿ except ಮತ್ತು finally ನಡುವಿನ ಮುಖ್ಯ ವ್ಯತ್ಯಾಸ ಏನು?",
            "optsKn": [
              "except ಯಾವಾಗಲೂ run ಆಗುತ್ತದೆ, finally ಕೇವಲ error ಆದಾಗ run ಆಗುತ್ತದೆ",
              "except ಒಂದು error ಸಂಭವಿಸಿದರೆ ಮಾತ್ರ run ಆಗುತ್ತದೆ; finally ಏನೇ ಆಗಲಿ ಯಾವಾಗಲೂ run ಆಗುತ್ತದೆ",
              "ಅವು ಒಂದೇ ವಿಷಯದ ಎರಡು ಹೆಸರುಗಳು",
              "finally ಕೇವಲ FileNotFoundError ಜೊತೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ"
            ]
          },
          {
            "q": "Why is the global keyword needed inside increase( ) to modify a variable defined outside the function?",
            "opts": [
              "Without it, Python would create a new local variable instead of modifying the outer one",
              "Without it, Python raises a SyntaxError immediately",
              "global is only needed inside classes, not functions",
              "It is never actually needed in Python 3"
            ],
            "correct": 0,
            "qKn": "Function ಹೊರಗೆ ವ್ಯಾಖ್ಯಾನಿಸಿದ ಒಂದು variable ಮಾರ್ಪಡಿಸಲು increase() ಒಳಗೆ global keyword ಏಕೆ ಅಗತ್ಯ?",
            "optsKn": [
              "ಇಲ್ಲದೆ, Python ಹೊರಗಿನದನ್ನು ಮಾರ್ಪಡಿಸುವ ಬದಲು ಒಂದು ಹೊಸ local variable ರಚಿಸುತ್ತದೆ",
              "ಇಲ್ಲದೆ, Python ತಕ್ಷಣ ಒಂದು SyntaxError ಎಸೆಯುತ್ತದೆ",
              "global ಕೇವಲ classes ಒಳಗೆ ಅಗತ್ಯ, functions ಒಳಗಲ್ಲ",
              "Python 3 ನಲ್ಲಿ ಇದು ನಿಜವಾಗಿ ಎಂದಿಗೂ ಅಗತ್ಯವಿಲ್ಲ"
            ]
          }
        ]
      }
    }
  ]
};
