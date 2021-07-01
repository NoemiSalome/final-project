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
  const [activeImage, setActiveImage] = useState(-1)

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
      <MainContainer>
        <ProjectContainer>
          {projectData && 
            projectData.map((project, index) => (
              <>
                <ProjectBox key={project.slug}>
                  <ProjectLine></ProjectLine>
                    <ProjectLink to={'/projects/' + project.slug.current} >
                      <MainTitle
                        onMouseEnter={() => {setShowImage(true); setActiveImage(index)}}
                        onMouseLeave={() => {setShowImage(false); setActiveImage(-1)} } 
                      >{project.title}</MainTitle>
                    </ProjectLink>  
                </ProjectBox>
              </>
          ))}
        </ProjectContainer>

        <PictureContainer>
        {projectData && 
          projectData.map((project, index) => (
            <>
              {showImage && index === activeImage && (
                <ImageContainer>
                  {project.images && project.images.map((image) => (
                    <ProjectImage 
                      src={urlFor(image).url()}
                      alt={image.alt}
                      key={image.url}
                    />
                  ))}
                </ImageContainer>   
              )}
            </>
          ))}
        </PictureContainer>
      </MainContainer>
    </>
  )
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
`

const ProjectLine = styled.div`
  border-bottom: 1px solid black;
  width: 30%;
`

const ProjectLink = styled(Link)`
  color: black;
  text-decoration: none;
`

const ProjectContainer = styled.div`
  margin-left: 30px;
  border-left: 1px solid black;
  padding: 80px 0;
  width: 80%;
    @media(min-width: 768px){
      margin: 100px;
      width: 50%;
    }
    @media(min-width: 1024px){
      margin: 100px 0 0 100px;
    }
`

const ProjectBox = styled.section`
  display: flex;
  align-items: center;
  margin-bottom: 70px;
  @media(min-width: 1024px){
    margin: 100px 0;
  }
`

const MainTitle = styled.h1`
  font-family: 'Heebo', sans-serif;
  font-size: 12px;
  height: 100%;
  margin-left: 4px;
    @media(min-width: 768px){
      font-size: 15px;
    }
    @media(min-width: 1024px){
      font-size: 16px;
    }
`

const ImageContainer = styled.div`
  display: none;
  @media (min-width: 1024px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 40vw;
    position: fixed;
    margin-top: 50px;
  } 
`

const ProjectImage = styled.img`
  display:block;
  height: auto;
  width: auto;
  max-width: 300px;
  max-height: 150px;
  margin: 5px;
`

const PictureContainer = styled.div`
  width: 55%;
  display: flex;
  justify-content: flex-start;
`

export default Project