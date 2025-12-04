import './App.css'
import styled, { ThemeProvider } from 'styled-components'
import { darkTheme } from './utils/Theme'
import Navbar from './componenets/NavBar'
import { BrowserRouter } from 'react-router-dom'
import HeroSection from './componenets/section/HeroSection'
import Skiils from './componenets/section/Skiils'
import Contact from './componenets/section/Contact'
import StartCanvas from "./componenets/canvas/Stars";
import Footer from './componenets/section/Footer'
import Projects from './componenets/section/Projects'
import Education from './componenets/section/Education'
const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
  position: relative;
`;
const Wrapper = styled.div`
  padding-bottom: 100px;
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;
function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
         <BrowserRouter>
        <Navbar />
          <Body>
           <StartCanvas />
            <div>
             <HeroSection />
               <Wrapper>
                <Skiils />
              </Wrapper>
             <Projects />
              <Wrapper>
                <Education />
                <Contact />
              </Wrapper>
              <Footer />
            </div>
          </Body>
        </BrowserRouter> 
      </ThemeProvider>
    </>
  )
}

export default App
