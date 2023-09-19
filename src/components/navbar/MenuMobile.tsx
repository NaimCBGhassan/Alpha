import { useState } from "react";
import MenuHamburgesa from "../../assets/MenuHamburguesa";
import styled from "styled-components";
import { headerHeight } from "../../utils/config";
import { useLanguageContext } from "../../context/language/useLanguage";

const MenuMobile = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const text = useLanguageContext();
  return (
    <MenuMobileContainer
      className={!isActive ? "menuMobileInactive" : undefined}
      onClick={() => setIsActive(!isActive)}
    >
      <MenuHamburgesa />
      {isActive && (
        <Menu>
          <Enlaces href="#home">{text.header.home}</Enlaces>
          <Enlaces href="#services">{text.header.services}</Enlaces>
          <Enlaces href="#about">{text.header.about}</Enlaces>
          <Enlaces href="#contact">{text.header.contact}</Enlaces>
        </Menu>
      )}
    </MenuMobileContainer>
  );
};

export default MenuMobile;

const MenuMobileContainer = styled.div``;

const Menu = styled.nav`
  color: ${({ theme }) => theme.palette.secondary.main};
  background-color: ${({ theme }) => theme.palette.secondary.contrastText};
  position: absolute;
  right: 0;
  left: 0;
  bottom: ${headerHeight.desktop.inVh}vh;

  transition: bottom 0.5s ease-in-out, opacity 0.5s ease-in-out;

  &.menuMobileInactive {
    bottom: -500px;
    opacity: 0;
  }
`;

const Enlaces = styled.a`
  width: 100%;
  padding: 1rem;
  text-align: center;
  display: block;

  &:hover {
    color: ${({ theme }) => theme.palette.secondary.contrastText};
    background-color: ${({ theme }) => theme.palette.secondary.main};
  }
`;
