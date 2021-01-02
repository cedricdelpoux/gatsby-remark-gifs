import {Link, graphql} from "gatsby"
import React from "react"

export default ({data: {allMarkdownRemark}}) => {
  return (
    <div>
      <ul>
        {allMarkdownRemark.nodes.map(
          ({fields: {slug}, frontmatter: {title}}) => (
            <li key={slug}>
              <Link to={slug}>{`${title} (${slug})`}</Link>
            </li>
          )
        )}
      </ul>
    </div>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
        }
      }
    }
  }
`
