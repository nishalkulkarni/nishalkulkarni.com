import React from "react"
import { useSiteMetadata } from "../hooks/useSiteMetadata"

import "normalize.css"
import styled, { ThemeProvider } from "styled-components"
import { useDarkMode } from "../hooks/useDarkMode"
import { lightTheme, darkTheme } from "../styles/theme"
import GlobalStyles from "../styles/global"

import Header from "./header"
import Footer from "./footer"

const AppContainer = styled.div`
  background: ${props => props.theme.primaryBgColor};
  border-left: 0.125rem solid ${props => props.theme.pageBorderColor};
  border-right: 0.125rem solid ${props => props.theme.pageBorderColor};
  margin: 0 auto;
  padding: 0 2rem; // adds to width :(
  max-width: 800px;
`
const Main = styled.main`
  padding-top: 4rem;
`

const Layout = ({ children }) => {
  const { title, authorGithub } = useSiteMetadata()
  const [theme, toggleTheme] = useDarkMode()
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <AppContainer>
        <Header
          siteTitle={title}
          siteAuthorGithub={authorGithub}
          theme={theme}
          toggleTheme={toggleTheme}
        />
        <Main>{children}</Main>
        <Footer siteTitle={title} />
      </AppContainer>
    </ThemeProvider>
  )
}

export default Layout
