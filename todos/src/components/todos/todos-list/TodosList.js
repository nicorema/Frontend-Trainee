import React from 'react'
import TodoItem from '../todo-item/TodoItem'
import { StyledList } from './TodosList.styles'

const TodosList = ({ deleteTodo, editTodo, todos }) => {
  return (
    <StyledList>
      {todos.map(todo => (
        <li key={todo.id}>
          <TodoItem
            data-testid="todoItem"
            todo={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        </li>
      ))}
    </StyledList>
  )
}
export default TodosList
