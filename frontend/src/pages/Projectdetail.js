import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components/macro'
import BlockContent from '@sanity/block-content-to-react'

import sanityClient from '../client.js'
import Header from 'components/general/Header'
import ImagesGallery from 'components/ProjectImages/ImagesGallery'

const ProjectDetail = () => {
  const [projectDetail, setProjectDetail] = useState([])
  const { slug } = useParams()

  useEffect(() => {
  
    sanityClient
      .fetch(
        `*[slug.current == '${slug}'] {
            title,
            semester,
            studio,
            description,
            learnings,
        }`)
  .then((data) => setProjectDetail(data[0]))
  .catch(console.error)
}, [slug])

    if (!ProjectDetail) 
      return <div>loading</div>
      

    return (
        <>
        <Header />
          <MainContainer>
            <CounterContainer>
              <Counter>1|5</Counter>
            </CounterContainer>            
            <ImageContainer>
              <PictureButton>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                </svg>
              </PictureButton>
                <Image>
                  <ImagesGallery />
                </Image>
                <PictureButton>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                  </svg>
                </PictureButton>
            </ImageContainer>

            {/* <p>{projectDetail.title}</p> */}
            <TitleContainer>
              <ProjectTitle>{projectDetail.semester}</ProjectTitle>
              <ProjectTitle>{projectDetail.studio}</ProjectTitle>
            </TitleContainer>

            <DescriptionContainer>
              <BlockContent blocks={projectDetail.description} />
            </DescriptionContainer>
            
            <TitleLearning>how to</TitleLearning>
            <LearningsContainer>
              
              {projectDetail.learnings && projectDetail.learnings.map((learning) => (
              <SingleLearningsBox>
                <LearningsLine></LearningsLine>
                <Learnings>{learning}</Learnings>
              </SingleLearningsBox>

              ))}
            </LearningsContainer>

          </MainContainer>
        </>
      )
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 25px;
`

const CounterContainer = styled.div`
  display: flex;
  justify-content: center;
`

const Counter = styled.h3`
  font-family: 'Abril Fatface', cursive;
  font-size: 14px;
`

const ImageContainer = styled.div`
  display: flex;
  margin: 10px 0 30px;
  justify-content: center;
  align-items: center;
`

const Image = styled.div`
  height: 200px;
  width: 250px;
  border: 1px solid black;
  margin: 0 10px
`

const PictureButton = styled.button`
  border: none;
  background: transparent;
  padding: 5px;
`

const TitleContainer = styled.div`
  margin: 10px 0;
`

const ProjectTitle = styled.div`
  font-family: 'Cormorant', serif;
  font-size: 18px;
  font-weight: bolder;
`

const DescriptionContainer = styled.div`
  font-family: 'Cormorant', serif;
  font-size: 15px;
  text-align: justify;
`

const LearningsContainer = styled.div`
  margin: 10px 0;
  border-left: 1px solid black;
`
const SingleLearningsBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`

const TitleLearning = styled.div`
  font-family: 'Cormorant', serif;
  font-size: 28px;
  font-weight: bolder;
  margin-top: 15px;
`

const Learnings = styled.p`
  font-family: 'Cormorant', serif;
  font-size: 15px;
  margin-left: 5px
`
const LearningsLine = styled.div`
  border-top: 1px solid black;
  width: 10px;
`

export default ProjectDetail