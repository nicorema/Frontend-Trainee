import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.module.scss";
import axios from "../../../axios-orders";
import Loader from "../../../components/UI/Loader/Loader";
import Input from "../../../components/UI/Form/Input/Input";
class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your name"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false
      },
      street: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Street"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false
      },
      zipCode: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "ZIP Code"
        },
        value: "",
        validation: {
          required: true,
          minLength:5,
          maxLength: 8
        },
        valid: false
      },
      country: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Country"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Your E-mail"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false
      },
      deliveryMethod: {
        elementType: "select",
        elementConfig: {
          options: [
            { value: "fastest", displayValue: "Fastest" },
            { value: "cheapest", displayValue: "Cheapest" }
          ]
        },
        value: ""
      }
    },
    loading: false
  };
  render() {
    let inputs = [];
    for (let key in this.state.orderForm) {
      let inputElement = this.state.orderForm[key];
      inputs.push(
        <Input
          key={key}
          {...inputElement}
          label={key}
          changed={event => this.inputChangeHandler(event, key)}
        />
      );
    }
    let form = (
      <div className={classes.ContactData}>
        <h4>Enter your contact data</h4>
        <form onSubmit={this.orderHandler}>
          {inputs}
          <Button buttonClass="confirm">Send</Button>
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
    const formData = {};
    for (let formID in this.state.orderForm) {
      formData[formID] = this.state.orderForm[formID].value;
    }
    this.setState({
      loading: true
    });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      orderData: formData
    };
    axios
      .post("/orders.json", order)
      .then(response => {
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

  checkValidity(value, rules) {
    let isValid = true;
    if (rules.required) {
      isValid = value.trim() != "" && isValid;
    }
    if(rules.minLength){
      isValid = value.trim().length >= rules.minLength && isValid;
    }
    if(rules.maxLength){
      isValid = value.trim().length <= rules.maxLength && isValid;
    }
    return isValid;
  }
  inputChangeHandler = (event, inputID) => {
    const updatedOrderForm = {
      ...this.state.orderForm
    };
    const updatedFormElement = { ...updatedOrderForm[inputID] };
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = this.checkValidity(updatedFormElement.value,updatedFormElement.validation);
    console.log(updatedFormElement);
    updatedOrderForm[inputID] = updatedFormElement;
    this.setState({
      orderForm: updatedOrderForm
    });
  };
}

export default ContactData;