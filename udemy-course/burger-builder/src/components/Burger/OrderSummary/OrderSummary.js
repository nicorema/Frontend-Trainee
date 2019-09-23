import React from "react";
import classes from "./OrderSummary.module.css";
import Button from "../../UI/Button/Button";

const OrderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map((key, index) => {
    return (
      <tr key={index}>
        <td style={{ textTransform: "capitalize" }}>{key}</td>
        <td>{props.ingredients[key]}</td>
      </tr>
    );
  });

  return (
    <>
      <h3>Your Order</h3>
      <p>A delicious burger with:</p>
      <table className={classes.TableOrder}>
        <tbody>
          <tr>
            <th>Ingredient:</th>
            <th>Quantity</th>
          </tr>
          {ingredientSummary}
        </tbody>
      </table>
      <p>Continue to checkout?</p>
      <div className={classes.Buttons}>
        <Button buttonClass="confirm">Cancel</Button>
        <Button buttonClass="cancel">Checkout</Button>
      </div>
    </>
  );
};

export default OrderSummary;
