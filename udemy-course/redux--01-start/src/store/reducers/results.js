import * as actionTypes from '../actions/actions';

const initialState = {
  results:[]
};

const resultsReducer = (state = initialState, action) => {
  let newState = { ...state };

  switch (action.type) {
    case actionTypes.STORE_RESULT:
      newState.results= state.results.concat({id: new Date(), value: action.result});
      break;
      case actionTypes.DELETE_RESULT:
        newState.results = state.results.filter((element) => element.id !== action.idToRemove);
        break;
    default:
      break;
  }
  return newState;
};

export default resultsReducer;
