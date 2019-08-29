import React, { Component } from "react";
import "./Person.css";
class Person extends Component {

    shouldComponentUpdate(nextProps, nextState){
        console.log("[Person.js] shouldComponentUpdate");
        return true;
    }

    getSnapshotBeforeUpdate(prev , prevstate){
        console.log('[Person.js] getSnapShotBeforeUpdate');
        return {message: "snapshot"};
    }
  
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('[Person.js]componentDidUpdate');
        console.log(snapshot);
    }
  render() {
      console.log('[Person.js] rendering');
    return (
      <li className="Person">
        <p>
          I'm {this.props.name} and I am {this.props.age} years old
        </p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changeName} value={this.props.name} />
        <button onClick={this.props.click}>Delete Me</button>
      </li>
    );
  }
}

export default Person;
