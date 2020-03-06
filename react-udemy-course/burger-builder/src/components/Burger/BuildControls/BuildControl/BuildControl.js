import React from "react";
import classes from "../BuildControl/BuildControl.module.css";

const BuildControl = props => (
  <div className={classes.BuildControl}>
    <h2>{props.label}</h2>
    <button onClick={props.addingIngredient}>
      <i className={"material-icons " + classes.add}>add_circle</i>
    </button>
    <button onClick={props.removeIngredient} disabled={props.disabled}>
      <i className={"material-icons " + classes.remove}>remove_circle</i>
    </button>
  </div>
);

export default BuildControl;
