import React from "react";
import classes from "./Input.module.scss";
const input = props => {
  let inputElement = null;
  switch (props.elementType) {
    case "input":
      inputElement = (
        <input onChange={props.changed} className={classes.InputElement} {...props.elementConfig} />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea onChange={props.changed} className={classes.InputElement} {...props.elementConfig} />
      );
      break;
    case "select":
      let selectOptions = [];
      props.elementConfig.options.forEach((element , index) => {
        selectOptions.push(
          <option value={element.value} key={index}>{element.displayValue}</option>
        );
      });
      inputElement = (
        <select onChange={props.changed} className={classes.InputElement}>{selectOptions}</select>
      );
      break;

    default:
      inputElement = (
        <input onChange={props.changed} className={classes.InputElement} {...props.elementConfig} />
      );
  }
  return (
    <div className={classes.InputContainer}>
      <label>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default input;
