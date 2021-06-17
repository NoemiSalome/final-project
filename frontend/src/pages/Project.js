import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components/macro'

import sanityClient from '../client.js'
import Header from 'components/general/Header'

const Project = () => {
  const [projectData, setProjectData] = useState(null)

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'project'] {
          title,
          slug,
      }`)
      .then((data) => setProjectData(data))
      .catch(console.error)
  }, [])

  return (
    <>
      <Header />
      <MainContainer>
        {projectData && 
          projectData.map((project) => (
            <ProjectContainer key={project.slug.current}>
              <ProjectLine></ProjectLine>
              <Link to={'/projects/' + project.slug.current} >
                <ProjectTitle>{project.title}</ProjectTitle>
              </Link>
            </ProjectContainer>
        ))}  
        <ProjectImagesContainer>
        </ProjectImagesContainer>
      </MainContainer>
    </>
  )
}

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 70px
`

const ProjectContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 30px;
`

const ProjectLine = styled.div`
  border-bottom: 1px solid black;
  width: 100%
`

const ProjectTitle = styled.h2`
  font-family: 'Cormorant', serif;
  font-size: 12px;
  text-align: start;
  width: 100%
`

const ProjectImagesContainer = styled.div`
  width: 45%;
`

export default Project