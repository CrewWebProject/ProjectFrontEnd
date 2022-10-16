import React, { useState } from 'react'
import styled from 'styled-components'
import { Text } from '../../../elements/index';

const Login = () => {
    const [id, setId] = useState('')
    const [pw, setPw] = useState('')


  return (
      <Container>
          <Text subTitle1 color="#00000">관리자 로그인</Text>
          <InputDiv>
            <InputStyle placeholder='관리자 아이디'/>
            <InputStyle placeholder='비밀번호' />
              {id === '' && pw === '' ?
                  <Text sub1 color='red'>아이디와 비밀번호를 정확하게 입력해주세요</Text>
                : null}
          </InputDiv>
          <Btn>
              <Text body2 color="#fff" cursor='pointer'>로그인</Text>
          </Btn>
    </Container>
  )
}

const Container = styled.div`
    margin: auto;
    width: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const InputDiv = styled.div`
    width: 300px;
    height: 120px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const InputStyle = styled.input`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 0px 0px 20px;
    gap: 10px;
    width: 300px;
    height: 40px;
    background: #FFFFFF;
    border: 1px solid #C1C1C1;
`
const Btn = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 10px;
    width: 300px;
    height: 40px;
    background: #000000;
    margin-top: 10px;
    cursor: pointer;
`
export default Login