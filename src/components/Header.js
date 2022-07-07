import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import { history } from "../redux/configureStore";
import { Text } from "../elements/index";

//icons
import { ReactComponent as Cate } from "../Icons/SNS/cate.svg";

const Header = () => {
  const isMobile = useMediaQuery({
    query: "(max-width:1200px)",
  });
  if (isMobile) {
    return (
      <Box>
        <Container>
          <M_Logo>LOGO</M_Logo>
          <M_Menu>
            <Cate />
          </M_Menu>
        </Container>
      </Box>
    );
  }
  return (
    <Box>
      <Container>
        <Logo onClick={() => history.push("/")}>LOGO</Logo>
        <Menu>
          <div>
            <Text header2 cursor="pointer">
              ABOUT US
            </Text>
          </div>
          <div>
            <Text header2 cursor="pointer">
              PERFORMANCE
            </Text>
          </div>
          <div onClick={() => history.push("/works")}>
            <Text header2 cursor="pointer">
              WORKS
            </Text>
          </div>
          <div>
            <Text header2 cursor="pointer">
              ACADEMY
            </Text>
          </div>
          <div>
            <Text header1 cursor="pointer">
              문의하기
            </Text>
          </div>
          <Burger>
            <Cate />
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
  height: 80px;
  padding: 10px;
  background: rgba(249, 249, 249, 0.76);
`;

const Logo = styled.div`
  margin-left: 100px;
  cursor: pointer;
`;

const M_Logo = styled.div`
  margin-left: 50px;
  cursor: pointer;
`;

const Menu = styled.div`
  display: flex;
  gap: 32.2px;
  width: max-content;
  margin-right: 100px;
`;

const M_Menu = styled.div`
  display: flex;
  justify-content: space-around;
  width: max-content;
  margin-right: 40px;
  cursor: pointer;
`;

const Burger = styled.div`
  /* line-height: 40px;
  font-size: 24px;
  text-align: center; */
  cursor: pointer;
`;
