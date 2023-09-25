/* import { Dispatch, SetStateAction } from "react"; */
import styled from "styled-components";
import data from "./data";
import { Dispatch, SetStateAction } from "react";

interface Props {
  data: (typeof data)[0];
  setModal: Dispatch<SetStateAction<number>>;
}

const ModalDesktop = ({ data, setModal }: Props) => {
  const { bgImage, body, icon, title } = data;
  return (
    <ModalContainer onClick={() => setModal(0)}>
      <CardContainer $bgImage={bgImage}>
        <div>
          <Title>
            {icon}
            {title}
          </Title>
          <BodyContainer>{body}</BodyContainer>
        </div>
      </CardContainer>
    </ModalContainer>
  );
};

export default ModalDesktop;

const ModalContainer = styled.article`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const CardContainer = styled.article<{ $bgImage: string }>`
  height: 100%;
  background: ${({ $bgImage }) => `url(${$bgImage})`} center no-repeat;
  background-size: cover;
  & > div {
    display: grid;
    align-content: center;
    height: 100%;
    padding: 2rem 10rem;
    color: ${({ theme }) => theme.palette.primary.main};
    background-color: #000000b0;
  }
`;

const Title = styled.h1`
  font-size: var(--fs-h1);
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.8rem;
  svg {
    width: clamp(90px, 15%, 120px);
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
