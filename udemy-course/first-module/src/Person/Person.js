import React from 'react';
import './Person.css';
import Radium from 'radium';
const person = (props) => {
    const style = {
        '@media(min-width: 740px)':{
            width:"450px",
        }
    };
    return (
        <div className="Person" style={style}>
            <p>I'm {props.name} and I am {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changeName} value={props.name}/>
            <button onClick={props.click}>Delete Me</button>
        </div>
    )
}

export default Radium(person);