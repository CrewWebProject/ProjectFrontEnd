import React from 'react'
import styled from 'styled-components'
import { Text } from '../../../elements/index';

const Admin = () => {
  return (
      <Container>
          <Header>
              <Text subTitle6>HOME  페이지관리</Text>
              <Text sub1>로그아웃</Text>
          </Header>
          <Box>
              
          </Box>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    background-color: #ECECEC;
    display: flex;
    flex-direction: column;
`

const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px 30px;
    gap: 5px;
    width: 100%;
    height: 60px;
    background: #FFFFFF;
`
const Box = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 30px;
    gap: 15px;
    width: 90%;
    height: 127px;
    background: #FFFFFF
`
export default Admin