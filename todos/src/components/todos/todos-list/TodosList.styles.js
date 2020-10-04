import tw from 'twin.macro'
import styled from 'styled-components'

export const StyledList = styled.ul`
  ${tw`  
    lg:w-6/12
    w-10/12
  `}

  list-style-type:none;
  & > li {
    margin: 30px 0;
  }
`
