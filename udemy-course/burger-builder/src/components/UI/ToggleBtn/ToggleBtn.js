import React from "react";

const ToggleBtn = props => {

    return (<span onClick={props.clickToggle}>{props.children}</span>)
};

export default ToggleBtn;
