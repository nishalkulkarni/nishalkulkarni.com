import React from "react"
import styled from "styled-components"

const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 2.5rem 0;
`

const Footer = ({ siteTitle }) => (
  <FooterContainer>
    <small>
      Made by <strong>Nishal Kulkarni</strong> /{" "}
      <a
        href="https://github.com/nishalkulkarni/nishalkulkarni.com"
        target="_blank"
        rel="noreferrer"
      >
        View source
      </a>
    </small>
  </FooterContainer>
)

export default Footer
