import React from "react";
import { connect } from "react-redux";

import classes from "./Layout.module.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
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
        <Toolbar 
        isAuthenticated = {this.props.isAuthenticated}
        toggle={this.sideDrawerclosedHandler} />
        <SideDrawer
          isAuthenticated = {this.props.isAuthenticated}
          closed={this.sideDrawerclosedHandler}
          open={this.state.sideDrawerVisible}
        />
        <main className={classes.main}>{this.props.children}</main>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

export default connect(mapStateToProps)(Layout);
