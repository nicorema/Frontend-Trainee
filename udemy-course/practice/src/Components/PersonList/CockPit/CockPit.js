import React from 'react';
import './CockPit.css';

const CockPit = (props) => {
    let classes =[];
    if(props.toggledBtn){
        classes.push('red');
    }
    return(
        <section className="CockPit">
            <h1>{props.title}</h1>
            <p>This is really working!</p>
            <button 
                className = {classes.join(' ')}
                onClick={props.clickBtn}>
                Toggle Persons
            </button>
        </section>
    );
}

export default CockPit;