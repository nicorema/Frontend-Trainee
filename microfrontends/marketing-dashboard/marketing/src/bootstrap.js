import React from "react";
import ReactDOM from "react-dom";

const mount = (el) => {
  ReactDOM.render(<h1>Hi there, I'm Marketing</h1>, el);
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#__marketing__dev__root__");

  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };
