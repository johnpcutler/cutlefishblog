/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title, previewImage }) {
  const data = useStaticQuery(
    graphql`
      query {
        a: site {
          siteMetadata {
            title
            description
            author
						twitterHandle
						siteURL
          }
        }
			  b: file(relativePath: {eq: "ff.jpeg"}) {
			    id
			    childImageSharp {
			      fixed(width: 400) {
			        base64
			        tracedSVG
			        aspectRatio
			        width
			        height
			        src
			        srcSet
			        srcWebp
			        srcSetWebp
			        originalName
			      }
			    }
			  }
		  }
	  `
	)
	
	console.log(data)
  
  const metaDescription = description || data.a.siteMetadata.description
		
	const socialImage = previewImage || data.b.childImageSharp.fixed.src

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${data.a.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
					content: `${data.a.siteMetadata.siteURL}${socialImage}`
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: data.a.siteMetadata.author,
        },
        {
          name: `twitter:site`,
          content: data.a.siteMetadata.twitterHandle,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  image: '',
	twitterHandle: '',
	siteURL: '',
	previewImage: ''
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
	twitterHandle: PropTypes.string,
	siteURL: PropTypes.string,
	previewImage: PropTypes.string
}

export default SEO
