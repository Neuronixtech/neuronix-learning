module.exports = {
  "phaseId": "6a358e5ffc29b5a47144467a",
  "moduleId": "6a358e60fc29b5a4714446a7",
  "order": 1,
  "type": "reading",
  "duration": 25,
  "difficulty": "beginner",
  "status": "published",
  "title": "Operators, type( ) Function, Typecasting, and input( ) Function",
  "titleKn": "ಆಪರೇಟರ್ಸ್, type() ಫಂಕ್ಷನ್, ಟೈಪ್‌ಕಾಸ್ಟಿಂಗ್ ಅಂಡ್ input() ಫಂಕ್ಷನ್",
  "desc": "In this chapter, you learn how operators perform actions on data, how the type() function reveals a variable's data type, how typecasting converts data from one type to another, and how the input() function captures user input during program execution.",
  "descKn": "ಈ chapter ನಲ್ಲಿ, operators ಡೇಟಾ ಮೇಲೆ actions ಹೇಗೆ ನಿರ್ವಹಿಸುತ್ತವೆ, type() function ಒಂದು variable ನ data type ಹೇಗೆ ಬಹಿರಂಗಪಡಿಸುತ್ತದೆ, typecasting ಡೇಟಾವನ್ನು ಒಂದು type ಇಂದ ಇನ್ನೊಂದಕ್ಕೆ ಹೇಗೆ ಪರಿವರ್ತಿಸುತ್ತದೆ, ಮತ್ತು program execution ಸಮಯದಲ್ಲಿ input() function ಬಳಕೆದಾರ input ಹೇಗೆ ಸೆರೆಹಿಡಿಯುತ್ತದೆ ಎಂದು ನೀವು ಕಲಿಯುತ್ತೀರಿ.",
  "objectives": [
    "Use arithmetic, comparison, assignment, and logical operators in Python",
    "Apply compound assignment operators (+=, -=, *=, /=) to update variables",
    "Use the type() function to check the data type of a value",
    "Convert between data types using int(), float(), str(), and bool()",
    "Read user input with input() and understand it always returns a string",
    "Use typecasting to perform operations on mixed data types"
  ],
  "objectivesKn": [
    "Python ನಲ್ಲಿ arithmetic, comparison, assignment, ಮತ್ತು logical operators ಬಳಸಿ",
    "Variables update ಮಾಡಲು compound assignment operators (+=, -=, *=, /=) ಅನ್ವಯಿಸಿ",
    "ಮೌಲ್ಯದ data type ಪರೀಕ್ಷಿಸಲು type() function ಬಳಸಿ",
    "int(), float(), str(), bool() ಬಳಸಿ data types ನಡುವೆ ಪರಿವರ್ತಿಸಿ",
    "input() ದಿಂದ user input ಓದಿ ಅದು ಯಾವಾಗಲೂ string return ಮಾಡುತ್ತದೆ ಎಂಬುದನ್ನು ಅರ್ಥ ಮಾಡಿಕೊಳ್ಳಿ",
    "Mixed data types ನಲ್ಲಿ operations ಮಾಡಲು typecasting ಬಳಸಿ"
  ],
  "blocks": [
    {
      "id": "b1",
      "type": "concept",
      "data": {
        "headingEn": "Operators in Python",
        "bodyEn": "An operator is a symbol or keyword that performs an operation on one or more values (called operands).",
        "headingKn": "Python ನಲ್ಲಿ Operators",
        "bodyKn": "ಒಂದು operator ಒಂದು symbol ಅಥವಾ keyword, ಇದು ಒಂದು ಅಥವಾ ಹೆಚ್ಚು values (operands ಎಂದು ಕರೆಯಲಾಗುತ್ತದೆ) ಮೇಲೆ ಒಂದು operation ನಿರ್ವಹಿಸುತ್ತದೆ."
      }
    },
    {
      "id": "b3",
      "type": "code",
      "data": {
        "code": "a = 10\nb = 5\n\nprint(a + b)",
        "descEn": "+ is the operator.\n10 and 5 are operands.",
        "descKn": "+ ಎಂಬುದು operator.\n10 ಮತ್ತು 5 operands."
      }
    },
    {
      "id": "b4",
      "type": "output",
      "data": {
        "output": "15"
      }
    },
    {
      "id": "b6",
      "type": "text",
      "data": {
        "headingEn": "Python has many types of operators. The most common are:",
        "descEn": "Arithmetic Operators\nAssignment Operators\nComparison Operators\nLogical Operators",
        "headingKn": "Python ಅನೇಕ ರೀತಿಯ operators ಹೊಂದಿದೆ. ಅತ್ಯಂತ ಸಾಮಾನ್ಯವಾದವು:",
        "descKn": "Arithmetic Operators\nAssignment Operators\nComparison Operators\nLogical Operators"
      }
    },
    {
      "id": "b7",
      "type": "text",
      "data": {
        "headingEn": "Arithmetic Operators",
        "descEn": "Arithmetic operators perform mathematical calculations.",
        "headingKn": "Arithmetic Operators",
        "descKn": "Arithmetic operators ಗಣಿತದ ಲೆಕ್ಕಾಚಾರಗಳನ್ನು ನಿರ್ವಹಿಸುತ್ತವೆ."
      }
    },
    {
      "id": "b8",
      "type": "table",
      "data": {
        "rows": "| Operator | Meaning             | Example  | Result |\n\n| `+`      | Addition            | `5 + 2`  | `7`    |\n| `-`      | Subtraction         | `5 - 2`  | `3`    |\n| `*`      | Multiplication      | `5 * 2`  | `10`   |\n| `/`      | Division            | `5 / 2`  | `2.5`  |\n| `//`     | Floor Division      | `5 // 2` | `2`    |\n| `%`      | Modulus (Remainder) | `5 % 2`  | `1`    |\n| `**`     | Exponent (Power)    | `5 ** 2` | `25`   |\n"
      }
    },
    {
      "id": "b10",
      "type": "code",
      "data": {
        "code": "a = 20\nb = 3\n\nprint(a + b)\nprint(a - b)\nprint(a * b)\nprint(a / b)\nprint(a // b)\nprint(a % b)\nprint(a ** b)",
        "filename": "example"
      }
    },
    {
      "id": "b11",
      "type": "output",
      "data": {
        "output": "23\n17\n60\n6.666666666666667\n6\n2\n8000"
      }
    },
    {
      "id": "b13",
      "type": "text",
      "data": {
        "headingEn": "Assignment Operators",
        "descEn": "Assignment operators are used to assign or update values stored in variables.",
        "headingKn": "Assignment Operators",
        "descKn": "Assignment operators variables ನಲ್ಲಿ ಸಂಗ್ರಹಿಸಿದ ಮೌಲ್ಯಗಳನ್ನು ನಿಯೋಜಿಸಲು ಅಥವಾ ಅಪ್ಡೇಟ್ ಮಾಡಲು ಬಳಸಲಾಗುತ್ತದೆ."
      }
    },
    {
      "id": "b14",
      "type": "code",
      "data": {
        "code": "a = 10",
        "descEn": "The value 10 is assigned to a.",
        "descKn": "ಮೌಲ್ಯ 10 ಅನ್ನು a ಗೆ ನಿಯೋಜಿಸಲಾಗಿದೆ."
      }
    },
    {
      "id": "b17",
      "type": "heading",
      "data": {
        "textEn": "Add and Assign (+=)",
        "textKn": "Add and Assign (+=)"
      }
    },
    {
      "id": "b15",
      "type": "code",
      "data": {
        "descEn": "",
        "code": "a = 10\na += 5\n\n#This is same as \n\na = a + 5"
      }
    },
    {
      "id": "b16",
      "type": "output",
      "data": {
        "output": "15"
      }
    },
    {
      "id": "b18",
      "type": "heading",
      "data": {
        "textEn": "Subtract and Assign (-=)",
        "textKn": "Subtract and Assign (-=)"
      }
    },
    {
      "id": "b19",
      "type": "code",
      "data": {
        "code": "a = 10\na -= 2\n\n#Equivalent to:\n\na = a - 2"
      }
    },
    {
      "id": "b20",
      "type": "output",
      "data": {
        "output": "8"
      }
    },
    {
      "id": "b21",
      "type": "heading",
      "data": {
        "textEn": "Multiply and Assign (*=)",
        "textKn": "Multiply and Assign (*=)"
      }
    },
    {
      "id": "b22",
      "type": "code",
      "data": {
        "code": "a = 10\na *= 3\n\n#Equivalent to:\n\na = a * 3"
      }
    },
    {
      "id": "b23",
      "type": "output",
      "data": {
        "output": "30"
      }
    },
    {
      "id": "b24",
      "type": "heading",
      "data": {
        "textEn": "Divide and Assign (/=)",
        "textKn": "Divide and Assign (/=)"
      }
    },
    {
      "id": "b25",
      "type": "code",
      "data": {
        "code": "a = 20\na /= 4\n\n#Equivalent to:\n\na = a / 4 "
      }
    },
    {
      "id": "b26",
      "type": "output",
      "data": {
        "output": "5"
      }
    },
    {
      "id": "b27",
      "type": "text",
      "data": {
        "headingEn": "Comparison Operators",
        "descEn": "Comparison operators compare two values and always return a Boolean value (True or False).",
        "headingKn": "Comparison Operators",
        "descKn": "Comparison operators ಎರಡು ಮೌಲ್ಯಗಳನ್ನು ಹೋಲಿಸುತ್ತವೆ ಮತ್ತು ಯಾವಾಗಲೂ ಒಂದು Boolean ಮೌಲ್ಯ (True ಅಥವಾ False) ಹಿಂತಿರುಗಿಸುತ್ತವೆ."
      }
    },
    {
      "id": "b28",
      "type": "table",
      "data": {
        "rows": "| Operator | Meaning                  | Example  |\n\n| `==`     | Equal to                 | `5 == 5` |\n| `!=`     | Not equal to             | `5 != 3` |\n| `>`      | Greater than             | `10 > 5` |\n| `<`      | Less than                | `3 < 7`  |\n| `>=`     | Greater than or equal to | `5 >= 5` |\n| `<=`     | Less than or equal to    | `3 <= 5` |\n"
      }
    },
    {
      "id": "b81",
      "type": "code",
      "data": {
        "code": "# Equal to (==)\na = 5\nb = 5\nprint(a == b)   # True\n\n# Not equal to (!=)\na = 5\nb = 3\nprint(a != b)   # True\n\n# Greater than (>)\na = 10\nb = 5\nprint(a > b)    # True\n\n# Less than (<)\na = 3\nb = 7\nprint(a < b)    # True\n\n# Greater than or equal to (>=)\na = 5\nb = 5\nprint(a >= b)   # True\n\n# Less than or equal to (<=)\na = 3\nb = 5\nprint(a <= b)   # True\n\n\n#Example \n\nnum1 = int(input(\"Enter first number: \"))\nnum2 = int(input(\"Enter second number: \"))\n\nprint(\"Equal to:\", num1 == num2)\nprint(\"Not equal to:\", num1 != num2)\nprint(\"Greater than:\", num1 > num2)\nprint(\"Less than:\", num1 < num2)\nprint(\"Greater than or equal to:\", num1 >= num2)\nprint(\"Less than or equal to:\", num1 <= num2)",
        "metrics": ""
      }
    },
    {
      "id": "b82",
      "type": "output",
      "data": {
        "output": "Enter first number: 10\nEnter second number: 5\n\nEqual to: False\nNot equal to: True\nGreater than: True\nLess than: False\nGreater than or equal to: True\nLess than or equal to: False"
      }
    },
    {
      "id": "b29",
      "type": "text",
      "data": {
        "headingEn": "Logical Operators",
        "descEn": "Logical operators combine or reverse Boolean expressions.\n\nThere are three logical operators:\n\n1)and\n2)or\n3)not",
        "headingKn": "Logical Operators",
        "descKn": "Logical operators Boolean expressions ಗಳನ್ನು ಸಂಯೋಜಿಸುತ್ತವೆ ಅಥವಾ ಹಿಮ್ಮುಖಗೊಳಿಸುತ್ತವೆ.\n\nಮೂರು logical operators ಇವೆ:\n\n1)and\n2)or\n3)not"
      }
    },
    {
      "id": "b31",
      "type": "text",
      "data": {
        "headingEn": "and",
        "descEn": "Returns True only if both conditions are True.",
        "headingKn": "and",
        "descKn": "ಎರಡೂ conditions True ಆಗಿದ್ದರೆ ಮಾತ್ರ True ಹಿಂತಿರುಗಿಸುತ್ತದೆ."
      }
    },
    {
      "id": "b32",
      "type": "code",
      "data": {
        "code": "age = 20\n\nprint(age > 18 and age < 25)"
      }
    },
    {
      "id": "b33",
      "type": "output",
      "data": {
        "output": "True"
      }
    },
    {
      "id": "b34",
      "type": "text",
      "data": {
        "headingEn": "or",
        "descEn": "Returns True if at least one condition is True.",
        "headingKn": "or",
        "descKn": "ಕನಿಷ್ಠ ಒಂದು condition True ಆಗಿದ್ದರೆ True ಹಿಂತಿರುಗಿಸುತ್ತದೆ."
      }
    },
    {
      "id": "b35",
      "type": "code",
      "data": {
        "code": "print(5 > 10 or 8 > 3)"
      }
    },
    {
      "id": "b36",
      "type": "output",
      "data": {
        "output": "True"
      }
    },
    {
      "id": "b37",
      "type": "text",
      "data": {
        "headingEn": "not",
        "descEn": "Reverses the Boolean value.",
        "headingKn": "not",
        "descKn": "Boolean ಮೌಲ್ಯವನ್ನು ಹಿಮ್ಮುಖಗೊಳಿಸುತ್ತದೆ."
      }
    },
    {
      "id": "b38",
      "type": "code",
      "data": {
        "code": "print(not True)"
      }
    },
    {
      "id": "b39",
      "type": "output",
      "data": {
        "output": "False"
      }
    },
    {
      "id": "b40",
      "type": "text",
      "data": {
        "headingEn": "type( ) Function",
        "descEn": "The type( ) function tells you the data type of a variable or value.",
        "headingKn": "type( ) Function",
        "descKn": "type() function ಒಂದು variable ಅಥವಾ ಮೌಲ್ಯದ data type ಅನ್ನು ಹೇಳುತ್ತದೆ."
      }
    },
    {
      "id": "b41",
      "type": "code",
      "data": {
        "code": "a = 31\nprint(type(a))"
      }
    },
    {
      "id": "b42",
      "type": "output",
      "data": {
        "output": "<class 'int'>"
      }
    },
    {
      "id": "b43",
      "type": "text",
      "data": {
        "headingEn": "Typecasting (Type Conversion)",
        "descEn": "Typecasting means converting one data type into another.\n\nPython provides built-in functions for type conversion.",
        "headingKn": "Typecasting (Type Conversion)",
        "descKn": "Typecasting ಎಂದರೆ ಒಂದು data type ಅನ್ನು ಇನ್ನೊಂದಕ್ಕೆ ಪರಿವರ್ತಿಸುವುದು.\n\nPython type conversion ಗಾಗಿ built-in functions ಒದಗಿಸುತ್ತದೆ."
      }
    },
    {
      "id": "b45",
      "type": "heading",
      "data": {
        "textEn": "Integer to String",
        "textKn": "Integer ಇಂದ String ಗೆ"
      }
    },
    {
      "id": "b46",
      "type": "code",
      "data": {
        "code": "a = 31\n\nb = str(a)\n\nprint(b)\nprint(type(b))"
      }
    },
    {
      "id": "b47",
      "type": "output",
      "data": {
        "output": "31\n<class 'str'>\n"
      }
    },
    {
      "id": "b48",
      "type": "text",
      "data": {
        "descEn": "Although it prints 31, it is now stored as a string.",
        "descKn": "ಇದು 31 ಮುದ್ರಿಸಿದರೂ, ಈಗ ಇದು ಒಂದು string ಆಗಿ ಸಂಗ್ರಹವಾಗಿದೆ."
      }
    },
    {
      "id": "b49",
      "type": "heading",
      "data": {
        "textEn": "String to Integer",
        "textKn": "String ಇಂದ Integer ಗೆ"
      }
    },
    {
      "id": "b50",
      "type": "code",
      "data": {
        "code": "a = \"32\"\n\nb = int(a)\n\nprint(b)\nprint(type(b))"
      }
    },
    {
      "id": "b51",
      "type": "output",
      "data": {
        "output": "32\n<class 'int'>"
      }
    },
    {
      "id": "b52",
      "type": "heading",
      "data": {
        "textEn": "Integer to Float",
        "textKn": "Integer ಇಂದ Float ಗೆ"
      }
    },
    {
      "id": "b53",
      "type": "code",
      "data": {
        "code": "a = 32\n\nb = float(a)\n\nprint(b)\nprint(type(b))"
      }
    },
    {
      "id": "b54",
      "type": "output",
      "data": {
        "output": "32.0\n<class 'float'>"
      }
    },
    {
      "id": "b56",
      "type": "heading",
      "data": {
        "textEn": "Float to Integer",
        "textKn": "Float ಇಂದ Integer ಗೆ"
      }
    },
    {
      "id": "b57",
      "type": "code",
      "data": {
        "code": "a = 45.9\n\nb = int(a)\n\nprint(b)"
      }
    },
    {
      "id": "b58",
      "type": "output",
      "data": {
        "output": "45"
      }
    },
    {
      "id": "b59",
      "type": "text",
      "data": {
        "descEn": "The decimal part is removed (it is truncated, not rounded).",
        "descKn": "ದಶಮಾಂಶ ಭಾಗವನ್ನು ತೆಗೆಯಲಾಗುತ್ತದೆ (ಇದನ್ನು truncate ಮಾಡಲಾಗುತ್ತದೆ, round ಮಾಡುವುದಿಲ್ಲ)."
      }
    },
    {
      "id": "b60",
      "type": "text",
      "data": {
        "headingEn": "Invalid Type Conversion",
        "descEn": "Not every string can be converted into a number.",
        "headingKn": "ಅಮಾನ್ಯ Type Conversion",
        "descKn": "ಪ್ರತಿ string ಅನ್ನೂ ಒಂದು ಸಂಖ್ಯೆಗೆ ಪರಿವರ್ತಿಸಲಾಗುವುದಿಲ್ಲ."
      }
    },
    {
      "id": "b61",
      "type": "code",
      "data": {
        "code": "name = \"Harry\"\n\nint(name)"
      }
    },
    {
      "id": "b62",
      "type": "output",
      "data": {
        "output": "ValueError"
      }
    },
    {
      "id": "b63",
      "type": "text",
      "data": {
        "headingEn": "Literals",
        "descEn": "A literal is a fixed value written directly in the program.",
        "headingKn": "Literals",
        "descKn": "ಒಂದು literal program ನಲ್ಲಿ ನೇರವಾಗಿ ಬರೆದ ಒಂದು ಸ್ಥಿರ ಮೌಲ್ಯ."
      }
    },
    {
      "id": "b65",
      "type": "heading",
      "data": {
        "textEn": "Numeric Literal",
        "textKn": "Numeric Literal"
      }
    },
    {
      "id": "b66",
      "type": "code",
      "data": {
        "code": "31"
      }
    },
    {
      "id": "b67",
      "type": "text",
      "data": {
        "descEn": "This is an integer literal.",
        "descKn": "ಇದು ಒಂದು integer literal."
      }
    },
    {
      "id": "b68",
      "type": "heading",
      "data": {
        "textEn": "String Literal",
        "textKn": "String Literal"
      }
    },
    {
      "id": "b70",
      "type": "code",
      "data": {
        "code": "\"31\""
      }
    },
    {
      "id": "b72",
      "type": "text",
      "data": {
        "descEn": "This is a string literal.\n\nAlthough both look similar, they are different.",
        "descKn": "ಇದು ಒಂದು string literal.\n\nಎರಡೂ ಒಂದೇ ರೀತಿ ಕಾಣಿಸಿದರೂ, ಅವು ಬೇರೆ."
      }
    },
    {
      "id": "b73",
      "type": "table",
      "data": {
        "rows": "| Literal | Data Type |\n\n| `31`    | Integer   |\n| \"31\"  | String    |\n"
      }
    },
    {
      "id": "b74",
      "type": "text",
      "data": {
        "headingEn": "input( ) Function",
        "descEn": "The input() function allows the user to enter data from the keyboard.",
        "headingKn": "input( ) Function",
        "descKn": "input() function ಬಳಕೆದಾರರಿಗೆ keyboard ಇಂದ ಡೇಟಾ ನಮೂದಿಸಲು ಅನುಮತಿಸುತ್ತದೆ."
      }
    },
    {
      "id": "b75",
      "type": "code",
      "data": {
        "code": "variable = input(\"Message\")      #syntax\n\n\nname = input(\"Enter your name: \")\nprint(name)\n\n#If the user types his name "
      }
    },
    {
      "id": "b76",
      "type": "output",
      "data": {
        "output": "\" name will be displayed as output \""
      }
    },
    {
      "id": "b77",
      "type": "artifact",
      "data": {
        "content": "The input( ) function always returns a string, even if the user enters a number.",
        "artType": "prompt"
      }
    },
    {
      "id": "b78",
      "type": "code",
      "data": {
        "code": "name = input(\"Enter your name: \")\nage = int(input(\"Enter your age: \"))\n\nprint(\"Name:\", name)\nprint(\"Age:\", age)\nprint(type(name))\nprint(type(age))"
      }
    },
    {
      "id": "b79",
      "type": "output",
      "data": {
        "output": "Name: Harry\nAge: 21\n<class 'str'>\n<class 'int'>"
      }
    },
    {
      "id": "b80",
      "type": "table",
      "data": {
        "rows": "| Concept              | Meaning                                         | Example                             |\n\n| Arithmetic Operators | Perform mathematical operations                 | `+`, `-`, `*`, `/`, `%`, `//`, `**` |\n| Assignment Operators | Assign or update values                         | `=`, `+=`, `-=`, `*=`, `/=`         |\n| Comparison Operators | Compare two values and return `True` or `False` | `==`, `!=`, `>`, `<`, `>=`, `<=`    |\n| Logical Operators    | Combine or reverse Boolean expressions          | `and`, `or`, `not`                  |\n| `type()`             | Returns the data type of a variable or value    | `type(a)`                           |\n| Typecasting          | Converts one data type into another             | `int()`, `float()`, `str()`         |\n| Numeric Literal      | A number written directly in code               | `31`, `45.5`                        |\n| String Literal       | Text enclosed in quotes                         | `\"31\"`, `\"Harry\"`                   |\n| `input()`            | Takes user input from the keyboard              | `input(\"Enter name: \")`             |\n"
      }
    },
    {
      "type": "concept",
      "data": {
        "headingEn": "Key Takeaways",
        "headingKn": "ಮುಖ್ಯ ಅಂಶಗಳು",
        "bodyEn": "• Python operators fall into categories: arithmetic (+, -, *, /), comparison (==, <, >), logical (and, or, not), and assignment operators including shortcuts like += , -=, *=, and /=.\n• type() tells you the data type of any value at runtime -- essential for debugging when a variable doesn't behave as expected.\n• Typecasting converts one data type to another explicitly (int to string with str(), string to int with int(), int to float with float(), and float to int with int() which truncates the decimal).\n• input() always returns a string, even if the user types a number -- forgetting to typecast the result of input() before doing arithmetic on it is one of the most common early bugs in Python.",
        "bodyKn": "• Python operators ವರ್ಗಗಳಾಗಿ ಬೀಳುತ್ತವೆ: arithmetic (+, -, *, /), comparison (==, <, >), logical (and, or, not), ಮತ್ತು assignment operators += , -=, *=, ಮತ್ತು /= ನಂತಹ shortcuts ಸೇರಿದಂತೆ.\n• type() runtime ನಲ್ಲಿ ಯಾವುದೇ ಮೌಲ್ಯದ data type ಹೇಳುತ್ತದೆ -- ಒಂದು variable ನಿರೀಕ್ಷಿತವಾಗಿ ವರ್ತಿಸದಿದ್ದಾಗ debugging ಗೆ ಅತ್ಯಗತ್ಯ.\n• Typecasting ಒಂದು data type ಅನ್ನು ಇನ್ನೊಂದಕ್ಕೆ ಸ್ಪಷ್ಟವಾಗಿ ಪರಿವರ್ತಿಸುತ್ತದೆ (int ನಿಂದ string str() ಜೊತೆ, string ನಿಂದ int int() ಜೊತೆ, int ನಿಂದ float float() ಜೊತೆ, ಮತ್ತು float ನಿಂದ int int() ಜೊತೆ ಇದು decimal ಅನ್ನು ಟ್ರಂಕೇಟ್ ಮಾಡುತ್ತದೆ).\n• input() ಯಾವಾಗಲೂ ಒಂದು string ಹಿಂತಿರುಗಿಸುತ್ತದೆ, ಬಳಕೆದಾರ ಒಂದು ಸಂಖ್ಯೆ ಟೈಪ್ ಮಾಡಿದರೂ -- input() ನ ಫಲಿತಾಂಶದ ಮೇಲೆ arithmetic ಮಾಡುವ ಮೊದಲು typecast ಮಾಡಲು ಮರೆಯುವುದು Python ನಲ್ಲಿ ಅತ್ಯಂತ ಸಾಮಾನ್ಯ ಆರಂಭಿಕ bugs ಗಳಲ್ಲಿ ಒಂದು."
      }
    },
    {
      "type": "quiz",
      "data": {
        "questions": [
          {
            "q": "What does the `+=` operator do?",
            "opts": [
              "Checks equality",
              "Adds the right value to the variable and assigns the result",
              "Multiplies and assigns",
              "Creates a new variable"
            ],
            "correct": 1,
            "qKn": "`+=` operator ಏನು ಮಾಡುತ್ತದೆ?",
            "optsKn": [
              "Equality ಪರಿಶೀಲಿಸುತ್ತದೆ",
              "ಬಲಗಡೆಯ ಮೌಲ್ಯವನ್ನು variable ಗೆ ಸೇರಿಸಿ ಫಲಿತಾಂಶ ನಿಯೋಜಿಸುತ್ತದೆ",
              "ಗುಣಿಸಿ ನಿಯೋಜಿಸುತ್ತದೆ",
              "ಒಂದು ಹೊಸ variable ರಚಿಸುತ್ತದೆ"
            ]
          },
          {
            "q": "What does `type(x)` return?",
            "opts": [
              "The value of x",
              "The memory address of x",
              "The data type of x",
              "The size of x"
            ],
            "correct": 2,
            "qKn": "`type(x)` ಏನನ್ನು ಹಿಂತಿರುಗಿಸುತ್ತದೆ?",
            "optsKn": [
              "x ನ ಮೌಲ್ಯ",
              "x ನ memory address",
              "x ನ data type",
              "x ನ size"
            ]
          },
          {
            "q": "How do you convert the string \"42\" to an integer?",
            "opts": [
              "str(\"42\")",
              "float(\"42\")",
              "int(\"42\")",
              "bool(\"42\")"
            ],
            "correct": 2,
            "qKn": "\"42\" string ಅನ್ನು ಒಂದು integer ಗೆ ಹೇಗೆ ಪರಿವರ್ತಿಸುತ್ತೀರಿ?",
            "optsKn": [
              "str(\"42\")",
              "float(\"42\")",
              "int(\"42\")",
              "bool(\"42\")"
            ]
          },
          {
            "q": "What does the `input()` function always return?",
            "opts": [
              "int",
              "float",
              "str",
              "bool"
            ],
            "correct": 2,
            "qKn": "`input()` function ಯಾವಾಗಲೂ ಏನನ್ನು ಹಿಂತಿರುಗಿಸುತ್ತದೆ?",
            "optsKn": [
              "int",
              "float",
              "str",
              "bool"
            ]
          },
          {
            "q": "What is the result of `10 // 3` in Python?",
            "opts": [
              "3.33",
              "3",
              "1",
              "0.33"
            ],
            "correct": 1,
            "qKn": "Python ನಲ್ಲಿ `10 // 3` ನ ಫಲಿತಾಂಶ ಏನು?",
            "optsKn": [
              "3.33",
              "3",
              "1",
              "0.33"
            ]
          },
          {
            "q": "What does `int(3.9)` return?",
            "opts": [
              "4",
              "3",
              "3.9",
              "Error"
            ],
            "correct": 1,
            "qKn": "`int(3.9)` ಏನನ್ನು ಹಿಂತಿರುಗಿಸುತ್ತದೆ?",
            "optsKn": [
              "4",
              "3",
              "3.9",
              "Error"
            ]
          },
          {
            "q": "Which operator is used to check equality in Python?",
            "opts": [
              "=",
              ":=",
              "===",
              "=="
            ],
            "correct": 3,
            "qKn": "Python ನಲ್ಲಿ equality ಪರಿಶೀಲಿಸಲು ಯಾವ operator ಬಳಸಲಾಗುತ್ತದೆ?",
            "optsKn": [
              "=",
              ":=",
              "===",
              "=="
            ]
          },
          {
            "q": "What does `str(100)` return?",
            "opts": [
              "100 (integer)",
              "\"100\" (string)",
              "True",
              "Error"
            ],
            "correct": 1,
            "qKn": "`str(100)` ಏನನ್ನು ಹಿಂತಿರುಗಿಸುತ್ತದೆ?",
            "optsKn": [
              "100 (integer)",
              "\"100\" (string)",
              "True",
              "Error"
            ]
          }
        ]
      }
    }
  ]
};
