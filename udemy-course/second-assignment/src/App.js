import React, { Component } from "react";
import "./App.css";
import Validation from "./Components/Validation/Validation";
import Char from "./Components/Char/Char";
class App extends Component {
  state = {
    input: ""
  };

  changeTextHandler = event => {
    this.setState({
      input: event.target.value
    });
  };

  removeItemHandler = (index) =>{
    let textArray = this.state.input.split('');
    textArray.splice(index, 1);
    const textString = textArray.join('');
    this.setState({
      input:textString
    });

  }
  render() {
    let charComponentArray = null;
    const charArray = this.state.input.split("");
    charComponentArray = charArray.map((char,index) => {
      return <Char 
      key={index}
      char={char} 
      index = {index}
      remove={this.removeItemHandler.bind(this,index)}
      />;
    });
    return (
      <div className="App">
        <input
          type="text"
          onChange={this.changeTextHandler}
          value={this.state.input}
        />
        <p>{this.state.input.length}</p>
        <Validation inputLength={this.state.input.length} />
        {charComponentArray}
      </div>
    );
  }
}

export default App;
