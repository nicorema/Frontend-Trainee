import React from "react";
import classes from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import ToggleBtn from "../../UI/ToggleBtn/ToggleBtn";
const Toolbar = props => (
  <header className={classes.Toolbar}>
    <span className={classes.MobileOnly}>
      <ToggleBtn clickToggle={props.toggle}>
        <i className="material-icons">menu</i>
      </ToggleBtn>
    </span>
    <nav className={classes.DesktopOnly}>
      <NavigationItems isAuthenticated={props.isAuthenticated} />
    </nav>
    <div className={classes.Logo}>
      <Logo />
    </div>
  </header>
);

export default Toolbar;
