import React, { Component } from "react";
import Person from "./Person/Person";
import "./PersonList.css";

class PersonList extends Component {
  render() {
    console.log('[PersonList.js] rendering');
    return (
      <ul className="PersonList">
        {this.props.persons.map(person => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            click={this.props.deletePerson.bind(this, person.id)}
            changeName={this.props.changeName.bind(this, person.id)}
          />
        ))}
      </ul>
    );
  }
}

export default PersonList;
