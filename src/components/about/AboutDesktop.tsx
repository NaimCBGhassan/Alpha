import styled from "styled-components";
import CardDesktop from "./CardDesktop";
import data from "./data";

const AboutDesktop = () => {
  return (
    <CardContainer>
      {data.map((el, index) => (
        <CardDesktop key={index} icon={el.icon} title={el.title} body={el.body} bgImage={el.bgImage} />
      ))}
    </CardContainer>
  );
};

export default AboutDesktop;

const CardContainer = styled.div`
  display: flex;
  height: 100%;
`;
