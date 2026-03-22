import axios from 'axios';

const API = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true
});

export const getMe = () => API.get('/auth/me');
export const logout = () => API.get('/auth/logout');