import React from 'react'
import styled from 'styled-components'

const Class = () => {
  return (
    <Wrap>
      <h2>오랜 경험과 체계적인 커리큘럼으로 짜여진<br />카이댄스학원의 다양한 클래스를 둘러보세요.</h2>
      <ClassList>
        <Image>
          사진
        </Image>
        <TextBox>
          <Tag>취미기초반</Tag>
          <h4>나도 할 수 있을까? 너도 할 수 있어!</h4>
          <p>춤을 처음 배우시는 분, 새로운 취미, 문화생활을 원하시는 분, 일상의 스트레스 해소 혹은 다이어트 등이 필요하신 분!<br />재밌고, 즐겁게! 남녀노소 누구나 다햠께 춤을 즐길 수 있는 클래스</p>
        </TextBox>
      </ClassList>
    </Wrap>
  )
}


const Wrap = styled.div`
  width: 100%;
  height: 1528px;
  display: flex;
  flex-direction: column;

  h2 {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 54px;
    color: #000000;
    margin: 120px 0px 80px 100px;
  }
`

const ClassList = styled.div`
  width: 100%;
  height: 180px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: yellow;
  margin: 0px 0px 25px 100px;

  h4 {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 34px;
    color: #000000;
    margin: 0px;
  }

  p {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 28px;
    color: #FFFFFF;
    margin: 0px;
  }
`

const Image = styled.div`
  width: 300px;
  height: 180px;
  background-color: #A6D8B4;
  margin-right: 36px;
`

const Tag = styled.div`
  width: 130px;
  height: 40px;
  background-color: #000000;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #FFFFFF;
  display: flex;
  justify-content: center;
  align-items: center;
`

const TextBox = styled.div`


`


export default Class