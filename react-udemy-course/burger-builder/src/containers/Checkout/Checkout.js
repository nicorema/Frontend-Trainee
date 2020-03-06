import React from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import { Route, Redirect } from "react-router-dom";
import ContactData from "../Checkout/ContactData/ContactData";
import { connect } from "react-redux";

const Checkout = props => {
  const cancelCheckoutHandler = () => {
    props.history.goBack();
  };
  const continueCheckoutHandler = () => {
    props.history.replace("/checkout/contact-data");
  };

  let summary = <Redirect to="/" />;
  console.log(props)
  if (props.ingredients) {
    const purchasedRedirect = props.purchased ? <Redirect to="/" /> : null;
    summary = (
      <>
        {purchasedRedirect}
        <CheckoutSummary
          ingredients={props.ingredients}
          cancelCheckout={cancelCheckoutHandler}
          continueCheckout={continueCheckoutHandler}
        ></CheckoutSummary>
        <Route
          path={props.match.path + "/contact-data"}
          component={ContactData}
        ></Route>
      </>
    );

    return summary;
  }
};
const mapStateToProps = state => {
  return {
    ingredients: state.burgerBuilder.ingredients,
    purchased: state.orders.purchased
  };
};

export default connect(mapStateToProps)(Checkout);
