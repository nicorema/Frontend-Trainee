import React from 'react'
import renderer from 'react-test-renderer'
import { NAVIGATION_LINKS } from '../../Constants'

import Navigation from './Navigation'

describe('Navigation', () => {
  const navigationCmp = renderer.create(<Navigation />)

  it('renders correctly', () => {
    const snapShot = navigationCmp.toJSON()
    expect(snapShot).toMatchSnapshot()
  })

  it('renders correct ammount of links', () => {
    const listItems = navigationCmp.root.findAllByType('li')
    expect(listItems.length === NAVIGATION_LINKS.length)
  })
})
