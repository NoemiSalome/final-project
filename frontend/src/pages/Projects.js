import React from 'react'
import styled from 'styled-components/macro'

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

const Project = styled.div`
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

const Projects = () => {

  return (
    <>
      <Header />
      <MainContainer>
        <VerticalLine></VerticalLine>
        <ProjectsTimelineContainer>
          <Project>
            <ProjectLine></ProjectLine>
            <ProjectTitle>Lorem ipsum</ProjectTitle>
          </Project>  
          <Project>
            <ProjectLine></ProjectLine>
            <ProjectTitle>Lorem</ProjectTitle>
          </Project>    
          <Project>
            <ProjectLine></ProjectLine>
            <ProjectTitle>ipsum</ProjectTitle>
          </Project>    
        </ProjectsTimelineContainer>
        <ProjectImagesContainer>
          
        </ProjectImagesContainer>
      </MainContainer>
    </>
  )
}

export default Projects