import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const IntroSection = styled.section`
  display: flex;
  align-items: center;
`

const MyInfo = styled.div`
  width: 70%;
  order: 1;
`

const MyPhoto = styled.div`
  width: 30%;
  order: 2;
`
const InTextLink = styled(Link)`
  text-decoration: underline;
  font-weight: 400;

  :focus,
  :hover {
    outline: 1px dashed ${props => props.theme.altBlueColor};
  }
`

const About = () => (
  <IntroSection>
    <MyPhoto>
      <img src="assets/images/me.jpg" alt="Photo of Nishal Kulkarni"></img>
    </MyPhoto>
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
        , interested in Quantum Computing, competitive coding and am an avid
        Linux enthusiast. Some of my hobbies are speedcubing, video gaming and
        playing table tennis.
      </p>
      <p>
        This website is a place where I document my ideas, opinions,
        achievements and valuable lessons I have learned. You can find all the
        articles I have written{" "}
        <InTextLink to="/blog">
          here
        </InTextLink>
        .
      </p>
    </MyInfo>
  </IntroSection>
)

export default About
