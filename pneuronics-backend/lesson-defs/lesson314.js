module.exports = {
  "phaseId": "6a358e65fc29b5a471444755",
  "moduleId": "6a358e65fc29b5a471444758",
  "order": 0,
  "type": "reading",
  "duration": 20,
  "difficulty": "beginner",
  "status": "published",
  "title": "File I/O in Python",
  "titleKn": "ಫೈಲ್ I/O ಇನ್ ಪೈಥಾನ್",
  "desc": "Read from and write to files so your data survives after the program closes",
  "descKn": "Read from and write to files so your data survives after the program closes",
  "objectives": [
    "Open, read, write, and close files using Python's built-in open() function",
    "Use the with statement for safe file handling",
    "Read files line by line and process large files efficiently",
    "Write text and binary files and understand file modes (r, w, a, rb, wb)",
    "Handle file-related exceptions using try-except",
    "Work with CSV files using the csv module"
  ],
  "objectivesKn": [
    "Python ನ built-in open() function ಬಳಸಿ files open, read, write, ಮತ್ತು close ಮಾಡಿ",
    "ಸುರಕ್ಷಿತ file handling ಗಾಗಿ with statement ಬಳಸಿ",
    "Files ಅನ್ನು line by line ಓದಿ ದೊಡ್ಡ files ಅನ್ನು ಪರಿಣಾಮಕಾರಿಯಾಗಿ process ಮಾಡಿ",
    "Text ಮತ್ತು binary files ಬರೆದು file modes ಅರ್ಥ ಮಾಡಿಕೊಳ್ಳಿ (r, w, a, rb, wb)",
    "try-except ಬಳಸಿ file-related exceptions handle ಮಾಡಿ",
    "csv module ಬಳಸಿ CSV files ನೊಂದಿಗೆ ಕೆಲಸ ಮಾಡಿ"
  ],
  "blocks": [
    {
      "id": "b1",
      "type": "concept",
      "data": {
        "headingEn": "WHY DO WE NEED FILES?",
        "bodyEn": "A program stores its data in RAM (Random Access Memory) while it is running. RAM is volatile memory, meaning all the data is lost when the program closes.\n\nTo save data permanently, we use files. Files are stored on storage devices like HDDs or SSDs.",
        "headingKn": "FILES ಏಕೆ ಬೇಕು?",
        "bodyKn": "ಒಂದು program run ಆಗುತ್ತಿರುವಾಗ ಅದರ ಡೇಟಾವನ್ನು RAM (Random Access Memory) ನಲ್ಲಿ ಸಂಗ್ರಹಿಸುತ್ತದೆ. RAM ಒಂದು volatile memory, ಅಂದರೆ program ಮುಚ್ಚಿದಾಗ ಎಲ್ಲಾ ಡೇಟಾ ಕಳೆದುಹೋಗುತ್ತದೆ.\n\nಡೇಟಾವನ್ನು ಶಾಶ್ವತವಾಗಿ ಉಳಿಸಲು, ನಾವು files ಬಳಸುತ್ತೇವೆ. Files ಗಳನ್ನು HDDs ಅಥವಾ SSDs ನಂತಹ storage devices ಗಳಲ್ಲಿ ಸಂಗ್ರಹಿಸಲಾಗುತ್ತದೆ."
      }
    },
    {
      "id": "b2",
      "type": "concept",
      "data": {
        "headingEn": "When do we need this?",
        "bodyEn": "Imagine you're building:\nA Student Management System\nA Banking Application\nA Notes App\nA Game with High Scores\n\nIf the program closes, all data in RAM disappears. Files allow us to:\nSave user data\nStore program settings\nSave game progress\nRead existing information later",
        "headingKn": "ನಮಗೆ ಇದು ಯಾವಾಗ ಬೇಕು?",
        "bodyKn": "ನೀವು ಇವುಗಳನ್ನು ಕಟ್ಟುತ್ತಿದ್ದೀರಿ ಎಂದು ಊಹಿಸಿ:\nಒಂದು Student Management System\nಒಂದು Banking Application\nಒಂದು Notes App\nHigh Scores ಇರುವ ಒಂದು Game\n\nProgram ಮುಚ್ಚಿದರೆ, RAM ನಲ್ಲಿನ ಎಲ್ಲಾ ಡೇಟಾ ಮಾಯವಾಗುತ್ತದೆ. Files ನಮಗೆ ಇವುಗಳನ್ನು ಮಾಡಲು ಅನುಮತಿಸುತ್ತವೆ:\nಬಳಕೆದಾರ ಡೇಟಾ ಉಳಿಸಿ\nProgram settings ಸಂಗ್ರಹಿಸಿ\nGame progress ಉಳಿಸಿ\nಇರುವ ಮಾಹಿತಿಯನ್ನು ನಂತರ ಓದಿ"
      }
    },
    {
      "id": "b3",
      "type": "example",
      "data": {
        "tag": "Real Life Example",
        "textEn": "Think of RAM as a whiteboard. When power goes off, everything written disappears.\n\nA file is like a notebook. Even after years, the information remains.",
        "textKn": "RAM ಅನ್ನು ಒಂದು whiteboard ಎಂದು ಯೋಚಿಸಿ. Power ಆಫ್ ಆದಾಗ, ಬರೆದ ಎಲ್ಲವೂ ಮಾಯವಾಗುತ್ತದೆ.\n\nಒಂದು file ಒಂದು notebook ನಂತೆ. ವರ್ಷಗಳ ನಂತರವೂ, ಮಾಹಿತಿ ಉಳಿಯುತ್ತದೆ."
      }
    },
    {
      "id": "b4",
      "type": "concept",
      "data": {
        "headingEn": "File Communication",
        "bodyEn": "Python communicates with files in two ways:\n\nPython Program → Write → File\nPython Program ← Read ← File\n\nPython can read data from files and write data into files.",
        "headingKn": "File Communication",
        "bodyKn": "Python files ಜೊತೆ ಎರಡು ರೀತಿಯಲ್ಲಿ ಸಂವಹನ ಮಾಡುತ್ತದೆ:\n\nPython Program → Write → File\nPython Program ← Read ← File\n\nPython files ಗಳಿಂದ ಡೇಟಾ ಓದಬಹುದು ಮತ್ತು files ಗಳಿಗೆ ಡೇಟಾ ಬರೆಯಬಹುದು."
      }
    },
    {
      "id": "b5",
      "type": "concept",
      "data": {
        "headingEn": "Types of Files",
        "bodyEn": "There are 2 types of files.",
        "headingKn": "Files ನ ವಿಧಗಳು",
        "bodyKn": "Files ಗಳಲ್ಲಿ 2 ವಿಧಗಳಿವೆ."
      }
    },
    {
      "id": "b6",
      "type": "concept",
      "data": {
        "headingEn": "1. Text Files",
        "bodyEn": "These store readable characters.\n\nExamples: .txt, .py, .html, .css, .csv, .json\n\nAnyone can open a text file using Notepad.",
        "headingKn": "1. Text Files",
        "bodyKn": "ಇವು ಓದಬಹುದಾದ ಅಕ್ಷರಗಳನ್ನು ಸಂಗ್ರಹಿಸುತ್ತವೆ.\n\nಉದಾಹರಣೆಗಳು: .txt, .py, .html, .css, .csv, .json\n\nಯಾರಾದರೂ Notepad ಬಳಸಿ ಒಂದು text file ತೆರೆಯಬಹುದು."
      }
    },
    {
      "id": "b7",
      "type": "example",
      "data": {
        "tag": "Example text file contents",
        "textEn": "Hello Sameer\nWelcome to Python",
        "textKn": "ಹಲೋ Sameer\nPython ಗೆ ಸ್ವಾಗತ"
      }
    },
    {
      "id": "b8",
      "type": "concept",
      "data": {
        "headingEn": "2. Binary Files",
        "bodyEn": "These store data in binary (0s and 1s).\n\nExamples: .jpg, .png, .mp3, .mp4, .exe, .pdf, .dat\n\nHumans cannot read them directly.",
        "headingKn": "2. Binary Files",
        "bodyKn": "ಇವು ಡೇಟಾವನ್ನು binary (0s ಮತ್ತು 1s) ನಲ್ಲಿ ಸಂಗ್ರಹಿಸುತ್ತವೆ.\n\nಉದಾಹರಣೆಗಳು: .jpg, .png, .mp3, .mp4, .exe, .pdf, .dat\n\nಮನುಷ್ಯರು ಅವುಗಳನ್ನು ನೇರವಾಗಿ ಓದಲಾಗುವುದಿಲ್ಲ."
      }
    },
    {
      "id": "b9",
      "type": "concept",
      "data": {
        "headingEn": "Opening a File",
        "bodyEn": "Before reading or writing, Python must first open the file.\n\nSyntax:\nopen(\"filename\", \"mode\")",
        "headingKn": "ಒಂದು File ತೆರೆಯುವುದು",
        "bodyKn": "ಓದುವ ಅಥವಾ ಬರೆಯುವ ಮೊದಲು, Python ಮೊದಲು file ಅನ್ನು ತೆರೆಯಬೇಕು.\n\nSyntax:\nopen(\"filename\", \"mode\")"
      }
    },
    {
      "id": "b10",
      "type": "code",
      "data": {
        "headingEn": "Opening a file",
        "descEn": "this.txt is the filename, r is the mode.",
        "code": "open(\"this.txt\", \"r\")",
        "filename": "open_syntax.py",
        "headingKn": "ಒಂದು file ತೆರೆಯುವುದು",
        "descKn": "this.txt filename, r mode."
      }
    },
    {
      "id": "b11",
      "type": "concept",
      "data": {
        "headingEn": "Reading a File",
        "bodyEn": "Suppose this.txt contains:\nHello\nWelcome to Python",
        "headingKn": "ಒಂದು File ಓದುವುದು",
        "bodyKn": "this.txt ಇವುಗಳನ್ನು ಒಳಗೊಂಡಿದೆ ಎಂದು ಭಾವಿಸಿ:\nHello\nWelcome to Python"
      }
    },
    {
      "id": "b12",
      "type": "code",
      "data": {
        "headingEn": "Reading a file",
        "descEn": "",
        "code": "f = open(\"this.txt\", \"r\")\n\ntext = f.read()\n\nprint(text)\n\nf.close()",
        "filename": "read_file.py",
        "headingKn": "ಒಂದು file ಓದುವುದು"
      }
    },
    {
      "id": "b13",
      "type": "output",
      "data": {
        "output": "Hello\nWelcome to Python"
      }
    },
    {
      "id": "b14",
      "type": "concept",
      "data": {
        "headingEn": "Step-by-Step",
        "bodyEn": "Step 1: f = open(\"this.txt\", \"r\") — Open the file.\nStep 2: text = f.read() — Read the entire file.\nStep 3: print(text) — Display its contents.\nStep 4: f.close() — Close the file. Closing releases the file from memory.",
        "headingKn": "ಹಂತ-ಹಂತವಾಗಿ",
        "bodyKn": "ಹಂತ 1: f = open(\"this.txt\", \"r\") — file ತೆರೆಯಿರಿ.\nಹಂತ 2: text = f.read() — ಸಂಪೂರ್ಣ file ಓದಿ.\nಹಂತ 3: print(text) — ಅದರ ವಿಷಯ ತೋರಿಸಿ.\nಹಂತ 4: f.close() — file ಮುಚ್ಚಿ. ಮುಚ್ಚುವುದು file ಅನ್ನು memory ಇಂದ ಬಿಡುಗಡೆ ಮಾಡುತ್ತದೆ."
      }
    },
    {
      "id": "b15",
      "type": "concept",
      "data": {
        "headingEn": "Why close the file?",
        "bodyEn": "If you don't close a file:\nmemory remains occupied\nanother program may not edit it\nresources are wasted\n\nAlways close files after use.",
        "headingKn": "File ಅನ್ನು ಏಕೆ ಮುಚ್ಚಬೇಕು?",
        "bodyKn": "ನೀವು ಒಂದು file ಮುಚ್ಚದಿದ್ದರೆ:\nmemory ಆಕ್ರಮಿಸಲ್ಪಟ್ಟಿರುತ್ತದೆ\nಇನ್ನೊಂದು program ಅದನ್ನು edit ಮಾಡದಿರಬಹುದು\nresources ವ್ಯರ್ಥವಾಗುತ್ತವೆ\n\nಬಳಸಿದ ನಂತರ ಯಾವಾಗಲೂ files ಮುಚ್ಚಿ."
      }
    },
    {
      "id": "b16",
      "type": "concept",
      "data": {
        "headingEn": "read( )",
        "bodyEn": "Reads the entire file.",
        "headingKn": "read()",
        "bodyKn": "ಸಂಪೂರ್ಣ file ಓದುತ್ತದೆ."
      }
    },
    {
      "id": "b17",
      "type": "code",
      "data": {
        "headingEn": "Using read( )",
        "descEn": "File contains: Python, Java, C++ (one per line)",
        "code": "f = open(\"this.txt\", \"r\")\n\nprint(f.read())\n\nf.close()",
        "filename": "read_method.py",
        "headingKn": "read() ಬಳಸುವುದು",
        "descKn": "File ಒಳಗೊಂಡಿದೆ: Python, Java, C++ (ಒಂದೊಂದು ಸಾಲಿಗೆ)"
      }
    },
    {
      "id": "b18",
      "type": "output",
      "data": {
        "output": "Python\nJava\nC++"
      }
    },
    {
      "id": "b19",
      "type": "concept",
      "data": {
        "headingEn": "readline( )",
        "bodyEn": "Reads only one line. Python remembers where it stopped reading.",
        "headingKn": "readline()",
        "bodyKn": "ಕೇವಲ ಒಂದು ಸಾಲು ಓದುತ್ತದೆ. Python ಎಲ್ಲಿ ಓದುವುದನ್ನು ನಿಲ್ಲಿಸಿತು ಎಂದು ನೆನಪಿಡುತ್ತದೆ."
      }
    },
    {
      "id": "b20",
      "type": "code",
      "data": {
        "headingEn": "Using readline( ) repeatedly",
        "descEn": "File contains: Apple, Banana, Orange (one per line)",
        "code": "f = open(\"this.txt\", \"r\")\n\nprint(f.readline())\nprint(f.readline())\nprint(f.readline())",
        "filename": "readline_method.py",
        "headingKn": "readline() ಪುನರಾವರ್ತಿತವಾಗಿ ಬಳಸುವುದು",
        "descKn": "File ಒಳಗೊಂಡಿದೆ: Apple, Banana, Orange (ಒಂದೊಂದು ಸಾಲಿಗೆ)"
      }
    },
    {
      "id": "b21",
      "type": "output",
      "data": {
        "output": "Apple\nBanana\nOrange"
      }
    },
    {
      "id": "b22",
      "type": "table",
      "data": {
        "captionEn": "Difference Between read() and readline()",
        "rows": "read( ) | readline( )\nReads complete file | Reads one line\nReturns whole text | Returns single line\nGood for small files | Good for large files",
        "captionKn": "read() ಮತ್ತು readline() ನಡುವಿನ ವ್ಯತ್ಯಾಸ"
      }
    },
    {
      "id": "b23",
      "type": "heading",
      "data": {
        "textEn": "File Opening Modes",
        "level": "H1",
        "textKn": "File Opening Modes"
      }
    },
    {
      "id": "b24",
      "type": "concept",
      "data": {
        "headingEn": "r → Read Mode",
        "bodyEn": "Only reading is allowed. If the file doesn't exist, Python raises an error.",
        "headingKn": "r → Read Mode",
        "bodyKn": "ಕೇವಲ ಓದುವುದಕ್ಕೆ ಮಾತ್ರ ಅನುಮತಿ. File ಅಸ್ತಿತ್ವದಲ್ಲಿ ಇಲ್ಲದಿದ್ದರೆ, Python ಒಂದು error ಎಸೆಯುತ್ತದೆ."
      }
    },
    {
      "id": "b25",
      "type": "code",
      "data": {
        "headingEn": "Read mode",
        "descEn": "",
        "code": "f = open(\"data.txt\", \"r\")",
        "filename": "read_mode.py",
        "headingKn": "Read mode"
      }
    },
    {
      "id": "b26",
      "type": "concept",
      "data": {
        "headingEn": "w → Write Mode",
        "bodyEn": "Creates a new file or erases the old one.",
        "headingKn": "w → Write Mode",
        "bodyKn": "ಒಂದು ಹೊಸ file ರಚಿಸುತ್ತದೆ ಅಥವಾ ಹಳೆಯದನ್ನು ಅಳಿಸುತ್ತದೆ."
      }
    },
    {
      "id": "b27",
      "type": "code",
      "data": {
        "headingEn": "Write mode overwrites everything",
        "descEn": "If the file previously had Python, Java, C++, it becomes just \"Hello\" — everything else is erased.",
        "code": "f = open(\"data.txt\", \"w\")\n\nf.write(\"Hello\")",
        "filename": "write_mode.py",
        "headingKn": "Write mode ಎಲ್ಲವನ್ನೂ overwrite ಮಾಡುತ್ತದೆ",
        "descKn": "File ಈ ಮೊದಲು Python, Java, C++ ಹೊಂದಿದ್ದರೆ, ಅದು ಕೇವಲ \"Hello\" ಆಗುತ್ತದೆ — ಉಳಿದೆಲ್ಲವೂ ಅಳಿಸಲಾಗುತ್ತದೆ."
      }
    },
    {
      "id": "b28",
      "type": "output",
      "data": {
        "output": "File now contains:\nHello"
      }
    },
    {
      "id": "b29",
      "type": "concept",
      "data": {
        "headingEn": "a → Append Mode",
        "bodyEn": "Adds data to the end. Nothing is deleted.",
        "headingKn": "a → Append Mode",
        "bodyKn": "ಡೇಟಾವನ್ನು ಕೊನೆಗೆ ಸೇರಿಸುತ್ತದೆ. ಏನನ್ನೂ ಅಳಿಸುವುದಿಲ್ಲ."
      }
    },
    {
      "id": "b30",
      "type": "code",
      "data": {
        "headingEn": "Appending to an existing file",
        "descEn": "Old file contained: Apple, Banana",
        "code": "f = open(\"data.txt\", \"a\")\n\nf.write(\"\\nOrange\")\n\nf.close()",
        "filename": "append_mode.py",
        "headingKn": "ಇರುವ ಒಂದು file ಗೆ ಸೇರಿಸುವುದು",
        "descKn": "ಹಳೆಯ file ಒಳಗೊಂಡಿತ್ತು: Apple, Banana"
      }
    },
    {
      "id": "b31",
      "type": "output",
      "data": {
        "output": "Apple\nBanana\nOrange"
      }
    },
    {
      "id": "b32",
      "type": "concept",
      "data": {
        "headingEn": "+ → Update Mode",
        "bodyEn": "Allows reading and writing together.\n\nExample:\nopen(\"data.txt\", \"r+\")\nopen(\"data.txt\", \"w+\")\nopen(\"data.txt\", \"a+\")",
        "headingKn": "+ → Update Mode",
        "bodyKn": "ಓದುವುದು ಮತ್ತು ಬರೆಯುವುದು ಎರಡನ್ನೂ ಒಟ್ಟಿಗೆ ಅನುಮತಿಸುತ್ತದೆ.\n\nಉದಾಹರಣೆ:\nopen(\"data.txt\", \"r+\")\nopen(\"data.txt\", \"w+\")\nopen(\"data.txt\", \"a+\")"
      }
    },
    {
      "id": "b33",
      "type": "concept",
      "data": {
        "headingEn": "rb → Read Binary",
        "bodyEn": "Used to read binary files.\n\nExample:\nopen(\"image.jpg\", \"rb\")",
        "headingKn": "rb → Read Binary",
        "bodyKn": "Binary files ಓದಲು ಬಳಸಲಾಗುತ್ತದೆ.\n\nಉದಾಹರಣೆ:\nopen(\"image.jpg\", \"rb\")"
      }
    },
    {
      "id": "b34",
      "type": "concept",
      "data": {
        "headingEn": "wb → Write Binary",
        "bodyEn": "Used to write binary files.\n\nExample:\nopen(\"image.jpg\", \"wb\")",
        "headingKn": "wb → Write Binary",
        "bodyKn": "Binary files ಬರೆಯಲು ಬಳಸಲಾಗುತ್ತದೆ.\n\nಉದಾಹರಣೆ:\nopen(\"image.jpg\", \"wb\")"
      }
    },
    {
      "id": "b35",
      "type": "concept",
      "data": {
        "headingEn": "rt → Read Text",
        "bodyEn": "Used to read text files. rt is the default mode for text files.\n\nExample:\nopen(\"notes.txt\", \"rt\")",
        "headingKn": "rt → Read Text",
        "bodyKn": "Text files ಓದಲು ಬಳಸಲಾಗುತ್ತದೆ. rt text files ಗಳಿಗೆ default mode.\n\nಉದಾಹರಣೆ:\nopen(\"notes.txt\", \"rt\")"
      }
    },
    {
      "id": "b36",
      "type": "concept",
      "data": {
        "headingEn": "Writing to a File",
        "bodyEn": "Suppose we want to create this.txt.",
        "headingKn": "ಒಂದು File ಗೆ ಬರೆಯುವುದು",
        "bodyKn": "ನಾವು this.txt ರಚಿಸಲು ಬಯಸುತ್ತೇವೆ ಎಂದು ಭಾವಿಸಿ."
      }
    },
    {
      "id": "b37",
      "type": "code",
      "data": {
        "headingEn": "Writing a new file",
        "descEn": "",
        "code": "f = open(\"this.txt\", \"w\")\n\nf.write(\"This is nice\")\n\nf.close()",
        "filename": "write_new.py",
        "headingKn": "ಒಂದು ಹೊಸ file ಬರೆಯುವುದು"
      }
    },
    {
      "id": "b38",
      "type": "output",
      "data": {
        "output": "File content becomes:\nThis is nice"
      }
    },
    {
      "id": "b39",
      "type": "code",
      "data": {
        "headingEn": "Another example",
        "descEn": "",
        "code": "f = open(\"student.txt\", \"w\")\n\nf.write(\"Sameer\")\n\nf.close()",
        "filename": "write_student.py",
        "headingKn": "ಇನ್ನೊಂದು ಉದಾಹರಣೆ"
      }
    },
    {
      "id": "b40",
      "type": "output",
      "data": {
        "output": "student.txt now contains:\nSameer"
      }
    },
    {
      "id": "b41",
      "type": "code",
      "data": {
        "headingEn": "Writing Multiple Lines",
        "descEn": "",
        "code": "f = open(\"marks.txt\", \"w\")\n\nf.write(\"Math = 90\\n\")\nf.write(\"Science = 95\\n\")\nf.write(\"Python = 100\")\n\nf.close()",
        "filename": "write_multiple.py",
        "headingKn": "ಬಹು ಸಾಲುಗಳನ್ನು ಬರೆಯುವುದು"
      }
    },
    {
      "id": "b42",
      "type": "output",
      "data": {
        "output": "Math = 90\nScience = 95\nPython = 100"
      }
    },
    {
      "id": "b43",
      "type": "concept",
      "data": {
        "headingEn": "The with Statement",
        "bodyEn": "The best way to work with files is using with. It automatically closes the file, even if an error occurs.",
        "headingKn": "with Statement",
        "bodyKn": "Files ಜೊತೆ ಕೆಲಸ ಮಾಡಲು ಅತ್ಯುತ್ತಮ ಮಾರ್ಗ with ಬಳಸುವುದು. ಒಂದು error ಸಂಭವಿಸಿದರೂ, ಇದು ಸ್ವಯಂಚಾಲಿತವಾಗಿ file ಅನ್ನು ಮುಚ್ಚುತ್ತದೆ."
      }
    },
    {
      "id": "b44",
      "type": "code",
      "data": {
        "headingEn": "Without with",
        "descEn": "",
        "code": "f = open(\"this.txt\", \"r\")\n\ntext = f.read()\n\nprint(text)\n\nf.close()",
        "filename": "without_with.py",
        "headingKn": "with ಇಲ್ಲದೆ"
      }
    },
    {
      "id": "b45",
      "type": "code",
      "data": {
        "headingEn": "With with",
        "descEn": "No need for f.close() — Python closes it automatically.",
        "code": "with open(\"this.txt\", \"r\") as f:\n    text = f.read()\n\nprint(text)",
        "filename": "with_statement.py",
        "headingKn": "with ಜೊತೆ",
        "descKn": "f.close() ಅಗತ್ಯವಿಲ್ಲ — Python ಅದನ್ನು ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಮುಚ್ಚುತ್ತದೆ."
      }
    },
    {
      "id": "b46",
      "type": "concept",
      "data": {
        "headingEn": "Why use with?",
        "bodyEn": "Advantages:\nAutomatically closes the file\nCleaner code\nSafer\nPrevents memory leaks\nRecommended in real-world Python projects",
        "headingKn": "with ಅನ್ನು ಏಕೆ ಬಳಸಬೇಕು?",
        "bodyKn": "ಅನುಕೂಲಗಳು:\nಸ್ವಯಂಚಾಲಿತವಾಗಿ file ಮುಚ್ಚುತ್ತದೆ\nಸ್ವಚ್ಛ ಕೋಡ್\nಸುರಕ್ಷಿತ\nMemory leaks ತಡೆಯುತ್ತದೆ\nನಿಜ-ಜಗತ್ತಿನ Python projects ಗಳಲ್ಲಿ ಶಿಫಾರಸು ಮಾಡಲಾಗಿದೆ"
      }
    },
    {
      "id": "b47",
      "type": "heading",
      "data": {
        "textEn": "Real World Examples",
        "level": "H1",
        "textKn": "ನಿಜ-ಜಗತ್ತಿನ ಉದಾಹರಣೆಗಳು"
      }
    },
    {
      "id": "b48",
      "type": "code",
      "data": {
        "headingEn": "Example 1 – Save Student Marks",
        "descEn": "",
        "code": "with open(\"marks.txt\", \"w\") as f:\n    f.write(\"Rahul : 90\")",
        "filename": "save_marks.py",
        "headingKn": "ಉದಾಹರಣೆ 1 – ವಿದ್ಯಾರ್ಥಿ Marks ಉಳಿಸುವುದು"
      }
    },
    {
      "id": "b49",
      "type": "code",
      "data": {
        "headingEn": "Example 2 – Read Notes",
        "descEn": "",
        "code": "with open(\"notes.txt\", \"r\") as f:\n    print(f.read())",
        "filename": "read_notes.py",
        "headingKn": "ಉದಾಹರಣೆ 2 – Notes ಓದುವುದು"
      }
    },
    {
      "id": "b50",
      "type": "code",
      "data": {
        "headingEn": "Example 3 – Maintain a Daily Log",
        "descEn": "Every run adds a new entry without deleting the old ones.",
        "code": "with open(\"log.txt\", \"a\") as f:\n    f.write(\"Program started\\n\")",
        "filename": "daily_log.py",
        "headingKn": "ಉದಾಹರಣೆ 3 – ಒಂದು Daily Log ನಿರ್ವಹಿಸುವುದು",
        "descKn": "ಪ್ರತಿ run ಹಳೆಯದನ್ನು ಅಳಿಸದೆ ಒಂದು ಹೊಸ entry ಸೇರಿಸುತ್ತದೆ."
      }
    },
    {
      "id": "b51",
      "type": "heading",
      "data": {
        "textEn": "Common Mistakes",
        "level": "H1",
        "textKn": "ಸಾಮಾನ್ಯ ತಪ್ಪುಗಳು"
      }
    },
    {
      "id": "b52",
      "type": "code",
      "data": {
        "headingEn": "Forgetting to close the file",
        "descEn": "❌ Not recommended.",
        "code": "f = open(\"file.txt\", \"r\")",
        "filename": "mistake_no_close.py",
        "headingKn": "File ಮುಚ್ಚಲು ಮರೆಯುವುದು",
        "descKn": "❌ ಶಿಫಾರಸು ಮಾಡುವುದಿಲ್ಲ."
      }
    },
    {
      "id": "b53",
      "type": "code",
      "data": {
        "headingEn": "Using w when you wanted a",
        "descEn": "This erases existing data. Use \"a\" instead to preserve old content.",
        "code": "open(\"data.txt\", \"w\")",
        "filename": "mistake_w_mode.py",
        "headingKn": "ನಿಮಗೆ a ಬೇಕಾದಾಗ w ಬಳಸುವುದು",
        "descKn": "ಇದು ಇರುವ ಡೇಟಾ ಅಳಿಸುತ್ತದೆ. ಹಳೆಯ ವಿಷಯ ಕಾಪಾಡಲು ಬದಲಿಗೆ \"a\" ಬಳಸಿ."
      }
    },
    {
      "id": "b54",
      "type": "code",
      "data": {
        "headingEn": "Reading a file that doesn't exist",
        "descEn": "",
        "code": "open(\"abc.txt\", \"r\")",
        "filename": "mistake_missing_file.py",
        "headingKn": "ಅಸ್ತಿತ್ವದಲ್ಲಿ ಇಲ್ಲದ ಒಂದು file ಓದುವುದು"
      }
    },
    {
      "id": "b55",
      "type": "output",
      "data": {
        "output": "FileNotFoundError"
      }
    },
    {
      "type": "concept",
      "data": {
        "headingEn": "Key Takeaways",
        "headingKn": "ಮುಖ್ಯ ಅಂಶಗಳು",
        "bodyEn": "• Files let a program store data permanently, beyond the lifetime of a single run -- text files hold human-readable content, binary files hold raw data like images or compiled programs.\n• Files must be opened with a mode (r for read, w for write/overwrite, a for append, plus b for binary) before they can be read or written, and should always be closed afterward to release the file and guarantee written data is saved.\n• The with statement opens a file and automatically closes it when the block ends, even if an error occurs -- this is why with open(...) as f: is the recommended pattern over manually calling open() and close().\n• Common mistakes include forgetting to close a file, accidentally using 'w' (which erases existing content) when 'a' (append) was intended, and trying to read a file that doesn't exist -- each of these is a realistic bug worth watching for in real programs.",
        "bodyKn": "• Files ಒಂದು program ಗೆ ಒಂದೇ run ನ ಜೀವಿತಾವಧಿಯನ್ನು ಮೀರಿ ಡೇಟಾ ಶಾಶ್ವತವಾಗಿ ಸಂಗ್ರಹಿಸಲು ಅನುಮತಿಸುತ್ತವೆ -- text files ಮನುಷ್ಯ-ಓದಬಹುದಾದ ವಿಷಯ ಹೊಂದಿವೆ, binary files images ಅಥವಾ compiled programs ನಂತಹ raw ಡೇಟಾ ಹೊಂದಿವೆ.\n• Files ಓದುವ ಅಥವಾ ಬರೆಯುವ ಮೊದಲು ಒಂದು mode ಜೊತೆ (r ಓದಲು, w ಬರೆಯಲು/overwrite ಮಾಡಲು, a append ಮಾಡಲು, ಮತ್ತು b binary ಗೆ) ತೆರೆಯಬೇಕು, ಮತ್ತು file ಬಿಡುಗಡೆ ಮಾಡಲು ಮತ್ತು ಬರೆದ ಡೇಟಾ ಉಳಿಸಲಾಗಿದೆ ಎಂದು ಖಚಿತಪಡಿಸಲು ಯಾವಾಗಲೂ ನಂತರ ಮುಚ್ಚಬೇಕು.\n• with statement ಒಂದು file ತೆರೆಯುತ್ತದೆ ಮತ್ತು block ಕೊನೆಗೊಂಡಾಗ ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಮುಚ್ಚುತ್ತದೆ, ಒಂದು error ಸಂಭವಿಸಿದರೂ -- with open(...) as f: ಶಿಫಾರಸು ಮಾಡಿದ ಮಾದರಿಯಾಗಿರುವುದಕ್ಕೆ ಇದೇ ಕಾರಣ, ಕೈಯಾರೆ open() ಮತ್ತು close() ಕರೆಯುವುದಕ್ಕಿಂತ.\n• ಸಾಮಾನ್ಯ ತಪ್ಪುಗಳಲ್ಲಿ ಒಂದು file ಮುಚ್ಚಲು ಮರೆಯುವುದು, 'a' (append) ಉದ್ದೇಶಿಸಿದಾಗ ಆಕಸ್ಮಿಕವಾಗಿ 'w' ಬಳಸುವುದು (ಇದು ಅಸ್ತಿತ್ವದಲ್ಲಿರುವ ವಿಷಯ ಅಳಿಸುತ್ತದೆ), ಮತ್ತು ಅಸ್ತಿತ್ವದಲ್ಲಿಲ್ಲದ ಒಂದು file ಓದಲು ಪ್ರಯತ್ನಿಸುವುದು ಸೇರಿವೆ -- ಇವೆಲ್ಲಾ ನಿಜ programs ಗಳಲ್ಲಿ ಗಮನಿಸಲು ಯೋಗ್ಯವಾದ ವಾಸ್ತವಿಕ bugs."
      }
    },
    {
      "id": "b56",
      "type": "quiz",
      "data": {
        "questions": [
          {
            "q": "Which type of memory loses its data as soon as the power goes off?",
            "opts": [
              "Files on disk",
              "RAM",
              "Hard drive storage",
              "Cloud storage"
            ],
            "correct": 1,
            "qKn": "Power ಆಫ್ ಆದ ತಕ್ಷಣ ಯಾವ ರೀತಿಯ memory ತನ್ನ ಡೇಟಾ ಕಳೆದುಕೊಳ್ಳುತ್ತದೆ?",
            "optsKn": [
              "Disk ನಲ್ಲಿ files",
              "RAM",
              "Hard drive storage",
              "Cloud storage"
            ]
          },
          {
            "q": "Which file mode is used only to read a file (and errors if it doesn't exist)?",
            "opts": [
              "w",
              "a",
              "r",
              "r+"
            ],
            "correct": 2,
            "qKn": "ಒಂದು file ಓದಲು ಮಾತ್ರ ಯಾವ file mode ಬಳಸಲಾಗುತ್ತದೆ (ಮತ್ತು ಅಸ್ತಿತ್ವದಲ್ಲಿ ಇಲ್ಲದಿದ್ದರೆ error ನೀಡುತ್ತದೆ)?",
            "optsKn": [
              "w",
              "a",
              "r",
              "r+"
            ]
          },
          {
            "q": "Which mode adds data to a file without deleting the existing content?",
            "opts": [
              "w",
              "a",
              "r",
              "rb"
            ],
            "correct": 1,
            "qKn": "ಇರುವ ವಿಷಯ ಅಳಿಸದೆ ಒಂದು file ಗೆ ಡೇಟಾ ಸೇರಿಸುವ mode ಯಾವುದು?",
            "optsKn": [
              "w",
              "a",
              "r",
              "rb"
            ]
          },
          {
            "q": "What is the difference between read() and readline()?",
            "opts": [
              "read() reads one line, readline() reads the whole file",
              "read() reads the complete file, readline() reads one line at a time",
              "They do exactly the same thing",
              "read() only works on binary files"
            ],
            "correct": 1,
            "qKn": "read() ಮತ್ತು readline() ನಡುವಿನ ವ್ಯತ್ಯಾಸ ಏನು?",
            "optsKn": [
              "read() ಒಂದು ಸಾಲು ಓದುತ್ತದೆ, readline() ಸಂಪೂರ್ಣ file ಓದುತ್ತದೆ",
              "read() ಸಂಪೂರ್ಣ file ಓದುತ್ತದೆ, readline() ಒಂದು ಸಮಯದಲ್ಲಿ ಒಂದು ಸಾಲು ಓದುತ್ತದೆ",
              "ಎರಡೂ ನಿಖರವಾಗಿ ಅದೇ ಕೆಲಸ ಮಾಡುತ್ತವೆ",
              "read() ಕೇವಲ binary files ಮೇಲೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ"
            ]
          },
          {
            "q": "What happens if you open an existing file in \"w\" mode and write new content?",
            "opts": [
              "The new content is appended to the end",
              "Python raises an error since the file already exists",
              "The old content is erased and replaced with the new content",
              "Nothing happens until you call close()"
            ],
            "correct": 2,
            "qKn": "ಇರುವ ಒಂದು file ಅನ್ನು \"w\" mode ನಲ್ಲಿ ತೆರೆದು ಹೊಸ ವಿಷಯ ಬರೆದರೆ ಏನಾಗುತ್ತದೆ?",
            "optsKn": [
              "ಹೊಸ ವಿಷಯ ಕೊನೆಗೆ ಸೇರಿಸಲಾಗುತ್ತದೆ",
              "File ಈಗಾಗಲೇ ಅಸ್ತಿತ್ವದಲ್ಲಿರುವುದರಿಂದ Python ಒಂದು error ಎಸೆಯುತ್ತದೆ",
              "ಹಳೆಯ ವಿಷಯ ಅಳಿಸಲ್ಪಟ್ಟು ಹೊಸ ವಿಷಯದಿಂದ ಬದಲಾಯಿಸಲಾಗುತ್ತದೆ",
              "ನೀವು close() ಕರೆಯುವವರೆಗೆ ಏನೂ ಆಗುವುದಿಲ್ಲ"
            ]
          },
          {
            "q": "What is the main advantage of using the with statement when working with files?",
            "opts": [
              "It makes the file read-only",
              "It automatically closes the file, even if an error occurs, making the code safer and cleaner",
              "It converts text files into binary files",
              "It prevents the file from being opened more than once"
            ],
            "correct": 1,
            "qKn": "Files ಜೊತೆ ಕೆಲಸ ಮಾಡುವಾಗ with statement ಬಳಸುವ ಮುಖ್ಯ ಅನುಕೂಲ ಏನು?",
            "optsKn": [
              "ಇದು file ಅನ್ನು read-only ಮಾಡುತ್ತದೆ",
              "ಒಂದು error ಸಂಭವಿಸಿದರೂ ಇದು ಸ್ವಯಂಚಾಲಿತವಾಗಿ file ಮುಚ್ಚುತ್ತದೆ, ಕೋಡ್ ಅನ್ನು ಹೆಚ್ಚು ಸುರಕ್ಷಿತ ಮತ್ತು ಸ್ವಚ್ಛಗೊಳಿಸುತ್ತದೆ",
              "ಇದು text files ಗಳನ್ನು binary files ಗಳಾಗಿ ಪರಿವರ್ತಿಸುತ್ತದೆ",
              "ಇದು file ಒಂದಕ್ಕಿಂತ ಹೆಚ್ಚು ಬಾರಿ ತೆರೆಯುವುದನ್ನು ತಡೆಯುತ್ತದೆ"
            ]
          }
        ]
      }
    }
  ]
};
