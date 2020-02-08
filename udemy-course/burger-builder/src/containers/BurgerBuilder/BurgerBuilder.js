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

import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
class BurgerBuilder extends Component {
  state = {
    purchasing: false
  };

  componentDidMount() {
    this.props.onInitIngredients();
  }

  updatePurchaseState() {
    let isPurshasable = false;
    if (this.props.ingredients) {
      isPurshasable = !Object.values(this.props.ingredients).every(
        value => value === 0
      );
    }
    return isPurshasable;
  }

  purchasingHandler = () => {
    this.setState({ purchasing: true });
  };

  cancelPurchasingModal = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    this.props.onInitPurchase();
    this.props.history.push("/checkout");
  };

  render() {
    const disabledInfo = {
      ...this.props.ingredients
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] > 0 ? false : true;
    }
    let burger = this.props.error ? <p>Fatal Error</p> : <Loader></Loader>;
    let orderSummaryInfo = null;
    if (this.props.ingredients) {
      burger = (
        <>
          <Burger ingredients={this.props.ingredients}></Burger>
          <BuildControls
            addingIngredient={this.props.onAddIngredient}
            removeIngredient={this.props.onRemoveIngredient}
            disabledInfo={disabledInfo}
          />
        </>
      );
      orderSummaryInfo = (
        <OrderSummary
          totalPrice={this.props.totalPrice}
          ingredients={this.props.ingredients}
          cancel={this.cancelPurchasingModal}
          continue={this.purchaseContinueHandler}
        />
      );
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
          <strong>{"$" + this.props.totalPrice.toFixed(2)}</strong>
        </div>
        <Button
          buttonDisabled={!this.updatePurchaseState()}
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

const mapStateToProps = state => {
  return {
    ingredients: state.burgerBuilder.ingredients,
    totalPrice: state.burgerBuilder.totalPrice,
    error: state.burgerBuilder.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddIngredient: ingType =>
      dispatch(actions.addIngredient(ingType)),
    onRemoveIngredient: ingType =>
      dispatch(actions.removeIngredient(ingType)),
    onInitIngredients: () => dispatch(actions.initIngredients()),
    onInitPurchase: () => dispatch(actions.purchaseInit())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithErrorHandler(BurgerBuilder, axios));
