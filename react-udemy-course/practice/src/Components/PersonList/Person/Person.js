import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Person.css";
import NoSemanticCointainer from "../../../Hoc/NoSemanticContainer";
import withClass from "../../../Hoc/withClass";
import AuthContext from "../../../Context/auth-context";
import styled from "styled-components";
class Person extends Component {
  constructor(props) {
    super(props);
    this.componentRef = React.createRef();
  }

  static contextType = AuthContext;

  render() {
    const Btn = styled.button`
      background: red;
      outline:0;
      border:0;
      padding:4px;
      margin:0 10px;
      font-weight:bold;
      color:white;
    `;
    return (
      <NoSemanticCointainer>
        {this.context.authenticaded ? (
          <p>Authenticated</p>
        ) : (
          <p>Please Log In</p>
        )}
        <p>
          I'm {this.props.name} and I am {this.props.age} years old
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changeName}
          value={this.props.name}
          ref={this.componentRef}
        />
        <Btn onClick={this.props.click}>Delete Me</Btn>
      </NoSemanticCointainer>
    );
  }

  componentDidMount() {
    this.componentRef.current.focus();
    console.log(this.context.authenticaded);
  }
}
Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  changeName: PropTypes.func,
  click: PropTypes.func
};

export default withClass(Person, "Person");
