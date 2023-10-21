import styled from "styled-components";
import CardMobile from "./CardMobile";
import data from "./data";
import { useLanguageContext } from "../../context/language/useLanguage";

const AboutMobile = () => {
  const text = useLanguageContext();

  const dataResult = data(text.about);
  return (
    <CardContainer>
      {dataResult.map((el, index) => (
        <CardMobile key={index} icon={el.icon} title={el.title} body={el.body} bgImage={el.bgImage} />
      ))}
    </CardContainer>
  );
};

export default AboutMobile;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
