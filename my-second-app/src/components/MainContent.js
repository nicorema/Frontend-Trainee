import React from "react";
import TodoItem from "./TodoItem";
import TodoData from "../testData";
import Login from "./Login";

class MainContent extends React.Component {
    constructor() {
        super();
        this.state = {
            data: TodoData
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(id) {
        this.setState(prevState => {
            const newState = prevState.data.map(todo => {
                if(todo.id == id){
                    todo.completed = !todo.completed;
                }
                return todo;
            });
            return {
                newState
            }
        });
    }
    render() {
        const todos = this.state.data.map(todo => <TodoItem todo={todo} key={todo.id} handleChange={this.handleChange} />);
        return (
            <main>
                {todos}
            </main>
        )
    }
}

export default MainContent; 