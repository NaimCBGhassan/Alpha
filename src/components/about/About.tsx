import styled from "styled-components";

const About = () => {
  return <StyledAbout id="about">About</StyledAbout>;
};

export default About;

const StyledAbout = styled.section`
  background-color: ${(props) => props.theme.palette.secondary.main};
  z-index: 20;
`;
