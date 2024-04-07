import { graphql, useStaticQuery } from "gatsby"

export const useSiteMetadata = () => {
    const { site } = useStaticQuery(
        graphql`
            query SITE_METADATA_QUERY {
                site {
                    siteMetadata {
                        title
                        description
                        siteSource
                        authorName
                        authorEmail
                        authorGithub
                        authorLinkedIn
                        authorMastadon
                    }
                }
            }
        `
    )
    return site.siteMetadata
}