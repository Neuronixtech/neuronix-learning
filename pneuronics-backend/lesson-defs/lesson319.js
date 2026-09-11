module.exports = {
  "phaseId": "6a358e67fc29b5a4714447b2",
  "moduleId": "6a358e68fc29b5a4714447df",
  "order": 0,
  "type": "reading",
  "duration": 28,
  "difficulty": "intermediate",
  "status": "published",
  "title": "Virtual Environments, pip freeze & Functional Python Tools",
  "titleKn": "ವರ್ಚುವಲ್ ಎನ್ವಿರಾನ್ಮೆಂಟ್ಸ್, pip freeze ಅಂಡ್ ಫಂಕ್ಷನಲ್ ಪೈಥಾನ್ ಟೂಲ್ಸ್",
  "desc": "Isolate project dependencies, then write compact code with lambda, join, format, map, filter and reduce",
  "descKn": "Isolate project dependencies, then write compact code with lambda, join, format, map, filter and reduce",
  "objectives": [
    "Create and activate Python virtual environments using venv",
    "Use pip freeze to capture and reproduce package dependencies",
    "Write and use requirements.txt for project dependency management",
    "Apply functional programming tools: map(), filter(), reduce(), and itertools",
    "Use functools.partial and functools.lru_cache for efficient code",
    "Understand the benefits of isolating project dependencies"
  ],
  "objectivesKn": [
    "venv ಬಳಸಿ Python virtual environments ರಚಿಸಿ ಮತ್ತು activate ಮಾಡಿ",
    "Package dependencies capture ಮಾಡಿ reproduce ಮಾಡಲು pip freeze ಬಳಸಿ",
    "Project dependency management ಗಾಗಿ requirements.txt ಬರೆದು ಬಳಸಿ",
    "Functional programming tools ಅನ್ವಯಿಸಿ: map(), filter(), reduce(), itertools",
    "ಪರಿಣಾಮಕಾರಿ code ಗಾಗಿ functools.partial ಮತ್ತು functools.lru_cache ಬಳಸಿ",
    "Project dependencies ಪ್ರತ್ಯೇಕಿಸುವ ಪ್ರಯೋಜನಗಳನ್ನು ಅರ್ಥ ಮಾಡಿಕೊಳ್ಳಿ"
  ],
  "blocks": [
    {
      "id": "b1",
      "type": "heading",
      "data": {
        "textEn": "Virtual Environment",
        "level": "H1",
        "textKn": "Virtual Environment"
      }
    },
    {
      "id": "b2",
      "type": "concept",
      "data": {
        "headingEn": "",
        "bodyEn": "A Virtual Environment is an isolated Python environment where each project can have its own Python packages and versions without affecting other projects.",
        "bodyKn": "ಒಂದು Virtual Environment ಒಂದು isolated Python environment, ಇಲ್ಲಿ ಪ್ರತಿ project ಇತರ projects ಗಳ ಮೇಲೆ ಪರಿಣಾಮ ಬೀರದೆ ತನ್ನದೇ Python packages ಮತ್ತು versions ಹೊಂದಬಹುದು."
      }
    },
    {
      "id": "b3",
      "type": "concept",
      "data": {
        "headingEn": "Why use a Virtual Environment?",
        "bodyEn": "Imagine:\nProject A needs Django 3.2\nProject B needs Django 5.0\n\nInstalling both globally can cause version conflicts. A virtual environment keeps each project's dependencies separate.",
        "headingKn": "Virtual Environment ಏಕೆ ಬಳಸಬೇಕು?",
        "bodyKn": "ಊಹಿಸಿ:\nProject A ಗೆ Django 3.2 ಬೇಕು\nProject B ಗೆ Django 5.0 ಬೇಕು\n\nಎರಡನ್ನೂ globally install ಮಾಡುವುದು version conflicts ಉಂಟುಮಾಡಬಹುದು. ಒಂದು virtual environment ಪ್ರತಿ project ನ dependencies ಪ್ರತ್ಯೇಕವಾಗಿಡುತ್ತದೆ."
      }
    },
    {
      "id": "b4",
      "type": "code",
      "data": {
        "headingEn": "Install virtualenv",
        "descEn": "",
        "code": "pip install virtualenv",
        "filename": "install_virtualenv.txt",
        "headingKn": "virtualenv install ಮಾಡಿ"
      }
    },
    {
      "id": "b5",
      "type": "code",
      "data": {
        "headingEn": "Create a Virtual Environment",
        "descEn": "",
        "code": "virtualenv myprojectenv",
        "filename": "create_venv.txt",
        "headingKn": "ಒಂದು Virtual Environment ರಚಿಸಿ"
      }
    },
    {
      "id": "b6",
      "type": "code",
      "data": {
        "headingEn": "Activate it - Windows",
        "descEn": "",
        "code": "myprojectenv\\Scripts\\activate",
        "filename": "activate_windows.txt",
        "headingKn": "ಅದನ್ನು activate ಮಾಡಿ - Windows"
      }
    },
    {
      "id": "b7",
      "type": "code",
      "data": {
        "headingEn": "Activate it - Linux / macOS",
        "descEn": "",
        "code": "source myprojectenv/bin/activate",
        "filename": "activate_unix.txt",
        "headingKn": "ಅದನ್ನು activate ಮಾಡಿ - Linux / macOS"
      }
    },
    {
      "id": "b8",
      "type": "concept",
      "data": {
        "headingEn": "",
        "bodyEn": "After activation, any packages you install are only available inside that environment.",
        "bodyKn": "Activation ನಂತರ, ನೀವು install ಮಾಡುವ ಯಾವುದೇ packages ಆ environment ಒಳಗೆ ಮಾತ್ರ ಲಭ್ಯ."
      }
    },
    {
      "id": "b9",
      "type": "heading",
      "data": {
        "textEn": "pip freeze",
        "level": "H1",
        "textKn": "pip freeze"
      }
    },
    {
      "id": "b10",
      "type": "concept",
      "data": {
        "headingEn": "",
        "bodyEn": "The pip freeze command lists all installed packages and their versions in the current environment.",
        "bodyKn": "pip freeze command ಪ್ರಸ್ತುತ environment ನಲ್ಲಿ install ಆದ ಎಲ್ಲಾ packages ಮತ್ತು ಅವುಗಳ versions ಪಟ್ಟಿ ಮಾಡುತ್ತದೆ."
      }
    },
    {
      "id": "b11",
      "type": "code",
      "data": {
        "headingEn": "Listing installed packages",
        "descEn": "",
        "code": "pip freeze",
        "filename": "pip_freeze.txt",
        "headingKn": "Install ಆದ packages ಪಟ್ಟಿ ಮಾಡುವುದು"
      }
    },
    {
      "id": "b12",
      "type": "output",
      "data": {
        "output": "numpy==2.0.0\npandas==2.2.0\nrequests==2.32.0"
      }
    },
    {
      "id": "b13",
      "type": "code",
      "data": {
        "headingEn": "Saving the list to a file",
        "descEn": "",
        "code": "pip freeze > requirements.txt",
        "filename": "save_requirements.txt",
        "headingKn": "List ಅನ್ನು ಒಂದು file ಗೆ ಉಳಿಸುವುದು"
      }
    },
    {
      "id": "b14",
      "type": "code",
      "data": {
        "headingEn": "Recreating the same environment elsewhere",
        "descEn": "",
        "code": "pip install -r requirements.txt",
        "filename": "install_requirements.txt",
        "headingKn": "ಅದೇ environment ಅನ್ನು ಬೇರೆಡೆ ಪುನಃ ರಚಿಸುವುದು"
      }
    },
    {
      "id": "b15",
      "type": "heading",
      "data": {
        "textEn": "Lambda Functions",
        "level": "H1",
        "textKn": "Lambda Functions"
      }
    },
    {
      "id": "b16",
      "type": "concept",
      "data": {
        "headingEn": "",
        "bodyEn": "A lambda function is a small anonymous (unnamed) function written in a single line.\n\nSyntax:\nlambda arguments: expression",
        "bodyKn": "ಒಂದು lambda function ಒಂದೇ ಸಾಲಿನಲ್ಲಿ ಬರೆದ ಒಂದು ಚಿಕ್ಕ anonymous (ಹೆಸರಿಲ್ಲದ) function.\n\nSyntax:\nlambda arguments: expression"
      }
    },
    {
      "id": "b17",
      "type": "code",
      "data": {
        "headingEn": "Example 1: Square of a Number",
        "descEn": "",
        "code": "square = lambda x: x * x\n\nprint(square(6))",
        "filename": "lambda_square.py",
        "headingKn": "ಉದಾಹರಣೆ 1: ಒಂದು ಸಂಖ್ಯೆಯ Square"
      }
    },
    {
      "id": "b18",
      "type": "output",
      "data": {
        "output": "36"
      }
    },
    {
      "id": "b19",
      "type": "code",
      "data": {
        "headingEn": "Example 2: Sum of Three Numbers",
        "descEn": "",
        "code": "total = lambda a, b, c: a + b + c\n\nprint(total(2, 3, 5))",
        "filename": "lambda_sum.py",
        "headingKn": "ಉದಾಹರಣೆ 2: ಮೂರು ಸಂಖ್ಯೆಗಳ Sum"
      }
    },
    {
      "id": "b20",
      "type": "output",
      "data": {
        "output": "10"
      }
    },
    {
      "id": "b21",
      "type": "concept",
      "data": {
        "headingEn": "When to use lambda?",
        "bodyEn": "Short functions\nPassing functions to map(), filter(), and reduce()",
        "headingKn": "lambda ಯಾವಾಗ ಬಳಸಬೇಕು?",
        "bodyKn": "ಚಿಕ್ಕ functions\nmap(), filter(), ಮತ್ತು reduce() ಗೆ functions ರವಾನಿಸುವುದು"
      }
    },
    {
      "id": "b22",
      "type": "heading",
      "data": {
        "textEn": "join( ) Method",
        "level": "H1",
        "textKn": "join() Method"
      }
    },
    {
      "id": "b23",
      "type": "concept",
      "data": {
        "headingEn": "",
        "bodyEn": "The join( ) method combines elements of an iterable into a single string using a chosen separator.",
        "bodyKn": "join() method ಒಂದು ಆಯ್ಕೆ ಮಾಡಿದ separator ಬಳಸಿ ಒಂದು iterable ನ elements ಗಳನ್ನು ಒಂದೇ string ಆಗಿ ಸಂಯೋಜಿಸುತ್ತದೆ."
      }
    },
    {
      "id": "b24",
      "type": "code",
      "data": {
        "headingEn": "Joining a list of fruits with a comma",
        "descEn": "",
        "code": "fruits = [\"Apple\", \"Mango\", \"Banana\"]\n\nresult = \", \".join(fruits)\n\nprint(result)",
        "filename": "join_fruits.py",
        "headingKn": "ಒಂದು comma ಜೊತೆ fruits ಒಂದು list ಸೇರಿಸುವುದು"
      }
    },
    {
      "id": "b25",
      "type": "output",
      "data": {
        "output": "Apple, Mango, Banana"
      }
    },
    {
      "id": "b26",
      "type": "code",
      "data": {
        "headingEn": "Joining words with a space",
        "descEn": "",
        "code": "words = [\"Python\", \"is\", \"awesome\"]\n\nprint(\" \".join(words))",
        "filename": "join_words.py",
        "headingKn": "ಒಂದು space ಜೊತೆ words ಸೇರಿಸುವುದು"
      }
    },
    {
      "id": "b27",
      "type": "output",
      "data": {
        "output": "Python is awesome"
      }
    },
    {
      "id": "b28",
      "type": "heading",
      "data": {
        "textEn": "format( ) Method",
        "level": "H1",
        "textKn": "format() Method"
      }
    },
    {
      "id": "b29",
      "type": "concept",
      "data": {
        "headingEn": "",
        "bodyEn": "The format( ) method inserts values into placeholders ({}) in a string.",
        "bodyKn": "format() method ಒಂದು string ನಲ್ಲಿ placeholders ({}) ಗೆ ಮೌಲ್ಯಗಳನ್ನು ಸೇರಿಸುತ್ತದೆ."
      }
    },
    {
      "id": "b30",
      "type": "code",
      "data": {
        "headingEn": "Example 1 - positional placeholders",
        "descEn": "",
        "code": "name = \"Alice\"\nlanguage = \"Python\"\n\nprint(\"{} is learning {}.\".format(name, language))",
        "filename": "format_positional.py",
        "headingKn": "ಉದಾಹರಣೆ 1 - positional placeholders"
      }
    },
    {
      "id": "b31",
      "type": "output",
      "data": {
        "output": "Alice is learning Python."
      }
    },
    {
      "id": "b32",
      "type": "code",
      "data": {
        "headingEn": "Example 2 - named placeholders",
        "descEn": "",
        "code": "print(\"{lang} is taught by {teacher}\".format(\n    teacher=\"John\",\n    lang=\"Python\"\n))",
        "filename": "format_named.py",
        "headingKn": "ಉದಾಹರಣೆ 2 - named placeholders"
      }
    },
    {
      "id": "b33",
      "type": "output",
      "data": {
        "output": "Python is taught by John"
      }
    },
    {
      "id": "b34",
      "type": "heading",
      "data": {
        "textEn": "map( ), filter( ), and reduce( )",
        "level": "H1",
        "textKn": "map(), filter(), ಮತ್ತು reduce()"
      }
    },
    {
      "id": "b35",
      "type": "concept",
      "data": {
        "headingEn": "",
        "bodyEn": "These are functional programming tools used to process collections of data efficiently.",
        "bodyKn": "ಇವು ಡೇಟಾ ಸಂಗ್ರಹಗಳನ್ನು ಪರಿಣಾಮಕಾರಿಯಾಗಿ ಪ್ರೊಸೆಸ್ ಮಾಡಲು ಬಳಸುವ functional programming tools."
      }
    },
    {
      "id": "b36",
      "type": "concept",
      "data": {
        "headingEn": "map( )",
        "bodyEn": "Applies a function to every element in an iterable.",
        "headingKn": "map()",
        "bodyKn": "ಒಂದು iterable ನಲ್ಲಿ ಪ್ರತಿ element ಗೆ ಒಂದು function ಅನ್ವಯಿಸುತ್ತದೆ."
      }
    },
    {
      "id": "b37",
      "type": "code",
      "data": {
        "headingEn": "Squaring every number with map( )",
        "descEn": "",
        "code": "numbers = [1, 2, 3, 4]\n\nsquares = list(map(lambda x: x * x, numbers))\n\nprint(squares)",
        "filename": "map_example.py",
        "headingKn": "map() ಜೊತೆ ಪ್ರತಿ ಸಂಖ್ಯೆಯನ್ನು square ಮಾಡುವುದು"
      }
    },
    {
      "id": "b38",
      "type": "output",
      "data": {
        "output": "[1, 4, 9, 16]"
      }
    },
    {
      "id": "b39",
      "type": "concept",
      "data": {
        "headingEn": "filter( )",
        "bodyEn": "Keeps only the elements that satisfy a condition.",
        "headingKn": "filter()",
        "bodyKn": "ಒಂದು condition ಪೂರೈಸುವ elements ಗಳನ್ನು ಮಾತ್ರ ಇಟ್ಟುಕೊಳ್ಳುತ್ತದೆ."
      }
    },
    {
      "id": "b40",
      "type": "code",
      "data": {
        "headingEn": "Keeping only even numbers with filter( )",
        "descEn": "",
        "code": "numbers = [1, 2, 3, 4, 5, 6]\n\neven = list(filter(lambda x: x % 2 == 0, numbers))\n\nprint(even)",
        "filename": "filter_example.py",
        "headingKn": "filter() ಜೊತೆ ಕೇವಲ ಸಮ ಸಂಖ್ಯೆಗಳನ್ನು ಇಟ್ಟುಕೊಳ್ಳುವುದು"
      }
    },
    {
      "id": "b41",
      "type": "output",
      "data": {
        "output": "[2, 4, 6]"
      }
    },
    {
      "id": "b42",
      "type": "concept",
      "data": {
        "headingEn": "reduce( )",
        "bodyEn": "Combines all elements into a single value by repeatedly applying a function. It must be imported first from functools.",
        "headingKn": "reduce()",
        "bodyKn": "ಒಂದು function ಪದೇಪದೇ ಅನ್ವಯಿಸುವ ಮೂಲಕ ಎಲ್ಲಾ elements ಗಳನ್ನು ಒಂದೇ ಮೌಲ್ಯಕ್ಕೆ ಸಂಯೋಜಿಸುತ್ತದೆ. ಇದನ್ನು ಮೊದಲು functools ಇಂದ import ಮಾಡಬೇಕು."
      }
    },
    {
      "id": "b43",
      "type": "code",
      "data": {
        "headingEn": "Sum of numbers with reduce( )",
        "descEn": "",
        "code": "from functools import reduce\n\nnumbers = [1, 2, 3, 4]\n\ntotal = reduce(lambda a, b: a + b, numbers)\n\nprint(total)",
        "filename": "reduce_example.py",
        "headingKn": "reduce() ಜೊತೆ ಸಂಖ್ಯೆಗಳ Sum"
      }
    },
    {
      "id": "b44",
      "type": "output",
      "data": {
        "output": "10"
      }
    },
    {
      "id": "b45",
      "type": "concept",
      "data": {
        "headingEn": "How reduce( ) Works",
        "bodyEn": "For the list [1, 2, 3, 4], the computation happens like this:\n\nStep 1: 1 + 2 = 3\nStep 2: 3 + 3 = 6\nStep 3: 6 + 4 = 10\n\nFinal result: 10",
        "headingKn": "reduce() ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ",
        "bodyKn": "[1, 2, 3, 4] list ಗಾಗಿ, ಲೆಕ್ಕಾಚಾರ ಹೀಗೆ ಸಂಭವಿಸುತ್ತದೆ:\n\nಹಂತ 1: 1 + 2 = 3\nಹಂತ 2: 3 + 3 = 6\nಹಂತ 3: 6 + 4 = 10\n\nಅಂತಿಮ ಫಲಿತಾಂಶ: 10"
      }
    },
    {
      "id": "b46",
      "type": "example",
      "data": {
        "tag": "Real-world Example",
        "textEn": "Imagine adding the prices of items in a shopping cart:\n\nRs.500 + Rs.300 + Rs.200 + Rs.100 = Rs.1100\n\nreduce() performs this cumulative calculation automatically.",
        "textKn": "ಒಂದು shopping cart ನಲ್ಲಿ items ಗಳ ಬೆಲೆಗಳನ್ನು ಸೇರಿಸುವುದನ್ನು ಊಹಿಸಿ:\n\nRs.500 + Rs.300 + Rs.200 + Rs.100 = Rs.1100\n\nreduce() ಈ cumulative ಲೆಕ್ಕಾಚಾರವನ್ನು ಸ್ವಯಂಚಾಲಿತವಾಗಿ ನಿರ್ವಹಿಸುತ್ತದೆ."
      }
    },
    {
      "id": "b47",
      "type": "table",
      "data": {
        "captionEn": "Summary",
        "rows": "Tool | Purpose\npip freeze | Export installed package versions\nLambda | Create small anonymous functions\njoin() | Combine strings from an iterable\nformat() | Insert values into formatted strings\nmap(), filter(), reduce() | Functional programming utilities",
        "captionKn": "ಸಾರಾಂಶ"
      }
    },
    {
      "type": "concept",
      "data": {
        "headingEn": "Key Takeaways",
        "headingKn": "ಮುಖ್ಯ ಅಂಶಗಳು",
        "bodyEn": "• A virtual environment isolates a project's package installations from the system-wide Python, so different projects can use different (even conflicting) library versions safely.\n• pip freeze lists all currently installed packages with their exact versions -- saving this to requirements.txt lets anyone recreate the same environment elsewhere with a single pip install command.\n• Lambda functions are small, unnamed, single-expression functions (lambda x: x**2) most useful when passed directly into another function like map(), filter(), or sorted(), where defining a full named function would be overkill.\n• map(), filter(), and reduce() are the core functional-programming trio: map() transforms every element, filter() keeps only elements passing a condition, and reduce() combines all elements into one accumulated value -- all three patterns reappear constantly once you start working with datasets in later AI/ML lessons.",
        "bodyKn": "• ಒಂದು virtual environment ಒಂದು ಪ್ರಾಜೆಕ್ಟ್‌ನ package installations ಗಳನ್ನು system-wide Python ನಿಂದ ಪ್ರತ್ಯೇಕಿಸುತ್ತದೆ, ಆದ್ದರಿಂದ ಬೇರೆ ಪ್ರಾಜೆಕ್ಟ್‌ಗಳು ಬೇರೆ (ಸಂಘರ್ಷಿಸುವ) library ಆವೃತ್ತಿಗಳನ್ನೂ ಸುರಕ್ಷಿತವಾಗಿ ಬಳಸಬಹುದು.\n• pip freeze ಪ್ರಸ್ತುತ install ಆದ ಎಲ್ಲಾ packages ಗಳನ್ನು ಅವುಗಳ ನಿಖರ ಆವೃತ್ತಿಗಳ ಜೊತೆ ಪಟ್ಟಿ ಮಾಡುತ್ತದೆ -- ಇದನ್ನು requirements.txt ಗೆ ಉಳಿಸುವುದು ಯಾರಿಗಾದರೂ ಒಂದೇ pip install command ಜೊತೆ ಬೇರೆಡೆ ಅದೇ environment ಪುನರ್ನಿರ್ಮಿಸಲು ಅನುಮತಿಸುತ್ತದೆ.\n• Lambda functions ಚಿಕ್ಕ, ಹೆಸರಿಸದ, single-expression functions (lambda x: x**2) map(), filter(), ಅಥವಾ sorted() ನಂತಹ ಇನ್ನೊಂದು function ಗೆ ನೇರವಾಗಿ ರವಾನಿಸಿದಾಗ ಅತ್ಯಂತ ಉಪಯುಕ್ತ, ಎಲ್ಲಿ ಒಂದು ಪೂರ್ಣ ಹೆಸರಿಸಿದ function ವ್ಯಾಖ್ಯಾನಿಸುವುದು ಅತಿಯಾಗಿರುತ್ತದೆ.\n• map(), filter(), ಮತ್ತು reduce() ಮೂಲ functional-programming ತ್ರಿಕೂಟ: map() ಪ್ರತಿ element ಪರಿವರ್ತಿಸುತ್ತದೆ, filter() ಒಂದು condition ಪಾಸ್ ಮಾಡುವ elements ಗಳನ್ನು ಮಾತ್ರ ಇಟ್ಟುಕೊಳ್ಳುತ್ತದೆ, ಮತ್ತು reduce() ಎಲ್ಲಾ elements ಗಳನ್ನು ಒಂದು ಸಂಚಿತ ಮೌಲ್ಯಕ್ಕೆ ಸಂಯೋಜಿಸುತ್ತದೆ -- ಮೂರೂ ಮಾದರಿಗಳು ನೀವು ನಂತರದ AI/ML lessons ಗಳಲ್ಲಿ datasets ಜೊತೆ ಕೆಲಸ ಮಾಡಲು ಆರಂಭಿಸಿದ ನಂತರ ನಿರಂತರವಾಗಿ ಮತ್ತೆ ಕಾಣಿಸಿಕೊಳ್ಳುತ್ತವೆ."
      }
    },
    {
      "id": "b48",
      "type": "quiz",
      "data": {
        "questions": [
          {
            "q": "Why do we use a virtual environment?",
            "opts": [
              "To make Python run faster",
              "To keep each project's package versions isolated from other projects",
              "To avoid writing import statements",
              "To automatically update all installed packages"
            ],
            "correct": 1,
            "qKn": "ನಾವು ಒಂದು virtual environment ಏಕೆ ಬಳಸುತ್ತೇವೆ?",
            "optsKn": [
              "Python ಅನ್ನು ವೇಗವಾಗಿ ಓಡಿಸಲು",
              "ಪ್ರತಿ project ನ package versions ಅನ್ನು ಇತರ projects ಇಂದ ಪ್ರತ್ಯೇಕವಾಗಿಡಲು",
              "import statements ಬರೆಯುವುದನ್ನು ತಪ್ಪಿಸಲು",
              "install ಆದ ಎಲ್ಲಾ packages ಅನ್ನು ಸ್ವಯಂಚಾಲಿತವಾಗಿ update ಮಾಡಲು"
            ]
          },
          {
            "q": "What does the pip freeze command do?",
            "opts": [
              "Deletes all installed packages",
              "Lists all installed packages and their versions in the current environment",
              "Freezes the Python interpreter until restarted",
              "Creates a new virtual environment"
            ],
            "correct": 1,
            "qKn": "pip freeze command ಏನು ಮಾಡುತ್ತದೆ?",
            "optsKn": [
              "Install ಆದ ಎಲ್ಲಾ packages ಅಳಿಸುತ್ತದೆ",
              "ಪ್ರಸ್ತುತ environment ನಲ್ಲಿ install ಆದ ಎಲ್ಲಾ packages ಮತ್ತು ಅವುಗಳ versions ಪಟ್ಟಿ ಮಾಡುತ್ತದೆ",
              "Restart ಆಗುವವರೆಗೆ Python interpreter ಅನ್ನು freeze ಮಾಡುತ್ತದೆ",
              "ಒಂದು ಹೊಸ virtual environment ರಚಿಸುತ್ತದೆ"
            ]
          },
          {
            "q": "What is a lambda function?",
            "opts": [
              "A function that can only return None",
              "A small anonymous function written in a single line",
              "A function that must always take exactly one argument",
              "A built-in Python module"
            ],
            "correct": 1,
            "qKn": "ಒಂದು lambda function ಎಂದರೇನು?",
            "optsKn": [
              "ಕೇವಲ None ಹಿಂತಿರುಗಿಸಬಹುದಾದ ಒಂದು function",
              "ಒಂದೇ ಸಾಲಿನಲ್ಲಿ ಬರೆದ ಒಂದು ಚಿಕ್ಕ anonymous function",
              "ಯಾವಾಗಲೂ ನಿಖರವಾಗಿ ಒಂದು argument ತೆಗೆದುಕೊಳ್ಳಬೇಕಾದ ಒಂದು function",
              "ಒಂದು built-in Python module"
            ]
          },
          {
            "q": "What does \", \".join([\"Apple\", \"Mango\", \"Banana\"]) return?",
            "opts": [
              "AppleMangoBanana",
              "['Apple', 'Mango', 'Banana']",
              "Apple, Mango, Banana",
              "Apple Mango Banana"
            ],
            "correct": 2,
            "qKn": "\", \".join([\"Apple\", \"Mango\", \"Banana\"]) ಏನನ್ನು ಹಿಂತಿರುಗಿಸುತ್ತದೆ?",
            "optsKn": [
              "AppleMangoBanana",
              "['Apple', 'Mango', 'Banana']",
              "Apple, Mango, Banana",
              "Apple Mango Banana"
            ]
          },
          {
            "q": "What is the difference between map( ) and filter( )?",
            "opts": [
              "map() applies a function to every element; filter( ) keeps only elements matching a condition",
              "filter() applies a function to every element; map() keeps only matching elements",
              "They do exactly the same thing",
              "map() only works with lambda functions"
            ],
            "correct": 0,
            "qKn": "map() ಮತ್ತು filter() ನಡುವಿನ ವ್ಯತ್ಯಾಸ ಏನು?",
            "optsKn": [
              "map() ಪ್ರತಿ element ಗೆ ಒಂದು function ಅನ್ವಯಿಸುತ್ತದೆ; filter() ಒಂದು condition ಗೆ ಹೊಂದುವ elements ಮಾತ್ರ ಇಟ್ಟುಕೊಳ್ಳುತ್ತದೆ",
              "filter() ಪ್ರತಿ element ಗೆ ಒಂದು function ಅನ್ವಯಿಸುತ್ತದೆ; map() ಹೊಂದುವ elements ಮಾತ್ರ ಇಟ್ಟುಕೊಳ್ಳುತ್ತದೆ",
              "ಎರಡೂ ನಿಖರವಾಗಿ ಅದೇ ಕೆಲಸ ಮಾಡುತ್ತವೆ",
              "map() ಕೇವಲ lambda functions ಜೊತೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ"
            ]
          },
          {
            "q": "Where must reduce( ) be imported from before use?",
            "opts": [
              "itertools",
              "functools",
              "collections",
              "operator"
            ],
            "correct": 1,
            "qKn": "ಬಳಸುವ ಮೊದಲು reduce() ಅನ್ನು ಎಲ್ಲಿಂದ import ಮಾಡಬೇಕು?",
            "optsKn": [
              "itertools",
              "functools",
              "collections",
              "operator"
            ]
          }
        ]
      }
    }
  ]
};
