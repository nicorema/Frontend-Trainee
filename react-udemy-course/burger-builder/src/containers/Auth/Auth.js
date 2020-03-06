import React, { useState, useEffect } from "react";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Form/Input/Input";
import Loader from "../../components/UI/Loader/Loader";
import classes from "./Auth.module.scss";
import * as actions from "../../store/actions/index";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { updateObject, checkValidity } from "../../shared/utility";

const Auth = props => {
  const [formControlsState, setFormControlsState] = useState({
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
  });
  const [formIsValidState, setFormIsValidState] = useState(false);
  const [isSignUpState, setIsSignUpState] = useState(true);

  const inputChangeHandler = (event, inputID) => {
    const updatedControls = updateObject(formControlsState, {
      [inputID]: updateObject(formControlsState[inputID], {
        value: event.target.value,
        valid: checkValidity(
          event.target.value,
          formControlsState[inputID].validation
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
    setFormControlsState(updatedControls);
    setFormIsValidState(formIsValid);
  };
  const submitHandler = event => {
    event.preventDefault();
    props.onAuth(
      formControlsState.email.value,
      formControlsState.password.value,
      isSignUpState
    );
  };
  const switchModeHanlder = () => {
    setIsSignUpState(prevState => !prevState);
  };

  const { building, onSetAuthRedirectPath, authRedirectPath } = props;
  useEffect(() => {
    if (!building && authRedirectPath !== "/") {
      onSetAuthRedirectPath();
    }
  }, [building, onSetAuthRedirectPath, authRedirectPath]);

  let inputs = [];
  for (let key in formControlsState) {
    let inputElement = formControlsState[key];
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
  if (props.loading) {
    inputs = <Loader />;
  }
  let error = props.error ? <p>{props.error.message}</p> : null;
  let authRedirect = null;
  if (props.isAuthenticated) {
    authRedirect = <Redirect to={props.authRedirectPath}></Redirect>;
  }
  return (
    <div className={classes.Auth}>
      {authRedirect}
      <h3>{!isSignUpState ? "SIGN IN" : "SIGN UP"}</h3>
      {error}
      <form onSubmit={submitHandler}>
        {inputs}
        <Button buttonClass="confirm" buttonDisabled={!formIsValidState}>
          SUBMIT
        </Button>
      </form>
      <Button click={switchModeHanlder} buttonClass="cancel">
        Switch To {isSignUpState ? "SIGN IN" : "SIGN UP"}
      </Button>
    </div>
  );
};

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
