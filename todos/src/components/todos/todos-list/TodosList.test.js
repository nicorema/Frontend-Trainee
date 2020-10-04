import React from 'react'
import renderer from 'react-test-renderer'

import TodosList from './TodosList'

describe('TodosList', () => {
  const todos = [
    { id: 'todo1', description: 'Loren Ipsum' },
    { id: 'todo2', description: 'Loren Ipsum' },
    { id: 'todo3', description: 'Loren Ipsum' },
  ]

  const todosListCmp = renderer.create(<TodosList todos={todos} />)

  it('renders correctly', () => {
    const snapShot = todosListCmp.toJSON()
    expect(snapShot).toMatchSnapshot()
  })

  it('renders correct numer of <TodoItem />', () => {
    const renderedItems = todosListCmp.root.findAll(
      item => item.props['data-testid'] === 'todoItem'
    )
    expect(renderedItems.length).toBe(todos.length)
  })
})
