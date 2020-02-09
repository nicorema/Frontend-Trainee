import React from "react";
import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";
const NavigationItems = props => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/">
      Burger Builder
    </NavigationItem>
    <NavigationItem link="/Orders">Orders</NavigationItem>
    <NavigationItem link="/Auth">Authenticate</NavigationItem>
  </ul>
);

export default NavigationItems;
