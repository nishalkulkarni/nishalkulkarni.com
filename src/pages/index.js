import React from "react"
import Layout from "../components/layout"
import About from "../components/about"
import ArticlesList from "../components/articlesList"
import ProjectsList from "../components/projects"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO />
      <About />
      <ArticlesList numArticles={10} withDate={true} listTitle="Recent Articles"/>
      <ProjectsList numProjects={10} />
    </Layout>
  )
}

export default IndexPage

