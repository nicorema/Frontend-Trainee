import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import App_Btn from './App_Btn';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false
    }
    this.handleChange = this.handleChange.bind(this);
    
  }
  render() {
    return (
      <div className="App">
        <h1>{this.state.isLoggedIn ? "Logged In" : "Logged Out"}</h1>
        <App_Btn logged={this.state.isLoggedIn} handleChange={this.handleChange} />
      </div>
    );
  }
  handleChange(logged) {
    console.log(logged);
    this.setState({ isLoggedIn: !logged });
  }
}

export default App;
