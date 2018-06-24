// import { USER_LOGGED_IN, USER_LOGGED_OUT } from './types';
import apiRequest from '../../apiRequests';

const getBusinesses = response => ({
  type: 'GET_BUSINESS',
  payload: response.data.results
});

export default getBusinesses;


export const userSignupRequest = userData => () =>
  apiRequest.user.signup(userData).then(res => res);

export const userLoginRequest = userData => () =>
  apiRequest.user.login(userData).then(res => res);
