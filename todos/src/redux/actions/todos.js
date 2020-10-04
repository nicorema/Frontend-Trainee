import * as actionTypes from './actionTypes'

export const createTodo = (todoDescription, location) => {
  return {
    type: actionTypes.ADD_TODO,
    todoDescription,
    location,
  }
}

export const deleteTodo = todoId => {
  return {
    type: actionTypes.DELETE_TODO,
    todoId,
  }
}

export const editTodo = (todoId, todoDescription, location) => {
  return {
    type: actionTypes.EDIT_TODO,
    todoId,
    todoDescription,
    location,
  }
}
