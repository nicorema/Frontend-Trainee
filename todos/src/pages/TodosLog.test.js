import React from 'react'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'

import TodoLog from './todos-log'

const mockStore = configureStore([])

describe('Todos Log Page', () => {
  let store
  let todoLogCmp

  beforeEach(() => {
    store = mockStore({
      app: { todos: [] },
    })
    todoLogCmp = renderer.create(
      <Provider store={store}>
        <TodoLog />
      </Provider>
    )
  })

  it('renders correctly', () => {
    const snapShot = todoLogCmp.toJSON()
    expect(snapShot).toMatchSnapshot()
  })

  it('renders a <Map />', () => {
    const map = todoLogCmp.root.findByProps({ 'data-testid': 'map' })
    expect(map).toBeTruthy()
  })
})
