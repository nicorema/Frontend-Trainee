import React from 'react'
import renderer from 'react-test-renderer'

import Layout from './Layout'

describe('Layout', () => {
  const stickyAction = {
    onClick: jest.fn(),
  }
  const layoutCmp = renderer.create(
    <Layout title="test title" stickyAction={stickyAction}>
      <p>Testing child</p>
    </Layout>
  )

  it('renders correctly', () => {
    const snapShot = layoutCmp.toJSON()
    expect(snapShot).toMatchSnapshot()
  })

  it('executes stickyAction on click', () => {
    layoutCmp.root.findByType('button').props.onClick()
    expect(stickyAction.onClick).toHaveBeenCalled()
  })

  it('does not render button when there is no stickyAction', () => {
    layoutCmp.update(
      <Layout title="test title">
        <p>Testing child</p>
      </Layout>
    )
    const button = layoutCmp.root.findAllByType('button')
    expect(button).toHaveLength(0)
  })
})
