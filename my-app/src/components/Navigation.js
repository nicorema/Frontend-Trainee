import React, { Component } from 'react';
import './Navigation.css';
class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-primary">
                <p>Tasks:<span className="badge badge-pill bg-light">{this.props.clasSize}</span></p>
            </nav>
        )
    }
}

export default Navigation;