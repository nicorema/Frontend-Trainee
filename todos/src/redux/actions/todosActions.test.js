import * as actions from './todos'
import * as types from './actionTypes'

describe('actions', () => {
  const todoId = 'testId'
  const todoDescription = 'Loren Ipsum'
  const location = {
    latitude: 1,
    longitude: 2,
  }
  it('should create an action to add a todo', () => {
    const expectedAction = {
      type: types.ADD_TODO,
      todoDescription,
      location,
    }
    expect(actions.createTodo(todoDescription, location)).toEqual(
      expectedAction
    )
  })

  it('should create an action to delete a todo', () => {
    const expectedAction = {
      type: types.DELETE_TODO,
      todoId,
    }
    expect(actions.deleteTodo(todoId)).toEqual(expectedAction)
  })

  it('should create an action to edit a todo', () => {
    const expectedAction = {
      type: types.EDIT_TODO,
      todoId,
      todoDescription,
      location,
    }
    expect(actions.editTodo(todoId, todoDescription, location)).toEqual(
      expectedAction
    )
  })
})
