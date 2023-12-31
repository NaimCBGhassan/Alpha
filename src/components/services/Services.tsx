import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

import CarouselDesktop from "./CarouselDesktop";
import CarouselMobile from "./CarouselMobile";

const Services = () => {
  const isTabletOrMobile = !useMediaQuery({ query: "(min-width: 768px)" });
  return <StyledServices id="services">{isTabletOrMobile ? <CarouselMobile /> : <CarouselDesktop />}</StyledServices>;
};

export default Services;

const StyledServices = styled.section`
  background-image: ${({ theme }) => theme.palette.degraded.main};
  display: grid;

  align-content: center;

  width: 100%;

  &#services {
    padding-bottom: 0;
  }
`;
