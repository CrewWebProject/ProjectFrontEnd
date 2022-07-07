import React from "react";
import styled from "styled-components";
import { Text } from "../elements/index";

// icons
import { ReactComponent as Blog_w } from "../Icons/SNS/blog-w.svg";
import { ReactComponent as Facebook_w } from "../Icons/SNS/Facebook-w.svg";
import { ReactComponent as Insta_w } from "../Icons/SNS/instagram-w.svg";
import { ReactComponent as Youtube_w } from "../Icons/SNS/youtube-w.svg";

const Footer = () => {
  return (
    <Box>
      <Container>
        <Top>
          <div>LOGO</div>
          <Icons>
            <Insta_w /> <Youtube_w /> <Blog_w />
            <Facebook_w />
          </Icons>
        </Top>
        <Bottom>
          <Text sub1 color="#cccccc" textAlign="left">
            카이크루 ㅣ 대표 : 소재환 ㅣ 대표전화 : 052-246-8359
          </Text>
          <Text sub1 color="#cccccc" textAlign="left">
            주소 : 울산광역시 중구 중앙길 91 서린빌딩 3층 ㅣ
            caycrewbboy@naver.com
          </Text>
          <Text sub1 color="#cccccc" textAlign="left">
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
  background: #000000;
  padding: 10px;
  justify-content: center;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 50px;
  color: #ffffff;
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
