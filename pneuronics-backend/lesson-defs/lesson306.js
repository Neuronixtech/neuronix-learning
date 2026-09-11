module.exports = {
  "phaseId": "6a358e5ffc29b5a47144467a",
  "moduleId": "6a358e60fc29b5a4714446bf",
  "order": 1,
  "type": "reading",
  "duration": 10,
  "difficulty": "beginner",
  "status": "published",
  "title": "Escape Sequence Characters",
  "titleKn": "ಎಸ್ಕೇಪ್ ಸೀಕ್ವೆನ್ಸ್ ಕ್ಯಾರೆಕ್ಟರ್ಸ್",
  "desc": "Learn how backslash escape sequences work in Python strings",
  "descKn": "Learn how backslash escape sequences work in Python strings",
  "objectives": [
    "Understand what escape sequence characters are and why they are needed",
    "Use common escape sequences: \\n, \\t, \\\\, \\', \\\"",
    "Apply escape sequences to format printed output correctly",
    "Use raw strings (r\"...\") to ignore escape sequences",
    "Distinguish between escape sequences and regular string characters"
  ],
  "objectivesKn": [
    "Escape sequence characters ಎಂದರೇನು ಮತ್ತು ಅವು ಏಕೆ ಬೇಕು ಎಂಬುದನ್ನು ಅರ್ಥ ಮಾಡಿಕೊಳ್ಳಿ",
    "ಸಾಮಾನ್ಯ escape sequences ಬಳಸಿ: \\n, \\t, \\\\, \\'",
    "Printed output ಸರಿಯಾಗಿ format ಮಾಡಲು escape sequences ಅನ್ವಯಿಸಿ",
    "Escape sequences ನಿರ್ಲಕ್ಷಿಸಲು raw strings (r\"...\") ಬಳಸಿ",
    "Escape sequences ಮತ್ತು ಸಾಮಾನ್ಯ string characters ನಡುವೆ ಪ್ರತ್ಯೇಕಿಸಿ"
  ],
  "blocks": [
    {
      "id": "b1",
      "type": "concept",
      "data": {
        "headingEn": "WHAT ARE ESCAPE SEQUENCE CHARACTERS?",
        "bodyEn": "An escape sequence is a special combination of characters that starts with a backslash (\\). It tells Python to treat the next character as a special instruction instead of a normal character.\n\nSyntax: \"\\<character>\"\n\nFor example:\n• \\n → New line\n• \\t → Tab space\n• \\' → Single quote\n• \\\\ → Backslash\n\nAlthough escape sequences contain 2 characters (backslash + another character), they represent one special character when Python executes the program.",
        "headingKn": "ESCAPE SEQUENCE CHARACTERS ಎಂದರೇನು?",
        "bodyKn": "ಒಂದು escape sequence ಒಂದು backslash (\\) ನಿಂದ ಆರಂಭವಾಗುವ ಅಕ್ಷರಗಳ ಒಂದು ವಿಶೇಷ ಸಂಯೋಜನೆ. ಇದು Python ಗೆ ಮುಂದಿನ ಅಕ್ಷರವನ್ನು ಒಂದು ಸಾಮಾನ್ಯ ಅಕ್ಷರದ ಬದಲಿಗೆ ಒಂದು ವಿಶೇಷ ಸೂಚನೆಯಾಗಿ ಪರಿಗಣಿಸಲು ಹೇಳುತ್ತದೆ.\n\nSyntax: \"\\<character>\"\n\nಉದಾಹರಣೆಗೆ:\n• \\n → ಹೊಸ ಸಾಲು\n• \\t → Tab ಸ್ಥಳ\n• \\' → Single quote\n• \\\\ → Backslash\n\nEscape sequences 2 ಅಕ್ಷರಗಳನ್ನು ಒಳಗೊಂಡಿದ್ದರೂ (backslash + ಇನ್ನೊಂದು ಅಕ್ಷರ), Python program execute ಮಾಡುವಾಗ ಅವು ಒಂದು ವಿಶೇಷ ಅಕ್ಷರವನ್ನು ಪ್ರತಿನಿಧಿಸುತ್ತವೆ."
      }
    },
    {
      "id": "b2",
      "type": "concept",
      "data": {
        "headingEn": "1. \\n (New Line)",
        "bodyEn": "Moves the cursor to the next line.",
        "headingKn": "1. \\n (ಹೊಸ ಸಾಲು)",
        "bodyKn": "cursor ಅನ್ನು ಮುಂದಿನ ಸಾಲಿಗೆ ಸರಿಸುತ್ತದೆ."
      }
    },
    {
      "id": "b3",
      "type": "code",
      "data": {
        "headingEn": "Using \\n",
        "descEn": "",
        "code": "print(\"Hello\\nWorld\")",
        "filename": "newline.py",
        "headingKn": "\\n ಬಳಸುವುದು"
      }
    },
    {
      "id": "b4",
      "type": "output",
      "data": {
        "output": "Hello\nWorld"
      }
    },
    {
      "id": "b5",
      "type": "code",
      "data": {
        "headingEn": "Without \\n",
        "descEn": "",
        "code": "print(\"Hello World\")",
        "filename": "no_newline.py",
        "headingKn": "\\n ಇಲ್ಲದೆ"
      }
    },
    {
      "id": "b6",
      "type": "output",
      "data": {
        "output": "Hello World"
      }
    },
    {
      "id": "b7",
      "type": "code",
      "data": {
        "headingEn": "Practical Example",
        "descEn": "",
        "code": "name = \"Rahul\"\ncity = \"Delhi\"\n\nprint(\"Name:\", name)\nprint(\"City:\", city)\nprint(\"\\nStudent Details\")\nprint(\"Name:\", name)\nprint(\"City:\", city)",
        "filename": "student.py",
        "headingKn": "ಪ್ರಾಯೋಗಿಕ ಉದಾಹರಣೆ"
      }
    },
    {
      "id": "b8",
      "type": "output",
      "data": {
        "output": "Name: Rahul\nCity: Delhi\n\nStudent Details\nName: Rahul\nCity: Delhi"
      }
    },
    {
      "id": "b9",
      "type": "concept",
      "data": {
        "headingEn": "2. \\t (Tab Space)",
        "bodyEn": "Adds a horizontal tab (usually 4–8 spaces depending on the environment). Useful for creating simple tables.",
        "headingKn": "2. \\t (Tab ಸ್ಥಳ)",
        "bodyKn": "ಒಂದು horizontal tab ಸೇರಿಸುತ್ತದೆ (ಸಾಮಾನ್ಯವಾಗಿ environment ಆಧರಿಸಿ 4-8 spaces). ಸರಳ tables ರಚಿಸಲು ಉಪಯುಕ್ತ."
      }
    },
    {
      "id": "b10",
      "type": "code",
      "data": {
        "headingEn": "Using \\t",
        "descEn": "",
        "code": "print(\"Name\\tAge\\tCity\")\nprint(\"Rahul\\t20\\tDelhi\")\nprint(\"Aman\\t22\\tMumbai\")",
        "filename": "tabspace.py",
        "headingKn": "\\t ಬಳಸುವುದು"
      }
    },
    {
      "id": "b11",
      "type": "output",
      "data": {
        "output": "Name    Age    City\nRahul   20     Delhi\nAman    22     Mumbai"
      }
    },
    {
      "id": "b12",
      "type": "concept",
      "data": {
        "headingEn": "3. \\' (Single Quote)",
        "bodyEn": "Used when you want to include a single quote inside a string that is enclosed in single quotes.",
        "headingKn": "3. \\' (Single Quote)",
        "bodyKn": "single quotes ನಲ್ಲಿ ಸುತ್ತುವರಿದ ಒಂದು string ಒಳಗೆ ಒಂದು single quote ಸೇರಿಸಲು ಬಯಸಿದಾಗ ಬಳಸಲಾಗುತ್ತದೆ."
      }
    },
    {
      "id": "b13",
      "type": "code",
      "data": {
        "headingEn": "Without escape sequence (causes an error)",
        "descEn": "Python thinks the string ends right after the letter I, so this throws an error.",
        "code": "print('I'm Rahul')",
        "filename": "error.py",
        "headingKn": "Escape sequence ಇಲ್ಲದೆ (ಒಂದು error ಉಂಟುಮಾಡುತ್ತದೆ)",
        "descKn": "Python string I ಅಕ್ಷರದ ನಂತರ ತಕ್ಷಣ ಕೊನೆಗೊಳ್ಳುತ್ತದೆ ಎಂದು ಭಾವಿಸುತ್ತದೆ, ಆದ್ದರಿಂದ ಇದು ಒಂದು error ಎಸೆಯುತ್ತದೆ."
      }
    },
    {
      "id": "b14",
      "type": "output",
      "data": {
        "output": "SyntaxError: unterminated string literal"
      }
    },
    {
      "id": "b15",
      "type": "code",
      "data": {
        "headingEn": "Correct way",
        "descEn": "",
        "code": "print('I\\'m Rahul')",
        "filename": "correct.py",
        "headingKn": "ಸರಿಯಾದ ಮಾರ್ಗ"
      }
    },
    {
      "id": "b16",
      "type": "output",
      "data": {
        "output": "I'm Rahul"
      }
    },
    {
      "id": "b17",
      "type": "code",
      "data": {
        "headingEn": "Another Example",
        "descEn": "",
        "code": "message = 'It\\'s a beautiful day.'\nprint(message)",
        "filename": "quote.py",
        "headingKn": "ಇನ್ನೊಂದು ಉದಾಹರಣೆ"
      }
    },
    {
      "id": "b18",
      "type": "output",
      "data": {
        "output": "It's a beautiful day."
      }
    },
    {
      "id": "b19",
      "type": "concept",
      "data": {
        "headingEn": "4. \\\\ (Backslash)",
        "bodyEn": "If you want to print a backslash (\\), you need to write two backslashes (\\\\).",
        "headingKn": "4. \\\\ (Backslash)",
        "bodyKn": "ನೀವು ಒಂದು backslash (\\) ಮುದ್ರಿಸಲು ಬಯಸಿದರೆ, ನೀವು ಎರಡು backslashes (\\\\) ಬರೆಯಬೇಕು."
      }
    },
    {
      "id": "b20",
      "type": "code",
      "data": {
        "headingEn": "Printing a file path",
        "descEn": "",
        "code": "print(\"C:\\\\Users\\\\Rahul\\\\Documents\")",
        "filename": "path.py",
        "headingKn": "ಒಂದು file path ಮುದ್ರಿಸುವುದು"
      }
    },
    {
      "id": "b21",
      "type": "output",
      "data": {
        "output": "C:\\Users\\Rahul\\Documents"
      }
    },
    {
      "id": "b22",
      "type": "concept",
      "data": {
        "headingEn": "Why two backslashes?",
        "bodyEn": "If you write print(\"C:\\Users\\Rahul\"), Python may interpret \\U as the start of a Unicode escape sequence and produce an error. Using \\\\ tells Python: 'Print a real backslash.'",
        "headingKn": "ಎರಡು Backslashes ಏಕೆ?",
        "bodyKn": "ನೀವು print(\"C:\\Users\\Rahul\") ಬರೆದರೆ, Python \\U ಅನ್ನು ಒಂದು Unicode escape sequence ನ ಆರಂಭ ಎಂದು ಅರ್ಥೈಸಬಹುದು ಮತ್ತು ಒಂದು error ಉತ್ಪಾದಿಸಬಹುದು. \\\\ ಬಳಸುವುದು Python ಗೆ ಹೇಳುತ್ತದೆ: 'ಒಂದು ನಿಜ backslash ಮುದ್ರಿಸಿ.'"
      }
    },
    {
      "id": "b23",
      "type": "table",
      "data": {
        "captionEn": "More Common Escape Sequences",
        "rows": "Escape Sequence | Meaning | Example\n\\n | New line | \"Hello\\nWorld\"\n\\t | Tab space | \"A\\tB\"\n\\' | Single quote | 'I\\'m fine'\n\\\" | Double quote | \"He said \\\"Hi\\\"\"\n\\\\ | Backslash | \"C:\\\\Python\"",
        "captionKn": "ಹೆಚ್ಚಿನ ಸಾಮಾನ್ಯ Escape Sequences"
      }
    },
    {
      "id": "b24",
      "type": "code",
      "data": {
        "headingEn": "Complete Example Program",
        "descEn": "",
        "code": "print(\"Escape Sequence Examples\")\nprint(\"----------------------\")\n\n# New Line\nprint(\"1. New Line\")\nprint(\"Python\\nProgramming\")\n\n# Tab\nprint(\"\\n2. Tab\")\nprint(\"Name\\tAge\\tCity\")\nprint(\"Rahul\\t20\\tDelhi\")\nprint(\"Aman\\t22\\tMumbai\")\n\n# Single Quote\nprint(\"\\n3. Single Quote\")\nprint('I\\'m learning Python.')\n\n# Double Quote\nprint(\"\\n4. Double Quote\")\nprint(\"He said \\\"Python is easy!\\\"\")\n\n# Backslash\nprint(\"\\n5. Backslash\")\nprint(\"Folder Path:\")\nprint(\"C:\\\\Users\\\\Rahul\\\\Documents\")",
        "filename": "escape_demo.py",
        "headingKn": "ಸಂಪೂರ್ಣ ಉದಾಹರಣೆ Program"
      }
    },
    {
      "id": "b25",
      "type": "output",
      "data": {
        "output": "Escape Sequence Examples\n----------------------\n1. New Line\nPython\nProgramming\n2. Tab\nName    Age    City\nRahul   20     Delhi\nAman    22     Mumbai\n3. Single Quote\nI'm learning Python.\n4. Double Quote\nHe said \"Python is easy!\"\n5. Backslash\nFolder Path:\nC:\\Users\\Rahul\\Documents"
      }
    },
    {
      "id": "b26",
      "type": "concept",
      "data": {
        "headingEn": "Real-Life Use Case",
        "bodyEn": "Suppose you're printing a student's report:",
        "headingKn": "ನಿಜ-ಜೀವನದ Use Case",
        "bodyKn": "ನೀವು ಒಂದು ವಿದ್ಯಾರ್ಥಿಯ ವರದಿ ಮುದ್ರಿಸುತ್ತಿದ್ದೀರಿ ಎಂದು ಭಾವಿಸೋಣ:"
      }
    },
    {
      "id": "b27",
      "type": "code",
      "data": {
        "headingEn": "Student report",
        "descEn": "",
        "code": "name = \"Anita\"\nmarks = 95\n\nprint(\"Student Report\")\nprint(\"--------------\")\nprint(f\"Name\\t: {name}\")\nprint(f\"Marks\\t: {marks}\")\nprint(\"Status\\t: Pass\")\nprint(\"\\nCongratulations!\")",
        "filename": "report.py",
        "headingKn": "ವಿದ್ಯಾರ್ಥಿ ವರದಿ"
      }
    },
    {
      "id": "b28",
      "type": "output",
      "data": {
        "output": "Student Report\n--------------\nName    : Anita\nMarks   : 95\nStatus  : Pass\n\nCongratulations!"
      }
    },
    {
      "type": "concept",
      "data": {
        "headingEn": "Key Takeaways",
        "headingKn": "ಮುಖ್ಯ ಅಂಶಗಳು",
        "bodyEn": "• Escape sequences are special two-character codes starting with a backslash that represent characters you can't type directly into a string.\n• \\n inserts a new line, \\t inserts a tab space, \\' lets you include a single quote inside a single-quoted string, and \\\\ represents a single literal backslash.\n• The double-backslash rule exists because a lone backslash always signals \"an escape sequence follows\" -- to print an actual backslash (as in a Windows file path), you must escape the backslash itself.\n• These small formatting details matter in real output: a student report or a file path printed without correct escape sequences can look broken or even point to the wrong file, so escape sequences are a small but easy-to-get-wrong detail worth mastering early.",
        "bodyKn": "• Escape sequences ಒಂದು backslash ನಿಂದ ಆರಂಭವಾಗುವ ವಿಶೇಷ ಎರಡು-ಅಕ್ಷರ codes, ಇವು ನೀವು ನೇರವಾಗಿ ಒಂದು string ಗೆ ಟೈಪ್ ಮಾಡಲಾಗದ ಅಕ್ಷರಗಳನ್ನು ಪ್ರತಿನಿಧಿಸುತ್ತವೆ.\n• \\n ಒಂದು ಹೊಸ ಸಾಲು ಸೇರಿಸುತ್ತದೆ, \\t ಒಂದು tab ಸ್ಥಳ ಸೇರಿಸುತ್ತದೆ, \\' ನಿಮಗೆ single-quoted string ಒಳಗೆ ಒಂದು single quote ಸೇರಿಸಲು ಅನುಮತಿಸುತ್ತದೆ, ಮತ್ತು \\\\ ಒಂದು single literal backslash ಪ್ರತಿನಿಧಿಸುತ್ತದೆ.\n• Double-backslash ನಿಯಮ ಅಸ್ತಿತ್ವದಲ್ಲಿದೆ ಏಕೆಂದರೆ ಒಂಟಿ backslash ಯಾವಾಗಲೂ \"ಒಂದು escape sequence ಅನುಸರಿಸುತ್ತದೆ\" ಎಂದು ಸೂಚಿಸುತ್ತದೆ -- ಒಂದು ನಿಜ backslash ಮುದ್ರಿಸಲು (Windows file path ನಂತೆ), ನೀವು backslash ಅನ್ನೇ escape ಮಾಡಬೇಕು.\n• ಈ ಚಿಕ್ಕ formatting ವಿವರಗಳು ನಿಜ output ನಲ್ಲಿ ಮುಖ್ಯ: ಸರಿಯಾದ escape sequences ಇಲ್ಲದೆ ಮುದ್ರಿಸಿದ ಒಂದು ವಿದ್ಯಾರ್ಥಿ ವರದಿ ಅಥವಾ file path ಮುರಿದಂತೆ ಕಾಣಬಹುದು ಅಥವಾ ತಪ್ಪು file ಗೆ ಸೂಚಿಸಬಹುದು, ಆದ್ದರಿಂದ escape sequences ಆರಂಭದಲ್ಲಿ ಕರಗತ ಮಾಡಿಕೊಳ್ಳಲು ಯೋಗ್ಯವಾದ ಚಿಕ್ಕ ಆದರೆ ಸುಲಭವಾಗಿ-ತಪ್ಪಾಗುವ ವಿವರ."
      }
    },
    {
      "id": "b29",
      "type": "quiz",
      "data": {
        "questions": [
          {
            "q": "What character does every escape sequence begin with?",
            "opts": [
              "A forward slash (/)",
              "A backslash (\\)",
              "A dollar sign ($)",
              "A percentage sign (%)"
            ],
            "correct": 1,
            "qKn": "ಪ್ರತಿ escape sequence ಯಾವ ಅಕ್ಷರದಿಂದ ಆರಂಭವಾಗುತ್ತದೆ?",
            "optsKn": [
              "ಒಂದು forward slash (/)",
              "ಒಂದು backslash (\\)",
              "ಒಂದು dollar sign ($)",
              "ಒಂದು percentage sign (%)"
            ]
          },
          {
            "q": "Which escape sequence moves the cursor to a new line?",
            "opts": [
              "\\t",
              "\\\\",
              "\\n",
              "\\'"
            ],
            "correct": 2,
            "qKn": "ಯಾವ escape sequence cursor ಅನ್ನು ಹೊಸ ಸಾಲಿಗೆ ಸರಿಸುತ್ತದೆ?",
            "optsKn": [
              "\\t",
              "\\\\",
              "\\n",
              "\\'"
            ]
          },
          {
            "q": "What will print(\"A\\tB\") output?",
            "opts": [
              "AB with no space",
              "A and B on separate lines",
              "A followed by a tab space then B",
              "An error"
            ],
            "correct": 2,
            "qKn": "print(\"A\\tB\") ಏನನ್ನು output ಮಾಡುತ್ತದೆ?",
            "optsKn": [
              "ಯಾವುದೇ space ಇಲ್ಲದೆ AB",
              "ಪ್ರತ್ಯೇಕ ಸಾಲುಗಳಲ್ಲಿ A ಮತ್ತು B",
              "A ನಂತರ ಒಂದು tab ಸ್ಥಳ ನಂತರ B",
              "ಒಂದು error"
            ]
          },
          {
            "q": "Why does print('I'm Rahul') raise a SyntaxError?",
            "opts": [
              "Because strings cannot contain the letter I",
              "Because Python thinks the string ends right after the first quote following I",
              "Because print() cannot take string arguments",
              "Because Rahul is a reserved keyword"
            ],
            "correct": 1,
            "qKn": "print('I'm Rahul') ಏಕೆ ಒಂದು SyntaxError ಎಸೆಯುತ್ತದೆ?",
            "optsKn": [
              "ಏಕೆಂದರೆ strings I ಅಕ್ಷರ ಒಳಗೊಳ್ಳಲಾಗುವುದಿಲ್ಲ",
              "ಏಕೆಂದರೆ Python string I ನಂತರದ ಮೊದಲ quote ನಂತರ ತಕ್ಷಣ ಕೊನೆಗೊಳ್ಳುತ್ತದೆ ಎಂದು ಭಾವಿಸುತ್ತದೆ",
              "ಏಕೆಂದರೆ print() string arguments ತೆಗೆದುಕೊಳ್ಳಲಾಗುವುದಿಲ್ಲ",
              "ಏಕೆಂದರೆ Rahul ಒಂದು ಮೀಸಲಾದ keyword"
            ]
          },
          {
            "q": "How do you correctly print a single literal backslash inside a string?",
            "opts": [
              "Using a single backslash (\\)",
              "Using two backslashes (\\\\)",
              "Using \\n",
              "Using \\t"
            ],
            "correct": 1,
            "qKn": "ಒಂದು string ಒಳಗೆ ಒಂದು single literal backslash ಅನ್ನು ಸರಿಯಾಗಿ ಹೇಗೆ ಮುದ್ರಿಸುತ್ತೀರಿ?",
            "optsKn": [
              "ಒಂದು single backslash (\\) ಬಳಸಿ",
              "ಎರಡು backslashes (\\\\) ಬಳಸಿ",
              "\\n ಬಳಸಿ",
              "\\t ಬಳಸಿ"
            ]
          }
        ]
      }
    }
  ]
};
