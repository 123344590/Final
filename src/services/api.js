import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.le-systeme-solaire.net/rest/' // Base URL de la API
});

export default api;
