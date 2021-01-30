import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const Nav = styled.nav`
  display: flex;
  /* position: static; */
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
`
const NavBrand = styled.div``
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
`
const NavLink = styled(Link)`
  display: block;
  text-align: center;
  text-decoration: none;
  margin: 0 0.5rem;
  color: ${props => props.theme.textWeight3};
  font-weight: 400;

  :hover,
  :active,
  :focus {
    color: ${props => props.theme.textWeight1};
    text-decoration: underline;
  }
`

const Header = ({ siteTitle, siteAuthorGithub }) => (
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
    </Nav>
  </header>
)
export default Header
