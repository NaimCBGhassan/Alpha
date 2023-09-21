import styled from "styled-components";
import Form from "./Form";

const Contact = () => {
  return (
    <StyledContact id="contact">
      <div>Contacto</div>
      <Form />
    </StyledContact>
  );
};

export default Contact;

const StyledContact = styled.section`
  background: ${({ theme }) => theme.palette.degraded.contrastText};
  z-index: 30;

  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
