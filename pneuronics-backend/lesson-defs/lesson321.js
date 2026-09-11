module.exports = {
  "phaseId": "6a358e5ffc29b5a47144467a",
  "moduleId": "6a358e5ffc29b5a47144467d",
  "order": 1,
  "type": "reading",
  "duration": 10,
  "difficulty": "beginner",
  "status": "published",
  "title": "Python Libraries",
  "titleKn": "ಪೈಥಾನ್ ಲೈಬ್ರರೀಸ್",
  "desc": "Learn about python libraries ",
  "descKn": "Learn about python libraries ",
  "objectives": [
    "Understand what a Python library is and why libraries save development time",
    "Identify the most important Python libraries for AI, data science, and web development",
    "Import and use a library in a Python script",
    "Distinguish between standard library modules and third-party packages",
    "Know when to use NumPy, Pandas, Matplotlib, and Scikit-learn"
  ],
  "objectivesKn": [
    "Python library ಎಂದರೇನು ಮತ್ತು libraries ಅಭಿವೃದ್ಧಿ ಸಮಯ ಉಳಿಸುವ ವಿಧಾನ ಅರ್ಥ ಮಾಡಿಕೊಳ್ಳಿ",
    "AI, data science ಮತ್ತು web development ಗಾಗಿ ಪ್ರಮುಖ Python libraries ಗುರುತಿಸಿ",
    "Python script ನಲ್ಲಿ library import ಮಾಡಿ ಬಳಸಿ",
    "Standard library modules ಮತ್ತು third-party packages ನಡುವಿನ ವ್ಯತ್ಯಾಸ ಅರ್ಥ ಮಾಡಿಕೊಳ್ಳಿ",
    "NumPy, Pandas, Matplotlib, Scikit-learn ಗಳನ್ನು ಯಾವಾಗ ಬಳಸಬೇಕು ಎಂದು ತಿಳಿಯಿರಿ"
  ],
  "blocks": [
    {
      "id": "b1",
      "type": "heading",
      "data": {
        "textEn": "Python Libraries 📚",
        "textKn": "Python ಲೈಬ್ರರಿಗಳು 📚"
      }
    },
    {
      "id": "b2",
      "type": "concept",
      "data": {
        "headingEn": " What is a Library?",
        "bodyEn": "A library is a collection of pre-written code that you can reuse in your programs — so you don't have to write everything from scratch.\n\nReal-life analogy:\n• A library has books on every topic -- instead of writing a new book, you just borrow the one you need!\n• Concretely: without a library, computing a square root would require you to write your own approximation algorithm from scratch.\n• With the math library, it's just math.sqrt(16), one line, already tested and optimized by thousands of other programmers.\n• This is the core value proposition of any library -- someone has already solved this exact problem well, so you can spend your time solving your own problem instead of reinventing solved ones.",
        "bodyKn": "ಒಂದು library ಮೊದಲೇ ಬರೆದ ಕೋಡ್‌ನ ಒಂದು ಸಂಗ್ರಹ, ಇದನ್ನು ನೀವು ನಿಮ್ಮ programs ಗಳಲ್ಲಿ ಮರುಬಳಕೆ ಮಾಡಬಹುದು — ಆದ್ದರಿಂದ ನೀವು ಎಲ್ಲವನ್ನೂ ಮೊದಲಿನಿಂದ ಬರೆಯಬೇಕಾಗಿಲ್ಲ.\n\nನಿಜ-ಜೀವನದ ಸಾದೃಶ್ಯ:\n• ಒಂದು library ಪ್ರತಿ ವಿಷಯದ ಬಗ್ಗೆ ಪುಸ್ತಕಗಳನ್ನು ಹೊಂದಿದೆ -- ಒಂದು ಹೊಸ ಪುಸ್ತಕ ಬರೆಯುವ ಬದಲು, ನಿಮಗೆ ಬೇಕಾದದ್ದನ್ನು ನೀವು ಕೇವಲ ಎರವಲು ಪಡೆಯುತ್ತೀರಿ!\n• ನಿರ್ದಿಷ್ಟವಾಗಿ: ಒಂದು library ಇಲ್ಲದೆ, ಒಂದು square root ಲೆಕ್ಕಹಾಕಲು ನೀವು ನಿಮ್ಮ ಸ್ವಂತ approximation algorithm ಮೊದಲಿನಿಂದ ಬರೆಯಬೇಕಾಗುತ್ತಿತ್ತು.\n• math library ಜೊತೆ, ಇದು ಕೇವಲ math.sqrt(16), ಒಂದು ಸಾಲು, ಈಗಾಗಲೇ ಸಾವಿರಾರು ಇತರೆ programmers ಗಳಿಂದ ಪರೀಕ್ಷಿಸಿ ಆಪ್ಟಿಮೈಸ್ ಮಾಡಲಾಗಿದೆ.\n• ಇದೇ ಯಾವುದೇ library ಯ ಮೂಲ ಮೌಲ್ಯ ಪ್ರತಿಪಾದನೆ -- ಯಾರೋ ಈಗಾಗಲೇ ಈ ನಿಖರ ಸಮಸ್ಯೆಯನ್ನು ಚೆನ್ನಾಗಿ ಪರಿಹರಿಸಿದ್ದಾರೆ, ಆದ್ದರಿಂದ ನೀವು ಪರಿಹರಿಸಿದ ಸಮಸ್ಯೆಗಳನ್ನು ಮರುಆವಿಷ್ಕರಿಸುವ ಬದಲು ನಿಮ್ಮ ಸ್ವಂತ ಸಮಸ್ಯೆ ಪರಿಹರಿಸಲು ನಿಮ್ಮ ಸಮಯ ಕಳೆಯಬಹುದು.",
        "headingKn": "Library ಎಂದರೇನು?"
      }
    },
    {
      "id": "b3",
      "type": "example",
      "data": {
        "textEn": "Python libraries have ready-made functions. You just import and use them!\nWithout library — you write everything yourself 😓",
        "tag": "Example ",
        "textKn": "Python libraries ಸಿದ್ಧ functions ಹೊಂದಿವೆ. ನೀವು ಕೇವಲ import ಮಾಡಿ ಬಳಸಿ!\nlibrary ಇಲ್ಲದೆ — ನೀವು ಎಲ್ಲವನ್ನೂ ಸ್ವತಃ ಬರೆಯುತ್ತೀರಿ 😓"
      }
    },
    {
      "id": "b4",
      "type": "code",
      "data": {
        "code": "result = 3.14159 * 7 * 7   # manually calculating area\n\n# With library — one clean line 😊\nimport math\nresult = math.pi * 7 * 7",
        "headingEn": "Uses math library as a import function",
        "descEn": "",
        "filename": "library.py",
        "headingKn": "import function ಆಗಿ math library ಬಳಸುವುದು"
      }
    },
    {
      "id": "b5",
      "type": "heading",
      "data": {
        "textEn": "Types of Python Libraries",
        "textKn": "Python ಲೈಬ್ರರಿಗಳ ವಿಧಗಳು"
      }
    },
    {
      "id": "b6",
      "type": "code",
      "data": {
        "headingEn": "1. 🔢 Math & Numbers — math, random",
        "code": "pythonimport math\n\nprint(math.sqrt(81))     \nprint(math.pi)            \nprint(math.factorial(5))  \nprint(math.ceil(4.2))    \nprint(math.floor(4.9))    \npythonimport random\n\nprint(random.randint(1, 10))          # Random number between 1-10\nprint(random.choice([\"🍎\",\"🍌\",\"🍇\"])) # Pick random item",
        "descEn": "A Math & Numbers library is a collection of functions, classes, or utilities that help with mathematical calculations, number operations, and random number generation. It is commonly available in most programming languages (for example, Python's math and random modules).",
        "headingKn": "1. 🔢 Math ಮತ್ತು Numbers — math, random",
        "descKn": "ಒಂದು Math & Numbers library ಎಂದರೆ mathematical calculations, number operations, ಮತ್ತು random number generation ಗೆ ಸಹಾಯ ಮಾಡುವ functions, classes, ಅಥವಾ utilities ನ ಒಂದು ಸಂಗ್ರಹ. ಇದು ಬಹುತೇಕ programming languages ಗಳಲ್ಲಿ ಸಾಮಾನ್ಯವಾಗಿ ಲಭ್ಯವಿದೆ (ಉದಾಹರಣೆಗೆ, Python ನ math ಮತ್ತು random modules)."
      }
    },
    {
      "id": "b7",
      "type": "output",
      "data": {
        "output": "   # Output: 9.0  → Square root\n   # Output: 3.14159...\n   # Output: 120  → 5×4×3×2×1\n   # Output: 5    → Round up\n   # Output: 4    → Round down"
      }
    },
    {
      "id": "b8",
      "type": "code",
      "data": {
        "headingEn": "2. 📅 Date & Time — datetime",
        "code": "pythonfrom datetime import datetime\n\nnow = datetime.now()\nprint(\"Current Date:\", now.date())    # Output: 2026-06-27\nprint(\"Current Time:\", now.time())    # Output: 14:35:22\nprint(\"Year:\", now.year)              # Output: 2026\nprint(\"Day:\", now.strftime(\"%A\"))",
        "descEn": "The Date & Time library (datetime) is a built-in Python module used to work with dates, times, and time intervals. It allows programmers to create, manipulate, format, and compare dates and times efficiently.",
        "headingKn": "2. 📅 Date ಮತ್ತು Time — datetime",
        "descKn": "Date & Time library (datetime) ಎಂದರೆ dates, times, ಮತ್ತು time intervals ಜೊತೆ ಕೆಲಸ ಮಾಡಲು ಬಳಸುವ ಒಂದು built-in Python module. ಇದು programmers ಗೆ dates ಮತ್ತು times ಅನ್ನು ಪರಿಣಾಮಕಾರಿಯಾಗಿ ರಚಿಸಲು, ಮಾರ್ಪಡಿಸಲು, format ಮಾಡಲು, ಮತ್ತು ಹೋಲಿಸಲು ಅನುಮತಿಸುತ್ತದೆ."
      }
    },
    {
      "id": "b9",
      "type": "output",
      "data": {
        "output": "2026-06-27\n14:35:22\n2026\nSaturday"
      }
    },
    {
      "id": "b10",
      "type": "code",
      "data": {
        "headingEn": "3. 💻 System & OS — os, sys",
        "descEn": "The System & OS libraries (os and sys) are built-in Python modules used to interact with the operating system and the Python runtime environment. They allow programmers to manage files and directories, work with environment variables, handle command-line arguments, and perform system-related tasks.",
        "code": "pythonimport os\n\nprint(os.getcwd())          \nos.mkdir(\"new_folder\")      \nprint(os.listdir(\".\"))       \npythonimport sys\n\nprint(sys.version)          \nprint(sys.platform)   ",
        "headingKn": "3. 💻 System ಮತ್ತು OS — os, sys",
        "descKn": "System & OS libraries (os ಮತ್ತು sys) ಎಂದರೆ operating system ಮತ್ತು Python runtime environment ಜೊತೆ ಸಂವಹನ ಮಾಡಲು ಬಳಸುವ built-in Python modules. ಇವು programmers ಗೆ files ಮತ್ತು directories ನಿರ್ವಹಿಸಲು, environment variables ಜೊತೆ ಕೆಲಸ ಮಾಡಲು, command-line arguments ನಿರ್ವಹಿಸಲು, ಮತ್ತು system-related tasks ನಿರ್ವಹಿಸಲು ಅನುಮತಿಸುತ್ತವೆ."
      }
    },
    {
      "id": "b11",
      "type": "output",
      "data": {
        "output": "Shows current folder path\nCreates a new folder\nLists all files in folder\nShows Python version installed\nOutput: win32 / linux / darwin"
      }
    },
    {
      "id": "b12",
      "type": "code",
      "data": {
        "headingEn": "4. 📊 Data & Science — statistics",
        "descEn": "The Data & Science library (statistics) is a built-in Python module used to perform basic statistical calculations. It provides functions to analyze numerical data, calculate averages, measures of spread, and other statistical values without requiring external libraries.",
        "code": "pythonimport statistics\n\nmarks = [85, 90, 78, 92, 88]\n\nprint(statistics.mean(marks))     \nprint(statistics.median(marks))  \nprint(statistics.mode(marks))    \nprint(statistics.stdev(marks)",
        "headingKn": "4. 📊 Data ಮತ್ತು Science — statistics",
        "descKn": "Data & Science library (statistics) ಎಂದರೆ ಮೂಲಭೂತ statistical calculations ನಿರ್ವಹಿಸಲು ಬಳಸುವ ಒಂದು built-in Python module. ಇದು numerical data ವಿಶ್ಲೇಷಿಸಲು, averages, measures of spread, ಮತ್ತು ಇತರೆ statistical values ಲೆಕ್ಕಾಚಾರ ಮಾಡಲು external libraries ಅಗತ್ಯವಿಲ್ಲದೆ functions ಒದಗಿಸುತ್ತದೆ.",
        "bodyEn": "• Python costs ₹0. Anyone can download, use, and even improve it.\n• In python you can use powerful free libraries like this math library.",
        "bodyKn": "• Python ವೆಚ್ಚ ₹0. ಯಾರಾದರೂ ಅದನ್ನು ಡೌನ್‌ಲೋಡ್, ಬಳಕೆ, ಮತ್ತು ಸುಧಾರಿಸಬಹುದು ಸಹ.\n• Python ನಲ್ಲಿ ನೀವು ಈ math library ನಂತಹ ಶಕ್ತಿಶಾಲಿ ಉಚಿತ libraries ಬಳಸಬಹುದು."
      }
    },
    {
      "id": "b13",
      "type": "output",
      "data": {
        "output": "Average  → 86.6\nMiddle   → 88\nMost repeated value"
      }
    },
    {
      "id": "b14",
      "type": "code",
      "data": {
        "headingEn": "5. 🌐 Internet & Web — requests",
        "descEn": "The Internet & Web library (requests) is a popular Python library used to send HTTP requests to web servers. It allows programmers to communicate with websites, APIs, and web services by sending GET, POST, PUT, DELETE, and other HTTP requests.",
        "code": "pythonimport requests\n\nresponse = requests.get(\"https://api.github.com\")\nprint(response.status_code)    \nprint(response.json())          ",
        "headingKn": "5. 🌐 Internet ಮತ್ತು Web — requests",
        "descKn": "Internet & Web library (requests) ಎಂದರೆ web servers ಗೆ HTTP requests ಕಳುಹಿಸಲು ಬಳಸುವ ಒಂದು ಜನಪ್ರಿಯ Python library. ಇದು programmers ಗೆ GET, POST, PUT, DELETE, ಮತ್ತು ಇತರೆ HTTP requests ಕಳುಹಿಸುವ ಮೂಲಕ websites, APIs, ಮತ್ತು web services ಜೊತೆ ಸಂವಹನ ಮಾಡಲು ಅನುಮತಿಸುತ್ತದೆ."
      }
    },
    {
      "id": "b15",
      "type": "output",
      "data": {
        "output": "Output: 200 (means success!)\nShows website data"
      }
    },
    {
      "id": "b16",
      "type": "code",
      "data": {
        "headingEn": "6. 📁 File Handling — json, csv",
        "descEn": "The File Handling libraries (json and csv) are built-in Python modules used to read, write, and process data files. They help programmers store, exchange, and manage structured data efficiently.",
        "code": "pythonimport json\n\n# Save data to a file\ndata = {\"name\": \"Rahul\", \"age\": 20}\njson_text = json.dumps(data)\nprint(json_text)    \npythonimport csv\n\n# Read a CSV file (like Excel)\nwith open(\"students.csv\", \"r\") as file:\n    reader = csv.reader(file)\n    for row in reader:\n        print(row)",
        "headingKn": "6. 📁 File Handling — json, csv",
        "descKn": "File Handling libraries (json ಮತ್ತು csv) ಎಂದರೆ data files ಓದಲು, ಬರೆಯಲು, ಮತ್ತು ಪ್ರಕ್ರಿಯೆಗೊಳಿಸಲು ಬಳಸುವ built-in Python modules. ಇವು programmers ಗೆ structured data ಪರಿಣಾಮಕಾರಿಯಾಗಿ ಸಂಗ್ರಹಿಸಲು, ವಿನಿಮಯ ಮಾಡಲು, ಮತ್ತು ನಿರ್ವಹಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತವೆ."
      }
    },
    {
      "id": "b17",
      "type": "output",
      "data": {
        "output": " Output: {\"name\": \"Rahul\", \"age\": 20}"
      }
    },
    {
      "id": "b18",
      "type": "code",
      "data": {
        "headingEn": "7. 🤖 Artificial Intelligence — scikit-learn, tensorflow",
        "descEn": "The Artificial Intelligence (AI) libraries scikit-learn and TensorFlow are widely used Python libraries for building machine learning (ML) and deep learning (DL) applications. They provide tools for training models, making predictions, and analyzing data.",
        "code": "Example using scikit-learn (install first: pip install scikit-learn)\nfrom sklearn.linear_model import LinearRegression\n\nmodel = LinearRegression()\n# Train the model, make predictions — AI made simple!\n",
        "headingKn": "7. 🤖 Artificial Intelligence — scikit-learn, tensorflow",
        "descKn": "Artificial Intelligence (AI) libraries scikit-learn ಮತ್ತು TensorFlow machine learning (ML) ಮತ್ತು deep learning (DL) applications ನಿರ್ಮಿಸಲು ವ್ಯಾಪಕವಾಗಿ ಬಳಸುವ Python libraries. ಇವು models train ಮಾಡಲು, predictions ಮಾಡಲು, ಮತ್ತು data ವಿಶ್ಲೇಷಿಸಲು tools ಒದಗಿಸುತ್ತವೆ."
      }
    },
    {
      "id": "b19",
      "type": "output",
      "data": {
        "output": "These libraries power ChatGPT-like applications and smart systems!"
      }
    },
    {
      "id": "b20",
      "type": "code",
      "data": {
        "headingEn": "8. 📈 Data Visualization — matplotlib",
        "descEn": "The Data Visualization library matplotlib is one of the most popular Python libraries for creating graphs, charts, and plots. It helps programmers visualize data, making it easier to understand trends, patterns, and relationships.",
        "code": "pythonimport matplotlib.pyplot as plt\n\nmarks = [85, 90, 78, 92, 88]\nnames = [\"Amit\", \"Priya\", \"Raj\", \"Sara\", \"Vikram\"]\n\nplt.bar(names, marks, color=\"skyblue\")\nplt.title(\"Student Marks\")\nplt.xlabel(\"Students\")\nplt.ylabel(\"Marks\")\nplt.show()",
        "headingKn": "8. 📈 Data Visualization — matplotlib",
        "descKn": "Data Visualization library matplotlib graphs, charts, ಮತ್ತು plots ರಚಿಸಲು ಅತ್ಯಂತ ಜನಪ್ರಿಯ Python libraries ಗಳಲ್ಲಿ ಒಂದು. ಇದು programmers ಗೆ data ದೃಶ್ಯೀಕರಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ, trends, patterns, ಮತ್ತು relationships ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದನ್ನು ಸುಲಭಗೊಳಿಸುತ್ತದೆ."
      }
    },
    {
      "id": "b21",
      "type": "output",
      "data": {
        "output": "Displays a bar chart! 📊"
      }
    },
    {
      "id": "b22",
      "type": "code",
      "data": {
        "headingEn": "9. 🎮 Games — pygame",
        "descEn": "The Game Development library pygame is a popular Python library used to create 2D games, multimedia applications, and interactive programs. It provides tools for handling graphics, sound, animation, keyboard and mouse input, and game events.",
        "code": "pythonimport pygame\n\npygame.init()\nscreen = pygame.display.set_mode((500, 500))\npygame.display.set_caption(\"My First Game!\")",
        "headingKn": "9. 🎮 Games — pygame",
        "descKn": "Game Development library pygame 2D games, multimedia applications, ಮತ್ತು interactive programs ರಚಿಸಲು ಬಳಸುವ ಒಂದು ಜನಪ್ರಿಯ Python library. ಇದು graphics, sound, animation, keyboard ಮತ್ತು mouse input, ಮತ್ತು game events ನಿರ್ವಹಿಸಲು tools ಒದಗಿಸುತ್ತದೆ."
      }
    },
    {
      "id": "b23",
      "type": "output",
      "data": {
        "output": "Build full games with graphics, sound, and controls!\n"
      }
    },
    {
      "id": "b24",
      "type": "concept",
      "data": {
        "headingEn": "How to Install External Libraries?",
        "bodyEn": "bash# Open terminal / command prompt and type:\npip install library_name\n\n# Examples:\npip install requests\npip install matplotlib\npip install pandas\n\nUsing pip install effectively:\n1. Install a library once per project by running pip install library_name -- it stays available on your machine until you uninstall it or update your Python environment, so you never need to reinstall it just to run your code again.\n2. If a teammate needs the exact same set of libraries, save your current list with pip freeze > requirements.txt.\n3. Share that requirements.txt file with your team (for example, by committing it to your project's repository).\n4. Anyone on the team can then recreate the exact same setup with a single pip install -r requirements.txt command, instead of installing each library one by one.",
        "bodyKn": "bash# Terminal / command prompt ತೆರೆದು ಟೈಪ್ ಮಾಡಿ:\npip install library_name\n\n# ಉದಾಹರಣೆಗಳು:\npip install requests\npip install matplotlib\npip install pandas\n\npip install ಅನ್ನು ಪರಿಣಾಮಕಾರಿಯಾಗಿ ಬಳಸುವುದು:\n1. pip install library_name ಚಲಾಯಿಸುವ ಮೂಲಕ ಪ್ರತಿ ಪ್ರಾಜೆಕ್ಟ್‌ಗೆ ಒಮ್ಮೆ ಒಂದು library install ಮಾಡಿ -- ನೀವು ಅದನ್ನು uninstall ಮಾಡುವವರೆಗೆ ಅಥವಾ ನಿಮ್ಮ Python environment ಅಪ್ಡೇಟ್ ಮಾಡುವವರೆಗೆ ಅದು ನಿಮ್ಮ ಯಂತ್ರದಲ್ಲಿ ಲಭ್ಯವಿರುತ್ತದೆ, ಆದ್ದರಿಂದ ನಿಮ್ಮ ಕೋಡ್ ಮತ್ತೆ ಚಲಾಯಿಸಲು ಅದನ್ನು ಮರುಸ್ಥಾಪಿಸುವ ಅಗತ್ಯವಿಲ್ಲ.\n2. ಒಬ್ಬ ತಂಡದ ಸಹೋದ್ಯೋಗಿಗೆ ನಿಖರವಾಗಿ ಅದೇ libraries ಸೆಟ್ ಬೇಕಾದರೆ, ನಿಮ್ಮ ಪ್ರಸ್ತುತ ಪಟ್ಟಿಯನ್ನು pip freeze > requirements.txt ಜೊತೆ ಉಳಿಸಿ.\n3. ಆ requirements.txt file ಅನ್ನು ನಿಮ್ಮ ತಂಡದೊಂದಿಗೆ ಹಂಚಿಕೊಳ್ಳಿ (ಉದಾಹರಣೆಗೆ, ಅದನ್ನು ನಿಮ್ಮ ಪ್ರಾಜೆಕ್ಟ್‌ನ repository ಗೆ commit ಮಾಡುವ ಮೂಲಕ).\n4. ತಂಡದ ಯಾರಾದರೂ ನಂತರ ಪ್ರತಿ library ಒಂದೊಂದಾಗಿ install ಮಾಡುವ ಬದಲು ಒಂದೇ pip install -r requirements.txt command ಜೊತೆ ನಿಖರವಾಗಿ ಅದೇ setup ಪುನರ್ನಿರ್ಮಿಸಬಹುದು.",
        "headingKn": "External Libraries ಹೇಗೆ Install ಮಾಡುವುದು?"
      }
    },
    {
      "id": "b25",
      "type": "table",
      "data": {
        "captionEn": "Summary",
        "rows": "Library      | Category       | Used For\n\nmath         | Mathematics    | Calculations, formulas\nrandom       | Mathematics    | Random numbers/choices\ndatetime     | Date & Time    | Dates, timers, calendars\nos           | System         | Files, folders, paths\nrequests     | Web            | Fetch data from internet\njson         | Data           | Store & read JSON data\nmatplotlib   | Visualization  | Charts & graphs\npandas       | Data Science   | Data analysis\nnumpy        | Data Science   | Arrays & math\nscikit-learn | AI / ML        | Machine learning\ntensorflow   | Deep Learning  | Neural networks\npygame       | Gaming         | Build 2D games\nflask        | Web Dev        | Build websites",
        "captionKn": "ಸಾರಾಂಶ"
      }
    },
    {
      "type": "concept",
      "data": {
        "headingEn": "Key Takeaways",
        "headingKn": "ಮುಖ್ಯ ಅಂಶಗಳು",
        "bodyEn": "• A library is a collection of pre-written code that saves you from reinventing common functionality.\n• Python libraries are organized by purpose: math & numbers (math, random), date & time (datetime), system & OS (os, sys), data & science (statistics), internet & web (requests), file handling (json, csv), AI (scikit-learn, tensorflow), visualization (matplotlib), and games (pygame).\n• Built-in libraries (like math) are imported directly; external libraries (like tensorflow) must first be installed with pip.\n• Recognizing which library category a task falls into is often the fastest way to avoid writing code from scratch -- almost every common task in Python already has a well-tested library for it.",
        "bodyKn": "• ಒಂದು library ಎಂದರೆ ಮೊದಲೇ ಬರೆದ ಕೋಡ್‌ನ ಒಂದು ಸಂಗ್ರಹ, ಇದು ಸಾಮಾನ್ಯ functionality ಪುನಃ ಆವಿಷ್ಕರಿಸುವುದರಿಂದ ನಿಮ್ಮನ್ನು ಉಳಿಸುತ್ತದೆ.\n• Python libraries ಉದ್ದೇಶದ ಪ್ರಕಾರ ಸಂಘಟಿಸಲ್ಪಟ್ಟಿವೆ: math & numbers (math, random), date & time (datetime), system & OS (os, sys), data & science (statistics), internet & web (requests), file handling (json, csv), AI (scikit-learn, tensorflow), visualization (matplotlib), ಮತ್ತು games (pygame).\n• Built-in libraries (math ನಂತಹ) ನೇರವಾಗಿ import ಮಾಡಲಾಗುತ್ತದೆ; external libraries (tensorflow ನಂತಹ) ಮೊದಲು pip ಜೊತೆ install ಮಾಡಬೇಕು.\n• ಒಂದು ಕೆಲಸ ಯಾವ library ವರ್ಗಕ್ಕೆ ಸೇರುತ್ತದೆ ಎಂದು ಗುರುತಿಸುವುದು ಆಗಾಗ ಮೊದಲಿನಿಂದ ಕೋಡ್ ಬರೆಯುವುದನ್ನು ತಪ್ಪಿಸುವ ಅತ್ಯಂತ ವೇಗದ ಮಾರ್ಗ -- Python ನಲ್ಲಿ ಬಹುತೇಕ ಪ್ರತಿ ಸಾಮಾನ್ಯ ಕೆಲಸಕ್ಕೆ ಈಗಾಗಲೇ ಒಂದು ಚೆನ್ನಾಗಿ-ಪರೀಕ್ಷಿಸಿದ library ಇದೆ."
      }
    },
    {
      "id": "lv-heading",
      "type": "heading",
      "data": {
        "textEn": "Checking a Library's Version",
        "textKn": "ಒಂದು Library ನ Version ಪರಿಶೀಲಿಸುವುದು"
      }
    },
    {
      "id": "lv-concept",
      "type": "concept",
      "data": {
        "headingEn": "The __version__ attribute",
        "headingKn": "__version__ attribute",
        "bodyEn": "Most installed libraries expose their version through a __version__ attribute, so you can check exactly what you have installed without leaving Python. This matters because a tutorial written for one version of a library can behave differently on another.",
        "bodyKn": "ಬಹುತೇಕ install ಆದ libraries Python ಬಿಡದೆ ನೀವು ಏನು install ಮಾಡಿದ್ದೀರಿ ಎಂದು ನಿಖರವಾಗಿ ಪರಿಶೀಲಿಸಲು __version__ attribute ಮೂಲಕ ತಮ್ಮ version ತೋರಿಸುತ್ತವೆ. ಇದು ಮುಖ್ಯ ಏಕೆಂದರೆ ಒಂದು library ನ ಒಂದು version ಗಾಗಿ ಬರೆದ ಒಂದು tutorial ಇನ್ನೊಂದು version ನಲ್ಲಿ ಬೇರೆ ರೀತಿ ವರ್ತಿಸಬಹುದು."
      }
    },
    {
      "id": "lv-code",
      "type": "code",
      "data": {
        "headingEn": "Checking numpy's installed version",
        "headingKn": "numpy ನ install ಆದ version ಪರಿಶೀಲಿಸುವುದು",
        "code": "import numpy\nprint(numpy.__version__)"
      }
    },
    {
      "id": "lv-out",
      "type": "output",
      "data": {
        "output": "2.4.6\n(the exact version will differ depending on what's installed on your machine)"
      }
    },
    {
      "id": "b26",
      "type": "quiz",
      "data": {
        "questions": [
          {
            "q": "Which command is used to install an external Python library?",
            "opts": [
              "install python library_name",
              "pip add library_name",
              "pip install library_name",
              "python install library_name"
            ],
            "correct": 2,
            "qKn": "ಒಂದು external Python library install ಮಾಡಲು ಯಾವ command ಬಳಸಲಾಗುತ್ತದೆ?",
            "optsKn": [
              "install python library_name",
              "pip add library_name",
              "pip install library_name",
              "python install library_name"
            ]
          },
          {
            "q": "Which library is used for sending HTTP requests in Python?",
            "opts": [
              "os ",
              "requests ",
              "math",
              "csv"
            ],
            "correct": 1,
            "qKn": "Python ನಲ್ಲಿ HTTP requests ಕಳುಹಿಸಲು ಯಾವ library ಬಳಸಲಾಗುತ್ತದೆ?",
            "optsKn": [
              "os ",
              "requests ",
              "math",
              "csv"
            ]
          },
          {
            "q": "Which module is used for working with dates and times in Python?",
            "opts": [
              "timeit ",
              "datetime",
              "calendarx",
              "dateutil-core"
            ],
            "correct": 1,
            "qKn": "Python ನಲ್ಲಿ dates ಮತ್ತು times ಜೊತೆ ಕೆಲಸ ಮಾಡಲು ಯಾವ module ಬಳಸಲಾಗುತ್ತದೆ?",
            "optsKn": [
              "timeit ",
              "datetime",
              "calendarx",
              "dateutil-core"
            ]
          },
          {
            "q": "Which command shows all installed Python libraries?",
            "opts": [
              "pip show all ",
              "pip list",
              "pip show list ",
              "pip show installed"
            ],
            "correct": 1,
            "qKn": "ಎಲ್ಲಾ install ಆದ Python libraries ಯಾವ command ತೋರಿಸುತ್ತದೆ?",
            "optsKn": [
              "pip show all ",
              "pip list",
              "pip show list ",
              "pip show installed"
            ]
          },
          {
            "q": "Which library is commonly used for data visualization in Python?",
            "opts": [
              "matplotlib ",
              "sklearn",
              "pygame",
              "json"
            ],
            "correct": 0,
            "qKn": "Python ನಲ್ಲಿ data visualization ಗಾಗಿ ಸಾಮಾನ್ಯವಾಗಿ ಯಾವ library ಬಳಸಲಾಗುತ್ತದೆ?",
            "optsKn": [
              "matplotlib ",
              "sklearn",
              "pygame",
              "json"
            ]
          }
        ]
      }
    }
  ]
};
