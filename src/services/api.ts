import axios from 'axios';

const api = axios.create({
  baseURL: 'https://identoolfier-api.herokuapp.com/api/',
});

export default api;
