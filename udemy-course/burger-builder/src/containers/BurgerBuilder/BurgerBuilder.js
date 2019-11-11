import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import classes from "./BurgerBuilder.module.css";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Button from "../../components/UI/Button/Button";

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
    totalPrice: 4,
    purchaseable: false,
    purchasing: false
  };

  addIngredientHandler = type => {
    this.setState((prevState, props) => {
      let newState = { ...prevState };
      newState.ingredients[type] = newState.ingredients[type] + 1;
      newState.totalPrice = newState.totalPrice + INGREDIENT_PRICES[type];
      this.updatePurchaseState(newState);
      return newState;
    });
  };

  removeIngredientHandler = type => {
    this.setState((prevState, props) => {
      if (prevState.ingredients[type] > 0) {
        let newState = { ...prevState };
        newState.ingredients[type] = newState.ingredients[type] - 1;
        newState.totalPrice = newState.totalPrice - INGREDIENT_PRICES[type];
        this.updatePurchaseState(newState);
        return newState;
      }
    });
  };

  updatePurchaseState(newState) {
    let isPurshasable = !Object.values(newState.ingredients).every(
      value => value === 0
    );
    newState.purchaseable = isPurshasable;
  }

  purchasingHandler = () => {
    this.setState({ purchasing: true });
  };

  cancelPurchasingModal = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    alert("continue");
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] > 0 ? false : true;
    }
    return (
      <>
        <Modal
          show={this.state.purchasing}
          closeModal={this.cancelPurchasingModal.bind(this)}
        >
          <OrderSummary
            totalPrice={this.state.totalPrice}
            ingredients={this.state.ingredients}
            cancel={this.cancelPurchasingModal.bind(this)}
            continue={this.purchaseContinueHandler.bind(this)}
          />
        </Modal>
        <div className={classes.TotalPrice}>
          <label>Current Price</label>
          <strong>{"$" + this.state.totalPrice.toFixed(2)}</strong>
        </div>
        <Button
          buttonDisabled={!this.state.purchaseable}
          buttonClass="OrderBtn"
          click={this.purchasingHandler}
        >
          Order now
        </Button>

        <Burger ingredients={this.state.ingredients}></Burger>
        <BuildControls
          addingIngredient={this.addIngredientHandler}
          removeIngredient={this.removeIngredientHandler}
          disabledInfo={disabledInfo}
        />
      </>
    );
  }
}

export default BurgerBuilder;
