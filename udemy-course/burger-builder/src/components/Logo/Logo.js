import React from 'react';
import burgerLogo from "../../assets/images/hamburger.png";
import classes from "./Logo.module.css";
const Logo = (props) => (
    <div className={classes.Logo}>
        <img src={burgerLogo} alt="Burger Logo"/>
    </div>
);
export default Logo;