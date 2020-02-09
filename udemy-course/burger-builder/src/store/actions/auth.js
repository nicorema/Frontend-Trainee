import * as actionTypes from "./actionTypes";

import axios from "axios";
export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

export const authSucess = (token,userId) => {
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
      returnSecureTOken: true
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
        console.log(response);
        dispatch(authSucess(response.data.idToken, response.data.localId));
      })
      .catch(error => {
        console.log(error);
        dispatch(authFailed(error.response.data.error));
      });
  };
};
