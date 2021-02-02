import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"

const CurrentTag = styled.span`
  text-decoration: underline;
  font-weight: 600;
  cursor: pointer;
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

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMdx

  return (
    <Layout>
      <h1>
        {totalCount + " post" + (totalCount === 1 ? "" : "s") + " tagged with "}
        <CurrentTag>{tag}</CurrentTag>
      </h1>
      <ul>
        {edges.map(({ node }) => {
          const { slug } = node.fields
          const { title, date } = node.frontmatter
          return (
            <PostWrapper key={slug}>
              <ArticleLink to={slug}>
                <ArticleTitle>{title}</ArticleTitle>
                <ArticleDate>{date}</ArticleDate>
              </ArticleLink>
            </PostWrapper>
          )
        })}
      </ul>

      <Link to="/tags">All tags</Link>
    </Layout>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const tagPageQuery = graphql`
  query($tag: String) {
    allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "Do MMMM YYYY")
          }
        }
      }
    }
  }
`
