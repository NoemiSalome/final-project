import React, { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components/macro'
import { BsChevronDown } from 'react-icons/bs' 

import sanityClient from '../client.js'
import Header from 'components/general/Header'
import ImageSlider from 'components/ProjectImages/ImageSlider'

const ProjectDetailBigScreen = () => {
  const [projectDetail, setProjectDetail] = useState([])
  const { slug } = useParams()
  const projectRef = useRef()
  const onChevronClick = () => {projectRef.current.scrollIntoView({ behavior: 'smooth' })}

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

    if (!ProjectDetailBigScreen) 
      return <div>loading</div>
  
    return (

		<>
			<Header />
      <MainContainer>
				<FirstHalfPageContainer>
					<TitleContainer>
						<ProjectTitle>{projectDetail.semester}</ProjectTitle>
						<ProjectTitle>{projectDetail.studio}</ProjectTitle>
            <DescriptionContainer>
              {projectDetail.description}
            </DescriptionContainer>
          </TitleContainer>
					<BsChevronDown size={32} onClick={onChevronClick} />
				</FirstHalfPageContainer>
				
				<SecondHalfPageContainer ref={projectRef}>
					<LearningsContainer>
						<TitleLearning>how to</TitleLearning>
						<LearningsBox>
							{projectDetail.learnings && projectDetail.learnings.map((learning) => (
								<SingleLearningsBox>
									<LearningsLine></LearningsLine>
									<Learnings>{learning}</Learnings>
								</SingleLearningsBox>
							))}
						</LearningsBox>
					</LearningsContainer>
					<ImageSlider />
				</SecondHalfPageContainer>
			</MainContainer>
		</>
		)
	}	

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px
`

const ProjectTitle = styled.div`
  font-family: 'Cormorant', serif;
  font-size: 25px;
  font-weight: bolder;
`

const DescriptionContainer = styled.div`
  font-family: 'Cormorant', serif;
  font-size: 18px;
  text-align: justify;
  width: 50vw;
`

const FirstHalfPageContainer = styled.section`
	height: 100vh;
	display: flex;
	flex-direction:row;
	justify-content: center;
  align-items: center
`

const SecondHalfPageContainer = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 200px 200px 200px;
  justify-content: space-between
`

const LearningsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const LearningsBox = styled.div`
  margin: 10px 0;
  border-left: 2px solid black;
  width: 30vw;
`

const SingleLearningsBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 60px;
`

const TitleLearning = styled.div`
  font-family: 'Cormorant', serif;
  font-size: 30px;
  font-weight: bolder;
  margin-top: 15px;
`

const Learnings = styled.p`
  font-family: 'Cormorant', serif;
  font-size: 18px;
  margin-left: 5px
`
const LearningsLine = styled.div`
  border-top: 2px solid black;
  width: 10px;
`

export default ProjectDetailBigScreen