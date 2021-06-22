import React from 'react'
import styled from 'styled-components/macro'

import Header from 'components/general/Header'

const Home = () => {

  return (
    <>
      <MainContainer>
          <Header />
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
  height: 100vh
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 20px;
  height: 80vh
`

const HomeTitle = styled.h1`
  font-family: 'Abril Fatface', cursive;
  font-size: 30px;
    @media(min-width: 768px){
      font-size: 50px;
      margin: 0 0 20px 50px
    }
`

const HomeSubTitleContainer = styled.div`
  display: flex;
  align-items: end;
  flex-direction: column;
  margin: 0 20px
`

const HomeSubTitle = styled.h2`
  font-size: 12px;
  justify-content: flex-end;
  margin-bottom: 4px;
    @media(min-width: 768px){
      font-size: 18px;
      margin: 0 70px 10px
    }
`

export default Home