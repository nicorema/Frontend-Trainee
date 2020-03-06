import React, { Component } from "react";
import "./App.css";
import PersonList from "../Components/PersonList/PersonList";
import CockPit from "../Components/Cockpit/CockPit";
import withClass from "../Hoc/withClass";
import NoSemanticCointainer from "../Hoc/NoSemanticContainer";
import AuthContext from '../Context/auth-context'

class App extends Component {
  state = {
    persons: [
      { id: "1", name: "Max", age: 23 },
      { id: "2", name: "Nico", age: 24 },
      { id: "3", name: "Caro", age: 21 },
      { id: "4", name: "Lance", age: 30 }
    ],
    showPersons: false,
    changeCounter: 0,
    authenticated: false
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

    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      };
    });
  };

  deletePersonHandler = personID => {
    let persons = [...this.state.persons];
    persons = persons.filter(person => person.id !== personID);
    this.setState({ persons: persons });
  };

  loginHandler = () => {
    this.setState({ authenticated: true });
  };
  render() {
    let personsList = null;
    if (this.state.showPersons) {
      personsList = (
        <PersonList
          persons={this.state.persons}
          deletePerson={this.deletePersonHandler}
          changeName={this.nameChangeHandler}
          isAuthenticated = {this.state.authenticated}
        />
      );
    }

    const cockPit = (
      <CockPit
        title="Nico's React APP"
        toggledBtn={this.state.showPersons}
        clickBtn={this.togglePersonsHandler}
        persons={this.state.persons}
      />
    );
    return (
      <AuthContext.Provider value={{ authenticaded: this.state.authenticated ,  login: this.loginHandler}}>
        <NoSemanticCointainer>
          {cockPit}
          {personsList}
        </NoSemanticCointainer>
      </AuthContext.Provider>
    );
  }
}

export default withClass(App, "App");
