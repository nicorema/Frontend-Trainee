import React from "react";
import classes from "./OrderSummary.module.css";
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
            <th>Ingredient Name</th>
            <th>Quantity</th>
          </tr>
          {ingredientSummary}
        </tbody>
      </table>
      <p>Continue to checkout</p>
    </>
  );
};

export default OrderSummary;
