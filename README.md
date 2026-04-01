# BurnoutCompass AI

Full-Stack Machine Learning System for Employee Burnout Prediction

---

## Problem

Employee burnout is a critical issue in modern workplaces. It leads to reduced productivity, mental stress, high employee turnover, and poor organizational performance.

Most organizations do not have an automated system to detect early signs of burnout. Decisions are often reactive rather than preventive.

There is a need for a data-driven system that can predict burnout risk early using employee behavior and workplace indicators.

---

## Solution

BurnoutCompass AI solves this problem by building a machine learning-based prediction system that identifies burnout levels from employee-related data.

The system provides:

* Automated burnout prediction
* Real-time API-based inference
* A simple web interface for interaction
* Scalable machine learning pipeline

This allows organizations to take early action before burnout becomes severe.

---

## Method

### 1. Data Processing

* Data cleaning and preprocessing
* Encoding categorical variables
* Feature scaling and transformation

### 2. Machine Learning Model

* Multiple base models used:

  * Random Forest Classifier
  * Gradient Boosting Classifier
  * Decision Tree Classifier
* Final model built using Stacking Classifier
* Bagging and boosting techniques combined for better generalization

### 3. Pipeline Design

* Preprocessing pipeline integrated with model
* Ensures consistent transformation during training and inference

### 4. Model Serialization

* Final trained model saved using Joblib as `.pkl`
* Model loaded inside FastAPI backend for prediction

### 5. Backend System

* FastAPI used to build REST API
* Accepts JSON input and returns prediction result

### 6. Frontend System

* React + TypeScript UI
* Sends user input to backend API
* Displays burnout prediction result

---

## Conclusion

BurnoutCompass AI demonstrates a complete end-to-end machine learning system that goes beyond a simple model.

It integrates:

* Machine learning (stacking ensemble)
* Backend API development (FastAPI)
* Frontend application (React)
* Model deployment and serialization

The system provides a practical foundation for real-world AI applications in employee wellness and HR analytics.

---