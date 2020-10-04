import React from 'react'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'

import TodosManager from './todos-manager'

const mockStore = configureStore([])

describe('Todos Manager Page', () => {
  let store
  let todoManagerCmp

  beforeEach(() => {
    store = mockStore({
      app: { todos: [] },
    })
    todoManagerCmp = renderer.create(
      <Provider store={store}>
        <TodosManager />
      </Provider>
    )
  })

  it('renders <TodoList />', () => {
    const snapShot = todoManagerCmp.toJSON()
    expect(snapShot).toMatchSnapshot()
  })

  it('renders <TodoList />', () => {
    const list = todoManagerCmp.root.findByProps({ 'data-testid': 'list' })
    expect(list).toBeTruthy()
  })
})
