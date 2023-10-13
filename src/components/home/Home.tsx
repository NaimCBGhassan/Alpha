import styled from "styled-components";
import { SiGmail, SiLinkedin, SiWhatsapp } from "react-icons/si";

import { useLanguageContext } from "../../context/language/useLanguage";
import WorldIcon from "../../assets/home/WorldIcon";
import FinancingIcon from "../../assets/home/FinancingIcon";
import { useMediaQuery } from "react-responsive";

const Home = () => {
  const text = useLanguageContext();
  const isTabletOrMobile = !useMediaQuery({ query: "(min-width: 768px)" });

  return (
    <StyledHome id="home">
      <Opacity id="home">
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
            <IconContainer>
              <WorldIcon />
            </IconContainer>
            <Subtitle>{text.home.subTitle1}</Subtitle>
          </div>

          <div>
            <IconContainer>
              <FinancingIcon />
            </IconContainer>
            <Subtitle>{text.home.subTitle2}</Subtitle>
          </div>
        </SubtitleContainer>
      </Opacity>
    </StyledHome>
  );
};

export default Home;

const StyledHome = styled.section`
  text-align: center;
  color: ${({ theme }) => theme.palette.secondary.contrastText};

  background-image: url("heroImage.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: scroll;
`;

const Opacity = styled.div`
  background-color: #00000080;
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;

  padding: var(--header-hg-desktop) 8vw;
  padding-bottom: var(--header-hg-mobile);

  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: column-reverse;

    padding-top: var(--header-hg-desktop);
    padding-right: 0;
    padding-bottom: 0;
  }
`;

const Title = styled.h1`
  font-size: var(--fs-h1);
  line-height: 1;
  color: ${({ theme }) => theme.palette.secondary.contrastText};

  padding: 10vh 0;

  @media screen and (min-width: 768px) {
    text-align: left;
    margin-bottom: 1rem;
    width: 50%;
    max-width: 600px;
    align-self: start;
    padding: 0;
  }
`;

const SubtitleContainer = styled.div`
  div {
    height: 100px;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 1.2rem;
  }

  @media screen and (min-width: 768px) {
    padding: 35vh 2rem 0 0;
    align-self: end;

    div {
      height: 80px;
      justify-content: center;
    }
  }
`;

const Subtitle = styled.h3`
  font-size: var(--fs-h3);
  text-align: left;
`;

const IconContainer = styled.div`
  svg {
    width: 50px;
    stroke: ${({ theme }) => theme.palette.common.white};
    fill: ${({ theme }) => theme.palette.common.white};
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
