import React from 'react'
import renderer from 'react-test-renderer'

import Map from './Map'

describe('CustomMarker', () => {
  const markers = [
    {
      id: 0,
      description: 'test todo 0',
      location: { latitude: 4.718592, longitude: -74.039296 },
    },
    {
      id: 1,
      description: 'test todo 1',
      location: { latitude: 4.718592, longitude: -74.039296 },
    },
    {
      id: 2,
      description: 'test todo 2',
      location: { latitude: 19.075984, longitude: 72.877656 },
    },
  ]

  const mapCmp = renderer.create(<Map markers={markers} />)

  it('renders correctly', () => {
    const snapShot = mapCmp.toJSON()
    expect(snapShot).toMatchSnapshot()
  })

  it('renders all markers', () => {
    const renderedMarkers = mapCmp.root.findAll(
      item =>
        item.props['data-testid'] === 'customMarker' && item.type === 'div'
    )
    expect(renderedMarkers.length).toBe(markers.length)
  })

  it('clusters same location markers', () => {
    const renderedLocations = mapCmp.root
      .findAll(item => item.props['data-testlocation'] && item.type === 'div')
      .map(item => item.props['data-testlocation'])

    const uniqueMarkers = new Set(
      renderedLocations.map(location => `${location.lat}-${location.lng}`)
    )
    expect(uniqueMarkers.size).toBe(markers.length)
  })
})
