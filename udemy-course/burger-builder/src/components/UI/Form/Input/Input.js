import React from "react";
import classes from "./Input.module.scss";
const input = props => {
  let inputElement = null;
  const inputClasses = [classes.InputElement];
  let errorMsj = null;
  if (props.shouldValidate && !props.valid && props.touched) {
    inputClasses.push(classes.Invalid);
    errorMsj = <p className={classes.ValidationError}>Invalid {props.label}</p>
  }
  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          onChange={props.changed}
          className={inputClasses.join(" ")}
          {...props.elementConfig}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          onChange={props.changed}
          className={inputClasses.join(" ")}
          {...props.elementConfig}
        />
      );
      break;
    case "select":
      let selectOptions = [];
      props.elementConfig.options.forEach((element, index) => {
        selectOptions.push(
          <option value={element.value} key={index}>
            {element.displayValue}
          </option>
        );
      });
      inputElement = (
        <select onChange={props.changed} className={inputClasses.join(" ")}>
          {selectOptions}
        </select>
      );
      break;

    default:
      inputElement = (
        <input
          onChange={props.changed}
          className={inputClasses.join(" ")}
          {...props.elementConfig}
        />
      );
  }
  return (
    <div className={classes.InputContainer}>
      <label>{props.label}</label>
      {inputElement}
      {errorMsj}
    </div>
  );
};

export default input;
