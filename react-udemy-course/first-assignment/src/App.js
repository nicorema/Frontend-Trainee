import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import UserInput from "./Components/UserInput/UserInput";
import UserOutput from "./Components/UserOutput/UserOutput";

class App extends Component {

  state = {
    username:"nicorema"
  };

  userNameHandler = (event) =>{
    this.setState({
      username: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <UserInput  
          userName={this.state.username}  
          userNameHandler={this.userNameHandler}
        />
        <UserOutput userName={this.state.username} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName={this.state.username} />
      </div>
    );
  }
}

export default App;
