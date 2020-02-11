import React, { Component } from "react";
import "./App.css";
import Layout from "./containers/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Logout from "./containers/Auth/Logout/Logout";
import { connect } from "react-redux";
import * as actions from "./store/actions/index";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import asyncComponent from './hoc/asyncComponent/asyncComponent';

const asyncCheckOut = asyncComponent(()=>{
  return import("./containers/Checkout/Checkout");
})
const asyncOrders = asyncComponent(()=>{
  return import("./containers/Orders/Orders");
})
const asyncAuth = asyncComponent(()=>{
  return import("./containers/Auth/Auth");
})

class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignUp();
  }
  render() {
    let routes = (
      <Switch>
        <Route path="/auth" component={asyncAuth}></Route>
        <Route path="/" component={BurgerBuilder}></Route>
        <Redirect to="/"></Redirect>
      </Switch>
    );
    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/checkout" component={asyncCheckOut}></Route>
          <Route path="/orders" component={asyncOrders}></Route>
          <Route path="/logout" component={Logout}></Route>
          <Route path="/auth" component={asyncAuth}></Route>
          <Route path="/" component={BurgerBuilder}></Route>
        </Switch>
      );
    }

    return <Layout>{routes}</Layout>;
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token != null
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignUp: () => dispatch(actions.authCheckState())
  };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
