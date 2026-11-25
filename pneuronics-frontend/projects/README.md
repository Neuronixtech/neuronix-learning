# AI Practical Project Learning Kit

Five complete, beginner-friendly AI projects, each in its own Google Colab notebook. You learn by building: every notebook explains the idea, shows the code, runs it, and explains the output.

| # | Notebook | Domain | Difficulty | Dataset |
|---|---|---|---|---|
| 1 | `Project_1_House_Price_Prediction.ipynb` | Machine Learning (regression) | Beginner | California Housing (scikit-learn) |
| 2 | `Project_2_Plant_Disease_Detection.ipynb` | Computer Vision, Deep Learning | Beginner to Intermediate | PlantVillage (TensorFlow Datasets) |
| 3 | `Project_3_Sentiment_Analysis.ipynb` | Natural Language Processing | Beginner | IMDb Movie Reviews (Hugging Face) |
| 4 | `Project_4_Handwritten_Digit_Recognition.ipynb` | Deep Learning, Computer Vision | Intermediate | MNIST (Keras) |
| 5 | `Project_5_AI_PDF_Chatbot.ipynb` | Generative AI, LLMs, RAG | Intermediate | Your own PDF |

Also included: `Student_Project_Guide.md` (how to understand, modify, test, present and defend each project, with 10 viva questions per project).

## Prerequisites

* A free Google account (for Google Colab).
* A laptop or phone with a browser and an internet connection. No local installation is needed.
* No prior AI knowledge. The notebooks explain every concept they use.
* Project 5 optionally uses a free Gemini API key (see below). Without a key it still runs using a free local model.

## Python basics required

You should be comfortable reading:

* variables, numbers, strings, lists and dictionaries
* `if` statements and `for` / `while` loops
* defining and calling functions
* importing a library (`import numpy as np`)

If you know these, you can follow every notebook. If not, spend a few hours on a beginner Python course first.

## How to open a notebook in Google Colab

1. Go to <https://colab.research.google.com>.
2. Choose **File → Upload notebook** and pick one of the `.ipynb` files.
   (Or upload the files to Google Drive, double-click one and choose **Open with → Google Colaboratory**. Or, if the kit is on GitHub, use **File → Open notebook → GitHub**.)
3. For Projects 2 and 4, switch on the free GPU: **Runtime → Change runtime type → T4 GPU → Save**.

## How to execute cells

* Click a code cell and press **Shift + Enter** (run and move to the next cell), or click the ▶ button.
* Run cells **in order from top to bottom**. Later cells depend on variables created earlier.
* To run everything: **Runtime → Run all**.
* Some cells wait for you: file-upload buttons (Projects 2, 4, 5) and text boxes (`input()` in Projects 1, 3, 5). Type your answer and press Enter. Pressing Enter on an empty box uses a default or skips.
* If you restart the runtime, run the cells from the top again.

## How to download datasets

You do not download anything by hand. Each notebook fetches its own dataset in code:

| Project | How the data arrives | Approximate size |
|---|---|---|
| 1 | `fetch_california_housing()` | 1 MB |
| 2 | `tfds.load("plant_village")` | about 0.8 GB, several minutes the first time |
| 3 | `load_dataset("stanfordnlp/imdb")` | about 80 MB |
| 4 | `keras.datasets.mnist.load_data()` | about 11 MB |
| 5 | You upload a text-based PDF (or the notebook creates a small fictional sample) | n/a |

Colab storage is temporary: files disappear when the session ends, so the notebooks also offer to download the trained model at the end.

### Project 5 API key (optional but recommended)

1. Get a free key from Google AI Studio (<https://aistudio.google.com>).
2. In Colab click the key icon in the left sidebar, **Add new secret**, name it `GEMINI_API_KEY`, paste the key, and switch **Notebook access** on.
3. Never paste the key into a code cell, and never share a notebook that contains one.

Free tiers have rate limits and their terms can change. Without a key the notebook uses the free local model `flan-t5-base` or shows the retrieved passages only. If the Gemini model name in the notebook is no longer available, change `GEMINI_MODEL` to a current name from Google's model list.

## How to troubleshoot errors

| Symptom | Likely cause and fix |
|---|---|
| `NameError: name 'X' is not defined` | You skipped a cell or restarted the runtime. Run the cells from the top. |
| `ModuleNotFoundError` | Run the `!pip install ...` cell of that notebook, then **Runtime → Restart session** if asked. |
| Training is extremely slow | Turn on the GPU (Projects 2 and 4), or reduce `MAX_PER_CLASS` / `EPOCHS`. |
| `Out of memory` or the session crashes | Lower the batch size, `MAX_PER_CLASS` or `IMG`, or use **Runtime → Restart session** and run again. |
| Dataset download fails or hangs | Check your internet connection, then re-run the cell. The Hugging Face and TensorFlow downloads resume or retry. |
| Project 2 dataset will not download | The `plant_village` source can move. Check the TensorFlow Datasets catalogue for the current name, or download PlantVillage from Kaggle and load it with `keras.utils.image_dataset_from_directory`. |
| Upload button does nothing | Browsers can block pop-ups or third-party cookies. Allow them for colab.research.google.com, then re-run the cell. |
| Project 5 says "No extractable text" | The PDF is a scan (pictures of text). Use an OCR tool first, or try another PDF. |
| Project 5 Gemini call fails | Check the key is saved as `GEMINI_API_KEY` with notebook access on, check quota, and check the model name. The notebook falls back and tells you. |
| Results differ slightly from a classmate | Normal for deep learning (random initialisation and GPU maths). The notebooks set seeds to reduce, not eliminate, this. |
| A library version warning appears | Warnings are not errors. If a real error follows, note the exact message and search it. |

## Project difficulty levels

* **Beginner:** Projects 1 and 3. Classic machine learning with tables and text. Runs in a minute or two on the free CPU.
* **Beginner to Intermediate:** Project 2. Introduces CNNs and transfer learning; a GPU is strongly recommended.
* **Intermediate:** Projects 4 and 5. Neural-network internals (backpropagation, optimisers) and Retrieval-Augmented Generation with an LLM.

## Recommended learning sequence

1. **Project 1: House Price Prediction.** Learn the standard ML workflow (explore, clean, split, train, evaluate, save).
2. **Project 3: Sentiment Analysis.** Apply the same workflow to text and learn precision, recall and F1.
3. **Project 4: Handwritten Digit Recognition.** Learn how neural networks learn and why CNNs suit images.
4. **Project 2: Plant Disease Detection.** Use CNNs on real photos with data augmentation and transfer learning.
5. **Project 5: AI PDF Chatbot.** Combine embeddings, vector search and an LLM into a working application.

Plan on about 2 to 4 hours per project, including the mini challenges at the end of each notebook.

## Honest notes about this kit

* The notebooks contain **code and explanations, not pre-filled results**. All accuracy and error numbers appear when you run the cells, and they will vary a little between runs. The explanations avoid quoting specific scores.
* **What was actually tested before packaging** (on a Windows PC with Python 3.14, not on Colab, so library versions differ):
  * Projects 1 and 3: every code cell was run from first to last with no errors.
  * Project 5: every code cell was run with the free local model (`flan-t5-base`). The Gemini call was **never executed** because no API key was available, so that path is untested.
  * Projects 2 and 4: TensorFlow could not be installed on that machine, so the training and evaluation cells were **not run**; they were only syntax-checked. The NumPy neuron and the image-preprocessing helper of Project 4 were run on their own. The PlantVillage download in Project 2 was not tried either.
  * If a cell fails in Colab, check the troubleshooting table and the library versions, and tell your instructor so the notebook can be fixed.
* Project 2 is an educational classifier trained on lab-style photos. It is **not a substitute for expert agricultural diagnosis**.
* The datasets and libraries belong to their respective authors and are used under their own licences. Check them before using the models commercially.
