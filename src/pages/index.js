import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"
import PostLink from "../components/post-link"

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)
  return (<Layout>
	  		<SEO title="Cutlefish - Product Nerdery" />
	  		<h3>Showing {Posts.length} posts...</h3>
	  		<div>{Posts}</div></Layout>)
}

/* const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Some of my posts...</h1>
    <p>Welcome to where your blog will go.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
) */

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`