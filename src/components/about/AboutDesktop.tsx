import styled from "styled-components";
import CardDesktop from "./CardDesktop";
import data from "./data";
import { useLanguageContext } from "../../context/language/useLanguage";

interface Props {
  setModal: React.Dispatch<React.SetStateAction<number>>;
}

const AboutDesktop = ({ setModal }: Props) => {
  const text = useLanguageContext();
  const dataResult = data(text.about);

  return (
    <CardContainer>
      {dataResult.map((el, index) => (
        <CardDesktop
          key={index}
          icon={el.icon}
          title={el.title}
          body={el.body}
          bgImage={el.bgImage}
          index={index}
          setModal={setModal}
        />
      ))}
    </CardContainer>
  );
};

export default AboutDesktop;

const CardContainer = styled.div`
  display: flex;
  height: 100%;
`;
