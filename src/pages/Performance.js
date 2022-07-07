import React from "react";

import styled from "styled-components";
import { Text } from "../elements/index";
//arrow-short 90도로 회전해야댐 현재는 오른쪽 방향을 가리킴 따라서 arrow-down으로 임시적 사용
import { ReactComponent as Arrow } from "../Icons/arrow/arrow-down.svg";

import DetailPerformance from "../components/DetailPerformance";

const Performance = () => {
  const [open1, setOpen1] = React.useState(false);
  const close1 = () => {
    setOpen1(false);
  };
  const [open2, setOpen2] = React.useState(false);
  const close2 = () => {
    setOpen2(false);
  };
  const [open3, setOpen3] = React.useState(false);
  const close3 = () => {
    setOpen3(false);
  };
  const [open4, setOpen4] = React.useState(false);
  const close4 = () => {
    setOpen4(false);
  };

  return (
    <>
      {open1 ? (
        <DetailPerformance close={close1} />
      ) : (
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
            <Arrow
              style={{ cursor: "pointer" }}
              onClick={() => {
                setOpen1(true);
              }}
            />
          </Title>
        </Wrapper>
      )}

      {open2 ? (
        <DetailPerformance close={close2} />
      ) : (
        <Wrapper>
          <Title>
            <div>
              <Text header2 color="#fff" textAlign="left">
                Traditional Fusion Showcase
              </Text>
              <Text subTitle1 color="#fff" textAlign="left">
                트래디셔녈 퓨전 쇼케이스
              </Text>
            </div>
            <Arrow
              style={{ cursor: "pointer" }}
              onClick={() => {
                setOpen2(true);
              }}
            />
          </Title>
        </Wrapper>
      )}

      {open3 ? (
        <DetailPerformance close={close3} />
      ) : (
        <Wrapper>
          <Title>
            <div>
              <Text header2 color="#fff" textAlign="left">
                Dancecal Showcase
              </Text>
              <Text subTitle1 color="#fff" textAlign="left">
                댄스컬 쇼케이스
              </Text>
            </div>
            <Arrow
              style={{ cursor: "pointer" }}
              onClick={() => {
                setOpen3(true);
              }}
            />
          </Title>
        </Wrapper>
      )}

      {open4 ? (
        <DetailPerformance close={close4} />
      ) : (
        <Wrapper>
          <Title>
            <div>
              <Text header2 color="#fff" textAlign="left">
                B-Boy Collaboration Showcase
              </Text>
              <Text subTitle1 color="#fff" textAlign="left">
                비보이 콜라보레이션 쇼케이스
              </Text>
            </div>
            <Arrow
              style={{ cursor: "pointer" }}
              onClick={() => {
                setOpen4(true);
              }}
            />
          </Title>
        </Wrapper>
      )}
    </>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 320px;
  background-color: #93a0e2;
  border-bottom: 2px solid #fff;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1228.25px;
  padding-top: 129px;
  margin: auto;
`;

export default Performance;
