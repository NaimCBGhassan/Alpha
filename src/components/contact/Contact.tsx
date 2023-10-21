import styled, { keyframes } from "styled-components";
import { SiGmail, SiLinkedin } from "react-icons/si";
import { FaHourglassEnd, FaPhoneAlt } from "react-icons/fa";
import Form from "./Form";
import { useLanguageContext } from "../../context/language/useLanguage";

const Contact = () => {
  const text = useLanguageContext();
  return (
    <StyledContact id="contact">
      <InfoContainer>
        <ContactInfo>
          <h4>
            <FaHourglassEnd className="clock" />
            {text.contact.contactInfo[0].title}
          </h4>
          <p>{text.contact.contactInfo[0].content[0]}</p>
        </ContactInfo>
        <ContactInfo>
          <h4>
            <FaPhoneAlt className="phone" />
            {text.contact.contactInfo[1].title}
          </h4>
          <p>{text.contact.contactInfo[1].content[0]}</p>
          <p>{text.contact.contactInfo[1].content[1]}</p>
        </ContactInfo>
        <Icons>
          {icons.map((info, index) => (
            <a key={index} href={info.contact} target="_blank " rel="noopener noreferrer">
              <p>{info.icon}</p>
            </a>
          ))}
        </Icons>
      </InfoContainer>
      <Form />
    </StyledContact>
  );
};

export default Contact;

const StyledContact = styled.section`
  background: ${({ theme }) => theme.palette.degraded.contrastText};
  z-index: 30;

  &#contact {
    padding: 1rem 1rem 5rem 1rem;
  }

  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    padding: inherit;
    &#contact {
      padding: 15vh 8vw 4vh 8vw;
    }
  }
`;

const InfoContainer = styled.div`
  height: 100%;
  color: inherit;
  text-align: center;
  margin-bottom: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;

  @media screen and (min-width: 768px) {
    color: inherit;
    gap: 2rem;
  }
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const shake = keyframes`
  0% {
   
  }
  25% {
    transform: rotate(-10deg);
  }
  50% {
    transform: rotate(10deg);
  }
  75% {
    transform: rotate(-10deg);
  }
  100% {
    
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.palette.primary.main};

  border: solid 2px;
  padding: 1rem;

  border-radius: 10px;

  h4 {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: var(--fs-h4);
    svg {
      margin-right: 1rem;
    }
    svg.clock {
      width: calc(var(--fs-h4) - 12px);
      animation: ${spin} 5s linear infinite;
    }
    svg.phone {
      width: calc(var(--fs-h4) - 8px);
      animation: ${shake} 0.8s ease infinite;
    }
  }
  p {
    font-size: var(--fs-p1);
  }
`;

const Icons = styled.div`
  display: flex;
  justify-content: center;

  background-color: ${({ theme }) => theme.palette.primary.main};

  gap: 1.5rem;
  border: solid 2px;
  padding: 1rem;

  border-radius: 10px;

  @media screen and (min-width: 768px) {
    color: inherit;
    gap: 2rem;
  }
`;

const size = "2.5rem";

const icons = [
  {
    name: "LinkedIn",
    contact: "https://www.linkedin.com/in/naimchaya",
    icon: <SiLinkedin size={size} />,
  },
  {
    name: "Email",
    contact:
      "mailto:naimchaya.dev@gmail.com?subject=Contact%20From%20Porfolio&body=Hi!%20I%20visit%20you%20from%20your%20personal%20porfolio",
    icon: <SiGmail size={size} />,
  },
];
