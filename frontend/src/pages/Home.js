import React from 'react'
import styled from 'styled-components/macro'

import Header from 'components/general/Header'

const Home = () => {

  return (
    <>
      <Header />
      <MainContainer>
        <HomeTitle>HOW</HomeTitle>
        <HomeSubTitleContainer>
          <HomeSubTitle>i got to know the world of architecture</HomeSubTitle>
          <HomeSubTitle>i got through three year of design studies</HomeSubTitle>
          <HomeSubTitle>i got prepared for the next step</HomeSubTitle>
        </HomeSubTitleContainer>
      </MainContainer>
    </>
  )
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 80vh;
  margin: 0 10px;
`

const HomeTitle = styled.h1`
  font-family: 'Abril Fatface', cursive;
  font-size: 30px;
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
`

export default Home