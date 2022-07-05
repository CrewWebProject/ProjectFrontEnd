import React from "react";
import styled from "styled-components";
import { ReactIcon } from "../Icons/icon";

const Footer = () => {
  return (
    <Box>
      <Container>
        <Top>
          <div>LOGO</div>
          <Icons>
            <ReactIcon.BsInstagram /> <ReactIcon.BsYoutube /> 블
            <ReactIcon.BsFacebook />
          </Icons>
        </Top>
        <Bottom>
          <div>카이크루 ㅣ 대표 : 소재환 ㅣ 대표전화 : 052-246-8359</div>
          <div>
            주소 : 울산광역시 중구 중앙길 91 서린빌딩 3층 ㅣ
            caycrewbboy@naver.com
          </div>
          <div>Copyright by CAYCREW.all rights reserved.</div>
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
  width: 120px;
  font-size: 20px;
`;

const Bottom = styled.div`
  color: #cccccc;
  font-size: 12px;
  line-height: 24px;
  padding: 50px;
`;
