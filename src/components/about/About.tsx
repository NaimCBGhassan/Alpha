import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import AboutMobile from "./AboutMobile";
import AboutDesktop from "./AboutDesktop";
import { useState } from "react";

import data from "./data";
import ModalDesktop from "./ModalDesktop";

const About = () => {
  const [modal, setModal] = useState<number>(0);
  const isTabletOrMobile = !useMediaQuery({ query: "(min-width: 768px)" });
  return (
    <StyledAbout id="about" $modal={modal}>
      {isTabletOrMobile ? <AboutMobile /> : <AboutDesktop setModal={setModal} />}
      {modal !== 0 && <ModalDesktop data={data[modal - 1]} setModal={setModal} />}
    </StyledAbout>
  );
};

export default About;

const StyledAbout = styled.section<{ $modal: number }>`
  background-color: ${(props) => props.theme.palette.secondary.main};
  z-index: ${({ $modal }) => ($modal === 0 ? "20" : "110")};
  @media screen and (min-width: 768px) {
    &#about {
      padding-top: 15vh;
      padding-bottom: 0;
    }
  }
`;
