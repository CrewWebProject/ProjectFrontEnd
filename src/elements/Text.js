import React from 'react';
import styled from 'styled-components';

const Text = (props) => {
  const {
    title1,
    subTitle1,
    subTitle2,
    header1,
    body1,
    body2,
    sub1,
    headline,
    title2,
    subTitle3,
    subTitle4,
    subTitle5,
    subTitle6,
    header2,
    body3,
    _onClick,
    _style,
    children,
    margin,
    color,
    size,
    cursor,
    textAlign,
    lineHeight,
    bg,
    width,
  } = props;

  const styles = {
    margin: margin,
    color: color,
    size: size,
    cursor: cursor,
    textAlign: textAlign,
    lineHeight: lineHeight,
    bg: bg,
    width: width,
  };

  if (title1) {
    return (
      <Title1 style={_style} onClick={_onClick} {...styles}>
        {children}
      </Title1>
    );
  }
  if (subTitle1) {
    return (
      <SubTitle1 style={_style} onClick={_onClick} {...styles}>
        {children}
      </SubTitle1>
    );
  }
  if (subTitle2) {
    return (
      <SubTitle2 style={_style} onClick={_onClick} {...styles}>
        {children}
      </SubTitle2>
    );
  }
  if (header1) {
    return (
      <Header1 style={_style} onClick={_onClick} {...styles}>
        {children}
      </Header1>
    );
  }
  if (body1) {
    return (
      <Body1 style={_style} onClick={_onClick} {...styles}>
        {children}
      </Body1>
    );
  }
  if (body2) {
    return (
      <Body2 style={_style} onClick={_onClick} {...styles}>
        {children}
      </Body2>
    );
  }
  if (sub1) {
    return (
      <Sub1 style={_style} onClick={_onClick} {...styles}>
        {children}
      </Sub1>
    );
  }
  if (headline) {
    return (
      <Headline style={_style} onClick={_onClick} {...styles}>
        {children}
      </Headline>
    );
  }
  if (title2) {
    return (
      <Title2 style={_style} onClick={_onClick} {...styles}>
        {children}
      </Title2>
    );
  }
  if (subTitle3) {
    return (
      <SubTitle3 style={_style} onClick={_onClick} {...styles}>
        {children}
      </SubTitle3>
    );
  }
  if (subTitle4) {
    return (
      <SubTitle4 style={_style} onClick={_onClick} {...styles}>
        {children}
      </SubTitle4>
    );
  }
  if (subTitle5) {
    return (
      <SubTitle5 style={_style} onClick={_onClick} {...styles}>
        {children}
      </SubTitle5>
    );
  }
  if (subTitle6) {
    return (
      <SubTitle6 style={_style} onClick={_onClick} {...styles}>
        {children}
      </SubTitle6>
    );
  }
  if (header2) {
    return (
      <Header2 style={_style} onClick={_onClick} {...styles}>
        {children}
      </Header2>
    );
  }
  if (body3) {
    return (
      <Body3 style={_style} onClick={_onClick} {...styles}>
        {children}
      </Body3>
    );
  }
};

Text.defaultProps = {
  _onClick: () => {},
  children: null,
  margin: '0px',
  color: '#000000',
  size: '18px',
  cursor: 'default',
  textAlign: 'center',
  lineHeight: '24px',
  bg: '',
};

const Title1 = styled.p`
  font-family: 'Pretendard';
  font-weight: 700;
  ${(props) => (props.color ? `color: ${props.color}` : '')};
  font-size: 36px;
  line-height: 42px;
  background-color: ${(props) => props.bg};
  ${(props) => (props.margin ? `margin: ${props.margin};` : '')};
  ${(props) => (props.cursor ? `cursor: ${props.cursor};` : '')};
  ${(props) => (props.textAlign ? `text-align: ${props.textAlign};` : '')};
`;

const SubTitle1 = styled.p`
  font-family: 'Pretendard';
  font-weight: 700;
  ${(props) => (props.color ? `color: ${props.color}` : '')};
  font-size: 24px;
  line-height: 34px;
  background-color: ${(props) => props.bg};
  ${(props) => (props.margin ? `margin: ${props.margin};` : '')};
  ${(props) => (props.cursor ? `cursor: ${props.cursor};` : '')};
  ${(props) => (props.textAlign ? `text-align: ${props.textAlign};` : '')};
`;

const SubTitle2 = styled.p`
  font-family: 'Pretendard';
  font-weight: 500;
  ${(props) => (props.color ? `color: ${props.color}` : '')};
  font-size: 24px;
  line-height: 34px;
  background-color: ${(props) => props.bg};
  ${(props) => (props.margin ? `margin: ${props.margin};` : '')};
  ${(props) => (props.cursor ? `cursor: ${props.cursor};` : '')};
  ${(props) => (props.textAlign ? `text-align: ${props.textAlign};` : '')};
`;

const Header1 = styled.p`
  font-family: 'Pretendard';
  font-weight: 500;
  ${(props) => (props.color ? `color: ${props.color}` : '')};
  font-size: 16px;
  line-height: 28px;
  background-color: ${(props) => props.bg};
  ${(props) => (props.margin ? `margin: ${props.margin};` : '')};
  ${(props) => (props.cursor ? `cursor: ${props.cursor};` : '')};
  ${(props) => (props.textAlign ? `text-align: ${props.textAlign};` : '')};
`;

const Body1 = styled.p`
  font-family: 'Pretendard';
  font-weight: 400;
  ${(props) => (props.color ? `color: ${props.color}` : '')};
  font-size: 16px;
  line-height: 24px;
  padding: 16px 12px;
  background-color: ${(props) => props.bg};
  ${(props) => (props.margin ? `margin: ${props.margin};` : '')};
  ${(props) => (props.cursor ? `cursor: ${props.cursor};` : '')};
  ${(props) => (props.textAlign ? `text-align: ${props.textAlign};` : '')};
`;

const Body2 = styled.p`
  font-family: 'Pretendard';
  font-weight: 700;
  ${(props) => (props.color ? `color: ${props.color}` : '')};
  font-size: 14px;
  line-height: 20px;
  background-color: ${(props) => props.bg};
  ${(props) => (props.margin ? `margin: ${props.margin};` : '')};
  ${(props) => (props.cursor ? `cursor: ${props.cursor};` : '')};
  ${(props) => (props.textAlign ? `text-align: ${props.textAlign};` : '')};
  ${(props) => (props.width ? `width: ${props.width};` : '')};
`;

const Sub1 = styled.p`
  font-family: 'Pretendard';
  font-weight: 400;
  ${(props) => (props.color ? `color: ${props.color}` : '')};
  font-size: 12px;
  line-height: 24px;
  background-color: ${(props) => props.bg};
  ${(props) => (props.margin ? `margin: ${props.margin};` : '')};
  ${(props) => (props.cursor ? `cursor: ${props.cursor};` : '')};
  ${(props) => (props.textAlign ? `text-align: ${props.textAlign};` : '')};
`;

const Headline = styled.p`
  font-family: 'Gmarket Sans TTF';
  font-weight: 700;
  ${(props) => (props.color ? `color: ${props.color}` : '')};
  font-size: 76px;
  line-height: 100px;
  background-color: ${(props) => props.bg};
  ${(props) => (props.margin ? `margin: ${props.margin};` : '')};
  ${(props) => (props.cursor ? `cursor: ${props.cursor};` : '')};
  ${(props) => (props.textAlign ? `text-align: ${props.textAlign};` : '')};
`;

const Title2 = styled.p`
  font-family: 'Gmarket Sans TTF';
  font-weight: 700;
  ${(props) => (props.color ? `color: ${props.color}` : '')};
  font-size: 40px;
  line-height: 52px;
  background-color: ${(props) => props.bg};
  ${(props) => (props.margin ? `margin: ${props.margin};` : '')};
  ${(props) => (props.cursor ? `cursor: ${props.cursor};` : '')};
  ${(props) => (props.textAlign ? `text-align: ${props.textAlign};` : '')};
`;

const SubTitle3 = styled.p`
  font-family: 'Gmarket Sans TTF';
  font-weight: 700;
  ${(props) => (props.color ? `color: ${props.color}` : '')};
  font-size: 24px;
  line-height: 34px;
  background-color: ${(props) => props.bg};
  ${(props) => (props.margin ? `margin: ${props.margin};` : '')};
  ${(props) => (props.cursor ? `cursor: ${props.cursor};` : '')};
  ${(props) => (props.textAlign ? `text-align: ${props.textAlign};` : '')};
`;

const SubTitle4 = styled.p`
  font-family: 'Gmarket Sans TTF';
  font-weight: 500;
  ${(props) => (props.color ? `color: ${props.color}` : '')};
  font-size: 24px;
  line-height: 34px;
  background-color: ${(props) => props.bg};
  ${(props) => (props.margin ? `margin: ${props.margin};` : '')};
  ${(props) => (props.cursor ? `cursor: ${props.cursor};` : '')};
  ${(props) => (props.textAlign ? `text-align: ${props.textAlign};` : '')};
`;

const SubTitle5 = styled.p`
  font-family: 'Gmarket Sans TTF';
  font-weight: 700;
  ${(props) => (props.color ? `color: ${props.color}` : '')};
  font-size: 20px;
  line-height: 30px;
  background-color: ${(props) => props.bg};
  ${(props) => (props.margin ? `margin: ${props.margin};` : '')};
  ${(props) => (props.cursor ? `cursor: ${props.cursor};` : '')};
  ${(props) => (props.textAlign ? `text-align: ${props.textAlign};` : '')};
`;

const SubTitle6 = styled.p`
  font-family: 'Gmarket Sans TTF';
  font-weight: 700;
  ${(props) => (props.color ? `color: ${props.color}` : '')};
  font-size: 16px;
  line-height: 28px;
  background-color: ${(props) => props.bg};
  ${(props) => (props.margin ? `margin: ${props.margin};` : '')};
  ${(props) => (props.cursor ? `cursor: ${props.cursor};` : '')};
  ${(props) => (props.textAlign ? `text-align: ${props.textAlign};` : '')};
`;

const Header2 = styled.p`
  font-family: 'Gmarket Sans TTF';
  font-weight: 500;
  ${(props) => (props.color ? `color: ${props.color}` : '')};
  font-size: 14px;
  line-height: 28px;
  background-color: ${(props) => props.bg};
  ${(props) => (props.margin ? `margin: ${props.margin};` : '')};
  ${(props) => (props.cursor ? `cursor: ${props.cursor};` : '')};
  ${(props) => (props.textAlign ? `text-align: ${props.textAlign};` : '')};
`;

const Body3 = styled.p`
  font-family: 'Gmarket Sans TTF';
  font-weight: 500;
  ${(props) => (props.color ? `color: ${props.color}` : '')};
  font-size: 14px;
  line-height: 20px;
  background-color: ${(props) => props.bg};
  ${(props) => (props.margin ? `margin: ${props.margin};` : '')};
  ${(props) => (props.cursor ? `cursor: ${props.cursor};` : '')};
  ${(props) => (props.textAlign ? `text-align: ${props.textAlign};` : '')};
`;
export default Text;
