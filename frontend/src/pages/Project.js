import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import imageUrlBuilder from '@sanity/image-url'

import sanityClient from '../client.js'
import Header from 'components/general/Header'

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}

const Project = () => {
  const [projectData, setProjectData] = useState(null)
  const [showImage, setShowImage] = useState(false)

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'project']| order(DateOfCompletion) {
          title,
          slug,
          DateOfCompletion,
          'images': images [] {
            alt,
            asset->{ url }
          }
      }`)
      .then((data) => setProjectData(data))
      .catch(console.error)
  }, [])

  return (
    <>
      <Header />
      <ContentContainer>
      {projectData && 
          projectData.map((project) => (
            <>
              <ProjectContainer key={project.slug}>
                <ProjectLine></ProjectLine>
                  <ProjectLink to={'/projects/' + project.slug.current} >
                    <MainTitle
                      onMouseEnter={() => setShowImage(true)}
                      onMouseLeave={() => setShowImage(false)}
                      
                    >{project.title}</MainTitle>
                  </ProjectLink>  
                  </ProjectContainer>
                    {showImage && (
                      <ImageContainer>
                      {project.images && project.images.map((image) => (
                          <img 
                            src={urlFor(image).url()}
                            alt={image.alt}
                            height='150px'
                            width='auto'
                            key={image.url}
                          />
                      ))}
                    </ImageContainer>   
                    )}
            </>
          ))}
      </ContentContainer>

    </>
  )
}

const ProjectContainer = styled.section`
  display: flex;
  align-items: center;
  margin-bottom: 70px;
  @media(min-width: 1024px){
    margin: 100px 0;
  }
`

const ContentContainer = styled.div`
  margin-left: 30px;
  border-left: 1px solid black;
  padding: 50px 0;
    @media(min-width: 768px){
      margin: 100px;
      border-left: 2px solid black;
    }
    @media(min-width: 1024px){
      margin: 100px 100px;
      border-left: 2px solid black;
    }
`

const ImageContainer = styled.div`
display: none;
border: 1px solid green;
  @media (min-width: 1024px) {
    display: flex;
    justify-content: center;
    width: 50vw;
  } 
`

const ProjectLine = styled.div`
  border-bottom: 1px solid black;
  width: 30%;
    @media(min-width: 1024px){
      width: 15%;
    }
    @media(min-width: 1024px){
      border-bottom: 2px solid black;
    }
`

const MainTitle = styled.h1`
  font-family: 'Cormorant', serif;
  font-size: 15px;
  height: 100%;
  margin-left: 4px;
    @media(min-width: 768px){
      font-size: 18px;
    }
    @media(min-width: 1024px){
      font-size: 22px;
      font-weight: bold;
    }
`

const ProjectLink = styled(Link)`
  color: black;
  text-decoration: none;
`

export default Project