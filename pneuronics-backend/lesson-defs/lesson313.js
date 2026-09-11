module.exports = {
  "phaseId": "6a358e5ffc29b5a47144467a",
  "moduleId": "6a358e65fc29b5a47144473a",
  "order": 0,
  "type": "reading",
  "duration": 25,
  "difficulty": "beginner",
  "status": "published",
  "title": "Functions and Recursion in Python",
  "titleKn": "ಫಂಕ್ಷನ್ಸ್ ಅಂಡ್ ರಿಕರ್ಷನ್ ಇನ್ ಪೈಥಾನ್",
  "desc": "Write reusable blocks of code and understand how functions can call themselves",
  "descKn": "Write reusable blocks of code and understand how functions can call themselves",
  "objectives": [
    "Define and call functions using def, parameters, and return",
    "Distinguish between positional, keyword, default, and *args/**kwargs parameters",
    "Understand variable scope: local vs global",
    "Write recursive functions and identify the base case",
    "Use lambda expressions for simple anonymous functions",
    "Apply built-in higher-order functions: map(), filter(), sorted()"
  ],
  "objectivesKn": [
    "def, parameters, ಮತ್ತು return ಬಳಸಿ functions ವ್ಯಾಖ್ಯಾನಿಸಿ ಮತ್ತು call ಮಾಡಿ",
    "Positional, keyword, default, ಮತ್ತು *args/**kwargs parameters ನಡುವೆ ಪ್ರತ್ಯೇಕಿಸಿ",
    "Variable scope ಅರ್ಥ ಮಾಡಿಕೊಳ್ಳಿ: local vs global",
    "Recursive functions ಬರೆದು base case ಗುರುತಿಸಿ",
    "ಸರಳ anonymous functions ಗಾಗಿ lambda expressions ಬಳಸಿ",
    "Built-in higher-order functions ಅನ್ವಯಿಸಿ: map(), filter(), sorted()"
  ],
  "blocks": [
    {
      "id": "b1",
      "type": "concept",
      "data": {
        "headingEn": "WHAT IS A FUNCTION?",
        "bodyEn": "A function is a reusable block of code that performs a specific task.\n\nInstead of writing the same code repeatedly, we write it once inside a function and call it whenever needed.\n\nThink of a function as a machine:\n• It accepts an input (optional)\n• Processes the input\n• Produces an output (optional)",
        "headingKn": "ಫಂಕ್ಷನ್ ಎಂದರೇನು?",
        "bodyKn": "ಒಂದು function ಒಂದು ನಿರ್ದಿಷ್ಟ ಕಾರ್ಯವನ್ನು ನಿರ್ವಹಿಸುವ ಮರುಬಳಕೆ ಮಾಡಬಹುದಾದ ಕೋಡ್ ಬ್ಲಾಕ್ ಆಗಿದೆ.\n\nಅದೇ ಕೋಡ್ ಅನ್ನು ಪದೇ ಪದೇ ಬರೆಯುವ ಬದಲು, ನಾವು ಅದನ್ನು ಒಮ್ಮೆ ಒಂದು function ಒಳಗೆ ಬರೆದು ಅಗತ್ಯವಿದ್ದಾಗಲೆಲ್ಲಾ ಕರೆಯುತ್ತೇವೆ.\n\nಒಂದು function ಅನ್ನು ಒಂದು machine ಎಂದು ಯೋಚಿಸಿ:\n• ಇದು ಒಂದು input ಸ್ವೀಕರಿಸುತ್ತದೆ (ಐಚ್ಛಿಕ)\n• Input ಅನ್ನು ಸಂಸ್ಕರಿಸುತ್ತದೆ\n• ಒಂದು output ಉತ್ಪಾದಿಸುತ್ತದೆ (ಐಚ್ಛಿಕ)"
      }
    },
    {
      "id": "b2",
      "type": "example",
      "data": {
        "tag": "Real-Life Example",
        "textEn": "Imagine a coffee machine.\n\nCoffee Beans + Water → Coffee Machine → Coffee\n\nEvery time you press the button, the same machine performs the same task. Functions work exactly the same way.",
        "textKn": "ಒಂದು coffee machine ಊಹಿಸಿಕೊಳ್ಳಿ.\n\nCoffee Beans + Water → Coffee Machine → Coffee\n\nಪ್ರತಿ ಬಾರಿ ನೀವು ಬಟನ್ ಒತ್ತಿದಾಗ, ಅದೇ machine ಅದೇ ಕೆಲಸವನ್ನು ನಿರ್ವಹಿಸುತ್ತದೆ. Functions ಸಹ ಅದೇ ರೀತಿ ಕೆಲಸ ಮಾಡುತ್ತವೆ."
      }
    },
    {
      "id": "b3",
      "type": "concept",
      "data": {
        "headingEn": "Why Do We Use Functions?",
        "bodyEn": "When programs become larger, managing hundreds or thousands of lines of code becomes difficult.\n\nFunctions help us by:\n• Reducing duplicate code\n• Making programs easier to understand\n• Improving code readability\n• Making debugging easier\n• Allowing code reuse\n• Breaking a large problem into smaller tasks",
        "headingKn": "ನಾವು Functions ಅನ್ನು ಏಕೆ ಬಳಸುತ್ತೇವೆ?",
        "bodyKn": "ಪ್ರೋಗ್ರಾಂಗಳು ದೊಡ್ಡದಾದಾಗ, ನೂರಾರು ಅಥವಾ ಸಾವಿರಾರು ಸಾಲುಗಳ ಕೋಡ್ ನಿರ್ವಹಿಸುವುದು ಕಷ್ಟಕರವಾಗುತ್ತದೆ.\n\nFunctions ನಮಗೆ ಹೀಗೆ ಸಹಾಯ ಮಾಡುತ್ತವೆ:\n• ಪುನರಾವರ್ತಿತ ಕೋಡ್ ಕಡಿಮೆ ಮಾಡುವುದು\n• ಪ್ರೋಗ್ರಾಂಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ಸುಲಭಗೊಳಿಸುವುದು\n• ಕೋಡ್ ಓದುವಿಕೆ ಸುಧಾರಿಸುವುದು\n• Debugging ಸುಲಭಗೊಳಿಸುವುದು\n• ಕೋಡ್ ಮರುಬಳಕೆಗೆ ಅವಕಾಶ ನೀಡುವುದು\n• ಒಂದು ದೊಡ್ಡ ಸಮಸ್ಯೆಯನ್ನು ಚಿಕ್ಕ ಕಾರ್ಯಗಳಾಗಿ ವಿಭಜಿಸುವುದು"
      }
    },
    {
      "id": "b4",
      "type": "concept",
      "data": {
        "headingEn": "Without functions vs. With functions",
        "bodyEn": "Without functions:\n• 1000 lines of code\n• hard to read\n• hard to debug\n• repeated code\n\nWith functions:\nlogin(), payment(), display_menu(), calculate_total(), logout()\n\nEach function performs one job.",
        "headingKn": "Functions ಇಲ್ಲದೆ vs. Functions ಜೊತೆ",
        "bodyKn": "Functions ಇಲ್ಲದೆ:\n• 1000 ಸಾಲುಗಳ ಕೋಡ್\n• ಓದಲು ಕಷ್ಟ\n• Debug ಮಾಡಲು ಕಷ್ಟ\n• ಪುನರಾವರ್ತಿತ ಕೋಡ್\n\nFunctions ಜೊತೆ:\nlogin(), payment(), display_menu(), calculate_total(), logout()\n\nಪ್ರತಿ function ಒಂದು ಕೆಲಸ ನಿರ್ವಹಿಸುತ್ತದೆ."
      }
    },
    {
      "id": "b5",
      "type": "concept",
      "data": {
        "headingEn": "FUNCTION SYNTAX",
        "bodyEn": "A function is created using the def keyword.\n\nSyntax:\ndef function_name():\n    # Function body",
        "headingKn": "FUNCTION SYNTAX",
        "bodyKn": "ಒಂದು function ಅನ್ನು def ಕೀವರ್ಡ್ ಬಳಸಿ ರಚಿಸಲಾಗುತ್ತದೆ.\n\nSyntax:\ndef function_name():\n    # Function body"
      }
    },
    {
      "id": "b6",
      "type": "code",
      "data": {
        "headingEn": "Defining a function",
        "descEn": "Notice that nothing is printed yet because the function has only been defined, not executed.",
        "code": "def greet():\n    print(\"Hello\")",
        "filename": "define_greet.py",
        "headingKn": "ಒಂದು function ವ್ಯಾಖ್ಯಾನಿಸುವುದು",
        "descKn": "ಗಮನಿಸಿ, ಏನೂ ಇನ್ನೂ ಮುದ್ರಿತವಾಗಿಲ್ಲ ಏಕೆಂದರೆ function ಕೇವಲ ವ್ಯಾಖ್ಯಾನಿಸಲಾಗಿದೆ, ಕಾರ್ಯಗತಗೊಳಿಸಿಲ್ಲ."
      }
    },
    {
      "id": "b7",
      "type": "concept",
      "data": {
        "headingEn": "Explanation",
        "bodyEn": "• def tells Python that we are creating a function.\n• greet is the function name.\n• Parentheses () can contain parameters.\n• A colon : starts the function body.\n• Indented statements belong to the function.",
        "headingKn": "ವಿವರಣೆ",
        "bodyKn": "• def ಎಂಬುದು ನಾವು ಒಂದು function ರಚಿಸುತ್ತಿದ್ದೇವೆ ಎಂದು Python ಗೆ ತಿಳಿಸುತ್ತದೆ.\n• greet ಎಂಬುದು function ಹೆಸರು.\n• Parentheses () parameters ಹೊಂದಿರಬಹುದು.\n• ಒಂದು colon : function body ಪ್ರಾರಂಭಿಸುತ್ತದೆ.\n• Indented statements function ಗೆ ಸೇರಿವೆ."
      }
    },
    {
      "id": "b8",
      "type": "concept",
      "data": {
        "headingEn": "FUNCTION CALL",
        "bodyEn": "After defining a function, we must call it. Calling a function means asking Python to execute the code inside it.\n\nA function can be called:\n• Once\n• Multiple times\n• Anywhere after it has been defined",
        "headingKn": "FUNCTION CALL",
        "bodyKn": "ಒಂದು function ವ್ಯಾಖ್ಯಾನಿಸಿದ ನಂತರ, ನಾವು ಅದನ್ನು ಕರೆಯಬೇಕು. ಒಂದು function ಕರೆಯುವುದು ಎಂದರೆ ಅದರ ಒಳಗಿನ ಕೋಡ್ ಅನ್ನು ಕಾರ್ಯಗತಗೊಳಿಸಲು Python ಗೆ ಕೇಳುವುದು.\n\nಒಂದು function ಅನ್ನು ಹೀಗೆ ಕರೆಯಬಹುದು:\n• ಒಮ್ಮೆ\n• ಅನೇಕ ಬಾರಿ\n• ಅದನ್ನು ವ್ಯಾಖ್ಯಾನಿಸಿದ ನಂತರ ಎಲ್ಲಿ ಬೇಕಾದರೂ"
      }
    },
    {
      "id": "b9",
      "type": "code",
      "data": {
        "headingEn": "Calling a function once",
        "descEn": "",
        "code": "def greet():\n    print(\"Hello\")\n\ngreet()",
        "filename": "call_once.py",
        "headingKn": "ಒಂದು function ಅನ್ನು ಒಮ್ಮೆ ಕರೆಯುವುದು"
      }
    },
    {
      "id": "b10",
      "type": "output",
      "data": {
        "output": "Hello"
      }
    },
    {
      "id": "b11",
      "type": "code",
      "data": {
        "headingEn": "Calling a function multiple times",
        "descEn": "",
        "code": "def greet():\n    print(\"Hello\")\n\ngreet()\ngreet()\ngreet()",
        "filename": "call_multiple.py",
        "headingKn": "ಒಂದು function ಅನ್ನು ಅನೇಕ ಬಾರಿ ಕರೆಯುವುದು"
      }
    },
    {
      "id": "b12",
      "type": "output",
      "data": {
        "output": "Hello\nHello\nHello"
      }
    },
    {
      "id": "b13",
      "type": "concept",
      "data": {
        "headingEn": "FUNCTION DEFINITION",
        "bodyEn": "The block of code written after the def keyword is called the function definition.",
        "headingKn": "FUNCTION DEFINITION",
        "bodyKn": "def ಕೀವರ್ಡ್ ನಂತರ ಬರೆಯಲಾದ ಕೋಡ್ ಬ್ಲಾಕ್ ಅನ್ನು function definition ಎಂದು ಕರೆಯಲಾಗುತ್ತದೆ."
      }
    },
    {
      "id": "b14",
      "type": "code",
      "data": {
        "headingEn": "A function with multiple statements",
        "descEn": "Both print statements are part of the function body.",
        "code": "def welcome():\n    print(\"Welcome to Python\")\n    print(\"Enjoy Learning!\")",
        "filename": "welcome.py",
        "headingKn": "ಅನೇಕ statements ಹೊಂದಿರುವ ಒಂದು function",
        "descKn": "ಎರಡೂ print statements function body ಯ ಭಾಗವಾಗಿವೆ."
      }
    },
    {
      "id": "b16",
      "type": "code",
      "data": {
        "headingEn": "Solution",
        "descEn": "",
        "code": "def good_day():\n    print(\"Good Day\")\n\ngood_day()",
        "filename": "good_day.py",
        "headingKn": "ಪರಿಹಾರ"
      }
    },
    {
      "id": "b17",
      "type": "heading",
      "data": {
        "textEn": "Types of Functions in Python",
        "level": "H1",
        "textKn": "Python ನಲ್ಲಿ Functions ನ ವಿಧಗಳು"
      }
    },
    {
      "id": "b18",
      "type": "concept",
      "data": {
        "headingEn": "1. Built-in Functions",
        "bodyEn": "These functions are already provided by Python.\n\nExamples:\n• print(\"Python\")\n• len(\"Python\")\n• max(10, 20, 30)\n• range(5)",
        "headingKn": "1. Built-in Functions",
        "bodyKn": "ಈ functions ಗಳನ್ನು Python ಈಗಾಗಲೇ ಒದಗಿಸುತ್ತದೆ.\n\nಉದಾಹರಣೆಗಳು:\n• print(\"Python\")\n• len(\"Python\")\n• max(10, 20, 30)\n• range(5)"
      }
    },
    {
      "id": "b19",
      "type": "table",
      "data": {
        "captionEn": "Some common built-in functions",
        "rows": "Function | Purpose\nprint() | Display output\ninput() | Take user input\nlen() | Find length\nmax() | Largest value\nmin() | Smallest value\nsum() | Sum of values\nabs() | Absolute value\ntype() | Data type",
        "captionKn": "ಕೆಲವು ಸಾಮಾನ್ಯ built-in functions"
      }
    },
    {
      "id": "b20",
      "type": "concept",
      "data": {
        "headingEn": "2. User-Defined Functions",
        "bodyEn": "Functions created by the programmer.",
        "headingKn": "2. User-Defined Functions",
        "bodyKn": "ಪ್ರೋಗ್ರಾಮರ್ ರಚಿಸಿದ functions."
      }
    },
    {
      "id": "b21",
      "type": "code",
      "data": {
        "headingEn": "A user-defined function",
        "descEn": "",
        "code": "def greet():\n    print(\"Welcome!\")\n\ngreet()",
        "filename": "user_defined.py",
        "headingKn": "ಒಂದು user-defined function"
      }
    },
    {
      "id": "b22",
      "type": "output",
      "data": {
        "output": "Welcome!"
      }
    },
    {
      "id": "b23",
      "type": "concept",
      "data": {
        "headingEn": "FUNCTIONS WITH PARAMETERS",
        "bodyEn": "Sometimes functions need information to work. This information is called a parameter.",
        "headingKn": "FUNCTIONS WITH PARAMETERS",
        "bodyKn": "ಕೆಲವೊಮ್ಮೆ functions ಗಳಿಗೆ ಕೆಲಸ ಮಾಡಲು ಮಾಹಿತಿ ಬೇಕಾಗುತ್ತದೆ. ಈ ಮಾಹಿತಿಯನ್ನು ಒಂದು parameter ಎಂದು ಕರೆಯಲಾಗುತ್ತದೆ."
      }
    },
    {
      "id": "b24",
      "type": "code",
      "data": {
        "headingEn": "A function with a parameter",
        "descEn": "name is the parameter.",
        "code": "def greet(name):\n    print(\"Hello\", name)",
        "filename": "with_param.py",
        "headingKn": "ಒಂದು parameter ಹೊಂದಿರುವ function",
        "descKn": "name ಎಂಬುದು parameter."
      }
    },
    {
      "id": "b25",
      "type": "concept",
      "data": {
        "headingEn": "ARGUMENTS",
        "bodyEn": "The actual value passed while calling the function is called an argument.",
        "headingKn": "ARGUMENTS",
        "bodyKn": "ಒಂದು function ಅನ್ನು ಕರೆಯುವಾಗ ರವಾನಿಸಲಾದ ನಿಜವಾದ ಮೌಲ್ಯವನ್ನು ಒಂದು argument ಎಂದು ಕರೆಯಲಾಗುತ್ತದೆ."
      }
    },
    {
      "id": "b26",
      "type": "code",
      "data": {
        "headingEn": "Passing arguments",
        "descEn": "",
        "code": "def greet(name):\n    print(\"Hello\", name)\n\ngreet(\"Alice\")\ngreet(\"Rahul\")",
        "filename": "arguments.py",
        "headingKn": "Arguments ರವಾನಿಸುವುದು"
      }
    },
    {
      "id": "b27",
      "type": "output",
      "data": {
        "output": "Hello Alice\nHello Rahul"
      }
    },
    {
      "id": "b28",
      "type": "table",
      "data": {
        "captionEn": "Parameter vs Argument",
        "rows": "Parameter | Argument\nVariable in function definition | Actual value passed\nReceives data | Sends data",
        "captionKn": "Parameter vs Argument"
      }
    },
    {
      "id": "b29",
      "type": "code",
      "data": {
        "headingEn": "Parameters a and b, arguments 10 and 20",
        "descEn": "",
        "code": "def add(a, b):\n    print(a + b)\n\nadd(10, 20)",
        "filename": "param_vs_arg.py",
        "headingKn": "Parameters a ಮತ್ತು b, arguments 10 ಮತ್ತು 20"
      }
    },
    {
      "id": "b30",
      "type": "output",
      "data": {
        "output": "30"
      }
    },
    {
      "id": "b31",
      "type": "concept",
      "data": {
        "headingEn": "RETURN VALUES",
        "bodyEn": "A function can send a value back using the return keyword.",
        "headingKn": "RETURN VALUES",
        "bodyKn": "ಒಂದು function return ಕೀವರ್ಡ್ ಬಳಸಿ ಒಂದು ಮೌಲ್ಯವನ್ನು ಹಿಂದಕ್ಕೆ ಕಳುಹಿಸಬಹುದು."
      }
    },
    {
      "id": "b32",
      "type": "code",
      "data": {
        "headingEn": "Using return",
        "descEn": "",
        "code": "def greet(name):\n    message = \"Hello \" + name\n    return message\n\nresult = greet(\"Harry\")\n\nprint(result)",
        "filename": "return_value.py",
        "headingKn": "return ಬಳಸುವುದು"
      }
    },
    {
      "id": "b33",
      "type": "output",
      "data": {
        "output": "Hello Harry"
      }
    },
    {
      "id": "b34",
      "type": "concept",
      "data": {
        "headingEn": "How Return Works",
        "bodyEn": "greet(\"Harry\") → Creates message → Returns message → Stored inside result",
        "headingKn": "Return ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ",
        "bodyKn": "greet(\"Harry\") → message ರಚಿಸುತ್ತದೆ → message ಹಿಂತಿರುಗಿಸುತ್ತದೆ → result ಒಳಗೆ ಸಂಗ್ರಹಿಸಲಾಗುತ್ತದೆ"
      }
    },
    {
      "id": "b35",
      "type": "concept",
      "data": {
        "headingEn": "print( ) vs return( )",
        "bodyEn": "Many beginners confuse these two.\n• print() only displays the value — it does not return it.\n• return gives the value back to the program.",
        "headingKn": "print( ) vs return( )",
        "bodyKn": "ಅನೇಕ ಆರಂಭಿಕರು ಇವೆರಡನ್ನೂ ಗೊಂದಲಗೊಳಿಸುತ್ತಾರೆ.\n• print() ಕೇವಲ ಮೌಲ್ಯವನ್ನು ತೋರಿಸುತ್ತದೆ — ಅದನ್ನು ಹಿಂತಿರುಗಿಸುವುದಿಲ್ಲ.\n• return ಮೌಲ್ಯವನ್ನು program ಗೆ ಹಿಂದಕ್ಕೆ ನೀಡುತ್ತದೆ."
      }
    },
    {
      "id": "b36",
      "type": "code",
      "data": {
        "headingEn": "Using print( ) only",
        "descEn": "Because print() only displays the value, it does not return it.",
        "code": "def add(a, b):\n    print(a + b)\n\nresult = add(5, 7)\n\nprint(result)",
        "filename": "print_only.py",
        "headingKn": "print( ) ಮಾತ್ರ ಬಳಸುವುದು",
        "descKn": "print() ಕೇವಲ ಮೌಲ್ಯವನ್ನು ತೋರಿಸುವುದರಿಂದ, ಅದು ಅದನ್ನು ಹಿಂತಿರುಗಿಸುವುದಿಲ್ಲ."
      }
    },
    {
      "id": "b37",
      "type": "output",
      "data": {
        "output": "12\nNone"
      }
    },
    {
      "id": "b38",
      "type": "code",
      "data": {
        "headingEn": "Using return( )",
        "descEn": "return gives the value back to the program.",
        "code": "def add(a, b):\n    return a + b\n\nresult = add(5, 7)\n\nprint(result)",
        "filename": "return_only.py",
        "headingKn": "return( ) ಬಳಸುವುದು",
        "descKn": "return ಮೌಲ್ಯವನ್ನು program ಗೆ ಹಿಂದಕ್ಕೆ ನೀಡುತ್ತದೆ."
      }
    },
    {
      "id": "b39",
      "type": "output",
      "data": {
        "output": "12"
      }
    },
    {
      "id": "b40",
      "type": "concept",
      "data": {
        "headingEn": "MULTIPLE PARAMETERS",
        "bodyEn": "Functions can accept more than one parameter.",
        "headingKn": "MULTIPLE PARAMETERS",
        "bodyKn": "Functions ಒಂದಕ್ಕಿಂತ ಹೆಚ್ಚು parameter ಸ್ವೀಕರಿಸಬಹುದು."
      }
    },
    {
      "id": "b41",
      "type": "code",
      "data": {
        "headingEn": "A function with two parameters",
        "descEn": "",
        "code": "def student(name, age):\n    print(name)\n    print(age)\n\nstudent(\"Rahul\", 20)",
        "filename": "multiple_params.py",
        "headingKn": "ಎರಡು parameters ಹೊಂದಿರುವ ಒಂದು function"
      }
    },
    {
      "id": "b42",
      "type": "output",
      "data": {
        "output": "Rahul\n20"
      }
    },
    {
      "id": "b43",
      "type": "concept",
      "data": {
        "headingEn": "DEFAULT PARAMETER VALUE",
        "bodyEn": "Sometimes we want a function to use a value automatically if no argument is provided.",
        "headingKn": "DEFAULT PARAMETER VALUE",
        "bodyKn": "ಕೆಲವೊಮ್ಮೆ ಯಾವುದೇ argument ನೀಡದಿದ್ದರೆ ಒಂದು function ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಒಂದು ಮೌಲ್ಯ ಬಳಸಬೇಕೆಂದು ನಾವು ಬಯಸುತ್ತೇವೆ."
      }
    },
    {
      "id": "b44",
      "type": "code",
      "data": {
        "headingEn": "A default parameter",
        "descEn": "If no argument is passed, Python automatically uses the default value.",
        "code": "def greet(name=\"Guest\"):\n    print(\"Hello\", name)\n\ngreet()\n\ngreet(\"Alice\")",
        "filename": "default_param.py",
        "headingKn": "ಒಂದು default parameter",
        "descKn": "ಯಾವುದೇ argument ರವಾನಿಸದಿದ್ದರೆ, Python ಸ್ವಯಂಚಾಲಿತವಾಗಿ default ಮೌಲ್ಯ ಬಳಸುತ್ತದೆ."
      }
    },
    {
      "id": "b45",
      "type": "output",
      "data": {
        "output": "Hello Guest\nHello Alice"
      }
    },
    {
      "id": "b46",
      "type": "code",
      "data": {
        "headingEn": "Another example — default exponent",
        "descEn": "",
        "code": "def power(base, exponent=2):\n    return base ** exponent\n\nprint(power(5))\n\nprint(power(5, 3))",
        "filename": "default_power.py",
        "headingKn": "ಇನ್ನೊಂದು ಉದಾಹರಣೆ — default exponent"
      }
    },
    {
      "id": "b47",
      "type": "output",
      "data": {
        "output": "25\n125"
      }
    },
    {
      "id": "b48",
      "type": "concept",
      "data": {
        "headingEn": "SCOPE OF VARIABLES",
        "bodyEn": "Variables created inside a function exist only inside that function. This happens because the variable is a local variable.",
        "headingKn": "SCOPE OF VARIABLES",
        "bodyKn": "ಒಂದು function ಒಳಗೆ ರಚಿಸಿದ variables ಆ function ಒಳಗೆ ಮಾತ್ರ ಅಸ್ತಿತ್ವದಲ್ಲಿರುತ್ತವೆ. ಇದು ಸಂಭವಿಸುತ್ತದೆ ಏಕೆಂದರೆ ಆ variable ಒಂದು local variable ಆಗಿದೆ."
      }
    },
    {
      "id": "b49",
      "type": "code",
      "data": {
        "headingEn": "A local variable is not visible outside its function",
        "descEn": "",
        "code": "def demo():\n    x = 10\n    print(x)\n\ndemo()\n\nprint(x)",
        "filename": "scope.py",
        "headingKn": "ಒಂದು local variable ಅದರ function ಹೊರಗೆ ಕಾಣಿಸುವುದಿಲ್ಲ"
      }
    },
    {
      "id": "b50",
      "type": "output",
      "data": {
        "output": "10\nNameError"
      }
    },
    {
      "id": "b51",
      "type": "heading",
      "data": {
        "textEn": "Recursion",
        "level": "H1",
        "textKn": "Recursion"
      }
    },
    {
      "id": "b52",
      "type": "concept",
      "data": {
        "headingEn": "WHAT IS RECURSION?",
        "bodyEn": "A recursive function is a function that calls itself to solve a smaller version of the same problem.\n\nInstead of solving the entire problem at once, recursion breaks it into smaller subproblems until a stopping condition is reached.",
        "headingKn": "RECURSION ಎಂದರೇನು?",
        "bodyKn": "ಒಂದು recursive function ಎಂದರೆ ಅದೇ ಸಮಸ್ಯೆಯ ಒಂದು ಚಿಕ್ಕ ಆವೃತ್ತಿಯನ್ನು ಪರಿಹರಿಸಲು ತನ್ನನ್ನೇ ಕರೆಯುವ ಒಂದು function ಆಗಿದೆ.\n\nಇಡೀ ಸಮಸ್ಯೆಯನ್ನು ಒಮ್ಮೆಗೆ ಪರಿಹರಿಸುವ ಬದಲು, recursion ಅದನ್ನು ಒಂದು ನಿಲುಗಡೆ ಸ್ಥಿತಿ ತಲುಪುವವರೆಗೆ ಚಿಕ್ಕ ಉಪಸಮಸ್ಯೆಗಳಾಗಿ ವಿಭಜಿಸುತ್ತದೆ."
      }
    },
    {
      "id": "b53",
      "type": "concept",
      "data": {
        "headingEn": "Two Important Parts of Recursion",
        "bodyEn": "Every recursive function must have:\n\n1. Base Case — the condition where recursion stops.\n2. Recursive Case — the function calls itself with a smaller problem.\n\nWithout a base case, recursion never ends and causes a RecursionError.",
        "headingKn": "Recursion ನ ಎರಡು ಪ್ರಮುಖ ಭಾಗಗಳು",
        "bodyKn": "ಪ್ರತಿ recursive function ಈ ಕೆಳಗಿನವುಗಳನ್ನು ಹೊಂದಿರಬೇಕು:\n\n1. Base Case — recursion ನಿಲ್ಲುವ ಸ್ಥಿತಿ.\n2. Recursive Case — function ಚಿಕ್ಕ ಸಮಸ್ಯೆಯೊಂದಿಗೆ ತನ್ನನ್ನೇ ಕರೆಯುತ್ತದೆ.\n\nಒಂದು base case ಇಲ್ಲದೆ, recursion ಎಂದಿಗೂ ಕೊನೆಗೊಳ್ಳುವುದಿಲ್ಲ ಮತ್ತು RecursionError ಉಂಟುಮಾಡುತ್ತದೆ."
      }
    },
    {
      "id": "b54",
      "type": "concept",
      "data": {
        "headingEn": "Factorial Example",
        "bodyEn": "Mathematically, 5! = 5 × 4 × 3 × 2 × 1\n\nAlso:\n• 5! = 5 × 4!\n• 4! = 4 × 3!\n• 3! = 3 × 2!\n• 2! = 2 × 1!\n• 1! = 1",
        "headingKn": "Factorial ಉದಾಹರಣೆ",
        "bodyKn": "ಗಣಿತೀಯವಾಗಿ, 5! = 5 × 4 × 3 × 2 × 1\n\nಅಲ್ಲದೆ:\n• 5! = 5 × 4!\n• 4! = 4 × 3!\n• 3! = 3 × 2!\n• 2! = 2 × 1!\n• 1! = 1"
      }
    },
    {
      "id": "b55",
      "type": "code",
      "data": {
        "headingEn": "Recursive Program",
        "descEn": "",
        "code": "def factorial(n):\n\n    if n == 0 or n == 1:\n        return 1\n\n    else:\n        return n * factorial(n - 1)\n\nprint(factorial(5))",
        "filename": "factorial.py",
        "headingKn": "Recursive Program"
      }
    },
    {
      "id": "b56",
      "type": "output",
      "data": {
        "output": "120"
      }
    },
    {
      "id": "b57",
      "type": "concept",
      "data": {
        "headingEn": "How Recursion Works",
        "bodyEn": "",
        "headingKn": "Recursion ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ"
      }
    },
    {
      "id": "b64",
      "type": "math",
      "data": {
        "formula": "factorial(5)\n= 5 × factorial(4)\n= 5 × 4 × factorial(3)\n= 5 × 4 × 3 × factorial(2)\n= 5 × 4 × 3 × 2 × factorial(1)\n= 5 × 4 × 3 × 2 × 1\n= 120"
      }
    },
    {
      "id": "b58",
      "type": "concept",
      "data": {
        "headingEn": "Call Stack Visualization",
        "bodyEn": "factorial(5) → factorial(4) → factorial(3) → factorial(2) → factorial(1)\n\nBase Case Reached — Return 1\nReturn 2 ← Return 6 ← Return 24 ← Return 120\n\nThe function calls go down the stack until the base case is reached. Then the results are returned back up the stack.",
        "headingKn": "Call Stack Visualization",
        "bodyKn": "factorial(5) → factorial(4) → factorial(3) → factorial(2) → factorial(1)\n\nBase Case ತಲುಪಿದೆ — Return 1\nReturn 2 ← Return 6 ← Return 24 ← Return 120\n\nFunction ಕರೆಗಳು base case ತಲುಪುವವರೆಗೆ ಸ್ಟ್ಯಾಕ್ ಕೆಳಗೆ ಹೋಗುತ್ತವೆ. ನಂತರ ಫಲಿತಾಂಶಗಳು ಸ್ಟ್ಯಾಕ್ ಮೇಲಕ್ಕೆ ಹಿಂತಿರುಗುತ್ತವೆ."
      }
    },
    {
      "id": "b59",
      "type": "concept",
      "data": {
        "headingEn": "Advantages of Recursion",
        "bodyEn": "• Shorter and cleaner code for some problems\n• Natural solution for tree and graph structures\n• Useful for divide-and-conquer algorithms\n• Makes mathematical definitions easier to implement",
        "headingKn": "Recursion ನ ಅನುಕೂಲಗಳು",
        "bodyKn": "• ಕೆಲವು ಸಮಸ್ಯೆಗಳಿಗೆ ಚಿಕ್ಕ ಮತ್ತು ಸ್ವಚ್ಛವಾದ ಕೋಡ್\n• Tree ಮತ್ತು graph structures ಗಳಿಗೆ ಸಹಜ ಪರಿಹಾರ\n• Divide-and-conquer algorithms ಗಳಿಗೆ ಉಪಯುಕ್ತ\n• ಗಣಿತೀಯ ವ್ಯಾಖ್ಯಾನಗಳನ್ನು ಜಾರಿಗೊಳಿಸಲು ಸುಲಭಗೊಳಿಸುತ್ತದೆ"
      }
    },
    {
      "id": "b60",
      "type": "concept",
      "data": {
        "headingEn": "Disadvantages of Recursion",
        "bodyEn": "• Uses more memory because each call is stored on the call stack\n• Can be slower than loops\n• Incorrect base cases may cause infinite recursion\n• Difficult to debug for beginners",
        "headingKn": "Recursion ನ ಅನಾನುಕೂಲಗಳು",
        "bodyKn": "• ಪ್ರತಿ ಕರೆ call stack ನಲ್ಲಿ ಸಂಗ್ರಹವಾಗುವುದರಿಂದ ಹೆಚ್ಚು memory ಬಳಸುತ್ತದೆ\n• Loops ಗಿಂತ ನಿಧಾನವಾಗಬಹುದು\n• ತಪ್ಪಾದ base cases ಅನಂತ recursion ಗೆ ಕಾರಣವಾಗಬಹುದು\n• ಆರಂಭಿಕರಿಗೆ debug ಮಾಡಲು ಕಷ್ಟ"
      }
    },
    {
      "id": "b61",
      "type": "example",
      "data": {
        "tag": "Real-Life Examples of Functions",
        "textEn": "ATM → Check Balance\nCalculator → Add Numbers\nCamera → Take Photo\nPrinter → Print Document\nMobile App → Login\nE-commerce Website → Place Order\n\nEach performs one specific task and can be reused whenever needed.",
        "textKn": "ATM → Balance ಪರಿಶೀಲಿಸಿ\nCalculator → ಸಂಖ್ಯೆಗಳನ್ನು ಸೇರಿಸಿ\nCamera → ಫೋಟೋ ತೆಗೆಯಿರಿ\nPrinter → Document ಮುದ್ರಿಸಿ\nMobile App → Login\nE-commerce Website → Order ಇರಿಸಿ\n\nಪ್ರತಿಯೊಂದೂ ಒಂದು ನಿರ್ದಿಷ್ಟ ಕಾರ್ಯ ನಿರ್ವಹಿಸುತ್ತದೆ ಮತ್ತು ಅಗತ್ಯವಿದ್ದಾಗಲೆಲ್ಲಾ ಮರುಬಳಕೆ ಮಾಡಬಹುದು."
      }
    },
    {
      "id": "b62",
      "type": "example",
      "data": {
        "tag": "Real-Life Examples of Recursion",
        "textEn": "Exploring nested folders on a computer\nFamily tree traversal\nOrganization hierarchy\nTree traversal in AI and Data Structures\nSearching files in directories\nBinary Search\nDepth-First Search (DFS)",
        "textKn": "ಕಂಪ್ಯೂಟರ್‌ನಲ್ಲಿ nested folders ಎಕ್ಸ್‌ಪ್ಲೋರ್ ಮಾಡುವುದು\nFamily tree traversal\nಸಂಸ್ಥೆಯ ಶ್ರೇಣಿ (hierarchy)\nAI ಮತ್ತು Data Structures ನಲ್ಲಿ Tree traversal\nDirectories ನಲ್ಲಿ files ಹುಡುಕುವುದು\nBinary Search\nDepth-First Search (DFS)"
      }
    },
    {
      "type": "concept",
      "data": {
        "headingEn": "Key Takeaways",
        "headingKn": "ಮುಖ್ಯ ಅಂಶಗಳು",
        "bodyEn": "• A function packages reusable code behind a name -- def defines it, parameters accept inputs, and return sends a result back (unlike print(), which only displays a value without letting the program use it further).\n• Functions can have default parameter values, accept multiple arguments, and each function has its own local scope -- variables created inside a function are invisible outside it.\n• Recursion is a function calling itself to solve a smaller version of the same problem, always needing a base case (to stop) and a recursive case (to progress) -- without a base case, recursion never terminates.\n• Recursion trades simplicity of code for the overhead and risk of a growing call stack -- elegant for problems like factorial or tree traversal, but a loop is often more efficient and safer for simple repetition.",
        "bodyKn": "• ಒಂದು function ಮರುಬಳಕೆ ಮಾಡಬಹುದಾದ ಕೋಡ್ ಅನ್ನು ಒಂದು ಹೆಸರಿನ ಹಿಂದೆ ಪ್ಯಾಕೇಜ್ ಮಾಡುತ್ತದೆ -- def ಇದನ್ನು ವ್ಯಾಖ್ಯಾನಿಸುತ್ತದೆ, parameters inputs ಸ್ವೀಕರಿಸುತ್ತವೆ, ಮತ್ತು return ಒಂದು ಫಲಿತಾಂಶವನ್ನು ಹಿಂದಕ್ಕೆ ಕಳುಹಿಸುತ್ತದೆ (print() ಗಿಂತ ಭಿನ್ನವಾಗಿ, ಇದು program ಗೆ ಮುಂದೆ ಬಳಸಲು ಅನುಮತಿಸದೆ ಕೇವಲ ಒಂದು ಮೌಲ್ಯ ತೋರಿಸುತ್ತದೆ).\n• Functions default parameter ಮೌಲ್ಯಗಳನ್ನು ಹೊಂದಬಹುದು, ಅನೇಕ arguments ಸ್ವೀಕರಿಸಬಹುದು, ಮತ್ತು ಪ್ರತಿ function ತನ್ನದೇ local scope ಹೊಂದಿದೆ -- ಒಂದು function ಒಳಗೆ ರಚಿಸಿದ variables ಅದರ ಹೊರಗೆ ಅಗೋಚರ.\n• Recursion ಎಂದರೆ ಒಂದು function ಅದೇ ಸಮಸ್ಯೆಯ ಒಂದು ಚಿಕ್ಕ ಆವೃತ್ತಿ ಪರಿಹರಿಸಲು ತನ್ನನ್ನೇ ಕರೆಯುವುದು, ಯಾವಾಗಲೂ ಒಂದು base case (ನಿಲ್ಲಿಸಲು) ಮತ್ತು ಒಂದು recursive case (ಮುಂದುವರಿಯಲು) ಬೇಕಾಗುತ್ತದೆ -- ಒಂದು base case ಇಲ್ಲದೆ, recursion ಎಂದಿಗೂ ಕೊನೆಗೊಳ್ಳುವುದಿಲ್ಲ.\n• Recursion ಕೋಡ್‌ನ ಸರಳತೆಯನ್ನು ಬೆಳೆಯುತ್ತಿರುವ call stack ನ overhead ಮತ್ತು ಅಪಾಯದೊಂದಿಗೆ ವಿನಿಮಯ ಮಾಡುತ್ತದೆ -- factorial ಅಥವಾ tree traversal ನಂತಹ ಸಮಸ್ಯೆಗಳಿಗೆ ಸೊಗಸಾದ, ಆದರೆ ಸರಳ ಪುನರಾವರ್ತನೆಗೆ ಒಂದು loop ಆಗಾಗ ಹೆಚ್ಚು ಪರಿಣಾಮಕಾರಿ ಮತ್ತು ಸುರಕ್ಷಿತ."
      }
    },
    {
      "id": "b63",
      "type": "quiz",
      "data": {
        "questions": [
          {
            "q": "What is a function in Python?",
            "opts": [
              "A variable that stores multiple values",
              "A reusable block of code that performs a specific task",
              "A loop that repeats code until a condition is False",
              "A data type used to store key-value pairs"
            ],
            "correct": 1,
            "qKn": "Python ನಲ್ಲಿ ಒಂದು function ಎಂದರೇನು?",
            "optsKn": [
              "ಅನೇಕ ಮೌಲ್ಯಗಳನ್ನು ಸಂಗ್ರಹಿಸುವ ಒಂದು variable",
              "ಒಂದು ನಿರ್ದಿಷ್ಟ ಕೆಲಸ ನಿರ್ವಹಿಸುವ ಮರುಬಳಕೆ ಮಾಡಬಹುದಾದ ಕೋಡ್ ಬ್ಲಾಕ್",
              "ಒಂದು condition False ಆಗುವವರೆಗೆ ಕೋಡ್ ಪುನರಾವರ್ತಿಸುವ ಒಂದು loop",
              "key-value ಜೋಡಿಗಳನ್ನು ಸಂಗ್ರಹಿಸಲು ಬಳಸುವ ಒಂದು data type"
            ]
          },
          {
            "q": "What is the difference between a parameter and an argument?",
            "opts": [
              "They mean exactly the same thing",
              "A parameter is the variable in the function definition; an argument is the actual value passed when calling it",
              "A parameter is passed at call time; an argument is defined inside the function",
              "Parameters are only used with built-in functions"
            ],
            "correct": 1,
            "qKn": "ಒಂದು parameter ಮತ್ತು ಒಂದು argument ನಡುವಿನ ವ್ಯತ್ಯಾಸ ಏನು?",
            "optsKn": [
              "ಅವು ನಿಖರವಾಗಿ ಅದೇ ಅರ್ಥ",
              "ಒಂದು parameter function definition ನಲ್ಲಿನ variable; ಒಂದು argument ಅದನ್ನು ಕರೆಯುವಾಗ ರವಾನಿಸಿದ ನಿಜ ಮೌಲ್ಯ",
              "ಒಂದು parameter call time ನಲ್ಲಿ ರವಾನಿಸಲಾಗುತ್ತದೆ; ಒಂದು argument function ಒಳಗೆ ವ್ಯಾಖ್ಯಾನಿಸಲಾಗುತ್ತದೆ",
              "Parameters ಕೇವಲ built-in functions ಜೊತೆ ಬಳಸಲಾಗುತ್ತದೆ"
            ]
          },
          {
            "q": "What does this code print? \ndef add(a, b):\n    print(a + b)\n\nresult = add(5, 7)\nprint(result)",
            "opts": [
              "12\\n12",
              "12\\nNone",
              "None\\n12",
              "Error"
            ],
            "correct": 1,
            "qKn": "ಈ ಕೋಡ್ ಏನನ್ನು ಮುದ್ರಿಸುತ್ತದೆ?\ndef add(a, b):\n    print(a + b)\n\nresult = add(5, 7)\nprint(result)",
            "optsKn": [
              "12\\n12",
              "12\\nNone",
              "None\\n12",
              "Error"
            ]
          },
          {
            "q": "What will greet() print, given def greet(name=\"Guest\"): print(\"Hello\", name) and calling greet() with no argument?",
            "opts": [
              "Hello None",
              "Error, since no argument was passed",
              "Hello Guest",
              "Nothing is printed"
            ],
            "correct": 2,
            "qKn": "greet() ಏನನ್ನು ಮುದ್ರಿಸುತ್ತದೆ, def greet(name=\"Guest\"): print(\"Hello\", name) ಇದ್ದು ಯಾವುದೇ argument ಇಲ್ಲದೆ greet() ಕರೆದಾಗ?",
            "optsKn": [
              "Hello None",
              "Error, ಏಕೆಂದರೆ ಯಾವುದೇ argument ರವಾನಿಸಲಾಗಿಲ್ಲ",
              "Hello Guest",
              "ಏನೂ ಮುದ್ರಿಸುವುದಿಲ್ಲ"
            ]
          },
          {
            "q": "What are the two essential parts of every recursive function?",
            "opts": [
              "A loop and a condition",
              "A base case and a recursive case",
              "A parameter and a return value",
              "An input and an output"
            ],
            "correct": 1,
            "qKn": "ಪ್ರತಿ recursive function ನ ಎರಡು ಅಗತ್ಯ ಭಾಗಗಳು ಯಾವುವು?",
            "optsKn": [
              "ಒಂದು loop ಮತ್ತು ಒಂದು condition",
              "ಒಂದು base case ಮತ್ತು ಒಂದು recursive case",
              "ಒಂದು parameter ಮತ್ತು ಒಂದು return ಮೌಲ್ಯ",
              "ಒಂದು input ಮತ್ತು ಒಂದು output"
            ]
          },
          {
            "q": "What happens if a recursive function has no base case?",
            "opts": [
              "It runs once and stops safely",
              "It automatically returns None",
              "It causes a RecursionError from infinite calls",
              "It behaves exactly like a normal loop"
            ],
            "correct": 2,
            "qKn": "ಒಂದು recursive function ಗೆ base case ಇಲ್ಲದಿದ್ದರೆ ಏನಾಗುತ್ತದೆ?",
            "optsKn": [
              "ಇದು ಒಮ್ಮೆ run ಆಗಿ ಸುರಕ್ಷಿತವಾಗಿ ನಿಲ್ಲುತ್ತದೆ",
              "ಇದು ಸ್ವಯಂಚಾಲಿತವಾಗಿ None ಹಿಂತಿರುಗಿಸುತ್ತದೆ",
              "ಇದು infinite calls ಗಳಿಂದ ಒಂದು RecursionError ಉಂಟುಮಾಡುತ್ತದೆ",
              "ಇದು ಒಂದು ಸಾಮಾನ್ಯ loop ನಂತೆ ನಿಖರವಾಗಿ ವರ್ತಿಸುತ್ತದೆ"
            ]
          }
        ]
      }
    }
  ]
};
