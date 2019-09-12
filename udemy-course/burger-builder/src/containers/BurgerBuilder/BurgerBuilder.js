import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.4,
  cheese: 0.3,
  meat: 1.1
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4
  };

  addIngredientHandler = type => {
    this.setState((prevState, props) => {
      let newState = { ...prevState };
      newState.ingredients[type] = newState.ingredients[type] + 1;
      newState.totalPrice = newState.totalPrice + INGREDIENT_PRICES[type];
      return newState;
    });
  };

  removeIngredientHandler = type => {
    this.setState((prevState, props) => {
      if (prevState.ingredients[type] > 0) {
        let newState = { ...prevState };
        newState.ingredients[type] = newState.ingredients[type] - 1;
        newState.totalPrice = newState.totalPrice - INGREDIENT_PRICES[type];
        return newState;
      }
    });
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };
    for(let key in disabledInfo){
      disabledInfo[key] = disabledInfo[key] > 0 ? false : true;
    }
    console.log(disabledInfo);
    return (
      <>
        <Burger ingredients={this.state.ingredients}></Burger>
        <BuildControls
          addingIngredient={this.addIngredientHandler}
          removeIngredient={this.removeIngredientHandler}
          disabledInfo = {disabledInfo}
        />
      </>
    );
  }
}

export default BurgerBuilder;
