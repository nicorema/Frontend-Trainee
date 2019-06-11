import React from 'react';

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(){
        this.props.handleChange(this.props.todo.id);
    }
    
    render() {
        const todoItem = this.props.todo;
        return (
            <div className="todo-item">
                <input onChange={this.handleChange} checked={todoItem.completed} type="checkbox" /><span>{todoItem.text ? todoItem.text : "The Task"}</span>
            </div>
        )
    }
}

export default TodoItem;