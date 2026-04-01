import axios from "axios";

const API_URL = "https://burnoutprediction-4687bf37.fastapicloud.dev/predict";

export interface PredictionInput {
  age: number;
  gender: string;
  job_role: string;
  experience_years: number;
  company_size: string;
  work_mode: string;
  work_hours_per_week: number;
  overtime_hours: number;
  meetings_per_day: number;
  deadlines_missed: number;
  job_satisfaction: number;
  manager_support: number;
  work_life_balance: number;
  sleep_hours: number;
  physical_activity_days: number;
  screen_time_hours: number;
  caffeine_intake: number;
  social_support_score: number;
  has_therapy: number;
  stress_level: number;
  anxiety_score: number;
  depression_score: number;
  burnout_score: number;
  seeks_professional_help: number;
}

export interface PredictionResult {
  burnout_level: number;
}

export const predictBurnout = async (data: PredictionInput): Promise<PredictionResult> => {
  const response = await axios.post<PredictionResult>(API_URL, data);
  return response.data;
};
