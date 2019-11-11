import React from "react";
import classes from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
class Layout extends React.Component {
  state = {
    sideDrawerVisible: true
  };
  sideDrawerclosedHandler = () => {
    this.setState(prevState => {
      return {
        sideDrawerVisible: !prevState.sideDrawerVisible
      };
    });
  };

  render() {
    return (
      <>
        <Toolbar toggle={this.sideDrawerclosedHandler} />
        <SideDrawer
          closed={this.sideDrawerclosedHandler}
          open={this.state.sideDrawerVisible}
        />
        <main className={classes.main}>{this.props.children}</main>
      </>
    );
  }
}

export default Layout;
