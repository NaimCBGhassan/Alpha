import styled from "styled-components";

interface Props {
  text: {
    title: string;
    content: string;
  };
  imgUrl: string;
}

const CardMobile = ({ text, imgUrl }: Props) => {
  return (
    <StyledCard>
      <TitleContainer>
        <ImageContainer src={imgUrl} />
        <h4>{text.title}</h4>
      </TitleContainer>
      <p>{text.content}</p>
    </StyledCard>
  );
};

export default CardMobile;

const StyledCard = styled.article`
  height: 45vh;
  width: 33.333%;
  margin: 0 1.5vw;
  color: ${({ theme }) => theme.palette.primary.contrastText};
  background-color: ${({ theme }) => theme.palette.primary.main};

  border-radius: 0.5rem;
  padding: 1.5rem 1.5rem;
  transition: transform 0.5s linear;

  p {
    font-size: var(--fs-p1);
    font-weight: bold;
  }
`;

const TitleContainer = styled.header`
  min-height: 100px;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;

  h4 {
    font-size: var(--fs-h4);
    width: 70%;
  }
`;

const ImageContainer = styled.img`
  width: 50px;
`;
