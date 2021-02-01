import React from "react"
import Layout from "../components/layout"
import About from "../components/about"
import ArticlesList from "../components/articlesList"

const IndexPage = () => {
  return (
    <Layout>
      <About />
      <ArticlesList numArticles={5} withDate={true} listTitle="Recent Articles"/>
    </Layout>
  )
}

export default IndexPage

