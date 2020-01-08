import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.module.scss";
import axios from "../../../axios-orders";
import Loader from "../../../components/UI/Loader/Loader";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: ""
    },
    loading: false
  };
  render() {
    let form = (
      <div className={classes.ContactData}>
        <h4>Enter your contact data</h4>
        <form>
          <input type="text" name="name" placeholder="Your name" />
          <input type="email" name="email" placeholder="Your email" />
          <input type="text" name="street" placeholder="Street" />
          <input type="text" name="postal" placeholder="Postal Code" />
          <Button buttonClass="confirm" click={this.orderHandler}>
            Send
          </Button>
        </form>
      </div>
    );
    if (this.state.loading) {
      form = <Loader></Loader>;
    }
    return form;
  }

  orderHandler = event => {
    event.preventDefault();
    this.setState({
      loading: true
    });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: "Nico",
        address: {
          street: "Fake Street",
          zipCode: "23423",
          country: "Colombia"
        },
        email: "mymayl@mail.com"
      },
      deliveryMethod: "fastest"
    };
    axios
      .post("/orders.json", order)
      .then(response => {
          console.log(response)
        this.setState({
          loading: false
        });
        this.props.history.push("/");
      })
      .catch(error => {
        this.setState({
          loading: false
        });
      });
  };
}

export default ContactData;
