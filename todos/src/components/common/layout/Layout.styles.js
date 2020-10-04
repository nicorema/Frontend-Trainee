import tw from 'twin.macro'
import styled from 'styled-components'

export const StyledLayout = tw.div` 
  flex
  flex-col
  h-full
  items-center
`

export const StyledHeader = styled.header`
  ${tw`
    bg-teal-500
    fixed
    font-bold
    px-16
    py-6
    text-2xl
    text-center
    text-white
    w-full
    z-50
  `}
  & button {
    margin-top: 25px;
  }
  & + * {
    padding: 150px 0;
  }
`

export const StyledFooter = tw.footer` 
  bg-teal-900
  bottom-0
  fixed
  font-bold
  p-4
  text-2xl
  text-center
  text-white
  w-full
  z-50
`
