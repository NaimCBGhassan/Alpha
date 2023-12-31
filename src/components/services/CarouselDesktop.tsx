import styled from "styled-components";
import { TfiArrowCircleLeft, TfiArrowCircleRight } from "react-icons/tfi";
import { useRef, useState } from "react";

import Card from "./CardDesktop";
import { useLanguageContext } from "../../context/language/useLanguage";

const CarouselDesktop = () => {
  const [selected, setSelected] = useState<1 | 2 | 3>(1);
  const isDisabled = useRef(false);
  const text = useLanguageContext();

  const handlerDecrement = () => {
    if (isDisabled.current) return;
    setTimeout(() => (isDisabled.current = false), 400);

    if (selected === 1) setSelected(3);
    if (selected === 2) setSelected(1);
    if (selected === 3) setSelected(2);
    isDisabled.current = true;
  };

  const handlerIncrement = () => {
    if (isDisabled.current) return;
    setTimeout(() => (isDisabled.current = false), 400);

    if (selected === 1) setSelected(2);
    if (selected === 2) setSelected(3);
    if (selected === 3) setSelected(1);

    isDisabled.current = true;
  };

  return (
    <StyledCarouselDesktop>
      <CardContainer>
        <Card
          className={`${getClassName(1, selected)} element_1`}
          text={text.services.card1}
          selected={selected}
          imgUrl="intermediario.png"
        />
        <Card
          className={`${getClassName(2, selected)} element_2`}
          text={text.services.card2}
          selected={selected}
          imgUrl="logistica.png"
        />
        <Card
          className={`${getClassName(3, selected)} element_3`}
          text={text.services.card3}
          selected={selected}
          imgUrl="financiacion.png"
        />
      </CardContainer>
      <ArrowContainer>
        <TfiArrowCircleLeft size={50} onClick={() => handlerDecrement()} />
        <TfiArrowCircleRight size={50} onClick={() => handlerIncrement()} />
      </ArrowContainer>
    </StyledCarouselDesktop>
  );
};

export default CarouselDesktop;

const StyledCarouselDesktop = styled.div``;

const ArrowContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  gap: 4rem;
  transition: transform 5s ease-in-out;

  color: ${({ theme }) => theme.palette.primary.main};

  svg:hover {
    transform: scale(1.1);
    color: ${({ theme }) => theme.palette.primary.contrastText};

    cursor: pointer;
  }
`;

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 2rem;
`;

const getClassName = (cardNumber: 1 | 2 | 3, selected: 1 | 2 | 3): string => {
  switch (cardNumber) {
    case 1:
      if (selected === 1) return "position_1";
      if (selected === 2) return "position_3";
      return "position_2";
    case 2:
      if (selected === 1) return "position_2";
      if (selected === 2) return "position_1";
      return "position_3";
    case 3:
      if (selected === 1) return "position_3";
      if (selected === 2) return "position_2";
      return "position_1";
    default:
      return "";
  }
};
