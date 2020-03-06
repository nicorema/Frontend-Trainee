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

export const setIngedients = ingredients => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    ingredients: ingredients
  };
};

export const fetchIngredientsFailed = () => {
  return {
    type: actionTypes.FETCH_INGREDIENTS_FAILED
  };
};

export const initIngredients = () => {
  return {
    type: actionTypes.INIT_INGREDIENTS
  };
};
