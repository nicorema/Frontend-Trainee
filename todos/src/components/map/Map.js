import React from 'react'
import GoogleMapReact from 'google-map-react'
import { BOGOTA_CENTER } from '../../Constants'
import { StyledMapContainer } from './Map.styles'
import CustomMarker from './CustomMarker'

const KLUSTER_INCREMENT = 0.001
const API_KEY = process.env.GATSBY_GOOGLE_API_KEY

const Map = ({ markers }) => {
  const getMarkers = () => {
    const markersLocations = []
    return markers.map(
      ({ location: { latitude, longitude }, description, id }) => {
        //Faking marker cluster when multiple markers are in the same spot.
        const clusterLength = markersLocations.filter(
          markerLocation =>
            markerLocation.lat === latitude && markerLocation.lng === longitude
        ).length
        let markerLocation = {}
        if (!!clusterLength) {
          markerLocation = {
            lat: latitude + KLUSTER_INCREMENT * clusterLength,
            lng: longitude + KLUSTER_INCREMENT * clusterLength,
          }
        } else {
          markerLocation = { lat: latitude, lng: longitude }
        }
        markersLocations.push({ lat: latitude, lng: longitude })
        return (
          <CustomMarker key={id} {...markerLocation} tooltip={description} />
        )
      }
    )
  }

  return (
    <StyledMapContainer>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: API_KEY,
        }}
        defaultCenter={BOGOTA_CENTER}
        defaultZoom={10}
      >
        {getMarkers()}
      </GoogleMapReact>
    </StyledMapContainer>
  )
}

export default Map
