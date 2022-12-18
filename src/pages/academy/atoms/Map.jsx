/* global kakao */
import React, { useEffect } from 'react';
import { useRef } from 'react';
import styled from 'styled-components';
import KakaoTalk from '../../../Icons/SNS/kakaotalk.png';
const { kakao } = window;

const Map = () => {
  const container = useRef(null);
  const options = {
    center: new window.kakao.maps.LatLng(35.85133, 127.734086),
    level: 3,
  };
  useEffect(() => {
    let map = new kakao.maps.Map(container.current, options);
    let geocoder = new kakao.maps.services.Geocoder();
    geocoder.addressSearch('울산 중구 중앙길 90-2', function (result, status) {
      if (status === kakao.maps.services.Status.OK) {
        let coords = new kakao.maps.LatLng(result[0].y, result[0].x);
        let marker = new kakao.maps.Marker({
          map: map,
          position: coords,
        });

        // 장소에 대한 설명 표시
        let infowindow = new kakao.maps.InfoWindow({
          content: '<div style="width:150px;text-align:center;padding:6px 0;">카이크루</div>',
        });
        infowindow.open(map, marker);

        // 지도의 중심 위치 이동
        map.setCenter(coords);
      }
    });
    return () => {};
  }, []);
  return (
    <Wrap>
      <MapBox ref={container}></MapBox>
      <Footer>
        <div className='left'>
          <div>
            <p className='title'>주소</p>
            <p className='content'>
              울산 중구 중앙길 90-2 3층 카이댄스학원
              <br />
              (막창IN성남 건물 3층)
            </p>
          </div>
          <div>
            <p className='title'>전화</p>
            <p className='content'>052-246-8359</p>
          </div>
        </div>
        <div className='right'>
          <p>카카오톡 "카이댄스학원"에서 연습실 대관 및 수강 문의가 가능합니다.</p>
          <div>
            <img src={KakaoTalk} />
            <span>상담 및 문의하기</span>
          </div>
        </div>
        <div></div>
      </Footer>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
  height: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Pretendard';
  font-style: normal;

  h2 {
    font-weight: 400;
    font-size: 36px;
    line-height: 54px;
    color: #000000;
    margin: 120px 0px 80px 100px;
  }
`;

const MapBox = styled.div`
  width: 1240px;
  height: 604px;
`;

const Footer = styled.div`
  width: 1240px;
  min-height: 100px;
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .left {
    width: 50%;
    height: 100%;

    display: flex;
    flex-direction: column;

    div {
      display: flex;
      flex-direction: row;
      margin-bottom: 40px;
    }

    p {
      margin-right: 50px;
      margin-top: 0px;
    }

    .title {
      font-weight: 700;
      color: #000000;
      font-size: 14px;
    }

    .content {
      font-weight: 400;
      color: #555555;
      font-size: 16px;
    }
  }

  .right {
    width: 50%;
    height: 100%;

    p {
      margin: 0px;
      font-weight: 400;
      color: #555555;
      font-size: 16px;
    }

    div {
      width: 170px;
      height: 40px;
      border: 1px solid black;
      margin-top: 20px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      img {
        display: block;
        width: 30px;
        height: 30px;
        margin: 0px;
        margin-right: 7px;
      }

      span {
        display: block;
        margin: 0px;
        font-weight: 700;
        font-size: 14px;
        color: #000000;
      }

      :hover {
        cursor: pointer;
      }
    }
  }
`;

export default Map;
