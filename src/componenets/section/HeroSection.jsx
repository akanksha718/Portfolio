import HeroBgAnimation from "../HeroBgAnimation";
import Tilt from "react-parallax-tilt";
import styled from 'styled-components'
import { Bio } from '../../data/constants';
import Typewriter from 'typewriter-effect';
import { motion } from "framer-motion";
import HeroImg from "../../images/mee.jpg";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
} from "../../utils/motion";
const HeroContainer = styled.div`
  display:flex;
  justify-content:center;
  position:relative;
  padding:80px 30px;
  z-index:1;
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
  @media(max-width:960px){
    padding:66px 16px;
  }
  @media(max-width:640px){
    padding:32px 16px;
  }    
  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%,0 100%);    
`;
const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    gap: 6px;
    flex-direction: column;
    align-items: center;
  }
`;
const HeroRightContainer = styled.div`
  width: 100%;
  order: 2;
  display: flex;
  justify-content: end;
  @media (max-width: 960px) {
    order: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
      margin-bottom: 80px;
    }
    @media (max-width: 640px) {
      margin-bottom: 30px;
    }
`;
const Title = styled.div`
  font-weight: 700;
  font-size: 50px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
  @media (max-width: 640px) {
    font-size: 32px;
    line-height: 40px;
  }
  @media (max-width: 480px) {
    font-size: 28px;
    line-height: 36px;
  }
`;
const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
  @media (max-width: 640px) {
    font-size: 20px;
    line-height: 36px;
    gap: 8px;
  }
  @media (max-width: 480px) {
    font-size: 18px;
    line-height: 32px;
  }
`;
const Span = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.primary};
`;
const SubTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.text_primary + 95};
  @media (max-width: 960px) {
    text-align: center;
    font-size: 16px;
    line-height: 32px;
  }
  @media (max-width: 640px) {
    font-size: 15px;
    line-height: 28px;
    margin-bottom: 24px;
  }
  @media (max-width: 480px) {
    font-size: 14px;
    line-height: 24px;
  }
`;
const ResumeButton = styled.a`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-decoration: none;
  width: 95%;
  max-width: 300px;
  text-align: center;
  padding: 16px 0;
  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -moz-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -webkit-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  box-shadow: 20px 20px 60px #1f2634, -20px -20px 60px #1f2634;
  border-radius: 50px;
  font-weight: 600;
  font-size: 20px;
  &:hover {
    transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow:  20px 20px 60px #1F2634;
    filter: brightness(1);
  }    
  @media (max-width: 640px) {
    padding: 12px 0;
    font-size: 18px;
  } 
  color: white;
`;
const Img = styled.img`
  border-radius: 50%;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  border: 2px solid ${({ theme }) => theme.primary};
  @media (max-width: 768px) {
    max-width: 300px;
    max-height: 300px;
  }
  @media (max-width: 640px) {
    max-width: 250px;
    max-height: 250px;
  }
  @media (max-width: 480px) {
    max-width: 200px;
    max-height: 200px;
  }
`;
const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  align-items: center;
  bottom: 0;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
  @media (max-width: 960px) {
    justify-content: center;
    padding: 0 20px;
  }
  @media (max-width: 640px) {
    padding: 0 10px;
  }
`;
const HeroSection = () => {
  return (
    <div id='About'>
      <HeroContainer>
        <HeroBg>
          {/* <StarCanvas /> */}
          <HeroBgAnimation />
        </HeroBg>
        <motion.div {...headContainerAnimation}>
          <HeroInnerContainer>
            <HeroLeftContainer>
              <motion.div {...headTextAnimation}>
                <Title>Hi, I am <br />{Bio.name}</Title>
                <TextLoop>
                  I am a
                  <Span>
                    <Typewriter
                      options={{
                        strings: Bio.roles,
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </Span>
                </TextLoop>
              </motion.div>
              <motion.div {...headContentAnimation}>
                <SubTitle>{Bio.description}</SubTitle>
              </motion.div>
              <ResumeButton href={Bio.resume} target="_blank">
                Check Resume
              </ResumeButton>
            </HeroLeftContainer>
            <HeroRightContainer>
              <motion.div {...headContentAnimation}>
                <Tilt>
                  <Img src={HeroImg} alt="akanksha" />
                </Tilt>
              </motion.div>
            </HeroRightContainer>
          </HeroInnerContainer>
        </motion.div>
      </HeroContainer>
    </div>
  )
}

export default HeroSection
