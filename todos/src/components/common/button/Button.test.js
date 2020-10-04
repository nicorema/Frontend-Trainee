import React from 'react'
import renderer from 'react-test-renderer'

import Button from './Button'

describe('Button', () => {
  const mockClick = jest.fn()
  const buttonCmp = renderer.create(
    <Button label="testing label" onClick={mockClick} />
  )

  it('renders correctly', () => {
    const snapShot = buttonCmp.toJSON()
    expect(snapShot).toMatchSnapshot()
  })

  it('execute proper function onClick', () => {
    buttonCmp.root.findByType('button').props.onClick()
    expect(mockClick).toHaveBeenCalled()
  })
})
