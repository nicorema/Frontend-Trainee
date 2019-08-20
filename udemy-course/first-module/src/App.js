import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
class App extends Component {
  state = {
    persons: [
      { id:"1", name: "Max", age: 23 },
      { id:"2", name: "Nico", age: 24 },
      { id:"3", name: "Caro", age: 21 },
      { id:"4", name: "Lance", age: 30 }
    ],
    showPersons: false
  };

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  };

  nameChangeHandler = (id,event) => {
    let singlePersonIndex = this.state.persons.findIndex(person => person.id === id);
    let singlePerson = {...this.state.persons[singlePersonIndex]};
    singlePerson.name = event.target.value;
    let persons =[...this.state.persons];
    persons[singlePersonIndex] = singlePerson;

    this.setState({
      persons:persons
    })
  };

  deletePersonHandler = (personIndex) => {
    let persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons: persons})
  };
  render() {
    const style = {
      backgroundColor: "lightgrey",
      padding: "20px",
      border: "2px solid black",
      cursor: "pointer"
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person , index) => {
            return (
              <Person
                key={person.id}
                name={person.name}
                age={person.age}
                click={this.deletePersonHandler.bind(this,index)}
                changeName = {this.nameChangeHandler.bind(this,person.id)}
                />
            );
          })}
        </div>
      );
    }
    return (
      <div className="App">
        <h1>Nico's React App</h1>
        <p>This is really working!</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
