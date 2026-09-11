module.exports = {
  "phaseId": "6a358e5ffc29b5a47144467a",
  "moduleId": "6a358e61fc29b5a4714446e9",
  "order": 0,
  "type": "reading",
  "duration": 15,
  "difficulty": "beginner",
  "status": "published",
  "title": "Python Dictionaries",
  "titleKn": "ಪೈಥಾನ್ ಡಿಕ್ಷನರೀಸ್",
  "desc": "Store data as key-value pairs, accessed by key instead of index",
  "descKn": "Store data as key-value pairs, accessed by key instead of index",
  "objectives": [
    "Create dictionaries using key-value pairs",
    "Access, add, update, and delete dictionary entries",
    "Iterate over keys, values, and items in a dictionary",
    "Use built-in dictionary methods: get(), keys(), values(), items(), update()",
    "Understand that dictionary keys must be unique and immutable",
    "Apply dictionaries to store and look up structured data"
  ],
  "objectivesKn": [
    "Key-value pairs ಬಳಸಿ dictionaries ರಚಿಸಿ",
    "Dictionary entries ಪ್ರವೇಶಿಸಿ, ಸೇರಿಸಿ, update ಮಾಡಿ ಮತ್ತು delete ಮಾಡಿ",
    "Dictionary ನ keys, values, ಮತ್ತು items ನ ಮೇಲೆ iterate ಮಾಡಿ",
    "Built-in dictionary methods ಬಳಸಿ: get(), keys(), values(), items(), update()",
    "Dictionary keys ಅನನ್ಯ ಮತ್ತು immutable ಆಗಿರಬೇಕು ಎಂಬುದನ್ನು ಅರ್ಥ ಮಾಡಿಕೊಳ್ಳಿ",
    "Structured data ಸಂಗ್ರಹಿಸಲು ಮತ್ತು ಹುಡುಕಲು dictionaries ಅನ್ವಯಿಸಿ"
  ],
  "blocks": [
    {
      "id": "b1",
      "type": "concept",
      "data": {
        "headingEn": "WHAT IS A DICTIONARY?",
        "bodyEn": "A dictionary is one of Python's most useful data structures. It stores data in key-value pairs, where every key has a corresponding value.\n\nThink of a dictionary like a real-world English dictionary:\n• The word is the key.\n• The meaning is the value.",
        "headingKn": "DICTIONARY ಎಂದರೇನು?",
        "bodyKn": "ಒಂದು dictionary Python ನ ಅತ್ಯಂತ ಉಪಯುಕ್ತ data structures ಗಳಲ್ಲಿ ಒಂದು. ಇದು ಡೇಟಾವನ್ನು key-value pairs ನಲ್ಲಿ ಸಂಗ್ರಹಿಸುತ್ತದೆ, ಅಲ್ಲಿ ಪ್ರತಿ key ಒಂದು ಅನುಗುಣವಾದ value ಹೊಂದಿದೆ.\n\nಒಂದು dictionary ಅನ್ನು ಒಂದು ನಿಜ-ಜಗತ್ತಿನ English dictionary ನಂತೆ ಯೋಚಿಸಿ:\n• Word key ಆಗಿದೆ.\n• Meaning value ಆಗಿದೆ."
      }
    },
    {
      "id": "b2",
      "type": "table",
      "data": {
        "captionEn": "Key → Value, just like a real dictionary",
        "rows": "Key | Value\nApple | A fruit\nPython | Programming Language\nIndia | Country",
        "captionKn": "Key → Value, ಒಂದು ನಿಜ dictionary ನಂತೆ"
      }
    },
    {
      "id": "b3",
      "type": "code",
      "data": {
        "headingEn": "A dictionary in Python",
        "descEn": "\"name\" is the key, \"Rahul\" is the value.",
        "code": "student = {\n    \"name\": \"Rahul\",\n    \"age\": 20,\n    \"course\": \"BCA\"\n}",
        "filename": "student.py",
        "headingKn": "Python ನಲ್ಲಿ ಒಂದು dictionary",
        "descKn": "\"name\" key, \"Rahul\" ಮೌಲ್ಯ."
      }
    },
    {
      "id": "b4",
      "type": "concept",
      "data": {
        "headingEn": "Dictionary Syntax",
        "bodyEn": "dictionary_name = {\n    key1: value1,\n    key2: value2,\n    key3: value3\n}",
        "headingKn": "Dictionary Syntax",
        "bodyKn": "dictionary_name = {\n    key1: value1,\n    key2: value2,\n    key3: value3\n}"
      }
    },
    {
      "id": "b5",
      "type": "code",
      "data": {
        "headingEn": "Creating and printing a dictionary",
        "descEn": "",
        "code": "student = {\n    \"name\": \"Rahul\",\n    \"age\": 20,\n    \"course\": \"Python\"\n}\n\nprint(student)",
        "filename": "create_dict.py",
        "headingKn": "ಒಂದು dictionary ರಚಿಸುವುದು ಮತ್ತು ಮುದ್ರಿಸುವುದು"
      }
    },
    {
      "id": "b6",
      "type": "output",
      "data": {
        "output": "{'name': 'Rahul', 'age': 20, 'course': 'Python'}"
      }
    },
    {
      "id": "b7",
      "type": "concept",
      "data": {
        "headingEn": "Accessing Values",
        "bodyEn": "Unlike lists, dictionaries are not accessed by index. They are accessed using keys.",
        "headingKn": "Values ಪ್ರವೇಶಿಸುವುದು",
        "bodyKn": "Lists ಗಿಂತ ಭಿನ್ನವಾಗಿ, dictionaries index ಮೂಲಕ ಪ್ರವೇಶಿಸಲಾಗುವುದಿಲ್ಲ. ಅವುಗಳನ್ನು keys ಬಳಸಿ ಪ್ರವೇಶಿಸಲಾಗುತ್ತದೆ."
      }
    },
    {
      "id": "b8",
      "type": "code",
      "data": {
        "headingEn": "Accessing by key",
        "descEn": "",
        "code": "student = {\n    \"name\": \"Rahul\",\n    \"age\": 20,\n    \"course\": \"Python\"\n}\n\nprint(student[\"name\"])\nprint(student[\"course\"])",
        "filename": "access.py",
        "headingKn": "Key ಮೂಲಕ ಪ್ರವೇಶಿಸುವುದು"
      }
    },
    {
      "id": "b9",
      "type": "output",
      "data": {
        "output": "Rahul\nPython"
      }
    },
    {
      "id": "b10",
      "type": "concept",
      "data": {
        "headingEn": "Dictionary Can Store Different Data Types",
        "bodyEn": "A dictionary can store:\n• Strings\n• Integers\n• Floats\n• Lists\n• Tuples\n• Another Dictionary",
        "headingKn": "Dictionary ಭಿನ್ನ Data Types ಸಂಗ್ರಹಿಸಬಹುದು",
        "bodyKn": "ಒಂದು dictionary ಸಂಗ್ರಹಿಸಬಹುದು:\n• Strings\n• Integers\n• Floats\n• Lists\n• Tuples\n• ಇನ್ನೊಂದು Dictionary"
      }
    },
    {
      "id": "b11",
      "type": "code",
      "data": {
        "headingEn": "Mixed data types in one dictionary",
        "descEn": "",
        "code": "student = {\n    \"name\": \"Rahul\",\n    \"age\": 20,\n    \"marks\": [85, 90, 92],\n    \"passed\": True\n}\n\nprint(student)",
        "filename": "mixed_types.py",
        "headingKn": "ಒಂದು dictionary ನಲ್ಲಿ ಮಿಶ್ರ data types"
      }
    },
    {
      "id": "b12",
      "type": "output",
      "data": {
        "output": "{'name': 'Rahul', 'age': 20, 'marks': [85, 90, 92], 'passed': True}"
      }
    },
    {
      "id": "b13",
      "type": "heading",
      "data": {
        "textEn": "Properties of Python Dictionaries",
        "level": "H1",
        "textKn": "Python Dictionaries ನ Properties"
      }
    },
    {
      "id": "b14",
      "type": "concept",
      "data": {
        "headingEn": "1. Dictionaries are Mutable",
        "bodyEn": "Mutable means we can change them after creation.",
        "headingKn": "1. Dictionaries Mutable ಆಗಿವೆ",
        "bodyKn": "Mutable ಎಂದರೆ ರಚಿಸಿದ ನಂತರ ನಾವು ಅವುಗಳನ್ನು ಬದಲಾಯಿಸಬಹುದು."
      }
    },
    {
      "id": "b15",
      "type": "code",
      "data": {
        "headingEn": "Changing a value",
        "descEn": "",
        "code": "student = {\n    \"name\": \"Rahul\",\n    \"age\": 20\n}\n\nstudent[\"age\"] = 21\n\nprint(student)",
        "filename": "mutable_dict.py",
        "headingKn": "ಒಂದು ಮೌಲ್ಯ ಬದಲಾಯಿಸುವುದು"
      }
    },
    {
      "id": "b16",
      "type": "output",
      "data": {
        "output": "{'name': 'Rahul', 'age': 21}"
      }
    },
    {
      "id": "b17",
      "type": "example",
      "data": {
        "tag": "Real-world Example",
        "textEn": "A student's age changes every year.",
        "textKn": "ಒಬ್ಬ ವಿದ್ಯಾರ್ಥಿಯ ವಯಸ್ಸು ಪ್ರತಿ ವರ್ಷ ಬದಲಾಗುತ್ತದೆ."
      }
    },
    {
      "id": "b18",
      "type": "concept",
      "data": {
        "headingEn": "2. Dictionaries are Indexed by Keys",
        "bodyEn": "Lists use numeric indexes.",
        "headingKn": "2. Dictionaries Keys ಇಂದ Index ಆಗಿವೆ",
        "bodyKn": "Lists ಸಂಖ್ಯಾತ್ಮಕ indexes ಬಳಸುತ್ತವೆ."
      }
    },
    {
      "id": "b19",
      "type": "code",
      "data": {
        "headingEn": "List uses a numeric index",
        "descEn": "",
        "code": "numbers = [10, 20, 30]\nprint(numbers[0])",
        "filename": "list_index.py",
        "headingKn": "List ಒಂದು numeric index ಬಳಸುತ್ತದೆ"
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
      "type": "code",
      "data": {
        "headingEn": "Dictionary uses a key",
        "descEn": "",
        "code": "student = {\n    \"name\": \"Rahul\",\n    \"age\": 20\n}\n\nprint(student[\"name\"])",
        "filename": "dict_key.py",
        "headingKn": "Dictionary ಒಂದು key ಬಳಸುತ್ತದೆ"
      }
    },
    {
      "id": "b22",
      "type": "output",
      "data": {
        "output": "Rahul"
      }
    },
    {
      "id": "b23",
      "type": "concept",
      "data": {
        "headingEn": "3. Duplicate Keys are Not Allowed",
        "bodyEn": "Every key must be unique.",
        "headingKn": "3. Duplicate Keys ಅನುಮತಿಸಲಾಗುವುದಿಲ್ಲ",
        "bodyKn": "ಪ್ರತಿ key ಅನನ್ಯವಾಗಿರಬೇಕು."
      }
    },
    {
      "id": "b24",
      "type": "code",
      "data": {
        "headingEn": "Writing a duplicate key",
        "descEn": "",
        "code": "student = {\n    \"name\": \"Rahul\",\n    \"name\": \"Amit\"\n}\n\nprint(student)",
        "filename": "duplicate_key.py",
        "headingKn": "ಒಂದು duplicate key ಬರೆಯುವುದು"
      }
    },
    {
      "id": "b25",
      "type": "output",
      "data": {
        "output": "{'name': 'Amit'}"
      }
    },
    {
      "id": "b26",
      "type": "concept",
      "data": {
        "headingEn": "",
        "bodyEn": "The second value replaces the first one.",
        "bodyKn": "ಎರಡನೇ ಮೌಲ್ಯ ಮೊದಲನೆಯದನ್ನು ಬದಲಾಯಿಸುತ್ತದೆ."
      }
    },
    {
      "id": "b27",
      "type": "concept",
      "data": {
        "headingEn": "4. Keys Must be Unique",
        "bodyEn": "",
        "headingKn": "4. Keys ಅನನ್ಯವಾಗಿರಬೇಕು"
      }
    },
    {
      "id": "b28",
      "type": "code",
      "data": {
        "headingEn": "Correct",
        "descEn": "",
        "code": "employee = {\n    \"id\": 101,\n    \"name\": \"John\",\n    \"salary\": 50000\n}",
        "filename": "correct_keys.py",
        "headingKn": "ಸರಿ"
      }
    },
    {
      "id": "b29",
      "type": "code",
      "data": {
        "headingEn": "Incorrect",
        "descEn": "Only the last value is stored.",
        "code": "employee = {\n    \"id\": 101,\n    \"id\": 102\n}\n\nprint(employee)",
        "filename": "incorrect_keys.py",
        "headingKn": "ತಪ್ಪು",
        "descKn": "ಕೊನೆಯ ಮೌಲ್ಯ ಮಾತ್ರ ಸಂಗ್ರಹವಾಗುತ್ತದೆ."
      }
    },
    {
      "id": "b30",
      "type": "output",
      "data": {
        "output": "{'id': 102}"
      }
    },
    {
      "id": "b31",
      "type": "heading",
      "data": {
        "textEn": "Dictionary Methods",
        "level": "H1",
        "textKn": "Dictionary Methods"
      }
    },
    {
      "id": "b32",
      "type": "code",
      "data": {
        "headingEn": "Suppose we have the following dictionary",
        "descEn": "",
        "code": "student = {\n    \"name\": \"Harry\",\n    \"country\": \"India\",\n    \"marks\": [92, 98, 96]\n}",
        "filename": "base_dict.py",
        "headingKn": "ನಾವು ಈ ಕೆಳಗಿನ dictionary ಹೊಂದಿದ್ದೇವೆ ಎಂದು ಭಾವಿಸೋಣ"
      }
    },
    {
      "id": "b33",
      "type": "concept",
      "data": {
        "headingEn": "1. items( )",
        "bodyEn": "Returns all key-value pairs.\n\nSyntax:\ndictionary.items()",
        "headingKn": "1. items( )",
        "bodyKn": "ಎಲ್ಲಾ key-value pairs ಹಿಂತಿರುಗಿಸುತ್ತದೆ.\n\nSyntax:\ndictionary.items()"
      }
    },
    {
      "id": "b34",
      "type": "code",
      "data": {
        "headingEn": "Using items( )",
        "descEn": "",
        "code": "student = {\n    \"name\": \"Harry\",\n    \"country\": \"India\",\n    \"marks\": [92, 98, 96]\n}\n\nprint(student.items())",
        "filename": "items_method.py",
        "headingKn": "items() ಬಳಸುವುದು"
      }
    },
    {
      "id": "b35",
      "type": "output",
      "data": {
        "output": "dict_items([('name', 'Harry'), ('country', 'India'), ('marks', [92, 98, 96])])"
      }
    },
    {
      "id": "b36",
      "type": "example",
      "data": {
        "tag": "Real-world Example",
        "textEn": "A school prints every student's detail.",
        "textKn": "ಒಂದು ಶಾಲೆ ಪ್ರತಿ ವಿದ್ಯಾರ್ಥಿಯ ವಿವರ ಮುದ್ರಿಸುತ್ತದೆ."
      }
    },
    {
      "id": "b37",
      "type": "concept",
      "data": {
        "headingEn": "2. keys( )",
        "bodyEn": "Returns only the keys.\n\nSyntax:\ndictionary.keys()",
        "headingKn": "2. keys( )",
        "bodyKn": "ಕೇವಲ keys ಹಿಂತಿರುಗಿಸುತ್ತದೆ.\n\nSyntax:\ndictionary.keys()"
      }
    },
    {
      "id": "b38",
      "type": "code",
      "data": {
        "headingEn": "Using keys( )",
        "descEn": "",
        "code": "student = {\n    \"name\": \"Harry\",\n    \"country\": \"India\",\n    \"marks\": [92, 98, 96]\n}\n\nprint(student.keys())",
        "filename": "keys_method.py",
        "headingKn": "keys() ಬಳಸುವುದು"
      }
    },
    {
      "id": "b39",
      "type": "output",
      "data": {
        "output": "dict_keys(['name', 'country', 'marks'])"
      }
    },
    {
      "id": "b40",
      "type": "concept",
      "data": {
        "headingEn": "3. values( )",
        "bodyEn": "Returns only the values.",
        "headingKn": "3. values( )",
        "bodyKn": "ಕೇವಲ values ಹಿಂತಿರುಗಿಸುತ್ತದೆ."
      }
    },
    {
      "id": "b41",
      "type": "code",
      "data": {
        "headingEn": "Using values( )",
        "descEn": "",
        "code": "student = {\n    \"name\": \"Harry\",\n    \"country\": \"India\",\n    \"marks\": [92, 98, 96]\n}\n\nprint(student.values())",
        "filename": "values_method.py",
        "headingKn": "values() ಬಳಸುವುದು"
      }
    },
    {
      "id": "b42",
      "type": "output",
      "data": {
        "output": "dict_values(['Harry', 'India', [92, 98, 96]])"
      }
    },
    {
      "id": "b43",
      "type": "concept",
      "data": {
        "headingEn": "4. update( )",
        "bodyEn": "Adds a new key-value pair or updates an existing one.\n\nSyntax:\ndictionary.update({key:value})",
        "headingKn": "4. update( )",
        "bodyKn": "ಒಂದು ಹೊಸ key-value pair ಸೇರಿಸುತ್ತದೆ ಅಥವಾ ಅಸ್ತಿತ್ವದಲ್ಲಿರುವುದನ್ನು ಅಪ್ಡೇಟ್ ಮಾಡುತ್ತದೆ.\n\nSyntax:\ndictionary.update({key:value})"
      }
    },
    {
      "id": "b44",
      "type": "code",
      "data": {
        "headingEn": "Example 1 — Add",
        "descEn": "",
        "code": "student = {\n    \"name\": \"Harry\",\n    \"country\": \"India\"\n}\n\nstudent.update({\"age\": 21})\n\nprint(student)",
        "filename": "update_add.py",
        "headingKn": "ಉದಾಹರಣೆ 1 — Add"
      }
    },
    {
      "id": "b45",
      "type": "output",
      "data": {
        "output": "{'name': 'Harry', 'country': 'India', 'age': 21}"
      }
    },
    {
      "id": "b46",
      "type": "code",
      "data": {
        "headingEn": "Example 2 — Update",
        "descEn": "",
        "code": "student = {\n    \"name\": \"Harry\",\n    \"age\": 20\n}\n\nstudent.update({\"age\": 21})\n\nprint(student)",
        "filename": "update_change.py",
        "headingKn": "ಉದಾಹರಣೆ 2 — Update"
      }
    },
    {
      "id": "b47",
      "type": "output",
      "data": {
        "output": "{'name': 'Harry', 'age': 21}"
      }
    },
    {
      "id": "b48",
      "type": "example",
      "data": {
        "tag": "Real-world Example",
        "textEn": "A student's address changes.",
        "textKn": "ಒಬ್ಬ ವಿದ್ಯಾರ್ಥಿಯ ವಿಳಾಸ ಬದಲಾಗುತ್ತದೆ."
      }
    },
    {
      "id": "b49",
      "type": "concept",
      "data": {
        "headingEn": "5. get( )",
        "bodyEn": "Returns the value of a key. Unlike [], it does not give an error if the key doesn't exist.\n\nSyntax:\ndictionary.get(key)",
        "headingKn": "5. get( )",
        "bodyKn": "ಒಂದು key ನ ಮೌಲ್ಯ ಹಿಂತಿರುಗಿಸುತ್ತದೆ. [] ಗಿಂತ ಭಿನ್ನವಾಗಿ, key ಅಸ್ತಿತ್ವದಲ್ಲಿಲ್ಲದಿದ್ದರೆ ಇದು ಒಂದು error ಕೊಡುವುದಿಲ್ಲ.\n\nSyntax:\ndictionary.get(key)"
      }
    },
    {
      "id": "b50",
      "type": "code",
      "data": {
        "headingEn": "Using get( )",
        "descEn": "",
        "code": "student = {\n    \"name\": \"Harry\",\n    \"age\": 20\n}\n\nprint(student.get(\"name\"))",
        "filename": "get_method.py",
        "headingKn": "get() ಬಳಸುವುದು"
      }
    },
    {
      "id": "b51",
      "type": "output",
      "data": {
        "output": "Harry"
      }
    },
    {
      "id": "b52",
      "type": "code",
      "data": {
        "headingEn": "If the key does not exist",
        "descEn": "",
        "code": "student = {\n    \"name\": \"Harry\"\n}\n\nprint(student.get(\"phone\"))",
        "filename": "get_missing.py",
        "headingKn": "Key ಅಸ್ತಿತ್ವದಲ್ಲಿ ಇಲ್ಲದಿದ್ದರೆ"
      }
    },
    {
      "id": "b53",
      "type": "output",
      "data": {
        "output": "None"
      }
    },
    {
      "id": "b54",
      "type": "concept",
      "data": {
        "headingEn": "Compare [ ] and get( )",
        "bodyEn": "",
        "headingKn": "[ ] ಮತ್ತು get( ) ಹೋಲಿಸಿ"
      }
    },
    {
      "id": "b55",
      "type": "code",
      "data": {
        "headingEn": "Using  [ ]",
        "descEn": "",
        "code": "student = {\n    \"name\": \"Harry\"\n}\n\nprint(student[\"phone\"])",
        "filename": "bracket_error.py",
        "headingKn": "[ ] ಬಳಸುವುದು"
      }
    },
    {
      "id": "b56",
      "type": "output",
      "data": {
        "output": "KeyError"
      }
    },
    {
      "id": "b57",
      "type": "code",
      "data": {
        "headingEn": "Using get( )",
        "descEn": "",
        "code": "print(student.get(\"phone\"))",
        "filename": "get_no_error.py",
        "headingKn": "get() ಬಳಸುವುದು"
      }
    },
    {
      "id": "b58",
      "type": "output",
      "data": {
        "output": "None"
      }
    },
    {
      "id": "b59",
      "type": "code",
      "data": {
        "headingEn": "Complete Example Program",
        "descEn": "",
        "code": "# Creating a dictionary\nstudent = {\n    \"name\": \"Rahul\",\n    \"age\": 20,\n    \"course\": \"Python\",\n    \"marks\": [85, 90, 95]\n}\n\nprint(\"Original Dictionary:\")\nprint(student)\n\n# Access values\nprint(\"\\nAccessing Values\")\nprint(\"Name:\", student[\"name\"])\nprint(\"Course:\", student.get(\"course\"))\n\n# Keys\nprint(\"\\nKeys\")\nprint(student.keys())\n\n# Values\nprint(\"\\nValues\")\nprint(student.values())\n\n# Items\nprint(\"\\nItems\")\nprint(student.items())\n\n# Update\nstudent.update({\"age\": 21})\nstudent.update({\"city\": \"Bangalore\"})\n\nprint(\"\\nUpdated Dictionary\")\nprint(student)\n\n# get()\nprint(\"\\nUsing get()\")\nprint(student.get(\"city\"))\nprint(student.get(\"phone\"))",
        "filename": "complete_example.py",
        "headingKn": "ಸಂಪೂರ್ಣ ಉದಾಹರಣೆ Program"
      }
    },
    {
      "id": "b60",
      "type": "output",
      "data": {
        "output": "Original Dictionary:\n{'name': 'Rahul', 'age': 20, 'course': 'Python', 'marks': [85, 90, 95]}\n\nAccessing Values\nName: Rahul\nCourse: Python\n\nKeys\ndict_keys(['name', 'age', 'course', 'marks'])\n\nValues\ndict_values(['Rahul', 20, 'Python', [85, 90, 95]])\n\nItems\ndict_items([('name', 'Rahul'), ('age', 20), ('course', 'Python'), ('marks', [85, 90, 95])])\n\nUpdated Dictionary\n{'name': 'Rahul', 'age': 21, 'course': 'Python', 'marks': [85, 90, 95], 'city': 'Bangalore'}\n\nUsing get()\nBangalore\nNone"
      }
    },
    {
      "id": "b61",
      "type": "code",
      "data": {
        "headingEn": "Real-World Example: Employee Database",
        "descEn": "",
        "code": "employee = {\n    \"id\": 101,\n    \"name\": \"Sameer\",\n    \"department\": \"AI\",\n    \"salary\": 75000\n}\n\nprint(\"Employee Details\")\nprint(\"ID:\", employee[\"id\"])\nprint(\"Name:\", employee[\"name\"])\nprint(\"Department:\", employee[\"department\"])\nprint(\"Salary:\", employee[\"salary\"])\n\n# Update salary\nemployee.update({\"salary\": 80000})\n\nprint(\"\\nAfter Salary Update\")\nprint(employee)",
        "filename": "employee_db.py",
        "headingKn": "ನಿಜ-ಜಗತ್ತಿನ ಉದಾಹರಣೆ: Employee Database"
      }
    },
    {
      "id": "b62",
      "type": "output",
      "data": {
        "output": "Employee Details\nID: 101\nName: Sameer\nDepartment: AI\nSalary: 75000\n\nAfter Salary Update\n{'id': 101, 'name': 'Sameer', 'department': 'AI', 'salary': 80000}"
      }
    },
    {
      "id": "b63",
      "type": "table",
      "data": {
        "captionEn": "Dictionary vs List vs Tuple",
        "rows": "Feature | List | Tuple | Dictionary\nSyntax | [] | () | {}\nOrdered | Yes | Yes | Yes (Python 3.7+)\nMutable | Yes | No | Yes\nStores Key-Value Pairs | No | No | Yes\nDuplicate Values | Yes | Yes | Values allowed, keys must be unique\nAccess Method | Index | Index | Key",
        "captionKn": "Dictionary vs List vs Tuple"
      }
    },
    {
      "type": "concept",
      "data": {
        "headingEn": "Key Takeaways",
        "headingKn": "ಮುಖ್ಯ ಅಂಶಗಳು",
        "bodyEn": "• A dictionary stores key-value pairs, letting you look up a value directly by a meaningful key instead of a numeric position.\n• Dictionaries are mutable, keys must be unique (a duplicate key silently overwrites the earlier value rather than raising an error), and values can be any data type including other dictionaries or lists.\n• Common methods include items(), keys(), values(), update(), and get() -- get() is safer than square-bracket access because it returns None (or a default) instead of crashing when a key is missing.\n• Dictionaries map naturally onto real-world lookups like an employee database keyed by ID -- this key-based, O(1)-average lookup speed is exactly why dictionaries (and their close relative, the hash map) are one of the most widely used data structures in all of software engineering, not just Python.",
        "bodyKn": "• ಒಂದು dictionary key-value pairs ಸಂಗ್ರಹಿಸುತ್ತದೆ, ಒಂದು ಸಂಖ್ಯಾತ್ಮಕ ಸ್ಥಾನದ ಬದಲು ಅರ್ಥಪೂರ್ಣ key ಮೂಲಕ ನೇರವಾಗಿ ಒಂದು ಮೌಲ್ಯ ಹುಡುಕಲು ಅನುಮತಿಸುತ್ತದೆ.\n• Dictionaries mutable, keys ಅನನ್ಯವಾಗಿರಬೇಕು (ಒಂದು ನಕಲಿ key ಮೌನವಾಗಿ ಹಿಂದಿನ ಮೌಲ್ಯವನ್ನು overwrite ಮಾಡುತ್ತದೆ, error ಎಸೆಯುವ ಬದಲು), ಮತ್ತು ಮೌಲ್ಯಗಳು ಇತರೆ dictionaries ಅಥವಾ lists ಸೇರಿದಂತೆ ಯಾವುದೇ data type ಆಗಿರಬಹುದು.\n• ಸಾಮಾನ್ಯ methods items(), keys(), values(), update(), ಮತ್ತು get() ಒಳಗೊಂಡಿವೆ -- get() square-bracket access ಗಿಂತ ಸುರಕ್ಷಿತ ಏಕೆಂದರೆ ಒಂದು key ಕಾಣೆಯಾದಾಗ crash ಆಗುವ ಬದಲು None (ಅಥವಾ ಒಂದು default) ಹಿಂತಿರುಗಿಸುತ್ತದೆ.\n• Dictionaries ID ಮೂಲಕ key ಮಾಡಿದ ಒಂದು employee database ನಂತಹ ನಿಜ-ಜಗತ್ತಿನ lookups ಗೆ ಸ್ವಾಭಾವಿಕವಾಗಿ ಹೊಂದಿಕೊಳ್ಳುತ್ತವೆ -- ಈ key-ಆಧಾರಿತ, O(1)-ಸರಾಸರಿ lookup ವೇಗವೇ dictionaries (ಮತ್ತು ಅವುಗಳ ಹತ್ತಿರದ ಸಂಬಂಧಿ, hash map) ಕೇವಲ Python ನಲ್ಲಿ ಅಲ್ಲ, ಇಡೀ software engineering ನಲ್ಲಿ ಅತ್ಯಂತ ವ್ಯಾಪಕವಾಗಿ ಬಳಸುವ data structures ಗಳಲ್ಲಿ ಒಂದಾಗಿರುವುದಕ್ಕೆ ಕಾರಣ."
      }
    },
    {
      "id": "b64",
      "type": "quiz",
      "data": {
        "questions": [
          {
            "q": "What is a dictionary in Python?",
            "opts": [
              "An ordered collection accessed only by numeric index",
              "A mutable collection of key-value pairs",
              "An immutable sequence of characters",
              "A collection that only stores duplicate values"
            ],
            "correct": 1,
            "qKn": "Python ನಲ್ಲಿ ಒಂದು dictionary ಎಂದರೇನು?",
            "optsKn": [
              "ಕೇವಲ numeric index ಮೂಲಕ ಪ್ರವೇಶಿಸುವ ಒಂದು ಕ್ರಮಬದ್ಧ ಸಂಗ್ರಹ",
              "key-value ಜೋಡಿಗಳ ಒಂದು mutable ಸಂಗ್ರಹ",
              "ಅಕ್ಷರಗಳ ಒಂದು immutable sequence",
              "ಕೇವಲ duplicate ಮೌಲ್ಯಗಳನ್ನು ಸಂಗ್ರಹಿಸುವ ಒಂದು ಸಂಗ್ರಹ"
            ]
          },
          {
            "q": "What is the difference between a key and a value in a dictionary?",
            "opts": [
              "There is no difference, they are the same thing",
              "A key identifies the data, and the value is the information stored for that key",
              "A key is always a number, and a value is always a string",
              "A value must be unique, but a key can repeat"
            ],
            "correct": 1,
            "qKn": "ಒಂದು dictionary ನಲ್ಲಿ key ಮತ್ತು value ನಡುವಿನ ವ್ಯತ್ಯಾಸ ಏನು?",
            "optsKn": [
              "ಯಾವುದೇ ವ್ಯತ್ಯಾಸವಿಲ್ಲ, ಅವು ಒಂದೇ ವಿಷಯ",
              "ಒಂದು key ಡೇಟಾವನ್ನು ಗುರುತಿಸುತ್ತದೆ, ಮತ್ತು value ಆ key ಗಾಗಿ ಸಂಗ್ರಹಿಸಿದ ಮಾಹಿತಿ",
              "ಒಂದು key ಯಾವಾಗಲೂ ಒಂದು ಸಂಖ್ಯೆ, ಮತ್ತು ಒಂದು value ಯಾವಾಗಲೂ ಒಂದು string",
              "ಒಂದು value ವಿಶಿಷ್ಟವಾಗಿರಬೇಕು, ಆದರೆ ಒಂದು key ಪುನರಾವರ್ತಿಸಬಹುದು"
            ]
          },
          {
            "q": "Can a dictionary have duplicate keys?",
            "opts": [
              "Yes, and both values are stored separately",
              "Yes, but only for numeric keys",
              "No, keys must be unique — the last value overwrites earlier ones",
              "No, and Python raises an error immediately if you try"
            ],
            "correct": 2,
            "qKn": "ಒಂದು dictionary duplicate keys ಹೊಂದಬಹುದೇ?",
            "optsKn": [
              "ಹೌದು, ಮತ್ತು ಎರಡೂ ಮೌಲ್ಯಗಳು ಪ್ರತ್ಯೇಕವಾಗಿ ಸಂಗ್ರಹವಾಗುತ್ತವೆ",
              "ಹೌದು, ಆದರೆ ಕೇವಲ numeric keys ಗಳಿಗೆ",
              "ಇಲ್ಲ, keys ವಿಶಿಷ್ಟವಾಗಿರಬೇಕು — ಕೊನೆಯ ಮೌಲ್ಯ ಮೊದಲಿನವುಗಳನ್ನು overwrite ಮಾಡುತ್ತದೆ",
              "ಇಲ್ಲ, ಮತ್ತು ನೀವು ಪ್ರಯತ್ನಿಸಿದರೆ Python ತಕ್ಷಣ ಒಂದು error ಎಸೆಯುತ್ತದೆ"
            ]
          },
          {
            "q": "Which method returns only the keys of a dictionary?",
            "opts": [
              "values()",
              "items()",
              "get()",
              "keys()"
            ],
            "correct": 3,
            "qKn": "ಯಾವ method ಒಂದು dictionary ನ keys ಅನ್ನು ಮಾತ್ರ ಹಿಂತಿರುಗಿಸುತ್ತದೆ?",
            "optsKn": [
              "values()",
              "items()",
              "get()",
              "keys()"
            ]
          },
          {
            "q": "Which method returns all key-value pairs of a dictionary?",
            "opts": [
              "items()",
              "keys()",
              "values()",
              "update()"
            ],
            "correct": 0,
            "qKn": "ಯಾವ method ಒಂದು dictionary ನ ಎಲ್ಲಾ key-value ಜೋಡಿಗಳನ್ನು ಹಿಂತಿರುಗಿಸುತ್ತದೆ?",
            "optsKn": [
              "items()",
              "keys()",
              "values()",
              "update()"
            ]
          },
          {
            "q": "If \"age\" does not exist in a dictionary, what is the difference between student[\"age\"] and student.get(\"age\")?",
            "opts": [
              "Both return None",
              "student[\"age\"] raises a KeyError, while student.get(\"age\") returns None",
              "Both raise a KeyError",
              "student[\"age\"] returns None, while student.get(\"age\") raises a KeyError"
            ],
            "correct": 1,
            "qKn": "\"age\" ಒಂದು dictionary ನಲ್ಲಿ ಅಸ್ತಿತ್ವದಲ್ಲಿ ಇಲ್ಲದಿದ್ದರೆ, student[\"age\"] ಮತ್ತು student.get(\"age\") ನಡುವಿನ ವ್ಯತ್ಯಾಸ ಏನು?",
            "optsKn": [
              "ಎರಡೂ None ಹಿಂತಿರುಗಿಸುತ್ತವೆ",
              "student[\"age\"] ಒಂದು KeyError ಎಸೆಯುತ್ತದೆ, ಆದರೆ student.get(\"age\") None ಹಿಂತಿರುಗಿಸುತ್ತದೆ",
              "ಎರಡೂ ಒಂದು KeyError ಎಸೆಯುತ್ತವೆ",
              "student[\"age\"] None ಹಿಂತಿರುಗಿಸುತ್ತದೆ, ಆದರೆ student.get(\"age\") ಒಂದು KeyError ಎಸೆಯುತ್ತದೆ"
            ]
          }
        ]
      }
    }
  ]
};
