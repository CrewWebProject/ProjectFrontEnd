import React from "react";
import styled from "styled-components";

const Schedule = () => {
  return (
    <Wrap>
      <h1>JULY SCHEDULE</h1>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
  height: 1528px;
  display: flex;
  flex-direction: column;
  background-color: #000000;

  h1 {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 52px;
    color: #ffffff;
    margin: 120px 0px 80px 100px;
  }
`;

export default Schedule;
