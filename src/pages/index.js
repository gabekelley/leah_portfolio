import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Billboard from "../components/billboard/billboard"
import IndexGrid from "../components/index-grid/index-grid"

class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle} products={data.ProductProjects.edges} illustrations={data.IllustrationProjects.edges}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <Billboard patterns={data.Patterns.edges} />
        <IndexGrid spots={data.Spots.edges} />
      </Layout>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    Patterns: allFile(filter: {extension: {eq: "png"}, relativeDirectory: {eq: "patterns"}}) {
      edges {
        node {
          id
          relativeDirectory
          childImageSharp {
            id
            fluid {
              src
            }
          }
        }
      }
    }
    Spots: allFile(filter: {extension: {eq: "png"}, relativeDirectory: {eq: "spots"}}) {
      edges {
        node {
          id
          relativeDirectory
          childImageSharp {
            id
            fluid {
              src
            }
          }
        }
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
            tag
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
