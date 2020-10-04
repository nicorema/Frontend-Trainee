import tw from 'twin.macro'
import styled from 'styled-components'

export const StyledButton = styled.div`
  ${tw`
    bg-teal-600
    font-bold
    hover:bg-opacity-25
    inline
    py-2
    rounded
    text-center
    text-white
`}
  & button {
    outline: none;
    width: 100%;
  }
`
