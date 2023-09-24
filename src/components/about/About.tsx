import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import AboutMobile from "./AboutMobile";

const About = () => {
  const isTabletOrMobile = !useMediaQuery({ query: "(min-width: 768px)" });
  return <StyledAbout id="about">{isTabletOrMobile ? <AboutMobile /> : null}</StyledAbout>;
};

export default About;

const StyledAbout = styled.section`
  background-color: ${(props) => props.theme.palette.secondary.main};
  z-index: 20;
`;
