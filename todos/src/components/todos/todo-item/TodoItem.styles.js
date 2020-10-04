import tw from 'twin.macro'
import styled from 'styled-components'

export const StyledItemContainer = styled.div`
  ${tw`  
    flex
    justify-center
  `}
  & > div {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-around;
    left: 95%;
    position: absolute;
    top: 0;
    & svg {
      &:hover {
        fill: #90cdf4;
      }
    }
  }
`
