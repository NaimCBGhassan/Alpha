import styled from "styled-components";

const Form = () => {
  return (
    <StyledForm>
      <h4>Hace Tu consulta</h4>
      <InputContainer>
        <label htmlFor="full_name">Nombre y Apellido</label>
        <input id="full_name" type="text" />
      </InputContainer>
      <InputContainer>
        <label htmlFor="full_name">Empresa (Opcional)</label>
        <input id="full_name" type="text" />
      </InputContainer>{" "}
      <InputContainer>
        <label htmlFor="full_name">Email</label>
        <input id="full_name" type="text" />
      </InputContainer>{" "}
      <InputContainer>
        <label htmlFor="full_name">Area</label>
        <input id="full_name" type="text" />
      </InputContainer>
      <InputContainer>
        <label htmlFor="full_name">Tu mensaje</label>
        <textarea name="" id="" cols={30} rows={5}></textarea>
      </InputContainer>
    </StyledForm>
  );
};

export default Form;

const StyledForm = styled.form`
  height: 100%;
  width: 100%;
  font-size: 3vh;
  color: ${({ theme }) => theme.palette.quaternary.contrastText};
  background-color: ${({ theme }) => theme.palette.tertiary.main};

  border-radius: 0.5rem;
  padding: 2.5rem;

  @media screen and (min-width: 768px) {
    width: 50%;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;

  label {
    font-size: 2.6vh;
  }
  input,
  textarea {
    font-size: 2.5vh;
    padding: 0.4rem;
    border-radius: 5px;
  }
`;
