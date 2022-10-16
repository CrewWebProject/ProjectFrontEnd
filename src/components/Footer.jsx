import React from "react";
import styled from "styled-components";
import { Text } from "../elements/index";

//icons
import { ReactComponent as Blog_b } from "../Icons/SNS/blog-b.svg";
import { ReactComponent as Facebook_b } from "../Icons/SNS/Facebook-b.svg";
import { ReactComponent as Insta_b } from "../Icons/SNS/instagram-b.svg";
import { ReactComponent as Youtube_b } from "../Icons/SNS/youtube-b.svg";



const Footer = () => {

  if (window.location.pathname === '/adminLogin') return null;

  return (
    <Box>
      <Container>
        <Top>
          <div>LOGO</div>
          <Icons>
            <Insta_b /> <Youtube_b /> <Blog_b />
            <Facebook_b />
          </Icons>
        </Top>
        <Bottom>
          <Text sub1 color="#555555" textAlign="left">
            카이크루 ㅣ 대표 : 소재환 ㅣ 대표전화 : 052-246-8359
          </Text>
          <Text sub1 color="#555555" textAlign="left">
            주소 : 울산광역시 중구 중앙길 91 서린빌딩 3층 ㅣ
            caycrewbboy@naver.com
          </Text>
          <Text sub1 color="#555555" textAlign="left">
            Copyright by CAYCREW.all rights reserved.
          </Text>
        </Bottom>
      </Container>
    </Box>
  );
};

export default Footer;

const Box = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  width: 100%;
  height: 388px;
  background-color: #ffffff;
  padding: 10px;
  justify-content: center;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 50px;
  size: 24px;
  font-weight: 700;
`;

const Icons = styled.div`
  display: flex;
  justify-content: space-around;
  width: 180px;
`;

const Bottom = styled.div`
  padding: 50px;
`;
