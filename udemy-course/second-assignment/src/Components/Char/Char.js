import React from "react";
import "./Char.css";
const Char = (props) => {
  return (
    <div onClick={props.remove} className="CharComponent">
      <h4>{props.char}</h4>
    </div>
  );
};

export default Char;
