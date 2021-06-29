import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components/macro'

import sanityClient from '../client.js'
import Header from 'components/general/Header'
import ImageSlider from 'components/ProjectImages/ImageSlider'

const ProjectDetail = () => {
  const [projectDetail, setProjectDetail] = useState([])
  const { slug } = useParams()

  useEffect(() => {
  
    sanityClient
      .fetch(
        `*[slug.current == '${slug}'] {
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
            <ImageSlider />
            <TitleContainer>
              <ProjectTitle>{projectDetail.semester}</ProjectTitle>
              <ProjectTitle>{projectDetail.studio}</ProjectTitle>
            </TitleContainer>

            <DescriptionContainer>
              {projectDetail.description}
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
  padding: 10px;
    @media(min-width: 768px){
      margin: 60px 100px;
    }
`

const TitleContainer = styled.div`
  margin: 10px 0;
`

const ProjectTitle = styled.div`
  font-family: 'Heebo', sans-serif;
  font-size: 15px;
  font-weight: bolder;
  @media(min-width: 768px){
    font-size: 18px;
  }
`

const DescriptionContainer = styled.div`
  font-family: 'Heebo', sans-serif;
  font-size: 12px;
  text-align: justify;
  margin-bottom: 10px;
  @media(min-width: 768px){
    margin-bottom: 25px;
    font-size: 14px;
  }
`

const LearningsContainer = styled.div`
  margin: 20px 0;
  border-left: 1px solid black;
`

const SingleLearningsBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  @media(min-width: 768px){
    margin-bottom: 45px;
  }
`

const TitleLearning = styled.div`
  font-family: 'Heebo', sans-serif;
  font-size: 28px;
  font-weight: bolder;
  margin-top: 15px;
`

const Learnings = styled.p`
  font-family: 'Heebo', sans-serif;
  font-size: 12px;
  margin-left: 5px
`
const LearningsLine = styled.div`
  border-top: 1px solid black;
  width: 10px;
`

export default ProjectDetail