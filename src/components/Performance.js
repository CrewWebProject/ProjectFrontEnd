import React from "react";

import styled from "styled-components";
import { Text } from "../elements/index";

const Performance = () => {
  return (
    <>
      <PerformanceWrapper>
        <Text title2>PERFORMANCE</Text>
        <Text subTitle2 color="#8B8B8B">
          카이크루 퍼포먼스 안내
        </Text>
        <PerformanceBox>
          <Photo />
          <Desc>
            <Text subTitle6 textAlign="left">
              Original B-Boy Showcase
            </Text>
            <Text title1 textAlign="left">
              오리지널 비보이 쇼케이스
            </Text>
            <Text body1 color="#555555" textAlign="left">
              수많은 세계대회를 우승한 비보이들이 선보이는
            </Text>
            <Text body1 color="#555555" textAlign="left">
              다이내믹하고 역동적인 동작들과 화려한 칼군무 공연
            </Text>
            <Btn>
              <Text body2 color="#fff" cursor="pointer">
                자세히보기
              </Text>
            </Btn>
          </Desc>
        </PerformanceBox>

        <PerformanceBox>
          <Desc>
            <Text subTitle6 textAlign="left">
              Dancecal Showcase
            </Text>
            <Text title1 textAlign="left">
              댄스컬 쇼케이스
            </Text>
            <Text body1 color="#555555" textAlign="left">
              수많은 세계대회를 우승한 비보이들이 선보이는
            </Text>
            <Text body1 color="#555555" textAlign="left">
              다이내믹하고 역동적인 동작들과 화려한 칼군무 공연
            </Text>
            <Btn>
              <Text body2 color="#fff" cursor="pointer">
                자세히보기
              </Text>
            </Btn>
          </Desc>
          <Photo />
        </PerformanceBox>

        <PerformanceBox>
          <Photo />
          <Desc>
            <Text subTitle6 textAlign="left">
              B-Boy Collaboration Showcase
            </Text>
            <Text title1 textAlign="left">
              비보이 콜라보레이션 쇼케이스
            </Text>
            <Text body1 color="#555555" textAlign="left">
              수많은 세계대회를 우승한 비보이들이 선보이는
            </Text>
            <Text body1 color="#555555" textAlign="left">
              다이내믹하고 역동적인 동작들과 화려한 칼군무 공연
            </Text>
            <Btn>
              <Text body2 color="#fff" cursor="pointer">
                자세히보기
              </Text>
            </Btn>
          </Desc>
        </PerformanceBox>

        <PerformanceBox>
          <Desc>
            <Text subTitle6 textAlign="left">
              Dancecal Showcase
            </Text>
            <Text title1 textAlign="left">
              댄스컬 쇼케이스
            </Text>
            <Text body1 color="#555555" textAlign="left">
              수많은 세계대회를 우승한 비보이들이 선보이는
            </Text>
            <Text body1 color="#555555" textAlign="left">
              다이내믹하고 역동적인 동작들과 화려한 칼군무 공연
            </Text>
            <Btn>
              <Text body2 color="#fff" cursor="pointer">
                자세히보기
              </Text>
            </Btn>
          </Desc>
          <Photo />
        </PerformanceBox>
      </PerformanceWrapper>
    </>
  );
};

const PerformanceWrapper = styled.div`
  margin-top: 280px;
`;
const PerformanceBox = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  margin-top: 120px;
`;
const Photo = styled.div`
  width: 740px;
  height: 360px;
  background: #a6d8b4;
`;
const Desc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: left;
  width: 450px;
  height: 230px;
  margin-left: 50px;
`;
const Btn = styled.div`
  background-color: #000000;
  width: 140px;
  height: 40px;
  padding: 10px 20px;
  box-sizing: border-box;
  cursor: pointer;
`;
export default Performance;
