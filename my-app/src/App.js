import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Navigation from './components/Navigation';
import Card from './components/Card';
import TodoForm from './components/TodoForm'

import { todos } from './todos.json';
class App extends Component {
  constructor() {
    super();
    this.state = {
      todos
    }

    this.handleAddTask = this.handleAddTask.bind(this);
    this.handleRemoveTask = this.handleRemoveTask.bind(this);
    
  }

  handleAddTask(todo){
    this.setState({
      todos:[...this.state.todos,todo]
    })
  }

  handleRemoveTask(todoIndex){
    this.setState({
      todos:this.state.todos.filter((todo,index) => {
        return index != todoIndex;
      })
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navigation clasSize={this.state.todos.length}/>
        </header>
        <div className="row">
        <TodoForm onAddTask={this.handleAddTask}/>
          {this.state.todos.map((todo,index) => <Card index ={index} key={index} item={todo} onRemoveTask={this.handleRemoveTask} />)
          }
        </div>
      </div>
    );
  }
}

export default App;
