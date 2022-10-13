import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Blog_b } from "../../../Icons/SNS/blog-b.svg";
import { ReactComponent as Insta_b } from "../../../Icons/SNS/instagram-b.svg";
import { ReactComponent as Youtube_b } from "../../../Icons/SNS/youtube-b.svg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
const Title = () => {
  return (
    <>
      <BackGround>
        <h1>CAY DANCE<br />COMPANY</h1>
        <p>카이댄스학원은 2006년 설립되어 지금까지 수많은 전문댄서들을 배출하였고<br />여러 기획사와 컨택을 통한 내방오디션 또한 진행하고 있습니다. 전문/입사반<br />이외에도 키즈반, 취미반, 직장인반 수업을 진행하고 있어 춤을 처음 접하는 분들도<br />쉽게 춤을 배울 수 있습니다.</p>
        <InquiryBtn>
          <h4>카이댄스학원 수강 및 문의</h4>
        </InquiryBtn>
      </BackGround>
      <Contect>
        <p>CAY DANCE COMPANY</p>
        <MdOutlineKeyboardArrowRight size={30} color='#FFFFFF' />
        <div>
          <Insta_b style={{ backgroundColor: 'white' }} />
          <Blog_b style={{ backgroundColor: 'white' }} />
          <Youtube_b style={{ backgroundColor: 'white' }} />
        </div>
      </Contect>
    </>
  )
}

const BackGround = styled.div`
  width: 100%;
  height: 906px;
  background: #71927a;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-family: 'Gmarket Sans TTF';
    font-style: normal;
    font-weight: 700;
    font-size: 76px;
    line-height: 100px;
    color: #FFFFFF;
    margin: 0px 0px 70px 100px;
  }

  p {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 28px;
    color: #FFFFFF;
    margin: 0px 0px 35px 100px;
  }
`

const InquiryBtn = styled.div`
  width: 250px;
  border : 1px solid #FFFFFF;
  margin-left: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  h4 {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    color: #FFFFFF;
  }
`

const Contect = styled.div`
  width: 100%;
  height: 124px;
  background: #000000;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  p {
    font-family: 'Gmarket Sans TTF';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    color: #FFFFFF;
    margin: 0px;
  }
`

export default Title