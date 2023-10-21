import styled from "styled-components";

interface Props {
  icon: JSX.Element;
  title: string;
  body: string;
  bgImage: string;
  index: number;
  setModal: React.Dispatch<React.SetStateAction<number>>;
}

const CardDesktop = ({ title, icon, bgImage, index, setModal }: Props) => {
  return (
    <Card onClick={() => setModal(index + 1)}>
      <Image $bgImage={bgImage}>
        <div>
          <h3>{title}</h3>
        </div>
      </Image>
      <IconContainer>{icon}</IconContainer>
    </Card>
  );
};

export default CardDesktop;

const Card = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  cursor: pointer;

  transition: transform 0.3s ease-in-out;

  &:nth-child(even) {
    flex-direction: column-reverse;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

const Image = styled.div<{ $bgImage: string }>`
  height: clamp(300px, 60vw, 400px);
  background: ${({ $bgImage }) => `url(${$bgImage})`} center no-repeat;
  background-size: cover;
  height: 50%;

  & > div {
    display: flex;
    align-items: center;
    height: 100%;
    background-color: #00000090;
    color: ${({ theme }) => theme.palette.primary.main};

    h3 {
      text-align: center;
      font-size: var(--fs-h3);
      font-weight: bold;
      width: 100%;
      background-color: #252440dd;
    }
  }
`;

const IconContainer = styled.div`
  display: grid;
  align-content: center;
  padding: 1rem;
  height: 50%;

  background-color: ${({ theme }) => theme.palette.primary.main};

  svg {
    margin: 0 auto;
    max-height: 100%;
    stroke: ${({ theme }) => theme.palette.primary.contrastText};
    fill: ${({ theme }) => theme.palette.primary.contrastText};
  }
`;
