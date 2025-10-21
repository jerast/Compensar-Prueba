import axios from 'axios';
import type { AxiosInstance } from 'axios';

const API_BASE = 'https://7wmbjxblzi.execute-api.us-east-1.amazonaws.com';

const api: AxiosInstance = axios.create({
  baseURL: API_BASE,
  headers: { 'Content-Type': 'application/json' }
});

export default api;
