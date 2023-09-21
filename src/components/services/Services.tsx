import styled from "styled-components";
import CarouselDesktop from "./CarouselDesktop";

const Services = () => {
  return (
    <StyledServices id="services">
      <CarouselDesktop />
    </StyledServices>
  );
};

export default Services;

const StyledServices = styled.section`
  background-image: ${({ theme }) => theme.palette.degraded.main};
  z-index: 10;
  display: grid;

  align-content: center;

  width: 100%;
`;
