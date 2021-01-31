import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import { BlueButton } from "../components/buttons"
import { useSiteMetadata } from "../hooks/useSiteMetadata"

const ContactForm = styled.form`
  margin-bottom: 1.75rem;
  width: 100%;
  display: flex;
  align-content: center;
`

const EmailInput = styled.input`
  background: rgba(128, 128, 128, 0.1);
  display: block;
  border-radius: 0.25rem;
  padding: 0.5rem;
  outline: none;
  max-width: 100%;
  border: 0.125rem solid ${props => props.theme.grayBorderColor};
  color: ${props => props.theme.textWeight1};
  width: 50%;

  :active,
  :focus {
    background: rgba(81, 124, 252, 0.08);
    border: 0.125rem solid ${props => props.theme.blueColor};
  }
`

const SubmitButton = styled(BlueButton)`
  margin: 0 0.5rem;
`

const Contact = () => {
  const { authorEmail, authorLinkedIn, authorReddit } = useSiteMetadata()
  return (
    <Layout>
      <h1>Stay in touch</h1>
      <p>
        Like the posts you see here? Sign up to get notified about new content.
      </p>

      <ContactForm method="POST" data-netlify="true" name="email">
        <EmailInput
          id="subscriberEmail"
          type="email"
          name="email"
          placeholder="Enter you email address here..."
        />
        <SubmitButton type="submit">Submit</SubmitButton>
      </ContactForm>

      <p>You can find me at these places:</p>

      <section>
        <ul>
          <li>
            <strong>Email</strong>:{" "}
            <a href={"mailto:" + authorEmail}>{authorEmail}</a>
          </li>

          <li>
            <strong>LinkedIn</strong>:{" "}
            <a href={authorLinkedIn}>nishalkulkarni</a>
          </li>
          <li>
            <strong>Reddit</strong>: <a href={authorReddit}>InfinityNishal</a>
          </li>
        </ul>
      </section>
    </Layout>
  )
}

export default Contact