import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true
});

// Auth
export const getMe = () => API.get('/auth/me');
export const logout = () => API.get('/auth/logout');

// AI
export const generateStrategy = (formData) => API.post('/api/ai/generate-strategy', formData);

export default API;