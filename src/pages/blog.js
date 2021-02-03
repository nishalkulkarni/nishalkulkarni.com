import React, { useState } from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import { GrayButton } from "../components/buttons"
import SEO from "../components/seo"

const TagsBox = styled.p``

const TagLink = styled(Link)`
  font-weight: 400;

  :focus,
  :hover {
    outline: 0.0625rem dashed ${props => props.theme.altBlueColor};
  }
`

const SearchBox = styled.div`
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
const PostWrapper = styled.div`
  margin-bottom: 0.25rem;
`

const ArticleLink = styled(Link)`
  padding: 0.375rem 1.25rem;
  margin: 0 -1.25rem;
  display: block;
  color: ${props => props.theme.textWeight2};

  border: 0.125rem solid ${props => props.theme.primaryBgColor};

  :hover,
  :active,
  :focus {
    border-radius: 0.25rem;
    border: 0.125rem solid ${props => props.theme.blueColor};
    text-decoration: underline;
    background: rgba(81, 124, 252, 0.08);
    color: ${props => props.theme.textWeight1};
  }
`
const ArticleTitle = styled.h3`
  font-size: 1.0625rem;
  font-weight: 400;
`
const ArticleDate = styled.small`
  font-weight: 500;
  color: ${props => props.theme.textWeight3};
`

const BlogPage = ({ data }) => {
  const allPosts = data.postsMdx.nodes

  const emptyQuery = ""
  const [state, setState] = useState({
    filteredData: [],
    query: emptyQuery,
  })

  const handleInputChange = event => {
    const query = event.target.value
    const posts = data.postsMdx.nodes || []

    const filteredData = posts.filter(post => {
      const { title, tags } = post.frontmatter

      return (
        title.toLowerCase().includes(query.toLowerCase()) ||
        (tags && tags.join("").toLowerCase().includes(query.toLowerCase()))
      )
    })

    setState({
      query,
      filteredData,
    })
  }

  const handleReset = () => {
    setState({
      filteredData: [],
      query: emptyQuery,
    })
  }

  const { filteredData, query } = state
  const hasSearchResults = filteredData && query !== emptyQuery
  const posts = hasSearchResults ? filteredData : allPosts

  const allTags = data.tagsMdx.group.sort((a, b) =>
    a.totalCount < b.totalCount ? 1 : -1
  )
  const displayTags = []
  const numTags = 2
  allTags.slice(0, numTags).forEach(({ tag }) => {
    displayTags.push(<TagLink to={"/tags/" + tag}>{tag}</TagLink>)
    displayTags.push(" , ")
    return tag
  })

  return (
    <Layout>
      <SEO title="Blog" />
      <h1>Blog</h1>
      <TagsBox>
        <strong>Tags: </strong>
        {displayTags}
        <TagLink to="/tags">view all tags</TagLink>.
      </TagsBox>
      <SearchBox>
        <SearchInput
          id="search-input"
          type="text"
          name="searchTerm"
          placeholder="Type here to filter posts..."
          value={state.query}
          onChange={handleInputChange}
        />
        <ResetButton type="reset" onClick={handleReset}>
          Reset
        </ResetButton>
      </SearchBox>

      {posts.map(({ id, frontmatter, fields }) => (
        <PostWrapper key={id}>
          <ArticleLink to={fields.slug}>
            <ArticleTitle>{frontmatter.title}</ArticleTitle>
            <ArticleDate>{frontmatter.date}</ArticleDate>
          </ArticleLink>
        </PostWrapper>
      ))}
    </Layout>
  )
}

export default BlogPage

export const blogPageQuery = graphql`
  query {
    postsMdx: allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        id
        frontmatter {
          title
          date(formatString: "Do MMMM YYYY")
          tags
        }
        fields {
          slug
        }
      }
    }
    tagsMdx: allMdx {
      group(field: frontmatter___tags) {
        tag: fieldValue
        totalCount
      }
    }
  }
`
