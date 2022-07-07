import React from "react";
import { Text } from "../elements/index";
import styled from "styled-components";
import WorkCards from "../components/WorkCards";

const Works = () => {
  return (
    <>
      <Wrapper>
        <Container>
          <Text title2 margin="0 0 0 100px" font-weight="700">
            WORK
          </Text>
          <Text header1 margin="0 100px 0 0">
            <Title>
              <div>전체</div>
              <div>공연</div>
              <div>오디션</div>
              <div>지원사업</div>
            </Title>
          </Text>
        </Container>
        <CardWrap>
          <WorkCards />
          <WorkCards />
          <WorkCards />
          <WorkCards />
          <WorkCards />
          <WorkCards />
          <WorkCards />
          <WorkCards />
          <WorkCards />
          <WorkCards />
          <WorkCards />
          <WorkCards />
          <WorkCards />
          <WorkCards />
          <WorkCards />
          <WorkCards />
        </CardWrap>
        <Number>1 2 3 4</Number>
      </Wrapper>
    </>
  );
};

export default Works;

const Wrapper = styled.div`
  ${({ theme }) => theme.common.flexCenterColumn};
`;

const Container = styled.div`
  width: 1440px;
  display: flex;
  justify-content: space-between;
  height: max-content;
  margin: 109px 0 30px 0;
`;

const Title = styled.div`
  display: flex;
  gap: 30px;
  width: 276px;
  height: 50px;
  line-height: 70px;
`;

const CardWrap = styled.div`
  display: flex;
  width: 1240px;
  height: max-content;
  flex-flow: row wrap;
  /* align-items: flex-start; */
  justify-content: space-between;
`;

const Number = styled.div`
  margin-top: 90px;
`;
