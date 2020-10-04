import React from 'react'
import renderer from 'react-test-renderer'

import TodoPromp from './TodoPrompt'

describe('TodoPromp', () => {
  const mockClosePrompt = jest.fn()
  const mockCreateTodo = jest.fn()
  const mockSetTodoDescription = jest.fn()
  const testTodoDescription = 'Loren Ipsum'

  const todoPromptCmp = renderer.create(
    <TodoPromp
      closePrompt={mockClosePrompt}
      createTodo={mockCreateTodo}
      todoDescription={testTodoDescription}
      setTodoDescription={mockSetTodoDescription}
    />
  )

  it('renders correctly', () => {
    const snapShot = todoPromptCmp.toJSON()
    expect(snapShot).toMatchSnapshot()
  })

  it('triggers create todo', () => {
    const e = { preventDefault: jest.fn() }
    const createBtn = todoPromptCmp.root.findByProps({
      'data-testid': 'create-todo',
    })
    createBtn.props.onSubmit(e)
    expect(mockCreateTodo).toHaveBeenCalled()
  })

  it('triggers setDescription when changing input', () => {
    const e = {
      target: {
        value: 'test',
      },
    }
    const input = todoPromptCmp.root.findByProps({
      'data-testid': 'todo-description-input',
    })
    input.props.onChange(e)
    expect(mockSetTodoDescription).toHaveBeenCalled()
  })

  it('triggers closePrompt when clicking overlay', () => {
    const overlay = todoPromptCmp.root.findByProps({
      'data-testid': 'close-prompt',
    })
    overlay.props.onClick()
    expect(mockClosePrompt).toHaveBeenCalled()
  })
})
