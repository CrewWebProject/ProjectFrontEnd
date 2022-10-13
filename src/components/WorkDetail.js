import React from 'react';
import { Modal, Text } from '../elements/index';
import styled from 'styled-components';
import Swiper from './Swiper';

const WorkDetail = () => {
  return (
    <Modal>
      <Contain>
        <Section1>
          <Img></Img>
          <div>
            <CardBtn>
              <Text body2 textAlign="center" color="#888888">
                지원사업
              </Text>
            </CardBtn>
            <Title>
              <Text subTitle1 textAlign="left">
                2021 온라인 문화예술 활동지원 "비보이 문화학교"
              </Text>
            </Title>
            <Desc>
              <Section2>
                <Text body2 width="63px" textAlign="left">
                  주최/주관
                </Text>
                <div>카이크루</div>
              </Section2>
              <Section2>
                <Text body2 width="63px" textAlign="left">
                  후원
                </Text>
                <div>울산광역시, 울산문화재단</div>
              </Section2>
              <Section2>
                <Text body2 width="63px" textAlign="left">
                  협력
                </Text>
                <div>SO엔터테인먼트, 카이댄스컴퍼니, 레디투샷, 울산브레이킹협회</div>
              </Section2>
              <Section2>
                <Text body2 width="63px" textAlign="left">
                  일시
                </Text>
                <div>2021년 12월 18일 (토) 18:00</div>
              </Section2>
              <Section2>
                <Text body2 width="63px" textAlign="left">
                  스트리밍
                </Text>
                <div>YOUTUBE 카이크루TV</div>
              </Section2>
              <Section2>
                <Text body2 width="63px" textAlign="left">
                  프로그램
                </Text>
                <div>
                  <li>비보이, 비걸의 탄생</li>
                  <li>브렝킹의 현재 모습과 앞으로의 비전</li>
                  <li>브레이킹 함께 배워보기</li>
                </div>
              </Section2>
            </Desc>
          </div>
        </Section1>
        <Slide>
          <Swiper />
        </Slide>
        <Section3>
          <h3>온라인 문화예술 활동지원 "비보이문화학교"</h3>
          <div>
            2024년 프랑스 파리 올림픽 정식종목으로 채택된 "브레이킹" 울산광역시 홍보대사 "카이크루"와 함께 "브레이킹"의
            역사와 유래에 대하여 알아보고, 동작들을 배워 시민들에게 문화예술활동의 향유를 제공하고자 합니다. 리 올림픽
            정식종목으로 채택된 "브레이킹" 울산광역시 홍보대사 "카이크루"와 함께 "브레이킹"의 역사와 유래에 대하여
            알아보고, 동작들을 배워 시민들에게 문화예술활동의 향유를 제공하고자 합니다. 프랑스 파리울산광역시 홍보대사
            "카이크루"와 알아보고, 동작들을 배워 시민들에게 문화예술활동의 향유를 제공하고자 합니다. 함께 "브레이킹"의
            역사와 유래에 대하여 알아보고, 동작들을 배워 시민들에게 문화예술활동의 향유를 제공하고자 합니다. 울산광역시
            홍보대사 "카이크루"와 함께 "브레이킹"의 역사와 유래에 대하여 알아보고, 동작들을 배워 시민들에게
            문화예술활동의 향유를 제공하고자 합니다.프랑스 파리울산광역시 홍보대사 "카이크루"와 알아보고, 동작들을 배워
            시민들에게 문화예술활동의 향유를 제공하고자 합니다. 함께 "브레이킹"의 역사와 유래에 대하여 알아보고,
            동작들을 배워 시민들에게 문화예술활동의 향유를 제공하고자 합니다.
          </div>
        </Section3>
        <IconDIv>
          <IconBtn>
            <Text header1 color="white" lineHeight="40px">
              문의 상담
            </Text>
          </IconBtn>
          <IconBtn> 카이크루TV</IconBtn>
        </IconDIv>
      </Contain>
    </Modal>
  );
};

export default WorkDetail;

const Contain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* width: 86.1111vw;
  height: 76.9444vw; */
  max-width: 1180px;
  max-height: 1108px;
  background-color: #ffffff;
  padding: 80px 100px;
  overflow: scroll;
`;

const Section1 = styled.div`
  width: 1060px;
  height: 360px;
  display: flex;
`;

const Img = styled.div`
  width: 540px;
  height: 360px;
  background-color: #a6d8b4;
  margin-right: 40px;
`;

const Title = styled.div`
  width: 360px;
  height: 68px;
  margin-bottom: 24px;
`;

const Desc = styled.div`
  height: 190px;
  overflow: scroll;
  overflow-x: hidden;
`;
const Section2 = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 6px;
`;

const CardBtn = styled.div`
  width: max-content;
  padding: 4px 26px;
  background-color: #ececec;
  height: 20px;
  margin: 20px 0 6px 0;
`;

const Slide = styled.div`
  width: 1040px;
  height: 200px;
`;

const Section3 = styled.div`
  width: 1040px;
  height: max-content;
`;

const IconDIv = styled.div`
  display: flex;
  gap: 16px;
  text-align: center;
  line-height: 40px;
  margin-top: 40px;
`;

const IconBtn = styled.div`
  width: 140px;
  height: 40px;
  background-color: #000000;
  color: white;
`;
const IconBtn2 = styled.div``;
