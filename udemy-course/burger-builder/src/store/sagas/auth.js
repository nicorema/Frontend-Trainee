import { put } from "redux-saga/effects";
import { delay } from "redux-saga/effects";
import axios from "axios";

import * as actionTypes from "../actions/actionTypes";
import * as actions from "../actions/index";

export function* logoutSaga(action) {
  yield localStorage.removeItem("token");
  yield localStorage.removeItem("expirationDate");
  yield localStorage.removeItem("userID");
  yield put(actions.logoutSucceded());
}

export function* checkAuthTimeoutSaga(action) {
  yield delay(action.experationTime * 1000);
  yield put(actions.logout());
}

export function* authUserSaga(action) {
  yield put(actions.authStart());
  const authData = {
    email: action.email,
    password: action.password,
    returnSecureToken: true
  };
  let url =
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAVxVlqWNR6fMxhq3mWMObmHtmJ5yBb6Tc";
  if (!action.isSignup) {
    url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAVxVlqWNR6fMxhq3mWMObmHtmJ5yBb6Tc";
  }
  try {
    const response = yield axios.post(url, authData);
    const expirationDate = new Date(
      new Date().getTime() + response.data.expiresIn * 1000
    );
    yield localStorage.setItem("token", response.data.idToken);
    yield localStorage.setItem("expirationDate", expirationDate);
    yield localStorage.setItem("userID", response.data.localId);

    yield put(actions.authSucess(response.data.idToken, response.data.localId));
    yield put(actions.checkAuthTimeout(response.data.expiresIn));
  } catch (error) {
    yield actions.authFailed(error.response.data.error);
  }
}

export function* authCheckStateSaga(action) {
  const token = yield localStorage.getItem("token");
  if (!token) {
    yield put(actions.logout());
  } else {
    const expirationDate = yield new Date(
      localStorage.getItem("expirationDate")
    );
    if (expirationDate > new Date()) {
      const userID = yield localStorage.getItem("userID");
      yield put(actions.authSucess(token, userID));
      yield put(
        actions.checkAuthTimeout(
          (expirationDate.getTime() - new Date().getTime()) / 1000
        )
      );
    } else {
      yield actions.logout();
    }
  }
}
