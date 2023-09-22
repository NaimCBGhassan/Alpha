import styled from "styled-components";
import { SiGmail, SiLinkedin } from "react-icons/si";
import Form from "./Form";
import { useLanguageContext } from "../../context/language/useLanguage";

const Contact = () => {
  const text = useLanguageContext();
  return (
    <StyledContact id="contact">
      <InfoContainer>
        <ContactInfo>
          <h4>{text.contact.contactInfo[0].title}</h4>
          <p>{text.contact.contactInfo[0].content[0]}</p>
        </ContactInfo>
        <ContactInfo>
          <h4>{text.contact.contactInfo[1].title}</h4>
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

  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const InfoContainer = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 2rem;

  @media screen and (min-width: 768px) {
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  h4 {
    font-size: 1.8vw;
  }
  p {
    font-size: 1.4vw;
  }

  @media screen and (min-width: 768px) {
  }
`;

const Icons = styled.div`
  display: flex;
  gap: 1.5rem;
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
