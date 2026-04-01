# BurnoutCompass AI

Full-Stack Machine Learning System for Employee Burnout Prediction

---

## Live Links

* Frontend Application: [https://burnout-compass.vercel.app/](https://burnout-compass.vercel.app/)
* Backend API: [https://burnoutprediction-4687bf37.fastapicloud.dev/](https://burnoutprediction-4687bf37.fastapicloud.dev/)
* Kaggle Notebook: [https://www.kaggle.com/code/maroofiums/burnoutguard-ai-predicting-employee-mental-health?scriptVersionId=307764775](https://www.kaggle.com/code/maroofiums/burnoutguard-ai-predicting-employee-mental-health?scriptVersionId=307764775)
* GitHub Repository: [https://github.com/maroofiums/Burnout-Prediction](https://github.com/maroofiums/Burnout-Prediction)

---

## Problem Statement

Employee burnout is a serious issue in modern workplaces. It leads to reduced productivity, mental stress, higher employee turnover, and poor organizational performance.

Most organizations do not have automated systems to detect burnout early. Decisions are usually reactive instead of preventive.

There is a need for a data-driven system that can predict burnout risk using employee behavioral and workplace features.

---

## Solution

BurnoutCompass AI is an end-to-end machine learning system that predicts employee burnout levels using trained ensemble models.

It provides:

* Early burnout detection
* Real-time prediction through REST API
* Web-based user interface
* Scalable machine learning inference pipeline

---

## System Architecture

The system is designed using a three-layer architecture:

### Machine Learning Layer

* Data preprocessing (cleaning, encoding, scaling)
* Feature engineering
* Model training using ensemble methods:

  * Random Forest Classifier
  * Gradient Boosting Classifier
  * Decision Tree Classifier
* Final model: Stacking Classifier
* Model saved using Joblib as `.pkl` file

---

### Backend Layer (FastAPI)

* Built using FastAPI framework
* Loads trained machine learning model
* Accepts JSON input from frontend
* Performs real-time inference
* Returns prediction response

Flow:
User Input → API Request → Model Inference → JSON Response

---

### Frontend Layer (React + TypeScript)

* User interface for input data
* Sends requests to backend API
* Displays prediction results
* Handles client-side validation

Flow:
User Form → API Call → Backend Response → Result Display

---

## Project Structure

```text
Burnout-Prediction/
│
├── app/
│   ├── burnout_model.pkl
│   ├── main.py
│   ├── pyproject.toml
│   └── requirements.txt
│
├── Notebook/
│   ├── Data/
│   │   └── tech_mental_health_burnout.csv
│   └── burnoutguard-ai-predicting-employee-mental-health.ipynb
│
├── UI/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── tsconfig.json
│
└── README.md
```

---

## Machine Learning Approach

### Data Processing

* Handling missing values
* Encoding categorical variables
* Feature scaling and normalization

### Model Training

* Multiple base models trained
* Ensemble stacking used for final prediction
* Model optimized for generalization

### Model Deployment

* Final model saved using Joblib
* Loaded inside FastAPI for inference

---

## How to Run Locally

### Backend Setup

Install dependencies:

```bash
cd app
pip install -r requirements.txt
```

Run FastAPI server:

```bash
uvicorn main:app --reload
```

Backend runs at:
[http://127.0.0.1:8000](http://127.0.0.1:8000)

---

### Frontend Setup

Install dependencies:

```bash
cd UI
npm install
```

Run development server:

```bash
npm run dev
```

Frontend runs at:
[http://localhost:5173](http://localhost:5173)

---

## API Usage

### Endpoint

```text
POST /predict
```

### URL

```text
https://burnoutprediction-4687bf37.fastapicloud.dev/predict
```

### Request Body

```json
{
  "age": 29,
  "workload": 8,
  "sleep_hours": 5,
  "stress_level": 7
}
```

### Response

```json
{
  "burnout_level": 2,
  "label": "High Burnout"
}
```

---

## Conclusion

BurnoutCompass AI is a complete production-level machine learning system that integrates data science, backend engineering, and frontend development into a single deployable application. It demonstrates real-world implementation of AI systems using modern software engineering practices.
