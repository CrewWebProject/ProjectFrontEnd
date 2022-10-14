import React from 'react'
import styled from 'styled-components'
import MenuBar from './atoms/MenuBar'
import Admin from './atoms/Admin'

const index = () => {
  return (
    <Container>
      <MenuBar />
      <Admin />
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    /* background-color: "#F5F5F5"; */
`

export default index