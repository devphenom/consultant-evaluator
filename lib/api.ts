import { Consultant } from "./data/consultants";
import axios from "axios";

// Create an axios instance
const api = axios.create({
  baseURL: "",
  headers: {
    "Content-Type": "application/json",
  },
});

export interface EvaluationRequest {
  jobTitle: string;
  jobDescription: string;
  consultants: Consultant[];
}

export interface EvaluationResponse {
  consultants: Consultant[];
}

export const evaluateConsultants = async (data: EvaluationRequest): Promise<EvaluationResponse> => {
  const response = await api.post<EvaluationResponse>("/api/evaluate", data);
  return response.data;
};

export default api;
