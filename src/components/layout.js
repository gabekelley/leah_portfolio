import React from "react"
import Header from '../components/header/header'
import styled from "styled-components"
import '../styles/styles.css'

class Layout extends React.Component {
  render() {
    const { children } = this.props
    const projects = this.props.projects
    
    return (
      <Wrapper>
          <Header projects={projects} location={this.props.location} />
          <main>{children}</main>
      </Wrapper>
    )
  }
}

export default Layout

const Wrapper = styled.div`
  min-height: 100vh;
`
