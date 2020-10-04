import React from 'react'
import renderer from 'react-test-renderer'
import { MAX_TOOLTIP_CHARACTERS } from './Constants'

import CustomMarker from './CustomMarker'

describe('CustomMarker', () => {
  const testingTooltipText = 'Testing Tooltip'
  const customMarkerCmp = renderer.create(
    <CustomMarker tooltip={testingTooltipText} />
  )

  it('renders correctly', () => {
    const snapShot = customMarkerCmp.toJSON()
    expect(snapShot).toMatchSnapshot()
  })

  it('renders tooltip name when tooltip length less than maximum', () => {
    const tooltip = customMarkerCmp.root.findByType('p')
    expect(tooltip.props.children.length).toEqual(testingTooltipText.length)
  })

  it('renders tooltip trimmed name when tooltip length great than maximum', () => {
    const longTestingtooltip =
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean m'
    customMarkerCmp.update(<CustomMarker tooltip={longTestingtooltip} />)
    const tooltip = customMarkerCmp.root.findByType('p')
    expect(tooltip.props.children.length).toBe(MAX_TOOLTIP_CHARACTERS + 3)
  })
})
