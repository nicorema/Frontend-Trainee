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
  return dispatch => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true
    };
    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAVxVlqWNR6fMxhq3mWMObmHtmJ5yBb6Tc";
    if (!isSignup) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAVxVlqWNR6fMxhq3mWMObmHtmJ5yBb6Tc";
    }
    axios
      .post(url, authData)
      .then(response => {
        const expirationDate = new Date(
          new Date().getTime() + response.data.expiresIn * 1000
        );
        localStorage.setItem("token", response.data.idToken);
        localStorage.setItem("expirationDate", expirationDate);
        localStorage.setItem("userID", response.data.localId);

        dispatch(authSucess(response.data.idToken, response.data.localId));
        dispatch(checkAutTimeout(response.data.expiresIn));
      })
      .catch(error => {
        dispatch(authFailed(error.response.data.error));
      });
  };
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expirationDate");
  localStorage.removeItem("userID");

  return {
    type: actionTypes.AUTH_LOGOUT
  };
};

export const checkAutTimeout = experationTime => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout());
    }, experationTime * 1000);
  };
};

export const setAuthRedirectPath = path => {
  return {
    type: actionTypes.SET_AUTH_REDIRECT_PATH,
    path: path
  };
};

export const authCheckState = () => {
  return dispatch => {
    const token = localStorage.getItem("token");
    if (!token) {
      dispatch(logout());
    } else {
      const expirationDate = new Date(localStorage.getItem("expirationDate"));
      if (expirationDate > new Date()) {
        const userID = localStorage.getItem("userID");
        dispatch(authSucess(token, userID));
        dispatch(
          checkAutTimeout((expirationDate.getTime() - new Date().getTime())/ 1000)
        );
      } else {
        dispatch(logout());
      }
    }
  };
};
