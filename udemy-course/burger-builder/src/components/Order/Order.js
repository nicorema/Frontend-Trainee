import React from "react";

import classes from "./Order.module.scss";
const Order = props => {
  let ingredientsDescription = [];
  for (let item in props.ingredients) {
    ingredientsDescription.push(
      <p 
        style={{ textTransform: "capitalize" }} 
        key={item}>
        {item}: {props.ingredients[item]}
      </p>
    );
  }
  return (
    <div className={classes.Order}>
      {ingredientsDescription}
      <p style={{ textTransform: "capitalize" }}>
        Price: <strong>${props.price.toFixed(2)}</strong>
      </p>
    </div>
  );
};

export default Order;
