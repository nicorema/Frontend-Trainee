import React, { useEffect } from "react";
import Order from "../../components/Order/Order";
import axios from "../../axios-orders";
import WithErrorHandler from "../../hoc/WithErrorHandler/WithErrorHandler";
import * as actions from "../../store/actions/index";
import { connect } from "react-redux";
import Loader from "../../components/UI/Loader/Loader";
const Orders = props => {
  const { onFetchOrders } = props;
  useEffect(() => {
    onFetchOrders(props.token, props.userId);
  }, [onFetchOrders]);

  let orders = <Loader />;
  if (!props.loading) {
    orders = props.orders.map(orderItem => (
      <Order
        key={orderItem.id}
        ingredients={orderItem.ingredients}
        price={+orderItem.price}
      ></Order>
    ));
  }
  return orders;
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchOrders: (token, userId) =>
      dispatch(actions.fetchOrders(token, userId))
  };
};

const mapStateToProps = state => {
  return {
    orders: state.orders.orders,
    loading: state.orders.loading,
    token: state.auth.token,
    userId: state.auth.userId
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithErrorHandler(Orders, axios));
