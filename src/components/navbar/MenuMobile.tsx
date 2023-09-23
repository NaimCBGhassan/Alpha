import { useState } from "react";
import MenuHamburgesa from "../../assets/MenuHamburguesa";
import styled from "styled-components";
import { headerHeight } from "../../utils/config";
import { useLanguageContext } from "../../context/language/useLanguage";
import MenuCruz from "../../assets/MenuCruz";
import fontSize from "../../utils/font/font";

const MenuMobile = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const text = useLanguageContext();
  return (
    <MenuMobileContainer onClick={() => setIsActive(!isActive)}>
      <MenuHamburgesa isActive={isActive} />
      <MenuCruz isActive={isActive} />

      <Menu className={isActive ? "menuMobileActive" : undefined}>
        <Enlaces href="#home">{text.header.home}</Enlaces>
        <Enlaces href="#services">{text.header.services}</Enlaces>
        <Enlaces href="#about">{text.header.about}</Enlaces>
        <Enlaces href="#contact">{text.header.contact}</Enlaces>
      </Menu>
    </MenuMobileContainer>
  );
};

export default MenuMobile;

const MenuMobileContainer = styled.div`
  font-size: ${fontSize.mobile.h4};
  padding-right: 2.5rem;
`;

const Menu = styled.nav`
  color: ${({ theme }) => theme.palette.secondary.main};
  background-color: ${({ theme }) => theme.palette.secondary.contrastText};
  position: absolute;
  right: 0;
  left: 0;
  bottom: ${headerHeight.mobile.inVh}vh;

  transform: scaleY(0);
  transform-origin: 0% 100%;

  transition: transform 0.5s ease-in-out;

  &.menuMobileActive {
    transform: scaleY(100%);
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
