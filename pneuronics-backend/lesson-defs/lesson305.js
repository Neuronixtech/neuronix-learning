module.exports = {
  "phaseId": "6a358e5ffc29b5a47144467a",
  "moduleId": "6a358e60fc29b5a4714446bf",
  "order": 0,
  "type": "reading",
  "duration": 25,
  "difficulty": "beginner",
  "status": "published",
  "title": "Strings",
  "titleKn": "ಸ್ಟ್ರಿಂಗ್ಸ್",
  "desc": "In this chapter, you learn what strings are, how to create and manipulate them, and how to use indexing, slicing, and built-in string methods to work with text data.",
  "descKn": "ಈ lesson ನಲ್ಲಿ, ನೀವು strings ರಚಿಸುವುದು, indexing ಮತ್ತು slicing ಬಳಸಿ ಅವುಗಳ ಭಾಗಗಳನ್ನು ಪ್ರವೇಶಿಸುವುದು, ಮತ್ತು common string functions ಬಳಸುವುದು ಹೇಗೆ ಎಂದು ಕಲಿಯುತ್ತೀರಿ.",
  "objectives": [
    "Define a string and create strings using single, double, and triple quotes",
    "Access individual characters using positive and negative indexing",
    "Extract substrings using slicing syntax s[start:stop:step]",
    "Apply built-in string methods: len(), capitalize(), find(), count(), replace(), endswith()",
    "Understand that strings are immutable in Python"
  ],
  "objectivesKn": [
    "Single, double, ಮತ್ತು triple quotes ಬಳಸಿ string ರಚಿಸಿ ಮತ್ತು ವ್ಯಾಖ್ಯಾನಿಸಿ",
    "Positive ಮತ್ತು negative indexing ಮೂಲಕ ಪ್ರತ್ಯೇಕ characters ಪ್ರವೇಶಿಸಿ",
    "s[start:stop:step] slicing syntax ಬಳಸಿ substrings ತೆಗೆದುಕೊಳ್ಳಿ",
    "Built-in string methods ಅನ್ವಯಿಸಿ: len(), capitalize(), find(), count(), replace(), endswith()",
    "Python ನಲ್ಲಿ strings immutable ಎಂಬುದನ್ನು ಅರ್ಥ ಮಾಡಿಕೊಳ್ಳಿ"
  ],
  "blocks": [
    {
      "id": "b29",
      "type": "concept",
      "data": {
        "headingEn": "What is a String?",
        "bodyEn": "A string is a sequence of characters enclosed in quotes.",
        "headingKn": "String ಎಂದರೇನು?",
        "bodyKn": "ಒಂದು string quotes ನಲ್ಲಿ ಸುತ್ತುವರಿದ ಅಕ್ಷರಗಳ ಒಂದು sequence."
      }
    },
    {
      "id": "b2",
      "type": "text",
      "data": {
        "headingEn": "There are three ways to create a string.",
        "headingKn": "ಒಂದು string ರಚಿಸಲು ಮೂರು ಮಾರ್ಗಗಳಿವೆ."
      }
    },
    {
      "id": "b3",
      "type": "code",
      "data": {
        "code": "a = 'PYTHON'      # Single quotes\nb = \"PYTHON\"      # Double quotes\nc = '''PYTHON'''  # Triple quotes"
      }
    },
    {
      "id": "b5",
      "type": "text",
      "data": {
        "headingEn": "String Indexing",
        "descEn": "Suppose we have the following string:",
        "headingKn": "String Indexing",
        "descKn": "ನಾವು ಈ ಕೆಳಗಿನ string ಹೊಂದಿದ್ದೇವೆ ಎಂದು ಭಾವಿಸೋಣ:"
      }
    },
    {
      "id": "b6",
      "type": "code",
      "data": {
        "code": "name = \"PYTHON\""
      }
    },
    {
      "id": "b8",
      "type": "text",
      "data": {
        "headingEn": "Positive Indexing",
        "headingKn": "Positive Indexing"
      }
    },
    {
      "id": "b9",
      "type": "math",
      "data": {
        "formula": "        P    Y    T    H    O    N\n      +----+----+----+----+----+----+\nIndex | 0  | 1  | 2  | 3  | 4  | 5  |\n      +----+----+----+----+----+----+\n\nLength = 6",
        "descEn": "0 → first character (P)\n5 → last character (N)",
        "descKn": "0 → ಮೊದಲ ಅಕ್ಷರ (P)\n5 → ಕೊನೆಯ ಅಕ್ಷರ (N)"
      }
    },
    {
      "id": "b15",
      "type": "heading",
      "data": {
        "textEn": "Negative Indexing",
        "textKn": "Negative Indexing"
      }
    },
    {
      "id": "b12",
      "type": "math",
      "data": {
        "formula": "        P    Y    T    H    O    N\n      +----+----+----+----+----+----+\nIndex |-6  |-5  |-4  |-3  |-2  |-1  |\n      +----+----+----+----+----+----+",
        "descEn": "-1 → last character (N)\n-6 → first character (P)",
        "descKn": "-1 → ಕೊನೆಯ ಅಕ್ಷರ (N)\n-6 → ಮೊದಲ ಅಕ್ಷರ (P)"
      }
    },
    {
      "id": "b13",
      "type": "code",
      "data": {
        "headingEn": "",
        "code": "name = \"PYTHON\"\n\nprint(name[0])\nprint(name[3])\nprint(name[-1])",
        "filename": "example"
      }
    },
    {
      "id": "b14",
      "type": "output",
      "data": {
        "output": "P\nH\nN"
      }
    },
    {
      "id": "b16",
      "type": "concept",
      "data": {
        "headingEn": "String Slicing in Python",
        "bodyEn": "String slicing is the process of extracting a part (substring) of a string using its index positions.",
        "headingKn": "Python ನಲ್ಲಿ String Slicing",
        "bodyKn": "String slicing ಎಂದರೆ ಒಂದು string ನ index positions ಬಳಸಿ ಅದರ ಒಂದು ಭಾಗ (substring) ಹೊರತೆಗೆಯುವ ಪ್ರಕ್ರಿಯೆ."
      }
    },
    {
      "id": "b17",
      "type": "code",
      "data": {
        "code": "string[start : end]"
      }
    },
    {
      "id": "b18",
      "type": "text",
      "data": {
        "descEn": "start → The index where slicing begins (included).\nend → The index where slicing stops (not included).\n\nRule: Start index is included, end index is excluded.",
        "descKn": "start → slicing ಆರಂಭವಾಗುವ index (ಸೇರಿಸಲಾಗಿದೆ).\nend → slicing ನಿಲ್ಲುವ index (ಸೇರಿಸಲಾಗಿಲ್ಲ).\n\nನಿಯಮ: Start index ಸೇರಿಸಲಾಗಿದೆ, end index ಹೊರಗಿಡಲಾಗಿದೆ."
      }
    },
    {
      "id": "b19",
      "type": "code",
      "data": {
        "code": "name = \"PYTHON\"",
        "headingEn": "Example code for slicing",
        "headingKn": "Slicing ಗಾಗಿ ಉದಾಹರಣೆ ಕೋಡ್"
      }
    },
    {
      "id": "b20",
      "type": "math",
      "data": {
        "formula": "Characters:   P    Y    T    H    O    N\nIndexes:      0    1    2    3    4    5\nNegative:    -6   -5   -4   -3   -2   -1",
        "descEn": "The length of the string is 6.",
        "descKn": "String ನ ಉದ್ದ 6."
      }
    },
    {
      "id": "b21",
      "type": "heading",
      "data": {
        "textEn": "Example 1: Slice from index 0 to 3",
        "textKn": "ಉದಾಹರಣೆ 1: Index 0 ಇಂದ 3 ವರೆಗೆ Slice"
      }
    },
    {
      "id": "b22",
      "type": "code",
      "data": {
        "code": "name = \"PYTHON\"\n\nprint(name[0:3])"
      }
    },
    {
      "id": "b23",
      "type": "output",
      "data": {
        "output": "PYT"
      }
    },
    {
      "id": "b24",
      "type": "math",
      "data": {
        "formula": "Characters:   P    Y    T    H    O    N\nIndexes:      0    1    2    3    4    5\n               ↑--------------↑\n            Start=0       End=3 (not included)",
        "descEn": "Python takes characters at indices 0, 1, and 2.",
        "descKn": "Python indices 0, 1, ಮತ್ತು 2 ನಲ್ಲಿನ ಅಕ್ಷರಗಳನ್ನು ತೆಗೆದುಕೊಳ್ಳುತ್ತದೆ."
      }
    },
    {
      "id": "b25",
      "type": "heading",
      "data": {
        "textEn": "Example 2: Slice from index 2 to 5",
        "textKn": "ಉದಾಹರಣೆ 2: Index 2 ಇಂದ 5 ವರೆಗೆ Slice"
      }
    },
    {
      "id": "b26",
      "type": "code",
      "data": {
        "code": "name = \"PYTHON\"\n\nprint(name[2:5])"
      }
    },
    {
      "id": "b27",
      "type": "output",
      "data": {
        "output": "THO"
      }
    },
    {
      "id": "b28",
      "type": "math",
      "data": {
        "formula": "Characters:   P    Y    T    H    O    N\nIndexes:      0    1    2    3    4    5\n                     ↑--------------↑\n                  Start=2      End=5",
        "descEn": "Characters selected:\n\nIndex 2 → T\nIndex 3 → H\nIndex 4 → O",
        "descKn": "ಆಯ್ಕೆಮಾಡಿದ ಅಕ್ಷರಗಳು:\n\nIndex 2 → T\nIndex 3 → H\nIndex 4 → O"
      }
    },
    {
      "id": "b30",
      "type": "heading",
      "data": {
        "textEn": "Example 3: Slice from index 1 to 6",
        "textKn": "ಉದಾಹರಣೆ 3: Index 1 ಇಂದ 6 ವರೆಗೆ Slice"
      }
    },
    {
      "id": "b31",
      "type": "code",
      "data": {
        "code": "name = \"PYTHON\"\n\nprint(name[1:6])"
      }
    },
    {
      "id": "b32",
      "type": "output",
      "data": {
        "output": "YTHON"
      }
    },
    {
      "id": "b33",
      "type": "math",
      "data": {
        "formula": "Characters:   P    Y    T    H    O    N\nIndexes:      0    1    2    3    4    5\n                  ↑-------------------↑\n               Start=1          End=6",
        "descEn": "Characters selected:\n\nY\nT\nH\nO\nN",
        "descKn": "ಆಯ್ಕೆಮಾಡಿದ ಅಕ್ಷರಗಳು:\n\nY\nT\nH\nO\nN"
      }
    },
    {
      "id": "b34",
      "type": "heading",
      "data": {
        "textEn": "Negative Index Slicing",
        "textKn": "Negative Index Slicing"
      }
    },
    {
      "id": "b35",
      "type": "code",
      "data": {
        "code": "name = \"PYTHON\"\n\nprint(name[-4:-1])"
      }
    },
    {
      "id": "b39",
      "type": "output",
      "data": {
        "output": "THO"
      }
    },
    {
      "id": "b37",
      "type": "text",
      "data": {
        "headingEn": "Negative indices",
        "headingKn": "Negative Indices"
      }
    },
    {
      "id": "b38",
      "type": "math",
      "data": {
        "formula": "P   Y   T   H   O   N\n-6 -5 -4 -3 -2 -1",
        "descEn": "Start = -4 → T\n\nEnd = -1 → N (not included)",
        "descKn": "Start = -4 → T\n\nEnd = -1 → N (ಸೇರಿಸಲಾಗಿಲ್ಲ)"
      }
    },
    {
      "id": "b40",
      "type": "heading",
      "data": {
        "textEn": "Slicing with Skip Value",
        "textKn": "Skip Value ಜೊತೆ Slicing"
      }
    },
    {
      "id": "b41",
      "type": "code",
      "data": {
        "code": "#syntax\nstring[start:end:step]\n\n#The step tells Python how many characters to skip.\n\nname = \"PYTHON\"\n\nprint(name[0:6:2])\n"
      }
    },
    {
      "id": "b42",
      "type": "output",
      "data": {
        "output": "PTO"
      }
    },
    {
      "id": "b43",
      "type": "math",
      "data": {
        "formula": "P    Y    T    H    O    N\n0    1    2    3    4    5\n↑         ↑         ↑"
      }
    },
    {
      "id": "b44",
      "type": "heading",
      "data": {
        "textEn": "Other Slicing Techniques",
        "textKn": "ಇತರೆ Slicing Techniques"
      }
    },
    {
      "id": "b45",
      "type": "concept",
      "data": {
        "headingEn": "1. Beginning to End",
        "headingKn": "1. ಆರಂಭದಿಂದ ಅಂತ್ಯದವರೆಗೆ"
      }
    },
    {
      "id": "b46",
      "type": "code",
      "data": {
        "code": "name = \"PYTHON\"\n\nprint(name[0:4])"
      }
    },
    {
      "id": "b47",
      "type": "output",
      "data": {
        "output": "PYTH"
      }
    },
    {
      "id": "b48",
      "type": "heading",
      "data": {
        "textEn": "2. From Index to End",
        "textKn": "2. Index ಇಂದ ಅಂತ್ಯದವರೆಗೆ"
      }
    },
    {
      "id": "b49",
      "type": "code",
      "data": {
        "code": "name = \"PYTHON\"\n\nprint(name[2:6])"
      }
    },
    {
      "id": "b50",
      "type": "output",
      "data": {
        "output": "THON"
      }
    },
    {
      "id": "b51",
      "type": "heading",
      "data": {
        "textEn": "3. Entire String",
        "textKn": "3. ಸಂಪೂರ್ಣ String"
      }
    },
    {
      "id": "b52",
      "type": "code",
      "data": {
        "code": "name = \"PYTHON\"\n\nprint(name[:])"
      }
    },
    {
      "id": "b53",
      "type": "output",
      "data": {
        "output": "PYTHON"
      }
    },
    {
      "id": "b54",
      "type": "heading",
      "data": {
        "textEn": "String Functions",
        "textKn": "String Functions"
      }
    },
    {
      "id": "b56",
      "type": "concept",
      "data": {
        "headingEn": "1. len( )",
        "bodyEn": "Returns the total number of characters.",
        "headingKn": "1. len( )",
        "bodyKn": "ಒಟ್ಟು ಅಕ್ಷರಗಳ ಸಂಖ್ಯೆ ಹಿಂತಿರುಗಿಸುತ್ತದೆ."
      }
    },
    {
      "id": "b57",
      "type": "code",
      "data": {
        "code": "text = \"PYTHON\"\n\nprint(len(text))"
      }
    },
    {
      "id": "b58",
      "type": "output",
      "data": {
        "output": "6"
      }
    },
    {
      "id": "b59",
      "type": "concept",
      "data": {
        "headingEn": "2. endswith( )",
        "bodyEn": "Checks whether the string ends with the given text.",
        "headingKn": "2. endswith( )",
        "bodyKn": "string ಕೊಟ್ಟ text ಜೊತೆ ಕೊನೆಗೊಳ್ಳುತ್ತದೆಯೇ ಎಂದು ಪರಿಶೀಲಿಸುತ್ತದೆ."
      }
    },
    {
      "id": "b60",
      "type": "code",
      "data": {
        "code": "text = \"PYTHON\"\n\nprint(text.endswith(\"HON\"))"
      }
    },
    {
      "id": "b61",
      "type": "output",
      "data": {
        "output": "True"
      }
    },
    {
      "id": "b62",
      "type": "concept",
      "data": {
        "headingEn": "3. count( )",
        "bodyEn": "Counts how many times a character appears.",
        "headingKn": "3. count( )",
        "bodyKn": "ಒಂದು character ಎಷ್ಟು ಬಾರಿ ಕಾಣಿಸಿಕೊಳ್ಳುತ್ತದೆ ಎಂದು ಎಣಿಸುತ್ತದೆ."
      }
    },
    {
      "id": "b64",
      "type": "code",
      "data": {
        "code": "text = \"PROGRAMMING\"\n\nprint(text.count(\"G\"))"
      }
    },
    {
      "id": "b65",
      "type": "output",
      "data": {
        "output": "2"
      }
    },
    {
      "id": "b66",
      "type": "math",
      "data": {
        "formula": "P R O G R A M M I N G\n      ↑             ↑\n\nG appears 2 times."
      }
    },
    {
      "id": "b67",
      "type": "concept",
      "data": {
        "headingEn": "4. capitalize( )",
        "bodyEn": "Converts the first letter into uppercase.",
        "headingKn": "4. capitalize( )",
        "bodyKn": "ಮೊದಲ ಅಕ್ಷರವನ್ನು uppercase ಗೆ ಪರಿವರ್ತಿಸುತ್ತದೆ."
      }
    },
    {
      "id": "b68",
      "type": "code",
      "data": {
        "code": "text = \"python\"\n\nprint(text.capitalize())"
      }
    },
    {
      "id": "b69",
      "type": "output",
      "data": {
        "output": "Python"
      }
    },
    {
      "id": "b70",
      "type": "concept",
      "data": {
        "headingEn": "5. find( )",
        "bodyEn": "Returns the index of the first occurrence of a character or word.",
        "headingKn": "5. find( )",
        "bodyKn": "ಒಂದು character ಅಥವಾ word ನ ಮೊದಲ ಸಂಭವಿಸುವಿಕೆಯ index ಹಿಂತಿರುಗಿಸುತ್ತದೆ."
      }
    },
    {
      "id": "b71",
      "type": "code",
      "data": {
        "code": "text = \"PYTHON\"\n\nprint(text.find(\"TH\"))"
      }
    },
    {
      "id": "b72",
      "type": "output",
      "data": {
        "output": "2"
      }
    },
    {
      "id": "b73",
      "type": "math",
      "data": {
        "formula": "P  Y  T  H  O  N\n0  1  2  3  4  5\n      ↑"
      }
    },
    {
      "id": "b74",
      "type": "concept",
      "data": {
        "headingEn": "6. replace( )",
        "bodyEn": "Replaces one word or character with another.",
        "headingKn": "6. replace( )",
        "bodyKn": "ಒಂದು word ಅಥವಾ character ಅನ್ನು ಇನ್ನೊಂದರೊಂದಿಗೆ ಬದಲಾಯಿಸುತ್ತದೆ."
      }
    },
    {
      "id": "b75",
      "type": "code",
      "data": {
        "code": "text = \"PYTHON\"\n\nprint(text.replace(\"O\", \"A\"))"
      }
    },
    {
      "id": "b76",
      "type": "output",
      "data": {
        "output": "PYTHAN"
      }
    },
    {
      "id": "b77",
      "type": "table",
      "data": {
        "rows": "| Operation      | Example                     | Output   |\n\n| Length         | `len(\"PYTHON\")`             | `6`      |\n| Index          | `\"PYTHON\"[2]`               | `T`      |\n| Slice          | `\"PYTHON\"[1:4]`             | `YTH`    |\n| Negative Index | `\"PYTHON\"[-1]`              | `N`      |\n| Skip Slice     | `\"PYTHON\"[0:6:2]`           | `PTO`    |\n| Endswith       | `\"PYTHON\".endswith(\"HON\")`  | `True`   |\n| Count          | `\"PROGRAMMING\".count(\"G\")`  | `2`      |\n| Capitalize     | `\"python\".capitalize()`     | `Python` |\n| Find           | `\"PYTHON\".find(\"TH\")`       | `2`      |\n| Replace        | `\"PYTHON\".replace(\"O\",\"A\")` | `PYTHAN` |\n"
      }
    },
    {
      "type": "concept",
      "data": {
        "headingEn": "Key Takeaways",
        "headingKn": "ಮುಖ್ಯ ಅಂಶಗಳು",
        "bodyEn": "• A string is an ordered, indexed sequence of characters -- each character has a positive index from the start and a negative index from the end.\n• Slicing (string[start:end:step]) extracts a substring without needing a loop, and supports negative indices and skip values for flexible extraction.\n• Common string functions include len() (length), endswith(), count(), capitalize(), find(), and replace() -- each solves a specific, frequently needed text-processing task.\n• Strings are immutable in Python -- every slicing or function call returns a new string rather than modifying the original, which is why you always reassign the result (e.g. text = text.replace(...)) if you want to keep the change.",
        "bodyKn": "• ಒಂದು string ಅಕ್ಷರಗಳ ಒಂದು ಕ್ರಮಬದ್ಧ, indexed sequence -- ಪ್ರತಿ ಅಕ್ಷರ ಆರಂಭದಿಂದ ಒಂದು positive index ಮತ್ತು ಅಂತ್ಯದಿಂದ ಒಂದು negative index ಹೊಂದಿದೆ.\n• Slicing (string[start:end:step]) ಒಂದು loop ಇಲ್ಲದೆ ಒಂದು substring ಹೊರತೆಗೆಯುತ್ತದೆ, ಮತ್ತು ಹೊಂದಿಕೊಳ್ಳುವ ಹೊರತೆಗೆಯುವಿಕೆಗಾಗಿ negative indices ಮತ್ತು skip ಮೌಲ್ಯಗಳನ್ನು ಬೆಂಬಲಿಸುತ್ತದೆ.\n• ಸಾಮಾನ್ಯ string functions len() (ಉದ್ದ), endswith(), count(), capitalize(), find(), ಮತ್ತು replace() ಒಳಗೊಂಡಿವೆ -- ಪ್ರತಿಯೊಂದೂ ಒಂದು ನಿರ್ದಿಷ್ಟ, ಆಗಾಗ ಬೇಕಾದ text-processing ಕೆಲಸ ಪರಿಹರಿಸುತ್ತದೆ.\n• Python ನಲ್ಲಿ strings immutable -- ಪ್ರತಿ slicing ಅಥವಾ function call ಮೂಲವನ್ನು ಮಾರ್ಪಡಿಸುವ ಬದಲು ಒಂದು ಹೊಸ string ಹಿಂತಿರುಗಿಸುತ್ತದೆ, ನೀವು ಬದಲಾವಣೆ ಇಟ್ಟುಕೊಳ್ಳಲು ಬಯಸಿದರೆ ಯಾವಾಗಲೂ ಫಲಿತಾಂಶವನ್ನು ಮರುನಿಯೋಜಿಸುವುದಕ್ಕೆ (ಉದಾ. text = text.replace(...)) ಇದೇ ಕಾರಣ."
      }
    },
    {
      "type": "quiz",
      "data": {
        "questions": [
          {
            "q": "What is the index of the first character in a Python string?",
            "opts": [
              "1",
              "-1",
              "0",
              "None"
            ],
            "correct": 2,
            "qKn": "Python string ನಲ್ಲಿ ಮೊದಲ ಅಕ್ಷರದ index ಏನು?",
            "optsKn": [
              "1",
              "-1",
              "0",
              "None"
            ]
          },
          {
            "q": "For s = \"Python\", what does `s[-1]` return?",
            "opts": [
              "P",
              "y",
              "n",
              "Error"
            ],
            "correct": 2,
            "qKn": "s = \"Python\" ಆಗಿದ್ದರೆ, `s[-1]` ಏನನ್ನು ಹಿಂತಿರುಗಿಸುತ್ತದೆ?",
            "optsKn": [
              "P",
              "y",
              "n",
              "Error"
            ]
          },
          {
            "q": "For s = \"Python\", what does `s[1:4]` return?",
            "opts": [
              "Pyt",
              "yth",
              "ytho",
              "Pyth"
            ],
            "correct": 1,
            "qKn": "s = \"Python\" ಆಗಿದ್ದರೆ, `s[1:4]` ಏನನ್ನು ಹಿಂತಿರುಗಿಸುತ್ತದೆ?",
            "optsKn": [
              "Pyt",
              "yth",
              "ytho",
              "Pyth"
            ]
          },
          {
            "q": "What does `len(\"Hello\")` return?",
            "opts": [
              "4",
              "5",
              "6",
              "Error"
            ],
            "correct": 1,
            "qKn": "`len(\"Hello\")` ಏನನ್ನು ಹಿಂತಿರುಗಿಸುತ್ತದೆ?",
            "optsKn": [
              "4",
              "5",
              "6",
              "Error"
            ]
          },
          {
            "q": "What does `\"hello\".capitalize()` return?",
            "opts": [
              "HELLO",
              "hello",
              "Hello",
              "hELLO"
            ],
            "correct": 2,
            "qKn": "`\"hello\".capitalize()` ಏನನ್ನು ಹಿಂತಿರುಗಿಸುತ್ತದೆ?",
            "optsKn": [
              "HELLO",
              "hello",
              "Hello",
              "hELLO"
            ]
          },
          {
            "q": "What does `\"hello\".replace(\"l\", \"r\")` return?",
            "opts": [
              "herlo",
              "herro",
              "hellr",
              "heLLo"
            ],
            "correct": 1,
            "qKn": "`\"hello\".replace(\"l\", \"r\")` ಏನನ್ನು ಹಿಂತಿರುಗಿಸುತ್ತದೆ?",
            "optsKn": [
              "herlo",
              "herro",
              "hellr",
              "heLLo"
            ]
          },
          {
            "q": "What does `\"hello\".find(\"l\")` return?",
            "opts": [
              "1",
              "2",
              "3",
              "-1"
            ],
            "correct": 1,
            "qKn": "`\"hello\".find(\"l\")` ಏನನ್ನು ಹಿಂತಿರುಗಿಸುತ್ತದೆ?",
            "optsKn": [
              "1",
              "2",
              "3",
              "-1"
            ]
          },
          {
            "q": "What does `\"hello\".count(\"l\")` return?",
            "opts": [
              "1",
              "2",
              "3",
              "0"
            ],
            "correct": 1,
            "qKn": "`\"hello\".count(\"l\")` ಏನನ್ನು ಹಿಂತಿರುಗಿಸುತ್ತದೆ?",
            "optsKn": [
              "1",
              "2",
              "3",
              "0"
            ]
          }
        ]
      }
    }
  ]
};
