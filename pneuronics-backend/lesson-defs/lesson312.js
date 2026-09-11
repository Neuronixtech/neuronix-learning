module.exports = {
  "phaseId": "6a358e5ffc29b5a47144467a",
  "moduleId": "6a358e64fc29b5a471444719",
  "order": 0,
  "type": "reading",
  "duration": 20,
  "difficulty": "beginner",
  "status": "published",
  "title": "Loops in Python",
  "titleKn": "ಲೂಪ್ಸ್ ಇನ್ ಪೈಥಾನ್",
  "desc": "Repeat code with while, for, range, break, continue and pass",
  "descKn": "Repeat code with while, for, range, break, continue and pass",
  "objectives": [
    "Use for loops to iterate over sequences and ranges",
    "Use while loops for condition-based repetition",
    "Control loop flow with break, continue, and pass",
    "Apply the range() function with start, stop, and step arguments",
    "Use enumerate() and zip() for efficient iteration",
    "Write list comprehensions as a concise alternative to for loops"
  ],
  "objectivesKn": [
    "Sequences ಮತ್ತು ranges ನ ಮೇಲೆ iterate ಮಾಡಲು for loops ಬಳಸಿ",
    "Condition-based repetition ಗಾಗಿ while loops ಬಳಸಿ",
    "break, continue, ಮತ್ತು pass ಮೂಲಕ loop flow ನಿಯಂತ್ರಿಸಿ",
    "Start, stop, ಮತ್ತು step arguments ಸಹಿತ range() function ಅನ್ವಯಿಸಿ",
    "ಪರಿಣಾಮಕಾರಿ iteration ಗಾಗಿ enumerate() ಮತ್ತು zip() ಬಳಸಿ",
    "For loops ಗೆ concise ಪರ್ಯಾಯವಾಗಿ list comprehensions ಬರೆಯಿರಿ"
  ],
  "blocks": [
    {
      "id": "b1",
      "type": "concept",
      "data": {
        "headingEn": "WHAT ARE LOOPS?",
        "bodyEn": "Loops are used when we want to execute the same block of code multiple times without writing it again and again.",
        "headingKn": "LOOPS ಎಂದರೇನು?",
        "bodyKn": "ನಾವು ಅದೇ ಕೋಡ್ ಬ್ಲಾಕ್ ಅನ್ನು ಮತ್ತೆ ಮತ್ತೆ ಬರೆಯದೆ ಅನೇಕ ಬಾರಿ ಕಾರ್ಯಗತಗೊಳಿಸಲು ಬಯಸಿದಾಗ Loops ಬಳಸಲಾಗುತ್ತದೆ."
      }
    },
    {
      "id": "b2",
      "type": "example",
      "data": {
        "tag": "Real-Life Example",
        "textEn": "Imagine you are a teacher and want to print the attendance numbers from 1 to 50.",
        "textKn": "ನೀವು ಒಬ್ಬ ಶಿಕ್ಷಕರೆಂದು ಮತ್ತು 1 ಇಂದ 50 ವರೆಗಿನ attendance ಸಂಖ್ಯೆಗಳನ್ನು ಮುದ್ರಿಸಲು ಬಯಸುತ್ತೀರಿ ಎಂದು ಊಹಿಸಿ."
      }
    },
    {
      "id": "b3",
      "type": "code",
      "data": {
        "headingEn": "Without loops",
        "descEn": "This is repetitive.",
        "code": "print(1)\nprint(2)\nprint(3)\n# ...\nprint(50)",
        "filename": "without_loop.py",
        "headingKn": "Loops ಇಲ್ಲದೆ",
        "descKn": "ಇದು ಪುನರಾವರ್ತಿತವಾಗಿದೆ."
      }
    },
    {
      "id": "b4",
      "type": "code",
      "data": {
        "headingEn": "With loops",
        "descEn": "One loop replaces 50 print statements.",
        "code": "for i in range(1, 51):\n    print(i)",
        "filename": "with_loop.py",
        "headingKn": "Loops ಜೊತೆ",
        "descKn": "ಒಂದು loop 50 print statements ಗಳನ್ನು ಬದಲಾಯಿಸುತ್ತದೆ."
      }
    },
    {
      "id": "b5",
      "type": "concept",
      "data": {
        "headingEn": "Types of Loops in Python",
        "bodyEn": "Python mainly has two loops:\n• while loop\n• for loop",
        "headingKn": "Python ನಲ್ಲಿ Loops ನ ವಿಧಗಳು",
        "bodyKn": "Python ಮುಖ್ಯವಾಗಿ ಎರಡು loops ಹೊಂದಿದೆ:\n• while loop\n• for loop"
      }
    },
    {
      "id": "b6",
      "type": "concept",
      "data": {
        "headingEn": "1. While Loop",
        "bodyEn": "A while loop keeps executing as long as the condition is True.\n\nSyntax:\nwhile condition:\n    # Code\n\nThe condition is checked before every iteration.\n• If True → Execute the loop.\n• If False → Stop the loop.",
        "headingKn": "1. While Loop",
        "bodyKn": "ಒಂದು while loop condition True ಆಗಿರುವವರೆಗೆ ಕಾರ್ಯಗತಗೊಳ್ಳುತ್ತಿರುತ್ತದೆ.\n\nSyntax:\nwhile condition:\n    # Code\n\nCondition ಪ್ರತಿ iteration ಮೊದಲು ಪರಿಶೀಲಿಸಲಾಗುತ್ತದೆ.\n• True ಆಗಿದ್ದರೆ → Loop ಕಾರ್ಯಗತಗೊಳಿಸಿ.\n• False ಆಗಿದ್ದರೆ → Loop ನಿಲ್ಲಿಸಿ."
      }
    },
    {
      "id": "b7",
      "type": "code",
      "data": {
        "headingEn": "Example 1 — print Hello five times",
        "descEn": "",
        "code": "count = 1\n\nwhile count <= 5:\n    print(\"Hello\")\n    count += 1",
        "filename": "while_hello.py",
        "headingKn": "ಉದಾಹರಣೆ 1 — Hello ಅನ್ನು ಐದು ಬಾರಿ ಮುದ್ರಿಸಿ"
      }
    },
    {
      "id": "b8",
      "type": "output",
      "data": {
        "output": "Hello\nHello\nHello\nHello\nHello"
      }
    },
    {
      "id": "b9",
      "type": "concept",
      "data": {
        "headingEn": "How it Works",
        "bodyEn": "• Initially count = 1.\n• Condition: 1 <= 5 → True. Print Hello. Increase count = 2.\n• Again: 2 <= 5 → True. This continues until count = 6.\n• Now: 6 <= 5 → False. Loop stops.",
        "headingKn": "ಇದು ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ",
        "bodyKn": "• ಆರಂಭದಲ್ಲಿ count = 1.\n• Condition: 1 <= 5 → True. Hello ಮುದ್ರಿಸಿ. count = 2 ಗೆ ಹೆಚ್ಚಿಸಿ.\n• ಮತ್ತೆ: 2 <= 5 → True. ಇದು count = 6 ಆಗುವವರೆಗೆ ಮುಂದುವರಿಯುತ್ತದೆ.\n• ಈಗ: 6 <= 5 → False. Loop ನಿಲ್ಲುತ್ತದೆ."
      }
    },
    {
      "id": "b10",
      "type": "code",
      "data": {
        "headingEn": "Example 2 — numbers 1 to 10",
        "descEn": "",
        "code": "i = 1\n\nwhile i <= 10:\n    print(i)\n    i += 1",
        "filename": "while_numbers.py",
        "headingKn": "ಉದಾಹರಣೆ 2 — 1 ಇಂದ 10 ವರೆಗಿನ ಸಂಖ್ಯೆಗಳು"
      }
    },
    {
      "id": "b11",
      "type": "output",
      "data": {
        "output": "1\n2\n3\n4\n5\n6\n7\n8\n9\n10"
      }
    },
    {
      "id": "b12",
      "type": "code",
      "data": {
        "headingEn": "Example 3 — iterate a list with while",
        "descEn": "",
        "code": "fruits = [\"Apple\", \"Mango\", \"Banana\"]\n\ni = 0\nwhile i < len(fruits):\n    print(fruits[i])\n    i += 1",
        "filename": "while_list.py",
        "headingKn": "ಉದಾಹರಣೆ 3 — while ಜೊತೆ ಒಂದು list iterate ಮಾಡುವುದು"
      }
    },
    {
      "id": "b13",
      "type": "output",
      "data": {
        "output": "Apple\nMango\nBanana"
      }
    },
    {
      "id": "b14",
      "type": "concept",
      "data": {
        "headingEn": "Infinite Loop",
        "bodyEn": "If the condition never becomes False, the loop runs forever.\n\nwhile True:\n    print(\"Hello\")\n\n⚠ Stop using Ctrl + C.",
        "headingKn": "Infinite Loop",
        "bodyKn": "Condition ಎಂದಿಗೂ False ಆಗದಿದ್ದರೆ, loop ಶಾಶ್ವತವಾಗಿ ಚಲಿಸುತ್ತದೆ.\n\nwhile True:\n    print(\"Hello\")\n\n⚠ Ctrl + C ಬಳಸಿ ನಿಲ್ಲಿಸಿ."
      }
    },
    {
      "id": "b15",
      "type": "concept",
      "data": {
        "headingEn": "2. For Loop",
        "bodyEn": "A for loop is used to iterate through a sequence such as:\n• List\n• Tuple\n• String\n• Set\n• Dictionary\n• Range\n\nSyntax:\nfor variable in sequence:\n    # Code",
        "headingKn": "2. For Loop",
        "bodyKn": "ಒಂದು for loop ಈ ಕೆಳಗಿನಂತಹ ಒಂದು sequence ಮೂಲಕ iterate ಮಾಡಲು ಬಳಸಲಾಗುತ್ತದೆ:\n• List\n• Tuple\n• String\n• Set\n• Dictionary\n• Range\n\nSyntax:\nfor variable in sequence:\n    # Code"
      }
    },
    {
      "id": "b16",
      "type": "code",
      "data": {
        "headingEn": "Example 1 — loop through a list",
        "descEn": "",
        "code": "numbers = [10, 20, 30]\n\nfor num in numbers:\n    print(num)",
        "filename": "for_list.py",
        "headingKn": "ಉದಾಹರಣೆ 1 — ಒಂದು list ಮೂಲಕ loop ಮಾಡುವುದು"
      }
    },
    {
      "id": "b17",
      "type": "output",
      "data": {
        "output": "10\n20\n30"
      }
    },
    {
      "id": "b18",
      "type": "code",
      "data": {
        "headingEn": "Example 2 — loop through a string",
        "descEn": "",
        "code": "name = \"Python\"\n\nfor letter in name:\n    print(letter)",
        "filename": "for_string.py",
        "headingKn": "ಉದಾಹರಣೆ 2 — ಒಂದು string ಮೂಲಕ loop ಮಾಡುವುದು"
      }
    },
    {
      "id": "b19",
      "type": "output",
      "data": {
        "output": "P\ny\nt\nh\no\nn"
      }
    },
    {
      "id": "b20",
      "type": "code",
      "data": {
        "headingEn": "Example 3 — loop through a tuple",
        "descEn": "",
        "code": "colors = (\"Red\", \"Green\", \"Blue\")\n\nfor color in colors:\n    print(color)",
        "filename": "for_tuple.py",
        "headingKn": "ಉದಾಹರಣೆ 3 — ಒಂದು tuple ಮೂಲಕ loop ಮಾಡುವುದು"
      }
    },
    {
      "id": "b21",
      "type": "output",
      "data": {
        "output": "Red\nGreen\nBlue"
      }
    },
    {
      "id": "b22",
      "type": "concept",
      "data": {
        "headingEn": "Range Function",
        "bodyEn": "The range( ) function generates a sequence of numbers.\n\nSyntax:\nrange(start, stop, step)",
        "headingKn": "Range Function",
        "bodyKn": "range( ) function ಸಂಖ್ಯೆಗಳ ಒಂದು sequence ಉತ್ಪಾದಿಸುತ್ತದೆ.\n\nSyntax:\nrange(start, stop, step)"
      }
    },
    {
      "id": "b23",
      "type": "table",
      "data": {
        "captionEn": "range() parameters",
        "rows": "Parameter | Meaning\nstart | Starting number\nstop | Ending number (not included)\nstep | Increment",
        "captionKn": "range() parameters"
      }
    },
    {
      "id": "b24",
      "type": "code",
      "data": {
        "headingEn": "Example 1 — range(5)",
        "descEn": "",
        "code": "for i in range(5):\n    print(i)",
        "filename": "range1.py",
        "headingKn": "ಉದಾಹರಣೆ 1 — range(5)"
      }
    },
    {
      "id": "b25",
      "type": "output",
      "data": {
        "output": "0\n1\n2\n3\n4"
      }
    },
    {
      "id": "b26",
      "type": "code",
      "data": {
        "headingEn": "Example 2 — range(2, 8)",
        "descEn": "",
        "code": "for i in range(2, 8):\n    print(i)",
        "filename": "range2.py",
        "headingKn": "ಉದಾಹರಣೆ 2 — range(2, 8)"
      }
    },
    {
      "id": "b27",
      "type": "output",
      "data": {
        "output": "2\n3\n4\n5\n6\n7"
      }
    },
    {
      "id": "b28",
      "type": "code",
      "data": {
        "headingEn": "Example 3 — even numbers",
        "descEn": "",
        "code": "for i in range(2, 11, 2):\n    print(i)",
        "filename": "range3.py",
        "headingKn": "ಉದಾಹರಣೆ 3 — ಸಮ ಸಂಖ್ಯೆಗಳು"
      }
    },
    {
      "id": "b29",
      "type": "output",
      "data": {
        "output": "2\n4\n6\n8\n10"
      }
    },
    {
      "id": "b30",
      "type": "code",
      "data": {
        "headingEn": "Example 4 — reverse order",
        "descEn": "",
        "code": "for i in range(10, 0, -1):\n    print(i)",
        "filename": "range4.py",
        "headingKn": "ಉದಾಹರಣೆ 4 — ವಿಲೋಮ ಕ್ರಮ"
      }
    },
    {
      "id": "b31",
      "type": "output",
      "data": {
        "output": "10\n9\n8\n7\n6\n5\n4\n3\n2\n1"
      }
    },
    {
      "id": "b32",
      "type": "concept",
      "data": {
        "headingEn": "for Loop with else",
        "bodyEn": "• The else block executes only when the loop finishes normally.\n• If the loop ends using break, the else block is skipped.\n\nSyntax:\nfor item in sequence:\n    # code\nelse:\n    # runs after loop completes",
        "headingKn": "for Loop else ಜೊತೆ",
        "bodyKn": "• Else block loop ಸಾಮಾನ್ಯವಾಗಿ ಪೂರ್ಣಗೊಂಡಾಗ ಮಾತ್ರ ಕಾರ್ಯಗತಗೊಳ್ಳುತ್ತದೆ.\n• Loop break ಬಳಸಿ ಕೊನೆಗೊಂಡರೆ, else block ಬಿಟ್ಟುಬಿಡಲಾಗುತ್ತದೆ.\n\nSyntax:\nfor item in sequence:\n    # code\nelse:\n    # loop ಪೂರ್ಣಗೊಂಡ ನಂತರ ಚಲಿಸುತ್ತದೆ"
      }
    },
    {
      "id": "b33",
      "type": "code",
      "data": {
        "headingEn": "Example — loop completes normally",
        "descEn": "",
        "code": "numbers = [10, 20, 30]\n\nfor num in numbers:\n    print(num)\nelse:\n    print(\"Loop Finished\")",
        "filename": "for_else.py",
        "headingKn": "ಉದಾಹರಣೆ — loop ಸಾಮಾನ್ಯವಾಗಿ ಪೂರ್ಣಗೊಳ್ಳುತ್ತದೆ"
      }
    },
    {
      "id": "b34",
      "type": "output",
      "data": {
        "output": "10\n20\n30\nLoop Finished"
      }
    },
    {
      "id": "b35",
      "type": "code",
      "data": {
        "headingEn": "Example where else does not execute",
        "descEn": "Since break stopped the loop, else did not run.",
        "code": "for i in range(5):\n    if i == 3:\n        break\n    print(i)\nelse:\n    print(\"Finished\")",
        "filename": "for_else_break.py",
        "headingKn": "else execute ಆಗದ ಉದಾಹರಣೆ",
        "descKn": "break loop ಅನ್ನು ನಿಲ್ಲಿಸಿದ್ದರಿಂದ, else run ಆಗಲಿಲ್ಲ."
      }
    },
    {
      "id": "b36",
      "type": "output",
      "data": {
        "output": "0\n1\n2"
      }
    },
    {
      "id": "b37",
      "type": "concept",
      "data": {
        "headingEn": "Break Statement",
        "bodyEn": "The break statement immediately exits the loop.\n\nSyntax:\nbreak",
        "headingKn": "Break Statement",
        "bodyKn": "break statement ತಕ್ಷಣ loop ನಿಂದ ನಿರ್ಗಮಿಸುತ್ತದೆ.\n\nSyntax:\nbreak"
      }
    },
    {
      "id": "b38",
      "type": "code",
      "data": {
        "headingEn": "Example 1 — stop at 5",
        "descEn": "",
        "code": "for i in range(10):\n    if i == 5:\n        break\n    print(i)",
        "filename": "break1.py",
        "headingKn": "ಉದಾಹರಣೆ 1 — 5 ರಲ್ಲಿ ನಿಲ್ಲಿಸಿ"
      }
    },
    {
      "id": "b39",
      "type": "output",
      "data": {
        "output": "0\n1\n2\n3\n4"
      }
    },
    {
      "id": "b40",
      "type": "code",
      "data": {
        "headingEn": "Example 2 — search for a student",
        "descEn": "",
        "code": "students = [\"Rahul\", \"Ankit\", \"Priya\", \"Asha\"]\n\nfor student in students:\n    if student == \"Priya\":\n        print(\"Student Found\")\n        break",
        "filename": "break2.py",
        "headingKn": "ಉದಾಹರಣೆ 2 — ಒಬ್ಬ ವಿದ್ಯಾರ್ಥಿಯನ್ನು ಹುಡುಕುವುದು"
      }
    },
    {
      "id": "b41",
      "type": "output",
      "data": {
        "output": "Student Found"
      }
    },
    {
      "id": "b42",
      "type": "concept",
      "data": {
        "headingEn": "Continue Statement",
        "bodyEn": "The continue statement skips the current iteration and moves to the next one.\n\nSyntax:\ncontinue",
        "headingKn": "Continue Statement",
        "bodyKn": "continue statement ಪ್ರಸ್ತುತ iteration ಬಿಟ್ಟುಬಿಟ್ಟು ಮುಂದಿನದಕ್ಕೆ ಹೋಗುತ್ತದೆ.\n\nSyntax:\ncontinue"
      }
    },
    {
      "id": "b43",
      "type": "code",
      "data": {
        "headingEn": "Example — skip number 3",
        "descEn": "Notice that 3 is skipped.",
        "code": "for i in range(6):\n    if i == 3:\n        continue\n    print(i)",
        "filename": "continue1.py",
        "headingKn": "ಉದಾಹರಣೆ — ಸಂಖ್ಯೆ 3 ಬಿಟ್ಟುಬಿಡಿ",
        "descKn": "3 ಬಿಟ್ಟುಬಿಟ್ಟಿದೆ ಎಂದು ಗಮನಿಸಿ."
      }
    },
    {
      "id": "b44",
      "type": "output",
      "data": {
        "output": "0\n1\n2\n4\n5"
      }
    },
    {
      "id": "b45",
      "type": "code",
      "data": {
        "headingEn": "Example 2 — print only odd numbers",
        "descEn": "",
        "code": "for i in range(1, 11):\n    if i % 2 == 0:\n        continue\n    print(i)",
        "filename": "continue2.py",
        "headingKn": "ಉದಾಹರಣೆ 2 — ಕೇವಲ ಬೆಸ ಸಂಖ್ಯೆಗಳನ್ನು ಮುದ್ರಿಸಿ"
      }
    },
    {
      "id": "b46",
      "type": "output",
      "data": {
        "output": "1\n3\n5\n7\n9"
      }
    },
    {
      "id": "b47",
      "type": "concept",
      "data": {
        "headingEn": "Pass Statement",
        "bodyEn": "The pass statement does nothing. It is used as a placeholder where Python expects a statement.\n\nSyntax:\npass",
        "headingKn": "Pass Statement",
        "bodyKn": "pass statement ಏನೂ ಮಾಡುವುದಿಲ್ಲ. Python ಒಂದು statement ನಿರೀಕ್ಷಿಸುವಲ್ಲಿ ಇದನ್ನು ಒಂದು placeholder ಆಗಿ ಬಳಸಲಾಗುತ್ತದೆ.\n\nSyntax:\npass"
      }
    },
    {
      "id": "b48",
      "type": "code",
      "data": {
        "headingEn": "Example 1",
        "descEn": "",
        "code": "for i in range(5):\n    pass\n\nprint(\"Loop Completed\")",
        "filename": "pass1.py",
        "headingKn": "ಉದಾಹರಣೆ 1"
      }
    },
    {
      "id": "b49",
      "type": "output",
      "data": {
        "output": "Loop Completed"
      }
    },
    {
      "id": "b50",
      "type": "code",
      "data": {
        "headingEn": "Example 2",
        "descEn": "",
        "code": "if 10 > 5:\n    pass\n\nprint(\"Condition checked\")",
        "filename": "pass2.py",
        "headingKn": "ಉದಾಹರಣೆ 2"
      }
    },
    {
      "id": "b51",
      "type": "output",
      "data": {
        "output": "Condition checked"
      }
    },
    {
      "id": "b52",
      "type": "concept",
      "data": {
        "headingEn": "Why Use pass?",
        "bodyEn": "Suppose you are planning to write a function later.",
        "headingKn": "pass ಏಕೆ ಬಳಸಬೇಕು?",
        "bodyKn": "ನೀವು ನಂತರ ಒಂದು function ಬರೆಯಲು ಯೋಜಿಸುತ್ತಿದ್ದೀರಿ ಎಂದು ಭಾವಿಸೋಣ."
      }
    },
    {
      "id": "b53",
      "type": "code",
      "data": {
        "headingEn": "Without pass",
        "descEn": "❌ Error because the function body is empty.",
        "code": "def greet():",
        "filename": "no_pass.py",
        "headingKn": "pass ಇಲ್ಲದೆ",
        "descKn": "❌ Error ಏಕೆಂದರೆ function body ಖಾಲಿ ಇದೆ."
      }
    },
    {
      "id": "b54",
      "type": "code",
      "data": {
        "headingEn": "Correct way",
        "descEn": "Now Python accepts the function, and you can implement it later.",
        "code": "def greet():\n    pass",
        "filename": "with_pass.py",
        "headingKn": "ಸರಿಯಾದ ಮಾರ್ಗ",
        "descKn": "ಈಗ Python function ಅನ್ನು ಒಪ್ಪಿಕೊಳ್ಳುತ್ತದೆ, ಮತ್ತು ನೀವು ಅದನ್ನು ನಂತರ implement ಮಾಡಬಹುದು."
      }
    },
    {
      "id": "b55",
      "type": "heading",
      "data": {
        "textEn": "Real-World Examples",
        "level": "H1",
        "textKn": "ನಿಜ-ಜಗತ್ತಿನ ಉದಾಹರಣೆಗಳು"
      }
    },
    {
      "id": "b56",
      "type": "code",
      "data": {
        "headingEn": "Example 1: ATM PIN",
        "descEn": "",
        "code": "correct_pin = 1234\n\npin = int(input(\"Enter PIN: \"))\n\nwhile pin != correct_pin:\n    print(\"Wrong PIN\")\n    pin = int(input(\"Enter Again: \"))\n\nprint(\"Access Granted\")",
        "filename": "atm_pin.py",
        "headingKn": "ಉದಾಹರಣೆ 1: ATM PIN"
      }
    },
    {
      "id": "b57",
      "type": "code",
      "data": {
        "headingEn": "Example 2: Shopping Cart",
        "descEn": "",
        "code": "cart = [\"Laptop\", \"Mouse\", \"Keyboard\"]\n\nfor item in cart:\n    print(item)",
        "filename": "shopping_cart.py",
        "headingKn": "ಉದಾಹರಣೆ 2: Shopping Cart"
      }
    },
    {
      "id": "b58",
      "type": "output",
      "data": {
        "output": "Laptop\nMouse\nKeyboard"
      }
    },
    {
      "id": "b59",
      "type": "code",
      "data": {
        "headingEn": "Example 3: Skip Out-of-Stock Items",
        "descEn": "",
        "code": "products = [\"Phone\", \"Laptop\", \"Out of Stock\", \"Tablet\"]\n\nfor product in products:\n    if product == \"Out of Stock\":\n        continue\n    print(product)",
        "filename": "skip_stock.py",
        "headingKn": "ಉದಾಹರಣೆ 3: Out-of-Stock Items ಬಿಟ್ಟುಬಿಡಿ"
      }
    },
    {
      "id": "b60",
      "type": "output",
      "data": {
        "output": "Phone\nLaptop\nTablet"
      }
    },
    {
      "id": "b61",
      "type": "code",
      "data": {
        "headingEn": "Example 4: Find a Product",
        "descEn": "",
        "code": "products = [\"Laptop\", \"Mouse\", \"Keyboard\", \"Monitor\"]\n\nsearch = \"Keyboard\"\n\nfor item in products:\n    if item == search:\n        print(\"Product Found\")\n        break",
        "filename": "find_product.py",
        "headingKn": "ಉದಾಹರಣೆ 4: ಒಂದು Product ಹುಡುಕಿ"
      }
    },
    {
      "id": "b62",
      "type": "output",
      "data": {
        "output": "Product Found"
      }
    },
    {
      "id": "b63",
      "type": "table",
      "data": {
        "captionEn": "Summary Table",
        "rows": "Concept | Purpose | Example\nwhile | Repeats while a condition is True | Print 1–10\nfor | Iterates through a sequence | List, tuple, string\nrange() | Generates numbers | range(1, 11)\nbreak | Exits the loop immediately | Stop when value is found\ncontinue | Skips the current iteration | Skip even numbers\npass | Placeholder that does nothing | Empty function or loop\nfor...else | Executes else when the loop completes normally | Print \"Finished\" after all items",
        "captionKn": "ಸಾರಾಂಶ ಕೋಷ್ಟಕ"
      }
    },
    {
      "type": "concept",
      "data": {
        "headingEn": "Key Takeaways",
        "headingKn": "ಮುಖ್ಯ ಅಂಶಗಳು",
        "bodyEn": "• Loops let a program repeat a block of code without writing it out multiple times -- Python has two kinds: while (repeats while a condition is true) and for (iterates over a sequence like a list, string, or range).\n• range() generates a sequence of numbers on demand and supports a start, stop, and step, making it easy to count up, down, or skip values.\n• break exits a loop immediately, continue skips to the next iteration, and pass does nothing -- it's a placeholder used when Python's syntax requires a statement but you have no code to write yet.\n• A for loop's optional else block runs only if the loop completes without hitting a break -- a subtle feature that's genuinely useful for patterns like \"search a list, and if nothing was found, do X.\"",
        "bodyKn": "• Loops ಒಂದು program ಗೆ ಒಂದು ಕೋಡ್ ಬ್ಲಾಕ್ ಅನ್ನು ಅನೇಕ ಬಾರಿ ಬರೆಯದೆ ಪುನರಾವರ್ತಿಸಲು ಅನುಮತಿಸುತ್ತವೆ -- Python ಎರಡು ರೀತಿ ಹೊಂದಿದೆ: while (ಒಂದು condition ನಿಜವಾಗಿರುವಾಗ ಪುನರಾವರ್ತಿಸುತ್ತದೆ) ಮತ್ತು for (ಒಂದು list, string, ಅಥವಾ range ನಂತಹ sequence ಮೇಲೆ iterate ಮಾಡುತ್ತದೆ).\n• range() ಬೇಡಿಕೆಯ ಮೇಲೆ ಸಂಖ್ಯೆಗಳ ಒಂದು sequence ಉತ್ಪಾದಿಸುತ್ತದೆ ಮತ್ತು ಒಂದು start, stop, ಮತ್ತು step ಬೆಂಬಲಿಸುತ್ತದೆ, ಮೇಲಕ್ಕೆ, ಕೆಳಕ್ಕೆ ಎಣಿಸಲು, ಅಥವಾ ಮೌಲ್ಯಗಳನ್ನು ಬಿಟ್ಟುಬಿಡಲು ಸುಲಭಗೊಳಿಸುತ್ತದೆ.\n• break ಒಂದು loop ಅನ್ನು ತಕ್ಷಣ ನಿರ್ಗಮಿಸುತ್ತದೆ, continue ಮುಂದಿನ iteration ಗೆ ಹೋಗುತ್ತದೆ, ಮತ್ತು pass ಏನೂ ಮಾಡುವುದಿಲ್ಲ -- ಇದು Python ನ syntax ಗೆ ಒಂದು statement ಬೇಕಾದಾಗ ಆದರೆ ನಿಮಗೆ ಇನ್ನೂ ಬರೆಯಲು ಕೋಡ್ ಇಲ್ಲದಿದ್ದಾಗ ಬಳಸುವ ಒಂದು placeholder.\n• ಒಂದು for loop ನ ಐಚ್ಛಿಕ else block ಕೇವಲ loop break ಗೆ ಬಡಿಯದೆ ಪೂರ್ಣಗೊಂಡರೆ ಮಾತ್ರ ಚಲಿಸುತ್ತದೆ -- \"ಒಂದು list ಹುಡುಕಿ, ಏನೂ ಸಿಗದಿದ್ದರೆ, X ಮಾಡಿ\" ನಂತಹ ಮಾದರಿಗಳಿಗೆ ನಿಜವಾಗಿ ಉಪಯುಕ್ತವಾದ ಒಂದು ಸೂಕ್ಷ್ಮ feature."
      }
    },
    {
      "id": "b64",
      "type": "quiz",
      "data": {
        "questions": [
          {
            "q": "What is the main purpose of a loop in Python?",
            "opts": [
              "To store multiple values in one variable",
              "To execute the same block of code multiple times without rewriting it",
              "To make decisions based on a condition",
              "To define a function"
            ],
            "correct": 1,
            "qKn": "Python ನಲ್ಲಿ ಒಂದು loop ನ ಮುಖ್ಯ ಉದ್ದೇಶ ಏನು?",
            "optsKn": [
              "ಒಂದೇ variable ನಲ್ಲಿ ಅನೇಕ ಮೌಲ್ಯಗಳನ್ನು ಸಂಗ್ರಹಿಸಲು",
              "ಮತ್ತೆ ಬರೆಯದೆ ಅದೇ ಕೋಡ್ block ಅನ್ನು ಅನೇಕ ಬಾರಿ execute ಮಾಡಲು",
              "ಒಂದು condition ಆಧಾರದ ಮೇಲೆ ನಿರ್ಧಾರಗಳನ್ನು ತೆಗೆದುಕೊಳ್ಳಲು",
              "ಒಂದು function ವ್ಯಾಖ್ಯಾನಿಸಲು"
            ]
          },
          {
            "q": "When does a while loop stop executing?",
            "opts": [
              "After exactly 10 iterations",
              "As soon as its condition becomes False",
              "Only when break is used",
              "When the loop variable reaches zero"
            ],
            "correct": 1,
            "qKn": "ಒಂದು while loop ಯಾವಾಗ execute ಮಾಡುವುದನ್ನು ನಿಲ್ಲಿಸುತ್ತದೆ?",
            "optsKn": [
              "ನಿಖರವಾಗಿ 10 iterations ನಂತರ",
              "ಅದರ condition False ಆದ ತಕ್ಷಣ",
              "break ಬಳಸಿದಾಗ ಮಾತ್ರ",
              "loop variable ಶೂನ್ಯ ತಲುಪಿದಾಗ"
            ]
          },
          {
            "q": "What does range(2, 11, 2) generate?",
            "opts": [
              "2, 4, 6, 8, 10",
              "2, 3, 4, 5, 6, 7, 8, 9, 10",
              "1, 2, 3, 4, 5",
              "11, 9, 7, 5, 3"
            ],
            "correct": 0,
            "qKn": "range(2, 11, 2) ಏನನ್ನು ಉತ್ಪಾದಿಸುತ್ತದೆ?",
            "optsKn": [
              "2, 4, 6, 8, 10",
              "2, 3, 4, 5, 6, 7, 8, 9, 10",
              "1, 2, 3, 4, 5",
              "11, 9, 7, 5, 3"
            ]
          },
          {
            "q": "When does the else block of a for...else loop get skipped?",
            "opts": [
              "It never gets skipped",
              "When the loop is empty",
              "When the loop exits early using break",
              "When the sequence has more than 5 items"
            ],
            "correct": 2,
            "qKn": "ಒಂದು for...else loop ನ else block ಯಾವಾಗ ಬಿಟ್ಟುಬಿಡಲಾಗುತ್ತದೆ?",
            "optsKn": [
              "ಇದು ಎಂದಿಗೂ ಬಿಟ್ಟುಬಿಡುವುದಿಲ್ಲ",
              "loop ಖಾಲಿ ಇದ್ದಾಗ",
              "loop break ಬಳಸಿ ಬೇಗ ನಿರ್ಗಮಿಸಿದಾಗ",
              "sequence 5 ಕ್ಕಿಂತ ಹೆಚ್ಚು items ಹೊಂದಿದಾಗ"
            ]
          },
          {
            "q": "What is the difference between break and continue?",
            "opts": [
              "break skips the current iteration, continue exits the loop entirely",
              "break exits the loop immediately, continue skips the current iteration and moves to the next one",
              "They both do exactly the same thing",
              "break only works with while loops, continue only works with for loops"
            ],
            "correct": 1,
            "qKn": "break ಮತ್ತು continue ನಡುವಿನ ವ್ಯತ್ಯಾಸ ಏನು?",
            "optsKn": [
              "break ಪ್ರಸ್ತುತ iteration ಬಿಟ್ಟುಬಿಡುತ್ತದೆ, continue ಸಂಪೂರ್ಣವಾಗಿ loop ನಿಂದ ನಿರ್ಗಮಿಸುತ್ತದೆ",
              "break ತಕ್ಷಣ loop ನಿಂದ ನಿರ್ಗಮಿಸುತ್ತದೆ, continue ಪ್ರಸ್ತುತ iteration ಬಿಟ್ಟುಬಿಟ್ಟು ಮುಂದಿನದಕ್ಕೆ ಹೋಗುತ್ತದೆ",
              "ಎರಡೂ ನಿಖರವಾಗಿ ಒಂದೇ ಕೆಲಸ ಮಾಡುತ್ತವೆ",
              "break ಕೇವಲ while loops ಜೊತೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ, continue ಕೇವಲ for loops ಜೊತೆ"
            ]
          },
          {
            "q": "Why would you use the pass statement?",
            "opts": [
              "To immediately stop a loop",
              "To skip one iteration of a loop",
              "As a placeholder where Python expects a statement, e.g. in an empty function body",
              "To repeat a block of code indefinitely"
            ],
            "correct": 2,
            "qKn": "ನೀವು pass statement ಅನ್ನು ಏಕೆ ಬಳಸುತ್ತೀರಿ?",
            "optsKn": [
              "ಒಂದು loop ಅನ್ನು ತಕ್ಷಣ ನಿಲ್ಲಿಸಲು",
              "ಒಂದು loop ನ ಒಂದು iteration ಬಿಟ್ಟುಬಿಡಲು",
              "Python ಒಂದು statement ನಿರೀಕ್ಷಿಸುವಲ್ಲಿ ಒಂದು placeholder ಆಗಿ, ಉದಾ. ಒಂದು ಖಾಲಿ function body ನಲ್ಲಿ",
              "ಕೋಡ್ ನ ಒಂದು block ಅನಿರ್ದಿಷ್ಟವಾಗಿ ಪುನರಾವರ್ತಿಸಲು"
            ]
          }
        ]
      }
    }
  ]
};
