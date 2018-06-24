import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://weconnect-v3.herokuapp.com/api/v1',
  timeout: 20000,
  headers: {
    Accept: 'application/json',
    ContentType: 'application/json',
  }
});


instance.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem('auth_token');
  if (accessToken) {
    config.headers.Authorization = { accessToken };
  }
  return config;
});


const apiRequest = {
  user: {
    login: (userData) => instance.post('/auth/login', userData)
      .then(res => res.data.user),
    signup: (userData) => instance.post('/auth/register', userData)
      .then(res => res.data)
  }
};

export default apiRequest;
