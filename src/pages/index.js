import React from "react"
import Layout from "../components/layout"
import About from "../components/about"
import ArticlesList from "../components/articlesList"
import ProjectsList from "../components/projects"

const IndexPage = () => {
  return (
    <Layout>
      <About />
      <ArticlesList numArticles={5} withDate={true} listTitle="Recent Articles"/>
      <ProjectsList numProjects={10} />
    </Layout>
  )
}

export default IndexPage

