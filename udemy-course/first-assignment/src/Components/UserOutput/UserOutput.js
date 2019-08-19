import React from "react";
import "./UserOutput.css";

const UserOutput= (props) => {
    const style = {
        boxShadow:"0px 5px 13px rgba(13,15,16,0.1)",
    }
    return (
        <div style={style} className="UserOutput">
            <p>Paragraph 1</p>
            <p>{props.userName}</p>
        </div>
    )
}

export default UserOutput;