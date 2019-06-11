import React, { Component } from 'react';
import './Card.css';
class Card extends Component {

    constructor(){
        super();
        this.handleRemoveTask = this.handleRemoveTask.bind(this);
    }
    handleRemoveTask(){
        this.props.onRemoveTask(this.props.index);
    }
    
    render() {
        return (
            <div className="col-md-4">
                <div className="card mt-4">
                    <div className="card-header">
                        <div className="title-container">
                            <h2>{this.props.item.title}</h2>
                            <button type="button" className="close" aria-label="Close" onClick={this.handleRemoveTask}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <span className="badge badge-pill badge-danger ml-2"> {this.props.item.priority}</span>
                    </div>
                    <div className="card-body">
                        <p><mark>Description:</mark> {this.props.item.description}</p>
                        <p><mark>Responsable:</mark> {this.props.item.responsable}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;