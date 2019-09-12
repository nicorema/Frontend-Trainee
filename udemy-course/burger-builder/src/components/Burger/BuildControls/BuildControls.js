import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import classes from "../BuildControls/BuildControls.module.css";

const BuildControls = props => {
  const buildControls = ["salad", "bacon", "cheese", "meat"];
  return (
    <nav className={classes.BuildControls}>
      {buildControls.map(item => (
        <BuildControl
          key={item}
          label={item}
          addingIngredient={() => props.addingIngredient(item)}
          removeIngredient={() => props.removeIngredient(item)}
          disabled ={props.disabledInfo[item]}
        />
      ))}
    </nav>
  );
};

export default BuildControls;
