# Student Project Guide

How to understand, modify, test, demonstrate and defend the five projects in the AI Practical Project Learning Kit.

---

## 1. How to understand a project

Read every project through the same six questions. Write the answers in your own words in a notebook or document.

1. **Problem:** what real-world question are we answering?
2. **Data:** what does one row (or image, or review) look like? What is the target (the answer we want to predict)? How many examples are there?
3. **Preparation:** what did we clean, resize, or convert to numbers, and why?
4. **Model:** which algorithm, and in one sentence, how does it make a prediction?
5. **Evaluation:** which metric did we use, why that one, and what does the number mean in plain language?
6. **Limits:** when will this fail, and who could be harmed by a wrong answer?

Tips:

* Run the notebook once without changing anything. Then re-read each markdown cell **after** you have seen the output.
* Add a `print(...)` or `display(...)` after any line you do not understand. Look at shapes (`.shape`), a few rows (`.head()`), and types.
* Draw the pipeline on paper: input → preparation → model → output.

## 2. How to modify a project

Change **one thing at a time**, re-run, and record what happened. This is how you learn what each part does.

| Change | Where | What to observe |
|---|---|---|
| Different train/test split | `test_size`, `random_state` | Do scores move? How much? |
| Different model settings | `n_estimators`, `C`, `epochs`, `batch_size`, `learning_rate` | Accuracy, training time, overfitting gap |
| Different features or preprocessing | selected features, stop-words, `ngram_range`, image size | Does the metric improve or get worse? |
| A different algorithm | add `GradientBoostingRegressor`, `LinearSVC`, a deeper CNN | Add it to the comparison table |
| Your own data | your text, digit photos, leaf photos, PDF | How does it behave outside the training data? |

Keep a simple experiment log:

```
Experiment | What I changed | Result (from my run) | What I learned
```

Rules for honest experiments: never tune your choices by looking at the **test set** (use validation data or cross-validation), change one variable at a time, and report the numbers your run actually produced, not numbers you expected.

## 3. How to test the model

1. **Held-out test data.** Evaluate only on data the model never trained on. Every notebook does this; do not break it.
2. **Right metric for the job.**
   * Regression (Project 1): MAE, RMSE, R².
   * Classification (Projects 2, 3, 4): accuracy, precision, recall, F1, confusion matrix.
   * RAG chatbot (Project 5): are the answers correct and supported by the cited page?
3. **Look at the mistakes.** Open the wrong predictions and ask why. Is it label noise, sarcasm, a blurry image, or a real model weakness?
4. **Edge cases.** Empty input, very long input, unusual values, an image that is not a leaf, a question that is not in the PDF.
5. **Out-of-distribution test.** Try data from a different source (your own handwriting, a field photo of a leaf, a tweet instead of a movie review). Expect lower performance and explain why.
6. **Repeatability.** Re-run with another random seed. If the result changes a lot, the model or the evaluation is unstable.
7. **Project 5 checklist.** Prepare 10 questions: 5 whose answers are in the PDF and 5 that are not. Mark each answer correct, wrong, or hallucinated. Report the counts.

## 4. How to prepare a project demonstration

**Before the demo**

* Run the notebook fully once. Keep the final cells and outputs on screen, and save a copy of the notebook with outputs in case the network fails.
* For Project 2, download the dataset beforehand; for Project 5, pick a short PDF you know well and set the API key in Colab Secrets (never on a slide).
* Prepare 3 inputs: one easy case, one hard case, and one failure case.

**A 5-minute structure**

1. *(30 s)* The problem and who needs it.
2. *(45 s)* The data: size, one example, the target.
3. *(60 s)* The pipeline diagram (use the architecture section of the notebook).
4. *(60 s)* Results: the metric table and one graph, with the meaning of the numbers.
5. *(90 s)* Live demo: easy case, hard case, then the failure case, and say why it fails.
6. *(15 s)* Limitations and what you would do next.

**Do and don't**

* Do show a failure and explain it. It shows understanding.
* Do say "in my run, the accuracy was ..." and read the real number.
* Don't claim real-world accuracy from a classroom dataset.
* Don't show API keys, personal data or confidential documents.
* For Project 2 always state: educational classifier, not expert agricultural diagnosis.

## 5. How to explain a project during a viva

* Start with the one-sentence summary: "I built a ___ that takes ___ and predicts ___ using ___."
* Explain each step with the pattern **what, why, and what would happen without it** (for example, "I split the data so that I could measure performance on unseen data; without it the model could memorise the answers and my score would be misleading").
* Use numbers from **your own run** and say which cell produced them.
* Know the formulas in words: MAE, RMSE, R², precision, recall, F1, cross-entropy, cosine similarity.
* If you do not know, say what you would test to find out. That is better than guessing.
* Be ready to open the notebook and change one value live.

---

## 6. Viva questions (10 per project)

### Project 1: House Price Prediction

1. What is supervised learning, and why is house-price prediction a **regression** problem rather than classification?
2. What is one row of the California Housing dataset, and what is the target variable and its unit?
3. Why did we split the data into training and test sets, and what does `random_state=42` do?
4. What is **data leakage**, and why did we fit `SelectKBest` on the training set only?
5. Why did we remove the rows where the house value is capped at the maximum?
6. How does Linear Regression make a prediction, and what is the role of `StandardScaler`?
7. How does a Random Forest make a prediction? What are `n_estimators` and why does averaging many trees help?
8. Explain MAE, MSE, RMSE and R². If R² is 0.7, what does that mean?
9. How can you tell from the training score vs the test score that a model is overfitting?
10. Why do we save the feature list together with the model in Joblib, and what could go wrong if we do not?

### Project 2: Plant Disease Detection

1. What is image classification, and how does a computer represent a colour image (shape and channels)?
2. Why do all images have to be resized to the same size, and why did we normalise pixel values?
3. Explain what a convolution layer and a filter do. Why does a CNN use fewer weights than a fully-connected network on images?
4. What does max pooling do, and what are its benefits?
5. What is data augmentation, and why is it applied only during training?
6. What is transfer learning? Why did we freeze MobileNetV2 and train only a new head?
7. What is the difference between training, validation and test sets, and why do we need all three?
8. How do you read the accuracy and loss curves to detect overfitting? What would you do about it?
9. What do precision and recall mean for a disease class, and which is more costly to get wrong here?
10. Why might the model perform worse on photos taken in a farm field, and why is it not a substitute for expert diagnosis?

### Project 3: Movie Review Sentiment Analysis

1. What is NLP, and why must text be converted to numbers before a model can use it?
2. What are tokenization, lowercasing and stop-word removal? Why did we keep the word "not"?
3. Explain Bag of Words and its main weakness.
4. What does TF-IDF add over Bag of Words? Explain term frequency and inverse document frequency.
5. How does Logistic Regression turn word weights into a probability (the sigmoid function)?
6. What are precision, recall and F1-score, and when would accuracy alone be misleading?
7. How do you read a confusion matrix? What are false positives and false negatives here?
8. Why can the model struggle with sarcasm and negation? Give an example from the notebook.
9. How can you find out which words influenced the decision, and why is that useful?
10. Why might this model perform poorly on tweets or product reviews, and how would you improve it?

### Project 4: Handwritten Digit Recognition

1. What is an artificial neuron? Explain weights, bias and the activation function.
2. Why do we need non-linear activation functions such as ReLU? What does softmax do?
3. Explain forward propagation, the loss function and backpropagation in your own words.
4. What is cross-entropy loss, and what is the role of the optimiser (Adam) and the learning rate?
5. What are an epoch, a batch and a batch size? How many weight updates happen in one epoch?
6. What is the difference between an ANN and a CNN, and why is a CNN better for images?
7. What is dropout, and how does early stopping help?
8. How did the NumPy neuron show backpropagation, and why can one neuron not learn XOR?
9. Why do we invert, crop, centre and resize an uploaded digit before predicting?
10. Why can a model that scores very high on the MNIST test set still fail on your own handwriting?

### Project 5: AI PDF Question-Answering Chatbot

1. What is an LLM, and why can it hallucinate?
2. What is a Transformer, and what is the idea of attention?
3. What is an embedding, and why do similar sentences have similar vectors?
4. What is cosine similarity, and why does the inner product equal it when vectors are normalised?
5. What is a vector database or index? Why do we use FAISS?
6. Why do we split the PDF into chunks, and what are the effects of chunk size and overlap?
7. Explain Retrieval-Augmented Generation step by step. How does it reduce hallucination, and why does it not remove it?
8. What makes a good RAG prompt, and why do we tell the model to treat the context as data?
9. What is the `MIN_SCORE` guard, how would you choose its value, and what are its limits?
10. Why must API keys never be written in the notebook, and how do Colab Secrets protect them? What privacy risk exists when you send document text to an external API?

---

## 7. Checklist before you submit

* [ ] The notebook runs from the first cell to the last without errors.
* [ ] All numbers in your report come from your own run.
* [ ] You tried at least three of the mini challenges and logged the results.
* [ ] You can explain every line of the main training cell.
* [ ] You can name two limitations and one improvement.
* [ ] No API keys, passwords or private documents are in the notebook or slides.
