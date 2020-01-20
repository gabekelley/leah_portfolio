import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Billboard from "../components/billboard/billboard"
import IndexGrid from "../components/index-grid/index-grid"
// import Button from "../components/button"  

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Leah Schmidt"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />  
        <Billboard />
        {/* <Link to="/projects/">
          <Button marginTop="35px">Go to Projects</Button>
        </Link> */}
        <IndexGrid />
      </Layout>
    )
  }
}

export default IndexPage
