import React from "react"
import { useSiteMetadata } from "../hooks/useSiteMetadata"
import Layout from "../components/layout"
import styled from "styled-components"

const StyledH1 = styled.h1`
  color: rebeccapurple;
`

const IndexPage = () => {
  const { title, description } = useSiteMetadata()
  return (
    <Layout>
      <StyledH1>Hi {title}</StyledH1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <p>{description}</p>
    </Layout>
  )
}

export default IndexPage
