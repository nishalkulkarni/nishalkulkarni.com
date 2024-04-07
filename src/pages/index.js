import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import About from "../components/about"
import ArticlesList from "../components/articlesList"
import ProjectsList from "../components/projects"


const IndexPage = () => {
  return (
    <Layout>
      <Seo />
      <About />
      <ArticlesList numArticles={10} withDate={true} listTitle="Recent Posts"/>
      <ProjectsList numProjects={10} />
    </Layout>
  )
}

export default IndexPage
