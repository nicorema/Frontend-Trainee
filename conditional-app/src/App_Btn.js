import React, { Component } from "react";

class App_Btn extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    render() {
        return (
            <button onClick={this.handleChange}> {this.props.logged ? "Log Out" : "Log In"}</button>
        )
    }

    handleChange(){
        this.props.handleChange(this.props.logged);
    }

}

export default App_Btn;
