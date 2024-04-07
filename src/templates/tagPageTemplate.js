import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import Seo from "../components/seo"

const CurrentTag = styled.span`
  text-decoration: underline;
  font-weight: 600;
  cursor: pointer;
`
const PostWrapper = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
`

const ArticleLink = styled(Link)`
  color: ${props => props.theme.textWeight2};
  text-decoration: underline;
  :hover,
  :active,
  :focus {
    outline: 0.0625rem dashed ${props => props.theme.altBlueColor};
  }
`
const ArticleTitle = styled.h3`
  font-size: 1.0625rem;
  font-weight: 400;
`
const ArticleDate = styled.small`
  flex: 0 0 7rem;
  font-weight: 400;
  font-size: 1.0625rem;
  color: ${props => props.theme.textWeight3};
`

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMdx

  return (
    <Layout>
      <Seo title={"Tag - " + tag}/>
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
              <ArticleDate>{date}</ArticleDate>
              <ArticleLink to={slug}>
                <ArticleTitle>{title}</ArticleTitle>
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
      sort: {frontmatter: { date: DESC }}
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
            date(formatString: "DD-MM-YYYY")
          }
        }
      }
    }
  }
`
