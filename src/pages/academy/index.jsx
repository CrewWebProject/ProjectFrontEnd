import React from 'react'
import styled from 'styled-components'
import Class from './atoms/Class'
import Title from './atoms/Title'
import Map from './atoms/Map'

const Academy = () => {
  return (
    <Wrap>
      <Title />
      <Class />
      <Map/>
    </Wrap>
  )
}

const Wrap = styled.div`
  width: 1440px;
  margin: 0 auto;
`

export default Academy