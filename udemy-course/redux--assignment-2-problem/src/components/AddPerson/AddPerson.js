import React, { Component } from "react";

import "./AddPerson.css";

class addPerson extends Component {
  state = {
    name: "",
    age: "",
  };

  render() {
    return (
      <div className="AddPerson">
        <input
          type="text"
          placeholder="Name"
          onChange={this.nameChangeHandler}
          value={this.state.name}
        />
        <input
          type="number"
          placeholder="Age"
          onChange={this.ageChangeHandler}
          value={this.state.age}
        />
        <button onClick={()=>this.props.personAdded(this.state.name,this.state.age)}>Add Person</button>
      </div>
    );
  }

  nameChangeHandler = event => {
    this.setState({ name: event.target.value });
  };

  ageChangeHandler = event => {
    this.setState({ age: event.target.value });
  };
}

export default addPerson;
