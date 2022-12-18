import React from 'react';
import styled from 'styled-components';
import Class from './atoms/Class';
import Title from './atoms/Title';
import Map from './atoms/Map';
import Schedule from './atoms/Schedule';

const Academy = () => {
  return (
    <Wrap>
      <Title />
      <Class />
      <Schedule />
      <Map />
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 1440px;
  /* padding-top: 100px; */
  margin: 0 auto;
`;

export default Academy;
