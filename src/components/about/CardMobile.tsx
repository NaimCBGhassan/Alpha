import styled from "styled-components";

interface Props {
  icon: JSX.Element;
  title: string;
  body: string;
  bgImage: string;
}

const CardMobile = ({ icon, title, body, bgImage }: Props) => {
  return (
    <CardContainer $bgImage={bgImage}>
      <div>
        <Title>
          {icon}
          {title}
        </Title>
        <BodyContainer>{body}</BodyContainer>
      </div>
    </CardContainer>
  );
};

export default CardMobile;

const CardContainer = styled.article<{ $bgImage: string }>`
  height: clamp(350px, 60vw, 400px);
  background: ${({ $bgImage }) => `url(${$bgImage})`} center no-repeat;
  background-size: cover;
  & > div {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
    padding: 2rem 1.5rem;
    color: ${({ theme }) => theme.palette.primary.main};
    background-color: #000000b0;
  }
`;

const Title = styled.h3`
  font-size: var(--fs-h3);
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.8rem;
  svg {
    width: clamp(40px, 15%, 60px);
    stroke: ${({ theme }) => theme.palette.primary.main};
    fill: ${({ theme }) => theme.palette.primary.main};
  }
`;

const BodyContainer = styled.p`
  font-size: var(--fs-p1);
  text-align: center;
  font-weight: bold;
  margin-top: 1.5rem;
`;
