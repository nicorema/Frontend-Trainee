import * as actionTypes from '../actions/actionTypes'

const initialState = {
  todos: [],
}

const reducer = (state = initialState, action) => {
  const updateState = newData => {
    return {
      ...state,
      ...newData,
    }
  }

  const { todos } = state
  const { type, todoDescription, todoId, location } = action

  switch (type) {
    case actionTypes.ADD_TODO: {
      const newTodo = {
        id: new Date() + location?.latitude + location?.longitude,
        description: todoDescription,
        location,
      }
      return updateState({ todos: [newTodo, ...todos] })
    }

    case actionTypes.DELETE_TODO: {
      return updateState({
        todos: todos.filter(todo => todo.id !== todoId),
      })
    }

    case actionTypes.EDIT_TODO: {
      const todoIndex = todos.findIndex(todo => todo.id === todoId)
      const newTodos = [...todos]
      const editedTodo = { ...newTodos[todoIndex] }
      editedTodo.description = todoDescription
      editedTodo.location = location
      newTodos[todoIndex] = editedTodo
      return updateState({ todos: newTodos })
    }

    default:
      return state
  }
}

export default reducer
