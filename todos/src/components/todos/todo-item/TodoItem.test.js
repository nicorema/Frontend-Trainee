import React from 'react'
import renderer from 'react-test-renderer'

import TodoItem from './TodoItem'

describe('TodoItem', () => {
  const mockDeleteTodo = jest.fn()
  const mockEditTodo = jest.fn()

  const todoItemCmp = renderer.create(
    <TodoItem
      deleteTodo={mockDeleteTodo}
      editTodo={mockEditTodo}
      todo={{ id: 0, description: 'test todo' }}
    />
  )

  it('renders correctly', () => {
    const snapShot = todoItemCmp.toJSON()
    expect(snapShot).toMatchSnapshot()
  })

  it('triggers deleteTodo', () => {
    const deleteBtn = todoItemCmp.root.findByProps({
      'data-testid': 'delete-todo',
    })
    deleteBtn.props.onClick()
    expect(mockDeleteTodo).toHaveBeenCalled()
  })

  it('triggers editTodo', () => {
    const editBtn = todoItemCmp.root.findByProps({
      'data-testid': 'edit-todo',
    })
    editBtn.props.onClick()
    expect(mockEditTodo).toHaveBeenCalled()
  })
})
