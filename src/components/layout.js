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
  max-width: 800px;
  margin: 0 auto;
`

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <AppContainer>
        <Header siteTitle={title} siteDescription={description} />
        {children}
        <Footer siteTitle={title} />
      </AppContainer>
    </ThemeProvider>
  )
}

export default Layout
