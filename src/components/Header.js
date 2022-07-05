import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import { ReactIcon } from "../Icons/icon";

const Header = () => {
  const isMobile = useMediaQuery({
    query: "(max-width:850px)",
  });
  if (isMobile) {
    return (
      <Box>
        <Container>
          <M_Logo>LOGO</M_Logo>
          <M_Menu>
            <div>
              <ReactIcon.FiMenu />
            </div>
          </M_Menu>
        </Container>
      </Box>
    );
  }
  return (
    <Box>
      <Container>
        <Logo>LOGO</Logo>
        <Menu>
          <About>ABOUT US </About>
          <Performance>PERFORMANCE</Performance>
          <Works>WORKS</Works>
          <Academy>ACADEMY</Academy>
          <Contact>문의하기</Contact>
          <Burger>
            <ReactIcon.FiMenu />
          </Burger>
        </Menu>
      </Container>
    </Box>
  );
};

export default Header;

const Box = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  position: sticky;
  justify-content: space-between;
  align-items: center;
  display: flex;
  max-width: 1440px;
  width: 100%;
  height: 40px;
  padding: 10px;
  background: rgba(249, 249, 249, 0.76);
`;

const Logo = styled.div`
  margin-left: 50px;
  cursor: pointer;
`;

const M_Logo = styled.div`
  margin-left: 50px;
  cursor: pointer;
`;

const About = styled.div`
  cursor: pointer;
`;
const Performance = styled.div`
  cursor: pointer;
`;
const Works = styled.div`
  cursor: pointer;
`;
const Academy = styled.div`
  cursor: pointer;
`;
const Contact = styled.div`
  cursor: pointer;
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-around;
  line-height: 40px;
  width: 50%;
  margin-right: 40px;
`;

const M_Menu = styled.div`
  display: flex;
  justify-content: space-around;
  width: max-content;
  height: 40px;
  line-height: 40px;
  font-size: 30px;
  margin-right: 40px;
  cursor: pointer;
`;

const Burger = styled.div`
  line-height: 40px;
  font-size: 24px;
  text-align: center;
  cursor: pointer;
`;
