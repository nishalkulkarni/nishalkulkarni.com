import React from "react"
import { number } from "prop-types"
import styled from "styled-components"
import ProjectData from "../../content/projects.yml"

const ListWrapper = styled.div`
  margin: 2rem 0 0.5rem;
`

const ProjectWrapper = styled.div`
  margin-bottom: 0.5rem;
`

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
`

const ProjectIcon = styled.div`
  font-size: 1.75rem;
  margin-right: 0.5rem;
`

const ProjectTitle = styled.h3`
  font-weight: 400;
`
const ProjectDescription = styled.p`
  color: ${props => props.theme.textWeight3};
  margin: 0 0 0rem;
`
const ProjectLinks = styled.div`
  display: flex;
  align-items: center;
  a + a {
    margin-left: 0.5rem;
  }
  a {
    text-decoration: underline;
    :focus,
    :hover {
      outline: 0.0625rem dashed ${props => props.theme.altBlueColor};
    }
  }
`

const ProjectsList = ({ numProjects }) => {
  return (
    <ListWrapper>
      <h2>Projects</h2>

      {ProjectData.slice(0, numProjects).map(
        ({ name, description, icon, sourceLink, demoLink }) => (
          <ProjectWrapper key={name}>
            <TitleWrapper>
              {icon ? <ProjectIcon>{icon}</ProjectIcon> : ""}
              <ProjectTitle>{name}</ProjectTitle>
            </TitleWrapper>
            <ProjectDescription>{description}</ProjectDescription>
            <ProjectLinks>
              {demoLink ? <a href={demoLink}>Demo</a> : ""}
              {sourceLink ? <a href={sourceLink}>Source</a> : ""}
            </ProjectLinks>
          </ProjectWrapper>
        )
      )}
    </ListWrapper>
  )
}

ProjectsList.propTypes = {
  numProjects: number.isRequired,
}

export default ProjectsList