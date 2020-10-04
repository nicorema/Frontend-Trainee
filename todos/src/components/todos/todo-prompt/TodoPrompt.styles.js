import tw from 'twin.macro'
import styled from 'styled-components'
import { BREAKPOINTS } from '../../../Constants'

export const StyledOverlay = styled.div`
  ${tw`  
    bg-gray-900
    bg-opacity-75
  `}

  display: flex;
  height: 100vh;
  justify-content: center;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 100;

  @media (min-width: ${BREAKPOINTS.md}) {
    padding-top:5%;
  }
}
`

export const StyledForm = styled.form`
  ${tw`
    bg-white
    flex
    flex-col
    lg:w-6/12
    m-4
    pb-8
    pt-6
    px-8
    rounded
    shadow-md
    w-10/12
  `}
  flex-direction: column;
  height: 40%;
  position: absolute;
  top: 5%;
  z-index: 200;
  @media (min-width: ${BREAKPOINTS.md}) {
    max-height: 60%;
  }
`

export const StyledInput = tw.textarea`  
  appearance-none
  border
  focus:outline-none
  focus:shadow-outline
  leading-tight
  mb-auto
  px-3
  py-2
  rounded
  shadow
  text-gray-700
  w-full
`
export const StyledLabel = tw.label`  
  block
  font-bold
  mb-6
  text-gray-700
  text-sm
`
