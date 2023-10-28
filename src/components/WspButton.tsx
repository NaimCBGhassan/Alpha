import styled, { keyframes } from "styled-components";

const WspButton = () => {
  return (
    <a href="https://api.whatsapp.com/send?phone=54341322798*4" target="_blank " rel="noopener noreferrer">
      <Container className="wsp">
        <img src="wsp.png" />
      </Container>
    </a>
  );
};

export default WspButton;

const shake = keyframes`
  0% {transform: translateY(0)}
  25% {transform: translateY(-2px)}
  50%{transform: translateY(0)}
  75% {transform: translateY(2px)}
  100% {transform: translateY(0)}
`;

const Container = styled.div`
  position: fixed;
  right: 1.5rem;
  bottom: calc(var(--header-hg-mobile) + 15px);
  height: 65px;
  width: 65px;
  z-index: 100;
  animation: ${shake} 0.4s linear infinite;

  &:hover {
    img {
      transform: scale(1.08);
      cursor: pointer;
    }
  }

  @media screen and (min-width: 768px) {
    right: 0.5rem;
    bottom: 0.5rem;
  }
`;
