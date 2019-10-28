import React from "react";
import classes from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
const Toolbar = (props) => (
    <header class={classes.Toolbar}>
        <div>Menu</div>
        <Logo />
        <nav>
            ...
        </nav>
    </header>
);

export default Toolbar;