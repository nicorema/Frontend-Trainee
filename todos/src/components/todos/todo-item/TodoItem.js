import React from 'react'
import DeleteIcon from '../../../images/icons/DeleteIcon'
import EditIcon from '../../../images/icons/EditIcon'
import Card from '../../common/card/Card'
import { StyledItemContainer } from './TodoItem.styles'

const TodoItem = ({ deleteTodo, editTodo, todo }) => {
  return (
    <Card>
      <StyledItemContainer>
        <p>{todo?.description}</p>
        <div>
          <span
            role="button"
            onClick={() => deleteTodo(todo.id)}
            onKeyDown={() => deleteTodo(todo.id)}
            tabIndex={0}
            data-testid="delete-todo"
          >
            <DeleteIcon />
          </span>
          <span
            role="button"
            onClick={() => editTodo(todo)}
            onKeyDown={() => editTodo(todo)}
            tabIndex={0}
            data-testid="edit-todo"
          >
            <EditIcon />
          </span>
        </div>
      </StyledItemContainer>
    </Card>
  )
}

export default TodoItem
