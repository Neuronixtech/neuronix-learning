module.exports = {
  "phaseId": "6a358e5ffc29b5a47144467a",
  "moduleId": "6a358e61fc29b5a4714446d4",
  "order": 1,
  "type": "reading",
  "duration": 12,
  "difficulty": "beginner",
  "status": "published",
  "title": "Tuples in Python",
  "titleKn": "ಟುಪಲ್ಸ್ ಇನ್ ಪೈಥಾನ್",
  "desc": "An ordered, immutable collection that keeps data safe from change",
  "descKn": "An ordered, immutable collection that keeps data safe from change",
  "objectives": [
    "Create tuples and understand their immutable nature",
    "Access tuple elements using indexing and slicing",
    "Distinguish between tuples and lists and know when to use each",
    "Unpack tuple values into multiple variables",
    "Use tuples as dictionary keys and in function return values"
  ],
  "objectivesKn": [
    "Tuples ರಚಿಸಿ ಮತ್ತು ಅವುಗಳ immutable ಸ್ವಭಾವ ಅರ್ಥ ಮಾಡಿಕೊಳ್ಳಿ",
    "Indexing ಮತ್ತು slicing ಬಳಸಿ tuple elements ಪ್ರವೇಶಿಸಿ",
    "Tuples ಮತ್ತು lists ನಡುವೆ ಪ್ರತ್ಯೇಕಿಸಿ ಮತ್ತು ಯಾವಾಗ ಯಾವುದನ್ನು ಬಳಸಬೇಕು ಎಂದು ತಿಳಿಯಿರಿ",
    "Tuple values ಅನ್ನು ಅನೇಕ variables ಗೆ unpack ಮಾಡಿ",
    "Dictionary keys ಆಗಿ ಮತ್ತು function return values ನಲ್ಲಿ tuples ಬಳಸಿ"
  ],
  "blocks": [
    {
      "id": "b1",
      "type": "concept",
      "data": {
        "headingEn": "WHAT IS A TUPLE?",
        "bodyEn": "A tuple is a collection of items that is:\n• Ordered (items keep their position)\n• Immutable (cannot be changed after creation)\n• Allows duplicate values\n• Can store different data types\n\nThink of a tuple as a sealed package. Once it's packed, you cannot add or remove items.\n\nSyntax: tuple_name = (item1, item2, item3)",
        "bodyKn": "ಒಂದು tuple items ಗಳ ಒಂದು ಸಂಗ್ರಹ, ಇದು:\n• ಕ್ರಮಬದ್ಧ (items ತಮ್ಮ position ಇಟ್ಟುಕೊಳ್ಳುತ್ತವೆ)\n• Immutable (ರಚಿಸಿದ ನಂತರ ಬದಲಾಯಿಸಲಾಗುವುದಿಲ್ಲ)\n• Duplicate values ಅನುಮತಿಸುತ್ತದೆ\n• ಭಿನ್ನ data types ಸಂಗ್ರಹಿಸಬಹುದು\n\nಒಂದು tuple ಅನ್ನು ಒಂದು ಸೀಲ್ ಮಾಡಿದ ಪ್ಯಾಕೇಜ್ ಎಂದು ಯೋಚಿಸಿ. ಒಮ್ಮೆ ಪ್ಯಾಕ್ ಆದ ನಂತರ, ನೀವು items ಸೇರಿಸಲು ಅಥವಾ ತೆಗೆಯಲು ಸಾಧ್ಯವಿಲ್ಲ.\n\nSyntax: tuple_name = (item1, item2, item3)",
        "headingKn": "TUPLE ಎಂದರೇನು?"
      }
    },
    {
      "id": "b2",
      "type": "concept",
      "data": {
        "headingEn": "1. Empty Tuple",
        "bodyEn": "A tuple with no elements.",
        "headingKn": "1. ಖಾಲಿ Tuple",
        "bodyKn": "ಯಾವುದೇ elements ಇಲ್ಲದ ಒಂದು tuple."
      }
    },
    {
      "id": "b3",
      "type": "code",
      "data": {
        "headingEn": "Creating an empty tuple",
        "descEn": "",
        "code": "empty_tuple = ()\nprint(empty_tuple)",
        "filename": "empty_tuple.py",
        "headingKn": "ಒಂದು ಖಾಲಿ tuple ರಚಿಸುವುದು"
      }
    },
    {
      "id": "b4",
      "type": "output",
      "data": {
        "output": "()"
      }
    },
    {
      "id": "b5",
      "type": "example",
      "data": {
        "tag": "Real-world Example",
        "textEn": "An empty shopping list before you decide what to buy.",
        "textKn": "ನೀವು ಏನು ಖರೀದಿಸಬೇಕೆಂದು ನಿರ್ಧರಿಸುವ ಮೊದಲು ಒಂದು ಖಾಲಿ shopping list."
      }
    },
    {
      "id": "b6",
      "type": "concept",
      "data": {
        "headingEn": "2. Tuple with One Element",
        "bodyEn": "When a tuple has only one element, you must add a comma.",
        "headingKn": "2. ಒಂದು Element ಜೊತೆ Tuple",
        "bodyKn": "ಒಂದು tuple ಕೇವಲ ಒಂದು element ಹೊಂದಿದಾಗ, ನೀವು ಒಂದು comma ಸೇರಿಸಬೇಕು."
      }
    },
    {
      "id": "b7",
      "type": "code",
      "data": {
        "headingEn": "Correct",
        "descEn": "",
        "code": "number = (10,)\nprint(number)",
        "filename": "single_correct.py",
        "headingKn": "ಸರಿ"
      }
    },
    {
      "id": "b8",
      "type": "output",
      "data": {
        "output": "(10,)"
      }
    },
    {
      "id": "b9",
      "type": "code",
      "data": {
        "headingEn": "Incorrect",
        "descEn": "Without the comma, Python thinks it's just an integer.",
        "code": "number = (10)\nprint(type(number))",
        "filename": "single_incorrect.py",
        "headingKn": "ತಪ್ಪು",
        "descKn": "comma ಇಲ್ಲದೆ, Python ಇದು ಕೇವಲ ಒಂದು integer ಎಂದು ಭಾವಿಸುತ್ತದೆ."
      }
    },
    {
      "id": "b10",
      "type": "output",
      "data": {
        "output": "<class 'int'>"
      }
    },
    {
      "id": "b11",
      "type": "concept",
      "data": {
        "headingEn": "3. Tuple with Multiple Elements",
        "bodyEn": "",
        "headingKn": "3. ಅನೇಕ Elements ಜೊತೆ Tuple"
      }
    },
    {
      "id": "b12",
      "type": "code",
      "data": {
        "headingEn": "Creating a multi-element tuple",
        "descEn": "",
        "code": "numbers = (1, 7, 2)\nprint(numbers)",
        "filename": "multi_tuple.py",
        "headingKn": "ಬಹು-element tuple ರಚಿಸುವುದು"
      }
    },
    {
      "id": "b13",
      "type": "output",
      "data": {
        "output": "(1, 7, 2)"
      }
    },
    {
      "id": "b14",
      "type": "concept",
      "data": {
        "headingEn": "Why Use Tuples?",
        "bodyEn": "Use tuples when data should never change.\n\nExamples:\n• Days of the week\n• Months of the year\n• GPS coordinates\n• Student Register Numbers\n• RGB Colors",
        "headingKn": "Tuples ಏಕೆ ಬಳಸಬೇಕು?",
        "bodyKn": "ಡೇಟಾ ಎಂದಿಗೂ ಬದಲಾಗಬಾರದು ಎಂದಾಗ tuples ಬಳಸಿ.\n\nಉದಾಹರಣೆಗಳು:\n• ವಾರದ ದಿನಗಳು\n• ವರ್ಷದ ತಿಂಗಳುಗಳು\n• GPS coordinates\n• ವಿದ್ಯಾರ್ಥಿ Register Numbers\n• RGB Colors"
      }
    },
    {
      "id": "b15",
      "type": "code",
      "data": {
        "headingEn": "Days of the week as a tuple",
        "descEn": "",
        "code": "days = (\n    \"Monday\",\n    \"Tuesday\",\n    \"Wednesday\",\n    \"Thursday\",\n    \"Friday\",\n    \"Saturday\",\n    \"Sunday\"\n)\nprint(days)",
        "filename": "days.py",
        "headingKn": "ವಾರದ ದಿನಗಳು ಒಂದು tuple ಆಗಿ"
      }
    },
    {
      "id": "b16",
      "type": "output",
      "data": {
        "output": "('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday')"
      }
    },
    {
      "id": "b17",
      "type": "concept",
      "data": {
        "headingEn": "Tuples are Immutable",
        "bodyEn": "You cannot modify a tuple.",
        "headingKn": "Tuples Immutable ಆಗಿವೆ",
        "bodyKn": "ನೀವು ಒಂದು tuple ಮಾರ್ಪಡಿಸಲಾಗುವುದಿಲ್ಲ."
      }
    },
    {
      "id": "b18",
      "type": "code",
      "data": {
        "headingEn": "Trying to change a tuple",
        "descEn": "",
        "code": "numbers = (10, 20, 30)\nnumbers[0] = 100",
        "filename": "immutable_error.py",
        "headingKn": "ಒಂದು tuple ಬದಲಾಯಿಸಲು ಪ್ರಯತ್ನಿಸುವುದು"
      }
    },
    {
      "id": "b19",
      "type": "output",
      "data": {
        "output": "TypeError:\n'tuple' object does not support item assignment"
      }
    },
    {
      "id": "b20",
      "type": "concept",
      "data": {
        "headingEn": "Why this happens",
        "bodyEn": "Because tuples are immutable.",
        "headingKn": "ಇದು ಏಕೆ ಸಂಭವಿಸುತ್ತದೆ",
        "bodyKn": "ಏಕೆಂದರೆ tuples immutable."
      }
    },
    {
      "id": "b21",
      "type": "heading",
      "data": {
        "textEn": "Tuple Methods",
        "level": "H1",
        "textKn": "Tuple Methods"
      }
    },
    {
      "id": "b22",
      "type": "concept",
      "data": {
        "headingEn": "Only two built-in methods",
        "bodyEn": "Unlike lists, tuples have only two built-in methods:\n• count( )\n• index( )",
        "headingKn": "ಕೇವಲ ಎರಡು Built-in Methods",
        "bodyKn": "Lists ಗಿಂತ ಭಿನ್ನವಾಗಿ, tuples ಕೇವಲ ಎರಡು built-in methods ಹೊಂದಿವೆ:\n• count( )\n• index( )"
      }
    },
    {
      "id": "b23",
      "type": "concept",
      "data": {
        "headingEn": "1. count( )",
        "bodyEn": "The count( ) method returns how many times an element appears in the tuple.\n\nSyntax:\ntuple.count(value)",
        "headingKn": "1. count( )",
        "bodyKn": "count( ) method ಒಂದು element tuple ನಲ್ಲಿ ಎಷ್ಟು ಬಾರಿ ಕಾಣಿಸಿಕೊಳ್ಳುತ್ತದೆ ಎಂದು ಹಿಂತಿರುಗಿಸುತ್ತದೆ.\n\nSyntax:\ntuple.count(value)"
      }
    },
    {
      "id": "b24",
      "type": "code",
      "data": {
        "headingEn": "Example 1",
        "descEn": "Because 1 appears only once.",
        "code": "numbers = (1, 7, 2)\nprint(numbers.count(1))",
        "filename": "count1.py",
        "headingKn": "ಉದಾಹರಣೆ 1",
        "descKn": "ಏಕೆಂದರೆ 1 ಕೇವಲ ಒಂದು ಬಾರಿ ಕಾಣಿಸಿಕೊಳ್ಳುತ್ತದೆ."
      }
    },
    {
      "id": "b25",
      "type": "output",
      "data": {
        "output": "1"
      }
    },
    {
      "id": "b26",
      "type": "code",
      "data": {
        "headingEn": "Example 2",
        "descEn": "Here, the number 1 appears three times.",
        "code": "numbers = (1, 7, 2, 1, 5, 1)\nprint(numbers.count(1))",
        "filename": "count2.py",
        "headingKn": "ಉದಾಹರಣೆ 2",
        "descKn": "ಇಲ್ಲಿ, ಸಂಖ್ಯೆ 1 ಮೂರು ಬಾರಿ ಕಾಣಿಸಿಕೊಳ್ಳುತ್ತದೆ."
      }
    },
    {
      "id": "b27",
      "type": "output",
      "data": {
        "output": "3"
      }
    },
    {
      "id": "b28",
      "type": "example",
      "data": {
        "tag": "Real-world Example",
        "textEn": "Imagine attendance records.\n\nattendance = (\"Present\", \"Absent\", \"Present\", \"Present\", \"Absent\")\nprint(attendance.count(\"Present\"))",
        "textKn": "attendance ದಾಖಲೆಗಳನ್ನು ಊಹಿಸಿ.\n\nattendance = (\"Present\", \"Absent\", \"Present\", \"Present\", \"Absent\")\nprint(attendance.count(\"Present\"))"
      }
    },
    {
      "id": "b29",
      "type": "output",
      "data": {
        "output": "3"
      }
    },
    {
      "id": "b30",
      "type": "concept",
      "data": {
        "headingEn": "",
        "bodyEn": "There are 3 Present students.",
        "bodyKn": "3 Present ವಿದ್ಯಾರ್ಥಿಗಳಿದ್ದಾರೆ."
      }
    },
    {
      "id": "b31",
      "type": "concept",
      "data": {
        "headingEn": "2. index( )",
        "bodyEn": "The index( ) method returns the position (index) of the first occurrence of an element.\n\nSyntax:\ntuple.index(value)",
        "headingKn": "2. index( )",
        "bodyKn": "index( ) method ಒಂದು element ನ ಮೊದಲ ಸಂಭವಿಸುವಿಕೆಯ position (index) ಹಿಂತಿರುಗಿಸುತ್ತದೆ.\n\nSyntax:\ntuple.index(value)"
      }
    },
    {
      "id": "b32",
      "type": "code",
      "data": {
        "headingEn": "Example 1",
        "descEn": "",
        "code": "numbers = (1, 7, 2)\nprint(numbers.index(7))",
        "filename": "index1.py",
        "headingKn": "ಉದಾಹರಣೆ 1"
      }
    },
    {
      "id": "b33",
      "type": "output",
      "data": {
        "output": "1"
      }
    },
    {
      "id": "b34",
      "type": "table",
      "data": {
        "captionEn": "Why 7 is at index 1",
        "rows": "Index | Value\n0 | 1\n1 | 7\n2 | 2",
        "captionKn": "7 ಏಕೆ index 1 ನಲ್ಲಿದೆ"
      }
    },
    {
      "id": "b35",
      "type": "code",
      "data": {
        "headingEn": "Example 2",
        "descEn": "Even though 10 appears twice, index() returns only the first occurrence.",
        "code": "numbers = (5, 10, 15, 10)\nprint(numbers.index(10))",
        "filename": "index2.py",
        "headingKn": "ಉದಾಹರಣೆ 2",
        "descKn": "10 ಎರಡು ಬಾರಿ ಕಾಣಿಸಿಕೊಂಡರೂ, index() ಕೇವಲ ಮೊದಲ ಸಂಭವಿಸುವಿಕೆಯನ್ನು ಹಿಂತಿರುಗಿಸುತ್ತದೆ."
      }
    },
    {
      "id": "b36",
      "type": "output",
      "data": {
        "output": "1"
      }
    },
    {
      "id": "b37",
      "type": "example",
      "data": {
        "tag": "Real-world Example",
        "textEn": "Suppose students are seated in order.\n\nstudents = (\"Amit\", \"Ravi\", \"Sneha\", \"Anjali\")\nprint(students.index(\"Sneha\"))",
        "textKn": "ವಿದ್ಯಾರ್ಥಿಗಳು ಕ್ರಮದಲ್ಲಿ ಕುಳಿತಿದ್ದಾರೆ ಎಂದು ಭಾವಿಸಿ.\n\nstudents = (\"Amit\", \"Ravi\", \"Sneha\", \"Anjali\")\nprint(students.index(\"Sneha\"))"
      }
    },
    {
      "id": "b38",
      "type": "output",
      "data": {
        "output": "2\n\n#Sneha is sitting at position 2."
      }
    },
    {
      "id": "b40",
      "type": "code",
      "data": {
        "headingEn": "Complete Example Program",
        "descEn": "",
        "code": "# Creating tuples\nempty = ()\nsingle = (10,)\nnumbers = (1, 7, 2, 1, 5, 1)\n\nprint(\"Empty Tuple:\", empty)\nprint(\"Single Element Tuple:\", single)\nprint(\"Numbers:\", numbers)\n\n# count()\nprint(\"\\nCount Method\")\nprint(\"Number of 1s:\", numbers.count(1))\nprint(\"Number of 7s:\", numbers.count(7))\n\n# index()\nprint(\"\\nIndex Method\")\nprint(\"Index of 7:\", numbers.index(7))\nprint(\"Index of 5:\", numbers.index(5))",
        "filename": "complete_example.py",
        "headingKn": "ಸಂಪೂರ್ಣ ಉದಾಹರಣೆ Program"
      }
    },
    {
      "id": "b41",
      "type": "output",
      "data": {
        "output": "Empty Tuple: ()\nSingle Element Tuple: (10,)\nNumbers: (1, 7, 2, 1, 5, 1)\n\nCount Method\nNumber of 1s: 3\nNumber of 7s: 1\n\nIndex Method\nIndex of 7: 1\nIndex of 5: 4"
      }
    },
    {
      "id": "b42",
      "type": "code",
      "data": {
        "headingEn": "Real-World Mini Project: Student Marks",
        "descEn": "",
        "code": "marks = (85, 90, 78, 90, 67, 90, 75)\nprint(\"Marks:\", marks)\n\n# Count how many students scored 90\nprint(\"Students who scored 90:\", marks.count(90))\n\n# Find the first student who scored 67\nprint(\"First student with 67 marks is at index:\", marks.index(67))",
        "filename": "student_marks.py",
        "headingKn": "ನಿಜ-ಜಗತ್ತಿನ Mini Project: ವಿದ್ಯಾರ್ಥಿ Marks"
      }
    },
    {
      "id": "b43",
      "type": "output",
      "data": {
        "output": "Marks: (85, 90, 78, 90, 67, 90, 75)\nStudents who scored 90: 3\nFirst student with 67 marks is at index: 4"
      }
    },
    {
      "id": "b44",
      "type": "table",
      "data": {
        "captionEn": "Key Differences: Tuple vs List",
        "rows": "Feature | List | Tuple\nMutable | Yes | No\nOrdered | Yes | Yes\nAllows Duplicates | Yes | Yes\nSyntax | [ ] | ( )\nCan Add/Remove Items | Yes | No\nMethods | Many | Only count() and index()",
        "captionKn": "ಮುಖ್ಯ ವ್ಯತ್ಯಾಸಗಳು: Tuple vs List"
      }
    },
    {
      "type": "concept",
      "data": {
        "headingEn": "Key Takeaways",
        "headingKn": "ಮುಖ್ಯ ಅಂಶಗಳು",
        "bodyEn": "• A tuple is an ordered collection like a list, but immutable -- once created, its contents cannot be changed.\n• A single-element tuple requires a trailing comma (5,) -- without it, Python treats the parentheses as ordinary grouping, not a tuple.\n• Because tuples cannot change, they support only two built-in methods, count() and index(), compared to a list's many mutating methods.\n• Tuples are the right choice when data should never change after creation -- like days of the week or a fixed set of coordinates -- and their immutability also makes them usable as dictionary keys, which mutable lists can never be.",
        "bodyKn": "• ಒಂದು tuple ಒಂದು list ನಂತೆ ಒಂದು ಕ್ರಮಬದ್ಧ ಸಂಗ್ರಹ, ಆದರೆ immutable -- ಒಮ್ಮೆ ರಚಿಸಿದ ನಂತರ, ಅದರ ವಿಷಯಗಳನ್ನು ಬದಲಾಯಿಸಲಾಗುವುದಿಲ್ಲ.\n• ಒಂದು single-element tuple ಗೆ ಒಂದು trailing comma ಬೇಕು (5,) -- ಅದಿಲ್ಲದೆ, Python parentheses ಅನ್ನು ಒಂದು tuple ಅಲ್ಲ, ಸಾಮಾನ್ಯ grouping ಎಂದು ಪರಿಗಣಿಸುತ್ತದೆ.\n• Tuples ಬದಲಾಗಲಾಗದ ಕಾರಣ, ಅವು ಕೇವಲ ಎರಡು built-in methods ಬೆಂಬಲಿಸುತ್ತವೆ, count() ಮತ್ತು index(), ಒಂದು list ನ ಅನೇಕ mutating methods ಗಳಿಗೆ ಹೋಲಿಸಿ.\n• ರಚನೆಯ ನಂತರ ಡೇಟಾ ಎಂದಿಗೂ ಬದಲಾಗಬಾರದಾಗಿದ್ದಾಗ tuples ಸರಿಯಾದ ಆಯ್ಕೆ -- ವಾರದ ದಿನಗಳು ಅಥವಾ ಒಂದು ಸ್ಥಿರ coordinates ಸೆಟ್‌ನಂತೆ -- ಮತ್ತು ಅವುಗಳ immutability ಅವುಗಳನ್ನು dictionary keys ಆಗಿ ಬಳಸಬಹುದಾಗಿಸುತ್ತದೆ, mutable lists ಎಂದಿಗೂ ಇರಲಾಗುವುದಿಲ್ಲ."
      }
    },
    {
      "id": "b45",
      "type": "quiz",
      "data": {
        "questions": [
          {
            "q": "What is a tuple in Python?",
            "opts": [
              "A mutable collection of items that maintains order",
              "An ordered, immutable collection of items",
              "A key-value paired collection",
              "An unordered collection of unique items"
            ],
            "correct": 1,
            "qKn": "Python ನಲ್ಲಿ ಒಂದು tuple ಎಂದರೇನು?",
            "optsKn": [
              "ಕ್ರಮ ಕಾಪಾಡುವ ಒಂದು mutable ಸಂಗ್ರಹ",
              "ಒಂದು ಕ್ರಮಬದ್ಧ, immutable ಸಂಗ್ರಹ",
              "ಒಂದು key-value ಜೋಡಿಯಾದ ಸಂಗ್ರಹ",
              "ಒಂದು ಅಕ್ರಮಬದ್ಧ ವಿಶಿಷ್ಟ items ಗಳ ಸಂಗ್ರಹ"
            ]
          },
          {
            "q": "Why is a comma required in (10,)?",
            "opts": [
              "To improve code readability only",
              "Python requires commas in every tuple regardless of length",
              "To tell Python it is a tuple with one element, not just an integer",
              "It is required only for tuples containing strings"
            ],
            "correct": 2,
            "qKn": "(10,) ನಲ್ಲಿ ಒಂದು comma ಏಕೆ ಅಗತ್ಯ?",
            "optsKn": [
              "ಕೇವಲ code readability ಸುಧಾರಿಸಲು",
              "Python ಗಾತ್ರ ಲೆಕ್ಕಿಸದೆ ಪ್ರತಿ tuple ನಲ್ಲಿ commas ಅಗತ್ಯಪಡಿಸುತ್ತದೆ",
              "ಇದು ಒಂದು element ಇರುವ ಒಂದು tuple, ಕೇವಲ ಒಂದು integer ಅಲ್ಲ ಎಂದು Python ಗೆ ಹೇಳಲು",
              "ಇದು strings ಒಳಗೊಂಡ tuples ಗಳಿಗೆ ಮಾತ್ರ ಅಗತ್ಯ"
            ]
          },
          {
            "q": "Can you modify a tuple after it is created?",
            "opts": [
              "Yes, using indexing like a list",
              "No, tuples are immutable",
              "Only if it contains numbers",
              "Only using the append() method"
            ],
            "correct": 1,
            "qKn": "ಒಂದು tuple ರಚಿಸಿದ ನಂತರ ನೀವು ಅದನ್ನು ಮಾರ್ಪಡಿಸಬಹುದೇ?",
            "optsKn": [
              "ಹೌದು, ಒಂದು list ನಂತೆ indexing ಬಳಸಿ",
              "ಇಲ್ಲ, tuples immutable",
              "ಇದು numbers ಒಳಗೊಂಡಿದ್ದರೆ ಮಾತ್ರ",
              "ಕೇವಲ append() method ಬಳಸಿ"
            ]
          },
          {
            "q": "What does count( ) return?",
            "opts": [
              "The index of the first occurrence of a value",
              "The number of times a value appears in the tuple",
              "A new tuple with duplicates removed",
              "True or False depending on whether the value exists"
            ],
            "correct": 1,
            "qKn": "count() ಏನನ್ನು ಹಿಂತಿರುಗಿಸುತ್ತದೆ?",
            "optsKn": [
              "ಒಂದು ಮೌಲ್ಯದ ಮೊದಲ ಸಂಭವಿಸುವಿಕೆಯ index",
              "tuple ನಲ್ಲಿ ಒಂದು ಮೌಲ್ಯ ಎಷ್ಟು ಬಾರಿ ಕಾಣಿಸಿಕೊಳ್ಳುತ್ತದೆ ಎಂಬ ಸಂಖ್ಯೆ",
              "duplicates ತೆಗೆದ ಒಂದು ಹೊಸ tuple",
              "ಮೌಲ್ಯ ಇದೆಯೇ ಇಲ್ಲವೇ ಎಂಬುದರ ಆಧಾರದ ಮೇಲೆ True ಅಥವಾ False"
            ]
          },
          {
            "q": "What does index( ) return if a value appears multiple times?",
            "opts": [
              "The index of the last occurrence",
              "A list of all indexes",
              "The index of the first occurrence",
              "An error, since duplicates aren't allowed"
            ],
            "correct": 2,
            "qKn": "ಒಂದು ಮೌಲ್ಯ ಅನೇಕ ಬಾರಿ ಕಾಣಿಸಿಕೊಂಡರೆ index() ಏನನ್ನು ಹಿಂತಿರುಗಿಸುತ್ತದೆ?",
            "optsKn": [
              "ಕೊನೆಯ ಸಂಭವಿಸುವಿಕೆಯ index",
              "ಎಲ್ಲಾ indexes ಗಳ ಒಂದು list",
              "ಮೊದಲ ಸಂಭವಿಸುವಿಕೆಯ index",
              "ಒಂದು error, ಏಕೆಂದರೆ duplicates ಅನುಮತಿಸಲಾಗುವುದಿಲ್ಲ"
            ]
          }
        ]
      }
    }
  ]
};
