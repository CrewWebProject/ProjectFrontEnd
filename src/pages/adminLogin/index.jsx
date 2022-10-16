import React from 'react';
import styled from 'styled-components';
import Login from './atoms/Login';

const index = () => {
  return (
    <Container>
      <Login/>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 600px;
`;

export default index;
