import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import sanityClient from '../client.js'

import Header from 'components/general/Header'

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 70px
`

const VerticalLine = styled.div`
  border-left: 1px solid black;
  heigth: 100%
`

const ProjectsTimelineContainer = styled.div`
  width: 45%;
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

const Project = () => {
  const [projectData, setProject] = useState(null)

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == 'project'] {
        title,
        slug,
        mainImage{
          asset->{
            _id,
            url
          },
          alt
        }
      }`)
      .then((data) => setProject(data))
      .catch(console.error)
  }, [])

  return (
    <>
      <Header />
      <MainContainer>
        <VerticalLine></VerticalLine>
        <ProjectsTimelineContainer>
          <ProjectContainer>
            {/* <Proje'ctLine></ProjectLine> */}
            {/* <Link to={'/project/' + project.slug.current} key={project.slug.current}>
              <ProjectTitle>Lorem ipsum</ProjectTitle>
            </Link> */}
          </ProjectContainer>  
        </ProjectsTimelineContainer>
        <ProjectImagesContainer>
          
        </ProjectImagesContainer>
      </MainContainer>
    </>
  )
}

export default Project