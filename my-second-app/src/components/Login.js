import React, { Component } from "react";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState((prevState)=>{
            return{
                count: prevState.count + 1
            }
        });
    }
    render() {
        return (
            <div>
                <h1> {this.state.count} </h1>
                <button onClick={this.handleClick}>¡++!</button>
            </div>
        )
    }
}



export default Login;
