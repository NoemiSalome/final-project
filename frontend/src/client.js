import sanityClient from '@sanity/client'

export default sanityClient ({
    projectId: 'otkni7oy',
    dataset:'production',
    apiVersion: '2021-06-16', // use a UTC date string
    useCdn: true
})  