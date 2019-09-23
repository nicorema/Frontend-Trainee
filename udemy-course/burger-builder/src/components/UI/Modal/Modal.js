import React from "react";
import classes from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";
const Modal = props => (
  <>
  <div
    className={classes.Modal}
    style={{
      transform: props.show ? "translateY(0)" : "translateY(-100vh)",
      opacity: props.show ? "1" : "0"
    }}
  >
    {props.children}
  </div>
    <Backdrop show={props.show} closeModal={props.closeModal}/>
  </>
);
export default Modal;
