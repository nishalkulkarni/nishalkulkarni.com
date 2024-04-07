import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"

import Toggle from "./toggle"

const Nav = styled.nav`
  display: flex; 
  padding: 2rem 0;
`

const NavBrand = styled.div`
  margin-right: 1.5rem;
`

const NavRow = styled.div`
  flex-grow: 1;
`

const NavSiteTitle = styled(Link)`
  font-weight: 400;
  color: ${props => props.theme.textWeight1};
  font-size: 32px;
  :hover,
  :active,
  :focus {
    color: ${props => props.theme.textWeight1};
    text-decoration: underline;
  }
`

const NavItems = styled.ul`
  display: flex; 
  list-style-type: none;
  overflow: hidden;
`

const NavItem = styled.li`
  margin-right: 1rem;
  font-size: 16px;
`
const NavLink = styled(Link)`
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

const NavThemeToggle = styled.div`
  display: flex;
`

const Header = ({ siteTitle }) => {
  return (
    <header>
      <Nav role="navigation">
        <NavBrand>
          <StaticImage
            src="../images/me_avatar.png"
            alt="Avatar"
            width={80}
            height={80}
          />
        </NavBrand>
        <NavRow>
          <NavSiteTitle to="/">
            <span>{siteTitle}</span>
          </NavSiteTitle>
          <NavItems>
            <NavItem>
              <NavLink to="/blog">Blog</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/contact">Contact</NavLink>
            </NavItem>
            <NavItem>
              <NavLink as="a" href="https://github.com/nishalkulkarni/">Code</NavLink>
            </NavItem>
          </NavItems>
        </NavRow>
        <NavThemeToggle>
          <Toggle />
        </NavThemeToggle>
      </Nav>
    </header>
  )
}

export default Header