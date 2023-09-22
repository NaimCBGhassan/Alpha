import styled from "styled-components";
import Card from "./CardDesktop";
import { useState } from "react";
import { useLanguageContext } from "../../context/language/useLanguage";

const CarouselDesktop = () => {
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
    <StyledCarouselDesktop>
      <CardContainer>
        <Card className={`${getClassName(1, selected)} element_1`} text={text.services.card1} selected={selected} />
        <Card className={`${getClassName(2, selected)} element_2`} text={text.services.card2} selected={selected} />
        <Card className={`${getClassName(3, selected)} element_3`} text={text.services.card3} selected={selected} />
      </CardContainer>
      <ButtonContainer>
        <button onClick={handlerDecrement}>{"<"}</button>
        <button onClick={handlerIncrement}>{">"}</button>
      </ButtonContainer>
    </StyledCarouselDesktop>
  );
};

export default CarouselDesktop;

const StyledCarouselDesktop = styled.div``;

const ButtonContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  gap: 4rem;

  button {
    height: 70px;
    width: 70px;
    font-size: 40px;

    border: solid 1px;
    border-radius: 100%;

    color: ${({ theme }) => theme.palette.primary.main};
    background-color: transparent;

    &:hover {
      transform: scale(1.05);
      font-weight: bold;
      border: solid 2px;
    }
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
