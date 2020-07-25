import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import { MDXRenderer } from "gatsby-plugin-mdx"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {

	const post = data.mdx // data.markdownRemark holds our post data
	
	
  return (
	<Layout>
		<SEO title={post.frontmatter.title} previewImage={post.frontmatter.image.childImageSharp.fixed.src} />
    <div className="blog-post-container">
      <div className="blog-post">
        <h1>{post.frontmatter.title}</h1>
        <h4>Published: {post.frontmatter.date}</h4>
        <div className="blog-post-content">
          <MDXRenderer>{post.body}</MDXRenderer>
        </div>
      </div>
    </div>
    </Layout>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    mdx(frontmatter: { path: { eq: $path } }) {
      body
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