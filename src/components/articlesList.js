import React from "react"
import { string, number, bool } from "prop-types"
import styled from "styled-components"
import { Link, graphql, useStaticQuery } from "gatsby"

const ListWrapper = styled.div`
  margin: 3.5rem 0 0.5rem;
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

const ArticlesList = ({ listTitle, numArticles, withDate }) => {
  const data = useStaticQuery(
    graphql`
      query SITE_INDEX_QUERY {
        allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          filter: { frontmatter: { published: { eq: true } } }
        ) {
          nodes {
            id
            frontmatter {
              title
              date(formatString: "Do MMMM YYYY")
            }
            fields {
              slug
            }
          }
        }
      }
    `
  )

  return (
    <ListWrapper>
      <h2>{listTitle}</h2>
      {data.allMdx.nodes
        .slice(0, numArticles)
        .map(({ id, frontmatter, fields }) => (
          <PostWrapper key={id}>
            <ArticleLink to={fields.slug}>
              <ArticleTitle>{frontmatter.title}</ArticleTitle>
              {withDate ? <ArticleDate>{frontmatter.date}</ArticleDate> : ""}
            </ArticleLink>
          </PostWrapper>
        ))}
    </ListWrapper>
  )
}

ArticlesList.propTypes = {
  listTitle: string.isRequired,
  numArticles: number.isRequired,
  withDate: bool.isRequired,
}

export default ArticlesList
