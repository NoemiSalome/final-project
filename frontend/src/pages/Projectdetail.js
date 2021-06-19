import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components/macro'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'

import sanityClient from '../client.js'
import Header from 'components/general/Header'

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}

const ProjectDetail = () => {
  const [projectDetail, setProjectDetail] = useState([])
  const { slug } = useParams()

  useEffect(() => {
  
    sanityClient
      .fetch(
        `*[slug.current == '${slug}'] {
            title,
            semester,
            studio,
            description,
            learnings,
            'images': images [] {
              alt,
              asset->{
                url
              }
            }
        }`)
  .then((data) => setProjectDetail(data[0]))
  .catch(console.error)
}, [slug])

    if (!ProjectDetail) 
      return <div>loading</div>
      

    return (
        <>
          <Header />
          <MainContainer>
            <div>{projectDetail.title}</div>
            <div>{projectDetail.semester}</div>
            <div>{projectDetail.studio}</div>
            <BlockContent blocks={projectDetail.description} />
            <div>
              {projectDetail.learnings && projectDetail.learnings.map((learning) => (
                <div>{learning}</div>
              ))}
              </div>
            <div>
              {projectDetail.images && projectDetail.images.map((image) => (
                <div key={image.index}>
                  <img 
                    src={urlFor(image).url()}
                    alt={image.alt}
                    height='150px'
                    width='120px'
                  />
                </div>
                ))}
            </div>
         
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