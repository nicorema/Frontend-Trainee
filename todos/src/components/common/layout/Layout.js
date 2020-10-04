import React from 'react'
import Navigation from '../../navigation/Navigation'
import Button from '../button/Button'
import { StyledLayout, StyledHeader, StyledFooter } from './Layout.styles'

const Layout = ({ children, stickyAction, title }) => (
  <StyledLayout>
    <StyledHeader>
      <h1>{title}</h1>
      {stickyAction && <Button {...stickyAction} />}
    </StyledHeader>
    {children}
    <StyledFooter>
      <Navigation />
    </StyledFooter>
  </StyledLayout>
)

export default Layout
