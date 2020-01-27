import * as actionTypes from "../actions/actionTypes";

export const addIngredient = ingType => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingredientType: ingType
  };
};
export const removeIngredient = ingType => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    ingredientType: ingType
  };
};
