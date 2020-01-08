import React, { Component } from "react";
import Order from "../../components/Order/Order";
import axios from "../../axios-orders";
import WithErrorHandler from "../../hoc/WithErrorHandler/WithErrorHandler";
class Orders extends Component {
  state = {
    orders: [],
    loading: true
  };
  componentDidMount() {
    axios
      .get("./orders.json")
      .then(res => {
        const fetchOrders = [];
        for (let key in res.data) {
          fetchOrders.push({ ...res.data[key], id: key });
        }
        this.setState({
          loading: false,
          orders: fetchOrders
        });
      })
      .catch(err => {
        this.setState({ loading: false });
      });
  }
  render() {
    return this.state.orders.map(orderItem => (
      <Order
        key={orderItem.id}
        ingredients={orderItem.ingredients}
        price={+orderItem.price}
      ></Order>
    ));
  }
}

export default WithErrorHandler(Orders, axios);
