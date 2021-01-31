import React from "react"
import { func, string } from "prop-types"
import styled from "styled-components"


const ArticlesList = ({ count, withDate }) => {
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
