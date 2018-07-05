/* global localStorage */

import { USER_LOGGED_IN, USER_LOGGED_OUT } from '../../types';
import { apiRequest } from '../../apiRequests';

export const userLoggedIn = user => ({
  type: USER_LOGGED_IN,
  user
});

export const userLoggedOut = () => ({
  type: USER_LOGGED_OUT
});


export const userSignupRequest = userData => () =>
  apiRequest.user.signup(userData).then(res => res);


export const userLoginRequest = userData => (dispatch) =>
  apiRequest.user.login(userData).then(user => {
    const { token } = user;
    localStorage.setItem('auth_token', token);
    dispatch(userLoggedIn(user));
  });


export const userLogoutRequest = (token) => (dispatch) => {
  localStorage.removeItem('auth_token');
  apiRequest.user.logout().then(res => res);
  dispatch(userLoggedOut());
};

// user logout actionCreator

export const resetPassword = userData => (dispatch) =>
  apiRequest.user.reset(userData).then(res => res);


export const changePassword = userData => (dispatch) =>
  apiRequest.user.change(userData).then(res => res);
