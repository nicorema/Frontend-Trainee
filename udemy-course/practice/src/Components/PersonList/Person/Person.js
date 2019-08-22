import React from 'react';
import  './Person.css';
const person = (props) => {
    return (
        <li className="Person">
            <p>I'm {props.name} and I am {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changeName} value={props.name}/>
            <button onClick={props.click}>Delete Me</button>
        </li>
    )
}

export default person;