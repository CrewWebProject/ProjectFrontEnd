import React from 'react';

import styled from 'styled-components';
import { Text } from '../../elements/index';
import { ReactComponent as Arrow } from '../../Icons/arrow/Arrow.svg';
import { ReactComponent as ArrowDown } from '../../Icons/arrow/arrow-down.svg';
import { ReactComponent as Instagram } from '../../Icons/SNS/instagram-w.svg';
import { ReactComponent as Youtube } from '../../Icons/SNS/youtube-w.svg';
import CAY from '../../Icons/sample/2022-07-06 17-16-17.mp4';
import Performance from './atoms/Performance';

const Main = () => {
  return (
    <>
      {/* 동영상 삽입 부분 */}
      <VideoBox>
        <video src={CAY} type="video/mp4" preload="auto" autoPlay loop muted controls />
        <VideoContainer>
          <Text headline color="#fff" textAlign="left">
            CAY
          </Text>
          <Text headline color="#fff" textAlign="left">
            CREW ?
            <Arrow style={{ paddingLeft: '50px', cursor: 'pointer' }} />
          </Text>
          <ArrowBox>
            <Text body3 color="#fff" textAlign="left">
              scroll down
            </Text>
            <ArrowDown />
          </ArrowBox>
        </VideoContainer>
      </VideoBox>

      {/* 카이크루퍼포먼스 공연안내 */}
      <Performance />

      {/* 카이크루인포 */}
      <InfoBox>
        <CayLink
          onClick={() => {
            window.open('https://www.instagram.com/caycrew1999/');
          }}
        >
          <Instagram
            style={{
              paddingRight: '19.04px',
            }}
          />
          <Text subTitle3 color="#fff">
            caycrew1999
          </Text>
          <Arrow style={{ paddingLeft: '20px' }} />
        </CayLink>
        <CayLink
          onClick={() => {
            window.open('https://www.youtube.com/c/%EC%B9%B4%EC%9D%B4%ED%81%AC%EB%A3%A8CAYCREWTV');
          }}
        >
          <Youtube
            style={{
              paddingRight: '19.04px',
            }}
          />
          <Text subTitle3 color="#fff">
            caycrew TV
          </Text>
          <Arrow style={{ paddingLeft: '20px' }} />
        </CayLink>
      </InfoBox>

      <CayVideoWrapper>
        <CayVideoContainer>
          <CayVideo />
          <CayTitle>
            <Text title2 color="#fff" textAlign="left">
              CAY -
            </Text>
            <Text title2 color="#fff" textAlign="left">
              LATEST
            </Text>
            <Text title2 color="#fff" textAlign="left">
              VIDEOS
            </Text>
          </CayTitle>
        </CayVideoContainer>
        <VideoBoxWrapper>
          <CayVideoBox />
          <CayVideoBox />
          <CayVideoBox />
          <CayVideoBox />
        </VideoBoxWrapper>
      </CayVideoWrapper>
    </>
  );
};

const VideoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1440px;
  height: 900px;
  margin: auto;
  /* position: relative; */
`;

const VideoContainer = styled.div`
  width: 476px;
  position: absolute;
`;

const ArrowBox = styled.div`
  display: flex;
  padding-top: 100px;
`;

const InfoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 171px;
`;

const CayLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 126px;
  background-color: #000000;
  border: 1px solid #fff;
  cursor: pointer;
`;

const CayVideoWrapper = styled.div`
  width: 100%;
  height: 1070px;
  background-color: #000000;
  margin: auto;
`;

const CayVideoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1240px;
  height: 540px;
  margin: auto;
  padding-top: 180px;
`;

const CayVideo = styled.div`
  width: 924px;
  height: 540px;
  background-color: #e49494;
`;

const CayTitle = styled.div`
  width: 310px;
  padding: 0px 0px 381px 20px;
  box-sizing: border-box;
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

const CayVideoBox = styled.div`
  height: 210px;
  background: #e49494;
`;
export default Main;
