import React, { Component } from 'react'
import styled from "styled-components"
import Divider from './Divider'
import { GREYACCENT } from "../constants/"
import { UITEXT } from "../uitext/"

class RecentWorkSection extends Component {
  state = {
    isExpanded: false
  }

  render() {
    const { isExpanded } = this.state

    return (
      <RecentWorkSectionView>
        <div id="recent-work-scroll-id" style={{ position: 'relative', top: '-82px'}} />      
        <RecentWorkSectionViewContainer>
          <RecentWorkH1>
            { UITEXT.recentWork.main }
          </RecentWorkH1>

          <RecentWorkP>
            { UITEXT.recentWork.sub }
          </RecentWorkP>

          <RecentWorkTriFold>
            <WorkItemContainer1>
              <ImageWrapper>
                <img alt="photo of a website on different screen sizes" src="/assets/img/bitmap2.png" />
              </ImageWrapper>
                
              <ProjectInfoContainer>
                <ProjectSubHeader>
                  { UITEXT.recentWork.works.headers.h1 }
                </ProjectSubHeader>
                    
                <ProjectDescription>
                  { UITEXT.recentWork.works.descriptions.d1 }
                </ProjectDescription>
                    
                <ProjectTechsUsed>
                  { UITEXT.recentWork.works.subHeaders.s1 }
                </ProjectTechsUsed>
                    
                <a style={{ marginTop: '10px' }} href="https://jacobwestrealestate1995.herokuapp.com/" target="blank">
                  { UITEXT.recentWork.works.linkToExternal.generic }
                </a>
              </ProjectInfoContainer>
            </WorkItemContainer1>

            <WorkItemContainer>
              <ImageWrapper>
                <img alt="photo of a website on different screen sizes" src="/assets/img/bitmap.png" />
              </ImageWrapper>
                
              <ProjectInfoContainer>
                <ProjectSubHeader>
                  { UITEXT.recentWork.works.headers.h2 }
                </ProjectSubHeader>
                    
                <ProjectDescription>
                  { UITEXT.recentWork.works.descriptions.d2 }
                </ProjectDescription>
                    
                <ProjectTechsUsed>
                  { UITEXT.recentWork.works.subHeaders.s2 }
                </ProjectTechsUsed>
                    
                <a style={{ marginTop: '10px' }} href="https://moove-it-1995.herokuapp.com/" target="blank">
                  { UITEXT.recentWork.works.linkToExternal.generic }
                </a>
              </ProjectInfoContainer>
            </WorkItemContainer>

            <WorkItemContainer>
            <ImageWrapper>
                <img alt="photos of various javascript projects" src="/assets/img/codecampchallenges.png" />
              </ImageWrapper>
                
              <ProjectInfoContainer>
                <ProjectSubHeader>
                  { UITEXT.recentWork.works.headers.h3 }
                </ProjectSubHeader>

                <ProjectDescription>
                  { UITEXT.recentWork.works.descriptions.d3 }
                </ProjectDescription>
                    
                <ProjectTechsUsed>
                  { UITEXT.recentWork.works.subHeaders.s3 }
                </ProjectTechsUsed>
                
                <CodeCampProjectsExpander isExpanded={ isExpanded }>
                  <a href="https://calculator1995.herokuapp.com/" target="blank">
                    { UITEXT.recentWork.works.linkToExternal.l1 }
                  </a>

                  <a href="https://useless-account1995.herokuapp.com/" target="blank">
                    { UITEXT.recentWork.works.linkToExternal.l2 }
                  </a>

                  <a href="https://pomodoro-1995.herokuapp.com/" target="blank">
                    { UITEXT.recentWork.works.linkToExternal.l3 }
                  </a>

                  <a href="https://twitch-1995.herokuapp.com/" target="blank">
                    { UITEXT.recentWork.works.linkToExternal.l4 }
                  </a>

                  <a href="https://simon1995.herokuapp.com/" target="blank">
                    { UITEXT.recentWork.works.linkToExternal.l5 }
                  </a>

                  <a href="https://tictactoe1995.herokuapp.com/" target="blank">
                    { UITEXT.recentWork.works.linkToExternal.l6 }
                  </a>
                </CodeCampProjectsExpander>

                <ExpandLinks onClick={() => {
                  this.setState({ isExpanded: ! isExpanded })
                }}>
                  { UITEXT.recentWork.works.linkToExternal.generic }
                </ExpandLinks>
              </ProjectInfoContainer>
            </WorkItemContainer>

            <WorkItemContainer>
              <ImageWrapper>
                <img alt="photo of my free code camp certification" src="/assets/img/certificate.png" />
              </ImageWrapper>
                
              <ProjectInfoContainer>
                <ProjectSubHeader>
                  { UITEXT.recentWork.works.headers.h4 }
                </ProjectSubHeader>

                <ProjectDescription>
                  { UITEXT.recentWork.works.descriptions.d4 }
                </ProjectDescription>
                    
                <ProjectTechsUsed>
                  { UITEXT.recentWork.works.subHeaders.s4 }
                </ProjectTechsUsed>

                <a style={{ marginTop: '10px' }} href="https://www.freecodecamp.org/certification/michaelspencer1995/legacy-front-end" target="blank">
                  { UITEXT.recentWork.works.linkToExternal.generic }
                </a>
              </ProjectInfoContainer>
            </WorkItemContainer>

            <WorkItemContainer>
              <ImageWrapper>
                <img alt="photo of my free code camp certification" src="/assets/img/udemy.jpg" />
              </ImageWrapper>
                
              <ProjectInfoContainer>
                <ProjectSubHeader>
                  { UITEXT.recentWork.works.headers.h5 }
                </ProjectSubHeader>

                <ProjectDescription>
                  { UITEXT.recentWork.works.descriptions.d5 }
                </ProjectDescription>
                    
                <ProjectTechsUsed>
                  { UITEXT.recentWork.works.subHeaders.s5 }
                </ProjectTechsUsed>

                <a style={{ marginTop: '10px' }} href="https://udemy-certificate.s3.amazonaws.com/image/UC-H0M5A6T6.jpg" target="blank">
                  { UITEXT.recentWork.works.linkToExternal.generic }
                </a>
              </ProjectInfoContainer>
            </WorkItemContainer>
          </RecentWorkTriFold>

          <Divider />
        </RecentWorkSectionViewContainer>
      </RecentWorkSectionView>
    )
  }
}

const RecentWorkSectionView = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const RecentWorkSectionViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  margin-top: 110px;
  padding-bottom: 100px;
  @media(max-width: 1000px) {
    margin-top: 65px;
  }
`

const RecentWorkH1 = styled.h1`
`

const RecentWorkP = styled.p`
  margin-top: 16px;
  width: 70%;
  color: ${ GREYACCENT };
  @media(max-width: 1000px) {
    width: 76%;
  }
`

const RecentWorkTriFold = styled.div`
  display: flex;
  justify-content: center;
  width: 76%;
  margin-top: 38px;


  flex-wrap: wrap;

  @media(max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    margin-top: 45px;
    height: auto;
  }
`
const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 30px;
`

const WorkItemContainer = styled.div`
  margin: 10px 10px;
  width: 30%;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  border: #eee 1px solid;
  padding: 2em;
  box-sizing: border-box;

  img{
    width: 100%;
  }
  @media(max-width: 1000px) {
    width: 76%;
    height: auto;
    margin-top: 45px;
  }
  @media(max-width: 600px) {
    width: 100%;
  }
`

const WorkItemContainer1 = styled(WorkItemContainer)`
  margin-top: 0px;
`

const ExpandLinks = styled.button`
  background: none;
  border: none;
  text-decoration: underline;
  color: #2196f3;
  letter-spacing: 0.04rem;
  padding: 0;
`

const CodeCampProjectsExpander = styled.div`
  overflow: hidden;
  height: ${({ isExpanded }) => isExpanded ? "140px" : "0px" };
  width: 100%;
  display: flex;
  flex-direction: column;
  transition: height .5s ease-in-out;
  margin-top: 10px;
  a{
    font-size: 11px !important;
    margin-left: 4px;
  }
`

const ProjectInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  text-align: left;
  border-top: #eee 1px solid;

  a{
    width: 100px;
    height: 25px;
    font-size: 14px;
    font-weight: 400;
    color: #0c9ecc;
  }
  @media(max-width: 1000px) {
    height: auto;
  }
`

const ProjectSubHeader = styled.h3`
  margin-top: 30px;
`

const ProjectDescription = styled.p`
  margin-top: 7px;
  line-height: 1em;
  font-size: 12px;
`

const ProjectTechsUsed = styled.p`
  font-size: 10px;
  font-style: italic;
  margin-top: 5px;
  line-height: 1em;
`

const AwardWinningUIP = styled.p`
  width: 76%;
  margin-top: 65px;
`

export default RecentWorkSection