import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

const IntroSection = styled.section`
  display: flex;
  align-items: center;
`

const MyInfo = styled.div`
  width: 70%;
  order: 1;

  @media screen and (max-width: 576px) {
    width: 100%;
  }
`

const MyImageContainer = styled.div`
  width: 30%;
  order: 2;

  @media screen and (max-width: 576px) {
    display: none;
    width: 0%;
  }
`
const MyImage = styled(Img)`
  border-radius: 50%;
  margin: 0 5%;
`

const InTextLink = styled(Link)`
  text-decoration: underline;
  font-weight: 400;

  :focus,
  :hover {
    outline: 0.0625rem dashed ${props => props.theme.altBlueColor};
  }
`

const About = () => {
  const data = useStaticQuery(graphql`
    query ImgQuery {
      myimg: file(relativePath: { eq: "me.jpeg" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <IntroSection>
      <MyImageContainer>
        <MyImage
          fluid={data.myimg.childImageSharp.fluid}
          alt="Photo of Nishal Kulkarni"
        />
      </MyImageContainer>
      <MyInfo>
        <h1>Hi, I'm Nishal.</h1>
        <p>
          I'm a Computer Science student at the{" "}
          <InTextLink
            as="a"
            href="http://www.vit.ac.in/"
            target="_blank"
            rel="noreferrer"
          >
            Vellore Institute of Technology
          </InTextLink>
          , interested in Quantum Computing and an enthusiast about all things Linux.
          Some of my hobbies are speedcubing, video gaming and playing table tennis.
        </p>
        <p>
          This website is a place where I document my ideas, opinions,
          achievements and valuable lessons I have learned. You can find all the
          articles I have written on the <InTextLink to="/blog">blog</InTextLink> page.
        </p>
      </MyInfo>
    </IntroSection>
  )
}
export default About
