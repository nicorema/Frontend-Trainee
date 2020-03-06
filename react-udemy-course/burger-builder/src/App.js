import React, { useEffect, Suspense } from "react";
import "./App.css";
import Layout from "./containers/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Logout from "./containers/Auth/Logout/Logout";
import { connect } from "react-redux";
import * as actions from "./store/actions/index";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";

const Checkout = React.lazy(() => {
  return import("./containers/Checkout/Checkout");
});
const Orders = React.lazy(() => {
  return import("./containers/Orders/Orders");
});
const Auth = React.lazy(() => {
  return import("./containers/Auth/Auth");
});

const App = props => {
  const { onTryAutoSignUp } = props;
  useEffect(() => {
    onTryAutoSignUp();
  }, [onTryAutoSignUp]);

  let routes = (
    <Switch>
      <Route path="/auth" render={props => <Auth {...props} />}></Route>
      <Route path="/" component={BurgerBuilder}></Route>
      <Redirect to="/"></Redirect>
    </Switch>
  );
  if (props.isAuthenticated) {
    routes = (
      <Switch>
        <Route
          path="/checkout"
          render={props => <Checkout {...props} />}
        ></Route>
        <Route path="/orders" render={props => <Orders {...props} />}></Route>
        <Route path="/logout" component={Logout}></Route>
        <Route path="/auth" render={props => <Auth {...props} />}></Route>
        <Route path="/" component={BurgerBuilder}></Route>
      </Switch>
    );
  }

  return (
    <Layout>
      <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>
    </Layout>
  );
};

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
