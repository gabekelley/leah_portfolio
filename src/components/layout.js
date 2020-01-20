import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const projectsPath = `${__PATH_PREFIX__}/projects/`
    
    let header

    if (location.pathname === rootPath) {
      header = (
        <div></div>
      )
    } else {
      header = (
        <h1
          style={{
            ...scale(1),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={location.pathname === projectsPath ? `/projects/` : `/`}
          >
            {title}
          </Link>
        </h1>
      )
    }
    
    return (
      <Wrapper>
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
          }}
        >
          <header>{header}</header>
          <main>{children}</main>
        </div>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
`

export default Layout
