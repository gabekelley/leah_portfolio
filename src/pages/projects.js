import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class Projects extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const products = data.allMdx.ProductProjects.edges
    const illustrations = data.allMdx.IllustrationProjects.edges

    return (
      <Layout location={this.props.location} title={siteTitle} products={products} illustrations={illustrations}>
        <SEO title="All posts" />
        <div style={{ margin: "20px 0 40px" }}>
              {products.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug
                return (
                    <li>
                        <Link key={node.fields.slug} to={`/projects${node.fields.slug}`}>
                            {title}
                        </Link>
                    </li>
                )
              })}
              <h3>Illustrations</h3>
              {illustrations.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug
                return (
                    <li>
                        <Link key={node.fields.slug} to={`/projects${node.fields.slug}`}>
                            {title}
                        </Link>
                    </li>
                )
              })}
        </div>
        <Link to="/">
          <Button marginTop="85px">Go Home</Button>
        </Link>
      </Layout>
    )
  }
}

export default Projects


export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
    ProductProjects: allMdx(sort: {fields: frontmatter___date, order: DESC}, filter: {frontmatter: {tag: {in: "product"}}}) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            tag
            title
          }
        }
      }
    }
    IllustrationProjects: allMdx(sort: {fields: frontmatter___date, order: DESC}, filter: {frontmatter: {tag: {in: "illustration"}}}) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            tag
            title
          }
        }
      }
    }
  }
`