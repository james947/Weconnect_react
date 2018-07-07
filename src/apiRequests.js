import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://weconnect-v3.herokuapp.com/api/v1',
  timeout: 20000,
  headers: {
    "Accept": 'application/json',
    "ContentType": 'application/json'
  }
});


instance.interceptors.request.use((config)=>{
  const accessToken = localStorage.getItem('auth_token');
  if(accessToken){
      config.headers.Authorization = accessToken;
  }
  return config;
});


export const apiRequest = {
  user: {
    login: (userData) => instance.post('/auth/login', userData)
      .then(res => res.data),
    signup: (userData) => instance.post('/auth/register', userData)
      .then(res => res.data),
    logout: () => instance.delete('/auth/logout')
      .then(res => res.data),
    reset: (userData) => instance.post('/auth/reset-password', userData)
      .then(res => res.data),
    change: (userData) => instance.post('/auth/change-password', userData)
      .then(res => res.data)
  },

  business: {
    create: (newBusiness) => instance.post('/businesses', newBusiness)
      .then(response => response.data),
    businesses: () => instance.get('/businesses')
      .then(response => response.data),
    fetch: (params) => instance.get(`/businesses/${params.id}`)
      .then(response => response.data),
    edit: (updatedBusiness, businessId) => instance.put(`/businesses/${businessId}`, updatedBusiness)
      .then(response => response.data),
    delete: (businessId) => instance.delete(`/businesses/${businessId}`)
      .then(response => response.data),

    reviews: (businessId) => instance.get(`/businesses/${businessId}/reviews`)
      .then(response => response.data),
    postReview: (businessId, review) => {
      return instance.post(`/businesses/${businessId}/reviews`, review)
        .then(response => response.data);
    }

  }

};
export default apiRequest;
