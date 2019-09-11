import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger = props => {
  let ingredientsComponents = [];
  Object.entries(props.ingredients).forEach(element => {
    for (let i = 0; i < element[1]; i++) {
      ingredientsComponents.push(
        <BurgerIngredient key={element[0] + (i + 1)} type={element[0]} />
      );
    }
  });

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
        {ingredientsComponents}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
