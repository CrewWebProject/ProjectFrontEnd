import React from 'react'
import styled from 'styled-components'

const Class = () => {
  return (
    <Wrap>
      <h2>오랜 경험과 체계적인 커리큘럼으로 짜여진<br />카이댄스학원의 다양한 클래스를 둘러보세요.</h2>
      <ClassList>
        <Image>
          
        </Image>
        <TextBox>
          <Tag>취미기초반</Tag>
          <h4>나도 할 수 있을까? 너도 할 수 있어!</h4>
          <p>춤을 처음 배우시는 분, 새로운 취미, 문화생활을 원하시는 분, 일상의 스트레스 해소 혹은 다이어트 등이 필요하신 분!<br />재밌고, 즐겁게! 남녀노소 누구나 다햠께 춤을 즐길 수 있는 클래스</p>
        </TextBox>
      </ClassList>
      <ClassList>
        <Image>
          
        </Image>
        <TextBox>
          <Tag>전문반</Tag>
          <h4>전문 댄서, 아티스트가 되기 위한 과정</h4>
          <p>전공 심화교육, 하드 트레이닝, 이론 수업 등 다양한 커리큘럼으로 전문 지식을 습득할 수 있고, 또한 유명 댄서들의 워크샵을 진행하며<br/>여러 대회와 공연 및 촬영을 학원 내 자체적으로 기획하여 실전 경험의 기회를 제공하는 아티스트 입문 클래스</p>
        </TextBox>
      </ClassList>
      <ClassList>
        <Image>
          
        </Image>
        <TextBox>
          <Tag>입시반</Tag>
          <h4>200명 이상의 예고/예대 합격자 배출</h4>
          <p>1:1 입시상담 및 개인 맞춤 트레이닝부터 입시 작품 제작, 모의평가를 통한 기량 체크, 다양한 공연, 대회 및 대학 콩쿨 참여 등<br />합격을 위한 체계적인 입시 프로그램 클래스</p>
        </TextBox>
      </ClassList>
      <ClassList>
        <Image>
          
        </Image>
        <TextBox>
          <Tag>오디션반</Tag>
          <h4>데뷔의 꿈을 이뤄드리겠습니다!</h4>
          <p>기초 트레이닝부터 다양한 안무 수업과 월말평가, 프로필 촬영 등 오디션에 최적화된 커리큘럼을 관리해주는 전담 선생님 배치!<br />내방 오디션, 온라인 오디션 및 엔터테인먼트와 직접적인 연계를 통해 비공개 오디션 진행</p>
        </TextBox>
      </ClassList>
      <ClassList>
        <Image>
          
        </Image>
        <TextBox>
          <Tag>개인 및 그룹</Tag>
          <h4>1:1 개인 레슨 혹은 댄스 공연, 이벤트를 준비하는 분들께 추천</h4>
          <p>춤을 배우고 싶지만 시간이 맞지 않거나 1:1 개인 레슨을 원하시는 분! 1:1 원포인트 레슨을 통해 더 편하고, 세밀하게 배울 수 있습니다.<br/>혹은 친구들과 함께 댄스 공연, 결혼식, 이벤트 등 원하는 춤을 배워보고 싶은 분 선생님과의 시간 조율을 통해 언제든 레슨이 가능합니다.</p>
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
  width: 1200px;
  height: 180px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0px 0px 50px 0px;
  padding-left: 100px;

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
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #333333;
    margin: 8px 0px 0px 0px;
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
  margin-bottom: 12px;
`

const TextBox = styled.div`


`


export default Class