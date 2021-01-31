import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const ErrorH1 = styled.h1`
	margin: 2rem 0;
	font-size: 4em;
	line-height: 1;
	letter-spacing: -1px;
`

const ErrorImage = styled(Img)`
  width: 100%;

  @media screen and (max-width: 576px) {
    display: none;
    width: 0%;
  }
`

const NotFoundPage = () => {
  const data = useStaticQuery(graphql`
    query ErrorImage {
      image: file(relativePath: { eq: "404.png" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  
  console.log(data)

  return (
    <Layout>
      <ErrorContainer>
        <div>
          <ErrorH1>404</ErrorH1>
          <p>
            <strong>Page not found :(</strong>
          </p>
          <p>
            The requested page could not be found. Click on any of the links at
            the top of the page to resume browsing.
          </p>
        </div>
        <ErrorImage
          fluid={data.image.childImageSharp.fluid}
          alt="Random Watercolor Painting"
        />
      </ErrorContainer>
    </Layout>
  )
}

export default NotFoundPage
