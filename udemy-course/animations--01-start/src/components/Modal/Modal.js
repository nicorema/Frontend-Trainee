import React from "react";

import "./Modal.css";

import CSSTransition from "react-transition-group/CSSTransition";
const animationTiming = {
  enter: 800,
  exit: 400
};
const modal = props => {
  return (
    <CSSTransition
      in={props.show}
      timeout={animationTiming}
      mountOnEnter
      unmountOnExit
      classNames={{
        enter: "",
        enterActive: "open",
        exit: "",
        exitActive: "closed"
      }}
    >
      <div className="Modal">
        <h1>A Modal</h1>
        <button className="Button" onClick={props.closed}>
          Dismiss
        </button>
      </div>
    </CSSTransition>
  );
};

export default modal;
