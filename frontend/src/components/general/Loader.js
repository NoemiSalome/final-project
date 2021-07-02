import React, { useEffect, useRef } from 'react'
import lottie from 'lottie-web'
import styled from 'styled-components/macro'

const Loader = () => {
	const container = useRef(null)

	useEffect (() => {
		lottie.loadAnimation({
			container: container.current,
			renderer: 'svg',
			loop: true,
			autoplay: true,
			animationData: require('../assets/LottieAnimation.json')
		})
	})
	
	return (
		<LoaderContainer>
			<LottieContainer className='container' ref={container}/>
		</LoaderContainer>
	)
}

const LottieContainer = styled.div`
	height: 100%;
	width: 100%;
`

const LoaderContainer = styled.section`
	width: 100vw;
	height: 100vh
`

export default Loader