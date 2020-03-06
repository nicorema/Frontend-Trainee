import React from "react";

const Validation = (props) => {
    let validationText;
    if( props.inputLength > 5){
        validationText = "Text long enough";
    }else{
        validationText = "Text to short"
    }
    return (
        <div>
            <h1>{validationText}</h1>
        </div>
    )
}

export default Validation;