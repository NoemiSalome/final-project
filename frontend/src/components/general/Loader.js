// import React, { useEffect } from 'react'
// import { useSpring, animated} from 'react-spring'
// import styled from 'styled-components/macro'

// const fast = { tension: 1100, friction: 30 }
// const transition = (x, y) => `translate3d(${x}px,${y}px,0) translate3d(-40%,-40%,0)`

// const Loading = () => {
//   const [{ position1 }, set] = useSpring({ position1: [0, 0], config: fast })
//   const [{ position2 }] = useSpring({ position2: position1, config: fast })
//   const [{ position3 }] = useSpring({ position3: position2, config: fast })

//   // fetching mouse coordinates
//   useEffect(() => {
//     const handler = ({ x, y }) => set({ position1: [x, y] })
//     window.addEventListener('mousemove', handler)
//     return () => window.removeEventListener('mousemove', handler)
//   })

//   return (
//     <>
//       <MainContainer>
//         <Subcontainer>
//           <animated.div className='ball' style={{ transform: position3.interpolate(transition) }} />
//         </Subcontainer>
//       </MainContainer>
//     </>
//   )
// }

// const MainContainer = styled.section`
//     width: 100vw;
//     height: 100vh;
//     overflow: hidden;
//     display: flex;
//     align-items: center;
//     justify-content: center;
// `

// const Subcontainer = styled.div`
//     position: absolute;
//     width: 100%;
//     height: 100%;
//     overflow: hidden;
// `

// export default Loading