import styled from "styled-components";

interface Props {
  className: string;
  text: {
    title: string;
    content: string;
  };
  imgUrl: string;
  selected: 1 | 2 | 3;
}

const Card = ({ className, text, selected, imgUrl }: Props) => {
  return (
    <StyledCard selected={selected} className={className}>
      <TitleContainer>
        <ImageContainer src={imgUrl} />
        <h5>{text.title}</h5>
      </TitleContainer>
      <p>{text.content}</p>
    </StyledCard>
  );
};

export default Card;

const StyledCard = styled.article<{ selected: Props["selected"] }>`
  height: 60vh;
  width: 33.333%;
  min-width: 200px;
  color: ${({ theme }) => theme.palette.primary.contrastText};
  background-color: ${({ theme }) => theme.palette.primary.main};

  border-radius: 0.5rem;
  padding: 1.5rem 1.5rem;
  transition: transform 0.35s linear;

  &.element_1 {
    transform: ${({ selected }) => {
      if (selected === 1) return "translateX(0)";
      if (selected === 2) return "translateX(200%)";
      if (selected === 3) return "translateX(100%) scale(1.1)";
    }};
  }

  &.element_2 {
    transform: ${({ selected }) => {
      if (selected === 1) return "translateX(0) scale(1.1)";
      if (selected === 2) return "translateX(-100%)";
      if (selected === 3) return "translateX(100%)";
    }};
  }
  &.element_3 {
    transform: ${({ selected }) => {
      if (selected === 1) return "translateX(0)";
      if (selected === 2) return "translateX(-100%) scale(1.1)";
      if (selected === 3) return "translateX(-200%)";
    }};
  }

  &.position_1 {
    z-index: 20;
  }
  &.position_2 {
    box-shadow: 5px -5px 10px 2px white, -5px -5px 10px 2px white;
    z-index: 30;
  }
  &.position_3 {
    z-index: 10;
  }

  p {
    font-size: var(--fs-p1);
    font-weight: bold;
  }
`;

const TitleContainer = styled.header`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;

  h5 {
    font-size: var(--fs-h5);
    line-height: 1;
    max-width: 70%;
  }
`;

const ImageContainer = styled.img`
  width: 50px;
`;
