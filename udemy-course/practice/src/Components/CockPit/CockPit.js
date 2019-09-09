import React,{useEffect, useRef, useContext} from 'react';
import './CockPit.css';
import AuthContext from '../../Context/auth-context';

const CockPit = (props) => {

    const componentRef = useRef(null);
    const authContext = useContext(AuthContext);

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
            <button onClick={authContext.login}>Log In</button>
        </section>
    );
}

export default React.memo(CockPit);