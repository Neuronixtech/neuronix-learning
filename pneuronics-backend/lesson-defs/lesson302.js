module.exports = {
  phaseId: '6a358e5ffc29b5a47144467a',
  moduleId: '6a358e5ffc29b5a47144468c',
  order: 1,
  type: 'reading',
  duration: 15,
  difficulty: 'beginner',
  status: 'published',
  title: 'Comments and pip in Python',
  titleKn: 'ಕಮೆಂಟ್ಸ್ ಅಂಡ್ pip ಇನ್ ಪೈಥಾನ್',
  desc: 'A comment is a line of text in a Python program that is ignored by the interpreter. Comments are used to explain code, improve readability, and make programs easier to understand.',
  descKn: 'ಒಂದು comment Python program ನಲ್ಲಿ ಪಠ್ಯದ ಒಂದು ಸಾಲು, ಇದನ್ನು interpreter ನಿರ್ಲಕ್ಷಿಸುತ್ತದೆ. Comments ಕೋಡ್ ವಿವರಿಸಲು, ಓದುವಿಕೆ ಸುಧಾರಿಸಲು, ಮತ್ತು programs ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ಸುಲಭಗೊಳಿಸಲು ಬಳಸಲಾಗುತ್ತದೆ.',
  objectives: [
    'Write single-line comments using # in Python',
    'Use triple-quoted strings to create multi-line comments',
    'Understand what pip is and how it manages Python packages',
    'Install, upgrade, and uninstall packages using pip commands',
    'Explain why commenting code improves readability and maintainability',
    'Explain how a docstring becomes a function\'s __doc__ attribute',
    'Use python -m pip to guarantee packages install into the correct Python environment',
  ],
  objectivesKn: [
    'Python ನಲ್ಲಿ # ಬಳಸಿ single-line comments ಬರೆಯಿರಿ',
    'Multi-line comments ಗಾಗಿ triple-quoted strings ಬಳಸಿ',
    'pip ಎಂದರೇನು ಮತ್ತು ಅದು Python packages ಅನ್ನು ಹೇಗೆ ನಿರ್ವಹಿಸುತ್ತದೆ ಎಂಬುದನ್ನು ಅರ್ಥ ಮಾಡಿಕೊಳ್ಳಿ',
    'pip commands ಬಳಸಿ packages install, upgrade, ಮತ್ತು uninstall ಮಾಡಿ',
    'Code ಗೆ comments ಸೇರಿಸುವುದು ಓದುವಿಕೆ ಮತ್ತು ನಿರ್ವಹಣೆಯನ್ನು ಏಕೆ ಸುಧಾರಿಸುತ್ತದೆ ಎಂಬುದನ್ನು ವಿವರಿಸಿ',
    'ಒಂದು docstring ಹೇಗೆ function ನ __doc__ attribute ಆಗುತ್ತದೆ ಎಂಬುದನ್ನು ವಿವರಿಸಿ',
    'ಸರಿಯಾದ Python environment ಗೆ packages install ಆಗುವುದನ್ನು ಖಚಿತಪಡಿಸಲು python -m pip ಬಳಸಿ',
  ],
  blocks: [
    {
      id: 'b2',
      type: 'concept',
      data: {
        headingEn: ' Comments in Python',
        bodyEn: "A comment is text in a Python file that is ignored by the interpreter. Comments are used to explain code, make notes, or temporarily disable code.\n\n• That last use -- temporarily disabling code by adding a # in front of it -- is called \"commenting out\" and is one of the most common debugging techniques in everyday programming.\n• Instead of deleting a line you're not sure about, you comment it out, run the program to see if the problem goes away, and either delete the line for good or remove the # to restore it.\n• This makes comments a genuinely practical tool, not just documentation -- they're part of how real programmers debug code every day.",
        bodyKn: 'ಒಂದು comment ಒಂದು Python file ನಲ್ಲಿ ಪಠ್ಯ, ಇದನ್ನು interpreter ನಿರ್ಲಕ್ಷಿಸುತ್ತದೆ. Comments ಕೋಡ್ ವಿವರಿಸಲು, ಟಿಪ್ಪಣಿಗಳನ್ನು ಮಾಡಲು, ಅಥವಾ ತಾತ್ಕಾಲಿಕವಾಗಿ ಕೋಡ್ ನಿಷ್ಕ್ರಿಯಗೊಳಿಸಲು ಬಳಸಲಾಗುತ್ತದೆ.\n\n• ಆ ಕೊನೆಯ ಬಳಕೆ -- ಅದರ ಮುಂದೆ ಒಂದು # ಸೇರಿಸಿ ಕೋಡ್ ಅನ್ನು ತಾತ್ಕಾಲಿಕವಾಗಿ ನಿಷ್ಕ್ರಿಯಗೊಳಿಸುವುದು -- ಇದನ್ನು "commenting out" ಎಂದು ಕರೆಯಲಾಗುತ್ತದೆ ಮತ್ತು ದೈನಂದಿನ programming ನಲ್ಲಿ ಅತ್ಯಂತ ಸಾಮಾನ್ಯ debugging techniques ಗಳಲ್ಲಿ ಒಂದು.\n• ನೀವು ಖಚಿತವಿಲ್ಲದ ಒಂದು ಸಾಲನ್ನು ಅಳಿಸುವ ಬದಲು, ನೀವು ಅದನ್ನು comment out ಮಾಡುತ್ತೀರಿ, ಸಮಸ್ಯೆ ಹೋಗುತ್ತದೆಯೇ ಎಂದು ನೋಡಲು program ಓಡಿಸುತ್ತೀರಿ, ಮತ್ತು ಸಾಲನ್ನು ಶಾಶ್ವತವಾಗಿ ಅಳಿಸುತ್ತೀರಿ ಅಥವಾ ಅದನ್ನು ಪುನಃಸ್ಥಾಪಿಸಲು # ತೆಗೆಯುತ್ತೀರಿ.\n• ಇದು comments ಅನ್ನು ನಿಜವಾಗಿ ಪ್ರಾಯೋಗಿಕ ಸಾಧನವಾಗಿಸುತ್ತದೆ, ಕೇವಲ documentation ಅಲ್ಲ -- ಅವು ನಿಜ programmers ಪ್ರತಿ ದಿನ ಕೋಡ್ debug ಮಾಡುವ ವಿಧಾನದ ಭಾಗ.',
        headingKn: 'Python ನಲ್ಲಿ Comments',
      },
    },
    {
      id: 'b4',
      type: 'heading',
      data: { textEn: 'Types of comments:     ', textKn: 'Comments ನ ವಿಧಗಳು:' },
    },
    {
      id: 'b5',
      type: 'concept',
      data: {
        headingEn: 'a) Single-line comment ',
        bodyEn: 'A single-line comment starts with #.\n\n• Everything after the # on that line is ignored by Python, but only on that line -- if code continues on the next line, it runs normally.\n• Single-line comments are most useful for explaining a specific tricky line right where it happens, like "# convert Celsius to Fahrenheit" next to the formula itself, so a reader doesn\'t have to work out what the formula means from scratch.',
        bodyKn: 'ಒಂದು single-line comment # ನಿಂದ ಆರಂಭವಾಗುತ್ತದೆ.\n\n• ಆ ಸಾಲಿನಲ್ಲಿ # ನಂತರ ಎಲ್ಲವನ್ನೂ Python ನಿರ್ಲಕ್ಷಿಸುತ್ತದೆ, ಆದರೆ ಆ ಸಾಲಿನಲ್ಲಿ ಮಾತ್ರ -- ಕೋಡ್ ಮುಂದಿನ ಸಾಲಿನಲ್ಲಿ ಮುಂದುವರಿದರೆ, ಅದು ಸಾಮಾನ್ಯವಾಗಿ ಚಲಿಸುತ್ತದೆ.\n• Single-line comments ಒಂದು ನಿರ್ದಿಷ್ಟ ಕಷ್ಟದ ಸಾಲನ್ನು ಅದು ಸಂಭವಿಸುವಲ್ಲೇ ವಿವರಿಸಲು ಅತ್ಯಂತ ಉಪಯುಕ್ತ, "# Celsius ಅನ್ನು Fahrenheit ಗೆ ಪರಿವರ್ತಿಸಿ" ಫಾರ್ಮುಲಾ ಪಕ್ಕದಲ್ಲೇ ಇರುವಂತೆ, ಆದ್ದರಿಂದ ಒಬ್ಬ ಓದುಗ ಫಾರ್ಮುಲಾ ಅರ್ಥ ಮೊದಲಿನಿಂದ ಲೆಕ್ಕಹಾಕಬೇಕಾಗಿಲ್ಲ.',
        headingKn: 'a) Single-line Comment',
      },
    },
    {
      id: 'b6',
      type: 'example',
      data: {
        textEn: '# This is a single-line comment\nprint("Hello, World!")',
        tag: 'Example:',
        textKn: '# ಇದು ಒಂದು single-line comment\nprint("Hello, World!")',
      },
    },
    {
      id: 'b7',
      type: 'concept',
      data: {
        headingEn: 'b) Multi-line comment',
        bodyEn: 'Python does not have a special multi-line comment syntax, but you can use multiple # lines or a triple-quoted string.\n\n• A stack of # lines is treated as a genuine comment by every tool (interpreter, IDE, linter), while a triple-quoted string ("""...""") is technically a string literal that Python evaluates and then discards if it\'s not assigned to anything -- it works for commenting but isn\'t a "real" comment under the hood.\n• Because of this subtle difference, most Python style guides recommend stacked # lines for multi-line comments and reserve triple-quoted strings for docstrings (the special comment placed right after a function or class definition to document what it does).',
        bodyKn: 'Python ಒಂದು ವಿಶೇಷ multi-line comment syntax ಹೊಂದಿಲ್ಲ, ಆದರೆ ನೀವು ಅನೇಕ # ಸಾಲುಗಳು ಅಥವಾ ಒಂದು triple-quoted string ಬಳಸಬಹುದು.\n\n• # ಸಾಲುಗಳ ಒಂದು ಜೋಡಣೆಯನ್ನು ಪ್ರತಿ tool (interpreter, IDE, linter) ಒಂದು ನಿಜ comment ಎಂದು ಪರಿಗಣಿಸುತ್ತದೆ, ಒಂದು triple-quoted string ("""...""") ತಾಂತ್ರಿಕವಾಗಿ ಒಂದು string literal ಇದನ್ನು Python evaluate ಮಾಡಿ ಯಾವುದಕ್ಕೂ ನಿಯೋಜಿಸದಿದ್ದರೆ ಬಿಟ್ಟುಬಿಡುತ್ತದೆ -- ಇದು commenting ಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ ಆದರೆ ಒಳಗೆ "ನಿಜ" comment ಅಲ್ಲ.\n• ಈ ಸೂಕ್ಷ್ಮ ವ್ಯತ್ಯಾಸದಿಂದಾಗಿ, ಬಹುತೇಕ Python style guides multi-line comments ಗಾಗಿ ಜೋಡಿಸಿದ # ಸಾಲುಗಳನ್ನು ಶಿಫಾರಸು ಮಾಡುತ್ತವೆ ಮತ್ತು docstrings ಗಾಗಿ (ಒಂದು function ಅಥವಾ class definition ನಂತರ ಅದು ಏನು ಮಾಡುತ್ತದೆ ಎಂದು ದಾಖಲಿಸಲು ಇಡುವ ವಿಶೇಷ comment) triple-quoted strings ಮೀಸಲಿಡುತ್ತವೆ.',
        headingKn: 'b) Multi-line Comment',
      },
    },
    {
      id: 'b8',
      type: 'example',
      data: {
        textEn: '# This is line 1\n# This is line 2\n# This is line 3\n\nusing triple quotes:\n"""\nThis is a multi-line string.\nIt is often used as a comment or documentation.\n"""',
        tag: 'Example',
        textKn: '# ಇದು line 1\n# ಇದು line 2\n# ಇದು line 3\n\ntriple quotes ಬಳಸಿ:\n"""\nಇದು ಒಂದು multi-line string.\nಇದನ್ನು ಆಗಾಗ್ಗೆ ಒಂದು comment ಅಥವಾ documentation ಆಗಿ ಬಳಸಲಾಗುತ್ತದೆ.\n"""',
      },
    },
    {
      id: 'doc-heading',
      type: 'heading',
      data: {
        textEn: 'Docstrings -- Comments That Become Data',
        textKn: 'Docstrings -- Data ಆಗುವ Comments',
      },
    },
    {
      id: 'doc-concept',
      type: 'concept',
      data: {
        headingEn: 'A special case: the triple-quoted string right after def',
        headingKn: 'ಒಂದು ವಿಶೇಷ ಸಂದರ್ಭ: def ನಂತರ ತಕ್ಷಣ ಬರುವ triple-quoted string',
        bodyEn: 'A triple-quoted string is only "just a comment" if it stands alone. But if you place one as the very first line inside a function, class, or module, Python treats it specially: it becomes that object\'s __doc__ attribute -- readable at runtime by your own code, by help(), and by documentation tools.\n\nThis is the one case where a "comment-like" string is not discarded -- it is genuinely stored and retrievable, unlike # comments which vanish completely once the file is parsed.',
        bodyKn: 'ಒಂದು triple-quoted string ಒಂಟಿಯಾಗಿ ನಿಂತರೆ ಮಾತ್ರ "ಕೇವಲ ಒಂದು comment". ಆದರೆ ನೀವು ಅದನ್ನು ಒಂದು function, class, ಅಥವಾ module ಒಳಗೆ ಮೊದಲ ಸಾಲಾಗಿ ಇಟ್ಟರೆ, Python ಅದನ್ನು ವಿಶೇಷವಾಗಿ ಪರಿಗಣಿಸುತ್ತದೆ: ಇದು ಆ object ನ __doc__ attribute ಆಗುತ್ತದೆ -- ನಿಮ್ಮ ಸ್ವಂತ ಕೋಡ್, help(), ಮತ್ತು documentation tools ಗಳಿಂದ runtime ನಲ್ಲಿ ಓದಬಹುದಾದ.\n\nಇದೊಂದೇ ಸಂದರ್ಭ ಒಂದು "comment-ನಂತಹ" string ಬಿಟ್ಟುಬಿಡಲ್ಪಡುವುದಿಲ್ಲ -- ಇದನ್ನು ನಿಜವಾಗಿ ಶೇಖರಿಸಲಾಗುತ್ತದೆ ಮತ್ತು ಮರುಪಡೆಯಬಹುದು, # comments ಇದಕ್ಕೆ ವಿರುದ್ಧವಾಗಿ file parse ಆದ ನಂತರ ಸಂಪೂರ್ಣವಾಗಿ ಮಾಯವಾಗುತ್ತವೆ.',
      },
    },
    {
      id: 'doc-code',
      type: 'code',
      data: {
        headingEn: 'Reading a docstring back at runtime',
        headingKn: 'Runtime ನಲ್ಲಿ ಒಂದು docstring ಅನ್ನು ಮತ್ತೆ ಓದುವುದು',
        code: 'def add(a, b):\n    """Add two numbers and return the result."""\n    return a + b\n\nprint(add.__doc__)\nprint(add(3, 5))',
      },
    },
    {
      id: 'doc-out',
      type: 'output',
      data: { output: 'Add two numbers and return the result.\n8' },
    },
    {
      id: 'b10',
      type: 'concept',
      data: {
        headingEn: 'pip in Python',
        bodyEn: 'pip is Python\'s package installer. It is used to install, update, and remove third-party Python packages.\n\nWhat pip does:\n• Installs packages from the Python Package Index (PyPI)\n• Updates installed packages\n• Uninstalls packages',
        headingKn: 'Python ನಲ್ಲಿ pip',
        bodyKn: 'pip Python ನ package installer. ಇದನ್ನು third-party Python packages ಅನ್ನು install, ಅಪ್ಡೇಟ್, ಮತ್ತು ತೆಗೆಯಲು ಬಳಸಲಾಗುತ್ತದೆ.\n\npip ಏನು ಮಾಡುತ್ತದೆ:\n• Python Package Index (PyPI) ಇಂದ packages install ಮಾಡುತ್ತದೆ\n• install ಆದ packages ಅಪ್ಡೇಟ್ ಮಾಡುತ್ತದೆ\n• packages uninstall ಮಾಡುತ್ತದೆ',
      },
    },
    {
      id: 'b11',
      type: 'text',
      data: {
        headingEn: 'Common pip commands:',
        descEn: 'Install a package:\npip install requests\n\nUpgrade a package:\npip install --upgrade requests\n\nUninstall a package:\npip uninstall requests\n\nList installed packages:\npip list\n\nShow package information:\npip show requests',
        headingKn: 'ಸಾಮಾನ್ಯ pip commands:',
        descKn: 'ಒಂದು package install ಮಾಡಿ:\npip install requests\n\nಒಂದು package upgrade ಮಾಡಿ:\npip install --upgrade requests\n\nಒಂದು package uninstall ಮಾಡಿ:\npip uninstall requests\n\ninstall ಆದ packages ಪಟ್ಟಿ ಮಾಡಿ:\npip list\n\npackage ಮಾಹಿತಿ ತೋರಿಸಿ:\npip show requests',
      },
    },
    {
      id: 'b12',
      type: 'example',
      data: {
        textEn: ' using an installed package:\nAfter installing requests, you can use it in Python:',
        tag: 'Example',
        textKn: 'ಒಂದು install ಆದ package ಬಳಸುವುದು:\nrequests install ಮಾಡಿದ ನಂತರ, ನೀವು ಅದನ್ನು Python ನಲ್ಲಿ ಬಳಸಬಹುದು:',
      },
    },
    {
      id: 'b13',
      type: 'code',
      data: {
        descEn: '',
        code: 'import requests\nresponse = requests.get("https://www.chatgpt.com")\nprint(response.status_code)',
      },
    },
    {
      id: 'pipcmd-heading',
      type: 'heading',
      data: { textEn: 'pip on the Command Line, Genuinely Run', textKn: 'pip Command Line ನಲ್ಲಿ, ನಿಜವಾಗಿ Run ಮಾಡಲಾಗಿದೆ' },
    },
    {
      id: 'pipcmd-concept',
      type: 'concept',
      data: {
        headingEn: 'Checking what pip is and which packages exist',
        headingKn: 'pip ಏನು ಮತ್ತು ಯಾವ packages ಇವೆ ಎಂದು ಪರಿಶೀಲಿಸುವುದು',
        bodyEn: 'Two of the most common pip commands beyond install are pip --version (confirms pip itself is working and tells you the Python it\'s attached to) and pip show <package> (prints metadata about an already-installed package -- version, summary, homepage). Both were actually run below, not just described.',
        bodyKn: 'install ಮೀರಿ ಅತ್ಯಂತ ಸಾಮಾನ್ಯ pip commands ಎರಡು pip --version (pip ಸ್ವತಃ ಕೆಲಸ ಮಾಡುತ್ತಿದೆ ಎಂದು ಖಚಿತಪಡಿಸುತ್ತದೆ ಮತ್ತು ಅದು ಜೊತೆಗೂಡಿದ Python ಅನ್ನು ಹೇಳುತ್ತದೆ) ಮತ್ತು pip show <package> (ಈಗಾಗಲೇ install ಆದ package ಬಗ್ಗೆ metadata ಮುದ್ರಿಸುತ್ತದೆ -- version, summary, homepage). ಎರಡನ್ನೂ ಕೆಳಗೆ ನಿಜವಾಗಿ run ಮಾಡಲಾಗಿದೆ, ಕೇವಲ ವಿವರಿಸಲಾಗಿಲ್ಲ.',
      },
    },
    {
      id: 'pipcmd-code',
      type: 'code',
      data: { headingEn: 'pip --version', headingKn: 'pip --version', code: 'pip --version' },
    },
    {
      id: 'pipcmd-out',
      type: 'output',
      data: {
        output: 'pip 26.1.1 from C:\\Python314\\Lib\\site-packages\\pip (python 3.14)\n(the exact version number and install path will be different on your machine)',
      },
    },
    {
      id: 'pipshow-code',
      type: 'code',
      data: { headingEn: 'pip show pip', headingKn: 'pip show pip', code: 'pip show pip' },
    },
    {
      id: 'pipshow-out',
      type: 'output',
      data: {
        output: 'Name: pip\nVersion: 26.1.1\nSummary: The PyPA recommended tool for installing Python packages.\nHome-page: https://pip.pypa.io/',
      },
    },
    {
      id: 'freeze-heading',
      type: 'heading',
      data: { textEn: "Saving Your Project's Dependencies", textKn: 'ನಿಮ್ಮ Project ನ Dependencies ಉಳಿಸುವುದು' },
    },
    {
      id: 'freeze-concept',
      type: 'concept',
      data: {
        headingEn: 'pip freeze and requirements.txt',
        headingKn: 'pip freeze ಮತ್ತು requirements.txt',
        bodyEn: 'pip freeze prints every package installed in your current environment along with its exact version, in a format that can be reinstalled later. Projects conventionally save this to a file called requirements.txt so that anyone (including future you, on a new machine) can recreate the exact same environment.',
        bodyKn: 'pip freeze ನಿಮ್ಮ ಪ್ರಸ್ತುತ environment ನಲ್ಲಿ install ಆದ ಪ್ರತಿ package ಅನ್ನು ಅದರ ನಿಖರ version ಜೊತೆ ಮುದ್ರಿಸುತ್ತದೆ, ನಂತರ ಮತ್ತೆ install ಮಾಡಬಹುದಾದ ಒಂದು format ನಲ್ಲಿ. Projects ಸಾಂಪ್ರದಾಯಿಕವಾಗಿ ಇದನ್ನು requirements.txt ಎಂಬ ಒಂದು file ಗೆ ಉಳಿಸುತ್ತವೆ, ಆದ್ದರಿಂದ ಯಾರಾದರೂ (ಭವಿಷ್ಯದ ನೀವು ಸೇರಿದಂತೆ, ಒಂದು ಹೊಸ machine ನಲ್ಲಿ) ಅದೇ environment ಅನ್ನು ಪುನಃ ರಚಿಸಬಹುದು.',
      },
    },
    {
      id: 'freeze-code',
      type: 'code',
      data: {
        headingEn: 'Saving and restoring an environment',
        headingKn: 'ಒಂದು environment ಉಳಿಸುವುದು ಮತ್ತು ಪುನಃಸ್ಥಾಪಿಸುವುದು',
        code: '# save the current environment\npip freeze > requirements.txt\n\n# on another machine, recreate it exactly\npip install -r requirements.txt',
      },
    },
    {
      id: 'freeze-out',
      type: 'output',
      data: {
        output: 'requirements.txt (illustrative sample -- your file lists whatever is actually installed):\nrequests==2.32.3\nnumpy==2.1.1\nflask==3.0.3',
      },
    },
    {
      id: 'multipy-heading',
      type: 'heading',
      data: {
        textEn: 'Common Pitfall: Which pip Is Actually Running?',
        textKn: 'ಸಾಮಾನ್ಯ ತಪ್ಪು: ಯಾವ pip ನಿಜವಾಗಿ Run ಆಗುತ್ತಿದೆ?',
      },
    },
    {
      id: 'multipy-concept',
      type: 'concept',
      data: {
        headingEn: 'python -m pip is the safer way to install',
        headingKn: 'python -m pip install ಹೆಚ್ಚು ಸುರಕ್ಷಿತ ಮಾರ್ಗ',
        bodyEn: 'If your computer has more than one Python installed (very common once you start using virtual environments), typing plain "pip install X" can silently install the package into the WRONG Python -- not the one that actually runs your script.\n\n"python -m pip install X" is safer because it guarantees pip runs using the exact same Python you typed to invoke it, no ambiguity. On this machine both forms genuinely point to the identical pip (confirmed below, since there\'s only one Python installed here) -- but on a machine with multiple Pythons, plain pip and python -m pip can print two different paths.',
        bodyKn: 'ನಿಮ್ಮ ಕಂಪ್ಯೂಟರ್ ಒಂದಕ್ಕಿಂತ ಹೆಚ್ಚು Python install ಹೊಂದಿದ್ದರೆ (ನೀವು virtual environments ಬಳಸಲು ಪ್ರಾರಂಭಿಸಿದ ನಂತರ ಬಹಳ ಸಾಮಾನ್ಯ), ಸರಳ "pip install X" ಟೈಪ್ ಮಾಡುವುದು package ಅನ್ನು ತಪ್ಪು Python ಗೆ ಮೌನವಾಗಿ install ಮಾಡಬಹುದು -- ನಿಮ್ಮ script ಅನ್ನು ನಿಜವಾಗಿ ಓಡಿಸುವ Python ಅಲ್ಲ.\n\n"python -m pip install X" ಹೆಚ್ಚು ಸುರಕ್ಷಿತ ಏಕೆಂದರೆ ಇದು pip ಅನ್ನು ನೀವು ಅದನ್ನು ಕರೆಯಲು ಟೈಪ್ ಮಾಡಿದ ಅದೇ Python ಬಳಸಿ ಚಲಿಸುತ್ತದೆ ಎಂದು ಖಚಿತಪಡಿಸುತ್ತದೆ, ಯಾವುದೇ ಗೊಂದಲವಿಲ್ಲ. ಈ machine ನಲ್ಲಿ ಎರಡೂ ರೂಪಗಳು ನಿಜವಾಗಿ ಅದೇ pip ಗೆ ತೋರಿಸುತ್ತವೆ (ಕೆಳಗೆ ಖಚಿತಪಡಿಸಲಾಗಿದೆ, ಏಕೆಂದರೆ ಇಲ್ಲಿ ಕೇವಲ ಒಂದು Python install ಇದೆ) -- ಆದರೆ ಅನೇಕ Pythons ಇರುವ ಒಂದು machine ನಲ್ಲಿ, ಸರಳ pip ಮತ್ತು python -m pip ಎರಡು ಬೇರೆ paths ಮುದ್ರಿಸಬಹುದು.',
      },
    },
    {
      id: 'multipy-code',
      type: 'code',
      data: {
        headingEn: 'pip --version   vs   python -m pip --version',
        headingKn: 'pip --version   vs   python -m pip --version',
        code: 'pip --version\npython -m pip --version',
      },
    },
    {
      id: 'multipy-out',
      type: 'output',
      data: {
        output: 'pip 26.1.1 from C:\\Python314\\Lib\\site-packages\\pip (python 3.14)\npip 26.1.1 from C:\\Python314\\Lib\\site-packages\\pip (python 3.14)\n(both lines matched exactly when genuinely run here -- on a multi-Python machine they can differ)',
      },
    },
    {
      id: 'b14',
      type: 'table',
      data: {
        rows: '| Concept      | Purpose                                       | Example                           \n| **Comments** | Explain and document Python code              | `# This is a comment`             |\n| **Comments** | Improve code readability and maintenance      | `# Calculate total marks`         |\n| **`pip`**    | Install, update, and remove Python packages   | `pip install requests`            |\n| **`pip`**    | Manage external libraries for Python projects | `pip list`, `pip uninstall numpy` |\n',
        captionEn: 'Summary',
        captionKn: 'ಸಾರಾಂಶ',
      },
    },
    {
      id: 'takeaways',
      type: 'concept',
      data: {
        headingEn: 'Key Takeaways',
        headingKn: 'ಮುಖ್ಯ ಅಂಶಗಳು',
        bodyEn: "• Comments (text the Python interpreter ignores) exist to explain code to humans, not to the computer.\n• Single-line comments start with #; multi-line comments use triple quotes (''' ... ''' or \"\"\" ... \"\"\").\n• A triple-quoted string placed as the FIRST line inside a function or class becomes its __doc__ attribute -- readable at runtime, unlike ordinary comments which vanish after parsing.\n• pip is Python's package installer -- it downloads and installs external libraries from the Python Package Index (PyPI) with a command like pip install requests.\n• pip freeze > requirements.txt saves your exact package versions so an environment can be recreated elsewhere.\n• On a machine with multiple Pythons, prefer python -m pip install over plain pip install to guarantee packages land in the right place.",
        bodyKn: '• Comments (Python interpreter ನಿರ್ಲಕ್ಷಿಸುವ ಪಠ್ಯ) ಕಂಪ್ಯೂಟರ್‌ಗೆ ಅಲ್ಲ, ಮನುಷ್ಯರಿಗೆ ಕೋಡ್ ವಿವರಿಸಲು ಅಸ್ತಿತ್ವದಲ್ಲಿವೆ.\n• Single-line comments # ನಿಂದ ಆರಂಭವಾಗುತ್ತವೆ; multi-line comments triple quotes ಬಳಸುತ್ತವೆ (\'\'\' ... \'\'\' ಅಥವಾ """ ... """).\n• ಒಂದು function ಅಥವಾ class ಒಳಗೆ ಮೊದಲ ಸಾಲಾಗಿ ಇಟ್ಟ triple-quoted string ಅದರ __doc__ attribute ಆಗುತ್ತದೆ -- runtime ನಲ್ಲಿ ಓದಬಹುದಾದ, ಸಾಮಾನ್ಯ comments ಗಿಂತ ಭಿನ್ನವಾಗಿ ಅವು parse ಆದ ನಂತರ ಮಾಯವಾಗುತ್ತವೆ.\n• pip Python ನ package installer -- ಇದು Python Package Index (PyPI) ನಿಂದ external libraries ಗಳನ್ನು pip install requests ನಂತಹ ಒಂದು command ಜೊತೆ ಡೌನ್‌ಲೋಡ್ ಮತ್ತು install ಮಾಡುತ್ತದೆ.\n• pip freeze > requirements.txt ನಿಮ್ಮ ನಿಖರ package versions ಉಳಿಸುತ್ತದೆ ಆದ್ದರಿಂದ ಒಂದು environment ಬೇರೆಡೆ ಪುನಃ ರಚಿಸಬಹುದು.\n• ಅನೇಕ Pythons ಇರುವ ಒಂದು machine ನಲ್ಲಿ, packages ಸರಿಯಾದ ಸ್ಥಳಕ್ಕೆ ಹೋಗುವುದನ್ನು ಖಚಿತಪಡಿಸಲು ಸರಳ pip install ಬದಲು python -m pip install ಆದ್ಯತೆ ನೀಡಿ.',
      },
    },
    {
      id: 'quiz',
      type: 'quiz',
      data: {
        questions: [
          {
            q: 'Which symbol starts a single-line comment in Python?',
            qKn: 'Python ನಲ್ಲಿ single-line comment ಯಾವ symbol ನಿಂದ ಆರಂಭವಾಗುತ್ತದೆ?',
            opts: ['//', '/*', '#', '--'],
            optsKn: ['//', '/*', '#', '--'],
            correct: 2,
          },
          {
            q: 'What is the purpose of a comment in Python?',
            qKn: 'Python ನಲ್ಲಿ ಒಂದು comment ನ ಉದ್ದೇಶ ಏನು?',
            opts: [
              'To execute additional code',
              'To store data',
              'To explain code — ignored by the Python interpreter',
              'To import modules',
            ],
            optsKn: [
              'ಹೆಚ್ಚುವರಿ ಕೋಡ್ execute ಮಾಡಲು',
              'ಡೇಟಾ ಸಂಗ್ರಹಿಸಲು',
              'ಕೋಡ್ ವಿವರಿಸಲು — Python interpreter ನಿರ್ಲಕ್ಷಿಸುತ್ತದೆ',
              'Modules import ಮಾಡಲು',
            ],
            correct: 2,
          },
          {
            q: 'How do you write a multi-line comment in Python?',
            qKn: 'Python ನಲ್ಲಿ ಒಂದು multi-line comment ಹೇಗೆ ಬರೆಯುತ್ತೀರಿ?',
            opts: [
              '/* comment */',
              '// comment',
              'Wrap text in triple quotes (""" or \'\'\')',
              '## comment ##',
            ],
            optsKn: [
              '/* comment */',
              '// comment',
              'Triple quotes (""" ಅಥವಾ \'\'\') ನಲ್ಲಿ ಪಠ್ಯ ಸುತ್ತಿ',
              '## comment ##',
            ],
            correct: 2,
          },
          {
            q: 'What is pip used for?',
            qKn: 'pip ಅನ್ನು ಯಾವುದಕ್ಕೆ ಬಳಸಲಾಗುತ್ತದೆ?',
            opts: [
              'Running Python scripts',
              'Installing, updating, and removing Python packages',
              'Debugging code',
              'Creating virtual environments only',
            ],
            optsKn: [
              'Python scripts ಓಡಿಸಲು',
              'Python packages ಅನ್ನು install, update, ಮತ್ತು ತೆಗೆಯಲು',
              'ಕೋಡ್ debug ಮಾಡಲು',
              'ಕೇವಲ virtual environments ರಚಿಸಲು',
            ],
            correct: 1,
          },
          {
            q: 'Which command installs the numpy package?',
            qKn: 'ಯಾವ command numpy package ಅನ್ನು install ಮಾಡುತ್ತದೆ?',
            opts: ['python install numpy', 'pip install numpy', 'import numpy', 'get numpy'],
            optsKn: ['python install numpy', 'pip install numpy', 'import numpy', 'get numpy'],
            correct: 1,
          },
          {
            q: 'Which of these is a valid single-line comment?',
            qKn: 'ಇವುಗಳಲ್ಲಿ ಯಾವುದು ಒಂದು ಮಾನ್ಯ single-line comment?',
            opts: ['// This is a comment', '/* comment */', '# This is a comment', '-- comment'],
            optsKn: ['// This is a comment', '/* comment */', '# This is a comment', '-- comment'],
            correct: 2,
          },
          {
            q: 'What command upgrades an already-installed package using pip?',
            qKn: 'ಈಗಾಗಲೇ install ಆದ ಒಂದು package ಅನ್ನು pip ಬಳಸಿ upgrade ಮಾಡುವ command ಯಾವುದು?',
            opts: [
              'pip update package',
              'pip install --upgrade package',
              'pip refresh package',
              'pip reinstall package',
            ],
            optsKn: [
              'pip update package',
              'pip install --upgrade package',
              'pip refresh package',
              'pip reinstall package',
            ],
            correct: 1,
          },
          {
            q: 'Triple-quoted strings (""") used as comments are technically what in Python?',
            qKn: 'Comments ಆಗಿ ಬಳಸಿದ Triple-quoted strings (""") Python ನಲ್ಲಿ ತಾಂತ್ರಿಕವಾಗಿ ಏನು?',
            opts: [
              'Actual comment syntax',
              'String literals that are not assigned (ignored at runtime)',
              'Multiline variable declarations',
              'Docstrings only — they cause errors elsewhere',
            ],
            optsKn: [
              'ನಿಜವಾದ comment syntax',
              'ನಿಯೋಜಿಸದ String literals (runtime ನಲ್ಲಿ ನಿರ್ಲಕ್ಷಿಸಲಾಗುತ್ತದೆ)',
              'Multiline variable declarations',
              'ಕೇವಲ Docstrings — ಅವು ಬೇರೆಡೆ errors ಉಂಟುಮಾಡುತ್ತವೆ',
            ],
            correct: 1,
          },
          {
            q: "What does a function's __doc__ attribute contain?",
            qKn: 'ಒಂದು function ನ __doc__ attribute ಏನನ್ನು ಒಳಗೊಂಡಿದೆ?',
            opts: [
              "The function's source code line count",
              'The triple-quoted string placed as the first line inside the function',
              'The name of the module the function is in',
              'Nothing -- __doc__ is always empty unless set manually',
            ],
            optsKn: [
              'Function ನ source code line count',
              'Function ಒಳಗೆ ಮೊದಲ ಸಾಲಾಗಿ ಇಟ್ಟ triple-quoted string',
              'Function ಇರುವ module ನ ಹೆಸರು',
              'ಏನೂ ಇಲ್ಲ -- ಕೈಯಾರೆ set ಮಾಡದಿದ್ದರೆ __doc__ ಯಾವಾಗಲೂ ಖಾಲಿ',
            ],
            correct: 1,
          },
          {
            q: 'Why prefer python -m pip install over plain pip install?',
            qKn: 'ಸರಳ pip install ಬದಲು python -m pip install ಏಕೆ ಆದ್ಯತೆ ನೀಡಬೇಕು?',
            opts: [
              'It installs packages faster',
              'It guarantees the package installs into the same Python you are running, avoiding multi-Python confusion',
              'It is required syntax in Python 3',
              'plain pip install is deprecated and no longer works',
            ],
            optsKn: [
              'ಇದು packages ಅನ್ನು ವೇಗವಾಗಿ install ಮಾಡುತ್ತದೆ',
              'ಇದು package ನೀವು ಓಡಿಸುತ್ತಿರುವ ಅದೇ Python ಗೆ install ಆಗುತ್ತದೆ ಎಂದು ಖಚಿತಪಡಿಸುತ್ತದೆ, ಅನೇಕ-Python ಗೊಂದಲ ತಪ್ಪಿಸುತ್ತದೆ',
              'ಇದು Python 3 ನಲ್ಲಿ ಅಗತ್ಯವಿರುವ syntax',
              'ಸರಳ pip install deprecated ಮತ್ತು ಇನ್ನು ಕೆಲಸ ಮಾಡುವುದಿಲ್ಲ',
            ],
            correct: 1,
          },
        ],
      },
    },
  ],
};
