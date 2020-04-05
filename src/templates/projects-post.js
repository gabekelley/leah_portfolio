import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import './styles.css';

import Layout from "../components/layout"
import SEO from "../components/seo"

class ProjectPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext
    const { data } = this.props
    const images = this.props.data.allFile.edges

    console.log(images.length)

    return (
      <Layout location={this.props.location} title={siteTitle} products={data.ProductProjects.edges} illustrations={data.IllustrationProjects.edges}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <div id="project">
        <h1>{post.frontmatter.title}</h1>
        <MDXRenderer>{post.body}</MDXRenderer>
        {images.map(({ node }) => {
            return (
                <li>
                    <img src={node.childImageSharp.fluid.src} />
                </li>
            )
        })}

        <ul className="pagination">
          <li>
            {previous && (
              <Link to={`projects${previous.fields.slug}`} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={`projects${next.fields.slug}`} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
        </div>
      </Layout>
    )
  }
}

export default ProjectPostTemplate

export const pageQuery = graphql`
  query ProjectsPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
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
    allFile(filter: {extension: {eq: "png"}}) {
      edges {
        node {
          id
          childImageSharp {
            id
            fluid {
              src
            }
          }
        }
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
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
