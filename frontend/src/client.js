import sanityClient from '@sanity/client'

export default sanityClient ({
    projectId: '27vacp6u',
    dataset:'production',
    apiVersion: '2021-06-07', // use a UTC date string
    useCdn: true
})  