import React from "react"
import { string, number, bool } from "prop-types"
import styled from "styled-components"
import { Link, graphql, useStaticQuery } from "gatsby"

const ListWrapper = styled.div`
  margin: 2rem 0 0.5rem;
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

const ArticleDate = styled.h3`
  flex: 0 0 7rem;
  font-weight: 400;
  font-size: 1.0625rem;
  color: ${props => props.theme.textWeight3};
`

const ArticleTitle = styled.h3`
  font-size: 1.0625rem;
  font-weight: 400;
`

const ArticlesList = ({ listTitle, numArticles, withDate }) => {
    const data = useStaticQuery(
        graphql`
            query SITE_INDEX_QUERY {
                allMdx(
                sort: {frontmatter: { date: DESC }}
                filter: {frontmatter: {published: {eq: true}}}
                ) {
                    nodes {
                        id
                        frontmatter {
                            title
                            date(formatString: "DD-MM-YYYY")
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
                        {withDate ? <ArticleDate>{frontmatter.date}</ArticleDate> : ""}
                        <ArticleLink to={fields.slug}>
                            <ArticleTitle>{frontmatter.title}</ArticleTitle>
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