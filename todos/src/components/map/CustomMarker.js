import React from 'react'
import FlagIcon from '../../images/icons/FlagIcon'
import { MAX_TOOLTIP_CHARACTERS } from './Constants'
import { StyledMarker } from './Map.styles'

const CustomMarker = ({ tooltip, lat, lng }) => {
  const renderedToolTip =
    tooltip.length > MAX_TOOLTIP_CHARACTERS
      ? tooltip.slice(0, MAX_TOOLTIP_CHARACTERS) + '...'
      : tooltip

  return (
    <StyledMarker data-testid="customMarker" data-testlocation={{ lat, lng }}>
      <p>{renderedToolTip}</p>
      <FlagIcon />
    </StyledMarker>
  )
}

export default CustomMarker
