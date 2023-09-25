import styled from "styled-components";
import { TfiArrowCircleLeft, TfiArrowCircleRight } from "react-icons/tfi";
import { useState } from "react";
import CardMobile from "./CardMobile";
import { useLanguageContext } from "../../context/language/useLanguage";

const CarouselMobile = () => {
  const [selected, setSelected] = useState<1 | 2 | 3>(1);
  const text = useLanguageContext();

  const handlerDecrement = () => {
    if (selected === 1) setSelected(3);
    if (selected === 2) setSelected(1);
    if (selected === 3) setSelected(2);
  };

  const handlerIncrement = () => {
    if (selected === 1) setSelected(2);
    if (selected === 2) setSelected(3);
    if (selected === 3) setSelected(1);
  };

  return (
    <StyledCarousel>
      <CardContainer selected={selected}>
        <CardMobile text={text.services.card1} imgUrl="intermediario.png" />
        <CardMobile text={text.services.card2} imgUrl="logistica.png" />
        <CardMobile text={text.services.card3} imgUrl="financiacion.png" />
      </CardContainer>
      <ArrowContainer>
        <TfiArrowCircleLeft size={50} onClick={() => handlerDecrement()} />
        <TfiArrowCircleRight size={50} onClick={() => handlerIncrement()} />
      </ArrowContainer>
    </StyledCarousel>
  );
};

export default CarouselMobile;

const StyledCarousel = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  overflow-x: hidden;
`;

const CardContainer = styled.div<{ selected: 1 | 2 | 3 }>`
  width: 300%;

  display: flex;
  align-items: center;

  transition: transform 0.5s linear;

  transform: ${({ selected }) => {
    return selected === 1 ? "translateX(0)" : selected === 2 ? "translateX(-33.3333%)" : "translateX(33.3333%)";
  }};

  position: relative;
`;

const ArrowContainer = styled.div`
  padding: 1rem 0;
  display: flex;
  gap: 2rem;
  transition: transform 5s ease-in-out;

  color: ${({ theme }) => theme.palette.primary.main};

  svg:hover {
    transform: scale(1.15);
    color: ${({ theme }) => theme.palette.primary.contrastText};

    cursor: pointer;
  }
`;
