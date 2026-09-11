module.exports = {
  "phaseId": "6a358e5ffc29b5a47144467a",
  "moduleId": "6a358e61fc29b5a4714446e9",
  "order": 1,
  "type": "reading",
  "duration": 15,
  "difficulty": "beginner",
  "status": "published",
  "title": "Sets in Python",
  "titleKn": "ಸೆಟ್ಸ್ ಇನ್ ಪೈಥಾನ್",
  "desc": "An unordered collection of unique elements",
  "descKn": "An unordered collection of unique elements",
  "objectives": [
    "Create sets and understand their unordered, unique-element nature",
    "Perform set operations: union, intersection, difference, and symmetric difference",
    "Add and remove elements from a set using add() and discard()",
    "Use sets to remove duplicates from a collection",
    "Distinguish between sets and frozensets"
  ],
  "objectivesKn": [
    "Sets ರಚಿಸಿ ಮತ್ತು ಅವುಗಳ unordered, unique-element ಸ್ವಭಾವ ಅರ್ಥ ಮಾಡಿಕೊಳ್ಳಿ",
    "Set operations ಮಾಡಿ: union, intersection, difference, symmetric difference",
    "add() ಮತ್ತು discard() ಬಳಸಿ set ಗೆ elements ಸೇರಿಸಿ ಮತ್ತು ತೆಗೆದುಹಾಕಿ",
    "Collection ನಿಂದ duplicates ತೆಗೆದುಹಾಕಲು sets ಬಳಸಿ",
    "Sets ಮತ್ತು frozensets ನಡುವೆ ಪ್ರತ್ಯೇಕಿಸಿ"
  ],
  "blocks": [
    {
      "id": "b1",
      "type": "concept",
      "data": {
        "headingEn": "WHAT IS A SET?",
        "bodyEn": "A Set is a collection of unique (non-repetitive) elements.\n\n• Unlike lists and tuples, a set automatically removes duplicate values.\n• Think of a set like a class attendance register. Even if a student's name is entered multiple times, the register should contain only one entry for that student.",
        "headingKn": "SET ಎಂದರೇನು?",
        "bodyKn": "ಒಂದು Set ಅನನ್ಯ (ಪುನರಾವರ್ತಿತವಲ್ಲದ) elements ಗಳ ಒಂದು ಸಂಗ್ರಹ.\n\n• Lists ಮತ್ತು tuples ಗಿಂತ ಭಿನ್ನವಾಗಿ, ಒಂದು set ಸ್ವಯಂಚಾಲಿತವಾಗಿ ನಕಲಿ ಮೌಲ್ಯಗಳನ್ನು ತೆಗೆಯುತ್ತದೆ.\n• ಒಂದು set ಅನ್ನು ಒಂದು class attendance register ನಂತೆ ಯೋಚಿಸಿ. ಒಬ್ಬ ವಿದ್ಯಾರ್ಥಿಯ ಹೆಸರು ಅನೇಕ ಬಾರಿ ನಮೂದಿಸಿದ್ದರೂ, register ಆ ವಿದ್ಯಾರ್ಥಿಗೆ ಕೇವಲ ಒಂದು entry ಹೊಂದಿರಬೇಕು."
      }
    },
    {
      "id": "b2",
      "type": "concept",
      "data": {
        "headingEn": "Why Do We Use Sets?",
        "bodyEn": "Sets are mainly used when:\n\n• We want only unique values.\n• We want to remove duplicates from data.\n• We perform mathematical operations like Union and Intersection.",
        "headingKn": "ನಾವು Sets ಏಕೆ ಬಳಸುತ್ತೇವೆ?",
        "bodyKn": "Sets ಮುಖ್ಯವಾಗಿ ಬಳಸಲಾಗುತ್ತದೆ ಯಾವಾಗ:\n\n• ನಮಗೆ ಕೇವಲ ಅನನ್ಯ ಮೌಲ್ಯಗಳು ಬೇಕು.\n• ನಾವು ಡೇಟಾದಿಂದ ನಕಲಿಗಳನ್ನು ತೆಗೆಯಲು ಬಯಸುತ್ತೇವೆ.\n• ನಾವು Union ಮತ್ತು Intersection ನಂತಹ ಗಣಿತೀಯ operations ನಿರ್ವಹಿಸುತ್ತೇವೆ."
      }
    },
    {
      "id": "b3",
      "type": "concept",
      "data": {
        "headingEn": "Method 1: Using Curly Braces { }",
        "bodyEn": "",
        "headingKn": "Method 1: Curly Braces { } ಬಳಸಿ"
      }
    },
    {
      "id": "b4",
      "type": "code",
      "data": {
        "headingEn": "Creating a set with { }",
        "descEn": "",
        "code": "fruits = {\"Apple\", \"Banana\", \"Mango\"}\n\nprint(fruits)",
        "filename": "curly_set.py",
        "headingKn": "{ } ಜೊತೆ ಒಂದು set ರಚಿಸುವುದು"
      }
    },
    {
      "id": "b5",
      "type": "output",
      "data": {
        "output": "{'Apple', 'Banana', 'Mango'}"
      }
    },
    {
      "id": "b6",
      "type": "concept",
      "data": {
        "headingEn": "Method 2: Using set( )",
        "bodyEn": "",
        "headingKn": "Method 2: set( ) ಬಳಸಿ"
      }
    },
    {
      "id": "b7",
      "type": "code",
      "data": {
        "headingEn": "Creating a set with set( )",
        "descEn": "",
        "code": "numbers = set()\n\nnumbers.add(1)\nnumbers.add(2)\n\nprint(numbers)",
        "filename": "set_func.py",
        "headingKn": "set() ಜೊತೆ ಒಂದು set ರಚಿಸುವುದು"
      }
    },
    {
      "id": "b8",
      "type": "output",
      "data": {
        "output": "{1, 2}"
      }
    },
    {
      "id": "b9",
      "type": "concept",
      "data": {
        "headingEn": "Duplicate Values are Removed Automatically",
        "bodyEn": "Python removes duplicate values automatically.",
        "headingKn": "Duplicate Values ಸ್ವಯಂಚಾಲಿತವಾಗಿ ತೆಗೆಯಲಾಗುತ್ತದೆ",
        "bodyKn": "Python ಸ್ವಯಂಚಾಲಿತವಾಗಿ ನಕಲಿ ಮೌಲ್ಯಗಳನ್ನು ತೆಗೆಯುತ್ತದೆ."
      }
    },
    {
      "id": "b10",
      "type": "code",
      "data": {
        "headingEn": "Automatic duplicate removal",
        "descEn": "",
        "code": "numbers = {1, 2, 2, 3, 4, 4, 5}\n\nprint(numbers)",
        "filename": "dedupe.py",
        "headingKn": "ಸ್ವಯಂಚಾಲಿತ duplicate ತೆಗೆಯುವಿಕೆ"
      }
    },
    {
      "id": "b11",
      "type": "output",
      "data": {
        "output": "{1, 2, 3, 4, 5}"
      }
    },
    {
      "id": "b12",
      "type": "example",
      "data": {
        "tag": "Real-World Example",
        "textEn": "Imagine students attending a workshop.\n\nStudent List: Rahul, Amit, Rahul, Sameer, Amit\n\nWe want only unique student names.",
        "textKn": "ವಿದ್ಯಾರ್ಥಿಗಳು ಒಂದು workshop ಗೆ ಹಾಜರಾಗುತ್ತಿದ್ದಾರೆ ಎಂದು ಊಹಿಸಿ.\n\nವಿದ್ಯಾರ್ಥಿ List: Rahul, Amit, Rahul, Sameer, Amit\n\nನಮಗೆ ಕೇವಲ ವಿಶಿಷ್ಟ ವಿದ್ಯಾರ್ಥಿ ಹೆಸರುಗಳು ಬೇಕು."
      }
    },
    {
      "id": "b13",
      "type": "code",
      "data": {
        "headingEn": "Unique student names",
        "descEn": "",
        "code": "students = {\"Rahul\", \"Amit\", \"Rahul\", \"Sameer\", \"Amit\"}\n\nprint(students)",
        "filename": "unique_students.py",
        "headingKn": "ವಿಶಿಷ್ಟ ವಿದ್ಯಾರ್ಥಿ ಹೆಸರುಗಳು"
      }
    },
    {
      "id": "b14",
      "type": "output",
      "data": {
        "output": "{'Rahul', 'Amit', 'Sameer'}"
      }
    },
    {
      "id": "b15",
      "type": "heading",
      "data": {
        "textEn": "Properties of Sets",
        "level": "H1",
        "textKn": "Sets ನ Properties"
      }
    },
    {
      "id": "b16",
      "type": "concept",
      "data": {
        "headingEn": "1. Sets are Unordered",
        "bodyEn": "The order of elements is not guaranteed.",
        "headingKn": "1. Sets Unordered ಆಗಿವೆ",
        "bodyKn": "Elements ನ order ಖಾತ್ರಿಪಡಿಸುವುದಿಲ್ಲ."
      }
    },
    {
      "id": "b17",
      "type": "code",
      "data": {
        "headingEn": "Order can vary",
        "descEn": "The output order can differ each time it runs.",
        "code": "numbers = {10, 20, 30, 40}\n\nprint(numbers)",
        "filename": "unordered.py",
        "headingKn": "ಕ್ರಮ ಬದಲಾಗಬಹುದು",
        "descKn": "Output ಕ್ರಮ ಪ್ರತಿ ಬಾರಿ run ಆದಾಗ ಬೇರೆಯಾಗಬಹುದು."
      }
    },
    {
      "id": "b18",
      "type": "output",
      "data": {
        "output": "{40, 10, 20, 30}\n# or {20, 30, 10, 40} — the order can vary"
      }
    },
    {
      "id": "b19",
      "type": "concept",
      "data": {
        "headingEn": "2. Sets are Unindexed",
        "bodyEn": "You cannot access elements using an index.",
        "headingKn": "2. Sets Unindexed ಆಗಿವೆ",
        "bodyKn": "ನೀವು ಒಂದು index ಬಳಸಿ elements ಪ್ರವೇಶಿಸಲಾಗುವುದಿಲ್ಲ."
      }
    },
    {
      "id": "b20",
      "type": "code",
      "data": {
        "headingEn": "Trying to index a set",
        "descEn": "",
        "code": "numbers = {10, 20, 30}\n\nprint(numbers[0])",
        "filename": "unindexed.py",
        "headingKn": "ಒಂದು set ಅನ್ನು index ಮಾಡಲು ಪ್ರಯತ್ನಿಸುವುದು"
      }
    },
    {
      "id": "b21",
      "type": "output",
      "data": {
        "output": "TypeError: 'set' object is not subscriptable"
      }
    },
    {
      "id": "b22",
      "type": "concept",
      "data": {
        "headingEn": "3. Sets Cannot Contain Duplicate Values",
        "bodyEn": "",
        "headingKn": "3. Sets Duplicate Values ಒಳಗೊಳ್ಳಲಾಗುವುದಿಲ್ಲ"
      }
    },
    {
      "id": "b23",
      "type": "code",
      "data": {
        "headingEn": "Duplicates dropped automatically",
        "descEn": "",
        "code": "colors = {\"Red\", \"Blue\", \"Red\", \"Green\"}\n\nprint(colors)",
        "filename": "no_duplicates.py",
        "headingKn": "Duplicates ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಬಿಡಲಾಗುತ್ತದೆ"
      }
    },
    {
      "id": "b24",
      "type": "output",
      "data": {
        "output": "{'Red', 'Blue', 'Green'}"
      }
    },
    {
      "id": "b25",
      "type": "concept",
      "data": {
        "headingEn": "4. Sets are Mutable",
        "bodyEn": "You cannot change an existing element directly, but you can add or remove elements from a set.",
        "headingKn": "4. Sets Mutable ಆಗಿವೆ",
        "bodyKn": "ನೀವು ಒಂದು ಅಸ್ತಿತ್ವದಲ್ಲಿರುವ element ಅನ್ನು ನೇರವಾಗಿ ಬದಲಾಯಿಸಲಾಗುವುದಿಲ್ಲ, ಆದರೆ ನೀವು ಒಂದು set ಇಂದ elements ಸೇರಿಸಬಹುದು ಅಥವಾ ತೆಗೆಯಬಹುದು."
      }
    },
    {
      "id": "b26",
      "type": "code",
      "data": {
        "headingEn": "Adding an element",
        "descEn": "",
        "code": "numbers = {1, 2, 3}\n\nnumbers.add(4)\n\nprint(numbers)",
        "filename": "mutable_set.py",
        "headingKn": "ಒಂದು element ಸೇರಿಸುವುದು"
      }
    },
    {
      "id": "b27",
      "type": "output",
      "data": {
        "output": "{1, 2, 3, 4}"
      }
    },
    {
      "id": "b28",
      "type": "heading",
      "data": {
        "textEn": "Set Methods",
        "level": "H1",
        "textKn": "Set Methods"
      }
    },
    {
      "id": "b29",
      "type": "concept",
      "data": {
        "headingEn": "Suppose we have the following set",
        "bodyEn": "s = {1, 8, 2, 3}",
        "headingKn": "ನಾವು ಈ ಕೆಳಗಿನ set ಹೊಂದಿದ್ದೇವೆ ಎಂದು ಭಾವಿಸೋಣ",
        "bodyKn": "s = {1, 8, 2, 3}"
      }
    },
    {
      "id": "b30",
      "type": "concept",
      "data": {
        "headingEn": "1. len( )",
        "bodyEn": "Returns the number of elements in the set.\n\nSyntax:\nlen(set_name)",
        "headingKn": "1. len( )",
        "bodyKn": "Set ನಲ್ಲಿ elements ಸಂಖ್ಯೆ ಹಿಂತಿರುಗಿಸುತ್ತದೆ.\n\nSyntax:\nlen(set_name)"
      }
    },
    {
      "id": "b31",
      "type": "code",
      "data": {
        "headingEn": "Using len( )",
        "descEn": "",
        "code": "s = {1, 8, 2, 3}\n\nprint(len(s))",
        "filename": "len_method.py",
        "headingKn": "len() ಬಳಸುವುದು"
      }
    },
    {
      "id": "b32",
      "type": "output",
      "data": {
        "output": "4"
      }
    },
    {
      "id": "b33",
      "type": "concept",
      "data": {
        "headingEn": "2. add( )",
        "bodyEn": "Adds a new element.\n\nSyntax:\nset.add(value)",
        "headingKn": "2. add( )",
        "bodyKn": "ಒಂದು ಹೊಸ element ಸೇರಿಸುತ್ತದೆ.\n\nSyntax:\nset.add(value)"
      }
    },
    {
      "id": "b34",
      "type": "code",
      "data": {
        "headingEn": "Using add( )",
        "descEn": "",
        "code": "s = {1, 2, 3}\n\ns.add(4)\n\nprint(s)",
        "filename": "add_method.py",
        "headingKn": "add() ಬಳಸುವುದು"
      }
    },
    {
      "id": "b35",
      "type": "output",
      "data": {
        "output": "{1, 2, 3, 4}"
      }
    },
    {
      "id": "b36",
      "type": "concept",
      "data": {
        "headingEn": "3. remove( )",
        "bodyEn": "Removes a specified element.\n\nSyntax:\nset.remove(value)",
        "headingKn": "3. remove( )",
        "bodyKn": "ಒಂದು ನಿರ್ದಿಷ್ಟ element ತೆಗೆಯುತ್ತದೆ.\n\nSyntax:\nset.remove(value)"
      }
    },
    {
      "id": "b37",
      "type": "code",
      "data": {
        "headingEn": "Using remove( )",
        "descEn": "",
        "code": "s = {1, 8, 2, 3}\n\ns.remove(8)\n\nprint(s)",
        "filename": "remove_method.py",
        "headingKn": "remove() ಬಳಸುವುದು"
      }
    },
    {
      "id": "b38",
      "type": "output",
      "data": {
        "output": "{1, 2, 3}"
      }
    },
    {
      "id": "b39",
      "type": "code",
      "data": {
        "headingEn": "If the element doesn't exist",
        "descEn": "",
        "code": "s.remove(10)",
        "filename": "remove_error.py",
        "headingKn": "Element ಅಸ್ತಿತ್ವದಲ್ಲಿ ಇಲ್ಲದಿದ್ದರೆ"
      }
    },
    {
      "id": "b40",
      "type": "output",
      "data": {
        "output": "KeyError"
      }
    },
    {
      "id": "b41",
      "type": "concept",
      "data": {
        "headingEn": "4. pop( )",
        "bodyEn": "Removes and returns an arbitrary element.\n\nNote: Since sets are unordered, the removed element is not guaranteed to be the same every time.",
        "headingKn": "4. pop( )",
        "bodyKn": "ಒಂದು ಅನಿಯಂತ್ರಿತ element ತೆಗೆಯುತ್ತದೆ ಮತ್ತು ಹಿಂತಿರುಗಿಸುತ್ತದೆ.\n\nಟಿಪ್ಪಣಿ: Sets unordered ಆಗಿರುವುದರಿಂದ, ತೆಗೆದ element ಪ್ರತಿ ಬಾರಿಯೂ ಅದೇ ಎಂದು ಖಾತ್ರಿಯಿಲ್ಲ."
      }
    },
    {
      "id": "b42",
      "type": "code",
      "data": {
        "headingEn": "Using pop( )",
        "descEn": "",
        "code": "s = {10, 20, 30}\n\nremoved = s.pop()\n\nprint(\"Removed:\", removed)\nprint(s)",
        "filename": "pop_method.py",
        "headingKn": "pop() ಬಳಸುವುದು"
      }
    },
    {
      "id": "b43",
      "type": "output",
      "data": {
        "output": "Removed: 10\n{20, 30}"
      }
    },
    {
      "id": "b44",
      "type": "concept",
      "data": {
        "headingEn": "5. clear( )",
        "bodyEn": "Removes all elements.",
        "headingKn": "5. clear( )",
        "bodyKn": "ಎಲ್ಲಾ elements ತೆಗೆಯುತ್ತದೆ."
      }
    },
    {
      "id": "b45",
      "type": "code",
      "data": {
        "headingEn": "Using clear( )",
        "descEn": "",
        "code": "s = {1, 2, 3}\n\ns.clear()\n\nprint(s)",
        "filename": "clear_method.py",
        "headingKn": "clear() ಬಳಸುವುದು"
      }
    },
    {
      "id": "b46",
      "type": "output",
      "data": {
        "output": "set()"
      }
    },
    {
      "id": "b47",
      "type": "heading",
      "data": {
        "textEn": "Set Operations",
        "level": "H1",
        "textKn": "Set Operations"
      }
    },
    {
      "id": "b48",
      "type": "concept",
      "data": {
        "headingEn": "Suppose",
        "bodyEn": "A = {1, 2, 3, 4}\nB = {3, 4, 5, 6}",
        "headingKn": "ಭಾವಿಸೋಣ",
        "bodyKn": "A = {1, 2, 3, 4}\nB = {3, 4, 5, 6}"
      }
    },
    {
      "id": "b49",
      "type": "concept",
      "data": {
        "headingEn": "1. Union (union( ) or | )",
        "bodyEn": "Returns all unique elements from both sets.",
        "headingKn": "1. Union (union( ) ಅಥವಾ | )",
        "bodyKn": "ಎರಡೂ sets ಇಂದ ಎಲ್ಲಾ ಅನನ್ಯ elements ಹಿಂತಿರುಗಿಸುತ್ತದೆ."
      }
    },
    {
      "id": "b50",
      "type": "code",
      "data": {
        "headingEn": "Using union",
        "descEn": "",
        "code": "A = {1, 2, 3}\nB = {3, 4, 5}\n\nprint(A.union(B))\n\n# or\nprint(A | B)",
        "filename": "union.py",
        "headingKn": "union ಬಳಸುವುದು"
      }
    },
    {
      "id": "b51",
      "type": "output",
      "data": {
        "output": "{1, 2, 3, 4, 5}"
      }
    },
    {
      "id": "b52",
      "type": "example",
      "data": {
        "tag": "Real-World Example",
        "textEn": "Students participating in Cricket and Football. Union gives the list of students participating in either or both sports.",
        "textKn": "Cricket ಮತ್ತು Football ನಲ್ಲಿ ಭಾಗವಹಿಸುವ ವಿದ್ಯಾರ್ಥಿಗಳು. Union ಒಂದು ಅಥವಾ ಎರಡೂ sports ನಲ್ಲಿ ಭಾಗವಹಿಸುವ ವಿದ್ಯಾರ್ಥಿಗಳ list ನೀಡುತ್ತದೆ."
      }
    },
    {
      "id": "b53",
      "type": "concept",
      "data": {
        "headingEn": "2. Intersection (intersection( ) or &)",
        "bodyEn": "Returns only the common elements.",
        "headingKn": "2. Intersection (intersection( ) ಅಥವಾ &)",
        "bodyKn": "ಕೇವಲ ಸಾಮಾನ್ಯ elements ಹಿಂತಿರುಗಿಸುತ್ತದೆ."
      }
    },
    {
      "id": "b54",
      "type": "code",
      "data": {
        "headingEn": "Using intersection",
        "descEn": "",
        "code": "A = {1, 2, 3}\nB = {3, 4, 5}\n\nprint(A.intersection(B))\n\n# or\nprint(A & B)",
        "filename": "intersection.py",
        "headingKn": "intersection ಬಳಸುವುದು"
      }
    },
    {
      "id": "b55",
      "type": "output",
      "data": {
        "output": "{3}"
      }
    },
    {
      "id": "b56",
      "type": "example",
      "data": {
        "tag": "Real-World Example",
        "textEn": "Students who are enrolled in both Python and AI courses.",
        "textKn": "Python ಮತ್ತು AI ಎರಡೂ courses ಗಳಲ್ಲಿ enroll ಆದ ವಿದ್ಯಾರ್ಥಿಗಳು."
      }
    },
    {
      "id": "b57",
      "type": "concept",
      "data": {
        "headingEn": "3. Difference (difference( ) or -)",
        "bodyEn": "Returns elements that are in the first set but not in the second.",
        "headingKn": "3. Difference (difference( ) ಅಥವಾ -)",
        "bodyKn": "ಮೊದಲ set ನಲ್ಲಿ ಇರುವ ಆದರೆ ಎರಡನೆಯದರಲ್ಲಿ ಇಲ್ಲದ elements ಹಿಂತಿರುಗಿಸುತ್ತದೆ."
      }
    },
    {
      "id": "b58",
      "type": "code",
      "data": {
        "headingEn": "Using difference",
        "descEn": "",
        "code": "A = {1, 2, 3, 4}\nB = {3, 4, 5}\n\nprint(A.difference(B))\n\n# or\nprint(A - B)",
        "filename": "difference.py",
        "headingKn": "difference ಬಳಸುವುದು"
      }
    },
    {
      "id": "b59",
      "type": "output",
      "data": {
        "output": "{1, 2}"
      }
    },
    {
      "id": "b60",
      "type": "example",
      "data": {
        "tag": "Real-World Example",
        "textEn": "Students who play Cricket but not Football.",
        "textKn": "Cricket ಆಡುವ ಆದರೆ Football ಅಲ್ಲದ ವಿದ್ಯಾರ್ಥಿಗಳು."
      }
    },
    {
      "id": "b61",
      "type": "concept",
      "data": {
        "headingEn": "4. Symmetric Difference (symmetric_difference( ) or ^)",
        "bodyEn": "Returns elements that are in either set but not in both.",
        "headingKn": "4. Symmetric Difference (symmetric_difference( ) ಅಥವಾ ^)",
        "bodyKn": "ಎರಡೂ setಗಳಲ್ಲಿ ಅಲ್ಲದೆ ಯಾವುದಾದರೂ ಒಂದು set ನಲ್ಲಿ ಇರುವ elements ಹಿಂತಿರುಗಿಸುತ್ತದೆ."
      }
    },
    {
      "id": "b62",
      "type": "code",
      "data": {
        "headingEn": "Using symmetric difference",
        "descEn": "",
        "code": "A = {1, 2, 3}\nB = {3, 4, 5}\n\nprint(A.symmetric_difference(B))\n\n# or\nprint(A ^ B)",
        "filename": "symmetric_difference.py",
        "headingKn": "symmetric difference ಬಳಸುವುದು"
      }
    },
    {
      "id": "b63",
      "type": "output",
      "data": {
        "output": "{1, 2, 4, 5}"
      }
    },
    {
      "id": "b64",
      "type": "example",
      "data": {
        "tag": "Real-World Example",
        "textEn": "Students who participate in only one of two clubs.",
        "textKn": "ಎರಡು clubs ಗಳಲ್ಲಿ ಕೇವಲ ಒಂದರಲ್ಲಿ ಭಾಗವಹಿಸುವ ವಿದ್ಯಾರ್ಥಿಗಳು."
      }
    },
    {
      "id": "b65",
      "type": "code",
      "data": {
        "headingEn": "Complete Example Program",
        "descEn": "",
        "code": "# Creating a set\nnumbers = {1, 8, 2, 3}\n\nprint(\"Original Set:\", numbers)\n\n# Length\nprint(\"Length:\", len(numbers))\n\n# Add\nnumbers.add(10)\nprint(\"After add:\", numbers)\n\n# Remove\nnumbers.remove(8)\nprint(\"After remove:\", numbers)\n\n# Pop\nremoved = numbers.pop()\nprint(\"Removed Element:\", removed)\nprint(\"After pop:\", numbers)\n\n# Union\nA = {1, 2, 3}\nB = {3, 4, 5}\n\nprint(\"Union:\", A.union(B))\n\n# Intersection\nprint(\"Intersection:\", A.intersection(B))\n\n# Difference\nprint(\"Difference:\", A.difference(B))\n\n# Symmetric Difference\nprint(\"Symmetric Difference:\", A.symmetric_difference(B))\n\n# Clear\nnumbers.clear()\nprint(\"After clear:\", numbers)",
        "filename": "complete_example.py",
        "headingKn": "ಸಂಪೂರ್ಣ ಉದಾಹರಣೆ Program"
      }
    },
    {
      "id": "b66",
      "type": "output",
      "data": {
        "output": "Original Set: {1, 8, 2, 3}\nLength: 4\nAfter add: {1, 2, 3, 8, 10}\nAfter remove: {1, 2, 3, 10}\nRemoved Element: 1\nAfter pop: {2, 3, 10}\nUnion: {1, 2, 3, 4, 5}\nIntersection: {3}\nDifference: {1, 2}\nSymmetric Difference: {1, 2, 4, 5}\nAfter clear: set()\n\nNote: The exact order of elements in the output may differ because sets are unordered."
      }
    },
    {
      "id": "b67",
      "type": "code",
      "data": {
        "headingEn": "Real-World Mini Project – Removing Duplicate Student Names",
        "descEn": "",
        "code": "students = [\n    \"Rahul\",\n    \"Amit\",\n    \"Rahul\",\n    \"Sameer\",\n    \"Amit\",\n    \"Ravi\"\n]\n\nprint(\"Original List:\")\nprint(students)\n\nunique_students = set(students)\n\nprint(\"\\nUnique Students:\")\nprint(unique_students)\n\nprint(\"\\nTotal Unique Students:\", len(unique_students))",
        "filename": "dedupe_students.py",
        "headingKn": "ನಿಜ-ಜಗತ್ತಿನ Mini Project – Duplicate ವಿದ್ಯಾರ್ಥಿ ಹೆಸರುಗಳನ್ನು ತೆಗೆಯುವುದು"
      }
    },
    {
      "id": "b68",
      "type": "output",
      "data": {
        "output": "Original List:\n['Rahul', 'Amit', 'Rahul', 'Sameer', 'Amit', 'Ravi']\n\nUnique Students:\n{'Rahul', 'Amit', 'Sameer', 'Ravi'}\n\nTotal Unique Students: 4"
      }
    },
    {
      "id": "b69",
      "type": "table",
      "data": {
        "captionEn": "List vs Tuple vs Set vs Dictionary",
        "rows": "Feature | List | Tuple | Set | Dictionary\nSyntax | [ ] | ( ) | { } | {key: value}\nOrdered | Yes | Yes | No | Yes (Python 3.7+)\nMutable | Yes | No | Yes | Yes\nIndexed | Yes | Yes | No | Access by keys\nDuplicate Values | Yes | Yes | No | Values: Yes, Keys: No\nStores Key-Value Pairs | No | No | No | Yes",
        "captionKn": "List vs Tuple vs Set vs Dictionary"
      }
    },
    {
      "type": "concept",
      "data": {
        "headingEn": "Key Takeaways",
        "headingKn": "ಮುಖ್ಯ ಅಂಶಗಳು",
        "bodyEn": "• A set is an unordered collection of unique values -- duplicates are automatically removed the moment they're added.\n• Sets can be created with curly braces {} or the set() function, are unindexed (no [0] access), and are mutable via add(), remove(), pop(), and clear().\n• Sets support mathematical set operations directly: union (|), intersection (&), difference (-), and symmetric difference (^).\n• The combination of automatic deduplication and fast membership testing makes sets the natural tool for problems like removing duplicate names from a list or quickly checking whether an item exists in a large collection -- both far more awkward to do correctly with a plain list.",
        "bodyKn": "• ಒಂದು set ಅನನ್ಯ ಮೌಲ್ಯಗಳ ಒಂದು ಕ್ರಮರಹಿತ ಸಂಗ್ರಹ -- ಡಪ್ಲಿಕೇಟ್‌ಗಳು ಸೇರಿಸಿದ ಕ್ಷಣ ಸ್ವಯಂಚಾಲಿತವಾಗಿ ತೆಗೆದುಹಾಕಲ್ಪಡುತ್ತವೆ.\n• Sets ಗಳನ್ನು curly braces {} ಅಥವಾ set() function ಜೊತೆ ರಚಿಸಬಹುದು, ಇವು unindexed ([0] access ಇಲ್ಲ), ಮತ್ತು add(), remove(), pop(), ಮತ್ತು clear() ಮೂಲಕ mutable.\n• Sets ಗಣಿತೀಯ set operations ನೇರವಾಗಿ ಬೆಂಬಲಿಸುತ್ತವೆ: union (|), intersection (&), difference (-), ಮತ್ತು symmetric difference (^).\n• ಸ್ವಯಂಚಾಲಿತ deduplication ಮತ್ತು ವೇಗದ membership testing ಸಂಯೋಜನೆ sets ಅನ್ನು ಒಂದು list ನಿಂದ ನಕಲಿ ಹೆಸರುಗಳನ್ನು ತೆಗೆದುಹಾಕುವ ಅಥವಾ ಒಂದು ದೊಡ್ಡ ಸಂಗ್ರಹದಲ್ಲಿ ಒಂದು item ಇದೆಯೇ ಎಂದು ವೇಗವಾಗಿ ಪರಿಶೀಲಿಸುವ ಸಮಸ್ಯೆಗಳಿಗೆ ಸ್ವಾಭಾವಿಕ ಸಾಧನವಾಗಿಸುತ್ತದೆ -- ಒಂದು ಸರಳ list ಜೊತೆ ಎರಡೂ ಸರಿಯಾಗಿ ಮಾಡಲು ಹೆಚ್ಚು ಕಷ್ಟಕರ."
      },
      "id": "b70"
    },
    {
      "id": "b70",
      "type": "quiz",
      "data": {
        "questions": [
          {
            "q": "What is a set in Python?",
            "opts": [
              "An ordered collection that allows duplicates",
              "An unordered collection of unique elements",
              "A key-value paired collection",
              "An immutable sequence of characters"
            ],
            "correct": 1,
            "optsKn": [
              "Duplicates ಅನುಮತಿಸುವ ಒಂದು ಕ್ರಮಬದ್ಧ ಸಂಗ್ರಹ",
              "ವಿಶಿಷ್ಟ elements ಗಳ ಒಂದು ಅಕ್ರಮಬದ್ಧ ಸಂಗ್ರಹ",
              "ಒಂದು key-value ಜೋಡಿಯಾದ ಸಂಗ್ರಹ",
              "ಅಕ್ಷರಗಳ ಒಂದು immutable sequence"
            ],
            "qKn": "Python ನಲ್ಲಿ ಒಂದು set ಎಂದರೇನು?"
          },
          {
            "q": "Can a set contain duplicate values?",
            "opts": [
              "Yes, sets keep every duplicate",
              "No, duplicate values are automatically removed",
              "Only if the values are strings",
              "Only if you use set() instead of {}"
            ],
            "correct": 1,
            "optsKn": [
              "ಹೌದು, sets ಪ್ರತಿ duplicate ಇಟ್ಟುಕೊಳ್ಳುತ್ತವೆ",
              "ಇಲ್ಲ, duplicate ಮೌಲ್ಯಗಳನ್ನು ಸ್ವಯಂಚಾಲಿತವಾಗಿ ತೆಗೆಯಲಾಗುತ್ತದೆ",
              "ಮೌಲ್ಯಗಳು strings ಆಗಿದ್ದರೆ ಮಾತ್ರ",
              "ನೀವು {} ಬದಲು set() ಬಳಸಿದರೆ ಮಾತ್ರ"
            ],
            "qKn": "ಒಂದು set duplicate ಮೌಲ್ಯಗಳನ್ನು ಒಳಗೊಳ್ಳಬಹುದೇ?"
          },
          {
            "q": "Why can't we access set elements using an index like numbers[0]?",
            "opts": [
              "Because sets can only store numbers",
              "Because sets are unordered and unindexed",
              "Because sets are immutable",
              "Because indexing is only allowed with negative numbers"
            ],
            "correct": 1,
            "optsKn": [
              "ಏಕೆಂದರೆ sets ಕೇವಲ numbers ಸಂಗ್ರಹಿಸಬಹುದು",
              "ಏಕೆಂದರೆ sets ಅಕ್ರಮಬದ್ಧ ಮತ್ತು unindexed",
              "ಏಕೆಂದರೆ sets immutable",
              "ಏಕೆಂದರೆ indexing ಕೇವಲ negative numbers ಜೊತೆ ಅನುಮತಿಸಲಾಗಿದೆ"
            ],
            "qKn": "numbers[0] ನಂತಹ ಒಂದು index ಬಳಸಿ ನಾವು set elements ಅನ್ನು ಏಕೆ ಪ್ರವೇಶಿಸಲಾಗುವುದಿಲ್ಲ?"
          },
          {
            "q": "What is the difference between remove() and pop()?",
            "opts": [
              "remove() removes a specified element, while pop() removes an arbitrary element",
              "remove() removes an arbitrary element, while pop() removes a specified element",
              "Both always remove the same element",
              "remove() clears the whole set, pop() removes one element"
            ],
            "correct": 0,
            "optsKn": [
              "remove() ಒಂದು ನಿರ್ದಿಷ್ಟ element ತೆಗೆಯುತ್ತದೆ, pop() ಒಂದು ಅನಿರ್ದಿಷ್ಟ element ತೆಗೆಯುತ್ತದೆ",
              "remove() ಒಂದು ಅನಿರ್ದಿಷ್ಟ element ತೆಗೆಯುತ್ತದೆ, pop() ಒಂದು ನಿರ್ದಿಷ್ಟ element ತೆಗೆಯುತ್ತದೆ",
              "ಎರಡೂ ಯಾವಾಗಲೂ ಅದೇ element ತೆಗೆಯುತ್ತವೆ",
              "remove() ಇಡೀ set ಖಾಲಿ ಮಾಡುತ್ತದೆ, pop() ಒಂದು element ತೆಗೆಯುತ್ತದೆ"
            ],
            "qKn": "remove() ಮತ್ತು pop() ನಡುವಿನ ವ್ಯತ್ಯಾಸ ಏನು?"
          },
          {
            "q": "Which method removes all elements from a set?",
            "opts": [
              "remove()",
              "pop()",
              "clear()",
              "difference()"
            ],
            "correct": 2,
            "optsKn": [
              "remove()",
              "pop()",
              "clear()",
              "difference()"
            ],
            "qKn": "ಯಾವ method ಒಂದು set ನಿಂದ ಎಲ್ಲಾ elements ತೆಗೆಯುತ್ತದೆ?"
          },
          {
            "q": "What is the difference between Union and Intersection?",
            "opts": [
              "Union returns only common elements; Intersection returns all elements",
              "Union returns all unique elements from both sets; Intersection returns only the common elements",
              "They both return exactly the same result",
              "Union works only on lists, Intersection only on sets"
            ],
            "correct": 1,
            "optsKn": [
              "Union ಕೇವಲ common elements ಹಿಂತಿರುಗಿಸುತ್ತದೆ; Intersection ಎಲ್ಲಾ elements ಹಿಂತಿರುಗಿಸುತ್ತದೆ",
              "Union ಎರಡೂ sets ಗಳಿಂದ ಎಲ್ಲಾ ವಿಶಿಷ್ಟ elements ಹಿಂತಿರುಗಿಸುತ್ತದೆ; Intersection ಕೇವಲ common elements ಹಿಂತಿರುಗಿಸುತ್ತದೆ",
              "ಎರಡೂ ನಿಖರವಾಗಿ ಅದೇ ಫಲಿತಾಂಶ ಹಿಂತಿರುಗಿಸುತ್ತವೆ",
              "Union ಕೇವಲ lists ಮೇಲೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ, Intersection ಕೇವಲ sets ಮೇಲೆ"
            ],
            "qKn": "Union ಮತ್ತು Intersection ನಡುವಿನ ವ್ಯತ್ಯಾಸ ಏನು?"
          }
        ]
      }
    }
  ]
};
