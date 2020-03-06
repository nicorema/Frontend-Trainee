import axios from "../../axios-orders";
import { put } from "redux-saga/effects";

import * as actions from "../actions/index";

export function* initIngredientsSaga(action) {
  try {
    const response = yield axios.get("/ingredients.json");
    yield put(actions.setIngedients(response.data));
  } catch (error) {
    put(actions.fetchIngredientsFailed());
  }
}
