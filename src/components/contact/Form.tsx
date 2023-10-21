import styled, { css, keyframes } from "styled-components";
import { FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Form = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const form = useRef<any>();

  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    if (!form.current) return;
    emailjs.sendForm("service_x2idm9b", "template_vxx1o1m", form.current, "zRK93slStTGd_Hni9").then(
      () => {
        setIsLoading(false);
        toast.success("La consulta fue envidad de forma correcta");
      },
      () => {
        setIsLoading(false);
        toast.error("La consulta no pudo ser enviada");
      }
    );
  };
  return (
    <StyledForm ref={form} onSubmit={sendEmail}>
      <ToastContainer position="bottom-center" autoClose={1000} />
      <h4>Hace Tu consulta</h4>
      <InputContainer>
        <input id="full_name" type="text" placeholder="Nombre y Apellido" name="name" />
      </InputContainer>
      <InputContainer>
        <input id="full_name" type="text" placeholder="Empresa (Opcional)" name="company" />
      </InputContainer>{" "}
      <InputContainer>
        <input id="full_name" type="email" placeholder="Email" name="email" />
      </InputContainer>{" "}
      <InputContainer>
        <input id="full_name" type="text" placeholder="Area" name="area" />
      </InputContainer>
      <InputContainer>
        <textarea cols={30} rows={5} placeholder="Tu mensaje" name="message"></textarea>
      </InputContainer>
      <Button type="submit" $isLoading={isLoading} disabled={isLoading}>
        {isLoading ? <AiOutlineLoading3Quarters /> : "Enviar"}
      </Button>
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
  padding: 1.5rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    width: 50%;
    padding: 2.5rem 2.5rem;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;

  input,
  textarea {
    font-size: 2.5vh;
    padding: 0.4rem 0.8rem;
    border-radius: 0.5rem;
    resize: none;
  }
`;

const Button = styled.button<{ $isLoading: boolean }>`
  font-weight: bold;
  margin-top: 1rem;
  padding: 0.5rem;
  width: 100%;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.palette.quaternary.main};

  &[disabled] {
    cursor: not-allowed;
  }

  svg {
    fill: black;
    animation: ${({ $isLoading }) =>
      $isLoading
        ? css`
            ${rotate} 1s infinite linear
          `
        : "none"};
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
