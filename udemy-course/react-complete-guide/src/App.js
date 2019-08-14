import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'
const App = (props) => {
  const [ initialState, newState]= useState(
    state = {
      persons: [
        { name: 'Max', age: 23 },
        { name: 'Nico', age: 24 },
        { name: 'Caro', age: 21 },
        { name: 'Lance', age: 30 },
      ]
    }
  );
  return (
    <div className="App">
      <h1>Nico's React App</h1>
      <p>This is really working!</p>
      <button onClick={this.switchAgeHandler}>Swicth Age</button>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>My Hobbie is: Netflix</Person>
      <Person name={this.state.persons[3].name} age={this.state.persons[3].age} />

    </div>
  );
}

export default App;


switchAgeHandler = () => {
  this.setState({
    persons: [
      { name: 'Max', age: 33 },
      { name: 'Nico', age: 34 },
      { name: 'Caro', age: 31 },
      { name: 'Lance', age: 40 },
    ]
  }
  )
}