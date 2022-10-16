import React from 'react'
import styled from 'styled-components'
import { Text } from '../../../elements/index';

const Admin = () => {
  return (
      <Container>
          <Header>
              <Text subTitle6>HOME  페이지관리</Text>
              <Text sub1>로그아웃</Text>
          </Header>
          <MainBox>
              <TitleBox>
                  <Text header1 color='#000' textAlign='left'>메인화면</Text>
              </TitleBox>
              <ContentBox>
                  <Text body1 color='#000' textAlign='left'>https://www.youtube.com/watch?v=6XtmjmcAtdA</Text>
                  <hr style={{marginTop: '-10px'}}/>
                  <Text sub1 color='#8B8B8B' textAlign='left'>예시 설명) 메인 화면에 보여지는 영상의 링크를 첨부해주세요. ( 웹에 올려져 있는 영상만 가능합니다 )</Text>
              </ContentBox>
          </MainBox>

          <Box>
              <TitleBox>
                   <Text header1 color='#000'>퍼포먼스 공연소개</Text>
              </TitleBox>
              <ContentContainer>
                  <Title>
                      <Text body4 color='#8B8B8B' textAlign='left'>컨텐츠 1</Text>
                  </Title>
                  <ContentTitle>
                      <Text body4 color='#8B8B8B' textAlign='left'>타이틀(한글)</Text>
                      <Text body4 color='#8B8B8B' textAlign='left'>서브타이틀(영어)</Text>
                      <Text body4 color='#8B8B8B' textAlign='left'>간단한 소개</Text>
                  </ContentTitle>
                  <ContentWrap>
                    <ContentBox>
                        <Text body1 color='#000' textAlign='left'>오리지널 비보이 쇼케이스</Text>
                        <hr  style={{marginTop: '-10px'}}/>
                    </ContentBox>
                    <ContentBox>
                        <Text body1 color='#000' textAlign='left'>Original B-Boy Showcase</Text>
                        <hr style={{marginTop: '-10px'}}/>
                    </ContentBox>
                    <ContentBox>
                        <Text body1 color='#000' textAlign='left'>수많은 세계대회를 우승한 비보이들이 선보이는 다이내믹하고 역동적인 동작들과 화려한 칼군무 공연 </Text>
                        <hr  style={{marginTop: '-10px'}}/>
                    </ContentBox>
                  </ContentWrap>
              </ContentContainer>
              
              <ContentContainer>
                  <Title>
                      <Text body4 color='#8B8B8B' textAlign='left'>컨텐츠 2</Text>
                  </Title>
                  <ContentTitle>
                      <Text body4 color='#8B8B8B' textAlign='left'>타이틀(한글)</Text>
                      <Text body4 color='#8B8B8B' textAlign='left'>서브타이틀(영어)</Text>
                      <Text body4 color='#8B8B8B' textAlign='left'>간단한 소개</Text>
                  </ContentTitle>
                  <ContentWrap>
                    <ContentBox>
                        <Text body1 color='#000' textAlign='left'>트랜디셔널 퓨젼 쇼케이스</Text>
                        <hr  style={{marginTop: '-10px'}}/>
                    </ContentBox>
                    <ContentBox>
                        <Text body1 color='#000' textAlign='left'>Traditional Fusion Showcase</Text>
                        <hr style={{marginTop: '-10px'}}/>
                    </ContentBox>
                    <ContentBox>
                        <Text body1 color='#000' textAlign='left'>수많은 세계대회를 우승한 비보이들이 선보이는 다이내믹하고 역동적인 동작들과 화려한 칼군무 공연 </Text>
                        <hr  style={{marginTop: '-10px'}}/>
                    </ContentBox>
                  </ContentWrap>
              </ContentContainer>
              

              <ContentContainer>
                  <Title>
                      <Text body4 color='#8B8B8B' textAlign='left'>컨텐츠 3</Text>
                  </Title>
                  <ContentTitle>
                      <Text body4 color='#8B8B8B' textAlign='left'>타이틀(한글)</Text>
                      <Text body4 color='#8B8B8B' textAlign='left'>서브타이틀(영어)</Text>
                      <Text body4 color='#8B8B8B' textAlign='left'>간단한 소개</Text>
                  </ContentTitle>
                  <ContentWrap>
                    <ContentBox>
                        <Text body1 color='#000' textAlign='left'>댄스컬 쇼케이스</Text>
                        <hr  style={{marginTop: '-10px'}}/>
                    </ContentBox>
                    <ContentBox>
                        <Text body1 color='#000' textAlign='left'>Dancecal Showcase</Text>
                        <hr style={{marginTop: '-10px'}}/>
                    </ContentBox>
                    <ContentBox>
                        <Text body1 color='#000' textAlign='left'>수많은 세계대회를 우승한 비보이들이 선보이는 다이내믹하고 역동적인 동작들과 화려한 칼군무 공연 </Text>
                        <hr  style={{marginTop: '-10px'}}/>
                    </ContentBox>
                  </ContentWrap>
              </ContentContainer>
              


              <ContentContainer>
                  <Title>
                      <Text body4 color='#8B8B8B' textAlign='left'>컨텐츠 4</Text>
                  </Title>
                  <ContentTitle>
                      <Text body4 color='#8B8B8B' textAlign='left'>타이틀(한글)</Text>
                      <Text body4 color='#8B8B8B' textAlign='left'>서브타이틀(영어)</Text>
                      <Text body4 color='#8B8B8B' textAlign='left'>간단한 소개</Text>
                  </ContentTitle>
                  <ContentWrap>
                    <ContentBox>
                        <Text body1 color='#000' textAlign='left'>비보이 콜라보레이션 쇼케이스</Text>
                        <hr  style={{marginTop: '-10px'}}/>
                    </ContentBox>
                    <ContentBox>
                        <Text body1 color='#000' textAlign='left'>B-Boy Collaboration Showcase</Text>
                        <hr style={{marginTop: '-10px'}}/>
                    </ContentBox>
                    <ContentBox>
                        <Text body1 color='#000' textAlign='left'>수많은 세계대회를 우승한 비보이들이 선보이는 다이내믹하고 역동적인 동작들과 화려한 칼군무 공연 </Text>
                        <hr  style={{marginTop: '-10px'}}/>
                    </ContentBox>
                  </ContentWrap>
            </ContentContainer>

          </Box>

    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    background-color: #ECECEC;
    display: flex;
    flex-direction: column;
`

const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px 30px;
    gap: 5px;
    width: 100%;
    height: 60px;
    background: #FFFFFF;
    box-sizing: border-box;
`
const MainBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 30px;
    gap: 15px;
    width: 100%;
    /* height: 127px; */
    background: #FFFFFF;
    margin-top: 30px;
    box-sizing: border-box;
`

const Box = styled.div`
    display: flex;
    flex-direction: column;
    /* align-items: flex-start; */
    padding: 30px;
    gap: 15px;
    width: 100%;
    /* height: 127px; */
    background: #FFFFFF;
    margin-top: 30px;
    box-sizing: border-box;
    /* border: 1px solid red; */

`

const TitleBox = styled.div`
    width: 300px;
    display: flex;
    flex-direction: row;
    height: 60px;
    align-items: center;
    /* background-color: pink; */

`
const ContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    /* justify-content: space-around; */
    /* background-color: pink; */
    width: 100%;
    margin-bottom: 40px;
    /* box-sizing: border-box; */
`
const Title = styled.div`
    width: 150px;
    /* border: 1px solid red; */
`
const ContentTitle = styled.div`
    /* border: 1px solid green; */
    width: 180px;
`
const ContentWrap = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    /* border: 1px solid red; */
`
const ContentBox = styled.div`
    width: 100%;
    /* background-color: tomato; */
`
export default Admin