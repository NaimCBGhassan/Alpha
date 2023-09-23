import styled from "styled-components";
import { SiGmail, SiLinkedin, SiWhatsapp } from "react-icons/si";

import fontSize from "../../utils/font/font";
import { useLanguageContext } from "../../context/language/useLanguage";
import WorldIcon from "../../assets/WorldIcon";
import FinancingIcon from "../../assets/FinancingIcon";
import { useMediaQuery } from "react-responsive";
import { headerHeight } from "../../utils/config";

const Home = () => {
  const text = useLanguageContext();
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <StyledHome id="home">
      {isTabletOrMobile && (
        <MediaContainer>
          {CardInfo.map((info, index) => (
            <a key={index} href={info.contact} target="_blank " rel="noopener noreferrer">
              <p>{info.icon}</p>
            </a>
          ))}
        </MediaContainer>
      )}
      <Title>{text.home.title}</Title>

      <SubtitleContainer>
        <div>
          <WorldIcon />
          <Subtitle>{text.home.subTitle1}</Subtitle>
        </div>

        <div>
          <FinancingIcon />
          <Subtitle>{text.home.subTitle2}</Subtitle>
        </div>
      </SubtitleContainer>
    </StyledHome>
  );
};

export default Home;

const StyledHome = styled.section`
  text-align: center;
  color: ${({ theme }) => theme.palette.secondary.contrastText};

  display: flex;
  flex-direction: column;
  align-items: center;

  &#home {
    padding-bottom: ${headerHeight.mobile.inVh}vh;
  }

  background-image: url("heroImage.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: scroll;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: stretch;
    &#home {
      padding-right: 0;
      padding-bottom: 0;
    }
  }
`;

const Title = styled.h1`
  font-size: ${fontSize.mobile.h1};
  color: ${({ theme }) => theme.palette.secondary.contrastText};
  height: 15rem;
  line-height: 13vw;
  padding: 2rem 0 0 0;

  @media screen and (min-width: 768px) {
    font-size: ${fontSize.tablet.h1};
    text-align: left;
    line-height: 5rem;
    padding-bottom: 2rem;
    width: 50%;

    align-self: end;
  }

  @media screen and (min-width: 1024px) {
    font-size: ${fontSize.desktop.h1};
  }
`;

const SubtitleContainer = styled.div`
  div {
    height: 100px;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 1.2rem;

    svg {
      min-width: 50px;
    }
  }

  @media screen and (min-width: 768px) {
    padding-top: 14rem;
    width: 50%;

    div {
      height: 80px;
      justify-content: center;
    }
  }
`;

const Subtitle = styled.h3`
  font-size: ${fontSize.mobile.h3};
  text-align: left;

  @media screen and (min-width: 768px) {
    font-size: ${fontSize.tablet.h3};
    width: auto;
  }

  @media screen and (min-width: 1024px) {
    font-size: ${fontSize.desktop.h3};
  }
`;

const MediaContainer = styled.div`
  color: ${({ theme }) => theme.palette.secondary.main};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.8rem;
`;

const size = "2.5rem";

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
