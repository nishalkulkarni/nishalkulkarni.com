import { Link } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"
import Toggle from "./toggle"

const Nav = styled.nav`
  display: flex;
  /* position: static; */
  align-items: center;
  padding: 2rem 0;
`
const NavBrand = styled.div`
  flex-grow: 1;
`
const NavBrandLink = styled(Link)`
  font-weight: 600;
  color: ${props => props.theme.textWeight2};

  :hover,
  :active,
  :focus {
    color: ${props => props.theme.textWeight1};
    text-decoration: underline;
  }
`

const NavItems = styled.ul`
  list-style-type: none;
  overflow: hidden;
`

const NavItem = styled.li`
  float: left;
  margin: 0 0.5rem;
`
const NavLink = styled(Link)`
  display: block;
  text-align: center;
  text-decoration: none;
  color: ${props => props.theme.textWeight3};
  font-weight: 400;

  :hover,
  :active,
  :focus {
    color: ${props => props.theme.textWeight1};
    text-decoration: underline;
  }
`

const Header = ({ siteTitle, siteAuthorGithub, theme, toggleTheme }) => {
  return (
    <header>
      <Nav role="navigation">
        <NavBrand>
          <NavBrandLink to="/">
            <span>{siteTitle}</span>
          </NavBrandLink>
        </NavBrand>
        <NavItems>
          <NavItem>
            <NavLink to="/blog">Blog</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/contact">Contact</NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              as="a"
              href={siteAuthorGithub}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </NavLink>
          </NavItem>
        </NavItems>
        <Toggle theme={theme} toggleTheme={toggleTheme} />
      </Nav>
    </header>
  )
}

export default Header
