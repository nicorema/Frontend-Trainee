import React from "react";
import "./UserInput.css";

const UserInput= (props) => {
    const style = {
        backgroundColor:"#eee",
    }
    return (
        <div className="UserInput">
            <input 
                style={style} 
                type="text" 
                name="userInput" 
                value={props.userName} 
                onChange={props.userNameHandler}>
            </input>
        </div>
    )
}

export default UserInput;