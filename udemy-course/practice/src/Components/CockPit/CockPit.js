import React ,{useEffect, useRef} from 'react';
import './CockPit.css';

const CockPit = (props) => {

    const componentRef = useRef(null);

    useEffect( ()=> {
        componentRef.current.click();
       
    },[]);

    let classes =[];
    if(props.toggledBtn){
        classes.push('red');
    }
    return(
        <section className="CockPit">
            <h1>{props.title}</h1>
            <p>This is really working!</p>
            <button 
                ref = {componentRef}
                className = {classes.join(' ')}
                onClick={props.clickBtn}>
                Toggle Persons
            </button>
        </section>
    );
}

export default React.memo(CockPit);