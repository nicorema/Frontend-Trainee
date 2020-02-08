import * as actionTypes from "../actions/actionTypes";
const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.4,
  cheese: 0.3,
  meat: 1.1
};

const initialState = {
  ingredients: null,
  totalPrice: 4,
  error: false
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
    case actionTypes.SET_INGREDIENTS: {
      return {
        ...state,
        ingredients: action.ingredients,
        totalPrice:initialState.totalPrice,
        error: false
      };
    }
    case actionTypes.FETCH_INGREDIENTS_FAILED:
      return {
        ...state,
        error: true
      };
  }
  return state;
};

export default reducer;
