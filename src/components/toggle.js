import React from "react"
import styled from "styled-components"
import { useStyledDarkMode } from "gatsby-styled-components-dark-mode"

import { FaSun, FaMoon } from "react-icons/fa";

const ToggleContainer = styled.button.attrs({
  'aria-label': 'Toggle theme',
})`
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

const Toggle = () => {
  const { isDark, toggleDark } = useStyledDarkMode();

  return (
    <ToggleContainer
      onClick={() => toggleDark()}
      lightTheme={!isDark}
    >
      <FaSun />
      <FaMoon />
    </ToggleContainer>
  )
}

export default Toggle