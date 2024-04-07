import React from "react"
import { useSiteMetadata } from "../hooks/useSiteMetadata"

import "normalize.css"
import styled, { withTheme } from "styled-components"
import GlobalStyles from "../styles/global"

import Header from "./header"
import Footer from "./footer"

const AppContainer = styled.div`
  background: ${props => props.theme.primaryBgColor};
  border-left: 0.125rem solid ${props => props.theme.pageBorderColor};
  border-right: 0.125rem solid ${props => props.theme.pageBorderColor};
  margin: 0 auto;
  padding: 0 2rem;
  max-width: 1024px;
`

const Main = styled.main`
  padding-top: 2rem;
`

const A11ySkipLink = styled.a`
  position: absolute;
  top: -6rem;
  left: 0;
  z-index: 100;
  padding: 0.5rem;
  text-align: center;
  background: ${props => props.theme.primaryBgColor};
  color: ${props => props.theme.textWeight1};

  :focus {
    top: 0.75rem;
    left: 0.75rem;
    transition: 0.4s top;
    border: 0.125rem solid ${props => props.theme.textWeight2};
    text-decoration: underline;
    color: ${props => props.theme.textWeight1};
  }
`

const Layout = withTheme(({ children, theme }) => {
  const { title, siteSource, authorName } = useSiteMetadata()

  return (
    <>
      <GlobalStyles theme={theme} />
      <A11ySkipLink href="#maincontent">Skip to main content</A11ySkipLink>
      <AppContainer>
        <Header siteTitle={title} />
        <Main id="maincontent">{children}</Main>
        <Footer siteSource={siteSource} authorName={authorName} />
      </AppContainer>
    </>
  )
})

export default Layout