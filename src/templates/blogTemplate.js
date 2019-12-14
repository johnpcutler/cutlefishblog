import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import SEO from "../components/seo"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {

	const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html} = markdownRemark
	
	
  return (
	<Layout>
		<SEO title={frontmatter.title} previewImage={frontmatter.image.childImageSharp.fixed.src} />
    <div className="blog-post-container">
      <div className="blog-post">
				<p><mark>I recently co-wrote the <a href="https://amplitude.com/north-star?utm_source=cutler">North Star Playbook</a>. Please check it out.</mark></p>
        <h1>{frontmatter.title}</h1>
        <h4>Published: {frontmatter.date}</h4>
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
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
				image {
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
    }
  }
 `