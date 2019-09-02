import React, { useEffect }from 'react';
import './CockPit.css';

const CockPit = (props) => {

    useEffect( () => {
        console.log('[Cockpit.js] useffect')
        setTimeout(()=>{
            alert("Saved data to cloud")
        },1000);
    } , []);
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

export default React.memo(CockPit);