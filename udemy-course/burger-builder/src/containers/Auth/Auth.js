import React, { Component } from "react";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Form/Input/Input";
import Loader from "../../components/UI/Loader/Loader";
import classes from "./Auth.module.scss";
import * as actions from "../../store/actions/index";
import { connect } from "react-redux";

class Auth extends Component {
  state = {
    controls: {
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Email Address"
        },
        value: "",
        validation: {
          required: true,
          isEmail: true
        },
        valid: false,
        touched: false
      },
      password: {
        elementType: "input",
        elementConfig: {
          type: "password",
          placeholder: "Password"
        },
        value: "",
        validation: {
          required: true,
          minLength: 6
        },
        valid: false,
        touched: false
      }
    },
    formIsValid: false,
    isSignUp: true
  };
  checkValidity(value, rules) {
    let isValid = true;
    if (!rules) {
      return true;
    }

    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }

    if (rules.isEmail) {
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      isValid = pattern.test(value) && isValid;
    }

    if (rules.isNumeric) {
      const pattern = /^\d+$/;
      isValid = pattern.test(value) && isValid;
    }

    return isValid;
  }
  inputChangeHandler = (event, inputID) => {
    const updatedControls = {
      ...this.state.controls,
      [inputID]: {
        ...this.state.controls[inputID],
        value: event.target.value,
        valid: this.checkValidity(
          event.target.value,
          this.state.controls[inputID].validation
        ),
        touched: true
      }
    };

    let formIsValid = true;
    for (let inputID in updatedControls) {
      formIsValid = updatedControls[inputID].valid && formIsValid;

      if (!formIsValid) {
        break;
      }
    }
    this.setState({ controls: updatedControls, formIsValid: formIsValid });
  };
  submitHandler = event => {
    event.preventDefault();
    this.props.onAuth(
      this.state.controls.email.value,
      this.state.controls.password.value,
      this.state.isSignUp
    );
  };
  switchModeHanlder = () => {
    this.setState(prevState => {
      return {
        isSignUp: !prevState.isSignUp
      };
    });
  };
  render() {
    let inputs = [];
    for (let key in this.state.controls) {
      let inputElement = this.state.controls[key];
      inputs.push(
        <Input
          key={key}
          {...inputElement}
          label={key}
          shouldValidate={inputElement.validation}
          changed={event => this.inputChangeHandler(event, key)}
        />
      );
    }
    if(this.props.loading){
      inputs = <Loader />
    }
    let error = this.props.error ? <p>{this.props.error.message}</p> :null;
    
    return (
      <div className={classes.Auth}>
        <h3>{!this.state.isSignUp ? "SIGN IN" : "SIGN UP"}</h3>
        {error}
        <form onSubmit={this.submitHandler}>
          {inputs}
          <Button
            buttonClass="confirm"
            buttonDisabled={!this.state.formIsValid}
          >
            SUBMIT
          </Button>
        </form>
        <Button click={this.switchModeHanlder} buttonClass="cancel">
          Switch To {this.state.isSignUp ? "SIGN IN" : "SIGN UP"}
        </Button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    error: state.auth.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password, isSignUp) =>
      dispatch(actions.auth(email, password, isSignUp))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
