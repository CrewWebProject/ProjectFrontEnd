// 자주 사용하는 색을 객체로 만들자.
const colors = {
  black: "#000000",
  gray_700: "#333333",
  gray_500: "#555555",
  gray_400: "#8B8B8B",
  gray_300: "#C1C1C1",
  gray_200: "#ECECEC",
  white: "#FFFFFF",
};

const font = {
  family: {
    kr: `'Pretendard'`,
    en: `'Gmarket Sans TTF'`,
  },
  weight: {
    bold: 700,
    medium: 500,
    regular: 400,
  },
};

const size = {
  desktop: "1440px",
  web: "768px",
  isMobile: "767px",
};

// 미디어 쿼리의 중복 코드를 줄이기위해 정의된 변수입니다
const device = {
  mobile: `only screen and (max-width: ${size.mobile})`,
  desktopL: `only screen and (max-width: ${size.desktop})`,
  web: `only screen and (min-width: ${size.web})`,
  isMobile: `only screen and (max-width: ${size.isMobile})`,
};

// 자주 사용하는 스타일 속성을 theme으로 만들어보자.
const common = {
  flexCenter: `
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  flexCenterColumn: `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
};

// theme 객체에 감싸서 반환한다.
const theme = {
  font,
  colors,
  common,
  device,
};

export default theme;
