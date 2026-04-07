import axios from 'axios';

const defaultBaseURL = import.meta.env.DEV
  ? 'http://localhost:5000/api'
  : '/api';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || defaultBaseURL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const getItems = async () => {
  const response = await api.get('/items');
  return response.data;
};

export const createItem = async (payload) => {
  const response = await api.post('/items', payload);
  return response.data; 
};

export const updateItem = async (id, payload) => {
  const response = await api.put(`/items/${id}`, payload);
  return response.data;
};

export default api;
