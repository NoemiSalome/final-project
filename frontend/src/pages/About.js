import React from 'react'
import styled from 'styled-components/macro'

import Header from 'components/general/Header'
import profile from '../images/profile.jpg'

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 80vh;
  margin: 0 10px;
`
const ProfilePicture = styled.img`
  width: 35%;
`

const AboutText = styled.p`
  font-family: 'Cormorant', serif;
  font-size: 12px;
  text-align: justify;
  width: 50%
`

const About = () => {

  return (
    <>
      <Header />
      <MainContainer>
        <ProfilePicture 
            src={profile} 
            alt="Portrait Anina" 
            className="ProfilePicture"/>
        <AboutText>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
        </AboutText>
      </MainContainer>
    </>
  )
}

export default About