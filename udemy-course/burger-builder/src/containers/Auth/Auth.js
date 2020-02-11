import React, { Component } from "react";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Form/Input/Input";
import Loader from "../../components/UI/Loader/Loader";
import classes from "./Auth.module.scss";
import * as actions from "../../store/actions/index";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { updateObject, checkValidity } from "../../shared/utility";

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
  
  inputChangeHandler = (event, inputID) => {
    const updatedControls = updateObject(this.state.controls, {
      [inputID]: updateObject(this.state.controls[inputID], {
        value: event.target.value,
        valid: checkValidity(
          event.target.value,
          this.state.controls[inputID].validation
        ),
        touched: true
      })
    });

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

  componentDidMount() {
    if (!this.props.building && this.props.authRedirectPath !== "/") {
      this.props.onSetAuthRedirectPath();
    }
  }

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
    if (this.props.loading) {
      inputs = <Loader />;
    }
    let error = this.props.error ? <p>{this.props.error.message}</p> : null;

    let authRedirect = null;
    if (this.props.isAuthenticated) {
      authRedirect = <Redirect to={this.props.authRedirectPath}></Redirect>;
    }
    return (
      <div className={classes.Auth}>
        {authRedirect}
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
    error: state.auth.error,
    isAuthenticated: state.auth.token != null,
    building: state.burgerBuilder.building,
    authRedirectPath: state.auth.authRedirectPath
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password, isSignUp) =>
      dispatch(actions.auth(email, password, isSignUp)),
    onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath("/"))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
