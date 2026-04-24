import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true
});

// Auth
export const getMe = () => API.get('/auth/me');
export const logout = () => API.get('/auth/logout');
export const login = (formData) => API.post('/auth/login', formData);
export const register = (data) => API.post('/auth/register', data);

// AI
export const generateStrategy = (formData) => API.post('/api/ai/generate-strategy', formData);
export const getStrategies = () => API.get('/api/ai/strategies');

// Campaigns
export const createCampaign = (data) => API.post('/api/campaigns/create', data);
export const getCampaigns = () => API.get('/api/campaigns');

// Profile
export const updateProfile = (data) => API.put('auth/update-profile', data);

//Admin routes
// Admin
export const getAdminStats = () => API.get('/api/admin/stats');
export const getAdminUsers = () => API.get('/api/admin/users');
export const getAdminCampaigns = () => API.get('/api/admin/campaigns');
export const updateUserPlan = (id, plan) => API.put(`/api/admin/users/${id}/plan`, { plan });
export const deleteAdminUser = (id) => API.delete(`/api/admin/users/${id}`);



export default API;