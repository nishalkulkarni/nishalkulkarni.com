import React from "react"
import { useSiteMetadata } from "../hooks/useSiteMetadata"
import Header from "./header"
import Footer from "./footer"
import styled from "styled-components"

const AppStyles = styled.main`
  max-width: 800px;
  margin: 0 auto;
`

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <AppStyles>
      <Header siteTitle={title} siteDescription={description} />
      {children}
      <Footer siteTitle={title} />
    </AppStyles>
  )
}

export default Layout
