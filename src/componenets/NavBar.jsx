import { Link } from 'react-router-dom';
import styled, { useTheme } from 'styled-components';
import { Bio } from '../data/constants';
import { useState } from 'react';
import { Menu } from 'lucide-react';

const Nav = styled.div`
  background-color: ${({ theme }) => theme.bg};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 100;
  color: white;
`;

const NavbarContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavLogo = styled(Link)`
  padding: 0 6px;
  font-weight: 600;
  font-size: 20px;
  text-decoration: none;
  color: inherit;
`;

const NavItems = styled.ul`
  display: flex;
  align-items: center;
  gap: 32px;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const GithubButton = styled.a`
  border: 1px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  padding: 10px 20px;
  border-radius: 20px;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  transition: 0.2s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text_primary};
  }
`;

const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    color: ${({ theme }) => theme.text_primary};
    cursor: pointer;
  }
`;

const MobileMenu = styled.ul`
  width: 100%;
  position: absolute;
  top: 80px;
  right: 0;
  list-style: none;
  padding: 12px 40px 24px 40px;
  background: ${({ theme }) => theme.card_light + 99};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px rgba(0,0,0,0.2);

  display: flex;
  flex-direction: column;
  gap: 16px;

  transform: ${({ $isOpen }) =>
        $isOpen ? "translateX(0)" : "translateX(100%)"};

  opacity: ${({ $isOpen }) => ($isOpen ? "1" : "0")};
  pointer-events: ${({ $isOpen }) => ($isOpen ? "auto" : "none")};
  transition: all 0.4s ease-in-out;
  z-index: 999;

  @media screen and (min-width: 769px) {
    display: none;
  }
`;


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const theme = useTheme();
    return (
        <Nav>
            <NavbarContainer>

                {/* Logo */}
                <NavLogo to="/">Portfolio</NavLogo>

                {/* Mobile Menu Icon */}
                <MobileIcon onClick={() => setIsOpen(!isOpen)}>
                    <Menu />
                </MobileIcon>

                {/* Desktop Menu */}
                <NavItems>
                    <NavLink href="#About">About</NavLink>
                    <NavLink href="#Skills">Skills</NavLink>
                    {/* <NavLink href="#Experience">Experience</NavLink> */}
                    <NavLink href="#Projects">Projects</NavLink>
                    <NavLink href="#Education">Education</NavLink>
                </NavItems>

                {/* Mobile Menu */}
                <MobileMenu $isOpen={isOpen}>
                    <NavLink href="#About" onClick={() => setIsOpen(false)}>About</NavLink>
                    <NavLink href="#Skills" onClick={() => setIsOpen(false)}>Skills</NavLink>
                    {/* <NavLink href="#Experience" onClick={() => setIsOpen(false)}>Experience</NavLink> */}
                    <NavLink href="#Projects" onClick={() => setIsOpen(false)}>Projects</NavLink>
                    <NavLink href="#Education" onClick={() => setIsOpen(false)}>Education</NavLink>
                    <GithubButton href={Bio.github} target="_blank" style={{
                        background: theme.primary,
                        color: theme.text_primary,
                        width: 160
                    }}>
                        Github Profile
                    </GithubButton>
                </MobileMenu>

                {/* Github Button */}
                <ButtonContainer>
                    <GithubButton href={Bio.github} target="_blank">
                        Github Profile
                    </GithubButton>
                </ButtonContainer>
            </NavbarContainer>
        </Nav>
    );
};

export default Navbar;
