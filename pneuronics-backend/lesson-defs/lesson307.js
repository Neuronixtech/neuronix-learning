module.exports = {
  "phaseId": "6a358e5ffc29b5a47144467a",
  "moduleId": "6a358e61fc29b5a4714446d4",
  "order": 0,
  "type": "reading",
  "duration": 12,
  "difficulty": "beginner",
  "status": "published",
  "title": "Python Lists",
  "titleKn": "ಪೈಥಾನ್ ಲಿಸ್ಟ್ಸ್",
  "desc": "Store multiple values of different data types in a single variable",
  "descKn": "Store multiple values of different data types in a single variable",
  "objectives": [
    "Create, access, and modify Python lists using indexing and slicing",
    "Add and remove elements using append(), insert(), remove(), and pop()",
    "Iterate over lists using for loops and list comprehensions",
    "Use built-in list methods: sort(), reverse(), len(), count(), index()",
    "Understand that lists are mutable and ordered",
    "Nest lists and work with 2D lists"
  ],
  "objectivesKn": [
    "Indexing ಮತ್ತು slicing ಬಳಸಿ Python lists ರಚಿಸಿ, ಪ್ರವೇಶಿಸಿ ಮತ್ತು ಮಾರ್ಪಡಿಸಿ",
    "append(), insert(), remove(), pop() ಬಳಸಿ elements ಸೇರಿಸಿ ಮತ್ತು ತೆಗೆದುಹಾಕಿ",
    "for loops ಮತ್ತು list comprehensions ಬಳಸಿ lists ನ ಮೇಲೆ iterate ಮಾಡಿ",
    "Built-in list methods ಬಳಸಿ: sort(), reverse(), len(), count(), index()",
    "Lists mutable ಮತ್ತು ordered ಎಂಬುದನ್ನು ಅರ್ಥ ಮಾಡಿಕೊಳ್ಳಿ",
    "Lists ಅನ್ನು nest ಮಾಡಿ 2D lists ನೊಂದಿಗೆ ಕೆಲಸ ಮಾಡಿ"
  ],
  "blocks": [
    {
      "id": "b1",
      "type": "concept",
      "data": {
        "headingEn": "WHAT IS A LIST?",
        "bodyEn": "A list is a collection (container) that can store multiple values in a single variable.\n\n• One of the biggest advantages of a Python list is that it can store values of different data types together.\n• Syntax: list_name = [value1, value2, value3, ...]",
        "bodyKn": "ಒಂದು list ಒಂದು ಸಂಗ್ರಹ (container) ಇದು ಒಂದೇ variable ನಲ್ಲಿ ಅನೇಕ values ಸಂಗ್ರಹಿಸಬಹುದು.\n\n• Python list ನ ಅತ್ಯಂತ ದೊಡ್ಡ ಅನುಕೂಲಗಳಲ್ಲಿ ಒಂದು ಎಂದರೆ ಇದು ಭಿನ್ನ data types ನ values ಗಳನ್ನು ಒಟ್ಟಿಗೆ ಸಂಗ್ರಹಿಸಬಹುದು.\n• Syntax: list_name = [value1, value2, value3, ...]",
        "headingKn": "LIST ಎಂದರೇನು?"
      }
    },
    {
      "id": "b2",
      "type": "code",
      "data": {
        "headingEn": "Creating a list",
        "descEn": "A list can mix strings, numbers, and booleans together.",
        "code": "friends = [\"apple\", \"akash\", \"rohan\", 7, False]\nprint(friends)",
        "filename": "lists.py",
        "headingKn": "ಒಂದು list ರಚಿಸುವುದು",
        "descKn": "ಒಂದು list strings, numbers, ಮತ್ತು booleans ಗಳನ್ನು ಒಟ್ಟಿಗೆ ಬೆರೆಸಬಹುದು."
      }
    },
    {
      "id": "b3",
      "type": "output",
      "data": {
        "output": "['apple', 'akash', 'rohan', 7, False]"
      }
    },
    {
      "id": "b4",
      "type": "concept",
      "data": {
        "headingEn": "Different data types in one list",
        "bodyEn": "• \"apple\" → String (str)\n• \"akash\" → String (str)\n• \"rohan\" → String (str)\n• 7 → Integer (int)\n• False → Boolean (bool)\n\nThis shows that a list can store values of different data types.",
        "headingKn": "ಒಂದೇ List ನಲ್ಲಿ ಭಿನ್ನ Data Types",
        "bodyKn": "• \"apple\" → String (str)\n• \"akash\" → String (str)\n• \"rohan\" → String (str)\n• 7 → Integer (int)\n• False → Boolean (bool)\n\nಇದು ಒಂದು list ಭಿನ್ನ data types ನ values ಸಂಗ್ರಹಿಸಬಹುದು ಎಂದು ತೋರಿಸುತ್ತದೆ."
      }
    },
    {
      "id": "b5",
      "type": "concept",
      "data": {
        "headingEn": "Why do we use lists?",
        "bodyEn": "Without a list, you'd need a separate variable for every value:",
        "headingKn": "ನಾವು Lists ಏಕೆ ಬಳಸುತ್ತೇವೆ?",
        "bodyKn": "ಒಂದು list ಇಲ್ಲದೆ, ನಿಮಗೆ ಪ್ರತಿ ಮೌಲ್ಯಕ್ಕೂ ಒಂದು ಪ್ರತ್ಯೇಕ variable ಬೇಕಾಗುತ್ತದೆ:"
      }
    },
    {
      "id": "b6",
      "type": "code",
      "data": {
        "headingEn": "Without a list",
        "descEn": "You need many variables.",
        "code": "friend1 = \"Akash\"\nfriend2 = \"Rohan\"\nfriend3 = \"Rahul\"\nfriend4 = \"Mohan\"",
        "filename": "no_list.py",
        "headingKn": "ಒಂದು list ಇಲ್ಲದೆ",
        "descKn": "ನಿಮಗೆ ಅನೇಕ variables ಬೇಕು."
      }
    },
    {
      "id": "b7",
      "type": "code",
      "data": {
        "headingEn": "Using a list",
        "descEn": "Everything is stored in one variable.",
        "code": "friends = [\"Akash\", \"Rohan\", \"Rahul\", \"Mohan\"]",
        "filename": "with_list.py",
        "headingKn": "ಒಂದು list ಬಳಸುವುದು",
        "descKn": "ಎಲ್ಲವೂ ಒಂದೇ variable ನಲ್ಲಿ ಸಂಗ್ರಹವಾಗಿದೆ."
      }
    },
    {
      "id": "b8",
      "type": "concept",
      "data": {
        "headingEn": "Accessing List Elements (Indexing)",
        "bodyEn": "Like strings, lists also use index numbers. Indexes start from 0.",
        "headingKn": "List Elements ಪ್ರವೇಶಿಸುವುದು (Indexing)",
        "bodyKn": "Strings ನಂತೆ, lists ಸಹ index numbers ಬಳಸುತ್ತವೆ. Indexes 0 ಇಂದ ಆರಂಭವಾಗುತ್ತವೆ."
      }
    },
    {
      "id": "b9",
      "type": "code",
      "data": {
        "headingEn": "Indexing a list",
        "descEn": "",
        "code": "friends = [\"apple\", \"akash\", \"rohan\", 7, False]\nprint(friends[0])\nprint(friends[1])\nprint(friends[2])\nprint(friends[3])\nprint(friends[4])",
        "filename": "indexing.py",
        "headingKn": "ಒಂದು list ಅನ್ನು Index ಮಾಡುವುದು"
      }
    },
    {
      "id": "b10",
      "type": "output",
      "data": {
        "output": "apple\nakash\nrohan\n7\nFalse"
      }
    },
    {
      "id": "b11",
      "type": "table",
      "data": {
        "captionEn": "Index Table",
        "rows": "Index | Value\n0 | apple\n1 | akash\n2 | rohan\n3 | 7\n4 | False",
        "captionKn": "Index ಕೋಷ್ಟಕ"
      }
    },
    {
      "id": "b12",
      "type": "concept",
      "data": {
        "headingEn": "Negative Indexing",
        "bodyEn": "Negative indexing starts from the end.",
        "headingKn": "Negative Indexing",
        "bodyKn": "Negative indexing ಅಂತ್ಯದಿಂದ ಆರಂಭವಾಗುತ್ತದೆ."
      }
    },
    {
      "id": "b13",
      "type": "code",
      "data": {
        "headingEn": "Using negative indices",
        "descEn": "",
        "code": "friends = [\"apple\", \"akash\", \"rohan\", 7, False]\nprint(friends[-1])\nprint(friends[-2])\nprint(friends[-3])",
        "filename": "neg_index.py",
        "headingKn": "Negative indices ಬಳಸುವುದು"
      }
    },
    {
      "id": "b14",
      "type": "output",
      "data": {
        "output": "False\n7\nrohan"
      }
    },
    {
      "id": "b15",
      "type": "table",
      "data": {
        "captionEn": "Negative Index Table",
        "rows": "Negative Index | Value\n-1 | False\n-2 | 7\n-3 | rohan\n-4 | akash\n-5 | apple",
        "captionKn": "Negative Index ಕೋಷ್ಟಕ"
      }
    },
    {
      "id": "b16",
      "type": "concept",
      "data": {
        "headingEn": "List Slicing",
        "bodyEn": "You can access multiple elements using slicing.",
        "headingKn": "List Slicing",
        "bodyKn": "ನೀವು slicing ಬಳಸಿ ಅನೇಕ elements ಪ್ರವೇಶಿಸಬಹುದು."
      }
    },
    {
      "id": "b17",
      "type": "code",
      "data": {
        "headingEn": "Slicing a list",
        "descEn": "0 → Included, 3 → Excluded",
        "code": "friends = [\"apple\", \"akash\", \"rohan\", 7, False]\nprint(friends[0:3])",
        "filename": "slicing.py",
        "headingKn": "ಒಂದು list ಅನ್ನು Slice ಮಾಡುವುದು",
        "descKn": "0 → ಸೇರಿಸಲಾಗಿದೆ, 3 → ಹೊರಗಿಡಲಾಗಿದೆ"
      }
    },
    {
      "id": "b18",
      "type": "output",
      "data": {
        "output": "['apple', 'akash', 'rohan']"
      }
    },
    {
      "id": "b19",
      "type": "code",
      "data": {
        "headingEn": "Another slicing example",
        "descEn": "",
        "code": "print(friends[1:4])",
        "filename": "slicing2.py",
        "headingKn": "ಇನ್ನೊಂದು slicing ಉದಾಹರಣೆ"
      }
    },
    {
      "id": "b20",
      "type": "output",
      "data": {
        "output": "['akash', 'rohan', 7]"
      }
    },
    {
      "id": "b21",
      "type": "concept",
      "data": {
        "headingEn": "Lists are Mutable",
        "bodyEn": "Unlike strings, lists are mutable, which means you can change their elements.",
        "headingKn": "Lists Mutable ಆಗಿವೆ",
        "bodyKn": "Strings ಗಿಂತ ಭಿನ್ನವಾಗಿ, lists mutable, ಅಂದರೆ ನೀವು ಅವುಗಳ elements ಬದಲಾಯಿಸಬಹುದು."
      }
    },
    {
      "id": "b22",
      "type": "code",
      "data": {
        "headingEn": "Changing an element",
        "descEn": "",
        "code": "friends = [\"apple\", \"akash\", \"rohan\"]\nfriends[0] = \"banana\"\nprint(friends)",
        "filename": "mutable.py",
        "headingKn": "ಒಂದು element ಬದಲಾಯಿಸುವುದು"
      }
    },
    {
      "id": "b23",
      "type": "output",
      "data": {
        "output": "['banana', 'akash', 'rohan']"
      }
    },
    {
      "id": "b24",
      "type": "heading",
      "data": {
        "textEn": "List Methods",
        "level": "H1",
        "textKn": "List Methods"
      }
    },
    {
      "id": "b25",
      "type": "method",
      "data": {
        "methodsEn": ".append(value) :: Adds an element at the end\n.insert(index, value) :: Adds an element at a specific index\n.remove(value) :: Removes the specified value\n.pop(index) :: Removes the element at a given index and returns it (removes the last item if no index given)\n.sort() :: Sorts the list in ascending order\n.reverse() :: Reverses the order of the list",
        "insightEn": "Most list methods change the list in place and return None — only pop() gives you back a value."
      }
    },
    {
      "id": "b26",
      "type": "code",
      "data": {
        "headingEn": "1. append( ) — add at the end",
        "descEn": "",
        "code": "numbers = [1, 2, 3]\nnumbers.append(4)\nprint(numbers)",
        "filename": "append.py",
        "headingKn": "1. append() — ಕೊನೆಯಲ್ಲಿ ಸೇರಿಸಿ"
      }
    },
    {
      "id": "b27",
      "type": "output",
      "data": {
        "output": "[1, 2, 3, 4]"
      }
    },
    {
      "id": "b28",
      "type": "code",
      "data": {
        "headingEn": "2. insert( ) — add at a specific index",
        "descEn": "Syntax: list.insert(index, value)",
        "code": "numbers = [1, 2, 4]\nnumbers.insert(2, 3)\nprint(numbers)",
        "filename": "insert.py",
        "headingKn": "2. insert() — ಒಂದು ನಿರ್ದಿಷ್ಟ index ನಲ್ಲಿ ಸೇರಿಸಿ",
        "descKn": "Syntax: list.insert(index, value)"
      }
    },
    {
      "id": "b29",
      "type": "output",
      "data": {
        "output": "[1, 2, 3, 4]"
      }
    },
    {
      "id": "b30",
      "type": "code",
      "data": {
        "headingEn": "3. remove( ) — remove a value",
        "descEn": "",
        "code": "numbers = [10, 20, 30, 40]\nnumbers.remove(30)\nprint(numbers)",
        "filename": "remove.py",
        "headingKn": "3. remove() — ಒಂದು ಮೌಲ್ಯ ತೆಗೆಯಿರಿ"
      }
    },
    {
      "id": "b31",
      "type": "output",
      "data": {
        "output": "[10, 20, 40]"
      }
    },
    {
      "id": "b32",
      "type": "code",
      "data": {
        "headingEn": "4. pop( ) — remove and return by index",
        "descEn": "",
        "code": "numbers = [10, 20, 30, 40]\nremoved = numbers.pop(2)\nprint(removed)\nprint(numbers)",
        "filename": "pop.py",
        "headingKn": "4. pop() — index ಮೂಲಕ ತೆಗೆದು ಹಿಂತಿರುಗಿಸಿ"
      }
    },
    {
      "id": "b33",
      "type": "output",
      "data": {
        "output": "30\n[10, 20, 40]"
      }
    },
    {
      "id": "b34",
      "type": "code",
      "data": {
        "headingEn": "pop( ) with no index",
        "descEn": "If no index is given, it removes the last element.",
        "code": "numbers = [10, 20, 30]\nnumbers.pop()\nprint(numbers)",
        "filename": "pop_last.py",
        "headingKn": "index ಇಲ್ಲದೆ pop()",
        "descKn": "ಯಾವುದೇ index ಕೊಡದಿದ್ದರೆ, ಇದು ಕೊನೆಯ element ಅನ್ನು ತೆಗೆಯುತ್ತದೆ."
      }
    },
    {
      "id": "b35",
      "type": "output",
      "data": {
        "output": "[10, 20]"
      }
    },
    {
      "id": "b36",
      "type": "code",
      "data": {
        "headingEn": "5. sort( ) — ascending order",
        "descEn": "",
        "code": "numbers = [5, 2, 8, 1, 4]\nnumbers.sort()\nprint(numbers)",
        "filename": "sort.py",
        "headingKn": "5. sort() — ಆರೋಹಣ ಕ್ರಮ"
      }
    },
    {
      "id": "b37",
      "type": "output",
      "data": {
        "output": "[1, 2, 4, 5, 8]"
      }
    },
    {
      "id": "b38",
      "type": "code",
      "data": {
        "headingEn": "6. reverse( ) — flip the order",
        "descEn": "",
        "code": "numbers = [1, 2, 3, 4]\nnumbers.reverse()\nprint(numbers)",
        "filename": "reverse.py",
        "headingKn": "6. reverse() — ಕ್ರಮವನ್ನು ತಿರುಗಿಸಿ"
      }
    },
    {
      "id": "b39",
      "type": "output",
      "data": {
        "output": "[4, 3, 2, 1]"
      }
    },
    {
      "id": "b40",
      "type": "concept",
      "data": {
        "headingEn": "Checking the Data Type",
        "bodyEn": "Use type( ) to confirm a variable is a list.",
        "headingKn": "Data Type ಪರಿಶೀಲಿಸುವುದು",
        "bodyKn": "ಒಂದು variable ಒಂದು list ಎಂದು ಖಚಿತಪಡಿಸಲು type( ) ಬಳಸಿ."
      }
    },
    {
      "id": "b41",
      "type": "code",
      "data": {
        "headingEn": "type( ) on a list",
        "descEn": "",
        "code": "friends = [\"apple\", \"akash\", \"rohan\", 7, False]\nprint(type(friends))",
        "filename": "type_check.py",
        "headingKn": "ಒಂದು list ಮೇಲೆ type()"
      }
    },
    {
      "id": "b42",
      "type": "output",
      "data": {
        "output": "<class 'list'>"
      }
    },
    {
      "id": "b43",
      "type": "code",
      "data": {
        "headingEn": "Complete Example Program",
        "descEn": "",
        "code": "friends = [\"apple\", \"akash\", \"rohan\", 7, False]\n\nprint(\"Original List:\")\nprint(friends)\n\nprint(\"\\nFirst Element:\", friends[0])\nprint(\"Last Element:\", friends[-1])\n\nfriends.append(\"Python\")\nprint(\"\\nAfter append():\")\nprint(friends)\n\nfriends.insert(1, \"Java\")\nprint(\"\\nAfter insert():\")\nprint(friends)\n\nfriends.remove(\"rohan\")\nprint(\"\\nAfter remove():\")\nprint(friends)\n\nfriends.pop()\nprint(\"\\nAfter pop():\")\nprint(friends)",
        "filename": "complete_example.py",
        "headingKn": "ಸಂಪೂರ್ಣ ಉದಾಹರಣೆ Program"
      }
    },
    {
      "id": "b44",
      "type": "output",
      "data": {
        "output": "Original List:\n['apple', 'akash', 'rohan', 7, False]\n\nFirst Element: apple\nLast Element: False\n\nAfter append():\n['apple', 'akash', 'rohan', 7, False, 'Python']\n\nAfter insert():\n['apple', 'Java', 'akash', 'rohan', 7, False, 'Python']\n\nAfter remove():\n['apple', 'Java', 'akash', 7, False, 'Python']\n\nAfter pop():\n['apple', 'Java', 'akash', 7, False]"
      }
    },
    {
      "type": "concept",
      "data": {
        "headingEn": "Key Takeaways",
        "headingKn": "ಮುಖ್ಯ ಅಂಶಗಳು",
        "bodyEn": "• A list is an ordered, mutable collection that can hold mixed data types in the same container.\n• Elements are accessed by index (including negative indices from the end) and extracted in ranges using slicing.\n• Because lists are mutable, methods like append(), insert(), remove(), pop(), sort(), and reverse() change the list in place rather than returning a new one.\n• Lists are the default choice for any collection of items that might grow, shrink, or reorder during a program's life -- this flexibility is exactly why lists are the most commonly used data structure in everyday Python code, including as the backbone of most datasets you'll process in later AI/ML lessons.",
        "bodyKn": "• ಒಂದು list ಒಂದು ಕ್ರಮಬದ್ಧ, mutable ಸಂಗ್ರಹ ಇದು ಒಂದೇ container ನಲ್ಲಿ ಮಿಶ್ರ data types ಇಟ್ಟುಕೊಳ್ಳಬಹುದು.\n• Elements ಗಳನ್ನು index ಮೂಲಕ (ಅಂತ್ಯದಿಂದ negative indices ಸೇರಿದಂತೆ) ಪ್ರವೇಶಿಸಲಾಗುತ್ತದೆ ಮತ್ತು slicing ಬಳಸಿ ranges ಗಳಲ್ಲಿ ಹೊರತೆಗೆಯಲಾಗುತ್ತದೆ.\n• Lists mutable ಆಗಿರುವುದರಿಂದ, append(), insert(), remove(), pop(), sort(), ಮತ್ತು reverse() ನಂತಹ methods ಒಂದು ಹೊಸದನ್ನು ಹಿಂತಿರುಗಿಸುವ ಬದಲು list ಅನ್ನು ಅದೇ ಸ್ಥಳದಲ್ಲಿ ಬದಲಾಯಿಸುತ್ತವೆ.\n• Program ನ ಜೀವಿತಾವಧಿಯಲ್ಲಿ ಬೆಳೆಯಬಹುದಾದ, ಕುಗ್ಗಬಹುದಾದ, ಅಥವಾ ಮರುಕ್ರಮಗೊಳಿಸಬಹುದಾದ ಯಾವುದೇ ಸಂಗ್ರಹಕ್ಕೆ lists default ಆಯ್ಕೆ -- ಈ ನಮ್ಯತೆಯೇ lists ದೈನಂದಿನ Python ಕೋಡ್‌ನಲ್ಲಿ ಅತ್ಯಂತ ಸಾಮಾನ್ಯವಾಗಿ ಬಳಸುವ data structure ಆಗಿರುವುದಕ್ಕೆ ಕಾರಣ, ನಂತರದ AI/ML lessons ಗಳಲ್ಲಿ ನೀವು ಪ್ರೊಸೆಸ್ ಮಾಡುವ ಬಹುತೇಕ datasets ಗಳ ಬೆನ್ನೆಲುಬಾಗಿ ಸೇರಿದಂತೆ."
      }
    },
    {
      "id": "b45",
      "type": "quiz",
      "data": {
        "questions": [
          {
            "q": "What is a key advantage of a Python list?",
            "opts": [
              "It can only store integers",
              "It can store values of different data types together",
              "It automatically sorts itself",
              "It cannot be changed once created"
            ],
            "correct": 1,
            "qKn": "Python list ನ ಒಂದು ಮುಖ್ಯ ಅನುಕೂಲ ಏನು?",
            "optsKn": [
              "ಇದು ಕೇವಲ integers ಸಂಗ್ರಹಿಸಬಹುದು",
              "ಇದು ಭಿನ್ನ data types ನ ಮೌಲ್ಯಗಳನ್ನು ಒಟ್ಟಿಗೆ ಸಂಗ್ರಹಿಸಬಹುದು",
              "ಇದು ಸ್ವಯಂಚಾಲಿತವಾಗಿ ತನ್ನನ್ನೇ sort ಮಾಡುತ್ತದೆ",
              "ಒಮ್ಮೆ ರಚಿಸಿದ ನಂತರ ಇದನ್ನು ಬದಲಾಯಿಸಲಾಗುವುದಿಲ್ಲ"
            ]
          },
          {
            "q": "What is the index of the first element in a list?",
            "opts": [
              "1",
              "-1",
              "0",
              "It depends on the list"
            ],
            "correct": 2,
            "qKn": "ಒಂದು list ನಲ್ಲಿ ಮೊದಲ element ನ index ಏನು?",
            "optsKn": [
              "1",
              "-1",
              "0",
              "ಇದು list ಅನ್ನು ಅವಲಂಬಿಸಿದೆ"
            ]
          },
          {
            "q": "Given friends = [\"apple\", \"akash\", \"rohan\", 7, False], what does friends[-1] return?",
            "opts": [
              "apple",
              "rohan",
              "7",
              "False"
            ],
            "correct": 3,
            "qKn": "friends = [\"apple\", \"akash\", \"rohan\", 7, False] ಆಗಿದ್ದರೆ, friends[-1] ಏನನ್ನು ಹಿಂತಿರುಗಿಸುತ್ತದೆ?",
            "optsKn": [
              "apple",
              "rohan",
              "7",
              "False"
            ]
          },
          {
            "q": "What does friends[1:4] return from friends = [\"apple\", \"akash\", \"rohan\", 7, False]?",
            "opts": [
              "['akash', 'rohan', 7]",
              "['apple', 'akash', 'rohan']",
              "['rohan', 7, False]",
              "['akash', 'rohan', 7, False]"
            ],
            "correct": 0,
            "qKn": "friends = [\"apple\", \"akash\", \"rohan\", 7, False] ನಿಂದ friends[1:4] ಏನನ್ನು ಹಿಂತಿರುಗಿಸುತ್ತದೆ?",
            "optsKn": [
              "['akash', 'rohan', 7]",
              "['apple', 'akash', 'rohan']",
              "['rohan', 7, False]",
              "['akash', 'rohan', 7, False]"
            ]
          },
          {
            "q": "Which list method removes and returns an element at a given index?",
            "opts": [
              "remove( )",
              "append( )",
              "pop( )",
              "sort( )"
            ],
            "correct": 2,
            "qKn": "ಯಾವ list method ಒಂದು ಕೊಟ್ಟ index ನಲ್ಲಿನ element ಅನ್ನು ತೆಗೆದು ಹಿಂತಿರುಗಿಸುತ್ತದೆ?",
            "optsKn": [
              "remove( )",
              "append( )",
              "pop( )",
              "sort( )"
            ]
          }
        ]
      }
    }
  ]
};
