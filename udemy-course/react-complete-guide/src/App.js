import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 23 },
      { name: "Nico", age: 24 },
      { name: "Caro", age: 21 },
      { name: "Lance", age: 30 }
    ]
  };

  switchAgeHandler = () => {
    this.setState({
      persons: [
        { name: "Max", age: 33 },
        { name: "Nico", age: 34 },
        { name: "Caro", age: 31 },
        { name: "Lance", age: 40 }
      ]
    });
  };

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 33 },
        { name: "Nico", age: 34 },
        { name: "Caro", age: 31 },
        { name: "Lance", age: 40 }
      ]
    });
  };
  render() {
    const style={
      backgroundColor:"lightgrey",
      padding:"20px",
      border:"2px solid black",
      cursor:'pointer',
    };
    return (
      <div className="App">
        <h1>Nico's React App</h1>
        <p>This is really working!</p>
        <button 
          style={style}
          onClick={this.switchAgeHandler}>Swicth Age
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          changeName = {this.nameChangeHandler}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        >
          My Hobbie is: Netflix
        </Person>
        <Person
          name={this.state.persons[3].name}
          age={this.state.persons[3].age}
        />
      </div>
    );
  }
}

export default App;
