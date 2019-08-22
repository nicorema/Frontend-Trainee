import React from "react";
import Person from "./Person/Person";
import "./PersonList.css";

const PersonList = props => {
console.log('[PersonList.js] render');
return(
  <ul className="PersonList">
    {props.persons.map(person => (
      <Person
        key={person.id}
        name={person.name}
        age={person.age}
        click={props.deletePerson.bind(this, person.id)}
        changeName={props.changeName.bind(this, person.id)}
      />
    ))}
  </ul>
)};

export default PersonList;
