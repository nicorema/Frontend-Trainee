import * as actionTypes from "./actionTypes";

export const saveResult = value => {
  const updatedResult = value * 2;
  return {
    type: actionTypes.STORE_RESULT,
    result: updatedResult
  };
};
export const storeResult = value => {
  return (dispatch, getState) => {
    setTimeout(() => {
      dispatch(saveResult(value));
    }, 2000);
  };
};
export const deleteResult = id => {
  return {
    type: actionTypes.DELETE_RESULT,
    idToRemove: id
  };
};
