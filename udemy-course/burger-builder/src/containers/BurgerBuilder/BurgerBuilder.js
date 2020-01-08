import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import classes from "./BurgerBuilder.module.css";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Button from "../../components/UI/Button/Button";
import Loader from "../../components/UI/Loader/Loader";
import axios from "../../axios-orders";
import WithErrorHandler from "../../hoc/WithErrorHandler/WithErrorHandler";

const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.4,
  cheese: 0.3,
  meat: 1.1
};

class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: 4,
    purchaseable: false,
    purchasing: false,
    loading: false,
    error: false
  };

  componentDidMount() {
    axios
      .get("/ingredients.json")
      .then(response => {
        this.setState({
          ingredients: response.data
        });
        if (this.state.ingredients.every(item => item === 0)) {
          this.setState({
            purchaseable: true
          });
        }
      })
      .catch(error => this.setState({ error: true }));
  }

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

    const queryParams = [];
    for (let ingredient in this.state.ingredients){
      queryParams.push(encodeURIComponent(ingredient) + '=' + encodeURIComponent(this.state.ingredients[ingredient]))
    }
    queryParams.push('price='+ this.state.totalPrice);
    this.props.history.push({
      pathname:"/checkout",
      search: '?'+queryParams.join('&')
          
    });
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] > 0 ? false : true;
    }
    let burger = this.state.error ? <p>Fatal Error</p> : <Loader></Loader>;
    let orderSummaryInfo = null;
    if (this.state.ingredients) {
      burger = (
        <>
          <Burger ingredients={this.state.ingredients}></Burger>
          <BuildControls
            addingIngredient={this.addIngredientHandler}
            removeIngredient={this.removeIngredientHandler}
            disabledInfo={disabledInfo}
          />
        </>
      );
      orderSummaryInfo = (
        <OrderSummary
          totalPrice={this.state.totalPrice}
          ingredients={this.state.ingredients}
          cancel={this.cancelPurchasingModal}
          continue={this.purchaseContinueHandler}
        />
      );
    }

    if (this.state.loading) {
      orderSummaryInfo = <Loader></Loader>;
    }

    return (
      <>
        <Modal
          show={this.state.purchasing}
          closeModal={this.cancelPurchasingModal}
        >
          {orderSummaryInfo}
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
        {burger}
      </>
    );
  }
}

export default WithErrorHandler(BurgerBuilder, axios);
