import React from "react"
import Header from '../components/header/header'
import styled from "styled-components"
import '../styles/styles.css'

class Layout extends React.Component {
  render() {
    const { children } = this.props
    const products = this.props.products
    const illustrations = this.props.illustrations
    
    return (
      <Wrapper>
          <Header products={products} illustrations={illustrations} location={this.props.location} />
          <main>{children}</main>
      </Wrapper>
    )
  }
}

export default Layout

const Wrapper = styled.div`
  min-height: 100vh;
`
