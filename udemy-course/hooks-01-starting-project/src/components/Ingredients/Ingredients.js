import React, {
  useState,
  useEffect,
  useCallback,
  useReducer,
  useMemo
} from "react";

import useHttp from "../../hooks/http";

import IngredientForm from "./IngredientForm";
import Search from "./Search";

import IngredientList from "../Ingredients/IngredientList";
import ErrorModal from "../UI/ErrorModal";

const ingredientReducer = (currentIngredients, action) => {
  switch (action.type) {
    case "SET":
      return action.ingredients;
    case "ADD":
      return [...currentIngredients, action.ingredient];
    case "DELETE":
      return currentIngredients.filter(ing => ing.id !== action.id);
    default:
      throw new Error("Should not be here!");
  }
};

const Ingredients = () => {
  const [ingredientsState, dispatchIngredient] = useReducer(
    ingredientReducer,
    []
  );
  const {
    isLoading,
    error,
    data,
    sendRequest,
    reqExtra,
    reqIdentifier,
    clear
  } = useHttp();

  useEffect(() => {

    if (!isLoading && !error && reqIdentifier === "REMOVE_INGREDIENT") {
      dispatchIngredient({ type: "DELETE", id:reqExtra });
    } else if (!isLoading && !error && reqIdentifier === "ADD_INGREDIENT") {
      dispatchIngredient({
        type: "ADD",
        ingredient: {
          id: data.name,
          ...reqExtra
        }
      });
    }
  }, [data, reqExtra, reqIdentifier, isLoading]);

  const filterIngredientsHandler = useCallback(filterIngredients => {
    dispatchIngredient({ type: "SET", ingredients: filterIngredients });
  }, []);

  const addIngredientHanlder = useCallback(
    ingredient => {
      sendRequest(
        `https://react-trainee-burger-builder.firebaseio.com/ingredients.json`,
        "POST",
        JSON.stringify(ingredient),
        ingredient,
        "ADD_INGREDIENT"
      );
    },
    [sendRequest]
  );

  const removeIngredientHandler = useCallback(
    id => {
      sendRequest(
        `https://react-trainee-burger-builder.firebaseio.com/ingredients/${id}.json`,
        "DELETE",
        null,
        id,
        "REMOVE_INGREDIENT"
      );
    },
    [sendRequest]
  );


  const ingredientList = useMemo(() => {
    return (
      <IngredientList
        ingredients={ingredientsState}
        onRemoveItem={removeIngredientHandler}
      />
    );
  }, [ingredientsState, removeIngredientHandler]);
  return (
    <div className="App">
      {error && <ErrorModal onClose={clear}>{error}</ErrorModal>}
      <IngredientForm
        onAddIngredient={addIngredientHanlder}
        isLoading={isLoading}
      />

      <section>
        <Search onLoadIngredients={filterIngredientsHandler} />
        {ingredientList}
      </section>
    </div>
  );
};

export default Ingredients;
