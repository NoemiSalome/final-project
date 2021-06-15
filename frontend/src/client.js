import sanityClient from '@sanity/client'

export default sanityClient ({
    projectId: 'otkni7oy',
    dataset:'production',
    apiVersion: '2021-03-25', // use a UTC date string
})  