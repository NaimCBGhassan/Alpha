import styled from "styled-components";
import { SiGmail, SiLinkedin, SiWhatsapp } from "react-icons/si";

import useScroll, { type PlaceScrollInViewport } from "../../hooks/useScroll";
import { EnabledLanguages } from "../../context/language/LanguageProvider";
import { useLanguageContext } from "../../context/language/useLanguage";
import { useMediaQuery } from "react-responsive";
import LanguageSelector from "./LanguageSelector";
import MenuMobile from "./MenuMobile";

interface Props {
  onChangeMode(): void;
  setLanguage: React.Dispatch<React.SetStateAction<EnabledLanguages>>;
  language: EnabledLanguages;
}

const Header = ({ language, setLanguage }: Props) => {
  const isTabletOrMobile = !useMediaQuery({ query: "(min-width: 768px)" });
  const placeOnThePage = useScroll();
  const text = useLanguageContext();
  return (
    <StyledHeader className="header" $placeOnThePage={placeOnThePage}>
      {/*** LOGO ***/}
      <a href="#home">
        <Logo
          src={placeOnThePage.general === 3 && !isTabletOrMobile ? "bluelogo-with-text.png" : "whitelogo-with-text.png"}
        />
      </a>
      {/*** LOGO ***/}

      {/*** DESKTOP NAVIGATION ***/}
      {!isTabletOrMobile && (
        <Nav>
          <a href="#services">{text.header.services}</a>
          <a href="#about">{text.header.about}</a>
          <a href="#contact">{text.header.contact}</a>
        </Nav>
      )}
      {/*** DESKTOP NAVIGATION ***/}
      {/*** DESKTOP MEDIA ***/}
      {!isTabletOrMobile && (
        <MediaContainer>
          <LanguageSelector language={language} setLanguage={setLanguage} />
          {CardInfo.map((info, index) => (
            <a key={index} href={info.contact} target="_blank " rel="noopener noreferrer">
              {info.icon}
            </a>
          ))}
        </MediaContainer>
      )}
      {/*** DESKTOP MEDIA ***/}
      {/*** MENU MOBILE ***/}
      {isTabletOrMobile && <MenuMobile />}
      {/*** MENU MOBILE ***/}
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header<{ $placeOnThePage: PlaceScrollInViewport }>`
  min-height: var(--header-hg-mobile);
  color: ${({ theme }) => theme.palette.common.white};

  font-weight: bold;
  background-color: ${({ theme }) => {
    return theme.palette.secondary.main;
  }};

  padding: 0 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: auto;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 100;

  div {
    display: flex;
    align-items: center;
    height: 100%;
  }
  a {
    display: grid;
    align-content: center;
  }
  @media screen and (min-width: 768px) {
    height: var(--header-hg-desktop);
    color: ${({ theme, $placeOnThePage }) => {
      return $placeOnThePage.general === 3 ? theme.palette.primary.contrastText : theme.palette.common.white;
    }};
    background-color: ${({ $placeOnThePage, theme }) => {
      return $placeOnThePage.background ? theme.palette[$placeOnThePage.background].main : "transparent";
    }};
    position: ${({ $placeOnThePage }) => ($placeOnThePage.general === 1 ? "absolute" : "fixed")};
    top: ${({ $placeOnThePage }) => ($placeOnThePage.general === 1 ? "var(--header-defase-desktop)" : "0")};
    z-index: 100;
  }
`;

const Logo = styled.img`
  width: 150px;
  @media screen and (min-width: 768px) {
    width: clamp(200px, 16vw, 230px);
  }
`;

const Nav = styled.nav`
  font-size: var(--fs-h4);
  width: 45%;
  display: flex;
  justify-content: end;
  align-items: center;
  height: 100%;
  gap: 1.8rem;
`;

const MediaContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  gap: 0.8rem;
`;

const size = "1.5rem";

const CardInfo = [
  {
    name: "LinkedIn",
    contact: "https://www.linkedin.com/in/naimchaya",
    icon: <SiLinkedin size={size} />,
  },
  {
    name: "Email",
    contact:
      "mailto:naimchaya.dev@gmail.com?subject=Contact%20From%20Porfolio&body=Hi!%20I%20visit%20you%20from%20your%20personal%20porfolio",
    icon: <SiGmail size={size} />,
  },
  {
    name: "WhatsApp",
    contact:
      "https://api.whatsapp.com/send?phone=543413227984&text=Hi!%20I%20visit%20you%20from%20your%20personal%20porfolio",
    icon: <SiWhatsapp size={size} />,
  },
];
