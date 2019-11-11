import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./SideDrawer.module.css";
import Backdrop from "../../UI/Backdrop/Backdrop";

const SideDrawer = props => {
  let attachedClasses = [classes.SideDrawer]
  if(props.open){
    attachedClasses.push(classes.Open);
  }else{
    attachedClasses.push(classes.Close)
  }
  return (
    <>
      <div className={classes.BackDrop}>
      <Backdrop show={props.open} closeModal={props.closed}></Backdrop>
      </div>
      <div className={attachedClasses.join(' ')}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </>
  );
};

export default SideDrawer;
