import React, { useEffect, useState, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import imageUrlBuilder from '@sanity/image-url'
import Rellax from 'rellax'

import sanityClient from '../client.js'
import Header from 'components/general/Header'

const builder = imageUrlBuilder(sanityClient)
  function urlFor(source) {
    return builder.image(source)
  }

const ProjectDetailBigScreen = () => {
  const [projectDetail, setProjectDetail] = useState([])
  const { slug } = useParams()
  const mainRef = useRef()
  var rellax = new Rellax('.rellax')
  const UpButtonClick = () => {mainRef.current.scrollIntoView({ behavior: 'smooth' })}

  useEffect(() => {
  
    sanityClient
      .fetch(
        `*[slug.current == '${slug}'] {
            semester,
            studio,
            description,
            learnings,
            'images': images [] {
              alt,
              title,
              description,
              asset->{ url }
            }
        }`)
  .then((data) => setProjectDetail(data[0]))
  .catch(console.error)
}, [slug])

    if (!ProjectDetailBigScreen) 
      return <div>loading</div>
  
    return (

		<>
			<Header />
        <MainContainer >
          <FirstHalfPageContainer ref={mainRef} className='rellax' data-rellax-speed='3' horizontal='true'>
            <TitleContainer>
              <BackLink to={'/projects'}>
                <DirectionButton >Take me BACK.</DirectionButton>
              </BackLink>
              <ProjectTitle>{projectDetail.semester}</ProjectTitle>
              <ProjectTitle>{projectDetail.studio}</ProjectTitle>
              <DescriptionContainer>
                {projectDetail.description}
              </DescriptionContainer>
            </TitleContainer>
          </FirstHalfPageContainer>         
          <SecondHalfPageContainer>
            <LearningsContainer className='rellax' data-rellax-speed='1'>
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
            <ImageContainer className='rellax' data-rellax-speed='6'>
              {projectDetail.images && projectDetail.images.map((image) => (
                <>
                <ImageBox>
                <ProjectImage 
                    src={urlFor(image).url()}
                    alt={image.alt}
                    key={image.url}
                  />
                    <TitleOverlay>
                    <HoverContent>
                      <PictureTitle>{image.title}</PictureTitle>
                      <PictureDescription>{image.description}</PictureDescription>
                    </HoverContent>
                  </TitleOverlay> 
                </ImageBox>
                </>
              ))}
              
            </ImageContainer>
              <DirectionButton onClick={UpButtonClick} className='rellax' data-rellax-speed='-7'>Take me UP.</DirectionButton>
          </SecondHalfPageContainer>
        </MainContainer>
		  </>
		)
	}	
  
const BackLink = styled(Link)`
  margin-bottom: 20px;
  align-self: flex-end;
`

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  heigth: 100vh
`

const PictureTitle = styled.h3`
  font-family: 'Archivo', sans-serif;
  font-size: 25px;
`
 
const ProjectTitle = styled.h2`
  font-family: 'Archivo', sans-serif;
  font-size: 20px;
`

const PictureDescription = styled.h4`
  font-family: 'PT Sans', sans-serif;
  font-size: 16px;
`

const DescriptionContainer = styled.div`
  font-family: 'PT Sans', sans-serif;
  font-size: 17px;
  text-align: justify;
  width: 50vw;
  margin-top: 10px
`

const FirstHalfPageContainer = styled.section`
	height: 90vh;
	display: flex;
	flex-direction:row;
	justify-content: center;
  align-items: center;
`

const SecondHalfPageContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 0 200px 200px 200px;
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
    &:last-child{
      margin-bottom: 150px;
    }
`

const TitleLearning = styled.div`
  font-family: 'Archivo', sans-serif;
  font-size: 30px;
  font-weight: bolder;
  margin-top: 15px;
`

const Learnings = styled.p`
  font-family: 'PT Sans', sans-serif;
  font-size: 15px;
  margin-left: 5px
`

const LearningsLine = styled.div`
  border-top: 2px solid black;
  width: 10px;
`

const ImageBox = styled.div`
  position: relative;
  display: flex;

`

const HoverContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 80%
`

const TitleOverlay = styled.div`
  color: black;
  position: absolute;
  top:0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.4s;
    :hover{
      opacity: 0.6;
    } 
`

const ImageContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  width: auto;
`

const ProjectImage = styled.img`
  display:block;
  height: auto;
  max-width: 450px;
  max-height: 220px;
  margin: 30px;
  position: relative;
`

const DirectionButton = styled.button`
    width: 150px;
    height: 35px;
    background: transparent;
    border: none;
    border-bottom: 1px solid black;
    padding: 10px 0;
    font-family: 'Archivo', sans-serif;
    font-size: 15px;
`

export default ProjectDetailBigScreen