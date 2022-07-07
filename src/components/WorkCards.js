import React from "react";
import styled from "styled-components";
import { Text } from "../elements/index";

const WorkCards = () => {
  return (
    <Container>
      <Card></Card>
      <CardText>
        <Text body1 textAlign="left">
          2022 울산시립미술관 '어느정도 예술공동체 :
          부기우기미술관'dddd46854865dddddddd
        </Text>
      </CardText>
    </Container>
  );
};

export default WorkCards;

const Container = styled.div`
  width: 295px;
  height: 375px;
  margin-bottom: 30px;
`;

const Card = styled.div`
  width: 295px;
  height: 295px;
  background-color: #a6d8b4;
`;

const CardText = styled.p`
  margin: 0;
  width: 295px;
  height: 75px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
