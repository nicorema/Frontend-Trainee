import * as actionTypes from "./actionTypes";

import axios from "axios";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

export const authSucess = (token, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: token,
    userId: userId
  };
};

export const authFailed = error => {
  return {
    type: actionTypes.AUTH_FAILED,
    error: error
  };
};

export const auth = (email, password, isSignup) => {
  return {
    type: actionTypes.AUTH_USER,
    email: email,
    password: password,
    isSignup: isSignup
  };
};

export const logout = () => {
  // localStorage.removeItem("token");
  // localStorage.removeItem("expirationDate");
  // localStorage.removeItem("userID");
  return {
    type: actionTypes.AUTH_INIT_LOGOUT
  };
};

export const logoutSucceded = () => {
  return {
    type: actionTypes.AUTH_LOGOUT
  };
};

export const checkAuthTimeout = experationTime => {
  return {
    type: actionTypes.AUTH_CHECK_TIMEOUT,
    experationTime: experationTime
  };
};

export const setAuthRedirectPath = path => {
  return {
    type: actionTypes.SET_AUTH_REDIRECT_PATH,
    path: path
  };
};

export const authCheckState = () => {
  return {
    type: actionTypes.AUTH_CHECK_STATE
  };
};
