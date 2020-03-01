import React, { useState, useEffect, useCallback } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import classes from "./BurgerBuilder.module.css";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Button from "../../components/UI/Button/Button";
import Loader from "../../components/UI/Loader/Loader";
import axios from "../../axios-orders";
import WithErrorHandler from "../../hoc/WithErrorHandler/WithErrorHandler";

import { connect, useDispatch, useSelector } from "react-redux";

import * as actions from "../../store/actions/index";
const BurgerBuilder = props => {
  const [purchasingState, setPurchasingState] = useState(false);

  const dispatch = useDispatch();

  const ingredients = useSelector(state => state.burgerBuilder.ingredients);
  const totalPrice = useSelector(state => state.burgerBuilder.totalPrice);
  const error = useSelector(state => state.burgerBuilder.error);
  const isAuthenticaded = useSelector(state => state.auth.token !== null);

  const onAddIngredient = ingType => dispatch(actions.addIngredient(ingType));
  const onRemoveIngredient = ingType =>
    dispatch(actions.removeIngredient(ingType));
  const onInitIngredients = useCallback(
    () => dispatch(actions.initIngredients()),
    [dispatch]
  );
  const onInitPurchase = () => dispatch(actions.purchaseInit());
  const onSetRedirectPath = path => dispatch(actions.setAuthRedirectPath(path));

  useEffect(() => {
    onInitIngredients();
  }, [onInitIngredients]);

  const updatePurchaseState = () => {
    let isPurshasable = false;
    if (ingredients) {
      isPurshasable = !Object.values(ingredients).every(value => value === 0);
    }
    return isPurshasable;
  };

  const purchasingHandler = () => {
    if (isAuthenticaded) {
      setPurchasingState(true);
    } else {
      onSetRedirectPath("/checkout");
      props.history.push("/auth");
    }
  };

  const cancelPurchasingModal = () => {
    setPurchasingState(false);
  };

  const purchaseContinueHandler = () => {
    onInitPurchase();
    props.history.push("/checkout");
  };

  const disabledInfo = {
    ...ingredients
  };
  for (let key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] > 0 ? false : true;
  }
  let burger = error ? <p>Fatal Error</p> : <Loader></Loader>;
  let orderSummaryInfo = null;
  if (ingredients) {
    burger = (
      <>
        <Burger ingredients={ingredients}></Burger>
        <BuildControls
          addingIngredient={onAddIngredient}
          removeIngredient={onRemoveIngredient}
          disabledInfo={disabledInfo}
        />
      </>
    );
    orderSummaryInfo = (
      <OrderSummary
        totalPrice={totalPrice}
        ingredients={ingredients}
        cancel={cancelPurchasingModal}
        continue={purchaseContinueHandler}
      />
    );
  }

  return (
    <>
      <Modal show={purchasingState} closeModal={cancelPurchasingModal}>
        {orderSummaryInfo}
      </Modal>
      <div className={classes.TotalPrice}>
        <label>Current Price</label>
        <strong>{"$" + totalPrice.toFixed(2)}</strong>
      </div>
      <Button
        buttonDisabled={!updatePurchaseState()}
        buttonClass="OrderBtn"
        click={purchasingHandler}
      >
        {isAuthenticaded ? "ORDER NOW" : "SIGN UP TO ORDER"}
      </Button>
      {burger}
    </>
  );
};

export default WithErrorHandler(BurgerBuilder, axios);
