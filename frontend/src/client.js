import sanityClient from '@sanity/client'

export default sanityClient ({
    projectId: 'otkni7oy',
    dataset:'portfolio-anina',
    apiVersion: '2021-06-07', // use a UTC date string
    useCdn: true
})  