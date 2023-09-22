import styled from "styled-components";
import WorldIcon from "../../assets/WorldIcon";

interface Props {
  text: {
    title: string;
    content: string;
  };
}

const CardMobile = ({ text }: Props) => {
  return (
    <StyledCard>
      <TitleContainer>
        <WorldIcon />
        <h4>{text.title}</h4>
      </TitleContainer>
      <p>{text.content}</p>
    </StyledCard>
  );
};

export default CardMobile;

const StyledCard = styled.article`
  height: 50vh;
  width: 33.333%;
  min-width: 200px;
  color: ${({ theme }) => theme.palette.primary.contrastText};
  background-color: ${({ theme }) => theme.palette.primary.main};

  border-radius: 0.5rem;
  padding: 1.5rem 1.5rem;
  transition: transform 0.5s linear;

  p {
    font-size: 1.6vw;
    line-height: 2.2vw;
    font-weight: bold;
  }
`;

const TitleContainer = styled.header`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;

  h4 {
    font-size: 2.1vw;
    line-height: 2.8vw;
    width: 70%;
  }

  svg {
    fill: ${({ theme }) => theme.palette.primary.contrastText};
  }
`;
