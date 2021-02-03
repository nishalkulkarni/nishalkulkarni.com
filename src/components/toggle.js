import React, { useContext } from "react"
import styled from "styled-components"
import { ThemeManagerContext } from "gatsby-styled-components-dark-mode"

import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ToggleContainer = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  border-radius: 0px;
  margin: 0 0.5rem;
  color: ${props => props.theme.textWeight3};

  :hover,
  :active,
  :focus {
    color: ${props => props.theme.textWeight1};
  }

  svg {
    transition: all 0.3s linear;
    width: 1rem;
    height: auto;

    // sun icon
    &:first-child {
      display: ${({ lightTheme }) => (lightTheme ? "block" : "none")};
    }

    // moon icon
    &:nth-child(2) {
      display: ${({ lightTheme }) => (lightTheme ? "none" : "block")};
    }
  }
`

const SunIcon = () => {
  return <FontAwesomeIcon icon={faSun} />
}

const MoonIcon = () => {
  return <FontAwesomeIcon icon={faMoon} />
}

const Toggle = () => {
  const themeContext = useContext(ThemeManagerContext)
  const isLight = !themeContext.isDark

  return (
    <ToggleContainer
      onClick={() => themeContext.toggleDark()}
      lightTheme={isLight}
    >
      <SunIcon />
      <MoonIcon />
    </ToggleContainer>
  )
}

export default Toggle
