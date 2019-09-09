import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Person.css";
import NoSemanticCointainer from "../../../hoc/NoSemanticContainer";
import withClass from "../../../hoc/withClass";
class Person extends Component {
  constructor(props) {
    super(props);
    this.componentRef = React.createRef();
  }

  render() {
    return (
      <NoSemanticCointainer>
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
  }
}
Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  changeName: PropTypes.func,
  click: PropTypes.func
};

export default withClass(Person, "Person");
