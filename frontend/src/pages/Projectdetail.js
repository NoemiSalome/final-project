import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components/macro'
import imageUrlBuilder from '@sanity/image-url'

import sanityClient from '../client.js'
import Header from 'components/general/Header'

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}

const ProjectDetail = () => {
  const [projectDetail, setProjectDetail] = useState(null)
  const { slug } = useParams()

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == '${slug}']{
            title,
            _id,
            slug,
            images{
              asset->{
                _id
                url
              }
            }
        }`)
  .then((data) => setProjectDetail(data[0]))
  .catch(console.error)
}, [slug])

if (!ProjectDetail) return <div>loading</div>

    return (
        <>
          <Header />
          <MainContainer>
            {projectDetail.title}
            <img
              src={urlFor(projectDetail.images).url()}
              alt={projectDetail.title}
            />
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
export default ProjectDetail