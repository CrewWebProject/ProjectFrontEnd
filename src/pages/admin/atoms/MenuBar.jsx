import React from 'react'
import { Text } from '../../../elements/index';
import { ReactComponent as Go } from "../../../Icons/arrow/Vector.svg";
import styled from 'styled-components'

const MenuBar = () => {
  return (
    <Container>
      <Menu>
        <Text header2 color="#ffffff">CAYCREW 관리자</Text>
      </Menu>
      <Menu>
         <Text header2 color="#ffffff">CAYCREW 바로가기</Text>
        <Go style={{cursor: 'pointer'}}/></Menu>
      <Manage>
        <Text body2 color="#ffffff" cursor='pointer'>메시지 관리하기</Text></Manage>
      <ClickedMenuBtn>
         <Text header2 color="#ffffff" cursor='pointer'>HOME</Text></ClickedMenuBtn>
      <MenuBtn>
         <Text header2 color="#ffffff" cursor='pointer'>ABOUT US</Text></MenuBtn>
      <MenuBtn>
         <Text header2 color="#ffffff" cursor='pointer'>PERFORMANCE</Text></MenuBtn>
      <MenuBtn>
         <Text header2 color="#ffffff" cursor='pointer'>WORK</Text></MenuBtn>
      <MenuBtn>
         <Text header2 color="#ffffff" cursor='pointer'>ACADEMY</Text></MenuBtn>
      <MenuBtn>
         <Text header2 color="#ffffff" cursor='pointer'>FOOTER</Text></MenuBtn>

    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  width: 255px;
  height: 100vw;
  background: #333333;
`

const Menu = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 30px;
  gap: 5px;
  width: 255px;
  height: 60px;
  background: #333333;
  border-bottom: 2px solid #555555;
`

const Manage = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 45px 0px 15px 30px;
  gap: 10px;
  width: 255px;
  height: 80px;
  background: #333333;
`

const ClickedMenuBtn = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 0px 0px 45px;
  gap: 10px;
  width: 255px;
  height: 60px;
  background: #000000;
`

const MenuBtn = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 0px 0px 45px;
  gap: 10px;
  width: 255px;
  height: 60px;
  background: #333333;
`
export default MenuBar