import React, { useState } from "react";
import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.module.scss";
import axios from "../../../axios-orders";
import Loader from "../../../components/UI/Loader/Loader";
import Input from "../../../components/UI/Form/Input/Input";
import { connect } from "react-redux";
import withErrorHandler from "../../../hoc/WithErrorHandler/WithErrorHandler";
import * as orderActions from "../../../store/actions/index";
import { updateObject, checkValidity } from "../../../shared/utility";
const ContactData = props => {
  const [formIsValidState, setFormIsValidState] = useState(false);
  const [orderFormState, setOrderFormState] = useState({
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
      valid: false,
      touched: false
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
      valid: false,
      touched: false
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
        minLength: 5,
        maxLength: 8,
        inNumeric: true
      },
      valid: false,
      touched: false
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
      valid: false,
      touched: false
    },
    email: {
      elementType: "input",
      elementConfig: {
        type: "email",
        placeholder: "Your E-mail"
      },
      value: "",
      validation: {
        isEmail: true,
        required: true
      },
      valid: false,
      touched: false
    },
    deliveryMethod: {
      elementType: "select",
      elementConfig: {
        options: [
          { value: "fastest", displayValue: "Fastest" },
          { value: "cheapest", displayValue: "Cheapest" }
        ]
      },
      value: "fastest",
      validation: {},
      valid: true
    }
  });

  const orderHandler = event => {
    event.preventDefault();
    const formData = {};
    for (let formID in orderFormState) {
      formData[formID] = orderFormState[formID].value;
    }
    const order = {
      ingredients: props.ingredients,
      price: props.price,
      orderData: formData,
      userId: props.userId
    };
    props.onOrderBurger(order, props.token);
  };
  const inputChangeHandler = (event, inputIdentifier) => {
    const updatedFormElement = updateObject(orderFormState[inputIdentifier], {
      value: event.target.value,
      valid: checkValidity(
        event.target.value,
        orderFormState[inputIdentifier].validation
      ),
      touched: true
    });
    const updatedOrderForm = updateObject(orderFormState, {
      [inputIdentifier]: updatedFormElement
    });
    let formIsValid = true;
    for (let inputIdentifier in updatedOrderForm) {
      formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
    }
    setOrderFormState(updatedOrderForm);
    setFormIsValidState(formIsValid);
  };

  let inputs = [];
  for (let key in orderFormState) {
    let inputElement = orderFormState[key];
    inputs.push(
      <Input
        key={key}
        {...inputElement}
        label={key}
        shouldValidate={inputElement.validation}
        changed={event => inputChangeHandler(event, key)}
      />
    );
  }
  let form = (
    <div className={classes.ContactData}>
      <h4>Enter your contact data</h4>
      <form onSubmit={orderHandler}>
        {inputs}
        <Button buttonClass="confirm" buttonDisabled={!formIsValidState}>
          Send
        </Button>
      </form>
    </div>
  );
  if (props.loading) {
    form = <Loader></Loader>;
  }
  return form;
};

const mapStateToProps = state => {
  return {
    ingredients: state.burgerBuilder.ingredients,
    price: state.burgerBuilder.totalPrice,
    loading: state.orders.loading,
    token: state.auth.token,
    userId: state.auth.userId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onOrderBurger: (orderData, token) =>
      dispatch(orderActions.purchaseBurger(orderData, token))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(ContactData, axios));
