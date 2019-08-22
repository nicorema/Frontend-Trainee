import React, { Component } from "react";
import "./App.css";
import PersonList from "../Components/PersonList/PersonList";
import CockPit from "../Components/PersonList/CockPit/CockPit";
class App extends Component {
  state = {
    persons: [
      { id: "1", name: "Max", age: 23 },
      { id: "2", name: "Nico", age: 24 },
      { id: "3", name: "Caro", age: 21 },
      { id: "4", name: "Lance", age: 30 }
    ],
    showPersons: false
  };

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  };

  nameChangeHandler = (id, event) => {
    let singlePersonIndex = this.state.persons.findIndex(
      person => person.id === id
    );
    let singlePerson = { ...this.state.persons[singlePersonIndex] };
    singlePerson.name = event.target.value;
    let persons = [...this.state.persons];
    persons[singlePersonIndex] = singlePerson;

    this.setState({
      persons: persons
    });
  };

  deletePersonHandler = personID => {
    let persons = [...this.state.persons];
    persons = persons.filter(person => person.id !== personID);
    this.setState({ persons: persons });
  };
  render() {
    let personsList = null;
    if (this.state.showPersons) {
      personsList = (
        <PersonList 
        persons={this.state.persons}
        deletePerson = {this.deletePersonHandler}       
        changeName = {this.nameChangeHandler} 
        />
      );
    }
  
    const cockPit = (
      <CockPit 
        title="Nico's React APP"
        toggledBtn = {this.state.showPersons}
        clickBtn = {this.togglePersonsHandler}
      />
    )
    return (
      <div className="App">
        {cockPit}
        {personsList}
      </div>
    );
  }
}

export default App;