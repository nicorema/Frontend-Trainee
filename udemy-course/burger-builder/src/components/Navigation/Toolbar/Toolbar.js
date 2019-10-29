import React from "react";
import classes from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
const Toolbar = props => (
  <header className={classes.Toolbar}>
    <div>Menu</div>
    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
    <div className={classes.Logo}>
      <Logo />
    </div>
  </header>
);

export default Toolbar;
