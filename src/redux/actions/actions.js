// import { USER_LOGGED_IN, USER_LOGGED_OUT } from './types';
// import { apiRequest } from '../../apiRequests';

export const getBusinesses = response => ({
  type: 'GET_BUSINESS',
  payload: response.data.results
});


export const getBusiness = response => ({
  type: 'GET_BUSINES',
  payload: response.data.results
});

