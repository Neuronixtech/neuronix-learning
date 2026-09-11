module.exports = {
  phaseId: '6a358e5ffc29b5a47144467a',
  moduleId: '6a358e5ffc29b5a47144468c',
  order: 0,
  type: 'reading',
  duration: 15,
  difficulty: 'beginner',
  status: 'published',
  title: 'Modules in Python',
  titleKn: 'ಮಾಡ್ಯೂಲ್ಸ್ ಇನ್ ಪೈಥಾನ್',
  desc: 'A module in Python is a file containing Python code (functions, classes, or variables) that can be reused in other programs. Modules help organize code into smaller, manageable parts and promote code reusability.',
  descKn: 'Python ನಲ್ಲಿ ಒಂದು module ಎಂದರೆ Python ಕೋಡ್ (functions, classes, ಅಥವಾ variables) ಒಳಗೊಂಡ ಒಂದು file, ಇದನ್ನು ಇತರ programs ಗಳಲ್ಲಿ ಮರುಬಳಕೆ ಮಾಡಬಹುದು. Modules ಕೋಡ್ ಅನ್ನು ಚಿಕ್ಕ, ನಿರ್ವಹಿಸಬಹುದಾದ ಭಾಗಗಳಾಗಿ ಸಂಘಟಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತವೆ ಮತ್ತು ಕೋಡ್ ಮರುಬಳಕೆಯನ್ನು ಉತ್ತೇಜಿಸುತ್ತವೆ.',
  objectives: [
    'Explain what a module is and how it organizes reusable code',
    'Use import, import as, from import, and from import * syntax correctly',
    'Distinguish between a module and a package',
    'Identify built-in, third-party, and user-defined module types',
    'Access functions and variables from an imported module',
    'Use the __name__ == "__main__" guard to control what runs on direct execution',
    'Recognize and avoid the module name-shadowing pitfall',
  ],
  objectivesKn: [
    'Module ಎಂದರೇನು ಮತ್ತು ಅದು ಮರುಬಳಕೆ ಮಾಡಬಹುದಾದ code ಅನ್ನು ಹೇಗೆ ಸಂಘಟಿಸುತ್ತದೆ ಎಂಬುದನ್ನು ವಿವರಿಸಿ',
    'import, import as, from import, from import * syntax ಅನ್ನು ಸರಿಯಾಗಿ ಬಳಸಿ',
    'Module ಮತ್ತು package ನಡುವಿನ ವ್ಯತ್ಯಾಸ ಅರ್ಥ ಮಾಡಿಕೊಳ್ಳಿ',
    'Built-in, third-party, ಮತ್ತು user-defined module types ಗುರುತಿಸಿ',
    'Import ಮಾಡಿದ module ನಿಂದ functions ಮತ್ತು variables ಪ್ರವೇಶಿಸಿ',
    'ನೇರ execution ನಲ್ಲಿ ಏನು ಚಲಿಸುತ್ತದೆ ಎಂಬುದನ್ನು ನಿಯಂತ್ರಿಸಲು __name__ == "__main__" guard ಬಳಸಿ',
    'Module ಹೆಸರು-shadowing ತಪ್ಪನ್ನು ಗುರುತಿಸಿ ಮತ್ತು ತಪ್ಪಿಸಿ',
  ],
  blocks: [
    {
      id: 'b3',
      type: 'concept',
      data: {
        headingEn: 'How does module work ?',
        bodyEn: 'Modules help you organize code into reusable pieces.\n\nWhy modules are useful:\n• Reusability: write code once and use it in multiple programs\n• Organization: split large programs into smaller files\n• Maintainability: easier to read, debug, and update\n• Namespace management: avoid naming conflicts',
        headingKn: 'Module ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ?',
        bodyKn: 'Modules ಕೋಡ್ ಅನ್ನು ಮರುಬಳಕೆ ಮಾಡಬಹುದಾದ ತುಂಡುಗಳಾಗಿ ಸಂಘಟಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತವೆ.\n\nModules ಏಕೆ ಉಪಯುಕ್ತ:\n• Reusability: ಒಮ್ಮೆ ಕೋಡ್ ಬರೆಯಿರಿ ಮತ್ತು ಅನೇಕ programs ಗಳಲ್ಲಿ ಬಳಸಿ\n• Organization: ದೊಡ್ಡ programs ಗಳನ್ನು ಚಿಕ್ಕ files ಗಳಾಗಿ ವಿಭಜಿಸಿ\n• Maintainability: ಓದಲು, debug ಮಾಡಲು, ಮತ್ತು ಅಪ್ಡೇಟ್ ಮಾಡಲು ಸುಲಭ\n• Namespace management: ಹೆಸರು ಘರ್ಷಣೆಗಳನ್ನು ತಪ್ಪಿಸಿ',
      },
    },
    {
      id: 'b4',
      type: 'example',
      data: {
        tag: 'Example:',
        textEn: 'If you have a file named math_utils.py:\ndef add(a, b):\n    return a + b\n\nYou can use it in another file:\n\nimport math_utils\nresult = math_utils.add(3, 5)\nprint(result)',
        textKn: 'ನಿಮ್ಮ ಬಳಿ math_utils.py ಎಂಬ ಒಂದು file ಇದ್ದರೆ:\ndef add(a, b):\n    return a + b\n\nನೀವು ಅದನ್ನು ಇನ್ನೊಂದು file ನಲ್ಲಿ ಬಳಸಬಹುದು:\n\nimport math_utils\nresult = math_utils.add(3, 5)\nprint(result)',
      },
    },
    {
      id: 'b5',
      type: 'concept',
      data: {
        headingEn: 'Common ways to import modules:',
        bodyEn: '- import math\n- import math as m\n- from math import sqrt\n- from math import *\n\nEach form has a different tradeoff:\n• "import math" keeps things explicit -- you always write math.sqrt(), so anyone reading the code instantly knows sqrt() came from the math module.\n• "import math as m" is the same idea with a shorter alias, common for libraries with long names (like "import numpy as np").\n• "from math import sqrt" lets you write just sqrt() without the prefix, which is convenient but makes it less obvious where sqrt came from if you\'re reading unfamiliar code.\n• "from math import *" imports everything at once -- it\'s generally discouraged in real projects because it can silently overwrite existing names and makes it hard to tell which module a function belongs to.',
        bodyKn: '- import math\n- import math as m\n- from math import sqrt\n- from math import *\n\nಪ್ರತಿ ರೂಪ ಬೇರೆ ವಿನಿಮಯ ಹೊಂದಿದೆ:\n• "import math" ಸಂಗತಿಗಳನ್ನು ಸ್ಪಷ್ಟವಾಗಿಡುತ್ತದೆ -- ನೀವು ಯಾವಾಗಲೂ math.sqrt() ಬರೆಯುತ್ತೀರಿ, ಆದ್ದರಿಂದ ಕೋಡ್ ಓದುವ ಯಾರಿಗಾದರೂ sqrt() math module ನಿಂದ ಬಂತು ಎಂದು ತಕ್ಷಣ ತಿಳಿಯುತ್ತದೆ.\n• "import math as m" ಇದೇ ಆಲೋಚನೆ ಒಂದು ಚಿಕ್ಕ alias ಜೊತೆ, ಉದ್ದ ಹೆಸರಿನ libraries ಗಳಿಗೆ ಸಾಮಾನ್ಯ ("import numpy as np" ನಂತೆ).\n• "from math import sqrt" ನಿಮಗೆ prefix ಇಲ್ಲದೆ ಕೇವಲ sqrt() ಬರೆಯಲು ಅನುಮತಿಸುತ್ತದೆ, ಇದು ಅನುಕೂಲಕರ ಆದರೆ ನೀವು ಅಪರಿಚಿತ ಕೋಡ್ ಓದುತ್ತಿದ್ದರೆ sqrt ಎಲ್ಲಿಂದ ಬಂತು ಎಂದು ಕಡಿಮೆ ಸ್ಪಷ್ಟಗೊಳಿಸುತ್ತದೆ.\n• "from math import *" ಎಲ್ಲವನ್ನೂ ಒಮ್ಮೆಗೆ import ಮಾಡುತ್ತದೆ -- ಇದು ನಿಜ ಪ್ರಾಜೆಕ್ಟ್‌ಗಳಲ್ಲಿ ಸಾಮಾನ್ಯವಾಗಿ ನಿರುತ್ಸಾಹಗೊಳಿಸಲ್ಪಡುತ್ತದೆ ಏಕೆಂದರೆ ಇದು ಮೌನವಾಗಿ ಅಸ್ತಿತ್ವದಲ್ಲಿರುವ ಹೆಸರುಗಳನ್ನು overwrite ಮಾಡಬಹುದು ಮತ್ತು ಒಂದು function ಯಾವ module ಗೆ ಸೇರಿದೆ ಎಂದು ಹೇಳಲು ಕಷ್ಟಗೊಳಿಸುತ್ತದೆ.',
        headingKn: 'Modules Import ಮಾಡುವ ಸಾಮಾನ್ಯ ವಿಧಾನಗಳು:',
      },
    },
    {
      id: 'b6',
      type: 'concept',
      data: {
        headingEn: 'Module vs package:',
        bodyEn: '- A module is a single .py file\n- A package is a collection of modules in a folder, usually with an __init__.py file\n\n• For example, a project might have a package called "shapes" containing separate modules circle.py, square.py, and triangle.py, each with its own functions -- you could then write "from shapes import circle" or "import shapes.circle".\n• This is exactly how large real-world libraries like numpy or pandas are organized internally: they aren\'t one giant file, they\'re packages containing dozens of modules.\n• This is why understanding module vs. package matters even if you never build a package yourself -- it explains why an import statement like "from sklearn.model_selection import train_test_split" has multiple dots in it.',
        bodyKn: '- ಒಂದು module ಒಂದೇ .py file\n- ಒಂದು package ಒಂದು ಫೋಲ್ಡರ್‌ನಲ್ಲಿ modules ಗಳ ಸಂಗ್ರಹ, ಸಾಮಾನ್ಯವಾಗಿ __init__.py file ಜೊತೆ\n\n• ಉದಾಹರಣೆಗೆ, ಒಂದು ಪ್ರಾಜೆಕ್ಟ್ "shapes" ಎಂಬ ಒಂದು package ಹೊಂದಿರಬಹುದು, ಪ್ರತ್ಯೇಕ modules circle.py, square.py, ಮತ್ತು triangle.py ಒಳಗೊಂಡಿದೆ, ಪ್ರತಿಯೊಂದೂ ತನ್ನದೇ functions ಜೊತೆ -- ನೀವು ನಂತರ "from shapes import circle" ಅಥವಾ "import shapes.circle" ಬರೆಯಬಹುದು.\n• numpy ಅಥವಾ pandas ನಂತಹ ದೊಡ್ಡ ನಿಜ-ಜಗತ್ತಿನ libraries ಆಂತರಿಕವಾಗಿ ಹೀಗೇ ಸಂಘಟಿಸಲ್ಪಟ್ಟಿವೆ: ಅವು ಒಂದು ದೊಡ್ಡ file ಅಲ್ಲ, ಅವು ಡಜನ್ಗಟ್ಟಲೆ modules ಒಳಗೊಂಡ packages.\n• ನೀವು ಎಂದಿಗೂ ಒಂದು package ಕಟ್ಟದಿದ್ದರೂ module vs. package ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದು ಮುಖ್ಯವಾಗಿರುವುದಕ್ಕೆ ಇದೇ ಕಾರಣ -- "from sklearn.model_selection import train_test_split" ನಂತಹ ಒಂದು import statement ಅನೇಕ dots ಗಳನ್ನು ಏಕೆ ಹೊಂದಿದೆ ಎಂದು ಇದು ವಿವರಿಸುತ್ತದೆ.',
        headingKn: 'Module vs Package:',
      },
    },
    {
      id: 'b7',
      type: 'example',
      data: {
        tag: 'Example of a package:',
        textEn: '   my_package/\n    __init__.py\n    utils.py\n    helpers.py',
        textKn: '   my_package/\n    __init__.py\n    utils.py\n    helpers.py',
      },
    },
    {
      id: 'b8',
      type: 'heading',
      data: { textEn: 'Types of modules in Python', textKn: 'Python ನಲ್ಲಿ Modules ನ ವಿಧಗಳು' },
    },
    {
      id: 'b9',
      type: 'example',
      data: {
        tag: '1. Built-in modules',
        textEn: 'These are included with Python by default.- math\n- os\n- sys\n- random\n- datetime\n',
        table: '\n\n ',
        textKn: 'ಇವು ಡೀಫಾಲ್ಟ್ ಆಗಿ Python ಜೊತೆ ಸೇರಿಸಲಾಗಿದೆ.- math\n- os\n- sys\n- random\n- datetime\n',
      },
    },
    {
      id: 'b11',
      type: 'code',
      data: {
        headingEn: 'Using a built-in module',
        headingKn: 'ಒಂದು built-in module ಬಳಸುವುದು',
        code: 'import math\nprint(math.sqrt(16))\n\n ',
      },
    },
    { id: 'b11-out', type: 'output', data: { output: '4.0' } },
    {
      id: 'b12',
      type: 'example',
      data: {
        tag: '2. User-defined modules',
        textEn: 'These are modules you create yourself by writing Python code in a .py file.',
        textKn: 'ಇವು ನೀವು ಸ್ವತಃ ಒಂದು .py file ನಲ್ಲಿ Python ಕೋಡ್ ಬರೆಯುವ ಮೂಲಕ ರಚಿಸುವ modules.',
      },
    },
    {
      id: 'b13',
      type: 'code',
      data: {
        code: '# file: mymodule.py\ndef greet(name):\n    return f"Hello, {name}"\n\nUsage:\nimport mymodule\nprint(mymodule.greet("Alex"))',
      },
    },
    {
      id: 'b15',
      type: 'example',
      data: {
        tag: '3. Third-party modules',
        textEn: 'These are modules developed by others and installed using tools like pip.\n \n- numpy\n- pandas\n- requests\n- flask',
        textKn: 'ಇವು ಇತರರು ಅಭಿವೃದ್ಧಿಪಡಿಸಿದ ಮತ್ತು pip ನಂತಹ tools ಬಳಸಿ install ಮಾಡಿದ modules.\n \n- numpy\n- pandas\n- requests\n- flask',
      },
    },
    {
      id: 'b16',
      type: 'code',
      data: { descEn: '', code: 'import requests\nresponse = requests.get("https://example.com")' },
    },
    {
      id: 'b18',
      type: 'example',
      data: {
        tag: '4. Standard library modules',
        textEn: 'These are modules that come with Python\u2019s standard library. They are technically built-in or bundled with Python, and often grouped separately because they are part of the official Python distribution.\n\n- json\n- re\n- os\n- collections',
        textKn: 'ಇವು Python ನ standard library ಜೊತೆ ಬರುವ modules. ಇವು ತಾಂತ್ರಿಕವಾಗಿ built-in ಅಥವಾ Python ಜೊತೆ ಬಂಡಲ್ ಆಗಿವೆ, ಮತ್ತು ಆಗಾಗ್ಗೆ ಪ್ರತ್ಯೇಕವಾಗಿ ಗುಂಪುಗೂಡಿಸಲಾಗುತ್ತದೆ ಏಕೆಂದರೆ ಅವು ಅಧಿಕೃತ Python distribution ನ ಭಾಗ.\n\n- json\n- re\n- os\n- collections',
      },
    },
    {
      id: 'b19',
      type: 'code',
      data: { code: 'import json\n\ndata = {"name": "Alice", "age": 20}\nprint(json.dumps(data))' },
    },
    { id: 'b19-out', type: 'output', data: { output: '{"name": "Alice", "age": 20}' } },
    {
      id: 'b20',
      type: 'table',
      data: {
        captionEn: '',
        rows: '| Type             | Source                            | Example             \n| Built-in         | Comes with Python                 | `math`, `sys`       \n| User-defined     | Created by you                    | `mymodule`          \n| Third-party      | Installed separately (via pip)    | `numpy`, `requests` \n| Standard library | Included with Python distribution | `json`, `re`        \n',
      },
    },
    {
      id: 'name-heading',
      type: 'heading',
      data: { textEn: 'The __name__ Trick', textKn: '__name__ ಟ್ರಿಕ್' },
    },
    {
      id: 'name-concept',
      type: 'concept',
      data: {
        headingEn: 'Why does the same file behave differently?',
        headingKn: 'ಅದೇ file ಏಕೆ ಬೇರೆ ಬೇರೆ ರೀತಿ ವರ್ತಿಸುತ್ತದೆ?',
        bodyEn: 'Every Python file has a hidden variable called __name__. When a file is imported, Python sets __name__ to the module\'s own name (e.g. "mymodule"). When a file is run directly (python mymodule.py), Python sets __name__ to "__main__" instead.\n\nThis lets you write code that only runs when the file is executed directly, not when it\'s imported -- using the pattern:\n\nif __name__ == "__main__":\n    # this only runs when you type: python mymodule.py\n    ...\n\nWithout this guard, any "top-level" print() or test code in your module would run every single time someone imports it, which is almost never what you want.',
        bodyKn: 'ಪ್ರತಿ Python file ಒಂದು ಗುಪ್ತ variable ಹೊಂದಿದೆ, ಅದು __name__. ಒಂದು file ಅನ್ನು import ಮಾಡಿದಾಗ, Python __name__ ಅನ್ನು ಆ module ನ ಸ್ವಂತ ಹೆಸರಿಗೆ ಸೆಟ್ ಮಾಡುತ್ತದೆ (ಉದಾ. "mymodule"). ಒಂದು file ಅನ್ನು ನೇರವಾಗಿ run ಮಾಡಿದಾಗ (python mymodule.py), Python __name__ ಅನ್ನು ಬದಲಿಗೆ "__main__" ಗೆ ಸೆಟ್ ಮಾಡುತ್ತದೆ.\n\nಇದು ನಿಮಗೆ file ಅನ್ನು ನೇರವಾಗಿ run ಮಾಡಿದಾಗ ಮಾತ್ರ ಚಲಿಸುವ ಕೋಡ್ ಬರೆಯಲು ಅನುಮತಿಸುತ್ತದೆ, import ಮಾಡಿದಾಗ ಅಲ್ಲ -- ಈ pattern ಬಳಸಿ:\n\nif __name__ == "__main__":\n    # ಇದು ನೀವು python mymodule.py ಎಂದು ಟೈಪ್ ಮಾಡಿದಾಗ ಮಾತ್ರ ಚಲಿಸುತ್ತದೆ\n    ...\n\nಈ guard ಇಲ್ಲದೆ, ನಿಮ್ಮ module ನಲ್ಲಿನ ಯಾವುದೇ "top-level" print() ಅಥವಾ test ಕೋಡ್ ಪ್ರತಿ ಬಾರಿ ಯಾರಾದರೂ ಅದನ್ನು import ಮಾಡಿದಾಗಲೂ ಚಲಿಸುತ್ತದೆ, ಇದು ನಿಮಗೆ ಬೇಕಾಗಿರುವುದು ಬಹುತೇಕ ಎಂದಿಗೂ ಇರುವುದಿಲ್ಲ.',
      },
    },
    {
      id: 'name-code1',
      type: 'code',
      data: {
        headingEn: 'mymodule.py with the __main__ guard',
        headingKn: '__main__ guard ಜೊತೆ mymodule.py',
        code: 'def greet(name):\n    return f"Hello, {name}"\n\nprint("mymodule.py was executed, __name__ =", __name__)\n\nif __name__ == "__main__":\n    print("Running mymodule.py directly")',
      },
    },
    {
      id: 'name-code2',
      type: 'code',
      data: {
        headingEn: 'Importing it from another file: import mymodule',
        headingKn: 'ಇನ್ನೊಂದು file ನಿಂದ import ಮಾಡುವುದು: import mymodule',
        code: 'import mymodule\nprint(mymodule.greet("Alex"))',
      },
    },
    {
      id: 'name-out1',
      type: 'output',
      data: { output: 'mymodule.py was executed, __name__ = mymodule\nHello, Alex' },
    },
    {
      id: 'name-code3',
      type: 'code',
      data: {
        headingEn: 'Running it directly instead: python mymodule.py',
        headingKn: 'ಬದಲಿಗೆ ಅದನ್ನು ನೇರವಾಗಿ run ಮಾಡುವುದು: python mymodule.py',
        code: 'python mymodule.py',
      },
    },
    {
      id: 'name-out2',
      type: 'output',
      data: { output: 'mymodule.py was executed, __name__ = __main__\nRunning mymodule.py directly' },
    },
    {
      id: 'dir-heading',
      type: 'heading',
      data: { textEn: 'Exploring a Module with dir()', textKn: 'dir() ಜೊತೆ ಒಂದು Module ಅನ್ವೇಷಿಸುವುದು' },
    },
    {
      id: 'dir-concept',
      type: 'concept',
      data: {
        headingEn: "What's inside a module?",
        headingKn: 'ಒಂದು module ಒಳಗೆ ಏನಿದೆ?',
        bodyEn: "Every imported module is just a Python object -- you can inspect what functions and variables it contains using the built-in dir() function. Names starting with an underscore are usually internal/private, so it's common to filter them out when browsing a module's public API.",
        bodyKn: 'Import ಮಾಡಿದ ಪ್ರತಿ module ಕೇವಲ ಒಂದು Python object -- ಅದು ಒಳಗೊಂಡಿರುವ functions ಮತ್ತು variables ಗಳನ್ನು ನೀವು built-in dir() function ಬಳಸಿ ಪರಿಶೀಲಿಸಬಹುದು. Underscore ಇಂದ ಪ್ರಾರಂಭವಾಗುವ ಹೆಸರುಗಳು ಸಾಮಾನ್ಯವಾಗಿ internal/private, ಆದ್ದರಿಂದ ಒಂದು module ನ public API ಬ್ರೌಸ್ ಮಾಡುವಾಗ ಅವುಗಳನ್ನು ಫಿಲ್ಟರ್ ಮಾಡುವುದು ಸಾಮಾನ್ಯ.',
      },
    },
    {
      id: 'dir-code',
      type: 'code',
      data: {
        headingEn: 'Listing the public names inside math',
        headingKn: 'math ಒಳಗಿನ public ಹೆಸರುಗಳನ್ನು ಪಟ್ಟಿ ಮಾಡುವುದು',
        code: "import math\npublic_names = [n for n in dir(math) if not n.startswith('_')]\nprint(public_names[:8])",
      },
    },
    {
      id: 'dir-out',
      type: 'output',
      data: { output: "['acos', 'acosh', 'asin', 'asinh', 'atan', 'atan2', 'atanh', 'cbrt']" },
    },
    {
      id: 'shadow-heading',
      type: 'heading',
      data: {
        textEn: 'Common Pitfall: Shadowing Standard Library Modules',
        textKn: 'ಸಾಮಾನ್ಯ ತಪ್ಪು: Standard Library Modules ಅನ್ನು Shadow ಮಾಡುವುದು',
      },
    },
    {
      id: 'shadow-concept',
      type: 'concept',
      data: {
        headingEn: 'Never name your own file the same as a standard module',
        headingKn: 'ನಿಮ್ಮದೇ file ಗೆ ಒಂದು standard module ಇರುವ ಅದೇ ಹೆಸರು ಎಂದಿಗೂ ಇಡಬೇಡಿ',
        bodyEn: 'Python searches your own project folder for modules before it searches the standard library. If you create a file named random.py in the same folder as your script, "import random" will load YOUR file instead of Python\'s built-in random module -- silently breaking anything that expects the real one.\n\nThis is one of the most common early-beginner bugs, and it\'s easy to miss because the error can look unrelated to the actual cause.',
        bodyKn: 'Python standard library ಹುಡುಕುವ ಮೊದಲು ನಿಮ್ಮ ಸ್ವಂತ project folder ಅನ್ನು modules ಗಾಗಿ ಹುಡುಕುತ್ತದೆ. ನಿಮ್ಮ script ಇರುವ ಅದೇ folder ನಲ್ಲಿ ನೀವು random.py ಎಂಬ ಒಂದು file ರಚಿಸಿದರೆ, "import random" Python ನ built-in random module ಬದಲಿಗೆ ನಿಮ್ಮ file ಅನ್ನು load ಮಾಡುತ್ತದೆ -- ನಿಜವಾದ module ಅನ್ನು ನಿರೀಕ್ಷಿಸುವ ಯಾವುದನ್ನಾದರೂ ಮೌನವಾಗಿ ಮುರಿಯುತ್ತದೆ.\n\nಇದು ಅತ್ಯಂತ ಸಾಮಾನ್ಯ early-beginner bugs ಗಳಲ್ಲಿ ಒಂದು, ಮತ್ತು ಇದನ್ನು ತಪ್ಪಿಸುವುದು ಸುಲಭ ಏಕೆಂದರೆ ದೋಷ ನಿಜವಾದ ಕಾರಣಕ್ಕೆ ಸಂಬಂಧವಿಲ್ಲದಂತೆ ಕಾಣಿಸಬಹುದು.',
      },
    },
    {
      id: 'shadow-code',
      type: 'code',
      data: {
        headingEn: 'A local random.py shadowing the real one',
        headingKn: 'ನಿಜವಾದ moduleಅನ್ನು shadow ಮಾಡುವ ಸ್ಥಳೀಯ random.py',
        code: '# random.py  (your own file, in the same folder)\nprint("this is my own random.py, not the stdlib one!")\n\n# main.py\nimport random\nprint(random)\ntry:\n    print(random.randint(1, 6))\nexcept AttributeError as e:\n    print("AttributeError:", e)',
      },
    },
    {
      id: 'shadow-out',
      type: 'output',
      data: {
        output: "this is my own random.py, not the stdlib one!\n<module 'random' from '...\\\\random.py'>\nAttributeError: module 'random' has no attribute 'randint' (consider renaming 'random.py' since it has the same name as the standard library module named 'random' and prevents importing that standard library module)",
      },
    },
    {
      id: 'takeaways',
      type: 'concept',
      data: {
        headingEn: 'Key Takeaways',
        headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
        bodyEn: '• Modules let you organize code into reusable, maintainable pieces instead of one giant file.\n• Modules can be imported in several ways: import math, import math as m, from math import sqrt, or from math import *.\n• A module is a single .py file; a package is a folder of modules, usually marked with an __init__.py file.\n• Python ships with built-in modules (math, os, random) and also supports custom modules you write yourself and third-party modules installed via pip -- the same import syntax works for all three.\n• Use if __name__ == "__main__": to write code that only runs when a file is executed directly, not when it\'s imported.\n• Never name your own file the same as a standard library module (e.g. random.py) -- it silently shadows the real one.',
        bodyKn: '• Modules ಒಂದು ದೊಡ್ಡ file ಬದಲು ಕೋಡ್ ಅನ್ನು ಮರುಬಳಕೆ ಮಾಡಬಹುದಾದ, ನಿರ್ವಹಿಸಬಹುದಾದ ತುಂಡುಗಳಾಗಿ ಸಂಘಟಿಸಲು ಅನುಮತಿಸುತ್ತವೆ.\n• Modules ಅನ್ನು ಹಲವಾರು ರೀತಿಯಲ್ಲಿ import ಮಾಡಬಹುದು: import math, import math as m, from math import sqrt, ಅಥವಾ from math import *.\n• ಒಂದು module ಒಂದೇ .py file; ಒಂದು package modules ಗಳ ಒಂದು ಫೋಲ್ಡರ್, ಸಾಮಾನ್ಯವಾಗಿ __init__.py file ಜೊತೆ ಗುರುತಿಸಲ್ಪಟ್ಟಿದೆ.\n• Python built-in modules (math, os, random) ಜೊತೆ ಬರುತ್ತದೆ ಮತ್ತು ನೀವೇ ಬರೆಯುವ custom modules ಮತ್ತು pip ಮೂಲಕ install ಮಾಡಿದ third-party modules ಗಳನ್ನೂ ಬೆಂಬಲಿಸುತ್ತದೆ -- ಅದೇ import syntax ಎಲ್ಲಾ ಮೂರಕ್ಕೂ ಕೆಲಸ ಮಾಡುತ್ತದೆ.\n• file ಅನ್ನು ನೇರವಾಗಿ run ಮಾಡಿದಾಗ ಮಾತ್ರ ಚಲಿಸುವ ಕೋಡ್ ಬರೆಯಲು if __name__ == "__main__": ಬಳಸಿ, import ಮಾಡಿದಾಗ ಅಲ್ಲ.\n• ನಿಮ್ಮದೇ file ಗೆ ಒಂದು standard library module ಇರುವ ಅದೇ ಹೆಸರು (ಉದಾ. random.py) ಎಂದಿಗೂ ಇಡಬೇಡಿ -- ಇದು ನಿಜವಾದ ಅನ್ನು ಮೌನವಾಗಿ shadow ಮಾಡುತ್ತದೆ.',
      },
    },
    {
      id: 'quiz',
      type: 'quiz',
      data: {
        questions: [
          {
            q: 'What is a module in Python?',
            qKn: 'Python ನಲ್ಲಿ module ಎಂದರೇನು?',
            opts: ['A built-in function', 'A single .py file containing reusable code', 'A type of loop', 'A keyword'],
            optsKn: ['ಒಂದು built-in function', 'ಮರುಬಳಕೆ ಮಾಡಬಹುದಾದ code ಒಳಗೊಂಡ ಒಂದೇ .py file', 'ಒಂದು ರೀತಿಯ loop', 'ಒಂದು keyword'],
            correct: 1,
          },
          {
            q: 'Which import syntax gives a module a shorter alias?',
            qKn: 'ಯಾವ import syntax ಒಂದು module ಗೆ ಚಿಕ್ಕ alias ನೀಡುತ್ತದೆ?',
            opts: ['import math', 'from math import *', 'import math as m', 'from math import sqrt'],
            optsKn: ['import math', 'from math import *', 'import math as m', 'from math import sqrt'],
            correct: 2,
          },
          {
            q: 'What is the difference between a module and a package?',
            qKn: 'Module ಮತ್ತು package ನಡುವಿನ ವ್ಯತ್ಯಾಸ ಏನು?',
            opts: [
              'No difference',
              'A module is a single .py file; a package is a folder of modules',
              'A package is a single file; a module is a folder',
              'A module cannot be imported',
            ],
            optsKn: [
              'ಯಾವುದೇ ವ್ಯತ್ಯಾಸವಿಲ್ಲ',
              'ಒಂದು module ಒಂದೇ .py file; ಒಂದು package modules ಗಳ ಫೋಲ್ಡರ್',
              'ಒಂದು package ಒಂದೇ file; ಒಂದು module ಒಂದು ಫೋಲ್ಡರ್',
              'ಒಂದು module ಅನ್ನು import ಮಾಡಲಾಗುವುದಿಲ್ಲ',
            ],
            correct: 1,
          },
          {
            q: 'Which statement imports only the sqrt function from math?',
            qKn: 'math ನಿಂದ sqrt function ಅನ್ನು ಮಾತ್ರ import ಮಾಡುವ statement ಯಾವುದು?',
            opts: ['import math', 'import math as m', 'from math import *', 'from math import sqrt'],
            optsKn: ['import math', 'import math as m', 'from math import *', 'from math import sqrt'],
            correct: 3,
          },
          {
            q: 'What does `from math import *` do?',
            qKn: '`from math import *` ಏನು ಮಾಡುತ್ತದೆ?',
            opts: [
              'Imports only math.pi',
              'Imports the entire math package as a folder',
              'Imports all names from math into the current namespace',
              'Deletes the math module',
            ],
            optsKn: [
              'math.pi ಅನ್ನು ಮಾತ್ರ import ಮಾಡುತ್ತದೆ',
              'ಸಂಪೂರ್ಣ math package ಅನ್ನು ಒಂದು ಫೋಲ್ಡರ್ ಆಗಿ import ಮಾಡುತ್ತದೆ',
              'math ನಿಂದ ಎಲ್ಲಾ ಹೆಸರುಗಳನ್ನು ಪ್ರಸ್ತುತ namespace ಗೆ import ಮಾಡುತ್ತದೆ',
              'math module ಅನ್ನು ಅಳಿಸುತ್ತದೆ',
            ],
            correct: 2,
          },
          {
            q: 'Which type of module is built directly into Python?',
            qKn: 'ಯಾವ ರೀತಿಯ module Python ನಲ್ಲಿ ನೇರವಾಗಿ built ಆಗಿದೆ?',
            opts: ['Third-party module', 'User-defined module', 'Built-in (standard library) module', 'Package module'],
            optsKn: ['Third-party module', 'User-defined module', 'Built-in (standard library) module', 'Package module'],
            correct: 2,
          },
          {
            q: 'What is the main benefit of using modules?',
            qKn: 'Modules ಬಳಸುವುದರ ಮುಖ್ಯ ಪ್ರಯೋಜನ ಏನು?',
            opts: [
              'They make code run faster automatically',
              'They allow code to be organized and reused across files',
              'They replace functions',
              'They are required by Python syntax',
            ],
            optsKn: [
              'ಅವು ಕೋಡ್ ಅನ್ನು ಸ್ವಯಂಚಾಲಿತವಾಗಿ ವೇಗವಾಗಿ ಓಡಿಸುತ್ತವೆ',
              'ಅವು ಕೋಡ್ ಅನ್ನು files ಗಳಾದ್ಯಂತ ಸಂಘಟಿಸಲು ಮತ್ತು ಮರುಬಳಕೆ ಮಾಡಲು ಅನುಮತಿಸುತ್ತವೆ',
              'ಅವು functions ಗಳನ್ನು ಬದಲಾಯಿಸುತ್ತವೆ',
              'ಅವು Python syntax ಮೂಲಕ ಅಗತ್ಯವಿದೆ',
            ],
            correct: 1,
          },
          {
            q: 'If you write `import math as m`, how do you call math.sqrt()?',
            qKn: 'ನೀವು `import math as m` ಬರೆದರೆ, math.sqrt() ಅನ್ನು ಹೇಗೆ ಕರೆಯುತ್ತೀರಿ?',
            opts: ['math.sqrt()', 'sqrt()', 'm.sqrt()', 'module.sqrt()'],
            optsKn: ['math.sqrt()', 'sqrt()', 'm.sqrt()', 'module.sqrt()'],
            correct: 2,
          },
          {
            q: 'What does __name__ equal when a file is run directly (not imported)?',
            qKn: 'ಒಂದು file ಅನ್ನು ನೇರವಾಗಿ run ಮಾಡಿದಾಗ (import ಮಾಡದೆ) __name__ ಏನಕ್ಕೆ ಸಮ?',
            opts: ["The file's own name", '"__main__"', '"None"', 'The name of the last imported module'],
            optsKn: ['file ನ ಸ್ವಂತ ಹೆಸರು', '"__main__"', '"None"', 'ಕೊನೆಯ import ಮಾಡಿದ module ನ ಹೆಸರು'],
            correct: 1,
          },
          {
            q: 'Why is it risky to name your own file random.py?',
            qKn: 'ನಿಮ್ಮ ಸ್ವಂತ file ಗೆ random.py ಎಂದು ಹೆಸರಿಡುವುದು ಏಕೆ ಅಪಾಯಕಾರಿ?',
            opts: [
              'It has no effect on imports',
              "It shadows Python's standard random module, breaking any code that expects the real one",
              'Python refuses to run any file named random.py',
              'It automatically renames itself',
            ],
            optsKn: [
              'ಇದು imports ಮೇಲೆ ಯಾವುದೇ ಪರಿಣಾಮ ಬೀರುವುದಿಲ್ಲ',
              'ಇದು Python ನ standard random module ಅನ್ನು shadow ಮಾಡುತ್ತದೆ, ನಿಜವಾದ module ಅನ್ನು ನಿರೀಕ್ಷಿಸುವ ಯಾವುದೇ ಕೋಡ್ ಅನ್ನು ಮುರಿಯುತ್ತದೆ',
              'Python random.py ಎಂಬ ಹೆಸರಿನ ಯಾವುದೇ file ಅನ್ನು run ಮಾಡಲು ನಿರಾಕರಿಸುತ್ತದೆ',
              'ಇದು ಸ್ವಯಂಚಾಲಿತವಾಗಿ ತನ್ನನ್ನೇ ಮರುಹೆಸರಿಸುತ್ತದೆ',
            ],
            correct: 1,
          },
        ],
      },
    },
  ],
};
