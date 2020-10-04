import reducer from './todos'
import * as types from '../actions/actionTypes'

describe('todos reducer', () => {
  const initialState = {
    todos: [],
  }

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it('should handle ADD_TODO', () => {
    const action = {
      type: types.ADD_TODO,
      todoDescription: 'loren',
      location: { latitute: 1, longitude: 2 },
    }
    const expectedNewTodo = {
      id: new Date() + action.location?.latitude + action.location?.longitude,
      description: action.todoDescription,
      location: action.location,
    }

    const expectedState = {
      todos: [
        {
          ...expectedNewTodo,
        },
      ],
    }

    const reducedState = reducer(initialState, action)
    expect(reducedState).toEqual(expectedState)
  })

  it('should handle DELETE_TODO', () => {
    const action = {
      type: types.DELETE_TODO,
      todoId: 1,
    }

    const prevState = {
      todos: [
        {
          id: 1,
          description: 'Loren',
          location: {},
        },
        {
          id: 2,
          description: 'Loren',
          location: {},
        },
      ],
    }

    const expectedState = {
      todos: [
        {
          id: 2,
          description: 'Loren',
          location: {},
        },
      ],
    }

    const reducedState = reducer(prevState, action)
    expect(reducedState).toEqual(expectedState)
  })

  it('should handle EDIT_TODO', () => {
    const newDesc = 'New Description'
    const newLocation = { longitude: 1, latitude: 1 }
    const action = {
      type: types.EDIT_TODO,
      todoId: 1,
      todoDescription: newDesc,
      location: newLocation,
    }

    const prevState = {
      todos: [
        {
          id: 1,
          description: 'Loren',
          location: { longitude: 0, latitude: 0 },
        },
        {
          id: 2,
          description: 'Loren',
          location: {},
        },
      ],
    }

    const expectedState = {
      todos: [
        {
          id: 1,
          description: newDesc,
          location: newLocation,
        },
        {
          id: 2,
          description: 'Loren',
          location: {},
        },
      ],
    }

    const reducedState = reducer(prevState, action)
    expect(reducedState).toEqual(expectedState)
  })
})
