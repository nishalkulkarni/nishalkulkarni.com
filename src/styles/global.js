import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  
::selection {
    /* WebKit/Blink Browsers */
    background: ${props => props.theme.textWeight2};
    color: ${props => props.theme.primaryBgColor};
}

::-moz-selection {
    /* Gecko Browsers */
    background: ${props => props.theme.textWeight2};
    color: ${props => props.theme.primaryBgColor};
}

* {
    margin: 0;
    padding: 0;
    box-shadow: none;
}

html {
  scroll-behavior: smooth;
}

body {
  text-rendering: optimizeLegibility;
  /* filter: invert(); */
  background: ${props => props.theme.secondaryBgColor};
  color: ${props => props.theme.textWeight2};
  padding: 0;
  margin: 0;
  min-height: 100vh;
  size: 16px;
  font-size: 16px;
  line-height: 1.6;
  font-weight: 400;
  font-family: Ubuntu, "Ubuntu", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-feature-settings: "kern", "liga", "clig", "calt";
}

`

export default GlobalStyles
