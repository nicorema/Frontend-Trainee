import React, {useState,} from "react";
import { connect } from "react-redux";

import classes from "./Layout.module.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
const Layout = (props) => {
  const [sideDrawerVisible , setsideDrawerVisible] = useState(true);

  const sideDrawerclosedHandler = () => {
    setsideDrawerVisible((prevState => !prevState));
  };

  return (
    <>
      <Toolbar
        isAuthenticated={props.isAuthenticated}
        toggle={sideDrawerclosedHandler}
      />
      <SideDrawer
        isAuthenticated={props.isAuthenticated}
        closed={sideDrawerclosedHandler}
        open={sideDrawerVisible}
      />
      <main className={classes.main}>{props.children}</main>
    </>
  );
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

export default connect(mapStateToProps)(Layout);
