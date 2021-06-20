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

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'project'] {
          title,
          slug,
          'images': images [] {
            alt,
            asset->{
              url
            }
          }
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
            <>
              <MainProjectContainer>
                <ProjectLine>

                </ProjectLine>
                <div key={project.slug.current}>
                  <ProjectLink to={'/projects/' + project.slug.current} >
                    <MainTitle>{project.title}</MainTitle>
                  </ProjectLink>  
                    <ImageContainer>
                      {project.images && project.images.map((image) => (
                          <img 
                            src={urlFor(image).url()}
                            alt={image.alt}
                            height='150px'
                            width='120px'
                            key={image.index}
                          />
                      ))}
                    </ImageContainer>   
                </div>
              </MainProjectContainer>
            </>
          ))}
      </MainContainer>
    </>
  )
}


const MainProjectContainer = styled.section`
  display: flex;
  align-items: center;
  margin: 0 80px 70px 0;
`

const MainContainer = styled.div`
  margin: 0 10px 0 20px;
  border-left: 2px solid black;
  padding: 50px 0;
`

const ImageContainer = styled.div`
display: none;
  @media (min-width: 1200px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50vw;
  } 
`

const ProjectLine = styled.div`
  border-top: 2px solid black;
  width: 30%
`

const MainTitle = styled.h1`
  font-family: 'Cormorant', serif;
  font-size: 18px;
  height: 100%;
  margin-left: 4px
`

const ProjectLink = styled(Link)`
  color: black;
  text-decoration: none;
`

export default Project