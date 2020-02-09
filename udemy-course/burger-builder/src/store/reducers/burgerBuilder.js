import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";
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

const addIngredient = (state, action) => {
  const updatedIngredient = {
    [action.ingredientType]: state.ingredients[action.ingredientType] + 1
  };
  const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
  const updatedState = {
    ingredients: updatedIngredients,
    totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientType]
  };
  return updateObject(state, updatedState);
};

const removeIngredients = (state, action) => {
  const updatedIng = {
    [action.ingredientType]: state.ingredients[action.ingredientType] - 1
  };
  const updatedIngs = updateObject(state.ingredients, updatedIng);
  const updatedSt = {
    ingredients: updatedIngs,
    totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientType]
  };
  return updateObject(state, updatedSt);
};
const calculatePrice = (ingredients) => {
  let price = 0;
  for(let ing in ingredients){
    price += INGREDIENT_PRICES[ing] * ingredients[ing];
  }
  return initialState.totalPrice + price;
}
const setIngredients = (state, action) => {
  return updateObject(state, {
    ingredients: action.ingredients,
    totalPrice: calculatePrice(action.ingredients),
    error: false
  });
};

const fetchIngredientsFailed = (state, action) => {
  return updateObject(state, { error: true });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return addIngredient(state, action);

    case actionTypes.REMOVE_INGREDIENT:
      return removeIngredients(state, action);

    case actionTypes.SET_INGREDIENTS:
      return setIngredients(state, action);

    case actionTypes.FETCH_INGREDIENTS_FAILED:
      return fetchIngredientsFailed(state, action);
  }
  return state;
};

export default reducer;
