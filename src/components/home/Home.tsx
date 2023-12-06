import styled from "styled-components";
import { SiGmail, SiLinkedin, SiWhatsapp } from "react-icons/si";

import { useLanguageContext } from "../../context/language/useLanguage";
import WorldIcon from "../../assets/home/WorldIcon";
import FinancingIcon from "../../assets/home/FinancingIcon";
import { useMediaQuery } from "react-responsive";
import LanguageSelector from "../navbar/LanguageSelector";
import { EnabledLanguages } from "../../context/language/LanguageProvider";

interface Props {
  setLanguage: React.Dispatch<React.SetStateAction<EnabledLanguages>>;
  language: EnabledLanguages;
}

const Home = ({ language, setLanguage }: Props) => {
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
            <LanguageSelector language={language} setLanguage={setLanguage} />
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

  position: relative;

  background-image: url("heroimage.webp");
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
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.8rem;
`;

const size = "2.5rem";

const CardInfo = [
  {
    name: "LinkedIn",
    contact: "https://www.linkedin.com/company/100179593/admin/feed/posts/",
    icon: <SiLinkedin size={size} />,
  },
  {
    name: "Email",
    contact: "mailto:info@handlegroup.org",
    icon: <SiGmail size={size} />,
  },
  {
    name: "WhatsApp",
    contact: "https://api.whatsapp.com/send?phone=59896884422",
    icon: <SiWhatsapp size={size} />,
  },
];
