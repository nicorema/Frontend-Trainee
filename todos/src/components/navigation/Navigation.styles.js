import tw from 'twin.macro'
import styled from 'styled-components'

export const StyledNav = styled.nav`
  & ul {
    display: flex;
    justify-content: center;
  }
`
export const StyledLink = tw.span`
  bg-white
  font-semibold
  inline-block
  mx-2
  px-4
  py-2
  rounded
  text-blue-700
`
