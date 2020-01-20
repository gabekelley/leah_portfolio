import React from "react"
import Header from '../components/header/header';
import styled from "styled-components"

class Layout extends React.Component {
  render() {
    const { children } = this.props
    
    return (
      <Wrapper>
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
          }}
        >
          <Header />
          <main style={{marginTop: '74px'}}>{children}</main>
        </div>
      </Wrapper>
    )
  }
}

export default Layout

const Wrapper = styled.div`
  min-height: 100vh;
`
