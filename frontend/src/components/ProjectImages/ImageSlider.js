import React from 'react'
import styled from 'styled-components/macro'

import SliderData from 'components/ProjectImages/SliderData'

const ImageSlider = () => {   

  return (
    <>
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

          <SliderData />

          </Image>
        <PictureButton>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
          </svg>
        </PictureButton>
      </ImageContainer>
    </>
  )
}


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

export default ImageSlider