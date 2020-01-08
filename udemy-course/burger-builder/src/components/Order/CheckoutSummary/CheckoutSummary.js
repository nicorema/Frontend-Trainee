import React from "react";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";

import classes from "./CheckoutSummary.module.scss";

const CheckoutSummary = props => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>We hope it taastes well</h1>
      <div className={classes.wrapper}>
        <div className={classes.Burger}>
          <Burger ingredients={props.ingredients} />
        </div>

        <Button buttonClass="cancel" click={props.cancelCheckout}>
          Cancel
        </Button>
        <Button buttonClass="confirm" click={props.continueCheckout}>
          Confirm
        </Button>
      </div>
    </div>
  );
};

export default CheckoutSummary;
