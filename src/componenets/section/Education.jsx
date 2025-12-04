import React from "react";
import styled from "styled-components";
import { education } from "../../data/constants";
import EducationCard from "../cards/EducationCard";
import EarthCanvas from "../canvas/Earth";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const TimelineContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 20px 0;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, rgba(108, 92, 231, 0.5) 0%, rgba(108, 92, 231, 0) 100%);
  }

  @media (max-width: 768px) {
    &::before {
      left: 30px;
    }
  }
`;

const TimelineItem = styled.div`
  display: flex;
  margin-bottom: 50px;
  position: relative;

  &:nth-child(even) {
    flex-direction: row-reverse;
  }

  @media (max-width: 768px) {
    &:nth-child(even) {
      flex-direction: row;
    }

    margin-bottom: 30px;
  }
`;

const TimelineContent = styled.div`
  width: 45%;

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 80px;
  }
`;

const TimelineDot = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  background: rgba(17, 25, 40, 0.83);
  border: 3px solid rgba(108, 92, 231, 0.8);
  border-radius: 50%;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;

  @media (max-width: 768px) {
    left: 30px;
    width: 40px;
    height: 40px;
    border-width: 2px;
  }
`;

const Education = () => {
  return (
    <Container id="Education">
      <Wrapper>
        <Title>Education</Title>

        <Desc style={{ marginBottom: "40px" }}>
          My education has been a journey of self-discovery and growth. My
          educational details are as follows.
        </Desc>

        <TimelineContainer>
          {education.map((item, index) => (
            <TimelineItem key={`edu-${index}`}>
              <TimelineDot />
              <TimelineContent>
                <EducationCard education={item} />
              </TimelineContent>
            </TimelineItem>
          ))}
        </TimelineContainer>
        <EarthCanvas />
      </Wrapper>
    </Container>
  );
};

export default Education;
