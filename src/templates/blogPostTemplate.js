import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"

const PostHeader = styled.div`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
`

const PostTitle = styled.h1`
  margin-bottom: 0.25rem;
`

const PostTags = styled.div`
  display: flex;
  flex-direction: row;
`

const Tag = styled.a`
  margin: 0 0.25rem;
  color: ${props => props.theme.textWeight2};
  font-weight: 500;
  text-decoration: underline;

  :hover,
  :active,
  :focus {
    color: ${props => props.theme.textWeight1};
    outline: 0.0625rem dashed ${props => props.theme.textWeight1};
  }
`

const PostFooter = styled.div`
  border-top: 0.125rem dashed ${props => props.theme.underlineLightColor};
  border-bottom: 0.125rem dashed ${props => props.theme.underlineLightColor};
  padding: 1rem 0;
  margin: 2rem 0;

  div {
    margin: 0.25rem 0;
  }
`

const PostFigure = styled.figure`
  text-align: center;
  margin: 1rem 0;
`

export default ({ data }) => {
  const { frontmatter, body, slug } = data.mdx
  const shortcodes = {
    figure: PostFigure,
  }
  const allTags = []

  for (const [index, tag] of frontmatter.tags.entries()) {
    allTags.push(<Tag href={"tags/" + tag}>{tag}</Tag>)
    if (index !== frontmatter.tags.length - 1) {
      allTags.push("/")
    }
  }

  return (
    <Layout>
      <article>
        <PostHeader>
          <PostTitle>{frontmatter.title}</PostTitle>
          <time>{frontmatter.date}</time>
          <PostTags>Tags: {allTags}</PostTags>
        </PostHeader>
        <MDXProvider components={shortcodes}>
          <MDXRenderer>{body}</MDXRenderer>
        </MDXProvider>
        <PostFooter>
          <div>
            Found something wrong or missing?{" "}
            <a
              href={
                "https://github.com/nishalkulkarni/nishalkulkarni.com/blob/master/posts/" +
                slug +
                "index.mdx"
              }
              target="_blank"
              rel="noreferrer"
            >
              Edit on GitHub
            </a>
          </div>
        </PostFooter>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query PostsBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      slug
      frontmatter {
        title
        date(formatString: "Do MMMM YYYY")
        tags
      }
    }
  }
`
