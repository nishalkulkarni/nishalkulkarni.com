import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import { GrayButton } from "../components/buttons"

const SearchForm = styled.form`
  margin-bottom: 1.75rem;
  display: flex;
  align-content: center;
`

const SearchInput = styled.input`
  background: rgba(128, 128, 128, 0.1);
  flex-grow: 1;

  display: block;
  border-radius: 0.25rem;
  padding: 0.5rem;
  outline: none;
  border: 0.125rem solid ${props => props.theme.grayBorderColor};
  color: ${props => props.theme.textWeight1};

  :active,
  :focus {
    background: rgba(81, 124, 252, 0.08);
    border: 0.125rem solid ${props => props.theme.blueColor};
  }
`
const ResetButton = styled(GrayButton)`
  margin-left: 0.5rem;
`

const BlogPage = ({ data }) => {
  return (
    <Layout>
      <h1>Blog</h1>

      <SearchForm id="articleSearch">
        <SearchInput
          id="search-input"
          type="text"
          name="searchTerm"
          placeholder="Type here to filter posts..."
        />
        <ResetButton type="reset">Reset</ResetButton>
      </SearchForm>

      
    </Layout>
  )
}

export default BlogPage
