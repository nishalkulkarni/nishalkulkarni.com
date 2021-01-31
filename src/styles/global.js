import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
@import url("https://fonts.googleapis.com/css?family=Ubuntu&display=swap");

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
  font-size: 16px;
  line-height: 1.6;
  font-weight: 400;
  font-family: Ubuntu, "Ubuntu", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-feature-settings: "kern", "liga", "clig", "calt";
}

h1 {
  font-weight: 500;
  color: ${props => props.theme.textWeight1};
  margin: 0 0 1.25rem;
  line-height: 1.3;
}

h2 {
  border-bottom: 2px solid ${props => props.theme.underlineLightColor};
  font-weight: 500;
  padding-bottom: 0.5rem;
  margin: 0 0 1.25rem;
  line-height: 1.3;
  color: ${props => props.theme.textWeight1};
}

p {
  font-stretch: 100%;
  margin: 0 0 1.5rem;
}

small {
  font-size: 80%;
}

a {
  color: ${props => props.theme.blueColor};
  text-decoration: none;
  outline: 0;
  font-weight: 600;
}

a:hover,
a:active,
a:focus {
  color: ${props => props.theme.altBlueColor};
  text-decoration: underline;
}

ul {
  list-style-position: inside;
}

`

export default GlobalStyles
