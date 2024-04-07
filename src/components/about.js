import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"


const IntroSection = styled.section`
  display: flex;
  align-items: center;
`

const MyInfo = styled.div`

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

  return (
    <IntroSection>
      <MyInfo>
        <p>
          Hi! I'm Nishal, I'm a Software developer who likes working with low-level software (Compilers, Operating Systems, Binary analysis...).
          At my day job I develop software to secure mobile applications using the LLVM compiler framework and at night <s>I'm batman</s> I try to learn German.
          Some of my recent obsessions include NixOS and setting up my own homeserver. I've also taken up reading as a hobby and I'm always in search of a good book.
        </p>
        <p>
          I created this website hoping to share ideas and opinions on stuff I find interesting. You can find all the articles I have written on the <InTextLink to="/blog">blog</InTextLink> page.
        </p>
      </MyInfo>
    </IntroSection>
  )
}

export default About