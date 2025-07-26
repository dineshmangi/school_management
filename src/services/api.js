// filepath: frontend/src/services/api.js
import axios from 'axios';

// Set the base URL for the backend
const API = axios.create({ baseURL: 'http://localhost:5000/api' });

// Example API call to test the backend
export const testBackend = () => API.get('/');