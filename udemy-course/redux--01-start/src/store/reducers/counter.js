import * as actionTypes from "../actions";

const initialState = {
  counter: 0
};

const counterReducer = (state = initialState, action) => {
  let newState = { ...state };

  switch (action.type) {
    case actionTypes.INCREMENT:
      newState.counter++;
      break;
    case actionTypes.DECREMENT:
      newState.counter--;
      break;
    case actionTypes.ADD:
      newState.counter += action.value;
      break;
    case actionTypes.SUBSTRACT:
      newState.counter -= action.value;
      break;
    default:
      break;
  }
  return newState;
};

export default counterReducer;
