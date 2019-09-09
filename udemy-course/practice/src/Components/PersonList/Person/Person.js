import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Person.css";
import NoSemanticCointainer from "../../../Hoc/NoSemanticContainer";
import withClass from "../../../Hoc/withClass";
import AuthContext from "../../../Context/auth-context";

class Person extends Component {
  constructor(props) {
    super(props);
    this.componentRef = React.createRef();
  }

  static contextType = AuthContext;

  render() {
    return (
      <NoSemanticCointainer>
        {this.context.authenticaded ? <p>Authenticated</p> : <p>Please Log In</p>}
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
        <button onClick={this.props.click}>Delete Me</button>
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
