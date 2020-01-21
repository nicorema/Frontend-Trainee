import * as actionTypes from "../actions";
const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.4,
  cheese: 0.3,
  meat: 1.1
};

const initialState = {
  ingredients: {
    bacon: 0,
    cheese: 0,
    meat: 0,
    salad: 0
  },
  totalPrice: 4
};

const reducer = (state = initialState, action) => {
  let newIngredients = { ...state.ingredients };
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      newIngredients[action.ingredientType]++;
      return {
        ingredients: newIngredients,
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientType]
      };
    case actionTypes.REMOVE_INGREDIENT:
      newIngredients[action.ingredientType]--;
      return {
        ingredients: newIngredients,
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientType]
      };
  }
  return state;
};

export default reducer;
