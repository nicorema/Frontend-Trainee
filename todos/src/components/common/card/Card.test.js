import React from 'react'
import renderer from 'react-test-renderer'

import Card from './Card'

describe('Card', () => {
  const CardCmp = renderer.create(
    <Card>
      <p>Testing child</p>
    </Card>
  )

  it('renders correctly', () => {
    const snapShot = CardCmp.toJSON()
    expect(snapShot).toMatchSnapshot()
  })
})
