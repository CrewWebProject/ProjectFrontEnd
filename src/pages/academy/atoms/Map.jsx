/* global kakao */
import React, { useEffect } from "react";
import { useRef } from "react";
import styled from "styled-components";
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
    geocoder.addressSearch("울산 중구 중앙길 90-2", function (result, status) {
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
      <div></div>
      <div></div>
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
  background-color: yellow;

  h2 {
    font-family: "Pretendard";
    font-style: normal;
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

export default Map;
