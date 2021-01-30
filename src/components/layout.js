import React from "react"
import { useSiteMetadata } from "../hooks/useSiteMetadata"
import Header from "./header"
import Footer from "./footer"
import styled, { ThemeProvider } from "styled-components"
import { lightTheme, darkTheme } from "../styles/theme"
import GlobalStyles from "../styles/global"

const AppContainer = styled.main`
  background: ${props => props.theme.primaryBgColor};
  border-left: 0.125rem solid ${props => props.theme.pageBorderColor};
  border-right: 0.125rem solid ${props => props.theme.pageBorderColor};
  margin: 0 auto;
  padding: 0 2rem; // adds to width :(
  max-width: 800px;
`

const Layout = ({ children }) => {
  const { title, description, authorGithub } = useSiteMetadata()
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <AppContainer>
        <Header siteTitle={title} siteAuthorGithub={authorGithub} />
        {children}
        <Footer siteTitle={title} />
      </AppContainer>
    </ThemeProvider>
  )
}

export default Layout
