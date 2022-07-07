import React from "react";

import styled from "styled-components";
import { Text } from "../elements/index";
//arrow-short 90도로 회전해야댐 현재는 오른쪽 방향을 가리킴 따라서 arrow-down으로 임시적 사용
import { ReactComponent as Arrow } from "../Icons/arrow/arrow-down.svg";

const DetailPerformance = ({ close }) => {
  return (
    <>
      <Wrapper>
        <Title>
          <div>
            <Text header2 color="#fff" textAlign="left">
              Original B-Boy Showcase
            </Text>
            <Text subTitle1 color="#fff" textAlign="left">
              오리지널 비보이 쇼케이스
            </Text>
          </div>
          <Arrow style={{ cursor: "pointer" }} onClick={close} />
        </Title>
      </Wrapper>

      <CayVideoWrapper>
        <CayVideoContainer>
          <CayContent>
            <div>
              <Text header2>Dancecal Showcase</Text>
              <Text title1>댄스컬 쇼케이스</Text>
            </div>
            <div>
              <MixedText>
                <Text header1 color="#573E9D">
                  공연시간
                </Text>
                &nbsp;&nbsp;
                <Text header2> 10- 30 </Text> &nbsp;<Text body1> 분</Text>
              </MixedText>
              <MixedText>
                <Text header1 color="#573E9D">
                  공연인원
                </Text>
                &nbsp;&nbsp;&nbsp;
                <Text header2> 5- 10</Text>&nbsp;<Text body1>명</Text>
                &nbsp;&nbsp;
              </MixedText>
            </div>
            <div>
              <Text body1>수많은 세계대회를 우승한 비보이들이 선보이는</Text>
              <Text body1>
                다이내믹하고 역동적인 동작들과 화려한 칼군무 공연
              </Text>
            </div>
            <Btn>
              <Text body2 color="#fff" cursor="pointer">
                문의 . 상담
              </Text>
            </Btn>
          </CayContent>

          <CayVideo />
        </CayVideoContainer>
        <VideoBoxWrapper>
          <CayPhotoBox />
          <CayPhotoBox />
          <CayPhotoBox />
          <CayPhotoBox />
        </VideoBoxWrapper>
      </CayVideoWrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 160px;
  background-color: #000000;
`;
const Title = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1228.25px;
  padding-top: 49px;
  margin: auto;
`;

const CayVideoWrapper = styled.div`
  width: 100%;
  height: 1070px;
  margin: auto;
`;

const CayVideoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1240px;
  margin: auto;
  padding-top: 120px;
`;

const CayVideo = styled.div`
  width: 800px;
  height: 480px;
  background-color: #e49494;
`;

const CayContent = styled.div`
  ${({ theme }) => theme.common.flexColumnAround};
  width: 400px;
  height: 480px;
`;

const MixedText = styled.div`
  ${({ theme }) => theme.common.flexCenter};
`;

const Btn = styled.div`
  background-color: #000000;
  width: 140px;
  height: 40px;
  padding: 10px 20px;
  box-sizing: border-box;
  cursor: pointer;
`;

const VideoBoxWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 295px);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1240px;
  height: 210px;
  margin: 20px auto 0px;
  gap: 20px;
`;

const CayPhotoBox = styled.div`
  height: 210px;
  background: #a6d8b4;
`;
export default DetailPerformance;
