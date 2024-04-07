import React from "react"
import styled from "styled-components"

const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 2.5rem 0;
`

const Footer = ({ siteSource, authorName }) => (
    <FooterContainer>
        <small>
            Made by <strong>{authorName}</strong> /{" "}
            <a
                href={siteSource}
                target="_blank"
                rel="noreferrer"
            >
                View source
            </a>
        </small>
    </FooterContainer>
)

export default Footer