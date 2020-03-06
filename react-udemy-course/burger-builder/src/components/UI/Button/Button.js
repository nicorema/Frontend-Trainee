import React from "react";
import classes from "./Button.module.css";

const Button = props => (
  <button
    onClick={props.click}
    className={[classes.Button, classes[props.buttonClass]].join(" ")}
    disabled = {props.buttonDisabled}
  >
    {props.children}
  </button>
);
export default Button;
