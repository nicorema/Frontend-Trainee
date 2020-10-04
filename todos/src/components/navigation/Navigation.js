import React from 'react'
import { Link } from 'gatsby-plugin-intl'
import { StyledLink, StyledNav } from './Navigation.styles'
import { NAVIGATION_LINKS } from '../../Constants'

const Navigation = () => {
  return (
    <StyledNav>
      <ul>
        {NAVIGATION_LINKS.map(({ link, title }) => (
          <li key={`${link}-${title}`}>
            <StyledLink>
              <Link to={link}>{title}</Link>
            </StyledLink>
          </li>
        ))}
      </ul>
    </StyledNav>
  )
}

export default Navigation
