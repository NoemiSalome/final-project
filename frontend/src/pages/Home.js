import React from 'react'
import styled from 'styled-components/macro'

import Header from 'components/general/Header'

const Home = () => {
  return (
    <>
    <Header />
      <MainContainer>
        <ContentContainer>
          <HomeTitle>HOW</HomeTitle>
          <HomeSubTitleContainer>
            <HomeSubTitle>i got to know the world of architecture</HomeSubTitle>
            <HomeSubTitle>i got through three year of design studies</HomeSubTitle>
            <HomeSubTitle>i got prepared for the next step</HomeSubTitle>
          </HomeSubTitleContainer>
        </ContentContainer>
      </MainContainer>
    </>
  )
}

const MainContainer = styled.div`
  height: 100vh;
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 20px;
  height: 80vh;
    @media(min-width: 1024px){
      margin: 0 300px;
    }
`

const HomeTitle = styled.h1`
  font-family:'Archivo', sans-serif;
  font-size: 30px;
    @media(min-width: 768px){
      font-size: 40px;
      margin: 0 0 20px 50px
    }
    @media(min-width: 1024px){
      font-size: 50px;
    }
`

const HomeSubTitleContainer = styled.div`
  display: flex;
  align-items: end;
  flex-direction: column;
`

const HomeSubTitle = styled.h2`
  font-size: 12px;
  justify-content: flex-end;
  margin-bottom: 4px;
  font-family:'Heebo', sans-serif;
    @media(min-width: 768px){
      font-size: 16px;
      margin: 0 70px 10px
    }
    @media(min-width: 1024px){
      font-size: 18px;
    }
`

export default Home