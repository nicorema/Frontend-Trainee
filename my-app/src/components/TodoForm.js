import React, { Component } from 'react';
import './TodoForm.css';
class TodoForm extends Component {

  constructor() {
    super();
    this.state = {
      title: '',
      responsable: '',
      description: '',
      priority: 'high'
    };
   this.handleInput = this.handleInput.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(input){
    const { value , name } = input.target;
    this.setState({
      [name] : value
    });
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.onAddTask(this.state);
  }
  render() {
    return (
      <div className ="col-md-4 todo-form-container">
        <div className="card">
          <form className="card-body" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input type="text" name="title" id="todo-list" placeholder="Task Title.." onChange={this.handleInput}/>
            </div>
            <div className="form-group">
              <input type="text" id="todo-responsable" name="responsable" placeholder="Task Responsable.." onChange={this.handleInput}/>
            </div>
            <div className="form-group">
              <input type="text" id="todo-description" name="description" placeholder="Task Description.." onChange={this.handleInput}/>
            </div>
            <div className="form-group">
              <select id="todo-priority" name="priority" onChange={this.handleInput}>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>
            <input type="submit" value="Add Task" />

          </form>
        </div>
      </div>
    )
  }
}

export default TodoForm;