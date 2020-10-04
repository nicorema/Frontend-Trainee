import styled from 'styled-components'

export const StyledMapContainer = styled.div`
  height: 600px;
  max-width: 100vw;
  width: 600px;
`
export const StyledMarker = styled.div`
  position: relative;
  & > p {
    background: white;
    border-radius: 0.4em;
    display: none;
    font-size: 14px;
    font-weight: bold;
    left: 30px;
    padding: 7px;
    position: absolute;
    top: -25px;
  }
  &:hover,
  &:active {
    transform: scale(1.2);
    z-index: 100;
    & > p {
      display: block;
    }
  }
`
