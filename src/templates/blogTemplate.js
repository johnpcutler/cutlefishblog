import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import SEO from "../components/seo"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
	<Layout>
		<SEO title={frontmatter.title} previewImage={frontmatter.image} />
    <div className="blog-post-container">
      <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
    </Layout>
  )
}
export const pageQuery = graphql`
  query($path: String!, $image: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
				image
      }
    }
		file(relativePath: {eq: $image}) {
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