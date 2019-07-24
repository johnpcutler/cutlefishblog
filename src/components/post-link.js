import React from "react"
import { Link } from "gatsby"
const PostLink = ({ post }) => (
  <div
    style={{
      margin: `0 auto`,
      maxWidth: 960,
      padding: `0.5rem 0.5rem`,
    }}
  >
    <Link to={post.frontmatter.path}>
      {post.frontmatter.title} ({post.frontmatter.date})
    </Link>
  </div>
)
export default PostLink