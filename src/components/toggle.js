import React from "react"
import { func, string } from "prop-types"
import styled from "styled-components"

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
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-brightness-high-fill"
      viewBox="0 0 16 16"
    >
      <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
    </svg>
  )
}

const MoonIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-moon"
      viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        d="M14.53 10.53a7 7 0 0 1-9.058-9.058A7.003 7.003 0 0 0 8 15a7.002 7.002 0 0 0 6.53-4.47z"
      />
    </svg>
  )
}

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === "light"
  return (
    <ToggleContainer onClick={toggleTheme} lightTheme={isLight}>
      <SunIcon />
      <MoonIcon />
    </ToggleContainer>
  )
}

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}

export default Toggle
