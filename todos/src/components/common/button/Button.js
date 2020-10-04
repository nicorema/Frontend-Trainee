import React from 'react'
import { StyledButton } from './Button.styles'

const Button = ({ label, ...props }) => (
  <StyledButton>
    <button {...props}>{label}</button>
  </StyledButton>
)

export default Button
