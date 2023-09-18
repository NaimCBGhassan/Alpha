import { useState } from "react";
import MenuHamburgesa from "../../assets/MenuHamburguesa";
import styled from "styled-components";
import { headerHeight } from "../../utils/config";

const MenuMobile = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  return (
    <MenuMobileContainer onClick={() => setIsActive(!isActive)}>
      <MenuHamburgesa />
      {isActive && <Menu>gorread</Menu>}
    </MenuMobileContainer>
  );
};

export default MenuMobile;

const MenuMobileContainer = styled.div``;

const Menu = styled.nav`
  height: 500px;
  background-color: red;

  padding-bottom: ${headerHeight.mobile.inVh}vh;

  position: absolute;
  right: 0;
  left: 0;
`;
