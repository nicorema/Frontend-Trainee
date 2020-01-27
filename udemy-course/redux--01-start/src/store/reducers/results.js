import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utililty";
const initialState = {
  results: []
};

const deleteResult = (state, action) => {
  const updatedArray = state.results.filter(
    element => element.id !== action.idToRemove
  );
  return updateObject(state, { results: updatedArray });
};

const resultsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return updateObject(state, {
        results: state.results.concat({ id: new Date(), value: action.result })
      });
    case actionTypes.DELETE_RESULT:
      return deleteResult(state, action);
  }

  return state;
};

export default resultsReducer;
